/**
 * ============================================================
 * MODUL ADMIN: MANAJEMEN RETUR BARANG & REKONSILIASI (RMA ENGINE)
 * Toko Putri Enterprise v1.12.2 - Universal Native Card View & Theme Harmonization
 * 
 * Meliputi:
 * 1. Retur Penjualan (Customer Sales Return):
 *    - Pencarian Nomor Nota Kasir / Order ID
 *    - Pemilihan item retur dengan validasi batas kuantitas
 *    - Stepper kuantitas native app ergonomis [−] / [+] & tombol Maks
 *    - Restorasi stok fisik ke Rak Toko (kondisi baik) atau Karantina Rusak
 *    - Opsi kompensasi: Cash Refund (potong buku kas laci), Saldo Deposit/Store Credit, atau Tukar Barang
 * 2. Retur Pembelian ke Pemasok (Vendor Purchase Return):
 *    - Pengembalian barang cacat/rusak pabrik ke rekanan supplier
 *    - Penyesuaian hutang dagang (AP Deduction) atau pengembalian dana
 *    - Stepper kuantitas native app & variant selector terintegrasi tema
 *    - Pemotongan kuantitas inventori dari Rak Toko / Gudang / Karantina
 * 3. Dual-View Responsif:
 *    - Mobile View: Card View List ergonomis (touch-friendly, anti-potong)
 *    - Desktop View: Tabel data analitis lebar & rapi
 * 4. Integrasi Cetak Dokumen Nota Retur Resmi A4 & Struk Thermal RawBT
 * ============================================================
 */

import { appData } from '../../core/state.js';
import { saveApp } from '../../services/storage.js';
import { restoreFifoStock, deductVendorReturnStock } from '../../core/fifo-inventory.js';
import { 
    el, show, hide, setIn, setH, esc, fCur,
    showToast, showConfirm, sLoad, hLoad,
    openModalAnim, closeModalAnim 
} from '../../core/utils.js';

// State lokal tab aktif ('sales' | 'vendor'), filter pencarian, dan mode tampilan ('card' | 'table')
let currentReturnTab = 'sales';
let activeSearchQuery = '';
let currentViewMode = 'card';
let selectedOrderForReturn = null;
let returnDraftItems = []; // Array item yang sedang diedit di modal retur penjualan

/**
 * Helper Monogram Inisial 2 Huruf Pelanggan / Entitas
 */
const getEntityMonogram = (name) => {
    if (!name) return 'PL';
    const parts = name.trim().split(/\s+/).filter(Boolean);
    if (parts.length === 1) return parts[0].substring(0, 2).toUpperCase();
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
};

/**
 * Merender Halaman Utama Manajemen Retur & RMA di Admin CMS
 * Selaras 100% dengan tema aktif toko & Native Design System Toko Putri
 */
export const renderReturnsView = () => {
    const container = el('admin-content');
    if (!container) return;

    // Normalisasi data
    if (!Array.isArray(appData.salesReturns)) appData.salesReturns = [];
    if (!Array.isArray(appData.vendorReturns)) appData.vendorReturns = [];

    // Hitung KPI Eksekutif
    const totalSalesRefundRp = appData.salesReturns.reduce((sum, r) => sum + (parseFloat(r.totalRefund) || 0), 0);
    const totalSalesReturnCount = appData.salesReturns.length;
    const totalVendorClaimRp = appData.vendorReturns.reduce((sum, r) => sum + (parseFloat(r.totalClaim) || 0), 0);
    
    // Total barang karantina rusak di seluruh produk
    const totalQuarantineQty = (appData.products || []).reduce((sum, p) => {
        let q = parseFloat(p.damagedStock) || 0;
        if (Array.isArray(p.variants)) {
            q += p.variants.reduce((vSum, v) => vSum + (parseFloat(v.damagedStock) || 0), 0);
        }
        return sum + q;
    }, 0);

    const html = `
        <div class="space-y-4 sm:space-y-5 fade-in max-w-5xl mx-auto pb-24 pt-1 sm:pt-2">
            <!-- 1. HERO BANNER: PUSAT RETUR & REKONSILIASI RMA (THEME HARMONIZED) -->
            <div class="relative overflow-hidden p-5 sm:p-7 rounded-2xl sm:rounded-3xl border border-[rgba(var(--color-primary-rgb),0.2)] bg-white dark:bg-slate-900 shadow-xs card-native">
                <div class="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div class="space-y-1.5 max-w-xl">
                        <div class="flex items-center gap-2">
                            <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider border shadow-2xs" style="background: rgba(var(--color-primary-rgb), 0.12); color: var(--color-primary); border-color: rgba(var(--color-primary-rgb), 0.25);">
                                <i class="fa-solid fa-right-left"></i> Modul Rekonsiliasi RMA
                            </span>
                        </div>
                        <h2 class="text-xl sm:text-2xl font-black tracking-tight text-slate-800 dark:text-white flex items-center gap-2.5">
                            Retur Barang &amp; Rekonsiliasi
                        </h2>
                        <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                            Rekonsiliasi pengembalian barang konsumen, klaim cacat distributor pabrik, restorasi tiket FIFO, dan kontrol persediaan karantina.
                        </p>
                    </div>

                    <div class="flex items-center gap-2 shrink-0 flex-wrap">
                        <button type="button" onclick="window.openVendorReturnModal()" class="px-4 py-3 rounded-2xl bg-white/90 dark:bg-slate-800/90 text-slate-700 dark:text-slate-200 border border-slate-200/90 dark:border-slate-700/80 font-bold text-xs shadow-2xs hover:bg-white dark:hover:bg-slate-700 transition-all flex items-center gap-2 cursor-pointer active:scale-95">
                            <i class="fa-solid fa-truck-ramp-box text-amber-500"></i>
                            <span>+ Retur Supplier</span>
                        </button>
                        <button type="button" onclick="window.openSalesReturnModal()" class="btn-native-action px-5 py-3 rounded-2xl text-xs font-black text-white shadow-glow active:scale-95 transition-all flex items-center gap-2 cursor-pointer hover:opacity-95" style="background: var(--color-primary); box-shadow: 0 4px 14px rgba(var(--color-primary-rgb), 0.35);">
                            <i class="fa-solid fa-cart-arrow-down text-xs"></i>
                            <span>+ Retur Penjualan</span>
                        </button>
                    </div>
                </div>

                <!-- 2. METRIK BENTO STAT CARDS (4 KPI SELARAS TEMA TOKO) -->
                <div class="mt-6 pt-5 border-t border-[rgba(var(--color-primary-rgb),0.15)] dark:border-slate-700/60 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-3.5">
                    <div class="p-4 rounded-2xl bg-white/95 dark:bg-slate-800/90 border border-slate-200/90 dark:border-slate-700/80 shadow-2xs hover:-translate-y-0.5 hover:shadow-md transition-all duration-200 flex flex-col justify-between">
                        <div class="flex items-center justify-between mb-2">
                            <span class="text-[10px] font-black uppercase tracking-wider text-slate-500 dark:text-slate-400">Total Retur Konsumen</span>
                            <div class="w-8 h-8 rounded-xl flex items-center justify-center text-xs shadow-2xs shrink-0" style="background: rgba(var(--color-primary-rgb), 0.12); color: var(--color-primary);">
                                <i class="fa-solid fa-hand-holding-dollar"></i>
                            </div>
                        </div>
                        <p class="text-xl sm:text-2xl font-black text-rose-600 dark:text-rose-400 tracking-tight font-mono">${fCur(totalSalesRefundRp)}</p>
                        <p class="text-[10px] font-bold text-slate-400 mt-0.5">Pengembalian Dana / Kredit</p>
                    </div>

                    <div class="p-4 rounded-2xl bg-white/95 dark:bg-slate-800/90 border border-slate-200/90 dark:border-slate-700/80 shadow-2xs hover:-translate-y-0.5 hover:shadow-md transition-all duration-200 flex flex-col justify-between">
                        <div class="flex items-center justify-between mb-2">
                            <span class="text-[10px] font-black uppercase tracking-wider text-slate-500 dark:text-slate-400">Kasus Retur Nota</span>
                            <div class="w-8 h-8 rounded-xl flex items-center justify-center text-xs shadow-2xs shrink-0" style="background: rgba(var(--color-primary-rgb), 0.12); color: var(--color-primary);">
                                <i class="fa-solid fa-receipt"></i>
                            </div>
                        </div>
                        <p class="text-xl sm:text-2xl font-black text-slate-800 dark:text-white tracking-tight">${totalSalesReturnCount} <span class="text-xs font-bold text-slate-400">Nota</span></p>
                        <p class="text-[10px] font-bold text-slate-400 mt-0.5">Transaksi Terselesaikan</p>
                    </div>

                    <div class="p-4 rounded-2xl bg-white/95 dark:bg-slate-800/90 border border-slate-200/90 dark:border-slate-700/80 shadow-2xs hover:-translate-y-0.5 hover:shadow-md transition-all duration-200 flex flex-col justify-between">
                        <div class="flex items-center justify-between mb-2">
                            <span class="text-[10px] font-black uppercase tracking-wider text-amber-600 dark:text-amber-400">Klaim Supplier</span>
                            <div class="w-8 h-8 rounded-xl bg-amber-50 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400 border border-amber-200/60 dark:border-amber-800/40 flex items-center justify-center text-xs shadow-2xs shrink-0">
                                <i class="fa-solid fa-truck-ramp-box"></i>
                            </div>
                        </div>
                        <p class="text-xl sm:text-2xl font-black text-amber-600 dark:text-amber-400 tracking-tight font-mono">${fCur(totalVendorClaimRp)}</p>
                        <p class="text-[10px] font-bold text-slate-400 mt-0.5">Potong Hutang / Refund PO</p>
                    </div>

                    <div class="p-4 rounded-2xl bg-white/95 dark:bg-slate-800/90 border border-slate-200/90 dark:border-slate-700/80 shadow-2xs hover:-translate-y-0.5 hover:shadow-md transition-all duration-200 flex flex-col justify-between">
                        <div class="flex items-center justify-between mb-2">
                            <span class="text-[10px] font-black uppercase tracking-wider text-rose-500 dark:text-rose-400">Karantina Rusak</span>
                            <div class="w-8 h-8 rounded-xl bg-rose-50 dark:bg-rose-950/40 text-rose-600 dark:text-rose-400 border border-rose-200/60 dark:border-rose-800/40 flex items-center justify-center text-xs shadow-2xs shrink-0">
                                <i class="fa-solid fa-shield-halved"></i>
                            </div>
                        </div>
                        <p class="text-xl sm:text-2xl font-black text-rose-600 dark:text-rose-400 tracking-tight">${totalQuarantineQty} <span class="text-xs font-bold text-slate-400">Unit</span></p>
                        <p class="text-[10px] font-bold text-slate-400 mt-0.5">Menunggu Klaim Distributor</p>
                    </div>
                </div>
            </div>

            <!-- 3. TOOLBAR: TAB SWITCHER, LIVE SEARCH BAR & VIEW MODE SWITCHER -->
            <div class="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-between card-native p-2.5 sm:p-3 rounded-2xl sm:rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-2xs">
                <!-- Segmented Tab Pills Switcher -->
                <div class="flex items-center gap-1.5 p-1 bg-slate-100 dark:bg-slate-800/80 rounded-2xl border border-slate-200/60 dark:border-slate-700/60">
                    <button 
                        type="button" 
                        onclick="window.switchReturnsTab('sales')" 
                        class="px-4 py-2 rounded-xl text-xs font-black transition-all cursor-pointer flex items-center gap-2 ${currentReturnTab === 'sales' ? 'shadow-sm' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'}"
                        style="${currentReturnTab === 'sales' ? 'background: var(--color-primary); color: #fff; box-shadow: 0 2px 8px rgba(var(--color-primary-rgb), 0.3);' : ''}"
                    >
                        <i class="fa-solid fa-basket-shopping"></i>
                        <span>Retur Penjualan</span>
                        <span class="px-1.5 py-0.2 rounded-full text-[10px] font-bold ${currentReturnTab === 'sales' ? 'bg-white/20 text-white' : 'bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300'}">
                            ${appData.salesReturns.length}
                        </span>
                    </button>
                    <button 
                        type="button" 
                        onclick="window.switchReturnsTab('vendor')" 
                        class="px-4 py-2 rounded-xl text-xs font-black transition-all cursor-pointer flex items-center gap-2 ${currentReturnTab === 'vendor' ? 'shadow-sm' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'}"
                        style="${currentReturnTab === 'vendor' ? 'background: var(--color-primary); color: #fff; box-shadow: 0 2px 8px rgba(var(--color-primary-rgb), 0.3);' : ''}"
                    >
                        <i class="fa-solid fa-truck-ramp-box"></i>
                        <span>Retur Supplier</span>
                        <span class="px-1.5 py-0.2 rounded-full text-[10px] font-bold ${currentReturnTab === 'vendor' ? 'bg-white/20 text-white' : 'bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300'}">
                            ${appData.vendorReturns.length}
                        </span>
                    </button>
                </div>

                <div class="flex items-center gap-2 flex-1 justify-end">
                    <!-- Live Search Box -->
                    <div class="relative flex-1 sm:max-w-md">
                        <i class="fa-solid fa-magnifying-glass absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-xs"></i>
                        <input 
                            type="text" 
                            id="returns-search-input" 
                            value="${esc(activeSearchQuery)}" 
                            oninput="window.handleReturnsSearch(this.value)" 
                            placeholder="${currentReturnTab === 'sales' ? 'Cari no retur, no nota, nama pelanggan...' : 'Cari no retur, supplier, rujukan PO...'}" 
                            class="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl py-2.5 pl-10 pr-9 text-xs font-bold text-slate-700 dark:text-slate-200 focus:outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/15 shadow-2xs transition-all"
                        >
                        <button type="button" id="returns-search-clear-btn" onclick="window.handleReturnsSearch(''); const ri=el('returns-search-input'); if(ri){ri.value='';ri.focus();}" class="${activeSearchQuery ? '' : 'hidden'} absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 cursor-pointer transition-colors active:scale-90" title="Hapus pencarian">
                            <i class="fa-solid fa-circle-xmark text-sm"></i>
                        </button>
                    </div>

                    <!-- View Mode Toggle Switcher (Card vs Table) -->
                    <div class="hidden sm:flex items-center gap-1 p-1 bg-slate-100 dark:bg-slate-800/80 rounded-2xl border border-slate-200/60 dark:border-slate-700/60 shrink-0">
                        <button 
                            type="button" 
                            id="btn-returns-view-card" 
                            onclick="window.switchReturnsViewMode('card')" 
                            title="Tampilan Kartu Native App" 
                            class="w-9 h-9 rounded-xl flex items-center justify-center text-xs transition-all cursor-pointer ${currentViewMode === 'card' ? 'shadow-xs text-white' : 'text-slate-500 hover:text-slate-800 dark:hover:text-white'}" 
                            style="${currentViewMode === 'card' ? 'background: var(--color-primary); color: #fff;' : ''}"
                        >
                            <i class="fa-solid fa-table-cells-large"></i>
                        </button>
                        <button 
                            type="button" 
                            id="btn-returns-view-table" 
                            onclick="window.switchReturnsViewMode('table')" 
                            title="Tampilan Tabel Analitis" 
                            class="w-9 h-9 rounded-xl flex items-center justify-center text-xs transition-all cursor-pointer ${currentViewMode === 'table' ? 'shadow-xs text-white' : 'text-slate-500 hover:text-slate-800 dark:hover:text-white'}" 
                            style="${currentViewMode === 'table' ? 'background: var(--color-primary); color: #fff;' : ''}"
                        >
                            <i class="fa-solid fa-table-list"></i>
                        </button>
                    </div>
                </div>
            </div>

            <!-- 4. CONTAINER DAFTAR RIWAYAT RETUR -->
            <div id="returns-table-wrapper">
                ${currentReturnTab === 'sales' ? renderSalesReturnsTableHtml() : renderVendorReturnsTableHtml()}
            </div>
        </div>
    `;

    setH('admin-content', html);
};

