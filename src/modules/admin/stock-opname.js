/**
 * ============================================================
 * MODUL ADMIN: STOCK OPNAME & AUDIT INVENTORI FISIK
 * (Physical Stock Inventory Audit, Discrepancy & Reconciliation Hub)
 * Toko Putri v1.10.19
 * 
 * Fitur Utama:
 * 1. Sesi Audit Fisik Aktif (Active Stock Audit):
 *    - Sinkronisasi instan seluruh katalog produk & varian
 *    - Barcode scanner kamera (HTML5-QRCode) & barcode gun USB/Bluetooth
 *    - Fast search & input instan dengan auto-focus
 *    - Tombol cepat hitung fisik: [-1], [+1], [Samakan], input angka langsung
 *    - Rekonsiliasi selisih real-time: Sistem vs Fisik, Status (+ / - / Sesuai)
 * 2. Bento Stat Cards & Rekapitulasi Selisih:
 *    - Total Item Diperiksa (Counted vs Total)
 *    - Stok Sesuai (Balance)
 *    - Selisih Kurang (Loss / Defisit) + Total Kerugian Modal HPP (Rp)
 *    - Selisih Lebih (Surplus) + Total Tambahan Modal HPP (Rp)
 *    - Net Variance (Dampak Finansial Bersih Rp)
 * 3. HPP Privacy Guard:
 *    - Kasir atau staf tanpa izin canViewHpp() hanya melihat selisih unit fisik,
 *      nilai rupiah HPP disembunyikan/dirahasiakan secara aman.
 * 4. Pilihan Alasan Selisih Cerdas:
 *    - Barang Rusak/Cacat, Hilang/Shrinkage, Salah Hitung Kasir,
 *      Kadaluarsa/Expired, Bonus Supplier/Temuan, Retur Tertunda, Lainnya.
 * 5. Eksekusi Atomic Finalisasi & Penyesuaian Stok:
 *    - Firestore batch write ke sub-koleksi products/{id} & live update memory
 *    - Penerbitan nomor Berita Acara resmi (SO-YYYYMMDD-XXXX)
 *    - Penyimpanan riwayat permanen ke cloud Firestore (appData.stockOpnameHistory)
 * 6. Arsip & Riwayat Berita Acara:
 *    - Tinjau seluruh audit masa lalu lengkap dengan rekapitulasi & staf auditor
 * 7. Cetak Resmi Standar A4:
 *    - Berita Acara Stock Opname Resmi A4 (dengan Kop Toko, Tabel & Tanda Tangan)
 *    - Lembar Kerja Hitung Fisik (Worksheet A4) untuk dibawa staf ke rak toko
 * ============================================================
 */

import { appData } from '../../core/state.js';
import { 
    el, setH, esc, fCur, showToast, showConfirm, sLoad, hLoad, 
    fixD, openModalAnim, closeModalAnim, renderProductCoverHtml 
} from '../../core/utils.js';
import { saveApp } from '../../services/storage.js';
import { db } from '../../config/firebase.js';
import { canViewHpp, isOwnerUser, getActiveStaff, hasPermission } from '../../core/auth-roles.js';

// ─── State Internal Modul ────────────────────────────────────
let soActiveSubTab = 'active';        // 'active' | 'history'
let soCategoryFilter = 'all';
let soBrandFilter = 'all';
let soStatusFilter = 'all';          // 'all' | 'diff' | 'matched' | 'uncounted' | 'loss' | 'surplus'
let soSearchQuery = '';
let soAuditSession = {};             // Map key -> item audit
let soAuditorName = '';
let soAuditNotes = '';
let soActiveModalDetail = null;

// Presets Alasan Selisih
export const SO_DISCREPANCY_REASONS = [
    { key: 'salah_hitung', label: 'Salah Catat / Koreksi Kasir', icon: 'fa-calculator', color: 'blue' },
    { key: 'rusak', label: 'Barang Rusak / Cacat Fisik', icon: 'fa-box-tissue', color: 'rose' },
    { key: 'hilang', label: 'Barang Hilang / Shrinkage', icon: 'fa-user-secret', color: 'rose' },
    { key: 'kadaluarsa', label: 'Kadaluarsa / Expired', icon: 'fa-calendar-xmark', color: 'amber' },
    { key: 'bonus', label: 'Bonus Supplier / Temuan Fisik', icon: 'fa-gift', color: 'emerald' },
    { key: 'retur_pending', label: 'Retur Pembeli Belum Diinput', icon: 'fa-rotate-left', color: 'purple' },
    { key: 'lainnya', label: 'Alasan Lainnya', icon: 'fa-file-lines', color: 'slate' }
];

// ─── Helper Generator Nomor Berita Acara ─────────────────────
export const generateSoNumber = () => {
    const now = new Date();
    const y = now.getFullYear();
    const m = String(now.getMonth() + 1).padStart(2, '0');
    const d = String(now.getDate()).padStart(2, '0');
    const rnd = Math.floor(1000 + Math.random() * 9000);
    return `SO-${y}${m}${d}-${rnd}`;
};

// ─── Format Tanggal Indonesia ────────────────────────────────
const formatSoDate = (dateVal) => {
    if (!dateVal) return '-';
    try {
        const d = dateVal.toDate ? dateVal.toDate() : new Date(dateVal);
        return d.toLocaleDateString('id-ID', { 
            day: '2-digit', month: 'short', year: 'numeric',
            hour: '2-digit', minute: '2-digit'
        });
    } catch (_) {
        return String(dateVal);
    }
};

/**
 * Inisialisasi atau Sinkronisasi Data Produk ke Sesi Audit
 */
export const initOrSyncAuditItems = () => {
    const products = appData.products || [];
    const newSession = { ...soAuditSession };

    products.forEach(p => {
        if (!p || p.id == null) return;
        const pId = String(p.id);
        const hasVariants = Array.isArray(p.variants) && p.variants.length > 0;

        if (hasVariants) {
            p.variants.forEach((v, vIdx) => {
                const key = `${pId}_v${vIdx}`;
                const sysStock = parseFloat(v.stock) || 0;
                const hpp = parseFloat(v.hpp) || parseFloat(p.hpp) || 0;
                const price = parseFloat(v.price) || parseFloat(p.price) || 0;

                if (!newSession[key]) {
                    newSession[key] = {
                        key,
                        productId: p.id,
                        variantIndex: vIdx,
                        variantName: v.name || `Varian #${vIdx + 1}`,
                        productName: p.name || 'Produk Tanpa Nama',
                        sku: v.sku || p.sku || '',
                        barcode: v.barcode || p.barcode || '',
                        category: p.category || 'Umum',
                        brand: p.brand || '-',
                        unit: p.unit || 'pcs',
                        img: v.img || p.img || '',
                        colorCode: v.colorCode || '',
                        systemStock: sysStock,
                        physicalStock: null,
                        diff: 0,
                        hpp,
                        price,
                        diffValueHpp: 0,
                        reason: 'salah_hitung',
                        notes: '',
                        isCounted: false
                    };
                } else {
                    // Update system stock in case it changed externally
                    newSession[key].systemStock = sysStock;
                    newSession[key].hpp = hpp;
                    newSession[key].price = price;
                    if (newSession[key].isCounted && newSession[key].physicalStock !== null) {
                        newSession[key].diff = newSession[key].physicalStock - sysStock;
                        newSession[key].diffValueHpp = newSession[key].diff * hpp;
                    }
                }
            });
        } else {
            const key = `${pId}_main`;
            const sysStock = parseFloat(p.stock) || 0;
            const hpp = parseFloat(p.hpp) || 0;
            const price = parseFloat(p.price) || 0;

            if (!newSession[key]) {
                newSession[key] = {
                    key,
                    productId: p.id,
                    variantIndex: null,
                    variantName: null,
                    productName: p.name || 'Produk Tanpa Nama',
                    sku: p.sku || '',
                    barcode: p.barcode || '',
                    category: p.category || 'Umum',
                    brand: p.brand || '-',
                    unit: p.unit || 'pcs',
                    img: p.img || '',
                    colorCode: '',
                    systemStock: sysStock,
                    physicalStock: null,
                    diff: 0,
                    hpp,
                    price,
                    diffValueHpp: 0,
                    reason: 'salah_hitung',
                    notes: '',
                    isCounted: false
                };
            } else {
                newSession[key].systemStock = sysStock;
                newSession[key].hpp = hpp;
                newSession[key].price = price;
                if (newSession[key].isCounted && newSession[key].physicalStock !== null) {
                    newSession[key].diff = newSession[key].physicalStock - sysStock;
                    newSession[key].diffValueHpp = newSession[key].diff * hpp;
                }
            }
        }
    });

    soAuditSession = newSession;

    // Set default auditor name from active session if empty
    if (!soAuditorName) {
        const staff = getActiveStaff();
        soAuditorName = staff?.name || (isOwnerUser() ? 'Owner Toko' : 'Staf Gudang & Kasir');
    }
};

/**
 * Filter Items Sesuai Tab & Filter Kontrol Aktif
 */
export const getFilteredAuditItems = () => {
    let items = Object.values(soAuditSession);

    if (soCategoryFilter !== 'all') {
        items = items.filter(it => it.category === soCategoryFilter);
    }
    if (soBrandFilter !== 'all') {
        items = items.filter(it => it.brand === soBrandFilter);
    }
    if (soStatusFilter === 'diff') {
        items = items.filter(it => it.isCounted && it.diff !== 0);
    } else if (soStatusFilter === 'matched') {
        items = items.filter(it => it.isCounted && it.diff === 0);
    } else if (soStatusFilter === 'uncounted') {
        items = items.filter(it => !it.isCounted);
    } else if (soStatusFilter === 'loss') {
        items = items.filter(it => it.isCounted && it.diff < 0);
    } else if (soStatusFilter === 'surplus') {
        items = items.filter(it => it.isCounted && it.diff > 0);
    }

    if (soSearchQuery) {
        const q = soSearchQuery.toLowerCase().trim();
        items = items.filter(it => 
            it.productName.toLowerCase().includes(q) ||
            (it.variantName && it.variantName.toLowerCase().includes(q)) ||
            (it.sku && it.sku.toLowerCase().includes(q)) ||
            (it.barcode && it.barcode.toLowerCase().includes(q)) ||
            (it.category && it.category.toLowerCase().includes(q)) ||
            (it.brand && it.brand.toLowerCase().includes(q))
        );
    }

    return items;
};

