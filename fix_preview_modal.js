const fs = require('fs');
let content = fs.readFileSync('index.html', 'utf8');

const targetStr = `        setH('receipt-html', h);
        show('receipt-preview-modal');`;

const newStr = `        setH('receipt-paper-content', h);
        const mRec = el('receipt-preview-modal');
        if (mRec && mRec.classList.contains('hidden')) pushModalHistory('receipt');
        show('receipt-preview-modal');
        setTimeout(() => { el('receipt-preview-modal').classList.remove('opacity-0'); el('receipt-preview-modal-box').classList.remove('scale-95'); }, 10);`;

if (content.includes(targetStr)) {
    content = content.replace(targetStr, newStr);
    fs.writeFileSync('index.html', content);
    console.log('Fixed previewTempoReceipt modal bug');
} else {
    console.log('Target string not found');
}
