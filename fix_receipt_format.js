const fs = require('fs');
let content = fs.readFileSync('index.html', 'utf8');

const oldFunc = /window\.previewTempoReceipt = async \(orderId\) => \{[\s\S]*?show\('receipt-preview-modal'\);[\s\S]*?catch \(e\) \{[\s\S]*?\}\s*\};\s*window\.markTempoPaid/;

const newFunc = `window.previewTempoReceipt = async (orderId) => {
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
        h += \`<div class="text-center font-bold uppercase my-2" style="font-size:14px;border-bottom:1px solid #000;border-top:1px solid #000;padding:2px 0;">NOTA TEMPO\${o.payment?.paymentStatus === 'lunas' ? ' - LUNAS' : ''}</div>\`;
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
        
        h += \`<div style="white-space:pre;font-weight:bold;margin-top:4px;">\${pL('TOTAL KREDIT', (o.payment?.grandTotal || subtotal).toLocaleString('id-ID'))}</div>\`;
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
        h += \`<div style="white-space:pre;font-weight:black;">\${pL('SISA TAGIHAN', Math.round(tagihanAkhir).toLocaleString('id-ID'))}</div>\`;
        
        h += \`<div class="border-b border-dashed border-black my-2"></div><div class="text-center my-2" style="font-size:10px;">Terima kasih atas kepercayaannya.</div><div class="border-b border-dashed border-black my-2"></div><div style="height:20px;"></div>\`;
        
        setH('receipt-paper-content', h);
        const mRec = el('receipt-preview-modal');
        if (mRec && mRec.classList.contains('hidden')) pushModalHistory('receipt');
        show('receipt-preview-modal');
        setTimeout(() => { el('receipt-preview-modal').classList.remove('opacity-0'); el('receipt-preview-modal-box').classList.remove('scale-95'); }, 10);
    } catch (e) {
        hLoad(); showToast('Gagal memuat struk: ' + e.message);
    }
};
window.markTempoPaid`;

let found = false;
content = content.replace(oldFunc, () => {
    found = true;
    return newFunc;
});

if (found) {
    fs.writeFileSync('index.html', content);
    console.log('Fixed receipt formatting and spacing.');
} else {
    console.log('Target function not found.');
}