/**
 * Ganti subtab tampilan retur ('sales' vs 'vendor')
 */
export const switchReturnsTab = (tab) => {
    currentReturnTab = tab;
    renderReturnsView();
};

/**
 * Switcher Mode Tampilan ('card' vs 'table')
 */
export const switchReturnsViewMode = (mode) => {
    currentViewMode = mode;
    const wrapper = el('returns-table-wrapper');
    if (wrapper) {
        wrapper.innerHTML = currentReturnTab === 'sales' ? renderSalesReturnsTableHtml() : renderVendorReturnsTableHtml();
    }
    const btnCard = el('btn-returns-view-card');
    const btnTable = el('btn-returns-view-table');
    if (btnCard && btnTable) {
        if (mode === 'card') {
            btnCard.className = 'w-9 h-9 rounded-xl flex items-center justify-center text-xs transition-all cursor-pointer shadow-xs text-white';
            btnCard.style.background = 'var(--color-primary)';
            btnCard.style.color = '#fff';
            btnTable.className = 'w-9 h-9 rounded-xl flex items-center justify-center text-xs text-slate-500 hover:text-slate-800 dark:hover:text-white transition-all cursor-pointer';
            btnTable.style.background = '';
            btnTable.style.color = '';
        } else {
            btnTable.className = 'w-9 h-9 rounded-xl flex items-center justify-center text-xs transition-all cursor-pointer shadow-xs text-white';
            btnTable.style.background = 'var(--color-primary)';
            btnTable.style.color = '#fff';
            btnCard.className = 'w-9 h-9 rounded-xl flex items-center justify-center text-xs text-slate-500 hover:text-slate-800 dark:hover:text-white transition-all cursor-pointer';
            btnCard.style.background = '';
            btnCard.style.color = '';
        }
    }
};

/**
 * Handle input pencarian live search
 */
export const handleReturnsSearch = (query) => {
    activeSearchQuery = (query || '').trim().toLowerCase();
    const clearBtn = el('returns-search-clear-btn');
    if (clearBtn) clearBtn.classList.toggle('hidden', !activeSearchQuery);
    const wrapper = el('returns-table-wrapper');
    if (wrapper) {
        wrapper.innerHTML = currentReturnTab === 'sales' ? renderSalesReturnsTableHtml() : renderVendorReturnsTableHtml();
    }
};

/**
 * Render Riwayat Retur Penjualan (Mendukung Mode Card View & Table View)
 */
