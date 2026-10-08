/**
 * ============================================================
 * MODAL PINTAR CETAK LABEL HARGA & BARCODE SKU BARANG (UNIVERSAL)
 * Toko Putri - Solusi Cetak Label Multi-Printer, Multi-Varian & Multi-Qty
 * Mendukung Printer Thermal Stiker (40x30, 50x30, 58/80mm) & Printer A4
 * ============================================================
 */

import { el, esc, fCur, showToast, openModalAnim, closeModalAnim } from '../../../core/utils.js';
import { appData } from '../../../core/state.js';
import { generateCode128Svg } from '../../../core/barcode-code128.js';

// State Internal Generator Label
let activeProductId = null;
let labelItemsQueue = []; // [{ id, name, variantName, sku, price, unit, stock, qty, hex }]
let activePreviewIndex = 0;
let labelSettings = {
    paperSize: 'thermal-40x30', // 'thermal-40x30', 'thermal-50x30', 'thermal-58mm', 'thermal-80mm', 'a4-3x10', 'a4-2x7'
    showStoreName: true,
    showPrice: true,
    showUnit: true,
    showSkuText: true,
    showBorderGuide: false,
    barcodeHeight: 58
};

/**
 * Pastikan kontainer modal terpasang di DOM
 */
export const ensureProductBarcodeLabelModal = () => {
    let m = el('modal-product-barcode-label');
    if (!m) {
        m = document.createElement('div');
        m.id = 'modal-product-barcode-label';
        m.className = 'fixed inset-0 z-[200] flex hidden items-end sm:items-center justify-center p-0 sm:p-4 bg-slate-950/80 opacity-0 transition-opacity duration-300';
        m.onclick = (e) => { if (e.target === m) window.closeProductBarcodeLabelModal?.(); };
        m.innerHTML = `
            <div id="modal-product-barcode-label-box" class="modal-bottom-sheet relative flex max-h-[94dvh] sm:max-h-[90dvh] w-full max-w-5xl translate-y-full sm:translate-y-10 transform flex-col overflow-hidden rounded-t-[2rem] sm:rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-2xl transition-transform duration-300">
                <div id="modal-product-barcode-label-content" class="flex-1 flex flex-col overflow-hidden min-h-0"></div>
            </div>
        `;
        document.body.appendChild(m);
    } else {
        m.className = 'fixed inset-0 z-[200] flex hidden items-end sm:items-center justify-center p-0 sm:p-4 bg-slate-950/80 opacity-0 transition-opacity duration-300';
        document.body.appendChild(m);
    }
};

/**
 * Buka modal cetak label barcode untuk produk tertentu
 * @param {string|number} productId ID produk
 * @param {Object} [initialQtyMap] Peta kuantitas awal { [sku/variantIndex]: qty }
 */
export const openProductBarcodeLabelModal = (productId, initialQtyMap = null) => {
    // 1. Deteksi & tutup modal induk yang sedang terbuka (FIFO / PO Detail) agar tidak menutupi tampilan
    const fifoModal = el('modal-product-fifo');
    if (fifoModal && !fifoModal.classList.contains('hidden')) {
        const fifoBox = el('modal-product-fifo-box');
        if (fifoBox) closeModalAnim(fifoModal, fifoBox);
        if (typeof window.requestCloseModal === 'function') {
            window.requestCloseModal('productFifo', true);
        }
    }

    const poModal = el('modal-po-detail');
    if (poModal && !poModal.classList.contains('hidden')) {
        const poBox = el('modal-po-detail-box');
        if (poBox) closeModalAnim(poModal, poBox);
        if (typeof window.requestCloseModal === 'function') {
            window.requestCloseModal('purchaseDetail', true);
        }
    }

    ensureProductBarcodeLabelModal();

    const prod = (appData.products || []).find(p => String(p.id) === String(productId));
    if (!prod) {
        showToast('Produk tidak ditemukan!');
        return;
    }

    activeProductId = String(prod.id);
    activePreviewIndex = 0;

    // Ekstraksi item & varian ke antrean
    labelItemsQueue = [];
    const hasVariants = Array.isArray(prod.variants) && prod.variants.length > 0;

    if (!hasVariants) {
        // Produk tunggal tanpa varian
        const baseSku = (prod.sku || prod.barcode || `SKU-${prod.id}`).trim();
        const stockQty = parseFloat(prod.stock) || 0;
        const initialQty = initialQtyMap && initialQtyMap[baseSku] !== undefined
            ? Math.max(1, parseInt(initialQtyMap[baseSku], 10))
            : Math.min(Math.max(1, Math.round(stockQty) || 1), 50);

        labelItemsQueue.push({
            id: String(prod.id),
            name: prod.name || 'Produk',
            variantName: '',
            sku: baseSku,
            price: parseFloat(prod.price) || 0,
            unit: prod.unit || 'pcs',
            stock: stockQty,
            qty: initialQty,
            hex: prod.hex || null
        });
    } else {
        // Produk memiliki banyak varian
        prod.variants.forEach((v, idx) => {
            const vSku = (v.barcode || v.sku || `${prod.sku || prod.id}-${idx + 1}`).trim();
            const vStock = parseFloat(v.stock) || 0;
            const initialQty = initialQtyMap && (initialQtyMap[vSku] !== undefined || initialQtyMap[idx] !== undefined)
                ? Math.max(0, parseInt(initialQtyMap[vSku] ?? initialQtyMap[idx], 10))
                : 1;

            labelItemsQueue.push({
                id: `${prod.id}_var_${idx}`,
                name: prod.name || 'Produk',
                variantName: v.name || v.title || `Varian ${idx + 1}`,
                sku: vSku,
                price: parseFloat(v.price !== undefined ? v.price : prod.price) || 0,
                unit: v.unit || prod.unit || 'pcs',
                stock: vStock,
                qty: initialQty,
                hex: v.hex || null
            });
        });
    }

    renderBarcodeLabelModalContent();

    const m = el('modal-product-barcode-label');
    const box = el('modal-product-barcode-label-box');
    if (!m || !box) return;

    // Pastikan modal selalu berada di posisi paling atas DOM body saat dibuka
    document.body.appendChild(m);

    if (m.classList.contains('hidden') && typeof window.pushModalHistory === 'function') {
        window.pushModalHistory('productBarcodeLabel');
    }
    openModalAnim(m, box);
};

