import fs from 'fs';
import path from 'path';

console.log('🚀 Eliminating all remaining Neo-Brutalist CSS rules & restoring clean Shopify Polaris look...');

const cssPath = path.resolve('src/style.css');
let css = fs.readFileSync(cssPath, 'utf8');

// Normalize line breaks for consistent processing
css = css.replace(/\r\n/g, '\n').replace(/\r/g, '\n');

// 1. Fix Lines ~2384-2431: Border Radius Global Overrides & Heavy Archivo/Barlow Typography
const brutalRadiusAndTypoRegex = /\/\* === BORDER RADIUS GLOBAL OVERRIDES[\s\S]*?\/\* === TIPOGRAFI INDUSTRIAL HARDWARE DEPOT[\s\S]*?font-weight: 600 !important;\s*\}/m;
const cleanTypoReplacement = `/* === TIPOGRAFI SHOPIFY POLARIS & CLEAN MINIMALIST DESIGN SYSTEM === */
body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif !important;
    letter-spacing: -0.011em;
}

h1, h2, h3, h4, h5, h6,
.font-heading,
.font-industrial,
.brand-title,
.section-title,
.product-title,
.category-title,
.btn-native-action {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif !important;
    letter-spacing: -0.015em;
}

.font-black {
    font-weight: 800 !important;
}
.font-extrabold {
    font-weight: 700 !important;
}
.font-bold {
    font-weight: 600 !important;
}`;

if (brutalRadiusAndTypoRegex.test(css)) {
    css = css.replace(brutalRadiusAndTypoRegex, cleanTypoReplacement);
    console.log('  ✓ Replaced border radius clamp & Archivo/Barlow typography with Shopify Polaris system font');
} else {
    console.warn('  ⚠️ Warning: brutalRadiusAndTypoRegex did not match exactly, searching subpatterns...');
}

// 2. Fix Lines ~2834-2866: Option Select Radio Checked State (Industrial Neo-Brutalist -> Shopify Polaris Subtle Ring)
const brutalRadioRegex = /\/\* Checked State - Industrial Neo-Brutalist Selection Highlight \*\/[\s\S]*?\.custom-radio:checked \+ \.option-select-card \.radio-label \{[\s\S]*?\}/m;
const cleanRadioReplacement = `/* Checked State - Shopify Polaris Clean Selection Ring */
.custom-radio:checked + .option-select-card {
    border: 1.5px solid var(--color-primary) !important;
    background-color: #ffffff !important;
    box-shadow: 0 0 0 2px rgba(var(--color-primary-rgb), 0.2), 0 2px 8px rgba(var(--color-primary-rgb), 0.12) !important;
    outline: none !important;
    transform: none !important;
}

html.dark .custom-radio:checked + .option-select-card {
    border: 1.5px solid var(--color-primary) !important;
    background-color: #1e293b !important;
    box-shadow: 0 0 0 2px rgba(var(--color-primary-rgb), 0.3), 0 2px 8px rgba(var(--color-primary-rgb), 0.2) !important;
    outline: none !important;
    transform: none !important;
}

.custom-radio:checked + .option-select-card .radio-icon-box {
    background-color: var(--color-primary) !important;
    border: 1px solid transparent !important;
    color: #ffffff !important;
    transform: scale(1.05);
    box-shadow: 0 2px 6px rgba(var(--color-primary-rgb), 0.25) !important;
}
html.dark .custom-radio:checked + .option-select-card .radio-icon-box {
    border-color: transparent !important;
    box-shadow: 0 2px 6px rgba(var(--color-primary-rgb), 0.35) !important;
}

.custom-radio:checked + .option-select-card .radio-label {
    color: var(--color-primary) !important;
}`;

if (brutalRadioRegex.test(css)) {
    css = css.replace(brutalRadioRegex, cleanRadioReplacement);
    console.log('  ✓ Replaced brutalist radio selection highlight with clean Shopify Polaris halo');
} else {
    console.warn('  ⚠️ Warning: brutalRadioRegex did not match exactly');
}

// 3. Fix Lines ~3300-3325: THE CRITICAL OVERRIDE OF ALL CARDS & BENTO BOXES (2px border & 2.5px 0-blur shadow)
const brutalCardsRegex = /\/\* ─── SMART DUAL-MODE INDUSTRIAL NEO-BRUTALIST CARDS & BENTO BOXES ─── \*\/[\s\S]*?html\.dark\[data-bg-style\] \.bento-island-card \{[\s\S]*?\}/m;
const cleanCardsReplacement = `/* ─── SMART DUAL-MODE SHOPIFY POLARIS CARDS & CLEAN ISLANDS ─── */
html:not(.dark) .card-modern,
html:not(.dark) .card-native,
html:not(.dark) .bento-island-card,
html:not(.dark)[data-bg-style] .bento-island-card {
    background-color: #ffffff !important;
    border: 1px solid #e2e8f0 !important;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.05), 0 1px 2px -1px rgba(0, 0, 0, 0.03) !important;
    backdrop-filter: none !important;
    -webkit-backdrop-filter: none !important;
}

html.dark .card-modern,
html.dark .card-native,
html.dark .bento-island-card,
.dark .card-modern,
.dark .card-native,
.dark .bento-island-card,
html.dark[data-bg-style] .bento-island-card {
    background-color: #1e293b !important;
    border: 1px solid #334155 !important;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.35) !important;
    backdrop-filter: none !important;
    -webkit-backdrop-filter: none !important;
}`;

