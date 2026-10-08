/**
 * ============================================================
 * MODUL ADMIN: MANAJEMEN RETUR BARANG & REKONSILIASI (RMA ENGINE)
 * Toko Putri Enterprise v1.12.0
 * 
 * Meliputi:
 * 1. Retur Penjualan (Customer Sales Return):
 *    - Pencarian Nomor Nota Kasir / Order ID
 *    - Pemilihan item retur dengan validasi batas kuantitas
 *    - Restorasi stok fisik ke Rak Toko (kondisi baik) atau Karantina Rusak
 *    - Opsi kompensasi: Cash Refund (potong buku kas laci), Saldo Deposit/Store Credit, atau Tukar Barang
 * 2. Retur Pembelian ke Pemasok (Vendor Purchase Return):
 *    - Pengembalian barang cacat/rusak pabrik ke rekanan supplier
 *    - Penyesuaian hutang dagang (AP Deduction) atau pengembalian dana
 *    - Pemotongan kuantitas inventori dari Rak Toko / Gudang
 * 3. Integrasi Cetak Dokumen Nota Retur Resmi A4 & Struk Thermal
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

// State lokal tab aktif ('sales' | 'vendor') & filter
let currentReturnTab = 'sales';
let activeSearchQuery = '';
let selectedOrderForReturn = null;
let returnDraftItems = []; // Array item yang sedang diedit di modal retur penjualan

/**
 * Merender Halaman Utama Manajemen Retur & RMA di Admin CMS
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
        <div class="space-y-6">
            <!-- Header & Action Buttons -->
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2 border-b border-slate-200/80 dark:border-slate-800">
                <div>
                    <h2 class="text-xl sm:text-2xl font-black text-slate-800 dark:text-white flex items-center gap-2.5">
                        <span class="w-10 h-10 rounded-2xl flex items-center justify-center text-white shadow-md shadow-indigo-500/25" style="background: linear-gradient(135deg, #4f46e5, #3730a3);">
                            <i class="fa-solid fa-right-left text-lg"></i>
                        </span>
                        <span>Retur Barang &amp; RMA</span>
                    </h2>
                    <p class="text-xs text-slate-500 dark:text-slate-400 mt-1">
                        Rekonsiliasi pengembalian barang konsumen, klaim cacat supplier, dan kontrol stok karantina.
                    </p>
                </div>
                <div class="flex items-center gap-2 flex-wrap">
                    <button type="button" onclick="window.openSalesReturnModal()" class="px-4 py-2.5 rounded-xl text-white font-bold text-xs flex items-center gap-2 shadow-sm transition-all active:scale-95 cursor-pointer hover:brightness-105" style="background: linear-gradient(135deg, #4f46e5, #3730a3);">
                        <i class="fa-solid fa-cart-arrow-down"></i> + Retur Penjualan
                    </button>
                    <button type="button" onclick="window.openVendorReturnModal()" class="px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700/80 text-slate-700 dark:text-slate-200 font-bold text-xs flex items-center gap-2 shadow-2xs transition-all active:scale-95 cursor-pointer">
                        <i class="fa-solid fa-truck-ramp-box text-amber-500"></i> + Retur Supplier
                    </button>
                </div>
            </div>

            <!-- 4 KPI Bento Cards -->
            <div class="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                <div class="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-2xs">
                    <span class="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 block mb-1">Total Nilai Retur Konsumen</span>
                    <span class="text-lg sm:text-xl font-black text-rose-600 dark:text-rose-400">${fCur(totalSalesRefundRp)}</span>
                    <span class="text-[10px] text-slate-400 block mt-0.5">Pengembalian dana/kredit</span>
                </div>
                <div class="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-2xs">
                    <span class="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 block mb-1">Nota Retur Penjualan</span>
                    <span class="text-lg sm:text-xl font-black text-slate-800 dark:text-white">${totalSalesReturnCount} <span class="text-xs font-semibold text-slate-400">Kasus</span></span>
                    <span class="text-[10px] text-slate-400 block mt-0.5">Transaksi terselesaikan</span>
                </div>
                <div class="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-2xs">
                    <span class="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 block mb-1">Klaim Retur Supplier</span>
                    <span class="text-lg sm:text-xl font-black text-amber-600 dark:text-amber-400">${fCur(totalVendorClaimRp)}</span>
                    <span class="text-[10px] text-slate-400 block mt-0.5">Potong hutang / refund PO</span>
                </div>
                <div class="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-2xs">
                    <span class="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 block mb-1">Stok Karantina Rusak</span>
                    <span class="text-lg sm:text-xl font-black text-purple-600 dark:text-purple-400">${totalQuarantineQty} <span class="text-xs font-semibold text-slate-400">Unit</span></span>
                    <span class="text-[10px] text-slate-400 block mt-0.5">Menunggu klaim distributor</span>
                </div>
            </div>

            <!-- Tab Switcher & Search Bar -->
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-white dark:bg-slate-900 p-3 rounded-2xl border border-slate-200/90 dark:border-slate-800 shadow-2xs">
                <!-- Tab Buttons -->
                <div class="flex items-center gap-1.5 p-1 bg-slate-100 dark:bg-slate-800/80 rounded-xl">
                    <button type="button" onclick="window.switchReturnsTab('sales')" class="px-3.5 py-1.5 rounded-lg text-xs font-extrabold transition-all cursor-pointer ${currentReturnTab === 'sales' ? 'bg-white dark:bg-slate-900 text-indigo-600 dark:text-indigo-400 shadow-xs' : 'text-slate-500 hover:text-slate-800 dark:hover:text-white'}">
                        <i class="fa-solid fa-basket-shopping mr-1"></i> Retur Penjualan (${appData.salesReturns.length})
                    </button>
                    <button type="button" onclick="window.switchReturnsTab('vendor')" class="px-3.5 py-1.5 rounded-lg text-xs font-extrabold transition-all cursor-pointer ${currentReturnTab === 'vendor' ? 'bg-white dark:bg-slate-900 text-indigo-600 dark:text-indigo-400 shadow-xs' : 'text-slate-500 hover:text-slate-800 dark:hover:text-white'}">
                        <i class="fa-solid fa-truck-ramp-box mr-1"></i> Retur Supplier (${appData.vendorReturns.length})
                    </button>
                </div>

                <!-- Live Search Box -->
                <div class="relative flex-1 sm:max-w-xs">
                    <i class="fa-solid fa-magnifying-glass absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-xs"></i>
                    <input type="text" id="returns-search-input" value="${esc(activeSearchQuery)}" oninput="window.handleReturnsSearch(this.value)" placeholder="Cari No Retur / Nota / Nama..." class="w-full pl-9 pr-4 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs text-slate-800 dark:text-slate-100 focus:outline-none focus:border-indigo-500 transition-all">
                </div>
            </div>

            <!-- Table Container -->
            <div class="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/90 dark:border-slate-800 shadow-2xs overflow-hidden">
                <div id="returns-table-wrapper" class="overflow-x-auto custom-scrollbar">
                    ${currentReturnTab === 'sales' ? renderSalesReturnsTableHtml() : renderVendorReturnsTableHtml()}
                </div>
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
 * Handle input pencarian live search
 */
