"""
Steel Product Data Scraper
Scrapes data from Trilok Steel, Hindustan Inox, and American Stainless
to enrich Metallo_Steel_Product_Master_v2.json
"""
import urllib.request
import json
import re
import time
import os
from html.parser import HTMLParser

HEADERS = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'}
DELAY = 1.5
OUTPUT_DIR = os.path.dirname(os.path.abspath(__file__))
RAW_DIR = os.path.join(OUTPUT_DIR, 'steel_scraped_pages')
os.makedirs(RAW_DIR, exist_ok=True)

def fetch(url, name=None):
    """Fetch a URL and return HTML content."""
    print(f"  Fetching: {url}")
    req = urllib.request.Request(url, headers=HEADERS)
    try:
        with urllib.request.urlopen(req, timeout=15) as resp:
            html = resp.read().decode('utf-8', errors='replace')
        if name:
            with open(os.path.join(RAW_DIR, f"{name}.html"), 'w', encoding='utf-8') as f:
                f.write(html)
        time.sleep(DELAY)
        return html
    except Exception as e:
        print(f"  ERROR fetching {url}: {e}")
        return ""

class TableParser(HTMLParser):
    """Extract tables from HTML."""
    def __init__(self):
        super().__init__()
        self.tables = []
        self._in_table = False
        self._in_row = False
        self._in_cell = False
        self._current_table = []
        self._current_row = []
        self._current_cell = ""
    def handle_starttag(self, tag, attrs):
        if tag == 'table': self._in_table = True; self._current_table = []
        elif tag == 'tr' and self._in_table: self._in_row = True; self._current_row = []
        elif tag in ('td','th') and self._in_row: self._in_cell = True; self._current_cell = ""
    def handle_endtag(self, tag):
        if tag in ('td','th') and self._in_cell:
            self._in_cell = False; self._current_row.append(self._current_cell.strip())
        elif tag == 'tr' and self._in_row:
            self._in_row = False
            if self._current_row: self._current_table.append(self._current_row)
        elif tag == 'table' and self._in_table:
            self._in_table = False
            if self._current_table: self.tables.append(self._current_table)
    def handle_data(self, data):
        if self._in_cell: self._current_cell += data

class TextExtractor(HTMLParser):
    """Extract text and links from HTML."""
    def __init__(self):
        super().__init__()
        self.text_parts = []
        self.links = []
        self._skip = False
    def handle_starttag(self, tag, attrs):
        if tag in ('script','style','noscript'): self._skip = True
        if tag == 'a':
            d = dict(attrs)
            if 'href' in d: self.links.append(d['href'])
    def handle_endtag(self, tag):
        if tag in ('script','style','noscript'): self._skip = False
    def handle_data(self, data):
        if not self._skip: self.text_parts.append(data.strip())

def extract_tables(html):
    p = TableParser(); p.feed(html); return p.tables

def extract_text_and_links(html):
    p = TextExtractor(); p.feed(html)
    return ' '.join(t for t in p.text_parts if t), p.links

def find_table_with_header(tables, keywords):
    """Find a table containing specific header keywords."""
    for t in tables:
        if t and t[0]:
            header = ' '.join(t[0]).lower()
            if any(k.lower() in header for k in keywords):
                return t
    return None

if __name__ == '__main__':
    from scrape_trilok import scrape_trilok
    from scrape_hindustan import scrape_hindustan
    from scrape_american import scrape_american
    from merge_steel_data import merge_all

    print("="*60)
    print("STEEL PRODUCT DATA SCRAPER")
    print("="*60)

    print("\n[1/4] Scraping Trilok Steel...")
    trilok = scrape_trilok()

    print("\n[2/4] Scraping Hindustan Inox...")
    hindustan = scrape_hindustan()

    print("\n[3/4] Scraping American Stainless...")
    american = scrape_american()

    print("\n[4/4] Merging data...")
    merge_all(trilok, hindustan, american)

    print("\nDone!")
