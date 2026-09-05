/**
 * ============================================================
 * SERVICE PENYIMPANAN DATA & REALTIME SYNC (STORAGE & CACHE)
 * Mengatur hidrasi instan dari cache lokal (0ms), pembacaan data
 * toko & produk dari Firestore sub-koleksi, penyimpanan aman (saveApp),
 * serta sinkronisasi stok otomatis antar perangkat secara real-time.
 * ============================================================
 */

import { db, firebase } from '../config/firebase.js';
import { appData, defApp, cart, wishlist } from '../core/state.js';
import { 
    sL, ssL, fixD, fixDriveVideo, setIn, showToast, 
    sLoad, hLoad, el, updateSEO, injectJSONLD, getOptImg 
} from '../core/utils.js';
import { sanitizeCart, updCart } from '../modules/cart/cart.js';
import { updWish } from '../modules/cart/wishlist.js';
import { rDyn } from '../modules/home/sections.js';
import { rCat } from '../modules/catalog/catalog.js';
import { applyUITheme, applyBackgroundStyle } from '../core/theme.js';

const loadAppData = async () => {
    if(document.documentElement.classList.contains('dark')){
        const icon = el('icon-theme');
        if(icon) icon.className = 'fa-solid fa-sun text-sm text-amber-500';
    }

    // Helper sanitasi & normalisasi URL aset
    const prepareAppData = () => {
        appData.products = appData.products || [];
        appData.categories = appData.categories || [];
        appData.brands = appData.brands || [];
        appData.vouchers = appData.vouchers || [];
        appData.products.forEach(p => { 
            if(p.img) p.img = fixD(p.img); 
            if(p.variants) p.variants.forEach(v => { if(v.img) v.img = fixD(v.img); }); 
        });
        if(appData.banners) appData.banners.forEach(b => { if(b.img) b.img = fixD(b.img); if(b.videoUrl) b.videoUrl = fixDriveVideo(b.videoUrl); });
        if(appData.categories) appData.categories.forEach(c => { if(c.img) c.img = fixD(c.img); });
        if(appData.brands) appData.brands.forEach(b => { if(b.img) b.img = fixD(b.img); });
        if(appData.store.logo) appData.store.logo = fixD(appData.store.logo);
        if(appData.store.allProductsIcon) appData.store.allProductsIcon = fixD(appData.store.allProductsIcon);
        if(appData.store.allBrandsIcon) appData.store.allBrandsIcon = fixD(appData.store.allBrandsIcon);
        if(appData.payment.qrisUrl) appData.payment.qrisUrl = fixD(appData.payment.qrisUrl);
        
        cart.forEach(i => { if(i.img) i.img = fixD(i.img); });
        wishlist.forEach(i => { if(i.img) i.img = fixD(i.img); });
    };

    // 1. INSTANT HYDRATION: Render langsung dari cache lokal dalam 0ms (tanpa tunggu jaringan)
    let localCms = JSON.parse(sL('freshmart_cms_data') || 'null');
    let localProducts = JSON.parse(sL('freshmart_products') || 'null');
    let localRewards = JSON.parse(sL('freshmart_rewards') || 'null');
    let localUpdate = parseInt(sL('freshmart_last_update') || '0');
    let hasRenderedCached = false;

    if (localCms) {
        Object.assign(appData, defApp, localCms);
        appData.store = { ...defApp.store, ...(localCms.store || {}) };
        appData.payment = { ...defApp.payment, ...(localCms.payment || {}) };
        appData.config = { ...defApp.config, ...(localCms.config || {}) };
        if (appData.config && appData.config.gasUrl) window.GAS_UPLOAD_URL = appData.config.gasUrl;
        if (localProducts) appData.products = localProducts;
        if (localRewards) appData.rewards = localRewards;
        prepareAppData();
        if (appData.store) {
            applyUITheme(appData.store.uiTheme, appData.store.themeColor);
            applyBackgroundStyle(appData.store.bgStyle, appData.store.bgCustomUrl);
        }
        sanitizeCart();
        updCart();
        updWish();
        rDyn();
        rCat();
        setIn('stat-products', appData.products.filter(p => p.isActive !== 'false' && p.isActive !== false).length);
        hLoad(); // Langsung buka antarmuka tanpa jeda
        hasRenderedCached = true;
    } else {
        sLoad('Memuat Toko...');
    }

    // 2. BACKGROUND REVALIDATION: Sinkronkan update server
    // OPTIMASI KUOTA FIRESTORE: Jika sudah ada cache lokal, jangan panggil get() manual lagi
    // karena listener realtime onSnapshot di attachRealtimeStockSync() akan langsung dipasang
    // tepat setelah ini dan memeriksa serverUpdate > localUpdate. Ini menghemat 1 read cms_data
    // pada SETIAP kali halaman dibuka oleh pengunjung!
    if (!hasRenderedCached) {
        try {
            const d = await db.collection("freshmart").doc("cms_data").get();
            if (d.exists) {
                const f = d.data();
                const serverUpdate = f.lastUpdate || 0;
                ssL('freshmart_cms_data', JSON.stringify(f));
                Object.assign(appData, defApp, f);
                appData.store = { ...defApp.store, ...(f.store || {}) };
                appData.payment = { ...defApp.payment, ...(f.payment || {}) };
                appData.config = { ...defApp.config, ...(f.config || {}) };
                if (appData.config && appData.config.gasUrl) window.GAS_UPLOAD_URL = appData.config.gasUrl;

                const pSnap = await db.collection("freshmart").doc("cms_data").collection("products").get();
                appData.products = pSnap.docs.map(doc => doc.data()).sort((a,b) => (b.id||0) - (a.id||0));
                ssL('freshmart_products', JSON.stringify(appData.products));
                ssL('freshmart_last_update', serverUpdate.toString());

                prepareAppData();
                if (appData.store) {
                    applyUITheme(appData.store.uiTheme, appData.store.themeColor);
                    applyBackgroundStyle(appData.store.bgStyle, appData.store.bgCustomUrl);
                }
                sanitizeCart();
                updCart();
                updWish();
                rDyn();
                rCat();
                setIn('stat-products', appData.products.filter(p => p.isActive !== 'false' && p.isActive !== false).length);
            }
        } catch(e) {
            showToast("Mode Offline (Data Lokal)");
        } finally {
            hLoad();
        }
    }
    // FITUR BARU: render slot iklan SECARA TERPISAH dari jalur kritis loading.
    // FIX BUG KRITIS: sebelumnya dipanggil langsung di sini — kalau skrip AdSense
    // bermasalah (lambat, diblokir ad-blocker, dsb) dan melempar error, eksekusi
    // berhenti SEBELUM hLoad() terpanggil, sehingga layar loading menutupi
    // halaman selamanya (laporan: "layar mati tidak bisa discroll"). Sekarang
    // dijalankan async + dibungkus try/catch agar TIDAK PERNAH bisa mengganggu
    // proses loading utama, apapun yang terjadi pada iklan.
    
    setIn('stat-products', appData.products.filter(p => p.isActive !== 'false' && p.isActive !== false).length);

    // Sinkron nama toko & tagline di loader dengan data nyata dari Firebase
    const loaderName = el('loader-store-name');
    const loaderTagline = el('loader-tagline');
    if (loaderName) loaderName.textContent = (appData.store.name || '').toUpperCase();
    if (loaderTagline) loaderTagline.textContent = appData.store.tagline || appData.store.desc || appData.store.address || '';

    const loaderLogoIcon = el('loader-logo-icon');
    const loaderLogoImg = el('loader-logo-img');
    const logoUrl = (appData.store.logo && appData.store.logo !== 'fa-store') ? appData.store.logo : '';
    if (logoUrl) {
        if (loaderLogoIcon) loaderLogoIcon.style.display = 'none';
        if (loaderLogoImg) {
            loaderLogoImg.src = logoUrl;
            loaderLogoImg.style.display = 'block';
        }
    }

    // --- PWA DYNAMIC MANIFEST & SPLASH SCREEN ENGINE ---
    updatePwaManifest();
    // ---------------------------------------------------
    
    // FITUR SEO: Inject Homepage Structured Data
    window.injectJSONLD('seo-website', {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "Toko Putri",
        "url": window.location.origin
    });
    window.injectJSONLD('seo-localbusiness', {
        "@context": "https://schema.org",
        "@type": "HardwareStore",
        "name": "Toko Putri",
        "image": getOptImg(appData.store.logo, 'w300-rw'),
        "description": "Solusi grosir dan e-commerce terpercaya untuk alat teknik, perkakas, dan perlengkapan pertukangan berkualitas.",
        "url": window.location.origin,
        "telephone": appData.store.phone || '',
        "address": {
            "@type": "PostalAddress",
            "streetAddress": appData.store.address || '',
            "addressCountry": "ID"
        }
    });

    // Logic untuk Direct Link Produk (SEO Friendly URL)
    const urlParams = new URLSearchParams(window.location.search);
    const pid = urlParams.get('p');
    
    if(pid && appData.products.find(x => x.id == parseInt(pid))) {
        // Kita ganti state saat ini dengan URL beranda (tanpa ?p=)
        const cleanUrlParams = new URLSearchParams(window.location.search);
        cleanUrlParams.delete('p');
        let homeUrl = window.location.pathname;
        if (cleanUrlParams.toString()) homeUrl += '?' + cleanUrlParams.toString();
        window.history.replaceState({}, document.title, homeUrl);

        setTimeout(() => openProductModal(parseInt(pid)), 600);
    }
    
    hLoad();
};

