/**
 * Script to extract all standards/certifications that do not have a datasheet URL from weldingCategoryData.ts
 * and save them into a highly organized JSON file.
 */
const fs = require('fs');
const path = require('path');

const tsFilePath = path.join(__dirname, '..', 'data', 'weldingCategoryData.ts');
const outputFilePath = path.join(__dirname, '..', 'missing_datasheets_certifications.json');

const tsContent = fs.readFileSync(tsFilePath, 'utf8');

// Regex to find category objects in CONSUMABLE_CATEGORIES
// We will parse the useCases of each category.
// Since it's a TS file, we can extract the CONSUMABLE_CATEGORIES block and evaluate it in JS.
const startIdx = tsContent.indexOf('export const CONSUMABLE_CATEGORIES');
const endIdx = tsContent.indexOf('/* ── NON-CONSUMABLE CATEGORIES');

if (startIdx === -1) {
  console.error('Could not find CONSUMABLE_CATEGORIES in weldingCategoryData.ts');
  process.exit(1);
}

// Extract the array text content
let arrayContent = tsContent.substring(startIdx, endIdx !== -1 ? endIdx : tsContent.length);
// Strip the typescript type annotation and export keyword to make it valid JS
arrayContent = arrayContent.replace('export const CONSUMABLE_CATEGORIES: WeldingMainCategory[] =', '');
// Strip trailing semicolon if present
arrayContent = arrayContent.trim().replace(/;$/, '');

// Mock SITE_IMAGES since it's referenced in the TS file
const SITE_IMAGES = {
  welding: {
    categoryCards: {
      consumables: {
        migTig: '',
        stick: '',
        'metal-cored': '',
        'self-shielded': '',
        'gas-shielded': '',
        'submerged-arc': '',
        stainless: '',
        nickel: '',
        hardfacing: '',
        aluminum: '',
        chromeMoly: ''
      }
    }
  }
};

let categories = [];
try {
  // Evaluate the array cleanly in a secure sandbox/eval
  categories = eval(arrayContent);
} catch (e) {
  console.error('Error evaluating categories array:', e.message);
  process.exit(1);
}

// Organize the missing certifications
const organizedMissing = {};
let totalMissingCount = 0;

categories.forEach(cat => {
  if (!cat.useCases || cat.useCases.length === 0) return;
  
  const categoryLabel = cat.label;
  organizedMissing[categoryLabel] = {};
  
  let catMissingCount = 0;
  
  cat.useCases.forEach(uc => {
    if (!uc.standards || uc.standards.length === 0) return;
    
    // Filter out standards that are objects (they have datasheet URLs)
    const missing = uc.standards.filter(std => {
      return typeof std === 'string';
    });
    
    if (missing.length > 0) {
      organizedMissing[categoryLabel][uc.name] = missing;
      catMissingCount += missing.length;
      totalMissingCount += missing.length;
    }
  });
  
  // If this category has no missing certifications, remove it
  if (catMissingCount === 0) {
    delete organizedMissing[categoryLabel];
  }
});

// Write to formatted JSON file
fs.writeFileSync(outputFilePath, JSON.stringify(organizedMissing, null, 2), 'utf8');

console.log(`\n--- Extraction Complete ---`);
console.log(`Total missing datasheet certifications extracted: ${totalMissingCount}`);
console.log(`Saved organized JSON file to: ${outputFilePath}\n`);

// Display preview of extracted data
for (const [category, useCases] of Object.entries(organizedMissing)) {
  console.log(`\n📂 Category: ${category}`);
  for (const [useCase, standards] of Object.entries(useCases)) {
    console.log(`  🔹 Use Case: ${useCase} (${standards.length} missing)`);
    standards.slice(0, 3).forEach(std => console.log(`    - "${std}"`));
    if (standards.length > 3) {
      console.log(`    - ... and ${standards.length - 3} more`);
    }
  }
}
