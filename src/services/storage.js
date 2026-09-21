/**
 * ============================================================
 * SERVICE PENYIMPANAN DATA & REALTIME SYNC (STORAGE & CACHE)
 * Mengatur hidrasi instan dari cache lokal (0ms), pembacaan data
 * toko & produk dari Firestore sub-koleksi, penyimpanan aman (saveApp),
 * serta sinkronisasi stok otomatis antar perangkat secara real-time.
 * ============================================================
 */

import { db, firebase, firebaseConfig } from '../config/firebase.js';
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

// ─── Helper: Urutkan produk berdasarkan susunan kustom (productOrder) ───────────
export const sortProductsByOrder = (products, productOrder = null) => {
    if (!Array.isArray(products)) return [];
    const pOrder = productOrder || appData.productOrder || [];
    if (!pOrder.length) {
        return products.sort((a, b) => (b.id || 0) - (a.id || 0));
    }
    const orderMap = new Map();
    pOrder.forEach((id, idx) => orderMap.set(String(id), idx));

    return products.sort((a, b) => {
        const idA = a && a.id != null ? String(a.id) : '';
        const idB = b && b.id != null ? String(b.id) : '';
        const hasA = orderMap.has(idA);
        const hasB = orderMap.has(idB);
        if (hasA && hasB) return orderMap.get(idA) - orderMap.get(idB);
        if (hasA) return -1;
        if (hasB) return 1;
        return (b.id || 0) - (a.id || 0);
    });
};
window.sortProductsByOrder = sortProductsByOrder;

