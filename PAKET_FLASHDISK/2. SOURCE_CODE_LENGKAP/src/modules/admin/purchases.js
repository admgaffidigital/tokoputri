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
    openWhatsApp, normalizeWA, renderProductCoverHtml,
    openModalAnim, closeModalAnim 
} from '../../core/utils.js';
import { saveApp } from '../../services/storage.js';

/**
 * Pastikan seluruh wadah modal Purchase Order terpasang di root document.body
 * agar terbebas dari scroll container & transform parent (.view-section / .scroll-content).
 */
export const ensurePurchaseModals = () => {
    // Bersihkan modal lama jika pernah terinjeksi ke dalam #admin-content
    ['modal-po-form', 'modal-po-detail', 'modal-po-payment', 'modal-po-product-picker'].forEach(id => {
        const inside = document.querySelector(`#admin-content #${id}`);
        if (inside) inside.remove();
    });

    if (!el('modal-po-form')) {
        const m = document.createElement('div');
        m.id = 'modal-po-form';
        m.className = 'fixed inset-0 z-[150] flex hidden items-end sm:items-center justify-center p-0 sm:p-4 bg-slate-950/40 backdrop-blur-sm opacity-0 transition-opacity duration-300';
        m.onclick = (e) => { if (e.target === m) window.closePOFormModal?.(); };
        m.innerHTML = `
            <div id="modal-po-form-box" class="modal-bottom-sheet relative flex max-h-[92dvh] sm:max-h-[88dvh] w-full max-w-4xl translate-y-full sm:translate-y-10 transform flex-col overflow-hidden rounded-t-[2rem] sm:rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-2xl transition-transform duration-300">
                <div id="modal-po-form-content" class="flex-1 flex flex-col overflow-hidden"></div>
            </div>
        `;
        document.body.appendChild(m);
    }

    if (!el('modal-po-detail')) {
        const m = document.createElement('div');
        m.id = 'modal-po-detail';
        m.className = 'fixed inset-0 z-[150] flex hidden items-end sm:items-center justify-center p-0 sm:p-4 bg-slate-950/40 backdrop-blur-sm opacity-0 transition-opacity duration-300';
        m.onclick = (e) => { if (e.target === m) window.closePODetailModal?.(); };
        m.innerHTML = `
            <div id="modal-po-detail-box" class="modal-bottom-sheet relative flex max-h-[92dvh] sm:max-h-[88dvh] w-full max-w-3xl translate-y-full sm:translate-y-10 transform flex-col overflow-hidden rounded-t-[2rem] sm:rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-2xl transition-transform duration-300">
                <div id="modal-po-detail-content" class="flex-1 overflow-y-auto hide-scrollbar flex flex-col"></div>
            </div>
        `;
        document.body.appendChild(m);
    }

    if (!el('modal-po-payment')) {
        const m = document.createElement('div');
        m.id = 'modal-po-payment';
        m.className = 'fixed inset-0 z-[150] flex hidden items-end sm:items-center justify-center p-0 sm:p-4 bg-slate-950/40 backdrop-blur-sm opacity-0 transition-opacity duration-300';
        m.onclick = (e) => { if (e.target === m) window.closePurchasePaymentModal?.(); };
        m.innerHTML = `
            <div id="modal-po-payment-box" class="modal-bottom-sheet relative flex max-h-[92dvh] sm:max-h-[88dvh] w-full max-w-md translate-y-full sm:translate-y-10 transform flex-col overflow-hidden rounded-t-[2rem] sm:rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-2xl transition-transform duration-300">
                <div id="modal-po-payment-content" class="flex-1 overflow-y-auto hide-scrollbar flex flex-col"></div>
            </div>
        `;
        document.body.appendChild(m);
    }

    if (!el('modal-po-product-picker')) {
        const m = document.createElement('div');
        m.id = 'modal-po-product-picker';
        m.className = 'fixed inset-0 z-[160] flex hidden items-end sm:items-center justify-center p-0 sm:p-4 bg-slate-950/40 backdrop-blur-sm opacity-0 transition-opacity duration-300';
        m.onclick = (e) => { if (e.target === m) window.closePOProductPicker?.(); };
        m.innerHTML = `
            <div id="modal-po-product-picker-box" class="modal-bottom-sheet relative flex max-h-[92dvh] sm:max-h-[85dvh] w-full max-w-2xl translate-y-full sm:translate-y-10 transform flex-col overflow-hidden rounded-t-[2rem] sm:rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-2xl transition-transform duration-300">
                <div id="modal-po-product-picker-content" class="flex-1 flex flex-col overflow-hidden"></div>
            </div>
        `;
        document.body.appendChild(m);
    }
};

// State modul purchases
let activePOFilter = 'all'; // 'all' | 'ordered' | 'received' | 'unpaid' | 'completed'
let purchaseSearchQuery = '';
let currentEditingPOId = null;
let tempPOItems = []; // Item builder saat membuat/mengedit PO

// State Native Product Picker PO
let poPickerTargetRow = null;
let poPickerSearch = '';
let poPickerFilterSupplier = true;
let poPickerCategory = 'all';

/**
 * Format kuantitas desimal bersih (menghilangkan trailing zero, contoh: 2.5 bukan 2.500)
 */
