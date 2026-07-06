const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');
const scriptMatch = html.match(/<script type='text\/javascript'>([\s\S]*?)<\/script>/);
if (scriptMatch) {
    fs.writeFileSync('test.js', scriptMatch[1]);
    console.log('Extracted JS to test.js');
}
