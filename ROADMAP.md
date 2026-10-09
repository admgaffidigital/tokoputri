# 🗺️ ROADMAP STRATEGIS PENGEMBANGAN SISTEM TOKO PUTRI
> **Platform Ekosistem Kasir (POS), Gudang Multi-Lokasi, & Finansial Enterprise**  
> *Spesialisasi Ritel Bahan Bangunan, Alat Teknik, Kelistrikan & Perkakas*  
> **Target Baseline Saat Ini:** `v1.14.0` | **Target Jangka Panjang:** `v2.0.0`
 
---
 
## 📌 Visi & Orientasi Pengembangan
Ekosistem **TOKO PUTRI (Putri Utama Teknik)** telah mencapai kematangan arsitektur di tingkat *Enterprise Retail* pada versi `v1.13.2` dengan integrasi hulu-ke-hilir:
- Kasir POS responsif berkecepatan tinggi dengan Dual-Engine Scanner Kamera, Barcode Vektor Code 128, dan Presisi Kuantitas Desimal untuk barang curah/kiloan.
- Alat Kalkulator Estimator Material Bangunan interaktif (Cat & Plafon, Keramik & Granit, Pasangan Dinding Hebel/Bata).
- Manajemen Retur Barang & RMA Terpadu (Customer Sales Return & Vendor Purchase Return) dengan dukungan produk multi-varian, pemilih varian dinamis, HPP spesifik varian, alokasi karantina rusak, rekonsiliasi kas laci, serta Universal Native Card View & Dual-View responsif.
- Penilaian persediaan akurat berstandar akuntansi PSAK dengan FIFO (*First-In, First-Out*) berbasis batch kulakan.
- Inventori dua lokasi independen (*Floor-First Deduction*: Rak Toko vs Gudang Cadangan).
- Buku Kas Laci Kasir (*Cash Movement*), Rekap Shift X/Z Report, dan Manajemen Piutang Tempo (AR Ledger).
- Cetak label barcode mandiri (Thermal Roll 40x30, 50x30, Continuous Roll, & Kertas A4 Grid).
- Manajemen Logistik, Pengiriman Proyek, Surat Jalan (DO) Barcode Code 128, Verifikasi Tanda Tangan Digital Mandor, dan UI Native Mobile App Touch-Friendly berbalut tema toko dinamis.
 
Dokumen ini menetapkan **Master Plan Roadmap Strategis** berikutnya untuk menjawab kebutuhan nyata operasional toko bahan bangunan dan alat teknik di lapangan, meningkatkan efisiensi logistik proyek, mempercepat perputaran kas, serta memperkuat kepuasan pelanggan ritel maupun kontraktor.
 
---
 
## 🚀 FASE 1: Keluwesan Transaksi Eceran & Daya Tarik Konsumen (SELESAI - v1.11.0)
> **Fokus Utama:** Fleksibilitas kasir melayani barang curah/kiloan dan modul interaktif pikat pembeli.  
> **Status:** Selesai & Terverifikasi di `v1.11.0`
 
### 1.1 Dukungan Kuantitas Desimal & Barang Curah Kiloan (*Decimal Precision POS*)
* **Latar Belakang:** Penjualan bahan bangunan sarat dengan barang curah/kiloan (misal: paku 0.5 kg, kawat bendrat 1.25 kg, kabel 2.5 meter, thinner 0.75 liter).
* **Fitur & Spesifikasi:**
  - [x] Input kuantitas keranjang POS mendukung nilai desimal (cth: `0.5`, `1.25`, `2.75`) tanpa pembulatan otomatis ke integer.
  - [x] Validasi stepper qty (+ / -) yang adaptif terhadap tipe satuan (pcs = step 1, kg/meter = step 0.25 / 0.5).
  - [x] Perhitungan subtotal, diskon member, dan pemotongan stok persediaan FIFO mendukung kalkulasi floating point aman (`roundToDecimals` & `Math.round`).
  - [x] Cetak struk belanja thermal menampilkan kuantitas desimal rapi (cth: `0.5 kg @ Rp 24.000 = Rp 12.000`).
 