const renderSalesReturnsTableHtml = () => {
    const list = (appData.salesReturns || []).filter(item => {
        if (!activeSearchQuery) return true;
        const q = activeSearchQuery;
        return (item.id && item.id.toLowerCase().includes(q)) ||
               (item.orderId && item.orderId.toLowerCase().includes(q)) ||
               (item.customerName && item.customerName.toLowerCase().includes(q)) ||
               (item.customerPhone && item.customerPhone.includes(q));
    });

    if (list.length === 0) {
        return `
            <div class="card-native bg-white dark:bg-slate-900 rounded-2xl sm:rounded-3xl border border-slate-200/90 dark:border-slate-800 shadow-2xs py-16 px-4 text-center text-slate-400 dark:text-slate-500">
                <div class="w-16 h-16 mx-auto mb-3.5 rounded-2xl flex items-center justify-center text-2xl shadow-2xs" style="background: rgba(var(--color-primary-rgb), 0.12); color: var(--color-primary); border: 1px solid rgba(var(--color-primary-rgb), 0.25);">
                    <i class="fa-solid fa-box-open"></i>
                </div>
                <h4 class="font-black text-sm text-slate-800 dark:text-slate-200">Belum Ada Riwayat Retur Penjualan</h4>
                <p class="text-xs mt-1 max-w-sm mx-auto text-slate-500 dark:text-slate-400">Semua retur dari kasir POS maupun web akan tercatat otomatis di sini.</p>
                <button type="button" onclick="window.openSalesReturnModal()" class="btn-native-action mt-4 px-5 py-2.5 rounded-2xl text-white font-black text-xs shadow-sm active:scale-95 transition-all cursor-pointer inline-flex items-center gap-2" style="background: var(--color-primary); box-shadow: 0 4px 14px rgba(var(--color-primary-rgb), 0.35);">
                    <i class="fa-solid fa-plus text-xs"></i> Buat Retur Penjualan Baru
                </button>
            </div>
        `;
    }

    // Urutkan terbaru di atas
    const sorted = [...list].sort((a, b) => new Date(b.createdAt || 0) - new Date(a.createdAt || 0));

    // A. MODE NATIVE CARD VIEW (DEFAULT DI SEMUA LAYAR / JIKA currentViewMode === 'card')
    if (currentViewMode === 'card') {
        return `
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-3.5 sm:gap-4">
                ${sorted.map(r => {
                    const dateStr = r.createdAt ? new Date(r.createdAt).toLocaleDateString('id-ID', { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' }) : '-';
                    const itemsCount = (r.items || []).length;
                    const custName = r.customerName || 'Pelanggan Umum';
                    const monogram = getEntityMonogram(custName);
                    
                    let methodBadge = '<span class="px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-[10.5px] font-bold">Lainnya</span>';
                    if (r.refundMethod === 'cash') {
                        methodBadge = '<span class="px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300 text-[10.5px] font-black inline-flex items-center gap-1.5 border border-emerald-200 dark:border-emerald-800/60 shadow-2xs"><i class="fa-solid fa-money-bill-wave"></i> Tunai (Kas Laci)</span>';
                    } else if (r.refundMethod === 'credit') {
                        methodBadge = '<span class="px-2.5 py-1 rounded-full bg-sky-50 text-sky-700 dark:bg-sky-950/60 dark:text-sky-300 text-[10.5px] font-black inline-flex items-center gap-1.5 border border-sky-200 dark:border-sky-800/60 shadow-2xs"><i class="fa-solid fa-wallet"></i> Saldo Kredit</span>';
                    } else if (r.refundMethod === 'exchange') {
                        methodBadge = `<span class="px-2.5 py-1 rounded-full text-[10.5px] font-black inline-flex items-center gap-1.5 border shadow-2xs" style="background: rgba(var(--color-primary-rgb), 0.1); color: var(--color-primary); border-color: rgba(var(--color-primary-rgb), 0.25);"><i class="fa-solid fa-repeat"></i> Tukar Barang</span>`;
                    }

                    return `
                        <div class="card-native p-4 sm:p-5 rounded-2xl sm:rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between space-y-3.5">
                            <!-- Top Bar: Avatar, Nama Pelanggan, No Retur & Badge Metode -->
                            <div class="flex items-start justify-between gap-3">
                                <div class="flex items-center gap-3 min-w-0">
                                    <div class="w-10 h-10 rounded-2xl flex items-center justify-center font-black text-xs shrink-0 shadow-2xs" style="background: rgba(var(--color-primary-rgb), 0.12); color: var(--color-primary); border: 1px solid rgba(var(--color-primary-rgb), 0.25);">
                                        ${monogram}
                                    </div>
                                    <div class="min-w-0">
                                        <h5 class="font-black text-sm text-slate-800 dark:text-white leading-tight truncate">
                                            ${esc(custName)}
                                        </h5>
                                        <div class="flex items-center gap-2 mt-0.5 flex-wrap">
                                            <span class="font-mono font-black text-xs" style="color: var(--color-primary);">${esc(r.id)}</span>
                                            <span class="text-[10px] font-semibold text-slate-400">&middot; ${dateStr}</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="shrink-0">
                                    ${methodBadge}
                                </div>
                            </div>

                            <!-- Middle Section: Rujukan Nota & Daftar Barang yang Diretur -->
                            <div class="p-3.5 rounded-2xl bg-slate-50/80 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 space-y-2.5">
                                <div class="flex items-center justify-between text-xs gap-2">
                                    <span class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-mono font-bold text-slate-700 dark:text-slate-300 text-[11px]">
                                        <i class="fa-solid fa-receipt text-slate-400"></i> ${esc(r.orderId || '-')}
                                    </span>
                                    <div class="text-right">
                                        <span class="text-[9.5px] font-bold uppercase tracking-wider text-slate-400 block">Kompensasi Retur</span>
                                        <span class="text-base font-black text-rose-600 dark:text-rose-400 font-mono">${fCur(r.totalRefund || 0)}</span>
                                    </div>
                                </div>

                                <!-- Cuplikan Barang -->
                                <div class="space-y-1.5 pt-1 border-t border-slate-200/60 dark:border-slate-700/60">
                                    <div class="flex items-center justify-between text-[10px] font-black uppercase tracking-wider text-slate-400">
                                        <span>Item Diretur (${itemsCount} macam):</span>
                                        <span>Alokasi Stok</span>
                                    </div>
                                    <div class="space-y-1">
                                        ${(r.items || []).slice(0, 3).map(i => {
                                            const condBadge = i.condition === 'damaged' 
                                                ? '<span class="text-[9.5px] font-black text-rose-500 shrink-0"><i class="fa-solid fa-triangle-exclamation"></i> Karantina</span>' 
                                                : '<span class="text-[9.5px] font-bold text-emerald-600 dark:text-emerald-400 shrink-0"><i class="fa-solid fa-check"></i> Rak Toko</span>';
                                            return `
                                                <div class="flex items-center justify-between gap-2 p-1.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200/70 dark:border-slate-700/70 text-xs">
                                                    <div class="flex items-center gap-1.5 min-w-0">
                                                        <span class="px-1.5 py-0.2 rounded-md font-black text-[10px]" style="background: rgba(var(--color-primary-rgb), 0.12); color: var(--color-primary);">${i.qty}x</span>
                                                        <span class="font-bold text-slate-800 dark:text-slate-200 truncate max-w-[180px]">${esc(i.name)}</span>
                                                        ${i.variantName ? `<span class="text-[9.5px] text-slate-400 shrink-0">[${esc(i.variantName)}]</span>` : ''}
                                                    </div>
                                                    ${condBadge}
                                                </div>
                                            `;
                                        }).join('')}
                                        ${itemsCount > 3 ? `<p class="text-[10.5px] font-bold text-center text-slate-400 pt-0.5">+${itemsCount - 3} item barang lainnya</p>` : ''}
                                    </div>
                                </div>
                            </div>

                            <!-- Bottom Action Bar: Tombol Cetak Native Touch Target 40px -->
                            <div class="flex items-center gap-2 pt-1 border-t border-slate-100 dark:border-slate-800">
                                <button type="button" onclick="window.printSalesReturnA4('${esc(r.id)}')" class="btn-native-action flex-1 h-10 rounded-xl sm:rounded-2xl border border-slate-200/90 dark:border-slate-700/80 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs font-bold flex items-center justify-center gap-2 shadow-2xs active:scale-95 transition-all cursor-pointer">
                                    <i class="fa-solid fa-file-invoice text-xs"></i>
                                    <span>Cetak Nota A4</span>
                                </button>
                                <button type="button" onclick="window.printSalesReturnThermal('${esc(r.id)}')" class="btn-native-action flex-1 h-10 rounded-xl sm:rounded-2xl border border-[rgba(var(--color-primary-rgb),0.3)] text-xs font-bold flex items-center justify-center gap-2 shadow-2xs active:scale-95 transition-all cursor-pointer" style="background: rgba(var(--color-primary-rgb), 0.08); color: var(--color-primary);">
                                    <i class="fa-solid fa-print text-xs"></i>
                                    <span>Struk Thermal</span>
                                </button>
                            </div>
                        </div>
                    `;
                }).join('')}
            </div>
        `;
    }

    // B. MODE TABEL ANALITIS (JIKA currentViewMode === 'table')
    return `
        <div class="card-native bg-white dark:bg-slate-900 rounded-2xl sm:rounded-3xl border border-slate-200/90 dark:border-slate-800 shadow-2xs overflow-hidden">
            <div class="overflow-x-auto custom-scrollbar">
                <table class="w-full text-left text-xs">
                    <thead class="bg-slate-50/80 dark:bg-slate-800/60 text-[11px] font-black uppercase tracking-wider text-slate-400 border-b border-slate-200 dark:border-slate-800">
                        <tr>
                            <th class="py-3.5 px-4">No. Retur &amp; Tanggal</th>
                            <th class="py-3.5 px-4">Rujukan Nota</th>
                            <th class="py-3.5 px-4">Pelanggan</th>
                            <th class="py-3.5 px-4">Barang Diretur</th>
                            <th class="py-3.5 px-4 text-right">Nilai Kompensasi</th>
                            <th class="py-3.5 px-4">Metode</th>
                            <th class="py-3.5 px-4 text-center">Cetak Bukti</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-slate-100 dark:divide-slate-800 text-slate-700 dark:text-slate-300">
                        ${sorted.map(r => {
                            const dateStr = r.createdAt ? new Date(r.createdAt).toLocaleDateString('id-ID', { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' }) : '-';
                            const itemsSummary = (r.items || []).map(i => `${i.qty}x ${esc(i.name)}${i.variantName ? ` [${esc(i.variantName)}]` : ''}`).join(', ');
                            
                            let methodBadge = '<span class="px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-[10px] font-bold">Lainnya</span>';
                            if (r.refundMethod === 'cash') {
                                methodBadge = '<span class="px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300 text-[10px] font-black inline-flex items-center gap-1 border border-emerald-200 dark:border-emerald-800/60"><i class="fa-solid fa-money-bill-wave"></i> Tunai (Kas Laci)</span>';
                            } else if (r.refundMethod === 'credit') {
                                methodBadge = '<span class="px-2.5 py-1 rounded-full bg-sky-50 text-sky-700 dark:bg-sky-950/60 dark:text-sky-300 text-[10px] font-black inline-flex items-center gap-1 border border-sky-200 dark:border-sky-800/60"><i class="fa-solid fa-wallet"></i> Saldo Kredit</span>';
                            } else if (r.refundMethod === 'exchange') {
                                methodBadge = `<span class="px-2.5 py-1 rounded-full text-[10px] font-black inline-flex items-center gap-1 border shadow-2xs" style="background: rgba(var(--color-primary-rgb), 0.1); color: var(--color-primary); border-color: rgba(var(--color-primary-rgb), 0.25);"><i class="fa-solid fa-repeat"></i> Tukar Barang</span>`;
                            }

                            return `
                                <tr class="hover:bg-slate-50/70 dark:hover:bg-slate-800/50 transition-colors">
                                    <td class="py-3.5 px-4 font-bold">
                                        <span class="font-mono font-black block" style="color: var(--color-primary);">${esc(r.id)}</span>
                                        <span class="text-[10px] font-semibold text-slate-400 block mt-0.5">${dateStr}</span>
                                    </td>
                                    <td class="py-3.5 px-4 font-mono font-bold text-slate-700 dark:text-slate-300">
                                        <span class="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-[11px]">${esc(r.orderId || '-')}</span>
                                    </td>
                                    <td class="py-3.5 px-4">
                                        <span class="font-black text-slate-800 dark:text-white block">${esc(r.customerName || 'Pelanggan Umum')}</span>
                                        <span class="text-[10px] font-semibold text-slate-400">${esc(r.customerPhone || '')}</span>
                                    </td>
                                    <td class="py-3.5 px-4 max-w-xs">
                                        <p class="truncate font-semibold text-slate-700 dark:text-slate-300" title="${esc(itemsSummary)}">${esc(itemsSummary || '-')}</p>
                                        <span class="text-[10px] font-bold text-slate-400">${r.items ? r.items.length : 0} macam barang</span>
                                    </td>
                                    <td class="py-3.5 px-4 text-right font-black text-rose-600 dark:text-rose-400 text-sm font-mono">
                                        ${fCur(r.totalRefund || 0)}
                                    </td>
                                    <td class="py-3.5 px-4">
                                        ${methodBadge}
                                    </td>
                                    <td class="py-3.5 px-4 text-center">
                                        <div class="flex items-center justify-center gap-1.5">
                                            <button type="button" onclick="window.printSalesReturnA4('${esc(r.id)}')" title="Cetak Nota Retur A4 Resmi" class="btn-native-action h-9 px-2.5 rounded-xl border border-slate-200/90 dark:border-slate-700/80 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs font-bold flex items-center gap-1 shadow-2xs active:scale-95 cursor-pointer">
                                                <i class="fa-solid fa-file-invoice text-xs"></i> <span>A4</span>
                                            </button>
                                            <button type="button" onclick="window.printSalesReturnThermal('${esc(r.id)}')" title="Cetak Struk Thermal RawBT" class="btn-native-action h-9 px-2.5 rounded-xl border text-xs font-bold flex items-center gap-1 shadow-2xs active:scale-95 cursor-pointer" style="background: rgba(var(--color-primary-rgb), 0.1); color: var(--color-primary); border-color: rgba(var(--color-primary-rgb), 0.25);">
                                                <i class="fa-solid fa-print text-xs"></i> <span>Struk</span>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            `;
                        }).join('')}
                    </tbody>
                </table>
            </div>
        </div>
    `;
};

/**
 * Render Riwayat Retur Pembelian Supplier (Mendukung Mode Card View & Table View)
 */
