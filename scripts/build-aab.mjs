import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

console.log('\n================================================================');
console.log('🤖 GENERATOR ANDROID APP BUNDLE (.AAB) - TOKO PUTRI (OFFICIAL STORE)');
console.log('================================================================\n');

// 1. Resolve JAVA_HOME
const candidateJavas = [
  'C:\\Users\\INK RAZER COMPUTER\\AppData\\Local\\jdk-21',
  process.env.JAVA_HOME,
  'C:\\Program Files\\Android\\Android Studio\\jbr',
  'C:\\Program Files\\Java\\jdk-21',
  'C:\\Program Files\\Java\\jdk-17'
].filter(Boolean);

let resolvedJavaHome = null;
for (const cand of candidateJavas) {
  if (fs.existsSync(cand) && (fs.existsSync(path.join(cand, 'bin', 'javac.exe')) || fs.existsSync(path.join(cand, 'bin', 'javac')))) {
    resolvedJavaHome = cand;
    break;
  }
}

if (!resolvedJavaHome) {
  console.error('❌ Error: JAVA_HOME tidak ditemukan. Pastikan JDK 17 atau 21 terpasang.');
  process.exit(1);
}

console.log(`☕ Java SDK Terdeteksi: ${resolvedJavaHome}`);

// 1b. Resolve ANDROID_HOME
const candidateAndroidSdks = [
  process.env.ANDROID_HOME,
  process.env.ANDROID_SDK_ROOT,
  'C:\\Users\\INK RAZER COMPUTER\\AppData\\Local\\Android\\Sdk',
  'C:\\Android\\Sdk',
  'C:\\Program Files (x86)\\Android\\android-sdk'
].filter(Boolean);

let resolvedAndroidSdk = null;
for (const cand of candidateAndroidSdks) {
  if (fs.existsSync(cand) && fs.existsSync(path.join(cand, 'platform-tools'))) {
    resolvedAndroidSdk = cand;
    break;
  }
}

if (resolvedAndroidSdk) {
  console.log(`📱 Android SDK Terdeteksi: ${resolvedAndroidSdk}`);
  const localPropPath = path.join('android', 'local.properties');
  const escapedSdkDir = resolvedAndroidSdk.replace(/\\/g, '\\\\').replace(/:/g, '\\:');
  fs.writeFileSync(localPropPath, `sdk.dir=${escapedSdkDir}\n`, 'utf8');
} else {
  console.warn('⚠️  Peringatan: Direktori Android SDK tidak terdeteksi secara otomatis.');
}

const env = {
  ...process.env,
  JAVA_HOME: resolvedJavaHome,
  ANDROID_HOME: resolvedAndroidSdk || process.env.ANDROID_HOME,
  ANDROID_SDK_ROOT: resolvedAndroidSdk || process.env.ANDROID_SDK_ROOT,
  PATH: `${path.join(resolvedJavaHome, 'bin')};${resolvedAndroidSdk ? path.join(resolvedAndroidSdk, 'platform-tools') + ';' : ''}${process.env.PATH}`
};

// 2. Baca package.json dan sinkronisasi versi
console.log('\n📦 [1/4] Memeriksa versi paket & sinkronisasi Android build.gradle...');
const pkg = JSON.parse(fs.readFileSync('package.json', 'utf8'));
const gradlePath = 'android/app/build.gradle';
if (fs.existsSync(gradlePath)) {
  let gradleContent = fs.readFileSync(gradlePath, 'utf8');
  gradleContent = gradleContent.replace(/versionName\s+"[^"]+"/, `versionName "${pkg.version}"`);
  const parts = pkg.version.split('.').map(n => parseInt(n, 10) || 0);
  const vCode = (parts[0] || 1) * 10000 + (parts[1] || 0) * 100 + (parts[2] || 0);
  gradleContent = gradleContent.replace(/versionCode\s+\d+/, `versionCode ${vCode}`);
  fs.writeFileSync(gradlePath, gradleContent, 'utf8');
  console.log(`   -> Android Version: ${pkg.version} (versionCode: ${vCode})`);
}

// 3. Build Web & Sinkronisasi Capacitor
console.log('\n🌐 [2/4] Kompilasi Web Produksi & Sinkronisasi Capacitor Android...');
execSync('npm run build', { stdio: 'inherit', env });
execSync('npx cap sync android', { stdio: 'inherit', env });

// 4. Jalankan Gradle Bundle Release & Assemble Release
console.log('\n⚙️  [3/4] Mengompilasi Android App Bundle (.aab) & APK Rilis dengan Gradle...');
const androidDir = path.resolve('android');
const gradlewCmd = process.platform === 'win32' ? 'gradlew.bat' : './gradlew';
execSync(`${gradlewCmd} :app:bundleRelease :app:assembleRelease`, {
  cwd: androidDir,
  stdio: 'inherit',
  env
});

// 5. Verifikasi dan Salin File AAB & APK
console.log('\n📋 [4/4] Memverifikasi dan mendistribusikan file AAB & APK rilis...');
const aabSource = path.join(androidDir, 'app', 'build', 'outputs', 'bundle', 'release', 'app-release.aab');
const apkSource = path.join(androidDir, 'app', 'build', 'outputs', 'apk', 'release', 'app-release.apk');

if (!fs.existsSync(aabSource)) {
  console.error(`❌ File AAB rilis tidak ditemukan di: ${aabSource}`);
  process.exit(1);
}

const statAab = fs.statSync(aabSource);
const sizeAabMb = (statAab.size / (1024 * 1024)).toFixed(2);
console.log(`✅ Berhasil menghasilkan AAB: app-release.aab (${sizeAabMb} MB)`);

const aabTargets = [
  'TokoPutri(OfficialStore).aab',
  'TokoPutri.aab',
  'PAKET_FLASHDISK/TokoPutri(OfficialStore).aab',
  '1. HASIL_BUILD_SIAP_PAKE/TokoPutri(OfficialStore).aab'
];

for (const target of aabTargets) {
  const dir = path.dirname(target);
  if (dir !== '.' && !fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  fs.copyFileSync(aabSource, target);
  console.log(`   -> [AAB] Tersalin ke: ${target}`);
}

if (fs.existsSync(apkSource)) {
  const statApk = fs.statSync(apkSource);
  const sizeApkMb = (statApk.size / (1024 * 1024)).toFixed(2);
  console.log(`✅ Berhasil menghasilkan APK: app-release.apk (${sizeApkMb} MB)`);

  const apkTargets = [
    'TokoPutri(OfficialStore).apk',
    'TokoPutri.apk',
    'PAKET_FLASHDISK/TokoPutri(OfficialStore).apk',
    'PAKET_FLASHDISK/TokoPutri.apk',
    '1. HASIL_BUILD_SIAP_PAKE/TokoPutri(OfficialStore).apk',
    '1. HASIL_BUILD_SIAP_PAKE/TokoPutri.apk'
  ];

  for (const target of apkTargets) {
    const dir = path.dirname(target);
    if (dir !== '.' && !fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.copyFileSync(apkSource, target);
    console.log(`   -> [APK] Tersalin ke: ${target}`);
  }
}

console.log('\n================================================================');
console.log('🎉 SUKSES! FILE AAB & APK SIAP DIGUNAKAN!');
console.log(`   AAB Play Store : TokoPutri(OfficialStore).aab (${sizeAabMb} MB)`);
console.log(`   APK Install HP : TokoPutri(OfficialStore).apk`);
console.log(`   Versi          : v${pkg.version}`);
console.log('================================================================\n');
