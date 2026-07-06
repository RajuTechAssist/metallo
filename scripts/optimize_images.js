const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const WORKSPACE_DIR = path.resolve(__dirname, '..');
const absoluteDirs = [
  path.join(WORKSPACE_DIR, 'public/Welding Consumables/automation'),
  path.join(WORKSPACE_DIR, 'public/Welding Consumables/Safety & PPE'),
  path.join(WORKSPACE_DIR, 'public/Welding Consumables/Accessories & Tools'),
  path.join(WORKSPACE_DIR, 'public/Welding Consumables/consumables')
];

async function optimizeImage(filePath) {
  const stats = fs.statSync(filePath);
  const sizeInMB = stats.size / (1024 * 1024);
  
  // Skip if already small (less than 300KB)
  if (stats.size < 300 * 1024) {
    console.log(`Skipping ${path.basename(filePath)} (already small: ${(stats.size / 1024).toFixed(1)} KB)`);
    return;
  }

  console.log(`Optimizing ${path.basename(filePath)} (${sizeInMB.toFixed(2)} MB)...`);
  
  const ext = path.extname(filePath).toLowerCase();
  const tempPath = filePath + '.tmp';
  
  try {
    let pipeline = sharp(filePath)
      .resize({
        width: 1200,
        height: 1200,
        fit: 'inside',
        withoutEnlargement: true
      });
      
    if (ext === '.png') {
      pipeline = pipeline.png({
        quality: 80,
        compressionLevel: 9,
        palette: true
      });
    } else if (ext === '.jpg' || ext === '.jpeg') {
      pipeline = pipeline.jpeg({
        quality: 80,
        progressive: true
      });
    } else {
      console.log(`Unsupported extension ${ext} for ${filePath}`);
      return;
    }
    
    await pipeline.toFile(tempPath);
    
    // Replace original file with optimized file
    fs.unlinkSync(filePath);
    fs.renameSync(tempPath, filePath);
    
    const newStats = fs.statSync(filePath);
    const newSizeInMB = newStats.size / (1024 * 1024);
    const savings = ((stats.size - newStats.size) / stats.size * 100).toFixed(1);
    
    console.log(`Success: ${path.basename(filePath)} -> ${newSizeInMB.toFixed(2)} MB (Reduced by ${savings}%)`);
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error);
    if (fs.existsSync(tempPath)) {
      try { fs.unlinkSync(tempPath); } catch (e) {}
    }
  }
}

async function processDir(dirPath) {
  if (!fs.existsSync(dirPath)) {
    console.log(`Directory does not exist: ${dirPath}`);
    return;
  }
  
  const files = fs.readdirSync(dirPath);
  console.log(`Scanning ${dirPath}... Found ${files.length} items.`);
  
  for (const file of files) {
    const fullPath = path.join(dirPath, file);
    const stats = fs.statSync(fullPath);
    
    if (stats.isDirectory()) {
      await processDir(fullPath);
    } else {
      const ext = path.extname(file).toLowerCase();
      if (['.png', '.jpg', '.jpeg'].includes(ext)) {
        await optimizeImage(fullPath);
      }
    }
  }
}

async function main() {
  console.log('Starting image optimization...');
  for (const dir of absoluteDirs) {
    await processDir(dir);
  }
  console.log('Finished image optimization!');
}

main();
