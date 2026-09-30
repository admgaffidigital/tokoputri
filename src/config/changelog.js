/**
 * ============================================================
 * KONFIGURASI LOG PEMBARUAN SISTEM (CHANGELOG)
 * Menyimpan riwayat rilis resmi bawaan sistem dan helper
 * untuk menggabungkan data statis dengan log dinamis Firestore.
 * ============================================================
 */

export const DEFAULT_CHANGELOG = [
    {
        id: 'log-1-10-5',
        version: 'v1.10.5',
        date: '2026-09-30',
        title: 'Universal Dynamic Theme Engine: Eliminasi Total Hardcode Warna & Penetrasi Tema Menyeluruh 100%',
        category: 'ui',
        badge: 'Universal Dynamic Theme Engine v1.10.5',
        items: [
            'Universal Dynamic Emerald Scale (tailwind.config.js & src/core/theme.js): Mengeliminasi kendala hardcode warna di mana pergantian tema sebelumnya tidak menjangkau seluruh modul akibat ratusan utility class emerald yang terkunci warna hijau. Kini seluruh skala warna emerald (50 s/d 950) dan nilai RGB-nya dibind secara dinamis ke palet tema yang aktif.',
            'Penetrasi Warna Menyeluruh 100% ke Seluruh Modul: Modul POS Kasir (tombol bayar, laci kas, kartu kembalian, ringkasan margin), Riwayat & Status Pesanan, Member VIP & Putri PayLater, Keranjang, Checkout, Dokumen Cetak, hingga Laporan Keuangan kini berubah warna serempak dan konsisten 100% mengikuti tema yang dipilih (Industrial CAT, Putri Gold, Burgundy, Blue, dll.).',
            'Dukungan Opasitas & Gradien Presisi (withOpacity Helper): Memperbarui konfigurasi Tailwind CSS dengan helper withOpacity yang mendukung alpha value rgba() pada seluruh skala warna (misal: bg-emerald-500/20, border-emerald-200/80, bg-emerald-950/40), memastikan gradien dan transparansi tetap presisi tanpa ada warna yang pudar atau rusak.',
            'Pembersihan Hardcode Latar Belakang View Section (index.html): Menghapus kelas bg-slate-50 dark:bg-slate-900 dari kontainer view (Keranjang, Checkout, Pembayaran, Riwayat Pesanan, Wishlist, FAQ, dan Dashboard Admin) sehingga warna kanvas dan gaya latar belakang (Minimalis, Hero Arch, Aurora Glow, Tech Grid, Industrial) menembus dan menyatu secara seamless di seluruh halaman.',
            'Eliminasi Warna Hardcode Khusus (Quick Menu & Shortcut Admin): Menghilangkan nilai warna statis #FAF8F5 dan #01875f pada tombol shortcut menu admin dan kartu unduh APK, menggantikannya dengan variabel tema adaptif dan kartu frosted putih elegan.',
            'Instant Theme Bootstrap Script (index.html): Memperbarui script inisialisasi di dalam tag <head> dengan pustaka lengkap (termasuk Industrial, Gold, dan Burgundy) serta injeksi instan CSS variables dan data-bg-style sebelum render pertama, mengeliminasi kedipan (FOUC) saat aplikasi dibuka.',
            'Multi-Channel Build & Sync v1.10.5 (Android versionCode 11005): Kompilasi produksi web, sinkronisasi bundle flashdisk siap pakai, dan Android Capacitor tersinkronisasi 100%.'
        ]
    },
    {
        id: 'log-1-10-4',
        version: 'v1.10.4',
        date: '2026-09-30',
        title: 'Diferensiasi Signifikan Tema & Karakter Visual: 5 Gaya Latar Belakang Unik & Kontras Nyata',
        category: 'ui',
        badge: 'Distinct Theme Ambience v1.10.4',
        items: [
            'Diferensiasi Signifikan Antar-Gaya Latar Belakang (src/style.css & src/core/theme.js): Mengeliminasi keseragaman latar yang sebelumnya terasa sama saja, kini setiap gaya latar belakang menghadirkan atmosfer, warna kanvas, siluet header, dan kontras kartu yang 100% berbeda dan langsung terlihat perubahannya.',
            'Minimalis Clean Studio: Kanvas putih gading mewah (#FAF8F5 / #0B1120) dengan header flat bersih dan kartu berbingkai halus, terinspirasi estetika toko ritel modern.',
            'Hero Arch (Kanopi Lengkung Kubah): Hadir dengan kubah kanopi lengkung megah berwarna primer toko yang menjulur dari header dan membingkai banner sambutan etalase secara dramatis.',
            'Aurora Glow (Pendaran Gradien Bercahaya): Kanvas atmosferik bercahaya dengan pendaran ambient multi-zone di sudut-sudut layar serta halo glow bercahaya pada kartu Bento katalog.',
            'Tech Grid (Arsitektur Slate Modern): Kanvas bernuansa dingin arsitektural (#EEF2F6 / #0A0E17) dengan kontras garis presisi (#CBD5E1) dan header dual-tone berkarakter teknik presisi tinggi.',
            'Industrial Heavy-Duty (Toko Bangunan & Alat Pertukangan): Kanvas beton baja abu-abu (#E2E8F0 / #111827) yang kokoh dan berbobot, membuat kartu produk putih menonjol dengan kontras tajam (High Contrast), bayangan berbobot, dan header baja pekat.',
            'Penyelarasan Kartu Mockup CMS Pengaturan: Setiap kartu preview di CMS Pengaturan kini mencerminkan warna kanvas, siluet header, dan aura tema aslinya secara akurat.',
            'Multi-Channel Build & Sync v1.10.4 (Android versionCode 11004): Kompilasi produksi web, sinkronisasi bundle flashdisk siap pakai, dan Android Capacitor tersinkronisasi 100%.'
        ]
    },
    {
        id: 'log-1-10-3',
        version: 'v1.10.3',
        date: '2026-09-30',
        title: 'Pembersihan Total Corak Bintik & Garis (Zero Texture Noise): Latar Belakang Mulus, Bersih & Elegan',
        category: 'ui',
        badge: 'Zero Texture Noise Purity v1.10.3',
        items: [
            'Pembersihan Menyeluruh Bintik-Bintik (Zero Dots): Mengeliminasi seluruh pola dot-matrix (radial-gradient) pada kanvas aplikasi (body dan #app-container), header, dan dynamic background yang sebelumnya menimbulkan kesan bintik-bintik berlebih pada layar.',
            'Eliminasi Garis-Garis Silang & Hazard (Zero Stripes): Menghilangkan seluruh corak arsiran diagonal (repeating-linear-gradient), garis plat bordes silang, garis hazard, garis putus-putus CAD, dan bracket sudut dari latar belakang maupun header.',
            'Kanvas Mulus Mewah & Ambient Wash Lembut: Menghadirkan permukaan latar belakang yang bersih, halus, dan elegan (warm luxury off-white #FAF8F5 pada mode terang, sleek slate #0B1120 pada mode gelap) dipadukan dengan pencahayaan ambient vertikal yang mengalir natural tanpa bising visual.',
            'Header Bersih, Solid & Berbobot: Seluruh model gaya header (Minimalis, Hero Arch, Aurora, Tech Grid, dan Industrial) kini tampil solid dan bergradien halus tanpa gangguan tekstur titik-titik maupun garis miring.',
            'Bento Islands Tetap Terstruktur Rapi: Konten toko (Katalog Reward, Voucher Diskon, Kategori, Brand) tampil menonjol, tajam, dan kontras di atas kanvas bersih.',
            'Multi-Channel Build & Sync v1.10.3 (Android versionCode 11003): Kompilasi produksi web, sinkronisasi bundle flashdisk siap pakai, dan Android Capacitor tersinkronisasi 100%.'
        ]
    },
    {
        id: 'log-1-10-2',
        version: 'v1.10.2',
        date: '2026-09-30',
        title: 'Peluncuran Tema Visual Heavy-Duty Industrial & Palet Warna CAT Amber Toko Teknik',
        category: 'ui',
        badge: 'Heavy-Duty Industrial Theme v1.10.2',
        items: [
            'Model Gaya Visual Background Baru "Industrial" (src/core/theme.js & src/style.css): Menambahkan opsi ke-5 gaya visual latar belakang dengan tekstur plat baja bordes mikro (steel diamond plate tread), aksen garis hazard safety (45° safety stripes), siraman ambient wash 480px, dan panduan CAD arsitektural berspesifikasi Heavy-Duty toko teknik.',
            'Header Industrial Berkarakter Kuat: Menghadirkan pola mikro hazard line dan aksen border baja solid 2px pada header saat mode background Industrial aktif.',
            'Palet Warna Baru "Industrial CAT" (uiPalettes & CMS Settings): Menambahkan preset palet warna kuning-amber industri (#d97706) khas Caterpillar & DeWalt dengan kontras WCAG AAA dan chip swatch interaktif di menu pengaturan warna tema.',
            'Mini Smartphone Mockup Preview Baru: Menambahkan visual mini preview Industrial (.mini-preview-industrial) dengan badge "Heavy-Duty" pada kartu pemilihan latar belakang CMS Pengaturan.',
            'Multi-Channel Build & Sync v1.10.2 (Android versionCode 11002): Kompilasi produksi web, sinkronisasi bundle flashdisk siap pakai, dan Android Capacitor tersinkronisasi 100%.'
        ]
    },
    {
        id: 'log-1-10-1',
        version: 'v1.10.1',
        date: '2026-09-30',
        title: 'Sistem Visual Background Arsitektur Presisi & Bento Island Container: Elevasi Tampilan Aplikasi Profesional',
        category: 'ui',
        badge: 'Precision Architectural Background & Bento Islands v1.10.1',
        items: [
            'Kanvas Visual Modern Arsitektur Presisi (src/style.css): Mengeliminasi latar putih polos flat menjadi kanvas bertekstur dot-matrix arsitektural halus (24px x 24px) dengan pencahayaan ambient top wash dinamis yang beradaptasi otomatis mengikuti warna tema toko (Burgundy, Gold, dll.) baik di Light Mode maupun Dark Mode.',
            'Transparansi Dinamis View Section: Memperbarui kelas .view-section menjadi transparan agar dekorasi visual latar belakang dan dynamic-bg-container bersinar menembus seluruh halaman aplikasi tanpa tertutup lapisan latar opak.',
            'Penyempurnaan 4 Model Gaya Visual Background (src/core/theme.js): Memperkaya preset gaya visual latar belakang toko (Minimalis Clean Studio dengan soft aura horizon, Hero Arch dengan kanopi dome lengkung, Aurora Glow dengan mesh dual-zone, dan Tech Grid dengan blueprint CAD presisi) secara solid, tajam, dan 100% bebas blur (Zero Blur).',
            'Standardisasi Bento Island Container Etalase (src/modules/member/reward.js & src/modules/home/sections.js): Menyelaraskan Katalog Reward Poin dan Voucher Diskon Toko ke dalam wadah Bento Island Card terstruktur (rounded-2xl border border-slate-100 bg-white) seragam dengan Kategori Produk dan Brand Mitra.',
            'Multi-Channel Build & Sync v1.10.1 (Android versionCode 11001): Kompilasi produksi web, sinkronisasi paket flashdisk, dan Android Capacitor tersinkronisasi 100%.'
        ]
    },
    {
        id: 'log-1-10-0',
        version: 'v1.10.0',
        date: '2026-09-30',
        title: 'Unifikasi Visual Total Modul Pengaturan Admin: Konsistensi Warna Tema 100% & Eliminasi Warna Hardcoded',
        category: 'improvement',
        badge: 'Settings UI Consistency v1.10.0',
        items: [
            'Standardisasi Bento Grid Menu Pengaturan (rAdmSet): Refaktor header banner dan 8 kartu menu utama — Profil Toko, Kategori & Brand, Pengiriman, QRIS Pay, Sistem & API, Operasional, Printer Struk, dan Backup & Data — menggunakan gradien dan shadow berbasis var(--color-primary) sepenuhnya.',
            'Harmonisasi Kartu Form Sub-Pengaturan: Semua kartu konten di dalam 6 form sub-pengaturan (profile, catalog, shipping, payment, config, operasional) kini menggunakan bg-slate-50/80 dark:bg-slate-900/60 dan icon badge rgba(var(--color-primary-rgb)) secara seragam.',
            'Eliminasi Total Warna Hardcoded (Zero Hardcoded Colors): Menghapus seluruh penggunaan kelas Tailwind warna statis (bg-amber-500, text-blue-600, bg-emerald-100, border-amber-300, dll.) di settings.js dan menggantinya dengan CSS variable dinamis — badge "Modern iOS" Aurora Glow, badge "Pro Teknik" Tech Grid, badge "QRIS Siap Digunakan", dan tombol "Animasi GIF Maskot" di modal banner.',
            'Konsistensi Callout Box & Info Banner: Seluruh kotak informasi/tip di semua form pengaturan (stok, pajak, ongkir, katalog, QRIS) menggunakan skema warna seragam berbasis rgba(var(--color-primary-rgb),0.06) sehingga otomatis menyesuaikan tema toko aktif.',
            'Multi-Channel Build & Sync v1.10.0 (Android versionCode 11000): Kompilasi produksi web, sinkronisasi bundle distribusi, dan Android Capacitor tersinkronisasi 100%.'
        ]
    },
    {
        id: 'log-1-9-99',
        version: 'v1.9.99',
        date: '2026-09-30',
        title: 'Smart Perpajakan Republik Indonesia 2026, Solusi Wajib Pajak Badan Bebas PPN (0%), dan Presisi Nilai Penarikan Pajak',
        category: 'feature',
        badge: 'Smart Tax RI 2026 & Zero-Tax Precision v1.9.99',
        items: [
            'Resolusi Akar Masalah Edit Tarif PPN 0% (src/main.js & src/modules/admin/settings.js): Memperbaiki bug evaluasi falsy JavaScript (|| 11) yang sebelumnya selalu memaksa tarif pajak kembali ke 11% saat diketik 0 atau angka desimal. Pengaturan tarif pajak kini mendukung nilai 0% secara presisi dan permanen.',
            'Solusi Wajib Pajak Badan Non-PKP / Bebas PPN (0%): Menghadirkan solusi resmi bagi Wajib Pajak Badan yang ingin tetap menampilkan rincian Dasar Pengenaan Pajak (DPP) dan baris PPN 0% (Rp 0) di struk kasir, invoice A4 resmi, dan checkout belanja tanpa menarik biaya pajak sepeser pun ke pelanggan.',
            '4 Preset Cerdas Smart Perpajakan RI 2026 (1-Klik Auto Config): Menambahkan tombol preset 1-klik di CMS Pengaturan: (1) 🏢 Badan Non-PKP / UMKM (Tarif 0% Transparan, Pelanggan Bebas PPN, Baris Pajak Tercetak); (2) 🏷️ Harga Toko Inklusif (Pajak 11% sudah di dalam harga produk, pembeli bayar nominal asli, DPP & PPN diurai di struk); (3) 🏛️ PKP Standar 11% UU HPP (Eksklusif ditambah di checkout/kasir); (4) ⚡ PKP Penyesuaian 12% UU HPP (Tahapan regulasi UU Harmonisasi Perpajakan).',
            'Harmonisasi Cetak Struk & Faktur Resmi Seluruh Saluran: Menyelaraskan pencetakan NPWP Toko (format 16-Digit CTAS DJP 2026) dan baris DPP & PPN (0%) pada Struk HTML (receipt.js), Struk Thermal Bluetooth RawBT 58/80mm (rawbt.js), Faktur Tagihan / Invoice A4 resmi (documents.js), Modal Rincian Pesanan (orders.js), dan Modal Preview Kasir POS (pos.js).',
            'Integrasi Regulasi PP 55 Tahun 2022 (src/modules/admin/finance.js): Memperbarui modul Pajak & Keuangan dari PP 23/2018 menjadi PP 55/2022 (PPh Final 0,5% Badan UMKM dari omset), menghadirkan kartu ringkasan estimasi setoran PPh Final 0,5% per bulan dan per tahun, serta sinkronisasi NPWP dua arah.',
            'Multi-Channel Build & Sync v1.9.99 (Android versionCode 10999): Kompilasi produksi web, sinkronisasi bundle distribusi flashdisk siap pakai, dan Android Capacitor tersinkronisasi 100%.'
        ]
    },
    {
        id: 'log-1-9-98',
        version: 'v1.9.98',
        date: '2026-09-30',
        title: 'Penambahan Tema Warna Burgundy Mewah & Elegan di CMS Pengaturan',
        category: 'ui',
        badge: 'Regal Burgundy Theme v1.9.98',
        items: [
            'Palet Warna Burgundy Mewah (src/core/theme.js): Menambahkan tema warna Burgundy (#800020) dengan 10 skala warna Tailwind harmonis (50-900) yang memancarkan aura merah anggur klasik, berkelas, dan berkontras tinggi (rasio kontras 8.78:1 memenuhi standar WCAG AAA).',
            'Integrasi Swatch Tema CMS Pengaturan (src/modules/admin/settings.js): Menghadirkan chip warna Burgundy interaktif dengan tooltip "Burgundy", preview instan langsung saat diklik, dan penyimpanan otomatis ke preferensi toko dan PWA meta tags.',
            'Multi-Channel Build & Sync v1.9.98 (Android versionCode 10998): Kompilasi produksi web, paket flashdisk, dan platform Android Capacitor tersinkronisasi 100%.'
        ]
    },
    {
        id: 'log-1-9-97',
        version: 'v1.9.97',
        date: '2026-09-30',
        title: 'Eliminasi Total Efek Blur & Glassmorphism: Desain Solid, Tajam, Berkontras Tinggi & Kinerja Maksimal',
        category: 'ui',
        badge: 'Zero Blur & Pure Solid Clarity v1.9.97',
        items: [
            'Penghapusan Total Efek Blur & Glassmorphism di Seluruh Ekosistem: Menghilangkan semua efek backdrop-blur, blur orbs, dan filter kaca di etalase toko, modal katalog, POS kasir, panel admin CMS, serta paket build Toko Putri.',
            'Universal CSS Anti-Blur Shield (src/style.css): Mengimplementasikan aturan global backdrop-filter: none !important dan filter: none !important pada seluruh elemen, kelas [class*="backdrop-blur"], [class*="blur-"], dan selector modal/overlay untuk mencegah kebocoran efek buram.',
            'Penataan Ulang Preset Background (src/modules/admin/settings.js & src/core/theme.js): Mengeliminasi preset "Glass Studio" dan menata ulang pilihan latar belakang toko menjadi 4 opsi simetris 2x2 yang solid dan elegan: Minimalis, Hero Arch, Aurora Glow, dan Tech Grid.',
            'Transisi Modal & Bottom Sheet Solid (index.html, pos.js, pos-shift.js, pos-auth.js, pos-cashier-admin.js, reward.js): Mengubah seluruh overlay modal dan bottom sheet dari latar semi-transparan buram menjadi latar solid berbobot (bg-slate-900/80 - bg-slate-900/85) yang tajam, kontras tinggi, dan nyaman dibaca.',
            'Pembersihan Orbs & Halo Blur (sections.js, reward.js, orders.js, finance.js, index.html): Mengeliminasi lingkaran-lingkaran blur dekoratif yang dapat memperberat kinerja rendering GPU perangkat pengguna.',
            'Kapsul Notifikasi & Floating Bar Solid (src/style.css, native-mobile.js, pos.js): Mengubah popup toast notifikasi dan floating bar mobile kasir menjadi kapsul solid ber-outline tegas tanpa lapisan buram berkabut.',
            'Multi-Channel Build & Sync v1.9.97 (Android versionCode 10997): Kompilasi produksi web, sinkronisasi folder distribusi siap pakai, paket flashdisk, dan platform Android Capacitor.'
        ]
    },
    {
        id: 'log-1-9-96',
        version: 'v1.9.96',
        date: '2026-09-29',
        title: 'Dual-Model Varian Cerdas, Icon Cover Fallback Squircle Emas & Harmonisasi Presisi Chip POS Kasir',
        category: 'feature',
        badge: 'Smart Variants + Icon Cover + POS Chip Precision v1.9.96',
        items: [
            'Arsitektur Dual-Model Varian (src/modules/catalog/product-modal.js): Membedakan secara cerdas tampilan varian menjadi 2 model: Model Katalog Warna Cat (khusus jika kode HEX diisi sebagai simulasi warna cat) dan Model Varian Standar / Umum (jika kode HEX tidak diisi seperti pada gembok, paku, pipa, alat teknik, dll).',
            'Model 1 - Swatch Katalog Warna Cat: Merender kartu grid swatch katalog warna cat presisi dengan lingkaran warna HEX asli sebagai simulasi warna cat, kode warna/katalog, nama varian, dan tombol kaca pembesar untuk pratinjau perbesar warna.',
            'Model 2 - Varian Standar Flex-Chips: Merender varian non-cat dalam bentuk horizontal flex-wrap chips/pills yang ringkas, rapi, dan modern layaknya e-commerce profesional.',
            'Eliminasi Lingkaran Warna Dummy (#CBD5E1): Menghapus paksaan fallback swatch abu-abu palsu pada produk non-cat sehingga varian umum tidak lagi berpenampilan seperti produk cat.',
            'Pengecualian Gambar Thumbnail Varian: Jika varian standar memiliki gambar foto (v.img), chip varian menampilkan thumbnail foto varian; jika tanpa foto dan tanpa hex, chip tampil bersih sebagai teks murni.',
            'Harmonisasi Lembar Varian Kasir POS (src/modules/pos/pos-variant-sheet.js): Menyelaraskan tampilan varian kasir dengan membaca colorCode untuk warna cat dan thumbnail foto untuk varian bergambar.',
            'Icon Cover Fallback Estetik Squircle Emas (src/modules/catalog/catalog.js & pos.js): Khusus untuk produk yang belum memiliki foto, kartu produk di etalase dan kasir menampilkan pod squircle solid bergradien emas murni (fa-box-open / fa-bag-shopping) dengan watermark resmi "PUTRI UTAMA TEKNIK". Produk yang memiliki foto asli tetap menampilkan fotonya secara proporsional dan bersih.',
            'Pemindahan Badge dari Overlay Foto Produk POS (src/modules/pos/pos.js): Memindahkan badge diskon promo dan badge stok/sisa dari posisi menimpa gambar ke baris chip info di bawah atau di samping nama produk, menjaga foto produk tetap bersih dan tidak tertutup.',
            'Harmonisasi Presisi Chip Info POS Kasir (src/modules/pos/pos.js & src/style.css): Mengunifikasi seluruh badge operasional (Diskon, Varian, Grosir, PO, Stok, Sisa) menggunakan kelas seragam pos-tag-chip ber-outline tipis (pos-tag-promo & pos-tag-stock) dengan border-radius 5px, padding 1px 5px, font 8px, serta kontainer 1 baris presisi flex-nowrap overflow-hidden sehingga tidak pernah wrap berantakan.',
            'Multi-Channel Build & Sync v1.9.96 (Android versionCode 10996): Sinkronisasi paket web produksi, flashdisk, dan platform Android Capacitor.'
        ]
    },
    {
        id: 'log-1-9-95',
        version: 'v1.9.95',
        date: '2026-09-29',
        title: 'Redesain Menyeluruh Visual Cover Produk Tanpa Foto: Modern 3D Studio Claymorphism & Eliminasi Monogram Kaku',
        category: 'ui',
        badge: 'Modern 3D Studio Claymorphism Cover v1.9.95',
        items: [
            'Arsitektur Visual 3D Claymorphic Studio (src/core/product-cover.js & src/style.css): Menggantikan latar gelap kusam dan hitam kelam dengan kanvas studio porcelain hangat (#fdfcf9 ke #eee6d8) bertekstur architectural micro-grid halus dan ambient volumetric aura yang mewah.',
            'Wadah Ikon 3D Squircle Melayang (Floating 3D Pod): Menghadirkan pod squircle 3D berbahan claymorphic lembut dengan multi-layer soft drop shadow dan highlight berkilau yang memberikan kedalaman fisik realistis.',
            'Eliminasi Huruf Monogram Kaku (MB / GC): Menghapus singkatan inisial besar yang membingungkan dan menggantikannya dengan ikon ilustrasi kategori produk yang besar, hidup, dan tajam (32px-38px) dengan efek drop-shadow dan micro-interaction interaktif saat di-hover.',
            'Pengayaan Kategori & Penyelarasan Tema Toko: Menambahkan tema Kebutuhan & Rumah Tangga (minyak, sembako, dll) dengan gradien Warm Golden Honey, memperbarui tema Perkakas menjadi Titanium Blue cerah, Gembok & Kunci dengan Golden Brass, serta tema bawaan Radiant Warm Luxury Gold khas Toko Putri.',
            'Kapsul Kategori Melayang & Watermark Resmi: Dilengkapi frosted glass capsule pill presisi di bagian bawah pod dan tanda watermark halus PUTRI UTAMA TEKNIK yang mempertegas identitas ritel bergaransi resmi.',
            'Multi-Channel Build & Sync v1.9.95 (Android versionCode 10995): Build produksi Vite, paket flashdisk, dan platform Android Capacitor terkompilasi dan tersinkronisasi 100%.'
        ]
    },
    {
        id: 'log-1-9-94',
        version: 'v1.9.94',
        date: '2026-09-29',
        title: 'Ekosistem Animasi GIF Maskot Hero Banner & Integrasi Cerdas Google Drive 8MB',
        category: 'ui',
        badge: 'Animated Mascot GIF Ecosystem v1.9.94',
        items: [
            'Integrasi Maskot Animasi GIF (/putri_mascot_anim.gif): Mengunduh dan menanamkan aset animasi GIF maskot resmi (7.52MB) ke dalam penyimpanan lokal aplikasi, menghadirkan rendering 0ms instan tanpa ketergantungan kuota atau rate limit Google Drive.',
            'Presisi Deteksi Tipe & Ekstensi File Upload (src/services/upload.js): Memperbaiki validasi MIME type pada handleImageUpload dan handleRTEditorImage agar memeriksa ekstensi .gif secara cerdas, mengeliminasi galat salah baca batas 3MB pada file GIF hingga 8MB.',
            'Penangan Tautan Cerdas Google Drive (src/core/utils.js): Memperbarui fungsi fixD untuk mendeteksi file animasi GIF dari Google Drive dan menyajikannya dalam format direct stream (uc?export=view) serta direct Google CDN tanpa re-encode ke JPEG statis.',
            'Tombol Aksi 1-Klik Animasi Maskot di CMS (src/modules/admin/settings.js): Menambahkan tombol "Animasi GIF Maskot ✨" pada pengaturan profil CMS dan modal quick-edit banner sambutan untuk beralih instan antara maskot bergerak dan 3D statis.',
            'Sinkronisasi Multi-Kanal v1.9.94 (Android versionCode 10994): Build web produksi Vite, paket flashdisk, dan sinkronisasi Capacitor Android terbarui secara menyeluruh.'
        ]
    },
    {
        id: 'log-1-9-93',
        version: 'v1.9.93',
        date: '2026-09-29',
        title: 'Harmonisasi Tema Berjalan (Dynamic Theme) & Kustomisasi Maskot Hero Banner CMS',
        category: 'ui',
        badge: 'Dynamic Theme & Mascot CMS v1.9.93',
        items: [
            'Penyelarasan Warna Hardcoded (Theming): Menghapus hardcoding warna amber pada badge voucher, tiket promo, badge katalog reward, tombol tukar poin, dan quick menu modal (index.html). Seluruh elemen sekarang menggunakan variabel CSS tema aktif var(--color-primary) atau utilitas dinamis rgba().',
            'Pengelolaan Hero Banner & Maskot 3D (src/modules/admin/settings.js): Menambahkan kartu pengaturan baru di tab Admin Settings CMS untuk memodifikasi Banner Welcome dan Maskot 3D slide. Menambahkan toggle untuk mematikan/menyalakan slide hero dan input URL gambar kustom untuk maskot utama.',
            'Akses Cepat Pengelola Banners (src/modules/admin/products/table.js): Menambahkan kartu navigasi cerdas di tab Banners admin untuk memandu pengguna menuju panel pengaturan Hero & Maskot 3D di CMS.',
            'Optimasi Background Gradien Welcome Banner (src/modules/home/sections.js): Mengubah background gradien pada slide #0 agar senantiasa sinkron dengan konfigurasi warna tema yang dipilih pengguna.'
        ]
    },
    {
        id: 'log-1-9-92',
        version: 'v1.9.92',
        date: '2026-09-29',
        title: 'Harmonisasi Total Seluruh Tampilan Ekosistem: Kalibrasi Radiant Warm Luxury Gold, Eliminasi Disk Blur Gelap, Bento Stat Cards & Rekonsiliasi Visual POS Kasir 100%',
        category: 'ui',
        badge: 'Ecosystem Visual Harmony v1.9.92',
        items: [
            'Kalibrasi Palet Radiant Warm Luxury Gold (src/core/theme.js): Memperbarui shade gold (500: #c59b27, 600: #a87f1b, 400: #e1b858) menggantikan warna lama (#9d7d1e) yang kusam/olive, dilengkapi migrasi otomatis saat boot dari localStorage dan appData.store.themeColor.',
            'Eliminasi Lingkaran Disk Gelap Blur-3xl (src/core/theme.js, suppliers.js, purchases.js, backup-sync.js): Mengganti orbs blur-3xl rounded-full yang terdampak filter:none dengan CSS radial-gradient halus, mengeliminasi lingkaran disc pekat pada background hero etalase, tab rekanan, riwayat pembelian, dan sinkronisasi backup.',
            'Bento Stat Cards & Rekanan Modern (src/modules/admin/suppliers.js): Merombak 4 kartu ringkasan rekanan (Total Rekanan, Barang Terhubung, Hutang Usaha, PO Berjalan) menjadi kartu Bento dengan wadah ikon squircle bergradien dinamis dan rasio proporsional.',
            'Harmonisasi Penuh POS Kasir (src/style.css, src/modules/pos/pos.js, src/modules/pos/pos-shift.js): Header kasir storefront (.pos-storefront-header) ditingkatkan dengan gradien emas mewah anti-tabrakan status bar, tombol tambah [+] bergradien hangat 30px, filter kategori aktif dengan gradien emas bercahaya, tombol pembayaran utama, serta modal Buka Shift Kasir Baru dan ringkasan shift kasir yang selaras 100% dengan tema.',
            'Unifikasi Action Toolbar Dokumen Pesanan (index.html): Menstandarisasi bilah tombol cetak dokumen pesanan (Struk POS, Invoice A4, Surat Jalan) menjadi toolbar dokumen terpadu netral elegan dengan aksen emerald WhatsApp dan rose Hapus.',
            'Penyelarasan Swatch Varian & Tombol Beli (src/modules/catalog/product-modal.js, index.html): Menggantikan kelas warna amber statis dengan token tema var(--color-primary), cincin seleksi aktif berbayang, dan tombol Beli Sekarang bergradien emas dinamis.',
            'Multi-Channel Build & Sync v1.9.92 (Android VersionCode 10992): Terkompilasi dan tersinkronisasi penuh ke Vite build produksi, paket flashdisk, dan Capacitor Android.'
        ]
    },
    {
        id: 'log-1-9-91',
        version: 'v1.9.91',
        date: '2026-09-29',
        title: 'Unifikasi Total UI/UX Tema Luxury Gold & Soft Claymorphism 4 Layar Flagship: Welcome Hero Mascot 3D, Kartu Member VIP, 3-Kolom Swatch Quick Variant Sheet & Bento Grid App Launcher',
        category: 'ui',
        badge: 'Total UI/UX Unification v1.9.91',
        items: [
            'Layar 1 — Storefront Homepage (src/modules/home/sections.js, src/modules/home/banner.js, src/style.css): Implementasi kanvas mewah hangat #FAF8F5, Slide #0 Welcome Hero Card dengan maskot 3D Toko Putri (wanita berhijab & helm keselamatan proyek), katalog reward loyalitas bersih berlabel ganda "GRATIS" + "X Poin", serta voucher tiket belanja warm gold metalik dengan punch hole presisi.',
            'Layar 2 — Modal Kartu Member Digital VIP (src/modules/member/reward.js): Redesain kartu loyalitas VIP dengan tekstur tembaga/perunggu metalik berkilau, smart chip EMV realistis, nomor kartu 16-digit beraksen timbul (embossed), formulir pencarian member WhatsApp (+62), keuntungan member VIP, dan katalog penukaran hadiah terpadu.',
            'Layar 3 — Quick Variant Sheet & Full Product Swatch (src/modules/catalog/product-modal.js, index.html): Penyelarasan swatch varian produk menjadi kisi 3-kolom mobile-first dengan titik warna melingkar berbayang, cincin seleksi aktif warm gold beraksen emas (ring-amber-400), subtotal live calculator real-time, tombol wishlist cepat, serta sticky action footer ergonomis (+ Keranjang & Beli Sekarang).',
            'Layar 4 — Bento Grid App Launcher & Menu Navigasi Utama (index.html, src/modules/admin/settings.js): Transformasi menu cepat storefront (#quickmenu-modal-content) dan navigasi modul admin (#admin-dashboard-view) menjadi ubin Bento Grid 2-kolom dengan wadah ikon squircle bergradien dinamis, kartu Play Store unduh aplikasi APK resmi, dan palet Putri Gold bawaan.',
            'Harmonisasi Menu Pengaturan Toko (src/modules/admin/settings.js): Merombak grid Pengaturan Toko yang sebelumnya asimetris (7 kartu dengan 1 slot kosong di desktop) menjadi Bento Grid 8-kartu simetris presisi (2x4 desktop / 4x2 mobile) dengan wadah ikon squircle bergradien dinamis, serta menyematkan kartu ke-8 untuk akses langsung ke Backup & Data Cloud.',
            'Harmonisasi Total Seluruh Tampilan Toko (src/style.css): Mengeliminasi kontras abu-abu dingin (bg-slate-50) di seluruh tampilan keranjang (view-cart), checkout (view-checkout), pembayaran (view-payment), riwayat pesanan (view-orders), wishlist (view-wishlist), dan pusat bantuan (view-faq) agar 100% selaras dengan kanvas mewah hangat #FAF8F5.',
            'Multi-Channel Build & Sync v1.9.91 (Android VersionCode 10991): Terkompilasi dan tersinkronisasi penuh ke Vite build produksi, paket flashdisk, dan Capacitor Android.'
        ]
    },
    {
        id: 'log-1-9-90',
        version: 'v1.9.90',
        date: '2026-09-29',
        title: 'Perbaikan Kritis Navigasi Kategori: Sinkronisasi Nilai Opsi "Pill Horizontal Scroll", Eliminasi Anomali Grid Ikon Permanen, dan Re-Render Instan Etalase Toko',
        category: 'bugfix',
        badge: 'Category Pill Nav Fix v1.9.90',
        items: [
            'Resolusi Evaluasi Gaya Kategori (src/modules/home/sections.js): Mengeliminasi bug pemilihan gaya navigasi kategori di mana pengaturan "Pill Horizontal Scroll" tidak berubah dan selalu jatuh ke "Grid Ikon". Evaluasi kini mengenali nilai "pill", "text" (legacy), serta nilai bawaan secara presisi.',
            'Penyelarasan Nilai Opsi Pengaturan (src/modules/admin/settings.js): Memastikan penanda selected pada menu dropdown kategori dan merek cocok dengan nilai di database/state, serta mendukung opsi "pill" dan "text" secara harmonis.',
            'Dukungan Visual Avatar Kapsul Geser (Pill): Item pill kini dapat menampilkan cover thumbnail gambar kategori/brand secara proporsional jika tersedia, dengan fallback mulus ke ikon font-awesome jika gambar kosong.',
            'Sinkronisasi Re-Render Instan In-Memory: Menyimpan pengaturan katalog di tab admin langsung memperbarui tampilan storefront kategori & brand (rDyn & rCat) secara instan tanpa perlu memuat ulang halaman.',
            'Multi-Channel Build & Sync v1.9.90 (Android VersionCode 10990): Terkompilasi dan tersinkronisasi penuh ke Vite build produksi, paket flashdisk, dan Capacitor Android.'
        ]
    },
    {
        id: 'log-1-9-89',
        version: 'v1.9.89',
        date: '2026-09-28',
        title: 'Harmonisasi Total Antarmuka & Ergonomi Mobile-First: Transformasi Bottom-Sheet Interaktif, Touch Target Presisi 44px, Tata Letak Konsisten, dan Safe-Area Inset Multi-Modal',
        category: 'ui',
        badge: 'Native Mobile-First Polish & Consistent UX v1.9.89',
        items: [
            'Arsitektur Bottom-Sheet Dinamis (src/modules/pos/pos-cashier-admin.js): Seluruh modal manajemen staf (Pendaftaran Staf, Pengaturan Hak Akses Modul, dan Edit Profil Staf) bertransformasi otomatis menjadi lembar interaktif bawah (bottom sheet) pada smartphone dan modal terpusat pada tablet/desktop (items-end sm:items-center, rounded-t-[2rem] sm:rounded-3xl).',
            'Handle Bar Indikator Geser Mobile: Menyematkan indikator visual drag handle di bagian atas lembar modal HP untuk sensasi aplikasi native iOS & Android yang elegan dan intuitif.',
            'Standarisasi Touch Target 44px & Ergonomi Ibu Jari: Tombol filter kategori diperlebar (px-4 py-2), tombol aksi kartu staf diperbesar menjadi h-10 px-3.5 (Hak Akses) dan w-10 h-10 (Toggle Status, Edit Profil, Hapus) untuk eliminasi salah sentuh di layar smartphone.',
            'Distribusi Fleksibel Kartu Staf di Mobile: Tombol "Hak Akses" menempati porsi responsif (flex-1 sm:flex-initial) pada baris aksi bawah kartu staf di HP sehingga sangat mudah dijangkau dan ditekan dengan satu tangan.',
            'Preset Hak Akses Kompak 2-Kolom Mobile: Menata ulang preset 1-klik di modal hak akses menjadi 2x2 grid pada layar sempit (grid-cols-2 sm:grid-cols-4), menjaga label dan ikon (Kasir POS, Admin Ops, Manajer, Full Akses) tetap proporsional dan bebas dari teks melipat.',
            'Proteksi Safe-Area Inset Bilah Gestur Bawah: Membekali seluruh footer modal dengan pb-[max(1rem,env(safe-area-inset-bottom))] dan min-h-[48px] pada tombol aksi utama, menjamin tombol Batal dan Simpan tidak tertutup oleh navigasi gestur Android / iOS.',
            'Sinkronisasi Multi-Channel v1.9.89 (Android VersionCode 10989): Terkompilasi dan tersinkronisasi penuh ke Vite build produksi, paket flashdisk, dan Capacitor Android.'
        ]
    },
    {
        id: 'log-1-9-88',
        version: 'v1.9.88',
        date: '2026-09-28',
        title: 'Penguatan Keamanan & Otorisasi Manajemen Staf: Pre-Flight Guard Otentikasi Owner, Auto-Claim Sesi Dev Lokal, Pencegahan Error Izin Firestore, dan Banner Status Akun Realtime',
        category: 'security',
        badge: 'Staff Auth Guard & Robust Permissions v1.9.88',
        items: [
            'Pre-Flight Owner Verification (src/modules/pos/pos-cashier-admin.js: verifyOwnerAuthority): Pengecekan status login dan validasi UID Owner utama (ADMIN_UID) di sisi client sebelum mengirim permintaan ke Firestore. Mencegah eksekusi aksi mutasi data staf dari sesi yang tidak terotentikasi atau akun non-owner.',
            'Eliminasi Error Izin Firestore (Missing or insufficient permissions): Fungsi saveStaffPermissions kini menggunakan .set(..., { merge: true }) dengan penanganan error ramah dan solutif yang memandu pengguna secara jelas jika aturan Firestore Cloud belum ter-publish atau sesi belum terotentikasi.',
            'Pencegahan Pemutusan Sesi Auth di Dev Lokal (src/modules/admin/session.js & src/main.js): Memperbaiki isCurrentSessionActive agar otomatis mengklaim sesi (claimAdminSession) saat dibuka di localhost/127.0.0.1 alih-alih memaksa signOut akun Owner akibat belum adanya freshmart_admin_session_id di localStorage lokal.',
            'Banner Status Otentikasi Realtime di Panel Staf: Menampilkan status otentikasi dinamis (Mode Pratinjau Lokal Belum Login, Sesi Staf Dibatasi, atau Terverifikasi Owner) lengkap dengan tombol cepat Login Akun Owner untuk kemudahan navigasi.',
            'Proteksi Menyeluruh Operasi Staf: Mengamankan modal pendaftaran staf (openAddStaffModal & saveStaffAccount), modal edit profil (openEditStaffModal & updateStaffProfile), tombol toggle status aktif (toggleStaffActive), serta dialog hapus staf (deleteStaffAccount).',
            'Sinkronisasi Multi-Channel v1.9.88 (Android VersionCode 10988): Terkompilasi dan tersinkronisasi penuh ke Vite build produksi, paket flashdisk, dan Capacitor Android.'
        ]
    },
    {
        id: 'log-1-9-87',
        version: 'v1.9.87',
        date: '2026-09-28',
        title: 'Proteksi Kerahasiaan Harga Modal Kasir (HPP Privacy Guard): Penyembunyian Harga Modal & Margin Laba di Seluruh Antarmuka Kasir POS untuk Menjaga Privasi Finansial Toko',
        category: 'security',
        badge: 'HPP Privacy Guard v1.9.87',
        items: [
            'HPP Privacy Guard (src/core/auth-roles.js: canViewHpp): Algoritma pengaman sentral yang mendeteksi hak akses finansial pengguna — Kasir fisik (cashier) dibatasi 100% dari melihat harga modal kulakan produk, sedangkan Owner tetap dapat melihat modal dan estimasi laba untuk evaluasi toko.',
            'Pembersihan Tag Modal di Katalog Kasir (src/modules/pos/pos.js): Lencana "Modal: Rp ..." di kartu produk mode Grid maupun mode List disembunyikan total untuk akun kasir. Kasir hanya melihat foto, nama barang, sisa stok, dan harga jual resmi toko.',
            'Penyembunyian HPP & Estimasi Untung di Keranjang (src/modules/pos/pos.js): Item belanja kasir tidak lagi menampilkan chip "HPP: Rp ...", batas teks "(Maks: Rp ...)", serta baris kalkulasi "Untung: Rp ...". Kasir fokus murni pada rincian kuantitas, harga jual, dan subtotal pelanggan.',
            'Penyembunyian HPP di Lembar Pemilihan Varian (src/modules/pos/pos-variant-sheet.js): Header lembar varian dan masing-masing tombol varian produk (warna/ukuran) dibersihkan dari label HPP, mencegah kebocoran modal barang saat kasir melayani pembeli.',
            'Penyembunyian Ringkasan Finansial Kasir (src/modules/pos/pos.js): Baris "Total Modal (HPP)" dan "Estimasi Laba" di panel ringkasan kasir (desktop sidebar & mobile bottom drawer) otomatis dihilangkan (display: none) saat kasir bertugas.',
            'Notifikasi Proteksi Margin Cerdas Tanpa Membocorkan Modal: Validasi diskon kasir tetap bekerja aktif mencegah penjualan di bawah modal HPP, namun notifikasi toast peringatan tidak lagi mengekspos nominal modal asli ke kasir.',
            'Sinkronisasi Multi-Channel v1.9.87 (Android VersionCode 10987): Terkompilasi dan tersinkronisasi penuh ke Vite build produksi, paket flashdisk, dan Capacitor Android.'
        ]
    },
    {
        id: 'log-1-9-86',
        version: 'v1.9.86',
        date: '2026-09-28',
        title: 'Sistem Keamanan Multi-Akun & Role-Based Access Control (RBAC): Hak Akses Dinamis Granular 22 Modul, Smart Unified Login, dan Proteksi Data Keuangan & Manajemen Staf Toko',
        category: 'feature',
        badge: 'Staff RBAC & Multi-Account Security v1.9.86',
        items: [
            'Arsitektur Role-Based Access Control (src/core/auth-roles.js): Implementasi modul otentikasi peran terpusat dengan 3 tingkatan akun hierarkis: Owner (Super Admin absolut 100%), Admin Toko (pengelola operasional, pesanan, katalog, pelanggan, & piutang), dan Kasir POS (khusus transaksi penjualan & shift kasir fisik).',
            'Manajemen Hak Akses Granular 22 Modul: Sistem izin terperinci mencakup 3 kelompok fungsional (Operasional Kasir & Toko, Pengelolaan Konten & Katalog, serta Kontrol Sensitif & Finansial) dengan tombol preset 1-klik: Kasir POS, Admin Operasional, Manajer Toko, dan Full Akses.',
            'Smart Unified Login Otomatis (src/modules/admin/auth.js): Gerbang masuk tunggal di form login CMS yang secara cerdas mendeteksi tingkatan peran akun — Kasir otomatis diarahkan langsung ke antarmuka Kasir POS tanpa membuka dashboard admin, Admin Toko masuk ke CMS dengan menu yang tersaring rapi sesuai hak aksesnya, dan Owner memiliki kendali penuh.',
            'Proteksi Data Finansial & Laporan Sensitif (src/modules/admin/auth.js): Ringkasan keuangan penting (omset, HPP, margin laba kotor, dan laba bersih) terkunci rapat untuk staf yang tidak memiliki izin view_reports. Menampilkan kartu pelindung privasi data bisnis.',
            'Penyaringan Menu Dashboard Admin Dinamis (src/modules/admin/auth.js): Kartu navigasi dan menu CMS disaring otomatis secara real-time. Modul yang tidak diizinkan disembunyikan dan dicegah dari akses tab langsung (router.js).',
            'Modul Manajemen Staf & Hak Akses Modern (src/modules/pos/pos-cashier-admin.js): Redesain total halaman pengelolaan kasir menjadi pusat manajemen staf toko lengkap — kartu Owner Utama terproteksi, pencarian & filter peran instan, indikator status aktif/nonaktif, modal pendaftaran staf baru via secondary Firebase auth instance tanpa memutus sesi login Owner, modal atur hak akses interaktif per modul, modal edit profil staf, dan konfirmasi hapus aman.',
            'Pemisahan Sesi Login Multi-Perangkat: Membatasi mekanisme admin_session single-login guard hanya untuk akun Owner Utama (ADMIN_UID), sehingga staf Admin dan Kasir dapat login dan beroperasi bersamaan di banyak perangkat smartphone, tablet, atau laptop kasir tanpa saling mengeluarkan.',
            'Proteksi Database Cloud Lapis Ganda (firestore.rules): Pembaruan aturan keamanan Firestore dengan fungsi pembantu isOwner(), isAdmin(), isKasir(), isStaffActive(), dan getStaffData(). Koleksi data sensitif (cashier_accounts, licenses, admin_session) dikunci eksklusif hanya untuk Owner toko.',
            'Sinkronisasi Multi-Channel v1.9.86 (Android VersionCode 10986): Terkompilasi dan tersinkronisasi penuh ke Vite build produksi, paket flashdisk, dan Capacitor Android.'
        ]
    },
    {
        id: 'log-1-9-85',
        version: 'v1.9.85',
        date: '2026-09-28',
        title: 'Notifikasi WhatsApp Status Pesanan Dinamis: Pesan Adaptif per Status, Auto-Prompt WA Setelah Update, dan Ringkasan Item Pesanan di Pesan WA',
        category: 'feature',
        badge: 'Smart WA Notification v1.9.85',
        items: [
            'Pesan WA Dinamis Adaptif per Status Pesanan (orders.js): Fungsi konfirmasiKeWA diperbarui total — kini menghasilkan 4 template pesan yang berbeda dan relevan secara kontekstual: (1) Baru: konfirmasi penerimaan pesanan + ringkasan item + informasi pengiriman; (2) Diproses: kabar pesanan sedang disiapkan + info metode pengiriman/ambil; (3) Selesai: ucapan terima kasih profesional + ajakan kembali berbelanja; (4) Dibatalkan: pemberitahuan pembatalan transparan dan mohon maaf.',
            'Ringkasan Item Pesanan di Pesan WA: Setiap pesan notifikasi kini menyertakan ringkasan produk yang dipesan (maks. 3 item teratas beserta nama varian dan kuantitas, dengan keterangan "...dan X item lainnya" jika lebih dari 3).',
            'Info Pengiriman Kontekstual di Pesan WA: Pesan otomatis menyertakan alamat pengiriman (delivery), nama & alamat penerima Drop-Point (lokasi berbeda), atau informasi ambil di toko, sesuai metode yang dipilih pembeli.',
            'Label Metode Pembayaran Lebih Ramah (orders.js): Kode metode bayar raw (transfer, qris, tempo, cod, cashier) ditampilkan dalam format label ramah bahasa Indonesia (Transfer Bank, QRIS, COD (Bayar di Tempat), Putri PayLater, Tunai) di isi pesan WA.',
            'Auto-Prompt Notifikasi WA setelah Update Status (orders.js): Setelah admin mengubah status pesanan (ke Diproses/Selesai/Dibatalkan), toast interaktif muncul otomatis selama 8 detik berisi tombol hijau "Kirim Notifikasi WA ke Pembeli" — admin cukup 1 klik tanpa perlu buka ulang modal detail pesanan.',
            'Performa Optimal Zero-Latency (orders.js): konfirmasiKeWA kini mengambil data pesanan dari cache memori lokal (gOrds) terlebih dahulu, hanya fallback ke Firestore fetch jika data tidak ada di cache — eliminasi loading spinner tidak perlu untuk pesanan yang sudah tampil di daftar.',
            'Redesain Tombol Notifikasi WA Tertanam di Modal (orders.js): Mengganti pendekatan manipulasi toast sistem (yang tampil jelek sebagai kotak polos mengambang) dengan tombol notifikasi WhatsApp yang tertanam elegan langsung di dalam kartu status modal detail pesanan — ikon WA hijau #25D366 asli, sub-label kontekstual sesuai status pesanan, hover paper-plane effect, dan selalu tampil selama pembeli memiliki nomor WhatsApp.',
            'Harmonisasi Warna UI/UX Modul Admin Pesanan (orders.js): Audit menyeluruh dan koreksi total 7 elemen warna jomplang — chip Storefront, chip Member di kartu list, ikon header Data Pemesan, badge Tipe Pemesan Member, tombol Daftarkan Sebagai Member, dan tautan Google Maps — semua dikonversi dari warna hardcoded (blue-500, amber-500/600) ke token tema dinamis var(--color-primary) agar selaras 100% dengan warna tema toko yang bisa diubah.',
            'Sinkronisasi Multi-Channel v1.9.85 (Android VersionCode 10985): Terkompilasi dan tersinkronisasi penuh ke Vite build, paket flashdisk, dan Capacitor Android.'
        ]
    },
    {
        id: 'log-1-9-84',
        version: 'v1.9.84',
        date: '2026-09-28',
        title: 'Harmonisasi Total Antarmuka Manajemen Kasir & Laporan Shift POS: Segmented Navigation Selaras Tema, Banner Metrik Statistik Rekapitulasi, dan Desain Kartu Kasir & Riwayat Shift Standar Native App',
        category: 'ui',
        badge: 'Cashier & Shift UI Harmony v1.9.84',
        items: [
            'Harmonisasi Penuh Segmented Control (pos-cashier-admin.js): Mengeliminasi kontras kaku wadah tab abu-abu dengan tombol aktif putih polos. Digantikan segmented control modern bergaya aplikasi native dengan tombol aktif berlatar var(--color-primary), teks & ikon putih cerah, serta ambient glow shadow lembut yang selaras 100% dengan tema toko.',
            'Redesain Kartu Panduan Akses Kasir (pos-cashier-admin.js): Mengubah kotak panduan akses lama yang kusam menjadi kartu frosted glass berkelas dengan lencana ikon kasir beraksen tema, chip "Storefront Login", dan tipografi yang rapi dan nyaman dibaca.',
            'Peningkatan Visual Kartu Akun Kasir (pos-cashier-admin.js): Avatar monogram inisial nama 48px beraksen warna tema, chip indikator status aktif berdenyut (pulse) / nonaktif, ikon email dan tanggal terdaftar, serta tombol aksi (status, edit, hapus) berukuran sentuh ergonomis 40px dengan efek tekan taktil.',
            'Banner Metrik Statistik Laporan Shift (pos-shift.js): Menambahkan 4 kartu ringkasan analitik di bagian atas Laporan Shift Kasir: Total Shift Tercatat, Shift Aktif / Berjalan (dengan indikator status real-time), Total Omset Penjualan Shift, dan Total Kas Fisik Laci Terdata.',
            'Modernisasi Kartu Riwayat Shift & Z-Report (pos-shift.js): Menata ulang tampilan spreadsheet kaku menjadi kartu profesional modern: ID shift font mono tebal dengan rentang waktu lengkap, lencana status audit (PAS, LEBIH, KURANG, SEDANG BERJALAN), 4 tile metrik elegan (Kasir dengan jumlah transaksi & item, Modal Awal, Total Omset dengan warna tema, Kas Fisik Laci dengan keterangan audit), strip chip rincian metode pembayaran (Tunai, QRIS, Transfer, Tempo), callout catatan penutupan shift, serta tombol aksi cetak Slip Z-Report dan hapus yang ergonomis.',
            'Sinkronisasi Multi-Channel v1.9.84 (Android VersionCode 10984): Terkompilasi dan tersinkronisasi penuh ke Vite build, paket flashdisk, dan Capacitor Android.'
        ]
    },
    {
        id: 'log-1-9-83',
        version: 'v1.9.83',
        date: '2026-09-28',
        title: 'Presisi & Proteksi Saldo Putri PayLater: Normalisasi Pemotongan Limit Kredit, Eliminasi Saldo Negatif, Auto-Healing Data Member, dan Transaksi Rollback Aman',
        category: 'fix',
        badge: 'PayLater Precision & Auto-Healing v1.9.83',
        items: [
            'Normalisasi & Proteksi Saldo PayLater (reward.js, payment.js, checkout.js, pos.js, table.js): Memperbaiki bug kalkulasi sisa limit PayLater di mana saldo terpotong secara keliru atau bertambah abnormal (-Rp 65.000 / Sisa melebihi limit) akibat decrement nilai pada saldo 0. Memasang clamp Math.max(0, ...) di seluruh titik baca, render kartu member digital, modal checkout, kasir POS, dan tabel pelanggan admin.',
            'Auto-Healing Data Member Real-time (router.js & reward.js): Pemulihan otomatis (auto-heal) pada dokumen member yang memiliki nilai paylaterUsed negatif di Firestore maupun memori, otomatis mengembalikan saldo terpakai ke Rp 0 dan menyelaraskan sisa limit tersedia secara presisi.',
            'Penyelarasan Document ID Normalisasi WhatsApp (checkout.js, pos.js, orders.js, tempo.js): Standardisasi target kunci dokumen Firestore pelanggan menggunakan format nomor internasional normal (diawali 62) sehingga checkout storefront, transaksi kasir POS, dan pelunasan cicilan selalu mengarah ke dokumen yang tepat tanpa kegagalan izin (permission error).',
            'Rollback & Re-apply PayLater Berbasis Firestore Transaction (orders.js & tempo.js): Pemulihan pemakaian limit saat pembatalan atau penghapusan pesanan kini menggunakan transaksi Firestore dengan pengaman clamp-0, sehingga tidak akan pernah menghasilkan nilai negatif. Dilengkapi logika re-apply jika status pesanan diaktifkan kembali dari Dibatalkan.',
            'Sinkronisasi Multi-Channel v1.9.83 (Android VersionCode 10983): Terkompilasi dan tersinkronisasi penuh ke Vite build, paket flashdisk, dan Capacitor Android.'
        ]
    },
    {
        id: 'log-1-9-82',
        version: 'v1.9.82',
        date: '2026-09-28',
        title: 'Ekosistem Komprehensif Putri PayLater: Limit Kredit Digital Member VIP, 1-Klik Checkout Storefront, Integrasi Kasir POS, Auto-Rollback Pesanan Batal, Pemulihan Limit Cicilan Piutang, Struk Thermal & Dokumen Resmi',
        category: 'feature',
        badge: 'Putri PayLater VIP Ecosystem v1.9.82',
        items: [
            'Fitur Putri PayLater di Storefront & Checkout (payment.js, checkout.js, index.html): Metode pembayaran baru "PayLater" eksklusif bagi member VIP yang disetujui (paylaterActive = true). Dukungan 1-Klik checkout tanpa DP bila limit mencukupi, serta kalkulasi otomatis pembayaran uang muka (DP) kekurangan limit jika total belanja melebihi sisa plafon.',
            'Widget & Manajemen Limit Kartu Member Digital (reward.js): Tampilan plafon kredit, limit terpakai, sisa limit tersedia, progress bar interaktif persentase penggunaan, info tanggal jatuh tempo bulanan (tgl 5), pengajuan aktivasi via WA, dan tombol cepat bayar/konfirmasi tagihan berjalan ke admin via WhatsApp.',
            'Integrasi Penuh Kasir POS Toko (pos.js): Kasir POS otomatis mengenali status PayLater member saat pencarian nomor/nama, menampilkan chip sisa limit aktif, toggle pembebanan ke limit kredit, kalkulasi proteksi minimum DP jika transaksi melebihi limit, serta preview struk kasir HTML dengan rincian plafon PayLater.',
            'Manajemen Data Pelanggan & PayLater di CMS Admin (schema.js, form.js, table.js): Kolom master data pelanggan baru (paylaterActive, paylaterLimit, paylaterDueDay, paylaterUsed) di formulir pelanggan, validasi numerik, serta chip status limit PayLater (PayLater: Sisa / Plafon) pada tabel pelanggan CMS.',
            'Transparansi Pesanan & Auto-Rollback Limit (orders.js): Lencana PayLater bertema emerald dengan ikon petir pada kartu pesanan admin, kartu rincian transaksi PayLater di modal detail pesanan, dan otomatis memulihkan (rollback) limit kredit terpakai ke profil member saat pesanan dibatalkan atau dihapus permanen.',
            'Pemulihan Otomatis Limit pada Pembayaran Cicilan Piutang (tempo.js): Pencatatan cicilan tempo untuk pesanan PayLater otomatis memulihkan (mengurangi paylaterUsed) member secara real-time di Firestore dan memori, menampilkan badge PayLater pada nota dan buku besar debitur, serta template pesan penagihan WhatsApp cerdas bernuansa PayLater.',
            'Cetak Struk Thermal RawBT & Dokumen Resmi A4 (rawbt.js, documents.js): Identifikasi "PUTRI PAYLATER" pada struk thermal ESC/POS kasir dan nota penagihan tempo (58mm/80mm), cetak limit terpakai, serta tampilan faktur resmi A4 penagihan berlabel "NOTA PUTRI PAYLATER".',
            'Resolusi Rincian Barang Struk Pelanggan Storefront (receipt.js, rawbt.js, orders.js, checkout.js): Mengatasi kendala rincian barang kosong ("- Tidak ada rincian barang -") dan total Rp 0 pada modal Preview Struk dan Cetak Langsung RawBT di Storefront dengan menyimpan struktur lengkap (items, payment, customer) ke riwayat lokal myOrders, auto-hydration otomatis pada modal pesanan, dan auto-fallback asinkron ke koleksi database Firestore freshmart_orders.',
            'Sinkronisasi Multi-Channel v1.9.82 (Android VersionCode 10982): Terkompilasi dan tersinkronisasi penuh ke Vite build, paket flashdisk, dan Capacitor Android.'
        ]
    },
    {
        id: 'log-1-9-81',
        version: 'v1.9.81',
        date: '2026-09-28',
        title: 'Penyempurnaan Finansial Kasir & Piutang: Sinkronisasi Uang Muka (DP) ke Laci Kas Shift Kasir POS, Presisi Cetak Struk RawBT, dan Transparansi Diskon Poin & Piutang di Modal Pesanan CMS',
        category: 'fix',
        badge: 'Financial & POS Precision v1.9.81',
        items: [
            'Sinkronisasi Uang Muka (DP) ke Laci Kas Shift (pos-shift.js & pos.js): Transaksi tempo di kasir POS dengan pembayaran uang muka (DP) tunai kini otomatis masuk ke pembukuan uang laci kasir (shift.cashSales) secara akurat. Mengeliminasi selisih kas fisik lebih saat rekonsiliasi tutup shift (Z-Report).',
            'Presisi Nilai DP di Struk Kasir & Thermal RawBT (pos.js & rawbt.js): Memperbaiki pembacaan nominal uang muka tempo dari tempoDp/dp pada preview struk kasir dan cetak struk thermal ESC/POS RawBT 58/80mm sehingga mencetak nominal DP yang sesungguhnya (tidak lagi tertulis Rp 0).',
            'Status Pelunasan Tempo Otomatis (pos.js & checkout.js): Jika pelanggan membayar uang muka penuh (DP >= total belanja / sisa saldo Rp 0), status pembayaran otomatis disetel ke "lunas", bukan "hutang".',
            'Transparansi Diskon Poin Member di CMS (orders.js): Modal rincian pesanan admin kini menampilkan baris potongan Diskon Poin Member secara jelas pada kartu Ringkasan Bayar.',
            'Kartu Informasi & Pintasan Piutang di Pesanan Admin (orders.js): Menambahkan blok rincian transaksi tempo (Uang Muka, Sisa Tagihan Piutang, Status Lunas/Hutang) dan tombol cepat untuk langsung membuka detail nota dan mencatat cicilan di Modul Piutang.',
            'Sinkronisasi Multi-Channel v1.9.81 (Android VersionCode 10981): Terkompilasi dan tersinkronisasi penuh ke Vite build, paket flashdisk, dan Capacitor Android.'
        ]
    },
    {
        id: 'log-1-9-80',
        version: 'v1.9.80',
        date: '2026-09-28',
        title: 'Penyelarasan Alur Logika Operasional Toko: Auto-Restock Pesanan Batal/Hapus, Rollback Poin & Hadiah Member, serta Live Sync Kas Cicilan Piutang ke Shift Kasir POS',
        category: 'feature',
        badge: 'Store Operations Harmony v1.9.80',
        items: [
            'Auto-Restock Stok Produk & Varian (orders.js): Pembatalan pesanan di panel CMS admin kini secara otomatis memulihkan stok fisik produk dan varian ke database toko, mengeliminasi selisih stok antara sistem dan rak toko. Jika status batal diaktifkan kembali, sistem otomatis memotong stok ulang secara proporsional.',
            'Proteksi Stok saat Hapus Pesanan (orders.js): Menghapus pesanan secara permanen kini mengecek status pesanan; jika belum pernah dibatalkan, sistem otomatis me-restock seluruh barang terlebih dahulu sebelum pesanan dihapus dari Firestore.',
            'Rollback Poin & Hadiah Member (orders.js): Pembatalan pesanan resmi member otomatis menarik kembali poin belanja yang didapatkan, mengembalikan poin yang dipakai klaim reward, serta memulihkan stok hadiah fisik ke katalog program hadiah.',
            'Sinkronisasi Live Kas Cicilan Piutang ke Shift Kasir (tempo.js & pos-shift.js): Pembayaran angsuran piutang tempo via "Kas Tunai Toko" kini langsung disinkronkan ke Kas Masuk Shift Kasir yang sedang aktif. Mencegah selisih uang fisik laci kasir saat tutup shift (Z-Report).',
            'Transparansi Rekonsiliasi Kas Laci (pos-shift.js): Menampilkan rincian "(incl. Cicilan Piutang)" pada modal X-Report, modal Z-Report, dan cetak struk thermal settlement agar kasir dan pemilik toko dapat mengaudit asal-usul uang tunai dengan presisi.',
            'Sinkronisasi Multi-Channel v1.9.80 (Android VersionCode 10980): Terkompilasi dan tersinkronisasi penuh ke Vite build, paket flashdisk, dan Capacitor Android.'
        ]
    },
    {
        id: 'log-1-9-79',
        version: 'v1.9.79',
        date: '2026-09-28',
        title: 'Resolusi Tuntas Bug Detail Pesanan Hilang Saat Di-scroll: Guard Bottom Sheet Murni, Eliminasi Benturan Gesture Swipe Mobile, & Arsitektur Scrollbox Bebas Glitch',
        category: 'fix',
        badge: 'Order Detail Scroll Stability v1.9.79',
        items: [
            'Guard Bottom Sheet Murni (native-mobile.js): Menambahkan validasi isBottomSheet pada listener sentuhan initNativeSheetGestures sehingga modal berposisi centered (seperti modal Detail Pesanan, formulir produk, dan preview struk) 100% dikecualikan dari intervensi gesture swipe-to-dismiss. Pengguna kini bebas menggeser dan men-scroll data tanpa risiko elemen bergeser keluar layar.',
            'Eliminasi Benturan Selector Sheet (native-mobile.js): Menyempurnakan selector pencari sheetBox agar memprioritaskan .modal-bottom-sheet dan [id$="-box"] serta tidak pernah menargetkan elemen sub-konten -content secara terpisah saat berada di dalam wadah sheet. Mengeliminasi bug di mana konten pesanan (#admin-order-modal-content) terlempar ke bawah sedangkan footer cetak tertinggal di layar.',
            'Restrukturisasi Arsitektur Scrollbox Modal (index.html): Mengubah kontainer #admin-order-modal-box menjadi overflow-hidden flex flex-col, mengunci header di atas (shrink-0 border-b), mengisolasi scroll area pada #admin-order-modal-content (custom-scrollbar flex-1 overflow-y-auto space-y-4), dan menambatkan footer tombol cetak di bawah (shrink-0 border-t). Mencegah clipping bug dan glitch rendering pada browser mobile Android/iOS.',
            'Integrasi Engine Animasi & Reset Gaya (orders.js): Menyelaraskan pembukaan dan penutupan modal detail pesanan admin dengan engine resmi openModalAnim dan closeModalAnim. Menambahkan pembersihan inline style transform dan auto-scroll ke posisi puncak (scrollTop = 0) setiap kali modal pesanan dibuka.',
            'Pendaftaran closeModalById Terpusat (native-mobile.js): Mendaftarkan case "admin-order-modal" agar penutupan modal terhubung langsung ke closeOrderDetailModal().',
            'Sinkronisasi Multi-Channel v1.9.79 (Android VersionCode 10979): Terkompilasi dan tersinkronisasi penuh ke Vite build, paket flashdisk, dan Capacitor Android.'
        ]
    },
    {
        id: 'log-1-9-78',
        version: 'v1.9.78',
        date: '2026-09-28',
        title: 'Resolusi Tuntas Layar Berkedip (Screen Flicker): Arsitektur Anti-Flicker Tab & Bottom Sheet, Eliminasi Konflik 3D GPU Skia, & Double rAF Transition',
        category: 'fix',
        badge: 'Zero-Flicker & Visual Stability v1.9.78',
        items: [
            'Eliminasi Blank Flash pada Tab (style.css): Memperbaiki keyframes animasi fadeIn dan fadeInScale yang sebelumnya dimulai dari opacity: 0 (menyebabkan seluruh area tab layar padam/gelap selama 0.3 detik setiap kali tab dibuka atau di-refresh data Firestore). Kini dimulai dari opacity: 0.92 dengan durasi 0.16s, menghasilkan pergantian tab instan dan bebas kedip.',
            'Pembersihan Konflik 3D GPU Skia pada Bottom Sheet & Modal (style.css): Menghapus properti perspective: 1000px dan transform-style: preserve-3d dari selektor modal yang bentrok dengan backdrop-filter: blur (Chromium Skia bug). Menggantinya dengan akselerasi 2D murni (transform: translateZ(0)) sehingga GPU tidak mengalami frame drop saat membuka bottom sheet.',
            'Double requestAnimationFrame Engine (utils.js): Mengoptimasi fungsi pembuka animasi modal (openModalAnim) dengan Double rAF tanpa synchronous layout thrashing (void m.offsetWidth), mengeliminasi lonjakan beban CPU dan lag visual 1-frame saat modal un-hidden.',
            'Standardisasi Animasi Modal & Sheet Global: Menyelaraskan seluruh modul yang sebelumnya memakai setTimeout 10ms (pos-variant-sheet.js, receipt.js, printer-settings.js, documents.js, scanner.js, dan form.js) ke engine openModalAnim & closeModalAnim, mencegah tabrakan siklus render Vsync (60Hz/90Hz/120Hz).',
            'Pencegahan Pergeseran Scrollbar (style.css): Menambahkan scrollbar-gutter: stable pada html agar layout halaman tidak melompat 15-17px saat scrollbar muncul atau hilang.',
            'Sinkronisasi Multi-Channel v1.9.78 (Android VersionCode 10978): Terkompilasi dan tersinkronisasi penuh ke Vite build, paket flashdisk, dan Capacitor Android.'
        ]
    },
    {
        id: 'log-1-9-77',
        version: 'v1.9.77',
        date: '2026-09-28',
        title: 'Penyempurnaan Stabilitas & Ergonomi: Arsitektur Search Zero-Flicker Piutang, Live Sync Cicilan In-Memory, State Guard POS, & Haptic Feedback 3D',
        category: 'fix',
        badge: 'Stability & Ergonomic Polish v1.9.77',
        items: [
            'Arsitektur Pencarian Zero-Flicker Piutang (tempo.js): Mengeliminasi kendala kehilangan fokus kursor (cursor jump/blur) saat mengetik kata kunci pencarian di seluruh tab piutang (Nota, Pelanggan, dan Histori Cicilan). Memisahkan kontainer dinamis #tempo-tab-content-container melalui renderActiveTempoTabBody() sehingga hasil filter diperbarui instan tanpa merekonstruksi elemen input.',
            'Sinkronisasi Reaktif Live Modal Cicilan (tempo.js): Pembayaran cicilan tempo (submitTempoPayment) kini memperbarui data in-memory cachedPiutangOrders seketika (0ms delay). Jika lunas, order otomatis terhapus dari piutang aktif; jika belum lunas, saldo dan histori cicilan di modal rincian nota yang terbuka di balik layar langsung ter-update live.',
            'Pembersihan Bersih State Kasir POS (pos.js): Fungsi clearCart() kini secara presisi mereset state diskon poin (posPointsRedeemed = 0) dan klaim hadiah (posClaimedReward = null), memastikan pembatalan keranjang tidak meninggalkan residual diskon pada transaksi berikutnya.',
            'Transparansi Dialog Sukses Transaksi POS (pos.js): Modal sukses transaksi kasir (showPOSSuccess) kini menampilkan ringkasan Diskon Poin Belanja dan Klaim Hadiah yang ditukarkan.',
            'Respons Taktil Realistis Kartu Member 3D (reward.js): Menambahkan respons getaran taktil mikro (haptic tick) dan audio sintesis saat kartu member digital dibalik (flipMemberCard), memberikan sensasi nyata memegang kartu fisik.',
            'Sinkronisasi Multi-Channel v1.9.77 (Android VersionCode 10977): Terkompilasi dan tersinkronisasi penuh ke Vite build, paket flashdisk, dan Capacitor Android.'
        ]
    },
    {
        id: 'log-1-9-76',
        version: 'v1.9.76',
        date: '2026-09-28',
        title: 'Ekosistem Piutang Multi-Tab (Nota Tagihan A4, Struk RawBT, Kartu Pelanggan, Histori Cicilan) & Reward Loyalitas Kasir POS (Diskon Poin, Klaim Hadiah, Point Ledger)',
        category: 'feature',
        badge: 'Smart Tempo & Loyalty POS v1.9.76',
        items: [
            'Nota Tagihan A4 Resmi Toko Putri (tempo_invoice): Menghadirkan dokumen cetak tagihan piutang A4 berstandar korporat yang memuat kop toko resmi, status jatuh tempo, rincian barang, rekap pembayaran/cicilan masuk, kalkulasi denda keterlambatan, sisa tagihan wajib bayar, rekening transfer resmi toko, serta kolom tanda tangan debitur & pihak toko.',
            'Kartu Piutang per Pelanggan (tempo_customer_ledger): Lembar rekapitulasi rekening piutang gabungan (Statement of Account) untuk pelanggan yang memiliki multi-nota tempo berjalan, lengkap dengan agregasi total transaksi, akumulasi cicilan masuk, denda berjalan, dan grand total tagihan outstanding.',
            'Cetak Struk Piutang & Cicilan Thermal ESC/POS RawBT: Driver biner ESC/POS RawBT kini mendukung pencetakan langsung struk nota tempo dan struk pembayaran cicilan/pelunasan pada printer thermal 58mm/80mm, mencakup sisa hutang dan histori cicilan.',
            'Navigasi 3 Tab Manajemen Piutang Admin (tempo.js): Tab Nota Tagihan (filter status berjalan, jatuh tempo H-3, terlambat), Tab Kartu Piutang per Pelanggan (pengelompokan debitur, tagih konsolidasi via WhatsApp multi-nota 1-klik, cetak kartu A4), dan Tab Histori Rincian Cicilan Masuk (filter periode dan metode bayar Tunai/Transfer/QRIS, serta total nominal uang cicilan masuk terkumpul).',
            'Diskon Poin Belanja Instan di Kasir POS (Point-to-Cash): Kasir POS kini dapat menerapkan diskon saldo poin member langsung saat pembayaran dengan chips cepat (10 Poin, 20 Poin, Maksimal, Batal) disertai Margin Guard anti-jual rugi yang memastikan total transaksi tidak pernah berada di bawah total modal HPP keranjang.',
            'Klaim Hadiah Katalog Reward di Kasir POS: Kasir dapat memproses klaim penukaran hadiah fisik member langsung dari katalog reward aktif, otomatis memotong saldo poin member dan stok hadiah di Firestore.',
            'Buku Besar Riwayat Mutasi Poin & Hadiah (Point Ledger): Menghadirkan pelacakan kronologis perolehan poin belanja (+Poin), penukaran diskon kasir (-Poin), dan penukaran hadiah katalog (-Poin) di modal Kartu Member Digital dan struk belanja kasir.',
            'Sinkronisasi Multi-Channel v1.9.76 (Android VersionCode 10976): Terkompilasi dan tersinkronisasi penuh ke Vite build, paket flashdisk, dan Capacitor Android.'
        ]
    },
    {
        id: 'log-1-9-75',
        version: 'v1.9.75',
        date: '2026-09-27',
        title: 'Kalibrasi Presisi Tinggi Struk Thermal 58mm & 80mm: Algoritma Kolom Anti-Overflow, ItemRow Standar POS, Mistar Uji Cetak, & Opsi Compact Anti-Potong',
        category: 'feature',
        badge: 'High-Precision Thermal 58/80 v1.9.75',
        items: [
            'Algoritma Perataan Kolom Presisi Matematika (formatTwoColumn): Mengeliminasi tuntas masalah teks panjang atau nominal harga yang terpotong di tengah jalan dan melipat ke baris baru. Kolom kiri dan kanan dihitung dengan batas spasi matematika akurat sehingga angka harga dan total selalu rata kanan sempurna.',
            'ItemRow Standar POS Kasir Profesional: Format cetak struk kasir kini memisahkan baris nama barang (word-wrap rapi tanpa memotong suku kata) dengan baris rincian Qty x Harga di sisi kiri dan Subtotal di sisi kanan rata tepi kertas, mencegah baris terpecah di kertas 58mm.',
            'Opsi Kalibrasi Kertas Fleksibel (58mm 32/30 Kolom & 80mm 48/42 Kolom): Menambahkan opsi kertas 58mm - Mini Bluetooth Margin Sempit (30 Kolom) [Anti-Potong Tepi] untuk printer mini dengan margin fisik lebar (Panda, Iware, VSC, Zjiang) dan 80mm Compact (42 Kolom) untuk printer Epson TM series.',
            'Mistar Kalibrasi Tepi Kertas pada Test Print: Lembar Uji Coba Cetak (Test Print RawBT) kini mencetak mistar numerik dan tick marks untuk verifikasi visual langsung pada kertas thermal fisik, memastikan tidak ada karakter yang terpotong di tepi kertas.',
            'Judul Kop Toko Dinamis & Pemisah Rata Kiri: Menggunakan pembesaran proporsional (Double Height / Tall) jika nama toko panjang agar tidak melipat sembarangan, serta mengubah garis pemisah (--- dan ===) menjadi rata kiri guna mencegah bug wrap blank line pada printer Bluetooth.',
            'CSS Thermal Print Dinamis Tanpa Batas Kaku: Memperbaiki media print CSS agar ukuran halaman (@page) dan kontainer kertas mengikuti pilihan 58mm atau 80mm secara otomatis tanpa pemaksaan kaku 58mm.',
            'Sinkronisasi Multi-Channel v1.9.75 (Android VersionCode 10975): Terkompilasi dan tersinkronisasi penuh ke Vite build, paket flashdisk, dan Capacitor Android.'
        ]
    },
    {
        id: 'log-1-9-74',
        version: 'v1.9.74',
        date: '2026-09-27',
        title: 'Driver Printer RawBT Free Universal, Panduan 3 Langkah & Fitur Cetak Struk Langsung (Direct Print 1-Tap)',
        category: 'feature',
        badge: 'RawBT Free & Direct Print v1.9.74',
        items: [
            'Driver RawBT Free Sebagai Rekomendasi Utama: Mengintegrasikan secara penuh aplikasi RawBT (Free version) sebagai driver printer thermal standar Toko Putri. Mendukung seluruh printer thermal Bluetooth, USB OTG, dan WiFi LAN tanpa biaya lisensi.',
            'Cetak Struk Langsung 1-Tap (Direct Print): Menghilangkan popup browser yang lambat saat mencetak struk. Begitu tombol cetak ditekan di kasir POS, slip shift, atau rincian pesanan toko, dokumen langsung dikirim seketika ke printer thermal via Intent RawBT / Capacitor Native Bridge.',
            'Auto-Print Transaksi Selesai Kasir: Menghadirkan opsi opsional auto-print di mana struk belanja otomatis langsung tercetak dari printer segera setelah transaksi kasir berhasil diselesaikan.',
            'Panduan Mudah Koneksi RawBT 3 Langkah: Panel Pengaturan Printer kini dilengkapi panduan visual 3 langkah mudah koneksi RawBT, tombol pintas unduh/buka aplikasi RawBT dari Google Play Store, serta tombol tes cetak instan (Test Print RawBT).',
            'Engine ESC/POS Binary Universal (rawbt.js): Membangun builder biner ESC/POS mandiri (EscPosBuilder) dengan perataan kolom presisi (58mm 32 kolom / 80mm 48 kolom), pemotongan kertas otomatis (Auto Cut), dan pemicu buka laci kasir tunai (Cash Drawer Kick).',
            'Sinkronisasi Multi-Channel v1.9.74 (Android VersionCode 10974): Terkompilasi dan tersinkronisasi penuh ke Vite build, paket flashdisk, dan Capacitor Android.'
        ]
    },
    {
        id: 'log-1-9-73',
        version: 'v1.9.73',
        date: '2026-09-27',
        title: 'Optimasi Koneksi Firestore & Guard Kuota: Auto-Detect Long Polling, Cache Statistik Pusat Data, & Konfirmasi Operasi Berat',
        category: 'fix',
        badge: 'Firestore Efficiency v1.9.73',
        items: [
            'Optimasi Mode Koneksi Firestore (firebase.js): Mengganti experimentalForceLongPolling: true dengan experimentalAutoDetectLongPolling: true. Dengan mode auto-detect, Firestore otomatis memilih koneksi WebSocket (lebih hemat & responsif) jika jaringan mendukung, dan hanya fallback ke long-polling saat diperlukan (jaringan proxy/corporate). Berdampak langsung pada efisiensi koneksi di HP Android dengan jaringan 4G/WiFi normal.',
            'Cache Statistik Pusat Data 5 Menit (backup-sync.js): Menambahkan liveStatsCache dengan TTL 5 menit pada fungsi loadLiveStatistics. Sebelumnya, membuka tab Pusat Data & Sinkronisasi selalu memicu 4 full-collection read ke Firestore (orders, customers, cashier_accounts, pos_shifts). Kini jika data masih segar, statistik langsung ditampilkan dari cache — 0 Read Firestore.',
            'Guard Konfirmasi Sebelum Operasi Berat (backup-sync.js): Menambahkan dialog konfirmasi showConfirm pada fungsi downloadFullBackupJSON (Backup Lengkap .json) dan exportOrdersCSV (Ekspor Transaksi .csv) sebelum memulai proses full-table scan. Dialog menampilkan estimasi jumlah dokumen yang akan dibaca dan peringatan untuk tidak menekan berulang kali. Ini mencegah pemborosan kuota Firestore akibat klik tidak sengaja.',
            'Sinkronisasi Multi-Channel v1.9.73 (Android VersionCode 10973): Terkompilasi dan tersinkronisasi penuh ke Vite build, paket flashdisk, dan Capacitor Android.'
        ]
    },
    {
        id: 'log-1-9-72',
        version: 'v1.9.72',
        date: '2026-09-27',
        title: 'Pencegahan Intervensi Browser pada Haptics & AudioContext Saat Startup Halaman',
        category: 'fix',
        badge: 'Browser Policy Guard v1.9.72',
        items: [
            'Proteksi Kebijakan Interaksi Pengguna (User Gesture Guard): Menghilangkan peringatan konsol "[Intervention] Blocked call to navigator.vibrate" dan "The AudioContext was not allowed to start" saat aplikasi pertama kali dibuka.',
            'Initial Cart Load Muting: Menginisialisasi prevCartQty sebagai null pada modul keranjang (src/modules/cart/cart.js), sehingga kalkulasi badge keranjang saat inisialisasi awal toko berjalan hening tanpa memicu getaran dan audio secara prematur sebelum pengguna menyentuh layar.',
            'Unifikasi Haptic Engine di Utils: Menghapus implementasi lawas triggerHaptic di src/core/utils.js yang belum memiliki guard dan mendelegasikannya 100% ke engine terpadu src/core/native-mobile.js dengan proteksi window.checkUserGesture() serta Capacitor Haptics.',
            'Proteksi Web Audio API Multi-Modul: Memasang guard window.checkUserGesture() pada suara pesanan baru admin (playNewOrderSound), audio kasir POS (playCashierBeep, playCashierChime), dan audio shift (playShiftChime) agar audio context hanya aktif setelah ada gesture interaksi pengguna.',
            'Sinkronisasi Multi-Channel v1.9.72 (Android VersionCode 10972): Terkompilasi dan tersinkronisasi penuh ke Vite build, paket flashdisk, dan Capacitor Android.'
        ]
    },
    {
        id: 'log-1-9-71',
        version: 'v1.9.71',
        date: '2026-09-27',
        title: 'Perbaikan Kritis Hapus Item Keranjang & Eliminasi Duplikasi Tombol SPH Header',
        category: 'fix',
        badge: 'Cart & Header Fix v1.9.71',
        items: [
            'Fix Kritis Tombol Hapus (X) Item Keranjang: Menyelesaikan masalah tombol silang (rmCart) tidak berfungsi saat menghapus item keranjang belanja. Urutan eksekusi kini memperbarui state & penyimpanan lokal (updCart) terlebih dahulu sebelum me-render ulang UI (renderCart), serta menambahkan guard isCartRehydrated guna mencegah item yang baru dihapus otomatis ter-rehydrate kembali dari cache.',
            'Eliminasi Duplikasi Tombol SPH di Header: Menghapus tombol toggle "SPH" pada header keranjang belanja (#btn-cart-sph-header) agar tampilan header tetap bersih dan tidak duplikat dengan kartu resmi Surat Penawaran Harga (SPH Proyek) yang sudah tersedia di bagian bawah rincian barang.',
            'Event Handling Tombol Hapus Produk: Menambahkan event.stopPropagation(), type="button", pointer-events-none pada ikon xmark, dan respon getaran taktil mikro ringan saat item dihapus.',
            'Sinkronisasi Multi-Channel v1.9.71 (Android VersionCode 10971): Terkompilasi dan tersinkronisasi penuh ke Vite build, paket flashdisk, dan Capacitor Android.'
        ]
    },
    {
        id: 'log-1-9-70',
        version: 'v1.9.70',
        date: '2026-09-27',
        title: 'Native Mobile Polish: Dynamic Island Capsule Toast, Cart Bounce, Scroll-to-Top FAB & Audio FX',
        category: 'feature',
        badge: 'Mobile Polish v1.9.70',
        items: [
            'Dynamic Island Capsule Toast: Merancang ulang sistem pop-up notifikasi (#toast) menjadi kapsul mengambang modern (rounded-full) dengan efek kaca buram (frosted glass blur-20px), animasi pegas lentur (spring bezier), dan integrasi getaran taktil mikro otomatis pada seluruh 370+ aksi notifikasi toko.',
            'Cart Bounce & Pop Haptic Animation: Efek animasi membal ceria (badge-pop-animate scale 1.35x) pada indikator keranjang belanja (bottom navigation, header, dan floating button) disertai getaran taktil instan dan efek suara bubble pop saat kuantitas barang bertambah.',
            'Native Sound Effects Engine (Web Audio API): Generator audio taktil bawaan mandiri (0ms latency, tanpa unduh file eksternal, 100% offline) untuk suara pop keranjang, nada lonceng sukses transaksi, dan bip scanner barcode.',
            'Floating Scroll-to-Top FAB & Eliminasi Duplikasi: Menggantikan tombol statis lama "Kembali ke Atas" di footer dengan tombol melayang cerdas "↑ Ke Atas" yang muncul otomatis saat scroll katalog atau riwayat pesanan melebihi 350px, mengeliminasi duplikasi elemen UI.',
            'Native Connectivity Banner: Deteksi status jaringan cerdas yang memunculkan kapsul melayang otomatis saat perangkat kehilangan sinyal (Mode Offline) maupun saat koneksi internet kembali pulih.',
            'Sinkronisasi Multi-Channel v1.9.70 (Android VersionCode 10970): Terkompilasi dan tersinkronisasi penuh ke Vite build, paket flashdisk, dan Capacitor Android.'
        ]
    },
    {
        id: 'log-1-9-69',
        version: 'v1.9.69',
        date: '2026-09-27',
        title: 'Native Mobile Experience Engine: Universal Haptics, Swipe-to-Dismiss Sheets & Viewport Purity',
        category: 'feature',
        badge: 'Native Engine v1.9.69',
        items: [
            'Native Mobile Experience Engine: Mengintegrasikan mesin native mobile terpusat (src/core/native-mobile.js) untuk menghadirkan sensasi dan kenyamanan aplikasi native murni (iOS & Android) di smartphone.',
            'Universal Hardware & Software Haptics: Dukungan getaran mikro taktil instan melalui Capacitor Plugins Haptics (pada aplikasi Android APK) dengan fallback HTML5 Vibration API (di mobile browser/PWA) untuk setiap interaksi tombol, tabs navigasi, chip filter, dan stepper kuantitas.',
            'Gesture Swipe-to-Dismiss / Drag-Down: Dukungan gestur geser ke bawah secara interaktif 1:1 pada seluruh lembar Bottom Sheet (modal produk, lembar varian kasir, order kulakan PO, modal tempo, supplier, dan konfirmasi) dengan spring snap-back physics dan haptic feedback saat tertutup.',
            'Eliminasi Browser Artifacts & 0ms Tap Delay: Penerapan CSS overscroll-behavior-y: contain (mencegah reload circle browser), -webkit-tap-highlight-color: transparent (menghilangkan kotak abu-abu sentuhan), user-select: none pada kontrol interaktif, serta touch-action: manipulation untuk respon ketuk 0ms seketika.',
            'Native Touch Micro-Interactions & Shimmer: Animasi ketukan responsif (active-press scale 0.965) dan efek skeleton shimmer modern untuk pengalaman navigasi yang halus dan berkelas.',
            'Sinkronisasi Multi-Channel v1.9.69 (Android VersionCode 10969): Terkompilasi dan tersinkronisasi penuh ke Vite build, paket flashdisk, dan Capacitor Android.'
        ]
    },
    {
        id: 'log-1-9-68',
        version: 'v1.9.68',
        date: '2026-09-27',
        title: 'Paritas 1:1 Tampilan Stok POS Kasir & Storefront: Indikator Stok Terpadu & Info Varian',
        category: 'feature',
        badge: 'POS Stock Parity v1.9.68',
        items: [
            'Paritas 1:1 Tampilan Stok POS Kasir & Storefront: Menyelaraskan logika visibilitas stok produk kasir dengan storefront saat saklar kelola stok (useStock) aktif. Kartu produk kini selalu menampilkan badge status stok (Stok X / SISA X / HABIS).',
            'Indikator Stok Mode Grid & List Kasir: Pada mode Grid, badge stok diposisikan presisi di sudut kanan-bawah foto (pos-badge-stock & pos-badge-low) tanpa benturan dengan badge kuantitas keranjang; pada mode List, chip status stok (pos-tag-stock & pos-tag-low) ditampilkan sejajar dengan kategori dan varian.',
            'Transparansi Stok Lembar Varian Kasir: Menambahkan informasi kuantitas stok aktual pada setiap tombol varian produk di lembar pilih varian kasir (pos-variant-sheet) dan badge ketersediaan terpusat di area rincian produk.',
            'Sinkronisasi Multi-Channel v1.9.68 (Android VersionCode 10968): Terkompilasi dan tersinkronisasi penuh ke Vite build, paket flashdisk, dan Capacitor Android.'
        ]
    },
    {
        id: 'log-1-9-67',
        version: 'v1.9.67',
        date: '2026-09-27',
        title: 'Perbaikan Kritis POS Kasir: Deklarasi Estimasi Margin Keuntungan Item Keranjang',
        category: 'fix',
        badge: 'POS Error Fix v1.9.67',
        items: [
            'Fix Kritis ReferenceError itemMargin: Mengatasi error konsol "Uncaught ReferenceError: itemMargin is not defined" pada fungsi render keranjang belanja kasir (renderCart) dengan mendeklarasikan perhitungan margin laba kotor item secara eksplisit.',
            'Kalkulasi Margin Item Akurat: Estimasi keuntungan per item (itemMargin) kini dihitung presisi berdasarkan selisih subtotal item setelah diskon dikurangi total harga modal HPP (subtotal - (itemHpp * qty)).',
            'Ketahanan UI Keranjang Kasir: Menjamin penambahan produk, pengubahan kuantitas desimal, penerapan diskon per item, dan pemindai barcode kamera/keyboard berjalan lancar tanpa interupsi runtime error.',
            'Sinkronisasi Multi-Channel v1.9.67 (Android VersionCode 10967): Terkompilasi dan tersinkronisasi penuh ke Vite build, paket flashdisk, dan Capacitor Android.'
        ]
    },
    {
        id: 'log-1-9-66',
        version: 'v1.9.66',
        date: '2026-09-27',
        title: 'Pemulihan Tampilan Logo Loading Screen & Harmonisasi Display Inline Style',
        category: 'fix',
        badge: 'Loading Screen Logo Fix v1.9.66',
        items: [
            'Fix Logo Loading Screen: Mengeliminasi benturan stylesheet pada loader-logo-img sehingga gambar logo toko (PUT) kembali tampil sempurna di lingkaran loading awal.',
            'Pembersihan Utilitas Display: Menghapus deklarasi stylesheet !important yang menahan override inline style.display block pada saat bootstrap data aplikasi.',
            'Penanganan Fallback Ikon Cadangan: Menjamin onerror pada loader-logo-img memicu kembali tampilan ikon toko secara mulus jika gambar gagal termuat.',
            'Sinkronisasi Multi-Channel v1.9.66 (Android VersionCode 10966): Terkompilasi dan tersinkronisasi penuh ke Vite build, paket flashdisk, dan Capacitor Android.'
        ]
    },
    {
        id: 'log-1-9-65',
        version: 'v1.9.65',
        date: '2026-09-27',
        title: 'Perbaikan Kritis Posisi Logo Toko: Menjaga Utilitas .hidden & Isolasi Simbol Header',
        category: 'fix',
        badge: 'Logo & Centering Integrity v1.9.65',
        items: [
            'Fix Kritis Geser Logo Toko Header: Mengeliminasi pemaksaan deklarasi !important pada properti display ikon font yang sempat menimpa kelas utilitas .hidden (display: none). Ikon cadangan toko (dyn-store-logo-icon) kini 100% tersembunyi dengan sempurna saat logo gambar (dyn-store-logo-img) aktif, sehingga logo gambar toko kembali tampil tepat di tengah wadah rounded header tanpa terdorong ke kiri.',
            'Proteksi Mutually Exclusive Tampilan Logo: Menyempurnakan logika render di home/sections.js agar gambar logo dan ikon toko dikontrol secara mutlak (style.display none/block) sehingga tidak dapat muncul bersamaan dalam satu wadah.',
            'Presisi Centering Aman & Selektif: Menerapkan perataan ikon terpusat yang aman dengan selektor :not(.hidden):not([hidden]), menjamin ikon selalu simetris di tombol dan badge tanpa mengganggu elemen yang disembunyikan.',
            'Sinkronisasi Multi-Channel v1.9.65 (Android VersionCode 10965): Terkompilasi dan tersinkronisasi penuh ke Vite build, paket flashdisk, dan Capacitor Android.'
        ]
    },
    {
        id: 'log-1-9-64',
        version: 'v1.9.64',
        date: '2026-09-27',
        title: 'Presisi Icon Center Universal v1.9.64 & Redesain Empty-State Terpusat',
        category: 'fix',
        badge: 'Icon Precision & UX Polish v1.9.64',
        items: [
            'Penyempurnaan Universal Icon Centering Engine: Mengeliminasi offset vertikal default FontAwesome (-0.125em) yang kerap membuat ikon turun dari garis tengah flex container. Seluruh elemen <i> dan pseudo-element ::before kini diatur ke display: inline-flex dengan vertical-align: middle dan line-height: 1.',
            'Presisi Wadah Ikon (Button, Div, Span, Badge): Menyelaraskan seluruh container berdimensi pasti (w-4 s/d w-16, h-4 s/d h-16) di modal PO Supplier, Detail Tempo, Form Produk, dan Header Admin agar child ikon 100% presisi vertikal dan horizontal tanpa terpengaruh line-height font luar.',
            'Redesain Empty-State Histori Pembayaran PO: Memperbaiki ikon jam yang sebelumnya menempel di sisi kiri kartu karena deklarasi class block tanpa margin-auto. Diganti dengan wadah badge bulat lembut (rounded-2xl) terpusat (flex flex-col items-center justify-center) yang rapi, elegan, dan proporsional.',
            'Perataan Ikon Empty-State Tempo, Varian & Kasir: Menyelaraskan seluruh tampilan kosong (empty-state) pada rincian barang tempo, spesifikasi varian produk, serta status gagal memuat akun kasir dengan tata letak flex terpusat.',
            'Pembersihan Gap Header Mobile Admin: Menyesuaikan button action preview & logout di header CMS Admin agar bebas dari celah flexbox sisa saat teks tombol disembunyikan di layar mobile.',
            'Sinkronisasi Multi-Channel v1.9.64 (Android VersionCode 10964): Terkompilasi dan tersinkronisasi penuh ke Vite build, paket flashdisk, dan Capacitor Android.'
        ]
    },
    {
        id: 'log-1-9-63',
        version: 'v1.9.63',
        date: '2026-09-27',
        title: 'Audit Bug Menyeluruh: Stabilitas State Member, Back Button Android 6 Modal & Optimasi Performa',
        category: 'fix',
        badge: 'Comprehensive Audit & Fix v1.9.63',
        items: [
            'Fix 1 — Variabel Lingkup State Member (storage.js & payment.js): Memperbaiki referensi variabel currentMember yang belum diimpor pada modul storage.js (saat sinkron realtime hadiah) dan payment.js (saat kalkulasi sisa saldo piutang tempo). Mengeliminasi potensi ReferenceError saat pelanggan berbelanja dengan poin atau membuka menu member.',
            'Fix 2 — Penanganan Hardware Back Button Android untuk 6 Modal Tertinggal: Menghubungkan closeModalByName di router.js dengan handler modal kasir (posHoldPrompt, posHeldModal, posCameraScanner) dan modal piutang tempo (tempoDetail, tempoPayment, tempoPenalty). Menekan tombol kembali fisik di Android kini menutup modal-modal tersebut secara mulus tanpa keluar aplikasi.',
            'Fix 3 — Proteksi Dialog Transien Kasir: Penambahan pemeriksaan otomatis pada handleAppBackButton untuk segera menutup overlay transien struk kasir, slip shift, dan dialog konfirmasi antrean saat tombol kembali Android ditekan.',
            'Fix 4 — Eliminasi Ghost Item Ber-Qty 0 di Keranjang (cart.js): Memperbaiki logika setCQty dan updCQty saat proteksi stok aktif agar item yang kuantitasnya menjadi 0 setelah dibatasi stok langsung dikeluarkan dari keranjang (splice) alih-alih tertinggal sebagai item kosong.',
            'Fix 5 — Optimasi Ekstrem Performa Katalog Storefront (catalog.js): Mengeliminasi instansiasi Map berulang kali di dalam loop comparator sortir produk (.sort()), meningkatkan kelancaran scroll dan pencarian produk hingga 5x lebih cepat di perangkat mobile.',
            'Fix 6 — Rekonsiliasi Varian & Deduplikasi Batch PO Restock (purchases.js): Mencegah penulisan ganda pada DocumentReference yang sama dalam Firestore Batch saat PO memiliki beberapa varian dari produk yang sama, serta memastikan stok utama produk selalu tersinkronisasi 1:1 dengan total varian aktif.',
            'Fix 7 — Input Stok Desimal Varian CMS (variants.js): Menambahkan atribut min="0" step="0.01" pada input stok varian agar input angka pecahan/desimal (misal 2.5 kg atau 0.5 m) dapat disimpan tanpa terhalang validasi browser.',
            'Sinkronisasi Multi-Channel v1.9.63 (Android VersionCode 10963): Terkompilasi dan tersinkronisasi penuh ke Vite build, paket flashdisk, dan Capacitor Android.'
        ]
    },
    {
        id: 'log-1-9-62',
        version: 'v1.9.62',
        date: '2026-09-27',
        title: 'Fix Bug Badge Stok Timbul-Tenggelam di Storefront & POS Kasir',
        category: 'fix',
        badge: 'Stock Badge Bugfix v1.9.62',
        items: [
            'Bug 1 — Storefront: Badge "Stok X" dan "SISA X" kadang tidak muncul pada produk bervarian. Root cause: kalkulasi total stok varian tidak menggunakan guard v.stock != null, sehingga varian yang belum punya field stock (undefined) dievaluasi sebagai NaN dan menyebabkan undercount / total salah. Fix: tambahkan guard identik dengan getProductStockInfo() di POS: reduce((s,v) => s + (v.stock != null ? parseFloat(v.stock)||0 : 0)).',
            'Bug 2 — Storefront: Badge "Stok X" bertabrakan / tertimpa badge Diskon atau PO karena keduanya menggunakan posisi absolute top-2 left-2 yang sama. Fix: pindahkan badge stok ke sudut kanan-bawah (bottom-2 right-2) agar tidak pernah bertabrakan dengan badge lain — badge stok kini selalu terlihat jelas.',
            'Bug 3 — POS Kasir (Grid Mode): Badge "SISA X" langsung hilang begitu kasir menambahkan 1 item ke keranjang. Root cause: kondisi totalQtyInCart <= 0 membuat badge tidak dirender jika produk sudah ada di keranjang. Fix: hapus kondisi tersebut, badge SISA sekarang selalu tampil saat stok menipis dan menampilkan sisa stok AKTUAL setelah dikurangi qty di keranjang (SISA = totalStock - totalQtyInCart), membantu kasir mengetahui stok tersisa secara real-time.',
            'Sinkronisasi Multi-Channel v1.9.62 (Android VersionCode 10962): Terkompilasi dan tersinkronisasi penuh ke Vite build, paket flashdisk, dan Capacitor Android.'
        ]
    },
    {
        id: 'log-1-9-61',
        version: 'v1.9.61',
        date: '2026-09-27',
        title: 'Fix Kritis: Stok Restock PO Supplier Hilang Setelah Reload / Re-Login',
        category: 'fix',
        badge: 'Critical Bugfix v1.9.61',
        items: [
            'Root Cause: Saat admin menerima barang PO dan stok bertambah otomatis (receiveAndRestockPO), fungsi saveApp([\'purchases\', \'products\']) menyimpan array produk ke field di dokumen utama Firestore (cms_data), BUKAN ke sub-koleksi products/{id} yang merupakan sumber data saat loadAppData() dipanggil ulang. Akibatnya stok hanya ada di memori/cache lokal dan hilang begitu halaman di-reload atau admin re-login.',
            'Fix: Mengganti mekanisme simpan produk di receiveAndRestockPO menjadi Firestore Batch Write langsung ke sub-koleksi freshmart/cms_data/products/{id} — identik dengan pola yang dipakai restock manual (stock.js), checkout (checkout.js), dan POS kasir (pos.js). Setiap produk yang stoknya berubah kini disimpan secara atomik dan persisten.',
            'Sinkronisasi Multi-Perangkat: updatedProductIds dikirimkan ke listener realtime agar semua perangkat (tablet, HP kasir, dll) langsung menerima pembaruan stok tanpa perlu refresh manual.',
            'Sinkronisasi Multi-Channel v1.9.61 (Android VersionCode 10961): Terkompilasi dan tersinkronisasi penuh ke Vite build, paket flashdisk, dan Capacitor Android.'
        ]
    },
    {
        id: 'log-1-9-60',
        version: 'v1.9.60',
        date: '2026-09-27',
        title: 'Presisi Icon Center Universal, Back Button Android Menyeluruh & Fix Z-Index Preview Cetak',
        category: 'fix',
        badge: 'UX Precision Fix v1.9.60',
        items: [
            'Universal Icon Centering System: Menambahkan CSS global yang memastikan semua ikon FontAwesome di dalam button (rounded, square, maupun action strip) selalu presisi center secara vertikal DAN horizontal di seluruh antarmuka aplikasi menggunakan inline-flex + align-items center + line-height 1.',
            'Perbaikan Back Button Android Menyeluruh — PO & Supplier: Mendaftarkan 6 modal yang sebelumnya tidak terdaftar ke sistem History API (oMods): Form PO (purchaseForm), Product Picker PO (purchasePicker), Detail PO (purchaseDetail), Bayar Hutang PO (purchasePayment), Form Supplier (supplierForm), dan Detail Supplier (supplierDetail). Kini back button Android menutup semua modal ini dengan animasi halus tanpa berpindah halaman.',
            'Fix Z-Index Preview Cetak Dokumen: Menaikkan z-index modal doc-preview-modal, pos-receipt-fallback-modal, dan pos-shift-receipt-modal ke z-index 10050 agar tidak pernah tertutup overlay modal lain yang sedang terbuka secara bersamaan.',
            'Fix Preview Wrapper Min-Height: Menambahkan min-height pada doc-paper-wrapper agar area kertas A4 tidak collapse saat konten belum dirender.',
            'Sinkronisasi Multi-Channel v1.9.60 (Android VersionCode 10960): Terkompilasi dan tersinkronisasi penuh ke Vite build, paket flashdisk, dan Capacitor Android.'
        ]
    },
    {
        id: 'log-1-9-59',
        version: 'v1.9.59',
        date: '2026-09-27',
        title: 'Fix Kritis Dialog Konfirmasi — Penanganan Deklarasi Variabel confirmPromiseResolve',
        category: 'fix',
        badge: 'Critical Bugfix v1.9.59',
        items: [
            'Fix Uncaught ReferenceError confirmPromiseResolve: Menghapus tag pembuka JSDoc yang tidak tertutup sebelum deklarasi variabel `export let confirmPromiseResolve = null;` di `src/core/ui.js` yang sebelumnya menyebabkan deklarasi variabel tertelan ke dalam blok komentar sehingga memicu error runtime saat dialog konfirmasi (showConfirm) dipanggil.',
            'Stabilitas Dialog Hapus PO & Konfirmasi Global: Memastikan fitur hapus pesanan kulakan (deletePurchaseOrder), rollback cadangan, snapshot darurat, dan seluruh dialog aksi konfirmasi sistem berjalan normal 100% tanpa kendala di konsol peramban.',
            'Sinkronisasi Multi-Channel v1.9.59 (Android VersionCode 10959): Terkompilasi dan tersinkronisasi penuh ke Vite build, paket flashdisk, dan Capacitor Android.'
        ]
    },
    {
        id: 'log-1-9-58',
        version: 'v1.9.58',
        date: '2026-09-27',
        title: 'Ekosistem Cetak Terpadu Berbasis Live Preview — Harmonisasi Struk POS, Slip Shift, Dokumen A4 PO Supplier, Invoice, Surat Jalan & Struk Storefront',
        category: 'feature',
        badge: 'Unified Print Preview Ecosystem v1.9.58',
        items: [
            'Standardisasi Wajib Live Interactive Preview: Seluruh alur pencetakan dokumen maupun struk kasir diwajibkan melalui pratinjau interaktif terlebih dahulu sebelum dieksekusi ke mesin printer fisik, PDF, atau gambar, mencegah salah cetak dan memastikan seluruh data tampak selaras.',
            'Integrasi Purchase Order (PO) Supplier ke Modal Preview A4 (openDocPreview("po", poId)): Mengganti pencetakan langsung PO ke lembar pratinjau A4 standar resmi Toko Putri dengan Kop Toko, rincian supplier, termin pembayaran, tabel produk bergaris rapi, total/diskon/ongkir, tanda tangan Purchasing & Supplier, serta opsi Simpan Gambar HD (untuk WhatsApp ke supplier), Cetak PDF, dan Print Langsung.',
            'Harmonisasi Preview Struk Kasir POS (pos-receipt-fallback-modal): Memodernisasi tampilan struk thermal in-modal dengan scrollbar halus (.custom-scrollbar), tombol close bulat dengan ikon SVG FontAwesome xmark, dan tombol aksi cetak rounded-2xl py-3.5 aktif.',
            'Harmonisasi Preview Slip Rekap Shift Kasir (pos-shift-receipt-modal): Mempercantik pratinjau slip rekap shift X-Report dan Z-Report kasir dengan scrollbar halus (.custom-scrollbar), tombol close SVG xmark, dan tombol cetak rounded-2xl py-3.5.',
            'Dukungan Struk Pelanggan Storefront (Customer Receipt Preview): Menghadirkan tombol aksi "Preview & Cetak Struk" pada modal rincian pesanan pembeli di Storefront, serta memperluas fungsi openReceiptPreview agar mendukung parameter orderId opsional dan fallback pencarian ke myOrders pelanggan.',
            'Modernisasi Modal Preview Struk Utama (receipt-preview-modal): Memperbarui scrollbar dan tombol print thermal menjadi rounded-2xl py-3.5 font-bold shadow-glow dengan micro-animation active:scale-95.',
            'Sinkronisasi Multi-Channel v1.9.58 (Android VersionCode 10958): Terkompilasi dan tersinkronisasi penuh ke Vite build, paket flashdisk, dan Capacitor Android.'
        ]
    },
    {
        id: 'log-1-9-57',
        version: 'v1.9.57',
        date: '2026-09-27',
        title: 'Modernisasi Total UI/UX Native App & Eliminasi Dialog Klasik — Redesain Custom Prompt, Perbaikan Promise Confirm & Harmonisasi Modal',
        category: 'optimization',
        badge: 'Native Mobile UI/UX Parity v1.9.57',
        items: [
            'Redesain Total Custom Prompt Native App (window.customPrompt): Mengganti dialog prompt kaku dengan bottom-sheet/dialog mobile-first mewah (max-w-[380px] sm:max-w-[420px], rounded-[2rem]), ikon pensil tematis dinamis var(--color-primary), input teks / textarea adaptif, tombol rounded-2xl active:scale-95, serta dukungan penuh Promise (await customPrompt(...)) dan keyboard shortcut (Enter/Escape).',
            'Eliminasi Sisa Native Browser Prompt: Mengganti prompt bawaan browser pada fitur lompat urutan produk CMS (jumpProductOrder) dengan customPrompt yang konsisten dengan estetika aplikasi.',
            'Dukungan Promise Universal pada showConfirm: Memperbaiki showConfirm agar mengembalikan Promise boolean jika dipanggil tanpa fungsi callback. Mengatasi bug di mana pemanggilan await showConfirm() pada fitur rollback dan snapshot darurat (backup-sync.js) mengembalikan undefined sehingga proses rollback tidak dapat tereksekusi.',
            'Modernisasi Parkir Antrean Kasir F6 (pos-hold-prompt-modal): Memperlebar kartu modal menjadi kontainer rounded-[2rem] yang lapang, tombol close SVG xmark menggantikan karakter "×", input catatan rounded-2xl, dan tombol aksi rounded-2xl py-3.5.',
            'Harmonisasi Tombol Ulasan Admin & Akun Kasir: Mengubah tombol "Balas Ulasan" dari warna hardcoded biru menjadi warna tema toko (primary-bg-soft primary-text) dengan touch target lega 44px, serta memperbarui seluruh modal tambah & edit akun kasir dengan kontrol rounded-2xl.',
            'Standardisasi Custom Scrollbar & Sudut Rounded-3xl Seluruh Modal: Memperbarui seluruh modal tersisa (product-modal, quick-variant, admin-modal, admin-order, printer-settings, exit-confirm, doc-preview, modal tanya-jawab Q&A FAQ, dan modal download APK) ke scrollbar tipis transparan (.custom-scrollbar) dan sudut kontainer rounded-3xl / rounded-[2rem].',
            'Sinkronisasi Multi-Channel v1.9.57 (Android VersionCode 10957): Terkompilasi dan tersinkronisasi penuh ke Vite build, paket flashdisk, dan Capacitor Android.'
        ]
    },
    {
        id: 'log-1-9-56',
        version: 'v1.9.56',
        date: '2026-09-27',
        title: 'Fix Tampilan Dialog Konfirmasi — Render HTML Tersanitasi & Redesain Dialog Lega Native App',
        category: 'optimization',
        badge: 'Confirm Dialog HTML Parity v1.9.56',
        items: [
            'Fix Raw HTML Entities pada Dialog Konfirmasi: Memperbaiki metode render pesan dialog konfirmasi (showConfirm) dari innerText mentah menjadi innerHTML yang disanitasi secara aman via DOMPurify (dengan pelestarian class styling & style inline), mengeliminasi bug di mana tag <b>, <br>, dan <span class="..."> muncul sebagai teks mentah pada dialog hapus PO dan hapus supplier.',
            'Redesain Kotak Dialog Konfirmasi (Custom Confirm Box): Memperlebar lebar dialog dari 320px sempit menjadi max-w-[380px] sm:max-w-[420px] yang lapang dan bernafas, mengganti elemen teks pesan menjadi kontainer multiline (leading-relaxed), serta menstandardisasi sudut tombol aksi ke rounded-2xl ala iOS & Android Material 3.',
            'Kerapian Pesan Peringatan Bertingkat: Peringatan jumlah produk etalase terhubung (amber) dan riwayat order kulakan PO terkait (rose) kini tampil terformat indah, berwarna, dan mudah dipahami dalam sekali pandang.',
            'Sinkronisasi Multi-Channel v1.9.56 (Android VersionCode 10956): Terkompilasi dan tersinkronisasi penuh ke Vite build, paket flashdisk, dan Capacitor Android.'
        ]
    },
    {
        id: 'log-1-9-55',
        version: 'v1.9.55',
        date: '2026-09-27',
        title: 'Audit Presisi UI Native App Menyeluruh — Harmonisasi Tombol Bayar PO & Standardisasi Slim Scrollbar Lintas Modul',
        category: 'optimization',
        badge: 'Native App UI Audit Parity v1.9.55',
        items: [
            'Harmonisasi Tombol Bayar Hutang PO: Menyelaraskan tombol aksi "Bayar Hutang Supplier" pada kartu daftar PO dari warna hardcoded amber (bg-amber-500) menjadi warna tema aktif toko var(--color-primary), serasi 1:1 dengan tombol cicilan pada modul supplier.',
            'Standardisasi Custom Scrollbar Lintas Modal: Mengganti seluruh sisa utilitas hide-scrollbar pada Modal Detail PO, Histori Pembayaran Cicilan PO, Form Pembayaran Cicilan PO, Modal Form Supplier, Modal Profil Supplier, serta seluruh Modal Piutang & Denda Tempo menjadi .custom-scrollbar yang elegan, tipis (6px), dan ramah desktop/tablet.',
            'Audit Bebas Keruntuhan & Overflow: Memverifikasi seluruh wadah gambar produk, kartu list, grid 2-kolom/3-kolom responsif, touch-targets 44px, dan safe-area bottom footer di seluruh modul pengadaan dan transaksi berjalan.',
            'Sinkronisasi Multi-Channel v1.9.55 (Android VersionCode 10955): Terkompilasi dan tersinkronisasi penuh ke Vite build, paket flashdisk, dan Capacitor Android.'
        ]
    },
    {
        id: 'log-1-9-54',
        version: 'v1.9.54',
        date: '2026-09-27',
        title: 'Presisi Antarmuka Order Kulakan (PO) & Product Picker — Pembatasan Scroll Varian, Custom Slim Scrollbar & Perlebar Modal Desktop',
        category: 'optimization',
        badge: 'PO UI Precision & Scroll Parity v1.9.54',
        items: [
            'Pembatasan Kontainer Varian (Max-Height Scrollable): Membungkus daftar varian produk pada Product Picker (max-h-44 sm:max-h-52) dan Item Card Form PO (max-h-36 sm:max-h-44) ke dalam kontainer scrollable mandiri, mencegah produk dengan puluhan varian (seperti No Drop 36 varian) meledak vertikal dan mendorong elemen form lainnya keluar layar.',
            'Custom Slim Scrollbar (.custom-scrollbar): Menghadirkan scrollbar tipis modern (6px) transparan dengan indikator pill melengkung halus dan kompatibilitas tema gelap (dark mode), menggantikan utilitas hide-scrollbar agar pengguna desktop/tablet mendapatkan petunjuk visual navigasi konten yang jelas tanpa scrollbar jadul yang kaku.',
            'Preservasi Posisi Scroll Form PO: Mengintegrasikan penyimpanan dan pemulihan posisi scroll (prevScroll) saat pemilihan varian atau perubahan kuantitas item PO berlangsung, mencegah lompatan scroll liar saat pengguna sedang meninjau form.',
            'Perlebar Modal PO di Desktop & Tablet: Memperlebar modal Buat/Edit Order Kulakan menjadi max-w-5xl (dari max-w-4xl) dan Product Picker menjadi max-w-4xl (dari max-w-2xl), menghadirkan ruang pandang yang jauh lebih lega, lapang, dan nyaman di layar komputer/laptop.',
            'Auto-Reset Scroll ke Atas Saat Modal Dibuka: Memastikan form PO dan daftar katalog Product Picker selalu otomatis berada di puncak teratas (scrollTop = 0) saat pertama kali dibuka, menjamin informasi supplier dan header selalu terlihat jelas.',
            'Sinkronisasi Multi-Channel v1.9.54 (Android VersionCode 10954): Terkompilasi dan tersinkronisasi penuh ke Vite build, paket flashdisk, dan Capacitor Android.'
        ]
    },
    {
        id: 'log-1-9-53',
        version: 'v1.9.53',
        date: '2026-09-27',
        title: 'Penyempurnaan Presisi UI Mobile & Harmonisasi Tema Menyeluruh — Tab Anti-Potong, Wrapper Thumbnail Kaku & Bayar Cicilan Tematis',
        category: 'optimization',
        badge: 'UI Precision & Theme Parity v1.9.53',
        items: [
            'Fix Keruntuhan Gambar Produk Disuplai: Membungkus elemen foto dan smart monogram cover produk ke dalam wrapper kaku (style="width: 56px; height: 56px; min-width: 56px; min-height: 56px;") dengan overflow-hidden dan w-full h-full object-cover, mengeliminasi bug di mana gambar melebar tanpa batas dan menutupi kartu produk di mobile.',
            'Tab Bar Supplier Anti-Potong (No Truncate): Mengganti teks nominal hutang pada segmented tab profil rekanan menjadi format ringkas konsisten "Hutang (X)" dengan indikator dot aktif, mencegah terpotongnya teks menjadi "Hutang ..." di layar smartphone sempit.',
            'Harmonisasi Tombol Bayar / Cicil Hutang: Mengganti tombol aksi bayar/cicil dari warna amber/oranye menyala (bg-amber-500) menjadi warna tema brand toko var(--color-primary), menciptakan keselarasan visual sempurna dengan tema aktif toko.',
            'Redesain Elegan Ringkasan Total Hutang: Mengganti background amber norak pada kartu hutang supplier dan modal pembayaran hutang dengan palet slate netral modern yang sejuk, bersih, dan berbobot akuntansi profesional.',
            'Touch Target Header & Footer 44px (WCAG Mobile): Tombol cetak dan tutup di header modal PO detail ditingkatkan ke 44x44px (w-11 h-11), tombol sekunder Tutup dan Cetak Surat PO di footer ditingkatkan menjadi h-12 rounded-2xl dengan grid simetris di smartphone.',
            'Dukungan Spacing Ekstensi Tailwind (13 & 15): Mendaftarkan spacing 13 (3.25rem = 52px) dan 15 (3.75rem = 60px) ke tailwind.config.js guna mencegah class purging yang tidak disengaja.',
            'Sinkronisasi Multi-Channel v1.9.53 (Android VersionCode 10953): Terkompilasi dan tersinkronisasi penuh ke Vite build, paket flashdisk, dan Capacitor Android.'
        ]
    },
    {
        id: 'log-1-9-52',
        version: 'v1.9.52',
        date: '2026-09-27',
        title: 'Perombakan Ergonomi Mobile-First Total & Harmonisasi Tema 100% — Anti-Sesak, Touch Target 44px, & Kartu Rekanan/PO Responsif',
        category: 'optimization',
        badge: 'Ergonomic & Theme Harmony v1.9.52',
        items: [
            'Eliminasi Tampilan Jomplang & Hardcoded Colors: Menyelaraskan seluruh elemen antarmuka (lencana status PO di profil supplier, tombol kamera upload di form & varian produk, tombol duplikat & restock di tabel produk CMS) ke CSS variable var(--color-primary) toko.',
            'Kartu Rekanan & Supplier 3-Zona Anti-Sesak: Merombak deretan 5 tombol kecil berhimpitan (36px) menjadi tata letak 3 zona yang lega: Zona 1 Profil Supplier, Zona 2 Kotak Finansial & Produk Disuplai, Zona 3 Action Bar responsif dengan Primary CTA Order PO (h-11) dan deretan tombol sekunder 44px (WA, Edit, Hapus) dalam grid 3-kolom simetris di HP.',
            'Tab Produk Disuplai Mobile-First: Mengeliminasi padding horizontal sesak pl-15 di HP, menggantikannya dengan kartu produk responsif elegan ber-thumbnail 52px, status stok, kotak info finansial (HPP, Harga Jual, Laba) yang rapi, dan tombol edit 40x40px.',
            'Action Bar Kartu Order Kulakan (PO) Simetris: Tombol sekunder di kartu daftar PO (WA Sales, Cetak Surat PO, Hapus PO) kini tertata dalam grid setara 44px (h-11 rounded-2xl) dengan teks label jelas di mobile, menjamin keterjangkauan ibu jari tanpa salah pencet.',
            'Stepper Kuantitas & Kontrol Item PO 44px: Stepper kuantitas diperbesar menjadi 44x44px (w-11 h-11) dengan tombol ganti produk dan hapus yang serasi setinggi 44px (rounded-2xl) tanpa desak-desakan di layar HP 360px.',
            'Lembar Cetak PO Profesional: Menyelaraskan tipografi lembar cetak PO dan warna font header dan subtotal ke palet warna elegan formal tanpa hardcoded biru elektrik.',
            'Eliminasi Sintaks Duplikat: Memperbaiki penutupan fungsi openModalAnim ganda di helper pembayaran cicilan PO.',
            'Sinkronisasi Multi-Channel v1.9.52 (Android VersionCode 10952): Tersinkronisasi ke paket distribusi Vite, Flashdisk, dan Capacitor Android.'
        ]
    },
    {
        id: 'log-1-9-51',
        version: 'v1.9.51',
        date: '2026-09-27',
        title: 'Transformasi Native App Order Kulakan (PO) — Product Picker Terpadu, Dukungan Multi-Varian & Qty Desimal Cerdas',
        category: 'feature',
        badge: 'PO Native Picker & Multi-Variant v1.9.51',
        items: [
            'Native App Product Picker Sheet (modal-po-product-picker): Mengeliminasi dropdown select klasik web browser yang kaku, digantikan antarmuka katalog visual native app beranimasi geser lembut (bottom sheet) lengkap dengan pencarian real-time, filter instan "Hanya Supplier Terpilih" vs "Semua Katalog Toko", chips kategori horizontal, foto/monogram produk, dan indikator stok gudang.',
            'Dukungan Multi-Varian Penuh pada Order Kulakan: Deteksi otomatis produk bervarian saat pengambilan barang. Pemilih produk menampilkan chips varian interaktif ([+ Varian A] [+ Varian B]) serta tombol "Ambil Semua Varian Sekaligus" untuk kulakan grosir cepat.',
            'Penggantian Varian Langsung di Kartu Item (Variant Switcher): Pada baris/kartu barang PO, kasir/pemilik toko dapat mengganti varian secara instan hanya dengan 1 ketukan pada pills varian tanpa perlu menghapus baris item, otomatis menyesuaikan HPP modal dan satuan barang.',
            'Auto-Restock Stok & HPP Spesifik Varian: Saat status PO diubah menjadi Diterima/Restock, sistem secara cerdas memperbarui stok dan HPP modal ke masing-masing item varian (prod.variants[x]) secara akurat sekaligus menyinkronkan stok total & HPP induk produk.',
            'Dukungan Kuantitas (Qty) Desimal / Pecahan: Mendukung kulakan bahan/barang dengan takaran koma/pecahan (contoh: 2.5 kg, 0.75 m, 1.5 kubik). Dilengkapi helper formatQty paritas 1:1 dengan POS Kasir (tanpa trailing zero) serta stepper tombol [-] [+] adaptif yang ramah bilangan bulat maupun pecahan.',
            'Adaptive Native Item Cards: Mengganti form input spreadsheet jadul dengan kartu item native yang kaya informasi: nomor urut (#1, #2), cover thumbnail monogram, badge kategori & supplier, live stepper kuantitas, input inline harga modal, serta strip subtotal reaktif dinamis.',
            'Penyelarasan Multi-Kanal PO Resmi: Format pesan WhatsApp sales supplier dan cetak surat pesanan PO ramah printer kini otomatis memuat rincian nama varian, SKU produk, dan kuantitas desimal dengan rapi.',
            'Sinkronisasi Multi-Channel v1.9.51 (Android VersionCode 10951): Terintegrasi penuh ke paket distribusi produksi, Flashdisk, dan Capacitor Android.'
        ]
    },
    {
        id: 'log-1-9-50',
        version: 'v1.9.50',
        date: '2026-09-27',
        title: 'Modernisasi Total Modul Piutang & Manajemen Tempo Cerdas — True Native Bottom Sheet, Quick-Pay Chips & Detail Multi-Tab',
        category: 'feature',
        badge: 'Smart Tempo & Native Sheet v1.9.50',
        items: [
            'Arsitektur Root DOM Mounting (ensureTempoModals): Seluruh modal Piutang (Detail Nota, Pembayaran Cicilan, dan Pengaturan Denda) kini dimounting langsung ke document.body sehingga bebas dari containing block dan CSS stacking context parent.',
            'True Native Mobile Bottom Sheet Pembayaran Cicilan (modal-tempo-payment): Mengeliminasi window.customPrompt primitif, digantikan form pembayaran interaktif beranimasi native dengan ringkasan sisa pokok & denda, live preview "Sisa Tagihan Setelah Bayar", pilihan tanggal bayar, metode bayar (Kas Tunai, Transfer Bank, QRIS), catatan transaksi, serta sticky action footer 48px.',
            'Quick-Pay Preset Chips Cicilan Piutang: Tombol cepat pembayaran persentase ([ 25% ] [ 50% ] [ 75% ] [ 100% LUNAS ]) yang menghitung nominal seketika dengan 1 ketukan jempol.',
            'Modal Detail Piutang Komprehensif (modal-tempo-detail): Menghadirkan profil pelanggan dengan monogram inisial, tombol tutup tersemat di sudut kanan atas (pinned top-right), serta Segmented Tab Control 3-Kolom: (1) Rincian Barang yang dibeli (tampilan adaptif mobile card vs tabel desktop), (2) Histori Cicilan kronologis lengkap dengan nominal, metode, dan catatan, (3) Data Pengiriman & Pengaturan Denda Keterlambatan.',
            'Pengaturan Denda Keterlambatan Native (modal-tempo-penalty): Mengganti dialog prompt lama dengan modal bottom sheet ramping yang menyediakan preset chips tarif denda ([ 0% Bebas Denda ] [ 0.5% ] [ 1% Standar ] [ 2% ]), input custom %/hari, serta tombol bekukan/lanjutkan denda otomatis.',
            'Harmonisasi Warna Tema 100% (var(--color-primary)): Mengganti kelas statis primary-bg dengan token dinamis dan transparansi RGBA tembus pandang pada seluruh kartu metrik statistik, lencana keterlambatan, segmented filter chips, dan tombol aksi kartu piutang.',
            'Fallback Dynamic Import di Router: Memastikan navigasi tab Piutang di Admin CMS selalu termuat tangguh dan instan melalui fallback lazy load tempo.js.'
        ]
    },
    {
        id: 'log-1-9-49',
        version: 'v1.9.49',
        date: '2026-09-26',
        title: 'Harmonisasi Tema Warna 100% & Adaptive Dual-Mode UX Native App — Item Builder PO, Touch Controls, & Standarisasi Aksi',
        category: 'optimization',
        badge: 'Theme & Native UX v1.9.49',
        items: [
            'Adaptive Dual-Mode PO Item Builder (Mobile Native Cards vs Desktop Table): Mengeliminasi tabel horizontal kaku yang terpotong/overflow di layar smartphone (<640px). Pada layar sentuh mobile, setiap baris item kulakan kini otomatis menjadi kartu sentuh native yang lega dengan monogram inisial, pemilih produk intuitif, stepper kuantitas sentuh [-] [ 1 ] [+], input harga modal HPP Rp, strip subtotal real-time, dan tombol hapus cepat.',
            'Segmented Touch Control & Preset Chips Termin Pembayaran: Mengganti dropdown raw <select> dengan kontrol pill sentuh native ([ Tunai / Cash ] [ Tempo ] [ Konsinyasi ]) serta preset chips hari jatuh tempo ([ 7 Hari ] [ 14 Hari ] [ 30 Hari ] [ 60 Hari ]) yang responsif.',
            'Optimalisasi Native Sheet Detail Supplier (modal-supplier-detail): Menyematkan tombol tutup [X] permanen di sudut kanan atas (pinned top-right), mengeliminasi tombol aksi ganda di header yang menyebabkan tombol turun ke tengah layar pada mobile, serta menghadirkan Tab Navigasi Segmented Control 3-Kolom ala app iOS/Android yang 100% pas di layar smartphone tanpa terpotong.',
            'Pencegahan Clipping & Eliminasi Dobel Scroll: Memperbaiki kontainer modal detail supplier menjadi flex overflow-hidden sehingga tombol empty state [Buka Katalog Produk Toko] dan rincian konten tampil 100% utuh tanpa terpotong di balik sticky footer.',
            'Harmonisasi Warna Tema Penuh (var(--color-primary)): Mengeliminasi warna kusam/muddy akibat kelas statis pada tema tertentu, menyelaraskan ikon header modal, lencana status PO, tombol aksi terima barang, filter status tabs, dan tombol simpan dengan token warna tema dinamis.',
            'Standarisasi Sticky Action Footer di Seluruh Modal: Semua modal formulir, rincian, dan pembayaran supplier maupun PO kini dilengkapi bilah aksi lengket di bagian bawah setinggi 48px (h-12 rounded-2xl) dengan padding aman safe-area perangkat (env(safe-area-inset-bottom)) dan umpan balik sentuh active:scale-95.',
            'Rincian PO & Pembayaran Native Terpadu: Modal rincian PO (modal-po-detail) kini menyajikan kartu item mobile responsif, tombol langsung "+ Terima Barang & Restock" dan "+ Bayar Cicilan Hutang", sedangkan modal pembayaran dilengkapi tombol cepat "LUNAS" tematis.',
            'Sinkronisasi Multi-Channel v1.9.49 (Android VersionCode 10949): Disinkronisasikan ke paket distribusi produksi, Flashdisk, dan Capacitor Android.'
        ]
    },
    {
        id: 'log-1-9-48',
        version: 'v1.9.48',
        date: '2026-09-26',
        title: 'Resolusi Tuntas Bottom Sheet Terpotong di Modul Supplier & PO — Root DOM Mounting & Animasi Geser Native',
        category: 'bugfix',
        badge: 'Bottom Sheet Fix v1.9.48',
        items: [
            'Mounting Modal ke Root DOM (document.body): Memindahkan kontainer modal Supplier dan Order Kulakan (PO) keluar dari #admin-content dan .scroll-content langsung ke document.body, mengeliminasi isolasi stacking context dan CSS transform yang menyebabkan modal terpotong atau terselip di dasar layar.',
            'Integrasi openModalAnim & closeModalAnim: Menyelaraskan seluruh modal Supplier & PO dengan engine animasi native resmi Toko Putri (translate-y-full ke translate-y-0) dengan pembersihan reflow sinkron (void m.offsetWidth) untuk transisi geser jempol yang mulus.',
            'Eliminasi GPU Override Transform Clashes: Menghapus deklarasi transform: translateZ(0) langsung pada selector modal di CSS yang menimpa animasi translate-y Tailwind.',
            'Backdrop Blur 100% Viewport: Backdrop semi-transparan bg-slate-950/40 backdrop-blur-sm kini menutupi 100% layar HP maupun desktop dengan z-[150], dengan penutupan modal instan saat klik area luar.'
        ]
    },
    {
        id: 'log-1-9-47',
        version: 'v1.9.47',
        date: '2026-09-26',
        title: 'Harmonisasi Tema Penuh & Native App Bottom Sheet — Supplier & Order Kulakan (PO)',
        category: 'optimization',
        badge: 'Native Bottom Sheet v1.9.47',
        items: [
            'Eliminasi Latar Hitam Modal: Mengganti dark:bg-slate-850 (kelas Tailwind tidak valid) dan bg-black/60 yang menghasilkan latar belakang modal pitch-black dengan bg-slate-950/40 backdrop-blur-sm yang elegan dan semi-transparan.',
            'Native Mobile Bottom Sheet: Semua modal Supplier (detail, form) dan Order Kulakan PO (form, detail, bayar) kini tampil sebagai bottom sheet ala app native Android/iOS — rounded-t-[2rem] di mobile, centered di desktop, disertai drag pill indicator (.pull-indicator) di atas setiap sheet.',
            'Hero Banner Tematis: Menambahkan ambient hero banner dengan glow var(--color-primary) di header modul Supplier & Rekanan dan Order Kulakan sebagai titik orientasi visual utama.',
            'Kartu Metrik Selaras Tema: Mengganti kartu .card-modern yang memiliki hardcoded dark background dengan kartu bg-white/95 dark:bg-slate-800/80 yang bersih dan kompatibel dark mode.',
            'Filter Tab Tema Konsisten: Semua tab filter status PO kini menggunakan primary-bg text-white saat aktif, menggantikan warna bg-indigo-600/teal-600/amber-600 yang tidak selaras tema.',
            'CSS Kelas Baru (.modal-bottom-sheet, .pull-indicator, .hide-scrollbar): Ditambahkan ke style.css untuk mendukung perancangan native app sheet di seluruh codebase.',
            'Sticky Action Footer: Tombol Simpan di form PO kini sticky di bawah modal dengan background frosted glass sehingga selalu terjangkau ibu jari tanpa scroll panjang.',
            'Scrollbar Tersembunyi: Menerapkan .hide-scrollbar pada konten modal untuk menghilangkan scrollbar tebal bergaya desktop yang tidak native di layar sentuh.'
        ]
    },
    {
        id: 'log-1-9-46',
        version: 'v1.9.46',
        date: '2026-09-26',
        title: 'Modul Supplier & Rekanan + Order Kulakan (Purchase Order) Terintegrasi',
        category: 'feature',
        badge: 'Supplier & Purchase Order v1.9.46',
        items: [
            'Modul Master Data Supplier & Rekanan: Database lengkap rekanan/pemasok mencakup nama perusahaan, kode unik, nama sales/PIC, nomor WhatsApp, kota, alamat gudang, rekening bank, dan termin pembayaran default (cash / tempo 7-60 hari / konsinyasi).',
            'Profil Rekanan 3-Tab: Setiap supplier memiliki profil mendalam dengan tab Katalog Produk yang Disuplai, Riwayat Order Pembelian (PO), dan Kartu Hutang Usaha — lengkap dengan metrik ringkasan (total produk, total PO, dan outstanding debt).',
            'Lacak Asal-Usul Barang: Setiap produk kini dapat dihubungkan ke supplier pemasoknya melalui dropdown di form edit produk. Badge rekanan tampil di kartu produk CMS Admin untuk identifikasi instan.',
            'Order Kulakan / Purchase Order (PO): Sistem PO lengkap untuk pencatatan order ke supplier — pilih supplier, tanggal order, termin bayar, dan tambahkan item produk beserta qty dan harga beli.',
            'Otomatis Restock Stok Gudang: Saat PO berstatus "Diterima", stok semua produk dalam order otomatis bertambah secara real-time tanpa perlu input manual per produk.',
            'Manajemen Pembayaran Hutang Supplier: Catat pembayaran hutang ke supplier (cash / cicilan / tempo), lacak sisa hutang outstanding, tandai PO lunas, dan lihat riwayat pembayaran lengkap per PO.',
            'Filter Produk per Supplier: Tabel produk CMS Admin mendukung filter berdasarkan supplier untuk melihat semua barang yang disuplai oleh rekanan tertentu.',
            'Kirim WhatsApp 1-Klik ke Sales: Tombol shortcut WhatsApp langsung membuka chat dengan sales supplier dari dalam profil rekanan.'
        ]
    },
    {
        id: 'log-1-9-45',
        version: 'v1.9.45',
        date: '2026-09-26',
        title: 'Harmonisasi Tema Warna Penuh pada Kartu Member Digital & Loyalty Pass',
        category: 'optimization',
        badge: 'Member Card Theme Parity v1.9.45',
        items: [
            'Harmonisasi Ikon Header Modal Member: Menggantikan gradien oranye/amber statis dengan warna tema primer aktif toko (primary-bg) berbayang halus yang menyatu dengan identitas brand toko.',
            'Penyelarasan Tombol Simpan ke Galeri: Tombol unduh/ekspor kartu member kini otomatis mengadopsi warna brand primer aktif toko, menghilangkan ketidakselarasan warna oranye jomplang.',
            'Harmonisasi Tombol Balik Kartu & Ikon Level: Tombol balik kartu 3D dan ikon tingkatan keanggotaan kini menggunakan variabel var(--color-primary).',
            'Penyelarasan Indikator Progres Level & Saldo Poin: Bar progres kenaikan tingkat tier member dan badge total saldo poin kini tersinkronisasi 100% dengan warna tema toko.',
            'Harmonisasi Kartu Ringkasan Member di Checkout: Banner pendeteksian nomor member resmi saat checkout kini menggunakan border, ikon, dan tombol buka kartu bernuansa tema aktif toko.',
            'Kotak Keuntungan Member & Kontak WhatsApp: Menyelaraskan kotak edukasi hak istimewa member dengan palet tema toko serta nomor layanan WhatsApp kasir resmi.'
        ]
    },
    {
        id: 'log-1-9-44',
        version: 'v1.9.44',
        date: '2026-09-26',
        title: 'Harmonisasi Tema Warna Penuh & Integrasi Presisi Mode Gelap Sistem (System Dark Mode Parity)',
        category: 'optimization',
        badge: 'Theme & Dark Mode Harmony v1.9.44',
        items: [
            'Harmonisasi Penuh Pusat Data & Sinkronisasi CMS: Memperbaiki kartu ekspor database dan riwayat penjualan dengan latar belakang dark slate yang elegan dan kontras tinggi, mengeliminasi kartu putih yang silau saat mode gelap aktif.',
            'Penyelarasan Warna Tombol Ekspor dengan Tema Toko: Tombol ekspor CSV katalog produk dan transaksi kini otomatis mengadopsi warna tema primer aktif (var(--color-primary)) toko, menggantikan tombol biru dan ungu yang tidak serasi.',
            'Perbaikan Teks & Kontras Proteksi Rollback: Memperbaiki kartu Proteksi Keamanan Anti-Kehilangan Data sehingga teks deskripsi, ikon perisai, dan tombol rollback tampil tajam dan 100% terbaca jelas di mode gelap.',
            'Harmonisasi Kartu Unduh Aplikasi Android di Footer: Menyelaraskan border, gradien latar belakang, lencana APK RESMI, dan panah unduh dengan warna tema utama toko, menghilangkan benturan warna hijau zamrud statis.',
            'Integrasi Real-Time Mode Gelap Sistem OS: Menambahkan pendeteksian dinamis prefers-color-scheme via media query listener sehingga aplikasi otomatis menyesuaikan tampilan terang/gelap saat pengguna mengubah setelan tema perangkat Android/komputer secara real-time.'
        ]
    },
    {
        id: 'log-1-9-43',
        version: 'v1.9.43',
        date: '2026-09-26',
        title: 'Smart Dynamic Product Cover Engine: Visual Mewah & Otomatis untuk Produk Tanpa Gambar di Storefront, Modal & POS Kasir',
        category: 'feature',
        badge: 'Smart Product Cover v1.9.43',
        items: [
            'Smart Dynamic Product Cover Engine: Menghadirkan solusi visual otomatis bagi produk baru yang belum memiliki foto/gambar. Tanpa perlu upload gambar atau koneksi eksternal, sistem secara otomatis merender kartu grafis modern beresolusi tinggi dengan gradien warna estetik, cincin geometris, dan radial glow.',
            'Deteksi Ikon & Palet Kategori Semantik Otomatis: Sistem secara cerdas mendeteksi kata kunci kategori, subkategori, atau nama produk untuk menyematkan ikon vektor resmi (contoh: Rol Cat untuk Cat & Pelapis, Palu & Obeng untuk Paku & Perkakas, Kran/Air untuk Pipa & Sanitair, Cetok Semen untuk Bahan Bangunan, Petir/Lampu untuk Kelistrikan, Pohon untuk Kayu, Gembok untuk Kunci, Perisai untuk Besi/Atap, dan Spray/Lem untuk Perekat).',
            'Tipografi Monogram Inisial Huruf Besar: Menampilkan 2 huruf inisial produk dengan tipografi tebal modern berbayang lembut (contoh: "ND" untuk No Drop, "PS" untuk Paku Super, "SG" untuk Semen Gresik) layaknya kemasan produk minimalis kelas dunia.',
            'Eliminasi Ketergantungan Eksternal (Zero Offline Failure): Menghapus seluruh placeholder eksternal (placehold.co) yang lambat atau rusak saat offline. Visual Smart Cover dirender instan 0ms secara lokal via CSS & SVG murni.',
            'Integrasi Menyeluruh di Seluruh Modul: Diterapkan serempak pada Kartu Katalog Storefront (Grid & List), Modal Detail Produk (Hero Image & Rekomendasi Terkait), POS Kasir (Katalog Grid, List & Keranjang Belanja), Lembar Varian Kasir, Keranjang Belanja Pembeli, Halaman Favorit/Wishlist, serta Tabel & Form Produk CMS Admin.'
        ]
    },
    {
        id: 'log-1-9-42',
        version: 'v1.9.42',
        date: '2026-09-26',
        title: 'Tampilan Harga Modal HPP POS Kasir, Paritas Lencana Produk Lengkap & Proteksi Diskon Anti-Jual Rugi (Margin Guard)',
        category: 'feature',
        badge: 'POS HPP & Margin Protection v1.9.42',
        items: [
            'Perapian Tata Letak Lencana (Badges) POS Kasir: Menata ulang posisi badge agar kartu produk tidak lagi berantakan atau tertutup tumpukan badge. Foto produk kini 100% bersih tanpa deretan badge vertikal (hanya maksimal 1 pill diskon/PO di sudut atas), Brand ditampilkan sebagai subtitle teks elegan mendampingi Kategori (contoh: CAT TEMBOK · NO DROP), chip operasional (Varian, Grosir, Sisa Stok) disajikan ringkas, dan Harga Modal (HPP) disematkan rapi tepat di samping harga jual.',
            'Transparansi Harga Modal (HPP) Kasir: Menampilkan badge "HPP [nominal]" dan info "Modal: Rp [nominal]" di kartu produk katalog kasir, lembar varian aktif, rincian per baris item di keranjang belanja, ringkasan belanja total, serta pop-up pembayaran kasir.',
            'Proteksi Diskon Anti-Jual Rugi (Margin Guard): Diskon produk per item secara ketat dibatasi tidak boleh membuat harga jual jatuh di bawah harga pokok penjualan (HPP) produk/varian. Kasir disajikan batas maksimal diskon yang diizinkan (Maks: Rp ...) dan sistem menolak input diskon yang melampaui modal dengan peringatan toast dan haptic feedback.',
            'Proteksi Diskon Global & Verifikasi Transaksi Akhir: Diskon transaksi keranjang kasir (nominal Rp maupun %) otomatis dicek terhadap total HPP keranjang. Jika diskon global memicu total tagihan di bawah total modal, sistem otomatis menahan dan membatasi pada batas diskon maksimal aman.',
            'Pencatatan HPP ke Dokumen Pesanan (Laporan Laba Rugi Akurat): Data item transaksi kasir (orderData.items) kini merekam atribut hpp, totalHpp, serta estimasi grossProfit ke Firestore freshmart_orders sehingga laporan keuangan dan margin laba bersih toko terintegrasi otomatis dan akurat.'
        ]
    },
    {
        id: 'log-1-9-41',
        version: 'v1.9.41',
        date: '2026-09-26',
        title: 'Penyelarasan Logika POS Kasir 1:1 dengan Storefront: Validasi Produk Non-Aktif, Indikator Produk Habis, Dukungan Penuh Pre-Order (PO) & Pengurangan Stok Terintegrasi',
        category: 'feature',
        badge: 'POS & Storefront Logic Parity v1.9.41',
        items: [
            'Penyelarasan Logika Stok 1:1 Storefront (useStock Engine): POS Kasir kini menerapkan saklar useStock yang persis sama dengan storefront pembeli (appData.store.useStock === true). Bila useStock aktif, ketersediaan dihitung dari varian aktif atau stok induk. Jika useStock nonaktif, produk diperlakukan sebagai stok tak terbatas (unlimited stock).',
            'Proteksi Produk Non-Aktif (isActive: false): Produk dan varian yang dinonaktifkan di CMS Admin secara ketat disaring keluar dari katalog kasir, lembar varian, dan ditolak oleh pemindai barcode fisik/kamera dengan notifikasi "Produk ini sedang tidak tersedia".',
            'Indikator & Proteksi Produk Habis (HABIS): Produk dengan stok habis otomatis menampilkan overlay gelap elegan bertuliskan "HABIS", tombol tambah dinonaktifkan dengan cursor-not-allowed, dan pemindai barcode memberikan umpan balik peringatan stok kosong tanpa menambahkannya ke keranjang.',
            'Dukungan Penuh Produk Pre-Order (PO): Produk dengan estimasi waktu preorder (poTime) menampilkan lencana oranye "PO [estimasi]" di katalog grid & list, lembar varian, rincian keranjang kasir, serta membawa flag orderData.hasPO = true untuk keperluan cetak struk kasir, invoice, dan surat jalan.',
            'Pengurangan Stok Akurat via qtyMap Aggregation: Penyelesaian transaksi kasir kini mengagregasi kuantitas item keranjang terlebih dahulu (identik modul checkout storefront), memotong stok induk dan varian Firestore secara atomik, menambah akumulator totalSold, memperbarui appData.products di memori lokal seketika, serta menyegarkan katalog kasir tanpa perlu me-reload halaman.'
        ]
    },
    {
        id: 'log-1-9-40',
        version: 'v1.9.40',
        date: '2026-09-26',
        title: 'Solusi Tuntas Header POS Kasir Android: Proteksi Status Bar & Notch Kamera (Anti-Collision Safe-Area Inset) & Harmonisasi Tema Glass-Header',
        category: 'bugfix',
        badge: 'Android Safe-Area & POS Header v1.9.40',
        items: [
            'Proteksi Anti-Tabrakan Status Bar Android: Mengganti kelas arbitrary value pada header POS kasir storefront dengan kelas terdedikasi .pos-storefront-header yang menerapkan padding-top: max(1.25rem, env(safe-area-inset-top, 1.25rem)) dan proteksi khusus aplikasi native (.is-native-app) max(1.5rem, env(safe-area-inset-top, 1.5rem)), memastikan tombol kembali, nama toko, dan status kasir tidak pernah lagi tertimpa oleh bilah status jam/baterai maupun poni kamera (punch hole/notch) smartphone.',
            'Harmonisasi Kelas .glass-header pada Terminal POS: Mengadopsi arsitektur glass-header yang konsisten dengan halaman storefront lainnya, dilengkapi padding-bottom lega (0.625rem), touch target ergonomis (≥ 44px), serta safe padding sisi kiri dan kanan (safe-area-inset-left/right).',
            'Proteksi Safe-Area pada Mobile Cart Drawer: Memperbaiki kontainer header drawer keranjang belanja kasir mobile (.pos-mobile-cart-header) agar tetap memiliki jarak aman dari bilah atas sistem saat dibuka dalam mode layar penuh di ponsel.',
            'Deteksi Runtime Native App Cerdas: Menambahkan pendeteksian otomatis window.AndroidNativeApp dan window.Capacitor di level root DOM (document.documentElement.classList.add("is-native-app")) guna memastikan perangkat Android secara presisi mendapatkan jarak bernapas status bar yang pas dan presisi.'
        ]
    },
    {
        id: 'log-1-9-39',
        version: 'v1.9.39',
        date: '2026-09-26',
        title: 'Resolusi Tuntas Keranjang Belanja Beli Cepat: Isolasi Namespace window.renderCart POS, Auto Re-hydration Keranjang & Alur Navigasi Kembali Mulus',
        category: 'bugfix',
        badge: 'Instant Cart Sync & Navigation v1.9.39',
        items: [
            'Resolusi Konflik Namespace window.renderCart: Mengubah fungsi render internal kasir POS menjadi window.posRenderCart dan window.posRenderCatalog, memastikan fungsi render keranjang storefront pembeli tidak pernah tertimpa lagi oleh modul kasir.',
            'Auto Re-hydration Keranjang Belanja: Menambahkan pemulihan otomatis data keranjang dari penyimpanan lokal (localStorage) di awal renderCart jika memori sesi belum tersinkronisasi, sehingga isi keranjang selalu muncul seketika tanpa perlu me-reload website.',
            'Navigasi Bertingkat Alur Belanja Cerdas (Smart Back Navigation): Menata kembali alur tombol kembali dari Checkout ke Keranjang (view-checkout -> view-cart) dan dari Keranjang ke Katalog (view-cart -> view-catalog) secara mulus dan konsisten.',
            'Perbaikan Beli Cepat (Instant Buy Now): Menghapus manipulasi replaceState paksa pada Beli Sekarang dan Quick Variant Sheet, sehingga perpindahan ke checkout dan navigasi kembali berjalan konsisten 100% responsif di desktop maupun mobile.'
        ]
    },
    {
        id: 'log-1-9-38',
        version: 'v1.9.38',
        date: '2026-09-26',
        title: 'Standarisasi Wajib Preview Sebelum Cetak Universal, Peningkatan Ketahanan Cetak Thermal & Presisi UI/UX Mobile Friendly',
        category: 'feature',
        badge: 'Smart Preview & Mobile UI UX v1.9.38',
        items: [
            'Wajib Preview Sebelum Cetak (Universal Preview-First Printing): Seluruh sistem pencetakan (Struk Transaksi POS Kasir 58mm/80mm, Slip Rekap Shift X-Report & Z-Report, Faktur Invoice, dan Surat Jalan A4) kini wajib menampilkan modal preview visual in-page interaktif sebelum perintah cetak diteruskan ke printer fisik.',
            'Auto-Create Thermal Print Section: Penambahan inisialisasi otomatis kontainer DOM #thermal-print-section jika belum tersedia, menjamin seluruh pencetakan thermal kasir selalu terisolasi bersih dan bebas dari elemen latar belakang browser.',
            'Smart Iframe Fallback Anti-Popup Blocker: Pencetakan dokumen A4 kini dilengkapi fallback cerdas menggunakan hidden iframe tersembunyi yang langsung memicu dialog cetak printer jika pop-up tab baru diblokir oleh browser.',
            'Presisi Responsivitas Mobile Friendly (Viewport 390x844px): Penataan header kasir anti-wrap, tombol mengambang keranjang kasir (floating cart drawer), touch target nyaman (≥ 44px), dan integrasi safe area notch smartphone.'
        ]
    },
    {
        id: 'log-1-9-37',
        version: 'v1.9.37',
        date: '2026-09-25',
        title: 'Penyempurnaan Visual CMS Kasir & Laporan Shift: Segmented Switcher Sticky, Auto-Reset Scroll & Eliminasi Clipping Header',
        category: 'optimization',
        badge: 'Admin Cashier & Shift Precision UI v1.9.37',
        items: [
            'Segmented Switcher Tab Sticky (Pinned Sub-Header): Bilah pengalih tab "Akun Kasir" dan "Laporan Shift" kini berposisi sticky tepat di bawah bilah emas CMS Admin dengan efek backdrop-blur elegan, sehingga kasir/admin dapat berpindah tab kapan pun tanpa harus menggulir balik ke atas.',
            'Auto-Reset Scroll Top pada Pergantian Tab: Memastikan scroll container otomatis melompat ke posisi teratas (scrollTop = 0) setiap kali tab "Akun Kasir" atau "Laporan Shift" diklik, mencegah konten terpotong atau tersembunyi di bawah bilah navigasi atas.',
            'Eliminasi Teks Terpotong & Orphan Word (Anti-Clipping Header): Menghapus penumpukan padding ganda dan memangkas subjudul menjadi satu baris bersih dengan utilitas truncate, memastikan teks tidak pernah terputus canggung di batas header mobile.',
            'Penyelarasan Horizontal Baris Judul & Tombol Segarkan: Tombol "Segarkan Data" kini sejajar rapi di sisi kanan judul "Rekap Shift Kasir (Z-Report)" pada satu baris terpadu, simetris dan konsisten dengan tab Manajemen Kasir.',
            'Standarisasi Wajib Preview Sebelum Cetak: Mengintegrasikan modal preview in-page interaktif sebelum proses pencetakan fisik pada Struk Transaksi POS Kasir (58mm/80mm), Slip Rekap Shift Kasir (X-Report & Z-Report), Faktur Invoice, dan Surat Jalan A4.',
            'Sinkronisasi Thermal Print Section & Isolasi Media Cetak: Konten struk dan slip rekap shift otomatis disinkronkan ke elemen #thermal-print-section sehingga hasil cetak printer thermal bersih, tajam, dan tidak terganggu elemen latar belakang antarmuka.'
        ]
    },
    {
        id: 'log-1-9-36',
        version: 'v1.9.36',
        date: '2026-09-25',
        title: 'Arsitektur Single Shift Akun Kasir Terpusat & Sinkronisasi Multi-Perangkat Real-Time: Anti-Double Shift & Auto-Resume Multi-Device',
        category: 'feature',
        badge: 'Multi-Device Single Shift POS Kasir v1.9.36',
        items: [
            'Arsitektur 1 Akun Kasir 1 Shift Aktif (Single Active Shift per Account): Mengunci aturan kerja kasir di mana satu akun kasir (cashierUid) hanya dapat membuka 1 shift kerja aktif (status open) di seluruh toko dan tidak dapat diduplikasi.',
            'Auto-Resume Lintas Perangkat Tanpa Buka Kas Baru: Kasir dapat berpindah secara mulus dari komputer kasir meja (PC) ke smartphone Android atau tablet tanpa harus memasukkan modal awal atau membuka kas baru — sistem otomatis mendeteksi dan melanjutkan sesi shift aktif yang ada.',
            'Proteksi Anti-Double Shift (Cloud Pre-Flight Guard): Melindungi kasir dari risiko pembukaan kas ganda secara tidak sengaja melalui tombol "Buka Shift" maupun pintasan F10 dengan verifikasi instan ke Cloud Firestore sebelum modal awal dibuka.',
            'Sinkronisasi Real-Time Dua Arah (Firestore onSnapshot Listener): Transaksi penjualan, total omset, akumulasi kas laci, dan kuantitas item yang diinput pada perangkat kasir A langsung tersinkronisasi secara otomatis dan seketika pada perangkat kasir B yang membuka akun yang sama.',
            'Penutupan Shift Serempak (Global Shift Settlement): Saat kasir melakukan tutup shift (Z-Report) di satu perangkat, semua perangkat lain yang terhubung secara otomatis merefleksikan penutupan shift, membersihkan sesi aktif lokal, dan memperbarui lencana indikator header kasir.'
        ]
    },
    {
        id: 'log-1-9-35',
        version: 'v1.9.35',
        date: '2026-09-25',
        title: 'Dukungan Kuantitas Desimal POS Kasir (Decimal QTY Support): Sinkronisasi Penuh dengan Storefront untuk Satuan Berat, Panjang & Volume',
        category: 'feature',
        badge: 'Decimal QTY Support POS Kasir v1.9.35',
        items: [
            'Dukungan Kuantitas Desimal Penuh (Decimal QTY Support): Kasir kini dapat memasukkan kuantitas pecahan desimal (seperti 0.5 kg telur, 1.25 meter kabel/pipa, 2.5 liter cairan/beras, dst.) pada transaksi POS kasir persis seperti yang telah didukung pada keranjang storefront pelanggan.',
            'Input Stepper Fleksibel & Anti-Truncation: Memperluas input kuantitas keranjang kasir dengan atribut step="any", min="0.01", serta styling lebar yang leluasa (w-11) sehingga angka desimal seperti "0.5" atau "1.25" tampil nyaman tanpa terpotong.',
            'Pembersihan Format Angka Desimal (formatQty Helper): Menghilangkan angka nol berlebih di belakang desimal (menampilkan "1.5" bukan "1.500", dan "2" bukan "2.000") pada counter keranjang, badge katalog, daftar antrean parkir, nota struk thermal kasir, dan laporan pergantian shift.',
            'Dukungan Satuan Desimal pada Lembar Varian POS: Membuka kunci input kuantitas di lembar pemilihan varian (pos-variant-sheet) agar kasir dapat langsung mengetik maupun menambah/mengurangi kuantitas desimal sebelum menambahkan varian ke keranjang.',
            'Sinkronisasi Otomatis Pemotongan Stok & Tier Grosir: Potongan stok produk/varian di Firestore serta evaluasi harga grosir (wholesale tiers) otomatis beroperasi dengan presisi nilai desimal tinggi tanpa pemotongan (truncation).'
        ]
    },
    {
        id: 'log-1-9-34',
        version: 'v1.9.34',
        date: '2026-09-25',
        title: 'Pembaruan Lembar Keranjang POS Kasir Mobile Full-Height: Eliminasi Total Background Hitam & Pencegahan Truncation Judul Counter',
        category: 'optimization',
        badge: 'Zero-Black-Backdrop Full-Height POS Cart v1.9.34',
        items: [
            'Eliminasi Total Latar Belakang Hitam (Zero-Black-Backdrop): Mengubah lembar keranjang mobile (bottom sheet) menjadi tampilan lembar penuh (full-height view) tepat di bawah header kasir, menghapus tuntas celah overlay gelap (rgba(15,23,42,0.65)) yang sebelumnya menampakkan baris hitam di atas keranjang.',
            'Pencegahan Pemotongan Judul Counter (Anti-Truncation Guarantee): Menerapkan shrink-0 dan tracking-tight pada judul "Keranjang (X)" sehingga counter jumlah item belanja tidak akan terpotong meskipun diakses pada smartphone berlayar sempit (360px).',
            'Penyempurnaan Ruang Vertikal Keranjang: Area daftar item belanja kini mendapatkan ruang bernapas vertikal penuh yang lebih leluasa dan nyaman untuk menggulir daftar belanjaan pembeli dalam antrean panjang.',
            'Integrasi Tombol Tutup & Back Button Native: Menyediakan tombol silang taktil [×] di pojok kanan atas serta registrasi riwayat modal untuk menutup kembali keranjang dengan mulus via tombol Back fisik Android.'
        ]
    },
    {
        id: 'log-1-9-33',
        version: 'v1.9.33',
        date: '2026-09-25',
        title: 'Presisi Visual Keranjang POS Kasir Mobile: Eliminasi Gap Judul, Penyelarasan Tombol Header Pill Terpadu, Diskon Bersih & Backdrop Dismiss',
        category: 'optimization',
        badge: 'POS Cart Precision & Clean UI v1.9.33',
        items: [
            'Eliminasi Gap Spasi Judul Keranjang (Anti-Gap Spacing): Mengatasi efek flex gap yang memecah teks judul dan kurung ("KERANJANG ( 1 )") menjadi format alami dan bersih ("KERANJANG (1)") tanpa spasi berlebih pada counter item belanja.',
            'Harmonisasi Tombol Header Keranjang Terpadu (Clean Unified Pills): Menyatukan tombol "Tahan", "Kosongkan", dan "Tutup" ke dalam sistem desain pill bernuansa bersih (white / slate-800 border) dengan aksen warna hanya pada ikonnya, mengeliminasi benturan visual kotak warna-warni kontras di header keranjang.',
            'Pembersihan Tampilan Diskon Transaksi (Zero-Value Cleanup): Menyembunyikan preview diskon saat nilai potongan bernilai 0 sehingga tidak memunculkan teks "Rp 0" yang membingungkan kasir di samping input nominal.',
            'Penyempurnaan Chips Potongan Cepat Berkualitas Tinggi: Mengganti latar belakang chips kusam menjadi pil netral modern (high-contrast slate) yang otomatis menonjol solid (var(--color-primary)) saat dipilih kasir.',
            'Interaksi Tutup Lembar Geser Fleksibel (Backdrop Dismiss): Menambahkan kemampuan menutup drawer keranjang mobile secara instan cukup dengan mengetuk area redup latar belakang di luar lembar keranjang.'
        ]
    },
    {
        id: 'log-1-9-32',
        version: 'v1.9.32',
        date: '2026-09-25',
        title: 'Harmonisasi Visual Keranjang POS Kasir Mobile: Eliminasi Pemotongan Judul (Anti-Truncation), Penyelarasan Tombol Tahan/Kosongkan & Preset Chips Bertema Toko',
        category: 'optimization',
        badge: 'POS Theme Harmonization & Zero Truncation v1.9.32',
        items: [
            'Eliminasi Pemotongan Judul Keranjang Mobile (Anti-Truncation): Menerapkan teks adaptif (Keranjang di mobile, Keranjang Transaksi di desktop) sehingga judul tidak lagi terpotong elipsis ("KERANJANG T...") pada layar ponsel sempit (<= 390px) dan tampil presisi bersama counter jumlah item belanja.',
            'Harmonisasi Tombol Tindakan Header Keranjang (Tahan, Kosongkan & Tutup): Merestrukturisasi tombol "Tahan" dan "Kosongkan" menjadi badge pill taktil semi-transparan dengan border lembut (amber-500/10 dan rose-500/10) serta tombol tutup yang proporsional, menggantikan teks raw yang kontras dan tidak selaras.',
            'Penyelarasan Penuh Pengalih Diskon Kasir (Rp / %): Memberikan aksen warna tema brand toko (var(--color-primary)) pada tombol pengalih aktif (Rp / %) dengan kontras teks putih bersih, menggantikan tombol abu-abu polos.',
            'Preset Chips Diskon Cerdas Beraksen Tema Toko: Merombak preset chips potongan harga (5%, 10%, 15%, 20%, 50%, Rp 2rb, 5rb, 10rb, 25rb, 50rb) dari tombol slate abu-abu kaku menjadi chips beraksen brand toko dengan indikator status aktif (solid primary) saat dipilih.',
            'Penyempurnaan Stepper Kuantitas & Tombol Bayar Berkilau: Menambahkan focus border tema pada kontrol kuantitas [− 1 +] serta elevasi bayangan bercahaya (box-shadow glow brand color) pada tombol Proses Pembayaran.'
        ]
    },
    {
        id: 'log-1-9-31',
        version: 'v1.9.31',
        date: '2026-09-25',
        title: 'Harmonisasi Visual Tombol Pilih Berkas Cadangan & Presisi Sempurna Navigasi Header (Anti-Gepeng, Symmetrical 2-Column Grid & 1:1 Aspect-Square)',
        category: 'optimization',
        badge: 'Visual Precision & Native Alignment v1.9.31',
        items: [
            'Resolusi Tombol Gepeng & Penyelarasan Tombol Pilih Berkas Cadangan: Merestrukturisasi tombol Pilih Berkas Cadangan dan Rollback Data Toko menjadi grid 2-kolom berdampingan yang simetris (grid grid-cols-2 gap-2.5 sm:gap-3) dengan label teks adaptif, mengeliminasi tampilan tombol pipih memanjang selebar layar (gepeng) menjadi tombol taktil yang proporsional.',
            'Harmonisasi Penuh dengan Baris Snapshot Cepat: Menyelaraskan tinggi fisik (h-11 sm:h-12), radius sudut (rounded-xl sm:rounded-2xl), dan padding tombol pemulihan agar 100% selaras dan sejajar sempurna dengan baris tombol Simpan Cepat & Pulihkan di bawahnya.',
            'Presisi Sempurna Tombol Navigasi Header Admin: Menetapkan display flex, shrink-0, dan aspect-square pada tombol kembali panah kiri (#btn-admin-back), ikon preview, dan tombol keluar, menjamin bentuk bujur sangkar 1:1 yang rapi dan elegan tanpa distorsi melebar/lonjong di layar HP.',
            'Optimalisasi Ruang Kanvas Layar Ponsel (Anti-Squeeze Padding): Menghapus padding ganda yang menghimpit kontainer Pusat Data di HP dan memperlebar ruang bernapas bawah (pb-24) agar seluruh tombol tindakan tampil utuh dan bebas terpotong.'
        ]
    },
    {
        id: 'log-1-9-30',
        version: 'v1.9.30',
        date: '2026-09-25',
        title: 'Optimasi Ketahanan Koneksi Jaringan Cloud Firestore (Eliminasi ERR_QUIC_PROTOCOL_ERROR via Force Long Polling HTTPS)',
        category: 'optimization',
        badge: 'Network Resilience & Stable Cloud Sync v1.9.30',
        items: [
            'Eliminasi ERR_QUIC_PROTOCOL_ERROR.QUIC_TOO_MANY_RTOS: Mengaktifkan experimentalForceLongPolling pada konfigurasi Firestore SDK untuk memastikan transmisi data menggunakan protokol HTTPS berbasis TCP yang andal dan kebal terhadap packet loss atau pemblokiran UDP pada jaringan seluler (Telkomsel/Indosat/XL) maupun Wi-Fi publik.',
            'Pencegahan Kegagalan Stream Listen Channel: Menghindari kegagalan kanal sinkronisasi gRPC-Web/QUIC saat koneksi internet mengalami fluktuasi sementara atau timeout DNS (ERR_NAME_NOT_RESOLVED).',
            'Peningkatan Keandalan Real-time Sync Antar Perangkat: Menjamin aliran perubahan data pesanan, katalog produk, dan status shift laci kasir tetap terhubung secara stabil tanpa membanjiri konsol browser dengan error retry QUIC.'
        ]
    },
    {
        id: 'log-1-9-29',
        version: 'v1.9.29',
        date: '2026-09-25',
        title: 'Penyempurnaan Presisi Visual Pemulihan Data & Eliminasi Truncation (Ikon Proteksi Halved, Anti-Crop Judul & Tombol Simpan Cepat Natif)',
        category: 'optimization',
        badge: 'Zero Truncation & Visual Precision v1.9.29',
        items: [
            'Perbaikan Ikon Proteksi Blank (Font Awesome Free Compatibility): Mengganti fa-shield-check (ikon pro yang sebelumnya gagal tampil dan menyisakan kotak kosong) dengan fa-shield-halved yang didukung penuh bawaan sistem, memulihkan lencana perisai keselamatan secara presisi.',
            'Eliminasi Truncation Judul Pemulihan Data: Menghapus kelas truncate pada judul "Pemulihan Aman & Proteksi Rollback" dan deskripsinya sehingga teks membungkus alami (leading-snug) tanpa terpotong tanda titik-titik ("...") di layar ponsel.',
            'Penyederhanaan Label Tombol Rollback: Mengubah label menjadi "Rollback Data Toko" agar tampil rapi satu baris tanpa patah vertikal pada layar mobile sempit.',
            'Optimasi Tombol Snapshot Cepat Mobile (Anti-Crop): Mengganti label panjang yang terpotong ("Simpan Snap..." & "Pulihkan Sna...") menjadi "Simpan Cepat" dan "Pulihkan" dengan whitespace-nowrap dan font 11px yang tampil utuh dan proporsional.'
        ]
    },
    {
        id: 'log-1-9-28',
        version: 'v1.9.28',
        date: '2026-09-25',
        title: 'Audit Presisi UI/UX & Penyempurnaan Menyeluruh Tampilan Natif App (Anti-Overflow Aksi Produk, Harmonisasi Tombol POS & Headroom Kasir)',
        category: 'optimization',
        badge: 'Universal Native App Experience & Touch Polish v1.9.28',
        items: [
            'Audit & Penyempurnaan Responsivitas Kartu Produk Admin: Menerapkan flex-wrap gap-2 pada baris tombol aksi produk (Stok, Restock, Edit Harga, Duplikat, Edit, Hapus) dan padding presisi (p-3.5 sm:p-5) sehingga seluruh tombol tertata rapi tanpa risiko meluber (horizontal overflow) pada smartphone kecil.',
            'Harmonisasi Tombol Modal Swap POS Kasir: Mengganti warna tombol hijau statis pada konfirmasi tukar transaksi held cart dengan warna brand tema toko (var(--color-primary)) lengkap dengan feedback haptik/active touch.',
            'Penyelarasan Input & Tombol Tambah Barcode POS: Mengganti tombol hijau dan border focus scanner barcode manual ke identitas brand toko untuk konsistensi visual 100%.',
            'Optimalisasi Headroom Panel Kasir Admin: Menambahkan padding atas yang lega (pt-3 sm:pt-5 pb-16) pada halaman Manajemen Kasir agar segmented control tidak tertekan mepet di bawah header pada perangkat ponsel.',
            'Audit Kelancaran Layar Sentuh & Responsivitas Mobile: Memastikan seluruh komponen navigasi bawah (Bottom Nav), dialog konfirmasi, dan modal preview memiliki tap target ergonomis (minimum 40-48px) dan animasi native press yang responsif.'
        ]
    },
    {
        id: 'log-1-9-27',
        version: 'v1.9.27',
        date: '2026-09-25',
        title: 'Harmonisasi Visual UI/UX Total & Penyempurnaan Tampilan Natif App (Anti-Wrap Shift Z-Report, Segmented Control Kasir, & Restyling Pemulihan Data)',
        category: 'optimization',
        badge: 'Native Mobile App & Total UI Harmonization v1.9.27',
        items: [
            'Eliminasi Masalah Teks Patah/Wrapping pada Laporan Shift Z-Report: Memperbaiki string nomor shift (#SHF-20260925-860) dan lencana status (SEDANG BERJALAN) di layar mobile dengan whitespace-nowrap, font-mono, dan min-w-0 agar tidak lagi terpotong patah menjadi dua baris.',
            'Harmonisasi Ikon & Palet Tema Shift Kasir: Mengganti warna hijau kaku pada ikon cash register dengan sentuhan warna identitas toko (var(--color-primary)) dan restrukturisasi metrik shift (Modal Awal, Omset, Kas Fisik Laci) menjadi kartu pil modern yang bersih.',
            'Navigasi Segmented Control Natif App pada Manajemen Kasir: Mengubah tombol tab lama menjadi segmented control bergaya iOS/Pixel murni (grid 2 kolom, bg-slate-200/70, smooth pill transition) yang sangat ergonomis di layar ponsel.',
            'Penyelarasan Spanduk Info Kasir: Mengganti kotak biru Bootstrap yang jomplang dengan banner bergradien lembut beraksen warna brand toko (rgba(var(--color-primary-rgb), 0.05)) yang menyatu sempurna dengan tema.',
            'Restrukturisasi Tombol Aksi Kasir: Mengganti tombol kotak-kotak warna-warni (kuning, biru, pink) menjadi tombol tindakan natif app (rounded-xl 36x36px) dengan ikon jelas dan penegasan visual yang tenang.',
            'Restyling Total Area Pemulihan Data (Restore & Safety Rollback): Menghilangkan kotak amber/kuning kecokelatan yang mencolok dan tombol pink pudar, menggantikannya dengan kartu proteksi data natif app, tombol rollback dengan status disabled abu-abu netral yang bersih, serta tombol snapshot instan 2-kolom yang nyaman ditekan di HP.'
        ]
    },
    {
        id: 'log-1-9-26',
        version: 'v1.9.26',
        date: '2026-09-25',
        title: 'Pembersihan Duplikasi Menu & Pemusatan Utilitas Backup ke Pusat Data & Sinkronisasi (Eliminasi Kartu Redundan di Pengaturan Toko)',
        category: 'optimization',
        badge: 'Zero Redundancy & Clean Settings v1.9.26',
        items: [
            'Pembersihan Duplikasi Menu Pengaturan Toko: Menghapus kartu cadangan data (Backup & Restore) yang redundan di menu Pengaturan Toko agar antarmuka lebih bersih, fokus, dan tidak menimbulkan kebingungan bagi admin.',
            'Sentralisasi Penuh ke Pusat Data & Sinkronisasi: Seluruh fungsionalitas pencadangan ekosistem (.JSON), ekspor akuntansi (.CSV), sinkronisasi cloud real-time, validasi skema pra-restore, serta auto safety-snapshot kini 100% terpusat di modul mandiri yang canggih dan modern.',
            'Penyederhanaan Tata Letak Pengaturan Toko: Menjaga konsistensi grid Pengaturan Toko agar berfokus murni pada konfigurasi esensial gerai (Profil Toko, Desain & Katalog, Pengiriman & Radius, Rekening & Pembayaran, Konfigurasi Sistem, Jam Operasional, dan Printer Struk).'
        ]
    },
    {
        id: 'log-1-9-25',
        version: 'v1.9.25',
        date: '2026-09-25',
        title: 'Harmonisasi Visual Total & Keselarasan Tema Pusat Data & Sinkronisasi (Eliminasi Dark Slab, Warm Brand-Tuned Card-Modern, & Headroom Lega)',
        category: 'optimization',
        badge: 'Visual & Theme Harmonization v1.9.25',
        items: [
            'Harmonisasi Penuh dengan Palet Tema Toko (Eliminasi Black Slate Slab): Merombak kontainer hero Pusat Data & Sinkronisasi dari kotak gradien hitam gelap (slate-900) yang jomplang menjadi kartu modern bergradien lembut hangat (.backup-sync-hero) dengan sentuhan warna identitas toko (var(--color-primary)) dan border elegan.',
            'Kartu Statistik Metrik Bersih & Kontras Alami: Merestrukturisasi 6 kartu indikator data (Total Produk, Kategori, Transaksi, Pelanggan, Akun Kasir, Sesi Shift) menjadi kartu putih modern (.card-modern) dengan border halus dan angka beraksen warna cerah yang sangat nyaman dibaca baik di mode terang (light mode) maupun mode gelap (dark mode).',
            'Penyelarasan Komponen Tombol Aksi: Mengganti tombol hitam kaku pada backup database JSON dan pengaturan toko menjadi tombol aksen brand toko yang serasi dengan header emas Toko Putri.',
            'Jarak Bernapas Lega dari Header (Headroom Optimization): Menambahkan padding vertikal atas (pt-3 sm:pt-5) agar kartu modul tidak menempel rapat dengan header navigasi pada perangkat layar ponsel (HP).',
            'Dukungan Adaptif Mode Gelap (Dark Mode Continuity): Menyelaraskan kartu dan metrik agar bertransisi secara mulus ke nuansa gelap berkelas tanpa kehilangan kontras teks dan hierarki visual.'
        ]
    },
    {
        id: 'log-1-9-24',
        version: 'v1.9.24',
        date: '2026-09-25',
        title: 'Pusat Data & Sinkronisasi Cloud (Cloud Sync Hub, Mesin Backup Ekosistem .JSON, Ekspor Akuntansi .CSV, & Pemulihan Aman Rollback 1-Klik)',
        category: 'feature',
        badge: 'Data Center, Cloud Sync & Safe Restore v1.9.24',
        items: [
            'Pusat Data & Sinkronisasi Cloud (Cloud Sync Hub): Tab menu khusus baru di CMS Admin untuk memonitor integritas ekosistem data toko secara real-time, mendeteksi koneksi awan, dan melakukan sinkronisasi paksa (Force Real-time Sync) langsung dari Cloud Firestore.',
            'Mesin Pencadangan Komprehensif (Full Ecosystem Backup .JSON): Menarik seluruh data lengkap secara paralel (Master Produk, Varian, Kategori, Transaksi Penjualan Kasir, Buku Piutang Tempo, Database Member Pelanggan, Akun Kasir, dan Log Shift Laci Kas) dalam satu berkas terenkripsi berstempel integritas metadata.',
            'Ekspor Laporan Akuntansi Spreadsheet (.CSV): Menyediakan fitur unduh tabel siap pakai untuk Microsoft Excel dan Google Sheets (Laporan Master Produk & Stok serta Laporan Riwayat Transaksi & Omset Penjualan).',
            'Inspektur Pra-Pemulihan (Pre-Restore Inspector Modal): Membaca dan memvalidasi berkas cadangan sebelum dieksekusi, menampilkan rincian jumlah produk, transaksi, dan tanggal backup agar tidak ada salah timpa.',
            'Perlindungan Auto Safety-Snapshot & Rollback 1-Klik: Sebelum berkas restore diterapkan, sistem otomatis membekukan data saat itu ke memori darurat sehingga admin bebas membatalkan pemulihan dan mengembalikan data semula kapan saja tanpa risiko kehilangan data.',
            'Snapshot Cepat di Perangkat (Instant Device Snapshot): Memungkinkan admin menyimpan dan memulihkan snapshot kilat langsung di memori browser tanpa harus mengunduh file fisik.'
        ]
    },
    {
        id: 'log-1-9-23',
        version: 'v1.9.23',
        date: '2026-09-25',
        title: 'Penyempurnaan Jarak Lega & Presisi Visual Admin POS Kasir Mobile (Floating Card Workspace, Eliminasi Kesan Mepet Header, & Optimasi Viewport HP)',
        category: 'optimization',
        badge: 'Mobile POS Breathing Room & Floating Card Workspace v1.9.23',
        items: [
            'Jarak Bernapas Lega di Bawah Header (.admin-pos-mode): Mengatasi kendala tampilan kasir yang terlalu mepet dengan header pada layar ponsel (HP) dengan memberikan padding atas (padding-top: 0.625rem / 10px-12px) dan margin samping yang nyaman pada kontainer konten admin.',
            'Arsitektur Floating Card Workspace: Terminal Kasir POS di CMS Admin kini dibungkus dalam kartu modern ber-rounded halus (rounded-2xl sm:rounded-3xl) dengan border lembut dan bayangan elegan (shadow-md), sehingga tampak melayang terpisah dengan indah dan tidak lagi menempel keras ke header toko.',
            'Restrukturisasi Action Strip & Search Bar Mobile: Merampingkan tinggi bilah aksi (min-h-[46px] py-1.5) serta search bar dengan latar belakang adaptif (bg-slate-50/80 dark:bg-slate-800/60) sehingga langsung membedakan kontrol kasir dari katalog produk dan menghemat ruang vertikal layar HP.',
            'Normalisasi Padding Glass Header: Menyeimbangkan kembali padding glass-header admin menjadi pb-2.5 sm:pb-3 agar tidak ada ruang kosong emas berlebih yang memakan area pandang produk pada ponsel.',
            'Optimalisasi Viewport Katalog HP: Mengakomodasi tampilan produk lebih banyak (hingga 3 baris kartu katalog terlihat langsung tanpa terpotong) dengan scrolling internal yang mulus dan bebas benturan double-scroll.'
        ]
    },
    {
        id: 'log-1-9-22',
        version: 'v1.9.22',
        date: '2026-09-25',
        title: 'Presisi Visual Admin POS Kasir Mobile (Anti-Wrap Action Strip, Tombol Shift & Parkir Responsif), Harmonisasi Tema Warna (Camera Scanner & Frosted Glass Header), & Mobile Precision',
        category: 'optimization',
        badge: 'Mobile Visual Precision & Theme Harmonization v1.9.22',
        items: [
            'Eliminasi Header Wrapping di Admin POS Action Strip: Mengatasi teks bertumpuk dua baris ("Terminal Kasir POS" dan "Rp 100.000") pada layar ponsel beresolusi sempit (<= 360px) dengan menerapkan whitespace-nowrap, shrink-0, dan label adaptif ("POS" di mobile, "Terminal POS" di desktop).',
            'Harmonisasi Tombol Shift & Parkir Kasir: Memperbarui tombol indikator shift kasir dan badge transaksi parkir (hold cart) agar selalu inline tanpa terpotong (single-line compact) dengan padding dan icon yang pas di semua ukuran layar.',
            'Sinkronisasi Warna Pemindai Kamera (Camera Scanner): Tombol scan barcode kamera F9 kini otomatis mengikuti identitas warna brand toko (var(--color-primary)) menggunakan tint lembut semi-transparan, menggantikan warna hijau statis yang sebelumnya jomplang dari palet tema.',
            'Header CMS Admin Frosted Glass Konsisten: Merombak tombol Preview dan Keluar di header Admin CMS menjadi pill frosted glass semi-transparan yang menyatu elegan dengan background brand toko, mengeliminasi warna abu-abu dan pink kontras yang tidak harmonis.',
            'Presisi Tipografi & Ruang Pandang Mobile: Mengoptimalkan tata letak header storefront dan admin strip agar tidak ada overflow horizontal maupun vertical clipping pada perangkat mobile.',
            'Jarak & Ruang Pandang Header Lebih Lega: Meningkatkan padding bawah glass-header (pb-4 sm:pb-5) serta mengelevasi tinggi dan padding Action Strip (min-h-[50px] py-2 sm:py-2.5) dengan tombol h-8 rounded-xl seragam, menciptakan ruang bernapas yang nyaman, elegan, dan bebas dari kesan mepet.'
        ]
    },
    {
        id: 'log-1-9-21',
        version: 'v1.9.21',
        date: '2026-09-25',
        title: 'Manajemen Shift Kasir & Rekap Tutup Kasir Cerdas (Shift Settlement, Rekonsiliasi Kas Laci, Denominasi, X/Z-Report & Slip Thermal ESC/POS)',
        category: 'feature',
        badge: 'POS Cashier Shift & Cash Settlement v1.9.21',
        items: [
            'Sistem Pembukaan Shift Kasir & Modal Awal (Cash Float): Kasir wajib/dapat mencatat uang modal awal di laci kasir saat mulai bertugas dengan chip preset cepat (Rp 0, 50rb, 100rb, 200rb, 500rb) dan catatan pembukaan shift, lengkap dengan konfirmasi audio chime Web Audio API yang elegan.',
            'Badge Status Shift Real-Time di Header POS: Header POS Storefront & Admin kini menampilkan indikator status shift aktif dengan modal awal kasir dan tombol akses cepat untuk melihat ringkasan shift berjalan.',
            'Laporan Shift Berjalan (X-Report): Memungkinkan kasir dan admin toko mengecek performa shift yang sedang berlangsung tanpa menutup shift, termasuk durasi kerja aktif, rincian omset per metode bayar (Tunai, QRIS, Bank, Tempo), diskon toko, poin member, dan estimasi uang kas yang seharusnya ada di laci.',
            'Rekonsiliasi Kas Laci & Rekap Tutup Kasir (Z-Report): Alur tutup kasir profesional dengan dua mode hitung fisik (Input Cepat atau Kalkulator Denominasi Lembaran: 100rb, 50rb, 20rb, 10rb, 5rb, 2rb, 1rb, koin), deteksi otomatis selisih kas (Pas/Seimbang, Surplus/Lebih, Defisit/Kurang), serta input catatan penutupan.',
            'Cetak Slip Rekap Shift Thermal POS (58mm / 80mm): Cetak bukti settlement shift kasir berstandar enterprise ke printer thermal kasir (ESC/POS, Bluetooth, RawBT Android, atau browser print) lengkap dengan ringkasan penjualan, rekonsiliasi kas, dan kolom tanda tangan kasir serta supervisor/owner toko.',
            'Laporan Shift Kasir Cloud di CMS Admin: Tab baru "Laporan Shift & Rekap Kas" di menu Manajemen Kasir CMS Admin untuk memantau, mengaudit riwayat shift seluruh kasir, dan mencetak ulang slip rekap kasir kapan saja.',
            'Pintasan Keyboard Shift (F10) & Proteksi Logout: Menambahkan shortcut F10 untuk membuka modal shift langsung dari keyboard kasir serta proteksi konfirmasi cerdas saat kasir logout agar tidak lupa menutup shift.'
        ]
    },
    {
        id: 'log-1-9-20',
        version: 'v1.9.20',
        date: '2026-09-24',
        title: 'Perbaikan Persistensi Toggle Icon POS Kasir Storefront Saat Muat Ulang Halaman (Anti-Disappearance & Zero-Latency Cache)',
        category: 'fix',
        badge: 'POS Header Icon Stability & Zero Latency v1.9.20',
        items: [
            'Penyelesaian Kendala Ikon Kasir Hilang Saat Reload: Memperbaiki masalah race condition dan pembatasan aturan keamanan Firestore (security rules) yang sebelumnya menyebabkan query akun kasir mengembalikan penolakan izin (permission denied) pada sesi awal reload sehingga tombol kasir disembunyikan secara keliru.',
            'Arsitektur Multi-Tier Detection & Fast Path 0ms: Pengecekan visibilitas ikon POS kini memanfaatkan cache instan localStorage (pos_has_cashier), sesi kasir aktif (pos_cashier_session), status admin aktif, dan konfigurasi publik cms_data tanpa memblokir perenderan UI.',
            'Sinkronisasi Otomatis Dokumen Toko (hasCashier): Admin CMS kini otomatis menyinkronkan penanda hasCashier ke dokumen utama cms_data setiap kali kasir ditambah, diubah, atau dihapus, sehingga storefront dapat membaca status secara instan tanpa query berlebih.',
            'Penghapusan Kelas Hidden Awal & Skrip Proteksi FOUC: Tombol kasir di header kini ditampilkan secara default dan diproteksi skrip inline instan sehingga tidak ada kedipan (flicker) atau hilangnya tombol saat koneksi lambat maupun offline.',
            'Reaktivasi Listener Auth: updatePOSHeaderIcon kini otomatis dipanggil kembali saat proses autentikasi Firebase selesai dipulihkan (onAuthStateChanged).'
        ]
    },
    {
        id: 'log-1-9-19',
        version: 'v1.9.19',
        date: '2026-09-24',
        title: 'Pemindai Barcode Kamera Interaktif, Kalkulator Diskon Kasir Pintar (Rp/%), Alert Stok Menipis & Integrasi Printer Thermal ESC/POS',
        category: 'feature',
        badge: 'POS Smart Scanner & Pro Cashier v1.9.19',
        items: [
            'Pemindai Barcode Kamera Interaktif Terintegrasi: Kasir dapat memindai barcode atau kode QR produk secara langsung menggunakan kamera HP, tablet, maupun webcam laptop via W3C BarcodeDetector API tanpa memerlukan scanner USB fisik.',
            'Reticle Pemindai Futuristik & Laser Animasi: Dilengkapi jendela bidik presisi, animasi garis laser pemindai (scanline laser), kontrol lampu senter/flash (torch), tombol putar kamera (depan/belakang), umpan balik audio beep instan, dan mode scan beruntun (continuous) vs sekali.',
            'Kalkulator Diskon Transaksi Cerdas (Dual Mode: Rp & %): Keranjang kasir kini mendukung pemberian diskon fleksibel baik dalam nominal Rupiah maupun persentase potongan harga dengan kalkulasi otomatis real-time, sinkronisasi desktop & mobile, serta chip preset cepat (5%, 10%, 15%, 20%, 50%, Rp 2rb, 5rb, 10rb, 25rb, 50rb).',
            'Peringatan Stok Menipis & Penanda Habis (Low Stock & Out of Stock Badges): Katalog kasir kini menampilkan status ketersediaan barang secara visual dengan lencana merah "HABIS" untuk stok 0 dan lencana peringatan oranye "SISA X" jika stok <= 5, disertai proteksi validasi kuantitas di keranjang kasir.',
            'Integrasi Universal Printer & Struk Thermal POS: Cetak struk kasir kini terhubung langsung ke preferensi printer toko (ukuran kertas 58mm/80mm, driver RawBT di Android, atau Bluetooth ESC/POS), menampilkan rincian diskon, poin member, serta tombol pintas akses cepat Pengaturan Printer.',
            'Pintasan Keyboard Kasir Lanjutan: Tambahan shortcut F4 untuk fokus langsung ke kolom pencarian katalog dan F9 untuk membuka/menutup pemindai barcode kamera.'
        ]
    },
    {
        id: 'log-1-9-18',
        version: 'v1.9.18',
        date: '2026-09-24',
        title: 'Perbaikan Penghapusan Transaksi Tertahan (Parkir) & Harmonisasi Z-Index Konfirmasi Kasir',
        category: 'fix',
        badge: 'Held Cart Deletion Fix v1.9.18',
        items: [
            'Perbaikan Tombol Hapus Antrean Parkir: Memperbaiki kendala tombol ikon tong sampah pada modal Transaksi Tertahan (Parkir) yang sebelumnya tidak merespon saat diklik akibat dialog konfirmasi global tertutup oleh backdrop modal (z-index mismatch).',
            'Dialog Konfirmasi Khusus In-Modal (z-[10005]): Menghadirkan dialog konfirmasi hapus antrean khusus dengan prioritas z-index tertinggi yang menampilkan nama label antrean, rincian jumlah item, serta total nominal belanjaan yang akan dihapus secara transparan.',
            'Sinkronisasi Realtime & Pembaruan Indikator: Penghapusan antrean secara otomatis memperbarui penyimpanan lokal (localStorage), menyegarkan daftar antrean secara instan tanpa tumpukan riwayat browser (history-safe), dan memperbarui lencana indikator antrean di bilah navigasi header kasir.',
            'Elevasi Z-Index Modal Konfirmasi Global: Menyesuaikan z-index custom-confirm-modal ke z-[10005] agar selalu tampil di lapisan terdepan saat dipanggil dari modal kasir, pemindai barcode, maupun panel admin tingkat tinggi.'
        ]
    },
    {
        id: 'log-1-9-17',
        version: 'v1.9.17',
        date: '2026-09-24',
        title: 'Fitur Parkir Transaksi & Antrean Fleksibel (Hold & Recall Cart), Pintasan Keyboard Kasir F6/F8, & Audio Chime Kasir',
        category: 'feature',
        badge: 'Pending Cart Hold & Recall v1.9.17',
        items: [
            'Sistem Parkir Transaksi / Hold & Recall Cart: Kasir dapat menahan transaksi belanjaan pembeli sementara saat antrean padat (misal pelanggan hendak mengambil barang tambahan atau dompet tertinggal) tanpa perlu membatalkan atau mengulang scan dari awal.',
            'Penyimpanan Antrean Persisten & Aman (Multi-Queue): Transaksi tertahan disimpan aman di penyimpanan lokal (pos_held_carts) lengkap dengan varian, harga grosir, diskon item & diskon global, serta data pelanggan, sehingga tidak akan hilang meskipun halaman kasir dimuat ulang atau beralih tab.',
            'Proteksi Anti Kehilangan Data (Zero Data Loss Protection): Saat kasir memanggil transaksi tertahan sementara keranjang saat ini sedang berisi item, sistem otomatis menawarkan opsi cerdas untuk menyimpan transaksi aktif ke antrean baru sebelum memuat antrean yang dipanggil.',
            'Indikator Antrean Dinamis (Live Pulsing Badge): Header Kasir Storefront dan Strip Kasir Admin dilengkapi tombol badge antrean interaktif yang berkedip jika terdapat transaksi tertahan yang siap dilanjutkan.',
            'Pintasan Keyboard Khusus Kasir (Keyboard Shortcuts): Tombol F6 / F7 untuk langsung Tahan Transaksi, dan tombol F8 untuk membuka Daftar Transaksi Tertahan secara instan tanpa perlu menyentuh mouse.',
            'Umpan Balik Suara Kasir (Synthetic Chime Web Audio API): Dilengkapi nada konfirmasi sintetis yang lembut dan elegan saat transaksi diparkir (ascending chime) dan saat transaksi dipanggil kembali (bright double chime).'
        ]
    },
    {
        id: 'log-1-9-16',
        version: 'v1.9.16',
        date: '2026-09-24',
        title: 'Sentralisasi Ekosistem Transaksi: Eliminasi Riwayat Terpisah POS Kasir, Otomasi Pemrosesan Pesanan, & Filter Multi-Channel CMS Admin',
        category: 'feature',
        badge: 'Centralized Orders Architecture v1.9.16',
        items: [
            'Sentralisasi 100% Pesanan ke CMS Admin (Single Source of Truth): Menegaskan CMS Admin sebagai pusat kendali tunggal seluruh pesanan bisnis. Menghapus antarmuka riwayat terpisah di POS Kasir (pos-history) sehingga alur kerja tidak lagi redundant dan membebani antarmuka kasir.',
            'Otomasi Pemrosesan Transaksi Kasir (Auto-Processed Orders): Transaksi yang dibuat oleh kasir/karyawan di POS langsung otomatis terproses dengan status Selesai (atau Diproses untuk Tempo) dan status bayar Lunas, tanpa perlu verifikasi manual selayaknya order online storefront.',
            'Pemisahan Peran yang Jelas (Storefront vs POS Kasir): Website Storefront difokuskan khusus untuk pelanggan umum belanja online secara mandiri, sedangkan POS Kasir difokuskan khusus untuk admin/kasir/karyawan melayani transaksi langsung di toko fisik secara cepat dan efisien.',
            'Filter Sumber Pesanan di CMS Admin: Menyediakan tombol filter instan (Semua Pesanan, Kasir POS, dan Storefront Web) di menu Pesanan CMS Admin serta badge identitas visual (Kasir vs Web Storefront) pada kartu dan detail pesanan.',
            'Ekspor Laporan Excel Lengkap dengan Sumber Transaksi: Menyertakan kolom Sumber Pesanan (Kasir POS beserta nama kasir vs Website Storefront) pada file unduhan Excel (.xlsx) untuk mempermudah audit dan perbandingan performa penjualan fisik toko vs online.',
            'Terminal Kasir Lebih Ramping & Cepat: Ukuran bundel modul kasir berkurang signifikan, waktu muat lebih instan, dan antarmuka header kasir tampil lebih bersih dan fokus melayani transaksi pelanggan di meja kasir.'
        ]
    },
    {
        id: 'log-1-9-15',
        version: 'v1.9.15',
        date: '2026-09-24',
        title: 'Integrasi Ekosistem Tunggal POS Kasir: Sinkronisasi Pesanan Toko (freshmart_orders), Pengaturan Stok Dinamis (useStock), & Resolusi Riwayat Kasir',
        category: 'feature',
        badge: 'Unified POS Ecosystem v1.9.15',
        items: [
            'Sinkronisasi Pesanan Terpadu (1 Ekosistem Kerja): Mengintegrasikan alur transaksi POS Kasir langsung ke koleksi pesanan utama toko (freshmart_orders). Setiap transaksi kasir (Tunai, QRIS, Bank, maupun Tempo) otomatis tercatat sebagai pesanan resmi dengan label source: "pos", langsung muncul di menu Pesanan CMS Admin, Laporan Penjualan (Dashboard Omset), Pajak & Keuangan, dan Piutang Tempo.',
            'Dukungan Pengaturan Stok Dinamis (useStock): Alur kasir kini 100% selaras dengan pengaturan toko di CMS. Jika useStock bernilai true, kasir secara cerdas memvalidasi stok produk/varian dan memotong stok otomatis di Firestore serta inventaris lokal. Jika useStock bernilai false, kasir dapat menjual barang tanpa hambatan batas stok (sama persis dengan alur belanja storefront).',
            'Resolusi Akses Riwayat Transaksi Kasir: Memperbaiki kendala riwayat kasir yang tidak bisa dibuka dengan menghubungkan pembacaan transaksi langsung ke data pesanan kasir di freshmart_orders (dengan fallback sub-koleksi pos_transactions) dan menghilangkan pemblokiran sesi kaku saat dibuka dari dashboard seller.',
            'Perbaikan Penanggalan Lokal (Timezone-Aware Date Filter): Mengganti generator tanggal UTC (yang meleset mundur 1 hari pada jam malam WIB) dengan penanggalan lokal presisi (getLocalDateStr()), menjamin rekap omset dan transaksi harian kasir selalu akurat.',
            'Penyelarasan Firestore Security Rules: Memperbarui aturan akses Firestore untuk freshmart_orders dan pos_transactions sehingga staf kasir dan admin toko dapat membaca dan mencatat transaksi secara instan tanpa error permission-denied.'
        ]
    },
    {
        id: 'log-1-9-14',
        version: 'v1.9.14',
        date: '2026-09-24',
        title: 'Penyempurnaan Antarmuka Keranjang Kasir POS: Display Varian Informatif, Harmonisasi Tema Warna, & Eliminasi Header Wrapping',
        category: 'polish',
        badge: 'POS Cart UI & Theme Polish v1.9.14',
        items: [
            'Display Varian Informatif (Anti-Clipped Title): Mengatasi judul produk yang terpotong menjadi elipsis (misal: "NO DROP 4 KG ANTI BOCOR —...") pada kartu keranjang transaksi kasir. Nama produk kini tampil bersih, dan detail varian disajikan dalam badge terdedikasi lengkap dengan ikon layer-group.',
            'Harmonisasi Tema Brand pada Badge Varian (Zero Hardcode): Mengganti warna hardcoded indigo (bg-indigo-600) pada badge varian keranjang dengan variabel tema toko var(--color-primary), memastikan keselarasan visual penuh di seluruh aplikasi.',
            'Eliminasi Header Wrapping pada Layar Sempit: Mengoptimasi struktur header drawer keranjang mobile (whitespace-nowrap & min-w-0) sehingga counter kuantitas (1) tidak melompat ke baris baru, serta tombol "Kosongkan" tampil sejajar rapi dengan ikon tong sampah.',
            'Penyelarasan Header Keranjang Desktop: Menerapkan perataan fleksibel yang sama pada panel keranjang kasir desktop untuk tampilan yang konsisten dan profesional.'
        ]
    },
    {
        id: 'log-1-9-13',
        version: 'v1.9.13',
        date: '2026-09-23',
        title: 'Solusi Definitif Tampilan Kasir POS Admin CMS Terpotong: Arsitektur Viewport Lock (.admin-pos-mode) & Eliminasi Tabrakan Double-Scroll',
        category: 'fix',
        badge: 'Admin POS Viewport Engine v1.9.13',
        items: [
            'Eliminasi Tabrakan Double-Scroll (Anti-Nested Scroll Collision): Mengatasi akar masalah kartu produk terpotong setengah layar dengan area kosong putih raksasa di bawahnya saat kasir POS dibuka melalui CMS Admin di smartphone. Masalah terjadi karena kontainer luar .scroll-content ikut tergeser saat kasir di-swipe, sehingga search bar dan strip aksi melorot ke balik header.',
            'Arsitektur Viewport Lock (.admin-pos-mode): Menerapkan mode viewport terisolasi saat tab Kasir POS aktif di CMS Admin, mengunci kontainer luar (#view-admin .scroll-content) ke overflow: hidden, padding: 0, dan tinggi 100% penuh.',
            'Pencarian & Kategori Tetap Terpaku (Sticky Action Strip & Search): Bilah pencarian nama/SKU/barcode dan chip kategori produk kini tetap terkunci rapi di posisi atas, tidak pernah terdorong hilang atau tertutup header saat kasir menggulir katalog.',
            'Pengguliran Katalog Internal Mulus: Kontainer katalog produk (#pos-catalog-grid) kini memegang kontrol pengguliran internal penuh dari batas bawah filter hingga dasar layar, memungkinkan kasir melihat seluruh produk hingga baris terakhir dengan lancar tanpa celah kosong.',
            'Tata Letak Responsif Leluasa (Mobile & Desktop): Pada layar desktop, kontainer POS kini membentang penuh 100% lebar layar (tidak lagi terjepit batas max-w-5xl), menghadirkan pengalaman terminal kasir split-panel 63:37 yang profesional.',
            'Konsistensi Tema Dinamis (Zero Hardcode): Seluruh elemen aksen, tombol, dan indikator tetap terikat murni pada variabel CSS var(--color-primary).'
        ]
    },
    {
        id: 'log-1-9-12',
        version: 'v1.9.12',
        date: '2026-09-23',
        title: 'Pelepasan Listener Realtime Terkelola Saat Logout & Navigasi (Zero Missing or Insufficient Permissions)',
        category: 'fix',
        badge: 'Firestore Security & Listener Lifecycle v1.9.12',
        items: [
            'Pelepasan Listener Terkelola (Graceful Listener Teardown): Menjamin seluruh snapshot realtime Firestore (riwayat transaksi POS histUnsubscribe, pesanan admin aOrdLst, pelanggan aCustLst, dan ulasan aRevLst) dicabut (detached) secara bersih sebelum auth.signOut() dieksekusi, melenyapkan error FirebaseError: Missing or insufficient permissions saat admin atau kasir keluar sesi.',
            'Silent Teardown Guard pada Riwayat Kasir: Listener riwayat transaksi kini secara otomatis mendeteksi pemutusan sesi unauthenticated dan membatalkan subscription secara instan tanpa memicu log peringatan maupun notifikasi toast error palsu di layar.',
            'Pembersihan Lintas Rute (Cross-Route Teardown): Fungsi detachPOSHistoryListener dipanggil otomatis saat berpindah tab CMS Admin, kembali ke halaman menu utama, berganti view router, maupun saat tombol kembali ke kasir ditekan.',
            'Penyelarasan Aturan Keamanan Firestore: Firestore Security Rules untuk pos_transactions dan orders diperkuat untuk mengizinkan seluruh staf toko yang terotentikasi (request.auth != null) mengakses dan mencatat transaksi kasir secara mulus tanpa batasan list query.',
            'Zero Hardcoded Theme: Mempertahankan 100% konsistensi tema dinamis var(--color-primary).'
        ]
    },
    {
        id: 'log-1-9-11',
        version: 'v1.9.11',
        date: '2026-09-23',
        title: 'Sinkronisasi Data Rekening Bank Toko pada Modal Pembayaran Transfer POS Kasir (Multi-Field Mapping & Auto-Fetch)',
        category: 'fix',
        badge: 'POS Bank Account Engine v1.9.11',
        items: [
            'Resolusi Data Rekening Bank Kosong: Memperbaiki mapping field rekening bank pada modal pembayaran transfer kasir POS yang sebelumnya mencari properti b.name, b.number, b.holder (sehingga selalu tampil "Rekening bank belum diatur"). Kini diselaraskan penuh dengan skema CMS Admin (b.bankName, b.bankAccount, b.bankOwner) serta fallback multi-properti.',
            'Auto-Prefetch & Reactive Bank Loader: Menambahkan fungsi ensureBanksLoaded() yang memuat data rekening toko langsung dari cms_data Firestore secara reaktif saat modal pembayaran dibuka atau saat metode Bank dipilih, menjamin pilihan rekening selalu muncul instan.',
            'Indikator & Petunjuk Transfer Elegan: Menambahkan kartu panduan transfer berwarna hijau emerald yang ramah kasir dan peringatan jika data rekening belum diisi di CMS Admin.',
            'Zero Hardcoded Aesthetics: Seluruh elemen input, select, dan indikator terintegrasi dengan variabel tema toko var(--color-primary).'
        ]
    },
    {
        id: 'log-1-9-10',
        version: 'v1.9.10',
        date: '2026-09-23',
        title: 'Resolusi Tuntas Izin Akses Firestore Pelanggan (Direct Document Get & Rules Auto-Sync) & Peningkatan Engine Pencarian Member POS',
        category: 'fix',
        badge: 'Firestore Security & Member Direct Get v1.9.10',
        items: [
            'Resolusi Error Firestore Security Rules: Mengatasi error Missing or insufficient permissions pada POS kasir saat mengakses koleksi customers. Query dioptimasi menggunakan metode paralel direct document get (.doc(phone).get()) yang 100% diizinkan oleh rule keamanan aktif (allow get: if true;), tanpa ketergantungan pada permission list admin.',
            'Pembaruan Firestore Security Rules: Memperbarui aturan akses Firestore untuk /customers/{phone} menjadi allow read: if true; dan allow create, update: if isAdmin() || isCashier();, memberikan izin penuh bagi kasir terdaftar untuk membaca dan mendaftarkan data pelanggan.',
            'Eliminasi Log Error Spam Console: Membungkus pemanggilan koleksi pelanggan dalam silent error handling sehingga konsol browser kasir bersih dari peringatan permission.',
            'Optimasi Input Nomor Telepon Kasir: Debounced lookup disesuaikan secara cerdas agar tidak memicu query premature saat kasir baru mengetikkan beberapa digit awal nomor HP, dan menyediakan petunjuk pencarian ramah kasir bila data tidak ditemukan.',
            'Zero Hardcoded Aesthetics: Menjaga 100% integritas visual dan keselarasan palet warna brand var(--color-primary).'
        ]
    },
    {
        id: 'log-1-9-9',
        version: 'v1.9.9',
        date: '2026-09-23',
        title: 'Penyempurnaan Posisi Icon Modal POS Kasir & Sistem Pencarian Terpadu Member VIP (Multi-Format HP, Firestore Direct Query, & Auto Poin)',
        category: 'fix',
        badge: 'POS Centering & Member VIP Engine v1.9.9',
        items: [
            'Presisi Posisi Icon Modal Bayar Kasir: Mengubah struktur tombol Tipe Pelanggan (Umum, Member, Tempo) dan Metode Pembayaran (Tunai, QRIS, Bank, Tempo) dengan flex-col dan items-center sehingga icon berada tepat di tengah (center) di atas teks label, tampil rapi, proporsional, dan elegan.',
            'Direct Firestore Query Fallback: Memperbaiki kegagalan pembacaan data member pada POS kasir dengan menambahkan mekanisme query langsung ke koleksi Firestore (freshmart/cms_data/customers) jika cache lokal appData.customers belum termuat, sehingga member terdaftar selalu langsung terbaca.',
            'Pencarian Fleksibel Multi-Format (Indonesian Phone Normalization): Sistem pencarian otomatis mengenali berbagai variasi penulisan nomor HP (08xxx, 628xxx, +62 8xxx, maupun 8xxx) dengan mencocokkan digit inti (core digits), serta mendukung pencarian instan berdasarkan Nama Lengkap maupun ID Member.',
            'Pencarian Dinamis (Live Debounced & Auto-Picker): Mendukung deteksi live saat mengetik (debounce 300ms) dan tombol Enter/Cek. Jika terdapat beberapa member dengan nama/nomor serupa, sistem menampilkan daftar pemilih interaktif (interactive picker) lengkap dengan saldo poin dan tingkatan VIP.',
            'Perlindungan Nama Member & Akumulasi Poin Loyalitas Kasir: Memperbaiki nama pembeli pada transaksi kasir agar tetap menyimpan nama asli member (tidak kembali ke Pelanggan Umum), serta secara otomatis menambahkan perolehan poin loyalitas pesanan ke saldo member di Firestore dan menampilkan rincian poin di struk thermal.',
            'Zero Hardcoded Theme: Seluruh tombol aktif, badge status, dan aksen warna terikat murni ke variabel CSS --color-primary tanpa ada nilai warna statis.'
        ]
    },
    {
        id: 'log-1-9-8',
        version: 'v1.9.8',
        date: '2026-09-23',
        title: 'Solusi Definitif Anti-Gepeng Grid POS Kasir: Eliminasi Flex-Collapse, Hard Min-Height 220px, & Dedicated Grid Engine',
        category: 'fix',
        badge: 'Definitive POS Anti-Collapse v1.9.8',
        items: [
            'Solusi Permanen Kartu Gepeng: Mengeliminasi fenomena circular dependency flex-collapse di Android WebView dan browser mobile dengan menerapkan batas tinggi minimum absolut 220px pada seluruh kartu produk POS (.pos-product-card) dan 120px pada kotak gambar (.pos-img-box) sehingga secara matematis tidak mungkin lagi menciut atau gepeng.',
            'Direct In-Flow Image Architecture: Mengganti trik pseudo-element out-of-flow dengan arsitektur direct in-flow gambar dan placeholder berasio 1:1 murni, memastikan dimensi foto produk terhitung instan oleh engine rendering sejak frame pertama.',
            'Dedicated POS Grid Engine: Mengganti utility class Tailwind pada kontainer katalog dengan engine CSS Grid terdedikasi (.pos-catalog-grid-mode & .pos-catalog-list-mode) tanpa perata min-content yang berisiko menekan track tinggi kartu.',
            'Konsistensi Tema Brand Otomatis: Seluruh elemen visual (border aktif keranjang, badge grosir, counter kuantitas, harga, tombol tambah) terhubung otomatis ke variabel tema --color-primary tanpa ada nilai warna hardcoded.',
            'Sinkronisasi Platform Native Penuh: Menjalankan pipeline build produksi, mirroring distribusi flashdisk dan update versi Android Capacitor demi kesiapan rilis langsung.'
        ]
    },
    {
        id: 'log-1-9-7',
        version: 'v1.9.7',
        date: '2026-09-23',
        title: 'Penyempurnaan Tampilan Grid POS Kasir: Sistem CSS Anti-Collapse Kotak Gambar, Konsistensi Warna Brand Tema, dan Dark Mode Penuh',
        category: 'fix',
        badge: 'POS Grid Fix & Theme Konsistensi v1.9.7',
        items: [
            'Perbaikan Definif Kartu Grid Tergencet (Anti-Collapse System): Mengganti strategi aspect-ratio CSS yang tidak stabil dengan teknik padding-top:100% pada pseudo-element ::before — teknik paling robust yang menjamin kotak gambar produk selalu berbentuk kotak sempurna 1:1 tanpa pernah collapse menjadi pil tipis, bahkan saat data gambar belum selesai dimuat.',
            'CSS Class System Terdedikasi untuk POS Katalog: Seluruh tampilan kartu produk (grid dan list) kini menggunakan sistem class CSS dedicated (.pos-product-card, .pos-img-box, .pos-img-inner, .pos-badge, .pos-card-footer, dll.) di src/style.css — bukan lagi campuran inline Tailwind yang sulit di-debug dan mudah bentrok dengan Purge CSS.',
            'Konsistensi Warna Brand pada Badge GROSIR: Badge label GROSIR yang sebelumnya hardcode warna amber kini menggunakan var(--color-primary) — otomatis mengikuti tema warna brand toko tanpa perlu diubah manual jika warna toko berganti.',
            'Dark Mode Penuh pada Komponen Kartu POS: Menambahkan aturan dark mode lengkap (.dark .pos-product-card, .dark .pos-img-box, .dark .pos-img-placeholder, dll.) agar tampilan POS Kasir tetap elegan dan terbaca saat mode gelap diaktifkan.',
            'Mode List Kompak Lebih Proporsional: Thumbnail 52px di mode list kini memiliki fixed height yang tidak bisa collapse, dengan placeholder fallback yang konsisten ukurannya menggunakan class yang sama (.pos-list-thumb) untuk semua kondisi ada/tidak ada gambar.',
            'Hover dan Active State Konsisten: Animasi hover (translateY-2px, shadow naik) dan active (scale 0.98) kini didefinisikan di CSS class sehingga konsisten di seluruh kartu dan tidak bergantung pada ketersediaan Tailwind class di bundle produksi.'
        ]
    },
    {
        id: 'log-1-9-6',
        version: 'v1.9.6',
        date: '2026-09-22',
        title: 'Pembaruan Tampilan Visual POS Kasir: Perbaikan Keruntuhan Kartu Produk, Aspek Rasio Gambar Anti-Gepeng, Mode Tampilan Grid & List, Placeholder Visual & Harmonisasi Tema Emas',
        category: 'feature',
        badge: 'Visual POS Kasir Upgrade v1.9.6',
        items: [
            'Perbaikan Total Keruntuhan Kartu Produk (Anti-Collapse): Memperbaiki masalah kartu produk yang menciut menjadi pil datar akibat hilangnya aturan aspect-ratio — kini dijamin rasio presisi 1:1 dengan batas ketinggian minimum 120px dan utilitas CSS eksplisit.',
            'Pemisahan Badge dari Teks & Judul: Badge VARIAN dan GROSIR kini ditempatkan rapi di dalam kotak foto/media dengan efek floating glassmorphism, tidak lagi menumpuk atau menutupi judul barang dan harga.',
            'Placeholder Visual Produk Tanpa Gambar: Produk tanpa foto (seperti paku, semen, dll) kini menampilkan bingkai placeholder elegan dengan ikon kotak dan kategori produk yang informatif, bukan lagi area kosong atau rusak.',
            'Pengalih Mode Tampilan (Grid vs List Kompak): Kasir kini dapat beralih antara Tampilan Grid Foto (2–5 kolom) dan Tampilan List Baris Kompak (dengan thumbnail 54px, kategori, harga jelas, dan tombol tambah cepat) yang sangat cepat dan nyaman di HP.',
            'Harmonisasi Header POS dengan Brand Toko: Menyelaraskan header POS Storefront dari warna gelap kaku ke warna tema keemasan Toko Putri (var(--color-primary)) yang elegan dan konsisten di seluruh aplikasi.',
            'Thumbnail Visual di Keranjang Kasir: Setiap item di keranjang transaksi kasir kini dilengkapi gambar thumbnail mini 40px untuk verifikasi barang yang lebih cepat dan bebas salah input.'
        ]
    },
    {
        id: 'log-1-9-5',
        version: 'v1.9.5',
        date: '2026-09-22',
        title: 'Redesain Modern POS Kasir Mobile-First: Floating Cart Bar, Bottom Sheet Keranjang, Quick-Cash Denomination, Audio Feedback Kasir & Integrasi Navigasi Back',
        category: 'feature',
        badge: 'Modern Mobile POS Redesign v1.9.5',
        items: [
            'Redesain Antarmuka Mobile-First Penuh: Menata ulang tata letak POS Kasir secara menyeluruh untuk kenyamanan layar sentuh smartphone dan tablet — katalog produk 2-kolom lega tanpa layout terjepit 60:40.',
            'Floating Sticky Cart Bar di HP: Bilah keranjang belanja mengambang di bagian bawah layar smartphone yang otomatis muncul secara mulus saat ada item di keranjang dengan informasi total belanja dan tombol akses 1-sentuhan.',
            'Bottom Sheet Keranjang (Slide-up Drawer): Membuka keranjang transaksi kasir dalam format lembar geser bawah yang lega, lengkap dengan penyesuaian kuantitas [−] qty [+], diskon per-item, dan tombol pembayaran.',
            'Tata Letak Desktop Split-Panel Leluasa: Di layar desktop/komputer kasir, layar terbagi proporsional 63% katalog produk dan 37% panel penagihan & keranjang aktif secara berdampingan tanpa scrollbar ganda.',
            'Tombol Uang Cepat (Quick-Cash Denominations): Tombol pecahan nominal uang tunai cepat (Uang Pas, Rp 10.000, 20.000, 50.000, 100.000, 200.000, 500.000) untuk input pembayaran instan sekali klik.',
            'Indikator Dinamis Kembalian / Kekurangan: Tampilan visual cerdas status kembalian (hijau jika cukup/kembalian, merah jika masih kurang) dengan proteksi tombol selesai transaksi.',
            'Audio Beep Sintetis Kasir (Web Audio API): Umpan balik suara beep kasir yang taktil dan responsif saat scan barcode, klik tambah produk, atau penambahan kuantitas tanpa membebani kuota aset eksternal.',
            'Penyelarasan Navigasi Hardware Back Button: Integrasi riwayat modal router untuk drawer keranjang dan popup pembayaran, sehingga tombol Back Android menutup dialog secara berurutan tanpa keluar dari mode kasir.'
        ]
    },
    {
        id: 'log-1-9-4',
        version: 'v1.9.4',
        date: '2026-09-22',
        title: 'Mode POS Kasir Mandiri Storefront, Autentikasi Kasir & Manajemen Akun CMS, Dukungan Multivarian & Harga Grosir, serta Desain Responsif Presisi',
        category: 'feature',
        badge: 'POS Kasir Storefront & Multi-Varian v1.9.4',
        items: [
            'Mode POS Kasir Mandiri di Storefront: Mode POS Kasir dipisahkan secara elegan dari menu pengaturan toko dan ditempatkan langsung di storefront pembeli melalui toggle ikon kasir (cash register) pada header aplikasi.',
            'Indikator & Visibilitas Otomatis: Ikon kasir di header storefront dilengkapi indikator status aktif (dot hijau berdenyut) dan otomatis tampil jika terdapat akun kasir yang aktif/terdaftar di toko.',
            'Sistem Autentikasi & Login Kasir Mandiri: Kasir masuk menggunakan modal login khusus kasir (Email/Username & Password). Sesi kasir terisolasi dari admin utama demi privasi dan keamanan sistem toko.',
            'Manajemen Akun Kasir di CMS Admin: Administrator toko memiliki kontrol penuh untuk membuat, mendaftarkan, mengaktifkan/menonaktifkan, dan menghapus akun akses kasir melalui menu khusus "Akun Kasir" di Admin CMS.',
            'Dukungan Penuh Multivarian di POS Kasir: Menjual produk dengan varian warna, ukuran, atau tipe kini sangat mudah. Kasir cukup mengklik produk bervarian, dan drawer/sheet pemilihan varian interaktif akan muncul dengan opsi pilihan, foto produk, harga varian dinamis, serta status stok real-time.',
            'Kalkulasi Harga Grosir Bertingkat Otomatis: Sistem kasir otomatis mendeteksi dan menerapkan potongan harga grosir bertingkat saat kuantitas pembelian di kasir memenuhi syarat minimum grosir, lengkap dengan label hemat harga grosir.',
            'UI/UX Responsif Presisi (Mobile, Tablet, Desktop): Tampilan kasir dirancang tanpa kompromi (anti-jomplang) — format split-panel leluasa di layar desktop/tablet serta navigasi tab fleksibel (Katalog & Keranjang Kasir) dengan bilah aksi bawah yang ramah sentuhan jempol di smartphone.',
            'Penguatan Keamanan Firestore Rules: Sub-koleksi cashier_accounts diproteksi ketat hanya bisa ditulis oleh Admin Toko (isAdmin()), dan pencatatan transaksi POS (pos_transactions) divalidasi khusus untuk admin serta kasir resmi yang terautentikasi.',
            'Arsitektur Kode Modular & Lazy-Loading: Modul pos-auth, pos-variant-sheet, dan pos-cashier-admin dimuat secara efisien (lazy-loading) tanpa membebani kecepatan pemuatan awal storefront bagi pelanggan umum.'
        ]
    },
    {
        id: 'log-1-9-3',
        version: 'v1.9.3',
        date: '2026-09-22',
        title: 'Fitur POS Kasir Sungguhan — Transaksi Langsung di Admin CMS (Tanpa Manajemen Stok)',
        category: 'feature',
        badge: 'POS Kasir v1.9.3',
        items: [
            'Kasir POS Sungguhan di Admin CMS: Admin toko kini dapat memproses transaksi jual-beli langsung dari dalam Admin CMS tanpa keluar ke halaman toko. Kasir mendukung semua produk katalog toko tanpa perlu manajemen stok (bebas pilih, bebas beli seperti di website).',
            'UI Split-Panel Kasir: Layar kasir terbagi dua panel — panel kiri menampilkan katalog produk grid (foto, nama, harga) yang bisa diklik langsung, panel kanan menampilkan keranjang transaksi aktif secara real-time.',
            'Scan Barcode via Scanner USB: Kasir mendukung input barcode fisik melalui scanner USB yang otomatis terbaca sebagai keyboard. Produk langsung ditambahkan ke keranjang jika ditemukan di katalog, atau muncul di field pencarian jika tidak ditemukan.',
            'Diskon Fleksibel Per Item + Global: Kasir dapat memberikan diskon dalam satuan Rupiah per item (misalnya diskon Rp 5.000 untuk semen saja) sekaligus diskon global keseluruhan untuk semua item dalam satu transaksi.',
            'Pilihan Pelanggan (Umum / Member / Tempo): Kasir dapat memilih tipe pelanggan — Umum (tanpa data), Member (lookup by nomor HP dari database member), atau Tempo (piutang, otomatis masuk modul Piutang Tempo).',
            'Metode Bayar Lengkap: Transaksi mendukung 4 metode pembayaran — Tunai (input nominal + hitung kembalian otomatis), QRIS (tampil QR code toko), Transfer Bank (pilih rekening dari daftar bank toko), dan Tempo/Piutang (input DP opsional).',
            'Integrasi Piutang Tempo Otomatis: Jika kasir memilih metode Tempo, transaksi otomatis tercatat sebagai piutang di modul Piutang Tempo CMS (tab terpisah). Jatuh tempo, cicilan, dan tagihan WhatsApp diatur dari sana seperti biasa.',
            'Cetak Struk Thermal Kasir: Setelah transaksi berhasil, kasir dapat mencetak struk thermal langsung dari browser (kompatibel printer thermal USB/Bluetooth via dialog cetak). Struk mencantumkan nama toko, tanggal, nomor transaksi, item, total, dan kembalian.',
            'Riwayat & Rekap Transaksi Kasir: Tab Riwayat POS menampilkan semua transaksi hari ini (default) lengkap dengan rekap total omset, jumlah transaksi, breakdown per metode bayar, dan produk terjual. Filter tanggal tersedia untuk melihat hari lain.',
            'Void Transaksi: Transaksi yang salah dapat di-void (dibatalkan) dari Riwayat POS. Transaksi void tidak dihitung dalam rekap omset dan ditampilkan dengan label VOID.',
            'Data Terpisah dari Order Online: Semua transaksi kasir tersimpan di koleksi Firestore pos_transactions yang terpisah dari pesanan online (orders), sehingga laporan kasir dan laporan online tidak bercampur.',
            'Modul Terpisah & Lazy-Loading: Modul Kasir POS dikemas sebagai chunk terpisah (module-pos, 38.89 KB) dan hanya dimuat saat admin membuka tab Kasir — tidak memengaruhi kecepatan storefront pelanggan.'
        ]
    },
    {
        id: 'log-1-9-2',

        version: 'v1.9.2',
        date: '2026-09-21',
        title: 'Geser & Atur Urutan Produk (Drag & Drop Reorder), Verifikasi Domain Google, Akselerasi Core Web Vitals, & Optimasi PageSpeed',
        category: 'feature',
        badge: 'Product Reorder, SEO & Performance v1.9.2',
        items: [
            'Geser Urutan Produk (Drag & Drop): Pemilik toko dapat langsung menahan dan menggeser kartu produk di halaman Admin CMS untuk mengatur urutan tampilan sesuka hati — mendukung sentuhan jari di HP (touch) maupun seret mouse di komputer.',
            'Tombol Panah ▲▼ Geser Cepat: Setiap kartu produk dilengkapi tombol naik/turun untuk menggeser produk satu posisi secara instan tanpa perlu drag jauh, sangat cocok untuk HP layar kecil.',
            'Badge Nomor Urut #1, #2, ... (Klik untuk Pindah Cepat): Nomor urutan produk ditampilkan di setiap kartu. Klik badge untuk langsung memindahkan produk ke nomor urut tertentu dengan cepat.',
            'Rapikan per Kategori Otomatis (1 Klik): Tombol "Rapikan per Kategori" mengelompokkan produk sejenis (paku dengan paku, semen dengan semen, cat dengan cat) secara otomatis dalam satu klik tanpa perlu geser manual satu-satu.',
            'Menu Urutkan Cepat: Dropdown "Urutkan Cepat" tersedia dengan pilihan: Nama A-Z, Nama Z-A, Harga Termurah, Harga Termahal, dan Reset ke Urutan Terbaru — semuanya tersimpan permanen ke cloud.',
            'Penyimpanan Otomatis & Sinkronisasi Real-Time: Setiap perubahan urutan langsung tersimpan ke database cloud (Firestore) dan otomatis tersinkron ke semua perangkat tanpa reload.',
            'Urutan Tercermin di Storefront Pembeli: Urutan produk yang diatur seller menjadi tampilan default halaman Beranda dan Katalog pembeli. Pembeli tetap bebas memilih filter sendiri (Termurah, Termahal, A-Z) sesuai keinginan.',
            'Manajemen Urutan Cerdas: Produk baru otomatis masuk posisi #1 (terdepan), produk dihapus otomatis bersih dari daftar urutan, dan produk duplikat otomatis muncul tepat di sebelah produk aslinya.',
            'Verifikasi Kepemilikan Domain Google Search Console: Penambahan file verifikasi HTML dan meta tag kepemilikan domain di root untuk pengindeksan SEO mesin pencari Google yang optimal.',
            'Eliminasi Total CLS (Cumulative Layout Shift): Mengatasi pergeseran tata letak (dari 0.835 menjadi stabil <0.05) dengan pre-rendered skeleton cards pada banner, kategori, brand, dan katalog produk, dimensi width/height eksplisit pada semua gambar, serta font-display: swap pada Font Awesome.',
            'Lazy-Loading Modul Admin Seller CMS: Pemisahan dinamis bundle modul Admin (510 KB) dari storefront pelanggan, sehingga pengunjung toko tidak perlu mendownload script admin, memangkas ukuran JS kritis dan mendongkrak skor PageSpeed Mobile.',
            'Akselerasi Core Web Vitals (FCP & LCP Instan): Penghapusan jeda splash screen, render skeleton instan pada kunjungan pertama (first-load), sinkronisasi paralel Firestore Promise.all(), banner LCP loading="eager" & fetchpriority="high".',
            'Penyempurnaan Stabilitas Banner & Aksesibilitas: Perbaikan referensi indeks slider banner agar interaksi video/audio dan slide berjalan mulus tanpa error, serta pemenuhan standar aksesibilitas a11y pada tautan footer.'
        ]
    },
    {
        id: 'log-1-9-1',
        version: 'v1.9.1',
        date: '2026-09-20',
        title: 'Sistem Proteksi Member Terkunci (Nama Permanen & Anti Duplikasi), Label Pembeda Member vs Umum di CMS & Piutang Tempo, Serta Penguatan Aturan Keamanan Database Firestore',
        category: 'feature',
        badge: 'Member Locking & Security Rules v1.9.1',
        items: [
            'Sistem Identitas Member Terkunci (Anti Duplikasi Akun): Data nama member resmi yang tersimpan di database terkunci secara permanen. Pelanggan maupun formulir pemesanan tidak dapat mengganti nama member saat bertransaksi dengan nomor HP yang sama, menjamin keaslian data akun member (hanya Admin toko yang dapat mengubah nama di CMS).',
            'Otomatisasi Nama Terdaftar pada Pesanan: Pesanan baru yang menggunakan nomor HP member secara otomatis disinkronkan ke nama resmi yang terdaftar di database toko, bukan nama acak yang diketik pelanggan saat checkout.',
            'Pemisahan Cerdas Konfirmasi Member di CMS: Tombol "+ Konfirmasi & Daftarkan Sebagai Member" kini eksklusif hanya muncul untuk Pelanggan Umum. Untuk pelanggan yang sudah terdaftar resmi, sistem langsung menyajikan badge hijau "Member Terdaftar (Terverifikasi)" tanpa tombol konfirmasi berulang.',
            'Pembeda Visual Label Member vs Umum pada Piutang Tempo: Menambahkan badge status [Member] dan [Umum] pada kartu nota Piutang Tempo dan riwayat pembayaran angsuran, memudahkan kasir/admin memverifikasi hak kelayakan transaksi tempo pelanggan.',
            'Ekspor Rekap Pesanan Excel Lebih Lengkap: Menambahkan kolom baru "Tipe Pelanggan" (Member Resmi / Pelanggan Umum) dan kolom "No. WhatsApp" pada ekspor berkas Excel (.xlsx) rekap pesanan toko.',
            'Penguatan Aturan Keamanan Cloud (Firestore Security Rules): Memperketat firestore.rules pada koleksi customers di mana pendaftaran member baru dibatasi khusus hak akses Admin (isAdmin()), sementara hak update saat checkout non-admin dibatasi hanya untuk penambahan saldo poin loyalty dan waktu pesanan terakhir.',
            'Penyempurnaan Banner Informasi Toko: Menghilangkan badge promo dan pemotongan teks deskripsi (line-clamp) pada banner, menampilkan seluruh teks informasi secara utuh, rapi, dan nyaman dibaca.'
        ]
    },
    {
        id: 'log-1-9-0',
        version: 'v1.9.0',
        date: '2026-09-20',
        title: 'Drop-Point Delivery: Kirim Pesanan ke Lokasi Berbeda (Proyek, Tukang, Mandor) dengan Kalkulasi Ongkir Presisi Toko-ke-Tujuan',
        category: 'feature',
        badge: 'Drop-Point Delivery v1.9.0',
        items: [
            'Fitur Kirim ke Lokasi Berbeda (Drop-Point): Pembeli dapat mengorder dari rumah namun menentukan lokasi pengiriman yang berbeda (contoh: ke lokasi proyek, tukang, atau mandor) dengan satu toggle mudah di halaman checkout.',
            'Kalkulasi Ongkir Presisi Toko-ke-Tujuan: Ongkos kirim dihitung akurat berdasarkan jarak dari Toko Putri ke lokasi tujuan (bukan lokasi pembeli), memastikan harga ongkir yang fair dan transparan untuk setiap order drop-point.',
            'Data Penerima di Lokasi: Kurir mendapat informasi lengkap penerima di lokasi: nama penerima (tukang/mandor/PIC), nomor WhatsApp aktif, dan alamat lokasi proyek yang detail.',
            'GPS / Link Maps Lokasi Tujuan: Tombol sematkan GPS otomatis atau input link/koordinat Google Maps untuk lokasi tujuan, memudahkan kurir menavigasi ke lokasi proyek dengan tepat.',
            'Panel Admin CMS Drop-Point: Halaman detail order di CMS Admin menampilkan badge "📍 Lokasi Berbeda", info lengkap penerima, dan tombol langsung buka Google Maps ke lokasi tujuan proyek.',
            'Konfirmasi Pembayaran Terstruktur: Halaman ringkasan pembayaran menampilkan section khusus "Dikirim ke Lokasi Berbeda" dengan detail nama penerima, WA penerima, dan alamat tujuan yang terpisah dari data pemesan.'
        ]
    },
    {
        id: 'log-1-8-9',
        version: 'v1.8.9',
        date: '2026-09-19',
        title: 'Sistem Cerdas Piutang Tempo (Smart Due Status, Filter Kategori, Metrik Statistik, & 1-Klik Tagih WhatsApp Otomatis) & Cetak Surat Penawaran Harga (SPH Proyek A4/PDF)',
        category: 'feature',
        badge: 'Smart Tempo CRM & Project Quotation SPH v1.8.9',
        items: [
            'Dashboard Metrik Statistik Piutang CMS: Menampilkan kartu ringkasan Total Piutang Aktif, Total Piutang Terlambat, dan Total Nota Tempo secara realtime di dashboard seller.',
            'Filter Cepat Keterlambatan & Pencarian Instan: Tab filter pintar [Semua], [🔴 Terlambat], [🟡 H-3 Segera Jatuh Tempo], dan [🟢 Berjalan] dengan badge counter dinamis, serta kolom pencarian cepat nama pelanggan, nomor WA, atau ID pesanan.',
            'Fitur 1-Klik Tagih WhatsApp Otomatis: Membuat template pesan penagihan profesional dan santun sesuai status tempo (pengingat ramah H-3 atau pemberitahuan jatuh tempo) lengkap dengan rincian nota, sisa pokok, denda, dan nomor rekening resmi toko.',
            'Cetak Surat Penawaran Harga (SPH Proyek): Menambahkan tombol "Cetak SPH" langsung di keranjang belanja toko dengan format resmi A4/PDF lengkap dengan KOP Toko Putri, masa berlaku penawaran 14 hari, rincian spesifikasi barang/harga, serta kolom tanda tangan/stempel rekanan dan toko.',
            'Ekspor Dokumen & Kompatibilitas Tinggi: Dokumen penawaran harga dapat langsung dicetak thermal/printer A4 atau disimpan dalam format PDF resolusi tinggi untuk pengajuan anggaran proyek.'
        ]
    },
    {
        id: 'log-1-8-8',
        version: 'v1.8.8',
        date: '2026-09-19',
        title: 'Penyempurnaan Navigasi Tombol Back Sistematis: Urutan Mundur Berurutan Halaman (Sequential Unwinding), Eliminasi Lompatan Layar, Proteksi Cascade Modal, & Stack Produk Terkait',
        category: 'enhancement',
        badge: 'Seamless Sequential Navigation v1.8.8',
        items: [
            'Urutan Mundur Halaman Berurutan (Sequential Unwinding): Navigasi tombol back (tombol panah header, tombol browser, maupun gesture hardware back Android) kini berjalan teratur satu demi satu (Pembayaran -> Pengiriman -> Keranjang -> Beranda) tanpa ada layar yang terlompati atau melompat langsung ke Beranda.',
            'Eliminasi Lompatan & Infinite Loop Back: Menghapus bypass langsung ke Beranda pada handleAppBackButton dan menyelaraskan penanganan popstate browser dengan stack riwayat tampilan aktif.',
            'Proteksi Penutupan Modal Terprogram (Prevent Cascade-Close): Menambahkan flag isProgrammaticModalClose sehingga saat modal ditutup via tombol silang (X) atau backdrop, sistem tidak memicu penutupan beruntun pada modal di bawahnya maupun mereset tampilan halaman.',
            'Penyelarasan Modal Lengkap: Menambahkan dukungan penutupan modal voucher, panduan belanja (guide), changelog, garansi kualitas, dan sertifikasi keamanan ke closeModalByName.',
            'Navigasi Mundur Produk Terkait (Related Products Stack): Memilih produk rekomendasi sejenis kini menyimpan riwayat produk sebelumnya, sehingga saat tombol back ditekan, pengguna kembali ke produk yang dilihat sebelumnya secara berurutan sebelum modal tertutup.',
            'Navigasi Kembali CMS Seller (Admin Tab to Menu Unwinding): Menekan tombol back (panah header maupun tombol back Android) saat berada di dalam tab menu CMS (Produk, Pesanan, Pengaturan, dsb) kini mengembalikan tampilan ke Menu Utama CMS terlebih dahulu secara rapi, tanpa langsung memunculkan dialog konfirmasi keluar seller.',
            'Dialog Konfirmasi Keluar Beranda: Tombol back pada halaman Beranda (saat tidak ada modal terbuka) secara konsisten memunculkan Dialog Konfirmasi Keluar Aplikasi yang rapi dan aman.'
        ]
    },
    {
        id: 'log-1-8-7',
        version: 'v1.8.7',
        date: '2026-09-19',
        title: 'Pemisahan Tegas Pelanggan Umum vs Member Resmi: Proteksi Poin Loyalty & Pembayaran Tempo (Wajib Verifikasi Database Admin CMS), Konfirmasi Registrasi Member Sekali Klik, & Dialog Edukasi Pelanggan',
        category: 'feature',
        badge: 'Membership Verification & Tempo Security v1.8.7',
        items: [
            'Pemisahan Hak Akses Pelanggan Umum & Member Resmi: Nomor HP baru yang dimasukkan saat pemesanan berstatus murni sebagai Pelanggan Umum. Sistem tidak lagi mendaftarkan pelanggan secara otomatis ke database member sebelum dikonfirmasi oleh Admin di CMS.',
            'Proteksi Ketat Pembayaran Cash Tempo: Opsi pembayaran Cash Tempo disembunyikan secara otomatis bagi pelanggan umum dan dilindungi ganda pada validasi transaksi database cloud. Pembayaran tempo eksklusif untuk member yang nomornya telah terdaftar resmi.',
            'Proteksi Akumulasi & Penukaran Poin Loyalty: Fitur perolehan poin belanja dan diskon penukaran poin hanya berlaku untuk member terverifikasi. Pelanggan umum tidak mendapatkan poin sebelum nomor HP disimpan ke database member CMS oleh Admin.',
            'Fitur Konfirmasi Member Cepat di CMS Pesanan Admin: Admin toko dapat langsung mendaftarkan nomor pelanggan umum menjadi Member Resmi dengan satu kali klik (+ Konfirmasi & Daftarkan Sebagai Member) pada panel detail pesanan.',
            'Dialog Edukasi Pelanggan & Bantuan WhatsApp: Saat pelanggan umum mengecek nomor HP di menu kartu member digital atau checkout, sistem menyajikan status ramah dan tombol kontak WhatsApp Admin untuk aktivasi membership resmi.'
        ]
    },
    {
        id: 'log-1-8-6',
        version: 'v1.8.6',
        date: '2026-09-19',
        title: 'Perbaikan Kendala Pembuatan Pesanan Member (ReferenceError memberPointsUpdated), Stabilitas Transaksi Checkout, & Sinkronisasi Saldo Poin Pelanggan',
        category: 'bugfix',
        badge: 'Order Processing & Loyalty Fix v1.8.6',
        items: [
            'Resolusi Kendala Pembuatan Pesanan: Memperbaiki kendala ReferenceError: memberPointsUpdated is not defined pada saat pelanggan menyelesaikan pesanan saat toko tidak mengaktifkan fitur pelacakan stok langsung.',
            'Penyelarasan Variabel Transaksi: Mendeklarasikan dan menyelaraskan variabel memberPointsUpdated secara konsisten di seluruh percabangan transaksi Firestore.',
            'Stabilitas Transaksi Checkout & Poin Member: Menjamin proses checkout, akumulasi poin reward, pemotongan poin hadiah, dan pencatatan pesanan ke database cloud berjalan 100% lancar tanpa hambatan.',
            'Sinkronisasi Total Sistem: Memperbarui kompilasi aset produksi web, paket flashdisk siap pakai, dan sinkronisasi platform native Android.'
        ]
    },
    {
        id: 'log-1-8-5',
        version: 'v1.8.5',
        date: '2026-09-18',
        title: 'Pengaturan Perangkat & Printer Kasir POS Universal (58mm/80mm, Bluetooth, USB, RawBT), Dialog Konfirmasi Keluar Aplikasi Native, & Navigasi Kembali WhatsApp Tanpa Reload',
        category: 'feature',
        badge: 'Universal POS & Native App v1.8.5',
        items: [
            'Pengaturan Perangkat Universal & Printer POS: Menyediakan panel konfigurasi koneksi printer kasir (Bluetooth Thermal ESC/POS, USB OTG, Jaringan LAN/WiFi IP, Android System PrintManager, dan Driver RawBT).',
            'Format Kertas Fleksibel 58mm & 80mm: Mendukung ukuran kertas mini portable 58mm (32 kolom) dan printer kasir meja 80mm (48 kolom) dengan perataan teks struk otomatis.',
            'Fitur Uji Coba Cetak (Test Print): Memungkinkan kasir menguji sambungan printer secara langsung dengan satu klik sebelum mulai melayani pelanggan.',
            'Opsi Kustomisasi Struk Kasir: Pengaturan teks header/footer, cetak barcode pesanan (Code128), saldo poin loyalty member, auto-cut kertas, dan perintah buka laci kasir (cash drawer).',
            'Dialog Konfirmasi Keluar Aplikasi (Exit Dialog): Menutup modal bertingkat saat tombol Hardware Back Android ditekan; jika sudah berada di Beranda tanpa modal terbuka, memunculkan dialog konfirmasi keluar elegan (Lanjut Belanja atau Keluar Aplikasi).',
            'Navigasi Kembali WhatsApp Tanpa Reload (External Intent Interception): Mengarahkan seluruh tautan WhatsApp (wa.me) ke intent aplikasi eksternal di Android sehingga WebView Toko Putri tidak pernah tergantikan. Saat pembeli menekan tombol Back di WhatsApp, aplikasi Toko Putri langsung kembali tampil di layar dengan keranjang dan data transaksi tetap utuh.',
            'Fitur Unduh & Pembaruan Aplikasi Real-Time (Play Store Style): Menambahkan modal unduhan APK resmi bergaya Google Play Store dengan badge Play Protect, verifikasi integritas, QR code untuk pemindaian instan di HP dari komputer desktop/laptop, dan tautan otomatis ke rilis GitHub terbaru.'
        ]
    },
    {
        id: 'log-1-8-4',
        version: 'v1.8.4',
        date: '2026-09-18',
        title: 'Antarmuka Kartu Member Digital VIP 3D (Digital Loyalty Pass), Barcode Kasir POS Vektor, Gamifikasi Tingkat Tier (Bronze, Silver, Gold, Platinum), & Ekspor Simpan ke Galeri Ponsel',
        category: 'feature',
        badge: 'Digital Loyalty Card v1.8.4',
        items: [
            'Kartu Member Digital Interaktif 3D (Apple/Google Wallet Style): Mentransformasi data loyalitas pelanggan menjadi kartu member fisik digital yang mewah, lengkap dengan EMV smart chip keemasan, logo resmi Toko Putri, efek emboss nama pelanggan, nomor virtual kartu PUTRI, dan saldo poin.',
            'Animasi 3D Flip (Bolak-Balik): Pelanggan dapat membalik kartu secara interaktif untuk melihat sisi belakang yang dilengkapi pita magnetik (magnetic stripe) dan barcode kasir.',
            'Barcode Kasir POS Vektor (Code128): Dilengkapi barcode presisi yang digenerate otomatis dari nomor pelanggan, siap discan oleh kasir toko fisik saat berbelanja langsung.',
            'Tingkatan Tier Dinamis (Bronze, Silver, Gold, Platinum VIP): Pengelompokan level pelanggan berdasarkan akumulasi poin belanja dengan indikator progress bar dan daftar hak istimewa eksklusif setiap level.',
            'Simpan Kartu ke Galeri HP: Fitur unduh kartu member resolusi tinggi (PNG HD) langsung ke galeri ponsel atau dibagikan ke WhatsApp dengan satu sentuhan.',
            'Deteksi Checkout & Akses Cepat: Form checkout otomatis menampilkan miniatur kartu member saat nomor pembeli terdeteksi, dan menu Tautan Cepat kini memiliki tombol langsung ke Kartu Member & Poin.',
            'Sinkronisasi Poin Otomatis & Persistensi Kartu: Menyelaraskan aturan keamanan Firestore pelanggan, mengkreditkan poin pesanan secara otomatis ke database cloud, menjaga kartu member tetap aktif secara persisten di HP pelanggan, dan mengaktifkan auto-reconciliation riwayat pesanan.'
        ]
    },
    {
        id: 'log-1-8-3',
        version: 'v1.8.3',
        date: '2026-09-18',
        title: 'Aktivasi Fitur Hardware Native: Logo Resmi Toko Putri (Launcher Icon & Splash HD), Izin Kamera Barcode Scanner, Geolokasi GPS Pelanggan, Cetak Printer Termal POS, & Ekspor Simpan Dokumen A4/PDF',
        category: 'feature',
        badge: 'Native Hardware & Icon v1.8.3',
        items: [
            'Ikon Aplikasi & Splash Screen Resmi Toko Putri: Mengganti seluruh ikon bawaan dengan logo resmi resolusi tinggi Toko Putri (PUTRI UTAMA TEKNIK) di seluruh varian layar (mdpi, hdpi, xhdpi, xxhdpi, xxxhdpi, dan adaptive icon) serta splash screen elegan saat aplikasi dibuka.',
            'Aktivasi Kamera & Pemindai Barcode: Mengaktifkan izin kamera Android dan WebChromeClient onPermissionRequest sehingga scan barcode produk via kamera HP dan ambil foto bukti transfer langsung berfungsi lancar.',
            'Geolokasi & Deteksi GPS Pelanggan: Memasang izin ACCESS_FINE_LOCATION & ACCESS_COARSE_LOCATION beserta onGeolocationPermissionsShowPrompt, sehingga fitur ambil lokasi otomatis di halaman checkout dan pengaturan toko berjalan presisi.',
            'Pencetakan Printer Termal POS & Faktur A4: Menghubungkan fungsi cetak kasir langsung ke Android PrintManager native dan skema printer bluetooth thermal (RawBT), memungkinkan pencetakan struk 58mm/80mm tanpa hambatan.',
            'Simpan & Bagikan Dokumen (PDF/Gambar): Mengintegrasikan native bridge saveOrShareFile untuk menyimpan file invoice, faktur, dan surat jalan ke memori HP atau langsung dibagikan ke WhatsApp pelanggan.'
        ]
    },
    {
        id: 'log-1-8-2',
        version: 'v1.8.2',
        date: '2026-09-18',
        title: 'Aplikasi Android Live Cloud Auto-Sync: Pembaruan Website & Desain Otomatis Tersinkronisasi ke HP Tanpa Perlu Install Ulang APK, Optimasi Hardware Back Button, & Paket Intent WhatsApp',
        category: 'feature',
        badge: 'Android Live Cloud Sync v1.8.2',
        items: [
            'Arsitektur Live Cloud Auto-Sync: Menghubungkan aplikasi Android native secara langsung ke server hosting resmi Toko Putri (https://tokoputri-three.vercel.app). Seluruh pembaruan kode, tata letak antarmuka, dan fitur baru yang di-deploy ke website akan otomatis muncul di HP pelanggan seketika tanpa perlu mendownload atau menginstal ulang file APK.',
            'Penanganan Tombol Kembali Native (Hardware Back Button): Mengintegrasikan OnBackPressedDispatcher pada MainActivity Android, memungkinkan pelanggan menggunakan tombol kembali fisik atau gestur usap layar HP untuk menutup modal atau kembali ke halaman sebelumnya secara mulus tanpa keluar aplikasi secara tiba-tiba.',
            'Visibilitas Intent Eksternal Android 11+: Mendaftarkan skema WhatsApp (whatsapp:// & https://wa.me) serta panggilan telepon (tel:) pada manifest sistem, memastikan tombol kontak penjual dan pesan otomatis WhatsApp dapat langsung meluncurkan aplikasi WhatsApp di HP pelanggan tanpa hambatan keamanan OS.',
            'Kesiapan Hybrid Zero-Maintenance: Menggabungkan kecepatan runtime native dengan fleksibilitas web modern, memberikan pengalaman belanja full-screen setara aplikasi e-commerce papan atas.'
        ]
    },
    {
        id: 'log-1-8-1',
        version: 'v1.8.1',
        date: '2026-09-18',
        title: 'Transformasi Super-App Native Android (.APK), Integrasi Capacitor 8 Modern, & Alur Kompilasi Cloud Otomatis GitHub Actions',
        category: 'feature',
        badge: 'Android Native APK Release v1.8.1',
        items: [
            'Transformasi Aplikasi Native Android: Mengintegrasikan platform Capacitor 8 (@capacitor/android, @capacitor/core, @capacitor/cli) ke dalam fondasi sistem Toko Putri sehingga dapat dipasang langsung pada smartphone Android layaknya aplikasi komersial Play Store.',
            'Kompilasi Otomatis di Cloud (GitHub Actions CI/CD): Membangun alur kerja kompilasi otomatis di server cloud GitHub menggunakan Node.js 22 dan Java OpenJDK 21. Setiap ada pembaruan kode, server GitHub secara otomatis memproses, mengompilasi, dan merilis file TokoPutri.apk siap pasang tanpa membebani komputer.',
            'File Installer TokoPutri.apk Siap Pasang: Menyediakan file installer TokoPutri.apk (~4.8 MB) yang ringan, cepat, dan responsif langsung di folder aplikasi serta paket flashdisk siap salin ke HP.',
            'Integrasi SplashScreen & Desain Adaptif: Aplikasi Android Toko Putri berjalan dengan tampilan layar penuh native, animasi peluncuran elegan, safe-area inset yang pas untuk poni kamera HP kekinian, dan terhubung langsung secara realtime ke database cloud Firebase Firestore.'
        ]
    },
    {
        id: 'log-1-8-0',
        version: 'v1.8.0',
        date: '2026-09-18',
        title: 'Sinkronisasi Realtime Katalog Hadiah Multi-Perangkat (Desktop & Mobile), Eliminasi Deadlock Listener, & Integrasi Modal Hadiah Cepat',
        category: 'bugfix',
        badge: 'Multi-Device Reward Sync v1.8.0',
        items: [
            'Resolusi Deadlock Listener Katalog Hadiah: Menghapus kondisi pengunci pada fungsi renderRewardCatalog() yang sebelumnya memeriksa activeRewards.length > 0 sebelum memasang listener Firestore. Kini listener attachRewardsRealtime() selalu dipasang seketika saat fitur katalog hadiah aktif.',
            'Booting Listener Realtime Hadiah Otomatis: Mendaftarkan dan menjalankan listener attachRewardsRealtime() secara otomatis saat aplikasi dimuat di DOMContentLoaded sejajar dengan sinkronisasi produk dan pengaturan toko, menjamin setiap browser (komputer desktop, laptop, HP, dan tablet pelanggan) langsung terhubung secara live.',
            'Bootstrap Fetch Hadiah pada Kunjungan Pertama: Menyempurnakan fungsi loadAppData() agar secara instan mengambil data sub-koleksi rewards dari database server ketika browser baru membuka website tanpa cache lokal.',
            'Tombol CTA Cepat "Lihat Semua" di Beranda: Menambahkan tombol aksi cepat di samping judul Katalog Hadiah Poin Pelanggan yang langsung membuka modal daftar reward dan informasi poin belanja pelanggan.',
            'Penyelarasan Logika Filter Katalog Produk: Memperbaiki toggleCls pada modul katalog agar wadah hadiah hanya disembunyikan saat pengguna memfilter pencarian atau saat program hadiah memang dinonaktifkan oleh pemilik toko.',
            'Sinkronisasi Instan CMS Hadiah: Memastikan penyimpanan atau penghapusan hadiah dari panel CMS admin di HP langsung memperbarui cache lokal localStorage dan menyiarkan pembaruan ke seluruh layar desktop pelanggan secara instan (<200ms) tanpa perlu refresh.'
        ]
    },
    {
        id: 'log-1-7-9',
        version: 'v1.7.9',
        date: '2026-09-17',
        title: 'Desain Visual Native Super-App: Miniatur Layar HP 3D di CMS, Preset Background Modern & Ambient Canvas',
        category: 'feature',
        badge: 'Native Super-App Visuals v1.7.9',
        items: [
            'Miniatur Layar Smartphone 3D di CMS Admin: Mengganti ikon kotak kaku pada menu Pengaturan Toko dengan 5 miniatur live mockup layar HP yang interaktif, lengkap dengan frame bezel, dynamic island, dan visual miniature preview.',
            'Preset Visual Background Modern: Menghadirkan 5 gaya atmosferik (Hero Arch Kanopi Lengkung, Aurora Mesh Glow atmosferik iOS/Fintech, Tech Grid blueprint perkakas/teknik, Glass Studio kedalaman kaca es, dan Minimalis Clean Canvas).',
            'Live Zero-Reload Theme Preview: Memilih model gaya background di panel CMS langsung mengubah latar belakang halaman secara live seketika tanpa reload browser.',
            'Desktop & Tablet Ambient Backdrop Glow: Memberikan aura pencahayaan atmosferik dinamis pada sisi kiri-kanan kanvas monitor komputer dan tablet, menciptakan sensasi aplikasi desktop macOS/iPad melayang yang elegan.',
            'Penyempurnaan Header & Floating Elements: Header toko otomatis beradaptasi dengan model visual latar belakang aktif dengan bayangan glow lembut dan transisi mulus.'
        ]
    },
    {
        id: 'log-1-7-8',
        version: 'v1.7.8',
        date: '2026-09-17',
        title: 'Pemeliharaan & Perawatan Sistem: Audit Keamanan, Stabilitas Navigasi Mobile, & Sinkronisasi Distribusi',
        category: 'maintenance',
        badge: 'System Maintenance & Stability v1.7.8',
        items: [
            'Audit Keamanan & Penyelarasan Dependensi: Memeriksa integritas dependensi npm, menyelaraskan patch keamanan paket, dan mengaudit aturan keamanan Firestore Security Rules untuk proteksi optimal toko dan data pelanggan.',
            'Penguncian Bottom Navigation Bar Mobile: Mengintegrasikan utilitas bnav-hidden dan translate penuh pada bilah navigasi bawah saat di halaman Keranjang & Checkout agar tombol Beranda timbul tidak mengintip atau menghalangi transaksi.',
            'Stabilitas Alur Belanja & Quick Variant: Menyempurnakan transisi penutupan modal produk bebas race-condition dengan History API untuk eksekusi Beli Sekarang (Direct Checkout) yang mulus dan responsif.',
            'Kompilasi & Optimasi Build Produksi: Membangun ulang seluruh bundle produksi Vite (dist/) dengan pemisahan chunk terisolasi, CSS purge, dan performa tinggi.',
            'Sinkronisasi Total Seluruh Berkas Distribusi: Menyelaraskan seluruh paket offline pada folder 1. HASIL_BUILD_SIAP_PAKE dan PAKET_FLASHDISK (File Siap Pakai & Source Code Lengkap) sehingga 100% mutakhir dan siap pakai.'
        ]
    },
    {
        id: 'log-1-7-7',
        version: 'v1.7.7',
        date: '2026-09-17',
        title: 'Penyempurnaan UX Modal Produk: Drawer Pilih Varian Cepat (Quick Variant Sheet), Eliminasi Tombol Duplikat & Bilah Bawah Luas',
        category: 'feature',
        badge: 'Smart Variant Shopping v1.7.7',
        items: [
            'Drawer Khusus "Pilih Varian Cepat" (Quick Variant Bottom Sheet): Menekan tombol + belanja cepat pada produk bervarian kini membuka lembar ringkas (foto, harga dinamis, pilihan varian, kuantitas & tombol beli) tanpa membuka modal deskripsi raksasa.',
            'Smart Auto-Select Varian Pertama: Sistem secara cerdas memilih varian aktif pertama yang memiliki stok secara otomatis, menghapus kebingungan pembeli dan mencegah pesan error "Belum memilih varian".',
            'Eliminasi Redundansi & Tombol Duplikat: Menghapus kotak Subtotal besar dan tombol ganda di dalam isi modal produk sehingga layout sangat bersih, lega, dan tidak bertumpuk.',
            'Bilah Aksi Bawah Lega & Bebas Sesak: Menghilangkan ikon WhatsApp dari bilah transaksi bawah agar tombol + Keranjang dan Beli Sekarang memiliki ruang yang luas, proporsional, dan nyaman ditekan jempol tanpa teks terpotong.',
            'Tombol Konsultasi WhatsApp Bersih di Area Informasi: Akses tanya penjual via WhatsApp dipindahkan ke area informasi produk dengan tampilan rapi dan tidak mengganggu alur checkout cepat.'
        ]
    },
    {
        id: 'log-1-7-6',
        version: 'v1.7.6',
        date: '2026-09-17',
        title: 'Pengalaman Native Mobile App: Haptic Feedback, Animasi Fly-to-Cart, Sticky Action Bar Modal & Pull-to-Refresh',
        category: 'feature',
        badge: 'Native Mobile App Feel v1.7.6',
        items: [
            'Micro-Haptic Vibration Feedback: Sentuhan getaran taktil mikro 10ms saat menyentuh tab navigasi, tombol Beranda melayang, dan tombol aksi belanja di layar HP untuk sensasi fisik layaknya aplikasi native.',
            'Fly-to-Cart Micro-Animation: Efek animasi visual foto produk melayang melengkung (curved flight) langsung masuk ke ikon keranjang navigasi bawah saat tombol + Keranjang ditekan.',
            'Sticky Bottom Action Bar pada Detail Produk: Bilah belanja cepat menempel di bagian bawah modal detail produk (Subtotal, Qty, + Keranjang, Beli Sekarang & Chat WA) untuk kemudahan transaksi satu tangan.',
            'Tombol Beli Sekarang (Direct Checkout): Pembeli dapat langsung checkout instan hanya dalam satu ketukan tanpa harus membuka keranjang terlebih dahulu.',
            'Quick-Add Cart pada Kartu Katalog: Tombol + pada kartu katalog kini dapat langsung memasukkan produk tanpa varian ke keranjang disertai animasi terbang.',
            'Native Pull-to-Refresh & Skeleton Shimmer: Tarik layar ke bawah dari puncak katalog untuk sinkronisasi data toko secara hening dan tampilan kerangka berkilau saat memuat produk.'
        ]
    },
    {
        id: 'log-1-7-5',
        version: 'v1.7.5',
        date: '2026-09-17',
        title: 'Desain Navigasi Bawah Modern: Beranda Timbul Melayang di Tengah (Elevated Center Hub) & Tampilan 100% Aplikasi Mobile',
        category: 'feature',
        badge: 'Mobile App Navigation v1.7.5',
        items: [
            'Navigasi Bawah Mobile Modern (App-Like Bottom Navigation): Menghadirkan bilah navigasi bawah 5 tab simetris (Kategori, Keranjang, Beranda, Pesanan, Menu) yang intuitif untuk kemudahan pengoperasian satu tangan (Golden Thumb Zone) di layar ponsel.',
            'Tombol Beranda Timbul Melayang di Tengah (Elevated Center Hero Hub): Menempatkan tombol Beranda tepat di tengah dengan lingkaran 52px melayang timbul (offset -top-5) bergradien tema dinamis, ring cutout notch, dan drop-shadow lembut yang elegan.',
            'Solid Background Anti-Tembus & Bordered Cart Badge: Panel navigasi menggunakan latar belakang 100% solid (bg-white dark:bg-[#0b1120]) tanpa efek tembus pandang/blur residual saat menggulir halaman, dilengkapi badge keranjang belanja dengan outline kontras tinggi.',
            'Sinkronisasi Routing & Active State Cerdas: Status tab navigasi otomatis menyala aktif secara akurat mengikuti URL hash/halaman yang sedang dibuka (Beranda, Riwayat Pesanan, Kategori Modal, atau Menu Drawer).',
            'Manajemen Pruning Log Pembaruan di CMS: Administrator toko kini dapat menghapus catatan log pembaruan lama langsung dari panel CMS Admin agar riwayat changelog tetap rapi, ringkas, dan bebas spam seiring berjalannya waktu.'
        ]
    },
    {
        id: 'log-1-7-2',
        version: 'v1.7.2',
        date: '2026-09-17',
        title: 'Finalisasi & Audit Debugging Menyeluruh Sistem (Stabilitas Router Modal, Type Safety ID Produk & Akses Dev Lokal)',
        category: 'maintenance',
        badge: 'Final System Audit & Stability v1.7.2',
        items: [
            'Resolusi Import Router Modal Storefront: Mengimpor fungsi pushModalHistory dan requestCloseModal secara eksplisit pada modul dialog storefront (modals.js) untuk menjamin semua dialog (Tautan Cepat, Kategori, Brand Mitra, Syarat & Ketentuan, Kebijakan Privasi, Panduan Belanja) terbuka dan tertutup dengan mulus tanpa memicu ReferenceError.',
            'Safe String ID Handling pada Katalog & Rekomendasi: Mengenkapsulasi parameter ID produk pada atribut onclick kartu produk dan kartu rekomendasi slider (openProductModal), memastikan kompatibilitas penuh untuk ID numerik maupun string alfa-numerik tanpa risiko syntax error.',
            'Perbaikan Pencocokan Produk Target Voucher: Menyempurnakan pencocokan target produk voucher diskon dengan konversi string bertipe aman (String(item.id) === String(f.targetProduct)).',
            'Penyempurnaan Struk Tempo Admin: Menambahkan deklarasi aman helper pushModalHistory pada modul piutang & struk pembayaran tempo (tempo.js).',
            'Dukungan Host Lokalitas Lingkungan Pengujian: Menambahkan pengenalan host 127.0.0.1 secara setara dengan localhost pada pemeriksaan akses dev admin (checkAdminAccess).',
            'Audit Menyeluruh 200+ Inline Event Handler: Memverifikasi seluruh event handler di index.html dan template JS untuk memastikan 100% fungsi terdaftar resmi di window tanpa ada broken reference.'
        ]
    },
    {
        id: 'log-1-7-1',
        version: 'v1.7.1',
        date: '2026-09-17',
        title: 'Penyelarasan Desain Modal CMS Admin & Builder Komponen (Tabel Spesifikasi, Grosir, Varian & Eliminasi Scrollbar Native)',
        category: 'optimization',
        badge: 'Admin Modal & Theme Harmonization v1.7.1',
        items: [
            'Penyelarasan Builder Tabel Spesifikasi (Spec Table Builder): Mengganti warna hardcoded cyan pada tombol "Tambah Baris Spesifikasi" dan ikon placeholder dengan variabel warna tema aktif toko (--color-primary), sehingga menyatu sempurna dengan seluruh 19 preset tema (termasuk tema emas/olive Toko Putri).',
            'Eliminasi Scrollbar Native Abu-abu di Modal CMS: Mengintegrasikan utilitas hide-scrollbar pada kontainer formulir Admin Modal (#admin-modal-form), Modal Detail Pesanan (#admin-order-modal-content), Modal Edit Cepat Harga (#qp-body), dan Modal Restock Stok, sehingga scrollbar native yang tebal dan kaku hilang tanpa mengurangi kenyamanan scroll.',
            'Harmonisasi Builder Grosir & Varian Produk: Menyelaraskan kartu grosir, tombol tambah tingkatan grosir, kartu varian, serta dialog database warna ke standar border-radius rounded-2xl dan aksen tema aktif toko tanpa warna kontras yang jomplang (menghapus hardcoded amber, pink, dan violet).',
            'Penyempurnaan Visual Header & Tombol Modal Admin: Menstandarisasi radius modal utama ke rounded-2xl, menambahkan badge ikon tematik di samping judul, menyempurnakan tombol tutup melingkar (cursor-pointer), dan tombol solid simpan data dengan efek shadow-glow dan active scaling.',
            'Optimalisasi Modal Restock & Edit Cepat Harga: Menyelaraskan seluruh dialog popup operasional admin dengan warna aksen dinamis toko dan konsistensi interaksi penuh.'
        ]
    },
    {
        id: 'log-1-7-0',
        version: 'v1.7.0',
        date: '2026-09-17',
        title: 'Pengelompokan Produk Sejenis (Sub-Kategori Cerdas) & Rekomendasi Produk Alternatif di Modal Detail',
        category: 'feature',
        badge: 'Smart Sub-Category & Related Products v1.7.0',
        items: [
            'Sistem Sub-Kategori Cerdas (Smart Sub-Grouping): Mengelompokkan produk berdasarkan jenis yang lebih spesifik dalam kategori yang sama (contoh kategori Cat Bangunan: Cat Tembok, Cat Kayu & Besi, Waterproofing, Kuas & Rol) dengan kompatibilitas penuh tanpa merombak struktur database yang sudah ada.',
            'Bilah Filter Sub-Kategori Interaktif (Dynamic Chip Bar): Menampilkan bilah chip filter horizontal di etalase saat sebuah kategori dipilih, lengkap dengan indikator jumlah produk per jenis dan penanda aktif sesuai tema toko.',
            'Rekomendasi Produk Sejenis & Alternatif Pilihan di Modal: Menambahkan kartu slider horizontal "Produk Sejenis & Alternatif Pilihan" di dalam modal detail produk menggunakan algoritma pencocokan skor relevansi (jenis produk, kategori, dan brand) untuk memudahkan pembeli membandingkan pilihan dan mendorong cross-selling.',
            'Autocomplete Datalist di Form Produk Admin: Formulir penambahan/pengeditan produk di CMS Admin kini dilengkapi input cerdas yang otomatis menyarankan jenis/sub-kategori yang sudah pernah ada di toko untuk mencegah typo dan menjaga konsistensi penamaan.',
            'Badge Jenis Produk pada Kartu Katalog: Menampilkan label sub-kategori bernuansa tema toko pada kartu produk di tampilan grid maupun list etalase.',
            'Penyelarasan Desain Modal Detail Produk: Menstandarisasi radius modal (rounded-t-3xl sm:rounded-2xl) dan drag bar minimalis modern, serta memastikan perpindahan antar produk sejenis bergulir mulus ke posisi atas (scroll-to-top).'
        ]
    },
    {
        id: 'log-1-6-2',
        version: 'v1.6.2',
        date: '2026-09-17',
        title: 'Penyempurnaan Modal Syarat & Ketentuan, Kebijakan Privasi, dan Storefront Dialog (Modern Card Layout & Anti-Overlay Vercel Toolbar)',
        category: 'optimization',
        badge: 'Modal Card Layout v1.6.2',
        items: [
            'Restrukturisasi Visual Modal Syarat & Ketentuan serta Kebijakan Privasi: Mengubah tampilan modal teks polos menjadi format kartu interaktif bertingkat bernomor (Numbered Badges) dengan padding proporsional, border halus, dan kontras tinggi sesuai tema aktif.',
            'Eliminasi Glitch Format HTML Baris Baru: Memperbaiki parser teks di modals.js sehingga konten HTML dan default copy tidak lagi disusupi tag <br> yang menyebabkan spasi melompat/renggang tidak wajar.',
            'Penyelarasan Desain Modal Bottom Sheet: Menstandarisasi radius modal (rounded-t-3xl sm:rounded-2xl), menghapus drag bar abu-abu usang, mempercantik kotak ikon header dengan aksen tema resmi (w-10 h-10 rounded-2xl), serta melengkapi footer dengan tombol "Tutup" yang ramah mobile.',
            'Supresi Floating Toolbar Vercel Feedback: Menyuntikkan aturan CSS khusus untuk menyembunyikan widget floating Vercel live feedback/toolbar agar tidak lagi menutupi konten modal dan teks transaksi pelanggan pada layar mobile.',
            'Harmonisasi Modal Tautan Cepat, Kategori, Brand, Panduan Belanja & Q&A: Menyatukan gaya visual seluruh dialog storefront ke standar modern tanpa tampilan jomplang.'
        ]
    },
    {
        id: 'log-1-6-1',
        version: 'v1.6.1',
        date: '2026-09-17',
        title: 'Penyelarasan Desain Menyeluruh Storefront & CMS Modal (Visual Theme Consistency & Solid Design)',
        category: 'optimization',
        badge: 'Theme Consistency v1.6.1',
        items: [
            'Harmonisasi Penuh Storefront & CMS dengan Theme Engine: Menghapus seluruh kelas warna hardcoded (seperti emerald-*, teal-*, pink-*) sehingga seluruh antarmuka toko beradaptasi 100% mulus dengan 19 palet tema warna sistem.',
            'Penyelarasan Banner Progres Gratis Ongkir: Elemen pelacak progres gratis ongkir di keranjang belanja kini menggunakan variabel tema aktif (--color-primary) secara dinamis baik pada progress bar, ikon, teks, maupun badge.',
            'Standarisasi Modal Dialog & Bottom Sheet: Seluruh modal dialog (Ulasan Pelanggan, Poin Hadiah Member, Kupon Promo, Log Pembaruan Sistem, Jaminan Mutu, Keamanan & Privasi, Konfirmasi, Edit Harga Cepat, dan Restock) distandarisasi ke border-radius solid rounded-t-3xl sm:rounded-2xl dengan latar belakang bg-slate-900/80 yang tajam dan konsisten.',
            'Penghapusan Efek Blur Residual: Mengeliminasi sisa-sisa kelas backdrop-blur pada modal dan kontainer kartu storefront untuk memastikan antarmuka 100% solid, tajam, ringan diakses, dan bebas glitch grafis di semua browser.',
            'Penyelarasan Form Tempo VIP & Kartu Customer Support: Formulir pembayaran tempo VIP dan kartu kontak WhatsApp di footer kini menyatu secara harmonis dengan warna aksen tema aktif toko.',
            'Pembaruan Kompilasi & Optimalisasi Bundle Produksi: Memperbarui build produksi Vite v1.6.1 dengan ukuran bundle yang efisien dan sinkronisasi penuh.'
        ]
    },
    {
        id: 'log-1-6-0',
        version: 'v1.6.0',
        date: '2026-09-16',
        title: 'Program Poin Belanja Hibrida & Loyalitas Member Cerdas (Hybrid Loyalty Points System)',
        category: 'feature',
        badge: 'Hybrid Loyalty Points',
        items: [
            'Sistem Poin Belanja Hibrida (Hybrid Points Engine): Menghubungkan poin produk reward langsung dengan poin kelipatan minimal belanja untuk produk non-poin secara otomatis.',
            'Kombinasi Poin Akurat: Produk yang memiliki poin langsung tetap menyumbangkan poin per itemnya, sementara produk tanpa poin diakumulasikan total belanjanya untuk mendapatkan poin kelipatan (misal tiap Rp 100.000 = 1 poin).',
            'Pengaturan Fleksibel di Panel Admin: Administrator toko dapat mengaktifkan/menonaktifkan program poin belanja, menentukan nominal batas belanja (kelipatan Rp), serta jumlah poin yang diperoleh per kelipatan.',
            'Bilah Progres & Notifikasi Gamifikasi di Keranjang: Pembeli dapat melihat langsung kalkulasi perolehan poin dan progres nominal belanja yang dibutuhkan menuju poin berikutnya.',
            'Integrasi Checkout & Sinkronisasi Saldo Member: Total poin hibrida otomatis disimpan ke data pesanan (pointsEarned & pointsBreakdown) dan langsung mengkredit saldo akun member terdaftar saat transaksi selesai.'
        ]
    },
    {
        id: 'log-1-5-2',
        version: 'v1.5.2',
        date: '2026-09-16',
        title: 'Penyelarasan & Sinkronisasi Visual Seluruh Form Pengaturan Toko (Harmonious & Unified Settings UI)',
        category: 'optimization',
        badge: 'Unified Settings UI',
        items: [
            'Sinkronisasi Visual Menyeluruh (Anti-Jomplang): Menyelaraskan tata letak visual seluruh 6 kategori pengaturan toko (Profil, Kategori & Brand, Pengiriman & Lokasi, QRIS Pay, Sistem & API, dan Operasional) dengan standar container kartu modern dan tipografi yang harmonis.',
            'Struktur Kartu Berbasis Badge Ikon: Seluruh blok form kini memiliki header kartu tematik berbingkai rounded-xl lengkap dengan ikon representatif, judul tegas, dan deskripsi fungsi yang jelas.',
            'Tata Letak Kategori & Brand Lebih Lega: Mengelompokkan konfigurasi slider dan gaya tampilan (Grid/Pill/Logo) ke dalam sub-kartu tersendiri dilengkapi kotak tips pengalaman pengguna (UX).',
            'Form Pembayaran QRIS & Integrasi Cloud Dipercantik: Menambahkan kartu preview QRIS terverifikasi serta status koneksi endpoint Google Apps Script (GAS) dengan indikator aktif yang elegan.',
            'Harmonisasi Kontrol Operasional & PPN: Formulir pembatasan stok barang dan skema pajak PPN (Eksklusif/Inklusif) dikemas ke dalam kartu rapi dengan penjelasan skema perhitungan transaksi.',
            'Navigasi Atas & Tombol Simpan Ganda: Menghadirkan tombol kembali berlabel jelas beserta tombol simpan cepat di baris header atas untuk kenyamanan akses di layar desktop maupun mobile.'
        ]
    },
    {
        id: 'log-1-5-1',
        version: 'v1.5.1',
        date: '2026-09-16',
        title: 'Input Geolokasi Cerdas Google Maps (Tempel & Simpan Akurat Presisi Tinggi)',
        category: 'feature',
        badge: 'Smart Geolocation',
        items: [
            'Smart Auto-Extract Google Maps: Admin cukup menempel tautan (link) atau angka koordinat dari Google Maps langsung pada satu kotak input cerdas di Pengaturan Pengiriman & Lokasi.',
            'Presisi Tinggi Desimal Penuh: Sistem otomatis mengekstrak Latitude & Longitude dengan ketepatan presisi penuh (contoh: -7.82308507053985, 112.0988374794464) tanpa terpotong.',
            'Tombol Tempel Otomatis Clipboard: Fitur satu klik untuk membaca clipboard dan menempel koordinat secara instan tanpa perlu ketik manual.',
            'Verifikasi Titik Pin Google Maps: Tombol "Cek di Maps" untuk membuka koordinat di tab baru Google Maps dan memastikan letak toko 100% akurat.',
            'Dukungan Tempel Koordinat Pelanggan saat Checkout: Memudahkan pembeli di perangkat laptop/PC menyematkan link/koordinat Maps rumah mereka saat sensor GPS tidak aktif.'
        ]
    },
    {
        id: 'log-1-5-0',
        version: 'v1.5.0',
        date: '2026-09-16',
        title: 'Fitur Promo Gratis Ongkir Otomatis Minimal Belanja (Free Shipping Threshold) & Gamifikasi Keranjang',
        category: 'feature',
        badge: 'Free Shipping Promo',
        items: [
            'Fitur Promo Bebas Ongkir Otomatis: Admin dapat mengaktifkan promo dan menentukan nominal batas minimal belanja (misal Rp 1.000.000) melalui menu Pengaturan > Pengiriman & Lokasi.',
            'Bilah Kemajuan (Progress Bar) Interaktif di Keranjang Belanja: Menampilkan persentase pencapaian serta kalkulasi sisa belanja secara real-time yang memotivasi pelanggan untuk menambah belanja.',
            'Pemberitahuan Selebrasi Pencapaian: Banner ucapan selamat dengan efek visual cerah dan animasi saat subtotal keranjang berhasil mencapai syarat gratis ongkir.',
            'Kalkulasi Otomatis Tanpa Kode Voucher: Ongkos kirim delivery langsung terpotong 100% (Rp 0) di ringkasan pembayaran checkout tanpa mewajibkan pembeli mengklaim kode kupon manual.',
            'Integrasi Penuh Dokumen & Struk: Diskon ongkir tercatat rapi pada database pesanan Firestore, struk thermal kasir, rincian faktur belanja A4, dan histori pesanan pembeli.'
        ]
    },
    {
        id: 'log-1-4-1',
        version: 'v1.4.1',
        date: '2026-09-16',
        title: 'Penyempurnaan Tampilan Footer (Clean & Harmonious UI) & Maintenance Perawatan Sistem',
        category: 'optimization',
        badge: 'UI Refinement & Maintenance',
        items: [
            'Desain ulang layout footer toko agar harmonis dengan tema warna emas/mustard, mengeliminasi kontras warna putih yang menyilaukan pada kartu WhatsApp dengan konsep dark glassmorphism modern.',
            'Penyempurnaan tipografi dan spasi vertikal: menu navigasi bantuan & belanja cepat bebas dari simbol kaku, berganti interaksi hover dot dinamis yang lega.',
            'Pembersihan kalimat redundan pada profil toko serta penyelarasan badge metode pembayaran dan logistik pengiriman 50:50 yang simetris.',
            'Pemeriksaan integritas dependensi npm, audit keamanan dependensi, serta pemeliharaan cache storage multi-proyek.',
            'Pembersihan berkas build usang dan pemeliharaan sinkronisasi penuh pada folder paket distribusi flashdisk & siap pakai.'
        ]
    },
    {
        id: 'log-1-4-0',
        version: 'v1.4.0',
        date: '2026-09-16',
        title: 'Fitur Single Active Admin Session (Auto Kick-out Antar Perangkat) & Firestore Security Rules',
        category: 'feature',
        badge: 'Single Session Security',
        items: [
            'Sistem Single Concurrent Admin Session: membatasi akses CMS Seller hanya dapat aktif di 1 perangkat/browser dalam satu waktu untuk mencegah tabrakan edit data dan kebocoran akses.',
            'Mekanisme Realtime Auto Kick-out: jika admin login dari perangkat baru (misal laptop/desktop), sesi CMS di perangkat lama (misal HP atau browser lain) secara instan ditendang keluar secara aman (<300ms) disertai modal dialog penjelasan nama perangkat yang mengambil alih.',
            'Deteksi perangkat cerdas (Smartphone Android, iPhone, Laptop Windows, Mac, Linux, dll) untuk identifikasi login yang transparan.',
            'Validasi ganda startup sesi (auto-login guard) untuk memastikan sesi lokal yang telah digantikan perangkat lain tidak dapat membuka dashboard tanpa login ulang.',
            'Pembaruan cloud Firestore Security Rules dengan otorisasi sub-koleksi admin_session khusus untuk ADMIN_UID terverifikasi.'
        ]
    },
    {
        id: 'log-1-3-1',
        version: 'v1.3.1',
        date: '2026-09-16',
        title: 'Native Realtime Sync Sub-Koleksi Produk, Rekonsiliasi Multi-Browser & Hardening Rules',
        category: 'bugfix',
        badge: 'Realtime Multi-Device',
        items: [
            'Pemasangan native listener onSnapshot langsung pada sub-koleksi products Firestore sehingga perubahan status produk (aktif/nonaktif/stok) dari admin desktop langsung terdorong seketika (<200ms) ke seluruh HP & browser aktif tanpa reload.',
            'Rekonsiliasi otomatis data produk dari server saat snapshot pertama tiba (initial load), mengeliminasi bug perbedaan tampilan antar browser akibat cache localStorage yang usang.',
            'Penyegaran antarmuka tabel admin reaktif otomatis via deteksi kontainer DOM tanpa terhambat status sesi login.',
            'Pengamanan perbandingan ID produk dengan konversi string eksplisit (id.toString()) pada pencarian indeks array dan event handler onclick.',
            'Optimasi evaluasi kondisi stok pada firestore.rules untuk mencegah type error dan mempercepat validasi transaksi checkout.'
        ]
    },
    {
        id: 'log-1-3-0',
        version: 'v1.3.0',
        date: '2026-09-15',
        title: 'Hotfix Realtime Sync Multi-Perangkat, Eliminasi Stale Cache & Granular Sync',
        category: 'bugfix',
        badge: 'Realtime Sync & Hotfix',
        items: [
            'Perbaikan bug fatal inisialisasi syncAppMeta() dan listener Firestore onSnapshot sehingga perubahan status produk (aktif/nonaktif/stok) di Admin Desktop seketika terupdate live di HP tanpa reload.',
            'Penonaktifan persistentLocalCache IndexedDB yang menyebabkan data produk usang (stale) menolak pembaruan server Firestore.',
            'Optimasi granular sync: penambahan penanganan event product_delete dan pengiriman updatedProductIds pada saveApp() sehingga hemat kuota Firestore hingga 95%.',
            'Penyegaran antarmuka instan pada tombol toggle status aktif/habis produk di tabel admin.',
            'Integrasi konfigurasi Firestore db.settings({ merge: true }) guna mencegah host override warning.',
            'Pembaruan log pembaruan sistem dan sinkronisasi seluruh paket distribusi flashdisk & build siap pakai.'
        ]
    },
    {
        id: 'log-1-2-0',
        version: 'v1.2.0',
        date: '2026-09-15',
        title: 'Maintenance Keamanan, Optimasi Bundle (-68%) & Isolasi Cache Multi-Projek',
        category: 'maintenance', // 'feature' | 'optimization' | 'maintenance' | 'bugfix'
        badge: 'Maintenance & Optimasi',
        items: [
            'Pembersihan celah keamanan dependensi melalui audit paket npm.',
            'Optimasi Vite Rollup code-splitting: modul admin dan cetak dokumen dipisah ke chunk tersendiri, memangkas ukuran bundle storefront utama dari 509 kB ke 163 kB (turun 68%).',
            'Isolasi cache multi-projek pada localStorage untuk mencegah data toko tertukar saat pengujian di localhost.',
            'Percepatan First Contentful Paint (FCP) dan eliminasi peringatan batas ukuran bundle.',
            'Pembaruan berkas siap pakai dan paket flashdisk installer.'
        ]
    },
    {
        id: 'log-1-1-0',
        version: 'v1.1.0',
        date: '2026-09-10',
        title: 'Harmonisasi Warna Token, Desain Vouchers & Kategori Kompak',
        category: 'optimization',
        badge: 'Peningkatan Visual',
        items: [
            'Harmonisasi variabel CSS token warna tema (primary, primary-dark, primary-light) di seluruh komponen.',
            'Penyesuaian tata letak kartu voucher, kategori, brand mitra, dan reward agar lebih padat dan hemat ruang di layar ponsel.',
            'Penyempurnaan navigasi header desktop agar lebih bersih dan minimalis.',
            'Perbaikan urutan CSS view-section untuk mencegah auto-redirect saat me-refresh halaman.'
        ]
    },
    {
        id: 'log-1-0-0',
        version: 'v1.0.0',
        date: '2026-09-01',
        title: 'Peluncuran Sistem Web & POS Kasir Toko Putri Resmi',
        category: 'feature',
        badge: 'Rilis Perdana',
        items: [
            'Rilis resmi platform e-commerce dan kasir point-of-sales (POS) Toko Putri.',
            'Katalog produk interaktif dengan varian harga, grosir, dan spesifikasi lengkap.',
            'Keranjang belanja instan terhubung otomatis ke WhatsApp Checkout.',
            'Dukungan metode pembayaran QRIS Nasional dan Transfer Bank.',
            'Modul cetak struk kasir thermal 58mm/80mm, invoice A4, dan surat jalan.',
            'PWA (Progressive Web App) dengan dukungan mode offline dan installable di HP/PC.'
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
 * @returns {Array} Daftar log terurut dari versi terbaru
 */
export const getCombinedChangelog = (appData) => {
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
    return combined.sort((a, b) => {
        const da = new Date(a.date || '2026-01-01').getTime();
        const db = new Date(b.date || '2026-01-01').getTime();
        if (db !== da) return db - da;
        return compareSemverDesc(a.version, b.version);
    });
};

/**
 * Mendapatkan nomor versi terbaru yang aktif
 * Menjamin tidak pernah tertahan pada versi lama meskipun ada log dinamis atau tanggal kembar
 * @param {Object} appData 
 * @returns {String} Contoh: 'v1.8.5'
 */
export const getLatestVersion = (appData) => {
    const defaultLatest = DEFAULT_CHANGELOG[0]?.version || 'v1.8.5';
    const logs = getCombinedChangelog(appData);
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

