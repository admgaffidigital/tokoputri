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
        "id": "log-1-19-3",
        "version": "v1.19.3",
        "date": "2026-10-20",
        "title": "Universal Harmony Engine: Penyelarasan Border Radius Tombol, Badge Anti-Wrap & Anti-Bloat, dan Konsistensi Wadah Ikon (Icon Pods)",
        "category": "optimization",
        "badge": "Universal UI Harmony & Consistency Engine v1.19.3",
        "items": [
            "Universal Badge Anti-Wrap & Anti-Bloat Engine: Menstandarkan seluruh badge status dan info pill di seluruh aplikasi (Pesanan, Supplier, Kulakan PO, Retur, dan Tempo) dengan white-space: nowrap !important, line-height: 1.15, max-height 26px, dan letter-spacing proporsional, mengeliminasi teks bertumpuk atau mekar menggembung secara tuntas.",
            "Hierarki Border Radius Tombol Selaras: Mengunci seluruh tombol aksi ke sistem squircle terstandar: Tombol Utama/CTA/Submit (1rem / 16px), Tombol Sekunder/Filter Chiclet/Tab (0.75rem / 12px), Tombol Aksi Kompak (0.75rem / 12px), dan Micro Action/Drag Handle (0.5rem / 8px).",
            "Standarisasi Wadah Ikon (Icon Pods): Menyelaraskan border radius seluruh wadah ikon berdasarkan dimensi (Large 56-64px ke 16px squircle, Medium 40-48px ke 14px, Compact/Stat 32-36px ke 12px, dan Small 24-28px ke 8px) dengan proteksi aspect-ratio 1:1 anti-gepeng.",
            "Penyelarasan Template Modul CMS & Storefront: Merapikan seluruh template badge di orders.js, suppliers.js, purchases.js, table.js, tempo.js, dan index.html sehingga bebas dari inkonsistensi rounded-full jomplang.",
            "Suite Unit Test Baru test-button-badge-icon-harmony.mjs (20 pengujian) 100% Passed dan terintegrasi otomatis ke audit kesehatan sistem.",
            "Multi-Channel Distribution v1.19.3 (Android versionCode 11903)."
        ]
    },
    {
        "id": "log-1-19-2",
        "version": "v1.19.2",
        "date": "2026-10-20",
        "title": "Smart Dual-Mode High-Contrast Solid Engine, Eliminasi Total Kebocoran Warna Putih Dark Mode & Widget Arus Kas Harian",
        "category": "feature",
        "badge": "Smart Dual-Mode & Daily Cash Flow Hub v1.19.2",
        "items": [
            "Eliminasi Kebocoran Warna Putih di Dark Mode: Mengunci seluruh aturan warna putih (.bg-white/*) khusus ke html:not(.dark) dan menegakkan solid dark slate (#1e293b / #0f172a) pada seluruh kartu KPI, tombol sekunder, dan kartu utama di modul Supplier, Katalog Produk, PO Kulakan, Retur, dan Modal, mengeliminasi tampilan belang-belang secara tuntas.",
            "Widget Ringkasan Arus Kas Harian (Daily Cash Flow Hub): Menghadirkan 4 kartu bento likuiditas harian di Dashboard Utama CMS Owner (Kas Tunai Laci Hari Ini, Masuk Bank & QRIS Hari Ini, Pengeluaran Toko Hari Ini, dan Estimasi Arus Kas Bersih Masuk) dengan navigasi 1-klik dan proteksi privasi RBAC.",
            "Penajaman Garis Pembatas (Border) & Divider: Mengunci hairline border kartu bento, panel CMS, modal, dan pembagi ke solid #cbd5e1 (Slate-300) di Light Mode dan #334155 di Dark Mode, menghadirkan batas elemen yang tegas, rapi, dan tidak kabur.",
            "Penajaman Font, Teks Sekunder & Ikon: Mengoptimalkan seluruh teks sekunder ke #475569 (Slate-600) di Light Mode dan #94a3b8 / #cbd5e1 di Dark Mode, menjamin seluruh angka, label, dan subtitle terbaca tajam dan tidak samar.",
            "Solid Fallback Anti-Transparansi & Anti White-on-White: Menyediakan pemetaan warna solid murni berbobot untuk seluruh elemen eks-gradasi, menjamin teks putih tidak hilang di atas latar terang.",
            "Multi-Channel Distribution v1.19.2 (Android versionCode 11902)."
        ]
    },
    {
        "id": "log-1-19-1",
        "version": "v1.19.1",
        "date": "2026-10-20",
        "title": "Eliminasi Total Gradient, Glassmorphism, Efek Kaca Lengkung & Shadow Tebal — 100% Solid Flat Clean UI Engine",
        "category": "optimization",
        "badge": "Universal 100% Solid Flat Clean Engine v1.19.1",
        "items": [
            "Desain 100% Solid, Flat & Clean: Mengeliminasi seluruh efek warna gradasi (linear, radial, conic gradient) dan class bg-gradient-to-* pada seluruh halaman etalase, menu navigasi, kartu bento, header, modal, hingga footer, bertransformasi ke warna solid murni yang tegas, tenang, dan nyaman di mata.",
            "Eliminasi Glassmorphism & Efek Kaca Lengkung: Menghapus seluruh efek backdrop-filter blur kaca di header, navbar, drawer, dan modal. Menonaktifkan secara permanen efek kaca overlay bezel lengkung flagship (#flagship-edge-screen-overlay) untuk estetika flat minimalis modern.",
            "Shadow Flat Hairline & Border Bersih: Menurunkan seluruh bayangan tebal (shadow-2xl, shadow-xl, shadow-lg) menjadi flat subtle shadow (shadow-xs) dengan pembatas hairline border rapi (1px solid #e2e8f0 / dark: #334155).",
            "Universal Solid Clean Engine & Proteksi Struk Thermal: Menerapkan engine CSS otomatis di style.css dengan proteksi khusus garis barcode thermal repeating-linear-gradient pada struk nota POS agar tetap tercetak presisi dan tajam.",
            "Multi-Channel Distribution v1.19.1 (Android versionCode 11901)."
        ]
    },
    {
        "id": "log-1-19-0",
        "version": "v1.19.0",
        "date": "2026-10-20",
        "title": "Sistem HRD & Penggajian (Payroll) Terpadu, Multi-Role Staff, Presensi Kehadiran, Buku Kasbon, Slip Gaji Multi-Format & Beban Operasional",
        "category": "feature",
        "badge": "Integrated HRD, Payroll & Staff Compensation Engine v1.19.0",
        "items": [
            "Manajemen Staf & Multi-Role Terpadu: Struktur akun komprehensif untuk Pemilik Toko (Owner), Admin Operasional, Kasir POS, dan Staf Gudang/Logistik dengan ID Karyawan baku (EMP-xxx / OWN-001) dan kontrol hak akses granular 22 modul.",
            "Gaji Direksi Setara dalam Sistem: Profil Pemilik Toko (Owner) menerima gaji resmi direksi yang terpisah dari dividen/laba toko, memastikan transparansi mutlak antara kompensasi kerja dan laba bersih usaha.",
            "Buku Kasbon Karyawan & Skema Cicilan Fleksibel: Pengajuan kasbon pinjaman staf dengan skema sekali potong gaji atau cicilan multi-bulan (tenor), pelacakan sisa pinjaman otomatis, dan integrasi pengeluaran kas toko.",
            "Absensi Shift & Presensi Harian: Pencatatan status kehadiran (Hadir, Terlambat, Izin, Sakit, Alpha), 1-klik hadirkan semua staf, integrasi otomatis saat kasir membuka shift POS, serta kalkulasi tunjangan kehadiran.",
            "Mesin Penggajian (Payroll Engine) & Potongan Selisih Barang Hilang: Formula otomatis Take Home Pay memperhitungkan gaji pokok, tunjangan absensi, bonus/lembur, potongan angsuran kasbon, dan pemotongan selisih barang hilang/stock opname yang disesuaikan jabatan.",
            "Multi-Format Slip Gaji Resmi: Generator cetak Dokumen A4 PDF resmi, struk thermal kasir 58mm/80mm, serta 1-klik kirim slip gaji via pesan WhatsApp ke nomor HP staf.",
            "Integrasi Hulu-ke-Hilir ke Buku Kas Operasional (expenses.js): Setiap pembayaran gaji otomatis mencatat beban operasional kategori 'gaji' dan melunasi sisa kasbon staf, menyelaraskan laporan kas, laba rugi, dan perpajakan toko secara riil.",
            "Multi-Channel Distribution v1.19.0 (Android versionCode 11900)."
        ]
    },
    {
        "id": "log-1-18-12",
        "version": "v1.18.12",
        "date": "2026-10-19",
        "title": "Ekspor Brosur & Daftar Harga Cepat Kontraktor & Tukang (1-Klik PDF A4 & WhatsApp), Live Counter & Format Grosir",
        "category": "feature",
        "badge": "Contractor Price List & Instant Catalog Generator v1.18.12",
        "items": [
            "Generator Brosur & Daftar Harga Resmi (PDF A4 Multi-Halaman): Mengintegrasikan engine cetak A4 presisi di src/modules/print/documents.js lengkap dengan kop surat toko, logo resmi, alamat, kontak WhatsApp, nomor dokumen PL-YYYYMMDD-XXXX, masa berlaku estimasi, pembagian kategori rapi, kolom harga grosir/proyek, multi-varian, status ketersediaan, dan tanda tangan verifikasi.",
            "Salin Format WhatsApp 1-Klik untuk Kontraktor & Tukang: Menghasilkan format pesan WhatsApp terstruktur, ringkas, dan sangat informatif mencakup nama material, satuan, harga eceran, tier grosir, ketersediaan stok, dan tautan pemesanan proyek langsung ke chat WhatsApp toko.",
            "Modal Konfigurasi Fleksibel & Native Bottom Sheet: Menyediakan filter kategori dinamis, kata kunci pencarian, sakelar opsi varian, kolom grosir, status stok, dan live counter pill dengan standar antarmuka Native Bottom Sheet (rounded-t-[2rem] sm:rounded-3xl, pull-indicator pill, dan touch target 44px).",
            "Eliminasi Popstate Race Condition & Stabilitas Preview PDF A4: Menerapkan engine replaceModalHistory di router.js yang mentransisikan state modal secara deterministik dan mengeliminasi tabrakan history.back(), menjamin lembar preview dokumen A4 langsung muncul seketika tanpa tertutup kembali.",
            "Integrasi Toolbar Produk Admin & Universal Router: Menambahkan tombol 'Daftar Harga' berdampingan dengan Stock Opname di toolbar admin produk, terdaftar penuh pada MODAL_ELEMENT_MAP, closeModalByName, allKnownModals, dan gesture engine swipe dismiss.",
            "Multi-Channel Distribution v1.18.12 (Android versionCode 11812)."
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
    const defaultLatest = DEFAULT_CHANGELOG[0]?.version || 'v1.19.3';
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
