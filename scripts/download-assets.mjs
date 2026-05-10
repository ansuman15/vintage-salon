import fs from 'fs';
import path from 'path';

async function downloadAssets() {
  const url = 'https://visage.framer.website/';
  
  // Create directories
  fs.mkdirSync('public/images', { recursive: true });
  fs.mkdirSync('public/videos', { recursive: true });
  
  try {
    const response = await fetch(url);
    const html = await response.text();
    
    // Find all framerusercontent links
    const regex = /https:\/\/framerusercontent\.com\/(images|assets)\/[a-zA-Z0-9]+(\.[a-zA-Z0-9]+)?/g;
    const matches = [...new Set(html.match(regex))];
    
    console.log(`Found ${matches.length} assets`);
    
    let i = 0;
    for (const assetUrl of matches) {
      i++;
      let ext = path.extname(assetUrl) || '.webp';
      try {
        const res = await fetch(assetUrl);
        const buffer = await res.arrayBuffer();
        const filename = `asset_${i}${ext}`;
        fs.writeFileSync(path.join('public/images', filename), Buffer.from(buffer));
        console.log(`Downloaded ${filename}`);
      } catch (e) {
        console.error(`Failed to download ${assetUrl}:`, e.message);
      }
    }
  } catch(e) {
    console.error('Error fetching site', e);
  }
}

downloadAssets();
