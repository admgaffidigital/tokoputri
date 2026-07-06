const fs = require('fs');
let lines = fs.readFileSync('test.js', 'utf8').split('\n');
let start = 4277 - 10;
let end = 4277 + 10;
for(let i=start; i<=end; i++) {
    console.log(`${i+1}: ${lines[i]}`);
}
