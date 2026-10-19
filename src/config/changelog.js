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
        "id": "log-1-18-10",
        "version": "v1.18.10",
        "date": "2026-10-19",
        "title": "Standarisasi Universal Native Bottom Sheet Seluruh Modal CMS & Storefront, Theme Gradient Harmony & Integrasi Swipe Gesture",
        "category": "feature",
        "badge": "Universal Native Bottom Sheet & Gesture Harmony v1.18.10",
        "items": [
            "Transformasi Menyeluruh Modal CMS & Storefront Native Bottom Sheet: Menyempurnakan Form Master Data (#admin-modal), Detail Pesanan Admin (#admin-order-modal), Pengaturan Printer POS (#printer-settings-modal), Tanya Admin (#modal-ask-question), Editor Q&A FAQ (#modal-admin-faq), Kartu Member Digital (#member-modal), dan Rincian Pesanan Pelanggan (#order-detail-modal) mengadopsi arsitektur modal-bottom-sheet responsif dengan drag pull-indicator pill, squircle radius rounded-t-[2rem] sm:rounded-3xl, dan safe area bottom inset padding.",
            "Harmonisasi Penuh Tema Toko Dinamis (Theme Gradient Header): Menerapkan header bergradasi halus bertema var(--color-primary) dan aksen ikon toko pada seluruh modal, menghilangkan kesan kaku desktop dan menyatukan estetika visual premium di smartphone maupun desktop.",
            "Integrasi Native Swipe-Down to Dismiss Gesture Engine: Mendaftarkan seluruh modal CMS ke closeModalById pada core gesture engine native-mobile.js dengan isolasi interaktif guard sehingga modal dapat ditutup dengan usapan jari ke bawah yang mulus tanpa mengganggu scrolling tabel dan input form.",
            "Standardisasi Touch Target & Form Inputs: Mengunci seluruh kolom input, dropdown select, dan tombol aksi modal pada tinggi proporsional min-h-[44px] dengan font 16px di mobile anti auto-zoom/mental Chromium.",
            "Multi-Channel Distribution v1.18.10 (Android versionCode 11810)."
        ]
    },
    {
        "id": "log-1-18-09",
        "version": "v1.18.9",
        "date": "2026-10-19",
        "title": "Redesain Modal Flash Sale Full Native App Bottom Sheet, Penyelarasan Tema Dinamis & Eliminasi Total Kebocoran Layout",
        "category": "feature",
        "badge": "Native App Flash Sale & Theme Harmony v1.18.9",
        "items": [
            "Redesain Modal Pembuat Sesi Flash Sale Native App Bottom Sheet: Mengganti tampilan modal kaku klasik dengan arsitektur modal-bottom-sheet responsif (docked di bagian bawah pada smartphone dengan pull-indicator drag handle bar, dan centered modal elegan di layar tablet/desktop) terintegrasi dengan gesture engine swipe-down to dismiss.",
            "Penyelarasan Total Tema Toko Dinamis (Theme Harmony): Menerapkan CSS custom property var(--color-primary) dan var(--color-primary-dark) secara konsisten pada header modal, tombol aksi utama, chip preset durasi jam (+3J, +6J, 24J, 48J), serta styling khusus kontras tinggi pada kolom input Harga Kilat bertema toko.",
            "Eliminasi Kebocoran Layout & Anti Teks Terpotong: Restrukturisasi tata letak baris 'Daftar Barang Flash Sale' menjadi responsif (flex-col di mobile, sm:flex-row di desktop) dan proteksi overflow-x-hidden, melenyapkan total kendala tombol '+ Tambah Produk' terpotong di tepi kanan layar dan scrollbar horizontal liar di smartphone.",
            "Bento Island Empty State & Form Input Touch Target 44px: Menggantikan kotak border-dashed abu-abu datar dengan kartu Bento Empty State interaktif beraksen petir tema toko, serta standardisasi kolom input form dan dropdown select berukuran touch target proporsional (min-h-[44px], font 16px mobile anti-auto-zoom).",
            "Multi-Channel Distribution v1.18.9 (Android versionCode 11809)."
        ]
    },
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
    const defaultLatest = DEFAULT_CHANGELOG[0]?.version || 'v1.18.10';
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