/**
 * Hitung Metrik Statistik Sesi Audit
 */
export const computeAuditStats = () => {
    const allItems = Object.values(soAuditSession);
    const totalItems = allItems.length;
    let countedCount = 0;
    let matchedCount = 0;
    let lossCount = 0;
    let surplusCount = 0;
    let totalLossUnits = 0;
    let totalSurplusUnits = 0;
    let totalLossRp = 0;
    let totalSurplusRp = 0;

    allItems.forEach(it => {
        if (it.isCounted && it.physicalStock !== null) {
            countedCount++;
            if (it.diff === 0) {
                matchedCount++;
            } else if (it.diff < 0) {
                lossCount++;
                totalLossUnits += Math.abs(it.diff);
                totalLossRp += Math.abs(it.diffValueHpp);
            } else if (it.diff > 0) {
                surplusCount++;
                totalSurplusUnits += it.diff;
                totalSurplusRp += it.diffValueHpp;
            }
        }
    });

    const netVarianceUnits = totalSurplusUnits - totalLossUnits;
    const netVarianceRp = totalSurplusRp - totalLossRp;

    return {
        totalItems,
        countedCount,
        uncountedCount: totalItems - countedCount,
        matchedCount,
        lossCount,
        surplusCount,
        totalLossUnits,
        totalSurplusUnits,
        netVarianceUnits,
        totalLossRp,
        totalSurplusRp,
        netVarianceRp
    };
};

/**
 * Handler Input Cepat Barcode (Kamera / USB Gun)
 */
export const handleSoBarcodeScan = (rawCode) => {
    if (!rawCode) return;
    const code = String(rawCode).trim().toLowerCase();
    if (!code) return;

    // Cari item yang persis cocok dengan barcode atau SKU
    const allItems = Object.values(soAuditSession);
    const matched = allItems.find(it => 
        (it.barcode && it.barcode.toLowerCase() === code) ||
        (it.sku && it.sku.toLowerCase() === code)
    );

    if (matched) {
        // Auto increment atau set initial fisik
        const currentPhys = matched.physicalStock !== null ? matched.physicalStock : 0;
        setSoPhysicalCount(matched.key, currentPhys + 1);

        // Scroll & highlight item
        requestAnimationFrame(() => {
            const rowEl = document.getElementById(`so-row-${matched.key}`);
            if (rowEl) {
                rowEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
                rowEl.classList.add('ring-2', 'ring-[var(--color-primary)]', 'bg-[rgba(var(--color-primary-rgb),0.08)]');
                setTimeout(() => {
                    rowEl.classList.remove('ring-2', 'ring-[var(--color-primary)]', 'bg-[rgba(var(--color-primary-rgb),0.08)]');
                }, 1500);
            }
        });

        // Mainkan suara kasir jika tersedia
        try { window.playCashierBeep?.(); } catch (_) {}
        showToast(`Ditemukan: ${matched.productName} (+1 Fisik) ✨`);
    } else {
        // Jika tidak persis, masukkan ke kolom search query
        soSearchQuery = rawCode.trim();
        const searchInput = el('so-quick-search-input');
        if (searchInput) searchInput.value = soSearchQuery;
        renderSoActiveItems();
        showToast(`Pencarian: "${rawCode}"`);
    }
};

/**
 * Update Nilai Hitung Fisik Item
 */
export const setSoPhysicalCount = (key, val) => {
    const item = soAuditSession[key];
    if (!item) return;

    if (val === null || val === '' || isNaN(val)) {
        item.physicalStock = null;
        item.isCounted = false;
        item.diff = 0;
        item.diffValueHpp = 0;
    } else {
        const num = Math.max(0, parseFloat(val) || 0);
        item.physicalStock = num;
        item.isCounted = true;
        item.diff = num - item.systemStock;
        item.diffValueHpp = item.diff * item.hpp;
        if (item.diff === 0) item.reason = 'sesuai';
    }

    renderSoStatsBar();
    updateSoItemRowDom(key);
};

/**
 * Samakan Stok Fisik dengan Stok Sistem (1-Klik)
 */
export const matchSoItem = (key) => {
    const item = soAuditSession[key];
    if (!item) return;
    setSoPhysicalCount(key, item.systemStock);
    item.reason = 'sesuai';
    updateSoItemRowDom(key);
};

/**
 * Update Alasan & Catatan Selisih
 */
export const setSoItemReason = (key, reason) => {
    if (soAuditSession[key]) soAuditSession[key].reason = reason;
};

export const setSoItemNotes = (key, notes) => {
    if (soAuditSession[key]) soAuditSession[key].notes = notes;
};

/**
 * Aksi Massal: Samakan Semua Item yang Belum Dihitung
 */
export const matchAllUncountedInView = () => {
    const filtered = getFilteredAuditItems();
    const uncounted = filtered.filter(it => !it.isCounted);
    if (!uncounted.length) {
        showToast("Semua item dalam filter ini sudah memiliki data fisik!");
        return;
    }

    showConfirm(
        `Konfirmasi Samakan Stok (${uncounted.length} Barang)`,
        `Apakah Anda yakin ingin menyamakan seluruh ${uncounted.length} barang yang belum dihitung agar Stok Fisik = Stok Sistem (Selisih 0)?`,
        () => {
            uncounted.forEach(it => {
                it.physicalStock = it.systemStock;
                it.isCounted = true;
                it.diff = 0;
                it.diffValueHpp = 0;
                it.reason = 'sesuai';
            });
            renderStockOpnameView();
            showToast(`${uncounted.length} barang berhasil disamakan! ✨`);
        },
        "Ya, Samakan Semua",
        false
    );
};

/**
 * Aksi Massal: Reset Sesi Audit
 */
export const resetAuditSession = () => {
    showConfirm(
        "Reset Sesi Hitung Stock Opname?",
        "Seluruh data hitungan fisik sementara yang belum difinalisasi akan dikosongkan kembali. Lanjutkan?",
        () => {
            soAuditSession = {};
            initOrSyncAuditItems();
            renderStockOpnameView();
            showToast("Sesi Stock Opname berhasil direset.");
        },
        "Ya, Kosongkan",
        true
    );
};

/**
 * Update DOM Parsial untuk Baris Tertentu (Zero Flickering)
 */
const updateSoItemRowDom = (key) => {
    const rowEl = document.getElementById(`so-row-${key}`);
    if (!rowEl) {
        renderSoActiveItems();
        return;
    }
    const item = soAuditSession[key];
    if (!item) return;

    // Update SEMUA input fisik (baik desktop maupun mobile)
    const physInputs = rowEl.querySelectorAll('.so-phys-input');
    physInputs.forEach(input => {
        const newVal = item.physicalStock !== null ? String(item.physicalStock) : '';
        if (input.value !== newVal) {
            input.value = newVal;
        }
    });

    // Update diff badge (pertahankan label Selisih di mobile)
    const diffBadge = rowEl.querySelector('.so-diff-badge');
    if (diffBadge) {
        diffBadge.innerHTML = `
            <span class="lg:hidden text-[11px] font-bold text-slate-400">Selisih:</span>
            ${renderDiffBadgeHtml(item)}
        `;
    }

    // Update reason wrapper
    const reasonWrap = rowEl.querySelector('.so-reason-wrap');
    if (reasonWrap) {
        reasonWrap.innerHTML = renderReasonSelectorHtml(item);
    }
};

/**
 * Render Badge Selisih
 */
const renderDiffBadgeHtml = (item) => {
    if (!item.isCounted || item.physicalStock === null) {
        return `<span class="px-2.5 py-1 rounded-xl text-[10px] font-bold bg-slate-100 dark:bg-slate-800 text-slate-400 border border-slate-200 dark:border-slate-700 whitespace-nowrap"><i class="fa-solid fa-hourglass-start mr-1 text-[9px]"></i>Belum Dihitung</span>`;
    }

    if (item.diff === 0) {
        return `<span class="px-2.5 py-1 rounded-xl text-[10px] font-black bg-emerald-100 text-emerald-800 dark:bg-emerald-950/70 dark:text-emerald-300 border border-emerald-300/80 dark:border-emerald-800 shadow-2xs whitespace-nowrap"><i class="fa-solid fa-circle-check mr-1"></i>Sesuai (0)</span>`;
    }

    const showHpp = canViewHpp();
    if (item.diff < 0) {
        return `
            <div class="flex flex-col items-end">
                <span class="px-2.5 py-1 rounded-xl text-[10px] font-black bg-rose-100 text-rose-700 dark:bg-rose-950/70 dark:text-rose-300 border border-rose-300/80 dark:border-rose-800 shadow-2xs whitespace-nowrap">
                    <i class="fa-solid fa-arrow-down mr-1"></i>Kurang ${Math.abs(item.diff)} ${esc(item.unit)}
                </span>
                ${showHpp && item.hpp > 0 ? `
                    <span class="text-[9px] font-bold text-rose-600 dark:text-rose-400 mt-0.5" title="Potensi Kerugian HPP">
                        - ${fCur(Math.abs(item.diffValueHpp))}
                    </span>` : ''}
            </div>
        `;
    }

    return `
        <div class="flex flex-col items-end">
            <span class="px-2.5 py-1 rounded-xl text-[10px] font-black bg-amber-100 text-amber-800 dark:bg-amber-950/70 dark:text-amber-300 border border-amber-300/80 dark:border-amber-800 shadow-2xs whitespace-nowrap">
                <i class="fa-solid fa-arrow-up mr-1"></i>Lebih +${item.diff} ${esc(item.unit)}
            </span>
            ${showHpp && item.hpp > 0 ? `
                <span class="text-[9px] font-bold text-amber-600 dark:text-amber-400 mt-0.5" title="Nilai Tambahan HPP">
                    + ${fCur(item.diffValueHpp)}
                </span>` : ''}
        </div>
    `;
};

