const fs = require('fs');
let content = fs.readFileSync('index.html', 'utf8');

const targetStr = `window.editTempoPenalty = (orderId, currentRate) => {
    window.customPrompt('Persentase Denda Baru', currentRate, async (val) => {
        if (!val) return;
        let newRate = parseFloat(val.replace(',', '.'));
        if (isNaN(newRate) || newRate < 0) return showToast('Persentase tidak valid!');
        sLoad('Menyimpan...');
        try {
            await db.collection("freshmart_orders").doc(orderId).update({
                'payment.tempoPenaltyRate': newRate
            });
            showToast('Persentase denda berhasil diubah!');
            window.rAdmPiutang();
            });
} catch(e) {
            showToast('Gagal mengubah denda: ' + e.message);
        }
        hLoad();
    });
};`;

const newStr = `window.editTempoPenalty = (orderId, currentRate) => {
    window.customPrompt('Persentase Denda Baru', currentRate, async (val) => {
        if (!val) return;
        let newRate = parseFloat(val.replace(',', '.'));
        if (isNaN(newRate) || newRate < 0) return showToast('Persentase tidak valid!');
        sLoad('Menyimpan...');
        try {
            await db.collection("freshmart_orders").doc(orderId).update({
                'payment.tempoPenaltyRate': newRate
            });
            showToast('Persentase denda berhasil diubah!');
            window.rAdmPiutang();
        } catch(e) {
            showToast('Gagal mengubah denda: ' + e.message);
        }
        hLoad();
    });
};`;

// Also check markTempoPaid again!
const targetMark = `window.markTempoPaid = async (orderId) => {
    showConfirm('Konfirmasi', 'Tandai tagihan tempo ini sebagai LUNAS?', async () => {
    try {
        await db.collection("freshmart_orders").doc(orderId).update({
            'payment.paymentStatus': 'lunas',
            'payment.tempoBalance': 0,
            status: 'Selesai'
        });
        showToast('Tagihan berhasil dilunasi!');
        let idx = gOrds.findIndex(o => o.orderId === orderId);
        if(idx !== -1) {
            gOrds[idx].payment.paymentStatus = 'lunas';
            gOrds[idx].payment.tempoBalance = 0;
            gOrds[idx].status = 'Selesai';
        }
        window.rAdmPiutang(); 
    } catch (e) {
        showToast('Gagal melunasi tagihan: ' + e.message);
    }
};`;

const newMark = `window.markTempoPaid = async (orderId) => {
    showConfirm('Konfirmasi', 'Tandai tagihan tempo ini sebagai LUNAS?', async () => {
        try {
            await db.collection("freshmart_orders").doc(orderId).update({
                'payment.paymentStatus': 'lunas',
                'payment.tempoBalance': 0,
                status: 'Selesai'
            });
            showToast('Tagihan berhasil dilunasi!');
            let idx = gOrds.findIndex(o => o.orderId === orderId);
            if(idx !== -1) {
                gOrds[idx].payment.paymentStatus = 'lunas';
                gOrds[idx].payment.tempoBalance = 0;
                gOrds[idx].status = 'Selesai';
            }
            window.rAdmPiutang(); 
        } catch (e) {
            showToast('Gagal melunasi tagihan: ' + e.message);
        }
    });
};`;

let orig = content;
// Replace spaces to match accurately (strip whitespace to check if we can just string index)
function fixViaRegex() {
    let reEdit = /window\.editTempoPenalty = \(orderId, currentRate\) => \{[\s\S]*?hLoad\(\);\s*\}\);\s*\};/;
    content = content.replace(reEdit, newStr);
    
    let reMark = /window\.markTempoPaid = async \(orderId\) => \{[\s\S]*?showToast\('Gagal melunasi tagihan: ' \+ e\.message\);\s*\}\s*\};/;
    content = content.replace(reMark, newMark);
}
fixViaRegex();

fs.writeFileSync('index.html', content);
console.log('Fixed both');