// =====================================================================
// FIX BUG: DATA KATEGORI/VOUCHER/BANNER/PENGATURAN HILANG SENDIRI SAAT REFRESH
// Sebelumnya saveApp() SELALU mengirim SELURUH appData (semua kategori,
// voucher, banner, dll) dan MENIMPA seluruh dokumen di Firestore setiap
// kali menyimpan SATU perubahan kecil. Kalau admin membuka panel di 2
// tab/perangkat sekaligus (HP + laptop, atau lupa masih login di tempat
// lain), tab yang datanya belum ter-update di memori bisa MENIMPA dan
// MENGHAPUS perubahan yang baru saja disimpan dari tab lain.
//
// Sekarang saveApp() bisa menerima daftar field spesifik yang benar-benar
// berubah (misal ['categories']) dan hanya mengirim field itu saja + merge
// ke Firestore -- field lain (voucher, banner, dst) yang tidak disentuh
// TIDAK akan ikut ditimpa, apapun kondisi memori tab lain.
// =====================================================================
// =====================================================================
// FIX BUG: SEBAGIAN PERANGKAT TIDAK SINKRON PADAHAL DATA SUDAH DIPERBARUI
// Sebelumnya penanda "ada pembaruan" (lastUpdate) memakai Date.now() —
// yaitu JAM LOKAL perangkat yang menyimpan. Kalau jam SATU SAJA perangkat
// (HP admin dsb) sedikit salah/maju, angka yang tersimpan ke server jadi
// "dari masa depan". Perangkat lain yang sempat membaca angka itu akan
// menganggap semua pembaruan ASLI sesudahnya (dari perangkat berjam benar)
// lebih "lama" dari yang sudah mereka punya, sehingga BERHENTI sinkron
// sampai jam aslinya benar-benar melewati angka salah tadi -- bisa berjam-
// jam atau berhari-hari. Ini penyebab "sebagian perangkat update, sebagian
// tidak" yang terasa acak.
//
// Sekarang lastUpdate memakai firebase.firestore.FieldValue.increment(1):
// server Firestore sendiri yang menaikkan angkanya +1 setiap kali disimpan,
// SAMA SEKALI tidak bergantung pada jam perangkat manapun. Nilainya
// dijamin selalu naik secara berurutan, jadi tidak ada lagi perangkat yang
// "terkunci" gara-gara jam salah.
// =====================================================================
export const saveApp = async (changedKeys = null, updateMeta = null) => {
    try {
        if (Array.isArray(changedKeys)) {
            const partial = { 
                lastUpdate: firebase.firestore.FieldValue.increment(1),
                updateType: updateMeta?.updateType || (changedKeys.length ? 'settings_change' : 'full'),
                changedKeys: changedKeys
            };
            if (updateMeta?.updatedProductIds) partial.updatedProductIds = updateMeta.updatedProductIds;
            changedKeys.forEach(k => { if (k) partial[k] = appData[k]; });
            await db.collection("freshmart").doc("cms_data").set(partial, { merge: true });
        } else {
            // Mode lama: timpa penuh. Sengaja dipakai HANYA untuk restore backup.
            const copyData = { ...appData };
            delete copyData.products; // Jangan simpan produk ke dokumen utama
            delete copyData.auth; // Jangan simpan field auth legacy (password plaintext) ke Firestore
            copyData.lastUpdate = firebase.firestore.FieldValue.increment(1);
            copyData.updateType = 'full';
            await db.collection("freshmart").doc("cms_data").set(copyData);
        }
        // Tebakan optimis untuk cache lokal saja (akan otomatis dikoreksi oleh listener
        // realtime begitu balasan asli dari server tiba) -- TIDAK dikirim ke server.
        appData.lastUpdate = (parseInt(sL('freshmart_last_update')) || appData.lastUpdate || 0) + 1;
        const cacheCopy = { ...appData };
        delete cacheCopy.products; delete cacheCopy.auth;
        ssL('freshmart_cms_data', JSON.stringify(cacheCopy));
        ssL('freshmart_last_update', appData.lastUpdate.toString());
        ssL('freshmart_products', JSON.stringify(appData.products));
    } catch(e) {
        showToast("Tersimpan secara Lokal");
    }
};

