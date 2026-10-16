/**
 * ============================================================
 * KONFIGURASI LOG PEMBARUAN SISTEM (CHANGELOG)
 * Menyimpan riwayat rilis resmi bawaan sistem dan helper
 * untuk menggabungkan data statis dengan log dinamis Firestore.
 * 
 * ATURAN ROLLING 5-LOG TERBARU (ANTI-KODE SAMPAH & ANTI-SPAM):
 * DEFAULT_CHANGELOG dibatasi secara ketat HANYA menyimpan 5 entri rilis
 * terkini (${top5[0]?.version} s.d. ${top5[top5.length - 1]?.version}). Setiap rilis baru ditambahkan di posisi
 * teratas dan entri ke-6 dipangkas agar berkas tetap super ringan (~8KB vs ~425KB),
 * mengeliminasi kode sampah, dan mencegah spam riwayat di antarmuka website.
 * ============================================================
 */

export const MAX_CHANGELOG_LIMIT = 5;

export const DEFAULT_CHANGELOG = [
    {
        "id": "log-1-18-01",
        "version": "v1.18.1",
        "date": "2026-10-16",
        "title": "Harmonisasi Presisi UI/UX Native App: Redesain Kartu Reward Bersih, Touch Target Ergonomis Pesanan & Wishlist, Margin Bento Simetris & Live Zero-404",
        "category": "feature",
        "badge": "Presisi UI/UX Native App & Live Stability v1.18.1",
        "items": [
            "Redesain Kartu Produk, Flash Sale & Reward Presisi Full Frame: Menghilangkan badge hadiah gratis pada kartu reward agar kanvas murni bersih, menyempurnakan foto produk pada katalog, flash sale, dan reward menjadi presisi 1:1 full frame edge-to-edge tanpa padding menjorok, serta menyelaraskan tema dark mode (slate-900 / slate-950) monolitik yang mewah dan konsisten.",
            "Standardisasi Touch Target Ergonomis Pesanan & Wishlist: Meningkatkan ukuran tombol aksi interaktif 'Detail' & 'Status' pada riwayat pesanan serta tombol 'Beli' & 'Hapus' pada daftar keinginan (wishlist) menjadi min-height 38-40px dengan padding lapang dan font tebal yang nyaman untuk navigasi jempol di smartphone.",
            "Harmonisasi Margin Bento Storefront Universal: Menyelaraskan seluruh ritme vertikal antar seksi etalase toko (Header, Banner Hero, Flash Sale, Kategori, Rekomendasi Produk, dan Footer Bento Hub) dengan jarak simetris mt-4 sm:mt-5 yang konsisten dan bebas tumpang-tindih.",
            "Resolusi Zero-404 Aset Live CDN & Stabilitas Modul: Memverifikasi integritas seluruh dynamic chunk modules (module-member, module-print, module-admin, dll.) pada live CDN Vercel agar selalu merespons 200 OK tanpa kendala modul terputus saat navigasi.",
            "Multi-Channel Distribution v1.18.1 (Android versionCode 11801)."
        ]
    },
    {
        "id": "log-1-18-00",
        "version": "v1.18.0",
        "date": "2026-10-15",
        "title": "Pustaka Database Produk Bersama & Multi-Varian: Impor Selektif Per-Produk, Kustomisasi Harga Modal & Jual Lokal Toko, Bento Grid UI & Pustaka Swatch Warna Cat",
        "category": "feature",
        "badge": "Pustaka Database Bersama & Multi-Varian v1.18.0",
        "items": [
            "Pustaka Master Produk Bersama (Global Template Library): Menghadirkan pustaka induk berisi 25+ produk material bangunan & alat teknik standar Indonesia (Cat & Pelapis, Semen & Mortar, Pipa PVC, Besi & Baja, Perkakas Listrik, Baut SDS, Sanitari, dan Kelistrikan) lengkap dengan spesifikasi teknis, merek ternama, dan paket multi-varian siap pakai untuk mempercepat klien baru mengisi katalog toko dalam 5 menit tanpa perlu mengetik dari awal.",
            "Impor Selektif Per-Produk (Anti-Banjir & Anti-Katalog Bercampur): Sistem impor mandiri 1-per-1 (atau per-kategori) yang menyalin master template ke katalog lokal toko (appData.products). Mencegah tercampurnya katalog toko dengan barang kosong dan memastikan toko hanya menjual barang yang benar-benar ada stok fisiknya.",
            "Drawer Pratinjau & Kustomisasi Varian Interaktif: Modal drawer Bento yang memungkinkan klien mengatur harga jual toko, modal beli (HPP), dan stok awal rak/gudang secara mandiri, serta memilih checklist varian ukuran/warna yang dijual.",
            "Deteksi Status Cerdas (Smart Badging): Menampilkan status badge '✅ Ada di Toko' jika produk master sudah terimpor ke katalog toko dan '📥 Siap Impor' jika belum, mencegah terjadinya duplikasi barang.",
            "Two-Way Cloud Sharing (Simpan Produk Toko ke Pustaka Master): Tombol 1-klik di tabel produk admin untuk menyimpan produk kustom lokal menjadi master template bersama yang dapat dipakai ulang oleh cabang atau klien lain.",
            "Sub-Tab Database Swatch Warna Cat Terpadu: Mengintegrasikan katalog kode warna HEX cat yang sudah ada ke dalam sub-tab terdedikasi dengan antarmuka Bento Grid modern, menjamin kompatibilitas 100%.",
            "Integritas Penuh Style Theme Toko & Harmonisasi Kontainer: Menjaga keaslian seluruh fitur Style Theme Toko (Minimalist, Hero Arch kanopi dome, Aurora Glow, Tech Grid, dan Industrial) agar tetap dapat diganti bebas sesuai selera klien di CMS Admin, dengan grid kontainer dalam yang tetap 100% sejajar simetris dengan Banner Hero, Kategori, Produk, dan Footer Bento Hub.",
            "Harmonisasi Proporsional Universal Antarmuka Aplikasi: Menyelaraskan seluruh kontainer halaman (Etalase, Keranjang, Checkout, Pembayaran, Riwayat Pesanan, Favorit, Q&A) pada skala universal px-2 sm:px-6 lg:px-8 max-w-7xl 2xl:max-w-[1440px] mx-auto, standardisasi tombol squircle 1rem (16px) dengan touch target ergonomis min-height 44px (.btn-primary & .btn-solid), harmonisasi padding modular bento card (p-4 di smartphone, p-6 di desktop), penyelarasan proporsi kartu listview katalog (p-2.5 sm:p-3.5 gap-2.5 sm:gap-4), serta font minimal 16px pada seluruh kolom isian input di mobile anti auto-zoom.",
            "Harmonisasi Tipografi & Kontras Kolom Pencarian Bertema: Menyelaraskan seluruh teks kolom pencarian (header mobile, etalase desktop, kasir POS, admin katalog, stok opname, buku kas tempo, dll.) menggunakan jenis huruf tema toko Archivo berbobot tebal (font-bold 700) dengan letter-spacing -0.015em, meningkatkan kontras placeholder menjadi slate-600/slate-300 yang tajam dan tidak pudar/kusam, serta menyelaraskan aksen ikon kaca pembesar dan tombol chiclet SCAN dengan warna tema toko dinamis (var(--color-primary)).",
            "Multi-Channel Distribution v1.18.0 (Android versionCode 11800)."
        ]
    },
    {
        "id": "log-1-17-09",
        "version": "v1.17.9",
        "date": "2026-10-15",
        "title": "Resolusi Paripurna Stabilitas Keyboard Android pada Kolom Pencarian: Zero-Shift Geometric, Native Placeholder & WebView Zoom Lock",
        "category": "feature",
        "badge": "Stabilitas Keyboard Kolom Pencarian v1.17.9",
        "items": [
            "Resolusi Total Keyboard Menutup Sendiri pada Kolom Pencarian: Mengeliminasi fenomena virtual keyboard Android yang membuka-menutup sendiri (mental) saat menyentuh search bar dengan menerapkan font size standar emas minimal 16px (text-[16px]) guna mematikan fitur auto-zoom/auto-pan agresif Chromium WebView.",
            "Eliminasi CSS Transform Shift pada Header Search Capsule: Menghapus transformasi transform: translateY(-1px) dan transisi gerakan fisik saat focus-within pada wadah kapsul pencarian sehingga bounding box kursor tetap stabil 100% dan koneksi input IME Android tidak dibatalkan.",
            "Placeholder Native HTML & Ticker Ringan Zero-Reflow: Mengganti elemen animasi rolling text bertumpuk yang memicu layout thrashing (offsetWidth reflow) menjadi manipulasi atribut placeholder native HTML langsung pada input, menjamin kursor bebas jitter dan thread GPU tenang saat mengetik.",
            "Lebar Flexbox Input Stabil (Zero Layout Shift): Menghilangkan pergantian class hidden pada tombol clear pencarian dan menggantinya dengan transisi opacity, menjamin lebar input tidak pernah menyusut mendadak saat karakter pertama diketik.",
            "Lock WebView Zoom 100% pada Android Native Layer: Mengonfigurasi WebView settings (setTextZoom 100% dan setSupportZoom false) pada MainActivity Android guna menjamin tidak ada pergeseran skala viewport saat keyboard terangkat.",
            "Multi-Channel Distribution v1.17.9 (Android versionCode 11709)."
        ]
    },
    {
        "id": "log-1-17-08",
        "version": "v1.17.8",
        "date": "2026-10-15",
        "title": "Resolusi Komprehensif Tombol Kembali & Tutup Modal, Navigasi Deterministik Seketika & Stabilitas Keyboard Native Android",
        "category": "feature",
        "badge": "Navigasi Deterministik & Keyboard Native v1.17.8",
        "items": [
            "Navigasi Kembali In-App Deterministik Seketika (1-Klik Pasti Kembali): Mengeliminasi tombol kembali yang macet di web dan aplikasi Android dengan mengganti ketergantungan rapuh window.history.back() pada tombol in-app header (Keranjang, Checkout, Pembayaran, Pesanan, Favorit, FAQ, dan Admin Login) menjadi navigasi deterministik terstruktur changeView(targetView, true) seketika pada sentuhan pertama.",
            "Resolusi Konflik Double-Resize Keyboard Android (Native Window Resizing): Mengubah konfigurasi plugin Keyboard Capacitor dari 'resize: body' menjadi 'resize: native'. Eliminasi JavaScript layout thrashing pada document.body menuntaskan 100% masalah virtual keyboard Android (Gboard, Samsung Keyboard, Xiaomi) yang membuka-menutup sendiri (mental) saat pertama kali mengetik.",
            "Sanitasi Peta Modal & Resolusi False-Positive factoryReset: Membersihkan elemen modal-factory-reset-box dari MODAL_ELEMENT_MAP agar status modal tertutup tidak lagi salah dilaporkan sebagai terbuka (isModalOpenInDOM) yang sebelumnya memblokir tombol kembali di halaman web.",
            "Proteksi Sinkronisasi History URL Produk (Zero Navigation Lock): Menghapus eksekusi history.replaceState sinkron yang bertabrakan dengan in-flight history.back() saat menutup modal produk (closeProductModal) di engine Chromium/WebKit.",
            "Multi-Channel Distribution v1.17.8 (Android versionCode 11708)."
        ]
    },
    {
        "id": "log-1-17-07",
        "version": "v1.17.7",
        "date": "2026-10-15",
        "title": "Pusat Reset ke Setelan Awal (Clean Sweep & Data Purge), Triple-Guard Security, Auto-Backup Darurat & Opsi Pembersihan Transaksi",
        "category": "security",
        "badge": "Setelan Awal & Triple-Guard Security v1.17.7",
        "items": [
            "Fitur Reset ke Setelan Awal Eksklusif Pemilik Toko (Owner-Only): Menghadirkan pusat reset data dan pembersihan aplikasi terpadu di menu Pengaturan Toko dan Pusat Cadangan Data yang hanya dapat diakses oleh akun Pemilik (Owner).",
            "Dua Opsi Mode Pembersihan Data: Opsi 1 (Hanya Transaksi & Operasional) membersihkan order, transaksi kasir, log shift, kas laci, pengeluaran, piutang tempo, RMA, dan log opname dengan tetap mempertahankan master produk, stok, kategori, dan supplier; Opsi 2 (Reset Total ke Setelan Awal) membersihkan seluruh transaksi + katalog produk + varian + banner + data pelanggan menjadi fresh bersih seperti baru.",
            "Triple-Guard Security Anti-Kecelakaan Data: Proteksi tiga lapis mencakup: Unduh Otomatis Cadangan Darurat (Emergency Safety Backup JSON) sebelum penghapusan, konfirmasi ketik frasa rahasia 'RESET KE SETELAN AWAL', serta persetujuan risiko via checkbox interaktif.",
            "Proteksi Kedaulatan Lisensi & Kredensial Owner: Menjamin status langganan software (freshmart_licenses) dan akun login Pemilik Toko (ADMIN_UID) 100% aman dan tidak terhapus.",
            "Multi-Channel Distribution v1.17.7 (Android versionCode 11707)."
        ]
    }
];