export const formatQty = (n) => {
    const val = parseFloat(n) || 0;
    return parseFloat(val.toFixed(3)).toString();
};

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
    ensurePurchaseModals();
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
        <div class="space-y-4 sm:space-y-5 fade-in max-w-5xl mx-auto pb-24 pt-1 sm:pt-2">
            <!-- 0. HERO BANNER PENGADAAN & ORDER KULAKAN (PO) — THEME HARMONIZED -->
            <div class="relative overflow-hidden p-5 sm:p-7 rounded-2xl sm:rounded-3xl border border-[rgba(var(--color-primary-rgb),0.2)] bg-gradient-to-br from-white via-white to-[rgba(var(--color-primary-rgb),0.05)] dark:from-slate-900 dark:via-slate-900/90 dark:to-slate-800 shadow-xs">
                <!-- Ambient Glow Dekorasi -->
                <div class="pointer-events-none absolute -right-10 -top-10 h-48 w-48 rounded-full opacity-15 blur-3xl" style="background: var(--color-primary)"></div>
                <div class="pointer-events-none absolute -bottom-10 -left-10 h-40 w-40 rounded-full opacity-10 blur-2xl" style="background: var(--color-primary)"></div>

                <div class="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div class="space-y-1.5 max-w-xl">
                        <div class="flex items-center gap-2">
                            <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider border shadow-2xs" style="background: rgba(var(--color-primary-rgb), 0.12); color: var(--color-primary); border-color: rgba(var(--color-primary-rgb), 0.25);">
                                <i class="fa-solid fa-cart-flatbed"></i> Pengadaan &amp; Purchase Order (PO)
                            </span>
                        </div>
                        <h2 class="text-xl sm:text-2xl font-black tracking-tight text-slate-800 dark:text-white flex items-center gap-2.5">
                            Order Kulakan &amp; Restock Barang Toko
                        </h2>
                        <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                            Kelola pesanan barang kulakan ke supplier rekanan, otomatisasi penerimaan stok masuk gudang, dan pantau jatuh tempo hutang usaha.
                        </p>
                    </div>

                    <div class="flex items-center gap-2 shrink-0">
                        <button onclick="if(window.openAdminTab) window.openAdminTab('suppliers');" class="px-4 py-3 rounded-2xl bg-white/90 dark:bg-slate-800/90 text-slate-700 dark:text-slate-200 border border-slate-200/90 dark:border-slate-700/80 font-bold text-xs shadow-2xs hover:bg-white dark:hover:bg-slate-700 transition-all flex items-center gap-2 cursor-pointer active:scale-95">
                            <i class="fa-solid fa-truck-field" style="color:var(--color-primary)"></i>
                            <span>Data Supplier</span>
                        </button>
                        <button onclick="window.openCreatePOModal()" class="px-5 py-3 rounded-2xl text-xs font-black text-white shadow-glow active:scale-95 transition-all flex items-center gap-2 cursor-pointer" style="background: var(--color-primary); box-shadow: 0 4px 14px rgba(var(--color-primary-rgb), 0.35);">
                            <i class="fa-solid fa-plus text-xs"></i>
                            <span>Buat Order PO</span>
                        </button>
                    </div>
                </div>
            </div>

            <!-- 1. SUMMARY METRICS CARDS -->
            <div class="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                <div class="p-3.5 sm:p-4 rounded-2xl bg-white/95 dark:bg-slate-800/80 border border-slate-200/90 dark:border-slate-700/80 shadow-2xs backdrop-blur-xs flex flex-col justify-between">
                    <div class="flex items-center justify-between mb-1.5">
                        <span class="text-[9px] font-black uppercase tracking-wider text-slate-500 dark:text-slate-400">Kulakan Bulan Ini</span>
                        <div class="w-7 h-7 rounded-xl flex items-center justify-center text-xs shadow-2xs" style="background: rgba(var(--color-primary-rgb), 0.12); color: var(--color-primary);">
                            <i class="fa-solid fa-cart-shopping"></i>
                        </div>
                    </div>
                    <p class="text-lg sm:text-xl font-black text-slate-800 dark:text-white tracking-tight">${fCur(metrics.monthPurchasesTotal)}</p>
                    <p class="text-[10px] font-bold text-slate-400 mt-0.5">Total Belanja Modal Toko</p>
                </div>

                <div class="p-3.5 sm:p-4 rounded-2xl bg-white/95 dark:bg-slate-800/80 border border-slate-200/90 dark:border-slate-700/80 shadow-2xs backdrop-blur-xs flex flex-col justify-between">
                    <div class="flex items-center justify-between mb-1.5">
                        <span class="text-[9px] font-black uppercase tracking-wider text-amber-500">Hutang Belum Lunas</span>
                        <div class="w-7 h-7 rounded-xl bg-amber-50 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400 flex items-center justify-center text-xs shadow-2xs">
                            <i class="fa-solid fa-file-invoice-dollar"></i>
                        </div>
                    </div>
                    <p class="text-lg sm:text-xl font-black text-amber-600 dark:text-amber-400 tracking-tight">${fCur(metrics.totalUnpaidDebt)}</p>
                    <p class="text-[10px] font-bold text-slate-400 mt-0.5">Tempo ke Supplier</p>
                </div>

                <div class="p-3.5 sm:p-4 rounded-2xl bg-white/95 dark:bg-slate-800/80 border border-slate-200/90 dark:border-slate-700/80 shadow-2xs backdrop-blur-xs flex flex-col justify-between">
                    <div class="flex items-center justify-between mb-1.5">
                        <span class="text-[9px] font-black uppercase tracking-wider" style="color:var(--color-primary)">Menunggu Barang</span>
                        <div class="w-7 h-7 rounded-xl flex items-center justify-center text-xs shadow-2xs" style="background: rgba(var(--color-primary-rgb), 0.12); color: var(--color-primary);">
                            <i class="fa-solid fa-truck-ramp-box"></i>
                        </div>
                    </div>
                    <p class="text-xl sm:text-2xl font-black tracking-tight" style="color:var(--color-primary)">${metrics.pendingArrivalCount}</p>
                    <p class="text-[10px] font-bold text-slate-400 mt-0.5">PO Sedang Dikirim</p>
                </div>

                <div class="p-3.5 sm:p-4 rounded-2xl bg-white/95 dark:bg-slate-800/80 border border-slate-200/90 dark:border-slate-700/80 shadow-2xs backdrop-blur-xs flex flex-col justify-between">
                    <div class="flex items-center justify-between mb-1.5">
                        <span class="text-[9px] font-black uppercase tracking-wider text-emerald-500">PO Selesai / Lunas</span>
                        <div class="w-7 h-7 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 flex items-center justify-center text-xs shadow-2xs">
                            <i class="fa-solid fa-circle-check"></i>
                        </div>
                    </div>
                    <p class="text-xl sm:text-2xl font-black text-emerald-600 dark:text-emerald-400 tracking-tight">${metrics.completedCount}</p>
                    <p class="text-[10px] font-bold text-slate-400 mt-0.5">Stok Masuk &amp; Lunas</p>
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
                        class="w-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl py-3 pl-11 pr-4 text-xs sm:text-sm font-bold text-slate-700 dark:text-slate-200 focus:outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/15 shadow-2xs transition-all"
                    >
                </div>

                <div class="flex items-center gap-2">
                    <button 
                        onclick="if(window.openAdminTab) window.openAdminTab('suppliers');" 
                        class="px-4 py-3 rounded-2xl bg-white/90 dark:bg-slate-800/90 text-slate-700 dark:text-slate-200 font-bold text-xs sm:text-sm flex items-center gap-2 border border-slate-200/90 dark:border-slate-700/80 transition-all active:scale-95 shadow-2xs cursor-pointer hover:bg-white dark:hover:bg-slate-700"
                        title="Buka Master Database Rekanan &amp; Asal-Usul Barang"
                    >
                        <i class="fa-solid fa-truck-field" style="color:var(--color-primary)"></i>
                        <span>Data Supplier</span>
                    </button>

                    <button 
                        onclick="window.openCreatePOModal()" 
                        class="px-4 sm:px-5 py-3 rounded-2xl text-white font-bold text-xs sm:text-sm flex items-center gap-2 shadow-glow transition-all active:scale-95 shrink-0 cursor-pointer"
                        style="background: var(--color-primary); box-shadow: 0 4px 14px rgba(var(--color-primary-rgb), 0.35);"
                    >
                        <i class="fa-solid fa-cart-plus text-xs"></i>
                        <span>Buat Order PO</span>
                    </button>
                </div>
            </div>

            <!-- 3. TAB FILTER STATUS PO -->
            <div class="flex items-center gap-2 overflow-x-auto hide-scrollbar pb-1 text-xs font-bold">
                <button 
                    onclick="window.setPurchaseFilter('all')" 
                    class="px-4 py-2.5 rounded-xl transition-all shrink-0 cursor-pointer ${activePOFilter === 'all' ? 'text-white shadow-sm' : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-[var(--color-primary)]/50'}"
                    style="${activePOFilter === 'all' ? 'background: var(--color-primary); box-shadow: 0 2px 8px rgba(var(--color-primary-rgb), 0.3); border-color: transparent;' : ''}"
                >
                    Semua PO (${purchases.length})
                </button>

                <button 
                    onclick="window.setPurchaseFilter('ordered')" 
                    class="px-4 py-2.5 rounded-xl transition-all shrink-0 flex items-center gap-1.5 cursor-pointer ${activePOFilter === 'ordered' ? 'text-white shadow-sm' : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-[var(--color-primary)]/50'}"
                    style="${activePOFilter === 'ordered' ? 'background: var(--color-primary); box-shadow: 0 2px 8px rgba(var(--color-primary-rgb), 0.3); border-color: transparent;' : ''}"
                >
                    <i class="fa-solid fa-clock text-[10px]"></i>
                    Dipesan (${purchases.filter(p => p.status === 'ordered').length})
                </button>

                <button 
                    onclick="window.setPurchaseFilter('received')" 
                    class="px-4 py-2.5 rounded-xl transition-all shrink-0 flex items-center gap-1.5 cursor-pointer ${activePOFilter === 'received' ? 'text-white shadow-sm' : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-[var(--color-primary)]/50'}"
                    style="${activePOFilter === 'received' ? 'background: var(--color-primary); box-shadow: 0 2px 8px rgba(var(--color-primary-rgb), 0.3); border-color: transparent;' : ''}"
                >
                    <i class="fa-solid fa-boxes-stacked text-[10px]"></i>
                    Barang Diterima (${purchases.filter(p => p.status === 'received').length})
                </button>

                <button 
                    onclick="window.setPurchaseFilter('unpaid')" 
                    class="px-4 py-2.5 rounded-xl transition-all shrink-0 flex items-center gap-1.5 cursor-pointer ${activePOFilter === 'unpaid' ? 'text-white shadow-sm' : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-[var(--color-primary)]/50'}"
                    style="${activePOFilter === 'unpaid' ? 'background: var(--color-primary); box-shadow: 0 2px 8px rgba(var(--color-primary-rgb), 0.3); border-color: transparent;' : ''}"
                >
                    <i class="fa-solid fa-file-invoice-dollar text-[10px]"></i>
                    Hutang Tempo
                </button>

                <button 
                    onclick="window.setPurchaseFilter('completed')" 
                    class="px-4 py-2.5 rounded-xl transition-all shrink-0 flex items-center gap-1.5 cursor-pointer ${activePOFilter === 'completed' ? 'text-white shadow-sm' : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-[var(--color-primary)]/50'}"
                    style="${activePOFilter === 'completed' ? 'background: var(--color-primary); box-shadow: 0 2px 8px rgba(var(--color-primary-rgb), 0.3); border-color: transparent;' : ''}"
                >
                    <i class="fa-solid fa-check-double text-[10px]"></i>
                    Selesai / Lunas
                </button>
            </div>

            <!-- 4. DAFTAR KARTU PURCHASE ORDER (PO) -->
            <div id="purchase-cards-list" class="space-y-4">
                ${filtered.length === 0 ? `
                    <div class="p-12 text-center flex flex-col items-center justify-center text-slate-400 bg-white/95 dark:bg-slate-800/80 rounded-3xl border border-slate-200/90 dark:border-slate-700/80">
                        <div class="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-3 shadow-xs" style="background: rgba(var(--color-primary-rgb), 0.12); color: var(--color-primary);">
                            <i class="fa-solid fa-cart-flatbed"></i>
                        </div>
                        <p class="font-bold text-sm text-slate-700 dark:text-slate-200">Belum Ada Order Pembelian (PO)</p>
                        <p class="text-xs text-slate-400 mt-1 max-w-sm">Buat order pembelian kulakan ke supplier untuk mencatat barang masuk, memperbarui stok toko otomatis, dan melacak jatuh tempo hutang.</p>
                        <button onclick="window.openCreatePOModal()" class="mt-4 px-6 py-3 rounded-2xl text-white font-bold text-xs shadow-glow cursor-pointer transition-all active:scale-95" style="background: var(--color-primary); box-shadow: 0 4px 14px rgba(var(--color-primary-rgb), 0.35);">
                            <i class="fa-solid fa-cart-plus mr-1.5"></i> Buat Order PO Pertama
                        </button>
                    </div>
                ` : filtered.map(po => renderPOCardHtml(po)).join('')}
            </div>
        </div>

        <!-- CONTAINER PRINT PURCHASE ORDER (DISSEMBLED UNTUK CETAK) -->
        <div id="po-print-container" class="hidden"></div>
    `);
};

/**
 * Render Kartu Setiap PO pada Daftar (Ergonomis, Lega, & 100% Harmonis Tema)
 */
const renderPOCardHtml = (po) => {
    const total = parseFloat(po.total) || 0;
    const paid = parseFloat(po.amountPaid) || 0;
    const unpaid = Math.max(0, total - paid);

    // Status Badge - Selaras Tema Dinamis
    let statusBadge = '';
    if (po.status === 'ordered') {
        statusBadge = `<span class="px-3 py-1 rounded-full text-[11px] font-black border" style="background: rgba(var(--color-primary-rgb), 0.12); color: var(--color-primary); border-color: rgba(var(--color-primary-rgb), 0.3);"><i class="fa-solid fa-clock mr-1.5"></i>Dipesan</span>`;
    } else if (po.status === 'received') {
        statusBadge = '<span class="px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 text-[11px] font-black border border-emerald-200 dark:border-emerald-800"><i class="fa-solid fa-boxes-stacked mr-1.5"></i>Barang Diterima</span>';
    } else if (po.status === 'completed') {
        statusBadge = '<span class="px-3 py-1 rounded-full bg-emerald-500 text-white text-[11px] font-black shadow-2xs"><i class="fa-solid fa-check-double mr-1.5"></i>Selesai &amp; Lunas</span>';
    } else if (po.status === 'cancelled') {
        statusBadge = '<span class="px-3 py-1 rounded-full bg-rose-50 dark:bg-rose-950/40 text-rose-600 dark:text-rose-400 text-[11px] font-black border border-rose-200 dark:border-rose-800"><i class="fa-solid fa-ban mr-1.5"></i>Dibatalkan</span>';
    }

    // Payment Badge
    let paymentBadge = '';
    if (po.paymentType === 'cash') {
        paymentBadge = '<span class="px-2.5 py-1 rounded-xl bg-slate-100 dark:bg-slate-700/80 text-slate-700 dark:text-slate-200 text-[11px] font-bold">Tunai / Cash</span>';
    } else if (po.paymentType === 'konsinyasi') {
        paymentBadge = '<span class="px-2.5 py-1 rounded-xl bg-slate-100 dark:bg-slate-700/80 text-slate-700 dark:text-slate-200 text-[11px] font-bold">Konsinyasi</span>';
    } else {
        if (po.paymentStatus === 'lunas' || unpaid <= 0) {
            paymentBadge = '<span class="px-2.5 py-1 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 text-[11px] font-bold border border-emerald-200 dark:border-emerald-800"><i class="fa-solid fa-check mr-1"></i>Tempo Lunas</span>';
        } else {
            paymentBadge = `<span class="px-2.5 py-1 rounded-xl bg-amber-50 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400 text-[11px] font-bold border border-amber-200 dark:border-amber-800"><i class="fa-solid fa-clock-rotate-left mr-1"></i>Sisa Hutang: ${fCur(unpaid)}</span>`;
        }
    }

    const itemsCount = (po.items || []).length;
    const cleanPhone = po.supplierPhone ? normalizeWA(po.supplierPhone) : '';

    return `
        <div class="bg-white/95 dark:bg-slate-800/90 p-4 sm:p-6 border border-slate-200/90 dark:border-slate-700/80 hover:border-[var(--color-primary)]/50 transition-all rounded-3xl shadow-2xs group space-y-4">
            <!-- 1. HEADER KARTU: NO PO, STATUS, TANGGAL & SUPPLIER -->
            <div class="flex items-start justify-between gap-3">
                <div class="flex items-start gap-3.5 min-w-0">
                    <div class="w-12 h-12 rounded-2xl flex items-center justify-center text-xl shrink-0 font-black shadow-xs transition-transform group-hover:scale-105" style="background: rgba(var(--color-primary-rgb), 0.12); color: var(--color-primary); border: 1px solid rgba(var(--color-primary-rgb), 0.25);">
                        <i class="fa-solid ${po.status === 'received' || po.status === 'completed' ? 'fa-boxes-stacked' : 'fa-cart-flatbed'}"></i>
                    </div>

                    <div class="min-w-0">
                        <div class="flex items-center gap-2 flex-wrap">
                            <h4 class="font-mono font-black text-sm sm:text-base text-slate-800 dark:text-white tracking-tight">${esc(po.poNumber || po.id)}</h4>
                            ${statusBadge}
                            ${paymentBadge}
                        </div>

                        <div class="flex items-center gap-2.5 text-xs text-slate-500 dark:text-slate-400 mt-1 flex-wrap">
                            <span class="font-bold text-slate-800 dark:text-slate-200 flex items-center gap-1">
                                <i class="fa-solid fa-truck-field" style="color:var(--color-primary)"></i> ${esc(po.supplierName || 'Supplier Rekanan')}
                            </span>
                            <span>•</span>
                            <span class="flex items-center gap-1">
                                <i class="fa-regular fa-calendar text-slate-400"></i> ${formatDate(po.date || po.createdAt)}
                            </span>
                            <span>•</span>
                            <span><i class="fa-solid fa-box text-slate-400 mr-1"></i>${itemsCount} Macam Barang</span>
                        </div>
                    </div>
                </div>
            </div>

            <!-- 2. KOTAK INFORMASI BARANG & FINANSIAL -->
            <div class="grid grid-cols-1 md:grid-cols-12 gap-3.5 p-3.5 sm:p-4 rounded-2xl bg-slate-50/70 dark:bg-slate-900/50 border border-slate-200/80 dark:border-slate-800">
                <!-- Rincian Singkat Barang (Col 7) -->
                <div class="md:col-span-7 space-y-1.5 min-w-0">
                    <span class="block text-[10px] font-black uppercase tracking-wider text-slate-400">Cuplikan Barang Dipesan:</span>
                    <div class="flex flex-wrap gap-1.5">
                        ${(po.items || []).slice(0, 4).map(it => `
                            <span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-xl text-xs font-bold bg-white dark:bg-slate-800 border border-slate-200/90 dark:border-slate-700/80 text-slate-700 dark:text-slate-200">
                                <span>${esc(it.name)}</span>
                                ${it.variantName ? `<span class="opacity-75 font-normal text-[10px]">[${esc(it.variantName)}]</span>` : ''}
                                <span class="px-1.5 py-0.2 rounded-md bg-slate-100 dark:bg-slate-700 text-[10px] font-black" style="color:var(--color-primary)">${formatQty(it.qty)} ${esc(it.unit || 'pcs')}</span>
                            </span>
                        `).join('')}
                        ${itemsCount > 4 ? `
                            <span class="inline-flex items-center px-2 py-1 rounded-xl text-xs font-bold text-slate-400 bg-slate-100 dark:bg-slate-800">
                                +${itemsCount - 4} barang lainnya
                            </span>
                        ` : ''}
                    </div>

                    ${po.notes ? `
                        <p class="text-xs text-slate-500 dark:text-slate-400 italic line-clamp-1 pt-1">
                            <i class="fa-regular fa-note-sticky mr-1 text-slate-400"></i>"${esc(po.notes)}"
                        </p>
                    ` : ''}
                </div>

                <!-- Total Tagihan & Sisa Tempo (Col 5) -->
                <div class="md:col-span-5 flex flex-col justify-center items-start md:items-end border-t md:border-t-0 pt-2.5 md:pt-0 border-slate-200/80 dark:border-slate-700/80">
                    <span class="text-[10px] font-black uppercase tracking-wider text-slate-400">Total Nilai Kulakan</span>
                    <span class="text-lg sm:text-xl font-black tracking-tight" style="color:var(--color-primary)">${fCur(total)}</span>
                    
                    ${po.paymentType === 'tempo' ? `
                        <div class="flex items-center gap-2 mt-1">
                            <span class="text-xs text-slate-400">Sisa Hutang:</span>
                            <span class="text-xs font-black ${unpaid > 0 ? 'text-amber-500' : 'text-emerald-500'}">
                                ${unpaid > 0 ? fCur(unpaid) : 'Lunas'}
                            </span>
                            ${po.tempoDueDate && unpaid > 0 ? `
                                <span class="text-[10px] px-2 py-0.5 rounded-lg bg-amber-50 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400 font-bold border border-amber-200 dark:border-amber-800">
                                    Tempo: ${formatDate(po.tempoDueDate)}
                                </span>
                            ` : ''}
                        </div>
                    ` : `
                        <span class="text-xs font-bold text-slate-500 dark:text-slate-400 mt-0.5">
                            Dibayar: <b class="text-emerald-600 dark:text-emerald-400">${fCur(paid)}</b>
                        </span>
                    `}
                </div>
            </div>

            <!-- 3. ACTION BAR ERGONOMIS: TOUCH-FRIENDLY & ANTI-SESAK -->
            <div class="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-1">
                <!-- Aksi Utama Berukuran Lega (Mobile First) -->
                <div class="flex items-center gap-2 flex-1">
                    ${po.status === 'ordered' ? `
                        <button 
                            type="button"
                            onclick="event.stopPropagation(); window.receiveAndRestockPO('${po.id}')" 
                            class="flex-1 sm:flex-initial h-11 px-5 rounded-2xl text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-sm active:scale-95 transition-all cursor-pointer"
                            style="background: var(--color-primary); box-shadow: 0 4px 12px rgba(var(--color-primary-rgb), 0.3);"
                            title="Barang Telah Tiba: Tambah Stok ke Gudang &amp; Etalase Otomatis"
                        >
                            <i class="fa-solid fa-boxes-stacked text-xs"></i>
                            <span>Terima Barang &amp; Restock</span>
                        </button>
                    ` : (po.paymentType === 'tempo' && unpaid > 0 ? `
                        <button 
                            type="button"
                            onclick="event.stopPropagation(); window.openPurchasePaymentModal('${po.id}')" 
                            class="flex-1 sm:flex-initial h-11 px-5 rounded-2xl bg-amber-500 hover:bg-amber-600 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-sm active:scale-95 transition-all cursor-pointer"
                            title="Catat Pembayaran Cicilan Hutang Tempo"
                        >
                            <i class="fa-solid fa-money-bill-wave text-xs"></i>
                            <span>Bayar Hutang Supplier</span>
                        </button>
                    ` : `
                        <button 
                            type="button"
                            onclick="window.openPurchaseDetailModal('${po.id}')" 
                            class="flex-1 sm:flex-initial h-11 px-5 rounded-2xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all active:scale-95 border cursor-pointer"
                            style="background: rgba(var(--color-primary-rgb), 0.1); color: var(--color-primary); border-color: rgba(var(--color-primary-rgb), 0.25);"
                        >
                            <i class="fa-solid fa-receipt text-xs"></i>
                            <span>Rincian Nota PO</span>
                        </button>
                    `)}

                    <button 
                        type="button"
                        onclick="window.openPurchaseDetailModal('${po.id}')" 
                        class="h-11 px-4 rounded-2xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-700/80 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 font-bold text-xs sm:text-sm flex items-center justify-center gap-1.5 transition-all active:scale-95 cursor-pointer ${po.status !== 'ordered' && !(po.paymentType === 'tempo' && unpaid > 0) ? 'hidden' : ''}"
                        title="Buka Rincian Nota &amp; Histori Pembayaran"
                    >
                        <span>Rincian</span>
                    </button>
                </div>

                <!-- Aksi Sekunder: Touch-Targets Lega 44px untuk Jempol HP -->
                <div class="${cleanPhone ? 'grid grid-cols-3' : 'grid grid-cols-2'} gap-2 w-full sm:w-auto sm:flex sm:items-center sm:gap-2 justify-end shrink-0">
                    ${cleanPhone ? `
                        <button 
                            type="button"
                            onclick="event.stopPropagation(); window.sendPOToSupplierWA('${po.id}')" 
                            class="h-11 px-3 rounded-2xl bg-emerald-50 hover:bg-emerald-500 hover:text-white dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800 flex items-center justify-center gap-1.5 transition-all active:scale-95 shadow-2xs cursor-pointer font-bold text-xs"
                            title="Kirim Surat Pesanan PO ke WhatsApp Sales"
                            aria-label="WhatsApp Sales"
                        >
                            <i class="fa-brands fa-whatsapp text-sm"></i>
                            <span class="sm:hidden">WA Sales</span>
                        </button>
                    ` : ''}

                    <button 
                        type="button"
                        onclick="event.stopPropagation(); window.printPurchaseOrder('${po.id}')" 
                        class="h-11 px-3 rounded-2xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-700/80 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 flex items-center justify-center gap-1.5 transition-all active:scale-95 shadow-2xs cursor-pointer font-bold text-xs"
                        title="Cetak Surat Pesanan (Print / PDF)"
                        aria-label="Cetak Surat Pesanan"
                    >
                        <i class="fa-solid fa-print text-sm"></i>
                        <span class="sm:hidden">Cetak</span>
                    </button>

                    <button 
                        type="button"
                        onclick="event.stopPropagation(); window.deletePurchaseOrder('${po.id}')" 
                        class="h-11 px-3 rounded-2xl bg-rose-50 hover:bg-rose-500 hover:text-white dark:bg-rose-950/40 text-rose-500 border border-rose-200 dark:border-rose-900 flex items-center justify-center gap-1.5 transition-all active:scale-95 shadow-2xs cursor-pointer font-bold text-xs"
                        title="Hapus Order PO"
                        aria-label="Hapus Order PO"
                    >
                        <i class="fa-solid fa-trash-can text-sm"></i>
                        <span class="sm:hidden">Hapus</span>
                    </button>
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
 * Menambahkan stok produk & varian toko secara otomatis saat status diubah ke 'received'
 * ══════════════════════════════════════════════════════════════════
 */
