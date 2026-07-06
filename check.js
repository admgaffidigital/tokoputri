const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');
const scriptMatch = html.match(/window\.showConfirm = \([\s\S]*?\{[\s\S]*?\}\s*\}[\s\S]*?\}\s*\}\s*;\s*\n/);
if (scriptMatch) {
    console.log(scriptMatch[0]);
} else {
    // print more loosely
    const m2 = html.match(/window\.showConfirm =[\s\S]*?closeConfirm\(\);/);
    console.log(m2 ? m2[0] : 'not found');
}
