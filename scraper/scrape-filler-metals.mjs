/**
 * Lincoln Electric Filler Metals Scraper
 * Scrapes product data from Lincoln Electric's Filler Metals categories
 * Run with: node scraper/scrape-filler-metals.mjs
 */

import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUTPUT_DIR = path.join(__dirname, 'output');

// First 4 categories to scrape
const CATEGORIES_TO_SCRAPE = [
  {
    name: "MIG Wires & TIG Cut Lengths",
    url: "https://www.lincolnelectric.com/en/Products/Filler-Metals/MIG-Wires-and-TIG-Rods"
  },
  {
    name: "Stick Electrodes",
    url: "https://www.lincolnelectric.com/en/Products/Filler-Metals/Stick-Electrodes"
  },
  {
    name: "Metal-Cored Wires",
    url: "https://www.lincolnelectric.com/en/Products/Filler-Metals/Metal-Cored-Wires"
  },
  {
    name: "Self-Shielded Flux-Cored",
    url: "https://www.lincolnelectric.com/en/Products/Filler-Metals/Self-Shielded-Flux-Cored"
  }
];

// Ensure output directory exists
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

async function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function getProductLinks(page, categoryUrl) {
  console.log(`\n  Navigating to category: ${categoryUrl}`);
  await page.goto(categoryUrl, { waitUntil: 'networkidle2', timeout: 60000 });
  await delay(2000);

  // Accept cookies if present
  try {
    const cookieBtn = await page.$('#onetrust-accept-btn-handler');
    if (cookieBtn) await cookieBtn.click();
    await delay(1000);
  } catch (e) { /* ignore */ }

  // Extract product links
  const products = await page.evaluate(() => {
    const links = [];
    const anchors = document.querySelectorAll('a[href*="/Products/"]');
    anchors.forEach(a => {
      const href = a.href;
      const text = a.textContent?.trim();
      // Filter to actual product links (not category links)
      if (href && text && text.length > 2 && 
          !href.includes('/Filler-Metals/MIG-Wires') &&
          !href.includes('/Filler-Metals/Stick-Electrodes') &&
          !href.includes('/Filler-Metals/Metal-Cored') &&
          !href.includes('/Filler-Metals/Self-Shielded') &&
          !href.includes('/Filler-Metals/Gas-Shielded') &&
          !href.includes('/Filler-Metals/Submerged') &&
          !href.includes('/Filler-Metals/Stainless') &&
          !href.includes('/Filler-Metals/Nickel') &&
          !href.includes('/Filler-Metals/Hardfacing') &&
          !href.includes('/Filler-Metals/Aluminum') &&
          !href.includes('/Filler-Metals/Chrome') &&
          !href.includes('/Filler-Metals/Buy-America') &&
          !href.endsWith('/Filler-Metals') &&
          !href.endsWith('/Products') &&
          href.includes('lincolnelectric.com')) {
        links.push({ name: text, url: href });
      }
    });
    // Dedupe by URL
    const seen = new Set();
    return links.filter(l => {
      if (seen.has(l.url)) return false;
      seen.add(l.url);
      return true;
    });
  });

  console.log(`  Found ${products.length} products`);
  return products;
}