// =====================================================================
// OPTIMASI KUOTA & REALTIME SYNC (GRANULAR DELTA SYNC & BACKGROUND THROTTLING):
// Mencegah banjir baca data Firestore saat ada transaksi atau perubahan setting.
// 1. Jika hanya setting berubah (updateType === 'settings_change'):
//    Update langsung dari dokumen cms_data TANPA menyentuh subkoleksi produk (0 reads produk!).
// 2. Jika ada pesanan checkout atau admin edit produk (updateType === 'stock_change' / 'product_single'):
//    Ambil HANYA produk yang berubah berdasarkan updatedProductIds (hanya 1-2 reads, bukan 200+ reads!).
// 3. Tab Visibility Optimization: Jika tab di-minimize atau tidak aktif, tunda sinkronisasi berat.
// =====================================================================
let isSyncingRealtime = false;
let pendingSyncDoc = null;
let lastFullProductFetchTime = 0;
const FULL_FETCH_MIN_INTERVAL = 10000; // 10 detik minimum interval antar fetch koleksi penuh
let isTabHidden = typeof document !== 'undefined' ? document.hidden : false;
let hasDeferredSync = false;

if (typeof document !== 'undefined') {
    document.addEventListener('visibilitychange', () => {
        isTabHidden = document.hidden;
        if (!isTabHidden && hasDeferredSync && pendingSyncDoc) {
            hasDeferredSync = false;
            const docToSync = pendingSyncDoc;
            pendingSyncDoc = null;
            if (typeof window._doSyncCmsData === 'function') {
                window._doSyncCmsData(docToSync);
            }
        }
    });
}

