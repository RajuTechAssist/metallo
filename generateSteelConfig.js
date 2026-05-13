const fs = require('fs');

const path = require('path');

const dataDir = path.join(__dirname, 'data');
const files = [
  'steelPipesTubesData.ts',
  'steelSheetsPlatesData.ts',
  'steelPipeFittingsData.ts',
  'steelFlangesData.ts',
  'steelFastenersBarsData.ts',
  'steelSealingGasketsData.ts'
];

let steelObj = {};

function setDeep(obj, pathArr, value) {
  let current = obj;
  for (let i = 0; i < pathArr.length - 1; i++) {
    if (!current[pathArr[i]]) current[pathArr[i]] = {};
    current = current[pathArr[i]];
  }
  current[pathArr[pathArr.length - 1]] = value;
}

// Pre-fill hero
steelObj.hero = "'/Steel/steel_hero.jpg'";

const regex = /SITE_IMAGES\.steel\.([a-zA-Z0-9_.[\]'"]+)/g;

for (const file of files) {
  const filePath = path.join(dataDir, file);
  if (!fs.existsSync(filePath)) continue;
  const content = fs.readFileSync(filePath, 'utf8');
  let match;
  while ((match = regex.exec(content)) !== null) {
    let propPath = match[1];
    // handle brackets like duplex["2205Steel..."]
    propPath = propPath.replace(/\[['"]([^'"]+)['"]\]/g, '.$1');
    const parts = propPath.split('.');
    
    // Auto-generate value based on the last part? 
    // Actually, I can't guess the exact image extension/directory easily without the files!
    // Wait, earlier I extracted it from the original files before they were modified.
    // I don't have the original files!
    // But I can scan the /public/Steel directory!
    setDeep(steelObj, parts, "''"); // Placeholder
  }
}

// Now map placeholders to actual files in public/Steel
function findFileIgnoreCase(dir, baseName) {
  if (!fs.existsSync(dir)) return null;
  const items = fs.readdirSync(dir);
  for (const item of items) {
    const fullPath = path.join(dir, item);
    if (fs.statSync(fullPath).isDirectory()) {
      const found = findFileIgnoreCase(fullPath, baseName);
      if (found) return found;
    } else {
      const nameWithoutExt = path.parse(item).name.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
      let targetName = baseName.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
      targetName = targetName.replace(/(png|jpg|jpeg)$/, '');
      if (nameWithoutExt === targetName) {
        return fullPath;
      }
    }
  }
  return null;
}

const publicSteel = path.join(__dirname, 'public', 'Steel');

function resolveValues(obj) {
  for (const key in obj) {
    if (typeof obj[key] === 'object') {
      resolveValues(obj[key]);
    } else if (obj[key] === "''") {
      const found = findFileIgnoreCase(publicSteel, key);
      if (found) {
        const relPath = found.replace(path.join(__dirname, 'public'), '').replace(/\\/g, '/');
        obj[key] = `'${relPath}'`;
      } else {
        obj[key] = `'/Steel/placeholder-${key}.jpg'`;
      }
    }
  }
}

resolveValues(steelObj);

function stringify(obj, indent = '  ') {
  let str = '{\n';
  for (const key in obj) {
    const safeKey = /^[a-zA-Z_$][a-zA-Z0-9_$]*$/.test(key) ? key : `'${key}'`;
    if (typeof obj[key] === 'object') {
      str += `${indent}${safeKey}: ${stringify(obj[key], indent + '  ')},\n`;
    } else {
      str += `${indent}${safeKey}: ${obj[key]},\n`;
    }
  }
  str += indent.substring(2) + '}';
  return str;
}

const output = `export const STEEL_IMAGES = ${stringify(steelObj)};\n`;
fs.mkdirSync(path.join(__dirname, 'config', 'images'), { recursive: true });
fs.writeFileSync(path.join(__dirname, 'config', 'images', 'steel.ts'), output);
console.log('Created config/images/steel.ts');
