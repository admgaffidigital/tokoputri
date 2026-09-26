/**
 * ============================================================
 * MODUL ADMIN: MASTER DATA SUPPLIER & PELACAKAN ASAL-USUL BARANG
 * (Supplier & Partner Management Hub)
 * 
 * Fitur:
 * 1. Database Rekanan & Supplier lengkap (Kontak Sales, No WA, Alamat, Rekening Bank, Termin)
 * 2. Asal-Usul Barang: Lacak semua produk yang disuplai oleh masing-masing rekanan
 * 3. Detail Profil Rekanan (3 Tab: Katalog Disuplai, Riwayat PO Kulakan, Kartu Hutang Usaha)
 * 4. 1-Klik Kirim WhatsApp ke Sales Supplier
 * 5. Integrasi langsung ke Pembuatan Order Kulakan (Purchase Order)
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
 * Pastikan wadah modal Supplier terpasang di root document.body
 * agar bebas dari scroll container & transform parent (.view-section / .scroll-content).
 */
export const ensureSupplierModals = () => {
    // Bersihkan modal lama jika pernah terinjeksi ke dalam #admin-content
    const insideDetail = document.querySelector('#admin-content #modal-supplier-detail');
    if (insideDetail) insideDetail.remove();
    const insideForm = document.querySelector('#admin-content #modal-supplier-form');
    if (insideForm) insideForm.remove();

    if (!el('modal-supplier-detail')) {
        const m = document.createElement('div');
        m.id = 'modal-supplier-detail';
        m.className = 'fixed inset-0 z-[150] flex hidden items-end sm:items-center justify-center p-0 sm:p-4 bg-slate-950/40 backdrop-blur-sm opacity-0 transition-opacity duration-300';
        m.onclick = (e) => { if (e.target === m) window.closeSupplierDetailModal?.(); };
        m.innerHTML = `
            <div id="modal-supplier-detail-box" class="modal-bottom-sheet relative flex max-h-[92dvh] sm:max-h-[88dvh] w-full max-w-4xl translate-y-full sm:translate-y-10 transform flex-col overflow-hidden rounded-t-[2rem] sm:rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-2xl transition-transform duration-300">
                <div id="modal-supplier-detail-content" class="flex-1 overflow-y-auto hide-scrollbar flex flex-col"></div>
            </div>
        `;
        document.body.appendChild(m);
    }

    if (!el('modal-supplier-form')) {
        const m = document.createElement('div');
        m.id = 'modal-supplier-form';
        m.className = 'fixed inset-0 z-[150] flex hidden items-end sm:items-center justify-center p-0 sm:p-4 bg-slate-950/40 backdrop-blur-sm opacity-0 transition-opacity duration-300';
        m.onclick = (e) => { if (e.target === m) window.closeSupplierFormModal?.(); };
        m.innerHTML = `
            <div id="modal-supplier-form-box" class="modal-bottom-sheet relative flex max-h-[92dvh] sm:max-h-[88dvh] w-full max-w-2xl translate-y-full sm:translate-y-10 transform flex-col overflow-hidden rounded-t-[2rem] sm:rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-2xl transition-transform duration-300">
                <div id="modal-supplier-form-content" class="flex-1 flex flex-col overflow-hidden"></div>
            </div>
        `;
        document.body.appendChild(m);
    }
};

// State lokal modul supplier
let supplierSearchQuery = '';
let activeSupplierTab = 'all'; // 'all' | 'has_debt'
let currentViewingSupplierId = null;
let currentDetailModalTab = 'products'; // 'products' | 'orders' | 'debt'

/**
 * Format tanggal Indonesia yang rapi
 */
