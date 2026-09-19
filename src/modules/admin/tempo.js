/**
 * ============================================================
 * MODUL ADMIN: PIUTANG & MANAJEMEN PEMBAYARAN TEMPO CERDAS
 * Mengatur pelacakan piutang jatuh tempo, metrik statistik,
 * filter status keterlambatan, pencarian instan, denda otomatis,
 * pembekuan denda, pembayaran cicilan, pelunasan instan,
 * 1-Klik Tagihan WhatsApp otomatis & rincian rekening, dan cetak struk.
 * ============================================================
 */

import { db } from '../../config/firebase.js';
import { appData, gOrds } from '../../core/state.js';
import { 
    el, show, hide, setH, esc, fCur, showToast, showConfirm, sLoad, hLoad, openWhatsApp, normalizeWA 
} from '../../core/utils.js';

const pushModalHistory = (id) => window.pushModalHistory?.(id);

let activeTempoFilter = 'all'; // 'all' | 'late' | 'due_soon' | 'active'
let tempoSearchQuery = '';
let cachedPiutangOrders = [];

/**
 * Kalkulasi dinamis piutang, keterlambatan, dan denda suatu pesanan
 */
export const getTempoOrderCalculations = (o) => {
    let sisa = parseFloat(o.payment?.tempoBalance) || 0;
    let rate = o.payment?.tempoPenaltyRate !== undefined ? parseFloat(o.payment.tempoPenaltyRate) : 1;
    let isStopped = o.payment?.tempoPenaltyStopped === true;
    let latePenalty = 0;
    let dueDate = o.payment?.tempoDueDate || 0;
    let daysLate = 0;
    let daysLeft = 0;
    let isLate = false;
    let isDueSoon = false;
    const now = Date.now();

    if (dueDate > 0) {
        if (now > dueDate) {
            daysLate = Math.floor((now - dueDate) / (24 * 60 * 60 * 1000));
            if (daysLate > 0) isLate = true;
        } else {
            daysLeft = Math.ceil((dueDate - now) / (24 * 60 * 60 * 1000));
            if (daysLeft <= 3) isDueSoon = true;
        }
    }

    if (isStopped) {
        latePenalty = parseFloat(o.payment?.tempoFixedPenalty) || 0;
    } else if (isLate) {
        latePenalty = (rate / 100 * sisa) * daysLate;
    }

    let totalAkhir = sisa + latePenalty;
    let statusCategory = isLate ? 'late' : (isDueSoon ? 'due_soon' : 'active');

    return {
        sisa,
        rate,
        isStopped,
        latePenalty,
        dueDate,
        daysLate,
        daysLeft,
        isLate,
        isDueSoon,
        totalAkhir,
        statusCategory
    };
};

