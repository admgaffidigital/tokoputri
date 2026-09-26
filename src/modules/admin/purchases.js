/**
 * ============================================================
 * MODUL ADMIN: ORDER PEMBELIAN PRODUK (PURCHASE ORDERS / KULAKAN)
 * & MANAJEMEN HUTANG SUPPLIER (ACCOUNTS PAYABLE)
 * 
 * Fitur:
 * 1. Buat Order Kulakan Produk (PO) ke Supplier
 * 2. Auto-Restock Stok Produk Gudang & Update HPP saat Barang Diterima
 * 3. Manajemen Pembayaran & Hutang: Cash, Tempo (Jatuh Tempo & Cicilan), Konsinyasi
 * 4. 1-Klik Kirim Format PO Resmi ke WhatsApp Sales Supplier
 * 5. Cetak Lembar Purchase Order (PO) Ramah Printer & PDF
 * 6. Histori Pembayaran Cicilan Hutang Tempo ke Rekanan
 * ============================================================
 */

import { db } from '../../config/firebase.js';
import { appData } from '../../core/state.js';
import { 
    el, setH, esc, fCur, showToast, showConfirm, sLoad, hLoad, 
    openWhatsApp, normalizeWA, renderProductCoverHtml 
} from '../../core/utils.js';
import { saveApp } from '../../services/storage.js';

// State modul purchases
let activePOFilter = 'all'; // 'all' | 'ordered' | 'received' | 'unpaid' | 'completed'
let purchaseSearchQuery = '';
let currentEditingPOId = null;
let tempPOItems = []; // Item builder saat membuat/mengedit PO

/**
 * Format tanggal Indonesia yang ramah
 */
const formatDate = (dateStr) => {
    if (!dateStr) return '-';
    try {
        const d = new Date(dateStr);
        return d.toLocaleDateString('id-ID', {
            day: 'numeric',
            month: 'short',
            year: 'numeric'
        });
    } catch (_) {
        return dateStr;
    }
};

/**
 * Format tanggal & jam
 */
const formatDateTime = (dateStr) => {
    if (!dateStr) return '-';
    try {
        const d = new Date(dateStr);
        return d.toLocaleDateString('id-ID', {
            day: 'numeric',
            month: 'short',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        }) + ' WIB';
    } catch (_) {
        return dateStr;
    }
};

/**
 * Hitung metrik analitik pembelian & hutang supplier
 */
export const computePurchaseMetrics = () => {
    const purchases = appData.purchases || [];
    const now = new Date();
    const currentMonth = now.getMonth();
    const currentYear = now.getFullYear();

    // 1. Total nilai kulakan bulan ini
    let monthPurchasesTotal = 0;
    // 2. Total hutang belum lunas ke seluruh supplier
    let totalUnpaidDebt = 0;
    // 3. Jumlah PO yang statusnya masih 'ordered' (menunggu barang dikirim)
    let pendingArrivalCount = 0;
    // 4. Jumlah PO yang sudah selesai & lunas
    let completedCount = 0;

    purchases.forEach(po => {
        const poDate = new Date(po.date || po.createdAt || 0);
        const poTotal = parseFloat(po.total) || 0;
        const paid = parseFloat(po.amountPaid) || 0;
        const unpaid = poTotal - paid;

        if (poDate.getMonth() === currentMonth && poDate.getFullYear() === currentYear && po.status !== 'cancelled') {
            monthPurchasesTotal += poTotal;
        }

        if (po.paymentType === 'tempo' && po.paymentStatus !== 'lunas' && po.status !== 'cancelled') {
            if (unpaid > 0) totalUnpaidDebt += unpaid;
        }

        if (po.status === 'ordered') {
            pendingArrivalCount++;
        } else if (po.status === 'completed' || (po.status === 'received' && po.paymentStatus === 'lunas')) {
            completedCount++;
        }
    });

    return {
        monthPurchasesTotal,
        totalUnpaidDebt,
        pendingArrivalCount,
        completedCount
    };
};

/**
 * Render Tampilan Utama Modul Pembelian (Purchases View)
 */
export const renderPurchasesView = () => {
    const content = el('admin-content');
    if (!content) return;

    const metrics = computePurchaseMetrics();
    const purchases = appData.purchases || [];
    purchases.sort((a, b) => new Date(b.date || b.createdAt || 0) - new Date(a.date || a.createdAt || 0));

    // Filter daftar PO
    const query = purchaseSearchQuery.toLowerCase().trim();
    let filtered = purchases.filter(po => {
        const matchesQuery = !query || 
            (po.poNumber || '').toLowerCase().includes(query) ||
            (po.supplierName || '').toLowerCase().includes(query) ||
            (po.notes || '').toLowerCase().includes(query) ||
            (po.items || []).some(item => (item.name || '').toLowerCase().includes(query));

        if (!matchesQuery) return false;

        if (activePOFilter === 'ordered') {
            return po.status === 'ordered';
        } else if (activePOFilter === 'received') {
            return po.status === 'received';
        } else if (activePOFilter === 'unpaid') {
            const unpaid = (parseFloat(po.total) || 0) - (parseFloat(po.amountPaid) || 0);
            return po.paymentType === 'tempo' && unpaid > 0 && po.paymentStatus !== 'lunas';
        } else if (activePOFilter === 'completed') {
            return po.status === 'completed' || (po.status === 'received' && po.paymentStatus === 'lunas');
        }

        return true;
    });

    setH('admin-content', `
        <div class="space-y-5 fade-in max-w-5xl mx-auto pb-24 pt-2">
            <!-- 1. HEADER & SUMMARY METRICS -->
            <div class="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                <div class="card-modern p-4 sm:p-5 relative overflow-hidden">
                    <div class="flex items-center justify-between mb-2">
                        <span class="text-[9px] font-black uppercase tracking-widest text-slate-400">Kulakan Bulan Ini</span>
                        <div class="w-8 h-8 rounded-xl bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 flex items-center justify-center text-sm shadow-2xs">
                            <i class="fa-solid fa-cart-shopping"></i>
                        </div>
                    </div>
                    <p class="text-lg sm:text-xl font-black text-slate-800 dark:text-white tracking-tight">${fCur(metrics.monthPurchasesTotal)}</p>
                    <p class="text-[10px] font-bold text-slate-400 mt-1">Total Belanja Modal Toko</p>
                </div>

                <div class="card-modern p-4 sm:p-5 relative overflow-hidden">
                    <div class="flex items-center justify-between mb-2">
                        <span class="text-[9px] font-black uppercase tracking-widest text-amber-500">Hutang Belum Lunas</span>
                        <div class="w-8 h-8 rounded-xl bg-amber-50 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400 flex items-center justify-center text-sm shadow-2xs">
                            <i class="fa-solid fa-file-invoice-dollar"></i>
                        </div>
                    </div>
                    <p class="text-lg sm:text-xl font-black text-amber-600 dark:text-amber-400 tracking-tight">${fCur(metrics.totalUnpaidDebt)}</p>
                    <p class="text-[10px] font-bold text-slate-400 mt-1">Tempo ke Supplier</p>
                </div>

                <div class="card-modern p-4 sm:p-5 relative overflow-hidden">
                    <div class="flex items-center justify-between mb-2">
                        <span class="text-[9px] font-black uppercase tracking-widest text-indigo-500">Menunggu Barang</span>
                        <div class="w-8 h-8 rounded-xl bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 flex items-center justify-center text-sm shadow-2xs">
                            <i class="fa-solid fa-truck-ramp-box"></i>
                        </div>
                    </div>
                    <p class="text-xl sm:text-2xl font-black text-indigo-600 dark:text-indigo-400 tracking-tight">${metrics.pendingArrivalCount}</p>
                    <p class="text-[10px] font-bold text-slate-400 mt-1">PO Sedang Dikirim</p>
                </div>

                <div class="card-modern p-4 sm:p-5 relative overflow-hidden">
                    <div class="flex items-center justify-between mb-2">
                        <span class="text-[9px] font-black uppercase tracking-widest text-emerald-500">PO Selesai / Lunas</span>
                        <div class="w-8 h-8 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 flex items-center justify-center text-sm shadow-2xs">
                            <i class="fa-solid fa-circle-check"></i>
                        </div>
                    </div>
                    <p class="text-xl sm:text-2xl font-black text-emerald-600 dark:text-emerald-400 tracking-tight">${metrics.completedCount}</p>
                    <p class="text-[10px] font-bold text-slate-400 mt-1">Stok Masuk &amp; Lunas</p>
                </div>
            </div>

            <!-- 2. TOOLBAR: PENCARIAN & TOMBOL AKSI -->
            <div class="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-between">
                <div class="relative flex-1 max-w-xl">
                    <i class="fa-solid fa-search absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-sm"></i>
                    <input 
                        type="text" 
                        id="purchase-search-input" 
                        value="${esc(purchaseSearchQuery)}" 
                        placeholder="Cari no PO, nama supplier, atau nama barang..." 
                        oninput="window.handlePurchaseSearch(this.value)"
                        class="w-full bg-white dark:bg-slate-800 border-[1.5px] border-slate-200 dark:border-slate-700 rounded-2xl py-3 pl-11 pr-4 text-xs sm:text-sm font-bold text-slate-700 dark:text-slate-200 focus:outline-none focus:border-[var(--color-primary)] focus:shadow-[0_0_0_3px_rgba(var(--color-primary-rgb),0.12)] shadow-2xs transition-all"
                    >
                </div>

                <div class="flex items-center gap-2">
                    <button 
                        onclick="if(window.openAdminTab) window.openAdminTab('suppliers');" 
                        class="px-4 py-3 rounded-2xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 font-bold text-xs sm:text-sm flex items-center gap-2 border border-slate-200 dark:border-slate-700 transition-all active:scale-95 shadow-2xs"
                        title="Buka Master Database Rekanan &amp; Asal-Usul Barang"
                    >
                        <i class="fa-solid fa-truck-field text-[var(--color-primary)]"></i>
                        <span>Data Supplier</span>
                    </button>

                    <button 
                        onclick="window.openCreatePOModal()" 
                        class="px-4 sm:px-5 py-3 rounded-2xl primary-bg text-white font-bold text-xs sm:text-sm flex items-center gap-2 shadow-glow hover:opacity-95 transition-all active:scale-95 shrink-0"
                    >
                        <i class="fa-solid fa-cart-plus text-xs"></i>
                        <span>+ Buat Order PO</span>
                    </button>
                </div>
            </div>

            <!-- 3. TAB FILTER STATUS PO -->
            <div class="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar text-xs font-bold">
                <button 
                    onclick="window.setPurchaseFilter('all')" 
                    class="px-4 py-2 rounded-xl transition-all shrink-0 ${activePOFilter === 'all' ? 'primary-bg text-white shadow-glow' : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700'}"
                >
                    Semua PO (${purchases.length})
                </button>

                <button 
                    onclick="window.setPurchaseFilter('ordered')" 
                    class="px-4 py-2 rounded-xl transition-all shrink-0 flex items-center gap-1.5 ${activePOFilter === 'ordered' ? 'bg-indigo-600 text-white shadow-glow' : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700'}"
                >
                    <i class="fa-solid fa-clock text-[10px]"></i>
                    Dipesan / Dikirim (${purchases.filter(p => p.status === 'ordered').length})
                </button>

                <button 
                    onclick="window.setPurchaseFilter('received')" 
                    class="px-4 py-2 rounded-xl transition-all shrink-0 flex items-center gap-1.5 ${activePOFilter === 'received' ? 'bg-teal-600 text-white shadow-glow' : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700'}"
                >
                    <i class="fa-solid fa-boxes-stacked text-[10px]"></i>
                    Barang Diterima (${purchases.filter(p => p.status === 'received').length})
                </button>

                <button 
                    onclick="window.setPurchaseFilter('unpaid')" 
                    class="px-4 py-2 rounded-xl transition-all shrink-0 flex items-center gap-1.5 ${activePOFilter === 'unpaid' ? 'bg-amber-600 text-white shadow-glow' : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700'}"
                >
                    <i class="fa-solid fa-file-invoice-dollar text-[10px]"></i>
                    Hutang Belum Lunas
                </button>

                <button 
                    onclick="window.setPurchaseFilter('completed')" 
                    class="px-4 py-2 rounded-xl transition-all shrink-0 flex items-center gap-1.5 ${activePOFilter === 'completed' ? 'bg-emerald-600 text-white shadow-glow' : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700'}"
                >
                    <i class="fa-solid fa-check-double text-[10px]"></i>
                    Selesai / Lunas
                </button>
            </div>

            <!-- 4. DAFTAR KARTU PURCHASE ORDER (PO) -->
            <div id="purchase-cards-list" class="space-y-3">
                ${filtered.length === 0 ? `
                    <div class="card-modern p-12 text-center flex flex-col items-center justify-center text-slate-400">
                        <div class="w-16 h-16 rounded-2xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-3xl mb-3 text-slate-400">
                            <i class="fa-solid fa-cart-flatbed"></i>
                        </div>
                        <p class="font-bold text-sm text-slate-600 dark:text-slate-300">Belum Ada Order Pembelian (PO)</p>
                        <p class="text-xs text-slate-400 mt-1 max-w-sm">Buat order pembelian kulakan ke supplier untuk mencatat barang masuk, memperbarui stok toko otomatis, dan melacak jatuh tempo hutang.</p>
                        <button onclick="window.openCreatePOModal()" class="mt-4 px-5 py-2.5 rounded-xl primary-bg text-white font-bold text-xs shadow-glow">
                            <i class="fa-solid fa-cart-plus mr-1.5"></i> Buat Order PO Pertama
                        </button>
                    </div>
                ` : filtered.map(po => renderPOCardHtml(po)).join('')}
            </div>
        </div>

        <!-- MODAL FORM PEMBUATAN / EDIT PURCHASE ORDER (PO) -->
        <div id="modal-po-form" class="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/60 backdrop-blur-xs hidden opacity-0 transition-opacity duration-200">
            <div id="modal-po-form-box" class="bg-white dark:bg-slate-850 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-2xl w-full max-w-4xl max-h-[94vh] flex flex-col scale-95 transition-transform duration-200 overflow-hidden">
                <div id="modal-po-form-content" class="flex-1 overflow-y-auto"></div>
            </div>
        </div>

        <!-- MODAL DETAIL & REVIEW PURCHASE ORDER -->
        <div id="modal-po-detail" class="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/60 backdrop-blur-xs hidden opacity-0 transition-opacity duration-200">
            <div id="modal-po-detail-box" class="bg-white dark:bg-slate-850 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-2xl w-full max-w-3xl max-h-[92vh] flex flex-col scale-95 transition-transform duration-200 overflow-hidden">
                <div id="modal-po-detail-content" class="flex-1 overflow-y-auto"></div>
            </div>
        </div>

        <!-- MODAL BAYAR / CICIL HUTANG TEMPO PO -->
        <div id="modal-po-payment" class="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/60 backdrop-blur-xs hidden opacity-0 transition-opacity duration-200">
            <div id="modal-po-payment-box" class="bg-white dark:bg-slate-850 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-2xl w-full max-w-md max-h-[90vh] flex flex-col scale-95 transition-transform duration-200 overflow-hidden">
                <div id="modal-po-payment-content" class="flex-1 overflow-y-auto"></div>
            </div>
        </div>

        <!-- CONTAINER PRINT PURCHASE ORDER (DISSEMBLED UNTUK CETAK) -->
        <div id="po-print-container" class="hidden"></div>
    `);
};

