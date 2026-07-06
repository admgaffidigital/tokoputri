const fs = require('fs');
let content = fs.readFileSync('index.html', 'utf8');

const regex = /<div class="bg-orange-50 dark:bg-orange-900\/10 border border-orange-100 dark:border-orange-900\/30 rounded-2xl p-5 space-y-4">[\s\S]*?<\/div>\s*<\/div>\s*<\/div>\s*`;/g;
// Wait, the div closes with:
//               </div>
//           `;
// Let's replace the whole block using substring

const startStr = '<div class="bg-orange-50 dark:bg-orange-900/10 border border-orange-100 dark:border-orange-900/30 rounded-2xl p-5 space-y-4">';
const startIdx = content.indexOf(startStr);
if (startIdx !== -1) {
    const endStr = '</div>\n              </div>\n          `;';
    const endIdx = content.indexOf(endStr, startIdx);
    if (endIdx !== -1) {
        content = content.substring(0, startIdx) + '          `;';
        console.log('UI Block removed');
    } else {
        console.log('End string not found');
    }
} else {
    console.log('Start string not found');
}

// Remove window.renderAdSlot
const rsStart = content.indexOf('window.renderAdSlot = (type) => {');
if (rsStart !== -1) {
    const rsEnd = content.indexOf('};', content.indexOf("adBox.classList.add('hidden');", rsStart));
    if (rsEnd !== -1) {
        content = content.substring(0, rsStart) + content.substring(rsEnd + 2);
        console.log('window.renderAdSlot removed');
    }
}

// Remove from render product detail: if (adsOn) renderAdSlot('detail');
content = content.replace(/if \(adsOn\) renderAdSlot\('detail'\);/g, '');

// Remove from render catalog: if (adsOn) renderAdSlot('catalog');
content = content.replace(/if \(adsOn\) renderAdSlot\('catalog'\);/g, '');

// Remove save settings logic for AdSense
content = content.replace(/adsEnabled:\s*document\.getElementById\('set-ads-enabled'\)\.value === 'true',?/g, '');

fs.writeFileSync('index.html.tmp', content);
