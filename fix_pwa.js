const fs = require('fs');
let content = fs.readFileSync('index.html', 'utf8');

const target = `window.editTempoPenalty = async (orderId, currentRate) => {
    let newRate = prompt('Masukkan persentase denda baru per hari (contoh: 1 atau 0.5):', currentRate);
    if (newRate === null) return;
    newRate = parseFloat(newRate.replace(',', '.'));
    if (isNaN(newRate) || newRate < 0) return showToast('Persentase tidak valid!');
    try {
        await db.collection("freshmart_orders").doc(orderId).update({
            'payment.tempoPenaltyRate': newRate
        });
        showToast('Persentase denda berhasil diubah!');
        window.rAdmPiutang();
    } catch(e) {
        showToast('Gagal mengubah denda: ' + e.message);
    }
};

window.stopTempoPenalty = async (orderId, latePenalty, isStopped) => {
    let msg = isStopped ? 'Lanjutkan perhitungan denda otomatis?' : 'Hentikan denda berjalan sekarang? (Nominal denda akan dibekukan di ' + fCur(latePenalty) + ')';
    if (!confirm(msg)) return;
    try {
        await db.collection("freshmart_orders").doc(orderId).update({
            'payment.tempoPenaltyStopped': !isStopped,
            'payment.tempoFixedPenalty': isStopped ? null : latePenalty
        });
        showToast(isStopped ? 'Denda dilanjutkan!' : 'Denda berhasil dibekukan!');
        window.rAdmPiutang();
    } catch(e) {
        showToast('Gagal mengubah status denda: ' + e.message);
    }
};`;

const repl = `window.customPrompt = (title, defaultVal, callback) => {
    let div = document.createElement('div');
    div.className = 'fixed inset-0 z-[9999] bg-slate-900/80 flex items-center justify-center p-4 backdrop-blur-sm opacity-0 transition-opacity duration-300';
    div.innerHTML = \`
        <div class="bg-white dark:bg-slate-800 rounded-[2rem] w-full max-w-[320px] p-6 shadow-2xl border border-slate-200 dark:border-slate-700 relative transform scale-95 transition-all duration-300 flex flex-col text-center">
            <h3 class="font-black text-slate-900 dark:text-white text-lg mb-4">\${title}</h3>
            <input type="text" id="prompt-input" value="\${defaultVal}" class="w-full px-4 py-3.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-700 dark:text-slate-300 mb-6 focus:ring-2 focus:ring-emerald-500 outline-none text-center font-black text-xl tracking-wider" autocomplete="off" />
            <div class="flex gap-3">
                <button id="prompt-cancel" class="flex-1 py-3.5 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 font-bold rounded-xl hover:bg-slate-200 dark:hover:bg-slate-600 active:scale-95 transition-all text-sm">Batal</button>
                <button id="prompt-ok" class="flex-1 py-3.5 bg-emerald-600 text-white font-bold rounded-xl hover:bg-emerald-700 active:scale-95 transition-all text-sm shadow-md shadow-emerald-500/30">Simpan</button>
            </div>
        </div>
    \`;
    document.body.appendChild(div);
    const box = div.querySelector('div');
    setTimeout(() => { div.classList.remove('opacity-0'); box.classList.remove('scale-95'); }, 10);
    const input = div.querySelector('#prompt-input');
    input.focus();
    input.select();
    
    const closeIt = () => {
        div.classList.add('opacity-0'); box.classList.add('scale-95');
        setTimeout(() => div.remove(), 300);
    };
    
    div.querySelector('#prompt-cancel').onclick = closeIt;
    div.querySelector('#prompt-ok').onclick = () => {
        let val = input.value;
        closeIt();
        callback(val);
    };
};

window.editTempoPenalty = (orderId, currentRate) => {
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
};

window.stopTempoPenalty = (orderId, latePenalty, isStopped) => {
    let title = 'Konfirmasi Denda';
    let msg = isStopped ? 'Lanjutkan perhitungan denda otomatis?' : 'Hentikan denda berjalan sekarang? (Nominal denda akan dibekukan di ' + fCur(latePenalty) + ')';
    let btn = isStopped ? 'Lanjutkan' : 'Bekukan';
    
    showConfirm(title, msg, async () => {
        sLoad('Menyimpan...');
        try {
            await db.collection("freshmart_orders").doc(orderId).update({
                'payment.tempoPenaltyStopped': !isStopped,
                'payment.tempoFixedPenalty': isStopped ? null : latePenalty
            });
            showToast(isStopped ? 'Denda dilanjutkan!' : 'Denda berhasil dibekukan!');
            window.rAdmPiutang();
        } catch(e) {
            showToast('Gagal mengubah status denda: ' + e.message);
        }
        hLoad();
    }, btn, !isStopped);
};`;

if (!content.includes('let msg = isStopped ?')) {
    console.log('Target not found!');
} else {
    content = content.replace(target, repl);
    fs.writeFileSync('index.html', content);
    console.log('Success replace to custom prompt');
}