/**
 * Mengurai string versi (misal 'v1.8.5' atau '1.8.5') menjadi tuple [major, minor, patch]
 * @param {String} vStr 
 * @returns {Array<number>}
 */
export const parseSemver = (vStr) => {
    if (!vStr) return [0, 0, 0];
    const match = String(vStr).match(/(\d+)\.(\d+)\.(\d+)/);
    if (!match) return [0, 0, 0];
    return [parseInt(match[1], 10), parseInt(match[2], 10), parseInt(match[3], 10)];
};

/**
 * Pembanding semver descending untuk sort (versi lebih tinggi di depan)
 * @param {String} vA 
 * @param {String} vB 
 * @returns {number}
 */
export const compareSemverDesc = (vA, vB) => {
    const [majA, minA, patA] = parseSemver(vA);
    const [majB, minB, patB] = parseSemver(vB);
    if (majB !== majA) return majB - majA;
    if (minB !== minA) return minB - minA;
    return patB - patA;
};

/**
 * Menggabungkan changelog bawaan dengan changelog kustom dari Firestore
 * @param {Object} appData 
 * @param {number|null} maxLimit Batas maksimal log yang dikembalikan (default: 5)
 * @returns {Array} Daftar log terurut dari versi terbaru
 */
export const getCombinedChangelog = (appData, maxLimit = MAX_CHANGELOG_LIMIT) => {
    const dynamicLogs = (appData && Array.isArray(appData.changelog)) ? appData.changelog : [];
    const deletedIds = new Set((appData && Array.isArray(appData.deletedChangelogIds)) ? appData.deletedChangelogIds : []);
    
    // Gabungkan dinamis di atas, bawaan di bawah, cegah duplikat id & saring log yang telah dihapus
    const dynamicIds = new Set(dynamicLogs.map(l => l.id || l.version));
    const staticFiltered = DEFAULT_CHANGELOG.filter(l => 
        !dynamicIds.has(l.id) && 
        !dynamicIds.has(l.version) && 
        !deletedIds.has(l.id) && 
        !deletedIds.has(l.version)
    );
    
    const activeDynamicLogs = dynamicLogs.filter(l => 
        !deletedIds.has(l.id) && 
        !deletedIds.has(l.version)
    );
    
    const combined = [...activeDynamicLogs, ...staticFiltered];
    
    // Urutkan berdasarkan tanggal (terbaru di atas).
    // Jika tanggal sama, urutkan berdasarkan semver versi (versi lebih tinggi selalu di atas).
    const sorted = combined.sort((a, b) => {
        const da = new Date(a.date || '2026-01-01').getTime();
        const db = new Date(b.date || '2026-01-01').getTime();
        if (db !== da) return db - da;
        return compareSemverDesc(a.version, b.version);
    });

    // Batasi maksimum log (default: 5 rilis terbaru) untuk mencegah spam di UI
    return (typeof maxLimit === 'number' && maxLimit > 0) ? sorted.slice(0, maxLimit) : sorted;
};

/**
 * Mendapatkan nomor versi terbaru yang aktif
 * Menjamin tidak pernah tertahan pada versi lama meskipun ada log dinamis atau tanggal kembar
 * @param {Object} appData 
 * @returns {String} Contoh: 'v1.10.91'
 */
export const getLatestVersion = (appData) => {
    const defaultLatest = DEFAULT_CHANGELOG[0]?.version || 'v1.18.1';
    const logs = getCombinedChangelog(appData, null);
    if (!logs || logs.length === 0) return defaultLatest;
    
    // Cari versi tertinggi secara semver di antara seluruh log aktif
    let highest = logs[0].version || defaultLatest;
    for (const log of logs) {
        if (log.version && compareSemverDesc(log.version, highest) < 0) {
            highest = log.version;
        }
    }
    
    // Pastikan versi yang tampil minimal setara dengan rilis bawaan terbaru
    if (compareSemverDesc(defaultLatest, highest) < 0) {
        highest = defaultLatest;
    }
    return highest;
};
