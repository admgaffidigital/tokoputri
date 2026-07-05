const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

const tagsToFix = ['div', 'span', 'i', 'a', 'button', 'script', 'b', 'strong', 'textarea', 'label', 'form', 'svg', 'path'];

tagsToFix.forEach(tag => {
    const regex = new RegExp('<(' + tag + ')([^>]*?)\/>', 'g');
    html = html.replace(regex, '<$1$2></$1>');
});

fs.writeFileSync('index.html', html, 'utf8');
