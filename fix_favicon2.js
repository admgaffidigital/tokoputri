const fs = require('fs');
let content = fs.readFileSync('index.html', 'utf8');

content = content.replace(
    "<link rel='icon' href='data:image/x-icon;base64,AA'>",
    "<link rel='icon' id='dynamic-favicon' href='data:image/x-icon;base64,AA'>"
);
fs.writeFileSync('index.html', content);
console.log('Fixed favicon placeholder ID');
