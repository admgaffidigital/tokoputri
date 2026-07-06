const fs = require('fs');
let content = fs.readFileSync('index.html', 'utf8');

const targetStr = `window.ackRewardClaim = async (orderId, status) => {
    let note = '';
    if (status === 'waiting_stock') {
        note = prompt("Catatan untuk pelanggan (contoh: estimasi 3 hari lagi):", "Stok hadiah kosong, akan kami kirim susulan begitu stok tersedia kembali.") || '';
    }
    sLoad('Menyimpan...');
    try {`;

const newStr = `window.ackRewardClaim = async (orderId, status) => {
    if (status === 'waiting_stock') {
        window.customPrompt("Catatan untuk pelanggan:", "Stok hadiah kosong, akan kami kirim susulan begitu stok tersedia kembali.", async (note) => {
            if (note === null) return;
            sLoad('Menyimpan...');
            try {
                await db.collection("freshmart_orders").doc(orderId).update({
                    'claimedReward.status': status,
                    'claimedReward.note': note || ''
                });
                showToast('Status klaim hadiah diperbarui!');
                let idx = gOrds.findIndex(o => o.orderId === orderId);
                if(idx !== -1) {
                    if(!gOrds[idx].claimedReward) gOrds[idx].claimedReward = {};
                    gOrds[idx].claimedReward.status = status;
                    gOrds[idx].claimedReward.note = note || '';
                }
                openCustomerOrderDetail(orderId);
            } catch (e) {
                showToast('Gagal update klaim: ' + e.message);
            } finally { hLoad(); }
        });
        return; // async via callback
    }
    
    let note = '';
    sLoad('Menyimpan...');
    try {`;

if (content.includes(targetStr)) {
    content = content.replace(targetStr, newStr);
    fs.writeFileSync('index.html', content);
    console.log('Fixed ackRewardClaim');
} else {
    console.log('Target string for ackRewardClaim not found');
}