/**
 * Render Dropdown Alasan Selisih
 */
const renderReasonSelectorHtml = (item) => {
    if (!item.isCounted || item.diff === 0) {
        return `<span class="text-[10px] text-slate-400 italic">Tidak ada selisih stok</span>`;
    }

    return `
        <div class="flex flex-col sm:flex-row items-stretch sm:items-center gap-1.5 w-full">
            <select onchange="window.setSoItemReason('${item.key}', this.value)" class="text-[11px] font-bold py-1.5 px-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 focus:outline-hidden focus:border-[var(--color-primary)] cursor-pointer w-full sm:w-auto sm:max-w-[190px] truncate shadow-2xs">
                ${SO_DISCREPANCY_REASONS.map(r => `
                    <option value="${r.key}" ${item.reason === r.key ? 'selected' : ''}>${r.label}</option>
                `).join('')}
            </select>
            <input type="text" placeholder="Catatan selisih (opsional)..." value="${esc(item.notes || '')}" oninput="window.setSoItemNotes('${item.key}', this.value)" class="text-[11px] font-medium py-1.5 px-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 focus:outline-hidden focus:border-[var(--color-primary)] flex-1 min-w-0 shadow-2xs">
        </div>
    `;
};

// ─── Render Utama Tampilan Stock Opname ───────────────────────
export const renderStockOpnameView = () => {
    initOrSyncAuditItems();
    ensureSoModals();

    const categories = (appData.categories || []).map(c => typeof c === 'string' ? c : c.name).filter(Boolean);
    const brands = (appData.brands || []).map(b => typeof b === 'string' ? b : b.name).filter(Boolean);

    setH('admin-content', `
        <div class="space-y-4 sm:space-y-6 max-w-6xl mx-auto">
            <!-- 1. HERO HEADER BANNER & NATIVE APP BAR -->
            <div class="rounded-3xl border border-[rgba(var(--color-primary-rgb),0.2)] bg-gradient-to-br from-white via-white to-[rgba(var(--color-primary-rgb),0.04)] dark:from-slate-900 dark:via-slate-900 dark:to-[rgba(var(--color-primary-rgb),0.08)] p-4 sm:p-6 shadow-2xs space-y-4">
                <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div class="flex items-center gap-3.5">
                        <div class="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center shrink-0 border border-white/20 text-white shadow-md" style="background: linear-gradient(135deg, var(--color-primary), var(--color-primary-dark)); box-shadow: 0 4px 14px rgba(var(--color-primary-rgb), 0.35);">
                            <i class="fa-solid fa-clipboard-check text-xl sm:text-2xl"></i>
                        </div>
                        <div class="min-w-0">
                            <div class="flex items-center gap-2 flex-wrap">
                                <h1 class="font-extrabold text-base sm:text-xl text-slate-900 dark:text-white uppercase tracking-tight">Stock Opname</h1>
                                <span class="px-2.5 py-0.5 rounded-full text-[9px] font-black uppercase tracking-wider border" style="background: rgba(var(--color-primary-rgb), 0.12); color: var(--color-primary); border-color: rgba(var(--color-primary-rgb), 0.25);">
                                    Audit Fisik Rak
                                </span>
                            </div>
                            <p class="text-xs text-slate-500 dark:text-slate-400 mt-1 font-medium leading-snug">
                                Verifikasi stok fisik di rak dan gudang toko, rekonsiliasi selisih sistem vs aktual, dan terapkan penyesuaian atomik.
                            </p>
                        </div>
                    </div>

                    <!-- Dual Segmented Sub-Tab Switcher (Mobile 50/50 Responsive) -->
                    <div class="flex items-center p-1 bg-slate-100 dark:bg-slate-800 rounded-2xl border border-slate-200/80 dark:border-slate-700/80 shrink-0 w-full sm:w-auto">
                        <button onclick="window.switchSoSubTab('active')" class="flex-1 sm:flex-initial px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer ${soActiveSubTab === 'active' ? 'primary-bg text-white shadow-xs' : 'text-slate-600 dark:text-slate-300 hover:text-slate-900'}">
                            <i class="fa-solid fa-boxes-stacked text-xs"></i> <span>Sesi Audit Aktif</span>
                        </button>
                        <button onclick="window.switchSoSubTab('history')" class="flex-1 sm:flex-initial px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer ${soActiveSubTab === 'history' ? 'primary-bg text-white shadow-xs' : 'text-slate-600 dark:text-slate-300 hover:text-slate-900'}">
                            <i class="fa-solid fa-clock-rotate-left text-xs"></i> <span>Arsip &amp; Riwayat (${(appData.stockOpnameHistory || []).length})</span>
                        </button>
                    </div>
                </div>

                <!-- 2. BENTO STAT CARDS CONTAINER -->
                <div id="so-stats-container"></div>
            </div>

            <!-- 3. SUB-TAB VIEWPORT -->
            <div id="so-subtab-content"></div>
        </div>
    `);

    renderSoStatsBar();

    if (soActiveSubTab === 'active') {
        renderSoActiveView(categories, brands);
    } else {
        renderSoHistoryView();
    }
};

/**
 * Ganti Sub-Tab (Active vs History)
 */
export const switchSoSubTab = (tab) => {
    soActiveSubTab = tab;
    renderStockOpnameView();
};

/**
 * Render Bento Stat Cards Rekapitulasi Sesi
 */
export const renderSoStatsBar = () => {
    const container = el('so-stats-container');
    if (!container) return;

    const st = computeAuditStats();
    const showHpp = canViewHpp();
    const progressPct = st.totalItems > 0 ? Math.round((st.countedCount / st.totalItems) * 100) : 0;

    container.innerHTML = `
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-3.5 pt-1">
            <!-- Card 1: Total Progress Hitung (Diaksen Tema) -->
            <div class="p-3.5 sm:p-4 rounded-2xl bg-gradient-to-br from-white to-[rgba(var(--color-primary-rgb),0.03)] dark:from-slate-900 dark:to-slate-900 border border-[rgba(var(--color-primary-rgb),0.25)] shadow-2xs">
                <div class="flex items-center justify-between gap-2 mb-2">
                    <span class="text-[9px] font-black uppercase tracking-widest text-slate-400">Kemajuan Hitung</span>
                    <span class="text-[10px] font-black" style="color: var(--color-primary);">${progressPct}%</span>
                </div>
                <div class="flex items-baseline gap-1.5">
                    <span class="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">${st.countedCount}</span>
                    <span class="text-xs font-bold text-slate-400">/ ${st.totalItems} Item</span>
                </div>
                <div class="w-full bg-slate-100 dark:bg-slate-800 h-1.5 rounded-full overflow-hidden mt-2.5">
                    <div class="primary-bg h-full rounded-full transition-all duration-500" style="width: ${progressPct}%"></div>
                </div>
            </div>

            <!-- Card 2: Stok Sesuai (Balance) -->
            <div class="p-3.5 sm:p-4 rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200/80 dark:border-slate-800 shadow-2xs">
                <div class="flex items-center justify-between gap-2 mb-2">
                    <span class="text-[9px] font-black uppercase tracking-widest text-emerald-600 dark:text-emerald-400">Stok Sesuai</span>
                    <i class="fa-solid fa-circle-check text-emerald-500 text-xs"></i>
                </div>
                <div class="flex items-baseline gap-1.5">
                    <span class="text-xl sm:text-2xl font-black text-emerald-600 dark:text-emerald-400">${st.matchedCount}</span>
                    <span class="text-xs font-bold text-slate-400">Item (0 Selisih)</span>
                </div>
                <p class="text-[10px] text-slate-400 mt-2 font-medium">Fisik persis sama dengan database</p>
            </div>

            <!-- Card 3: Selisih Kurang (Loss) -->
            <div class="p-3.5 sm:p-4 rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200/80 dark:border-slate-800 shadow-2xs">
                <div class="flex items-center justify-between gap-2 mb-2">
                    <span class="text-[9px] font-black uppercase tracking-widest text-rose-600 dark:text-rose-400">Selisih Kurang (Loss)</span>
                    <i class="fa-solid fa-arrow-trend-down text-rose-500 text-xs"></i>
                </div>
                <div class="flex items-baseline gap-1.5">
                    <span class="text-xl sm:text-2xl font-black text-rose-600 dark:text-rose-400">${st.lossCount}</span>
                    <span class="text-xs font-bold text-rose-500">Item (−${st.totalLossUnits} Pcs)</span>
                </div>
                <p class="text-[10px] text-slate-400 mt-2 font-medium">
                    ${showHpp ? `Defisit Modal: <b class="text-rose-600 dark:text-rose-400">−${fCur(st.totalLossRp)}</b>` : 'Defisit fisik terdeteksi'}
                </p>
            </div>

            <!-- Card 4: Selisih Lebih (Surplus) / Dampak Bersih -->
            <div class="p-3.5 sm:p-4 rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200/80 dark:border-slate-800 shadow-2xs">
                <div class="flex items-center justify-between gap-2 mb-2">
                    <span class="text-[9px] font-black uppercase tracking-widest text-amber-600 dark:text-amber-400">Selisih Lebih (Surplus)</span>
                    <i class="fa-solid fa-arrow-trend-up text-amber-500 text-xs"></i>
                </div>
                <div class="flex items-baseline gap-1.5">
                    <span class="text-xl sm:text-2xl font-black text-amber-600 dark:text-amber-400">${st.surplusCount}</span>
                    <span class="text-xs font-bold text-amber-500">Item (+${st.totalSurplusUnits} Pcs)</span>
                </div>
                <p class="text-[10px] text-slate-400 mt-2 font-medium">
                    ${showHpp ? `Net Variance: <b class="${st.netVarianceRp >= 0 ? 'text-emerald-600 dark:text-emerald-400' : 'text-rose-600 dark:text-rose-400'}">${st.netVarianceRp >= 0 ? '+' : '−'}${fCur(Math.abs(st.netVarianceRp))}</b>` : 'Surplus fisik terdeteksi'}
                </p>
            </div>
        </div>
    `;
};

