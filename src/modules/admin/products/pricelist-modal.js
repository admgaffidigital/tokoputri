/**
 * ============================================================
 * MODAL EKSPOR BROSUR & DAFTAR HARGA CEPAT (PDF A4 & WHATSAPP)
 * Toko Putri - Solusi Cetak Katalog Resmi Kontraktor, Tukang & Klien Proyek
 * Mendukung Ekspor PDF A4 Multi-Halaman & 1-Klik Salin Format WhatsApp
 * ============================================================
 */

import { el, esc, fCur, showToast, openModalAnim, closeModalAnim } from '../../../core/utils.js';
import { appData } from '../../../core/state.js';

/**
 * Pastikan kontainer modal ekspor daftar harga terpasang di DOM
 */
export const ensurePriceListExportModal = () => {
    let m = el('modal-pricelist-export');
    if (!m) {
        m = document.createElement('div');
        m.id = 'modal-pricelist-export';
        m.className = 'fixed inset-0 z-[150] flex hidden items-end sm:items-center justify-center p-0 sm:p-4 bg-slate-950/80 opacity-0 transition-opacity duration-300';
        m.onclick = (e) => { if (e.target === m) window.closePriceListExportModal?.(); };
        m.innerHTML = `
            <div id="modal-pricelist-export-box" class="modal-bottom-sheet relative flex max-h-[92dvh] sm:max-h-[88dvh] w-full max-w-xl translate-y-full sm:translate-y-10 transform flex-col overflow-hidden rounded-t-[2rem] sm:rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-2xl transition-transform duration-300">
                <!-- Pull Indicator Pill for Mobile Swipe -->
                <div class="w-12 h-1.5 bg-slate-300 dark:bg-slate-600 rounded-full mx-auto my-2.5 sm:hidden shrink-0"></div>

                <!-- Header Modal with Dynamic Theme Gradient -->
                <div class="px-5 py-4 border-b border-slate-200/80 dark:border-slate-800 flex items-center justify-between gap-3 shrink-0" style="background: linear-gradient(135deg, rgba(var(--color-primary-rgb), 0.08) 0%, rgba(var(--color-primary-rgb), 0.02) 100%);">
                    <div class="flex items-center gap-3 min-w-0">
                        <div class="w-10 h-10 rounded-2xl flex items-center justify-center text-white shrink-0 shadow-xs" style="background: var(--color-primary);">
                            <i class="fa-solid fa-file-pdf text-lg"></i>
                        </div>
                        <div class="min-w-0">
                            <h3 class="text-base font-extrabold text-slate-900 dark:text-white truncate">Ekspor Brosur &amp; Daftar Harga</h3>
                            <p class="text-xs text-slate-500 dark:text-slate-400 font-medium truncate">Katalog Cepat untuk Kontraktor &amp; Tukang (PDF / WA)</p>
                        </div>
                    </div>
                    <button onclick="window.closePriceListExportModal()" type="button" class="w-9 h-9 rounded-xl flex items-center justify-center text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors shrink-0 cursor-pointer" title="Tutup">
                        <i class="fa-solid fa-xmark text-lg"></i>
                    </button>
                </div>

                <!-- Modal Body (Scrollable) -->
                <div class="flex-1 overflow-y-auto custom-scrollbar p-5 space-y-4">
                    <!-- Filter Kategori -->
                    <div>
                        <label for="pl-filter-category" class="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300 mb-1.5">
                            <i class="fa-solid fa-layer-group text-[var(--color-primary)] mr-1"></i> Pilih Kategori Produk:
                        </label>
                        <div class="relative">
                            <select id="pl-filter-category" onchange="window.updatePriceListSummaryPill()" class="w-full h-11 px-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/80 text-slate-800 dark:text-slate-100 font-bold text-[16px] sm:text-xs border border-slate-200 dark:border-slate-700/80 focus:outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/15 transition-all cursor-pointer">
                                <!-- Populated dynamically -->
                            </select>
                        </div>
                    </div>

                    <!-- Filter Pencarian Spesifik -->
                    <div>
                        <label for="pl-filter-search" class="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300 mb-1.5">
                            <i class="fa-solid fa-magnifying-glass text-slate-400 mr-1"></i> Filter Kata Kunci / Merek (Opsional):
                        </label>
                        <div class="relative">
                            <input type="text" id="pl-filter-search" placeholder="Contoh: Semen Gresik, Pipa PVC, Holo..." oninput="window.updatePriceListSummaryPill()" class="w-full h-11 px-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/80 text-slate-800 dark:text-slate-100 font-medium text-[16px] sm:text-xs border border-slate-200 dark:border-slate-700/80 focus:outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/15 transition-all">
                        </div>
                    </div>

                    <!-- Pengaturan Opsi Tampilan -->
                    <div class="bg-slate-50 dark:bg-slate-800/40 p-4 rounded-2xl border border-slate-200/80 dark:border-slate-700/80 space-y-2.5">
                        <span class="block text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                            <i class="fa-solid fa-sliders mr-1 text-[var(--color-primary)]"></i> Opsi Format Konten:
                        </span>
                        
                        <label class="flex items-center gap-3 cursor-pointer select-none">
                            <input type="checkbox" id="pl-opt-variants" checked onchange="window.updatePriceListSummaryPill()" class="w-4 h-4 rounded text-[var(--color-primary)] focus:ring-[var(--color-primary)] border-slate-300 cursor-pointer">
                            <span class="text-xs font-semibold text-slate-700 dark:text-slate-200">Sertakan Rincian Multi-Varian &amp; Multi-Satuan</span>
                        </label>

                        <label class="flex items-center gap-3 cursor-pointer select-none">
                            <input type="checkbox" id="pl-opt-wholesale" checked onchange="window.updatePriceListSummaryPill()" class="w-4 h-4 rounded text-[var(--color-primary)] focus:ring-[var(--color-primary)] border-slate-300 cursor-pointer">
                            <span class="text-xs font-semibold text-slate-700 dark:text-slate-200">Tampilkan Kolom Harga Grosir / Borongan Proyek</span>
                        </label>

                        <label class="flex items-center gap-3 cursor-pointer select-none">
                            <input type="checkbox" id="pl-opt-stock" checked onchange="window.updatePriceListSummaryPill()" class="w-4 h-4 rounded text-[var(--color-primary)] focus:ring-[var(--color-primary)] border-slate-300 cursor-pointer">
                            <span class="text-xs font-semibold text-slate-700 dark:text-slate-200">Tampilkan Status Ketersediaan (Ready Stock / Inden)</span>
                        </label>

                        <label class="flex items-center gap-3 cursor-pointer select-none">
                            <input type="checkbox" id="pl-opt-inactive" onchange="window.updatePriceListSummaryPill()" class="w-4 h-4 rounded text-[var(--color-primary)] focus:ring-[var(--color-primary)] border-slate-300 cursor-pointer">
                            <span class="text-xs font-semibold text-slate-700 dark:text-slate-200">Sertakan Produk Nonaktif / Diarsipkan</span>
                        </label>
                    </div>

                    <!-- Dynamic Live Counter Pill -->
                    <div id="pl-summary-pill" class="p-3.5 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/60 flex items-center justify-between text-xs font-bold text-emerald-800 dark:text-emerald-300">
                        <span class="flex items-center gap-2">
                            <i class="fa-solid fa-circle-check text-emerald-600"></i>
                            <span id="pl-summary-count-text">0 Produk terpilih</span>
                        </span>
                        <span class="text-[10.5px] font-normal text-emerald-700 dark:text-emerald-400">Siap diekspor</span>
                    </div>
                </div>

                <!-- Footer Modal with 2 Primary Action Buttons -->
                <div class="p-4 sm:p-5 border-t border-slate-200/80 dark:border-slate-800 bg-slate-50 dark:bg-slate-850 flex flex-col sm:flex-row gap-2.5 shrink-0">
                    <!-- Button WhatsApp -->
                    <button onclick="window.executePriceListExport('wa')" type="button" class="flex-1 h-12 px-4 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2.5 active:scale-95 transition-all shadow-md cursor-pointer" title="Salin teks daftar harga rapi untuk WhatsApp">
                        <i class="fa-brands fa-whatsapp text-lg"></i>
                        <div class="text-left">
                            <div class="leading-tight">Salin Teks WhatsApp</div>
                            <div class="text-[10px] font-normal opacity-90">1-Klik Paste ke Chat/Grup</div>
                        </div>
                    </button>

                    <!-- Button PDF A4 -->
                    <button onclick="window.executePriceListExport('pdf')" type="button" class="flex-1 h-12 px-4 rounded-2xl text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2.5 active:scale-95 transition-all shadow-md cursor-pointer" style="background: var(--color-primary); box-shadow: 0 4px 14px rgba(var(--color-primary-rgb), 0.35);" title="Buka preview cetak A4 resmi dengan kop surat toko">
                        <i class="fa-solid fa-file-pdf text-lg"></i>
                        <div class="text-left">
                            <div class="leading-tight">Preview &amp; Cetak PDF</div>
                            <div class="text-[10px] font-normal opacity-90">Kop Resmi A4 Presisi</div>
                        </div>
                    </button>
                </div>
            </div>
        `;
        document.body.appendChild(m);
    }
};