const formatDateIndo = (dateStr) => {
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
 * Kalkulasi ringkasan metrik supplier
 */
export const computeSupplierMetrics = () => {
    const suppliers = appData.suppliers || [];
    const products = appData.products || [];
    const purchases = appData.purchases || [];

    const totalSuppliers = suppliers.length;
    
    // Total produk yang terhubung ke supplier mana saja
    const linkedProductsCount = products.filter(p => p.supplierId && suppliers.some(s => String(s.id) === String(p.supplierId))).length;

    // Total hutang belum lunas ke seluruh supplier
    const totalOutstandingDebt = purchases.reduce((acc, po) => {
        if (po.paymentType === 'tempo' && po.paymentStatus !== 'lunas') {
            const unpaid = (parseFloat(po.total) || 0) - (parseFloat(po.amountPaid) || 0);
            return acc + (unpaid > 0 ? unpaid : 0);
        }
        return acc;
    }, 0);

    // Total kulakan (PO) yang sedang berjalan
    const activePurchasesCount = purchases.filter(po => po.status === 'ordered').length;

    return {
        totalSuppliers,
        linkedProductsCount,
        totalOutstandingDebt,
        activePurchasesCount
    };
};

/**
 * Render Tampilan Utama Modul Supplier
 */
export const renderSuppliersView = () => {
    ensureSupplierModals();
    const content = el('admin-content');
    if (!content) return;

    const metrics = computeSupplierMetrics();
    const suppliers = appData.suppliers || [];

    // Filter daftar supplier berdasarkan pencarian dan tab
    const query = supplierSearchQuery.toLowerCase().trim();
    let filtered = suppliers.filter(s => {
        const matchesQuery = !query || 
            (s.name || '').toLowerCase().includes(query) ||
            (s.code || '').toLowerCase().includes(query) ||
            (s.salesName || '').toLowerCase().includes(query) ||
            (s.phone || '').includes(query) ||
            (s.address || '').toLowerCase().includes(query);

        if (!matchesQuery) return false;

        if (activeSupplierTab === 'has_debt') {
            const hasDebt = (appData.purchases || []).some(po => 
                String(po.supplierId) === String(s.id) && 
                po.paymentType === 'tempo' && 
                po.paymentStatus !== 'lunas' &&
                ((parseFloat(po.total) || 0) - (parseFloat(po.amountPaid) || 0) > 0)
            );
            return hasDebt;
        }

        return true;
    });

    setH('admin-content', `
        <div class="space-y-4 sm:space-y-5 fade-in max-w-5xl mx-auto pb-24 pt-1 sm:pt-2">
            <!-- 1. HERO BANNER: MASTER DATA SUPPLIER & REKANAN (THEME HARMONIZED) -->
            <div class="relative overflow-hidden p-5 sm:p-7 rounded-2xl sm:rounded-3xl border border-[rgba(var(--color-primary-rgb),0.2)] bg-gradient-to-br from-white via-white to-[rgba(var(--color-primary-rgb),0.05)] dark:from-slate-900 dark:via-slate-900/90 dark:to-slate-800 shadow-xs">
                <!-- Ambient Glow Dekorasi -->
                <div class="pointer-events-none absolute -right-10 -top-10 h-48 w-48 rounded-full opacity-15 blur-3xl" style="background: var(--color-primary)"></div>
                <div class="pointer-events-none absolute -bottom-10 -left-10 h-40 w-40 rounded-full opacity-10 blur-2xl" style="background: var(--color-primary)"></div>

                <div class="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div class="space-y-1.5">
                        <div class="flex items-center gap-2">
                            <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider primary-bg-soft primary-text border primary-border shadow-2xs">
                                <i class="fa-solid fa-truck-field"></i> Mitra Pabrik &amp; Distributor
                            </span>
                        </div>
                        <h2 class="text-xl sm:text-2xl font-black tracking-tight text-slate-800 dark:text-white flex items-center gap-2.5">
                            Database Supplier &amp; Rekanan
                        </h2>
                        <p class="text-xs text-slate-600 dark:text-slate-300 max-w-xl leading-relaxed">
                            Lacak asal-usul barang kulakan, kelola kontak sales, pantau tempo pembayaran, dan cetak purchase order pengadaan toko.
                        </p>
                    </div>

                    <div class="flex items-center gap-2 shrink-0">
                        <button onclick="if(window.openAdminTab) window.openAdminTab('purchases');" class="px-4 py-3 rounded-2xl bg-white/90 dark:bg-slate-800/90 text-slate-700 dark:text-slate-200 border border-slate-200/90 dark:border-slate-700/80 font-bold text-xs shadow-2xs hover:bg-white dark:hover:bg-slate-700 transition-all flex items-center gap-2 cursor-pointer active:scale-95">
                            <i class="fa-solid fa-cart-flatbed" style="color:var(--color-primary)"></i>
                            <span>Order Kulakan</span>
                        </button>
                        <button onclick="window.openSupplierFormModal()" class="px-5 py-3 rounded-2xl text-xs font-black text-white shadow-glow active:scale-95 transition-all flex items-center gap-2 cursor-pointer primary-bg hover:opacity-95">
                            <i class="fa-solid fa-plus text-xs"></i>
                            <span>Tambah Supplier</span>
                        </button>
                    </div>
                </div>

                <!-- METRIK STATISTIK REKANAN -->
                <div class="mt-6 pt-5 border-t border-[rgba(var(--color-primary-rgb),0.15)] dark:border-slate-700/60 grid grid-cols-2 lg:grid-cols-4 gap-3">
                    <div class="p-3.5 sm:p-4 rounded-2xl bg-white/95 dark:bg-slate-800/80 border border-slate-200/90 dark:border-slate-700/80 shadow-2xs backdrop-blur-xs flex flex-col justify-between">
                        <div class="flex items-center justify-between mb-1.5">
                            <span class="text-[9px] font-black uppercase tracking-wider text-slate-500 dark:text-slate-400">Total Rekanan</span>
                            <div class="w-7 h-7 rounded-xl primary-bg-soft primary-text flex items-center justify-center text-xs shadow-2xs">
                                <i class="fa-solid fa-truck-field"></i>
                            </div>
                        </div>
                        <p class="text-xl sm:text-2xl font-black text-slate-800 dark:text-white tracking-tight">${metrics.totalSuppliers}</p>
                        <p class="text-[10px] font-bold text-slate-400 mt-0.5">Pabrik &amp; Distributor Aktif</p>
                    </div>

                    <div class="p-3.5 sm:p-4 rounded-2xl bg-white/95 dark:bg-slate-800/80 border border-slate-200/90 dark:border-slate-700/80 shadow-2xs backdrop-blur-xs flex flex-col justify-between">
                        <div class="flex items-center justify-between mb-1.5">
                            <span class="text-[9px] font-black uppercase tracking-wider text-slate-500 dark:text-slate-400">Barang Terhubung</span>
                            <div class="w-7 h-7 rounded-xl bg-teal-50 dark:bg-teal-950/40 text-teal-600 dark:text-teal-400 flex items-center justify-center text-xs shadow-2xs">
                                <i class="fa-solid fa-boxes-stacked"></i>
                            </div>
                        </div>
                        <p class="text-xl sm:text-2xl font-black text-teal-600 dark:text-teal-400 tracking-tight">${metrics.linkedProductsCount}</p>
                        <p class="text-[10px] font-bold text-slate-400 mt-0.5">Produk Terlacak Asalnya</p>
                    </div>

                    <div class="p-3.5 sm:p-4 rounded-2xl bg-white/95 dark:bg-slate-800/80 border border-slate-200/90 dark:border-slate-700/80 shadow-2xs backdrop-blur-xs flex flex-col justify-between">
                        <div class="flex items-center justify-between mb-1.5">
                            <span class="text-[9px] font-black uppercase tracking-wider text-amber-500">Hutang Usaha</span>
                            <div class="w-7 h-7 rounded-xl bg-amber-50 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400 flex items-center justify-center text-xs shadow-2xs">
                                <i class="fa-solid fa-file-invoice-dollar"></i>
                            </div>
                        </div>
                        <p class="text-lg sm:text-xl font-black text-amber-600 dark:text-amber-400 tracking-tight">${fCur(metrics.totalOutstandingDebt)}</p>
                        <p class="text-[10px] font-bold text-slate-400 mt-0.5">Kewajiban Belum Lunas</p>
                    </div>

                    <div class="p-3.5 sm:p-4 rounded-2xl bg-white/95 dark:bg-slate-800/80 border border-slate-200/90 dark:border-slate-700/80 shadow-2xs backdrop-blur-xs flex flex-col justify-between">
                        <div class="flex items-center justify-between mb-1.5">
                            <span class="text-[9px] font-black uppercase tracking-wider text-slate-500 dark:text-slate-400">PO Berjalan</span>
                            <div class="w-7 h-7 rounded-xl primary-bg-soft primary-text flex items-center justify-center text-xs shadow-2xs">
                                <i class="fa-solid fa-cart-flatbed"></i>
                            </div>
                        </div>
                        <p class="text-xl sm:text-2xl font-black text-slate-800 dark:text-white tracking-tight">${metrics.activePurchasesCount}</p>
                        <p class="text-[10px] font-bold text-slate-400 mt-0.5">Menunggu Barang Datang</p>
                    </div>
                </div>
            </div>

            <!-- 2. TOOLBAR: PENCARIAN & FILTER -->
            <div class="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-between">
                <div class="flex gap-2 flex-1 max-w-xl">
                    <div class="relative flex-1">
                        <i class="fa-solid fa-search absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-sm"></i>
                        <input 
                            type="text" 
                            id="supplier-search-input" 
                            value="${esc(supplierSearchQuery)}" 
                            placeholder="Cari supplier, kode, kontak sales, alamat..." 
                            oninput="window.handleSupplierSearch(this.value)"
                            class="w-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl py-3 pl-11 pr-4 text-xs sm:text-sm font-bold text-slate-700 dark:text-slate-200 focus:outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/15 shadow-2xs transition-all"
                        >
                    </div>
                    <button 
                        onclick="window.toggleSupplierFilter()" 
                        class="px-4 py-3 rounded-2xl border text-xs font-bold transition-all flex items-center gap-1.5 shrink-0 ${activeSupplierTab === 'has_debt' ? 'primary-bg text-white shadow-glow' : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300'}"
                        title="Tampilkan hanya supplier yang ada sisa hutang tempo"
                    >
                        <i class="fa-solid fa-filter text-xs"></i>
                        <span class="hidden sm:inline">Ada Hutang</span>
                    </button>
                </div>
            </div>

            <!-- 3. DAFTAR SUPPLIER / REKANAN -->
            <div id="supplier-cards-list" class="space-y-3">
                ${filtered.length === 0 ? `
                    <div class="p-12 text-center flex flex-col items-center justify-center text-slate-400 bg-white/95 dark:bg-slate-800/80 rounded-2xl sm:rounded-3xl border border-slate-200/90 dark:border-slate-700/80">
                        <div class="w-16 h-16 rounded-2xl primary-bg-soft primary-text flex items-center justify-center text-3xl mb-3 shadow-xs">
                            <i class="fa-solid fa-truck-field"></i>
                        </div>
                        <p class="font-bold text-sm text-slate-700 dark:text-slate-200">Belum Ada Data Supplier</p>
                        <p class="text-xs text-slate-400 mt-1 max-w-sm">Daftarkan supplier / distributor rekanan untuk melacak asal-usul barang, mengelola kulakan produk, dan memantau hutang tempo usaha.</p>
                        <button onclick="window.openSupplierFormModal()" class="mt-4 px-5 py-2.5 rounded-xl primary-bg text-white font-bold text-xs shadow-glow">
                            <i class="fa-solid fa-plus mr-1.5"></i> Tambah Supplier Pertama
                        </button>
                    </div>
                ` : filtered.map(s => renderSupplierCardHtml(s)).join('')}
            </div>
        </div>
    `);
};

/**
 * Render Kartu Setiap Supplier pada Daftar
 */
const renderSupplierCardHtml = (s) => {
    const products = appData.products || [];
    const purchases = appData.purchases || [];

    // Barang yang disuplai oleh rekanan ini
    const suppliedProducts = products.filter(p => String(p.supplierId) === String(s.id));

    // PO terkait supplier ini
    const supplierPurchases = purchases.filter(po => String(po.supplierId) === String(s.id));
    
    // Hitung total hutang tempo yang belum lunas
    const debt = supplierPurchases.reduce((acc, po) => {
        if (po.paymentType === 'tempo' && po.paymentStatus !== 'lunas') {
            const unpaid = (parseFloat(po.total) || 0) - (parseFloat(po.amountPaid) || 0);
            return acc + (unpaid > 0 ? unpaid : 0);
        }
        return acc;
    }, 0);

    const termLabelMap = {
        'cash': 'Cash / Tunai',
        'tempo_7': 'Tempo 7 Hari',
        'tempo_14': 'Tempo 14 Hari',
        'tempo_30': 'Tempo 30 Hari',
        'tempo_60': 'Tempo 60 Hari',
        'konsinyasi': 'Konsinyasi (Titip Jual)'
    };

    const cleanPhone = s.phone ? normalizeWA(s.phone) : '';

    return `
        <div class="bg-white dark:bg-slate-800/80 border border-slate-200/90 dark:border-slate-700/80 hover:border-[var(--color-primary)]/40 dark:hover:border-[var(--color-primary)]/40 transition-all rounded-2xl sm:rounded-3xl p-4 sm:p-5 shadow-2xs group">
            <div class="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <!-- Sisi Kiri: Identitas Supplier -->
                <div class="flex items-start gap-3.5 min-w-0">
                    <div class="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center text-sm sm:text-base font-black shrink-0 border shadow-xs" style="background: rgba(var(--color-primary-rgb), 0.1); color: var(--color-primary); border-color: rgba(var(--color-primary-rgb), 0.25)">
                        ${s.code ? esc(s.code.substring(0, 3).toUpperCase()) : '<i class="fa-solid fa-truck-field"></i>'}
                    </div>

                    <div class="min-w-0 flex-1">
                        <div class="flex items-center gap-2 flex-wrap">
                            <h4 class="font-black text-sm sm:text-base text-slate-800 dark:text-white truncate tracking-tight">${esc(s.name)}</h4>
                            ${s.code ? `<span class="px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-700/70 text-slate-600 dark:text-slate-300 text-[10px] font-mono font-bold border border-slate-200/60 dark:border-slate-700">${esc(s.code)}</span>` : ''}
                            <span class="px-2 py-0.5 rounded-md primary-bg-soft primary-text text-[10px] font-bold border primary-border">${esc(termLabelMap[s.defaultTerms] || 'Cash')}</span>
                        </div>

                        <div class="flex items-center gap-3 text-xs text-slate-500 dark:text-slate-400 mt-1 flex-wrap">
                            ${s.salesName ? `<span><i class="fa-solid fa-user-tie text-[var(--color-primary)] mr-1"></i>${esc(s.salesName)}</span>` : ''}
                            ${s.phone ? `<a href="https://wa.me/${cleanPhone}" target="_blank" onclick="event.stopPropagation();" class="text-emerald-600 dark:text-emerald-400 font-bold hover:underline flex items-center gap-1"><i class="fa-brands fa-whatsapp"></i>+${cleanPhone}</a>` : ''}
                            ${s.bankName && s.bankAccount ? `<span><i class="fa-solid fa-credit-card text-[var(--color-primary)] mr-1"></i>${esc(s.bankName)}: <b class="font-mono text-slate-700 dark:text-slate-300">${esc(s.bankAccount)}</b></span>` : ''}
                        </div>

                        ${s.address ? `<p class="text-[11px] text-slate-400 truncate mt-1 max-w-lg"><i class="fa-solid fa-location-dot mr-1 text-rose-500"></i>${esc(s.address)}</p>` : ''}
                    </div>
                </div>

                <!-- Sisi Kanan: Statistik Cepat & Tombol Aksi -->
                <div class="flex flex-wrap sm:flex-nowrap items-center justify-between md:justify-end gap-3 pt-3 md:pt-0 border-t md:border-t-0 border-slate-100 dark:border-slate-700/60">
                    <div class="flex items-center gap-4 text-right">
                        <div class="text-left md:text-right">
                            <span class="block text-[9px] font-bold uppercase tracking-widest text-slate-400">Produk</span>
                            <span class="text-xs sm:text-sm font-black text-slate-700 dark:text-slate-200">
                                <b class="text-teal-600 dark:text-teal-400">${suppliedProducts.length}</b> Macam
                            </span>
                        </div>

                        <div class="text-right">
                            <span class="block text-[9px] font-bold uppercase tracking-widest ${debt > 0 ? 'text-amber-500' : 'text-slate-400'}">Hutang Usaha</span>
                            <span class="text-xs sm:text-sm font-black ${debt > 0 ? 'text-amber-600 dark:text-amber-400' : 'text-emerald-600 dark:text-emerald-400'}">
                                ${debt > 0 ? fCur(debt) : '<span class="text-[11px] font-bold text-emerald-500">Lunas / Rp 0</span>'}
                            </span>
                        </div>
                    </div>

                    <div class="flex items-center gap-1.5 ml-auto md:ml-2">
                        <!-- Tombol WA Sales Langsung -->
                        ${cleanPhone ? `
                            <button 
                                onclick="event.stopPropagation(); window.openSupplierWhatsApp('${cleanPhone}', '${esc(s.name)}', '${esc(s.salesName || '')}')" 
                                class="w-9 h-9 rounded-xl bg-emerald-50 hover:bg-emerald-500 hover:text-white dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800 flex items-center justify-center transition-all active:scale-95 shadow-2xs cursor-pointer" 
                                title="Chat WhatsApp Sales"
                            >
                                <i class="fa-brands fa-whatsapp text-sm"></i>
                            </button>
                        ` : ''}

                        <!-- Tombol Buat PO Langsung untuk Supplier Ini -->
                        <button 
                            onclick="event.stopPropagation(); window.quickCreatePOForSupplier('${s.id}')" 
                            class="px-3 h-9 rounded-xl primary-bg-soft primary-text border primary-border hover:primary-bg hover:text-white font-bold text-xs flex items-center gap-1.5 transition-all active:scale-95 shadow-2xs cursor-pointer" 
                            title="Buat Order Kulakan Produk ke Supplier Ini"
                        >
                            <i class="fa-solid fa-cart-flatbed text-xs"></i>
                            <span class="hidden sm:inline">Order PO</span>
                        </button>

                        <!-- Tombol Lihat Profil & Katalog Lengkap -->
                        <button 
                            onclick="window.openSupplierDetailModal('${s.id}')" 
                            class="px-3.5 h-9 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-700/80 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 border border-slate-200/80 dark:border-slate-600 font-bold text-xs transition-all active:scale-95 shadow-2xs flex items-center gap-1.5 cursor-pointer"
                            title="Lihat Daftar Barang yang Disuplai & Histori PO"
                        >
                            <i class="fa-solid fa-layer-group text-xs" style="color:var(--color-primary)"></i>
                            <span>Detail</span>
                        </button>

                        <!-- Tombol Edit Data Supplier -->
                        <button 
                            onclick="event.stopPropagation(); window.openSupplierFormModal('${s.id}')" 
                            class="w-9 h-9 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-700/80 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 border border-slate-200/80 dark:border-slate-600 flex items-center justify-center transition-all active:scale-95 shadow-2xs cursor-pointer" 
                            title="Edit Data Rekanan"
                        >
                            <i class="fa-solid fa-pen text-xs"></i>
                        </button>

                        <!-- Tombol Hapus Supplier -->
                        <button 
                            onclick="event.stopPropagation(); window.deleteSupplier('${s.id}')" 
                            class="w-9 h-9 rounded-xl bg-rose-50 hover:bg-rose-500 hover:text-white dark:bg-rose-950/40 text-rose-500 border border-rose-200 dark:border-rose-900 flex items-center justify-center transition-all active:scale-95 shadow-2xs cursor-pointer" 
                            title="Hapus Rekanan"
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
 * Filter pencarian supplier
 */
window.handleSupplierSearch = (val) => {
    supplierSearchQuery = val || '';
    renderSuppliersView();
};

/**
 * Filter toggle hutang
 */
window.toggleSupplierFilter = () => {
    activeSupplierTab = activeSupplierTab === 'all' ? 'has_debt' : 'all';
    renderSuppliersView();
};

/**
 * 1-Klik Kirim WhatsApp ke Sales Supplier
 */
window.openSupplierWhatsApp = (phone, supplierName, salesName) => {
    const sapaan = salesName ? `Halo Pak/Bu ${salesName}` : `Halo Tim Sales ${supplierName}`;
    const text = `${sapaan} dari *${appData.store?.name || 'Toko Putri'}*.\nKami ingin menanyakan ketersediaan stok & mengajukan order barang. Mohon info update pricelist / ketersediaan barang ya. Terima kasih! 🙏`;
    openWhatsApp(phone, text);
};

/**
 * Modal Tambah / Edit Supplier
 */
window.openSupplierFormModal = (supplierId = null) => {
    ensureSupplierModals();
    const suppliers = appData.suppliers || [];
    const isEdit = !!supplierId;
    const s = isEdit ? suppliers.find(x => String(x.id) === String(supplierId)) || {} : {
        code: 'SUP-' + Math.floor(100 + Math.random() * 900),
        defaultTerms: 'tempo_14'
    };

    const modal = el('modal-supplier-form');
    const box = el('modal-supplier-form-box');
    const content = el('modal-supplier-form-content');
    if (!modal || !content) return;

    setH('modal-supplier-form-content', `
        <!-- Pull Indicator for Mobile Bottom Sheet -->
        <div class="pull-indicator sm:hidden"></div>

        <div class="px-5 sm:px-6 pt-3 sm:pt-5 pb-4 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between shrink-0">
            <div class="flex items-center gap-3">
                <div class="w-10 h-10 rounded-2xl primary-bg-soft primary-text flex items-center justify-center text-lg shrink-0 aspect-square shadow-xs">
                    <i class="fa-solid ${isEdit ? 'fa-pen-to-square' : 'fa-truck-field'}"></i>
                </div>
                <div>
                    <h3 class="font-black text-base sm:text-lg text-slate-800 dark:text-white tracking-tight">${isEdit ? 'Edit Data Rekanan / Supplier' : 'Daftarkan Supplier Baru'}</h3>
                    <p class="text-xs text-slate-500 dark:text-slate-400">Master database pabrik, distributor, dan rekanan pengadaan barang toko</p>
                </div>
            </div>
            <button onclick="window.closeSupplierFormModal()" class="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 hover:bg-rose-100 hover:text-rose-500 dark:hover:bg-rose-950/40 dark:hover:text-rose-400 flex items-center justify-center transition-all cursor-pointer">
                <i class="fa-solid fa-xmark text-sm"></i>
            </button>
        </div>

        <form id="supplier-editor-form" onsubmit="window.saveSupplierForm(event, '${isEdit ? s.id : ''}')" class="flex-1 flex flex-col overflow-hidden">
            <div class="hide-scrollbar p-5 sm:p-6 overflow-y-auto flex-1 space-y-4">
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                        <label class="block text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1.5">Nama Perusahaan / Supplier *</label>
                        <input type="text" id="sf-name" required value="${esc(s.name || '')}" placeholder="Contoh: PT Semen Gresik Abadi" class="admin-input bg-slate-50/90 dark:bg-slate-800/60 border border-slate-200/90 dark:border-slate-700/80 rounded-xl">
                    </div>

                    <div>
                        <label class="block text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1.5">Kode Supplier</label>
                        <input type="text" id="sf-code" value="${esc(s.code || '')}" placeholder="Contoh: SUP-SGA" class="admin-input bg-slate-50/90 dark:bg-slate-800/60 border border-slate-200/90 dark:border-slate-700/80 rounded-xl font-mono">
                    </div>

                    <div>
                        <label class="block text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1.5">Nama Sales / PIC Toko</label>
                        <input type="text" id="sf-salesName" value="${esc(s.salesName || '')}" placeholder="Nama kontak sales lapangan" class="admin-input bg-slate-50/90 dark:bg-slate-800/60 border border-slate-200/90 dark:border-slate-700/80 rounded-xl">
                    </div>

                    <div>
                        <label class="block text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1.5">No WhatsApp Sales *</label>
                        <input type="tel" id="sf-phone" required value="${esc(s.phone || '')}" placeholder="Contoh: 081234567890" class="admin-input bg-slate-50/90 dark:bg-slate-800/60 border border-slate-200/90 dark:border-slate-700/80 rounded-xl">
                    </div>

                    <div>
                        <label class="block text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1.5">Termin Pembayaran Standar</label>
                        <select id="sf-defaultTerms" class="admin-input bg-slate-50/90 dark:bg-slate-800/60 border border-slate-200/90 dark:border-slate-700/80 rounded-xl cursor-pointer font-bold">
                            <option value="cash" ${s.defaultTerms === 'cash' ? 'selected' : ''}>Cash / Tunai Saat Kirim</option>
                            <option value="tempo_7" ${s.defaultTerms === 'tempo_7' ? 'selected' : ''}>Tempo 7 Hari</option>
                            <option value="tempo_14" ${s.defaultTerms === 'tempo_14' ? 'selected' : ''}>Tempo 14 Hari (2 Minggu)</option>
                            <option value="tempo_30" ${s.defaultTerms === 'tempo_30' ? 'selected' : ''}>Tempo 30 Hari (1 Bulan)</option>
                            <option value="tempo_60" ${s.defaultTerms === 'tempo_60' ? 'selected' : ''}>Tempo 60 Hari</option>
                            <option value="konsinyasi" ${s.defaultTerms === 'konsinyasi' ? 'selected' : ''}>Konsinyasi (Titip Jual Laku Bayar)</option>
                        </select>
                    </div>

                    <div>
                        <label class="block text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1.5">Email (Opsional)</label>
                        <input type="email" id="sf-email" value="${esc(s.email || '')}" placeholder="sales@perusahaan.com" class="admin-input bg-slate-50/90 dark:bg-slate-800/60 border border-slate-200/90 dark:border-slate-700/80 rounded-xl">
                    </div>
                </div>

                <!-- Bagian Rekening Bank untuk Pembayaran Hutang -->
                <div class="p-4 rounded-2xl bg-slate-50/80 dark:bg-slate-800/40 border border-slate-200/90 dark:border-slate-700/60 space-y-3">
                    <p class="text-xs font-bold text-slate-700 dark:text-slate-200 flex items-center gap-2">
                        <i class="fa-solid fa-credit-card text-[var(--color-primary)]"></i>
                        <span>Rekening Pembayaran Supplier (Untuk Transfer Kulakan &amp; Cicilan)</span>
                    </p>
                    <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        <div>
                            <label class="block text-[9px] font-bold uppercase text-slate-400 mb-1">Nama Bank</label>
                            <input type="text" id="sf-bankName" value="${esc(s.bankName || '')}" placeholder="BCA / Mandiri / BRI" class="admin-input bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl">
                        </div>
                        <div>
                            <label class="block text-[9px] font-bold uppercase text-slate-400 mb-1">Nomor Rekening</label>
                            <input type="text" id="sf-bankAccount" value="${esc(s.bankAccount || '')}" placeholder="1234567890" class="admin-input bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl font-mono">
                        </div>
                        <div>
                            <label class="block text-[9px] font-bold uppercase text-slate-400 mb-1">Atas Nama (A/N)</label>
                            <input type="text" id="sf-bankHolder" value="${esc(s.bankHolder || '')}" placeholder="PT / Nama Pemilik" class="admin-input bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl">
                        </div>
                    </div>
                </div>

                <div>
                    <label class="block text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1.5">Alamat Kantor / Gudang Supplier</label>
                    <textarea id="sf-address" rows="2" placeholder="Alamat lengkap supplier..." class="admin-input bg-slate-50/90 dark:bg-slate-800/60 border border-slate-200/90 dark:border-slate-700/80 rounded-xl resize-none">${esc(s.address || '')}</textarea>
                </div>

                <div>
                    <label class="block text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1.5">Catatan Khusus (Syarat Order / Jadwal Armada)</label>
                    <textarea id="sf-notes" rows="2" placeholder="Minimal order 50 sak, jadwal kirim tiap hari Selasa & Kamis..." class="admin-input bg-slate-50/90 dark:bg-slate-800/60 border border-slate-200/90 dark:border-slate-700/80 rounded-xl resize-none">${esc(s.notes || '')}</textarea>
                </div>
            </div>

            <!-- Sticky Action Footer on Mobile & Desktop -->
            <div class="p-4 sm:p-5 border-t border-slate-100 dark:border-slate-800 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shrink-0 flex items-center justify-end gap-2.5" style="padding-bottom: max(1rem, env(safe-area-inset-bottom))">
                <button type="button" onclick="window.closeSupplierFormModal()" class="px-5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 font-bold text-xs hover:bg-slate-100 dark:hover:bg-slate-800 transition-all cursor-pointer">
                    Batal
                </button>
                <button type="submit" class="px-6 py-2.5 rounded-xl primary-bg text-white font-bold text-xs shadow-glow transition-all active:scale-95 cursor-pointer">
                    <i class="fa-solid fa-floppy-disk mr-1.5"></i> Simpan Data Supplier
                </button>
            </div>
        </form>
    `);

    openModalAnim(modal, box);
};

/**
 * Tutup Modal Form Supplier
 */
window.closeSupplierFormModal = () => {
    const modal = el('modal-supplier-form');
    const box = el('modal-supplier-form-box');
    if (!modal) return;
    closeModalAnim(modal, box);
};

/**
 * Simpan Form Supplier
 */
window.saveSupplierForm = async (e, existingId) => {
    e.preventDefault();
    sLoad('Menyimpan Data Supplier...');

    try {
        const name = (el('sf-name')?.value || '').trim();
        const code = (el('sf-code')?.value || '').trim();
        const salesName = (el('sf-salesName')?.value || '').trim();
        let phone = (el('sf-phone')?.value || '').trim();
        const defaultTerms = el('sf-defaultTerms')?.value || 'tempo_14';
        const email = (el('sf-email')?.value || '').trim();
        const bankName = (el('sf-bankName')?.value || '').trim();
        const bankAccount = (el('sf-bankAccount')?.value || '').trim();
        const bankHolder = (el('sf-bankHolder')?.value || '').trim();
        const address = (el('sf-address')?.value || '').trim();
        const notes = (el('sf-notes')?.value || '').trim();

        if (!name) {
            hLoad();
            return showToast('Nama supplier wajib diisi!');
        }

        if (phone) {
            phone = normalizeWA(phone);
        }

        if (!appData.suppliers) appData.suppliers = [];

        const id = existingId || ('sup_' + Date.now().toString(36) + '_' + Math.random().toString(36).substring(2, 6));

        const supplierData = {
            id,
            name,
            code,
            salesName,
            phone,
            defaultTerms,
            email,
            bankName,
            bankAccount,
            bankHolder,
            address,
            notes,
            updatedAt: new Date().toISOString()
        };

        if (!existingId) {
            supplierData.createdAt = new Date().toISOString();
            appData.suppliers.unshift(supplierData);
        } else {
            const idx = appData.suppliers.findIndex(x => String(x.id) === String(existingId));
            if (idx > -1) {
                appData.suppliers[idx] = { ...appData.suppliers[idx], ...supplierData };
            } else {
                appData.suppliers.push(supplierData);
            }
        }

        // Simpan ke Firestore dan localStorage via saveApp
        await saveApp(['suppliers']);

        hLoad();
        window.closeSupplierFormModal();
        showToast(existingId ? 'Data supplier diperbarui! ✨' : 'Supplier baru berhasil ditambahkan! 🎉');
        renderSuppliersView();
    } catch (err) {
        hLoad();
        console.error('Gagal menyimpan supplier:', err);
        showToast('Gagal menyimpan: ' + (err.message || ''));
    }
};

/**
 * Hapus Supplier
 */
window.deleteSupplier = (supplierId) => {
    const suppliers = appData.suppliers || [];
    const target = suppliers.find(s => String(s.id) === String(supplierId));
    if (!target) return;

    // Cek apakah ada produk terhubung
    const linkedProducts = (appData.products || []).filter(p => String(p.supplierId) === String(supplierId));
    const linkedPOs = (appData.purchases || []).filter(po => String(po.supplierId) === String(supplierId));

    let warningMsg = `Hapus supplier <b>${esc(target.name)}</b>?`;
    if (linkedProducts.length > 0) {
        warningMsg += `<br><span class="text-amber-500 font-bold text-xs mt-1 block">Perhatian: Ada ${linkedProducts.length} produk di etalase yang terhubung ke supplier ini. Link supplier pada produk tersebut akan dilepas.</span>`;
    }
    if (linkedPOs.length > 0) {
        warningMsg += `<br><span class="text-rose-500 font-bold text-xs mt-1 block">Terdapat ${linkedPOs.length} riwayat pesanan kulakan (PO) terkait supplier ini.</span>`;
    }

    showConfirm(
        'Hapus Supplier',
        warningMsg,
        async () => {
            sLoad('Menghapus...');
            try {
                // Hapus dari list
                appData.suppliers = (appData.suppliers || []).filter(s => String(s.id) !== String(supplierId));

                // Lepas link supplierId pada produk terkait
                let productsUpdated = false;
                (appData.products || []).forEach(p => {
                    if (String(p.supplierId) === String(supplierId)) {
                        delete p.supplierId;
                        productsUpdated = true;
                    }
                });

                await saveApp(productsUpdated ? ['suppliers', 'products'] : ['suppliers']);

                hLoad();
                showToast('Supplier berhasil dihapus.');
                renderSuppliersView();
            } catch (err) {
                hLoad();
                console.error('Gagal menghapus supplier:', err);
                showToast('Gagal menghapus: ' + err.message);
            }
        },
        'Hapus Permanen',
        true
    );
};

/**
 * Modal Detail Profil Supplier & 3 Tab (Katalog Disuplai, PO, Kartu Hutang)
 */
window.openSupplierDetailModal = (supplierId, initialTab = 'products') => {
    ensureSupplierModals();
    currentViewingSupplierId = supplierId;
    currentDetailModalTab = initialTab;

    const suppliers = appData.suppliers || [];
    const s = suppliers.find(x => String(x.id) === String(supplierId));
    if (!s) return showToast('Supplier tidak ditemukan!');

    const modal = el('modal-supplier-detail');
    const box = el('modal-supplier-detail-box');
    const content = el('modal-supplier-detail-content');
    if (!modal || !content) return;

    renderSupplierDetailModalContent(s);

    openModalAnim(modal, box);
};

/**
 * Tutup Modal Detail Supplier
 */
window.closeSupplierDetailModal = () => {
    const modal = el('modal-supplier-detail');
    const box = el('modal-supplier-detail-box');
    if (!modal) return;
    closeModalAnim(modal, box);
};

/**
 * Switch Tab di Dalam Modal Detail Supplier
 */
window.switchSupplierDetailTab = (tabName) => {
    currentDetailModalTab = tabName;
    const suppliers = appData.suppliers || [];
    const s = suppliers.find(x => String(x.id) === String(currentViewingSupplierId));
    if (s) renderSupplierDetailModalContent(s);
};

/**
 * Render Konten Modal Detail Supplier
 */
const renderSupplierDetailModalContent = (s) => {
    const content = el('modal-supplier-detail-content');
    if (!content) return;

    const products = appData.products || [];
    const purchases = appData.purchases || [];

    // 1. Barang yang disuplai oleh supplier ini
    const suppliedProducts = products.filter(p => String(p.supplierId) === String(s.id));

    // 2. Riwayat PO kulakan dari supplier ini
    const supplierPurchases = purchases.filter(po => String(po.supplierId) === String(s.id));
    supplierPurchases.sort((a, b) => new Date(b.date || b.createdAt || 0) - new Date(a.date || a.createdAt || 0));

    // 3. Hutang tempo ke supplier ini
    const tempoPurchases = supplierPurchases.filter(po => po.paymentType === 'tempo');
    const totalDebt = tempoPurchases.reduce((acc, po) => {
        if (po.paymentStatus !== 'lunas') {
            const unpaid = (parseFloat(po.total) || 0) - (parseFloat(po.amountPaid) || 0);
            return acc + (unpaid > 0 ? unpaid : 0);
        }
        return acc;
    }, 0);

    const cleanPhone = s.phone ? normalizeWA(s.phone) : '';

    setH('modal-supplier-detail-content', `
        <!-- DRAG PULL INDICATOR (NATIVE MOBILE SHEET) -->
        <div class="pull-indicator"></div>

        <!-- HEADER MODAL: PROFIL SUPPLIER -->
        <div class="p-5 sm:p-7 border-b border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/40">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div class="flex items-start gap-4">
                    <div class="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl primary-bg-soft primary-text border primary-border flex items-center justify-center text-xl sm:text-2xl shrink-0 font-black shadow-inner">
                        ${s.code ? esc(s.code.substring(0, 3).toUpperCase()) : '<i class="fa-solid fa-truck-field"></i>'}
                    </div>
                    <div>
                        <div class="flex items-center gap-2 flex-wrap">
                            <h3 class="font-black text-lg sm:text-xl text-slate-800 dark:text-white tracking-tight">${esc(s.name)}</h3>
                            ${s.code ? `<span class="px-2 py-0.5 rounded-md bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs font-mono font-bold">${esc(s.code)}</span>` : ''}
                        </div>
                        <div class="flex items-center gap-3 text-xs text-slate-500 dark:text-slate-400 mt-1 flex-wrap">
                            ${s.salesName ? `<span><i class="fa-solid fa-user-tie text-[var(--color-primary)] mr-1"></i>Sales: <b>${esc(s.salesName)}</b></span>` : ''}
                            ${cleanPhone ? `<a href="https://wa.me/${cleanPhone}" target="_blank" class="text-emerald-600 dark:text-emerald-400 font-bold hover:underline"><i class="fa-brands fa-whatsapp mr-1"></i>+${cleanPhone}</a>` : ''}
                            ${s.bankName && s.bankAccount ? `<span><i class="fa-solid fa-credit-card text-blue-500 mr-1"></i>${esc(s.bankName)}: <b class="font-mono text-slate-700 dark:text-slate-200">${esc(s.bankAccount)}</b> a/n ${esc(s.bankHolder || '-')}</span>` : ''}
                        </div>
                        ${s.address ? `<p class="text-xs text-slate-400 mt-1"><i class="fa-solid fa-location-dot text-rose-500 mr-1"></i>${esc(s.address)}</p>` : ''}
                    </div>
                </div>

                <div class="flex items-center gap-2 self-end sm:self-center">
                    <button onclick="window.quickCreatePOForSupplier('${s.id}')" class="px-4 py-2.5 rounded-xl primary-bg text-white font-bold text-xs flex items-center gap-2 shadow-glow active:scale-95 transition-all">
                        <i class="fa-solid fa-plus text-xs"></i>
                        <span>Buat Order (PO)</span>
                    </button>
                    <button onclick="window.closeSupplierDetailModal()" class="w-9 h-9 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-500 hover:text-slate-800 dark:hover:text-white flex items-center justify-center transition-all cursor-pointer">
                        <i class="fa-solid fa-xmark"></i>
                    </button>
                </div>
            </div>

            <!-- TAB NAVIGASI MODAL -->
            <div class="flex items-center gap-2 mt-6 border-b border-slate-200 dark:border-slate-700 overflow-x-auto hide-scrollbar">
                <button 
                    onclick="window.switchSupplierDetailTab('products')" 
                    class="px-4 py-2.5 font-bold text-xs border-b-2 transition-all flex items-center gap-2 whitespace-nowrap ${currentDetailModalTab === 'products' ? 'border-[var(--color-primary)] text-[var(--color-primary)]' : 'border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'}"
                >
                    <i class="fa-solid fa-boxes-stacked"></i>
                    <span>Katalog Barang Disuplai (${suppliedProducts.length})</span>
                </button>

                <button 
                    onclick="window.switchSupplierDetailTab('orders')" 
                    class="px-4 py-2.5 font-bold text-xs border-b-2 transition-all flex items-center gap-2 whitespace-nowrap ${currentDetailModalTab === 'orders' ? 'border-[var(--color-primary)] text-[var(--color-primary)]' : 'border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'}"
                >
                    <i class="fa-solid fa-cart-flatbed"></i>
                    <span>Riwayat Order PO (${supplierPurchases.length})</span>
                </button>

                <button 
                    onclick="window.switchSupplierDetailTab('debt')" 
                    class="px-4 py-2.5 font-bold text-xs border-b-2 transition-all flex items-center gap-2 whitespace-nowrap ${currentDetailModalTab === 'debt' ? 'border-[var(--color-primary)] text-[var(--color-primary)]' : 'border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'}"
                >
                    <i class="fa-solid fa-file-invoice-dollar"></i>
                    <span>Kartu Hutang Usaha ${totalDebt > 0 ? `<span class="px-1.5 py-0.5 rounded-full bg-amber-500 text-white text-[9px] font-black">${fCur(totalDebt)}</span>` : ''}</span>
                </button>
            </div>
        </div>

        <!-- ISI KONTEN TAB -->
        <div class="p-5 sm:p-6">
            ${currentDetailModalTab === 'products' ? renderSuppliedProductsTab(suppliedProducts, s) : ''}
            ${currentDetailModalTab === 'orders' ? renderSupplierOrdersTab(supplierPurchases, s) : ''}
            ${currentDetailModalTab === 'debt' ? renderSupplierDebtTab(tempoPurchases, totalDebt, s) : ''}
        </div>
    `);
};

/**
 * TAB 1: Daftar Barang yang Disuplai oleh Supplier Ini
 */
const renderSuppliedProductsTab = (products, s) => {
    if (products.length === 0) {
        return `
            <div class="text-center py-12 text-slate-400">
                <div class="w-14 h-14 rounded-2xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-2xl mx-auto mb-3 text-slate-400">
                    <i class="fa-solid fa-box-open"></i>
                </div>
                <p class="font-bold text-sm text-slate-700 dark:text-slate-300">Belum Ada Produk yang Dihubungkan</p>
                <p class="text-xs text-slate-400 mt-1 max-w-md mx-auto">Saat Anda menambahkan atau mengedit produk di menu Katalog Produk, pilih <b>${esc(s.name)}</b> pada field Rekanan/Supplier Asal.</p>
                <button onclick="window.closeSupplierDetailModal(); if(window.openAdminTab) window.openAdminTab('products');" class="mt-4 px-4 py-2 rounded-xl primary-bg-soft primary-text font-bold text-xs">
                    <i class="fa-solid fa-box-archive mr-1.5"></i> Buka Katalog Produk Toko
                </button>
            </div>
        `;
    }

    return `
        <div class="space-y-4">
            <div class="flex items-center justify-between">
                <p class="text-xs font-bold text-slate-500 dark:text-slate-400">Total <b>${products.length}</b> macam produk toko berasal dari supplier ini:</p>
                <button onclick="window.quickCreatePOForSupplier('${s.id}')" class="px-3 py-1.5 rounded-xl primary-bg text-white font-bold text-xs flex items-center gap-1.5 shadow-2xs">
                    <i class="fa-solid fa-cart-plus text-xs"></i>
                    <span>Kulakan Ulang Produk Ini</span>
                </button>
            </div>

            <div class="divide-y divide-slate-100 dark:divide-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl overflow-hidden bg-white dark:bg-slate-800">
                ${products.map(p => {
                    const coverThumb = renderProductCoverHtml(p, { size: 'thumb' });
                    const imgHtml = p.img 
                        ? `<img src="${esc(p.img)}" alt="${esc(p.name)}" class="w-12 h-12 object-contain rounded-xl p-1 bg-white border border-slate-100 dark:border-slate-700" onerror="this.onerror=null;this.style.display='none';if(this.nextElementSibling)this.nextElementSibling.style.display='flex';"><div class="w-12 h-12" style="display:none">${coverThumb}</div>`
                        : `<div class="w-12 h-12">${coverThumb}</div>`;

                    const currentStock = (p.variants && p.variants.length) 
                        ? p.variants.reduce((acc, v) => acc + (parseFloat(v.stock) || 0), 0)
                        : (parseFloat(p.stock) || 0);

                    const margin = (p.price && p.hpp) ? (p.price - p.hpp) : 0;
                    const marginPct = (p.price && p.hpp && p.hpp > 0) ? Math.round((margin / p.hpp) * 100) : 0;

                    return `
                        <div class="p-3.5 sm:p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors">
                            <div class="flex items-center gap-3 min-w-0">
                                <div class="shrink-0">${imgHtml}</div>
                                <div class="min-w-0">
                                    <h5 class="font-bold text-xs sm:text-sm text-slate-800 dark:text-slate-100 truncate">${esc(p.name)}</h5>
                                    <div class="flex items-center gap-2 text-[10px] text-slate-400 mt-0.5 flex-wrap">
                                        ${p.sku ? `<span class="font-mono bg-slate-100 dark:bg-slate-700 px-1.5 py-0.5 rounded text-slate-600 dark:text-slate-300">SKU: ${esc(p.sku)}</span>` : ''}
                                        ${p.category ? `<span>${esc(p.category)}</span>` : ''}
                                        <span class="font-bold ${currentStock <= 2 ? 'text-rose-500' : 'text-slate-500'}"><i class="fa-solid fa-boxes-stacked mr-1"></i>Stok: ${currentStock}</span>
                                    </div>
                                </div>
                            </div>

                            <div class="flex items-center justify-between sm:justify-end gap-5 text-right pl-15 sm:pl-0">
                                <div>
                                    <span class="block text-[9px] font-bold uppercase text-slate-400">Modal (HPP)</span>
                                    <span class="text-xs font-bold text-amber-600 dark:text-amber-400">${p.hpp ? fCur(p.hpp) : '<span class="text-slate-300">-</span>'}</span>
                                </div>

                                <div>
                                    <span class="block text-[9px] font-bold uppercase text-slate-400">Harga Jual</span>
                                    <span class="text-xs font-bold text-[var(--color-primary)]">${fCur(p.price)}</span>
                                </div>

                                <div>
                                    <span class="block text-[9px] font-bold uppercase text-slate-400">Margin Laba</span>
                                    <span class="text-xs font-bold ${margin > 0 ? 'text-emerald-500' : 'text-slate-400'}">${margin > 0 ? `+${fCur(margin)} (${marginPct}%)` : '-'}</span>
                                </div>

                                <button onclick="window.closeSupplierDetailModal(); if(window.oAEd) window.oAEd('products', '${p.id}');" class="w-8 h-8 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 dark:hover:bg-slate-600 text-slate-600 dark:text-slate-300 flex items-center justify-center transition-all" title="Edit Produk">
                                    <i class="fa-solid fa-pen text-xs"></i>
                                </button>
                            </div>
                        </div>
                    `;
                }).join('')}
            </div>
        </div>
    `;
};

/**
 * TAB 2: Riwayat Purchase Orders dari Supplier Ini
 */
const renderSupplierOrdersTab = (purchases, s) => {
    if (purchases.length === 0) {
        return `
            <div class="text-center py-12 text-slate-400">
                <div class="w-14 h-14 rounded-2xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-2xl mx-auto mb-3 text-slate-400">
                    <i class="fa-solid fa-receipt"></i>
                </div>
                <p class="font-bold text-sm text-slate-700 dark:text-slate-300">Belum Ada Riwayat Order PO</p>
                <p class="text-xs text-slate-400 mt-1 max-w-md mx-auto">Mulai buat surat pesanan kulakan (Purchase Order) untuk mencatat barang masuk, harga modal, dan termin pembayaran.</p>
                <button onclick="window.quickCreatePOForSupplier('${s.id}')" class="mt-4 px-4 py-2 rounded-xl primary-bg text-white font-bold text-xs shadow-glow">
                    <i class="fa-solid fa-cart-flatbed mr-1.5"></i> Buat Order PO Pertama
                </button>
            </div>
        `;
    }

    return `
        <div class="space-y-3">
            ${purchases.map(po => {
                const statusBadge = {
                    'ordered': '<span class="px-2.5 py-1 rounded-full bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-300 text-[10px] font-bold border border-blue-200 dark:border-blue-800"><i class="fa-solid fa-clock mr-1"></i>Dipesan</span>',
                    'received': '<span class="px-2.5 py-1 rounded-full bg-teal-50 dark:bg-teal-950/40 text-teal-600 dark:text-teal-300 text-[10px] font-bold border border-teal-200 dark:border-teal-800"><i class="fa-solid fa-boxes-stacked mr-1"></i>Barang Diterima</span>',
                    'completed': '<span class="px-2.5 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-300 text-[10px] font-bold border border-emerald-200 dark:border-emerald-800"><i class="fa-solid fa-check-double mr-1"></i>Selesai / Lunas</span>',
                    'cancelled': '<span class="px-2.5 py-1 rounded-full bg-rose-50 dark:bg-rose-950/40 text-rose-600 dark:text-rose-300 text-[10px] font-bold border border-rose-200 dark:border-rose-800"><i class="fa-solid fa-ban mr-1"></i>Dibatalkan</span>'
                }[po.status || 'ordered'];

                const paymentBadge = po.paymentType === 'tempo' ? `
                    <span class="px-2 py-0.5 rounded bg-amber-50 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400 text-[10px] font-bold border border-amber-200 dark:border-amber-800">
                        Tempo ${po.tempoDays ? `${po.tempoDays} Hari` : ''} (${po.paymentStatus === 'lunas' ? 'Lunas' : 'Belum Lunas'})
                    </span>
                ` : `<span class="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 text-[10px] font-bold uppercase">${esc(po.paymentType || 'Cash')}</span>`;

                return `
                    <div class="bg-white/95 dark:bg-slate-800/90 p-4 border border-slate-200/90 dark:border-slate-700/80 hover:border-[var(--color-primary)]/40 transition-all rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-2xs">
                        <div>
                            <div class="flex items-center gap-2 flex-wrap">
                                <span class="font-mono font-black text-xs text-slate-800 dark:text-white">${esc(po.poNumber || po.id)}</span>
                                ${statusBadge}
                                ${paymentBadge}
                            </div>
                            <p class="text-[11px] text-slate-400 mt-1 flex items-center gap-3">
                                <span><i class="fa-regular fa-calendar mr-1"></i>${formatDateIndo(po.date || po.createdAt)}</span>
                                <span><i class="fa-solid fa-box mr-1"></i>${(po.items || []).length} Item Barang</span>
                            </p>
                        </div>

                        <div class="flex items-center justify-between sm:justify-end gap-4">
                            <div class="text-right">
                                <span class="block text-[9px] font-bold uppercase text-slate-400">Total Kulakan</span>
                                <span class="text-sm font-black text-slate-800 dark:text-slate-100">${fCur(po.total)}</span>
                            </div>

                            <button onclick="window.closeSupplierDetailModal(); if(window.openAdminTab) window.openAdminTab('purchases'); setTimeout(() => { window.openPurchaseDetailModal?.('${po.id}'); }, 200);" class="px-3 py-1.5 rounded-xl primary-bg-soft primary-text font-bold text-xs hover:bg-[rgba(var(--color-primary-rgb),0.2)] transition-all">
                                Lihat PO <i class="fa-solid fa-arrow-right text-[10px] ml-1"></i>
                            </button>
                        </div>
                    </div>
                `;
            }).join('')}
        </div>
    `;
};

/**
 * TAB 3: Kartu Hutang Usaha (Accounts Payable)
 */
const renderSupplierDebtTab = (tempoPurchases, totalDebt, s) => {
    const unpaidPurchases = tempoPurchases.filter(po => {
        const unpaid = (parseFloat(po.total) || 0) - (parseFloat(po.amountPaid) || 0);
        return unpaid > 0 && po.paymentStatus !== 'lunas';
    });

    return `
        <div class="space-y-4">
            <!-- RINGKASAN TOTAL HUTANG USAHA -->
            <div class="p-4 sm:p-5 rounded-2xl ${totalDebt > 0 ? 'bg-amber-50/70 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800/60' : 'bg-emerald-50/70 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-800/60'} flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <span class="block text-[10px] font-black uppercase tracking-widest ${totalDebt > 0 ? 'text-amber-600 dark:text-amber-400' : 'text-emerald-600 dark:text-emerald-400'}">Total Hutang Usaha Berjalan</span>
                    <p class="text-2xl font-black ${totalDebt > 0 ? 'text-amber-600 dark:text-amber-400' : 'text-emerald-600 dark:text-emerald-400'} tracking-tight">${fCur(totalDebt)}</p>
                    <p class="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                        ${totalDebt > 0 ? `Ada <b>${unpaidPurchases.length}</b> nota order pembelian tempo yang belum lunas ke supplier ini.` : 'Semua tagihan pembelian ke supplier ini sudah lunas sempurna! ✨'}
                    </p>
                </div>

                ${s.bankAccount ? `
                    <div class="p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 text-xs shrink-0">
                        <span class="block text-[9px] font-bold text-slate-400 uppercase">Rekening Tujuan Transfer:</span>
                        <p class="font-bold text-slate-800 dark:text-white mt-0.5">${esc(s.bankName)}: <b class="font-mono text-base">${esc(s.bankAccount)}</b></p>
                        <p class="text-[10px] text-slate-400">a/n ${esc(s.bankHolder || s.name)}</p>
                    </div>
                ` : ''}
            </div>

            <!-- DAFTAR NOTA TEMPO BELUM LUNAS -->
            <div class="space-y-3">
                <h4 class="font-bold text-xs uppercase tracking-widest text-slate-500">Rincian Nota Tempo &amp; Jatuh Tempo</h4>
                ${unpaidPurchases.length === 0 ? `
                    <div class="p-6 text-center text-slate-400 border border-dashed border-slate-200 dark:border-slate-700 rounded-2xl">
                        <i class="fa-solid fa-circle-check text-2xl text-emerald-500 mb-2"></i>
                        <p class="font-bold text-xs text-slate-600 dark:text-slate-300">Tidak ada tanggungan hutang yang aktif</p>
                    </div>
                ` : unpaidPurchases.map(po => {
                    const unpaid = (parseFloat(po.total) || 0) - (parseFloat(po.amountPaid) || 0);
                    const paid = parseFloat(po.amountPaid) || 0;
                    const dueDate = po.tempoDueDate ? formatDateIndo(po.tempoDueDate) : '-';

                    return `
                        <div class="bg-white/95 dark:bg-slate-800/90 p-4 border border-slate-200/90 dark:border-slate-700/80 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-2xs">
                            <div>
                                <div class="flex items-center gap-2">
                                    <span class="font-mono font-black text-xs text-slate-800 dark:text-white">${esc(po.poNumber || po.id)}</span>
                                    <span class="text-[10px] px-2 py-0.5 rounded bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-300 font-bold">Jatuh Tempo: ${dueDate}</span>
                                </div>
                                <div class="flex items-center gap-4 text-xs text-slate-500 dark:text-slate-400 mt-1">
                                    <span>Total: <b>${fCur(po.total)}</b></span>
                                    <span>Sudah Dibayar: <b class="text-emerald-500">${fCur(paid)}</b></span>
                                    <span>Sisa: <b class="text-amber-500">${fCur(unpaid)}</b></span>
                                </div>
                            </div>

                            <button onclick="window.closeSupplierDetailModal(); if(window.openAdminTab) window.openAdminTab('purchases'); setTimeout(() => { window.openPurchasePaymentModal?.('${po.id}'); }, 200);" class="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-bold text-xs flex items-center gap-1.5 shadow-2xs active:scale-95 transition-all">
                                <i class="fa-solid fa-money-bill-wave text-xs"></i>
                                <span>Bayar / Cicil</span>
                            </button>
                        </div>
                    `;
                }).join('')}
            </div>
        </div>
    `;
};

/**
 * Pintasan Buat PO Cepat untuk Supplier Tertentu
 */
window.quickCreatePOForSupplier = (supplierId) => {
    window.closeSupplierDetailModal?.();
    if (window.openAdminTab) {
        window.openAdminTab('purchases');
        setTimeout(() => {
            if (typeof window.openCreatePOModal === 'function') {
                window.openCreatePOModal(supplierId);
            }
        }, 150);
    }
};

// Expose ke global window
window.renderSuppliersView = renderSuppliersView;
window.computeSupplierMetrics = computeSupplierMetrics;
