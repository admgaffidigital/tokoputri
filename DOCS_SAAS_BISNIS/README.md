# 💼 PAKET LENGKAP BISNIS & EKOSISTEM MANAGED SAAS / WHITELABEL
**Toko Putri POS & Online Store Engine — Model 3: Technical Partner Terkelola**

Paket ini dirancang khusus untuk memungkinkan Anda menjual atau menyewakan sistem aplikasi kasir dan toko online kepada para pemilik toko/UMKM secara profesional, bernilai tinggi, dan berkelanjutan (*recurring revenue*), tanpa pernah menyerahkan atau membocorkan kode sumber asli (*proprietary source code*).

---

## 📂 Struktur Berkas Dokumen Bisnis & Legalitas

| No | Berkas Dokumen | Format | Fungsi & Kegunaan |
| :---: | :--- | :---: | :--- |
| **1** | [1_PROPOSAL_PENAWARAN_MANAGED_SAAS.html](file:///c:/TOKO%20PUTRI/DOCS_SAAS_BISNIS/1_PROPOSAL_PENAWARAN_MANAGED_SAAS.html) | **HTML Interaktif & Cetak A4 / PDF** | Proposal penawaran resmi berdesain eksekutif mewah dengan fitur customizer langsung (nama toko, pemilik, harga, kontak) dan tombol 1-klik salin draf chat WhatsApp untuk closing klien. |
| **-** | [1_PROPOSAL_PENAWARAN_MANAGED_SAAS.md](file:///c:/TOKO%20PUTRI/DOCS_SAAS_BISNIS/1_PROPOSAL_PENAWARAN_MANAGED_SAAS.md) | Markdown | Naskah teks mentah proposal penawaran. |
| **2** | [2_SURAT_PERJANJIAN_SEWA_SOFTWARE_TOS.html](file:///c:/TOKO%20PUTRI/DOCS_SAAS_BISNIS/2_SURAT_PERJANJIAN_SEWA_SOFTWARE_TOS.html) | **HTML Interaktif & Cetak A4 / PDF** | Surat Perjanjian Sewa Pakai Software (Terms of Service & SLA) format resmi hukum Indonesia dengan klausul hak cipta mutlak, hak milik data klien, toleransi masa tenggang, dan slot Materai Rp 10.000. |
| **-** | [2_SURAT_PERJANJIAN_SEWA_SOFTWARE_TOS.md](file:///c:/TOKO%20PUTRI/DOCS_SAAS_BISNIS/2_SURAT_PERJANJIAN_SEWA_SOFTWARE_TOS.md) | Markdown | Naskah teks mentah surat perjanjian. |
| **3** | [3_PANDUAN_OPERASIONAL_PEMILIK_TOKO_NON_TEKNIS.md](file:///c:/TOKO%20PUTRI/DOCS_SAAS_BISNIS/3_PANDUAN_OPERASIONAL_PEMILIK_TOKO_NON_TEKNIS.md) | Markdown | Panduan operasional praktis 100% non-teknis 14 Bab lengkap untuk pemilik usaha (Login Owner vs Kasir, Shift Kasir & Laci, RBAC & HPP Lockdown, Stock Opname Rak, Dokumen Resmi A4 Multi-Halaman, QRIS/Rekening, Printer Bluetooth, PayLater Angsuran Bulanan, Buku Kas Beban Usaha, Laporan Laba Rugi P&L, dan Aktivasi Lisensi). |
| **4** | [4_SOP_DEVELOPER_ONBOARDING_KLONING_TOKO.md](file:///c:/TOKO%20PUTRI/DOCS_SAAS_BISNIS/4_SOP_DEVELOPER_ONBOARDING_KLONING_TOKO.md) | Markdown | SOP internal developer untuk mendirikan (*provisioning*) toko klien baru (< 5 menit), prosedur rilis binary Android AAB/APK, audit diagnostik sistem (`npm run audit`), dan pipeline pemeliharaan terpadu (`npm run maintenance`). |

---

## 🛠️ Perintah CLI Otomasi Ekosistem SaaS

Semua perintah dapat langsung dijalankan dari terminal pada root folder:

### 1. Pipeline Pemeliharaan Sistem Menyeluruh (Rekomendasi 1-Klik)
```bash
npm run maintenance
```
*Hasil:* Menjalankan audit statis integritas sistem, verifikasi 22 skenario suite lisensi, kompilasi web produksi Vite, sinkronisasi versi Android Gradle, dan pembaruan aset native Capacitor.

### 2. Audit Diagnostik Kesehatan Kode
```bash
npm run audit
```
*Hasil:* Memverifikasi 100% keabsahan berkas konfigurasi JSON kritis, memindai 79 berkas JS di `src/`, dan menguji 307 impor modul relatif.

### 3. Kloning Toko Klien Baru (Instan < 5 Menit)
```bash
# Menampilkan panduan parameter
npm run store:new -- --help

# Contoh eksekusi kloning toko baru:
npm run store:new -- --name "Toko Berkah Sejahtera" --code "BERKAH" --client "Ahmad Fauzi" --phone "081234567890" --theme "teal" --days 365
```
*Hasil:* Berkas konfigurasi lengkap `stores-config/BERKAH.json` dan kunci lisensi perdana langsung terbit.

### 4. Generator Kunci Lisensi Perpanjangan Sewa
```bash
# Menerbitkan kode lisensi 365 hari untuk toko BERKAH:
npm run license:generate -- --store "BERKAH" --days 365

# Menerbitkan kode lisensi 30 hari untuk Toko Putri:
npm run license:generate -- --store "PUTRI" --days 30

# Menerbitkan Master Key (berlaku untuk semua toko):
npm run license:generate -- --store "MASTER" --days 365
```
*Hasil:* Kode lisensi kriptografis resmi terbit lengkap dengan draf pesan ramah WhatsApp yang siap dikirimkan ke pemilik toko.

### 5. Validasi & Pengujian Engine Lisensi
```bash
npm run test:license
```
*Hasil:* Mengeksekusi suite pengujian otomatis untuk memverifikasi algoritma checksum, masa aktif, warning H-7, masa tenggang (grace period 7 hari), dan graceful lockout bergaransi data aman.

---

## 🛡️ Arsitektur Proteksi & Kunci Lisensi
- **Algoritma Checksum:** Memadukan identifier toko (`storeCode`), durasi hari (`days`), dan kunci rahasia pengembang (`LICENSE_SECRET_SALT`).
- **Peringatan H-7:** Muncul banner ramah otomatis di Panel Kontrol Pemilik Toko (CMS Owner) 7 hari sebelum jatuh tempo.
- **Masa Tenggang (Grace Period):** Toleransi 7 hari kalender setelah masa sewa habis di mana sistem tetap dapat digunakan dengan pengingat ramah.
- **Graceful Lockout:** Penguncian halus yang **TIDAK MENGHAPUS DATA**. Seluruh riwayat transaksi, produk, dan keuangan tetap tersimpan aman di cloud dan langsung aktif kembali seketika kode lisensi baru diaktifkan.
