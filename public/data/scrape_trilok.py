"""Trilok Steel scraper - extracts pipe/tube specs per ASTM standard."""
import sys, os
sys.path.insert(0, os.path.dirname(__file__))
from scrape_steel_data import fetch, extract_tables, extract_text_and_links, find_table_with_header

BASE = "https://www.triloksteel.com"

PRODUCT_PAGES = [
    ("astm-a312-tp304-pipe.html", "SS Seamless Pipe", "A312 TP304"),
    ("astm-a312-tp304l-pipe.html", "SS Seamless Pipe", "A312 TP304L"),
    ("astm-a312-tp316-pipe.html", "SS Seamless Pipe", "A312 TP316"),
    ("astm-a312-tp316l-pipe.html", "SS Seamless Pipe", "A312 TP316L"),
    ("astm-a269-tp304-tube.html", "SS Instrumentation Tube", "A269 TP304"),
    ("astm-a269-tp304l-tube.html", "SS Instrumentation Tube", "A269 TP304L"),
    ("astm-a269-tp316-tube.html", "SS Instrumentation Tube", "A269 TP316"),
    ("astm-a269-tp316l-tube.html", "SS Instrumentation Tube", "A269 TP316L"),
    ("astm-a213-tp304-tube.html", "Heat Exchanger Tube", "A213 TP304"),
    ("astm-a213-tp316l-tube.html", "Heat Exchanger Tube", "A213 TP316L"),
    ("stainless-steel-erw-pipe.html", "SS ERW Pipe", "ERW"),
    ("stainless-steel-tube.html", "SS Tube", "General"),
    ("stainless-steel-square-pipe.html", "SS Square Pipe", "Square"),
    ("stainless-steel-conduit-pipe.html", "SS Conduit Pipe", "Conduit"),
    ("stainless-steel-decorative-pipe.html", "SS Decorative Pipe", "Decorative"),
]

def parse_spec_table(html):
    """Extract specification key-value pairs from page."""
    specs = {}
    tables = extract_tables(html)
    # Look for specification/property tables
    for table in tables:
        if len(table) < 2: continue
        for row in table:
            if len(row) >= 2:
                key = row[0].strip().rstrip(':')
                val = row[1].strip()
                if key and val and len(key) < 80:
                    specs[key] = val
    return specs

def parse_chemical_composition(html):
    """Extract chemical composition table."""
    tables = extract_tables(html)
    chem = find_table_with_header(tables, ['Carbon', 'Chromium', 'Nickel', 'Manganese', 'Element', 'C ', 'Cr '])
    if not chem: chem = find_table_with_header(tables, ['C', 'Mn', 'Si', 'P', 'S', 'Cr', 'Ni'])
    if chem and len(chem) >= 2:
        headers = [h.strip() for h in chem[0]]
        values = [v.strip() for v in chem[1]]
        return dict(zip(headers, values))
    return {}

def parse_mechanical_properties(html):
    """Extract mechanical properties."""
    tables = extract_tables(html)
    mech = find_table_with_header(tables, ['Tensile', 'Yield', 'Elongation', 'Hardness'])
    if mech and len(mech) >= 2:
        headers = [h.strip() for h in mech[0]]
        values = [v.strip() for v in mech[1]]
        return dict(zip(headers, values))
    return {}

def parse_dimensions(html):
    """Extract size/dimension data from text."""
    text, _ = extract_text_and_links(html)
    dims = {}
    # OD range
    od_match = re.search(r'(?:Outer Diameter|OD|Size)[:\s]*([0-9./\"\' ]+(?:mm|inch|NB)?\s*(?:to|-)\s*[0-9./\"\' ]+(?:mm|inch|NB)?)', text, re.I)
    if od_match: dims['size_range'] = od_match.group(1).strip()
    # Wall thickness
    wt_match = re.search(r'(?:Wall Thickness|Thickness|Schedule)[:\s]*([^\n,]+(?:SCH|mm|gauge)[^\n,]*)', text, re.I)
    if wt_match: dims['thickness'] = wt_match.group(1).strip()
    # Length
    ln_match = re.search(r'(?:Length)[:\s]*([0-9]+ ?(?:to|-) ?[0-9]+ ?(?:Meter|mtr|m|feet|ft))', text, re.I)
    if ln_match: dims['length'] = ln_match.group(1).strip()
    return dims

def parse_pressure_rating(html):
    """Extract pressure rating tables."""
    tables = extract_tables(html)
    pr = find_table_with_header(tables, ['Pressure', 'PSI', 'Bar', 'NPS', 'Schedule'])
    if pr and len(pr) >= 2:
        return {'headers': pr[0], 'sample_rows': pr[1:min(5, len(pr))]}
    return {}

import re

def scrape_trilok():
    """Scrape all Trilok Steel product pages."""
    print("  Trilok Steel: Scraping product pages...")
    results = []
    for page, product_type, standard in PRODUCT_PAGES:
        url = f"{BASE}/{page}"
        name = page.replace('.html','')
        html = fetch(url, f"trilok_{name}")
        if not html:
            continue
        specs = parse_spec_table(html)
        chem = parse_chemical_composition(html)
        mech = parse_mechanical_properties(html)
        dims = parse_dimensions(html)
        text, links = extract_text_and_links(html)
        # Extract key info from text
        applications = []
        for app_kw in ['Oil & Gas', 'Chemical', 'Petrochemical', 'Pharmaceutical', 'Food', 'Water',
                        'Power Plant', 'Marine', 'Automotive', 'Construction', 'Heat Exchanger',
                        'Boiler', 'Condenser', 'Instrumentation', 'Hydraulic', 'Structural']:
            if app_kw.lower() in text.lower():
                applications.append(app_kw)
        result = {
            'source': 'trilok_steel',
            'product_type': product_type,
            'standard': standard,
            'url': url,
            'specifications': specs,
            'chemical_composition': chem,
            'mechanical_properties': mech,
            'dimensions': dims,
            'applications': applications
        }
        results.append(result)
        print(f"    {standard}: {len(specs)} specs, {len(chem)} chem, {len(applications)} apps")

    print(f"  Trilok Steel: Scraped {len(results)} product pages")
    # Save intermediate
    with open(os.path.join(os.path.dirname(__file__), 'steel_trilok_raw.json'), 'w') as f:
        json.dump(results, f, indent=2)
    return results

import json

if __name__ == '__main__':
    data = scrape_trilok()
    print(f"\nTotal products scraped: {len(data)}")