window.receiveAndRestockPO = (poId) => {
    const purchases = appData.purchases || [];
    const po = purchases.find(x => String(x.id) === String(poId));
    if (!po) return showToast('Data PO tidak ditemukan!');

    if (po.stockRestocked) {
        return showToast('Stok dari PO ini sudah pernah masuk ke gudang sebelumnya.');
    }

    const itemsSummary = (po.items || []).map(it => `• <b>${esc(it.name)}${it.variantName ? ` [${esc(it.variantName)}]` : ''}</b>: +${formatQty(it.qty)} ${esc(it.unit || 'pcs')} (Modal HPP: ${fCur(it.unitPrice)})`).join('<br>');

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

                        // 1. Restock spesifik varian jika item memiliki varian
                        if (item.variantName && Array.isArray(prod.variants) && prod.variants.length > 0) {
                            const v = prod.variants.find(x => x.name === item.variantName);
                            if (v) {
                                const curVStock = parseFloat(v.stock) || 0;
                                v.stock = parseFloat((curVStock + addedQty).toFixed(3));
                                if (newHpp > 0) v.hpp = newHpp;
                                if (v.isActive === false || v.isActive === 'false') v.isActive = true;
                            }
                        }

                        // 2. Tambah stok utama produk (desimal presisi)
                        const currentStock = parseFloat(prod.stock) || 0;
                        prod.stock = parseFloat((currentStock + addedQty).toFixed(3));

                        // 3. Perbarui HPP jika harga beli modal valid
                        if (newHpp > 0) {
                            prod.hpp = newHpp;
                        }

                        // 4. Jika produk sebelumnya non-aktif karena stok 0, aktifkan kembali
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
    ensurePurchaseModals();
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
    openModalAnim(modal, box);
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
        <!-- DRAG PULL INDICATOR (NATIVE MOBILE SHEET) -->
        <div class="pull-indicator"></div>

        <div class="p-5 sm:p-6 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between bg-white dark:bg-slate-900 shrink-0">
            <div class="flex items-center gap-3">
                <div class="w-10 h-10 rounded-2xl flex items-center justify-center text-lg shrink-0 shadow-xs" style="background: rgba(var(--color-primary-rgb), 0.12); color: var(--color-primary); border: 1px solid rgba(var(--color-primary-rgb), 0.25);">
                    <i class="fa-solid fa-cart-flatbed"></i>
                </div>
                <div>
                    <h3 class="font-black text-base sm:text-lg text-slate-800 dark:text-white tracking-tight">${isEdit ? 'Edit Order Pembelian (PO)' : 'Buat Order Pembelian Baru (Kulakan)'}</h3>
                    <p class="text-xs text-slate-400">Pilih supplier rekanan, tentukan daftar barang, harga modal HPP, dan termin pembayaran</p>
                </div>
            </div>
            <button onclick="window.closePOFormModal()" class="w-9 h-9 rounded-full bg-slate-100 hover:bg-rose-50 hover:text-rose-500 dark:bg-slate-800 dark:hover:bg-rose-950/40 text-slate-500 dark:text-slate-400 dark:hover:text-rose-400 flex items-center justify-center transition-all cursor-pointer active:scale-95">
                <i class="fa-solid fa-xmark text-sm"></i>
            </button>
        </div>

        <form id="po-editor-form" onsubmit="window.savePOForm(event, '${isEdit ? po.id : ''}')" class="flex-1 flex flex-col overflow-hidden">
            <div class="p-4 sm:p-6 space-y-4 sm:space-y-5 flex-1 overflow-y-auto hide-scrollbar">
            
            <!-- 1. IDENTITAS HEADER PO -->
            <div class="p-4 sm:p-5 rounded-2xl bg-slate-50/70 dark:bg-slate-900/50 border border-slate-200/80 dark:border-slate-800 space-y-3.5">
                <span class="block text-[10px] font-black uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    <i class="fa-solid fa-file-lines text-[var(--color-primary)] mr-1"></i> Data Utama Order Kulakan
                </span>

                <div class="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                    <div>
                        <label class="block text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1">Pilih Supplier Rekanan *</label>
                        <select id="pof-supplierId" required class="w-full text-xs font-bold text-slate-800 dark:text-slate-100 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-2.5 focus:border-[var(--color-primary)] focus:outline-none transition-all cursor-pointer" onchange="window.handlePOSupplierChange(this.value)">
                            ${suppliers.map(s => `
                                <option value="${s.id}" ${String(s.id) === String(po.supplierId) ? 'selected' : ''} class="font-bold">
                                    ${esc(s.name)}${s.code ? ` (${esc(s.code)})` : ''}
                                </option>
                            `).join('')}
                        </select>
                    </div>

                    <div>
                        <label class="block text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1">Nomor Purchase Order *</label>
                        <input type="text" id="pof-poNumber" required value="${esc(po.poNumber || '')}" placeholder="PO-202609-001" class="w-full text-xs font-mono font-bold text-slate-800 dark:text-slate-100 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-2.5 focus:border-[var(--color-primary)] focus:outline-none transition-all">
                    </div>

                    <div>
                        <label class="block text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1">Tanggal Order *</label>
                        <input type="date" id="pof-date" required value="${esc(po.date || new Date().toISOString().split('T')[0])}" class="w-full text-xs font-bold text-slate-800 dark:text-slate-100 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-2.5 focus:border-[var(--color-primary)] focus:outline-none transition-all">
                    </div>
                </div>
            </div>

            <!-- 2. PEMILIHAN TERMIN PEMBAYARAN (NATIVE SEGMENTED PILLS) -->
            <div class="p-4 sm:p-5 rounded-2xl bg-slate-50/70 dark:bg-slate-900/50 border border-slate-200/80 dark:border-slate-800 space-y-3.5">
                <div class="flex items-center justify-between">
                    <span class="block text-[10px] font-black uppercase tracking-wider text-slate-500 dark:text-slate-400">
                        <i class="fa-solid fa-wallet text-[var(--color-primary)] mr-1"></i> Termin &amp; Skema Pembayaran
                    </span>
                    <span class="text-[10px] font-bold text-slate-400" id="pof-payment-badge-desc">
                        ${po.paymentType === 'cash' ? 'Bayar Penuh Saat Kirim' : (po.paymentType === 'konsinyasi' ? 'Titip Jual Laku Bayar' : 'Hutang Usaha Bertempo')}
                    </span>
                </div>

                <!-- Hidden native input agar kompatibel dengan form submit -->
                <input type="hidden" id="pof-paymentType" value="${po.paymentType || 'tempo'}">

                <!-- Segmented Control Touch Pills -->
                <div class="flex items-center gap-2 p-1 bg-slate-200/60 dark:bg-slate-800/80 rounded-2xl">
                    <button 
                        type="button" 
                        id="pof-type-btn-cash" 
                        onclick="window.setPOPaymentType('cash')" 
                        class="pof-type-btn flex-1 py-2.5 px-3 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 transition-all active:scale-95 cursor-pointer ${po.paymentType === 'cash' ? 'text-white shadow-sm' : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'}"
                        style="${po.paymentType === 'cash' ? 'background: var(--color-primary); box-shadow: 0 2px 8px rgba(var(--color-primary-rgb), 0.3);' : ''}"
                    >
                        <i class="fa-solid fa-money-bill-wave text-xs"></i>
                        <span>Tunai / Cash</span>
                    </button>

                    <button 
                        type="button" 
                        id="pof-type-btn-tempo" 
                        onclick="window.setPOPaymentType('tempo')" 
                        class="pof-type-btn flex-1 py-2.5 px-3 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 transition-all active:scale-95 cursor-pointer ${(!po.paymentType || po.paymentType === 'tempo') ? 'text-white shadow-sm' : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'}"
                        style="${(!po.paymentType || po.paymentType === 'tempo') ? 'background: var(--color-primary); box-shadow: 0 2px 8px rgba(var(--color-primary-rgb), 0.3);' : ''}"
                    >
                        <i class="fa-solid fa-clock text-xs"></i>
                        <span>Tempo (Hutang)</span>
                    </button>

                    <button 
                        type="button" 
                        id="pof-type-btn-konsinyasi" 
                        onclick="window.setPOPaymentType('konsinyasi')" 
                        class="pof-type-btn flex-1 py-2.5 px-3 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 transition-all active:scale-95 cursor-pointer ${po.paymentType === 'konsinyasi' ? 'text-white shadow-sm' : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'}"
                        style="${po.paymentType === 'konsinyasi' ? 'background: var(--color-primary); box-shadow: 0 2px 8px rgba(var(--color-primary-rgb), 0.3);' : ''}"
                    >
                        <i class="fa-solid fa-handshake text-xs"></i>
                        <span>Konsinyasi</span>
                    </button>
                </div>

                <!-- Opsi Tambahan untuk Tempo -->
                <div id="pof-tempo-options-box" class="${(!po.paymentType || po.paymentType === 'tempo') ? 'space-y-3 pt-1' : 'hidden'}">
                    <div class="flex items-center gap-1.5 flex-wrap">
                        <span class="text-[9px] font-black uppercase text-slate-400 mr-1">Preset Durasi:</span>
                        ${[7, 14, 30, 45, 60].map(d => `
                            <button 
                                type="button" 
                                id="pof-tempo-chip-${d}" 
                                onclick="window.setPOTempoPresetDays(${d})" 
                                class="px-2.5 py-1 rounded-lg text-[11px] font-bold border transition-all active:scale-95 cursor-pointer ${(po.tempoDays || 14) === d ? 'text-white border-transparent' : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700'}"
                                style="${(po.tempoDays || 14) === d ? 'background: var(--color-primary);' : ''}"
                            >
                                ${d} Hari
                            </button>
                        `).join('')}
                    </div>

                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div>
                            <label class="block text-[9px] font-bold uppercase text-slate-400 mb-1">Durasi Kustom (Hari)</label>
                            <input 
                                type="number" 
                                id="pof-tempoDays" 
                                min="1" 
                                max="365" 
                                value="${po.tempoDays || 14}" 
                                placeholder="14" 
                                class="w-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2 text-xs font-bold focus:border-[var(--color-primary)] focus:outline-none" 
                                oninput="window.recalcPOTempoDueDate()"
                            >
                        </div>

                        <div>
                            <label class="block text-[9px] font-bold uppercase text-slate-400 mb-1">Estimasi Tanggal Jatuh Tempo</label>
                            <div class="relative">
                                <i class="fa-regular fa-calendar-check absolute left-3 top-1/2 -translate-y-1/2 text-sm" style="color:var(--color-primary)"></i>
                                <input 
                                    type="text" 
                                    id="pof-tempoDueDate" 
                                    readonly 
                                    class="w-full bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-xl pl-9 pr-3 py-2 text-xs font-bold text-slate-700 dark:text-slate-200"
                                >
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- 3. ITEM BUILDER (DAFTAR BARANG YANG DIPESAN) -->
            <div class="space-y-3">
                <div class="flex items-center justify-between">
                    <div>
                        <h4 class="font-black text-xs uppercase tracking-wider text-slate-700 dark:text-slate-200 flex items-center gap-1.5">
                            <i class="fa-solid fa-boxes-stacked text-[var(--color-primary)]"></i>
                            <span>Daftar Barang yang Dipesan</span>
                        </h4>
                        <p class="text-[10px] text-slate-400">Pilih dari katalog produk atau masukkan kuantitas dan harga beli modal baru</p>
                    </div>
                    <button 
                        type="button" 
                        onclick="window.openPOProductPicker(null)" 
                        class="px-3.5 py-1.5 rounded-xl text-white font-bold text-xs flex items-center gap-1.5 shadow-2xs active:scale-95 transition-all cursor-pointer"
                        style="background: var(--color-primary); box-shadow: 0 2px 8px rgba(var(--color-primary-rgb), 0.25);"
                    >
                        <i class="fa-solid fa-cart-plus text-xs"></i>
                        <span>+ Tambah Barang</span>
                    </button>
                </div>

                <div id="po-items-table-container">
                    <!-- Item PO di-render oleh renderPOItemsTable() dalam format Native App Cards -->
                </div>
            </div>

            <!-- 4. RINGKASAN BIAYA & CATATAN PENGIRIMAN -->
            <div class="p-4 sm:p-5 rounded-2xl bg-slate-50/70 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800 space-y-4">
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                        <label class="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                            <i class="fa-solid fa-note-sticky text-[var(--color-primary)] mr-1"></i> Catatan Tambahan / Nomor Surat Jalan
                        </label>
                        <textarea 
                            id="pof-notes" 
                            rows="4" 
                            placeholder="Catatan pengiriman, armada truk, nomor invoice supplier..." 
                            class="w-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-3 text-xs resize-none focus:border-[var(--color-primary)] focus:outline-none"
                        >${esc(po.notes || '')}</textarea>
                    </div>

                    <div class="space-y-2.5 text-xs bg-white dark:bg-slate-800/80 p-4 rounded-xl border border-slate-200/80 dark:border-slate-700">
                        <div class="flex items-center justify-between">
                            <span class="text-slate-500 font-medium">Subtotal Barang:</span>
                            <span class="font-bold text-slate-800 dark:text-white" id="pof-calc-subtotal">Rp 0</span>
                        </div>

                        <div class="flex items-center justify-between gap-3">
                            <span class="text-slate-500 font-medium">Diskon Potongan Nota:</span>
                            <div class="relative w-36">
                                <span class="absolute left-2.5 top-1/2 -translate-y-1/2 text-[10px] font-bold text-slate-400">Rp</span>
                                <input 
                                    type="number" 
                                    id="pof-discount" 
                                    min="0" 
                                    value="${po.discount || 0}" 
                                    placeholder="0" 
                                    class="w-full pl-8 pr-2.5 py-1.5 text-xs font-bold text-right bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg focus:border-[var(--color-primary)] focus:outline-none" 
                                    oninput="window.recalcPOTotals()"
                                >
                            </div>
                        </div>

                        <div class="flex items-center justify-between gap-3">
                            <span class="text-slate-500 font-medium">Ongkos Kirim / Ekspedisi:</span>
                            <div class="relative w-36">
                                <span class="absolute left-2.5 top-1/2 -translate-y-1/2 text-[10px] font-bold text-slate-400">Rp</span>
                                <input 
                                    type="number" 
                                    id="pof-shippingFee" 
                                    min="0" 
                                    value="${po.shippingFee || 0}" 
                                    placeholder="0" 
                                    class="w-full pl-8 pr-2.5 py-1.5 text-xs font-bold text-right bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg focus:border-[var(--color-primary)] focus:outline-none" 
                                    oninput="window.recalcPOTotals()"
                                >
                            </div>
                        </div>

                        <div class="pt-2 border-t border-slate-200 dark:border-slate-700 flex items-center justify-between text-sm sm:text-base font-black">
                            <span class="text-slate-800 dark:text-white">Total Tagihan PO:</span>
                            <span class="text-lg font-black" style="color:var(--color-primary)" id="pof-calc-grandtotal">Rp 0</span>
                        </div>

                        <div class="flex items-center justify-between gap-3 pt-1">
                            <span class="text-slate-500 font-bold" id="pof-dp-label">Pembayaran Awal / DP:</span>
                            <div class="relative w-36">
                                <span class="absolute left-2.5 top-1/2 -translate-y-1/2 text-[10px] font-bold text-emerald-500">Rp</span>
                                <input 
                                    type="number" 
                                    id="pof-amountPaid" 
                                    min="0" 
                                    value="${po.amountPaid || 0}" 
                                    placeholder="0" 
                                    class="w-full pl-8 pr-2.5 py-1.5 text-xs font-black text-right bg-emerald-50/60 dark:bg-emerald-950/30 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800 rounded-lg focus:border-emerald-500 focus:outline-none" 
                                    oninput="window.recalcPOTotals()"
                                >
                            </div>
                        </div>

                        <div class="flex items-center justify-between text-xs font-bold pt-1.5 border-t border-dashed border-slate-200 dark:border-slate-700">
                            <span class="text-amber-500">Sisa Hutang Tempo:</span>
                            <span class="text-amber-600 dark:text-amber-400 font-black text-sm" id="pof-calc-balance">Rp 0</span>
                        </div>
                    </div>
                </div>
            </div>

            </div>

            <!-- TOMBOL SIMPAN STICKY FOOTER (NATIVE MOBILE TOUCH ACTION) -->
            <div class="p-4 sm:p-5 border-t border-slate-100 dark:border-slate-800 flex items-center justify-end gap-3 bg-white/95 dark:bg-slate-900/95 sticky bottom-0 z-20 shrink-0 backdrop-blur-md" style="padding-bottom: max(1rem, env(safe-area-inset-bottom))">
                <button 
                    type="button" 
                    onclick="window.closePOFormModal()" 
                    class="flex-1 sm:flex-initial h-12 px-6 rounded-2xl border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 font-bold text-xs sm:text-sm hover:bg-slate-100 dark:hover:bg-slate-800 transition-all active:scale-95 cursor-pointer flex items-center justify-center"
                >
                    Batal
                </button>
                <button 
                    type="submit" 
                    class="flex-1 sm:flex-initial h-12 px-8 rounded-2xl text-white font-bold text-xs sm:text-sm shadow-md transition-all active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
                    style="background: var(--color-primary); box-shadow: 0 4px 14px rgba(var(--color-primary-rgb), 0.35);"
                >
                    <i class="fa-solid fa-floppy-disk text-sm"></i>
                    <span>Simpan Order PO</span>
                </button>
            </div>
        </form>
    `);

    // Render daftar barang PO (jika kosong akan tampil state panduan ambil barang)
    renderPOItemsTable();

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
    closeModalAnim(modal, box);
};

/**
 * Switch & Set Tipe Pembayaran (Cash / Tempo / Konsinyasi) via Segmented Control
 */
window.setPOPaymentType = (val) => {
    const input = el('pof-paymentType');
    if (input) input.value = val;

    ['cash', 'tempo', 'konsinyasi'].forEach(type => {
        const btn = el(`pof-type-btn-${type}`);
        if (!btn) return;
        if (type === val) {
            btn.className = 'pof-type-btn flex-1 py-2.5 px-3 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 transition-all active:scale-95 cursor-pointer text-white shadow-sm';
            btn.style.background = 'var(--color-primary)';
            btn.style.boxShadow = '0 2px 8px rgba(var(--color-primary-rgb), 0.3)';
        } else {
            btn.className = 'pof-type-btn flex-1 py-2.5 px-3 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 transition-all active:scale-95 cursor-pointer text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white';
            btn.style.background = '';
            btn.style.boxShadow = '';
        }
    });

    const tempoBox = el('pof-tempo-options-box');
    const badgeDesc = el('pof-payment-badge-desc');
    if (tempoBox) {
        if (val === 'tempo') tempoBox.classList.remove('hidden');
        else tempoBox.classList.add('hidden');
    }
    if (badgeDesc) {
        badgeDesc.textContent = val === 'cash' ? 'Bayar Penuh Saat Kirim' : (val === 'konsinyasi' ? 'Titip Jual Laku Bayar' : 'Hutang Usaha Bertempo');
    }

    window.handlePOPaymentTypeChange(val);
};

/**
 * Set Durasi Tempo Cepat dari Preset Chips
 */
window.setPOTempoPresetDays = (days) => {
    const input = el('pof-tempoDays');
    if (input) {
        input.value = days;
        window.recalcPOTempoDueDate();
    }
    [7, 14, 30, 45, 60].forEach(d => {
        const chip = el(`pof-tempo-chip-${d}`);
        if (!chip) return;
        if (d === days) {
            chip.style.background = 'var(--color-primary)';
            chip.style.color = '#fff';
            chip.style.borderColor = 'transparent';
        } else {
            chip.style.background = '';
            chip.style.color = '';
            chip.style.borderColor = '';
        }
    });
};

/**
 * Buka Native Product Picker Modal untuk Form PO
 * @param {number|null} targetRowIndex - jika null: tambah item baru, jika angka: ganti produk pada baris tersebut
 */
window.openPOProductPicker = (targetRowIndex = null) => {
    ensurePurchaseModals();
    poPickerTargetRow = targetRowIndex;
    poPickerSearch = '';
    
    // Cek apakah ada supplier terpilih di form PO & produk milik supplier tersebut
    const currentSupplierId = el('pof-supplierId')?.value || '';
    const products = appData.products || [];
    const hasSupplierProducts = products.some(p => String(p.supplierId) === String(currentSupplierId));
    poPickerFilterSupplier = !!(currentSupplierId && hasSupplierProducts);
    poPickerCategory = 'all';

    renderPOProductPickerContent();

    const modal = el('modal-po-product-picker');
    const box = el('modal-po-product-picker-box');
    if (!modal) return;
    openModalAnim(modal, box);

    // Auto-focus input pencarian
    setTimeout(() => {
        const searchInput = el('po-picker-search-input');
        if (searchInput) searchInput.focus();
    }, 250);
};

/**
 * Tutup Native Product Picker Modal
 */
window.closePOProductPicker = () => {
    const modal = el('modal-po-product-picker');
    const box = el('modal-po-product-picker-box');
    if (!modal) return;
    closeModalAnim(modal, box);
};

/**
 * Handler pencarian teks pada Product Picker
 */
window.handlePOPickerSearch = (val) => {
    poPickerSearch = val || '';
    renderPOProductPickerContent();
};

/**
 * Filter Supplier / Semua Katalog pada Product Picker
 */
window.setPOPickerSupplierFilter = (val) => {
    poPickerFilterSupplier = !!val;
    renderPOProductPickerContent();
};

/**
 * Filter Kategori pada Product Picker
 */
window.setPOPickerCategory = (cat) => {
    poPickerCategory = cat || 'all';
    renderPOProductPickerContent();
};

/**
 * Pilih Produk & Varian dari Picker ke dalam PO
 */
window.selectProductForPO = (productId, variantIndex = null) => {
    const products = appData.products || [];
    const prod = products.find(p => String(p.id) === String(productId));
    if (!prod) return;

    let selectedVariant = null;
    if (variantIndex !== null && Array.isArray(prod.variants) && prod.variants[variantIndex]) {
        selectedVariant = prod.variants[variantIndex];
    } else if (Array.isArray(prod.variants) && prod.variants.length > 0) {
        selectedVariant = prod.variants[0];
    }

    const unitPrice = selectedVariant 
        ? (parseFloat(selectedVariant.hpp) || parseFloat(selectedVariant.price) || 0)
        : (parseFloat(prod.hpp) || parseFloat(prod.price) || 0);

    const itemObj = {
        productId: prod.id,
        name: prod.name,
        sku: selectedVariant?.sku || prod.sku || '',
        variantName: selectedVariant ? selectedVariant.name : '',
        variantKey: selectedVariant ? selectedVariant.name : '',
        variantSku: selectedVariant ? (selectedVariant.sku || '') : '',
        qty: 1,
        unit: selectedVariant?.unit || prod.unit || 'Pcs',
        unitPrice: unitPrice,
        subtotal: unitPrice
    };

    if (poPickerTargetRow !== null && tempPOItems[poPickerTargetRow]) {
        tempPOItems[poPickerTargetRow] = itemObj;
        showToast(`Barang diubah: ${prod.name}${itemObj.variantName ? ` (${itemObj.variantName})` : ''} ✨`);
    } else {
        tempPOItems.push(itemObj);
        showToast(`Ditambahkan: ${prod.name}${itemObj.variantName ? ` (${itemObj.variantName})` : ''} 🛒`);
    }

    renderPOItemsTable();
    window.recalcPOTotals();
    window.closePOProductPicker();
};

/**
 * Tambahkan Seluruh Varian Produk ke PO Sekaligus (Batch Add All Variants)
 */
window.addAllVariantsForPO = (productId) => {
    const products = appData.products || [];
    const prod = products.find(p => String(p.id) === String(productId));
    if (!prod || !Array.isArray(prod.variants) || prod.variants.length === 0) return;

    let addedCount = 0;
    prod.variants.forEach(v => {
        const unitPrice = parseFloat(v.hpp) || parseFloat(v.price) || 0;
        const itemObj = {
            productId: prod.id,
            name: prod.name,
            sku: v.sku || prod.sku || '',
            variantName: v.name || '',
            variantKey: v.name || '',
            variantSku: v.sku || '',
            qty: 1,
            unit: v.unit || prod.unit || 'Pcs',
            unitPrice: unitPrice,
            subtotal: unitPrice
        };
        tempPOItems.push(itemObj);
        addedCount++;
    });

    renderPOItemsTable();
    window.recalcPOTotals();
    window.closePOProductPicker();
    showToast(`${addedCount} varian ${prod.name} berhasil ditambahkan ke PO! 📦✨`);
};

/**
 * Tambah Item Manual (Barang Baru di Luar Katalog)
 */
window.addManualPOItemRow = () => {
    tempPOItems.push({
        productId: '',
        name: 'Barang Kulakan Manual',
        sku: '',
        variantName: '',
        variantKey: '',
        variantSku: '',
        qty: 1,
        unit: 'Pcs',
        unitPrice: 0,
        subtotal: 0
    });
    renderPOItemsTable();
    window.recalcPOTotals();
    showToast('Item manual ditambahkan. Silakan ketik nama dan harga modal.');
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
 * Ganti Pilihan Varian pada Kartu Item PO
 */
window.selectPOItemVariant = (itemIndex, variantIndex) => {
    const item = tempPOItems[itemIndex];
    if (!item) return;
    const products = appData.products || [];
    const prod = products.find(p => String(p.id) === String(item.productId));
    if (!prod || !Array.isArray(prod.variants) || !prod.variants[variantIndex]) return;

    const v = prod.variants[variantIndex];
    item.variantName = v.name || '';
    item.variantKey = v.name || '';
    item.variantSku = v.sku || '';
    if (v.unit) item.unit = v.unit;
    const vHpp = parseFloat(v.hpp) || parseFloat(v.price) || 0;
    if (vHpp > 0 || !item.unitPrice) {
        item.unitPrice = vHpp;
    }
    item.subtotal = Math.round((parseFloat(item.qty) || 0) * (parseFloat(item.unitPrice) || 0));

    renderPOItemsTable();
    window.recalcPOTotals();
};

/**
 * Stepper Kuantitas Item PO (+ / -) dengan Dukungan Desimal
 */
window.stepPOItemQty = (index, delta) => {
    if (!tempPOItems[index]) return;
    const current = parseFloat(tempPOItems[index].qty) || 0;
    let next;
    if (current <= 1 && delta < 0) {
        next = Math.max(0.1, parseFloat((current - 0.1).toFixed(3)));
    } else {
        next = Math.max(0.1, parseFloat((current + delta).toFixed(3)));
    }
    tempPOItems[index].qty = next;
    tempPOItems[index].subtotal = Math.round(next * (parseFloat(tempPOItems[index].unitPrice) || 0));
    renderPOItemsTable();
    window.recalcPOTotals();
};

/**
 * Update Field Angka / Teks pada Baris Item PO (Dukung Koma & Titik Desimal)
 */
window.updatePOItemField = (index, field, value) => {
    if (!tempPOItems[index]) return;
    if (field === 'qty') {
        const cleanVal = typeof value === 'string' ? value.replace(',', '.') : value;
        const parsed = parseFloat(cleanVal) || 0;
        tempPOItems[index].qty = cleanVal;
        tempPOItems[index].subtotal = Math.round(parsed * (parseFloat(tempPOItems[index].unitPrice) || 0));
        const subCard = el(`po-item-subtotal-card-${index}`);
        if (subCard) subCard.textContent = fCur(tempPOItems[index].subtotal);
    } else if (field === 'unitPrice') {
        const cleanVal = typeof value === 'string' ? value.replace(',', '.') : value;
        const parsed = parseFloat(cleanVal) || 0;
        tempPOItems[index].unitPrice = parsed;
        const qtyNum = parseFloat(tempPOItems[index].qty) || 0;
        tempPOItems[index].subtotal = Math.round(qtyNum * parsed);
        const subCard = el(`po-item-subtotal-card-${index}`);
        if (subCard) subCard.textContent = fCur(tempPOItems[index].subtotal);
    } else {
        tempPOItems[index][field] = value;
    }
    window.recalcPOTotals();
};

/**
 * Render Tabel Builder Item Form PO dalam format Native App Cards Modern
 */
const renderPOItemsTable = () => {
    const container = el('po-items-table-container');
    if (!container) return;

    const products = appData.products || [];
    const currentSupplierId = el('pof-supplierId')?.value || '';

    if (tempPOItems.length === 0) {
        setH('po-items-table-container', `
            <div class="p-8 text-center flex flex-col items-center justify-center text-slate-400 bg-slate-50/70 dark:bg-slate-900/40 rounded-3xl border-2 border-dashed border-slate-200 dark:border-slate-800 space-y-3">
                <div class="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl shadow-sm" style="background: rgba(var(--color-primary-rgb), 0.12); color: var(--color-primary);">
                    <i class="fa-solid fa-boxes-packing"></i>
                </div>
                <div>
                    <p class="font-black text-sm sm:text-base text-slate-700 dark:text-slate-200">Belum Ada Barang yang Dipesan</p>
                    <p class="text-xs text-slate-400 mt-0.5 max-w-sm">Ambil data barang langsung dari katalog toko dengan antarmuka cepat &amp; modern.</p>
                </div>
                <div class="flex items-center gap-2 pt-1 flex-wrap justify-center">
                    <button type="button" onclick="window.openPOProductPicker(null)" class="px-5 py-2.5 rounded-2xl text-white font-bold text-xs sm:text-sm flex items-center gap-2 shadow-md active:scale-95 transition-all cursor-pointer" style="background: var(--color-primary); box-shadow: 0 4px 12px rgba(var(--color-primary-rgb), 0.3);">
                        <i class="fa-solid fa-cart-plus"></i>
                        <span>+ Ambil Barang dari Katalog Toko</span>
                    </button>
                    <button type="button" onclick="window.addManualPOItemRow()" class="px-4 py-2.5 rounded-2xl border border-slate-200 dark:border-slate-700 font-bold text-xs text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all cursor-pointer">
                        Input Manual
                    </button>
                </div>
            </div>
        `);
        return;
    }

    setH('po-items-table-container', `
        <div class="space-y-3.5">
            ${tempPOItems.map((item, idx) => {
                const itemQtyNum = parseFloat(item.qty) || 0;
                const itemPriceNum = parseFloat(item.unitPrice) || 0;
                const itemSubtotal = Math.round(itemQtyNum * itemPriceNum);
                const selectedProd = products.find(p => String(p.id) === String(item.productId));
                const coverThumb = selectedProd 
                    ? (selectedProd.img 
                        ? `<img src="${esc(selectedProd.img)}" alt="${esc(item.name)}" class="w-full h-full object-cover" onerror="this.onerror=null; this.style.display='none'; this.nextElementSibling.style.display='flex';"><div class="w-full h-full" style="display:none">${renderProductCoverHtml(selectedProd, { size: 'thumb' })}</div>`
                        : renderProductCoverHtml(selectedProd, { size: 'thumb' }))
                    : `<div class="w-full h-full flex items-center justify-center font-black text-xs text-slate-400">#${idx + 1}</div>`;
                
                const isFromThisSupplier = selectedProd && String(selectedProd.supplierId) === String(currentSupplierId);
                const curStock = selectedProd ? (parseFloat(selectedProd.stock) || 0) : null;
                const hasVariants = selectedProd && Array.isArray(selectedProd.variants) && selectedProd.variants.length > 0;

                return `
                    <div class="p-4 sm:p-5 rounded-3xl bg-white dark:bg-slate-800/95 border border-slate-200/90 dark:border-slate-700/80 shadow-xs space-y-4 transition-all hover:border-[var(--color-primary)]/50 hover:shadow-md relative group">
                        <!-- Baris 1: Nomor Urut, Thumbnail, Info Produk, Tombol Ganti Produk & Hapus -->
                        <div class="flex items-start justify-between gap-3">
                            <div class="flex items-start gap-3.5 min-w-0 flex-1">
                                <div class="w-13 h-13 sm:w-14 sm:h-14 rounded-2xl overflow-hidden shrink-0 border border-slate-200/90 dark:border-slate-700 flex items-center justify-center bg-slate-50 dark:bg-slate-900 shadow-2xs mt-0.5">
                                    ${coverThumb}
                                </div>

                                <div class="min-w-0 flex-1">
                                    <div class="flex items-center gap-2 flex-wrap">
                                        <span class="w-6 h-6 rounded-lg text-[10px] font-black flex items-center justify-center shrink-0" style="background: rgba(var(--color-primary-rgb), 0.12); color: var(--color-primary);">#${idx + 1}</span>
                                        
                                        ${selectedProd ? `
                                            <h5 class="font-black text-sm sm:text-base text-slate-800 dark:text-slate-100 tracking-tight">${esc(item.name)}</h5>
                                        ` : `
                                            <input 
                                                type="text" 
                                                value="${esc(item.name)}" 
                                                placeholder="Nama barang kulakan manual..."
                                                class="font-black text-sm text-slate-800 dark:text-slate-100 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-1.5 focus:border-[var(--color-primary)] focus:outline-none flex-1"
                                                oninput="window.updatePOItemField(${idx}, 'name', this.value)"
                                            >
                                        `}

                                        ${isFromThisSupplier ? `
                                            <span class="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-amber-50 text-amber-600 dark:bg-amber-950/40 dark:text-amber-400 border border-amber-200 dark:border-amber-800 shrink-0">
                                                <i class="fa-solid fa-star text-[9px] mr-1"></i>Supplier Terpilih
                                            </span>
                                        ` : ''}

                                        ${item.variantName ? `
                                            <span class="px-3 py-0.5 rounded-full text-[11px] font-black text-white shrink-0" style="background: var(--color-primary); box-shadow: 0 2px 6px rgba(var(--color-primary-rgb), 0.25);">
                                                Varian: ${esc(item.variantName)}
                                            </span>
                                        ` : ''}
                                    </div>

                                    <div class="flex items-center gap-2.5 text-xs text-slate-400 mt-1 flex-wrap">
                                        ${item.sku ? `<span>SKU: <b class="font-mono text-slate-600 dark:text-slate-300">${esc(item.sku)}</b></span> •` : ''}
                                        ${curStock !== null ? `<span>Stok Toko: <b class="${curStock > 0 ? 'text-emerald-600 dark:text-emerald-400' : 'text-rose-500'}">${formatQty(curStock)} ${esc(item.unit || 'Pcs')}</b></span>` : ''}
                                        ${selectedProd?.category ? `• <span class="text-slate-500 dark:text-slate-400 font-medium">${esc(selectedProd.category)}</span>` : ''}
                                    </div>
                                </div>
                            </div>

                            <div class="flex items-center gap-1.5 shrink-0">
                                <button 
                                    type="button" 
                                    onclick="window.openPOProductPicker(${idx})" 
                                    class="h-11 px-3 sm:px-3.5 rounded-2xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-700/80 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs font-bold flex items-center gap-1.5 transition-all active:scale-95 cursor-pointer shadow-2xs" 
                                    title="Ganti Produk dari Katalog"
                                >
                                    <i class="fa-solid fa-arrows-rotate text-xs"></i>
                                    <span class="hidden sm:inline">Ganti</span>
                                </button>
                                <button 
                                    type="button" 
                                    onclick="window.removePOItemRow(${idx})" 
                                    class="w-11 h-11 rounded-2xl text-rose-500 bg-rose-50 hover:bg-rose-500 hover:text-white dark:bg-rose-950/40 dark:hover:bg-rose-600 transition-all flex items-center justify-center shrink-0 active:scale-90 cursor-pointer shadow-2xs" 
                                    title="Hapus Baris Ini"
                                    aria-label="Hapus Baris"
                                >
                                    <i class="fa-solid fa-trash-can text-sm"></i>
                                </button>
                            </div>
                        </div>

                        <!-- Baris 2: Pemilihan Varian (Interactive Chips) -->
                        ${hasVariants ? `
                            <div class="p-3.5 rounded-2xl bg-slate-50/80 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-700/60 space-y-2.5">
                                <div class="flex items-center justify-between">
                                    <span class="text-[11px] font-black uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                                        <i class="fa-solid fa-layer-group text-[var(--color-primary)]"></i> Pilih Varian Kulakan:
                                    </span>
                                    <span class="text-[11px] font-bold text-slate-400">${selectedProd.variants.length} Varian Tersedia</span>
                                </div>

                                <div class="flex items-center gap-2 flex-wrap">
                                    ${selectedProd.variants.map((v, vIdx) => {
                                        const isVarSelected = (item.variantName && item.variantName === v.name) || (!item.variantName && vIdx === 0);
                                        return `
                                            <button 
                                                type="button" 
                                                onclick="window.selectPOItemVariant(${idx}, ${vIdx})" 
                                                class="px-3.5 py-2 rounded-xl text-xs font-bold border transition-all active:scale-95 cursor-pointer flex items-center gap-1.5 ${isVarSelected ? 'text-white border-transparent shadow-sm' : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:border-[var(--color-primary)]/50'}"
                                                style="${isVarSelected ? 'background: var(--color-primary); box-shadow: 0 2px 8px rgba(var(--color-primary-rgb), 0.3);' : ''}"
                                            >
                                                ${isVarSelected ? '<i class="fa-solid fa-circle-check text-xs"></i>' : ''}
                                                <span>${esc(v.name)}</span>
                                                <span class="text-[11px] opacity-85 font-normal">(${v.hpp ? fCur(v.hpp) : fCur(v.price || 0)})</span>
                                            </button>
                                        `;
                                    }).join('')}
                                </div>
                            </div>
                        ` : ''}

                        <!-- Baris 3: Dual-Row Controls (Kuantitas & Satuan Lega di Baris 1, Modal & Subtotal di Baris 2) -->
                        <div class="grid grid-cols-1 md:grid-cols-12 gap-3.5 pt-1">
                            <!-- Sisi Kiri: Stepper Kuantitas 44px & Satuan (Col 6) -->
                            <div class="md:col-span-6 grid grid-cols-12 gap-2.5 items-end">
                                <div class="col-span-8">
                                    <label class="block text-[10px] font-black uppercase tracking-wider text-slate-400 mb-1">
                                        Kuantitas (Dukung Desimal) *
                                    </label>
                                    <div class="flex items-center bg-slate-100 dark:bg-slate-700/80 rounded-2xl p-1 border border-slate-200 dark:border-slate-600 focus-within:border-[var(--color-primary)]">
                                        <button 
                                            type="button" 
                                            onclick="window.stepPOItemQty(${idx}, -1)" 
                                            class="w-11 h-11 rounded-xl text-slate-600 dark:text-slate-200 hover:bg-white dark:hover:bg-slate-600 font-black text-lg flex items-center justify-center active:scale-90 transition-all cursor-pointer shrink-0"
                                            aria-label="Kurangi"
                                        >
                                            −
                                        </button>
                                        <input 
                                            type="number" 
                                            min="0.001" 
                                            step="any" 
                                            value="${item.qty}" 
                                            class="w-full text-center text-sm font-black bg-transparent text-slate-800 dark:text-slate-100 focus:outline-none px-2" 
                                            oninput="window.updatePOItemField(${idx}, 'qty', this.value)"
                                            placeholder="1"
                                        >
                                        <button 
                                            type="button" 
                                            onclick="window.stepPOItemQty(${idx}, 1)" 
                                            class="w-11 h-11 rounded-xl text-slate-600 dark:text-slate-200 hover:bg-white dark:hover:bg-slate-600 font-black text-lg flex items-center justify-center active:scale-90 transition-all cursor-pointer shrink-0"
                                            aria-label="Tambah"
                                        >
                                            +
                                        </button>
                                    </div>
                                </div>

                                <div class="col-span-4">
                                    <label class="block text-[10px] font-black uppercase tracking-wider text-slate-400 mb-1">
                                        Satuan
                                    </label>
                                    <input 
                                        type="text" 
                                        value="${esc(item.unit || 'Pcs')}" 
                                        placeholder="Pcs" 
                                        class="w-full text-center text-xs font-bold bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl h-13 px-2 focus:border-[var(--color-primary)] focus:outline-none" 
                                        oninput="window.updatePOItemField(${idx}, 'unit', this.value)"
                                    >
                                </div>
                            </div>

                            <!-- Sisi Kanan: Harga Modal HPP & Strip Subtotal (Col 6) -->
                            <div class="md:col-span-6 grid grid-cols-12 gap-2.5 items-end">
                                <div class="col-span-7">
                                    <label class="block text-[10px] font-black uppercase tracking-wider text-slate-400 mb-1">
                                        Harga Modal HPP (Rp) *
                                    </label>
                                    <div class="relative">
                                        <span class="absolute left-3.5 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400">Rp</span>
                                        <input 
                                            type="number" 
                                            min="0" 
                                            step="any" 
                                            value="${item.unitPrice}" 
                                            class="w-full pl-9 pr-3 h-13 text-xs sm:text-sm font-bold text-right bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl focus:border-[var(--color-primary)] focus:outline-none" 
                                            oninput="window.updatePOItemField(${idx}, 'unitPrice', this.value)"
                                        >
                                    </div>
                                </div>

                                <div class="col-span-5">
                                    <label class="block text-[10px] font-black uppercase tracking-wider text-slate-400 mb-1 text-right">
                                        Subtotal
                                    </label>
                                    <div class="h-13 px-3 rounded-2xl flex flex-col justify-center items-end border" style="background: rgba(var(--color-primary-rgb), 0.06); border-color: rgba(var(--color-primary-rgb), 0.2);">
                                        <span class="font-black text-xs sm:text-sm tracking-tight" style="color:var(--color-primary)" id="po-item-subtotal-card-${idx}">
                                            ${fCur(itemSubtotal)}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
            }).join('')}
        </div>

        <!-- Tombol Aksi Tambah Barang di Bagian Bawah -->
        <div class="grid grid-cols-1 sm:grid-cols-4 gap-2.5 mt-3">
            <button 
                type="button" 
                onclick="window.openPOProductPicker(null)" 
                class="sm:col-span-3 py-3.5 px-4 rounded-2xl border-2 border-dashed border-[rgba(var(--color-primary-rgb),0.4)] bg-[rgba(var(--color-primary-rgb),0.05)] hover:bg-[rgba(var(--color-primary-rgb),0.1)] text-[var(--color-primary)] font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all active:scale-[0.98] cursor-pointer shadow-2xs"
            >
                <i class="fa-solid fa-cart-plus text-base"></i>
                <span>+ Ambil Barang dari Katalog Toko</span>
            </button>

            <button 
                type="button" 
                onclick="window.addManualPOItemRow()" 
                class="sm:col-span-1 py-3.5 px-3 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 font-bold text-xs flex items-center justify-center gap-1.5 transition-all active:scale-95 cursor-pointer shadow-2xs"
                title="Input nama barang dan harga manual tanpa katalog"
            >
                <i class="fa-solid fa-pen-to-square text-xs"></i>
                <span>Input Manual</span>
            </button>
        </div>
    `);
};

/**
 * Render Konten Native Product Picker Modal
 */
const renderPOProductPickerContent = () => {
    const content = el('modal-po-product-picker-content');
    if (!content) return;

    const products = appData.products || [];
    const currentSupplierId = el('pof-supplierId')?.value || '';
    const suppliers = appData.suppliers || [];
    const selectedSupplier = suppliers.find(s => String(s.id) === String(currentSupplierId));

    const supplierProducts = products.filter(p => String(p.supplierId) === String(currentSupplierId));
    const allProductsCount = products.length;
    const supplierProductsCount = supplierProducts.length;

    // Filter produk berdasarkan tab supplier, pencarian, dan kategori
    let list = poPickerFilterSupplier && supplierProductsCount > 0 ? supplierProducts : products;

    if (poPickerCategory !== 'all') {
        list = list.filter(p => (p.category || '').toLowerCase() === poPickerCategory.toLowerCase());
    }

    const q = (poPickerSearch || '').toLowerCase().trim();
    if (q) {
        list = list.filter(p => {
            const matchName = (p.name || '').toLowerCase().includes(q);
            const matchSku = (p.sku || '').toLowerCase().includes(q);
            const matchCat = (p.category || '').toLowerCase().includes(q);
            const matchVariants = Array.isArray(p.variants) && p.variants.some(v => (v.name || '').toLowerCase().includes(q) || (v.sku || '').toLowerCase().includes(q));
            return matchName || matchSku || matchCat || matchVariants;
        });
    }

    // Ambil daftar kategori unik
    const categories = ['all', ...new Set(products.map(p => p.category).filter(Boolean))];

    setH('modal-po-product-picker-content', `
        <!-- DRAG PULL INDICATOR (NATIVE MOBILE SHEET) -->
        <div class="pull-indicator sm:hidden"></div>

        <!-- HEADER PICKER -->
        <div class="px-5 sm:px-6 pt-4 pb-3.5 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between shrink-0 bg-slate-50/70 dark:bg-slate-900/60">
            <div class="flex items-center gap-3">
                <div class="w-11 h-11 rounded-2xl flex items-center justify-center text-lg shrink-0 shadow-xs" style="background: rgba(var(--color-primary-rgb), 0.12); color: var(--color-primary); border: 1px solid rgba(var(--color-primary-rgb), 0.25);">
                    <i class="fa-solid fa-boxes-stacked"></i>
                </div>
                <div>
                    <h3 class="font-black text-base sm:text-lg text-slate-800 dark:text-white tracking-tight">
                        ${poPickerTargetRow !== null ? `Ganti Barang #${poPickerTargetRow + 1}` : 'Ambil Barang dari Katalog Toko'}
                    </h3>
                    <p class="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                        ${selectedSupplier ? `Rekanan: <b class="text-slate-800 dark:text-slate-200">${esc(selectedSupplier.name)}</b>` : 'Pilih produk untuk order kulakan toko'}
                    </p>
                </div>
            </div>
            <button onclick="window.closePOProductPicker()" class="w-10 h-10 rounded-2xl bg-slate-100 hover:bg-rose-100 hover:text-rose-500 dark:bg-slate-800 dark:hover:bg-rose-950/40 dark:hover:text-rose-400 text-slate-500 flex items-center justify-center transition-all cursor-pointer active:scale-95 shadow-2xs" aria-label="Tutup">
                <i class="fa-solid fa-xmark text-sm"></i>
            </button>
        </div>

        <!-- BILAH PENCARIAN & FILTER SEGMENTED -->
        <div class="p-4 sm:p-5 border-b border-slate-100 dark:border-slate-800 space-y-3 bg-white dark:bg-slate-900 shrink-0">
            <!-- Search Bar Lega 48px -->
            <div class="relative">
                <i class="fa-solid fa-magnifying-glass absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-sm"></i>
                <input 
                    type="text" 
                    id="po-picker-search-input" 
                    placeholder="Cari nama barang, varian, atau barcode..." 
                    value="${esc(poPickerSearch)}"
                    oninput="window.handlePOPickerSearch(this.value)"
                    class="w-full bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-2xl pl-11 pr-10 h-12 text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-100 placeholder:text-slate-400 focus:border-[var(--color-primary)] focus:outline-none transition-all shadow-2xs"
                >
                ${poPickerSearch ? `
                    <button onclick="window.handlePOPickerSearch('')" class="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 p-1 cursor-pointer">
                        <i class="fa-solid fa-circle-xmark text-sm"></i>
                    </button>
                ` : ''}
            </div>

            <!-- Tab Segmented Control 2-Kolom Full Width (Anti-Tumpang Tindih) -->
            <div class="flex items-center gap-1.5 p-1 bg-slate-100 dark:bg-slate-800/80 rounded-2xl">
                ${currentSupplierId && supplierProductsCount > 0 ? `
                    <button 
                        type="button" 
                        onclick="window.setPOPickerSupplierFilter(true)" 
                        class="flex-1 py-2.5 px-3 rounded-xl text-xs font-bold transition-all active:scale-95 cursor-pointer flex items-center justify-center gap-1.5 ${poPickerFilterSupplier ? 'text-white shadow-sm' : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'}"
                        style="${poPickerFilterSupplier ? 'background: var(--color-primary); box-shadow: 0 2px 8px rgba(var(--color-primary-rgb), 0.3);' : ''}"
                    >
                        <i class="fa-solid fa-star text-[10px] ${poPickerFilterSupplier ? 'text-amber-300' : 'text-amber-500'}"></i>
                        <span class="truncate">Barang Rekanan (${supplierProductsCount})</span>
                    </button>
                ` : ''}

                <button 
                    type="button" 
                    onclick="window.setPOPickerSupplierFilter(false)" 
                    class="flex-1 py-2.5 px-3 rounded-xl text-xs font-bold transition-all active:scale-95 cursor-pointer flex items-center justify-center gap-1.5 ${(!poPickerFilterSupplier || supplierProductsCount === 0) ? 'text-white shadow-sm' : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'}"
                    style="${(!poPickerFilterSupplier || supplierProductsCount === 0) ? 'background: var(--color-primary); box-shadow: 0 2px 8px rgba(var(--color-primary-rgb), 0.3);' : ''}"
                >
                    <i class="fa-solid fa-boxes-stacked text-[10px]"></i>
                    <span class="truncate">Semua Katalog Toko (${allProductsCount})</span>
                </button>
            </div>

            <!-- Chips Kategori Horizontal Scrollable -->
            ${categories.length > 2 ? `
                <div class="flex items-center gap-2 overflow-x-auto hide-scrollbar pt-0.5">
                    ${categories.map(cat => `
                        <button 
                            type="button" 
                            onclick="window.setPOPickerCategory('${esc(cat)}')" 
                            class="px-3.5 py-1.5 rounded-xl text-xs font-bold shrink-0 transition-all cursor-pointer ${poPickerCategory === cat ? 'text-white shadow-xs' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'}"
                            style="${poPickerCategory === cat ? 'background: var(--color-primary);' : ''}"
                        >
                            ${cat === 'all' ? 'Semua Kategori' : esc(cat)}
                        </button>
                    `).join('')}
                </div>
            ` : ''}
        </div>

        <!-- LIST PRODUK LEGA & NYAMAN -->
        <div class="p-4 sm:p-5 overflow-y-auto flex-1 hide-scrollbar space-y-3.5">
            ${list.length === 0 ? `
                <div class="p-10 text-center flex flex-col items-center justify-center text-slate-400 space-y-3 bg-slate-50/70 dark:bg-slate-900/40 rounded-3xl border border-dashed border-slate-200 dark:border-slate-800">
                    <div class="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl" style="background: rgba(var(--color-primary-rgb), 0.1); color: var(--color-primary);">
                        <i class="fa-solid fa-magnifying-glass"></i>
                    </div>
                    <div>
                        <p class="font-bold text-sm text-slate-700 dark:text-slate-200">Tidak ada produk yang cocok</p>
                        <p class="text-xs text-slate-400 mt-0.5 max-w-xs">Ganti kata kunci pencarian atau gunakan tombol Input Manual di bawah.</p>
                    </div>
                    <button type="button" onclick="window.addManualPOItemRow(); window.closePOProductPicker();" class="mt-1 px-5 py-2.5 rounded-2xl text-white font-bold text-xs flex items-center gap-2 cursor-pointer active:scale-95 shadow-sm" style="background: var(--color-primary);">
                        <i class="fa-solid fa-plus"></i>
                        <span>Input Barang Manual</span>
                    </button>
                </div>
            ` : list.map(prod => {
                const coverThumb = prod.img 
                    ? `<img src="${esc(prod.img)}" alt="${esc(prod.name)}" class="w-full h-full object-cover" onerror="this.onerror=null; this.style.display='none'; this.nextElementSibling.style.display='flex';"><div class="w-full h-full" style="display:none">${renderProductCoverHtml(prod, { size: 'thumb' })}</div>`
                    : renderProductCoverHtml(prod, { size: 'thumb' });
                
                const isCurrentSupplier = String(prod.supplierId) === String(currentSupplierId);
                const prodStock = parseFloat(prod.stock) || 0;
                const hasVariants = Array.isArray(prod.variants) && prod.variants.length > 0;
                const defaultHpp = parseFloat(prod.hpp) || parseFloat(prod.price) || 0;

                return `
                    <div class="p-4 sm:p-5 rounded-3xl bg-white dark:bg-slate-800/90 border border-slate-200/90 dark:border-slate-700/80 shadow-2xs hover:border-[var(--color-primary)]/50 transition-all space-y-3.5 group">
                        <div class="flex items-start justify-between gap-3.5">
                            <div class="flex items-start gap-3.5 min-w-0 flex-1">
                                <div class="w-14 h-14 rounded-2xl overflow-hidden shrink-0 border border-slate-200/90 dark:border-slate-700 flex items-center justify-center bg-slate-50 dark:bg-slate-900 shadow-2xs mt-0.5">
                                    ${coverThumb}
                                </div>
                                <div class="min-w-0 flex-1">
                                    <div class="flex items-center gap-2 flex-wrap">
                                        <h5 class="font-black text-sm sm:text-base text-slate-800 dark:text-slate-100 group-hover:text-[var(--color-primary)] transition-colors">${esc(prod.name)}</h5>
                                        ${isCurrentSupplier ? '<span class="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-amber-50 text-amber-600 dark:bg-amber-950/40 dark:text-amber-400 border border-amber-200 dark:border-amber-800"><i class="fa-solid fa-star text-[9px] mr-1"></i>Supplier Terpilih</span>' : ''}
                                    </div>
                                    <div class="flex items-center gap-2.5 text-xs text-slate-400 mt-1 flex-wrap">
                                        ${prod.sku ? `<span>SKU: <b class="font-mono text-slate-600 dark:text-slate-300">${esc(prod.sku)}</b></span> •` : ''}
                                        <span>Stok Gudang: <b class="${prodStock > 0 ? 'text-emerald-600 dark:text-emerald-400' : 'text-rose-500'}">${formatQty(prodStock)} ${esc(prod.unit || 'Pcs')}</b></span>
                                        ${prod.category ? `• <span class="text-slate-500 dark:text-slate-400 font-medium">${esc(prod.category)}</span>` : ''}
                                    </div>
                                    <div class="text-xs text-slate-500 dark:text-slate-400 mt-1.5 flex items-center gap-2">
                                        <span>Modal HPP Terakhir: <b class="text-slate-800 dark:text-slate-200 font-bold">${fCur(defaultHpp)}</b></span>
                                        ${prod.price ? `<span>• Jual: <b>${fCur(prod.price)}</b></span>` : ''}
                                    </div>
                                </div>
                            </div>

                            ${!hasVariants ? `
                                <button 
                                    type="button" 
                                    onclick="window.selectProductForPO('${prod.id}')" 
                                    class="h-10 px-5 rounded-xl text-white font-bold text-xs sm:text-sm shadow-sm active:scale-95 transition-all cursor-pointer shrink-0 flex items-center gap-1.5 mt-1"
                                    style="background: var(--color-primary); box-shadow: 0 4px 12px rgba(var(--color-primary-rgb), 0.25);"
                                >
                                    <i class="fa-solid fa-plus text-xs"></i>
                                    <span>Pilih</span>
                                </button>
                            ` : ''}
                        </div>

                        ${hasVariants ? `
                            <div class="pt-3 border-t border-slate-100 dark:border-slate-700/60 space-y-2.5">
                                <div class="flex items-center justify-between">
                                    <span class="text-[11px] font-black uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                                        <i class="fa-solid fa-layer-group text-[var(--color-primary)]"></i> Pilih Varian Barang:
                                    </span>
                                    ${poPickerTargetRow === null ? `
                                        <button 
                                            type="button" 
                                            onclick="window.addAllVariantsForPO('${prod.id}')" 
                                            class="text-xs font-bold text-[var(--color-primary)] hover:underline flex items-center gap-1 cursor-pointer"
                                        >
                                            <i class="fa-solid fa-list-check"></i>
                                            <span>+ Ambil Semua Varian (${prod.variants.length})</span>
                                        </button>
                                    ` : ''}
                                </div>

                                <div class="flex items-center gap-2 flex-wrap">
                                    ${prod.variants.map((v, vIdx) => `
                                        <button 
                                            type="button" 
                                            onclick="window.selectProductForPO('${prod.id}', ${vIdx})" 
                                            class="h-10 px-3.5 rounded-xl text-xs font-bold bg-slate-50 hover:bg-[var(--color-primary)] hover:text-white dark:bg-slate-900/70 dark:hover:bg-[var(--color-primary)] border border-slate-200 dark:border-slate-700 hover:border-transparent transition-all flex items-center gap-1.5 active:scale-95 cursor-pointer shadow-2xs group/var"
                                        >
                                            <i class="fa-solid fa-plus text-[10px] opacity-60 group-hover/var:opacity-100"></i>
                                            <span>${esc(v.name)}</span>
                                            <span class="text-[11px] opacity-80 font-normal">(${v.hpp ? fCur(v.hpp) : fCur(v.price || 0)})</span>
                                        </button>
                                    `).join('')}
                                </div>
                            </div>
                        ` : ''}
                    </div>
                `;
            }).join('')}
        </div>

        <!-- FOOTER PICKER DENGAN TOMBOL INPUT MANUAL ELEGAN -->
        <div class="p-3.5 sm:p-4 border-t border-slate-100 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-900/80 shrink-0">
            <button 
                type="button" 
                onclick="window.addManualPOItemRow(); window.closePOProductPicker();" 
                class="w-full h-11 rounded-2xl border-2 border-dashed border-slate-300 dark:border-slate-700 hover:border-[var(--color-primary)] text-slate-600 dark:text-slate-300 hover:text-[var(--color-primary)] font-bold text-xs flex items-center justify-center gap-2 transition-all active:scale-95 cursor-pointer shadow-2xs"
            >
                <i class="fa-solid fa-pen-to-square text-sm"></i>
                <span>Barang Tidak Ada di Katalog? Ketik Manual Non-Katalog</span>
            </button>
        </div>
    `);
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
        if (s.defaultTerms.startsWith('tempo')) {
            const days = parseInt(s.defaultTerms.split('_')[1], 10) || 14;
            window.setPOTempoPresetDays(days);
            window.setPOPaymentType('tempo');
        } else if (s.defaultTerms === 'konsinyasi') {
            window.setPOPaymentType('konsinyasi');
        } else {
            window.setPOPaymentType('cash');
        }
    }
    renderPOItemsTable();
};

/**
 * Handle Ganti Tipe Pembayaran (Cash / Tempo / Konsinyasi)
 */
window.handlePOPaymentTypeChange = (val) => {
    const dpLabel = el('pof-dp-label');
    const paidInput = el('pof-amountPaid');

    if (val === 'tempo') {
        if (dpLabel) dpLabel.innerText = 'Uang Muka / DP:';
        window.recalcPOTempoDueDate();
    } else {
        if (dpLabel) dpLabel.innerText = 'Pembayaran:';
        
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
    return Math.max(0, Math.round(subtotal - discount + shipping));
};

window.recalcPOTotals = () => {
    const subtotal = tempPOItems.reduce((acc, it) => acc + ((parseFloat(it.qty) || 0) * (parseFloat(it.unitPrice) || 0)), 0);
    const discount = parseFloat(el('pof-discount')?.value) || 0;
    const shipping = parseFloat(el('pof-shippingFee')?.value) || 0;
    const grand = Math.max(0, Math.round(subtotal - discount + shipping));
    const paid = parseFloat(el('pof-amountPaid')?.value) || 0;
    const balance = Math.max(0, grand - paid);

    const subEl = el('pof-calc-subtotal');
    const grandEl = el('pof-calc-grandtotal');
    const balEl = el('pof-calc-balance');

    if (subEl) subEl.innerText = fCur(Math.round(subtotal));
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

        const validItems = tempPOItems.filter(it => it.name && (parseFloat(it.qty) || 0) > 0).map(it => {
            const qtyNum = parseFloat(it.qty) || 0;
            const priceNum = parseFloat(it.unitPrice) || 0;
            return {
                productId: it.productId || '',
                name: it.name || '',
                sku: it.sku || '',
                variantName: it.variantName || '',
                variantKey: it.variantKey || it.variantName || '',
                variantSku: it.variantSku || '',
                qty: qtyNum,
                unit: it.unit || 'Pcs',
                unitPrice: priceNum,
                subtotal: Math.round(qtyNum * priceNum)
            };
        });

        if (validItems.length === 0) {
            hLoad();
            return showToast('Pastikan produk dan kuantitas order telah diisi dengan benar!');
        }

        const subtotal = validItems.reduce((acc, it) => acc + it.subtotal, 0);
        const total = Math.max(0, Math.round(subtotal - discount + shippingFee));
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
window.closePODetailModal = () => {
    window.closePurchaseDetailModal();
};

window.openPurchaseDetailModal = (poId) => {
    ensurePurchaseModals();
    const purchases = appData.purchases || [];
    const po = purchases.find(x => String(x.id) === String(poId));
    if (!po) return showToast('Data PO tidak ditemukan!');

    const modal = el('modal-po-detail');
    const box = el('modal-po-detail-box');
    const content = el('modal-po-detail-content');
    if (!modal || !content) return;

    const total = parseFloat(po.total) || 0;
    const paid = parseFloat(po.amountPaid) || 0;
    const balance = Math.max(0, total - paid);

    setH('modal-po-detail-content', `
        <!-- DRAG PULL INDICATOR (NATIVE MOBILE SHEET) -->
        <div class="pull-indicator sm:hidden"></div>

        <!-- HEADER MODAL -->
        <div class="px-5 sm:px-6 pt-4 pb-3.5 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between shrink-0 bg-slate-50/70 dark:bg-slate-900/60">
            <div class="flex items-center gap-3">
                <div class="w-11 h-11 rounded-2xl flex items-center justify-center text-lg shrink-0 aspect-square shadow-xs" style="background: rgba(var(--color-primary-rgb), 0.12); color: var(--color-primary); border: 1px solid rgba(var(--color-primary-rgb), 0.25);">
                    <i class="fa-solid fa-receipt"></i>
                </div>
                <div>
                    <div class="flex items-center gap-2 flex-wrap">
                        <h3 class="font-mono font-black text-base sm:text-lg text-slate-800 dark:text-white tracking-tight">${esc(po.poNumber || po.id)}</h3>
                        <span class="px-3 py-0.5 rounded-full text-[11px] font-black" style="${po.status === 'received' || po.status === 'completed' ? 'background: rgba(16, 185, 129, 0.12); color: #059669; border: 1px solid rgba(16, 185, 129, 0.25);' : 'background: rgba(var(--color-primary-rgb), 0.12); color: var(--color-primary); border: 1px solid rgba(var(--color-primary-rgb), 0.25);'}">
                            ${po.status === 'ordered' ? 'Dipesan' : (po.status === 'received' ? 'Barang Diterima' : (po.status === 'completed' ? 'Selesai / Lunas' : 'Dibatalkan'))}
                        </span>
                    </div>
                    <p class="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Supplier: <b class="text-slate-800 dark:text-slate-200">${esc(po.supplierName)}</b> • Tanggal: ${formatDate(po.date || po.createdAt)}</p>
                </div>
            </div>
            <div class="flex items-center gap-2">
                <button onclick="window.printPurchaseOrder('${po.id}')" class="w-10 h-10 rounded-2xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 flex items-center justify-center transition-all cursor-pointer shadow-2xs" title="Cetak PO" aria-label="Cetak Surat PO">
                    <i class="fa-solid fa-print text-sm"></i>
                </button>
                <button onclick="window.closePurchaseDetailModal()" class="w-10 h-10 rounded-2xl bg-slate-100 hover:bg-rose-100 hover:text-rose-500 dark:bg-slate-800 dark:hover:bg-rose-950/40 dark:hover:text-rose-400 text-slate-500 flex items-center justify-center transition-all cursor-pointer active:scale-95 shadow-2xs" aria-label="Tutup Modal">
                    <i class="fa-solid fa-xmark text-sm"></i>
                </button>
            </div>
        </div>

        <div class="p-4 sm:p-6 space-y-5 overflow-y-auto flex-1 hide-scrollbar">
            <!-- DAFTAR BARANG YANG DIPESAN (DUAL MODE: MOBILE CARDS & DESKTOP TABLE) -->
            <div>
                <div class="flex items-center justify-between mb-3">
                    <h4 class="font-black text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                        <i class="fa-solid fa-boxes-stacked" style="color:var(--color-primary)"></i>
                        <span>Item Barang Dipesan (${(po.items || []).length})</span>
                    </h4>
                </div>

                <!-- ═══ TAMPILAN MOBILE (NATIVE APP CARDS LEGA) ═══ -->
                <div class="sm:hidden space-y-3">
                    ${(po.items || []).map((item, idx) => {
                        const itemSub = Math.round((parseFloat(item.qty) || 0) * (parseFloat(item.unitPrice) || 0));
                        return `
                            <div class="p-4 rounded-3xl bg-white dark:bg-slate-800/90 border border-slate-200/90 dark:border-slate-700/80 shadow-2xs space-y-2.5">
                                <div class="flex items-start justify-between gap-2.5">
                                    <div class="min-w-0 flex-1">
                                        <div class="flex items-center gap-1.5 flex-wrap">
                                            <span class="w-5 h-5 rounded-lg bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 text-[10px] font-black flex items-center justify-center shrink-0">#${idx + 1}</span>
                                            <p class="font-black text-sm text-slate-800 dark:text-slate-100">${esc(item.name)}</p>
                                            ${item.variantName ? `<span class="px-2.5 py-0.5 rounded-full text-[10px] font-black text-white shrink-0" style="background:var(--color-primary); box-shadow: 0 1px 4px rgba(var(--color-primary-rgb),0.3);">Varian: ${esc(item.variantName)}</span>` : ''}
                                        </div>
                                        ${item.sku ? `<span class="text-[11px] font-mono text-slate-400 ml-6 block mt-0.5">SKU: ${esc(item.sku)}</span>` : ''}
                                    </div>
                                    <span class="px-2.5 py-1 rounded-xl bg-slate-100 dark:bg-slate-700/70 text-slate-800 dark:text-slate-200 text-xs font-black shrink-0">
                                        ${formatQty(item.qty)} ${esc(item.unit || 'pcs')}
                                    </span>
                                </div>
                                <div class="pt-2.5 border-t border-slate-100 dark:border-slate-700/60 flex items-center justify-between text-xs">
                                    <span class="text-slate-400">Modal HPP: <b class="text-slate-700 dark:text-slate-200">${fCur(item.unitPrice)}</b></span>
                                    <span class="font-black text-sm" style="color:var(--color-primary)">${fCur(itemSub)}</span>
                                </div>
                            </div>
                        `;
                    }).join('')}
                </div>

                <!-- ═══ TAMPILAN DESKTOP (MODERN CLEAN TABLE) ═══ -->
                <div class="hidden sm:block border border-slate-200 dark:border-slate-700 rounded-3xl overflow-hidden bg-white dark:bg-slate-800 shadow-2xs">
                    <table class="w-full text-left text-xs">
                        <thead>
                            <tr class="bg-slate-50 dark:bg-slate-900/80 border-b border-slate-200 dark:border-slate-700 text-[10px] font-black uppercase tracking-wider text-slate-400">
                                <th class="py-3 px-4 w-10 text-center">#</th>
                                <th class="py-3 px-4">Nama Produk &amp; Varian</th>
                                <th class="py-3 px-4 text-center">Jumlah</th>
                                <th class="py-3 px-4 text-right">Harga Modal (HPP)</th>
                                <th class="py-3 px-4 text-right">Subtotal</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-slate-100 dark:divide-slate-800">
                            ${(po.items || []).map((item, idx) => `
                                <tr class="hover:bg-slate-50/50 dark:hover:bg-slate-700/30 transition-colors">
                                    <td class="py-3 px-4 text-center font-bold text-slate-400 text-xs">${idx + 1}</td>
                                    <td class="py-3 px-4">
                                        <div class="flex items-center gap-1.5 flex-wrap">
                                            <p class="font-bold text-slate-800 dark:text-slate-100 text-xs sm:text-sm">${esc(item.name)}</p>
                                            ${item.variantName ? `<span class="px-2.5 py-0.5 rounded-full text-[10px] font-black text-white shrink-0" style="background:var(--color-primary); box-shadow: 0 1px 4px rgba(var(--color-primary-rgb),0.3);">Varian: ${esc(item.variantName)}</span>` : ''}
                                        </div>
                                        ${item.sku ? `<span class="text-[11px] font-mono text-slate-400">SKU: ${esc(item.sku)}</span>` : ''}
                                    </td>
                                    <td class="py-3 px-4 text-center font-black text-slate-700 dark:text-slate-200 text-xs">
                                        ${formatQty(item.qty)} ${esc(item.unit || 'pcs')}
                                    </td>
                                    <td class="py-3 px-4 text-right font-mono text-slate-600 dark:text-slate-300">
                                        ${fCur(item.unitPrice)}
                                    </td>
                                    <td class="py-3 px-4 text-right font-black text-slate-800 dark:text-slate-100 text-xs sm:text-sm" style="color:var(--color-primary)">
                                        ${fCur(Math.round((parseFloat(item.qty) || 0) * (parseFloat(item.unitPrice) || 0)))}
                                    </td>
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>
                </div>
            </div>

            <!-- RINGKASAN PEMBAYARAN & SISA HUTANG -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div class="p-4 sm:p-5 rounded-3xl bg-slate-50/70 dark:bg-slate-900/50 border border-slate-200/80 dark:border-slate-800 space-y-2.5 text-xs">
                    <span class="block text-[10px] font-black uppercase tracking-wider text-slate-400">Informasi Tagihan &amp; Biaya</span>
                    <div class="flex justify-between">
                        <span class="text-slate-500">Subtotal Nota:</span>
                        <span class="font-bold text-slate-800 dark:text-white">${fCur(po.subtotal)}</span>
                    </div>
                    ${po.discount > 0 ? `
                        <div class="flex justify-between text-emerald-500 font-bold">
                            <span>Diskon Pembelian:</span>
                            <span>-${fCur(po.discount)}</span>
                        </div>
                    ` : ''}
                    ${po.shippingFee > 0 ? `
                        <div class="flex justify-between">
                            <span class="text-slate-500">Ongkos Kirim Armada:</span>
                            <span>+${fCur(po.shippingFee)}</span>
                        </div>
                    ` : ''}
                    <div class="pt-2 border-t border-slate-200 dark:border-slate-700 flex justify-between font-black text-sm">
                        <span>Total Tagihan PO:</span>
                        <span style="color:var(--color-primary)">${fCur(total)}</span>
                    </div>
                    <div class="flex justify-between text-xs pt-1">
                        <span class="text-slate-500">Sudah Dibayar:</span>
                        <span class="font-bold text-emerald-600 dark:text-emerald-400">${fCur(paid)}</span>
                    </div>
                    <div class="flex justify-between text-xs font-bold pt-1 border-t border-dashed border-slate-200 dark:border-slate-700">
                        <span class="text-amber-500">Sisa Hutang Tempo:</span>
                        <span class="text-amber-600 dark:text-amber-400 font-black text-sm">${balance > 0 ? fCur(balance) : 'Lunas (Rp 0)'}</span>
                    </div>
                </div>

                <!-- RIWAYAT CICILAN & STATUS -->
                <div class="p-4 sm:p-5 rounded-3xl bg-slate-50/70 dark:bg-slate-900/50 border border-slate-200/80 dark:border-slate-800 space-y-3">
                    <div class="flex items-center justify-between">
                        <span class="text-[10px] font-black uppercase tracking-wider text-slate-400">Histori Pembayaran Cicilan</span>
                        <span class="text-[10px] font-bold text-slate-400">${(po.paymentHistory || []).length} Transaksi</span>
                    </div>

                    ${(po.paymentHistory || []).length === 0 ? `
                        <div class="text-center py-6 text-slate-400">
                            <i class="fa-regular fa-clock text-xl mb-1 text-slate-300 dark:text-slate-600 block"></i>
                            <p class="text-xs">Belum ada catatan pembayaran cicilan.</p>
                        </div>
                    ` : `
                        <div class="space-y-2 max-h-52 overflow-y-auto hide-scrollbar">
                            ${po.paymentHistory.map(ph => `
                                <div class="p-3 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/90 dark:border-slate-700 flex items-center justify-between text-xs shadow-2xs">
                                    <div>
                                        <span class="font-black text-emerald-600 dark:text-emerald-400 text-sm">${fCur(ph.amount)}</span>
                                        <p class="text-[10px] text-slate-400 mt-0.5">${formatDateTime(ph.date)} • ${esc(ph.method || 'Transfer')}</p>
                                    </div>
                                    <span class="text-xs text-slate-600 dark:text-slate-300 font-bold">${esc(ph.note || '-')}</span>
                                </div>
                            `).join('')}
                        </div>
                    `}
                </div>
            </div>
        </div>

        <!-- STICKY NATIVE ACTION FOOTER (RESPONSIF MOBILE & DESKTOP) -->
        <div class="p-4 sm:p-5 border-t border-slate-100 dark:border-slate-800 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shrink-0 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5" style="padding-bottom: max(1rem, env(safe-area-inset-bottom))">
            <!-- Aksi Utama di Mobile (Baris 1) -->
            ${po.status === 'ordered' ? `
                <button 
                    type="button" 
                    onclick="window.closePurchaseDetailModal(); window.receiveAndRestockPO('${po.id}');" 
                    class="w-full sm:w-auto sm:order-2 h-12 px-6 rounded-2xl text-white font-bold text-xs sm:text-sm shadow-glow active:scale-95 transition-all cursor-pointer flex items-center justify-center gap-2"
                    style="background: var(--color-primary); box-shadow: 0 4px 14px rgba(var(--color-primary-rgb), 0.35);"
                >
                    <i class="fa-solid fa-boxes-stacked"></i>
                    <span>Terima Barang &amp; Restock</span>
                </button>
            ` : (balance > 0 && po.paymentType === 'tempo' ? `
                <button 
                    type="button" 
                    onclick="window.closePurchaseDetailModal(); window.openPurchasePaymentModal('${po.id}');" 
                    class="w-full sm:w-auto sm:order-2 h-12 px-6 rounded-2xl bg-amber-500 hover:bg-amber-600 text-white font-bold text-xs sm:text-sm shadow-2xs active:scale-95 transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                    <i class="fa-solid fa-money-bill-wave"></i>
                    <span>+ Bayar Cicilan Hutang</span>
                </button>
            ` : '')}

            <!-- Tombol Sekunder di Mobile (Baris 2) -->
            <div class="grid grid-cols-2 sm:flex items-center gap-2 w-full sm:w-auto sm:order-1">
                <button type="button" onclick="window.closePurchaseDetailModal()" class="h-11 sm:h-12 px-5 rounded-2xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 font-bold text-xs hover:bg-slate-100 dark:hover:bg-slate-800 transition-all cursor-pointer flex items-center justify-center">
                    Tutup
                </button>
                <button type="button" onclick="window.printPurchaseOrder('${po.id}')" class="h-11 sm:h-12 px-4 rounded-2xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 border border-slate-200/80 dark:border-slate-700 font-bold text-xs transition-all cursor-pointer flex items-center justify-center gap-2">
                    <i class="fa-solid fa-print"></i>
                    <span>Cetak Surat PO</span>
                </button>
            </div>
        </div>
    `);

    openModalAnim(modal, box);
};

window.closePurchaseDetailModal = () => {
    const modal = el('modal-po-detail');
    const box = el('modal-po-detail-box');
    if (!modal) return;
    closeModalAnim(modal, box);
};

/**
 * ══════════════════════════════════════════════════════════════════
 * FITUR UTAMA 4: MODAL BAYAR / CICIL HUTANG TEMPO PO (QUICK-PAY CHIPS & THEME HARMONIZED)
 * ══════════════════════════════════════════════════════════════════
 */
window.openPurchasePaymentModal = (poId) => {
    ensurePurchaseModals();
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
        <!-- DRAG PULL INDICATOR (NATIVE MOBILE SHEET) -->
        <div class="pull-indicator sm:hidden"></div>

        <div class="px-5 sm:px-6 pt-4 pb-3.5 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between shrink-0 bg-slate-50/70 dark:bg-slate-900/60">
            <div class="flex items-center gap-3">
                <div class="w-11 h-11 rounded-2xl flex items-center justify-center text-lg shrink-0 aspect-square shadow-xs" style="background: rgba(var(--color-primary-rgb), 0.12); color: var(--color-primary); border: 1px solid rgba(var(--color-primary-rgb), 0.25);">
                    <i class="fa-solid fa-money-bill-wave"></i>
                </div>
                <div>
                    <h3 class="font-black text-base text-slate-800 dark:text-white tracking-tight">Bayar Cicilan Hutang Supplier</h3>
                    <p class="text-xs text-slate-400 mt-0.5">${esc(po.supplierName)} • <b class="font-mono text-slate-600 dark:text-slate-300">${esc(po.poNumber || po.id)}</b></p>
                </div>
            </div>
            <button onclick="window.closePurchasePaymentModal()" class="w-10 h-10 rounded-2xl bg-slate-100 hover:bg-rose-100 hover:text-rose-500 dark:bg-slate-800 dark:hover:bg-rose-950/40 dark:hover:text-rose-400 text-slate-500 flex items-center justify-center transition-all cursor-pointer active:scale-95 shadow-2xs" aria-label="Tutup Modal">
                <i class="fa-solid fa-xmark text-sm"></i>
            </button>
        </div>

        <form id="po-pay-form" onsubmit="window.submitPurchasePayment(event, '${po.id}')" class="flex-1 flex flex-col overflow-hidden">
            <div class="p-4 sm:p-6 space-y-4 overflow-y-auto flex-1 hide-scrollbar">
                <!-- Ringkasan Hutang -->
                <div class="p-4 rounded-3xl bg-amber-50/70 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800/60 text-xs space-y-2 shadow-2xs">
                    <div class="flex justify-between">
                        <span class="text-slate-500">Total Tagihan PO:</span>
                        <span class="font-bold text-slate-800 dark:text-white">${fCur(total)}</span>
                    </div>
                    <div class="flex justify-between">
                        <span class="text-slate-500">Sudah Pernah Dibayar:</span>
                        <span class="font-bold text-emerald-600 dark:text-emerald-400">${fCur(paid)}</span>
                    </div>
                    <div class="flex justify-between pt-2 border-t border-amber-200 dark:border-amber-800/80 font-black">
                        <span class="text-amber-600 dark:text-amber-400">Sisa Hutang Wajib Bayar:</span>
                        <span class="text-amber-600 dark:text-amber-400 text-base" id="pop-unpaid-base" data-unpaid="${unpaid}">${fCur(unpaid)}</span>
                    </div>
                </div>

                <!-- Input Nominal & Quick-Pay Chips -->
                <div class="space-y-2">
                    <div class="flex items-center justify-between">
                        <label class="block text-[10px] font-black uppercase tracking-wider text-slate-500 dark:text-slate-400">
                            Nominal Pembayaran (Rp) *
                        </label>
                        <span class="text-[11px] font-bold text-slate-400" id="pop-remaining-preview">
                            Sisa Setelah Bayar: <b>Rp 0</b>
                        </span>
                    </div>

                    <div class="relative">
                        <span class="absolute left-4 top-1/2 -translate-y-1/2 text-sm font-bold text-slate-400">Rp</span>
                        <input 
                            type="number" 
                            id="pop-amount" 
                            required 
                            min="1" 
                            max="${unpaid}" 
                            value="${unpaid}" 
                            class="w-full bg-slate-50 dark:bg-slate-900 font-black text-lg pl-11 pr-4 h-13 border border-slate-200 dark:border-slate-700 rounded-2xl focus:border-[var(--color-primary)] focus:outline-none transition-all shadow-2xs"
                            style="color: var(--color-primary)"
                            oninput="window.recalcPOPaymentPreview(${unpaid})"
                        >
                    </div>

                    <!-- Quick-Pay Chips (25%, 50%, 75%, 100% LUNAS) -->
                    <div class="grid grid-cols-4 gap-2 pt-1">
                        <button 
                            type="button" 
                            onclick="window.setPOPaymentQuickPercent(0.25, ${unpaid})" 
                            class="py-2.5 rounded-xl text-xs font-bold border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:border-[var(--color-primary)] active:scale-95 transition-all cursor-pointer"
                        >
                            25%
                        </button>
                        <button 
                            type="button" 
                            onclick="window.setPOPaymentQuickPercent(0.50, ${unpaid})" 
                            class="py-2.5 rounded-xl text-xs font-bold border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:border-[var(--color-primary)] active:scale-95 transition-all cursor-pointer"
                        >
                            50%
                        </button>
                        <button 
                            type="button" 
                            onclick="window.setPOPaymentQuickPercent(0.75, ${unpaid})" 
                            class="py-2.5 rounded-xl text-xs font-bold border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:border-[var(--color-primary)] active:scale-95 transition-all cursor-pointer"
                        >
                            75%
                        </button>
                        <button 
                            type="button" 
                            onclick="window.setPOPaymentQuickPercent(1.00, ${unpaid})" 
                            class="py-2.5 rounded-xl text-xs font-black text-white shadow-xs active:scale-95 transition-all cursor-pointer"
                            style="background: var(--color-primary);"
                        >
                            100% LUNAS
                        </button>
                    </div>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
                    <div>
                        <label class="block text-[10px] font-black uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1.5">Tanggal Bayar *</label>
                        <input type="date" id="pop-date" required value="${new Date().toISOString().split('T')[0]}" class="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl h-12 px-3 text-xs font-bold text-slate-800 dark:text-slate-100 focus:border-[var(--color-primary)] focus:outline-none">
                    </div>

                    <div>
                        <label class="block text-[10px] font-black uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1.5">Metode Bayar</label>
                        <select id="pop-method" class="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl h-12 px-3 text-xs font-bold text-slate-800 dark:text-slate-100 focus:border-[var(--color-primary)] focus:outline-none cursor-pointer">
                            <option value="Transfer Bank">Transfer Bank</option>
                            <option value="Kas Tunai">Kas Tunai Toko</option>
                            <option value="Giro / Cek">Giro / Cek Mundur</option>
                        </select>
                    </div>
                </div>

                <div>
                    <label class="block text-[10px] font-black uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1.5">Catatan / No. Bukti Transfer</label>
                    <input type="text" id="pop-note" placeholder="Contoh: Transfer via BCA No Ref 123456" class="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl h-12 px-3.5 text-xs font-medium text-slate-800 dark:text-slate-100 focus:border-[var(--color-primary)] focus:outline-none">
                </div>
            </div>

            <!-- STICKY ACTION FOOTER -->
            <div class="p-4 sm:p-5 border-t border-slate-100 dark:border-slate-800 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shrink-0 flex items-center justify-end gap-2.5" style="padding-bottom: max(1rem, env(safe-area-inset-bottom))">
                <button type="button" onclick="window.closePurchasePaymentModal()" class="flex-1 sm:flex-initial h-12 px-6 rounded-2xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 font-bold text-xs hover:bg-slate-100 dark:hover:bg-slate-800 transition-all cursor-pointer">
                    Batal
                </button>
                <button type="submit" class="flex-1 sm:flex-initial h-12 px-8 rounded-2xl text-white font-bold text-xs sm:text-sm shadow-glow transition-all active:scale-95 cursor-pointer flex items-center justify-center gap-2" style="background: var(--color-primary); box-shadow: 0 4px 14px rgba(var(--color-primary-rgb), 0.35);">
                    <i class="fa-solid fa-check"></i>
                    <span>Simpan Pembayaran</span>
                </button>
            </div>
        </form>
    `);

    window.recalcPOPaymentPreview(unpaid);
    openModalAnim(modal, box);
};

/**
 * Quick Set Persentase Cicilan PO
 */
window.setPOPaymentQuickPercent = (pct, maxUnpaid) => {
    const input = el('pop-amount');
    if (!input) return;
    const calcVal = Math.round(maxUnpaid * pct);
    input.value = calcVal;
    window.recalcPOPaymentPreview(maxUnpaid);
};

/**
 * Live Reactive Recalculate Sisa Hutang Setelah Bayar
 */
window.recalcPOPaymentPreview = (maxUnpaid) => {
    const amount = parseFloat(el('pop-amount')?.value) || 0;
    const preview = el('pop-remaining-preview');
    if (!preview) return;
    const rem = Math.max(0, maxUnpaid - amount);
    if (rem === 0) {
        preview.innerHTML = '<span class="text-emerald-500 font-bold"><i class="fa-solid fa-circle-check mr-1"></i>Lunas Penuh</span>';
    } else {
        preview.innerHTML = `Sisa Setelah Bayar: <b class="text-amber-500">${fCur(rem)}</b>`;
    }
};

window.closePurchasePaymentModal = () => {
    const modal = el('modal-po-payment');
    const box = el('modal-po-payment-box');
    if (!modal) return;
    closeModalAnim(modal, box);
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

    let itemsText = (po.items || []).map((it, i) => {
        const varLabel = it.variantName ? ` [Varian: ${it.variantName}]` : '';
        return `${i + 1}. *${it.name}${varLabel}* - ${formatQty(it.qty)} ${it.unit || 'pcs'} @ Rp ${Number(it.unitPrice || 0).toLocaleString('id-ID')}`;
    }).join('\n');

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
                    <h2 style="font-size: 18px; font-weight: 900; margin: 0; color: #0f172a; text-transform: uppercase; letter-spacing: 0.5px;">PURCHASE ORDER</h2>
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
                                <b style="color: #0f172a;">${esc(it.name)}</b>
                                ${it.variantName ? `<br><span style="display: inline-block; font-size: 10px; font-weight: 700; color: #0f172a; background: #f1f5f9; border: 1px solid #cbd5e1; padding: 2px 7px; border-radius: 4px; margin-top: 3px;">Varian: ${esc(it.variantName)}</span>` : ''}
                                ${it.sku ? `<br><span style="font-size: 10px; font-family: monospace; color: #64748b;">SKU: ${esc(it.sku)}</span>` : ''}
                            </td>
                            <td style="padding: 8px 10px; text-align: center; font-weight: bold; color: #0f172a;">${formatQty(it.qty)} ${esc(it.unit || 'pcs')}</td>
                            <td style="padding: 8px 10px; text-align: right; color: #334155;">${fCur(it.unitPrice)}</td>
                            <td style="padding: 8px 10px; text-align: right; font-weight: bold; color: #0f172a;">${fCur(Math.round((parseFloat(it.qty) || 0) * (parseFloat(it.unitPrice) || 0)))}</td>
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
                        <span style="color: #0f172a;">${fCur(po.total)}</span>
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
