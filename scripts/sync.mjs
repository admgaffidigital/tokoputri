import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

console.log('\n======================================================');
console.log('🚀 PEMELIHARAAN SISTEM TOKO PUTRI: SINKRONISASI TOTAL');
console.log('======================================================\n');

// 1. Build Web Production
console.log('📦 [1/4] Mengompilasi kode web produksi (Vite Production Build)...');
execSync('npm run build', { stdio: 'inherit' });

// 2. Mirroring dist to distribution folders
console.log('\n📂 [2/4] Menyinkronkan folder hasil build ke distribusi...');
if (fs.existsSync('1. HASIL_BUILD_SIAP_PAKE')) {
  fs.rmSync('1. HASIL_BUILD_SIAP_PAKE', { recursive: true, force: true });
}
fs.cpSync('dist', '1. HASIL_BUILD_SIAP_PAKE', { recursive: true, force: true });
if (fs.existsSync('PAKET_FLASHDISK/1. HASIL_BUILD_SIAP_PAKE')) {
  fs.rmSync('PAKET_FLASHDISK/1. HASIL_BUILD_SIAP_PAKE', { recursive: true, force: true });
}
fs.cpSync('dist', 'PAKET_FLASHDISK/1. HASIL_BUILD_SIAP_PAKE', { recursive: true, force: true });

// Pertahankan / salin file AAB & APK rilis resmi ke paket distribusi
const releaseBinaries = [
  'TokoPutri(OfficialStore).aab',
  'TokoPutri(OfficialStore).apk'
];
for (const bin of releaseBinaries) {
  if (fs.existsSync(bin)) {
    fs.copyFileSync(bin, path.join('1. HASIL_BUILD_SIAP_PAKE', bin));
    fs.copyFileSync(bin, path.join('PAKET_FLASHDISK', bin));
    fs.copyFileSync(bin, path.join('PAKET_FLASHDISK/1. HASIL_BUILD_SIAP_PAKE', bin));
  }
}

// Bersihkan file binary rilis versi lama jika ada
const legacyFiles = [
  'TokoPutri.aab',
  'TokoPutri.apk',
  '1. HASIL_BUILD_SIAP_PAKE/TokoPutri.aab',
  '1. HASIL_BUILD_SIAP_PAKE/TokoPutri.apk',
  'PAKET_FLASHDISK/TokoPutri.aab',
  'PAKET_FLASHDISK/TokoPutri.apk',
  'PAKET_FLASHDISK/1. HASIL_BUILD_SIAP_PAKE/TokoPutri.aab',
  'PAKET_FLASHDISK/1. HASIL_BUILD_SIAP_PAKE/TokoPutri.apk'
];
for (const leg of legacyFiles) {
  if (fs.existsSync(leg)) {
    try { fs.rmSync(leg, { force: true }); } catch (e) {}
  }
}


// 3. Isolasi Distribusi: Lindungi Hak Kekayaan Intelektual (Source Code Lockdown)
// Model bisnis resmi: Managed Whitelabel / SaaS (source code TIDAK didistribusikan ke klien).
// Paket distribusi hanya memuat: Hasil Build Web, APK Android Resmi, dan Panduan Non-Teknis.
console.log('🔒 [3/5] Menjaga keamanan kode sumber (Source Code Lockdown - SaaS Model)...');
if (fs.existsSync('PAKET_FLASHDISK/2. SOURCE_CODE_LENGKAP')) {
  fs.rmSync('PAKET_FLASHDISK/2. SOURCE_CODE_LENGKAP', { recursive: true, force: true });
}

// Sinkronkan panduan operasional non-teknis ke paket distribusi
if (fs.existsSync('DOCS_SAAS_BISNIS/3_PANDUAN_OPERASIONAL_PEMILIK_TOKO_NON_TEKNIS.md')) {
  fs.mkdirSync('PAKET_FLASHDISK/3. PANDUAN_DAN_TUTORIAL', { recursive: true });
  fs.copyFileSync('DOCS_SAAS_BISNIS/3_PANDUAN_OPERASIONAL_PEMILIK_TOKO_NON_TEKNIS.md', 'PAKET_FLASHDISK/3. PANDUAN_DAN_TUTORIAL/PANDUAN_OPERASIONAL_PEMILIK_TOKO_NON_TEKNIS.md');
  fs.copyFileSync('DOCS_SAAS_BISNIS/2_SURAT_PERJANJIAN_SEWA_SOFTWARE_TOS.md', 'PAKET_FLASHDISK/3. PANDUAN_DAN_TUTORIAL/DOKUMEN_PERJANJIAN_SEWA_SOFTWARE.md');
}

// 4. Sinkronisasi versi Android di build.gradle
console.log('🤖 [4/5] Menyinkronkan versi Android build.gradle dari package.json...');
const pkg = JSON.parse(fs.readFileSync('package.json', 'utf8'));
const gradlePath = 'android/app/build.gradle';
if (fs.existsSync(gradlePath)) {
  let gradleContent = fs.readFileSync(gradlePath, 'utf8');
  gradleContent = gradleContent.replace(/versionName\s+"[^"]+"/, `versionName "${pkg.version}"`);
  const parts = pkg.version.split('.').map(n => parseInt(n, 10) || 0);
  const vCode = (parts[0] || 1) * 10000 + (parts[1] || 0) * 100 + (parts[2] || 0);
  gradleContent = gradleContent.replace(/versionCode\s+\d+/, `versionCode ${vCode}`);
  fs.writeFileSync(gradlePath, gradleContent, 'utf8');
  console.log(`   -> Android Version Name diset ke: ${pkg.version} (versionCode: ${vCode})`);
}

// 5. Capacitor sync for Android
console.log('📱 [5/5] Menyinkronkan platform Android (Capacitor Sync)...');
execSync('npx cap sync android', { stdio: 'inherit' });

console.log('\n======================================================');
console.log('✅ SELURUH SISTEM & DISTRIBUSI TELAH TERSINKRONISASI!');
console.log('======================================================\n');
