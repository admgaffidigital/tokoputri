/**
 * ============================================================
 * MODUL POS KASIR — TOKO PUTRI (SUPER-APP REDESIGN)
 * Point-of-Sale modern, responsif penuh (mobile-first),
 * multi-varian, harga grosir otomatis, diskon item + global,
 * floating cart bar, bottom sheet keranjang di HP,
 * split panel leluasa di desktop, dan quick-cash buttons.
 * ============================================================
 */

import { db, firebase } from '../../config/firebase.js';
import { appData } from '../../core/state.js';
import { el, setH, setIn, esc, fCur, showToast, getOptImg, renderProductCoverHtml, isPlaceholderImg, fixD, extractOrderTaxInfo, ensureScriptLoaded } from '../../core/utils.js';
import { getEffHpp, computeTotalProductStock } from '../../core/pricing.js';
import { canViewHpp } from '../../core/auth-roles.js';
import { deductFifoStock } from '../../core/fifo-inventory.js';
import { getPaylaterConfig, calculateInstallmentBreakdown } from '../../core/paylater.js';
import { getPrinterConfig, openPrinterSettingsModal } from '../print/printer-settings.js';
import {
    getActiveShift,
    isShiftActive,
    syncActiveShiftFromCloud,
    openPOSOpenShiftModal,
    closePOSOpenShiftModal,
    openShiftSummaryModal,
    closePOSShiftSummaryModal,
    openPOSCloseShiftModal,
    closePOSCloseShiftModal,
    recordTransactionToShift,
    renderShiftHeaderBadge,
    printShiftSettlementReceipt,
    executeShiftPrintDirect
} from './pos-shift.js';

// ─── Import modul varian POS (lazy agar tidak load di awal) ──
let _posVariantSheetLoaded = false;
const ensurePOSVariantSheet = () => {
    if (_posVariantSheetLoaded) return Promise.resolve();
    return import('./pos-variant-sheet.js').then(() => { _posVariantSheetLoaded = true; });
};

// ─── State ──────────────────────────────────────────────────
let posCart            = [];
let posSearch          = '';
let posCatFilterVal    = '';
let posSubCatFilterVal = '';
let posCatalogViewMode = 'grid'; // 'grid' | 'list'
let posCatalogPage     = 1;
const POS_PAGE_SIZE    = 48;
let posSearchDebounceTimer = null;
const POS_OFFLINE_TX_KEY = 'freshmart_pos_offline_tx_queue';
try {
    const savedMode = localStorage.getItem('pos_view_mode');
    if (savedMode === 'list' || savedMode === 'grid') posCatalogViewMode = savedMode;
} catch (e) {}
let posCustomer     = { name: '', phone: '', isMember: false, memberId: null, isNewTempo: false, paylaterActive: false, paylaterLimit: 0, paylaterUsed: 0, paylaterDueDay: 5 };
let posSelectedPaylaterTenor = '30d';
let posPointsRedeemed = 0;
let posClaimedReward  = null;
let posPayMethod    = 'cash';
let posPaidAmount   = 0;
let posGlobalDisc   = 0;
let posDiscountType = 'rp'; // 'rp' | 'percent'
let posDiscountVal  = 0;
const posOpenItemDiscKeys = new Set();
export const togglePOSItemDiscInput = (cartKey) => {
    const keyStr = String(cartKey);
    if (posOpenItemDiscKeys.has(keyStr)) {
        posOpenItemDiscKeys.delete(keyStr);
    } else {
        posOpenItemDiscKeys.add(keyStr);
    }
    renderCart();
};
let barcodeBuffer   = '';
let barcodeTimer    = null;
let clockInterval   = null;

// State Pemindai Barcode Kamera
let posHtml5QrCode       = null;
let posScannerStream     = null;
let posScannerDetector   = null;
let posScannerInterval   = null;
let posScannerContinuous = true;
let posScannerFacing     = 'environment'; // 'environment' | 'user'
let posScannerTorchOn    = false;
let posScannerTrack      = null;
let lastScannedCode      = '';
let lastScannedTime      = 0;

export const setPOSViewMode = (mode) => {
    posCatalogViewMode = mode;
    try { localStorage.setItem('pos_view_mode', mode); } catch (e) {}
    document.querySelectorAll('#pos-view-btn-grid').forEach(bGrid => {
        if (mode === 'grid') {
            bGrid.style.background = 'linear-gradient(135deg, var(--color-primary-light, #e1b858) 0%, var(--color-primary, #c59b27) 60%, var(--color-primary-dark, #a87f1b) 100%)';
            bGrid.className = 'w-8 h-8 rounded-lg flex items-center justify-center text-xs transition-all cursor-pointer text-white shadow-xs';
        } else {
            bGrid.style.removeProperty('background');
            bGrid.className = 'w-8 h-8 rounded-lg flex items-center justify-center text-xs transition-all cursor-pointer text-slate-500 hover:text-slate-800 dark:text-slate-400';
        }
    });
    document.querySelectorAll('#pos-view-btn-list').forEach(bList => {
        if (mode === 'list') {
            bList.style.background = 'linear-gradient(135deg, var(--color-primary-light, #e1b858) 0%, var(--color-primary, #c59b27) 60%, var(--color-primary-dark, #a87f1b) 100%)';
            bList.className = 'w-8 h-8 rounded-lg flex items-center justify-center text-xs transition-all cursor-pointer text-white shadow-xs';
        } else {
            bList.style.removeProperty('background');
            bList.className = 'w-8 h-8 rounded-lg flex items-center justify-center text-xs transition-all cursor-pointer text-slate-500 hover:text-slate-800 dark:text-slate-400';
        }
    });
    renderCatalog();
};

// ─── Helpers ────────────────────────────────────────────────
const fNum = (n) => Math.max(0, parseInt(n) || 0);
const fQty = (n) => {
    if (n == null) return 0;
    if (typeof n === 'string') n = n.replace(',', '.').trim();
    const val = parseFloat(n);
    return isNaN(val) ? 0 : Math.max(0, parseFloat(val.toFixed(3)));
};
export const formatQty = (n) => {
    const val = parseFloat(n) || 0;
    return parseFloat(val.toFixed(3)).toString();
};
const fRp  = (n) => fCur(n);

export const getPointValue = () => parseFloat(appData.store?.pointValue) || 1000;
export const posMemberPointsDiscount = () => Math.max(0, (parseFloat(posPointsRedeemed) || 0) * getPointValue());

export const getMaxRedeemablePoints = () => {
    if (!posCustomer.isMember || !posCustomer.points) return 0;
    const availablePts = Math.max(0, parseFloat(posCustomer.points) || 0);
    const rewardCost = posClaimedReward ? (parseFloat(posClaimedReward.pointsCost) || 0) : 0;
    const remainingPts = Math.max(0, availablePts - rewardCost);
    const ptVal = getPointValue();
    if (ptVal <= 0) return 0;

    const currentSubAfterDisc = Math.max(0, posSubtotal() - posDiscountAmount());
    const totalHpp = getCartTotalHpp();
    const maxDiscountAllowed = Math.max(0, currentSubAfterDisc - totalHpp);
    const maxPtsByHpp = Math.floor(maxDiscountAllowed / ptVal);

    return Math.min(remainingPts, maxPtsByHpp);
};

const posSubtotal = () => posCart.reduce((s, i) => s + i.subtotal, 0);

// Hitung total modal HPP seluruh item di keranjang kasir
export const getCartTotalHpp = () => {
    return posCart.reduce((sum, item) => {
        const hpp = item.hpp != null ? parseFloat(item.hpp) : (getEffHpp(item) || 0);
        return sum + ((parseFloat(hpp) || 0) * (parseFloat(item.qty) || 0));
    }, 0);
};

export const posDiscountAmount = () => {
    const sub = posSubtotal();
    let disc = 0;
    if (posDiscountType === 'percent') {
        const pct = Math.min(100, Math.max(0, parseFloat(posDiscountVal) || 0));
        disc = Math.round((sub * pct) / 100);
    } else {
        disc = Math.min(sub, fNum(posDiscountVal || posGlobalDisc));
    }
    // Proteksi: Total transaksi tidak boleh lebih rendah dari total modal HPP
    const totalHpp = getCartTotalHpp();
    if (totalHpp > 0) {
        const maxAllowed = Math.max(0, sub - totalHpp);
        if (disc > maxAllowed) disc = maxAllowed;
    }
    return disc;
};

export const posTaxInfo = () => {
    const sub = posSubtotal();
    const gDisc = posDiscountAmount();
    const ptDisc = posMemberPointsDiscount();
    const baseTotal = Math.max(0, sub - gDisc - ptDisc);
    if (typeof window.calcTaxDetails === 'function') {
        return window.calcTaxDetails(baseTotal);
    }
    const ppnOn = appData.store?.ppnEnabled === true || appData.store?.ppnEnabled === 'true';
    const ppnType = appData.store?.ppnType || 'exclusive';
    const ppnRate = (appData.store?.ppnRate !== undefined && !isNaN(parseFloat(appData.store?.ppnRate))) ? parseFloat(appData.store?.ppnRate) : 11;
    return {
        ppnEnabled: ppnOn,
        ppnRate,
        ppnType,
        ppnAmount: 0,
        dppAmount: baseTotal,
        grandTotalAdd: 0,
        ppnShowZero: appData.store?.ppnShowZero !== false,
        ppnLabel: appData.store?.ppnTaxLabel || ''
    };
};

const posTotal = () => {
    const sub = posSubtotal();
    const gDisc = posDiscountAmount();
    const ptDisc = posMemberPointsDiscount();
    const baseTotal = Math.max(0, sub - gDisc - ptDisc);
    const tax = posTaxInfo();
    let total = baseTotal + (tax.ppnType === 'exclusive' ? (tax.grandTotalAdd || 0) : 0);
    const totalHpp = getCartTotalHpp();
    if (totalHpp > 0 && total < totalHpp) {
        total = totalHpp;
    }
    return total;
};
const posChange = () => posPaidAmount - posTotal();

// Status dan Ketersediaan Stok Produk Kasir (Identik 1:1 dengan Storefront)
export const getProductStockInfo = (p) => {
    return computeTotalProductStock(p);
};

// Format Waktu Pre-Order Ringkas (Anti-Overflow & Presisi Badge)
export const formatCompactPoText = (str) => {
    if (!str) return '';
    return String(str)
        .replace(/\s*hari\s*kerja/gi, 'hr')
        .replace(/\s*hari/gi, 'hr')
        .replace(/\s*minggu/gi, 'mgg')
        .replace(/\s*bulan/gi, 'bln')
        .trim();
};

// Audio Beep Sintetis Kasir (Zero-dependency Web Audio API)
export const playCashierBeep = () => {
    try {
        if (typeof window !== 'undefined' && typeof window.checkUserGesture === 'function') {
            if (!window.checkUserGesture()) return;
        }
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        if (!AudioCtx) return;
        const ctx = new AudioCtx();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(1400, ctx.currentTime);
        gain.gain.setValueAtTime(0.08, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.08);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        osc.stop(ctx.currentTime + 0.08);
        setTimeout(() => { ctx.close().catch(() => {}); }, 150);
    } catch (e) {}
};

// Hitung harga grosir berdasarkan qty (untuk produk tanpa varian)
const getWholesalePrice = (product, qty) => {
    if (!product || !product.wholesale || !product.wholesale.length) return null;
    const tiers = [...product.wholesale].sort((a, b) => b.minQty - a.minQty);
    for (const tier of tiers) {
        if (qty >= parseFloat(tier.minQty)) return parseFloat(tier.price);
    }
    return null;
};

const recalcItem = (item) => {
    // Jika bukan varian, hitung harga grosir otomatis
    if (!item.isVariant) {
        const p = (appData.products || []).find(x => x && String(x.id) === String(item.id));
        const wPrice = p ? getWholesalePrice(p, item.qty) : null;
        if (wPrice !== null) {
            item.basePrice   = item.basePrice || item.price; // simpan harga asli
            item.price       = wPrice;
            item.isWholesale = true;
        } else {
            if (item.basePrice) item.price = item.basePrice; // kembalikan harga asli
            item.isWholesale = false;
        }
    }

    // Pastikan HPP modal produk/varian tersimpan
    if (item.hpp == null) {
        item.hpp = getEffHpp(item) || 0;
    }
    const itemHpp = parseFloat(item.hpp) || 0;

    // Proteksi: Diskon item TIDAK BOLEH melebihi batas modal (harga jual < HPP)
    if (itemHpp > 0) {
        const maxAllowedDisc = Math.max(0, Math.round((item.price - itemHpp) * item.qty));
        if (fNum(item.discount) > maxAllowedDisc) {
            item.discount = maxAllowedDisc;
        }
    } else {
        item.discount = Math.min(fNum(item.discount), item.price * item.qty);
    }

    item.subtotal = Math.max(0, item.price * item.qty - fNum(item.discount));
    return item;
};

const genTxId = () => {
    const d = new Date();
    const p = (n) => String(n).padStart(2, '0');
    return `POS-${d.getFullYear()}${p(d.getMonth()+1)}${p(d.getDate())}-${Date.now().toString(36).toUpperCase()}`;
};

// ─── Digital Clock Updater ──────────────────────────────────
const startClock = () => {
    if (clockInterval) clearInterval(clockInterval);
    const update = () => {
        const now = new Date();
        const timeStr = now.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit', second: '2-digit' }) + ' WIB';
        document.querySelectorAll('#pos-live-clock').forEach(c => {
            c.textContent = timeStr;
        });
    };
    update();
    clockInterval = setInterval(update, 1000);
};

export const stopClock = () => {
    if (clockInterval) {
        clearInterval(clockInterval);
        clockInterval = null;
    }
};
window.stopPOSClock = stopClock;

// ─── Barcode Scanner (USB) ──────────────────────────────────
export const destroyBarcodeListener = () => {
    if (window.__posBarcodeFn) {
        document.removeEventListener('keydown', window.__posBarcodeFn);
        window.__posBarcodeFn = null;
    }
};

/**
 * Normalisasi dan bersihkan kode barcode dari prefix AIM symbology (misal ]C1, ]e0)
 * serta control character non-printable dari scanner hardware
 */
export const cleanBarcodeRaw = (raw) => {
    if (raw === null || raw === undefined) return '';
    let str = String(raw).trim();
    // Hapus prefix AIM Symbology (misal ]C1 untuk Code 128, ]e0 untuk EAN, dll)
    str = str.replace(/^\][a-zA-Z0-9]{2}/, '');
    // Hapus karakter non-printable / control character ASCII 0-31 dan 127
    str = str.replace(/[\x00-\x1F\x7F]/g, '');
    return str.trim();
};

/**
 * Dapatkan variasi kode normalisasi untuk toleransi pencocokan scanner:
 * - Kode bersih asli (lowercase)
 * - Kode tanpa leading zeros (misal '0899...' -> '899...')
 * - Kode UPC-A ke EAN-13 padding (misal 12 digit ditambah '0')
 * - Kode tanpa spasi/tanda hubung/titik
 */
export const getBarcodeVariations = (raw) => {
    const clean = cleanBarcodeRaw(raw);
    if (!clean) return [];
    const lower = clean.toLowerCase();
    const set = new Set();
    set.add(lower);

    // Variasi tanpa leading zeroes (misal scanner membaca '0899...' padahal di database '899...')
    const noZero = lower.replace(/^0+/, '');
    if (noZero && noZero !== lower) {
        set.add(noZero);
    }

    // Variasi padding nol jika 12 digit angka (UPC-A to EAN-13)
    if (/^\d{12}$/.test(lower)) {
        set.add('0' + lower);
    }

    // Variasi tanpa pemisah spasi, strip, underscore, titik
    const noDelim = lower.replace(/[\s\-_.]/g, '');
    if (noDelim && noDelim !== lower) {
        set.add(noDelim);
        const noDelimNoZero = noDelim.replace(/^0+/, '');
        if (noDelimNoZero) set.add(noDelimNoZero);
    }

    return Array.from(set);
};

export const matchCodeAny = (needleVariations, candidateStr) => {
    if (candidateStr === null || candidateStr === undefined || candidateStr === '') return false;
    const candClean = cleanBarcodeRaw(candidateStr).toLowerCase();
    if (!candClean) return false;

    // Kecocokan langsung
    if (needleVariations.includes(candClean)) return true;

    // Kecocokan tanpa leading zeroes
    const candNoZero = candClean.replace(/^0+/, '');
    if (candNoZero && needleVariations.includes(candNoZero)) return true;

    // Kecocokan padding EAN 12 digit
    if (/^\d{12}$/.test(candClean) && needleVariations.includes('0' + candClean)) return true;

    // Kecocokan tanpa pembatas
    const candNoDelim = candClean.replace(/[\s\-_.]/g, '');
    if (candNoDelim && needleVariations.includes(candNoDelim)) return true;

    return false;
};

/**
 * Temukan produk atau varian spesifik berdasarkan kode barcode / SKU / ID
 * Mendukung pencocokan barcode pabrik, SKU toko, fallback label cetak, dan varian
 */
export const findProductOrVariantByBarcode = (rawCode) => {
    if (rawCode === null || rawCode === undefined || rawCode === '') return null;
    const variations = getBarcodeVariations(rawCode);
    if (!variations.length) return null;
    const products = appData.products || [];

    // 1. Prioritas Tertinggi: Cocokkan SKU/Barcode spesifik varian aktif
    for (const p of products) {
        if (!p || p.isActive === 'false' || p.isActive === false) continue;
        if (Array.isArray(p.variants) && p.variants.length > 0) {
            const pIdStr = String(p.id || '').trim().toLowerCase();
            const pSkuStr = String(p.sku || '').trim().toLowerCase();

            for (let vIdx = 0; vIdx < p.variants.length; vIdx++) {
                const v = p.variants[vIdx];
                if (!v || v.isActive === false || v.isActive === 'false') continue;

                // Format fallback label yang dicetak oleh modal label:
                const fallbackSku1 = `${pSkuStr || pIdStr}-${vIdx + 1}`.toLowerCase();
                const fallbackSku2 = `${pIdStr}-${vIdx + 1}`.toLowerCase();
                const fallbackSku3 = `sku-${pIdStr}-${vIdx + 1}`.toLowerCase();
                const fallbackSku4 = pSkuStr ? `sku-${pSkuStr}-${vIdx + 1}`.toLowerCase() : '';

                if (
                    matchCodeAny(variations, v.barcode) ||
                    matchCodeAny(variations, v.sku) ||
                    matchCodeAny(variations, fallbackSku1) ||
                    matchCodeAny(variations, fallbackSku2) ||
                    matchCodeAny(variations, fallbackSku3) ||
                    (fallbackSku4 && matchCodeAny(variations, fallbackSku4))
                ) {
                    return {
                        product: p,
                        variant: v,
                        variantIdx: vIdx,
                        isVariantMatch: true
                    };
                }
            }
        }
    }

    // 2. Cocokkan SKU/Barcode/ID di level produk induk aktif
    for (const p of products) {
        if (!p || p.isActive === 'false' || p.isActive === false) continue;
        const pIdStr = String(p.id || '').trim().toLowerCase();
        const fallbackSku = `sku-${pIdStr}`.toLowerCase();

        if (
            matchCodeAny(variations, p.barcode) ||
            matchCodeAny(variations, p.sku) ||
            matchCodeAny(variations, pIdStr) ||
            matchCodeAny(variations, fallbackSku)
        ) {
            return {
                product: p,
                variant: null,
                variantIdx: -1,
                isVariantMatch: false
            };
        }
    }

    return null;
};

/**
 * Deteksi produk/varian nonaktif untuk memberikan feedback jelas di kasir
 * (mencegah kasir bingung mengapa barcode tidak terdaftar)
 */
export const findInactiveProductByBarcode = (rawCode) => {
    if (rawCode === null || rawCode === undefined || rawCode === '') return null;
    const variations = getBarcodeVariations(rawCode);
    if (!variations.length) return null;
    const products = appData.products || [];

    for (const p of products) {
        if (!p) continue;
        const pIsInactive = p.isActive === 'false' || p.isActive === false;

        if (Array.isArray(p.variants) && p.variants.length > 0) {
            const pIdStr = String(p.id || '').trim().toLowerCase();
            const pSkuStr = String(p.sku || '').trim().toLowerCase();

            for (let vIdx = 0; vIdx < p.variants.length; vIdx++) {
                const v = p.variants[vIdx];
                if (!v) continue;
                const vIsInactive = pIsInactive || v.isActive === false || v.isActive === 'false';
                if (!vIsInactive) continue;

                const fallbackSku1 = `${pSkuStr || pIdStr}-${vIdx + 1}`.toLowerCase();
                const fallbackSku2 = `${pIdStr}-${vIdx + 1}`.toLowerCase();
                const fallbackSku3 = `sku-${pIdStr}-${vIdx + 1}`.toLowerCase();

                if (
                    matchCodeAny(variations, v.barcode) ||
                    matchCodeAny(variations, v.sku) ||
                    matchCodeAny(variations, fallbackSku1) ||
                    matchCodeAny(variations, fallbackSku2) ||
                    matchCodeAny(variations, fallbackSku3)
                ) {
                    return {
                        product: p,
                        variant: v,
                        variantIdx: vIdx,
                        isVariantMatch: true,
                        isInactive: true
                    };
                }
            }
        }

        if (pIsInactive) {
            const pIdStr = String(p.id || '').trim().toLowerCase();
            const fallbackSku = `sku-${pIdStr}`.toLowerCase();

            if (
                matchCodeAny(variations, p.barcode) ||
                matchCodeAny(variations, p.sku) ||
                matchCodeAny(variations, pIdStr) ||
                matchCodeAny(variations, fallbackSku)
            ) {
                return {
                    product: p,
                    variant: null,
                    variantIdx: -1,
                    isVariantMatch: false,
                    isInactive: true
                };
            }
        }
    }

    return null;
};

const initBarcodeListener = () => {
    destroyBarcodeListener();
    window.__posBarcodeFn = (e) => {
        if (!e || typeof e.key !== 'string') return;

        // Hanya aktif di view POS Cashier atau tab POS Admin
        const curView = window.curViewName || '';
        const inPos = curView === 'view-pos-cashier' || (curView === 'view-admin' && window.cTab === 'pos');
        if (!inPos) return;

        // 1. Pintasan F1 / F2 / F3: Fokus ke Pencarian Produk / Barcode
        if (e.key === 'F1' || e.key === 'F2' || e.key === 'F3') {
            e.preventDefault();
            const sf = el('pos-search-input');
            if (sf) { sf.focus(); sf.select(); }
            return;
        }

        // 2. Pintasan F4: Buka Dialog Pembayaran (Bayar Sekarang)
        if (e.key === 'F4') {
            e.preventDefault();
            if (!posCart.length) {
                showToast('Keranjang kasir masih kosong', 'warning');
                return;
            }
            openPayModal();
            return;
        }

        // 3. Pintasan F5: Cegah Reload Halaman & Cetak Ulang Struk Terakhir
        if (e.key === 'F5') {
            e.preventDefault();
            reprintLastPOSReceipt();
            return;
        }

        // 4. Pintasan F6: Tahan Transaksi Sementara (Hold Cart)
        if (e.key === 'F6') {
            e.preventDefault();
            posHoldCurrentCart();
            return;
        }

        // 5. Pintasan F7: Fokus Input Diskon Kasir
        if (e.key === 'F7') {
            e.preventDefault();
            const discInp = document.querySelector('.pos-disc-val-input');
            if (discInp) { discInp.focus(); discInp.select(); }
            return;
        }

        // 6. Pintasan F8: Buka Keranjang Tertahan (Recall Held)
        if (e.key === 'F8') {
            e.preventDefault();
            openPOSHeldModal();
            return;
        }

        // 7. Pintasan F9: Buka/Tutup Scanner Kamera HP / Laptop
        if (e.key === 'F9') {
            e.preventDefault();
            if (el('pos-camera-scanner-modal')) closePOSCameraScanner();
            else openPOSCameraScanner();
            return;
        }

        // 8. Pintasan F10: Buka Ringkasan Shift Kasir
        if (e.key === 'F10') {
            e.preventDefault();
            if (isShiftActive()) {
                openShiftSummaryModal();
            } else if (typeof syncActiveShiftFromCloud === 'function') {
                syncActiveShiftFromCloud().then(s => {
                    if (s && s.status === 'open') openShiftSummaryModal();
                    else openPOSOpenShiftModal();
                }).catch(() => openPOSOpenShiftModal());
            } else {
                openPOSOpenShiftModal();
            }
            return;
        }

        // 9. Pintasan F11: Buka Catat Arus Kas Laci (Kas Masuk / Kas Keluar)
        if (e.key === 'F11') {
            e.preventDefault();
            if (typeof window.openPOSCashMovementModal === 'function') {
                window.openPOSCashMovementModal();
            }
            return;
        }

        // 10. Pintasan Escape: Tutup Modal Terbuka atau Bersihkan Pencarian
        if (e.key === 'Escape') {
            if (el('modal-pos-cash-movement')) { 
                if (typeof window.closePOSCashMovementModal === 'function') window.closePOSCashMovementModal(); 
                return; 
            }
            if (el('pos-camera-scanner-modal')) { closePOSCameraScanner(); return; }
            if (el('pos-held-modal')) { closePOSHeldModal(); return; }
            if (el('pos-pay-modal')) { closePayModal(); return; }
            if (el('modal-pos-open-shift')) { closePOSOpenShiftModal(); return; }
            if (el('modal-pos-shift-summary')) { closePOSShiftSummaryModal(); return; }
            if (el('modal-pos-close-shift')) { closePOSCloseShiftModal(); return; }
            if (el('pos-success-modal')) { el('pos-success-modal').remove(); return; }
            const vs = el('pos-variant-sheet');
            if (vs && !vs.classList.contains('hidden')) { 
                if (typeof window.closePOSVariantSheet === 'function') window.closePOSVariantSheet(); 
                return; 
            }
            const cd = el('pos-cart-drawer');
            if (cd && !cd.classList.contains('hidden')) { 
                if (typeof window.closePOSCartDrawer === 'function') window.closePOSCartDrawer(); 
                return; 
            }

            const sf = el('pos-search-input');
            if (sf && (sf.value || document.activeElement === sf)) {
                if (typeof window.posClearSearch === 'function') window.posClearSearch();
                sf.blur();
                return;
            }
        }

        const tag = document.activeElement?.tagName?.toLowerCase();
        if (tag === 'input' || tag === 'textarea' || tag === 'select') return;

        // 11. Pintasan Spasi Cepat: Langsung fokus ke kolom pencarian / pemindai barcode
        if (e.code === 'Space' || e.key === ' ') {
            e.preventDefault();
            const sf = el('pos-search-input');
            if (sf) { sf.focus(); sf.select(); }
            return;
        }

        // Pemindai Barcode Laser USB (Hardware Barcode Reader)
        if (e.key === 'Enter') {
            if (barcodeBuffer && barcodeBuffer.length >= 3) {
                const match = findProductOrVariantByBarcode(barcodeBuffer);
                if (match) {
                    const prod = match.product;
                    if (match.isVariantMatch && match.variant) {
                        const vPrice = parseFloat(match.variant.price) || 0;
                        const added = addToCartWithVariant(prod.id, match.variant.name, vPrice, match.variantIdx, 1);
                        if (added) {
                            showToast(`Ditambahkan: ${prod.name} — ${match.variant.name}`, 'success');
                        }
                    } else {
                        const added = addToCart(prod.id);
                        if (added) {
                            showToast(`Ditambahkan: ${prod.name}`, 'success');
                        }
                    }
                } else {
                    if (typeof window.posSearchFn === 'function') {
                        window.posSearchFn(barcodeBuffer, true);
                    } else {
                        const sf = el('pos-search-input');
                        if (sf) { sf.value = barcodeBuffer; posSearch = barcodeBuffer; renderCatalog(); }
                    }
                    showToast('Kode barcode atau SKU tidak ditemukan di katalog produk.', 'warning');
                }
                barcodeBuffer = '';
            }
        } else if (e.key && e.key.length === 1) {
            barcodeBuffer = (barcodeBuffer || '') + e.key;
            clearTimeout(barcodeTimer);
            barcodeTimer = setTimeout(() => { barcodeBuffer = ''; }, 450);
        }
    };
    document.addEventListener('keydown', window.__posBarcodeFn);
};

// ─── Cart CRUD ───────────────────────────────────────────────
export const addToCart = (productId) => {
    const p = (appData.products || []).find(x => x && String(x.id) === String(productId));
    if (!p) return false;

    // 1. Validasi Produk Aktif (Identik Storefront)
    const pActive = p.isActive !== 'false' && p.isActive !== false;
    if (!pActive) {
        showToast('Produk ini sedang dinonaktifkan atau tidak tersedia.', 'warning');
        return false;
    }

    const hasVariants = p.variants && p.variants.length > 0;
    if (hasVariants) {
        // Produk ber-varian → buka sheet pilih varian
        ensurePOSVariantSheet().then(() => {
            if (typeof window.openPOSVariantSheet === 'function') window.openPOSVariantSheet(productId);
        });
        return true;
    }

    // 2. Validasi Stok Tersedia (Identik Storefront)
    const sInfo = getProductStockInfo(p);
    if (sInfo.isManaged && !sInfo.isPreorder && sInfo.isOutOfStock) {
        showToast(`Persediaan "${p.name}" sedang kosong.`, 'warning');
        return false;
    }

    const existing = posCart.find(i => String(i.id) === String(productId) && !i.isVariant);
    if (existing) {
        const nextQty = parseFloat((existing.qty + 1).toFixed(3));
        if (sInfo.isManaged && !sInfo.isPreorder && nextQty > sInfo.totalStock) {
            showToast(`Persediaan tidak mencukupi. Sisa stok: ${formatQty(sInfo.totalStock)} ${p.unit || 'pcs'}`, 'warning');
            return false;
        }
        existing.qty = nextQty; recalcItem(existing);
    } else {
        const price = parseFloat(p.price) || 0;
        posCart.push(recalcItem({
            id: p.id,
            name: p.name,
            price,
            basePrice: price,
            hpp: parseFloat(p.hpp) || 0,
            qty: 1,
            unit: p.unit || 'pcs',
            poTime: p.poTime || '',
            discount: 0,
            subtotal: price,
            isVariant: false,
            isWholesale: false
        }));
    }
    playCashierBeep();
    if (typeof window.triggerHaptic === 'function') window.triggerHaptic('light');
    renderCart();
    return true;
};

export const posAddToCartQty = (productId, qty) => {
    const p = (appData.products || []).find(x => x && String(x.id) === String(productId));
    if (!p) return false;

    // 1. Validasi Produk Aktif (Identik Storefront)
    const pActive = p.isActive !== 'false' && p.isActive !== false;
    if (!pActive) {
        showToast('Produk ini sedang dinonaktifkan atau tidak tersedia.', 'warning');
        return false;
    }

    // 2. Validasi Stok Tersedia (Identik Storefront)
    const sInfo = getProductStockInfo(p);
    if (sInfo.isManaged && !sInfo.isPreorder && sInfo.isOutOfStock) {
        showToast(`Persediaan "${p.name}" sedang kosong.`, 'warning');
        return false;
    }

    const numQty = fQty(qty) || 1;
    const existing = posCart.find(i => String(i.id) === String(productId) && !i.isVariant);
    if (existing) {
        const nextQty = parseFloat((existing.qty + numQty).toFixed(3));
        if (sInfo.isManaged && !sInfo.isPreorder && nextQty > sInfo.totalStock) {
            showToast(`Persediaan tidak mencukupi. Sisa stok: ${formatQty(sInfo.totalStock)} ${p.unit || 'pcs'}`, 'warning');
            return false;
        }
        existing.qty = nextQty; recalcItem(existing);
    } else {
        if (sInfo.isManaged && !sInfo.isPreorder && numQty > sInfo.totalStock) {
            showToast(`Persediaan tidak mencukupi. Sisa stok: ${formatQty(sInfo.totalStock)} ${p.unit || 'pcs'}`, 'warning');
            return false;
        }
        const price = parseFloat(p.price) || 0;
        const item  = recalcItem({
            id: p.id,
            name: p.name,
            price,
            basePrice: price,
            hpp: parseFloat(p.hpp) || 0,
            qty: numQty,
            unit: p.unit || 'pcs',
            poTime: p.poTime || '',
            discount: 0,
            subtotal: price * numQty,
            isVariant: false,
            isWholesale: false
        });
        posCart.push(item);
    }
    playCashierBeep();
    if (typeof window.triggerHaptic === 'function') window.triggerHaptic('light');
    renderCart();
    return true;
};

export const addToCartWithVariant = (productId, variantName, variantPrice, variantIdx, qty = 1) => {
    const p = (appData.products || []).find(x => x && String(x.id) === String(productId));
    if (!p) return false;

    // 1. Validasi Produk Aktif
    const pActive = p.isActive !== 'false' && p.isActive !== false;
    if (!pActive) {
        showToast('Produk ini sedang dinonaktifkan atau tidak tersedia.', 'warning');
        return false;
    }

    // 2. Validasi Varian Aktif & Ketersediaan Stok (Identik Storefront)
    const v = p.variants?.[variantIdx];
    if (v) {
        const vActive = v.isActive !== false && v.isActive !== 'false';
        if (!vActive) {
            showToast('Varian produk ini sedang tidak aktif.', 'warning');
            return false;
        }
        const useStk = appData.store?.useStock === true || appData.store?.useStock === 'true';
        if (useStk) {
            const vStock = parseFloat(v.stock) || 0;
            const cartKey = `${productId}__v${variantIdx}`;
            const existing = posCart.find(i => i.cartKey === cartKey);
            const inCartQty = existing ? parseFloat(existing.qty) || 0 : 0;
            const numQty = fQty(qty) || 1;
            if (vStock <= 0) {
                showToast(`Persediaan varian "${v.name}" sedang kosong.`, 'warning');
                return false;
            }
            if (inCartQty + numQty > vStock) {
                showToast(`Persediaan varian "${v.name}" tidak mencukupi. Sisa stok: ${formatQty(vStock)}`, 'warning');
                return false;
            }
        }
    }

    const cartKey = `${productId}__v${variantIdx}`;
    const numQty = fQty(qty) || 1;
    const existing = posCart.find(i => i.cartKey === cartKey);
    if (existing) {
        existing.qty = parseFloat((existing.qty + numQty).toFixed(3));
        recalcItem(existing);
    } else {
        const displayName = `${p.name} — ${variantName}`;
        const varHpp = parseFloat(v?.hpp != null ? v.hpp : p.hpp) || 0;
        posCart.push(recalcItem({
            id: productId,
            cartKey,
            name: displayName,
            variantName,
            variantIdx,
            price: variantPrice,
            basePrice: variantPrice,
            hpp: varHpp,
            qty: numQty,
            unit: v?.unit || p.unit || 'pcs',
            poTime: p.poTime || '',
            discount: 0,
            subtotal: variantPrice * numQty,
            isVariant: true,
            isWholesale: false
        }));
    }
    playCashierBeep();
    if (typeof window.triggerHaptic === 'function') window.triggerHaptic('light');
    renderCart();
    return true;
};

export const updateQty = (cartKey, delta) => {
    const item = posCart.find(i => (i.cartKey || String(i.id)) === String(cartKey));
    if (!item) return;
    const nextQty = parseFloat((item.qty + delta).toFixed(3));
    if (nextQty <= 0) {
        removeFromCart(cartKey);
        return;
    }
    if (delta > 0) {
        const p = (appData.products || []).find(x => x && String(x.id) === String(item.id));
        if (p) {
            const useStk = appData.store?.useStock === true || appData.store?.useStock === 'true';
            if (useStk) {
                if (item.isVariant && p.variants) {
                    const v = p.variants.find(vv => vv.name === item.variantName);
                    const vStock = parseFloat(v?.stock) || 0;
                    if (nextQty > vStock) {
                        showToast(`Stok maksimal "${item.name}" hanya ${formatQty(vStock)}`, 'warning');
                        return;
                    }
                } else {
                    const sInfo = getProductStockInfo(p);
                    if (sInfo.isManaged && nextQty > sInfo.totalStock) {
                        showToast(`Stok maksimal tersedia: ${formatQty(sInfo.totalStock)} ${p.unit || 'pcs'}`, 'warning');
                        return;
                    }
                }
            }
        }
    }
    item.qty = nextQty;
    recalcItem(item);
    if (delta > 0) playCashierBeep();
    renderCart();
};

