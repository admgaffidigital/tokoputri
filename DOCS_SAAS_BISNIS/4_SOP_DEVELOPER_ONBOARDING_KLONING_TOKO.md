# 🛠️ SOP INTERNAL DEVELOPER: ONBOARDING & KLONING TOKO KLIEN (< 5 MENIT)
**Panduan Standar Operasional Pengembang untuk Model Bisnis Managed Whitelabel / Hybrid SaaS**

---

## 🎯 TUJUAN SOP
Memandu pengembang untuk mendirikan (*provisioning*), mengonfigurasi, dan merilis instansi toko baru bagi klien baru secara cepat, terisolasi, aman, dan tanpa membocorkan kode sumber (*proprietary source code*).

---

## 1. PRE-REQUISITE (DATA DARI KLIEN)
Sebelum mengeksekusi kloning, kumpulkan data berikut dari pemilik toko:
1. **Nama Toko** : (Contoh: `Toko Berkah Sejahtera`)
2. **Kode Singkat Toko (Identifier)** : (Contoh: `BERKAH` — huruf besar tanpa spasi)
3. **Nama Pemilik** : (Contoh: `Bapak Ahmad Fauzi`)
4. **Nomor WhatsApp Toko** : (Contoh: `081234567890`)
5. **Warna / Tema Tampilan** : (Contoh: `emerald`, `teal`, `gold`, `industrial`, `blue`)
6. **Durasi Sewa yang Disepakati** : (Contoh: `365` hari / 1 tahun atau `30` hari)

---

## 2. EKSEKUSI SCRIPT KLONING OTOMATIS (1 KLIK)

Buka terminal pada root repositori project, lalu jalankan:

```bash
node scripts/new-store.mjs --name "Toko Berkah Sejahtera" --code "BERKAH" --phone "081234567890" --client "Ahmad Fauzi" --theme "emerald" --days 365 --devContact "6281234567890" --devName "Gaffi Digital Tech"
```

**Hasil yang otomatis dibuat:**
- Berkas profil dan konfigurasi awal: `stores-config/BERKAH.json`
- Kunci lisensi resmi awal: `PUTRI-365D-BERKAH-[CHECKSUM]`
- Parameter langganan aktif selama 365 hari

---

## 3. SETUP DATABASE FIREBASE KLIEN (GRATIS TIER SPARK)

Setiap klien memiliki database Firebase mandiri (*Single-Tenant Isolation*), sehingga data antar klien 100% terpisah dan tidak ada risiko interferensi:

1. Buka [Firebase Console](https://console.firebase.google.com).
2. Klik **Add Project** -> Masukkan nama proyek (misal: `toko-berkah-pos`).
3. Matikan Google Analytics (atau biarkan default), lalu klik **Create Project**.
4. Di panel kiri, buka **Build** -> **Firestore Database** -> klik **Create database** (Pilih lokasi: `asia-southeast2` Jakarta atau `asia-southeast1` Singapore). Mode: **Start in production mode**.
5. Buka tab **Rules** pada Firestore, paste aturan resmi dari file [`firestore.rules`](file:///c:/TOKO%20PUTRI/firestore.rules), lalu klik **Publish**.
6. Buka tab **Data**, klik **Start collection**:
   - Collection ID: `freshmart`
   - Document ID: `cms_data`
   - Isi dokumen: Buka file `stores-config/BERKAH.json`, salin seluruh isinya, dan simpan sebagai field di dokumen tersebut.
7. Di menu **Project Settings (Ikon Gir)** -> **General** -> scroll ke bawah -> buat aplikasi Web (`</>`):
   - Ambil konfigurasi `firebaseConfig` (apiKey, authDomain, projectId, storageBucket, messagingSenderId, appId).
8. Buat akun Pemilik Toko awal:
   - Buka **Build** -> **Authentication** -> **Get started**.
   - Aktifkan provider **Email/Password**.
   - Di tab **Users**, klik **Add user** -> Masukkan email klien (misal: `owner@tokoberkah.com`) dan password sementara.

---

## 4. DEPLOYMENT WEBSITE & CUSTOM DOMAIN (VERCEL)

1. Buka [Vercel Dashboard](https://vercel.com).
2. Anda bisa menambahkan deployment dari repositori yang sama (atau branch khusus jika perlu kustomisasi logo).
3. Set environment variable atau deploy dengan `config.js` yang memuat `firebaseConfig` milik Toko Berkah.
4. Di menu **Settings** -> **Domains**, tautkan domain klien:
   - Domain gratis: `toko-berkah.vercel.app`
   - Domain kustom klien: `www.tokoberkah.com` (atur CNAME DNS ke `cname.vercel-dns.com`).

---

## 5. GENERATE APLIKASI ANDROID BRANDED (.APK)

1. Sesuaikan nama aplikasi di `android/app/src/main/res/values/strings.xml`:
   ```xml
   <string name="app_name">Toko Berkah</string>
   ```
2. Build binary APK produksi:
   ```bash
   npm run build
   npx cap sync android
   ```
3. Buka Android Studio atau jalankan build release gradle:
   ```bash
   cd android && ./gradlew assembleRelease
   ```
4. Salin file `.apk` yang dihasilkan untuk dikirimkan ke klien melalui WhatsApp.

---

## 6. PENYERAHAN KE KLIEN (DELIVERY PACKAGE)

Kirimkan pesan WhatsApp profesional kepada klien:

```text
Halo Bapak Ahmad,
Aplikasi Toko & Kasir Digital untuk Toko Berkah Sejahtera telah siap digunakan 100%!

🌐 Alamat Website Toko : https://www.tokoberkah.com
📱 Download Aplikasi HP : [Lampirkan TokoBerkah.apk]
👑 Akses Login Pemilik :
- Email    : owner@tokoberkah.com
- Password : [Password Sementara]

Panduan lengkap penggunaan aplikasi telah kami sertakan di buku panduan PDF.
Seluruh sistem terkelola ini aktif resmi hingga 1 tahun ke depan.
Jika ada pertanyaan teknis, kami siap membantu setiap hari.
Terima kasih dan sukses selalu untuk Toko Berkah Sejahtera!
```

---

## 7. PROSEDUR PERPANJANGAN LISENSI TAHUNAN / BULANAN

Ketika masa aktif klien mendekati jatuh tempo (H-7) dan klien membayar tagihan sewa:
1. Jalankan generator lisensi dari terminal:
   ```bash
   node scripts/generate-license.mjs --store "BERKAH" --days 365
   ```
2. Salin kode lisensi yang muncul di terminal (misal: `PUTRI-365D-BERKAH-349C6B`).
3. Kirimkan draf pesan WhatsApp yang telah disiapkan otomatis oleh script kepada klien.
4. Klien memasukkan kode di menu Pengaturan Toko -> Sistem otomatis langsung aktif kembali!
