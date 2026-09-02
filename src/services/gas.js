/**
 * ============================================================
 * GAS SERVICE (Google Apps Script)
 * Mengelola URL endpoint Google Apps Script untuk upload data.
 * URL ini bisa di-override dari pengaturan admin toko.
 * ============================================================
 */

/**
 * URL default Google Apps Script untuk upload/export data.
 * Bisa di-override oleh admin melalui Pengaturan > Config > GAS URL,
 * yang tersimpan di Firestore dan di-sync ke variabel ini saat `loadAppData`.
 */
export let GAS_UPLOAD_URL = "https://script.google.com/macros/s/AKfycbx3dW9rHcdoKNYjSOJ8PoH2k6fABe7XlBD9teNHsBlCBqJquq8jd4UvnfXZVsfKdFsC/exec";

/**
 * Override URL GAS. Dipanggil saat data config toko berhasil dimuat dari Firestore
 * (jika admin sudah mengisi custom GAS URL di pengaturan).
 */
export const setGasUploadUrl = (url) => {
    if (url && typeof url === 'string' && url.trim()) {
        GAS_UPLOAD_URL = url.trim();
    }
};