const renderVendorReturnsTableHtml = () => {
    const list = (appData.vendorReturns || []).filter(item => {
        if (!activeSearchQuery) return true;
        const q = activeSearchQuery;
        return (item.id && item.id.toLowerCase().includes(q)) ||
               (item.supplierName && item.supplierName.toLowerCase().includes(q)) ||
               (item.poId && item.poId.toLowerCase().includes(q));
    });

    if (list.length === 0) {
        return `
            <div class="card-native bg-white dark:bg-slate-900 rounded-2xl sm:rounded-3xl border border-slate-200/90 dark:border-slate-800 shadow-2xs py-16 px-4 text-center text-slate-400 dark:text-slate-500">
                <div class="w-16 h-16 mx-auto mb-3.5 rounded-2xl flex items-center justify-center text-2xl shadow-2xs bg-amber-50 dark:bg-amber-950/40 text-amber-500 border border-amber-200 dark:border-amber-800/60">
                    <i class="fa-solid fa-truck-ramp-box"></i>
                </div>
                <h4 class="font-black text-sm text-slate-800 dark:text-slate-200">Belum Ada Riwayat Retur Supplier</h4>
                <p class="text-xs mt-1 max-w-sm mx-auto text-slate-500 dark:text-slate-400">Pengembalian barang rusak atau klaim distributor tercatat otomatis di sini.</p>
                <button type="button" onclick="window.openVendorReturnModal()" class="btn-native-action mt-4 px-5 py-2.5 rounded-2xl bg-amber-600 hover:bg-amber-700 text-white font-black text-xs shadow-sm active:scale-95 transition-all cursor-pointer inline-flex items-center gap-2">
                    <i class="fa-solid fa-plus text-xs"></i> Buat Retur Supplier Baru
                </button>
            </div>
        `;
    }

    const sorted = [...list].sort((a, b) => new Date(b.createdAt || 0) - new Date(a.createdAt || 0));

    // A. MODE NATIVE CARD VIEW (DEFAULT DI SEMUA LAYAR / JIKA currentViewMode === 'card')
    if (currentViewMode === 'card') {
        return `
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-3.5 sm:gap-4">
                ${sorted.map(r => {
                    const dateStr = r.createdAt ? new Date(r.createdAt).toLocaleDateString('id-ID', { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' }) : '-';
                    const itemsCount = (r.items || []).length;
                    const supName = r.supplierName || 'Pemasok Toko';
                    const monogram = getEntityMonogram(supName);

                    let methodBadge = '<span class="px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 text-[10.5px] font-bold">Lainnya</span>';
                    if (r.settlementMethod === 'ap_deduction') {
                        methodBadge = '<span class="px-2.5 py-1 rounded-full bg-amber-50 text-amber-700 dark:bg-amber-950/60 dark:text-amber-300 text-[10.5px] font-black inline-flex items-center gap-1.5 border border-amber-200 dark:border-amber-800/60 shadow-2xs"><i class="fa-solid fa-file-invoice-dollar"></i> Potong Hutang PO</span>';
                    } else if (r.settlementMethod === 'cash_refund') {
                        methodBadge = '<span class="px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300 text-[10.5px] font-black inline-flex items-center gap-1.5 border border-emerald-200 dark:border-emerald-800/60 shadow-2xs"><i class="fa-solid fa-money-bill-wave"></i> Pengembalian Kas</span>';
                    }

                    return `
                        <div class="card-native p-4 sm:p-5 rounded-2xl sm:rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between space-y-3.5">
                            <!-- Top Bar: Avatar, Nama Pemasok, No Retur & Badge Metode -->
                            <div class="flex items-start justify-between gap-3">
                                <div class="flex items-center gap-3 min-w-0">
                                    <div class="w-10 h-10 rounded-2xl flex items-center justify-center font-black text-xs shrink-0 shadow-2xs bg-amber-50 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400 border border-amber-200/60 dark:border-amber-800/40">
                                        ${monogram}
                                    </div>
                                    <div class="min-w-0">
                                        <h5 class="font-black text-sm text-slate-800 dark:text-white leading-tight truncate">
                                            ${esc(supName)}
                                        </h5>
                                        <div class="flex items-center gap-2 mt-0.5 flex-wrap">
                                            <span class="font-mono font-black text-xs text-amber-600 dark:text-amber-400">${esc(r.id)}</span>
                                            <span class="text-[10px] font-semibold text-slate-400">&middot; ${dateStr}</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="shrink-0">
                                    ${methodBadge}
                                </div>
                            </div>

                            <!-- Middle Section: Rujukan PO & Breakdown Barang -->
                            <div class="p-3.5 rounded-2xl bg-slate-50/80 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 space-y-2.5">
                                <div class="flex items-center justify-between text-xs gap-2">
                                    <span class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-mono font-bold text-slate-700 dark:text-slate-300 text-[11px]">
                                        <i class="fa-solid fa-cart-flatbed text-slate-400"></i> ${esc(r.poId || '-')}
                                    </span>
                                    <div class="text-right">
                                        <span class="text-[9.5px] font-bold uppercase tracking-wider text-slate-400 block">Klaim HPP</span>
                                        <span class="text-base font-black text-amber-600 dark:text-amber-400 font-mono">${fCur(r.totalClaim || 0)}</span>
                                    </div>
                                </div>

                                <!-- Cuplikan Barang -->
                                <div class="space-y-1.5 pt-1 border-t border-slate-200/60 dark:border-slate-700/60">
                                    <div class="flex items-center justify-between text-[10px] font-black uppercase tracking-wider text-slate-400">
                                        <span>Item Dikembalikan (${itemsCount} macam):</span>
                                        <span>Lokasi Asal</span>
                                    </div>
                                    <div class="space-y-1">
                                        ${(r.items || []).slice(0, 3).map(i => {
                                            const locLabel = i.fromLocation === 'warehouse' ? 'Gudang' : (i.fromLocation === 'quarantine' ? 'Karantina' : 'Rak Toko');
                                            return `
                                                <div class="flex items-center justify-between gap-2 p-1.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200/70 dark:border-slate-700/70 text-xs">
                                                    <div class="flex items-center gap-1.5 min-w-0">
                                                        <span class="px-1.5 py-0.2 rounded-md font-black text-[10px] bg-amber-50 text-amber-700 dark:bg-amber-950/60 dark:text-amber-300 border border-amber-200 dark:border-amber-800/40">${i.qty}x</span>
                                                        <span class="font-bold text-slate-800 dark:text-slate-200 truncate max-w-[180px]">${esc(i.name)}</span>
                                                        ${i.variantName ? `<span class="text-[9.5px] text-slate-400 shrink-0">[${esc(i.variantName)}]</span>` : ''}
                                                    </div>
                                                    <span class="text-[9.5px] font-bold text-slate-500 dark:text-slate-400 shrink-0">${locLabel}</span>
                                                </div>
                                            `;
                                        }).join('')}
                                        ${itemsCount > 3 ? `<p class="text-[10.5px] font-bold text-center text-slate-400 pt-0.5">+${itemsCount - 3} item barang lainnya</p>` : ''}
                                    </div>
                                </div>
                            </div>

                            <!-- Bottom Action Bar: Tombol Cetak Native Touch Target 40px -->
                            <div class="pt-1 border-t border-slate-100 dark:border-slate-800">
                                <button type="button" onclick="window.printVendorReturnA4('${esc(r.id)}')" class="btn-native-action w-full h-10 rounded-xl sm:rounded-2xl border border-slate-200/90 dark:border-slate-700/80 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs font-bold flex items-center justify-center gap-2 shadow-2xs active:scale-95 transition-all cursor-pointer">
                                    <i class="fa-solid fa-print text-xs text-amber-500"></i>
                                    <span>Cetak Surat Jalan Retur Barang (A4)</span>
                                </button>
                            </div>
                        </div>
                    `;
                }).join('')}
            </div>
        `;
    }

    // B. MODE TABEL ANALITIS (JIKA currentViewMode === 'table')
    return `
        <div class="card-native bg-white dark:bg-slate-900 rounded-2xl sm:rounded-3xl border border-slate-200/90 dark:border-slate-800 shadow-2xs overflow-hidden">
            <div class="overflow-x-auto custom-scrollbar">
                <table class="w-full text-left text-xs">
                    <thead class="bg-slate-50/80 dark:bg-slate-800/60 text-[11px] font-black uppercase tracking-wider text-slate-400 border-b border-slate-200 dark:border-slate-800">
                        <tr>
                            <th class="py-3.5 px-4">No. Retur &amp; Tanggal</th>
                            <th class="py-3.5 px-4">Pemasok / Supplier</th>
                            <th class="py-3.5 px-4">Rujukan PO</th>
                            <th class="py-3.5 px-4">Barang Dikembalikan</th>
                            <th class="py-3.5 px-4 text-right">Nilai Klaim HPP</th>
                            <th class="py-3.5 px-4">Penyelesaian</th>
                            <th class="py-3.5 px-4 text-center">Cetak Surat</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-slate-100 dark:divide-slate-800 text-slate-700 dark:text-slate-300">
                        ${sorted.map(r => {
                            const dateStr = r.createdAt ? new Date(r.createdAt).toLocaleDateString('id-ID', { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' }) : '-';
                            const itemsSummary = (r.items || []).map(i => `${i.qty}x ${esc(i.name)}${i.variantName ? ` [${esc(i.variantName)}]` : ''}`).join(', ');

                            let methodBadge = '<span class="px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 text-[10px] font-bold">Lainnya</span>';
                            if (r.settlementMethod === 'ap_deduction') {
                                methodBadge = '<span class="px-2.5 py-1 rounded-full bg-amber-50 text-amber-700 dark:bg-amber-950/60 dark:text-amber-300 text-[10px] font-black inline-flex items-center gap-1 border border-amber-200 dark:border-amber-800/60"><i class="fa-solid fa-file-invoice-dollar"></i> Potong Hutang PO</span>';
                            } else if (r.settlementMethod === 'cash_refund') {
                                methodBadge = '<span class="px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300 text-[10px] font-black inline-flex items-center gap-1 border border-emerald-200 dark:border-emerald-800/60"><i class="fa-solid fa-money-bill-wave"></i> Pengembalian Kas</span>';
                            }

                            return `
                                <tr class="hover:bg-slate-50/70 dark:hover:bg-slate-800/50 transition-colors">
                                    <td class="py-3.5 px-4 font-bold">
                                        <span class="font-mono font-black text-amber-600 dark:text-amber-400 block">${esc(r.id)}</span>
                                        <span class="text-[10px] font-semibold text-slate-400 block mt-0.5">${dateStr}</span>
                                    </td>
                                    <td class="py-3.5 px-4 font-black text-slate-800 dark:text-white">
                                        ${esc(r.supplierName || 'Pemasok Toko')}
                                    </td>
                                    <td class="py-3.5 px-4 font-mono font-bold text-slate-700 dark:text-slate-300">
                                        <span class="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-[11px]">${esc(r.poId || '-')}</span>
                                    </td>
                                    <td class="py-3.5 px-4 max-w-xs">
                                        <p class="truncate font-semibold text-slate-700 dark:text-slate-300" title="${esc(itemsSummary)}">${esc(itemsSummary || '-')}</p>
                                        <span class="text-[10px] font-bold text-slate-400">${r.items ? r.items.length : 0} macam barang</span>
                                    </td>
                                    <td class="py-3.5 px-4 text-right font-black text-amber-600 dark:text-amber-400 text-sm font-mono">
                                        ${fCur(r.totalClaim || 0)}
                                    </td>
                                    <td class="py-3.5 px-4">
                                        ${methodBadge}
                                    </td>
                                    <td class="py-3.5 px-4 text-center">
                                        <button type="button" onclick="window.printVendorReturnA4('${esc(r.id)}')" title="Cetak Surat Jalan Retur Barang" class="btn-native-action h-9 px-3 rounded-xl border border-slate-200/90 dark:border-slate-700/80 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs font-bold inline-flex items-center gap-1.5 shadow-2xs active:scale-95 cursor-pointer">
                                            <i class="fa-solid fa-print text-xs text-amber-500"></i> <span>Cetak A4</span>
                                        </button>
                                    </td>
                                </tr>
                            `;
                        }).join('')}
                    </tbody>
                </table>
            </div>
        </div>
    `;
};

// =====================================================================
// MODAL RETUR PENJUALAN (CUSTOMER SALES RETURN)
// =====================================================================

/**
 * Buka modal pembuatan retur penjualan
 */
export const openSalesReturnModal = (prefillOrderId = null) => {
    selectedOrderForReturn = null;
    returnDraftItems = [];

    const modal = el('modal-sales-return');
    const box = el('modal-sales-return-box');
    if (!modal || !box) return;

    // Reset isi modal
    const searchInput = el('sales-return-order-search');
    if (searchInput) searchInput.value = prefillOrderId || '';

    const contentArea = el('sales-return-order-content');
    if (contentArea) contentArea.innerHTML = `
        <div class="py-12 text-center text-slate-400 dark:text-slate-500">
            <i class="fa-solid fa-barcode text-3xl mb-2 block text-slate-300 dark:text-slate-600"></i>
            <p class="text-xs font-semibold">Ketik atau scan nomor nota struk kasir di atas untuk memuat item belanja.</p>
        </div>
    `;

    openModalAnim(modal, box);
    if (typeof window.pushModalHistory === 'function') window.pushModalHistory('salesReturn');

    if (prefillOrderId) {
        searchOrderForReturn(prefillOrderId);
    }
};

/**
 * Tutup modal retur penjualan
 */
export const closeSalesReturnModal = (forceHistory = false) => {
    const modal = el('modal-sales-return');
    const box = el('modal-sales-return-box');
    if (!modal || !box) return;

    const doClose = () => {
        closeModalAnim(modal, box);
        selectedOrderForReturn = null;
        returnDraftItems = [];
    };

    if (typeof window.requestCloseModal === 'function') {
        window.requestCloseModal('salesReturn', forceHistory, doClose);
    } else {
        doClose();
    }
};

/**
 * Cari pesanan berdasarkan Order ID / Nomor Struk Kasir
 */
export const searchOrderForReturn = async (query) => {
    const q = (query || '').trim();
    if (!q) {
        showToast('Masukkan nomor struk kasir atau Order ID');
        return;
    }

    sLoad('Mencari data transaksi...');

    try {
        let order = (appData.orders || []).find(o => String(o.orderId) === q || String(o.id) === q);
        
        // Coba cari dari antrean Firestore jika tidak ada di memori
        if (!order && typeof firebase !== 'undefined') {
            const snap = await firebase.firestore().collection('freshmart_orders').doc(q).get();
            if (snap.exists) order = { id: snap.id, ...snap.data() };
        }

        hLoad();

        if (!order) {
            showToast('Pesanan tidak ditemukan. Periksa kembali nomor nota!');
            return;
        }

        selectedOrderForReturn = order;
        renderSalesReturnOrderForm(order);
    } catch (e) {
        hLoad();
        console.error('Error mencari order untuk retur:', e);
        showToast('Gagal memproses transaksi: ' + (e.message || ''));
    }
};

/**
 * Render formulir checklist item yang akan diretur dari nota yang dipilih
 */
