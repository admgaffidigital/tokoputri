/**
 * ============================================================
 * MODUL ADMIN: PIUTANG & MANAJEMEN PEMBAYARAN TEMPO
 * Mengatur pelacakan piutang jatuh tempo, denda keterlambatan,
 * pembekuan denda, pembayaran cicilan / angsuran,
 * pelunasan instan, tagihan via WhatsApp, dan cetak struk tempo.
 * ============================================================
 */

import { db } from '../../config/firebase.js';
import { appData } from '../../core/state.js';
import { 
    el, setH, esc, fCur, showToast, showConfirm, sLoad, hLoad 
} from '../../core/utils.js';

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
};


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
        
        let h = `<div class="text-center font-bold" style="font-size:13px;margin-bottom:2px;">${esc(sN)}</div>`;
        if(sW) h += `<div class="text-center" style="margin-bottom:4px;">WA: ${esc(sW)}</div>`;
        h += `<div class="text-center font-bold uppercase my-2" style="font-size:14px;border-bottom:1px solid #000;border-top:1px solid #000;padding:2px 0;">NOTA TEMPO${o.payment?.paymentStatus === 'lunas' ? ' - LUNAS' : ''}</div>`;
        h += `<div style="white-space:pre;">Order: #${o.orderId}</div><div style="white-space:pre;">Tgl  : ${d}</div><div style="white-space:pre;">Plg  : ${esc(o.customer?.name||'Guest').substring(0,20)}</div>`;
        if (o.payment?.tempoDueDate) {
            h += `<div style="white-space:pre;">J.Tmp: ${new Date(o.payment.tempoDueDate).toLocaleDateString('id-ID')}</div>`;
        }
        h += `<div class="border-b border-dashed border-black my-2"></div>`;
        
        let subtotal = 0;
        o.items.forEach(i => {
            let vText = i.variantName ? ` (${esc(i.variantName)}${i.colorCode ? ' ' + esc(i.colorCode) : ''})` : '';
            const n = (esc(i.name) + vText + (i.poTime?` [PO]`:'')).substring(0,32);
            const q = `${parseFloat(i.qty)} ${esc(i.unit||'pcs')} x ${i.effectivePrice.toLocaleString('id-ID')}`;
            const t = (parseFloat(i.qty)*i.effectivePrice).toLocaleString('id-ID');
            h += `<div style="white-space:pre-wrap;font-weight:bold;word-break:break-all;">${n}</div><div style="white-space:pre;font-size:11px;">${pL(q,t)}</div>`;
            if (i.poTime) {
                h += `<div style="white-space:pre;font-size:10px;font-style:italic;color:#4b5563;">* Estimasi PO: ${esc(i.poTime)}</div>`;
            }
            subtotal += (parseFloat(i.qty)*i.effectivePrice);
        });
        
        h += `<div class="border-b border-dashed border-black my-2"></div>`;
        h += `<div style="white-space:pre;font-weight:bold;">${pL('Subtotal', subtotal.toLocaleString('id-ID'))}</div>`;
        
        if (o.payment?.grandTotal && o.payment.grandTotal !== subtotal) {
            let diff = o.payment.grandTotal - subtotal;
            if (diff > 0) {
                h += `<div style="white-space:pre;">${pL('Ongkir/Biaya', diff.toLocaleString('id-ID'))}</div>`;
            } else {
                h += `<div style="white-space:pre;">${pL('Diskon', Math.abs(diff).toLocaleString('id-ID'))}</div>`;
            }
        }
        
        h += `<div style="white-space:pre;font-weight:bold;margin-top:4px;">${pL('TOTAL KREDIT', (o.payment?.grandTotal || subtotal).toLocaleString('id-ID'))}</div>`;
        h += `<div class="border-b border-black my-2" style="border-width:1px;"></div>`;
        
        let totalPaid = 0;
        if (o.payment?.installments && o.payment.installments.length > 0) {
            h += `<div style="white-space:pre;font-weight:bold;margin-bottom:2px;">HISTORI CICILAN:</div>`;
            o.payment.installments.forEach((ins, idx) => {
                let idate = new Date(ins.date).toLocaleDateString('id-ID', {day:'2-digit',month:'short'});
                let amt = ins.amount.toLocaleString('id-ID');
                h += `<div style="white-space:pre;">${pL(`${idx+1}. ${idate}`, amt)}</div>`;
                totalPaid += ins.amount;
            });
            h += `<div style="white-space:pre;font-weight:bold;margin-top:2px;">${pL('TOTAL DIBAYAR', totalPaid.toLocaleString('id-ID'))}</div>`;
            h += `<div class="border-b border-dashed border-black my-2"></div>`;
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
        
        h += `<div style="white-space:pre;font-weight:bold;">${pL('SISA POKOK', sisaPokok.toLocaleString('id-ID'))}</div>`;
        if (latePenalty > 0) {
            h += `<div style="white-space:pre;">${pL('DENDA', Math.round(latePenalty).toLocaleString('id-ID'))}</div>`;
        }
        
        let tagihanAkhir = sisaPokok + latePenalty;
        h += `<div class="border-b border-black my-2" style="border-width:1px;"></div>`;
        h += `<div style="white-space:pre;font-weight:black;">${pL('SISA TAGIHAN', Math.round(tagihanAkhir).toLocaleString('id-ID'))}</div>`;
        
        const hasPO = o.items.some(i => i.poTime && i.poTime !== '');
        if (hasPO) {
            h += `<div class="border-b border-dashed border-black my-2"></div><div style="white-space:pre-wrap;font-size:9px;text-align:center;line-height:1.2;font-style:italic;color:#4b5563;margin-bottom:4px;">* Catatan: Untuk pesanan gabungan, produk PO akan dikirimkan menyusul (estimasi sesuai label) tanpa dikenakan biaya tambahan.</div>`;
        }
        h += `<div class="border-b border-dashed border-black my-2"></div><div class="text-center my-2" style="font-size:10px;">Terima kasih atas kepercayaannya.</div><div class="border-b border-dashed border-black my-2"></div><div style="height:20px;"></div>`;
        
        setH('receipt-paper-content', h);
        const mRec = el('receipt-preview-modal');
        if (mRec && mRec.classList.contains('hidden')) pushModalHistory('receipt');
        show('receipt-preview-modal');
        setTimeout(() => { el('receipt-preview-modal').classList.remove('opacity-0'); el('receipt-preview-modal-box').classList.remove('scale-95'); }, 10);
    } catch (e) {
        hLoad(); showToast('Gagal memuat struk: ' + e.message);
    }
};
window.markTempoPaid = async (orderId) => {
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
    } catch(e) {
        showToast('Gagal mengubah status: ' + e.message);
    }
    });
};

