import './style.css';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
// firebase/compat/analytics: diload LAZY setelah halaman siap (bukan di render path kritis)
import DOMPurify from 'dompurify';

// ─── Import Modul Internal ──────────────────────────────────────────────────────
// Config & Firebase (inisialisasi Firebase, db, auth, analytics)
import { db, auth, ADMIN_UID, loadAnalytics, firebaseConfig } from './config/firebase.js';
// Core: Theme Engine (color palettes, dark mode, CSS variables, background style)
import { uiPalettes, hexToRgb, applyUITheme, initDarkMode, toggleTheme as _toggleTheme, initThemeIcon, applyBackgroundStyle } from './core/theme.js';
// Core: Utilities (helper functions stateless)
import { el, show, hide, toggleCls, setIn, setH, setV, getV, sL, ssL, esc, fCur, fixD, getYouTubeId, parseVideoUrl, fixDriveVideo, fixDriveVideoPreview, getOptImg, rewardStatusLabel, updateSEO, injectJSONLD, ensureScriptLoaded } from './core/utils.js';

// Core: State (struktur data default)
import { defApp as _defApp } from './core/state.js';
// Services: GAS URL
import { GAS_UPLOAD_URL as _GAS_URL } from './services/gas.js';
// Modules: Print & Dokumen (Thermal Struk, Invoice & Surat Jalan A4)
import './modules/print/index.js';
// Modules: Member, Voucher & Program Loyalitas Hadiah
import './modules/member/index.js';
// Modules: Keranjang Belanja & Checkout Pemesanan
import './modules/cart/index.js';
// Modules: Katalog Produk, Search, Filter & Modal Interaktif
import './modules/catalog/index.js';
// Modules: Riwayat Pesanan & Ulasan Pelanggan
import './modules/orders/index.js';
// Modules: Manajemen Admin & CMS Seller
import './modules/admin/index.js';
// Modules: Tanya Jawab (Q&A / FAQ) Storefront & Admin
import './modules/faq/index.js';


// ─── Expose ke window (untuk kompatibilitas kode inline di index.html) ──────────
window.firebase   = firebase;
window.DOMPurify  = DOMPurify;

// ─── THEME & BACKGROUND ENGINE ──────────────────────────────────────────────────
// Expose fungsi tema & background ke window agar bisa dipanggil dari HTML inline
window.uiPalettes  = uiPalettes;
window.hexToRgb    = hexToRgb;
window.applyUITheme = applyUITheme;
window.toggleTheme = _toggleTheme;
window.applyBackgroundStyle = applyBackgroundStyle;

// Inisialisasi tema dari localStorage/preferensi OS
initDarkMode();
const savedUITheme = localStorage.getItem('freshmart_ui_theme') || 'emerald';
let activeColors   = applyUITheme(savedUITheme, localStorage.getItem('freshmart_theme_color'));

// Inisialisasi gaya background dari cache lokal
const initBg = () => {
    initThemeIcon();
    const savedBgStyle = localStorage.getItem('freshmart_bg_style') || 'hero_arch';
    const savedBgUrl = localStorage.getItem('freshmart_bg_custom_url') || '';
    applyBackgroundStyle(savedBgStyle, savedBgUrl);
};

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initBg);
} else {
    initBg();
}

// ─── SECTION 1: MAIN APP LOGIC ─────────────────────────────────────────────────


// ─── SECTION 2: GLOBAL ERROR HANDLING ─────────────────────────────────────────

/* =========================================================
   FRESHMART POS & E-COMMERCE SYSTEM
   Sistem POS & E-Commerce untuk Toko Putri
===========================================================*/

window.onerror = function(msg, url, line, col, error) {
    console.error("Global Error Caught:", msg, "at", line, ":", col);
    if(typeof showToast === 'function') showToast("Ops, ada kendala sistem.");
    return false;
};
window.addEventListener("unhandledrejection", function(e) {
    console.warn("Promise Rejection Sentinel:", e.reason);
});

// ─── SECTION 3: EXPOSE UTILS & SEO KE WINDOW ───────────────────────────────────
// Fungsi-fungsi berikut sudah diimport dari core/utils.js (atas),
// di-expose ke window agar bisa dipanggil dari kode inline di index.html
window.updateSEO       = updateSEO;
window.injectJSONLD    = injectJSONLD;
window.rewardStatusLabel = rewardStatusLabel;
window.getYouTubeId   = getYouTubeId;
window.parseVideoUrl   = parseVideoUrl;
window.fixDriveVideo   = fixDriveVideo;
window.fixDriveVideoPreview = fixDriveVideoPreview;


// ─── SECTION 4: FIREBASE, GAS & APP DATA ───────────────────────────────────────
// Firebase sudah diinisialisasi di src/config/firebase.js (diimport di atas).
// Di sini kita hanya mendefinisikan ulang referensi lokal yang dipakai oleh closure
// di bawah (karena banyak fungsi masih memakai variabel lokal, bukan import).

// GAS URL: diimpor dari services/gas.js, tapi diduplikat sebagai let lokal
// agar bisa di-override di sini tanpa mengubah modul terpisah.
let GAS_UPLOAD_URL = _GAS_URL;

// defApp: struktur data default toko. Lihat src/core/state.js untuk versi
// yang sudah dimodularisasi. Di sini dipertahankan sebagai const lokal
// karena masih banyak digunakan oleh closure di bawah ini.
const defApp = _defApp;

// HELPER: Kalkulasi PPN & DPP berdasarkan mode Inklusif / Eksklusif
window.calcTaxDetails = (baseAmount) => {
    const ppnEnabled = appData.store.ppnEnabled === true || appData.store.ppnEnabled === 'true';
    const ppnRate = parseFloat(appData.store.ppnRate) || 11;
    const ppnType = appData.store.ppnType || 'exclusive';

    if (!ppnEnabled || baseAmount <= 0) {
        return { ppnEnabled: false, ppnRate: 0, ppnType, ppnAmount: 0, dppAmount: Math.max(0, baseAmount), grandTotalAdd: 0 };
    }

    if (ppnType === 'inclusive') {
        const dpp = Math.round((baseAmount * 100) / (100 + ppnRate));
        const ppn = baseAmount - dpp;
        return { ppnEnabled: true, ppnRate, ppnType: 'inclusive', ppnAmount: ppn, dppAmount: dpp, grandTotalAdd: 0 };
    } else {
        const ppn = Math.round((baseAmount * ppnRate) / 100);
        return { ppnEnabled: true, ppnRate, ppnType: 'exclusive', ppnAmount: ppn, dppAmount: Math.max(0, baseAmount), grandTotalAdd: ppn };
    }
};

// ─── SECTION 5: STATE & VARIABEL GLOBAL ──────────────────────────────────────
// Firebase (db, auth, ADMIN_UID) sudah diimport dari src/config/firebase.js di atas.
// Analytics diload lazy saat browser idle.
if (typeof requestIdleCallback !== 'undefined') {
    requestIdleCallback(loadAnalytics, { timeout: 5000 });
} else {
    setTimeout(loadAnalytics, 3000);
}

// State Variables — didefinisikan sebagai let lokal (bukan dari state.js)
// karena banyak fungsi di bawah menggunakan closure ke variabel ini.
let confirmCb = null;
let appData = JSON.parse(JSON.stringify(defApp));

window.updateProBadge = () => {};

let cart = [], wishlist = [], myOrders = [];
let cust = { name:'', address:'', lat:null, lng:null, deliveryMethod:'delivery', distance:0, note:'', wa:'' };
// Program loyalitas member
let currentMember = null; // { id, name, phone, points } | null
let selectedReward = null;
let memberCheckTimer = null;

let aCat = 'Semua Produk', aBrand = 'Semua Merek', sQ = '', cSort = 'newest', cView = 'grid', cPage = 1, iPP = 12;
let cTab = 'orders', aSq = '', eId = null;
window.isAdm = false; window.isPro = true;
let cProd = null, cVar = 0, tVars = [], tWhol = [], tSpec = [], cQty = 1, oMods = [];
let aOrdLst = null, aCustLst = null, aRevLst = null, gOrds = [], gReviews = [], cVOrd = null, vouch = null, toastT, isSaving = false, bannerTmr = null;
let reviewFilterMode = 'all';
let lastReportPeriod = 'today';


// =====================================================================
// FIX: STATUS PESANAN PELANGGAN SEKARANG REALTIME OTOMATIS
// Sebelumnya status pesanan HANYA diperbarui saat pelanggan menekan
// tombol "Status" manual (satu kali ambil data / .get()). Jadi kalau
// admin mengubah status pesanan (Baru -> Diproses -> Selesai) dari
// perangkat lain, pelanggan yang sedang membuka tab "Pesanan Saya"
// TIDAK akan tahu sampai mereka menekan tombol itu sendiri.
//
// Sekarang setiap kali tab "Pesanan Saya" dibuka, dipasang listener
// realtime Firestore (onSnapshot) untuk SETIAP pesanan di riwayat
// perangkat ini. Begitu admin mengubah status di Firestore, badge
// status di layar pelanggan langsung berubah sendiri, tanpa refresh
// dan tanpa menekan tombol apapun. Listener otomatis dilepas saat
// pelanggan pindah dari tab "Pesanan Saya" supaya tidak boros kuota.
// =====================================================================
// Note: Realtime listener status pesanan (attachMyOrdersRealtime, detachMyOrdersRealtime)
// telah dipindahkan ke modul: src/modules/orders/orders.js


// Coba muat state keranjang & wishlist dari LocalStorage
try { cart = JSON.parse(sL('freshmart_cart')) || []; } catch(e) {}
try { wishlist = JSON.parse(sL('freshmart_wishlist')) || []; } catch(e) {}
try { myOrders = JSON.parse(sL('freshmart_my_orders')) || []; } catch(e) {}

// Setup History API (Untuk Tombol Back)
// FIX: selalu di-reset (bukan hanya jika kosong) supaya state history selalu sinkron dengan
// tampilan yang sedang terlihat di layar. Mencegah tombol back "nyangkut" di state lama
// sisa sesi sebelumnya saat halaman di-refresh.
history.replaceState({view: 'view-catalog'}, '', '');

const sLoad = t => { if(t) setIn('loader-text', t); const gl = el('global-loader'); if(gl) { gl.style.display = 'flex'; } };
const hLoad = () => { const gl = el('global-loader'); if(gl) gl.style.display = 'none'; };

// Note: sanitizeCart telah dipindahkan ke modul: src/modules/cart/cart.js
const sanitizeCart = () => window.sanitizeCart();