window.attachRealtimeStockSync = () => {
    if (window.unsubCmsRealtime) return; // jangan pasang dobel

    const doSync = async (doc) => {
        if (!doc.exists) return;
        const f = doc.data();
        const serverUpdate = f.lastUpdate || 0;
        const localUpdate = parseInt(sL('freshmart_last_update') || '0');

        // Jika tab sedang di latar belakang/diminimalkan, tunda penarikan data berat sampai tab aktif lagi
        if (isTabHidden) {
            pendingSyncDoc = doc;
            hasDeferredSync = true;
            return;
        }

        // Jika nomor versi server SAMA PERSIS dengan lokal (> 0) dan data produk sudah ada, tidak perlu fetch ulang
        if (serverUpdate === localUpdate && serverUpdate > 0 && (appData.products && appData.products.length > 0)) {
            return;
        }

        isSyncingRealtime = true;
        try {
            const updateType = f.updateType || 'full';
            const updatedProductIds = Array.isArray(f.updatedProductIds) ? f.updatedProductIds.map(String) : [];

            // 1. SINKRONISASI PENGATURAN TOKO (BANNERS, VOUCHERS, TOKO, KATEGORI, DLL)
            // Diambil langsung dari dokumen f tanpa query ekstra ke koleksi lain (HEMAT 100% READS)
            appData.store = { ...defApp.store, ...(f.store || {}) };
            if (f.categories) appData.categories = f.categories;
            if (f.vouchers) appData.vouchers = f.vouchers;
            if (f.banners) appData.banners = f.banners;
            if (f.brands) appData.brands = f.brands;
            if (f.banks) appData.banks = f.banks;
            if (f.faqs) appData.faqs = f.faqs;
            appData.payment = { ...defApp.payment, ...(f.payment || {}) };
            appData.config = { ...defApp.config, ...(f.config || {}) };
            appData.taxSettings = { ...defApp.taxSettings, ...(f.taxSettings || {}) };
            if (appData.config && appData.config.gasUrl) window.GAS_UPLOAD_URL = appData.config.gasUrl;
            if (appData.banners) appData.banners.forEach(b => { if(b.img) b.img = fixD(b.img); if(b.videoUrl) b.videoUrl = fixDriveVideo(b.videoUrl); });
            if (appData.categories) appData.categories.forEach(c => { if(c.img) c.img = fixD(c.img); });
            if (appData.brands) appData.brands.forEach(b => { if(b.img) b.img = fixD(b.img); });

            // 2. SINKRONISASI PRODUK GRANULAR (HEMAT KUOTA BESAR)
            if (updateType === 'settings_change' && appData.products && appData.products.length > 0) {
                // Hanya setting yang berubah. TIDAK PERLU mengambil ulang subkoleksi produk!
            } else if ((updateType === 'stock_change' || updateType === 'product_single') && updatedProductIds.length > 0 && appData.products && appData.products.length > 0) {
                // Hanya beberapa produk yang berubah (misal dari checkout atau admin edit produk tunggal).
                const fetchedDocs = await Promise.all(
                    updatedProductIds.map(pId => db.collection("freshmart").doc("cms_data").collection("products").doc(pId).get().catch(() => null))
                );
                fetchedDocs.forEach((pDoc, idx) => {
                    const targetId = updatedProductIds[idx];
                    if (pDoc && pDoc.exists) {
                        const freshProd = pDoc.data();
                        if (freshProd.img) freshProd.img = fixD(freshProd.img);
                        if (freshProd.variants) freshProd.variants.forEach(v => { if (v.img) v.img = fixD(v.img); });
                        const pIdx = appData.products.findIndex(p => p.id.toString() === pDoc.id);
                        if (pIdx > -1) {
                            appData.products[pIdx] = freshProd;
                        } else {
                            appData.products.unshift(freshProd);
                        }
                    } else if (pDoc && !pDoc.exists && targetId) {
                        const pIdx = appData.products.findIndex(p => p.id.toString() === targetId);
                        if (pIdx > -1) appData.products.splice(pIdx, 1);
                    }
                });
                ssL('freshmart_products', JSON.stringify(appData.products));
            } else {
                // Penarikan penuh produk (hanya jika belum punya produk atau pembaruan massal)
                const pSnap = await db.collection("freshmart").doc("cms_data").collection("products").get();
                appData.products = pSnap.docs.map(d => d.data()).sort((a,b) => (b.id||0) - (a.id||0));
                appData.products.forEach(p => {
                    if (p.img) p.img = fixD(p.img);
                    if (p.variants) p.variants.forEach(v => { if (v.img) v.img = fixD(v.img); });
                });
                ssL('freshmart_products', JSON.stringify(appData.products));
            }

            ssL('freshmart_cms_data', JSON.stringify(f));
            ssL('freshmart_last_update', serverUpdate.toString());

            if (appData.store) {
                applyUITheme(appData.store.uiTheme, appData.store.themeColor);
                applyBackgroundStyle(appData.store.bgStyle, appData.store.bgCustomUrl);
            }
            updatePwaManifest();

            const curTab = window.cTab || 'products';
            if (window.isAdm && curTab && ['categories','vouchers','banners','brands','banks','products','colors'].includes(curTab) && typeof window.rAdmItms === 'function') {
                window.rAdmItms(curTab);
            }

            setIn('stat-products', appData.products.filter(p => p.isActive !== 'false' && p.isActive !== false).length);

            sanitizeCart();
            updCart();
            if (typeof window.rDyn === 'function') window.rDyn();
            if (typeof window.rCat === 'function') window.rCat();

            const curProd = window.cProd;
            if (curProd) {
                const fresh = appData.products.find(p => p.id === curProd.id);
                if (fresh) {
                    window.cProd = fresh;
                    if (typeof window.rProdMod === 'function') {
                        const modalEl = document.getElementById('product-modal');
                        if (modalEl && !modalEl.classList.contains('hidden') && !modalEl.classList.contains('opacity-0')) {
                            window.rProdMod();
                        }
                    }
                }
            }
        } catch (e) {
            console.error('Gagal sinkron realtime stok:', e);
        } finally {
            isSyncingRealtime = false;
            if (pendingSyncDoc) {
                const nextDoc = pendingSyncDoc;
                pendingSyncDoc = null;
                doSync(nextDoc);
            }
        }
    };

    window._doSyncCmsData = doSync;

    window.unsubCmsRealtime = db.collection("freshmart").doc("cms_data")
        .onSnapshot(async (doc) => {
            if (isSyncingRealtime) {
                pendingSyncDoc = doc;
                return;
            }
            await doSync(doc);
        }, (err) => {
            console.warn('Realtime listener error:', err);
        });
};