/**
 * Filter item produk sesuai pengaturan modal
 */
export const getFilteredPriceListProducts = (options = {}) => {
    const selectedCategory = options.category || '';
    const searchQuery = (options.search || '').toLowerCase().trim();
    const includeInactive = options.includeInactive === true;
    const rawProducts = options.products || appData.products || [];

    return rawProducts.filter(p => {
        if (!includeInactive && (p.isActive === false || p.isActive === 'false')) return false;
        if (selectedCategory && selectedCategory !== 'all' && (p.category || '').toLowerCase() !== selectedCategory.toLowerCase()) return false;
        if (searchQuery) {
            const matchesName = (p.name || '').toLowerCase().includes(searchQuery);
            const matchesSku = (p.sku || p.barcode || '').toLowerCase().includes(searchQuery);
            const matchesCat = (p.category || '').toLowerCase().includes(searchQuery);
            const matchesBrand = (p.brand || '').toLowerCase().includes(searchQuery);
            if (!matchesName && !matchesSku && !matchesCat && !matchesBrand) return false;
        }
        return true;
    });
};

/**
 * Update informasi ringkasan pill live counter di dalam modal
 */
export const updatePriceListSummaryPill = () => {
    const catEl = el('pl-filter-category');
    const searchEl = el('pl-filter-search');
    const inactEl = el('pl-opt-inactive');

    const options = {
        category: catEl ? catEl.value : 'all',
        search: searchEl ? searchEl.value : '',
        includeInactive: inactEl ? inactEl.checked : false
    };

    const count = getFilteredPriceListProducts(options).length;
    const txtEl = el('pl-summary-count-text');
    if (txtEl) {
        txtEl.textContent = `${count} Produk terpilih`;
    }
};