const renderSalesReturnOrderForm = (order) => {
    const container = el('sales-return-order-content');
    if (!container) return;

    const dateStr = order.dateString || (order.createdAt ? new Date(order.createdAt).toLocaleString('id-ID') : '-');
    const custName = order.customer?.name || order.customerName || 'Pelanggan Umum';
    const channel = order.source === 'pos' ? 'Kasir POS' : 'Website Online';

    // Hitung riwayat qty yang sudah pernah diretur pada order ini
    const priorReturns = (appData.salesReturns || []).filter(r => String(r.orderId) === String(order.orderId || order.id));
    const previouslyReturnedMap = {};
    priorReturns.forEach(r => {
        (r.items || []).forEach(it => {
            const key = `${it.id}_${it.variantName || ''}`;
            previouslyReturnedMap[key] = (previouslyReturnedMap[key] || 0) + (parseFloat(it.qty) || 0);
        });
    });

    // Inisialisasi draft items
    returnDraftItems = (order.items || []).map((it, idx) => {
        const key = `${it.id}_${it.variantName || ''}`;
        const boughtQty = parseFloat(it.qty) || 0;
        const alreadyReturned = previouslyReturnedMap[key] || 0;
        const maxReturnable = Math.max(0, parseFloat((boughtQty - alreadyReturned).toFixed(3)));

        return {
            index: idx,
            id: it.id,
            sku: it.sku || '',
            name: it.name || 'Produk',
            variantName: it.variantName || '',
            price: parseFloat(it.price) || 0,
            boughtQty,
            alreadyReturned,
            maxReturnable,
            returnQty: 0,
            reason: 'Kelebihan Proyek / Sisa Bangunan',
            condition: 'good' // 'good' = restock rak toko, 'damaged' = karantina rusak
        };
    });

    container.innerHTML = `
        <div class="space-y-4">
            <!-- 1. ORDER SUMMARY BENTO (THEMED ACCENT) -->
            <div class="p-4 rounded-2xl border space-y-2 card-native" style="background: rgba(var(--color-primary-rgb), 0.06); border-color: rgba(var(--color-primary-rgb), 0.22);">
                <div class="flex items-center justify-between text-xs font-black">
                    <span class="flex items-center gap-2" style="color: var(--color-primary);">
                        <i class="fa-solid fa-receipt"></i>
                        <span>No. Nota: ${esc(order.orderId || order.id)}</span>
                    </span>
                    <span class="text-slate-500 dark:text-slate-400 font-semibold text-[11px]">${dateStr}</span>
                </div>
                <div class="flex items-center justify-between text-xs text-slate-600 dark:text-slate-400 pt-1 border-t border-slate-200/50 dark:border-slate-700/50">
                    <span>Pelanggan: <b class="text-slate-800 dark:text-white">${esc(custName)}</b> (${channel})</span>
                    <span>Total Belanja: <b class="text-slate-900 dark:text-white font-black">${fCur(order.payment?.grandTotal || order.total || 0)}</b></span>
                </div>
            </div>

            <!-- 2. DAFTAR CHECKLIST BARANG DIREPOSISI KE KARTU NATIVE -->
            <div class="space-y-2.5">
                <div class="flex items-center justify-between">
                    <h4 class="text-xs font-black uppercase tracking-wider text-slate-700 dark:text-slate-300">
                        Pilih Kuantitas Barang yang Diretur:
                    </h4>
                    <span class="text-[10px] font-bold text-slate-400">Total ${returnDraftItems.length} Macam Barang</span>
                </div>

                <div class="space-y-3">
                    ${returnDraftItems.map((item, idx) => {
                        const isExhausted = item.maxReturnable <= 0;
                        return `
                            <div class="p-4 rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-3 shadow-2xs card-native ${isExhausted ? 'opacity-60 bg-slate-50 dark:bg-slate-900/40' : ''}">
                                <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                                    <div class="flex-1">
                                        <h5 class="font-black text-xs sm:text-sm text-slate-800 dark:text-white leading-snug">
                                            ${esc(item.name)}
                                        </h5>
                                        <div class="flex items-center gap-2 flex-wrap mt-1">
                                            ${item.variantName ? `
                                                <span class="px-2.5 py-0.5 rounded-full text-[10px] font-black border" style="background: rgba(var(--color-primary-rgb), 0.1); color: var(--color-primary); border-color: rgba(var(--color-primary-rgb), 0.25);">
                                                    <i class="fa-solid fa-layer-group mr-1 text-[9px]"></i>${esc(item.variantName)}
                                                </span>
                                            ` : ''}
                                            <span class="text-[11px] font-semibold text-slate-500 dark:text-slate-400">
                                                Harga: <b class="text-slate-700 dark:text-slate-200">${fCur(item.price)}</b>
                                            </span>
                                            <span class="text-[11px] text-slate-400">
                                                &middot; Dibeli: <b>${item.boughtQty}</b> unit
                                                ${item.alreadyReturned > 0 ? `(Retur Lalu: <b class="text-rose-500">${item.alreadyReturned}</b>)` : ''}
                                            </span>
                                        </div>
                                    </div>

                                    <!-- Stepper Kuantitas Native App Ergonomis -->
                                    <div class="flex items-center gap-2 shrink-0">
                                        ${isExhausted ? `
                                            <span class="px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-400 font-bold text-xs">
                                                Kuota Retur Habis
                                            </span>
                                        ` : `
                                            <div class="flex items-center bg-slate-100 dark:bg-slate-800 rounded-2xl p-1 border border-slate-200 dark:border-slate-700 focus-within:border-[var(--color-primary)]">
                                                <button 
                                                    type="button" 
                                                    onclick="window.stepReturnQty(${idx}, -1)" 
                                                    class="w-9 h-9 rounded-xl text-slate-600 dark:text-slate-200 hover:bg-white dark:hover:bg-slate-700 font-black text-base flex items-center justify-center active:scale-90 transition-all cursor-pointer shrink-0"
                                                    aria-label="Kurangi"
                                                >
                                                    −
                                                </button>
                                                <input 
                                                    type="number" 
                                                    id="sales-return-qty-input-${idx}"
                                                    step="any" 
                                                    min="0" 
                                                    max="${item.maxReturnable}" 
                                                    value="${item.returnQty}" 
                                                    oninput="window.handleReturnQtyChange(${idx}, this.value)" 
                                                    class="w-14 text-center font-black text-xs sm:text-sm bg-transparent text-slate-800 dark:text-slate-100 focus:outline-none"
                                                >
                                                <button 
                                                    type="button" 
                                                    onclick="window.stepReturnQty(${idx}, 1)" 
                                                    class="w-9 h-9 rounded-xl text-slate-600 dark:text-slate-200 hover:bg-white dark:hover:bg-slate-700 font-black text-base flex items-center justify-center active:scale-90 transition-all cursor-pointer shrink-0"
                                                    aria-label="Tambah"
                                                >
                                                    +
                                                </button>
                                            </div>
                                            <button 
                                                type="button" 
                                                onclick="window.setReturnQtyMax(${idx})" 
                                                class="px-2.5 py-2 rounded-xl text-[10px] font-black uppercase tracking-wider border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 active:scale-95 transition-all cursor-pointer"
                                                title="Retur seluruh kuota yang dibeli (${item.maxReturnable} unit)"
                                            >
                                                Maks
                                            </button>
                                        `}
                                    </div>
                                </div>

                                <!-- Alasan & Kondisi Barang -->
                                ${!isExhausted ? `
                                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2.5 border-t border-slate-100 dark:border-slate-800 text-xs">
                                        <div>
                                            <label class="block text-[10px] font-black uppercase tracking-wider text-slate-400 mb-1">
                                                Alasan Pengembalian:
                                            </label>
                                            <select 
                                                onchange="window.handleReturnReasonChange(${idx}, this.value)" 
                                                class="w-full py-2 px-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-200 font-bold focus:outline-none focus:border-[var(--color-primary)]"
                                            >
                                                <option value="Kelebihan Proyek / Sisa Bangunan">Kelebihan Proyek / Sisa Bangunan</option>
                                                <option value="Salah Ukuran / Salah Beli">Salah Ukuran / Salah Beli</option>
                                                <option value="Cacat Fisik / Kemasan Rusak">Cacat Fisik / Kemasan Rusak</option>
                                                <option value="Keluhan Kualitas Barang">Keluhan Kualitas Barang</option>
                                                <option value="Lainnya">Lainnya</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label class="block text-[10px] font-black uppercase tracking-wider text-slate-400 mb-1">
                                                Kondisi &amp; Alokasi Stok Fisik:
                                            </label>
                                            <select 
                                                onchange="window.handleReturnConditionChange(${idx}, this.value)" 
                                                class="w-full py-2 px-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-200 font-black focus:outline-none focus:border-[var(--color-primary)]"
                                            >
                                                <option value="good">Kondisi Baik (Kembali ke Rak Toko)</option>
                                                <option value="damaged">Cacat/Rusak (Masuk Karantina Rusak)</option>
                                            </select>
                                        </div>
                                    </div>
                                ` : ''}
                            </div>
                        `;
                    }).join('')}
                </div>
            </div>

            <!-- 3. METODE KOMPENSASI & RINGKASAN SUBMIT (NATIVE BENTO BOX) -->
            <div class="p-4 sm:p-5 rounded-2xl sm:rounded-3xl card-native bg-slate-50/80 dark:bg-slate-800/60 border border-slate-200/90 dark:border-slate-700/80 space-y-4">
                <div>
                    <h4 class="text-xs font-black uppercase tracking-wider text-slate-800 dark:text-slate-200">
                        Penyelesaian Pengembalian Dana / Kompensasi:
                    </h4>
                    <p class="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                        Pilih bentuk kompensasi toko kepada pelanggan
                    </p>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                    <label class="p-3.5 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 cursor-pointer flex items-center gap-3 text-xs font-bold hover:border-[var(--color-primary)] transition-all shadow-2xs">
                        <input type="radio" name="sales_refund_method" value="cash" checked onchange="window.recalcSalesReturnSummary()" class="accent-[var(--color-primary)]">
                        <div class="flex items-center gap-2">
                            <span class="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-600 dark:bg-emerald-950/60 dark:text-emerald-400 flex items-center justify-center text-xs">
                                <i class="fa-solid fa-money-bill-wave"></i>
                            </span>
                            <span>Tunai (Kas Laci)</span>
                        </div>
                    </label>

                    <label class="p-3.5 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 cursor-pointer flex items-center gap-3 text-xs font-bold hover:border-[var(--color-primary)] transition-all shadow-2xs">
                        <input type="radio" name="sales_refund_method" value="credit" onchange="window.recalcSalesReturnSummary()" class="accent-[var(--color-primary)]">
                        <div class="flex items-center gap-2">
                            <span class="w-7 h-7 rounded-lg bg-sky-100 text-sky-600 dark:bg-sky-950/60 dark:text-sky-400 flex items-center justify-center text-xs">
                                <i class="fa-solid fa-wallet"></i>
                            </span>
                            <span>Store Credit</span>
                        </div>
                    </label>

                    <label class="p-3.5 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 cursor-pointer flex items-center gap-3 text-xs font-bold hover:border-[var(--color-primary)] transition-all shadow-2xs">
                        <input type="radio" name="sales_refund_method" value="exchange" onchange="window.recalcSalesReturnSummary()" class="accent-[var(--color-primary)]">
                        <div class="flex items-center gap-2">
                            <span class="w-7 h-7 rounded-lg bg-purple-100 text-purple-600 dark:bg-purple-950/60 dark:text-purple-400 flex items-center justify-center text-xs">
                                <i class="fa-solid fa-repeat"></i>
                            </span>
                            <span>Tukar Barang</span>
                        </div>
                    </label>
                </div>

                <div>
                    <label class="block text-[10px] font-black uppercase tracking-wider text-slate-400 mb-1">
                        Catatan Khusus / Keterangan Toko:
                    </label>
                    <input 
                        type="text" 
                        id="sales-return-notes" 
                        placeholder="Misal: Kemasan masih segel rapi, struk asli dilampirkan kasir..." 
                        class="w-full p-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs font-medium focus:outline-none focus:border-[var(--color-primary)] transition-colors"
                    >
                </div>

                <!-- Subtotal Grand Total Refund -->
                <div class="pt-3 border-t border-slate-200 dark:border-slate-700 flex items-center justify-between">
                    <div>
                        <span class="text-xs font-black uppercase tracking-wider text-slate-600 dark:text-slate-300 block">
                            Total Nilai Pengembalian:
                        </span>
                        <span class="text-[10px] text-slate-400">Dihitung otomatis dari kuantitas retur</span>
                    </div>
                    <span id="sales-return-grand-total" class="text-lg sm:text-xl font-black text-rose-600 dark:text-rose-400">
                        Rp 0
                    </span>
                </div>
            </div>
        </div>
    `;

    recalcSalesReturnSummary();
};

/**
 * Stepper kuantitas retur penjualan [−] / [+]
 */
export const stepReturnQty = (idx, delta) => {
    if (!returnDraftItems[idx]) return;
    const current = parseFloat(returnDraftItems[idx].returnQty) || 0;
    const maxVal = returnDraftItems[idx].maxReturnable;
    const next = Math.max(0, Math.min(maxVal, parseFloat((current + delta).toFixed(3))));
    returnDraftItems[idx].returnQty = next;
    const input = el(`sales-return-qty-input-${idx}`);
    if (input) input.value = next;
    recalcSalesReturnSummary();
};

/**
 * Set kuantitas retur maksimum (kembalikan semua kuota beli)
 */
export const setReturnQtyMax = (idx) => {
    if (!returnDraftItems[idx]) return;
    returnDraftItems[idx].returnQty = returnDraftItems[idx].maxReturnable;
    const input = el(`sales-return-qty-input-${idx}`);
    if (input) input.value = returnDraftItems[idx].maxReturnable;
    recalcSalesReturnSummary();
};

export const handleReturnQtyChange = (idx, val) => {
    if (!returnDraftItems[idx]) return;
    const n = Math.max(0, Math.min(returnDraftItems[idx].maxReturnable, parseFloat(val) || 0));
    returnDraftItems[idx].returnQty = n;
    recalcSalesReturnSummary();
};

