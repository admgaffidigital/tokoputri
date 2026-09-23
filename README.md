# TOKO PUTRI - APLIKASI WEB & POS E-COMMERCE

Aplikasi e-commerce dan manajemen kasir point-of-sales (POS) modern berkinerja tinggi untuk Toko Putri, dirancang khusus dengan antarmuka yang dinamis, kaya estetika, serta fitur lengkap (katalog produk, keranjang belanja, ulasan produk, sistem member poin/reward, nota kasir thermal, nota tempo/piutang, surat jalan, dan invoice A4).

---

## 🛠️ Informasi Pengembang & Hak Cipta
* **Nama Projek**: TOKO PUTRI
* **Dikembangkan & Ditandatangani Oleh**: **Novan Restu Utomo** (Selaku Pengembang Utama dan Developer Asli)

---

## 💰 Lisensi & Ketentuan Pembelian Kode Sumber (Source Code)
* **Status Produk**: Komersial (Diperjualbelikan).
* **Hak Cipta & Developer Asli**: **Novan Restu Utomo**.
* **Ketentuan Penggunaan**: Tema dan kode sumber (*source code*) asli aplikasi ini adalah produk komersial berlisensi. Siapa pun (klien, pemilik toko, maupun distributor bisnis) yang ingin menggunakan, meng-host, atau mendistribusikan aplikasi web ini **wajib membeli kode sumber aslinya secara resmi dan langsung melalui pengembang aslinya: Novan Restu Utomo**.
* **Keamanan & Dukungan**: Dukungan pengembangan, perbaikan bug (*debugging*), dan penambahan fitur lanjutan oleh agen AI Antigravity maupun tim pengembang hanya dijamin legalitasnya untuk pembeli resmi yang terdaftar langsung di bawah lisensi Novan Restu Utomo.

---

## 📁 Struktur Kode & Arsitektur Modular Projek

Projek ini telah dirancang dengan **arsitektur modular bersih** untuk menjaga kode tetap rapi, mudah dirawat, dan cepat saat pengembangan. Pengembang maupun agen AI Antigravity **WAJIB bekerja pada modul masing-masing di `src/modules/`**, bukan menumpuk markup monolitik di `index.html`.

```
├── dist/                          # Hasil kompilasi produksi Vite (siap deploy)
├── 1. HASIL_BUILD_SIAP_PAKE/      # Salinan build produksi bersih
├── PAKET_FLASHDISK/               # Paket distribusi untuk klien/pembeli
│   ├── 1. FILE_SIAP_PAKAI/        # File build siap pakai (drag & drop Netlify)
│   ├── 2. SOURCE_CODE_LENGKAP/    # Salinan source code lengkap
│   └── 3. PANDUAN_DAN_TUTORIAL/   # Panduan instalasi dan tutorial pemakaian
├── src/
│   ├── config/                    # Inisialisasi & konfigurasi (Firebase, db, auth, analytics)
│   │   └── firebase.js
│   ├── core/                      # Fondasi state, tema, router, dan utilitas global
│   │   ├── state.js               # Reactive app state & store defaults
│   │   ├── theme.js               # Palet tema dinamis, mode gelap, & background engine
│   │   ├── router.js              # SPA router & history navigation
│   │   ├── ui.js                  # Dialog UI (toast, confirm, prompt)
│   │   ├── pricing.js             # Logika hitung harga, diskon, & kalkulator ongkir
│   │   └── utils.js               # Helper functions stateless
│   ├── modules/                   # Komponen fitur modular independen
│   │   ├── home/                  # Beranda (banner slider, dynamic sections, footer component)
│   │   ├── catalog/               # Katalog produk, filter, sorting, & modal detail produk
│   │   ├── cart/                  # Keranjang belanja, wishlist, & checkout pesanan
│   │   ├── orders/                # Riwayat pesanan, lacak status, & ulasan produk
│   │   ├── member/                # Poin loyalitas, klaim reward, & voucher promo
│   │   ├── admin/                 # CMS Seller (produk, pesanan, tempo/piutang, keuangan, settings)
│   │   ├── faq/                   # Tanya jawab interaktif pelanggan & moderasi admin
│   │   ├── print/                 # Cetak thermal POS, invoice A4, & surat jalan
│   │   └── storefront/            # Modal cepat (kategori, brand, quick menu, syarat ketentuan)
│   ├── services/                  # Komunikasi data eksternal
│   │   ├── storage.js             # Cache IndexedDB, delta sync, & penghemat kuota Firestore
│   │   ├── upload.js              # Unggah media produk & bukti bayar (Google Apps Script / Drive)
│   │   └── gas.js                 # Endpoint Google Apps Script
│   ├── main.js                    # Entry point aplikasi (orquestrator modul & startup)
│   └── style.css                  # Desain CSS Tailwind & styling tema solid
├── index.html                     # Root mount shell (wadah mount point aplikasi SPA)
├── tailwind.config.js             # Konfigurasi utility classes Tailwind CSS
├── vite.config.js                 # Konfigurasi bundler Vite (port server dev: 3000)
├── postcss.config.js              # Konfigurasi pemrosesan CSS
├── package.json                   # Definisi dependencies & script CLI projek
└── README.md                      # Dokumentasi teknis & kredit pengembang (berkas ini)
```

