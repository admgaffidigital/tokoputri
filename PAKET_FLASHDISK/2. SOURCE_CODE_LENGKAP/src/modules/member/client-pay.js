/**
 * ============================================================
 * MODUL PEMBAYARAN MANDIRI ANGSURAN & TEMPO OLEH PELANGGAN
 * Memungkinkan member/pelanggan melihat tabel angsuran bulanan,
 * melakukan pembayaran mandiri langsung via Transfer Bank/QRIS Toko,
 * mengunggah bukti transfer, dan mengirim konfirmasi ke Admin CMS.
 * ============================================================
 */

import { db } from '../../config/firebase.js';
import { appData, currentMember, myOrders, gOrds } from '../../core/state.js';
import { el, show, hide, setH, esc, fCur, sLoad, hLoad, showToast, openModalAnim, closeModalAnim } from '../../core/utils.js';

let activePaymentOrder = null;
let currentPayChannel = 'bank'; // 'bank' | 'qris'
let currentProofDataUrl = null;
let currentProofFile = null;
let pendingConfirmationsCache = [];

/**
 * Salin nomor rekening ke clipboard
 */
export const copyAccountNumber = (accNumber) => {
    if (!accNumber) return;
    const cleanNum = String(accNumber).trim();
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(cleanNum).then(() => {
            showToast('Nomor rekening ' + cleanNum + ' berhasil disalin!', 'success');
        }).catch(() => {
            prompt('Salin nomor rekening:', cleanNum);
        });
    } else {
        prompt('Salin nomor rekening:', cleanNum);
    }
};

/**
 * Kompres gambar bukti transfer sebelum diunggah (WebP / JPEG 700px, 0.6)
 */
export const compressProofImage = (file, maxSizePx = 700, quality = 0.6) => {
    return new Promise((resolve) => {
        if (!file || !file.type.startsWith('image/')) return resolve(null);
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = (ev) => {
            const img = new Image();
            img.onload = () => {
                let { width, height } = img;
                if (width > maxSizePx || height > maxSizePx) {
                    if (width > height) {
                        height = Math.round((height * maxSizePx) / width);
                        width = maxSizePx;
                    } else {
                        width = Math.round((width * maxSizePx) / height);
                        height = maxSizePx;
                    }
                }
                const canvas = document.createElement('canvas');
                canvas.width = width;
                canvas.height = height;
                const ctx = canvas.getContext('2d');
                ctx.drawImage(img, 0, 0, width, height);
                const dataUrl = canvas.toDataURL('image/jpeg', quality);
                resolve(dataUrl);
            };
            img.onerror = () => resolve(ev.target.result);
            img.src = ev.target.result;
        };
        reader.onerror = () => resolve(null);
    });
};

/**
 * Pastikan kontainer modal pembayaran mandiri telah terinjeksi ke DOM
 */
export const ensureClientPaymentModal = () => {
    let m = el('modal-client-tempo-pay');
    if (!m) {
        const div = document.createElement('div');
        div.id = 'modal-client-tempo-pay';
        div.className = 'fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-0 sm:p-4 bg-slate-900/80 transition-opacity duration-300 opacity-0 pointer-events-none';
        div.onclick = (e) => {
            if (e.target === div) closeClientPaymentModal();
        };
        div.innerHTML = `
            <div id="modal-client-tempo-pay-box" class="bg-white dark:bg-slate-900 w-full sm:max-w-lg rounded-t-[2.25rem] sm:rounded-3xl max-h-[92dvh] sm:max-h-[88vh] flex flex-col shadow-2xl border border-slate-200/80 dark:border-slate-800 overflow-hidden transform translate-y-full sm:translate-y-6 transition-transform duration-300" onclick="event.stopPropagation()">
                <!-- Isi Modal dirender reaktif oleh openClientPaymentModal() -->
            </div>
        `;
        document.body.appendChild(div);
    }
};

/**
 * Cari daftar pesanan tempo/PayLater aktif milik member
 */
export const getMemberActiveTempoOrders = () => {
    const candidates = [];
    if (Array.isArray(myOrders) && myOrders.length) candidates.push(...myOrders);
    if (Array.isArray(gOrds) && gOrds.length) candidates.push(...gOrds);
    try {
        const rawO = localStorage.getItem('freshmart_my_orders');
        if (rawO) {
            const parsed = JSON.parse(rawO);
            if (Array.isArray(parsed)) candidates.push(...parsed);
        }
    } catch(e) {}

    const seen = new Set();
    const unique = candidates.filter(o => {
        if (!o || !o.orderId || seen.has(o.orderId)) return false;
        seen.add(o.orderId);
        return true;
    });

    const mPhone = (currentMember?.phone || currentMember?.id || '').toString().replace(/\D/g, '');

    return unique.filter(o => {
        const isTempo = !!(o.isTempo || o.payment?.isPaylater || o.payment?.subMethod === 'paylater' || o.payment?.method === 'tempo');
        if (!isTempo) return false;
        if (o.status === 'Batal' || o.payment?.paymentStatus === 'lunas') return false;
        const bal = parseFloat(o.payment?.tempoBalance);
        if (isNaN(bal) || bal <= 0) return false;

        if (mPhone) {
            const cPhone = (o.customer?.phone || o.customer?.wa || '').toString().replace(/\D/g, '');
            if (cPhone && !(cPhone === mPhone || cPhone.endsWith(mPhone) || mPhone.endsWith(cPhone))) {
                return false;
            }
        }
        return true;
    });
};

/**
 * Muat daftar konfirmasi pembayaran pending dari local / Firestore
 */
export const loadPendingConfirmations = async (orderId = null) => {
    try {
        let cached = [];
        try {
            const raw = localStorage.getItem('freshmart_pending_confirmations');
            if (raw) cached = JSON.parse(raw) || [];
        } catch(e) {}

        const cleanPhone = (currentMember?.phone || currentMember?.id || '').toString().replace(/\D/g, '');
        if (cleanPhone) {
            const snap = await db.collection("tempo_payment_confirmations")
                .where("customerPhone", "==", cleanPhone)
                .where("status", "==", "pending")
                .get();

            if (!snap.empty) {
                const live = [];
                snap.forEach(d => live.push({ id: d.id, ...d.data() }));
                cached = live;
                try {
                    localStorage.setItem('freshmart_pending_confirmations', JSON.stringify(cached));
                } catch(e) {}
            }
        }

        pendingConfirmationsCache = cached;
        if (orderId) {
            return cached.filter(c => c.orderId === orderId);
        }
        return cached;
    } catch(e) {
        console.warn('[ClientPay] Gagal muat konfirmasi pending:', e);
        return pendingConfirmationsCache;
    }
};

