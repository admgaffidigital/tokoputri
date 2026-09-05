/**
 * ============================================================
 * MODUL ADMIN: PRODUK & MANAJEMEN CRUD (RE-EXPORT SHIM)
 * ============================================================
 * Modul ini telah dipecah menjadi sub-modul yang lebih rapi
 * dan terstruktur di direktori: src/modules/admin/products/
 *
 * - products/index.js    : Entry point & shared state
 * - products/table.js    : Render tabel & list produk/item
 * - products/form.js     : Modal tambah/edit, simpan, hapus, duplikat
 * - products/variants.js : Manajemen varian & database warna
 * - products/stock.js    : Restock cepat & toggle status
 * - products/scanner.js  : Barcode scanner kamera (HTML5-QRCode)
 * - products/pricing.js  : Edit cepat harga & grosir
 *
 * File ini dipertahankan sebagai re-export untuk backward compatibility.
 * ============================================================
 */

export * from './products/index.js';