### 1.2 Kalkulator Estimator Bahan Bangunan Interaktif (*Interactive Material Estimator*)
* **Latar Belakang:** Konsumen/mandor sering bertanya estimasi bahan yang dibutuhkan untuk proyek renovasi.
* **Fitur & Spesifikasi:**
  - [x] **Kalkulator Cat Tembok & Plafon**:
    - Input: Panjang dinding $\times$ Tinggi dinding (m²), jumlah layer (1x lapis / 2x lapis standar / 3x lapis warna gelap).
    - Output: Rekomendasi kaleng kecil (2.5 kg/liter) atau pail besar (20 kg/liter) + estimasi cat dasar alkali sealer.
  - [x] **Kalkulator Keramik & Granit**:
    - Input: Luas lantai (P $\times$ L m²), ukuran keramik (40x40, 50x50, 60x60), margin potongan/sudut (10%).
    - Output: Jumlah dus keramik yang dibutuhkan + estimasi sak semen instan tile adhesive & pengisi nat.
  - [x] **Kalkulator Pasangan Dinding (Bata & Semen)**:
    - Input: Luas dinding bata (m²).
    - Output: Estimasi bata merah / hebel ringan dan kebutuhan sak semen mortar.
  - [x] **Aksi 1-Klik**: Tombol *"Tambahkan Semua Bahan ke Keranjang"* langsung mengisi daftar belanja kasir / etalase online, salin rincian ke clipboard, & konsultasi WhatsApp Resmi.
 
---
 
## 📦 FASE 2: Manajemen Retur & Rekonsiliasi Inventori (RMA Engine) (SELESAI - v1.12.2)
> **Fokus Utama:** Ketertiban penukaran barang, klaim cacat supplier, dan akurasi stok fisik.  
> **Status:** Selesai & Terverifikasi di `v1.12.2`
 
### 2.1 Modul Retur Penjualan (*Customer Sales Return*)
* **Latar Belakang:** Kasus tukang kelebihan beli fitting pipa, salah ukuran kran, atau sisa semen proyek.
* **Fitur & Spesifikasi:**
  - [x] Form Retur Penjualan berbasis pencarian Nomor Struk Kasir / Order ID.
  - [x] Pemilihan item dan kuantitas barang yang dikembalikan dengan input alasan retur (Kelebihan Proyek, Salah Beli Ukuran, Cacat Fisik).
  - [x] Deteksi otomatis item bervarian dari nota belanja, badge varian di rincian retur, dan restorasi stok spesifik per varian.
  - [x] 3 Opsi Penyelesaian Retur:
    1. **Pengembalian Tunai (*Cash Refund*)**: Memotong buku kas laci kasir secara otomatis.
    2. **Tukar Barang Sejenis / Barang Lain**: Selisih harga diperhitungkan di nota baru kasir.
    3. **Saldo Deposit / Store Credit**: Disimpan sebagai saldo belanja member yang dapat dipakai pada transaksi berikutnya.
  - [x] Restorasi otomatis ke kartu stok persediaan (bisa memilih dikembalikan ke Rak Toko atau Karantina Rusak).
  - [x] Cetak Nota Retur Penjualan resmi A4 / Struk Termal Retur.
 
### 2.2 Modul Retur Pembelian ke Supplier (*Vendor Purchase Return*)
* **Latar Belakang:** Pengembalian barang cacat/rusak pabrik (kaleng cat bocor, saklar mati) ke distributor/supplier.
* **Fitur & Spesifikasi:**
  - [x] Formulir Nota Retur Pembelian terhubung ke data Rekanan Supplier dan riwayat PO Kulakan.
  - [x] **Pemilih Varian Dinamis (*Interactive Variant Picker*)**: Otomatis mendeteksi produk bervarian dan menyuguhkan opsi varian dengan live stok per lokasi dan HPP varian.
  - [x] **Dukungan Retur dari Karantina Rusak**: Pilihan alokasi pengambilan barang dari Karantina Rusak (`damagedStock`), Rak Toko, atau Gudang Cadangan.
  - [x] Otomasi pemotongan Saldo Hutang Dagang (*Accounts Payable*) ke supplier terkait berdasarkan HPP spesifik varian.
  - [x] Pencatatan jurnal pembalik HPP dan histori mutasi barang keluar di kartu stok.
  - [x] Cetak Surat Pengembalian Barang ke Supplier resmi A4 dengan tanda tangan serah terima.
 
---
 
