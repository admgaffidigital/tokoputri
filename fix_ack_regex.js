const fs = require('fs');
let content = fs.readFileSync('index.html', 'utf8');

const regex = /window\.ackRewardClaim = async \(orderId, status\) => \{\s*let note = '';\s*if \(status === 'waiting_stock'\) \{\s*note = prompt\([\s\S]*?\|\| '';\s*\}\s*sLoad\('Menyimpan\.\.\.'\);\s*try \{/g;

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

const match = content.match(regex);
if (match) {
    content = content.replace(regex, newStr);
    fs.writeFileSync('index.html', content);
    console.log('Fixed ackRewardClaim prompt');
} else {
    console.log('Not found via regex for ackRewardClaim');
}
