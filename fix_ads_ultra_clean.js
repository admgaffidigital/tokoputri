const fs = require('fs');
let content = fs.readFileSync('index.html', 'utf8');

// 1. Remove adsEnabled from defaultStore
content = content.replace(/,\s*adsEnabled:\s*false\s*\/\/[^\n]+/g, '');
content = content.replace(/,\s*adsEnabled:\s*true\s*\/\/[^\n]+/g, '');

// Strip adsOnCur
content = content.replace(/const adsOnCur = appData\.store\.adsEnabled \|\| false;/g, '');
content = content.replace(/adsEnabled:\s*document\.getElementById\('set-ads-enabled'\)\.value === 'true',?/g, '');

// 2. Remove Admin UI Block via regex precisely
const uiRegex = /<div class="bg-orange-50 dark:bg-orange-900\/10 border border-orange-100 dark:border-orange-900\/30 rounded-2xl p-5 space-y-4">[\s\S]*?Fitur ini dikontrol dari sisi Google, bukan dari pengaturan ini\.<\/p>\s*<\/div>\s*<\/div>/;
content = content.replace(uiRegex, '');

// 3. Strip window.loadAdsenseScriptOnce (use exact regex instead of indexOf logic which was buggy)
const fnRegex = /window\.loadAdsenseScriptOnce = \(\) => \{[\s\S]*?console\.error\('Gagal memuat skrip AdSense:', e\); \}\s*\};/g;
content = content.replace(fnRegex, '');

// 4. Strip calls to loadAdsenseScriptOnce
content = content.replace(/if \(adsOn\) loadAdsenseScriptOnce\(\);/g, '');
content = content.replace(/loadAdsenseScriptOnce\(\);/g, '');

// 5. Remove window.renderAdSlots
const rsRegex = /window\.renderAdSlots = \(\) => \{[\s\S]*?console\.error\('Gagal render slot iklan:', e\);\s*\}\s*\};/g;
content = content.replace(rsRegex, '');

// 6. Remove try { renderAdSlots(); } catch(e) { console.error('Gagal render iklan:', e); }
content = content.replace(/try \{ renderAdSlots\(\); \} catch\(e\) \{ console\.error\('Gagal render iklan:', e\); \}/g, '');
content = content.replace(/setTimeout\(\(\) => \{  \}, 50\);/g, ''); // cleanup empty timeout

// 7. Remove <div id="ad-slot-banner" ...></div>
content = content.replace(/<div id="ad-slot-banner" class="hidden w-full max-w-\[1200px\] mx-auto px-4 lg:px-10 mt-5 min-h-\[90px\] fade-in flex items-center justify-center overflow-hidden"><\/div>/g, '');

// 8. Remove <div id="ad-slot-catalog-end" ...></div>
content = content.replace(/<div id="ad-slot-catalog-end" class="hidden w-full max-w-\[1200px\] mx-auto px-4 lg:px-10 mt-10 min-h-\[90px\] fade-in flex items-center justify-center overflow-hidden"><\/div>/g, '');

// 9. Remove from render product detail: if (adsOn) renderAdSlot('detail');
content = content.replace(/if \(adsOn\) renderAdSlot\('detail'\);/g, '');
content = content.replace(/if \(adsOn\) renderAdSlot\('catalog'\);/g, '');

// 10. Clean CSP meta tag specifically
content = content.replace(/ https:\/\/pagead2\.googlesyndication\.com/g, '');
content = content.replace(/ https:\/\/googleads\.g\.doubleclick\.net/g, '');
content = content.replace(/ https:\/\/www\.googletagservices\.com/g, '');
content = content.replace(/ https:\/\/tpc\.googlesyndication\.com/g, '');
content = content.replace(/ https:\/\/\*\.adtrafficquality\.google/g, '');

fs.writeFileSync('index.html', content);
console.log('AdSense removed CAREFULLY.');
