const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// Replace view container widths
html = html.replace(/xl:max-w-3xl/g, 'xl:max-w-5xl');
html = html.replace(/xl:max-w-5xl/g, 'xl:max-w-[1200px]');
html = html.replace(/px-2 lg:px-8/g, 'px-4 lg:px-10');
html = html.replace(/px-4 lg:px-8/g, 'px-4 lg:px-10');

fs.writeFileSync('index.html', html, 'utf8');