/**
 * Render Sub-Tab Sesi Audit Aktif
 */
export const renderSoActiveView = (categories, brands) => {
    const subContent = el('so-subtab-content');
    if (!subContent) return;

    subContent.innerHTML = `
        <div class="space-y-4">
            <!-- Filter Bar & Barcode Scanner Toolstrip -->
            <div class="p-3.5 sm:p-5 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-2xs space-y-3.5">
                <div class="flex flex-col md:flex-row md:items-center justify-between gap-3">
                    <!-- Kolom Input Pencarian Cepat & Barcode Gun -->
                    <div class="relative flex-1">
                        <i class="fa-solid fa-barcode absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-base"></i>
                        <input type="text" id="so-quick-search-input" value="${esc(soSearchQuery)}" placeholder="Scan barcode produk atau ketik SKU / Nama barang..." class="w-full bg-slate-50 dark:bg-slate-800/80 border-[1.5px] border-slate-200 dark:border-slate-700 rounded-2xl py-3 pl-11 pr-24 text-xs sm:text-sm font-bold text-slate-800 dark:text-white placeholder-slate-400 focus:outline-hidden focus:border-[var(--color-primary)] focus:shadow-[0_0_0_3px_rgba(var(--color-primary-rgb),0.12)] transition-all">
                        
                        <div class="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1">
                            ${soSearchQuery ? `
                                <button onclick="window.clearSoSearch()" class="w-7 h-7 flex items-center justify-center text-slate-400 hover:text-slate-600 rounded-lg text-xs" title="Bersihkan">
                                    <i class="fa-solid fa-xmark"></i>
                                </button>` : ''}
                            <button onclick="window.openCameraScanner && window.openCameraScanner('so-quick-search-input')" class="px-2.5 py-1.5 rounded-xl primary-bg-soft primary-border border primary-text hover:bg-[rgba(var(--color-primary-rgb),0.2)] text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer active:scale-95" title="Scan Barcode via Kamera HP">
                                <i class="fa-solid fa-camera"></i> <span class="hidden sm:inline">Scan</span>
                            </button>
                        </div>
                    </div>

                    <!-- Tombol Aksi Cepat Massal & Finalisasi -->
                    <div class="flex items-center flex-wrap sm:flex-nowrap gap-2 shrink-0 w-full sm:w-auto">
                        <button onclick="window.matchAllUncountedInView()" class="flex-1 sm:flex-initial px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 hover:bg-slate-100 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 font-bold text-xs flex items-center justify-center gap-1.5 shadow-2xs transition-all cursor-pointer active:scale-95" title="Samakan semua item yang belum diisi agar selisih 0">
                            <i class="fa-solid fa-check-double text-emerald-500"></i> <span class="whitespace-nowrap">Samakan Belum Diisi</span>
                        </button>
                        <button onclick="window.printSoWorksheet()" class="flex-1 sm:flex-initial px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 hover:bg-slate-100 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 font-bold text-xs flex items-center justify-center gap-1.5 shadow-2xs transition-all cursor-pointer active:scale-95" title="Cetak lembar hitung fisik untuk staf rak">
                            <i class="fa-solid fa-print text-slate-500"></i> <span class="whitespace-nowrap">Lembar Kerja</span>
                        </button>
                        <button onclick="window.openFinalizeModal()" class="w-full sm:w-auto px-4 py-2.5 rounded-xl text-white font-extrabold text-xs flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer active:scale-95 whitespace-nowrap" style="background: linear-gradient(135deg, var(--color-primary), var(--color-primary-dark)); box-shadow: 0 4px 14px rgba(var(--color-primary-rgb), 0.35);">
                            <i class="fa-solid fa-floppy-disk"></i> <span>Terapkan Penyesuaian</span>
                        </button>
                    </div>
                </div>

                <!-- Dropdown Filters Bar -->
                <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2 border-t border-slate-100 dark:border-slate-800/80 text-xs">
                    <!-- Filter Status Selisih -->
                    <div>
                        <label class="block text-[9px] font-black uppercase tracking-wider text-slate-400 mb-1">Status Selisih</label>
                        <select onchange="window.setSoStatusFilter(this.value)" class="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl py-2 px-2.5 font-bold text-slate-700 dark:text-slate-200 focus:outline-hidden cursor-pointer shadow-2xs">
                            <option value="all" ${soStatusFilter === 'all' ? 'selected' : ''}>Semua Status</option>
                            <option value="diff" ${soStatusFilter === 'diff' ? 'selected' : ''}>Hanya yang Selisih</option>
                            <option value="loss" ${soStatusFilter === 'loss' ? 'selected' : ''}>Hanya Kurang (Defisit)</option>
                            <option value="surplus" ${soStatusFilter === 'surplus' ? 'selected' : ''}>Hanya Lebih (Surplus)</option>
                            <option value="matched" ${soStatusFilter === 'matched' ? 'selected' : ''}>Hanya Sesuai (Match)</option>
                            <option value="uncounted" ${soStatusFilter === 'uncounted' ? 'selected' : ''}>Belum Dihitung</option>
                        </select>
                    </div>

                    <!-- Filter Kategori -->
                    <div>
                        <label class="block text-[9px] font-black uppercase tracking-wider text-slate-400 mb-1">Kategori</label>
                        <select onchange="window.setSoCategoryFilter(this.value)" class="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl py-2 px-2.5 font-bold text-slate-700 dark:text-slate-200 focus:outline-hidden cursor-pointer shadow-2xs">
                            <option value="all">Semua Kategori</option>
                            ${categories.map(c => `<option value="${esc(c)}" ${soCategoryFilter === c ? 'selected' : ''}>${esc(c)}</option>`).join('')}
                        </select>
                    </div>

                    <!-- Filter Brand -->
                    <div>
                        <label class="block text-[9px] font-black uppercase tracking-wider text-slate-400 mb-1">Brand / Merek</label>
                        <select onchange="window.setSoBrandFilter(this.value)" class="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl py-2 px-2.5 font-bold text-slate-700 dark:text-slate-200 focus:outline-hidden cursor-pointer shadow-2xs">
                            <option value="all">Semua Brand</option>
                            ${brands.map(b => `<option value="${esc(b)}" ${soBrandFilter === b ? 'selected' : ''}>${esc(b)}</option>`).join('')}
                        </select>
                    </div>

                    <!-- Reset Sesi -->
                    <div class="flex items-end">
                        <button onclick="window.resetAuditSession()" class="w-full py-2 px-2.5 rounded-xl border border-rose-200 dark:border-rose-900/60 bg-rose-50/70 hover:bg-rose-100 dark:bg-rose-950/40 text-rose-600 dark:text-rose-400 font-bold text-xs flex items-center justify-center gap-1.5 transition-all cursor-pointer active:scale-95 shadow-2xs">
                            <i class="fa-solid fa-arrow-rotate-left text-xs"></i> <span>Kosongkan Sesi</span>
                        </button>
                    </div>
                </div>
            </div>

            <!-- 4. DAFTAR BARANG YANG DIAUDIT (CONTAINER) -->
            <div id="so-items-container"></div>
        </div>
    `;

    // Pasang listener auto-detect barcode scanner USB & Enter
    const searchInput = el('so-quick-search-input');
    if (searchInput) {
        searchInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                handleSoBarcodeScan(searchInput.value);
            }
        });
        searchInput.addEventListener('input', (e) => {
            soSearchQuery = e.target.value;
            renderSoActiveItems();
        });
    }

    renderSoActiveItems();
};

/**
 * Render Item-Item Audit Aktif
 */