### ⚠️ Aturan Penting Pengembang:
1. **`index.html` adalah Root Shell**: File `index.html` hanya berfungsi sebagai wadah mount point (misalnya `<div id="storefront-footer-container"></div>` atau `<div id="product-container"></div>`). **Dilarang keras menumpuk markup HTML monolitik ratusan baris di dalam `index.html`**.
2. **Bekerja pada Modul yang Tepat**: Seluruh logika, templat rendering, dan handler fitur harus dikerjakan di dalam sub-folder `src/modules/` yang bersesuaian.
3. **Penyimpanan Data & Quota-Friendly**: Gunakan `src/services/storage.js` untuk interaksi data Firestore agar kuota tetap hemat dan tidak boros get/read.

---

## 🎨 Panduan Konsistensi UI/UX & Tampilan

Aplikasi ini mengusung estetika premium modern yang responsif dan interaktif. Pengembang atau agen AI di masa depan wajib mematuhi panduan desain berikut untuk menjaga konsistensi tampilan:

### 1. Sistem Warna & Tema (Color Palette)
* **Warna Utama (Brand Colors)**:
  * **Emerald/Green (`emerald-500` / `emerald-600`)**: Digunakan untuk elemen bermakna positif, kesuksesan, harga total, dan status bayar **Lunas**.
  * **Slate/Gray (`slate-800` / `slate-900`)**: Digunakan untuk teks utama, judul, latar belakang gelap, header tabel, dan tombol sekunder.
  * **Amber/Yellow (`amber-500` / `amber-600`)**: Digunakan untuk peringatan, ulasan bintang, sistem poin member, dan status **Pre-Order (PO)**.
  * **Rose/Red (`rose-500` / `rose-600`)**: Digunakan untuk pesan eror, tombol hapus, dan status bayar **Belum Lunas/Tempo**.
  * **Pink/Rose Soft (`pink-500` / `pink-50)`)**: Digunakan khusus untuk aksen tema Nota/Transaksi Tempo.

### 2. Efek Visual & Glassmorphism
* **Modal Overlay Backdrop**: 
  Semua modal popup wajib menggunakan overlay blur transparan dengan kelas Tailwind:
  `fixed inset-0 z-[100] flex justify-center items-end sm:items-center bg-slate-900/60 backdrop-blur-sm`
* **Transisi Dinamis**:
  Tombol interaktif harus memiliki transisi kehalusan dan efek pengecilan saat diklik:
  `transition-all active:scale-95 duration-200`
* **Shadow (Bayangan)**:
  Elemen penting diberikan bayangan berwarna halus sesuai aksennya (contoh: `shadow-md shadow-emerald-500/20`).

### 3. Dukungan Mode Gelap (Dark Mode)
* Aplikasi mendeteksi status dark mode dengan kelas `.dark` pada elemen `html` (`document.documentElement.classList.add('dark')`).
* Selalu gunakan kombinasi kelas utility `dark:` pada elemen UI baru (contoh: `bg-white dark:bg-slate-900 text-slate-800 dark:text-white`).

---

## 🧠 Arsitektur Logika & Aliran Data ("Mesin Otak")

Berikut adalah pemaparan logika dan alur data utama yang berjalan di balik layar aplikasi:

### 1. State Management Global
State aplikasi disimpan dalam satu objek utama di `src/main.js` yaitu `appData`. Properti penting:
* `appData.store`: Berisi detail nama toko, slogan, nomor WA, alamat, logo, serta flag pengaturan katalog (`showCategories` dan `showBrands`).
* `cart`: Array yang menampung item belanja aktif di kasir. Setiap item menyimpan informasi `id`, `name`, `qty`, `effectivePrice`, `poTime` (opsional), dan data varian.