/**
 * Tutup modal generator label barcode
 */
export const closeProductBarcodeLabelModal = (fH = false) => {
    const m = el('modal-product-barcode-label');
    const box = el('modal-product-barcode-label-box');
    if (!m || !box) return;

    if (!fH && typeof window.requestCloseModal === 'function') {
        window.requestCloseModal('productBarcodeLabel', false, () => closeModalAnim(m, box));
    } else {
        closeModalAnim(m, box);
    }
};

/**
 * Render konten utama modal generator label barcode
 */
export const renderBarcodeLabelModalContent = () => {
    const container = el('modal-product-barcode-label-content');
    if (!container) return;

    const prod = (appData.products || []).find(p => String(p.id) === String(activeProductId));
    if (!prod) return;

    const storeName = appData.store?.name || 'TOKO PUTRI';
    const totalLabelsCount = labelItemsQueue.reduce((acc, it) => acc + (parseInt(it.qty, 10) || 0), 0);
    const activePreviewItem = labelItemsQueue[activePreviewIndex] || labelItemsQueue[0] || {
        name: prod.name,
        variantName: '',
        sku: prod.sku || 'SKU-001',
        price: prod.price || 0,
        unit: prod.unit || 'pcs'
    };

    // Kalkulasi estimasi lembar jika mode kertas A4
    const a4PerSheet = labelSettings.paperSize === 'a4-2x7' ? 14 : 30;
    const a4SheetsNeeded = Math.ceil(totalLabelsCount / a4PerSheet) || 0;

    // Buat SVG barcode untuk item yang sedang dipratinjau
    const previewSvg = generateCode128Svg(activePreviewItem.sku, {
        height: labelSettings.barcodeHeight,
        showText: labelSettings.showSkuText,
        fontSize: 10
    });

    container.innerHTML = `
        <!-- 1. HEADER MODAL (SOLID PINNED) -->
        <div class="shrink-0 px-5 sm:px-6 py-4 border-b border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 flex items-center justify-between z-10">
            <div class="flex items-center gap-3 min-w-0">
                <div class="w-10 h-10 rounded-2xl flex items-center justify-center text-white text-base shadow-sm shrink-0 bg-indigo-600">
                    <i class="fa-solid fa-barcode"></i>
                </div>
                <div class="min-w-0">
                    <div class="flex items-center gap-2 flex-wrap">
                        <h3 class="text-sm sm:text-base font-black text-slate-900 dark:text-white truncate">
                            Cetak Label Barcode &amp; Harga Barang
                        </h3>
                        <span class="px-2 py-0.5 rounded-full text-[9px] font-black uppercase tracking-wider bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800">
                            Code 128 • Universal
                        </span>
                    </div>
                    <p class="text-[11px] text-slate-500 dark:text-slate-400 truncate mt-0.5">
                        ${esc(prod.name)} • ${labelItemsQueue.length} Item / Varian Terdaftar
                    </p>
                </div>
            </div>
            <button onclick="window.closeProductBarcodeLabelModal()" class="w-8 h-8 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 flex items-center justify-center text-sm transition-all cursor-pointer shrink-0">
                <i class="fa-solid fa-xmark"></i>
            </button>
        </div>

        <!-- 2. BODY UTAMA (2-KOLOM RESPONSIVE INDEPENDENT SCROLL) -->
        <div class="flex-1 overflow-y-auto custom-scrollbar min-h-0 p-4 sm:p-6 bg-slate-50/60 dark:bg-slate-950/40">
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-5">
                
                <!-- KOLOM KIRI: KONFIGURASI VARIAN, KUANTITAS & KERTAS (7 DARI 12) -->
                <div class="lg:col-span-7 space-y-4">
                    
                    <!-- KARTU PRESET UKURAN PRINTER / KERTAS -->
                    <div class="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-2xs space-y-3">
                        <div class="flex items-center justify-between">
                            <span class="text-xs font-black uppercase tracking-wider text-slate-800 dark:text-slate-200 flex items-center gap-2">
                                <i class="fa-solid fa-print text-indigo-600 dark:text-indigo-400"></i>
                                <span>Pilih Format Printer &amp; Ukuran Label</span>
                            </span>
                            <span class="text-[10px] font-bold text-slate-400">Universal Support</span>
                        </div>

                        <div class="grid grid-cols-2 sm:grid-cols-3 gap-2">
                            <button type="button" onclick="window.setBarcodeLabelPaper('thermal-40x30')" class="p-2.5 rounded-xl border text-left transition-all cursor-pointer ${labelSettings.paperSize === 'thermal-40x30' ? 'border-indigo-600 bg-indigo-50/60 dark:bg-indigo-950/40 text-indigo-700 dark:text-indigo-300 ring-1 ring-indigo-600' : 'border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:border-slate-300 text-slate-700 dark:text-slate-300'}">
                                <div class="flex items-center justify-between mb-1">
                                    <span class="text-[11px] font-black">Thermal 40x30</span>
                                    <span class="text-[9px] px-1 py-0.2 rounded bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300 font-bold">Populer</span>
                                </div>
                                <span class="text-[10px] text-slate-400 block">Stiker Rak &amp; Barang</span>
                            </button>

                            <button type="button" onclick="window.setBarcodeLabelPaper('thermal-50x30')" class="p-2.5 rounded-xl border text-left transition-all cursor-pointer ${labelSettings.paperSize === 'thermal-50x30' ? 'border-indigo-600 bg-indigo-50/60 dark:bg-indigo-950/40 text-indigo-700 dark:text-indigo-300 ring-1 ring-indigo-600' : 'border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:border-slate-300 text-slate-700 dark:text-slate-300'}">
                                <span class="text-[11px] font-black block mb-1">Thermal 50x30</span>
                                <span class="text-[10px] text-slate-400 block">Stiker Ekstra Lega</span>
                            </button>

                            <button type="button" onclick="window.setBarcodeLabelPaper('thermal-58mm')" class="p-2.5 rounded-xl border text-left transition-all cursor-pointer ${labelSettings.paperSize === 'thermal-58mm' ? 'border-indigo-600 bg-indigo-50/60 dark:bg-indigo-950/40 text-indigo-700 dark:text-indigo-300 ring-1 ring-indigo-600' : 'border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:border-slate-300 text-slate-700 dark:text-slate-300'}">
                                <span class="text-[11px] font-black block mb-1">Roll 58 mm</span>
                                <span class="text-[10px] text-slate-400 block">Continuous Stiker</span>
                            </button>

                            <button type="button" onclick="window.setBarcodeLabelPaper('thermal-80mm')" class="p-2.5 rounded-xl border text-left transition-all cursor-pointer ${labelSettings.paperSize === 'thermal-80mm' ? 'border-indigo-600 bg-indigo-50/60 dark:bg-indigo-950/40 text-indigo-700 dark:text-indigo-300 ring-1 ring-indigo-600' : 'border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:border-slate-300 text-slate-700 dark:text-slate-300'}">
                                <span class="text-[11px] font-black block mb-1">Roll 80 mm</span>
                                <span class="text-[10px] text-slate-400 block">Label POS Lebar</span>
                            </button>

                            <button type="button" onclick="window.setBarcodeLabelPaper('a4-3x10')" class="p-2.5 rounded-xl border text-left transition-all cursor-pointer ${labelSettings.paperSize === 'a4-3x10' ? 'border-indigo-600 bg-indigo-50/60 dark:bg-indigo-950/40 text-indigo-700 dark:text-indigo-300 ring-1 ring-indigo-600' : 'border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:border-slate-300 text-slate-700 dark:text-slate-300'}">
                                <div class="flex items-center justify-between mb-1">
                                    <span class="text-[11px] font-black">Kertas A4 (3x10)</span>
                                    <span class="text-[9px] px-1 py-0.2 rounded bg-emerald-100 dark:bg-emerald-900 text-emerald-700 dark:text-emerald-300 font-bold">30 Pcs</span>
                                </div>
                                <span class="text-[10px] text-slate-400 block">Printer Biasa / Inkjet</span>
                            </button>

                            <button type="button" onclick="window.setBarcodeLabelPaper('a4-2x7')" class="p-2.5 rounded-xl border text-left transition-all cursor-pointer ${labelSettings.paperSize === 'a4-2x7' ? 'border-indigo-600 bg-indigo-50/60 dark:bg-indigo-950/40 text-indigo-700 dark:text-indigo-300 ring-1 ring-indigo-600' : 'border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:border-slate-300 text-slate-700 dark:text-slate-300'}">
                                <div class="flex items-center justify-between mb-1">
                                    <span class="text-[11px] font-black">Kertas A4 (2x7)</span>
                                    <span class="text-[9px] px-1 py-0.2 rounded bg-emerald-100 dark:bg-emerald-900 text-emerald-700 dark:text-emerald-300 font-bold">14 Pcs</span>
                                </div>
                                <span class="text-[10px] text-slate-400 block">Label Besar A4</span>
                            </button>
                        </div>
                    </div>

                    <!-- DAFTAR ITEM / VARIAN & JUMLAH CETAK -->
                    <div class="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-2xs space-y-3">
                        <div class="flex items-center justify-between flex-wrap gap-2">
                            <span class="text-xs font-black uppercase tracking-wider text-slate-800 dark:text-slate-200 flex items-center gap-2">
                                <i class="fa-solid fa-list-check text-indigo-600 dark:text-indigo-400"></i>
                                <span>Tentukan Jumlah Label per Varian</span>
                            </span>
                            <div class="flex items-center gap-1.5 text-[11px]">
                                <button type="button" onclick="window.setAllBarcodeLabelQty(1)" class="px-2 py-0.5 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-bold transition-all cursor-pointer">
                                    Set 1 Pcs
                                </button>
                                <button type="button" onclick="window.setAllBarcodeLabelQty('stock')" class="px-2 py-0.5 rounded-lg bg-indigo-50 hover:bg-indigo-100 dark:bg-indigo-950/50 text-indigo-700 dark:text-indigo-300 font-bold border border-indigo-200/70 transition-all cursor-pointer">
                                    Sesuai Stok
                                </button>
                                <button type="button" onclick="window.setAllBarcodeLabelQty(0)" class="px-2 py-0.5 rounded-lg bg-rose-50 hover:bg-rose-100 dark:bg-rose-950/50 text-rose-600 font-bold transition-all cursor-pointer">
                                    Reset (0)
                                </button>
                            </div>
                        </div>

                        <!-- LIST KARTU VARIAN -->
                        <div class="space-y-2.5 max-h-[340px] overflow-y-auto custom-scrollbar pr-1">
                            ${labelItemsQueue.map((it, idx) => {
                                const isInspected = activePreviewIndex === idx;
                                return `
                                    <div class="p-3 sm:p-3.5 rounded-xl border transition-all ${isInspected ? 'border-indigo-500 bg-indigo-50/20 dark:bg-indigo-950/20 shadow-2xs' : 'border-slate-200/90 dark:border-slate-700/80 bg-slate-50/40 dark:bg-slate-800/40 hover:border-slate-300'} flex items-center justify-between gap-3">
                                        <div class="flex items-center gap-2.5 min-w-0 cursor-pointer" onclick="window.selectBarcodePreviewIndex(${idx})">
                                            ${it.hex ? `
                                                <div class="w-5 h-5 rounded-full border border-slate-300 shadow-2xs shrink-0" style="background-color: ${esc(it.hex)}"></div>
                                            ` : `
                                                <div class="w-6 h-6 rounded-lg bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-[10px] text-slate-500 font-bold shrink-0">
                                                    #${idx + 1}
                                                </div>
                                            `}
                                            <div class="min-w-0">
                                                <div class="flex items-center gap-1.5 flex-wrap">
                                                    <span class="text-xs font-black text-slate-800 dark:text-white truncate">
                                                        ${esc(it.variantName || it.name)}
                                                    </span>
                                                    ${isInspected ? `<span class="px-1.5 py-0.2 rounded text-[8.5px] font-black uppercase bg-indigo-600 text-white">Preview</span>` : ''}
                                                </div>
                                                <div class="flex items-center gap-2 text-[10px] text-slate-400 font-medium">
                                                    <span class="font-mono font-bold text-slate-600 dark:text-slate-300">${esc(it.sku)}</span>
                                                    <span>•</span>
                                                    <span>${fCur(it.price)}</span>
                                                    <span>•</span>
                                                    <span>Stok: <b>${it.stock}</b></span>
                                                </div>
                                            </div>
                                        </div>

                                        <!-- STEPPER KUANTITAS -->
                                        <div class="flex items-center gap-1.5 shrink-0">
                                            <button type="button" onclick="window.adjustBarcodeLabelQty(${idx}, -1)" class="w-7 h-7 rounded-lg bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 flex items-center justify-center text-xs font-bold text-slate-600 dark:text-slate-200 hover:bg-slate-100 transition-all cursor-pointer active:scale-95">
                                                <i class="fa-solid fa-minus text-[10px]"></i>
                                            </button>
                                            <input type="number" min="0" max="999" value="${it.qty}" onchange="window.setBarcodeLabelQtyDirect(${idx}, this.value)" class="w-12 h-7 text-center font-mono font-black text-xs border border-slate-200 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 text-slate-800 dark:text-white focus:outline-none focus:border-indigo-500">
                                            <button type="button" onclick="window.adjustBarcodeLabelQty(${idx}, 1)" class="w-7 h-7 rounded-lg bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 flex items-center justify-center text-xs font-bold text-slate-600 dark:text-slate-200 hover:bg-slate-100 transition-all cursor-pointer active:scale-95">
                                                <i class="fa-solid fa-plus text-[10px]"></i>
                                            </button>
                                        </div>
                                    </div>
                                `;
                            }).join('')}
                        </div>
                    </div>

                    <!-- TOGGLE OPSI KONTEN LABEL -->
                    <div class="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-2xs space-y-2.5">
                        <span class="text-xs font-black uppercase tracking-wider text-slate-800 dark:text-slate-200 flex items-center gap-2">
                            <i class="fa-solid fa-sliders text-indigo-600 dark:text-indigo-400"></i>
                            <span>Opsi Tampilan Informasi Stiker</span>
                        </span>
                        
                        <div class="grid grid-cols-2 gap-2.5 text-xs font-bold text-slate-700 dark:text-slate-300">
                            <label class="flex items-center gap-2 cursor-pointer select-none">
                                <input type="checkbox" ${labelSettings.showStoreName ? 'checked' : ''} onchange="window.toggleBarcodeOption('showStoreName', this.checked)" class="w-4 h-4 rounded text-indigo-600 focus:ring-indigo-500">
                                <span>Kop Nama Toko</span>
                            </label>

                            <label class="flex items-center gap-2 cursor-pointer select-none">
                                <input type="checkbox" ${labelSettings.showPrice ? 'checked' : ''} onchange="window.toggleBarcodeOption('showPrice', this.checked)" class="w-4 h-4 rounded text-indigo-600 focus:ring-indigo-500">
                                <span>Harga Jual Produk</span>
                            </label>

                            <label class="flex items-center gap-2 cursor-pointer select-none">
                                <input type="checkbox" ${labelSettings.showUnit ? 'checked' : ''} onchange="window.toggleBarcodeOption('showUnit', this.checked)" class="w-4 h-4 rounded text-indigo-600 focus:ring-indigo-500">
                                <span>Satuan Barang (/ pcs)</span>
                            </label>

                            <label class="flex items-center gap-2 cursor-pointer select-none">
                                <input type="checkbox" ${labelSettings.showSkuText ? 'checked' : ''} onchange="window.toggleBarcodeOption('showSkuText', this.checked)" class="w-4 h-4 rounded text-indigo-600 focus:ring-indigo-500">
                                <span>Teks SKU di Bawah Barcode</span>
                            </label>

                            <label class="flex items-center gap-2 cursor-pointer select-none col-span-2 pt-1 border-t border-slate-100 dark:border-slate-800 text-[11px] text-slate-500">
                                <input type="checkbox" ${labelSettings.showBorderGuide ? 'checked' : ''} onchange="window.toggleBarcodeOption('showBorderGuide', this.checked)" class="w-4 h-4 rounded text-indigo-600 focus:ring-indigo-500">
                                <span>Garis Batas Potong (Gunting) untuk Kertas Stiker Polos A4</span>
                            </label>
                        </div>
                    </div>
                </div>

                <!-- KOLOM KANAN: LIVE PREVIEW SKALA NYATA & RINGKASAN (5 DARI 12) -->
                <div class="lg:col-span-5 space-y-4">
                    
                    <!-- KOTAK PRATINJAU INTERAKTIF STIKER -->
                    <div class="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-2xs space-y-4">
                        <div class="flex items-center justify-between">
                            <span class="text-xs font-black uppercase tracking-wider text-slate-800 dark:text-slate-200 flex items-center gap-2">
                                <i class="fa-solid fa-eye text-indigo-600 dark:text-indigo-400"></i>
                                <span>Pratinjau Fisik Stiker Label</span>
                            </span>
                            <span class="text-[10px] font-mono px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-bold">
                                Skala 1:1
                            </span>
                        </div>

                        <!-- WADAH SIMULASI STIKER FISIK -->
                        <div class="p-6 bg-slate-100 dark:bg-slate-950 rounded-2xl flex items-center justify-center border border-slate-200/60 dark:border-slate-800 min-h-[220px]">
                            <div class="bg-white text-slate-900 rounded-lg shadow-xl p-3 flex flex-col justify-between items-center text-center transition-all ${labelSettings.paperSize === 'thermal-50x30' ? 'w-[230px] h-[145px]' : 'w-[210px] h-[155px]'} border ${labelSettings.showBorderGuide ? 'border-dashed border-slate-400' : 'border-slate-200'}">
                                
                                <!-- KOP TOKO -->
                                ${labelSettings.showStoreName ? `
                                    <div class="text-[9px] font-black tracking-widest uppercase text-slate-700 border-b border-slate-200 w-full pb-0.5 truncate">
                                        ${esc(storeName)}
                                    </div>
                                ` : ''}

                                <!-- NAMA BARANG & VARIAN -->
                                <div class="w-full px-1 pt-0.5">
                                    <p class="text-[10px] font-black leading-tight truncate text-slate-900" title="${esc(activePreviewItem.name)}">
                                        ${esc(activePreviewItem.name)}
                                    </p>
                                    ${activePreviewItem.variantName ? `
                                        <p class="text-[9px] font-bold text-indigo-600 leading-tight truncate mt-0.5">
                                            [${esc(activePreviewItem.variantName)}]
                                        </p>
                                    ` : ''}
                                </div>

                                <!-- BARCODE VEKTOR CODE 128 -->
                                <div class="w-full my-auto px-1 flex flex-col items-center justify-center">
                                    <div class="w-full max-w-[195px]">
                                        ${previewSvg}
                                    </div>
                                </div>

                                <!-- HARGA JUAL -->
                                ${labelSettings.showPrice ? `
                                    <div class="w-full pt-0.5 border-t border-slate-200 flex items-center justify-center gap-1 font-mono">
                                        <span class="text-xs font-black text-slate-950 tracking-tight">
                                            ${fCur(activePreviewItem.price)}
                                        </span>
                                        ${labelSettings.showUnit ? `
                                            <span class="text-[9px] font-bold text-slate-500">/${esc(activePreviewItem.unit || 'pcs')}</span>
                                        ` : ''}
                                    </div>
                                ` : ''}
                            </div>
                        </div>

                        <!-- RINGKASAN PRODUKSI CETAK -->
                        <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/90 dark:border-slate-700/80 space-y-2">
                            <div class="flex items-center justify-between text-xs font-bold text-slate-600 dark:text-slate-300">
                                <span>Total Stiker Dicetak:</span>
                                <span class="text-base font-black text-indigo-600 dark:text-indigo-400 font-mono">${totalLabelsCount} Lembar</span>
                            </div>

                            ${labelSettings.paperSize.startsWith('a4') ? `
                                <div class="flex items-center justify-between text-xs font-bold text-slate-500 dark:text-slate-400 pt-1.5 border-t border-slate-200 dark:border-slate-700">
                                    <span>Estimasi Kertas A4:</span>
                                    <span class="font-black text-slate-800 dark:text-white font-mono">${a4SheetsNeeded} Lembar (${a4PerSheet} label/lembar)</span>
                                </div>
                            ` : `
                                <div class="flex items-center justify-between text-xs font-bold text-slate-500 dark:text-slate-400 pt-1.5 border-t border-slate-200 dark:border-slate-700">
                                    <span>Tipe Media Cetak:</span>
                                    <span class="font-black text-slate-800 dark:text-white">Direct Thermal Sticker Roll</span>
                                </div>
                            `}
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- 3. FOOTER MODAL (SOLID PINNED / MULTI-ACTION) -->
        <div class="shrink-0 px-4 sm:px-6 py-3.5 sm:py-4 border-t border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 flex flex-col sm:flex-row items-center justify-between gap-3 z-10">
            <div class="text-xs text-slate-500 dark:text-slate-400 font-bold hidden sm:block">
                <span>Siap dicetak ke printer label thermal USB/Bluetooth atau printer A4 biasa.</span>
            </div>

            <div class="flex items-center gap-2 w-full sm:w-auto">
                <button type="button" onclick="window.closeProductBarcodeLabelModal()" class="h-11 sm:h-12 px-3.5 sm:px-4 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-bold text-xs hover:bg-slate-100 dark:hover:bg-slate-800 transition-all cursor-pointer active:scale-95 shrink-0 flex items-center justify-center">
                    Batal
                </button>

                <button type="button" onclick="window.printBarcodeLabelsThermalRawbt()" class="flex-1 sm:flex-initial h-11 sm:h-12 px-3.5 sm:px-4 rounded-xl bg-slate-800 hover:bg-slate-900 text-white font-bold text-xs transition-all active:scale-95 shadow-xs flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap" title="Cetak via Thermal Bluetooth / RawBT">
                    <i class="fa-solid fa-satellite-dish text-xs"></i>
                    <span>RawBT / Bluetooth</span>
                </button>

                <button type="button" onclick="window.printBarcodeLabelsBrowser()" class="flex-1 sm:flex-initial h-11 sm:h-12 px-4 sm:px-6 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-black text-xs uppercase tracking-wider transition-all active:scale-95 shadow-md flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap">
                    <i class="fa-solid fa-print text-xs"></i>
                    <span>Cetak Sekarang (${totalLabelsCount})</span>
                </button>
            </div>
        </div>
    `;
};