export const renderSoActiveItems = () => {
    const container = el('so-items-container');
    if (!container) return;

    const items = getFilteredAuditItems();

    if (!items.length) {
        container.innerHTML = `
            <div class="p-8 sm:p-12 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/80 dark:border-slate-800 text-center flex flex-col items-center justify-center space-y-3 shadow-2xs">
                <div class="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl border" style="background: rgba(var(--color-primary-rgb), 0.12); color: var(--color-primary); border-color: rgba(var(--color-primary-rgb), 0.25);">
                    <i class="fa-solid fa-magnifying-glass"></i>
                </div>
                <p class="text-sm font-bold text-slate-800 dark:text-white">Tidak ada produk ditemukan</p>
                <p class="text-xs text-slate-400 max-w-sm">Periksa kembali kata kunci pencarian atau sesuaikan pilihan filter kategori/status selisih.</p>
                <button onclick="window.clearAllSoFilters()" class="px-4 py-2 rounded-xl primary-bg text-white font-bold text-xs active:scale-95 shadow-xs cursor-pointer">
                    Reset Filter Pencarian
                </button>
            </div>
        `;
        return;
    }

    container.innerHTML = `
        <div class="space-y-2.5">
            <!-- Header Kolom (Desktop Only) -->
            <div class="hidden lg:grid grid-cols-12 gap-3 px-5 py-2.5 text-[10px] font-black uppercase tracking-wider text-slate-400 bg-slate-100/70 dark:bg-slate-800/50 rounded-2xl">
                <div class="col-span-5">Informasi Produk &amp; Varian</div>
                <div class="col-span-2 text-center">Stok Sistem</div>
                <div class="col-span-2 text-center">Hasil Fisik Rak</div>
                <div class="col-span-3 text-right">Selisih &amp; Keterangan</div>
            </div>

            <!-- List Item Rows -->
            ${items.map(item => `
                <div id="so-row-${item.key}" class="p-3.5 sm:p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 hover:border-[rgba(var(--color-primary-rgb),0.4)] transition-all shadow-2xs space-y-3 lg:space-y-0">
                    <div class="grid grid-cols-1 lg:grid-cols-12 gap-3 items-center">
                        <!-- Col 1: Informasi Produk (Desktop: 5 cols) -->
                        <div class="lg:col-span-5 flex items-center gap-3 min-w-0">
                            <div class="w-12 h-12 rounded-xl overflow-hidden shrink-0 border border-slate-200/80 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/60 flex items-center justify-center">
                                ${item.img 
                                    ? `<img src="${esc(item.img)}" alt="${esc(item.productName)}" class="w-full h-full object-cover">`
                                    : `<div class="w-full h-full flex items-center justify-center font-bold text-base" style="color: var(--color-primary)"><i class="fa-solid fa-box-open"></i></div>`
                                }
                            </div>
                            <div class="min-w-0 flex-1">
                                <div class="flex items-center gap-1.5 flex-wrap">
                                    <p class="text-xs sm:text-sm font-bold text-slate-900 dark:text-white truncate">${esc(item.productName)}</p>
                                    ${item.variantName ? `
                                        <span class="px-2 py-0.5 rounded-md text-[9px] font-black bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 whitespace-nowrap">
                                            ${esc(item.variantName)}
                                        </span>` : ''}
                                </div>
                                <div class="flex items-center gap-2 mt-1 text-[10px] text-slate-400 font-medium">
                                    <span class="px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 font-bold uppercase tracking-wider text-[8.5px]">${esc(item.category)}</span>
                                    ${item.brand && item.brand !== '-' ? `<span>• ${esc(item.brand)}</span>` : ''}
                                    ${item.sku ? `<span class="font-mono text-slate-400">• SKU: ${esc(item.sku)}</span>` : ''}
                                </div>
                            </div>
                        </div>

                        <!-- Col 2: Stok Sistem (Desktop Only) -->
                        <div class="hidden lg:flex lg:col-span-2 flex-col items-center justify-center text-center">
                            <span class="text-sm sm:text-base font-black text-slate-800 dark:text-slate-200 font-mono">${item.systemStock}</span>
                            <span class="text-[10px] text-slate-400 ml-0.5 font-medium">${esc(item.unit)}</span>
                        </div>

                        <!-- Col 3: Input Fisik Rak (Desktop Only) -->
                        <div class="hidden lg:flex lg:col-span-2 items-center justify-center gap-1">
                            <button type="button" onclick="window.stepSoPhysicalCount('${item.key}', -1)" class="w-8 h-8 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 font-black text-xs flex items-center justify-center transition-all cursor-pointer active:scale-90 shadow-2xs">
                                <i class="fa-solid fa-minus"></i>
                            </button>
                            <input type="number" min="0" step="any" placeholder="Fisik" value="${item.physicalStock !== null ? item.physicalStock : ''}" onchange="window.setSoPhysicalCount('${item.key}', this.value)" oninput="window.setSoPhysicalCount('${item.key}', this.value)" class="so-phys-input w-16 sm:w-20 py-1.5 px-1 text-center font-mono font-black text-sm bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-hidden focus:border-[var(--color-primary)] text-slate-900 dark:text-white shadow-2xs">
                            <button type="button" onclick="window.stepSoPhysicalCount('${item.key}', 1)" class="w-8 h-8 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 font-black text-xs flex items-center justify-center transition-all cursor-pointer active:scale-90 shadow-2xs">
                                <i class="fa-solid fa-plus"></i>
                            </button>
                            <button type="button" onclick="window.matchSoItem('${item.key}')" class="h-8 px-2 rounded-xl primary-bg-soft primary-border border primary-text hover:bg-[rgba(var(--color-primary-rgb),0.2)] font-black text-[10px] flex items-center justify-center transition-all cursor-pointer active:scale-95 shadow-2xs" title="Samakan fisik dengan stok sistem">
                                =
                            </button>
                        </div>

                        <!-- MOBILE ONLY: Compact Bar Sistem vs Fisik (Touch-Friendly) -->
                        <div class="lg:hidden p-2.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 flex items-center justify-between gap-2">
                            <div class="flex flex-col">
                                <span class="text-[9px] font-black uppercase tracking-wider text-slate-400">Stok Sistem</span>
                                <span class="text-xs font-black font-mono text-slate-800 dark:text-slate-200">${item.systemStock} ${esc(item.unit)}</span>
                            </div>
                            <div class="flex items-center gap-1.5">
                                <button type="button" onclick="window.stepSoPhysicalCount('${item.key}', -1)" class="w-10 h-10 rounded-xl bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-200 border border-slate-200/90 dark:border-slate-600 font-black text-sm flex items-center justify-center transition-all cursor-pointer active:scale-90 shadow-2xs" title="Kurangi 1">
                                    <i class="fa-solid fa-minus"></i>
                                </button>
                                <input type="number" min="0" step="any" placeholder="Fisik" value="${item.physicalStock !== null ? item.physicalStock : ''}" onchange="window.setSoPhysicalCount('${item.key}', this.value)" oninput="window.setSoPhysicalCount('${item.key}', this.value)" class="so-phys-input w-20 sm:w-24 h-10 py-1.5 px-2 text-center font-mono font-black text-base bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-hidden focus:border-[var(--color-primary)] text-slate-900 dark:text-white shadow-2xs">
                                <button type="button" onclick="window.stepSoPhysicalCount('${item.key}', 1)" class="w-10 h-10 rounded-xl bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-200 border border-slate-200/90 dark:border-slate-600 font-black text-sm flex items-center justify-center transition-all cursor-pointer active:scale-90 shadow-2xs" title="Tambah 1">
                                    <i class="fa-solid fa-plus"></i>
                                </button>
                                <button type="button" onclick="window.matchSoItem('${item.key}')" class="h-10 px-3 rounded-xl primary-bg-soft primary-border border primary-text font-black text-sm flex items-center justify-center transition-all cursor-pointer active:scale-95 shadow-2xs" title="Samakan fisik = sistem">
                                    =
                                </button>
                            </div>
                        </div>

                        <!-- Col 4: Selisih & Alasan (Desktop: 3 cols) -->
                        <div class="lg:col-span-3 flex flex-col items-start lg:items-end gap-2 border-t lg:border-t-0 pt-2 lg:pt-0 border-slate-100 dark:border-slate-800">
                            <div class="so-diff-badge w-full flex justify-between lg:justify-end items-center">
                                <span class="lg:hidden text-[11px] font-bold text-slate-400">Selisih:</span>
                                ${renderDiffBadgeHtml(item)}
                            </div>
                            <div class="so-reason-wrap w-full">
                                ${renderReasonSelectorHtml(item)}
                            </div>
                        </div>
                    </div>
                </div>
            `).join('')}
        </div>
    `;
};

/**
 * Step Counter (+1 / -1)
 */
export const stepSoPhysicalCount = (key, delta) => {
    const item = soAuditSession[key];
    if (!item) return;
    const current = item.physicalStock !== null ? item.physicalStock : item.systemStock;
    const nextVal = Math.max(0, current + delta);
    setSoPhysicalCount(key, nextVal);
};

export const clearSoSearch = () => {
    soSearchQuery = '';
    const input = el('so-quick-search-input');
    if (input) input.value = '';
    renderSoActiveItems();
};

export const clearAllSoFilters = () => {
    soSearchQuery = '';
    soCategoryFilter = 'all';
    soBrandFilter = 'all';
    soStatusFilter = 'all';
    renderStockOpnameView();
};

export const setSoCategoryFilter = (val) => {
    soCategoryFilter = val;
    renderSoActiveItems();
};

export const setSoBrandFilter = (val) => {
    soBrandFilter = val;
    renderSoActiveItems();
};

export const setSoStatusFilter = (val) => {
    soStatusFilter = val;
    renderSoActiveItems();
};

