const fs = require('fs');
let content = fs.readFileSync('index.html', 'utf8');

// 1. Remove adsEnabled from defaultStore
content = content.replace(/\s*adsEnabled:\s*false\s*\/\/ FITUR BARU: Iklan Google AdSense aktif\/nonaktif \(default NONAKTIF[^)]+\)/g, '');

// 2. Remove the admin UI block
const adminUIBlock = /<div class="bg-orange-50 dark:bg-orange-900\/10 border border-orange-100 dark:border-orange-900\/30 rounded-2xl p-5 space-y-4">[\s\S]*?<\/div>\s*<\/div>\s*<\/div>\s*`;/g;
// Wait, the block ends with </div>\n</div>\n`; -- let's be careful. Let's just remove the exact UI div.
const uiRegex = /<div class="bg-orange-50 dark:bg-orange-900\/10 border border-orange-100 dark:border-orange-900\/30 rounded-2xl p-5 space-y-4">[\s\S]*?<!-- end of adsense block -->/;