## 🚚 FASE 3: Logistik, Pengiriman Proyek & Surat Jalan (Delivery Management) (SELESAI - v1.13.1)
> **Fokus Utama:** Penataan alur distribusi barang berat/bervolume ke lokasi proyek & antarmuka native app.  
> **Status:** Selesai, Terverifikasi & UI Native App Harmonis di `v1.13.1`
 
### 3.1 Dokumen Surat Jalan Resmi (*Delivery Order / DO*)
* **Fitur & Spesifikasi:**
  - [x] Penerbitan Surat Jalan ber-barcode Code 128 terpisah dari Struk Kasir (`DO-YYMM-XXXXX`).
  - [x] Format cetak standar logistik proyek (Kertas A4 / rangkap) memuat: Alamat Proyek/Drop Point, Kontak Mandor, Catatan Bongkar, Tabel Checklist Muatan, dan 4 kolom tanda tangan.
  - [x] Manajemen Armada: Penugasan jenis armada (Mobil Pick-up L300, Truk Engkel, Motor Roda Tiga Toko, dsb) dan nama supir/helper beserta kontak WhatsApp.
 
### 3.2 Pelacakan Status Pengiriman Real-Time & Tanda Tangan Mandor
* **Fitur & Spesifikasi:**
  - [x] Siklus status pengiriman: `Menunggu Muat (Pending Dispatch)` $\rightarrow$ `Dalam Perjalanan (Out for Delivery)` $\rightarrow$ `Terkirim (Delivered)`.
  - [x] Konfirmasi serah terima di aplikasi: Input nama penerima di proyek, catatan kondisi muatan, dan kanvas tanda tangan digital di layar sentuh (*Interactive Touch Signature Pad*).
  - [x] Otomasi pesan WhatsApp pengiriman rute armada ke supir dan notifikasi keberangkatan ke mandor/pemesan proyek.
 
### 3.3 Transformasi Desain Native App & Harmonisasi Tema Toko (v1.13.1)
* **Fitur & Spesifikasi:**
  - [x] **Grid Kartu Armada Sentuh (*Touch Fleet Cards Grid*)**: Menggantikan dropdown `<select>` web jadul dengan 6 kartu armada interaktif (Pick-up, Truk Engkel, Truk Dobel, Roda Tiga, Ekspedisi Luar, Ambil Mandor) ber-border tema toko.
  - [x] **Checklist Muatan Tile Interaktif (*Zero HTML Table*)**: Mengeliminasi tabel kaku di smartphone, diganti dengan kartu item touch-friendly 1-ketukan, squircle checkbox tema toko, kuantitas kapsul, chip varian, counter real-time, dan tombol Pilih Semua.
  - [x] **Fixed Pinned Bottom Action Bar**: Tombol aksi utama (Tutup, Cetak A4, WA Mandor, Simpan) dipin melayang di bawah layar sentuh (thumb-friendly).
  - [x] **Segmented Status Stepper**: Stepper 3 tahap bertema toko (`var(--color-primary)`) berpadu kanvas tanda tangan sentuh yang lapang dan collapsible barcode drawer.

### 3.4 Resolusi Tombol Anti-Gepeng & Ergonomi Detail Pengiriman (v1.13.2)
* **Fitur & Spesifikasi:**
  - [x] **Eliminasi Tombol Gepeng (*Anti-Squash Buttons*)**: Menghapus `flex-1` dalam layout vertikal (`flex-col`) pada tombol *Kelola Pengiriman & DO* dan *Cetak DO A4*, menggantikannya dengan `w-full sm:flex-1`, `h-11` (44px standar Apple/Google), `py-2.5 px-4`, serta `shrink-0`.
  - [x] **Proteksi Global `.btn-native-action`**: Menambahkan `min-height: 2.5rem;` dan `flex-shrink: 0;` di `src/style.css` agar tombol sentuh tidak pernah mengecil di bawah 40px dalam layout flexbox apa pun.
  - [x] **Perapian Badge Status Pengiriman**: Menambahkan `shrink-0 whitespace-nowrap` sehingga badge status *MENUNGGU MUAT* tidak terlipat menjadi 2 baris sempit di layar ponsel.
  - [x] **Ikon Vektor Valid**: Memperbarui ikon dari `fa-truck-gear` ke `fa-truck-fast text-sm` resmi FontAwesome.

---

