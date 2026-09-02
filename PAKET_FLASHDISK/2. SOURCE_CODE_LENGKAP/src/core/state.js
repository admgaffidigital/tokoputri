/**
 * ============================================================
 * GLOBAL STATE
 * Semua variabel state utama aplikasi terpusat di sini.
 * Impor dari file ini jika membutuhkan data state bersama.
 * ============================================================
 */

// ─── Default App Data Structure ──────────────────────────────
/**
 * Struktur data default toko. Semua field di sini adalah nilai
 * awal yang aman; akan di-override oleh data dari Firestore
 * setelah `loadAppData()` berhasil.
 */
export const defApp = {
    store: {
        name: "Nama Toko Anda", slogan: "Slogan Toko", logo: "fa-store",
        wa: "", address: "", lat: "", lng: "", costPerKm: 0,
        isDeliveryEnabled: true, isPickupEnabled: true,
        allProductsIcon: "", allBrandsIcon: "",
        categoryStyle: "text", brandStyle: "image",
        showCategories: true, showBrands: true,
        themeColor: "#10b981", uiTheme: "emerald",
        bgStyle: "hero_arch",   // "hero_arch" | "geometric_3d" | "diagonal_skew" | "dual_tone" | "minimalist"
        bgCustomUrl: "",        // URL gambar wallpaper kustom (opsional)
        useStock: false,
        ppnEnabled: false,
        ppnType: "exclusive",   // "exclusive" | "inclusive"
        ppnRate: 11,
        terms: "",
        privacy: ""
    },
    payment:  { qrisUrl: "" },
    config:   { gasUrl: "" },
    banks: [], banners: [], categories: [], brands: [], products: [],
    vouchers: [], colors: [], rewards: [], faqs: [], customers: [],
    taxSettings: {
        companyName: "", npwp: "",
        taxScheme: "umkm_final",  // 'umkm_final' | 'badan_normal' | 'custom'
        customTaxRate: 0.5,
        monthlyExpenses: {},
        balanceSheet: { kas: 0, piutang: 0, hutang: 0, modalDisetor: 0 }
    }
};

// ─── App State ───────────────────────────────────────────────
// Data utama toko (dari Firestore, di-merge dengan defApp)
export let appData = JSON.parse(JSON.stringify(defApp));

// Data keranjang, wishlist, dan pesanan (dari localStorage)
export let cart      = [];
export let wishlist  = [];
export let myOrders  = [];

// Informasi pelanggan saat checkout
export let cust = {
    name: '', address: '', lat: null, lng: null,
    deliveryMethod: 'delivery', distance: 0, note: '', wa: ''
};

// State program loyalitas member
export let currentMember  = null;   // { id, name, phone, points } | null
export let selectedReward = null;   // hadiah yang dipilih untuk ditukar poin
export let memberCheckTimer = null;

// ─── UI State ────────────────────────────────────────────────
// Filter & navigasi katalog
export let aCat   = 'Semua Produk';
export let aBrand = 'Semua Merek';
export let sQ     = '';
export let cSort  = 'newest';
export let cView  = 'grid';
export let cPage  = 1;
export let iPP    = 12;

// State admin panel
export let cTab  = 'orders';
export let aSq   = '';
export let eId   = null;

// State produk yang sedang dilihat / di-modal
export let cProd = null;
export let cVar  = 0;
export let tVars = [];
export let tWhol = [];
export let tSpec = [];
export let cQty  = 1;
export let oMods = [];

// State orders & reviews admin
export let aOrdLst  = null;
export let aCustLst = null;
export let aRevLst  = null;
export let gOrds    = [];
export let gReviews = [];
export let cVOrd    = null;
export let vouch    = null;
export let isSaving = false;
export let bannerTmr = null;

// Filter tampilan ulasan di admin
export let reviewFilterMode = 'all';

// Filter periode laporan terakhir dipilih admin
export let lastReportPeriod = 'today';

// Timer toast
export let toastT = null;

// ─── State Setters ───────────────────────────────────────────
// Fungsi-fungsi ini diperlukan karena ES Module mengekspor referensi,
// bukan binding langsung (let tidak bisa diassign dari luar file).

export const setAppData       = v => { appData = v; };
export const setCart          = v => { cart = v; };
export const setWishlist      = v => { wishlist = v; };
export const setMyOrders      = v => { myOrders = v; };
export const setCust          = v => { cust = v; };
export const setCurrentMember = v => { currentMember = v; };
export const setSelectedReward= v => { selectedReward = v; };
export const setACat          = v => { aCat = v; };
export const setABrand        = v => { aBrand = v; };
export const setSQ            = v => { sQ = v; };
export const setCSort         = v => { cSort = v; };
export const setCView         = v => { cView = v; };
export const setCPage         = v => { cPage = v; };
export const setCTab          = v => { cTab = v; };
export const setASq           = v => { aSq = v; };
export const setEId           = v => { eId = v; };
export const setCProd         = v => { cProd = v; };
export const setCVar          = v => { cVar = v; };
export const setTVars         = v => { tVars = v; };
export const setTWhol         = v => { tWhol = v; };
export const setTSpec         = v => { tSpec = v; };
export const setCQty          = v => { cQty = v; };
export const setOMods         = v => { oMods = v; };
export const setGOrds         = v => { gOrds = v; };
export const setGReviews      = v => { gReviews = v; };
export const setCVOrd         = v => { cVOrd = v; };
export const setVouch         = v => { vouch = v; };
export const setIsSaving      = v => { isSaving = v; };
export const setToastT        = v => { toastT = v; };
export const setReviewFilterMode  = v => { reviewFilterMode = v; };
export const setLastReportPeriod  = v => { lastReportPeriod = v; };
export const setAOrdLst       = v => { aOrdLst = v; };
export const setACustLst      = v => { aCustLst = v; };
export const setARevLst       = v => { aRevLst = v; };