// FITUR BARU (REFACTOR KEAMANAN & HEMAT KUOTA): katalog hadiah dengan cache lokal
window.attachRewardsRealtime = () => {
    if (window.unsubRewardsRealtime) return; // jangan pasang dobel

    // Muat hadiah dari cache lokal segera agar tampilan instan 0ms
    if (!appData.rewards || !appData.rewards.length) {
        try {
            const cachedRewards = JSON.parse(sL('freshmart_rewards') || 'null');
            if (cachedRewards && Array.isArray(cachedRewards)) {
                appData.rewards = cachedRewards;
                appData.rewards.forEach(r => { if (r.img) r.img = fixD(r.img); });
            }
        } catch(e) {}
    }

    window.unsubRewardsRealtime = db.collection("freshmart").doc("cms_data").collection("rewards")
        .onSnapshot(snap => {
            appData.rewards = snap.docs.map(d => d.data()).sort((a,b) => (b.id||0) - (a.id||0));
            appData.rewards.forEach(r => { if (r.img) r.img = fixD(r.img); });
            ssL('freshmart_rewards', JSON.stringify(appData.rewards));
            // Kalau admin sedang buka tab Hadiah, atau pelanggan sedang buka modal Data Member, segarkan tampilannya
            if (window.isAdm && cTab === 'rewards' && typeof window.rAdmItms === 'function') window.rAdmItms('rewards');
            if (typeof window.renderRewardCatalog === 'function') window.renderRewardCatalog();
            const memberModal = document.getElementById('member-modal');
            if (memberModal && memberModal.style.display === 'flex' && currentMember && typeof window.rMemberModalBody === 'function') window.rMemberModalBody();
        }, err => { console.warn('Realtime hadiah gagal:', err); });
};

