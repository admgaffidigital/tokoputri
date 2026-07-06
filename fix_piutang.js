const fs = require('fs');
let content = fs.readFileSync('index.html', 'utf8');

const targetRegex = /<div class="flex gap-2">\s*<a href="https:\/\/wa\.me\/\$\{waNum\}\?text=Halo[^"]*" target="_blank" class="flex-1[^>]+>\s*<i class="fa-brands fa-whatsapp text-sm"><\/i> Tagih\s*<\/a>\s*<button onclick="markTempoPaid\('\$\{o\.orderId\}'\)" class="flex-1[^>]+>\s*<i class="fa-solid fa-check"><\/i> Lunas\s*<\/button>\s*<\/div>/g;

const newButtons = `\${o.payment?.installments && o.payment.installments.length > 0 ? \`
                <div class="mb-3 space-y-1.5 bg-slate-50 dark:bg-slate-900/30 p-3 rounded-xl border border-slate-100 dark:border-slate-800">
                    <div class="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-2 flex justify-between">
                        <span>Riwayat Cicilan</span>
                        <span>Total: \${fCur(o.payment.installments.reduce((sum, ins) => sum + (parseFloat(ins.amount)||0), 0))}</span>
                    </div>
                    \${o.payment.installments.map((ins) => \`
                    <div class="flex justify-between items-center text-[10px]">
                        <span class="text-slate-500 dark:text-slate-400">\${new Date(ins.date).toLocaleDateString('id-ID')}</span>
                        <span class="font-bold text-emerald-600 dark:text-emerald-400 font-mono">+\${fCur(ins.amount)}</span>
                    </div>
                    \`).join('')}
                </div>\` : ''}
                
                <div class="flex gap-2 mb-2">
                    <a href="https://wa.me/\${waNum}?text=Halo%20kak%20\${esc(o.customer?.name||'')},%20mengingatkan%20bahwa%20sisa%20tagihan%20Tempo%20untuk%20pesanan%20\${o.orderId}%20sebesar%20\${fCur(totalAkhir)}%20sudah%20jatuh%20tempo.%20Mohon%20segera%20dilunasi." target="_blank" class="flex-1 bg-emerald-50 dark:bg-emerald-900/30 hover:bg-emerald-100 dark:hover:bg-emerald-900/50 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800 rounded-xl py-2 flex items-center justify-center gap-1.5 text-[10px] font-black uppercase tracking-widest transition-all">
                        <i class="fa-brands fa-whatsapp text-sm"></i> Tagih
                    </a>
                    <button onclick="previewTempoReceipt('\${o.orderId}')" class="flex-1 bg-amber-500 hover:bg-amber-600 text-white rounded-xl py-2 flex items-center justify-center gap-1.5 text-[10px] font-black uppercase tracking-widest shadow-sm shadow-amber-500/30 transition-all">
                        <i class="fa-solid fa-print"></i> Struk
                    </button>
                </div>
                <div class="flex gap-2">
                    <button onclick="payTempoInstallment('\${o.orderId}')" class="flex-1 bg-indigo-500 hover:bg-indigo-600 text-white rounded-xl py-2.5 flex items-center justify-center gap-1.5 text-[10px] font-black uppercase tracking-widest shadow-sm shadow-indigo-500/30 transition-all">
                        <i class="fa-solid fa-money-bill-wave"></i> Cicil
                    </button>
                    <button onclick="markTempoPaid('\${o.orderId}')" class="flex-1 bg-blue-500 hover:bg-blue-600 text-white rounded-xl py-2.5 flex items-center justify-center gap-1.5 text-[10px] font-black uppercase tracking-widest shadow-sm shadow-blue-500/30 transition-all">
                        <i class="fa-solid fa-check-double"></i> Lunas
                    </button>
                </div>`;

let found = false;
content = content.replace(targetRegex, () => {
    found = true;
    return newButtons;
});

