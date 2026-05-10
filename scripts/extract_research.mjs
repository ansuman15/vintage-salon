import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const researchDir = path.join(__dirname, '..', 'docs', 'research');

async function extractData(url) {
  console.log(`Starting extraction for ${url}`);
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto(url, { waitUntil: 'networkidle0' });

  console.log('Extracting global assets and tokens...');
  const globalData = await page.evaluate(() => {
    return {
      images: [...document.querySelectorAll('img')].map(img => ({
        src: img.src || img.currentSrc,
        alt: img.alt,
        width: img.naturalWidth,
        height: img.naturalHeight,
        parentClasses: img.parentElement?.className,
        siblings: img.parentElement ? [...img.parentElement.querySelectorAll('img')].length : 0,
        position: getComputedStyle(img).position,
        zIndex: getComputedStyle(img).zIndex
      })),
      videos: [...document.querySelectorAll('video')].map(v => ({
        src: v.src || v.querySelector('source')?.src,
        poster: v.poster,
        autoplay: v.autoplay,
        loop: v.loop,
        muted: v.muted
      })),
      backgroundImages: [...document.querySelectorAll('*')].filter(el => {
        const bg = getComputedStyle(el).backgroundImage;
        return bg && bg !== 'none' && !bg.includes('gradient');
      }).map(el => ({
        url: getComputedStyle(el).backgroundImage,
        element: el.tagName + '.' + el.className?.split(' ')[0]
      })),
      gradients: [...document.querySelectorAll('*')].filter(el => {
        const bg = getComputedStyle(el).backgroundImage;
        return bg && bg.includes('gradient');
      }).map(el => ({
        url: getComputedStyle(el).backgroundImage,
        element: el.tagName + '.' + el.className?.split(' ')[0]
      })),
      svgs: [...document.querySelectorAll('svg')].map(svg => svg.outerHTML),
      fonts: [...new Set([...document.querySelectorAll('*')].slice(0, 1000).map(el => getComputedStyle(el).fontFamily))],
      colors: [...new Set([...document.querySelectorAll('*')].map(el => getComputedStyle(el).color))],
      bgColors: [...new Set([...document.querySelectorAll('*')].map(el => getComputedStyle(el).backgroundColor))],
      favicons: [...document.querySelectorAll('link[rel*="icon"]')].map(l => ({ href: l.href, sizes: l.sizes?.toString() })),
    };
  });

  fs.writeFileSync(path.join(researchDir, 'global_assets.json'), JSON.stringify(globalData, null, 2));
  console.log('Saved global_assets.json');

  console.log('Taking full page screenshots...');
  await page.screenshot({ path: path.join(__dirname, '..', 'docs', 'design-references', 'desktop_full.png'), fullPage: true });
  await page.setViewport({ width: 390, height: 844 });
  await page.screenshot({ path: path.join(__dirname, '..', 'docs', 'design-references', 'mobile_full.png'), fullPage: true });
  console.log('Saved screenshots');

  await browser.close();
  console.log('Extraction complete.');
}

extractData('https://visage.framer.website/').catch(console.error);
