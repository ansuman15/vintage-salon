import puppeteer from 'puppeteer';
import fs from 'fs';

async function run() {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });
  
  console.log("Navigating to target...");
  await page.goto('https://visage.framer.website/', { waitUntil: 'networkidle0' });

  console.log("Extracting data...");
  const data = await page.evaluate(() => {
    const extractStyles = (element) => {
      const cs = getComputedStyle(element);
      const props = [
        'fontSize','fontWeight','fontFamily','lineHeight','letterSpacing','color',
        'backgroundColor','padding','margin','width','height','display','flexDirection',
        'justifyContent','alignItems','gap','borderRadius','border','boxShadow',
        'position','top','right','bottom','left','opacity','transform'
      ];
      const styles = {};
      props.forEach(p => { 
        const v = cs[p]; 
        if (v && v !== 'none' && v !== 'normal' && v !== 'auto' && v !== '0px' && v !== 'rgba(0, 0, 0, 0)') {
          styles[p] = v;
        }
      });
      return styles;
    };

    const walk = (element, depth) => {
      if (depth > 6) return null;
      if (!element || element.tagName === 'SCRIPT' || element.tagName === 'STYLE') return null;
      
      const children = [...element.children];
      return {
        tag: element.tagName.toLowerCase(),
        classes: element.className?.toString().split(' ').slice(0, 5).join(' ') || '',
        id: element.id || '',
        text: element.childNodes.length === 1 && element.childNodes[0].nodeType === 3 ? element.textContent.trim().slice(0, 100) : '',
        styles: extractStyles(element),
        src: element.tagName === 'IMG' || element.tagName === 'VIDEO' ? element.src : (getComputedStyle(element).backgroundImage !== 'none' ? getComputedStyle(element).backgroundImage : null),
        href: element.tagName === 'A' ? element.href : null,
        children: children.slice(0, 10).map(c => walk(c, depth + 1)).filter(Boolean)
      };
    };

    return walk(document.body, 0);
  });

  fs.mkdirSync('docs/research', { recursive: true });
  fs.writeFileSync('docs/research/visage-dom.json', JSON.stringify(data, null, 2));
  
  console.log("Extraction complete.");
  await browser.close();
}

run().catch(console.error);
