/**
 * Script to analyze and map certifications from updated_consumables_metadata.json
 * to the categories in weldingCategoryData.ts
 * 
 * Outputs: which certifications match existing standards, which are new
 */

const fs = require('fs');
const path = require('path');

const jsonData = JSON.parse(
  fs.readFileSync(path.join(__dirname, '..', 'updated_consumables_metadata.json'), 'utf8')
);

const consumables = jsonData.verticals.Consumables;

// Map JSON subcategory names to TS category ids
const categoryMapping = {
  'MIG Wires & TIG Cut Lengths': 'mig-tig',
  'Stick Electrodes': 'stick',
  'Metal-Cored Wires': 'metal-cored',
  'Self-Shielded Flux-Cored': 'self-shielded',
  'Gas Shielded Flux-Cored': 'gas-shielded',
  'Submerged Arc': 'submerged-arc',
  'Stainless Alloys': 'stainless',
  'Nickel Alloys': 'nickel',
  'Hardfacing': 'hardfacing',
  'Aluminum MIG & TIG': 'aluminum',
  'Chrome-Moly Alloys': 'chrome-moly',
};

console.log('=== CERTIFICATION MAPPING ANALYSIS ===\n');

for (const [subCat, certs] of Object.entries(consumables)) {
  const tsId = categoryMapping[subCat] || 'UNKNOWN';
  console.log(`\n### ${subCat} (TS id: ${tsId})`);
  console.log(`  Total certifications in JSON: ${certs.length}`);
  
  if (certs.length === 0) {
    console.log('  (empty - no certifications)');
    continue;
  }

  // Filter out ones with valid URLs
  const validCerts = certs.filter(c => 
    c.datasheet_url && !c.datasheet_url.startsWith('Data sheet link not found')
  );
  const invalidCerts = certs.filter(c => 
    !c.datasheet_url || c.datasheet_url.startsWith('Data sheet link not found')
  );

  console.log(`  Valid datasheet URLs: ${validCerts.length}`);
  console.log(`  Invalid/missing URLs: ${invalidCerts.length}`);

  // Check for duplicates within JSON
  const certNames = certs.map(c => c.certification);
  const uniqueCerts = new Set(certNames);
  if (uniqueCerts.size < certNames.length) {
    console.log(`  WARNING: ${certNames.length - uniqueCerts.size} duplicate certifications in JSON`);
  }

  for (const cert of certs) {
    const hasUrl = cert.datasheet_url && !cert.datasheet_url.startsWith('Data sheet link not found');
    console.log(`    ${hasUrl ? '✓' : '✗'} "${cert.certification}"`);
    if (hasUrl) {
      console.log(`      URL: ${cert.datasheet_url}`);
    }
  }
}
