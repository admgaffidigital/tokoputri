/**
 * ============================================================
 * MODUL ADMIN: PIUTANG & MANAJEMEN PEMBAYARAN TEMPO CERDAS
 * Mengatur pelacakan piutang jatuh tempo, metrik statistik,
 * filter status keterlambatan, pencarian instan, denda otomatis,
 * pembekuan denda, pembayaran cicilan, pelunasan instan,
 * 1-Klik Tagihan WhatsApp otomatis & rincian rekening, dan cetak struk.
 * Diperbarui v1.9.50: True Native Bottom Sheet, Harmonisasi Tema 100%,
 * Quick-Pay Chips, & Detail Nota Piutang Multi-Tab.
 * ============================================================
 */

import { db } from '../../config/firebase.js';
import { appData, gOrds } from '../../core/state.js';
import { 
    el, show, hide, setH, esc, fCur, showToast, showConfirm, sLoad, hLoad, openWhatsApp, normalizeWA,
    openModalAnim, closeModalAnim 
} from '../../core/utils.js';

const pushModalHistory = (id) => window.pushModalHistory?.(id);
const requestCloseModal = (id, fH, cb) => (typeof window.requestCloseModal === 'function') ? window.requestCloseModal(id, fH, cb) : cb?.();

let activeTempoFilter = 'all'; // 'all' | 'late' | 'due_soon' | 'active'
let activeTempoMainTab = 'orders'; // 'orders' | 'customers' | 'installments'
let activeInstallmentPeriod = 'all'; // 'all' | 'today' | 'week' | 'month'
let activeInstallmentMethod = 'all'; // 'all' | 'cash' | 'transfer' | 'qris'
let tempoSearchQuery = '';
let cachedPiutangOrders = [];
let currentDetailOrderId = null;
let currentDetailTab = 'items'; // 'items' | 'installments' | 'penalty_info'

/**
 * Pastikan seluruh wadah modal Piutang & Tempo terpasang di root document.body
 * agar terbebas dari scroll container & transform parent (.view-section / .scroll-content).
 */
export const ensureTempoModals = () => {
    // Bersihkan modal lama jika pernah terinjeksi ke dalam #admin-content
    ['modal-tempo-detail', 'modal-tempo-payment', 'modal-tempo-penalty'].forEach(id => {
        const inside = document.querySelector(`#admin-content #${id}`);
        if (inside) inside.remove();
    });

    // 1. Modal Detail Piutang & Histori Cicilan
    if (!el('modal-tempo-detail')) {
        const m = document.createElement('div');
        m.id = 'modal-tempo-detail';
        m.className = 'fixed inset-0 z-[150] flex hidden items-end sm:items-center justify-center p-0 sm:p-4 bg-slate-950/40 backdrop-blur-sm opacity-0 transition-opacity duration-300';
        m.onclick = (e) => { if (e.target === m) window.closeTempoDetailModal?.(); };
        m.innerHTML = `
            <div id="modal-tempo-detail-box" class="modal-bottom-sheet relative flex max-h-[92dvh] sm:max-h-[88dvh] w-full max-w-3xl translate-y-full sm:translate-y-10 transform flex-col overflow-hidden rounded-t-[2rem] sm:rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-2xl transition-transform duration-300">
                <div id="modal-tempo-detail-content" class="flex-1 overflow-y-auto custom-scrollbar flex flex-col"></div>
            </div>
        `;
        document.body.appendChild(m);
    }

    // 2. Modal Catat Pembayaran Cicilan Piutang
    if (!el('modal-tempo-payment')) {
        const m = document.createElement('div');
        m.id = 'modal-tempo-payment';
        m.className = 'fixed inset-0 z-[150] flex hidden items-end sm:items-center justify-center p-0 sm:p-4 bg-slate-950/40 backdrop-blur-sm opacity-0 transition-opacity duration-300';
        m.onclick = (e) => { if (e.target === m) window.closeTempoPaymentModal?.(); };
        m.innerHTML = `
            <div id="modal-tempo-payment-box" class="modal-bottom-sheet relative flex max-h-[92dvh] sm:max-h-[88dvh] w-full max-w-md translate-y-full sm:translate-y-10 transform flex-col overflow-hidden rounded-t-[2rem] sm:rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-2xl transition-transform duration-300">
                <div id="modal-tempo-payment-content" class="flex-1 overflow-y-auto custom-scrollbar flex flex-col"></div>
            </div>
        `;
        document.body.appendChild(m);
    }

    // 3. Modal Atur Denda Keterlambatan
    if (!el('modal-tempo-penalty')) {
        const m = document.createElement('div');
        m.id = 'modal-tempo-penalty';
        m.className = 'fixed inset-0 z-[150] flex hidden items-end sm:items-center justify-center p-0 sm:p-4 bg-slate-950/40 backdrop-blur-sm opacity-0 transition-opacity duration-300';
        m.onclick = (e) => { if (e.target === m) window.closeTempoPenaltyModal?.(); };
        m.innerHTML = `
            <div id="modal-tempo-penalty-box" class="modal-bottom-sheet relative flex max-h-[92dvh] sm:max-h-[88dvh] w-full max-w-md translate-y-full sm:translate-y-10 transform flex-col overflow-hidden rounded-t-[2rem] sm:rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-2xl transition-transform duration-300">
                <div id="modal-tempo-penalty-content" class="flex-1 overflow-y-auto custom-scrollbar flex flex-col"></div>
            </div>
        `;
        document.body.appendChild(m);
    }
};

/**
 * Helper Monogram Inisial 2 Huruf Pelanggan
 */
const getCustomerMonogram = (name) => {
    if (!name) return 'PL';
    const parts = name.trim().split(/\s+/).filter(Boolean);
    if (parts.length === 1) return parts[0].substring(0, 2).toUpperCase();
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
};

/**
 * Format Tanggal Indonesia
 */
const formatDateID = (val) => {
    if (!val) return '-';
    try {
        const d = new Date(val);
        return d.toLocaleDateString('id-ID', { day: '2-digit', month: 'short', year: 'numeric' });
    } catch (_) {
        return val;
    }
};

/**
 * Format Tanggal & Jam Indonesia
 */
