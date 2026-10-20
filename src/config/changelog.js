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
        "id": "log-1-19-2",
        "version": "v1.19.2",
        "date": "2026-10-20",
        "title": "Smart Dual-Mode High-Contrast Solid Engine, Eliminasi Warna Belang-Belang & Penajaman Garis Border serta Font Mode Terang",
        "category": "optimization",
        "badge": "Smart Dual-Mode High-Contrast Solid Engine v1.19.2",
        "items": [
            "Smart Dual-Mode High-Contrast Solid Engine: Mengeliminasi disparitas kontras dan warna pudar di tampilan terang (Light Mode) serta menyelaraskan rasio kontras visual otomatis antara mode terang dan gelap tanpa efek gradasi.",
            "Penajaman Garis Pembatas (Border) & Divider: Meningkatkan hairline border kartu bento, panel CMS, modal, input form, dan pembagi (hr/divide) ke #cbd5e1 (Slate-300) di Light Mode dan #334155 di Dark Mode, menghadirkan batas elemen yang tegas, rapi, dan tidak kabur.",
            "Penajaman Font, Teks Sekunder & Ikon: Mengoptimalkan seluruh teks sekunder (text-slate-400 / text-slate-500) ke #475569 (Slate-600) dan #334155 (Slate-700) di Light Mode, melampaui standar aksesibilitas WCAG AA (5.7:1) & AAA (9.3:1) sehingga subtitle, SKU, catatan, dan ikon terbaca tajam dan tidak samar.",
            "Solid Fallback Anti-Transparansi & Anti White-on-White: Menyediakan pemetaan warna solid murni berbobot (Emerald #059669, Amber #d97706, Rose #e11d48, Blue #2563eb, Slate #0f172a, Primary var(--color-primary)) untuk seluruh elemen eks-gradasi, menjamin teks putih tidak hilang di atas latar terang.",
            "Uniform Solid Canvas & Flat Hairline Elevation: Menyeragamkan latar kanvas seluruh tema ke #f1f5f9 (Light) dan #0b1120 (Dark), mengeliminasi warna belang-belang dengan elevasi flat presisi (0 1px 3px rgba(15,23,42,0.08)).",
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
    },
    {
        "id": "log-1-18-11",
        "version": "v1.18.11",
        "date": "2026-10-19",
        "title": "Audit Komprehensif Sistem, Resolusi Floating-Point Stok Habis, Multi-Unit Keranjang, Dialog Konfirmasi & Presisi GPS",
        "category": "feature",
        "badge": "System Audit & Core Logic Resolution v1.18.11",
        "items": [
            "Resolusi Dialog Konfirmasi & Modals Proxy: Menyempurnakan showConfirm(...args) di src/core/utils.js untuk meneruskan seluruh 5 parameter secara utuh tanpa pemotongan argumen, menjamin tombol konfirmasi aksi aman (isDanger = false) di retur barang dan master preset tetap beraksen warna tema toko primer tanpa keliru berubah merah.",
            "Proteksi Floating-Point Stok Depleted & Auto-Deactivate: Menghilangkan residu desimal pada transaksi checkout dan terminal kasir POS dengan batas toleransi stok <= 0.0001 dipatok ke 0, memastikan produk dan varian yang terjual habis otomatis dinonaktifkan secara tepat waktu.",
            "Validasi Multi-Unit Multiplier Keranjang Belanja: Mengintegrasikan faktor pengali kemasan ci.unitMultiplier pada setCQty dan updCQty, menyelaraskan kuantitas maksimum kemasan (Dus/Karton/Lusin) dengan ketersediaan stok fisik riil di gudang toko.",
            "Presisi Kalkulasi Jarak GPS Khatulistiwa: Memperbaiki parser koordinat Haversine getDist di src/core/pricing.js dengan validasi isNaN(parseFloat), menjamin titik koordinat lintang 0 (Pontianak / khatulistiwa) terkalkulasi secara akurat tanpa terpotong menjadi 0 km.",
            "Multi-Channel Distribution v1.18.11 (Android versionCode 11811)."
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
    const defaultLatest = DEFAULT_CHANGELOG[0]?.version || 'v1.19.2';
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
