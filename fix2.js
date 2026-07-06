const fs = require('fs');
let content = fs.readFileSync('index.html', 'utf8');

const target1 = `window.markTempoPaid = async (orderId) => {
    if (!confirm('Tandai tagihan tempo ini sebagai LUNAS?')) return;
    try {`;
const new1 = `window.markTempoPaid = async (orderId) => {
    showConfirm('Konfirmasi', 'Tandai tagihan tempo ini sebagai LUNAS?', async () => {
    try {`;

const target2 = `        window.rAdmPiutang(); 
    } catch (e) {
        showToast('Gagal melunasi tagihan: ' + e.message);
    }
};`;
const new2 = `        window.rAdmPiutang(); 
    } catch (e) {
        showToast('Gagal melunasi tagihan: ' + e.message);
    }
    });
};`;

if(content.includes(target1) || content.indexOf(`if (!confirm('Tandai tagihan tempo ini sebagai LUNAS?')) return;`) > -1) {
    content = content.replace(/window\.markTempoPaid = async \(orderId\) => \{\s*if \(!confirm\('Tandai tagihan tempo ini sebagai LUNAS\?'\)\) return;\s*try \{/, new1);
    
    // find the closing brace
    let endIdx = content.indexOf(`window.rAdmPiutang();`);
    if(endIdx > -1) {
        let after = content.substring(endIdx);
        let catchIdx = after.indexOf(`catch (e) {`);
        let endBracketIdx = after.indexOf(`};`, catchIdx);
        
        let chunk = after.substring(0, endBracketIdx + 2);
        let replacedChunk = chunk.replace(`}`, `    });\n}`);
        content = content.substring(0, endIdx) + replacedChunk + after.substring(endBracketIdx + 2);
    }
    
    fs.writeFileSync('index.html', content);
    console.log('Done replacement');
} else {
    console.log('target1 still not found');
}