window.rAdmPiutang = async () => {
    sLoad('Memuat data piutang...');
    let piutangOrders = [];
    try {
        const snap = await db.collection("freshmart_orders")
            .where("payment.method", "==", "tempo")
            .where("payment.paymentStatus", "==", "hutang")
            .get();
        snap.forEach(doc => { piutangOrders.push(doc.data()); });
    } catch (e) {
        hLoad();
        showToast('Gagal memuat piutang: ' + e.message);
        return;
    }
    hLoad();

    let totalPiutang = 0;
    
    let h = `
    <div class="max-w-full pb-10 fade-in text-sm">
        <div class="mb-5 bg-white dark:bg-slate-800 p-5 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm flex items-center justify-between">
            <div class="flex items-center gap-4">
                <div class="w-12 h-12 bg-pink-50 dark:bg-pink-900/30 text-pink-600 rounded-xl flex items-center justify-center"><i class="fa-solid fa-hand-holding-dollar text-xl"></i></div>
                <div>
                    <h2 class="font-bold text-slate-800 dark:text-slate-100 uppercase tracking-widest text-sm">Tagihan Tempo</h2>
                    <p class="text-[10px] font-bold text-slate-400 mt-1">Daftar pelanggan VIP yang belum lunas</p>
                </div>
            </div>
            <div class="text-right">
                <p class="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Total Piutang Berjalan</p>
                <p class="text-xl font-bold text-rose-500" id="total-piutang-header">Rp 0</p>
            </div>
        </div>
    `;

    if (piutangOrders.length === 0) {
        h += `<div class="bg-white dark:bg-slate-800 p-8 text-center rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
                <div class="w-20 h-20 bg-[rgba(var(--color-primary-rgb),0.08)] dark:bg-[rgba(var(--color-primary-rgb),0.15)] text-[var(--color-primary)] rounded-full flex items-center justify-center mx-auto mb-4"><i class="fa-solid fa-check-double text-4xl"></i></div>
                <h3 class="font-bold text-slate-700 dark:text-slate-200 text-lg uppercase tracking-widest">Luar Biasa!</h3>
                <p class="text-slate-500 mt-2 text-xs font-bold">Semua tagihan pelanggan telah lunas. Tidak ada piutang tertunda.</p>
              </div>`;
    } else {
        h += `<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">`;
        piutangOrders.forEach(o => {
            let sisa = o.payment?.tempoBalance || 0;
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
            
            h += `
            <div class="bg-white dark:bg-slate-800 p-5 rounded-2xl border ${isLate ? 'border-rose-300 dark:border-rose-700 shadow-[0_0_15px_rgba(225,29,72,0.1)]' : 'border-slate-200 dark:border-slate-700 shadow-sm'} relative overflow-hidden group hover:-translate-y-1 transition-all">
                ${isLate ? `<div class="absolute -right-6 top-4 ${isStopped ? 'bg-slate-500' : 'bg-rose-500'} text-white text-[9px] font-bold uppercase tracking-widest px-8 py-1 rotate-45 shadow-sm">TERLAMBAT ${daysLate} HARI</div>` : ''}
                
                <div class="flex justify-between items-start mb-4 pr-12">
                    <div>
                        <p class="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Pesanan #${o.orderId.substring(4, 10)}</p>
                        <h3 class="font-bold text-slate-800 dark:text-slate-200 mt-1 uppercase">${esc(o.customer?.name || 'Anonim')}</h3>
                        <p class="text-[10px] font-bold text-slate-500 flex items-center gap-1 mt-0.5"><i class="fa-brands fa-whatsapp text-emerald-500"></i> ${esc(o.customer?.wa || '-')}</p>
                    </div>
                </div>
                
                <div class="space-y-2 mb-4 bg-slate-50 dark:bg-slate-900/50 p-3.5 rounded-xl border border-slate-100 dark:border-slate-700/50">
                    <div class="flex justify-between items-center text-xs">
                        <span class="font-bold text-slate-500">Jatuh Tempo</span>
                        <span class="font-bold ${isLate ? 'text-rose-600' : 'text-slate-700 dark:text-slate-300'}">${new Date(dueDate).toLocaleDateString('id-ID')}</span>
                    </div>
                    <div class="flex justify-between items-center text-xs">
                        <span class="font-bold text-slate-500">Sisa Pokok</span>
                        <span class="font-bold text-slate-700 dark:text-slate-300 font-mono">${fCur(sisa)}</span>
                    </div>
                    ${isLate ? `
                    <div class="flex justify-between items-center text-xs ${isStopped ? 'text-slate-500' : 'text-rose-600'}">
                        <span class="font-bold">Denda (${rate}%/hari) ${isStopped ? '<span class="text-[9px] bg-slate-200 dark:bg-slate-700 px-1 py-0.5 rounded ml-1">STOPPED</span>' : ''}</span>
                        <span class="font-bold font-mono">+${fCur(latePenalty)}</span>
                    </div>` : ''}
                </div>
                
                <div class="flex justify-between items-center bg-rose-50 text-rose-600 dark:bg-rose-900/20 dark:text-rose-400 p-3.5 rounded-xl border border-rose-100 dark:border-rose-900/30 mb-3">
                    <span class="text-[10px] font-bold uppercase tracking-widest">Total Tagihan</span>
                    <span class="text-sm font-bold font-mono tracking-tight">${fCur(totalAkhir)}</span>
                </div>
                
                <div class="flex gap-2 mb-3">
                    <button onclick="editTempoPenalty('${o.orderId}', ${rate})" class="flex-1 bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 text-slate-600 dark:text-slate-300 rounded-xl py-2 flex items-center justify-center gap-1.5 text-[10px] font-bold uppercase tracking-widest transition-all">
                        <i class="fa-solid fa-percent"></i> Edit Denda
                    </button>
                    <button onclick="stopTempoPenalty('${o.orderId}', ${latePenalty}, ${isStopped})" class="flex-1 ${isStopped ? 'bg-[rgba(var(--color-primary-rgb),0.08)] dark:bg-[rgba(var(--color-primary-rgb),0.12)] text-[var(--color-primary)] hover:bg-[rgba(var(--color-primary-rgb),0.15)]' : 'bg-rose-100 dark:bg-rose-900/30 text-rose-600 dark:text-rose-400 hover:bg-rose-200'} rounded-xl py-2 flex items-center justify-center gap-1.5 text-[10px] font-bold uppercase tracking-widest transition-all">
                        <i class="fa-solid ${isStopped ? 'fa-play' : 'fa-stop'}"></i> ${isStopped ? 'Lanjut Denda' : 'Stop Denda'}
                    </button>
                </div>
                
                ${o.payment?.installments && o.payment.installments.length > 0 ? `
                <div class="mb-3 space-y-1.5 bg-slate-50 dark:bg-slate-900/30 p-3 rounded-xl border border-slate-100 dark:border-slate-800">
                    <div class="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-2 flex justify-between">
                        <span>Riwayat Cicilan</span>
                        <span>Total: ${fCur(o.payment.installments.reduce((sum, ins) => sum + (parseFloat(ins.amount)||0), 0))}</span>
                    </div>
                    ${o.payment.installments.map((ins) => `
                    <div class="flex justify-between items-center text-[10px]">
                        <span class="text-slate-500 dark:text-slate-400">${new Date(ins.date).toLocaleDateString('id-ID')}</span>
                        <span class="font-bold text-[var(--color-primary)] font-mono">+${fCur(ins.amount)}</span>
                    </div>
                    `).join('')}
                </div>` : ''}
                
                <div class="flex gap-2 mb-2">
                    <a href="https://wa.me/${waNum}?text=Halo%20kak%20${esc(o.customer?.name||'')},%20mengingatkan%20bahwa%20sisa%20tagihan%20Tempo%20untuk%20pesanan%20${o.orderId}%20sebesar%20${fCur(totalAkhir)}%20sudah%20jatuh%20tempo.%20Mohon%20segera%20dilunasi." target="_blank" class="flex-1 bg-[rgba(var(--color-primary-rgb),0.06)] dark:bg-[rgba(var(--color-primary-rgb),0.10)] hover:bg-[rgba(var(--color-primary-rgb),0.12)] dark:hover:bg-[rgba(var(--color-primary-rgb),0.16)] text-[var(--color-primary)] border border-[var(--color-primary)]/25 rounded-xl py-2 flex items-center justify-center gap-1.5 text-[10px] font-bold uppercase tracking-widest transition-all">
                        <i class="fa-brands fa-whatsapp text-sm"></i> Tagih
                    </a>
                    <button onclick="previewTempoReceipt('${o.orderId}')" class="flex-1 bg-amber-500 hover:bg-amber-600 text-white rounded-xl py-2 flex items-center justify-center gap-1.5 text-[10px] font-bold uppercase tracking-widest shadow-sm shadow-amber-500/30 transition-all">
                        <i class="fa-solid fa-print"></i> Struk
                    </button>
                </div>
                <div class="flex gap-2">
                    <button onclick="payTempoInstallment('${o.orderId}')" class="flex-1 bg-[var(--color-primary)] hover:opacity-90 text-white rounded-xl py-2.5 flex items-center justify-center gap-1.5 text-[10px] font-bold uppercase tracking-widest shadow-sm transition-all">
                        <i class="fa-solid fa-money-bill-wave"></i> Cicil
                    </button>
                    <button onclick="markTempoPaid('${o.orderId}')" class="flex-1 bg-[var(--color-primary)] hover:opacity-90 text-white rounded-xl py-2.5 flex items-center justify-center gap-1.5 text-[10px] font-bold uppercase tracking-widest shadow-sm transition-all">
                        <i class="fa-solid fa-check-double"></i> Lunas
                    </button>
                </div>
            </div>`;
        });
        h += `</div>`;
    }
    
    h += `</div>`;
    setH('admin-content', h);
    
    setTimeout(() => {
        if(el('total-piutang-header')) el('total-piutang-header').innerText = fCur(totalPiutang);
    }, 100);
};

