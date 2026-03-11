"""Hindustan Inox scraper - extracts pipe/tube specs and grade data."""
import sys, os, json
sys.path.insert(0, os.path.dirname(__file__))
from scrape_steel_data import fetch, extract_tables, extract_text_and_links

BASE = "https://www.hindustaninox.com"

PAGES = [
    ("stainless-pipes-tubes.html", "Stainless Pipes & Tubes"),
    ("bright-bars.html", "Bright Bars"),
]

GRADES = [
    "304", "304H", "304L", "316", "316H", "316L", "316N", "316Ti",
    "310", "314", "321", "321H", "347", "410", "430", "2209", "2507", "904L"
]

def parse_hindustan_page(html, page_name):
    """Parse Hindustan Inox product page."""
    text, links = extract_text_and_links(html)
    tables = extract_tables(html)
    products = []

    # Extract product sections from text
    sections = {
        'Seamless Tubes': {'od': '', 'thickness': '', 'length': '', 'specs': ''},
        'Welded Pipes': {'od': '', 'thickness': '', 'length': '', 'specs': ''},
        'U bend Tubes': {'od': '', 'thickness': '', 'length': '', 'specs': ''},
        'Hollow sections': {'od': '', 'thickness': '', 'length': '', 'specs': ''},
    }

    import re
    for section_name in sections:
        # Find OD range
        pattern = rf'{section_name}.*?(?:Outer Diameter|OD)[:\s]*(.*?)(?:Well Thickness|Wall Thickness)'
        match = re.search(pattern, text, re.I | re.DOTALL)
        if match:
            sections[section_name]['od'] = match.group(1).strip()[:100]

        # Find thickness
        pattern = rf'{section_name}.*?(?:Well Thickness|Wall Thickness)[:\s]*(.*?)(?:Length)'
        match = re.search(pattern, text, re.I | re.DOTALL)
        if match:
            sections[section_name]['thickness'] = match.group(1).strip()[:100]

        # Find length
        pattern = rf'{section_name}.*?(?:Length)[:\s]*(.*?)(?:Specifications|Future|$)'
        match = re.search(pattern, text, re.I | re.DOTALL)
        if match:
            sections[section_name]['length'] = match.group(1).strip()[:100]

        # Find specs
        pattern = rf'{section_name}.*?(?:Specifications)[:\s]*(.*?)(?:Future|Seamless|Welded|U bend|Hollow|$)'
        match = re.search(pattern, text, re.I | re.DOTALL)
        if match:
            sections[section_name]['specs'] = match.group(1).strip()[:100]

    for name, data in sections.items():
        if any(data.values()):
            products.append({
                'source': 'hindustan_inox',
                'product_type': name,
                'outer_diameter': data['od'],
                'wall_thickness': data['thickness'],
                'length': data['length'],
                'standards': data['specs'],
                'grades': GRADES,
                'testing': [
                    "Spectrometer", "Air Under Water test", "Eddy Current Test",
                    "Hydro Test", "IGC tests", "Weld Decay Test",
                    "Chemical Analyses", "Destructive testing"
                ],
                'certifications': ["ISO 9001-2015", "AD 2000 Merkblatt WO", "PED 97/23/EC", "ISO 14000:2005"]
            })

    return products

def scrape_hindustan():
    """Scrape Hindustan Inox website."""
    print("  Hindustan Inox: Scraping product pages...")
    all_products = []
    for page, desc in PAGES:
        url = f"{BASE}/{page}"
        html = fetch(url, f"hindustan_{page.replace('.html','')}")
        if not html: continue
        products = parse_hindustan_page(html, page)
        all_products.extend(products)
        print(f"    {desc}: {len(products)} product sections found")

    print(f"  Hindustan Inox: Scraped {len(all_products)} products")
    with open(os.path.join(os.path.dirname(__file__), 'steel_hindustan_raw.json'), 'w') as f:
        json.dump(all_products, f, indent=2)
    return all_products

if __name__ == '__main__':
    data = scrape_hindustan()
    print(f"\nTotal products: {len(data)}")