// ─── Controller & Helper Interaksi ──────────────────────────────────────────

export const setBarcodeLabelPaper = (paperKey) => {
    labelSettings.paperSize = paperKey;
    renderBarcodeLabelModalContent();
};

export const toggleBarcodeOption = (key, val) => {
    labelSettings[key] = Boolean(val);
    renderBarcodeLabelModalContent();
};

export const selectBarcodePreviewIndex = (idx) => {
    if (idx >= 0 && idx < labelItemsQueue.length) {
        activePreviewIndex = idx;
        renderBarcodeLabelModalContent();
    }
};

export const adjustBarcodeLabelQty = (idx, delta) => {
    if (labelItemsQueue[idx]) {
        const cur = parseInt(labelItemsQueue[idx].qty, 10) || 0;
        labelItemsQueue[idx].qty = Math.max(0, cur + delta);
        renderBarcodeLabelModalContent();
    }
};

export const setBarcodeLabelQtyDirect = (idx, val) => {
    if (labelItemsQueue[idx]) {
        labelItemsQueue[idx].qty = Math.max(0, parseInt(val, 10) || 0);
        renderBarcodeLabelModalContent();
    }
};

export const setAllBarcodeLabelQty = (mode) => {
    labelItemsQueue.forEach(it => {
        if (mode === 'stock') {
            it.qty = Math.max(1, Math.round(parseFloat(it.stock) || 1));
        } else if (typeof mode === 'number') {
            it.qty = Math.max(0, mode);
        }
    });
    renderBarcodeLabelModalContent();
};