export const handleReturnReasonChange = (idx, reason) => {
    if (returnDraftItems[idx]) returnDraftItems[idx].reason = reason;
};

export const handleReturnConditionChange = (idx, condition) => {
    if (returnDraftItems[idx]) returnDraftItems[idx].condition = condition;
};

export const recalcSalesReturnSummary = () => {
    const total = returnDraftItems.reduce((sum, it) => sum + (it.returnQty * it.price), 0);
    const label = el('sales-return-grand-total');
    if (label) label.textContent = fCur(Math.round(total));
};

/**
 * Eksekusi Simpan Retur Penjualan
 */
export const submitSalesReturn = async () => {
    if (!selectedOrderForReturn) {
        showToast('Pilih rujukan nota penjualan terlebih dahulu!');
        return;
    }

    const itemsToReturn = returnDraftItems.filter(it => it.returnQty > 0);
    if (itemsToReturn.length === 0) {
        showToast('Pilih minimal 1 barang dengan kuantitas lebih dari 0 untuk diretur!');
        return;
    }

    const totalRefund = Math.round(itemsToReturn.reduce((sum, it) => sum + (it.returnQty * it.price), 0));
    const refundMethodRadio = document.querySelector('input[name="sales_refund_method"]:checked');
    const refundMethod = refundMethodRadio ? refundMethodRadio.value : 'cash';
    const notes = el('sales-return-notes')?.value || '';

    const confirmMsg = `Konfirmasi proses retur penjualan senilai ${fCur(totalRefund)} dengan metode: ${refundMethod.toUpperCase()}?`;
    if (!await showConfirm('Proses Retur Penjualan', confirmMsg, null, 'Ya, Proses Retur', false)) return;

    sLoad('Memproses retur & merestorasi persediaan...');

    try {
        const timestamp = new Date().toISOString();
        const randId = Math.random().toString(36).substring(2, 6).toUpperCase();
        const returnId = `RMA-SLS-${new Date().toISOString().slice(0, 10).replace(/-/g, '')}-${randId}`;

        // 1. Restorasi Stok Fisik & FIFO Lot
        itemsToReturn.forEach(it => {
            const prod = (appData.products || []).find(p => String(p.id) === String(it.id));
            if (prod) {
                const varObj = it.variantName && Array.isArray(prod.variants) ? prod.variants.find(v => v.name === it.variantName) : null;
                const hppToUse = (varObj && varObj.hpp) ? parseFloat(varObj.hpp) : (parseFloat(prod.hpp) || it.price);
                restoreFifoStock(prod, {
                    returnNumber: returnId,
                    orderId: selectedOrderForReturn.orderId || selectedOrderForReturn.id,
                    qty: it.returnQty,
                    buyPrice: hppToUse,
                    variantName: it.variantName,
                    condition: it.condition
                });
            }
        });

        // 2. Jika pengembalian tunai (cash refund), catat pengeluaran kas di buku kas
        if (refundMethod === 'cash') {
            if (!Array.isArray(appData.expenses)) appData.expenses = [];
            appData.expenses.unshift({
                id: `EXP-RET-${Date.now()}`,
                date: timestamp.slice(0, 10),
                createdAt: timestamp,
                category: 'Retur Penjualan',
                description: `Pengembalian Tunai Retur Nota ${selectedOrderForReturn.orderId || selectedOrderForReturn.id} (${returnId})`,
                amount: totalRefund,
                paymentSource: 'kas_toko',
                source: 'pos_cashier',
                receiptNumber: returnId
            });
        }

        // 3. Catat entri retur ke appData.salesReturns
        const newReturnRecord = {
            id: returnId,
            orderId: selectedOrderForReturn.orderId || selectedOrderForReturn.id,
            createdAt: timestamp,
            customerName: selectedOrderForReturn.customer?.name || selectedOrderForReturn.customerName || 'Pelanggan Umum',
            customerPhone: selectedOrderForReturn.customer?.wa || selectedOrderForReturn.customer?.phone || '',
            cashierName: selectedOrderForReturn.cashierName || 'Kasir Toko',
            source: selectedOrderForReturn.source || 'pos',
            items: itemsToReturn.map(it => ({
                id: it.id,
                sku: it.sku,
                name: it.name,
                variantName: it.variantName,
                qty: it.returnQty,
                soldPrice: it.price,
                subtotalRefund: Math.round(it.returnQty * it.price),
                reason: it.reason,
                condition: it.condition,
                restockLocation: it.condition === 'good' ? 'store' : 'quarantine'
            })),
            totalRefund,
            refundMethod,
            status: 'completed',
            notes
        };

        if (!Array.isArray(appData.salesReturns)) appData.salesReturns = [];
        appData.salesReturns.unshift(newReturnRecord);

        // 4. Simpan ke database
        await saveApp(['salesReturns', 'expenses', 'products']);

        hLoad();
        closeSalesReturnModal();
        renderReturnsView();

        showToast(`✅ Retur Penjualan ${returnId} berhasil diproses!`);

        // Tampilkan opsi cetak
        if (await showConfirm('Cetak Nota Bukti Retur', 'Cetak Nota Bukti Retur Penjualan sekarang?', null, 'Ya, Cetak Nota', false)) {
            printSalesReturnThermal(returnId);
        }
    } catch (e) {
        hLoad();
        console.error('Error proses sales return:', e);
        showToast('Gagal memproses retur: ' + (e.message || ''));
    }
};

// =====================================================================
// MODAL RETUR PEMBELIAN KE PEMASOK (VENDOR PURCHASE RETURN)
// =====================================================================

let vendorReturnDraftItems = [];

/**
 * Buka modal pembuatan retur pembelian supplier
 */
export const openVendorReturnModal = (prefillSupplierId = null, prefillPoId = null) => {
    vendorReturnDraftItems = [];

    const modal = el('modal-vendor-return');
    const box = el('modal-vendor-return-box');
    if (!modal || !box) return;

    renderVendorReturnFormHtml(prefillSupplierId, prefillPoId);

    openModalAnim(modal, box);
    if (typeof window.pushModalHistory === 'function') window.pushModalHistory('vendorReturn');
};

/**
 * Tutup modal retur supplier
 */
export const closeVendorReturnModal = (forceHistory = false) => {
    const modal = el('modal-vendor-return');
    const box = el('modal-vendor-return-box');
    if (!modal || !box) return;

    const doClose = () => {
        closeModalAnim(modal, box);
        vendorReturnDraftItems = [];
    };

    if (typeof window.requestCloseModal === 'function') {
        window.requestCloseModal('vendorReturn', forceHistory, doClose);
    } else {
        doClose();
    }
};

/**
 * Render form retur supplier
 */
const renderVendorReturnFormHtml = (prefillSupId = null, prefillPoId = null) => {
    const container = el('vendor-return-modal-content');
    if (!container) return;

    const suppliers = appData.suppliers || [];
    const purchases = appData.purchases || [];

    container.innerHTML = `
        <div class="space-y-4">
            <!-- 1. PILIHAN PEMASOK & RUJUKAN PO -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                    <label class="block text-[11px] font-black uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                        Pilih Rekanan Supplier:
                    </label>
                    <select 
                        id="vendor-return-supplier-select" 
                        onchange="window.handleVendorSupplierChange(this.value)" 
                        class="w-full p-3 rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs font-bold text-slate-800 dark:text-white focus:outline-none focus:border-[var(--color-primary)] transition-colors"
                    >
                        <option value="">-- Pilih Supplier Pemasok --</option>
                        ${suppliers.map(s => `<option value="${esc(s.id)}" ${String(s.id) === String(prefillSupId) ? 'selected' : ''}>${esc(s.name)}</option>`).join('')}
                    </select>
                </div>
                <div>
                    <label class="block text-[11px] font-black uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                        Rujukan PO Kulakan (Opsional):
                    </label>
                    <select 
                        id="vendor-return-po-select" 
                        class="w-full p-3 rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs font-semibold text-slate-800 dark:text-white focus:outline-none focus:border-[var(--color-primary)] transition-colors"
                    >
                        <option value="">-- Tidak Terikat PO Khusus --</option>
                        ${purchases.map(po => `<option value="${esc(po.id)}" ${String(po.id) === String(prefillPoId) ? 'selected' : ''}>${esc(po.poNumber || po.id)} - ${fCur(po.totalPrice || po.total || 0)}</option>`).join('')}
                    </select>
                </div>
            </div>

            <!-- 2. DAFTAR BARANG YANG DIKEMBALIKAN -->
            <div class="space-y-2.5">
                <div class="flex items-center justify-between">
                    <div>
                        <h4 class="text-xs font-black uppercase tracking-wider text-slate-700 dark:text-slate-300">
                            Daftar Barang yang Dikembalikan:
                        </h4>
                        <p class="text-[10px] text-slate-400 mt-0.5">Pilih produk, varian spesifik, dan tentukan lokasi potong stok</p>
                    </div>
                    <button 
                        type="button" 
                        onclick="window.addVendorReturnItemRow()" 
                        class="btn-native-action px-3.5 py-1.5 rounded-xl font-black text-xs flex items-center gap-1.5 cursor-pointer active:scale-95 transition-all shadow-2xs"
                        style="background: rgba(var(--color-primary-rgb), 0.12); color: var(--color-primary); border: 1px solid rgba(var(--color-primary-rgb), 0.25);"
                    >
                        <i class="fa-solid fa-plus text-[10px]"></i> Tambah Barang
                    </button>
                </div>

                <div id="vendor-return-items-list" class="space-y-3">
                    <!-- Diisi dinamis lewat addVendorReturnItemRow -->
                </div>
            </div>

            <!-- 3. METODE KOMPENSASI PEMASOK -->
            <div class="p-4 sm:p-5 rounded-2xl sm:rounded-3xl card-native bg-slate-50/80 dark:bg-slate-800/60 border border-slate-200/90 dark:border-slate-700/80 space-y-4">
                <div>
                    <h4 class="text-xs font-black uppercase tracking-wider text-slate-800 dark:text-slate-200">
                        Penyelesaian Finansial Pemasok:
                    </h4>
                    <p class="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                        Potong hutang invoice pembelian atau pengembalian dana tunai / transfer
                    </p>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    <label class="p-3.5 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 cursor-pointer flex items-center gap-3 text-xs font-bold hover:border-amber-500 transition-all shadow-2xs">
                        <input type="radio" name="vendor_settlement_method" value="ap_deduction" checked onchange="window.recalcVendorReturnSummary()" class="accent-amber-500">
                        <div class="flex items-center gap-2">
                            <span class="w-7 h-7 rounded-lg bg-purple-100 text-purple-600 dark:bg-purple-950/60 dark:text-purple-400 flex items-center justify-center text-xs">
                                <i class="fa-solid fa-file-invoice-dollar"></i>
                            </span>
                            <span>Potong Hutang PO (AP Deduction)</span>
                        </div>
                    </label>

                    <label class="p-3.5 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 cursor-pointer flex items-center gap-3 text-xs font-bold hover:border-amber-500 transition-all shadow-2xs">
                        <input type="radio" name="vendor_settlement_method" value="cash_refund" onchange="window.recalcVendorReturnSummary()" class="accent-amber-500">
                        <div class="flex items-center gap-2">
                            <span class="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-600 dark:bg-emerald-950/60 dark:text-emerald-400 flex items-center justify-center text-xs">
                                <i class="fa-solid fa-money-bill-wave"></i>
                            </span>
                            <span>Pengembalian Kas / Transfer</span>
                        </div>
                    </label>
                </div>

                <div>
                    <label class="block text-[10px] font-black uppercase tracking-wider text-slate-400 mb-1">
                        Catatan Serah Terima / Nomor Resi Ekspedisi:
                    </label>
                    <input 
                        type="text" 
                        id="vendor-return-notes" 
                        placeholder="Misal: Diserahkan langsung ke supir distributor, nomor tanda terima terlampir..." 
                        class="w-full p-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs font-medium focus:outline-none focus:border-amber-500 transition-colors"
                    >
                </div>

                <!-- Subtotal Klaim Retur Supplier -->
                <div class="pt-3 border-t border-slate-200 dark:border-slate-700 flex items-center justify-between">
                    <div>
                        <span class="text-xs font-black uppercase tracking-wider text-slate-600 dark:text-slate-300 block">
                            Total Klaim Retur Supplier:
                        </span>
                        <span class="text-[10px] text-slate-400">Total nominal HPP yang diklaim ke distributor</span>
                    </div>
                    <span id="vendor-return-grand-total" class="text-lg sm:text-xl font-black text-amber-600 dark:text-amber-400">
                        Rp 0
                    </span>
                </div>
            </div>
        </div>
    `;

    addVendorReturnItemRow();
};