/**
 * Buka modal konfigurasi ekspor daftar harga
 */
export const openPriceListExportModal = () => {
    ensurePriceListExportModal();

    // Populasi opsi kategori secara dinamis
    const catSelect = el('pl-filter-category');
    if (catSelect) {
        const products = appData.products || [];
        const rawCategories = Array.isArray(appData.categories) ? appData.categories : [];
        const catMap = new Map();

        // Hitung produk per kategori
        products.forEach(p => {
            const cName = (p.category || 'Lainnya').trim();
            catMap.set(cName, (catMap.get(cName) || 0) + 1);
        });

        rawCategories.forEach(c => {
            const cName = typeof c === 'string' ? c : (c.name || '');
            if (cName && !catMap.has(cName)) catMap.set(cName, 0);
        });

        let optsHtml = `<option value="all">Semua Kategori (${products.length} Produk)</option>`;
        Array.from(catMap.entries())
            .sort((a, b) => a[0].localeCompare(b[0]))
            .forEach(([cName, count]) => {
                optsHtml += `<option value="${esc(cName)}">${esc(cName)} (${count} Produk)</option>`;
            });

        catSelect.innerHTML = optsHtml;
        catSelect.value = 'all';
    }

    const searchInput = el('pl-filter-search');
    if (searchInput) searchInput.value = '';

    updatePriceListSummaryPill();

    const m = el('modal-pricelist-export');
    const b = el('modal-pricelist-export-box');
    if (m && m.classList.contains('hidden') && typeof window.pushModalHistory === 'function') {
        window.pushModalHistory('priceListExport');
    }
    openModalAnim(m, b);
};

