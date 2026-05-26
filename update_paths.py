import os
import re
import json

INPUT_JSON = "wb_alloys_consumables_only.json"
OUTPUT_JSON = "updated_consumables_metadata.json"

# Web-accessible public assets root directory sequence
PUBLIC_WEB_PREFIX = "/Welding Consumables/Consumables_dataSheets"

def sanitize_filename(name):
    """Matches the exact filename rules applied during the file download phase."""
    return re.sub(r'[\\/*?:"<>|]', "_", name).strip()

def main():
    if not os.path.exists(INPUT_JSON):
        print(f"[!] Could not locate '{INPUT_JSON}'")
        return

    with open(INPUT_JSON, "r", encoding="utf-8") as f:
        data = json.load(f)

    consumables = data.get("verticals", {}).get("Consumables", {})
    
    updated_count = 0
    skipped_count = 0

    for subcategory, items in consumables.items():
        safe_subcategory = sanitize_filename(subcategory)
        
        for item in items:
            cert_name = item.get("certification")
            current_url = item.get("datasheet_url")

            # Ignore entries that didn't have valid download sheets discovered
            if not current_url or "not found" in current_url.lower():
                skipped_count += 1
                continue

            safe_cert_filename = f"{sanitize_filename(cert_name)}.pdf"
            
            # Construct the clean relative path for the public directory deployment matrix
            local_web_path = f"{PUBLIC_WEB_PREFIX}/{safe_subcategory}/{safe_cert_filename}"
            
            # Update the reference pointer inside the JSON node
            item["datasheet_url"] = local_web_path
            updated_count += 1

    with open(OUTPUT_JSON, "w", encoding="utf-8") as f:
        json.dump(data, f, indent=2, ensure_ascii=False)

    print(f"[+] Update execution finalized successfully!")
    print(f"    - Remapped references to local assets: {updated_count}")
    print(f"    - Preserved unmodified instances (No data sheets available): {skipped_count}")
    print(f"    - Output generated: '{OUTPUT_JSON}'")

if __name__ == "__main__":
    main()