export const handleVendorSupplierChange = (supId) => {
    const poSelect = el('vendor-return-po-select');
    if (!poSelect) return;
    const purchases = (appData.purchases || []).filter(p => !supId || String(p.supplierId) === String(supId));
    poSelect.innerHTML = `
        <option value="">-- Tidak Terikat PO Khusus --</option>
        ${purchases.map(po => `<option value="${esc(po.id)}">${esc(po.poNumber || po.id)} - Sisa Hutang: ${fCur(po.remainingDebt || 0)}</option>`).join('')}
    `;
};

/**
 * Tambah kartu baris barang retur supplier (Native Card Box)
 */
export const addVendorReturnItemRow = () => {
    const list = el('vendor-return-items-list');
    if (!list) return;

    const rowIdx = vendorReturnDraftItems.length;
    vendorReturnDraftItems.push({
        productId: '',
        variantName: '',
        qty: 1,
        buyPrice: 0,
        fromLocation: 'store',
        reason: 'Barang Cacat Pabrik'
    });

    const products = appData.products || [];

    const rowDiv = document.createElement('div');
    rowDiv.id = `vendor-item-row-${rowIdx}`;
    rowDiv.className = 'card-native p-4 rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-3 shadow-2xs';
    rowDiv.innerHTML = `
        <div class="flex items-center justify-between gap-2 pb-1.5 border-b border-slate-100 dark:border-slate-800/80">
            <span class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-slate-100 dark:bg-slate-800 text-slate-500">
                Barang #${rowIdx + 1}
            </span>
            <button 
                type="button" 
                onclick="window.removeVendorReturnItemRow(${rowIdx})" 
                class="btn-native-icon w-8 h-8 rounded-xl text-slate-400 hover:text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-950/40 flex items-center justify-center cursor-pointer transition-colors"
                title="Hapus baris ini"
            >
                <i class="fa-solid fa-trash text-xs"></i>
            </button>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
                <label class="block text-[10px] font-black uppercase tracking-wider text-slate-400 mb-1">
                    Pilih Produk Master:
                </label>
                <select 
                    onchange="window.handleVendorItemProductSelect(${rowIdx}, this.value)" 
                    class="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs font-bold text-slate-800 dark:text-white focus:outline-none focus:border-[var(--color-primary)] transition-colors"
                >
                    <option value="">-- Pilih Barang --</option>
                    ${products.map(p => `<option value="${esc(p.id)}">${esc(p.name)} (Stok: ${p.stock}${Array.isArray(p.variants) && p.variants.length > 0 ? ` &middot; ${p.variants.length} Varian` : ''})</option>`).join('')}
                </select>

                <!-- Kontainer Pemilih Varian Spesifik (Dinamis bertema toko) -->
                <div id="vendor-item-variant-box-${rowIdx}" class="hidden mt-2 p-3 rounded-xl border card-native" style="background: rgba(var(--color-primary-rgb), 0.06); border-color: rgba(var(--color-primary-rgb), 0.22);"></div>
            </div>

            <div class="grid grid-cols-2 gap-2.5 items-end">
                <div>
                    <label class="block text-[10px] font-black uppercase tracking-wider text-slate-400 mb-1">
                        Jumlah (Qty):
                    </label>
                    <!-- Stepper Kuantitas Vendor -->
                    <div class="flex items-center bg-slate-100 dark:bg-slate-800 rounded-2xl p-1 border border-slate-200 dark:border-slate-700 focus-within:border-[var(--color-primary)]">
                        <button 
                            type="button" 
                            onclick="window.stepVendorItemQty(${rowIdx}, -1)" 
                            class="w-8 h-8 rounded-xl text-slate-600 dark:text-slate-200 hover:bg-white dark:hover:bg-slate-700 font-black text-sm flex items-center justify-center active:scale-90 transition-all cursor-pointer shrink-0"
                            aria-label="Kurangi"
                        >
                            −
                        </button>
                        <input 
                            type="number" 
                            id="vendor-item-qty-${rowIdx}" 
                            step="any" 
                            min="0.01" 
                            value="1" 
                            oninput="window.handleVendorItemQtyChange(${rowIdx}, this.value)" 
                            class="w-12 text-center font-black text-xs bg-transparent text-slate-800 dark:text-slate-100 focus:outline-none"
                        >
                        <button 
                            type="button" 
                            onclick="window.stepVendorItemQty(${rowIdx}, 1)" 
                            class="w-8 h-8 rounded-xl text-slate-600 dark:text-slate-200 hover:bg-white dark:hover:bg-slate-700 font-black text-sm flex items-center justify-center active:scale-90 transition-all cursor-pointer shrink-0"
                            aria-label="Tambah"
                        >
                            +
                        </button>
                    </div>
                </div>
                <div>
                    <label class="block text-[10px] font-black uppercase tracking-wider text-slate-400 mb-1">
                        Harga Modal / HPP:
                    </label>
                    <input 
                        type="number" 
                        id="vendor-item-price-${rowIdx}" 
                        value="0" 
                        oninput="window.handleVendorItemPriceChange(${rowIdx}, this.value)" 
                        class="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs font-black text-right text-slate-800 dark:text-white focus:outline-none focus:border-[var(--color-primary)] transition-colors"
                    >
                </div>
            </div>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs pt-2 border-t border-slate-100 dark:border-slate-800">
            <div>
                <label class="block text-[10px] font-black uppercase tracking-wider text-slate-400 mb-1">
                    Ambil dari Lokasi Fisik:
                </label>
                <select 
                    onchange="window.handleVendorItemLocationChange(${rowIdx}, this.value)" 
                    class="w-full p-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs font-bold text-slate-700 dark:text-slate-200 focus:outline-none focus:border-[var(--color-primary)]"
                >
                    <option value="store">Rak Toko (storeStock)</option>
                    <option value="warehouse">Gudang Belakang (warehouseStock)</option>
                    <option value="quarantine">Karantina Rusak (damagedStock)</option>
                </select>
            </div>
            <div>
                <label class="block text-[10px] font-black uppercase tracking-wider text-slate-400 mb-1">
                    Alasan Retur ke Distributor:
                </label>
                <select 
                    onchange="window.handleVendorItemReasonChange(${rowIdx}, this.value)" 
                    class="w-full p-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs font-bold text-slate-700 dark:text-slate-200 focus:outline-none focus:border-[var(--color-primary)]"
                >
                    <option value="Barang Cacat Pabrik">Barang Cacat Pabrik</option>
                    <option value="Kemasan Rusak / Bocor">Kemasan Rusak / Bocor</option>
                    <option value="Kadaluarsa / Expired">Kadaluarsa / Expired</option>
                    <option value="Salah Kirim Distributor">Salah Kirim Distributor</option>
                </select>
            </div>
        </div>
    `;

    list.appendChild(rowDiv);
};

export const removeVendorReturnItemRow = (idx) => {
    const row = el(`vendor-item-row-${idx}`);
    if (row) row.remove();
    if (vendorReturnDraftItems[idx]) vendorReturnDraftItems[idx].removed = true;
    recalcVendorReturnSummary();
};

/**
 * Stepper kuantitas retur supplier [−] / [+]
 */
export const stepVendorItemQty = (idx, delta) => {
    if (!vendorReturnDraftItems[idx]) return;
    const current = parseFloat(vendorReturnDraftItems[idx].qty) || 1;
    const next = Math.max(1, parseFloat((current + delta).toFixed(3)));
    vendorReturnDraftItems[idx].qty = next;
    const input = el(`vendor-item-qty-${idx}`);
    if (input) input.value = next;
    recalcVendorReturnSummary();
};

export const handleVendorItemProductSelect = (idx, prodId) => {
    if (!vendorReturnDraftItems[idx]) return;
    vendorReturnDraftItems[idx].productId = prodId;
    const prod = (appData.products || []).find(p => String(p.id) === String(prodId));
    const variantBox = el(`vendor-item-variant-box-${idx}`);

    if (prod && Array.isArray(prod.variants) && prod.variants.length > 0) {
        // Produk memiliki varian: otomatis set opsi varian pertama dan tampilkan selector bertema
        const firstVar = prod.variants[0];
        vendorReturnDraftItems[idx].variantName = firstVar.name || '';
        const hpp = parseFloat(firstVar.hpp) || parseFloat(prod.hpp) || 0;
        vendorReturnDraftItems[idx].buyPrice = hpp;

        if (variantBox) {
            variantBox.className = 'mt-2 p-3 rounded-2xl border card-native block space-y-1.5';
            variantBox.style.background = 'rgba(var(--color-primary-rgb), 0.08)';
            variantBox.style.borderColor = 'rgba(var(--color-primary-rgb), 0.25)';
            variantBox.innerHTML = `
                <div class="flex items-center justify-between">
                    <label class="block text-[10px] font-black uppercase tracking-wider" style="color: var(--color-primary);">
                        <i class="fa-solid fa-layer-group mr-1"></i>Pilih Varian Spesifik:
                    </label>
                    <span class="text-[9.5px] font-bold px-2 py-0.5 rounded-full" style="background: rgba(var(--color-primary-rgb), 0.15); color: var(--color-primary);">
                        ${prod.variants.length} Varian
                    </span>
                </div>
                <select 
                    onchange="window.handleVendorItemVariantSelect(${idx}, this.value)" 
                    class="w-full p-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs font-black text-slate-800 dark:text-white focus:outline-none"
                >
                    ${prod.variants.map(v => {
                        const vStore = v.storeStock !== undefined ? v.storeStock : (v.stock || 0);
                        const vWh = v.warehouseStock !== undefined ? v.warehouseStock : 0;
                        const vDamaged = v.damagedStock || 0;
                        const vHpp = parseFloat(v.hpp) || parseFloat(prod.hpp) || 0;
                        return `<option value="${esc(v.name)}">${esc(v.name)} (Rak: ${vStore}, Gudang: ${vWh}, Rusak: ${vDamaged} &middot; HPP: ${fCur(vHpp)})</option>`;
                    }).join('')}
                </select>
            `;
        }

        const input = el(`vendor-item-price-${idx}`);
        if (input) input.value = hpp;
    } else {
        // Produk tunggal (tanpa varian)
        vendorReturnDraftItems[idx].variantName = '';
        if (variantBox) {
            variantBox.className = 'hidden';
            variantBox.innerHTML = '';
        }
        if (prod) {
            const hpp = parseFloat(prod.hpp) || 0;
            vendorReturnDraftItems[idx].buyPrice = hpp;
            const input = el(`vendor-item-price-${idx}`);
            if (input) input.value = hpp;
        }
    }
    recalcVendorReturnSummary();
};

export const handleVendorItemVariantSelect = (idx, variantName) => {
    if (!vendorReturnDraftItems[idx]) return;
    vendorReturnDraftItems[idx].variantName = variantName;
    const prod = (appData.products || []).find(p => String(p.id) === String(vendorReturnDraftItems[idx].productId));
    if (prod && Array.isArray(prod.variants)) {
        const v = prod.variants.find(x => x.name === variantName);
        if (v) {
            const hpp = parseFloat(v.hpp) || parseFloat(prod.hpp) || 0;
            vendorReturnDraftItems[idx].buyPrice = hpp;
            const input = el(`vendor-item-price-${idx}`);
            if (input) input.value = hpp;
        }
    }
    recalcVendorReturnSummary();
};

export const handleVendorItemQtyChange = (idx, val) => {
    if (vendorReturnDraftItems[idx]) vendorReturnDraftItems[idx].qty = parseFloat(val) || 0;
    recalcVendorReturnSummary();
};

export const handleVendorItemPriceChange = (idx, val) => {
    if (vendorReturnDraftItems[idx]) vendorReturnDraftItems[idx].buyPrice = parseFloat(val) || 0;
    recalcVendorReturnSummary();
};

export const handleVendorItemLocationChange = (idx, loc) => {
    if (vendorReturnDraftItems[idx]) vendorReturnDraftItems[idx].fromLocation = loc;
};

export const handleVendorItemReasonChange = (idx, reason) => {
    if (vendorReturnDraftItems[idx]) vendorReturnDraftItems[idx].reason = reason;
};

export const recalcVendorReturnSummary = () => {
    const total = vendorReturnDraftItems
        .filter(it => !it.removed && it.productId && it.qty > 0)
        .reduce((sum, it) => sum + (it.qty * it.buyPrice), 0);
    const label = el('vendor-return-grand-total');
    if (label) label.textContent = fCur(Math.round(total));
};