### 2. Logika Validasi Pembayaran Kasir (Conditional Validation)
Aturan validasi pengiriman/upload bukti transaksi diatur secara dinamis berdasarkan metode pembayaran terpilih (`needsBukti`):
* **Wajib Upload Bukti Transfer**: Pembayaran melalui **Transfer Bank**, **QRIS**, dan **Tempo** (karena pembayaran uang muka/DP tempo wajib berupa transfer bank).
* **Opsional (Tanpa Bukti)**: Pembayaran melalui **Kasir (Cash)** dan **COD** (Cash on Delivery).
* Penayangan input upload dikendalikan oleh fungsi `togglePaymentDetails()`.

### 3. Logika Produk Pre-Order (PO) & Pengiriman Gabungan
* **Status Pre-Order**: Produk yang memiliki properti `poTime` terisi akan dianggap sebagai produk pre-order. Properti ini otomatis diikutkan saat item dimasukkan ke keranjang belanja (`cart.push`).
* **Pengiriman Gabungan (Split-Shipment)**: Pembeli diperbolehkan mencampur produk PO dan Non-PO dalam satu nota belanja.
* **Biaya Pengiriman**: Catatan sistem secara eksplisit menerangkan bahwa produk berlabel PO akan dikirimkan menyusul sesuai estimasi waktu di labelnya, **tanpa dikenakan biaya pengiriman tambahan**.
* **Integrasi Cetak**: Catatan aturan pengiriman PO ini secara dinamis disisipkan pada struk cetak thermal (`openReceiptPreview`), nota cicilan tempo (`previewTempoReceipt`), invoice A4, dan surat jalan (`openDocPreview`).

### 4. Sistem Kartu Member Digital VIP 3D & Gamifikasi (v1.8.4)
* **Visual Mewah Layaknya Kartu Fisik**: Dilengkapi EMV Smart Chip emas vektor SVG, logo resmi, efek *embossed text* timbul untuk nama & nomor kartu virtual, serta status keanggotaan aktif.
* **Animasi 3D Flip Dua Sisi**: Kartu dapat dibalik secara interaktif untuk melihat sisi belakang yang memuat pita magnetik (*magnetic stripe*), strip tanda tangan verifikasi, dan **Barcode Kasir Vektor (Code128)** yang dapat dipindai oleh scanner barcode fisik kasir toko.
* **Gamifikasi 4 Tingkat Tier**: Sistem otomatis mengelompokkan pelanggan berdasarkan perolehan poin:
  - 🥉 **Bronze Member** (0 - 99 Poin)
  - 🥈 **Silver Member** (100 - 499 Poin)
  - 🥇 **Gold Member** (500 - 999 Poin)
  - 💎 **Platinum VIP** (1000+ Poin)
* **Simpan ke Galeri HP (Download PNG HD)**: Pelanggan dapat mengunduh kartu member beresolusi tinggi (skala 3x Retina) ke galeri perangkat HP/komputer mereka.
* **Auto-Deteksi di Checkout**: Saat pelanggan menginput nomor WA di keranjang belanja, sistem otomatis memunculkan miniatur kartu member dengan saldo poin dan tier aktif.
* **Sinkronisasi Poin Otomatis & Persistensi Sesi**: Setiap pesanan otomatis mengkreditkan poin ke Firestore, memperbarui saldo kartu member seketika, menginvalidasi cache lama, dan memulihkan sesi pelanggan secara persisten.

---

## 🚀 Perintah CLI Pengembangan & Pemeliharaan

Gunakan perintah Node.js berikut dalam terminal projek untuk pemeliharaan harian, pengujian, dan rilis:

* **Menjalankan Dev Server (Lokal)**:
  ```bash
  npm run dev
  ```
  *Membuka server pengembangan lokal di browser.*

* **Melakukan Build Produksi Web**:
  ```bash
  npm run build
  ```
  *Mengompilasi dan meminifikasi semua aset ke dalam folder `/dist`.*

* **Sinkronisasi Total Seluruh Sistem (Rekomendasi Pemeliharaan)**:
  ```bash
  npm run sync
  ```
  *Perintah otomatis 1-langkah yang menjalankan build web, menyinkronkan folder `dist/` ke `1. HASIL_BUILD_SIAP_PAKE/`, menyinkronkan paket `PAKET_FLASHDISK/`, dan memperbarui platform `android/` secara instan.*