const formatDateTimeID = (val) => {
    if (!val) return '-';
    try {
        const d = new Date(val);
        return d.toLocaleDateString('id-ID', { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' }) + ' WIB';
    } catch (_) {
        return val;
    }
};

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

/**
 * ══════════════════════════════════════════════════════════════════
 * 1. MODAL DETAIL PIUTANG & HISTORI CICILAN (modal-tempo-detail)
 * ══════════════════════════════════════════════════════════════════
 */
export const openTempoDetailModal = (orderId) => {
    ensureTempoModals();
    currentDetailOrderId = orderId;
    currentDetailTab = 'items';

    const o = cachedPiutangOrders.find(x => x.orderId === orderId);
    if (!o) return showToast('Data piutang tidak ditemukan!');

    renderTempoDetailModalContent(o);

    const modal = el('modal-tempo-detail');
    const box = el('modal-tempo-detail-box');
    if (!modal) return;
    openModalAnim(modal, box);
    pushModalHistory('tempoDetail');
};

export const closeTempoDetailModal = (fH = false) => {
    const modal = el('modal-tempo-detail');
    const box = el('modal-tempo-detail-box');
    if (!modal) return;
    requestCloseModal('tempoDetail', fH, () => closeModalAnim(modal, box));
};

window.openTempoDetailModal = openTempoDetailModal;
window.closeTempoDetailModal = closeTempoDetailModal;

/**
 * Ganti Tab Aktif di Modal Detail
 */
window.switchTempoDetailTab = (tabKey) => {
    currentDetailTab = tabKey;
    const o = cachedPiutangOrders.find(x => x.orderId === currentDetailOrderId);
    if (o) renderTempoDetailModalContent(o);
};

const renderTempoDetailModalContent = (o) => {
    const content = el('modal-tempo-detail-content');
    if (!content) return;

    const calc = getTempoOrderCalculations(o);
    const waNum = normalizeWA(o.customer?.wa || '');
    const monogram = getCustomerMonogram(o.customer?.name || 'Pelanggan');
    const dueStr = calc.dueDate ? formatDateID(calc.dueDate) : '-';
    const dateStr = o.dateString ? formatDateTimeID(o.dateString) : '-';

    const items = o.items || [];
    const installments = o.payment?.installments || [];
    const totalPaid = installments.reduce((sum, ins) => sum + (parseFloat(ins.amount) || 0), 0);
    const grandTotalAwal = o.payment?.grandTotal || (calc.sisa + totalPaid);

    // Status Badge
    let statusBadgeHtml = '';
    if (calc.isLate) {
        statusBadgeHtml = `<span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-black uppercase tracking-wider bg-rose-50 text-rose-600 dark:bg-rose-950/40 dark:text-rose-400 border border-rose-200 dark:border-rose-800 shadow-2xs"><i class="fa-solid fa-triangle-exclamation"></i> Terlambat ${calc.daysLate} Hari</span>`;
    } else if (calc.isDueSoon) {
        statusBadgeHtml = `<span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-black uppercase tracking-wider bg-amber-50 text-amber-600 dark:bg-amber-950/40 dark:text-amber-400 border border-amber-200 dark:border-amber-800 shadow-2xs"><i class="fa-solid fa-clock"></i> Jatuh Tempo H-${calc.daysLeft <= 0 ? '0 (Hari Ini)' : calc.daysLeft}</span>`;
    } else {
        statusBadgeHtml = `<span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-black uppercase tracking-wider text-[var(--color-primary)] border shadow-2xs" style="background: rgba(var(--color-primary-rgb), 0.08); border-color: rgba(var(--color-primary-rgb), 0.25);"><i class="fa-solid fa-circle-check"></i> Tempo Berjalan (${calc.daysLeft} Hari Lagi)</span>`;
    }

    setH('modal-tempo-detail-content', `
        <!-- DRAG PULL INDICATOR (NATIVE MOBILE SHEET) -->
        <div class="pull-indicator sm:hidden"></div>

        <!-- HEADER MODAL DENGAN PINNED CLOSE BUTTON -->
        <div class="relative px-5 sm:px-6 pt-3 sm:pt-5 pb-4 border-b border-slate-100 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-900/60 shrink-0">
            <!-- Pinned Close Button -->
            <button onclick="window.closeTempoDetailModal()" class="absolute top-3.5 right-3.5 sm:top-5 sm:right-5 z-10 w-9 h-9 rounded-full bg-slate-100 hover:bg-rose-100 hover:text-rose-500 dark:bg-slate-800 dark:hover:bg-rose-950/40 dark:hover:text-rose-400 text-slate-500 flex items-center justify-center transition-all cursor-pointer active:scale-95" aria-label="Tutup Rincian">
                <i class="fa-solid fa-xmark text-sm"></i>
            </button>

            <div class="flex items-center gap-3.5 pr-12">
                <div class="w-12 h-12 rounded-2xl flex items-center justify-center text-sm font-black shrink-0 aspect-square shadow-xs" style="background: rgba(var(--color-primary-rgb), 0.12); color: var(--color-primary); border: 1px solid rgba(var(--color-primary-rgb), 0.25);">
                    ${monogram}
                </div>
                <div class="min-w-0">
                    <div class="flex items-center gap-2 flex-wrap">
                        <h3 class="font-black text-base sm:text-lg text-slate-800 dark:text-white tracking-tight truncate">${esc(o.customer?.name || 'Pelanggan Anonim')}</h3>
                        <span class="text-[9px] font-bold px-2 py-0.5 rounded-xl uppercase tracking-widest border ${o.customerType === 'Member' ? 'text-amber-600 bg-amber-50 dark:bg-amber-900/20 border-amber-200 dark:border-amber-800' : 'text-slate-500 bg-slate-100 dark:bg-slate-800 border-slate-200 dark:border-slate-700'}">
                            ${o.customerType === 'Member' ? '<i class="fa-solid fa-star text-amber-400 mr-1"></i>Member' : '<i class="fa-solid fa-user mr-1"></i>Umum'}
                        </span>
                    </div>
                    <div class="flex items-center gap-3 mt-1 text-xs text-slate-500 dark:text-slate-400 flex-wrap">
                        <span class="font-bold text-slate-400">#${esc(o.orderId)}</span>
                        <span>•</span>
                        <a href="javascript:void(0)" onclick="window.sendSmartTempoWA('${o.orderId}')" class="font-mono text-emerald-600 dark:text-emerald-400 hover:underline flex items-center gap-1 font-bold">
                            <i class="fa-brands fa-whatsapp"></i> +${esc(waNum || '-')}
                        </a>
                        <span>•</span>
                        <button type="button" onclick="if(typeof window.openDocPreview==='function') window.openDocPreview('tempo_customer_ledger', '${esc(o.customer?.phone || o.customer?.wa || o.customer?.name || '')}');" class="text-xs font-bold text-[var(--color-primary)] hover:underline inline-flex items-center gap-1 cursor-pointer">
                            <i class="fa-solid fa-address-book"></i> Kartu Pelanggan
                        </button>
                    </div>
                </div>
            </div>

            <!-- STATUS & JATUH TEMPO STRIP -->
            <div class="mt-3.5 flex items-center justify-between flex-wrap gap-2 pt-3 border-t border-slate-200/60 dark:border-slate-800">
                <div class="flex items-center gap-2">
                    ${statusBadgeHtml}
                </div>
                <div class="text-xs font-bold text-slate-500 dark:text-slate-400">
                    Batas Waktu: <span class="font-mono text-slate-800 dark:text-slate-200">${dueStr}</span>
                </div>
            </div>
        </div>

        <!-- RINGKASAN SALDO PIUTANG STRIP (HIGHLIGHT CARD) -->
        <div class="p-4 sm:p-5 bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800 shrink-0">
            <div class="p-4 rounded-2xl border ${calc.isLate ? 'bg-rose-50/60 dark:bg-rose-950/20 border-rose-200 dark:border-rose-900/40' : 'bg-slate-50 dark:bg-slate-800/60 border-slate-200 dark:border-slate-700/80'} shadow-2xs">
                <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center sm:text-left">
                    <div>
                        <span class="block text-[10px] font-bold uppercase tracking-wider text-slate-400">Total Transaksi</span>
                        <span class="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200 font-mono mt-0.5 block">${fCur(grandTotalAwal)}</span>
                    </div>
                    <div>
                        <span class="block text-[10px] font-bold uppercase tracking-wider text-slate-400">Sudah Dibayar</span>
                        <span class="text-xs sm:text-sm font-bold text-emerald-600 dark:text-emerald-400 font-mono mt-0.5 block">${fCur(totalPaid)}</span>
                    </div>
                    <div>
                        <span class="block text-[10px] font-bold uppercase tracking-wider text-slate-400">Sisa Pokok</span>
                        <span class="text-xs sm:text-sm font-bold text-slate-700 dark:text-slate-300 font-mono mt-0.5 block">${fCur(calc.sisa)}</span>
                    </div>
                    <div>
                        <span class="block text-[10px] font-bold uppercase tracking-wider ${calc.isLate ? 'text-rose-500' : 'text-slate-400'}">Total Wajib Bayar</span>
                        <span class="text-sm sm:text-base font-black ${calc.isLate ? 'text-rose-600 dark:text-rose-400' : 'text-slate-900 dark:text-white'} font-mono mt-0.5 block">${fCur(calc.totalAkhir)}</span>
                    </div>
                </div>
                ${calc.latePenalty > 0 ? `
                <div class="mt-2.5 pt-2 border-t border-rose-200/80 dark:border-rose-900/60 flex items-center justify-between text-xs text-rose-600 dark:text-rose-400">
                    <span class="font-bold flex items-center gap-1.5"><i class="fa-solid fa-clock"></i> Termasuk Denda Keterlambatan (${calc.rate}%/hari • ${calc.daysLate} hari):</span>
                    <span class="font-black font-mono">+${fCur(calc.latePenalty)}</span>
                </div>` : ''}
            </div>
        </div>

        <!-- 3-COLUMN SEGMENTED TAB BAR -->
        <div class="px-4 sm:px-6 pt-3 pb-2 bg-white dark:bg-slate-900 shrink-0">
            <div class="grid grid-cols-3 gap-1 p-1 bg-slate-100 dark:bg-slate-800 rounded-2xl">
                <button type="button" onclick="window.switchTempoDetailTab('items')" class="py-2.5 px-2 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 active:scale-95 cursor-pointer ${currentDetailTab === 'items' ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-xs' : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'}">
                    <i class="fa-solid fa-box text-xs"></i>
                    <span>Barang (${items.length})</span>
                </button>
                <button type="button" onclick="window.switchTempoDetailTab('installments')" class="py-2.5 px-2 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 active:scale-95 cursor-pointer ${currentDetailTab === 'installments' ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-xs' : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'}">
                    <i class="fa-solid fa-receipt text-xs"></i>
                    <span>Cicilan (${installments.length})</span>
                </button>
                <button type="button" onclick="window.switchTempoDetailTab('penalty_info')" class="py-2.5 px-2 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 active:scale-95 cursor-pointer ${currentDetailTab === 'penalty_info' ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-xs' : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'}">
                    <i class="fa-solid fa-gear text-xs"></i>
                    <span>Denda &amp; Info</span>
                </button>
            </div>
        </div>

        <!-- TAB BODY CONTENT -->
        <div class="p-4 sm:p-6 overflow-y-auto flex-1 custom-scrollbar bg-white dark:bg-slate-900">
            ${renderActiveTempoDetailTab(o, calc)}
        </div>

        <!-- STICKY NATIVE ACTION FOOTER (ERGONOMIC TOUCH) -->
        <div class="p-4 sm:p-5 border-t border-slate-100 dark:border-slate-800 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shrink-0 flex flex-wrap sm:flex-nowrap items-center justify-between gap-2" style="padding-bottom: max(1rem, env(safe-area-inset-bottom))">
            <div class="flex items-center gap-1.5 w-full sm:w-auto flex-wrap">
                <button type="button" onclick="window.closeTempoDetailModal()" class="h-11 px-3.5 rounded-2xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 font-bold text-xs hover:bg-slate-100 dark:hover:bg-slate-800 transition-all cursor-pointer active:scale-95">
                    Tutup
                </button>
                <button type="button" onclick="if(typeof window.openDocPreview==='function') window.openDocPreview('tempo_invoice', '${o.orderId}');" class="h-11 px-3 rounded-2xl border border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 font-bold text-xs transition-all cursor-pointer flex items-center gap-1.5 active:scale-95 shadow-2xs" title="Cetak Nota A4 / PDF / Simpan Gambar">
                    <i class="fa-solid fa-file-invoice"></i>
                    <span class="inline">Nota A4</span>
                </button>
                <button type="button" onclick="if(typeof window.printTempoReceiptDirect==='function'){window.printTempoReceiptDirect('${o.orderId}');}else{window.previewTempoReceipt('${o.orderId}');}" class="h-11 px-3 rounded-2xl bg-amber-500 hover:bg-amber-600 text-white font-bold text-xs transition-all cursor-pointer flex items-center gap-1.5 active:scale-95 shadow-2xs" title="Cetak Struk Thermal (RawBT / Web)">
                    <i class="fa-solid fa-print"></i>
                    <span class="inline">Struk</span>
                </button>
                <button type="button" onclick="window.sendSmartTempoWA('${o.orderId}')" class="h-11 px-3 rounded-2xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs transition-all cursor-pointer flex items-center gap-1.5 active:scale-95 shadow-2xs" title="Kirim Tagihan WhatsApp">
                    <i class="fa-brands fa-whatsapp text-sm"></i>
                    <span class="inline">Tagih WA</span>
                </button>
            </div>

            <div class="flex items-center gap-2 w-full sm:w-auto justify-end">
                <button type="button" onclick="window.closeTempoDetailModal(); window.openTempoPaymentModal('${o.orderId}');" class="flex-1 sm:flex-initial h-11 px-4 rounded-2xl text-white font-bold text-xs shadow-glow active:scale-95 transition-all cursor-pointer flex items-center justify-center gap-1.5" style="background: var(--color-primary); box-shadow: 0 4px 14px rgba(var(--color-primary-rgb), 0.35);">
                    <i class="fa-solid fa-money-bill-wave"></i>
                    <span>+ Catat Cicilan</span>
                </button>
                <button type="button" onclick="window.closeTempoDetailModal(); window.markTempoPaid('${o.orderId}');" class="h-11 px-3.5 rounded-2xl bg-slate-900 hover:bg-black dark:bg-slate-800 dark:hover:bg-slate-700 text-white font-bold text-xs transition-all cursor-pointer flex items-center gap-1.5 active:scale-95 shadow-2xs" title="Tandai Seluruh Tagihan Lunas">
                    <i class="fa-solid fa-check-double text-emerald-400"></i>
                    <span>Lunasi</span>
                </button>
            </div>
        </div>
    `);
};

/**
 * Render Konten Spesifik Tab Aktif Modal Detail
 */
const renderActiveTempoDetailTab = (o, calc) => {
    const items = o.items || [];
    const installments = o.payment?.installments || [];

    if (currentDetailTab === 'items') {
        if (items.length === 0) {
            return `
                <div class="text-center py-10 text-slate-400 flex flex-col items-center justify-center">
                    <div class="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl mb-2.5 mx-auto bg-slate-100 dark:bg-slate-800 text-slate-400 dark:text-slate-500 shadow-2xs">
                        <i class="fa-solid fa-box-open"></i>
                    </div>
                    <p class="text-xs font-bold text-slate-700 dark:text-slate-300">Rincian barang tidak ditemukan untuk pesanan ini.</p>
                </div>
            `;
        }

        return `
            <div class="space-y-3">
                <!-- Mobile List (Adaptive Card) -->
                <div class="sm:hidden space-y-2.5">
                    ${items.map(item => {
                        const effPrice = item.effectivePrice !== undefined ? item.effectivePrice : (item.price || 0);
                        const subtotal = (parseFloat(item.qty) || 1) * effPrice;
                        return `
                            <div class="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700 flex items-start justify-between gap-3 shadow-2xs">
                                <div class="min-w-0 flex-1">
                                    <h4 class="font-bold text-xs text-slate-800 dark:text-slate-100">${esc(item.name || 'Barang')}</h4>
                                    ${item.variantName ? `<span class="inline-block mt-0.5 text-[10px] text-slate-500 font-medium">Varian: ${esc(item.variantName)}</span>` : ''}
                                    <div class="mt-1 text-[11px] font-mono text-slate-500 dark:text-slate-400">
                                        ${item.qty} ${esc(item.unit || 'pcs')} × ${fCur(effPrice)}
                                    </div>
                                </div>
                                <div class="text-right shrink-0">
                                    <span class="font-black text-xs text-slate-900 dark:text-white font-mono">${fCur(subtotal)}</span>
                                </div>
                            </div>
                        `;
                    }).join('')}
                </div>

                <!-- Desktop Table -->
                <div class="hidden sm:block overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-700/80">
                    <table class="w-full text-xs text-left">
                        <thead class="bg-slate-50 dark:bg-slate-800 text-slate-400 uppercase text-[10px] font-bold border-b border-slate-200 dark:border-slate-700">
                            <tr>
                                <th class="py-3 px-4">Nama Produk &amp; Varian</th>
                                <th class="py-3 px-3 text-center">Qty</th>
                                <th class="py-3 px-3 text-right">Harga Satuan</th>
                                <th class="py-3 px-4 text-right">Subtotal</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-slate-100 dark:divide-slate-800 font-medium">
                            ${items.map(item => {
                                const effPrice = item.effectivePrice !== undefined ? item.effectivePrice : (item.price || 0);
                                const subtotal = (parseFloat(item.qty) || 1) * effPrice;
                                return `
                                    <tr class="hover:bg-slate-50/50 dark:hover:bg-slate-800/40">
                                        <td class="py-3 px-4">
                                            <span class="font-bold text-slate-800 dark:text-slate-200">${esc(item.name || 'Barang')}</span>
                                            ${item.variantName ? `<span class="block text-[10px] text-slate-400">Varian: ${esc(item.variantName)}</span>` : ''}
                                        </td>
                                        <td class="py-3 px-3 text-center font-mono font-bold">${item.qty} ${esc(item.unit || 'pcs')}</td>
                                        <td class="py-3 px-3 text-right font-mono">${fCur(effPrice)}</td>
                                        <td class="py-3 px-4 text-right font-black font-mono text-slate-800 dark:text-slate-100">${fCur(subtotal)}</td>
                                    </tr>
                                `;
                            }).join('')}
                        </tbody>
                    </table>
                </div>
            </div>
        `;
    }

    if (currentDetailTab === 'installments') {
        if (installments.length === 0) {
            return `
                <div class="text-center py-10 text-slate-400 bg-slate-50/60 dark:bg-slate-900/40 rounded-2xl border-2 border-dashed border-slate-200 dark:border-slate-800 p-6">
                    <div class="w-12 h-12 rounded-2xl flex items-center justify-center text-xl mb-2.5 mx-auto" style="background: rgba(var(--color-primary-rgb), 0.1); color: var(--color-primary);">
                        <i class="fa-solid fa-receipt"></i>
                    </div>
                    <p class="font-bold text-xs sm:text-sm text-slate-700 dark:text-slate-200">Belum Ada Riwayat Cicilan</p>
                    <p class="text-[11px] text-slate-400 mt-0.5 max-w-xs mx-auto">Pelanggan belum melakukan pembayaran cicilan apapun untuk tagihan tempo ini.</p>
                    <button type="button" onclick="window.closeTempoDetailModal(); window.openTempoPaymentModal('${o.orderId}');" class="mt-4 px-4 py-2 rounded-xl text-white font-bold text-xs inline-flex items-center gap-1.5 shadow-sm active:scale-95 transition-all cursor-pointer" style="background: var(--color-primary);">
                        <i class="fa-solid fa-plus text-xs"></i>
                        <span>+ Catat Pembayaran Cicilan Pertama</span>
                    </button>
                </div>
            `;
        }

        return `
            <div class="space-y-3">
                <div class="flex items-center justify-between text-xs font-bold text-slate-500 mb-1">
                    <span>Daftar Transaksi Cicilan (${installments.length})</span>
                    <span>Total Masuk: <span class="text-emerald-600 font-mono">${fCur(installments.reduce((sum, ins) => sum + (parseFloat(ins.amount) || 0), 0))}</span></span>
                </div>
                <div class="space-y-2.5">
                    ${installments.map((ins, idx) => `
                        <div class="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700 flex items-center justify-between gap-3 shadow-2xs">
                            <div class="flex items-center gap-3">
                                <div class="w-9 h-9 rounded-xl flex items-center justify-center text-xs font-black shrink-0 bg-emerald-100 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-400">
                                    #${idx + 1}
                                </div>
                                <div>
                                    <span class="font-black text-xs text-emerald-600 dark:text-emerald-400 font-mono">+${fCur(ins.amount)}</span>
                                    <div class="flex items-center gap-2 mt-0.5 text-[10px] text-slate-400">
                                        <span>${formatDateTimeID(ins.date)}</span>
                                        <span>•</span>
                                        <span class="font-bold text-slate-600 dark:text-slate-300">${esc(ins.method || 'Tunai')}</span>
                                    </div>
                                    ${ins.note ? `<p class="text-[10px] text-slate-500 dark:text-slate-400 mt-0.5 italic">"${esc(ins.note)}"</p>` : ''}
                                </div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }

    if (currentDetailTab === 'penalty_info') {
        return `
            <div class="space-y-4">
                <!-- Info Pengiriman & Catatan Pelanggan -->
                <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700 space-y-2.5 text-xs">
                    <span class="block text-[10px] font-bold uppercase tracking-wider text-slate-400">Data Pelanggan &amp; Pengiriman</span>
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                        <div>
                            <span class="text-slate-400 block text-[10px]">Alamat Pelanggan:</span>
                            <span class="font-medium text-slate-700 dark:text-slate-200 mt-0.5 block">${esc(o.customer?.address || 'Tidak dicantumkan')}</span>
                        </div>
                        <div>
                            <span class="text-slate-400 block text-[10px]">Nomor WhatsApp:</span>
                            <span class="font-medium font-mono text-slate-700 dark:text-slate-200 mt-0.5 block">+${esc(o.customer?.wa || '-')}</span>
                        </div>
                    </div>
                    ${o.notes ? `
                    <div class="pt-2 border-t border-slate-200/60 dark:border-slate-700">
                        <span class="text-slate-400 block text-[10px]">Catatan Pesanan:</span>
                        <p class="font-medium text-slate-700 dark:text-slate-200 mt-0.5 italic">"${esc(o.notes)}"</p>
                    </div>` : ''}
                </div>

                <!-- Pengaturan Denda Keterlambatan -->
                <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700 space-y-3 text-xs">
                    <div class="flex items-center justify-between">
                        <span class="text-[10px] font-bold uppercase tracking-wider text-slate-400">Status Denda Keterlambatan</span>
                        <span class="text-[10px] font-bold px-2.5 py-0.5 rounded-full ${calc.isStopped ? 'bg-slate-200 text-slate-600 dark:bg-slate-700 dark:text-slate-300' : 'bg-rose-100 text-rose-600 dark:bg-rose-950/60 dark:text-rose-400'}">
                            ${calc.isStopped ? 'DIBEKUKAN (FIXED)' : 'BERJALAN OTOMATIS'}
                        </span>
                    </div>

                    <div class="grid grid-cols-2 gap-3 pt-1">
                        <div>
                            <span class="text-slate-400 block text-[10px]">Tarif Denda Harian:</span>
                            <span class="font-bold text-slate-800 dark:text-slate-100 font-mono mt-0.5 block">${calc.rate}% / Hari</span>
                        </div>
                        <div>
                            <span class="text-slate-400 block text-[10px]">Akumulasi Denda:</span>
                            <span class="font-bold text-rose-600 dark:text-rose-400 font-mono mt-0.5 block">+${fCur(calc.latePenalty)}</span>
                        </div>
                    </div>

                    <!-- Tombol Kontrol Denda -->
                    <div class="flex items-center gap-2 pt-2 border-t border-slate-200/60 dark:border-slate-700">
                        <button type="button" onclick="window.openTempoPenaltyModal('${o.orderId}')" class="flex-1 py-2 px-3 rounded-xl border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-200 font-bold text-xs hover:bg-slate-100 dark:hover:bg-slate-700 transition-all flex items-center justify-center gap-1.5 active:scale-95 cursor-pointer">
                            <i class="fa-solid fa-percent text-xs"></i>
                            <span>Ubah Tarif Denda</span>
                        </button>
                        <button type="button" onclick="window.stopTempoPenalty('${o.orderId}', ${calc.latePenalty}, ${calc.isStopped})" class="flex-1 py-2 px-3 rounded-xl font-bold text-xs transition-all flex items-center justify-center gap-1.5 active:scale-95 cursor-pointer ${calc.isStopped ? 'bg-[rgba(var(--color-primary-rgb),0.1)] text-[var(--color-primary)] border border-[rgba(var(--color-primary-rgb),0.3)]' : 'bg-rose-100 dark:bg-rose-900/30 text-rose-600 dark:text-rose-400 hover:bg-rose-200'}">
                            <i class="fa-solid ${calc.isStopped ? 'fa-play' : 'fa-pause'} text-xs"></i>
                            <span>${calc.isStopped ? 'Lanjutkan Denda' : 'Bekukan Denda'}</span>
                        </button>
                    </div>
                </div>
            </div>
        `;
    }

    return '';
};

/**
 * ══════════════════════════════════════════════════════════════════
 * 2. MODAL CATAT PEMBAYARAN CICILAN PIUTANG (modal-tempo-payment)
 * ══════════════════════════════════════════════════════════════════
 */
export const openTempoPaymentModal = (orderId) => {
    ensureTempoModals();
    const o = cachedPiutangOrders.find(x => x.orderId === orderId);
    if (!o) return showToast('Data piutang tidak ditemukan!');

    const calc = getTempoOrderCalculations(o);
    const modal = el('modal-tempo-payment');
    const box = el('modal-tempo-payment-box');
    const content = el('modal-tempo-payment-content');
    if (!modal || !content) return;

    const totalWajib = Math.round(calc.totalAkhir);

    setH('modal-tempo-payment-content', `
        <!-- DRAG PULL INDICATOR (NATIVE MOBILE SHEET) -->
        <div class="pull-indicator sm:hidden"></div>

        <!-- HEADER MODAL -->
        <div class="px-5 sm:px-6 pt-3 sm:pt-5 pb-4 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between shrink-0 bg-slate-50/70 dark:bg-slate-900/60">
            <div class="flex items-center gap-3">
                <div class="w-11 h-11 rounded-2xl flex items-center justify-center text-lg shrink-0 aspect-square shadow-xs" style="background: rgba(var(--color-primary-rgb), 0.12); color: var(--color-primary); border: 1px solid rgba(var(--color-primary-rgb), 0.25);">
                    <i class="fa-solid fa-money-bill-wave"></i>
                </div>
                <div>
                    <h3 class="font-black text-base text-slate-800 dark:text-white tracking-tight">Catat Pembayaran Cicilan</h3>
                    <p class="text-xs text-slate-400">${esc(o.customer?.name || 'Pelanggan')} • #${esc(o.orderId)}</p>
                </div>
            </div>
            <button onclick="window.closeTempoPaymentModal()" class="w-9 h-9 rounded-full bg-slate-100 hover:bg-rose-100 hover:text-rose-500 dark:bg-slate-800 dark:hover:bg-rose-950/40 dark:hover:text-rose-400 text-slate-500 flex items-center justify-center transition-all cursor-pointer active:scale-95" aria-label="Tutup Modal">
                <i class="fa-solid fa-xmark text-sm"></i>
            </button>
        </div>

        <form id="tempo-pay-form" onsubmit="window.submitTempoPayment(event, '${o.orderId}')" class="flex-1 flex flex-col overflow-hidden">
            <input type="hidden" id="tempo-pay-total-wajib" value="${totalWajib}">

            <div class="p-4 sm:p-6 space-y-4 overflow-y-auto flex-1 custom-scrollbar">
                <!-- KARTU RINGKASAN TAGIHAN -->
                <div class="p-4 rounded-2xl bg-amber-50/70 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800/60 text-xs space-y-1.5 shadow-2xs">
                    <div class="flex justify-between">
                        <span class="text-slate-500">Sisa Pokok Piutang:</span>
                        <span class="font-bold text-slate-800 dark:text-white">${fCur(calc.sisa)}</span>
                    </div>
                    ${calc.latePenalty > 0 ? `
                    <div class="flex justify-between text-rose-600 dark:text-rose-400">
                        <span>Denda Keterlambatan (${calc.daysLate} hari):</span>
                        <span class="font-bold font-mono">+${fCur(calc.latePenalty)}</span>
                    </div>` : ''}
                    <div class="flex justify-between pt-1.5 border-t border-amber-200 dark:border-amber-800 font-black">
                        <span class="text-amber-600 dark:text-amber-400">Total Wajib Bayar:</span>
                        <span class="text-amber-600 dark:text-amber-400 text-base font-mono">${fCur(totalWajib)}</span>
                    </div>
                </div>

                <!-- INPUT NOMINAL PEMBAYARAN -->
                <div>
                    <label class="block text-[10px] font-black uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1.5">Nominal Cicilan (Rp) *</label>
                    <div class="relative">
                        <input 
                            type="number" 
                            id="tempo-pay-amount" 
                            required 
                            min="1" 
                            max="${totalWajib}" 
                            value="${totalWajib}" 
                            oninput="window.recalcTempoPayPreview()"
                            class="admin-input bg-slate-50 dark:bg-slate-900 font-black text-lg pr-24 text-emerald-600 rounded-2xl"
                        >
                        <button 
                            type="button" 
                            onclick="window.setQuickPayTempo(${totalWajib})" 
                            class="absolute right-2 top-1/2 -translate-y-1/2 px-3 py-1.5 rounded-xl text-white font-black text-[11px] shadow-sm active:scale-95 transition-all cursor-pointer" 
                            style="background: var(--color-primary);"
                        >
                            Lunas
                        </button>
                    </div>

                    <!-- PRESET QUICK-PAY CHIPS -->
                    <div class="flex items-center gap-1.5 mt-2 overflow-x-auto pb-1 hide-scrollbar">
                        <button type="button" onclick="window.setQuickPayTempo(${Math.round(totalWajib * 0.25)})" class="px-2.5 py-1 rounded-xl text-[10px] font-bold border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-100 text-slate-600 dark:text-slate-300 active:scale-95 transition-all shrink-0">
                            25% (${fCur(Math.round(totalWajib * 0.25))})
                        </button>
                        <button type="button" onclick="window.setQuickPayTempo(${Math.round(totalWajib * 0.5)})" class="px-2.5 py-1 rounded-xl text-[10px] font-bold border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-100 text-slate-600 dark:text-slate-300 active:scale-95 transition-all shrink-0">
                            50% (${fCur(Math.round(totalWajib * 0.5))})
                        </button>
                        <button type="button" onclick="window.setQuickPayTempo(${Math.round(totalWajib * 0.75)})" class="px-2.5 py-1 rounded-xl text-[10px] font-bold border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-100 text-slate-600 dark:text-slate-300 active:scale-95 transition-all shrink-0">
                            75% (${fCur(Math.round(totalWajib * 0.75))})
                        </button>
                        <button type="button" onclick="window.setQuickPayTempo(${totalWajib})" class="px-2.5 py-1 rounded-xl text-[10px] font-black border text-white active:scale-95 transition-all shrink-0" style="background: var(--color-primary); border-color: var(--color-primary);">
                            100% Lunas
                        </button>
                    </div>
                </div>

                <!-- LIVE PREVIEW HASIL PEMBAYARAN -->
                <div id="tempo-pay-preview-box" class="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700 text-xs">
                    <!-- Diperbarui reaktif oleh window.recalcTempoPayPreview() -->
                </div>

                <!-- TANGGAL & METODE BAYAR -->
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                        <label class="block text-[10px] font-black uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1.5">Tanggal Bayar *</label>
                        <input type="date" id="tempo-pay-date" required value="${new Date().toISOString().split('T')[0]}" class="admin-input bg-slate-50 dark:bg-slate-900 text-xs font-bold rounded-2xl">
                    </div>

                    <div>
                        <label class="block text-[10px] font-black uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1.5">Metode Bayar *</label>
                        <select id="tempo-pay-method" class="admin-input bg-slate-50 dark:bg-slate-900 text-xs font-bold rounded-2xl cursor-pointer">
                            <option value="Kas Tunai Toko">Kas Tunai Toko</option>
                            <option value="Transfer Bank">Transfer Bank</option>
                            <option value="QRIS Toko">QRIS Toko</option>
                            <option value="Giro / Cek">Giro / Cek</option>
                        </select>
                    </div>
                </div>

                <!-- CATATAN / BUKTI PEMBAYARAN -->
                <div>
                    <label class="block text-[10px] font-black uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1.5">Catatan / No. Bukti Pembayaran</label>
                    <input type="text" id="tempo-pay-note" placeholder="Contoh: Transfer m-BCA ref 98765 / Titip Kasir" class="admin-input bg-slate-50 dark:bg-slate-900 text-xs rounded-2xl">
                </div>
            </div>

            <!-- STICKY ACTION FOOTER (48PX) -->
            <div class="p-4 sm:p-5 border-t border-slate-100 dark:border-slate-800 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shrink-0 flex items-center justify-end gap-2.5" style="padding-bottom: max(1rem, env(safe-area-inset-bottom))">
                <button type="button" onclick="window.closeTempoPaymentModal()" class="h-12 px-5 rounded-2xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 font-bold text-xs hover:bg-slate-100 dark:hover:bg-slate-800 transition-all cursor-pointer active:scale-95">
                    Batal
                </button>
                <button type="submit" class="h-12 px-6 rounded-2xl text-white font-bold text-xs shadow-glow transition-all active:scale-95 cursor-pointer flex items-center gap-2" style="background: var(--color-primary); box-shadow: 0 4px 14px rgba(var(--color-primary-rgb), 0.35);">
                    <i class="fa-solid fa-check"></i>
                    <span>Simpan Pembayaran</span>
                </button>
            </div>
        </form>
    `);

    window.recalcTempoPayPreview();
    openModalAnim(modal, box);
    pushModalHistory('tempoPayment');
};

export const closeTempoPaymentModal = (fH = false) => {
    const modal = el('modal-tempo-payment');
    const box = el('modal-tempo-payment-box');
    if (!modal) return;
    requestCloseModal('tempoPayment', fH, () => closeModalAnim(modal, box));
};

window.openTempoPaymentModal = openTempoPaymentModal;
window.closeTempoPaymentModal = closeTempoPaymentModal;

/**
 * Pasang Nilai Cepat dari Quick-Pay Chips
 */
window.setQuickPayTempo = (amount) => {
    const input = el('tempo-pay-amount');
    if (input) {
        input.value = Math.max(1, Math.round(amount));
        window.recalcTempoPayPreview();
    }
};

/**
 * Kalkulasi Live Sisa Tagihan Setelah Pembayaran Ini
 */
window.recalcTempoPayPreview = () => {
    const input = el('tempo-pay-amount');
    const previewBox = el('tempo-pay-preview-box');
    const totalWajib = parseFloat(el('tempo-pay-total-wajib')?.value) || 0;
    if (!input || !previewBox) return;

    const val = parseFloat(input.value) || 0;
    const sisa = Math.max(0, totalWajib - val);

    if (val >= totalWajib && totalWajib > 0) {
        previewBox.innerHTML = `
            <div class="flex items-center justify-between text-emerald-600 dark:text-emerald-400 font-bold">
                <span>Status Setelah Pembayaran:</span>
                <span class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] bg-emerald-100 dark:bg-emerald-950/60 border border-emerald-300 dark:border-emerald-700">
                    <i class="fa-solid fa-check-double"></i> OTOMATIS LUNAS
                </span>
            </div>
            <p class="text-[10px] text-emerald-500 mt-1">Seluruh sisa tagihan terbayar penuh dan pesanan akan otomatis ditandai Selesai.</p>
        `;
    } else {
        previewBox.innerHTML = `
            <div class="flex items-center justify-between text-slate-600 dark:text-slate-300 font-bold">
                <span>Sisa Tagihan Setelah Bayar:</span>
                <span class="font-mono text-slate-800 dark:text-white text-sm font-black">${fCur(sisa)}</span>
            </div>
            <p class="text-[10px] text-slate-400 mt-0.5">Sisa saldo piutang akan diperbarui secara otomatis.</p>
        `;
    }
};

/**
 * Simpan Pembayaran Cicilan ke Database
 */
window.submitTempoPayment = async (e, orderId) => {
    e.preventDefault();
    sLoad('Mencatat Pembayaran...');

    try {
        const amount = parseFloat(el('tempo-pay-amount')?.value) || 0;
        const payDate = el('tempo-pay-date')?.value || new Date().toISOString();
        const payMethod = el('tempo-pay-method')?.value || 'Kas Tunai Toko';
        const payNote = (el('tempo-pay-note')?.value || '').trim();

        if (amount <= 0) {
            hLoad();
            return showToast('Nominal cicilan harus lebih besar dari Rp 0!');
        }

        const docRef = db.collection("freshmart_orders").doc(orderId);
        const docSnap = await docRef.get();
        if (!docSnap.exists) {
            hLoad();
            return showToast('Pesanan tidak ditemukan!');
        }

        const data = docSnap.data();
        let currentBalance = parseFloat(data.payment?.tempoBalance) || 0;
        let newBalance = Math.max(0, currentBalance - amount);
        let installments = data.payment?.installments || [];

        installments.push({
            date: payDate ? new Date(payDate).getTime() : Date.now(),
            amount: amount,
            method: payMethod,
            note: payNote || `Cicilan (${payMethod})`
        });

        let updates = {
            'payment.tempoBalance': newBalance,
            'payment.installments': installments
        };

        if (newBalance <= 0) {
            updates['payment.paymentStatus'] = 'lunas';
            updates['status'] = 'Selesai';
        }

        await docRef.update(updates);

        // Update in-memory state piutang cachedPiutangOrders
        if (newBalance <= 0) {
            cachedPiutangOrders = cachedPiutangOrders.filter(o => o.orderId !== orderId);
        } else {
            const cIdx = cachedPiutangOrders.findIndex(o => o.orderId === orderId);
            if (cIdx !== -1) {
                if (!cachedPiutangOrders[cIdx].payment) cachedPiutangOrders[cIdx].payment = {};
                cachedPiutangOrders[cIdx].payment.tempoBalance = newBalance;
                cachedPiutangOrders[cIdx].payment.installments = installments;
            }
        }
        window.cachedPiutangOrders = cachedPiutangOrders;

        // Update in-memory state gOrds utama
        if (Array.isArray(gOrds)) {
            let idx = gOrds.findIndex(o => o.orderId === orderId);
            if (idx !== -1) {
                gOrds[idx].payment.tempoBalance = newBalance;
                gOrds[idx].payment.installments = installments;
                if (newBalance <= 0) {
                    gOrds[idx].payment.paymentStatus = 'lunas';
                    gOrds[idx].status = 'Selesai';
                }
            }
        }

        // Jika modal detail sedang terbuka untuk nota ini, sinkronkan isinya seketika
        const detailModal = el('modal-tempo-detail');
        if (detailModal && !detailModal.classList.contains('hidden') && currentDetailOrderId === orderId) {
            if (newBalance <= 0) {
                window.closeTempoDetailModal();
            } else {
                const updatedOrder = cachedPiutangOrders.find(o => o.orderId === orderId);
                if (updatedOrder) renderTempoDetailModalContent(updatedOrder);
            }
        }

        hLoad();
        window.closeTempoPaymentModal();
        showToast('Pembayaran cicilan berhasil dicatat! 💰');

        // Segarkan data piutang
        if (window.rAdmPiutang) window.rAdmPiutang();
    } catch (err) {
        hLoad();
        console.error('Gagal mencatat cicilan:', err);
        showToast('Gagal memproses cicilan: ' + err.message);
    }
};

// Aliaskan payTempoInstallment ke openTempoPaymentModal untuk kompatibilitas penuh
window.payTempoInstallment = (orderId) => {
    window.openTempoPaymentModal(orderId);
};

/**
 * ══════════════════════════════════════════════════════════════════
 * 3. MODAL ATUR DENDA KETERLAMBATAN (modal-tempo-penalty)
 * ══════════════════════════════════════════════════════════════════
 */
export const openTempoPenaltyModal = (orderId) => {
    ensureTempoModals();
    const o = cachedPiutangOrders.find(x => x.orderId === orderId);
    if (!o) return showToast('Data piutang tidak ditemukan!');

    const calc = getTempoOrderCalculations(o);
    const modal = el('modal-tempo-penalty');
    const box = el('modal-tempo-penalty-box');
    const content = el('modal-tempo-penalty-content');
    if (!modal || !content) return;

    setH('modal-tempo-penalty-content', `
        <!-- DRAG PULL INDICATOR (NATIVE MOBILE SHEET) -->
        <div class="pull-indicator sm:hidden"></div>

        <!-- HEADER MODAL -->
        <div class="px-5 sm:px-6 pt-3 sm:pt-5 pb-4 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between shrink-0 bg-slate-50/70 dark:bg-slate-900/60">
            <div class="flex items-center gap-3">
                <div class="w-11 h-11 rounded-2xl flex items-center justify-center text-lg shrink-0 aspect-square shadow-xs" style="background: rgba(var(--color-primary-rgb), 0.12); color: var(--color-primary); border: 1px solid rgba(var(--color-primary-rgb), 0.25);">
                    <i class="fa-solid fa-percent"></i>
                </div>
                <div>
                    <h3 class="font-black text-base text-slate-800 dark:text-white tracking-tight">Atur Tarif Denda</h3>
                    <p class="text-xs text-slate-400">${esc(o.customer?.name || 'Pelanggan')} • Sisa: ${fCur(calc.sisa)}</p>
                </div>
            </div>
            <button onclick="window.closeTempoPenaltyModal()" class="w-9 h-9 rounded-full bg-slate-100 hover:bg-rose-100 hover:text-rose-500 dark:bg-slate-800 dark:hover:bg-rose-950/40 dark:hover:text-rose-400 text-slate-500 flex items-center justify-center transition-all cursor-pointer active:scale-95" aria-label="Tutup Modal">
                <i class="fa-solid fa-xmark text-sm"></i>
            </button>
        </div>

        <form id="tempo-penalty-form" onsubmit="window.submitTempoPenalty(event, '${o.orderId}')" class="flex-1 flex flex-col overflow-hidden">
            <div class="p-4 sm:p-6 space-y-4 overflow-y-auto flex-1 custom-scrollbar">
                <!-- INFO DENDA SAAT INI -->
                <div class="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-xs space-y-1">
                    <div class="flex justify-between">
                        <span class="text-slate-400">Tarif Saat Ini:</span>
                        <span class="font-bold text-slate-800 dark:text-white font-mono">${calc.rate}% / Hari</span>
                    </div>
                    <div class="flex justify-between">
                        <span class="text-slate-400">Hari Keterlambatan:</span>
                        <span class="font-bold text-slate-800 dark:text-white font-mono">${calc.daysLate} Hari</span>
                    </div>
                    <div class="flex justify-between pt-1 border-t border-slate-200/60 dark:border-slate-700">
                        <span class="text-rose-500 font-bold">Total Denda Akumulasi:</span>
                        <span class="font-bold font-mono text-rose-600 dark:text-rose-400">+${fCur(calc.latePenalty)}</span>
                    </div>
                </div>

                <!-- PRESET CHIPS TARIF DENDA -->
                <div>
                    <label class="block text-[10px] font-black uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1.5">Pilihan Cepat Tarif (% / Hari)</label>
                    <div class="grid grid-cols-4 gap-1.5">
                        <button type="button" onclick="document.getElementById('tempo-penalty-rate').value = 0" class="py-2 px-1 rounded-xl text-center text-xs font-bold border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 transition-all active:scale-95">
                            0% (Bebas)
                        </button>
                        <button type="button" onclick="document.getElementById('tempo-penalty-rate').value = 0.5" class="py-2 px-1 rounded-xl text-center text-xs font-bold border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 transition-all active:scale-95">
                            0.5%
                        </button>
                        <button type="button" onclick="document.getElementById('tempo-penalty-rate').value = 1" class="py-2 px-1 rounded-xl text-center text-xs font-bold border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 transition-all active:scale-95">
                            1% (Std)
                        </button>
                        <button type="button" onclick="document.getElementById('tempo-penalty-rate').value = 2" class="py-2 px-1 rounded-xl text-center text-xs font-bold border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 transition-all active:scale-95">
                            2%
                        </button>
                    </div>
                </div>

                <!-- INPUT PERSENTASE CUSTOM -->
                <div>
                    <label class="block text-[10px] font-black uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1.5">Tarif Persentase Baru (% / Hari) *</label>
                    <input 
                        type="number" 
                        step="0.01" 
                        min="0" 
                        id="tempo-penalty-rate" 
                        required 
                        value="${calc.rate}" 
                        class="admin-input bg-slate-50 dark:bg-slate-900 font-black text-lg text-slate-800 dark:text-white rounded-2xl"
                    >
                </div>
            </div>

            <!-- STICKY ACTION FOOTER (48PX) -->
            <div class="p-4 sm:p-5 border-t border-slate-100 dark:border-slate-800 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shrink-0 flex items-center justify-end gap-2.5" style="padding-bottom: max(1rem, env(safe-area-inset-bottom))">
                <button type="button" onclick="window.closeTempoPenaltyModal()" class="h-12 px-5 rounded-2xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 font-bold text-xs hover:bg-slate-100 dark:hover:bg-slate-800 transition-all cursor-pointer active:scale-95">
                    Batal
                </button>
                <button type="submit" class="h-12 px-6 rounded-2xl text-white font-bold text-xs shadow-glow transition-all active:scale-95 cursor-pointer flex items-center gap-2" style="background: var(--color-primary); box-shadow: 0 4px 14px rgba(var(--color-primary-rgb), 0.35);">
                    <i class="fa-solid fa-check"></i>
                    <span>Simpan Tarif Denda</span>
                </button>
            </div>
        </form>
    `);

    openModalAnim(modal, box);
    pushModalHistory('tempoPenalty');
};

export const closeTempoPenaltyModal = (fH = false) => {
    const modal = el('modal-tempo-penalty');
    const box = el('modal-tempo-penalty-box');
    if (!modal) return;
    requestCloseModal('tempoPenalty', fH, () => closeModalAnim(modal, box));
};

window.openTempoPenaltyModal = openTempoPenaltyModal;
window.closeTempoPenaltyModal = closeTempoPenaltyModal;

/**
 * Submit Pengaturan Denda
 */
window.submitTempoPenalty = async (e, orderId) => {
    e.preventDefault();
    const val = el('tempo-penalty-rate')?.value;
    let newRate = parseFloat(val);
    if (isNaN(newRate) || newRate < 0) return showToast('Persentase tidak valid!');

    sLoad('Menyimpan Denda...');
    try {
        await db.collection("freshmart_orders").doc(orderId).update({
            'payment.tempoPenaltyRate': newRate
        });

        // Update cache lokal
        const o = cachedPiutangOrders.find(x => x.orderId === orderId);
        if (o && o.payment) o.payment.tempoPenaltyRate = newRate;

        hLoad();
        window.closeTempoPenaltyModal();
        showToast('Persentase denda berhasil diperbarui!');
        window.rAdmPiutang();
    } catch (err) {
        hLoad();
        showToast('Gagal mengubah denda: ' + err.message);
    }
};

// Aliaskan editTempoPenalty ke openTempoPenaltyModal
window.editTempoPenalty = (orderId) => {
    window.openTempoPenaltyModal(orderId);
};

/**
 * Hentikan / Bekukan / Lanjutkan Denda Berjalan
 */
window.stopTempoPenalty = (orderId, latePenalty, isStopped) => {
    let title = 'Konfirmasi Denda';
    let msg = isStopped 
        ? 'Lanjutkan perhitungan denda otomatis berjalan?' 
        : 'Hentikan denda berjalan sekarang? (Nominal denda akan dibekukan di ' + fCur(latePenalty) + ')';
    let btn = isStopped ? 'Lanjutkan' : 'Bekukan';
    
    showConfirm(title, msg, async () => {
        sLoad('Menyimpan...');
        try {
            await db.collection("freshmart_orders").doc(orderId).update({
                'payment.tempoPenaltyStopped': !isStopped,
                'payment.tempoFixedPenalty': isStopped ? null : latePenalty
            });

            // Update in-memory
            const o = cachedPiutangOrders.find(x => x.orderId === orderId);
            if (o && o.payment) {
                o.payment.tempoPenaltyStopped = !isStopped;
                o.payment.tempoFixedPenalty = isStopped ? null : latePenalty;
            }

            showToast(isStopped ? 'Denda dilanjutkan!' : 'Denda berhasil dibekukan!');
            window.rAdmPiutang();
        } catch(e) {
            showToast('Gagal mengubah status denda: ' + e.message);
        }
        hLoad();
    }, btn, !isStopped);
};

/**
 * Preview Struk Nota Tempo
 */
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

/**
 * Lunasi Seluruh Sisa Tagihan Tempo
 */
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

/**
 * 1-Klik Tagih Konsolidasi Multi-Nota per Pelanggan via WhatsApp
 */
window.sendConsolidatedTempoWA = (customerKey) => {
    const custKey = String(customerKey || '').trim();
    if (!custKey) return showToast('Identitas pelanggan tidak valid!');

    const customerOrders = cachedPiutangOrders.filter(o => {
        const phone = String(o.customer?.phone || o.customer?.wa || '').replace(/\D/g, '');
        const name = String(o.customer?.name || '').toLowerCase().trim();
        const cleanKey = custKey.replace(/\D/g, '');
        if (cleanKey.length >= 8 && phone.includes(cleanKey)) return true;
        if (name && custKey.toLowerCase().includes(name)) return true;
        return false;
    });

    if (customerOrders.length === 0) return showToast('Tidak ada nota piutang aktif untuk pelanggan ini.');

    const sampleCust = customerOrders[0].customer || {};
    const rawWa = sampleCust.wa || sampleCust.phone || '';
    const waNum = normalizeWA(rawWa);
    if (!waNum) return showToast('Nomor WhatsApp pelanggan belum valid!');

    const storeName = appData.store?.name || "Toko Putri";
    const custName = sampleCust.name || "Pelanggan";

    let bankText = '';
    if (appData.banks && appData.banks.length > 0) {
        bankText = appData.banks.map(b => `• *Bank ${b.bankName}*: ${b.bankAccount} (a.n ${b.bankOwner})`).join('\n');
    } else {
        bankText = 'Silakan hubungi admin/kasir untuk konfirmasi nomor rekening transfer.';
    }

    let grandTotalAkumulasi = 0;
    let totalDendaAkumulasi = 0;
    let anyLate = false;

    let itemsText = customerOrders.map((o, idx) => {
        const calc = getTempoOrderCalculations(o);
        grandTotalAkumulasi += calc.totalAkhir;
        totalDendaAkumulasi += calc.latePenalty;
        if (calc.isLate) anyLate = true;

        const dueStr = calc.dueDate ? new Date(calc.dueDate).toLocaleDateString('id-ID', { day: '2-digit', month: 'short', year: 'numeric' }) : "-";
        let statusStr = calc.isLate ? `⚠️ TERLAMBAT ${calc.daysLate} HARI` : (calc.isDueSoon ? `⏳ H-${calc.daysLeft}` : '✅ Berjalan');

        let noteLine = `*${idx + 1}. Nota #${o.orderId}* (${statusStr})\n` +
                       `   • Jatuh Tempo: ${dueStr}\n` +
                       `   • Sisa Pokok: ${fCur(calc.sisa)}\n`;
        if (calc.latePenalty > 0) {
            noteLine += `   • Denda: ${fCur(calc.latePenalty)}\n`;
        }
        noteLine += `   • *Subtotal Wajib Bayar: ${fCur(calc.totalAkhir)}*`;
        return noteLine;
    }).join('\n\n');

    let msg = `*REKAPITULASI KARTU PIUTANG - ${storeName.toUpperCase()}*\n\n` +
              `Yth. Bpk/Ibu *${custName}*,\n` +
              `Berikut rincian seluruh tagihan tempo Anda yang masih aktif (${customerOrders.length} Nota) di *${storeName}*:\n\n` +
              `${itemsText}\n\n` +
              `══════════════════════\n` +
              `💰 *TOTAL KESELURUHAN PIUTANG: ${fCur(grandTotalAkumulasi)}*\n` +
              (totalDendaAkumulasi > 0 ? `(Termasuk total denda: ${fCur(totalDendaAkumulasi)})\n` : '') +
              `══════════════════════\n\n` +
              `💳 *Pembayaran dapat ditransfer ke rekening resmi kami:*\n` +
              `${bankText}\n\n` +
              `Mohon kesediaannya untuk melakukan pembayaran dan mengirimkan bukti transfer ke WhatsApp ini. Terima kasih banyak atas kepercayaan dan kerjasamanya. 🙏`;

    if (typeof window.openWhatsApp === 'function') {
        window.openWhatsApp(waNum, msg);
    } else {
        openWhatsApp(waNum, msg);
    }
};

window.switchTempoMainTab = (tabKey) => {
    activeTempoMainTab = tabKey;
    renderTempoContent();
};

window.setTempoFilter = (filterKey) => {
    activeTempoFilter = filterKey;
    renderTempoContent();
};

window.setInstallmentPeriod = (periodKey) => {
    activeInstallmentPeriod = periodKey;
    renderActiveTempoTabBody();
};

window.setInstallmentMethod = (methodKey) => {
    activeInstallmentMethod = methodKey;
    renderActiveTempoTabBody();
};

window.onTempoSearch = (val) => {
    tempoSearchQuery = val || '';
    if (activeTempoMainTab === 'orders') {
        renderTempoCardsOnly();
    } else {
        renderActiveTempoTabBody();
    }
};

/**
 * Filter & Render Kartu Piutang
 */
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

/**
 * Render Kartu Piutang Individual
 */
const renderTempoCardItem = (o) => {
    const calc = getTempoOrderCalculations(o);
    const waNum = normalizeWA(o.customer?.wa || '');
    const monogram = getCustomerMonogram(o.customer?.name || 'Pelanggan');
    const dueStr = calc.dueDate ? formatDateID(calc.dueDate) : '-';
    const custKey = esc(o.customer?.phone || o.customer?.wa || o.customer?.name || '');

    let badgeHTML = '';
    let borderClass = 'border-slate-200 dark:border-slate-700/80';

    if (calc.isLate) {
        borderClass = 'border-rose-400 dark:border-rose-600 shadow-[0_0_15px_rgba(225,29,72,0.12)]';
        badgeHTML = `<div class="absolute -right-7 top-4 bg-rose-600 text-white text-[9px] font-bold uppercase tracking-widest px-8 py-1 rotate-45 shadow-sm">TERLAMBAT ${calc.daysLate} HARI</div>`;
    } else if (calc.isDueSoon) {
        borderClass = 'border-amber-400 dark:border-amber-600 shadow-[0_0_15px_rgba(245,158,11,0.12)]';
        badgeHTML = `<div class="absolute -right-7 top-4 bg-amber-500 text-white text-[9px] font-bold uppercase tracking-widest px-8 py-1 rotate-45 shadow-sm">H-${calc.daysLeft <= 0 ? '0 (HARI INI)' : calc.daysLeft}</div>`;
    } else {
        badgeHTML = `<div class="inline-block px-2.5 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider text-[var(--color-primary)] border" style="background: rgba(var(--color-primary-rgb), 0.08); border-color: rgba(var(--color-primary-rgb), 0.25);">Sisa ${calc.daysLeft} Hari</div>`;
    }

    return `
    <div class="bg-white dark:bg-slate-800 p-4 sm:p-5 rounded-3xl border ${borderClass} relative overflow-hidden group hover:-translate-y-1 transition-all duration-300 shadow-sm flex flex-col justify-between cursor-pointer" onclick="window.openTempoDetailModal('${o.orderId}')">
        ${badgeHTML}
        
        <div>
            <!-- HEADER KARTU DENGAN AVATAR MONOGRAM -->
            <div class="flex items-start gap-3 mb-3 pr-10">
                <div class="w-10 h-10 rounded-2xl flex items-center justify-center text-xs font-black shrink-0 aspect-square shadow-2xs" style="background: rgba(var(--color-primary-rgb), 0.12); color: var(--color-primary); border: 1px solid rgba(var(--color-primary-rgb), 0.25);">
                    ${monogram}
                </div>
                <div class="min-w-0 flex-1">
                    <p class="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Nota #${o.orderId}</p>
                    <h3 class="font-bold text-slate-800 dark:text-slate-100 mt-0.5 uppercase text-sm truncate">${esc(o.customer?.name || 'Anonim')}</h3>
                    <div class="flex items-center gap-2 mt-1 flex-wrap" onclick="event.stopPropagation()">
                        <p class="text-[11px] font-bold text-slate-500 flex items-center gap-1">
                            <i class="fa-brands fa-whatsapp text-emerald-500"></i>
                            <a href="javascript:void(0)" onclick="window.sendSmartTempoWA('${o.orderId}')" class="hover:underline text-slate-600 dark:text-slate-300 font-mono">+${esc(waNum || '-')}</a>
                        </p>
                        <span class="text-[9px] font-bold px-2 py-0.5 rounded-xl uppercase tracking-widest border ${o.customerType === 'Member' ? 'text-amber-600 bg-amber-50 dark:bg-amber-900/20 border-amber-200 dark:border-amber-800' : 'text-slate-500 bg-slate-100 dark:bg-slate-800 border-slate-200 dark:border-slate-700'}">
                            ${o.customerType === 'Member' ? '<i class="fa-solid fa-star text-amber-400 mr-1"></i>Member' : '<i class="fa-solid fa-user mr-1"></i>Umum'}
                        </span>
                    </div>
                </div>
            </div>
            
            <!-- RINGKASAN JATUH TEMPO & POKOK -->
            <div class="space-y-2 mb-3 bg-slate-50 dark:bg-slate-900/50 p-3 rounded-2xl border border-slate-100 dark:border-slate-700/50">
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
            
            <!-- TOTAL SISA TAGIHAN HIGHLIGHT -->
            <div class="flex justify-between items-center ${calc.isLate ? 'bg-rose-50 text-rose-600 dark:bg-rose-950/30 dark:text-rose-400 border-rose-100 dark:border-rose-900/40' : 'bg-slate-100 dark:bg-slate-700/60 text-slate-800 dark:text-white border-slate-200 dark:border-slate-700'} p-3 rounded-2xl border mb-3">
                <span class="text-[10px] font-black uppercase tracking-wider">Total Tagihan:</span>
                <span class="text-sm font-black font-mono tracking-tight">${fCur(calc.totalAkhir)}</span>
            </div>
        </div>
        
        <!-- ACTION BAR TOUCH ERGONOMIS 2-BARIS LEGA -->
        <div class="space-y-2 pt-2 border-t border-slate-100 dark:border-slate-700/60" onclick="event.stopPropagation()">
            <!-- Baris 1: Rincian, Nota A4, Struk, Tagih WA -->
            <div class="grid grid-cols-4 gap-1.5">
                <button type="button" onclick="window.openTempoDetailModal('${o.orderId}')" class="py-2 px-1 rounded-xl font-bold text-[11px] transition-all active:scale-95 border flex flex-col sm:flex-row items-center justify-center gap-1 cursor-pointer shadow-2xs text-center" style="background: rgba(var(--color-primary-rgb), 0.08); color: var(--color-primary); border-color: rgba(var(--color-primary-rgb), 0.25);" title="Buka Rincian Nota &amp; Histori">
                    <i class="fa-solid fa-eye text-xs"></i>
                    <span class="truncate">Rincian</span>
                </button>
                <button type="button" onclick="if(typeof window.openDocPreview==='function') window.openDocPreview('tempo_invoice', '${o.orderId}');" class="py-2 px-1 rounded-xl bg-blue-50 hover:bg-blue-100 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-800 flex flex-col sm:flex-row items-center justify-center gap-1 text-[11px] font-bold transition-all cursor-pointer shadow-2xs active:scale-95 text-center" title="Cetak Nota Resmi A4 / PDF / WA">
                    <i class="fa-solid fa-file-invoice text-xs"></i>
                    <span class="truncate">Nota A4</span>
                </button>
                <button type="button" onclick="if(typeof window.printTempoReceiptDirect==='function'){window.printTempoReceiptDirect('${o.orderId}');}else{window.previewTempoReceipt('${o.orderId}');}" class="py-2 px-1 bg-amber-500 hover:bg-amber-600 text-white rounded-xl flex flex-col sm:flex-row items-center justify-center gap-1 text-[11px] font-bold shadow-2xs transition-all active:scale-95 cursor-pointer text-center" title="Cetak Struk Thermal Nota Tempo">
                    <i class="fa-solid fa-print text-xs"></i>
                    <span class="truncate">Struk</span>
                </button>
                <button type="button" onclick="window.sendSmartTempoWA('${o.orderId}')" class="py-2 px-1 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl flex flex-col sm:flex-row items-center justify-center gap-1 text-[11px] font-bold transition-all cursor-pointer shadow-2xs active:scale-95 text-center" title="Kirim Tagihan Otomatis WhatsApp">
                    <i class="fa-brands fa-whatsapp text-xs"></i>
                    <span class="truncate">WA</span>
                </button>
            </div>

            <!-- Baris 2: Cicil, Lunas, & Kartu Pelanggan -->
            <div class="grid grid-cols-3 gap-1.5">
                <button type="button" onclick="window.openTempoPaymentModal('${o.orderId}')" class="bg-white dark:bg-slate-700 border border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[rgba(var(--color-primary-rgb),0.08)] rounded-xl py-2 flex items-center justify-center gap-1 text-xs font-bold transition-all active:scale-95 shadow-2xs cursor-pointer">
                    <i class="fa-solid fa-money-bill-wave text-xs"></i> Cicil
                </button>
                <button type="button" onclick="window.markTempoPaid('${o.orderId}')" class="text-white rounded-xl py-2 flex items-center justify-center gap-1 text-xs font-bold shadow-sm transition-all active:scale-95 cursor-pointer" style="background: var(--color-primary); box-shadow: 0 2px 8px rgba(var(--color-primary-rgb), 0.3);">
                    <i class="fa-solid fa-check-double text-xs"></i> Lunas
                </button>
                <button type="button" onclick="if(typeof window.openDocPreview==='function') window.openDocPreview('tempo_customer_ledger', '${custKey}');" class="bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 dark:hover:bg-slate-600 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-600 rounded-xl py-2 flex items-center justify-center gap-1 text-xs font-bold transition-all active:scale-95 shadow-2xs cursor-pointer" title="Cetak Kartu Piutang Pelanggan">
                    <i class="fa-solid fa-address-book text-xs text-indigo-500"></i> Kartu
                </button>
            </div>
        </div>
    </div>`;
};

/**
 * Render Tab 2: Kartu Piutang per Pelanggan (Customer Receivable Ledger)
 */
const renderTempoCustomersTab = () => {
    // 1. Kelompokkan order per pelanggan
    const customerMap = new Map();

    cachedPiutangOrders.forEach(o => {
        const phone = String(o.customer?.phone || o.customer?.wa || '').trim();
        const name = String(o.customer?.name || 'Pelanggan Anonim').trim();
        const key = phone || name;

        if (!customerMap.has(key)) {
            customerMap.set(key, {
                key,
                name,
                phone,
                wa: o.customer?.wa || phone,
                customerType: o.customerType || (o.customer?.isMember ? 'Member' : 'Umum'),
                orders: [],
                totalAwal: 0,
                totalPaid: 0,
                totalSisaPokok: 0,
                totalDenda: 0,
                totalWajibBayar: 0,
                hasLate: false,
                hasDueSoon: false
            });
        }

        const cData = customerMap.get(key);
        const calc = getTempoOrderCalculations(o);
        const awal = (o.payment?.grandTotal && o.payment.grandTotal > 0) ? o.payment.grandTotal : (parseFloat(o.total) || calc.sisa);
        const paid = (o.payment?.installments || []).reduce((acc, ins) => acc + (parseFloat(ins.amount) || 0), 0);

        cData.orders.push(o);
        cData.totalAwal += awal;
        cData.totalPaid += paid;
        cData.totalSisaPokok += calc.sisa;
        cData.totalDenda += calc.latePenalty;
        cData.totalWajibBayar += calc.totalAkhir;

        if (calc.isLate) cData.hasLate = true;
        if (calc.isDueSoon) cData.hasDueSoon = true;
    });

    let customers = Array.from(customerMap.values());

    // Filter pencarian
    if (tempoSearchQuery.trim()) {
        const q = tempoSearchQuery.trim().toLowerCase();
        customers = customers.filter(c => 
            c.name.toLowerCase().includes(q) || 
            c.phone.toLowerCase().includes(q) || 
            c.orders.some(o => (o.orderId || '').toLowerCase().includes(q))
        );
    }

    // Urutkan: yang ada keterlambatan di atas, lalu berdasarkan total piutang terbesar
    customers.sort((a, b) => {
        if (a.hasLate && !b.hasLate) return -1;
        if (!a.hasLate && b.hasLate) return 1;
        return b.totalWajibBayar - a.totalWajibBayar;
    });

    if (customers.length === 0) {
        return `
            <div class="bg-white dark:bg-slate-800 p-10 text-center rounded-3xl border border-slate-200 dark:border-slate-700 shadow-sm">
                <div class="w-16 h-16 bg-slate-100 dark:bg-slate-700/50 text-slate-400 rounded-full flex items-center justify-center mx-auto mb-3">
                    <i class="fa-solid fa-users-slash text-2xl"></i>
                </div>
                <h4 class="font-bold text-slate-700 dark:text-slate-200 text-sm uppercase tracking-wider">Tidak Ada Data Pelanggan</h4>
                <p class="text-slate-500 dark:text-slate-400 mt-1 text-xs font-medium">Tidak ada pelanggan berpiutang yang cocok dengan kata kunci pencarian.</p>
            </div>
        `;
    }

    return `
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            ${customers.map(c => {
                const monogram = getCustomerMonogram(c.name);
                const waNum = normalizeWA(c.wa || c.phone || '');
                let statusBadge = '';
                let borderClass = 'border-slate-200 dark:border-slate-700/80';

                if (c.hasLate) {
                    borderClass = 'border-rose-400 dark:border-rose-600 shadow-[0_0_15px_rgba(225,29,72,0.1)]';
                    statusBadge = `<span class="px-2.5 py-0.5 rounded-full text-[9px] font-black uppercase tracking-wider bg-rose-50 text-rose-600 dark:bg-rose-950/40 dark:text-rose-400 border border-rose-200 dark:border-rose-800 flex items-center gap-1"><i class="fa-solid fa-triangle-exclamation"></i> Ada Terlambat</span>`;
                } else if (c.hasDueSoon) {
                    borderClass = 'border-amber-400 dark:border-amber-600 shadow-[0_0_15px_rgba(245,158,11,0.1)]';
                    statusBadge = `<span class="px-2.5 py-0.5 rounded-full text-[9px] font-black uppercase tracking-wider bg-amber-50 text-amber-600 dark:bg-amber-950/40 dark:text-amber-400 border border-amber-200 dark:border-amber-800 flex items-center gap-1"><i class="fa-solid fa-clock"></i> Jatuh Tempo Dekat</span>`;
                } else {
                    statusBadge = `<span class="px-2.5 py-0.5 rounded-full text-[9px] font-black uppercase tracking-wider bg-emerald-50 text-emerald-600 dark:bg-emerald-950/40 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800 flex items-center gap-1"><i class="fa-solid fa-circle-check"></i> Berjalan Lancar</span>`;
                }

                return `
                <div class="bg-white dark:bg-slate-800 p-4 sm:p-5 rounded-3xl border ${borderClass} shadow-sm flex flex-col justify-between space-y-4">
                    <div>
                        <!-- Header Pelanggan -->
                        <div class="flex items-start justify-between gap-3">
                            <div class="flex items-center gap-3 min-w-0">
                                <div class="w-11 h-11 rounded-2xl flex items-center justify-center text-sm font-black shrink-0 aspect-square shadow-2xs" style="background: rgba(var(--color-primary-rgb), 0.12); color: var(--color-primary); border: 1px solid rgba(var(--color-primary-rgb), 0.25);">
                                    ${monogram}
                                </div>
                                <div class="min-w-0">
                                    <h3 class="font-bold text-slate-800 dark:text-slate-100 text-sm truncate uppercase">${esc(c.name)}</h3>
                                    <div class="flex items-center gap-2 mt-0.5 flex-wrap">
                                        <p class="text-[11px] font-bold text-slate-500 font-mono flex items-center gap-1">
                                            <i class="fa-brands fa-whatsapp text-emerald-500"></i> +${esc(waNum || '-')}
                                        </p>
                                        <span class="text-[9px] font-bold px-2 py-0.2 rounded-lg uppercase tracking-wider border ${c.customerType === 'Member' ? 'text-amber-600 bg-amber-50 dark:bg-amber-900/20 border-amber-200 dark:border-amber-800' : 'text-slate-500 bg-slate-100 dark:bg-slate-800 border-slate-200 dark:border-slate-700'}">
                                            ${c.customerType}
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div class="shrink-0 text-right">
                                <span class="inline-block px-2.5 py-1 rounded-xl bg-slate-100 dark:bg-slate-700/60 text-slate-700 dark:text-slate-200 text-[11px] font-black font-mono">
                                    ${c.orders.length} Nota
                                </span>
                            </div>
                        </div>

                        <!-- Status Badge -->
                        <div class="mt-3 flex items-center justify-between gap-2 pt-2 border-t border-slate-100 dark:border-slate-700/60">
                            ${statusBadge}
                            <span class="text-[10px] text-slate-400 font-bold">Total Sisa Pokok: <b class="font-mono text-slate-700 dark:text-slate-200">${fCur(c.totalSisaPokok)}</b></span>
                        </div>

                        <!-- Ringkasan Saldo Akumulasi -->
                        <div class="mt-3 p-3.5 rounded-2xl ${c.hasLate ? 'bg-rose-50/70 dark:bg-rose-950/30 border border-rose-100 dark:border-rose-900/50' : 'bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-700/60'}">
                            <div class="flex items-center justify-between text-xs">
                                <span class="font-bold text-slate-500">Akumulasi Tagihan:</span>
                                <span class="font-black text-sm font-mono ${c.hasLate ? 'text-rose-600 dark:text-rose-400' : 'text-slate-900 dark:text-white'}">${fCur(c.totalWajibBayar)}</span>
                            </div>
                            ${c.totalDenda > 0 ? `
                            <div class="flex items-center justify-between text-[11px] text-rose-600 dark:text-rose-400 font-medium mt-1 pt-1 border-t border-rose-200/60 dark:border-rose-900/40">
                                <span>Termasuk Denda Berjalan:</span>
                                <span class="font-bold font-mono">+${fCur(c.totalDenda)}</span>
                            </div>` : ''}
                        </div>

                        <!-- Mini Daftar Nota -->
                        <div class="mt-3 space-y-1.5">
                            <span class="text-[10px] font-black uppercase tracking-wider text-slate-400 block">Rincian Nota Aktif:</span>
                            <div class="space-y-1 max-h-28 overflow-y-auto custom-scrollbar">
                                ${c.orders.map(o => {
                                    const oCalc = getTempoOrderCalculations(o);
                                    const oDue = oCalc.dueDate ? formatDateID(oCalc.dueDate) : '-';
                                    return `
                                        <div onclick="window.openTempoDetailModal('${o.orderId}')" class="p-2 rounded-xl bg-white dark:bg-slate-700/50 border border-slate-100 dark:border-slate-700 flex items-center justify-between text-[11px] hover:border-[var(--color-primary)] transition-all cursor-pointer">
                                            <div class="flex items-center gap-1.5">
                                                <i class="fa-solid fa-file-invoice text-slate-400 text-[10px]"></i>
                                                <span class="font-bold font-mono text-slate-700 dark:text-slate-200">#${esc(o.orderId)}</span>
                                                <span class="text-[9px] text-slate-400 font-medium font-mono">(${oDue})</span>
                                            </div>
                                            <span class="font-bold font-mono ${oCalc.isLate ? 'text-rose-600' : 'text-slate-800 dark:text-slate-100'}">${fCur(oCalc.totalAkhir)}</span>
                                        </div>
                                    `;
                                }).join('')}
                            </div>
                        </div>
                    </div>

                    <!-- Tombol Aksi Tab Pelanggan -->
                    <div class="pt-2 border-t border-slate-100 dark:border-slate-700/60 grid grid-cols-2 gap-2">
                        <button type="button" onclick="if(typeof window.openDocPreview==='function') window.openDocPreview('tempo_customer_ledger', '${esc(c.phone || c.name)}');" class="py-2.5 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 dark:hover:bg-slate-600 text-slate-800 dark:text-slate-100 font-bold text-xs flex items-center justify-center gap-1.5 transition-all active:scale-95 cursor-pointer shadow-2xs" title="Cetak Lembar Kartu Piutang Resmi A4 / PDF / WA">
                            <i class="fa-solid fa-file-invoice text-indigo-500"></i>
                            <span>Cetak Kartu A4</span>
                        </button>
                        <button type="button" onclick="window.sendConsolidatedTempoWA('${esc(c.phone || c.name)}')" class="py-2.5 px-3 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-all active:scale-95 cursor-pointer shadow-2xs" title="Kirim Tagihan WhatsApp Seluruh Nota">
                            <i class="fa-brands fa-whatsapp text-sm"></i>
                            <span>Tagih Semua WA</span>
                        </button>
                    </div>
                </div>
                `;
            }).join('')}
        </div>
    `;
};

/**
 * Render Tab 3: Histori Rincian Cicilan Masuk (Installment History Log)
 */
const renderTempoInstallmentsTab = () => {
    // 1. Himpun seluruh cicilan dari seluruh nota tempo
    let allInstallments = [];
    cachedPiutangOrders.forEach(o => {
        const installments = o.payment?.installments || [];
        installments.forEach((ins, idx) => {
            allInstallments.push({
                ...ins,
                installmentIndex: idx + 1,
                orderId: o.orderId,
                customerName: o.customer?.name || 'Pelanggan',
                customerPhone: o.customer?.phone || o.customer?.wa || '',
                customerType: o.customerType || (o.customer?.isMember ? 'Member' : 'Umum'),
                orderDate: o.dateString
            });
        });
    });

    // 2. Filter Periode
    const now = new Date();
    const startOfToday = new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime();
    const startOfWeek = Date.now() - (7 * 24 * 60 * 60 * 1000);
    const startOfMonth = Date.now() - (30 * 24 * 60 * 60 * 1000);

    let filtered = allInstallments.filter(ins => {
        const insTime = new Date(ins.date || 0).getTime();

        if (activeInstallmentPeriod === 'today' && insTime < startOfToday) return false;
        if (activeInstallmentPeriod === 'week' && insTime < startOfWeek) return false;
        if (activeInstallmentPeriod === 'month' && insTime < startOfMonth) return false;

        const method = (ins.method || 'cash').toLowerCase();
        if (activeInstallmentMethod !== 'all' && method !== activeInstallmentMethod) return false;

        if (tempoSearchQuery.trim()) {
            const q = tempoSearchQuery.trim().toLowerCase();
            const cName = ins.customerName.toLowerCase();
            const cPhone = ins.customerPhone.toLowerCase();
            const ordId = ins.orderId.toLowerCase();
            const notes = (ins.notes || '').toLowerCase();
            if (!cName.includes(q) && !cPhone.includes(q) && !ordId.includes(q) && !notes.includes(q)) return false;
        }

        return true;
    });

    // Urutkan kronologis terbaru di paling atas
    filtered.sort((a, b) => new Date(b.date || 0) - new Date(a.date || 0));

    // Hitung total cicilan masuk pada filter aktif
    const totalCollected = filtered.reduce((acc, curr) => acc + (parseFloat(curr.amount) || 0), 0);

    return `
        <div class="space-y-4">
            <!-- Filter Bar Histori Cicilan (Periode & Metode) -->
            <div class="bg-white dark:bg-slate-800 p-4 rounded-3xl border border-slate-200/90 dark:border-slate-700 shadow-sm space-y-3">
                <div class="flex flex-wrap items-center justify-between gap-3">
                    <!-- Filter Periode -->
                    <div class="flex items-center gap-1.5 overflow-x-auto pb-1 hide-scrollbar text-xs font-bold uppercase tracking-wider">
                        <button onclick="window.setInstallmentPeriod('all')" class="px-3 py-1.5 rounded-xl border transition-all cursor-pointer ${activeInstallmentPeriod === 'all' ? 'text-white border-transparent' : 'bg-slate-50 dark:bg-slate-900 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700'}" style="${activeInstallmentPeriod === 'all' ? 'background: var(--color-primary);' : ''}">
                            Semua Waktu
                        </button>
                        <button onclick="window.setInstallmentPeriod('today')" class="px-3 py-1.5 rounded-xl border transition-all cursor-pointer ${activeInstallmentPeriod === 'today' ? 'text-white border-transparent' : 'bg-slate-50 dark:bg-slate-900 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700'}" style="${activeInstallmentPeriod === 'today' ? 'background: var(--color-primary);' : ''}">
                            Hari Ini
                        </button>
                        <button onclick="window.setInstallmentPeriod('week')" class="px-3 py-1.5 rounded-xl border transition-all cursor-pointer ${activeInstallmentPeriod === 'week' ? 'text-white border-transparent' : 'bg-slate-50 dark:bg-slate-900 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700'}" style="${activeInstallmentPeriod === 'week' ? 'background: var(--color-primary);' : ''}">
                            7 Hari Terakhir
                        </button>
                        <button onclick="window.setInstallmentPeriod('month')" class="px-3 py-1.5 rounded-xl border transition-all cursor-pointer ${activeInstallmentPeriod === 'month' ? 'text-white border-transparent' : 'bg-slate-50 dark:bg-slate-900 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700'}" style="${activeInstallmentPeriod === 'month' ? 'background: var(--color-primary);' : ''}">
                            Bulan Ini
                        </button>
                    </div>

                    <!-- Filter Metode Bayar -->
                    <div class="flex items-center gap-1.5 overflow-x-auto pb-1 hide-scrollbar text-xs font-bold uppercase tracking-wider">
                        <button onclick="window.setInstallmentMethod('all')" class="px-2.5 py-1.5 rounded-xl border text-[10px] transition-all cursor-pointer ${activeInstallmentMethod === 'all' ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900 border-transparent' : 'bg-slate-50 dark:bg-slate-900 text-slate-500 border-slate-200 dark:border-slate-700'}">
                            Semua Metode
                        </button>
                        <button onclick="window.setInstallmentMethod('cash')" class="px-2.5 py-1.5 rounded-xl border text-[10px] transition-all cursor-pointer ${activeInstallmentMethod === 'cash' ? 'bg-emerald-600 text-white border-transparent' : 'bg-slate-50 dark:bg-slate-900 text-slate-500 border-slate-200 dark:border-slate-700'}">
                            💵 Tunai
                        </button>
                        <button onclick="window.setInstallmentMethod('transfer')" class="px-2.5 py-1.5 rounded-xl border text-[10px] transition-all cursor-pointer ${activeInstallmentMethod === 'transfer' ? 'bg-blue-600 text-white border-transparent' : 'bg-slate-50 dark:bg-slate-900 text-slate-500 border-slate-200 dark:border-slate-700'}">
                            🏦 Transfer
                        </button>
                        <button onclick="window.setInstallmentMethod('qris')" class="px-2.5 py-1.5 rounded-xl border text-[10px] transition-all cursor-pointer ${activeInstallmentMethod === 'qris' ? 'bg-purple-600 text-white border-transparent' : 'bg-slate-50 dark:bg-slate-900 text-slate-500 border-slate-200 dark:border-slate-700'}">
                            📱 QRIS
                        </button>
                    </div>
                </div>

                <!-- Total Cicilan Terkumpul Highlight Strip -->
                <div class="pt-3 border-t border-slate-100 dark:border-slate-700/60 flex items-center justify-between flex-wrap gap-2">
                    <span class="text-xs font-bold text-slate-500 dark:text-slate-400">
                        Menampilkan <b class="text-slate-800 dark:text-slate-200">${filtered.length}</b> transaksi cicilan
                    </span>
                    <div class="flex items-center gap-2">
                        <span class="text-xs font-bold text-slate-500">Total Uang Cicilan Masuk:</span>
                        <span class="text-base font-black font-mono text-emerald-600 dark:text-emerald-400">${fCur(totalCollected)}</span>
                    </div>
                </div>
            </div>

            <!-- Tabel / Card List Cicilan -->
            ${filtered.length === 0 ? `
                <div class="bg-white dark:bg-slate-800 p-10 text-center rounded-3xl border border-slate-200 dark:border-slate-700 shadow-sm">
                    <div class="w-16 h-16 bg-slate-100 dark:bg-slate-700/50 text-slate-400 rounded-full flex items-center justify-center mx-auto mb-3">
                        <i class="fa-solid fa-receipt text-2xl"></i>
                    </div>
                    <h4 class="font-bold text-slate-700 dark:text-slate-200 text-sm uppercase tracking-wider">Tidak Ada Transaksi Cicilan</h4>
                    <p class="text-slate-500 dark:text-slate-400 mt-1 text-xs font-medium">Belum ada cicilan yang tercatat untuk filter periode atau kata kunci ini.</p>
                </div>
            ` : `
                <!-- Mobile Card List -->
                <div class="sm:hidden space-y-2.5">
                    ${filtered.map(ins => {
                        const dateStr = formatDateTimeID(ins.date);
                        const method = (ins.method || 'cash').toUpperCase();
                        return `
                        <div class="bg-white dark:bg-slate-800 p-4 rounded-2xl border border-slate-200/90 dark:border-slate-700 shadow-2xs space-y-2">
                            <div class="flex items-start justify-between gap-2">
                                <div>
                                    <h4 class="font-bold text-xs text-slate-800 dark:text-slate-100">${esc(ins.customerName)}</h4>
                                    <p class="text-[10px] text-slate-400 font-mono mt-0.5">${dateStr}</p>
                                </div>
                                <span class="text-sm font-black font-mono text-emerald-600 dark:text-emerald-400">+${fCur(ins.amount)}</span>
                            </div>
                            <div class="flex items-center justify-between text-[11px] pt-2 border-t border-slate-100 dark:border-slate-700/60">
                                <span class="font-mono text-slate-500">Nota: <a href="javascript:void(0)" onclick="window.openTempoDetailModal('${ins.orderId}')" class="font-bold text-[var(--color-primary)] hover:underline">#${esc(ins.orderId)}</a></span>
                                <span class="px-2 py-0.5 rounded-lg text-[10px] font-bold uppercase tracking-wider bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300">
                                    ${method}
                                </span>
                            </div>
                            ${ins.notes ? `<p class="text-[10px] italic text-slate-500 bg-slate-50 dark:bg-slate-900/40 p-2 rounded-xl border border-slate-100 dark:border-slate-800">${esc(ins.notes)}</p>` : ''}
                            <div class="pt-2 flex items-center justify-end gap-1.5">
                                <button type="button" onclick="window.openTempoDetailModal('${ins.orderId}')" class="px-2.5 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 text-[10px] font-bold hover:bg-slate-50 transition-all cursor-pointer">
                                    <i class="fa-solid fa-eye mr-1"></i>Detail Nota
                                </button>
                                <button type="button" onclick="if(typeof window.printTempoReceiptDirect==='function'){window.printTempoReceiptDirect('${ins.orderId}');}else{window.previewTempoReceipt('${ins.orderId}');}" class="px-2.5 py-1.5 rounded-xl bg-amber-500 text-white text-[10px] font-bold hover:bg-amber-600 transition-all cursor-pointer">
                                    <i class="fa-solid fa-print mr-1"></i>Struk
                                </button>
                            </div>
                        </div>
                        `;
                    }).join('')}
                </div>

                <!-- Desktop Table -->
                <div class="hidden sm:block bg-white dark:bg-slate-800 rounded-3xl border border-slate-200/90 dark:border-slate-700 overflow-hidden shadow-sm">
                    <table class="w-full text-xs text-left">
                        <thead class="bg-slate-50 dark:bg-slate-900/60 text-slate-400 uppercase text-[10px] font-bold border-b border-slate-200 dark:border-slate-700">
                            <tr>
                                <th class="py-3 px-4">Tgl &amp; Waktu</th>
                                <th class="py-3 px-3">Pelanggan</th>
                                <th class="py-3 px-3">ID Nota</th>
                                <th class="py-3 px-3 text-center">Metode</th>
                                <th class="py-3 px-3 text-right">Jumlah Cicilan</th>
                                <th class="py-3 px-3">Penerima / Kasir</th>
                                <th class="py-3 px-4 text-center">Aksi</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-slate-100 dark:divide-slate-700/60 font-medium">
                            ${filtered.map(ins => {
                                const dateStr = formatDateTimeID(ins.date);
                                const method = (ins.method || 'cash').toUpperCase();
                                return `
                                <tr class="hover:bg-slate-50/50 dark:hover:bg-slate-700/30 transition-colors">
                                    <td class="py-3 px-4 font-mono text-slate-500 whitespace-nowrap">${dateStr}</td>
                                    <td class="py-3 px-3">
                                        <span class="font-bold text-slate-800 dark:text-slate-100 block">${esc(ins.customerName)}</span>
                                        <span class="text-[10px] font-mono text-slate-400">${esc(ins.customerPhone || '-')}</span>
                                    </td>
                                    <td class="py-3 px-3 font-mono font-bold">
                                        <a href="javascript:void(0)" onclick="window.openTempoDetailModal('${ins.orderId}')" class="text-[var(--color-primary)] hover:underline">#${esc(ins.orderId)}</a>
                                    </td>
                                    <td class="py-3 px-3 text-center">
                                        <span class="px-2 py-0.5 rounded-lg text-[10px] font-bold uppercase tracking-wider bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300">
                                            ${method}
                                        </span>
                                    </td>
                                    <td class="py-3 px-3 text-right font-black font-mono text-emerald-600 dark:text-emerald-400 whitespace-nowrap">
                                        +${fCur(ins.amount)}
                                    </td>
                                    <td class="py-3 px-3 text-slate-600 dark:text-slate-300">
                                        <span>${esc(ins.cashierName || 'Kasir')}</span>
                                        ${ins.notes ? `<span class="block text-[10px] italic text-slate-400 truncate max-w-[150px]" title="${esc(ins.notes)}">${esc(ins.notes)}</span>` : ''}
                                    </td>
                                    <td class="py-3 px-4 text-center whitespace-nowrap">
                                        <div class="flex items-center justify-center gap-1.5">
                                            <button type="button" onclick="window.openTempoDetailModal('${ins.orderId}')" class="p-1.5 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-600 hover:text-[var(--color-primary)] dark:text-slate-300 text-xs transition-all cursor-pointer" title="Buka Detail Nota">
                                                <i class="fa-solid fa-eye"></i>
                                            </button>
                                            <button type="button" onclick="if(typeof window.printTempoReceiptDirect==='function'){window.printTempoReceiptDirect('${ins.orderId}');}else{window.previewTempoReceipt('${ins.orderId}');}" class="p-1.5 rounded-lg bg-amber-500 hover:bg-amber-600 text-white text-xs transition-all cursor-pointer shadow-2xs" title="Cetak Struk Nota">
                                                <i class="fa-solid fa-print"></i>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                                `;
                            }).join('')}
                        </tbody>
                    </table>
                </div>
            `}
        </div>
    `;
};

/**
 * Render Tampilan Utama Modul Piutang & Tempo
 */
const renderTempoContent = () => {
    ensureTempoModals();

    let totalPiutang = 0;
    let totalTerlambat = 0;
    let countLate = 0;
    let countDueSoon = 0;
    let countActive = 0;

    const uniqueCustomerKeys = new Set();
    let totalInstallmentsCount = 0;

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

        const cKey = String(o.customer?.phone || o.customer?.wa || o.customer?.name || '').trim();
        if (cKey) uniqueCustomerKeys.add(cKey);

        const ins = o.payment?.installments || [];
        totalInstallmentsCount += ins.length;
    });

    let h = `
    <div class="max-w-full pb-12 fade-in-scale text-sm space-y-5">
        
        <!-- HEADER KARTU STATISTIK METRIK PIUTANG DENGAN AMBIENT THEME GLOW -->
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div class="bg-white dark:bg-slate-800 p-4 rounded-3xl border border-slate-200/90 dark:border-slate-700 shadow-sm flex items-center gap-3.5 relative overflow-hidden">
                <div class="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 shadow-xs" style="background: rgba(var(--color-primary-rgb), 0.12); color: var(--color-primary); border: 1px solid rgba(var(--color-primary-rgb), 0.25);">
                    <i class="fa-solid fa-hand-holding-dollar text-xl"></i>
                </div>
                <div class="min-w-0">
                    <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest">Total Piutang Aktif</p>
                    <p class="text-base sm:text-lg font-black text-slate-900 dark:text-white font-mono mt-0.5 tracking-tight">${fCur(totalPiutang)}</p>
                </div>
            </div>

            <div class="bg-white dark:bg-slate-800 p-4 rounded-3xl border border-rose-200 dark:border-rose-900/60 shadow-sm flex items-center gap-3.5 relative overflow-hidden">
                <div class="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 bg-rose-50 text-rose-600 dark:bg-rose-950/50 dark:text-rose-400 border border-rose-200 dark:border-rose-800">
                    <i class="fa-solid fa-triangle-exclamation text-xl"></i>
                </div>
                <div class="min-w-0">
                    <p class="text-[9px] font-black text-rose-500 uppercase tracking-widest">Piutang Terlambat</p>
                    <p class="text-base sm:text-lg font-black text-rose-600 dark:text-rose-400 font-mono mt-0.5 tracking-tight">${fCur(totalTerlambat)}</p>
                </div>
            </div>

            <div class="bg-white dark:bg-slate-800 p-4 rounded-3xl border border-slate-200/90 dark:border-slate-700 shadow-sm flex items-center gap-3.5 relative overflow-hidden">
                <div class="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 bg-amber-50 text-amber-600 dark:bg-amber-950/50 dark:text-amber-400 border border-amber-200 dark:border-amber-800">
                    <i class="fa-solid fa-file-invoice-dollar text-xl"></i>
                </div>
                <div class="min-w-0">
                    <p class="text-[9px] font-black text-slate-400 uppercase tracking-widest">Total Nota Tempo</p>
                    <p class="text-base sm:text-lg font-black text-slate-900 dark:text-white font-mono mt-0.5 tracking-tight">${cachedPiutangOrders.length} Nota (${uniqueCustomerKeys.size} Debitur)</p>
                </div>
            </div>
        </div>

        <!-- 3 TAB NAVIGASI UTAMA (ORDERS, CUSTOMERS, INSTALLMENTS) -->
        <div class="p-1.5 bg-slate-100 dark:bg-slate-800/80 rounded-2xl border border-slate-200/80 dark:border-slate-700/80 grid grid-cols-3 gap-1">
            <button type="button" onclick="window.switchTempoMainTab('orders')" class="py-2.5 px-2 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 active:scale-95 cursor-pointer ${activeTempoMainTab === 'orders' ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-xs' : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'}">
                <i class="fa-solid fa-file-invoice text-xs"></i>
                <span>Daftar Nota (${cachedPiutangOrders.length})</span>
            </button>
            <button type="button" onclick="window.switchTempoMainTab('customers')" class="py-2.5 px-2 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 active:scale-95 cursor-pointer ${activeTempoMainTab === 'customers' ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-xs' : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'}">
                <i class="fa-solid fa-address-book text-xs text-indigo-500"></i>
                <span>Kartu Pelanggan (${uniqueCustomerKeys.size})</span>
            </button>
            <button type="button" onclick="window.switchTempoMainTab('installments')" class="py-2.5 px-2 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 active:scale-95 cursor-pointer ${activeTempoMainTab === 'installments' ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-xs' : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'}">
                <i class="fa-solid fa-receipt text-xs text-emerald-500"></i>
                <span>Histori Cicilan (${totalInstallmentsCount})</span>
            </button>
        </div>

        <!-- SEARCH BAR INSTAN (GLOBAL UNTUK SEMUA TAB) -->
        <div class="bg-white dark:bg-slate-800 p-4 rounded-3xl border border-slate-200/90 dark:border-slate-700 shadow-sm space-y-3">
            <div class="relative">
                <i class="fa-solid fa-magnifying-glass absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-xs"></i>
                <input type="text" 
                    id="tempo-search-input"
                    value="${esc(tempoSearchQuery)}"
                    placeholder="${activeTempoMainTab === 'orders' ? 'Cari nama pelanggan, nomor WhatsApp, atau ID nota tempo...' : (activeTempoMainTab === 'customers' ? 'Cari nama pelanggan atau nomor WhatsApp...' : 'Cari transaksi cicilan, nama, nomor nota, atau catatan...')}" 
                    oninput="window.onTempoSearch(this.value)"
                    class="w-full pl-9 pr-8 py-2.5 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl text-xs font-medium text-slate-800 dark:text-slate-100 focus:outline-none focus:border-[var(--color-primary)] transition-all">
                ${tempoSearchQuery ? `
                <button onclick="window.onTempoSearch(''); el('tempo-search-input').value='';" class="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 cursor-pointer">
                    <i class="fa-solid fa-circle-xmark text-sm"></i>
                </button>` : ''}
            </div>

            ${activeTempoMainTab === 'orders' ? `
            <!-- FILTER STATUS SEGMENTED CONTROL (TAB ORDERS) -->
            <div class="flex items-center gap-2 overflow-x-auto pb-1 hide-scrollbar text-xs font-bold uppercase tracking-wider">
                <button onclick="window.setTempoFilter('all')" 
                    class="px-3.5 py-2 rounded-xl border transition-all shrink-0 cursor-pointer active:scale-95 ${activeTempoFilter === 'all' 
                        ? 'text-white border-transparent shadow-xs' 
                        : 'bg-slate-50 dark:bg-slate-900 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:bg-slate-100'}"
                    style="${activeTempoFilter === 'all' ? 'background: var(--color-primary); box-shadow: 0 2px 8px rgba(var(--color-primary-rgb), 0.3);' : ''}">
                    Semua (${cachedPiutangOrders.length})
                </button>
                <button onclick="window.setTempoFilter('late')" 
                    class="px-3.5 py-2 rounded-xl border transition-all shrink-0 cursor-pointer active:scale-95 ${activeTempoFilter === 'late' 
                        ? 'bg-rose-600 text-white border-rose-600 shadow-xs' 
                        : 'bg-rose-50 dark:bg-rose-950/30 text-rose-600 dark:text-rose-400 border-rose-200 dark:border-rose-900/50 hover:bg-rose-100'}">
                    <i class="fa-solid fa-triangle-exclamation mr-1"></i> Terlambat (${countLate})
                </button>
                <button onclick="window.setTempoFilter('due_soon')" 
                    class="px-3.5 py-2 rounded-xl border transition-all shrink-0 cursor-pointer active:scale-95 ${activeTempoFilter === 'due_soon' 
                        ? 'bg-amber-500 text-white border-amber-500 shadow-xs' 
                        : 'bg-amber-50 dark:bg-amber-950/30 text-amber-600 dark:text-amber-400 border-amber-200 dark:border-amber-900/50 hover:bg-amber-100'}">
                    <i class="fa-solid fa-clock mr-1"></i> H-3 Jatuh Tempo (${countDueSoon})
                </button>
                <button onclick="window.setTempoFilter('active')" 
                    class="px-3.5 py-2 rounded-xl border transition-all shrink-0 cursor-pointer active:scale-95 ${activeTempoFilter === 'active' 
                        ? 'bg-emerald-600 text-white border-emerald-600 shadow-xs' 
                        : 'bg-emerald-50 dark:bg-emerald-950/30 text-emerald-600 dark:text-emerald-400 border-emerald-200 dark:border-emerald-900/50 hover:bg-emerald-100'}">
                    <i class="fa-solid fa-circle-check mr-1"></i> Berjalan Lancar (${countActive})
                </button>
            </div>
            ` : ''}
        </div>

        <!-- CONTAINER KONTEN TAB AKTIF (SEAMLESS ZERO-FLICKER) -->
        <div id="tempo-tab-content-container"></div>
    </div>`;

    setH('admin-content', h);
    renderActiveTempoTabBody();
};

