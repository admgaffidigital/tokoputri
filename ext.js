const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

const regex = /window\.previewTempoReceipt = async \(orderId\) => \{([\s\S]*?)\};\s*window\.markTempoPaid/;
const match = html.match(regex);
if(match) {
    let fn = `window.previewTempoReceipt = async (orderId) => {${match[1]}};`;
    console.log(fn);
} else {
    console.log("NOT FOUND");
}