// --- 12. WELCOME POPUP: DIHAPUS atas permintaan, agar website lebih ringan & cepat ---

// --- 5. LOGIKA HARGA & JARAK GPS ---
window.getEffP = i => {
    const p = appData.products.find(x => x.id === i.id);
    // FIX: pakai harga varian sebagai harga dasar jika item punya variantName
    let basePrice = i.price || 0;
    if (i.variantName && p && p.variants) {
        const v = p.variants.find(vv => vv.name === i.variantName);
        if (v && v.price != null) basePrice = v.price;
    }
    // FIX BUG (Grosir + Varian): harga grosir didefinisikan di level produk dasar,
    // sedangkan harga tiap varian bisa berbeda jauh. Kalau grosir tetap dipaksakan
    // ke item yang punya varian, customer bisa kena harga grosir varian lain yang
    // tidak sesuai (toko berpotensi rugi). Maka: grosir HANYA berlaku untuk
    // pembelian TANPA varian. Produk dengan varian tetap pakai harga varian apa adanya.
    if (i.variantName) return basePrice;
    if (!p || !p.wholesale || !p.wholesale.length) return basePrice;
    const t = cart.filter(c => c.id === i.id).reduce((s,c) => s + (parseFloat(c.qty) || 0), 0);
    for (let w of p.wholesale.slice().sort((a,b) => b.minQty - a.minQty)){
        if (t >= parseFloat(w.minQty)) return w.price;
    }
    return basePrice;
};