export const setQty = (cartKey, val) => {
    const item = posCart.find(i => (i.cartKey || String(i.id)) === String(cartKey));
    if (!item) return;
    let targetQty = fQty(val);
    if (targetQty <= 0) {
        removeFromCart(cartKey);
        return;
    }
    const p = (appData.products || []).find(x => x && String(x.id) === String(item.id));
    if (p) {
        const useStk = appData.store?.useStock === true || appData.store?.useStock === 'true';
        if (useStk) {
            if (item.isVariant && p.variants) {
                const v = p.variants.find(vv => vv.name === item.variantName);
                const vStock = parseFloat(v?.stock) || 0;
                if (targetQty > vStock) {
                    showToast(`Stok maksimal "${item.name}" hanya ${formatQty(vStock)}`, 'warning');
                    targetQty = vStock;
                }
            } else {
                const sInfo = getProductStockInfo(p);
                if (sInfo.isManaged && targetQty > sInfo.totalStock) {
                    showToast(`Stok maksimal tersedia: ${formatQty(sInfo.totalStock)} ${p.unit || 'pcs'}`, 'warning');
                    targetQty = sInfo.totalStock;
                }
            }
        }
    }
    item.qty = targetQty;
    recalcItem(item);
    renderCart();
};

export const setItemDisc = (cartKey, val) => {
    const item = posCart.find(i => (i.cartKey || String(i.id)) === String(cartKey));
    if (!item) return;
    const numVal = fNum(val);
    const itemHpp = item.hpp != null ? parseFloat(item.hpp) : (getEffHpp(item) || 0);

    if (itemHpp > 0) {
        // Diskon per item tidak boleh membuat harga jual di bawah harga modal HPP
        const maxDisc = Math.max(0, Math.round((item.price - itemHpp) * item.qty));
        if (numVal > maxDisc) {
            const msg = canViewHpp()
                ? `Diskon ditolak! Tidak boleh di bawah harga modal toko (HPP ${fRp(itemHpp)}). Maksimal diskon: ${fRp(maxDisc)}`
                : 'Diskon ditolak! Nilai diskon melebihi batas diskon maksimum yang diizinkan untuk item ini.';
            showToast(msg, 'warning');
            item.discount = maxDisc;
            recalcItem(item);
            renderCart();
            if (typeof window.triggerHaptic === 'function') window.triggerHaptic('heavy');
            return;
        }
    }
    item.discount = Math.min(numVal, item.price * item.qty);
    recalcItem(item);
    renderCart();
};

export const removeFromCart = (cartKey) => {
    posCart = posCart.filter(i => (i.cartKey || String(i.id)) !== String(cartKey));
    renderCart();
    if (typeof window.triggerHaptic === 'function') window.triggerHaptic('light');
};

export const clearCart = () => {
    if (posCart.length === 0) return;
    const executeClear = () => {
        posCart = []; posGlobalDisc = 0; posDiscountVal = 0; posDiscountType = 'rp';
        posPointsRedeemed = 0; posClaimedReward = null;
        renderCart();
        showToast('Keranjang transaksi kasir berhasil dikosongkan.');
    };
    if (typeof window.showConfirm === 'function') {
        window.showConfirm('Kosongkan Keranjang Kasir', 'Apakah Anda yakin ingin menghapus seluruh item dari transaksi kasir saat ini?', executeClear, 'Ya, Kosongkan', true);
    } else {
        executeClear();
    }
};

// ─── Sound Chime Sintetis Kasir (Web Audio API) ─────────────
export const playCashierChime = (type = 'hold') => {
    try {
        if (typeof window !== 'undefined' && typeof window.checkUserGesture === 'function') {
            if (!window.checkUserGesture()) return;
        }
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        if (!AudioCtx) return;
        const ctx = new AudioCtx();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        const now = ctx.currentTime;
        if (type === 'hold') {
            osc.frequency.setValueAtTime(659.25, now); // E5
            osc.frequency.exponentialRampToValueAtTime(880, now + 0.1); // A5
        } else {
            osc.frequency.setValueAtTime(880, now); // A5
            osc.frequency.exponentialRampToValueAtTime(1174.66, now + 0.1); // D6
        }
        gain.gain.setValueAtTime(0.08, now);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.16);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        osc.stop(now + 0.16);
        setTimeout(() => { ctx.close().catch(() => {}); }, 200);
    } catch (e) {}
};

