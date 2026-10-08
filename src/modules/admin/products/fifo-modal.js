/**
 * ============================================================
 * MODAL ADMIN: PELACAK MULTI-SUPPLIER & ANTREAN BATCH FIFO
 * ============================================================
 * 
 * Fitur:
 * 1. Inspeksi Multi-Supplier terdaftar per produk (harga beli, SKU, status utama).
 * 2. Tambah / Hubungkan supplier baru ke produk secara langsung.
 * 3. Tetapkan Supplier Utama (Primary Supplier) 1-klik.
 * 4. Inspeksi Antrean Batch FIFO (Lot/Batch) secara kronologis dari yang tertua.
 * 5. Simulator Alokasi Penjualan FIFO Realtime (melihat batch mana yang terpotong dan HPP riil).
 * 6. Audit Valuasi Fisik Sisa Gudang (PSAK Standards).
 */

import { db } from '../../../config/firebase.js';
import { appData } from '../../../core/state.js';
import { 
    el, setH, esc, fCur, showToast, showConfirm, sLoad, hLoad, 
    openModalAnim, closeModalAnim 
} from '../../../core/utils.js';
import { 
    normalizeProductInventory, 
    linkSupplierToProduct, 
    setPrimarySupplierForProduct, 
    computeFifoValuation,
    transferStockBetweenLocations
} from '../../../core/fifo-inventory.js';

let activeFifoProductId = null;
let fifoSimulateQty = 1;
let activeFifoTab = 'overview'; // 'overview' | 'ledger'
let activeLedgerFilter = 'all'; // 'all' | 'in' | 'out'

export const switchFifoTab = (tab) => {
    activeFifoTab = tab;
    renderProductFifoContent();
};

export const setLedgerFilter = (filter) => {
    activeLedgerFilter = filter;
    renderProductFifoContent();
};

/**
 * Rekonsiliasi Riwayat Mutasi Stok Produk (Stock Card Ledger)
 */
export const getProductMutationLedger = (prod) => {
    const mutations = [];
    if (!prod) return mutations;
    const prodIdStr = String(prod.id);
    const prodNameClean = String(prod.name || '').trim().toLowerCase();

    // 1. Barang Masuk dari PO Kulakan (Purchases)
    const purchases = appData.purchases || [];
    purchases.forEach(po => {
        const isReceived = po.status === 'received' || po.status === 'completed' || po.receivedAt;
        if (!isReceived) return;

        const items = Array.isArray(po.items) ? po.items : [];
        items.forEach(it => {
            const match = String(it.productId || it.id || '') === prodIdStr || 
                          String(it.name || '').trim().toLowerCase() === prodNameClean;
            if (match) {
                const qty = parseFloat(it.qty || it.receivedQty || 0) || 0;
                if (qty > 0) {
                    mutations.push({
                        type: 'in',
                        source: 'po',
                        date: po.receivedAt || po.date || po.createdAt || Date.now(),
                        refNo: po.poNumber || po.id || 'PO',
                        title: `Penerimaan PO Kulakan #${po.poNumber || po.id}`,
                        qty: qty,
                        unit: it.unit || prod.unit || 'pcs',
                        price: it.buyPrice || it.price || 0,
                        party: po.supplierName || 'Supplier Rekanan',
                        location: it.targetLocation === 'store' ? 'Rak Toko' : 'Gudang Cadangan',
                        notes: po.notes || 'Barang masuk kulakan resmi'
                    });
                }
            }
        });
    });

    // 2. Barang Keluar dari Transaksi Penjualan (Orders / POS)
    const orders = window.gOrds || appData.orders || [];
    orders.forEach(ord => {
        if (ord.status === 'cancelled' || ord.status === 'void') return;

        const items = Array.isArray(ord.items) ? ord.items : [];
        items.forEach(it => {
            const match = String(it.id || it.productId || '') === prodIdStr ||
                          String(it.name || '').trim().toLowerCase() === prodNameClean;
            if (match) {
                const qty = parseFloat(it.qty || it.quantity || 0) || 0;
                if (qty > 0) {
                    mutations.push({
                        type: 'out',
                        source: 'sales',
                        date: ord.createdAt || (ord.dateString ? new Date(ord.dateString).getTime() : Date.now()),
                        refNo: ord.orderId || ord.id || 'ORD',
                        title: `Penjualan ${ord.isPos ? 'Kasir POS' : 'Online'} #${ord.orderId || ord.id}`,
                        qty: qty,
                        unit: it.unit || prod.unit || 'pcs',
                        price: it.price || 0,
                        party: ord.customer?.name || (ord.isPos ? 'Pelanggan Kasir' : 'Pelanggan Toko'),
                        location: 'Rak Toko',
                        notes: ord.payment?.method ? `Metode: ${ord.payment.method.toUpperCase()}` : 'Penjualan'
                    });
                }
            }
        });
    });

    // 3. Mutasi Batch Stok Masuk jika belum ter-cover
    const batches = prod.stockBatches || [];
    batches.forEach(b => {
        const alreadyCovered = mutations.some(m => m.source === 'po' && m.refNo === (b.poNumber || b.batchNo));
        if (!alreadyCovered && (parseFloat(b.initialQty) || 0) > 0) {
            mutations.push({
                type: 'in',
                source: 'batch',
                date: b.receivedAt || Date.now(),
                refNo: b.poNumber || b.batchNo || 'BATCH',
                title: `Batch Stok Masuk #${b.poNumber || b.batchNo || 'LOT'}`,
                qty: parseFloat(b.initialQty) || 0,
                unit: prod.unit || 'pcs',
                price: b.buyPrice || 0,
                party: b.supplierName || 'Pemasok',
                location: b.location === 'store' ? 'Rak Toko' : 'Gudang Cadangan',
                notes: `Sisa batch saat ini: ${b.remainingQty || 0} unit`
            });
        }
    });

    mutations.sort((a, b) => {
        const timeA = new Date(a.date).getTime() || 0;
        const timeB = new Date(b.date).getTime() || 0;
        return timeB - timeA;
    });

    return mutations;
};

