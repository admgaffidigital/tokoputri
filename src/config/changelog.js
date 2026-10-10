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
        "id": "log-1-15-00",
        "version": "v1.15.0",
        "date": "2026-10-10",
        "title": "Flash Sale Engine (Promo Kilat Berbatas Waktu & Kuota), Omnichannel Sync & Proteksi Margin Guard",
        "category": "feature",
        "badge": "Flash Sale Engine & Real-Time Omnichannel v1.15.0",
        "items": [
            "Panggung Flash Sale Storefront Interaktif (flash-sale-section.js): Live countdown timer per detik, progress bar kuota keterjualan, badge petir hemat diskon %, dan aksi Beli Kilat 1-ketukan.",
            "Integrasi Kasir POS Toko & Keranjang Belanja Web: Evaluasi otomatis harga diskon flash sale pada POS kasir offline toko dan keranjang belanja online dengan tag penanda khusus ⚡ FLASH SALE.",
            "CMS Manajemen Admin & Margin Guard (flash-sale.js): Dashboard admin untuk membuat sesi promo kilat (preset durasi 2 jam s.d. 3 hari), filter kanal (Web/POS/Semua), dan deteksi otomatis jual rugi (harga flash sale < HPP modal).",
            "Sinkronisasi Kuota Real-Time: Pengurangan sisa kuota otomatis setiap transaksi web/POS terbit, dan otomatis fallback ke harga normal/grosir begitu kuota promo ludes.",
            "Harmonisasi Menyeluruh UI/UX & Standar Touch Ergonomi: 100% adopsi token tema toko dinamis (var(--color-primary)), elevasi touch target native (.btn-native-icon 36-40px, stepper kuantitas keranjang POS 32px), dan standardisasi Bento Card (.card-native) ber-shadow halus.",
            "Test Suite Otomatis: 28 test cases mencakup status sesi, filter kanal, evaluasi harga efektif, pembatasan kuota, dan validasi HPP lolos 100%.",
            "Multi-Channel Distribution v1.15.0 (Android versionCode 11500)."
        ]
    },
    {
        "id": "log-1-14-00",
        "version": "v1.14.0",
        "date": "2026-10-09",
        "title": "Multi-Satuan Bertingkat (UOM Hierarchy), Harga Grosir Fleksibel & Proteksi UI/UX Anti-Gepeng",
        "category": "feature",
        "badge": "Multi-Unit Packaging & Wholesale Pricing v1.14.0",
        "items": [
            "Master Satuan Bertingkat & Konversi Kemasan (uom.js): Mendukung penjualan eceran maupun kemasan besar (Dus, Roll, Sak, Kotak) dari satu master barang dengan rasio konversi akurat dan pemotongan stok otomatis ke satuan dasar.",
            "Tier Harga Grosir Bertingkat & Proteksi Margin HPP: Aturan harga bertingkat kuantitas dengan indikator peringatan margin negatif jika harga jual mendekati HPP barang.",
            "Barcode Kemasan Dus/Roll & Scan Otomatis POS: Pemindaian barcode kemasan via scanner laser maupun kamera smartphone langsung menambahkan barang dalam satuan kemasan terkait.",
            "Proteksi Global Anti-Gepeng (.btn-native-action & .btn-native-icon): Penguncian tinggi minimal 40px-44px (touch standard) dan rasio 1:1 kaku pada tombol close modal dan tombol ikon agar tidak pernah gepeng di layar ponsel berukuran apapun.",
            "Anti-Wrap Badge Status: Menjamin seluruh badge status pesanan, pengiriman DO, dan retur RMA tidak terlipat canggung menjadi 2 baris.",
            "Multi-Channel Distribution v1.14.0 (Android versionCode 11400)."
        ]
    },
    {
        "id": "log-1-13-02",
        "version": "v1.13.2",
        "date": "2026-10-09",
        "title": "Resolusi Tombol Anti-Gepeng & Ergonomi Detail Pengiriman Proyek",
        "category": "feature",
        "badge": "Anti-Squash Buttons & Delivery Card Ergonomics v1.13.2",
        "items": [
            "Eliminasi Tombol Gepeng (orders.js): Menghapus flex-1 dalam layout vertikal pada tombol Kelola Pengiriman & DO, digantikan w-full sm:flex-1 dengan tinggi sentuh ergonomis h-11 (44px) dan shrink-0.",
            "Proteksi Global .btn-native-action (style.css): Penegasan min-height 2.5rem (40px) dan flex-shrink: 0 agar tombol tidak terkompresi di smartphone.",
            "Perapian Badge Status Pengiriman: Penambahan shrink-0 whitespace-nowrap agar badge status MENUNGGU MUAT tidak terlipat.",
            "Ikon Vektor Valid: Memperbarui ikon dari fa-truck-gear ke fa-truck-fast text-sm resmi FontAwesome.",
            "Multi-Channel Distribution v1.13.2 (Android versionCode 11302)."
        ]
    },
    {
        "id": "log-1-13-01",
        "version": "v1.13.1",
        "date": "2026-10-09",
        "title": "Harmonisasi Desain Native App Surat Jalan (DO), Touch Fleet Grid & Checklist Muatan Proyek",
        "category": "feature",
        "badge": "Native Fleet Grid & Interactive DO Checklist v1.13.1",
        "items": [
            "Grid Kartu Armada Sentuh: Menggantikan dropdown kaku dengan 6 kartu armada interaktif (Pick-up, Truk Engkel, Dobel, Roda Tiga, dll) ber-border tema toko.",
            "Checklist Muatan Tile Interaktif: Menghilangkan tabel kaku di HP, digantikan tile sentuh 1-ketukan, squircle checkbox, kapsul kuantitas, chip varian, dan tombol Pilih Semua.",
            "Fixed Pinned Bottom Action Bar: Tombol aksi utama dipin melayang di bawah layar sentuh (thumb-friendly) dengan safe area inset.",
            "Stepper Status Pengiriman Segmented: Stepper 3 tahap bertema toko berpadu kanvas tanda tangan sentuh lapang.",
            "Multi-Channel Distribution v1.13.1 (Android versionCode 11301)."
        ]
    },
    {
        "id": "log-1-13-00",
        "version": "v1.13.0",
        "date": "2026-10-09",
        "title": "Logistik, Pengiriman Proyek & Surat Jalan Resmi (DO Barcode Code 128)",
        "category": "feature",
        "badge": "Delivery Order Logistics & Project Signatures v1.13.0",
        "items": [
            "Dokumen Surat Jalan Resmi A4 (DO-YYMM-XXXXX): Ber-barcode Code 128 unik, rujukan Drop-Point mandor, armada & supir, dan 4 kolom tanda tangan.",
            "Pelacakan Status Pengiriman Real-Time: Transisi Menunggu Muat -> Dalam Perjalanan -> Terkirim.",
            "Verifikasi Tanda Tangan Mandor: Kanvas tanda tangan digital di layar sentuh untuk bukti serah terima proyek.",
            "Multi-Channel Distribution v1.13.0 (Android versionCode 11300)."
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
    const defaultLatest = DEFAULT_CHANGELOG[0]?.version || 'v1.12.2';
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
