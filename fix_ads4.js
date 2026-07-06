const fs = require('fs');
let content = fs.readFileSync('index.html.tmp', 'utf8');

const regex = /<div class="bg-orange-50 dark:bg-orange-900\/10 border border-orange-100 dark:border-orange-900\/30 rounded-2xl p-5 space-y-4">[\s\S]*?Fitur ini dikontrol dari sisi Google, bukan dari pengaturan ini\.<\/p>\s*<\/div>\s*<\/div>/;

if (regex.test(content)) {
    content = content.replace(regex, '');
    console.log('Admin UI block removed via regex!');
} else {
    console.log('Admin UI block not found via regex');
}

fs.writeFileSync('index.html.tmp2', content);