/**
 * Pastikan kontainer modal FIFO terpasang di root document.body
 */
export const ensureProductFifoModal = () => {
    if (!el('modal-product-fifo')) {
        const m = document.createElement('div');
        m.id = 'modal-product-fifo';
        m.className = 'fixed inset-0 z-[150] flex hidden items-end sm:items-center justify-center p-0 sm:p-4 bg-slate-950/75 opacity-0 transition-opacity duration-300';
        m.onclick = (e) => { if (e.target === m) window.closeProductFifoModal?.(); };
        m.innerHTML = `
            <div id="modal-product-fifo-box" class="modal-bottom-sheet relative flex max-h-[92dvh] sm:max-h-[88dvh] w-full max-w-4xl translate-y-full sm:translate-y-10 transform flex-col overflow-hidden rounded-t-[2rem] sm:rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-2xl transition-transform duration-300">
                <div id="modal-product-fifo-content" class="flex-1 overflow-y-auto custom-scrollbar flex flex-col"></div>
            </div>
        `;
        document.body.appendChild(m);
    }
};

/**
 * Buka Modal Pelacak Multi-Supplier & Batch FIFO
 */
export const openProductFifoModal = (productId) => {
    ensureProductFifoModal();
    activeFifoProductId = productId;
    fifoSimulateQty = 1;
    activeFifoTab = 'overview';
    activeLedgerFilter = 'all';

    const prod = (appData.products || []).find(p => String(p.id) === String(productId));
    if (!prod) return showToast('Produk tidak ditemukan!');

    // Normalisasi struktur data produk
    normalizeProductInventory(prod, appData.suppliers || []);

    renderProductFifoContent();
    const modal = el('modal-product-fifo');
    const box = el('modal-product-fifo-box');
    if (modal && modal.classList.contains('hidden') && typeof window.pushModalHistory === 'function') {
        window.pushModalHistory('productFifo');
    }
    openModalAnim(modal, box);
};

/**
 * Tutup Modal Pelacak Multi-Supplier & Batch FIFO
 */
export const closeProductFifoModal = (fH = false) => {
    const modal = el('modal-product-fifo');
    const box = el('modal-product-fifo-box');
    if (!modal) return;
    if (!fH && typeof window.requestCloseModal === 'function') {
        window.requestCloseModal('productFifo', false, () => closeModalAnim(modal, box));
    } else {
        closeModalAnim(modal, box);
    }
};

/**
 * Render Tampilan Konten Modal FIFO
 */
