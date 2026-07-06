const fs = require('fs');
let lines = fs.readFileSync('index.html', 'utf8').split('\n');

for(let i = 0; i < lines.length; i++) {
    if(lines[i].includes("m.className = 'fixed inset-0 z-") || lines[i].includes("div.className = 'fixed inset-0 z-")) {
        console.log(`Line ${i}:`);
        for(let j = Math.max(0, i-2); j <= i+2; j++) {
            console.log(lines[j]);
        }
        console.log('---');
    }
}