## 🏷️ FASE 4: Multi-Satuan Bertingkat & Harga Grosir Fleksibel (UOM Hierarchy) (SELESAI - v1.14.0)
> **Fokus Utama:** 1 Master Barang dapat dijual dalam satuan kemasan besar (Dus/Roll/Sak) maupun eceran.  
> **Status:** Selesai & Terverifikasi 100% di `v1.14.0`

### 4.1 Master Satuan Bertingkat (*Unit of Measure Conversion*)
* **Fitur & Spesifikasi:**
  - [x] Definisi Satuan Terkecil / Dasar (*Base UOM*) vs Satuan Kemasan (*Packaging UOM*):
    - Contoh: Kabel $\rightarrow$ Satuan Dasar: `Meter`, Satuan Kemasan: `Roll` (Konversi: 1 Roll = 100 Meter).
    - Contoh: Keramik $\rightarrow$ Satuan Dasar: `Keping`, Satuan Kemasan: `Dus` (Konversi: 1 Dus = 6 Keping).
    - Contoh: Baut $\rightarrow$ Satuan Dasar: `Pcs`, Satuan Kemasan: `Kotak` (Konversi: 1 Kotak = 100 Pcs).
    - Contoh: Semen $\rightarrow$ Satuan Dasar: `Kg`, Satuan Kemasan: `Sak` (Konversi: 1 Sak = 50 Kg).
  - [x] **Multi-Units Builder di Admin CMS Produk**: Input nama satuan kemasan, rasio konversi pengali ke satuan dasar, harga jual kemasan, barcode kemasan dus/roll, dan HPP kemasan ekuivalen.
  - [x] **Selector Satuan Interaktif di Kasir POS (*UOM Pill Selector*)**: Kasir dapat memilih satuan `Roll` atau `Meter` langsung dari baris keranjang kasir (`posCart`) dengan konversi harga dan subtotal otomatis.
  - [x] **Kalkulasi Pemotongan Stok Aktual**: Pengurangan stok fisik persediaan (Rak Toko, Gudang Cadangan, dan Tiket Batch FIFO) selalu akurat mengacu ke satuan dasar terkecil di gudang (`qty * unitMultiplier`).
  - [x] **Pilihan Satuan Kemasan di Modal Detail Produk**: Etalase web menampilkan ringkasan satuan kemasan dan harga paket untuk kemudahan kontraktor/proyek.

### 4.2 Tier Harga Grosir Bertingkat (*Tiered Wholesale Pricing*) & Proteksi Margin HPP
* **Fitur & Spesifikasi:**
  - [x] Aturan harga grosir otomatis (Cth: Beli 1-9 meter @ Rp 8.000, Beli $\ge$ 10 meter @ Rp 7.200, Beli 1 Roll @ Rp 680.000).
  - [x] **Proteksi Margin HPP (*HPP Negative Margin Guard*)**:
    - Sistem memberi indikator peringatan visual real-time di form admin dan keranjang kasir jika harga grosir atau harga kemasan mendekati atau berada di bawah HPP modal barang.
    - Pembatasan diskon per-item agar total transaksi tidak pernah berada di bawah modal HPP FIFO toko.

### 4.3 Integrasi Barcode Scanner Kemasan (*Packaging Barcode Scan*)
* **Fitur & Spesifikasi:**
  - [x] Pencocokan Barcode Khusus Kemasan pada Hardware Laser Reader, Kotak Pencarian POS (`handlePOSSearchKeydown`), dan Universal Camera Scanner HP (`Html5Qrcode`).
  - [x] Otomasi Penambahan Item POS: Memindai barcode kardus/dus/roll langsung memasukkan produk ke keranjang kasir dalam satuan kemasan terkait secara instan tanpa perlu klik manual.
  - [x] Test Suite Otomatis: `test-uom-and-wholesale.mjs` (24 skenario uji lulus 100%).

