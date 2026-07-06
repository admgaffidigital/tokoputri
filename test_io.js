const fs = require('fs');
let content = fs.readFileSync('index.html', 'utf8');
fs.writeFileSync('index_new.html', content);
