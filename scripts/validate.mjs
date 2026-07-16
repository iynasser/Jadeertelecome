import { readFileSync, existsSync } from 'node:fs';

const requiredFiles = ['index.html', 'src/styles.css', 'src/main.js'];
for (const file of requiredFiles) {
  if (!existsSync(file)) throw new Error(`Missing ${file}`);
}

const html = readFileSync('index.html', 'utf8');
const css = readFileSync('src/styles.css', 'utf8');
const js = readFileSync('src/main.js', 'utf8');

const requiredSnippets = ['dir="rtl"', 'site-header', 'hero', 'mobile-nav', 'Jadeer Store'];
for (const snippet of requiredSnippets) {
  if (!html.includes(snippet)) throw new Error(`index.html missing ${snippet}`);
}

for (const selector of ['.hero', '.benefits', '.needs', '.products', '@media (max-width:760px)']) {
  if (!css.includes(selector)) throw new Error(`styles.css missing ${selector}`);
}

for (const token of ['needsGrid', 'categoriesGrid', 'productsGrid']) {
  if (!js.includes(token)) throw new Error(`main.js missing ${token}`);
}

console.log('Static Jadeer storefront files validated successfully.');