// ─── Engine Cetak ke Browser Print (Web Print / Isolated Iframe) ──────────────

export const printBarcodeLabelsBrowser = () => {
    const totalCount = labelItemsQueue.reduce((acc, it) => acc + (parseInt(it.qty, 10) || 0), 0);
    if (totalCount <= 0) {
        showToast('Tentukan jumlah label yang akan dicetak terlebih dahulu!');
        return;
    }

    const storeName = appData.store?.name || 'TOKO PUTRI';
    const isA4 = labelSettings.paperSize.startsWith('a4');
    const is50x30 = labelSettings.paperSize === 'thermal-50x30';
    const is58mm = labelSettings.paperSize === 'thermal-58mm';
    const is80mm = labelSettings.paperSize === 'thermal-80mm';

    // Rangkai item berulang sesuai jumlah qty
    const flattenedList = [];
    labelItemsQueue.forEach(it => {
        const qty = parseInt(it.qty, 10) || 0;
        for (let i = 0; i < qty; i++) {
            flattenedList.push(it);
        }
    });

    // Generate HTML untuk tiap label
    const labelsHtml = flattenedList.map(it => {
        const svg = generateCode128Svg(it.sku, {
            height: labelSettings.barcodeHeight,
            showText: labelSettings.showSkuText,
            fontSize: 10
        });

        return `
            <div class="label-item ${labelSettings.showBorderGuide ? 'with-border' : ''}">
                ${labelSettings.showStoreName ? `
                    <div class="lbl-store">${esc(storeName)}</div>
                ` : ''}
                <div class="lbl-info">
                    <div class="lbl-name">${esc(it.name)}</div>
                    ${it.variantName ? `<div class="lbl-variant">[${esc(it.variantName)}]</div>` : ''}
                </div>
                <div class="lbl-barcode">${svg}</div>
                ${labelSettings.showPrice ? `
                    <div class="lbl-price">
                        ${fCur(it.price)}${labelSettings.showUnit ? `<span class="lbl-unit">/${esc(it.unit || 'pcs')}</span>` : ''}
                    </div>
                ` : ''}
            </div>
        `;
    }).join('');

    // Rangkai CSS @page sesuai pilihan media
    let pageCss = '';
    let containerClass = 'thermal-container';

    if (labelSettings.paperSize === 'thermal-40x30') {
        pageCss = `
            @page { size: 40mm 30mm; margin: 0; }
            body { margin: 0; padding: 0; }
            .label-item {
                width: 40mm; height: 30mm;
                page-break-after: always; break-after: page;
                box-sizing: border-box; padding: 1.5mm 2mm;
                display: flex; flex-direction: column; justify-content: space-between; align-items: center; text-align: center;
                overflow: hidden;
            }
        `;
    } else if (labelSettings.paperSize === 'thermal-50x30') {
        pageCss = `
            @page { size: 50mm 30mm; margin: 0; }
            body { margin: 0; padding: 0; }
            .label-item {
                width: 50mm; height: 30mm;
                page-break-after: always; break-after: page;
                box-sizing: border-box; padding: 1.5mm 2.5mm;
                display: flex; flex-direction: column; justify-content: space-between; align-items: center; text-align: center;
                overflow: hidden;
            }
        `;
    } else if (is58mm) {
        pageCss = `
            @page { size: 58mm auto; margin: 0; }
            body { margin: 0; padding: 0; width: 58mm; }
            .label-item {
                width: 54mm; margin: 0 auto 3mm;
                box-sizing: border-box; padding: 2mm 2mm;
                display: flex; flex-direction: column; justify-content: space-between; align-items: center; text-align: center;
                border-bottom: 1px dashed #bbb;
            }
        `;
    } else if (is80mm) {
        pageCss = `
            @page { size: 80mm auto; margin: 0; }
            body { margin: 0; padding: 0; width: 80mm; }
            .label-item {
                width: 76mm; margin: 0 auto 3mm;
                box-sizing: border-box; padding: 2mm 3mm;
                display: flex; flex-direction: column; justify-content: space-between; align-items: center; text-align: center;
                border-bottom: 1px dashed #bbb;
            }
        `;
    } else if (labelSettings.paperSize === 'a4-3x10') {
        containerClass = 'a4-grid-3x10';
        pageCss = `
            @page { size: A4 portrait; margin: 8mm 6mm; }
            body { margin: 0; padding: 0; }
            .a4-grid-3x10 {
                display: grid; grid-template-columns: repeat(3, 1fr); gap: 2.5mm 3.5mm;
            }
            .label-item {
                height: 26.5mm; box-sizing: border-box; padding: 1.5mm 2mm;
                page-break-inside: avoid; break-inside: avoid;
                display: flex; flex-direction: column; justify-content: space-between; align-items: center; text-align: center;
                overflow: hidden;
            }
        `;
    } else if (labelSettings.paperSize === 'a4-2x7') {
        containerClass = 'a4-grid-2x7';
        pageCss = `
            @page { size: A4 portrait; margin: 10mm 8mm; }
            body { margin: 0; padding: 0; }
            .a4-grid-2x7 {
                display: grid; grid-template-columns: repeat(2, 1fr); gap: 3.5mm 4.5mm;
            }
            .label-item {
                height: 38mm; box-sizing: border-box; padding: 2mm 3mm;
                page-break-inside: avoid; break-inside: avoid;
                display: flex; flex-direction: column; justify-content: space-between; align-items: center; text-align: center;
                overflow: hidden;
            }
        `;
    }

    const fullPrintDoc = `<!DOCTYPE html>
    <html lang="id">
    <head>
        <meta charset="UTF-8">
        <title>Cetak Label Barcode - ${esc(storeName)}</title>
        <style>
            * { box-sizing: border-box; }
            html, body {
                font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
                background: #ffffff; color: #000000;
                -webkit-print-color-adjust: exact; print-color-adjust: exact;
            }
            .with-border { border: 1px dashed #888888; }
            .lbl-store {
                font-size: 8px; font-weight: 900; letter-spacing: 1px; text-transform: uppercase;
                border-bottom: 0.5px solid #000; width: 100%; padding-bottom: 1px; margin-bottom: 1px;
                white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
            }
            .lbl-info { width: 100%; margin: 0.5mm 0; }
            .lbl-name {
                font-size: 9px; font-weight: 800; line-height: 1.1;
                white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
            }
            .lbl-variant {
                font-size: 8px; font-weight: 700; line-height: 1.1; margin-top: 0.5px;
                white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
            }
            .lbl-barcode {
                width: 100%; max-width: 98%; margin: auto 0;
                display: flex; align-items: center; justify-content: center;
            }
            .lbl-barcode svg {
                width: 100%; height: auto; max-height: 17mm;
                display: block; margin: 0 auto;
                shape-rendering: crispEdges;
            }
            .lbl-price {
                font-family: 'Courier New', Courier, monospace; font-size: 11px; font-weight: 900;
                border-top: 0.5px solid #000; width: 100%; padding-top: 0.8px; margin-top: 0.5px;
            }
            .lbl-unit { font-size: 8px; font-weight: bold; margin-left: 2px; }
            ${pageCss}
        </style>
    </head>
    <body onload="setTimeout(() => { window.print(); }, 450)">
        <div class="${containerClass}">
            ${labelsHtml}
        </div>
    </body>
    </html>`;

    // Gunakan fallback print iframe terisolasi agar halaman tidak bergeser
    let printIframe = el('barcode-print-isolated-iframe');
    if (!printIframe) {
        printIframe = document.createElement('iframe');
        printIframe.id = 'barcode-print-isolated-iframe';
        printIframe.style.position = 'fixed';
        printIframe.style.right = '0';
        printIframe.style.bottom = '0';
        printIframe.style.width = '0';
        printIframe.style.height = '0';
        printIframe.style.border = '0';
        printIframe.style.opacity = '0';
        printIframe.style.pointerEvents = 'none';
        document.body.appendChild(printIframe);
    }

    try {
        const doc = printIframe.contentWindow.document;
        doc.open();
        doc.write(fullPrintDoc);
        doc.close();
    } catch (e) {
        // Fallback popup window jika iframe diblokir browser
        const w = window.open('', '_blank');
        if (w) {
            w.document.open();
            w.document.write(fullPrintDoc);
            w.document.close();
        } else {
            showToast('Izinkan pop-up peramban untuk mencetak label.');
        }
    }
};