// ─── Modal Finalisasi & Penyesuaian Stok ───────────────────────
export const ensureSoModals = () => {
    // Pastikan modal finalisasi terpasang di document.body
    if (!el('modal-so-finalize')) {
        const m = document.createElement('div');
        m.id = 'modal-so-finalize';
        m.className = 'fixed inset-0 z-[150] flex hidden items-end sm:items-center justify-center p-0 sm:p-4 bg-slate-950/75 opacity-0 transition-opacity duration-300 overflow-hidden';
        m.onclick = (e) => { if (e.target === m) window.closeFinalizeModal(); };
        m.innerHTML = `
            <div id="modal-so-finalize-content" class="modal-bottom-sheet relative flex max-h-[84dvh] sm:max-h-[82dvh] w-full max-w-lg translate-y-full sm:translate-y-8 transform flex-col overflow-hidden rounded-t-[1.75rem] sm:rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-2xl transition-transform duration-300" onclick="event.stopPropagation()">
                <!-- Pull Indicator for Mobile Bottom Sheet -->
                <div class="pull-indicator sm:hidden" style="margin: 8px auto 2px;"></div>

                <div class="px-4 sm:px-5 py-2.5 sm:py-3 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center shrink-0 bg-white dark:bg-slate-900">
                    <div class="flex items-center gap-2.5">
                        <div class="w-8 h-8 rounded-xl flex items-center justify-center text-xs text-white shadow-xs shrink-0" style="background: linear-gradient(135deg, var(--color-primary), var(--color-primary-dark)); box-shadow: 0 2px 8px rgba(var(--color-primary-rgb), 0.35);">
                            <i class="fa-solid fa-clipboard-check"></i>
                        </div>
                        <div>
                            <h3 class="font-extrabold text-xs sm:text-sm text-slate-800 dark:text-white">Terapkan Penyesuaian Stok</h3>
                            <p class="text-[9px] font-bold text-slate-400 uppercase tracking-widest mt-0.5">Finalisasi Stock Opname</p>
                        </div>
                    </div>
                    <button type="button" onclick="window.closeFinalizeModal()" class="w-8 h-8 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 flex items-center justify-center transition-colors cursor-pointer">
                        <i class="fa-solid fa-xmark text-sm"></i>
                    </button>
                </div>

                <div class="custom-scrollbar p-3.5 sm:p-5 overflow-y-auto flex-1 space-y-3.5 min-h-0 text-xs" id="so-finalize-body"></div>

                <div class="px-4 py-2.5 sm:py-3 border-t border-slate-100 dark:border-slate-800 bg-slate-50/90 dark:bg-slate-900/90 flex items-center justify-end gap-2 shrink-0" style="padding-bottom: max(0.65rem, env(safe-area-inset-bottom));">
                    <button type="button" onclick="window.closeFinalizeModal()" class="px-4 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-50 cursor-pointer active:scale-95 transition-all text-xs">
                        Batal
                    </button>
                    <button type="button" onclick="window.executeSoFinalize()" class="px-5 py-2 rounded-xl text-white font-extrabold flex items-center gap-2 shadow-xs cursor-pointer active:scale-95 transition-all text-xs" style="background: linear-gradient(135deg, var(--color-primary), var(--color-primary-dark)); box-shadow: 0 2px 8px rgba(var(--color-primary-rgb), 0.35);">
                        <i class="fa-solid fa-check"></i> <span>Konfirmasi &amp; Update Stok</span>
                    </button>
                </div>
            </div>
        `;
        document.body.appendChild(m);
    }

    // Modal Detail Riwayat Berita Acara
    if (!el('modal-so-history-detail')) {
        const m = document.createElement('div');
        m.id = 'modal-so-history-detail';
        m.className = 'fixed inset-0 z-[150] flex hidden items-end sm:items-center justify-center p-0 sm:p-4 bg-slate-950/75 opacity-0 transition-opacity duration-300 overflow-hidden';
        m.onclick = (e) => { if (e.target === m) window.closeSoHistoryModal(); };
        m.innerHTML = `
            <div id="modal-so-history-content" class="modal-bottom-sheet relative flex max-h-[84dvh] sm:max-h-[82dvh] w-full max-w-2xl translate-y-full sm:translate-y-8 transform flex-col overflow-hidden rounded-t-[1.75rem] sm:rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-2xl transition-transform duration-300" onclick="event.stopPropagation()">
                <!-- Pull Indicator for Mobile Bottom Sheet -->
                <div class="pull-indicator sm:hidden" style="margin: 8px auto 2px;"></div>

                <div class="px-4 sm:px-5 py-2.5 sm:py-3 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center shrink-0 bg-white dark:bg-slate-900">
                    <div class="flex items-center gap-2.5">
                        <div class="w-8 h-8 rounded-xl flex items-center justify-center text-xs text-white shadow-xs shrink-0" style="background: linear-gradient(135deg, var(--color-primary), var(--color-primary-dark)); box-shadow: 0 2px 8px rgba(var(--color-primary-rgb), 0.35);">
                            <i class="fa-solid fa-file-invoice"></i>
                        </div>
                        <div>
                            <h3 class="font-extrabold text-xs sm:text-sm text-slate-800 dark:text-white" id="so-detail-title">Berita Acara Stock Opname</h3>
                            <p class="text-[9px] font-mono text-slate-400 mt-0.5" id="so-detail-subtitle"></p>
                        </div>
                    </div>
                    <button type="button" onclick="window.closeSoHistoryModal()" class="w-8 h-8 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 flex items-center justify-center transition-colors cursor-pointer">
                        <i class="fa-solid fa-xmark text-sm"></i>
                    </button>
                </div>

                <div class="custom-scrollbar p-3.5 sm:p-5 overflow-y-auto flex-1 space-y-3 min-h-0" id="so-detail-body"></div>

                <div class="px-4 py-2.5 sm:py-3 border-t border-slate-100 dark:border-slate-800 bg-slate-50/90 dark:bg-slate-900/90 flex items-center justify-between gap-3 shrink-0" style="padding-bottom: max(0.65rem, env(safe-area-inset-bottom));">
                    <button type="button" onclick="window.printSoHistoryActive()" class="px-3.5 sm:px-4 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 font-bold text-slate-700 dark:text-slate-200 hover:bg-slate-50 cursor-pointer active:scale-95 transition-all text-xs flex items-center gap-2 shadow-2xs">
                        <i class="fa-solid fa-print"></i> <span>Cetak A4 / PDF</span>
                    </button>
                    <button type="button" onclick="window.closeSoHistoryModal()" class="px-5 sm:px-6 py-2 rounded-xl primary-bg text-white font-extrabold cursor-pointer active:scale-95 transition-all text-xs shadow-xs">
                        Tutup
                    </button>
                </div>
            </div>
        `;
        document.body.appendChild(m);
    }
};

/**
 * Buka Modal Finalisasi
 */
export const openFinalizeModal = () => {
    const st = computeAuditStats();
    if (st.countedCount <= 0) {
        showToast("Masukkan hasil hitung fisik setidaknya untuk 1 barang!");
        return;
    }

    const allItems = Object.values(soAuditSession);
    const diffItems = allItems.filter(it => it.isCounted && it.diff !== 0);
    const showHpp = canViewHpp();
    const generatedNo = generateSoNumber();

    const body = el('so-finalize-body');
    if (body) {
        body.innerHTML = `
            <div class="p-4 rounded-2xl border space-y-1.5" style="background: rgba(var(--color-primary-rgb), 0.06); border-color: rgba(var(--color-primary-rgb), 0.2);">
                <div class="flex items-center gap-2 font-bold text-xs" style="color: var(--color-primary);">
                    <i class="fa-solid fa-circle-info"></i>
                    <span>Ringkasan Berita Acara &amp; Rekonsiliasi</span>
                </div>
                <p class="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed">
                    Stok di database toko akan diperbarui secara atomik mengikuti angka <b>Hasil Fisik</b> yang Anda masukkan. Item yang tidak dihitung tetap memakai stok lama.
                </p>
            </div>

            <!-- Bento Mini Rekap -->
            <div class="grid grid-cols-2 gap-2.5">
                <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
                    <span class="text-[9px] font-black uppercase text-slate-400">Total Diperiksa</span>
                    <p class="text-base font-black text-slate-800 dark:text-white mt-0.5">${st.countedCount} Item</p>
                </div>
                <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
                    <span class="text-[9px] font-black uppercase text-slate-400">Item Mengalami Selisih</span>
                    <p class="text-base font-black ${diffItems.length ? 'text-amber-600 dark:text-amber-400' : 'text-emerald-600 dark:text-emerald-400'} mt-0.5">
                        ${diffItems.length} Item
                    </p>
                </div>
                <div class="p-3 rounded-xl bg-rose-50/60 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-900/60">
                    <span class="text-[9px] font-black uppercase text-rose-500">Total Defisit (Loss)</span>
                    <p class="text-base font-black text-rose-600 mt-0.5">−${st.totalLossUnits} Pcs</p>
                    ${showHpp ? `<p class="text-[10px] text-rose-500 font-bold">−${fCur(st.totalLossRp)}</p>` : ''}
                </div>
                <div class="p-3 rounded-xl bg-amber-50/60 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/60">
                    <span class="text-[9px] font-black uppercase text-amber-500">Total Surplus</span>
                    <p class="text-base font-black text-amber-600 mt-0.5">+${st.totalSurplusUnits} Pcs</p>
                    ${showHpp ? `<p class="text-[10px] text-amber-600 font-bold">+${fCur(st.totalSurplusRp)}</p>` : ''}
                </div>
            </div>

            <!-- Form Identitas Dokumen SO -->
            <div class="space-y-3 pt-2">
                <div>
                    <label class="block text-[10px] font-black uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1">Nomor Berita Acara (Auto)</label>
                    <input type="text" id="so-input-number" value="${generatedNo}" readonly class="w-full bg-slate-100 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-xl py-2 px-3 font-mono font-bold text-slate-700 dark:text-slate-300">
                </div>
                <div>
                    <label class="block text-[10px] font-black uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1">Nama Petugas Auditor / Staf Pelaksana *</label>
                    <input type="text" id="so-input-auditor" value="${esc(soAuditorName)}" placeholder="Nama staf pemeriksa fisik..." class="w-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl py-2 px-3 font-bold text-slate-800 dark:text-white focus:outline-hidden focus:border-[var(--color-primary)]">
                </div>
                <div>
                    <label class="block text-[10px] font-black uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1">Catatan Tambahan Sesi Audit</label>
                    <textarea id="so-input-notes" rows="2" placeholder="Contoh: Audit berkala rak depan & gudang utama..." class="w-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl py-2 px-3 font-medium text-slate-800 dark:text-white focus:outline-hidden focus:border-[var(--color-primary)]">${esc(soAuditNotes)}</textarea>
                </div>
            </div>
        `;
    }

    ensureSoModals();
    const modal = el('modal-so-finalize');
    const content = el('modal-so-finalize-content');
    if (modal && content) {
        document.body.classList.add('overflow-hidden');
        if (typeof window.pushModalHistory === 'function') {
            window.pushModalHistory('soFinalize');
        }
        openModalAnim(modal, content);
    }
};

export const closeFinalizeModal = (fH = false) => {
    const doClose = () => {
        const modal = el('modal-so-finalize');
        const content = el('modal-so-finalize-content');
        document.body.classList.remove('overflow-hidden');
        if (modal && content) closeModalAnim(modal, content);
    };

    if (typeof window.requestCloseModal === 'function') {
        window.requestCloseModal('soFinalize', fH, doClose);
    } else {
        doClose();
    }
};

/**
 * Eksekusi Finalisasi & Update Stok Atomik ke Firestore
 */