// FITUR BARU: ambil HPP (harga modal) produk/varian saat ini, dipakai untuk
// merekam biaya modal ke setiap item pesanan -- supaya laporan laba akurat
// dan tidak berubah walau HPP produk diedit admin di kemudian hari.
window.getEffHpp = i => {
    const p = appData.products.find(x => x.id === i.id);
    if (!p) return 0;
    if (i.variantName && p.variants) {
        const v = p.variants.find(vv => vv.name === i.variantName);
        if (v && v.hpp != null) return parseFloat(v.hpp) || 0;
    }
    return parseFloat(p.hpp) || 0;
};

// FITUR BARU: ambil Poin Member produk/varian saat ini dengan fallback cerdas
// jika varian tidak memiliki poin khusus (> 0), otomatis gunakan poin produk utama
window.getEffPoin = i => {
    if (!i) return 0;
    const p = appData.products.find(x => x.id === i.id);
    if (!p) return parseFloat(i.poin) || 0;
    if (i.variantName && p.variants) {
        const v = p.variants.find(vv => vv.name === i.variantName);
        if (v && v.poin !== undefined && v.poin !== null && v.poin !== '') {
            const vPoin = parseFloat(v.poin);
            if (!isNaN(vPoin) && vPoin > 0) return vPoin;
        }
    }
    return parseFloat(p.poin) || 0;
};

window.getDist = (lat1, lon1, lat2, lon2) => {
    if (!lat1 || !lon1 || !lat2 || !lon2) return 0;
    const R = 6371; 
    const dLat = (lat2-lat1)*Math.PI/180;
    const dLon = (lon2-lon1)*Math.PI/180;
    const a = Math.sin(dLat/2)*Math.sin(dLat/2) + Math.cos(lat1*Math.PI/180)*Math.cos(lat2*Math.PI/180)*Math.sin(dLon/2)*Math.sin(dLon/2);
    const c = 2*Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    return R*c;
};

