"""American Stainless scraper - extracts product categories and specs."""
import sys, os, json, re
sys.path.insert(0, os.path.dirname(__file__))
from scrape_steel_data import fetch, extract_tables, extract_text_and_links

BASE = "https://theamericanstainless.com"

CATEGORY_PAGES = [
    ("pipe-tubes-manufacturer-india.php", "Pipes & Tubes"),
    ("flanges-manufacturer-india.php", "Flanges"),
    ("buttweld-fittings-manufacturer-india.php", "Buttweld Fittings"),
    ("forged-fittings-manufacturer-india.php", "Forged Fittings"),
    ("fasteners-manufacturer-india.php", "Fasteners"),
    ("sheet-plate-coil-manufacturer-india.php", "Sheet, Plate & Coil"),
    ("round-bar-manufacturer-india.php", "Round Bar"),
]

MATERIAL_PAGES = [
    ("stainless-steel-manufacturer-india.php", "Stainless Steel"),
    ("carbon-steel-manufacturer-india.php", "Carbon Steel"),
    ("alloy-steel-manufacturer-india.php", "Alloy Steel"),
    ("nickel-alloy-manufacturer-india.php", "Nickel Alloy"),
]

def extract_product_types(html, category):
    """Extract sub-product types from a category page."""
    text, links = extract_text_and_links(html)
    tables = extract_tables(html)
    products = []
    specs = {}
    applications = []

    # Extract specs from tables
    for table in tables:
        if len(table) >= 2:
            for row in table:
                if len(row) >= 2:
                    k, v = row[0].strip(), row[1].strip()
                    if k and v and len(k) < 80: specs[k] = v

    # Extract applications
    app_patterns = [
        'Oil and Gas', 'Chemical', 'Petrochemical', 'Power Plant', 'Marine',
        'Automotive', 'Pharmaceutical', 'Sugar', 'Pulp & Paper', 'Refining',
        'Shipbuilding', 'Construction', 'Water Treatment', 'Food Processing',
        'Nuclear', 'Mining', 'Aerospace', 'Defence'
    ]
    for app in app_patterns:
        if app.lower() in text.lower(): applications.append(app)

    # Extract product sub-types from text
    sub_types = []
    if category == "Pipes & Tubes":
        sub_types = ["Seamless Pipes", "Welded Pipes", "ERW Pipes"]
    elif category == "Flanges":
        sub_types = ["Weld Neck Flange", "Slip On Flange", "Blind Flange",
                     "Threaded Flange", "Socket Weld Flange", "Lap Joint Flange"]
    elif category == "Buttweld Fittings":
        sub_types = ["90° Elbow", "45° Elbow", "Equal Tee", "Reducing Tee",
                     "Concentric Reducer", "Eccentric Reducer", "Stub End", "Pipe Cap"]
    elif category == "Forged Fittings":
        sub_types = ["Socket Weld Elbow", "Threaded Elbow", "Socket Weld Tee",
                     "Threaded Tee", "Union", "Coupling", "Half Coupling", "Cross", "Bushing"]
    elif category == "Fasteners":
        sub_types = ["Hex Bolt", "Stud Bolt", "Hex Nut", "Washer", "Anchor Bolt", "Threaded Rod"]
    elif category == "Sheet, Plate & Coil":
        sub_types = ["HR Plate", "CR Sheet", "Coil/Strip", "Chequered Plate", "Perforated Sheet"]
    elif category == "Round Bar":
        sub_types = ["Round Bar", "Flat Bar", "Hex Bar", "Square Bar", "Hollow Bar"]

    # Extract materials
    materials = []
    for mat in ["Stainless Steel", "Carbon Steel", "Alloy Steel", "Nickel Alloy",
                "Inconel", "Monel", "Hastelloy", "Titanium", "Copper"]:
        if mat.lower() in text.lower(): materials.append(mat)

    # Extract standards
    standards = []
    std_patterns = [r'ASTM [A-Z]\d+', r'ASME [A-Z]\d+\.?\d*', r'API \d+[A-Z]*',
                    r'EN \d+', r'DIN \d+', r'IS \d+', r'BS \d+']
    for pat in std_patterns:
        found = re.findall(pat, text)
        standards.extend(found)
    standards = list(set(standards))

    products.append({
        'source': 'american_stainless',
        'category': category,
        'sub_types': sub_types,
        'materials': materials,
        'standards': standards[:10],
        'specifications': specs,
        'applications': applications,
    })
    return products

def scrape_american():
    """Scrape American Stainless website."""
    print("  American Stainless: Scraping product categories...")
    all_products = []
    for page, category in CATEGORY_PAGES:
        url = f"{BASE}/{page}"
        html = fetch(url, f"american_{page.replace('.php','')}")
        if not html: continue
        products = extract_product_types(html, category)
        all_products.extend(products)
        print(f"    {category}: {len(products)} entries, materials={products[0].get('materials',[])} ")

    # Also scrape material pages for grade info
    material_grades = {}
    for page, material in MATERIAL_PAGES:
        url = f"{BASE}/{page}"
        html = fetch(url, f"american_{page.replace('.php','')}")
        if not html: continue
        text, _ = extract_text_and_links(html)
        grades = re.findall(r'(?:Grade|UNS|ASTM)\s*[A-Z]?\d+[A-Z]?\d*', text)
        grades = list(set(grades))[:20]
        material_grades[material] = grades
        print(f"    {material}: {len(grades)} grades found")

    print(f"  American Stainless: Scraped {len(all_products)} categories")
    output = {'products': all_products, 'material_grades': material_grades}
    with open(os.path.join(os.path.dirname(__file__), 'steel_american_raw.json'), 'w') as f:
        json.dump(output, f, indent=2)
    return output

if __name__ == '__main__':
    data = scrape_american()
    print(f"\nTotal categories: {len(data['products'])}")
    print(f"Material grades: {list(data['material_grades'].keys())}")