### 4.4 Harmonisasi UI/UX Native App & Proteksi Global Anti-Gepeng (*Zero Squashed Layout*)
* **Fitur & Spesifikasi:**
  - [x] **Proteksi Global Anti-Gepeng (.btn-native-action & .btn-native-icon)**: Penegasan `min-height: 2.5rem !important` (40px–44px standar sentuh jari Apple & Google), `flex-shrink: 0 !important`, serta `aspect-ratio: 1 / 1 !important` untuk tombol silang/close dan ikon.
  - [x] **Anti-Wrap Badge Status**: Perlindungan `white-space: nowrap; flex-shrink: 0` di seluruh badge status pesanan, pengiriman DO, dan retur RMA agar teks tidak terlipat canggung menjadi dua baris.
  - [x] **Integrasi Dokumen Cetak & Struk Terpusat**: Seluruh dokumen A4 (Invoice, DO, RMA, PO, Tempo, SO) dan struk thermal (POS, RMA, Shift Z-Report, BKK) terhubung dengan nomor referensi unik, barcode Code 128 vektor murni, dan kop toko *single source of truth*.
  - [x] **Verifikasi Kualitas Sistem**: 77 modal sistem terisolasi dan tersinkronisasi 100%, 0 regression errors.

---

## ⚡ FASE 5: Otomasi Pengadaan Pintar & Notifikasi Gateway (Procurement & Gateway)
> **Fokus Utama:** Efisiensi owner tanpa cek fisik manual dan notifikasi tagihan instan.  
> **Target Rilis:** `v1.15.0` - `v2.0.0`

### 5.1 Smart Safety Stock & Rekomendasi Kulakan Otomatis
* **Fitur & Spesifikasi:**
  - [ ] Batas Minimum Stok Aman (*Reorder Point / Safety Stock*) per produk & varian.
  - [ ] Widget Dashboard Interaktif: *Daftar Barang Wajib Kulakan Hari Ini*.
  - [ ] Fitur 1-Klik: Konversi daftar barang menipis langsung menjadi draf Purchase Order (PO) siap kirim ke supplier utama.

### 5.2 Integrasi Gateway WhatsApp (Paperless Receipt & Billing Reminder)
* **Fitur & Spesifikasi:**
  - [ ] Pengiriman e-receipt (nota digital) otomatis ke nomor WhatsApp pelanggan begitu transaksi selesai di kasir POS.
  - [ ] Pengingat otomatis piutang tempo jatuh tempo (H-3 peringatan ramah, H-0 jatuh tempo, H+3 penagihan resmi) secara terjadwal.

---

## 📊 Matriks Prioritas & Tahapan Eksekusi

```
URGENSI TINGGI
   ▲
   │  [Fase 1.1: Qty Desimal POS]     [Fase 2.1: Retur Penjualan]
   │  [Fase 1.2: Estimator Material]   [Fase 4.1: Multi-Satuan UOM]
   │
   │  [Fase 5.1: Safety Stock Alert]   [Fase 3.1: Surat Jalan DO]
   │  [Fase 5.2: Gateway Notifikasi]   [Fase 2.2: Retur Supplier]
   ▼
RENDAH ────────────────────────────────────────────────────────► TINGKAT KESULITAN
```

| Fase | Nama Modul | Nilai Tambah Bisnis | Estimasi Target | Status |
| :---: | :--- | :--- | :---: | :---: |
| **Fase 1** | **Qty Desimal & Estimator Bahan** | Transaksi eceran leluasa, fitur pikat konsumen unik | `v1.11.x` | ✅ **SELESAI** |
| **Fase 2** | **Retur Penjualan & Pembelian (RMA)** | Tertib tukar barang, akurasi mutasi kasir & stok | `v1.12.x` | ✅ **SELESAI** |
| **Fase 3** | **Surat Jalan & Pengiriman Proyek** | Logistik armada & material volume besar rapi | `v1.13.x` | ✅ **SELESAI** |
| **Fase 4** | **Multi-Satuan UOM & Harga Grosir** | Eceran vs grosir otomatis tanpa duplikasi produk | `v1.14.x` | ✅ **SELESAI** |
| **Fase 5** | **Smart Safety Stock & Otomasi WA** | Pengadaan barang akurat, penagihan tempo cepat | `v2.0.0` | ⏳ *Agenda Berikutnya* |

---

## 🛡️ Prinsip Mutu & Komitmen Arsitektur
1. **Zero Regression**: Penambahan modul baru wajib melalui pengujian `npm run audit` (77 modal sistem tetap terisolasi).
2. **Offline-First & Kecepatan Native**: POS Kasir dan etalase harus tetap berjalan secepat kilat tanpa ketergantungan koneksi lambat.
3. **Desain Sistem Konsisten**: Menggunakan token tema terpadu (`var(--color-primary)`), standar tombol sentuh $\ge 40$px, dan tipografi enterprise profesional.
