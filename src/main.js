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
// Services: Upload Media (GAS Drive Integration)
import './services/upload.js';
// Services: Penyimpanan Data & Realtime Sync (Firestore / Cache)
import './services/storage.js';
// Modules: Beranda & Banner Slider
import './modules/home/index.js';
// Modules: Storefront Modals (Kategori, Brand, Quick Menu, Terms, Privacy)
import './modules/storefront/index.js';
// Core: Logika Harga & GPS
import './core/pricing.js';
// Core: Dialog UI (Toast, Confirm, Prompt, Theme)
import './core/ui.js';
// Core: Router & History Navigation
import { setupHistoryRouter } from './core/router.js';
setupHistoryRouter();


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


// =====================================================================
// PENYIMPANAN DATA & REALTIME SYNC (STORAGE & CACHE)
// Note: Logika loadAppData, saveApp, dan attachRealtimeStockSync
// telah dipindahkan ke modul: src/services/storage.js
// =====================================================================

// =====================================================================
// CORE UI, DIALOG & ROUTER NAVIGASI
// Note: Logika toast, confirm modal, custom prompt, tema gelap,
// pergantian view (changeView), riwayat modal (pushModalHistory),
// router tab admin (openAdminTab), dan popstate listener
// telah dipindahkan ke modul: src/core/ui.js & src/core/router.js
// =====================================================================

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
