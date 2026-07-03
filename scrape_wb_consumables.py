import re
import json
import time
import requests
from bs4 import BeautifulSoup
from urllib.parse import urljoin

# Sourced target endpoints from the WB Alloys platform index
CONSUMABLE_URLS = [
    "https://www.wballoys.co.uk/tig-welding-wire",
    "https://www.wballoys.co.uk/non-low-alloyed-mma-electrodes",
    "https://www.wballoys.co.uk/flux-cored-wire",
    "https://www.wballoys.co.uk/sub-arc-wire-and-flux",
    "https://www.wballoys.co.uk/stainless-steel-welding-consumables",
    "https://www.wballoys.co.uk/nickel-alloy-welding-consumables"
]

HEADERS = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
}

# Regex to safely isolate global industrial welding standards patterns
CERT_REGEX = re.compile(
    r'(AWS\s+A5\.\d+\s*:\s*[\w\-\/\(\)\+\s,]+|EN\s+ISO\s+[\d\-\w]+|BS\s+EN\s+ISO\s+[\d\-\w]+|ASME\s+Section\s+[IVXLCDM\d\s\w]+)', 
    re.IGNORECASE
)

def classify_subcategory(cert_text, context_text=""):
    """
    Sorts scraped certifications dynamically into the 11 explicit Consumables 
    subcategories using clear structural keyword signals.
    """
    combined = (cert_text + " " + context_text).lower()
    
    if "308" in combined or "309" in combined or "316" in combined or "347" in combined or "stainless" in combined:
        return "Stainless Alloys"
    if "erni" in combined or "enikr" in combined or "nickel" in combined or "inconel" in combined:
        return "Nickel Alloys"
    if "4043" in combined or "5356" in combined or "5183" in combined or "aluminum" in combined or "aluminium" in combined:
        return "Aluminum MIG & TIG"
    if "e6010" in combined or "e6013" in combined or "e7018" in combined or "mma" in combined or "electrode" in combined:
        return "Stick Electrodes"
    if "e70c" in combined or "e80c" in combined or "metal-cored" in combined or "metal cored" in combined:
        return "Metal-Cored Wires"
    if "e71t-8" in combined or "e71t-11" in combined or "self-shielded" in combined or "fcaw-s" in combined:
        return "Self-Shielded Flux-Cored"
    if "e71t" in combined or "e81t" in combined or "flux-cored" in combined or "gas-shielded" in combined:
        return "Gas Shielded Flux-Cored"
    if "f7a2" in combined or "em12k" in combined or "sub-arc" in combined or "submerged" in combined or "saw" in combined:
        return "Submerged Arc"
    if "cr-mo" in combined or "chrome-moly" in combined or "b3" in combined or "b9" in combined:
        return "Chrome-Moly Alloys"
    if "hardfacing" in combined or "wear-resistant" in combined or "overlay" in combined:
        return "Hardfacing"
    if "er70s" in combined or "ercusi" in combined or "tig" in combined or "mig" in combined or "solid wire" in combined:
        return "MIG Wires & TIG Cut Lengths"
        
    return "MIG Wires & TIG Cut Lengths" # Default structural fallback bucket

def extract_consumable_data(url):
    extracted_items = []
    print(f"[*] Extracting page: {url}")
    
    try:
        response = requests.get(url, headers=HEADERS, timeout=12)
        if response.status_code != 200:
            return extracted_items
            
        soup = BeautifulSoup(response.text, 'html.parser')
        
        # Scan structural text blocks for classifications
        for element in soup.find_all(['p', 'span', 'h2', 'h3', 'h4', 'li', 'td']):
            text_content = element.get_text(strip=True)
            matches = CERT_REGEX.findall(text_content)
            
            if matches:
                # Isolate matching anchor links for data sheets in the current structural sub-tree
                pdf_link = None
                parent_tree = element.find_parent() or element
                anchors = parent_tree.find_all('a', href=True)
                
                for a in anchors:
                    href = a['href']
                    a_text = a.get_text(strip=True).upper()
                    if '_files/ugd' in href or '.pdf' in href or 'DATA SHEET' in a_text:
                        pdf_link = urljoin("https://www.wballoys.co.uk/", href)
                        break
                
                # Sibling fallback lookup
                if not pdf_link:
                    next_node = element.find_next('a', href=True)
                    if next_node and ('_files/ugd' in next_node['href'] or '.pdf' in next_node['href']):
                        pdf_link = urljoin("https://www.wballoys.co.uk/", next_node['href'])

                for match in matches:
                    clean_cert = match.strip().rstrip('.')
                    if len(clean_cert) > 5:
                        sub_cat = classify_subcategory(clean_cert, text_content)
                        
                        extracted_items.append({
                            "subcategory": sub_cat,
                            "certification": clean_cert,
                            "datasheet_url": pdf_link if pdf_link else "Data sheet link not found dynamically"
                        })
                        
    except Exception as e:
        print(f"[!] Network error parsing {url}: {str(e)}")
        
    return extracted_items

def main():
    # Structural definition for all 11 explicit categories
    consumables_blueprint = {
        "MIG Wires & TIG Cut Lengths": [],
        "Stick Electrodes": [],
        "Metal-Cored Wires": [],
        "Self-Shielded Flux-Cored": [],
        "Gas Shielded Flux-Cored": [],
        "Submerged Arc": [],
        "Stainless Alloys": [],
        "Nickel Alloys": [],
        "Hardfacing": [],
        "Aluminum MIG & TIG": [],
        "Chrome-Moly Alloys": []
    }
    
    # Run targeted extraction loop
    for url in CONSUMABLE_URLS:
        page_records = extract_consumable_data(url)
        
        for item in page_records:
            target_cat = item["subcategory"]
            cert_entry = {
                "certification": item["certification"],
                "datasheet_url": item["datasheet_url"]
            }
            
            # De-duplicate entries cleanly before appending
            if cert_entry not in consumables_blueprint[target_cat]:
                consumables_blueprint[target_cat].append(cert_entry)
        time.sleep(1)

    # Wrap up final output
    final_payload = {
        "industry": "Welding & Allied Processes",
        "verticals": {
            "Consumables": consumables_blueprint
        }
    }
    
    # Export down to JSON
    out_file = "wb_alloys_consumables_only.json"
    with open(out_file, "w", encoding="utf-8") as file:
        json.dump(final_payload, file, indent=2, ensure_ascii=False)
        
    print(f"\n[+] Processing finalized! Consumables data safely stored inside: '{out_file}'")

if __name__ == "__main__":
    main()