// ─── Format Relatif Waktu Antrean ───────────────────────────
const formatTimeAgo = (ts) => {
    if (!ts) return '';
    const diffSec = Math.floor((Date.now() - ts) / 1000);
    if (diffSec < 45) return 'Baru saja';
    const diffMin = Math.floor(diffSec / 60);
    if (diffMin < 60) return `${diffMin} mnt lalu`;
    const diffHour = Math.floor(diffMin / 60);
    if (diffHour < 24) return `${diffHour} jam lalu`;
    return new Date(ts).toLocaleDateString('id-ID', { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' });
};

// ─── State Transaksi Tertahan (Parkir Antrean) ───────────────
let posHeldCarts = [];
try {
    const savedHeld = localStorage.getItem('pos_held_carts');
    if (savedHeld) {
        const parsed = JSON.parse(savedHeld);
        if (Array.isArray(parsed)) posHeldCarts = parsed;
    }
} catch (e) {
    posHeldCarts = [];
}

const saveHeldCarts = () => {
    try {
        localStorage.setItem('pos_held_carts', JSON.stringify(posHeldCarts));
    } catch (e) {}
    renderHeldBadges();
};

export const renderHeldBadges = () => {
    const count = posHeldCarts.length;
    const sfTarget = el('pos-held-btn-storefront');
    const adTarget = el('pos-held-btn-admin');

    if (sfTarget) {
        if (count > 0) {
            sfTarget.innerHTML = `
            <button onclick="window.openPOSHeldModal()" class="h-8 px-2.5 sm:px-3 rounded-xl bg-amber-500 hover:bg-amber-600 text-white text-xs font-black inline-flex items-center gap-1.5 transition-all active:scale-95 shadow-md cursor-pointer animate-pulse whitespace-nowrap shrink-0" title="Ada ${count} transaksi antrean tertahan (F8)">
                <i class="fa-solid fa-hourglass-half text-xs"></i>
                <span class="whitespace-nowrap">${count} Parkir</span>
            </button>`;
        } else {
            sfTarget.innerHTML = `
            <button onclick="window.openPOSHeldModal()" class="h-8 px-2 sm:px-2.5 rounded-xl bg-black/15 hover:bg-black/25 text-white/90 hover:text-white text-xs font-bold inline-flex items-center gap-1.5 transition-all active:scale-95 cursor-pointer whitespace-nowrap shrink-0" title="Daftar Transaksi Tertahan (F8)">
                <i class="fa-solid fa-hourglass-half text-xs"></i>
                <span class="hidden sm:inline whitespace-nowrap">Parkir (0)</span>
            </button>`;
        }
    }

    if (adTarget) {
        if (count > 0) {
            adTarget.innerHTML = `
            <button onclick="window.openPOSHeldModal()" class="h-8 px-2.5 sm:px-3 rounded-xl bg-amber-500 hover:bg-amber-600 text-white text-xs font-black inline-flex items-center gap-1.5 shadow-sm transition-all active:scale-95 cursor-pointer animate-pulse whitespace-nowrap shrink-0" title="Ada ${count} transaksi antrean tertahan (F8)">
                <i class="fa-solid fa-hourglass-half text-xs"></i>
                <span class="whitespace-nowrap">${count} Parkir</span>
            </button>`;
        } else {
            adTarget.innerHTML = `
            <button onclick="window.openPOSHeldModal()" class="h-8 px-2.5 sm:px-3 rounded-xl bg-slate-50 hover:bg-slate-100 dark:bg-slate-800 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 text-xs font-bold inline-flex items-center gap-1.5 transition-all cursor-pointer whitespace-nowrap shrink-0 shadow-2xs active:scale-95" title="Daftar Transaksi Tertahan (F8)">
                <i class="fa-solid fa-hourglass-half text-xs"></i>
                <span class="whitespace-nowrap">Parkir</span>
            </button>`;
        }
    }
};

// ─── Tahan Transaksi Saat Ini (Hold / Parkir) ─────────────────
export const posHoldCurrentCart = () => {
    if (posCart.length === 0) {
        showToast('Keranjang kasir masih kosong. Tidak ada transaksi untuk ditahan.', 'warning');
        return;
    }

    const defaultNote = posCustomer?.name
        ? `Antrean #${posHeldCarts.length + 1} — ${posCustomer.name}`
        : `Antrean #${posHeldCarts.length + 1}`;

    const totalQty = parseFloat(posCart.reduce((s, i) => s + (parseFloat(i.qty) || 0), 0).toFixed(3));
    const totalRp = posTotal();

    // Tutup drawer mobile bila terbuka
    closePOSCartDrawer(true);

    if (typeof window.pushModalHistory === 'function') window.pushModalHistory('posHoldPrompt');

    document.getElementById('pos-hold-prompt-modal')?.remove();
    document.body.insertAdjacentHTML('beforeend', `
    <div id="pos-hold-prompt-modal" class="fixed inset-0 z-[9999] flex items-center justify-center p-4" style="background:rgba(15,23,42,0.75)">
        <div class="bg-white dark:bg-slate-900 rounded-[2rem] shadow-2xl w-full max-w-[380px] sm:max-w-[420px] border border-slate-200/80 dark:border-slate-800 overflow-hidden transform transition-all animate-scaleIn">
            <div class="p-5 sm:p-6 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between bg-slate-50/70 dark:bg-slate-800/40">
                <div class="flex items-center gap-3">
                    <div class="w-10 h-10 rounded-2xl bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 flex items-center justify-center text-base font-bold shadow-2xs">
                        <i class="fa-solid fa-pause"></i>
                    </div>
                    <div>
                        <h3 class="font-black text-sm sm:text-base text-slate-900 dark:text-white leading-tight">Parkir / Tahan Transaksi</h3>
                        <p class="text-[10px] text-slate-400 mt-0.5">Simpan antrean sementara (F6)</p>
                    </div>
                </div>
                <button onclick="window.closePOSHoldPrompt()" class="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-white flex items-center justify-center transition-all cursor-pointer">
                    <i class="fa-solid fa-xmark text-sm"></i>
                </button>
            </div>
            <div class="p-5 sm:p-6 space-y-4">
                <div class="p-3.5 bg-amber-50/70 dark:bg-amber-950/20 border border-amber-200/60 dark:border-amber-800/40 rounded-2xl flex items-center justify-between text-xs">
                    <div>
                        <p class="text-[10px] font-bold text-amber-700 dark:text-amber-300 uppercase tracking-wider">Total Belanjaan</p>
                        <p class="font-black text-slate-800 dark:text-slate-100 text-sm mt-0.5">${formatQty(totalQty)} item</p>
                    </div>
                    <div class="text-right">
                        <p class="text-[10px] font-bold text-amber-700 dark:text-amber-300 uppercase tracking-wider">Total Tagihan</p>
                        <p class="font-black text-sm sm:text-base" style="color:var(--color-primary)">${fRp(totalRp)}</p>
                    </div>
                </div>
                <div>
                    <label class="text-[10px] font-black uppercase tracking-wider text-slate-400 mb-1.5 block">Label / Catatan Antrean Pelanggan</label>
                    <input id="pos-hold-note-input" type="text" value="${esc(defaultNote)}" placeholder="Contoh: Bpk Budi (ambil barang lagi)..."
                        class="w-full border border-slate-200 dark:border-slate-700 rounded-2xl px-4 py-3 text-xs sm:text-sm font-semibold bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-slate-100 focus:outline-none focus:border-[var(--color-primary)] focus:bg-white dark:focus:bg-slate-900 transition-all placeholder:text-slate-400"
                        onkeydown="if(event.key==='Enter') window.posConfirmHoldCart();">
                </div>
            </div>
            <div class="p-4 sm:p-5 border-t border-slate-100 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-800/40 flex gap-2.5">
                <button onclick="window.closePOSHoldPrompt()" class="flex-1 py-3.5 rounded-2xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 font-bold text-xs sm:text-sm hover:bg-slate-100 dark:hover:bg-slate-800 transition-all cursor-pointer active:scale-95">Batal</button>
                <button onclick="window.posConfirmHoldCart()" class="flex-[1.5] py-3.5 rounded-2xl bg-amber-500 hover:bg-amber-600 text-white font-black text-xs sm:text-sm shadow-md active:scale-95 transition-all flex items-center justify-center gap-1.5 cursor-pointer">
                    <i class="fa-solid fa-pause"></i>
                    <span>Tahan Transaksi</span>
                </button>
            </div>
        </div>
    </div>`);

    setTimeout(() => {
        const inp = el('pos-hold-note-input');
        if (inp) { inp.focus(); inp.select(); }
    }, 50);
};

export const closePOSHoldPrompt = (skipHistory = false) => {
    const m = el('pos-hold-prompt-modal');
    if (m) {
        if (!skipHistory && typeof window.requestCloseModal === 'function') {
            window.requestCloseModal('posHoldPrompt', false, () => m.remove());
        } else {
            m.remove();
        }
    }
};

export const posConfirmHoldCart = () => {
    if (posCart.length === 0) return;
    const inp = el('pos-hold-note-input');
    const note = (inp?.value || '').trim() || `Antrean #${posHeldCarts.length + 1}`;

    const heldItem = {
        id: `HELD-${Date.now().toString(36).toUpperCase()}`,
        time: Date.now(),
        note,
        cart: JSON.parse(JSON.stringify(posCart)),
        globalDisc: posDiscountAmount(),
        discountType: posDiscountType,
        discountVal: posDiscountVal,
        customer: { ...posCustomer },
        total: posTotal(),
        subtotal: posSubtotal(),
        itemCount: parseFloat(posCart.reduce((s, i) => s + (parseFloat(i.qty) || 0), 0).toFixed(3)),
    };

    posHeldCarts.unshift(heldItem);
    saveHeldCarts();

    // Reset keranjang aktif kasir
    posCart = [];
    posGlobalDisc = 0;
    posDiscountVal = 0;
    posDiscountType = 'rp';
    posCustomer = { name: '', phone: '', isMember: false, memberId: null, isNewTempo: false };

    closePOSHoldPrompt();
    renderCart();
    renderCatalog();
    playCashierChime('hold');
    showToast(`Transaksi antrean "${note}" berhasil ditahan/diparkir.`, 'success');
};

// ─── Modal Daftar Antrean Tertahan (Parkir) ─────────────────
export const openPOSHeldModal = (skipHistory = false) => {
    if (!skipHistory && typeof window.pushModalHistory === 'function') window.pushModalHistory('posHeldModal');

    document.getElementById('pos-held-list-modal')?.remove();
    const count = posHeldCarts.length;

    const listHtml = count === 0
        ? `
        <div class="py-12 px-4 text-center">
            <div class="w-14 h-14 rounded-2xl bg-amber-50 dark:bg-amber-950/30 text-amber-500 flex items-center justify-center mx-auto mb-3 text-2xl shadow-inner">
                <i class="fa-solid fa-hourglass-half"></i>
            </div>
            <h4 class="font-bold text-sm text-slate-800 dark:text-slate-200">Tidak Ada Transaksi Tertahan</h4>
            <p class="text-xs text-slate-400 mt-1 max-w-xs mx-auto leading-relaxed">
                Gunakan tombol <span class="font-bold text-amber-600 dark:text-amber-400">"Tahan"</span> di keranjang kasir (atau tekan F6) untuk memarkir antrean saat pelanggan mengambil barang tambahan.
            </p>
        </div>`
        : `
        <div class="divide-y divide-slate-100 dark:divide-slate-800">
            ${posHeldCarts.map((item, idx) => {
                const safeId = esc(item.id);
                const itemsSummary = (item.cart || []).slice(0, 3).map(i => `${esc(i.name)} (${formatQty(i.qty)}x)`).join(', ');
                const moreCount = (item.cart || []).length > 3 ? ` +${item.cart.length - 3} lainnya` : '';
                return `
                <div class="p-3.5 sm:p-4 hover:bg-slate-50/80 dark:hover:bg-slate-800/40 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div class="min-w-0 flex-1">
                        <div class="flex items-center gap-2 mb-1 flex-wrap">
                            <span class="px-2 py-0.5 rounded-lg bg-amber-100 dark:bg-amber-900/40 text-amber-800 dark:text-amber-300 font-black text-[10px] uppercase">
                                #${idx + 1}
                            </span>
                            <h4 class="font-black text-xs sm:text-sm text-slate-900 dark:text-white truncate" title="${esc(item.note)}">
                                ${esc(item.note)}
                            </h4>
                            <span class="text-[10px] text-slate-400">• ${formatTimeAgo(item.time)}</span>
                        </div>
                        <p class="text-[11px] text-slate-500 dark:text-slate-400 truncate mt-0.5">
                            <i class="fa-solid fa-box-open mr-1 text-[10px] opacity-70"></i>
                            <span>${itemsSummary}${moreCount}</span>
                        </p>
                        <div class="flex items-center gap-3 mt-1.5 text-xs">
                            <span class="text-slate-500 font-medium">${formatQty(item.itemCount)} item</span>
                            <span class="text-slate-300 dark:text-slate-700">•</span>
                            <span class="font-black" style="color:var(--color-primary)">${fRp(item.total)}</span>
                            ${(item.globalDisc || 0) > 0 ? `<span class="text-[10px] text-rose-500 font-bold">(Disc: ${fRp(item.globalDisc)})</span>` : ''}
                        </div>
                    </div>
                    <div class="flex items-center gap-2 shrink-0">
                        <button onclick="window.posDeleteHeldCart('${safeId}')" class="w-8 h-8 rounded-xl border border-rose-200 dark:border-rose-900/50 text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-950/30 flex items-center justify-center text-xs transition-all active:scale-95 cursor-pointer" title="Hapus Antrean">
                            <i class="fa-solid fa-trash-can"></i>
                        </button>
                        <button onclick="window.posRecallHeldCart('${safeId}')" class="px-3.5 py-2 rounded-xl text-white font-black text-xs shadow-md active:scale-95 transition-all flex items-center gap-1.5 cursor-pointer" style="background:var(--color-primary)">
                            <i class="fa-solid fa-play text-[10px]"></i>
                            <span>Panggil Antrean</span>
                        </button>
                    </div>
                </div>`;
            }).join('')}
        </div>`;

    document.body.insertAdjacentHTML('beforeend', `
    <div id="pos-held-list-modal" class="fixed inset-0 z-[9999] flex items-end sm:items-center justify-center p-0 sm:p-4" style="background:rgba(15,23,42,0.75)">
        <div class="bg-white dark:bg-slate-900 rounded-t-3xl sm:rounded-3xl shadow-2xl w-full sm:max-w-lg max-h-[85vh] flex flex-col overflow-hidden border border-slate-200/80 dark:border-slate-800">
            <div class="p-4 sm:p-5 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between shrink-0 bg-slate-50/70 dark:bg-slate-800/40">
                <div class="flex items-center gap-2.5">
                    <div class="w-8 h-8 rounded-xl bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 flex items-center justify-center text-sm font-bold shadow-2xs">
                        <i class="fa-solid fa-hourglass-half"></i>
                    </div>
                    <div>
                        <h3 class="font-black text-sm text-slate-900 dark:text-white leading-tight flex items-center gap-2">
                            <span>Daftar Transaksi Tertahan (Parkir)</span>
                            <span class="px-2 py-0.5 rounded-full text-[10px] font-black bg-amber-500 text-white">${count}</span>
                        </h3>
                        <p class="text-[10px] text-slate-400">Panggil kembali belanjaan pelanggan yang diparkir (F8)</p>
                    </div>
                </div>
                <button onclick="window.closePOSHeldModal()" class="w-8 h-8 rounded-xl bg-slate-200/60 dark:bg-slate-700/60 text-slate-500 hover:text-slate-800 dark:hover:text-white text-lg flex items-center justify-center transition-all leading-none cursor-pointer">×</button>
            </div>
            <div class="overflow-y-auto flex-1 max-h-[55vh]">
                ${listHtml}
            </div>
            <div class="p-3 sm:p-4 border-t border-slate-100 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-800/40 flex justify-between items-center shrink-0">
                <p class="text-[11px] text-slate-400 font-medium">
                    <i class="fa-solid fa-keyboard mr-1"></i>Tekan <kbd class="px-1 py-0.5 bg-slate-200 dark:bg-slate-700 rounded text-[9px] font-mono">F6</kbd> Tahan, <kbd class="px-1 py-0.5 bg-slate-200 dark:bg-slate-700 rounded text-[9px] font-mono">F8</kbd> Antrean
                </p>
                <button onclick="window.closePOSHeldModal()" class="px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 font-bold text-xs hover:bg-slate-100 dark:hover:bg-slate-800 transition-all cursor-pointer">
                    Tutup
                </button>
            </div>
        </div>
    </div>`);
};

export const closePOSHeldModal = (skipHistory = false) => {
    const m = el('pos-held-list-modal');
    if (m) {
        if (!skipHistory && typeof window.requestCloseModal === 'function') {
            window.requestCloseModal('posHeldModal', false, () => m.remove());
        } else {
            m.remove();
        }
    }
};

// ─── Panggil Transaksi Tertahan (Recall) ────────────────────
export const posRecallHeldCart = (heldId) => {
    const heldIdx = posHeldCarts.findIndex(x => x.id === heldId);
    if (heldIdx === -1) {
        showToast('Transaksi tertahan tidak ditemukan.', 'warning');
        return;
    }

    // Jika keranjang aktif saat ini ada isinya, tanyakan konfirmasi proteksi data
    if (posCart.length > 0) {
        document.getElementById('pos-recall-confirm-modal')?.remove();
        document.body.insertAdjacentHTML('beforeend', `
        <div id="pos-recall-confirm-modal" class="fixed inset-0 z-[10000] flex items-center justify-center p-4" style="background:rgba(15,23,42,0.75)">
            <div class="bg-white dark:bg-slate-900 rounded-3xl shadow-2xl w-full max-w-sm border border-slate-200/80 dark:border-slate-800 overflow-hidden">
                <div class="p-5 text-center">
                    <div class="w-14 h-14 rounded-2xl bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 flex items-center justify-center mx-auto mb-3 text-2xl shadow-inner">
                        <i class="fa-solid fa-triangle-exclamation"></i>
                    </div>
                    <h3 class="font-black text-sm text-slate-900 dark:text-white mb-1">Keranjang Masih Berisi Item</h3>
                    <p class="text-xs text-slate-500 leading-relaxed mb-4">
                        Ada <span class="font-bold text-slate-800 dark:text-slate-200">${posCart.length} jenis item</span> di transaksi aktif saat ini. Ingin tahan transaksi aktif ke antrean baru atau menimpa?
                    </p>
                    <div class="flex flex-col gap-2">
                        <button onclick="window.posHoldCurrentAndRecall('${esc(heldId)}')" class="w-full py-2.5 rounded-xl text-white font-bold text-xs shadow-md transition-all cursor-pointer flex items-center justify-center gap-1.5 active:scale-95 hover:brightness-105" style="background:var(--color-primary)">
                            <i class="fa-solid fa-floppy-disk"></i>
                            <span>Tahan Transaksi Aktif &amp; Panggil</span>
                        </button>
                        <button onclick="window.posOverwriteAndRecall('${esc(heldId)}')" class="w-full py-2 rounded-xl border border-rose-200 dark:border-rose-900 text-rose-600 dark:text-rose-400 font-bold text-xs hover:bg-rose-50 dark:hover:bg-rose-950/20 transition-all cursor-pointer">
                            Timpa Transaksi Aktif
                        </button>
                        <button onclick="document.getElementById('pos-recall-confirm-modal')?.remove()" class="w-full py-2 rounded-xl text-slate-400 text-xs font-medium hover:text-slate-600 transition-all cursor-pointer">
                            Batal
                        </button>
                    </div>
                </div>
            </div>
        </div>`);
        return;
    }

    _applyRecall(heldIdx);
};

const _applyRecall = (heldIdx) => {
    const held = posHeldCarts[heldIdx];
    if (!held) return;

    posCart         = JSON.parse(JSON.stringify(held.cart || []));
    posDiscountType = held.discountType || 'rp';
    posDiscountVal  = held.discountVal !== undefined ? held.discountVal : (held.globalDisc || 0);
    posGlobalDisc   = posDiscountAmount();
    posCustomer     = held.customer ? { ...held.customer } : { name: '', phone: '', isMember: false, memberId: null, isNewTempo: false };

    // Hapus dari held list
    posHeldCarts.splice(heldIdx, 1);
    saveHeldCarts();

    closePOSHeldModal();
    renderCart();
    renderCatalog();
    playCashierChime('recall');
    showToast(`Transaksi antrean "${held.note}" berhasil dimuat kembali.`, 'success');
};

export const posHoldCurrentAndRecall = (heldId) => {
    document.getElementById('pos-recall-confirm-modal')?.remove();
    // Tahan transaksi aktif saat ini
    const note = posCustomer?.name ? `Antrean #${posHeldCarts.length + 1} — ${posCustomer.name}` : `Antrean #${posHeldCarts.length + 1}`;
    const newHeld = {
        id: `HELD-${Date.now().toString(36).toUpperCase()}`,
        time: Date.now(),
        note,
        cart: JSON.parse(JSON.stringify(posCart)),
        globalDisc: posDiscountAmount(),
        discountType: posDiscountType,
        discountVal: posDiscountVal,
        customer: { ...posCustomer },
        total: posTotal(),
        subtotal: posSubtotal(),
        itemCount: parseFloat(posCart.reduce((s, i) => s + (parseFloat(i.qty) || 0), 0).toFixed(3)),
    };
    posHeldCarts.unshift(newHeld);

    // Cari index target setelah unshift
    const targetIdx = posHeldCarts.findIndex(x => x.id === heldId);
    if (targetIdx !== -1) {
        _applyRecall(targetIdx);
    } else {
        saveHeldCarts();
        closePOSHeldModal();
    }
};

export const posOverwriteAndRecall = (heldId) => {
    document.getElementById('pos-recall-confirm-modal')?.remove();
    const targetIdx = posHeldCarts.findIndex(x => x.id === heldId);
    if (targetIdx !== -1) {
        _applyRecall(targetIdx);
    }
};

export const posDeleteHeldCart = (heldId) => {
    const held = posHeldCarts.find(x => x.id === heldId);
    if (!held) return;

    document.getElementById('pos-delete-confirm-modal')?.remove();
    document.body.insertAdjacentHTML('beforeend', `
    <div id="pos-delete-confirm-modal" class="fixed inset-0 z-[10005] flex items-center justify-center p-4" style="background:rgba(15,23,42,0.8)">
        <div class="bg-white dark:bg-slate-900 rounded-3xl shadow-2xl w-full max-w-xs border border-slate-200 dark:border-slate-800 p-6 text-center transform transition-all">
            <div class="w-14 h-14 rounded-2xl bg-rose-50 dark:bg-rose-950/40 text-rose-500 border border-rose-200 dark:border-rose-900/50 flex items-center justify-center mx-auto mb-3.5 text-2xl shadow-inner">
                <i class="fa-solid fa-trash-can"></i>
            </div>
            <h4 class="font-black text-sm text-slate-900 dark:text-white mb-1.5">Hapus Antrean Ini?</h4>
            <p class="text-xs text-slate-500 dark:text-slate-400 mb-5 leading-relaxed">
                Antrean <span class="font-bold text-slate-800 dark:text-slate-200">"${esc(held.note)}"</span> (${held.itemCount} item • ${fRp(held.total)}) akan dihapus permanen.
            </p>
            <div class="flex gap-2.5">
                <button onclick="document.getElementById('pos-delete-confirm-modal')?.remove()" class="flex-1 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all cursor-pointer">
                    Batal
                </button>
                <button onclick="window.posExecuteDeleteHeld('${esc(heldId)}')" class="flex-1 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-700 active:scale-95 text-xs font-bold text-white shadow-md shadow-rose-600/30 transition-all cursor-pointer flex items-center justify-center gap-1.5">
                    <i class="fa-solid fa-trash-can text-[11px]"></i>
                    <span>Ya, Hapus</span>
                </button>
            </div>
        </div>
    </div>`);
};

export const posExecuteDeleteHeld = (heldId) => {
    document.getElementById('pos-delete-confirm-modal')?.remove();
    const held = posHeldCarts.find(x => x.id === heldId);
    posHeldCarts = posHeldCarts.filter(x => x.id !== heldId);
    saveHeldCarts();
    showToast(`Transaksi antrean "${held?.note || ''}" telah dihapus.`, 'info');
    openPOSHeldModal(true);
};

// ─── Mobile Drawer (Bottom Sheet) ───────────────────────────
export const openPOSCartDrawer = () => {
    const drawer = el('pos-mobile-cart-drawer');
    const sheet  = el('pos-mobile-cart-sheet');
    if (drawer && sheet) {
        drawer.classList.remove('opacity-0', 'pointer-events-none');
        drawer.classList.add('opacity-100');
        sheet.classList.remove('translate-y-full');
        sheet.classList.add('translate-y-0');
        if (typeof window.pushModalHistory === 'function') window.pushModalHistory('posCartDrawer');
        if (typeof window.triggerHaptic === 'function') window.triggerHaptic('light');
    }
};

export const closePOSCartDrawer = (skipHistory = false) => {
    const drawer = el('pos-mobile-cart-drawer');
    const sheet  = el('pos-mobile-cart-sheet');
    if (drawer && sheet) {
        const performClose = () => {
            sheet.classList.add('translate-y-full');
            sheet.classList.remove('translate-y-0');
            drawer.classList.add('opacity-0', 'pointer-events-none');
            drawer.classList.remove('opacity-100');
        };
        if (!skipHistory && typeof window.requestCloseModal === 'function') {
            window.requestCloseModal('posCartDrawer', false, performClose);
        } else {
            performClose();
        }
    }
};

// ─── Render Katalog ──────────────────────────────────────────
const getItemImg = (item) => {
    if (!item) return '';
    if (item.img && typeof item.img === 'string' && !isPlaceholderImg(item.img)) return getOptImg(item.img, 'w150-rw');
    const p = (appData?.products || []).find(x => x && String(x.id) === String(item.id));
    if (p && p.img && typeof p.img === 'string' && !isPlaceholderImg(p.img)) return getOptImg(p.img, 'w150-rw');
    return '';
};

export const renderCatalog = (isLoadMore = false) => {
    try {
        if (!isLoadMore) posCatalogPage = 1;
        // Fallback pemulihan produk dari cache lokal jika appData.products belum terisi
        if (!appData?.products || !appData.products.length) {
            try {
                const cached = JSON.parse(localStorage.getItem('freshmart_products') || 'null');
                if (Array.isArray(cached) && cached.length > 0) {
                    if (!appData) window.appData = {};
                    appData.products = cached;
                }
            } catch (_) {}
        }

        const prodList = Array.isArray(appData?.products) ? appData.products : [];
        const products = prodList.filter(p => {
            if (!p || p.isActive === 'false' || p.isActive === false) return false;
            if (posCatFilterVal && p.category !== posCatFilterVal) return false;
            if (posSubCatFilterVal && (p.subCategory || '').trim().toLowerCase() !== posSubCatFilterVal.toLowerCase()) return false;
            if (posSearch) {
                const rawQ = String(posSearch).toLowerCase();
                const q = cleanBarcodeRaw(rawQ) || rawQ;
                const name = String(p.name || '').toLowerCase();
                const barcode = cleanBarcodeRaw(p.barcode || '').toLowerCase();
                const sku = String(p.sku || '').toLowerCase();
                const pIdStr = String(p.id || '').toLowerCase();
                const skuFallback = `sku-${pIdStr}`;
                const cat = String(p.category || '').toLowerCase();
                const subCat = String(p.subCategory || '').toLowerCase();
                const brand = String(p.brand || '').toLowerCase();
                const hasMatchingVariant = Array.isArray(p.variants) && p.variants.some((v, vIdx) => {
                    const vName = String(v.name || '').toLowerCase();
                    const vSku = String(v.sku || '').toLowerCase();
                    const vBarcode = cleanBarcodeRaw(v.barcode || '').toLowerCase();
                    const vFallback1 = `${sku || pIdStr}-${vIdx + 1}`.toLowerCase();
                    const vFallback2 = `${pIdStr}-${vIdx + 1}`.toLowerCase();
                    return vName.includes(q) || vSku.includes(q) || vBarcode.includes(q) || vFallback1.includes(q) || vFallback2.includes(q);
                });
                return name.includes(q) || barcode.includes(q) || sku.includes(q) || pIdStr === q || skuFallback === q || cat.includes(q) || subCat.includes(q) || brand.includes(q) || hasMatchingVariant;
            }
            return true;
        });

        const activeCats = prodList
            .filter(p => p && p.isActive !== 'false' && p.isActive !== false && p.category)
            .map(p => String(p.category).trim())
            .filter(c => c.length > 0);
        const cats = ['Semua', ...[...new Set(activeCats)]];

        const catHTML = cats.map(c => {
            const isAll  = c === 'Semua';
            const active = isAll ? !posCatFilterVal : posCatFilterVal === c;
            return `<button type="button" onclick="window.posCatFilter('${esc(isAll ? '' : c)}')" class="shrink-0 px-3.5 py-1.5 rounded-xl text-[11px] font-black uppercase tracking-wider border transition-all active:scale-95 shadow-2xs cursor-pointer touch-manipulation select-none ${active ? 'text-white border-transparent' : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:border-[var(--color-primary)]/50'}" style="${active ? 'background:linear-gradient(135deg, var(--color-primary-light,#e1b858) 0%, var(--color-primary,#c59b27) 60%, var(--color-primary-dark,#a87f1b) 100%);box-shadow:0 2px 8px rgba(var(--color-primary-rgb),0.3)' : ''}">${esc(c)}</button>`;
        }).join('');

        let subCatHTML = '';
        if (posCatFilterVal) {
            const catObj = (appData?.categories || []).find(c => c.name === posCatFilterVal);
            const officialSubs = Array.isArray(catObj?.subCategories) ? catObj.subCategories : [];
            const prodsInCat = prodList.filter(p => p && p.isActive !== 'false' && p.isActive !== false && p.category === posCatFilterVal);
            const subCatMap = {};
            officialSubs.forEach(sc => {
                const trimmed = (sc || '').trim();
                if (trimmed) subCatMap[trimmed] = 0;
            });
            prodsInCat.forEach(p => {
                const sc = (p.subCategory || '').trim();
                if (sc) subCatMap[sc] = (subCatMap[sc] || 0) + 1;
            });
            const subCats = Object.keys(subCatMap).sort().map(name => ({ name, count: subCatMap[name] }));
            if (subCats.length > 0) {
                subCatHTML = `
                <div class="flex items-center gap-1.5 overflow-x-auto pb-1 hide-scrollbar pt-1.5 mt-1 border-t border-slate-100 dark:border-slate-700/50 w-full">
                    <button type="button" onclick="window.posSubCatFilter('')" class="shrink-0 px-2.5 py-1 rounded-lg text-[10px] font-bold uppercase transition-all active:scale-95 border cursor-pointer touch-manipulation select-none ${!posSubCatFilterVal ? 'bg-slate-800 text-white dark:bg-white dark:text-slate-900 border-transparent shadow-2xs' : 'bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700'}">Semua Jenis</button>
                    ${subCats.map(sc => {
                        const active = posSubCatFilterVal.toLowerCase() === sc.name.toLowerCase();
                        return `<button type="button" onclick="window.posSubCatFilter('${esc(sc.name).replace(/'/g, "\\'")}')" class="shrink-0 px-2.5 py-1 rounded-lg text-[10px] font-bold transition-all active:scale-95 border flex items-center gap-1 cursor-pointer touch-manipulation select-none ${active ? 'bg-[var(--color-primary)] text-white border-transparent shadow-2xs' : 'bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700'}">
                            <span>${esc(sc.name)}</span>
                            <span class="text-[9px] px-1 py-0.2 rounded-full ${active ? 'bg-white/20 text-white' : 'bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300'}">${sc.count}</span>
                        </button>`;
                    }).join('')}
                </div>`;
            }
        }

        const visibleProducts = products.slice(0, posCatalogPage * POS_PAGE_SIZE);
        const hasMore = products.length > visibleProducts.length;

        let prodHTML = products.length === 0
            ? `<div class="col-span-full flex flex-col items-center justify-center py-20 text-slate-400 dark:text-slate-600">
                 <div class="w-16 h-16 rounded-3xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-400 mb-3 shadow-inner">
                   <i class="fa-solid fa-box-open text-2xl"></i>
                 </div>
                 <p class="font-bold text-sm text-slate-600 dark:text-slate-400">Produk Tidak Ditemukan</p>
                 <p class="text-xs text-slate-400 mt-0.5">Coba gunakan kata kunci pencarian atau kategori lain</p>
               </div>`
            : visibleProducts.map(p => {
                if (!p) return '';
                const hasImg         = Boolean(p.img && typeof p.img === 'string' && p.img.trim() && !isPlaceholderImg(p.img));
                const imgUrl         = hasImg ? getOptImg(p.img, 'w300-rw') : '';
                const hasVariants    = Array.isArray(p.variants) && p.variants.length > 0;
                const hasGrosir      = Array.isArray(p.wholesale) && p.wholesale.length > 0;
                const cartItems      = posCart.filter(i => i && String(i.id) === String(p.id));
                const totalQtyInCart = parseFloat(cartItems.reduce((s, i) => s + (i && i.qty ? (parseFloat(i.qty) || 0) : 0), 0).toFixed(3));
                const safeId         = esc(String(p.id != null ? p.id : ''));
                const stockInfo      = getProductStockInfo(p);
                const pName          = esc(String(p.name || 'Produk'));
                const pCat           = esc(String(p.category || ''));
                const pPrice         = parseFloat(p.price) || 0;

                // Kalkulasi Harga Tampil Cerdas (Variant Support: Menghilangkan label "Rp 0" pada produk ber-varian)
                let displayPriceHtml = '';
                if (hasVariants) {
                    const varPrices = (p.variants || []).map(v => parseFloat(v.price) || 0).filter(pr => pr > 0);
                    if (varPrices.length > 0) {
                        const minP = Math.min(...varPrices);
                        const maxP = Math.max(...varPrices);
                        displayPriceHtml = minP === maxP ? fRp(minP) : `${fRp(minP)} - ${fRp(maxP)}`;
                    } else {
                        displayPriceHtml = pPrice > 0 ? fRp(pPrice) : 'Pilih Varian';
                    }
                } else {
                    displayPriceHtml = fRp(pPrice);
                }

                // 1. Promo Diskon & Harga Coret
                let discPill = '';
                let priceNormalHtml = '';
                if (p.priceNormal && parseFloat(p.priceNormal) > pPrice) {
                    const pct = Math.round(((parseFloat(p.priceNormal) - pPrice) / parseFloat(p.priceNormal)) * 100);
                    discPill = `<span class="bg-rose-500 text-white px-2 py-0.5 rounded-md text-[8.5px] font-extrabold flex items-center gap-1 whitespace-nowrap shrink-0 uppercase tracking-wider shadow-sm"><i class="fa-solid fa-tags text-[7.5px]"></i> -${pct}%</span>`;
                    priceNormalHtml = `<p class="text-[10px] sm:text-[11px] text-slate-400 dark:text-slate-500 line-through leading-none font-semibold truncate mb-0.5">${fRp(parseFloat(p.priceNormal))}</p>`;
                } else if (hasVariants && p.variants && p.variants.length) {
                    const varDiscs = p.variants
                        .filter(v => v.priceNormal && parseFloat(v.priceNormal) > parseFloat(v.price))
                        .map(v => Math.round(((parseFloat(v.priceNormal) - parseFloat(v.price)) / parseFloat(v.priceNormal)) * 100));
                    if (varDiscs.length > 0) {
                        const maxPct = Math.max(...varDiscs);
                        discPill = `<span class="bg-rose-500 text-white px-2 py-0.5 rounded-md text-[8.5px] font-extrabold flex items-center gap-1 whitespace-nowrap shrink-0 uppercase tracking-wider shadow-sm"><i class="fa-solid fa-tags text-[7.5px]"></i> -${maxPct}%</span>`;
                    }
                }

                const compactPoStr = p.poTime ? formatCompactPoText(p.poTime) : '';
                let poPill = compactPoStr ? `<span class="bg-amber-500 text-white px-2 py-0.5 rounded-md text-[8.5px] font-extrabold flex items-center gap-1 whitespace-nowrap shrink-0 uppercase tracking-wider shadow-sm"><i class="fa-solid fa-clock text-[7.5px]"></i> PO ${esc(compactPoStr)}</span>` : '';

                // 2. Eyebrow Kategori & Brand Text Terdedikasi (100% Lebar Kartu, Anti-Terpotong)
                const catBrandText = esc(`${p.subCategory || pCat || 'PRODUK'}${p.brand ? ` · ${p.brand}` : ''}`);

                // 3. Status Stok Fisik & Badges (100% di Luar Gambar)
                let stockChip = '';
                if (stockInfo.isOutOfStock) {
                    stockChip = `<span class="bg-rose-500 text-white px-2 py-0.5 rounded-md text-[8.5px] font-extrabold flex items-center gap-1 whitespace-nowrap shrink-0 uppercase tracking-wider shadow-sm"><i class="fa-solid fa-ban text-[7.5px]"></i> Habis</span>`;
                } else if (stockInfo.isLowStock) {
                    stockChip = `<span class="bg-rose-500 text-white px-2 py-0.5 rounded-md text-[8.5px] font-extrabold flex items-center gap-1 whitespace-nowrap shrink-0 uppercase tracking-wider shadow-sm"><i class="fa-solid fa-fire text-[7.5px]"></i> Sisa ${formatQty(stockInfo.totalStock)}</span>`;
                } else if (stockInfo.isManaged && stockInfo.totalStock > 0) {
                    stockChip = `<span class="bg-slate-800/90 dark:bg-slate-700 text-white px-2 py-0.5 rounded-md text-[8.5px] font-bold flex items-center gap-1 whitespace-nowrap shrink-0 uppercase tracking-wider"><i class="fa-solid fa-box text-[7.5px]"></i> Stok ${formatQty(stockInfo.totalStock)}</span>`;
                }

                // 4. Badges Lengkap (Varian, Grosir, Poin Reward, Terjual)
                const variantBadge = hasVariants
                    ? `<span class="bg-indigo-50 text-indigo-600 dark:bg-indigo-950/60 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-800/50 px-1.5 py-0.5 rounded-md text-[8.5px] font-bold flex items-center gap-1 whitespace-nowrap shrink-0 uppercase tracking-wider"><i class="fa-solid fa-layer-group text-[7.5px]"></i> Varian</span>`
                    : '';

                const grosirBadge = hasGrosir
                    ? `<span class="amber-badge px-1.5 py-0.5 rounded-md text-[8.5px] font-bold flex items-center gap-1 whitespace-nowrap shrink-0 uppercase tracking-wider"><i class="fa-solid fa-tags text-[7.5px]"></i> Grosir</span>`
                    : '';

                const activePoin = (p.variants && p.variants.length)
                    ? Math.max(...p.variants.map(v => parseFloat(v.poin) || 0))
                    : (parseFloat(p.poin) || 0);
                const poinBadge = activePoin > 0
                    ? `<span class="bg-[rgba(var(--color-primary-rgb),0.08)] text-[var(--color-primary)] border border-[rgba(var(--color-primary-rgb),0.2)] px-1.5 py-0.5 rounded-md text-[8.5px] font-bold flex items-center gap-1 whitespace-nowrap shrink-0 uppercase tracking-wider"><i class="fa-solid fa-star text-[7.5px]"></i> +${activePoin}</span>`
                    : '';

                const totalSoldPos = (p.variants && p.variants.length)
                    ? p.variants.reduce((s, vv) => s + (parseFloat(vv.totalSold) || 0), 0)
                    : (parseFloat(p.totalSold) || 0);
                const soldBadge = totalSoldPos > 0
                    ? `<span class="bg-slate-100 text-slate-600 dark:bg-slate-700/60 dark:text-slate-300 border border-slate-200/80 dark:border-slate-600/50 px-1.5 py-0.5 rounded-md text-[8.5px] font-bold flex items-center gap-1 whitespace-nowrap shrink-0 uppercase tracking-wider"><i class="fa-solid fa-fire text-amber-500 text-[7.5px]"></i> ${totalSoldPos} Terjual</span>`
                    : '';

                // Badge Satuan Konsisten & Harmonis (Sky Pastel, Icon Cube)
                const unitBadge = (p.unit && typeof p.unit === 'string' && p.unit.trim())
                    ? `<span class="bg-sky-50 text-sky-700 dark:bg-sky-950/60 dark:text-sky-300 border border-sky-200/80 dark:border-sky-800/50 px-1.5 py-0.5 rounded-md text-[8.5px] font-bold flex items-center gap-1 whitespace-nowrap shrink-0 uppercase tracking-wider"><i class="fa-solid fa-cube text-sky-600 dark:text-sky-400 text-[7.5px]"></i> ${esc(p.unit.trim())}</span>`
                    : '';

                // 5. HARGA MODAL (HPP) - Khusus Owner (Badge Resmi Amber Pastel di Baris Chips)
                let hppChip = '';
                if (canViewHpp()) {
                    let hppVal = 0;
                    let hppDisplay = '';
                    if (hasVariants) {
                        const hppList = (p.variants || []).map(v => v.hpp != null ? (parseFloat(v.hpp) || 0) : (parseFloat(p.hpp) || 0)).filter(h => h > 0);
                        if (hppList.length > 0) {
                            const minH = Math.min(...hppList);
                            const maxH = Math.max(...hppList);
                            hppVal = minH;
                            hppDisplay = minH === maxH ? fRp(minH) : `${fRp(minH)} - ${fRp(maxH)}`;
                        } else if (p.hpp != null && parseFloat(p.hpp) > 0) {
                            hppVal = parseFloat(p.hpp);
                            hppDisplay = fRp(hppVal);
                        }
                    } else if (p.hpp != null && parseFloat(p.hpp) > 0) {
                        hppVal = parseFloat(p.hpp);
                        hppDisplay = fRp(hppVal);
                    }
                    if (hppDisplay || (p.hpp != null && parseFloat(p.hpp) > 0)) {
                        const finalHppText = hppDisplay || fRp(parseFloat(p.hpp));
                        hppChip = `<span class="bg-amber-50 text-amber-800 dark:bg-amber-950/60 dark:text-amber-300 border border-amber-200/90 dark:border-amber-800/60 px-1.5 py-0.5 rounded-md text-[8.5px] font-bold flex items-center gap-1 whitespace-nowrap shrink-0 uppercase tracking-wider" title="Harga Pokok Penjualan (Modal Toko)"><i class="fa-solid fa-coins text-[7.5px] text-amber-600 dark:text-amber-400"></i> Modal: ${finalHppText}</span>`;
                    }
                }

                // ── Badges Lengkap & Bersih (100% di Luar Gambar Produk, Anti-Duplikat) ──
                const allPosChips = [];
                if (discPill) allPosChips.push(discPill);
                if (stockChip) allPosChips.push(stockChip);
                if (poPill) allPosChips.push(poPill);
                if (unitBadge) allPosChips.push(unitBadge);
                if (variantBadge) allPosChips.push(variantBadge);
                if (grosirBadge) allPosChips.push(grosirBadge);
                if (poinBadge) allPosChips.push(poinBadge);
                if (soldBadge) allPosChips.push(soldBadge);
                if (hppChip) allPosChips.push(hppChip);
                const chipsHtml = allPosChips.join('');

                const coverSmHtml = renderProductCoverHtml(p, { size: 'sm' });
                const coverMdHtml = renderProductCoverHtml(p, { size: 'md' });

                if (posCatalogViewMode === 'list') {
                    // ── LIST MODE: Layout Sleek Native App 1:1 Harmonis dengan Storefront ──
                    return `
                    <div class="pos-list-item w-full bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/70 rounded-2xl shadow-xs transition-all duration-300 flex items-center p-3 sm:p-3.5 gap-3 sm:gap-4 group relative overflow-hidden text-left shrink-0${totalQtyInCart > 0 ? ' in-cart' : ''}${stockInfo.isOutOfStock ? ' is-out-of-stock cursor-not-allowed' : ' cursor-pointer'}" onclick="window.posAddToCart('${safeId}')">
                        <!-- Thumbnail Kiri (Ukuran Presisi 80px/96px Bersih Murni Anti-Gepeng) -->
                        <div class="pos-list-thumb relative w-20 h-20 sm:w-24 sm:h-24 shrink-0 bg-slate-50 dark:bg-slate-900 rounded-xl sm:rounded-2xl flex items-center justify-center border border-slate-100 dark:border-slate-700/50 overflow-hidden">
                            ${stockInfo.isOutOfStock ? `
                                <div class="absolute inset-0 bg-slate-900/70 z-20 flex items-center justify-center">
                                    <span class="bg-rose-600 text-white text-[8px] font-black px-1.5 py-0.5 rounded shadow uppercase tracking-wider flex items-center gap-0.5">
                                        <i class="fa-solid fa-ban"></i> HABIS
                                    </span>
                                </div>` : ''}
                            ${totalQtyInCart > 0 ? `<div class="pos-qty-badge" style="top:2px;right:2px;min-width:20px;height:20px;font-size:9.5px;border-width:1.5px">+${formatQty(totalQtyInCart)}</div>` : ''}
                            ${hasImg
                                ? `<img width="96" height="96" loading="lazy" decoding="async" src="${esc(imgUrl)}" alt="${pName}"
                                     class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 ${stockInfo.isOutOfStock ? 'grayscale opacity-50' : ''}"
                                     onerror="this.onerror=null;this.style.display='none';this.nextElementSibling.style.display='flex';">
                                   <div class="w-full h-full" style="display:none">${coverSmHtml}</div>`
                                : coverSmHtml}
                        </div>
                        <!-- Konten Kanan -->
                        <div class="flex-1 min-w-0 flex flex-col justify-between py-0.5 gap-1 relative z-10 pr-0.5">
                            <!-- Line 1: Eyebrow Kategori & Merek -->
                            <p class="text-[9.5px] sm:text-[10px] uppercase tracking-wider font-bold text-slate-400 dark:text-slate-500 truncate leading-none">${catBrandText}</p>
                            <!-- Line 2: Nama Produk -->
                            <h4 class="text-xs sm:text-[14px] font-bold text-slate-800 dark:text-slate-100 line-clamp-1 sm:line-clamp-2 leading-snug group-hover:text-[var(--color-primary)] transition-colors uppercase break-words" title="${pName}">${pName}</h4>
                            <!-- Line 3: Chips Badges Lengkap & Rapi (Bisa 2, 3, 4+ Baris, Anti-Terpotong) -->
                            <div class="product-chips-wrap">
                                ${chipsHtml}
                            </div>
                            <!-- Line 4: Harga & Action Button -->
                            <div class="flex items-center justify-between pt-0.5">
                                <div class="flex items-baseline gap-1.5 min-w-0">
                                    <p class="text-[var(--color-primary)] font-black text-xs sm:text-[15px] leading-none tracking-tight truncate">${displayPriceHtml}</p>
                                    ${p.unit ? `<span class="text-[9.5px] sm:text-[10px] text-slate-400 dark:text-slate-500 font-bold ml-0.5 uppercase tracking-wide">/${esc(p.unit)}</span>` : ''}
                                    ${priceNormalHtml ? `<span class="text-[10px] sm:text-[11px] text-slate-400 dark:text-slate-500 line-through leading-none font-semibold truncate">${fRp(parseFloat(p.priceNormal))}</span>` : ''}
                                </div>
                                <button type="button" class="${stockInfo.isOutOfStock ? 'btn-catalog-action btn-catalog-disabled' : totalQtyInCart > 0 ? 'btn-catalog-action btn-catalog-add ring-2 ring-[var(--color-primary)]/30' : hasVariants ? 'btn-catalog-action btn-catalog-variant' : 'btn-catalog-action btn-catalog-add'} mr-0.5 z-20" onclick="event.stopPropagation();window.posAddToCart('${safeId}')" title="${stockInfo.isOutOfStock ? 'Stok Habis' : totalQtyInCart > 0 ? 'Tambah lagi (+1)' : hasVariants ? 'Pilih Varian' : 'Tambah ke Keranjang'}">
                                    ${stockInfo.isOutOfStock ? '<i class="fa-solid fa-ban text-xs"></i>' : totalQtyInCart > 0 ? `<b class="text-xs font-black">+${formatQty(totalQtyInCart)}</b>` : hasVariants ? '<i class="fa-solid fa-layer-group text-[12.5px] font-bold leading-none drop-shadow-2xs"></i>' : '<i class="fa-solid fa-plus text-[13px] font-black leading-none drop-shadow-2xs"></i>'}
                                </button>
                            </div>
                        </div>
                    </div>`;
                }

                // ── GRID MODE (Default): Bento Native App 1:1 Harmonis dengan Storefront ──
                return `
                <div class="pos-product-card w-full bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/70 rounded-2xl shadow-xs transition-all duration-300 flex flex-col group relative overflow-hidden text-left${totalQtyInCart > 0 ? ' in-cart' : ''}${stockInfo.isOutOfStock ? ' is-out-of-stock cursor-not-allowed' : ' cursor-pointer'}" onclick="window.posAddToCart('${safeId}')">
                    <!-- Kotak Gambar Rasio 1:1 Flush Cover Bersih Murni (Tanpa Badge Menutupi Gambar) -->
                    <div class="pos-img-box relative aspect-square w-full bg-slate-50 dark:bg-slate-900/80 flex items-center justify-center shrink-0 border-b border-slate-100 dark:border-slate-700/50 overflow-hidden">
                        ${stockInfo.isOutOfStock ? `
                            <div class="absolute inset-0 bg-slate-900/70 z-20 flex items-center justify-center">
                                <span class="bg-rose-600 text-white text-[9px] font-black px-2.5 py-1 rounded-lg shadow-md uppercase tracking-wider flex items-center gap-1">
                                    <i class="fa-solid fa-ban"></i> HABIS
                                </span>
                            </div>` : ''}
                        ${totalQtyInCart > 0 ? `<div class="pos-qty-badge">+${formatQty(totalQtyInCart)}</div>` : ''}
                        ${hasImg
                            ? `<img width="300" height="300" loading="lazy" decoding="async" src="${esc(imgUrl)}" alt="${pName}"
                                 class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 ${stockInfo.isOutOfStock ? 'grayscale opacity-50' : ''}"
                                 onerror="this.onerror=null;this.style.display='none';this.nextElementSibling.style.display='flex';">
                               <div class="w-full h-full" style="display:none">${coverMdHtml}</div>`
                            : coverMdHtml}
                    </div>
                    <!-- Info Produk Rapi & Lega -->
                    <div class="pos-card-info flex-1 flex flex-col p-3 sm:p-3.5 min-w-0 bg-white dark:bg-slate-800 relative z-10">
                        <p class="pos-card-cat text-[9.5px] sm:text-[10px] uppercase tracking-wider font-bold text-slate-400 dark:text-slate-500 truncate leading-none mb-1.5">${catBrandText}</p>
                        <h4 class="pos-card-name text-xs sm:text-[13px] font-bold text-slate-800 dark:text-slate-100 line-clamp-2 leading-snug min-h-[2.3rem] sm:min-h-[2.5rem] mb-1.5 group-hover:text-[var(--color-primary)] transition-colors uppercase break-words" title="${pName}">${pName}</h4>
                        <!-- Baris Chip Operasional Lengkap (Bisa 2, 3, 4+ Baris Mengalir, Anti-Terpotong) -->
                        <div class="product-chips-wrap">
                            ${chipsHtml}
                        </div>
                        <!-- Footer Harga & Tombol Aksi POS (Anti-Potong) -->
                        <div class="pos-card-footer flex items-end justify-between mt-auto pt-1.5 border-t border-slate-100 dark:border-slate-700/50 shrink-0 gap-2">
                            <div class="min-w-0 pr-1 flex-1">
                                <div class="h-3.5 flex items-center mb-0.5">
                                    ${priceNormalHtml}
                                </div>
                                <div class="flex items-baseline gap-0.5">
                                    <p class="pos-card-price text-[var(--color-primary)] font-black text-xs sm:text-[14px] lg:text-[15px] leading-tight tracking-tight break-words">${displayPriceHtml}</p>
                                    ${p.unit ? `<span class="text-[9.5px] sm:text-[10px] text-slate-400 dark:text-slate-500 font-bold ml-0.5 mb-0.5 uppercase tracking-wide">/${esc(p.unit)}</span>` : ''}
                                </div>
                            </div>
                            <button type="button" class="${stockInfo.isOutOfStock ? 'btn-catalog-action btn-catalog-disabled' : totalQtyInCart > 0 ? 'btn-catalog-action btn-catalog-add ring-2 ring-[var(--color-primary)]/30' : hasVariants ? 'btn-catalog-action btn-catalog-variant' : 'btn-catalog-action btn-catalog-add'} z-20" onclick="event.stopPropagation();window.posAddToCart('${safeId}')" title="${stockInfo.isOutOfStock ? 'Stok Habis' : totalQtyInCart > 0 ? 'Tambah lagi (+1)' : hasVariants ? 'Pilih Varian' : 'Tambah ke Keranjang'}" aria-label="${pName}">
                                ${stockInfo.isOutOfStock ? '<i class="fa-solid fa-ban text-xs"></i>' : totalQtyInCart > 0 ? `<b class="text-xs font-black">+${formatQty(totalQtyInCart)}</b>` : hasVariants ? '<i class="fa-solid fa-layer-group text-[12.5px] font-bold leading-none drop-shadow-2xs"></i>' : '<i class="fa-solid fa-plus text-[13px] font-black leading-none drop-shadow-2xs"></i>'}
                            </button>
                        </div>
                    </div>
                </div>`;
            }).join('');

        if (products.length > 0 && hasMore) {
            prodHTML += `
            <div class="col-span-full py-4 flex flex-col items-center justify-center gap-2">
                <button type="button" onclick="window.posLoadMoreProducts()" class="px-6 py-2.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-700 dark:text-slate-200 hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition-all shadow-2xs active:scale-95 flex items-center gap-2 cursor-pointer group">
                    <i class="fa-solid fa-layer-group text-[var(--color-primary)] group-hover:scale-110 transition-transform"></i>
                    <span>Tampilkan Lebih Banyak (${products.length - visibleProducts.length} lagi)</span>
                </button>
                <span class="text-[10px] text-slate-400 dark:text-slate-500 font-medium">Menampilkan ${visibleProducts.length} dari ${products.length} produk</span>
            </div>`;
        }

        document.querySelectorAll('#pos-cat-filter').forEach(catEl => {
            catEl.innerHTML = catHTML;
        });
        document.querySelectorAll('#pos-subcat-filter').forEach(subEl => {
            subEl.innerHTML = subCatHTML;
            if (!subCatHTML) subEl.classList.add('hidden');
            else subEl.classList.remove('hidden');
        });
        document.querySelectorAll('#pos-catalog-grid').forEach(gridEl => {
            gridEl.className = posCatalogViewMode === 'list' ? 'pos-catalog-list-mode' : 'pos-catalog-grid-mode';
            gridEl.innerHTML = prodHTML;
        });
    } catch (err) {
        console.error('[POS] renderCatalog error:', err);
        document.querySelectorAll('#pos-catalog-grid').forEach(gridEl => {
            gridEl.innerHTML = `
                <div class="col-span-full flex flex-col items-center justify-center py-16 text-slate-500">
                    <i class="fa-solid fa-triangle-exclamation text-amber-500 text-3xl mb-3"></i>
                    <p class="font-bold text-sm text-slate-700 dark:text-slate-300">Gagal Memuat Katalog Kasir</p>
                    <p class="text-xs text-slate-400 mt-1 mb-4">${esc(err.message || 'Terjadi kesalahan')}</p>
                    <button onclick="if(typeof window.posRenderCatalog==='function') window.posRenderCatalog(); else if(typeof window.refreshPOSCatalog==='function') window.refreshPOSCatalog();" class="px-4 py-2 rounded-xl text-xs font-bold text-white shadow-md active:scale-95 cursor-pointer" style="background:var(--color-primary)">
                        <i class="fa-solid fa-arrows-rotate mr-1.5"></i> Coba Muat Ulang
                    </button>
                </div>`;
        });
    }
};

// ─── Render Cart ─────────────────────────────────────────────
const renderCart = () => {
    const totalQty = parseFloat(posCart.reduce((s, i) => s + (parseFloat(i.qty) || 0), 0).toFixed(3));
    const subtotal = posSubtotal();
    const total    = posTotal();
    const formattedTotal = fRp(total);
    const formattedSub   = fRp(subtotal);

    const itemsHTML = posCart.length === 0
        ? `<div class="flex flex-col items-center justify-center h-full py-12 text-slate-300 dark:text-slate-600 select-none">
            <div class="w-16 h-16 rounded-3xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-400 mb-3 shadow-inner">
                <i class="fa-solid fa-cart-shopping text-2xl"></i>
            </div>
            <p class="text-sm font-bold text-slate-600 dark:text-slate-400">Keranjang Kasir Kosong</p>
            <p class="text-xs text-slate-400 mt-1 text-center max-w-[200px]">Pilih produk di katalog atau scan barcode untuk menambah</p>
           </div>`
        : posCart.map(item => {
            const ckey = esc(String(item.cartKey || item.id));
            const img = getItemImg(item);
            const baseName = item.isVariant && item.variantName ? esc(item.name.replace(` — ${item.variantName}`, '')) : esc(item.name);
            const itemHpp = item.hpp != null ? parseFloat(item.hpp) : (getEffHpp(item) || 0);
            const maxItemDisc = itemHpp > 0 ? Math.max(0, Math.round((item.price - itemHpp) * item.qty)) : Math.round(item.price * item.qty);
            const itemMargin = itemHpp > 0 ? Math.round(item.subtotal - (itemHpp * item.qty)) : 0;
            const coverThumbHtml = renderProductCoverHtml(item, { size: 'thumb' });
            const hasItemDisc = (parseFloat(item.discount) || 0) > 0;
            const isDiscOpen = posOpenItemDiscKeys.has(String(item.cartKey || item.id)) || hasItemDisc;

            return `
            <div class="group flex items-start gap-2.5 p-2 sm:p-2.5 bg-white dark:bg-slate-800/90 rounded-2xl border border-slate-200/90 dark:border-slate-700/80 shadow-xs hover:border-[var(--color-primary)] transition-all">
                <!-- 44px Thumbnail -->
                <div class="w-10 h-10 sm:w-11 sm:h-11 rounded-xl overflow-hidden shrink-0 border border-slate-200/60 dark:border-slate-700 flex items-center justify-center bg-slate-50 dark:bg-slate-800">
                    ${img 
                        ? `<img width="44" height="44" loading="lazy" src="${esc(img)}" alt="${esc(item.name)}" onerror="this.onerror=null; this.style.display='none'; this.nextElementSibling.style.display='flex';" class="w-full h-full object-cover">
                           <div class="w-full h-full" style="display:none">${coverThumbHtml}</div>`
                        : coverThumbHtml}
                </div>
                <!-- Details -->
                <div class="flex-1 min-w-0 pr-1">
                    <p class="text-xs font-bold text-slate-800 dark:text-slate-100 truncate leading-snug" title="${esc(item.name)}">${baseName}</p>
                    <div class="flex items-center gap-1.5 mt-0.5 flex-wrap">
                        ${item.isWholesale ? `<span class="inline-flex items-center text-[8px] font-black px-1.5 py-0.5 rounded text-white shadow-2xs" style="background:var(--color-primary)">GROSIR</span>` : ''}
                        ${item.isVariant ? `<span class="inline-flex items-center gap-1 text-[8px] font-black px-1.5 py-0.5 rounded text-white shadow-2xs" style="background:var(--color-primary);opacity:0.95"><i class="fa-solid fa-layer-group text-[7px]"></i>${esc(item.variantName || 'VARIAN')}</span>` : ''}
                        ${item.poTime ? `<span class="inline-flex items-center gap-1 text-[8px] font-bold px-1.5 py-0.5 rounded text-amber-700 bg-amber-100 dark:bg-amber-900/30 dark:text-amber-300 border border-amber-200 dark:border-amber-800 shadow-2xs uppercase tracking-wide"><i class="fa-solid fa-clock text-[7px]"></i> PO ${esc(item.poTime)}</span>` : ''}
                        ${canViewHpp() && itemHpp > 0 ? `<span class="inline-flex items-center gap-1 text-[8px] font-black px-1.5 py-0.5 rounded text-amber-950 bg-amber-100 dark:bg-amber-950/60 dark:text-amber-300 border border-amber-300/80 dark:border-amber-700 shadow-2xs" title="Harga Modal (HPP)"><i class="fa-solid fa-coins text-[7px] text-amber-600 dark:text-amber-400"></i>HPP: ${fRp(itemHpp)}</span>` : ''}
                        <span class="text-[10px] text-slate-500 font-medium">
                            ${item.isWholesale && item.basePrice ? `<span class="line-through text-slate-400">${fRp(item.basePrice)}</span> <span class="font-bold" style="color:var(--color-primary)">${fRp(item.price)}</span>` : fRp(item.price)}
                        </span>
                    </div>

                    <!-- Smart Item Discount Toggle / Input (Ramping & Bebas Sesak) -->
                    ${isDiscOpen ? `
                        <div class="flex items-center gap-1.5 mt-1.5 flex-wrap">
                            <span class="text-[9px] text-slate-400 font-bold uppercase tracking-wider">Diskon:</span>
                            <input type="number" min="0" ${itemHpp > 0 ? `max="${maxItemDisc}"` : ''} placeholder="0" value="${item.discount || ''}" onchange="window.posSetItemDisc('${ckey}',this.value)"
                                class="w-16 text-[10px] font-mono font-bold border border-slate-200 dark:border-slate-700 rounded-md px-1.5 py-0.5 bg-slate-50 dark:bg-slate-700/60 text-right focus:outline-none focus:border-[var(--color-primary)] transition-all">
                            ${canViewHpp() && itemHpp > 0 ? `<span class="text-[9px] text-amber-600 dark:text-amber-400 font-bold whitespace-nowrap" title="Maksimal diskon">(Maks: ${fRp(maxItemDisc)})</span>` : ''}
                            ${!hasItemDisc ? `<button type="button" onclick="window.togglePOSItemDiscInput('${ckey}')" class="text-[9px] text-slate-400 hover:text-rose-500 ml-0.5 cursor-pointer" title="Tutup input diskon"><i class="fa-solid fa-xmark"></i></button>` : ''}
                        </div>` : `
                        <div class="flex items-center gap-2 mt-1">
                            <button type="button" onclick="window.togglePOSItemDiscInput('${ckey}')" class="pos-item-disc-btn" title="Beri diskon khusus per item">
                                <i class="fa-solid fa-tag text-[8px]"></i> +Diskon
                            </button>
                        </div>`}
                </div>
                <!-- Stepper & Subtotal -->
                <div class="flex flex-col items-end shrink-0">
                    <div class="flex items-center gap-1">
                        <div class="flex items-center bg-slate-100 dark:bg-slate-700/80 rounded-lg p-0.5 border border-slate-200 dark:border-slate-600 focus-within:border-[var(--color-primary)] transition-colors">
                            <button onclick="window.posUpdateQty('${ckey}',-1)" class="w-5 h-5 rounded text-slate-600 dark:text-slate-200 hover:bg-white dark:hover:bg-slate-600 font-black text-xs flex items-center justify-center cursor-pointer active:scale-90 transition-all">−</button>
                            <input type="number" step="any" min="0.01" value="${formatQty(item.qty)}" onchange="window.posSetQty('${ckey}',this.value)"
                                class="w-11 text-center text-[11px] font-black bg-transparent text-slate-800 dark:text-slate-100 focus:outline-none px-0.5">
                            <button onclick="window.posUpdateQty('${ckey}',1)" class="w-5 h-5 rounded text-slate-600 dark:text-slate-200 hover:bg-white dark:hover:bg-slate-600 font-black text-xs flex items-center justify-center cursor-pointer active:scale-90 transition-all">+</button>
                        </div>
                        <button onclick="window.posRemoveItem('${ckey}')" class="w-6 h-6 rounded-lg text-slate-400 hover:text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-950/30 flex items-center justify-center text-xs transition-all cursor-pointer" title="Hapus item">
                            <i class="fa-solid fa-trash-can"></i>
                        </button>
                    </div>
                    <div class="flex items-baseline gap-1 mt-1.5">
                        ${hasItemDisc ? `<span class="line-through text-[10px] text-slate-400">${fRp(item.price * item.qty)}</span>` : ''}
                        <p class="text-xs font-black" style="color:var(--color-primary)">${fRp(item.subtotal)}</p>
                    </div>
                    ${canViewHpp() && itemHpp > 0 ? `<p class="text-[9px] font-bold ${itemMargin >= 0 ? 'text-emerald-600 dark:text-emerald-400' : 'text-rose-500'} mt-0.5" title="Estimasi laba kotor item ini"><i class="fa-solid fa-arrow-trend-up text-[8px] mr-0.5"></i>Untung: ${fRp(itemMargin)}</p>` : ''}
                </div>
            </div>`;
        }).join('');

    // Update semua target DOM tersinkronisasi
    document.querySelectorAll('.pos-cart-items-target').forEach(e => e.innerHTML = itemsHTML);
    document.querySelectorAll('.pos-subtotal-target').forEach(e => e.textContent = formattedSub);
    document.querySelectorAll('.pos-total-target').forEach(e => e.textContent = formattedTotal);
    document.querySelectorAll('.pos-item-count-target').forEach(e => e.textContent = formatQty(totalQty));

    const showHpp = canViewHpp();
    const totalCartHpp = showHpp ? getCartTotalHpp() : 0;
    const formattedTotalHpp = fRp(totalCartHpp);
    const totalMargin = showHpp ? Math.max(0, total - totalCartHpp) : 0;
    const formattedTotalMargin = fRp(totalMargin);

    document.querySelectorAll('.pos-total-hpp-target').forEach(e => e.textContent = formattedTotalHpp);
    document.querySelectorAll('.pos-total-margin-target').forEach(e => e.textContent = formattedTotalMargin);

    // Sembunyikan baris Total Modal HPP & Estimasi Laba jika bukan Owner
    document.querySelectorAll('.pos-hpp-margin-row').forEach(row => {
        row.style.display = showHpp ? 'flex' : 'none';
    });

    // Toggle visibilitas breakdown ringkasan (hanya tampil jika keranjang terisi)
    const hasItems = posCart.length > 0;
    document.querySelectorAll('.pos-cart-breakdown').forEach(el => {
        el.style.display = hasItems ? 'block' : 'none';
    });

    // Sinkronisasi Baris Pajak PPN & DPP di Keranjang Kasir
    const cartTax = posTaxInfo();
    const hasCartTax = cartTax && (cartTax.ppnEnabled || (cartTax.ppnAmount && cartTax.ppnAmount > 0) || (cartTax.ppnRate > 0 && (appData.store?.ppnEnabled === true || appData.store?.ppnEnabled === 'true')));
    const isCartTaxInc = cartTax?.ppnType === 'inclusive';
    const cartTaxAmt = cartTax?.ppnAmount || 0;
    const cartTaxRate = cartTax?.ppnRate || 0;
    const cartTaxLbl = cartTax?.ppnLabel || `${isCartTaxInc ? 'Inc. PPN' : 'PPN'} (${cartTaxRate}%)`;
    const formattedCartTaxAmt = cartTaxAmt > 0 ? `${isCartTaxInc ? '' : '+'}${fRp(cartTaxAmt)}` : 'Rp 0';

    document.querySelectorAll('.pos-tax-breakdown-row').forEach(row => {
        row.style.display = (hasItems && hasCartTax) ? 'flex' : 'none';
    });
    document.querySelectorAll('.pos-tax-label-target').forEach(e => {
        e.textContent = cartTaxLbl;
    });
    document.querySelectorAll('.pos-tax-amt-target').forEach(e => {
        e.textContent = formattedCartTaxAmt;
    });

    const discAmt = posDiscountAmount();
    const formattedDiscAmt = fRp(discAmt);

    // Sync input diskon dan toggle tipe diskon
    document.querySelectorAll('.pos-disc-val-input').forEach(e => {
        if (document.activeElement !== e) e.value = posDiscountVal || '';
    });
    document.querySelectorAll('.pos-global-disc-target').forEach(e => {
        if (document.activeElement !== e) e.value = posDiscountVal || '';
    });
    document.querySelectorAll('.pos-disc-preview-target').forEach(e => {
        if (discAmt > 0) {
            e.textContent = `- ${formattedDiscAmt}`;
            e.classList.remove('hidden');
            e.classList.add('text-rose-500');
        } else {
            e.textContent = '';
            e.classList.add('hidden');
        }
    });
    document.querySelectorAll('.pos-disc-type-rp').forEach(btn => {
        if (posDiscountType === 'rp') {
            btn.className = 'pos-disc-type-rp px-2.5 py-0.5 rounded-md transition-all cursor-pointer font-black text-white shadow-xs text-[10px]';
            btn.style.background = 'var(--color-primary)';
            btn.style.color = '#ffffff';
        } else {
            btn.className = 'pos-disc-type-rp px-2.5 py-0.5 rounded-md transition-all cursor-pointer text-slate-600 dark:text-slate-300 hover:text-slate-900 font-bold text-[10px]';
            btn.style.background = 'transparent';
            btn.style.color = '';
        }
    });
    document.querySelectorAll('.pos-disc-type-pct').forEach(btn => {
        if (posDiscountType === 'percent') {
            btn.className = 'pos-disc-type-pct px-2.5 py-0.5 rounded-md transition-all cursor-pointer font-black text-white shadow-xs text-[10px]';
            btn.style.background = 'var(--color-primary)';
            btn.style.color = '#ffffff';
        } else {
            btn.className = 'pos-disc-type-pct px-2.5 py-0.5 rounded-md transition-all cursor-pointer text-slate-600 dark:text-slate-300 hover:text-slate-900 font-bold text-[10px]';
            btn.style.background = 'transparent';
            btn.style.color = '';
        }
    });
    document.querySelectorAll('.pos-disc-prefix').forEach(el => {
        el.textContent = posDiscountType === 'percent' ? '%' : 'Rp';
        el.style.color = 'var(--color-primary)';
    });

    // Render preset chips dengan harmonisasi tema & active state indicator
    const percentChips = [5, 10, 15, 20, 50];
    const rpChips      = [2000, 5000, 10000, 25000, 50000];

    const isChipActive = (val, type) => posDiscountType === type && Number(posDiscountVal) === Number(val);

    const chipsHTML = posDiscountType === 'percent'
        ? `
        ${percentChips.map(pct => {
            const active = isChipActive(pct, 'percent');
            return `<button onclick="window.posApplyQuickDiscount(${pct},'percent')" 
                class="px-2.5 py-1 rounded-lg text-[10px] cursor-pointer transition-all active:scale-95 ${active ? 'text-white shadow-xs font-black' : 'bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-slate-700 font-bold'}"
                style="${active ? 'background:var(--color-primary);border:1px solid var(--color-primary);' : ''}">${pct}%</button>`;
        }).join('')}
        ${posDiscountVal > 0 ? `<button onclick="window.posApplyQuickDiscount(0,'percent')" class="px-2.5 py-1 rounded-lg bg-rose-50 hover:bg-rose-100 dark:bg-rose-950/40 text-[10px] font-bold text-rose-600 dark:text-rose-400 border border-rose-200 dark:border-rose-800 cursor-pointer transition-all active:scale-95"><i class="fa-solid fa-rotate-left mr-1 text-[9px]"></i>Reset</button>` : ''}
        `
        : `
        ${rpChips.map(rp => {
            const active = isChipActive(rp, 'rp');
            const label = `${rp / 1000}rb`;
            return `<button onclick="window.posApplyQuickDiscount(${rp},'rp')" 
                class="px-2.5 py-1 rounded-lg text-[10px] cursor-pointer transition-all active:scale-95 ${active ? 'text-white shadow-xs font-black' : 'bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-slate-700 font-bold'}"
                style="${active ? 'background:var(--color-primary);border:1px solid var(--color-primary);' : ''}">${label}</button>`;
        }).join('')}
        ${posDiscountVal > 0 ? `<button onclick="window.posApplyQuickDiscount(0,'rp')" class="px-2.5 py-1 rounded-lg bg-rose-50 hover:bg-rose-100 dark:bg-rose-950/40 text-[10px] font-bold text-rose-600 dark:text-rose-400 border border-rose-200 dark:border-rose-800 cursor-pointer transition-all active:scale-95"><i class="fa-solid fa-rotate-left mr-1 text-[9px]"></i>Reset</button>` : ''}
        `;
    document.querySelectorAll('.pos-disc-chips-target').forEach(e => e.innerHTML = chipsHTML);

    document.querySelectorAll('.pos-pay-btn-target').forEach(btn => {
        btn.disabled = posCart.length === 0;
        const textSpan = btn.querySelector('.btn-text');
        if (textSpan) {
            textSpan.textContent = posCart.length > 0 ? `BAYAR — ${formattedTotal}` : `PROSES PEMBAYARAN`;
        }
    });

    // Perbarui status tombol Tahan Transaksi
    document.querySelectorAll('.pos-hold-btn-target').forEach(btn => {
        btn.disabled = posCart.length === 0;
        if (posCart.length === 0) {
            btn.classList.add('opacity-40', 'cursor-not-allowed');
        } else {
            btn.classList.remove('opacity-40', 'cursor-not-allowed');
        }
    });
    renderHeldBadges();

    // Kontrol visibilitas Floating Cart Bar di Layar HP
    const floatBar = el('pos-mobile-floating-bar');
    if (floatBar) {
        if (posCart.length > 0) {
            floatBar.classList.remove('translate-y-32', 'opacity-0', 'pointer-events-none');
            floatBar.classList.add('translate-y-0', 'opacity-100');
        } else {
            floatBar.classList.add('translate-y-32', 'opacity-0', 'pointer-events-none');
            floatBar.classList.remove('translate-y-0', 'opacity-100');
            closePOSCartDrawer(true);
        }
    }
};

// ─── Modal Bayar ─────────────────────────────────────────────
export const openPayModal = () => {
    if (posCart.length === 0) { showToast('Keranjang masih kosong!', 'warning'); return; }
    const totalCartHpp = getCartTotalHpp();
    if (totalCartHpp > 0 && posTotal() < totalCartHpp) {
        const msg = canViewHpp()
            ? `Transaksi ditolak! Total tagihan (${fRp(posTotal())}) tidak boleh di bawah harga modal HPP (${fRp(totalCartHpp)})!`
            : 'Transaksi ditolak! Total transaksi melebihi batas diskon maksimum yang diizinkan sistem.';
        showToast(msg, 'error');
        if (typeof window.triggerHaptic === 'function') window.triggerHaptic('heavy');
        return;
    }
    if (typeof window.pushModalHistory === 'function') window.pushModalHistory('posPayment');
    posCustomer   = { name: '', phone: '', isMember: false, memberId: null, isNewTempo: false };
    posPointsRedeemed = 0;
    posClaimedReward  = null;
    posPayMethod  = 'cash';
    posPaidAmount = posTotal(); // default: uang pas
    ensureCustomersLoaded(); // Prefetch member di background agar lookup instan
    ensureBanksLoaded(); // Prefetch data rekening toko di background

    document.body.insertAdjacentHTML('beforeend', `
    <div id="pos-pay-modal" class="fixed inset-0 z-[9999] flex items-end sm:items-center justify-center p-0 sm:p-4" style="background:rgba(15,23,42,0.75)">
      <div class="bg-white dark:bg-slate-900 rounded-t-3xl sm:rounded-3xl shadow-2xl w-full sm:max-w-md max-h-[94vh] flex flex-col overflow-hidden border border-slate-200/80 dark:border-slate-800">
        <!-- Header -->
        <div class="p-4 sm:p-5 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center shrink-0 bg-slate-50/60 dark:bg-slate-800/40">
          <div>
            <h2 class="font-black text-base text-slate-900 dark:text-white flex items-center gap-2">
              <i class="fa-solid fa-cash-register" style="color:var(--color-primary)"></i>
              <span>Proses Pembayaran Kasir</span>
            </h2>
            <div class="flex items-center gap-2 mt-0.5 flex-wrap">
              <span class="text-xs text-slate-500">Total Tagihan: <span class="font-black text-sm" style="color:var(--color-primary)">${fRp(posTotal())}</span></span>
              ${canViewHpp() && totalCartHpp > 0 ? `<span class="inline-flex items-center gap-1 text-[10px] font-bold text-amber-950 bg-amber-100 dark:bg-amber-950/60 dark:text-amber-300 px-2 py-0.5 rounded-full border border-amber-300/80 dark:border-amber-700 shadow-2xs"><i class="fa-solid fa-coins text-[8px] text-amber-600 dark:text-amber-400"></i>HPP: ${fRp(totalCartHpp)}</span>` : ''}
            </div>
          </div>
          <button onclick="window.closePayModal()" class="w-9 h-9 rounded-xl bg-slate-200/60 dark:bg-slate-700/60 text-slate-500 hover:text-slate-800 dark:hover:text-white text-lg flex items-center justify-center transition-all leading-none cursor-pointer">×</button>
        </div>

        <!-- Body Scrollable -->
        <div class="p-4 sm:p-5 space-y-4 overflow-y-auto flex-1">
          <!-- Pilih Pelanggan -->
          <div>
            <label class="text-[10px] font-black uppercase tracking-wider text-slate-400 mb-1.5 block">Tipe Pelanggan</label>
            <div class="grid grid-cols-3 gap-2 mb-2.5">
              <button onclick="window.setPosCustomerType('umum')" id="pos-ctype-umum" type="button" class="flex flex-col items-center justify-center text-center py-2.5 px-2 rounded-xl text-[10px] font-black uppercase border transition-all cursor-pointer shadow-xs" style="background:var(--color-primary);color:white;border-color:var(--color-primary)"><i class="fa-solid fa-user text-base leading-none mb-1 text-center"></i><span>Umum</span></button>
              <button onclick="window.setPosCustomerType('member')" id="pos-ctype-member" type="button" class="flex flex-col items-center justify-center text-center py-2.5 px-2 rounded-xl text-[10px] font-black uppercase border border-slate-200 dark:border-slate-700 text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 transition-all cursor-pointer"><i class="fa-solid fa-id-card text-base leading-none mb-1 text-center"></i><span>Member</span></button>
              <button onclick="window.setPosCustomerType('tempo')" id="pos-ctype-tempo" type="button" class="flex flex-col items-center justify-center text-center py-2.5 px-2 rounded-xl text-[10px] font-black uppercase border border-slate-200 dark:border-slate-700 text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 transition-all cursor-pointer"><i class="fa-solid fa-hourglass-half text-base leading-none mb-1 text-center"></i><span>Tempo</span></button>
            </div>
            <div id="pos-customer-fields">
              <input id="pos-cust-name" type="text" placeholder="Nama pembeli (opsional)" class="w-full border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2 text-xs bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-slate-100 focus:outline-none focus:border-[var(--color-primary)] focus:bg-white">
            </div>
          </div>

          <!-- Metode Bayar -->
          <div>
            <label class="text-[10px] font-black uppercase tracking-wider text-slate-400 mb-1.5 block">Metode Pembayaran</label>
            <div class="grid grid-cols-4 gap-1.5 mb-3">
              <button onclick="window.setPosPayMethod('cash')" id="pos-pay-cash" type="button" class="flex flex-col items-center justify-center text-center py-2 px-1 rounded-xl text-[9px] font-black uppercase border transition-all cursor-pointer shadow-xs" style="background:var(--color-primary);color:white;border-color:var(--color-primary)"><i class="fa-solid fa-money-bill-wave text-base leading-none mb-1 text-center"></i><span>Tunai</span></button>
              <button onclick="window.setPosPayMethod('qris')" id="pos-pay-qris" type="button" class="flex flex-col items-center justify-center text-center py-2 px-1 rounded-xl text-[9px] font-black uppercase border border-slate-200 dark:border-slate-700 text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 transition-all cursor-pointer"><i class="fa-solid fa-qrcode text-base leading-none mb-1 text-center"></i><span>QRIS</span></button>
              <button onclick="window.setPosPayMethod('transfer')" id="pos-pay-transfer" type="button" class="flex flex-col items-center justify-center text-center py-2 px-1 rounded-xl text-[9px] font-black uppercase border border-slate-200 dark:border-slate-700 text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 transition-all cursor-pointer"><i class="fa-solid fa-building-columns text-base leading-none mb-1 text-center"></i><span>Bank</span></button>
              <button onclick="window.setPosPayMethod('tempo')" id="pos-pay-tempo" type="button" class="flex flex-col items-center justify-center text-center py-2 px-1 rounded-xl text-[9px] font-black uppercase border border-slate-200 dark:border-slate-700 text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 transition-all cursor-pointer"><i class="fa-solid fa-hourglass-half text-base leading-none mb-1 text-center"></i><span>Tempo</span></button>
            </div>
            <div id="pos-pay-detail"></div>
          </div>
        </div>

        <!-- Footer -->
        <div class="p-4 border-t border-slate-100 dark:border-slate-800 flex gap-2.5 shrink-0 bg-slate-50/60 dark:bg-slate-800/40">
          <button onclick="window.closePayModal()" class="w-1/3 py-3 rounded-2xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 font-bold text-xs hover:bg-slate-100 dark:hover:bg-slate-800 transition-all cursor-pointer">Batal</button>
          <button onclick="window.processPOSTx()" id="pos-process-btn" class="w-2/3 py-3 rounded-2xl text-white font-black text-xs sm:text-sm shadow-xl active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer hover:brightness-105" style="background:linear-gradient(135deg, var(--color-primary-light,#e1b858) 0%, var(--color-primary,#c59b27) 50%, var(--color-primary-dark,#a87f1b) 100%);box-shadow:0 4px 14px rgba(var(--color-primary-rgb),0.35)">
            <i class="fa-solid fa-check-circle"></i>
            <span>Selesaikan Transaksi</span>
          </button>
        </div>
      </div>
    </div>`);

    renderPayDetail('cash');
};

export const closePayModal = (skipHistory = false) => {
    const m = el('pos-pay-modal');
    if (m) {
        if (!skipHistory && typeof window.requestCloseModal === 'function') {
            window.requestCloseModal('posPayment', false, () => m.remove());
        } else {
            m.remove();
        }
    }
};

const setActiveBtn = (prefix, active, list) => {
    list.forEach(k => {
        const b = el(`${prefix}-${k}`);
        if (!b) return;
        if (k === active) {
            b.style.background = 'var(--color-primary)';
            b.style.color = 'white';
            b.style.borderColor = 'var(--color-primary)';
            b.classList.add('shadow-xs');
        } else {
            b.style.removeProperty('background');
            b.style.removeProperty('color');
            b.style.removeProperty('border-color');
            b.classList.remove('shadow-xs');
        }
    });
};

const renderPayDetail = (method) => {
    const d = el('pos-pay-detail');
    if (!d) return;
    const total  = posTotal();
    const totalCartHpp = getCartTotalHpp();
    const estMargin = Math.max(0, total - totalCartHpp);
    const ptDisc = posMemberPointsDiscount();
    const tax = posTaxInfo();
    const hasTax = tax && (tax.ppnEnabled || (tax.ppnAmount && tax.ppnAmount > 0) || (tax.ppnRate > 0 && (appData.store?.ppnEnabled === true || appData.store?.ppnEnabled === 'true')));
    const isInc = tax?.ppnType === 'inclusive';
    const taxAmt = tax?.ppnAmount || 0;
    const taxRate = tax?.ppnRate || 0;
    const taxLbl = tax?.ppnLabel || `${isInc ? 'Termasuk PPN' : 'PPN'} (${taxRate}%)`;
    const dppVal = tax?.dppAmount !== undefined ? tax.dppAmount : Math.max(0, posSubtotal() - posDiscountAmount() - ptDisc);

    const topRow = `
      <div class="p-3 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-100 dark:border-slate-700/60 mb-2.5 text-xs space-y-1.5">
        <div class="flex justify-between items-center">
          <span class="text-slate-500 font-medium">Subtotal Belanja</span>
          <span class="font-bold font-mono text-xs">${fRp(posSubtotal())}</span>
        </div>
        ${posDiscountAmount() > 0 ? `
        <div class="flex justify-between items-center text-rose-500 text-[11px]">
          <span>Diskon Toko</span>
          <span class="font-bold font-mono">- ${fRp(posDiscountAmount())}</span>
        </div>` : ''}
        ${ptDisc > 0 ? `
        <div class="flex justify-between items-center text-emerald-600 dark:text-emerald-400 text-[11px]">
          <span class="flex items-center gap-1 font-bold"><i class="fa-solid fa-tags"></i> Diskon Poin (${posPointsRedeemed} Pts)</span>
          <span class="font-black font-mono">- ${fRp(ptDisc)}</span>
        </div>` : ''}
        ${posClaimedReward ? `
        <div class="flex justify-between items-center text-purple-600 dark:text-purple-400 text-[11px]">
          <span class="flex items-center gap-1 font-bold"><i class="fa-solid fa-gift"></i> Klaim Hadiah</span>
          <span class="font-bold truncate max-w-[170px]">${esc(posClaimedReward.name)} (-${posClaimedReward.pointsCost} Pts)</span>
        </div>` : ''}
        ${hasTax ? `
        <div class="flex justify-between items-center text-slate-500 text-[11px]">
          <span>DPP</span>
          <span class="font-bold font-mono">${fRp(dppVal)}</span>
        </div>
        <div class="flex justify-between items-center text-amber-600 dark:text-amber-400 text-[11px] font-bold">
          <span>${esc(taxLbl)}</span>
          <span class="font-black font-mono">${taxAmt > 0 ? (isInc ? '' : '+') + fRp(taxAmt) : 'Rp 0'}</span>
        </div>` : ''}
        <div class="flex justify-between items-center pt-1.5 border-t border-slate-200/60 dark:border-slate-700/60">
          <span class="text-slate-700 dark:text-slate-200 font-bold">Total Wajib Bayar</span>
          <span class="font-black text-sm" style="color:var(--color-primary)">${fRp(total)}</span>
        </div>
        ${canViewHpp() && totalCartHpp > 0 ? `
        <div class="flex justify-between items-center pt-1 border-t border-slate-200/40 dark:border-slate-700/40 text-[10px]">
          <span class="text-slate-400 font-semibold flex items-center gap-1"><i class="fa-solid fa-coins text-amber-500"></i> Total Modal (HPP):</span>
          <span class="font-bold text-amber-600 dark:text-amber-400">${fRp(totalCartHpp)}</span>
        </div>
        <div class="flex justify-between items-center text-[10px]">
          <span class="text-slate-400 font-semibold flex items-center gap-1"><i class="fa-solid fa-arrow-trend-up text-emerald-500"></i> Estimasi Laba Bersih:</span>
          <span class="font-bold text-emerald-600 dark:text-emerald-400">+ ${fRp(estMargin)}</span>
        </div>` : ''}
      </div>`;

    if (method === 'cash') {
        const quickAmounts = [
            { label: 'Uang Pas', val: total, isPas: true },
            { label: '10.000', val: 10000 },
            { label: '20.000', val: 20000 },
            { label: '50.000', val: 50000 },
            { label: '100.000', val: 100000 },
            { label: '200.000', val: 200000 },
            { label: '500.000', val: 500000 }
        ];

        const quickBtns = quickAmounts.map(q => `
            <button onclick="window.posSetQuickCash(${q.val})" type="button"
                class="px-2.5 py-1.5 rounded-xl text-[11px] font-black border transition-all active:scale-95 ${q.isPas ? 'text-white border-transparent shadow-xs' : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 border-slate-200 dark:border-slate-700 hover:border-[var(--color-primary)]'}"
                style="${q.isPas ? 'background:var(--color-primary)' : ''}">
                ${q.isPas ? '<i class="fa-solid fa-money-bill-wave mr-1 text-emerald-400"></i> Uang Pas' : `Rp ${q.label}`}
            </button>
        `).join('');

        d.innerHTML = `
            ${topRow}
            <div class="space-y-2">
                <label class="text-[10px] font-black uppercase tracking-wider text-slate-400">Nominal Uang Diterima (Rp)</label>
                <div class="relative">
                    <span class="absolute left-3.5 top-1/2 -translate-y-1/2 text-sm font-black text-slate-400">Rp</span>
                    <input id="pos-paid-input" type="number" min="0" placeholder="${total}" value="${posPaidAmount || ''}"
                        class="w-full border-2 rounded-2xl pl-10 pr-4 py-2.5 text-base sm:text-lg font-black bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none text-right transition-all"
                        style="border-color:var(--color-primary)" oninput="window.updatePosChange(this.value)">
                </div>

                <!-- Quick Cash Buttons Grid -->
                <div class="pt-1">
                    <p class="text-[9px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">Pilihan Uang Cepat (1-Klik)</p>
                    <div class="grid grid-cols-3 sm:grid-cols-4 gap-1.5">
                        ${quickBtns}
                    </div>
                </div>

                <!-- Kembalian Box -->
                <div id="pos-change-box" class="mt-2.5 p-3 rounded-2xl border transition-all flex items-center justify-between ${posPaidAmount >= total ? 'bg-emerald-50 dark:bg-emerald-950/30 border-emerald-200 dark:border-emerald-800' : 'bg-rose-50 dark:bg-rose-950/30 border-rose-200 dark:border-rose-800'}">
                    <div>
                        <p class="text-[9px] font-black uppercase tracking-wider text-slate-400">Status Kembalian</p>
                        <p id="pos-change-label" class="text-xs font-bold ${posPaidAmount >= total ? 'text-emerald-700 dark:text-emerald-400' : 'text-rose-700 dark:text-rose-400'}">
                            ${posPaidAmount >= total ? 'Kembalian Uang Pembeli:' : 'Uang Masih Kurang:'}
                        </p>
                    </div>
                    <span id="pos-change-display" class="text-base font-black ${posPaidAmount >= total ? 'text-emerald-700 dark:text-emerald-400' : 'text-rose-600 dark:text-rose-400'}">
                        ${fRp(Math.abs(posChange()))}
                    </span>
                </div>
            </div>
        `;
    } else if (method === 'qris') {
        const rawQ = appData.payment?.qrisUrl || appData.store?.qrisUrl || appData.payment?.qris || appData.store?.qris || appData.qrisUrl || '';
        const q = rawQ ? fixD(rawQ) : '';
        d.innerHTML = `
          ${topRow}
          ${q ? `<div class="flex flex-col items-center justify-center p-3 bg-slate-50 dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700"><img src="${esc(q)}" class="w-48 h-48 object-contain rounded-xl shadow-xs" alt="QRIS"><p class="text-center text-xs font-bold text-slate-600 dark:text-slate-300 mt-2">Arahkan kamera pembeli untuk memindai QRIS</p></div>` 
             : `<div class="p-4 bg-amber-50 dark:bg-amber-900/20 text-amber-700 dark:text-amber-400 text-xs rounded-2xl border border-amber-200 text-center font-bold"><i class="fa-solid fa-triangle-exclamation mr-1.5"></i>QRIS toko belum diatur di menu Pengaturan.</div>`}`;
    } else if (method === 'transfer') {
        const rawBanks = Array.isArray(appData.banks) ? appData.banks : [];
        const banks = rawBanks.filter(b => b && (b.bankName || b.name || b.bank));
        
        let bankOptionsHtml = '<option value="">Rekening bank belum diatur di CMS Admin</option>';
        if (banks.length > 0) {
            bankOptionsHtml = banks.map(b => {
                const bName = b.bankName || b.name || b.bank || 'Bank';
                const bNum  = b.bankAccount || b.number || b.noRekening || b.account || '';
                const bOwn  = b.bankOwner || b.holder || b.atasNama || b.owner || '';
                const label = `${bName}${bNum ? ' — ' + bNum : ''}${bOwn ? ' a/n ' + bOwn : ''}`;
                return `<option value="${esc(label)}">${esc(label)}</option>`;
            }).join('');
        }

        d.innerHTML = `
          ${topRow}
          <div class="space-y-2">
            <label class="text-[10px] font-black uppercase tracking-wider text-slate-400 block">Rekening Tujuan Toko</label>
            <div class="relative">
              <select id="pos-bank-sel" class="w-full border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2.5 text-xs font-bold bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 focus:outline-none focus:border-[var(--color-primary)] transition-all">
                ${bankOptionsHtml}
              </select>
            </div>
            ${banks.length > 0 ? `
              <div class="p-2.5 bg-emerald-50/80 dark:bg-emerald-950/30 rounded-xl border border-emerald-200/80 dark:border-emerald-800/60 text-[11px] text-emerald-800 dark:text-emerald-300 flex items-center gap-2">
                <i class="fa-solid fa-building-columns text-emerald-600 dark:text-emerald-400 shrink-0 text-xs"></i>
                <span>Pastikan pembeli telah mentransfer sesuai tagihan ke rekening di atas sebelum menyelesaikan transaksi.</span>
              </div>
            ` : `
              <div class="p-2.5 bg-amber-50 dark:bg-amber-950/30 rounded-xl border border-amber-200 dark:border-amber-800 text-[11px] text-amber-800 dark:text-amber-300 flex items-center gap-2">
                <i class="fa-solid fa-triangle-exclamation text-amber-600 dark:text-amber-400 shrink-0 text-xs"></i>
                <span>Rekening bank belum diatur di menu CMS Admin > Rekening.</span>
              </div>
            `}
          </div>`;
    } else if (method === 'tempo') {
        const plConfig = getPaylaterConfig();
        const tenors = plConfig.tenors || {};
        const isPlSystemEnabled = plConfig.enabled !== false;
        const hasPL = isPlSystemEnabled && !!(posCustomer.isMember && posCustomer.paylaterActive && (posCustomer.paylaterLimit > 0));
        const sisaLimit = hasPL ? Math.max(0, (posCustomer.paylaterLimit || 0) - Math.max(0, posCustomer.paylaterUsed || 0)) : 0;
        const minDp = (hasPL && total > sisaLimit) ? (total - sisaLimit) : 0;

        // Current DP input value (preserve if user typed something)
        const existingDpInput = el('pos-dp-input');
        const currentDp = existingDpInput ? Math.max(0, parseFloat(existingDpInput.value) || 0) : (minDp > 0 ? minDp : 0);
        const effectiveDp = Math.max(minDp, currentDp);

        // Financed amount
        const chargedPokok = Math.min(sisaLimit, Math.max(0, total - effectiveDp));
        const dueDay = posCustomer.paylaterDueDay || 5;

        // Ensure posSelectedPaylaterTenor is enabled, fallback to first enabled tenor
        const enabledKeys = ['30d', '2m', '3m'].filter(k => tenors[k] && tenors[k].enabled);
        if (enabledKeys.length > 0 && !enabledKeys.includes(posSelectedPaylaterTenor)) {
            posSelectedPaylaterTenor = enabledKeys[0];
        }

        const breakdown = calculateInstallmentBreakdown(chargedPokok, posSelectedPaylaterTenor, { ...plConfig, dueDay });

        // Generate Tenor Chips
        const tenorChipsHtml = enabledKeys.map(k => {
            const t = tenors[k];
            const isSel = k === posSelectedPaylaterTenor;
            const sim = calculateInstallmentBreakdown(chargedPokok, k, { ...plConfig, dueDay });
            const cardCls = isSel
                ? 'border-[var(--color-primary)] bg-[rgba(var(--color-primary-rgb),0.08)] text-[var(--color-primary)] font-black shadow-xs'
                : 'border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:border-slate-300';
            
            return `
              <button type="button" onclick="window.posSelectPaylaterTenor('${k}')"
                class="flex-1 py-2 px-2.5 rounded-xl border text-center transition-all cursor-pointer ${cardCls}">
                <div class="text-[11px] font-extrabold flex items-center justify-center gap-1">
                  <span>${esc(t.shortLabel || t.label)}</span>
                  ${isSel ? '<i class="fa-solid fa-circle-check text-[10px]" style="color:var(--color-primary)"></i>' : ''}
                </div>
                <div class="text-[10px] font-mono mt-0.5 ${isSel ? 'font-black' : 'text-slate-500 dark:text-slate-400'}">
                  ${fRp(sim.totalPerMonth)}/bln
                </div>
              </button>
            `;
        }).join('');

        d.innerHTML = `
          ${topRow}
          ${hasPL ? `
            <div class="p-3.5 bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-950/40 dark:to-teal-950/40 rounded-2xl border border-emerald-200/80 dark:border-emerald-800/60 mb-2.5 space-y-2.5">
              <div class="flex items-center justify-between">
                <span class="text-xs font-black text-emerald-800 dark:text-emerald-300 flex items-center gap-1.5">
                  <i class="fa-solid fa-bolt text-emerald-500"></i> Putri PayLater Member
                </span>
                <span class="text-[10px] font-black px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 dark:bg-emerald-900/60 dark:text-emerald-200">
                  Plafon: ${fRp(posCustomer.paylaterLimit)}
                </span>
              </div>
              <div class="flex justify-between items-center text-xs">
                <span class="text-slate-500 dark:text-slate-400 text-[11px]">Sisa Plafon Tersedia:</span>
                <span class="font-black text-emerald-600 dark:text-emerald-400 font-mono text-sm">${fRp(sisaLimit)}</span>
              </div>
              <label class="flex items-center gap-2 pt-1.5 cursor-pointer select-none border-t border-emerald-200/60 dark:border-emerald-800/40">
                <input type="checkbox" id="pos-use-paylater" ${sisaLimit > 0 ? 'checked' : 'disabled'} onchange="window.posTogglePaylater(this.checked)" class="w-4 h-4 rounded text-emerald-600 focus:ring-emerald-500 cursor-pointer">
                <span class="text-xs font-bold text-slate-700 dark:text-slate-200">Gunakan Cicilan Putri PayLater</span>
              </label>

              <!-- Tenor & Simulasi Cicilan Interaktif Kasir POS -->
              <div id="pos-paylater-tenor-box" class="space-y-2 pt-1" style="display: ${sisaLimit > 0 ? 'block' : 'none'};">
                <div class="flex items-center justify-between">
                  <span class="text-[10px] font-black uppercase tracking-wider text-slate-500 dark:text-slate-400">Pilih Tenor Cicilan:</span>
                  <span class="text-[9px] font-bold text-emerald-700 dark:text-emerald-400"><i class="fa-solid fa-shield-halved mr-1"></i>Tanpa Biaya Tersembunyi</span>
                </div>
                <div class="flex gap-1.5">
                  ${tenorChipsHtml}
                </div>

                <!-- Rincian Biaya & Angsuran Transparan -->
                <div id="pos-paylater-breakdown-box" class="p-2.5 rounded-xl bg-white/80 dark:bg-slate-900/80 border border-emerald-200/60 dark:border-emerald-800/40 text-[11px] space-y-1">
                  <div class="flex justify-between text-slate-500 dark:text-slate-400">
                    <span>Pokok Dibiayai:</span>
                    <span class="font-mono font-bold text-slate-700 dark:text-slate-200">${fRp(breakdown.pokokTotal)}</span>
                  </div>
                  <div class="flex justify-between text-slate-500 dark:text-slate-400">
                    <span>Biaya Admin:</span>
                    <span class="font-mono font-bold ${breakdown.totalAdminFee > 0 ? 'text-amber-600 dark:text-amber-400' : 'text-emerald-600 dark:text-emerald-400'}">
                      ${breakdown.totalAdminFee > 0 ? fRp(breakdown.totalAdminFee) : 'Gratis'}
                    </span>
                  </div>
                  <div class="flex justify-between text-slate-500 dark:text-slate-400">
                    <span>Biaya Penanganan / Layanan:</span>
                    <span class="font-mono font-bold ${breakdown.totalServiceFee > 0 ? 'text-amber-600 dark:text-amber-400' : 'text-emerald-600 dark:text-emerald-400'}">
                      ${breakdown.totalServiceFee > 0 ? fRp(breakdown.totalServiceFee) : 'Gratis'}
                    </span>
                  </div>
                  <div class="pt-1 border-t border-slate-200/60 dark:border-slate-800 flex justify-between items-center font-bold">
                    <span class="text-slate-700 dark:text-slate-200">Cicilan / Bulan (${breakdown.months}x):</span>
                    <span class="text-xs font-black font-mono" style="color:var(--color-primary)">${fRp(breakdown.totalPerMonth)}/bln</span>
                  </div>
                  <div class="flex justify-between items-center text-[10px] text-slate-400">
                    <span>Total Tagihan PayLater:</span>
                    <span class="font-mono font-bold text-slate-600 dark:text-slate-300">${fRp(breakdown.grandTotal)}</span>
                  </div>
                </div>
              </div>

              ${minDp > 0 ? `
                <div class="p-2 bg-amber-50 dark:bg-amber-950/40 rounded-xl border border-amber-200 dark:border-amber-800 text-[10px] text-amber-800 dark:text-amber-300 font-bold flex items-center gap-1.5">
                  <i class="fa-solid fa-circle-exclamation text-amber-500 shrink-0"></i>
                  <span>Total belanja melebihi sisa limit. Wajib DP minimal ${fRp(minDp)}</span>
                </div>
              ` : ''}
            </div>
          ` : `
            <div class="p-3 bg-amber-50 dark:bg-amber-900/20 rounded-2xl border border-amber-200 dark:border-amber-700/80 mb-2.5">
              <p class="text-xs font-bold text-amber-800 dark:text-amber-300 flex items-center gap-1.5"><i class="fa-solid fa-hourglass-half"></i> Pembayaran Tempo / Piutang</p>
              <p class="text-[10px] text-amber-700 dark:text-amber-400 mt-1">Transaksi otomatis dicatat sebagai piutang di database toko.</p>
            </div>
          `}
          <label class="text-[10px] font-black uppercase tracking-wider text-slate-400 block mb-1">${hasPL && minDp > 0 ? 'Uang Muka / DP Wajib (Rp)' : 'Uang Muka / DP (Rp) — opsional'}</label>
          <input id="pos-dp-input" type="number" min="0" placeholder="0" value="${minDp > 0 ? minDp : 0}" oninput="window.posOnDpInput(this.value)" class="w-full border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2 text-xs font-black text-right bg-white dark:bg-slate-800 focus:outline-none focus:border-[var(--color-primary)]">`;
    }
};

export const posSelectPaylaterTenor = (tenorKey) => {
    posSelectedPaylaterTenor = tenorKey;
    renderPayDetail('tempo');
};
window.posSelectPaylaterTenor = posSelectPaylaterTenor;

export const posOnDpInput = (val) => {
    const total = posTotal();
    const dp = Math.max(0, parseFloat(val) || 0);
    const hasPL = !!(posCustomer.isMember && posCustomer.paylaterActive && (posCustomer.paylaterLimit > 0));
    if (!hasPL) return;

    const sisaLimit = Math.max(0, (posCustomer.paylaterLimit || 0) - Math.max(0, posCustomer.paylaterUsed || 0));
    const chargedPokok = Math.min(sisaLimit, Math.max(0, total - dp));
    const plConfig = getPaylaterConfig();
    const dueDay = posCustomer.paylaterDueDay || 5;
    const breakdown = calculateInstallmentBreakdown(chargedPokok, posSelectedPaylaterTenor, { ...plConfig, dueDay });

    const bBox = el('pos-paylater-breakdown-box');
    if (bBox) {
        bBox.innerHTML = `
          <div class="flex justify-between text-slate-500 dark:text-slate-400">
            <span>Pokok Dibiayai:</span>
            <span class="font-mono font-bold text-slate-700 dark:text-slate-200">${fRp(breakdown.pokokTotal)}</span>
          </div>
          <div class="flex justify-between text-slate-500 dark:text-slate-400">
            <span>Biaya Admin:</span>
            <span class="font-mono font-bold ${breakdown.totalAdminFee > 0 ? 'text-amber-600 dark:text-amber-400' : 'text-emerald-600 dark:text-emerald-400'}">
              ${breakdown.totalAdminFee > 0 ? fRp(breakdown.totalAdminFee) : 'Gratis'}
            </span>
          </div>
          <div class="flex justify-between text-slate-500 dark:text-slate-400">
            <span>Biaya Penanganan / Layanan:</span>
            <span class="font-mono font-bold ${breakdown.totalServiceFee > 0 ? 'text-amber-600 dark:text-amber-400' : 'text-emerald-600 dark:text-emerald-400'}">
              ${breakdown.totalServiceFee > 0 ? fRp(breakdown.totalServiceFee) : 'Gratis'}
            </span>
          </div>
          <div class="pt-1 border-t border-slate-200/60 dark:border-slate-800 flex justify-between items-center font-bold">
            <span class="text-slate-700 dark:text-slate-200">Cicilan / Bulan (${breakdown.months}x):</span>
            <span class="text-xs font-black font-mono" style="color:var(--color-primary)">${fRp(breakdown.totalPerMonth)}/bln</span>
          </div>
          <div class="flex justify-between items-center text-[10px] text-slate-400">
            <span>Total Tagihan PayLater:</span>
            <span class="font-mono font-bold text-slate-600 dark:text-slate-300">${fRp(breakdown.grandTotal)}</span>
          </div>
        `;
    }
};
window.posOnDpInput = posOnDpInput;

export const posTogglePaylater = (usePl) => {
    const total = posTotal();
    const dpInput = el('pos-dp-input');
    const dpLabel = el('pos-dp-input')?.previousElementSibling;
    const hasPL = !!(posCustomer.isMember && posCustomer.paylaterActive && (posCustomer.paylaterLimit > 0));
    const sisaLimit = hasPL ? Math.max(0, (posCustomer.paylaterLimit || 0) - Math.max(0, posCustomer.paylaterUsed || 0)) : 0;
    const minDp = (usePl && hasPL && total > sisaLimit) ? (total - sisaLimit) : 0;
    if (dpInput) {
        dpInput.value = minDp > 0 ? minDp : 0;
    }
    if (dpLabel && dpLabel.tagName === 'LABEL') {
        dpLabel.textContent = (usePl && hasPL && minDp > 0) ? 'Uang Muka / DP Wajib (Rp)' : 'Uang Muka / DP (Rp) — opsional';
    }
    const tenorBox = el('pos-paylater-tenor-box');
    if (tenorBox) {
        tenorBox.style.display = usePl ? 'block' : 'none';
    }
    window.posOnDpInput(dpInput ? dpInput.value : 0);
};
window.posTogglePaylater = posTogglePaylater;

export const setPosCustomerType = (type) => {
    posCustomer.isMember   = type === 'member';
    posCustomer.isNewTempo = type === 'tempo';
    setActiveBtn('pos-ctype', type, ['umum','member','tempo']);
    const f = el('pos-customer-fields');
    if (!f) return;
    if (type === 'umum') {
        posCustomer.name     = '';
        posCustomer.phone    = '';
        posCustomer.memberId = null;
        posCustomer.points   = 0;
        f.innerHTML = `<input id="pos-cust-name" type="text" placeholder="Nama pembeli (opsional)" class="w-full border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2 text-xs bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-slate-100 focus:outline-none focus:border-[var(--color-primary)] focus:bg-white">`;
    } else if (type === 'member') {
        f.innerHTML = `
          <div class="space-y-2">
            <div class="flex gap-2">
              <div class="relative flex-1">
                <i class="fa-solid fa-magnifying-glass absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xs"></i>
                <input id="pos-cust-phone" type="text" placeholder="Ketik No. HP / Nama / ID Member..."
                  value="${posCustomer.isMember ? esc(posCustomer.phone || posCustomer.name || '') : ''}"
                  class="w-full pl-8 pr-3 py-2 text-xs border border-slate-200 dark:border-slate-700 rounded-xl bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-slate-100 focus:outline-none focus:border-[var(--color-primary)] focus:bg-white transition-all"
                  oninput="window.debouncedLookupPosMember()"
                  onkeydown="if(event.key==='Enter'){event.preventDefault();window.lookupPosMember();}">
              </div>
              <button onclick="window.lookupPosMember()" id="pos-member-lookup-btn" type="button"
                class="px-4 py-2 rounded-xl text-white text-xs font-bold transition-all active:scale-95 flex items-center justify-center gap-1.5 shrink-0 shadow-xs cursor-pointer"
                style="background:var(--color-primary)">
                <i class="fa-solid fa-magnifying-glass"></i>
                <span>Cek</span>
              </button>
            </div>
            <div id="pos-member-result"></div>
          </div>`;
        ensureCustomersLoaded().then(() => {
            const val = el('pos-cust-phone')?.value?.trim();
            if (val) lookupPosMember();
        });
    } else if (type === 'tempo') {
        posCustomer.isMember = false;
        setPosPayMethod('tempo');
        f.innerHTML = `
          <div class="space-y-2">
            <input id="pos-cust-name" type="text" placeholder="Nama Pelanggan / Rekanan *" required class="w-full border border-amber-300 dark:border-amber-600 rounded-xl px-3 py-2 text-xs bg-amber-50/40 dark:bg-slate-800 text-slate-800 dark:text-slate-100 focus:outline-none">
            <input id="pos-cust-phone" type="tel" placeholder="No. WhatsApp Pelanggan *" required class="w-full border border-amber-300 dark:border-amber-600 rounded-xl px-3 py-2 text-xs bg-amber-50/40 dark:bg-slate-800 text-slate-800 dark:text-slate-100 focus:outline-none">
          </div>`;
    }
};

export const setPosPayMethod = (method) => {
    posPayMethod = method;
    setActiveBtn('pos-pay', method, ['cash','qris','transfer','tempo']);
    renderPayDetail(method);
    if (method === 'transfer' && (!appData.banks || !appData.banks.length)) {
        ensureBanksLoaded().then((banks) => {
            if (posPayMethod === 'transfer' && banks && banks.length > 0) {
                renderPayDetail('transfer');
            }
        });
    }
};

export const updatePosChange = (val) => {
    posPaidAmount = fNum(val);
    const total   = posTotal();
    const change  = posPaidAmount - total;
    const c       = el('pos-change-display');
    const lbl     = el('pos-change-label');
    const box     = el('pos-change-box');
    const procBtn = el('pos-process-btn');

    if (c) c.textContent = fRp(Math.abs(change));
    if (lbl) lbl.textContent = change >= 0 ? 'Kembalian Uang Pembeli:' : 'Uang Masih Kurang:';
    if (c) {
        c.className = `text-base font-black ${change >= 0 ? 'text-emerald-700 dark:text-emerald-400' : 'text-rose-600 dark:text-rose-400'}`;
    }
    if (box) {
        box.className = `mt-2.5 p-3 rounded-2xl border transition-all flex items-center justify-between ${change >= 0 ? 'bg-emerald-50 dark:bg-emerald-950/30 border-emerald-200 dark:border-emerald-800' : 'bg-rose-50 dark:bg-rose-950/30 border-rose-200 dark:border-rose-800'}`;
    }
    if (procBtn && posPayMethod === 'cash') {
        procBtn.disabled = change < 0;
        procBtn.classList.toggle('opacity-50', change < 0);
    }
};

export const posSetQuickCash = (val) => {
    const inp = el('pos-paid-input');
    if (inp) {
        inp.value = val;
        updatePosChange(val);
        if (typeof window.triggerHaptic === 'function') window.triggerHaptic('light');
    }
};

// ─── Manajemen & Sinkronisasi Rekening Bank POS ───────────────
export const ensureBanksLoaded = async () => {
    if (Array.isArray(appData.banks) && appData.banks.length > 0) return appData.banks;
    try {
        const snap = await db.collection("freshmart").doc("cms_data").get();
        if (snap.exists) {
            const data = snap.data();
            if (Array.isArray(data?.banks) && data.banks.length > 0) {
                appData.banks = data.banks;
                return appData.banks;
            }
        }
    } catch (_) {}
    return appData.banks || [];
};

// ─── Manajemen & Sinkronisasi Member POS ───────────────────────
export const ensureCustomersLoaded = async () => {
    if (appData.customers && appData.customers.length > 0) return appData.customers;
    try {
        const snap = await db.collection("freshmart").doc("cms_data").collection("customers").get();
        appData.customers = snap.docs.map(d => ({ ...d.data(), id: d.id, _docId: d.id }));
        return appData.customers;
    } catch (e) {
        // Silent catch: jika Security Rules melarang list query untuk non-admin, jangan spam console kasir.
        // POS kasir tetap bisa membaca data member secara instan via direct doc ID (.doc(phone).get()) yang 100% diizinkan.
        return appData.customers || [];
    }
};

const findMembersInList = (query, list) => {
    if (!query || !list || !list.length) return [];
    const q = query.trim().toLowerCase();
    const qDigits = q.replace(/\D/g, '');
    let qCore = qDigits;
    if (qCore.startsWith('62')) qCore = qCore.slice(2);
    else if (qCore.startsWith('0')) qCore = qCore.slice(1);

    const results = [];
    const seen = new Set();

    list.forEach(c => {
        if (!c) return;
        const cId = String(c.id || c._docId || c.phone || '');
        if (seen.has(cId)) return;

        const cPhone = String(c.phone || '').replace(/\D/g, '');
        let cCore = cPhone;
        if (cCore.startsWith('62')) cCore = cCore.slice(2);
        else if (cCore.startsWith('0')) cCore = cCore.slice(1);

        const cName = String(c.name || '').toLowerCase();

        let isMatch = false;
        // 1. Phone match (exact core, atau endsWith/includes)
        if (qCore.length >= 4 && cCore) {
            if (cCore === qCore || cCore.endsWith(qCore) || qCore.endsWith(cCore) || cPhone.includes(qDigits)) {
                isMatch = true;
            }
        }
        // 2. Direct ID match
        if (!isMatch && (cId.toLowerCase() === q || cId === qDigits)) {
            isMatch = true;
        }
        // 3. Name match (case-insensitive substring)
        if (!isMatch && q.length >= 2 && cName.includes(q)) {
            isMatch = true;
        }

        if (isMatch) {
            seen.add(cId);
            results.push(c);
        }
    });

    return results;
};

const queryMemberFromFirestore = async (query) => {
    if (!query) return null;
    const raw = query.trim();
    const qDigits = raw.replace(/\D/g, '');
    let qCore = qDigits;
    if (qCore.startsWith('62')) qCore = qCore.slice(2);
    else if (qCore.startsWith('0')) qCore = qCore.slice(1);

    const custCol = db.collection("freshmart").doc("cms_data").collection("customers");
    
    // Siapkan semua kemungkinan format Document ID pelanggan di Firestore
    const candidateKeys = Array.from(new Set([
        qCore ? '62' + qCore : null,
        qCore ? '0' + qCore : null,
        qCore || null,
        qCore ? '+62' + qCore : null,
        qDigits || null,
        raw
    ].filter(Boolean)));

    // 1. Direct get ke semua candidate keys secara paralel (100% diizinkan 'allow get: if true' di Firestore Rules)
    const directPromises = candidateKeys.map(async (key) => {
        try {
            const doc = await custCol.doc(key).get();
            if (doc && doc.exists) {
                return { ...doc.data(), id: doc.id, _docId: doc.id };
            }
        } catch (_) {}
        return null;
    });

    const directResults = await Promise.all(directPromises);
    const directFound = directResults.find(Boolean);
    if (directFound) {
        if (!appData.customers) appData.customers = [];
        const existIdx = appData.customers.findIndex(c => String(c.id || c.phone) === String(directFound.id || directFound.phone));
        if (existIdx > -1) appData.customers[existIdx] = directFound;
        else appData.customers.push(directFound);
        return directFound;
    }

    // 2. Jika bukan nomor HP atau belum ditemukan, coba query list (hanya jika rules cloud sudah dibuka)
    try {
        const snap = await custCol.limit(300).get();
        if (!snap.empty) {
            appData.customers = snap.docs.map(d => ({ ...d.data(), id: d.id, _docId: d.id }));
            const matches = findMembersInList(query, appData.customers);
            if (matches.length > 0) return matches[0];
        }
    } catch (_) {
        // Silent catch jika list ditolak oleh Firestore rules
    }

    return null;
};

export const renderPosMemberResult = () => {
    const r = el('pos-member-result');
    if (!r || !posCustomer.isMember) return;
    const pts = parseFloat(posCustomer.points) || 0;
    const tier = typeof window.getMemberTier === 'function' ? window.getMemberTier(pts) : { badge: 'MEMBER RESMI' };
    const pointVal = getPointValue();
    const currentPtDiscount = posMemberPointsDiscount();
    const maxPts = getMaxRedeemablePoints();
    
    // Filter hadiah aktif yang stoknya > 0
    const activeRewards = (appData.rewards || []).filter(rw => rw.isActive !== 'false' && rw.isActive !== false && (parseFloat(rw.stock) || 0) > 0);
    const remainingPtsAfterRedeem = Math.max(0, pts - (posPointsRedeemed || 0));

    r.innerHTML = `
    <div class="space-y-2.5">
      <!-- Info Member Bar -->
      <div class="p-3 bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-950/40 dark:to-teal-950/30 rounded-2xl border border-emerald-300 dark:border-emerald-700/60 shadow-xs flex items-center justify-between gap-2.5">
        <div class="flex items-center gap-2.5 min-w-0">
          <div class="w-10 h-10 rounded-xl bg-emerald-500 text-white flex items-center justify-center shrink-0 shadow-xs">
            <i class="fa-solid fa-id-card text-base"></i>
          </div>
          <div class="min-w-0">
            <div class="flex items-center gap-1.5 flex-wrap">
              <span class="text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-900/60 text-emerald-800 dark:text-emerald-200 border border-emerald-300 dark:border-emerald-700">${esc(tier.badge || 'VIP')}</span>
              <span class="text-[10px] font-black text-amber-600 dark:text-amber-400 flex items-center gap-0.5"><i class="fa-solid fa-star text-[9px]"></i>${pts} Poin</span>
              ${(posCustomer.paylaterActive && (posCustomer.paylaterLimit > 0)) ? `
                <span class="text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-900/60 text-emerald-800 dark:text-emerald-200 border border-emerald-300 dark:border-emerald-700 flex items-center gap-1">
                  <i class="fa-solid fa-bolt text-emerald-500"></i> PayLater: ${fRp(Math.max(0, (posCustomer.paylaterLimit || 0) - Math.max(0, posCustomer.paylaterUsed || 0)))}
                </span>
              ` : ''}
            </div>
            <p class="text-xs font-black text-slate-800 dark:text-white truncate mt-0.5">${esc(posCustomer.name || 'Pelanggan Setia')}</p>
            <p class="text-[10px] text-slate-500 dark:text-slate-400 font-mono">${esc(posCustomer.phone || '')}</p>
          </div>
        </div>
        <button onclick="window.resetPosMember()" type="button" class="shrink-0 px-2.5 py-1.5 rounded-xl text-[10px] font-bold text-slate-600 hover:text-rose-600 dark:text-slate-300 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 transition-all cursor-pointer" title="Ganti Member">
          <i class="fa-solid fa-rotate-left mr-1"></i>Ganti
        </button>
      </div>

      <!-- PANEL LOYALITAS KASIR: TUKAR POIN DISKON & KLAIM REWARD -->
      ${pts > 0 ? `
      <div class="p-3 bg-white dark:bg-slate-800/90 rounded-2xl border border-slate-200 dark:border-slate-700 space-y-3 shadow-xs">
        <!-- 1. Tukar Poin Jadi Diskon Belanja Langsung -->
        <div>
          <div class="flex items-center justify-between text-xs mb-1.5">
            <span class="font-bold text-slate-700 dark:text-slate-200 flex items-center gap-1.5">
              <i class="fa-solid fa-tags text-emerald-500"></i>
              <span>Tukar Poin Diskon Belanja</span>
            </span>
            <span class="text-[10px] text-slate-400 font-semibold font-mono">1 Poin = ${fRp(pointVal)}</span>
          </div>

          ${posPointsRedeemed > 0 ? `
          <div class="p-2.5 bg-emerald-50 dark:bg-emerald-950/40 rounded-xl border border-emerald-200 dark:border-emerald-800/60 flex items-center justify-between gap-2">
            <div class="text-xs">
              <span class="font-bold text-emerald-700 dark:text-emerald-300">Potongan Belanja:</span>
              <span class="font-black font-mono text-emerald-600 dark:text-emerald-400 ml-1">-${fRp(currentPtDiscount)}</span>
              <span class="text-[10px] text-slate-500 ml-1">(${posPointsRedeemed} Poin)</span>
            </div>
            <button type="button" onclick="window.setPosPointsRedeemed(0)" class="text-[10px] font-bold text-rose-500 hover:underline cursor-pointer">
              Batal
            </button>
          </div>
          ` : `
          <div class="space-y-2">
            <div class="flex gap-1.5 flex-wrap">
              ${[10, 20, 50].map(n => {
                if (n > maxPts) return '';
                return `
                <button type="button" onclick="window.setPosPointsRedeemed(${n})" class="px-2.5 py-1.5 rounded-lg text-[10px] font-bold bg-slate-100 hover:bg-emerald-50 hover:text-emerald-700 dark:bg-slate-700 dark:hover:bg-emerald-900/40 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-600 transition-all cursor-pointer">
                  Tukar ${n} Pts (-${fRp(n * pointVal)})
                </button>
                `;
              }).join('')}
              ${maxPts > 0 ? `
              <button type="button" onclick="window.setPosPointsRedeemed(${maxPts})" class="px-2.5 py-1.5 rounded-lg text-[10px] font-bold bg-emerald-600 text-white hover:bg-emerald-700 transition-all cursor-pointer shadow-xs">
                Maksimal (${maxPts} Pts)
              </button>
              ` : ''}
            </div>
            ${maxPts <= 0 ? `
            <p class="text-[10px] text-slate-400 italic">${canViewHpp() ? '* Batas harga modal HPP atau saldo poin telah tercapai.' : '* Batas diskon maksimum atau saldo poin telah tercapai.'}</p>
            ` : ''}
          </div>
          `}
        </div>

        <!-- 2. Klaim Hadiah Katalog Langsung di Kasir -->
        ${activeRewards.length > 0 ? `
        <div class="pt-2.5 border-t border-slate-100 dark:border-slate-700/60">
          <div class="flex items-center justify-between text-xs mb-1.5">
            <span class="font-bold text-slate-700 dark:text-slate-200 flex items-center gap-1.5">
              <i class="fa-solid fa-gift text-purple-500"></i>
              <span>Klaim Hadiah Katalog Reward</span>
            </span>
            <span class="text-[10px] text-slate-400 font-semibold">Tersisa: ${remainingPtsAfterRedeem} Poin</span>
          </div>

          ${posClaimedReward ? `
          <div class="p-2.5 bg-purple-50 dark:bg-purple-950/40 rounded-xl border border-purple-200 dark:border-purple-800/60 flex items-center justify-between gap-2">
            <div class="text-xs min-w-0">
              <span class="font-bold text-purple-800 dark:text-purple-300 block truncate inline-flex items-center gap-1.5"><i class="fa-solid fa-gift text-purple-500"></i> ${esc(posClaimedReward.name)}</span>
              <span class="text-[10px] text-purple-600 dark:text-purple-400 font-mono">Ditukar dengan ${posClaimedReward.pointsCost} Poin</span>
            </div>
            <button type="button" onclick="window.deselectPosReward()" class="text-[10px] font-bold text-rose-500 hover:underline cursor-pointer shrink-0">
              Batal
            </button>
          </div>
          ` : `
          <div class="relative">
            <select onchange="if(this.value){window.selectPosReward(this.value);}else{window.deselectPosReward();}" class="w-full text-xs py-2 pl-3 pr-8 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-100 focus:outline-none focus:border-[var(--color-primary)]">
              <option value="">-- Pilih Hadiah Member (Opsional) --</option>
              ${activeRewards.map(rw => {
                const cost = parseFloat(rw.pointsCost) || 0;
                const canAfford = cost <= remainingPtsAfterRedeem;
                return `
                <option value="${rw.id}" ${canAfford ? '' : 'disabled'}>
                  ${esc(rw.name)} (${cost} Poin) ${canAfford ? '' : '[Poin Kurang]'}
                </option>
                `;
              }).join('')}
            </select>
          </div>
          `}
        </div>
        ` : ''}
      </div>
      ` : ''}
    </div>`;
};

export const setPosPointsRedeemed = (pts) => {
    const maxAllowed = getMaxRedeemablePoints();
    const requested = Math.min(maxAllowed, Math.max(0, parseInt(pts) || 0));
    posPointsRedeemed = requested;
    renderPosMemberResult();
    renderPayDetail(posPayMethod);
    const totalEl = document.querySelector('#pos-pay-modal .text-xs.text-slate-500 .font-black');
    if (totalEl) totalEl.textContent = fRp(posTotal());
};

export const selectPosReward = (rewardId) => {
    const r = (appData.rewards || []).find(x => String(x.id) === String(rewardId));
    if (!r) return;
    const cost = parseFloat(r.pointsCost) || 0;
    const available = Math.max(0, (parseFloat(posCustomer.points) || 0) - (posPointsRedeemed || 0));
    if (cost > available) {
        showToast('Poin member tidak cukup untuk hadiah ini!', 'warning');
        return;
    }
    posClaimedReward = { id: r.id, name: r.name, pointsCost: cost };
    showToast(`Hadiah "${r.name}" dipilih!`, 'success');
    renderPosMemberResult();
    renderPayDetail(posPayMethod);
    const totalEl = document.querySelector('#pos-pay-modal .text-xs.text-slate-500 .font-black');
    if (totalEl) totalEl.textContent = fRp(posTotal());
};

export const deselectPosReward = () => {
    posClaimedReward = null;
    renderPosMemberResult();
    renderPayDetail(posPayMethod);
    const totalEl = document.querySelector('#pos-pay-modal .text-xs.text-slate-500 .font-black');
    if (totalEl) totalEl.textContent = fRp(posTotal());
};

export const applyMemberToPos = (member) => {
    posCustomer.isMember = true;
    posCustomer.name     = member.name || 'Member Toko';
    posCustomer.phone    = member.phone || '';
    posCustomer.memberId = member.id || member._docId || member.phone;
    posCustomer.points   = parseFloat(member.points) || 0;
    posPointsRedeemed    = 0;
    posClaimedReward     = null;
    posCustomer.paylaterActive = !!member.paylaterActive;
    posCustomer.paylaterLimit  = Math.max(0, parseFloat(member.paylaterLimit) || 0);
    posCustomer.paylaterUsed   = Math.max(0, parseFloat(member.paylaterUsed) || 0);
    posCustomer.paylaterDueDay = parseInt(member.paylaterDueDay, 10) || 5;

    const inp = el('pos-cust-phone');
    if (inp) inp.value = member.phone || member.name || '';

    renderPosMemberResult();
    renderPayDetail(posPayMethod);
    showToast(`Member terdeteksi: ${member.name} (${posCustomer.points} Poin)`, 'success');
};

export const selectPosMember = (memberId) => {
    const list = appData.customers || [];
    const member = list.find(c => c && String(c.id || c._docId || c.phone) === String(memberId));
    if (member) {
        applyMemberToPos(member);
    }
};

export const resetPosMember = () => {
    posCustomer.isMember = false;
    posCustomer.name     = '';
    posCustomer.phone    = '';
    posCustomer.memberId = null;
    posCustomer.points   = 0;
    posPointsRedeemed    = 0;
    posClaimedReward     = null;
    posCustomer.paylaterActive = false;
    posCustomer.paylaterLimit  = 0;
    posCustomer.paylaterUsed   = 0;
    posCustomer.paylaterDueDay = 5;
    const inp = el('pos-cust-phone');
    if (inp) { inp.value = ''; inp.focus(); }
    const r = el('pos-member-result');
    if (r) r.innerHTML = '';
    renderPayDetail(posPayMethod);
};

let _posMemberSearchTimer = null;
export const debouncedLookupPosMember = () => {
    clearTimeout(_posMemberSearchTimer);
    const q = el('pos-cust-phone')?.value?.trim() || '';
    if (!q) {
        if (!posCustomer.memberId) {
            const r = el('pos-member-result');
            if (r) r.innerHTML = '';
        }
        return;
    }
    const digits = q.replace(/\D/g, '');
    const hasCachedList = Array.isArray(appData.customers) && appData.customers.length > 0;
    
    // Jika list lokal sudah ada, cari otomatis saat q >= 2 karakter.
    // Jika belum ada list lokal (direct query ke Firestore), tunggu hingga minimal 10 digit nomor HP
    // agar tidak melakukan panggilan Firestore berulang sebelum input nomor selesai diketik.
    // Kasir tetap bisa menekan tombol "Cek" atau Enter kapan saja.
    if (!hasCachedList && digits.length < 10 && q.length < 8) {
        return;
    }

    _posMemberSearchTimer = setTimeout(() => {
        lookupPosMember();
    }, 350);
};

export const lookupPosMember = async () => {
    const qInput = el('pos-cust-phone');
    const query = qInput?.value?.trim() || '';
    if (!query) {
        showToast('Masukkan nomor HP atau nama member', 'warning');
        return;
    }
    const r = el('pos-member-result');
    const btn = el('pos-member-lookup-btn');
    if (btn) {
        btn.disabled = true;
        btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i>';
    }
    if (r) {
        r.innerHTML = '<div class="p-2.5 text-center text-xs text-slate-400"><i class="fa-solid fa-spinner fa-spin mr-1.5"></i>Memeriksa database member...</div>';
    }

    try {
        await ensureCustomersLoaded();
        const matches = findMembersInList(query, appData.customers || []);

        if (matches.length === 1) {
            applyMemberToPos(matches[0]);
        } else if (matches.length > 1) {
            r.innerHTML = `
              <div class="space-y-1.5 max-h-44 overflow-y-auto pr-1">
                <p class="text-[10px] font-bold text-slate-500 mb-1">Ditemukan ${matches.length} member (klik untuk memilih):</p>
                ${matches.map(m => `
                  <button onclick="window.selectPosMember('${esc(m.id || m._docId || m.phone)}')" type="button"
                    class="w-full text-left p-2 rounded-xl bg-slate-50 dark:bg-slate-800 hover:bg-emerald-50 dark:hover:bg-emerald-950/30 border border-slate-200 dark:border-slate-700 hover:border-emerald-400 transition-all flex items-center justify-between gap-2 cursor-pointer">
                    <div class="min-w-0">
                      <p class="text-xs font-bold text-slate-800 dark:text-white truncate">${esc(m.name || 'Member')}</p>
                      <p class="text-[10px] text-slate-500 dark:text-slate-400 font-mono">${esc(m.phone || '')}</p>
                    </div>
                    <span class="text-[10px] font-black text-amber-500 shrink-0"><i class="fa-solid fa-star text-[9px]"></i> ${parseFloat(m.points)||0} Poin</span>
                  </button>
                `).join('')}
              </div>
            `;
        } else {
            // Coba query langsung ke Firestore jika belum ada di list lokal
            const directMember = await queryMemberFromFirestore(query);
            if (directMember) {
                applyMemberToPos(directMember);
            } else {
                posCustomer.isMember = false;
                posCustomer.name     = '';
                posCustomer.memberId = null;
                posCustomer.points   = 0;
                const qDigits = query.replace(/\D/g, '');
                const isPhoneLike = qDigits.length >= 8;
                r.innerHTML = `
                  <div class="p-3 bg-amber-50 dark:bg-amber-950/30 rounded-xl border border-amber-200 dark:border-amber-800 text-amber-800 dark:text-amber-300 text-xs space-y-1">
                    <p class="font-bold flex items-center gap-1.5"><i class="fa-solid fa-circle-info"></i> Member Tidak Ditemukan</p>
                    <p class="text-[11px] text-amber-700 dark:text-amber-400">Tidak ada member ditemukan untuk "<b>${esc(query)}</b>".</p>
                    ${!isPhoneLike ? `
                      <p class="text-[10px] text-amber-600/90 dark:text-amber-400/80 pt-1 border-t border-amber-200 dark:border-amber-800/60">
                        <i class="fa-solid fa-lightbulb mr-1 text-amber-500"></i><b>Tips Kasir:</b> Masukkan nomor WhatsApp/HP member (contoh: <code>0812...</code>) untuk verifikasi instan.
                      </p>
                    ` : ''}
                  </div>`;
            }
        }
    } catch (err) {
        console.error('[POS] Error lookupPosMember:', err);
        if (r) {
            r.innerHTML = `<p class="text-xs text-rose-500 p-2">Gagal memeriksa data: ${esc(err.message || 'Koneksi error')}</p>`;
        }
    } finally {
        if (btn) {
            btn.disabled = false;
            btn.innerHTML = '<i class="fa-solid fa-magnifying-glass mr-1.5"></i><span>Cek</span>';
        }
    }
};

// ─── Proses Transaksi ────────────────────────────────────────
export const processPOSTx = async () => {
    if (posCart.length === 0) { showToast('Keranjang kasir masih kosong.', 'warning'); return; }
    const totalCartHpp = getCartTotalHpp();
    if (totalCartHpp > 0 && posTotal() < totalCartHpp) {
        const msg = canViewHpp()
            ? `Transaksi ditolak! Total transaksi (${fRp(posTotal())}) tidak boleh di bawah total harga modal HPP (${fRp(totalCartHpp)})!`
            : 'Transaksi ditolak! Total transaksi melebihi batas diskon maksimum yang diizinkan sistem.';
        showToast(msg, 'error');
        if (typeof window.triggerHaptic === 'function') window.triggerHaptic('heavy');
        return;
    }
    const custName = posCustomer.isMember
        ? (posCustomer.name || 'Member Toko')
        : (el('pos-cust-name')?.value?.trim() || 'Pelanggan Umum');
    const custPhone = posCustomer.isMember
        ? (posCustomer.phone || el('pos-cust-phone')?.value?.trim() || '')
        : (el('pos-cust-phone')?.value?.trim() || '');

    if (posCustomer.isNewTempo && !custPhone) { showToast('Nomor WhatsApp wajib diisi untuk transaksi Cash Tempo.', 'warning'); return; }
    if (posPayMethod === 'cash') {
        posPaidAmount = fNum(el('pos-paid-input')?.value || 0);
        if (posPaidAmount < posTotal()) { showToast(`Nominal pembayaran kurang. Jumlah tagihan: ${fRp(posTotal())}`, 'warning'); return; }
    }
    posCustomer.name  = custName;
    posCustomer.phone = custPhone;
    const dp          = posPayMethod === 'tempo' ? fNum(el('pos-dp-input')?.value || 0) : 0;
    const bankName    = posPayMethod === 'transfer' ? (el('pos-bank-sel')?.value || '') : '';
    const isPaylater  = posPayMethod === 'tempo' && !!(posCustomer.isMember && posCustomer.paylaterActive && el('pos-use-paylater')?.checked);
    const sisaLimit   = isPaylater ? Math.max(0, (posCustomer.paylaterLimit || 0) - Math.max(0, posCustomer.paylaterUsed || 0)) : 0;
    if (isPaylater) {
        const minRequiredDp = posTotal() > sisaLimit ? (posTotal() - sisaLimit) : 0;
        if (dp < minRequiredDp) {
            showToast(`Uang muka (DP) belum mencukupi batas kredit PayLater. Minimal DP: ${fRp(minRequiredDp)}`, 'warning');
            return;
        }
    }
    const chargedToPaylater = isPaylater ? Math.min(posTotal() - dp, sisaLimit) : 0;
    const btn         = el('pos-process-btn');
    if (btn) { btn.disabled = true; btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin mr-2"></i>Memproses...'; }

    // ── 1. Cek Pengaturan Stok Toko (appData.store.useStock) ────
    const useStk = appData.store?.useStock === true || appData.store?.useStock === 'true';
    if (useStk) {
        for (const ci of posCart) {
            const p = (appData.products || []).find(x => String(x.id) === String(ci.id));
            if (!p) continue;
            const needQty = parseFloat(ci.qty) || 0;
            if (ci.variantName && p.variants) {
                const variant = (p.variants || []).find(v => v.name === ci.variantName);
                const currentStk = parseFloat(variant && variant.stock !== undefined ? variant.stock : 0);
                if (currentStk < needQty) {
                    showToast(`Persediaan ${ci.name} (${ci.variantName}) tidak mencukupi. Sisa stok: ${currentStk}`, 'warning');
                    if (btn) { btn.disabled = false; btn.innerHTML = '<i class="fa-solid fa-check-circle mr-2"></i>Selesaikan Transaksi'; }
                    return;
                }
            } else {
                const currentStk = parseFloat(p.stock !== undefined ? p.stock : 0);
                if (currentStk < needQty) {
                    showToast(`Persediaan ${ci.name} tidak mencukupi. Sisa stok: ${currentStk}`, 'warning');
                    if (btn) { btn.disabled = false; btn.innerHTML = '<i class="fa-solid fa-check-circle mr-2"></i>Selesaikan Transaksi'; }
                    return;
                }
            }
        }
    }

    try {
        const txId = genTxId();
        const cashierSession = typeof window.getCashierSession === 'function' ? window.getCashierSession() : null;
        const cashierName = cashierSession?.name || appData.store?.name || 'Kasir';
        const cashierUid  = cashierSession?.uid || window.__currentAdminUid || 'admin';
        const nowISO = new Date().toISOString();
        const serverTime = firebase.firestore.FieldValue.serverTimestamp();
        const orderStatus = posPayMethod === 'tempo' ? 'Diproses' : 'Selesai';

        const activeShift = getActiveShift();
        const shiftId = (activeShift && activeShift.status === 'open') ? activeShift.id : null;
        const shiftNo = (activeShift && activeShift.status === 'open') ? (activeShift.shiftNo || activeShift.id) : null;

        let paylaterBreakdown = null;
        if (isPaylater) {
            const chosenTenor = posSelectedPaylaterTenor || '30d';
            const plConfig = getPaylaterConfig();
            const dueDay = posCustomer.paylaterDueDay || 5;
            paylaterBreakdown = calculateInstallmentBreakdown(chargedToPaylater, chosenTenor, { ...plConfig, dueDay });
        }

        // ── 2. Bangun Data Pesanan Resmi (1 Ekosistem Terpadu Toko) ──
        const orderData = {
            orderId: txId,
            txId,
            source: 'pos',
            channel: 'pos',
            status: orderStatus,
            timestamp: serverTime,
            dateString: nowISO,
            dateMs: Date.now(),
            shiftId,
            shiftNo,
            cashier: cashierUid,
            cashierName,
            customer: {
                name: custName,
                phone: custPhone,
                wa: custPhone,
                address: 'Beli Langsung di Kasir (POS)',
                deliveryMethod: 'takeaway',
                isMember: !!posCustomer.isMember,
                memberId: posCustomer.memberId || null
            },
            customerName: custName,
            customerPhone: custPhone,
            customerType: posCustomer.isMember ? 'Member' : 'Pelanggan Umum',
            items: posCart.map(i => ({
                id: i.id,
                name: i.name,
                price: parseFloat(i.price) || 0,
                basePrice: parseFloat(i.basePrice || i.price) || 0,
                hpp: i.hpp != null ? parseFloat(i.hpp) : (getEffHpp(i) || 0),
                qty: parseFloat(i.qty) || 1,
                discount: parseFloat(i.discount) || 0,
                subtotal: parseFloat(i.subtotal) || 0,
                variantName: i.variantName || '',
                isVariant: !!i.isVariant,
                isWholesale: !!i.isWholesale,
                effectivePrice: parseFloat(i.price) || 0,
                poTime: i.poTime || '',
                unit: i.unit || 'pcs'
            })),
            hasPO: posCart.some(i => i.poTime && String(i.poTime).trim() !== ''),
            payment: {
                method: posPayMethod,
                subtotal: posSubtotal(),
                productDiscount: fNum(posGlobalDisc),
                shippingCost: 0,
                pointDiscount: posMemberPointsDiscount(),
                ppnAmount: posTaxInfo().ppnAmount || 0,
                dppAmount: posTaxInfo().dppAmount || posSubtotal(),
                ppnRate: posTaxInfo().ppnEnabled ? posTaxInfo().ppnRate : 0,
                ppnType: posTaxInfo().ppnEnabled ? posTaxInfo().ppnType : 'exclusive',
                ppnEnabled: !!posTaxInfo().ppnEnabled,
                ppnShowZero: !!posTaxInfo().ppnShowZero,
                ppnLabel: posTaxInfo().ppnLabel || '',
                taxNpwp: appData.store?.taxNpwp || appData.taxSettings?.npwp || '',
                grandTotal: posTotal(),
                paid: posPayMethod === 'cash' ? posPaidAmount : (posPayMethod === 'tempo' ? dp : posTotal()),
                change: posPayMethod === 'cash' ? posChange() : 0,
                bank: bankName,
                paymentStatus: (isPaylater && (paylaterBreakdown ? paylaterBreakdown.grandTotal : 0) <= 0) ? 'lunas' : (posPayMethod === 'tempo' ? ((posTotal() - dp <= 0) ? 'lunas' : 'hutang') : 'lunas'),
                subMethod: isPaylater ? 'paylater' : (posPayMethod === 'tempo' ? 'tempo' : ''),
                isPaylater: isPaylater,
                paylaterUsed: chargedToPaylater,
                paylaterTenor: paylaterBreakdown ? paylaterBreakdown.tenorKey : (isPaylater ? '30d' : null),
                paylaterMonths: paylaterBreakdown ? paylaterBreakdown.months : (isPaylater ? 1 : null),
                paylaterAdminFee: paylaterBreakdown ? paylaterBreakdown.totalAdminFee : 0,
                paylaterServiceFee: paylaterBreakdown ? paylaterBreakdown.totalServiceFee : 0,
                paylaterMonthlyInstallment: paylaterBreakdown ? paylaterBreakdown.totalPerMonth : 0,
                paylaterSchedule: paylaterBreakdown ? paylaterBreakdown.schedule : [],
                dp: dp,
                tempoDp: dp,
                tempoBalance: isPaylater ? (paylaterBreakdown ? paylaterBreakdown.grandTotal : Math.max(0, posTotal() - dp)) : (posPayMethod === 'tempo' ? Math.max(0, posTotal() - dp) : 0),
                tempoDueDate: (paylaterBreakdown && paylaterBreakdown.schedule?.length > 0)
                    ? paylaterBreakdown.schedule[paylaterBreakdown.schedule.length - 1].dueDate
                    : Date.now() + (30 * 24 * 60 * 60 * 1000),
                tempoPenaltyRate: 1,
                tempoPenaltyStopped: false
            },
            subtotal: posSubtotal(),
            globalDiscount: posDiscountAmount(),
            pointDiscount: posMemberPointsDiscount(),
            pointsRedeemed: (posPointsRedeemed || 0) + (posClaimedReward ? (parseFloat(posClaimedReward.pointsCost) || 0) : 0),
            claimedReward: posClaimedReward ? {
                id: posClaimedReward.id,
                name: posClaimedReward.name,
                pointsCost: parseFloat(posClaimedReward.pointsCost) || 0
            } : null,
            discountType: posDiscountType,
            discountVal: posDiscountVal,
            totalHpp: totalCartHpp,
            grossProfit: Math.max(0, posTotal() - totalCartHpp),
            total: posTotal(),
            isTempo: posPayMethod === 'tempo',
            pointsEarned: 0,
            notes: ''
        };

        // ── 3. Hitung & Akumulasi Poin Member jika Member Resmi ───────
        if (posCustomer.isMember && custPhone) {
            const calcPoints = typeof window.calculateCartPoints === 'function'
                ? window.calculateCartPoints(posCart, appData.store)
                : { totalPoints: 0 };
            const ptsEarned = calcPoints.totalPoints || 0;
            orderData.pointsEarned = ptsEarned;

            const totalPtsRedeemed = (posPointsRedeemed || 0) + (posClaimedReward ? (parseFloat(posClaimedReward.pointsCost) || 0) : 0);
            const netPtsChange = ptsEarned - totalPtsRedeemed;
            const finalPts = Math.max(0, (parseFloat(posCustomer.points) || 0) + netPtsChange);
            orderData.finalMemberPoints = finalPts;

            try {
                const cleanPhone = custPhone.replace(/\D/g, '');
                const targetId = String(posCustomer.memberId || cleanPhone);
                const custRef = db.collection("freshmart").doc("cms_data").collection("customers").doc(targetId);
                await custRef.set({
                    points: firebase.firestore.FieldValue.increment(netPtsChange),
                    lastOrderAt: nowISO
                }, { merge: true });

                if (appData.customers) {
                    const m = appData.customers.find(c => c && (String(c.id) === targetId || String(c.phone).replace(/\D/g, '') === cleanPhone));
                    if (m) m.points = finalPts;
                }
                posCustomer.points = finalPts;
            } catch (e) {
                console.warn('[POS] Gagal update poin member:', e);
            }

            // Jika ada hadiah yang diklaim, potong stok hadiah di database
            if (posClaimedReward && posClaimedReward.id) {
                try {
                    await db.collection("freshmart").doc("cms_data").collection("rewards").doc(String(posClaimedReward.id)).update({
                        stock: firebase.firestore.FieldValue.increment(-1)
                    });
                    const rLocal = (appData.rewards || []).find(x => String(x.id) === String(posClaimedReward.id));
                    if (rLocal && rLocal.stock !== undefined) {
                        rLocal.stock = Math.max(0, (parseInt(rLocal.stock) || 0) - 1);
                    }
                } catch(e) {
                    console.warn('[POS] Gagal update stok reward:', e);
                }
            }
        }

        // ── 4. Simpan ke Database Utama Toko (freshmart_orders) ──────
        // Transaksi kasir langsung masuk ke daftar Pesanan Admin & Laporan Penjualan Toko
        // Potong limit Putri PayLater jika digunakan
        orderData.paylaterLimitTracked = false;
        if (isPaylater && posCustomer.phone) {
            try {
                const cleanCustPhone = posCustomer.phone.replace(/\D/g, '');
                const normPhone = cleanCustPhone.startsWith('0') ? '62' + cleanCustPhone.slice(1) : cleanCustPhone;
                const custDocRef = db.collection("freshmart").doc("cms_data").collection("customers").doc(normPhone);
                await custDocRef.set({
                    paylaterUsed: firebase.firestore.FieldValue.increment(chargedToPaylater)
                }, { merge: true });

                if (appData.customers) {
                    const mCust = appData.customers.find(c => c && (String(c.id) === normPhone || String(c.phone).replace(/\D/g, '') === cleanCustPhone));
                    if (mCust) mCust.paylaterUsed = (Math.max(0, parseFloat(mCust.paylaterUsed) || 0)) + chargedToPaylater;
                }
                posCustomer.paylaterUsed = (Math.max(0, parseFloat(posCustomer.paylaterUsed) || 0)) + chargedToPaylater;
                orderData.paylaterLimitTracked = true;
            } catch(ePl) {
                console.warn('[POS] Gagal potong limit PayLater:', ePl);
            }
        }

        // ── 4. Simpan ke Database Utama Toko (freshmart_orders) ──────
        // Transaksi kasir langsung masuk ke daftar Pesanan Admin & Laporan Penjualan Toko
        let isSavedOffline = false;
        if (typeof navigator !== 'undefined' && !navigator.onLine) {
            enqueueOfflineTx(orderData);
            isSavedOffline = true;
            orderData._isSavedOffline = true;
        } else {
            try {
                await db.collection('freshmart_orders').doc(txId).set(orderData);
            } catch (netErr) {
                console.warn('[POS] Gagal simpan order online, mengalihkan ke antrean offline:', netErr);
                enqueueOfflineTx(orderData);
                isSavedOffline = true;
                orderData._isSavedOffline = true;
            }
        }

        // Rekam transaksi ke shift kasir aktif
        recordTransactionToShift(orderData);

        // ── 5. Potong Stok Otomatis Jika Fitur Stok Aktif (Identik Storefront) ─────
        if (useStk) {
            const qtyMap = {}; 
            posCart.forEach(ci => {
                const pId = ci.id != null ? ci.id.toString() : null;
                if (!pId) return;
                if (!qtyMap[pId]) qtyMap[pId] = { main: 0, variants: {} };
                const q = parseFloat(ci.qty) || 0;
                if (ci.variantName) qtyMap[pId].variants[ci.variantName] = (qtyMap[pId].variants[ci.variantName] || 0) + q;
                else qtyMap[pId].main += q;
            });

            const pIds = Object.keys(qtyMap);
            const updatedProductIds = [];

            for (const pId of pIds) {
                const need = qtyMap[pId];
                const prod = (appData.products || []).find(p => String(p.id) === pId);
                if (!prod) continue;
                const updatePayload = {};

                if (need.main > 0) {
                    deductFifoStock(prod, need.main);
                    updatePayload.stock = prod.stock;
                    if (prod.storeStock !== undefined) updatePayload.storeStock = prod.storeStock;
                    if (prod.warehouseStock !== undefined) updatePayload.warehouseStock = prod.warehouseStock;
                    if (Array.isArray(prod.stockBatches)) updatePayload.stockBatches = prod.stockBatches;
                    if (prod.hpp) updatePayload.hpp = prod.hpp;
                    if (prod.stock === 0) {
                        prod.isActive = 'false';
                        updatePayload.isActive = 'false';
                    }
                    prod.totalSold = (parseFloat(prod.totalSold) || 0) + need.main;
                    updatePayload.totalSold = prod.totalSold;
                }

                if (Object.keys(need.variants).length > 0 && prod.variants) {
                    Object.keys(need.variants).forEach(vName => {
                        const vNeed = need.variants[vName];
                        deductFifoStock(prod, vNeed, vName);
                        const vIdx = prod.variants.findIndex(v => v.name === vName);
                        if (vIdx > -1) {
                            if (prod.variants[vIdx].stock === 0) prod.variants[vIdx].isActive = false;
                            prod.variants[vIdx].totalSold = (parseFloat(prod.variants[vIdx].totalSold) || 0) + vNeed;
                        }
                    });
                    updatePayload.variants = prod.variants;
                    updatePayload.stock = prod.stock;
                    if (prod.storeStock !== undefined) updatePayload.storeStock = prod.storeStock;
                    if (prod.warehouseStock !== undefined) updatePayload.warehouseStock = prod.warehouseStock;
                    if (Array.isArray(prod.stockBatches)) updatePayload.stockBatches = prod.stockBatches;
                }

                const localIdx = (appData.products || []).findIndex(p => String(p.id) === pId);
                if (localIdx > -1) appData.products[localIdx] = prod;

                try {
                    await db.collection("freshmart").doc("cms_data").collection("products").doc(pId).update(updatePayload);
                    updatedProductIds.push(pId);
                } catch(stkErr) {
                    console.warn('[POS] Gagal update stok produk di Firestore:', pId, stkErr);
                }
            }

            if (updatedProductIds.length > 0) {
                try {
                    await db.collection("freshmart").doc("cms_data").update({
                        lastUpdate: firebase.firestore.FieldValue.increment(1),
                        updateType: 'stock_change',
                        updatedProductIds
                    });
                } catch(e) {}
            }
        }

        closePayModal();
        closePOSCartDrawer(true);
        const lastTx = { ...orderData };
        posCart = []; posGlobalDisc = 0; posDiscountVal = 0; posDiscountType = 'rp';
        posPointsRedeemed = 0; posClaimedReward = null;
        renderCart(); renderCatalog();
        showPOSSuccess(lastTx);
        if (isSavedOffline) {
            showToast(`Mode Offline: Transaksi #${lastTx.txId.slice(-6)} tersimpan di antrean lokal. Otomatis sinkron saat online.`, 'warning');
        }
    } catch (err) {
        console.error('[POS] Error:', err);
        showToast('Gagal menyimpan transaksi. Coba lagi.', 'error');
        if (btn) { btn.disabled = false; btn.innerHTML = '<i class="fa-solid fa-check-circle mr-2"></i>Selesaikan Transaksi'; }
    }
};

// ─── Dialog Sukses ───────────────────────────────────────────
const showPOSSuccess = (tx) => {
    window._lastPOSTx = tx;
    try { localStorage.setItem('freshmart_last_pos_tx', JSON.stringify(tx)); } catch (_) {}
    const changeInfo = tx.payment.method === 'cash'
        ? `<p class="text-sm text-slate-500">Kembalian: <span class="font-black text-emerald-600">${fRp(tx.payment.change)}</span></p>`
        : tx.payment.method === 'tempo' ? `<p class="text-sm text-amber-600 font-semibold inline-flex items-center gap-1.5 justify-center"><i class="fa-solid fa-triangle-exclamation text-amber-500"></i> Dicatat sebagai Piutang Tempo</p>`
        : `<p class="text-sm text-slate-500">Metode: ${tx.payment.method.toUpperCase()}</p>`;
    const isInAdmin = !!document.getElementById('pos-admin-container') || (typeof window.cTab === 'function' && window.cTab() === 'pos');

    document.body.insertAdjacentHTML('beforeend', `
    <div id="pos-success-modal" class="fixed inset-0 z-[9999] flex items-center justify-center p-4" style="background:rgba(15,23,42,0.75)">
      <div class="bg-white dark:bg-slate-900 rounded-3xl shadow-2xl w-full max-w-sm border border-slate-200/80 dark:border-slate-800">
        <div class="p-6 text-center">
          <div class="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center mx-auto mb-4"><i class="fa-solid fa-circle-check text-emerald-500 text-3xl"></i></div>
          <h2 class="font-black text-lg text-slate-900 dark:text-white mb-1">Transaksi Berhasil!</h2>
          <p class="text-xs text-slate-400 mb-2">#${esc(tx.txId)}</p>
          <p class="text-2xl font-black mb-1" style="color:var(--color-primary)">${fRp(tx.total)}</p>
          ${changeInfo}
          ${tx._isSavedOffline || tx._offlineQueuedAt ? `
          <div class="mt-2.5 px-3 py-1.5 rounded-xl bg-amber-50 dark:bg-amber-950/40 text-[11px] font-bold text-amber-700 dark:text-amber-300 flex items-center justify-center gap-1.5 border border-amber-200 dark:border-amber-800">
            <i class="fa-solid fa-cloud-arrow-up text-amber-500"></i>
            <span>Tersimpan di Antrean Offline (Akan sinkron saat online)</span>
          </div>` : `
          <div class="mt-2.5 px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800/80 text-[11px] font-bold text-slate-600 dark:text-slate-300 flex items-center justify-center gap-1.5 border border-slate-200/60 dark:border-slate-700/60">
            <i class="fa-solid fa-check-double text-emerald-500"></i>
            <span>Tercatat Resmi di Menu Pesanan CMS</span>
          </div>`}
          ${tx.pointsEarned > 0 ? `
          <div class="mt-2 p-2 rounded-xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 text-amber-700 dark:text-amber-300 text-xs font-bold flex items-center justify-center gap-1.5">
            <i class="fa-solid fa-star text-amber-500"></i>
            <span>+${tx.pointsEarned} Poin Member Didapat!</span>
          </div>` : ''}
          ${(tx.pointDiscount > 0 || (tx.payment && tx.payment.pointDiscount > 0)) ? `
          <div class="mt-1.5 p-2 rounded-xl bg-rose-50 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-800 text-rose-700 dark:text-rose-300 text-xs font-bold flex items-center justify-center gap-1.5">
            <i class="fa-solid fa-tags text-rose-500"></i>
            <span>Diskon Poin: -${fRp(tx.pointDiscount || tx.payment?.pointDiscount)}</span>
          </div>` : ''}
          ${tx.claimedReward ? `
          <div class="mt-1.5 p-2 rounded-xl bg-purple-50 dark:bg-purple-950/30 border border-purple-200 dark:border-purple-800 text-purple-700 dark:text-purple-300 text-xs font-bold flex items-center justify-center gap-1.5">
            <i class="fa-solid fa-gift text-purple-500"></i>
            <span>Klaim Hadiah: ${esc(tx.claimedReward.name)}</span>
          </div>` : ''}
        </div>
        <div class="px-6 pb-6 flex flex-col gap-2">
          <button onclick="window.printPOSReceiptDirect(window._lastPOSTx)" class="w-full py-3.5 rounded-2xl text-white font-black text-sm shadow-lg active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer hover:brightness-105" style="background:linear-gradient(135deg, var(--color-primary-light,#e1b858) 0%, var(--color-primary,#c59b27) 50%, var(--color-primary-dark,#a87f1b) 100%);box-shadow:0 4px 14px rgba(var(--color-primary-rgb),0.35)">
            <i class="fa-solid fa-eye text-white/90"></i> Preview &amp; Cetak Struk
          </button>
          <button onclick="document.getElementById('pos-success-modal')?.remove()" class="w-full py-2.5 rounded-2xl border border-slate-200/80 dark:border-slate-700/80 text-slate-500 dark:text-slate-400 font-medium text-xs hover:bg-slate-50 dark:hover:bg-slate-800 transition-all cursor-pointer">Transaksi Baru</button>
          ${isInAdmin ? `
          <button onclick="document.getElementById('pos-success-modal')?.remove(); if(typeof window.openAdminTab==='function') window.openAdminTab('orders');" class="w-full py-2 rounded-xl text-slate-400 dark:text-slate-500 text-[11px] font-medium hover:text-[var(--color-primary)] transition-all flex items-center justify-center gap-1.5 cursor-pointer">
            <i class="fa-solid fa-receipt"></i> Buka Menu Pesanan Toko
          </button>` : ''}
        </div>
      </div>
    </div>`);

    // Auto-Print langsung jika diaktifkan di pengaturan printer
    const cfg = typeof getPrinterConfig === 'function' ? getPrinterConfig() : {};
    if (cfg.autoPrintOrder && typeof window.printPOSReceiptDirect === 'function') {
        setTimeout(() => {
            window.printPOSReceiptDirect(tx);
        }, 300);
    }
};

// ─── Cetak Struk POS: Selalu lewat Preview Universal ─────────────
export const printPOSReceipt = (tx) => {
    previewPOSReceiptThenPrint(tx);
};

export const previewPOSReceiptThenPrint = (tx) => {
    window._lastPOSTx = tx;
    try { localStorage.setItem('freshmart_last_pos_tx', JSON.stringify(tx)); } catch (_) {}
    // Satu tampilan preview untuk seluruh sistem (konsisten dengan tema)
    if (typeof window.printPOSReceiptDirect === 'function') {
        window.printPOSReceiptDirect(tx);
        return;
    }
    const config    = typeof getPrinterConfig === 'function' ? getPrinterConfig() : { paperSize: '58mm', deviceType: 'rawbt' };
    const cols      = typeof window.getPaperCols === 'function' ? window.getPaperCols(config.paperSize) : (config.paperSize === '80mm' ? 48 : 32);
    const is80      = cols >= 40;
    const storeName = config.headerText || appData.store?.name || 'TOKO PUTRI';
    const storeWa   = appData.store?.wa || '';
    const storeAddr = appData.store?.address || '';
    const footerTxt = config.footerText || 'Terima Kasih Atas Kunjungan Anda!';
    const dateStr   = typeof window.formatCompactDate === 'function' ? window.formatCompactDate(tx.dateMs || Date.now(), is80) : new Date(tx.dateMs || Date.now()).toLocaleString('id-ID');
    const itemsHtml = (tx.items || []).map(i => {
        const vText = i.variantName ? ` (${esc(i.variantName)}${i.colorCode ? ' ' + esc(i.colorCode) : ''})` : '';
        const effPrice = i.effectivePrice || i.price || 0;
        const subtotal = i.subtotal !== undefined ? i.subtotal : (parseFloat(i.qty || 1) * effPrice);
        return `
        <tr>
            <td colspan="2" style="padding-top:4px;font-weight:bold;word-break:break-word;">${esc(i.name)}${vText}${i.poTime ? ' [PO]' : ''}</td>
        </tr>
        <tr>
            <td style="padding-bottom:3px;color:#475569;font-size:10.5px;">&nbsp;&nbsp;${formatQty(i.qty)} ${esc(i.unit || 'pcs')} x ${Math.round(effPrice).toLocaleString('id-ID')}</td>
            <td style="text-align:right;padding-bottom:3px;white-space:nowrap;font-weight:bold;">${Math.round(subtotal).toLocaleString('id-ID')}</td>
        </tr>
        ${i.discount && i.discount > 0 ? `<tr><td style="padding-bottom:2px;color:#e11d48;font-size:10px;">&nbsp;&nbsp;(Diskon)</td><td style="text-align:right;color:#e11d48;font-size:10px;">-${Math.round(i.discount).toLocaleString('id-ID')}</td></tr>` : ''}
        ${i.poTime ? `<tr><td colspan="2" style="font-size:9.5px;font-style:italic;color:#64748b;">&nbsp;&nbsp;* Estimasi PO: ${esc(i.poTime)}</td></tr>` : ''}
        `;
    }).join('');
    const discLabel = tx.discountType === 'percent' && tx.discountVal ? `Diskon (${tx.discountVal}%)` : 'Diskon Toko';

    // Selalu tampilkan preview modal in-page jika dipanggil
    document.getElementById('pos-receipt-fallback-modal')?.remove();
    if (typeof window.pushModalHistory === 'function') {
        window.pushModalHistory('posReceiptFallback');
    }
    document.body.insertAdjacentHTML('beforeend', `
    <div id="pos-receipt-fallback-modal" class="fixed inset-0 z-[10000] flex items-center justify-center p-3 sm:p-4" style="background:rgba(15,23,42,0.75)" onclick="if(event.target===this) window.closePOSReceiptFallbackModal()">
        <div class="bg-white dark:bg-slate-900 rounded-3xl shadow-2xl w-full ${is80 ? 'max-w-[420px]' : 'max-w-[340px]'} border border-slate-200 dark:border-slate-800 overflow-hidden flex flex-col max-h-[90vh]">
            <div class="p-3.5 sm:p-4 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center bg-slate-50 dark:bg-slate-800/50">
                <span class="font-bold text-xs text-slate-700 dark:text-slate-200 flex items-center gap-1.5"><i class="fa-solid fa-receipt text-amber-500"></i>Preview Struk Thermal (${cols} Kolom)</span>
                <button onclick="window.closePOSReceiptFallbackModal()" class="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-slate-700 dark:hover:text-slate-200 transition-colors flex items-center justify-center cursor-pointer" aria-label="Tutup preview"><i class="fa-solid fa-xmark text-sm"></i></button>
            </div>
            <div id="pos-receipt-paper-box" class="p-4 overflow-y-auto flex-1 font-mono text-[11px] bg-slate-50/60 dark:bg-slate-950 text-slate-800 dark:text-slate-200 space-y-1.5 select-text custom-scrollbar">
                <div class="text-center font-bold text-sm uppercase">${esc(storeName)}</div>
                ${storeAddr ? `<div class="text-center text-[10px] text-slate-500">${esc(storeAddr)}</div>` : ''}
                ${storeWa ? `<div class="text-center text-[10px] text-slate-500">WA: ${esc(storeWa)}</div>` : ''}
                ${(tx.payment?.taxNpwp || appData.store?.taxNpwp) ? `<div class="text-center text-[9px] font-mono text-slate-500">NPWP: ${esc(tx.payment?.taxNpwp || appData.store.taxNpwp)}</div>` : ''}
                <div class="border-t border-dashed border-slate-300 dark:border-slate-700 my-2"></div>
                <div class="flex justify-between"><span>No : <b>#${esc(tx.txId)}</b></span><span>${esc(dateStr)}</span></div>
                <div class="flex justify-between"><span>Kasir: ${esc(tx.cashierName || 'Kasir')}</span><span>Plg: ${esc(tx.customer?.name || 'Umum')}</span></div>
                ${tx.customer?.phone ? `<div>HP  : ${esc(tx.customer.phone)}</div>` : ''}
                <div class="border-t border-dashed border-slate-300 dark:border-slate-700 my-2"></div>
                <table class="w-full text-[11px] border-collapse">
                    ${itemsHtml}
                </table>
                <div class="border-t border-dashed border-slate-300 dark:border-slate-700 my-2"></div>
                <div class="flex justify-between"><span>Subtotal</span><span>${fRp(tx.subtotal)}</span></div>
                ${(tx.globalDiscount || 0) > 0 ? `<div class="flex justify-between text-rose-500 font-bold"><span>${discLabel}</span><span>- ${fRp(tx.globalDiscount)}</span></div>` : ''}
                ${(tx.pointDiscount || 0) > 0 ? `<div class="flex justify-between text-emerald-600 font-bold"><span>Diskon Poin (${tx.pointsRedeemed || 0} Pts)</span><span>- ${fRp(tx.pointDiscount)}</span></div>` : ''}
                ${tx.claimedReward ? `<div class="flex justify-between text-purple-600 font-bold"><span>[Klaim Hadiah]</span><span class="truncate max-w-[150px]">${esc(tx.claimedReward.name)}</span></div>` : ''}
                ${(() => {
                    const tax = extractOrderTaxInfo(tx);
                    if (!tax.hasPpn) return '';
                    const valStr = tax.ppnAmount > 0 ? `${tax.isInclusive ? '' : '+'}${fRp(tax.ppnAmount)}` : 'Rp 0';
                    return `
                    <div class="flex justify-between text-slate-500"><span>DPP</span><span>${fRp(tax.dppAmount)}</span></div>
                    <div class="flex justify-between font-bold text-amber-600 dark:text-amber-400"><span>${esc(tax.ppnLabel)}</span><span>${valStr}</span></div>
                    `;
                })()}
                <div class="flex justify-between font-black text-sm pt-1 border-t border-slate-200 dark:border-slate-700"><span>TOTAL</span><span style="color:var(--color-primary)">${fRp(tx.total)}</span></div>
                ${tx.payment.method === 'cash' ? `<div class="flex justify-between"><span>Bayar Tunai</span><span>${fRp(tx.payment.paid)}</span></div><div class="flex justify-between font-bold text-emerald-600"><span>Kembalian</span><span>${fRp(tx.payment.change)}</span></div>` : ''}
                ${tx.payment.method === 'tempo' ? `
                    ${(tx.payment.isPaylater || tx.isPaylater) ? `<div class="flex justify-between font-bold text-emerald-600"><span>Plafon PayLater Digunakan</span><span>${fRp(tx.payment.paylaterUsed || (tx.total - (tx.payment.tempoDp || tx.payment.dp || 0)))}</span></div>` : ''}
                    <div class="flex justify-between"><span>Uang Muka (DP)</span><span>${fRp(tx.payment.tempoDp || tx.payment.dp || 0)}</span></div>
                    <div class="flex justify-between font-bold ${(tx.payment.isPaylater || tx.isPaylater) ? 'text-emerald-700 dark:text-emerald-400' : 'text-amber-600'}">
                        <span>${(tx.payment.isPaylater || tx.isPaylater) ? 'Tagihan PayLater' : 'Sisa Piutang'}</span>
                        <span>${fRp(tx.payment.tempoBalance || 0)}</span>
                    </div>
                ` : ''}
                <div class="flex justify-between"><span>Metode Bayar</span><span>${(tx.payment.isPaylater || tx.isPaylater) ? 'PUTRI PAYLATER' : esc(tx.payment.method.toUpperCase())}</span></div>
                ${(tx.pointsEarned > 0 || (tx.pointsRedeemed || 0) > 0) ? `
                <div class="border-t border-dashed border-slate-300 dark:border-slate-700 my-2"></div>
                ${tx.pointsEarned > 0 ? `<div class="flex justify-between text-amber-600 dark:text-amber-400 font-bold"><span>Poin Didapat:</span><span>+${tx.pointsEarned} Poin</span></div>` : ''}
                ${(tx.pointsRedeemed || 0) > 0 ? `<div class="flex justify-between text-rose-500 font-bold"><span>Poin Ditukar:</span><span>-${tx.pointsRedeemed} Poin</span></div>` : ''}
                ${tx.finalMemberPoints !== undefined ? `<div class="flex justify-between text-slate-600 dark:text-slate-300 font-bold"><span>Sisa Saldo Poin:</span><span>${tx.finalMemberPoints} Poin</span></div>` : ''}` : ''}
                <div class="border-t border-dashed border-slate-300 dark:border-slate-700 my-2"></div>
                <div class="text-center text-[10px] text-slate-400 my-1">${esc(footerTxt)}</div>
            </div>
            <div class="p-3 border-t border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/40 flex gap-2">
                <button onclick="window.executePOSPrintDirect()" class="flex-1 py-3.5 rounded-2xl text-white font-black text-xs sm:text-sm flex items-center justify-center gap-2 cursor-pointer shadow-md transition-all active:scale-95 hover:opacity-95" style="background:var(--color-primary)">
                    <i class="fa-solid fa-bolt text-amber-300"></i><i class="fa-solid fa-print"></i> Cetak Struk Langsung
                </button>
                <button onclick="if(typeof window.openPrinterSettingsModal==='function') window.openPrinterSettingsModal();" class="px-3.5 py-3.5 rounded-2xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 font-bold text-xs flex items-center gap-1 cursor-pointer transition-all active:scale-95" title="Pengaturan Printer">
                    <i class="fa-solid fa-gear"></i>
                </button>
            </div>
        </div>
    </div>`);
};

export const closePOSReceiptFallbackModal = (fH = false) => {
    const doClose = () => {
        document.getElementById('pos-receipt-fallback-modal')?.remove();
    };
    if (typeof window.requestCloseModal === 'function') {
        window.requestCloseModal('posReceiptFallback', fH, doClose);
    } else {
        doClose();
    }
};
window.closePOSReceiptFallbackModal = closePOSReceiptFallbackModal;

export const executePOSPrintDirect = () => {
    if (window._lastPOSTx && typeof window.printPOSReceiptDirect === 'function') {
        window.printPOSReceiptDirect(window._lastPOSTx);
        return;
    }

    const pBox = el('pos-receipt-paper-box');
    if (!pBox) return;

    if (typeof window.renderThermalDOMAndPrint === 'function') {
        window.renderThermalDOMAndPrint(pBox.innerHTML);
    } else {
        window.print();
    }
};

/**
 * Cetak Ulang Struk Kasir Terakhir (Reprint Last Receipt)
 * Dipicu oleh tombol pintas [F5] kasir atau tombol aksi cepat di antarmuka POS.
 */
export const reprintLastPOSReceipt = () => {
    let tx = window._lastPOSTx;
    if (!tx) {
        try {
            const raw = localStorage.getItem('freshmart_last_pos_tx');
            if (raw) tx = JSON.parse(raw);
        } catch (_) {}
    }
    if (!tx && Array.isArray(window.appData?.orders) && window.appData.orders.length > 0) {
        const posOrders = window.appData.orders.filter(o => o.source === 'pos' || o.isPos || (o.id && o.id.startsWith('POS-')));
        tx = posOrders.length > 0 ? posOrders[0] : window.appData.orders[0];
    }
    if (!tx) {
        showToast('Belum ada transaksi terakhir untuk dicetak ulang.', 'info');
        return;
    }
    showToast(`Mencetak ulang struk #${tx.txId || tx.id || ''}...`, 'info');
    previewPOSReceiptThenPrint(tx);
};

// ─── Debounced Search & Instant Clear ─────────────────────────
export const posSearchFn = (v, immediate = false) => {
    const query = typeof v === 'string' ? v : (v?.value || '');
    if (posSearchDebounceTimer) {
        clearTimeout(posSearchDebounceTimer);
        posSearchDebounceTimer = null;
    }

    const execute = () => {
        posSearch = query;
        posCatalogPage = 1; // Reset pagination
        document.querySelectorAll('#pos-search-input').forEach(inp => {
            if (inp.value !== posSearch) inp.value = posSearch;
        });
        document.querySelectorAll('.pos-search-clear-btn').forEach(btn => {
            if (posSearch && posSearch.trim().length > 0) {
                btn.classList.remove('hidden');
                btn.classList.add('flex');
            } else {
                btn.classList.add('hidden');
                btn.classList.remove('flex');
            }
        });
        renderCatalog();
    };

    if (immediate) {
        execute();
    } else {
        posSearchDebounceTimer = setTimeout(execute, 130);
    }
};

export const posClearSearch = () => {
    document.querySelectorAll('#pos-search-input').forEach(inp => {
        inp.value = '';
    });
    posSearchFn('', true);
    const firstInp = el('pos-search-input');
    if (firstInp) firstInp.focus();
};

/**
 * Tangani penekanan tombol pada kolom pencarian POS kasir.
 * Mendeteksi otomatis sinyal 'Enter' dari barcode scanner USB/Bluetooth
 * dan langsung memasukkan produk/varian ke keranjang belanja kasir.
 */
export const handlePOSSearchKeydown = (e) => {
    if (!e) return;
    if (e.key === 'Enter') {
        e.preventDefault();
        const inp = e.target || el('pos-search-input');
        const rawVal = (inp ? inp.value : '').trim();
        if (!rawVal) return;

        const match = findProductOrVariantByBarcode(rawVal);
        if (match) {
            const prod = match.product;
            let added = false;
            if (match.isVariantMatch && match.variant) {
                const vPrice = parseFloat(match.variant.price) || 0;
                added = addToCartWithVariant(prod.id, match.variant.name, vPrice, match.variantIdx, 1);
                if (added) {
                    showToast(`Ditambahkan: ${prod.name} — ${match.variant.name}`, 'success');
                    if (typeof playCashierChime === 'function') playCashierChime();
                }
            } else {
                const hasVariants = Array.isArray(prod.variants) && prod.variants.length > 0;
                if (hasVariants) {
                    ensurePOSVariantSheet().then(() => {
                        if (typeof window.openPOSVariantSheet === 'function') {
                            window.openPOSVariantSheet(prod.id);
                        }
                    });
                    added = true;
                } else {
                    added = addToCart(prod.id);
                    if (added) {
                        showToast(`Ditambahkan: ${prod.name}`, 'success');
                        if (typeof playCashierChime === 'function') playCashierChime();
                    }
                }
            }

            if (added) {
                posClearSearch();
            }
        } else {
            showToast(`Kode "${rawVal}" tidak ditemukan sebagai barcode/SKU produk. Menampilkan filter teks...`, 'info');
        }
    } else if (e.key === 'Escape') {
        posClearSearch();
        e.target?.blur();
    }
};

export const posLoadMoreProducts = () => {
    posCatalogPage += 1;
    renderCatalog(true);
};

// ─── Resiliensi Offline Kasir & Sinkronisasi Antrean ──────────
export const getOfflineTxQueue = () => {
    try {
        const raw = localStorage.getItem(POS_OFFLINE_TX_KEY);
        return raw ? JSON.parse(raw) : [];
    } catch (e) {
        console.error('[POS Offline] Gagal baca antrean offline:', e);
        return [];
    }
};

export const saveOfflineTxQueue = (queue) => {
    try {
        localStorage.setItem(POS_OFFLINE_TX_KEY, JSON.stringify(queue || []));
    } catch (e) {
        console.error('[POS Offline] Gagal simpan antrean offline:', e);
    }
};

export const enqueueOfflineTx = (orderData) => {
    const queue = getOfflineTxQueue();
    const queuedItem = {
        ...orderData,
        _offlineQueuedAt: new Date().toISOString()
    };
    const exists = queue.findIndex(t => (t.id || t.txId) === (orderData.id || orderData.txId));
    if (exists >= 0) {
        queue[exists] = queuedItem;
    } else {
        queue.push(queuedItem);
    }
    saveOfflineTxQueue(queue);
    renderOfflineQueueBadge();
};

let _isSyncingOfflineTx = false;
export const posSyncOfflineTransactions = async (silent = false) => {
    if (_isSyncingOfflineTx) return;
    if (typeof navigator !== 'undefined' && !navigator.onLine) {
        if (!silent) showToast('Koneksi internet offline. Sinkronisasi ditunda sampai koneksi pulih.', 'warning');
        return;
    }

    const queue = getOfflineTxQueue();
    if (!queue || queue.length === 0) {
        renderOfflineQueueBadge();
        if (!silent) showToast('Semua transaksi kasir sudah tersinkronisasi.', 'success');
        return;
    }

    _isSyncingOfflineTx = true;
    renderOfflineQueueBadge(true);
    if (!silent) showToast(`Menyinkronkan ${queue.length} transaksi offline ke server...`, 'info');

    let successCount = 0;
    const remainingQueue = [];

    for (const tx of queue) {
        try {
            const cleanTx = { ...tx };
            const docId = cleanTx.id || cleanTx.txId;
            delete cleanTx._isSavedOffline;
            delete cleanTx._offlineQueuedAt;
            await db.collection('freshmart_orders').doc(docId).set(cleanTx, { merge: true });
            successCount++;
        } catch (err) {
            console.error('[POS Offline] Gagal sinkronkan transaksi:', tx.id || tx.txId, err);
            remainingQueue.push(tx);
        }
    }

    saveOfflineTxQueue(remainingQueue);
    _isSyncingOfflineTx = false;
    renderOfflineQueueBadge();

    if (successCount > 0) {
        showToast(`Berhasil menyinkronkan ${successCount} transaksi kasir ke cloud!`, 'success');
    }
    if (remainingQueue.length > 0) {
        showToast(`${remainingQueue.length} transaksi belum berhasil disinkronkan. Akan dicoba lagi otomatis.`, 'warning');
    }
};

export const renderOfflineQueueBadge = (isSyncing = false) => {
    const queue = getOfflineTxQueue();
    const count = queue.length;

    document.querySelectorAll('.pos-offline-sync-container').forEach(container => {
        if (count === 0 && !isSyncing) {
            container.innerHTML = '';
            container.classList.add('hidden');
            return;
        }

        container.classList.remove('hidden');
        if (isSyncing) {
            container.innerHTML = `
                <div class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-amber-500/20 text-amber-300 border border-amber-500/30 text-[10px] font-bold shadow-xs">
                    <i class="fa-solid fa-arrows-rotate animate-spin text-[10px]"></i>
                    <span class="hidden sm:inline">Sinkron (${count})...</span>
                    <span class="sm:hidden">${count}</span>
                </div>
            `;
        } else {
            container.innerHTML = `
                <button type="button" onclick="window.posSyncOfflineTransactions()" class="inline-flex items-center gap-1.5 px-2 sm:px-2.5 py-1 rounded-xl bg-amber-500/25 hover:bg-amber-500/40 text-amber-200 hover:text-white border border-amber-400/40 text-[10px] font-bold cursor-pointer active:scale-95 transition-all shadow-xs" title="${count} transaksi offline belum disinkronkan ke server. Klik untuk sinkronisasi sekarang.">
                    <i class="fa-solid fa-cloud-arrow-up text-amber-400"></i>
                    <span class="hidden sm:inline">${count} Antrean Offline</span>
                    <span class="sm:hidden font-black">${count}</span>
                </button>
            `;
        }
    });
};

export const updateNetworkStatusUI = (isOnline) => {
    document.querySelectorAll('.pos-network-status-badge').forEach(badge => {
        if (isOnline) {
            badge.className = 'pos-network-status-badge hidden sm:inline-flex items-center gap-1.5 text-[10px] font-bold text-emerald-400 bg-emerald-950/40 px-2.5 py-1 rounded-lg border border-emerald-500/30';
            badge.innerHTML = `<span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span><span>Online</span>`;
        } else {
            badge.className = 'pos-network-status-badge inline-flex items-center gap-1.5 text-[10px] font-bold text-rose-300 bg-rose-950/60 px-2.5 py-1 rounded-lg border border-rose-500/40 animate-pulse';
            badge.innerHTML = `<i class="fa-solid fa-wifi-slash text-[10px] text-rose-400"></i><span>Offline</span>`;
        }
    });
};

let _posNetworkListenersAttached = false;
export const initPOSNetworkMonitoring = () => {
    const isOnline = typeof navigator !== 'undefined' ? navigator.onLine : true;
    updateNetworkStatusUI(isOnline);
    renderOfflineQueueBadge();

    if (_posNetworkListenersAttached) return;
    _posNetworkListenersAttached = true;

    window.addEventListener('online', () => {
        updateNetworkStatusUI(true);
        showToast('Koneksi internet terhubung kembali. Memulai auto-sync transaksi kasir...', 'info');
        posSyncOfflineTransactions(true);
    });

    window.addEventListener('offline', () => {
        updateNetworkStatusUI(false);
        showToast('Koneksi terputus. Mode POS Offline aktif (transaksi kasir aman di antrean lokal).', 'warning');
    });

    // Auto sync jika sedang online saat startup
    if (isOnline) {
        const queue = getOfflineTxQueue();
        if (queue.length > 0) {
            setTimeout(() => { posSyncOfflineTransactions(true); }, 2500);
        }
    }
};

// ─── Layout Generator Terpadu ────────────────────────────────
const buildPOSLayout = ({ isStorefront }) => {
    const cashierSession = typeof window.getCashierSession === 'function' ? window.getCashierSession() : null;
    const cashierName = cashierSession?.name || (isStorefront ? 'Kasir' : 'Admin Seller');
    const storeName   = esc(appData.store?.name || 'Toko Putri');

    const headerHTML = isStorefront
        ? `
        <!-- STOREFRONT POS HEADER (Proteksi Anti-Tabrakan Status Bar / Safe-Area) -->
        <header class="glass-header pos-storefront-header sticky top-0 z-30 flex shrink-0 items-center justify-between text-white shadow-md">
            <div class="flex items-center gap-2.5 min-w-0">
                <button onclick="window.exitPOSMode()" class="w-8 h-8 rounded-xl bg-black/15 hover:bg-black/25 text-white flex items-center justify-center text-xs transition-all active:scale-90 cursor-pointer shrink-0" title="Kembali ke Etalase Toko">
                    <i class="fa-solid fa-arrow-left"></i>
                </button>
                <div class="flex items-center gap-2 min-w-0">
                    <div class="w-8 h-8 rounded-xl flex items-center justify-center text-white text-sm shrink-0 shadow-xs bg-black/20">
                        <i class="fa-solid fa-cash-register"></i>
                    </div>
                    <div class="min-w-0">
                        <h1 class="text-xs font-black uppercase tracking-wider leading-none text-white truncate">${storeName}</h1>
                        <div class="flex items-center gap-1.5 mt-1">
                            <span class="w-1.5 h-1.5 rounded-full bg-emerald-300 animate-pulse"></span>
                            <span class="text-[10px] text-white/90 font-medium truncate">${esc(cashierName)}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex items-center gap-1.5 sm:gap-2 shrink-0 whitespace-nowrap">
                <span class="pos-network-status-badge hidden sm:inline-flex items-center gap-1.5 text-[10px] font-bold text-emerald-400 bg-emerald-950/40 px-2.5 py-1 rounded-lg border border-emerald-500/30">
                    <span class="relative flex h-2 w-2">
                        <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span class="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                    <span>Online</span>
                </span>
                <div class="pos-offline-sync-container hidden items-center shrink-0"></div>
                <span id="pos-live-clock" class="hidden sm:inline-block text-[10px] font-mono text-white/90 px-2.5 py-1 bg-black/15 rounded-lg border border-white/20">--:--:--</span>
                <span class="hidden md:inline-flex items-center gap-1.5 text-[10px] font-bold text-white bg-black/20 px-2.5 py-1 rounded-lg">
                    <i class="fa-solid fa-barcode text-xs"></i> USB Scanner Aktif
                </span>
                <div id="pos-shift-btn-storefront" class="flex items-center shrink-0"></div>
                <div id="pos-held-btn-storefront" class="flex items-center shrink-0"></div>
                <button onclick="window.openShoppingGuideModal && window.openShoppingGuideModal('pos')" class="w-8 h-8 rounded-xl bg-black/15 hover:bg-black/25 text-white flex items-center justify-center text-xs transition-all active:scale-90 cursor-pointer shrink-0" title="Buku Panduan Kasir POS">
                    <i class="fa-solid fa-circle-question"></i>
                </button>
                <button onclick="window.cashierLogout()" class="h-8 px-2.5 sm:px-3 rounded-xl bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold inline-flex items-center gap-1.5 transition-all active:scale-95 shadow-xs cursor-pointer whitespace-nowrap shrink-0" title="Keluar Mode Kasir">
                    <i class="fa-solid fa-power-off text-xs"></i>
                    <span class="hidden sm:inline">Keluar</span>
                </button>
            </div>
        </header>`
        : `
        <!-- ADMIN POS ACTION STRIP (lega, nyaman, presisi tinggi, anti-wrap di mobile) -->
        <div class="min-h-[46px] sm:min-h-[50px] py-1.5 sm:py-2 px-3 sm:px-4 shrink-0 bg-slate-50/80 dark:bg-slate-800/60 border-b border-slate-200/80 dark:border-slate-800 flex items-center justify-between text-xs overflow-hidden gap-2">
            <div class="flex items-center gap-1.5 sm:gap-2 shrink-0 whitespace-nowrap">
                <span class="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-emerald-500 animate-pulse shrink-0 shadow-xs"></span>
                <span class="text-xs font-black uppercase tracking-wider text-slate-800 dark:text-slate-100 whitespace-nowrap">
                    <span class="hidden sm:inline">Terminal </span>POS
                </span>
                <span class="hidden sm:inline text-slate-300 dark:text-slate-600">•</span>
                <span id="pos-live-clock" class="hidden sm:inline text-[11px] font-mono font-bold text-slate-500 dark:text-slate-400">--:--:--</span>
            </div>
            <div class="flex items-center gap-1.5 sm:gap-2 shrink-0 whitespace-nowrap">
                <span class="pos-network-status-badge hidden sm:inline-flex items-center gap-1.5 text-[10px] font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 px-2.5 py-1 rounded-lg border border-emerald-200 dark:border-emerald-800">
                    <span class="relative flex h-2 w-2">
                        <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                        <span class="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                    <span>Online</span>
                </span>
                <div class="pos-offline-sync-container hidden items-center shrink-0"></div>
                <span class="hidden md:inline-flex items-center gap-1.5 text-[10px] font-bold text-slate-500 dark:text-slate-400 whitespace-nowrap">
                    <i class="fa-solid fa-barcode text-xs"></i> Scanner Otomatis
                </span>
                <div id="pos-shift-btn-admin" class="flex items-center shrink-0"></div>
                <div id="pos-held-btn-admin" class="flex items-center shrink-0"></div>
                <button onclick="if(typeof window.openPrinterSettingsModal==='function') window.openPrinterSettingsModal();" class="h-8 px-2 sm:px-2.5 rounded-xl bg-white hover:bg-slate-100 dark:bg-slate-800 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 text-xs font-bold inline-flex items-center gap-1.5 transition-all cursor-pointer whitespace-nowrap shrink-0 shadow-2xs active:scale-95" title="Pengaturan Printer Kasir & Thermal">
                    <i class="fa-solid fa-print text-xs text-sky-500"></i>
                    <span class="hidden sm:inline">Printer</span>
                </button>
                <button onclick="window.openShoppingGuideModal && window.openShoppingGuideModal('pos')" class="h-8 px-2 sm:px-2.5 rounded-xl bg-white hover:bg-slate-100 dark:bg-slate-800 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 text-xs font-bold inline-flex items-center gap-1.5 transition-all cursor-pointer whitespace-nowrap shrink-0 shadow-2xs active:scale-95" title="Buku Panduan Kasir POS">
                    <i class="fa-solid fa-circle-question text-xs text-[var(--color-primary)]"></i>
                    <span class="hidden sm:inline">Panduan POS</span>
                </button>
                <button onclick="window.posClearCart()" class="h-8 px-2.5 sm:px-3 rounded-xl bg-white hover:bg-rose-50 dark:bg-slate-800 dark:hover:bg-rose-950/30 border border-slate-200 dark:border-slate-700 text-rose-500 text-xs font-bold inline-flex items-center gap-1.5 transition-all cursor-pointer whitespace-nowrap shrink-0 shadow-2xs active:scale-95" title="Reset Keranjang Kasir">
                    <i class="fa-solid fa-trash-can text-xs"></i>
                    <span class="inline">Reset</span>
                </button>
            </div>
        </div>`;

    return `
    <div class="flex flex-col h-full w-full overflow-hidden bg-slate-50/50 dark:bg-slate-900/40 relative">
        ${headerHTML}

        <!-- MAIN SPLIT WORKSPACE: Desktop side-by-side, Mobile full catalog -->
        <div class="flex flex-1 overflow-hidden">
            <!-- PANEL KIRI: KATALOG (Mobile 100%, Desktop 63%-65%) -->
            <div class="flex flex-col flex-1 lg:w-[63%] xl:w-[65%] border-r border-slate-200/80 dark:border-slate-800 overflow-hidden bg-slate-50/50 dark:bg-slate-900/30">
                <!-- Search & Category Bar with View Switcher -->
                <div class="p-2.5 sm:p-3.5 bg-white dark:bg-slate-900 border-b border-slate-200/80 dark:border-slate-800 space-y-2 shrink-0 shadow-2xs">
                    <div class="flex items-center gap-2">
                        <div class="relative flex-1 min-w-0">
                            <i class="fa-solid fa-magnifying-glass absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xs pointer-events-none"></i>
                            <input id="pos-search-input" type="text" placeholder="Cari nama, SKU, barcode... [F2]" 
                                class="w-full pl-8 pr-8 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs sm:text-sm font-medium text-slate-800 dark:text-slate-100 focus:outline-none focus:border-[var(--color-primary)] focus:bg-white dark:focus:bg-slate-900 transition-all"
                                oninput="window.posSearchFn(this.value)"
                                onkeydown="window.handlePOSSearchKeydown(event)">
                            <button type="button" onclick="window.posClearSearch()" class="pos-search-clear-btn hidden absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-rose-500 text-xs p-1 cursor-pointer transition-colors active:scale-90" title="Hapus pencarian (Esc)">
                                <i class="fa-solid fa-circle-xmark"></i>
                            </button>
                        </div>
                        <!-- Tombol Scan Barcode Kamera HP / Laptop (F9) -->
                        <button onclick="window.openPOSCameraScanner()" class="h-9 px-2.5 sm:px-3 rounded-xl bg-[rgba(var(--color-primary-rgb),0.08)] hover:bg-[rgba(var(--color-primary-rgb),0.15)] text-[var(--color-primary)] text-xs font-bold flex items-center gap-1.5 transition-all active:scale-95 border border-[rgba(var(--color-primary-rgb),0.25)] shrink-0 cursor-pointer shadow-2xs" title="Scan Barcode Kamera (F9)">
                            <i class="fa-solid fa-camera text-xs"></i>
                            <span class="hidden sm:inline">Scan (F9)</span>
                        </button>
                        <!-- View Switcher (Grid vs List) -->
                        <div class="flex items-center p-0.5 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl shrink-0">
                            <button id="pos-view-btn-grid" onclick="window.setPOSViewMode('grid')" class="w-8 h-8 rounded-lg flex items-center justify-center text-xs transition-all cursor-pointer ${posCatalogViewMode === 'grid' ? 'text-white shadow-xs' : 'text-slate-500 hover:text-slate-800 dark:text-slate-400'}" style="${posCatalogViewMode === 'grid' ? 'background:linear-gradient(135deg, var(--color-primary-light,#e1b858) 0%, var(--color-primary,#c59b27) 60%, var(--color-primary-dark,#a87f1b) 100%)' : ''}" title="Tampilan Grid Foto">
                                <i class="fa-solid fa-grip"></i>
                            </button>
                            <button id="pos-view-btn-list" onclick="window.setPOSViewMode('list')" class="w-8 h-8 rounded-lg flex items-center justify-center text-xs transition-all cursor-pointer ${posCatalogViewMode === 'list' ? 'text-white shadow-xs' : 'text-slate-500 hover:text-slate-800 dark:text-slate-400'}" style="${posCatalogViewMode === 'list' ? 'background:linear-gradient(135deg, var(--color-primary-light,#e1b858) 0%, var(--color-primary,#c59b27) 60%, var(--color-primary-dark,#a87f1b) 100%)' : ''}" title="Tampilan List Baris Kompak">
                                <i class="fa-solid fa-list-ul"></i>
                            </button>
                        </div>
                    </div>
                    <!-- Kategori Chips -->
                    <div id="pos-cat-filter" class="flex gap-1.5 overflow-x-auto hide-scrollbar pb-0.5"></div>
                    <div id="pos-subcat-filter" class="w-full hidden"></div>
                    <!-- Keyboard Shortcuts Quick Bar (Hanya Desktop >= sm) -->
                    <div class="hidden sm:flex items-center justify-between text-[10px] text-slate-400 dark:text-slate-500 pt-1.5 border-t border-slate-100 dark:border-slate-800/80 px-0.5 select-none">
                        <div class="flex items-center gap-1.5 overflow-x-auto hide-scrollbar py-0.5">
                            <button type="button" onclick="document.getElementById('pos-search-input')?.focus()" class="pos-shortcut-chiclet" title="Cari produk / barcode [F1 / F2]"><kbd class="pos-keycap">F1</kbd><span>Cari</span></button>
                            <button type="button" onclick="window.openPayModal()" class="pos-shortcut-chiclet" title="Proses pembayaran [F4]"><kbd class="pos-keycap">F4</kbd><span>Bayar</span></button>
                            <button type="button" onclick="window.reprintLastPOSReceipt && window.reprintLastPOSReceipt()" class="pos-shortcut-chiclet" title="Cetak ulang struk terakhir [F5]"><kbd class="pos-keycap">F5</kbd><span>Ulang</span></button>
                            <button type="button" onclick="window.posHoldCurrentCart()" class="pos-shortcut-chiclet" title="Tahan transaksi [F6]"><kbd class="pos-keycap">F6</kbd><span>Tahan</span></button>
                            <button type="button" onclick="document.querySelector('.pos-disc-val-input')?.focus()" class="pos-shortcut-chiclet" title="Fokus input diskon [F7]"><kbd class="pos-keycap">F7</kbd><span>Diskon</span></button>
                            <button type="button" onclick="window.openPOSHeldModal()" class="pos-shortcut-chiclet" title="Buka transaksi tertahan [F8]"><kbd class="pos-keycap">F8</kbd><span>Tertahan</span></button>
                            <button type="button" onclick="window.openShiftSummaryModal ? window.openShiftSummaryModal() : (window.openPOSOpenShiftModal && window.openPOSOpenShiftModal())" class="pos-shortcut-chiclet" title="Ringkasan Shift X/Z [F10]"><kbd class="pos-keycap">F10</kbd><span>Shift</span></button>
                            <button type="button" onclick="window.openPOSCashMovementModal && window.openPOSCashMovementModal()" class="pos-shortcut-chiclet" title="Catat Arus Kas Laci [F11]"><kbd class="pos-keycap">F11</kbd><span>Kas +/-</span></button>
                            <button type="button" onclick="window.openPOSCameraScanner()" class="pos-shortcut-chiclet" title="Scan kamera [F9]"><kbd class="pos-keycap">F9</kbd><span>Kamera</span></button>
                            <button type="button" onclick="document.getElementById('pos-search-input')?.focus()" class="pos-shortcut-chiclet" title="Fokus cepat [Spasi]"><kbd class="pos-keycap">Space</kbd><span>Barcode</span></button>
                            <button type="button" onclick="window.posClearSearch()" class="pos-shortcut-chiclet" title="Batal / Tutup [Esc]"><kbd class="pos-keycap">Esc</kbd><span>Batal</span></button>
                        </div>
                    </div>
                </div>

                <!-- Product Catalog Container -->
                <div id="pos-catalog-grid" class="${posCatalogViewMode === 'list' ? 'pos-catalog-list-mode' : 'pos-catalog-grid-mode'}"></div>
            </div>

            <!-- PANEL KANAN: BILLING & KERANJANG (Hanya Desktop >= lg) -->
            <div class="hidden lg:flex flex-col lg:w-[37%] xl:w-[35%] bg-white dark:bg-slate-900 border-l border-slate-200/80 dark:border-slate-800 overflow-hidden shrink-0 shadow-sm">
                <!-- Header Keranjang Desktop -->
                <div class="px-4 py-3 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between shrink-0 bg-slate-50/70 dark:bg-slate-800/40">
                    <div class="flex items-center gap-2 min-w-0">
                        <div class="w-7 h-7 rounded-lg flex items-center justify-center text-xs text-white shadow-xs shrink-0" style="background:var(--color-primary)">
                            <i class="fa-solid fa-cart-shopping"></i>
                        </div>
                        <h3 class="text-xs font-black uppercase tracking-wider text-slate-800 dark:text-white truncate whitespace-nowrap leading-none">
                            Keranjang (<span class="pos-item-count-target">0</span>)
                        </h3>
                    </div>
                    <div class="flex items-center gap-1.5 shrink-0">
                        <button onclick="window.posHoldCurrentCart()" class="pos-hold-btn-target text-[10px] font-bold text-slate-700 dark:text-slate-200 bg-white hover:bg-slate-100 dark:bg-slate-800 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 px-2.5 py-1 rounded-lg transition-all cursor-pointer flex items-center gap-1.5 whitespace-nowrap active:scale-95 shadow-2xs" title="Tahan transaksi sementara (F6)">
                            <i class="fa-solid fa-pause text-amber-500 text-[9px]"></i><span>Tahan</span>
                        </button>
                        <button onclick="window.posClearCart()" class="text-[10px] font-bold text-slate-700 dark:text-slate-200 bg-white hover:bg-slate-100 dark:bg-slate-800 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 px-2.5 py-1 rounded-lg transition-all cursor-pointer flex items-center gap-1.5 shrink-0 whitespace-nowrap active:scale-95 shadow-2xs" title="Kosongkan keranjang">
                            <i class="fa-solid fa-trash-can text-rose-500 text-[9px]"></i><span>Kosongkan</span>
                        </button>
                    </div>
                </div>

                <!-- Items List Desktop -->
                <div class="pos-cart-items-target flex-1 overflow-y-auto p-3 space-y-2"></div>

                <!-- Summary & Bayar Desktop -->
                <div class="p-4 border-t border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/60 shrink-0 space-y-2.5">
                    <!-- Breakdown Ringkasan & Diskon (Hanya muncul saat keranjang ada isi agar bebas sesak saat kosong) -->
                    <div class="pos-cart-breakdown space-y-2.5" style="display:none">
                        <div class="flex justify-between text-xs text-slate-500 font-medium">
                            <span>Subtotal Item</span>
                            <span class="pos-subtotal-target font-bold text-slate-800 dark:text-slate-200">Rp 0</span>
                        </div>
                        <div class="pos-tax-breakdown-row flex justify-between text-xs font-medium" style="display:none">
                            <span class="pos-tax-label-target text-slate-500">PPN (11%)</span>
                            <span class="pos-tax-amt-target font-bold font-mono text-amber-600 dark:text-amber-400">Rp 0</span>
                        </div>
                        <div class="pos-hpp-margin-row flex justify-between text-xs text-slate-500 font-medium" style="display:none">
                            <span class="flex items-center gap-1"><i class="fa-solid fa-coins text-amber-500 text-[10px]"></i> Total Modal (HPP)</span>
                            <span class="pos-total-hpp-target font-bold text-amber-600 dark:text-amber-400">Rp 0</span>
                        </div>
                        <div class="pos-hpp-margin-row flex justify-between text-xs text-slate-500 font-medium" style="display:none">
                            <span class="flex items-center gap-1"><i class="fa-solid fa-arrow-trend-up text-emerald-500 text-[10px]"></i> Estimasi Laba</span>
                            <span class="pos-total-margin-target font-bold text-emerald-600 dark:text-emerald-400">Rp 0</span>
                        </div>
                        <!-- Smart Diskon Transaksi Kasir (Rp / %) -->
                        <div class="space-y-1.5 p-2.5 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200/80 dark:border-slate-700/60 text-xs transition-colors" style="border-color:rgba(var(--color-primary-rgb),0.25)">
                            <div class="flex items-center justify-between">
                                <span class="text-slate-700 dark:text-slate-200 font-bold flex items-center gap-1.5">
                                    <div class="w-5 h-5 rounded-md flex items-center justify-center text-[10px] text-white shrink-0 shadow-2xs" style="background:var(--color-primary)">
                                        <i class="fa-solid fa-tags"></i>
                                    </div>
                                    <span>Diskon Transaksi</span>
                                </span>
                                <div class="flex items-center bg-slate-200/80 dark:bg-slate-700/80 rounded-lg p-0.5 text-[10px]">
                                    <button onclick="window.posSetDiscountType('rp')" class="pos-disc-type-rp px-2.5 py-0.5 rounded-md transition-all cursor-pointer font-black text-white shadow-xs text-[10px]" style="background:var(--color-primary)">Rp</button>
                                    <button onclick="window.posSetDiscountType('percent')" class="pos-disc-type-pct px-2.5 py-0.5 rounded-md transition-all cursor-pointer font-bold text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 text-[10px]">%</button>
                                </div>
                            </div>
                            <div class="flex items-center gap-2">
                                <div class="flex-1 relative">
                                    <span class="pos-disc-prefix absolute left-2.5 top-1/2 -translate-y-1/2 text-[10px] font-black" style="color:var(--color-primary)">Rp</span>
                                    <input type="number" min="0" placeholder="0" class="pos-disc-val-input w-full border border-slate-200 dark:border-slate-700 rounded-lg pl-8 pr-2.5 py-1 text-right text-xs font-mono font-bold bg-white dark:bg-slate-800 focus:outline-none focus:border-[var(--color-primary)] transition-all" oninput="window.posSetDiscountVal(this.value)">
                                </div>
                                <div class="pos-disc-preview-target hidden text-[10px] font-black text-rose-500 whitespace-nowrap min-w-[70px] text-right"></div>
                            </div>
                            <div class="pos-disc-chips-target flex gap-1 overflow-x-auto hide-scrollbar pt-0.5"></div>
                        </div>
                    </div>
                    <div class="flex justify-between items-center pt-2.5 border-t border-slate-200/80 dark:border-slate-800">
                        <div>
                            <p class="text-[9px] uppercase tracking-wider font-bold text-slate-400">Total Akhir</p>
                            <p class="pos-total-target text-2xl font-black font-mono tracking-tight" style="color:var(--color-primary)">Rp 0</p>
                        </div>
                        <span class="inline-flex items-center gap-1.5 text-[10px] font-bold px-2.5 py-1 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/25">
                            <span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> Siap Bayar
                        </span>
                    </div>
                    <button onclick="window.openPayModal()" class="pos-pay-btn-target w-full py-3.5 rounded-2xl text-white font-black text-sm shadow-xl disabled:opacity-40 disabled:cursor-not-allowed active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer hover:brightness-105" style="background:linear-gradient(135deg, var(--color-primary-light,#e1b858) 0%, var(--color-primary,#c59b27) 50%, var(--color-primary-dark,#a87f1b) 100%);box-shadow:0 4px 14px rgba(var(--color-primary-rgb),0.35)">
                        <span class="pos-keycap-on-btn">F4</span>
                        <i class="fa-solid fa-cash-register"></i>
                        <span class="btn-text">PROSES PEMBAYARAN</span>
                    </button>
                </div>
            </div>
        </div>

        <!-- FLOATING CART BAR (Khusus Mobile < lg saat keranjang ada isi with safe-area) -->
        <div id="pos-mobile-floating-bar" class="lg:hidden fixed bottom-[max(0.75rem,env(safe-area-inset-bottom))] left-3 right-3 z-40 transition-all duration-300 transform translate-y-32 opacity-0 pointer-events-none">
            <div class="backdrop-blur-xl bg-slate-900/95 dark:bg-slate-950/95 text-white p-3 rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.35)] flex items-center justify-between border border-white/15 dark:border-white/10 cursor-pointer active:scale-[0.99] transition-all" onclick="window.openPOSCartDrawer()">
                <div class="flex items-center gap-2.5">
                    <div class="relative w-10 h-10 rounded-xl flex items-center justify-center text-white text-sm font-bold shadow-md shrink-0" style="background:linear-gradient(135deg, var(--color-primary-light,#34d399), var(--color-primary,#10b981))">
                        <i class="fa-solid fa-cart-shopping"></i>
                        <span class="pos-item-count-target absolute -top-1.5 -right-1.5 min-w-5 h-5 px-1 rounded-full bg-rose-500 text-white text-[9px] font-black flex items-center justify-center border-2 border-slate-900 shadow-xs">0</span>
                    </div>
                    <div>
                        <div class="flex items-center gap-1.5">
                            <span class="text-[11px] font-bold text-slate-300">Total Transaksi</span>
                        </div>
                        <p class="pos-total-target text-sm font-black text-emerald-400 dark:text-emerald-300">Rp 0</p>
                    </div>
                </div>
                <button onclick="event.stopPropagation(); window.openPOSCartDrawer();" class="px-4 py-2.5 rounded-xl font-black text-xs uppercase tracking-wider text-white shadow-lg active:scale-95 transition-all flex items-center gap-1.5 shrink-0" style="background:linear-gradient(135deg, var(--color-primary-light,#34d399), var(--color-primary,#10b981)); box-shadow:0 4px 14px rgba(var(--color-primary-rgb),0.35)">
                    <span>Lihat Keranjang</span>
                    <i class="fa-solid fa-chevron-up text-xs"></i>
                </button>
            </div>
        </div>

        <!-- MOBILE CART DRAWER (Full-Height Mobile Cart — Bersih Tanpa Celah Hitam) -->
        <div id="pos-mobile-cart-drawer" class="lg:hidden absolute inset-0 z-50 transition-all duration-300 opacity-0 pointer-events-none bg-white dark:bg-slate-900 flex flex-col">
            <div id="pos-mobile-cart-sheet" class="w-full h-full bg-white dark:bg-slate-900 flex flex-col transition-transform duration-300 transform translate-y-full overflow-hidden">
                <!-- Header Drawer Mobile dengan Safe-Area Inset Proteksi -->
                <div class="pos-mobile-cart-header border-b border-slate-100 dark:border-slate-800 flex items-center justify-between shrink-0 bg-slate-50/90 dark:bg-slate-800/80">
                    <div class="flex items-center gap-2 shrink-0">
                        <div class="w-7 h-7 rounded-lg flex items-center justify-center text-xs text-white shrink-0 shadow-xs" style="background:var(--color-primary)"><i class="fa-solid fa-cart-shopping"></i></div>
                        <h3 class="text-xs font-black uppercase tracking-tight text-slate-800 dark:text-white whitespace-nowrap leading-none">
                            Keranjang (<span class="pos-item-count-target">0</span>)
                        </h3>
                    </div>
                    <div class="flex items-center gap-1.5 shrink-0">
                        <button onclick="window.posHoldCurrentCart()" class="pos-hold-btn-target text-[10px] font-bold text-slate-700 dark:text-slate-200 bg-white hover:bg-slate-100 dark:bg-slate-800 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 px-2 py-1 rounded-lg transition-all flex items-center gap-1 whitespace-nowrap cursor-pointer active:scale-95 shadow-2xs" title="Tahan transaksi sementara (F6)">
                            <i class="fa-solid fa-pause text-amber-500 text-[9px]"></i><span>Tahan</span>
                        </button>
                        <button onclick="window.posClearCart()" class="text-[10px] font-bold text-slate-700 dark:text-slate-200 bg-white hover:bg-slate-100 dark:bg-slate-800 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 px-2 py-1 rounded-lg transition-all flex items-center gap-1 whitespace-nowrap cursor-pointer active:scale-95 shadow-2xs" title="Kosongkan keranjang">
                            <i class="fa-solid fa-trash-can text-rose-500 text-[9px]"></i><span>Kosongkan</span>
                        </button>
                        <button onclick="window.closePOSCartDrawer()" class="w-7 h-7 rounded-lg bg-white hover:bg-slate-100 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-500 hover:text-slate-800 dark:hover:text-white border border-slate-200 dark:border-slate-700 text-xs font-bold flex items-center justify-center transition-all cursor-pointer shadow-2xs" title="Tutup Keranjang">
                            <i class="fa-solid fa-xmark text-[11px]"></i>
                        </button>
                    </div>
                </div>

                <!-- Items Container -->
                <div class="pos-cart-items-target flex-1 overflow-y-auto p-3 space-y-2"></div>

                <!-- Footer Summary & Pay -->
                <div class="p-3.5 pb-[calc(1rem+env(safe-area-inset-bottom))] border-t border-slate-100 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-950/80 space-y-2 shrink-0">
                    <!-- Breakdown Ringkasan & Diskon Mobile (Hanya muncul saat keranjang ada isi agar bebas sesak saat kosong) -->
                    <div class="pos-cart-breakdown space-y-2" style="display:none">
                        <div class="flex justify-between text-xs text-slate-500 font-medium">
                            <span>Subtotal Item</span>
                            <span class="pos-subtotal-target font-bold text-slate-700 dark:text-slate-200">Rp 0</span>
                        </div>
                        <div class="pos-tax-breakdown-row flex justify-between text-xs font-medium" style="display:none">
                            <span class="pos-tax-label-target text-slate-500">PPN (11%)</span>
                            <span class="pos-tax-amt-target font-bold font-mono text-amber-600 dark:text-amber-400">Rp 0</span>
                        </div>
                        <div class="pos-hpp-margin-row flex justify-between text-xs text-slate-500 font-medium" style="display:none">
                            <span class="flex items-center gap-1"><i class="fa-solid fa-coins text-amber-500 text-[10px]"></i> Total Modal (HPP)</span>
                            <span class="pos-total-hpp-target font-bold text-amber-600 dark:text-amber-400">Rp 0</span>
                        </div>
                        <div class="pos-hpp-margin-row flex justify-between text-xs text-slate-500 font-medium" style="display:none">
                            <span class="flex items-center gap-1"><i class="fa-solid fa-arrow-trend-up text-emerald-500 text-[10px]"></i> Estimasi Laba</span>
                            <span class="pos-total-margin-target font-bold text-emerald-600 dark:text-emerald-400">Rp 0</span>
                        </div>
                        <!-- Smart Diskon Transaksi Kasir (Rp / %) di Mobile Drawer -->
                        <div class="space-y-1.5 p-2 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200/80 dark:border-slate-700/60 text-xs transition-colors" style="border-color:rgba(var(--color-primary-rgb),0.25)">
                            <div class="flex items-center justify-between">
                                <span class="text-slate-700 dark:text-slate-200 font-bold flex items-center gap-1.5">
                                    <div class="w-5 h-5 rounded-md flex items-center justify-center text-[10px] text-white shrink-0 shadow-2xs" style="background:var(--color-primary)">
                                        <i class="fa-solid fa-tags"></i>
                                    </div>
                                    <span>Diskon Transaksi</span>
                                </span>
                                <div class="flex items-center bg-slate-200/80 dark:bg-slate-700/80 rounded-lg p-0.5 text-[10px]">
                                    <button onclick="window.posSetDiscountType('rp')" class="pos-disc-type-rp px-2.5 py-0.5 rounded-md transition-all cursor-pointer font-black text-white shadow-xs text-[10px]" style="background:var(--color-primary)">Rp</button>
                                    <button onclick="window.posSetDiscountType('percent')" class="pos-disc-type-pct px-2.5 py-0.5 rounded-md transition-all cursor-pointer font-bold text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 text-[10px]">%</button>
                                </div>
                            </div>
                            <div class="flex items-center gap-2">
                                <div class="flex-1 relative">
                                    <span class="pos-disc-prefix absolute left-2.5 top-1/2 -translate-y-1/2 text-[10px] font-black" style="color:var(--color-primary)">Rp</span>
                                    <input type="number" min="0" placeholder="0" class="pos-disc-val-input w-full border border-slate-200 dark:border-slate-700 rounded-lg pl-8 pr-2.5 py-1 text-right text-xs font-mono font-bold bg-white dark:bg-slate-800 focus:outline-none focus:border-[var(--color-primary)] transition-all" oninput="window.posSetDiscountVal(this.value)">
                                </div>
                                <div class="pos-disc-preview-target hidden text-[10px] font-black text-rose-500 whitespace-nowrap min-w-[70px] text-right"></div>
                            </div>
                            <div class="pos-disc-chips-target flex gap-1 overflow-x-auto hide-scrollbar pt-0.5"></div>
                        </div>
                    </div>
                    <div class="flex justify-between items-center pt-1.5 border-t border-slate-200/80 dark:border-slate-800">
                        <span class="text-xs font-black uppercase tracking-wider text-slate-700 dark:text-white">Total Tagihan</span>
                        <span class="pos-total-target text-base sm:text-lg font-black font-mono" style="color:var(--color-primary)">Rp 0</span>
                    </div>
                    <button onclick="window.closePOSCartDrawer(); window.openPayModal();" class="pos-pay-btn-target w-full py-3.5 rounded-2xl text-white font-black text-xs sm:text-sm shadow-xl disabled:opacity-40 disabled:cursor-not-allowed active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer hover:brightness-105" style="background:linear-gradient(135deg, var(--color-primary-light,#e1b858) 0%, var(--color-primary,#c59b27) 50%, var(--color-primary-dark,#a87f1b) 100%);box-shadow:0 4px 14px rgba(var(--color-primary-rgb),0.35)">
                        <span class="pos-keycap-on-btn">F4</span>
                        <i class="fa-solid fa-cash-register"></i>
                        <span class="btn-text">LANJUT KE PEMBAYARAN</span>
                    </button>
                </div>
            </div>
        </div>
    </div>
    `;
};

// ─── Render Storefront Standalone View ───────────────────────
export const renderPOSStorefront = () => {
    try {
        posSearch          = '';
        posCatFilterVal    = '';
        posSubCatFilterVal = '';
        posCart            = [];
        posGlobalDisc      = 0;

        const viewEl = el('view-pos-cashier');
        if (!viewEl) return;

        // Bersihkan kontainer admin-content jika sebelumnya berada di admin-pos-mode untuk mencegah duplikasi ID
        const adminContent = el('admin-content');
        const adminView = el('view-admin');
        if (adminContent && adminView?.classList.contains('admin-pos-mode')) {
            adminContent.innerHTML = '';
            adminView.classList.remove('admin-pos-mode');
        }

        viewEl.innerHTML = buildPOSLayout({ isStorefront: true });
        renderCatalog();
        renderCart();
        renderHeldBadges();
        renderShiftHeaderBadge();
        initPOSNetworkMonitoring();
        renderOfflineQueueBadge();
        initBarcodeListener();
        startClock();
        ensureCustomersLoaded(); // Prefetch member data
        exposeToWindow();

        // Sinkronkan dan periksa shift kasir aktif dari cloud
        if (typeof syncActiveShiftFromCloud === 'function') {
            syncActiveShiftFromCloud().then(activeShift => {
                if (!activeShift || activeShift.status !== 'open') {
                    openPOSOpenShiftModal();
                }
            }).catch(() => {
                if (!isShiftActive()) openPOSOpenShiftModal();
            });
        } else {
            setTimeout(() => {
                if (!isShiftActive()) {
                    openPOSOpenShiftModal();
                }
            }, 350);
        }
    } catch (err) {
        console.error('Gagal render POS Storefront:', err);
    }
};

// ─── Render di Admin CMS ────────────────────────────────────
export const renderPOS = () => {
    try {
        posSearch          = '';
        posCatFilterVal    = '';
        posSubCatFilterVal = '';

        const adminView = el('view-admin');
        if (adminView) adminView.classList.add('admin-pos-mode');

        // Bersihkan kontainer storefront agar elemen duplikat ID (#pos-catalog-grid, #pos-cat-filter, dll) tidak bertabrakan
        const sfView = el('view-pos-cashier');
        if (sfView) sfView.innerHTML = '';

        const adminContent = el('admin-content');
        if (!adminContent) return;

        // Kontainer mengambil 100% tinggi penuh flex viewport tanpa scroll ganda, ber-rounded dan berspasi lega
        setH('admin-content', `
            <div class="h-full w-full flex flex-col overflow-hidden rounded-2xl sm:rounded-3xl border border-slate-200/90 dark:border-slate-800 shadow-md bg-white dark:bg-slate-900 min-h-0">
                ${buildPOSLayout({ isStorefront: false })}
            </div>
        `);
        renderCatalog();
        renderCart();
        renderHeldBadges();
        renderShiftHeaderBadge();
        initPOSNetworkMonitoring();
        renderOfflineQueueBadge();
        initBarcodeListener();
        startClock();
        ensureCustomersLoaded(); // Prefetch member data
        exposeToWindow();

        // Sinkronkan dan periksa shift kasir aktif dari cloud
        if (typeof syncActiveShiftFromCloud === 'function') {
            syncActiveShiftFromCloud().then(activeShift => {
                if (!activeShift || activeShift.status !== 'open') {
                    openPOSOpenShiftModal();
                }
            }).catch(() => {
                if (!isShiftActive()) openPOSOpenShiftModal();
            });
        } else {
            setTimeout(() => {
                if (!isShiftActive()) {
                    openPOSOpenShiftModal();
                }
            }, 350);
        }
    } catch (err) {
        console.error('Gagal render POS Admin:', err);
        const adminContent = el('admin-content');
        if (adminContent) {
            adminContent.innerHTML = `
                <div class="h-full w-full flex flex-col items-center justify-center p-6 text-center">
                    <i class="fa-solid fa-triangle-exclamation text-4xl text-amber-500 mb-3"></i>
                    <h3 class="text-base font-bold text-slate-800 dark:text-white">Gagal Membuka Terminal POS</h3>
                    <p class="text-xs text-slate-500 mt-1 max-w-sm">Terjadi kendala saat memuat terminal. Silakan coba muat ulang.</p>
                    <button onclick="window.renderPOS()" class="mt-4 px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white rounded-xl text-xs font-bold transition-all shadow-md">
                        <i class="fa-solid fa-arrows-rotate mr-1.5"></i>Muat Ulang Terminal
                    </button>
                </div>
            `;
        }
    }
};

// ─── Expose ke Window ────────────────────────────────────────
const exposeToWindow = () => {
    window.setPOSViewMode          = setPOSViewMode;
    window.posAddToCart            = addToCart;
    window.posAddToCartQty         = posAddToCartQty;
    window.addToCartPOSWithVariant = addToCartWithVariant;
    window.posUpdateQty            = updateQty;
    window.posSetQty               = setQty;
    window.posFormatQty            = formatQty;
    window.posFQty                 = fQty;
    window.posSetItemDisc          = setItemDisc;
    window.togglePOSItemDiscInput  = togglePOSItemDiscInput;
    window.posRemoveItem           = removeFromCart;
    window.posClearCart            = clearCart;
    window.openPayModal            = openPayModal;
    window.closePayModal           = closePayModal;
    window.getPOSCart              = () => posCart;
    window.getCartTotalHpp         = getCartTotalHpp;
    window.setPosCustomerType      = setPosCustomerType;
    window.setPosPayMethod         = setPosPayMethod;
    window.updatePosChange         = updatePosChange;
    window.posSetQuickCash         = posSetQuickCash;
    window.ensureCustomersLoaded   = ensureCustomersLoaded;
    window.ensureBanksLoaded       = ensureBanksLoaded;
    window.lookupPosMember         = lookupPosMember;
    window.debouncedLookupPosMember= debouncedLookupPosMember;
    window.selectPosMember         = selectPosMember;
    window.resetPosMember          = resetPosMember;
    window.processPOSTx            = processPOSTx;
    window.setPosPointsRedeemed    = setPosPointsRedeemed;
    window.selectPosReward         = selectPosReward;
    window.deselectPosReward       = deselectPosReward;
    window.posMemberPointsDiscount = posMemberPointsDiscount;
    window.getMaxRedeemablePoints  = getMaxRedeemablePoints;
    window.getPointValue           = getPointValue;
    window.printPOSReceipt         = printPOSReceipt;
    window.previewPOSReceiptThenPrint = previewPOSReceiptThenPrint;
    window.posSetGlobalDisc        = (v) => { posSetDiscountVal(v); };
    window.posSetDiscountType      = posSetDiscountType;
    window.posSetDiscountVal       = posSetDiscountVal;
    window.posApplyQuickDiscount   = posApplyQuickDiscount;
    window.openPOSCameraScanner    = openPOSCameraScanner;
    window.closePOSCameraScanner   = closePOSCameraScanner;
    window.togglePOSScannerFacing  = togglePOSScannerFacing;
    window.togglePOSScannerTorch   = togglePOSScannerTorch;
    window.togglePOSScannerMode    = togglePOSScannerMode;
    window.posProcessManualBarcode = posProcessManualBarcode;
    window.posSearchScannedCode    = posSearchScannedCode;
    window.executePOSPrintDirect   = executePOSPrintDirect;
    window.getActiveShift          = getActiveShift;
    window.isShiftActive           = isShiftActive;
    window.syncActiveShiftFromCloud= syncActiveShiftFromCloud;
    window.openPOSOpenShiftModal   = openPOSOpenShiftModal;
    window.closePOSOpenShiftModal  = closePOSOpenShiftModal;
    window.openPOSShiftModal       = openShiftSummaryModal;
    window.openPOSShiftSummaryModal= openShiftSummaryModal;
    window.closePOSShiftSummaryModal= closePOSShiftSummaryModal;
    window.openPOSCloseShiftModal  = openPOSCloseShiftModal;
    window.closePOSCloseShiftModal = closePOSCloseShiftModal;
    window.renderShiftHeaderBadge  = renderShiftHeaderBadge;
    window.printShiftSettlementReceipt = printShiftSettlementReceipt;
    window.executeShiftPrintDirect = executeShiftPrintDirect;
    window.posCatFilter            = (c) => { posCatFilterVal = c; posSubCatFilterVal = ''; posCatalogPage = 1; renderCatalog(); };
    window.posSubCatFilter         = (sc) => { posSubCatFilterVal = sc; posCatalogPage = 1; renderCatalog(); };
    window.posSearchFn             = posSearchFn;
    window.posClearSearch          = posClearSearch;
    window.posLoadMoreProducts     = posLoadMoreProducts;
    window.posSyncOfflineTransactions = posSyncOfflineTransactions;
    window.renderOfflineQueueBadge = renderOfflineQueueBadge;
    window.initPOSNetworkMonitoring= initPOSNetworkMonitoring;
    window.getOfflineTxQueue       = getOfflineTxQueue;
    window.posRenderCatalog        = renderCatalog;
    window.posRenderCart           = renderCart;
    window.refreshPOSCatalog       = () => {
        try {
            renderCatalog();
        } catch (e) {
            console.warn('refreshPOSCatalog error:', e);
        }
    };
    window.openPOSCartDrawer       = openPOSCartDrawer;
    window.closePOSCartDrawer      = closePOSCartDrawer;
    window.playCashierBeep         = playCashierBeep;
    window.openPOSHistory          = () => {
        if (typeof window.openAdminTab === 'function') {
            window.openAdminTab('orders');
        } else if (typeof window.showToast === 'function') {
            window.showToast('Semua transaksi kasir terpusat di menu Pesanan CMS Admin');
        }
    };
    window.destroyBarcodeListener  = destroyBarcodeListener;
    window.playCashierChime        = playCashierChime;
    window.posHoldCurrentCart      = posHoldCurrentCart;
    window.closePOSHoldPrompt      = closePOSHoldPrompt;
    window.posConfirmHoldCart      = posConfirmHoldCart;
    window.openPOSHeldModal        = openPOSHeldModal;
    window.closePOSHeldModal       = closePOSHeldModal;
    window.posRecallHeldCart       = posRecallHeldCart;
    window.posHoldCurrentAndRecall = posHoldCurrentAndRecall;
    window.posOverwriteAndRecall   = posOverwriteAndRecall;
    window.posDeleteHeldCart       = posDeleteHeldCart;
    window.posExecuteDeleteHeld    = posExecuteDeleteHeld;
    window.renderHeldBadges        = renderHeldBadges;
};

// ─── Logika Kamera Barcode Scanner & Smart Diskon Kasir ────────
export const posSetDiscountType = (type) => {
    posDiscountType = type === 'percent' ? 'percent' : 'rp';
    posGlobalDisc = posDiscountAmount();
    renderCart();
};

export const posSetDiscountVal = (val) => {
    const rawVal = Math.max(0, parseFloat(val) || 0);
    const totalHpp = getCartTotalHpp();
    const subtotal = posSubtotal();
    const maxAllowedDisc = totalHpp > 0 ? Math.max(0, subtotal - totalHpp) : subtotal;

    if (posDiscountType === 'percent') {
        const pct = Math.min(100, rawVal);
        const discAmt = Math.round((subtotal * pct) / 100);
        if (totalHpp > 0 && discAmt > maxAllowedDisc) {
            const maxPct = subtotal > 0 ? Math.floor((maxAllowedDisc / subtotal) * 100) : 0;
            const msg = canViewHpp()
                ? `Diskon ${pct}% ditolak karena melebihi batas modal toko (Total HPP ${fRp(totalHpp)})! Diskon maksimal: ${maxPct}% (${fRp(maxAllowedDisc)})`
                : `Diskon ${pct}% ditolak! Persentase diskon melebihi batas maksimum transaksi yang diizinkan sistem.`;
            showToast(msg, 'warning');
            posDiscountVal = maxPct;
            posGlobalDisc = Math.round((subtotal * maxPct) / 100);
            renderCart();
            if (typeof window.triggerHaptic === 'function') window.triggerHaptic('heavy');
            return;
        }
        posDiscountVal = pct;
        posGlobalDisc = discAmt;
    } else {
        const discAmt = rawVal;
        if (totalHpp > 0 && discAmt > maxAllowedDisc) {
            const msg = canViewHpp()
                ? `Diskon ditolak! Total transaksi tidak boleh di bawah harga modal toko (Total HPP ${fRp(totalHpp)}). Maksimal diskon: ${fRp(maxAllowedDisc)}`
                : 'Diskon ditolak! Nominal diskon melebihi batas maksimum transaksi yang diizinkan sistem.';
            showToast(msg, 'warning');
            posDiscountVal = maxAllowedDisc;
            posGlobalDisc = maxAllowedDisc;
            renderCart();
            if (typeof window.triggerHaptic === 'function') window.triggerHaptic('heavy');
            return;
        }
        posDiscountVal = discAmt;
        posGlobalDisc = discAmt;
    }
    renderCart();
};

export const posApplyQuickDiscount = (val, type) => {
    if (type) posDiscountType = type;
    posSetDiscountVal(val);
    playCashierBeep();
};

export const openPOSCameraScanner = async () => {
    if (el('pos-camera-scanner-modal')) return;
    if (typeof window.pushModalHistory === 'function') window.pushModalHistory('posCameraScanner');

    const modalHTML = `
    <div id="pos-camera-scanner-modal" class="fixed inset-0 z-[10010] flex items-center justify-center p-3 sm:p-4" style="background:rgba(15,23,42,0.9)">
        <div class="bg-slate-900 text-white rounded-3xl shadow-2xl w-full max-w-md border border-slate-700/80 overflow-hidden flex flex-col max-h-[92vh]">
            <!-- Modal Header -->
            <div class="p-3.5 sm:p-4 border-b border-slate-800 flex items-center justify-between bg-slate-950/60 shrink-0">
                <div class="flex items-center gap-2 min-w-0">
                    <div class="w-8 h-8 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-sm font-bold shadow-inner">
                        <i class="fa-solid fa-camera"></i>
                    </div>
                    <div>
                        <h3 class="font-black text-xs sm:text-sm text-white leading-tight">Pemindai Barcode Kamera</h3>
                        <p class="text-[10px] text-slate-400">Arahkan kamera ke barcode / QR produk</p>
                    </div>
                </div>
                <div class="flex items-center gap-1.5 shrink-0">
                    <!-- Toggle Torch (Flash) -->
                    <button id="pos-scanner-torch-btn" onclick="window.togglePOSScannerTorch()" class="w-8 h-8 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs flex items-center justify-center transition-all cursor-pointer" title="Lampu Flash / Senter">
                        <i class="fa-solid fa-bolt"></i>
                    </button>
                    <!-- Switch Camera -->
                    <button onclick="window.togglePOSScannerFacing()" class="w-8 h-8 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs flex items-center justify-center transition-all cursor-pointer" title="Putar Kamera">
                        <i class="fa-solid fa-camera-rotate"></i>
                    </button>
                    <!-- Close -->
                    <button onclick="window.closePOSCameraScanner()" class="w-8 h-8 rounded-xl bg-slate-800 hover:bg-rose-900/50 text-slate-400 hover:text-rose-400 text-base flex items-center justify-center transition-all leading-none cursor-pointer">×</button>
                </div>
            </div>

            <!-- Viewport Kamera Universal (Html5Qrcode + Native Fallback) -->
            <div class="relative w-full bg-black flex items-center justify-center overflow-hidden aspect-[4/3] sm:h-72">
                <div id="pos-camera-reader" class="w-full h-full overflow-hidden flex items-center justify-center"></div>
                <video id="pos-camera-video" playsinline autoplay muted class="w-full h-full object-cover hidden"></video>
                
                <!-- Reticle Target Aiming Box Horizontal untuk Barcode 1D (Code 128 / EAN-13) -->
                <div id="pos-scanner-reticle" class="absolute w-[86%] max-w-[320px] aspect-[2.2/1] border-2 border-emerald-400/90 rounded-2xl shadow-[0_0_0_9999px_rgba(15,23,42,0.6)] pointer-events-none transition-all duration-200">
                    <!-- Corner Brackets -->
                    <span class="absolute -top-1 -left-1 w-4 h-4 border-t-4 border-l-4 border-emerald-400 rounded-tl-lg"></span>
                    <span class="absolute -top-1 -right-1 w-4 h-4 border-t-4 border-r-4 border-emerald-400 rounded-tr-lg"></span>
                    <span class="absolute -bottom-1 -left-1 w-4 h-4 border-b-4 border-l-4 border-emerald-400 rounded-bl-lg"></span>
                    <span class="absolute -bottom-1 -right-1 w-4 h-4 border-b-4 border-r-4 border-emerald-400 rounded-br-lg"></span>
                    
                    <!-- Laser Scanline Animation Horizontal -->
                    <div class="pos-scanline"></div>
                </div>

                <!-- Floating Feedback Pill -->
                <div id="pos-scanner-status-pill" class="absolute bottom-3 px-3.5 py-1.5 rounded-full bg-slate-900/95 border border-slate-700 text-[11px] font-bold text-slate-300 flex items-center gap-1.5 shadow-xl max-w-[92%] text-center">
                    <span class="w-2 h-2 rounded-full bg-emerald-400 animate-ping shrink-0"></span>
                    <span>Menyiapkan kamera HP...</span>
                </div>
            </div>

            <!-- Action Strip & Options -->
            <div class="p-3 bg-slate-950/80 border-t border-slate-800 space-y-2.5 shrink-0">
                <!-- Mode Continuous vs Single -->
                <div class="flex items-center justify-between text-xs px-1">
                    <span class="text-slate-400 text-[11px] font-medium flex items-center gap-1.5">
                        <i class="fa-solid fa-repeat text-emerald-400 text-xs"></i>
                        Mode Pemindaian:
                    </span>
                    <button onclick="window.togglePOSScannerMode()" id="pos-scanner-mode-btn" class="px-2.5 py-1 rounded-lg bg-emerald-950/60 border border-emerald-600/60 text-emerald-400 text-[10px] font-black tracking-wider uppercase transition-all cursor-pointer">
                        Terus-menerus
                    </button>
                </div>

                <!-- Fallback Input Manual Barcode -->
                <div class="flex items-center gap-1.5">
                    <div class="relative flex-1">
                        <i class="fa-solid fa-barcode absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 text-xs"></i>
                        <input id="pos-manual-barcode-input" type="text" placeholder="Atau ketik/scan nomor barcode..."
                            class="w-full pl-8 pr-3 py-2 rounded-xl border border-slate-700 bg-slate-800 text-xs font-mono font-bold text-white placeholder-slate-500 focus:outline-none focus:border-[var(--color-primary)] transition-all"
                            onkeydown="if(event.key==='Enter') window.posProcessManualBarcode(this.value)">
                    </div>
                    <button onclick="window.posProcessManualBarcode(document.getElementById('pos-manual-barcode-input')?.value)"
                        class="px-3.5 py-2 rounded-xl text-white text-xs font-bold transition-all active:scale-95 shadow-md cursor-pointer hover:brightness-105" style="background:var(--color-primary)">
                        Tambah
                    </button>
                </div>

                <!-- Last Scanned Banner -->
                <div id="pos-last-scanned-banner" class="hidden p-2 rounded-xl bg-emerald-950/40 border border-emerald-800/60 text-[11px] text-emerald-300 flex items-center justify-between">
                    <div class="flex items-center gap-1.5 min-w-0">
                        <i class="fa-solid fa-circle-check text-emerald-400 shrink-0"></i>
                        <span id="pos-last-scanned-text" class="truncate font-bold">-</span>
                    </div>
                    <span id="pos-last-scanned-price" class="font-black text-emerald-400 shrink-0 ml-2">-</span>
                </div>
            </div>
        </div>
    </div>`;

    document.body.insertAdjacentHTML('beforeend', modalHTML);
    await _startPOSCamera();
};

const _startPOSCamera = async () => {
    const pill = el('pos-scanner-status-pill');

    // 1. Muat pustaka Html5Qrcode (lokal /html5-qrcode.min.js lebih dulu, fallback ke CDN)
    try {
        await ensureScriptLoaded(
            '/html5-qrcode.min.js',
            () => typeof Html5Qrcode !== 'undefined'
        ).catch(() => ensureScriptLoaded(
            'https://cdnjs.cloudflare.com/ajax/libs/html5-qrcode/2.3.8/html5-qrcode.min.js',
            () => typeof Html5Qrcode !== 'undefined'
        ));
    } catch (e) {
        console.warn('[POS Scanner] Fallback script loader:', e);
    }

    // 2. Engine Utama: Html5Qrcode (Universal ZXing — bekerja di 100% browser HP & Android/iOS)
    if (typeof Html5Qrcode !== 'undefined') {
        try {
            if (posHtml5QrCode) {
                try {
                    if (posHtml5QrCode.getState() === 2 || posHtml5QrCode.getState() === 3) {
                        await posHtml5QrCode.stop();
                    }
                    posHtml5QrCode.clear();
                } catch(e) {}
                posHtml5QrCode = null;
            }

            const readerContainer = el('pos-camera-reader');
            const videoNative = el('pos-camera-video');
            if (readerContainer) {
                readerContainer.classList.remove('hidden');
                readerContainer.innerHTML = '';
            }
            if (videoNative) videoNative.classList.add('hidden');

            posHtml5QrCode = new Html5Qrcode('pos-camera-reader');

            const formats = typeof Html5QrcodeSupportedFormats !== 'undefined' ? [
                Html5QrcodeSupportedFormats.CODE_128,
                Html5QrcodeSupportedFormats.EAN_13,
                Html5QrcodeSupportedFormats.EAN_8,
                Html5QrcodeSupportedFormats.CODE_39,
                Html5QrcodeSupportedFormats.UPC_A,
                Html5QrcodeSupportedFormats.UPC_E,
                Html5QrcodeSupportedFormats.QR_CODE
            ] : undefined;

            const qrConfig = {
                fps: 15,
                qrbox: (viewfinderWidth, viewfinderHeight) => {
                    const width = Math.min(Math.floor(viewfinderWidth * 0.88), 340);
                    const height = Math.min(Math.floor(viewfinderHeight * 0.45), 150);
                    return { width: Math.max(width, 220), height: Math.max(height, 90) };
                },
                ...(formats ? { formatsToSupport: formats } : {}),
                experimentalFeatures: {
                    useBarCodeDetectorIfSupported: true
                }
            };

            await posHtml5QrCode.start(
                { facingMode: posScannerFacing },
                qrConfig,
                (decodedText) => {
                    if (decodedText && decodedText.trim()) {
                        _handleBarcodeResult(decodedText.trim());
                    }
                },
                () => {} // Abaikan per-frame mismatch
            );

            if (pill) {
                pill.innerHTML = `<span class="w-2 h-2 rounded-full bg-emerald-400 animate-ping shrink-0"></span><span>Arahkan ke barcode produk...</span>`;
            }

            const torchBtn = el('pos-scanner-torch-btn');
            if (torchBtn) torchBtn.classList.remove('hidden');
            return;
        } catch (err) {
            console.warn('[POS Scanner] Html5Qrcode gagal dijalankan, mencoba Native Video stream:', err);
            if (posHtml5QrCode) {
                try { posHtml5QrCode.clear(); } catch(e) {}
                posHtml5QrCode = null;
            }
        }
    }

    // 3. Fallback Engine: Native getUserMedia + BarcodeDetector
    const video = el('pos-camera-video');
    const readerEl = el('pos-camera-reader');
    if (readerEl) readerEl.classList.add('hidden');
    if (video) video.classList.remove('hidden');
    if (!video) return;

    try {
        const constraints = {
            video: {
                facingMode: { ideal: posScannerFacing },
                width: { ideal: 1280 },
                height: { ideal: 720 }
            },
            audio: false
        };

        const stream = await navigator.mediaDevices.getUserMedia(constraints);
        posScannerStream = stream;
        video.srcObject = stream;
        await video.play();

        const tracks = stream.getVideoTracks();
        if (tracks.length > 0) {
            posScannerTrack = tracks[0];
            const cap = posScannerTrack.getCapabilities ? posScannerTrack.getCapabilities() : {};
            const torchBtn = el('pos-scanner-torch-btn');
            if (torchBtn) {
                if (cap.torch) {
                    torchBtn.classList.remove('hidden');
                } else {
                    torchBtn.classList.add('opacity-40');
                }
            }
        }

        if (typeof window.BarcodeDetector !== 'undefined') {
            try {
                posScannerDetector = new BarcodeDetector({
                    formats: ['ean_13', 'ean_8', 'upc_a', 'upc_e', 'code_128', 'code_39', 'code_93', 'qr_code', 'data_matrix']
                });
            } catch (e) {
                posScannerDetector = null;
            }
        }

        if (posScannerInterval) clearInterval(posScannerInterval);
        posScannerInterval = setInterval(async () => {
            if (!posScannerDetector || !video || video.readyState < 2) return;
            try {
                const barcodes = await posScannerDetector.detect(video);
                if (barcodes && barcodes.length > 0) {
                    const rawVal = barcodes[0].rawValue?.trim();
                    if (rawVal) {
                        _handleBarcodeResult(rawVal);
                    }
                }
            } catch (err) {}
        }, 150);

        if (pill) {
            pill.innerHTML = `<span class="w-2 h-2 rounded-full bg-emerald-400 animate-ping shrink-0"></span><span>Menunggu barcode...</span>`;
        }
    } catch (err) {
        console.warn('[POS Scanner] Gagal akses kamera:', err);
        if (pill) {
            pill.innerHTML = `<span class="text-rose-400 font-bold"><i class="fa-solid fa-triangle-exclamation mr-1"></i>Kamera tidak dapat diakses</span>`;
        }
        showToast('Izin kamera ditolak atau kamera sedang digunakan aplikasi lain.', 'warning');
    }
};

const _handleBarcodeResult = (code) => {
    const now = Date.now();
    if (code === lastScannedCode && (now - lastScannedTime) < 1800) {
        return; // debounce item ganda dalam waktu singkat
    }
    lastScannedCode = code;
    lastScannedTime = now;

    const match = findProductOrVariantByBarcode(code);

    const reticle = el('pos-scanner-reticle');
    const pill = el('pos-scanner-status-pill');
    const banner = el('pos-last-scanned-banner');
    const bannerTxt = el('pos-last-scanned-text');
    const bannerPrice = el('pos-last-scanned-price');

    if (match) {
        if (reticle) {
            reticle.classList.add('border-emerald-300', 'scale-105', 'bg-emerald-500/20');
            setTimeout(() => {
                reticle.classList.remove('border-emerald-300', 'scale-105', 'bg-emerald-500/20');
            }, 300);
        }

        const prod = match.product;
        let added = false;
        let itemName = prod.name;
        let itemPrice = parseFloat(prod.price) || 0;

        if (match.isVariantMatch && match.variant) {
            itemName = `${prod.name} — ${match.variant.name}`;
            itemPrice = parseFloat(match.variant.price) || 0;
            added = addToCartWithVariant(prod.id, match.variant.name, itemPrice, match.variantIdx, 1);
        } else {
            const hasVariants = prod.variants && prod.variants.length > 0;
            if (hasVariants) {
                if (pill) pill.innerHTML = `<span class="text-amber-300 font-bold">Buka pilihan varian...</span>`;
                closePOSCameraScanner();
                ensurePOSVariantSheet().then(() => {
                    if (typeof window.openPOSVariantSheet === 'function') window.openPOSVariantSheet(prod.id);
                });
                return;
            }
            added = addToCart(prod.id);
        }

        if (added) {
            if (banner && bannerTxt && bannerPrice) {
                bannerTxt.textContent = itemName;
                bannerPrice.textContent = fRp(itemPrice);
                banner.classList.remove('hidden');
            }

            if (pill) {
                pill.innerHTML = `<span class="text-emerald-300 font-black"><i class="fa-solid fa-check mr-1"></i>${esc(itemName)} (+1)</span>`;
                setTimeout(() => {
                    if (pill) pill.innerHTML = `<span class="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span><span>Menunggu barcode...</span>`;
                }, 1500);
            }

            if (!posScannerContinuous) {
                closePOSCameraScanner();
                showToast(`Ditambahkan: ${itemName}`, 'success');
            }
        } else {
            if (pill) {
                pill.innerHTML = `<span class="text-rose-400 font-bold"><i class="fa-solid fa-ban mr-1"></i>Stok "${esc(itemName)}" Habis</span>`;
                setTimeout(() => {
                    if (pill) pill.innerHTML = `<span class="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span><span>Menunggu barcode...</span>`;
                }, 2000);
            }
        }
    } else {
        // Cek apakah produk atau varian ada tetapi berstatus nonaktif
        const inactiveMatch = findInactiveProductByBarcode(code);

        if (reticle) {
            reticle.classList.add('border-rose-500', 'bg-rose-500/20');
            setTimeout(() => {
                reticle.classList.remove('border-rose-500', 'bg-rose-500/20');
            }, 400);
        }

        if (pill) {
            if (inactiveMatch) {
                const inactName = inactiveMatch.isVariantMatch && inactiveMatch.variant
                    ? `${inactiveMatch.product.name} — ${inactiveMatch.variant.name}`
                    : inactiveMatch.product.name;
                pill.innerHTML = `
                    <div class="flex flex-col items-center gap-1 py-0.5 max-w-full">
                        <span class="text-amber-300 font-bold text-[11px] leading-tight truncate">
                            <i class="fa-solid fa-triangle-exclamation mr-1"></i>"${esc(inactName)}" NON-AKTIF
                        </span>
                        <span class="text-slate-400 text-[9px]">Produk dinonaktifkan di master admin</span>
                    </div>`;
            } else {
                pill.innerHTML = `
                    <div class="flex flex-col items-center gap-1 py-0.5 max-w-full">
                        <span class="text-rose-400 font-bold text-[11px] leading-tight truncate">
                            <i class="fa-solid fa-xmark mr-1"></i>Barcode "${esc(code)}" tidak ditemukan
                        </span>
                        <button onclick="window.posSearchScannedCode('${esc(code).replace(/'/g, "\\'")}')" class="px-2.5 py-1 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-[10px] font-black shadow-xs active:scale-95 cursor-pointer flex items-center gap-1">
                            <i class="fa-solid fa-magnifying-glass text-[9px]"></i>Cari Teks di POS
                        </button>
                    </div>`;
            }
        }
    }
};

export const closePOSCameraScanner = (skipHistory = false) => {
    if (posHtml5QrCode) {
        try {
            if (posHtml5QrCode.getState() === 2 || posHtml5QrCode.getState() === 3) {
                posHtml5QrCode.stop().then(() => {
                    try { posHtml5QrCode.clear(); } catch(e) {}
                    posHtml5QrCode = null;
                }).catch(() => {
                    try { posHtml5QrCode.clear(); } catch(e) {}
                    posHtml5QrCode = null;
                });
            } else {
                try { posHtml5QrCode.clear(); } catch(e) {}
                posHtml5QrCode = null;
            }
        } catch(e) {
            posHtml5QrCode = null;
        }
    }
    if (posScannerInterval) {
        clearInterval(posScannerInterval);
        posScannerInterval = null;
    }
    if (posScannerStream) {
        try {
            posScannerStream.getTracks().forEach(t => t.stop());
        } catch (e) {}
        posScannerStream = null;
    }
    posScannerTrack = null;
    posScannerTorchOn = false;

    const modal = el('pos-camera-scanner-modal');
    if (modal) {
        if (!skipHistory && typeof window.requestCloseModal === 'function') {
            window.requestCloseModal('posCameraScanner', false, () => modal.remove());
        } else {
            modal.remove();
        }
    }
};

export const togglePOSScannerTorch = async () => {
    posScannerTorchOn = !posScannerTorchOn;
    const btn = el('pos-scanner-torch-btn');

    if (posHtml5QrCode) {
        try {
            await posHtml5QrCode.applyVideoConstraints({
                advanced: [{ torch: posScannerTorchOn }]
            });
            if (btn) {
                if (posScannerTorchOn) {
                    btn.classList.add('bg-amber-500', 'text-white');
                    btn.classList.remove('bg-slate-800', 'text-slate-300');
                } else {
                    btn.classList.remove('bg-amber-500', 'text-white');
                    btn.classList.add('bg-slate-800', 'text-slate-300');
                }
            }
            return;
        } catch (e) {
            console.warn('Torch via Html5Qrcode gagal:', e);
        }
    }

    if (posScannerTrack) {
        try {
            const cap = posScannerTrack.getCapabilities ? posScannerTrack.getCapabilities() : {};
            if (!cap.torch) {
                showToast('Lampu senter (torch) tidak didukung kamera ini.');
                return;
            }
            await posScannerTrack.applyConstraints({
                advanced: [{ torch: posScannerTorchOn }]
            });
            if (btn) {
                if (posScannerTorchOn) {
                    btn.classList.add('bg-amber-500', 'text-white');
                    btn.classList.remove('bg-slate-800', 'text-slate-300');
                } else {
                    btn.classList.remove('bg-amber-500', 'text-white');
                    btn.classList.add('bg-slate-800', 'text-slate-300');
                }
            }
        } catch (e) {
            console.warn('Gagal toggle torch:', e);
        }
    }
};

export const togglePOSScannerFacing = async () => {
    posScannerFacing = posScannerFacing === 'environment' ? 'user' : 'environment';
    if (posHtml5QrCode) {
        try {
            if (posHtml5QrCode.getState() === 2 || posHtml5QrCode.getState() === 3) {
                await posHtml5QrCode.stop();
            }
            posHtml5QrCode.clear();
            posHtml5QrCode = null;
        } catch (e) {
            posHtml5QrCode = null;
        }
    }
    if (posScannerStream) {
        posScannerStream.getTracks().forEach(t => t.stop());
        posScannerStream = null;
    }
    await _startPOSCamera();
};

export const togglePOSScannerMode = () => {
    posScannerContinuous = !posScannerContinuous;
    const btn = el('pos-scanner-mode-btn');
    if (btn) {
        if (posScannerContinuous) {
            btn.textContent = 'Terus-menerus';
            btn.className = 'px-2.5 py-1 rounded-lg bg-emerald-950/60 border border-emerald-600/60 text-emerald-400 text-[10px] font-black tracking-wider uppercase transition-all cursor-pointer';
        } else {
            btn.textContent = 'Scan Sekali';
            btn.className = 'px-2.5 py-1 rounded-lg bg-slate-800 border border-slate-700 text-slate-300 text-[10px] font-black tracking-wider uppercase transition-all cursor-pointer';
        }
    }
};

export const posProcessManualBarcode = (code) => {
    if (!code || !code.trim()) return;
    _handleBarcodeResult(code.trim());
    const inp = el('pos-manual-barcode-input');
    if (inp) inp.value = '';
};

export const posSearchScannedCode = (code) => {
    closePOSCameraScanner();
    const sf = el('pos-search-input');
    if (sf) {
        sf.value = code;
        posSearch = code;
        renderCatalog();
    }
};

// Global expose
window.findProductOrVariantByBarcode = findProductOrVariantByBarcode;
window.setPOSViewMode          = setPOSViewMode;
window.renderPOSStorefront     = renderPOSStorefront;
window.renderPOS               = renderPOS;
window.destroyBarcodeListener  = destroyBarcodeListener;
window.openPOSCartDrawer       = openPOSCartDrawer;
window.closePOSCartDrawer      = closePOSCartDrawer;
window.posSetQuickCash         = posSetQuickCash;
window.playCashierBeep         = playCashierBeep;
window.playCashierChime        = playCashierChime;
window.posHoldCurrentCart      = posHoldCurrentCart;
window.closePOSHoldPrompt      = closePOSHoldPrompt;
window.posConfirmHoldCart      = posConfirmHoldCart;
window.openPOSHeldModal        = openPOSHeldModal;
window.closePOSHeldModal       = closePOSHeldModal;
window.posRecallHeldCart       = posRecallHeldCart;
window.posHoldCurrentAndRecall = posHoldCurrentAndRecall;
window.posOverwriteAndRecall   = posOverwriteAndRecall;
window.posDeleteHeldCart       = posDeleteHeldCart;
window.posExecuteDeleteHeld    = posExecuteDeleteHeld;
window.renderHeldBadges        = renderHeldBadges;
window.ensureCustomersLoaded   = ensureCustomersLoaded;
window.ensureBanksLoaded       = ensureBanksLoaded;
window.lookupPosMember         = lookupPosMember;
window.debouncedLookupPosMember= debouncedLookupPosMember;
window.selectPosMember         = selectPosMember;
window.resetPosMember          = resetPosMember;
window.posSetDiscountType      = posSetDiscountType;
window.posSetDiscountVal       = posSetDiscountVal;
window.posApplyQuickDiscount   = posApplyQuickDiscount;
window.openPOSCameraScanner    = openPOSCameraScanner;
window.closePOSCameraScanner   = closePOSCameraScanner;
window.togglePOSScannerFacing  = togglePOSScannerFacing;
window.togglePOSScannerTorch   = togglePOSScannerTorch;
window.togglePOSScannerMode    = togglePOSScannerMode;
window.posProcessManualBarcode = posProcessManualBarcode;
window.posSearchScannedCode    = posSearchScannedCode;
window.executePOSPrintDirect   = executePOSPrintDirect;
window.previewPOSReceiptThenPrint = previewPOSReceiptThenPrint;
window.reprintLastPOSReceipt   = reprintLastPOSReceipt;
window.getActiveShift          = getActiveShift;
window.isShiftActive           = isShiftActive;
window.syncActiveShiftFromCloud= syncActiveShiftFromCloud;
window.openPOSOpenShiftModal   = openPOSOpenShiftModal;
window.closePOSOpenShiftModal  = closePOSOpenShiftModal;
window.openPOSShiftModal       = openShiftSummaryModal;
window.openPOSShiftSummaryModal= openShiftSummaryModal;
window.closePOSShiftSummaryModal= closePOSShiftSummaryModal;
window.openPOSCloseShiftModal  = openPOSCloseShiftModal;
window.closePOSCloseShiftModal = closePOSCloseShiftModal;
window.renderShiftHeaderBadge  = renderShiftHeaderBadge;
window.printShiftSettlementReceipt = printShiftSettlementReceipt;
window.executeShiftPrintDirect = executeShiftPrintDirect;
window.posSubCatFilter         = (sc) => { posSubCatFilterVal = sc; renderCatalog(); };
window.getPOSCart              = () => posCart;
window.cleanBarcodeRaw         = cleanBarcodeRaw;
window.getBarcodeVariations    = getBarcodeVariations;
window.findInactiveProductByBarcode = findInactiveProductByBarcode;
window.handlePOSSearchKeydown  = handlePOSSearchKeydown;
window.posSearchFn             = posSearchFn;
window.posClearSearch          = posClearSearch;
window.posLoadMoreProducts     = posLoadMoreProducts;
window.posSyncOfflineTransactions = posSyncOfflineTransactions;
window.renderOfflineQueueBadge = renderOfflineQueueBadge;
window.initPOSNetworkMonitoring= initPOSNetworkMonitoring;
window.getOfflineTxQueue       = getOfflineTxQueue;

