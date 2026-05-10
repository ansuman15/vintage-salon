import fs from 'fs';
import path from 'path';

const dir = 'src/components';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.tsx'));

// Replace the fadeUp variant with a properly typed version that avoids Variants type issues
const oldPattern = /const fadeUp = \{[\s\S]*?\n\};/g;
const newVariant = `const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 }
} as const;`;

for (const f of files) {
  const fp = path.join(dir, f);
  let content = fs.readFileSync(fp, 'utf8');
  if (content.includes('const fadeUp')) {
    content = content.replace(oldPattern, newVariant);
    fs.writeFileSync(fp, content);
    console.log('Fixed: ' + f);
  }
}
console.log('Done.');
