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
        "id": "log-1-18-08",
        "version": "v1.18.8",
        "date": "2026-10-19",
        "title": "Arsitektur Offline PWA Service Worker, Fluid Native View Transitions, Layout Tablet POS Kasir & Screen WakeLock",
        "category": "feature",
        "badge": "Offline PWA, View Transitions & POS Tablet v1.18.8",
        "items": [
            "Enterprise Offline PWA Service Worker Engine: Implementasi public/sw.js modern dengan strategi caching komprehensif (Network-First dengan 3s timeout & cache fallback untuk navigasi HTML, Stale-While-Revalidate untuk aset statis JS/CSS/WebP, Cache-First untuk Google Fonts & FontAwesome, auto-purge cache lama, dan pengecualian Firestore API) yang memungkinkan aplikasi dibuka dan berfungsi 100% offline seketika (0ms latency).",
            "PWA 1-Click Install Prompt Capture: Menangkap event beforeinstallprompt pada index.html dan menyediakan handler native window.promptPWAInstall() untuk pengalaman instalasi PWA mulus di Android, Chrome, Edge, dan iOS.",
            "Fluid Native View Transitions Engine: Transisi layar antar-view berbasis GPU hardware acceleration (translate3d, will-change, scale 0.985 -> 1.0) dengan deteksi arah navigasi maju (viewEnterForward) dan mundur (viewEnterBackward) serta transisi modal scale lift, dilengkapi pematuhan preferensi aksesibilitas prefers-reduced-motion.",
            "Ergonomi Antarmuka Tablet POS Kasir (Split Workspace): Mengaktifkan tata letak split-screen side-by-side (katalog barang 58% + keranjang belanja 42%) secara langsung pada layar tablet (iPad, Galaxy Tab, dsb. >= 768px), membebaskan kasir dari keharusan membuka drawer berulang kali.",
            "Screen WakeLock API Controller: Menjaga layar tablet dan smartphone kasir tetap menyala (anti-sleep) secara otomatis saat terminal POS Kasir aktif dan melepaskan lock saat keluar, menjamin kelancaran antrean kasir tanpa gangguan layar mati.",
            "Multi-Channel Distribution v1.18.8 (Android versionCode 11808)."
        ]
    },
    {
        "id": "log-1-18-07",
        "version": "v1.18.7",
        "date": "2026-10-18",
        "title": "Pembaruan Antarmuka Full Native App Universal, Shimmer Skeleton Engine, Bento Empty State & Multi-Varian Flash Sale",
        "category": "feature",
        "badge": "Full Native App Universal & Shimmer Engine v1.18.7",
        "items": [
            "Transformasi Antarmuka Full Native App Universal: Mengeliminasi total tampilan klasik bawaan web browser di seluruh aplikasi (Etalase, Detail Produk, Kasir POS, CMS Admin, dan Member Rewards) dengan menerapkan Universal Theme Micro-Scrollbar 6px slim pill adaptif dark/light, Brand Theme Text Selection, dan sentuhan visual ergonomis di smartphone, tablet, maupun desktop.",
            "Theme-Aware Shimmer Skeleton Engine: Menggantikan seluruh indikator loading berputar (spinner) dan teks polos dengan Shimmer Skeleton interaktif beraksen warna tema toko dinamis pada etalase produk, ulasan pelanggan, shift kasir POS, dan mutasi poin reward VIP.",
            "Bento Island Zero-Result & Smart Action Chips: Menghadirkan kartu Bento Empty State modern dengan ambient glow dan tombol aksi cerdas terpadu (Reset Filter 1-klik, Tanya Stok via WhatsApp, Buka Scanner Kamera POS, dan Tambah Master Data Baru di CMS Admin).",
            "Harmonisasi Proporsionalitas Flash Sale & Hadiah Poin: Tombol teks kompak 'Tukar Hadiah' dan 'Beli Kilat' (32px mobile / 34px desktop) dengan tata letak poin mandiri di atas tombol, bebas sempit, anti-meluber, serta dukungan promo Flash Sale multi-varian.",
            "Multi-Channel Distribution v1.18.7 (Android versionCode 11807)."
        ]
    },
    {
        "id": "log-1-18-02",
        "version": "v1.18.2",
        "date": "2026-10-17",
        "title": "Pengelolaan Master Preset (Hapus & Pulihkan), Native Pull-to-Refresh CMS Admin & Standarisasi Universal Form Input & Tombol",
        "category": "feature",
        "badge": "Master Preset, Pull-to-Refresh & UI Harmony v1.18.2",
        "items": [
            "Fitur Hapus & Pulihkan Master Preset (Database Produk Bersama): Menghadirkan kapabilitas hapus dan pulihkan template produk bersama (custom maupun bawaan) dengan proteksi konfirmasi aman, penanda status terhapus, panel filter pemulihan, dan auto-sinkronisasi counter realtime di CMS Admin.",
            "Native Pull-to-Refresh & Tombol Segarkan 1-Klik CMS Admin: Pengalaman navigasi smartphone tarik ke bawah untuk memuat ulang data etalase dan CMS Admin secara instan dengan indikator putar visual dan getaran haptic feedback, didukung tombol 'Segarkan' 1-klik di header admin desktop & mobile.",
            "Universal Button & Form Input Consistency Harmony Engine: Standardisasi konsistensi 100% pada seluruh tombol (squircle radius 1rem tombol utama & 0.875rem tombol aksi, min-height 44px touch target, active:scale-[0.96] tactile press), seluruh kolom input/select/textarea (tinggi seragam 44px, radius 0.875rem, font 16px mobile anti auto-zoom/mental, focus ring bertema var(--color-primary), dan placeholder kontras tinggi).",
            "Multi-Channel Distribution v1.18.2 (Android versionCode 11802)."
        ]
    },
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
            "Sub-Tab Database Swatch Warna Cat Terpadu: Mengintegrasikan katalog kode warna HEX cat yang sudah ada ke dalam sub-tab terdedikasi dengan antarmuka Bento Grid modern, menjamin kompatibilitas 100%."
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
    const defaultLatest = DEFAULT_CHANGELOG[0]?.version || 'v1.18.8';
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