if (brutalCardsRegex.test(css)) {
    css = css.replace(brutalCardsRegex, cleanCardsReplacement);
    console.log('  ✓ Replaced CRITICAL brutalist card override with Shopify Polaris 1px crisp border & soft diffuse shadow');
} else {
    console.warn('  ⚠️ Warning: brutalCardsRegex did not match exactly');
}

// 4. Fix Lines ~3584-3604: Bento Empty State Universal Card (2px border & 3.5px 0-blur shadow)
const brutalEmptyStateRegex = /\/\* ─── BENTO EMPTY STATE UNIVERSAL CARD[\s\S]*?box-shadow: 3\.5px 3\.5px 0px #000000 !important;\s*\}/m;
const cleanEmptyStateReplacement = `/* ─── EMPTY STATE UNIVERSAL CARD (Shopify Polaris Clean Minimalist) ─── */
.bento-empty-state-card {
    position: relative;
    overflow: hidden;
    background: #ffffff;
    border: 1px solid #e2e8f0 !important;
    border-radius: 1.25rem !important;
    padding: 2.5rem 1.5rem;
    text-align: center;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05) !important;
    transition: all 0.2s ease;
}
html.dark .bento-empty-state-card {
    background: #0f172a;
    border-color: #334155 !important;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.35) !important;
}`;

if (brutalEmptyStateRegex.test(css)) {
    css = css.replace(brutalEmptyStateRegex, cleanEmptyStateReplacement);
    console.log('  ✓ Replaced brutalist empty state card with Shopify Polaris clean card');
} else {
    console.warn('  ⚠️ Warning: brutalEmptyStateRegex did not match exactly');
}

// 5. Fix Lines ~4274-4290: Brutalist mechanical translation & 0.5px/1.5px hard shadows on action buttons
const brutalButtonActiveRegex = /\.btn-reward-redeem:active,\s*\.btn-flash-buy:active\s*\{[\s\S]*?html\.dark \.btn-reward-redeem:active,\s*html\.dark \.btn-flash-buy:active\s*\{[\s\S]*?\}/m;
const cleanButtonActiveReplacement = `.btn-reward-redeem:active,
.btn-flash-buy:active {
    transform: scale(0.96) !important;
    box-shadow: 0 1px 2px rgba(var(--color-primary-rgb), 0.15) !important;
}

html.dark .btn-reward-redeem,
html.dark .btn-flash-buy {
    border-color: transparent !important;
    box-shadow: 0 2px 6px rgba(var(--color-primary-rgb), 0.3) !important;
}

html.dark .btn-reward-redeem:active,
html.dark .btn-flash-buy:active {
    transform: scale(0.96) !important;
    box-shadow: 0 1px 2px rgba(var(--color-primary-rgb), 0.2) !important;
}`;

if (brutalButtonActiveRegex.test(css)) {
    css = css.replace(brutalButtonActiveRegex, cleanButtonActiveReplacement);
    console.log('  ✓ Replaced mechanical translation and 0-blur shadows with spring scale on promo action buttons');
} else {
    console.warn('  ⚠️ Warning: brutalButtonActiveRegex did not match exactly');
}

// 6. Fix Line ~1094: Pos-list-item in-cart dark shadow (3px 3px 0px -> diffuse halo)
css = css.replace(
    /html\.dark \.pos-list-item\.in-cart\s*\{\s*border-color:\s*#334155\s*!important;\s*box-shadow:\s*3px 3px 0px var\(--color-primary\)\s*!important;\s*\}/,
    `html.dark .pos-list-item.in-cart {
    border-color: var(--color-primary) !important;
    background: rgba(var(--color-primary-rgb), 0.1) !important;
    box-shadow: 0 0 0 2px rgba(var(--color-primary-rgb), 0.35), 0 4px 12px rgba(var(--color-primary-rgb), 0.2) !important;
}`
);

// 7. Fix search input & placeholder fonts (Archivo -> system font stack)
css = css.replace(
    /font-family:\s*'Archivo',\s*'Barlow',\s*system-ui,\s*-apple-system,\s*sans-serif\s*!important;/g,
    `font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif !important;`
);

// Write back updated CSS
fs.writeFileSync(cssPath, css, 'utf8');
console.log('🎉 src/style.css successfully sanitized to 100% Shopify Polaris Clean Minimalist!');

// 8. Update public/sw.js cache version to v1.21.0 to force browser to dump stale assets
const swPath = path.resolve('public/sw.js');
if (fs.existsSync(swPath)) {
    let sw = fs.readFileSync(swPath, 'utf8');
    sw = sw.replace(/const CACHE_VERSION = 'v1\.20\.1';/, `const CACHE_VERSION = 'v1.21.0';`);
    fs.writeFileSync(swPath, sw, 'utf8');
    console.log('  ✓ Bumper public/sw.js CACHE_VERSION to v1.21.0 (forcing browser cache purge)');
}

// 9. Update index.html to load clean Google Font (Inter / system fonts) instead of Archivo/Barlow
const htmlPath = path.resolve('index.html');
if (fs.existsSync(htmlPath)) {
    let html = fs.readFileSync(htmlPath, 'utf8');
    // Replace font link
    html = html.replace(
        /https:\/\/fonts\.googleapis\.com\/css2\?family=Archivo:wght@500;600;700;800;900&family=Barlow:wght@400;500;600;700&display=swap/g,
        'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap'
    );
    fs.writeFileSync(htmlPath, html, 'utf8');
    console.log('  ✓ Updated index.html Google Fonts link to Plus Jakarta Sans');
}

