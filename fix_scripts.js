const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// The issue was probably matching across lines or something. Let's do it carefully.
html = html.replace(/<script([^>]*)\/>/g, '<script$1></script>');

fs.writeFileSync('index.html', html, 'utf8');
