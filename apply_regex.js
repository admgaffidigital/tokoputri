const fs = require('fs');
let content = fs.readFileSync('index.html', 'utf8');

// Target 1
content = content.replace(
    /window\.checkProPrint = \(\) => \{ openReceiptPreview\(\); \};\s*window\.markTempoPaid = async \(orderId\) => \{/,
    `window.checkProPrint = () => { openReceiptPreview(); };

window.editTempoPenalty = async (orderId, currentRate) => {
    let newRate = prompt('Masukkan persentase denda baru per hari (contoh: 1 atau 0.5):', currentRate);
    if (newRate === null) return;
    newRate = parseFloat(newRate);
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
};

window.markTempoPaid = async (orderId) => {`
);

// Target 2
const targetRegex = /let sisa = o\.payment\?\.tempoBalance \|\| 0;[\s\S]*?<\/div>[\s\S]*?<\/div>\`;\s*\}\);/;
const repl2 = `let sisa = o.payment?.tempoBalance || 0;
            let rate = o.payment?.tempoPenaltyRate !== undefined ? parseFloat(o.payment.tempoPenaltyRate) : 1;
            let isStopped = o.payment?.tempoPenaltyStopped === true;
            let latePenalty = 0;
            let dueDate = o.payment?.tempoDueDate || 0;
            let daysLate = 0;
            let isLate = false;
            
            if (isStopped) {
                latePenalty = parseFloat(o.payment?.tempoFixedPenalty) || 0;
                if (Date.now() > dueDate) {
                    daysLate = Math.floor((Date.now() - dueDate) / (24 * 60 * 60 * 1000));
                    if (daysLate > 0) isLate = true;
                }
            } else if (Date.now() > dueDate) {
                daysLate = Math.floor((Date.now() - dueDate) / (24 * 60 * 60 * 1000));
                if (daysLate > 0) {
                    isLate = true;
                    latePenalty = (rate / 100 * sisa) * daysLate;
                }
            }
            
            let totalAkhir = sisa + latePenalty;
            totalPiutang += totalAkhir;
            let waNum = window.normalizeWA ? window.normalizeWA(o.customer?.wa) : (o.customer?.wa || "");
            
            h += \`
            <div class="bg-white dark:bg-slate-800 p-5 rounded-2xl border \${isLate ? 'border-rose-300 dark:border-rose-700 shadow-[0_0_15px_rgba(225,29,72,0.1)]' : 'border-slate-200 dark:border-slate-700 shadow-sm'} relative overflow-hidden group hover:-translate-y-1 transition-all">
                \${isLate ? \`<div class="absolute -right-6 top-4 \${isStopped ? 'bg-slate-500' : 'bg-rose-500'} text-white text-[9px] font-black uppercase tracking-widest px-8 py-1 rotate-45 shadow-sm">TERLAMBAT \${daysLate} HARI</div>\` : ''}
                
                <div class="flex justify-between items-start mb-4 pr-12">
                    <div>
                        <p class="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Pesanan #\${o.orderId.substring(4, 10)}</p>
                        <h3 class="font-black text-slate-800 dark:text-slate-200 mt-1 uppercase">\${esc(o.customer?.name || 'Anonim')}</h3>
                        <p class="text-[10px] font-bold text-slate-500 flex items-center gap-1 mt-0.5"><i class="fa-brands fa-whatsapp text-emerald-500"></i> \${esc(o.customer?.wa || '-')}</p>
                    </div>
                </div>
                
                <div class="space-y-2 mb-4 bg-slate-50 dark:bg-slate-900/50 p-3.5 rounded-xl border border-slate-100 dark:border-slate-700/50">
                    <div class="flex justify-between items-center text-xs">
                        <span class="font-bold text-slate-500">Jatuh Tempo</span>
                        <span class="font-black \${isLate ? 'text-rose-600' : 'text-slate-700 dark:text-slate-300'}">\${new Date(dueDate).toLocaleDateString('id-ID')}</span>
                    </div>
                    <div class="flex justify-between items-center text-xs">
                        <span class="font-bold text-slate-500">Sisa Pokok</span>
                        <span class="font-black text-slate-700 dark:text-slate-300 font-mono">\${fCur(sisa)}</span>
                    </div>
                    \${isLate ? \`
                    <div class="flex justify-between items-center text-xs \${isStopped ? 'text-slate-500' : 'text-rose-600'}">
                        <span class="font-bold">Denda (\${rate}%/hari) \${isStopped ? '<span class="text-[9px] bg-slate-200 dark:bg-slate-700 px-1 py-0.5 rounded ml-1">STOPPED</span>' : ''}</span>
                        <span class="font-black font-mono">+\${fCur(latePenalty)}</span>
                    </div>\` : ''}
                </div>
                
                <div class="flex justify-between items-center bg-rose-50 text-rose-600 dark:bg-rose-900/20 dark:text-rose-400 p-3.5 rounded-xl border border-rose-100 dark:border-rose-900/30 mb-3">
                    <span class="text-[10px] font-black uppercase tracking-widest">Total Tagihan</span>
                    <span class="text-sm font-black font-mono tracking-tight">\${fCur(totalAkhir)}</span>
                </div>
                
                <div class="flex gap-2 mb-3">
                    <button onclick="editTempoPenalty('\${o.orderId}', \${rate})" class="flex-1 bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 text-slate-600 dark:text-slate-300 rounded-lg py-2 flex items-center justify-center gap-1.5 text-[10px] font-black uppercase tracking-widest transition-all">
                        <i class="fa-solid fa-percent"></i> Edit Denda
                    </button>
                    <button onclick="stopTempoPenalty('\${o.orderId}', \${latePenalty}, \${isStopped})" class="flex-1 \${isStopped ? 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-200' : 'bg-rose-100 dark:bg-rose-900/30 text-rose-600 dark:text-rose-400 hover:bg-rose-200'} rounded-lg py-2 flex items-center justify-center gap-1.5 text-[10px] font-black uppercase tracking-widest transition-all">
                        <i class="fa-solid \${isStopped ? 'fa-play' : 'fa-stop'}"></i> \${isStopped ? 'Lanjut Denda' : 'Stop Denda'}
                    </button>
                </div>
                
                <div class="flex gap-2">
                    <a href="https://wa.me/\${waNum}?text=Halo%20kak%20\${esc(o.customer?.name||'')},%20mengingatkan%20bahwa%20tagihan%20Tempo%20untuk%20pesanan%20\${o.orderId}%20sebesar%20\${fCur(totalAkhir)}%20sudah%20jatuh%20tempo.%20Mohon%20segera%20dilunasi." target="_blank" class="flex-1 bg-emerald-50 dark:bg-emerald-900/30 hover:bg-emerald-100 dark:hover:bg-emerald-900/50 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800 rounded-xl py-2.5 flex items-center justify-center gap-1.5 text-[10px] font-black uppercase tracking-widest transition-all">
                        <i class="fa-brands fa-whatsapp text-sm"></i> Tagih
                    </a>
                    <button onclick="markTempoPaid('\${o.orderId}')" class="flex-1 bg-blue-500 hover:bg-blue-600 text-white rounded-xl py-2.5 flex items-center justify-center gap-1.5 text-[10px] font-black uppercase tracking-widest shadow-sm shadow-blue-500/30 transition-all">
                        <i class="fa-solid fa-check"></i> Lunas
                    </button>
                </div>
            </div>\`;
        });`;

content = content.replace(targetRegex, repl2);

fs.writeFileSync('index.html', content);
console.log('Success regex script');