/**
 * Tutup modal konfigurasi ekspor daftar harga
 */
export const closePriceListExportModal = (fromHistory = false) => {
    const m = el('modal-pricelist-export');
    const b = el('modal-pricelist-export-box');
    if (!m) return;
    if (!fromHistory && typeof window.requestCloseModal === 'function') {
        window.requestCloseModal('priceListExport', false, () => closeModalAnim(m, b));
    } else {
        closeModalAnim(m, b);
    }
};

/**
 * Format teks WhatsApp yang rapi, informatif, dan siap kirim ke kontraktor / grup
 */
export const formatPriceListWhatsApp = (options = {}) => {
    const selectedCategory = options.category || '';
    const includeVariants = options.includeVariants !== false;
    const includeWholesale = options.includeWholesale !== false;
    const includeStock = options.includeStock !== false;

    const store = options.store || appData.store || {};
    const storeName = store.name || 'Toko Putri';
    const storeSlogan = store.slogan || 'Pusat Bahan Bangunan & Alat Teknik';
    const storeAddress = store.address || '';
    const storeWa = store.wa || store.phone || '';
    const cleanWa = storeWa.replace(/[^0-9]/g, '');

    const prods = getFilteredPriceListProducts(options);

    // Urutkan per kategori lalu nama produk
    prods.sort((a, b) => {
        const catA = (a.category || 'Lainnya').toLowerCase();
        const catB = (b.category || 'Lainnya').toLowerCase();
        if (catA !== catB) return catA.localeCompare(catB);
        return (a.name || '').localeCompare(b.name || '');
    });

    const now = new Date();
    const dateStr = now.toLocaleDateString('id-ID', { day: '2-digit', month: 'short', year: 'numeric' });

    let lines = [];
    lines.push(`📋 *KATALOG & DAFTAR HARGA MATERIAL*`);
    lines.push(`*${storeName.toUpperCase()}*`);
    if (storeSlogan) lines.push(`_${storeSlogan}_`);
    if (storeAddress) lines.push(`📍 ${storeAddress}`);
    if (cleanWa) lines.push(`📞 WhatsApp: https://wa.me/${cleanWa}`);
    lines.push(`📅 Tanggal: ${dateStr}`);
    if (selectedCategory && selectedCategory !== 'all') {
        lines.push(`🏷️ Kategori: *${selectedCategory.toUpperCase()}*`);
    }
    lines.push(`━━━━━━━━━━━━━━━━━━━━━`);
    lines.push(`💡 _Catatan: Harga sewaktu-waktu dapat berubah mengikuti fluktuasi pabrik._\n`);

    if (prods.length === 0) {
        lines.push(`_Tidak ada produk yang sesuai dengan filter._\n`);
    } else {
        let currentCat = '';
        let itemIndex = 1;

        prods.forEach(p => {
            const pCat = (p.category || 'LAINNYA').toUpperCase();
            if (pCat !== currentCat && (!selectedCategory || selectedCategory === 'all')) {
                currentCat = pCat;
                lines.push(`\n📂 *[ ${currentCat} ]*`);
                itemIndex = 1;
            }

            const pUnit = (p.unit || 'pcs').toUpperCase();
            const pPrice = fCur(p.price || 0);
            const stockQty = parseFloat(p.stock) || 0;
            const stockStatus = stockQty > 0 ? 'Ready ✅' : 'PO / Inden ⏳';

            lines.push(`\n*${itemIndex}. ${p.name.toUpperCase()}*`);
            lines.push(`   • Satuan: ${pUnit}`);
            lines.push(`   • Eceran: ${pPrice}`);

            if (includeWholesale) {
                if (Array.isArray(p.wholesale) && p.wholesale.length > 0) {
                    const wsLines = p.wholesale.map(w => `≥${w.min} ${pUnit}: ${fCur(w.price)}`).join(', ');
                    lines.push(`   • Grosir: ${wsLines}`);
                } else if (p.wholesalePrice && p.wholesalePrice < p.price) {
                    lines.push(`   • Grosir: ${fCur(p.wholesalePrice)} (Min. ${p.wholesaleMin || 10} ${pUnit})`);
                }
            }

            if (includeVariants && Array.isArray(p.variants) && p.variants.length > 0) {
                const varList = p.variants.map(v => `${v.name}${v.price ? ` (${fCur(v.price)})` : ''}`).join(', ');
                lines.push(`   • Varian: ${varList}`);
            }

            if (includeVariants && Array.isArray(p.multiUnits) && p.multiUnits.length > 0) {
                const muList = p.multiUnits.map(mu => `${mu.name} (${mu.multiplier} ${pUnit}) @ ${fCur(mu.price)}`).join(', ');
                lines.push(`   • Multi-Satuan: ${muList}`);
            }

            if (includeStock) {
                lines.push(`   • Status: ${stockStatus}`);
            }

            itemIndex++;
        });
    }

    lines.push(`\n━━━━━━━━━━━━━━━━━━━━━`);
    lines.push(`🚛 *Pemesanan Cepat, Borongan & Proyek:*`);
    lines.push(`Hubungi WhatsApp resmi kami:`);
    lines.push(`👉 https://wa.me/${cleanWa}?text=Halo%20Admin%20${encodeURIComponent(storeName)},%20saya%20ingin%20tanya%20harga%20dan%20stok%20material.`);

    return lines.join('\n');
};

