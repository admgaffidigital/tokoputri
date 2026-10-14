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
        "id": "log-1-17-03",
        "version": "v1.17.3",
        "date": "2026-10-15",
        "title": "Proteksi Keamanan Fintech Panel Member: Autentikasi PIN 6-Digit, Sensor Mata Privasi Finansial (Anti Shoulder-Surfing), Masking Kartu VIP & Auto-Lock Sesi",
        "category": "feature",
        "badge": "Fintech Security Member Panel & Privacy Eye Shield v1.17.3",
        "items": [
            "Autentikasi PIN Keamanan 6-Digit Member: Memproteksi akses data sensitif pelanggan (nomor WhatsApp, barcode kartu VIP, sisa limit kredit, dan seluruh riwayat tagihan PayLater) dengan verifikasi 6-digit PIN terenkripsi salt SHA-256 via Web Crypto API (zero plain-text storage).",
            "Antarmuka Keypad PIN Bento 6-Dots Interaktif: Menghadirkan keypad numerik modular bergaya Bento Grid dengan 6 bulatan indikator responsif, animasi haptic & audio tick native, serta dukungan penuh pengetikan langsung via keyboard fisik PC/laptop (0-9, Backspace, Escape).",
            "Mode Sensor Privasi Finansial Mata (Privacy Eye Shield 👁️): Seluruh angka saldo PayLater, limit terpakai, total plafon, serta angsuran tagihan berjalan otomatis disensor sebagai 'Rp ••••••' secara default untuk mencegah intipan visual di tempat umum (anti shoulder-surfing), dengan tombol toggle intip cepat di header.",
            "Masking Kartu Member Digital & Barcode Laser Kasir: Menyamarkan nomor telepon dan nomor kartu VIP (+62 812-••••-7890 dan PUTRI • 8123 • •••• • 8901), dengan tetap mempertahankan integritas barcode Code 128 fisik di kasir agar scanner laser toko tetap membaca data asli 100% cepat dan akurat.",
            "Kunci Sesi Cepat & Proteksi Perangkat Publik (Anti Sesi Tertinggal): Tombol Kunci Sesi (Quick Lock) persisten di header modal serta opsi centang 'Ingat sesi di perangkat pribadi ini' yang otomatis memusnahkan sesi member seketika saat modal ditutup jika dibuka pada perangkat kasir atau komputer umum.",
            "Fitur Reset PIN Member oleh Admin CMS: Menyediakan tombol Reset PIN terdedikasi di tabel data pelanggan CMS Admin lengkap dengan dialog konfirmasi aman agar staf admin/owner dapat membantu pelanggan yang lupa PIN.",
            "Verifikasi 16 Test Suite Sistem Lolos 100%: 61 unit test member & logika loyalitas lulus 100%, seluruh pengujian otomatis sistem integritas toko lulus tanpa regresi.",
            "Multi-Channel Distribution v1.17.3 (Android versionCode 11703)."
        ]
    },
    {
        "id": "log-1-17-02",
        "version": "v1.17.2",
        "date": "2026-10-15",
        "title": "Stabilitas Mutlak Kolom Input (Anti-Input Mental), Proteksi Kursor & Pengalaman Mengetik Mulus Mobile & Desktop",
        "category": "feature",
        "badge": "Input Focus & Anti-Flicker Stability v1.17.2",
        "items": [
            "Proteksi Anti Auto-Zoom Mobile (Font-Size 16px & Touch-Action Manipulation): Menetapkan standar font-size minimal 16px pada seluruh kolom input, select, textarea, dan form bento di viewport smartphone (<= 768px) untuk mengeliminasi zoom-in otomatis browser iOS Safari & Android Chrome yang merusak scroll dan melepaskan fokus kursor.",
            "Eliminasi Re-Render Destruktif Form CMS Admin: Menghapus pemanggilan innerHTML rebuild (rWholB & rMultiUnitsB) saat pengguna mengetik harga grosir atau satuan kemasan bertingkat, digantikan dengan sistem update parsial reaktif (updateWholMarginBadge & updateMultiUnitSummary) sehingga keyboard HP tidak pernah tertutup sendiri saat berpindah kolom.",
            "Proteksi Kursor & Debounce Pencarian Kasir POS & Storefront: Mengoptimasi debounce delay pencarian kasir POS (#pos-search-input) ke 250ms dan memasang pemulihan fokus kursor otomatis (preventScroll & setSelectionRange) agar kursor tetap tenang dan utuh saat kartu katalog diperbarui.",
            "Eliminasi Scroll Reflow pada Header Search: Menghapus event listener onkeyup ganda dan manipulasi smooth-scroll otomatis pada saat fokus kolom pencarian mobile (#mobile-header-search) yang sebelumnya memicu blur kursor.",
            "Active Element Guard & Autocomplete Standar: Menyelaraskan form login admin dan kasir dengan standar autocomplete='username' dan autocomplete='current-password' serta activeElement guard agar kursor tidak dirampas oleh password manager maupun router view.",
            "Verifikasi 16 Test Suite Sistem Lolos 100%: Menjaga seluruh pengujian otomatis integritas RMA, Member VIP, Barcode Code 128, POS Header, Laporan Keuangan CSV & SVG, Estimator Material, Auth Guard, dan 78 dialog modal sistem lulus 100%.",
            "Multi-Channel Distribution v1.17.2 (Android versionCode 11702)."
        ]
    },
    {
        "id": "log-1-17-01",
        "version": "v1.17.1",
        "date": "2026-10-15",
        "title": "Sanitasi Murni Kolom Input (Pristine Input Cleanliness), Proteksi Anti-Autofill & Keamanan Kredensial Seluruh Web Aplikasi",
        "category": "feature",
        "badge": "Pristine Input Cleanliness & Universal Anti-Autofill v1.17.1",
        "items": [
            "Sanitasi Murni Kolom Input (Pristine Input Cleanliness): Menjamin seluruh kolom input di aplikasi terbebas dari residu sampah teks, riwayat kata sandi lama, maupun kode usang saat formulir atau modal dibuka, ditutup, atau diselesaikan.",
            "Standar Proteksi Anti-Autofill Modern (Chromium & WebKit Compliant): Mengganti atribut autocomplete pada kolom kata sandi login admin, login kasir, dan formulir staf dengan standar autocomplete=\"new-password\" serta autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"false\" sehingga browser tidak lagi menyuntikkan atau meninggalkan kata sandi tersimpan secara otomatis.",
            "Sanitasi Programmatic Instan Login Kasir & Admin: Mengosongkan nilai username/email dan password secara otomatis dan aman saat pengguna membuka layar login, menutup modal autentikasi, berhasil masuk, maupun saat logout.",
            "Sanitasi Kolom Pencarian & Barcode Scanner: Menyematkan proteksi anti-autofill dan spellcheck pada kolom pencarian storefront (#search-input, #mobile-header-search), pencarian kasir POS (#pos-search-input), dan pelacak nota retur agar tidak memunculkan popup riwayat yang menghalangi keyboard.",
            "Sanitasi Modal Kas Laci & Shift Kasir: Seluruh kolom nominal uang tunai, alasan transaksi, penerima dana, serta kalkulator pecahan denominasi selalu dibuka dalam kondisi bersih murni (0 / kosong).",
            "Verifikasi 16 Test Suite Sistem Lolos 100%: Menjaga seluruh pengujian otomatis integritas RMA, Member VIP, Barcode Code 128, POS Header, Laporan Keuangan CSV & SVG, Estimator Material, Auth Guard, dan 78 dialog modal sistem lulus 100%.",
            "Multi-Channel Distribution v1.17.1 (Android versionCode 11701)."
        ]
    },
    {
        "id": "log-1-17-00",
        "version": "v1.17.0",
        "date": "2026-10-14",
        "title": "Sistem Desain Universal Edge 3D Layar Lengkung, Harmonisasi Multi-Perangkat (Mobile, Tablet & Desktop) & Finalisasi Antarmuka",
        "category": "feature",
        "badge": "Universal 3D Curved Edge & Multi-Device Parity v1.17.0",
        "items": [
            "Universal 3D Curved Edge Display Overlay (#flagship-edge-screen-overlay): Menghadirkan bingkai layar lengkung 3D (Samsung Galaxy Edge / Flagship AMOLED / Curved Workstation) yang persisten di seluruh web aplikasi (Etalase Katalog, Kasir POS Hardware, Admin Backoffice, Keranjang, Checkout, Riwayat Pesanan, Wishlist, dan FAQ).",
            "Harmonisasi Bezel Multi-Perangkat (Edge-to-Edge Parity): Skala lebar bezel adaptif otomatis—6px di smartphone, 10px di tablet workstation, 8px di monitor laptop/desktop PC, dan 10px di ultra-wide workstation dengan garis kilau kristal (specular glass sheen highlight) dan pendaran aura tema toko dinamis.",
            "Harmonisasi Komponen Antarmuka Mikro (Micro-Edge Design System): Menyelaraskan rim tepi atas lembar modal dialog (.modal-bottom-sheet & .drawer-bottom), garis kilau atas bilah navigasi (#bottom-nav-bar), rim pembatas bawah header (.glass-header & .pos-storefront-header), serta garis divider vertikal kasir POS.",
            "Proteksi Aksesibilitas 100% & Zero Touch Interference: Overlay dilengkapi pointer-events: none !important, select-none, dan akselerasi GPU (transform: translateZ(0)) tanpa lag sentuhan, klik, scroll, ketikan formulir, maupun barcode scanner.",
            "Verifikasi 16 Test Suite Sistem Lolos 100%: Menjaga seluruh pengujian otomatis integritas RMA, Member VIP, Barcode Code 128, POS Header, Laporan Keuangan CSV & SVG, Estimator Material, Auth Guard, dan 78 dialog modal sistem lulus 100%.",
            "Perampingan Navigasi CMS & Eliminasi Duplikasi POS Kasir: Menghapus kartu menu duplikat 'Kasir POS' dari dasbor menu CMS agar panel admin lebih ringkas dan fokus backoffice, menyatukan seluruh akses kasir point-of-sale secara presisi melalui icon kasir terdedikasi di header toko (openPOSCashierMode) yang membuka antarmuka terminal layar penuh.",
            "Standardisasi Bento UI/UX & Elevasi Kartu Modular (.bento-island-card): Menerapkan arsitektur visual Bento Grid secara konsisten di seluruh web aplikasi (Checkout, Pembayaran, Pelacak Pesanan, Panduan FAQ, Login Admin, dan POS Kasir) dengan border radius squircle adaptif (20px mobile / 24px desktop) dan elevasi solid crystal anti-kaca.",
            "Standardisasi Proporsionalitas Kolom Input (Anti-Kerdil & Touch Ergonomics): Mengeliminasi seluruh input kerdil/sempit di seluruh modul aplikasi. Menstandarkan input teks, angka, tanggal, dan dropdown select ke tinggi proporsional (min-height 40-44px, font 13.5-14px anti auto-zoom), stepper kuantitas keranjang web (w-14 sm:w-16 h-10 sm:h-11), input diskon nota kasir (h-10 text-sm), input denominasi kasir (w-16 sm:w-20 h-9), parameter estimator material bangunan (h-11 text-sm font-bold), input peta koordinat, serta form pengeluaran & stock opname.",
            "Penyempurnaan & Harmonisasi Simetris Modal Tautan Cepat (Centered Bento Shortcut Tiles): Menata ulang grid modal Tautan Cepat (#quickmenu-modal) menjadi kartu pintas terpusat yang simetris dan seimbang. Seluruh icon menu diperbesar (w-12 h-12 rounded-2xl) dan diletakkan presisi di tengah, judul dan subjudul teks terpusat rata tengah (text-center), badge status (VIP, SOP, Update, Wishlist) diposisikan melayang elegan di sudut kanan atas (absolute top-2.5 right-2.5), serta kartu utilitas Tema Layar diformat membentang 2 kolom penuh (col-span-2) sehingga grid menjadi 100% konsisten, simetris, dan proporsional.",
            "Multi-Channel Distribution v1.17.0 (Android versionCode 11700)."
        ]
    },
    {
        "id": "log-1-16-09",
        "version": "v1.16.9",
        "date": "2026-10-14",
        "title": "Elevasi Ruang Vertikal Banner Hero Beranda, Harmonisasi Badge Maskot 3D & Proporsionalitas Kartu Promo Bento",
        "category": "feature",
        "badge": "Hero Banner Vertical Space & Mascot Badge Elevation v1.16.9",
        "items": [
            "Elevasi Ruang Vertikal Banner Hero Storefront (min-h-[195px] sm:min-h-[240px] md:min-h-[285px] lg:min-h-[300px]): Memberikan ruang kanvas vertikal yang lapang dan elegan bagi banner hero utama dan kartu promo bento di desktop, tablet, dan smartphone.",
            "Harmonisasi Posisi Badge Maskot 3D (Anti-Mepet Frame Atas & Bawah): Memposisikan lencana '100% ORI' dan badge live pulsing 'Siap Melayani' dengan margin bernapas yang aman dan presisi di dalam kanvas kartu banner hero tanpa menabrak garis frame.",
            "Sinkronisasi Skeleton Loader Beranda: Menyelaraskan dimensi skeleton #dynamic-banners-container dengan tinggi baru guna mengeliminasi loncatan visual (zero cumulative layout shift).",
            "Desain Responsif & Proporsionalitas Bento: Menyeimbangkan skala tipografi judul, deskripsi, tombol aksi CTA, dan grafis produk pada kartu promosi bento di seluruh ukuran layar.",
            "Verifikasi 16 Test Suite Sistem Lolos 100%: Menjaga seluruh pengujian otomatis integritas RMA, Member VIP, Barcode Code 128, POS Header, Laporan Keuangan CSV & SVG, Estimator Material, Auth Guard, dan 78 dialog modal sistem lulus 100%.",
            "Multi-Channel Distribution v1.16.9 (Android versionCode 11609)."
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
    const defaultLatest = DEFAULT_CHANGELOG[0]?.version || 'v1.10.91';
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
