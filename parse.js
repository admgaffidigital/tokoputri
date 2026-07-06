const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');
const scriptMatch = html.match(/<script>([\s\S]*?)<\/script>/);
if (scriptMatch) {
    fs.writeFileSync('test.js', scriptMatch[1]);
    console.log('Saved test.js');
}
