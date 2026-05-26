/**
 * Script to update weldingCategoryData.ts with datasheet URLs from JSON
 * 
 * Strategy: Read the TS file as text, find each category's standards array,
 * prepend the JSON certifications with datasheetUrl objects, and remove 
 * duplicate plain string standards if they are covered by the new datasheet ones.
 */

const fs = require('fs');
const path = require('path');

const jsonData = JSON.parse(
  fs.readFileSync(path.join(__dirname, '..', 'updated_consumables_metadata.json'), 'utf8')
);

const consumables = jsonData.verticals.Consumables;

// Read the TS file
let tsContent = fs.readFileSync(path.join(__dirname, '..', 'data', 'weldingCategoryData.ts'), 'utf8');

// Step 1: Update the interface to support both string and object standards
tsContent = tsContent.replace(
  'useCases?: { name: string; products?: string[]; standards: string[] }[];',
  'useCases?: { name: string; products?: string[]; standards: (string | { label: string; datasheetUrl: string })[] }[];'
);

console.log('✓ Updated interface type');

// Category mapping: JSON subcategory name -> TS category id -> use case name
const categoryMapping = {
  'MIG Wires & TIG Cut Lengths': { id: 'mig-tig', useCaseName: 'MIG WIRES AND TIG RODS' },
  'Stick Electrodes': { id: 'stick', useCaseName: 'Stick Electrodes' },
  'Metal-Cored Wires': { id: 'metal-cored', useCaseName: 'Metal Cored Wires' },
  'Self-Shielded Flux-Cored': { id: 'self-shielded', useCaseName: 'Self Shielded Flux Cored' },
  'Gas Shielded Flux-Cored': { id: 'gas-shielded', useCaseName: 'Gas-Shielded Flux-Cored' },
  'Submerged Arc': { id: 'submerged-arc', useCaseName: 'Submerged Arc' },
  'Stainless Alloys': { id: 'stainless', useCaseName: 'Stainless Alloys' },
  'Nickel Alloys': { id: 'nickel', useCaseName: 'Nickel Alloys' },
  'Hardfacing': { id: 'hardfacing', useCaseName: 'Hardfacing' },
  'Aluminum MIG & TIG': { id: 'aluminum', useCaseName: 'Aluminum MIG and TIG' },
  'Chrome-Moly Alloys': { id: 'chrome-moly', useCaseName: 'Chrome-Moly Alloys' },
};

// Helper function to extract all normalized codes (e.g. ["ER70S-6", "E6013"]) from standard string
function getClassificationCodes(str) {
  const matches = [];
  const regex = /(?:ER|E|F\d+A\d+-EM|T\s*Fe)\d+[A-Z\d\-_\/]+/gi;
  let m;
  while ((m = regex.exec(str)) !== null) {
    matches.push(m[0].toUpperCase().replace(/BS|EN|ISO/g, '').trim());
  }
  
  if (matches.length === 0) {
    const fallbackRegex = /[A-Z\d\-_\/]{4,}/g;
    while ((m = fallbackRegex.exec(str)) !== null) {
      matches.push(m[0].toUpperCase().replace(/BS|EN|ISO/g, '').trim());
    }
  }
  
  return matches.length > 0 ? matches : [str.toUpperCase().trim()];
}