window.autoParseCoords = (input) => {
    const val = input.value.trim();
    const coords = val.split(',');
    if (coords.length >= 2){
        const lat = parseFloat(coords[0].trim());
        const lng = parseFloat(coords[1].trim());
        if (!isNaN(lat) && !isNaN(lng)){
            setV('set-lat', lat);
            setV('set-lng', lng);
            showToast("Koordinat tersalin!");
            return;
        }
    }
    showToast("Format salah! Coba: Lat, Lng");
};

/**
 * Generate dan update dynamic Web App Manifest blob secara realtime
 * agar PWA standalone header/status bar langsung mengikuti warna toko
 * @param {string} customThemeColor - warna HEX kustom opsional
 */
export const updatePwaManifest = (customThemeColor) => {
    try {
        const sName = appData.store?.name || 'Toko Putri';
        const rawLogo = appData.store?.logo || '';
        const sLogo = /^(https?:|data:)/i.test(rawLogo) ? rawLogo : 'https://placehold.co/192x192?text=Logo';
        const tColor = document.documentElement.classList.contains('dark') ? '#0b1120' : '#ffffff';
        const brandColor = customThemeColor || appData.store?.themeColor || localStorage.getItem('freshmart_theme_color') || '#10b981';

        let mLink = document.getElementById('dynamic-manifest');
        if(!mLink) { 
            mLink = document.createElement('link'); 
            mLink.id = 'dynamic-manifest'; 
            mLink.rel = 'manifest'; 
            document.head.appendChild(mLink); 
        }
        
        let aIcon = document.getElementById('dynamic-apple-icon');
        if(!aIcon) { 
            aIcon = document.createElement('link'); 
            aIcon.id = 'dynamic-apple-icon'; 
            aIcon.rel = 'apple-touch-icon'; 
            document.head.appendChild(aIcon); 
        }
        aIcon.href = sLogo;
        
        let fIcon = document.getElementById('dynamic-favicon');
        if(!fIcon) { 
            fIcon = document.createElement('link'); 
            fIcon.id = 'dynamic-favicon'; 
            fIcon.rel = 'icon'; 
            document.head.appendChild(fIcon); 
        }
        fIcon.href = sLogo;
        
        const manifestObj = {
            id: window.location.origin + "/",
            name: sName, 
            short_name: sName, 
            description: appData.store?.slogan || (sName + ' - Belanja online lebih mudah'),
            start_url: window.location.origin + "/", 
            scope: window.location.origin + "/",
            lang: 'id',
            dir: 'ltr',
            display: 'standalone',
            display_override: ['standalone', 'minimal-ui'],
            orientation: 'portrait',
            categories: ['shopping', 'business'],
            background_color: tColor, 
            theme_color: brandColor,
            icons: [
                { src: sLogo, sizes: '192x192', type: 'image/png', purpose: 'any' },
                { src: sLogo, sizes: '512x512', type: 'image/png', purpose: 'any' }
            ]
        };
        
        if (mLink.dataset.blobUrl) {
            try { URL.revokeObjectURL(mLink.dataset.blobUrl); } catch {}
        }
        const blobUrl = URL.createObjectURL(new Blob([JSON.stringify(manifestObj)], {type: 'application/manifest+json'}));
        mLink.dataset.blobUrl = blobUrl;
        mLink.href = blobUrl;
    } catch(e) { 
        console.error("PWA Manifest Update Error: ", e); 
    }
};

// ─── Expose ke window untuk atribut global ──────
window.loadAppData = loadAppData;
window.saveApp = saveApp;
window.attachRealtimeStockSync = attachRealtimeStockSync;
window.updatePwaManifest = updatePwaManifest;