// --- 4. LOGIKA LOAD & SAVE DATA UTAMA (OPTIMASI HIGH PERFORMANCE & INSTANT PAINT) ---
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
    let localUpdate = parseInt(sL('freshmart_last_update') || '0');
    let hasRenderedCached = false;

    if (localCms) {
        appData = { ...defApp, ...localCms };
        appData.store = { ...defApp.store, ...(localCms.store || {}) };
        appData.payment = { ...defApp.payment, ...(localCms.payment || {}) };
        appData.config = { ...defApp.config, ...(localCms.config || {}) };
        if (appData.config && appData.config.gasUrl) GAS_UPLOAD_URL = appData.config.gasUrl;
        if (localProducts) appData.products = localProducts;
        prepareAppData();
        sanitizeCart();
        updCart();
        updWish();
        rDyn();
        setIn('stat-products', appData.products.filter(p => p.isActive !== 'false' && p.isActive !== false).length);
        hLoad(); // Langsung buka antarmuka tanpa jeda
        hasRenderedCached = true;
    } else {
        sLoad('Memuat Toko...');
    }

    // 2. BACKGROUND REVALIDATION: Sinkronkan update terbaru dari server secara mulus di latar belakang
    try {
        const d = await db.collection("freshmart").doc("cms_data").get();
        if (d.exists) {
            const f = d.data();
            const serverUpdate = f.lastUpdate || 0;
            
            // Perbarui hanya jika server memiliki versi baru atau belum pernah render dari cache
            if (!hasRenderedCached || serverUpdate > localUpdate) {
                ssL('freshmart_cms_data', JSON.stringify(f));
                appData = { ...defApp, ...f };
                appData.store = { ...defApp.store, ...(f.store || {}) };
                appData.payment = { ...defApp.payment, ...(f.payment || {}) };
                appData.config = { ...defApp.config, ...(f.config || {}) };
                if (appData.config && appData.config.gasUrl) GAS_UPLOAD_URL = appData.config.gasUrl;

                if (f.products && f.products.length > 0) {
                    appData.products = f.products.sort((a,b) => (b.id||0) - (a.id||0));
                    ssL('freshmart_products', JSON.stringify(appData.products));
                } else {
                    const pSnap = await db.collection("freshmart").doc("cms_data").collection("products").get();
                    appData.products = pSnap.docs.map(doc => doc.data()).sort((a,b) => (b.id||0) - (a.id||0));
                    ssL('freshmart_products', JSON.stringify(appData.products));
                    ssL('freshmart_last_update', serverUpdate.toString());
                }
                
                prepareAppData();
                sanitizeCart();
                updCart();
                updWish();
                rDyn();
                setIn('stat-products', appData.products.filter(p => p.isActive !== 'false' && p.isActive !== false).length);
            }
        }
    } catch(e) {
        if (!hasRenderedCached) {
            showToast("Mode Offline (Data Lokal)");
        }
    } finally {
        hLoad();
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
    try {
        const sName = appData.store.name || 'Toko Saya';
        // FIX BUG: logo default toko adalah "fa-store" (sentinel internal untuk
        // menampilkan ikon <i class="fa-solid fa-store"> di katalog saat admin belum
        // upload logo asli) -- BUKAN url gambar. Sebelumnya nilai ini ikut disetel
        // sebagai favicon/apple-touch-icon/manifest icon mentah-mentah, menyebabkan
        // request ke "/fa-store" (404) dan error "Manifest: property 'src' invalid"
        // karena manifest dimuat lewat blob: URL yang tidak bisa resolve path relatif.
        // Sekarang: kalau bukan URL gambar yang valid (http/https/data:), pakai placeholder.
        const rawLogo = appData.store.logo || '';
        const sLogo = /^(https?:|data:)/i.test(rawLogo) ? rawLogo : 'https://placehold.co/192x192?text=Logo';
        const tColor = document.documentElement.classList.contains('dark') ? '#0f172a' : '#ffffff';
        // FIX BUG UTAMA: theme_color manifest sebelumnya SELALU hardcode putih/gelap (var tColor),
        // jadi mengabaikan warna header yang dipilih admin di Pengaturan > Profil Toko.
        // Akibatnya status bar & address bar aplikasi PWA yang sudah di-install TIDAK PERNAH
        // mengikuti warna toko, walau meta theme-color di tab browser biasa sudah benar.
        const brandColor = appData.store.themeColor || localStorage.getItem('freshmart_theme_color') || '#10b981';
        
        let mLink = document.getElementById('dynamic-manifest');
        if(!mLink) { mLink = document.createElement('link'); mLink.id = 'dynamic-manifest'; mLink.rel = 'manifest'; document.head.appendChild(mLink); }
        
        let aIcon = document.getElementById('dynamic-apple-icon');
        if(!aIcon) { aIcon = document.createElement('link'); aIcon.id = 'dynamic-apple-icon'; aIcon.rel = 'apple-touch-icon'; document.head.appendChild(aIcon); }
        aIcon.href = sLogo;
        
        let fIcon = document.getElementById('dynamic-favicon');
        if(!fIcon) { fIcon = document.createElement('link'); fIcon.id = 'dynamic-favicon'; fIcon.rel = 'icon'; document.head.appendChild(fIcon); }
        fIcon.href = sLogo;
        
        const manifestObj = {
            id: window.location.origin + "/",
            name: sName, 
            short_name: sName, 
            description: appData.store.slogan || (sName + ' - Belanja online lebih mudah'),
            // MODIFIKASI: Menggunakan URL Absolut agar Valid di semua Browser
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
                // FIX TAMPILAN PWA: purpose HANYA 'any' (bukan 'any maskable').
                // Logo diupload bebas oleh admin, TIDAK didesain dengan "safe zone"
                // khusus untuk maskable icon. Kalau ditandai 'maskable', Android akan
                // memotong logo jadi bentuk bulat/squircle secara paksa -- logo kotak/
                // lebar bisa kepotong pinggirnya. Dengan 'any', Android tetap menaruh
                // lingkaran latar di belakang ikon (tanpa memotong isi logo).
                { src: sLogo, sizes: '192x192', type: 'image/png', purpose: 'any' },
                { src: sLogo, sizes: '512x512', type: 'image/png', purpose: 'any' }
            ]
        };
        mLink.href = URL.createObjectURL(new Blob([JSON.stringify(manifestObj)], {type: 'application/manifest+json'}));
    } catch(e) { console.error("Manifest Error: ", e); }
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
const saveApp = async (changedKeys = null) => {
    try {
        if (Array.isArray(changedKeys)) {
            const partial = { lastUpdate: firebase.firestore.FieldValue.increment(1) };
            changedKeys.forEach(k => { if (k) partial[k] = appData[k]; });
            await db.collection("freshmart").doc("cms_data").set(partial, { merge: true });
        } else {
            // Mode lama: timpa penuh. Sengaja dipakai HANYA untuk restore backup.
            const copyData = { ...appData };
            delete copyData.products; // Jangan simpan produk ke dokumen utama
            delete copyData.auth; // Jangan simpan field auth legacy (password plaintext) ke Firestore
            copyData.lastUpdate = firebase.firestore.FieldValue.increment(1);
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
// FIX BUG UTAMA (STOK TIDAK SINKRON REALTIME ANTAR PERANGKAT):
// Sebelumnya data produk (termasuk stok) hanya diambil SEKALI saat
// halaman pertama kali dibuka (loadAppData), tidak ada listener realtime
// sama sekali. Jadi kalau ada pesanan baru masuk atau admin mengubah stok
// dari perangkat lain, pelanggan yang SEDANG membuka katalog di perangkat
// lain TIDAK AKAN TAHU sampai mereka me-refresh manual halamannya.
//
// Sekarang dipasang listener realtime Firestore (onSnapshot) ke dokumen
// freshmart/cms_data. Field 'lastUpdate' di dokumen itu berfungsi sebagai
// "lonceng": setiap kali ada perubahan stok/produk dari perangkat manapun
// (checkout pelanggan ATAU edit admin), field ini ikut di-update, lalu
// SEMUA perangkat yang sedang online otomatis menerima notifikasi
// realtime dari Firestore dan langsung mengambil ulang data produk yang
// terbaru — tanpa perlu reload halaman sama sekali.
// =====================================================================
let isSyncingRealtime = false;
// FIX RACE CONDITION: flag pendingSync mencatat apakah ada snapshot Firestore
// yang datang SAAT fetch sedang berjalan. Sebelumnya snapshot seperti itu
// langsung dibuang (early return) — menyebabkan update stok terlewat.
// Sekarang: snapshot tetap dicatat, dan langsung diproses ulang setelah
// fetch pertama selesai.
let pendingSyncUpdate = false;
window.attachRealtimeStockSync = () => {
    if (window.unsubCmsRealtime) return; // jangan pasang dobel

    const doSync = async (doc) => {
        if (!doc.exists) return;
        const f = doc.data();
        const serverUpdate = f.lastUpdate || 0;
        const localUpdate = parseInt(sL('freshmart_last_update') || '0');
        if (serverUpdate <= localUpdate) return; // data sudah versi terbaru, tidak perlu apa-apa

        isSyncingRealtime = true;
        try {
            const pSnap = await db.collection("freshmart").doc("cms_data").collection("products").get();
            appData.products = pSnap.docs.map(d => d.data()).sort((a,b) => (b.id||0) - (a.id||0));
            appData.products.forEach(p => {
                if (p.img) p.img = fixD(p.img);
                if (p.variants) p.variants.forEach(v => { if (v.img) v.img = fixD(v.img); });
            });

            // Sinkronkan juga pengaturan toko (ongkir, status manajemen stok, dll)
            appData.store = { ...defApp.store, ...(f.store || {}) };
            // FIX: sinkronkan juga field lain yang bisa diubah dari tab/perangkat admin manapun,
            // supaya appData di memori tab ini tidak pernah basi (mencegah bug data hilang saat menyimpan).
            if (f.categories) appData.categories = f.categories;
            if (f.vouchers) appData.vouchers = f.vouchers;
            if (f.banners) appData.banners = f.banners;
            if (f.brands) appData.brands = f.brands;
            if (f.banks) appData.banks = f.banks;
            if (f.faqs) appData.faqs = f.faqs;
            // CATATAN: 'rewards' TIDAK lagi disinkron di sini -- sudah punya listener
            // realtime tersendiri (lihat attachRewardsRealtime), karena sekarang hadiah
            // disimpan sebagai sub-collection sendiri (bukan field di dokumen ini).
            appData.payment = { ...defApp.payment, ...(f.payment || {}) };
            appData.config = { ...defApp.config, ...(f.config || {}) };
            appData.taxSettings = { ...defApp.taxSettings, ...(f.taxSettings || {}) }; // FITUR BARU: Menu Pajak
            if (appData.config && appData.config.gasUrl) GAS_UPLOAD_URL = appData.config.gasUrl;
            if (appData.banners) appData.banners.forEach(b => { if(b.img) b.img = fixD(b.img); if(b.videoUrl) b.videoUrl = fixDriveVideo(b.videoUrl); });
            if (appData.categories) appData.categories.forEach(c => { if(c.img) c.img = fixD(c.img); });
            if (appData.brands) appData.brands.forEach(b => { if(b.img) b.img = fixD(b.img); });

            // Jika admin sedang membuka tab yang datanya baru saja berubah, segarkan tampilan listnya juga
            // FIX BUG: 'products' dulu TIDAK ada di daftar ini -- jadi kalau ada pelanggan checkout
            // sampai stok produk habis SAAT admin sedang membuka tab Produk, tampilannya TIDAK ikut
            // berubah jadi "Habis" secara langsung (harus pindah tab dulu baru kelihatan). Sekarang
            // tab Produk ikut disegarkan otomatis juga.
            if (window.isAdm && cTab && ['categories','vouchers','banners','brands','banks','products','colors'].includes(cTab) && typeof window.rAdmItms === 'function') {
                window.rAdmItms(cTab);
            }

            ssL('freshmart_products', JSON.stringify(appData.products));
            ssL('freshmart_last_update', serverUpdate.toString());

            sanitizeCart();   // buang dari keranjang produk yang baru jadi habis/nonaktif
            updCart();
            if (typeof window.rDyn === 'function') window.rDyn();
            if (typeof window.rCat === 'function') window.rCat();

            // Kalau produk yang modalnya sedang terbuka ikut berubah stoknya, segarkan juga
            if (cProd) {
                const fresh = appData.products.find(p => p.id === cProd.id);
                if (fresh) {
                    cProd = fresh;
                    // FIX: render ulang modal agar stok terbaru tampil di UI
                    if (typeof window.rProdMod === 'function') {
                        const modalEl = document.getElementById('product-modal');
                        if (modalEl && !modalEl.classList.contains('hidden') && !modalEl.classList.contains('opacity-0')) {
                            window.rProdMod();
                        }
                    }
                }
            }
        } catch (e) {
            console.warn('Gagal sinkron realtime stok:', e);
        } finally {
            isSyncingRealtime = false;
            // FIX RACE CONDITION: jika ada snapshot yang datang SAAT fetch di atas berjalan,
            // langsung proses sekarang menggunakan snapshot Firestore terbaru.
            if (pendingSyncUpdate) {
                pendingSyncUpdate = false;
                db.collection("freshmart").doc("cms_data").get().then(d => doSync(d)).catch(() => {});
            }
        }
    };

    window.unsubCmsRealtime = db.collection("freshmart").doc("cms_data")
        .onSnapshot(async (doc) => {
            if (isSyncingRealtime) {
                // Catat bahwa ada update yang masuk saat fetch sedang berjalan
                // agar tidak terlewat saat fetch selesai (lihat finally di atas)
                pendingSyncUpdate = true;
                return;
            }
            await doSync(doc);
        }, (err) => {
            console.warn('Realtime listener error:', err);
        });
};

// FITUR BARU (REFACTOR KEAMANAN): katalog hadiah sekarang sub-collection tersendiri
// (freshmart/cms_data/rewards), jadi cukup listener realtime langsung di collection
// ini -- jauh lebih simpel dari produk, karena Firestore otomatis memberi tahu setiap
// ada dokumen ditambah/diubah/dihapus, tanpa perlu triggr lastUpdate segala.
window.attachRewardsRealtime = () => {
    if (window.unsubRewardsRealtime) return; // jangan pasang dobel
    window.unsubRewardsRealtime = db.collection("freshmart").doc("cms_data").collection("rewards")
        .onSnapshot(snap => {
            appData.rewards = snap.docs.map(d => d.data()).sort((a,b) => (b.id||0) - (a.id||0));
            appData.rewards.forEach(r => { if (r.img) r.img = fixD(r.img); });
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


// --- 6. NAVIGASI, MODAL & ALERT ---

// =====================================================================================
// FIX TOTAL TOMBOL BACK: helper terpusat untuk SEMUA modal/overlay di aplikasi.
// Setiap modal yang dibuka WAJIB push state ke History API & masuk ke stack `oMods`.
// Modal HANYA ditutup secara visual saat event 'popstate' benar-benar terjadi — baik
// dipicu oleh tombol back fisik/browser/gesture Android, MAUPUN oleh tombol close (X)
// di UI yang memanggil history.back(). Dengan begini, kedua jalur (tombol UI & tombol
// back perangkat) SELALU melewati jalur penutupan yang sama persis, sehingga tidak ada
// lagi kondisi modal "nyangkut" terbuka sementara tampilan di belakangnya sudah lompat
// berubah (bug utama "back mati / lompat-lompat"). Konsisten untuk HP, tablet, & PC,
// karena seluruhnya memakai History API standar (bukan kode khusus platform).
// =====================================================================================
window.pushModalHistory = (name) => {
    history.pushState({modal: name}, '', window.location.href);
    oMods.push(name);
};
window.requestCloseModal = (name, fH, doClose) => {
    if (!fH) {
        // Ditutup lewat aksi user di UI (klik X / tombol Batal / area luar) -> tutup visual LANGSUNG tanpa tunda
        const idx = oMods.lastIndexOf(name);
        if (idx > -1) {
            oMods.splice(idx, 1);
            try { history.back(); } catch(e) {}
        }
    }
    doClose();
};

window.copyVoucher = async (code) => {
    try {
        if (navigator.clipboard && navigator.clipboard.writeText) {
            await navigator.clipboard.writeText(code);
        } else {
            // Fallback untuk browser lama / non-HTTPS
            const e = document.createElement('textarea');
            e.value = code;
            e.style.position = 'fixed';
            e.style.opacity = '0';
            document.body.appendChild(e);
            e.select();
            document.execCommand('copy');
            document.body.removeChild(e);
        }
        showToast("Kode " + code + " berhasil disalin!");
    } catch(err) {
        showToast("Gagal menyalin. Kode: " + code);
    }
};

window.showToast = (m, type, title, duration) => {
    const t = el('toast');
    if (!t) return;

    // --- Auto-detect tipe dari isi pesan ---
    if (!type) {
        const low = m.toLowerCase();
        if (/berhasil|sukses|selamat|✅|🎉|aktif|dikirim|disimpan|diupload|disalin|dipulihkan|login berhasil|restock|terhapus|diunduh|diperbarui/.test(low)) type = 'success';
        else if (/gagal|error|tolak|❌|tidak valid|tidak ditemukan|tidak cukup|salah|ditolak|quota|koneksi|putus|izin|wajib/.test(low)) type = 'error';
        else if (/tunggu|maks|hati|stok|coba|⚠️|pastikan/.test(low)) type = 'warning';
        else if (/upload|proses|memuat|loading|sedang/.test(low)) type = 'loading';
        else type = 'info';
    }

    // --- Ambil warna tema saat ini ---
    const style = getComputedStyle(document.documentElement);
    const pRgb  = style.getPropertyValue('--color-primary-rgb').trim() || '16,185,129';
    const pMain = style.getPropertyValue('--color-primary').trim() || '#10b981';
    const pDark = style.getPropertyValue('--color-primary-dark').trim() || '#047857';

    // Helper: darken hex menjadi warna gelap untuk background toast
    const darkBg = (hex, a=0.95) => {
        const r = parseInt(hex.slice(1,3),16), g = parseInt(hex.slice(3,5),16), b = parseInt(hex.slice(5,7),16);
        return `rgba(${Math.round(r*0.18)},${Math.round(g*0.18)},${Math.round(b*0.18)},${a})`;
    };
    
    // Konfigurasi per tipe (Warna solid, tanpa gradasi)
    const cfg = {
        // Sukses, info, loading → ikut warna tema (Warna Solid)
        success: {
            bg:      darkBg(pDark.replace(/[^#\w]/g,'') || '#047857'),
            border:  `rgba(${pRgb}, 0.28)`,
            accent:  pMain,
            iconBg:  `rgba(${pRgb}, 0.18)`,
            icon:    'fa-circle-check',
            label:   'Berhasil',
        },
        info: {
            bg:      darkBg(pDark.replace(/[^#\w]/g,'') || '#047857'),
            border:  `rgba(${pRgb}, 0.2)`,
            accent:  pMain,
            iconBg:  `rgba(${pRgb}, 0.15)`,
            icon:    'fa-circle-info',
            label:   'Informasi',
        },
        loading: {
            bg:      darkBg(pDark.replace(/[^#\w]/g,'') || '#047857'),
            border:  `rgba(${pRgb}, 0.15)`,
            accent:  pMain,
            iconBg:  `rgba(${pRgb}, 0.12)`,
            icon:    'fa-spinner fa-spin',
            label:   'Memproses...',
        },
        // Error & warning → warna semantik solid
        error: {
            bg:      '#1f080c',
            border:  'rgba(251,113,133,0.22)',
            accent:  '#fda4af',
            iconBg:  'rgba(251,113,133,0.15)',
            icon:    'fa-circle-xmark',
            label:   'Terjadi Kesalahan',
        },
        warning: {
            bg:      '#1f1400',
            border:  'rgba(251,191,36,0.22)',
            accent:  '#fcd34d',
            iconBg:  'rgba(251,191,36,0.15)',
            icon:    'fa-triangle-exclamation',
            label:   'Perhatian',
        },
    };

    const c = cfg[type] || cfg.info;

    // Set CSS variable inline ke elemen toast
    t.style.setProperty('--toast-bg',      c.bg);
    t.style.setProperty('--toast-border',  c.border);
    t.style.setProperty('--toast-accent',  c.accent);
    t.style.setProperty('--toast-icon-bg', c.iconBg);
    t.style.background   = c.bg;
    t.style.borderColor  = c.border;
    t.dataset.type = type;

    // Isi konten
    const iconEl = el('toast-icon');
    if (iconEl) iconEl.className = 'fa-solid ' + c.icon;
    const titleEl = el('toast-title');
    if (titleEl) { titleEl.textContent = title || c.label; titleEl.style.display = 'block'; titleEl.style.color = c.accent; }
    const iconWrap = el('toast-icon-wrap');
    if (iconWrap) { iconWrap.style.background = c.iconBg; iconWrap.style.color = c.accent; }
    setIn('toast-message', m.replace(/^[✅❌⚠️🎉🔔]\s*/, ''));

    // Progress bar
    let prog = el('toast-progress');
    if (!prog) { prog = document.createElement('div'); prog.id = 'toast-progress'; t.appendChild(prog); }
    prog.style.background  = c.accent;
    prog.style.transition  = 'none';
    prog.style.width       = '100%';
    prog.style.opacity     = '0.7';

    clearTimeout(toastT);
    t.style.top = 'calc(max(env(safe-area-inset-top), 16px) + 8px)';

    const dur = duration || (type === 'loading' ? 8000 : type === 'error' ? 4500 : 3000);
    requestAnimationFrame(() => requestAnimationFrame(() => {
        prog.style.transition = `width ${dur}ms linear`;
        prog.style.width = '0%';
    }));
    toastT = setTimeout(() => { t.style.top = '-160px'; }, dur);
};

window.showToastLoading = (m) => showToast(m, 'loading', 'Memproses...', 8000);
window.hideToast = () => { clearTimeout(toastT); const t = el('toast'); if(t) t.style.top = '-160px'; };

window.toggleTheme = () => {
    const isDark = document.documentElement.classList.toggle('dark');
    localStorage.setItem('freshmart_theme', isDark ? 'dark' : 'light');
    const icon = document.getElementById('icon-theme') || document.getElementById('theme-toggle-icon');
    if (icon) icon.className = isDark ? 'fa-solid fa-sun text-sm text-amber-400' : 'fa-solid fa-moon text-sm text-slate-600 dark:text-slate-300';
};

// FIX NAVIGASI: simpan posisi scroll tiap view supaya saat tombol back ditekan,
// posisi scroll terakhir bisa dikembalikan (persis seperti aplikasi native), bukan selalu lompat ke atas.
let viewScrollPos = {};
let curViewName = 'view-catalog';
window.changeView = (v, fH=false) => {
    if (!fH) history.pushState({view: v}, '', window.location.href);
    
    // Simpan posisi scroll tampilan yang sedang ditinggalkan SEBELUM disembunyikan
    const prevT = el(curViewName);
    if (prevT) {
        const prevS = prevT.querySelector('.scroll-content');
        if (prevS) viewScrollPos[curViewName] = prevS.scrollTop;
    }

    // FIX: lepas listener realtime status pesanan saat pelanggan pindah dari tab "Pesanan Saya"
    // supaya tidak terus membaca Firestore di background saat tidak diperlukan.
    if (curViewName === 'view-orders' && v !== 'view-orders' && typeof window.detachMyOrdersRealtime === 'function') {
        window.detachMyOrdersRealtime();
    }
    
    document.querySelectorAll('.view-section').forEach(e => {
        e.classList.add('hidden');
        e.classList.remove('flex');
    });
    
    const t = el(v);
    if (t) {
        t.classList.remove('hidden');
        t.classList.add('flex');
        
        const r = {'view-cart': renderCart, 'view-checkout': rChck, 'view-payment': rPay, 'view-wishlist': renderWish, 'view-orders': renderMyOrders, 'view-faq': window.renderStorefrontFAQ};
        if (r[v]) r[v]();
        
        const s = t.querySelector('.scroll-content');
        if (s) {
            if (fH) {
                // Navigasi MUNDUR (tombol back): kembalikan posisi scroll terakhir setelah konten selesai dirender
                const targetPos = viewScrollPos[v] || 0;
                requestAnimationFrame(() => requestAnimationFrame(() => { s.scrollTop = targetPos; }));
            } else {
                // Navigasi MAJU: selalu mulai dari atas
                s.scrollTo(0, 0);
            }
        }
    }
    curViewName = v;
};

window.showConfirm = (t, m, cb, btnText="Ya, Hapus", isDanger=true) => {
    setIn('confirm-title', t);
    setIn('confirm-msg', m);
    const b = el('confirm-yes-btn');
    if(b){
        b.innerText = btnText;
        if(isDanger){
            b.className = 'flex-1 py-3.5 bg-rose-600 text-white font-bold rounded-xl hover:bg-rose-700 active:scale-95 transition-all text-sm shadow-md shadow-rose-500/30';
            el('confirm-icon-box').className = 'w-16 h-16 bg-rose-50 dark:bg-rose-900/30 text-rose-500 dark:text-rose-400 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-5 border border-rose-200 dark:border-rose-800';
            el('confirm-icon').className = 'fa-solid fa-triangle-exclamation';
        } else {
            b.className = 'flex-1 py-3.5 bg-[var(--color-primary)] text-white font-bold rounded-xl hover:opacity-90 active:scale-95 transition-all text-sm shadow-sm';
            el('confirm-icon-box').className = 'w-16 h-16 bg-[rgba(var(--color-primary-rgb),0.08)] dark:bg-[rgba(var(--color-primary-rgb),0.15)] text-[var(--color-primary)] rounded-2xl flex items-center justify-center text-3xl mx-auto mb-5 border border-[var(--color-primary)]/20';
            el('confirm-icon').className = 'fa-solid fa-copy';
        }
    }
    confirmCb = cb;
    const m2 = el('custom-confirm-modal');
    if (m2 && m2.classList.contains('hidden')) pushModalHistory('confirm');
    show('custom-confirm-modal');
    setTimeout(() => {
        el('custom-confirm-modal').classList.remove('opacity-0');
        el('custom-confirm-box').classList.remove('scale-95');
    }, 10);
};

window.closeConfirm = (fH=false) => {
    requestCloseModal('confirm', fH, () => {
        el('custom-confirm-modal').classList.add('opacity-0');
        el('custom-confirm-box').classList.add('scale-95');
        setTimeout(() => hide('custom-confirm-modal'), 300);
    });
};
window.executeConfirm = () => {
    if (confirmCb) {
        const cb = confirmCb;
        confirmCb = null;
        closeConfirm();
        setTimeout(() => { cb(); }, 150);
    }
};

// --- Sistem Modal (Kategori & Merek) Terintegrasi dengan UI Grid Premium ---

// Fungsi Filter Global untuk Kategori dan Merek
window.setCat = c => { aCat = c; cPage = 1; rCat(); };
window.setBrand = b => { aBrand = b; cPage = 1; rCat(); };

window.openCategoryModal = () => {
    let h = ``;
    let isActiveAll = aCat === 'Semua Produk';
    
    // FIX TAMPILAN: kategori sekarang daftar list ke bawah (1 baris penuh per kategori),
    // bukan grid kotak-kotak lagi. Logo merek (openBrandModal di bawah) TIDAK diubah, tetap grid.
    h += `
    <button onclick="setCat('Semua Produk'); closeCategoryModal()" class="w-full flex items-center gap-3.5 p-3 sm:p-3.5 rounded-2xl border transition-all active:scale-[0.98] ${isActiveAll ? 'bg-[rgba(var(--color-primary-rgb),0.08)] border-[var(--color-primary)] dark:bg-[rgba(var(--color-primary-rgb),0.12)] dark:border-[var(--color-primary)] shadow-[0_0_0_1px_rgba(var(--color-primary-rgb),0.2)]' : 'bg-slate-50 border-slate-200 dark:bg-slate-800/50 dark:border-slate-700 hover:border-[var(--color-primary)]/40 dark:hover:border-[var(--color-primary)]/40'} group">
        <div class="w-11 h-11 sm:w-12 sm:h-12 rounded-xl ${isActiveAll ? 'bg-[var(--color-primary)] text-white border-none' : 'bg-white text-slate-400 border border-slate-200 dark:border-slate-600 group-hover:text-[var(--color-primary)]'} flex items-center justify-center shadow-sm shrink-0 overflow-hidden transition-colors">
            <i class="fa-solid fa-layer-group text-base sm:text-lg"></i>
        </div>
        <span class="text-xs sm:text-sm font-bold uppercase tracking-widest text-left flex-1 ${isActiveAll ? 'text-[var(--color-primary)]' : 'text-slate-600 dark:text-slate-300'}">SEMUA</span>
        <i class="fa-solid fa-circle-check text-base ${isActiveAll ? 'text-[var(--color-primary)]' : 'text-slate-300 dark:text-slate-600'}"></i>
    </button>`;

    appData.categories.forEach(c => {
        let isActive = aCat === c.name;
        // Ikon kategori tetap bisa diganti gambar custom (di Pengaturan > Kategori); kalau kosong, fallback ke ikon default
        let imgH = c.img ? `<img loading="lazy" src="${esc(c.img)}" alt="${esc(c.name)}" class="w-full h-full object-cover" onerror="this.onerror=null;this.src='https://placehold.co/100?text=Cat'">` : `<i class="fa-solid fa-box text-base sm:text-lg"></i>`;
        h += `
        <button onclick="setCat('${esc(c.name)}'); closeCategoryModal()" class="w-full flex items-center gap-3.5 p-3 sm:p-3.5 rounded-2xl border transition-all active:scale-[0.98] ${isActive ? 'bg-[rgba(var(--color-primary-rgb),0.08)] border-[var(--color-primary)] dark:bg-[rgba(var(--color-primary-rgb),0.12)] dark:border-[var(--color-primary)] shadow-[0_0_0_1px_rgba(var(--color-primary-rgb),0.2)]' : 'bg-slate-50 border-slate-200 dark:bg-slate-800/50 dark:border-slate-700 hover:border-[var(--color-primary)]/40 dark:hover:border-[var(--color-primary)]/40'} group">
            <div class="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-white dark:bg-slate-800 flex items-center justify-center shadow-sm shrink-0 text-slate-400 group-hover:text-[var(--color-primary)] overflow-hidden border border-slate-200 dark:border-slate-600">
                ${imgH}
            </div>
            <span class="text-xs sm:text-sm font-bold uppercase tracking-widest text-left flex-1 line-clamp-1 ${isActive ? 'text-[var(--color-primary)]' : 'text-slate-600 dark:text-slate-300'}">${esc(c.name)}</span>
            <i class="fa-solid fa-circle-check text-base ${isActive ? 'text-[var(--color-primary)]' : 'text-slate-300 dark:text-slate-600'}"></i>
        </button>`;
    });
    
    const container = el('modal-category-list');
    if(container) { container.innerHTML = `<div class="flex flex-col gap-2.5 pb-6 w-full">${h}</div>`; }

    const m = el('category-modal'), c = el('category-modal-content');
    if (m && c) {
        if (m.classList.contains('hidden')) pushModalHistory('category');
        show('category-modal');
        setTimeout(() => { m.classList.remove('opacity-0'); c.classList.remove('translate-y-full','sm:translate-y-10'); }, 10);
    }
};

window.openBrandModal = () => {
    let h = ``;
    let isActiveAll = aBrand === 'Semua Merek';
    
    h += `
    <button onclick="setBrand('Semua Merek'); closeBrandModal()" class="flex flex-col items-center justify-start p-2.5 sm:p-3.5 rounded-[1.25rem] border transition-all ${isActiveAll ? 'bg-[rgba(var(--color-primary-rgb),0.08)] border-[var(--color-primary)] dark:bg-[rgba(var(--color-primary-rgb),0.12)] dark:border-[var(--color-primary)] shadow-[0_0_0_1px_rgba(var(--color-primary-rgb),0.2)]' : 'bg-slate-50 border-slate-200 dark:bg-slate-800/50 dark:border-slate-700 hover:border-[var(--color-primary)]/40 dark:hover:border-[var(--color-primary)]/40'} group">
        <div class="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl ${isActiveAll ? 'bg-[var(--color-primary)] text-white border-none' : 'bg-white text-slate-400 border border-slate-200 dark:border-slate-600 group-hover:text-[var(--color-primary)]'} flex items-center justify-center shadow-sm mb-2.5 transition-colors shrink-0">
            <i class="fa-solid fa-copyright text-lg sm:text-xl"></i>
        </div>
        <span class="text-[9px] font-bold uppercase tracking-widest text-center leading-tight line-clamp-2 w-full break-words ${isActiveAll ? 'text-[var(--color-primary)]' : 'text-slate-600 dark:text-slate-300'}">SEMUA MEREK</span>
    </button>`;

    appData.brands.forEach(b => {
        let isActive = aBrand === b.name;
        let imgH = b.img ? `<img loading="lazy" src="${esc(b.img)}" alt="${esc(b.name)}" class="w-full h-full object-contain p-1.5" >` : `<i class="fa-solid fa-tag text-lg sm:text-xl"></i>`;
        h += `
        <button onclick="setBrand('${esc(b.name)}'); closeBrandModal()" class="flex flex-col items-center justify-start p-2.5 sm:p-3.5 rounded-[1.25rem] border transition-all ${isActive ? 'bg-[rgba(var(--color-primary-rgb),0.08)] border-[var(--color-primary)] dark:bg-[rgba(var(--color-primary-rgb),0.12)] dark:border-[var(--color-primary)] shadow-[0_0_0_1px_rgba(var(--color-primary-rgb),0.2)]' : 'bg-slate-50 border-slate-200 dark:bg-slate-800/50 dark:border-slate-700 hover:border-[var(--color-primary)]/40 dark:hover:border-[var(--color-primary)]/40'} group">
            <div class="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white flex items-center justify-center shadow-sm mb-2.5 text-slate-400 group-hover:text-[var(--color-primary)] overflow-hidden shrink-0 border border-slate-200 dark:border-slate-600">
                ${imgH}
            </div>
            <span class="text-[9px] font-bold uppercase tracking-widest text-center leading-tight line-clamp-2 w-full break-words ${isActive ? 'text-[var(--color-primary)]' : 'text-slate-600 dark:text-slate-300'}">${esc(b.name)}</span>
        </button>`;
    });
    
    const container = el('modal-brand-grid');
    if(container) { container.innerHTML = h; }

    const m = el('brand-modal'), c = el('brand-modal-content');
    if(m && c){
        if (m.classList.contains('hidden')) pushModalHistory('brand');
        show('brand-modal');
        setTimeout(() => { m.classList.remove('opacity-0'); c.classList.remove('translate-y-full','sm:translate-y-10'); }, 10);
    }
};

window.closeCategoryModal = (fH=false) => {
    const m = el('category-modal'), c = el('category-modal-content');
    if (m && c) {
        requestCloseModal('category', fH, () => {
            m.classList.add('opacity-0'); c.classList.add('translate-y-full','sm:translate-y-10');
            setTimeout(() => hide('category-modal'), 300);
        });
    }
};

window.closeBrandModal = (fH=false) => {
    const m = el('brand-modal'), c = el('brand-modal-content');
    if(m && c){
        requestCloseModal('brand', fH, () => {
            m.classList.add('opacity-0'); c.classList.add('translate-y-full','sm:translate-y-10');
            setTimeout(() => hide('brand-modal'), 300);
        });
    }
};

window.openQuickMenuModal = () => {
    const m = el('quickmenu-modal'), c = el('quickmenu-modal-content');
    if(m && c){
        if (m.classList.contains('hidden')) pushModalHistory('quickmenu');
        show('quickmenu-modal');
        setTimeout(() => { m.classList.remove('opacity-0'); c.classList.remove('translate-y-full','sm:translate-y-10'); }, 10);
    }
};

window.openTermsModal = () => {
    const defaultTerms = `
      <div>
        <h4 class="font-bold text-slate-800 dark:text-white mb-1.5 uppercase tracking-wider text-[10px] text-amber-500">1. Ketentuan Umum</h4>
        <p class="leading-relaxed">Layanan website Toko Putri diperuntukkan bagi pelanggan yang ingin memesan perkakas, alat teknik, dan perlengkapan pertukangan secara online.</p>
      </div>
      <div>
        <h4 class="font-bold text-slate-800 dark:text-white mb-1.5 uppercase tracking-wider text-[10px] text-amber-500">2. Pemesanan &amp; Hubungi Admin</h4>
        <p class="leading-relaxed">Setiap pesanan yang dibuat melalui keranjang belanja akan diteruskan secara otomatis ke nomor WhatsApp admin untuk konfirmasi akhir dan pengiriman.</p>
      </div>
      <div>
        <h4 class="font-bold text-slate-800 dark:text-white mb-1.5 uppercase tracking-wider text-[10px] text-amber-500">3. Kebijakan Pembayaran</h4>
        <p class="leading-relaxed">Kami mendukung pembayaran Tunai (Cash), COD, Transfer Bank, QRIS, dan sistem Tempo (Kredit) untuk pelanggan dengan limit piutang aktif.</p>
      </div>
      <div>
        <h4 class="font-bold text-slate-800 dark:text-white mb-1.5 uppercase tracking-wider text-[10px] text-amber-500">4. Kebijakan Retur &amp; Barang PO</h4>
        <p class="leading-relaxed">Barang Pre-Order (PO) dikirim sesuai estimasi. Khusus produk cat bangunan yang dicampur (tinting) tidak dapat dibatalkan atau diretur.</p>
      </div>
    `;
    const terms = appData.store.terms || defaultTerms;
    setH('terms-modal-content-body', terms.replace(/\n/g, '<br>'));
    
    const m = el('terms-modal'), c = el('terms-modal-content');
    if (m && c) {
        if (m.classList.contains('hidden')) pushModalHistory('terms');
        show('terms-modal');
        setTimeout(() => { m.classList.remove('opacity-0'); c.classList.remove('translate-y-full','sm:translate-y-10'); }, 10);
    }
};

window.closeTermsModal = (fH=false) => {
    const m = el('terms-modal'), c = el('terms-modal-content');
    if (m && c) {
        requestCloseModal('terms', fH, () => {
            m.classList.add('opacity-0'); c.classList.add('translate-y-full','sm:translate-y-10');
            setTimeout(() => hide('terms-modal'), 300);
        });
    }
};

window.openPrivacyModal = () => {
    const defaultPrivacy = `
      <div>
        <h4 class="font-bold text-slate-800 dark:text-white mb-1.5 uppercase tracking-wider text-[10px] text-violet-500">1. Data Yang Kami Kumpulkan</h4>
        <p class="leading-relaxed">Kami mengumpulkan data berupa Nama, Nomor WhatsApp, dan Alamat Pengiriman Anda saat membuat pesanan untuk keperluan pengantaran barang.</p>
      </div>
      <div>
        <h4 class="font-bold text-slate-800 dark:text-white mb-1.5 uppercase tracking-wider text-[10px] text-violet-500">2. Kerahasiaan Data</h4>
        <p class="leading-relaxed">Toko Putri berkomitmen penuh untuk menjaga kerahasiaan data pribadi pelanggan dan tidak akan membagikannya ke pihak ketiga manapun.</p>
      </div>
      <div>
        <h4 class="font-bold text-slate-800 dark:text-white mb-1.5 uppercase tracking-wider text-[10px] text-violet-500">3. Keamanan Data Transaksi</h4>
        <p class="leading-relaxed">Semua file bukti pembayaran yang diunggah diproses melalui server terenkripsi yang aman untuk mencegah kebocoran data sensitif.</p>
      </div>
    `;
    const privacy = appData.store.privacy || defaultPrivacy;
    setH('privacy-modal-content-body', privacy.replace(/\n/g, '<br>'));
    
    const m = el('privacy-modal'), c = el('privacy-modal-content');
    if (m && c) {
        if (m.classList.contains('hidden')) pushModalHistory('privacy');
        show('privacy-modal');
        setTimeout(() => { m.classList.remove('opacity-0'); c.classList.remove('translate-y-full','sm:translate-y-10'); }, 10);
    }
};

window.closePrivacyModal = (fH=false) => {
    const m = el('privacy-modal'), c = el('privacy-modal-content');
    if (m && c) {
        requestCloseModal('privacy', fH, () => {
            m.classList.add('opacity-0'); c.classList.add('translate-y-full','sm:translate-y-10');
            setTimeout(() => hide('privacy-modal'), 300);
        });
    }
};

window.closeQuickMenuModal = (fH=false) => {
    const m = el('quickmenu-modal'), c = el('quickmenu-modal-content');
    if (m && c) {
        requestCloseModal('quickmenu', fH, () => {
            m.classList.add('opacity-0'); c.classList.add('translate-y-full','sm:translate-y-10');
            setTimeout(() => hide('quickmenu-modal'), 300);
        });
    }
};

window.navigateFromQuickMenu = (targetViewOrAction) => {
    closeQuickMenuModal(true);
    const idx = oMods.indexOf('quickmenu');
    if (idx > -1) oMods.splice(idx, 1);
    
    if (typeof targetViewOrAction === 'function') {
        history.replaceState({view: curViewName}, '', window.location.href);
        targetViewOrAction();
    } else {
        history.replaceState({view: targetViewOrAction}, '', window.location.href);
        changeView(targetViewOrAction, true);
    }
};

// --- 7. UPLOAD GAMBAR ---
// ⚠️  PERINGATAN KEAMANAN: Token di bawah ini TERBACA di browser (DevTools > Sources)
// karena JavaScript client-side tidak bisa menyembunyikan nilai apapun dari user teknis.
// Token ini memberikan perlindungan dasar (bukan nol keamanan), tapi bukan solusi mutlak.
//
// MITIGASI yang WAJIB dilakukan di GAS script Anda (untuk meminimalkan penyalahgunaan):
//   1. Validasi tipe file: tolak selain image/jpeg, image/png, image/webp
//   2. Batasi ukuran file: tolak file > 5MB
//   3. Rate limiting: tolak jika > N upload per jam dari IP yang sama
//   4. Whitelist referrer: tolak jika request bukan dari domain toko Anda
//
// Ganti nilai token di bawah ini SESUAI dengan yang dikonfigurasi di GAS script Anda.
const GAS_SECRET_TOKEN = "B7qgwFQqtYLpBqdaK69HgtCfR7s5t67p";

window.handleImageUpload = async (inputElement, targetInputId, varIndex=null) => {
    const file = inputElement.files[0];
    if (!file) return;
    
    // SECURITY PATCH: Validasi tipe file (MIME type whitelist)
    const allowedMimes = ['image/jpeg', 'image/png', 'image/webp', 'image/gif'];
    if (!allowedMimes.includes(file.type)) {
        inputElement.value = '';
        return showToast("Hanya file JPG, PNG, WEBP, atau GIF yang diizinkan!");
    }
    
    if (file.size > 3*1024*1024) {
        inputElement.value = '';
        return showToast("Maksimal gambar 3MB!");
    }
    if (!GAS_UPLOAD_URL || GAS_UPLOAD_URL.includes("ISI_DENGAN")) {
        inputElement.value = '';
        return showToast("URL Script Google belum diisi!");
    }
    
    sLoad('Upload Gambar...');
    const reader = new FileReader();
    reader.readAsDataURL(file);
    
    reader.onload = async () => {
        try {
            const base64Data = reader.result.split(',')[1];
            const safeName = file.name.replace(/[^a-zA-Z0-9.]/g,'_');
            // SECURITY PATCH: Sertakan token autentikasi di setiap request upload
            const payload = { name: "POS_" + Date.now() + "_" + safeName, mimeType: file.type, data: base64Data, token: GAS_SECRET_TOKEN };
            
            const res = await fetch(GAS_UPLOAD_URL, {
                method: 'POST',
                body: JSON.stringify(payload),
                headers: { 'Content-Type': 'text/plain;charset=utf-8' },
                redirect: 'follow'
            });
            const textRes = await res.text();
            
            let responseData;
            try { responseData = JSON.parse(textRes); } catch(e) { return showToast("Error Server!"); }
            
            if (responseData.status === 'success') {
                const finalUrl = fixD(responseData.url);
                const targetInput = el(targetInputId);
                if (targetInput) {
                    targetInput.value = finalUrl;
                    targetInput.dispatchEvent(new Event('input',{bubbles:true}));
                    targetInput.dispatchEvent(new Event('change',{bubbles:true}));
                    if (varIndex !== null) uVar(varIndex, 'img', finalUrl);
                    showToast("Gambar diupload!");
                }
            } else {
                showToast("Gagal: " + (responseData.message || "Error"));
            }
        } catch(e) {
            showToast("Koneksi terputus saat upload.");
        } finally {
            hLoad();
            inputElement.value = '';
        }
    };
    reader.onerror = () => { showToast("Gagal membaca file!"); hLoad(); inputElement.value=''; };
};

// ============================================================
// FITUR BARU: Upload Video ke Google Drive lewat GAS
// Mendukung: mp4, webm, mov, avi — max 50MB
// Setelah upload, URL embed Drive diisi ke input target
// ============================================================
const VIDEO_MAX_SIZE_BYTES = 20 * 1024 * 1024; // 20MB (sesuai batas GAS v4.0)
const ALLOWED_VIDEO_MIMES  = ['video/mp4','video/webm','video/quicktime','video/x-msvideo','video/3gpp'];

window.handleVideoUpload = async (inputElement, targetInputId) => {
    const file = inputElement.files[0];
    if (!file) return;

    if (!ALLOWED_VIDEO_MIMES.includes(file.type)) {
        inputElement.value = '';
        return showToast('Hanya file MP4, WEBM, MOV, atau AVI yang diizinkan!');
    }
    if (file.size > VIDEO_MAX_SIZE_BYTES) {
        inputElement.value = '';
        return showToast('Video terlalu besar! Maksimal 50MB.');
    }
    if (!GAS_UPLOAD_URL || GAS_UPLOAD_URL.includes('ISI_DENGAN')) {
        inputElement.value = '';
        return showToast('URL Script Google belum diisi di Pengaturan!');
    }

    sLoad('Upload Video... (harap tunggu)');
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = async () => {
        try {
            const base64Data = reader.result.split(',')[1];
            const safeName = file.name.replace(/[^a-zA-Z0-9.]/g, '_');
            const payload = {
                name: 'VID_' + Date.now() + '_' + safeName,
                mimeType: file.type,
                data: base64Data,
                token: GAS_SECRET_TOKEN
            };

            const res = await fetch(GAS_UPLOAD_URL, {
                method: 'POST',
                body: JSON.stringify(payload),
                headers: { 'Content-Type': 'text/plain;charset=utf-8' },
                redirect: 'follow'
            });
            const textRes = await res.text();
            let responseData;
            try { responseData = JSON.parse(textRes); } catch(e) { return showToast('Error Server GAS!'); }

            if (responseData.status === 'success') {
                // Konversi ke URL embed iframe Drive (/preview)
                const embedUrl = 'https://drive.google.com/file/d/' + responseData.fileId + '/preview';
                const targetInput = el(targetInputId);
                if (targetInput) {
                    targetInput.value = embedUrl;
                    targetInput.dispatchEvent(new Event('input',  { bubbles: true }));
                    targetInput.dispatchEvent(new Event('change', { bubbles: true }));
                    showToast('Video berhasil diupload ke Drive!');
                }
            } else {
                showToast('Gagal upload: ' + (responseData.message || 'Error'));
            }
        } catch(e) {
            showToast('Koneksi terputus saat upload video.');
        } finally {
            hLoad();
            inputElement.value = '';
        }
    };
    reader.onerror = () => { showToast('Gagal membaca file video!'); hLoad(); inputElement.value = ''; };
};

// FITUR BARU: Fungsi Upload Gambar Khusus ke Dalam Editor Deskripsi
window.handleRTEditorImage = async (inputElement, editorId) => {
    const file = inputElement.files[0];
    if (!file) return;
    // SECURITY PATCH: Validasi MIME type untuk editor gambar
    const allowedMimes = ['image/jpeg', 'image/png', 'image/webp', 'image/gif'];
    if (!allowedMimes.includes(file.type)) {
        inputElement.value = '';
        return showToast("Hanya file JPG, PNG, WEBP, atau GIF yang diizinkan!");
    }
    if (file.size > 3*1024*1024) { inputElement.value = ''; return showToast("Maksimal gambar 3MB!"); }
    if (!GAS_UPLOAD_URL || GAS_UPLOAD_URL.includes("ISI_DENGAN")) { inputElement.value = ''; return showToast("URL Script Google belum diisi!"); }
    
    sLoad('Menyisipkan Gambar...');
    const reader = new FileReader(); reader.readAsDataURL(file);
    reader.onload = async () => {
        try {
            const base64Data = reader.result.split(',')[1];
            const safeName = file.name.replace(/[^a-zA-Z0-9.]/g,'_');
            // SECURITY PATCH: Sertakan token autentikasi
            const payload = { name: "RTE_" + Date.now() + "_" + safeName, mimeType: file.type, data: base64Data, token: GAS_SECRET_TOKEN };
            
            const res = await fetch(GAS_UPLOAD_URL, { method: 'POST', body: JSON.stringify(payload), headers: { 'Content-Type': 'text/plain;charset=utf-8' }, redirect: 'follow' });
            const textRes = await res.text();
            let responseData;
            try { responseData = JSON.parse(textRes); } catch(e) { return showToast("Error Server!"); }

            if (responseData.status === 'success') {
                const finalUrl = fixD(responseData.url);
                const ed = el(editorId);
                if(ed) {
                    ed.focus();
                    // Menyisipkan HTML gambar tepat di posisi kursor editor
                    document.execCommand('insertHTML', false, `<br><img loading="lazy" src="${finalUrl}" style="max-width:100%; border-radius:12px; margin: 10px 0; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);" ><br>`);
                }
                showToast("Gambar berhasil disisipkan!");
            } else showToast("Gagal upload gambar.");
        } catch(e) { showToast("Gagal koneksi."); } 
        finally { hLoad(); inputElement.value=''; }
    };
    reader.onerror = () => { showToast("Gagal membaca file!"); hLoad(); inputElement.value=''; };
};

// Pastikan video langsung diputar otomatis saat halaman dibuka & mengulang dari awal ketika habis
const forcePlayBannerVideos = () => {
    document.querySelectorAll('#banner-slider video.banner-video-element').forEach(vid => {
        if (!vid.dataset.init) {
            vid.dataset.init = "true";
            vid.muted = true;
            vid.loop = true;
            vid.playsInline = true;
            vid.setAttribute('playsinline', '');
            vid.setAttribute('loop', '');
            vid.setAttribute('autoplay', '');
        }
        
        if (!vid.dataset.loopAttached) {
            vid.dataset.loopAttached = "true";
            vid.addEventListener('ended', () => {
                vid.currentTime = 0;
                vid.play().catch(() => {});
            });
        }
        
        // Jangan memaksa vid.muted = true jika user sudah mengaktifkan suara
        if (vid.dataset.userUnmuted === "true") {
            vid.muted = false;
        }
        
        vid.play().catch(() => {});
    });
};
window.forcePlayBannerVideos = forcePlayBannerVideos;

// Fitur Toggle Suara Video Banner (Mute / Unmute)
window.toggleBannerVideoSound = (btn, slideIdx) => {
    const slide = el(`banner-slide-${slideIdx}`) || (btn && btn.closest('.banner-slide-item'));
    if (!slide) return;

    // 1. Cek HTML5 <video>
    const vid = slide.querySelector('video.banner-video-element');
    if (vid) {
        if (vid.muted) {
            vid.muted = false;
            vid.volume = 1.0;
            vid.dataset.userUnmuted = "true";
            vid.play().catch(() => {});
            if (btn) {
                btn.innerHTML = `<i class="fa-solid fa-volume-high text-xs"></i> <span>Suara On</span>`;
                btn.className = 'banner-sound-toggle inline-flex items-center gap-1.5 px-3 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white text-[10px] sm:text-xs font-bold rounded-full shadow-lg border border-white/20 active:scale-95 transition-all cursor-pointer';
            }
        } else {
            vid.muted = true;
            vid.dataset.userUnmuted = "false";
            if (btn) {
                btn.innerHTML = `<i class="fa-solid fa-volume-xmark text-xs"></i> <span>Aktifkan Suara</span>`;
                btn.className = 'banner-sound-toggle inline-flex items-center gap-1.5 px-3 py-1.5 bg-rose-600 hover:bg-rose-500 text-white text-[10px] sm:text-xs font-bold rounded-full shadow-lg border border-white/20 active:scale-95 transition-all cursor-pointer';
            }
        }
        return;
    }

    // 2. Cek YouTube / Drive iframe
    const iframe = slide.querySelector('iframe.banner-video-iframe');
    if (iframe) {
        const isMuted = iframe.dataset.soundMuted !== 'false';
        if (isMuted) {
            try {
                iframe.contentWindow.postMessage('{"event":"command","func":"unMute","args":""}', '*');
                iframe.contentWindow.postMessage('{"event":"command","func":"setVolume","args":[100]}', '*');
            } catch(e) {}
            let src = iframe.src || iframe.getAttribute('src');
            if (src && src.includes('mute=1')) {
                iframe.src = src.replace('mute=1', 'mute=0').replace('muted=1', 'muted=0');
            }
            iframe.dataset.soundMuted = 'false';
            if (btn) {
                btn.innerHTML = `<i class="fa-solid fa-volume-high text-xs"></i> <span>Suara On</span>`;
                btn.className = 'banner-sound-toggle inline-flex items-center gap-1.5 px-3 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white text-[10px] sm:text-xs font-bold rounded-full shadow-lg border border-white/20 active:scale-95 transition-all cursor-pointer';
            }
        } else {
            try {
                iframe.contentWindow.postMessage('{"event":"command","func":"mute","args":""}', '*');
            } catch(e) {}
            let src = iframe.src || iframe.getAttribute('src');
            if (src && src.includes('mute=0')) {
                iframe.src = src.replace('mute=0', 'mute=1').replace('muted=0', 'muted=1');
            }
            iframe.dataset.soundMuted = 'true';
            if (btn) {
                btn.innerHTML = `<i class="fa-solid fa-volume-xmark text-xs"></i> <span>Aktifkan Suara</span>`;
                btn.className = 'banner-sound-toggle inline-flex items-center gap-1.5 px-3 py-1.5 bg-rose-600 hover:bg-rose-500 text-white text-[10px] sm:text-xs font-bold rounded-full shadow-lg border border-white/20 active:scale-95 transition-all cursor-pointer';
            }
        }
    }
};

if (typeof window !== 'undefined') {
    window.addEventListener('visibilitychange', () => { if (!document.hidden) forcePlayBannerVideos(); });
    window.addEventListener('focus', forcePlayBannerVideos);
    document.addEventListener('touchstart', forcePlayBannerVideos, { once: true, passive: true });
    document.addEventListener('click', forcePlayBannerVideos, { once: true, passive: true });
}
let bannerScrollDebounce = null;
window.updateBannerDots = (activeIdx) => {
    const dotsContainer = el('banner-dots-container');
    if (!dotsContainer) return;
    const dots = dotsContainer.querySelectorAll('.banner-dot-item');
    dots.forEach((dot, idx) => {
        if (idx === activeIdx) {
            dot.className = 'banner-dot-item h-2.5 rounded-full transition-all duration-300 bg-[var(--color-primary)] w-7 shadow-sm';
        } else {
            dot.className = 'banner-dot-item w-2.5 h-2.5 rounded-full transition-all duration-300 bg-slate-300 dark:bg-slate-700 hover:bg-slate-400';
        }
    });
};

window.onBannerScroll = () => {
    if (bannerScrollDebounce) clearTimeout(bannerScrollDebounce);
    bannerScrollDebounce = setTimeout(() => {
        const sl = el('banner-slider');
        if (!sl) return;
        const items = sl.querySelectorAll('.banner-slide-item');
        if (!items || !items.length) return;
        let currentIndex = 0;
        let minDiff = Infinity;
        items.forEach((item, idx) => {
            const diff = Math.abs(item.offsetLeft - sl.scrollLeft);
            if (diff < minDiff) { minDiff = diff; currentIndex = idx; }
        });
        window.updateBannerDots(currentIndex);
    }, 100);
};

window.scrollToBanner = (index) => {
    clearInterval(bannerTmr);
    const sl = el('banner-slider');
    if (!sl) return;
    const items = sl.querySelectorAll('.banner-slide-item');
    if (items && items[index]) {
        sl.scrollTo({ left: items[index].offsetLeft - sl.offsetLeft, behavior: 'smooth' });
        window.updateBannerDots(index);
    }
    setTimeout(startBannerAutoSlide, 8000);
};

window.scrollBannerPrev = () => {
    clearInterval(bannerTmr);
    const sl = el('banner-slider');
    if (!sl) return;
    const items = sl.querySelectorAll('.banner-slide-item');
    if (!items || !items.length) return;
    let currentIndex = 0;
    let minDiff = Infinity;
    items.forEach((item, idx) => {
        const diff = Math.abs(item.offsetLeft - sl.scrollLeft);
        if (diff < minDiff) { minDiff = diff; currentIndex = idx; }
    });
    const prevIndex = (currentIndex - 1 + items.length) % items.length;
    sl.scrollTo({ left: items[prevIndex].offsetLeft - sl.offsetLeft, behavior: 'smooth' });
    window.updateBannerDots(prevIndex);
    setTimeout(startBannerAutoSlide, 8000);
};

window.scrollBannerNext = () => {
    clearInterval(bannerTmr);
    const sl = el('banner-slider');
    if (!sl) return;
    const items = sl.querySelectorAll('.banner-slide-item');
    if (!items || !items.length) return;
    let currentIndex = 0;
    let minDiff = Infinity;
    items.forEach((item, idx) => {
        const diff = Math.abs(item.offsetLeft - sl.scrollLeft);
        if (diff < minDiff) { minDiff = diff; currentIndex = idx; }
    });
    const nextIndex = (currentIndex + 1) % items.length;
    sl.scrollTo({ left: items[nextIndex].offsetLeft - sl.offsetLeft, behavior: 'smooth' });
    window.updateBannerDots(nextIndex);
    setTimeout(startBannerAutoSlide, 8000);
};

window.startBannerAutoSlide = () => {
    clearInterval(bannerTmr);
    const s = el('banner-slider');
    if (!s || !appData.banners || appData.banners.length <= 1) return;

    // Helper: kontrol playback video (pastikan video HTML5 terputar terus)
    const syncBannerVideos = () => {
        forcePlayBannerVideos();
    };

    // Jalankan pemutaran video langsung saat banner dirender/dibuka
    syncBannerVideos();
    forcePlayBannerVideos();

    // Durasi perpindahan slide disetel ke 8000 ms (8 detik) agar santai & mudah dibaca
    bannerTmr = setInterval(() => {
        const sl = el('banner-slider');
        if (!sl) return clearInterval(bannerTmr);
        const items = sl.querySelectorAll('.banner-slide-item');
        if (!items || items.length <= 1) {
            const m = sl.scrollWidth - sl.clientWidth;
            if (sl.scrollLeft >= m - 10) sl.scrollTo({left:0, behavior:'smooth'});
            else sl.scrollBy({left:sl.clientWidth, behavior:'smooth'});
        } else {
            let currentIndex = 0;
            let minDiff = Infinity;
            items.forEach((item, idx) => {
                const diff = Math.abs(item.offsetLeft - sl.scrollLeft);
                if (diff < minDiff) {
                    minDiff = diff;
                    currentIndex = idx;
                }
            });
            const nextIndex = (currentIndex + 1) % items.length;
            const targetItem = items[nextIndex];
            sl.scrollTo({ left: targetItem.offsetLeft - sl.offsetLeft, behavior: 'smooth' });
            window.updateBannerDots(nextIndex);
        }
        setTimeout(syncBannerVideos, 400);
    }, 8000);
};

window.rDyn = () => {
    const waLink = el('footer-wa-link');
    if (waLink) {
        if (appData.store.wa) {
            waLink.href = `https://wa.me/${appData.store.wa}`;
            waLink.removeAttribute('onclick');
        } else {
            waLink.href = '#';
        }
    }
    setIn('dyn-store-name', appData.store.name || 'Nama Toko Anda');
    setIn('dyn-store-slogan', appData.store.slogan || 'Slogan Toko');
    setIn('footer-store-name', appData.store.name || 'Nama Toko Anda');
    setIn('footer-store-desc', appData.store.description || appData.store.slogan || 'Selamat datang di toko kami. Selamat berbelanja!');
    setIn('footer-store-email', appData.store.email || 'support@restukaryautama.com');
    setIn('footer-store-hours', appData.store.operationalHours || 'Buka Setiap Hari (08:00 - 17:00)');
    if (appData.store.footerCredit) {
        setIn('footer-credit', appData.store.footerCredit);
    } else {
        const fcEl = el('footer-credit');
        if (fcEl) fcEl.innerHTML = `POWERED BY <i class="fa-solid fa-bolt text-white"></i> BLOGGER PWA SYSTEM`;
    }
    setIn('footer-brand', appData.store.name || 'Nama Toko Anda');
    const fY = el('footer-year'); if(fY) fY.innerText = new Date().getFullYear();

    if (appData.store.logo) {
        const i = el('dyn-store-logo-img'), c = el('dyn-store-logo-icon');
        const fi = el('footer-store-logo-img'), fc = el('footer-store-logo-icon'); 
        
        if (appData.store.logo.includes('http') || appData.store.logo.includes('data:')) {
            if(i) { i.src = appData.store.logo; i.onerror = () => { i.onerror=null; i.src='https://placehold.co/100?text=Logo'; }; show('dyn-store-logo-img'); hide('dyn-store-logo-icon'); }
            if(fi && fc) { fi.src = appData.store.logo; fi.onerror = () => { fi.onerror=null; fi.src='https://placehold.co/100?text=Logo'; }; show('footer-store-logo-img'); hide('footer-store-logo-icon'); }
        } else {
            if(c) { c.className = `fa-solid ${esc(appData.store.logo)} text-xl text-[var(--color-primary)]`; show('dyn-store-logo-icon'); hide('dyn-store-logo-img'); }
            if(fi && fc) { fc.className = `fa-solid ${esc(appData.store.logo)} text-3xl text-[var(--color-primary)]`; show('footer-store-logo-icon'); hide('footer-store-logo-img'); }
        }
    }

    // --- RENDER BANNER 3D PREMIUM (mendukung tipe gambar & video) ---
    let bHTML = (appData.banners && appData.banners.length) ? `
    <div class="relative group/banner-wrapper w-full">
        <div id="banner-slider" class="flex overflow-x-auto gap-4 sm:gap-6 pb-4 pt-2 snap-x hide-scrollbar scroll-smooth" ontouchstart="clearInterval(bannerTmr)" ontouchend="setTimeout(startBannerAutoSlide, 8000)" onmouseenter="clearInterval(bannerTmr)" onmouseleave="startBannerAutoSlide()" onscroll="window.onBannerScroll && window.onBannerScroll()">
            ${appData.banners.map((b,i)=>{
        const isVideo = b.type === 'video' && b.videoUrl;
        const linkAction = (!isVideo && b.link) ? `onclick="window.open('${esc(b.link)}', '_self')"` : '';

        if (isVideo) {
            // ── SLIDE VIDEO (Google Drive, YouTube/Shorts, atau Direct MP4) ──
            const vInfo = parseVideoUrl(b.videoUrl) || { type: 'direct', directUrl: fixDriveVideo(b.videoUrl), embedUrl: fixDriveVideoPreview(b.videoUrl) };
            
            let videoMediaHtml = '';
            if (vInfo.type === 'youtube') {
                videoMediaHtml = `
                <iframe
                    class="banner-video-iframe w-full h-full absolute inset-0 z-0 border-0 pointer-events-none select-none"
                    src="${esc(vInfo.embedUrl)}"
                    data-src="${esc(vInfo.embedUrl)}"
                    frameborder="0"
                    scrolling="no"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                ></iframe>`;
            } else if (vInfo.type === 'gdrive') {
                // Langsung pakai iframe /preview — Google Drive tidak mengizinkan
                // streaming <video> langsung (CORS + redirect blocked), sehingga
                // <video src="uc?export=download"> selalu blank hitam.
                // iframe /preview adalah satu-satunya cara yang andal untuk Drive.
                videoMediaHtml = `
                <iframe
                    class="banner-video-iframe absolute z-0 border-0 pointer-events-none select-none"
                    src="${esc(vInfo.embedUrl)}"
                    frameborder="0"
                    allow="autoplay; fullscreen"
                    style="width:180%; height:210%; top:-55%; left:-40%; transform:scale(1); object-fit:cover;"
                ></iframe>`;
            } else {
                videoMediaHtml = `
                <video
                    class="banner-video-element w-full h-full object-cover absolute inset-0 z-0 pointer-events-none select-none"
                    src="${esc(vInfo.directUrl)}"
                    autoplay
                    loop
                    muted
                    playsinline
                    webkit-playsinline
                    onended="this.currentTime=0; this.play();"
                ></video>`;
            }

            return `
            <div id="banner-slide-${i}" class="banner-slide-item w-[88vw] sm:w-[520px] aspect-video snap-center shrink-0 rounded-[2rem] relative overflow-hidden group bg-black shadow-none border border-white/10 flex flex-col select-none">
                ${videoMediaHtml}
                <!-- Shield Transparan: Mencegah klik/tap pada video agar video tidak bisa di-klik/di-pause -->
                <div class="absolute inset-0 z-15 bg-transparent pointer-events-auto cursor-default" onclick="event.preventDefault(); event.stopPropagation();"></div>
                <!-- Konten bawah: judul & tombol suara murni transparan tanpa shadow gradient -->
                <div class="absolute bottom-0 left-0 right-0 z-20 bg-transparent px-5 py-4 flex items-end justify-between pointer-events-none">
                    <div class="flex-1 min-w-0 pointer-events-none">
                        ${b.title ? `<p class="text-white font-extrabold text-sm sm:text-base line-clamp-1">${esc(b.title)}</p>` : ''}
                        ${b.desc  ? `<p class="text-white/80 text-[10px] sm:text-xs font-medium line-clamp-1 mt-0.5">${esc(b.desc)}</p>` : ''}
                    </div>
                    <div class="ml-3 shrink-0 flex items-center gap-2 pointer-events-auto">
                        <button onclick="event.stopPropagation(); window.toggleBannerVideoSound(this, ${i});" type="button" aria-label="Aktifkan Suara Video" class="banner-sound-toggle inline-flex items-center gap-1.5 px-3 py-1.5 bg-rose-600 hover:bg-rose-500 text-white text-[10px] sm:text-xs font-bold rounded-full shadow-none border border-white/20 active:scale-95 transition-all cursor-pointer">
                            <i class="fa-solid fa-volume-xmark text-xs"></i> <span>Aktifkan Suara</span>
                        </button>
                    </div>
                </div>

            </div>`;
        }

        // ── SLIDE GAMBAR (default) ────────────────────────────────────────
        return `
        <div ${linkAction} class="banner-slide-item w-[88vw] sm:w-[480px] min-h-[180px] sm:min-h-[220px] snap-center shrink-0 rounded-[2rem] relative overflow-hidden group cursor-pointer bg-[var(--color-primary)] text-white shadow-none hover:-translate-y-1 hover:scale-[1.01] hover:shadow-none transition-all duration-300 border border-white/15 flex flex-col">
            <!-- Dynamic Solid Header Shapes -->
            <div class="absolute -right-10 -top-10 w-40 h-40 border-[16px] border-white/10 rounded-full pointer-events-none group-hover:scale-105 transition-transform duration-500"></div>
            <div class="absolute -left-12 top-10 w-24 h-24 bg-white/10 rounded-full border border-white/10 pointer-events-none transform -rotate-12 group-hover:-translate-x-1 transition-transform duration-500"></div>
            
            <div class="flex flex-1 w-full relative z-10">
                <div class="w-[60%] p-5 sm:p-6 md:p-7 flex flex-col justify-center z-20">
                    <span class="inline-block px-3 py-1 bg-black/25 rounded-full text-white text-[9px] sm:text-[10px] font-bold uppercase tracking-widest w-max mb-3 border border-white/20 shadow-sm"><i class="fa-solid fa-star text-amber-300 mr-1 animate-pulse"></i> Promo</span>
                    <h2 class="text-[15px] sm:text-lg md:text-xl font-extrabold text-white leading-snug mb-2 drop-shadow-sm line-clamp-2 tracking-tight">${esc(b.title || 'Penawaran Spesial')}</h2>
                    <p class="text-[10px] sm:text-[11px] text-white/90 font-medium line-clamp-3 leading-relaxed mb-3">${esc(b.desc || 'Belanja sekarang dan dapatkan penawaran terbaik.')}</p>
                    ${b.link ? `<button class="mt-auto bg-white text-slate-900 text-[9px] sm:text-[10px] uppercase tracking-wider font-extrabold py-2.5 px-4.5 rounded-full w-max hover:bg-slate-100 active:scale-95 transition-all shadow-md flex items-center gap-2 group-hover:pr-5">Beli Sekarang <i class="fa-solid fa-arrow-right transition-transform group-hover:translate-x-1"></i></button>` : ''}
                </div>
                <div class="w-[40%] relative z-10 flex items-center justify-center p-2 sm:p-4 pr-4 sm:pr-6">
                    ${b.img ? `<img loading="lazy" src="${esc(getOptImg(b.img, 'w800-rw'))}" alt="${esc(b.title || 'Promo Banner')}" class="w-full h-full object-contain drop-shadow-md transition-transform duration-500 group-hover:scale-105" onerror="this.style.display='none'">` : `
                    <div class="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-white/20 border-2 border-white/30 flex items-center justify-center shadow-md group-hover:scale-105 transition-all duration-300">
                        <i class="fa-solid fa-gift text-4xl sm:text-5xl text-white"></i>
                    </div>`}
                </div>
            </div>
        </div>`;
    }).join('')}
        </div>
        ${appData.banners.length > 1 ? `
        <!-- Navigation Arrows (Desktop) -->
        <button onclick="window.scrollBannerPrev()" type="button" aria-label="Banner Sebelumnya" class="hidden sm:flex absolute left-1 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-slate-900 hover:bg-slate-800 text-white items-center justify-center border border-slate-700 transition-all opacity-0 group-hover/banner-wrapper:opacity-100 shadow-xl active:scale-95">
            <i class="fa-solid fa-chevron-left text-sm"></i>
        </button>
        <button onclick="window.scrollBannerNext()" type="button" aria-label="Banner Selanjutnya" class="hidden sm:flex absolute right-1 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-slate-900 hover:bg-slate-800 text-white items-center justify-center border border-slate-700 transition-all opacity-0 group-hover/banner-wrapper:opacity-100 shadow-xl active:scale-95">
            <i class="fa-solid fa-chevron-right text-sm"></i>
        </button>

        <!-- Dots Indicator Navigation -->
        <div id="banner-dots-container" class="flex items-center justify-center gap-1.5 mt-2">
            ${appData.banners.map((_, idx) => `
                <button onclick="window.scrollToBanner(${idx})" type="button" aria-label="Slide ${idx+1}" class="banner-dot-item ${idx === 0 ? 'h-2.5 rounded-full transition-all duration-300 bg-[var(--color-primary)] w-7 shadow-sm' : 'w-2.5 h-2.5 rounded-full transition-all duration-300 bg-slate-300 dark:bg-slate-700 hover:bg-slate-400'}" data-index="${idx}"></button>
            `).join('')}
        </div>
        ` : ''}
    </div>` : '';

    setH('dynamic-banners-container', bHTML);
    setTimeout(startBannerAutoSlide, 500);

    // --- RENDER VOUCHERS PROMO ---
    const activeVouchers = (appData.vouchers || []).filter(v => v.isShow === 'true' || v.isShow === true);
    const vC = el('dynamic-vouchers-container');
    if (activeVouchers.length > 0 && vC) {
        vC.classList.remove('hidden');
        let vHTML = `
        <div class="flex items-center justify-between mb-4">
            <h3 class="font-bold text-slate-800 dark:text-white text-sm sm:text-base tracking-tight flex items-center gap-2">
                <div class="w-8 h-8 rounded-xl bg-[var(--color-primary)] flex items-center justify-center text-white shadow-sm">
                    <i class="fa-solid fa-ticket-simple text-sm -rotate-45"></i>
                </div> VOUCHER TOKO
            </h3>
        </div>
        <div class="flex gap-4 overflow-x-auto hide-scrollbar snap-x pb-6 pt-2">
            ${activeVouchers.map((v) => {
                let desc = v.type === 'shipping_free' ? 'Gratis Ongkir' : (v.type === 'percent' ? `Diskon ${esc(String(parseFloat(v.value)||0))}%` : `Diskon ${fCur(v.value)}`);
                let terms = [];
                if(v.minPurchase > 0) terms.push(`Min. Blj ${fCur(v.minPurchase)}`);
                if(v.maxDiscount > 0) terms.push(`Maks. ptg ${fCur(v.maxDiscount)}`);
                if(v.targetProduct) terms.push(`Produk Khusus`);
                let termsStr = terms.length > 0 ? esc(terms.join(' • ')) : 'Tanpa minimal belanja';
                
                return `
                <div class="w-[280px] sm:w-[320px] shrink-0 snap-start relative group cursor-pointer active:scale-95 transition-all duration-300" onclick="copyVoucher('${esc(v.code)}')">
                    <div class="w-full h-[110px] bg-[var(--color-primary)] rounded-[1.25rem] shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex relative overflow-hidden border border-white/20 text-white">
                        <!-- Left/Right Ticket Punch Holes (Biting into the sides) -->
                        <div class="absolute -top-2.5 right-[28%] w-5 h-5 rounded-full bg-[#f1f5f9] dark:bg-[#0b1121] border-b border-white/10 z-20 pointer-events-none transform translate-x-1/2 transition-colors duration-400"></div>
                        <div class="absolute -bottom-2.5 right-[28%] w-5 h-5 rounded-full bg-[#f1f5f9] dark:bg-[#0b1121] border-t border-white/10 z-20 pointer-events-none transform translate-x-1/2 transition-colors duration-400"></div>
                        
                        <!-- Main Details (Left Side) -->
                        <div class="flex-1 px-5 py-3 flex flex-col justify-center relative z-10">
                            <h4 class="font-extrabold text-white text-base leading-tight mb-1 drop-shadow-sm line-clamp-1">${desc}</h4>
                            <p class="text-[8px] sm:text-[9px] font-bold text-white/90 flex items-center gap-1.5 mb-2.5 uppercase tracking-wider"><i class="fa-solid fa-circle-info text-white/70"></i> ${termsStr}</p>
                            <div class="inline-flex">
                                <span class="bg-black/35 text-white text-[10px] sm:text-xs font-bold px-3 py-1.5 rounded-xl uppercase tracking-widest border border-white/20 shadow-inner flex items-center gap-2 font-mono">
                                    <i class="fa-solid fa-ticket text-amber-300"></i> ${esc(v.code)}
                                </span>
                            </div>
                        </div>
                        
                        <!-- Divider Line -->
                        <div class="w-0 border-l-[2px] border-dashed border-white/30 relative z-10 my-3"></div>
                        
                        <!-- Action Area (Right Side) -->
                        <div class="w-[28%] flex flex-col items-center justify-center relative z-10 bg-black/15 group-hover:bg-black/25 transition-all duration-300">
                            <div class="w-9 h-9 rounded-full bg-white text-[var(--color-primary)] font-bold flex items-center justify-center mb-1.5 shadow-sm group-hover:scale-110 transition-all duration-300">
                                <i class="fa-regular fa-copy text-sm"></i>
                            </div>
                            <span class="text-[9px] font-bold uppercase tracking-wider text-white drop-shadow-sm group-hover:scale-105 transition-transform">Salin</span>
                        </div>
                    </div>
                </div>`;
            }).join('')}
        </div>`;
        vC.innerHTML = vHTML;
    } else if (vC) {
        vC.classList.add('hidden');
        vC.innerHTML = '';
    }

    const cLHorizontal = [...(appData.categories || [])];
    // CLEANUP: variabel cLModal & setH('modal-category-list', ...) yang lama dihapus —
    // itu kode mati (selalu ketimpa setiap kali openCategoryModal() jalan), sekarang openCategoryModal()
    // yang jadi satu-satunya sumber render daftar kategori di modal (lihat fungsi di atas).
    
    setH('dynamic-categories-container', cLHorizontal.map(c => {
        const isSel = aCat === c.name; const nameSafe = decodeURIComponent(encodeURIComponent(c.name).replace(/'/g,"%27"));
        if(appData.store.categoryStyle === 'text' || !appData.store.categoryStyle) {
            return `<div onclick="filterCategory('${nameSafe}')" class="cursor-pointer shrink-0 snap-start group py-1"><div class="px-5 py-2.5 rounded-[1.25rem] border-2 transition-all duration-300 flex items-center gap-3 ${isSel ? 'bg-[var(--color-primary)] border-transparent text-white shadow-md' : 'bg-white dark:bg-slate-800 border-slate-100 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:border-[var(--color-primary)] hover:shadow-md hover:-translate-y-1'}"><div class="w-6 h-6 rounded-full flex items-center justify-center ${isSel ? 'bg-white/20 text-white shadow-inner' : 'bg-slate-50 dark:bg-slate-700 text-slate-400 group-hover:bg-[var(--color-primary-light)] group-hover:text-[var(--color-primary)]'} transition-all duration-300"><i class="fa-solid fa-layer-group text-[10px]"></i></div><span class="font-bold text-[11px] sm:text-xs uppercase tracking-widest pr-2">${esc(c.name)}</span></div></div>`;
        } else {
            return `<div onclick="filterCategory('${nameSafe}')" class="flex flex-col items-center gap-3 cursor-pointer shrink-0 w-[80px] sm:w-[95px] group snap-start py-1"><div class="relative w-16 h-16 sm:w-[72px] sm:h-[72px] rounded-[1.25rem] bg-slate-50 dark:bg-slate-800 flex items-center justify-center p-2 transition-all duration-300 ${isSel ? 'bg-[var(--color-primary-light)] border-2 border-[var(--color-primary)] shadow-glow dark:bg-[var(--color-primary-dark)]/20' : 'border border-slate-200 dark:border-slate-700 shadow-sm group-hover:border-[var(--color-primary)] group-hover:shadow-lg group-hover:-translate-y-1.5'} overflow-hidden"><img loading="lazy" src="${esc(getOptImg(c.img, 'w150-rw'))}" alt="${esc(c.name)}" onerror="this.onerror=null;this.src='https://placehold.co/150/10b981/ffffff?text=Cat'" class="w-full h-full object-cover rounded-xl transition-transform duration-500 group-hover:scale-110"></div><span class="text-[9px] sm:text-[10px] text-center w-full line-clamp-2 leading-tight px-1 ${isSel ? 'font-bold text-[var(--color-primary)]' : 'font-bold text-slate-600 dark:text-slate-300 group-hover:text-[var(--color-primary)]'} uppercase tracking-widest transition-colors">${esc(c.name)}</span></div>`;
        }
    }).join(''));
    
    const bLHorizontal = [...(appData.brands || [])];
    const bLModal = [{name:'Semua Merek', img:appData.store.allBrandsIcon||'https://placehold.co/150/10b981/ffffff?text=Semua+Merek'}, ...(appData.brands || [])];
    
    setH('dynamic-brands-container', bLHorizontal.map(b => {
        const isSel = aBrand === b.name; const nameSafe = decodeURIComponent(encodeURIComponent(b.name).replace(/'/g,"%27"));
        if(appData.store.brandStyle === 'text') {
            return `<div onclick="filterBrand('${nameSafe}')" class="cursor-pointer shrink-0 snap-start group py-1"><div class="px-5 py-2.5 rounded-[1.25rem] border-2 transition-all duration-300 flex items-center gap-3 ${isSel ? 'bg-[var(--color-primary)] border-transparent text-white shadow-sm' : 'bg-white dark:bg-slate-800 border-slate-100 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:border-[var(--color-primary)]/40 hover:shadow-md hover:-translate-y-1'}"><div class="w-6 h-6 rounded-full flex items-center justify-center ${isSel ? 'bg-white/20 text-white shadow-inner' : 'bg-slate-50 dark:bg-slate-700 text-slate-400 group-hover:bg-[rgba(var(--color-primary-rgb),0.08)] group-hover:text-[var(--color-primary)]'} transition-all duration-300"><i class="fa-solid fa-copyright text-[10px]"></i></div><span class="font-bold text-[11px] sm:text-xs uppercase tracking-widest pr-2">${esc(b.name)}</span></div></div>`;
        } else {
            return `<div onclick="filterBrand('${nameSafe}')" class="flex flex-col items-center gap-3 cursor-pointer shrink-0 w-[75px] sm:w-[85px] group snap-start py-1"><div class="relative w-16 h-16 sm:w-[68px] sm:h-[68px] rounded-2xl bg-white flex items-center justify-center overflow-hidden p-2 transition-all duration-500 ${isSel ? 'ring-4 ring-[var(--color-primary)] ring-offset-2 ring-offset-slate-50 dark:ring-offset-slate-800 shadow-md shadow-[rgba(var(--color-primary-rgb),0.25)]' : 'border border-slate-200 dark:border-slate-700 shadow-sm group-hover:border-[var(--color-primary)]/50 group-hover:shadow-md group-hover:-translate-y-1.5'}"><img loading="lazy" src="${esc(getOptImg(b.img, 'w150-rw'))}" alt="${esc(b.name)}" onerror="this.onerror=null;this.src='https://placehold.co/150/10b981/ffffff?text=Brand'" class="w-full h-full object-contain drop-shadow-sm transition-transform duration-500 group-hover:scale-110"></div><span class="text-[9px] sm:text-[10px] text-center w-full line-clamp-2 leading-tight px-1 ${isSel ? 'font-bold text-[var(--color-primary)]' : 'font-bold text-slate-600 dark:text-slate-300 group-hover:text-[var(--color-primary)]'} uppercase tracking-widest transition-colors">${esc(b.name)}</span></div>`;
        }
    }).join(''));
    
    setH('modal-brand-grid', bLModal.map(b => {
        const isSel = aBrand === b.name; const nameSafe = decodeURIComponent(encodeURIComponent(b.name).replace(/'/g,"%27"));
        return `<button onclick="filterBrand('${nameSafe}'); closeBrandModal();" class="flex flex-col items-center gap-3 p-4 rounded-[1.25rem] border ${isSel?'border-[var(--color-primary)] bg-[rgba(var(--color-primary-rgb),0.07)] dark:bg-[rgba(var(--color-primary-rgb),0.12)] shadow-sm':'border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:border-[var(--color-primary)]/40 hover:shadow-sm'} transition-all active:scale-[0.96]"><div class="w-14 h-14 rounded-2xl flex items-center justify-center bg-white border border-slate-100 dark:border-slate-600 shadow-inner overflow-hidden p-1.5"><img loading="lazy" src="${esc(getOptImg(b.img, 'w150-rw'))}" alt="${esc(b.name)}" class="w-full h-full object-contain" onerror="this.src='https://placehold.co/100?text=Brand'"></div> <span class="text-[10px] sm:text-xs font-bold ${isSel?'text-[var(--color-primary)]':'text-slate-700 dark:text-slate-300'} text-center leading-tight line-clamp-2 uppercase tracking-widest">${esc(b.name)}</span></button>`;
    }).join(''));

    if(el('dyn-qris-img') && appData.payment) el('dyn-qris-img').src = appData.payment.qrisUrl;
    if (typeof window.renderRewardCatalog === 'function') window.renderRewardCatalog();
    if (typeof window.applyBackgroundStyle === 'function') {
        window.applyBackgroundStyle(appData.store.bgStyle, appData.store.bgCustomUrl);
    }
    cPage = 1; window.rCat();
};




// FITUR BARU (PERFORMA): Loader skrip on-demand generik. Dipakai untuk library berat
// yang cuma dibutuhkan admin (html2canvas, jsPDF, XLSX) atau fitur yang jarang dipakai
// (html5-qrcode) — supaya TIDAK dimuat di setiap kunjungan, cuma saat benar-benar dipakai.
window.ensureScriptLoaded = ensureScriptLoaded;


// FITUR BARU: Render slot iklan AdSense (banner & multiplex akhir katalog).
// Iklan di dalam modal produk (in-article) ditangani langsung di openProductModal.

// Note: renderRewardCatalog telah dipindahkan ke modul: src/modules/member/reward.js


// Note: Seluruh logika Katalog Produk, Search, Filter, dan Modal Interaktif telah dipindahkan ke:
// - src/modules/catalog/catalog.js (rCat, filterCategory, filterBrand, resetSemuaFilter, handleSearch, handleSort, toggleView, loadMoreProducts)
// - src/modules/catalog/product-modal.js (openProductModal, closeProductModal, previewVariant, previewProductImage, rProdMod, uMPP, updateModalQty, handleModalQtyChange, selectVariant, confirmAddProductToCart, confirmAddToWishlist, shareProduct)
const rCat = () => window.rCat();
const rProdMod = () => window.rProdMod();
const openProductModal = (id) => window.openProductModal(id);
const closeProductModal = (fH) => window.closeProductModal(fH);


// =====================================================================
// FAVORIT / WISHLIST
// Note: Logika favorit (updWish, rmWish, moveWish, clearWishlist, renderWish)
// telah dipindahkan ke modul: src/modules/cart/wishlist.js
// =====================================================================

// Note: Logika keranjang (renderCart, setCQty, updCQty, rmCart, validateCartToCheckout)
// telah dipindahkan ke modul: src/modules/cart/cart.js


// --- 11. CHECKOUT & CHECKOUT LOGIC ---
window.getLocation = () => {
    if(!navigator.geolocation) return showToast("GPS tidak didukung");
    el('btn-location').innerHTML = `<i class="fa-solid fa-spinner fa-spin text-sm"></i>`;
    navigator.geolocation.getCurrentPosition(p => {
        cust.lat = p.coords.latitude; cust.lng = p.coords.longitude;
        hide('btn-location'); show('location-status'); el('location-status').classList.add('flex');
        showToast("GPS Didapatkan");
    }, e => {
        el('btn-location').innerHTML = `<i class="fa-solid fa-location-crosshairs text-[var(--color-primary)]"></i> Set GPS Maps`;
        showToast("Gagal akses GPS");
    }, {enableHighAccuracy: true, timeout: 15000});
};

// Note: applyVoucher telah dipindahkan ke modul: src/modules/member/voucher.js


// Note: validateAndGoToPayment dan toggleDeliveryMethod telah dipindahkan ke modul: src/modules/cart/checkout.js


// Note: Logika loyalitas member (checkMemberStatus, openMemberModal, rMemberModalBody, selectReward, deselectReward, closeMemberModal)
// telah dipindahkan ke modul: src/modules/member/reward.js


// Note: Logika ulasan dan testimoni produk (openReviewModal, closeReviewModal, setReviewRating, handleReviewPhotoSelect, removeReviewPhoto, submitReview, loadProductReviews)
// telah dipindahkan ke modul: src/modules/orders/reviews.js


const rChck = () => {
    const d = appData.store.isDeliveryEnabled !== false, p = appData.store.isPickupEnabled !== false;
    toggleCls('delivery-option-container', 'hidden', !d); toggleCls('pickup-option-container', 'hidden', !p);
    toggleCls('no-delivery-warning', 'hidden', d||p); toggleCls('delivery-methods-grid', 'hidden', !(d||p));
    const b = el('btn-checkout-next');
    if (b) {
        if(d||p){
            b.removeAttribute('disabled'); b.classList.remove('opacity-50');
            // FIX: pilih radio sesuai cust.deliveryMethod yang tersimpan (bukan selalu reset ke delivery)
            const preferredMethod = cust.deliveryMethod || 'delivery';
            const targetMethod = (preferredMethod === 'pickup' && p) ? 'pickup' : (d ? 'delivery' : 'pickup');
            const targetRadio = document.querySelector('input[value="' + targetMethod + '"]');
            if (targetRadio) targetRadio.checked = true;
        } else { b.setAttribute('disabled','true'); b.classList.add('opacity-50'); }
    }
    toggleDeliveryMethod();
};

window.buktiPaymentUrl = null;
window.buktiPaymentFile = null;
window.buktiGDriveUploaded = false; // FLAG: true = sudah upload GDrive, false = masih pending

// ============================================================
// COMPRESS gambar sebelum upload agar hemat kuota & cepat
// Kualitas 0.82 menghasilkan file ~3–5x lebih kecil dari original
// ============================================================
window.compressImageForUpload = (file, maxSizePx = 1600, quality = 0.82) => {
    return new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = (ev) => {
            const img = new Image();
            img.onload = () => {
                let { width, height } = img;
                if (width > maxSizePx || height > maxSizePx) {
                    if (width > height) { height = Math.round(height * maxSizePx / width); width = maxSizePx; }
                    else { width = Math.round(width * maxSizePx / height); height = maxSizePx; }
                }
                const canvas = document.createElement('canvas');
                canvas.width = width; canvas.height = height;
                canvas.getContext('2d').drawImage(img, 0, 0, width, height);
                canvas.toBlob((blob) => {
                    if (!blob) return resolve(file); // fallback ke file asli
                    resolve(new File([blob], file.name, { type: 'image/jpeg', lastModified: Date.now() }));
                }, 'image/jpeg', quality);
            };
            img.onerror = () => resolve(file);
            img.src = ev.target.result;
        };
        reader.onerror = () => resolve(file);
    });
};

// ============================================================
// UPLOAD SATU PERCOBAAN ke Google Drive via GAS
// Mengembalikan URL GDrive jika sukses, atau null jika gagal
// ============================================================
window._doSingleGDriveUpload = async (file, orderId) => {
    const reader = new FileReader();
    return new Promise((resolve) => {
        reader.readAsDataURL(file);
        reader.onload = async () => {
            try {
                const base64Data = reader.result.split(',')[1];
                const safeName = (file.name || 'bukti.jpg').replace(/[^a-zA-Z0-9.]/g, '_');
                const payload = {
                    name: 'BUKTI_' + orderId + '_' + Date.now() + '_' + safeName,
                    mimeType: file.type || 'image/jpeg',
                    data: base64Data,
                    token: GAS_SECRET_TOKEN
                };
                const res = await fetch(GAS_UPLOAD_URL, {
                    method: 'POST',
                    body: JSON.stringify(payload),
                    headers: { 'Content-Type': 'text/plain;charset=utf-8' },
                    redirect: 'follow'
                });
                if (!res.ok) { console.warn('GDrive upload HTTP error:', res.status); return resolve(null); }
                const text = await res.text();
                let data;
                try { data = JSON.parse(text); } catch(e) { console.warn('GDrive response parse error'); return resolve(null); }
                if (data && data.status === 'success' && data.url) {
                    resolve(fixD(data.url));
                } else {
                    console.warn('GDrive upload gagal:', data && data.message);
                    resolve(null);
                }
            } catch(e) {
                console.warn('GDrive upload exception:', e);
                resolve(null);
            }
        };
        reader.onerror = () => resolve(null);
    });
};

// ============================================================
// UPLOAD BUKTI dengan RETRY 2x + timeout 30 detik
// TIDAK memakai base64 sebagai fallback ke Firestore
// (base64 besar bisa meledakkan kuota Firestore 1MB/dokumen)
// ============================================================
window.uploadBuktiToGDrive = async (file, orderId) => {
    if (!file) return null;
    if (!GAS_UPLOAD_URL || GAS_UPLOAD_URL.includes('ISI_DENGAN')) {
        console.error('GAS_UPLOAD_URL belum dikonfigurasi!');
        return null; // TOLAK — tidak boleh fallback base64 ke Firestore
    }

    // Kompres dulu sebelum upload
    let fileToUpload = file;
    try { fileToUpload = await window.compressImageForUpload(file); } catch(e) { /* pakai asli */ }

    const MAX_RETRY = 2;
    const TIMEOUT_MS = 30000;

    for (let attempt = 1; attempt <= MAX_RETRY; attempt++) {
        const uploadEl = el('bukti-uploading-text');
        if (uploadEl) uploadEl.textContent = attempt > 1
            ? `Mencoba ulang ke Google Drive... (${attempt}/${MAX_RETRY})`
            : 'Mengupload ke Google Drive...';

        try {
            const url = await Promise.race([
                window._doSingleGDriveUpload(fileToUpload, orderId),
                new Promise((_, rej) => setTimeout(() => rej(new Error('timeout')), TIMEOUT_MS))
            ]);
            if (url) return url; // sukses
        } catch(e) {
            console.warn(`Percobaan upload ${attempt} gagal:`, e.message);
        }

        if (attempt < MAX_RETRY) await new Promise(r => setTimeout(r, 1500 * attempt)); // jeda antar retry
    }

    return null; // GAGAL setelah semua retry
};

// ============================================================
// HANDLER: saat user pilih file bukti pembayaran
// Upload SEGERA ke GDrive (bukan nunggu processOrder) agar user
// tahu hasilnya lebih awal + tidak blocking saat submit pesanan
// ============================================================
window.handleBuktiUpload = async (event) => {
    const file = event.target.files[0];
    if (!file) return;
    if (!file.type.startsWith('image/')) return showToast('Hanya file gambar yang diizinkan!');
    if (file.size > 5 * 1024 * 1024) return showToast('Ukuran gambar max 5MB!');

    window.buktiPaymentFile = file;
    window.buktiPaymentUrl = null;
    window.buktiGDriveUploaded = false;

    // Tampilkan preview lokal (tidak perlu tunggu upload selesai)
    const reader = new FileReader();
    reader.onload = (e) => {
        const imgEl = el('bukti-preview-img');
        const wrap = el('bukti-preview-wrap');
        const plc = el('bukti-placeholder');
        if (imgEl) imgEl.src = e.target.result;
        if (wrap) wrap.classList.remove('hidden');
        if (plc) plc.classList.add('hidden');
    };
    reader.readAsDataURL(file);

    // Sembunyikan pesan lama, tampilkan status uploading
    hide('bukti-success'); hide('bukti-gdrive-error');
    const upEl = el('bukti-uploading');
    if (upEl) { upEl.classList.remove('hidden'); upEl.style.display = 'flex'; }

    // Upload langsung ke GDrive setelah file dipilih
    const tempOrderId = 'TEMP_' + Date.now().toString(36).toUpperCase();
    const gDriveUrl = await window.uploadBuktiToGDrive(file, tempOrderId);

    hide('bukti-uploading');

    if (gDriveUrl) {
        window.buktiPaymentUrl = gDriveUrl;
        window.buktiGDriveUploaded = true;
        const sEl = el('bukti-success');
        const sTxt = el('bukti-success-text');
        const sInfo = el('bukti-storage-info');
        if (sTxt) sTxt.textContent = 'Bukti berhasil disimpan!';
        if (sInfo) sInfo.textContent = '(tersimpan di Google Drive ✓)';
        if (sEl) { sEl.classList.remove('hidden'); sEl.style.display = 'flex'; }
        hide('bukti-gdrive-error');
    } else {
        // GDrive gagal — tampilkan error, JANGAN izinkan lanjut
        window.buktiPaymentUrl = null;
        window.buktiGDriveUploaded = false;
        const errEl = el('bukti-gdrive-error');
        if (errEl) { errEl.classList.remove('hidden'); errEl.style.display = 'flex'; }
        hide('bukti-success');
        showToast('❌ Upload ke Google Drive gagal. Coba lagi!');
    }
};

// ============================================================
// RETRY: tombol "Coba lagi" di banner error
// ============================================================
window.retryBuktiUpload = async () => {
    if (!window.buktiPaymentFile) return showToast('Pilih gambar terlebih dahulu!');
    hide('bukti-gdrive-error'); hide('bukti-success');
    const upEl = el('bukti-uploading');
    if (upEl) { upEl.classList.remove('hidden'); upEl.style.display = 'flex'; }
    const tempOrderId = 'RETRY_' + Date.now().toString(36).toUpperCase();
    const gDriveUrl = await window.uploadBuktiToGDrive(window.buktiPaymentFile, tempOrderId);
    hide('bukti-uploading');
    if (gDriveUrl) {
        window.buktiPaymentUrl = gDriveUrl;
        window.buktiGDriveUploaded = true;
        const sEl = el('bukti-success'); const sTxt = el('bukti-success-text'); const sInfo = el('bukti-storage-info');
        if (sTxt) sTxt.textContent = 'Bukti berhasil disimpan!';
        if (sInfo) sInfo.textContent = '(tersimpan di Google Drive ✓)';
        if (sEl) { sEl.classList.remove('hidden'); sEl.style.display = 'flex'; }
        showToast('✅ Upload berhasil!');
    } else {
        const errEl = el('bukti-gdrive-error');
        if (errEl) { errEl.classList.remove('hidden'); errEl.style.display = 'flex'; }
        showToast('❌ Masih gagal. Periksa koneksi internet Anda.');
    }
};

// ============================================================
// ALIAS untuk kompatibilitas kode lama (processOrder memanggil ini)
// Karena upload sudah dilakukan di handleBuktiUpload, fungsi ini
// hanya mengembalikan URL yang sudah ada — tidak upload ulang
// ============================================================
window.uploadBuktiToFirebase = async (file, orderId) => {
    // Jika sudah upload saat pilih file, kembalikan URL yang ada
    if (window.buktiGDriveUploaded && window.buktiPaymentUrl) {
        return window.buktiPaymentUrl;
    }
    // Fallback: coba upload lagi (misalnya state hilang karena navigasi)
    if (!file) return null;
    const url = await window.uploadBuktiToGDrive(file, orderId);
    if (url) { window.buktiPaymentUrl = url; window.buktiGDriveUploaded = true; }
    return url; // null jika gagal — processOrder akan menangani ini
};

window.togglePaymentDetails = () => {
    const m = (document.querySelector('input[name="payment"]:checked')||{}).value;
    toggleCls('detail-transfer', 'hidden', m !== 'transfer'); toggleCls('detail-qris', 'hidden', m !== 'qris');
    toggleCls('detail-cashier', 'hidden', m !== 'cashier'); toggleCls('detail-cod', 'hidden', m !== 'cod');
    toggleCls('detail-tempo', 'hidden', m !== 'tempo');
    if (m === 'tempo') window.calculateTempoBalance();

    // Sembunyikan bagian upload bukti pembayaran jika COD atau Kasir
    const needsBukti = (m === 'transfer' || m === 'qris' || m === 'tempo');
    toggleCls('bukti-payment-section', 'hidden', !needsBukti);
};

window.calculateTempoBalance = () => {
    const dpInput = document.getElementById('tempo-dp-input');
    let dp = parseFloat(dpInput?.value) || 0;
    if (dp < 0) { dp = 0; if (dpInput) dpInput.value = 0; }
    let sub = cart.reduce((s,i) => s + (parseFloat(getEffP(i))||0) * (parseFloat(i.qty)||0), 0);
    let sC = 0, productDisc = 0, shippingDisc = 0;
    if (cust.deliveryMethod === 'delivery') {
        sC = Math.ceil((parseFloat(cust.distance)||0) * (parseFloat(appData.store.costPerKm)||0) / 500) * 500;
    }
    if (vouch) {
        let eligibleSubtotal = sub;
        if(vouch.targetProduct && vouch.targetProduct !== '') {
            const targetId = parseInt(vouch.targetProduct);
            const eligibleItems = cart.filter(i => i.id === targetId);
            eligibleSubtotal = eligibleItems.reduce((s,i) => s + (parseFloat(getEffP(i))||0) * (parseFloat(i.qty)||0), 0);
        }
        if(vouch.type === 'shipping_free') {
            shippingDisc = sC;
        } else if(vouch.type === 'shipping_flat') {
            shippingDisc = parseFloat(vouch.value)||0;
        } else if(vouch.type === 'percent') {
            let calcDisc = eligibleSubtotal * ((parseFloat(vouch.value)||0) / 100);
            if(vouch.maxDiscount && parseFloat(vouch.maxDiscount) > 0) calcDisc = Math.min(calcDisc, parseFloat(vouch.maxDiscount));
            productDisc = calcDisc;
        } else {
            productDisc = parseFloat(vouch.value)||0;
            productDisc = Math.min(productDisc, eligibleSubtotal);
        }
    }
    shippingDisc = Math.min(shippingDisc, sC);
    productDisc = Math.min(productDisc, sub);

    let subAfterDisc = Math.max(0, sub - productDisc);
    let shippingAfterDisc = Math.max(0, sC - shippingDisc);
    const taxInfo = window.calcTaxDetails(subAfterDisc + shippingAfterDisc);
    let pointsDisc = 0;
    if (window.useMemberPoints && currentMember) {
        pointsDisc = Math.min(subAfterDisc + shippingAfterDisc + taxInfo.grandTotalAdd, parseFloat(currentMember.points) || 0);
    }
    let grandTotal = subAfterDisc + shippingAfterDisc + taxInfo.grandTotalAdd - pointsDisc;
    if (dp > grandTotal) {
        dp = grandTotal;
        if (dpInput) dpInput.value = dp;
    }
    let balance = grandTotal - dp;
    const disp = document.getElementById('tempo-balance-display');
    if (disp) disp.innerText = fCur(balance);
};

// Note: Logika rPay, toggleOrderButton, dan processOrder telah dipindahkan ke modul: src/modules/cart/checkout.js
const rPay = () => window.rPay();


// =====================================================================
/// aF (Skema form CRUD admin) telah dipindahkan ke modul: src/modules/admin/schema.js
// =====================================================================

window.normalizeWA = (raw) => {
    let n = (raw||'').toString().replace(/\D/g,'');
    if (!n) return '';
    if (n.startsWith('0')) n = '62' + n.substring(1);
    else if (!n.startsWith('62')) n = '62' + n;
    return n;
};

window.getYouTubeId = (url) => {
    if (!url) return null;
    url = url.trim();
    if (/^[a-zA-Z0-9_-]{11}$/.test(url)) return url;
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
};

// --- 12. SISTEM ADMIN PANEL ---

// Note: Otentikasi dan Dashboard Report Admin (checkAdminAccess, openAdminMenu, toggleTaxMenuVisibility, computeInventoryStats, loadAdminReport, processAdminLogin, logoutAdmin, confirmLogoutAdmin)
// telah dipindahkan ke modul: src/modules/admin/auth.js
const openAdminMenu = () => window.openAdminMenu();
const logoutAdmin = () => window.logoutAdmin();


window.checkProPrint = () => { openReceiptPreview(); };

window.customPrompt = (title, defaultVal, callback) => {
    let div = document.createElement('div');
    div.className = 'fixed inset-0 z-[9999] bg-slate-900/80 flex items-center justify-center p-4 backdrop-blur-sm opacity-0 transition-opacity duration-300';
    div.innerHTML = `
        <div class="bg-white dark:bg-slate-800 rounded-[2rem] w-full max-w-[320px] p-6 shadow-2xl border border-slate-200 dark:border-slate-700 relative transform scale-95 transition-all duration-300 flex flex-col text-center">
            <h3 class="font-bold text-slate-900 dark:text-white text-lg mb-4">${title}</h3>
            <input type="text" id="prompt-input" value="${defaultVal}" class="w-full px-4 py-3.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-700 dark:text-slate-300 mb-6 focus:ring-2 focus:ring-[var(--color-primary)] outline-none text-center font-bold text-xl tracking-wider" autocomplete="off" />
            <div class="flex gap-3">
                <button id="prompt-cancel" class="flex-1 py-3.5 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 font-bold rounded-xl hover:bg-slate-200 dark:hover:bg-slate-600 active:scale-95 transition-all text-sm">Batal</button>
                <button id="prompt-ok" class="flex-1 py-3.5 bg-[var(--color-primary)] text-white font-bold rounded-xl hover:opacity-90 active:scale-95 transition-all text-sm shadow-md">Simpan</button>
            </div>
        </div>
    `;
    document.body.appendChild(div);
    const box = div.querySelector('div');
    
    pushModalHistory('prompt');
    
    setTimeout(() => { div.classList.remove('opacity-0'); box.classList.remove('scale-95'); }, 10);
    const input = div.querySelector('#prompt-input');
    input.focus();
    input.select();
    
    window.closePrompt = (fH=false) => {
        if (!div || !div.parentNode) return;
        requestCloseModal('prompt', fH, () => {
            div.classList.add('opacity-0'); box.classList.add('scale-95');
            setTimeout(() => div.remove(), 300);
            window.closePrompt = null;
        });
    };
    
    div.querySelector('#prompt-cancel').onclick = () => window.closePrompt();
    div.querySelector('#prompt-ok').onclick = () => {
        let val = input.value;
        window.closePrompt();
        callback(val);
    };
};

// =====================================================================
// PIUTANG & MANAJEMEN PEMBAYARAN TEMPO
// Note: Logika piutang dan pembayaran tempo telah dipindahkan ke modul: src/modules/admin/tempo.js
const rAdmPiutang = () => window.rAdmPiutang();
// =====================================================================

window.openAdminTab = (t, fH=false) => {
    const adminScroll = document.querySelector('#view-admin .scroll-content');
    if (adminScroll) adminScroll.scrollTop = 0;
    cTab=t; aSq='';
    if (!fH) {
        // FIX BACK BUTTON: jika sudah di dalam konten tab (bukan dashboard), GANTI state
        // (replaceState) alih-alih menumpuk state baru (pushState). Dengan ini, pindah
        // dari Tab A → Tab B tidak menambah entri ke history stack, sehingga menekan
        // tombol back dari tab manapun SELALU kembali ke dashboard admin — bukan ke tab
        const curState = history.state;
        if (curState && curState.view === 'view-admin' && curState.tab) {
            history.replaceState({view:'view-admin', tab:t}, '', window.location.href);
        } else {
            history.pushState({view:'view-admin', tab:t}, '', window.location.href);
        }
    }

    hide('admin-dashboard-view'); show('admin-content-view'); show('btn-admin-back'); hide('admin-logo-box');
    const titles = {'orders':'Pesanan', 'settings':'Toko', 'products':'Produk', 'categories':'Kategori', 'brands':'Merek', 'banks':'Rekening', 'banners':'Banner', 'vouchers':'Voucher', 'customers':'Database Pelanggan', 'rewards':'Program Hadiah', 'reviews':'Ulasan Pelanggan', 'faqs':'Tanya Jawab / Q&A', 'tax':'Pajak & Keuangan', 'piutang':'Piutang Tempo', 'colors':'Database Warna'};
    setIn('admin-header-title', titles[t]||'CMS');
    if(t !== 'orders' && aOrdLst){ aOrdLst(); aOrdLst=null; }
    // Sekarang dipasang listener realtime selama tab ini aktif, dilepas begitu
    // admin pindah ke tab lain (tetap sesuai prinsip privasi: tidak dimuat sejak awal).
    if (t !== 'customers' && aCustLst) { aCustLst(); aCustLst = null; }
    if (t !== 'reviews' && aRevLst) { aRevLst(); aRevLst = null; }
    if(t === 'settings') rAdmSet();
    else if(t === 'orders') rAdmOrd();
    else if (t === 'tax') { rTaxPanel(); } // FITUR BARU: Menu Pajak & Keuangan
    else if (t === 'piutang') { window.rAdmPiutang(); }
    else if (t === 'customers') {
        // FITUR BARU: data pelanggan (PII: nama & no. WA) SENGAJA tidak dimuat sejak awal
        // untuk semua pengunjung (beda dengan produk/kategori) -- hanya diambil dari Firestore
        // saat admin benar-benar membuka tab ini, demi privasi.
        setH('admin-content', `<div class="text-center py-16"><i class="fa-solid fa-spinner fa-spin text-3xl text-slate-300"></i></div>`);
        if (aCustLst) { aCustLst(); aCustLst = null; } // jangan sampai terpasang dobel
        aCustLst = db.collection("freshmart").doc("cms_data").collection("customers")
            .onSnapshot(snap => {
                appData.customers = snap.docs.map(d => d.data());
                rAdmL('customers');
            }, () => { showToast("Gagal memuat data pelanggan!"); rAdmL('customers'); });
    }
    else if (t === 'reviews') {
        // FITUR BARU: panel moderasi ulasan pelanggan -- realtime selama tab ini terbuka

        setH('admin-content', `<div class="text-center py-16"><i class="fa-solid fa-spinner fa-spin text-3xl text-slate-300"></i></div>`);
        if (aRevLst) { aRevLst(); aRevLst = null; }
        aRevLst = db.collection("freshmart").doc("cms_data").collection("reviews")
            .onSnapshot(snap => {
                gReviews = snap.docs.map(d => d.data());
                gReviews.sort((a,b) => {
                    const ta = a.createdAt && a.createdAt.toMillis ? a.createdAt.toMillis() : 0;
                    const tb = b.createdAt && b.createdAt.toMillis ? b.createdAt.toMillis() : 0;
                    return tb - ta;
                });
                rAdmReviews();
            }, () => { showToast("Gagal memuat ulasan!"); });
    }
    else if (t === 'faqs') { window.rAdmFAQ(); }
    else rAdmL(t);
};
const rAdmOrd = () => window.rAdmOrd();

// ==========================================
// PENGATURAN TOKO & PWA META (ADMIN)
// Note: Logika pengaturan toko admin (syncAppMeta, rAdmSet, selectPresetTheme, selectBgStyle, openSettingForm, saveAdminSettings, backupData, restoreData)
// telah dipindahkan ke modul: src/modules/admin/settings.js
const syncAppMeta = () => window.syncAppMeta();
const rAdmSet = () => window.rAdmSet();
const backupData = () => window.backupData();
const restoreData = (e) => window.restoreData(e);

// =====================================================================
// ADMIN CRUD, INVENTORY & BUILDER
// Note: Logika manajemen produk, varian, grosir, spesifikasi, restock, harga cepat,
// dan barcode scanner telah dipindahkan ke modul: src/modules/admin/products.js
// =====================================================================

// HISTORY API (Untuk Android Back Button Navigasi Modal)
window.addEventListener('popstate', e => {
    if (oMods.length) {
        // FIX TOTAL: setiap modal/overlay (termasuk yang sebelumnya TIDAK terhubung ke History
        // API: form admin, detail pesanan, preview struk/invoice/surat-jalan, scanner kamera,
        // dialog konfirmasi, & popup selamat datang) sekarang ditutup dengan benar saat back
        // ditekan, alih-alih membiarkan tampilan di belakangnya berubah sementara modal tetap
        // terbuka di layar (penyebab utama back terasa "lompat-lompat").
        const m = oMods.pop();
        if (m === 'product') closeProductModal(true);
        else if (m === 'category') closeCategoryModal(true);
        else if (m === 'brand') closeBrandModal(true);
        else if (m === 'admin') closeAdminModal(true);
        else if (m === 'adminOrder') closeOrderDetailModal(true);
        else if (m === 'receipt') closeReceiptPreviewModal(true);
        else if (m === 'docPreview') closeDocPreviewModal(true);
        else if (m === 'scanner') closeCameraScanner(true);
        else if (m === 'confirm') closeConfirm(true);
        else if (m === 'customerOrder') closeCustomerOrderDetailModal(true);
        else if (m === 'restock') closeRestockModal(true); // FIX: back button tutup restock modal
        else if (m === 'quickprice') closeQuickPriceModal(true); // FITUR BARU: back button tutup modal edit cepat harga
        else if (m === 'member') closeMemberModal(true); // FITUR BARU: back button tutup modal data member
        else if (m === 'prompt' && typeof window.closePrompt === 'function') window.closePrompt(true);
        else if (m === 'review') closeReviewModal(true); // FITUR BARU: back button tutup modal ulasan
        else if (m === 'quickmenu') closeQuickMenuModal(true);
        else if (m === 'variantPreview') closeVariantPreviewModal(true);
        else if (m === 'terms') closeTermsModal(true);
        else if (m === 'privacy') closePrivacyModal(true);
        else if (m === 'askQuestion') closeAskQuestionModal(true);
        else if (m === 'adminFAQ') closeAdminFAQModal(true);
    } else {
        const state = e.state || {};
        const v = state.view || null;
        const isAdminLoggedIn = window.isAdm || window.__localIsAdm;

        if (isAdminLoggedIn) {
            if (v === 'view-admin') {
                // Navigasi internal admin (berpindah tab atau kembali ke menu admin)
                changeView('view-admin', true);
                if (state.tab) openAdminTab(state.tab, true);
                else openAdminMenu();
            } else {
                // Mencoba keluar dari dashboard admin -> tahan dan minta konfirmasi
                // PENTING: push state dashboard bersih {view: 'view-admin'} (tanpa tab)
                // agar jika batal keluar, state tidak kotor dan next back kembali normal.
                history.pushState({view: 'view-admin'}, '', window.location.href);
                
                showConfirm(
                    "Keluar Seller",
                    "Apakah anda akan keluar dari dashboard seller?",
                    () => { logoutAdmin(); },
                    "Ya, Keluar",
                    true
                );
            }
        } else {
            // Jalur pelanggan biasa
            if (v) {
                let targetView = v;
                if (v === 'view-admin') targetView = 'view-admin-login';
                changeView(targetView, true);
            } else {
                changeView('view-catalog', true);
            }
        }
    }
});

// Booting Aplikasi Saat DOM Dimuat (Hanya Trigger Sekali)
window.addEventListener('DOMContentLoaded', async () => {
    await loadAppData();
    syncAppMeta(); // FIX: dipanggil tepat setelah data toko selesai sinkron (lihat catatan di atas)
    attachRealtimeStockSync(); // FIX BUG: pasang listener realtime agar stok & data produk sinkron otomatis antar perangkat
    attachRewardsRealtime(); // FITUR BARU: katalog hadiah publik & realtime (sub-collection tersendiri, bukan field di cms_data)

// --- FITUR AUTO-LOGIN (Sesi Permanen Firebase) ---
    auth.onAuthStateChanged(async (user) => {
    // FIX KEAMANAN: kalau ada sesi tersimpan tapi UID-nya bukan pemilik toko,
    // anggap seperti tidak login sama sekali — paksa logout, jangan masuk dashboard.
    if (user && user.uid !== ADMIN_UID) {
        await auth.signOut();
        return;
    }
    if (user) {
        window.isAdm = true;

        window.isPro = true;
        localStorage.removeItem("isFreshmartPro");
        localStorage.removeItem("freshmart_license_code");

        // Update badge PRO/FREE di UI
        if (window.updateProBadge) window.updateProBadge();

        // 3. MASUK KE DASHBOARD ADMIN
        let loginView = document.getElementById('view-admin-login');
        if (loginView && !loginView.classList.contains('hidden')) {
            // FIX BACK BUTTON: jangan sertakan `tab` di state awal — kalau ada tab di sini,
            // history stack langsung "kotor" sebelum user klik apapun, sehingga back dari
            // dashboard admin malah masuk ke tab (bukan ke katalog/konfirmasi logout).
            history.replaceState({view: 'view-admin'}, '', window.location.href);
            changeView('view-admin', true); 
            openAdminMenu();
            showToast("Sesi Dipulihkan! Selamat Datang.");
        }
    } else {
        // JIKA LOGOUT ATAU SESI HABIS
        window.isAdm = false;
        window.isPro = false;
        if (window.updateProBadge) window.updateProBadge();
        localStorage.removeItem("isFreshmartPro");
        localStorage.removeItem("freshmart_license_code");
    }
});
});

// Note: Logika dokumen cetak A4 (openDocPreview, fitDocPreview, closeDocPreviewModal, printDocA4, exportDocFile)
// telah dipindahkan ke modul: src/modules/print/documents.js






// ==========================================
// AUTO-GENERATED BINDINGS FOR GLOBAL SCOPE
// ==========================================
window.el = el;
window.show = show;
window.hide = hide;
window.toggleCls = toggleCls;
window.setIn = setIn;
window.setH = setH;
window.setV = setV;
window.getV = getV;
window.esc = esc;
window.fixD = fixD;
window.fCur = fCur;
window.sL = sL;
window.ssL = ssL;
// defaultFbC & fbC sudah diimport dari src/config/firebase.js sebagai 'firebaseConfig'
window.defaultFbC = firebaseConfig;
window.fbC = firebaseConfig;
window.defApp = defApp;
window.ADMIN_UID = ADMIN_UID;
window.sLoad = sLoad;
window.hLoad = hLoad;
window.sanitizeCart = sanitizeCart;
window.loadAppData = loadAppData;
window.saveApp = saveApp;
window.GAS_SECRET_TOKEN = GAS_SECRET_TOKEN;
window.loadedScripts = loadedScripts;
window.rProdMod = rProdMod;
window.uMPP = uMPP;
window.rChck = rChck;
window.rPay = rPay;
window.aF = aF;
window.rAdmOrd = rAdmOrd;
window.MONTH_NAMES = MONTH_NAMES;
window.fitDocPreview = fitDocPreview;
try {
    Object.defineProperty(window, 'GAS_UPLOAD_URL', {
        get: () => GAS_UPLOAD_URL,
        set: (v) => { GAS_UPLOAD_URL = v; },
        configurable: true
    });
} catch(e) {}
try {
    Object.defineProperty(window, 'confirmCb', {
        get: () => confirmCb,
        set: (v) => { confirmCb = v; },
        configurable: true
    });
} catch(e) {}
try {
    Object.defineProperty(window, 'appData', {
        get: () => appData,
        set: (v) => { appData = v; },
        configurable: true
    });
} catch(e) {}
try {
    Object.defineProperty(window, 'cart', {
        get: () => cart,
        set: (v) => { cart = v; },
        configurable: true
    });
} catch(e) {}
try {
    Object.defineProperty(window, 'wishlist', {
        get: () => wishlist,
        set: (v) => { wishlist = v; },
        configurable: true
    });
} catch(e) {}
try {
    Object.defineProperty(window, 'myOrders', {
        get: () => myOrders,
        set: (v) => { myOrders = v; },
        configurable: true
    });
} catch(e) {}
try {
    Object.defineProperty(window, 'cust', {
        get: () => cust,
        set: (v) => { cust = v; },
        configurable: true
    });
} catch(e) {}
try {
    Object.defineProperty(window, 'currentMember', {
        get: () => currentMember,
        set: (v) => { currentMember = v; },
        configurable: true
    });
} catch(e) {}
try {
    Object.defineProperty(window, 'selectedReward', {
        get: () => selectedReward,
        set: (v) => { selectedReward = v; },
        configurable: true
    });
} catch(e) {}
try {
    Object.defineProperty(window, 'memberCheckTimer', {
        get: () => memberCheckTimer,
        set: (v) => { memberCheckTimer = v; },
        configurable: true
    });
} catch(e) {}
try {
    Object.defineProperty(window, 'aCat', {
        get: () => aCat,
        set: (v) => { aCat = v; },
        configurable: true
    });
} catch(e) {}
try {
    Object.defineProperty(window, 'aBrand', {
        get: () => aBrand,
        set: (v) => { aBrand = v; },
        configurable: true
    });
} catch(e) {}
try {
    Object.defineProperty(window, 'sQ', {
        get: () => sQ,
        set: (v) => { sQ = v; },
        configurable: true
    });
} catch(e) {}
try {
    Object.defineProperty(window, 'cSort', {
        get: () => cSort,
        set: (v) => { cSort = v; },
        configurable: true
    });
} catch(e) {}
try {
    Object.defineProperty(window, 'cView', {
        get: () => cView,
        set: (v) => { cView = v; },
        configurable: true
    });
} catch(e) {}
try {
    Object.defineProperty(window, 'cPage', {
        get: () => cPage,
        set: (v) => { cPage = v; },
        configurable: true
    });
} catch(e) {}
try {
    Object.defineProperty(window, 'iPP', {
        get: () => iPP,
        set: (v) => { iPP = v; },
        configurable: true
    });
} catch(e) {}
try {
    Object.defineProperty(window, 'cTab', {
        get: () => cTab,
        set: (v) => { cTab = v; },
        configurable: true
    });
} catch(e) {}
try {
    Object.defineProperty(window, 'aSq', {
        get: () => aSq,
        set: (v) => { aSq = v; },
        configurable: true
    });
} catch(e) {}
try {
    Object.defineProperty(window, 'eId', {
        get: () => eId,
        set: (v) => { eId = v; },
        configurable: true
    });
} catch(e) {}
try {
    Object.defineProperty(window, 'cProd', {
        get: () => cProd,
        set: (v) => { cProd = v; },
        configurable: true
    });
} catch(e) {}
try {
    Object.defineProperty(window, 'cVar', {
        get: () => cVar,
        set: (v) => { cVar = v; },
        configurable: true
    });
} catch(e) {}
try {
    Object.defineProperty(window, 'tVars', {
        get: () => tVars,
        set: (v) => { tVars = v; },
        configurable: true
    });
} catch(e) {}
try {
    Object.defineProperty(window, 'tWhol', {
        get: () => tWhol,
        set: (v) => { tWhol = v; },
        configurable: true
    });
} catch(e) {}
try {
    Object.defineProperty(window, 'cQty', {
        get: () => cQty,
        set: (v) => { cQty = v; },
        configurable: true
    });
} catch(e) {}
try {
    Object.defineProperty(window, 'oMods', {
        get: () => oMods,
        set: (v) => { oMods = v; },
        configurable: true
    });
} catch(e) {}
try {
    Object.defineProperty(window, 'aOrdLst', {
        get: () => aOrdLst,
        set: (v) => { aOrdLst = v; },
        configurable: true
    });
} catch(e) {}
try {
    Object.defineProperty(window, 'aCustLst', {
        get: () => aCustLst,
        set: (v) => { aCustLst = v; },
        configurable: true
    });
} catch(e) {}
try {
    Object.defineProperty(window, 'aRevLst', {
        get: () => aRevLst,
        set: (v) => { aRevLst = v; },
        configurable: true
    });
} catch(e) {}
try {
    Object.defineProperty(window, 'gOrds', {
        get: () => gOrds,
        set: (v) => { gOrds = v; },
        configurable: true
    });
} catch(e) {}
try {
    Object.defineProperty(window, 'gReviews', {
        get: () => gReviews,
        set: (v) => { gReviews = v; },
        configurable: true
    });
} catch(e) {}
try {
    Object.defineProperty(window, 'cVOrd', {
        get: () => cVOrd,
        set: (v) => { cVOrd = v; },
        configurable: true
    });
} catch(e) {}
try {
    Object.defineProperty(window, 'vouch', {
        get: () => vouch,
        set: (v) => { vouch = v; },
        configurable: true
    });
} catch(e) {}
try {
    Object.defineProperty(window, 'toastT', {
        get: () => toastT,
        set: (v) => { toastT = v; },
        configurable: true
    });
} catch(e) {}
try {
    Object.defineProperty(window, 'isSaving', {
        get: () => isSaving,
        set: (v) => { isSaving = v; },
        configurable: true
    });
} catch(e) {}
try {
    Object.defineProperty(window, 'bannerTmr', {
        get: () => bannerTmr,
        set: (v) => { bannerTmr = v; },
        configurable: true
    });
} catch(e) {}
try {
    Object.defineProperty(window, 'reviewFilterMode', {
        get: () => reviewFilterMode,
        set: (v) => { reviewFilterMode = v; },
        configurable: true
    });
} catch(e) {}
try {
    Object.defineProperty(window, 'lastReportPeriod', {
        get: () => lastReportPeriod,
        set: (v) => { lastReportPeriod = v; },
        configurable: true
    });
} catch(e) {}
try {
    Object.defineProperty(window, 'unsubMyOrdersRealtime', {
        get: () => unsubMyOrdersRealtime,
        set: (v) => { unsubMyOrdersRealtime = v; },
        configurable: true
    });
} catch(e) {}
try {
    Object.defineProperty(window, 'isSyncingRealtime', {
        get: () => isSyncingRealtime,
        set: (v) => { isSyncingRealtime = v; },
        configurable: true
    });
} catch(e) {}
try {
    Object.defineProperty(window, 'viewScrollPos', {
        get: () => viewScrollPos,
        set: (v) => { viewScrollPos = v; },
        configurable: true
    });
} catch(e) {}
try {
    Object.defineProperty(window, 'curViewName', {
        get: () => curViewName,
        set: (v) => { curViewName = v; },
        configurable: true
    });
} catch(e) {}
try {
    Object.defineProperty(window, 'searchTmr', {
        get: () => searchTmr,
        set: (v) => { searchTmr = v; },
        configurable: true
    });
} catch(e) {}
try {
    Object.defineProperty(window, 'taxYear', {
        get: () => taxYear,
        set: (v) => { taxYear = v; },
        configurable: true
    });
} catch(e) {}
try {
    Object.defineProperty(window, 'taxMonth', {
        get: () => taxMonth,
        set: (v) => { taxMonth = v; },
        configurable: true
    });
} catch(e) {}
try {
    Object.defineProperty(window, 'taxActiveTab', {
        get: () => taxActiveTab,
        set: (v) => { taxActiveTab = v; },
        configurable: true
    });
} catch(e) {}
try {
    Object.defineProperty(window, 'gTaxMonthly', {
        get: () => gTaxMonthly,
        set: (v) => { gTaxMonthly = v; },
        configurable: true
    });
} catch(e) {}
try {
    Object.defineProperty(window, 'qpWhol', {
        get: () => qpWhol,
        set: (v) => { qpWhol = v; },
        configurable: true
    });
} catch(e) {}
try {
    Object.defineProperty(window, 'html5QrCode', {
        get: () => html5QrCode,
        set: (v) => { html5QrCode = v; },
        configurable: true
    });
} catch(e) {}
try {
    Object.defineProperty(window, 'currentDocType', {
        get: () => currentDocType,
        set: (v) => { currentDocType = v; },
        configurable: true
    });
} catch(e) {}






















// =====================================================================
// TANYA JAWAB (Q&A / FAQ) STOREFRONT & ADMIN
// Note: Logika FAQ storefront & admin telah dipindahkan ke modul: src/modules/faq/index.js
// =====================================================================