// For each category with data in JSON, update the standards array 
for (const [subCat, certs] of Object.entries(consumables)) {
  if (!certs || certs.length === 0) continue;
  
  const mapping = categoryMapping[subCat];
  if (!mapping) continue;
  
  // Filter to only valid URLs
  const validCerts = certs.filter(c => 
    c.datasheet_url && !c.datasheet_url.startsWith('Data sheet link not found')
  );
  
  if (validCerts.length === 0) continue;
  
  // Generate final unique certs list
  const certCounts = {};
  for (const cert of validCerts) {
    certCounts[cert.certification] = (certCounts[cert.certification] || 0) + 1;
  }
  
  const duplicateTracker = {};
  const finalCerts = [];
  const datasheetCodes = new Set();
  
  for (const cert of validCerts) {
    let label = cert.certification;
    const count = certCounts[cert.certification];
    if (count > 1) {
      duplicateTracker[cert.certification] = (duplicateTracker[cert.certification] || 0) + 1;
      const suffix = duplicateTracker[cert.certification] > 1 ? ` (Alt ${duplicateTracker[cert.certification]})` : '';
      label = cert.certification + suffix;
    }
    
    finalCerts.push({
      label: label,
      datasheetUrl: cert.datasheet_url
    });
    
    // Extract standard code/class to use for deduplication
    const codes = getClassificationCodes(cert.certification);
    for (const code of codes) {
      if (code) {
        datasheetCodes.add(code);
      }
    }
  }
  
  console.log(`\n${subCat}: ${finalCerts.length} certifications with URLs`);
  
  if (mapping.useCaseName) {
    const useCaseNameEscaped = mapping.useCaseName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    
    // Find pattern: name: "Use Case Name" ... standards: [ (content) ]
    const regex = new RegExp(
      `(name:\\s*"${useCaseNameEscaped}"[^]*?standards:\\s*\\[)([^]*?)(\\])`,
      'g'
    );
    
    const match = regex.exec(tsContent);
    if (match) {
      const matchIndex = match.index;
      const matchFull = match[0];
      const standardsContent = match[2];
      // Safely evaluate the standards block as a real JavaScript array
      let originalStandardsArray = [];
      try {
        originalStandardsArray = eval('[' + standardsContent + ']');
      } catch (e) {
        console.error(`Failed to parse standards content for "${mapping.useCaseName}":`, e.message);
      }
      
      const originalPlainStandards = originalStandardsArray.filter(std => typeof std === 'string');
      
      // Filter out original plain standards that are now covered by datasheet ones
      const filteredPlainStandards = originalPlainStandards.filter(std => {
        const stdCodes = getClassificationCodes(std);
        
        // If this standard's classification code matches one of our datasheet ones, remove it
        for (const stdCode of stdCodes) {
          for (const dsCode of datasheetCodes) {
            const isOverlap = stdCode === dsCode || 
                              std.toUpperCase().includes(dsCode) || 
                              dsCode.includes(stdCode) ||
                              stdCode.includes(dsCode);
            if (isOverlap) {
              console.log(`    ↳ Removing duplicate plain standard: "${std}" (already covered by datasheet standard code "${dsCode}")`);
              return false;
            }
          }
        }
        return true;
      });
      
      // Generate standards block
      const certsStr = finalCerts.map(c => 
        `          { label: ${JSON.stringify(c.label)}, datasheetUrl: ${JSON.stringify(c.datasheetUrl)} },`
      ).join('\n');
      
      const plainStr = filteredPlainStandards.map(s => `          ${JSON.stringify(s)},`).join('\n');
      
      const replacementStandards = `\n${certsStr}${plainStr ? '\n' + plainStr : ''}\n        `;
      
      const replacedContent = match[1] + replacementStandards + match[3];
      
      tsContent = tsContent.substring(0, matchIndex) + replacedContent + tsContent.substring(matchIndex + matchFull.length);
      console.log(`  ✓ Successfully prepended certifications and removed duplicate plain standards for "${mapping.useCaseName}"`);
    } else {
      console.log(`  ✗ Could not find use case "${mapping.useCaseName}"`);
    }
  } else {
    // Chrome-Moly: Has no useCases, need to add one
    const chromeMolyEnd = tsContent.indexOf('image: SITE_IMAGES.welding.categoryCards.consumables.chromeMoly,');
    if (chromeMolyEnd !== -1) {
      const insertPoint = chromeMolyEnd + 'image: SITE_IMAGES.welding.categoryCards.consumables.chromeMoly,'.length;
      
      const certsStr = finalCerts.map(c => 
        `          { label: ${JSON.stringify(c.label)}, datasheetUrl: ${JSON.stringify(c.datasheetUrl)} },`
      ).join('\n');
      
      const useCaseBlock = `
    useCases: [
      {
        name: "Chrome-Moly Alloys",
        standards: [
${certsStr}
        ]
      }
    ],`;
      
      tsContent = tsContent.substring(0, insertPoint) + useCaseBlock + tsContent.substring(insertPoint);
      console.log(`  ✓ Added useCases with ${finalCerts.length} certifications to Chrome-Moly`);
    }
  }
}

// Write the updated file
fs.writeFileSync(path.join(__dirname, '..', 'data', 'weldingCategoryData.ts'), tsContent, 'utf8');
console.log('\n✓ File updated successfully with zero duplicates!');