// ─── Engine Cetak ke Thermal RawBT / Bluetooth (ESC/POS) ────────────────────

export const printBarcodeLabelsThermalRawbt = async () => {
    const totalCount = labelItemsQueue.reduce((acc, it) => acc + (parseInt(it.qty, 10) || 0), 0);
    if (totalCount <= 0) {
        showToast('Tentukan jumlah label yang akan dicetak terlebih dahulu!');
        return;
    }

    // Lazy load builder dari modul rawbt
    let rawbtMod;
    try {
        rawbtMod = await import('../../print/rawbt.js');
    } catch (e) {
        showToast('Modul thermal RawBT tidak dapat dimuat.');
        return;
    }

    const { ThermalReceiptBuilder, printViaRawBT } = rawbtMod;
    const storeName = appData.store?.name || 'TOKO PUTRI';
    const builder = new ThermalReceiptBuilder(58);

    labelItemsQueue.forEach(it => {
        const qty = parseInt(it.qty, 10) || 0;
        for (let i = 0; i < qty; i++) {
            builder.align('center');
            if (labelSettings.showStoreName) {
                builder.line(storeName, { bold: true, size: 'normal' });
            }
            builder.line(it.name, { bold: true, size: 'normal' });
            if (it.variantName) {
                builder.line(`[${it.variantName}]`, { size: 'normal' });
            }
            builder.barcode(it.sku, 'CODE128', 55);
            if (labelSettings.showPrice) {
                builder.line(fCur(it.price) + (labelSettings.showUnit ? `/${it.unit || 'pcs'}` : ''), { bold: true, size: 'large' });
            }
            builder.feed(2);
            builder.cut();
        }
    });

    try {
        await printViaRawBT(builder);
        showToast(`Perintah cetak ${totalCount} label dikirim ke RawBT!`);
    } catch (e) {
        showToast('Gagal mengirim ke RawBT: ' + e.message);
    }
};

// ─── Bind Global Windows Exposures ──────────────────────────────────────────

window.openProductBarcodeLabelModal       = openProductBarcodeLabelModal;
window.closeProductBarcodeLabelModal      = closeProductBarcodeLabelModal;
window.setBarcodeLabelPaper               = setBarcodeLabelPaper;
window.toggleBarcodeOption                = toggleBarcodeOption;
window.selectBarcodePreviewIndex          = selectBarcodePreviewIndex;
window.adjustBarcodeLabelQty              = adjustBarcodeLabelQty;
window.setBarcodeLabelQtyDirect           = setBarcodeLabelQtyDirect;
window.setAllBarcodeLabelQty              = setAllBarcodeLabelQty;
window.printBarcodeLabelsBrowser          = printBarcodeLabelsBrowser;
window.printBarcodeLabelsThermalRawbt     = printBarcodeLabelsThermalRawbt;
