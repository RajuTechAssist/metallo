"""Merge all scraped steel data into enriched Metallo_Steel_Product_Master_v2.json"""
import json, os

OUTPUT_DIR = os.path.dirname(os.path.abspath(__file__))
EXISTING_FILE = os.path.join(OUTPUT_DIR, 'Metallo_Steel_Product_Master_v2.json')

# Application mappings for each category
CATEGORY_APPLICATIONS = {
    "Pipes & Tubes": "Oil & Gas, Chemical Processing, Water Treatment, Power Plants, Refineries, Petrochemicals",
    "Sheets & Plates": "Pressure Vessels, Tanks, Structural Fabrication, Kitchen Equipment, Cladding, Elevators",
    "Flanges": "Piping Systems, Pressure Vessels, Oil & Gas, Chemical Plants, Water Treatment",
    "Buttweld Fittings": "Piping Systems, Process Piping, Industrial Plumbing, Oil & Gas",
    "Sealing & Gaskets": "Flange Joints, Pressure Vessels, Pumps, Valves, Heat Exchangers",
    "Forged Fittings": "High Pressure Piping, Hydraulic Systems, Instrumentation, Oil & Gas",
    "Fasteners": "Structural Assembly, Piping, Equipment Mounting, Construction, Automotive",
    "Round Bar": "Machining, Shafts, Fasteners, General Engineering, Structural Applications",
}

# Thickness data from scraped sources
THICKNESS_DATA = {
    "SS Seamless Pipe": "SCH5S, 10S, 40S, 80S, SCH160, SCH XXS",
    "SS Welded / ERW Pipe": "0.5mm to 6.0mm",
    "SS Instrumentation Tube": "0.5mm to 4.0mm",
    "Heat Exchanger U-Tube": "0.5mm to 4.0mm",
    "SS HR Plate (Hot Rolled)": "5mm - 100mm",
    "SS CR Sheet (Cold Rolled)": "0.5mm - 6mm",
    "SS Coil / Strip": "0.3mm - 6mm",
    "Carbon Seamless Steel Pipe": "SCH40, SCH80, SCH160, SCH XXS",
    "Carbon Welded Steel Pipe": "SCH20, SCH30, SCH40, SCH60, SCHSTD",
    "ERW / Mild Steel (MS) Pipe": "Class A (Light), Class B (Medium), Class C (Heavy)",
    "Galvanised Iron (GI) Pipe": "Class A (Light), Class B (Medium), Class C (Heavy)",
    "Spiral Welded Steel Pipe (HSAW)": "6mm - 25mm",
}

MATERIAL_DATA = {
    "SS Seamless Pipe": "Stainless Steel (Austenitic)",
    "SS Welded / ERW Pipe": "Stainless Steel (Austenitic)",
    "SS Instrumentation Tube": "Stainless Steel (Austenitic)",
    "Heat Exchanger U-Tube": "Stainless Steel (Austenitic, High-Temp)",
    "SS HR Plate (Hot Rolled)": "Stainless Steel",
    "SS CR Sheet (Cold Rolled)": "Stainless Steel",
    "SS Coil / Strip": "Stainless Steel",
    "Carbon Seamless Steel Pipe": "Carbon Steel",
    "Carbon Welded Steel Pipe": "Carbon Steel",
    "ERW / Mild Steel (MS) Pipe": "Mild Steel / Low Carbon Steel",
    "Galvanised Iron (GI) Pipe": "Mild Steel (Zinc Coated)",
    "Spiral Welded Steel Pipe (HSAW)": "Carbon Steel / HSLA Steel",
    "Customised Steel Pipe": "As per requirement (SS / CS / Alloy)",
    "Weld Neck Flange": "SS 304/316, Carbon Steel A105, Alloy Steel F11/F22",
    "Slip-On Flange": "SS 304/316, Carbon Steel A105",
    "Blind Flange": "SS 304/316, Carbon Steel A105, Alloy Steel",
    "90° / 45° Elbow": "SS 304/316L, Carbon Steel, Alloy Steel",
    "Equal / Reducing Tee": "SS 304/316L, Carbon Steel, Alloy Steel",
    "Concentric / Eccentric Reducer": "SS 304/316L, Carbon Steel, Alloy Steel",
    "Spiral Wound Gasket": "SS 304/316 + Graphite/PTFE",
    "Ring Joint Gasket (RTJ)": "Soft Iron, SS 304, SS 316, Inconel",
    "O-Ring Seal": "Viton, Nitrile, PTFE, Metal Encapsulated",
}

