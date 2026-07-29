import './style.css';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
// firebase/compat/analytics: diload LAZY setelah halaman siap (bukan di render path kritis)
import DOMPurify from 'dompurify';

window.firebase = firebase;
window.DOMPurify = DOMPurify;

// ==========================================
// 1. THEME COLOR & COLOR PALETTE
// ==========================================

        // ==========================================
        // WARNA (MAGIC COLOR INJECTOR)
        // ==========================================
        let savedUITheme = localStorage.getItem('freshmart_ui_theme') || 'emerald';
        
        window.uiPalettes = {
            'emerald' : { 50: '#ecfdf5', 100: '#d1fae5', 200: '#a7f3d0', 300: '#6ee7b7', 400: '#34d399', 500: '#10b981', 600: '#059669', 700: '#047857', 800: '#065f46', 900: '#064e3b' },
            'teal'    : { 50: '#f0fdfa', 100: '#ccfbf1', 200: '#99f6e4', 300: '#5eead4', 400: '#2dd4bf', 500: '#14b8a6', 600: '#0d9488', 700: '#0f766e', 800: '#115e59', 900: '#134e4a' },
            'cyan'    : { 50: '#ecfeff', 100: '#cffafe', 200: '#a5f3fc', 300: '#67e8f9', 400: '#22d3ee', 500: '#06b6d4', 600: '#0891b2', 700: '#0e7490', 800: '#155e75', 900: '#164e63' },
            'sky'     : { 50: '#f0f9ff', 100: '#e0f2fe', 200: '#bae6fd', 300: '#7dd3fc', 400: '#38bdf8', 500: '#0ea5e9', 600: '#0284c7', 700: '#0369a1', 800: '#075985', 900: '#0c4a6e' },
            'blue'    : { 50: '#eff6ff', 100: '#dbeafe', 200: '#bfdbfe', 300: '#93c5fd', 400: '#60a5fa', 500: '#3b82f6', 600: '#2563eb', 700: '#1d4ed8', 800: '#1e40af', 900: '#1e3a8a' },
            'indigo'  : { 50: '#eef2ff', 100: '#e0e7ff', 200: '#c7d2fe', 300: '#a5b4fc', 400: '#818cf8', 500: '#6366f1', 600: '#4f46e5', 700: '#4338ca', 800: '#3730a3', 900: '#312e81' },
            'violet'  : { 50: '#f5f3ff', 100: '#ede9fe', 200: '#ddd6fe', 300: '#c4b5fd', 400: '#a78bfa', 500: '#8b5cf6', 600: '#7c3aed', 700: '#6d28d9', 800: '#5b21b6', 900: '#4c1d95' },
            'purple'  : { 50: '#faf5ff', 100: '#f3e8ff', 200: '#e9d5ff', 300: '#d8b4fe', 400: '#c084fc', 500: '#a855f7', 600: '#9333ea', 700: '#7e22ce', 800: '#6b21a8', 900: '#581c87' },
            'fuchsia' : { 50: '#fdf4ff', 100: '#fae8ff', 200: '#f5d0fe', 300: '#f0abfc', 400: '#e879f9', 500: '#d946ef', 600: '#c026d3', 700: '#a21caf', 800: '#86198f', 900: '#701a75' },
            'pink'    : { 50: '#fdf2f8', 100: '#fce7f3', 200: '#fbcfe8', 300: '#f9a8d4', 400: '#f472b6', 500: '#ec4899', 600: '#db2777', 700: '#be185d', 800: '#9d174d', 900: '#831843' },
            'rose'    : { 50: '#fff1f2', 100: '#ffe4e6', 200: '#fecdd3', 300: '#fda4af', 400: '#fb7185', 500: '#f43f5e', 600: '#e11d48', 700: '#be123c', 800: '#9f1239', 900: '#881337' },
            'red'     : { 50: '#fef2f2', 100: '#fee2e2', 200: '#fecaca', 300: '#fca5a5', 400: '#f87171', 500: '#dc2626', 600: '#b91c1c', 700: '#991b1b', 800: '#7f1d1d', 900: '#450a0a' },
            'orange'  : { 50: '#fff7ed', 100: '#ffedd5', 200: '#fed7aa', 300: '#fdba74', 400: '#fb923c', 500: '#ea580c', 600: '#c2410c', 700: '#9a3412', 800: '#7c2d12', 900: '#431407' },
            'amber'   : { 50: '#fffbeb', 100: '#fef3c7', 200: '#fde68a', 300: '#fcd34d', 400: '#fbbf24', 500: '#d97706', 600: '#b45309', 700: '#92400e', 800: '#78350f', 900: '#451a03' },
            'yellow'  : { 50: '#fefce8', 100: '#fef9c3', 200: '#fef08a', 300: '#fde047', 400: '#eab308', 500: '#d97706', 600: '#b45309', 700: '#854d0e', 800: '#713f12', 900: '#3f1d0b' },
            'lime'    : { 50: '#f7fee7', 100: '#ecfccb', 200: '#d9f99d', 300: '#bef264', 400: '#a3e635', 500: '#65a30d', 600: '#4d7c0f', 700: '#3f6212', 800: '#365314', 900: '#1a2e05' },
            'green'   : { 50: '#f0fdf4', 100: '#dcfce7', 200: '#bbf7d0', 300: '#86efac', 400: '#4ade80', 500: '#16a34a', 600: '#15803d', 700: '#166534', 800: '#14532d', 900: '#052e16' },
            'slate'   : { 50: '#f8fafc', 100: '#f1f5f9', 200: '#e2e8f0', 300: '#cbd5e1', 400: '#94a3b8', 500: '#475569', 600: '#334155', 700: '#1e293b', 800: '#0f172a', 900: '#020617' },
            'stone'   : { 50: '#fafaf9', 100: '#f5f5f4', 200: '#e7e5e4', 300: '#d6d3d1', 400: '#a8a29e', 500: '#57534e', 600: '#44403c', 700: '#292524', 800: '#1c1917', 900: '#0c0a09' }
        };
        
        // Ubah kode warna HEX menjadi RGB (dipakai untuk efek bayangan/glow transparan)
        window.hexToRgb = hex => {
            let bigint = parseInt(hex.replace('#', ''), 16);
            return ((bigint >> 16) & 255) + ',' + ((bigint >> 8) & 255) + ',' + (bigint & 255);
        };

        // FUNGSI UTAMA: menerapkan tema warna (CSS variable + Tailwind config).
        // FIX: sebelumnya logika ini cuma dijalankan sekali saat load awal. Sekarang dibungkus
        // jadi fungsi reusable (window.applyUITheme) agar bisa dipanggil ULANG tanpa reload
        // halaman saat data toko selesai disinkronkan dari server (lihat syncAppMeta()).
        window.applyUITheme = (themeName, customHex) => {
            const uiTheme = themeName || localStorage.getItem('freshmart_ui_theme') || 'emerald';
            const colors = window.uiPalettes[uiTheme] || window.uiPalettes['emerald'];
            
            if (themeName) localStorage.setItem('freshmart_ui_theme', uiTheme);
            
            const hex = customHex || localStorage.getItem('freshmart_theme_color') || colors[500];
            if (customHex) localStorage.setItem('freshmart_theme_color', hex);

            const hexToRgb = window.hexToRgb || (h => {
                let bigint = parseInt(h.replace('#', ''), 16);
                return ((bigint >> 16) & 255) + ',' + ((bigint >> 8) & 255) + ',' + (bigint & 255);
            });

            const primaryRgb = hexToRgb(hex);

            // Update Tailwind palette variables
            Object.keys(colors).forEach(shade => {
                document.documentElement.style.setProperty(`--color-emerald-${shade}`, colors[shade]);
            });

            // Update primary theme CSS variables (used across app and #global-loader)
            document.documentElement.style.setProperty('--color-primary', hex);
            document.documentElement.style.setProperty('--color-primary-dark', colors[600] || hex);
            document.documentElement.style.setProperty('--color-primary-light', colors[50] || '#f0fdf4');
            document.documentElement.style.setProperty('--color-primary-rgb', primaryRgb);

            // Update status bar meta theme-color tag
            let m = document.querySelector('meta[name="theme-color"]');
            if (!m) { 
                m = document.createElement('meta'); 
                m.setAttribute('name', 'theme-color'); 
                document.head.appendChild(m); 
            }
            m.setAttribute('content', hex);

            return colors;
        };

        let activeColors = window.applyUITheme(savedUITheme, localStorage.getItem('freshmart_theme_color'));

        // FIX: warna header/status-bar (meta theme-color) sebelumnya BARU dipasang ~2 detik
        // setelah halaman terbuka (menunggu data toko dari server), jadi selalu "putih dulu"
        // baru berubah warna. Sekarang dipasang dari cache lokal sesaat saat halaman dibuka,
        // lalu disegarkan lagi begitu data toko selesai dimuat (lihat syncAppMeta()).
        (function applyCachedHeaderColor(){
            const cachedHeaderColor = localStorage.getItem('freshmart_theme_color') || activeColors[500];
            let m = document.querySelector('meta[name="theme-color"]');
            if(!m){ m = document.createElement('meta'); m.setAttribute('name', 'theme-color'); document.head.appendChild(m); }
            m.setAttribute('content', cachedHeaderColor);
        })();

        // Deteksi Dark Mode Otomatis & Sinkronkan Ikon
        const initThemeIcon = () => {
            const isDark = document.documentElement.classList.contains('dark');
            const icon = document.getElementById('icon-theme') || document.getElementById('theme-toggle-icon');
            if (icon) icon.className = isDark ? 'fa-solid fa-sun text-sm text-amber-400' : 'fa-solid fa-moon text-sm text-slate-600 dark:text-slate-300';
        };

        if (localStorage.getItem('freshmart_theme') === 'dark' || (!('freshmart_theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) { 
            document.documentElement.classList.add('dark'); 
        }
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', initThemeIcon);
        } else {
            initThemeIcon();
        }


    

// ==========================================
// 2. MAIN APP LOGIC
// ==========================================

/* =========================================================
   FRESHMART POS & E-COMMERCE SYSTEM (BLOGGER XML EDITION)
   FINAL POLISH & GLOBAL DEBUG (CLEAN, SAFE, FORMATTED JS)
===========================================================*/

// --- 1. GLOBAL ERROR & PROMISE HANDLING ---
window.onerror = function(msg, url, line, col, error) { 
    console.error("Global Error Caught:", msg, "at", line, ":", col); 
    if(typeof showToast === 'function') showToast("Ops, ada kendala sistem."); 
    return false; 
};
window.addEventListener("unhandledrejection", function(e) { 
    console.warn("Promise Rejection Sentinel:", e.reason); 
});

// --- 2. UTILITY FUNCTIONS ---
window.updateSEO = (title, desc, image, url) => {
    document.title = title || "Toko Putri";
    const setMeta = (name, content, isProperty = false) => {
        const attr = isProperty ? 'property' : 'name';
        let el = document.querySelector(`meta[${attr}="${name}"]`);
        if (!el) {
            el = document.createElement('meta');
            el.setAttribute(attr, name);
            document.head.appendChild(el);
        }
        el.setAttribute('content', content);
    };
    if (desc) setMeta('description', desc);
    if (title) setMeta('og:title', title, true);
    if (desc) setMeta('og:description', desc, true);
    if (image) setMeta('og:image', image, true);
    if (url) setMeta('og:url', url, true);
};

window.injectJSONLD = (id, data) => {
    let script = document.getElementById(id);
    if (!script) {
        script = document.createElement('script');
        script.id = id;
        script.type = 'application/ld+json';
        document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(data);
};
const el = id => document.getElementById(id);
const show = id => { const e = el(id); if(e) e.classList.remove('hidden'); };
const hide = id => { const e = el(id); if(e) e.classList.add('hidden'); };
const toggleCls = (id, c, f) => { const e = el(id); if(e) e.classList.toggle(c, f); };
const setIn = (id, t) => { const e = el(id); if(e) e.innerText = t; };
const setH = (id, h) => { const e = el(id); if(e) e.innerHTML = h; };
const setV = (id, v) => { const e = el(id); if(e) e.value = v; };
const getV = id => { const e = el(id); return e ? e.value : ''; };

// XSS Sanitizer: Proteksi ketat terhadap string kosong, null, atau undefined
// FITUR BARU: label singkat status klaim hadiah, dipakai di riwayat pesanan pelanggan
window.rewardStatusLabel = (cr) => {
    if (!cr) return '';
    if (cr.status === 'ready') return '(Dikirim Bersama Pesanan)';
    if (cr.status === 'waiting_stock') return '(Stok Kosong - Ditunda)';
    return '(Menunggu Konfirmasi)';
};

const esc = s => {
    if (s === null || s === undefined) return '';
    return s.toString().replace(/[&<>'"]/g, t => ({
        '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;'
    }[t]));
};

// Auto-fix Google Drive Links (Untuk Rendering Langsung)
const fixD = v => {
    if (typeof v !== 'string') return v;
    const m = v.match(/drive\.google\.com.*(?:id=|\/d\/)([a-zA-Z0-9_-]+)/);
    return m ? `https://lh3.googleusercontent.com/d/${m[1]}` : v;
};

// Optimizer Google User Content Image (Ukuran & Format WebP)
const getOptImg = (url, sizeOpt) => {
    if (typeof url !== 'string') return url;
    if (url.includes('lh3.googleusercontent.com/d/')) {
        const cleanUrl = url.split('=')[0];
        return `${cleanUrl}=${sizeOpt}`;
    }
    return url;
};

// Format Currency Rupiah
const fCur = a => {
    const n = Number(a);
    return (isNaN(n) || a === null) ? 'Rp 0' : new Intl.NumberFormat('id-ID', {
        style: 'currency', currency: 'IDR', minimumFractionDigits: 0
    }).format(Math.abs(n)).replace(/^/, n < 0 ? '-' : '');
};

// LocalStorage Wrappers
const sL = k => { try { return localStorage.getItem(k); } catch(e) { return null; } };
const ssL = (k, v) => { try { localStorage.setItem(k, v); } catch(e) {} };


// Konfigurasi Default Bawaan Script
const defaultFbC = { 
    apiKey: "AIzaSyCOjrhMP52TGbiOyQLY92NDYE26N6d9hJM",
    authDomain: "restu-karya-utama.firebaseapp.com",
    databaseURL: "https://restu-karya-utama-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "restu-karya-utama",
    storageBucket: "restu-karya-utama.firebasestorage.app",
    messagingSenderId: "858310421352",
    appId: "1:858310421352:web:e20a833875e8d5c19944dd",
    measurementId: "G-PHDG2LJ8PM"
};

// =====================================================================
// FIX BUG: SEBAGIAN PERANGKAT MASIH TAMPIL FIREBASE/DATA LAMA PADAHAL SUDAH DIGANTI BARU
// Sebelumnya, config Firebase (API Key, Project ID, dst) bisa disimpan
// per-perangkat ke localStorage lewat form "Pengaturan > Config", dan
// localStorage itu SELALU MENANG dibanding config bawaan di file tema.
// Akibatnya: perangkat manapun yang PERNAH menyimpan form itu (misal
// dulu waktu masih pakai Firebase lama) akan TERUS memakai config lama
// itu SELAMANYA -- walaupun file tema di Blogger sudah diganti ke
// Firebase baru. Setiap perangkat jadi bisa nyambung ke database yang
// BERBEDA-BEDA tanpa disadari.
//
// Sekarang: config Firebase HANYA diambil dari file tema yang di-deploy
// (satu sumber kebenaran untuk SEMUA perangkat, sama seperti maksud
// awal supaya semua pelanggan lihat data yang sama). Baris di bawah ini
// juga otomatis MENGHAPUS override lama yang mungkin masih nyangkut di
// localStorage perangkat manapun yang memuat kode ini, supaya semua
// perangkat "sembuh sendiri" tanpa perlu hapus cache manual satu-satu.
// =====================================================================
try { localStorage.removeItem('freshmart_fb_config'); } catch(e) {}
const fbC = defaultFbC;

// GAS URL diubah menjadi let agar bisa di-override
let GAS_UPLOAD_URL = "https://script.google.com/macros/s/AKfycbx3dW9rHcdoKNYjSOJ8PoH2k6fABe7XlBD9teNHsBlCBqJquq8jd4UvnfXZVsfKdFsC/exec";

// Struktur data default ditambah parameter 'config'
const defApp = { 
    store: { 
        name: "Nama Toko Anda", slogan: "Slogan Toko", logo: "fa-store", 
        wa: "", address: "", lat: "", lng: "", costPerKm: 0, 
        isDeliveryEnabled: true, isPickupEnabled: true, 
        allProductsIcon: "", allBrandsIcon: "", 
        categoryStyle: "text", brandStyle: "image",
        showCategories: true, showBrands: true,
        themeColor: "#10b981", uiTheme: "emerald", // FIX: default eksplisit, supaya tidak ada nilai undefined yang nyelip
        useStock: false,   // Manajemen stok aktif/nonaktif
        ppnEnabled: false, // PPN aktif/nonaktif
        ppnRate: 11,        // Persentase PPN (default 11%)

    }, 
    // auth field dihapus: login admin sudah pakai Firebase Authentication (signInWithEmailAndPassword), bukan field ini 
    payment: { qrisUrl: "" }, 
    config: { gasUrl: "" }, // FITUR BARU
    banks: [], banners: [], categories: [], brands: [], products: [], vouchers: [], colors: [],
    rewards: [], // FITUR BARU: katalog hadiah (publik, sinkron realtime seperti kategori/voucher)
    customers: [], // FITUR BARU: database pelanggan (privat, HANYA dimuat saat admin membuka tab-nya)
    // FITUR BARU: Menu Pajak -- pengaturan & data pelengkap laporan pajak/keuangan.
    // 'monthlyExpenses' & 'balanceSheet' diisi MANUAL oleh admin (sistem tidak melacak
    // kas/bank/piutang/hutang/biaya operasional secara otomatis), sisanya (omset, PPN,
    // HPP) dihitung OTOMATIS dari data transaksi yang sudah ada.
    taxSettings: {
        companyName: "", npwp: "",
        taxScheme: "umkm_final", // 'umkm_final' (PPh Final 0.5% dari Omset) atau 'badan_normal' (PPh Badan 22% dari Laba Bersih) atau 'custom'
        customTaxRate: 0.5,
        // key format: "YYYY-M" (contoh "2026-7" utk Juli 2026) -> nominal biaya operasional bulan itu
        monthlyExpenses: {},
        // Neraca sederhana -- diisi manual, disimpan sebagai snapshot per tanggal input terakhir
        balanceSheet: { kas: 0, piutang: 0, hutang: 0, modalDisetor: 0 }
    }
};

/* ================================================= */


// --- 3. STATE & INISIALISASI FIREBASE ---
firebase.initializeApp(fbC);
const db = firebase.firestore();
const auth = firebase.auth();

// Analytics diload LAZY setelah browser idle agar tidak memperlambat render awal.
// Dengan dynamic import, chunk firebase-analytics tidak masuk bundle kritis.
let analytics = null;
const loadAnalytics = () => {
    import('firebase/compat/analytics').then(() => {
        try { analytics = firebase.analytics(); } catch(e) {}
    }).catch(() => {});
};
if (typeof requestIdleCallback !== 'undefined') {
    requestIdleCallback(loadAnalytics, { timeout: 5000 });
} else {
    setTimeout(loadAnalytics, 3000);
}


// FIX KEAMANAN: hanya 1 akun (UID) ini yang boleh jadi admin.
// Sebelumnya SIAPA SAJA yang berhasil login via Firebase Auth otomatis jadi admin
// (asal punya akun di project ini). Sekarang dibatasi ke UID spesifik milik pemilik toko.
const ADMIN_UID = 'K2ijSERTT2dg27yYGTEgn6XHSnW2';

db.settings({
    ignoreUndefinedProperties: true,
    cacheSizeBytes: firebase.firestore.CACHE_SIZE_UNLIMITED,
    merge: true,
    // FIX: di jaringan yang tidak stabil (WiFi publik goyah, proxy kantor, VPN),
    // koneksi realtime Firestore lewat QUIC sering gagal berulang kali (muncul
    // sebagai banyak "ERR_QUIC_PROTOCOL_ERROR" di console). SDK tetap otomatis
    // pulih ke long-polling, tapi butuh beberapa kali gagal dulu -- opsi ini
    // membiarkan SDK MENDETEKSI OTOMATIS kondisi tersebut lebih awal dan langsung
    // pakai transport yang lebih stabil, memangkas log error/retry di jaringan
    // seperti itu. Tidak memaksa long-polling terus-menerus (tetap pakai WebChannel
    // normal kalau jaringan baik-baik saja), jadi tidak memperlambat di kondisi normal.
    experimentalAutoDetectLongPolling: true
});

// State Variables
let confirmCb = null;
let appData = JSON.parse(JSON.stringify(defApp));

window.updateProBadge = () => {};

let cart = [], wishlist = [], myOrders = [];
let cust = { name:'', address:'', lat:null, lng:null, deliveryMethod:'delivery', distance:0, note:'', wa:'' };
// FITUR BARU: state program loyalitas member (dicek ulang tiap kali nomor WA di form checkout berubah)
let currentMember = null; // {id, name, phone, points} jika nomor WA cocok dengan Database Pelanggan, null jika tidak
let selectedReward = null; // hadiah yang dipilih pelanggan untuk ditukar poin (dipotong SAAT pesanan dibuat, bukan saat dipilih)
let memberCheckTimer = null;

let aCat = 'Semua Produk', aBrand = 'Semua Merek', sQ = '', cSort = 'newest', cView = 'grid', cPage = 1, iPP = 12;
let cTab = 'orders', aSq = '', eId = null;
window.isAdm = false; window.isPro = true; // FIX: dulu 'let' lokal (bisa di-bypass via console), sekarang properti window agar dijaga oleh Security Block
let cProd = null, cVar = 0, tVars = [], tWhol = [], cQty = 1, oMods = [];
let aOrdLst = null, aCustLst = null, aRevLst = null, gOrds = [], gReviews = [], cVOrd = null, vouch = null, toastT, isSaving = false, bannerTmr = null;
let reviewFilterMode = 'all'; // FITUR BARU: filter tampilan ulasan di admin (all/visible/hidden)
let lastReportPeriod = 'today'; // FITUR BARU: ingat filter periode laporan terakhir dipilih admin

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
let unsubMyOrdersRealtime = [];
window.detachMyOrdersRealtime = () => {
    unsubMyOrdersRealtime.forEach(u => { try { u(); } catch(e) {} });
    unsubMyOrdersRealtime = [];
};
window.attachMyOrdersRealtime = () => {
    window.detachMyOrdersRealtime();
    // FIX: dulu memasang SATU listener realtime per pesanan di riwayat -- kalau
    // riwayat sudah menumpuk banyak (puluhan/ratusan, misal dari testing), ini
    // membuka puluhan koneksi Firestore SEKALIGUS dan bisa bikin koneksi browser
    // tersendat/putus-sambung (terlihat sebagai error QUIC/Listen channel di
    // console). Sekarang dibatasi HANYA ke 15 pesanan TERBARU -- itu paling
    // relevan untuk dipantau live; pesanan lama tetap bisa dicek manual.
    const MAX_LIVE_ORDERS = 15;
    myOrders.slice(0, MAX_LIVE_ORDERS).forEach((o, idx) => {
        const unsub = db.collection("freshmart_orders").doc(o.orderId).onSnapshot(doc => {
            if (!doc.exists) return;
            const data = doc.data();
            const newStatus = data.status;
            const newRewardStatus = data.claimedReward ? data.claimedReward.status : null;
            const newRewardNote = data.claimedReward ? (data.claimedReward.note || '') : '';
            let changed = false, notifMsg = '';

            if (newStatus && myOrders[idx] && myOrders[idx].status !== newStatus) {
                const oldStatus = myOrders[idx].status;
                myOrders[idx].status = newStatus;
                changed = true;
                if (oldStatus !== undefined) notifMsg = `Pesanan #${o.orderId.split('-').pop()} kini: ${newStatus}`;
            }
            // FITUR BARU: sinkron status klaim hadiah (mis. admin ubah dari "Diproses" ke "Stok Kembali Ada")
            if (myOrders[idx] && myOrders[idx].claimedReward && newRewardStatus &&
                (myOrders[idx].claimedReward.status !== newRewardStatus || myOrders[idx].claimedReward.note !== newRewardNote)) {
                const firstUpdate = myOrders[idx].claimedReward.status === undefined;
                myOrders[idx].claimedReward.status = newRewardStatus;
                myOrders[idx].claimedReward.note = newRewardNote;
                changed = true;
                if (!firstUpdate && !notifMsg) notifMsg = `Update hadiah "${myOrders[idx].claimedReward.name}" pada pesanan #${o.orderId.split('-').pop()}`;
            }
            if (changed) {
                ssL('freshmart_my_orders', JSON.stringify(myOrders));
                setTimeout(() => {
                    renderMyOrders();
                }, 0);
                if (notifMsg) showToast(notifMsg);
            }
        }, err => { console.error('Realtime status gagal:', err); });
        unsubMyOrdersRealtime.push(unsub);
    });
};

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

// Fungsi untuk membersihkan keranjang dari produk yang sudah dihapus/dinonaktifkan Admin
const sanitizeCart = () => {
    const useStk = appData.store.useStock === true || appData.store.useStock === 'true';
    cart = cart.filter(c => {
        const p = appData.products.find(x => x.id === c.id);
        if (!p || p.isActive === 'false' || p.isActive === false) return false;
        // FIX: buang juga item jika variannya nonaktif atau stoknya habis
        if (c.variantName) {
            const v = (p.variants || []).find(vv => vv.name === c.variantName);
            if (!v) return false;
            if (v.isActive === false || v.isActive === 'false') return false;
            if (useStk && (parseFloat(v.stock) || 0) <= 0) return false;
        } else {
            if (useStk && (parseFloat(p.stock) || 0) <= 0) return false;
        }
        return true;
    });
    ssL('freshmart_cart', JSON.stringify(cart));
};

// --- 4. LOGIKA LOAD & SAVE DATA UTAMA ---
const loadAppData = async () => {
    if(document.documentElement.classList.contains('dark')){
        const icon = el('icon-theme');
        if(icon) icon.className = 'fa-solid fa-sun text-sm text-amber-500';
    }
    sLoad('Sinkron Data...');
    try {
        const d = await db.collection("freshmart").doc("cms_data").get();
        let localProducts = JSON.parse(sL('freshmart_products') || 'null');
        let localUpdate = parseInt(sL('freshmart_last_update') || '0');
        
        if (d.exists) {
            const f = d.data();
            // Simpan cache cms_data ke local storage agar splashscreen bisa membaca data terbaru secara instan
            ssL('freshmart_cms_data', JSON.stringify(f));

            // Merge Data Setting
            appData = { ...defApp, ...f };
            appData.store = { ...defApp.store, ...(f.store || {}) };
            appData.payment = { ...defApp.payment, ...(f.payment || {}) };
            // PATCH B1+B2: deep-merge config setelah data server dimuat,
            // dan terapkan GAS URL di sini (bukan sebelum data ada).
            appData.config = { ...defApp.config, ...(f.config || {}) };
            if (appData.config && appData.config.gasUrl) GAS_UPLOAD_URL = appData.config.gasUrl;
            
            const serverUpdate = f.lastUpdate || 0;
            
            // Migrasi Produk (Jika masih di array lama, pindah ke Collection Sub)
            if (f.products && f.products.length > 0) {
                const batch = db.batch();
                f.products.forEach(p => {
                    batch.set(db.collection("freshmart").doc("cms_data").collection("products").doc(p.id.toString()), p);
                });
                await batch.commit();
                await db.collection("freshmart").doc("cms_data").update({ 
                    products: firebase.firestore.FieldValue.delete(), 
                    lastUpdate: firebase.firestore.FieldValue.increment(1)
                });
                
                appData.products = f.products.sort((a,b) => (b.id||0) - (a.id||0));
                ssL('freshmart_products', JSON.stringify(appData.products));
            } else {
                // Ambil Produk (Bandingkan versi lokal dengan server agar irit bandwidth)
                if (localProducts && localUpdate >= serverUpdate) {
                    appData.products = localProducts;
                } else {
                    const pSnap = await db.collection("freshmart").doc("cms_data").collection("products").get();
                    appData.products = pSnap.docs.map(doc => doc.data()).sort((a,b) => (b.id||0) - (a.id||0));
                    ssL('freshmart_products', JSON.stringify(appData.products));
                    ssL('freshmart_last_update', serverUpdate.toString());
                }
            }
        }
    } catch(e) {
        // Fallback jika Offline
        const l = JSON.parse(sL('freshmart_cms_data') || 'null');
        const lp = JSON.parse(sL('freshmart_products') || 'null');
        if (l) {
            appData = { ...defApp, ...l };
            appData.store = { ...defApp.store, ...(l.store || {}) };
            appData.payment = { ...defApp.payment, ...(l.payment || {}) };
            // PATCH B7: deep-merge config dari cache offline juga
            appData.config = { ...defApp.config, ...(l.config || {}) };
            if (appData.config && appData.config.gasUrl) GAS_UPLOAD_URL = appData.config.gasUrl;
        }
        if (lp) { appData.products = lp; }
        showToast("Mode Offline (Data Lokal)");
    }
    
    // Pastikan array selalu ada
    appData.products = appData.products || [];
    appData.categories = appData.categories || [];
    appData.brands = appData.brands || [];
    appData.vouchers = appData.vouchers || [];
    


    // Perbaikan URL Drive
    appData.products.forEach(p => { 
        if(p.img) p.img = fixD(p.img); 
        if(p.variants) p.variants.forEach(v => { if(v.img) v.img = fixD(v.img); }); 
    });
    if(appData.banners) appData.banners.forEach(b => { if(b.img) b.img = fixD(b.img); });
    if(appData.categories) appData.categories.forEach(c => { if(c.img) c.img = fixD(c.img); });
    if(appData.brands) appData.brands.forEach(b => { if(b.img) b.img = fixD(b.img); });
    if(appData.store.logo) appData.store.logo = fixD(appData.store.logo);
    if(appData.store.allProductsIcon) appData.store.allProductsIcon = fixD(appData.store.allProductsIcon);
    if(appData.store.allBrandsIcon) appData.store.allBrandsIcon = fixD(appData.store.allBrandsIcon);
    if(appData.payment.qrisUrl) appData.payment.qrisUrl = fixD(appData.payment.qrisUrl);
    
    cart.forEach(i => { if(i.img) i.img = fixD(i.img); });
    wishlist.forEach(i => { if(i.img) i.img = fixD(i.img); });
    
    sanitizeCart();
    updCart();
    updWish();
    rDyn();
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
            orientation: 'any',
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
window.attachRealtimeStockSync = () => {
    if (window.unsubCmsRealtime) return; // jangan pasang dobel
    window.unsubCmsRealtime = db.collection("freshmart").doc("cms_data")
        .onSnapshot(async (doc) => {
            if (!doc.exists || isSyncingRealtime) return;
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
                // CATATAN: 'rewards' TIDAK lagi disinkron di sini -- sudah punya listener
                // realtime tersendiri (lihat attachRewardsRealtime), karena sekarang hadiah
                // disimpan sebagai sub-collection sendiri (bukan field di dokumen ini).
                appData.payment = { ...defApp.payment, ...(f.payment || {}) };
                appData.config = { ...defApp.config, ...(f.config || {}) };
                appData.taxSettings = { ...defApp.taxSettings, ...(f.taxSettings || {}) }; // FITUR BARU: Menu Pajak
                if (appData.config && appData.config.gasUrl) GAS_UPLOAD_URL = appData.config.gasUrl;
                if (appData.banners) appData.banners.forEach(b => { if(b.img) b.img = fixD(b.img); });
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
            }
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
        // Ditutup lewat aksi user di UI (klik X / klik area luar / tombol Batal, dst).
        // Selalu serahkan ke history.back() agar proses penutupan tetap melalui satu
        // jalur yang sama dengan tombol back fisik (popstate) -> tidak ada duplikasi logic.
        const idx = oMods.lastIndexOf(name);
        if (idx === oMods.length - 1) { history.back(); return; }
        else if (idx > -1) { oMods.splice(idx, 1); } // stack tidak sinkron (kasus langka) -> bersihkan saja
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
    const darkBg2 = (hex, a=0.97) => {
        const r = parseInt(hex.slice(1,3),16), g = parseInt(hex.slice(3,5),16), b = parseInt(hex.slice(5,7),16);
        return `rgba(${Math.round(r*0.10)},${Math.round(g*0.10)},${Math.round(b*0.10)},${a})`;
    };

    // Konfigurasi per tipe
    const cfg = {
        // Sukses, info, loading → ikut warna tema
        success: {
            bg:      `linear-gradient(135deg, ${darkBg(pDark.replace(/[^#\w]/g,'') || '#047857')} 0%, ${darkBg2(pMain.replace(/[^#\w]/g,'') || '#10b981')} 100%)`,
            border:  `rgba(${pRgb}, 0.28)`,
            accent:  pMain,
            iconBg:  `rgba(${pRgb}, 0.18)`,
            icon:    'fa-circle-check',
            label:   'Berhasil',
        },
        info: {
            bg:      `linear-gradient(135deg, ${darkBg(pDark.replace(/[^#\w]/g,'') || '#047857')} 0%, ${darkBg2(pMain.replace(/[^#\w]/g,'') || '#10b981')} 100%)`,
            border:  `rgba(${pRgb}, 0.2)`,
            accent:  pMain,
            iconBg:  `rgba(${pRgb}, 0.15)`,
            icon:    'fa-circle-info',
            label:   'Informasi',
        },
        loading: {
            bg:      `linear-gradient(135deg, ${darkBg(pDark.replace(/[^#\w]/g,'') || '#047857')} 0%, ${darkBg2(pMain.replace(/[^#\w]/g,'') || '#10b981')} 100%)`,
            border:  `rgba(${pRgb}, 0.15)`,
            accent:  pMain,
            iconBg:  `rgba(${pRgb}, 0.12)`,
            icon:    'fa-spinner fa-spin',
            label:   'Memproses...',
        },
        // Error & warning → warna semantik (tidak berubah ikut tema)
        error: {
            bg:      'linear-gradient(135deg, #3f0a14 0%, #1c0008 100%)',
            border:  'rgba(251,113,133,0.22)',
            accent:  '#fda4af',
            iconBg:  'rgba(251,113,133,0.15)',
            icon:    'fa-circle-xmark',
            label:   'Terjadi Kesalahan',
        },
        warning: {
            bg:      'linear-gradient(135deg, #3a1500 0%, #1c0a00 100%)',
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
        
        const r = {'view-cart': renderCart, 'view-checkout': rChck, 'view-payment': rPay, 'view-wishlist': renderWish, 'view-orders': renderMyOrders};
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
            b.className = 'flex-1 py-3.5 bg-emerald-600 text-white font-bold rounded-xl hover:bg-emerald-700 active:scale-95 transition-all text-sm shadow-sm';
            el('confirm-icon-box').className = 'w-16 h-16 bg-emerald-50 dark:bg-emerald-900/30 text-emerald-500 dark:text-emerald-400 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-5 border border-emerald-200 dark:border-emerald-800';
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
    <button onclick="setCat('Semua Produk'); closeCategoryModal()" class="w-full flex items-center gap-3.5 p-3 sm:p-3.5 rounded-2xl border transition-all active:scale-[0.98] ${isActiveAll ? 'bg-emerald-50/80 border-emerald-500 dark:bg-emerald-900/30 dark:border-emerald-500 shadow-[0_0_0_1px_rgba(var(--color-primary-rgb),0.2)]' : 'bg-slate-50 border-slate-200 dark:bg-slate-800/50 dark:border-slate-700 hover:border-emerald-300 dark:hover:border-emerald-600'} group">
        <div class="w-11 h-11 sm:w-12 sm:h-12 rounded-xl ${isActiveAll ? 'bg-emerald-500 text-white border-none' : 'bg-white text-slate-400 border border-slate-200 dark:border-slate-600 group-hover:text-emerald-500'} flex items-center justify-center shadow-sm shrink-0 overflow-hidden transition-colors">
            <i class="fa-solid fa-layer-group text-base sm:text-lg"></i>
        </div>
        <span class="text-xs sm:text-sm font-bold uppercase tracking-widest text-left flex-1 ${isActiveAll ? 'text-emerald-600 dark:text-emerald-400' : 'text-slate-600 dark:text-slate-300'}">SEMUA</span>
        <i class="fa-solid fa-circle-check text-base ${isActiveAll ? 'text-emerald-500' : 'text-slate-300 dark:text-slate-600'}"></i>
    </button>`;

    appData.categories.forEach(c => {
        let isActive = aCat === c.name;
        // Ikon kategori tetap bisa diganti gambar custom (di Pengaturan > Kategori); kalau kosong, fallback ke ikon default
        let imgH = c.img ? `<img loading="lazy" src="${esc(c.img)}" alt="${esc(c.name)}" class="w-full h-full object-cover" onerror="this.onerror=null;this.src='https://placehold.co/100?text=Cat'"></i>` : `<i class="fa-solid fa-box text-base sm:text-lg"></i>`;
        h += `
        <button onclick="setCat('${esc(c.name)}'); closeCategoryModal()" class="w-full flex items-center gap-3.5 p-3 sm:p-3.5 rounded-2xl border transition-all active:scale-[0.98] ${isActive ? 'bg-emerald-50/80 border-emerald-500 dark:bg-emerald-900/30 dark:border-emerald-500 shadow-[0_0_0_1px_rgba(var(--color-primary-rgb),0.2)]' : 'bg-slate-50 border-slate-200 dark:bg-slate-800/50 dark:border-slate-700 hover:border-emerald-300 dark:hover:border-emerald-600'} group">
            <div class="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-white dark:bg-slate-800 flex items-center justify-center shadow-sm shrink-0 text-slate-400 group-hover:text-emerald-500 overflow-hidden border border-slate-200 dark:border-slate-600">
                ${imgH}
            </div>
            <span class="text-xs sm:text-sm font-bold uppercase tracking-widest text-left flex-1 line-clamp-1 ${isActive ? 'text-emerald-600 dark:text-emerald-400' : 'text-slate-600 dark:text-slate-300'}">${esc(c.name)}</span>
            <i class="fa-solid fa-circle-check text-base ${isActive ? 'text-emerald-500' : 'text-slate-300 dark:text-slate-600'}"></i>
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
    <button onclick="setBrand('Semua Merek'); closeBrandModal()" class="flex flex-col items-center justify-start p-2.5 sm:p-3.5 rounded-[1.25rem] border transition-all ${isActiveAll ? 'bg-emerald-50/80 border-emerald-500 dark:bg-emerald-900/30 dark:border-emerald-500 shadow-[0_0_0_1px_rgba(var(--color-primary-rgb),0.2)]' : 'bg-slate-50 border-slate-200 dark:bg-slate-800/50 dark:border-slate-700 hover:border-emerald-300 dark:hover:border-emerald-600'} group">
        <div class="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl ${isActiveAll ? 'bg-emerald-500 text-white border-none' : 'bg-white text-slate-400 border border-slate-200 dark:border-slate-600 group-hover:text-emerald-500'} flex items-center justify-center shadow-sm mb-2.5 transition-colors shrink-0">
            <i class="fa-solid fa-copyright text-lg sm:text-xl"></i>
        </div>
        <span class="text-[9px] font-bold uppercase tracking-widest text-center leading-tight line-clamp-2 w-full break-words ${isActiveAll ? 'text-emerald-600 dark:text-emerald-400' : 'text-slate-600 dark:text-slate-300'}">SEMUA MEREK</span>
    </button>`;

    appData.brands.forEach(b => {
        let isActive = aBrand === b.name;
        let imgH = b.img ? `<img loading="lazy" src="${esc(b.img)}" alt="${esc(b.name)}" class="w-full h-full object-contain p-1.5" ></i>` : `<i class="fa-solid fa-tag text-lg sm:text-xl"></i>`;
        h += `
        <button onclick="setBrand('${esc(b.name)}'); closeBrandModal()" class="flex flex-col items-center justify-start p-2.5 sm:p-3.5 rounded-[1.25rem] border transition-all ${isActive ? 'bg-emerald-50/80 border-emerald-500 dark:bg-emerald-900/30 dark:border-emerald-500 shadow-[0_0_0_1px_rgba(var(--color-primary-rgb),0.2)]' : 'bg-slate-50 border-slate-200 dark:bg-slate-800/50 dark:border-slate-700 hover:border-emerald-300 dark:hover:border-emerald-600'} group">
            <div class="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white flex items-center justify-center shadow-sm mb-2.5 text-slate-400 group-hover:text-emerald-500 overflow-hidden shrink-0 border border-slate-200 dark:border-slate-600">
                ${imgH}
            </div>
            <span class="text-[9px] font-bold uppercase tracking-widest text-center leading-tight line-clamp-2 w-full break-words ${isActive ? 'text-emerald-600 dark:text-emerald-400' : 'text-slate-600 dark:text-slate-300'}">${esc(b.name)}</span>
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
// SECURITY: Token untuk autentikasi ke GAS script
// GANTI dengan token yang sama persis di GAS script Anda
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
                    document.execCommand('insertHTML', false, `<br><img loading="lazy" src="${finalUrl}" style="max-width:100%; border-radius:12px; margin: 10px 0; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);" ></i><br>`);
                }
                showToast("Gambar berhasil disisipkan!");
            } else showToast("Gagal upload gambar.");
        } catch(e) { showToast("Gagal koneksi."); } 
        finally { hLoad(); inputElement.value=''; }
    };
    reader.onerror = () => { showToast("Gagal membaca file!"); hLoad(); inputElement.value=''; };
};

// --- 8. RENDERER HALAMAN UTAMA (KATALOG) ---
window.startBannerAutoSlide = () => {
    clearInterval(bannerTmr);
    const s = el('banner-slider');
    if (!s || !appData.banners || appData.banners.length <= 1) return;
    
    bannerTmr = setInterval(() => {
        const sl = el('banner-slider');
        if (!sl) return clearInterval(bannerTmr);
        const m = sl.scrollWidth - sl.clientWidth;
        if (sl.scrollLeft >= m - 10) sl.scrollTo({left:0, behavior:'smooth'});
        else sl.scrollBy({left:sl.clientWidth, behavior:'smooth'});
    }, 3500);
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

    // --- RENDER BANNER 3D PREMIUM ---
    let bHTML = (appData.banners && appData.banners.length) ? `<div id="banner-slider" class="flex overflow-x-auto gap-4 sm:gap-6 pb-6 pt-2 snap-x hide-scrollbar scroll-smooth" ontouchstart="clearInterval(bannerTmr)" ontouchend="setTimeout(startBannerAutoSlide, 3000)" onmouseenter="clearInterval(bannerTmr)" onmouseleave="startBannerAutoSlide()">${appData.banners.map((b,i)=>{
        const linkAction = b.link ? `onclick="window.open('${esc(b.link)}', '_self')"` : '';
        return `
        <div ${linkAction} class="w-[88vw] sm:w-[480px] min-h-[180px] sm:min-h-[220px] snap-center shrink-0 rounded-[2rem] relative overflow-hidden group cursor-pointer bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-dark)] text-white shadow-md hover:-translate-y-1.5 hover:scale-[1.02] hover:shadow-[0_20px_40px_-10px_rgba(var(--color-primary-rgb),0.35)] transition-all duration-300 border border-white/15 flex flex-col">
            <!-- Dynamic Background Shapes -->
            <div class="absolute -right-10 -top-10 w-40 h-40 border-[24px] border-white/10 rounded-full pointer-events-none group-hover:scale-110 transition-transform duration-500"></div>
            <div class="absolute -left-12 top-10 w-24 h-24 bg-white/10 rounded-full border border-white/5 pointer-events-none transform -rotate-12 shadow-inner group-hover:-translate-x-2 transition-transform duration-500"></div>
            <div class="absolute right-12 bottom-4 w-16 h-16 bg-white/5 rounded-full blur-md pointer-events-none"></div>
            
            <div class="flex flex-1 w-full relative z-10">
                <div class="w-[60%] p-5 sm:p-6 md:p-7 flex flex-col justify-center z-20">
                    <span class="inline-block px-3 py-1 bg-white/15 backdrop-blur-md rounded-full text-white text-[9px] sm:text-[10px] font-bold uppercase tracking-widest w-max mb-3 border border-white/25 shadow-sm"><i class="fa-solid fa-star text-amber-300 mr-1 animate-pulse"></i> Promo</span>
                    <h2 class="text-[15px] sm:text-lg md:text-xl font-extrabold text-white leading-snug mb-2 drop-shadow-md line-clamp-2 tracking-tight">${esc(b.title || 'Penawaran Spesial')}</h2>
                    <p class="text-[10px] sm:text-[11px] text-white/85 font-medium line-clamp-3 leading-relaxed mb-3">${esc(b.desc || 'Belanja sekarang dan dapatkan penawaran terbaik.')}</p>
                    ${b.link ? `<button class="mt-auto bg-white text-slate-900 text-[9px] sm:text-[10px] uppercase tracking-wider font-extrabold py-2.5 px-4.5 rounded-full w-max hover:bg-slate-100 active:scale-95 transition-all shadow-md flex items-center gap-2 group-hover:pr-5">Beli Sekarang <i class="fa-solid fa-arrow-right transition-transform group-hover:translate-x-1"></i></button>` : ''}
                </div>
                <div class="w-[40%] relative z-10 flex items-center justify-center p-2 sm:p-4 pr-4 sm:pr-6">
                    ${b.img ? `<img loading="lazy" src="${esc(getOptImg(b.img, 'w800-rw'))}" alt="${esc(b.title || 'Promo Banner')}" class="w-full h-full object-contain drop-shadow-2xl transition-transform duration-700 group-hover:scale-108" onerror="this.style.display='none'">` : `
                    <div class="w-20 h-20 sm:w-24 sm:h-24 rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-lg group-hover:rotate-12 transition-all duration-500">
                        <i class="fa-solid fa-gift text-4xl sm:text-5xl text-white drop-shadow-md"></i>
                    </div>`}
                </div>
            </div>
        </div>`;
    }).join('')}</div>` : '';

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
                let desc = v.type === 'shipping_free' ? 'Gratis Ongkir' : (v.type === 'percent' ? `Diskon ${v.value}%` : `Diskon ${fCur(v.value)}`);
                let terms = [];
                if(v.minPurchase > 0) terms.push(`Min. Blj ${fCur(v.minPurchase)}`);
                if(v.maxDiscount > 0) terms.push(`Maks. ptg ${fCur(v.maxDiscount)}`);
                if(v.targetProduct) terms.push(`Produk Khusus`);
                let termsStr = terms.length > 0 ? terms.join(' &bull; ') : 'Tanpa minimal belanja';
                
                return `
                <div class="w-[280px] sm:w-[320px] shrink-0 snap-start relative group cursor-pointer active:scale-95 transition-all duration-300" onclick="copyVoucher('${esc(v.code)}')">
                    <div class="w-full h-[110px] bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-dark)] rounded-[1.25rem] shadow-md hover:shadow-[0_15px_30px_-5px_rgba(var(--color-primary-rgb),0.3)] hover:-translate-y-1.5 hover:scale-[1.02] transition-all duration-300 flex relative overflow-hidden border border-white/20 text-white">
                        <!-- Glow decorative circle -->
                        <div class="absolute -right-4 -top-4 w-24 h-24 bg-white/10 rounded-full blur-xl pointer-events-none"></div>
                        
                        <!-- Left/Right Ticket Punch Holes (Biting into the sides) -->
                        <div class="absolute -top-2.5 right-[28%] w-5 h-5 rounded-full bg-[#f1f5f9] dark:bg-[#0b1121] border-b border-white/10 z-20 pointer-events-none transform translate-x-1/2 transition-colors duration-400"></div>
                        <div class="absolute -bottom-2.5 right-[28%] w-5 h-5 rounded-full bg-[#f1f5f9] dark:bg-[#0b1121] border-t border-white/10 z-20 pointer-events-none transform translate-x-1/2 transition-colors duration-400"></div>
                        
                        <!-- Main Details (Left Side) -->
                        <div class="flex-1 px-5 py-3 flex flex-col justify-center relative z-10">
                            <h4 class="font-extrabold text-white text-base leading-tight mb-1 drop-shadow-md line-clamp-1">${desc}</h4>
                            <p class="text-[8px] sm:text-[9px] font-bold text-white/80 flex items-center gap-1.5 mb-2.5 uppercase tracking-wider"><i class="fa-solid fa-circle-info text-white/60"></i> ${termsStr}</p>
                            <div class="inline-flex">
                                <span class="bg-black/20 backdrop-blur-md text-white text-[10px] sm:text-xs font-bold px-3 py-1.5 rounded-xl uppercase tracking-widest border border-white/15 shadow-inner flex items-center gap-2 font-mono">
                                    <i class="fa-solid fa-ticket text-amber-300"></i> ${esc(v.code)}
                                </span>
                            </div>
                        </div>
                        
                        <!-- Divider Line -->
                        <div class="w-0 border-l-[2px] border-dashed border-white/30 relative z-10 my-3"></div>
                        
                        <!-- Action Area (Right Side) -->
                        <div class="w-[28%] flex flex-col items-center justify-center relative z-10 bg-white/10 backdrop-blur-sm group-hover:bg-white/20 transition-all duration-300">
                            <div class="w-9 h-9 rounded-full bg-white/20 backdrop-blur-md border border-white/25 text-white flex items-center justify-center mb-1.5 shadow-sm group-hover:bg-white group-hover:text-slate-900 group-hover:scale-110 transition-all duration-300">
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
            return `<div onclick="filterCategory('${nameSafe}')" class="cursor-pointer shrink-0 snap-start group py-1"><div class="px-5 py-2.5 rounded-[1.25rem] border-2 transition-all duration-300 flex items-center gap-3 ${isSel ? 'bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-dark)] border-transparent text-white shadow-md' : 'bg-white dark:bg-slate-800 border-slate-100 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:border-[var(--color-primary)] hover:shadow-md hover:-translate-y-1'}"><div class="w-6 h-6 rounded-full flex items-center justify-center ${isSel ? 'bg-white/20 text-white shadow-inner' : 'bg-slate-50 dark:bg-slate-700 text-slate-400 group-hover:bg-[var(--color-primary-light)] group-hover:text-[var(--color-primary)]'} transition-all duration-300"><i class="fa-solid fa-layer-group text-[10px]"></i></div><span class="font-bold text-[11px] sm:text-xs uppercase tracking-widest pr-2">${esc(c.name)}</span></div></div>`;
        } else {
            return `<div onclick="filterCategory('${nameSafe}')" class="flex flex-col items-center gap-3 cursor-pointer shrink-0 w-[80px] sm:w-[95px] group snap-start py-1"><div class="relative w-16 h-16 sm:w-[72px] sm:h-[72px] rounded-[1.25rem] bg-slate-50 dark:bg-slate-800 flex items-center justify-center p-2 transition-all duration-300 ${isSel ? 'bg-[var(--color-primary-light)] border-2 border-[var(--color-primary)] shadow-glow dark:bg-[var(--color-primary-dark)]/20' : 'border border-slate-200 dark:border-slate-700 shadow-sm group-hover:border-[var(--color-primary)] group-hover:shadow-lg group-hover:-translate-y-1.5'} overflow-hidden"><img loading="lazy" src="${esc(getOptImg(c.img, 'w150-rw'))}" alt="${esc(c.name)}" onerror="this.onerror=null;this.src='https://placehold.co/150/10b981/ffffff?text=Cat'" class="w-full h-full object-cover rounded-xl transition-transform duration-500 group-hover:scale-110"></i></div><span class="text-[9px] sm:text-[10px] text-center w-full line-clamp-2 leading-tight px-1 ${isSel ? 'font-bold text-[var(--color-primary)]' : 'font-bold text-slate-600 dark:text-slate-300 group-hover:text-[var(--color-primary)]'} uppercase tracking-widest transition-colors">${esc(c.name)}</span></div>`;
        }
    }).join(''));
    
    const bLHorizontal = [...(appData.brands || [])];
    const bLModal = [{name:'Semua Merek', img:appData.store.allBrandsIcon||'https://placehold.co/150/10b981/ffffff?text=Semua+Merek'}, ...(appData.brands || [])];
    
    setH('dynamic-brands-container', bLHorizontal.map(b => {
        const isSel = aBrand === b.name; const nameSafe = decodeURIComponent(encodeURIComponent(b.name).replace(/'/g,"%27"));
        if(appData.store.brandStyle === 'text') {
            return `<div onclick="filterBrand('${nameSafe}')" class="cursor-pointer shrink-0 snap-start group py-1"><div class="px-5 py-2.5 rounded-[1.25rem] border-2 transition-all duration-300 flex items-center gap-3 ${isSel ? 'bg-emerald-500 border-transparent text-white shadow-sm' : 'bg-white dark:bg-slate-800 border-slate-100 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:border-emerald-300 hover:shadow-md hover:-translate-y-1'}"><div class="w-6 h-6 rounded-full flex items-center justify-center ${isSel ? 'bg-white/20 text-white shadow-inner' : 'bg-slate-50 dark:bg-slate-700 text-slate-400 group-hover:bg-emerald-50 group-hover:text-emerald-500'} transition-all duration-300"><i class="fa-solid fa-copyright text-[10px]"></i></div><span class="font-bold text-[11px] sm:text-xs uppercase tracking-widest pr-2">${esc(b.name)}</span></div></div>`;
        } else {
            return `<div onclick="filterBrand('${nameSafe}')" class="flex flex-col items-center gap-3 cursor-pointer shrink-0 w-[75px] sm:w-[85px] group snap-start py-1"><div class="relative w-16 h-16 sm:w-[68px] sm:h-[68px] rounded-2xl bg-white flex items-center justify-center overflow-hidden p-2 transition-all duration-500 ${isSel ? 'ring-4 ring-emerald-500 ring-offset-2 ring-offset-slate-50 dark:ring-offset-slate-800 shadow-md shadow-emerald-500/20' : 'border border-slate-200 dark:border-slate-700 shadow-sm group-hover:border-emerald-400 group-hover:shadow-md group-hover:-translate-y-1.5'}"><img loading="lazy" src="${esc(getOptImg(b.img, 'w150-rw'))}" alt="${esc(b.name)}" onerror="this.onerror=null;this.src='https://placehold.co/150/10b981/ffffff?text=Brand'" class="w-full h-full object-contain drop-shadow-sm transition-transform duration-500 group-hover:scale-110"></i></div><span class="text-[9px] sm:text-[10px] text-center w-full line-clamp-2 leading-tight px-1 ${isSel ? 'font-bold text-emerald-600 dark:text-emerald-400' : 'font-bold text-slate-600 dark:text-slate-300 group-hover:text-emerald-600'} uppercase tracking-widest transition-colors">${esc(b.name)}</span></div>`;
        }
    }).join(''));
    
    setH('modal-brand-grid', bLModal.map(b => {
        const isSel = aBrand === b.name; const nameSafe = decodeURIComponent(encodeURIComponent(b.name).replace(/'/g,"%27"));
        return `<button onclick="filterBrand('${nameSafe}'); closeBrandModal();" class="flex flex-col items-center gap-3 p-4 rounded-[1.25rem] border ${isSel?'border-emerald-500 bg-emerald-50 dark:bg-emerald-900/20 shadow-sm':'border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:border-emerald-300 hover:shadow-sm'} transition-all active:scale-[0.96]"><div class="w-14 h-14 rounded-2xl flex items-center justify-center bg-white border border-slate-100 dark:border-slate-600 shadow-inner overflow-hidden p-1.5"><img loading="lazy" src="${esc(getOptImg(b.img, 'w150-rw'))}" alt="${esc(b.name)}" class="w-full h-full object-contain" onerror="this.src='https://placehold.co/100?text=Brand'"></div> <span class="text-[10px] sm:text-xs font-bold ${isSel?'text-emerald-700 dark:text-emerald-400':'text-slate-700 dark:text-slate-300'} text-center leading-tight line-clamp-2 uppercase tracking-widest">${esc(b.name)}</span></button>`;
    }).join(''));

    if(el('dyn-qris-img') && appData.payment) el('dyn-qris-img').src = appData.payment.qrisUrl;
    if (typeof window.renderRewardCatalog === 'function') window.renderRewardCatalog();
    cPage = 1; window.rCat();
};




// FITUR BARU (PERFORMA): Loader skrip on-demand generik. Dipakai untuk library berat
// yang cuma dibutuhkan admin (html2canvas, jsPDF, XLSX) atau fitur yang jarang dipakai
// (html5-qrcode) — supaya TIDAK dimuat di setiap kunjungan, cuma saat benar-benar dipakai.
const loadedScripts = {};
window.ensureScriptLoaded = (src, checkFn) => {
    if (checkFn && checkFn()) return Promise.resolve();
    if (loadedScripts[src]) return loadedScripts[src];
    loadedScripts[src] = new Promise((resolve, reject) => {
        const s = document.createElement('script');
        s.src = src;
        s.onload = () => resolve();
        s.onerror = () => { delete loadedScripts[src]; reject(new Error('Gagal memuat: ' + src)); };
        document.head.appendChild(s);
    });
    return loadedScripts[src];
};

// FITUR BARU: Render slot iklan AdSense (banner & multiplex akhir katalog).
// Iklan di dalam modal produk (in-article) ditangani langsung di openProductModal.

window.renderRewardCatalog = () => {
    const rcC = el('reward-catalog-container');
    if (!rcC) return;
    const isShow = appData.store.showRewardCatalog === true || appData.store.showRewardCatalog === 'true';
    const activeRewards = (appData.rewards || []).filter(r => r.isActive !== 'false' && r.isActive !== false);
    
    if (!isShow || activeRewards.length === 0) {
        rcC.classList.add('hidden');
        return;
    }
    
    rcC.classList.remove('hidden');
    let rHTML = `
    <div class="flex items-center justify-between mb-4">
        <h3 class="font-bold text-slate-800 dark:text-white text-sm sm:text-base tracking-tight flex items-center gap-2">
            <div class="w-8 h-8 rounded-xl bg-[var(--color-primary)] flex items-center justify-center text-white shadow-sm">
                <i class="fa-solid fa-gift text-sm"></i>
            </div> KATALOG HADIAH
        </h3>
    </div>
    <div class="flex gap-4 overflow-x-auto hide-scrollbar snap-x pb-6 pt-2">
        ${activeRewards.map((r) => {
            return `
            <div class="w-[140px] sm:w-[160px] shrink-0 snap-start relative group cursor-pointer active:scale-95 transition-all duration-300 bg-white dark:bg-slate-800 rounded-[1.25rem] shadow-sm border border-slate-200 dark:border-slate-700 p-3 hover:shadow-md hover:-translate-y-1 hover:border-[var(--color-primary)] dark:hover:border-[var(--color-primary-dark)]" onclick="openAdminTab('rewards'); window.location.hash='#cart'; window.dispatchEvent(new Event('hashchange'));">
                <div class="w-full aspect-square rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-700/50 flex items-center justify-center overflow-hidden mb-3 relative">
                    <img loading="lazy" src="${esc(r.img)}" alt="${esc(r.name)}" class="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110 p-2" onerror="this.onerror=null;this.src='https://placehold.co/400?text=Hadiah'">
                    <div class="absolute top-2 right-2 bg-[var(--color-primary)] text-white text-[9px] font-bold px-2 py-0.5 rounded-full shadow-sm">${parseFloat(r.pointsCost)||0} Poin</div>
                </div>
                <h4 class="text-[11px] sm:text-xs font-bold text-slate-800 dark:text-white leading-tight line-clamp-2 uppercase tracking-widest text-center">${esc(r.name)}</h4>
            </div>`;
        }).join('')}
    </div>`;
    rcC.innerHTML = rHTML;
};

window.rCat = () => {
    const isFiltered = (aCat !== 'Semua Produk' || aBrand !== 'Semua Merek' || sQ !== '');
    
    toggleCls('dynamic-banners-container', 'hidden', isFiltered);
    toggleCls('reward-catalog-container', 'hidden', isFiltered);
    toggleCls('dynamic-vouchers-container', 'hidden', isFiltered);
    toggleCls('dynamic-categories-container', 'hidden', isFiltered);
    toggleCls('dynamic-brands-container', 'hidden', isFiltered);

    const showCat = appData.store.showCategories !== false && appData.store.showCategories !== 'false';
    const showBrnd = appData.store.showBrands !== false && appData.store.showBrands !== 'false';

    toggleCls('sec-categories', 'hidden', isFiltered || !showCat);
    toggleCls('sec-brands', 'hidden', isFiltered || !showBrnd);

    let backBtnContainer = el('dynamic-active-filter');
    if (!backBtnContainer) {
        let pContainer = el('product-container');
        if (pContainer) { pContainer.insertAdjacentHTML('beforebegin', '<div id="dynamic-active-filter" class="transition-all w-full"></div>'); backBtnContainer = el('dynamic-active-filter'); }
    }
    
    if (backBtnContainer) {
        if (isFiltered) {
            let filterLabel = "Menampilkan"; let filterValue = ""; let filterIcon = "fa-filter"; let iconColor = "text-[var(--color-primary)] bg-[var(--color-primary-light)] dark:bg-[var(--color-primary-dark)]/30";
            if (sQ !== '') { filterLabel = "Hasil Pencarian"; filterValue = `"${sQ}"`; filterIcon = "fa-magnifying-glass"; iconColor = "text-rose-500 bg-rose-50 dark:bg-rose-900/30"; } 
            else if (aCat !== 'Semua Produk') { filterLabel = "Kategori Pilihan"; filterValue = aCat; filterIcon = "fa-layer-group"; iconColor = "text-[var(--color-primary)] bg-[var(--color-primary-light)] dark:bg-[var(--color-primary-dark)]/30"; } 
            else if (aBrand !== 'Semua Merek') { filterLabel = "Merek Pilihan"; filterValue = aBrand; filterIcon = "fa-tag"; iconColor = "text-[var(--color-primary)] bg-[var(--color-primary-light)] dark:bg-[var(--color-primary-dark)]/30"; }

            backBtnContainer.innerHTML = `
            <div class="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-3 flex justify-between items-center mb-5 shadow-sm">
                <div class="flex items-center gap-3 overflow-hidden">
                    <div class="w-10 h-10 rounded-xl ${iconColor} flex items-center justify-center shrink-0"><i class="fa-solid ${filterIcon} text-lg"></i></div>
                    <div class="flex flex-col min-w-0 pr-2">
                        <span class="text-[10px] text-slate-600 dark:text-slate-400 font-bold uppercase tracking-widest">${filterLabel}</span>
                        <span class="text-sm font-bold text-slate-800 dark:text-white truncate leading-tight mt-0.5">${esc(filterValue)}</span>
                    </div>
                </div>
                <button onclick="resetSemuaFilter()" class="shrink-0 bg-slate-50 dark:bg-slate-900 text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-700 w-10 h-10 flex items-center justify-center rounded-xl font-bold shadow-sm hover:bg-rose-50 hover:text-rose-500 hover:border-rose-200 transition-all active:scale-95 group"><i class="fa-solid fa-xmark text-lg group-hover:rotate-90 transition-transform duration-300"></i></button>
            </div>`;
            backBtnContainer.classList.remove('hidden');
        } else { backBtnContainer.innerHTML = ''; backBtnContainer.classList.add('hidden'); }
    }

    let f = appData.products.filter(p => {
        if(aCat !== 'Semua Produk' && p.category !== aCat) return false;
        if(aBrand !== 'Semua Merek' && p.brand !== aBrand) return false;
        if(!sQ) return true;
        let q = sQ.toLowerCase();
        return (p.name||'').toLowerCase().includes(q) || ((p.sku||'').toLowerCase().includes(q)) || (p.variants && p.variants.some(v=>(v.sku||'').toLowerCase().includes(q)));
    }).sort((a,b) => {
        if(cSort === 'cheapest') return (a.price||0) - (b.price||0);
        if(cSort === 'expensive') return (b.price||0) - (a.price||0);
        if(cSort === 'az') return (a.name||'').localeCompare(b.name||'');
        if(cSort === 'za') return (b.name||'').localeCompare(a.name||'');
        if(cSort === 'oldest') return (a.id||0) - (b.id||0);
        return (b.id||0) - (a.id||0);
    });

    const c = el('product-container');
    if (!c) return; // guard: elemen belum ada di DOM (misalnya dipanggil sebelum view-catalog aktif)
    c.className = cView === 'grid' ? 'grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 2xl:grid-cols-6 gap-4 sm:gap-6 lg:gap-8' : 'flex flex-col gap-3 sm:gap-4';
    
    if(!f.length) {
        c.innerHTML = `<div class="col-span-full text-center py-16 sm:py-24 text-slate-500 dark:text-slate-400 font-bold bg-slate-50 dark:bg-slate-800/50 rounded-[1.5rem] border border-slate-200 border-dashed dark:border-slate-700 text-sm sm:text-base flex flex-col items-center justify-center"><div class="w-20 h-20 bg-white dark:bg-slate-800 rounded-full flex items-center justify-center shadow-sm mb-4"><i class="fa-solid fa-box-open text-3xl sm:text-4xl text-slate-300 dark:text-slate-600"></i></div>Maaf, produk tidak ditemukan.<br></b><span class="text-xs font-medium text-slate-500 dark:text-slate-400 mt-2 font-normal">Coba gunakan kata kunci pencarian yang berbeda atau hapus filter.</span></div>`;
        hide('load-more-container'); return;
    }
    
    const v = f.slice(0, cPage * iPP);
    c.innerHTML = v.map(p => {
        let a = p.isActive !== 'false' && p.isActive !== false;
        
        // nH adalah tampilan "HABIS" menutupi gambar (tidak diubah)
        let nH = !a ? `<div class="absolute inset-0 bg-white/60 dark:bg-slate-900/60 backdrop-blur-[2px] z-20 flex items-center justify-center rounded-[1.25rem]"><span class="bg-slate-800 text-white text-[10px] font-bold px-3 py-1.5 rounded-xl shadow-lg uppercase tracking-widest"><i class="fa-solid fa-ban mr-1"></i> HABIS</span></div>` : '';
        
        // Badge stok (hanya jika manajemen stok aktif)
        const useStk = appData.store.useStock === true || appData.store.useStock === 'true';
        let stockBadge = '';
        if (useStk && a) {
            const totalStock = p.variants && p.variants.length
                ? p.variants.filter(v => v.isActive !== false && v.isActive !== 'false').reduce((s,v) => s + (parseFloat(v.stock)||0), 0)
                : parseFloat(p.stock) || 0;
            if (totalStock <= 0) {
                nH = `<div class="absolute inset-0 bg-white/60 dark:bg-slate-900/60 backdrop-blur-[2px] z-20 flex items-center justify-center rounded-[1.25rem]"><span class="bg-slate-800 text-white text-[10px] font-bold px-3 py-1.5 rounded-xl shadow-lg uppercase tracking-widest"><i class="fa-solid fa-ban mr-1"></i> HABIS</span></div>`;
            } else if (totalStock <= 5) {
                // FIX BUG: dulu stok HANYA tampil kalau menipis (≤5) -- di luar itu tidak
                // tampil sama sekali di card, membuat pelanggan tidak tahu ada berapa stok.
                stockBadge = `<span class="absolute top-2 left-2 z-10 bg-rose-500 text-white text-[8px] font-bold px-2 py-1 rounded-xl shadow uppercase tracking-wider"><i class="fa-solid fa-fire mr-0.5"></i> SISA ${totalStock}</span>`;
            } else {
                stockBadge = `<span class="absolute top-2 left-2 z-10 bg-slate-800/80 text-white text-[8px] font-bold px-2 py-1 rounded-xl shadow uppercase tracking-wider backdrop-blur-sm"><i class="fa-solid fa-box mr-0.5"></i> Stok ${totalStock}</span>`;
            }
        }
        
        // FITUR BARU: produk/varian yang benar-benar kosong tidak bisa diklik untuk dibuka.
        // Pengecekan utamanya ada di dalam openProductModal() sendiri (satu sumber kebenaran,
        // berlaku juga untuk deep-link URL) — di sini cuma untuk styling kursor/hover saja.
        const canOpen = !nH;
        const cardCursorCls = canOpen ? 'cursor-pointer hover:shadow-md hover:-translate-y-1.5 hover:border-[var(--color-primary)]/40' : 'cursor-not-allowed';
        const cardCursorClsList = canOpen ? 'cursor-pointer hover:shadow-md hover:-translate-y-1 hover:border-[var(--color-primary)]/40' : 'cursor-not-allowed';

        // LOGIKA HARGA CORET (DISKON DI LUAR GAMBAR)
        let discPill = '';
        let priceNormalHtml = '';
        if (p.priceNormal && p.priceNormal > p.price) {
            let pct = Math.round(((p.priceNormal - p.price) / p.priceNormal) * 100);
            discPill = `<span class="bg-rose-500 text-white px-2 py-0.5 rounded-full text-[8px] font-bold flex items-center gap-1 whitespace-nowrap uppercase tracking-wider shadow-sm"><i class="fa-solid fa-tags"></i> -${pct}%</span>`;
            priceNormalHtml = `<p class="text-[10px] text-slate-600 dark:text-slate-400 line-through mb-0.5 font-bold">${fCur(p.priceNormal)}</p>`;
        }

        // LOGIKA PO PILL (PINDAH KE BAWAH, SEJAJAR DENGAN LABEL OFFICIAL)
        let poPill = p.poTime ? `<span class="bg-amber-500 text-white px-2 py-0.5 rounded-full text-[8px] font-bold flex items-center gap-1 whitespace-nowrap uppercase tracking-wider shadow-sm"><i class="fa-solid fa-clock"></i> PO ${esc(p.poTime)}</span>` : '';

        // FITUR BARU: badge "Dapat Poin" di katalog untuk produk/varian yang punya poin member
        let poinBadge = '';
        if (p.variants && p.variants.length) {
            const poinVals = p.variants.map(v => parseFloat(v.poin) || 0).filter(x => x > 0);
            if (poinVals.length) {
                const uniq = [...new Set(poinVals)];
                poinBadge = uniq.length === 1
                    ? `<span class="bg-violet-100 text-violet-700 dark:bg-violet-900/40 dark:text-violet-400 px-2 py-0.5 rounded-full text-[8px] font-bold flex items-center gap-1 whitespace-nowrap uppercase tracking-wider"><i class="fa-solid fa-star"></i> +${uniq[0]} Poin</span>`
                    : `<span class="bg-violet-100 text-violet-700 dark:bg-violet-900/40 dark:text-violet-400 px-2 py-0.5 rounded-full text-[8px] font-bold flex items-center gap-1 whitespace-nowrap uppercase tracking-wider"><i class="fa-solid fa-star"></i> Dapat Poin</span>`;
            }
        } else if (parseFloat(p.poin) > 0) {
            poinBadge = `<span class="bg-violet-100 text-violet-700 dark:bg-violet-900/40 dark:text-violet-400 px-2 py-0.5 rounded-full text-[8px] font-bold flex items-center gap-1 whitespace-nowrap uppercase tracking-wider"><i class="fa-solid fa-star"></i> +${parseFloat(p.poin)} Poin</span>`;
        }

        // FITUR BARU: badge total terjual di card katalog
        const totalSoldCard = p.variants && p.variants.length
            ? p.variants.reduce((s,vv) => s + (parseFloat(vv.totalSold)||0), 0)
            : (parseFloat(p.totalSold) || 0);
        const soldBadge = totalSoldCard > 0
            ? `<span class="bg-slate-200 text-slate-700 dark:bg-slate-700 dark:text-slate-300 px-2 py-0.5 rounded-full text-[8px] font-bold flex items-center gap-1 whitespace-nowrap uppercase tracking-wider"><i class="fa-solid fa-fire-flame-curved text-orange-400"></i> ${totalSoldCard} Terjual</span>`
            : '';

        // Kumpulkan semua badge menjadi satu baris sejajar
        let bH = `<div class="mb-2.5 flex flex-wrap gap-1.5 items-center overflow-hidden shrink-0">
            ${discPill}
            ${poPill}
            ${poinBadge}
            ${soldBadge}
            ${p.tag ? `<span class="bg-[var(--color-primary-light)] text-[var(--color-primary-dark)] dark:bg-[var(--color-primary-dark)]/50 dark:text-[var(--color-primary)] px-2 py-0.5 rounded-full text-[8px] font-bold flex items-center gap-1 whitespace-nowrap uppercase tracking-wider"><i class="fa-solid fa-hashtag"></i> ${esc(p.tag)}</span>` : ''}
            <span class="accent-badge px-2 py-0.5 rounded-full text-[8px] font-bold flex items-center gap-1 whitespace-nowrap uppercase tracking-wider"><i class="fa-solid fa-circle-check"></i> Official</span>
            ${p.brand ? `<span class="bg-slate-200 text-slate-700 dark:bg-slate-700 dark:text-slate-300 px-2 py-0.5 rounded-full text-[8px] font-bold flex items-center gap-1 whitespace-nowrap uppercase tracking-wider"><i class="fa-solid fa-tag"></i> ${esc(p.brand)}</span>` : ''}
            ${(p.wholesale?.length && !p.variants?.length) ? `<span class="amber-badge px-2 py-0.5 rounded-full text-[8px] font-bold flex items-center gap-1 whitespace-nowrap uppercase tracking-wider"><i class="fa-solid fa-layer-group"></i> Grosir</span>` : ''}
        </div>`;
        
        let unt = `<span class="text-[9px] text-slate-600 dark:text-slate-400 font-bold ml-0.5 mb-0.5 uppercase tracking-wide">/${esc(p.unit||'PCS')}</span>`;
        
        if (cView === 'grid') {
            return `
            <a href="?p=${p.id}" class="w-full bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700/50 rounded-[1.5rem] shadow-soft ${cardCursorCls} transition-all duration-300 flex flex-col group relative overflow-hidden text-left" onclick="event.preventDefault(); openProductModal(${p.id})">
                ${nH}
                <div class="relative aspect-square w-full bg-white flex items-center justify-center shrink-0 border-b border-slate-100 dark:border-slate-700/50">
                      ${stockBadge}
                      <img loading="lazy" src="${esc(getOptImg(p.img, 'w300-rw'))}" onerror="this.onerror=null;this.src='https://placehold.co/400?text=No+Image'" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 ${!a?'grayscale opacity-50':''}">
                </div>
                <div class="flex-1 flex flex-col p-3 sm:p-4 min-w-0 bg-white dark:bg-slate-800 relative z-10">
                    ${bH}
                    <h4 class="text-[11px] sm:text-xs font-bold text-slate-700 dark:text-slate-200 line-clamp-2 leading-snug mb-2 group-hover:text-[var(--color-primary)] transition-colors uppercase">${esc(p.name)}</h4>
                    <div class="flex items-end justify-between mt-auto pt-1">
                        <div>
                            ${p.variants && p.variants.length > 0 ? '' : priceNormalHtml}
                            <p class="text-[var(--color-primary)] font-bold text-sm sm:text-[15px] leading-none tracking-tight">
                                ${p.variants && p.variants.length > 0 ? '<span class="text-[10px] sm:text-xs text-slate-600 dark:text-slate-400 font-bold uppercase tracking-wider">PILIH VARIAN</span>' : fCur(p.price)}
                            </p>
                            ${p.variants && p.variants.length > 0 ? '' : unt}
                        </div>
                        <div class="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[rgba(var(--color-primary-rgb),0.08)] text-[var(--color-primary)] border border-[rgba(var(--color-primary-rgb),0.15)] flex items-center justify-center transition-all group-hover:bg-[var(--color-primary)] group-hover:text-white group-hover:scale-110 active:scale-90 shadow-sm">
                            <i class="fa-solid fa-plus text-xs sm:text-sm"></i>
                        </div>
                    </div>
                </div>
            </a>`;
        } else {
            return `
            <a href="?p=${p.id}" class="w-full bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700/50 rounded-[1.5rem] shadow-soft ${cardCursorClsList} transition-all duration-300 flex items-stretch p-2.5 sm:p-3 gap-3 sm:gap-4 group relative overflow-hidden text-left" onclick="event.preventDefault(); openProductModal(${p.id})">
                ${nH}
                <div class="relative w-24 h-24 sm:w-28 sm:h-28 shrink-0 bg-white dark:bg-slate-900 rounded-xl flex items-center justify-center p-2 border border-slate-100 dark:border-slate-700/50 overflow-hidden">
                    ${stockBadge}
                    <img loading="lazy" src="${esc(getOptImg(p.img, 'w300-rw'))}" onerror="this.onerror=null;this.src='https://placehold.co/400?text=No+Image'" class="max-w-full max-h-full object-contain transition-transform duration-500 group-hover:scale-105 ${!a?'grayscale opacity-50':''}">
                </div>
                <div class="flex-1 min-w-0 py-1 flex flex-col justify-center h-full relative z-10 pr-2">
                    ${bH}
                    <h4 class="text-[11px] sm:text-xs font-bold text-slate-700 dark:text-slate-200 line-clamp-2 leading-snug mb-1.5 group-hover:text-[var(--color-primary)] transition-colors uppercase">${esc(p.name)}</h4>
                    <div class="flex items-end justify-between mt-auto pt-1">
                        <div>
                            ${p.variants && p.variants.length > 0 ? '' : priceNormalHtml}
                            <p class="text-[var(--color-primary)] font-bold text-sm sm:text-[15px] leading-none tracking-tight">
                                ${p.variants && p.variants.length > 0 ? '<span class="text-[10px] sm:text-xs text-slate-600 dark:text-slate-400 font-bold uppercase tracking-wider">PILIH VARIAN</span>' : fCur(p.price)}
                            </p>
                            ${p.variants && p.variants.length > 0 ? '' : unt}
                        </div>
                        <div class="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[rgba(var(--color-primary-rgb),0.08)] text-[var(--color-primary)] border border-[rgba(var(--color-primary-rgb),0.15)] flex items-center justify-center transition-all group-hover:bg-[var(--color-primary)] group-hover:text-white group-hover:scale-110 active:scale-90 shadow-sm mr-1">
                            <i class="fa-solid fa-plus text-xs sm:text-sm"></i>
                        </div>
                    </div>
                </div>
            </a>`;
        }
    }).join('');
    
    v.length < f.length ? show('load-more-container') : hide('load-more-container');
};

window.filterCategory = c => {
    aCat = (aCat === c && c !== 'Semua Produk') ? 'Semua Produk' : c; cPage = 1; window.rDyn();
    const sc = document.querySelector('#view-catalog .scroll-content'); if (sc) setTimeout(() => sc.scrollTo({top:0, behavior:'smooth'}), 10);
};

window.filterBrand = b => {
    aBrand = (aBrand === b && b !== 'Semua Merek') ? 'Semua Merek' : b; cPage = 1; window.rDyn();
    const sc = document.querySelector('#view-catalog .scroll-content'); if (sc) setTimeout(() => sc.scrollTo({top:0, behavior:'smooth'}), 10);
};

window.resetSemuaFilter = () => { aCat = 'Semua Produk'; aBrand = 'Semua Merek'; sQ = ''; cPage = 1; window.rDyn(); };

let searchTmr; 
window.handleSearch = v => { clearTimeout(searchTmr); searchTmr = setTimeout(()=>{ sQ=v; cPage=1; window.rCat(); }, 300); };
window.handleSort = v => { cSort=v; cPage=1; window.rCat(); };

window.toggleView = v => {
    cView = v; cPage = 1;
    el('btn-view-grid').className = v === 'grid' ? "w-8 h-8 rounded-xl flex items-center justify-center text-[var(--color-primary)] bg-white dark:bg-slate-700 shadow-sm transition-all" : "w-8 h-8 rounded-xl flex items-center justify-center text-slate-400 hover:text-slate-700 dark:hover:text-slate-300 transition-all";
    el('btn-view-list').className = v === 'list' ? "w-8 h-8 rounded-xl flex items-center justify-center text-[var(--color-primary)] bg-white dark:bg-slate-700 shadow-sm transition-all" : "w-8 h-8 rounded-xl flex items-center justify-center text-slate-400 hover:text-slate-700 dark:hover:text-slate-300 transition-all";
    window.rCat();
};

window.loadMoreProducts = () => { cPage++; window.rCat(); };

// --- 9. PRODUCT MODAL & CART INTERACTIONS ---
window.openProductModal = i => {
    window.cSlideIdx = 0;
    const p = appData.products.find(x => x.id === i);
    if (!p) return;
    
    // FITUR BARU: Blokir buka modal kalau produk nonaktif, ATAU (manajemen stok aktif
    // DAN tidak ada satupun varian/stok produk yang tersedia). Ini sumber kebenaran
    // tunggal — berlaku sama baik diklik dari kartu katalog maupun dari deep-link URL.
    const pActive = p.isActive !== 'false' && p.isActive !== false;
    const useStk = appData.store.useStock === true || appData.store.useStock === 'true';
    let totalAvail = Infinity;
    if (useStk) {
        totalAvail = (p.variants && p.variants.length)
            ? p.variants.filter(v => v.isActive !== false && v.isActive !== 'false').reduce((s,v) => s + (parseFloat(v.stock)||0), 0)
            : (parseFloat(p.stock) || 0);
    }
    if (!pActive || (useStk && totalAvail <= 0)) {
        showToast('Maaf, stok produk ini sedang kosong');
        return;
    }
    
    cProd = p; 
    cQty = 1;
    
    // FITUR BARU: Jika produk ini adalah Cat (punya varian warna), 
    // set varian ke 'null' agar pembeli WAJIB memilih warna dulu.
    if (p.variants && p.variants.length > 0) {
        cVar = null;
    } else {
        cVar = 0;
    }
    
    setV('modal-qty-input', 1);
    rProdMod();

    // FITUR SEO: Update Title dan Meta description & OpenGraph
    const pDesc = p.desc ? p.desc.replace(/<[^>]*>/g, '').substring(0, 160) : `Beli ${p.name} berkualitas dengan harga terbaik hanya di Toko Putri.`;
    const prodUrl = window.location.origin + window.location.pathname + "?p=" + p.id;
    window.updateSEO(`${p.name} - Toko Putri`, pDesc, getOptImg(p.img, 'w500-rw'), prodUrl);

    // Inject Product JSON-LD
    const offerPrice = (p.variants && p.variants.length > 0) 
        ? Math.min(...p.variants.map(v => parseFloat(v.price) || p.price))
        : p.price;
    const isAvail = totalAvail > 0 ? "https://schema.org/InStock" : "https://schema.org/OutOfStock";
    
    const prodJSON = {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": p.name,
        "image": [
            getOptImg(p.img, 'w500-rw')
        ],
        "description": pDesc,
        "sku": `PROD-${p.id}`,
        "category": p.category || '',
        "brand": {
            "@type": "Brand",
            "name": p.brand || "Toko Putri"
        },
        "offers": {
            "@type": "Offer",
            "url": prodUrl,
            "priceCurrency": "IDR",
            "price": offerPrice,
            "itemCondition": "https://schema.org/NewCondition",
            "availability": isAvail,
            "priceValidUntil": "2030-12-31"
        }
    };
    
    if (p.variants && p.variants.length > 0) {
        prodJSON.offers = p.variants.map(v => ({
            "@type": "Offer",
            "name": v.name,
            "priceCurrency": "IDR",
            "price": parseFloat(v.price) || p.price,
            "itemCondition": "https://schema.org/NewCondition",
            "availability": (parseFloat(v.stock) || 0) > 0 ? "https://schema.org/InStock" : "https://schema.org/OutOfStock"
        }));
    }
    
    window.injectJSONLD('seo-product', prodJSON);
    
    // FITUR BARU: Iklan in-article di dalam modal produk (sekali per buka modal, sesuai pengaturan toko)
    // FIX: dibungkus try/catch agar masalah pada skrip iklan tidak pernah menggagalkan/mengunci modal produk
    try {
        const adBox = el('product-modal-ad-container');
        if (adBox) {
            const adsOn = appData.store.adsEnabled === true || appData.store.adsEnabled === 'true';
            if (adsOn) {
                
                adBox.classList.remove('hidden');
                adBox.innerHTML = `<ins class="adsbygoogle" style="display:block; text-align:center;" data-ad-layout="in-article" data-ad-format="fluid" data-ad-client="ca-pub-2636322336243340" data-ad-slot="8219064079"></ins>`;
                (window.adsbygoogle = window.adsbygoogle || []).push({});
            } else {
                adBox.classList.add('hidden');
                adBox.innerHTML = '';
            }
        }
    } catch(e) { console.error('Gagal render iklan in-article:', e); }
    
    // FITUR BARU: muat ulasan pelanggan untuk produk ini (async, tidak blocking modal terbuka)
    loadProductReviews(p.id);
    
    const m = el('product-modal'), c = el('product-modal-content');
    if (m && c) {
        if (m.classList.contains('hidden')) {
            // FITUR SEO: Update URL & Dynamic Meta Tags
            const urlParams = new URLSearchParams(window.location.search);
            if (urlParams.get('p') !== String(p.id)) {
                urlParams.set('p', p.id);
                window.history.pushState({modal: 'product'}, p.name, window.location.pathname + '?' + urlParams.toString());
                oMods.push('product');
            }
        }
        show('product-modal');
        c.scrollTo(0,0); // reset scroll setiap ganti produk (sekarang seluruh kotak modal yang scroll, jadi cukup reset di sini)
        setTimeout(() => { m.classList.remove('opacity-0'); c.classList.remove('translate-y-full','sm:translate-y-10'); }, 10);
    }
};

window.closeProductModal = (fH=false) => {
    const m = el('product-modal'), c = el('product-modal-content');
    if (m && c) {
        requestCloseModal('product', fH, () => {
            m.classList.add('opacity-0'); c.classList.add('translate-y-full','sm:translate-y-10');
            setTimeout(() => hide('product-modal'), 300);
            const vc = el('product-modal-video-container');
            if (vc) {
                vc.innerHTML = '';
                vc.classList.add('hidden');
            }

            // FITUR SEO: Restore URL, Meta Tags, & JSON-LD
            const urlParams = new URLSearchParams(window.location.search);
            urlParams.delete('p');
            let newUrl = window.location.pathname;
            if (urlParams.toString()) newUrl += '?' + urlParams.toString();
            window.history.replaceState({}, "Toko Putri", newUrl);
            
            // Revert meta tags ke beranda
            window.updateSEO(
                "Toko Putri", 
                "Toko Putri - Solusi grosir dan e-commerce terpercaya untuk alat teknik, perkakas, dan perlengkapan pertukangan berkualitas dengan harga terbaik.",
                getOptImg(appData.store.logo, 'w300-rw'),
                window.location.origin + newUrl
            );
            
            // Hapus JSON-LD product
            const pScript = document.getElementById('seo-product');
            if (pScript) pScript.remove();
        });
    }
};

window.previewVariant = (idx) => {
    if (!cProd || !cProd.variants || !cProd.variants[idx]) return;
    const v = cProd.variants[idx];
    const m = el('variant-preview-modal');
    const c = el('variant-preview-content');
    if (!m || !c) return;

    let html = '';
    const nameStr = `${esc(cProd.name)} - ${esc(v.name)}`;
    const priceStr = fCur(v.price || cProd.price);

    if (v.img) {
        html = `
            <div class="relative w-full aspect-square bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800 flex items-center justify-center">
                <img class="w-full h-full object-contain" src="${getOptImg(v.img, 'w800-rw')}" alt="${esc(v.name)}">
                ${v.colorCode ? `<div class="absolute top-4 left-4 w-12 h-12 rounded-full border-4 border-white shadow-lg" style="background-color: ${esc(v.colorCode)};"></div>` : ''}
            </div>
            <div class="mt-5 text-center px-4 w-full">
                <h4 class="text-white font-extrabold text-lg md:text-xl tracking-wide uppercase break-words leading-tight">${esc(v.name)}</h4>
                <p class="text-emerald-400 font-extrabold text-lg mt-1 tracking-tight">${priceStr}</p>
                <p class="text-slate-400 font-semibold text-[11px] md:text-xs mt-1 uppercase tracking-widest break-words">${esc(cProd.name)}</p>
            </div>
        `;
    } else if (v.colorCode) {
        html = `
            <div class="w-full aspect-square rounded-3xl shadow-2xl border-4 border-white/20 flex flex-col items-center justify-center p-6 relative overflow-hidden" style="background-color: ${esc(v.colorCode)};">
                <div class="absolute bottom-0 inset-x-0 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md p-6 flex flex-col items-center justify-center text-center border-t border-slate-200/50 dark:border-slate-800/50">
                    <span class="text-slate-905 dark:text-white font-extrabold text-lg uppercase tracking-wider break-words leading-tight">${esc(v.name)}</span>
                    <span class="text-slate-500 dark:text-slate-400 font-mono text-xs font-bold mt-1 uppercase">${esc(v.colorCode)}</span>
                    <span class="text-emerald-600 dark:text-emerald-400 font-extrabold text-lg mt-1">${priceStr}</span>
                </div>
            </div>
            <div class="mt-5 text-center px-4 w-full">
                <p class="text-slate-400 font-semibold text-[11px] md:text-xs mt-1 uppercase tracking-widest break-words">${esc(cProd.name)}</p>
            </div>
        `;
    } else {
        html = `
            <div class="relative w-full aspect-square bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800 flex items-center justify-center">
                <img class="w-full h-full object-contain" src="${getOptImg(cProd.img || '', 'w800-rw')}" alt="${esc(cProd.name)}">
            </div>
            <div class="mt-5 text-center px-4 w-full">
                <h4 class="text-white font-extrabold text-lg md:text-xl tracking-wide uppercase break-words leading-tight">${esc(v.name)}</h4>
                <p class="text-emerald-400 font-extrabold text-lg mt-1 tracking-tight">${priceStr}</p>
                <p class="text-slate-400 font-semibold text-[11px] md:text-xs mt-1 uppercase tracking-widest break-words">${esc(cProd.name)}</p>
            </div>
        `;
    }

    c.innerHTML = html;
    if (m.classList.contains('hidden')) pushModalHistory('variantPreview');
    show('variant-preview-modal');
    setTimeout(() => {
        m.classList.remove('opacity-0');
        c.classList.remove('scale-95');
    }, 10);
};

window.previewProductImage = () => {
    if (!cProd) return;
    const m = el('variant-preview-modal');
    const c = el('variant-preview-content');
    if (!m || !c) return;

    const v = (cProd.variants && cVar !== null) ? cProd.variants[cVar] : null;
    const imgSrc = v?.img || cProd.img || '';
    const titleStr = v ? `${esc(cProd.name)} - ${esc(v.name)}` : esc(cProd.name);
    const priceStr = fCur(v?.price ?? cProd.price);

    let html = `
        <div class="relative w-full aspect-square bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800 flex items-center justify-center">
            <img class="w-full h-full object-contain" src="${getOptImg(imgSrc, 'w800-rw')}" alt="${titleStr}">
            ${v?.colorCode ? `<div class="absolute top-4 left-4 w-12 h-12 rounded-full border-4 border-white shadow-lg" style="background-color: ${esc(v.colorCode)};"></div>` : ''}
        </div>
        <div class="mt-5 text-center px-4 w-full">
            <h4 class="text-white font-extrabold text-lg md:text-xl tracking-wide uppercase break-words leading-tight">${esc(cProd.name)}</h4>
            ${v ? `<p class="text-slate-300 font-bold text-sm mt-1 uppercase tracking-wide">Varian: ${esc(v.name)}</p>` : ''}
            <p class="text-emerald-400 font-extrabold text-lg mt-1 tracking-tight">${priceStr}</p>
        </div>
    `;

    c.innerHTML = html;
    if (m.classList.contains('hidden')) pushModalHistory('variantPreview');
    show('variant-preview-modal');
    setTimeout(() => {
        m.classList.remove('opacity-0');
        c.classList.remove('scale-95');
    }, 10);
};

window.closeVariantPreviewModal = (fH=false) => {
    const m = el('variant-preview-modal');
    const c = el('variant-preview-content');
    if (m && c) {
        requestCloseModal('variantPreview', fH, () => {
            m.classList.add('opacity-0');
            c.classList.add('scale-95');
            setTimeout(() => {
                hide('variant-preview-modal');
                c.innerHTML = '';
            }, 300);
        });
    }
};

window.changeSlide = (dir) => {
    let p = cProd;
    let yId = getYouTubeId(p?.video);
    if (!yId) return;
    window.cSlideIdx += dir;
    if (window.cSlideIdx > 1) window.cSlideIdx = 0;
    if (window.cSlideIdx < 0) window.cSlideIdx = 1;
    rProdMod();
};

const rProdMod = () => {
    if (!cProd) return;
    let p = cProd;
    let a = p.isActive !== 'false' && p.isActive !== false;
    let hV = p.variants?.length > 0;
    
    // Check if interior/exterior wall paint product to show return warning
    const nameLower = (p.name || '').toLowerCase();
    const catLower = (p.category || '').toLowerCase();
    const tagLower = (p.tag || '').toLowerCase();

    // Kata kunci yang mengindikasikan produk cat (warna cat tembok, dll)
    const PAINT_COLOR_KEYWORDS = [
        'cat', 'paint', 'warna', 'colour', 'color',
        // Nama warna umum yang sering jadi nama varian cat tembok
        'putih', 'hitam', 'merah', 'biru', 'hijau', 'kuning', 'orange', 'abu',
        'coklat', 'cream', 'krem', 'beige', 'ivory', 'mocca', 'rose', 'tosca',
        'lavender', 'salmon', 'broken white', 'off white', 'natural', 'magnolia',
        'primer', 'dasar', 'eksterior', 'exterior', 'interior', 'tembok',
        'duco', 'gloss', 'matte', 'satin', 'semi gloss'
    ];

    // Cek nama/kategori/tag produk
    const isPaintByProduct = (
        nameLower.includes('cat') && (
            nameLower.includes('tembok') ||
            nameLower.includes('interior') ||
            nameLower.includes('eksterior') ||
            nameLower.includes('exterior')
        )
    ) || (
        catLower.includes('cat') || catLower.includes('paint')
    ) || (
        tagLower.includes('cat') || tagLower.includes('paint')
    );

    // Cek nama varian — jika ada varian yang mengandung kata kunci cat/warna
    const isPaintByVariant = hV && p.variants.some(v => {
        const vName = (v.name || '').toLowerCase();
        return PAINT_COLOR_KEYWORDS.some(kw => vName.includes(kw));
    });

    const isPaint = isPaintByProduct || isPaintByVariant;


    const warnEl = el('product-modal-paint-warning');
    if (warnEl) {
        if (isPaint) {
            warnEl.classList.remove('hidden');
        } else {
            warnEl.classList.add('hidden');
        }
    }
    
    // Ambil data varian HANYA jika pembeli sudah menekan salah satu warna
    let v = (hV && cVar !== null) ? p.variants[cVar] : null;
    let unt = v?.unit || p.unit || 'Pcs';
    
    const i = el('product-modal-img');
    const vc = el('product-modal-video-container');
    const yId = getYouTubeId(p.video);
    const showVarImg = v && v.img;

    const btnPrev = el('slide-prev');
    const btnNext = el('slide-next');
    const dotsContainer = el('slide-dots');

    if (yId && !showVarImg) {
        if (btnPrev) btnPrev.classList.remove('hidden');
        if (btnNext) btnNext.classList.remove('hidden');
        if (dotsContainer) {
            dotsContainer.classList.remove('hidden');
            dotsContainer.innerHTML = `
                <div class="w-2 h-2 rounded-full ${window.cSlideIdx === 0 ? 'bg-emerald-500 scale-125' : 'bg-slate-300 dark:bg-slate-600'} transition-all cursor-pointer shadow-sm" onclick="window.cSlideIdx=0; rProdMod()"></div>
                <div class="w-2 h-2 rounded-full ${window.cSlideIdx === 1 ? 'bg-emerald-500 scale-125' : 'bg-slate-300 dark:bg-slate-600'} transition-all cursor-pointer shadow-sm" onclick="window.cSlideIdx=1; rProdMod()"></div>
            `;
        }

        if (window.cSlideIdx === 1) {
            if (i) i.style.display = 'none';
            if (vc) {
                vc.classList.remove('hidden');
                if (!vc.innerHTML) {
                    vc.innerHTML = `<iframe class="w-full h-full pointer-events-none" src="https://www.youtube.com/embed/${yId}?autoplay=1&mute=1&loop=1&playlist=${yId}&enablejsapi=1&modestbranding=1&controls=0&rel=0&showinfo=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; compute-pressure" allowfullscreen></iframe>`;
                }
            }
            const zoomInd = el('zoom-indicator');
            if (zoomInd) zoomInd.classList.add('hidden');
        } else {
            if (vc) vc.classList.add('hidden');
            if (i) {
                i.style.display = 'block';
                i.src = getOptImg(v?.img || p.img || '', 'w600-rw');
                i.style.opacity = 1;
            }
            const zoomInd = el('zoom-indicator');
            if (zoomInd) zoomInd.classList.remove('hidden');
        }
    } else {
        if (btnPrev) btnPrev.classList.add('hidden');
        if (btnNext) btnNext.classList.add('hidden');
        if (dotsContainer) dotsContainer.classList.add('hidden');

        if (vc) {
            vc.innerHTML = '';
            vc.classList.add('hidden');
        }
        if (i) {
            i.style.display = 'block';
            i.style.opacity = 0;
            setTimeout(() => { i.src = getOptImg(v?.img || p.img || '', 'w600-rw'); i.style.opacity = 1; }, 150);
        }
        const zoomInd = el('zoom-indicator');
        if (zoomInd) zoomInd.classList.remove('hidden');
    }
    
    // Setel Harga dan info lain

    
    setIn('product-modal-title', p.name);
    
// KONTROL HARGA: Tampilkan teks "Pilih Varian" jika warna belum dipilih
    if (hV && cVar === null) {
        setH('product-modal-price', '<span class="text-base sm:text-lg text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider">Pilih Warna/Varian</span>');
    } else {
        // Ambil harga yang sedang aktif (Varian atau Base)
        let actPrice = v?.price ?? p.price;
        let actNormal = v?.priceNormal ?? p.priceNormal;
        
        let pHtml = '';
        if (actNormal && actNormal > actPrice) {
            let pct = Math.round(((actNormal - actPrice) / actNormal) * 100);
            pHtml = `<div class="flex flex-col"><span class="text-[11px] text-rose-500 font-bold line-through mb-0.5 tracking-wide">${fCur(actNormal)} <span class="bg-rose-100 text-rose-600 px-1.5 py-0.5 rounded ml-1 text-[9px] no-underline tracking-widest border border-rose-200">-${pct}%</span></span><span>${fCur(actPrice)}</span></div>`;
        } else {
            pHtml = fCur(actPrice);
        }
        setH('product-modal-price', pHtml);
    }
    const descEl = el('product-modal-desc');
    if(descEl) {
        descEl.className = 'text-[13px] text-slate-600 dark:text-slate-400 font-medium leading-relaxed [&_ol]:list-decimal [&_ol]:pl-5 [&_ul]:list-disc [&_ul]:pl-5 [&_b]:font-bold [&_strong]:font-bold [&_img]:max-w-full [&_img]:rounded-xl [&_img]:my-2 [&_div]:my-1';
        // SECURITY PATCH: Sanitasi konten HTML dari database sebelum dirender (Anti XSS)
        const rawDesc = p.desc || '-';
        descEl.innerHTML = (typeof DOMPurify !== 'undefined')
            ? DOMPurify.sanitize(rawDesc, {
                ALLOWED_TAGS: ['p','br','b','strong','i','em','u','s','span','div',
                    'h1','h2','h3','h4','ul','ol','li','a','img','table',
                    'thead','tbody','tr','th','td','blockquote','code','pre','hr'],
                ALLOWED_ATTR: ['href','src','alt','title','class','style','target',
                    'rel','width','height','loading'],
                FORBID_TAGS: ['script','iframe','object','embed','form','input'],
                FORBID_ATTR: ['onclick','oninput','onload','onmouseover','onsubmit','onerror']
              })
            : rawDesc;
    }
    setIn('modal-unit-label', unt);
    
    // Header Badge Premium
    let bH = ``;
    if (p.sku) bH += `<span class="bg-slate-200 text-slate-600 dark:bg-slate-800 dark:text-slate-400 px-2.5 py-1 rounded-full text-[9px] font-bold flex items-center gap-1.5 whitespace-nowrap tracking-wider"><i class="fa-solid fa-barcode"></i> ${esc(p.sku)}</span>`;
    if (p.tag) bH += `<span class="accent-badge px-2.5 py-1 rounded-full text-[9px] font-bold flex items-center gap-1.5 whitespace-nowrap uppercase tracking-wider"><i class="fa-solid fa-hashtag"></i> ${esc(p.tag)}</span>`;
    
    bH += `<span class="accent-badge px-2.5 py-1 rounded-full text-[9px] font-bold flex items-center gap-1.5 whitespace-nowrap uppercase tracking-wider"><i class="fa-solid fa-circle-check"></i> Official</span>`;
    
    if (p.brand) bH += `<span class="bg-slate-200 text-slate-700 dark:bg-slate-800 dark:text-slate-300 px-2.5 py-1 rounded-full text-[9px] font-bold flex items-center gap-1.5 whitespace-nowrap uppercase tracking-wider"><i class="fa-solid fa-tag"></i> ${esc(p.brand)}</span>`;
    
    if (p.poTime) bH += `<span class="bg-amber-500 text-white px-2.5 py-1 rounded-full text-[9px] font-bold flex items-center gap-1.5 whitespace-nowrap uppercase tracking-wider shadow-sm"><i class="fa-solid fa-clock"></i> PO ${esc(p.poTime)}</span>`;

    // FITUR BARU: badge poin member, ikut varian yang sedang dipilih (kalau ada)
    const activePoin = parseFloat(v ? v.poin : p.poin) || 0;
    if (activePoin > 0 && (!hV || cVar !== null)) {
        bH += `<span class="bg-violet-500 text-white px-2.5 py-1 rounded-full text-[9px] font-bold flex items-center gap-1.5 whitespace-nowrap uppercase tracking-wider shadow-sm"><i class="fa-solid fa-star"></i> +${activePoin} Poin</span>`;
    }

    // FITUR BARU: total terjual -- jumlah keseluruhan varian kalau tidak ada varian dipilih,
    // atau khusus varian itu saja kalau sedang dipilih.
    const totalSoldDisplay = hV && cVar !== null
        ? (parseFloat(v ? v.totalSold : 0) || 0)
        : (hV ? p.variants.reduce((s,vv) => s + (parseFloat(vv.totalSold)||0), 0) : (parseFloat(p.totalSold) || 0));
    if (totalSoldDisplay > 0) {
        bH += `<span class="bg-slate-200 text-slate-600 dark:bg-slate-800 dark:text-slate-400 px-2.5 py-1 rounded-full text-[9px] font-bold flex items-center gap-1.5 whitespace-nowrap uppercase tracking-wider"><i class="fa-solid fa-fire-flame-curved text-orange-400"></i> ${totalSoldDisplay} Terjual</span>`;
    }

    setH('product-modal-badges', bH);
    
    // Wholesale Section
    // FIX (konsisten dengan getEffP): tabel harga grosir disembunyikan jika produk
    // ini juga punya varian, karena grosir produk dasar tidak lagi berlaku untuk
    // pembelian varian (lihat fix di getEffP) — mencegah info yang menyesatkan.
    setH('product-modal-wholesale-container', (p.wholesale?.length && !p.variants?.length) ? `
        <div class="mb-6 bg-amber-50 dark:bg-amber-900/10 rounded-2xl p-4 border border-amber-200 dark:border-amber-800/50 shadow-inner">
            <p class="text-[10px] font-bold text-amber-600 dark:text-amber-500 mb-3 uppercase tracking-widest flex items-center gap-1.5"><i class="fa-solid fa-layer-group"></i> Harga Grosir</p>
            <div class="space-y-2">${p.wholesale.slice().sort((a,b)=>a.minQty-b.minQty).map(w=>`
                <div class="flex justify-between items-center text-sm font-bold bg-white dark:bg-slate-800 p-2.5 rounded-xl border border-amber-100 dark:border-slate-700 shadow-sm">
                    <span class="text-slate-600 dark:text-slate-300">≥ ${parseFloat(w.minQty)} <span class="text-[10px] uppercase tracking-wider">${esc(unt)}</span></span>
                    <span class="text-emerald-600 dark:text-emerald-400 font-bold">${fCur(w.price)}</span>
                </div>`).join('')}
            </div>
        </div>` : '');
    
    // ADMIN PANEL: HPP & Stok (hanya tampil saat admin login DAN sedang di dalam panel admin)
    // FIX PRIVASI: sebelumnya info HPP/Margin muncul ke siapa saja yang login sebagai admin,
    // termasuk saat admin membuka produk dari halaman toko publik (view-catalog, view-wishlist, dsb).
    // Sekarang info ini HANYA ditampilkan jika modal dibuka dari dalam panel admin (curViewName === 'view-admin').
    const adminInfoEl = el('product-modal-admin-info');
    if (adminInfoEl) {
        if (window.isAdm && curViewName === 'view-admin') {
            const useStk = appData.store.useStock === true || appData.store.useStock === 'true';
            const hV2 = p.variants?.length > 0;
            const currHpp = v ? (v.hpp||0) : (p.hpp||0);
            const currStock = v ? (v.stock !== undefined ? v.stock : '—') : (p.stock !== undefined ? p.stock : '—');
            const currPrice = v ? (v.price||p.price||0) : (p.price||0);
            const margin = currHpp > 0 ? Math.round(((currPrice - currHpp) / currPrice) * 100) : null;
            
            let stockRows = '';
            if (useStk) {
                if (hV2) {
                    stockRows = `<div class="col-span-2 space-y-1.5">${(p.variants||[]).map(vr => {
                        const s = parseFloat(vr.stock)||0;
                        return `<div class="flex justify-between items-center text-[11px] font-bold bg-white dark:bg-slate-900 p-2 rounded-xl border border-slate-200 dark:border-slate-700">
                            <span class="text-slate-500 flex items-center gap-1.5">${vr.colorCode?`<span class="w-3 h-3 rounded-full inline-block" style="background:${esc(vr.colorCode)}"></span>`:''}${esc(vr.name)}</span>
                            <span class="${s===0?'text-rose-500':s<=5?'text-amber-500':'text-emerald-500'} font-bold">${s} ${esc(vr.unit||p.unit||'pcs')}</span>
                        </div>`;
                    }).join('')}</div>`;
                } else {
                    const s = parseFloat(p.stock)||0;
                    stockRows = `<div class="flex flex-col gap-1"><p class="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">Sisa Stok</p><p class="font-bold text-xl ${s===0?'text-rose-500':s<=5?'text-amber-500':'text-blue-500'}">${s} <span class="text-sm font-bold">${esc(p.unit||'pcs')}</span></p></div>`;
                }
            }
            
            adminInfoEl.innerHTML = `
            <div class="mb-6 bg-violet-50 dark:bg-violet-900/10 rounded-2xl p-4 border border-violet-200 dark:border-violet-800/50">
                <p class="text-[10px] font-bold text-violet-600 dark:text-violet-400 mb-3 uppercase tracking-widest flex items-center gap-1.5"><i class="fa-solid fa-lock"></i> Info Seller</p>
                <div class="grid grid-cols-2 gap-3">
                    <div class="flex flex-col gap-1">
                        <p class="text-[10px] font-bold text-slate-500 uppercase tracking-widest">HPP / Modal</p>
                        <p class="font-bold text-lg text-amber-500">${fCur(currHpp)}</p>
                    </div>
                    <div class="flex flex-col gap-1">
                        <p class="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Margin</p>
                        <p class="font-bold text-lg ${margin === null ? 'text-slate-400' : margin >= 30 ? 'text-emerald-500' : margin >= 10 ? 'text-amber-500' : 'text-rose-500'}">${margin !== null ? margin + '%' : '—'}</p>
                    </div>
                    ${stockRows}
                </div>
                <button onclick="closeProductModal(); setTimeout(()=>{ openAdminTab('products'); setTimeout(()=>oAEd('products',${p.id}),200); }, 400);" class="mt-3 w-full py-2.5 rounded-xl border border-violet-200 dark:border-violet-800 bg-white dark:bg-slate-800 text-violet-600 font-bold text-[11px] uppercase tracking-widest hover:bg-violet-600 hover:text-white transition-all flex items-center justify-center gap-2">
                    <i class="fa-solid fa-pen-to-square"></i> Edit Produk
                </button>
            </div>`;
        } else {
            adminInfoEl.innerHTML = '';
        }
    }
    
    // Variants Section (DENGAN TAMPILAN GRID & WARNA JUMBO)
    if (a) {
        if (hV && cVar === null) {
            hide('modal-active-controls'); hide('modal-inactive-controls');
        } else {
            let vActive = hV ? (v.isActive !== false && v.isActive !== 'false') : true;
            if(vActive) {
                show('modal-active-controls'); hide('modal-inactive-controls');
            } else {
                hide('modal-active-controls'); show('modal-inactive-controls');
            }
        }

        if(hV) {
            show('product-modal-options-container');
            
            // Kontainer Grid yang otomatis menyesuaikan lebar layar
            let gridHTML = `<div class="grid grid-cols-[repeat(auto-fill,minmax(80px,1fr))] sm:grid-cols-[repeat(auto-fill,minmax(95px,1fr))] gap-2 sm:gap-3 w-full">`;
            
            gridHTML += p.variants.map((r,x) => {
                let isVarActive = r.isActive !== false && r.isActive !== 'false';
                // FITUR BARU: varian dengan stok 0 (saat manajemen stok aktif) juga tidak bisa dipilih
                const useStkV = appData.store.useStock === true || appData.store.useStock === 'true';
                const varStock = parseFloat(r.stock) || 0;
                const isVarOutOfStock = useStkV && varStock <= 0;
                let isVarSelectable = isVarActive && !isVarOutOfStock;
                
                // Bulatan warna JUMBO di atas (jika admin mengisi warnanya)
                let colorCircle = r.colorCode ? `<span class="w-10 h-10 sm:w-12 sm:h-12 rounded-full shadow-inner border border-slate-300 dark:border-slate-600 mb-2 shrink-0" style="background-color: ${esc(r.colorCode)};"></span>` : '';
                
                let btnClass = "";
                if (!isVarSelectable) {
                    btnClass = "bg-slate-100 dark:bg-slate-800/50 border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400 opacity-60 cursor-not-allowed";
                } else if (x === cVar) {
                    btnClass = "bg-emerald-50 border-emerald-500 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400 shadow-sm";
                } else {
                    btnClass = "bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400 hover:border-emerald-300 hover:shadow-sm";
                }

                const zoomBtn = isVarSelectable && (r.colorCode || r.img) ? `<span onclick="event.stopPropagation(); previewVariant(${x})" class="absolute top-1.5 right-1.5 w-5 h-5 rounded-full bg-white/90 dark:bg-slate-700/90 shadow-sm flex items-center justify-center text-slate-500 hover:text-emerald-600 hover:scale-110 active:scale-90 transition-all border border-slate-200/50 dark:border-slate-600/50" title="Perbesar"><i class="fa-solid fa-magnifying-glass-plus text-[9px]"></i></span>` : '';

                // Desain tombol Flex Column (Atas ke Bawah)
                return `<button ${!isVarSelectable ? 'disabled' : ''} class="relative p-2.5 sm:p-3 rounded-xl text-[10px] sm:text-[11px] font-bold uppercase tracking-wide border-2 transition-all active:scale-95 flex flex-col items-center justify-start text-center h-full ${btnClass}" ${isVarSelectable ? `onclick="selectVariant(${x})"` : ''}>
                    ${zoomBtn}
                    ${colorCircle} 
                    <span class="${!isVarSelectable ? 'line-through' : ''} leading-snug break-words w-full ${!r.colorCode ? 'my-auto' : ''}">${esc(r.name)}</span>
                    ${isVarOutOfStock && isVarActive ? '<span class="text-[8px] font-bold text-rose-500 normal-case mt-0.5">Stok Habis</span>' : ''}
                </button>`;
            }).join('');
            
            gridHTML += `</div>`;
            setH('product-modal-options', gridHTML);
            
        } else { hide('product-modal-options-container'); }
    } else {
        hide('modal-active-controls'); show('modal-inactive-controls'); hide('product-modal-options-container');
    }
    uMPP();
};
// FIX: expose ke window agar bisa dipanggil dari attachRealtimeStockSync
window.rProdMod = rProdMod;

const uMPP = () => {
    if (!cProd) return;
    
    // Cegah perhitungan salah jika pembeli belum klik warna
    if (cProd.variants?.length > 0 && cVar === null) {
        setIn('btn-modal-price-preview', 'Rp 0');
        return;
    }
    
    let v = (cProd.variants || [])[cVar];
    let p = v?.price ?? cProd.price;
    let e = p;
    let eQ = parseFloat(cart.find(c => c.id === cProd.id)?.qty || 0);
    let tQ = cQty + eQ;
    if (cProd.wholesale?.length) {
        for (let w of cProd.wholesale.slice().sort((a,b) => b.minQty - a.minQty)){
            if (tQ >= parseFloat(w.minQty)) { e = w.price; break; }
        }
    }
    setIn('btn-modal-price-preview', fCur(e * cQty));
};

window.updateModalQty = c => {
    const useStk = appData.store.useStock === true || appData.store.useStock === 'true';
    const v2 = cProd?.variants?.[cVar];
    const vN2 = v2?.name || null;
    const maxStk = useStk ? (vN2 ? (parseFloat(v2?.stock)||0) : (parseFloat(cProd?.stock)||0)) : Infinity;
    cQty = parseFloat(Math.min(maxStk, Math.max(0.01, cQty+c)).toFixed(2));
    setV('modal-qty-input', cQty); uMPP();
    if (useStk && maxStk !== Infinity && cQty >= maxStk) showToast(`Maks stok: ${maxStk}`);
};
window.handleModalQtyChange = v => {
    const useStk = appData.store.useStock === true || appData.store.useStock === 'true';
    const v2 = cProd?.variants?.[cVar];
    const vN2 = v2?.name || null;
    const maxStk = useStk ? (vN2 ? (parseFloat(v2?.stock)||0) : (parseFloat(cProd?.stock)||0)) : Infinity;
    let nv = parseFloat(v); if(isNaN(nv)||nv<=0) nv=0.01;
    nv = Math.min(maxStk, nv);
    cQty=parseFloat(nv.toFixed(2)); setV('modal-qty-input',cQty); uMPP();
};
window.selectVariant = i => { cVar = i; rProdMod(); };

window.confirmAddProductToCart = () => {
    // Pengaman: Jangan bisa diklik masuk keranjang jika varian belum dipilih
    if (cProd.variants?.length > 0 && cVar === null) return showToast("Pilih varian / warna terlebih dahulu!");
    
    // Validasi stok saat tambah ke keranjang (jika fitur stok aktif)
    const useStk = appData.store.useStock === true || appData.store.useStock === 'true';
    if (useStk) {
        const v2 = cProd.variants?.[cVar];
        const vN2 = v2?.name || null;
        const avail = vN2 ? (parseFloat(v2.stock)||0) : (parseFloat(cProd.stock)||0);
        const inCart = cart.find(i => i.id === cProd.id && i.variantName === vN2);
        const alreadyInCart = inCart ? parseFloat(inCart.qty)||0 : 0;
        if (cQty + alreadyInCart > avail) {
            return showToast(`Stok tidak cukup! Tersisa: ${avail}`);
        }
    }
    
    const v = cProd.variants?.[cVar], vN = v?.name || null, e = cart.find(i => i.id === cProd.id && i.variantName === vN), unt = v?.unit || cProd.unit || 'pcs';
    if (e) {
        e.qty = parseFloat((e.qty + cQty).toFixed(2)); e.unit = unt;
    } else {
        cart.push({id:cProd.id, name:cProd.name, variantName:vN, price:v?.price??cProd.price, img:v?.img||cProd.img, qty:cQty, unit:unt, poTime:cProd.poTime||'', colorCode:v?.colorCode||'', poin:parseFloat(v?.poin??cProd.poin)||0});
    }
    updCart();
    if(typeof analytics!=='undefined') analytics.logEvent('add_to_cart',{item_id:cProd.id,item_name:cProd.name,quantity:cQty});
    closeProductModal(); showToast("Berhasil Masuk Keranjang");
};

window.confirmAddToWishlist = () => {
    if (cProd.variants?.length > 0 && cVar === null) return showToast("Pilih varian / warna terlebih dahulu!");

    const v = cProd.variants?.[cVar], vN = v?.name || null;
    if (wishlist.find(i => i.id === cProd.id && i.variantName === vN)) return showToast("Sudah di Favorit!");
    wishlist.push({id:cProd.id, name:cProd.name, variantName:vN, price:v?.price??cProd.price, img:v?.img||cProd.img, colorCode:v?.colorCode||''});
    ssL('freshmart_wishlist', JSON.stringify(wishlist));
    updWish(); closeProductModal(); showToast("Masuk Favorit ❤️");
};

window.shareProduct = () => {
    if (!cProd) return;
    
    // Membuat Link unik khusus untuk produk ini
    const productUrl = window.location.origin + window.location.pathname + '?p=' + cProd.id;
    const shareTitle = cProd.name;
    const shareText = `Cek produk ${cProd.name} di ${appData.store.name} sekarang!`;

    if (navigator.share) {
        // Jika HP mendukung fitur Share bawaan (Native Web Share API)
        navigator.share({
            title: shareTitle,
            text: shareText,
            url: productUrl
        }).catch(err => {
            console.log('User membatalkan share', err);
        });
    } else {
        // Fallback untuk PC / Browser Lama: Copy Link Otomatis
        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(productUrl)
                .then(() => showToast("Link produk berhasil disalin!"))
                .catch(() => showToast("Gagal menyalin link."));
        } else {
            const e = document.createElement('textarea');
            e.value = productUrl;
            e.style.position = 'fixed';
            e.style.opacity = '0';
            document.body.appendChild(e);
            e.select();
            document.execCommand('copy');
            document.body.removeChild(e);
            showToast("Link produk berhasil disalin!");
        }
    }
};

// --- 10. CART & WISHLIST VIEW ---

window.updWish = () => { 
    const b = el('wishlist-badge'); 
    if(b){ b.innerText=wishlist.length; b.classList.toggle('scale-0', !wishlist.length); } 
};

window.updCart = () => {
    ssL('freshmart_cart', JSON.stringify(cart));
    const q = parseFloat(cart.reduce((s,i) => s + (parseFloat(i.qty)||0), 0).toFixed(2));
    const a = cart.reduce((s,i) => s + getEffP(i) * (parseFloat(i.qty)||0), 0);
    setIn('cart-badge', q.toString());
    setIn('cart-total-preview', fCur(a));
    const b = el('cart-badge');
    if(b) b.classList.toggle('scale-0', q <= 0);
    
    // Tampilkan/sembunyikan floating FAB secara dinamis
    const fc = el('floating-cart-container');
    if(fc) {
        if(q > 0) {
            fc.classList.remove('scale-0', 'pointer-events-none');
            fc.classList.add('scale-100', 'pointer-events-auto');
        } else {
            fc.classList.remove('scale-100', 'pointer-events-auto');
            fc.classList.add('scale-0', 'pointer-events-none');
        }
    }
};

window.rmWish = i => { wishlist.splice(i,1); ssL('freshmart_wishlist',JSON.stringify(wishlist)); updWish(); renderWish(); };

window.moveWish = i => {
    const it = wishlist[i];
    // FIX: periksa produk masih ada dan aktif sebelum pindah ke keranjang
    const p = appData.products.find(x => x.id === it.id);
    if (!p || p.isActive === 'false' || p.isActive === false) {
        return showToast(`${it.name} sudah tidak tersedia.`);
    }
    const v = it.variantName ? (p.variants||[]).find(vv => vv.name === it.variantName) : null;
    const useStk = appData.store.useStock === true || appData.store.useStock === 'true';
    if (useStk) {
        if (it.variantName && (!v || v.isActive === false || v.isActive === 'false')) {
            return showToast(`Varian ${it.variantName} sudah tidak tersedia.`);
        }
        const avail = v ? (parseFloat(v.stock)||0) : (parseFloat(p.stock)||0);
        const inCart = cart.find(c => c.id === it.id && c.variantName === it.variantName);
        const alreadyInCart = inCart ? parseFloat(inCart.qty)||0 : 0;
        if (avail <= 0 || alreadyInCart >= avail) {
            return showToast(`Stok ${it.name} tidak mencukupi!`);
        }
    }
    const e = cart.find(c => c.id === it.id && c.variantName === it.variantName);
    if(e) {
        e.qty = parseFloat((e.qty+1).toFixed(2));
    } else {
        // FIX: bangun item keranjang dari data produk TERBARU (harga, poin, satuan),
        // bukan langsung menyalin data lama dari wishlist yang bisa sudah usang
        // (mis. wishlist disimpan sebelum fitur Poin Member ada, jadi field 'poin'
        // tidak pernah ada di situ) -- sama seperti alur addToCart yang normal.
        cart.push({
            id: p.id, name: p.name, variantName: it.variantName || '',
            price: v ? v.price : p.price, img: v?.img || p.img, qty: 1,
            unit: p.unit || 'pcs', poTime: p.poTime || '', colorCode: v?.colorCode || '',
            poin: parseFloat(v ? v.poin : p.poin) || 0
        });
    }
    updCart(); showToast("Ke Keranjang!");
    if (curViewName === 'view-cart') renderCart();
};

window.clearWishlist = () => { showConfirm("Hapus Favorit", "Yakin ingin menghapus semua?", () => { wishlist=[]; ssL('freshmart_wishlist',JSON.stringify(wishlist)); updWish(); renderWish(); showToast("Dibersihkan"); }); };

window.clearCart = () => { showConfirm("Kosongkan Keranjang", "Semua barang akan dihapus. Lanjutkan?", () => { cart=[]; updCart(); renderCart(); showToast("Dibersihkan"); }); };

window.renderMyOrders = async () => {
    if (!myOrders.length) { show('orders-empty-state'); hide('btn-clear-orders'); show('spacer-orders'); setH('orders-items-container',''); return; }
    hide('orders-empty-state'); show('btn-clear-orders'); hide('spacer-orders');

    window.attachMyOrdersRealtime(); // FIX: pasang listener realtime status setiap kali daftar dirender ulang

    setH('orders-items-container', myOrders.map((o, x) => {
        const dStr = new Date(o.date).toLocaleDateString('id-ID', {day:'numeric',month:'short',year:'numeric'});
        
        let bC = "text-slate-500 border-slate-200", iC = "fa-clock";
        if(o.status==='Baru') { bC="text-rose-500 border-rose-200 bg-rose-50 dark:bg-rose-900/20 dark:border-rose-800"; iC="fa-asterisk"; }
        else if(o.status==='Diproses') { bC="text-emerald-500 border-emerald-200 bg-emerald-50 dark:bg-emerald-900/20 dark:border-emerald-800"; iC="fa-spinner fa-spin"; }
        else if(o.status==='Selesai') { bC="text-emerald-500 border-emerald-200 bg-emerald-50 dark:bg-emerald-900/20 dark:border-emerald-800"; iC="fa-check-double"; }
        else if(o.status==='Dibatalkan') { bC="text-slate-400 border-slate-200 bg-slate-50 dark:bg-slate-800 dark:border-slate-700"; iC="fa-xmark"; }

        return `
        <div class="bg-white dark:bg-slate-800 p-4 rounded-[1.25rem] border border-slate-200 dark:border-slate-700 shadow-sm relative overflow-hidden group min-w-0">
            <div class="flex justify-between items-start mb-3 border-b border-slate-100 dark:border-slate-700/50 pb-3">
                <div>
                    <span class="font-bold text-sm text-slate-800 dark:text-white tracking-tight">#${o.orderId.split('-').pop()}</span>
                    <p class="text-[10px] font-bold text-slate-500 dark:text-slate-400 mt-0.5">${dStr}</p>
                </div>
                <span class="text-[9px] font-bold px-2 py-1 rounded border ${bC} uppercase tracking-widest flex items-center"><i class="fa-solid ${iC} mr-1"></i> ${esc(o.status)}</span>
            </div>
            ${(o.pointsEarned > 0 || o.claimedReward) ? `
            <div class="flex flex-wrap gap-1.5 mb-3">
                ${o.pointsEarned > 0 ? `<span class="text-[9px] font-bold px-2 py-1 rounded-xl bg-amber-50 text-amber-600 border border-amber-200 dark:bg-amber-900/20 dark:border-amber-800 dark:text-amber-400"><i class="fa-solid fa-star mr-1"></i>+${o.pointsEarned} Poin</span>` : ''}
                ${o.claimedReward ? `<span class="text-[9px] font-bold px-2 py-1 rounded-xl bg-violet-50 text-violet-600 border border-violet-200 dark:bg-violet-900/20 dark:border-violet-800 dark:text-violet-400"><i class="fa-solid fa-gift mr-1"></i>Hadiah: ${esc(o.claimedReward.name)} ${rewardStatusLabel(o.claimedReward)}</span>` : ''}
                ${(o.claimedReward && o.finalMemberPoints !== undefined && o.finalMemberPoints !== null) ? `<span class="text-[9px] font-bold px-2 py-1 rounded-xl bg-slate-100 text-slate-500 border border-slate-200 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-400"><i class="fa-solid fa-wallet mr-1"></i>Sisa Poin: ${o.finalMemberPoints}</span>` : ''}
            </div>` : ''}
            <div class="flex justify-between items-end mt-2">
                <div>
                    <p class="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-0.5">Total Tagihan</p>
                    <p class="text-emerald-600 dark:text-emerald-400 font-bold text-base tracking-tight">${fCur(o.total)} <span class="text-[10px] text-slate-500 dark:text-slate-400 font-bold ml-1">(${o.itemCount} Item)</span></p>
                </div>
                <div class="flex gap-2">
                    <!-- TOMBOL DETAIL BARU -->
                    <button onclick="openCustomerOrderDetail('${o.orderId}')" class="h-8 px-4 rounded-xl bg-[rgba(var(--color-primary-rgb),0.08)] hover:bg-[rgba(var(--color-primary-rgb),0.15)] text-[var(--color-primary)] border border-[rgba(var(--color-primary-rgb),0.2)] dark:border-[rgba(var(--color-primary-rgb),0.35)] text-[10px] font-bold transition-colors active:scale-95 shadow-sm flex items-center gap-1.5"><i class="fa-solid fa-file-invoice"></i> Detail</button>
                    
                    <button onclick="checkOrderStatus('${o.orderId}', ${x})" class="h-8 px-4 rounded-xl bg-slate-50 dark:bg-slate-900/50 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 text-[10px] font-bold transition-colors active:scale-95 shadow-sm flex items-center gap-1.5"><i class="fa-solid fa-rotate"></i> Status</button>
                </div>
            </div>
        </div>`;
    }).join(''));
};

window.checkOrderStatus = async (orderId, index) => {
    sLoad('Melacak Status...');
    try {
        const doc = await db.collection("freshmart_orders").doc(orderId).get();
        if (doc.exists) {
            myOrders[index].status = doc.data().status;
            ssL('freshmart_my_orders', JSON.stringify(myOrders));
            renderMyOrders(); showToast("Status Diperbarui!");
        } else showToast("Pesanan tidak ditemukan.");
    } catch (e) { showToast("Gagal mengambil data sistem."); } finally { hLoad(); }
};

window.clearMyOrders = () => { 
    showConfirm("Hapus Riwayat", "Riwayat pesanan di perangkat ini akan dihapus. Lanjutkan?", () => { 
        myOrders=[]; ssL('freshmart_my_orders',JSON.stringify(myOrders)); renderMyOrders(); showToast("Riwayat dibersihkan"); 
    }); 
};

// --- FITUR MODAL DETAIL PESANAN (REVISI ANTI-ERROR) ---
window.openCustomerOrderDetail = async (orderId) => {
    // Memunculkan loading
    if(typeof sLoad === 'function') sLoad('Memuat Rincian...');
    
    try {
        // Menarik data langsung dari Firebase
        const doc = await db.collection("freshmart_orders").doc(orderId).get();
        
        if (!doc.exists) { 
            if(typeof showToast === 'function') showToast('Pesanan tidak ditemukan.');
            // orderId tidak ditemukan (log dihapus untuk keamanan)
            if(typeof hLoad === 'function') hLoad();
            return; 
        }
        
        const d = doc.data();
        // FITUR BARU: cek ulasan yang SUDAH dibuat untuk pesanan ini, supaya tombol
        // "Berikan Ulasan" tidak muncul lagi untuk item yang sudah pernah diulas.
        let reviewedKeys = [];
        if (d.status === 'Selesai') {
            try {
                const revSnap = await db.collection("freshmart").doc("cms_data").collection("reviews").where("orderId", "==", orderId).get();
                reviewedKeys = revSnap.docs.map(r => `${r.data().productId}::${r.data().variantName || ''}`);
            } catch(e) { /* diamkan, tombol ulasan tetap tampil kalau gagal cek */ }
        }
        // Data pesanan berhasil dimuat (log dihapus untuk keamanan production)
        renderOrderDetailModal(orderId, d, reviewedKeys);
        
    } catch (e) {
        // Jika Firebase menolak akses (Misal karena Aturan Keamanan), error akan muncul di sini!
        console.error("Gagal mengambil data:", e);
        // SECURITY: jangan bocorkan detail error Firebase ke user
        if(typeof showToast === 'function') showToast('Gagal memuat data. Coba beberapa saat lagi.');
    } finally { 
        if(typeof hLoad === 'function') hLoad(); 
    }
};

window.renderOrderDetailModal = (orderId, d, reviewedKeys) => {
    reviewedKeys = reviewedKeys || [];
    try {
        let m = document.getElementById('order-detail-modal');
        if (!m) {
            m = document.createElement('div');
            m.id = 'order-detail-modal';
            m.className = 'fixed inset-0 z-[100] flex justify-center items-end sm:items-center bg-slate-900/60 backdrop-blur-sm opacity-0 pointer-events-none transition-opacity duration-300';
            document.body.appendChild(m);
        }

        // Pengamanan variabel (Tanpa menggunakan simbol "?." agar support di semua perangkat)
        // SECURITY FIX: di-escape dengan esc() karena ini data customer (rawan XSS jika
        // Order ID dibagikan/diketahui orang lain dan dibuka lewat "Cek Status Pesanan").
        const cName = esc((d.customer && d.customer.name) ? d.customer.name : '-');
        const cWa = esc((d.customer && d.customer.wa) ? d.customer.wa : '-');
        const cAddr = esc((d.customer && d.customer.address) ? d.customer.address : '-');
        
        const dMethod = (d.customer && d.customer.deliveryMethod === 'delivery') ? 'Kurir Toko' : 'Ambil Sendiri';
        const dNotes = esc((d.customer && d.customer.note) ? d.customer.note : '');
        const pMethod = esc((d.payment && d.payment.method) ? d.payment.method : 'Cash / COD');
        
        // Cek data belanja
        const cartData = d.items || [];
        const hasPO = cartData.some(i => i.poTime && i.poTime !== '');
        const itemsHtml = cartData.map((i, itemIdx) => {
            const qty = parseFloat(i.qty) || 0;
            const price = parseFloat(i.effectivePrice || i.price) || 0;
            const itemTotal = qty * price;
            const reviewKey = `${i.id}::${i.variantName || ''}`;
            const canReview = d.status === 'Selesai' && !reviewedKeys.includes(reviewKey) && i.id !== undefined && i.id !== null;

            return `
            <div class="flex gap-3 items-center border-b border-slate-100 dark:border-slate-700/50 py-3 last:border-0">
                <div class="w-12 h-12 rounded-xl bg-slate-100 dark:bg-slate-800 bg-cover bg-center shrink-0 border border-slate-200 dark:border-slate-700" style="background-image:url('${esc(i.img || (appData && appData.store ? appData.store.logo : ''))}')"></div>
                <div class="flex-1 min-w-0">
                    <p class="text-xs font-bold text-slate-800 dark:text-white truncate mb-1" title="${esc(i.name)}">${esc(i.name)}</p>
                    ${(i.variantName || i.poTime) ? `
                    <div class="flex flex-wrap gap-1 mb-1">
                        ${i.variantName ? `<span class="bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300 px-1.5 py-0.5 rounded-lg text-[9px] font-bold">${esc(i.variantName)}</span>` : ''}
                        ${i.poTime ? `<span class="amber-badge px-1.5 py-0.5 rounded-lg text-[8px] font-bold uppercase">PO ${esc(i.poTime)}</span>` : ''}
                    </div>
                    ` : ''}
                    <p class="text-[10px] text-slate-500">${qty} ${esc(i.unit || 'pcs')} x ${fCur(price)}</p>
                    ${canReview ? `<button type="button" onclick="openReviewModal('${orderId}',${i.id},'${esc(i.variantName||'').replace(/'/g,"\\'")}','${esc(i.name).replace(/'/g,"\\'")}','${cName.replace(/'/g,"\\'")}')" class="mt-1.5 text-[10px] font-bold text-amber-500 hover:text-amber-600 flex items-center gap-1"><i class="fa-solid fa-star"></i> Berikan Ulasan</button>` : ''}
                </div>
                <div class="text-right shrink-0">
                    <p class="text-xs font-bold text-slate-800 dark:text-emerald-400">${fCur(itemTotal)}</p>
                </div>
            </div>
            `;
        }).join('');

        let dStr = "Tanggal Tidak Tersedia";
try {
    let dateObj;
    // Cek jika data dari Firestore (object .toDate())
    if (d.timestamp && typeof d.timestamp.toDate === 'function') {
        dateObj = d.timestamp.toDate();
    } else {
        // Cek jika angka (timestamp miliseconds) atau string
        dateObj = new Date(Number(d.timestamp || d.dateString || Date.now()));
    }
    
    // Pastikan valid
    if (!isNaN(dateObj.getTime())) {
        dStr = dateObj.toLocaleString('id-ID', {day:'numeric',month:'short',year:'numeric', hour:'2-digit', minute:'2-digit'});
    }
} catch(e) {
    console.error("Gagal memproses tanggal:", e);
}
        
        // Pengamanan variabel perhitungan
        const subtotal = (d.payment && d.payment.subtotal) ? d.payment.subtotal : 0;
        const shipping = (d.payment && d.payment.shippingCost) ? d.payment.shippingCost : 0;
        const discount = (d.payment && d.payment.productDiscount) ? d.payment.productDiscount : 0;
        const shippingDiscount = (d.payment && d.payment.shippingDiscount) ? d.payment.shippingDiscount : 0;
        const ppnAmt = (d.payment && d.payment.ppnAmount) ? d.payment.ppnAmount : 0;
        const ppnRt = (d.payment && d.payment.ppnRate) ? d.payment.ppnRate : 0;
        const grandTotal = (d.payment && d.payment.grandTotal) ? d.payment.grandTotal : 0;

        m.innerHTML = `
            <div class="bg-white dark:bg-slate-900 w-full max-w-lg rounded-t-[2rem] sm:rounded-[2rem] max-h-[85vh] flex flex-col shadow-2xl transform translate-y-full sm:translate-y-10 scale-100 transition-transform duration-300 border border-slate-200 dark:border-slate-700" id="order-detail-content">
                
                <div class="p-5 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center shrink-0 bg-slate-50/50 dark:bg-slate-800/50 rounded-t-[2rem]">
                    <div>
                        <h3 class="font-bold text-slate-800 dark:text-white text-base">Rincian Pesanan</h3>
                        <p class="text-[10px] font-bold text-slate-500 mt-0.5">ID: #${orderId.split('-').pop()}</p>
                    </div>
                    <button onclick="closeCustomerOrderDetailModal()" class="w-8 h-8 flex items-center justify-center rounded-full bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-rose-100 hover:text-rose-500 transition-colors active:scale-95"><i class="fa-solid fa-xmark"></i></button>
                </div>
                
                <div class="p-5 overflow-y-auto flex-1 space-y-6 custom-scrollbar text-sm">
                    <div class="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-2xl border border-slate-200 dark:border-slate-700 flex justify-between items-center">
                        <div>
                            <p class="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-1">Status</p>
                            <span class="text-xs font-bold px-2 py-1 rounded bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300">${esc(d.status || 'Baru')}</span>
                        </div>
                        <div class="text-right">
                            <p class="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-1">Waktu Pembelian</p>
                            <p class="text-[11px] font-bold text-slate-700 dark:text-slate-300">${dStr}</p>
                        </div>
                    </div>

                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                            <h4 class="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-3 flex items-center gap-1.5"><i class="fa-solid fa-user text-slate-300"></i> Info Pelanggan</h4>
                            <div class="space-y-1.5 text-xs">
                                <p class="font-bold text-slate-800 dark:text-slate-200">${cName}</p>
                                ${(d.customer && d.customer.wa) ? `<a href="https://wa.me/${cWa}" target="_blank" class="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-bold hover:underline"><i class="fa-brands fa-whatsapp"></i> +${cWa}</a>` : ''}
                                ${(d.customer && d.customer.lat && d.customer.deliveryMethod === 'delivery') ? `<a href="https://www.google.com/maps?q=${esc(d.customer.lat)},${esc(d.customer.lng)}" target="_blank" class="flex items-center gap-1.5 text-blue-600 dark:text-blue-400 font-bold hover:underline"><i class="fa-solid fa-location-dot"></i> Lihat di Peta</a>` : ''}
                            </div>
                        </div>
                        <div>
                            <h4 class="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-3 flex items-center gap-1.5"><i class="fa-solid fa-truck text-slate-300"></i> Kirim & Bayar</h4>
                            <div class="space-y-1.5 text-xs">
                                <p><span class="text-slate-500 inline-block w-16">Metode</span> <span class="font-bold text-slate-800 dark:text-slate-200">: ${dMethod}</span></p>
                                <p><span class="text-slate-500 inline-block w-16">Bayar</span> <span class="font-bold text-slate-800 dark:text-slate-200">: ${pMethod.toUpperCase()}</span></p>
                            </div>
                        </div>
                    </div>

                    <div class="space-y-3">
                        <div class="bg-slate-50 dark:bg-slate-900/50 p-3 rounded-xl border border-slate-200 dark:border-slate-700/60">
                            <p class="text-[9px] font-bold text-[var(--color-primary)] uppercase tracking-widest mb-1">Alamat Tujuan</p>
                            <p class="text-xs font-semibold text-slate-700 dark:text-slate-200 leading-relaxed">${cAddr}</p>
                        </div>
                        ${dNotes ? `<div class="bg-slate-50 dark:bg-slate-900/50 p-3 rounded-xl border border-slate-200 dark:border-slate-700/60"><p class="text-[9px] font-bold text-amber-500 dark:text-amber-400 uppercase tracking-widest mb-1">Catatan Pembeli</p><p class="text-xs font-semibold text-slate-700 dark:text-slate-200 leading-relaxed italic">"${dNotes}"</p></div>` : ''}
                    </div>

                    ${d.buktiPayment ? `
                    <div>
                        <h4 class="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-3 flex items-center gap-1.5"><i class="fa-solid fa-image text-violet-400"></i> Bukti Pembayaran</h4>
                        <a href="${esc(d.buktiPayment)}" target="_blank" class="block rounded-2xl overflow-hidden border-2 border-violet-200 dark:border-violet-800 hover:border-violet-400 transition-colors shadow-sm">
                            <img src="${esc(d.buktiPayment)}" alt="Bukti Pembayaran" class="w-full max-h-56 object-cover" onerror="this.style.display='none'" loading="lazy"></i>
                            <div class="bg-violet-50 dark:bg-violet-900/20 p-2 flex items-center justify-center gap-1.5 text-[10px] font-bold text-violet-600 dark:text-violet-400"><i class="fa-solid fa-arrow-up-right-from-square"></i> Tap untuk buka full screen</div>
                        </a>
                    </div>` : ''}
                    
                    <div>
                        <h4 class="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-3 flex items-center gap-1.5"><i class="fa-solid fa-basket-shopping text-slate-300"></i> Daftar Belanja</h4>
                        <div class="bg-slate-50 dark:bg-slate-800/30 rounded-2xl px-3 py-1 border border-slate-200 dark:border-slate-700/80">
                            ${itemsHtml}
                        </div>
                    </div>

                    ${hasPO ? `
                    <div class="bg-amber-50 dark:bg-amber-900/10 p-3.5 rounded-xl border border-amber-200 dark:border-amber-800/30 flex gap-2.5 items-start">
                        <i class="fa-solid fa-clock text-amber-500 mt-0.5 animate-pulse"></i>
                        <p class="text-[11px] font-bold text-amber-700 dark:text-amber-400 leading-relaxed">Catatan: Pesanan ini mengandung produk Pre-Order (PO). Khusus untuk produk berlabel PO akan dikirimkan menyusul (estimasi sesuai label) tanpa dikenakan biaya tambahan.</p>
                    </div>` : ''}

                    ${(d.pointsEarned > 0 || d.claimedReward || (d.finalMemberPoints !== undefined && d.finalMemberPoints !== null)) ? `
                    <div class="space-y-2.5">
                        ${d.pointsEarned > 0 ? `<div class="bg-amber-50 dark:bg-amber-900/10 p-3.5 rounded-xl border border-amber-100 dark:border-amber-900/30 flex items-center gap-2.5"><i class="fa-solid fa-star text-amber-400 text-lg"></i><p class="text-xs font-bold text-amber-700 dark:text-amber-400">Anda mendapat <b>+${d.pointsEarned} Poin</b> dari pesanan ini!</p></div>` : ''}
                        ${(d.finalMemberPoints !== undefined && d.finalMemberPoints !== null) ? `<div class="bg-slate-50 dark:bg-slate-800/50 p-3.5 rounded-xl border border-slate-200 dark:border-slate-700 flex items-center gap-2.5"><i class="fa-solid fa-wallet text-slate-400 text-lg"></i><p class="text-xs font-bold text-slate-600 dark:text-slate-300">Saldo Poin Anda saat ini: <b>${d.finalMemberPoints}</b></p></div>` : ''}
                        ${d.claimedReward ? `
                        <div class="bg-violet-50 dark:bg-violet-900/10 p-3.5 rounded-xl border border-violet-100 dark:border-violet-900/30">
                            <div class="flex items-center gap-2.5"><i class="fa-solid fa-gift text-violet-400 text-lg"></i><p class="text-xs font-bold text-violet-700 dark:text-violet-400">Klaim Hadiah: <b>${esc(d.claimedReward.name)}</b> (${d.claimedReward.pointsCost} Poin)</p></div>
                            <p class="text-[11px] font-bold text-violet-500 mt-1.5 ml-6">${window.rewardStatusLabel(d.claimedReward)}</p>
                            ${d.claimedReward.note ? `<p class="text-[11px] text-violet-500/80 italic mt-0.5 ml-6">"${esc(d.claimedReward.note)}"</p>` : ''}
                        </div>` : ''}
                    </div>` : ''}

                    <div class="bg-slate-100 dark:bg-slate-800 p-4 rounded-2xl space-y-2 text-xs">
                        <div class="flex justify-between text-slate-500 dark:text-slate-400"><p>Subtotal Produk</p><p class="font-bold">${fCur(subtotal)}</p></div>
                        <div class="flex justify-between text-slate-500 dark:text-slate-400"><p>Ongkos Kirim</p><p class="font-bold">${fCur(shipping)}</p></div>
                        ${shippingDiscount > 0 ? `<div class="flex justify-between text-emerald-500"><p>Diskon Ongkir</p><p class="font-bold">-${fCur(shippingDiscount)}</p></div>` : ''}
                        ${discount > 0 ? `<div class="flex justify-between text-rose-500"><p>Diskon Promo</p><p class="font-bold">-${fCur(discount)}</p></div>` : ''}
                        ${ppnAmt > 0 ? `<div class="flex justify-between text-amber-500"><p>PPN (${ppnRt}%)</p><p class="font-bold">+${fCur(ppnAmt)}</p></div>` : ''}
                        <div class="flex justify-between items-center border-t border-dashed border-slate-300 dark:border-slate-600 pt-3 mt-2">
                            <p class="font-bold text-slate-800 dark:text-white uppercase tracking-widest">Total Bayar</p>
                            <p class="text-lg font-bold text-emerald-500">${fCur(grandTotal)}</p>
                        </div>
                    </div>
                </div>
            </div>
        `;

        // Animasi Muncul
        if (m.classList.contains('opacity-0')) pushModalHistory('customerOrder');
        m.classList.remove('opacity-0', 'pointer-events-none');
        setTimeout(() => {
            const c = document.getElementById('order-detail-content');
            if(c) {
                c.classList.remove('translate-y-full', 'sm:translate-y-10');
                c.classList.add('translate-y-0', 'sm:translate-y-0');
            }
        }, 50);

    } catch (err) {
        // Jika ada kesalahan struktur HTML, akan muncul di sini
        console.error("Error Render HTML Modal:", err);
        // SECURITY: jangan bocorkan stack trace ke user
        if(typeof showToast === 'function') showToast('Gagal menampilkan detail. Coba lagi.');
    }
};

window.closeCustomerOrderDetailModal = (fH=false) => {
    requestCloseModal('customerOrder', fH, () => {
        const m = document.getElementById('order-detail-modal');
        const c = document.getElementById('order-detail-content');
        if(c) {
            c.classList.remove('translate-y-0', 'sm:translate-y-0');
            c.classList.add('translate-y-full', 'sm:translate-y-10');
        }
        setTimeout(() => {
            if(m) m.classList.add('opacity-0', 'pointer-events-none');
        }, 300);
    });
};

window.renderWish = () => {
    if (!wishlist.length) { show('wishlist-empty-state'); hide('btn-clear-wishlist'); show('spacer-wishlist'); setH('wishlist-items-container',''); return; }
    hide('wishlist-empty-state'); show('btn-clear-wishlist'); hide('spacer-wishlist');
    setH('wishlist-items-container', wishlist.map((i,x) => {
        // FITUR BARU: Deteksi dan buat lingkaran warna jika ada
        let colorIndicator = i.colorCode ? `<span class="w-3.5 h-3.5 rounded-full shadow-inner border border-slate-300 dark:border-slate-600 shrink-0" style="background-color: ${esc(i.colorCode)};"></span>` : '';
        
        return `
        <div class="bg-white dark:bg-slate-800 p-4 rounded-[1.25rem] border border-slate-200 dark:border-slate-700 shadow-sm flex gap-4 relative overflow-hidden group min-w-0 hover:shadow-md hover:-translate-y-1 hover:border-rose-300 dark:hover:border-rose-600 transition-all duration-300">
            
            <div class="relative w-20 h-20 sm:w-24 sm:h-24 shrink-0 rounded-2xl bg-white border border-slate-100 dark:border-slate-700/50 p-2 flex items-center justify-center overflow-hidden">
                <img loading="lazy" src="${esc(i.img)}" alt="${esc(i.name)}" class="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110" onerror="this.onerror=null;this.src='https://placehold.co/400?text=No+Image'"></i>
            </div>
            
            <div class="flex-1 flex flex-col min-w-0 relative">
                <button onclick="rmWish(${x})" class="absolute top-0 right-0 w-8 h-8 flex items-center justify-center rounded-full bg-slate-50 hover:bg-rose-50 dark:bg-slate-700/50 dark:hover:bg-rose-900/30 text-slate-400 hover:text-rose-500 transition-all active:scale-90 border border-slate-100 dark:border-slate-600 shadow-sm z-10"><i class="fa-solid fa-xmark text-sm"></i></button>
                
                <h4 class="text-[13px] sm:text-sm font-bold text-slate-800 dark:text-white leading-snug line-clamp-2 mb-1.5 pr-10 uppercase tracking-wide">${esc(i.name)}</h4>
                
                ${i.variantName?`<div class="mb-2 flex items-center gap-1.5">${colorIndicator}<span class="bg-slate-100 text-slate-600 dark:bg-slate-700 dark:text-slate-300 px-2.5 py-1 rounded-full text-[9px] font-bold border border-slate-200 dark:border-slate-600 uppercase tracking-wide">${esc(i.variantName)}</span></div>`:''}
                
                <div class="flex justify-between items-end mt-auto pt-1">
                    <p class="text-emerald-600 dark:text-emerald-400 font-bold text-base sm:text-lg leading-none tracking-tight">${fCur(i.price)}</p>
                    <button onclick="moveWish(${x})" class="h-9 px-5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white dark:bg-emerald-600 dark:hover:bg-emerald-500 border border-emerald-600 text-xs font-bold transition-colors active:scale-95 shadow-glow flex items-center gap-1.5"><i class="fa-solid fa-cart-plus"></i> Beli</button>
                </div>
            </div>
        </div>`;
    }).join(''));
};

window.renderCart = () => {
    if (!cart.length) { show('cart-empty-state'); hide('cart-bottom-bar'); hide('btn-clear-cart'); show('spacer-cart'); setH('cart-items-container',''); return; }
    hide('cart-empty-state'); show('cart-bottom-bar'); show('btn-clear-cart'); hide('spacer-cart');
    let s = 0;
    setH('cart-items-container', cart.map((i,x) => {
        let q = parseFloat(i.qty) || 0;
        let e = getEffP(i), w = e < i.price;
        s += e * q;
        
        // FITUR BARU: Deteksi dan buat lingkaran warna jika ada
        let colorIndicator = i.colorCode ? `<span class="w-3.5 h-3.5 rounded-full shadow-inner border border-slate-300 dark:border-slate-600 shrink-0" style="background-color: ${esc(i.colorCode)};"></span>` : '';

        return `
        <div class="bg-white dark:bg-slate-800 p-4 rounded-[1.25rem] border border-slate-200 dark:border-slate-700 shadow-sm flex gap-4 relative overflow-hidden group min-w-0 hover:shadow-md hover:-translate-y-1 hover:border-emerald-300 dark:hover:border-emerald-600 transition-all duration-300">
            
            <div class="relative w-20 h-20 sm:w-24 sm:h-24 shrink-0 rounded-2xl bg-white border border-slate-100 dark:border-slate-700/50 p-2 flex items-center justify-center overflow-hidden">
                <img loading="lazy" src="${esc(i.img)}" alt="${esc(i.name)}" class="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110" onerror="this.onerror=null;this.src='https://placehold.co/400?text=No+Image'"></i>
            </div>
            
            <div class="flex-1 flex flex-col min-w-0 relative">
                <button onclick="rmCart(${x})" class="absolute top-0 right-0 w-8 h-8 flex items-center justify-center rounded-full bg-slate-50 hover:bg-rose-50 dark:bg-slate-700/50 dark:hover:bg-rose-900/30 text-slate-400 hover:text-rose-500 transition-all active:scale-90 border border-slate-100 dark:border-slate-600 shadow-sm z-10"><i class="fa-solid fa-xmark text-sm"></i></button>
                
                <h4 class="text-[13px] sm:text-sm font-bold text-slate-800 dark:text-white leading-snug line-clamp-2 mb-1.5 pr-10 uppercase tracking-wide">${esc(i.name)}</h4>
                
                <div class="flex flex-wrap items-center gap-1.5 mb-2.5">
                    ${w?`<span class="bg-gradient-to-r from-amber-400 to-amber-500 text-white px-2.5 py-0.5 rounded-full text-[9px] font-bold shadow-sm flex items-center gap-1 uppercase tracking-wide"><i class="fa-solid fa-layer-group"></i> Grosir</span>`:''}
                    ${colorIndicator}
                    ${i.variantName?`<span class="bg-slate-100 text-slate-600 dark:bg-slate-700 dark:text-slate-300 px-2 py-0.5 rounded-full text-[9px] font-bold border border-slate-200 dark:border-slate-600 uppercase tracking-wide">${esc(i.variantName)}</span>`:''}
                    ${i.poTime?`<span class="amber-badge px-2 py-0.5 rounded-full text-[9px] font-bold flex items-center uppercase tracking-wide"><i class="fa-solid fa-clock mr-1"></i> PO ${esc(i.poTime)}</span>`:''}
                </div>
                
                <div class="flex justify-between items-end mt-auto pt-1">
                    <div>
                        ${w?`<p class="text-[10px] line-through text-slate-400 font-bold mb-0.5">${fCur(i.price)}</p>`:''}
                        <div class="flex items-baseline gap-1">
                            <p class="text-emerald-600 dark:text-emerald-400 font-bold text-base sm:text-lg leading-none tracking-tight">${fCur(e)}</p>
                            <p class="text-[9px] text-slate-400 font-bold uppercase tracking-widest">/${esc(i.unit||'pcs')}</p>
                        </div>
                    </div>
                    
                    <div class="flex bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl overflow-hidden shrink-0 shadow-sm h-9">
                        <button onclick="updCQty(${x},-1)" class="w-9 h-full flex items-center justify-center text-slate-500 hover:text-slate-700 hover:bg-slate-200 dark:text-slate-400 dark:hover:text-white dark:hover:bg-slate-700 font-bold transition-colors active:bg-slate-100"><i class="fa-solid fa-minus text-xs"></i></button>
                        <input type="number" step="0.01" class="w-10 h-full text-center text-xs font-bold bg-transparent text-slate-800 dark:text-white focus:outline-none border-x border-slate-200 dark:border-slate-700" value="${q}" onchange="setCQty(${x}, this.value)" ></i>
                        <button onclick="updCQty(${x},1)" class="w-9 h-full flex items-center justify-center text-slate-500 hover:text-emerald-600 hover:bg-emerald-50 dark:text-slate-400 dark:hover:text-emerald-400 dark:hover:bg-emerald-900/30 font-bold transition-colors active:bg-slate-100"><i class="fa-solid fa-plus text-xs"></i></button>
                    </div>
                </div>
            </div>
        </div>`;
    }).join(''));
    setIn('cart-subtotal', fCur(s));
};

window.setCQty = (i,v) => {
    let nv = parseFloat(v);
    if(isNaN(nv)||nv<=0) { cart.splice(i,1); }
    else {
        // FIX: batasi qty maks sesuai stok saat ini (jika manajemen stok aktif)
        const useStk = appData.store.useStock === true || appData.store.useStock === 'true';
        if (useStk) {
            const ci = cart[i];
            const p = appData.products.find(x => x.id === ci.id);
            if (p) {
                const avail = ci.variantName
                    ? (parseFloat(((p.variants||[]).find(vv => vv.name === ci.variantName)||{}).stock)||0)
                    : (parseFloat(p.stock)||0);
                if (nv > avail) { nv = avail; showToast(`Maks stok: ${avail}`); }
            }
        }
        cart[i].qty = parseFloat(nv.toFixed(2));
    }
    renderCart(); updCart();
};
window.updCQty = (i,c) => {
    let nv = parseFloat((parseFloat(cart[i].qty)+c).toFixed(2));
    if(nv<=0) { cart.splice(i,1); }
    else {
        // FIX: batasi qty maks sesuai stok saat ini (jika manajemen stok aktif)
        const useStk = appData.store.useStock === true || appData.store.useStock === 'true';
        if (useStk && c > 0) {
            const ci = cart[i];
            const p = appData.products.find(x => x.id === ci.id);
            if (p) {
                const avail = ci.variantName
                    ? (parseFloat(((p.variants||[]).find(vv => vv.name === ci.variantName)||{}).stock)||0)
                    : (parseFloat(p.stock)||0);
                if (nv > avail) { nv = avail; showToast(`Maks stok: ${avail}`); }
            }
        }
        cart[i].qty = nv;
    }
    renderCart(); updCart();
};
window.rmCart = i => { cart.splice(i,1); renderCart(); updCart(); };
window.validateCartToCheckout = () => {
    // PATCH: blokir admin yang sedang login — admin harus logout dulu sebelum bisa membuat pesanan
    if (window.isAdm) {
        showConfirm(
            "Akses Ditolak",
            "Anda sedang login sebagai Seller. Silakan logout terlebih dahulu untuk membuat pesanan sebagai pelanggan.",
            () => { logoutAdmin(); },
            "Logout Sekarang",
            false
        );
        return;
    }
    if(!cart.length) return;
    changeView('view-checkout');
};

// --- 11. CHECKOUT & CHECKOUT LOGIC ---
window.getLocation = () => {
    if(!navigator.geolocation) return showToast("GPS tidak didukung");
    el('btn-location').innerHTML = `<i class="fa-solid fa-spinner fa-spin text-sm"></i>`;
    navigator.geolocation.getCurrentPosition(p => {
        cust.lat = p.coords.latitude; cust.lng = p.coords.longitude;
        hide('btn-location'); show('location-status'); el('location-status').classList.add('flex');
        showToast("GPS Didapatkan");
    }, e => {
        el('btn-location').innerHTML = `<i class="fa-solid fa-location-crosshairs text-emerald-400"></i> Set GPS Maps`;
        showToast("Gagal akses GPS");
    }, {enableHighAccuracy: true, timeout: 15000});
};

window.applyVoucher = () => {
    const i = getV('voucher-input').toUpperCase();
    const f = (appData.vouchers || []).find(v => (v.code||'').toUpperCase() === i);
    show('voucher-msg-container');
    
    const currentSubtotal = cart.reduce((s,item) => s + (parseFloat(getEffP(item))||0) * (parseFloat(item.qty)||0), 0);
    
    if (f) {
        let hasTarget = true;
        
        // Cek apakah produk yang ditargetkan ada di keranjang
        if(f.targetProduct && f.targetProduct !== '') {
            const targetId = parseInt(f.targetProduct);
            hasTarget = cart.some(item => item.id === targetId);
        }

        if(f.targetProduct && f.targetProduct !== '' && !hasTarget) {
            vouch = null;
            setH('voucher-msg', `<i class="fa-solid fa-box mr-1"></i> Khusus Produk Tertentu!`);
            el('voucher-msg').className = "text-sm font-bold text-rose-500 dark:text-rose-400";
        }
        else if (f.minPurchase && parseFloat(f.minPurchase) > 0 && currentSubtotal < parseFloat(f.minPurchase)) {
            vouch = null;
            setH('voucher-msg', `<i class="fa-solid fa-circle-exclamation mr-1"></i> Minimal belanja ${fCur(f.minPurchase)}`);
            el('voucher-msg').className = "text-sm font-bold text-amber-500 dark:text-amber-400";
        } 
        else if (f.type.includes('shipping') && cust.deliveryMethod !== 'delivery') {
            vouch = null;
            setH('voucher-msg', `<i class="fa-solid fa-motorcycle mr-1"></i> Khusus pesanan dikirim kurir!`);
            el('voucher-msg').className = "text-sm font-bold text-rose-500 dark:text-rose-400";
        }
        else {
            vouch = f;
            setH('voucher-msg', `<i class="fa-solid fa-check-circle mr-1"></i> Voucher Diterapkan!`);
            el('voucher-msg').className = "text-sm font-bold text-emerald-600 dark:text-emerald-400";
        }
    } else if(i === ''){
        vouch = null; hide('voucher-msg-container');
        rPay(); // FIX: recalculate total saat voucher dikosongkan
    } else {
        vouch = null;
        setH('voucher-msg', `<i class="fa-solid fa-times-circle mr-1"></i> Kode Tidak Valid`);
        el('voucher-msg').className = "text-sm font-bold text-rose-500 dark:text-rose-400";
    }
    rPay();
};

window.validateAndGoToPayment = () => {
    if (appData.store.isDeliveryEnabled === false && appData.store.isPickupEnabled === false) return showToast("Toko tutup!");
    const n = getV('cust-name'), m = (document.querySelector('input[name="delivery-method"]:checked')||{}).value;
    if (!n || !m) return showToast("Lengkapi form nama!");
    
    // Validasi nomor WhatsApp wajib
    let waNum = getV('cust-wa').replace(/\D/g,'');
    if (!waNum || waNum.length < 9) return showToast("Nomor WhatsApp wajib diisi! (min. 9 digit)");
    if (waNum.startsWith('0')) waNum = '62' + waNum.substring(1);
    else if (!waNum.startsWith('62')) waNum = '62' + waNum;
    
    cust.name = n; cust.deliveryMethod = m; cust.note = getV('cust-note'); cust.wa = waNum;
    if (m === 'delivery') {
        cust.address = getV('cust-address');
        if(!cust.address || !cust.lat || !cust.lng) return showToast("Alamat & GPS wajib!");
        cust.distance = getDist(parseFloat(appData.store.lat||0), parseFloat(appData.store.lng||0), cust.lat, cust.lng) || 0;
    } else {
        cust.address = "Ambil di Toko"; cust.distance = 0;
    }
    
    if(vouch && vouch.type.includes('shipping') && m !== 'delivery') vouch = null;
    if(el('voucher-input') && !vouch) { el('voucher-input').value=''; hide('voucher-msg-container'); }
    changeView('view-payment');
};

window.toggleDeliveryMethod = () => { toggleCls('address-container', 'hidden', (document.querySelector('input[name="delivery-method"]:checked')||{}).value === 'pickup'); };

// =====================================================================
// FITUR BARU: PROGRAM LOYALITAS MEMBER — deteksi member saat checkout
// =====================================================================
window.checkMemberStatus = () => {
    clearTimeout(memberCheckTimer);
    memberCheckTimer = setTimeout(async () => {
        const waNum = window.normalizeWA(getV('cust-wa'));
        const banner = el('member-status-banner');
        if (!banner) return;
        if (!waNum || waNum.length < 10) { hide(banner); hide('payment-option-tempo'); currentMember = null; selectedReward = null; return; }
        try {
            const doc = await db.collection("freshmart").doc("cms_data").collection("customers").doc(waNum).get();
            if (doc.exists) {
                currentMember = doc.data();
                banner.className = 'mt-3 p-4 rounded-2xl border border-emerald-200 dark:border-emerald-800 bg-emerald-50 dark:bg-emerald-900/20 flex items-center justify-between gap-3';
                banner.innerHTML = `<p class="text-[11px] font-bold text-emerald-700 dark:text-emerald-400 leading-snug"><i class="fa-solid fa-circle-check mr-1"></i>Nomor Anda terdaftar sebagai pelanggan toko kami!</p><button type="button" onclick="openMemberModal()" class="shrink-0 bg-emerald-500 hover:bg-emerald-600 text-white text-[10px] font-bold uppercase tracking-widest px-3.5 py-2.5 rounded-xl shadow-sm active:scale-95 transition-all whitespace-nowrap">Lihat Data Saya</button>`;
                show(banner); show('payment-option-tempo');
            } else {
                currentMember = null; selectedReward = null; hide(banner); hide('payment-option-tempo');
            }
        } catch(e) { /* diam saja kalau gagal cek -- bukan bagian wajib checkout */ }
    }, 500); // debounce supaya tidak query tiap ketikan huruf
};

window.openMemberModal = () => {
    if (!currentMember) return;
    let m = document.getElementById('member-modal');
    if (!m) {
        m = document.createElement('div');
        m.id = 'member-modal';
        m.className = 'fixed inset-0 z-[115] bg-slate-900/70 backdrop-blur-sm flex items-end sm:items-center justify-center p-0 sm:p-5';
        m.onclick = (e) => { if (e.target === m) closeMemberModal(); };
        document.body.appendChild(m);
    }
    m.innerHTML = `
        <div class="bg-white dark:bg-slate-900 w-full max-w-lg rounded-t-[2rem] sm:rounded-[2rem] max-h-[85vh] flex flex-col shadow-2xl border border-slate-200 dark:border-slate-700">
            <div class="p-5 sm:p-6 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center shrink-0">
                <h3 class="font-bold text-slate-800 dark:text-white text-base flex items-center gap-2"><i class="fa-solid fa-crown text-amber-400"></i> Data Member Saya</h3>
                <button onclick="closeMemberModal()" class="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 hover:bg-rose-100 hover:text-rose-500 flex items-center justify-center transition-all"><i class="fa-solid fa-xmark"></i></button>
            </div>
            <div class="p-5 sm:p-6 overflow-y-auto flex-1 space-y-5" id="member-modal-body"></div>
        </div>`;
    rMemberModalBody();
    m.style.opacity = '0'; m.style.display = 'flex';
    requestAnimationFrame(() => { m.style.transition = 'opacity 0.25s ease'; m.style.opacity = '1'; });
    pushModalHistory('member');
};

window.rMemberModalBody = () => {
    const activeRewards = (appData.rewards||[]).filter(r => r.isActive !== 'false' && r.isActive !== false);
    const pts = parseFloat(currentMember.points) || 0;
    const rewardsHtml = activeRewards.length ? activeRewards.map(r => {
        const stockOk = (parseFloat(r.stock)||0) > 0;
        const canClaim = pts >= (parseFloat(r.pointsCost)||0) && stockOk;
        const isSelected = selectedReward && selectedReward.id === r.id;
        return `
        <div class="flex items-center gap-3 p-4 rounded-[1.25rem] border ${isSelected ? 'border-violet-400 bg-violet-50 dark:bg-violet-900/20' : 'border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/50'}">
            ${r.img ? `<img src="${esc(r.img)}" class="w-14 h-14 rounded-xl object-cover border border-slate-200 dark:border-slate-700 shrink-0" onerror="this.style.display='none'" loading="lazy"></i>` : `<div class="w-14 h-14 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-300 shrink-0"><i class="fa-solid fa-gift text-xl"></i></div>`}
            <div class="min-w-0 flex-1">
                <p class="text-xs font-bold text-slate-800 dark:text-white truncate">${esc(r.name)}</p>
                <p class="text-[11px] font-bold text-violet-500 mt-0.5"><i class="fa-solid fa-star mr-1"></i>${parseFloat(r.pointsCost)||0} Poin</p>
                ${!stockOk ? `<p class="text-[10px] font-bold text-rose-500 mt-0.5">Stok hadiah kosong</p>` : ''}
            </div>
            ${isSelected
                ? `<button type="button" onclick="deselectReward()" class="shrink-0 bg-rose-500 hover:bg-rose-600 text-white text-[10px] font-bold uppercase px-3 py-2.5 rounded-xl active:scale-95 transition-all whitespace-nowrap">Batal</button>`
                : `<button type="button" ${canClaim?'':'disabled'} onclick="selectReward(${r.id})" class="shrink-0 ${canClaim ? 'bg-violet-500 hover:bg-violet-600 text-white active:scale-95' : 'bg-slate-200 dark:bg-slate-700 text-slate-400 cursor-not-allowed'} text-[10px] font-bold uppercase px-3 py-2.5 rounded-xl transition-all whitespace-nowrap">Pilih</button>`}
        </div>`;
    }).join('') : `<p class="text-[11px] font-bold text-slate-400 text-center py-3">Belum ada program hadiah yang tersedia.</p>`;

    setH('member-modal-body', `
        <div class="bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-[1.5rem] p-5 text-white shadow-lg">
            <p class="text-[10px] font-bold uppercase tracking-widest opacity-80">Nama</p>
            <p class="text-base font-bold mb-3">${esc(currentMember.name)}</p>
            <p class="text-[10px] font-bold uppercase tracking-widest opacity-80">No. WhatsApp</p>
            <p class="text-sm font-bold mb-3">+${esc(currentMember.phone)}</p>
            <div class="flex items-center gap-2 bg-white/15 rounded-xl px-4 py-3 mt-2">
                <i class="fa-solid fa-star text-amber-300 text-lg"></i>
                <p class="text-xl font-bold">${pts}</p>
                <p class="text-[11px] font-bold opacity-90">Poin Terkumpul</p>
            </div>
        </div>
        <div>
            <p class="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-2.5">Tukar Poin dengan Hadiah</p>
            <div class="space-y-2.5">${rewardsHtml}</div>
        </div>
        ${selectedReward ? `<div class="bg-violet-50 dark:bg-violet-900/20 border border-violet-200 dark:border-violet-800 rounded-xl p-3.5 text-[11px] font-bold text-violet-600 dark:text-violet-400"><i class="fa-solid fa-circle-info mr-1"></i>Hadiah "<b>${esc(selectedReward.name)}</b>" akan otomatis ditukar (poin dipotong) saat pesanan ini Anda buat.</div>` : ''}
    `);
};

window.selectReward = (rewardId) => {
    const r = (appData.rewards||[]).find(x => x.id === rewardId);
    if (!r) return;
    const pts = parseFloat(currentMember.points) || 0;
    if (pts < (parseFloat(r.pointsCost)||0)) return showToast("Poin Anda belum cukup untuk hadiah ini!");
    if ((parseFloat(r.stock)||0) <= 0) return showToast("Maaf, stok hadiah ini sedang kosong!");
    selectedReward = { id: r.id, name: r.name, pointsCost: parseFloat(r.pointsCost)||0 };
    rMemberModalBody();
    showToast(`Hadiah "${r.name}" dipilih! Lanjutkan checkout untuk menukarnya.`);
};
window.deselectReward = () => { selectedReward = null; rMemberModalBody(); };

window.closeMemberModal = (fH=false) => {
    const m = document.getElementById('member-modal');
    if (!m || m.style.display === 'none') return;
    m.style.opacity = '0'; m.style.transition = 'opacity 0.25s ease';
    setTimeout(() => { m.style.display = 'none'; m.style.opacity = ''; m.style.transition = ''; }, 250);
    if (!fH && oMods.length && oMods[oMods.length-1] === 'member') { oMods.pop(); history.back(); }
};

// =====================================================================
// FITUR BARU: ULASAN PELANGGAN -- hanya bisa diisi lewat riwayat pesanan
// yang statusnya SELESAI (lihat tombol "Berikan Ulasan" di detail pesanan).
// Foto bukti diupload ke Google Drive yang sama seperti gambar lainnya.
// =====================================================================
window.reviewPhotoFile = null;
window.reviewRating = 0;

window.openReviewModal = (orderId, productId, variantName, productName, customerName) => {
    let m = document.getElementById('review-modal');
    if (!m) {
        m = document.createElement('div');
        m.id = 'review-modal';
        m.className = 'fixed inset-0 z-[120] bg-slate-900/70 backdrop-blur-sm flex items-end sm:items-center justify-center p-0 sm:p-5';
        m.onclick = (e) => { if (e.target === m) closeReviewModal(); };
        document.body.appendChild(m);
    }
    window.reviewPhotoFile = null;
    window.reviewRating = 0;
    m.innerHTML = `
        <div class="bg-white dark:bg-slate-900 w-full max-w-lg rounded-t-[2rem] sm:rounded-[2rem] max-h-[85vh] flex flex-col shadow-2xl border border-slate-200 dark:border-slate-700">
            <div class="p-5 sm:p-6 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center shrink-0">
                <div class="min-w-0">
                    <h3 class="font-bold text-slate-800 dark:text-white text-base flex items-center gap-2"><i class="fa-solid fa-star text-amber-400"></i> Berikan Ulasan</h3>
                    <p class="text-[10px] font-bold text-slate-500 mt-0.5 uppercase tracking-widest truncate">${esc(productName)}</p>
                </div>
                <button onclick="closeReviewModal()" class="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 hover:bg-rose-100 hover:text-rose-500 flex items-center justify-center transition-all shrink-0"><i class="fa-solid fa-xmark"></i></button>
            </div>
            <div class="p-5 sm:p-6 overflow-y-auto flex-1 space-y-5">
                <div class="text-center">
                    <p class="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-3">Beri Bintang</p>
                    <div class="flex items-center justify-center gap-2" id="review-star-picker">
                        ${[1,2,3,4,5].map(n => `<button type="button" onclick="setReviewRating(${n})" class="review-star text-3xl text-slate-300 dark:text-slate-600 transition-all hover:scale-110" data-star="${n}"><i class="fa-solid fa-star"></i></button>`).join('')}
                    </div>
                </div>
                <div>
                    <label class="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-widest">Ceritakan Pengalaman Anda</label>
                    <textarea id="review-text" rows="4" placeholder="Bagaimana kualitas produknya?" class="admin-input !py-3 bg-slate-50 dark:bg-slate-900 shadow-inner"></textarea>
                </div>
                <div>
                    <label class="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-widest">Unggah Foto (Opsional)</label>
                    <input type="file" accept="image/*" id="review-photo-input" onchange="handleReviewPhotoSelect(event)" class="hidden"></i>
                    <div id="review-photo-preview-wrap" class="hidden mb-2.5 relative w-24 h-24">
                        <img id="review-photo-preview" class="w-24 h-24 rounded-xl object-cover border border-slate-200 dark:border-slate-700" loading="lazy"></i>
                        <button type="button" onclick="removeReviewPhoto()" class="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-rose-500 text-white flex items-center justify-center text-[10px] shadow"><i class="fa-solid fa-xmark"></i></button>
                    </div>
                    <button type="button" onclick="document.getElementById('review-photo-input').click()" id="review-photo-btn" class="w-full py-3 rounded-xl border-2 border-dashed border-slate-300 dark:border-slate-700 text-slate-400 text-[11px] font-bold uppercase tracking-widest flex items-center justify-center gap-2 hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition-all"><i class="fa-solid fa-camera"></i> Tambah Foto Bukti</button>
                </div>
            </div>
            <div class="p-5 border-t border-slate-100 dark:border-slate-800 shrink-0">
                <button id="review-submit-btn" class="btn-primary py-3.5 text-sm shadow-glow !rounded-xl flex items-center justify-center gap-2"><i class="fa-solid fa-paper-plane"></i> Kirim Ulasan</button>
            </div>
        </div>`;
    el('review-submit-btn').onclick = () => submitReview(orderId, productId, variantName, productName, customerName);
    m.style.opacity = '0'; m.style.display = 'flex';
    requestAnimationFrame(() => { m.style.transition = 'opacity 0.25s ease'; m.style.opacity = '1'; });
    pushModalHistory('review');
};

window.setReviewRating = (n) => {
    window.reviewRating = n;
    document.querySelectorAll('.review-star').forEach(btn => {
        const starN = parseInt(btn.dataset.star);
        btn.classList.toggle('text-amber-400', starN <= n);
        btn.classList.toggle('text-slate-300', starN > n);
        btn.classList.toggle('dark:text-slate-600', starN > n);
    });
};

window.handleReviewPhotoSelect = (event) => {
    const file = event.target.files[0];
    if (!file) return;
    if (!file.type.startsWith('image/')) { showToast('Hanya file gambar yang diizinkan!'); return; }
    if (file.size > 5 * 1024 * 1024) { showToast('Ukuran gambar max 5MB!'); return; }
    window.reviewPhotoFile = file;
    const reader = new FileReader();
    reader.onload = (e) => {
        el('review-photo-preview').src = e.target.result;
        show('review-photo-preview-wrap');
        hide('review-photo-btn');
    };
    reader.readAsDataURL(file);
};
window.removeReviewPhoto = () => {
    window.reviewPhotoFile = null;
    hide('review-photo-preview-wrap');
    show('review-photo-btn');
    const inp = el('review-photo-input'); if (inp) inp.value = '';
};

window.closeReviewModal = (fH=false) => {
    const m = document.getElementById('review-modal');
    if (!m || m.style.display === 'none') return;
    m.style.opacity = '0'; m.style.transition = 'opacity 0.25s ease';
    setTimeout(() => { m.style.display = 'none'; m.style.opacity = ''; m.style.transition = ''; }, 250);
    if (!fH && oMods.length && oMods[oMods.length-1] === 'review') { oMods.pop(); history.back(); }
};

window.submitReview = async (orderId, productId, variantName, productName, customerName) => {
    if (!window.reviewRating || window.reviewRating < 1) return showToast('Silakan beri bintang terlebih dahulu!');
    if (isSaving) return; isSaving = true;
    sLoad('Mengirim ulasan...');
    try {
        let photoUrl = '';
        if (window.reviewPhotoFile) {
            const uploaded = await window.uploadBuktiToGDrive(window.reviewPhotoFile, 'review-' + orderId);
            if (uploaded) photoUrl = uploaded;
            else showToast('Foto gagal diupload, ulasan tetap dikirim tanpa foto.');
        }
        const reviewId = Date.now();
        // FIX BUG KRITIS: field yang bernilai `undefined` (misal id produk tidak
        // ketemu/hilang) membuat Firestore.set() GAGAL TOTAL dengan error
        // "Unsupported field value: undefined" -- padahal foto SUDAH TERLANJUR
        // ke-upload ke Google Drive sebelumnya, jadi terasa "upload berhasil,
        // tapi simpan error, dan uploadnya sia-sia". Sekarang setiap field
        // WAJIB dijamin tidak pernah undefined sebelum dikirim ke Firestore.
        const reviewDoc = {
            id: reviewId,
            orderId: orderId || '',
            productId: (productId !== undefined && productId !== null) ? productId : 0,
            variantName: variantName || '',
            productName: productName || '',
            customerName: customerName || 'Pelanggan',
            rating: window.reviewRating,
            text: getV('review-text') || '',
            photoUrl: photoUrl || '',
            adminReply: '',
            isVisible: true,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        };
        // CATATAN: tidak menyimpan nomor WA pelanggan di sini -- ulasan ini publik
        // (tampil di halaman produk), jadi data pribadi sengaja tidak disertakan.
        await db.collection("freshmart").doc("cms_data").collection("reviews").doc(reviewId.toString()).set(reviewDoc);
        closeReviewModal();
        showToast('✅ Terima kasih atas ulasan Anda!');
        openCustomerOrderDetail(orderId); // muat ulang supaya tombol "Berikan Ulasan" untuk item ini hilang
    } catch(e) {
        // FIX: tampilkan pesan error ASLI (bukan cuma "coba lagi") supaya kalau
        // masih ada masalah lain di kemudian hari, penyebabnya langsung kelihatan.
        console.error('Gagal mengirim ulasan:', e);
        showToast('Gagal mengirim ulasan: ' + (e.message || 'Error tidak diketahui') );
    }
    finally { isSaving = false; hLoad(); }
};

// FITUR BARU: muat & tampilkan ulasan pelanggan di detail produk (bukti sosial/testimoni)
window.loadProductReviews = async (productId) => {
    const container = el('product-modal-reviews-container');
    if (!container) return;
    setH('product-modal-reviews-container', `<div class="text-center py-6"><i class="fa-solid fa-spinner fa-spin text-xl text-slate-300"></i></div>`);
    try {
        const snap = await db.collection("freshmart").doc("cms_data").collection("reviews").where("productId", "==", productId).get();
        let reviews = snap.docs.map(d => d.data()).filter(r => r.isVisible !== false);
        reviews.sort((a, b) => {
            const ta = a.createdAt && a.createdAt.toMillis ? a.createdAt.toMillis() : 0;
            const tb = b.createdAt && b.createdAt.toMillis ? b.createdAt.toMillis() : 0;
            return tb - ta;
        });

        const avgRating = reviews.length ? (reviews.reduce((s,r) => s + (parseFloat(r.rating)||0), 0) / reviews.length) : 0;
        const starRow = (n) => Array.from({length:5}, (_,idx) => `<i class="fa-solid fa-star ${idx < Math.round(n) ? 'text-amber-400' : 'text-slate-200 dark:text-slate-700'}"></i>`).join('');

        let header = `
            <div class="flex items-center justify-between mb-4">
                <h4 class="font-bold text-slate-800 dark:text-white text-sm flex items-center gap-2"><i class="fa-solid fa-comment-dots text-amber-400"></i> Ulasan Pelanggan</h4>
                ${reviews.length ? `<div class="flex items-center gap-1.5"><span class="flex text-xs">${starRow(avgRating)}</span><span class="text-xs font-bold text-slate-600 dark:text-slate-300">${avgRating.toFixed(1)}</span><span class="text-[10px] font-bold text-slate-400">(${reviews.length})</span></div>` : ''}
            </div>`;

        if (!reviews.length) {
            setH('product-modal-reviews-container', header + `<p class="text-[11px] font-bold text-slate-400 text-center py-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl">Belum ada ulasan untuk produk ini. Jadilah yang pertama memberi ulasan setelah pesanan Anda selesai!</p>`);
            return;
        }

        const list = reviews.map(r => {
            let dateStr = '';
            try { if (r.createdAt && r.createdAt.toDate) dateStr = r.createdAt.toDate().toLocaleDateString('id-ID', {day:'numeric', month:'short', year:'numeric'}); } catch(e) {}
            return `
            <div class="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-2xl border border-slate-100 dark:border-slate-700/60">
                <div class="flex items-center justify-between mb-1.5">
                    <p class="text-xs font-bold text-slate-800 dark:text-white">${esc(r.customerName || 'Pelanggan')}</p>
                    <span class="text-[9px] font-bold text-slate-400">${dateStr}</span>
                </div>
                <div class="flex text-[11px] mb-2">${starRow(r.rating)}</div>
                ${r.variantName ? `<p class="text-[10px] font-bold text-slate-400 mb-1.5">Varian: ${esc(r.variantName)}</p>` : ''}
                ${r.text ? `<p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-2">${esc(r.text)}</p>` : ''}
                ${r.photoUrl ? `<img src="${esc(r.photoUrl)}" onclick="window.open('${esc(r.photoUrl)}','_blank')" class="w-20 h-20 rounded-xl object-cover border border-slate-200 dark:border-slate-700 cursor-pointer mb-2" onerror="this.style.display='none'" loading="lazy"></i>` : ''}
                ${r.adminReply ? `<div class="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-3 mt-2"><p class="text-[9px] font-bold text-[var(--color-primary)] uppercase tracking-widest mb-1"><i class="fa-solid fa-store mr-1"></i>Balasan Toko</p><p class="text-[11px] text-slate-600 dark:text-slate-300">${esc(r.adminReply)}</p></div>` : ''}
            </div>`;
        }).join('');

        setH('product-modal-reviews-container', header + `<div class="space-y-3">${list}</div>`);
    } catch(e) {
        console.error('Gagal memuat ulasan:', e);
        setH('product-modal-reviews-container', '');
    }
};

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
    let dp = parseFloat(document.getElementById('tempo-dp-input').value) || 0;
    let total = cart.reduce((s,i) => s + (parseFloat(getEffP(i))||0) * (parseFloat(i.qty)||0), 0);
    let sC = 0, productDisc = 0, shippingDisc = 0;
    if (cust.deliveryMethod === 'delivery') {
        sC = Math.ceil((parseFloat(cust.distance)||0) * (parseFloat(appData.store.costPerKm)||0) / 500) * 500;
    }
    if (vouch) {
        if (vouch.type === 'product_nominal') productDisc = parseFloat(vouch.discount);
        else if (vouch.type === 'product_percent') productDisc = total * parseFloat(vouch.discount)/100;
        else if (vouch.type === 'shipping_nominal') shippingDisc = Math.min(sC, parseFloat(vouch.discount));
        else if (vouch.type === 'shipping_percent') shippingDisc = Math.min(sC, sC * parseFloat(vouch.discount)/100);
    }
    let subAfterDisc = Math.max(0, total - productDisc);
    let shippingAfterDisc = Math.max(0, sC - shippingDisc);
    let ppnAmount = 0;
    if (appData.store.ppnEnabled === 'true' || appData.store.ppnEnabled === true) {
        let ppnRate = parseFloat(appData.store.ppnRate) || 0;
        ppnAmount = (subAfterDisc + shippingAfterDisc) * (ppnRate/100);
    }
    let pointsDisc = 0;
    if (window.useMemberPoints && currentMember) {
        pointsDisc = Math.min(subAfterDisc + shippingAfterDisc + ppnAmount, parseFloat(currentMember.points) || 0);
    }
    let grandTotal = subAfterDisc + shippingAfterDisc + ppnAmount - pointsDisc;
    if (dp > grandTotal) {
        dp = grandTotal;
        document.getElementById('tempo-dp-input').value = dp;
    }
    let balance = grandTotal - dp;
    document.getElementById('tempo-balance-display').innerText = fCur(balance);
};

const rPay = () => {
    const sub = cart.reduce((s,i) => s + (parseFloat(getEffP(i))||0) * (parseFloat(i.qty)||0), 0);
    let sC = 0, shippingDisc = 0, productDisc = 0;
    
    if (cust.deliveryMethod === 'delivery') {
        sC = Math.ceil((parseFloat(cust.distance)||0) * (parseFloat(appData.store.costPerKm)||0) / 500) * 500;
    }
    
    if(vouch){
        let eligibleSubtotal = sub;
        
        // Logika Produk Spesifik
        if(vouch.targetProduct && vouch.targetProduct !== '') {
            const targetId = parseInt(vouch.targetProduct);
            const eligibleItems = cart.filter(i => i.id === targetId);
            eligibleSubtotal = eligibleItems.reduce((s,i) => s + (parseFloat(getEffP(i))||0) * (parseFloat(i.qty)||0), 0);
        }

        if(vouch.type === 'shipping_free') {
            shippingDisc = sC; 
        } 
        else if(vouch.type === 'shipping_flat') {
            shippingDisc = parseFloat(vouch.value)||0; 
        } 
        else if(vouch.type === 'percent') {
            let calcDisc = eligibleSubtotal * ((parseFloat(vouch.value)||0) / 100);
            if(vouch.maxDiscount && parseFloat(vouch.maxDiscount) > 0) calcDisc = Math.min(calcDisc, parseFloat(vouch.maxDiscount));
            productDisc = calcDisc;
        } 
        else {
            productDisc = parseFloat(vouch.value)||0;
            productDisc = Math.min(productDisc, eligibleSubtotal);
        }
    }
    
    shippingDisc = Math.min(shippingDisc, sC);
    productDisc = Math.min(productDisc, sub);
    
    // --- PPN CALCULATION ---
    const ppnEnabled = appData.store.ppnEnabled === true || appData.store.ppnEnabled === 'true';
    const ppnRate = parseFloat(appData.store.ppnRate) || 11;
    const baseAfterDisc = Math.max(0, (sub - productDisc) + (sC - shippingDisc));
    const ppnAmount = ppnEnabled ? Math.round(baseAfterDisc * ppnRate / 100) : 0;
    const t = baseAfterDisc + ppnAmount;
    
    setIn('summary-subtotal', fCur(sub));
    toggleCls('summary-shipping-row', 'hidden', cust.deliveryMethod !== 'delivery');
    
    const discRow = el('summary-discount-row');
    if(discRow) {
        if(productDisc > 0 || shippingDisc > 0) {
            discRow.classList.remove('hidden'); let txtHtml = '';
            if(productDisc > 0) txtHtml += `<div class="flex justify-between items-center w-full mt-1.5"><p class="text-xs font-bold text-slate-500">Diskon Promo</p><p class="text-[13px] font-bold text-rose-500">-${fCur(productDisc)}</p></div>`;
            if(shippingDisc > 0) txtHtml += `<div class="flex justify-between items-center w-full mt-1.5"><p class="text-xs font-bold text-slate-500">Diskon Ongkir</p><p class="text-[13px] font-bold text-rose-500">-${fCur(shippingDisc)}</p></div>`;
            discRow.innerHTML = txtHtml;
        } else { discRow.classList.add('hidden'); }
    }
    
    if (cust.deliveryMethod === 'delivery') {
        setIn('summary-shipping', fCur(sC));
        setIn('summary-distance', `(${cust.distance.toFixed(1)}km)`);
    }
    
    setIn('summary-total', fCur(t));
    // PPN row
    const ppnRow = el('summary-ppn-row');
    if (ppnRow) {
        if (ppnEnabled && ppnAmount > 0) {
            ppnRow.classList.remove('hidden');
            setIn('summary-ppn-label', `PPN (${ppnRate}%)`);
            setIn('summary-ppn', fCur(ppnAmount));
        } else {
            ppnRow.classList.add('hidden');
        }
    }
    setIn('payment-cust-name', cust.name || '-');
    if(el('payment-cust-wa')) el('payment-cust-wa').textContent = cust.wa ? '+' + cust.wa : '-';
    setIn('payment-cust-method', cust.deliveryMethod === 'delivery' ? `Kurir (${cust.distance.toFixed(1)}km)` : 'Ambil di Toko');
    setIn('payment-cust-address', cust.address || '-');
    
    setH('payment-items-preview', cart.map(i => {
        const variantText = i.variantName ? `<span class="bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300 px-1.5 py-0.5 rounded-lg text-[9px] font-bold">${esc(i.variantName)}</span>` : '';
        const poText = i.poTime ? `<span class="amber-badge px-1.5 py-0.5 rounded-lg text-[8px] font-bold uppercase">PO ${esc(i.poTime)}</span>` : '';
        return `
        <div class="flex justify-between items-center bg-white dark:bg-slate-800 p-4 rounded-[1.25rem] border border-slate-200 dark:border-slate-700 shadow-sm min-w-0">
            <div class="flex items-center gap-3.5 min-w-0">
                <img loading="lazy" src="${esc(i.img)}" alt="${esc(i.name)}" class="w-12 h-12 rounded-xl object-cover border border-slate-200 dark:border-slate-700 shrink-0" onerror="this.onerror=null;this.src='https://placehold.co/400?text=No+Image'">
                <div class="min-w-0">
                    <p class="text-sm font-bold text-slate-800 dark:text-white truncate mb-1" title="${esc(i.name)}">${esc(i.name)}</p>
                    ${(i.variantName || i.poTime) ? `
                    <div class="flex flex-wrap gap-1 mb-1">
                        ${variantText}
                        ${poText}
                    </div>
                    ` : ''}
                    <p class="text-[11px] text-[var(--color-primary)] font-bold">${parseFloat(i.qty)} ${esc(i.unit||'pcs')} x ${fCur(getEffP(i))}</p>
                </div>
            </div>
            <div class="text-sm font-bold text-slate-900 dark:text-white whitespace-nowrap ml-3 shrink-0">${fCur(getEffP(i)*parseFloat(i.qty))}</div>
        </div>
        `;
    }).join('')
        + (selectedReward ? `<div class="flex justify-between items-center bg-violet-50 dark:bg-violet-900/20 p-4 rounded-[1.25rem] border border-violet-200 dark:border-violet-800 shadow-sm min-w-0"><div class="flex items-center gap-3.5 min-w-0"><div class="w-12 h-12 rounded-xl bg-violet-500 text-white flex items-center justify-center shrink-0"><i class="fa-solid fa-gift"></i></div><div class="min-w-0"><p class="text-sm font-bold text-violet-700 dark:text-violet-300 truncate">${esc(selectedReward.name)}</p><p class="text-[11px] text-violet-500 font-bold mt-1"><i class="fa-solid fa-star mr-1"></i>Tukar ${selectedReward.pointsCost} Poin (Gratis)</p></div></div><button type="button" onclick="deselectReward(); rPay();" class="text-[10px] font-bold text-rose-500 uppercase shrink-0 ml-3">Batal</button></div>` : ''));
        
    if(cust.note){ setIn('payment-note-text', `"${esc(cust.note)}"`); show('payment-note-preview'); } else hide('payment-note-preview');
    
    setH('dynamic-banks-container', appData.banks?.length ? appData.banks.map(b => `<div class="bg-white dark:bg-slate-800 p-4 rounded-[1.25rem] border border-slate-200 dark:border-slate-700 shadow-sm"><p class="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">Bank ${esc(b.bankName)}</p><p class="text-lg font-bold text-[var(--color-primary)] tracking-wide">${esc(b.bankAccount)}</p><p class="text-xs text-slate-500 dark:text-slate-400 font-medium mt-1.5">a.n <span class="font-bold text-slate-700 dark:text-white">${esc(b.bankOwner)}</span></p></div>`).join('') : '<div class="bg-rose-50 dark:bg-rose-900/20 border border-rose-200 p-4 rounded-[1.25rem] text-center"><p class="text-sm text-rose-500 dark:text-rose-400 font-bold">Rekening belum diatur.</p></div>');
    
    const co = el('payment-option-cashier'), cc = el('payment-option-cod');
    if (co && cc) {
        if(cust.deliveryMethod === 'pickup'){
            show('payment-option-cashier'); hide('payment-option-cod');
            if((document.querySelector('input[name="payment"]:checked')||{}).value === 'cod') document.querySelector('input[value="cashier"]').checked = true;
        } else {
            hide('payment-option-cashier'); show('payment-option-cod');
            if((document.querySelector('input[name="payment"]:checked')||{}).value === 'cashier') document.querySelector('input[value="transfer"]').checked = true;
        }
        togglePaymentDetails();
    }
    // PATCH B8: null-check sebelum akses tnc-checkbox (cegah TypeError kalau DOM belum siap)
    const tncEl = el('tnc-checkbox');
    if (tncEl) { tncEl.checked = false; toggleOrderButton(); }
};

window.toggleOrderButton = () => { 
    const tnc = el('tnc-checkbox'), btn = el('btn-process-order');
    if (!tnc || !btn) return;
    tnc.checked ? btn.classList.remove('btn-disabled') : btn.classList.add('btn-disabled');
};

window.processOrder = async () => {
    if (!el('tnc-checkbox').checked || isSaving) return;

    // PATCH: blokir admin yang sedang login — lapisan kedua (defence in depth)
    if (window.isAdm) {
        return showToast("Anda login sebagai Seller. Logout dulu untuk membuat pesanan.");
    }

    const lO = sL('freshmart_last_order');
    if (lO && (Date.now() - parseInt(lO)) < 60000) return showToast("Tunggu 1 menit untuk pesanan baru!");
    

    
    // SECURITY PATCH: Validasi & sinkronisasi harga dari appData (cegah manipulasi localStorage)
    let priceWasTampered = false;
    cart.forEach(cartItem => {
        const serverProd = appData.products.find(p => p.id === cartItem.id);
        if (!serverProd) return;
        const serverPrice = cartItem.variantName
            ? ((serverProd.variants||[]).find(v => v.name === cartItem.variantName)||{}).price ?? serverProd.price
            : serverProd.price;
        if (serverPrice !== undefined && Math.abs(cartItem.price - serverPrice) > 1) {
            console.warn('[Security] Harga dikoreksi server:', cartItem.name, cartItem.price, '->', serverPrice);
            cartItem.price = serverPrice;
            priceWasTampered = true;
        }
    });
    if (priceWasTampered) {
        ssL('freshmart_cart', JSON.stringify(cart));
        renderCart();
        rPay();
        return showToast("Harga produk telah diperbarui. Periksa kembali sebelum order.");
    }
    
    isSaving = true; sLoad('Proses Pesanan...');
    
    try {
        const sub = cart.reduce((s,i) => s + (parseFloat(getEffP(i))||0) * (parseFloat(i.qty)||0), 0);
        let sC = 0, shippingDisc = 0, productDisc = 0;
        
        if (cust.deliveryMethod === 'delivery') {
            sC = Math.ceil((parseFloat(cust.distance)||0) * (parseFloat(appData.store.costPerKm)||0) / 500) * 500;
        }
        
        // --- VALIDASI STOK AWAL (dari cache lokal — untuk UX cepat) ---
        // Catatan: ini hanya pengecekan awal berbasis data lokal agar pengguna
        // mendapat umpan balik cepat. Validasi DEFINITIF dilakukan di dalam
        // Firestore transaction di bawah (membaca langsung dari server).
        const useStk = appData.store.useStock === true || appData.store.useStock === 'true';
        if (useStk) {
            for (const cartItem of cart) {
                const serverProd = appData.products.find(p => p.id === cartItem.id);
                if (!serverProd) continue;
                const qty = parseFloat(cartItem.qty) || 0;
                if (cartItem.variantName) {
                    const variant = (serverProd.variants||[]).find(v => v.name === cartItem.variantName);
                    const stk = parseFloat(variant && variant.stock !== undefined ? variant.stock : 0);
                    if (stk < qty) {
                        isSaving = false; hLoad();
                        return showToast(`Stok ${cartItem.name} (${cartItem.variantName}) tidak cukup! Sisa: ${stk}`);
                    }
                } else {
                    const stk = parseFloat(serverProd.stock !== undefined ? serverProd.stock : 0);
                    if (stk < qty) {
                        isSaving = false; hLoad();
                        return showToast(`Stok ${cartItem.name} tidak cukup! Sisa: ${stk}`);
                    }
                }
            }
        }
        
        if(vouch){
            let eligibleSubtotal = sub;
            if(vouch.targetProduct && vouch.targetProduct !== '') {
                const targetId = parseInt(vouch.targetProduct);
                const eligibleItems = cart.filter(i => i.id === targetId);
                eligibleSubtotal = eligibleItems.reduce((s,i) => s + (parseFloat(getEffP(i))||0) * (parseFloat(i.qty)||0), 0);
            }

            if(vouch.minPurchase && parseFloat(vouch.minPurchase) > 0 && sub < parseFloat(vouch.minPurchase)) { vouch = null; } 
            else if(vouch.targetProduct && vouch.targetProduct !== '' && eligibleSubtotal === 0) { vouch = null; }
            else if(vouch.type.includes('shipping') && cust.deliveryMethod !== 'delivery') { vouch = null; }
            else {
                if(vouch.type === 'shipping_free') shippingDisc = sC;
                else if(vouch.type === 'shipping_flat') shippingDisc = parseFloat(vouch.value)||0;
                else if(vouch.type === 'percent') {
                    let calcDisc = eligibleSubtotal * ((parseFloat(vouch.value)||0) / 100);
                    if(vouch.maxDiscount && parseFloat(vouch.maxDiscount) > 0) calcDisc = Math.min(calcDisc, parseFloat(vouch.maxDiscount));
                    productDisc = calcDisc;
                } 
                else {
                    productDisc = parseFloat(vouch.value)||0;
                    productDisc = Math.min(productDisc, eligibleSubtotal);
                }
            }
        }
        
        shippingDisc = Math.min(shippingDisc, sC);
        productDisc = Math.min(productDisc, sub);
        
        // PPN
        const ppnEnabled = appData.store.ppnEnabled === true || appData.store.ppnEnabled === 'true';
        const ppnRate = parseFloat(appData.store.ppnRate) || 11;
        const baseAfterDisc = Math.max(0, (sub - productDisc) + (sC - shippingDisc));
        const ppnAmount = ppnEnabled ? Math.round(baseAfterDisc * ppnRate / 100) : 0;
        const tot = baseAfterDisc + ppnAmount;
        
        const m = (document.querySelector('input[name="payment"]:checked')||{}).value;
        
        // Validasi bukti pembayaran wajib untuk transfer, QRIS & Tempo
        // Pastikan URL sudah benar-benar GDrive (bukan base64 atau null)
        const needsBukti = (m === 'transfer' || m === 'qris' || m === 'tempo');
        const buktiReady = window.buktiGDriveUploaded && window.buktiPaymentUrl &&
                           !window.buktiPaymentUrl.startsWith('data:'); // tolak base64
        if (needsBukti && !buktiReady) {
            isSaving = false; hLoad();
            if (!window.buktiPaymentFile) return showToast('Upload bukti pembayaran terlebih dahulu!');
            return showToast('Tunggu upload Google Drive selesai, atau coba lagi!');
        }
        
        const oI = 'ORD-' + Date.now().toString(36).toUpperCase() + '-' + Math.random().toString(36).substring(2,6).toUpperCase();
        
        // Upload bukti ke Google Drive via GAS
        // Upload sudah dilakukan saat user pilih file (handleBuktiUpload),
        // tapi kalau karena alasan tertentu belum ter-upload, coba sekali lagi di sini
        if (window.buktiPaymentFile && !window.buktiGDriveUploaded) {
            try {
                sLoad('Upload Bukti ke Google Drive...');
                const uploadedUrl = await window.uploadBuktiToFirebase(window.buktiPaymentFile, oI);
                if (uploadedUrl && !uploadedUrl.startsWith('data:')) {
                    window.buktiPaymentUrl = uploadedUrl;
                    window.buktiGDriveUploaded = true;
                } else {
                    // Tetap tolak jika GDrive gagal — jangan simpan base64 ke Firestore
                    isSaving = false; hLoad();
                    return showToast('❌ Upload bukti ke Google Drive gagal. Coba pilih gambar lagi!');
                }
                sLoad('Proses Pesanan...');
            } catch(uploadErr) {
                isSaving = false; hLoad();
                console.error('Upload bukti gagal:', uploadErr);
                return showToast('❌ Gagal upload bukti. Periksa koneksi dan coba lagi!');
            }
        }
        
        const oD = {
            orderId: oI, timestamp: firebase.firestore.FieldValue.serverTimestamp(), dateString: new Date().toISOString(),
            customer: cust, items: cart.map(i => ({...i, qty: parseFloat(i.qty), effectivePrice: getEffP(i), poTime: i.poTime||'', hpp: getEffHpp(i)})),
            payment: { method: m, subtotal: sub, shippingCost: sC, shippingDiscount: shippingDisc, productDiscount: productDisc, ppnAmount: ppnAmount, ppnRate: ppnEnabled ? ppnRate : 0, grandTotal: tot },
            status: 'Baru',
            buktiPayment: window.buktiPaymentUrl || null
        };

        if (m === 'tempo') {
            const dpInput = document.getElementById('tempo-dp-input');
            let dp = dpInput ? parseFloat(dpInput.value) || 0 : 0;
            if (dp > tot) dp = tot;
            oD.payment.tempoDp = dp;
            oD.payment.tempoBalance = tot - dp;
            oD.payment.tempoDueDate = Date.now() + (30 * 24 * 60 * 60 * 1000);
            oD.payment.paymentStatus = 'hutang';
        }

        const orderRef = db.collection("freshmart_orders").doc(oI);

        // =================================================================
        // FIX BUG KRITIS #1 (STOK TIDAK OTOMATIS TERPOTONG):
        // SEBELUMNYA pesanan disimpan (set) DULU, baru stok dipotong di
        // transaction TERPISAH sesudahnya. Kalau transaction potong stok
        // gagal (rules menolak, koneksi putus, dsb) -> pesanan SUDAH ADA
        // tapi stok TIDAK PERNAH terpotong, dan customer malah lihat pesan
        // error padahal pesanannya sebenarnya sudah masuk ke admin.
        //
        // FIX BUG KRITIS #2 (RACE CONDITION / OVERSELLING):
        // Validasi stok sebelumnya hanya mengecek appData.products di
        // memori (bisa basi/cache lama). Kalau 2 pelanggan checkout produk
        // yang sama hampir bersamaan, keduanya bisa lolos validasi padahal
        // stok asli di server sudah tidak cukup.
        //
        // SOLUSI: pembuatan pesanan + validasi ulang stok dari data SERVER
        // TERBARU + pemotongan stok, semua dijadikan SATU transaction
        // atomic. Kalau salah satu gagal (termasuk stok ternyata kurang),
        // SEMUANYA dibatalkan (rollback) — tidak ada lagi pesanan "nyangkut"
        // tanpa stok terpotong.
        // FITUR BARU: hitung total poin yang didapat dari transaksi ini berdasarkan
        // field 'poin' di tiap item keranjang (sudah dibawa sejak addToCart).
        const pointsEarnedThisOrder = cart.reduce((s,i) => s + ((parseFloat(i.poin)||0) * (parseFloat(i.qty)||0)), 0);
        const cmsDataRef = db.collection("freshmart").doc("cms_data");
        const memberRef = cust.wa ? cmsDataRef.collection("customers").doc(cust.wa) : null;
        const wantsRewardClaim = !!selectedReward;
        let finalMemberPoints = null; // FITUR BARU: tangkap saldo poin FINAL supaya bisa ditampilkan ke pelanggan setelah berhasil

        if (useStk) {
            // Gabungkan qty per produk & per varian dari cart, supaya tidak
            // membaca dokumen produk yang sama lebih dari sekali dalam satu
            // transaction (Firestore mewajibkan setiap dokumen dibaca sekali).
            const qtyMap = {}; // pId -> { main: number, variants: { [name]: qty } }
            cart.forEach(ci => {
                const pId = ci.id != null ? ci.id.toString() : null;
                if (!pId) return;
                if (!qtyMap[pId]) qtyMap[pId] = { main: 0, variants: {} };
                const q = parseFloat(ci.qty) || 0;
                if (ci.variantName) qtyMap[pId].variants[ci.variantName] = (qtyMap[pId].variants[ci.variantName] || 0) + q;
                else qtyMap[pId].main += q;
            });
            const pIds = Object.keys(qtyMap);
            const refs = pIds.map(pId => db.collection("freshmart").doc("cms_data").collection("products").doc(pId));

            // FIX BUG JAM PERANGKAT: dulu pakai Date.now() (jam HP pelanggan), sekarang
            // pakai FieldValue.increment agar tidak bergantung pada jam perangkat manapun
            // -- lihat catatan lengkap di fungsi saveApp().

            await db.runTransaction(async (transaction) => {
                // 1. FASE READ: ambil data produk PALING BARU langsung dari server,
                //    plus data member (poin) & dokumen hadiah individual kalau relevan.
                //    FITUR BARU: hadiah dibaca sebagai DOKUMEN TERSENDIRI (sub-collection
                //    'rewards'), bukan array besar -- konsisten dengan pola stok produk.
                const rewardRef = wantsRewardClaim ? db.collection("freshmart").doc("cms_data").collection("rewards").doc(selectedReward.id.toString()) : null;
                const docs = await Promise.all(refs.map(ref => transaction.get(ref)));
                const memberDoc = memberRef ? await transaction.get(memberRef) : null;
                const rewardDoc = (memberDoc && memberDoc.exists && rewardRef) ? await transaction.get(rewardRef) : null;

                // 2. VALIDASI ULANG STOK dari data server terbaru (bukan cache lokal)
                //    -> mencegah overselling saat ada pesanan bersamaan dari device lain
                const kurang = [];
                docs.forEach((docSnap, idx) => {
                    if (!docSnap.exists) return;
                    const prod = docSnap.data();
                    const need = qtyMap[pIds[idx]];
                    if (need.main > 0) {
                        const stk = parseFloat(prod.stock !== undefined ? prod.stock : 0);
                        if (stk < need.main) kurang.push(`${prod.name} (sisa ${stk})`);
                    }
                    Object.keys(need.variants).forEach(vName => {
                        const v = (prod.variants || []).find(vv => vv.name === vName);
                        const stk = parseFloat(v && v.stock !== undefined ? v.stock : 0);
                        if (stk < need.variants[vName]) kurang.push(`${prod.name} (${vName}, sisa ${stk})`);
                    });
                });
                if (kurang.length) {
                    // Lempar error khusus -> transaction batal total, order TIDAK tersimpan
                    throw new Error('STOK_TIDAK_CUKUP: ' + kurang.join(', '));
                }

                // 2b. VALIDASI POIN & HADIAH (kalau pelanggan memilih tukar hadiah)
                let rewardStockUpdated = null, memberPointsUpdated = null;
                if (memberDoc && memberDoc.exists) {
                    let newPoints = parseFloat(memberDoc.data().points) || 0;
                    if (wantsRewardClaim) {
                        if (!rewardDoc || !rewardDoc.exists) throw new Error('HADIAH_TIDAK_DITEMUKAN');
                        const rew = rewardDoc.data();
                        if (newPoints < (parseFloat(rew.pointsCost)||0)) throw new Error('POIN_TIDAK_CUKUP');
                        if ((parseFloat(rew.stock)||0) <= 0) throw new Error('STOK_HADIAH_HABIS');
                        rewardStockUpdated = (parseFloat(rew.stock)||0) - 1;
                        newPoints -= (parseFloat(rew.pointsCost)||0);
                        oD.claimedReward = { id: rew.id, name: rew.name, pointsCost: parseFloat(rew.pointsCost)||0, status: 'pending', note: '' };
                    }
                    newPoints += pointsEarnedThisOrder;
                    memberPointsUpdated = newPoints;
                    oD.pointsEarned = pointsEarnedThisOrder;
                    oD.customerPhone = cust.wa;
                    oD.finalMemberPoints = newPoints; // FITUR BARU: simpan saldo poin ke order (harus SEBELUM transaction.set(orderRef, oD) di bawah), supaya bisa dicetak di struk/invoice
                } else if (wantsRewardClaim) {
                    // Pelanggan pilih hadiah tapi data member tidak ditemukan lagi saat submit -> batalkan supaya tidak "bocor" hadiah gratis
                    throw new Error('MEMBER_TIDAK_DITEMUKAN');
                }

                // 3. FASE WRITE: kurangi stok, simpan order, update poin/hadiah — semua-atau-tidak-sama-sekali
                docs.forEach((docSnap, idx) => {
                    if (!docSnap.exists) return;
                    const pId = pIds[idx];
                    const need = qtyMap[pId];
                    const prod = JSON.parse(JSON.stringify(docSnap.data()));

                    if (need.main > 0) {
                        prod.stock = Math.max(0, (parseFloat(prod.stock)||0) - need.main);
                        if (prod.stock === 0) prod.isActive = 'false';
                        // FITUR BARU: catat total terjual, ditampilkan di card & detail produk
                        prod.totalSold = (parseFloat(prod.totalSold)||0) + need.main;
                    }
                    Object.keys(need.variants).forEach(vName => {
                        const vIdx = (prod.variants || []).findIndex(v => v.name === vName);
                        if (vIdx > -1) {
                            prod.variants[vIdx].stock = Math.max(0, (parseFloat(prod.variants[vIdx].stock)||0) - need.variants[vName]);
                            if (prod.variants[vIdx].stock === 0) prod.variants[vIdx].isActive = false;
                            prod.variants[vIdx].totalSold = (parseFloat(prod.variants[vIdx].totalSold)||0) + need.variants[vName];
                        }
                    });

                    // Sinkronkan appData lokal juga, sesuai hasil transaction
                    const localIdx = appData.products.findIndex(p => p.id.toString() === pId);
                    if (localIdx > -1) appData.products[localIdx] = prod;

                    transaction.set(refs[idx], prod);
                });

                // Order baru benar-benar dibuat DI SINI, dalam transaction yang
                // sama — hanya tersimpan jika validasi & potong stok di atas lolos.
                transaction.set(orderRef, oD);

                if (memberPointsUpdated !== null) {
                    transaction.set(memberRef, { points: memberPointsUpdated }, { merge: true });
                    finalMemberPoints = memberPointsUpdated;
                }
                if (rewardStockUpdated !== null) {
                    // Hanya field 'stock' yang ditulis -- persis pola potong stok produk
                    // (aman divalidasi rule Firestore: stok hadiah cuma boleh berkurang).
                    transaction.set(rewardRef, { stock: rewardStockUpdated }, { merge: true });
                }

                // Tandai versi data berubah, supaya listener realtime di
                // perangkat lain (lihat attachRealtimeStockSync) tahu harus
                // mengambil ulang data produk yang terbaru.
                transaction.update(cmsDataRef, { lastUpdate: firebase.firestore.FieldValue.increment(1) });
            });

            // Tebakan optimis untuk cache lokal (akan otomatis dikoreksi oleh listener realtime)
            appData.lastUpdate = (parseInt(sL('freshmart_last_update')) || appData.lastUpdate || 0) + 1;
            ssL('freshmart_last_update', appData.lastUpdate.toString());
            ssL('freshmart_products', JSON.stringify(appData.products));
        } else if (memberRef) {
            // Manajemen stok nonaktif, TAPI tetap perlu transaction kalau ada
            // program poin/hadiah yang harus diproses secara atomic.
            await db.runTransaction(async (transaction) => {
                const rewardRef = wantsRewardClaim ? db.collection("freshmart").doc("cms_data").collection("rewards").doc(selectedReward.id.toString()) : null;
                const memberDoc = await transaction.get(memberRef);
                const rewardDoc = (memberDoc.exists && rewardRef) ? await transaction.get(rewardRef) : null;
                if (memberDoc.exists) {
                    let newPoints = parseFloat(memberDoc.data().points) || 0;
                    let rewardStockUpdated = null;
                    if (wantsRewardClaim) {
                        if (!rewardDoc || !rewardDoc.exists) throw new Error('HADIAH_TIDAK_DITEMUKAN');
                        const rew = rewardDoc.data();
                        if (newPoints < (parseFloat(rew.pointsCost)||0)) throw new Error('POIN_TIDAK_CUKUP');
                        if ((parseFloat(rew.stock)||0) <= 0) throw new Error('STOK_HADIAH_HABIS');
                        rewardStockUpdated = (parseFloat(rew.stock)||0) - 1;
                        newPoints -= (parseFloat(rew.pointsCost)||0);
                        oD.claimedReward = { id: rew.id, name: rew.name, pointsCost: parseFloat(rew.pointsCost)||0, status: 'pending', note: '' };
                    }
                    newPoints += pointsEarnedThisOrder;
                    oD.pointsEarned = pointsEarnedThisOrder;
                    oD.customerPhone = cust.wa;
                    oD.finalMemberPoints = newPoints; // FITUR BARU: simpan saldo poin ke order (harus SEBELUM transaction.set(orderRef, oD) di bawah)
                    transaction.set(orderRef, oD);
                    transaction.set(memberRef, { points: newPoints }, { merge: true });
                    finalMemberPoints = newPoints;
                    if (rewardStockUpdated !== null) {
                        transaction.set(rewardRef, { stock: rewardStockUpdated }, { merge: true });
                    }
                } else {
                    if (wantsRewardClaim) throw new Error('MEMBER_TIDAK_DITEMUKAN');
                    transaction.set(orderRef, oD);
                }
            });
        } else {
            // Tidak ada manajemen stok & bukan pelanggan terdaftar -> simpan order biasa
            await orderRef.set(oD);
        }
        // Simpan ke riwayat lokal perangkat
        myOrders.unshift({
            orderId: oI, date: new Date().toISOString(), total: tot,
            itemCount: cart.reduce((sum, i) => sum + parseFloat(i.qty), 0),
            status: 'Baru',
            pointsEarned: oD.pointsEarned || 0, // FITUR BARU: poin didapat dari pesanan ini
            claimedReward: oD.claimedReward || null, // FITUR BARU: info klaim hadiah (kalau ada)
            finalMemberPoints: finalMemberPoints // FITUR BARU: sisa saldo poin SETELAH transaksi ini (biar kelihatan sudah terpotong)
        });
        ssL('freshmart_my_orders', JSON.stringify(myOrders));
        ssL('freshmart_last_order', Date.now().toString());
        if(typeof analytics !== 'undefined') analytics.logEvent('purchase', {transaction_id: oI, value: tot, currency: 'IDR'});
        
        // Pesanan sudah tersimpan di Firestore - tidak perlu redirect ke WA
        // Admin akan melihat pesanan di panel dan konfirmasi ke WA pelanggan
        // FITUR BARU: kalau ada klaim hadiah, tegaskan langsung ke pelanggan bahwa poinnya
        // SUDAH terpotong saat itu juga -- supaya jelas terlihat, bukan cuma "berhasil" generik.
        if (oD.claimedReward && finalMemberPoints !== null) {
            showToast(`✅ Hadiah "${oD.claimedReward.name}" berhasil ditukar! Sisa poin Anda: ${finalMemberPoints}`);
        } else {
            showToast("✅ Pesanan berhasil dikirim ke admin!");
        }
        // Perbarui juga tampilan poin di memori (kalau modal/banner member masih merujuk ke sini)
        if (currentMember && finalMemberPoints !== null) currentMember.points = finalMemberPoints;
        
        setTimeout(() => {
            cart = []; setV('cust-name',''); setV('cust-address',''); setV('cust-note',''); setV('cust-wa','');
            window.buktiPaymentUrl = null; window.buktiPaymentFile = null; window.buktiGDriveUploaded = false;
            const bPrev = el('bukti-preview-wrap'); const bPlc = el('bukti-placeholder');
            if(bPrev){ bPrev.classList.add('hidden'); } if(bPlc){ bPlc.classList.remove('hidden'); }
            hide('bukti-uploading'); hide('bukti-success'); hide('bukti-gdrive-error');
            const bInp = el('bukti-file-input'); if(bInp) bInp.value = '';
            cust = {name:'', address:'', lat:null, lng:null, deliveryMethod:'delivery', distance:0, note:'', wa:''}; vouch = null;
            currentMember = null; selectedReward = null; // FITUR BARU: reset state member/hadiah
            const memBanner = el('member-status-banner'); if (memBanner) hide(memBanner);
            if(el('voucher-input')) el('voucher-input').value=''; hide('voucher-msg-container'); hide('location-status');
            if(el('btn-location')) show('btn-location');
            // FIX: reset radio delivery ke default 'delivery'
            const defDelivery = document.querySelector('input[name="delivery-method"][value="delivery"]');
            if (defDelivery) { defDelivery.checked = true; toggleDeliveryMethod(); }
            // FIX: reset radio payment ke default 'transfer'
            const defPayment = document.querySelector('input[name="payment"][value="transfer"]');
            if (defPayment) { defPayment.checked = true; togglePaymentDetails(); }
            updCart();
            renderCart(); // PATCH B3: bersihkan tampilan cart secara visual agar tidak tampak berisi saat dibuka lagi
            changeView('view-catalog'); showToast("Pesanan Dibuat! 🎉");
        }, 2000);
        
    } catch(e) {
        // FIX: pesan khusus saat transaction membatalkan pesanan karena stok
        // ternyata tidak cukup (hasil validasi ulang dari data server terbaru)
        const msg = e.message || "Error";
        if (msg.startsWith('STOK_TIDAK_CUKUP:')) {
            showToast('Maaf, stok berubah: ' + msg.replace('STOK_TIDAK_CUKUP: ', ''));
        } else if (msg === 'POIN_TIDAK_CUKUP') {
            showToast('Maaf, poin Anda ternyata tidak cukup untuk hadiah ini. Silakan cek lagi.');
            selectedReward = null;
        } else if (msg === 'STOK_HADIAH_HABIS') {
            showToast('Maaf, stok hadiah yang dipilih baru saja habis. Silakan pilih hadiah lain.');
            selectedReward = null;
        } else if (msg === 'HADIAH_TIDAK_DITEMUKAN') {
            showToast('Hadiah yang dipilih sudah tidak tersedia. Silakan pilih ulang.');
            selectedReward = null;
        } else if (msg === 'MEMBER_TIDAK_DITEMUKAN') {
            showToast('Data member tidak ditemukan, klaim hadiah dibatalkan. Pesanan bisa dicoba lagi tanpa hadiah.');
            selectedReward = null;
        } else {
            showToast(e.code === 'resource-exhausted' ? "Quota Server Penuh!" : "Gagal proses: " + msg);
        }
    } finally {
        isSaving = false; hLoad();
    }
};

// =====================================================================
// FITUR BARU: PROGRAM LOYALITAS MEMBER (POIN & HADIAH)
// Helper untuk menyeragamkan format nomor WA (dipakai checkout & admin)
// supaya "0812..." dan "+62812..." dan "62812..." semua dianggap SAMA.
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
const aF = {
    products: [
        {key:'name', label:'Nama Produk', type:'text'}, {key:'sku', label:'Barcode / SKU (Kosongkan utk Auto)', type:'text'},
        {key:'price', label:'Harga Jual Promo (Rp)', type:'number'}, 
        {key:'priceNormal', label:'Harga Coret / Normal (Rp) - Opsional', type:'number'}, 
        {key:'hpp', label:'Harga Modal / HPP (Rp) — Hanya Seller', type:'number'},
        {key:'poin', label:'Poin Member (per unit terjual, Produk Tanpa Varian)', type:'number'},
        {key:'stock', label:'Stok Awal (Qty) — Aktif jika Manajemen Stok ON', type:'number'},
        {key:'unit', label:'Satuan Dasar (Cth: Pcs, Kg)', type:'text'},
        {key:'poTime', label:'Estimasi Pre-Order (Opsional)', type:'text'}, 
        {key:'video', label:'Link Video YouTube (Opsional)', type:'text'},
        {key:'img', label:'URL Gambar', type:'text'},
        {key:'category', label:'Kategori', type:'dynamic_select_category'}, {key:'brand', label:'Merek', type:'dynamic_select_brand'},
        {key:'tag', label:'Label/Tag', type:'text'}, {key:'isActive', label:'Status', type:'select', options:[{val:'true',text:'Tersedia'},{val:'false',text:'Habis'}]},
        {key:'desc', label:'Deskripsi Lengkap', type:'richtext'}, {key:'wholesale', label:'Grosir', type:'wholesale_builder'}, {key:'variants', label:'Varian', type:'variants_builder'}
    ],
    colors: [
        {key:'name', label:'Nama Warna', type:'text'},
        {key:'hex', label:'Kode Warna (Hex) - Opsional', type:'text'},
        {key:'catalog', label:'Katalog / Merek (Contoh: No Drop)', type:'text'}
    ],
    categories: [{key:'name', label:'Kategori', type:'text'}, {key:'img', label:'URL Ikon', type:'text'}],
    brands: [{key:'name', label:'Nama Merek', type:'text'}, {key:'img', label:'URL Logo Merek', type:'text'}],
    banks: [{key:'bankName', label:'Nama Bank', type:'text'}, {key:'bankAccount', label:'No. Rekening', type:'text'}, {key:'bankOwner', label:'Atas Nama', type:'text'}],
    // FITUR BARU: Database Pelanggan (member) — poin dikelola OTOMATIS lewat transaksi checkout,
    // field 'points' di sini disediakan untuk penyesuaian MANUAL oleh admin jika diperlukan saja.
    customers: [
        {key:'name', label:'Nama Lengkap', type:'text'},
        {key:'phone', label:'No. WhatsApp Aktif (Cth: 081234567890)', type:'text'},
        {key:'points', label:'Poin Member (Penyesuaian Manual)', type:'number'}
    ],
    // FITUR BARU: Program Hadiah — admin buat item hadiah yang bisa ditukar pelanggan dengan poin.
    rewards: [
        {key:'name', label:'Nama Hadiah', type:'text'},
        {key:'img', label:'URL Gambar Hadiah', type:'text'},
        {key:'pointsCost', label:'Poin yang Dibutuhkan', type:'number'},
        {key:'stock', label:'Stok Hadiah Tersedia', type:'number'},
        {key:'isActive', label:'Status', type:'select', options:[{val:'true',text:'Aktif (Bisa Ditukar)'},{val:'false',text:'Nonaktif'}]}
    ],
    banners: [
     {key:'title', label:'Judul Banner', type:'text'}, 
     {key:'desc', label:'Deskripsi Pendek', type:'textarea'}, 
     {key:'img', label:'URL Gambar (PNG Transparan disarankan)', type:'text'},
     {key:'link', label:'Link Tujuan (Contoh: https://wa.me/62... atau link produk)', type:'text'}
 ],

    vouchers: [
        {key:'code', label:'Kode Voucher (Cth: MERDEKA50)', type:'text'}, 
        {key:'type', label:'Jenis Diskon', type:'select', options:[{val:'percent',text:'Potongan Persen (%)'},{val:'flat',text:'Potongan Rupiah (Rp)'},{val:'shipping_free',text:'Gratis Ongkir (100%)'},{val:'shipping_flat',text:'Potongan Ongkir (Rp)'}]}, 
        {key:'value', label:'Nilai Potongan (Contoh: 50 untuk %, atau 10000 untuk Rp)', type:'number'},
        {key:'minPurchase', label:'Syarat Minimal Belanja (Rp) - 0 Jika Tidak Ada', type:'number'},
        {key:'maxDiscount', label:'Maksimal Nominal Potongan (Rp) - Khusus Tipe Persen', type:'number'},
        {key:'targetProduct', label:'Target Produk Spesifik (Pilih jika berlaku khusus)', type:'dynamic_select_products'},
        {key:'isShow', label:'Tampilkan di Beranda?', type:'select', options:[{val:'true',text:'Ya, Tampilkan Promo'},{val:'false',text:'Sembunyikan'}]}
    ]
};

window.checkAdminAccess = () => {
    if (window.isAdm || window.location.hostname === 'localhost') {
        window.__localIsAdm = true;
        changeView('view-admin');
        openAdminMenu();
    } else {
        setV('login-username','');
        setV('login-password','');
        changeView('view-admin-login');
    }
};

window.openAdminMenu = () => { 
    const adminScroll = document.querySelector('#view-admin .scroll-content');
    if (adminScroll) adminScroll.scrollTop = 0;
    show('admin-dashboard-view'); hide('admin-content-view'); hide('btn-admin-back'); show('admin-logo-box'); setIn('admin-header-title','CMS SELLER'); if(aOrdLst){ aOrdLst(); aOrdLst=null; } if(aCustLst){ aCustLst(); aCustLst=null; } if(aRevLst){ aRevLst(); aRevLst=null; } loadAdminReport(lastReportPeriod); toggleTaxMenuVisibility(); 
};

// FITUR BARU: tombol menu Pajak HANYA tampil kalau PPN sedang aktif di Pengaturan Toko
window.toggleTaxMenuVisibility = () => {
    const btn = el('admin-menu-tax-btn');
    if (!btn) return;
    const ppnOn = appData.store.ppnEnabled === true || appData.store.ppnEnabled === 'true';
    if (ppnOn) { btn.classList.remove('hidden'); btn.classList.add('flex'); }
    else { btn.classList.add('hidden'); btn.classList.remove('flex'); }
};

// =====================================================================
// FITUR BARU: LAPORAN TOKO (penjualan, laba, produk/varian, & aset modal)
// Ditampilkan di beranda panel admin, tepat di bawah banner "Selamat Datang".
// =====================================================================
// FITUR BARU: dipisah jadi fungsi sendiri supaya bisa dipakai ulang baik di
// dashboard maupun di tab Produk (lihat rAdmL/rAdmItms untuk tab Produk).
window.computeInventoryStats = () => {
    const useStk = appData.store.useStock === true || appData.store.useStock === 'true';
    let activeProd = 0, inactiveProd = 0, activeVar = 0, inactiveVar = 0, assetHpp = 0, assetJual = 0;
    (appData.products || []).forEach(p => {
        if (p.variants && p.variants.length) {
            p.variants.forEach(v => {
                const isAct = v.isActive !== false && v.isActive !== 'false';
                const stock = parseFloat(v.stock) || 0;
                const purchasable = isAct && (!useStk || stock > 0);
                if (purchasable) activeVar++; else inactiveVar++;
                // Aset dihitung dari SELURUH stok yang dimiliki toko (aktif atau tidak),
                // supaya benar-benar mencerminkan total modal yang tertanam di gudang.
                assetHpp += (parseFloat(v.hpp) || 0) * stock;
                assetJual += (parseFloat(v.price) || 0) * stock; // FIX: harga jual toko, BUKAN harga coret
            });
        } else {
            const isAct = p.isActive !== false && p.isActive !== 'false';
            const stock = parseFloat(p.stock) || 0;
            const purchasable = isAct && (!useStk || stock > 0);
            if (purchasable) activeProd++; else inactiveProd++;
            assetHpp += (parseFloat(p.hpp) || 0) * stock;
            assetJual += (parseFloat(p.price) || 0) * stock; // FIX: harga jual toko, BUKAN harga coret
        }
    });
    return { activeProd, inactiveProd, activeVar, inactiveVar, assetHpp, assetJual };
};

window.loadAdminReport = async (period) => {
    lastReportPeriod = period;
    // Highlight tombol periode yang sedang aktif
    document.querySelectorAll('.report-period-btn').forEach(b => {
        const active = b.dataset.period === period;
        b.style.background = active ? 'var(--color-primary)' : 'transparent';
        b.style.color = active ? '#fff' : '';
        b.style.boxShadow = active ? '0 2px 8px rgba(var(--color-primary-rgb),0.35)' : 'none';
    });
    const container = el('admin-report-container');
    if (!container) return;
    setH('admin-report-container', `<div class="text-center py-10"><i class="fa-solid fa-spinner fa-spin text-2xl text-slate-300"></i></div>`);

    // ---------- LAPORAN PENJUALAN & LABA (query Firestore sesuai periode) ----------
    // CATATAN: statistik produk/varian/aset SUDAH DIPINDAH ke dalam tab Produk
    // sendiri (di atas kolom cari) -- lebih relevan ditaruh di tempat pengelolaan
    // produknya langsung, lihat window.computeInventoryStats().
    let startDate = null;
    const now = new Date();
    if (period === 'today') {
        startDate = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    } else if (period === 'week') {
        const day = now.getDay(); // 0=Minggu
        const diffToMonday = day === 0 ? 6 : day - 1;
        startDate = new Date(now.getFullYear(), now.getMonth(), now.getDate() - diffToMonday);
    } else if (period === 'month') {
        startDate = new Date(now.getFullYear(), now.getMonth(), 1);
    }
    // period === 'all' -> startDate tetap null (tanpa filter tanggal)

    let totalPenjualan = 0, totalHppTerjual = 0, totalDiskonProduk = 0, orderCount = 0, truncated = false;
    try {
        let q = db.collection("freshmart_orders");
        if (startDate) q = q.where('timestamp', '>=', firebase.firestore.Timestamp.fromDate(startDate));
        const snap = await q.limit(3000).get();
        truncated = snap.size >= 3000; // jaga-jaga kalau data sangat banyak
        snap.forEach(doc => {
            const o = doc.data();
            if (o.status === 'Dibatalkan') return; // pesanan batal tidak dihitung sebagai penjualan
            orderCount++;
            totalPenjualan += parseFloat(o.payment?.subtotal) || 0;
            totalDiskonProduk += parseFloat(o.payment?.productDiscount) || 0;
            (o.items || []).forEach(it => {
                // Pakai HPP yang TERCATAT di pesanan (akurat sesuai saat transaksi terjadi).
                // Untuk pesanan LAMA yang belum punya field ini, perkirakan dari HPP produk saat ini.
                const hppItem = (it.hpp !== undefined && it.hpp !== null) ? parseFloat(it.hpp) : getEffHpp(it);
                totalHppTerjual += (parseFloat(hppItem) || 0) * (parseFloat(it.qty) || 0);
            });
        });
    } catch(e) { console.error('Gagal memuat laporan penjualan:', e); }

    const labaKotor = totalPenjualan - totalHppTerjual;
    const labaBersih = labaKotor - totalDiskonProduk;

    const periodLabel = {today:'Hari Ini', week:'Minggu Ini', month:'Bulan Ini', all:'Sepanjang Waktu'}[period] || '';

    // ---------- RENDER TAMPILAN (sales-only) ----------
    setH('admin-report-container', `
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            <div class="card-modern p-5 sm:p-5">
                <p class="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-1.5">Total Penjualan (${periodLabel})</p>
                <p class="text-lg sm:text-xl font-bold text-slate-800 dark:text-white truncate">${fCur(totalPenjualan)}</p>
                <p class="text-[10px] font-bold text-slate-400 mt-1">${orderCount} pesanan${truncated ? ' (≥3000, dibatasi)' : ''}</p>
            </div>
            <div class="card-modern p-5 sm:p-5">
                <p class="text-[9px] font-bold text-emerald-500 uppercase tracking-widest mb-1.5"><i class="fa-solid fa-arrow-trend-up mr-1"></i>Laba Kotor</p>
                <p class="text-lg sm:text-xl font-bold text-emerald-600 truncate">${fCur(labaKotor)}</p>
                <p class="text-[10px] font-bold text-slate-400 mt-1">Penjualan − HPP Terjual</p>
            </div>
            <div class="card-modern p-5 sm:p-5">
                <p class="text-[9px] font-bold text-[var(--color-primary)] uppercase tracking-widest mb-1.5"><i class="fa-solid fa-sack-dollar mr-1"></i>Laba Bersih</p>
                <p class="text-lg sm:text-xl font-bold truncate" style="color:var(--color-primary)">${fCur(labaBersih)}</p>
                <p class="text-[10px] font-bold text-slate-400 mt-1">Laba Kotor − Diskon Produk</p>
            </div>
            <div class="card-modern p-5 sm:p-5">
                <p class="text-[9px] font-bold text-rose-500 uppercase tracking-widest mb-1.5"><i class="fa-solid fa-tag mr-1"></i>Total HPP Terjual</p>
                <p class="text-lg sm:text-xl font-bold text-rose-500 truncate">${fCur(totalHppTerjual)}</p>
                <p class="text-[10px] font-bold text-slate-400 mt-1">Modal barang yang laku</p>
            </div>
        </div>
    `);
};

// --- FUNGSI LOGIN FIREBASE (DIUPDATE) ---
window.processAdminLogin = async () => {
    const u = getV('login-username');
    const p = getV('login-password');
    // 1. Validasi Input Dasar
    if (!u || !p) return showToast("Email & Password wajib diisi!");
    
    sLoad('Verifikasi Login...');
    
    try {
        // 2. Firebase Authentication menangani keamanan sepenuhnya
        // Tidak ada lagi Bypass (devCode)
        await auth.signInWithEmailAndPassword(u, p);

        // FIX KEAMANAN: pastikan akun yang login UID-nya cocok dengan ADMIN_UID.
        // Kalau ada akun lain (bukan pemilik toko) yang berhasil login ke project ini,
        // langsung logout paksa & tolak akses — jangan sampai dianggap admin.
        if (!auth.currentUser || auth.currentUser.uid !== ADMIN_UID) {
            const currentUid = auth.currentUser ? auth.currentUser.uid : 'null';
            await auth.signOut();
            throw new Error('UID_MISMATCH: ' + currentUid);
        }

        window.isAdm = true; 
        
        // Status PRO otomatis dicek & diperbarui oleh auth.onAuthStateChanged
        
        history.replaceState({view: 'view-admin'}, '', window.location.href);
        changeView('view-admin', true); 
        openAdminMenu();
        showToast("Login Berhasil!");
        
    } catch(error) {
        console.error(error);
        // Tampilkan pesan error yang lebih informatif (opsional)
        if (error.message && error.message.startsWith('UID_MISMATCH:')) {
            const uidStr = error.message.replace('UID_MISMATCH: ', '');
            showToast("Login Ditolak: UID Anda (" + uidStr + ") tidak cocok dengan ADMIN_UID!");
        } else {
            showToast("Login Ditolak: Email atau Password salah!");
        }
    } finally {
        hLoad();
    }
};

window.logoutAdmin = async () => { 
    sLoad('Keluar...');
    try {
        await auth.signOut();
        window.isAdm=false; 
        window.__localIsAdm=false;
        window.isPro=false; 
        if (window.updateProBadge) window.updateProBadge();
        if(aOrdLst){ aOrdLst(); aOrdLst=null; } 
        if(aCustLst){ aCustLst(); aCustLst=null; }
        if(aRevLst){ aRevLst(); aRevLst=null; }
        history.replaceState({view: 'view-catalog'}, '', window.location.href);
        changeView('view-catalog', true);
        showToast("Berhasil Logout");
    } catch(e) {
        showToast("Gagal logout");
    } finally {
        hLoad();
    }
};

window.confirmLogoutAdmin = () => {
    showConfirm(
        "Keluar Seller",
        "Apakah anda akan keluar dari dashboard seller?",
        () => { logoutAdmin(); },
        "Ya, Keluar",
        true
    );
};

window.checkProPrint = () => { openReceiptPreview(); };

window.customPrompt = (title, defaultVal, callback) => {
    let div = document.createElement('div');
    div.className = 'fixed inset-0 z-[9999] bg-slate-900/80 flex items-center justify-center p-4 backdrop-blur-sm opacity-0 transition-opacity duration-300';
    div.innerHTML = `
        <div class="bg-white dark:bg-slate-800 rounded-[2rem] w-full max-w-[320px] p-6 shadow-2xl border border-slate-200 dark:border-slate-700 relative transform scale-95 transition-all duration-300 flex flex-col text-center">
            <h3 class="font-bold text-slate-900 dark:text-white text-lg mb-4">${title}</h3>
            <input type="text" id="prompt-input" value="${defaultVal}" class="w-full px-4 py-3.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-700 dark:text-slate-300 mb-6 focus:ring-2 focus:ring-emerald-500 outline-none text-center font-bold text-xl tracking-wider" autocomplete="off" />
            <div class="flex gap-3">
                <button id="prompt-cancel" class="flex-1 py-3.5 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 font-bold rounded-xl hover:bg-slate-200 dark:hover:bg-slate-600 active:scale-95 transition-all text-sm">Batal</button>
                <button id="prompt-ok" class="flex-1 py-3.5 bg-emerald-600 text-white font-bold rounded-xl hover:bg-emerald-700 active:scale-95 transition-all text-sm shadow-md shadow-emerald-500/30">Simpan</button>
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

window.editTempoPenalty = (orderId, currentRate) => {
    window.customPrompt('Persentase Denda Baru', currentRate, async (val) => {
        if (!val) return;
        let newRate = parseFloat(val.replace(',', '.'));
        if (isNaN(newRate) || newRate < 0) return showToast('Persentase tidak valid!');
        sLoad('Menyimpan...');
        try {
            await db.collection("freshmart_orders").doc(orderId).update({
                'payment.tempoPenaltyRate': newRate
            });
            showToast('Persentase denda berhasil diubah!');
            window.rAdmPiutang();
        } catch(e) {
            showToast('Gagal mengubah denda: ' + e.message);
        }
        hLoad();
    });
};

window.stopTempoPenalty = (orderId, latePenalty, isStopped) => {
    let title = 'Konfirmasi Denda';
    let msg = isStopped ? 'Lanjutkan perhitungan denda otomatis?' : 'Hentikan denda berjalan sekarang? (Nominal denda akan dibekukan di ' + fCur(latePenalty) + ')';
    let btn = isStopped ? 'Lanjutkan' : 'Bekukan';
    
    showConfirm(title, msg, async () => {
        sLoad('Menyimpan...');
        try {
            await db.collection("freshmart_orders").doc(orderId).update({
                'payment.tempoPenaltyStopped': !isStopped,
                'payment.tempoFixedPenalty': isStopped ? null : latePenalty
            });
            showToast(isStopped ? 'Denda dilanjutkan!' : 'Denda berhasil dibekukan!');
            window.rAdmPiutang();
        } catch(e) {
            showToast('Gagal mengubah status denda: ' + e.message);
        }
        hLoad();
    }, btn, !isStopped);
};


window.payTempoInstallment = (orderId) => {
    window.customPrompt('Masukkan Nominal Cicilan (Rp)', '', async (val) => {
        if (!val) return;
        let amount = parseFloat(val.replace(/[^0-9]/g, ''));
        if (isNaN(amount) || amount <= 0) return showToast('Nominal tidak valid!');
        
        sLoad('Menyimpan cicilan...');
        try {
            const doc = await db.collection("freshmart_orders").doc(orderId).get();
            const data = doc.data();
            
            let newBalance = (data.payment.tempoBalance || 0) - amount;
            let installments = data.payment.installments || [];
            
            installments.push({
                date: Date.now(),
                amount: amount,
                note: 'Cicilan'
            });
            
            let updates = {
                'payment.tempoBalance': Math.max(0, newBalance),
                'payment.installments': installments
            };
            
            if (newBalance <= 0) {
                updates['payment.paymentStatus'] = 'lunas';
                updates['status'] = 'Selesai';
            }
            
            await db.collection("freshmart_orders").doc(orderId).update(updates);
            showToast('Cicilan berhasil ditambahkan!');
            
            if (window.rAdmPiutang) window.rAdmPiutang();
        } catch(e) {
            showToast('Gagal memproses cicilan: ' + e.message);
        }
        hLoad();
    });
};

window.previewTempoReceipt = async (orderId) => {
    sLoad('Memuat data struk...');
    try {
        const doc = await db.collection("freshmart_orders").doc(orderId).get();
        if (!doc.exists) {
            hLoad(); return showToast('Pesanan tidak ditemukan');
        }
        const o = doc.data();
        hLoad();
        
        const d = o.dateString ? new Date(o.dateString).toLocaleString('id-ID',{day:'2-digit',month:'2-digit',year:'numeric',hour:'2-digit',minute:'2-digit'}) : '';
        const sN = appData.store.name || "Toko", sW = appData.store.wa || "";
        
        const pL = (l,r,len=32) => { const p=len-l.length-r.length; return l+(p>0?' '.repeat(p):' ')+r; };
        
        let h = `<div class="text-center font-bold" style="font-size:13px;margin-bottom:2px;">${esc(sN)}</div>`;
        if(sW) h += `<div class="text-center" style="margin-bottom:4px;">WA: ${esc(sW)}</div>`;
        h += `<div class="text-center font-bold uppercase my-2" style="font-size:14px;border-bottom:1px solid #000;border-top:1px solid #000;padding:2px 0;">NOTA TEMPO${o.payment?.paymentStatus === 'lunas' ? ' - LUNAS' : ''}</div>`;
        h += `<div style="white-space:pre;">Order: #${o.orderId}</div><div style="white-space:pre;">Tgl  : ${d}</div><div style="white-space:pre;">Plg  : ${esc(o.customer?.name||'Guest').substring(0,20)}</div>`;
        if (o.payment?.tempoDueDate) {
            h += `<div style="white-space:pre;">J.Tmp: ${new Date(o.payment.tempoDueDate).toLocaleDateString('id-ID')}</div>`;
        }
        h += `<div class="border-b border-dashed border-black my-2"></div>`;
        
        let subtotal = 0;
        o.items.forEach(i => {
            let vText = i.variantName ? ` (${esc(i.variantName)}${i.colorCode ? ' ' + esc(i.colorCode) : ''})` : '';
            const n = (esc(i.name) + vText + (i.poTime?` [PO]`:'')).substring(0,32);
            const q = `${parseFloat(i.qty)} ${esc(i.unit||'pcs')} x ${i.effectivePrice.toLocaleString('id-ID')}`;
            const t = (parseFloat(i.qty)*i.effectivePrice).toLocaleString('id-ID');
            h += `<div style="white-space:pre-wrap;font-weight:bold;word-break:break-all;">${n}</div><div style="white-space:pre;font-size:11px;">${pL(q,t)}</div>`;
            if (i.poTime) {
                h += `<div style="white-space:pre;font-size:10px;font-style:italic;color:#4b5563;">* Estimasi PO: ${esc(i.poTime)}</div>`;
            }
            subtotal += (parseFloat(i.qty)*i.effectivePrice);
        });
        
        h += `<div class="border-b border-dashed border-black my-2"></div>`;
        h += `<div style="white-space:pre;font-weight:bold;">${pL('Subtotal', subtotal.toLocaleString('id-ID'))}</div>`;
        
        if (o.payment?.grandTotal && o.payment.grandTotal !== subtotal) {
            let diff = o.payment.grandTotal - subtotal;
            if (diff > 0) {
                h += `<div style="white-space:pre;">${pL('Ongkir/Biaya', diff.toLocaleString('id-ID'))}</div>`;
            } else {
                h += `<div style="white-space:pre;">${pL('Diskon', Math.abs(diff).toLocaleString('id-ID'))}</div>`;
            }
        }
        
        h += `<div style="white-space:pre;font-weight:bold;margin-top:4px;">${pL('TOTAL KREDIT', (o.payment?.grandTotal || subtotal).toLocaleString('id-ID'))}</div>`;
        h += `<div class="border-b border-black my-2" style="border-width:1px;"></div>`;
        
        let totalPaid = 0;
        if (o.payment?.installments && o.payment.installments.length > 0) {
            h += `<div style="white-space:pre;font-weight:bold;margin-bottom:2px;">HISTORI CICILAN:</div>`;
            o.payment.installments.forEach((ins, idx) => {
                let idate = new Date(ins.date).toLocaleDateString('id-ID', {day:'2-digit',month:'short'});
                let amt = ins.amount.toLocaleString('id-ID');
                h += `<div style="white-space:pre;">${pL(`${idx+1}. ${idate}`, amt)}</div>`;
                totalPaid += ins.amount;
            });
            h += `<div style="white-space:pre;font-weight:bold;margin-top:2px;">${pL('TOTAL DIBAYAR', totalPaid.toLocaleString('id-ID'))}</div>`;
            h += `<div class="border-b border-dashed border-black my-2"></div>`;
        }
        
        let sisaPokok = o.payment?.tempoBalance || 0;
        
        // Cek denda late penalty if not yet paid
        let latePenalty = 0;
        let isStopped = o.payment?.tempoPenaltyStopped === true;
        let dueDate = o.payment?.tempoDueDate || 0;
        let rate = o.payment?.tempoPenaltyRate !== undefined ? parseFloat(o.payment.tempoPenaltyRate) : 1;
        
        if (o.payment?.paymentStatus !== 'lunas') {
            if (isStopped) {
                latePenalty = parseFloat(o.payment?.tempoFixedPenalty) || 0;
            } else if (Date.now() > dueDate) {
                let daysLate = Math.floor((Date.now() - dueDate) / (24 * 60 * 60 * 1000));
                if (daysLate > 0) latePenalty = (rate / 100 * sisaPokok) * daysLate;
            }
        }
        
        h += `<div style="white-space:pre;font-weight:bold;">${pL('SISA POKOK', sisaPokok.toLocaleString('id-ID'))}</div>`;
        if (latePenalty > 0) {
            h += `<div style="white-space:pre;">${pL('DENDA', Math.round(latePenalty).toLocaleString('id-ID'))}</div>`;
        }
        
        let tagihanAkhir = sisaPokok + latePenalty;
        h += `<div class="border-b border-black my-2" style="border-width:1px;"></div>`;
        h += `<div style="white-space:pre;font-weight:black;">${pL('SISA TAGIHAN', Math.round(tagihanAkhir).toLocaleString('id-ID'))}</div>`;
        
        const hasPO = o.items.some(i => i.poTime && i.poTime !== '');
        if (hasPO) {
            h += `<div class="border-b border-dashed border-black my-2"></div><div style="white-space:pre-wrap;font-size:9px;text-align:center;line-height:1.2;font-style:italic;color:#4b5563;margin-bottom:4px;">* Catatan: Untuk pesanan gabungan, produk PO akan dikirimkan menyusul (estimasi sesuai label) tanpa dikenakan biaya tambahan.</div>`;
        }
        h += `<div class="border-b border-dashed border-black my-2"></div><div class="text-center my-2" style="font-size:10px;">Terima kasih atas kepercayaannya.</div><div class="border-b border-dashed border-black my-2"></div><div style="height:20px;"></div>`;
        
        setH('receipt-paper-content', h);
        const mRec = el('receipt-preview-modal');
        if (mRec && mRec.classList.contains('hidden')) pushModalHistory('receipt');
        show('receipt-preview-modal');
        setTimeout(() => { el('receipt-preview-modal').classList.remove('opacity-0'); el('receipt-preview-modal-box').classList.remove('scale-95'); }, 10);
    } catch (e) {
        hLoad(); showToast('Gagal memuat struk: ' + e.message);
    }
};
window.markTempoPaid = async (orderId) => {
    showConfirm('Konfirmasi', 'Tandai tagihan tempo ini sebagai LUNAS?', async () => {
    try {
        await db.collection("freshmart_orders").doc(orderId).update({
            'payment.paymentStatus': 'lunas',
            'payment.tempoBalance': 0,
            status: 'Selesai'
        });
        showToast('Tagihan berhasil dilunasi!');
        let idx = gOrds.findIndex(o => o.orderId === orderId);
        if(idx !== -1) {
            gOrds[idx].payment.paymentStatus = 'lunas';
            gOrds[idx].payment.tempoBalance = 0;
            gOrds[idx].status = 'Selesai';
        }
        window.rAdmPiutang(); 
    } catch(e) {
        showToast('Gagal mengubah status: ' + e.message);
    }
    });
};

window.rAdmPiutang = async () => {
    sLoad('Memuat data piutang...');
    let piutangOrders = [];
    try {
        const snap = await db.collection("freshmart_orders")
            .where("payment.method", "==", "tempo")
            .where("payment.paymentStatus", "==", "hutang")
            .get();
        snap.forEach(doc => { piutangOrders.push(doc.data()); });
    } catch (e) {
        hLoad();
        showToast('Gagal memuat piutang: ' + e.message);
        return;
    }
    hLoad();

    let totalPiutang = 0;
    
    let h = `
    <div class="max-w-full pb-10 fade-in text-sm">
        <div class="mb-5 bg-white dark:bg-slate-800 p-5 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm flex items-center justify-between">
            <div class="flex items-center gap-4">
                <div class="w-12 h-12 bg-pink-50 dark:bg-pink-900/30 text-pink-600 rounded-xl flex items-center justify-center"><i class="fa-solid fa-hand-holding-dollar text-xl"></i></div>
                <div>
                    <h2 class="font-bold text-slate-800 dark:text-slate-100 uppercase tracking-widest text-sm">Tagihan Tempo</h2>
                    <p class="text-[10px] font-bold text-slate-400 mt-1">Daftar pelanggan VIP yang belum lunas</p>
                </div>
            </div>
            <div class="text-right">
                <p class="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Total Piutang Berjalan</p>
                <p class="text-xl font-bold text-rose-500" id="total-piutang-header">Rp 0</p>
            </div>
        </div>
    `;

    if (piutangOrders.length === 0) {
        h += `<div class="bg-white dark:bg-slate-800 p-8 text-center rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
                <div class="w-20 h-20 bg-emerald-50 dark:bg-emerald-900/30 text-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4"><i class="fa-solid fa-check-double text-4xl"></i></div>
                <h3 class="font-bold text-slate-700 dark:text-slate-200 text-lg uppercase tracking-widest">Luar Biasa!</h3>
                <p class="text-slate-500 mt-2 text-xs font-bold">Semua tagihan pelanggan telah lunas. Tidak ada piutang tertunda.</p>
              </div>`;
    } else {
        h += `<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">`;
        piutangOrders.forEach(o => {
            let sisa = o.payment?.tempoBalance || 0;
            let rate = o.payment?.tempoPenaltyRate !== undefined ? parseFloat(o.payment.tempoPenaltyRate) : 1;
            let isStopped = o.payment?.tempoPenaltyStopped === true;
            let latePenalty = 0;
            let dueDate = o.payment?.tempoDueDate || 0;
            let daysLate = 0;
            let isLate = false;
            
            if (isStopped) {
                latePenalty = parseFloat(o.payment?.tempoFixedPenalty) || 0;
                if (Date.now() > dueDate) {
                    daysLate = Math.floor((Date.now() - dueDate) / (24 * 60 * 60 * 1000));
                    if (daysLate > 0) isLate = true;
                }
            } else if (Date.now() > dueDate) {
                daysLate = Math.floor((Date.now() - dueDate) / (24 * 60 * 60 * 1000));
                if (daysLate > 0) {
                    isLate = true;
                    latePenalty = (rate / 100 * sisa) * daysLate;
                }
            }
            
            let totalAkhir = sisa + latePenalty;
            totalPiutang += totalAkhir;
            let waNum = window.normalizeWA ? window.normalizeWA(o.customer?.wa) : (o.customer?.wa || "");
            
            h += `
            <div class="bg-white dark:bg-slate-800 p-5 rounded-2xl border ${isLate ? 'border-rose-300 dark:border-rose-700 shadow-[0_0_15px_rgba(225,29,72,0.1)]' : 'border-slate-200 dark:border-slate-700 shadow-sm'} relative overflow-hidden group hover:-translate-y-1 transition-all">
                ${isLate ? `<div class="absolute -right-6 top-4 ${isStopped ? 'bg-slate-500' : 'bg-rose-500'} text-white text-[9px] font-bold uppercase tracking-widest px-8 py-1 rotate-45 shadow-sm">TERLAMBAT ${daysLate} HARI</div>` : ''}
                
                <div class="flex justify-between items-start mb-4 pr-12">
                    <div>
                        <p class="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Pesanan #${o.orderId.substring(4, 10)}</p>
                        <h3 class="font-bold text-slate-800 dark:text-slate-200 mt-1 uppercase">${esc(o.customer?.name || 'Anonim')}</h3>
                        <p class="text-[10px] font-bold text-slate-500 flex items-center gap-1 mt-0.5"><i class="fa-brands fa-whatsapp text-emerald-500"></i> ${esc(o.customer?.wa || '-')}</p>
                    </div>
                </div>
                
                <div class="space-y-2 mb-4 bg-slate-50 dark:bg-slate-900/50 p-3.5 rounded-xl border border-slate-100 dark:border-slate-700/50">
                    <div class="flex justify-between items-center text-xs">
                        <span class="font-bold text-slate-500">Jatuh Tempo</span>
                        <span class="font-bold ${isLate ? 'text-rose-600' : 'text-slate-700 dark:text-slate-300'}">${new Date(dueDate).toLocaleDateString('id-ID')}</span>
                    </div>
                    <div class="flex justify-between items-center text-xs">
                        <span class="font-bold text-slate-500">Sisa Pokok</span>
                        <span class="font-bold text-slate-700 dark:text-slate-300 font-mono">${fCur(sisa)}</span>
                    </div>
                    ${isLate ? `
                    <div class="flex justify-between items-center text-xs ${isStopped ? 'text-slate-500' : 'text-rose-600'}">
                        <span class="font-bold">Denda (${rate}%/hari) ${isStopped ? '<span class="text-[9px] bg-slate-200 dark:bg-slate-700 px-1 py-0.5 rounded ml-1">STOPPED</span>' : ''}</span>
                        <span class="font-bold font-mono">+${fCur(latePenalty)}</span>
                    </div>` : ''}
                </div>
                
                <div class="flex justify-between items-center bg-rose-50 text-rose-600 dark:bg-rose-900/20 dark:text-rose-400 p-3.5 rounded-xl border border-rose-100 dark:border-rose-900/30 mb-3">
                    <span class="text-[10px] font-bold uppercase tracking-widest">Total Tagihan</span>
                    <span class="text-sm font-bold font-mono tracking-tight">${fCur(totalAkhir)}</span>
                </div>
                
                <div class="flex gap-2 mb-3">
                    <button onclick="editTempoPenalty('${o.orderId}', ${rate})" class="flex-1 bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 text-slate-600 dark:text-slate-300 rounded-xl py-2 flex items-center justify-center gap-1.5 text-[10px] font-bold uppercase tracking-widest transition-all">
                        <i class="fa-solid fa-percent"></i> Edit Denda
                    </button>
                    <button onclick="stopTempoPenalty('${o.orderId}', ${latePenalty}, ${isStopped})" class="flex-1 ${isStopped ? 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-200' : 'bg-rose-100 dark:bg-rose-900/30 text-rose-600 dark:text-rose-400 hover:bg-rose-200'} rounded-xl py-2 flex items-center justify-center gap-1.5 text-[10px] font-bold uppercase tracking-widest transition-all">
                        <i class="fa-solid ${isStopped ? 'fa-play' : 'fa-stop'}"></i> ${isStopped ? 'Lanjut Denda' : 'Stop Denda'}
                    </button>
                </div>
                
                ${o.payment?.installments && o.payment.installments.length > 0 ? `
                <div class="mb-3 space-y-1.5 bg-slate-50 dark:bg-slate-900/30 p-3 rounded-xl border border-slate-100 dark:border-slate-800">
                    <div class="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-2 flex justify-between">
                        <span>Riwayat Cicilan</span>
                        <span>Total: ${fCur(o.payment.installments.reduce((sum, ins) => sum + (parseFloat(ins.amount)||0), 0))}</span>
                    </div>
                    ${o.payment.installments.map((ins) => `
                    <div class="flex justify-between items-center text-[10px]">
                        <span class="text-slate-500 dark:text-slate-400">${new Date(ins.date).toLocaleDateString('id-ID')}</span>
                        <span class="font-bold text-emerald-600 dark:text-emerald-400 font-mono">+${fCur(ins.amount)}</span>
                    </div>
                    `).join('')}
                </div>` : ''}
                
                <div class="flex gap-2 mb-2">
                    <a href="https://wa.me/${waNum}?text=Halo%20kak%20${esc(o.customer?.name||'')},%20mengingatkan%20bahwa%20sisa%20tagihan%20Tempo%20untuk%20pesanan%20${o.orderId}%20sebesar%20${fCur(totalAkhir)}%20sudah%20jatuh%20tempo.%20Mohon%20segera%20dilunasi." target="_blank" class="flex-1 bg-emerald-50 dark:bg-emerald-900/30 hover:bg-emerald-100 dark:hover:bg-emerald-900/50 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800 rounded-xl py-2 flex items-center justify-center gap-1.5 text-[10px] font-bold uppercase tracking-widest transition-all">
                        <i class="fa-brands fa-whatsapp text-sm"></i> Tagih
                    </a>
                    <button onclick="previewTempoReceipt('${o.orderId}')" class="flex-1 bg-amber-500 hover:bg-amber-600 text-white rounded-xl py-2 flex items-center justify-center gap-1.5 text-[10px] font-bold uppercase tracking-widest shadow-sm shadow-amber-500/30 transition-all">
                        <i class="fa-solid fa-print"></i> Struk
                    </button>
                </div>
                <div class="flex gap-2">
                    <button onclick="payTempoInstallment('${o.orderId}')" class="flex-1 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl py-2.5 flex items-center justify-center gap-1.5 text-[10px] font-bold uppercase tracking-widest shadow-sm transition-all">
                        <i class="fa-solid fa-money-bill-wave"></i> Cicil
                    </button>
                    <button onclick="markTempoPaid('${o.orderId}')" class="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl py-2.5 flex items-center justify-center gap-1.5 text-[10px] font-bold uppercase tracking-widest shadow-sm transition-all">
                        <i class="fa-solid fa-check-double"></i> Lunas
                    </button>
                </div>
            </div>`;
        });
        h += `</div>`;
    }
    
    h += `</div>`;
    setH('admin-content', h);
    
    setTimeout(() => {
        if(el('total-piutang-header')) el('total-piutang-header').innerText = fCur(totalPiutang);
    }, 100);
};

window.openAdminTab = (t, fH=false) => {
    const adminScroll = document.querySelector('#view-admin .scroll-content');
    if (adminScroll) adminScroll.scrollTop = 0;
    cTab=t; aSq='';
    if (!fH) {
        // FIX BACK BUTTON: jika sudah di dalam konten tab (bukan dashboard), GANTI state
        // (replaceState) alih-alih menumpuk state baru (pushState). Dengan ini, pindah
        // dari Tab A → Tab B tidak menambah entri ke history stack, sehingga menekan
        // tombol back dari tab manapun SELALU kembali ke dashboard admin — bukan ke tab
        // sebelumnya. pushState hanya dipakai saat PERTAMA kali masuk tab dari dashboard.
        const curState = history.state;
        if (curState && curState.view === 'view-admin' && curState.tab) {
            history.replaceState({view:'view-admin', tab:t}, '', window.location.href);
        } else {
            history.pushState({view:'view-admin', tab:t}, '', window.location.href);
        }
    }

    hide('admin-dashboard-view'); show('admin-content-view'); show('btn-admin-back'); hide('admin-logo-box');
    const titles = {'orders':'Pesanan', 'settings':'Toko', 'products':'Produk', 'categories':'Kategori', 'brands':'Merek', 'banks':'Rekening', 'banners':'Banner', 'vouchers':'Voucher', 'customers':'Database Pelanggan', 'rewards':'Program Hadiah', 'reviews':'Ulasan Pelanggan', 'tax':'Pajak & Keuangan', 'piutang':'Piutang Tempo', 'colors':'Database Warna'};
    setIn('admin-header-title', titles[t]||'CMS');
    if(t !== 'orders' && aOrdLst){ aOrdLst(); aOrdLst=null; }
    // FIX BUG: tab Database Pelanggan dulu cuma ambil data SEKALI (snapshot),
    // jadi kalau ada poin bertambah/berkurang (mis. klaim hadiah) SAAT tab ini
    // sedang terbuka, angkanya tidak ikut ter-update sampai tab dibuka ulang.
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
    else rAdmL(t);
};



const rAdmOrd = () => {
    // --- FITUR EXPORT LAPORAN PENJUALAN KE EXCEL ---
window.exportOrdersToExcel = async () => {
    if (!gOrds || gOrds.length === 0) return showToast("Belum ada data pesanan!");
    
    // FITUR BARU (PERFORMA): muat XLSX cuma saat tombol ini diklik, bukan di setiap kunjungan
    sLoad('Menyiapkan modul Excel...');
    try {
        await ensureScriptLoaded('https://cdn.sheetjs.com/xlsx-0.20.3/package/dist/xlsx.full.min.js', () => typeof XLSX !== 'undefined');
    } catch(e) {
        hLoad();
        showToast('Gagal memuat modul Excel. Cek koneksi internet Anda.');
        return;
    }
    hLoad();
    
    // 1. Siapkan data dalam bentuk Array of Objects
    let dataExcel = [];

    gOrds.forEach((o, index) => {
        let date = o.dateString ? new Date(o.dateString).toLocaleString('id-ID') : '-';
        let custName = o.customer?.name || 'Anonim';
        let method = o.customer?.deliveryMethod === 'delivery' ? 'Kurir' : 'Ambil Sendiri';
        let status = o.status || '-';
        let totalItem = o.items ? o.items.reduce((sum, i) => sum + (parseFloat(i.qty)||0), 0) : 0;
        let totalHarga = o.payment?.grandTotal || 0;

        dataExcel.push({
            "No": index + 1,
            "ID Pesanan": o.orderId,
            "Tanggal": date,
            "Nama Pelanggan": custName,
            "Metode Kirim": method,
            "Status": status,
            "Total Item": totalItem,
            "Total Tagihan (Rp)": totalHarga
        });
    });

    // 2. Buat Worksheet & Workbook menggunakan SheetJS
    const worksheet = XLSX.utils.json_to_sheet(dataExcel);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Laporan Pesanan");

    // 3. Atur lebar kolom agar teks tidak terpotong dan terlihat rapi
    const wscols = [
        {wch: 5},  // Lebar kolom No
        {wch: 25}, // Lebar kolom ID Pesanan
        {wch: 22}, // Lebar kolom Tanggal
        {wch: 25}, // Lebar kolom Nama Pelanggan
        {wch: 15}, // Lebar kolom Metode Kirim
        {wch: 15}, // Lebar kolom Status
        {wch: 12}, // Lebar kolom Total Item
        {wch: 20}  // Lebar kolom Total Tagihan
    ];
    worksheet['!cols'] = wscols;

    // 4. Simpan dan Unduh sebagai file .xlsx ASLI
    const safeDateString = new Date().toISOString().split('T')[0];
    XLSX.writeFile(workbook, `Laporan_Pesanan_${safeDateString}.xlsx`);

    showToast("Laporan Excel (.xlsx) berhasil diunduh!");
};

    // Header Live Orders
    setH('admin-content', `
        <div class="mb-5 flex justify-between items-center bg-white dark:bg-slate-800 p-4 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
            <div class="flex items-center gap-3">
                <div class="w-10 h-10 rounded-xl flex items-center justify-center" style="background: rgba(var(--color-primary-rgb),0.1); color: var(--color-primary)">
                    <i class="fa-solid fa-satellite-dish animate-pulse text-base"></i>
                </div>
                <div>
                    <h2 class="font-bold text-sm text-slate-800 dark:text-slate-100 uppercase tracking-widest leading-tight">Live Orders</h2>
                    <p class="text-[9px] font-bold text-slate-500 mt-0.5">Pantau pesanan masuk secara realtime</p>
                </div>
            </div>
            <button onclick="exportOrdersToExcel()" class="h-9 px-4 rounded-xl text-xs font-bold flex items-center gap-1.5 shadow-sm border transition-all active:scale-95 hover:text-white hover:border-[var(--color-primary)] text-slate-600 dark:text-slate-300 bg-slate-50 dark:bg-slate-700 border-slate-200 dark:border-slate-600" style="--tw-shadow-color: rgba(var(--color-primary-rgb),0.2)" onmouseover="this.style.background='var(--color-primary)'" onmouseout="this.style.background=''">
                <i class="fa-solid fa-file-csv"></i> <span class="hidden sm:inline">Export Excel</span>
            </button>
        </div>
        <div id="admin-orders-list" class="space-y-4"><div class="text-center py-16"><div class="w-12 h-12 border-4 border-emerald-500/20 border-t-emerald-500 rounded-full animate-spin mx-auto"></div></div></div>
    `);
    
    const s = () => {
        if(aOrdLst){ aOrdLst(); aOrdLst=null; }
        let isInitial = true; 
        aOrdLst = db.collection("freshmart_orders").orderBy("timestamp","desc").limit(100).onSnapshot(p => {
            gOrds = [];
            if(!isInitial) {
                // FIX: hanya trigger notifikasi untuk dokumen BENAR-BENAR baru
                // (bukan modified/removed), dan pastikan bukan hanya perubahan status.
                let isNewOrder = false;
                p.docChanges().forEach(change => {
                    if(change.type === 'added') {
                        const addedData = change.doc.data();
                        // Jika pesanan baru dengan status 'Baru', baru notifikasi
                        if (addedData.status === 'Baru') isNewOrder = true;
                    }
                });
                if(isNewOrder) {
                    showToast("🔔 Pesanan Baru Masuk!");
                    try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = ctx.createOscillator(), gain = ctx.createGain();
    osc.connect(gain); gain.connect(ctx.destination);
    
    osc.type = 'sine';
    
    // Ding-Dong Pertama
    osc.frequency.setValueAtTime(800, ctx.currentTime); // Ding
    gain.gain.setValueAtTime(1, ctx.currentTime);
    osc.frequency.setValueAtTime(600, ctx.currentTime + 0.2); // Dong
    
    // Jeda sejenak, lalu Ding-Dong Kedua di detik ke-0.6
    osc.frequency.setValueAtTime(800, ctx.currentTime + 0.6); // Ding
    gain.gain.setValueAtTime(1, ctx.currentTime + 0.6);
    osc.frequency.setValueAtTime(600, ctx.currentTime + 0.8); // Dong
    
    // Memudar perlahan dan berhenti di detik ke-1.5
    gain.gain.exponentialRampToValueAtTime(0.00001, ctx.currentTime + 1.5); 
    
    osc.start(ctx.currentTime); 
    osc.stop(ctx.currentTime + 1.5);
} catch(e) {}
                }
            }
            isInitial = false;

            if(p.empty){ setH('admin-orders-list', `<div class="flex flex-col items-center justify-center py-20 text-slate-400 font-bold bg-white dark:bg-slate-800 rounded-[1.5rem] border border-slate-200 dark:border-slate-700 shadow-sm text-center"><i class="fa-solid fa-receipt text-5xl mb-4 opacity-30"></i>Belum ada pesanan</div>`); setIn('stat-orders',0); return; }
            setIn('stat-orders', p.size+(p.size===100?'+':''));
            
            setH('admin-orders-list', p.docs.map(d => {
                const o = d.data(); gOrds.push(o);
                
                // Styling Status & Dinamic Icon Box
                let bC = "text-slate-500 border-slate-200 dark:border-slate-600", iC = "fa-clock", boxBg = "bg-slate-50 dark:bg-slate-700/50", boxText = "text-slate-400";
                if(o.status==='Baru'){
                    bC="text-rose-500 border-rose-200 bg-rose-50 dark:bg-rose-900/20 dark:border-rose-800 animate-pulse"; 
                    iC="fa-asterisk"; boxBg="bg-rose-500"; boxText="text-white shadow-md shadow-rose-500/30";
                }
                else if(o.status==='Diproses'){
                    bC="text-emerald-500 border-emerald-200 bg-emerald-50 dark:bg-emerald-900/20 dark:border-emerald-800"; 
                    iC="fa-spinner fa-spin"; boxBg="bg-emerald-500"; boxText="text-white shadow-sm";
                }
                else if(o.status==='Selesai'){
                    bC="text-emerald-500 border-emerald-200 bg-emerald-50 dark:bg-emerald-900/20 dark:border-emerald-800"; 
                    iC="fa-check-double"; boxBg="bg-emerald-50 dark:bg-emerald-900/30"; boxText="text-emerald-500";
                }
                else if(o.status==='Dibatalkan'){
                    bC="text-slate-400 border-slate-200 bg-slate-50 dark:bg-slate-800 dark:border-slate-700"; 
                    iC="fa-xmark"; boxBg="bg-slate-100 dark:bg-slate-800"; boxText="text-slate-400";
                }
                
                // Styling Icon Metode Bayar
                let pI="fa-wallet text-slate-400"; let method=o.payment?.method||'';
                if(method==='transfer') pI="fa-building-columns text-emerald-500"; 
                else if(method==='qris') pI="fa-qrcode text-purple-500"; 
                else if(method==='cod') pI="fa-hand-holding-dollar text-emerald-500"; 
                else if(method==='cashier') pI="fa-cash-register text-amber-500";
                
                let itemCount = o.items ? parseFloat(o.items.reduce((sum,item)=>sum+(parseFloat(item.qty)||0),0).toFixed(2)) : 0;
                const dStr = o.dateString ? new Date(o.dateString).toLocaleDateString('id-ID',{day:'numeric',month:'short'}) : '';
                
                // Menyederhanakan ID Pesanan agar tidak kepanjangan
                const shortId = (o.orderId || '').split('-').pop();
                
                // DESAIN KARTU PESANAN BARU (PREMIUM)
                return `
                <div class="bg-white dark:bg-slate-800 p-4 sm:p-5 md:p-6 lg:p-8 rounded-[1.5rem] border border-slate-200 dark:border-slate-700 shadow-sm relative overflow-hidden group cursor-pointer hover:shadow-lg hover:-translate-y-1 hover:border-emerald-400 dark:hover:border-emerald-500 transition-all duration-300" onclick="openOrderDetail('${o.orderId}')">
                    
                    <div class="flex items-center gap-4">
                        <div class="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl ${boxBg} ${boxText} flex items-center justify-center shrink-0 transition-colors">
                            <i class="fa-solid fa-receipt text-xl sm:text-2xl"></i>
                        </div>

                        <div class="flex-1 min-w-0">
                            <div class="flex justify-between items-start mb-1">
                                <div class="flex items-center gap-2">
                                    <span class="font-bold text-sm sm:text-base text-slate-800 dark:text-slate-100 tracking-tight">#${shortId}</span>
                                    <span class="text-[9px] font-bold px-2 py-0.5 rounded border ${bC} uppercase tracking-widest flex items-center"><i class="fa-solid ${iC} mr-1"></i> ${esc(o.status)}</span>
                                </div>
                                <span class="text-[10px] font-bold text-slate-400 flex items-center gap-1.5 whitespace-nowrap"><i class="fa-regular fa-calendar"></i> <span class="hidden sm:inline">${dStr}</span></span>
                            </div>

                            <div class="flex items-center gap-2 mt-1.5">
                                <p class="text-xs font-bold text-slate-600 dark:text-slate-300 truncate max-w-[120px] sm:max-w-xs"><i class="fa-solid fa-user text-slate-400 mr-1"></i> ${esc(o.customer?.name||'Anonim')}</p>
                                <span class="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-600 shrink-0"></span>
                                <span class="text-[9px] font-bold text-slate-500 bg-slate-100 dark:bg-slate-900 px-2 py-0.5 rounded-xl border border-slate-200 dark:border-slate-700 uppercase tracking-widest shrink-0">${itemCount} Item</span>
                                ${o.customer?.lat ? `<span class="text-[9px] font-bold text-emerald-500 bg-emerald-50 dark:bg-emerald-900/20 px-1.5 py-0.5 rounded-xl border border-emerald-100 dark:border-emerald-800 uppercase tracking-widest shrink-0"><i class="fa-solid fa-location-dot"></i> GPS</span>` : ''}
                                ${o.buktiPayment ? `<span class="text-[9px] font-bold text-violet-500 bg-violet-50 dark:bg-violet-900/20 px-1.5 py-0.5 rounded-xl border border-violet-100 dark:border-violet-800 uppercase tracking-widest shrink-0"><i class="fa-solid fa-image"></i></span>` : ''}
                            </div>
                        </div>
                        
                        <div class="w-8 h-8 rounded-full bg-slate-50 dark:bg-slate-700 flex items-center justify-center text-slate-400 group-hover:bg-emerald-500 group-hover:text-white transition-all shrink-0">
                            <i class="fa-solid fa-chevron-right text-sm"></i>
                        </div>
                    </div>

                    <div class="w-full border-t border-dashed border-slate-200 dark:border-slate-700 my-4"></div>

                    <div class="flex items-center justify-between">
                        <div class="flex items-center gap-2">
                            <span class="font-bold text-emerald-600 dark:text-emerald-400 text-lg sm:text-xl tracking-tight">${fCur(o.payment?.grandTotal)}</span>
                            ${o.payment?.ppnAmount ? `<span class="text-[8px] font-bold bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400 px-1.5 py-0.5 rounded border border-amber-200 dark:border-amber-800 uppercase tracking-widest">PPN ${o.payment.ppnRate||11}%</span>` : ''}
                        </div>
                        <div class="flex items-center gap-2 bg-slate-50 dark:bg-slate-900 px-3 py-1.5 rounded-xl border border-slate-100 dark:border-slate-700">
                            <i class="fa-solid ${pI} text-xs"></i>
                            <span class="text-[9px] font-bold text-slate-600 dark:text-slate-300 uppercase tracking-widest">${esc(method)}</span>
                        </div>
                    </div>
                </div>`;
            }).join(''));
        }, e => { setH('admin-orders-list', `<div class="text-center text-rose-500 font-bold">Koneksi terputus. Retrying...</div>`); setTimeout(s, 5000); });
    }; s();
};

window.openOrderDetail = i => {
    const o = gOrds.find(x => x.orderId === i);
    if (!o) return; cVOrd = i;
    
    // Desain Dropdown Status Presisi seperti Gambar
    let sSel = `<div class="relative w-full sm:w-40 mt-1"><select onchange="updateOrderStatus('${o.orderId}', this.value)" class="w-full text-sm font-bold ${o.status==='Baru'?'text-rose-600 bg-rose-50 border-rose-200':o.status==='Diproses'?'text-blue-600 bg-blue-50 border-blue-200':o.status==='Selesai'?'text-emerald-600 bg-emerald-50 border-emerald-200':'text-slate-500 bg-slate-50 border-slate-200'} border px-4 py-2.5 rounded-xl focus:outline-none appearance-none cursor-pointer transition-colors shadow-sm"><option value="Baru" ${o.status==='Baru'?'selected':''} class="text-slate-800">Baru (Pending)</option><option value="Diproses" ${o.status==='Diproses'?'selected':''} class="text-slate-800">Diproses</option><option value="Selesai" ${o.status==='Selesai'?'selected':''} class="text-slate-800">Selesai</option><option value="Dibatalkan" ${o.status==='Dibatalkan'?'selected':''} class="text-slate-800">Dibatalkan</option></select><i class="fa-solid fa-chevron-down absolute right-4 top-1/2 -translate-y-1/2 ${o.status==='Baru'?'text-rose-400':o.status==='Diproses'?'text-blue-400':o.status==='Selesai'?'text-emerald-400':'text-slate-400'} pointer-events-none text-xs"></i></div>`;
    
    setH('admin-order-modal-content', `
        <div class="flex flex-col gap-4 text-sm pb-2">
            
            <div class="bg-white dark:bg-slate-800 p-5 sm:p-6 rounded-[1.5rem] border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col sm:flex-row justify-between gap-5 sm:items-center">
                <div class="flex-1">
                    <p class="text-[10px] font-bold text-slate-500 uppercase tracking-widest flex items-center gap-1.5"><i class="fa-solid fa-crosshairs text-emerald-500"></i> Status</p>
                    ${sSel}
                </div>
                <div class="text-left sm:text-right flex flex-col justify-center">
                    <p class="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1.5">ID Pesanan</p>
                    <p class="text-sm sm:text-base font-bold text-slate-900 dark:text-white break-all tracking-wide">#${o.orderId}</p>
                    <p class="text-[10px] font-bold text-slate-400 mt-1.5">${o.dateString?new Date(o.dateString).toLocaleString('id-ID'):''}</p>
                </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-5 items-start">
            <div class="flex flex-col gap-4">

            <div class="bg-white dark:bg-slate-800 p-5 sm:p-6 rounded-[1.5rem] border border-slate-200 dark:border-slate-700 shadow-sm">
                <h4 class="font-bold text-slate-900 dark:text-white text-sm border-b border-slate-100 dark:border-slate-700 pb-4 mb-4 flex items-center gap-3"><div class="w-8 h-8 rounded-xl bg-blue-50 dark:bg-blue-900/30 text-blue-500 flex items-center justify-center border border-blue-100 dark:border-blue-800"><i class="fa-solid fa-user"></i></div> Data Pemesan</h4>
                <div class="space-y-4">
                    <div class="flex justify-between items-center"><span class="text-slate-500 dark:text-slate-400 font-bold">Nama</span><span class="font-bold text-slate-900 dark:text-white text-base">${esc(o.customer?.name||'-')}</span></div>
                    ${o.customer?.wa ? `<div class="flex justify-between items-center"><span class="text-slate-500 dark:text-slate-400 font-bold flex items-center gap-1.5"><i class="fa-brands fa-whatsapp text-green-500"></i> WhatsApp</span><a href="https://wa.me/${esc(o.customer.wa)}" target="_blank" class="font-bold text-green-600 dark:text-green-400 hover:underline">+${esc(o.customer.wa)}</a></div>` : ''}
                    ${o.customer?.wa ? `<button type="button" onclick="saveOrderCustomerToDB('${esc(o.customer.name||'')}','${esc(o.customer.wa)}')" class="w-full py-2.5 rounded-xl bg-teal-50 dark:bg-teal-900/20 border border-teal-200 dark:border-teal-800 text-teal-600 dark:text-teal-400 text-[11px] font-bold uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-teal-100 transition-all active:scale-95"><i class="fa-solid fa-address-book"></i> Simpan ke Database Pelanggan</button>` : ''}
                    <div class="border-t border-dashed border-slate-200 dark:border-slate-700 pt-4">
                        <span class="text-slate-500 dark:text-slate-400 font-bold flex items-center gap-2 mb-2.5"><i class="fa-solid fa-map-location-dot"></i> Alamat (${o.customer?.deliveryMethod==='delivery'?'Kurir':'Ambil Sendiri'})</span>
                        <div class="bg-slate-50 dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-700 font-bold text-slate-700 dark:text-slate-300 leading-relaxed shadow-inner text-sm">${esc(o.customer?.address||'-')}</div>
                        ${o.customer?.lat && o.customer?.deliveryMethod === 'delivery' ? `<a href="https://www.google.com/maps?q=${esc(o.customer.lat)},${esc(o.customer.lng)}" target="_blank" class="mt-3 flex items-center justify-center gap-2 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-800 font-bold text-xs py-2.5 px-4 rounded-xl hover:bg-blue-100 transition-colors"><i class="fa-solid fa-location-dot"></i> Buka Lokasi di Google Maps</a>` : ''}
                    </div>
                    ${o.customer?.note?`<div class="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-xl border border-amber-200 dark:border-amber-800 mt-2"><p class="text-[10px] font-bold text-amber-600 uppercase tracking-widest mb-1.5"><i class="fa-solid fa-note-sticky"></i> Catatan Pembeli</p><p class="text-sm text-amber-900 dark:text-amber-100 font-bold">${esc(o.customer.note)}</p></div>`:''}
                    ${o.buktiPayment ? `<div class="bg-violet-50 dark:bg-violet-900/20 p-4 rounded-xl border border-violet-200 dark:border-violet-800 mt-2"><p class="text-[10px] font-bold text-violet-600 dark:text-violet-400 uppercase tracking-widest mb-2.5"><i class="fa-solid fa-image"></i> Bukti Pembayaran</p><a href="${esc(o.buktiPayment)}" target="_blank" class="block rounded-xl overflow-hidden border border-violet-200 dark:border-violet-800"><img src="${esc(o.buktiPayment)}" alt="Bukti Pembayaran" class="w-full max-h-48 object-cover" onerror="this.style.display='none'" loading="lazy"></i><div class="bg-violet-100 dark:bg-violet-900/40 py-2 text-center text-[10px] font-bold text-violet-600 dark:text-violet-400"><i class="fa-solid fa-arrow-up-right-from-square mr-1"></i> Tap untuk buka</div></a></div>` : ''}
                </div>
            </div>

            </div>

            <div class="flex flex-col gap-4">

            <div class="bg-white dark:bg-slate-800 p-5 sm:p-6 rounded-[1.5rem] border border-slate-200 dark:border-slate-700 shadow-sm">
                <h4 class="font-bold text-slate-900 dark:text-white text-sm border-b border-slate-100 dark:border-slate-700 pb-4 mb-4 flex items-center gap-3"><div class="w-8 h-8 rounded-xl primary-light-icon-box flex items-center justify-center border border-slate-200 dark:border-slate-700"><i class="fa-solid fa-box-open"></i></div> Rincian Item</h4>
                <div class="space-y-3">${o.items.map(t=>`
                    <div class="flex justify-between items-center bg-slate-50 dark:bg-slate-900 p-3.5 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm min-w-0">
                        <div class="flex items-center gap-3 min-w-0">
                            <div class="w-10 h-10 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-600 flex items-center justify-center text-slate-500 dark:text-slate-400 shrink-0"><i class="fa-solid fa-tag text-sm"></i></div>
                            <div class="min-w-0">
                                <p class="font-bold text-sm text-slate-900 dark:text-white truncate mb-1" title="${esc(t.name)}">${esc(t.name)}</p>
                                ${(t.variantName || t.poTime) ? `
                                <div class="flex flex-wrap gap-1 mb-1">
                                    ${t.variantName ? `<span class="bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300 px-1.5 py-0.5 rounded-lg border border-slate-300 dark:border-slate-600 text-[9px] font-bold">${esc(t.variantName)}</span>` : ''}
                                    ${t.poTime ? `<span class="amber-badge px-1.5 py-0.5 rounded-lg text-[8px] font-bold uppercase">PO ${esc(t.poTime)}</span>` : ''}
                                </div>
                                ` : ''}
                                <p class="text-[11px] text-slate-500 dark:text-slate-400 font-bold">${parseFloat(t.qty)} ${esc(t.unit||'pcs')} x ${fCur(t.effectivePrice)}</p>
                            </div>
                        </div>
                        <div class="font-bold text-sm text-slate-900 dark:text-white ml-3 shrink-0">${fCur(t.effectivePrice*parseFloat(t.qty))}</div>
                    </div>`).join('')}
                </div>
            </div>

            ${o.claimedReward ? `
            <div class="bg-violet-50 dark:bg-violet-900/10 p-5 sm:p-6 rounded-[1.5rem] border border-violet-200 dark:border-violet-800 shadow-sm">
                <h4 class="font-bold text-violet-700 dark:text-violet-400 text-sm border-b border-violet-200 dark:border-violet-800 pb-4 mb-4 flex items-center gap-3"><div class="w-8 h-8 rounded-xl bg-violet-100 dark:bg-violet-900/40 text-violet-500 flex items-center justify-center border border-violet-200 dark:border-violet-800"><i class="fa-solid fa-gift"></i></div> Klaim Hadiah</h4>
                <div class="space-y-3">
                    <div class="flex justify-between items-center"><span class="text-slate-500 dark:text-slate-400 font-bold text-xs">Hadiah</span><span class="font-bold text-violet-700 dark:text-violet-400 text-sm">${esc(o.claimedReward.name)}</span></div>
                    <div class="flex justify-between items-center"><span class="text-slate-500 dark:text-slate-400 font-bold text-xs">Poin Ditukar</span><span class="font-bold text-slate-800 dark:text-white text-sm">${o.claimedReward.pointsCost} Poin</span></div>
                    <div class="flex justify-between items-center"><span class="text-slate-500 dark:text-slate-400 font-bold text-xs">Status</span><span class="font-bold text-xs px-2 py-1 rounded-xl ${o.claimedReward.status==='ready'?'bg-emerald-100 text-emerald-600':o.claimedReward.status==='waiting_stock'?'bg-amber-100 text-amber-600':'bg-slate-200 text-slate-600'}">${window.rewardStatusLabel(o.claimedReward)}</span></div>
                    ${o.claimedReward.note ? `<div class="bg-white/70 dark:bg-slate-900/40 p-2.5 rounded-xl text-[11px] italic text-violet-600 dark:text-violet-400">"${esc(o.claimedReward.note)}"</div>` : ''}
                    <div class="border-t border-dashed border-violet-200 dark:border-violet-800 pt-3.5 mt-1 space-y-2.5">
                        <button type="button" onclick="ackRewardClaim('${o.orderId}','ready')" class="w-full py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white text-[11px] font-bold uppercase tracking-widest flex items-center justify-center gap-2 active:scale-95 transition-all"><i class="fa-solid fa-check"></i> Stok Ada — Kirim Bersama Pesanan</button>
                        <button type="button" onclick="ackRewardClaim('${o.orderId}','waiting_stock')" class="w-full py-2.5 rounded-xl bg-amber-100 dark:bg-amber-900/30 hover:bg-amber-200 text-amber-700 dark:text-amber-400 border border-amber-200 dark:border-amber-800 text-[11px] font-bold uppercase tracking-widest flex items-center justify-center gap-2 active:scale-95 transition-all"><i class="fa-solid fa-clock"></i> Stok Kosong — Tunda Pengiriman</button>
                    </div>
                </div>
            </div>` : ''}

            <div class="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 p-6 sm:p-7 rounded-[1.5rem] text-white shadow-xl shadow-slate-900/20 border border-slate-700/60 relative overflow-hidden group mt-2">
                <div class="absolute -top-10 -right-10 w-32 h-32 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none group-hover:bg-emerald-500/30 transition-all duration-700"></div>
                <div class="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-emerald-900/20 to-transparent pointer-events-none"></div>
                
                <div class="flex justify-between items-center border-b border-slate-700/80 pb-4 mb-4 relative z-10">
                    <h4 class="font-bold text-[11px] uppercase tracking-widest text-slate-300 flex items-center gap-2.5"><i class="fa-solid fa-wallet text-emerald-400 text-sm"></i> Ringkasan Bayar</h4>
                    <span class="bg-white/10 backdrop-blur-md px-3 py-1 rounded-xl text-[10px] font-bold tracking-widest border border-white/10 uppercase shadow-inner text-white">${esc(o.payment?.method||'').toUpperCase()}</span>
                </div>
                
                <div class="space-y-3 font-medium text-sm text-slate-300 relative z-10">
                    <div class="flex justify-between items-center"><span>Subtotal Produk</span><span class="font-bold text-white">${fCur(o.payment?.subtotal)}</span></div>
                    ${o.customer?.deliveryMethod==='delivery'?`<div class="flex justify-between items-center"><span>Ongkos Kirim</span><span class="font-bold text-white">${fCur(o.payment?.shippingCost)}</span></div>`:''}
                    ${o.payment?.shippingDiscount?`<div class="flex justify-between items-center text-emerald-400 bg-emerald-900/20 px-2 py-1 -mx-2 rounded-xl"><span>Diskon Ongkir</span><span class="font-bold">-${fCur(o.payment.shippingDiscount)}</span></div>`:''}
                    ${o.payment?.productDiscount?`<div class="flex justify-between items-center text-rose-400 bg-rose-900/20 px-2 py-1 -mx-2 rounded-xl"><span>Diskon Promo</span><span class="font-bold">-${fCur(o.payment.productDiscount)}</span></div>`:''}
                    ${o.payment?.ppnAmount?`<div class="flex justify-between items-center text-amber-400 bg-amber-900/20 px-2 py-1 -mx-2 rounded-xl"><span>PPN (${o.payment.ppnRate||11}%)</span><span class="font-bold">+${fCur(o.payment.ppnAmount)}</span></div>`:''}
                </div>
                
                <div class="border-t border-dashed border-slate-600/60 my-5 relative z-10"></div>
                
                <div class="flex justify-between items-end relative z-10">
                    <span class="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">Total Tagihan</span>
                    <span class="text-3xl font-bold bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-dark)] bg-clip-text text-transparent tracking-tight drop-shadow-md">${fCur(o.payment?.grandTotal)}</span>
                </div>
            </div>

            </div>
            </div>

        </div>`);
        
    const mOrd = el('admin-order-modal');
    if (mOrd && mOrd.classList.contains('hidden')) pushModalHistory('adminOrder');
    show('admin-order-modal'); 
    setTimeout(()=>{ el('admin-order-modal').classList.remove('opacity-0'); el('admin-order-modal-box').classList.remove('scale-95'); }, 10);
};

// FITUR BARU: simpan nama+WA dari pesanan ke Database Pelanggan (buat baru / update nama jika sudah ada)
window.saveOrderCustomerToDB = async (name, waRaw) => {
    const phone = window.normalizeWA(waRaw);
    if (!phone || phone.length < 10) return showToast("Nomor WA tidak valid!");
    sLoad('Menyimpan...');
    try {
        const ref = db.collection("freshmart").doc("cms_data").collection("customers").doc(phone);
        const existing = await ref.get();
        if (existing.exists) {
            await ref.set({ name: name || existing.data().name }, { merge: true });
            showToast("Data pelanggan sudah ada, nama diperbarui.");
        } else {
            await ref.set({ id: parseInt(phone,10), name: name || '-', phone: phone, points: 0 });
            showToast("✅ Pelanggan baru disimpan ke database!");
        }
    } catch(e) { console.error('Gagal simpan pelanggan:', e); showToast("Gagal menyimpan data pelanggan: " + (e.message || '')); }
    finally { hLoad(); }
};

// FITUR BARU: admin ACC status klaim hadiah (stok ada -> kirim bersama pesanan / stok kosong -> tunda)
window.ackRewardClaim = async (orderId, status) => {
    if (status === 'waiting_stock') {
        window.customPrompt("Catatan untuk pelanggan:", "Stok hadiah kosong, akan kami kirim susulan begitu stok tersedia kembali.", async (note) => {
            if (note === null) return;
            sLoad('Menyimpan...');
            try {
                await db.collection("freshmart_orders").doc(orderId).update({
                    'claimedReward.status': status,
                    'claimedReward.note': note || ''
                });
                showToast('Status klaim hadiah diperbarui!');
                let idx = gOrds.findIndex(o => o.orderId === orderId);
                if(idx !== -1) {
                    if(!gOrds[idx].claimedReward) gOrds[idx].claimedReward = {};
                    gOrds[idx].claimedReward.status = status;
                    gOrds[idx].claimedReward.note = note || '';
                }
                openCustomerOrderDetail(orderId);
            } catch (e) {
                showToast('Gagal update klaim: ' + e.message);
            } finally { hLoad(); }
        });
        return; // async via callback
    }
    
    let note = '';
    sLoad('Menyimpan...');
    try {
        await db.collection("freshmart_orders").doc(orderId).update({
            'claimedReward.status': status,
            'claimedReward.note': note
        });
        const o = gOrds.find(x => x.orderId === orderId);
        if (o) { o.claimedReward.status = status; o.claimedReward.note = note; openOrderDetail(orderId); }
        showToast("Status hadiah diperbarui!");
    } catch(e) { console.error('Gagal update status hadiah:', e); showToast("Gagal update status hadiah: " + (e.message || '')); }
    finally { hLoad(); }
};

window.closeOrderDetailModal = (fH=false) => {
    requestCloseModal('adminOrder', fH, () => {
        el('admin-order-modal').classList.add('opacity-0');
        el('admin-order-modal-box').classList.add('scale-95');
        setTimeout(()=>hide('admin-order-modal'), 300);
    });
};

window.updateOrderStatus = async(i, s) => {
    if(isSaving) return; isSaving=true; sLoad('Update...');
    try{ await db.collection("freshmart_orders").doc(i).update({status:s}); let ord=gOrds.find(x=>x.orderId===i); if(ord)ord.status=s; openOrderDetail(i); showToast("Status diupdate!"); } catch(e){ showToast("Gagal!"); } finally{ isSaving=false; hLoad(); }
};

window.konfirmasiKeWA = async (orderId) => {
    if (!orderId) return showToast('ID pesanan tidak valid!');
    sLoad('Memuat data...');
    try {
        const doc = await db.collection('freshmart_orders').doc(orderId).get();
        hLoad();
        if (!doc.exists) return showToast('Data pesanan tidak ditemukan!');
        const d = doc.data();
        const waNum = d.customer && d.customer.wa;
        if (!waNum) return showToast('Nomor WhatsApp pelanggan tidak tersedia!');
        
        const storeName = (appData && appData.store && appData.store.name) ? appData.store.name : 'Toko Kami';
        const cName = (d.customer && d.customer.name) ? d.customer.name : 'Pelanggan';
        const status = d.status || 'Baru';
        const grandTotal = (d.payment && d.payment.grandTotal) ? fCur(d.payment.grandTotal) : '-';
        const method = (d.payment && d.payment.method) ? d.payment.method.toUpperCase() : '-';
        
        const msg = `Halo *${cName}*! 👋\n\n`
            + `Terima kasih telah berbelanja di *${storeName}*. 🛒\n\n`
            + `*Detail Pesanan Anda:*\n`
            + `📋 ID: *${orderId.split('-').pop()}*\n`
            + `💰 Total: *${grandTotal}*\n`
            + `💳 Pembayaran: *${method}*\n`
            + `📦 Status: *${status}*\n\n`
            + `Kami akan segera memproses pesanan Anda. Terima kasih! 🙏`;
        
        window.open(`https://wa.me/${waNum}?text=${encodeURIComponent(msg)}`, '_blank');
    } catch(e) {
        hLoad();
        showToast('Gagal memuat data pesanan!');
    }
};

window.deleteOrder = i => {
    showConfirm("Hapus Pesanan", "Yakin ingin hapus permanen?", async() => {
        if(isSaving) return; isSaving=true; sLoad('Menghapus...');
        try{ await db.collection("freshmart_orders").doc(i).delete(); showToast("Terhapus!"); if(cVOrd===i) closeOrderDetailModal(); } catch(e){ showToast("Gagal!"); } finally{ isSaving=false; hLoad(); }
    });
};

window.openReceiptPreview = () => {
    const o = gOrds.find(x => x.orderId === cVOrd); if(!o) return;
    const d = o.dateString ? new Date(o.dateString).toLocaleString('id-ID',{day:'2-digit',month:'2-digit',year:'numeric',hour:'2-digit',minute:'2-digit'}) : '';
    const sN = appData.store.name || "Toko", sW = appData.store.wa || "";
    
    const pL = (l,r,len=32) => { const p=len-l.length-r.length; return l+(p>0?' '.repeat(p):' ')+r; };
    
    let h = `<div class="text-center font-bold" style="font-size:13px;margin-bottom:2px;">${esc(sN)}</div>`;
    if(sW) h += `<div class="text-center" style="margin-bottom:4px;">WA: ${esc(sW)}</div>`;
    h += `<div class="border-b border-dashed border-black my-2"></div><div style="white-space:pre;">Order: #${o.orderId}</div><div style="white-space:pre;">Tgl  : ${d}</div><div style="white-space:pre;">Plg  : ${esc(o.customer.name||'Guest').substring(0,20)}</div><div style="white-space:pre;">Tipe : ${o.customer.deliveryMethod==='delivery'?'Kurir':'Toko'}</div><div class="border-b border-dashed border-black my-2"></div>`;
    if(o.customer.note) { h += `<div style="white-space:pre-wrap;word-break:break-all;">Cat: ${esc(o.customer.note)}</div><div class="border-b border-dashed border-black my-2"></div>`; }
    
    // MODIFIKASI: Cetak Teks Hex Code di Printer Thermal
    o.items.forEach(i => {
        let vText = i.variantName ? ` (${esc(i.variantName)}${i.colorCode ? ' ' + esc(i.colorCode) : ''})` : '';
        const n = (esc(i.name) + vText + (i.poTime?` [PO]`:'')).substring(0,32);
        const q = `${parseFloat(i.qty)} ${esc(i.unit||'pcs')} x ${i.effectivePrice.toLocaleString('id-ID')}`;
        const t = (parseFloat(i.qty)*i.effectivePrice).toLocaleString('id-ID');
        h += `<div style="white-space:pre-wrap;font-weight:bold;word-break:break-all;">${n}</div><div style="white-space:pre;font-size:11px;">${pL(q,t)}</div>`;
        if (i.poTime) {
            h += `<div style="white-space:pre;font-size:10px;font-style:italic;color:#4b5563;">* Estimasi PO: ${esc(i.poTime)}</div>`;
        }
    });
    
    h += `<div class="border-b border-dashed border-black my-2"></div><div style="white-space:pre;">${pL('Subtotal',(o.payment?.subtotal||0).toLocaleString('id-ID'))}</div>`;
    if(o.customer?.deliveryMethod === 'delivery') h += `<div style="white-space:pre;">${pL('Ongkir',(o.payment?.shippingCost||0).toLocaleString('id-ID'))}</div>`;
    if(o.payment?.shippingDiscount) h += `<div style="white-space:pre;">${pL('Pot.Ongkir',`-${o.payment.shippingDiscount.toLocaleString('id-ID')}`)}</div>`;
    if(o.payment?.productDiscount) h += `<div style="white-space:pre;">${pL('Pot.Harga',`-${o.payment.productDiscount.toLocaleString('id-ID')}`)}</div>`;
    if(o.payment?.ppnAmount && o.payment.ppnAmount > 0) h += `<div style="white-space:pre;">${pL(`PPN(${o.payment.ppnRate||11}%)`,(o.payment.ppnAmount||0).toLocaleString('id-ID'))}</div>`;
    h += `<div class="border-b border-dashed border-black my-2"></div><div style="white-space:pre;font-weight:bold;font-size:12px;">${pL('TOTAL','Rp '+(o.payment?.grandTotal||0).toLocaleString('id-ID'))}</div><div style="white-space:pre;">${pL('Bayar:',String(o.payment?.method||'').toUpperCase())}</div>`;
    // FITUR BARU: cantumkan poin didapat, saldo poin, & info klaim hadiah di struk
    if (o.pointsEarned > 0 || o.finalMemberPoints !== undefined) {
        h += `<div class="border-b border-dashed border-black my-2"></div>`;
        if (o.pointsEarned > 0) h += `<div style="white-space:pre;">${pL('Poin Didapat:', '+' + o.pointsEarned)}</div>`;
        if (o.finalMemberPoints !== undefined && o.finalMemberPoints !== null) h += `<div style="white-space:pre;font-weight:bold;">${pL('Saldo Poin:', String(o.finalMemberPoints))}</div>`;
        if (o.claimedReward) h += `<div style="white-space:pre-wrap;font-weight:bold;word-break:break-all;margin-top:2px;">HADIAH: ${esc(o.claimedReward.name)}</div><div style="white-space:pre;font-size:10px;">(${o.claimedReward.status==='ready'?'Kirim bersama pesanan':o.claimedReward.status==='waiting_stock'?'Stok kosong-ditunda':'Menunggu konfirmasi'})</div>`;
    }
    const hasPO = o.items.some(i => i.poTime && i.poTime !== '');
    if (hasPO) {
        h += `<div class="border-b border-dashed border-black my-2"></div><div style="white-space:pre-wrap;font-size:9px;text-align:center;line-height:1.2;font-style:italic;color:#4b5563;margin-bottom:4px;">* Catatan: Untuk pesanan gabungan, produk PO akan dikirimkan menyusul (estimasi sesuai label) tanpa dikenakan biaya tambahan.</div>`;
    }
    h += `<div class="border-b border-dashed border-black my-2"></div><div class="text-center my-2" style="font-size:10px;">Terima Kasih</div><div class="border-b border-dashed border-black my-2"></div><div style="height:15px;"></div>`;
    
    setH('receipt-paper-content', h);
    const mRec = el('receipt-preview-modal');
    if (mRec && mRec.classList.contains('hidden')) pushModalHistory('receipt');
    show('receipt-preview-modal');
    setTimeout(() => { el('receipt-preview-modal').classList.remove('opacity-0'); el('receipt-preview-modal-box').classList.remove('scale-95'); }, 10);
};

window.closeReceiptPreviewModal = (fH=false) => {
    requestCloseModal('receipt', fH, () => {
        el('receipt-preview-modal').classList.add('opacity-0');
        el('receipt-preview-modal-box').classList.add('scale-95');
        setTimeout(()=>hide('receipt-preview-modal'), 300);
    });
};
window.executePrintReceipt = () => { const o=gOrds.find(x=>x.orderId===cVOrd); if(!o) return; const p=el('receipt-paper-content').innerHTML; const t=el('thermal-print-section'); if(t){ t.innerHTML=p; window.print(); } };

// --- 13. PENGATURAN TOKO (ADMIN) ---

// ==========================================
// AUTO-GENERATOR APLIKASI MOBILE (PWA META)
// ==========================================
window.syncAppMeta = () => {
    const sName = appData.store.name || 'Toko Grosir';
    const sColor = appData.store.themeColor || '#10b981';

    const setM = (n, c, isProp=false) => { 
        let m = document.querySelector(`meta[${isProp?'property':'name'}="${n}"]`); 
        if(!m){ m = document.createElement('meta'); isProp ? m.setAttribute('property', n) : m.setAttribute('name', n); document.head.appendChild(m); } 
        m.setAttribute('content', c); 
    };

    setM('theme-color', sColor); setM('mobile-web-app-capable', 'yes'); setM('apple-mobile-web-app-capable', 'yes');
    setM('apple-mobile-web-app-status-bar-style', 'black-translucent'); setM('apple-mobile-web-app-title', sName);
    setM('application-name', sName); setM('msapplication-TileColor', sColor);
    // FIX BUG PWA: DULU di sini juga ada setL('apple-touch-icon', ...) & setL('icon', ..., '192x192'/'512x512')
    // yang MENDUPLIKASI <link> favicon/apple-touch-icon yang SUDAH dibuat oleh mesin manifest PWA
    // di loadAppData() (id="dynamic-favicon" / id="dynamic-apple-icon") -- dua fungsi ini berjalan
    // beruntun (loadAppData() lalu syncAppMeta(), lihat DOMContentLoaded) tapi TIDAK saling tahu,
    // masing-masing punya validasi URL logo yang BEDA. Kalau logo toko berupa data: URI (base64),
    // validasi di sini (cek substring "http") menolaknya dan pasang placeholder BERBEDA WARNA
    // dari favicon yang sudah benar dari fungsi lain -- hasilnya beberapa ikon PWA benar, ada yang
    // ngambil placeholder, tampilannya tidak konsisten. Ikon PWA (favicon, apple-touch-icon, ikon
    // 192x192/512x512 di manifest) SEKARANG SATU SUMBER KEBENARAN saja: mesin manifest di
    // loadAppData(). syncAppMeta() cukup urus meta tag yang tidak disentuh di sana.
    document.title = sName;

    // FIX: simpan warna header ke cache lokal supaya kunjungan berikutnya langsung benar
    // sejak awal (lihat applyCachedHeaderColor() di <head>), tidak perlu nunggu data server lagi.
    localStorage.setItem('freshmart_theme_color', sColor);

    // Sinkronisasi Warna UI Web (Tombol & Katalog) untuk Semua Pengunjung
    // FIX: sebelumnya pakai location.reload() paksa setiap kali warna toko beda dari cache lokal —
    // ini bikin SETIAP pengunjung baru (yang cache-nya masih default) kena reload otomatis 2 detik
    // setelah halaman terbuka (halaman "berkedip"/loncat, posisi scroll & interaksi hilang).
    // Sekarang warna diterapkan langsung secara live lewat window.applyUITheme, baru cache disamakan.
    if (appData.store.uiTheme && appData.store.uiTheme !== localStorage.getItem('freshmart_ui_theme')) {
        localStorage.setItem('freshmart_ui_theme', appData.store.uiTheme);
        if (typeof window.applyUITheme === 'function') window.applyUITheme(appData.store.uiTheme);
    }
};

// FIX: sebelumnya dipanggil lewat setTimeout(2000ms) yang cuma menebak waktu, tidak benar-benar
// menunggu data toko selesai dimuat dari server (rawan race condition di koneksi lambat).
// Sekarang dipanggil langsung setelah loadAppData() selesai — lihat event DOMContentLoaded di bawah.

// Menu Grid Utama Pengaturan
window.rAdmSet = () => {
    let h = `
    <div class="max-w-full pb-10 text-sm fade-in-scale">
        <div class="mb-5 flex justify-between items-center bg-white dark:bg-slate-800 p-4 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
            <div class="flex items-center gap-3">
                <div class="w-10 h-10 rounded-xl flex items-center justify-center" style="background: rgba(var(--color-primary-rgb),0.1); color: var(--color-primary)">
                    <i class="fa-solid fa-sliders text-base"></i>
                </div>
                <div>
                    <h2 class="font-bold text-sm text-slate-800 dark:text-slate-100 uppercase tracking-widest leading-tight">Pengaturan Toko</h2>
                    <p class="text-[9px] font-bold text-slate-500 mt-0.5">Pilih menu konfigurasi di bawah</p>
                </div>
            </div>
        </div>

        <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 lg:gap-8 mb-6">
            <button onclick="openSettingForm('profile')" class="card-modern p-5 flex flex-col items-center justify-center text-center gap-2.5 hover:-translate-y-1.5 hover:border-[rgba(var(--color-primary-rgb),0.4)] hover:shadow-xl transition-all duration-300 group relative overflow-hidden">
                <div class="w-12 h-12 rounded-2xl flex items-center justify-center shadow-inner group-hover:scale-110 group-hover:text-white transition-all duration-300 z-10" style="background: rgba(var(--color-primary-rgb),0.1); color: var(--color-primary)" onmouseover="this.style.background='var(--color-primary)'" onmouseout="this.style.background='rgba(var(--color-primary-rgb),0.1)'"><i class="fa-solid fa-store text-xl"></i></div>
                <span class="font-bold text-slate-700 dark:text-slate-200 uppercase tracking-widest text-[9px] sm:text-[10px] z-10">Profil Toko</span>
            </button>
            <button onclick="openSettingForm('catalog')" class="card-modern p-5 flex flex-col items-center justify-center text-center gap-2.5 hover:-translate-y-1.5 hover:border-blue-300 dark:hover:border-blue-600 hover:shadow-xl transition-all duration-300 group relative overflow-hidden">
                <div class="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-900/30 text-blue-500 flex items-center justify-center shadow-inner group-hover:scale-110 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300 z-10"><i class="fa-solid fa-palette text-xl"></i></div>
                <span class="font-bold text-slate-700 dark:text-slate-200 uppercase tracking-widest text-[9px] sm:text-[10px] z-10">Kategori UI UX</span>
            </button>
            <button onclick="openSettingForm('shipping')" class="card-modern p-5 flex flex-col items-center justify-center text-center gap-2.5 hover:-translate-y-1.5 hover:border-amber-300 dark:hover:border-amber-600 hover:shadow-xl transition-all duration-300 group relative overflow-hidden">
                <div class="w-12 h-12 rounded-2xl bg-amber-50 dark:bg-amber-900/30 text-amber-500 flex items-center justify-center shadow-inner group-hover:scale-110 group-hover:bg-amber-500 group-hover:text-white transition-all duration-300 z-10"><i class="fa-solid fa-motorcycle text-xl"></i></div>
                <span class="font-bold text-slate-700 dark:text-slate-200 uppercase tracking-widest text-[9px] sm:text-[10px] z-10">Pengiriman</span>
            </button>
            <button onclick="openSettingForm('payment')" class="card-modern p-5 flex flex-col items-center justify-center text-center gap-2.5 hover:-translate-y-1.5 hover:border-indigo-300 dark:hover:border-indigo-600 hover:shadow-xl transition-all duration-300 group relative overflow-hidden">
                <div class="w-12 h-12 rounded-2xl bg-indigo-50 dark:bg-indigo-900/30 text-indigo-500 flex items-center justify-center shadow-inner group-hover:scale-110 group-hover:bg-indigo-500 group-hover:text-white transition-all duration-300 z-10"><i class="fa-solid fa-qrcode text-xl"></i></div>
                <span class="font-bold text-slate-700 dark:text-slate-200 uppercase tracking-widest text-[9px] sm:text-[10px] z-10">QRIS Pay</span>
            </button>
            <button onclick="openSettingForm('config')" class="card-modern p-5 flex flex-col items-center justify-center text-center gap-2.5 hover:-translate-y-1.5 hover:border-rose-300 dark:hover:border-rose-600 hover:shadow-xl transition-all duration-300 group relative overflow-hidden">
                <div class="w-12 h-12 rounded-2xl bg-rose-50 dark:bg-rose-900/30 text-rose-500 flex items-center justify-center shadow-inner group-hover:scale-110 group-hover:bg-rose-500 group-hover:text-white transition-all duration-300 z-10"><i class="fa-solid fa-laptop-code text-xl"></i></div>
                <span class="font-bold text-slate-700 dark:text-slate-200 uppercase tracking-widest text-[9px] sm:text-[10px] z-10">Sistem & API</span>
            </button>
            <button onclick="openSettingForm('operasional')" class="card-modern p-5 flex flex-col items-center justify-center text-center gap-2.5 hover:-translate-y-1.5 hover:border-[var(--color-primary)] dark:hover:border-[var(--color-primary-dark)] hover:shadow-xl transition-all duration-300 group relative overflow-hidden">
                <div class="w-12 h-12 rounded-2xl bg-violet-50 dark:bg-violet-900/30 text-violet-500 flex items-center justify-center shadow-inner group-hover:scale-110 group-hover:bg-violet-500 group-hover:text-white transition-all duration-300 z-10"><i class="fa-solid fa-sliders text-xl"></i></div>
                <span class="font-bold text-slate-700 dark:text-slate-200 uppercase tracking-widest text-[9px] sm:text-[10px] z-10">Operasional</span>
            </button>
        </div>

        <div class="bg-white dark:bg-slate-800 p-5 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
            <h3 class="font-bold text-slate-700 dark:text-white mb-4 text-[10px] uppercase tracking-widest flex items-center gap-2"><i class="fa-solid fa-database" style="color: var(--color-primary)"></i> Pencadangan Data</h3>
            <div class="flex flex-col sm:flex-row gap-3">
                <button onclick="backupData()" class="flex-1 bg-slate-900 dark:bg-slate-950 text-white font-bold py-3.5 rounded-xl transition-all text-xs flex items-center justify-center gap-2 border border-slate-800 shadow-sm active:scale-95 hover:opacity-90"><i class="fa-solid fa-download"></i> Backup Lokal (.json)</button>
                <button onclick="el('restore-file').click()" class="flex-1 bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 text-slate-700 dark:text-slate-300 font-bold py-3.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-600 transition-all text-xs flex items-center justify-center gap-2 shadow-sm active:scale-95"><i class="fa-solid fa-upload"></i> Restore Data</button>
            </div>
        </div>
    </div>
    `;
    setH('admin-content', h);
};

// Form Spesifik Pengaturan
window.openSettingForm = (type) => {
    let title, icon, colorTheme, formContent;

    // Helper: Memilih Preset Tema secara Visual
    window.selectPresetTheme = (themeName) => {
        const hex = window.uiPalettes[themeName][500];
        document.getElementById('set-ui-theme').value = themeName;
        document.getElementById('set-theme-color').value = hex;
        document.getElementById('set-theme-color-picker').value = hex;
        
        // Reset status ring & icon pada semua chip
        document.querySelectorAll('.preset-color-chip').forEach(el => {
            el.classList.remove('ring-4', 'ring-offset-2', 'ring-slate-400', 'dark:ring-slate-500', 'scale-110');
            el.querySelector('.check-icon')?.classList.add('hidden');
        });
        
        // Beri ring aktif & tunjukkan icon check pada chip terpilih
        const activeChip = document.getElementById(`preset-chip-${themeName}`);
        if (activeChip) {
            activeChip.classList.add('ring-4', 'ring-offset-2', 'ring-slate-400', 'dark:ring-slate-500', 'scale-110');
            activeChip.querySelector('.check-icon')?.classList.remove('hidden');
        }
        
        if (typeof window.applyUITheme === 'function') {
            window.applyUITheme(themeName, hex);
        }
    };

    if (type === 'profile') {
        title = "Profil Toko & Tampilan"; icon = "fa-store"; 
        colorTheme = { line: "bg-[var(--color-primary)]", box: "bg-[rgba(var(--color-primary-rgb),0.08)] text-[var(--color-primary)]" };
        
        const currentTheme = appData.store.uiTheme || 'emerald';
        const presetNames = {
            emerald: "Emerald", teal: "Teal", lime: "Lime", cyan: "Cyan", sky: "Sky",
            blue: "Blue", indigo: "Indigo", violet: "Violet", purple: "Purple",
            fuchsia: "Fuchsia", pink: "Pink", rose: "Rose", red: "Red",
            orange: "Orange", amber: "Amber", yellow: "Yellow", green: "Green",
            slate: "Slate", stone: "Stone"
        };
        
        const presetHtml = Object.keys(window.uiPalettes).map(key => {
            const hex = window.uiPalettes[key][500];
            const name = presetNames[key] || key;
            const isActive = currentTheme === key;
            const ringCls = isActive ? 'ring-4 ring-offset-2 ring-slate-400 dark:ring-slate-500 scale-110' : '';
            const checkCls = isActive ? '' : 'hidden';
            return `
                <button type="button" id="preset-chip-${key}" onclick="selectPresetTheme('${key}')" 
                        class="preset-color-chip w-10 h-10 rounded-full cursor-pointer transition-all duration-200 relative flex items-center justify-center shadow-sm hover:scale-105 ${ringCls}" 
                        style="background-color: ${hex}; border: 1.5px solid rgba(0,0,0,0.08)" 
                        title="${name}">
                    <i class="check-icon fa-solid fa-check text-white text-[11px] font-bold drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)] ${checkCls}"></i>
                </button>
            `;
        }).join('');

        formContent = `
            <div><label class="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-widest">Nama Toko (Nama Aplikasi)</label><input autocomplete='off' id="set-name" value="${esc(appData.store.name)}" class="admin-input !py-3.5 bg-slate-50 dark:bg-slate-900 shadow-sm"></div>
            
            <div class="grid grid-cols-1 gap-6">
                <div>
                    <label class="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-3 uppercase tracking-widest">Pilihan Palet Warna Tema (Preset)</label>
                    <input type="hidden" id="set-ui-theme" value="${currentTheme}">
                    <div class="flex flex-wrap gap-3.5 p-4 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700/80 rounded-2xl">
                        ${presetHtml}
                    </div>
                </div>

                <div>
                    <label class="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-widest">Atur Warna Kustom &amp; Header PWA (Sesuai Selera)</label>
                    <div class="flex gap-3 max-w-sm">
                        <input type="color" id="set-theme-color-picker" value="${esc(appData.store.themeColor || '#10b981')}" class="w-14 h-12 rounded-xl cursor-pointer shadow-sm border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-1" oninput="document.getElementById('set-theme-color').value = this.value; document.querySelectorAll('.preset-color-chip').forEach(el => { el.classList.remove('ring-4', 'ring-offset-2', 'ring-slate-400', 'dark:ring-slate-500', 'scale-110'); el.querySelector('.check-icon')?.classList.add('hidden'); }); if(typeof window.applyUITheme==='function') window.applyUITheme(document.getElementById('set-ui-theme').value, this.value)">
                        <input autocomplete='off' id="set-theme-color" value="${esc(appData.store.themeColor || '#10b981')}" class="admin-input !py-3.5 uppercase font-mono flex-1 shadow-sm bg-slate-50 dark:bg-slate-900" oninput="document.getElementById('set-theme-color-picker').value = this.value; document.querySelectorAll('.preset-color-chip').forEach(el => { el.classList.remove('ring-4', 'ring-offset-2', 'ring-slate-400', 'dark:ring-slate-500', 'scale-110'); el.querySelector('.check-icon')?.classList.add('hidden'); }); if(typeof window.applyUITheme==='function') window.applyUITheme(document.getElementById('set-ui-theme').value, this.value)" placeholder="#10b981">
                    </div>
                    <p class="text-[9px] font-bold text-slate-400 mt-1.5">* Anda dapat memilih dari palet preset di atas atau menggunakan pemilih warna kustom ini untuk warna spesifik.</p>
                </div>
            </div>

            <div><label class="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-widest">Slogan Toko</label><input autocomplete='off' id="set-slogan" value="${esc(appData.store.slogan)}" class="admin-input !py-3.5 bg-slate-50 dark:bg-slate-900 shadow-sm"></div>
            <div>
                <label class="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-widest">Logo Toko (Ikon Aplikasi)</label>
                <div class="flex gap-3">
                    <input autocomplete='off' id="set-logo" value="${esc(appData.store.logo)}" class="admin-input !py-3.5 bg-slate-50 dark:bg-slate-900 flex-1 shadow-sm" placeholder="URL Gambar / fa-icon">
                    <label class="bg-white hover:bg-slate-50 dark:bg-slate-800 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-600 text-slate-600 dark:text-slate-300 rounded-xl px-5 flex items-center justify-center cursor-pointer transition-all shrink-0 active:scale-95 shadow-sm font-bold"><i class="fa-solid fa-cloud-arrow-up sm:mr-2"></i> <span class="hidden sm:inline">Upload</span><input type="file" accept="image/*" class="hidden" onchange="handleImageUpload(this, 'set-logo')"></label>
                </div>
            </div>
            <div><label class="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-widest">Deskripsi Usaha (Footer)</label><textarea autocomplete='off' id="set-description" class="admin-input resize-none !py-3.5 bg-slate-50 dark:bg-slate-900 shadow-sm" rows="3" placeholder="Deskripsi untuk footer...">${esc(appData.store.description || '')}</textarea></div>
            <div><label class="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-widest">Email Layanan Pelanggan (Footer)</label><input autocomplete='off' id="set-email" value="${esc(appData.store.email || 'support@restukaryautama.com')}" class="admin-input !py-3.5 bg-slate-50 dark:bg-slate-900 shadow-sm" placeholder="support@restukaryautama.com"></div>
            <div>
                <label class="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-widest">Tampilkan Katalog Hadiah</label>
                <div class="relative"><select id="set-show-reward-catalog" class="admin-input shadow-sm cursor-pointer appearance-none pr-10 bg-slate-50 dark:bg-slate-900">
                    <option value="true" ${appData.store.showRewardCatalog === true || appData.store.showRewardCatalog === 'true' ? 'selected' : ''} class="font-bold">Aktifkan (Tampilkan di Beranda)</option>
                    <option value="false" ${appData.store.showRewardCatalog === false || appData.store.showRewardCatalog === 'false' || appData.store.showRewardCatalog === undefined ? 'selected' : ''} class="font-bold">Nonaktifkan (Sembunyikan)</option>
                </select><i class="fa-solid fa-chevron-down absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none text-[10px]"></i></div>
            </div>
            <div><label class="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-widest">Jam Operasional Toko (Footer)</label><input autocomplete='off' id="set-hours" value="${esc(appData.store.operationalHours || 'Buka Setiap Hari (08:00 - 17:00)')}" class="admin-input !py-3.5 bg-slate-50 dark:bg-slate-900 shadow-sm" placeholder="Buka Setiap Hari (08:00 - 17:00)"></div>
            <div><label class="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-widest">Teks Footer Credit (Powered By)</label><input autocomplete='off' id="set-credit" value="${esc(appData.store.footerCredit || 'POWERED BY BLOGGER PWA SYSTEM')}" class="admin-input !py-3.5 bg-slate-50 dark:bg-slate-900 shadow-sm" placeholder="POWERED BY BLOGGER PWA SYSTEM"></div>
        `;
    } 
    else if (type === 'catalog') {
        title = "Kategori UI UX"; icon = "fa-palette"; 
        colorTheme = { line: "bg-blue-500", box: "bg-blue-50 text-blue-500 dark:bg-blue-900/30" };
        formContent = `
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div><label class="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-widest">Fitur Kategori</label><div class="relative"><select id="set-show-categories" class="admin-input !py-3.5 bg-slate-50 dark:bg-slate-900 shadow-sm cursor-pointer appearance-none pr-10"><option value="true" ${appData.store.showCategories!==false?'selected':''}>Tampilkan</option><option value="false" ${appData.store.showCategories===false?'selected':''}>Sembunyikan</option></select><i class="fa-solid fa-chevron-down absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none text-[10px]"></i></div></div>
                <div><label class="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-widest">Fitur Merek</label><div class="relative"><select id="set-show-brands" class="admin-input !py-3.5 bg-slate-50 dark:bg-slate-900 shadow-sm cursor-pointer appearance-none pr-10"><option value="true" ${appData.store.showBrands!==false?'selected':''}>Tampilkan</option><option value="false" ${appData.store.showBrands===false?'selected':''}>Sembunyikan</option></select><i class="fa-solid fa-chevron-down absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none text-[10px]"></i></div></div>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div><label class="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-widest">Gaya Kategori</label><div class="relative"><select id="set-category-style" class="admin-input !py-3.5 bg-slate-50 dark:bg-slate-900 shadow-sm cursor-pointer appearance-none pr-10"><option value="image" ${appData.store.categoryStyle!=='text'?'selected':''}>Kartu Gambar</option><option value="text" ${appData.store.categoryStyle==='text'?'selected':''}>Pill Text</option></select><i class="fa-solid fa-chevron-down absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none text-[10px]"></i></div></div>
                <div><label class="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-widest">Gaya Merek</label><div class="relative"><select id="set-brand-style" class="admin-input !py-3.5 bg-slate-50 dark:bg-slate-900 shadow-sm cursor-pointer appearance-none pr-10"><option value="image" ${(appData.store.brandStyle||'image')==='image'?'selected':''}>Kartu Gambar</option><option value="text" ${appData.store.brandStyle==='text'?'selected':''}>Pill Text</option></select><i class="fa-solid fa-chevron-down absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none text-[10px]"></i></div></div>
            </div>
            <div>
                <label class="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-widest">Ikon "Semua Produk"</label>
                <div class="flex gap-3">
                    <input autocomplete='off' id="set-all-cat-icon" value="${esc(appData.store.allProductsIcon||'')}" class="admin-input !py-3.5 bg-slate-50 dark:bg-slate-900 flex-1 shadow-sm" placeholder="Kosongkan utk Auto...">
                    <label class="bg-white hover:bg-slate-50 dark:bg-slate-800 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-600 text-slate-600 dark:text-slate-300 rounded-xl px-5 flex items-center justify-center cursor-pointer transition-all shrink-0 active:scale-95 shadow-sm font-bold"><i class="fa-solid fa-cloud-arrow-up sm:mr-2"></i> <span class="hidden sm:inline">Upload</span><input type="file" accept="image/*" class="hidden" onchange="handleImageUpload(this, 'set-all-cat-icon')"></label>
                </div>
            </div>
            <div>
                <label class="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-widest">Ikon "Semua Merek"</label>
                <div class="flex gap-3">
                    <input autocomplete='off' id="set-all-brand-icon" value="${esc(appData.store.allBrandsIcon||'')}" class="admin-input !py-3.5 bg-slate-50 dark:bg-slate-900 flex-1 shadow-sm" placeholder="Kosongkan utk Auto...">
                    <label class="bg-white hover:bg-slate-50 dark:bg-slate-800 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-600 text-slate-600 dark:text-slate-300 rounded-xl px-5 flex items-center justify-center cursor-pointer transition-all shrink-0 active:scale-95 shadow-sm font-bold"><i class="fa-solid fa-cloud-arrow-up sm:mr-2"></i> <span class="hidden sm:inline">Upload</span><input type="file" accept="image/*" class="hidden" onchange="handleImageUpload(this, 'set-all-brand-icon')"></label>
                </div>
            </div>
        `;
    }
    else if (type === 'shipping') {
        title = "Pengiriman & Lokasi"; icon = "fa-motorcycle"; 
        colorTheme = { line: "bg-amber-500", box: "bg-amber-50 text-amber-500 dark:bg-amber-900/30" };
        formContent = `
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div><label class="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-widest">Nomor WhatsApp Seller</label><input autocomplete='off' id="set-wa" value="${esc(appData.store.wa)}" class="admin-input !py-3.5 bg-slate-50 dark:bg-slate-900 shadow-sm" placeholder="Contoh: 0812..."></div>
                <div><label class="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-widest">Tarif Ongkir per KM (Rp)</label><input autocomplete='off' type="number" id="set-cost" value="${appData.store.costPerKm||0}" class="admin-input !py-3.5 bg-slate-50 dark:bg-slate-900 shadow-sm"></div>
            </div>
            <div><label class="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-widest">Alamat Fisik Toko</label><textarea autocomplete='off' id="set-address" class="admin-input !py-3.5 resize-none bg-slate-50 dark:bg-slate-900 shadow-sm" rows="2">${esc(appData.store.address)}</textarea></div>
            <div class="grid grid-cols-2 gap-5">
                <div><label class="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-widest">Sistem Kurir</label><div class="relative"><select id="set-delivery-enabled" class="admin-input !py-3.5 bg-slate-50 dark:bg-slate-900 shadow-sm cursor-pointer appearance-none pr-10"><option value="true" ${appData.store.isDeliveryEnabled!==false?'selected':''}>Aktif</option><option value="false" ${appData.store.isDeliveryEnabled===false?'selected':''}>Nonaktif</option></select><i class="fa-solid fa-chevron-down absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none text-[10px]"></i></div></div>
                <div><label class="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-widest">Ambil Sendiri</label><div class="relative"><select id="set-pickup-enabled" class="admin-input !py-3.5 bg-slate-50 dark:bg-slate-900 shadow-sm cursor-pointer appearance-none pr-10"><option value="true" ${appData.store.isPickupEnabled!==false?'selected':''}>Aktif</option><option value="false" ${appData.store.isPickupEnabled===false?'selected':''}>Nonaktif</option></select><i class="fa-solid fa-chevron-down absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none text-[10px]"></i></div></div>
            </div>
            <div>
                <label class="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-widest"><i class="fa-solid fa-map-pin mr-1"></i> Titik Koordinat Toko (GPS)</label>
                <input autocomplete='off' id="set-coords" onchange="autoParseCoords(this)" class="admin-input !py-3.5 mb-3 bg-slate-50 dark:bg-slate-900 shadow-sm" placeholder="Paste Lat,Lng dari Google Maps...">
                <div class="flex gap-3">
                    <input autocomplete='off' id="set-lat" value="${appData.store.lat}" class="admin-input !py-3.5 flex-1 text-xs font-mono bg-slate-100/50 dark:bg-slate-800/50 shadow-inner" readonly="readonly" placeholder="Latitude">
                    <input autocomplete='off' id="set-lng" value="${appData.store.lng}" class="admin-input !py-3.5 flex-1 text-xs font-mono bg-slate-100/50 dark:bg-slate-800/50 shadow-inner" readonly="readonly" placeholder="Longitude">
                </div>
            </div>
        `;
    }
    else if (type === 'payment') {
        title = "Pembayaran QRIS"; icon = "fa-qrcode"; 
        colorTheme = { line: "bg-indigo-500", box: "bg-indigo-50 text-indigo-500 dark:bg-indigo-900/30" };
        formContent = `
            <div>
                <label class="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-widest">Gambar QR Code Standar Nasional</label>
                <div class="flex gap-3 mb-5">
                    <input autocomplete='off' id="set-qris-url" value="${esc(appData.payment.qrisUrl)}" class="admin-input !py-3.5 bg-slate-50 dark:bg-slate-900 flex-1 shadow-sm" placeholder="URL QRIS...">
                    <label class="bg-white hover:bg-slate-50 dark:bg-slate-800 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-600 text-slate-600 dark:text-slate-300 rounded-xl px-5 flex items-center justify-center cursor-pointer transition-all shrink-0 active:scale-95 shadow-sm font-bold"><i class="fa-solid fa-cloud-arrow-up sm:mr-2"></i> <span class="hidden sm:inline">Upload</span><input type="file" accept="image/*" class="hidden" onchange="handleImageUpload(this, 'set-qris-url')"></label>
                </div>
                ${appData.payment.qrisUrl ? `<div class="p-4 border border-slate-200 dark:border-slate-700 rounded-2xl flex justify-center bg-slate-50/50 dark:bg-slate-900/10"><img loading="eager" src="${esc(appData.payment.qrisUrl)}" alt="Preview QRIS" class="w-40 h-40 object-contain rounded-xl shadow-sm"></div>` : ''}
            </div>
        `;
    }
    // FITUR BARU: FORM KONFIGURASI SISTEM
    else if (type === 'config') {
        title = "Sistem Inti & API"; icon = "fa-laptop-code"; 
        colorTheme = { line: "bg-rose-500", box: "bg-rose-50 text-rose-500 dark:bg-rose-900/30" };
        
        let savedGas = (appData.config && appData.config.gasUrl) ? appData.config.gasUrl : GAS_UPLOAD_URL;
        
        formContent = `
            <div class="bg-rose-50 dark:bg-rose-900/10 border border-rose-200 dark:border-rose-800/30 p-4 rounded-xl mb-6 flex gap-3 items-start">
                <i class="fa-solid fa-triangle-exclamation text-rose-500 mt-0.5"></i>
                <p class="text-[10px] sm:text-[11px] font-bold text-rose-700 dark:text-rose-400 leading-relaxed">PERINGATAN: Kesalahan pengisian pada form ini dapat membuat aplikasi error atau terputus dari Database!</p>
            </div>
            
            <div>
                <label class="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-widest">URL Google Apps Script (GS URL)</label>
                <input autocomplete='off' id="set-gas-url" value="${esc(savedGas)}" class="admin-input !py-3.5 bg-slate-50 dark:bg-slate-900 shadow-sm font-mono text-[11px]" placeholder="https://script.google.com/macros/s/.../exec">
                <p class="text-[9px] font-bold text-slate-400 mt-1.5">* Digunakan sebagai endpoint untuk sistem upload gambar.</p>
            </div>

            <div class="border-t border-dashed border-slate-200 dark:border-slate-700 my-6"></div>
            
            <h4 class="font-bold text-slate-800 dark:text-white mb-4 text-[11px] uppercase tracking-widest flex items-center gap-2"><i class="fa-solid fa-fire text-amber-500"></i> Firebase Configuration</h4>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div><label class="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-widest">API Key</label><input id="set-fb-apikey" value="${esc(fbC.apiKey)}" class="admin-input !py-3.5 bg-slate-50 dark:bg-slate-900 shadow-sm text-xs font-mono"></div>
                <div><label class="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-widest">Auth Domain</label><input id="set-fb-auth" value="${esc(fbC.authDomain)}" class="admin-input !py-3.5 bg-slate-50 dark:bg-slate-900 shadow-sm text-xs font-mono"></div>
                <div class="sm:col-span-2"><label class="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-widest">Database URL</label><input id="set-fb-db" value="${esc(fbC.databaseURL)}" class="admin-input !py-3.5 bg-slate-50 dark:bg-slate-900 shadow-sm text-xs font-mono"></div>
                <div><label class="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-widest">Project ID</label><input id="set-fb-pid" value="${esc(fbC.projectId)}" class="admin-input !py-3.5 bg-slate-50 dark:bg-slate-900 shadow-sm text-xs font-mono"></div>
                <div><label class="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-widest">Storage Bucket</label><input id="set-fb-storage" value="${esc(fbC.storageBucket)}" class="admin-input !py-3.5 bg-slate-50 dark:bg-slate-900 shadow-sm text-xs font-mono"></div>
                <div><label class="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-widest">Messaging Sender ID</label><input id="set-fb-msg" value="${esc(fbC.messagingSenderId)}" class="admin-input !py-3.5 bg-slate-50 dark:bg-slate-900 shadow-sm text-xs font-mono"></div>
                <div><label class="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-widest">App ID</label><input id="set-fb-app" value="${esc(fbC.appId)}" class="admin-input !py-3.5 bg-slate-50 dark:bg-slate-900 shadow-sm text-xs font-mono"></div>
                <div class="sm:col-span-2"><label class="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-widest">Measurement ID</label><input id="set-fb-measure" value="${esc(fbC.measurementId)}" class="admin-input !py-3.5 bg-slate-50 dark:bg-slate-900 shadow-sm text-xs font-mono"></div>
            </div>
        `;
    }
    // FITUR BARU: FORM OPERASIONAL (STOK + PPN)
    else if (type === 'operasional') {
        title = "Operasional Toko"; icon = "fa-sliders";
        colorTheme = { line: "bg-violet-500", box: "bg-violet-50 text-violet-500 dark:bg-violet-900/30" };
        const useStockCur = appData.store.useStock === true || appData.store.useStock === 'true';
        const ppnOnCur = appData.store.ppnEnabled === true || appData.store.ppnEnabled === 'true';
        const ppnRateCur = parseFloat(appData.store.ppnRate) || 11;

        formContent = `
            <div class="space-y-8">
                <!-- Stok -->
                <div>
                    <h4 class="font-bold text-slate-800 dark:text-white text-[11px] uppercase tracking-widest mb-4 flex items-center gap-2"><i class="fa-solid fa-boxes-stacked text-blue-500"></i> Manajemen Stok</h4>
                    <div class="relative mb-3"><select id="set-use-stock" class="admin-input !py-3.5 bg-slate-50 dark:bg-slate-900 shadow-sm cursor-pointer appearance-none pr-10">
                        <option value="true" ${useStockCur?'selected':''}>Aktif — Stok divalidasi dan dikurangi tiap order</option>
                        <option value="false" ${!useStockCur?'selected':''}>Nonaktif — Produk bebas dibeli tanpa cek stok</option>
                    </select><i class="fa-solid fa-chevron-down absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none text-[10px]"></i></div>
                    <p class="text-[10px] font-bold text-slate-500 dark:text-slate-400 leading-relaxed">* Jika aktif, stok berkurang otomatis saat pesanan dikirim. Gunakan tombol <b>Restock (+)</b> di daftar produk untuk menambah stok.</p>
                </div>
                
                <div class="border-t border-dashed border-slate-200 dark:border-slate-700"></div>

                <!-- PPN -->
                <div>
                    <h4 class="font-bold text-slate-800 dark:text-white text-[11px] uppercase tracking-widest mb-4 flex items-center gap-2"><i class="fa-solid fa-percent text-amber-500"></i> Pajak PPN</h4>
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-3">
                        <div>
                            <label class="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-widest">Status PPN</label>
                            <div class="relative"><select id="set-ppn-enabled" class="admin-input !py-3.5 bg-slate-50 dark:bg-slate-900 shadow-sm cursor-pointer appearance-none pr-10">
                                <option value="true" ${ppnOnCur?'selected':''}>Aktif</option>
                                <option value="false" ${!ppnOnCur?'selected':''}>Nonaktif</option>
                            </select><i class="fa-solid fa-chevron-down absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none text-[10px]"></i></div>
                        </div>
                        <div>
                            <label class="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-widest">Persentase PPN (%)</label>
                            <input autocomplete='off' type="number" id="set-ppn-rate" min="0" max="100" step="0.1" value="${ppnRateCur}" class="admin-input !py-3.5 bg-slate-50 dark:bg-slate-900 shadow-sm" placeholder="11">
                        </div>
                    </div>
                    <p class="text-[10px] font-bold text-slate-500 dark:text-slate-400 leading-relaxed">* PPN dihitung dari total setelah diskon dan ongkir. Muncul di rincian checkout, WA, struk, dan invoice PDF.</p>
                </div>

                <div class="border-t border-dashed border-slate-200 dark:border-slate-700"></div>


            </div>
        `;
    }

    let h = `
    <div class="w-full mx-auto pb-12 text-sm fade-in-scale">
        <button onclick="rAdmSet()" class="mb-5 flex items-center justify-center w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-500 hover:text-slate-800 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-700 transition-all shadow-sm group">
            <i class="fa-solid fa-arrow-left group-hover:-translate-x-0.5 transition-transform"></i>
        </button>
        <div class="bg-white dark:bg-slate-800 rounded-[1.5rem] border border-slate-200 dark:border-slate-700 shadow-sm overflow-hidden flex flex-col relative mb-6">
            <div class="absolute top-0 left-0 w-full h-1.5 ${colorTheme.line}"></div>
            <div class="p-6 sm:p-8 flex-1 mt-2">
                <h3 class="font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3">
                    <div class="w-10 h-10 rounded-xl ${colorTheme.box} flex items-center justify-center"><i class="fa-solid ${icon}"></i></div> 
                    ${title}
                </h3>
                <div class="space-y-5">
                    ${formContent}
                </div>
            </div>
        </div>
        <button onclick="saveAdminSettings('${type}')" class="btn-primary py-4 text-base shadow-glow w-full !rounded-2xl flex items-center justify-center gap-2"><i class="fa-solid fa-save"></i> Simpan Pengaturan</button>
    </div>
    `;
    setH('admin-content', h);
};

// Menyimpan Data & Trigger Reload Otomatis
window.saveAdminSettings = async (type) => {
    if(isSaving) return; isSaving=true; sLoad('Menyimpan...');
    try {
        if (type === 'profile') {
            appData.store.name = getV('set-name'); 
            appData.store.slogan = getV('set-slogan'); 
            appData.store.logo = fixD(getV('set-logo')); 
            appData.store.description = getV('set-description'); 
            appData.store.email = getV('set-email');
            appData.store.showRewardCatalog = getV('set-show-reward-catalog') === 'true';
            appData.store.operationalHours = getV('set-hours');
            appData.store.footerCredit = getV('set-credit');
            appData.store.themeColor = getV('set-theme-color'); 
            appData.store.uiTheme = getV('set-ui-theme');
            localStorage.setItem('freshmart_theme_color', appData.store.themeColor);
            localStorage.setItem('freshmart_ui_theme', appData.store.uiTheme);
            if (typeof window.applyUITheme === 'function') {
                window.applyUITheme(appData.store.uiTheme, appData.store.themeColor);
            }
        } 
        else if (type === 'catalog') {
            appData.store.categoryStyle = getV('set-category-style'); 
            appData.store.brandStyle = getV('set-brand-style'); 
            appData.store.allProductsIcon = fixD(getV('set-all-cat-icon')); 
            appData.store.allBrandsIcon = fixD(getV('set-all-brand-icon')); 
            appData.store.showCategories = getV('set-show-categories') === 'true';
            appData.store.showBrands = getV('set-show-brands') === 'true';
        } 
        else if (type === 'shipping') {
            appData.store.wa = getV('set-wa').replace(/\D/g,''); 
            appData.store.address = getV('set-address'); 
            appData.store.costPerKm = getV('set-cost'); 
            appData.store.isDeliveryEnabled = getV('set-delivery-enabled') === 'true'; 
            appData.store.isPickupEnabled = getV('set-pickup-enabled') === 'true'; 
            appData.store.lat = getV('set-lat'); 
            appData.store.lng = getV('set-lng'); 
        } 
        else if (type === 'payment') {
            appData.payment.qrisUrl = fixD(getV('set-qris-url')); 
        }
        else if (type === 'config') {
            if(!appData.config) appData.config = {};
            appData.config.gasUrl = getV('set-gas-url');

            // FIX: field API Key/Project ID dst di form ini SENGAJA TIDAK disimpan lagi
            // ke localStorage. Dulu tersimpan per-perangkat, sehingga perangkat yang
            // pernah menyimpan form ini akan terus memakai config lama SELAMANYA,
            // walau file tema di Blogger sudah diganti ke Firebase baru -- membuat
            // sebagian pelanggan melihat data lama. Config Firebase sekarang HARUS
            // diedit langsung di file tema (defaultFbC) supaya berlaku SAMA untuk
            // semua perangkat sekaligus, bukan cuma perangkat yang menyimpan form ini.
            showToast("Pengaturan GAS URL tersimpan. Untuk ganti Firebase Project, edit langsung defaultFbC di file tema (Edit HTML) agar berlaku di semua perangkat.");
        }
        else if (type === 'operasional') {
            appData.store.useStock  = getV('set-use-stock') === 'true';
            appData.store.ppnEnabled = getV('set-ppn-enabled') === 'true';
            appData.store.ppnRate    = parseFloat(getV('set-ppn-rate')) || 11;

            toggleTaxMenuVisibility(); // FITUR BARU: tombol menu Pajak langsung muncul/hilang begitu PPN diaktif/nonaktifkan
        }
        
        // FIX: hanya kirim field pengaturan yang benar-benar berubah pada 'type' ini,
        // supaya tab admin lain yang sedang mengubah kategori/voucher/banner tidak tertimpa.
        const settingsKeyMap = { profile:'store', catalog:'store', shipping:'store', operasional:'store', payment:'payment', config:'config' };
        await saveApp([settingsKeyMap[type] || 'store']);
         // FIX: dibungkus, tidak boleh ganggu proses simpan
        
        if (type === 'profile' || type === 'config') {
            // Wajib memuat ulang halaman agar Warna atau Koneksi Database Baru bisa berfungsi
            showToast(type === 'config' ? "Sistem Diperbarui! Memuat Ulang..." : "Warna Berubah! Memuat Ulang...");
            setTimeout(() => location.reload(), 1500); 
        } else {
            showToast("Tersimpan!");
            rAdmSet(); 
        }
    } 
    catch(e) { showToast("Gagal menyimpan pengaturan"); }
    finally { isSaving=false; hLoad(); }
};

window.backupData = () => { 
    const a = document.createElement('a'); 
    a.href = URL.createObjectURL(new Blob([JSON.stringify(appData)],{type:"application/json"})); 
    a.download = `Backup_Data_${new Date().toLocaleDateString('id-ID').replace(/\//g,'-')}.json`; 
    a.click(); 
    showToast("Berhasil Terunduh"); 
};

window.restoreData = e => {
    const r = new FileReader();
    r.onload = async(v) => {
        try {
            appData = JSON.parse(v.target.result);
            await saveApp(); 
            showToast("Data dipulihkan!"); 
            setTimeout(() => location.reload(), 1000);
        } catch(x) { showToast("Gagal memulihkan data!"); }
    };
    r.readAsText(e.target.files[0]);
};

// --- 14. ADMIN CRUD & BUILDER ---
window.rAdmL = t => {
    // FITUR BARU: laporan produk/varian/aset khusus ditaruh di sini (tab Produk saja),
    // tepat di atas kolom cari -- lebih relevan di tempat pengelolaan produknya langsung.
    const statsContainer = t === 'products' ? `<div id="admin-product-stats" class="mb-5"></div>` : '';
    // FITUR BARU: tombol khusus untuk tab Database Warna
    const colorActions = t === 'colors' ? `
        <div class="flex gap-2 mb-4 flex-wrap">
            <button onclick="openImportFromProductsModal()" class="flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-600 dark:bg-emerald-900/30 dark:border-emerald-800 font-bold text-[11px] uppercase tracking-widest hover:bg-emerald-100 transition-all active:scale-95 shadow-sm"><i class="fa-solid fa-box-archive"></i> Impor dari Semua Produk</button>
        </div>` : '';
    setH('admin-content', `
        <div class="max-w-5xl mx-auto">
        ${statsContainer}
        <div class="mb-6">
            ${colorActions}
            <div class="flex gap-2 items-center mb-4">
                <div class="relative flex-1">
                    <i class="fa-solid fa-search absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-sm"></i>
                    <input autocomplete='off' id="admin-search-input" name='cari_admin_q' placeholder="Cari..." oninput="aSq=this.value.toLowerCase();rAdmItms('${t}')" class="w-full bg-white dark:bg-slate-800 border-[1.5px] border-slate-200 dark:border-slate-700 rounded-2xl py-3.5 pl-11 pr-12 text-sm font-bold text-slate-700 dark:text-slate-200 focus:outline-none focus:border-[var(--color-primary)] focus:shadow-[0_0_0_3px_rgba(var(--color-primary-rgb),0.12)] shadow-sm transition-all" ></i>
                    <button onclick="openCameraScanner('admin-search-input')" class="absolute right-2.5 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center text-slate-400 hover:text-[var(--color-primary)] hover:bg-[rgba(var(--color-primary-rgb),0.08)] rounded-xl transition-all" title="Scan Barcode"><i class="fa-solid fa-qrcode text-sm"></i></button>
                </div>
                <button onclick="oAAdd()" class="h-[46px] px-5 rounded-2xl text-white font-bold text-sm flex items-center gap-2 shadow-glow active:scale-95 transition-all shrink-0" style="background: linear-gradient(135deg, var(--color-primary), var(--color-primary-dark))"><i class="fa-solid fa-plus text-xs"></i> Tambah</button>
            </div>
        </div>
        <div id="admin-list-container" class="space-y-3 pb-12"></div>
        </div>
    `);
    rAdmItms(t);
};

window.rAdmItms = t => {
    // FIX: simpan posisi scroll SEBELUM daftar dirender ulang, lalu kembalikan setelahnya.
    // Sebelumnya, tiap kali ada update (restock, realtime sync, dst), daftar di-render ulang
    // dan scroll otomatis lompat ke atas -- membuat produk yang baru saja diubah terasa
    // "hilang" dari layar padahal cuma tertutup scroll-reset, bukan hilang sungguhan.
    const listContainerForScroll = el('admin-list-container');
    const scrollParent = listContainerForScroll ? listContainerForScroll.closest('.scroll-content') : null;
    const savedScrollTop = scrollParent ? scrollParent.scrollTop : 0;

    // FITUR BARU: render ulang laporan produk/varian/aset tiap kali daftar produk disegarkan
    // (restock, edit, realtime sync, dst) -- HANYA update kontainernya sendiri, TIDAK
    // menyentuh riwayat modal/back-button sama sekali, jadi tombol back tetap aman.
    if (t === 'products' && el('admin-product-stats')) {
        const st = computeInventoryStats();
        setH('admin-product-stats', `
            <div class="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                <div class="card-modern p-5 sm:p-5">
                    <p class="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-1.5"><i class="fa-solid fa-box mr-1"></i>Produk Aktif</p>
                    <p class="text-lg sm:text-xl font-bold text-slate-800 dark:text-white">${st.activeProd}</p>
                </div>
                <div class="card-modern p-5 sm:p-5">
                    <p class="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-1.5"><i class="fa-solid fa-layer-group mr-1"></i>Varian Aktif</p>
                    <p class="text-lg sm:text-xl font-bold text-slate-800 dark:text-white">${st.activeVar}</p>
                </div>
                <div class="card-modern p-5 sm:p-5">
                    <p class="text-[9px] font-bold text-amber-500 uppercase tracking-widest mb-1.5"><i class="fa-solid fa-triangle-exclamation mr-1"></i>Kosong / Nonaktif</p>
                    <p class="text-lg sm:text-xl font-bold text-amber-500">${st.inactiveProd + st.inactiveVar}</p>
                    <p class="text-[10px] font-bold text-slate-400 mt-1">${st.inactiveProd} produk, ${st.inactiveVar} varian</p>
                </div>
                <div class="card-modern p-5 sm:p-5 bg-slate-50 dark:bg-slate-800/40">
                    <p class="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-1.5"><i class="fa-solid fa-warehouse mr-1"></i>Total Aset Gudang</p>
                    <p class="text-[10px] font-bold text-slate-500 dark:text-slate-400">Modal (HPP): <b class="text-slate-700 dark:text-slate-200">${fCur(st.assetHpp)}</b></p>
                    <p class="text-[10px] font-bold text-slate-500 dark:text-slate-400 mt-0.5">Harga Jual: <b class="text-slate-700 dark:text-slate-200">${fCur(st.assetJual)}</b></p>
                </div>
            </div>
        `);
    }

    let rawList = [...(appData[t]||[])]; rawList.sort((a,b) => (b.id||0)-(a.id||0));
    let i = rawList.filter(x => {
        let m = (x.name||x.title||x.bankName||x.code||x.sku||x.phone||'').toLowerCase().includes(aSq);
        if(t==='products' && !m && x.variants) { m = x.variants.some(v => v.sku && v.sku.toLowerCase().includes(aSq)); }
        return m;
    });
    
    if(!i.length){ return setH('admin-list-container', `<div class="flex flex-col items-center justify-center py-20 text-slate-400 font-bold bg-white dark:bg-slate-800 rounded-[1.5rem] border border-slate-200 dark:border-slate-700 shadow-sm text-center"><i class="fa-solid fa-folder-open text-5xl mb-4 opacity-30"></i>Data kosong</div>`); }
    
    setH('admin-list-container', i.map(x => {
        let isP = t==='products', isOff = isP && (x.isActive==='false'||x.isActive===false);
        let bC = isOff ? 'border-rose-200 bg-rose-50/50 dark:border-rose-900/50 dark:bg-rose-900/10' : 'border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-800';
        let tC = isOff ? 'text-slate-500 dark:text-slate-400 line-through' : 'text-slate-800 dark:text-slate-100';
        
        let img = x.img 
            ? `<div class="w-16 h-16 sm:w-20 sm:h-20 shrink-0 bg-white border border-slate-100 dark:border-slate-700/60 rounded-2xl p-1.5 flex items-center justify-center overflow-hidden"><img loading="lazy" src="${esc(x.img)}" alt="${esc(x.name)}" onerror="this.onerror=null;this.src='https://placehold.co/100?text=Img'" class="w-full h-full object-contain ${isOff?'grayscale opacity-50':''}"></i></div>`
            : `<div class="w-16 h-16 sm:w-20 sm:h-20 shrink-0 bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700/60 rounded-2xl flex items-center justify-center text-slate-300 dark:text-slate-600"><i class="fa-solid fa-image text-2xl"></i></div>`;
        
        let tglBtn = isP ? (isOff 
            ? `<button class="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-500 flex items-center justify-center hover:bg-emerald-500 hover:text-white dark:bg-emerald-900/30 dark:border-emerald-800 transition-all active:scale-95 shadow-sm" onclick="event.stopPropagation(); toggleProductStatus(${x.id}, true)" title="Aktifkan Stok"><i class="fa-solid fa-check text-xs sm:text-sm"></i></button>`
            : `<button class="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-amber-50 border border-amber-200 text-amber-500 flex items-center justify-center hover:bg-amber-500 hover:text-white dark:bg-amber-900/30 dark:border-amber-800 transition-all active:scale-95 shadow-sm" onclick="event.stopPropagation(); toggleProductStatus(${x.id}, false)" title="Nonaktifkan (Habis)"><i class="fa-solid fa-ban text-xs sm:text-sm"></i></button>`
        ) : '';
        
        let dupBtn = isP 
            ? `<button class="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-blue-50 border border-blue-200 text-blue-500 flex items-center justify-center hover:bg-blue-500 hover:text-white dark:bg-blue-900/30 dark:border-blue-800 transition-all active:scale-95 shadow-sm" onclick="event.stopPropagation(); duplicateProduct(${x.id})" title="Duplikat Produk"><i class="fa-regular fa-copy text-xs sm:text-sm"></i></button>` 
            : '';

        // FIX #1: cek useStock dengan cara yang konsisten (sama dengan logika di seluruh codebase)
        const useStockEnabled = appData.store.useStock === true || appData.store.useStock === 'true';
        let restockBtn = (isP && useStockEnabled) 
            ? `<button class="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-indigo-50 border border-indigo-200 text-indigo-500 flex items-center justify-center hover:bg-indigo-500 hover:text-white dark:bg-indigo-900/30 dark:border-indigo-800 transition-all active:scale-95 shadow-sm" onclick="event.stopPropagation(); openRestockModal(${x.id})" title="Restock Produk"><i class="fa-solid fa-boxes-stacked text-xs sm:text-sm"></i></button>`
            : '';

        // FITUR BARU: tombol Edit Cepat Harga (HPP, harga jual, harga coret, grosir, varian)
        let qPriceBtn = isP
            ? `<button class="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-500 flex items-center justify-center hover:bg-emerald-500 hover:text-white dark:bg-emerald-900/30 dark:border-emerald-800 transition-all active:scale-95 shadow-sm" onclick="event.stopPropagation(); openQuickPriceModal(${x.id})" title="Edit Cepat Harga"><i class="fa-solid fa-tags text-xs sm:text-sm"></i></button>`
            : '';

        let editBtn = `<button class="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-slate-50 border border-slate-200 text-slate-500 flex items-center justify-center hover:bg-slate-500 hover:text-white dark:bg-slate-700 dark:border-slate-600 dark:text-slate-300 transition-all active:scale-95 shadow-sm" onclick="event.stopPropagation(); oAEd('${t}',${x.id})" title="Edit Data"><i class="fa-solid fa-pen text-xs sm:text-sm"></i></button>`;
        
        let delBtn = `<button class="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-rose-50 border border-rose-200 text-rose-500 flex items-center justify-center hover:bg-rose-500 hover:text-white dark:bg-rose-900/30 dark:border-rose-800 transition-all active:scale-95 shadow-sm" onclick="event.stopPropagation(); oADel('${t}',${x.id})" title="Hapus Permanen"><i class="fa-solid fa-trash text-xs sm:text-sm"></i></button>`;

        return `
        <div class="p-4 sm:p-5 md:p-6 lg:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-[1.5rem] border shadow-sm cursor-pointer hover:shadow-md hover:-translate-y-1 hover:border-emerald-300 dark:hover:border-emerald-600 transition-all duration-300 ${bC}" onclick="oAEd('${t}',${x.id})">
            <div class="flex items-start sm:items-center gap-4 min-w-0 w-full">
                ${img}
                <div class="min-w-0 flex flex-col justify-center py-1">
                    <p class="text-xs sm:text-sm font-bold ${tC} line-clamp-2 uppercase tracking-wide leading-snug mb-1.5">${esc(x.name||x.title||x.bankName||x.code||'Item')}</p>
                    ${isP ? `<p class="text-sm sm:text-base font-bold text-emerald-600 dark:text-emerald-400 tracking-tight">${fCur(x.price)}</p>` : ''}
                    ${isP && window.isAdm && useStockEnabled ? `<p class="text-[10px] font-bold mt-1 ${(x.variants&&x.variants.length?x.variants.reduce((s,v)=>s+(parseFloat(v.stock)||0),0):parseFloat(x.stock)||0) === 0 ? 'text-rose-500 animate-pulse' : 'text-blue-500'}"><i class="fa-solid fa-boxes-stacked mr-1"></i>Stok: ${x.variants&&x.variants.length ? x.variants.reduce((s,v)=>s+(parseFloat(v.stock)||0),0).toFixed(2).replace(/\.?0+$/,'') : (parseFloat(x.stock)||0)}</p>` : ''}
                    ${isP && window.isAdm && x.hpp ? `<p class="text-[10px] font-bold text-amber-500 mt-0.5"><i class="fa-solid fa-coins mr-1"></i>HPP: ${fCur(x.hpp)}</p>` : ''}
                    ${isP ? (() => {
                        const sold = x.variants && x.variants.length ? x.variants.reduce((s,vv)=>s+(parseFloat(vv.totalSold)||0),0) : (parseFloat(x.totalSold)||0);
                        return sold > 0 ? `<p class="text-[10px] font-bold text-orange-400 mt-0.5"><i class="fa-solid fa-fire-flame-curved mr-1"></i>Terjual: ${sold}</p>` : '';
                    })() : ''}
                    ${t==='colors' ? `<div class="flex items-center gap-2 mt-1"><div class="w-4 h-4 rounded-full border border-slate-200 dark:border-slate-600 shadow-sm" style="background-color: ${esc(x.hex||'transparent')}"></div><p class="text-[10px] font-bold text-slate-500 uppercase tracking-widest"><i class="fa-solid fa-swatchbook mr-1"></i>${esc(x.catalog||'Tanpa Katalog')}</p></div>` : ''}
                    ${t==='customers' ? `<p class="text-xs font-bold text-slate-500 dark:text-slate-400"><i class="fa-brands fa-whatsapp text-emerald-500 mr-1"></i>+${esc(x.phone)}</p><p class="text-[11px] font-bold text-violet-500 mt-0.5"><i class="fa-solid fa-star mr-1"></i>${(parseFloat(x.points)||0)} Poin</p>` : ''}
                    ${t==='rewards' ? `<p class="text-sm font-bold text-violet-500"><i class="fa-solid fa-star mr-1"></i>${(parseFloat(x.pointsCost)||0)} Poin</p><p class="text-[10px] font-bold text-slate-500 mt-0.5"><i class="fa-solid fa-boxes-stacked mr-1"></i>Stok: ${parseFloat(x.stock)||0}</p>` : ''}
                </div>
            </div>
            <div class="flex gap-2.5 shrink-0 self-end sm:self-center pt-3 sm:pt-0 border-t border-slate-100 sm:border-0 dark:border-slate-700/50 w-full sm:w-auto justify-end">
                ${tglBtn}
                ${restockBtn}
                ${qPriceBtn}
                ${dupBtn}
                ${editBtn}
                ${delBtn}
            </div>
        </div>`;
    }).join(''));

    // FIX: kembalikan posisi scroll seperti semula (lihat catatan di awal fungsi)
    if (scrollParent) requestAnimationFrame(() => { scrollParent.scrollTop = savedScrollTop; });
};

// =====================================================================
// FITUR BARU: PANEL ADMIN -- MODERASI ULASAN PELANGGAN
// =====================================================================
window.filterReviews = (mode) => {
    reviewFilterMode = mode;
    rAdmReviews();
};

window.rAdmReviews = () => {
    const filtered = gReviews.filter(r => {
        if (reviewFilterMode === 'visible') return r.isVisible !== false;
        if (reviewFilterMode === 'hidden') return r.isVisible === false;
        return true;
    });

    const filterTabs = `
        <div class="flex gap-1.5 bg-slate-100 dark:bg-slate-800 p-1 rounded-xl mb-5 w-fit">
            ${[{k:'all',l:'Semua'},{k:'visible',l:'Ditampilkan'},{k:'hidden',l:'Disembunyikan'}].map(f => `
                <button onclick="filterReviews('${f.k}')" class="px-3.5 py-1.5 rounded-xl text-[10px] font-bold uppercase tracking-widest transition-all ${reviewFilterMode===f.k ? 'shadow-sm' : 'text-slate-500 dark:text-slate-400'}" style="${reviewFilterMode===f.k ? 'background:var(--color-primary);color:#fff' : ''}">${f.l}</button>
            `).join('')}
        </div>`;

    if (!filtered.length) {
        setH('admin-content', filterTabs + `<div class="flex flex-col items-center justify-center py-20 text-slate-400 font-bold bg-white dark:bg-slate-800 rounded-[1.5rem] border border-slate-200 dark:border-slate-700 shadow-sm text-center"><i class="fa-solid fa-comment-slash text-5xl mb-4 opacity-30"></i>Belum ada ulasan</div>`);
        return;
    }

    const starRow = (n) => Array.from({length:5}, (_,idx) => `<i class="fa-solid fa-star ${idx < Math.round(n) ? 'text-amber-400' : 'text-slate-200 dark:text-slate-700'}"></i>`).join('');

    const list = filtered.map(r => {
        let dateStr = '';
        try { if (r.createdAt && r.createdAt.toDate) dateStr = r.createdAt.toDate().toLocaleDateString('id-ID', {day:'numeric', month:'short', year:'numeric', hour:'2-digit', minute:'2-digit'}); } catch(e) {}
        const hidden = r.isVisible === false;
        return `
        <div class="p-4 sm:p-5 md:p-6 lg:p-8 rounded-[1.5rem] border shadow-sm ${hidden ? 'border-rose-200 bg-rose-50/40 dark:border-rose-900/40 dark:bg-rose-900/10' : 'border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-800'} mb-3">
            <div class="flex items-start justify-between gap-3 mb-2">
                <div class="min-w-0">
                    <p class="text-sm font-bold text-slate-800 dark:text-white truncate">${esc(r.customerName || 'Pelanggan')}</p>
                    <p class="text-[10px] font-bold text-slate-500 mt-0.5">${esc(r.productName || '')}${r.variantName ? ' · ' + esc(r.variantName) : ''}</p>
                </div>
                <span class="text-[9px] font-bold text-slate-400 whitespace-nowrap">${dateStr}</span>
            </div>
            <div class="flex text-xs mb-2.5">${starRow(r.rating)}</div>
            ${r.text ? `<p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-2.5">${esc(r.text)}</p>` : ''}
            ${r.photoUrl ? `<img src="${esc(r.photoUrl)}" onclick="window.open('${esc(r.photoUrl)}','_blank')" class="w-20 h-20 rounded-xl object-cover border border-slate-200 dark:border-slate-700 cursor-pointer mb-2.5" onerror="this.style.display='none'" loading="lazy"></i>` : ''}
            ${r.adminReply ? `<div class="bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 rounded-xl p-3 mb-2.5"><p class="text-[9px] font-bold text-[var(--color-primary)] uppercase tracking-widest mb-1"><i class="fa-solid fa-store mr-1"></i>Balasan Anda</p><p class="text-[11px] text-slate-600 dark:text-slate-300">${esc(r.adminReply)}</p></div>` : ''}
            <div class="flex flex-wrap gap-2 pt-2 border-t border-slate-100 dark:border-slate-700/60">
                <button onclick="replyToReview(${r.id})" class="px-3 py-2 rounded-xl bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 text-[10px] font-bold uppercase tracking-widest flex items-center gap-1.5 hover:bg-blue-100 transition-all"><i class="fa-solid fa-reply"></i> ${r.adminReply ? 'Edit Balasan' : 'Balas'}</button>
                <button onclick="toggleReviewVisibility(${r.id})" class="px-3 py-2 rounded-xl ${hidden ? 'bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-100' : 'bg-amber-50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400 hover:bg-amber-100'} text-[10px] font-bold uppercase tracking-widest flex items-center gap-1.5 transition-all"><i class="fa-solid ${hidden ? 'fa-eye' : 'fa-eye-slash'}"></i> ${hidden ? 'Tampilkan' : 'Sembunyikan'}</button>
                <button onclick="deleteReview(${r.id})" class="px-3 py-2 rounded-xl bg-rose-50 dark:bg-rose-900/20 text-rose-500 text-[10px] font-bold uppercase tracking-widest flex items-center gap-1.5 hover:bg-rose-100 transition-all"><i class="fa-solid fa-trash"></i> Hapus</button>
            </div>
        </div>`;
    }).join('');

    setH('admin-content', filterTabs + list);
};

window.replyToReview = async (reviewId) => {
    const r = gReviews.find(x => x.id === reviewId);
    if (!r) return;
    
    window.customPrompt("Tulis balasan untuk ulasan ini:", r.adminReply || '', async (reply) => {
        // jika kosong, bisa juga dianggap menghapus balasan
        sLoad('Menyimpan balasan...');
        try {
            await db.collection("freshmart").doc("cms_data").collection("reviews").doc(reviewId.toString()).update({ adminReply: reply });
            showToast("Balasan tersimpan!");
        } catch(e) { 
            showToast("Gagal menyimpan balasan!"); 
        } finally { 
            hLoad(); 
        }
    });
};

window.toggleReviewVisibility = async (reviewId) => {
    const r = gReviews.find(x => x.id === reviewId);
    if (!r) return;
    const newVisible = r.isVisible === false ? true : false;
    sLoad('Menyimpan...');
    try {
        await db.collection("freshmart").doc("cms_data").collection("reviews").doc(reviewId.toString()).update({ isVisible: newVisible });
        showToast(newVisible ? "Ulasan ditampilkan lagi!" : "Ulasan disembunyikan dari halaman produk!");
    } catch(e) { showToast("Gagal mengubah status ulasan!"); }
    finally { hLoad(); }
};

window.deleteReview = (reviewId) => {
    showConfirm("Hapus Ulasan", "Ulasan yang dihapus tidak bisa dikembalikan lagi.", async () => {
        sLoad('Menghapus...');
        try {
            await db.collection("freshmart").doc("cms_data").collection("reviews").doc(reviewId.toString()).delete();
            showToast("Ulasan dihapus!");
        } catch(e) { showToast("Gagal menghapus ulasan!"); }
        finally { hLoad(); }
    });
};

// =====================================================================
// FITUR BARU: MENU PAJAK & KEUANGAN
// Alat bantu rekap Omset, PPN, Laba Rugi, dan Neraca sederhana sebagai
// REFERENSI pelaporan SPT Tahunan Badan Usaha. Data Omset/PPN/HPP dihitung
// OTOMATIS dari transaksi asli; Biaya Operasional & Neraca diisi MANUAL
// oleh admin (sistem tidak mengelola rekening bank/kas sungguhan).
//
// PENTING: ini BUKAN pengganti konsultan pajak/akuntan. Angka di sini
// adalah rekap pembantu -- validasi ke akuntan/konsultan pajak sebelum
// benar-benar dipakai untuk lapor SPT resmi.
// =====================================================================
let taxYear = new Date().getFullYear();
let taxMonth = 0; // 0 = Setahun Penuh, 1-12 = bulan spesifik
let taxActiveTab = 'menu';
let gTaxMonthly = null; // cache hasil fetch: { "1":{omset,ppn,hpp,disc,orderCount}, ..., "12":{...} }
const MONTH_NAMES = ['Jan','Feb','Mar','Apr','Mei','Jun','Jul','Agu','Sep','Okt','Nov','Des'];

window.fetchTaxPeriodData = async (year) => {
    const monthly = {};
    for (let m = 1; m <= 12; m++) monthly[m] = { omset: 0, ppn: 0, hpp: 0, disc: 0, orderCount: 0 };
    try {
        const startDate = new Date(year, 0, 1);
        const endDate = new Date(year + 1, 0, 1);
        const q = db.collection("freshmart_orders")
            .where('timestamp', '>=', firebase.firestore.Timestamp.fromDate(startDate))
            .where('timestamp', '<', firebase.firestore.Timestamp.fromDate(endDate));
        const snap = await q.limit(5000).get();
        snap.forEach(doc => {
            const o = doc.data();
            if (o.status === 'Dibatalkan') return;
            if (!o.timestamp || !o.timestamp.toDate) return;
            const m = o.timestamp.toDate().getMonth() + 1;
            monthly[m].omset += parseFloat(o.payment?.subtotal) || 0;
            monthly[m].ppn += parseFloat(o.payment?.ppnAmount) || 0;
            monthly[m].disc += parseFloat(o.payment?.productDiscount) || 0;
            monthly[m].orderCount++;
            (o.items || []).forEach(it => {
                const hppItem = (it.hpp !== undefined && it.hpp !== null) ? parseFloat(it.hpp) : getEffHpp(it);
                monthly[m].hpp += (parseFloat(hppItem) || 0) * (parseFloat(it.qty) || 0);
            });
        });
    } catch(e) { console.error('Gagal memuat data pajak:', e); showToast('Gagal memuat data periode ini!'); }
    return monthly;
};

// Jumlahkan bulan-bulan yang relevan sesuai filter (satu bulan spesifik, atau semua)
window.getTaxPeriodTotals = () => {
    if (!gTaxMonthly) return { omset:0, ppn:0, hpp:0, disc:0, orderCount:0 };
    const months = taxMonth === 0 ? Object.keys(gTaxMonthly) : [taxMonth];
    return months.reduce((acc, m) => {
        const d = gTaxMonthly[m];
        acc.omset += d.omset; acc.ppn += d.ppn; acc.hpp += d.hpp; acc.disc += d.disc; acc.orderCount += d.orderCount;
        return acc;
    }, { omset:0, ppn:0, hpp:0, disc:0, orderCount:0 });
};

// Total biaya operasional manual untuk bulan/periode yang dipilih
window.getTaxPeriodExpenses = () => {
    const exp = appData.taxSettings.monthlyExpenses || {};
    const months = taxMonth === 0 ? Array.from({length:12}, (_,i) => i+1) : [taxMonth];
    return months.reduce((s, m) => s + (parseFloat(exp[`${taxYear}-${m}`]) || 0), 0);
};

window.rTaxPanel = async () => {
    setH('admin-content', `<div class="text-center py-16"><i class="fa-solid fa-spinner fa-spin text-3xl text-slate-300"></i></div>`);
    gTaxMonthly = await window.fetchTaxPeriodData(taxYear);
    rTaxRenderShell();
};

// Kerangka panel (tab switcher + filter tahun/bulan) -- dipanggil sekali,
// lalu konten sub-tab di-refresh terpisah tanpa reload data periode ulang.
window.rTaxRenderShell = () => {
      const yearOptions = Array.from({length:6}, (_,i) => new Date().getFullYear() - 4 + i);
      const tabs = [
          {k:'summary', l:'Ringkasan PPN', i:'fa-receipt', desc:'Laporan pajak pertambahan nilai'},
          {k:'income', l:'Laba Rugi', i:'fa-chart-pie', desc:'Laporan keuangan laba & rugi'},
          {k:'balance', l:'Neraca', i:'fa-scale-balanced', desc:'Informasi aset & kewajiban'},
          {k:'settings', l:'Pengaturan', i:'fa-gear', desc:'Konfigurasi tarif & data pajak'}
      ];
      
      let headerHTML = '';
      if(taxActiveTab === 'menu') {
           headerHTML = `
           <div class="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-5">
              ${tabs.map(t => `
                  <button onclick="switchTaxTab('${t.k}')" class="flex flex-col items-start gap-3 p-4 sm:p-5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl hover:-translate-y-1 hover:shadow-md hover:border-emerald-300 dark:hover:border-emerald-600 transition-all text-left group">
                      <div class="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-emerald-50 dark:bg-emerald-900/30 text-emerald-500 flex items-center justify-center text-lg sm:text-xl group-hover:scale-110 transition-transform">
                          <i class="fa-solid ${t.i}"></i>
                      </div>
                      <div>
                          <h4 class="font-bold text-slate-800 dark:text-white text-xs sm:text-sm uppercase tracking-widest mb-1 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">${t.l}</h4>
                          <p class="text-[10px] font-medium text-slate-400 leading-tight">${t.desc}</p>
                      </div>
                  </button>
              `).join('')}
           </div>
           `;
      } else {
           const activeTabInfo = tabs.find(t => t.k === taxActiveTab) || tabs[0];
           headerHTML = `
           <div class="flex flex-wrap items-center justify-between gap-3 mb-5 bg-white dark:bg-slate-800 p-3 sm:p-4 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
               <div class="flex items-center gap-3">
                   <button onclick="switchTaxTab('menu')" class="w-9 h-9 flex items-center justify-center rounded-xl bg-slate-100 dark:bg-slate-700 text-slate-500 hover:text-emerald-600 hover:bg-emerald-50 dark:hover:bg-emerald-900/30 transition-all shrink-0">
                       <i class="fa-solid fa-arrow-left"></i>
                   </button>
                   <div>
                       <h3 class="font-bold text-slate-800 dark:text-white text-xs sm:text-sm uppercase tracking-widest leading-none">${activeTabInfo.l}</h3>
                       <p class="text-[10px] text-slate-400 font-medium mt-1 hidden sm:block">Data Pajak & Keuangan</p>
                   </div>
               </div>
               
               ${taxActiveTab === 'settings' ? '' : `
               <div class="flex gap-2 items-center">
                  <select id="tax-year-select" onchange="changeTaxYear(this.value)" class="admin-input !py-2 !px-3 text-xs font-bold bg-slate-50 dark:bg-slate-900 w-24 border-slate-200 dark:border-slate-700">
                      ${yearOptions.map(y => `<option value="${y}" ${y===taxYear?'selected':''}>${y}</option>`).join('')}
                  </select>
                  <select id="tax-month-select" onchange="changeTaxMonth(this.value)" class="admin-input !py-2 !px-3 text-xs font-bold bg-slate-50 dark:bg-slate-900 w-32 sm:w-36 border-slate-200 dark:border-slate-700">
                      <option value="0" ${taxMonth===0?'selected':''}>Setahun Penuh</option>
                      ${MONTH_NAMES.map((n,idx) => `<option value="${idx+1}" ${taxMonth===idx+1?'selected':''}>${n} ${taxYear}</option>`).join('')}
                  </select>
              </div>
               `}
           </div>
           `;
      }
      
      setH('admin-content', `<div class="fade-in-scale">
          <div class="bg-amber-50 dark:bg-amber-900/10 border border-amber-200 dark:border-amber-800 rounded-2xl p-4 mb-5 flex items-start gap-3">
              <i class="fa-solid fa-triangle-exclamation text-amber-500 mt-0.5"></i>
              <p class="text-[11px] font-bold text-amber-700 dark:text-amber-400 leading-relaxed">Halaman ini adalah <b>alat bantu rekap</b> Omset, PPN, Laba Rugi, dan Neraca dari data transaksi toko. Bukan pengganti konsultan pajak/akuntan � validasi kembali angkanya sebelum digunakan untuk lapor SPT resmi.</p>
          </div>
  
          ${headerHTML}
  
          <div id="tax-content"></div>
      </div>`);
      rTaxSubContent();
  };

window.switchTaxTab = (tab) => {
      taxActiveTab = tab;
      window.rTaxRenderShell();
  };

window.changeTaxYear = async (y) => {
    taxYear = parseInt(y);
    setH('tax-content', `<div class="text-center py-16"><i class="fa-solid fa-spinner fa-spin text-3xl text-slate-300"></i></div>`);
    gTaxMonthly = await window.fetchTaxPeriodData(taxYear);
    rTaxSubContent();
};
window.changeTaxMonth = (m) => { taxMonth = parseInt(m); rTaxSubContent(); };

window.rTaxSubContent = () => {
    if (taxActiveTab === 'summary') rTaxSummary();
    else if (taxActiveTab === 'income') rTaxIncome();
    else if (taxActiveTab === 'balance') rTaxBalance();
    else if (taxActiveTab === 'settings') rTaxSettingsPanel();
};

// ---------- SUB-TAB 1: RINGKASAN PPN & OMSET ----------
window.rTaxSummary = () => {
    const t = window.getTaxPeriodTotals();
    const periodLabel = taxMonth === 0 ? `Tahun ${taxYear}` : `${MONTH_NAMES[taxMonth-1]} ${taxYear}`;
    const dpp = t.omset - t.disc; // Dasar Pengenaan Pajak: omset setelah diskon produk

    const monthRows = Array.from({length:12}, (_,i) => i+1).map(m => {
        const d = gTaxMonthly[m];
        const isActiveRow = taxMonth === m;
        return `<tr class="${isActiveRow ? 'bg-[rgba(var(--color-primary-rgb),0.06)]' : ''} border-b border-slate-100 dark:border-slate-700/50 last:border-0">
            <td class="py-2.5 px-3 text-xs font-bold text-slate-600 dark:text-slate-300">${MONTH_NAMES[m-1]}</td>
            <td class="py-2.5 px-3 text-xs font-bold text-slate-700 dark:text-slate-200 text-right">${fCur(d.omset)}</td>
            <td class="py-2.5 px-3 text-xs font-bold text-amber-600 text-right">${fCur(d.ppn)}</td>
            <td class="py-2.5 px-3 text-[11px] font-bold text-slate-400 text-right">${d.orderCount}</td>
        </tr>`;
    }).join('');

    setH('tax-content', `
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-5">
            <div class="card-modern p-5 sm:p-5">
                <p class="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-1.5">Omset Bruto (${periodLabel})</p>
                <p class="text-lg sm:text-xl font-bold text-slate-800 dark:text-white truncate">${fCur(t.omset)}</p>
                <p class="text-[10px] font-bold text-slate-400 mt-1">${t.orderCount} pesanan</p>
            </div>
            <div class="card-modern p-5 sm:p-5">
                <p class="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-1.5"><i class="fa-solid fa-minus mr-1"></i>Diskon Produk</p>
                <p class="text-lg sm:text-xl font-bold text-rose-500 truncate">${fCur(t.disc)}</p>
            </div>
            <div class="card-modern p-5 sm:p-5">
                <p class="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-1.5">DPP (Dasar Pengenaan Pajak)</p>
                <p class="text-lg sm:text-xl font-bold text-slate-800 dark:text-white truncate">${fCur(dpp)}</p>
            </div>
            <div class="card-modern p-5 sm:p-5 border-amber-200 dark:border-amber-700 relative overflow-hidden" style="background: linear-gradient(135deg, rgba(245,158,11,0.1), rgba(245,158,11,0.02))"><div class="absolute -right-4 -bottom-4 w-24 h-24 bg-amber-500/20 rounded-full blur-xl pointer-events-none"></div>
                <p class="text-[9px] font-bold text-amber-600 uppercase tracking-widest mb-1.5"><i class="fa-solid fa-file-invoice-dollar mr-1"></i>PPN Keluaran</p>
                <p class="text-lg sm:text-xl font-bold text-amber-600 truncate">${fCur(t.ppn)}</p>
                <p class="text-[10px] font-bold text-amber-500/80 mt-1">Wajib disetor ke negara</p>
            </div>
        </div>
        <div class="card-modern overflow-hidden">
            <div class="p-4 sm:p-5 md:p-6 lg:p-8 border-b border-slate-100 dark:border-slate-700 flex items-center justify-between">
                <h4 class="font-bold text-slate-700 dark:text-slate-200 text-xs uppercase tracking-widest">Rincian Per Bulan — ${taxYear}</h4>
                <button onclick="openTaxDocPreview('summary')" class="text-[10px] font-bold text-slate-400 hover:text-[var(--color-primary)] flex items-center gap-1.5"><i class="fa-solid fa-eye"></i> Preview &amp; Cetak</button>
            </div>
            <div class="overflow-x-auto">
                <table class="w-full">
                    <thead><tr class="bg-slate-50 dark:bg-slate-900/40 text-left"><th class="py-2.5 px-3 text-[9px] font-bold text-slate-400 uppercase">Bulan</th><th class="py-2.5 px-3 text-[9px] font-bold text-slate-400 uppercase text-right">Omset</th><th class="py-2.5 px-3 text-[9px] font-bold text-slate-400 uppercase text-right">PPN Keluaran</th><th class="py-2.5 px-3 text-[9px] font-bold text-slate-400 uppercase text-right">Pesanan</th></tr></thead>
                    <tbody>${monthRows}</tbody>
                </table>
            </div>
        </div>
    `);
};

// ---------- SUB-TAB 2: LABA RUGI ----------
window.rTaxIncome = () => {
    const t = window.getTaxPeriodTotals();
    const periodLabel = taxMonth === 0 ? `Tahun ${taxYear}` : `${MONTH_NAMES[taxMonth-1]} ${taxYear}`;
    const labaKotor = t.omset - t.disc - t.hpp;
    const expenseKey = taxMonth === 0 ? null : `${taxYear}-${taxMonth}`;
    const totalExpense = window.getTaxPeriodExpenses();
    const labaBersih = labaKotor - totalExpense;

    const scheme = appData.taxSettings.taxScheme || 'umkm_final';
    let taxRate, taxBase, taxLabel;
    if (scheme === 'umkm_final') { taxRate = 0.5; taxBase = t.omset; taxLabel = 'PPh Final UMKM (0,5% × Omset)'; }
    else if (scheme === 'badan_normal') { taxRate = 22; taxBase = Math.max(0, labaBersih); taxLabel = 'PPh Badan (22% × Laba Bersih)'; }
    else { taxRate = parseFloat(appData.taxSettings.customTaxRate) || 0; taxBase = Math.max(0, labaBersih); taxLabel = `PPh Custom (${taxRate}% × Laba Bersih)`; }
    const estimasiPajak = taxBase * (taxRate / 100);
    const labaSetelahPajak = labaBersih - estimasiPajak;

    // Input biaya operasional: kalau mode "Setahun Penuh", tampilkan 12 input per bulan; kalau bulan spesifik, satu input saja
    let expenseInputs = '';
    if (taxMonth === 0) {
        expenseInputs = Array.from({length:12}, (_,i) => i+1).map(m => {
            const key = `${taxYear}-${m}`;
            const val = (appData.taxSettings.monthlyExpenses || {})[key] || 0;
            return `<div class="flex items-center justify-between gap-2 py-2 border-b border-slate-100 dark:border-slate-700/50 last:border-0">
                <span class="text-xs font-bold text-slate-500 dark:text-slate-400">${MONTH_NAMES[m-1]} ${taxYear}</span>
                <input type="number" min="0" value="${val}" onchange="saveMonthlyExpense('${key}', this.value)" class="admin-input !py-2 !px-3 text-xs w-36 text-right bg-slate-50 dark:bg-slate-900/50"></i>
            </div>`;
        }).join('');
    } else {
        const val = (appData.taxSettings.monthlyExpenses || {})[expenseKey] || 0;
        expenseInputs = `<div class="flex items-center justify-between gap-2 py-2">
            <span class="text-xs font-bold text-slate-500 dark:text-slate-400">${MONTH_NAMES[taxMonth-1]} ${taxYear}</span>
            <input type="number" min="0" value="${val}" onchange="saveMonthlyExpense('${expenseKey}', this.value)" class="admin-input !py-2 !px-3 text-xs w-36 text-right bg-slate-50 dark:bg-slate-900/50"></i>
        </div>`;
    }

    setH('tax-content', `
        <div class="card-modern p-5 sm:p-6 md:p-7 lg:p-8 w-full mx-auto">
            <div class="flex items-center justify-between mb-6 pb-4 border-b border-slate-100 dark:border-slate-700">
                <h4 class="font-bold text-slate-800 dark:text-white text-sm uppercase tracking-widest">Laporan Laba Rugi — ${periodLabel}</h4>
                <button onclick="openTaxDocPreview('income')" class="text-[10px] font-bold text-slate-400 hover:text-[var(--color-primary)] flex items-center gap-1.5"><i class="fa-solid fa-eye"></i> Preview &amp; Cetak</button>
            </div>
            <div class="space-y-2.5 text-sm">
                <div class="flex justify-between"><span class="font-bold text-slate-500 dark:text-slate-400">Omset Bruto</span><span class="font-bold text-slate-800 dark:text-white">${fCur(t.omset)}</span></div>
                <div class="flex justify-between"><span class="font-bold text-slate-500 dark:text-slate-400">(−) Diskon Produk</span><span class="font-bold text-rose-500">-${fCur(t.disc)}</span></div>
                <div class="flex justify-between"><span class="font-bold text-slate-500 dark:text-slate-400">(−) HPP (Harga Pokok Penjualan)</span><span class="font-bold text-rose-500">-${fCur(t.hpp)}</span></div>
                <div class="flex justify-between pt-2.5 border-t border-slate-200 dark:border-slate-700"><span class="font-bold text-slate-700 dark:text-slate-200">Laba Kotor</span><span class="font-bold text-emerald-600">${fCur(labaKotor)}</span></div>
                <div class="flex justify-between"><span class="font-bold text-slate-500 dark:text-slate-400">(−) Biaya Operasional</span><span class="font-bold text-rose-500">-${fCur(totalExpense)}</span></div>
                <div class="flex justify-between pt-2.5 border-t border-slate-200 dark:border-slate-700"><span class="font-bold text-slate-700 dark:text-slate-200">Laba Bersih Sebelum Pajak</span><span class="font-bold" style="color:var(--color-primary)">${fCur(labaBersih)}</span></div>
                <div class="flex justify-between"><span class="font-bold text-slate-500 dark:text-slate-400">(−) Estimasi ${taxLabel}</span><span class="font-bold text-rose-500">-${fCur(estimasiPajak)}</span></div>
                <div class="flex justify-between pt-3 border-t-2 border-slate-800 dark:border-slate-200"><span class="font-bold text-slate-900 dark:text-white text-base">Laba Bersih Setelah Pajak (Estimasi)</span><span class="font-bold text-base" style="color:var(--color-primary)">${fCur(labaSetelahPajak)}</span></div>
            </div>

            <div class="mt-7 pt-5 border-t border-dashed border-slate-200 dark:border-slate-700">
                <h5 class="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-3"><i class="fa-solid fa-pen mr-1"></i>Input Biaya Operasional (Manual)</h5>
                <p class="text-[10px] font-bold text-slate-400 mb-3">Contoh: sewa, gaji, listrik, internet, dll. Sistem tidak melacak ini otomatis.</p>
                ${expenseInputs}
            </div>
        </div>
    `);
};

window.saveMonthlyExpense = async (key, value) => {
    const num = parseFloat(value) || 0;
    if (!appData.taxSettings.monthlyExpenses) appData.taxSettings.monthlyExpenses = {};
    appData.taxSettings.monthlyExpenses[key] = num;
    try {
        await saveApp(['taxSettings']);
        rTaxIncome(); // refresh perhitungan laba
    } catch(e) { showToast('Gagal menyimpan biaya operasional!'); }
};

// ---------- SUB-TAB 3: NERACA SEDERHANA ----------
window.rTaxBalance = () => {
    const st = window.computeInventoryStats(); // Aset Persediaan (otomatis, dari data toko)
    const bs = appData.taxSettings.balanceSheet || { kas:0, piutang:0, hutang:0, modalDisetor:0 };

    // Modal + laba ditahan (estimasi akumulasi laba bersih sepanjang tahun berjalan, sebelum pajak biar sederhana)
    const totalAset = (parseFloat(bs.kas)||0) + (parseFloat(bs.piutang)||0) + st.assetHpp;
    const totalKewajiban = parseFloat(bs.hutang) || 0;
    const modalDanLaba = totalAset - totalKewajiban; // supaya neraca tetap balance, modal+laba ditahan = sisa dari aset-kewajiban

    setH('tax-content', `
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6 w-full mx-auto">
            <div class="card-modern p-5 sm:p-6 relative overflow-hidden shadow-lg border-emerald-100 dark:border-emerald-900/30" style="background: linear-gradient(135deg, rgba(16,185,129,0.05), transparent)"><div class="absolute -top-10 -right-10 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none"></div>
                <h4 class="font-bold text-slate-800 dark:text-white text-xs uppercase tracking-widest mb-4 pb-3 border-b border-slate-100 dark:border-slate-700"><i class="fa-solid fa-arrow-down-wide-short mr-1.5 text-emerald-500"></i>ASET</h4>
                <div class="space-y-3">
                    <div class="flex items-center justify-between gap-2"><span class="text-xs font-bold text-slate-500 dark:text-slate-400">Kas &amp; Bank (manual)</span><input type="number" min="0" value="${bs.kas||0}" onchange="saveBalanceField('kas', this.value)" class="admin-input !py-2 !px-3 text-xs w-32 text-right bg-slate-50 dark:bg-slate-900/50"></i></div>
                    <div class="flex items-center justify-between gap-2"><span class="text-xs font-bold text-slate-500 dark:text-slate-400">Piutang Usaha (manual)</span><input type="number" min="0" value="${bs.piutang||0}" onchange="saveBalanceField('piutang', this.value)" class="admin-input !py-2 !px-3 text-xs w-32 text-right bg-slate-50 dark:bg-slate-900/50"></i></div>
                    <div class="flex items-center justify-between gap-2 py-2 bg-emerald-50 dark:bg-emerald-900/10 rounded-xl px-3"><span class="text-xs font-bold text-emerald-600">Persediaan Barang (Otomatis)</span><span class="text-xs font-bold text-emerald-600">${fCur(st.assetHpp)}</span></div>
                    <div class="flex justify-between pt-3 border-t-2 border-slate-800 dark:border-slate-200"><span class="font-bold text-slate-900 dark:text-white text-sm">Total Aset</span><span class="font-bold text-sm" style="color:var(--color-primary)">${fCur(totalAset)}</span></div>
                </div>
            </div>
            <div class="card-modern p-5 sm:p-6 relative overflow-hidden shadow-lg border-rose-100 dark:border-rose-900/30" style="background: linear-gradient(135deg, rgba(244,63,94,0.05), transparent)"><div class="absolute -top-10 -right-10 w-32 h-32 bg-rose-500/10 rounded-full blur-2xl pointer-events-none"></div>
                <h4 class="font-bold text-slate-800 dark:text-white text-xs uppercase tracking-widest mb-4 pb-3 border-b border-slate-100 dark:border-slate-700"><i class="fa-solid fa-arrow-up-wide-short mr-1.5 text-rose-500"></i>KEWAJIBAN &amp; MODAL</h4>
                <div class="space-y-3">
                    <div class="flex items-center justify-between gap-2"><span class="text-xs font-bold text-slate-500 dark:text-slate-400">Hutang Usaha (manual)</span><input type="number" min="0" value="${bs.hutang||0}" onchange="saveBalanceField('hutang', this.value)" class="admin-input !py-2 !px-3 text-xs w-32 text-right bg-slate-50 dark:bg-slate-900/50"></i></div>
                    <div class="flex items-center justify-between gap-2 py-2 bg-slate-50 dark:bg-slate-900/40 rounded-xl px-3"><span class="text-xs font-bold text-slate-600 dark:text-slate-300">Modal &amp; Laba Ditahan</span><span class="text-xs font-bold text-slate-700 dark:text-slate-200">${fCur(modalDanLaba)}</span></div>
                    <p class="text-[10px] font-bold text-slate-400 leading-relaxed px-1">Angka Modal &amp; Laba Ditahan dihitung otomatis (Total Aset − Hutang) supaya neraca tetap seimbang. Kalau Anda tahu persis modal disetor awal, isi manual di Pengaturan.</p>
                    <div class="flex justify-between pt-3 border-t-2 border-slate-800 dark:border-slate-200"><span class="font-bold text-slate-900 dark:text-white text-sm">Total Kewajiban + Modal</span><span class="font-bold text-sm" style="color:var(--color-primary)">${fCur(totalKewajiban + modalDanLaba)}</span></div>
                </div>
            </div>
        </div>
        <div class="max-w-7xl mx-auto mt-6 text-center">
            <button onclick="openTaxDocPreview('balance')" class="text-[10px] font-bold text-slate-400 hover:text-[var(--color-primary)] inline-flex items-center gap-1.5"><i class="fa-solid fa-eye"></i> Preview &amp; Cetak Neraca</button>
        </div>
    `);
};

window.saveBalanceField = async (key, value) => {
    const num = parseFloat(value) || 0;
    if (!appData.taxSettings.balanceSheet) appData.taxSettings.balanceSheet = { kas:0, piutang:0, hutang:0, modalDisetor:0 };
    appData.taxSettings.balanceSheet[key] = num;
    try {
        await saveApp(['taxSettings']);
        rTaxBalance();
    } catch(e) { showToast('Gagal menyimpan data neraca!'); }
};

// ---------- SUB-TAB 4: PENGATURAN PAJAK ----------
window.rTaxSettingsPanel = () => {
    const ts = appData.taxSettings;
    setH('tax-content', `
        <div class="card-modern p-5 sm:p-6 md:p-7 lg:p-8 w-full max-w-3xl mx-auto space-y-5">
            <div>
                <label class="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-widest">Nama Badan Usaha</label>
                <input id="tax-company-name" type="text" value="${esc(ts.companyName||'')}" placeholder="Cth: PT/CV Restu Karya Utama" class="admin-input !py-3.5 bg-slate-50 dark:bg-slate-900 shadow-inner"></i>
            </div>
            <div>
                <label class="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-widest">NPWP</label>
                <input id="tax-npwp" type="text" value="${esc(ts.npwp||'')}" placeholder="XX.XXX.XXX.X-XXX.XXX" class="admin-input !py-3.5 bg-slate-50 dark:bg-slate-900 shadow-inner"></i>
            </div>
            <div>
                <label class="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-widest">Skema Perhitungan PPh</label>
                <select id="tax-scheme" onchange="toggleCustomTaxRateInput(this.value)" class="admin-input !py-3.5 bg-white dark:bg-slate-800 shadow-sm cursor-pointer">
                    <option value="umkm_final" ${ts.taxScheme==='umkm_final'?'selected':''}>PPh Final UMKM — 0,5% dari Omset (PP 23/2018)</option>
                    <option value="badan_normal" ${ts.taxScheme==='badan_normal'?'selected':''}>PPh Badan Normal — 22% dari Laba Bersih</option>
                    <option value="custom" ${ts.taxScheme==='custom'?'selected':''}>Custom (isi tarif sendiri)</option>
                </select>
            </div>
            <div id="tax-custom-rate-wrap" class="${ts.taxScheme==='custom'?'':'hidden'}">
                <label class="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-widest">Tarif Custom (% dari Laba Bersih)</label>
                <input id="tax-custom-rate" type="number" min="0" max="100" step="0.1" value="${ts.customTaxRate||0.5}" class="admin-input !py-3.5 bg-slate-50 dark:bg-slate-900 shadow-inner"></i>
            </div>
            <button onclick="saveTaxSettingsPanel()" class="btn-primary py-3.5 text-sm shadow-glow !rounded-xl flex items-center justify-center gap-2 w-full"><i class="fa-solid fa-save"></i> Simpan Pengaturan Pajak</button>
        </div>
    `);
};

window.toggleCustomTaxRateInput = (val) => { toggleCls('tax-custom-rate-wrap', 'hidden', val !== 'custom'); };

window.saveTaxSettingsPanel = async () => {
    if (isSaving) return; isSaving = true;
    sLoad('Menyimpan...');
    try {
        appData.taxSettings.companyName = getV('tax-company-name');
        appData.taxSettings.npwp = getV('tax-npwp');
        appData.taxSettings.taxScheme = getV('tax-scheme');
        appData.taxSettings.customTaxRate = parseFloat(getV('tax-custom-rate')) || 0.5;
        await saveApp(['taxSettings']);
        showToast('Pengaturan pajak tersimpan!');
    } catch(e) { showToast('Gagal menyimpan pengaturan pajak!'); }
    finally { isSaving = false; hLoad(); }
};

// FITUR BARU: Preview dokumen A4 untuk laporan Pajak SEBELUM dicetak --
// pakai ulang sistem modal preview yang sama seperti Invoice/Surat Jalan,
// supaya tidak langsung window.print() ke tampilan admin yang berantakan.
window.openTaxDocPreview = (reportType) => {
    const periodLabel = taxMonth === 0 ? `Tahun ${taxYear}` : `${MONTH_NAMES[taxMonth-1]} ${taxYear}`;
    const ts = appData.taxSettings;
    const today = new Date().toLocaleDateString('id-ID', {day:'2-digit', month:'long', year:'numeric'});

    let logoHTML = '';
    if (appData.store.logo && (appData.store.logo.includes('http') || appData.store.logo.includes('data:'))) {
        logoHTML = `<img loading="eager" src="${esc(appData.store.logo)}" class="w-16 h-16 object-contain"></i>`;
    } else {
        logoHTML = `<div class="w-16 h-16 bg-slate-700 text-white flex items-center justify-center rounded-xl"><i class="fa-solid fa-store text-3xl"></i></div>`;
    }

    const titles = { summary: 'LAPORAN PPN & OMSET', income: 'LAPORAN LABA RUGI', balance: 'NERACA' };
    const title = titles[reportType] || 'LAPORAN';

    let headerHtml = `
    <div class="flex justify-between items-start border-b-[3px] border-slate-800 pb-6 mb-6">
        <div class="flex items-center gap-4">
            ${logoHTML}
            <div>
                <h1 class="font-bold text-xl tracking-tight text-slate-900 uppercase">${esc(ts.companyName || appData.store.name)}</h1>
                ${ts.npwp ? `<p class="text-xs font-bold text-slate-500 mt-1">NPWP: ${esc(ts.npwp)}</p>` : ''}
                <p class="text-xs font-medium text-slate-500 mt-1 max-w-sm leading-snug">${esc(appData.store.address || '')}</p>
            </div>
        </div>
        <div class="text-right">
            <h2 class="font-bold text-2xl tracking-widest text-slate-700 uppercase">${title}</h2>
            <p class="text-sm font-bold text-slate-600 mt-2">Periode: ${periodLabel}</p>
            <p class="text-xs font-semibold text-slate-400 mt-1">Dicetak: ${today}</p>
        </div>
    </div>
    <div class="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-6 text-[11px] font-bold text-amber-700 leading-relaxed">
        <i class="fa-solid fa-triangle-exclamation mr-1"></i> Dokumen ini adalah rekap internal sebagai alat bantu — bukan dokumen resmi DJP. Mohon validasi ke akuntan/konsultan pajak sebelum digunakan untuk pelaporan SPT resmi.
    </div>`;

    let bodyHtml = '';

    if (reportType === 'summary') {
        const t = window.getTaxPeriodTotals();
        const dpp = t.omset - t.disc;
        const rows = Array.from({length:12}, (_,i) => i+1).map(m => {
            const d = gTaxMonthly[m];
            return `<tr class="border-b border-slate-200"><td class="py-2.5 px-3 font-bold text-slate-700">${MONTH_NAMES[m-1]} ${taxYear}</td><td class="py-2.5 px-3 text-right font-bold text-slate-700">${fCur(d.omset)}</td><td class="py-2.5 px-3 text-right font-bold text-slate-900">${fCur(d.ppn)}</td><td class="py-2.5 px-3 text-right font-bold text-slate-500">${d.orderCount}</td></tr>`;
        }).join('');
        bodyHtml = `
        <div class="grid grid-cols-4 gap-4 mb-8">
            <div class="bg-slate-50 border border-slate-200 rounded-xl p-4"><p class="text-[9px] font-bold text-slate-400 uppercase mb-1">Omset Bruto</p><p class="font-bold text-slate-900">${fCur(t.omset)}</p></div>
            <div class="bg-slate-50 border border-slate-200 rounded-xl p-4"><p class="text-[9px] font-bold text-slate-400 uppercase mb-1">Diskon</p><p class="font-bold text-rose-600">${fCur(t.disc)}</p></div>
            <div class="bg-slate-50 border border-slate-200 rounded-xl p-4"><p class="text-[9px] font-bold text-slate-400 uppercase mb-1">DPP</p><p class="font-bold text-slate-900">${fCur(dpp)}</p></div>
            <div class="bg-amber-50 border border-amber-200 rounded-xl p-4"><p class="text-[9px] font-bold text-amber-600 uppercase mb-1">PPN Keluaran</p><p class="font-bold text-amber-700">${fCur(t.ppn)}</p></div>
        </div>
        <table class="w-full text-xs"><thead><tr class="bg-slate-100 text-left"><th class="py-2.5 px-3 font-bold text-slate-500 uppercase text-[9px]">Bulan</th><th class="py-2.5 px-3 font-bold text-slate-500 uppercase text-[9px] text-right">Omset</th><th class="py-2.5 px-3 font-bold text-slate-500 uppercase text-[9px] text-right">PPN Keluaran</th><th class="py-2.5 px-3 font-bold text-slate-500 uppercase text-[9px] text-right">Pesanan</th></tr></thead><tbody>${rows}</tbody></table>`;
    } else if (reportType === 'income') {
        const t = window.getTaxPeriodTotals();
        const labaKotor = t.omset - t.disc - t.hpp;
        const totalExpense = window.getTaxPeriodExpenses();
        const labaBersih = labaKotor - totalExpense;
        const scheme = ts.taxScheme || 'umkm_final';
        let taxRate, taxBase, taxLabel;
        if (scheme === 'umkm_final') { taxRate = 0.5; taxBase = t.omset; taxLabel = 'PPh Final UMKM (0,5% × Omset)'; }
        else if (scheme === 'badan_normal') { taxRate = 22; taxBase = Math.max(0, labaBersih); taxLabel = 'PPh Badan (22% × Laba Bersih)'; }
        else { taxRate = parseFloat(ts.customTaxRate) || 0; taxBase = Math.max(0, labaBersih); taxLabel = `PPh Custom (${taxRate}% × Laba Bersih)`; }
        const estimasiPajak = taxBase * (taxRate / 100);
        const labaSetelahPajak = labaBersih - estimasiPajak;
        const row = (label, val, bold, color) => `<div class="flex justify-between py-2 ${bold?'border-t-2 border-slate-800 mt-1 pt-3':'border-b border-slate-100'}"><span class="${bold?'font-bold text-slate-900':'font-bold text-slate-600'}">${label}</span><span class="font-bold ${color||'text-slate-900'}">${val}</span></div>`;
        bodyHtml = `<div class="max-w-xl">
            ${row('Omset Bruto', fCur(t.omset))}
            ${row('(−) Diskon Produk', '-'+fCur(t.disc), false, 'text-rose-600')}
            ${row('(−) HPP', '-'+fCur(t.hpp), false, 'text-rose-600')}
            ${row('Laba Kotor', fCur(labaKotor), true, 'text-emerald-600')}
            ${row('(−) Biaya Operasional', '-'+fCur(totalExpense), false, 'text-rose-600')}
            ${row('Laba Bersih Sebelum Pajak', fCur(labaBersih), true)}
            ${row('(−) Estimasi '+taxLabel, '-'+fCur(estimasiPajak), false, 'text-rose-600')}
            ${row('Laba Bersih Setelah Pajak (Estimasi)', fCur(labaSetelahPajak), true)}
        </div>`;
    } else if (reportType === 'balance') {
        const st = window.computeInventoryStats();
        const bs = ts.balanceSheet || { kas:0, piutang:0, hutang:0 };
        const totalAset = (parseFloat(bs.kas)||0) + (parseFloat(bs.piutang)||0) + st.assetHpp;
        const totalKewajiban = parseFloat(bs.hutang) || 0;
        const modalDanLaba = totalAset - totalKewajiban;
        bodyHtml = `
        <div class="grid grid-cols-2 gap-8">
            <div>
                <h3 class="font-bold text-slate-800 uppercase text-xs tracking-widest mb-3 pb-2 border-b-2 border-slate-800">Aset</h3>
                <div class="flex justify-between py-2 border-b border-slate-100"><span class="font-bold text-slate-600">Kas &amp; Bank</span><span class="font-bold text-slate-900">${fCur(bs.kas||0)}</span></div>
                <div class="flex justify-between py-2 border-b border-slate-100"><span class="font-bold text-slate-600">Piutang Usaha</span><span class="font-bold text-slate-900">${fCur(bs.piutang||0)}</span></div>
                <div class="flex justify-between py-2 border-b border-slate-100"><span class="font-bold text-slate-600">Persediaan Barang</span><span class="font-bold text-slate-900">${fCur(st.assetHpp)}</span></div>
                <div class="flex justify-between py-2.5 border-t-2 border-slate-800 mt-1"><span class="font-bold text-slate-900">Total Aset</span><span class="font-bold text-slate-900">${fCur(totalAset)}</span></div>
            </div>
            <div>
                <h3 class="font-bold text-slate-800 uppercase text-xs tracking-widest mb-3 pb-2 border-b-2 border-slate-800">Kewajiban &amp; Modal</h3>
                <div class="flex justify-between py-2 border-b border-slate-100"><span class="font-bold text-slate-600">Hutang Usaha</span><span class="font-bold text-slate-900">${fCur(totalKewajiban)}</span></div>
                <div class="flex justify-between py-2 border-b border-slate-100"><span class="font-bold text-slate-600">Modal &amp; Laba Ditahan</span><span class="font-bold text-slate-900">${fCur(modalDanLaba)}</span></div>
                <div class="flex justify-between py-2.5 border-t-2 border-slate-800 mt-1"><span class="font-bold text-slate-900">Total Kewajiban + Modal</span><span class="font-bold text-slate-900">${fCur(totalKewajiban + modalDanLaba)}</span></div>
            </div>
        </div>`;
    }

    setIn('doc-modal-title', 'Preview ' + title);
    setH('doc-paper-content', headerHtml + bodyHtml);
    const mDoc = el('doc-preview-modal');
    if (mDoc && mDoc.classList.contains('hidden')) pushModalHistory('docPreview');
    show('doc-preview-modal');
    setTimeout(() => {
        el('doc-preview-modal').classList.remove('opacity-0');
        el('doc-preview-modal-box').classList.remove('scale-95');
        fitDocPreview();
    }, 10);
};

window.oAAdd = () => { oAEd(cTab, null); };
window.oAEd = (t, id) => {
    eId = id; let d = id ? appData[t].find(x=>x.id===id) : null;
    setIn('admin-modal-title', id ? 'Edit Data' : 'Tambah Data');
    let f = aF[t]||[], h = '';
    
    if(t==='products'){
        tVars = d&&d.variants ? JSON.parse(JSON.stringify(d.variants)) : [];
        tWhol = d&&d.wholesale ? JSON.parse(JSON.stringify(d.wholesale)) : [];
    }
    
    // REDESIGN: Kelompokkan field produk dalam grid 2-kolom di lg
    const FULL_WIDTH_TYPES = ['textarea','richtext','variants_builder','wholesale_builder'];
    const FULL_WIDTH_KEYS  = ['img','desc','name','isActive','tag','poTime','video'];
    const isFullWidth = k => FULL_WIDTH_TYPES.includes(k.type) || FULL_WIDTH_KEYS.includes(k.key);

    f.forEach(k => {
        let v = d ? (k.type === 'number' && d[k.key] !== undefined ? d[k.key] : (d[k.key]||'')) : '';
        const spanClass = isFullWidth(k) ? 'lg:col-span-2' : '';
        h += `<div class="flex flex-col gap-1.5 ${spanClass}"><label class="block text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest flex items-center gap-1.5">${k.label}</label>`;
        if(k.type === 'textarea') {
            h += `<textarea autocomplete='off' id="af-${k.key}" class="admin-input resize-none shadow-sm bg-slate-50 dark:bg-slate-900" rows="3">${esc(v)}</textarea>`;
        } else if(k.type === 'select') {
            h += `<div class="relative"><select id="af-${k.key}" class="admin-input shadow-sm cursor-pointer appearance-none pr-10 bg-slate-50 dark:bg-slate-900" onchange="if(window.rVarsB) window.rVarsB();">`;
            k.options.forEach(o => { h += `<option value="${o.val}" ${v==o.val||(v==='true'&&o.val==='true')||(v==='false'&&o.val==='false')?'selected':''} class="font-bold">${o.text}</option>`; });
            h += `</select><i class="fa-solid fa-chevron-down absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none text-[10px]"></i></div>`;
        } else if(k.type === 'dynamic_select_category') {
            h += `<div class="relative"><select id="af-${k.key}" class="admin-input shadow-sm cursor-pointer appearance-none pr-10 bg-slate-50 dark:bg-slate-900" onchange="if(window.rVarsB) window.rVarsB();"><option value="" class="font-bold">Pilih Kategori</option>`;
            appData.categories.forEach(c => { h += `<option value="${esc(c.name)}" ${v===c.name?'selected':''} class="font-bold">${esc(c.name)}</option>`; });
            h += `</select><i class="fa-solid fa-chevron-down absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none text-[10px]"></i></div>`;
        } else if(k.type === 'dynamic_select_brand') {
            h += `<div class="relative"><select id="af-${k.key}" class="admin-input shadow-sm cursor-pointer appearance-none pr-10 bg-slate-50 dark:bg-slate-900" onchange="if(window.rVarsB) window.rVarsB();"><option value="" class="font-bold">Tanpa Merek</option>`;
            (appData.brands||[]).forEach(c => { h += `<option value="${esc(c.name)}" ${v===c.name?'selected':''} class="font-bold">${esc(c.name)}</option>`; });
            h += `</select><i class="fa-solid fa-chevron-down absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none text-[10px]"></i></div>`;
        } else if(k.type === 'dynamic_select_products') {
            h += `<div class="relative"><select id="af-${k.key}" class="admin-input shadow-sm cursor-pointer appearance-none pr-10 bg-slate-50 dark:bg-slate-900" onchange="if(window.rVarsB) window.rVarsB();"><option value="" class="font-bold text-emerald-600">-- Semua Produk (Tanpa Batasan) --</option>`;
            (appData.products||[]).forEach(p => { h += `<option value="${p.id}" ${v==p.id?'selected':''} class="font-bold">${esc(p.name)}</option>`; });
            h += `</select><i class="fa-solid fa-chevron-down absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none text-[10px]"></i></div>`;
        } else if(k.type === 'variants_builder') {
            h += `<div id="variants-builder-container" class="bg-slate-50/50 dark:bg-slate-900/30 p-4 sm:p-5 md:p-6 lg:p-8 lg:p-6 rounded-[1.5rem] border border-slate-200 dark:border-slate-700 shadow-inner min-h-[60px]"></div>`;
        } else if(k.type === 'wholesale_builder') {
            h += `<div id="wholesale-builder-container" class="bg-slate-50/50 dark:bg-slate-900/30 p-4 sm:p-5 md:p-6 lg:p-8 lg:p-6 rounded-[1.5rem] border border-slate-200 dark:border-slate-700 shadow-inner min-h-[60px]"></div>`;
        } else if(k.key === 'sku') {
            h += `<div class="relative flex items-center"><input autocomplete='off' type="${k.type}" id="af-${k.key}" value="${esc(v)}" class="admin-input shadow-sm bg-slate-50 dark:bg-slate-900 !pr-12" placeholder="Scan atau ketik..." ></i><button type="button" onclick="openCameraScanner('af-${k.key}')" class="absolute right-2 w-9 h-9 flex items-center justify-center text-slate-400 hover:bg-slate-200 hover:text-emerald-500 rounded-xl transition-all" title="Scan Barcode via HP"><i class="fa-solid fa-qrcode text-lg"></i></button></div>`;
        } else if(k.key === 'img') {
            h += `<div class="flex gap-3"><input autocomplete='off' type="text" id="af-${k.key}" value="${esc(v)}" class="admin-input shadow-sm flex-1 bg-slate-50 dark:bg-slate-900" placeholder="URL Gambar" ></i><label class="bg-emerald-50 dark:bg-emerald-900/30 border border-emerald-200 dark:border-emerald-800 text-emerald-600 dark:text-emerald-400 font-bold rounded-xl px-5 flex items-center justify-center cursor-pointer hover:bg-emerald-100 transition-all shrink-0 active:scale-95 shadow-sm" title="Upload dari Galeri"><i class="fa-solid fa-cloud-arrow-up sm:mr-2"></i><span class="hidden sm:inline">Upload</span><input type="file" accept="image/*" class="hidden" onchange="handleImageUpload(this, 'af-${k.key}')" ></i></label><label class="bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 text-blue-600 dark:text-blue-400 font-bold rounded-xl px-5 flex items-center justify-center cursor-pointer hover:bg-blue-100 transition-all shrink-0 active:scale-95 shadow-sm" title="Ambil Foto Langsung"><i class="fa-solid fa-camera"></i><input type="file" accept="image/*" capture="environment" class="hidden" onchange="handleImageUpload(this, 'af-${k.key}')" ></i></label></div>`;
        } else if(k.type === 'richtext') {
            h += `
            <div class="border border-slate-200 dark:border-slate-700 rounded-xl overflow-hidden shadow-sm bg-white dark:bg-slate-900">
                <div class="bg-slate-100 dark:bg-slate-800 p-2 border-b border-slate-200 dark:border-slate-700 flex gap-1 flex-wrap items-center">
                    <button type="button" onclick="document.execCommand('bold',false,null)" class="w-8 h-8 rounded hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 font-bold transition-colors" title="Cetak Tebal">B</button>
                    <button type="button" onclick="document.execCommand('insertOrderedList',false,null)" class="w-8 h-8 rounded hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition-colors" title="Daftar Angka"><i class="fa-solid fa-list-ol"></i></button>
                    <button type="button" onclick="document.execCommand('insertUnorderedList',false,null)" class="w-8 h-8 rounded hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition-colors" title="Daftar Titik"><i class="fa-solid fa-list-ul"></i></button>
                    <div class="w-px h-5 bg-slate-300 dark:bg-slate-600 mx-1"></div>
                    <button type="button" onclick="document.execCommand('justifyLeft',false,null)" class="w-8 h-8 rounded hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition-colors" title="Rata Kiri"><i class="fa-solid fa-align-left"></i></button>
                    <button type="button" onclick="document.execCommand('justifyCenter',false,null)" class="w-8 h-8 rounded hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition-colors" title="Rata Tengah"><i class="fa-solid fa-align-center"></i></button>
                    <button type="button" onclick="document.execCommand('justifyRight',false,null)" class="w-8 h-8 rounded hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition-colors" title="Rata Kanan"><i class="fa-solid fa-align-right"></i></button>
                    <div class="w-px h-5 bg-slate-300 dark:bg-slate-600 mx-1"></div>
                    <label class="w-8 h-8 rounded hover:bg-emerald-100 dark:hover:bg-emerald-900/30 flex items-center justify-center cursor-pointer text-emerald-600 transition-colors" title="Upload & Sisipkan Gambar"><i class="fa-solid fa-image"></i>
                        <input type="file" accept="image/*" class="hidden" onchange="handleRTEditorImage(this, 'af-${k.key}-editor')" ></i>
                    </label>
                </div>
                <div id="af-${k.key}-editor" contenteditable="true" class="p-4 min-h-[150px] max-h-[350px] overflow-y-auto outline-none text-sm text-slate-800 dark:text-slate-200 leading-relaxed [&_ol]:list-decimal [&_ol]:pl-5 [&_ul]:list-disc [&_ul]:pl-5 [&_b]:font-bold [&_strong]:font-bold [&_img]:max-w-full [&_img]:rounded-xl [&_img]:my-2">
                    ${v}
                </div>
            </div>`;
        } else {
            h += `<input autocomplete='off' type="${k.type}" id="af-${k.key}" value="${esc(v)}" class="admin-input shadow-sm bg-slate-50 dark:bg-slate-900 transition-all" 
    ${k.key==='price'?'min="0" step="1" placeholder="0"':''} 
    ${k.key==='priceNormal'?'min="0" step="1" placeholder="0 (kosong = tidak ada coretan)"':''} 
    ${k.key==='hpp'?'min="0" step="1" placeholder="0"':''} 
    ${k.key==='stock'?'min="0" step="0.01" placeholder="0"':''}
></i>`;
        }
        h += `</div>`;
    });
    // REDESIGN: bungkus semua field dalam grid 2-kolom responsive
    h = `<div class="grid grid-cols-1 lg:grid-cols-2 gap-x-5 gap-y-5 items-start">${h}</div>`;
    
    setH('admin-modal-form', h);
    if(t==='products') { rVarsB(); rWholB(); }
    
    const mAd = el('admin-modal');
    if (mAd && mAd.classList.contains('hidden')) pushModalHistory('admin');
    show('admin-modal');
    setTimeout(() => { el('admin-modal').classList.remove('opacity-0'); el('admin-modal-box').classList.remove('scale-95'); }, 10);
};

window.rVarsB = () => {
    const catEl = document.getElementById('af-category');
    const isCatCategory = catEl ? /\bcat\b/i.test(catEl.value) : false;
    let h = `<div class="space-y-5 mb-5">${tVars.map((v,i) => {
        let isAct = v.isActive !== false && v.isActive !== 'false';
        return `
        <div class="bg-slate-50 dark:bg-slate-900/50 p-5 sm:p-6 md:p-7 lg:p-8 rounded-[1.5rem] border border-slate-200 dark:border-slate-700 shadow-sm relative transition-all duration-300 hover:border-emerald-300 dark:hover:border-emerald-600 hover:shadow-md">
            
            <!-- Header varian: nomor + tombol hapus selalu terlihat -->
            <div class="flex items-center justify-between mb-5 pb-4 border-b border-slate-200 dark:border-slate-700">
                <div class="flex items-center gap-2.5">
                    <div class="w-7 h-7 rounded-xl bg-emerald-500 text-white text-[11px] font-bold flex items-center justify-center shadow-sm">${i+1}</div>
                    <span class="text-xs font-bold text-slate-700 dark:text-slate-200 uppercase tracking-widest">${v.name || 'Varian Baru'}</span>
                </div>
                <div class="flex items-center gap-2">
                    <button type="button" onclick="exportVariantToColorDB(${i})" class="w-8 h-8 rounded-xl bg-pink-50 border border-pink-200 text-pink-500 hover:bg-pink-500 hover:text-white dark:bg-pink-900/30 dark:border-pink-800 transition-all flex items-center justify-center shadow-sm active:scale-95" title="Simpan ke Database Warna"><i class="fa-solid fa-database text-xs"></i></button>
                    <button type="button" onclick="rmVar(${i})" class="w-8 h-8 rounded-xl bg-rose-50 border border-rose-200 text-rose-500 hover:bg-rose-500 hover:text-white dark:bg-rose-900/30 dark:border-rose-800 transition-all flex items-center justify-center shadow-sm active:scale-95" title="Hapus Varian"><i class="fa-solid fa-trash text-xs"></i></button>
                </div>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 lg:gap-7">
                <div>
                    <label class="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-widest">Nama Varian (Warna/Ukuran)</label>
                    <input autocomplete='off' placeholder="Cth: Hijau Tosca" class="admin-input !text-sm !py-3.5 bg-white dark:bg-slate-800 shadow-sm" value="${esc(v.name)}" onchange="uVar(${i},'name',this.value)"></i>
                </div>
                <div>
                    <label class="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-widest">Satuan / Unit</label>
                    <input autocomplete='off' placeholder="Cth: Pcs / Liter" class="admin-input !text-sm !py-3.5 bg-white dark:bg-slate-800 shadow-sm" value="${esc(v.unit||'')}" onchange="uVar(${i},'unit',this.value)"></i>
                </div>
                <div>
                    <label class="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-widest">Harga Promo / Jual (Rp)</label>
                    <input autocomplete='off' placeholder="0" type="number" class="admin-input !text-sm !py-3.5 bg-white dark:bg-slate-800 shadow-sm" value="${v.price}" onchange="uVar(${i},'price',this.value)"></i>
                </div>
                <div>
                    <label class="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-widest">Harga Coret (Opsional)</label>
                    <input autocomplete='off' placeholder="0" type="number" class="admin-input !text-sm !py-3.5 bg-white dark:bg-slate-800 shadow-sm" value="${v.priceNormal||''}" onchange="uVar(${i},'priceNormal',this.value)"></i>
                </div>
                <div>
                    <label class="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-widest">Kode Warna (Khusus Cat)</label>
                    <div class="flex gap-3 items-center bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-2 shadow-sm">
                        <div class="relative shrink-0">
                            <input type="color" class="w-11 h-11 rounded-xl cursor-pointer border-2 border-slate-200 dark:border-slate-600 p-0.5 bg-white dark:bg-slate-700 shadow-inner" value="${v.colorCode || '#ffffff'}" 
                                onchange="uVar(${i},'colorCode',this.value); document.getElementById('var-hex-${i}').value = this.value;" 
                                title="Klik untuk pilih warna"></i>
                            <i class="fa-solid fa-eye-dropper absolute -bottom-1 -right-1 text-[9px] bg-white dark:bg-slate-700 text-slate-400 w-4 h-4 rounded-full flex items-center justify-center border border-slate-200 dark:border-slate-600 pointer-events-none"></i>
                        </div>
                        <div class="flex-1 min-w-0">
                            <p class="text-[9px] font-bold text-slate-400 mb-0.5 uppercase tracking-widest">Kode HEX</p>
                            <input autocomplete='off' id="var-hex-${i}" placeholder="#RRGGBB (opsional)" class="w-full bg-transparent text-sm font-mono font-bold focus:outline-none dark:text-white uppercase" value="${esc(v.colorCode||'')}" onchange="uVar(${i},'colorCode',this.value)"></i>
                        </div>
                        ${v.colorCode ? `<div class="w-6 h-6 rounded-full border-2 border-white shadow-md shrink-0" style="background:${esc(v.colorCode)}"></div>` : ''}
                    </div>
                </div>
                
                ${!isCatCategory ? `
                <div>
                    <label class="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-widest">Gambar Khusus Varian</label>
                    <div class="flex gap-2.5 items-center">
                        ${v.img ? `<img src="${esc(v.img)}" class="w-11 h-11 rounded-xl object-cover border-2 border-slate-200 dark:border-slate-600 shrink-0 shadow-sm" onerror="this.style.display='none'" loading="lazy"></i>` : ''}
                        <input autocomplete='off' id="var-img-${i}" placeholder="URL Gambar Varian" class="admin-input !text-sm flex-1 bg-white dark:bg-slate-800 shadow-sm" value="${esc(v.img||'')}" onchange="uVar(${i},'img',fixD(this.value))"></i>
                        <label class="bg-emerald-50 dark:bg-emerald-900/30 border border-emerald-200 dark:border-emerald-800 text-emerald-600 dark:text-emerald-400 rounded-xl w-11 h-11 flex items-center justify-center cursor-pointer hover:bg-emerald-100 transition-all shrink-0 active:scale-95 shadow-sm" title="Upload dari Galeri"><i class="fa-solid fa-upload text-sm"></i><input type="file" accept="image/*" class="hidden" onchange="handleImageUpload(this, 'var-img-${i}')" ></i></label>
                        <label class="bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 text-blue-600 dark:text-blue-400 rounded-xl w-11 h-11 flex items-center justify-center cursor-pointer hover:bg-blue-100 transition-all shrink-0 active:scale-95 shadow-sm" title="Ambil Foto Langsung"><i class="fa-solid fa-camera text-sm"></i><input type="file" accept="image/*" capture="environment" class="hidden" onchange="handleImageUpload(this, 'var-img-${i}')" ></i></label>
                    </div>
                </div>
                ` : ''}

                <div>
                    <label class="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-widest">SKU / Barcode</label>
                    <div class="relative h-[48px]">
                        <input autocomplete='off' id="var-sku-${i}" placeholder="Auto (Bisa Kosong)" class="admin-input !text-sm h-full bg-white dark:bg-slate-800 shadow-sm !pr-12" value="${esc(v.sku||'')}" onchange="uVar(${i},'sku',this.value)"></i>
                        <button type="button" onclick="openCameraScanner('var-sku-${i}')" class="absolute right-1.5 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center text-slate-400 hover:text-emerald-500 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-xl transition-all"><i class="fa-solid fa-qrcode text-lg"></i></button>
                    </div>
                </div>
                <div>
                    <label class="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-widest">Status Stok Varian</label>
                    <button type="button" onclick="tVars[${i}].isActive = ${!isAct}; rVarsB();" class="w-full py-3.5 px-4 rounded-xl text-[13px] font-bold uppercase tracking-wider transition-all shadow-sm flex items-center justify-center gap-2.5 border-2 active:scale-95 ${isAct ? 'bg-emerald-500 text-white border-emerald-600 hover:bg-emerald-600 shadow-emerald-500/30 shadow-md' : 'bg-slate-100 text-rose-500 border-rose-200 hover:bg-rose-50 dark:bg-slate-800 dark:border-rose-800'}">
                        ${isAct ? '<i class="fa-solid fa-circle-check text-base"></i> STOK TERSEDIA' : '<i class="fa-solid fa-ban text-base"></i> STOK HABIS'}
                    </button>
                </div>
                <div>
                    <label class="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-widest">Harga Modal / HPP (Rp)</label>
                    <input autocomplete='off' placeholder="0" type="number" class="admin-input !text-sm !py-3.5 bg-white dark:bg-slate-800 shadow-sm" value="${v.hpp||0}" onchange="uVar(${i},'hpp',this.value)"></i>
                </div>
                <div>
                    <label class="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-widest">Stok Varian (Qty)</label>
                    <input autocomplete='off' placeholder="0" type="number" class="admin-input !text-sm !py-3.5 bg-white dark:bg-slate-800 shadow-sm" value="${v.stock !== undefined ? v.stock : ''}" onchange="uVar(${i},'stock',this.value)"></i>
                </div>
                <div>
                    <label class="block text-[11px] font-bold text-violet-500 mb-2 uppercase tracking-widest"><i class="fa-solid fa-star mr-1"></i>Poin Member (per unit terjual)</label>
                    <input autocomplete='off' placeholder="0" type="number" min="0" class="admin-input !text-sm !py-3.5 bg-white dark:bg-slate-800 shadow-sm" value="${v.poin||0}" onchange="uVar(${i},'poin',this.value)"></i>
                </div>
            </div>
        </div>`;
    }).join('')}</div>
    <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-4">
        <button type="button" onclick="openColorImportModal()" class="py-3 text-pink-600 font-bold rounded-2xl text-sm border-2 border-pink-200 bg-pink-50 hover:bg-pink-100 dark:bg-pink-900/30 dark:border-pink-800 transition-all flex items-center justify-center gap-2 active:scale-95 shadow-sm"><i class="fa-solid fa-swatchbook"></i> Impor dari DB Warna</button>
        <button type="button" onclick="exportAllVariantsToColorDB()" class="py-3 text-violet-600 font-bold rounded-2xl text-sm border-2 border-violet-200 bg-violet-50 hover:bg-violet-100 dark:bg-violet-900/30 dark:border-violet-800 transition-all flex items-center justify-center gap-2 active:scale-95 shadow-sm"><i class="fa-solid fa-upload"></i> Ekspor Semua ke DB</button>
        <button type="button" onclick="addVar()" class="py-3 text-white font-bold rounded-2xl text-sm border border-[rgba(var(--color-primary-rgb),0.3)] transition-all flex items-center justify-center gap-2 active:scale-95 shadow-glow" style="background: linear-gradient(135deg, var(--color-primary), var(--color-primary-dark))"><i class="fa-solid fa-plus-circle text-base"></i> Tambah Varian Baru</button>
    </div>`;
    setH('variants-builder-container', h);
};

window.addVar = () => { tVars.push({name:'', price:0, priceNormal:0, hpp:0, stock:0, sku:'', img:'', unit:'', colorCode:'', poin:0, isActive: true}); rVarsB(); };
window.rmVar = i => { tVars.splice(i,1); rVarsB(); };
window.uVar = (i,k,v) => { tVars[i][k] = (k==='price' || k==='priceNormal' || k==='hpp' || k==='stock' || k==='poin') ? parseFloat(v)||0 : (k==='img' ? fixD(v) : v); };

// FITUR BARU: Impor dari Database Warna
window.openColorImportModal = () => {
    let colors = appData.colors || [];
    if (!colors.length) {
        showToast("Database Warna masih kosong!");
        return;
    }
    // Kelompokkan berdasarkan katalog
    let grouped = {};
    colors.forEach(c => {
        let cat = c.catalog || 'Tanpa Katalog';
        if (!grouped[cat]) grouped[cat] = [];
        grouped[cat].push(c);
    });
    
    let html = `<div class="p-6">
        <div class="flex justify-between items-center mb-6">
            <h3 class="text-lg font-bold text-slate-800 dark:text-white flex items-center gap-2"><i class="fa-solid fa-swatchbook text-pink-500"></i> Pilih Warna</h3>
            <button type="button" onclick="_closeColorFloatModal()" class="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-500 flex items-center justify-center transition-all"><i class="fa-solid fa-xmark"></i></button>
        </div>
        <div class="space-y-6 max-h-[60vh] overflow-y-auto pr-2">
    `;
    
    for (let cat in grouped) {
        html += `<div>
            <h4 class="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3 pb-2 border-b border-slate-100 dark:border-slate-800">${esc(cat)}</h4>
            <div class="grid grid-cols-2 sm:grid-cols-3 gap-3">
                ${grouped[cat].map(c => `
                    <button type="button" onclick="importColorToVariant('${esc(c.name)}', '${esc(c.hex||'')}')" class="flex items-center gap-3 p-3 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-pink-300 dark:hover:border-pink-600 hover:-translate-y-1 hover:shadow-md transition-all text-left bg-white dark:bg-slate-800">
                        <div class="w-8 h-8 rounded-full border-2 border-slate-100 dark:border-slate-600 shadow-sm shrink-0" style="background-color: ${esc(c.hex||'transparent')}"></div>
                        <span class="text-xs font-bold text-slate-700 dark:text-slate-200 line-clamp-2">${esc(c.name)}</span>
                    </button>
                `).join('')}
            </div>
        </div>`;
    }
    html += `</div></div>`;
    
    _openColorFloatModal(html);
};

// FIX ROOT CAUSE: Helper modal dinamis untuk semua fitur warna.
// Sebelumnya semua fungsi warna mencari 'confirm-modal' dan 'confirm-box'
// yang TIDAK ADA di DOM (yang ada hanya 'custom-confirm-modal'), sehingga
// cm selalu null dan fungsi langsung return tanpa melakukan apa-apa.
// Sekarang kita buat modal sendiri yang di-inject langsung ke body.
window._openColorFloatModal = (innerHtml) => {
    _closeColorFloatModal(); // tutup yang lama jika ada
    const overlay = document.createElement('div');
    overlay.id = 'color-float-modal';
    overlay.className = 'fixed inset-0 z-[200] flex items-center justify-center bg-slate-900/80 p-4 opacity-0 transition-opacity duration-300';
    overlay.onclick = (e) => { if (e.target === overlay) _closeColorFloatModal(); };
    const box = document.createElement('div');
    box.id = 'color-float-box';
    box.className = 'relative w-full max-w-sm scale-95 transform rounded-[2rem] border border-slate-200 bg-white shadow-2xl transition-all duration-300 dark:border-slate-700 dark:bg-slate-800 overflow-y-auto max-h-[90vh]';
    box.innerHTML = innerHtml;
    overlay.appendChild(box);
    document.body.appendChild(overlay);
    requestAnimationFrame(() => {
        overlay.classList.remove('opacity-0');
        box.classList.remove('scale-95');
    });
};

window._closeColorFloatModal = () => {
    const overlay = document.getElementById('color-float-modal');
    if (!overlay) return;
    const box = document.getElementById('color-float-box');
    overlay.classList.add('opacity-0');
    if (box) box.classList.add('scale-95');
    setTimeout(() => { if (overlay.parentNode) overlay.remove(); }, 300);
};

window.importColorToVariant = (name, hex) => {
    tVars.push({
        name: name,
        price: 0, priceNormal: 0, hpp: 0, stock: 0, sku: '', img: '', unit: '',
        colorCode: hex || '', poin: 0, isActive: true
    });
    rVarsB();
    _closeColorFloatModal();
    showToast("Warna ditambahkan!");
};

// FITUR BARU: Ekspor varian (per-item) ke Database Warna
window.exportVariantToColorDB = async (idx) => {
    const v = tVars[idx];
    if (!v || !v.name.trim()) { showToast('Nama varian kosong!'); return; }
    const existing = (appData.colors||[]).find(c => c.name.toLowerCase() === v.name.trim().toLowerCase());
    if (existing) { showToast(`"${v.name}" sudah ada di Database Warna.`); return; }
    
    // Prompt untuk pilih katalog
    const catalogs = [...new Set((appData.colors||[]).map(c => c.catalog).filter(Boolean))];
    let catalogOpts = catalogs.map(cat => `<option value="${esc(cat)}">${esc(cat)}</option>`).join('');
    
    _openColorFloatModal(`
        <div class="p-6">
            <h3 class="text-lg font-bold text-slate-800 dark:text-white mb-5 flex items-center gap-2"><i class="fa-solid fa-database text-pink-500"></i> Simpan ke Database Warna</h3>
            <div class="space-y-4">
                <div><label class="block text-[11px] font-bold text-slate-500 uppercase tracking-widest mb-1.5">Nama Warna</label>
                    <input id="exp-name" class="admin-input" value="${esc(v.name)}"></div>
                <div><label class="block text-[11px] font-bold text-slate-500 uppercase tracking-widest mb-1.5">Kode Warna (Hex)</label>
                    <div class="flex gap-3 items-center">
                        <input type="color" id="exp-hex-picker" value="${esc(v.colorCode||'#ffffff')}" class="w-10 h-10 rounded-xl cursor-pointer" onchange="document.getElementById('exp-hex').value=this.value">
                        <input id="exp-hex" class="admin-input flex-1" placeholder="#FFFFFF (opsional)" value="${esc(v.colorCode||'')}">
                    </div></div>
                <div><label class="block text-[11px] font-bold text-slate-500 uppercase tracking-widest mb-1.5">Katalog / Merek</label>
                    <input id="exp-catalog" list="exp-catalog-list" class="admin-input" placeholder="Cth: No Drop, Boyo, dll">
                    <datalist id="exp-catalog-list">${catalogOpts}</datalist>
                </div>
            </div>
            <div class="flex gap-3 mt-6">
                <button onclick="_closeColorFloatModal()" class="flex-1 py-3 rounded-xl border border-slate-200 font-bold text-slate-500 text-sm hover:bg-slate-50 transition-all">Batal</button>
                <button onclick="confirmExportVariantToColorDB()" class="flex-1 py-3 rounded-xl bg-pink-500 text-white font-bold text-sm hover:bg-pink-600 transition-all active:scale-95"><i class="fa-solid fa-floppy-disk mr-2"></i>Simpan</button>
            </div>
        </div>`);
};

window.confirmExportVariantToColorDB = async () => {
    const name = (document.getElementById('exp-name')?.value || '').trim();
    const hex  = (document.getElementById('exp-hex')?.value  || '').trim();
    const catalog = (document.getElementById('exp-catalog')?.value || '').trim();
    if (!name) { showToast('Nama warna wajib diisi!'); return; }
    const newColor = { id: Date.now(), name, hex, catalog };
    if (!appData.colors) appData.colors = [];
    appData.colors.push(newColor);
    _closeColorFloatModal();
    sLoad('Menyimpan ke Database Warna...');
    try {
        await saveApp(['colors']);
        showToast(`"${name}" berhasil disimpan ke Database Warna! 🎨`);
    } catch(e) { showToast('Gagal menyimpan!'); }
    finally { hLoad(); }
};

// FITUR BARU: Ekspor SEMUA varian yang punya nama ke Database Warna (skip duplikat)
window.exportAllVariantsToColorDB = async () => {
    const toExport = tVars.filter(v => v.name.trim());
    if (!toExport.length) { showToast('Tidak ada varian untuk diekspor!'); return; }
    if (!appData.colors) appData.colors = [];
    const existingNames = new Set(appData.colors.map(c => c.name.toLowerCase()));
    
    const catalogs = [...new Set(appData.colors.map(c => c.catalog).filter(Boolean))];
    let catalogOpts = catalogs.map(cat => `<option value="${esc(cat)}">${esc(cat)}</option>`).join('');
    
    _openColorFloatModal(`
        <div class="p-6">
            <h3 class="text-lg font-bold text-slate-800 dark:text-white mb-2 flex items-center gap-2"><i class="fa-solid fa-upload text-violet-500"></i> Ekspor Semua Varian</h3>
            <p class="text-xs text-slate-500 mb-5">${toExport.length} varian akan diekspor ke Database Warna. Nama yang sudah ada di database akan dilewati.</p>
            <div><label class="block text-[11px] font-bold text-slate-500 uppercase tracking-widest mb-1.5">Katalog / Merek (berlaku untuk semua)</label>
                <input id="expall-catalog" list="expall-catalog-list" class="admin-input" placeholder="Cth: No Drop, Boyo, dll">
                <datalist id="expall-catalog-list">${catalogOpts}</datalist>
            </div>
            <div class="flex gap-3 mt-6">
                <button onclick="_closeColorFloatModal()" class="flex-1 py-3 rounded-xl border border-slate-200 font-bold text-slate-500 text-sm hover:bg-slate-50 transition-all">Batal</button>
                <button onclick="confirmExportAllVariants()" class="flex-1 py-3 rounded-xl bg-violet-500 text-white font-bold text-sm hover:bg-violet-600 transition-all active:scale-95"><i class="fa-solid fa-upload mr-2"></i>Ekspor</button>
            </div>
        </div>`);
};

window.confirmExportAllVariants = async () => {
    const catalog = (document.getElementById('expall-catalog')?.value || '').trim();
    const toExport = tVars.filter(v => v.name.trim());
    if (!appData.colors) appData.colors = [];
    const existingNames = new Set(appData.colors.map(c => c.name.toLowerCase()));
    let added = 0;
    toExport.forEach(v => {
        if (!existingNames.has(v.name.trim().toLowerCase())) {
            appData.colors.push({ id: Date.now() + added, name: v.name.trim(), hex: v.colorCode||'', catalog });
            existingNames.add(v.name.trim().toLowerCase());
            added++;
        }
    });
    _closeColorFloatModal();
    if (!added) { showToast('Semua varian sudah ada di Database Warna!'); return; }
    sLoad('Menyimpan...');
    try {
        await saveApp(['colors']);
        showToast(`${added} warna berhasil diekspor ke Database Warna! 🎨`);
    } catch(e) { showToast('Gagal menyimpan!'); }
    finally { hLoad(); }
};

// FITUR BARU: Panel impor warna dari semua varian produk yang ada (di tab Database Warna)
window.openImportFromProductsModal = async () => {
    const allVariants = [];
    (appData.products||[]).forEach(p => {
        (p.variants||[]).forEach(v => {
            if (v.name && v.name.trim()) {
                allVariants.push({ varName: v.name.trim(), hex: v.colorCode||'', prodName: p.name||'' });
            }
        });
    });
    if (!allVariants.length) { showToast('Tidak ada varian produk yang ditemukan!'); return; }
    const existingNames = new Set((appData.colors||[]).map(c => c.name.toLowerCase()));
    const newOnes = allVariants.filter(v => !existingNames.has(v.varName.toLowerCase()));
    
    if (!newOnes.length) { showToast('Semua varian produk sudah ada di Database Warna!'); return; }
    
    const catalogs = [...new Set((appData.colors||[]).map(c => c.catalog).filter(Boolean))];
    let catalogOpts = catalogs.map(cat => `<option value="${esc(cat)}">${esc(cat)}</option>`).join('');
    
    // Simpan newOnes ke variabel window agar tidak perlu di-serialize ke HTML
    window._pendingImportVariants = newOnes;
    
    _openColorFloatModal(`
        <div class="p-6">
            <h3 class="text-lg font-bold text-slate-800 dark:text-white mb-2 flex items-center gap-2"><i class="fa-solid fa-box-archive text-emerald-500"></i> Impor dari Semua Produk</h3>
            <p class="text-xs text-slate-500 mb-4">${newOnes.length} nama varian baru ditemukan (yang sudah ada di database dilewati).</p>
            <div class="max-h-48 overflow-y-auto mb-4 space-y-2">
                ${newOnes.map((v,i) => `
                    <label class="flex items-center gap-3 p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 cursor-pointer hover:border-emerald-300 transition-all">
                        <input type="checkbox" id="imp-chk-${i}" checked class="w-4 h-4 rounded accent-emerald-500">
                        <div class="w-5 h-5 rounded-full border border-slate-200 dark:border-slate-600 shrink-0" style="background-color:${esc(v.hex||'transparent')}"></div>
                        <div class="min-w-0">
                            <p class="text-xs font-bold text-slate-700 dark:text-slate-200 truncate">${esc(v.varName)}</p>
                            <p class="text-[10px] text-slate-400 truncate">dari: ${esc(v.prodName)}</p>
                        </div>
                    </label>
                `).join('')}
            </div>
            <div><label class="block text-[11px] font-bold text-slate-500 uppercase tracking-widest mb-1.5">Katalog / Merek</label>
                <input id="impprod-catalog" list="impprod-cat-list" class="admin-input" placeholder="Cth: No Drop, Boyo, dll (opsional)">
                <datalist id="impprod-cat-list">${catalogOpts}</datalist>
            </div>
            <div class="flex gap-3 mt-5">
                <button onclick="_closeColorFloatModal()" class="flex-1 py-3 rounded-xl border border-slate-200 font-bold text-slate-500 text-sm hover:bg-slate-50 transition-all">Batal</button>
                <button onclick="confirmImportFromProducts()" class="flex-1 py-3 rounded-xl bg-emerald-500 text-white font-bold text-sm hover:bg-emerald-600 transition-all active:scale-95"><i class="fa-solid fa-download mr-2"></i>Impor</button>
            </div>
        </div>`);
};

window.confirmImportFromProducts = async () => {
    // Baca data dari variabel sementara (aman dari karakter khusus)
    const variants = window._pendingImportVariants || [];
    window._pendingImportVariants = null;
    const catalog = (document.getElementById('impprod-catalog')?.value||'').trim();
    if (!appData.colors) appData.colors = [];
    const existingNames = new Set(appData.colors.map(c => c.name.toLowerCase()));
    let added = 0;
    variants.forEach((v, i) => {
        const chk = document.getElementById(`imp-chk-${i}`);
        if (chk && chk.checked && !existingNames.has(v.varName.toLowerCase())) {
            appData.colors.push({ id: Date.now() + added, name: v.varName, hex: v.hex||'', catalog });
            existingNames.add(v.varName.toLowerCase());
            added++;
        }
    });
    _closeColorFloatModal();
    if (!added) { showToast('Tidak ada warna baru yang ditambahkan!'); return; }
    sLoad('Menyimpan...');
    try {
        await saveApp(['colors']);
        showToast(`${added} warna berhasil diimpor ke Database Warna! 🎨`);
        if (typeof cTab !== 'undefined' && cTab === 'colors') rAdmItms('colors');
    } catch(e) { showToast('Gagal menyimpan!'); }
    finally { hLoad(); }
};


// --- RENDER GROSIR (SUPER LEGA 2 KOLOM) ---
window.rWholB = () => {
    let h = `<div class="space-y-4 mb-4">${tWhol.map((w,i) => `
        <div class="bg-slate-50 dark:bg-slate-900/50 p-5 sm:p-6 rounded-[1.5rem] border border-slate-200 dark:border-slate-700 shadow-sm relative group transition-all duration-300 hover:border-amber-300 dark:hover:border-amber-600">
            <button onclick="rmWhol(${i})" class="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-rose-50 border border-rose-200 text-rose-500 hover:bg-rose-500 hover:text-white dark:bg-rose-900/30 dark:border-rose-800 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100 shadow-md z-10"><i class="fa-solid fa-trash text-xs"></i></button>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 lg:gap-7">
                <div>
                    <label class="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-widest">Minimal Pembelian (Qty)</label>
                    <input autocomplete='off' type="number" step="0.01" placeholder="Cth: 12" class="admin-input !text-sm !py-3.5 bg-white dark:bg-slate-800 shadow-sm" value="${w.minQty}" onchange="uWhol(${i},'minQty',this.value)"></i>
                </div>
                <div>
                    <label class="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-widest">Harga Satuan Spesial (Rp)</label>
                    <input autocomplete='off' type="number" placeholder="Cth: 15000" class="admin-input !text-sm !py-3.5 bg-white dark:bg-slate-800 shadow-sm" value="${w.price}" onchange="uWhol(${i},'price',this.value)"></i>
                </div>
            </div>
        </div>`).join('')}</div>
        <button onclick="addWhol()" class="w-full py-4 bg-amber-50 dark:bg-amber-900/20 text-amber-600 font-bold rounded-[1.5rem] text-sm border-2 border-amber-200 border-dashed hover:bg-amber-100 transition-all flex items-center justify-center gap-2 active:scale-95 shadow-sm"><i class="fa-solid fa-tags"></i> Tambah Tingkatan Grosir</button>`;
    setH('wholesale-builder-container', h);
};

window.addWhol = () => { tWhol.push({minQty:2, price:0}); rWholB(); };
window.rmWhol = i => { tWhol.splice(i,1); rWholB(); };
window.uWhol = (i,k,v) => { tWhol[i][k] = parseFloat(v) || 0; };

// --- FUNGSI ADMIN CRUD ---
window.submitAdminForm = async () => {
    if(isSaving) return; isSaving = true;
    let d = {}, f = aF[cTab] || [];
    for (let k of f) {
        if (k.type === 'variants_builder') {
            d.variants = tVars.filter(v => v.name.trim() !== '');
        } else if (k.type === 'wholesale_builder') {
            d.wholesale = tWhol.filter(w => parseFloat(w.minQty) > 0.01 && w.price > 0);
        } else {
            let v = '';
            if (k.type === 'richtext') {
                const ed = el(`af-${k.key}-editor`);
                v = ed ? ed.innerHTML : '';
            } else {
                v = getV(`af-${k.key}`);
            }
            if (typeof v === 'string') {
                if(v.startsWith('data:image/') && v.length > 300000){ isSaving = false; return showToast("Gambar Base64 terlalu besar! Upload file."); }
                if(k.key === 'img') v = fixD(v);
            }
            d[k.key] = k.type === 'number' ? parseFloat(v) || 0 : v;
        }
    }
    
    if (!d.name && !d.title && !d.bankName && !d.code) { isSaving = false; return showToast("Judul/Nama/Kode wajib diisi!"); }
    if (cTab === 'products' && !d.sku) d.sku = 'SKU' + Date.now().toString().slice(-6);

    // FITUR BARU: validasi & normalisasi khusus data pelanggan (member)
    if (cTab === 'customers') {
        const normPhone = window.normalizeWA(d.phone);
        if (!normPhone || normPhone.length < 10) { isSaving = false; return showToast("Nomor WhatsApp tidak valid!"); }
        d.phone = normPhone;
        d.points = parseFloat(d.points) || 0;
        // id numerik (dari digit nomor WA) supaya kompatibel dengan sistem admin generik (oAEd/oADel/dst)
        d.id = parseInt(normPhone, 10);
    }
    
    let oldCustomerId = null; // dipakai untuk migrasi jika nomor WA pelanggan diubah saat edit
    if (cTab === 'customers') {
        // Untuk data pelanggan, ID SELALU mengikuti nomor WA (bukan eId/Date.now()),
        // karena dokumen di Firestore memang disimpan dengan key nomor WA.
        if (eId) {
            oldCustomerId = eId;
            let i = appData.customers.findIndex(x => x.id === eId);
            if (i > -1) appData.customers[i] = d; else appData.customers.unshift(d);
        } else {
            appData.customers.unshift(d);
        }
    } else if (cTab === 'rewards') {
        // FITUR BARU (REFACTOR KEAMANAN): hadiah disimpan sebagai sub-collection
        // TERSENDIRI (persis seperti produk), BUKAN sebagai array di dalam dokumen
        // utama -- supaya rule keamanan Firestore bisa memvalidasi field 'stock'
        // per-hadiah secara individual (sama seperti pola stok produk).
        if (eId) { d.id = eId; let i = appData.rewards.findIndex(x => x.id === eId); if(i > -1) appData.rewards[i] = d; }
        else { d.id = Date.now(); appData.rewards.unshift(d); }
    } else if (eId) {
        d.id = eId;
        let i = appData[cTab].findIndex(x => x.id === eId);
        // FIX BUG: field yang TIDAK ada di form edit (seperti 'totalSold' -- total
        // terjual) akan HILANG kalau tidak sengaja dipertahankan di sini, karena
        // penyimpanan produk pakai .set() yang MENIMPA SELURUH dokumen, bukan
        // menggabungkan. Jadi field-field "system" (bukan input form) WAJIB
        // disalin dulu dari data lama sebelum ditimpa.
        if (cTab === 'products' && i > -1) {
            const oldProd = appData[cTab][i];
            d.totalSold = oldProd.totalSold || 0;
            if (d.variants && d.variants.length && oldProd.variants) {
                d.variants.forEach(nv => {
                    const oldVar = oldProd.variants.find(ov => ov.name === nv.name);
                    if (oldVar && oldVar.totalSold) nv.totalSold = oldVar.totalSold;
                });
            }
        }
        if(i > -1) appData[cTab][i] = d;
    } else {
        d.id = Date.now();
        appData[cTab].unshift(d);
    }
    
    sLoad('Menyimpan...');
    try {
        if (cTab === 'products') {
            await db.collection("freshmart").doc("cms_data").collection("products").doc(d.id.toString()).set(d);
            await saveApp([]); // lastUpdate otomatis dihitung server (lihat definisi saveApp) // FIX: produk sudah tersimpan di sub-collection sendiri, cukup bump lastUpdate saja, jangan timpa field lain
        } else if (cTab === 'customers') {
            const custCol = db.collection("freshmart").doc("cms_data").collection("customers");
            // Kalau nomor WA diganti saat edit, dokumen lama (key = nomor lama) dihapus,
            // lalu dibuat dokumen baru dengan key nomor yang baru -- supaya lookup checkout tetap akurat.
            if (oldCustomerId !== null && oldCustomerId !== d.id) {
                const oldPhoneStr = oldCustomerId.toString();
                await custCol.doc(oldPhoneStr).delete().catch(()=>{});
            }
            await custCol.doc(d.phone).set(d, { merge: true });
            // Data pelanggan TIDAK ikut termuat untuk semua pengunjung (privasi), jadi tidak perlu saveApp([])
        } else if (cTab === 'rewards') {
            await db.collection("freshmart").doc("cms_data").collection("rewards").doc(d.id.toString()).set(d);
            // Katalog hadiah publik & realtime lewat listener sendiri (lihat attachRewardsRealtime) -- tidak perlu saveApp([])
        } else {
            await saveApp([cTab]); // FIX: hanya kirim field yang benar-benar berubah (categories/vouchers/banners/brands/banks)
        }
        closeAdminModal(); rAdmItms(cTab); showToast("Tersimpan!");
    } catch(e) { showToast("Gagal menyimpan!"); }
    finally { isSaving = false; hLoad(); }
};

window.oADel = async (t, id) => {
    showConfirm("Hapus Data", "Data yang dihapus tidak bisa dikembalikan lagi.", async () => {
        if (isSaving) return; isSaving = true;
        const target = appData[t] && appData[t].find(x => x.id === id);
        appData[t] = appData[t].filter(x => x.id !== id);
        sLoad('Menghapus...');
        try {
            if (t === 'products') {
                await db.collection("freshmart").doc("cms_data").collection("products").doc(id.toString()).delete();
                await saveApp([]); // lastUpdate otomatis dihitung server (lihat definisi saveApp)
            } else if (t === 'customers') {
                const phoneKey = target ? target.phone : id.toString();
                await db.collection("freshmart").doc("cms_data").collection("customers").doc(phoneKey).delete();
            } else if (t === 'rewards') {
                await db.collection("freshmart").doc("cms_data").collection("rewards").doc(id.toString()).delete();
            } else { await saveApp([t]); }
            rAdmItms(t); showToast("Berhasil Dihapus!");
        } catch(e) { showToast("Gagal menghapus!"); }
        finally { isSaving = false; hLoad(); }
    });
};

window.duplicateProduct = async (id) => {
    showConfirm("Duplikat Produk", "Menyalin data produk ini ke item baru?", async () => {
        if(isSaving) return; isSaving = true;
        const original = appData.products.find(x => x.id === id);
        if(!original) { isSaving = false; return; }
        
        let duplicated = JSON.parse(JSON.stringify(original));
        duplicated.id = Date.now() + Math.floor(Math.random() * 1000);
        duplicated.name = duplicated.name + " COPY";
        duplicated.sku = "";
        duplicated.totalSold = 0; // FIX: produk hasil duplikat belum pernah terjual, jangan ikut angka produk asal
        if(duplicated.variants && duplicated.variants.length > 0) {
            duplicated.variants = duplicated.variants.map(v => { v.sku = ""; v.totalSold = 0; return v; });
        }
        appData.products.unshift(duplicated);
        
        sLoad('Menyalin...');
        try {
            await db.collection("freshmart").doc("cms_data").collection("products").doc(duplicated.id.toString()).set(duplicated);
            await saveApp([]); // lastUpdate otomatis dihitung server (lihat definisi saveApp)
            rAdmItms('products'); showToast("Produk berhasil disalin!");
        } catch(e) { showToast("Gagal menyalin!"); }
        finally { isSaving = false; hLoad(); }
    }, "Ya, Salin", false);
};

// ==========================================
// FITUR RESTOCK PRODUK
// ==========================================
window.openRestockModal = (id) => {
    const p = appData.products.find(x => x.id === id);
    if (!p) return;
    
    const hasVariants = p.variants && p.variants.length > 0;
    let variantsHtml = '';
    
    if (hasVariants) {
        variantsHtml = p.variants.map((v, i) => `
            <div class="flex items-center justify-between gap-3 bg-slate-50 dark:bg-slate-900/50 p-4 rounded-[1.25rem] border border-slate-200 dark:border-slate-700">
                <div class="flex items-center gap-3 min-w-0 flex-1">
                    ${v.colorCode ? `<span class="w-5 h-5 rounded-full shrink-0 shadow-sm border border-slate-300" style="background-color:${esc(v.colorCode)}"></span>` : ''}
                    <div class="min-w-0 flex-1">
                        <p class="text-xs font-bold text-slate-800 dark:text-white truncate">${esc(v.name)}</p>
                        <p class="text-[10px] font-bold text-slate-500 mt-0.5">Stok saat ini: <span class="text-blue-500 font-bold">${parseFloat(v.stock)||0}</span></p>
                    </div>
                </div>
                <input type="number" id="restock-var-${i}" min="0" placeholder="Tambah" class="admin-input !py-2.5 !px-3 !w-28 text-center text-sm bg-white dark:bg-slate-800 shadow-sm shrink-0" value="">
            </div>`
        ).join('');
    } else {
        variantsHtml = `
            <div class="flex items-center justify-between gap-3 bg-slate-50 dark:bg-slate-900/50 p-4 rounded-[1.25rem] border border-slate-200 dark:border-slate-700">
                <div class="min-w-0 flex-1">
                    <p class="text-xs font-bold text-slate-800 dark:text-white truncate">${esc(p.name)}</p>
                    <p class="text-[10px] font-bold text-slate-500 mt-0.5">Stok saat ini: <span class="text-blue-500 font-bold">${parseFloat(p.stock)||0}</span></p>
                </div>
                <input type="number" id="restock-main" min="0" placeholder="Tambah" class="admin-input !py-2.5 !px-3 !w-28 text-center text-sm bg-white dark:bg-slate-800 shadow-sm shrink-0" value="">
            </div>`;
    }

    let m = document.getElementById('restock-modal');
    if (!m) {
        m = document.createElement('div');
        m.id = 'restock-modal';
        m.className = 'fixed inset-0 z-[110] bg-slate-900/70 backdrop-blur-sm flex items-end sm:items-center justify-center p-0 sm:p-5';
        // FIX #7: tutup saat klik backdrop (area di luar card)
        m.onclick = (e) => { if (e.target === m) closeRestockModal(); };
        document.body.appendChild(m);
    }
    m.innerHTML = `
        <div class="bg-white dark:bg-slate-900 w-full max-w-lg rounded-t-[2rem] sm:rounded-[2rem] max-h-[85vh] flex flex-col shadow-2xl border border-slate-200 dark:border-slate-700">
            <div class="p-5 sm:p-6 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center shrink-0">
                <div>
                    <h3 class="font-bold text-slate-800 dark:text-white text-base flex items-center gap-2"><i class="fa-solid fa-boxes-stacked text-indigo-500"></i> Restock Produk</h3>
                    <p class="text-[10px] font-bold text-slate-500 mt-0.5 uppercase tracking-widest">${esc(p.name)}</p>
                </div>
                <button onclick="closeRestockModal()" class="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 hover:bg-rose-100 hover:text-rose-500 flex items-center justify-center transition-all"><i class="fa-solid fa-xmark"></i></button>
            </div>
            <div class="p-5 sm:p-6 overflow-y-auto flex-1 space-y-3">
                <p class="text-[11px] font-bold text-slate-500 dark:text-slate-400 bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-100 dark:border-indigo-800 p-3 rounded-xl"><i class="fa-solid fa-circle-info text-indigo-500 mr-1.5"></i> Masukkan jumlah <b>penambahan</b> stok. Stok lama + nilai ini = stok baru.</p>
                ${variantsHtml}
            </div>
            <div class="p-5 border-t border-slate-100 dark:border-slate-800 shrink-0">
                <button onclick="processRestock(${id})" class="btn-primary py-3.5 text-sm shadow-glow !rounded-xl flex items-center justify-center gap-2"><i class="fa-solid fa-save"></i> Simpan Restock</button>
            </div>
        </div>`;
    // FIX #4a: animasi buka
    m.style.opacity = '0';
    m.style.display = 'flex';
    requestAnimationFrame(() => {
        m.style.transition = 'opacity 0.25s ease';
        m.style.opacity = '1';
    });
    // FIX #4b: daftarkan ke History API & oMods agar back button berfungsi
    pushModalHistory('restock');
};

window.closeRestockModal = (fH=false) => {
    requestCloseModal('restock', fH, () => {
        const m = document.getElementById('restock-modal');
        if (!m || m.style.display === 'none') return;
        m.style.opacity = '0'; m.style.transition = 'opacity 0.25s ease';
        setTimeout(() => {
            m.style.display = 'none'; m.style.opacity = ''; m.style.transition = '';
        }, 250);
    });
};

window.processRestock = async (id) => {
    if (isSaving) return; isSaving = true;
    const idx = appData.products.findIndex(x => x.id === id);
    if (idx < 0) { isSaving = false; return; }
    
    const p = appData.products[idx];
    const hasVariants = p.variants && p.variants.length > 0;
    let updated = JSON.parse(JSON.stringify(p));
    
    let totalAdded = 0;
    if (hasVariants) {
        updated.variants = updated.variants.map((v, i) => {
            const addVal = parseFloat(document.getElementById('restock-var-' + i)?.value) || 0;
            if (addVal > 0) {
                v.stock = (parseFloat(v.stock)||0) + addVal;
                totalAdded += addVal;
                // FIX #6a: auto-aktifkan varian jika stok sudah > 0
                if (v.stock > 0 && (v.isActive === false || v.isActive === 'false')) {
                    v.isActive = true;
                }
            }
            return v;
        });
        // FIX #6b: auto-aktifkan produk induk jika minimal 1 varian aktif & stok > 0
        const anyActiveVariant = updated.variants.some(v => (parseFloat(v.stock)||0) > 0 && v.isActive !== false && v.isActive !== 'false');
        if (anyActiveVariant && (updated.isActive === false || updated.isActive === 'false')) {
            updated.isActive = 'true';
        }
    } else {
        const addVal = parseFloat(document.getElementById('restock-main')?.value) || 0;
        if (addVal > 0) {
            updated.stock = (parseFloat(updated.stock)||0) + addVal;
            totalAdded += addVal;
            // FIX #6c: auto-aktifkan produk jika stok sudah > 0
            if (updated.stock > 0 && (updated.isActive === false || updated.isActive === 'false')) {
                updated.isActive = 'true';
            }
        }
    }
    // FIX #6d: jika tidak ada yang diisi → tolak lebih awal
    if (totalAdded <= 0) { isSaving = false; return showToast("Masukkan jumlah restock terlebih dahulu!"); }
    
    sLoad('Menyimpan Restock...');
    try {
        // FIX RACE CONDITION: gunakan Firestore transaction agar dua admin
        // yang restock bersamaan tidak saling menimpa — stok dibaca LANGSUNG
        // dari server lalu ditambah atomically, bukan dari cache lokal.
        const prodRef = db.collection("freshmart").doc("cms_data").collection("products").doc(id.toString());
        let finalStock = 0;
        await db.runTransaction(async (transaction) => {
            const docSnap = await transaction.get(prodRef);
            if (!docSnap.exists) throw new Error("Produk tidak ditemukan di server");
            const serverProd = JSON.parse(JSON.stringify(docSnap.data()));

            if (hasVariants) {
                // FIX: cocokkan varian berdasarkan NAMA, bukan index posisi,
                // karena urutan varian di server bisa berbeda dengan cache lokal.
                p.variants.forEach((localVar, i) => {
                    const addVal = parseFloat(document.getElementById('restock-var-' + i)?.value) || 0;
                    if (addVal <= 0) return;
                    // Cari varian di server berdasarkan nama
                    const sIdx = (serverProd.variants || []).findIndex(sv => sv.name === localVar.name);
                    if (sIdx > -1) {
                        serverProd.variants[sIdx].stock = (parseFloat(serverProd.variants[sIdx].stock)||0) + addVal;
                        if (serverProd.variants[sIdx].stock > 0 &&
                            (serverProd.variants[sIdx].isActive === false || serverProd.variants[sIdx].isActive === 'false')) {
                            serverProd.variants[sIdx].isActive = true;
                        }
                    }
                });
                const anyActive = serverProd.variants.some(v => (parseFloat(v.stock)||0) > 0 && v.isActive !== false && v.isActive !== 'false');
                if (anyActive && (serverProd.isActive === false || serverProd.isActive === 'false')) {
                    serverProd.isActive = 'true';
                }
                finalStock = serverProd.variants.reduce((s,v) => s+(parseFloat(v.stock)||0), 0);
            } else {
                const addVal = parseFloat(document.getElementById('restock-main')?.value) || 0;
                serverProd.stock = (parseFloat(serverProd.stock)||0) + addVal;
                if (serverProd.stock > 0 && (serverProd.isActive === false || serverProd.isActive === 'false')) {
                    serverProd.isActive = 'true';
                }
                finalStock = serverProd.stock;
            }
            transaction.set(prodRef, serverProd);
            // Perbarui updated ke data server agar disimpan ke cache lokal
            Object.assign(updated, serverProd);
        });
        appData.products[idx] = updated;
        await saveApp([]); // lastUpdate otomatis dihitung server (lihat definisi saveApp)
        closeRestockModal();
        rAdmItms('products');
        setIn('stat-products', appData.products.filter(p => p.isActive !== 'false' && p.isActive !== false).length);
        showToast(`✅ Restock +${totalAdded} berhasil! Total stok: ${finalStock}`);
    } catch(e) { showToast("Gagal restock: " + (e.message || '')); }
    finally { isSaving = false; hLoad(); }
};

window.closeAdminModal = (fH=false) => {
    requestCloseModal('admin', fH, () => {
        el('admin-modal').classList.add('opacity-0');
        el('admin-modal-box').classList.add('scale-95');
        setTimeout(() => hide('admin-modal'), 300);
    });
};

// =====================================================================
// FITUR BARU: EDIT CEPAT HARGA (HPP, Harga Jual, Harga Coret, Grosir & Varian)
// Modal ringan supaya admin bisa update harga tanpa perlu buka form edit
// produk lengkap (yang isinya banyak field lain seperti nama, gambar,
// deskripsi, dll). Mengikuti pola yang sama dengan modal Restock:
// - Kalau produk PUNYA varian: setiap varian ditampilkan sendiri-sendiri
//   dengan HPP/Harga Jual/Harga Coret masing-masing (grosir disembunyikan,
//   konsisten dengan aturan bisnis yang sudah ada: grosir produk dasar
//   tidak berlaku kalau produk itu punya varian).
// - Kalau TIDAK punya varian: tampil HPP/Harga Jual/Harga Coret produk
//   utama, plus editor tabel harga Grosir (tambah/hapus baris).
// Penyimpanan pakai Firestore transaction (baca data server dulu, baru
// timpa field harga-nya saja) supaya tidak menabrak perubahan stok/data
// lain yang mungkin sedang disimpan admin/perangkat lain di saat bersamaan.
// =====================================================================
let qpWhol = [];

window.openQuickPriceModal = (id) => {
    const p = appData.products.find(x => x.id === id);
    if (!p) return;
    const hasVariants = p.variants && p.variants.length > 0;
    qpWhol = (!hasVariants && p.wholesale) ? JSON.parse(JSON.stringify(p.wholesale)) : [];

    let body = '';
    if (hasVariants) {
        body = p.variants.map((v, i) => `
            <div class="bg-slate-50 dark:bg-slate-900/50 p-4 rounded-[1.25rem] border border-slate-200 dark:border-slate-700 space-y-3">
                <div class="flex items-center gap-2.5 min-w-0">
                    ${v.colorCode ? `<span class="w-4 h-4 rounded-full shrink-0 shadow-sm border border-slate-300" style="background-color:${esc(v.colorCode)}"></span>` : ''}
                    <p class="text-xs font-bold text-slate-800 dark:text-white truncate">${esc(v.name)}</p>
                </div>
                <div class="grid grid-cols-4 gap-2.5">
                    <div><label class="block text-[9px] font-bold text-amber-500 mb-1 uppercase tracking-widest">HPP</label><input type="number" id="qp-var-hpp-${i}" value="${v.hpp||0}" class="admin-input !py-2.5 !px-2.5 text-xs text-center bg-white dark:bg-slate-800"></i></div>
                    <div><label class="block text-[9px] font-bold text-emerald-500 mb-1 uppercase tracking-widest">Jual</label><input type="number" id="qp-var-price-${i}" value="${v.price||0}" class="admin-input !py-2.5 !px-2.5 text-xs text-center bg-white dark:bg-slate-800"></i></div>
                    <div><label class="block text-[9px] font-bold text-slate-400 mb-1 uppercase tracking-widest">Coret</label><input type="number" id="qp-var-normal-${i}" value="${v.priceNormal||0}" class="admin-input !py-2.5 !px-2.5 text-xs text-center bg-white dark:bg-slate-800"></i></div>
                    <div><label class="block text-[9px] font-bold text-violet-500 mb-1 uppercase tracking-widest"><i class="fa-solid fa-star"></i> Poin</label><input type="number" min="0" id="qp-var-poin-${i}" value="${v.poin||0}" class="admin-input !py-2.5 !px-2.5 text-xs text-center bg-white dark:bg-slate-800"></i></div>
                </div>
            </div>`
        ).join('');
    } else {
        body = `
            <div class="grid grid-cols-4 gap-2.5">
                <div><label class="block text-[9px] font-bold text-amber-500 mb-1 uppercase tracking-widest">HPP / Modal</label><input type="number" id="qp-hpp" value="${p.hpp||0}" class="admin-input !py-2.5 !px-2.5 text-xs text-center bg-white dark:bg-slate-800"></i></div>
                <div><label class="block text-[9px] font-bold text-emerald-500 mb-1 uppercase tracking-widest">Harga Jual</label><input type="number" id="qp-price" value="${p.price||0}" class="admin-input !py-2.5 !px-2.5 text-xs text-center bg-white dark:bg-slate-800"></i></div>
                <div><label class="block text-[9px] font-bold text-slate-400 mb-1 uppercase tracking-widest">Harga Coret</label><input type="number" id="qp-normal" value="${p.priceNormal||0}" class="admin-input !py-2.5 !px-2.5 text-xs text-center bg-white dark:bg-slate-800"></i></div>
                <div><label class="block text-[9px] font-bold text-violet-500 mb-1 uppercase tracking-widest"><i class="fa-solid fa-star"></i> Poin</label><input type="number" min="0" id="qp-poin" value="${p.poin||0}" class="admin-input !py-2.5 !px-2.5 text-xs text-center bg-white dark:bg-slate-800"></i></div>
            </div>
            <div class="pt-2">
                <div class="flex justify-between items-center mb-2.5">
                    <label class="block text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">Harga Grosir</label>
                    <button type="button" onclick="qpAddWhol()" class="text-[10px] font-bold text-emerald-500 hover:text-emerald-600 flex items-center gap-1"><i class="fa-solid fa-plus"></i> Tambah</button>
                </div>
                <div id="qp-whol-container" class="space-y-2"></div>
            </div>`;
    }

    let m = document.getElementById('quickprice-modal');
    if (!m) {
        m = document.createElement('div');
        m.id = 'quickprice-modal';
        m.className = 'fixed inset-0 z-[110] bg-slate-900/70 backdrop-blur-sm flex items-end sm:items-center justify-center p-0 sm:p-5';
        m.onclick = (e) => { if (e.target === m) closeQuickPriceModal(); };
        document.body.appendChild(m);
    }
    m.innerHTML = `
        <div class="bg-white dark:bg-slate-900 w-full max-w-lg rounded-t-[2rem] sm:rounded-[2rem] max-h-[85vh] flex flex-col shadow-2xl border border-slate-200 dark:border-slate-700">
            <div class="p-5 sm:p-6 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center shrink-0">
                <div>
                    <h3 class="font-bold text-slate-800 dark:text-white text-base flex items-center gap-2"><i class="fa-solid fa-tags text-emerald-500"></i> Edit Cepat Harga</h3>
                    <p class="text-[10px] font-bold text-slate-500 mt-0.5 uppercase tracking-widest">${esc(p.name)}</p>
                </div>
                <button onclick="closeQuickPriceModal()" class="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 hover:bg-rose-100 hover:text-rose-500 flex items-center justify-center transition-all"><i class="fa-solid fa-xmark"></i></button>
            </div>
            <div class="p-5 sm:p-6 overflow-y-auto flex-1 space-y-3" id="qp-body">${body}</div>
            <div class="p-5 border-t border-slate-100 dark:border-slate-800 shrink-0">
                <button onclick="processQuickPrice(${id})" class="btn-primary py-3.5 text-sm shadow-glow !rounded-xl flex items-center justify-center gap-2"><i class="fa-solid fa-save"></i> Simpan Harga</button>
            </div>
        </div>`;
    if (!hasVariants) rQpWhol();
    m.style.opacity = '0';
    m.style.display = 'flex';
    requestAnimationFrame(() => {
        m.style.transition = 'opacity 0.25s ease';
        m.style.opacity = '1';
    });
    pushModalHistory('quickprice');
};

// Render ulang daftar baris harga grosir di dalam modal edit cepat
window.rQpWhol = () => {
    setH('qp-whol-container', qpWhol.length ? qpWhol.map((w, i) => `
        <div class="flex items-center gap-2">
            <input type="number" min="1" placeholder="Min. Qty" value="${w.minQty||''}" onchange="qpWhol[${i}].minQty=parseFloat(this.value)||0" class="admin-input !py-2.5 !px-3 text-xs bg-slate-50 dark:bg-slate-900/50 flex-1"></i>
            <input type="number" min="0" placeholder="Harga/Unit" value="${w.price||''}" onchange="qpWhol[${i}].price=parseFloat(this.value)||0" class="admin-input !py-2.5 !px-3 text-xs bg-slate-50 dark:bg-slate-900/50 flex-1"></i>
            <button type="button" onclick="qpWhol.splice(${i},1); rQpWhol();" class="w-9 h-9 shrink-0 rounded-xl bg-rose-50 text-rose-500 hover:bg-rose-500 hover:text-white flex items-center justify-center transition-all"><i class="fa-solid fa-trash text-xs"></i></button>
        </div>`).join('') : `<p class="text-[11px] font-bold text-slate-400 text-center py-2">Belum ada tingkat harga grosir.</p>`);
};
window.qpAddWhol = () => { qpWhol.push({minQty:0, price:0}); rQpWhol(); };

window.closeQuickPriceModal = (fH=false) => {
    requestCloseModal('quickprice', fH, () => {
        const m = document.getElementById('quickprice-modal');
        if (!m || m.style.display === 'none') return;
        m.style.opacity = '0'; m.style.transition = 'opacity 0.25s ease';
        setTimeout(() => {
            m.style.display = 'none'; m.style.opacity = ''; m.style.transition = '';
        }, 250);
    });
};

window.processQuickPrice = async (id) => {
    if (isSaving) return; isSaving = true;
    const idx = appData.products.findIndex(x => x.id === id);
    if (idx < 0) { isSaving = false; return; }
    const p = appData.products[idx];
    const hasVariants = p.variants && p.variants.length > 0;

    sLoad('Menyimpan Harga...');
    try {
        const prodRef = db.collection("freshmart").doc("cms_data").collection("products").doc(id.toString());
        let updated = null;
        await db.runTransaction(async (transaction) => {
            const docSnap = await transaction.get(prodRef);
            if (!docSnap.exists) throw new Error("Produk tidak ditemukan di server");
            const serverProd = JSON.parse(JSON.stringify(docSnap.data()));

            if (hasVariants) {
                // FIX: cocokkan varian berdasarkan NAMA (bukan index), sama seperti processRestock,
                // karena urutan varian di server bisa berbeda dari cache lokal admin ini.
                p.variants.forEach((localVar, i) => {
                    const sIdx = (serverProd.variants || []).findIndex(sv => sv.name === localVar.name);
                    if (sIdx < 0) return;
                    const hpp = parseFloat(document.getElementById('qp-var-hpp-' + i)?.value) || 0;
                    const price = parseFloat(document.getElementById('qp-var-price-' + i)?.value) || 0;
                    const normal = parseFloat(document.getElementById('qp-var-normal-' + i)?.value) || 0;
                    const poin = parseFloat(document.getElementById('qp-var-poin-' + i)?.value) || 0;
                    serverProd.variants[sIdx].hpp = hpp;
                    serverProd.variants[sIdx].price = price;
                    serverProd.variants[sIdx].priceNormal = normal;
                    serverProd.variants[sIdx].poin = poin;
                });
            } else {
                serverProd.hpp = parseFloat(document.getElementById('qp-hpp')?.value) || 0;
                serverProd.price = parseFloat(document.getElementById('qp-price')?.value) || 0;
                serverProd.priceNormal = parseFloat(document.getElementById('qp-normal')?.value) || 0;
                serverProd.poin = parseFloat(document.getElementById('qp-poin')?.value) || 0;
                serverProd.wholesale = qpWhol.filter(w => parseFloat(w.minQty) > 0.01 && w.price > 0);
            }
            transaction.set(prodRef, serverProd);
            updated = serverProd;
        });
        appData.products[idx] = updated;
        await saveApp([]); // lastUpdate otomatis dihitung server (lihat definisi saveApp)
        closeQuickPriceModal();
        rAdmItms('products');
        showToast("✅ Harga berhasil diperbarui!");
    } catch(e) { showToast("Gagal simpan harga: " + (e.message || '')); }
    finally { isSaving = false; hLoad(); }
};

// --- 15. BARCODE SCANNER SETUP & NAVIGASI ROOT ---
let html5QrCode;
window.openCameraScanner = async (targetId='search-input') => {
    const mScan = el('scanner-modal');
    if (mScan && mScan.classList.contains('hidden')) pushModalHistory('scanner');
    show('scanner-modal');
    setTimeout(() => { el('scanner-modal').classList.remove('opacity-0') }, 10);
    
    // FITUR BARU (PERFORMA): muat library scanner cuma saat ikon scan benar-benar diklik
    try {
        await ensureScriptLoaded('https://cdnjs.cloudflare.com/ajax/libs/html5-qrcode/2.3.8/html5-qrcode.min.js', () => typeof Html5Qrcode !== 'undefined');
    } catch(e) {
        showToast('Gagal memuat modul kamera. Cek koneksi internet Anda.');
        closeCameraScanner();
        return;
    }
    
    if(!html5QrCode) html5QrCode = new Html5Qrcode("reader");
    const config = { fps: 10, qrbox: { width: 250, height: 250 } };
    
    setTimeout(() => {
        if(html5QrCode){
            html5QrCode.start({facingMode:"environment"}, config, (decodedText) => {
                let tEl = el(targetId);
                if(tEl){
                    tEl.value = decodedText;
                    if(targetId === 'search-input') handleSearch(decodedText);
                    else {
                        tEl.dispatchEvent(new Event('input',{bubbles:true}));
                        tEl.dispatchEvent(new Event('change',{bubbles:true}));
                    }
                }
                showToast("Barcode discan!");
                closeCameraScanner();
            },(err)=>{}).catch(err => {
                showToast("Akses kamera ditolak/gagal!");
                closeCameraScanner();
            });
        }
    }, 100);
};

// FIX: kamera SELALU dimatikan dengan benar (stop+clear) baik saat ditutup lewat tombol X
// di UI maupun lewat tombol back fisik/browser, karena kedua jalur sama-sama berakhir di
// blok penutupan ini (lihat requestCloseModal). Mencegah kamera tetap menyala di latar
// belakang (resource leak) saat user menekan tombol back.
window.closeCameraScanner = (fH=false) => {
    requestCloseModal('scanner', fH, () => {
        el('scanner-modal').classList.add('opacity-0');
        if(html5QrCode){
            try {
                if(html5QrCode.getState() === 2 /* SCANNING */ || html5QrCode.getState() === 3 /* PAUSED */){
                    html5QrCode.stop().then(() => {
                        html5QrCode.clear();
                        html5QrCode = null;
                    }).catch(e => {
                        html5QrCode.clear();
                        html5QrCode = null;
                    });
                } else {
                    html5QrCode.clear();
                    html5QrCode = null;
                }
            } catch(err) {
                html5QrCode = null;
            }
        }
        setTimeout(() => hide('scanner-modal'), 300);
    });
};

window.toggleProductStatus = async (id, toActive) => {
    if(isSaving) return; isSaving = true;
    const i = appData.products.findIndex(x => x.id === id);
    if(i > -1){
        appData.products[i].isActive = toActive ? 'true' : 'false';
        sLoad(toActive ? 'Mengaktifkan...' : 'Menonaktifkan...');
        try {
            await db.collection("freshmart").doc("cms_data").collection("products").doc(id.toString()).update({isActive: toActive ? 'true' : 'false'});
            await saveApp([]); // lastUpdate otomatis dihitung server (lihat definisi saveApp) rAdmItms('products');
            setIn('stat-products', appData.products.filter(p => p.isActive !== 'false' && p.isActive !== false).length); // FIX: sync badge
        showToast(toActive ? "Produk Aktif!" : "Stok Dikosongkan!");
        } catch(e) { showToast("Gagal update status!"); }
        finally { isSaving = false; hLoad(); }
    }
};

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

// --- FITUR PREVIEW, DOWNLOAD IMAGE & PDF UNTUK INVOICE / SURAT JALAN ---
let currentDocType = "invoice";

window.openDocPreview = (type) => {
    currentDocType = type;
    const o = gOrds.find(x => x.orderId === cVOrd);
    if(!o) return;

    setIn('doc-modal-title', type === 'invoice' ? 'Preview Faktur Invoice' : 'Preview Surat Jalan');
    const d = o.dateString ? new Date(o.dateString).toLocaleString('id-ID', {day:'2-digit', month:'2-digit', year:'numeric'}) : '';
    
    let logoHTML = '';
    if (appData.store.logo && (appData.store.logo.includes('http') || appData.store.logo.includes('data:'))) {
        logoHTML = `<img loading="eager" src="${esc(appData.store.logo)}" class="w-16 h-16 object-contain"></i>`;
    } else {
        logoHTML = `<div class="w-16 h-16 bg-emerald-500 text-white flex items-center justify-center rounded-xl"><i class="fa-solid fa-store text-3xl"></i></div>`;
    }

    let h = `
    <div class="flex justify-between items-start border-b-[3px] border-slate-800 pb-6 mb-6">
        <div class="flex items-center gap-4">
            ${logoHTML}
            <div>
                <h1 class="font-bold text-2xl tracking-tight text-slate-900 uppercase">${esc(appData.store.name)}</h1>
                <p class="text-sm font-bold text-slate-500 mt-1 uppercase tracking-widest">${esc(appData.store.slogan || 'General Supplier')}</p>
                <p class="text-xs font-medium text-slate-500 mt-1 max-w-sm leading-snug">${esc(appData.store.address || 'Alamat fisik toko belum diatur.')}</p>
                <p class="text-xs font-medium text-slate-500 mt-0.5"><i class="fa-brands fa-whatsapp text-emerald-500"></i> ${esc(appData.store.wa || '-')}</p>
            </div>
        </div>
        <div class="text-right">
            <h2 class="font-bold text-3xl tracking-widest ${type === 'invoice' ? 'text-blue-600' : 'text-amber-600'} uppercase">${type === 'invoice' ? (o.payment?.method === 'tempo' ? 'PROFORMA INVOICE' : 'INVOICE') : 'SURAT JALAN'}</h2>
            <p class="text-sm font-bold text-slate-600 mt-2 font-mono">#${o.orderId}</p>
            <p class="text-xs font-semibold text-slate-500 mt-1">Tanggal: ${d}</p>
        </div>
    </div>

    <div class="grid grid-cols-2 gap-8 mb-8">
        <div class="bg-slate-50 p-5 rounded-xl border border-slate-200">
            <h3 class="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-3 border-b border-slate-200 pb-2">Ditagihkan / Dikirim Kepada:</h3>
            <p class="font-bold text-base text-slate-900 uppercase mb-1">${esc(o.customer?.name || 'Guest')}</p>
            <p class="text-sm font-medium text-slate-700 leading-relaxed mb-3">${esc(o.customer?.address || '-')}</p>
            ${o.customer?.note ? `<p class="text-xs font-semibold text-amber-700 bg-amber-50 p-2.5 rounded-xl border border-amber-200"><i class="fa-solid fa-note-sticky"></i> Catatan: ${esc(o.customer.note)}</p>` : ''}
        </div>
        
        <div class="bg-slate-50 p-5 rounded-xl border border-slate-200 flex flex-col justify-center space-y-3">
            <div class="flex justify-between items-center border-b border-slate-200 pb-2">
                <span class="text-xs font-bold text-slate-500 uppercase tracking-wider">Metode Pengiriman</span>
                <span class="text-sm font-bold text-slate-800 uppercase">${esc(o.customer?.deliveryMethod === 'delivery' ? 'Kurir Toko' : 'Ambil Sendiri')}</span>
            </div>
            <div class="flex justify-between items-center border-b border-slate-200 pb-2">
                <span class="text-xs font-bold text-slate-500 uppercase tracking-wider">Sistem Pembayaran</span>
                <span class="text-sm font-bold text-slate-800 uppercase">${esc(o.payment?.method || 'cash')}</span>
            </div>
            <div class="flex justify-between items-center pb-1">
                <span class="text-xs font-bold text-slate-500 uppercase tracking-wider">Status Bayar</span>
                <span class="text-sm font-bold ${o.status==='Selesai'?'text-emerald-600':'text-rose-600'} uppercase">${o.status==='Selesai'?'LUNAS':'BELUM LUNAS'}</span>
            </div>
        </div>
    </div>
    `;

    if (type === 'invoice') {
        h += `
        <table class="w-full text-left text-sm text-slate-900 border-collapse mb-6">
            <thead>
                <tr class="bg-slate-800 text-white font-bold uppercase tracking-wider text-xs">
                    <th class="py-3 px-4 rounded-tl-xl w-10 text-center border-r border-slate-700">No</th>
                    <th class="py-3 px-4 border-r border-slate-700">Deskripsi Produk & Varian</th>
                    <th class="py-3 px-4 text-center w-24 border-r border-slate-700">Qty</th>
                    <th class="py-3 px-4 text-right w-32 border-r border-slate-700">Harga Sat.</th>
                    <th class="py-3 px-4 rounded-tr-xl text-right w-32">Total</th>
                </tr>
            </thead>
            <tbody class="border-b-2 border-slate-800 divide-y divide-slate-200">
                ${o.items.map((item, idx) => `
                <tr class="hover:bg-slate-50 transition-colors">
                    <td class="py-4 px-4 text-center font-mono text-slate-500">${idx+1}</td>
                    <td class="py-4 px-4 font-bold flex items-center gap-2">
                        ${esc(item.name)} 
                        ${item.variantName ? `<span class="bg-slate-100 text-slate-600 px-2 py-0.5 rounded text-[10px] border border-slate-200 whitespace-nowrap ml-1">${esc(item.variantName)}</span> ${item.colorCode ? `<span class="inline-block w-4 h-4 rounded-full border border-slate-300 shadow-sm" style="background-color: ${esc(item.colorCode)};"></span>` : ''}` : ''}
                        ${item.poTime ? `<span class="bg-amber-100 text-amber-700 px-2 py-0.5 rounded text-[10px] font-bold border border-amber-200 whitespace-nowrap ml-1">PO ${esc(item.poTime)}</span>` : ''}
                    </td>
                    <td class="py-4 px-4 text-center font-bold text-slate-700">${parseFloat(item.qty)} <span class="text-[10px] font-bold text-slate-400 uppercase">${esc(item.unit||'pcs')}</span></td>
                    <td class="py-4 px-4 text-right font-mono font-medium">${fCur(item.effectivePrice)}</td>
                    <td class="py-4 px-4 text-right font-mono font-bold">${fCur(item.effectivePrice * parseFloat(item.qty))}</td>
                </tr>`).join('')}
            </tbody>
        </table>

        <div class="flex justify-end mb-10">
            <div class="w-1/2 md:w-[45%] space-y-3 text-sm font-bold text-slate-700">
                <div class="flex justify-between px-4"><span>Subtotal Produk</span><span class="font-mono">${fCur(o.payment?.subtotal)}</span></div>
                ${o.payment?.shippingCost ? `<div class="flex justify-between px-4"><span>Ongkos Kirim</span><span class="font-mono">${fCur(o.payment.shippingCost)}</span></div>` : ''}
                ${o.payment?.shippingDiscount ? `<div class="flex justify-between px-4 text-emerald-600"><span>Diskon Ongkir</span><span class="font-mono">-${fCur(o.payment.shippingDiscount)}</span></div>` : ''}
                ${o.payment?.productDiscount ? `<div class="flex justify-between px-4 text-rose-600"><span>Diskon Produk</span><span class="font-mono">-${fCur(o.payment.productDiscount)}</span></div>` : ''}
                ${o.payment?.ppnAmount ? `<div class="flex justify-between px-4 text-amber-600"><span>PPN (${o.payment.ppnRate||11}%)</span><span class="font-mono">+${fCur(o.payment.ppnAmount)}</span></div>` : ''}
                
                <div class="flex justify-between items-center bg-slate-800 text-white p-4 rounded-xl mt-4 shadow-md">
                    <span class="font-bold text-base uppercase tracking-widest">Grand Total</span>
                    <span class="font-mono text-xl text-emerald-400 font-bold tracking-tight">${fCur(o.payment?.grandTotal)}</span>
                </div>
                ${o.payment?.method === 'tempo' ? `
                <div class="flex justify-between px-4 mt-4 text-emerald-600"><span>Uang Muka (DP)</span><span class="font-mono">${fCur(o.payment?.tempoDp || 0)}</span></div>
                <div class="flex justify-between items-center bg-rose-50 text-rose-700 p-4 rounded-xl mt-2 border border-rose-200">
                    <span class="font-bold text-base uppercase tracking-widest">Sisa Tagihan</span>
                    <span class="font-mono text-xl font-bold tracking-tight">${fCur(o.payment?.tempoBalance || 0)}</span>
                </div>
                ` : ''}
            </div>
        </div>`;
    } else {
        // Surat Jalan
        h += `
        <table class="w-full text-left text-sm text-slate-900 border-collapse mb-10">
            <thead>
                <tr class="bg-slate-800 text-white font-bold uppercase tracking-wider text-xs">
                    <th class="py-3 px-4 rounded-tl-xl w-10 text-center border-r border-slate-700">No</th>
                    <th class="py-3 px-4 border-r border-slate-700">Nama & Spesifikasi Barang</th>
                    <th class="py-3 px-4 text-center w-28 border-r border-slate-700">Kuantitas</th>
                    <th class="py-3 px-4 text-center w-24 border-r border-slate-700">Satuan</th>
                    <th class="py-3 px-4 rounded-tr-xl text-center w-24">Ceklis Gudang</th>
                </tr>
            </thead>
            <tbody class="border-b-2 border-slate-800 divide-y divide-slate-200">
                ${o.items.map((item, idx) => `
                <tr class="hover:bg-slate-50 transition-colors">
                    <td class="py-4 px-4 text-center font-mono text-slate-500">${idx+1}</td>
                    <td class="py-4 px-4 font-bold uppercase flex items-center gap-2">
                        ${esc(item.name)} 
                        ${item.variantName ? `<span class="bg-slate-100 text-slate-600 px-2 py-0.5 rounded text-[10px] border border-slate-200 whitespace-nowrap ml-1">${esc(item.variantName)}</span> ${item.colorCode ? `<span class="inline-block w-4 h-4 rounded-full border border-slate-300 shadow-sm" style="background-color: ${esc(item.colorCode)};"></span>` : ''}` : ''}
                        ${item.poTime ? `<span class="bg-amber-100 text-amber-700 px-2 py-0.5 rounded text-[10px] font-bold border border-amber-200 whitespace-nowrap ml-1">PO ${esc(item.poTime)}</span>` : ''}
                    </td>
                    <td class="py-4 px-4 text-center font-bold text-lg text-slate-800">${parseFloat(item.qty)}</td>
                    <td class="py-4 px-4 text-center text-slate-500 font-bold uppercase text-xs">${esc(item.unit || 'pcs')}</td>
                    <td class="py-4 px-4 text-center"><div class="w-5 h-5 border-2 border-slate-300 mx-auto rounded shadow-inner"></div></td>
                </tr>`).join('')}
            </tbody>
        </table>
        `;
    }

    // FITUR BARU: cantumkan poin didapat & saldo poin member di invoice/surat jalan
    if (o.pointsEarned > 0 || (o.finalMemberPoints !== undefined && o.finalMemberPoints !== null)) {
        h += `
        <div class="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-5 flex items-center gap-6">
            <div class="w-10 h-10 rounded-xl bg-amber-400 text-white flex items-center justify-center shrink-0"><i class="fa-solid fa-star"></i></div>
            ${o.pointsEarned > 0 ? `<div><p class="text-[10px] font-bold text-amber-500 uppercase tracking-widest">Poin Didapat</p><p class="font-bold text-lg text-amber-700">+${o.pointsEarned}</p></div>` : ''}
            ${(o.finalMemberPoints !== undefined && o.finalMemberPoints !== null) ? `<div><p class="text-[10px] font-bold text-amber-500 uppercase tracking-widest">Saldo Poin Terkumpul</p><p class="font-bold text-lg text-amber-700">${o.finalMemberPoints}</p></div>` : ''}
        </div>`;
    }

    // FITUR BARU: cantumkan info klaim hadiah di invoice & surat jalan
    if (o.claimedReward) {
        const statusTxt = o.claimedReward.status === 'ready' ? 'SERTAKAN BERSAMA PENGIRIMAN INI'
            : o.claimedReward.status === 'waiting_stock' ? 'STOK KOSONG — KIRIM SUSULAN'
            : 'MENUNGGU KONFIRMASI GUDANG';
        h += `
        <div class="bg-violet-50 border-2 border-violet-300 border-dashed rounded-xl p-5 mb-8 flex items-center justify-between gap-4">
            <div class="flex items-center gap-3">
                <div class="w-10 h-10 rounded-xl bg-violet-500 text-white flex items-center justify-center shrink-0"><i class="fa-solid fa-gift"></i></div>
                <div>
                    <p class="text-[10px] font-bold text-violet-500 uppercase tracking-widest">Klaim Hadiah Member (${o.claimedReward.pointsCost} Poin)</p>
                    <p class="font-bold text-base text-violet-800 uppercase">${esc(o.claimedReward.name)}</p>
                    ${o.claimedReward.note ? `<p class="text-xs italic text-violet-600 mt-1">"${esc(o.claimedReward.note)}"</p>` : ''}
                </div>
            </div>
            <span class="text-[10px] font-bold px-3 py-2 rounded-xl bg-violet-600 text-white uppercase tracking-widest text-center shrink-0">${statusTxt}</span>
        </div>`;
    }

    if (o.payment?.method === 'tempo') {
        h += `
        <div class="mt-6 mb-8 border border-pink-200 bg-pink-50 p-4 rounded-xl text-left">
            <h4 class="font-bold text-pink-700 text-xs uppercase tracking-widest mb-1"><i class="fa-solid fa-clock-rotate-left mr-1"></i> Syarat & Ketentuan Pembayaran Tempo</h4>
            <p class="text-[10px] text-pink-600 font-bold leading-relaxed">Maksimal pembayaran sisa tagihan adalah 30 hari (Jatuh Tempo: ${o.payment.tempoDueDate ? new Date(o.payment.tempoDueDate).toLocaleDateString('id-ID') : '-'}). Keterlambatan pembayaran akan dikenakan denda sebesar 1% dari sisa tagihan untuk setiap harinya.</p>
        </div>`;
    }

    // FITUR PRE-ORDER: Info estimasi pengiriman untuk pesanan PO
    const hasPO = o.items.some(i => i.poTime && i.poTime !== '');
    if (hasPO) {
        h += `
        <div class="mt-6 mb-8 border border-amber-200 bg-amber-50 p-4 rounded-xl text-left flex gap-3 items-start">
            <i class="fa-solid fa-clock text-amber-500 mt-0.5 animate-pulse"></i>
            <div>
                <h4 class="font-bold text-amber-700 text-xs uppercase tracking-widest mb-1">Informasi Produk Pre-Order (PO)</h4>
                <p class="text-[10px] text-amber-600 font-bold leading-relaxed">Pesanan ini mengandung produk Pre-Order (PO). Khusus untuk produk berlabel PO akan dikirimkan menyusul (estimasi sesuai label) tanpa dikenakan biaya tambahan.</p>
            </div>
        </div>`;
    }

    // Tanda Tangan Section
    h += `
    <div class="grid grid-cols-3 gap-8 text-center text-sm mt-auto pt-8">
        <div class="flex flex-col items-center">
            <span class="font-bold text-slate-500 mb-20 uppercase tracking-widest text-[10px]">Penerima / Klien</span>
            <div class="w-48 border-b-2 border-slate-800 mb-2"></div>
            <span class="font-bold text-slate-900">${esc(o.customer?.name || 'Nama Terang & TTD')}</span>
        </div>
        <div class="flex flex-col items-center">
            <span class="font-bold text-slate-500 mb-20 uppercase tracking-widest text-[10px]">Sopir / Pengantar</span>
            <div class="w-48 border-b-2 border-slate-800 mb-2"></div>
            <span class="font-bold text-slate-900">Nama Terang & TTD</span>
        </div>
        <div class="flex flex-col items-center">
            <span class="font-bold text-slate-500 mb-20 uppercase tracking-widest text-[10px]">Hormat Kami,</span>
            <div class="w-48 border-b-2 border-slate-800 mb-2"></div>
            <span class="font-bold text-slate-900 uppercase">${esc(appData.store.name)}</span>
        </div>
    </div>
    `;

    setH('doc-paper-content', h);
    const mDoc = el('doc-preview-modal');
    if (mDoc && mDoc.classList.contains('hidden')) pushModalHistory('docPreview');
    show('doc-preview-modal');
    setTimeout(() => {
        el('doc-preview-modal').classList.remove('opacity-0');
        el('doc-preview-modal-box').classList.remove('scale-95');
        fitDocPreview();
    }, 10);
};

// FITUR RESPONSIVE: Hitung skala tampilan dokumen A4 (794px) agar pas otomatis
// di layar HP, Tablet, maupun PC tanpa merusak ukuran asli untuk Export/Print.
const fitDocPreview = () => {
    const area = el('doc-paper-scroll-area');
    const content = el('doc-paper-content');
    const wrapper = el('doc-paper-wrapper');
    if (!area || !content || !wrapper) return;

    const PAPER_W = 794;
    const safeGap = 16; // jarak aman kiri-kanan agar tidak mepet di layar kecil
    const availW = area.clientWidth - safeGap;
    const scale = Math.min(1, availW / PAPER_W);

    content.style.transform = `translateX(-50%) scale(${scale})`;
    wrapper.style.height = (content.offsetHeight * scale) + 'px';
};

// Sesuaikan ulang skala saat layar di-rotasi / resize / ganti perangkat
window.addEventListener('resize', () => {
    const m = el('doc-preview-modal');
    if (m && !m.classList.contains('hidden')) fitDocPreview();
});

window.closeDocPreviewModal = (fH=false) => {
    requestCloseModal('docPreview', fH, () => {
        el('doc-preview-modal').classList.add('opacity-0');
        el('doc-preview-modal-box').classList.add('scale-95');
        setTimeout(() => hide('doc-preview-modal'), 300);
    });
};

// Fitur Print Standar Browser untuk PC (Sudah Diperbaiki)
window.printDocA4 = () => {
    const p = el('doc-paper-content').innerHTML;
    const printWindow = window.open('', '_blank');
    
    if(!printWindow) {
        showToast("Gagal membuka tab baru. Izinkan pop-up di browser Anda!");
        return;
    }
    
    printWindow.document.write(`
        <html>
        <head>
            <title>Cetak Dokumen</title>
            <script src="https://cdn.tailwindcss.com"><` + `/script>
            <style>
                @page { size: A4 portrait; margin: 10mm; }
                body { font-family: 'Plus Jakarta Sans', system-ui, sans-serif; background: #fff; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
            </style>
        </head>
        <body onload="setTimeout(() => { window.print(); }, 800)">
            <div class="w-full max-w-[794px] mx-auto p-4 text-sm leading-relaxed text-slate-900">
                ${p}
            </div>
        </body>
        </html>
    `);
    printWindow.document.close();
};

// --- Logika Penyimpanan File Pintar (Gambar & PDF) - METODE CLONE ISOLASI (DEBUGGED) ---
window.exportDocFile = async (mode) => {
    if(isSaving) return; 
    isSaving = true;
    sLoad(mode === 'image' ? 'Membuat Gambar HD...' : 'Menyusun PDF...');
    
    // FITUR BARU (PERFORMA): muat html2canvas & jsPDF cuma saat admin benar-benar export dokumen
    try {
        await Promise.all([
            ensureScriptLoaded('https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js', () => typeof html2canvas !== 'undefined'),
            ensureScriptLoaded('https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js', () => typeof window.jspdf !== 'undefined' || typeof window.jsPDF !== 'undefined')
        ]);
    } catch(e) {
        hLoad(); isSaving = false;
        showToast('Gagal memuat modul export. Cek koneksi internet Anda.');
        return;
    }
    
    try {
        const originalPaper = el('doc-paper-content');
        
        // 1. Buat Wadah Rahasia di luar layar (Aman dari efek Modal / CSS Fixed)
        const cloneWrapper = document.createElement('div');
        cloneWrapper.style.position = 'absolute';
        cloneWrapper.style.top = '-9999px'; 
        cloneWrapper.style.left = '-9999px'; 
        cloneWrapper.style.width = originalPaper.offsetWidth + 'px'; 
        
        // ---> INJEKSI ANTI-TRANSPARAN <---
        cloneWrapper.style.height = 'max-content'; // Paksa wadah melar ke bawah
        cloneWrapper.style.backgroundColor = '#ffffff'; // Garansi Background 100% Putih Solid
        cloneWrapper.style.overflow = 'visible';
        
        // 2. Gandakan dokumen ke wadah rahasia
        const clone = originalPaper.cloneNode(true);
        clone.id = 'doc-clone-printing';
        clone.style.margin = '0 auto';
        clone.style.boxShadow = 'none'; 

        // FIX (AKAR MASALAH): #doc-paper-content aslinya punya class Tailwind
        // 'absolute top-0 left-1/2' (sengaja "melayang" di atas wrapper-nya yang
        // berukuran 0 tinggi, ditampilkan via overflow-auto pada parent). Class ini
        // ikut ter-copy oleh cloneNode(true). Karena clone tetap position:absolute,
        // dia DIKELUARKAN dari normal flow, sehingga cloneWrapper (height:'max-content')
        // menganggap tidak ada konten sama sekali -> tinggi terhitung 0. Inilah yang
        // bikin html2canvas memotret kanvas 0x0 -> jsPDF error "Invalid argument
        // passed to jsPDF.scale". Solusinya: lepas posisi absolute pada clone agar
        // dia kembali ke normal flow dan punya ukuran nyata.
        clone.classList.remove('absolute', 'top-0', 'left-1/2');
        clone.style.position = 'static';
        clone.style.left = 'auto';
        clone.style.top = 'auto';
        clone.style.transform = 'none'; // tidak perlu translateX(-50%) lagi, sudah dicenter via margin auto
        
        // ---> INJEKSI TINGGI MAKSIMAL <---
        clone.style.height = 'max-content'; 
        clone.style.maxHeight = 'none'; 
        clone.style.overflow = 'visible';
        clone.classList.add('h-max'); // Paksa class Tailwind pelindung
        
        cloneWrapper.appendChild(clone);
        document.body.appendChild(cloneWrapper);

        // FIX: tunggu SEMUA gambar di dalam clone benar-benar selesai dimuat
        // (logo, dsb). Sebelumnya cuma delay 300ms tetap, yang kadang tidak cukup
        // di koneksi/device lambat sehingga html2canvas memotret elemen yang belum
        // sempurna ter-render -> menghasilkan canvas 0x0 -> imgData rusak ("data:,")
        // -> jsPDF.addImage gagal dengan "Invalid argument passed to jsPDF.scale".
        const imgsInClone = Array.from(clone.querySelectorAll('img'));
        await Promise.all(imgsInClone.map(img => {
            if (img.complete) return Promise.resolve();
            return new Promise(resolve => {
                img.addEventListener('load', resolve, { once: true });
                img.addEventListener('error', resolve, { once: true }); // jangan sampai macet kalau 1 gambar gagal
            });
        }));

        // Beri jeda kecil tambahan agar browser selesai melakukan reflow/paint
        await new Promise(r => setTimeout(r, 300));

        // FIX: validasi ukuran wadah SEBELUM dipotret. Kalau 0, hentikan lebih awal
        // dengan pesan yang jelas, daripada lanjut dan baru meledak di jsPDF nanti.
        if (cloneWrapper.offsetWidth === 0 || cloneWrapper.offsetHeight === 0) {
            throw new Error(`Dokumen belum sepenuhnya ter-render (ukuran ${cloneWrapper.offsetWidth}x${cloneWrapper.offsetHeight}). Coba lagi.`);
        }

        // 3. Tangkap Gambar dari Wadah Rahasia (Resolusi HD x2)
        // Kita memfoto cloneWrapper (bukan clone-nya saja) agar background putihnya ikut terfoto!
        const options = { 
            scale: 2, 
            useCORS: true, 
            backgroundColor: "#ffffff",
            width: cloneWrapper.offsetWidth,
            height: cloneWrapper.offsetHeight, 
            windowWidth: cloneWrapper.offsetWidth,
            windowHeight: cloneWrapper.offsetHeight
        };
        
        const canvas = await html2canvas(cloneWrapper, options);

        // 4. Bersihkan Wadah Rahasia dari sistem
        document.body.removeChild(cloneWrapper);

        // FIX: validasi hasil canvas SEBELUM dipakai. Ini pertahanan terakhir
        // untuk mencegah error "Invalid argument passed to jsPDF.scale" / CSP
        // "Connecting to 'data:,'" yang terjadi kalau canvas.width/height = 0.
        if (!canvas || canvas.width === 0 || canvas.height === 0) {
            throw new Error('Gagal menangkap gambar dokumen (canvas kosong).');
        }

        const fileName = `${currentDocType.toUpperCase()}_${cVOrd}`;
        
        if (mode === 'image') {
            const link = document.createElement('a');
            link.download = `${fileName}.png`;
            link.href = canvas.toDataURL('image/png', 1.0);
            link.click();
            showToast("Gambar Berhasil Disimpan!");
        } else {
            const imgData = canvas.toDataURL('image/jpeg', 1.0);

            // FIX: pastikan data URL valid (bukan "data:," yang rusak) sebelum
            // dikirim ke jsPDF, supaya tidak memicu fallback fetch yang diblokir CSP.
            if (!imgData || !imgData.startsWith('data:image/jpeg;base64,')) {
                throw new Error('Data gambar hasil export tidak valid.');
            }
            
            // Panggil alat pembuat PDF (Otomatis mendeteksi versi script)
            const jsPDF = (window.jspdf && window.jspdf.jsPDF) ? window.jspdf.jsPDF : window.jsPDF;
            
            // 5. Hitung Kertas Dinamis (Lebar A4, Tinggi menyesuaikan jumlah produk!)
            const pdfWidth = 210; 
            const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

            // FIX: validasi pdfHeight harus berupa angka positif yang valid,
            // sumber utama error "jsPDF.scale" sebelumnya adalah pdfHeight = NaN.
            if (!isFinite(pdfHeight) || pdfHeight <= 0) {
                throw new Error('Ukuran halaman PDF tidak valid (tinggi: ' + pdfHeight + ').');
            }
            
            const pdf = new jsPDF({
                orientation: 'p',
                unit: 'mm',
                format: [pdfWidth, pdfHeight]
            });
            
            pdf.addImage(imgData, 'JPEG', 0, 0, pdfWidth, pdfHeight);
            pdf.save(`${fileName}.pdf`);
            showToast("File PDF Berhasil Disimpan!");
        }
    } catch (err) {
        console.error("Export Error: ", err);
        showToast(err && err.message ? `Gagal: ${err.message}` : "Gagal memproses dokumen.");
        
        // Pembersihan darurat jika terjadi error
        const emergencyClone = document.getElementById('doc-clone-printing');
        if (emergencyClone && emergencyClone.parentElement) {
            document.body.removeChild(emergencyClone.parentElement);
        }
    } finally {
        hLoad();
        isSaving = false;
    }
};





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
window.defaultFbC = defaultFbC;
window.fbC = fbC;
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