export const handleReturnsSearch = (query) => {
    activeSearchQuery = (query || '').trim().toLowerCase();
    const wrapper = el('returns-table-wrapper');
    if (wrapper) {
        wrapper.innerHTML = currentReturnTab === 'sales' ? renderSalesReturnsTableHtml() : renderVendorReturnsTableHtml();
    }
};

/**
 * Render HTML Tabel Riwayat Retur Penjualan (Customer Returns)
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
            <div class="py-16 text-center text-slate-400 dark:text-slate-500">
                <div class="w-14 h-14 mx-auto mb-3 rounded-2xl bg-indigo-50 dark:bg-indigo-950/40 text-indigo-500 flex items-center justify-center text-2xl">
                    <i class="fa-solid fa-box-open"></i>
                </div>
                <h4 class="font-bold text-sm text-slate-700 dark:text-slate-300">Belum Ada Riwayat Retur Penjualan</h4>
                <p class="text-xs mt-1 max-w-sm mx-auto">Semua retur dari kasir POS maupun web akan tercatat otomatis di sini.</p>
                <button type="button" onclick="window.openSalesReturnModal()" class="mt-4 px-4 py-2 rounded-xl bg-indigo-600 text-white font-bold text-xs shadow-sm hover:bg-indigo-700 cursor-pointer active:scale-95 transition-all">
                    + Buat Retur Penjualan
                </button>
            </div>
        `;
    }

    // Urutkan terbaru di atas
    const sorted = [...list].sort((a, b) => new Date(b.createdAt || 0) - new Date(a.createdAt || 0));

    return `
        <table class="w-full text-left text-xs">
            <thead class="bg-slate-50 dark:bg-slate-800/60 text-[11px] font-black uppercase tracking-wider text-slate-400 border-b border-slate-200 dark:border-slate-800">
                <tr>
                    <th class="py-3 px-4">No. Retur &amp; Tanggal</th>
                    <th class="py-3 px-4">Rujukan Nota</th>
                    <th class="py-3 px-4">Pelanggan</th>
                    <th class="py-3 px-4">Barang Diretur</th>
                    <th class="py-3 px-4 text-right">Nilai Kompensasi</th>
                    <th class="py-3 px-4">Metode</th>
                    <th class="py-3 px-4 text-center">Aksi</th>
                </tr>
            </thead>
            <tbody class="divide-y divide-slate-100 dark:divide-slate-800 text-slate-700 dark:text-slate-300">
                ${sorted.map(r => {
                    const dateStr = r.createdAt ? new Date(r.createdAt).toLocaleDateString('id-ID', { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' }) : '-';
                    const itemsSummary = (r.items || []).map(i => `${i.qty}x ${esc(i.name)}${i.variantName ? ` [${esc(i.variantName)}]` : ''}`).join(', ');
                    
                    let methodBadge = '<span class="px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-[10px] font-bold">Lainnya</span>';
                    if (r.refundMethod === 'cash') {
                        methodBadge = '<span class="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300 text-[10px] font-bold"><i class="fa-solid fa-money-bill mr-1"></i>Tunai (Kas)</span>';
                    } else if (r.refundMethod === 'credit') {
                        methodBadge = '<span class="px-2 py-0.5 rounded-full bg-blue-100 text-blue-800 dark:bg-blue-950/60 dark:text-blue-300 text-[10px] font-bold"><i class="fa-solid fa-wallet mr-1"></i>Store Credit</span>';
                    } else if (r.refundMethod === 'exchange') {
                        methodBadge = '<span class="px-2 py-0.5 rounded-full bg-purple-100 text-purple-800 dark:bg-purple-950/60 dark:text-purple-300 text-[10px] font-bold"><i class="fa-solid fa-repeat mr-1"></i>Tukar Barang</span>';
                    }

                    return `
                        <tr class="hover:bg-slate-50/60 dark:hover:bg-slate-800/40 transition-colors">
                            <td class="py-3.5 px-4 font-bold">
                                <span class="font-mono text-indigo-600 dark:text-indigo-400 block">${esc(r.id)}</span>
                                <span class="text-[10px] font-normal text-slate-400 block">${dateStr}</span>
                            </td>
                            <td class="py-3.5 px-4 font-mono font-semibold text-slate-600 dark:text-slate-400">
                                ${esc(r.orderId || '-')}
                            </td>
                            <td class="py-3.5 px-4">
                                <span class="font-bold block">${esc(r.customerName || 'Pelanggan Umum')}</span>
                                <span class="text-[10px] text-slate-400">${esc(r.customerPhone || '')}</span>
                            </td>
                            <td class="py-3.5 px-4 max-w-xs">
                                <p class="truncate font-medium text-slate-600 dark:text-slate-300" title="${esc(itemsSummary)}">${esc(itemsSummary || '-')}</p>
                                <span class="text-[10px] text-slate-400">${r.items ? r.items.length : 0} macam barang</span>
                            </td>
                            <td class="py-3.5 px-4 text-right font-black text-rose-600 dark:text-rose-400">
                                ${fCur(r.totalRefund || 0)}
                            </td>
                            <td class="py-3.5 px-4">
                                ${methodBadge}
                            </td>
                            <td class="py-3.5 px-4 text-center">
                                <div class="flex items-center justify-center gap-1.5">
                                    <button type="button" onclick="window.printSalesReturnA4('${esc(r.id)}')" title="Cetak Nota Retur A4" class="w-7 h-7 rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 flex items-center justify-center transition-all cursor-pointer active:scale-90">
                                        <i class="fa-solid fa-file-invoice text-xs"></i>
                                    </button>
                                    <button type="button" onclick="window.printSalesReturnThermal('${esc(r.id)}')" title="Cetak Struk Thermal RawBT" class="w-7 h-7 rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 flex items-center justify-center transition-all cursor-pointer active:scale-90">
                                        <i class="fa-solid fa-print text-xs text-indigo-500"></i>
                                    </button>
                                </div>
                            </td>
                        </tr>
                    `;
                }).join('')}
            </tbody>
        </table>
    `;
};

/**
 * Render HTML Tabel Riwayat Retur Pembelian Supplier
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
            <div class="py-16 text-center text-slate-400 dark:text-slate-500">
                <div class="w-14 h-14 mx-auto mb-3 rounded-2xl bg-amber-50 dark:bg-amber-950/40 text-amber-500 flex items-center justify-center text-2xl">
                    <i class="fa-solid fa-truck-ramp-box"></i>
                </div>
                <h4 class="font-bold text-sm text-slate-700 dark:text-slate-300">Belum Ada Riwayat Retur Supplier</h4>
                <p class="text-xs mt-1 max-w-sm mx-auto">Pengembalian barang rusak atau klaim distributor tercatat di sini.</p>
                <button type="button" onclick="window.openVendorReturnModal()" class="mt-4 px-4 py-2 rounded-xl bg-amber-600 text-white font-bold text-xs shadow-sm hover:bg-amber-700 cursor-pointer active:scale-95 transition-all">
                    + Buat Retur Supplier Baru
                </button>
            </div>
        `;
    }

    const sorted = [...list].sort((a, b) => new Date(b.createdAt || 0) - new Date(a.createdAt || 0));

    return `
        <table class="w-full text-left text-xs">
            <thead class="bg-slate-50 dark:bg-slate-800/60 text-[11px] font-black uppercase tracking-wider text-slate-400 border-b border-slate-200 dark:border-slate-800">
                <tr>
                    <th class="py-3 px-4">No. Retur &amp; Tanggal</th>
                    <th class="py-3 px-4">Pemasok / Supplier</th>
                    <th class="py-3 px-4">Rujukan PO</th>
                    <th class="py-3 px-4">Barang Dikembalikan</th>
                    <th class="py-3 px-4 text-right">Nilai Klaim HPP</th>
                    <th class="py-3 px-4">Penyelesaian</th>
                    <th class="py-3 px-4 text-center">Aksi</th>
                </tr>
            </thead>
            <tbody class="divide-y divide-slate-100 dark:divide-slate-800 text-slate-700 dark:text-slate-300">
                ${sorted.map(r => {
                    const dateStr = r.createdAt ? new Date(r.createdAt).toLocaleDateString('id-ID', { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' }) : '-';
                    const itemsSummary = (r.items || []).map(i => `${i.qty}x ${esc(i.name)}${i.variantName ? ` [${esc(i.variantName)}]` : ''}`).join(', ');

                    let methodBadge = '<span class="px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 text-[10px] font-bold">Lainnya</span>';
                    if (r.settlementMethod === 'ap_deduction') {
                        methodBadge = '<span class="px-2 py-0.5 rounded-full bg-purple-100 text-purple-800 dark:bg-purple-950/60 dark:text-purple-300 text-[10px] font-bold"><i class="fa-solid fa-file-invoice-dollar mr-1"></i>Potong Hutang PO</span>';
                    } else if (r.settlementMethod === 'cash_refund') {
                        methodBadge = '<span class="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300 text-[10px] font-bold"><i class="fa-solid fa-money-bill mr-1"></i>Pengembalian Kas</span>';
                    }

                    return `
                        <tr class="hover:bg-slate-50/60 dark:hover:bg-slate-800/40 transition-colors">
                            <td class="py-3.5 px-4 font-bold">
                                <span class="font-mono text-amber-600 dark:text-amber-400 block">${esc(r.id)}</span>
                                <span class="text-[10px] font-normal text-slate-400 block">${dateStr}</span>
                            </td>
                            <td class="py-3.5 px-4 font-bold text-slate-800 dark:text-white">
                                ${esc(r.supplierName || 'Pemasok Toko')}
                            </td>
                            <td class="py-3.5 px-4 font-mono font-semibold text-slate-600 dark:text-slate-400">
                                ${esc(r.poId || '-')}
                            </td>
                            <td class="py-3.5 px-4 max-w-xs">
                                <p class="truncate font-medium text-slate-600 dark:text-slate-300" title="${esc(itemsSummary)}">${esc(itemsSummary || '-')}</p>
                                <span class="text-[10px] text-slate-400">${r.items ? r.items.length : 0} macam barang</span>
                            </td>
                            <td class="py-3.5 px-4 text-right font-black text-amber-600 dark:text-amber-400">
                                ${fCur(r.totalClaim || 0)}
                            </td>
                            <td class="py-3.5 px-4">
                                ${methodBadge}
                            </td>
                            <td class="py-3.5 px-4 text-center">
                                <button type="button" onclick="window.printVendorReturnA4('${esc(r.id)}')" title="Cetak Surat Pengembalian Barang" class="w-7 h-7 rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 flex items-center justify-center transition-all cursor-pointer active:scale-90 mx-auto">
                                    <i class="fa-solid fa-print text-xs text-amber-500"></i>
                                </button>
                            </td>
                        </tr>
                    `;
                }).join('')}
            </tbody>
        </table>
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
    if (contentArea) contentArea.innerHTML = '';

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
        showToast('Gagal memuat transaksi: ' + (e.message || ''));
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
        <!-- Order Header Summary -->
        <div class="p-3.5 rounded-2xl bg-indigo-50/70 dark:bg-indigo-950/30 border border-indigo-200/80 dark:border-indigo-900/50 space-y-1">
            <div class="flex items-center justify-between text-xs font-bold">
                <span class="text-indigo-900 dark:text-indigo-200"><i class="fa-solid fa-receipt mr-1"></i> No. Nota: ${esc(order.orderId || order.id)}</span>
                <span class="text-indigo-600 dark:text-indigo-400 font-normal text-[11px]">${dateStr}</span>
            </div>
            <div class="flex items-center justify-between text-[11px] text-slate-600 dark:text-slate-400">
                <span>Pelanggan: <b class="text-slate-800 dark:text-white">${esc(custName)}</b> (${channel})</span>
                <span>Total Belanja: <b class="text-slate-800 dark:text-white">${fCur(order.payment?.grandTotal || order.total || 0)}</b></span>
            </div>
        </div>

        <!-- Items Checklist -->
        <div class="space-y-3 pt-2">
            <h4 class="text-xs font-black uppercase tracking-wider text-slate-500">Pilih Barang yang Diretur</h4>
            <div class="space-y-2.5">
                ${returnDraftItems.map((item, idx) => `
                    <div class="p-3.5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-3 shadow-2xs">
                        <div class="flex items-start justify-between gap-3">
                            <div>
                                <h5 class="font-bold text-xs text-slate-800 dark:text-white">${esc(item.name)}</h5>
                                ${item.variantName ? `<span class="inline-block mt-0.5 px-2 py-0.5 rounded-md bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 text-[10px] font-bold">${esc(item.variantName)}</span>` : ''}
                                <span class="text-[11px] text-slate-500 block mt-0.5">Harga: <b>${fCur(item.price)}</b> &middot; Beli: <b>${item.boughtQty}</b> unit (Sudah retur: ${item.alreadyReturned})</span>
                            </div>
                            <div class="text-right">
                                <label class="text-[10px] font-bold text-slate-400 block mb-1">Qty Retur (Maks ${item.maxReturnable}):</label>
                                <div class="inline-flex items-center border border-slate-300 dark:border-slate-700 rounded-xl overflow-hidden">
                                    <input type="number" step="any" min="0" max="${item.maxReturnable}" value="${item.returnQty}" oninput="window.handleReturnQtyChange(${idx}, this.value)" class="w-16 p-1 text-center font-bold text-xs bg-slate-50 dark:bg-slate-800 focus:outline-none">
                                </div>
                            </div>
                        </div>

                        <!-- Kondisi & Alasan (Aktif jika returnQty > 0) -->
                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 border-t border-slate-100 dark:border-slate-800/80 text-[11px]">
                            <div>
                                <label class="block text-[10px] font-bold text-slate-400 mb-0.5">Alasan Pengembalian:</label>
                                <select onchange="window.handleReturnReasonChange(${idx}, this.value)" class="w-full p-1.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-200 font-medium">
                                    <option value="Kelebihan Proyek / Sisa Bangunan">Kelebihan Proyek / Sisa Bangunan</option>
                                    <option value="Salah Ukuran / Salah Beli">Salah Ukuran / Salah Beli</option>
                                    <option value="Cacat Fisik / Kemasan Rusak">Cacat Fisik / Kemasan Rusak</option>
                                    <option value="Keluhan Kualitas Barang">Keluhan Kualitas Barang</option>
                                    <option value="Lainnya">Lainnya</option>
                                </select>
                            </div>
                            <div>
                                <label class="block text-[10px] font-bold text-slate-400 mb-0.5">Kondisi &amp; Alokasi Stok:</label>
                                <select onchange="window.handleReturnConditionChange(${idx}, this.value)" class="w-full p-1.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-200 font-bold">
                                    <option value="good">Kondisi Baik (Kembali ke Rak Toko)</option>
                                    <option value="damaged">Cacat/Rusak (Masuk Karantina Rusak)</option>
                                </select>
                            </div>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>

        <!-- Opsi Penyelesaian Kompensasi & Ringkasan -->
        <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/80 space-y-3">
            <h4 class="text-xs font-black uppercase tracking-wider text-slate-700 dark:text-slate-300">Penyelesaian Pengembalian Dana / Kompensasi</h4>
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-2">
                <label class="p-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 cursor-pointer flex items-center gap-2 text-xs font-bold hover:border-indigo-500">
                    <input type="radio" name="sales_refund_method" value="cash" checked onchange="window.recalcSalesReturnSummary()">
                    <span><i class="fa-solid fa-money-bill-wave text-emerald-500 mr-1"></i> Tunai (Kas Laci)</span>
                </label>
                <label class="p-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 cursor-pointer flex items-center gap-2 text-xs font-bold hover:border-indigo-500">
                    <input type="radio" name="sales_refund_method" value="credit" onchange="window.recalcSalesReturnSummary()">
                    <span><i class="fa-solid fa-wallet text-blue-500 mr-1"></i> Store Credit</span>
                </label>
                <label class="p-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 cursor-pointer flex items-center gap-2 text-xs font-bold hover:border-indigo-500">
                    <input type="radio" name="sales_refund_method" value="exchange" onchange="window.recalcSalesReturnSummary()">
                    <span><i class="fa-solid fa-repeat text-purple-500 mr-1"></i> Tukar Barang</span>
                </label>
            </div>

            <div>
                <label class="block text-[10px] font-bold text-slate-400 mb-1">Catatan Tambahan / Keterangan Toko:</label>
                <input type="text" id="sales-return-notes" placeholder="Misal: Barang dibuka di depan kasir, nota asli dilampirkan" class="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs">
            </div>

            <!-- Live Subtotal Refund -->
            <div class="pt-2 border-t border-slate-200 dark:border-slate-700 flex items-center justify-between">
                <span class="text-xs font-bold text-slate-600 dark:text-slate-300">Total Nilai Pengembalian:</span>
                <span id="sales-return-grand-total" class="text-base font-black text-rose-600 dark:text-rose-400">Rp 0</span>
            </div>
        </div>
    `;

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
    if (!await showConfirm(confirmMsg)) return;

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
        if (await showConfirm('Cetak Nota Bukti Retur Penjualan sekarang?')) {
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
            <!-- Pilihan Pemasok & PO -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                    <label class="block text-[11px] font-bold text-slate-700 dark:text-slate-300 mb-1">Pilih Rekanan Supplier:</label>
                    <select id="vendor-return-supplier-select" onchange="window.handleVendorSupplierChange(this.value)" class="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs font-bold text-slate-800 dark:text-white">
                        <option value="">-- Pilih Supplier Pemasok --</option>
                        ${suppliers.map(s => `<option value="${esc(s.id)}" ${String(s.id) === String(prefillSupId) ? 'selected' : ''}>${esc(s.name)}</option>`).join('')}
                    </select>
                </div>
                <div>
                    <label class="block text-[11px] font-bold text-slate-700 dark:text-slate-300 mb-1">Rujukan PO Kulakan (Opsional):</label>
                    <select id="vendor-return-po-select" class="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs font-semibold text-slate-800 dark:text-white">
                        <option value="">-- Tidak Terikat PO Khusus --</option>
                        ${purchases.map(po => `<option value="${esc(po.id)}" ${String(po.id) === String(prefillPoId) ? 'selected' : ''}>${esc(po.poNumber || po.id)} - ${fCur(po.totalPrice || 0)}</option>`).join('')}
                    </select>
                </div>
            </div>

            <!-- Tambah Barang yang Diretur -->
            <div class="space-y-2">
                <div class="flex items-center justify-between">
                    <h4 class="text-xs font-black uppercase tracking-wider text-slate-700 dark:text-slate-300">Daftar Barang yang Dikembalikan</h4>
                    <button type="button" onclick="window.addVendorReturnItemRow()" class="px-2.5 py-1 rounded-lg bg-indigo-50 hover:bg-indigo-100 dark:bg-indigo-950/60 dark:hover:bg-indigo-900/60 text-indigo-600 dark:text-indigo-400 font-bold text-[11px] flex items-center gap-1 cursor-pointer">
                        <i class="fa-solid fa-plus text-[10px]"></i> Tambah Barang
                    </button>
                </div>
                <div id="vendor-return-items-list" class="space-y-2.5">
                    <!-- Dinamis terisi lewat addVendorReturnItemRow -->
                </div>
            </div>

            <!-- Metode Kompensasi Pemasok -->
            <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/80 space-y-3">
                <h4 class="text-xs font-black uppercase tracking-wider text-slate-700 dark:text-slate-300">Penyelesaian Finansial Pemasok</h4>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    <label class="p-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 cursor-pointer flex items-center gap-2 text-xs font-bold hover:border-amber-500">
                        <input type="radio" name="vendor_settlement_method" value="ap_deduction" checked onchange="window.recalcVendorReturnSummary()">
                        <span><i class="fa-solid fa-file-invoice-dollar text-purple-500 mr-1"></i> Potong Hutang PO (AP Deduction)</span>
                    </label>
                    <label class="p-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 cursor-pointer flex items-center gap-2 text-xs font-bold hover:border-amber-500">
                        <input type="radio" name="vendor_settlement_method" value="cash_refund" onchange="window.recalcVendorReturnSummary()">
                        <span><i class="fa-solid fa-money-bill-wave text-emerald-500 mr-1"></i> Pengembalian Kas / Transfer</span>
                    </label>
                </div>

                <div>
                    <label class="block text-[10px] font-bold text-slate-400 mb-1">Catatan Serah Terima / Nomor Resi Ekspedisi:</label>
                    <input type="text" id="vendor-return-notes" placeholder="Misal: Diserahkan ke supir PT Semen Gresik, bukti tanda terima terlampir" class="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs">
                </div>

                <div class="pt-2 border-t border-slate-200 dark:border-slate-700 flex items-center justify-between">
                    <span class="text-xs font-bold text-slate-600 dark:text-slate-300">Total Klaim Retur Supplier:</span>
                    <span id="vendor-return-grand-total" class="text-base font-black text-amber-600 dark:text-amber-400">Rp 0</span>
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
    rowDiv.className = 'p-3 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 space-y-2 shadow-2xs';
    rowDiv.innerHTML = `
        <div class="flex items-center justify-between gap-2">
            <span class="text-[11px] font-black text-slate-400">#${rowIdx + 1}</span>
            <button type="button" onclick="window.removeVendorReturnItemRow(${rowIdx})" class="w-6 h-6 rounded-lg text-slate-400 hover:text-rose-500 flex items-center justify-center cursor-pointer">
                <i class="fa-solid fa-trash text-xs"></i>
            </button>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
            <div>
                <label class="block text-[10px] font-bold text-slate-400 mb-0.5">Pilih Produk:</label>
                <select onchange="window.handleVendorItemProductSelect(${rowIdx}, this.value)" class="w-full p-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs font-bold text-slate-800 dark:text-white">
                    <option value="">-- Pilih Barang --</option>
                    ${products.map(p => `<option value="${esc(p.id)}">${esc(p.name)} (Stok: ${p.stock}${Array.isArray(p.variants) && p.variants.length > 0 ? ` &middot; ${p.variants.length} Varian` : ''})</option>`).join('')}
                </select>
                <!-- Kontainer Pemilih Varian Spesifik (Dinamis jika produk memiliki varian) -->
                <div id="vendor-item-variant-box-${rowIdx}" class="hidden mt-1.5 p-2 rounded-xl bg-indigo-50/70 dark:bg-indigo-950/40 border border-indigo-200/80 dark:border-indigo-900/50"></div>
            </div>
            <div class="grid grid-cols-2 gap-2">
                <div>
                    <label class="block text-[10px] font-bold text-slate-400 mb-0.5">Jumlah (Qty):</label>
                    <input type="number" step="any" min="0.01" value="1" oninput="window.handleVendorItemQtyChange(${rowIdx}, this.value)" class="w-full p-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs font-bold text-center">
                </div>
                <div>
                    <label class="block text-[10px] font-bold text-slate-400 mb-0.5">Harga Modal / HPP (Rp):</label>
                    <input type="number" id="vendor-item-price-${rowIdx}" value="0" oninput="window.handleVendorItemPriceChange(${rowIdx}, this.value)" class="w-full p-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs font-bold text-right">
                </div>
            </div>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] pt-1 border-t border-slate-100 dark:border-slate-800">
            <div>
                <label class="block text-[10px] font-bold text-slate-400 mb-0.5">Ambil dari Lokasi:</label>
                <select onchange="window.handleVendorItemLocationChange(${rowIdx}, this.value)" class="w-full p-1.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs">
                    <option value="store">Rak Toko (storeStock)</option>
                    <option value="warehouse">Gudang Belakang (warehouseStock)</option>
                    <option value="quarantine">Karantina Rusak (damagedStock)</option>
                </select>
            </div>
            <div>
                <label class="block text-[10px] font-bold text-slate-400 mb-0.5">Alasan Retur Supplier:</label>
                <select onchange="window.handleVendorItemReasonChange(${rowIdx}, this.value)" class="w-full p-1.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs">
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

export const handleVendorItemProductSelect = (idx, prodId) => {
    if (!vendorReturnDraftItems[idx]) return;
    vendorReturnDraftItems[idx].productId = prodId;
    const prod = (appData.products || []).find(p => String(p.id) === String(prodId));
    const variantBox = el(`vendor-item-variant-box-${idx}`);

    if (prod && Array.isArray(prod.variants) && prod.variants.length > 0) {
        // Produk memiliki varian: otomatis set opsi varian pertama dan tampilkan selector
        const firstVar = prod.variants[0];
        vendorReturnDraftItems[idx].variantName = firstVar.name || '';
        const hpp = parseFloat(firstVar.hpp) || parseFloat(prod.hpp) || 0;
        vendorReturnDraftItems[idx].buyPrice = hpp;

        if (variantBox) {
            variantBox.className = 'mt-1.5 p-2 rounded-xl bg-indigo-50/70 dark:bg-indigo-950/40 border border-indigo-200/80 dark:border-indigo-900/50 block space-y-1';
            variantBox.innerHTML = `
                <div class="flex items-center justify-between">
                    <label class="block text-[10px] font-black text-indigo-700 dark:text-indigo-300">
                        <i class="fa-solid fa-layer-group mr-1"></i>Pilih Varian Spesifik:
                    </label>
                    <span class="text-[9.5px] font-semibold text-indigo-600 dark:text-indigo-400">${prod.variants.length} Varian</span>
                </div>
                <select onchange="window.handleVendorItemVariantSelect(${idx}, this.value)" class="w-full p-1.5 rounded-lg border border-indigo-300 dark:border-indigo-700 bg-white dark:bg-slate-900 text-xs font-bold text-slate-800 dark:text-white focus:outline-none">
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
    if (!await showConfirm(confirmMsg)) return;

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

        if (await showConfirm('Cetak Surat Pengembalian Barang ke Supplier sekarang?')) {
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

    if (typeof window.executePrintRawBTData === 'function') {
        const storeName = appData.store?.name || 'TOKO PUTRI';
        const address = appData.store?.address || '';
        const phone = appData.store?.wa || '';

        let receiptText = `${storeName}\n${address}\nTelp/WA: ${phone}\n`;
        receiptText += `--------------------------------\n`;
        receiptText += `NOTA RETUR PENJUALAN\n`;
        receiptText += `No Retur: ${record.id}\n`;
        receiptText += `No Nota : ${record.orderId || '-'}\n`;
        receiptText += `Tanggal : ${new Date(record.createdAt).toLocaleString('id-ID')}\n`;
        receiptText += `Konsumen: ${record.customerName || 'Umum'}\n`;
        receiptText += `--------------------------------\n`;

        (record.items || []).forEach(it => {
            receiptText += `${it.name}${it.variantName ? ` (${it.variantName})` : ''}\n`;
            receiptText += `  ${it.qty} x ${fCur(it.soldPrice)} = ${fCur(it.subtotalRefund)}\n`;
            receiptText += `  [${it.reason}]\n`;
        });

        receiptText += `--------------------------------\n`;
        receiptText += `TOTAL RETUR: ${fCur(record.totalRefund)}\n`;
        receiptText += `METODE     : ${record.refundMethod.toUpperCase()}\n`;
        receiptText += `--------------------------------\n`;
        receiptText += `Barang telah diverifikasi toko.\n`;
        receiptText += `Terima kasih atas kerja samanya.\n\n\n`;

        window.executePrintRawBTData(receiptText);
    } else {
        window.printSalesReturnA4(returnId);
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
    window.handleReturnsSearch = handleReturnsSearch;
    window.openSalesReturnModal = openSalesReturnModal;
    window.closeSalesReturnModal = closeSalesReturnModal;
    window.searchOrderForReturn = searchOrderForReturn;
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
