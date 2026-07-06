const fs = require('fs');
let content = fs.readFileSync('index.html', 'utf8');

const regex = /else if \(m === 'member'\) closeMemberModal\(true\);[^\n]*\n/;
const match = content.match(regex);
if (match) {
    const replacement = match[0] + `          else if (m === 'prompt' && typeof window.closePrompt === 'function') window.closePrompt(true);\n`;
    content = content.replace(match[0], replacement);
    fs.writeFileSync('index.html', content);
    console.log('Fixed popstate prompt');
} else {
    console.log('Still not found');
}
