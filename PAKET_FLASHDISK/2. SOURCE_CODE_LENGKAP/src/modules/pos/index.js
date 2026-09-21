/**
 * ============================================================
 * MODUL POS KASIR (BARREL EXPORT)
 * Catatan: pos.js dan pos-history.js juga dimuat secara
 * dynamic import dari router admin \u2014 barrel ini hanya untuk
 * vite manualChunks agar masuk chunk module-pos yang sama.
 * ============================================================
 */

export { renderPOS, printPOSReceipt } from './pos.js';
export { renderPOSHistory, voidPOSTx } from './pos-history.js';

