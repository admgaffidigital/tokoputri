const fs = require('fs');
let content = fs.readFileSync('index.html', 'utf8');

content = content.replace(
    /newRate = parseFloat\(newRate\);/,
    "newRate = parseFloat(newRate.replace(',', '.'));"
);

fs.writeFileSync('index.html', content);
console.log('Success replace comma');