/**
 * Render Konten Tab Aktif Tanpa Mengacak Input Search
 */
const renderActiveTempoTabBody = () => {
    const container = el('tempo-tab-content-container');
    if (!container) return;

    if (activeTempoMainTab === 'orders') {
        if (cachedPiutangOrders.length === 0) {
            container.innerHTML = `
            <div class="bg-white dark:bg-slate-800 p-10 text-center rounded-3xl border border-slate-200 dark:border-slate-700 shadow-sm">
                <div class="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4" style="background: rgba(var(--color-primary-rgb), 0.1); color: var(--color-primary);">
                    <i class="fa-solid fa-check-double text-4xl"></i>
                </div>
                <h3 class="font-black text-slate-800 dark:text-slate-100 text-base uppercase tracking-widest">Semua Tagihan Piutang Lunas!</h3>
                <p class="text-slate-500 dark:text-slate-400 mt-1.5 text-xs font-medium max-w-sm mx-auto">Tidak ada piutang tempo penjualan pelanggan yang sedang aktif atau tertunda saat ini.</p>
            </div>`;
        } else {
            container.innerHTML = `<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4" id="tempo-cards-container"></div>`;
            renderTempoCardsOnly();
        }
    } else if (activeTempoMainTab === 'customers') {
        container.innerHTML = renderTempoCustomersTab();
    } else if (activeTempoMainTab === 'installments') {
        container.innerHTML = renderTempoInstallmentsTab();
    }
};

/**
 * Entry Point Memuat Data Piutang dari Firestore
 */
export const rAdmPiutang = async () => {
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

    // Simpan ke window agar sinkron dengan modal dokumen cetak (openDocPreview)
    window.cachedPiutangOrders = cachedPiutangOrders;

    renderTempoContent();
};

window.rAdmPiutang = rAdmPiutang;

export default {
    rAdmPiutang: window.rAdmPiutang,
    sendSmartTempoWA: window.sendSmartTempoWA,
    sendConsolidatedTempoWA: window.sendConsolidatedTempoWA,
    openTempoDetailModal: window.openTempoDetailModal,
    openTempoPaymentModal: window.openTempoPaymentModal,
    openTempoPenaltyModal: window.openTempoPenaltyModal,
    getTempoOrderCalculations,
    ensureTempoModals
};

