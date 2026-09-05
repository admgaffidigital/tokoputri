/**
 * ============================================================
 * MODUL ADMIN: PRODUK & MANAJEMEN CRUD (ENTRY POINT)
 * ============================================================
 * State bersama dan aggregator untuk seluruh sub-modul admin produk:
 * - table.js   : Render tabel & list produk/warna/pelanggan/reward
 * - form.js    : Modal form tambah & edit, submit, hapus, duplikasi
 * - variants.js: Varian produk, spec builder, database warna
 * - stock.js   : Restock cepat, toggle aktif/nonaktif & modal close
 * - scanner.js : Barcode scanner kamera (HTML5-QRCode)
 * - pricing.js : Edit cepat harga & grosir builder
 * ============================================================
 */

// ─── Shared State ─────────────────────────────────────────────────────────────

export let cTab = 'products';
export const setCTab = (v) => { cTab = v; window.cTab = v; };

export let aSq = '';
export const setASq = (v) => { aSq = v; window.aSq = v; };

export let eId = null;
export const setEId = (v) => { eId = v; window.eId = v; };

export let isSaving = false;
export const setIsSaving = (v) => { isSaving = v; };

export let tVars = [];
export const setTVars = (v) => { tVars = v; };

export let tWhol = [];
export const setTWhol = (v) => { tWhol = v; };

export let tSpec = [];
export const setTSpec = (v) => { tSpec = v; };

// Expose state mutators ke window untuk kompatibilitas script inline HTML
window.setCTab = setCTab;
window.setASq  = setASq;
window.setEId  = setEId;

// ─── Import Sub-Modul ─────────────────────────────────────────────────────────
import './table.js';
import './form.js';
import './variants.js';
import './stock.js';
import './scanner.js';
import './pricing.js';
