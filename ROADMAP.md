# 🗺️ ROADMAP STRATEGIS PENGEMBANGAN SISTEM TOKO PUTRI
> **Platform Ekosistem Kasir (POS), Gudang Multi-Lokasi, & Finansial Enterprise**  
> *Spesialisasi Ritel Bahan Bangunan, Alat Teknik, Kelistrikan & Perkakas*  
> **Target Baseline Saat Ini:** `v1.12.2` | **Target Jangka Panjang:** `v2.0.0`

---

## 📌 Visi & Orientasi Pengembangan
Ekosistem **TOKO PUTRI (Putri Utama Teknik)** telah mencapai kematangan arsitektur di tingkat *Enterprise Retail* pada versi `v1.12.2` dengan integrasi hulu-ke-hilir:
- Kasir POS responsif berkecepatan tinggi dengan Dual-Engine Scanner Kamera, Barcode Vektor Code 128, dan Presisi Kuantitas Desimal untuk barang curah/kiloan.
- Alat Kalkulator Estimator Material Bangunan interaktif (Cat & Plafon, Keramik & Granit, Pasangan Dinding Hebel/Bata).
- Manajemen Retur Barang & RMA Terpadu (Customer Sales Return & Vendor Purchase Return) dengan dukungan produk multi-varian, pemilih varian dinamis, HPP spesifik varian, alokasi karantina rusak, rekonsiliasi kas laci, serta Universal Native Card View & Dual-View responsif.
- Penilaian persediaan akurat berstandar akuntansi PSAK dengan FIFO (*First-In, First-Out*) berbasis batch kulakan.
- Inventori dua lokasi independen (*Floor-First Deduction*: Rak Toko vs Gudang Cadangan).
- Buku Kas Laci Kasir (*Cash Movement*), Rekap Shift X/Z Report, dan Manajemen Piutang Tempo (AR Ledger).
- Cetak label barcode mandiri (Thermal Roll 40x30, 50x30, Continuous Roll, & Kertas A4 Grid).

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

## 📦 FASE 2: Manajemen Retur & Rekonsiliasi Inventori (RMA Engine) (SELESAI - v1.12.1)
> **Fokus Utama:** Ketertiban penukaran barang, klaim cacat supplier, dan akurasi stok fisik.  
> **Status:** Selesai & Terverifikasi di `v1.12.1`

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

## 🚚 FASE 3: Logistik, Pengiriman Proyek & Surat Jalan (Delivery Management)
> **Fokus Utama:** Penataan alur distribusi barang berat/bervolume ke lokasi proyek.  
> **Target Rilis:** `v1.13.0` - `v1.13.5`

### 3.1 Dokumen Surat Jalan Resmi (*Delivery Order / DO*)
* **Fitur & Spesifikasi:**
  - [ ] Penerbitan Surat Jalan ber-barcode terpisah dari Struk Kasir.
  - [ ] Format cetak standar logistik proyek (Kertas A4 / rangkap) memuat: Alamat Proyek/Drop Point, Kontak Mandor, Catatan Bongkar, dan Tabel Checklist Muatan.
  - [ ] Manajemen Armada: Penugasan jenis armada (Mobil Pick-up L300, Truk Engkel, Motor Roda Tiga Toko) dan nama supir/helper.

### 3.2 Pelacakan Status Pengiriman Real-Time
* **Fitur & Spesifikasi:**
  - [ ] Siklus status pengiriman: `Menunggu Muat (Pending Dispatch)` $\rightarrow$ `Dalam Perjalanan (Out for Delivery)` $\rightarrow$ `Terkirim (Delivered)`.
  - [ ] Konfirmasi serah terima di aplikasi: Input nama penerima di proyek, catatan kondisi serah terima, dan upload foto bukti kirim / tanda tangan digital di layar sentuh.

---

## 🏷️ FASE 4: Multi-Satuan Bertingkat & Harga Grosir Fleksibel (UOM Hierarchy)
> **Fokus Utama:** 1 Master Barang dapat dijual dalam satuan kemasan besar (Dus/Roll/Sak) maupun eceran.  
> **Target Rilis:** `v1.14.0` - `v1.14.5`

### 4.1 Master Satuan Bertingkat (*Unit of Measure Conversion*)
* **Fitur & Spesifikasi:**
  - [ ] Definisi Satuan Terkecil / Dasar (*Base UOM*) vs Satuan Kemasan (*Packaging UOM*):
    - Contoh: Kabel $\rightarrow$ Satuan Dasar: `Meter`, Satuan Kemasan: `Roll` (Konversi: 1 Roll = 100 Meter).
    - Contoh: Keramik $\rightarrow$ Satuan Dasar: `Keping`, Satuan Kemasan: `Dus` (Konversi: 1 Dus = 6 Keping).
    - Contoh: Baut $\rightarrow$ Satuan Dasar: `Pcs`, Satuan Kemasan: `Kotak` (Konversi: 1 Kotak = 100 Pcs).
  - [ ] Selector Satuan di Kasir POS: Kasir dapat memilih satuan `Roll` atau `Meter` langsung dari baris keranjang dengan konversi harga otomatis.
  - [ ] Pengurangan stok persediaan otomatis selalu mengacu pada satuan dasar terkecil di gudang.

### 4.2 Tier Harga Grosir Bertingkat (*Tiered Wholesale Pricing*)
* **Fitur & Spesifikasi:**
  - [ ] Aturan harga grosir otomatis (Cth: Beli 1-9 meter @ Rp 8.000, Beli $\ge$ 10 meter @ Rp 7.200, Beli 1 Roll @ Rp 680.000).
  - [ ] Proteksi margin HPP: Sistem memberi indikator peringatan jika harga grosir mendekati atau berada di bawah HPP FIFO barang.

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
| **Fase 3** | **Surat Jalan & Pengiriman Proyek** | Logistik armada & material volume besar rapi | `v1.13.x` | ⏳ *Agenda Berikutnya* |
| **Fase 4** | **Multi-Satuan UOM & Harga Grosir** | Eceran vs grosir otomatis tanpa duplikasi produk | `v1.14.x` | 📋 *Menunggu Fase 3* |
| **Fase 5** | **Smart Safety Stock & Otomasi WA** | Pengadaan barang akurat, penagihan tempo cepat | `v2.0.0` | 📋 *Menunggu Fase 4* |

---

## 🛡️ Prinsip Mutu & Komitmen Arsitektur
1. **Zero Regression**: Penambahan modul baru wajib melalui pengujian `npm run audit` (72 modal sistem tetap terisolasi).
2. **Offline-First & Kecepatan Native**: POS Kasir dan etalase harus tetap berjalan secepat kilat tanpa ketergantungan koneksi lambat.
3. **Desain Sistem Konsisten**: Menggunakan token tema terpadu (`var(--color-primary)`), standar tombol sentuh $\ge 40$px, dan tipografi enterprise profesional.