export const executeSoFinalize = async () => {
    const auditorInput = el('so-input-auditor');
    const auditorName = auditorInput ? auditorInput.value.trim() : '';
    if (!auditorName) {
        showToast("Mohon masukkan nama petugas auditor!");
        auditorInput?.focus();
        return;
    }

    const notesInput = el('so-input-notes');
    const notes = notesInput ? notesInput.value.trim() : '';
    const soNumber = el('so-input-number')?.value || generateSoNumber();

    const allItems = Object.values(soAuditSession);
    const countedItems = allItems.filter(it => it.isCounted && it.physicalStock !== null);
    if (!countedItems.length) {
        showToast("Tidak ada item yang dihitung!");
        return;
    }

    // Hanya item yang mengalami selisih yang akan dicatat di rekap Berita Acara
    const diffItems = countedItems.filter(it => it.diff !== 0);

    closeFinalizeModal();
    sLoad("Memperbarui Stok Gudang & Berita Acara...");

    try {
        const _db = (typeof db !== 'undefined' && db) ? db : window.db;
        if (!_db) throw new Error("Koneksi Firebase database belum aktif");

        // Kelompokkan update per produk ID untuk Firestore Batch Write
        const prodGroup = {};
        countedItems.forEach(it => {
            if (!prodGroup[it.productId]) {
                prodGroup[it.productId] = [];
            }
            prodGroup[it.productId].push(it);
        });

        const batch = _db.batch();
        const updatedProductIds = [];

        Object.keys(prodGroup).forEach(pId => {
            const prodRef = _db.collection("freshmart").doc("cms_data").collection("products").doc(String(pId));
            const pIdx = (appData.products || []).findIndex(p => p && String(p.id) === String(pId));
            if (pIdx < 0) return;

            const p = JSON.parse(JSON.stringify(appData.products[pIdx]));
            const changes = prodGroup[pId];

            if (p.variants && p.variants.length > 0) {
                changes.forEach(c => {
                    if (c.variantIndex !== null && p.variants[c.variantIndex]) {
                        p.variants[c.variantIndex].stock = c.physicalStock;
                        if (c.physicalStock > 0 && (p.variants[c.variantIndex].isActive === false || p.variants[c.variantIndex].isActive === 'false')) {
                            p.variants[c.variantIndex].isActive = true;
                        }
                    }
                });
                // Recalculate total product stock
                p.stock = p.variants.reduce((s, v) => s + (parseFloat(v.stock) || 0), 0);
                const anyActive = p.variants.some(v => (parseFloat(v.stock) || 0) > 0 && v.isActive !== false && v.isActive !== 'false');
                if (anyActive && (p.isActive === false || p.isActive === 'false')) p.isActive = 'true';
            } else {
                const c = changes[0];
                if (c) {
                    p.stock = c.physicalStock;
                    if (c.physicalStock > 0 && (p.isActive === false || p.isActive === 'false')) p.isActive = 'true';
                }
            }

            // Simpan ke Firestore
            batch.set(prodRef, p, { merge: true });

            // Update in-memory
            appData.products[pIdx] = p;
            updatedProductIds.push(String(pId));
        });

        // Simpan Berita Acara ke riwayat stockOpnameHistory
        const st = computeAuditStats();
        const record = {
            id: 'so_' + Date.now() + '_' + Math.random().toString(36).substring(2, 7),
            soNumber,
            date: new Date().toISOString(),
            auditorName,
            notes,
            categoryFilter: soCategoryFilter,
            brandFilter: soBrandFilter,
            totalItemsAudited: st.countedCount,
            totalWithDiff: diffItems.length,
            totalLossUnits: st.totalLossUnits,
            totalSurplusUnits: st.totalSurplusUnits,
            netVarianceUnits: st.netVarianceUnits,
            totalLossRp: st.totalLossRp,
            totalSurplusRp: st.totalSurplusRp,
            netVarianceRp: st.netVarianceRp,
            items: diffItems.map(it => ({
                productId: it.productId,
                variantIndex: it.variantIndex,
                variantName: it.variantName || '',
                productName: it.productName,
                sku: it.sku || '',
                category: it.category,
                unit: it.unit || 'pcs',
                systemStock: it.systemStock,
                physicalStock: it.physicalStock,
                diff: it.diff,
                hpp: it.hpp,
                price: it.price,
                diffValueHpp: it.diffValueHpp,
                reason: it.reason,
                notes: it.notes
            }))
        };

        if (!Array.isArray(appData.stockOpnameHistory)) {
            appData.stockOpnameHistory = [];
        }
        appData.stockOpnameHistory.unshift(record);

        // Commit batch write ke Firestore
        await batch.commit();

        // Simpan dokumen history ke cms_data
        await saveApp(['stockOpnameHistory'], { updatedProductIds });

        hLoad();
        showToast("Stock Opname berhasil diterapkan & stok telah disesuaikan! 🎉");

        // Kosongkan sesi aktif
        soAuditSession = {};
        initOrSyncAuditItems();

        // Buka preview Berita Acara cetak A4
        window.openDocPreview?.('stock_opname', record.id);

        // Beralih ke sub-tab riwayat
        switchSoSubTab('history');
    } catch (err) {
        hLoad();
        console.error('[StockOpname] Finalize Error:', err);
        showToast("Gagal menyimpan penyesuaian: " + (err.message || err));
    }
};

// ─── Sub-Tab Riwayat & Arsip Berita Acara ─────────────────────
export const renderSoHistoryView = () => {
    const subContent = el('so-subtab-content');
    if (!subContent) return;

    const history = appData.stockOpnameHistory || [];

    if (!history.length) {
        subContent.innerHTML = `
            <div class="p-8 sm:p-12 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/80 dark:border-slate-800 text-center flex flex-col items-center justify-center space-y-3 shadow-2xs">
                <div class="w-14 h-14 rounded-2xl bg-slate-100 dark:bg-slate-800 text-slate-400 flex items-center justify-center text-2xl">
                    <i class="fa-solid fa-clock-rotate-left"></i>
                </div>
                <p class="text-sm font-bold text-slate-800 dark:text-white">Belum Ada Riwayat Stock Opname</p>
                <p class="text-xs text-slate-400 max-w-sm">Riwayat audit fisik rak dan Berita Acara yang telah difinalisasi akan tersimpan otomatis di sini.</p>
                <button onclick="window.switchSoSubTab('active')" class="px-4 py-2 rounded-xl primary-bg text-white font-bold text-xs active:scale-95 shadow-xs cursor-pointer">
                    Mulai Sesi Audit Baru
                </button>
            </div>
        `;
        return;
    }

    const showHpp = canViewHpp();

    subContent.innerHTML = `
        <div class="space-y-3">
            ${history.map(rec => `
                <div class="p-4 sm:p-5 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 hover:border-[rgba(var(--color-primary-rgb),0.4)] transition-all shadow-2xs space-y-3">
                    <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 dark:border-slate-800/80 pb-3">
                        <div class="flex items-center gap-3">
                            <div class="w-10 h-10 rounded-2xl flex items-center justify-center text-base border shrink-0" style="background: rgba(var(--color-primary-rgb), 0.12); color: var(--color-primary); border-color: rgba(var(--color-primary-rgb), 0.25);">
                                <i class="fa-solid fa-file-signature"></i>
                            </div>
                            <div>
                                <div class="flex items-center gap-2 flex-wrap">
                                    <span class="font-mono font-black text-xs sm:text-sm text-slate-900 dark:text-white">${esc(rec.soNumber || rec.id)}</span>
                                    <span class="px-2 py-0.5 rounded-full text-[9px] font-black uppercase tracking-wider bg-emerald-100 text-emerald-800 dark:bg-emerald-950/70 dark:text-emerald-300">
                                        Selesai Difinalisasi
                                    </span>
                                </div>
                                <p class="text-[10px] text-slate-400 mt-0.5">
                                    <i class="fa-solid fa-calendar mr-1"></i>${formatSoDate(rec.date)} &bull; Auditor: <b>${esc(rec.auditorName || 'Staf')}</b>
                                </p>
                            </div>
                        </div>

                        <!-- Tombol Aksi -->
                        <div class="flex items-center gap-1.5 self-end sm:self-auto">
                            <button onclick="window.viewSoHistoryDetail('${rec.id}')" class="px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 hover:bg-slate-100 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 font-bold text-xs flex items-center gap-1.5 transition-all cursor-pointer active:scale-95 shadow-2xs">
                                <i class="fa-solid fa-eye text-xs"></i> <span>Rincian</span>
                            </button>
                            <button onclick="window.openDocPreview && window.openDocPreview('stock_opname', '${rec.id}')" class="px-3 py-1.5 rounded-xl text-white font-bold text-xs flex items-center gap-1.5 transition-all cursor-pointer active:scale-95 shadow-2xs" style="background: linear-gradient(135deg, var(--color-primary), var(--color-primary-dark)); box-shadow: 0 2px 8px rgba(var(--color-primary-rgb), 0.3);">
                                <i class="fa-solid fa-print text-xs"></i> <span>Cetak A4</span>
                            </button>
                            ${isOwnerUser() ? `
                                <button onclick="window.deleteSoHistory('${rec.id}')" class="w-8 h-8 rounded-xl bg-rose-50 hover:bg-rose-100 dark:bg-rose-950/40 text-rose-500 flex items-center justify-center text-xs transition-all cursor-pointer active:scale-90" title="Hapus Riwayat Dokumen">
                                    <i class="fa-solid fa-trash-can"></i>
                                </button>` : ''}
                        </div>
                    </div>

                    <!-- Metrics Strip -->
                    <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                        <div class="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/40">
                            <span class="text-[9px] font-black uppercase text-slate-400 block">Total Diperiksa</span>
                            <span class="font-black text-slate-800 dark:text-white text-xs">${rec.totalItemsAudited || 0} Item</span>
                        </div>
                        <div class="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/40">
                            <span class="text-[9px] font-black uppercase text-slate-400 block">Barang Selisih</span>
                            <span class="font-black ${rec.totalWithDiff > 0 ? 'text-amber-600' : 'text-emerald-600'} text-xs">${rec.totalWithDiff || 0} Item</span>
                        </div>
                        <div class="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/40">
                            <span class="text-[9px] font-black uppercase text-rose-500 block">Total Defisit</span>
                            <span class="font-black text-rose-600 text-xs">−${rec.totalLossUnits || 0} Pcs</span>
                        </div>
                        <div class="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/40">
                            <span class="text-[9px] font-black uppercase text-slate-400 block">Dampak Bersih</span>
                            <span class="font-black ${showHpp ? (rec.netVarianceRp >= 0 ? 'text-emerald-600' : 'text-rose-600') : 'text-slate-700 dark:text-slate-200'} text-xs">
                                ${showHpp ? (rec.netVarianceRp >= 0 ? '+' : '−') + fCur(Math.abs(rec.netVarianceRp || 0)) : `${rec.netVarianceUnits || 0} Pcs`}
                            </span>
                        </div>
                    </div>

                    ${rec.notes ? `
                        <div class="text-[11px] text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-800/30 p-2 rounded-xl border border-slate-100 dark:border-slate-800/60 flex items-start gap-2">
                            <i class="fa-solid fa-note-sticky text-amber-500 mt-0.5 text-xs"></i>
                            <span>${esc(rec.notes)}</span>
                        </div>` : ''}
                </div>
            `).join('')}
        </div>
    `;
};