async function scrapeProductDetail(page, productUrl, productName) {
  console.log(`    Scraping: ${productName}`);
  try {
    await page.goto(productUrl, { waitUntil: 'networkidle2', timeout: 60000 });
    await delay(2000);
  } catch (e) {
    console.log(`    ERROR navigating to ${productUrl}: ${e.message}`);
    return null;
  }

  const data = { name: productName, url: productUrl };

  // Extract basic info (Details tab - usually active by default)
  const basicInfo = await page.evaluate(() => {
    const result = {};
    
    // Product title
    const h1 = document.querySelector('h1');
    result.title = h1?.textContent?.trim() || '';
    
    // Classification/subtitle
    const subtitle = document.querySelector('.product-detail-header__classification, .product-classification, [class*="classification"]');
    result.classification = subtitle?.textContent?.trim() || '';
    
    // Description
    const descEls = document.querySelectorAll('.product-detail-content__description p, .product-detail__description p, [class*="description"] p');
    result.description = Array.from(descEls).map(el => el.textContent?.trim()).filter(Boolean).join(' ') || '';
    
    // If no description found, try broader selectors
    if (!result.description) {
      const detailTab = document.querySelector('#tab-details, [id*="detail"], .tab-content.active, [class*="tab-pane"][class*="active"]');
      if (detailTab) {
        const ps = detailTab.querySelectorAll('p');
        result.description = Array.from(ps).map(el => el.textContent?.trim()).filter(Boolean).join(' ');
      }
    }
    
    // Features list
    const features = document.querySelectorAll('.product-detail-content__features li, [class*="feature"] li');
    result.features = Array.from(features).map(el => el.textContent?.trim()).filter(Boolean);
    
    return result;
  });
  
  Object.assign(data, basicInfo);

  // Tab names to scrape
  const tabsToScrape = ['CONFORMANCE', 'MECHANICAL PROPERTIES', 'WIRE COMPOSITION', 'TYPICAL OPERATING PROCEDURES'];
  
  for (const tabName of tabsToScrape) {
    try {
      // Click the tab
      const tabClicked = await page.evaluate((name) => {
        const tabs = document.querySelectorAll('[role="tab"], .nav-link, .tab-link, [class*="tab"] a, [class*="tab"] button');
        for (const tab of tabs) {
          if (tab.textContent?.trim().toUpperCase().includes(name)) {
            tab.click();
            return true;
          }
        }
        return false;
      }, tabName);

      if (!tabClicked) {
        data[tabName.toLowerCase().replace(/ /g, '_')] = null;
        continue;
      }

      await delay(1500);

      // Extract table data from the active tab
      const tabData = await page.evaluate(() => {
        // Find the currently active/visible tab content
        const activePanel = document.querySelector('.tab-pane.active, .tab-content.active, [role="tabpanel"][class*="active"], [role="tabpanel"]:not([hidden])');
        if (!activePanel) {
          // Fallback: try to find visible content
          const panels = document.querySelectorAll('[role="tabpanel"], .tab-pane');
          for (const p of panels) {
            if (p.offsetHeight > 0) {
              const tables = p.querySelectorAll('table');
              if (tables.length > 0) {
                const result = [];
                tables.forEach(table => {
                  const headers = Array.from(table.querySelectorAll('thead th, thead td')).map(th => th.textContent?.trim());
                  const rows = [];
                  table.querySelectorAll('tbody tr').forEach(tr => {
                    const cells = Array.from(tr.querySelectorAll('td, th')).map(td => td.textContent?.trim());
                    rows.push(cells);
                  });
                  result.push({ headers, rows });
                });
                return result;
              }
            }
          }
          return null;
        }
        
        const tables = activePanel.querySelectorAll('table');
        if (tables.length === 0) {
          // No tables, try to get text content
          return [{ text: activePanel.textContent?.trim() }];
        }
        
        const result = [];
        tables.forEach(table => {
          const headers = Array.from(table.querySelectorAll('thead th, thead td')).map(th => th.textContent?.trim());
          const rows = [];
          table.querySelectorAll('tbody tr').forEach(tr => {
            const cells = Array.from(tr.querySelectorAll('td, th')).map(td => td.textContent?.trim());
            rows.push(cells);
          });
          result.push({ headers, rows });
        });
        return result;
      });

      const key = tabName.toLowerCase().replace(/ /g, '_');
      data[key] = tabData;
    } catch (e) {
      console.log(`      Error scraping tab ${tabName}: ${e.message}`);
      data[tabName.toLowerCase().replace(/ /g, '_')] = null;
    }
  }

  return data;
}

async function main() {
  console.log('Starting Lincoln Electric Filler Metals scraper...');
  console.log(`Scraping ${CATEGORIES_TO_SCRAPE.length} categories\n`);

  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });
  
  const page = await browser.newPage();
  await page.setViewport({ width: 1920, height: 1080 });
  await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36');

  const allData = {};

  for (const category of CATEGORIES_TO_SCRAPE) {
    console.log(`\n${'='.repeat(60)}`);
    console.log(`Category: ${category.name}`);
    console.log(`${'='.repeat(60)}`);

    const productLinks = await getProductLinks(page, category.url);
    const products = [];

    for (let i = 0; i < productLinks.length; i++) {
      const link = productLinks[i];
      console.log(`  [${i + 1}/${productLinks.length}] ${link.name}`);
      const productData = await scrapeProductDetail(page, link.url, link.name);
      if (productData) {
        products.push(productData);
      }
      // Save progress after each product
      allData[category.name] = products;
      fs.writeFileSync(
        path.join(OUTPUT_DIR, 'filler-metals-progress.json'),
        JSON.stringify(allData, null, 2)
      );
    }

    allData[category.name] = products;
    
    // Save category-specific file
    fs.writeFileSync(
      path.join(OUTPUT_DIR, `${category.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}.json`),
      JSON.stringify(products, null, 2)
    );
    
    console.log(`\n  ✓ Completed ${category.name}: ${products.length} products scraped`);
  }

  // Save final combined output
  fs.writeFileSync(
    path.join(OUTPUT_DIR, 'filler-metals-all.json'),
    JSON.stringify(allData, null, 2)
  );

  await browser.close();
  console.log('\n\nScraping complete!');
  console.log(`Output saved to: ${OUTPUT_DIR}`);
}

main().catch(console.error);