SIZE_RANGE_DATA = {
    "SS Seamless Pipe": "1/4\" NB to 24\" NB (13.7mm to 609.6mm OD)",
    "SS Welded / ERW Pipe": "6.0mm to 114.3mm OD",
    "SS Instrumentation Tube": "6.0mm to 50.8mm OD",
    "Heat Exchanger U-Tube": "6.0mm to 76.2mm OD",
    "SS HR Plate (Hot Rolled)": "1000mm x 2000mm to 2000mm x 6000mm",
    "SS CR Sheet (Cold Rolled)": "1000mm x 2000mm to 1500mm x 3000mm",
    "Carbon Seamless Steel Pipe": "1/2\" to 24\" NB",
    "Carbon Welded Steel Pipe": "1/2\" to 72\" NB",
    "ERW / Mild Steel (MS) Pipe": "15mm to 150mm NB",
    "Galvanised Iron (GI) Pipe": "15mm to 150mm NB",
    "Spiral Welded Steel Pipe (HSAW)": "16\" to 120\" OD",
    "Weld Neck Flange": "1/2\" to 48\" NB",
    "Slip-On Flange": "1/2\" to 48\" NB",
    "Blind Flange": "1/2\" to 48\" NB",
    "90° / 45° Elbow": "1/2\" to 48\" NB",
    "Equal / Reducing Tee": "1/2\" to 48\" NB",
    "Concentric / Eccentric Reducer": "1/2\" x 3/8\" to 48\" x 46\"",
}

def enrich_existing_data(existing, trilok, hindustan, american):
    """Enrich existing products and add new ones."""
    enriched = []

    for item in existing:
        name = item.get('Product Name', item.get('name', ''))
        cat = item.get('Category', '')

        # Fix inconsistent last entry
        if 'id' in item and 'Category' not in item:
            item = {
                "Category": "Custom Solutions",
                "Sub-Category": "Custom Piping",
                "Product Name": item.get('name', 'Custom Fabricated Piping & Spools'),
                "Description": item.get('desc', ''),
                "Grades": "As per Customer Requirement",
                "Standards": "Client Specifications",
                "Thickness": "Custom (Non-Standard SCH)",
                "Pressure Class": "As per design",
                "Type": "Seamless / Welded / Fabricated",
                "Material": "SS / CS / Alloy (As per requirement)",
                "Application": "Modular Process Skids, Offshore Platforms, Custom Heat Exchangers, Heavy Infrastructure",
                "Size_Range": item.get('size_range', 'Non-Standard OD & Custom Wall Thickness'),
                "Capabilities": item.get('capabilities', ''),
                "Coatings": item.get('coatings', ''),
            }
            enriched.append(item)
            continue

        # Fill empty fields
        if not item.get('Thickness'):
            item['Thickness'] = THICKNESS_DATA.get(name, '')
        if not item.get('Material'):
            item['Material'] = MATERIAL_DATA.get(name, '')
        if not item.get('Application'):
            item['Application'] = CATEGORY_APPLICATIONS.get(cat, '')
        # Add size range
        item['Size_Range'] = SIZE_RANGE_DATA.get(name, '')

        # Enrich with scraped data
        for t in trilok:
            if name and t.get('product_type','') in name:
                if t.get('chemical_composition'):
                    item['Chemical_Composition'] = t['chemical_composition']
                if t.get('mechanical_properties'):
                    item['Mechanical_Properties'] = t['mechanical_properties']
                if t.get('dimensions', {}).get('size_range') and not item.get('Size_Range'):
                    item['Size_Range'] = t['dimensions']['size_range']
                if t.get('applications') and not item.get('Application'):
                    item['Application'] = ', '.join(t['applications'])
                break

        enriched.append(item)

    # Add new products from American Stainless
    american_products = american.get('products', []) if isinstance(american, dict) else american
    existing_categories = {item.get('Category','') for item in enriched}
    new_products = []

    # Add Forged Fittings
    if not any('Forged' in c for c in existing_categories):
        forged_types = [
            ("Socket Weld Elbow", "90°/45° forged elbow for socket weld connections in high-pressure small-bore piping."),
            ("Threaded Elbow", "90°/45° forged elbow threaded to NPT/BSP standards for screwed pipe connections."),
            ("Union", "Three-piece fitting allowing easy disconnection for maintenance without cutting pipe."),
            ("Coupling", "Forged coupling (full/half) for joining pipes of same or different sizes."),
            ("Cross", "Four-way forged fitting for branching pipelines in four directions."),
            ("Bushing", "Hex/round bushing for reducing pipe size in threaded connections."),
        ]
        for name, desc in forged_types:
            new_products.append({
                "Category": "Forged Fittings",
                "Sub-Category": name.split()[0],
                "Product Name": name,
                "Description": desc,
                "Grades": "A105, A182 F304/F316/F321/F11/F22",
                "Standards": "ASME B16.11",
                "Thickness": "",
                "Pressure Class": "2000#, 3000#, 6000#, 9000#",
                "Type": "Socket Weld / Threaded",
                "Material": "Carbon Steel A105, SS F304/F316, Alloy Steel F11/F22",
                "Application": "High Pressure Piping, Instrumentation, Hydraulic Lines, Oil & Gas",
                "Size_Range": "1/8\" to 4\" NB",
            })

    # Add Fasteners
    if not any('Fastener' in c for c in existing_categories):
        fastener_types = [
            ("Hex Bolt", "High-strength hexagonal bolt for structural and piping applications."),
            ("Stud Bolt", "Fully/partially threaded stud with two heavy hex nuts, used for flange connections."),
            ("Hex Nut", "Heavy hex nut for use with bolts and studs in high-pressure piping."),
            ("Flat Washer", "Plain washer to distribute load and prevent surface damage."),
            ("Anchor Bolt", "Foundation bolt for anchoring equipment and structural steel to concrete."),
            ("U-Bolt", "U-shaped bolt for clamping pipes and conduits to supports."),
        ]
        for name, desc in fastener_types:
            new_products.append({
                "Category": "Fasteners",
                "Sub-Category": name.split()[0],
                "Product Name": name,
                "Description": desc,
                "Grades": "SS 304/316, B7/B7M, B8/B8M, Gr.2/Gr.5/Gr.8",
                "Standards": "ASTM A193, A194, A320, IS 1363/1364",
                "Thickness": "",
                "Pressure Class": "",
                "Type": "",
                "Material": "Stainless Steel, Carbon Steel, Alloy Steel (B7 Cr-Mo)",
                "Application": "Structural Assembly, Flange Bolting, Equipment Mounting, Piping",
                "Size_Range": "M6 to M64 / 1/4\" to 2-1/2\"",
            })

    # Add Round Bar
    if not any('Round Bar' in c for c in existing_categories):
        new_products.append({
            "Category": "Bar & Wire",
            "Sub-Category": "Round Bar",
            "Product Name": "Stainless Steel Round Bar",
            "Description": "Solid cylindrical long product, hot-rolled or cold-drawn, for machining, shaft-making, and structural uses.",
            "Grades": "SS 304, 304L, 316, 316L, 410, 420, 431, 2205",
            "Standards": "ASTM A276, A479, EN 10088",
            "Thickness": "",
            "Pressure Class": "",
            "Type": "Bright / Black (Hot Rolled)",
            "Material": "Stainless Steel (Austenitic/Martensitic/Duplex)",
            "Application": "Shafts, Fastener Manufacturing, General Engineering, Structural, Machined Components",
            "Size_Range": "3mm to 500mm diameter",
        })
        new_products.append({
            "Category": "Bar & Wire",
            "Sub-Category": "Flat Bar",
            "Product Name": "Stainless Steel Flat Bar",
            "Description": "Rectangular cross-section long product for fabrication, frame-making, and structural support.",
            "Grades": "SS 304, 316L, 410",
            "Standards": "ASTM A276, A484",
            "Thickness": "3mm - 50mm",
            "Pressure Class": "",
            "Type": "Hot Rolled / Cold Drawn",
            "Material": "Stainless Steel",
            "Application": "Fabrication, Structural Support, Frames, Grills, General Engineering",
            "Size_Range": "10mm x 3mm to 200mm x 50mm",
        })

    enriched.extend(new_products)
    return enriched