/**
 * Buka Modal Pembayaran Mandiri Angsuran / Tempo
 */
export const openClientPaymentModal = async (orderId = null, suggestedAmount = null) => {
    ensureClientPaymentModal();
    const modal = el('modal-client-tempo-pay');
    const box = el('modal-client-tempo-pay-box');
    if (!modal || !box) return;

    const orders = getMemberActiveTempoOrders();
    if (!orders.length) {
        showToast('Tidak ada tagihan atau angsuran tempo aktif yang perlu dibayar.', 'info');
        return;
    }

    // Pilih order default
    activePaymentOrder = (orderId ? orders.find(o => o.orderId === orderId) : null) || orders[0];
    currentPayChannel = 'bank';
    currentProofDataUrl = null;
    currentProofFile = null;

    await loadPendingConfirmations(activePaymentOrder.orderId);
    renderClientPaymentModalContent(orders, suggestedAmount);

    openModalAnim(modal, box);
};

/**
 * Tutup Modal Pembayaran Mandiri
 */
export const closeClientPaymentModal = () => {
    const modal = el('modal-client-tempo-pay');
    const box = el('modal-client-tempo-pay-box');
    if (!modal || !box) return;
    closeModalAnim(modal, box);
};

/**
 * Render Konten Modal Pembayaran Mandiri
 */