/**
 * Render Kartu Setiap PO pada Daftar
 */
const renderPOCardHtml = (po) => {
    const total = parseFloat(po.total) || 0;
    const paid = parseFloat(po.amountPaid) || 0;
    const unpaid = total - paid;

    // Status Badge
    let statusBadge = '';
    if (po.status === 'ordered') {
        statusBadge = '<span class="px-2.5 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 text-[10px] font-black border border-indigo-200 dark:border-indigo-800"><i class="fa-solid fa-clock mr-1"></i>Dipesan (Kirim)</span>';
    } else if (po.status === 'received') {
        statusBadge = '<span class="px-2.5 py-1 rounded-full bg-teal-50 dark:bg-teal-950/40 text-teal-600 dark:text-teal-400 text-[10px] font-black border border-teal-200 dark:border-teal-800"><i class="fa-solid fa-boxes-stacked mr-1"></i>Barang Diterima</span>';
    } else if (po.status === 'completed') {
        statusBadge = '<span class="px-2.5 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 text-[10px] font-black border border-emerald-200 dark:border-emerald-800"><i class="fa-solid fa-check-double mr-1"></i>Selesai / Lunas</span>';
    } else if (po.status === 'cancelled') {
        statusBadge = '<span class="px-2.5 py-1 rounded-full bg-rose-50 dark:bg-rose-950/40 text-rose-600 dark:text-rose-400 text-[10px] font-black border border-rose-200 dark:border-rose-800"><i class="fa-solid fa-ban mr-1"></i>Batal</span>';
    }

    // Payment Badge
    let paymentBadge = '';
    if (po.paymentType === 'cash') {
        paymentBadge = '<span class="px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-[10px] font-bold">Tunai / Cash</span>';
    } else if (po.paymentType === 'konsinyasi') {
        paymentBadge = '<span class="px-2 py-0.5 rounded-md bg-purple-50 dark:bg-purple-950/40 text-purple-600 dark:text-purple-400 text-[10px] font-bold">Konsinyasi (Titipan)</span>';
    } else {
        // Tempo
        if (po.paymentStatus === 'lunas' || unpaid <= 0) {
            paymentBadge = '<span class="px-2 py-0.5 rounded-md bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 text-[10px] font-bold border border-emerald-200 dark:border-emerald-800"><i class="fa-solid fa-check mr-1"></i>Tempo Lunas</span>';
        } else {
            paymentBadge = `<span class="px-2 py-0.5 rounded-md bg-amber-50 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400 text-[10px] font-bold border border-amber-200 dark:border-amber-800"><i class="fa-solid fa-clock-rotate-left mr-1"></i>Sisa Hutang: ${fCur(unpaid)}</span>`;
        }
    }

    const itemsCount = (po.items || []).length;
    const cleanPhone = po.supplierPhone ? normalizeWA(po.supplierPhone) : '';

    return `
        <div class="card-modern p-4 sm:p-5 border border-slate-200 dark:border-slate-700 hover:border-[var(--color-primary)]/40 dark:hover:border-[var(--color-primary)]/40 transition-all rounded-2xl sm:rounded-3xl shadow-2xs group">
            <div class="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                <!-- Sisi Kiri: Identitas PO & Supplier -->
                <div class="flex items-start gap-3.5 min-w-0">
                    <div class="w-12 h-12 rounded-2xl ${po.status === 'received' || po.status === 'completed' ? 'bg-teal-50 dark:bg-teal-950/40 text-teal-600 dark:text-teal-400' : 'bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400'} border border-slate-200 dark:border-slate-700 flex items-center justify-center text-xl shrink-0 font-black shadow-inner">
                        <i class="fa-solid ${po.status === 'received' || po.status === 'completed' ? 'fa-boxes-stacked' : 'fa-cart-flatbed'}"></i>
                    </div>

                    <div class="min-w-0 flex-1">
                        <div class="flex items-center gap-2 flex-wrap">
                            <h4 class="font-mono font-black text-sm sm:text-base text-slate-800 dark:text-white tracking-tight">${esc(po.poNumber || po.id)}</h4>
                            ${statusBadge}
                            ${paymentBadge}
                        </div>

                        <div class="flex items-center gap-3 text-xs text-slate-500 dark:text-slate-400 mt-1 flex-wrap">
                            <span class="font-bold text-slate-700 dark:text-slate-300">
                                <i class="fa-solid fa-truck-field text-[var(--color-primary)] mr-1"></i>${esc(po.supplierName || 'Supplier')}
                            </span>
                            <span><i class="fa-regular fa-calendar text-slate-400 mr-1"></i>${formatDate(po.date || po.createdAt)}</span>
                            <span><i class="fa-solid fa-box text-slate-400 mr-1"></i>${itemsCount} Macam Barang</span>
                            ${po.tempoDueDate && po.paymentType === 'tempo' ? `<span><i class="fa-solid fa-calendar-xmark text-amber-500 mr-1"></i>Jatuh Tempo: <b>${formatDate(po.tempoDueDate)}</b></span>` : ''}
                        </div>

                        <!-- Snippet preview item barang -->
                        <div class="text-[11px] text-slate-400 mt-1.5 truncate max-w-xl">
                            ${(po.items || []).map(it => `${esc(it.name)} (${it.qty} ${esc(it.unit || 'pcs')})`).join(' • ')}
                        </div>
                    </div>
                </div>

                <!-- Sisi Kanan: Nilai Total & Aksi -->
                <div class="flex flex-wrap sm:flex-nowrap items-center justify-between lg:justify-end gap-3 pt-3 lg:pt-0 border-t lg:border-t-0 border-slate-100 dark:border-slate-800">
                    <div class="text-left lg:text-right">
                        <span class="block text-[9px] font-bold uppercase tracking-widest text-slate-400">Total Nilai PO</span>
                        <span class="text-base sm:text-lg font-black text-slate-800 dark:text-slate-100 tracking-tight">${fCur(total)}</span>
                        ${po.paymentType === 'tempo' && unpaid > 0 ? `
                            <span class="block text-[10px] font-bold text-amber-500">Sisa: ${fCur(unpaid)}</span>
                        ` : ''}
                    </div>

                    <div class="flex items-center gap-1.5 ml-auto lg:ml-2 flex-wrap sm:flex-nowrap">
                        <!-- AKSI 1: TERIMA BARANG & AUTO-RESTOCK (JIKA MASIH DIPESAN) -->
                        ${po.status === 'ordered' ? `
                            <button 
                                onclick="event.stopPropagation(); window.receiveAndRestockPO('${po.id}')" 
                                class="px-3 h-9 rounded-xl bg-teal-500 hover:bg-teal-600 text-white font-bold text-xs flex items-center gap-1.5 shadow-glow active:scale-95 transition-all"
                                title="Barang Telah Tiba: Tambah Stok ke Gudang &amp; Etalase Otomatis"
                            >
                                <i class="fa-solid fa-boxes-stacked text-xs"></i>
                                <span>Terima Barang</span>
                            </button>
                        ` : ''}

                        <!-- AKSI 2: BAYAR / CICIL HUTANG (JIKA TEMPO & BELUM LUNAS) -->
                        ${po.paymentType === 'tempo' && unpaid > 0 ? `
                            <button 
                                onclick="event.stopPropagation(); window.openPurchasePaymentModal('${po.id}')" 
                                class="px-3 h-9 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-bold text-xs flex items-center gap-1.5 shadow-2xs active:scale-95 transition-all"
                                title="Catat Pembayaran Cicilan Hutang Tempo"
                            >
                                <i class="fa-solid fa-money-bill-wave text-xs"></i>
                                <span>Bayar Hutang</span>
                            </button>
                        ` : ''}

                        <!-- AKSI 3: KIRIM WA SALES -->
                        ${cleanPhone ? `
                            <button 
                                onclick="event.stopPropagation(); window.sendPOToSupplierWA('${po.id}')" 
                                class="w-9 h-9 rounded-xl bg-emerald-50 hover:bg-emerald-500 hover:text-white dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800 flex items-center justify-center transition-all active:scale-95 shadow-2xs"
                                title="Kirim Surat Pesanan PO ke WhatsApp Sales"
                            >
                                <i class="fa-brands fa-whatsapp text-sm"></i>
                            </button>
                        ` : ''}

                        <!-- AKSI 4: CETAK DOKUMEN PO -->
                        <button 
                            onclick="event.stopPropagation(); window.printPurchaseOrder('${po.id}')" 
                            class="w-9 h-9 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 flex items-center justify-center transition-all active:scale-95 shadow-2xs"
                            title="Cetak Surat Pesanan (Print / PDF)"
                        >
                            <i class="fa-solid fa-print text-xs"></i>
                        </button>

                        <!-- AKSI 5: DETAIL PO -->
                        <button 
                            onclick="window.openPurchaseDetailModal('${po.id}')" 
                            class="px-3 h-9 rounded-xl primary-bg-soft border primary-border primary-text font-bold text-xs hover:bg-[rgba(var(--color-primary-rgb),0.2)] transition-all active:scale-95 shadow-2xs"
                            title="Buka Rincian Nota &amp; Histori Pembayaran"
                        >
                            Rincian
                        </button>

                        <!-- AKSI 6: HAPUS PO -->
                        <button 
                            onclick="event.stopPropagation(); window.deletePurchaseOrder('${po.id}')" 
                            class="w-9 h-9 rounded-xl bg-rose-50 hover:bg-rose-500 hover:text-white dark:bg-rose-950/40 text-rose-500 border border-rose-200 dark:border-rose-900 flex items-center justify-center transition-all active:scale-95 shadow-2xs"
                            title="Hapus Order PO"
                        >
                            <i class="fa-solid fa-trash text-xs"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;
};

/**
 * Handler pencarian PO
 */
window.handlePurchaseSearch = (val) => {
    purchaseSearchQuery = val || '';
    renderPurchasesView();
};

/**
 * Handler ganti tab filter
 */
window.setPurchaseFilter = (filterKey) => {
    activePOFilter = filterKey;
    renderPurchasesView();
};

/**
 * ══════════════════════════════════════════════════════════════════
 * FITUR UTAMA 1: AUTO-RESTOCK GUDANG (BARANG DITERIMA)
 * Menambahkan stok produk toko secara otomatis saat status diubah ke 'received'
 * ══════════════════════════════════════════════════════════════════
 */
window.receiveAndRestockPO = (poId) => {
    const purchases = appData.purchases || [];
    const po = purchases.find(x => String(x.id) === String(poId));
    if (!po) return showToast('Data PO tidak ditemukan!');

    if (po.stockRestocked) {
        return showToast('Stok dari PO ini sudah pernah masuk ke gudang sebelumnya.');
    }

    const itemsSummary = (po.items || []).map(it => `• <b>${esc(it.name)}</b>: +${it.qty} ${esc(it.unit || 'pcs')} (Modal HPP: ${fCur(it.unitPrice)})`).join('<br>');

    showConfirm(
        'Terima Barang & Restock Otomatis',
        `Konfirmasi barang kulakan dari <b>${esc(po.supplierName)}</b> (${po.poNumber}) telah tiba di toko / gudang?<br><br>
        <div class="p-3 bg-teal-50 dark:bg-teal-950/30 rounded-xl border border-teal-200 dark:border-teal-800 text-left text-xs space-y-1">
            <p class="font-bold text-teal-800 dark:text-teal-300"><i class="fa-solid fa-boxes-stacked mr-1"></i>Stok produk berikut akan otomatis bertambah:</p>
            <div class="text-slate-700 dark:text-slate-300 mt-1">${itemsSummary}</div>
        </div>
        <p class="text-[11px] text-slate-400 mt-2">Harga modal (HPP) produk di katalog juga akan disesuaikan otomatis dengan harga beli PO ini.</p>`,
        async () => {
            sLoad('Menambahkan Stok ke Gudang...');
            try {
                let productsUpdated = false;
                const products = appData.products || [];

                (po.items || []).forEach(item => {
                    if (!item.productId) return;
                    const prod = products.find(p => String(p.id) === String(item.productId));
                    if (prod) {
                        const addedQty = parseFloat(item.qty) || 0;
                        const newHpp = parseFloat(item.unitPrice) || 0;

                        // Tambah stok utama produk
                        const currentStock = parseFloat(prod.stock) || 0;
                        prod.stock = currentStock + addedQty;

                        // Perbarui HPP jika harga beli modal valid
                        if (newHpp > 0) {
                            prod.hpp = newHpp;
                        }

                        // Jika produk sebelumnya non-aktif karena stok 0, aktifkan kembali
                        if (prod.isActive === false || prod.isActive === 'false') {
                            prod.isActive = true;
                        }

                        productsUpdated = true;
                    }
                });

                // Perbarui status PO
                po.status = 'received';
                po.stockRestocked = true;
                po.receivedAt = new Date().toISOString();

                // Jika sudah lunas, jadikan 'completed'
                const total = parseFloat(po.total) || 0;
                const paid = parseFloat(po.amountPaid) || 0;
                if (paid >= total) {
                    po.status = 'completed';
                    po.paymentStatus = 'lunas';
                }

                // Simpan perubahan ke cloud Firestore & localStorage
                await saveApp(productsUpdated ? ['purchases', 'products'] : ['purchases']);

                hLoad();
                showToast('Barang berhasil diterima & stok toko bertambah! 📦✨');
                renderPurchasesView();
            } catch (err) {
                hLoad();
                console.error('Gagal restock produk:', err);
                showToast('Gagal memproses restock: ' + err.message);
            }
        },
        'Ya, Terima & Restock',
        false
    );
};

/**
 * ══════════════════════════════════════════════════════════════════
 * FITUR UTAMA 2: FORM PEMBUATAN & ITEM BUILDER PURCHASE ORDER (PO)
 * ══════════════════════════════════════════════════════════════════
 */
window.openCreatePOModal = (preselectedSupplierId = null, existingPOId = null) => {
    currentEditingPOId = existingPOId;
    const isEdit = !!existingPOId;
    const purchases = appData.purchases || [];
    const suppliers = appData.suppliers || [];

    if (suppliers.length === 0) {
        showConfirm(
            'Belum Ada Rekanan',
            'Anda belum memiliki data supplier / rekanan. Daftarkan minimal 1 supplier terlebih dahulu sebelum membuat order pembelian.',
            () => {
                if (window.openAdminTab) {
                    window.openAdminTab('suppliers');
                    setTimeout(() => {
                        window.openSupplierFormModal?.();
                    }, 200);
                }
            },
            'Tambah Supplier',
            false
        );
        return;
    }

    let po = {};
    if (isEdit) {
        po = purchases.find(x => String(x.id) === String(existingPOId)) || {};
        tempPOItems = JSON.parse(JSON.stringify(po.items || []));
    } else {
        const todayStr = new Date().toISOString().split('T')[0];
        const dateCode = todayStr.replace(/-/g, '');
        const randomCode = Math.floor(100 + Math.random() * 900);
        po = {
            poNumber: `PO-${dateCode}-${randomCode}`,
            date: todayStr,
            supplierId: preselectedSupplierId || (suppliers[0] ? suppliers[0].id : ''),
            paymentType: 'tempo',
            tempoDays: 14,
            items: [],
            discount: 0,
            shippingFee: 0,
            amountPaid: 0,
            notes: ''
        };
        tempPOItems = [];
    }

    renderPOFormModalContent(po, isEdit);

    const modal = el('modal-po-form');
    const box = el('modal-po-form-box');
    if (!modal) return;
    modal.classList.remove('hidden');
    setTimeout(() => {
        modal.classList.remove('opacity-0');
        if (box) box.classList.remove('scale-95');
    }, 10);
};

/**
 * Render Konten Form Modal PO
 */
const renderPOFormModalContent = (po, isEdit) => {
    const content = el('modal-po-form-content');
    if (!content) return;

    const suppliers = appData.suppliers || [];
    const products = appData.products || [];

    setH('modal-po-form-content', `
        <div class="p-5 sm:p-6 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
            <div class="flex items-center gap-3">
                <div class="w-10 h-10 rounded-2xl bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 flex items-center justify-center text-lg">
                    <i class="fa-solid fa-cart-flatbed"></i>
                </div>
                <div>
                    <h3 class="font-black text-base sm:text-lg text-slate-800 dark:text-white tracking-tight">${isEdit ? 'Edit Order Pembelian (PO)' : 'Buat Order Pembelian Baru (Kulakan)'}</h3>
                    <p class="text-xs text-slate-400">Pilih supplier rekanan, tentukan daftar barang, harga modal HPP, dan termin pembayaran</p>
                </div>
            </div>
            <button onclick="window.closePOFormModal()" class="w-8 h-8 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-slate-800 dark:hover:text-white flex items-center justify-center transition-all">
                <i class="fa-solid fa-xmark"></i>
            </button>
        </div>

        <form id="po-editor-form" onsubmit="window.savePOForm(event, '${isEdit ? po.id : ''}')" class="p-5 sm:p-6 space-y-5">
            <!-- 1. IDENTITAS HEADER PO -->
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                    <label class="block text-[10px] font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-1.5">Pilih Supplier Rekanan *</label>
                    <select id="pof-supplierId" required class="admin-input bg-slate-50 dark:bg-slate-900 font-bold cursor-pointer" onchange="window.handlePOSupplierChange(this.value)">
                        ${suppliers.map(s => `
                            <option value="${s.id}" ${String(s.id) === String(po.supplierId) ? 'selected' : ''} class="font-bold">
                                ${esc(s.name)}${s.code ? ` (${esc(s.code)})` : ''}
                            </option>
                        `).join('')}
                    </select>
                </div>

                <div>
                    <label class="block text-[10px] font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-1.5">Nomor Purchase Order *</label>
                    <input type="text" id="pof-poNumber" required value="${esc(po.poNumber || '')}" placeholder="PO-202609-001" class="admin-input bg-slate-50 dark:bg-slate-900 font-mono font-bold">
                </div>

                <div>
                    <label class="block text-[10px] font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-1.5">Tanggal Order *</label>
                    <input type="date" id="pof-date" required value="${esc(po.date || new Date().toISOString().split('T')[0])}" class="admin-input bg-slate-50 dark:bg-slate-900 font-bold">
                </div>
            </div>

            <!-- 2. PEMILIHAN TERMIN PEMBAYARAN -->
            <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 space-y-3">
                <span class="block text-[10px] font-bold uppercase tracking-widest text-slate-500">Termin &amp; Skema Pembayaran Kulakan</span>
                <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div>
                        <label class="block text-[9px] font-bold uppercase text-slate-400 mb-1">Metode Pembayaran</label>
                        <select id="pof-paymentType" class="admin-input bg-white dark:bg-slate-800 font-bold cursor-pointer" onchange="window.handlePOPaymentTypeChange(this.value)">
                            <option value="cash" ${po.paymentType === 'cash' ? 'selected' : ''}>Cash / Tunai Saat Kirim</option>
                            <option value="tempo" ${po.paymentType === 'tempo' ? 'selected' : ''}>Tempo (Hutang Usaha)</option>
                            <option value="konsinyasi" ${po.paymentType === 'konsinyasi' ? 'selected' : ''}>Konsinyasi (Titipan Laku Bayar)</option>
                        </select>
                    </div>

                    <div id="pof-tempo-days-box" class="${po.paymentType === 'tempo' ? '' : 'hidden'}">
                        <label class="block text-[9px] font-bold uppercase text-slate-400 mb-1">Durasi Tempo (Hari)</label>
                        <input type="number" id="pof-tempoDays" min="1" max="180" value="${po.tempoDays || 14}" placeholder="14" class="admin-input bg-white dark:bg-slate-800 font-bold" oninput="window.recalcPOTempoDueDate()">
                    </div>

                    <div id="pof-tempo-due-box" class="${po.paymentType === 'tempo' ? '' : 'hidden'}">
                        <label class="block text-[9px] font-bold uppercase text-slate-400 mb-1">Estimasi Jatuh Tempo</label>
                        <input type="text" id="pof-tempoDueDate" readonly class="admin-input bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 font-bold">
                    </div>
                </div>
            </div>

            <!-- 3. ITEM BUILDER (DAFTAR BARANG YANG DIPESAN) -->
            <div class="space-y-3">
                <div class="flex items-center justify-between">
                    <div>
                        <h4 class="font-bold text-xs uppercase tracking-widest text-slate-600 dark:text-slate-300">Daftar Barang yang Dipesan</h4>
                        <p class="text-[10px] text-slate-400">Pilih dari katalog produk atau masukkan kuantitas dan harga beli modal baru</p>
                    </div>
                    <button type="button" onclick="window.addPOItemRow()" class="px-3.5 py-1.5 rounded-xl primary-bg text-white font-bold text-xs flex items-center gap-1.5 shadow-2xs active:scale-95 transition-all">
                        <i class="fa-solid fa-plus text-xs"></i>
                        <span>Tambah Barang</span>
                    </button>
                </div>

                <div id="po-items-table-container" class="border border-slate-200 dark:border-slate-700 rounded-2xl overflow-hidden bg-white dark:bg-slate-800">
                    <!-- Tabel Item PO di-render oleh renderPOItemsTable() -->
                </div>
            </div>

            <!-- 4. RINGKASAN BIAYA & DISKON -->
            <div class="p-4 sm:p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-3">
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                        <label class="block text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-1">Catatan Tambahan / Nomor Surat Jalan</label>
                        <textarea id="pof-notes" rows="3" placeholder="Catatan pengiriman, armada truk, nomor invoice supplier..." class="admin-input bg-white dark:bg-slate-800 resize-none text-xs">${esc(po.notes || '')}</textarea>
                    </div>

                    <div class="space-y-2 text-xs">
                        <div class="flex items-center justify-between">
                            <span class="text-slate-500">Subtotal Barang:</span>
                            <span class="font-bold text-slate-800 dark:text-white" id="pof-calc-subtotal">Rp 0</span>
                        </div>
                        <div class="flex items-center justify-between gap-3">
                            <span class="text-slate-500">Diskon Potongan Nota:</span>
                            <input type="number" id="pof-discount" min="0" value="${po.discount || 0}" placeholder="0" class="admin-input bg-white dark:bg-slate-800 w-36 text-right py-1.5 text-xs font-bold" oninput="window.recalcPOTotals()">
                        </div>
                        <div class="flex items-center justify-between gap-3">
                            <span class="text-slate-500">Ongkos Kirim / Ekspedisi:</span>
                            <input type="number" id="pof-shippingFee" min="0" value="${po.shippingFee || 0}" placeholder="0" class="admin-input bg-white dark:bg-slate-800 w-36 text-right py-1.5 text-xs font-bold" oninput="window.recalcPOTotals()">
                        </div>
                        <div class="pt-2 border-t border-slate-200 dark:border-slate-700 flex items-center justify-between text-sm sm:text-base font-black">
                            <span class="text-slate-800 dark:text-white">Total Tagihan PO:</span>
                            <span class="text-[var(--color-primary)] text-lg" id="pof-calc-grandtotal">Rp 0</span>
                        </div>
                        <div class="flex items-center justify-between gap-3 pt-1">
                            <span class="text-slate-500 font-bold" id="pof-dp-label">Pembayaran Awal / DP:</span>
                            <input type="number" id="pof-amountPaid" min="0" value="${po.amountPaid || 0}" placeholder="0" class="admin-input bg-white dark:bg-slate-800 w-36 text-right py-1.5 text-xs font-bold text-emerald-600" oninput="window.recalcPOTotals()">
                        </div>
                        <div class="flex items-center justify-between text-xs font-bold pt-1">
                            <span class="text-amber-500">Sisa Hutang Tempo:</span>
                            <span class="text-amber-600 dark:text-amber-400" id="pof-calc-balance">Rp 0</span>
                        </div>
                    </div>
                </div>
            </div>

            <!-- TOMBOL SIMPAN -->
            <div class="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-end gap-2.5">
                <button type="button" onclick="window.closePOFormModal()" class="px-5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 font-bold text-xs hover:bg-slate-100 dark:hover:bg-slate-800 transition-all">
                    Batal
                </button>
                <button type="submit" class="px-6 py-2.5 rounded-xl primary-bg text-white font-bold text-xs shadow-glow transition-all active:scale-95">
                    <i class="fa-solid fa-floppy-disk mr-1.5"></i> Simpan Order PO
                </button>
            </div>
        </form>
    `);

    // Jika item builder masih kosong, tambahkan 1 baris pertama
    if (tempPOItems.length === 0) {
        window.addPOItemRow();
    } else {
        renderPOItemsTable();
    }

    window.recalcPOTempoDueDate();
    window.recalcPOTotals();
};

/**
 * Tutup Modal Form PO
 */
window.closePOFormModal = () => {
    const modal = el('modal-po-form');
    const box = el('modal-po-form-box');
    if (!modal) return;
    modal.classList.add('opacity-0');
    if (box) box.classList.add('scale-95');
    setTimeout(() => {
        modal.classList.add('hidden');
    }, 200);
};

/**
 * Tambah Baris Item di Form PO
 */
window.addPOItemRow = () => {
    const products = appData.products || [];
    const currentSupplierId = el('pof-supplierId')?.value || '';

    // Prioritaskan produk dari supplier ini jika ada
    const supplierProducts = products.filter(p => String(p.supplierId) === String(currentSupplierId));
    const defaultProd = supplierProducts[0] || products[0] || null;

    tempPOItems.push({
        productId: defaultProd ? defaultProd.id : '',
        name: defaultProd ? defaultProd.name : '',
        sku: defaultProd ? (defaultProd.sku || '') : '',
        qty: 1,
        unit: 'Pcs',
        unitPrice: defaultProd ? (parseFloat(defaultProd.hpp) || parseFloat(defaultProd.price) || 0) : 0,
        subtotal: defaultProd ? (parseFloat(defaultProd.hpp) || parseFloat(defaultProd.price) || 0) : 0
    });

    renderPOItemsTable();
    window.recalcPOTotals();
};

/**
 * Hapus Baris Item di Form PO
 */
window.removePOItemRow = (index) => {
    tempPOItems.splice(index, 1);
    renderPOItemsTable();
    window.recalcPOTotals();
};

/**
 * Render Tabel Builder Item Form PO
 */
const renderPOItemsTable = () => {
    const container = el('po-items-table-container');
    if (!container) return;

    const products = appData.products || [];
    const currentSupplierId = el('pof-supplierId')?.value || '';

    if (tempPOItems.length === 0) {
        setH('po-items-table-container', `
            <div class="p-6 text-center text-slate-400 text-xs font-bold">
                Belum ada barang di dalam daftar order ini. Klik "+ Tambah Barang" di atas.
            </div>
        `);
        return;
    }

    setH('po-items-table-container', `
        <div class="overflow-x-auto">
            <table class="w-full text-left border-collapse text-xs">
                <thead>
                    <tr class="bg-slate-50 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-700 text-[10px] font-black uppercase tracking-wider text-slate-400">
                        <th class="py-2.5 px-3">Produk Toko</th>
                        <th class="py-2.5 px-3 w-24">Jumlah</th>
                        <th class="py-2.5 px-3 w-24">Satuan</th>
                        <th class="py-2.5 px-3 w-36">Harga Modal (HPP)</th>
                        <th class="py-2.5 px-3 w-36 text-right">Subtotal</th>
                        <th class="py-2.5 px-2 w-10 text-center"></th>
                    </tr>
                </thead>
                <tbody class="divide-y divide-slate-100 dark:divide-slate-800">
                    ${tempPOItems.map((item, idx) => {
                        const itemSubtotal = (parseFloat(item.qty) || 0) * (parseFloat(item.unitPrice) || 0);

                        return `
                            <tr class="hover:bg-slate-50/50 dark:hover:bg-slate-750 transition-colors">
                                <td class="py-2.5 px-3">
                                    <select class="admin-input bg-white dark:bg-slate-800 py-1.5 text-xs font-bold w-full" onchange="window.updatePOItemProduct(${idx}, this.value)">
                                        <option value="" class="text-slate-400">-- Pilih Produk --</option>
                                        ${products.map(p => {
                                            const isSelected = String(p.id) === String(item.productId);
                                            const isFromThisSupplier = String(p.supplierId) === String(currentSupplierId);
                                            return `
                                                <option value="${p.id}" ${isSelected ? 'selected' : ''} class="${isFromThisSupplier ? 'font-black text-teal-600' : ''}">
                                                    ${isFromThisSupplier ? '★ ' : ''}${esc(p.name)} (${p.sku || '-'})
                                                </option>
                                            `;
                                        }).join('')}
                                    </select>
                                </td>
                                <td class="py-2.5 px-3">
                                    <input type="number" min="0.01" step="any" value="${item.qty}" class="admin-input bg-white dark:bg-slate-800 py-1.5 text-xs font-bold text-center w-full" oninput="window.updatePOItemField(${idx}, 'qty', this.value)">
                                </td>
                                <td class="py-2.5 px-3">
                                    <input type="text" value="${esc(item.unit || 'Pcs')}" placeholder="Pcs/Sak" class="admin-input bg-white dark:bg-slate-800 py-1.5 text-xs font-bold text-center w-full" oninput="window.updatePOItemField(${idx}, 'unit', this.value)">
                                </td>
                                <td class="py-2.5 px-3">
                                    <input type="number" min="0" step="1" value="${item.unitPrice}" class="admin-input bg-white dark:bg-slate-800 py-1.5 text-xs font-bold text-right w-full" oninput="window.updatePOItemField(${idx}, 'unitPrice', this.value)">
                                </td>
                                <td class="py-2.5 px-3 text-right font-black text-slate-800 dark:text-slate-100">
                                    ${fCur(itemSubtotal)}
                                </td>
                                <td class="py-2.5 px-2 text-center">
                                    <button type="button" onclick="window.removePOItemRow(${idx})" class="w-7 h-7 rounded-lg text-slate-400 hover:text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-950/40 transition-all" title="Hapus Baris">
                                        <i class="fa-solid fa-trash-can text-xs"></i>
                                    </button>
                                </td>
                            </tr>
                        `;
                    }).join('')}
                </tbody>
            </table>
        </div>
    `);
};

/**
 * Update Pilihan Produk pada Baris Item PO
 */
window.updatePOItemProduct = (index, productId) => {
    const products = appData.products || [];
    const prod = products.find(p => String(p.id) === String(productId));
    if (prod && tempPOItems[index]) {
        tempPOItems[index].productId = prod.id;
        tempPOItems[index].name = prod.name;
        tempPOItems[index].sku = prod.sku || '';
        tempPOItems[index].unitPrice = parseFloat(prod.hpp) || parseFloat(prod.price) || 0;
        tempPOItems[index].subtotal = (parseFloat(tempPOItems[index].qty) || 1) * tempPOItems[index].unitPrice;
    }
    renderPOItemsTable();
    window.recalcPOTotals();
};

/**
 * Update Field Angka / Teks pada Baris Item PO
 */
window.updatePOItemField = (index, field, value) => {
    if (!tempPOItems[index]) return;
    if (field === 'qty' || field === 'unitPrice') {
        tempPOItems[index][field] = parseFloat(value) || 0;
        tempPOItems[index].subtotal = (parseFloat(tempPOItems[index].qty) || 0) * (parseFloat(tempPOItems[index].unitPrice) || 0);
    } else {
        tempPOItems[index][field] = value;
    }
    window.recalcPOTotals();
};

/**
 * Recalculate Estimasi Tanggal Jatuh Tempo
 */
window.recalcPOTempoDueDate = () => {
    const dateInput = el('pof-date')?.value || new Date().toISOString().split('T')[0];
    const days = parseInt(el('pof-tempoDays')?.value, 10) || 14;
    const baseDate = new Date(dateInput);
    baseDate.setDate(baseDate.getDate() + days);
    
    const dueDateStr = baseDate.toISOString().split('T')[0];
    const displayEl = el('pof-tempoDueDate');
    if (displayEl) {
        displayEl.value = formatDate(dueDateStr);
        displayEl.setAttribute('data-due-iso', dueDateStr);
    }
};

/**
 * Handle Ganti Supplier di Header Form PO
 */
window.handlePOSupplierChange = (supplierId) => {
    const suppliers = appData.suppliers || [];
    const s = suppliers.find(x => String(x.id) === String(supplierId));
    if (s && s.defaultTerms) {
        const pTypeEl = el('pof-paymentType');
        if (pTypeEl) {
            if (s.defaultTerms.startsWith('tempo')) {
                pTypeEl.value = 'tempo';
                const days = parseInt(s.defaultTerms.split('_')[1], 10) || 14;
                const daysEl = el('pof-tempoDays');
                if (daysEl) daysEl.value = days;
            } else if (s.defaultTerms === 'konsinyasi') {
                pTypeEl.value = 'konsinyasi';
            } else {
                pTypeEl.value = 'cash';
            }
            window.handlePOPaymentTypeChange(pTypeEl.value);
        }
    }
    renderPOItemsTable();
};

/**
 * Handle Ganti Tipe Pembayaran (Cash / Tempo / Konsinyasi)
 */
window.handlePOPaymentTypeChange = (val) => {
    const daysBox = el('pof-tempo-days-box');
    const dueBox = el('pof-tempo-due-box');
    const dpLabel = el('pof-dp-label');
    const paidInput = el('pof-amountPaid');

    if (val === 'tempo') {
        if (daysBox) daysBox.classList.remove('hidden');
        if (dueBox) dueBox.classList.remove('hidden');
        if (dpLabel) dpLabel.innerText = 'Uang Muka / DP:';
        window.recalcPOTempoDueDate();
    } else {
        if (daysBox) daysBox.classList.add('hidden');
        if (dueBox) dueBox.classList.add('hidden');
        if (dpLabel) dpLabel.innerText = 'Nomor Bayar:';
        
        if (val === 'cash' && paidInput) {
            // Jika cash, otomatis isi penuh sesuai grand total
            const grandTotal = window.computePOGrandTotal();
            paidInput.value = grandTotal;
        }
    }
    window.recalcPOTotals();
};

/**
 * Hitung Ulang Total Tagihan Form PO
 */
window.computePOGrandTotal = () => {
    const subtotal = tempPOItems.reduce((acc, it) => acc + ((parseFloat(it.qty) || 0) * (parseFloat(it.unitPrice) || 0)), 0);
    const discount = parseFloat(el('pof-discount')?.value) || 0;
    const shipping = parseFloat(el('pof-shippingFee')?.value) || 0;
    const grand = Math.max(0, subtotal - discount + shipping);
    return grand;
};

window.recalcPOTotals = () => {
    const subtotal = tempPOItems.reduce((acc, it) => acc + ((parseFloat(it.qty) || 0) * (parseFloat(it.unitPrice) || 0)), 0);
    const discount = parseFloat(el('pof-discount')?.value) || 0;
    const shipping = parseFloat(el('pof-shippingFee')?.value) || 0;
    const grand = Math.max(0, subtotal - discount + shipping);
    const paid = parseFloat(el('pof-amountPaid')?.value) || 0;
    const balance = Math.max(0, grand - paid);

    const subEl = el('pof-calc-subtotal');
    const grandEl = el('pof-calc-grandtotal');
    const balEl = el('pof-calc-balance');

    if (subEl) subEl.innerText = fCur(subtotal);
    if (grandEl) grandEl.innerText = fCur(grand);
    if (balEl) balEl.innerText = fCur(balance);
};

/**
 * Simpan Form PO
 */
window.savePOForm = async (e, existingId) => {
    e.preventDefault();
    sLoad('Menyimpan Order Pembelian...');

    try {
        const suppliers = appData.suppliers || [];
        const supplierId = el('pof-supplierId')?.value;
        const sObj = suppliers.find(s => String(s.id) === String(supplierId)) || {};

        const poNumber = (el('pof-poNumber')?.value || '').trim();
        const date = el('pof-date')?.value || new Date().toISOString().split('T')[0];
        const paymentType = el('pof-paymentType')?.value || 'tempo';
        const tempoDays = parseInt(el('pof-tempoDays')?.value, 10) || 14;
        const tempoDueDate = el('pof-tempoDueDate')?.getAttribute('data-due-iso') || '';
        const notes = (el('pof-notes')?.value || '').trim();

        const discount = parseFloat(el('pof-discount')?.value) || 0;
        const shippingFee = parseFloat(el('pof-shippingFee')?.value) || 0;
        const amountPaid = parseFloat(el('pof-amountPaid')?.value) || 0;

        // Validasi Item
        if (tempPOItems.length === 0) {
            hLoad();
            return showToast('Minimal harus ada 1 barang dalam order pembelian!');
        }

        const validItems = tempPOItems.filter(it => it.name && (parseFloat(it.qty) || 0) > 0);
        if (validItems.length === 0) {
            hLoad();
            return showToast('Pastikan produk dan kuantitas order telah diisi dengan benar!');
        }

        const subtotal = validItems.reduce((acc, it) => acc + ((parseFloat(it.qty) || 0) * (parseFloat(it.unitPrice) || 0)), 0);
        const total = Math.max(0, subtotal - discount + shippingFee);
        const balance = Math.max(0, total - amountPaid);

        let paymentStatus = 'belum_bayar';
        if (amountPaid >= total && total > 0) {
            paymentStatus = 'lunas';
        } else if (amountPaid > 0) {
            paymentStatus = 'sebagian';
        }

        if (!appData.purchases) appData.purchases = [];

        const id = existingId || ('po_' + Date.now().toString(36) + '_' + Math.random().toString(36).substring(2, 6));

        // Buat objek PO
        const poData = {
            id,
            poNumber,
            date,
            supplierId,
            supplierName: sObj.name || 'Supplier',
            supplierPhone: sObj.phone || '',
            paymentType,
            tempoDays: paymentType === 'tempo' ? tempoDays : 0,
            tempoDueDate: paymentType === 'tempo' ? tempoDueDate : null,
            items: validItems,
            subtotal,
            discount,
            shippingFee,
            total,
            amountPaid,
            balance,
            paymentStatus,
            notes,
            updatedAt: new Date().toISOString()
        };

        if (!existingId) {
            poData.status = 'ordered'; // default masih dipesan / menunggu dikirim
            poData.stockRestocked = false;
            poData.createdAt = new Date().toISOString();
            poData.paymentHistory = amountPaid > 0 ? [{
                date: new Date().toISOString(),
                amount: amountPaid,
                note: paymentType === 'cash' ? 'Pembayaran Tunai Lunas' : 'Uang Muka / DP Awal',
                method: paymentType === 'cash' ? 'Tunai' : 'Transfer'
            }] : [];

            appData.purchases.unshift(poData);
        } else {
            const idx = appData.purchases.findIndex(x => String(x.id) === String(existingId));
            if (idx > -1) {
                const oldPO = appData.purchases[idx];
                poData.status = oldPO.status || 'ordered';
                poData.stockRestocked = oldPO.stockRestocked || false;
                poData.createdAt = oldPO.createdAt;
                poData.paymentHistory = oldPO.paymentHistory || [];

                // Jika ada pembayaran bertambah saat edit
                if (amountPaid > (oldPO.amountPaid || 0)) {
                    poData.paymentHistory.push({
                        date: new Date().toISOString(),
                        amount: amountPaid - (oldPO.amountPaid || 0),
                        note: 'Penyesuaian Bayar via Edit PO',
                        method: 'Transfer / Kas'
                    });
                }

                appData.purchases[idx] = poData;
            }
        }

        await saveApp(['purchases']);

        hLoad();
        window.closePOFormModal();
        showToast(existingId ? 'Order PO diperbarui! ✨' : 'Order PO kulakan berhasil dibuat! 🛒');
        renderPurchasesView();
    } catch (err) {
        hLoad();
        console.error('Gagal menyimpan PO:', err);
        showToast('Gagal menyimpan PO: ' + err.message);
    }
};

/**
 * Hapus PO
 */
window.deletePurchaseOrder = (poId) => {
    const purchases = appData.purchases || [];
    const po = purchases.find(x => String(x.id) === String(poId));
    if (!po) return;

    let warningText = `Hapus pesanan kulakan <b>${esc(po.poNumber || po.id)}</b> ke <b>${esc(po.supplierName)}</b>?`;
    if (po.stockRestocked) {
        warningText += `<br><span class="text-rose-500 font-bold text-xs mt-1 block">Perhatian: Stok dari PO ini sudah ter-restock ke sistem toko. Menghapus PO ini tidak akan otomatis memotong stok fisik.</span>`;
    }

    showConfirm(
        'Hapus Purchase Order',
        warningText,
        async () => {
            sLoad('Menghapus PO...');
            try {
                appData.purchases = (appData.purchases || []).filter(x => String(x.id) !== String(poId));
                await saveApp(['purchases']);
                hLoad();
                showToast('Purchase Order berhasil dihapus.');
                renderPurchasesView();
            } catch (err) {
                hLoad();
                showToast('Gagal menghapus: ' + err.message);
            }
        },
        'Hapus Permanen',
        true
    );
};

/**
 * ══════════════════════════════════════════════════════════════════
 * FITUR UTAMA 3: DETAIL PO & KARTU PEMBAYARAN CICILAN
 * ══════════════════════════════════════════════════════════════════
 */
window.openPurchaseDetailModal = (poId) => {
    const purchases = appData.purchases || [];
    const po = purchases.find(x => String(x.id) === String(poId));
    if (!po) return showToast('Data PO tidak ditemukan!');

    const modal = el('modal-po-detail');
    const box = el('modal-po-detail-box');
    const content = el('modal-po-detail-content');
    if (!modal || !content) return;

    const total = parseFloat(po.total) || 0;
    const paid = parseFloat(po.amountPaid) || 0;
    const balance = total - paid;

    setH('modal-po-detail-content', `
        <div class="p-5 sm:p-6 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between bg-slate-50/50 dark:bg-slate-900/30">
            <div>
                <div class="flex items-center gap-2">
                    <h3 class="font-mono font-black text-base sm:text-lg text-slate-800 dark:text-white tracking-tight">${esc(po.poNumber || po.id)}</h3>
                    <span class="px-2.5 py-0.5 rounded-full text-[10px] font-bold ${po.status === 'received' || po.status === 'completed' ? 'bg-teal-50 text-teal-600 border border-teal-200' : 'bg-indigo-50 text-indigo-600 border border-indigo-200'}">
                        ${po.status === 'ordered' ? 'Dipesan' : (po.status === 'received' ? 'Barang Diterima' : 'Selesai')}
                    </span>
                </div>
                <p class="text-xs text-slate-400 mt-0.5">Supplier: <b>${esc(po.supplierName)}</b> • Tanggal: ${formatDate(po.date || po.createdAt)}</p>
            </div>
            <div class="flex items-center gap-2">
                <button onclick="window.printPurchaseOrder('${po.id}')" class="w-8 h-8 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 flex items-center justify-center transition-all hover:bg-slate-200" title="Cetak PO">
                    <i class="fa-solid fa-print text-xs"></i>
                </button>
                <button onclick="window.closePurchaseDetailModal()" class="w-8 h-8 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-slate-800 dark:hover:text-white flex items-center justify-center transition-all">
                    <i class="fa-solid fa-xmark"></i>
                </button>
            </div>
        </div>

        <div class="p-5 sm:p-6 space-y-5">
            <!-- TABEL DAFTAR BARANG PO -->
            <div>
                <h4 class="font-bold text-xs uppercase tracking-widest text-slate-500 mb-2">Item Barang Dipesan</h4>
                <div class="border border-slate-200 dark:border-slate-700 rounded-2xl overflow-hidden bg-white dark:bg-slate-800">
                    <table class="w-full text-left text-xs">
                        <thead>
                            <tr class="bg-slate-50 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-700 text-[10px] font-black uppercase tracking-wider text-slate-400">
                                <th class="py-2.5 px-3">Nama Produk</th>
                                <th class="py-2.5 px-3 text-center">Jumlah</th>
                                <th class="py-2.5 px-3 text-right">Harga Modal</th>
                                <th class="py-2.5 px-3 text-right">Subtotal</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-slate-100 dark:divide-slate-800">
                            ${(po.items || []).map(item => `
                                <tr>
                                    <td class="py-2.5 px-3">
                                        <p class="font-bold text-slate-800 dark:text-slate-100">${esc(item.name)}</p>
                                        ${item.sku ? `<span class="text-[10px] font-mono text-slate-400">SKU: ${esc(item.sku)}</span>` : ''}
                                    </td>
                                    <td class="py-2.5 px-3 text-center font-bold text-slate-700 dark:text-slate-200">
                                        ${item.qty} ${esc(item.unit || 'pcs')}
                                    </td>
                                    <td class="py-2.5 px-3 text-right font-mono text-slate-600 dark:text-slate-300">
                                        ${fCur(item.unitPrice)}
                                    </td>
                                    <td class="py-2.5 px-3 text-right font-black text-slate-800 dark:text-slate-100">
                                        ${fCur((parseFloat(item.qty) || 0) * (parseFloat(item.unitPrice) || 0))}
                                    </td>
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>
                </div>
            </div>

            <!-- RINGKASAN PEMBAYARAN & SISA HUTANG -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2 text-xs">
                    <span class="block text-[10px] font-bold uppercase tracking-widest text-slate-400">Informasi Tagihan</span>
                    <div class="flex justify-between">
                        <span class="text-slate-500">Subtotal:</span>
                        <span class="font-bold text-slate-800 dark:text-white">${fCur(po.subtotal)}</span>
                    </div>
                    ${po.discount > 0 ? `
                        <div class="flex justify-between text-emerald-500">
                            <span>Diskon Nota:</span>
                            <span>-${fCur(po.discount)}</span>
                        </div>
                    ` : ''}
                    ${po.shippingFee > 0 ? `
                        <div class="flex justify-between">
                            <span class="text-slate-500">Ongkos Kirim:</span>
                            <span>+${fCur(po.shippingFee)}</span>
                        </div>
                    ` : ''}
                    <div class="pt-2 border-t border-slate-200 dark:border-slate-700 flex justify-between font-black text-sm">
                        <span>Total PO:</span>
                        <span class="text-[var(--color-primary)]">${fCur(total)}</span>
                    </div>
                    <div class="flex justify-between text-xs pt-1">
                        <span class="text-slate-500">Sudah Dibayar:</span>
                        <span class="font-bold text-emerald-600 dark:text-emerald-400">${fCur(paid)}</span>
                    </div>
                    <div class="flex justify-between text-xs font-bold pt-1">
                        <span class="text-amber-500">Sisa Hutang Tempo:</span>
                        <span class="text-amber-600 dark:text-amber-400 font-black">${balance > 0 ? fCur(balance) : 'Lunas (Rp 0)'}</span>
                    </div>
                </div>

                <!-- RIWAYAT CICILAN & TOMBOL BAYAR -->
                <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
                    <div class="flex items-center justify-between">
                        <span class="text-[10px] font-bold uppercase tracking-widest text-slate-400">Histori Pembayaran Cicilan</span>
                        ${balance > 0 && po.paymentType === 'tempo' ? `
                            <button onclick="window.closePurchaseDetailModal(); window.openPurchasePaymentModal('${po.id}')" class="px-3 py-1 rounded-xl bg-amber-500 text-white font-bold text-xs shadow-2xs hover:bg-amber-600 transition-all">
                                + Bayar Cicilan
                            </button>
                        ` : ''}
                    </div>

                    ${(po.paymentHistory || []).length === 0 ? `
                        <p class="text-xs text-slate-400 text-center py-4">Belum ada catatan pembayaran.</p>
                    ` : `
                        <div class="space-y-2 max-h-48 overflow-y-auto">
                            ${po.paymentHistory.map(ph => `
                                <div class="p-2.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-between text-xs">
                                    <div>
                                        <span class="font-black text-emerald-600 dark:text-emerald-400">${fCur(ph.amount)}</span>
                                        <p class="text-[10px] text-slate-400">${formatDateTime(ph.date)} • ${esc(ph.method || 'Transfer')}</p>
                                    </div>
                                    <span class="text-[11px] text-slate-500 dark:text-slate-300 font-bold">${esc(ph.note || '-')}</span>
                                </div>
                            `).join('')}
                        </div>
                    `}
                </div>
            </div>
        </div>
    `);

    modal.classList.remove('hidden');
    setTimeout(() => {
        modal.classList.remove('opacity-0');
        if (box) box.classList.remove('scale-95');
    }, 10);
};

window.closePurchaseDetailModal = () => {
    const modal = el('modal-po-detail');
    const box = el('modal-po-detail-box');
    if (!modal) return;
    modal.classList.add('opacity-0');
    if (box) box.classList.add('scale-95');
    setTimeout(() => {
        modal.classList.add('hidden');
    }, 200);
};

/**
 * ══════════════════════════════════════════════════════════════════
 * FITUR UTAMA 4: MODAL BAYAR / CICIL HUTANG TEMPO PO
 * ══════════════════════════════════════════════════════════════════
 */
window.openPurchasePaymentModal = (poId) => {
    const purchases = appData.purchases || [];
    const po = purchases.find(x => String(x.id) === String(poId));
    if (!po) return showToast('Data PO tidak ditemukan!');

    const total = parseFloat(po.total) || 0;
    const paid = parseFloat(po.amountPaid) || 0;
    const unpaid = Math.max(0, total - paid);

    const modal = el('modal-po-payment');
    const box = el('modal-po-payment-box');
    const content = el('modal-po-payment-content');
    if (!modal || !content) return;

    setH('modal-po-payment-content', `
        <div class="p-5 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
            <div class="flex items-center gap-3">
                <div class="w-10 h-10 rounded-2xl bg-amber-50 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400 flex items-center justify-center text-lg">
                    <i class="fa-solid fa-money-bill-wave"></i>
                </div>
                <div>
                    <h3 class="font-black text-base text-slate-800 dark:text-white tracking-tight">Bayar / Cicil Hutang Supplier</h3>
                    <p class="text-xs text-slate-400">${esc(po.supplierName)} • ${esc(po.poNumber || po.id)}</p>
                </div>
            </div>
            <button onclick="window.closePurchasePaymentModal()" class="w-8 h-8 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-slate-800 dark:hover:text-white flex items-center justify-center transition-all">
                <i class="fa-solid fa-xmark"></i>
            </button>
        </div>

        <form id="po-pay-form" onsubmit="window.submitPurchasePayment(event, '${po.id}')" class="p-5 space-y-4">
            <div class="p-3.5 rounded-2xl bg-amber-50/70 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800/60 text-xs space-y-1">
                <div class="flex justify-between">
                    <span class="text-slate-500">Total Tagihan PO:</span>
                    <span class="font-bold text-slate-800 dark:text-white">${fCur(total)}</span>
                </div>
                <div class="flex justify-between">
                    <span class="text-slate-500">Sudah Dibayar:</span>
                    <span class="font-bold text-emerald-600">${fCur(paid)}</span>
                </div>
                <div class="flex justify-between pt-1 border-t border-amber-200 dark:border-amber-800 font-black">
                    <span class="text-amber-600 dark:text-amber-400">Sisa Hutang Wajib Bayar:</span>
                    <span class="text-amber-600 dark:text-amber-400 text-sm">${fCur(unpaid)}</span>
                </div>
            </div>

            <div>
                <label class="block text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-1.5">Nominal Pembayaran (Rp) *</label>
                <div class="relative">
                    <input type="number" id="pop-amount" required min="1" max="${unpaid}" value="${unpaid}" class="admin-input bg-slate-50 dark:bg-slate-900 font-black text-base pr-20 text-emerald-600">
                    <button type="button" onclick="document.getElementById('pop-amount').value = ${unpaid}" class="absolute right-2 top-1/2 -translate-y-1/2 px-2.5 py-1 rounded-lg primary-bg text-white font-bold text-[10px] shadow-2xs">
                        Lunas
                    </button>
                </div>
            </div>

            <div class="grid grid-cols-2 gap-3">
                <div>
                    <label class="block text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-1.5">Tanggal Bayar *</label>
                    <input type="date" id="pop-date" required value="${new Date().toISOString().split('T')[0]}" class="admin-input bg-slate-50 dark:bg-slate-900 text-xs font-bold">
                </div>

                <div>
                    <label class="block text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-1.5">Metode Bayar</label>
                    <select id="pop-method" class="admin-input bg-slate-50 dark:bg-slate-900 text-xs font-bold cursor-pointer">
                        <option value="Transfer Bank">Transfer Bank</option>
                        <option value="Kas Tunai">Kas Tunai</option>
                        <option value="Giro / Cek">Giro / Cek</option>
                    </select>
                </div>
            </div>

            <div>
                <label class="block text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-1.5">Catatan / Bukti Transfer</label>
                <input type="text" id="pop-note" placeholder="Contoh: Transfer via BCA No Ref 123456" class="admin-input bg-slate-50 dark:bg-slate-900 text-xs">
            </div>

            <div class="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-end gap-2.5">
                <button type="button" onclick="window.closePurchasePaymentModal()" class="px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 font-bold text-xs">
                    Batal
                </button>
                <button type="submit" class="px-5 py-2 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-bold text-xs shadow-2xs transition-all active:scale-95">
                    <i class="fa-solid fa-check mr-1.5"></i> Simpan Pembayaran
                </button>
            </div>
        </form>
    `);

    modal.classList.remove('hidden');
    setTimeout(() => {
        modal.classList.remove('opacity-0');
        if (box) box.classList.remove('scale-95');
    }, 10);
};

window.closePurchasePaymentModal = () => {
    const modal = el('modal-po-payment');
    const box = el('modal-po-payment-box');
    if (!modal) return;
    modal.classList.add('opacity-0');
    if (box) box.classList.add('scale-95');
    setTimeout(() => {
        modal.classList.add('hidden');
    }, 200);
};

/**
 * Submit Cicilan Hutang PO
 */
window.submitPurchasePayment = async (e, poId) => {
    e.preventDefault();
    sLoad('Mencatat Pembayaran...');

    try {
        const purchases = appData.purchases || [];
        const po = purchases.find(x => String(x.id) === String(poId));
        if (!po) throw new Error('Data PO tidak ditemukan!');

        const amount = parseFloat(el('pop-amount')?.value) || 0;
        const date = el('pop-date')?.value || new Date().toISOString();
        const method = el('pop-method')?.value || 'Transfer Bank';
        const note = (el('pop-note')?.value || '').trim();

        if (amount <= 0) {
            hLoad();
            return showToast('Nominal pembayaran harus lebih besar dari 0!');
        }

        const total = parseFloat(po.total) || 0;
        const currentPaid = parseFloat(po.amountPaid) || 0;
        const newPaid = currentPaid + amount;
        const newBalance = Math.max(0, total - newPaid);

        po.amountPaid = newPaid;
        po.balance = newBalance;

        if (newPaid >= total) {
            po.paymentStatus = 'lunas';
            if (po.status === 'received') {
                po.status = 'completed';
            }
        } else {
            po.paymentStatus = 'sebagian';
        }

        if (!po.paymentHistory) po.paymentHistory = [];
        po.paymentHistory.push({
            date,
            amount,
            method,
            note: note || `Pembayaran cicilan tempo (${method})`
        });

        po.updatedAt = new Date().toISOString();

        await saveApp(['purchases']);

        hLoad();
        window.closePurchasePaymentModal();
        showToast('Pembayaran hutang supplier berhasil dicatat! 💰');
        renderPurchasesView();
    } catch (err) {
        hLoad();
        console.error('Gagal simpan pembayaran:', err);
        showToast('Gagal memproses: ' + err.message);
    }
};

/**
 * ══════════════════════════════════════════════════════════════════
 * FITUR UTAMA 5: KIRIM FORMAT PO RESMI KE WHATSAPP SALES SUPPLIER
 * ══════════════════════════════════════════════════════════════════
 */
window.sendPOToSupplierWA = (poId) => {
    const purchases = appData.purchases || [];
    const po = purchases.find(x => String(x.id) === String(poId));
    if (!po) return showToast('Data PO tidak ditemukan!');

    const cleanPhone = po.supplierPhone ? normalizeWA(po.supplierPhone) : '';
    if (!cleanPhone) {
        return showToast('Nomor WhatsApp supplier belum tercatat di data supplier!');
    }

    const storeName = appData.store?.name || 'Toko Putri Utama Teknik';
    const storeAddress = appData.store?.address || '';
    const storePhone = appData.store?.phone || '';

    let itemsText = (po.items || []).map((it, i) => `${i + 1}. *${it.name}* - ${it.qty} ${it.unit || 'pcs'} @ Rp ${Number(it.unitPrice).toLocaleString('id-ID')}`).join('\n');

    let text = `*SURAT PESANAN PEMBELIAN BARANG (PURCHASE ORDER)*\n` +
        `Dari: *${storeName}*\n` +
        (storeAddress ? `Alamat: ${storeAddress}\n` : '') +
        (storePhone ? `Telp Toko: ${storePhone}\n` : '') +
        `-----------------------------------------\n` +
        `Kepada Yth: *${po.supplierName}*\n` +
        `Nomor PO: *${po.poNumber || po.id}*\n` +
        `Tanggal: ${formatDate(po.date || po.createdAt)}\n` +
        `Termin: ${po.paymentType === 'tempo' ? `Tempo ${po.tempoDays || 14} Hari (Jatuh Tempo: ${formatDate(po.tempoDueDate)})` : (po.paymentType === 'konsinyasi' ? 'Konsinyasi' : 'Cash Saat Kirim')}\n` +
        `-----------------------------------------\n` +
        `*DAFTAR BARANG YANG DIPESAN:*\n` +
        `${itemsText}\n` +
        `-----------------------------------------\n` +
        `*Subtotal:* Rp ${Number(po.subtotal || 0).toLocaleString('id-ID')}\n` +
        (po.discount > 0 ? `*Diskon:* -Rp ${Number(po.discount).toLocaleString('id-ID')}\n` : '') +
        (po.shippingFee > 0 ? `*Ongkir:* +Rp ${Number(po.shippingFee).toLocaleString('id-ID')}\n` : '') +
        `*TOTAL NILAI PO:* *Rp ${Number(po.total || 0).toLocaleString('id-ID')}*\n` +
        (po.notes ? `\n*Catatan:* ${po.notes}\n` : '') +
        `\nMohon dicek ketersediaan stok & jadwal armada pengirimannya. Terima kasih atas kerja samanya! 🙏`;

    openWhatsApp(cleanPhone, text);
};

/**
 * ══════════════════════════════════════════════════════════════════
 * FITUR UTAMA 6: CETAK SURAT PESANAN PURCHASE ORDER (RAMAH PRINTER & PDF)
 * ══════════════════════════════════════════════════════════════════
 */
window.printPurchaseOrder = (poId) => {
    const purchases = appData.purchases || [];
    const po = purchases.find(x => String(x.id) === String(poId));
    if (!po) return showToast('Data PO tidak ditemukan!');

    const store = appData.store || {};
    const printContainer = el('po-print-container');
    if (!printContainer) return;

    const termLabel = po.paymentType === 'tempo' 
        ? `Tempo ${po.tempoDays || 14} Hari (Jatuh Tempo: ${formatDate(po.tempoDueDate)})` 
        : (po.paymentType === 'konsinyasi' ? 'Konsinyasi' : 'Cash / Tunai');

    const printHtml = `
        <div class="po-printable-sheet" style="font-family: Arial, sans-serif; color: #1e293b; padding: 25px; max-width: 800px; margin: 0 auto; background: white;">
            <!-- KOP TOKO -->
            <div style="display: flex; justify-content: space-between; align-items: flex-start; border-bottom: 2px solid #0f172a; padding-bottom: 15px; margin-bottom: 20px;">
                <div>
                    <h1 style="font-size: 20px; font-weight: 900; margin: 0; text-transform: uppercase; color: #0f172a; letter-spacing: 0.5px;">${esc(store.name || 'TOKO PUTRI UTAMA TEKNIK')}</h1>
                    <p style="font-size: 11px; margin: 4px 0 0; color: #64748b;">${esc(store.address || 'Pusat Alat Teknik, Bangunan & Perlengkapan')}</p>
                    <p style="font-size: 11px; margin: 2px 0 0; color: #64748b;">WhatsApp / Telp: ${esc(store.phone || '-')}</p>
                </div>
                <div style="text-align: right;">
                    <h2 style="font-size: 18px; font-weight: 900; margin: 0; color: #2563eb; text-transform: uppercase;">PURCHASE ORDER</h2>
                    <p style="font-size: 13px; font-weight: bold; font-family: monospace; margin: 4px 0 0;">${esc(po.poNumber || po.id)}</p>
                    <p style="font-size: 11px; margin: 2px 0 0; color: #64748b;">Tanggal: ${formatDate(po.date || po.createdAt)}</p>
                </div>
            </div>

            <!-- DETAIL SUPPLIER & PENGIRIMAN -->
            <div style="display: flex; justify-content: space-between; margin-bottom: 20px; font-size: 12px; background: #f8fafc; padding: 12px; border-radius: 8px;">
                <div>
                    <span style="font-size: 9px; font-weight: bold; text-transform: uppercase; color: #64748b; display: block; margin-bottom: 4px;">Kepada Rekanan / Supplier:</span>
                    <p style="font-size: 14px; font-weight: bold; margin: 0;">${esc(po.supplierName)}</p>
                    ${po.supplierPhone ? `<p style="margin: 3px 0 0; color: #64748b;">Telp / WA: ${esc(po.supplierPhone)}</p>` : ''}
                </div>
                <div style="text-align: right;">
                    <span style="font-size: 9px; font-weight: bold; text-transform: uppercase; color: #64748b; display: block; margin-bottom: 4px;">Syarat &amp; Ketentuan:</span>
                    <p style="margin: 0; font-weight: bold;">Termin: ${termLabel}</p>
                    <p style="margin: 3px 0 0; color: #64748b;">Status PO: ${po.status === 'ordered' ? 'Dipesan' : (po.status === 'received' ? 'Diterima' : 'Selesai')}</p>
                </div>
            </div>

            <!-- TABEL ITEM PO -->
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px; font-size: 12px;">
                <thead>
                    <tr style="background: #0f172a; color: white;">
                        <th style="padding: 8px 10px; text-align: center; width: 30px;">No</th>
                        <th style="padding: 8px 10px; text-align: left;">Nama Barang &amp; Deskripsi</th>
                        <th style="padding: 8px 10px; text-align: center; width: 80px;">Kuantitas</th>
                        <th style="padding: 8px 10px; text-align: right; width: 120px;">Harga Satuan</th>
                        <th style="padding: 8px 10px; text-align: right; width: 130px;">Subtotal</th>
                    </tr>
                </thead>
                <tbody>
                    ${(po.items || []).map((it, idx) => `
                        <tr style="border-bottom: 1px solid #e2e8f0;">
                            <td style="padding: 8px 10px; text-align: center;">${idx + 1}</td>
                            <td style="padding: 8px 10px;">
                                <b>${esc(it.name)}</b>
                                ${it.sku ? `<br><span style="font-size: 10px; font-family: monospace; color: #64748b;">SKU: ${esc(it.sku)}</span>` : ''}
                            </td>
                            <td style="padding: 8px 10px; text-align: center; font-weight: bold;">${it.qty} ${esc(it.unit || 'pcs')}</td>
                            <td style="padding: 8px 10px; text-align: right;">${fCur(it.unitPrice)}</td>
                            <td style="padding: 8px 10px; text-align: right; font-weight: bold;">${fCur((parseFloat(it.qty) || 0) * (parseFloat(it.unitPrice) || 0))}</td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>

            <!-- TOTAL BIAYA & CATATAN -->
            <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 40px; font-size: 12px;">
                <div style="max-width: 450px;">
                    <span style="font-size: 10px; font-weight: bold; text-transform: uppercase; color: #64748b; display: block; margin-bottom: 4px;">Catatan Order:</span>
                    <p style="margin: 0; font-style: italic; color: #475569;">${esc(po.notes || 'Harap barang dikirim sesuai spesifikasi & packing aman.')}</p>
                </div>
                <div style="width: 250px;">
                    <div style="display: flex; justify-content: space-between; padding: 3px 0; color: #64748b;">
                        <span>Subtotal:</span>
                        <span style="font-weight: bold; color: #0f172a;">${fCur(po.subtotal)}</span>
                    </div>
                    ${po.discount > 0 ? `
                        <div style="display: flex; justify-content: space-between; padding: 3px 0; color: #16a34a;">
                            <span>Diskon:</span>
                            <span>-${fCur(po.discount)}</span>
                        </div>
                    ` : ''}
                    ${po.shippingFee > 0 ? `
                        <div style="display: flex; justify-content: space-between; padding: 3px 0; color: #64748b;">
                            <span>Ongkos Kirim:</span>
                            <span>+${fCur(po.shippingFee)}</span>
                        </div>
                    ` : ''}
                    <div style="display: flex; justify-content: space-between; padding: 8px 0; border-top: 2px solid #0f172a; margin-top: 4px; font-size: 14px; font-weight: 900;">
                        <span>TOTAL TAGIHAN:</span>
                        <span style="color: #2563eb;">${fCur(po.total)}</span>
                    </div>
                </div>
            </div>

            <!-- TANDA TANGAN -->
            <div style="display: flex; justify-content: space-between; text-align: center; font-size: 12px; margin-top: 50px;">
                <div style="width: 220px;">
                    <p style="margin: 0 0 65px; color: #64748b;">Dipesan Oleh (Purchasing):</p>
                    <div style="border-top: 1px solid #0f172a; padding-top: 5px; font-weight: bold;">${esc(store.name || 'Toko Putri')}</div>
                </div>
                <div style="width: 220px;">
                    <p style="margin: 0 0 65px; color: #64748b;">Diterima &amp; Disetujui Oleh:</p>
                    <div style="border-top: 1px solid #0f172a; padding-top: 5px; font-weight: bold;">${esc(po.supplierName)}</div>
                </div>
            </div>
        </div>
    `;

    // Buat iframe terisolasi untuk cetak bersih
    let printIframe = el('po-print-iframe');
    if (!printIframe) {
        printIframe = document.createElement('iframe');
        printIframe.id = 'po-print-iframe';
        printIframe.style.position = 'fixed';
        printIframe.style.right = '0';
        printIframe.style.bottom = '0';
        printIframe.style.width = '0';
        printIframe.style.height = '0';
        printIframe.style.border = '0';
        document.body.appendChild(printIframe);
    }

    const doc = printIframe.contentWindow.document;
    doc.open();
    doc.write(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>PO - ${esc(po.poNumber || po.id)}</title>
            <style>
                @page { size: A4; margin: 10mm; }
                body { margin: 0; background: white; font-family: Arial, sans-serif; }
            </style>
        </head>
        <body>
            ${printHtml}
        </body>
        </html>
    `);
    doc.close();

    setTimeout(() => {
        printIframe.contentWindow.focus();
        printIframe.contentWindow.print();
    }, 300);
};

// Expose ke global window
window.renderPurchasesView = renderPurchasesView;
window.computePurchaseMetrics = computePurchaseMetrics;
