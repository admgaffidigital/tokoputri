/**
 * ============================================================
 * KONFIGURASI LOG PEMBARUAN SISTEM (CHANGELOG)
 * Menyimpan riwayat rilis resmi bawaan sistem dan helper
 * untuk menggabungkan data statis dengan log dinamis Firestore.
 * 
 * ATURAN ROLLING 5-LOG TERBARU (ANTI-KODE SAMPAH & ANTI-SPAM):
 * DEFAULT_CHANGELOG dibatasi secara ketat HANYA menyimpan 5 entri rilis
 * terkini (v1.10.90 s.d. v1.10.86). Setiap rilis baru ditambahkan di posisi
 * teratas dan entri ke-6 dipangkas agar berkas tetap super ringan (~12KB vs ~425KB),
 * mengeliminasi kode sampah, dan mencegah spam riwayat di antarmuka website.
 * ============================================================
 */

export const MAX_CHANGELOG_LIMIT = 5;

export const DEFAULT_CHANGELOG = [
    {
        "id": "log-1-10-90",
        "version": "v1.10.90",
        "date": "2026-10-08",
        "title": "Arsitektur Modal 3-Tier Responsive Desktop: Widescreen Workspace & Split-View Produk",
        "category": "feature",
        "badge": "3-Tier Desktop Modal Architecture v1.10.90",
        "items": [
            "Tier 1 (Widescreen Workspace Canvas - 94vw, Max-W-7xl / 1360px): Menghadirkan kanvas kerja desktop yang ultra lapang dan luas untuk modal padat data (Pelacak FIFO & Multi-Supplier, PO Kulakan Builder & Detail, Direktori Rekanan Supplier, Stock Opname Dua Lokasi, Detail Piutang Tempo, Rekap Shift Kasir, Form & Detail Order Admin, hingga Kartu Member Digital). Mengeliminasi rasa sempit/terjepit saat mengelola tabel dan formulir kompleks di monitor PC/Laptop.",
            "Tier 2 (Spacious 2-Column Split-View - 1160px & 88vh): Merombak tampilan modal detail produk storefront (#product-modal-content) di layar desktop menjadi tata letak 2 kolom elegan setaraf marketplace tier-1 dunia. Kolom kiri selebar 460px didedikasikan untuk galeri foto produk sticky yang luas, sementara kolom kanan menyajikan informasi harga, badge Inc. PPN kapsul, katalog swatch kartu cat, dan pinned bottom buy bar yang selalu siap dieksekusi tanpa perlu scroll bolak-balik.",
            "Tier 3 (Focused Center Dialogs - 440px s.d. 520px): Mempertahankan dialog konfirmasi cepat, prompt PIN, quick price, restock kilat, dan struk kasir pada proporsi kompak terpusat agar fokus pandangan kasir/admin tetap tajam tanpa melar berlebihan.",
            "Zero Distorsi Mobile & Tablet (<1024px): Seluruh tata letak 3-Tier diisolasi secara presisi melalui media query desktop (min-width: 1024px), sehingga pengalaman pengguna smartphone pada bottom sheet native, gesture swipe, dan tombol kembali Android tetap 100% mulus dan terlindungi.",
            "Multi-Channel Distribution v1.10.90 (Android versionCode 11090)."
        ]
    },
    {
        "id": "log-1-10-89",
        "version": "v1.10.89",
        "date": "2026-10-07",
        "title": "Penyempurnaan Visual Tombol Aksi Katalog: Eliminasi Blur & Colored Glow Shadow",
        "category": "fix",
        "badge": "Clean Flat & Sharp Action Buttons v1.10.89",
        "items": [
            "Eliminasi Mutlak Efek Blur & Colored Glow (.btn-catalog-add & .btn-catalog-variant): Menghapus total box-shadow colored glow beradius besar (10px - 14px) yang menimbulkan efek kabur/blur berkabut di sekeliling tombol Tambah (+) dan Pilih Varian pada kartu katalog produk.",
            "Desain Flat, Bersih & Solid: Mengadopsi standar modern flat design dengan warna solid tegas berpadu border hairline halus (1px) dan bayangan mikro natural (0 1px 2px rgba(0,0,0,0.06)), menghasilkan tombol yang tajam, kontras tinggi, dan bebas blur.",
            "Sentuhan Hover & Active Ergonomis: Interaksi klik yang reponsif dan stabil dengan transisi scale halus tanpa memicu ledakan bayangan blur.",
            "Multi-Channel Distribution v1.10.89 (Android versionCode 11089)."
        ]
    },
    {
        "id": "log-1-10-88",
        "version": "v1.10.88",
        "date": "2026-10-07",
        "title": "Penyelarasan Paripurna Badge Inc. PPN: Kapsul Pill Elegan & Desain Sistem Harmonis",
        "category": "fix",
        "badge": "Harmonious Inc. PPN Capsule Pill & Price Alignment v1.10.88",
        "items": [
            "Eliminasi Mutlak Badge Kotak Kaku (Square Box Stamp): Menggantikan badge Inc. PPN lama yang berbingkai kotak kuning kaku (rounded 4px) dengan format kapsul pill oval elegan (rounded-full 9999px) yang selaras 100% dengan bahasa desain seluruh badge modal produk.",
            "Penyelarasan Palet & Tema Dinamis (.accent-badge & .badge-inc-ppn): Menghilangkan warna kuning border-amber-200 yang jomplang/tidak serasi; kini badge Inc. PPN otomatis beradaptasi menggunakan token tema toko aktif (rgba(var(--color-primary-rgb), 0.12)) dengan border halus, serasi dengan badge Harga Terbaik, Official, dan judul harga.",
            "Integrasi Ikon Resmi Bukti Pajak: Dilengkapi ikon FontAwesome nota/pajak (<i class=\"fa-solid fa-receipt\"></i>) yang profesional dan proporsional dengan font 9px uppercase tracking-wider.",
            "Penyelarasan Ketinggian & Wadah Mandiri (#product-modal-price-badges): Memisahkan badge pajak dari string teks angka harga (text-3xl) ke dalam kontainer flex terdedikasi, sehingga Inc. PPN dan Harga Terbaik sejajar sempurna di garis horizontal tengah tanpa floating offset yang jomplang.",
            "Multi-Channel Distribution v1.10.88 (Android versionCode 11088)."
        ]
    },
    {
        "id": "log-1-10-87",
        "version": "v1.10.87",
        "date": "2026-10-07",
        "title": "Sistem Katalog Kartu Warna Cat (Paint Swatch Fan Deck & Color Family Filter)",
        "category": "feature",
        "badge": "Paint Swatch Chip System & Family Filter v1.10.87",
        "items": [
            "Arsitektur Kartu Swatch Cat Modern (.paint-swatch-card): Merombak tampilan varian khusus produk cat tembok & cat warna menjadi format kartu katalog swatch kartu chip realistik (ala Dulux, Avian Brands, Nippon Paint, Jotun) dengan blok warna penuh, lapisan satin sheen 3D glossy, dan panel informasi kode warna.",
            "Cap/Stamp Kode Warna Berkontras Cerdas: Dilengkapi kode warna atau kode pabrik pada sudut swatch dengan formula kecerahan YIQ (isDarkColor) yang secara dinamis beralih kontras otomatis antara teks terang vs gelap agar 100% selalu jelas dibaca di atas semua jenis warna cat.",
            "Live Selected Color Spotlight Bar (.paint-spotlight-bar): Menghadirkan bar spotlight warna aktif di atas lembar varian yang menampilkan preview kotak swatch besar, nama warna tebal, kode hex kapital, harga riil, dan status sisa stok varian terpilih.",
            "Smart Color Family Filter Tabs (paint-family-nav): Mengelompokkan varian cat secara otomatis ke dalam tab keluarga warna (Semua, Putih & Netral, Kuning & Krem, Oranye & Peach, Merah & Pink, Cokelat & Earthy, Biru & Toska, Hijau Segar, Abu & Gelap) dengan hanya menampilkan tab warna yang memang tersedia pada produk tersebut.",
            "Pencarian Instan Nama & Kode Warna: Memudahkan pelanggan mencari warna impian secara instan berdasarkan nama maupun kode hex saat produk memiliki banyak variasi warna (10-50 warna).",
            "Harmonisasi Kasir POS (pos-variant-sheet.js): Meningkatkan visual varian warna cat di kasir POS dengan mini paint chip (.pos-paint-chip) bersaput sheen glossy agar kasir dapat memverifikasi warna kaleng cat pelanggan secara instan dan akurat.",
            "Multi-Channel Distribution v1.10.87 (Android versionCode 11087)."
        ]
    },
    {
        "id": "log-1-10-86",
        "version": "v1.10.86",
        "date": "2026-10-07",
        "title": "Penyempurnaan Ergonomi Tombol Tambah & Varian: Anti-Gepeng & Desain Visual Premium",
        "category": "fix",
        "badge": "Anti-Squash Action Buttons & Premium Color Depth v1.10.86",
        "items": [
            "Eliminasi Mutlak Masalah Tombol Gepeng (.btn-catalog-action): Mengganti kelas invalid w-8.5 h-8.5 dengan utility class terproteksi aspect-ratio 1:1 (36px di mobile, 38px di desktop) sehingga tombol Tambah (+) dan Pilih Varian selalu bulat/squircle presisi simetris tanpa pernah pipih atau terdistorsi flexbox di layar smartphone.",
            "Elevasi Visual Tombol Tambah (+) (.btn-catalog-add): Meredesain tombol tambah dari warna pudar transparan menjadi Solid Theme Gradient mewah dengan ikon plus putih berkontras tinggi, border halus, dan soft glow 3D yang sangat memikat untuk diklik.",
            "Identitas Visual Tombol Pilih Varian (.btn-catalog-variant): Menerapkan palet Indigo Royale Gradient berpadu ikon Layer Group putih bersih yang selaras 100% dengan badge Varian di katalog, memberikan diferensiasi visual instan antara produk langsung beli vs produk multi-opsi.",
            "Kalkulasi Cerdas Rentang Harga Varian Storefront (catalog.js): Menyelaraskan kartu katalog depan dengan POS kasir sehingga produk bervarian kini menampilkan rentang harga riil dan label PILIH VARIAN yang elegan, tidak lagi hanya menampilkan teks abu-abu polos.",
            "Harmonisasi Kasir POS (pos.js): Mengintegrasikan desain tombol anti-gepeng yang sama pada POS kasir mode Grid dan List untuk tombol Tambah, Varian, In-Cart Badge, maupun Nonaktif.",
            "Multi-Channel Distribution v1.10.86 (Android versionCode 11086)."
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
 * @returns {String} Contoh: 'v1.10.90'
 */
export const getLatestVersion = (appData) => {
    const defaultLatest = DEFAULT_CHANGELOG[0]?.version || 'v1.10.90';
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
