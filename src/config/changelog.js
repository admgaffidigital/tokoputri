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
    },
    {
        "id": "log-1-16-08",
        "version": "v1.16.8",
        "date": "2026-10-13",
        "title": "Harmonisasi Kontras Tema Storefront, Kolom Pencarian Header Adaptif & Kartu Promo Bento Multi-Mode (Light & Dark Mode)",
        "category": "feature",
        "badge": "Theme Contrast & Multi-Mode Harmony v1.16.8",
        "items": [
            "Harmonisasi Kontras Kolom Pencarian Header (Light & Dark Mode Ready): Mengeliminasi balok obsidian hitam pekat yang tidak selaras di mode terang; kini di Light Mode kolom pencarian berlatar belakang putih bersih (bg-white/95) dengan teks slate-800, border halus, ikon kaca pembesar tema toko, dan tombol chiclet SCAN bersih, serta bertransisi mulus ke obsidian gelap elegan di Dark Mode.",
            "Kartu Promo Bento Adaptif Tema Toko (.bento-promo-card): Mengganti gradien hitam hardcoded (slate-900 to slate-950) pada slide promosi bento dengan gradien dinamis yang mengadopsi warna tema toko (var(--color-primary)) di Light Mode, lengkap dengan tombol CTA putih bersih berkontras tajam (bg-white text-[var(--color-primary-dark)]), dan beralih ke dark luxury obsidian di Dark Mode.",
            "Penyederhanaan Badge Banner Hero: Menghilangkan teks 'OFFICIAL STORE' tambahan di samping teks selamat datang pada banner utama beranda sehingga lencana tampil bersih, ringkas, dan fokus murni pada pesan 'SELAMAT DATANG'.",
            "Tombol Navigasi Slider Adaptif: Memperbarui tombol kontrol panah melayang di desktop agar adaptif di kedua mode (bg-white/95 di Light Mode dan dark:bg-slate-950 di Dark Mode).",
            "Eliminasi Ketimpangan Estetika (Zero Disparity): Memastikan tidak ada lagi elemen gelap legam yang terisolasi di atas kanvas tema terang toko, menjamin pengalaman visual serasi, profesional, dan nyaman di mata.",
            "Verifikasi 16 Test Suite Sistem Lolos 100%: Menjaga seluruh pengujian otomatis integritas RMA, Member VIP, Barcode Code 128, POS Header, Laporan Keuangan CSV & SVG, Estimator Material, Auth Guard, dan 78 dialog modal sistem lulus 100%.",
            "Multi-Channel Distribution v1.16.8 (Android versionCode 11608)."
        ]
    },
    {
        "id": "log-1-16-07",
        "version": "v1.16.7",
        "date": "2026-10-13",
        "title": "Dukungan Penuh Banner PNG Transparan (Floating Cutout 3D), Eliminasi Kotak Putih Kaku, Harmonisasi Bento Theme & Zero Emoji Iconography",
        "category": "feature",
        "badge": "Transparent PNG Banners & Zero Emoji System v1.16.7",
        "items": [
            "Dukungan Penuh Banner PNG Transparan (Floating Cutout 3D): Mengeliminasi total kotak pembungkus kaku berlatar belakang putih/abu-abu (bg-white / dark:bg-slate-800/90) dan border tebal pada gambar banner promosi bento. Kini grafis PNG transparan (seperti medali loyalitas emas Member Toko, kaleng cat, logo resmi, alat teknik) mengapung bebas dengan drop shadow 3D alami yang jatuh langsung di atas permukaan kartu bento obsidian.",
            "Panggung Maskot 3D Transparan: Memperbarui dudukan avatar maskot hero beranda dengan pedestal elips bercincin aksen tema toko yang transparan dan dinamis, menjamin karakter animasi GIF maupun PNG transparan tampil proporsional tanpa terkurung dalam kotak persegi kaku.",
            "Zero Emoji Iconography: Membersihkan penggunaan ikon emoji Unicode pada antarmuka aplikasi, menggantikannya secara konsisten dengan ikon vektor standar FontAwesome 6 Solid (<i class=\"fa-solid fa-...\"></i>) dan tipografi industrial berkontras tinggi agar tampilan berwibawa, profesional, dan serasi.",
            "Harmonisasi Sistem Desain Bento & Dark Mode: Menyelaraskan seluruh elemen antarmuka dengan variabel tema dinamis toko (var(--color-primary) & var(--color-primary-dark)), kartu bento 100% solid bebas blur, serta kontras tajam baik di mode terang maupun mode gelap (dark mode).",
            "Verifikasi 16 Test Suite Sistem Lolos 100%: Menjaga seluruh pengujian otomatis integritas RMA, Member VIP, Barcode Code 128, POS Header, Laporan Keuangan CSV & SVG, Estimator Material, Auth Guard, dan 78 dialog modal sistem lulus 100%.",
            "Multi-Channel Distribution v1.16.7 (Android versionCode 11607)."
        ]
    },
    {
        "id": "log-1-16-06",
        "version": "v1.16.6",
        "date": "2026-10-13",
        "title": "Elevasi Kolom Pencarian Header (Obsidian Pill Capsule), Animasi Teks Berganti (Rolling Ticker) & Chiclet Scanner",
        "category": "feature",
        "badge": "Header Search Capsule & Rolling Ticker v1.16.6",
        "items": [
            "Redesain Kapsul Pencarian Obsidian (Elevated Pill Capsule): Mengubah kolom pencarian header dari kotak standar menjadi kapsul obsidian aerodinamis (rounded-full) berkontras tinggi dengan border kristal putih halus, drop shadow lembut, ikon kaca pembesar emas amber, dan tombol clear [X] dinamis tanpa elemen kategori ganda yang mengganggu.",
            "Animasi Teks Berganti Otomatis (Dynamic Rolling Placeholder Ticker): Mengganti placeholder statis dengan animasi teks halus yang berganti secara berkala merekomendasikan bahan bangunan populer (Semen Gresik/Tiga Roda, Cat No Drop, Pipa PVC Rucika, Keramik Granit, Mesin Bor, Seng Spandek, dll) yang otomatis jeda saat diketik.",
            "Tombol Scanner Mini (Chiclet Scanner Pill): Menghadirkan tombol aksi pemindai barcode/QR mini dengan badge 'SCAN' bertulisan tegas dan ikon QR emas, memudahkan pelanggan memindai produk fisik langsung dari ponsel.",
            "Sinkronisasi Pencarian Desktop: Menyelaraskan kolom pencarian desktop dengan tombol scanner chiclet terpadu dan rotasi placeholder cerdas.",
            "Verifikasi 16 Test Suite Sistem Lolos 100%: Seluruh pengujian otomatis integritas RMA, Member VIP, Barcode Code 128, POS Header, Laporan Keuangan CSV & SVG, Estimator Material, Auth Guard, dan 78 dialog modal sistem lulus 100%.",
            "Multi-Channel Distribution v1.16.6 (Android versionCode 11606)."
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