* **Sinkronisasi Platform Android**:
  ```bash
  npm run cap:sync
  ```
  *Menyinkronkan konfigurasi Capacitor dan aset web terbaru ke dalam proyek Android native.*

---

## 📱 Platform Android Native & Alur Kompilasi Otomatis (CI/CD)

Aplikasi telah dilengkapi dengan fondasi **Capacitor 8 Android Native**:
* **File Konfigurasi**: [capacitor.config.json](file:///c:/TOKO%20PUTRI/capacitor.config.json)
* **Paket ID**: `com.tokoputri.app`
* **Arsitektur**: *Live Cloud Auto-Sync* yang terhubung ke server produksi Vercel (`https://tokoputri-three.vercel.app`).
* **Kompilasi Cloud Otomatis (.github/workflows/build-apk.yml)**: Setiap kali ada kode yang di-push ke branch `main`, server GitHub Actions (Node.js 22 & Java 21) akan secara otomatis meracik file installer Android terbaru (`TokoPutri.apk`).
* **Fitur Hardware**: Dilengkapi integrasi kamera barcode scanner, GPS geolokasi, printer kasir thermal POS (RawBT & ESC/POS), serta ekspor/bagikan dokumen PDF.

---

## 📋 Riwayat Pembaruan (Changelog)

### v1.9.7 — Penyempurnaan Grid POS Kasir: CSS Anti-Collapse System, Konsistensi Brand Tema, Dark Mode Penuh (23 Sep 2026)

#### 🃏 Sistem CSS Anti-Collapse Kartu Grid (Solusi Definitif)
- **Teknik `padding-top:100%` Paling Robust**: Mengganti `aspect-ratio: 1/1` inline yang rentan di-override dengan teknik `::before { padding-top: 100% }` — standar industri tertua dan paling kompatibel yang menjamin kotak gambar selalu berbentuk 1:1 tanpa pernah collapse menjadi pil tipis, bahkan saat gambar belum dimuat.
- **CSS Class System Terdedikasi (`src/style.css`)**: Seluruh komponen kartu produk POS kini menggunakan class CSS dedicated (`.pos-product-card`, `.pos-img-box`, `.pos-img-inner`, `.pos-badge`, `.pos-card-footer`, dll.) — bukan campuran inline Tailwind yang mudah hilang saat Purge CSS.
- **Mode List Thumbnail Stabil**: Thumbnail 52px di mode list kini menggunakan `.pos-list-thumb` dengan `height: 52px` fixed — tidak bisa collapse dalam kondisi apapun.

#### 🎨 Konsistensi Warna Brand Tema (Zero Hardcode)
- **Badge GROSIR Pakai `var(--color-primary)`**: Badge GROSIR yang sebelumnya hardcode warna `amber-500` kini otomatis mengikuti warna tema brand toko (`var(--color-primary)`) — jika warna brand toko berganti, badge ikut berubah tanpa perlu edit manual.
- **Hover, Active, In-Cart State di CSS**: Animasi hover (`translateY(-2px)`, shadow naik) dan active state (`scale(0.98)`) kini terdefinisi di CSS class, tidak bergantung pada Tailwind class yang bisa tidak ter-generate di build produksi.

#### 🌙 Dark Mode Penuh Komponen Kartu POS
- **Aturan Dark Mode Lengkap**: Ditambahkan `.dark .pos-product-card`, `.dark .pos-img-box`, `.dark .pos-img-placeholder`, `.dark .pos-list-item`, dan seluruh turunannya — tampilan POS Kasir kini sepenuhnya elegan di mode gelap.

---

### v1.9.6 — Pembaruan Tampilan Visual POS Kasir: Perbaikan Keruntuhan Kartu Produk, Mode Grid & List, Placeholder Visual & Harmonisasi Tema (22 Sep 2026)

#### 🖼️ Perbaikan Visual Total Kartu Produk POS (Anti-Collapse)
- **Garansi Rasio Gambar Presisi 1:1**: Memperbaiki keruntuhan gambar dan kartu produk yang sebelumnya menciut menjadi kapsul datar tipis — kini dijamin rasio 1:1 (`aspect-ratio: 1 / 1`) dengan batas ketinggian minimum 120px dan utilitas CSS eksplisit di `src/style.css`.
- **Tata Letak Badge Rapi & Non-Overlapping**: Badge `VARIAN` dan `GROSIR` dipindahkan rapi ke dalam kotak foto dengan posisi floating glassmorphism, tidak lagi menumpuk dan menutupi nama barang atau harga produk.
- **Placeholder Visual Elegan untuk Produk Tanpa Gambar**: Produk tanpa foto (paku, semen, dll) kini menampilkan bingkai placeholder elegan dengan ikon kotak dan kategori produk yang informatif, bukan area kosong atau rusak.

#### 🎛️ Pengalih Mode Tampilan (Grid Foto vs List Baris Kompak)
- **Mode Grid Foto (⊞)**: Tampilan visual kartu foto produk lega (2 kolom di mobile, 3-5 di desktop) dengan tombol aksi cepat.
- **Mode List Baris Kompak (☰)**: Tampilan daftar baris ramping dengan thumbnail 54px, nama produk, kategori, harga jelas, dan tombol tambah cepat — sangat cepat dan efisien untuk kasir saat melayani antrean panjang.
- **Penyimpanan Preferensi Tampilan**: Pilihan mode Grid/List tersimpan otomatis di `localStorage` per-perangkat.

#### 🎨 Harmonisasi Header POS & Visual Keranjang
- **Harmonisasi Warna Brand Toko**: Header Storefront POS kini memakai warna tema keemasan Toko Putri (`var(--color-primary)`), selaras dengan tema keseluruhan aplikasi toko.
- **Thumbnail Visual di Keranjang**: Setiap item di keranjang kasir kini menampilkan gambar thumbnail mini 40px untuk verifikasi barang yang cepat dan akurat.

---

### v1.9.5 — Redesain Modern POS Kasir Mobile-First: Floating Cart Bar, Bottom Sheet Keranjang, Quick-Cash & Audio Feedback (22 Sep 2026)

#### 📱 Redesain Mobile-First & Pengalaman Layar Sentuh Presisi
- **Katalog 2-Kolom Lega di Smartphone**: Mengganti tata letak 60:40 yang sempit menjadi katalog grid 2-kolom yang luas di HP (`grid-cols-2`), 3-5 kolom di tablet dan desktop, dengan foto tajam, badge varian/grosir, dan tombol `+` sentuh melingkar.
- **Floating Sticky Cart Bar di HP**: Bilah keranjang mengambang cerdas di dasar layar HP yang otomatis muncul secara halus saat keranjang berisi barang, menampilkan jumlah item, total belanja, dan tombol akses cepat 1-sentuhan.
- **Bottom Sheet Keranjang (Slide-up Drawer)**: Membuka keranjang kasir dalam lembar geser bawah yang nyaman diakses jempol satu tangan, lengkap dengan kontrol kuantitas `[−] qty [+]`, input diskon per-item, dan tombol langsung ke proses pembayaran.
- **Tata Letak Split-Panel Desktop Leluasa**: Di layar desktop (komputer kasir), katalog produk menempati 63% ruang dan panel penagihan/keranjang menempati 37% ruang di samping kanan secara berdampingan tanpa scroll ganda.

#### 💵 Transaksi Cepat Kasir: Quick-Cash & Audio Sintetis
- **Tombol Uang Cepat (Quick-Cash)**: Tombol instan pecahan uang tunai (`Uang Pas`, `Rp 10.000`, `20.000`, `50.000`, `100.000`, `200.000`, `500.000`) untuk input pembayaran cepat 1-klik tanpa repot mengetik.
- **Indikator Visual Kembalian Cerdas**: Indikator status kembalian otomatis berubah hijau jika uang mencukupi atau merah jika uang masih kurang, dengan proteksi tombol selesai transaksi.
- **Audio Beep Sintetis Kasir**: Umpan balik audio beep kasir taktil menggunakan Web Audio API (zero external asset) saat scan barcode scanner USB, tambah produk, atau penambahan kuantitas.
- **Integrasi Hardware Back Button Android**: Dialog pembayaran dan drawer keranjang terdaftar di sistem riwayat modal, sehingga tombol Back fisik menutup dialog satu per satu secara aman tanpa keluar dari mode kasir.

### v1.9.4 — Mode POS Kasir Storefront Mandiri, Akun Kasir CMS, Multivarian & Harga Grosir (22 Sep 2026)

#### 🏪 Mode Kasir Mandiri di Storefront & Header Toggle
- **Akses Langsung dari Storefront**: Ikon register kasir (`fa-cash-register`) disematkan di header toko sebelah keranjang belanja dengan status online (dot hijau berdenyut).
- **Deteksi Akun Otomatis**: Ikon kasir hanya muncul jika terdapat akun kasir yang terdaftar di toko, menjaga antarmuka tetap bersih bagi pembeli biasa.
- **Sistem Login Kasir Mandiri**: Kasir masuk menggunakan modal dialog login khusus kasir (Email/Username & Password). Sesi kasir mandiri dan terisolasi dari login admin toko.

#### 👥 Manajemen Akun Kasir di Admin CMS
- **Menu Baru CMS "Akun Kasir"**: Administrator toko dapat menambah, mendaftarkan, mengaktifkan/menonaktifkan, dan menghapus akun akses kasir dengan mudah.
- **Kontrol Hak Akses**: Admin menentukan nama kasir, email login, dan password yang dienkripsi aman.

#### 🎨 Penjualan Multivarian & Harga Grosir di POS
- **Sheet Pilih Varian Interaktif**: Produk yang memiliki varian memunculkan drawer pilihan opsi varian lengkap dengan gambar, harga dinamis, status stok, dan tombol tambah cepat.
- **Kalkulasi Grosir Bertingkat Otomatis**: Sistem kasir otomatis menghitung dan menerapkan potongan harga grosir bertingkat saat kuantitas memenuhi syarat minimal.

#### 📱 UI/UX Responsif Anti-Jomplang (Mobile, Tablet, Desktop)
- **Split-Panel Layar Lebar**: Panel kiri katalog produk grid dan panel kanan keranjang transaksi aktif untuk monitor komputer & tablet.
- **Tab Navigasi Mobile Ergonomis**: Tab Katalog dan Tab Keranjang kasir dengan sticky footer yang ramah sentuhan jempol di smartphone.
- **Keamanan Firestore Rules**: Proteksi ketat sub-koleksi `cashier_accounts` (admin-only write) dan koleksi `pos_transactions` (admin + authenticated cashier).

---

### v1.9.3 — Fitur POS Kasir Terintegrasi (22 Sep 2026)
- **Modul Kasir POS**: Transaksi langsung, barcode USB scanner, diskon per item & global, pelanggan umum/member/tempo, cetak struk thermal, rekap omset harian, dan void transaksi.

---

### v1.9.2 — Geser Urutan Produk, Performa Core Web Vitals & SEO (21 Sep 2026)

#### 🔀 Geser & Atur Urutan Produk (Drag & Drop Reorder)
- **Geser Kartu Produk Fleksibel**: Admin dapat menahan dan menggeser (drag & drop) kartu produk untuk menentukan posisi tampil di etalase pembeli. Mendukung gesture sentuhan HP maupun mouse PC.
- **Tombol Naik/Turun ▲▼ & Pindah Cepat**: Setiap produk dilengkapi tombol panah naik/turun instan serta badge urutan yang dapat diklik untuk melompat langsung ke posisi nomor tertentu.
- **Rapikan per Kategori Otomatis**: Tombol 1-klik untuk mengelompokkan produk sejenis secara berdekatan tanpa perlu digeser manual satu per satu.
- **Menu Urutkan Cepat**: Pilihan pengurutan otomatis: Nama A-Z, Nama Z-A, Harga Termurah, Harga Termahal, dan Reset Urutan Terbaru.
- **Sinkronisasi Real-Time**: Perubahan urutan langsung tersimpan di Cloud Firestore dan tercermin ke storefront pembeli secara instan.

#### 🔐 Verifikasi Kepemilikan Domain Google Search Console
- Ditambahkan file verifikasi HTML `public/google1cca8652526fd3bf.html` di root domain.
- Ditambahkan meta tag `google-site-verification` di `index.html` sebagai verifikasi cadangan.
- `vercel.json` diperbarui: URL `google*.html` kini dikecualikan dari SPA rewrite agar dapat diakses langsung sebagai file statis.

#### ⚡ Optimasi Performa Core Web Vitals
- **FCP/LCP lebih cepat**: Splash screen delay dihapus — `hLoad()` kini dipanggil langsung tanpa `setTimeout`.
- **Firestore paralel**: `Promise.all()` digunakan untuk memuat `cms_data`, `products`, dan `rewards` secara bersamaan — menghemat waktu roundtrip jaringan.
- **Font Awesome non-blocking**: Tambah deklarasi `font-display: swap` di `style.css` agar teks tidak terblokir saat font ikon dimuat.
- **Banner pertama prioritas tinggi**: Banner `idx === 0` kini menggunakan `loading="eager"`, `fetchpriority="high"`, `decoding="sync"`, dan ukuran gambar dioptimalkan ke `w600-rw`.
- **Logo CDN sizing**: Logo toko dari Google Drive kini auto-append `=w200-rw` untuk penyajian gambar berukuran tepat.
- Hapus `setTimeout` redundan di blok `finally` Firestore.

#### 🐛 Perbaikan Bug & Stabilitas Banner
- **Banner `idx is not defined`**: Memperbaiki `ReferenceError: idx is not defined` pada rendering elemen banner dan kontrol video/audio banner di `src/modules/home/sections.js`.

#### 🚀 Optimasi PageSpeed Lanjutan
- **Modular Chunk Splitting**: Memisahkan bundle `module-member` (64KB) dan `module-faq` (30KB) secara dinamis, merampingkan ukuran bundle `index.js` dari 194KB menjadi 127KB (−34%).
- **Dukungan WebP CDN Menyeluruh**: Fungsi `getOptImg` diperluas untuk semua domain `googleusercontent.com` dengan parameter `-rw` untuk konversi format gambar WebP yang lebih ringan.
- **Preconnect CDN**: Menambahkan directive `preconnect` untuk `cdnjs.cloudflare.com` dan `dns-prefetch` untuk `googleapis.com` pada `index.html` guna mempercepat handshake TLS/DNS.
- **Responsive Image Sizes**: Gambar produk grid dan list kini dilengkapi atribut `sizes` (`(max-width: 640px) 45vw, 240px` dan `96px`) sehingga browser hanya memuat dimensi gambar sesuai kebutuhan layar.

#### ♿ Aksesibilitas (a11y)
- Link footer tanpa `href` kini dilengkapi `href="javascript:void(0)"` dan `role="button"` sesuai standar HTML aksesibilitas.

#### 🎯 Eliminasi Total CLS (Cumulative Layout Shift 0.835 → <0.05)
- **Pre-rendered Skeleton Layout**: Container banner, kategori, brand, dan produk kini memiliki skeleton `animate-pulse` dengan dimensi tetap (`min-h-[190px]`, `min-h-[44px]`, `min-h-[72px]`, `min-h-[400px]`) sehingga layout tidak melompat saat data Firestore masuk.
- **Dimensi Gambar Eksplisit**: Semua elemen `<img>` utama kini memiliki atribut `width` dan `height` (logo: 48×48, banner: 240×140, grid produk: 300×300, list produk: 96×96) agar browser dapat mengalokasikan ruang sebelum gambar terunduh.
- **Eliminasi Geseran Scrollbar**: Ditambahkan `html { overflow-y: scroll; }` di `style.css` agar lebar viewport tidak berubah saat halaman memanjang.

#### 🚀 Lazy-Loading Modul Admin Seller CMS
- **Dynamic Import Admin Bundle (510 KB)**: Modul admin CMS `module-admin` (dahulu di-import statis sejak awal) kini dimuat secara dinamis melalui `import()` hanya saat admin login atau membuka rute admin (`ensureAdminLoaded()`).
- **Bersih dari Preload Admin**: Dikonfigurasi `modulePreload.resolveDependencies` di `vite.config.js` sehingga `<link rel="modulepreload">` di `index.html` tidak lagi menyertakan chunk admin, cetak nota, member, FAQ, dan analytics — menghemat bandwidth awal pembeli.


---

## 📝 Catatan Pemeliharaan Agen AI & Developer
1. **Satu Perintah untuk Semua**: Setiap kali selesai memodifikasi kode atau modul, cukup jalankan `npm run sync` agar seluruh folder distribusi, flashdisk, dan Android langsung tersinkronisasi secara otomatis.
2. **Kompilasi Bersih**: Selalu pastikan `npm run build` berjalan tanpa eror sebelum melakukan git push.
3. **Konfigurasi Database Multi-Toko**: Penggantian kredensial Firebase dapat dilakukan langsung melalui `public/config.js` tanpa harus mengompilasi ulang kode sumber.
4. **Verifikasi Domain**: File `public/google1cca8652526fd3bf.html` wajib tetap ada — jangan dihapus atau di-exclude dari `.gitignore`. Diperlukan Google Search Console.
