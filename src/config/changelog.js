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
        "id": "log-1-12-02",
        "version": "v1.12.2",
        "date": "2026-10-08",
        "title": "Harmonisasi Desain Native App, Dual-View Riwayat Retur, Tab Bar Estimator & Konfirmasi Cetak Pintar",
        "category": "feature",
        "badge": "Native Design System Harmonization & Responsive Dual-View v1.12.2",
        "items": [
            "Dual-View Riwayat Retur Responsif (returns.js): Memperkenalkan tampilan dwifungsi (Mobile Card View .card-native di layar HP yang bebas potong & touch-friendly 40px, serta Tabel Analitis lapang di layar Desktop lebar), menghilangkan tabel terpotong horizontal pada riwayat retur penjualan dan pembelian supplier.",
            "Dialog Konfirmasi Cerdas & Tombol Cetak Selaras Tema (ui.js): Menyempurnakan showConfirm agar secara cerdas mendeteksi konteks cetak dokumen/surat/nota. Eliminasi tombol merah keliru 'Ya, Hapus' dengan ikon bahaya ⚠️ pada alur cetak dokumen retur, digantikan tombol dinamis bertema toko aktif var(--color-primary) dengan teks 'Ya, Cetak' dan ikon fa-print.",
            "Tab Bar Estimator Anti-Potong Mobile (index.html): Menambahkan dukungan scroll horizontal halus (overflow-x-auto custom-scrollbar) dan shrink-0 pada tab bar kategori Kalkulator Estimator Material Bangunan sehingga teks tab 'Dinding & Semen' dan lainnya tampil utuh tanpa terpotong di layar smartphone.",
            "Optimalisasi Bottom-Sheet Modal Retur (index.html): Memperlebar wadah modal retur penjualan dan supplier di layar HP (w-full max-w-full sm:max-w-2xl) sehingga form pengisian dan checklist barang mengisi seluruh bidang layar tanpa terasa sempit atau terhimpit.",
            "Penyelarasan Desain Sistem Native (style.css & returns.js): Standardisasi token kartu .card-native, tombol aksi ergonomis sentuh .btn-native-action (tinggi 40px, radius 12px), dan palet aksen tema toko dinamis di seluruh formulir dan ringkasan metrik.",
            "Multi-Channel Distribution v1.12.2 (Android versionCode 11202)."
        ]
    },
    {
        "id": "log-1-12-01",
        "version": "v1.12.1",
        "date": "2026-10-08",
        "title": "Penyempurnaan Dukungan Retur Multi-Varian Produk & Alokasi Karantina Cacat Pemasok",
        "category": "feature",
        "badge": "Variant RMA & Supplier Defect Quarantine v1.12.1",
        "items": [
            "Dukungan Penuh Retur Produk Multi-Varian ke Pemasok (returns.js): Formulir Retur Pembelian Supplier kini secara otomatis mendeteksi jika produk memiliki varian dan menyuguhkan pemilih varian dinamis. Setiap opsi menampilkan stok rak, stok gudang, karantina rusak, serta HPP spesifik varian.",
            "Kalkulasi HPP Presisi per Varian: Pemotongan nilai klaim hutang PO (AP deduction) atau pengembalian dana kas supplier kini menggunakan HPP spesifik dari varian yang dipilih (bukan HPP produk induk).",
            "Dukungan Retur dari Karantina Rusak (Quarantine to Vendor): Menambahkan opsi lokasi asal 'Karantina Rusak (damagedStock)' pada form retur supplier sehingga toko dapat mengembalikan barang cacat pabrik hasil retur konsumen langsung ke pabrik/distributor tanpa mengurangi stok jual yang aktif.",
            "Sinkronisasi Inventori Varian Real-Time (fifo-inventory.js): Pemotongan retur vendor pada produk bervarian otomatis memotong stok varian target dan mengagregasi kembali total persediaan produk induk di rak toko, gudang cadangan, dan karantina rusak.",
            "Label Visual Varian pada Ringkasan Tabel & Struk Thermal: Riwayat retur penjualan dan pembelian kini menampilkan badge nama varian [Varian] di tabel admin dan struk kasir thermal.",
            "Multi-Channel Distribution v1.12.1 (Android versionCode 11201)."
        ]
    },
    {
        "id": "log-1-12-00",
        "version": "v1.12.0",
        "date": "2026-10-08",
        "title": "Manajemen Retur & Rekonsiliasi Inventori (RMA Engine Customer & Supplier)",
        "category": "feature",
        "badge": "RMA Engine & Inventory Returns Reconciliation v1.12.0",
        "items": [
            "Modul Retur Penjualan Konsumen (Customer Sales Return): Modul terpadu untuk menangani pengembalian barang berbasis nomor struk kasir / Order ID. Dilengkapi checklist barang, validasi kuantitas maksimum retur (tidak melebihi sisa kuota beli), dan 3 opsi penyelesaian kompensasi: Pengembalian Tunai (Cash Refund), Saldo Kredit Toko (Store Credit), atau Tukar Barang (Exchange).",
            "Restorasi Stok Fisik & FIFO Lot Adaptif (fifo-inventory.js): Barang berkondisi baik dikembalikan ke Rak Toko (storeStock) dan dibuatkan tiket batch FIFO baru dengan prefix 'BATCH-RETUR-', sedangkan barang rusak/cacat dialokasikan ke Karantina Rusak (damagedStock) tanpa menambah stok jual agar kasir POS tidak menjual kembali barang rusak.",
            "Rekonsiliasi Finansial Kas Laci Otomatis: Pengembalian tunai (cash refund) secara otomatis mencatat pengeluaran di Buku Kas Operasional Toko (appData.expenses) kategori 'Retur Penjualan' bersumber kas laci (pos_cashier) agar rekonsiliasi kas dan X/Z report kasir tetap berimbang.",
            "Modul Retur Pembelian ke Supplier (Vendor Purchase Return): Pengembalian barang cacat pabrik langsung ke rekanan supplier dan rujukan PO Kulakan. Dilengkapi pemilihan alokasi stok asal (Rak Toko atau Gudang Cadangan), pemotongan inventori otomatis, dan opsi penyesuaian finansial (Potong Hutang PO / AP Deduction atau Pengembalian Dana Kas).",
            "Cetak Struk Thermal & Dokumen Resmi A4 (documents.js): Dukungan cetak bukti retur instan via printer thermal kasir (58mm/80mm) dan dokumen standar A4 resmi untuk Nota Retur Penjualan serta Surat Pengembalian Barang ke Pemasok lengkap tanda tangan serah terima.",
            "Multi-Channel Distribution v1.12.0 (Android versionCode 11200)."
        ]
    },
    {
        "id": "log-1-11-00",
        "version": "v1.11.0",
        "date": "2026-10-08",
        "title": "Kalkulator Estimator Material Bangunan & Presisi Kuantitas Desimal POS Kasir",
        "category": "feature",
        "badge": "Material Estimator Tool & POS Decimal Precision v1.11.0",
        "items": [
            "Kalkulator Estimator Bahan Bangunan Interaktif (material-estimator.js): Modul kalkulator material bangunan interaktif dengan formula presisi untuk 3 kategori pekerjaan konstruksi: (1) Cat Dinding & Plafon (luas m², daya sebar cat, alkali sealer, rekomendasi pail/galon); (2) Keramik & Granit Lantai/Dinding (ukuran ubin 30x30 s.d. 60x120, luas m², cadangan potongan 5-15%, dus keramik, sak semen perekat, kg nat); (3) Pasangan Dinding Bata Ringan/Hebel & Bata Merah (luas dinding dikurangi bukaan pintu/jendela, pcs hebel/bata, m³ hebel, sak semen mortar perekat thinbed/adukan semen pasir).",
            "Akses Multi-Channel Cepat & Pintar: Estimator dapat diakses instan melalui tombol header etalase Storefront, menu ubin Quick Menu di beranda toko, header POS Kasir, dan pintasan hotkey keyboard [F3] saat kasir sedang melayani pembeli.",
            "Otomasi Integrasi Keranjang & Transaksi Kasir POS: Tombol aksi cerdas pada setiap hasil kalkulasi estimator memungkinkan kasir/pelanggan langsung memasukkan seluruh kebutuhan material ke antrean keranjang kasir POS atau keranjang belanja etalase, menyalin rincian teks rapi ke clipboard, atau langsung berkonsultasi via WhatsApp Resmi Toko.",
            "Dukungan Kuantitas Desimal & Barang Curah Kiloan (pos.js): Kasir POS kini mendukung penjualan barang curah/timbangan (seperti paku kiloan, kawat, tiner eceran, selang/kabel per meter) dengan kuantitas desimal. Dilengkapi stepper adaptif 0.25 (untuk qty < 1) dan 0.5 (untuk pecahan), tombol cepat pecahan instan (¼, ½, ¾, 1), serta pelebaran input kuantitas antrean kasir.",
            "Presisi Rupiah Anti-Floating Point & Format Struk 3 Desimal: Mengeliminasi pembulatan pecahan JS Math.round pada subtotal item dan diskon kasir POS (misal 0.3 kg × Rp 24.000 terhitung tepat Rp 7.200). Struk thermal dan dokumen cetak kini mendukung format kuantitas hingga 3 desimal tanpa angka nol buntut (misal 0.25 kg, 1.5 m).",
            "Multi-Channel Distribution v1.11.0 (Android versionCode 11100)."
        ]
    },
    {
        "id": "log-1-10-99",
        "version": "v1.10.99",
        "date": "2026-10-08",
        "title": "Resolusi Paripurna Bocor Tag HTML Badge Tier Member & Penyelarasan Desain Visual POS Kasir",
        "category": "feature",
        "badge": "Clean POS Member Tier Badge & Anti-HTML Leak v1.10.99",
        "items": [
            "Eliminasi Total Kebocoran Tag HTML Mentah (pos.js): Memperbaiki bug tampilan data member pada modal pembayaran POS Kasir di mana badge tingkatan loyalitas memunculkan teks mentah '<I CLASS=\"FA-SOLID FA-AWARD MR-1\"></I> BRONZE MEMBER' akibat pemanggilan fungsi escape pada string badge HTML.",
            "Desain Visual Badge Tier Multilevel Harmonis: Mengekstrak tierName dan tierIcon secara terpisah dan deterministik, merender ikon vektor FontAwesome asli (<i class=\"fa-solid ...\"></i>) berpadu teks nama tier yang terproteksi escape XSS. Dilengkapi palet warna bertingkat resmi (Bronze = Amber/Orange hangat, Silver = Slate perak elegan, Gold = Yellow/Amber berkilau, Platinum = Purple royal eksklusif) di light & dark mode.",
            "Integrasi Impor Langsung getMemberTier (reward.js & pos.js): Mengimpor helper tingkatan loyalitas getMemberTier secara terstruktur pada modul POS dengan fallback berlapis (getMemberTier -> window.getMemberTier -> fallback default) sehingga kalkulasi tier selalu presisi dan kebal gangguan siklus hidup pemuatan skrip.",
            "Penyelarasan Tata Letak & Keamanan Bar Info Member: Memastikan badge tingkatan member, saldo poin loyalitas (Star), dan plafon Putri PayLater tersusun sejajar rapi (inline-flex, gap-1.5, shadow-2xs) tanpa distorsi teks kapital.",
            "Multi-Channel Distribution v1.10.99 (Android versionCode 11099)."
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
