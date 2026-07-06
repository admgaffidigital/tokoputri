const fs = require('fs');
let content = fs.readFileSync('index.html', 'utf8');

// Strip defaultStore adsEnabled
content = content.replace(/,\s*adsEnabled:\s*false\s*\/\/[^\n]+/g, '');
content = content.replace(/,\s*adsEnabled:\s*true\s*\/\/[^\n]+/g, '');

// Strip adsOnCur
content = content.replace(/const adsOnCur = appData\.store\.adsEnabled \|\| false;/g, '');
content = content.replace(/adsEnabled:\s*document\.getElementById\('set-ads-enabled'\)\.value === 'true',?/g, '');

// Strip the AdSense UI Block
const startIdx = content.indexOf('<div class="bg-orange-50 dark:bg-orange-900/10 border border-orange-100');
if (startIdx !== -1) {
    const endStr = '</div>\n              </div>\n          `;';
    const endIdx = content.indexOf(endStr, startIdx);
    if (endIdx !== -1) {
        // we want to keep the closing of the previous div and the backtick semicolon
        // The block is inside a huge template literal.
        const before = content.substring(0, startIdx);
        const after = content.substring(endIdx + '</div>\n              </div>'.length);
        content = before + after;
        console.log('Stripped UI block');
    }
}

// Strip window.loadAdsenseScriptOnce
const fnStart = content.indexOf('window.loadAdsenseScriptOnce = () => {');
if (fnStart !== -1) {
    const fnEnd = content.indexOf('};', fnStart) + 2;
    content = content.substring(0, fnStart) + content.substring(fnEnd);
    console.log('Stripped loadAdsenseScriptOnce');
}

// Strip calls to loadAdsenseScriptOnce
content = content.replace(/if \(adsOn\) loadAdsenseScriptOnce\(\);/g, '');
content = content.replace(/loadAdsenseScriptOnce\(\);/g, '');

// Strip window.renderAdSlot entirely
const renderStart = content.indexOf('window.renderAdSlot = (type) => {');
if (renderStart !== -1) {
    const renderEnd = content.indexOf('};', renderStart) + 2;
    // Wait, renderAdSlot contains if/else and multiple closing braces. 
    // It ends at: adBox.classList.add('hidden');\n              }\n          }\n      }\n  };\n
}

fs.writeFileSync('index.html.tmp', content);