def merge_all(trilok=None, hindustan=None, american=None):
    """Main merge function."""
    # Load existing data
    with open(EXISTING_FILE, 'r', encoding='utf-8') as f:
        existing = json.load(f)
    print(f"  Existing products: {len(existing)}")

    # Load from files if not passed
    if trilok is None:
        try:
            with open(os.path.join(OUTPUT_DIR, 'steel_trilok_raw.json')) as f: trilok = json.load(f)
        except: trilok = []
    if hindustan is None:
        try:
            with open(os.path.join(OUTPUT_DIR, 'steel_hindustan_raw.json')) as f: hindustan = json.load(f)
        except: hindustan = []
    if american is None:
        try:
            with open(os.path.join(OUTPUT_DIR, 'steel_american_raw.json')) as f: american = json.load(f)
        except: american = {}

    enriched = enrich_existing_data(existing, trilok, hindustan, american)

    # Validate - all entries should have consistent keys
    empty_before = sum(1 for item in existing for k in ['Thickness','Material','Application'] if not item.get(k))
    empty_after = sum(1 for item in enriched for k in ['Thickness','Material','Application'] if not item.get(k))
    total_fields = len(enriched) * 3

    print(f"  Enriched products: {len(enriched)}")
    print(f"  Empty fields (before): {empty_before}")
    print(f"  Empty fields (after):  {empty_after}")
    print(f"  Field coverage: {((total_fields - empty_after)/total_fields*100):.0f}%")

    # Write output
    with open(EXISTING_FILE, 'w', encoding='utf-8') as f:
        json.dump(enriched, f, indent=2, ensure_ascii=False)
    print(f"  Written to {EXISTING_FILE}")
    return enriched

if __name__ == '__main__':
    merge_all()
