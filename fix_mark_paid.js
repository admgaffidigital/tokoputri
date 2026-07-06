const fs = require('fs');
let content = fs.readFileSync('index.html', 'utf8');

const oldMark = /window\.markTempoPaid = async \(orderId\) => \{\s*if \(\!confirm\('Tandai tagihan tempo ini sebagai LUNAS\?'\)\) return;\s*try \{/g;
const newMark = `window.markTempoPaid = async (orderId) => {
    showConfirm('Konfirmasi Lunas', 'Tandai tagihan tempo ini sebagai LUNAS?', async () => {
    try {`;

const oldMarkClose = /          let idx = gOrds\.findIndex\(o => o\.orderId === orderId\);\s*if \(idx > -1\) gOrds\[idx\]\.payment\.paymentStatus = 'lunas';\s*if \(window\.rAdmPiutang\) window\.rAdmPiutang\(\);\s*\} catch \(e\) \{\s*showToast\('Gagal melunasi tagihan: ' \+ e\.message\);\s*\}\s*\};/g;

const newMarkClose = `        let idx = gOrds.findIndex(o => o.orderId === orderId);
        if (idx > -1) gOrds[idx].payment.paymentStatus = 'lunas';
        if (window.rAdmPiutang) window.rAdmPiutang();
    } catch (e) {
        showToast('Gagal melunasi tagihan: ' + e.message);
    }
    });
};`;

if (content.match(oldMark) && content.match(oldMarkClose)) {
    content = content.replace(oldMark, newMark);
    content = content.replace(oldMarkClose, newMarkClose);
    fs.writeFileSync('index.html', content);
    console.log('Fixed markTempoPaid confirm');
} else {
    console.log('Target for markTempoPaid not found');
}