window.editTempoPenalty = (orderId, currentRate) => {
    window.customPrompt('Persentase Denda Baru (% / Hari)', currentRate, async (val) => {
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
    let msg = isStopped ? 'Lanjutkan perhitungan denda otomatis berjalan?' : 'Hentikan denda berjalan sekarang? (Nominal denda akan dibekukan di ' + fCur(latePenalty) + ')';
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
        if (isNaN(amount) || amount <= 0) return showToast('Nominal cicilan tidak valid!');
        
        sLoad('Menyimpan cicilan...');
        try {
            const doc = await db.collection("freshmart_orders").doc(orderId).get();
            if (!doc.exists) {
                hLoad();
                return showToast('Pesanan tidak ditemukan');
            }
            const data = doc.data();
            
            let newBalance = (data.payment?.tempoBalance || 0) - amount;
            let installments = data.payment?.installments || [];
            
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
        const sN = appData.store?.name || "Toko Putri", sW = appData.store?.wa || "";
        
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
        (o.items || []).forEach(i => {
            let vText = i.variantName ? ` (${esc(i.variantName)}${i.colorCode ? ' ' + esc(i.colorCode) : ''})` : '';
            const n = (esc(i.name) + vText + (i.poTime?` [PO]`:'')).substring(0,32);
            const effPrice = i.effectivePrice !== undefined ? i.effectivePrice : (i.price || 0);
            const q = `${parseFloat(i.qty)} ${esc(i.unit||'pcs')} x ${effPrice.toLocaleString('id-ID')}`;
            const t = (parseFloat(i.qty)*effPrice).toLocaleString('id-ID');
            h += `<div style="white-space:pre-wrap;font-weight:bold;word-break:break-all;">${n}</div><div style="white-space:pre;font-size:11px;">${pL(q,t)}</div>`;
            if (i.poTime) {
                h += `<div style="white-space:pre;font-size:10px;font-style:italic;color:#4b5563;">* Estimasi PO: ${esc(i.poTime)}</div>`;
            }
            subtotal += (parseFloat(i.qty)*effPrice);
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
        
        const calc = getTempoOrderCalculations(o);
        
        h += `<div style="white-space:pre;font-weight:bold;">${pL('SISA POKOK', calc.sisa.toLocaleString('id-ID'))}</div>`;
        if (calc.latePenalty > 0) {
            h += `<div style="white-space:pre;">${pL('DENDA', Math.round(calc.latePenalty).toLocaleString('id-ID'))}</div>`;
        }
        
        h += `<div class="border-b border-black my-2" style="border-width:1px;"></div>`;
        h += `<div style="white-space:pre;font-weight:black;">${pL('SISA TAGIHAN', Math.round(calc.totalAkhir).toLocaleString('id-ID'))}</div>`;
        
        const hasPO = (o.items || []).some(i => i.poTime && i.poTime !== '');
        if (hasPO) {
            h += `<div class="border-b border-dashed border-black my-2"></div><div style="white-space:pre-wrap;font-size:9px;text-align:center;line-height:1.2;font-style:italic;color:#4b5563;margin-bottom:4px;">* Catatan: Untuk pesanan gabungan, produk PO akan dikirimkan menyusul tanpa dikenakan biaya tambahan.</div>`;
        }
        h += `<div class="border-b border-dashed border-black my-2"></div><div class="text-center my-2" style="font-size:10px;">Terima kasih atas kepercayaannya.</div><div class="border-b border-dashed border-black my-2"></div><div style="height:20px;"></div>`;
        
        setH('receipt-paper-content', h);
        const mRec = el('receipt-preview-modal');
        if (mRec && mRec.classList.contains('hidden')) pushModalHistory('receipt');
        show('receipt-preview-modal');
        setTimeout(() => { 
            if (el('receipt-preview-modal')) el('receipt-preview-modal').classList.remove('opacity-0'); 
            if (el('receipt-preview-modal-box')) el('receipt-preview-modal-box').classList.remove('scale-95'); 
        }, 10);
    } catch (e) {
        hLoad(); showToast('Gagal memuat struk: ' + e.message);
    }
};

window.markTempoPaid = async (orderId) => {
    showConfirm('Konfirmasi Pelunasan', 'Tandai seluruh sisa tagihan tempo pesanan ini sebagai LUNAS?', async () => {
        try {
            await db.collection("freshmart_orders").doc(orderId).update({
                'payment.paymentStatus': 'lunas',
                'payment.tempoBalance': 0,
                status: 'Selesai'
            });
            showToast('Tagihan tempo berhasil dilunasi!');
            if (Array.isArray(gOrds)) {
                let idx = gOrds.findIndex(o => o.orderId === orderId);
                if(idx !== -1) {
                    gOrds[idx].payment.paymentStatus = 'lunas';
                    gOrds[idx].payment.tempoBalance = 0;
                    gOrds[idx].status = 'Selesai';
                }
            }
            window.rAdmPiutang(); 
        } catch(e) {
            showToast('Gagal melunasi tagihan: ' + e.message);
        }
    }, 'Ya, Lunasi', false);
};

/**
 * 1-Klik Tagih Cerdas via WhatsApp dengan Pesan Profesional & Rekening Toko
 */
window.sendSmartTempoWA = (orderId) => {
    const o = cachedPiutangOrders.find(x => x.orderId === orderId);
    if (!o) return showToast('Data pesanan tidak ditemukan!');

    const rawWa = o.customer?.wa || '';
    const waNum = normalizeWA(rawWa);
    if (!waNum) return showToast('Nomor WhatsApp pelanggan belum valid!');

    const calc = getTempoOrderCalculations(o);
    const storeName = appData.store?.name || "Toko Putri";
    const custName = o.customer?.name || "Pelanggan";
    const dateStr = o.dateString ? new Date(o.dateString).toLocaleDateString('id-ID', { day: '2-digit', month: 'long', year: 'numeric' }) : "-";
    const dueStr = calc.dueDate ? new Date(calc.dueDate).toLocaleDateString('id-ID', { day: '2-digit', month: 'long', year: 'numeric' }) : "-";

    let bankText = '';
    if (appData.banks && appData.banks.length > 0) {
        bankText = appData.banks.map(b => `• *Bank ${b.bankName}*: ${b.bankAccount} (a.n ${b.bankOwner})`).join('\n');
    } else {
        bankText = 'Silakan hubungi admin/kasir untuk konfirmasi nomor rekening transfer.';
    }

    let msg = '';
    if (calc.isLate) {
        msg = `*PEMBERITAHUAN JATUH TEMPO - ${storeName.toUpperCase()}*\n\n` +
              `Yth. Bpk/Ibu *${custName}*,\n` +
              `Kami menginformasikan bahwa tagihan pembelian Tempo Anda telah *MELEWATI BATAS JATUH TEMPO* (${calc.daysLate} hari keterlambatan).\n\n` +
              `📋 *Rincian Tagihan:*\n` +
              `• No. Pesanan: #${o.orderId}\n` +
              `• Tgl. Transaksi: ${dateStr}\n` +
              `• Tgl. Jatuh Tempo: ${dueStr}\n` +
              `• Sisa Pokok: ${fCur(calc.sisa)}\n` +
              (calc.latePenalty > 0 ? `• Denda (${calc.rate}%/hari): ${fCur(calc.latePenalty)}\n` : '') +
              `• *TOTAL HARUS DIBAYAR: ${fCur(calc.totalAkhir)}*\n\n` +
              `💳 *Pembayaran dapat ditransfer ke rekening resmi kami:*\n` +
              `${bankText}\n\n` +
              `Mohon kesediaannya untuk segera melakukan pelunasan dan mengirimkan bukti transfer ke WhatsApp ini. Terima kasih banyak atas kerjasamanya. 🙏`;
    } else if (calc.isDueSoon) {
        let reminderWord = calc.daysLeft <= 0 ? "hari ini" : `${calc.daysLeft} hari lagi`;
        msg = `*PENGINGAT JATUH TEMPO - ${storeName.toUpperCase()}*\n\n` +
              `Halo Bpk/Ibu *${custName}*,\n` +
              `Semoga sehat dan sukses selalu. Kami dari *${storeName}* menginfokan bahwa tagihan pembelian Tempo Anda akan jatuh tempo *${reminderWord}* (${dueStr}).\n\n` +
              `📋 *Rincian Tagihan:*\n` +
              `• No. Pesanan: #${o.orderId}\n` +
              `• Tgl. Transaksi: ${dateStr}\n` +
              `• Tgl. Jatuh Tempo: ${dueStr}\n` +
              `• *Sisa Tagihan: ${fCur(calc.totalAkhir)}*\n\n` +
              `💳 *Pembayaran dapat ditransfer ke rekening resmi kami:*\n` +
              `${bankText}\n\n` +
              `Apabila sudah melakukan pembayaran, mohon abaikan pesan ini atau kirimkan bukti transfer ke nomor ini. Terima kasih atas kepercayaannya berbelanja di ${storeName}. 🙏`;
    } else {
        msg = `*INFORMASI TAGIHAN TEMPO - ${storeName.toUpperCase()}*\n\n` +
              `Halo Bpk/Ibu *${custName}*,\n` +
              `Berikut informasi rincian tagihan pembelian Tempo Anda di *${storeName}*:\n\n` +
              `📋 *Rincian Tagihan:*\n` +
              `• No. Pesanan: #${o.orderId}\n` +
              `• Tgl. Transaksi: ${dateStr}\n` +
              `• Tgl. Jatuh Tempo: ${dueStr} (tersisa ${calc.daysLeft} hari)\n` +
              `• *Sisa Pokok: ${fCur(calc.totalAkhir)}*\n\n` +
              `💳 *Rekening Pembayaran Resmi:*\n` +
              `${bankText}\n\n` +
              `Terima kasih telah menjadi pelanggan setia ${storeName}. 🙏`;
    }

    if (typeof window.openWhatsApp === 'function') {
        window.openWhatsApp(waNum, msg);
    } else {
        openWhatsApp(waNum, msg);
    }
};

window.setTempoFilter = (filterKey) => {
    activeTempoFilter = filterKey;
    renderTempoContent();
};

window.onTempoSearch = (val) => {
    tempoSearchQuery = val || '';
    renderTempoCardsOnly();
};

const renderTempoCardsOnly = () => {
    const container = el('tempo-cards-container');
    if (!container) return;

    let filtered = cachedPiutangOrders.filter(o => {
        const calc = getTempoOrderCalculations(o);
        if (activeTempoFilter === 'late' && !calc.isLate) return false;
        if (activeTempoFilter === 'due_soon' && (!calc.isDueSoon || calc.isLate)) return false;
        if (activeTempoFilter === 'active' && (calc.isLate || calc.isDueSoon)) return false;

        if (tempoSearchQuery.trim()) {
            const q = tempoSearchQuery.trim().toLowerCase();
            const cName = (o.customer?.name || '').toLowerCase();
            const cWa = (o.customer?.wa || '').toLowerCase();
            const ordId = (o.orderId || '').toLowerCase();
            if (!cName.includes(q) && !cWa.includes(q) && !ordId.includes(q)) return false;
        }

        return true;
    });

    if (filtered.length === 0) {
        container.innerHTML = `
            <div class="col-span-full bg-white dark:bg-slate-800 p-8 text-center rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
                <div class="w-16 h-16 bg-slate-100 dark:bg-slate-700/50 text-slate-400 rounded-full flex items-center justify-center mx-auto mb-3">
                    <i class="fa-solid fa-filter-circle-xmark text-2xl"></i>
                </div>
                <h4 class="font-bold text-slate-700 dark:text-slate-200 text-sm uppercase tracking-wider">Tidak Ada Data</h4>
                <p class="text-slate-500 dark:text-slate-400 mt-1 text-xs font-medium">Tidak ada tagihan yang cocok dengan filter atau kata kunci pencarian.</p>
            </div>
        `;
        return;
    }

    container.innerHTML = filtered.map(o => renderTempoCardItem(o)).join('');
};

const renderTempoCardItem = (o) => {
    const calc = getTempoOrderCalculations(o);
    const waNum = normalizeWA(o.customer?.wa || '');
    const dueStr = calc.dueDate ? new Date(calc.dueDate).toLocaleDateString('id-ID', { day: '2-digit', month: 'short', year: 'numeric' }) : '-';

    let badgeHTML = '';
    let borderClass = 'border-slate-200 dark:border-slate-700';

    if (calc.isLate) {
        borderClass = 'border-rose-400 dark:border-rose-600 shadow-[0_0_15px_rgba(225,29,72,0.12)]';
        badgeHTML = `<div class="absolute -right-7 top-4 bg-rose-600 text-white text-[9px] font-bold uppercase tracking-widest px-8 py-1 rotate-45 shadow-sm">TERLAMBAT ${calc.daysLate} HARI</div>`;
    } else if (calc.isDueSoon) {
        borderClass = 'border-amber-400 dark:border-amber-600 shadow-[0_0_15px_rgba(245,158,11,0.12)]';
        badgeHTML = `<div class="absolute -right-7 top-4 bg-amber-500 text-white text-[9px] font-bold uppercase tracking-widest px-8 py-1 rotate-45 shadow-sm">H-${calc.daysLeft <= 0 ? '0 (HARI INI)' : calc.daysLeft}</div>`;
    } else {
        badgeHTML = `<div class="inline-block px-2.5 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800">Sisa ${calc.daysLeft} Hari</div>`;
    }

    return `
    <div class="bg-white dark:bg-slate-800 p-5 rounded-2xl border ${borderClass} relative overflow-hidden group hover:-translate-y-1 transition-all duration-300 shadow-sm flex flex-col justify-between">
        ${badgeHTML}
        
        <div>
            <div class="flex justify-between items-start mb-3 pr-12">
                <div>
                    <p class="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Pesanan #${o.orderId}</p>
                    <h3 class="font-bold text-slate-800 dark:text-slate-100 mt-1 uppercase text-sm">${esc(o.customer?.name || 'Anonim')}</h3>
                    <p class="text-[11px] font-bold text-slate-500 flex items-center gap-1.5 mt-0.5">
                        <i class="fa-brands fa-whatsapp text-emerald-500"></i>
                        <a href="javascript:void(0)" onclick="window.sendSmartTempoWA('${o.orderId}')" class="hover:underline text-slate-600 dark:text-slate-300 font-mono">+${esc(o.customer?.wa || '-')}</a>
                    </p>
                </div>
            </div>
            
            <div class="space-y-2 mb-3 bg-slate-50 dark:bg-slate-900/50 p-3.5 rounded-xl border border-slate-100 dark:border-slate-700/50">
                <div class="flex justify-between items-center text-xs">
                    <span class="font-bold text-slate-500">Jatuh Tempo</span>
                    <span class="font-bold font-mono ${calc.isLate ? 'text-rose-600' : (calc.isDueSoon ? 'text-amber-600' : 'text-slate-700 dark:text-slate-300')}">${dueStr}</span>
                </div>
                <div class="flex justify-between items-center text-xs">
                    <span class="font-bold text-slate-500">Sisa Pokok</span>
                    <span class="font-bold text-slate-700 dark:text-slate-300 font-mono">${fCur(calc.sisa)}</span>
                </div>
                ${calc.isLate ? `
                <div class="flex justify-between items-center text-xs ${calc.isStopped ? 'text-slate-500' : 'text-rose-600'}">
                    <span class="font-bold">Denda (${calc.rate}%/hari) ${calc.isStopped ? '<span class="text-[9px] bg-slate-200 dark:bg-slate-700 px-1 py-0.5 rounded ml-1">STOPPED</span>' : ''}</span>
                    <span class="font-bold font-mono">+${fCur(calc.latePenalty)}</span>
                </div>` : ''}
            </div>
            
            <div class="flex justify-between items-center bg-rose-50 text-rose-600 dark:bg-rose-900/20 dark:text-rose-400 p-3.5 rounded-xl border border-rose-100 dark:border-rose-900/30 mb-3">
                <span class="text-[10px] font-bold uppercase tracking-widest">Total Tagihan</span>
                <span class="text-sm font-bold font-mono tracking-tight">${fCur(calc.totalAkhir)}</span>
            </div>
            
            <div class="flex gap-2 mb-3">
                <button onclick="editTempoPenalty('${o.orderId}', ${calc.rate})" class="flex-1 bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 text-slate-600 dark:text-slate-300 rounded-xl py-2 flex items-center justify-center gap-1.5 text-[10px] font-bold uppercase tracking-widest transition-all">
                    <i class="fa-solid fa-percent"></i> Edit Denda
                </button>
                <button onclick="stopTempoPenalty('${o.orderId}', ${calc.latePenalty}, ${calc.isStopped})" class="flex-1 ${calc.isStopped ? 'bg-[rgba(var(--color-primary-rgb),0.08)] dark:bg-[rgba(var(--color-primary-rgb),0.12)] text-[var(--color-primary)] hover:bg-[rgba(var(--color-primary-rgb),0.15)]' : 'bg-rose-100 dark:bg-rose-900/30 text-rose-600 dark:text-rose-400 hover:bg-rose-200'} rounded-xl py-2 flex items-center justify-center gap-1.5 text-[10px] font-bold uppercase tracking-widest transition-all">
                    <i class="fa-solid ${calc.isStopped ? 'fa-play' : 'fa-stop'}"></i> ${calc.isStopped ? 'Lanjut Denda' : 'Stop Denda'}
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
                    <span class="text-slate-500 dark:text-slate-400 font-mono">${new Date(ins.date).toLocaleDateString('id-ID', {day:'2-digit',month:'short'})}</span>
                    <span class="font-bold text-[var(--color-primary)] font-mono">+${fCur(ins.amount)}</span>
                </div>
                `).join('')}
            </div>` : ''}
        </div>
        
        <div class="space-y-2 pt-2 border-t border-slate-100 dark:border-slate-700/60">
            <div class="flex gap-2">
                <button onclick="window.sendSmartTempoWA('${o.orderId}')" class="flex-1 bg-emerald-50 dark:bg-emerald-950/40 hover:bg-emerald-100 dark:hover:bg-emerald-900/60 text-emerald-600 dark:text-emerald-400 border border-emerald-300 dark:border-emerald-700 rounded-xl py-2 flex items-center justify-center gap-1.5 text-[10px] font-bold uppercase tracking-widest transition-all cursor-pointer shadow-xs active:scale-95" title="Kirim Tagihan Otomatis WhatsApp">
                    <i class="fa-brands fa-whatsapp text-sm"></i> Tagih WA
                </button>
                <button onclick="previewTempoReceipt('${o.orderId}')" class="flex-1 bg-amber-500 hover:bg-amber-600 text-white rounded-xl py-2 flex items-center justify-center gap-1.5 text-[10px] font-bold uppercase tracking-widest shadow-sm shadow-amber-500/20 transition-all active:scale-95" title="Cetak Struk Nota Tempo">
                    <i class="fa-solid fa-print"></i> Struk
                </button>
            </div>
            <div class="flex gap-2">
                <button onclick="payTempoInstallment('${o.orderId}')" class="flex-1 bg-white dark:bg-slate-700 border border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[rgba(var(--color-primary-rgb),0.08)] rounded-xl py-2 flex items-center justify-center gap-1.5 text-[10px] font-bold uppercase tracking-widest transition-all active:scale-95">
                    <i class="fa-solid fa-money-bill-wave"></i> Cicil
                </button>
                <button onclick="markTempoPaid('${o.orderId}')" class="flex-1 primary-bg hover:opacity-90 text-white rounded-xl py-2 flex items-center justify-center gap-1.5 text-[10px] font-bold uppercase tracking-widest shadow-sm transition-all active:scale-95">
                    <i class="fa-solid fa-check-double"></i> Lunas
                </button>
            </div>
        </div>
    </div>`;
};

const renderTempoContent = () => {
    let totalPiutang = 0;
    let totalTerlambat = 0;
    let countLate = 0;
    let countDueSoon = 0;
    let countActive = 0;

    cachedPiutangOrders.forEach(o => {
        const calc = getTempoOrderCalculations(o);
        totalPiutang += calc.totalAkhir;
        if (calc.isLate) {
            totalTerlambat += calc.totalAkhir;
            countLate++;
        } else if (calc.isDueSoon) {
            countDueSoon++;
        } else {
            countActive++;
        }
    });

    let h = `
    <div class="max-w-full pb-12 fade-in-scale text-sm space-y-5">
        
        <!-- HEADER KARTU STATISTIK METRIK PIUTANG -->
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div class="bg-white dark:bg-slate-800 p-4 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm flex items-center gap-3.5">
                <div class="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 bg-rose-50 text-rose-600 dark:bg-rose-950/50 dark:text-rose-400">
                    <i class="fa-solid fa-hand-holding-dollar text-xl"></i>
                </div>
                <div class="min-w-0">
                    <p class="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Total Piutang Aktif</p>
                    <p class="text-base font-bold text-slate-900 dark:text-white font-mono mt-0.5">${fCur(totalPiutang)}</p>
                </div>
            </div>

            <div class="bg-white dark:bg-slate-800 p-4 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm flex items-center gap-3.5">
                <div class="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 bg-red-50 text-red-600 dark:bg-red-950/50 dark:text-red-400">
                    <i class="fa-solid fa-triangle-exclamation text-xl"></i>
                </div>
                <div class="min-w-0">
                    <p class="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Piutang Terlambat</p>
                    <p class="text-base font-bold text-rose-600 dark:text-rose-400 font-mono mt-0.5">${fCur(totalTerlambat)}</p>
                </div>
            </div>

            <div class="bg-white dark:bg-slate-800 p-4 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm flex items-center gap-3.5">
                <div class="w-11 h-11 rounded-xl flex items-center justify-center shrink-0" style="background: rgba(var(--color-primary-rgb),0.1); color: var(--color-primary)">
                    <i class="fa-solid fa-file-invoice-dollar text-xl"></i>
                </div>
                <div class="min-w-0">
                    <p class="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Total Nota Tempo</p>
                    <p class="text-base font-bold text-slate-900 dark:text-white font-mono mt-0.5">${cachedPiutangOrders.length} Nota</p>
                </div>
            </div>
        </div>

        <!-- SEARCH BAR & FILTER STATUS PILLS -->
        <div class="bg-white dark:bg-slate-800 p-4 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm space-y-3">
            <div class="relative">
                <i class="fa-solid fa-magnifying-glass absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-xs"></i>
                <input type="text" 
                    id="tempo-search-input"
                    value="${esc(tempoSearchQuery)}"
                    placeholder="Cari nama pelanggan, nomor WhatsApp, atau ID pesanan..." 
                    oninput="window.onTempoSearch(this.value)"
                    class="w-full pl-9 pr-4 py-2.5 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl text-xs font-medium text-slate-800 dark:text-slate-100 focus:outline-none focus:border-[var(--color-primary)] transition-all">
                ${tempoSearchQuery ? `
                <button onclick="window.onTempoSearch(''); el('tempo-search-input').value='';" class="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600">
                    <i class="fa-solid fa-circle-xmark text-sm"></i>
                </button>` : ''}
            </div>

            <div class="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar text-xs font-bold uppercase tracking-wider">
                <button onclick="window.setTempoFilter('all')" 
                    class="px-3.5 py-1.5 rounded-xl border transition-all shrink-0 ${activeTempoFilter === 'all' 
                        ? 'primary-bg text-white border-transparent shadow-xs' 
                        : 'bg-slate-50 dark:bg-slate-900 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:bg-slate-100'}">
                    Semua (${cachedPiutangOrders.length})
                </button>
                <button onclick="window.setTempoFilter('late')" 
                    class="px-3.5 py-1.5 rounded-xl border transition-all shrink-0 ${activeTempoFilter === 'late' 
                        ? 'bg-rose-600 text-white border-rose-600 shadow-xs' 
                        : 'bg-rose-50 dark:bg-rose-950/30 text-rose-600 dark:text-rose-400 border-rose-200 dark:border-rose-900/50 hover:bg-rose-100'}">
                    <i class="fa-solid fa-triangle-exclamation mr-1"></i> Terlambat (${countLate})
                </button>
                <button onclick="window.setTempoFilter('due_soon')" 
                    class="px-3.5 py-1.5 rounded-xl border transition-all shrink-0 ${activeTempoFilter === 'due_soon' 
                        ? 'bg-amber-500 text-white border-amber-500 shadow-xs' 
                        : 'bg-amber-50 dark:bg-amber-950/30 text-amber-600 dark:text-amber-400 border-amber-200 dark:border-amber-900/50 hover:bg-amber-100'}">
                    <i class="fa-solid fa-clock mr-1"></i> H-3 Jatuh Tempo (${countDueSoon})
                </button>
                <button onclick="window.setTempoFilter('active')" 
                    class="px-3.5 py-1.5 rounded-xl border transition-all shrink-0 ${activeTempoFilter === 'active' 
                        ? 'bg-emerald-600 text-white border-emerald-600 shadow-xs' 
                        : 'bg-emerald-50 dark:bg-emerald-950/30 text-emerald-600 dark:text-emerald-400 border-emerald-200 dark:border-emerald-900/50 hover:bg-emerald-100'}">
                    <i class="fa-solid fa-circle-check mr-1"></i> Berjalan (${countActive})
                </button>
            </div>
        </div>
    `;

    if (cachedPiutangOrders.length === 0) {
        h += `
        <div class="bg-white dark:bg-slate-800 p-10 text-center rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
            <div class="w-20 h-20 bg-[rgba(var(--color-primary-rgb),0.08)] dark:bg-[rgba(var(--color-primary-rgb),0.15)] text-[var(--color-primary)] rounded-full flex items-center justify-center mx-auto mb-4">
                <i class="fa-solid fa-check-double text-4xl"></i>
            </div>
            <h3 class="font-bold text-slate-800 dark:text-slate-100 text-base uppercase tracking-widest">Luar Biasa! Semua Tagihan Lunas</h3>
            <p class="text-slate-500 dark:text-slate-400 mt-1.5 text-xs font-medium">Tidak ada piutang tempo yang sedang aktif atau tertunda saat ini.</p>
        </div>`;
    } else {
        h += `<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4" id="tempo-cards-container"></div>`;
    }
    
    h += `</div>`;
    setH('admin-content', h);

    if (cachedPiutangOrders.length > 0) {
        renderTempoCardsOnly();
    }
};

window.rAdmPiutang = async () => {
    sLoad('Memuat data piutang...');
    cachedPiutangOrders = [];
    try {
        const snap = await db.collection("freshmart_orders")
            .where("payment.method", "==", "tempo")
            .where("payment.paymentStatus", "==", "hutang")
            .get();
        snap.forEach(doc => { 
            cachedPiutangOrders.push(doc.data()); 
        });
    } catch (e) {
        hLoad();
        showToast('Gagal memuat piutang: ' + e.message);
        return;
    }
    hLoad();

    // Urutkan default: yang paling terlambat ditaruh di paling atas
    cachedPiutangOrders.sort((a, b) => {
        let dueA = a.payment?.tempoDueDate || 0;
        let dueB = b.payment?.tempoDueDate || 0;
        return dueA - dueB;
    });

    renderTempoContent();
};

export default {
    rAdmPiutang: window.rAdmPiutang,
    sendSmartTempoWA: window.sendSmartTempoWA,
    getTempoOrderCalculations
};
