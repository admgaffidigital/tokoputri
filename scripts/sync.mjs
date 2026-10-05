import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

console.log('\n======================================================');
console.log('🚀 PEMELIHARAAN SISTEM TOKO PUTRI: SINKRONISASI TOTAL');
console.log('   Arsitektur: Managed Whitelabel / SaaS (Clean & Fast)');
console.log('======================================================\n');

// 1. Build Web Production
console.log('📦 [1/3] Mengompilasi kode web produksi (Vite Production Build)...');
execSync('npm run build', { stdio: 'inherit' });

// 2. Pembersihan folder duplikat / legacy fisik (Flashdisk era cleanup)
const legacyPaths = [
  'PAKET_FLASHDISK',
  '1. HASIL_BUILD_SIAP_PAKE',
  'TokoPutri.aab',
  'TokoPutri.apk'
];
for (const p of legacyPaths) {
  if (fs.existsSync(p)) {
    try {
      fs.rmSync(p, { recursive: true, force: true });
      console.log(`   -> [Cleanup] Menghapus folder/berkas legacy: ${p}`);
    } catch (e) {}
  }
}

// 3. Sinkronisasi versi Android di build.gradle
console.log('\n🤖 [2/3] Menyinkronkan versi Android build.gradle dari package.json...');
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

// 4. Capacitor sync for Android
console.log('\n📱 [3/3] Menyinkronkan platform Android (Capacitor Sync)...');
execSync('npx cap sync android', { stdio: 'inherit' });

console.log('\n======================================================');
console.log('✅ SELURUH SISTEM & ASET TELAH TERSINKRONISASI 100%!');
console.log('======================================================\n');
