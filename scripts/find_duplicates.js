/**
 * Script to analyze weldingCategoryData.ts for duplicate standards
 */
const fs = require('fs');
const path = require('path');

const tsFilePath = path.join(__dirname, '..', 'data', 'weldingCategoryData.ts');
const tsContent = fs.readFileSync(tsFilePath, 'utf8');

// Simple classification extractor
function getClassificationCodes(str) {
  // Extract all codes that look like standards (e.g., ER70S-6, E6013, ER80S-D2, F7A2-EM12K, etc.)
  const matches = [];
  const regex = /(?:ER|E|F\d+A\d+-EM|T\s*Fe)\d+[A-Z\d\-_\/]+/gi;
  let m;
  while ((m = regex.exec(str)) !== null) {
    matches.push(m[0].toUpperCase().replace(/BS|EN|ISO/g, '').trim());
  }
  
  // Fallback: look for 4+ alphanumeric chars
  if (matches.length === 0) {
    const fallbackRegex = /[A-Z\d\-_\/]{4,}/g;
    while ((m = fallbackRegex.exec(str)) !== null) {
      matches.push(m[0].toUpperCase().replace(/BS|EN|ISO/g, '').trim());
    }
  }
  
  return matches.length > 0 ? matches : [str.toUpperCase().trim()];
}

// Regex to find useCase standards blocks
const useCaseRegex = /name:\s*"([^"]+)"[^]*?standards:\s*(\[[^]*?\])/g;
let match;
console.log('--- Analyzing Standards for Duplicates (Precise JS Parsing) ---');

while ((match = useCaseRegex.exec(tsContent)) !== null) {
  const useCaseName = match[1];
  const standardsBlock = match[2];
  
  // Safely evaluate the standards block as a real JavaScript array
  let standards = [];
  try {
    standards = eval(standardsBlock);
  } catch (e) {
    console.error(`Failed to parse standards block for "${useCaseName}":`, e.message);
    continue;
  }
  
  // Map standards to structured entries
  const entries = standards.map(std => {
    if (typeof std === 'object' && std !== null && 'label' in std) {
      return {
        type: 'object',
        label: std.label,
        url: std.datasheetUrl
      };
    } else if (typeof std === 'string') {
      return {
        type: 'string',
        label: std
      };
    }
    return null;
  }).filter(Boolean);
  
  if (entries.length === 0) continue;
  
  let printedHeader = false;
  function logOverlap(msg) {
    if (!printedHeader) {
      console.log(`\nUse Case: "${useCaseName}" (Total: ${entries.length} standards)`);
      printedHeader = true;
    }
    console.log(msg);
  }
  
  // 1. Check for exact duplicate labels/strings
  const seenLabels = new Map();
  entries.forEach(e => {
    const normalized = e.label.replace(/\s+/g, ' ').trim().toLowerCase();
    if (seenLabels.has(normalized)) {
      const prev = seenLabels.get(normalized);
      logOverlap(`  [!] EXACT DUPLICATE FOUND: "${e.label}"`);
      logOverlap(`      - Current: type ${e.type}${e.type === 'object' ? ` (url: ${e.url})` : ''}`);
      logOverlap(`      - Previous: type ${prev.type}${prev.type === 'object' ? ` (url: ${prev.url})` : ''}`);
    } else {
      seenLabels.set(normalized, e);
    }
  });
  
  // 2. Check for overlapping plain strings vs datasheet objects
  // Build a index of codes found in datasheet objects
  const objCodes = new Map();
  entries.filter(e => e.type === 'object').forEach(e => {
    const codes = getClassificationCodes(e.label);
    codes.forEach(code => {
      objCodes.set(code, e);
    });
  });
  
  entries.filter(e => e.type === 'string').forEach(e => {
    const strCodes = getClassificationCodes(e.label);
    strCodes.forEach(code => {
      // Check for overlapping codes
      for (const [objCode, objEntry] of objCodes.entries()) {
        const isOverlap = code === objCode || 
                          e.label.toUpperCase().includes(objCode) || 
                          objEntry.label.toUpperCase().includes(code) ||
                          objCode.includes(code) ||
                          code.includes(objCode);
        if (isOverlap) {
          logOverlap(`  [!] OVERLAP DUPLICATE: Plain string "${e.label}" overlaps with datasheet standard "${objEntry.label}"`);
          logOverlap(`      - Plain code: ${code}, Datasheet code: ${objCode}`);
        }
      }
    });
  });
}
console.log('\n--- Analysis Complete ---');
