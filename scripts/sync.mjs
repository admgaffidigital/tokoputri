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
fs.cpSync('dist', '1. HASIL_BUILD_SIAP_PAKE', { recursive: true, force: true });
if (fs.existsSync('PAKET_FLASHDISK/1. HASIL_BUILD_SIAP_PAKE')) {
  fs.cpSync('dist', 'PAKET_FLASHDISK/1. HASIL_BUILD_SIAP_PAKE', { recursive: true, force: true });
}

// 3. Mirroring source files to flashdisk package
console.log('💾 [3/4] Menyinkronkan kode sumber ke paket flashdisk...');
if (fs.existsSync('PAKET_FLASHDISK/2. SOURCE_CODE_LENGKAP')) {
  const syncItems = [
    'package.json',
    'capacitor.config.json',
    'src',
    'public',
    'index.html',
    'tailwind.config.js',
    'vite.config.js',
    'postcss.config.js',
    'vercel.json'
  ];
  for (const item of syncItems) {
    if (fs.existsSync(item)) {
      const dest = path.join('PAKET_FLASHDISK/2. SOURCE_CODE_LENGKAP', item);
      const stat = fs.statSync(item);
      if (stat.isDirectory()) {
        fs.cpSync(item, dest, { recursive: true, force: true });
      } else {
        fs.mkdirSync(path.dirname(dest), { recursive: true });
        fs.copyFileSync(item, dest);
      }
    }
  }
}

// 4. Capacitor sync for Android
console.log('📱 [4/4] Menyinkronkan platform Android (Capacitor Sync)...');
execSync('npx cap sync android', { stdio: 'inherit' });

console.log('\n======================================================');
console.log('✅ SELURUH SISTEM & DISTRIBUSI TELAH TERSINKRONISASI!');
console.log('======================================================\n');