const renderClientPaymentModalContent = (orders, initialAmount = null) => {
    const box = el('modal-client-tempo-pay-box');
    if (!box) return;

    const o = activePaymentOrder;
    const isPl = !!(o.payment?.isPaylater || o.isPaylater || o.payment?.subMethod === 'paylater');
    const tempoBal = Math.max(0, parseFloat(o.payment?.tempoBalance) || 0);
    const schedule = (Array.isArray(o.payment?.paylaterSchedule) && o.payment.paylaterSchedule.length > 0)
        ? o.payment.paylaterSchedule
        : null;
    const installments = o.payment?.installments || [];
    const totalPaid = installments.reduce((sum, ins) => sum + (parseFloat(ins.amount) || 0), 0);

    const plMonths = parseInt(o.payment?.paylaterMonths) || (schedule ? schedule.length : (o.payment?.paylaterTenor === '2m' ? 2 : (o.payment?.paylaterTenor === '3m' ? 3 : 1)));
    const tenorName = isPl ? (o.payment?.paylaterTenor === '2m' ? '2 Bulan' : (o.payment?.paylaterTenor === '3m' ? '3 Bulan' : '30 Hari')) : 'Tempo Toko';

    let angsuranBulanIni = 0;
    let dueDateBulanIniStr = '-';
    let dueDateBulanIniTime = 0;
    let installmentNoBulanIni = 1;
    let isLateBulanIni = false;
    let sisaBulanBerikutnya = 0;
    const scheduleBreakdownList = [];

    if (schedule && schedule.length > 0) {
        let runningTarget = 0;
        let foundUnpaid = false;

        schedule.forEach((sc, idx) => {
            const mIdx = sc.installmentIndex || sc.installmentNo || sc.installmentNumber || sc.month || (idx + 1);
            const pPokok = parseFloat(sc.pokok || sc.principal) || 0;
            const pFee = parseFloat((sc.adminFee || 0) + (sc.serviceFee || 0)) || 0;
            const mTotal = parseFloat(sc.total || sc.totalMonthly || sc.totalInstallment) || (pPokok + pFee);

            const targetBefore = runningTarget;
            runningTarget += mTotal;
            const targetAfter = runningTarget;

            const dueTime = sc.dueDate || 0;
            const dueStr = sc.dueDateFormatted || sc.dueDateStr || (dueTime ? new Date(dueTime).toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' }) : '-');

            let statusType = 'upcoming'; // 'paid' | 'current' | 'upcoming'
            let sisaThisTermin = 0;

            if (totalPaid >= targetAfter) {
                statusType = 'paid';
            } else if (!foundUnpaid) {
                foundUnpaid = true;
                statusType = 'current';
                installmentNoBulanIni = mIdx;
                dueDateBulanIniStr = dueStr;
                dueDateBulanIniTime = dueTime;
                isLateBulanIni = dueTime && (Date.now() > dueTime);
                sisaThisTermin = Math.max(0, targetAfter - totalPaid);
                angsuranBulanIni = Math.min(sisaThisTermin, mTotal);
            } else {
                statusType = 'upcoming';
                sisaBulanBerikutnya += mTotal;
            }

            scheduleBreakdownList.push({
                monthIndex: mIdx,
                dueStr,
                dueTime,
                pokok: pPokok,
                fee: pFee,
                total: mTotal,
                statusType
            });
        });

        if (!foundUnpaid) {
            angsuranBulanIni = tempoBal;
        }
    } else {
        // Single tempo atau tanpa array jadwal
        angsuranBulanIni = tempoBal;
        dueDateBulanIniTime = o.payment?.tempoDueDate || 0;
        dueDateBulanIniStr = dueDateBulanIniTime ? new Date(dueDateBulanIniTime).toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' }) : '-';
        isLateBulanIni = dueDateBulanIniTime && (Date.now() > dueDateBulanIniTime);
    }

    const defaultPayAmount = initialAmount && initialAmount > 0 
        ? Math.min(tempoBal, initialAmount) 
        : (angsuranBulanIni > 0 && angsuranBulanIni < tempoBal ? angsuranBulanIni : tempoBal);

    const pendingForThis = pendingConfirmationsCache.filter(c => c.orderId === o.orderId && c.status === 'pending');
    const pendingSum = pendingForThis.reduce((s, c) => s + (parseFloat(c.amount) || 0), 0);

    const rawBanks = Array.isArray(appData.banks) ? appData.banks : [];
    let banks = rawBanks.filter(b => b && (b.bankName || b.bank || b.bankAccount || b.number));
    if (banks.length === 0 && appData.store?.bankName && (appData.store?.bankAccount || appData.store?.bankNumber)) {
        banks = [{
            bankName: appData.store.bankName,
            bankAccount: appData.store.bankAccount || appData.store.bankNumber,
            bankOwner: appData.store.bankOwner || appData.store.name || 'Toko Putri'
        }];
    }
    if (banks.length === 0) {
        banks = [
            { bankName: 'BCA', bankAccount: '1234567890', bankOwner: appData.store?.name || 'Toko Putri' }
        ];
    }
    const qrisUrl = appData.payment?.qrisUrl || '';

    box.innerHTML = `
        <!-- DRAG PULL MOBILE -->
        <div class="pull-indicator sm:hidden"></div>

        <!-- HEADER -->
        <div class="px-5 sm:px-6 pt-3.5 sm:pt-5 pb-4 border-b border-slate-100 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-900/60 flex items-center justify-between shrink-0">
            <div class="flex items-center gap-3">
                <div class="w-10 h-10 rounded-2xl flex items-center justify-center text-xs font-black text-white shrink-0 shadow-xs" style="background: var(--color-primary);">
                    <i class="fa-solid fa-file-invoice-dollar text-sm"></i>
                </div>
                <div>
                    <h3 class="font-black text-sm sm:text-base text-slate-800 dark:text-white">Pembayaran Tagihan Cicilan</h3>
                    <p class="text-[10px] text-slate-400 font-semibold">Konfirmasi Langsung &amp; Real-Time ke Toko Putri</p>
                </div>
            </div>
            <button type="button" onclick="window.closeClientPaymentModal()" class="w-8 h-8 rounded-full bg-slate-100 hover:bg-rose-100 hover:text-rose-500 dark:bg-slate-800 text-slate-500 flex items-center justify-center transition-all cursor-pointer active:scale-95" title="Tutup">
                <i class="fa-solid fa-xmark text-xs"></i>
            </button>
        </div>

        <!-- BODY SCROLLABLE DENGAN PADDING LEGA ANTI-TERTUTUP FOOTER -->
        <div class="p-5 sm:p-6 pb-24 sm:pb-28 overflow-y-auto flex-1 space-y-6 text-xs custom-scrollbar">
            <!-- PENDING BANNER JIKA ADA PENGAJUAN -->
            ${pendingSum > 0 ? `
            <div class="p-4 sm:p-5 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-300 dark:border-amber-800/60 flex items-start sm:items-center gap-3 text-amber-800 dark:text-amber-200 shadow-2xs">
                <i class="fa-solid fa-hourglass-half text-amber-500 text-base animate-pulse shrink-0 mt-0.5 sm:mt-0"></i>
                <div class="min-w-0 flex-1">
                    <p class="font-bold text-xs sm:text-sm">Ada Pengajuan Pembayaran Sedang Diverifikasi: <b class="font-mono text-amber-900 dark:text-amber-100">${fCur(pendingSum)}</b></p>
                    <p class="text-[11px] text-amber-700/80 dark:text-amber-300/80 mt-1 leading-relaxed">Admin toko sedang memeriksa mutasi rekening Anda. Limit kredit belanja Anda akan otomatis pulih segera setelah diverifikasi.</p>
                </div>
            </div>
            ` : ''}

            <!-- PILIH NOTA PESANAN (JIKA LEBIH DARI 1) -->
            ${orders.length > 1 ? `
            <div class="space-y-2">
                <label class="block text-[10px] font-black uppercase tracking-wider text-slate-500 dark:text-slate-400">Pilih Nota Tagihan</label>
                <select id="client-pay-order-select" onchange="window.switchClientPaymentOrder(this.value)" class="admin-input bg-slate-50 dark:bg-slate-900 rounded-2xl font-bold cursor-pointer h-12 text-xs">
                    ${orders.map(ord => `
                        <option value="${ord.orderId}" ${ord.orderId === o.orderId ? 'selected' : ''}>
                            Nota #${ord.orderId} — Sisa: ${fCur(ord.payment?.tempoBalance || 0)} (${ord.payment?.isPaylater ? 'PayLater' : 'Tempo'})
                        </option>
                    `).join('')}
                </select>
            </div>
            ` : ''}

            <!-- KARTU MODEL ANGSURAN: BULAN INI VS BULAN BERIKUTNYA -->
            <div class="space-y-3">
                <div class="p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-slate-50 to-slate-100/60 dark:from-slate-800/60 dark:to-slate-900/60 border border-slate-200/80 dark:border-slate-800 space-y-4 shadow-2xs">
                    <div class="flex items-center justify-between text-xs">
                        <div class="flex items-center gap-2">
                            <span class="font-mono font-bold text-slate-800 dark:text-slate-200 text-sm">Nota #${esc(o.orderId)}</span>
                            <span class="px-2 py-0.5 rounded-full text-[9px] font-black uppercase tracking-wider bg-[rgba(var(--color-primary-rgb),0.12)] text-[var(--color-primary)] font-bold">
                                ${esc(tenorName)}
                            </span>
                        </div>
                        <span class="text-[11px] text-slate-500 dark:text-slate-400 font-medium">Total: ${fCur(o.payment?.grandTotal || o.total || tempoBal)}</span>
                    </div>

                    ${scheduleBreakdownList.length > 1 ? `
                    <!-- HIGHLIGHT UTAMA: TAGIHAN BULAN INI -->
                    <div class="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-800 text-emerald-900 dark:text-emerald-100 space-y-1.5 shadow-2xs">
                        <div class="flex items-center justify-between flex-wrap gap-1">
                            <span class="text-[10px] font-black uppercase tracking-wider text-emerald-800 dark:text-emerald-300 flex items-center gap-1.5">
                                <i class="fa-solid fa-calendar-check text-emerald-600"></i> Angsuran Bulan Ini (Termin Ke-${installmentNoBulanIni} dari ${scheduleBreakdownList.length})
                            </span>
                            <span class="px-2 py-0.5 rounded-md text-[9.5px] font-black font-mono ${isLateBulanIni ? 'bg-rose-100 text-rose-700 border border-rose-300' : 'bg-emerald-200/70 dark:bg-emerald-800/70 text-emerald-900 dark:text-emerald-100'}">
                                ${isLateBulanIni ? 'Lewat Jatuh Tempo' : 'Jatuh Tempo: ' + dueDateBulanIniStr}
                            </span>
                        </div>
                        <div class="flex items-baseline justify-between pt-1">
                            <span class="text-xs font-bold text-emerald-700 dark:text-emerald-300">Wajib Dibayar:</span>
                            <span class="font-mono font-black text-2xl text-emerald-900 dark:text-white tracking-tight">${fCur(angsuranBulanIni)}</span>
                        </div>
                    </div>

                    <!-- TABEL MINI RINCIAN JADWAL TIAP BULAN -->
                    <div class="space-y-1.5 pt-1">
                        <p class="text-[10px] font-black uppercase tracking-wider text-slate-400 flex items-center justify-between">
                            <span>Jadwal Angsuran Per Bulan</span>
                            <span class="text-[9px] font-semibold text-slate-500">Transparan &amp; Jelas</span>
                        </p>
                        <div class="rounded-xl border border-slate-200/80 dark:border-slate-700/80 overflow-hidden bg-white dark:bg-slate-900/60 text-xs">
                            <div class="divide-y divide-slate-100 dark:divide-slate-800">
                                ${scheduleBreakdownList.map(item => `
                                    <div class="p-2.5 sm:p-3 flex items-center justify-between gap-2 ${item.statusType === 'paid' ? 'bg-slate-50/50 dark:bg-slate-800/20 opacity-60' : (item.statusType === 'current' ? 'bg-emerald-50/30 dark:bg-emerald-950/20 font-bold' : '')}">
                                        <div class="min-w-0">
                                            <p class="font-bold text-slate-800 dark:text-slate-200 text-xs">Bulan Ke-${item.monthIndex}</p>
                                            <p class="text-[10px] text-slate-400 font-mono mt-0.5">Jatuh Tempo: ${item.dueStr}</p>
                                        </div>
                                        <div class="text-right shrink-0">
                                            <p class="font-mono font-black text-xs sm:text-sm text-slate-900 dark:text-white">${fCur(item.total)}</p>
                                            <div class="mt-0.5">
                                                ${item.statusType === 'paid' ? `
                                                    <span class="px-2 py-0.5 rounded text-[8.5px] font-black uppercase bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300">✓ Lunas</span>
                                                ` : (item.statusType === 'current' ? `
                                                    <span class="px-2 py-0.5 rounded text-[8.5px] font-black uppercase bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300">★ Bayar Bulan Ini</span>
                                                ` : `
                                                    <span class="px-2 py-0.5 rounded text-[8.5px] font-medium uppercase bg-slate-100 text-slate-500 dark:bg-slate-800 dark:text-slate-400">Bulan Depan</span>
                                                `)}
                                            </div>
                                        </div>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    </div>

                    <!-- RINGKASAN SISA KESELURUHAN -->
                    <div class="pt-2 border-t border-slate-200/60 dark:border-slate-700/60 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                        <span>Total Sisa Seluruh Tenor (Pelunasan Penuh):</span>
                        <span class="font-mono font-black text-slate-800 dark:text-slate-200 text-sm">${fCur(tempoBal)}</span>
                    </div>
                    ` : `
                    <!-- SINGLE TEMPO / 1 BULAN -->
                    <div class="pt-2.5 border-t border-slate-200/60 dark:border-slate-700/60 space-y-2">
                        <div class="flex items-center justify-between text-xs">
                            <span class="text-slate-500 dark:text-slate-400 font-bold">Tanggal Jatuh Tempo:</span>
                            <span class="font-mono font-bold ${isLateBulanIni ? 'text-rose-600' : 'text-slate-800 dark:text-slate-200'}">${dueDateBulanIniStr}</span>
                        </div>
                        <div class="flex items-center justify-between text-xs pt-1">
                            <span class="text-slate-500 dark:text-slate-400 font-bold">Sisa Tagihan Wajib Bayar:</span>
                            <span class="text-base sm:text-lg font-black font-mono text-rose-600 dark:text-rose-400">${fCur(tempoBal)}</span>
                        </div>
                    </div>
                    `}
                </div>
            </div>

            <!-- PILIHAN NOMINAL PEMBAYARAN -->
            <div class="space-y-3">
                <div class="flex items-center justify-between">
                    <label class="block text-[10px] font-black uppercase tracking-wider text-slate-500 dark:text-slate-400">Pilih Nominal Pembayaran *</label>
                    <span class="text-[10px] text-slate-400 italic">Bebas cicil atau lunas</span>
                </div>
                
                <!-- Quick Chips -->
                <div class="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                    ${scheduleBreakdownList.length > 1 && angsuranBulanIni > 0 && angsuranBulanIni < tempoBal ? `
                    <button type="button" onclick="window.setClientPayAmount(${angsuranBulanIni}, 'angsuran')" class="p-3.5 rounded-2xl border-2 border-[var(--color-primary)] bg-[rgba(var(--color-primary-rgb),0.08)] dark:bg-[rgba(var(--color-primary-rgb),0.15)] text-[var(--color-primary)] font-bold text-xs text-left active:scale-95 transition-all shadow-xs relative overflow-hidden group">
                        <div class="absolute top-1.5 right-2 px-1.5 py-0.5 rounded text-[8px] font-black uppercase tracking-wider bg-[var(--color-primary)] text-white">Rekomendasi</div>
                        <span class="block text-[9px] uppercase tracking-wider opacity-90 font-bold">Angsuran Bulan Ini</span>
                        <span class="font-mono font-black text-sm sm:text-base mt-1 block">${fCur(angsuranBulanIni)}</span>
                        <span class="block text-[9px] opacity-75 mt-0.5 font-normal">Termin Ke-${installmentNoBulanIni}</span>
                    </button>
                    ` : ''}
                    <button type="button" onclick="window.setClientPayAmount(${tempoBal}, 'pelunasan')" class="p-3.5 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-750 text-slate-700 dark:text-slate-200 font-bold text-xs text-left active:scale-95 transition-all shadow-2xs">
                        <span class="block text-[9px] uppercase tracking-wider opacity-75 text-slate-400">Pelunasan Penuh</span>
                        <span class="font-mono font-black text-sm mt-0.5 block">${fCur(tempoBal)}</span>
                        <span class="block text-[9px] opacity-75 mt-0.5 font-normal">Lunas Seluruhnya</span>
                    </button>
                    <button type="button" onclick="window.focusCustomClientPay()" class="p-3.5 rounded-2xl border border-dashed border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/40 text-slate-600 dark:text-slate-300 font-bold text-xs text-left active:scale-95 transition-all col-span-2 sm:col-span-1 shadow-2xs">
                        <span class="block text-[9px] uppercase tracking-wider opacity-75 text-slate-400">Nominal Lain</span>
                        <span class="text-xs mt-0.5 block font-bold">Titipan Bebas</span>
                        <span class="block text-[9px] opacity-75 mt-0.5 font-normal">Ketik Nominal</span>
                    </button>
                </div>

                <!-- Input Nominal Rupiah -->
                <div class="space-y-1.5">
                    <div class="relative">
                        <span class="absolute left-4 top-1/2 -translate-y-1/2 font-black text-base text-slate-400">Rp</span>
                        <input type="number" id="client-pay-amount-input" min="1000" max="${tempoBal}" value="${defaultPayAmount}" class="admin-input pl-12 h-13 text-base sm:text-lg font-black font-mono rounded-2xl focus:border-[var(--color-primary)]" placeholder="0">
                    </div>
                    <p class="text-[10px] text-slate-400 leading-relaxed">
                        Default terisi nominal <b>Angsuran Bulan Ini (${fCur(defaultPayAmount)})</b>. Anda juga dapat memilih Pelunasan Penuh di atas jika ingin melunasi seluruhnya sekaligus.
                    </p>
                </div>
            </div>

            <!-- PILIH SALURAN PEMBAYARAN TOKO (BANK VS QRIS) -->
            <div class="space-y-3.5 pt-3 border-t border-slate-200/60 dark:border-slate-700/60">
                <label class="block text-[10px] font-black uppercase tracking-wider text-slate-500 dark:text-slate-400">Saluran Pembayaran Resmi Toko Putri *</label>
                
                <div class="grid grid-cols-2 gap-2 p-1.5 rounded-2xl bg-slate-100 dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700">
                    <button type="button" onclick="window.switchClientPayChannel('bank')" id="tab-btn-client-bank" class="py-2.5 rounded-xl text-xs font-black transition-all ${currentPayChannel === 'bank' ? 'bg-white dark:bg-slate-900 shadow-xs text-slate-900 dark:text-white' : 'text-slate-500 hover:text-slate-800'}">
                        <i class="fa-solid fa-building-columns mr-1.5"></i> Transfer Bank
                    </button>
                    <button type="button" onclick="window.switchClientPayChannel('qris')" id="tab-btn-client-qris" class="py-2.5 rounded-xl text-xs font-black transition-all ${currentPayChannel === 'qris' ? 'bg-white dark:bg-slate-900 shadow-xs text-slate-900 dark:text-white' : 'text-slate-500 hover:text-slate-800'}">
                        <i class="fa-solid fa-qrcode mr-1.5"></i> QRIS Toko
                    </button>
                </div>

                <!-- CONTAINER CHANNEL BANK -->
                <div id="client-pay-channel-bank" class="${currentPayChannel === 'bank' ? 'block' : 'hidden'} space-y-3">
                    <p class="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed">Silakan transfer nominal di atas ke salah satu rekening resmi Toko Putri:</p>
                    <div class="space-y-3">
                        ${banks.map(b => {
                            const bName = b.bankName || b.bank || 'BANK';
                            const bAcc = b.bankAccount || b.number || '-';
                            const bOwner = b.bankOwner || b.name || appData.store?.name || 'Toko Putri';
                            return `
                            <div class="p-4 sm:p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700 flex flex-col sm:flex-row sm:items-center justify-between gap-3.5 shadow-2xs">
                                <div>
                                    <div class="flex items-center gap-2">
                                        <span class="px-2.5 py-1 rounded-lg text-[10px] font-black uppercase bg-blue-100 dark:bg-blue-900/60 text-blue-700 dark:text-blue-300 font-mono">${esc(bName)}</span>
                                        <span class="text-xs font-bold text-slate-800 dark:text-white">${esc(bOwner)}</span>
                                    </div>
                                    <p class="font-mono text-base sm:text-lg font-black text-slate-900 dark:text-slate-100 tracking-wider mt-1.5">${esc(bAcc)}</p>
                                </div>
                                <button type="button" onclick="window.copyAccountNumber('${esc(bAcc)}')" class="h-11 px-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 hover:bg-slate-100 text-slate-700 dark:text-slate-200 text-xs font-bold flex items-center justify-center gap-2 active:scale-95 transition-all shadow-2xs shrink-0 cursor-pointer">
                                    <i class="fa-regular fa-copy text-xs"></i> Salin Rekening
                                </button>
                            </div>`;
                        }).join('')}
                    </div>
                </div>

                <!-- CONTAINER CHANNEL QRIS -->
                <div id="client-pay-channel-qris" class="${currentPayChannel === 'qris' ? 'block' : 'hidden'} space-y-3.5 text-center">
                    <p class="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed">Scan QRIS toko di bawah menggunakan BCA Mobile, Livin, GoPay, OVO, DANA, atau ShopeePay:</p>
                    ${qrisUrl ? `
                        <div class="inline-block p-4 sm:p-5 rounded-3xl bg-white border border-slate-200 shadow-sm mx-auto">
                            <img src="${esc(qrisUrl)}" alt="QRIS Resmi Toko Putri" class="w-56 h-56 sm:w-64 sm:h-64 object-contain mx-auto rounded-2xl">
                        </div>
                        <div>
                            <a href="${esc(qrisUrl)}" target="_blank" download="QRIS_Toko_Putri.jpg" class="inline-flex items-center gap-1.5 text-xs font-bold text-[var(--color-primary)] hover:underline py-1.5 px-3 rounded-xl bg-[rgba(var(--color-primary-rgb),0.06)]">
                                <i class="fa-solid fa-arrow-down-to-bracket text-sm"></i> Unduh / Buka Gambar QRIS Penuh
                            </a>
                        </div>
                    ` : `
                        <div class="p-8 rounded-2xl border border-dashed border-slate-200 dark:border-slate-700 text-slate-400 text-center space-y-1.5">
                            <i class="fa-solid fa-qrcode text-3xl text-slate-300"></i>
                            <p class="text-xs">QRIS belum diatur oleh toko. Silakan gunakan metode Transfer Bank di atas.</p>
                        </div>
                    `}
                </div>
            </div>

            <!-- UNGGAH BUKTI TRANSFER -->
            <div class="space-y-3.5 pt-3 border-t border-slate-200/60 dark:border-slate-700/60">
                <div>
                    <label class="block text-[10px] font-black uppercase tracking-wider text-slate-500 dark:text-slate-400">Unggah Bukti Transfer / Resi *</label>
                    <p class="text-[11px] text-slate-400 mt-0.5">Lampirkan tangkapan layar (screenshot) atau foto struk bukti mutasi</p>
                </div>
                
                <input type="file" id="client-pay-proof-input" accept="image/*" class="hidden" onchange="window.handleClientProofFileChange(event)">
                
                <div id="client-pay-proof-dropzone" onclick="document.getElementById('client-pay-proof-input').click()" class="p-6 sm:p-8 rounded-2xl border-2 border-dashed border-slate-300 dark:border-slate-700 hover:border-[var(--color-primary)] transition-all cursor-pointer text-center bg-slate-50/60 dark:bg-slate-800/40 group">
                    <div id="client-pay-proof-placeholder">
                        <div class="w-13 h-13 rounded-2xl bg-[rgba(var(--color-primary-rgb),0.1)] text-[var(--color-primary)] flex items-center justify-center mx-auto mb-3 group-hover:scale-105 transition-transform">
                            <i class="fa-solid fa-camera text-2xl"></i>
                        </div>
                        <p class="text-xs sm:text-sm font-bold text-slate-700 dark:text-slate-200">Klik untuk Ambil Foto / Pilih Bukti Transfer</p>
                        <p class="text-[11px] text-slate-400 mt-1">Format JPG, PNG atau WebP (Otomatis dikompresi ringan)</p>
                    </div>

                    <div id="client-pay-proof-preview-wrap" class="hidden">
                        <img id="client-pay-proof-img" src="" alt="Preview Bukti" class="max-h-60 sm:max-h-72 mx-auto rounded-2xl border border-slate-200 dark:border-slate-700 object-contain shadow-sm">
                        <p class="text-xs font-bold text-[var(--color-primary)] mt-3 flex items-center justify-center gap-1.5">
                            <i class="fa-solid fa-circle-check"></i> Foto siap dikirim (Klik untuk ganti)
                        </p>
                    </div>
                </div>

                <!-- Input Catatan Pengirim (Opsional) -->
                <div class="space-y-1.5">
                    <label class="block text-[10px] font-bold text-slate-400 uppercase tracking-wider">Catatan Tambahan (Opsional)</label>
                    <input type="text" id="client-pay-notes-input" placeholder="Contoh: Transfer dari rekening an. Putri / No. Referensi 987654" class="admin-input rounded-2xl text-xs h-12 bg-slate-50 dark:bg-slate-900 focus:border-[var(--color-primary)]">
                </div>
            </div>
        </div>

        <!-- STICKY ACTION FOOTER (LEGA, SOLID & DOCKING AMAN ANTI-TERTUTUP) -->
        <div class="p-4 sm:p-5 border-t border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 shrink-0 flex items-center justify-end gap-3 shadow-[0_-4px_20px_rgba(0,0,0,0.06)] dark:shadow-[0_-4px_20px_rgba(0,0,0,0.35)]" style="padding-bottom: max(1.25rem, env(safe-area-inset-bottom))">
            <button type="button" onclick="window.closeClientPaymentModal()" class="h-12 px-5 rounded-2xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 font-bold text-xs hover:bg-slate-100 dark:hover:bg-slate-800 transition-all cursor-pointer active:scale-95">
                Batal
            </button>
            <button type="button" id="client-pay-submit-btn" onclick="window.submitClientPaymentConfirmation()" class="h-12 px-6 rounded-2xl text-white font-bold text-xs shadow-glow transition-all active:scale-95 cursor-pointer flex items-center gap-2" style="background: var(--color-primary); box-shadow: 0 4px 14px rgba(var(--color-primary-rgb), 0.35);">
                <i class="fa-solid fa-paper-plane text-xs"></i>
                <span>Kirim Konfirmasi Pembayaran</span>
            </button>
        </div>
    `;
};

/**
 * Ganti order yang dibayar dari dropdown
 */
export const switchClientPaymentOrder = (orderId) => {
    const orders = getMemberActiveTempoOrders();
    const found = orders.find(o => o.orderId === orderId);
    if (found) {
        activePaymentOrder = found;
        renderClientPaymentModalContent(orders);
    }
};

/**
 * Ganti channel bayar (bank vs qris)
 */
export const switchClientPayChannel = (ch) => {
    currentPayChannel = ch;
    const bBank = el('tab-btn-client-bank');
    const bQris = el('tab-btn-client-qris');
    const cBank = el('client-pay-channel-bank');
    const cQris = el('client-pay-channel-qris');

    if (ch === 'bank') {
        if (bBank) bBank.className = 'py-2 rounded-xl text-xs font-black transition-all bg-white dark:bg-slate-900 shadow-xs text-slate-900 dark:text-white';
        if (bQris) bQris.className = 'py-2 rounded-xl text-xs font-black transition-all text-slate-500 hover:text-slate-800';
        if (cBank) show(cBank);
        if (cQris) hide(cQris);
    } else {
        if (bQris) bQris.className = 'py-2 rounded-xl text-xs font-black transition-all bg-white dark:bg-slate-900 shadow-xs text-slate-900 dark:text-white';
        if (bBank) bBank.className = 'py-2 rounded-xl text-xs font-black transition-all text-slate-500 hover:text-slate-800';
        if (cQris) show(cQris);
        if (cBank) hide(cBank);
    }
};

/**
 * Set nominal cepat via chips
 */
export const setClientPayAmount = (amt, type = 'angsuran') => {
    const inp = el('client-pay-amount-input');
    if (inp) {
        inp.value = amt;
        inp.focus();
    }
};

export const focusCustomClientPay = () => {
    const inp = el('client-pay-amount-input');
    if (inp) {
        inp.focus();
        inp.select();
    }
};

/**
 * Handler unggah file bukti transfer
 */
export const handleClientProofFileChange = async (event) => {
    const file = event.target.files && event.target.files[0];
    if (!file) return;

    sLoad('Mengompresi foto bukti transfer...');
    try {
        currentProofFile = file;
        const compressed = await compressProofImage(file);
        currentProofDataUrl = compressed;

        const pWrap = el('client-pay-proof-preview-wrap');
        const pImg = el('client-pay-proof-img');
        const pPlc = el('client-pay-proof-placeholder');

        if (pImg && compressed) pImg.src = compressed;
        if (pWrap) show(pWrap);
        if (pPlc) hide(pPlc);
    } catch(e) {
        console.warn('Gagal memproses gambar:', e);
        showToast('Gagal memproses foto bukti transfer!', 'error');
    } finally {
        hLoad();
    }
};

/**
 * Kirim konfirmasi pembayaran ke Firestore
 */
export const submitClientPaymentConfirmation = async () => {
    if (!activePaymentOrder) {
        return showToast('Pilih nota pesanan yang ingin dibayar!', 'error');
    }

    const amtInp = el('client-pay-amount-input');
    const amount = parseFloat(amtInp?.value) || 0;
    const tempoBal = Math.max(0, parseFloat(activePaymentOrder.payment?.tempoBalance) || 0);

    if (amount <= 0) {
        return showToast('Masukkan nominal pembayaran yang valid!', 'error');
    }
    if (amount > (tempoBal + 100)) {
        return showToast('Nominal pembayaran melebihi sisa tagihan (' + fCur(tempoBal) + ')!', 'error');
    }
    if (!currentProofDataUrl) {
        return showToast('Wajib melampirkan foto / screenshot bukti transfer!', 'error');
    }

    const btn = el('client-pay-submit-btn');
    if (btn) {
        btn.disabled = true;
        btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin mr-1"></i> Mengirim...';
    }
    sLoad('Mengirim konfirmasi pembayaran ke toko...');

    try {
        let finalProofUrl = currentProofDataUrl;

        // Coba upload ke GDrive jika GAS tersedia
        if (currentProofFile && typeof window.uploadBuktiToGDrive === 'function') {
            try {
                const gUrl = await window.uploadBuktiToGDrive(currentProofFile, activePaymentOrder.orderId);
                if (gUrl) finalProofUrl = gUrl;
            } catch(eGas) {
                console.warn('[ClientPay] GDrive upload fallback to compressed image:', eGas);
            }
        }

        const cleanPhone = (currentMember?.phone || currentMember?.id || activePaymentOrder.customer?.phone || activePaymentOrder.customer?.wa || '').toString().replace(/\D/g, '');
        const normPhone = cleanPhone.startsWith('0') ? '62' + cleanPhone.substring(1) : cleanPhone;
        const custName = currentMember?.name || activePaymentOrder.customer?.name || 'Pelanggan';

        const confirmId = 'CONF-' + Date.now().toString(36).toUpperCase() + '-' + Math.random().toString(36).substring(2, 6).toUpperCase();
        const selectedBank = appData.banks && appData.banks[0] ? appData.banks[0].bankName : 'Transfer Bank';
        const notes = (el('client-pay-notes-input')?.value || '').trim();

        const payload = {
            confirmId,
            orderId: activePaymentOrder.orderId,
            customerPhone: normPhone,
            customerName: custName,
            amount: amount,
            channel: currentPayChannel,
            bankName: currentPayChannel === 'bank' ? selectedBank : 'QRIS Toko',
            buktiUrl: finalProofUrl,
            notes: notes,
            createdAt: Date.now(),
            status: 'pending'
        };

        // Simpan ke Firestore koleksi root tempo_payment_confirmations
        await db.collection("tempo_payment_confirmations").doc(confirmId).set(payload);

        // Catat ke localStorage cache
        let cached = [];
        try {
            const raw = localStorage.getItem('freshmart_pending_confirmations');
            if (raw) cached = JSON.parse(raw) || [];
        } catch(e) {}
        cached.unshift(payload);
        try {
            localStorage.setItem('freshmart_pending_confirmations', JSON.stringify(cached));
        } catch(e) {}

        hLoad();
        closeClientPaymentModal();

        // Tampilkan konfirmasi ramah & dialog apresiasi
        if (typeof window.showToast === 'function') {
            window.showToast('Bukti transfer ' + fCur(amount) + ' berhasil dikirim ke Admin Toko Putri!', 'success');
        }

        // Refresh kartu member digital jika sedang terbuka
        if (typeof window.rMemberModalBody === 'function') {
            window.rMemberModalBody();
        }

        // Tampilkan alert sukses yang melegakan
        setTimeout(() => {
            alert('Alhamdulillah! Konfirmasi pembayaran sebesar ' + fCur(amount) + ' untuk nota #' + activePaymentOrder.orderId + ' telah berhasil dikirim ke Admin Toko Putri.\n\nAdmin akan memeriksa mutasi rekening dan menyetujui pembayaran Anda. Limit belanja PayLater Anda akan otomatis pulih segera setelah disetujui.');
        }, 300);

    } catch(err) {
        console.error('[ClientPay] Gagal kirim konfirmasi:', err);
        hLoad();
        if (btn) {
            btn.disabled = false;
            btn.innerHTML = '<i class="fa-solid fa-paper-plane mr-1"></i> Kirim Konfirmasi Pembayaran';
        }
        showToast('Gagal mengirim konfirmasi: ' + (err.message || 'Periksa koneksi internet'), 'error');
    }
};

/**
 * Render Tabel Rencana Jadwal Angsuran & Tagihan Bulanan (untuk disematkan di Kartu Member)
 */
export const renderClientInstallmentSchedule = (o, pendingConfirmations = []) => {
    if (!o) return '';
    const isPl = !!(o.payment?.isPaylater || o.isPaylater || o.payment?.subMethod === 'paylater');
    const schedule = (Array.isArray(o.payment?.paylaterSchedule) && o.payment.paylaterSchedule.length > 0)
        ? o.payment.paylaterSchedule
        : null;

    const tempoBal = Math.max(0, parseFloat(o.payment?.tempoBalance) || 0);
    const grandTotalAwal = parseFloat(o.payment?.grandTotal || o.total) || tempoBal;
    const installments = o.payment?.installments || [];
    const totalPaid = installments.reduce((sum, ins) => sum + (parseFloat(ins.amount) || 0), 0);

    const pendingForThis = (pendingConfirmations || []).filter(c => c.orderId === o.orderId && c.status === 'pending');
    const pendingSum = pendingForThis.reduce((s, c) => s + (parseFloat(c.amount) || 0), 0);

    const tenorName = isPl 
        ? (o.payment?.paylaterTenor === '2m' ? '2 Bulan (2x Cicilan)' : (o.payment?.paylaterTenor === '3m' ? '3 Bulan (3x Cicilan)' : '30 Hari (1x Bayar)'))
        : 'Tempo Pembayaran Toko';

    if (schedule && schedule.length > 0) {
        let runningTarget = 0;
        let foundUnpaid = false;

        const rowsHtml = schedule.map((s, idx) => {
            const mIdx = s.installmentIndex || s.installmentNo || s.installmentNumber || s.month || (idx + 1);
            const pPokok = parseFloat(s.pokok || s.principal) || 0;
            const pFee = parseFloat((s.adminFee || 0) + (s.serviceFee || 0)) || 0;
            const mTotal = parseFloat(s.total || s.totalMonthly || s.totalInstallment) || (pPokok + pFee);

            const targetBefore = runningTarget;
            runningTarget += mTotal;
            const targetAfter = runningTarget;

            let statusLabel = '';
            let statusBadgeCls = '';
            let isPaid = false;

            if (totalPaid >= targetAfter) {
                statusLabel = '✓ LUNAS';
                statusBadgeCls = 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-400 border border-emerald-300 dark:border-emerald-700';
                isPaid = true;
            } else if (pendingSum > 0) {
                statusLabel = '⏳ SEDANG DIVERIFIKASI';
                statusBadgeCls = 'bg-amber-100 text-amber-700 dark:bg-amber-950/60 dark:text-amber-400 border border-amber-300 dark:border-amber-700';
            } else if (!foundUnpaid) {
                foundUnpaid = true;
                const isLate = s.dueDate && (Date.now() > s.dueDate);
                if (isLate) {
                    statusLabel = '⚠️ JATUH TEMPO';
                    statusBadgeCls = 'bg-rose-100 text-rose-700 dark:bg-rose-950/60 dark:text-rose-400 border border-rose-300 dark:border-rose-700';
                } else {
                    statusLabel = '★ WAJIB BULAN INI';
                    statusBadgeCls = 'bg-amber-100 text-amber-800 dark:bg-amber-950/60 dark:text-amber-300 border border-amber-300 dark:border-amber-700 font-bold';
                }
            } else {
                statusLabel = 'BULAN DEPAN';
                statusBadgeCls = 'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400 border border-slate-200 dark:border-slate-700';
            }

            const dueText = s.dueDateFormatted || s.dueDateStr || (s.dueDate ? new Date(s.dueDate).toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' }) : '-');

            return `
                <tr class="text-xs ${isPaid ? 'opacity-70 bg-slate-50/50 dark:bg-slate-900/20' : ''}">
                    <td class="py-3 px-4 font-bold text-slate-800 dark:text-slate-200">
                        Bulan ke-${mIdx}
                    </td>
                    <td class="py-3 px-4 text-slate-600 dark:text-slate-400 font-mono text-[11px]">
                        ${dueText}
                    </td>
                    <td class="py-3 px-4 font-mono font-bold text-slate-800 dark:text-slate-200">
                        ${fCur(pPokok)}
                    </td>
                    <td class="py-3 px-4 font-mono text-slate-700 dark:text-slate-300 font-bold">
                        +${fCur(pFee)}
                    </td>
                    <td class="py-3 px-4 font-mono font-black text-slate-900 dark:text-white">
                        ${fCur(mTotal)}
                    </td>
                    <td class="py-3 px-4 text-right">
                        <span class="inline-block px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider ${statusBadgeCls}">
                            ${statusLabel}
                        </span>
                    </td>
                </tr>
            `;
        }).join('');

        return `
            <div class="mt-3 rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white/70 dark:bg-slate-900/60 overflow-hidden shadow-2xs space-y-3 p-4 sm:p-5">
                <div class="flex items-center justify-between flex-wrap gap-2.5">
                    <div>
                        <h4 class="text-xs sm:text-sm font-black text-slate-800 dark:text-white flex items-center gap-1.5">
                            <i class="fa-solid fa-calendar-check text-[var(--color-primary)]"></i> Rincian Jadwal Angsuran Anda
                        </h4>
                        <p class="text-[11px] text-slate-400 font-medium mt-0.5">Nota #${esc(o.orderId)} • ${esc(tenorName)}</p>
                    </div>
                    ${tempoBal > 0 ? `
                    <button type="button" onclick="window.openClientPaymentModal('${esc(o.orderId)}')" class="px-3.5 py-2 rounded-xl text-white font-bold text-[10px] uppercase tracking-wider flex items-center gap-1.5 shadow-2xs active:scale-95 transition-all cursor-pointer" style="background: var(--color-primary); box-shadow: 0 2px 8px rgba(var(--color-primary-rgb), 0.3);">
                        <i class="fa-solid fa-credit-card text-[10px]"></i> Bayar Angsuran Ini
                    </button>
                    ` : ''}
                </div>

                <div class="overflow-x-auto rounded-xl border border-slate-200/80 dark:border-slate-800 custom-scrollbar">
                    <table class="w-full text-left whitespace-nowrap min-w-[540px]">
                        <thead class="bg-slate-100/90 dark:bg-slate-800/90 text-[10px] font-black uppercase tracking-wider text-slate-500 dark:text-slate-400">
                            <tr>
                                <th class="py-3 px-4">Angsuran</th>
                                <th class="py-3 px-4">Jatuh Tempo</th>
                                <th class="py-3 px-4">Pokok</th>
                                <th class="py-3 px-4">Biaya Tenor</th>
                                <th class="py-3 px-4">Wajib Bayar</th>
                                <th class="py-3 px-4 text-right">Status</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-slate-100 dark:divide-slate-800 bg-white dark:bg-slate-900/40">
                            ${rowsHtml}
                        </tbody>
                    </table>
                </div>

                <div class="pt-2 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 flex-wrap gap-2.5">
                    <span>Sudah Dibayar: <b class="font-mono text-emerald-600 dark:text-emerald-400">${fCur(totalPaid)}</b></span>
                    <span>Sisa Wajib Bayar: <b class="font-mono text-rose-600 dark:text-rose-400 font-black">${fCur(tempoBal)}</b></span>
                </div>
            </div>
        `;
    }

    // Fallback untuk tempo toko biasa (bukan multi-tenor)
    return `
        <div class="mt-3 rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white/70 dark:bg-slate-900/60 p-3.5 sm:p-4 space-y-2.5">
            <div class="flex items-center justify-between flex-wrap gap-2">
                <div>
                    <h4 class="text-xs font-black text-slate-800 dark:text-white flex items-center gap-1.5">
                        <i class="fa-solid fa-file-invoice text-[var(--color-primary)]"></i> Tagihan Tempo Berjalan
                    </h4>
                    <p class="text-[10px] text-slate-400 font-medium">Nota #${esc(o.orderId)} • Jatuh Tempo: ${o.payment?.tempoDueDate ? new Date(o.payment.tempoDueDate).toLocaleDateString('id-ID', {day:'numeric', month:'short', year:'numeric'}) : '-'}</p>
                </div>
                ${tempoBal > 0 ? `
                <button type="button" onclick="window.openClientPaymentModal('${esc(o.orderId)}')" class="px-3 py-1.5 rounded-xl text-white font-bold text-[10px] uppercase tracking-wider flex items-center gap-1.5 shadow-2xs active:scale-95 transition-all cursor-pointer" style="background: var(--color-primary); box-shadow: 0 2px 8px rgba(var(--color-primary-rgb), 0.3);">
                    <i class="fa-solid fa-credit-card text-[9px]"></i> Bayar Sekarang
                </button>
                ` : ''}
            </div>

            <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/70 dark:border-slate-700/60 flex items-center justify-between text-xs">
                <span class="text-slate-500 font-bold">Sisa Tagihan Tempo</span>
                <span class="font-mono font-black text-rose-600 dark:text-rose-400 text-sm">${fCur(tempoBal)}</span>
            </div>
        </div>
    `;
};

// Registrasi global di window untuk akses onclick di HTML template
if (typeof window !== 'undefined') {
    window.openClientPaymentModal = openClientPaymentModal;
    window.closeClientPaymentModal = closeClientPaymentModal;
    window.switchClientPaymentOrder = switchClientPaymentOrder;
    window.switchClientPayChannel = switchClientPayChannel;
    window.setClientPayAmount = setClientPayAmount;
    window.focusCustomClientPay = focusCustomClientPay;
    window.handleClientProofFileChange = handleClientProofFileChange;
    window.submitClientPaymentConfirmation = submitClientPaymentConfirmation;
    window.copyAccountNumber = copyAccountNumber;
    window.renderClientInstallmentSchedule = renderClientInstallmentSchedule;
}