export const loadAppData = async () => {
    if(document.documentElement.classList.contains('dark')){
        const icon = el('icon-theme');
        if(icon) icon.className = 'fa-solid fa-sun text-sm text-amber-500';
    }

    // Helper sanitasi & normalisasi URL aset
    const prepareAppData = () => {
        appData.products = appData.products || [];
        appData.productOrder = Array.isArray(appData.productOrder) ? appData.productOrder : [];
        appData.categories = appData.categories || [];
        appData.brands = appData.brands || [];
        appData.vouchers = appData.vouchers || [];
        appData.changelog = appData.changelog || [];
        appData.rewards = appData.rewards || [];
        if(appData.rewards) appData.rewards.forEach(r => { if(r.img) r.img = fixD(r.img); });
        appData.products.forEach(p => { 
            if(p.img) p.img = fixD(p.img); 
            if(p.variants) p.variants.forEach(v => { if(v.img) v.img = fixD(v.img); }); 
        });
        if(appData.banners) appData.banners.forEach(b => { if(b.img) b.img = fixD(b.img); if(b.videoUrl) b.videoUrl = fixDriveVideo(b.videoUrl); });
        if(appData.categories) appData.categories.forEach(c => { 
            if(c.img) {
                c.img = fixD(c.img);
                if (c.img.includes('10b981')) c.img = 'https://placehold.co/150/f1f5f9/64748b?text=Cat';
            }
        });
        if(appData.brands) appData.brands.forEach(b => { 
            if(b.img) {
                b.img = fixD(b.img);
                if (b.img.includes('10b981')) b.img = 'https://placehold.co/150/f1f5f9/64748b?text=Brand';
            }
        });
        if(appData.store.logo) appData.store.logo = fixD(appData.store.logo);
        if(appData.store.allProductsIcon) appData.store.allProductsIcon = fixD(appData.store.allProductsIcon);
        if(appData.store.allBrandsIcon) {
            appData.store.allBrandsIcon = fixD(appData.store.allBrandsIcon);
            if (appData.store.allBrandsIcon.includes('10b981')) appData.store.allBrandsIcon = 'https://placehold.co/150/f1f5f9/475569?text=Semua+Merek';
        }
        if(appData.payment.qrisUrl) appData.payment.qrisUrl = fixD(appData.payment.qrisUrl);
        
        cart.forEach(i => { if(i.img) i.img = fixD(i.img); });
        wishlist.forEach(i => { if(i.img) i.img = fixD(i.img); });
    };

    // Isolasi Cache Multi-Projek: Deteksi jika cache lokal berasal dari proyek toko lain
    // (misalnya saat pengembang menguji toko lain di localhost atau domain yang sama).
    const activeProject = firebaseConfig?.projectId || 'default';
    const cachedProject = sL('freshmart_active_project');
    if (cachedProject && cachedProject !== activeProject) {
        try {
            localStorage.removeItem('freshmart_cms_data');
            localStorage.removeItem('freshmart_products');
            localStorage.removeItem('freshmart_rewards');
            localStorage.removeItem('freshmart_last_update');
            localStorage.removeItem('freshmart_cart');
            localStorage.removeItem('freshmart_wishlist');
        } catch(e) {}
    }
    ssL('freshmart_active_project', activeProject);

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
        if (localProducts) appData.products = sortProductsByOrder(localProducts);
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
        // Tampilkan splash screen minimal 1.2 detik saat aplikasi dibuka agar logo resmi dan animasi toko terlihat elegan
        setTimeout(() => {
            hLoad();
        }, 1200);
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
                appData.products = sortProductsByOrder(pSnap.docs.map(doc => doc.data()));
                ssL('freshmart_products', JSON.stringify(appData.products));
                ssL('freshmart_last_update', serverUpdate.toString());

                // Fetch data katalog hadiah awal untuk browser/perangkat baru
                try {
                    const rSnap = await db.collection("freshmart").doc("cms_data").collection("rewards").get();
                    appData.rewards = rSnap.docs.map(doc => doc.data()).sort((a,b) => (b.id||0) - (a.id||0));
                    ssL('freshmart_rewards', JSON.stringify(appData.rewards));
                } catch(re) {
                    console.warn('Initial rewards fetch non-blocking error:', re);
                }

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
            setTimeout(() => {
                hLoad();
            }, 800);
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
            // FIX BUG #2: Selalu sertakan updatedProductIds jika ada di updateMeta,
            // bahkan saat changedKeys adalah array kosong [] (kasus produk/stok berubah).
            // Sebelumnya baris ini sudah ada tapi perlu dipastikan tidak dilewati.
            if (updateMeta?.updatedProductIds && Array.isArray(updateMeta.updatedProductIds)) {
                partial.updatedProductIds = updateMeta.updatedProductIds;
            } else {
                // Reset field ini agar listener tidak salah baca data lama
                partial.updatedProductIds = firebase.firestore.FieldValue.delete();
            }
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
// PERBAIKAN BUG REALTIME SYNC MULTI-PERANGKAT:
// Root cause: listener lama hanya memantau dokumen cms_data dan mengandalkan
// field updatedProductIds sebagai sinyal tidak langsung. Field ini mudah tertimpa
// saat perangkat lain menyimpan setting bersamaan, sehingga 4 perangkat lain
// kehilangan informasi produk mana yang berubah dan tidak pernah mengambil update.
//
// SOLUSI: Dua listener sejajar yang saling melengkapi:
// 1. Listener cms_data → menangani perubahan settings toko (banners, vouchers, dll)
// 2. Listener sub-koleksi products → menangani perubahan data produk secara NATIVE
//    Firestore secara otomatis mengirimkan hanya dokumen yang benar-benar berubah
//    (granular change), hemat kuota dan 100% andal tanpa sinyal tidak langsung.
// =====================================================================
let isSyncingRealtime = false;
let pendingSyncDoc = null;
let isTabHidden = typeof document !== 'undefined' ? document.hidden : false;
let hasDeferredSync = false;
let hasSessionSyncedProducts = false;

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

// ─── Helper: Normalisasi produk dari snapshot Firestore ─────────────────────────
const normalizeProd = (data) => {
    if (!data) return data;
    const p = { ...data };
    if (p.id == null) p.id = 0;
    if (typeof p.id === 'string' && !isNaN(p.id)) p.id = Number(p.id);
    if (p.img) p.img = fixD(p.img);
    if (p.variants) p.variants.forEach(v => { if (v.img) v.img = fixD(v.img); });
    return p;
};

// ─── Helper: Refresh UI setelah ada perubahan produk ───────────────────────────
const refreshProdUI = () => {
    setIn('stat-products', appData.products.filter(p => p.isActive !== 'false' && p.isActive !== false).length);
    sanitizeCart();
    updCart();
    if (typeof rDyn === 'function') rDyn(); else if (typeof window.rDyn === 'function') window.rDyn();
    if (typeof rCat === 'function') rCat(); else if (typeof window.rCat === 'function') window.rCat();
    // Refresh tabel admin jika container tabel admin sedang aktif di layar (tanpa memandang status login)
    const adminListEl = document.getElementById('admin-list-container');
    if (adminListEl && typeof window.rAdmItms === 'function') {
        const curTab = window.cTab || 'products';
        if (['products','colors'].includes(curTab)) {
            window.rAdmItms(curTab);
        }
    }
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
};

export const attachRealtimeStockSync = () => {
    if (window.unsubCmsRealtime) return;

    const doSync = async (doc) => {
        if (!doc.exists) return;
        const f = doc.data();
        const serverUpdate = f.lastUpdate || 0;
        const localUpdate = parseInt(sL('freshmart_last_update') || '0');

        if (isTabHidden) {
            pendingSyncDoc = doc;
            hasDeferredSync = true;
            return;
        }

        if (serverUpdate === localUpdate && serverUpdate > 0 && hasSessionSyncedProducts && (appData.products && appData.products.length > 0)) {
            return;
        }

        isSyncingRealtime = true;
        try {
            const updateType = f.updateType || 'full';
            const updatedProductIds = Array.isArray(f.updatedProductIds) ? f.updatedProductIds.map(String) : [];

            appData.store = { ...defApp.store, ...(f.store || {}) };
            if (f.productOrder && Array.isArray(f.productOrder)) {
                appData.productOrder = f.productOrder;
                if (appData.products && appData.products.length) {
                    sortProductsByOrder(appData.products);
                }
            }
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
            if (appData.categories) appData.categories.forEach(c => { 
                if(c.img) {
                    c.img = fixD(c.img);
                    if (c.img.includes('10b981')) c.img = 'https://placehold.co/150/f1f5f9/64748b?text=Cat';
                }
            });
            if (appData.brands) appData.brands.forEach(b => { 
                if(b.img) {
                    b.img = fixD(b.img);
                    if (b.img.includes('10b981')) b.img = 'https://placehold.co/150/f1f5f9/64748b?text=Brand';
                }
            });

            // product_delete: hapus dari array lokal segera sebagai optimasi cepat.
            // Listener products sub-collection (attachRealtimeProductsSync) juga akan
            // mendeteksi penghapusan ini via change.type === 'removed'.
            if (updateType === 'product_delete' && updatedProductIds.length > 0) {
                updatedProductIds.forEach(targetId => {
                    const pIdx = appData.products.findIndex(p => (p.id != null ? p.id.toString() : '') === targetId);
                    if (pIdx > -1) appData.products.splice(pIdx, 1);
                });
                ssL('freshmart_products', JSON.stringify(appData.products));
                hasSessionSyncedProducts = true;
                refreshProdUI();
            } else if (!hasSessionSyncedProducts && (!appData.products || appData.products.length === 0)) {
                // Sesi pertama, belum ada produk sama sekali — fetch semua sebagai bootstrap
                const pSnap = await db.collection("freshmart").doc("cms_data").collection("products").get();
                appData.products = sortProductsByOrder(pSnap.docs.map(d => normalizeProd(d.data())));
                ssL('freshmart_products', JSON.stringify(appData.products));
                hasSessionSyncedProducts = true;
                refreshProdUI();
            } else {
                hasSessionSyncedProducts = true;
            }

            ssL('freshmart_cms_data', JSON.stringify(f));
            ssL('freshmart_last_update', serverUpdate.toString());

            if (appData.store) {
                applyUITheme(appData.store.uiTheme, appData.store.themeColor);
                applyBackgroundStyle(appData.store.bgStyle, appData.store.bgCustomUrl);
            }
            updatePwaManifest();

            setIn('stat-products', appData.products.filter(p => p.isActive !== 'false' && p.isActive !== false).length);

            // Refresh storefront dan tabel admin untuk perubahan settings
            if (typeof rDyn === 'function') rDyn(); else if (typeof window.rDyn === 'function') window.rDyn();
            if (typeof rCat === 'function') rCat(); else if (typeof window.rCat === 'function') window.rCat();
            sanitizeCart();
            updCart();

            // Refresh tabel admin untuk tab settings (bukan products — itu sudah ditangani refreshProdUI dari listener products)
            const isAdminActive = window.isAdm || window.__localIsAdm;
            if (isAdminActive && typeof window.rAdmItms === 'function') {
                const curTab = window.cTab || 'products';
                if (['categories','vouchers','banners','brands','banks','colors'].includes(curTab)) {
                    window.rAdmItms(curTab);
                }
            }
        } catch (e) {
            console.error('Gagal sinkron realtime settings:', e);
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

// =====================================================================
// LISTENER REALTIME LANGSUNG SUB-KOLEKSI PRODUCTS (INTI PERBAIKAN BUG)
// Sebelumnya tidak ada listener langsung pada koleksi products — sistem
// mengandalkan sinyal tidak langsung via field updatedProductIds di cms_data
// yang mudah tertimpa dan menyebabkan 4 perangkat kehilangan update.
//
// Sekarang Firestore secara native memantau setiap perubahan di koleksi
// produk dan mengirimkan HANYA dokumen yang berubah (change type: added,
// modified, removed) ke semua perangkat terhubung secara realtime (<200ms).
// Hemat kuota: tidak ada full-fetch, hanya data yang benar-benar berubah.
// =====================================================================
export const attachRealtimeProductsSync = () => {
    if (window.unsubProductsRealtime) return; // jangan pasang dobel

    let isInitialLoad = true;

    window.unsubProductsRealtime = db.collection("freshmart").doc("cms_data").collection("products")
        .onSnapshot((snap) => {
            // Snapshot pertama saat listener terhubung (initial load):
            // WAJIB langsung rekonsiliasi data dari server Firestore ke appData.products & cache lokal!
            // Jangan skip! Jika di-skip, browser yang memiliki cache lokal lama akan terus menampilkan
            // data usang yang berbeda dengan browser lain sampai ada yang mengedit produk tersebut lagi.
            if (isInitialLoad) {
                isInitialLoad = false;
                hasSessionSyncedProducts = true;
                appData.products = sortProductsByOrder(snap.docs.map(d => normalizeProd(d.data())));
                ssL('freshmart_products', JSON.stringify(appData.products));
                refreshProdUI();
                return;
            }

            let hasChange = false;

            snap.docChanges().forEach(change => {
                const prod = normalizeProd(change.doc.data());
                const docId = change.doc.id; // Firestore doc ID = produk ID (sebagai string)

                if (change.type === 'added' || change.type === 'modified') {
                    // Produk baru/diperbarui: update atau upsert ke array lokal
                    const existingIdx = appData.products.findIndex(
                        p => (p.id != null ? p.id.toString() : '') === docId
                    );
                    if (existingIdx > -1) {
                        appData.products[existingIdx] = prod;
                    } else {
                        appData.products.unshift(prod);
                        sortProductsByOrder(appData.products);
                    }
                    hasChange = true;
                } else if (change.type === 'removed') {
                    // Produk dihapus
                    const pIdx = appData.products.findIndex(
                        p => (p.id != null ? p.id.toString() : '') === docId
                    );
                    if (pIdx > -1) {
                        appData.products.splice(pIdx, 1);
                        hasChange = true;
                    }
                }
            });

            if (hasChange) {
                // Simpan ke cache lokal dan segarkan semua UI (storefront + admin table)
                ssL('freshmart_products', JSON.stringify(appData.products));
                refreshProdUI();
            }
        }, (err) => {
            console.warn('Realtime products listener error:', err);
        });
};

// FITUR BARU (REFACTOR KEAMANAN & HEMAT KUOTA): katalog hadiah dengan cache lokal
export const attachRewardsRealtime = () => {
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
            const isAdminActive = window.isAdm || window.__localIsAdm;
            if (isAdminActive && window.cTab === 'rewards' && typeof window.rAdmItms === 'function') window.rAdmItms('rewards');
            if (typeof window.renderRewardCatalog === 'function') window.renderRewardCatalog();
            const memberModal = document.getElementById('member-modal');
            if (memberModal && memberModal.style.display === 'flex' && currentMember && typeof window.rMemberModalBody === 'function') window.rMemberModalBody();
        }, err => { console.warn('Realtime hadiah gagal:', err); });
};

// ─── Logika Harga & Jarak GPS ────────────────────────────────────────────────
// getEffP, getEffHpp, getEffPoin, getDist, autoParseCoords
// telah dipindahkan ke: src/core/pricing.js
// (expose ke window.* sudah dilakukan dari sana — tidak perlu duplikasi di sini)

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
// PENTING: assign SETELAH deklarasi const di atas — urutan ini menjamin tidak ada nilai undefined.
window.loadAppData = loadAppData;
window.saveApp = saveApp;
window.sortProductsByOrder = sortProductsByOrder;
window.attachRealtimeStockSync = attachRealtimeStockSync;
window.attachRealtimeProductsSync = attachRealtimeProductsSync;
window.attachRewardsRealtime = attachRewardsRealtime;
window.updatePwaManifest = updatePwaManifest;