export const renderProductFifoContent = () => {
    const box = el('modal-product-fifo-content');
    if (!box) return;

    const prod = (appData.products || []).find(p => String(p.id) === String(activeFifoProductId));
    if (!prod) return;

    normalizeProductInventory(prod, appData.suppliers || []);

    const suppliersList = prod.suppliers || [];
    const stockBatches = prod.stockBatches || [];
    const valuation = computeFifoValuation(prod);
    const activeBatches = stockBatches.filter(b => (parseFloat(b.remainingQty) || 0) > 0);
    const exhaustedBatches = stockBatches.filter(b => (parseFloat(b.remainingQty) || 0) <= 0);

    // Ambil daftar supplier toko yang belum dihubungkan ke produk ini
    const unlinkedSuppliers = (appData.suppliers || []).filter(s => 
        !suppliersList.some(ls => String(ls.supplierId) === String(s.id))
    );

    // Hitung simulasi FIFO
    let simNeed = parseFloat(fifoSimulateQty) || 0;
    let simCost = 0;
    const simBreakdown = [];
    activeBatches.forEach(b => {
        if (simNeed <= 0) return;
        const bRem = parseFloat(b.remainingQty) || 0;
        const take = Math.min(bRem, simNeed);
        const cost = take * (parseFloat(b.buyPrice) || 0);
        simCost += cost;
        simBreakdown.push({
            poNumber: b.poNumber || 'BATCH',
            supplierName: b.supplierName || 'Pemasok',
            qty: take,
            buyPrice: b.buyPrice,
            subtotal: cost
        });
        simNeed -= take;
    });

    if (simNeed > 0) {
        const fbPrice = parseFloat(prod.hpp) || 0;
        const fbCost = simNeed * fbPrice;
        simCost += fbCost;
        simBreakdown.push({
            poNumber: 'STOK DARURAT (DEFICIT)',
            supplierName: 'Estimasi HPP Standar',
            qty: simNeed,
            buyPrice: fbPrice,
            subtotal: fbCost,
            isDeficit: true
        });
    }

    const simUnitCost = fifoSimulateQty > 0 ? Math.round(simCost / fifoSimulateQty) : 0;
    const prodPrice = parseFloat(prod.price) || 0;
    const simTotalRevenue = prodPrice * fifoSimulateQty;
    const simGrossProfit = Math.max(0, simTotalRevenue - simCost);

    // Ambil data mutasi stok produk (PO In, Sales Out, Batch Lot)
    const allMutations = getProductMutationLedger(prod);
    const mutationsIn = allMutations.filter(m => m.type === 'in');
    const mutationsOut = allMutations.filter(m => m.type === 'out');
    const totalIn = mutationsIn.reduce((s, m) => s + m.qty, 0);
    const totalOut = mutationsOut.reduce((s, m) => s + m.qty, 0);
    const netStock = (prod.storeStock || 0) + (prod.warehouseStock || 0);

    const displayMutations = activeLedgerFilter === 'in' 
        ? mutationsIn 
        : (activeLedgerFilter === 'out' ? mutationsOut : allMutations);

    box.innerHTML = `
        <!-- HEADER MODAL -->
        <div class="sticky top-0 z-20 flex items-center justify-between border-b border-slate-100 dark:border-slate-800 bg-white/95 dark:bg-slate-900/95 px-5 py-4 backdrop-blur-md">
            <div class="flex items-center gap-3 min-w-0">
                <div class="w-10 h-10 rounded-2xl flex items-center justify-center text-sm shadow-2xs shrink-0" style="background: rgba(var(--color-primary-rgb), 0.12); color: var(--color-primary);">
                    <i class="fa-solid fa-boxes-packing"></i>
                </div>
                <div class="min-w-0">
                    <h3 class="text-sm sm:text-base font-black text-slate-800 dark:text-white truncate flex items-center gap-2">
                        <span>${esc(prod.name)}</span>
                    </h3>
                    <p class="text-[11px] font-bold text-slate-400 truncate">
                        Barcode: <span class="font-mono text-slate-600 dark:text-slate-300">${esc(prod.sku || '-')}</span> • Kategori: <span class="text-slate-600 dark:text-slate-300">${esc(prod.category || 'Umum')}</span>
                    </p>
                </div>
            </div>
            <button onclick="window.closeProductFifoModal()" class="w-9 h-9 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-white flex items-center justify-center transition-all cursor-pointer active:scale-90 shrink-0">
                <i class="fa-solid fa-xmark text-sm"></i>
            </button>
        </div>

        <!-- TABS NAVIGASI MODAL FIFO -->
        <div class="px-5 py-2.5 border-b border-slate-100 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-800/40 flex items-center gap-2 shrink-0">
            <button type="button" onclick="window.switchFifoTab('overview')" class="px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer active:scale-95 ${activeFifoTab === 'overview' ? 'bg-white dark:bg-slate-700 text-slate-800 dark:text-white shadow-2xs border border-slate-200 dark:border-slate-600' : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'}" style="${activeFifoTab === 'overview' ? 'color: var(--color-primary); font-weight: 800;' : ''}">
                <i class="fa-solid fa-layer-group text-amber-500"></i>
                <span>Ikhtisar &amp; Antrean Batch FIFO</span>
            </button>
            <button type="button" onclick="window.switchFifoTab('ledger')" class="px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer active:scale-95 ${activeFifoTab === 'ledger' ? 'bg-white dark:bg-slate-700 text-slate-800 dark:text-white shadow-2xs border border-slate-200 dark:border-slate-600' : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'}" style="${activeFifoTab === 'ledger' ? 'color: var(--color-primary); font-weight: 800;' : ''}">
                <i class="fa-solid fa-book-journal-whills text-teal-500"></i>
                <span>Kartu Mutasi Stok (${allMutations.length})</span>
            </button>
        </div>

        ${activeFifoTab === 'overview' ? `
        <div class="p-5 sm:p-6 space-y-6">
            <!-- 1. BENTO STATS CARDS (DUAL-LOCATION & FIFO VALUATION) -->
            <div class="grid grid-cols-2 sm:grid-cols-5 gap-2.5 sm:gap-3">
                <div class="p-3.5 rounded-2xl bg-teal-50/70 dark:bg-teal-950/30 border border-teal-200/80 dark:border-teal-800/70 shadow-2xs">
                    <span class="text-[9px] font-black uppercase tracking-wider text-teal-600 dark:text-teal-400 flex items-center gap-1">
                        <i class="fa-solid fa-store"></i> Stok Rak Toko
                    </span>
                    <p class="text-base sm:text-lg font-black text-slate-800 dark:text-white mt-0.5">${prod.storeStock || 0} <span class="text-[10px] font-bold text-slate-400">${esc(prod.unit || 'pcs')}</span></p>
                    <p class="text-[9px] font-bold text-teal-600 dark:text-teal-400 mt-0.5">Siap Transaksi Kasir</p>
                </div>
                <div class="p-3.5 rounded-2xl bg-amber-50/70 dark:bg-amber-950/30 border border-amber-200/80 dark:border-amber-800/70 shadow-2xs">
                    <span class="text-[9px] font-black uppercase tracking-wider text-amber-600 dark:text-amber-400 flex items-center gap-1">
                        <i class="fa-solid fa-warehouse"></i> Stok Gudang
                    </span>
                    <p class="text-base sm:text-lg font-black text-slate-800 dark:text-white mt-0.5">${prod.warehouseStock || 0} <span class="text-[10px] font-bold text-slate-400">${esc(prod.unit || 'pcs')}</span></p>
                    <p class="text-[9px] font-bold text-amber-600 dark:text-amber-400 mt-0.5">Cadangan Belakang</p>
                </div>
                <div class="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/70 shadow-2xs">
                    <span class="text-[9px] font-black uppercase tracking-wider text-slate-400">Total Stok</span>
                    <p class="text-base sm:text-lg font-black text-slate-800 dark:text-white mt-0.5">${valuation.totalActiveQty} <span class="text-[10px] font-bold text-slate-400">${esc(prod.unit || 'pcs')}</span></p>
                    <p class="text-[9px] font-bold text-slate-400 mt-0.5">${valuation.activeBatchesCount} Batch Aktif</p>
                </div>
                <div class="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/70 shadow-2xs">
                    <span class="text-[9px] font-black uppercase tracking-wider text-amber-500">HPP Aktif</span>
                    <p class="text-base sm:text-lg font-black text-amber-600 dark:text-amber-400 mt-0.5">${fCur(prod.hpp || 0)}</p>
                    <p class="text-[9px] font-bold text-slate-400 mt-0.5">Batch Terdepan</p>
                </div>
                <div class="col-span-2 sm:col-span-1 p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/70 shadow-2xs">
                    <span class="text-[9px] font-black uppercase tracking-wider" style="color:var(--color-primary)">Valuasi FIFO</span>
                    <p class="text-base sm:text-lg font-black text-slate-800 dark:text-white mt-0.5" style="color:var(--color-primary)">${fCur(valuation.totalValuationRp)}</p>
                    <p class="text-[9px] font-bold text-slate-400 mt-0.5">Aset Bersih PSAK</p>
                </div>
            </div>

            <!-- BANNER MUTASI INTERNAL TOKO & GUDANG -->
            <div class="p-4 rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50/70 dark:bg-slate-800/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-2xs">
                <div class="flex items-center gap-3">
                    <div class="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-500 dark:text-amber-400 flex items-center justify-center text-lg shrink-0">
                        <i class="fa-solid fa-dolly"></i>
                    </div>
                    <div>
                        <h5 class="text-xs sm:text-sm font-black text-slate-800 dark:text-white">Manajemen Pemindahan Stok Internal</h5>
                        <p class="text-[11px] text-slate-400 font-medium">Pindahkan stok dari gudang cadangan ke rak toko agar kasir selalu siap melayani pelanggan.</p>
                    </div>
                </div>
                <div class="flex items-center gap-2 w-full sm:w-auto">
                    <button type="button" onclick="window.quickTransferWarehouseToStore('${prod.id}')" class="flex-1 sm:flex-none px-4 py-2.5 rounded-xl primary-bg text-white font-bold text-xs flex items-center justify-center gap-2 active:scale-95 transition-all shadow-sm cursor-pointer" ${Number(prod.warehouseStock || 0) <= 0 ? 'disabled style="opacity:0.5;cursor:not-allowed;"' : ''}>
                        <i class="fa-solid fa-arrow-right-arrow-left text-[11px]"></i>
                        <span>Pindahkan ke Rak Toko</span>
                    </button>
                </div>
            </div>

            <!-- 2. SECTION: REKANAN MULTI-SUPPLIER PRODUK -->
            <div class="space-y-3">
                <div class="flex items-center justify-between flex-wrap gap-2">
                    <h4 class="text-xs sm:text-sm font-black text-slate-800 dark:text-white flex items-center gap-2">
                        <i class="fa-solid fa-truck-field text-teal-500"></i>
                        <span>Daftar Supplier Pemasok (${suppliersList.length})</span>
                    </h4>
                    <span class="text-[11px] text-slate-400 font-medium">Bisa pesan ke supplier mana pun saat kulakan</span>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                    ${suppliersList.map(s => {
                        const isPrimary = !!s.isPrimary;
                        const sMaster = (appData.suppliers || []).find(ms => String(ms.id) === String(s.supplierId));
                        const phone = sMaster?.phone || '';
                        return `
                            <div class="p-4 rounded-2xl border transition-all ${isPrimary ? 'bg-teal-50/50 dark:bg-teal-950/20 border-teal-300 dark:border-teal-800 shadow-sm' : 'bg-white dark:bg-slate-800 border-slate-200/90 dark:border-slate-700/80'} flex flex-col justify-between gap-3">
                                <div class="flex items-start justify-between gap-2">
                                    <div>
                                        <div class="flex items-center gap-2 flex-wrap">
                                            <span class="font-black text-xs sm:text-sm text-slate-800 dark:text-white">${esc(s.supplierName || 'Supplier')}</span>
                                            ${isPrimary ? `
                                                <span class="px-2 py-0.5 rounded-md text-[9px] font-black uppercase tracking-wider bg-teal-600 text-white shadow-2xs">
                                                    <i class="fa-solid fa-star text-[8px] mr-1"></i>Supplier Utama
                                                </span>
                                            ` : `
                                                <span class="px-2 py-0.5 rounded-md text-[9px] font-bold uppercase tracking-wider bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-300">
                                                    Rekanan Pendukung
                                                </span>
                                            `}
                                        </div>
                                        <p class="text-[11px] font-bold text-slate-400 mt-1">
                                            Harga Beli Terakhir: <b class="text-slate-700 dark:text-slate-200">${fCur(s.lastBuyPrice || 0)}</b>
                                            ${s.supplierSku ? ` • SKU: <span class="font-mono">${esc(s.supplierSku)}</span>` : ''}
                                        </p>
                                    </div>
                                    <div class="w-8 h-8 rounded-xl bg-slate-100 dark:bg-slate-700/60 flex items-center justify-center text-slate-500 shrink-0">
                                        <i class="fa-solid fa-building text-xs"></i>
                                    </div>
                                </div>

                                <div class="flex items-center gap-2 pt-2 border-t border-slate-100 dark:border-slate-700/60 flex-wrap">
                                    ${!isPrimary ? `
                                        <button onclick="window.handleSetFifoPrimarySupplier('${esc(s.supplierId)}')" class="px-3 py-1.5 rounded-xl bg-white dark:bg-slate-700 hover:bg-teal-50 text-teal-700 dark:text-teal-300 border border-teal-200 dark:border-teal-800 text-[10px] font-black transition-all cursor-pointer active:scale-95 shadow-2xs">
                                            <i class="fa-solid fa-check mr-1"></i>Set Utama
                                        </button>
                                    ` : ''}
                                    <button onclick="window.closeProductFifoModal(); if(window.openCreatePOModal) window.openCreatePOModal('${esc(s.supplierId)}');" class="px-3 py-1.5 rounded-xl text-white text-[10px] font-black transition-all cursor-pointer active:scale-95 shadow-2xs flex items-center gap-1" style="background:var(--color-primary)">
                                        <i class="fa-solid fa-cart-plus text-[9px]"></i>Buat PO Kulakan
                                    </button>
                                    ${phone ? `
                                        <a href="https://wa.me/${phone.replace(/\\D/g,'')}?text=${encodeURIComponent(`Halo Sales ${s.supplierName}, kami dari Toko Putri ingin menanyakan ketersediaan dan harga untuk produk: ${prod.name}`)}" target="_blank" class="px-3 py-1.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 text-[10px] font-bold transition-all flex items-center gap-1">
                                            <i class="fa-brands fa-whatsapp text-emerald-500"></i>Chat Sales
                                        </a>
                                    ` : ''}
                                </div>
                            </div>
                        `;
                    }).join('')}
                </div>

                <!-- FORM TAMBAH SUPPLIER REKANAN BARU -->
                ${unlinkedSuppliers.length > 0 ? `
                    <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-dashed border-slate-300 dark:border-slate-700 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                        <div class="flex-1 flex flex-col sm:flex-row gap-2">
                            <select id="fifo-new-sup-select" class="admin-input shadow-sm bg-white dark:bg-slate-800 text-xs font-bold flex-1">
                                <option value="">-- Hubungkan Supplier Baru --</option>
                                ${unlinkedSuppliers.map(us => `<option value="${us.id}">${esc(us.name)}${us.code ? ` (${esc(us.code)})` : ''}</option>`).join('')}
                            </select>
                            <input type="number" id="fifo-new-sup-price" placeholder="Harga Beli Modal (Rp)" class="admin-input shadow-sm bg-white dark:bg-slate-800 text-xs font-bold w-full sm:w-48">
                        </div>
                        <button onclick="window.handleLinkFifoSupplier()" class="px-4 py-2.5 rounded-xl text-white font-bold text-xs shadow-2xs active:scale-95 transition-all flex items-center justify-center gap-1.5 cursor-pointer shrink-0" style="background:var(--color-primary)">
                            <i class="fa-solid fa-plus text-[10px]"></i>
                            <span>Hubungkan</span>
                        </button>
                    </div>
                ` : ''}
            </div>

            <!-- 3. SECTION: ANTREAN BATCH FIFO (LOT INVENTORY) -->
            <div class="space-y-3">
                <div class="flex items-center justify-between flex-wrap gap-2">
                    <h4 class="text-xs sm:text-sm font-black text-slate-800 dark:text-white flex items-center gap-2">
                        <i class="fa-solid fa-layer-group text-amber-500"></i>
                        <span>Antrean Batch FIFO Berjalan (First-In, First-Out)</span>
                    </h4>
                    <span class="text-[11px] text-slate-400 font-medium">Stok teratas otomatis dijual lebih dulu di kasir</span>
                </div>

                <div class="space-y-2.5">
                    ${activeBatches.length === 0 ? `
                        <div class="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/80 dark:border-slate-700 text-center">
                            <i class="fa-solid fa-box-open text-3xl text-slate-300 dark:text-slate-600 mb-2"></i>
                            <p class="text-xs font-bold text-slate-500">Belum ada batch aktif dengan sisa stok.</p>
                            <p class="text-[11px] text-slate-400 mt-0.5">Stok akan terisi otomatis saat Anda menerima barang dari PO Pembelian.</p>
                        </div>
                    ` : activeBatches.map((b, idx) => {
                        const isQueueHead = idx === 0;
                        const percentLeft = b.initialQty > 0 ? Math.round((b.remainingQty / b.initialQty) * 100) : 100;
                        const dateFormatted = b.receivedAt ? new Date(b.receivedAt).toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' }) : 'Awal';
                        return `
                            <div class="p-4 rounded-2xl border transition-all ${isQueueHead ? 'bg-amber-50/40 dark:bg-amber-950/20 border-amber-300 dark:border-amber-800/80 shadow-sm' : 'bg-white dark:bg-slate-800 border-slate-200/90 dark:border-slate-700/80'}">
                                <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 mb-2">
                                    <div class="flex items-center gap-2 flex-wrap">
                                        <span class="w-6 h-6 rounded-lg text-xs font-black flex items-center justify-center ${isQueueHead ? 'bg-amber-500 text-white shadow-xs' : 'bg-slate-100 dark:bg-slate-700 text-slate-500'}">
                                            #${idx + 1}
                                        </span>
                                        <span class="font-black text-xs sm:text-sm text-slate-800 dark:text-white">${esc(b.poNumber || 'BATCH MASUK')}</span>
                                        ${isQueueHead ? `
                                            <span class="px-2 py-0.5 rounded-md text-[9px] font-black uppercase tracking-wider bg-emerald-500 text-white shadow-2xs flex items-center gap-1">
                                                <i class="fa-solid fa-circle-play text-[7px]"></i>Sedang Dijual Sekarang
                                            </span>
                                        ` : `
                                            <span class="px-2 py-0.5 rounded-md text-[9px] font-bold uppercase tracking-wider bg-slate-100 dark:bg-slate-700 text-slate-500">
                                                Antrean Ke-${idx + 1}
                                            </span>
                                        `}
                                    </div>
                                    <div class="text-right">
                                        <span class="text-xs font-black text-slate-700 dark:text-slate-200">HPP: ${fCur(b.buyPrice)}</span>
                                        <span class="text-[10px] text-slate-400 block">${dateFormatted}</span>
                                    </div>
                                </div>

                                <div class="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 mb-1.5">
                                    <span>Pemasok: <b class="text-slate-700 dark:text-slate-300">${esc(b.supplierName || '-')}</b></span>
                                    <span>Sisa: <b class="text-slate-800 dark:text-white font-mono font-bold">${b.remainingQty}</b> / ${b.initialQty} ${esc(prod.unit || 'pcs')} (${percentLeft}%)</span>
                                </div>

                                <!-- PROGRESS BAR SISA STOK -->
                                <div class="w-full h-2 rounded-full bg-slate-100 dark:bg-slate-700 overflow-hidden">
                                    <div class="h-full rounded-full transition-all duration-500 ${isQueueHead ? 'bg-amber-500' : 'bg-teal-500'}" style="width: ${Math.min(100, Math.max(0, percentLeft))}%"></div>
                                </div>
                            </div>
                        `;
                    }).join('')}
                </div>

                ${exhaustedBatches.length > 0 ? `
                    <p class="text-[11px] font-bold text-slate-400 flex items-center gap-1 mt-2">
                        <i class="fa-solid fa-clock-rotate-left"></i>
                        <span>Ada ${exhaustedBatches.length} batch masa lalu yang telah habis terjual sempurna.</span>
                    </p>
                ` : ''}
            </div>

            <!-- 4. SECTION: SIMULATOR ALOKASI PENJUALAN FIFO REALTIME -->
            <div class="p-5 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-950 text-white shadow-xl space-y-4">
                <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                    <div>
                        <h4 class="text-xs sm:text-sm font-black flex items-center gap-2">
                            <i class="fa-solid fa-calculator text-amber-400"></i>
                            <span>Simulator Alokasi Penjualan FIFO</span>
                        </h4>
                        <p class="text-[11px] text-slate-400 mt-0.5">Lihat bagaimana sistem memotong batch dan menghitung laba bersih transaksi</p>
                    </div>
                    <div class="flex items-center gap-2 bg-slate-800/80 p-1.5 rounded-xl border border-slate-700">
                        <span class="text-[11px] font-bold text-slate-300 px-2">Jumlah Jual:</span>
                        <input type="number" min="1" max="999" value="${fifoSimulateQty}" onchange="window.handleFifoSimulateChange(this.value)" class="w-16 bg-slate-900 text-white text-xs font-black text-center py-1 rounded-lg border border-slate-600 focus:outline-none focus:border-amber-400">
                    </div>
                </div>

                <div class="p-3.5 rounded-xl bg-slate-800/50 border border-slate-700/60 text-xs space-y-2">
                    <p class="text-[11px] font-bold text-slate-300">Alokasi Pemotongan:</p>
                    <div class="space-y-1 text-slate-300 font-mono text-[11px]">
                        ${simBreakdown.map(sb => `
                            <div class="flex items-center justify-between py-0.5 border-b border-slate-800">
                                <span>• ${sb.qty} ${esc(prod.unit || 'pcs')} dari <b>${esc(sb.poNumber)}</b> (${esc(sb.supplierName)}) @ ${fCur(sb.buyPrice)}</span>
                                <span class="font-bold text-amber-300">${fCur(sb.subtotal)}</span>
                            </div>
                        `).join('')}
                    </div>
                </div>

                <div class="grid grid-cols-3 gap-2 pt-2 border-t border-slate-800 text-center">
                    <div>
                        <span class="text-[9px] text-slate-400 uppercase font-black">Total HPP Riil</span>
                        <p class="text-sm sm:text-base font-black text-amber-400">${fCur(simCost)}</p>
                        <span class="text-[9px] text-slate-500">Rata-rata: ${fCur(simUnitCost)}/unit</span>
                    </div>
                    <div>
                        <span class="text-[9px] text-slate-400 uppercase font-black">Omzet Jual</span>
                        <p class="text-sm sm:text-base font-black text-white">${fCur(simTotalRevenue)}</p>
                        <span class="text-[9px] text-slate-500">Harga: ${fCur(prodPrice)}</span>
                    </div>
                    <div>
                        <span class="text-[9px] text-slate-400 uppercase font-black">Laba Kotor Transaksi</span>
                        <p class="text-sm sm:text-base font-black text-emerald-400">+${fCur(simGrossProfit)}</p>
                        <span class="text-[9px] text-emerald-500 font-bold">Margin Bersih Akurat</span>
                    </div>
                </div>
            </div>
        </div>
        ` : `
        <!-- TAB KARTU MUTASI STOK (STOCK CARD LEDGER) -->
        <div class="p-5 sm:p-6 space-y-5">
            <!-- 1. BENTO STATS MUTASI STOK -->
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div class="p-4 rounded-2xl bg-emerald-50/70 dark:bg-emerald-950/30 border border-emerald-200/80 dark:border-emerald-800/70 shadow-2xs">
                    <span class="text-[9.5px] font-black uppercase tracking-wider text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5">
                        <i class="fa-solid fa-arrow-down-left"></i> Total Barang Masuk (PO Kulakan)
                    </span>
                    <p class="text-lg sm:text-xl font-black text-slate-800 dark:text-white mt-1 font-mono">
                        +${totalIn} <span class="text-xs font-bold text-slate-400">${esc(prod.unit || 'pcs')}</span>
                    </p>
                    <p class="text-[10px] font-bold text-emerald-600 dark:text-emerald-400 mt-0.5">${mutationsIn.length} Dokumen Kulakan Masuk</p>
                </div>

                <div class="p-4 rounded-2xl bg-rose-50/70 dark:bg-rose-950/30 border border-rose-200/80 dark:border-rose-800/70 shadow-2xs">
                    <span class="text-[9.5px] font-black uppercase tracking-wider text-rose-600 dark:text-rose-400 flex items-center gap-1.5">
                        <i class="fa-solid fa-arrow-up-right"></i> Total Barang Keluar (Penjualan)
                    </span>
                    <p class="text-lg sm:text-xl font-black text-slate-800 dark:text-white mt-1 font-mono">
                        -${totalOut} <span class="text-xs font-bold text-slate-400">${esc(prod.unit || 'pcs')}</span>
                    </p>
                    <p class="text-[10px] font-bold text-rose-600 dark:text-rose-400 mt-0.5">${mutationsOut.length} Transaksi Kasir &amp; Web</p>
                </div>

                <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/70 shadow-2xs">
                    <span class="text-[9.5px] font-black uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                        <i class="fa-solid fa-boxes-stacked"></i> Saldo Stok Fisik Realtime
                    </span>
                    <p class="text-lg sm:text-xl font-black text-slate-800 dark:text-white mt-1 font-mono">
                        ${netStock} <span class="text-xs font-bold text-slate-400">${esc(prod.unit || 'pcs')}</span>
                    </p>
                    <p class="text-[10px] font-bold text-slate-400 mt-0.5">Toko: ${prod.storeStock || 0} • Gudang: ${prod.warehouseStock || 0}</p>
                </div>
            </div>

            <!-- 2. FILTER SEGMENTED KARTU MUTASI -->
            <div class="flex items-center justify-between flex-wrap gap-2 pt-1 border-t border-slate-100 dark:border-slate-800">
                <div class="flex items-center gap-1.5 overflow-x-auto hide-scrollbar text-xs font-bold">
                    <button type="button" onclick="window.setLedgerFilter('all')" class="px-3 py-1.5 rounded-xl border transition-all cursor-pointer active:scale-95 ${activeLedgerFilter === 'all' ? 'bg-slate-900 text-white border-slate-900 dark:bg-white dark:text-slate-900 shadow-2xs' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border-transparent'}">
                        Semua Riwayat (${allMutations.length})
                    </button>
                    <button type="button" onclick="window.setLedgerFilter('in')" class="px-3 py-1.5 rounded-xl border transition-all cursor-pointer active:scale-95 ${activeLedgerFilter === 'in' ? 'bg-emerald-600 text-white border-emerald-600 shadow-2xs' : 'bg-emerald-50 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-300 border-transparent'}">
                        <i class="fa-solid fa-arrow-down-left mr-1"></i>Barang Masuk (${mutationsIn.length})
                    </button>
                    <button type="button" onclick="window.setLedgerFilter('out')" class="px-3 py-1.5 rounded-xl border transition-all cursor-pointer active:scale-95 ${activeLedgerFilter === 'out' ? 'bg-rose-600 text-white border-rose-600 shadow-2xs' : 'bg-rose-50 dark:bg-rose-950/30 text-rose-700 dark:text-rose-300 border-transparent'}">
                        <i class="fa-solid fa-arrow-up-right mr-1"></i>Barang Keluar (${mutationsOut.length})
                    </button>
                </div>
                <span class="text-[11px] text-slate-400 font-medium">Buku Mutasi Stok Riil Berbasis Dokumen Transaksi</span>
            </div>

            <!-- 3. TABEL / LIST MUTASI KARTU STOK -->
            <div class="space-y-2">
                ${displayMutations.length === 0 ? `
                    <div class="p-8 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/80 dark:border-slate-700 text-center">
                        <i class="fa-solid fa-clipboard-list text-3xl text-slate-300 dark:text-slate-600 mb-2"></i>
                        <p class="text-xs font-bold text-slate-600 dark:text-slate-300">Belum ada catatan mutasi stok untuk filter ini.</p>
                        <p class="text-[11px] text-slate-400 mt-0.5">Riwayat akan terisi otomatis saat kulakan PO diterima atau pesanan kasir diproses.</p>
                    </div>
                ` : displayMutations.map(m => {
                    const isIn = m.type === 'in';
                    const dateStr = new Date(m.date).toLocaleDateString('id-ID', { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' });
                    return `
                        <div class="p-3.5 sm:p-4 rounded-2xl border transition-all bg-white dark:bg-slate-800 border-slate-200/90 dark:border-slate-700/80 shadow-2xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                            <div class="flex items-start gap-3 min-w-0">
                                <div class="w-9 h-9 rounded-xl flex items-center justify-center text-xs shrink-0 ${isIn ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800' : 'bg-rose-100 text-rose-700 dark:bg-rose-950/50 dark:text-rose-400 border border-rose-200 dark:border-rose-800'}">
                                    <i class="fa-solid ${isIn ? 'fa-arrow-down-left' : 'fa-arrow-up-right'}"></i>
                                </div>
                                <div class="min-w-0">
                                    <div class="flex items-center gap-2 flex-wrap">
                                        <span class="px-2 py-0.5 rounded-md text-[9px] font-black uppercase tracking-wider ${isIn ? 'bg-emerald-600 text-white' : 'bg-rose-600 text-white'}">
                                            ${isIn ? 'Masuk' : 'Keluar'}
                                        </span>
                                        <span class="font-black text-xs sm:text-sm text-slate-800 dark:text-white font-mono">${esc(m.refNo)}</span>
                                        <span class="text-[10px] text-slate-400 font-medium">• ${dateStr}</span>
                                    </div>
                                    <p class="text-[11px] text-slate-600 dark:text-slate-300 mt-1 font-medium truncate">
                                        ${esc(m.title)} • <span class="text-slate-500">${esc(m.party)}</span>
                                    </p>
                                    <p class="text-[10px] text-slate-400 mt-0.5">
                                        Lokasi: <b class="text-slate-700 dark:text-slate-300">${esc(m.location)}</b> ${m.notes ? `• ${esc(m.notes)}` : ''}
                                    </p>
                                </div>
                            </div>
                            <div class="text-left sm:text-right shrink-0 border-t sm:border-t-0 pt-2 sm:pt-0 w-full sm:w-auto border-slate-100 dark:border-slate-700 flex sm:flex-col justify-between sm:justify-center items-center sm:items-end">
                                <span class="text-base sm:text-lg font-black font-mono ${isIn ? 'text-emerald-600 dark:text-emerald-400' : 'text-rose-600 dark:text-rose-400'}">
                                    ${isIn ? `+${m.qty}` : `-${m.qty}`} <span class="text-xs font-bold text-slate-400">${esc(m.unit)}</span>
                                </span>
                                ${m.price > 0 ? `<span class="text-[10px] text-slate-400 block font-mono">@ ${fCur(m.price)}</span>` : ''}
                            </div>
                        </div>
                    `;
                }).join('')}
            </div>
        </div>
        `}

        <!-- FOOTER MODAL -->
        <div class="sticky bottom-0 z-20 flex items-center justify-end border-t border-slate-100 dark:border-slate-800 bg-white/95 dark:bg-slate-900/95 px-5 py-3.5 backdrop-blur-md">
            <button onclick="window.closeProductFifoModal()" class="px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 font-black text-xs transition-all cursor-pointer active:scale-95">
                Tutup
            </button>
        </div>
    `;
};

/**
 * Hubungkan supplier baru ke produk dari modal
 */
export const handleLinkFifoSupplier = async () => {
    const supId = el('fifo-new-sup-select')?.value;
    const price = parseFloat(el('fifo-new-sup-price')?.value) || 0;
    if (!supId) return showToast('Pilih supplier terlebih dahulu!');

    const prod = (appData.products || []).find(p => String(p.id) === String(activeFifoProductId));
    if (!prod) return;

    const supObj = (appData.suppliers || []).find(s => String(s.id) === String(supId));
    linkSupplierToProduct(prod, {
        supplierId: supId,
        supplierName: supObj ? supObj.name : 'Supplier Rekanan',
        lastBuyPrice: price,
        isPrimary: false
    });

    sLoad('Menghubungkan Supplier...');
    try {
        await db.collection("freshmart").doc("cms_data").collection("products").doc(prod.id.toString()).update({
            suppliers: prod.suppliers,
            supplierId: prod.supplierId
        });
        hLoad();
        showToast('Supplier berhasil dihubungkan ke produk!');
        renderProductFifoContent();
        window.rAdmItms?.('products');
    } catch(err) {
        hLoad();
        showToast('Gagal menghubungkan supplier: ' + err.message);
    }
};

/**
 * Ganti Supplier Utama Produk 1-Klik
 */
export const handleSetFifoPrimarySupplier = async (supplierId) => {
    const prod = (appData.products || []).find(p => String(p.id) === String(activeFifoProductId));
    if (!prod) return;

    setPrimarySupplierForProduct(prod, supplierId);

    sLoad('Memperbarui Supplier Utama...');
    try {
        await db.collection("freshmart").doc("cms_data").collection("products").doc(prod.id.toString()).update({
            suppliers: prod.suppliers,
            supplierId: prod.supplierId
        });
        hLoad();
        showToast('Supplier utama berhasil diubah! ⭐');
        renderProductFifoContent();
        window.rAdmItms?.('products');
    } catch(err) {
        hLoad();
        showToast('Gagal mengubah supplier: ' + err.message);
    }
};

/**
 * Ganti nilai simulasi penjualan FIFO
 */
export const handleFifoSimulateChange = (val) => {
    fifoSimulateQty = Math.max(1, parseInt(val, 10) || 1);
    renderProductFifoContent();
};

/**
 * Pindahkan stok dari gudang cadangan ke rak toko (Internal Transfer)
 */
export const quickTransferWarehouseToStore = async (productId) => {
    const prod = (appData.products || []).find(p => String(p.id) === String(productId));
    if (!prod) return showToast('Produk tidak ditemukan!');
    normalizeProductInventory(prod, appData.suppliers || []);

    const wStock = Number(prod.warehouseStock) || 0;
    if (wStock <= 0) return showToast('Stok gudang cadangan kosong (0)!');

    const promptQty = await (typeof window.customPrompt === 'function' 
        ? window.customPrompt(`Pindahkan Stok ke Rak Toko (Tersedia di Gudang: ${wStock} ${prod.unit||'pcs'}):`, String(Math.min(wStock, 10)))
        : Promise.resolve(null));

    if (!promptQty) return;
    const qty = parseFloat(promptQty) || 0;
    if (qty <= 0) return showToast('Jumlah yang dimasukkan tidak valid!');
    if (qty > wStock) return showToast(`Jumlah melebihi stok gudang (maksimal ${wStock})!`);

    sLoad('Memindahkan stok ke rak toko...');
    try {
        const res = transferStockBetweenLocations(prod, 'warehouse', 'store', qty);
        if (!res.success) throw new Error(res.error || 'Gagal memindahkan stok');

        await db.collection("freshmart").doc("cms_data").collection("products").doc(prod.id.toString()).update({
            storeStock: prod.storeStock,
            warehouseStock: prod.warehouseStock,
            stock: prod.stock,
            stockBatches: prod.stockBatches || []
        });

        hLoad();
        showToast(`Sukses memindahkan ${qty} ${prod.unit||'pcs'} ke rak toko!`);
        renderProductFifoContent();
        window.rAdmItms?.('products');
    } catch (err) {
        hLoad();
        showToast('Gagal memindahkan stok: ' + err.message);
    }
};

// Bind ke window object
window.openProductFifoModal = openProductFifoModal;
window.closeProductFifoModal = closeProductFifoModal;
window.switchFifoTab = switchFifoTab;
window.setLedgerFilter = setLedgerFilter;
window.getProductMutationLedger = getProductMutationLedger;
window.handleLinkFifoSupplier = handleLinkFifoSupplier;
window.handleSetFifoPrimarySupplier = handleSetFifoPrimarySupplier;
window.handleFifoSimulateChange = handleFifoSimulateChange;
window.quickTransferWarehouseToStore = quickTransferWarehouseToStore;
