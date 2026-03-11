"""
Stanley Power Tools Catalog Scraper
====================================
Downloads the full Stanley power tools catalog from Joomag's text-only API
and saves each page's content, plus a combined output file.

Usage:
    pip install requests beautifulsoup4
    python download_catalog.py

Output:
    - catalog_pages/       → Individual HTML files per page
    - catalog_raw.json     → All pages as structured JSON
    - catalog_combined.txt → All text content combined into one file
"""

import os
import json
import time
import sys

# ---------------------------------------------------------------------------
# Use only standard-library urllib so there's no external dependency required.
# If `requests` is available we prefer it for nicer error handling, but it's
# not mandatory.
# ---------------------------------------------------------------------------
try:
    import requests
    HAS_REQUESTS = True
except ImportError:
    HAS_REQUESTS = False
    import urllib.request
    import urllib.error

try:
    from bs4 import BeautifulSoup
    HAS_BS4 = True
except ImportError:
    HAS_BS4 = False
    import html.parser
    import re


# ── Configuration ──────────────────────────────────────────────────────────
CATALOG_ID = "2706421"
BASE_URL = (
    "https://app.joomag.com/Frontend/WebService/"
    "viewer_text_only_gateway.php"
)
MAX_PAGES = 200          # Upper bound to scan (will stop at first 404)
REQUEST_DELAY = 0.3      # Seconds between requests (be polite)
OUTPUT_DIR = os.path.dirname(os.path.abspath(__file__))
PAGES_DIR = os.path.join(OUTPUT_DIR, "catalog_pages")


# ── Helpers ────────────────────────────────────────────────────────────────

def fetch_page(page_number: int) -> str | None:
    """Fetch a single catalog page. Returns HTML string or None on 404."""
    url = f"{BASE_URL}?id={CATALOG_ID}&number={page_number}"

    if HAS_REQUESTS:
        try:
            resp = requests.get(url, timeout=15)
            if resp.status_code == 404:
                return None
            resp.raise_for_status()
            return resp.text
        except requests.RequestException as exc:
            print(f"  ⚠  Request error on page {page_number}: {exc}")
            return None
    else:
        try:
            req = urllib.request.Request(url)
            with urllib.request.urlopen(req, timeout=15) as resp:
                return resp.read().decode("utf-8")
        except urllib.error.HTTPError as exc:
            if exc.code == 404:
                return None
            print(f"  ⚠  HTTP error on page {page_number}: {exc}")
            return None
        except urllib.error.URLError as exc:
            print(f"  ⚠  URL error on page {page_number}: {exc}")
            return None


def extract_text(html_content: str) -> str:
    """Extract readable text from an HTML fragment."""
    if HAS_BS4:
        soup = BeautifulSoup(html_content, "html.parser")
        return soup.get_text(separator="\n", strip=True)
    else:
        # Fallback: strip HTML tags with regex
        text = re.sub(r"<style[^>]*>.*?</style>", "", html_content, flags=re.DOTALL)
        text = re.sub(r"<[^>]+>", "\n", text)
        text = re.sub(r"\n{3,}", "\n\n", text)
        return text.strip()


def is_content_page(text: str) -> bool:
    """Check if a page has meaningful content beyond just a page number."""
    stripped = text.strip()
    # Pages that only contain a number (the page number) are empty
    if stripped.isdigit() and len(stripped) <= 4:
        return False
    # Very short content with no letters is likely empty
    if len(stripped) < 5 and not any(c.isalpha() for c in stripped):
        return False
    return bool(stripped)


# ── Main ───────────────────────────────────────────────────────────────────

def main():
    print("=" * 60)
    print("  Stanley Power Tools Catalog Scraper")
    print("=" * 60)
    print(f"\n  Catalog ID : {CATALOG_ID}")
    print(f"  Output dir : {OUTPUT_DIR}")
    print(f"  Max pages  : {MAX_PAGES}")
    print()

    # Create output directories
    os.makedirs(PAGES_DIR, exist_ok=True)

    all_pages = []
    content_pages = []
    consecutive_404 = 0

    for page_num in range(0, MAX_PAGES):
        # Progress indicator
        sys.stdout.write(f"\r  Fetching page {page_num:>3d}...")
        sys.stdout.flush()

        html = fetch_page(page_num)

        if html is None:
            consecutive_404 += 1
            if consecutive_404 >= 3:
                print(f"\n  ✓ Reached end of catalog at page {page_num - 2}")
                break
            continue
        else:
            consecutive_404 = 0

        text = extract_text(html)
        has_content = is_content_page(text)

        page_data = {
            "page_number": page_num,
            "has_content": has_content,
            "text": text,
            "html": html,
        }
        all_pages.append(page_data)

        if has_content:
            content_pages.append(page_data)

        # Save individual page HTML
        page_file = os.path.join(PAGES_DIR, f"page_{page_num:03d}.html")
        with open(page_file, "w", encoding="utf-8") as f:
            f.write(html)

        time.sleep(REQUEST_DELAY)

    # ── Save combined outputs ──────────────────────────────────────────

    # 1. Raw JSON with all pages
    raw_json_path = os.path.join(OUTPUT_DIR, "catalog_raw.json")
    json_data = [
        {
            "page_number": p["page_number"],
            "has_content": p["has_content"],
            "text": p["text"],
        }
        for p in all_pages
    ]
    with open(raw_json_path, "w", encoding="utf-8") as f:
        json.dump(json_data, f, indent=2, ensure_ascii=False)

    # 2. Combined text file (only content pages)
    combined_path = os.path.join(OUTPUT_DIR, "catalog_combined.txt")
    with open(combined_path, "w", encoding="utf-8") as f:
        for p in content_pages:
            f.write(f"\n{'='*60}\n")
            f.write(f"  PAGE {p['page_number']}\n")
            f.write(f"{'='*60}\n\n")
            f.write(p["text"])
            f.write("\n")

    # 3. Content-only JSON (pages with actual product data)
    content_json_path = os.path.join(OUTPUT_DIR, "catalog_content.json")
    content_json = [
        {
            "page_number": p["page_number"],
            "text": p["text"],
        }
        for p in content_pages
    ]
    with open(content_json_path, "w", encoding="utf-8") as f:
        json.dump(content_json, f, indent=2, ensure_ascii=False)

    # ── Summary ────────────────────────────────────────────────────────
    print(f"\n\n  {'─'*50}")
    print(f"  Total pages fetched   : {len(all_pages)}")
    print(f"  Pages with content    : {len(content_pages)}")
    print(f"  {'─'*50}")
    print(f"  Individual pages saved to : {PAGES_DIR}")
    print(f"  Raw JSON (all pages)      : {raw_json_path}")
    print(f"  Content JSON              : {content_json_path}")
    print(f"  Combined text             : {combined_path}")
    print(f"  {'─'*50}")
    print("  ✓ Done!\n")


if __name__ == "__main__":
    main()