/**
 * Salin teks format WhatsApp ke clipboard perangkat
 */
export const copyPriceListWhatsApp = async (options = {}) => {
    try {
        const text = formatPriceListWhatsApp(options);
        if (navigator.clipboard && typeof navigator.clipboard.writeText === 'function') {
            await navigator.clipboard.writeText(text);
        } else {
            const ta = document.createElement('textarea');
            ta.value = text;
            ta.style.position = 'fixed';
            ta.style.top = '-9999px';
            document.body.appendChild(ta);
            ta.focus();
            ta.select();
            document.execCommand('copy');
            document.body.removeChild(ta);
        }
        showToast('Format WhatsApp berhasil disalin ke clipboard! Siap dipaste.');
        return true;
    } catch (err) {
        console.error('Gagal menyalin format WhatsApp:', err);
        showToast('Gagal menyalin teks: ' + (err.message || 'Izin clipboard ditolak'));
        return false;
    }
};

/**
 * Eksekusi ekspor berdasarkan mode ('pdf' atau 'wa')
 */
export const executePriceListExport = async (mode = 'pdf') => {
    const catEl = el('pl-filter-category');
    const searchEl = el('pl-filter-search');
    const varEl = el('pl-opt-variants');
    const wsEl = el('pl-opt-wholesale');
    const stEl = el('pl-opt-stock');
    const inactEl = el('pl-opt-inactive');

    const options = {
        category: catEl ? catEl.value : 'all',
        search: searchEl ? searchEl.value.trim() : '',
        includeVariants: varEl ? varEl.checked : true,
        includeWholesale: wsEl ? wsEl.checked : true,
        includeStock: stEl ? stEl.checked : true,
        includeInactive: inactEl ? inactEl.checked : false
    };

    if (mode === 'pdf') {
        closePriceListExportModal();
        if (typeof window.openDocPreview === 'function') {
            window.openDocPreview('pricelist', options);
        } else {
            showToast('Modul dokumen cetak belum siap.');
        }
    } else if (mode === 'wa') {
        const ok = await copyPriceListWhatsApp(options);
        if (ok) {
            closePriceListExportModal();
        }
    }
};

// ─── Expose ke window untuk kompatibilitas script inline HTML ───────
if (typeof window !== 'undefined') {
    window.openPriceListExportModal = openPriceListExportModal;
    window.closePriceListExportModal = closePriceListExportModal;
    window.executePriceListExport = executePriceListExport;
    window.updatePriceListSummaryPill = updatePriceListSummaryPill;
    window.formatPriceListWhatsApp = formatPriceListWhatsApp;
    window.copyPriceListWhatsApp = copyPriceListWhatsApp;
    window.getFilteredPriceListProducts = getFilteredPriceListProducts;
}