if (found) {
    const newFunctions = `
window.payTempoInstallment = (orderId) => {
    window.customPrompt('Masukkan Nominal Cicilan (Rp)', '', async (val) => {
        if (!val) return;
        let amount = parseFloat(val.replace(/[^0-9]/g, ''));
        if (isNaN(amount) || amount <= 0) return showToast('Nominal tidak valid!');
        
        sLoad('Menyimpan cicilan...');
        try {
            const doc = await db.collection("freshmart_orders").doc(orderId).get();
            const data = doc.data();
            
            let newBalance = (data.payment.tempoBalance || 0) - amount;
            let installments = data.payment.installments || [];
            
            installments.push({
                date: Date.now(),
                amount: amount,
                note: 'Cicilan'
            });
            
            let updates = {
                'payment.tempoBalance': Math.max(0, newBalance),
                'payment.installments': installments
            };
            
            if (newBalance <= 0) {
                updates['payment.paymentStatus'] = 'lunas';
                updates['status'] = 'Selesai';
            }
            
            await db.collection("freshmart_orders").doc(orderId).update(updates);
            showToast('Cicilan berhasil ditambahkan!');
            
            if (window.rAdmPiutang) window.rAdmPiutang();
        } catch(e) {
            showToast('Gagal memproses cicilan: ' + e.message);
        }
        hLoad();
    });
};

window.previewTempoReceipt = async (orderId) => {
    sLoad('Memuat data struk...');
    try {
        const doc = await db.collection("freshmart_orders").doc(orderId).get();
        if (!doc.exists) {
            hLoad(); return showToast('Pesanan tidak ditemukan');
        }
        const o = doc.data();
        hLoad();
        
        const d = o.dateString ? new Date(o.dateString).toLocaleString('id-ID',{day:'2-digit',month:'2-digit',year:'numeric',hour:'2-digit',minute:'2-digit'}) : '';
        const sN = appData.store.name || "Toko", sW = appData.store.wa || "";
        
        const pL = (l,r,len=32) => { const p=len-l.length-r.length; return l+(p>0?' '.repeat(p):' ')+r; };
        
        let h = \`<div class="text-center font-bold" style="font-size:13px;margin-bottom:2px;">\${esc(sN)}</div>\`;
        if(sW) h += \`<div class="text-center" style="margin-bottom:4px;">WA: \${esc(sW)}</div>\`;
        h += \`<div class="text-center font-bold uppercase mb-2" style="font-size:14px;border-bottom:1px solid #000;border-top:1px solid #000;padding:2px 0;">NOTA TEMPO\${o.payment?.paymentStatus === 'lunas' ? ' - LUNAS' : ''}</div>\`;
        h += \`<div style="white-space:pre;">Order: #\${o.orderId}</div><div style="white-space:pre;">Tgl  : \${d}</div><div style="white-space:pre;">Plg  : \${esc(o.customer?.name||'Guest').substring(0,20)}</div>\`;
        if (o.payment?.tempoDueDate) {
            h += \`<div style="white-space:pre;">J.Tmp: \${new Date(o.payment.tempoDueDate).toLocaleDateString('id-ID')}</div>\`;
        }
        h += \`<div class="border-b border-dashed border-black my-2"></div>\`;
        
        let subtotal = 0;
        o.items.forEach(i => {
            let vText = i.variantName ? \` (\${esc(i.variantName)}\${i.colorCode ? ' ' + esc(i.colorCode) : ''})\` : '';
            const n = (esc(i.name) + vText).substring(0,32);
            const q = \`\${parseFloat(i.qty)} \${esc(i.unit||'pcs')} x \${i.effectivePrice.toLocaleString('id-ID')}\`;
            const t = (parseFloat(i.qty)*i.effectivePrice).toLocaleString('id-ID');
            h += \`<div style="white-space:pre-wrap;font-weight:bold;word-break:break-all;">\${n}</div><div style="white-space:pre;font-size:11px;">\${pL(q,t)}</div>\`;
            subtotal += (parseFloat(i.qty)*i.effectivePrice);
        });
        
        h += \`<div class="border-b border-dashed border-black my-2"></div>\`;
        h += \`<div style="white-space:pre;font-weight:bold;">\${pL('Subtotal', subtotal.toLocaleString('id-ID'))}</div>\`;
        
        if (o.payment?.grandTotal && o.payment.grandTotal !== subtotal) {
            let diff = o.payment.grandTotal - subtotal;
            if (diff > 0) {
                h += \`<div style="white-space:pre;">\${pL('Ongkir/Biaya', diff.toLocaleString('id-ID'))}</div>\`;
            } else {
                h += \`<div style="white-space:pre;">\${pL('Diskon', Math.abs(diff).toLocaleString('id-ID'))}</div>\`;
            }
        }
        
        h += \`<div style="white-space:pre;font-weight:bold;font-size:13px;margin-top:4px;">\${pL('TOTAL KREDIT', (o.payment?.grandTotal || subtotal).toLocaleString('id-ID'))}</div>\`;
        h += \`<div class="border-b border-black my-2" style="border-width:1px;"></div>\`;
        
        let totalPaid = 0;
        if (o.payment?.installments && o.payment.installments.length > 0) {
            h += \`<div style="white-space:pre;font-weight:bold;margin-bottom:2px;">HISTORI CICILAN:</div>\`;
            o.payment.installments.forEach((ins, idx) => {
                let idate = new Date(ins.date).toLocaleDateString('id-ID', {day:'2-digit',month:'short'});
                let amt = ins.amount.toLocaleString('id-ID');
                h += \`<div style="white-space:pre;">\${pL(\`\${idx+1}. \${idate}\`, amt)}</div>\`;
                totalPaid += ins.amount;
            });
            h += \`<div style="white-space:pre;font-weight:bold;margin-top:2px;">\${pL('TOTAL DIBAYAR', totalPaid.toLocaleString('id-ID'))}</div>\`;
            h += \`<div class="border-b border-dashed border-black my-2"></div>\`;
        }
        
        let sisaPokok = o.payment?.tempoBalance || 0;
        
        // Cek denda late penalty if not yet paid
        let latePenalty = 0;
        let isStopped = o.payment?.tempoPenaltyStopped === true;
        let dueDate = o.payment?.tempoDueDate || 0;
        let rate = o.payment?.tempoPenaltyRate !== undefined ? parseFloat(o.payment.tempoPenaltyRate) : 1;
        
        if (o.payment?.paymentStatus !== 'lunas') {
            if (isStopped) {
                latePenalty = parseFloat(o.payment?.tempoFixedPenalty) || 0;
            } else if (Date.now() > dueDate) {
                let daysLate = Math.floor((Date.now() - dueDate) / (24 * 60 * 60 * 1000));
                if (daysLate > 0) latePenalty = (rate / 100 * sisaPokok) * daysLate;
            }
        }
        
        h += \`<div style="white-space:pre;font-weight:bold;">\${pL('SISA POKOK', sisaPokok.toLocaleString('id-ID'))}</div>\`;
        if (latePenalty > 0) {
            h += \`<div style="white-space:pre;">\${pL('DENDA', Math.round(latePenalty).toLocaleString('id-ID'))}</div>\`;
        }
        
        let tagihanAkhir = sisaPokok + latePenalty;
        h += \`<div class="border-b border-black my-2" style="border-width:1px;"></div>\`;
        h += \`<div style="white-space:pre;font-weight:black;font-size:14px;">\${pL('SISA TAGIHAN', Math.round(tagihanAkhir).toLocaleString('id-ID'))}</div>\`;
        
        h += \`<div class="border-b border-dashed border-black my-3"></div><div class="text-center" style="font-size:10px;">Terima kasih atas kepercayaannya.</div>\`;
        
        setH('receipt-html', h);
        show('receipt-preview-modal');
    } catch (e) {
        hLoad(); showToast('Gagal memuat struk: ' + e.message);
    }
};
`;

    content = content.replace('window.markTempoPaid = async (orderId) => {', newFunctions + '\nwindow.markTempoPaid = async (orderId) => {');
    
    fs.writeFileSync('index.html', content);
    console.log('Success update piutang ui and add installment/receipt features');
} else {
    console.log('Regex did not match.');
}