/**
 * Tampilkan Modal Rincian Riwayat Berita Acara
 */
export const viewSoHistoryDetail = (soId) => {
    const history = appData.stockOpnameHistory || [];
    const rec = history.find(h => String(h.id) === String(soId));
    if (!rec) {
        showToast("Data Berita Acara tidak ditemukan!");
        return;
    }

    ensureSoModals();
    soActiveModalDetail = rec;

    const titleEl = el('so-detail-title');
    const subTitleEl = el('so-detail-subtitle');
    const bodyEl = el('so-detail-body');

    if (titleEl) titleEl.innerText = rec.soNumber || 'Berita Acara Stock Opname';
    if (subTitleEl) subTitleEl.innerText = `${formatSoDate(rec.date)} • Oleh: ${rec.auditorName || 'Staf'}`;

    const showHpp = canViewHpp();
    const items = rec.items || [];

    if (bodyEl) {
        bodyEl.innerHTML = `
            <!-- Bento Rekap 4 Metrik Presisi -->
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                <div class="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
                    <span class="text-[9px] font-black uppercase text-slate-400 block">Total Disesuaikan</span>
                    <span class="font-black text-slate-800 dark:text-white text-xs">${items.length} Barang</span>
                </div>
                <div class="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
                    <span class="text-[9px] font-black uppercase text-rose-500 block">Total Defisit</span>
                    <span class="font-black text-rose-600 text-xs">−${rec.totalLossUnits || 0} Pcs</span>
                </div>
                <div class="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
                    <span class="text-[9px] font-black uppercase text-amber-500 block">Total Surplus</span>
                    <span class="font-black text-amber-600 text-xs">+${rec.totalSurplusUnits || 0} Pcs</span>
                </div>
                <div class="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
                    <span class="text-[9px] font-black uppercase text-slate-400 block">Dampak Finansial</span>
                    <span class="font-black ${showHpp ? (rec.netVarianceRp >= 0 ? 'text-emerald-600' : 'text-rose-600') : 'text-slate-700 dark:text-slate-200'} text-xs">
                        ${showHpp ? (rec.netVarianceRp >= 0 ? '+' : '−') + fCur(Math.abs(rec.netVarianceRp || 0)) : `${rec.netVarianceUnits || 0} Pcs`}
                    </span>
                </div>
            </div>

            <!-- Tabel Daftar Barang yang Discrepancy -->
            <div class="space-y-2">
                <h4 class="text-[11px] font-black uppercase tracking-wider text-slate-600 dark:text-slate-400">Rincian Barang yang Mengalami Selisih:</h4>
                <div class="border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden divide-y divide-slate-100 dark:divide-slate-800 text-xs">
                    ${items.map((it, idx) => `
                        <div class="p-2.5 sm:p-3 bg-white dark:bg-slate-900 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                            <div class="min-w-0 flex-1">
                                <div class="flex items-center gap-1.5 flex-wrap">
                                    <span class="font-bold text-slate-800 dark:text-white truncate">${idx + 1}. ${esc(it.productName)}</span>
                                    ${it.variantName ? `<span class="px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-[9px] font-bold text-slate-600 dark:text-slate-300">${esc(it.variantName)}</span>` : ''}
                                </div>
                                <div class="flex items-center gap-2 mt-0.5 text-[10px] text-slate-400 flex-wrap">
                                    <span>Kategori: ${esc(it.category || 'Umum')}</span>
                                    ${it.sku ? `<span>• SKU: ${esc(it.sku)}</span>` : ''}
                                    ${it.notes ? `<span>• Catatan: <i class="italic text-slate-500 dark:text-slate-400">${esc(it.notes)}</i></span>` : ''}
                                </div>
                            </div>

                            <div class="flex items-center justify-between sm:justify-end gap-3 shrink-0 pt-1 sm:pt-0 border-t sm:border-t-0 border-slate-100 dark:border-slate-800">
                                <div class="text-left sm:text-right text-[11px]">
                                    <span class="text-slate-400 block text-[9px]">Sistem ➔ Fisik</span>
                                    <span class="font-mono font-bold">${it.systemStock} ➔ <b class="text-slate-900 dark:text-white">${it.physicalStock}</b> ${esc(it.unit || 'pcs')}</span>
                                </div>
                                <div class="text-right min-w-[80px]">
                                    <span class="px-2 py-0.5 rounded-lg text-[10px] font-black ${it.diff < 0 ? 'bg-rose-100 text-rose-700 dark:bg-rose-950/70 dark:text-rose-300' : 'bg-amber-100 text-amber-700 dark:bg-amber-950/70 dark:text-amber-300'}">
                                        ${it.diff < 0 ? `−${Math.abs(it.diff)}` : `+${it.diff}`} ${esc(it.unit || 'pcs')}
                                    </span>
                                    ${showHpp && it.hpp > 0 ? `
                                        <span class="block text-[9px] font-bold ${it.diff < 0 ? 'text-rose-600' : 'text-amber-600'} mt-0.5">
                                            ${it.diff < 0 ? '−' : '+'}${fCur(Math.abs(it.diffValueHpp || 0))}
                                        </span>` : ''}
                                </div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }

    const modal = el('modal-so-history-detail');
    const content = el('modal-so-history-content');
    if (modal && content) {
        document.body.classList.add('overflow-hidden');
        if (typeof window.pushModalHistory === 'function') {
            window.pushModalHistory('soHistory');
        }
        openModalAnim(modal, content);
    }
};

export const closeSoHistoryModal = (fH = false) => {
    const doClose = () => {
        const modal = el('modal-so-history-detail');
        const content = el('modal-so-history-content');
        document.body.classList.remove('overflow-hidden');
        if (modal && content) closeModalAnim(modal, content);
    };

    if (typeof window.requestCloseModal === 'function') {
        window.requestCloseModal('soHistory', fH, doClose);
    } else {
        doClose();
    }
};

export const printSoHistoryActive = () => {
    if (soActiveModalDetail) {
        closeSoHistoryModal();
        window.openDocPreview?.('stock_opname', soActiveModalDetail.id);
    }
};

export const deleteSoHistory = (soId) => {
    if (!isOwnerUser()) {
        showToast("Hanya Owner yang berhak menghapus riwayat audit.");
        return;
    }

    showConfirm(
        "Hapus Arsip Berita Acara?",
        "Dokumen riwayat audit ini akan dihapus dari arsip. (Stok barang yang sudah disesuaikan tidak akan berubah). Lanjutkan?",
        async () => {
            sLoad("Menghapus arsip...");
            try {
                appData.stockOpnameHistory = (appData.stockOpnameHistory || []).filter(h => String(h.id) !== String(soId));
                await saveApp(['stockOpnameHistory']);
                hLoad();
                showToast("Arsip Berita Acara berhasil dihapus.");
                renderSoHistoryView();
            } catch (e) {
                hLoad();
                showToast("Gagal menghapus: " + e.message);
            }
        },
        "Ya, Hapus",
        true
    );
};

/**
 * Cetak Lembar Kerja Hitung Fisik (Worksheet A4)
 */
export const printSoWorksheet = () => {
    window.openDocPreview?.('stock_opname_worksheet');
};

// ─── Bind Global ke window agar bisa diakses HTML ─────────────
window.renderStockOpnameView = renderStockOpnameView;
window.switchSoSubTab = switchSoSubTab;
window.setSoPhysicalCount = setSoPhysicalCount;
window.stepSoPhysicalCount = stepSoPhysicalCount;
window.matchSoItem = matchSoItem;
window.setSoItemReason = setSoItemReason;
window.setSoItemNotes = setSoItemNotes;
window.matchAllUncountedInView = matchAllUncountedInView;
window.resetAuditSession = resetAuditSession;
window.handleSoBarcodeScan = handleSoBarcodeScan;
window.clearSoSearch = clearSoSearch;
window.clearAllSoFilters = clearAllSoFilters;
window.setSoCategoryFilter = setSoCategoryFilter;
window.setSoBrandFilter = setSoBrandFilter;
window.setSoStatusFilter = setSoStatusFilter;
window.openFinalizeModal = openFinalizeModal;
window.closeFinalizeModal = closeFinalizeModal;
window.closeSOFinalizeModal = closeFinalizeModal;
window.executeSoFinalize = executeSoFinalize;
window.viewSoHistoryDetail = viewSoHistoryDetail;
window.closeSoHistoryModal = closeSoHistoryModal;
window.closeSOHistoryModal = closeSoHistoryModal;
window.printSoHistoryActive = printSoHistoryActive;
window.deleteSoHistory = deleteSoHistory;
window.printSoWorksheet = printSoWorksheet;
