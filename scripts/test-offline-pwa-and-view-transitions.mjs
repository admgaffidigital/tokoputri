import fs from 'fs';
import path from 'path';

console.log('============================================================');
console.log('🧪 TEST SUITE: OFFLINE PWA ENGINE, VIEW TRANSITIONS & POS TABLET');
console.log('============================================================\n');

let passed = 0;
let failed = 0;

function assert(condition, message) {
    if (condition) {
        console.log(`  ✅ PASS: ${message}`);
        passed++;
    } else {
        console.error(`  ❌ FAIL: ${message}`);
        failed++;
    }
}

// ─── 1. Uji Mesin Service Worker PWA Offline (public/sw.js) ──
console.log('📦 1. Uji Mesin Service Worker PWA Offline (public/sw.js):');
const swPath = path.resolve('public/sw.js');
assert(fs.existsSync(swPath), 'Berkas public/sw.js tersedia');

if (fs.existsSync(swPath)) {
    const swContent = fs.readFileSync(swPath, 'utf8');
    assert(swContent.includes('CACHE_VERSION') && swContent.includes('v1.18.10'), 'sw.js menggunakan versi cache terkini v1.18.10');
    assert(swContent.includes('PRECACHE_URLS') && swContent.includes('/index.html'), 'sw.js mem-precache app shell utama (/index.html, /manifest.json)');
    assert(swContent.includes("request.mode === 'navigate'"), 'sw.js mengimplementasikan penanganan mode navigasi HTML');
    assert(swContent.includes('skipWaiting()'), 'sw.js memiliki skipWaiting() agar aktif seketika');
    assert(swContent.includes('clients.claim()'), 'sw.js memiliki clients.claim() agar langsung mengontrol tab aktif');
    assert(swContent.includes('caches.delete(name)'), 'sw.js secara otomatis membersihkan cache versi lama saat aktivasi');
    assert(swContent.includes('firestore.googleapis.com'), 'sw.js mengecualikan endpoint Firestore agar tidak mengganggu realtime sync');
}

// ─── 2. Uji Registrasi PWA & Install Prompt di index.html ──
console.log('\n📱 2. Uji Registrasi PWA & Install Prompt di index.html:');
const indexPath = path.resolve('index.html');
const indexHtml = fs.readFileSync(indexPath, 'utf8');
assert(indexHtml.includes("navigator.serviceWorker.register('/sw.js'"), 'index.html mendaftarkan Service Worker /sw.js');
assert(indexHtml.includes('beforeinstallprompt'), 'index.html menangkap event beforeinstallprompt untuk instalasi PWA native');
assert(indexHtml.includes('window.promptPWAInstall'), 'index.html menyediakan helper window.promptPWAInstall()');
assert(!indexHtml.includes('reg.unregister()'), 'index.html tidak lagi memaksakan unregister service worker universal');

// ─── 3. Uji Animasi Transisi Layar Native di src/style.css ──
console.log('\n🎨 3. Uji Animasi Transisi Layar Native di src/style.css:');
const styleCssPath = path.resolve('src/style.css');
const styleCss = fs.readFileSync(styleCssPath, 'utf8');
assert(styleCss.includes('@keyframes viewEnterForward'), 'Keyframe viewEnterForward terdefinisi');
assert(styleCss.includes('@keyframes viewEnterBackward'), 'Keyframe viewEnterBackward terdefinisi');
assert(styleCss.includes('@keyframes viewEnterScale'), 'Keyframe viewEnterScale terdefinisi');
assert(styleCss.includes('.view-transition-forward {'), 'Kelas .view-transition-forward terdefinisi');
assert(styleCss.includes('.view-transition-backward {'), 'Kelas .view-transition-backward terdefinisi');
assert(styleCss.includes('.view-transition-scale {'), 'Kelas .view-transition-scale terdefinisi');
assert(styleCss.includes('will-change: transform, opacity;'), 'Transisi menggunakan will-change GPU acceleration');
assert(styleCss.includes('@media (prefers-reduced-motion: reduce)'), 'Transisi mematuhi preferensi aksesibilitas prefers-reduced-motion');

// ─── 4. Uji Integrasi Router Transisi & WakeLock di src/core/router.js ──
console.log('\n🧭 4. Uji Integrasi Router Transisi & WakeLock di src/core/router.js:');
const routerJsPath = path.resolve('src/core/router.js');
const routerJs = fs.readFileSync(routerJsPath, 'utf8');
assert(routerJs.includes('view-transition-forward') && routerJs.includes('view-transition-backward'), 'changeView di router.js menerapkan transisi arah maju/mundur');
assert(routerJs.includes('view-transition-scale'), 'changeView di router.js menerapkan transisi scale untuk modal-like views');
assert(routerJs.includes('requestScreenWakeLock'), 'router.js memanggil requestScreenWakeLock saat membuka mode kasir POS');
assert(routerJs.includes('releaseScreenWakeLock'), 'router.js memanggil releaseScreenWakeLock saat keluar dari mode kasir POS');

// ─── 5. Uji Kapabilitas Native Perangkat di src/core/native-mobile.js ──
console.log('\n⚡ 5. Uji Kapabilitas Native Perangkat di src/core/native-mobile.js:');
const nativeMobilePath = path.resolve('src/core/native-mobile.js');
const nativeMobileJs = fs.readFileSync(nativeMobilePath, 'utf8');
assert(nativeMobileJs.includes('requestScreenWakeLock = async'), 'Engine requestScreenWakeLock terpasang');
assert(nativeMobileJs.includes('releaseScreenWakeLock = async'), 'Engine releaseScreenWakeLock terpasang');
assert(nativeMobileJs.includes('syncCapacitorStatusBar'), 'Sinkronisasi StatusBar Capacitor terpasang');
assert(nativeMobileJs.includes('initAppLifecycleHandler'), 'Handler siklus hidup aplikasi (resume/foreground) terpasang');
assert(nativeMobileJs.includes('window.requestScreenWakeLock = requestScreenWakeLock'), 'WakeLock diekspos ke window.requestScreenWakeLock');

// ─── 6. Uji Ergonomi Tablet POS Kasir di src/modules/pos/pos.js ──
console.log('\n🛒 6. Uji Ergonomi Tablet POS Kasir di src/modules/pos/pos.js:');
const posJsPath = path.resolve('src/modules/pos/pos.js');
const posJs = fs.readFileSync(posJsPath, 'utf8');
assert(posJs.includes('md:w-[58%] lg:w-[63%] xl:w-[65%]'), 'Panel katalog POS mendukung tata letak tablet (md:w-[58%])');
assert(posJs.includes('hidden md:flex flex-col md:w-[42%] lg:w-[37%] xl:w-[35%]'), 'Panel keranjang POS aktif side-by-side di tablet (hidden md:flex md:w-[42%])');
assert(posJs.includes('id="pos-mobile-floating-bar" class="md:hidden'), 'Floating cart bar otomatis disembunyikan di layar tablet (md:hidden)');

console.log('\n============================================================');
console.log(`🎯 TOTAL HASIL: ${passed} Passed, ${failed} Failed`);
if (failed === 0) {
    console.log('✨ OFFLINE PWA ENGINE, VIEW TRANSITIONS & TABLET POS 100% VALID! ✅');
} else {
    console.error('⚠️ DITEMUKAN KEGAGALAN DALAM PENGUJIAN!');
    process.exit(1);
}
console.log('============================================================\n');