/**
 * Eksekusi Simpan Retur Pembelian Supplier
 */
export const submitVendorReturn = async () => {
    const supSelect = el('vendor-return-supplier-select');
    const supId = supSelect?.value;
    if (!supId) {
        showToast('Pilih rekanan supplier terlebih dahulu!');
        return;
    }

    const supplier = (appData.suppliers || []).find(s => String(s.id) === String(supId));
    const activeItems = vendorReturnDraftItems.filter(it => !it.removed && it.productId && it.qty > 0);

    if (activeItems.length === 0) {
        showToast('Pilih minimal 1 barang dengan kuantitas valid untuk diretur!');
        return;
    }

    const poId = el('vendor-return-po-select')?.value || null;
    const settlementMethodRadio = document.querySelector('input[name="vendor_settlement_method"]:checked');
    const settlementMethod = settlementMethodRadio ? settlementMethodRadio.value : 'ap_deduction';
    const notes = el('vendor-return-notes')?.value || '';
    const totalClaim = Math.round(activeItems.reduce((sum, it) => sum + (it.qty * it.buyPrice), 0));

    const confirmMsg = `Kirim retur barang ke ${supplier?.name || 'Supplier'} senilai klaim ${fCur(totalClaim)}?`;
    if (!await showConfirm('Kirim Retur Supplier', confirmMsg, null, 'Ya, Kirim Retur', false)) return;

    sLoad('Memproses pengembalian barang ke supplier...');

    try {
        const timestamp = new Date().toISOString();
        const randId = Math.random().toString(36).substring(2, 6).toUpperCase();
        const returnId = `RMA-VND-${new Date().toISOString().slice(0, 10).replace(/-/g, '')}-${randId}`;

        // 1. Potong Stok Fisik Produk
        activeItems.forEach(it => {
            const prod = (appData.products || []).find(p => String(p.id) === String(it.productId));
            if (prod) {
                deductVendorReturnStock(prod, {
                    qty: it.qty,
                    variantName: it.variantName,
                    fromLocation: it.fromLocation
                });
            }
        });

        // 2. Jika potong hutang PO, kurangi sisa hutang PO terkait
        if (settlementMethod === 'ap_deduction' && poId) {
            const po = (appData.purchases || []).find(p => String(p.id) === String(poId));
            if (po && po.remainingDebt) {
                po.remainingDebt = Math.max(0, Math.round(po.remainingDebt - totalClaim));
                if (po.remainingDebt === 0) po.paymentStatus = 'paid';
            }
        }

        // 3. Simpan entri ke appData.vendorReturns
        const newRecord = {
            id: returnId,
            supplierId: supId,
            supplierName: supplier?.name || 'Pemasok Toko',
            poId,
            createdAt: timestamp,
            items: activeItems.map(it => {
                const prod = (appData.products || []).find(p => String(p.id) === String(it.productId));
                return {
                    id: it.productId,
                    name: prod ? prod.name : 'Produk',
                    variantName: it.variantName || '',
                    sku: it.sku || (prod?.sku) || '',
                    qty: it.qty,
                    buyPrice: it.buyPrice,
                    subtotalClaim: Math.round(it.qty * it.buyPrice),
                    subtotalCost: Math.round(it.qty * it.buyPrice),
                    fromLocation: it.fromLocation,
                    reason: it.reason
                };
            }),
            totalClaim,
            settlementMethod,
            status: 'completed',
            notes
        };

        if (!Array.isArray(appData.vendorReturns)) appData.vendorReturns = [];
        appData.vendorReturns.unshift(newRecord);

        // 4. Simpan ke database
        await saveApp(['vendorReturns', 'purchases', 'products']);

        hLoad();
        closeVendorReturnModal();
        renderReturnsView();

        showToast(`✅ Retur Supplier ${returnId} berhasil dicatat!`);

        if (await showConfirm('Cetak Surat Jalan Retur', 'Cetak Surat Pengembalian Barang ke Supplier sekarang?', null, 'Ya, Cetak Surat', false)) {
            printVendorReturnA4(returnId);
        }
    } catch (e) {
        hLoad();
        console.error('Error proses vendor return:', e);
        showToast('Gagal memproses retur supplier: ' + (e.message || ''));
    }
};

// =====================================================================
// INTEGRASI CETAK DOKUMEN NOTA RETUR (THERMAL & A4)
// =====================================================================

/**
 * Cetak Struk Retur Thermal via RawBT / Bluetooth
 */
export const printSalesReturnThermal = (returnId) => {
    const record = (appData.salesReturns || []).find(r => r.id === returnId);
    if (!record) return showToast('Data retur tidak ditemukan!');

    // 1. Prioritas 1: Gunakan Engine Direct Print Struk Thermal Resmi (RawBT / Bluetooth / Mobile)
    if (typeof window.printSalesReturnReceiptDirect === 'function') {
        window.printSalesReturnReceiptDirect(record);
        return;
    }

    // 2. Prioritas 2: Buka Preview Struk Thermal via Generator Payload Resmi
    if (typeof window.buildSalesReturnReceiptPayload === 'function') {
        const payload = window.buildSalesReturnReceiptPayload(record);
        if (typeof window.sendToRawBT === 'function') {
            window.sendToRawBT(payload.base64, payload.plainText, payload.html, {
                title: `Nota Retur Penjualan #${record.id}`,
                previewLines: payload.previewLines,
                rebuild: () => window.buildSalesReturnReceiptPayload(record)
            });
            return;
        }
    }

    // 3. Prioritas 3: Buka Modal Struk Kasir Universal (receipt-preview-modal)
    const storeName = appData.store?.name || 'TOKO PUTRI';
    const storeAddr = appData.store?.address || '';
    const storeWa   = appData.store?.wa || '';

    let h = `<div class="text-center font-bold" style="font-size:14px;margin-bottom:2px;">${esc(storeName)}</div>`;
    if (storeAddr) h += `<div class="text-center" style="font-size:10px;color:#475569;margin-bottom:2px;">${esc(storeAddr)}</div>`;
    if (storeWa) h += `<div class="text-center" style="font-size:11px;margin-bottom:4px;">WA: ${esc(storeWa)}</div>`;
    h += `<div class="utp-separator"></div>`;
    h += `<div class="text-center font-bold" style="font-size:12px;margin:2px 0;">NOTA RETUR PENJUALAN</div>`;
    h += `<div class="utp-separator"></div>`;
    h += `<div class="utp-row"><div class="utp-col-left">No Retur</div><div class="utp-col-right">#${esc(record.id)}</div></div>`;
    h += `<div class="utp-row"><div class="utp-col-left">No Nota</div><div class="utp-col-right">#${esc(record.orderId || '-')}</div></div>`;
    h += `<div class="utp-row"><div class="utp-col-left">Tanggal</div><div class="utp-col-right">${new Date(record.createdAt).toLocaleDateString('id-ID')}</div></div>`;
    h += `<div class="utp-row"><div class="utp-col-left">Pelanggan</div><div class="utp-col-right">${esc(record.customerName || 'Umum')}</div></div>`;
    h += `<div class="utp-separator"></div>`;

    (record.items || []).forEach(it => {
        h += `<div style="font-weight:bold;white-space:pre-wrap;">${esc(it.name)}${it.variantName ? ` (${esc(it.variantName)})` : ''}</div>`;
        h += `<div class="utp-row"><div class="utp-col-left">  ${it.qty} x ${fCur(it.soldPrice)}</div><div class="utp-col-right">${fCur(it.subtotalRefund)}</div></div>`;
        if (it.reason) h += `<div style="font-size:9.5px;color:#64748b;font-style:italic;">  * Alasan: ${esc(it.reason)}</div>`;
        const condLbl = it.condition === 'bad' ? 'Cacat/Rusak (Karantina)' : 'Kondisi Baik (Rak Toko)';
        h += `<div style="font-size:9.5px;color:#64748b;font-style:italic;">  * ${condLbl}</div>`;
    });

    h += `<div class="utp-double-separator"></div>`;
    h += `<div class="utp-row font-bold text-[12px]"><div class="utp-col-left">TOTAL RETUR</div><div class="utp-col-right">${fCur(record.totalRefund)}</div></div>`;
    h += `<div class="utp-double-separator"></div>`;

    let methodLbl = 'REFUND TUNAI';
    if (record.refundMethod === 'credit') methodLbl = 'SALDO KREDIT TOKO';
    else if (record.refundMethod === 'exchange') methodLbl = 'TUKAR BARANG LAIN';
    else if (record.refundMethod) methodLbl = String(record.refundMethod).toUpperCase();
    h += `<div class="utp-row"><div class="utp-col-left">Kompensasi</div><div class="utp-col-right">${methodLbl}</div></div>`;

    h += `<div class="utp-separator"></div>`;
    h += `<div class="text-center" style="font-size:9.5px;margin:4px 0;">Barang retur telah diverifikasi oleh toko.<br>Terima kasih atas kerja samanya.</div>`;
    h += `<div style="height:15px;"></div>`;

    const paperEl = document.getElementById('receipt-paper-content');
    const mRec = document.getElementById('receipt-preview-modal');
    const bRec = document.getElementById('receipt-preview-modal-box');
    if (paperEl && mRec) {
        paperEl.innerHTML = h;
        if (mRec.classList.contains('hidden') && typeof window.pushModalHistory === 'function') {
            window.pushModalHistory('receipt');
        }
        if (typeof window.openModalAnim === 'function') window.openModalAnim(mRec, bRec);
        else mRec.classList.remove('hidden');
    } else if (typeof window.renderThermalDOMAndPrint === 'function') {
        window.renderThermalDOMAndPrint(h);
    } else {
        window.print();
    }
};

/**
 * Cetak Dokumen Nota Retur Penjualan A4 Resmi
 */
export const printSalesReturnA4 = (returnId) => {
    const record = (appData.salesReturns || []).find(r => r.id === returnId);
    if (!record) return showToast('Data retur tidak ditemukan!');

    if (typeof window.openDocPreview === 'function') {
        window.openDocPreview('sales_return', { returnId });
    } else {
        window.print();
    }
};

/**
 * Cetak Dokumen Pengembalian Barang ke Supplier A4
 */
export const printVendorReturnA4 = (returnId) => {
    const record = (appData.vendorReturns || []).find(r => r.id === returnId);
    if (!record) return showToast('Data retur supplier tidak ditemukan!');

    if (typeof window.openDocPreview === 'function') {
        window.openDocPreview('vendor_return', { returnId });
    } else {
        window.print();
    }
};

// Ekspos fungsi ke objek global window
if (typeof window !== 'undefined') {
    window.renderReturnsView = renderReturnsView;
    window.switchReturnsTab = switchReturnsTab;
    window.switchReturnsViewMode = switchReturnsViewMode;
    window.handleReturnsSearch = handleReturnsSearch;
    window.openSalesReturnModal = openSalesReturnModal;
    window.closeSalesReturnModal = closeSalesReturnModal;
    window.searchOrderForReturn = searchOrderForReturn;
    window.stepReturnQty = stepReturnQty;
    window.setReturnQtyMax = setReturnQtyMax;
    window.handleReturnQtyChange = handleReturnQtyChange;
    window.handleReturnReasonChange = handleReturnReasonChange;
    window.handleReturnConditionChange = handleReturnConditionChange;
    window.recalcSalesReturnSummary = recalcSalesReturnSummary;
    window.submitSalesReturn = submitSalesReturn;
    window.openVendorReturnModal = openVendorReturnModal;
    window.closeVendorReturnModal = closeVendorReturnModal;
    window.handleVendorSupplierChange = handleVendorSupplierChange;
    window.addVendorReturnItemRow = addVendorReturnItemRow;
    window.removeVendorReturnItemRow = removeVendorReturnItemRow;
    window.stepVendorItemQty = stepVendorItemQty;
    window.handleVendorItemProductSelect = handleVendorItemProductSelect;
    window.handleVendorItemVariantSelect = handleVendorItemVariantSelect;
    window.handleVendorItemQtyChange = handleVendorItemQtyChange;
    window.handleVendorItemPriceChange = handleVendorItemPriceChange;
    window.handleVendorItemLocationChange = handleVendorItemLocationChange;
    window.handleVendorItemReasonChange = handleVendorItemReasonChange;
    window.recalcVendorReturnSummary = recalcVendorReturnSummary;
    window.submitVendorReturn = submitVendorReturn;
    window.printSalesReturnThermal = printSalesReturnThermal;
    window.printSalesReturnA4 = printSalesReturnA4;
    window.printVendorReturnA4 = printVendorReturnA4;
}
