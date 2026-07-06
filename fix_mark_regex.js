const fs = require('fs');
let content = fs.readFileSync('index.html', 'utf8');

const regex = /window\.rAdmPiutang\(\);\s*\}\s*catch\s*\(e\)\s*\{\s*showToast\('Gagal (melunasi tagihan|mengubah status): ' \+ e\.message\);\s*\}\s*\};/;

const match = content.match(regex);
if (match) {
    const newStr = match[0].replace('};', '    });\n};');
    content = content.replace(regex, newStr);
    fs.writeFileSync('index.html', content);
    console.log('Fixed markTempoPaid via regex');
} else {
    console.log('Regex still not matching');
}
