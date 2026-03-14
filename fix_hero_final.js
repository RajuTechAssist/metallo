import fs from 'fs';
import path from 'path';

const dir = path.join(process.cwd(), 'pages/industries');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.tsx'));

files.forEach(f => {
  let content = fs.readFileSync(path.join(dir, f), 'utf8');

  // 1. Remove all existing dark overlay matches to start fresh
  content = content.replace(/\s*<div className="absolute inset-0 bg-slate-900\/60" \/>/g, '');

  // 2. Add dark overlay precisely after the motion.video closing tag
  content = content.replace(
    /(<motion\.video[\s\S]*?\/>)/g,
    '$1\n                <div className="absolute inset-0 bg-slate-900/60" />'
  );

  // 3. Fix the heights
  content = content.replace(
    /style=\{\{\s*height:\s*['"]clamp\(500px, 80vh, 900px\)['"]\s*\}\}/g,
    'style={{ height: "clamp(400px, 60vh, 700px)" }}'
  );

  // Fix the specific Oil & Gas typo
  content = content.replace(
    /style=\{\{\s*height:\s*'calc\(100vh - 350Spx\)',\s*minHeight:\s*'500px'\s*\}\}/g,
    'style={{ height: "clamp(400px, 60vh, 700px)" }}'
  );

  fs.writeFileSync(path.join(dir, f), content);
  console.log(`Processed ${f}`);
});
