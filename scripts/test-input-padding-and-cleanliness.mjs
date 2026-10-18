import fs from 'fs';
import path from 'path';

console.log('\n============================================================');
console.log('🧪 MENJALANKAN TEST SUITE KEBERSIHAN KOLOM INPUT & PROTEKSI PADDING');
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

// 1. Verifikasi Aturan CSS di src/style.css
console.log('🎨 1. Uji Validasi Rule CSS di src/style.css:');
const css = fs.readFileSync('src/style.css', 'utf8');

// Tidak boleh ada padding-left: 0.875rem !important pada selektor universal tanpa filter
const hasUnfilteredPaddingLeft = /input:not\([^\)]+\)[^{]*\{[^}]*padding-left:\s*0\.875rem\s*!important/s.test(css.slice(css.indexOf('2. STANDARDISASI UNIVERSAL'), css.indexOf('Padding Default Bersih')));
assert(!hasUnfilteredPaddingLeft, 'Selektor universal input tidak memaksakan padding-left yang menabrak ikon');

// Harus ada utilitas presisi pl-10 s.d pl-14 dan pr-10 s.d pr-12
assert(css.includes('input[class*="pl-11"]') && css.includes('padding-left: 2.75rem !important'), 'Rule utilitas presisi input[class*="pl-11"] (2.75rem / 44px) terpasang');
assert(css.includes('input[class*="pl-12"]') && css.includes('padding-left: 3rem !important'), 'Rule utilitas presisi input[class*="pl-12"] (3rem / 48px) terpasang');
assert(css.includes('input[class*="pl-14"]') && css.includes('padding-left: 3.5rem !important'), 'Rule utilitas presisi input[class*="pl-14"] (3.5rem / 56px) terpasang');
assert(css.includes('input[class*="pr-11"]') && css.includes('padding-right: 2.75rem !important'), 'Rule utilitas presisi input[class*="pr-11"] (2.75rem / 44px) terpasang');
assert(css.includes('input[class*="pr-12"]') && css.includes('padding-right: 3rem !important'), 'Rule utilitas presisi input[class*="pr-12"] (3rem / 48px) terpasang');

// Harus ada proteksi kontekstual kontainer berikon
assert(css.includes('.relative:has(> i.absolute[class*="left-4"]) > input'), 'Proteksi kontekstual kontainer berikon kiri (left-4) terpasang');
assert(css.includes('.relative:has(> button.absolute[class*="right-3"]) > input'), 'Proteksi kontekstual kontainer bertombol kanan (right-3) terpasang');

// Harus ada sanitasi autofill
assert(css.includes('input:-webkit-autofill') && css.includes('-webkit-box-shadow: 0 0 0 1000px'), 'Sanitasi autofill bersih anti-mud terpasang');
assert(css.includes('html.dark input:-webkit-autofill'), 'Sanitasi autofill dark mode terpasang');

// Harus ada eliminasi tombol bawaan browser (Edge/Chrome native clear/reveal)
assert(css.includes('input::-ms-reveal') && css.includes('display: none !important'), 'Eliminasi tombol reveal/clear Edge/Chrome bawaan terpasang');

// 2. Verifikasi Form Login di index.html
console.log('\n🏛️  2. Uji Integritas Kolom Input Login di index.html:');
const html = fs.readFileSync('index.html', 'utf8');

const loginUsernameMatch = html.match(/id=["']login-username["'][^>]*class=["']([^"']+)["']/i) || 
                           html.match(/class=["']([^"']+)["'][^>]*id=["']login-username["']/i);
assert(loginUsernameMatch && (loginUsernameMatch[1].includes('pl-12') || loginUsernameMatch[1].includes('pl-11')), 'Input #login-username memiliki padding kiri lega (pl-12/pl-11) bebas tabrakan ikon');

const loginPasswordMatch = html.match(/id=["']login-password["'][^>]*class=["']([^"']+)["']/i) ||
                           html.match(/class=["']([^"']+)["'][^>]*id=["']login-password["']/i);
assert(loginPasswordMatch && (loginPasswordMatch[1].includes('pl-12') || loginPasswordMatch[1].includes('pl-11')), 'Input #login-password memiliki padding kiri lega (pl-12/pl-11) bebas tabrakan ikon');
assert(loginPasswordMatch && (loginPasswordMatch[1].includes('pr-12') || loginPasswordMatch[1].includes('pr-11')), 'Input #login-password memiliki padding kanan lega (pr-12/pr-11) bebas tabrakan eye button');

const posLoginPasswordMatch = html.match(/id=["']pos-login-password["'][^>]*class=["']([^"']+)["']/i) ||
                              html.match(/class=["']([^"']+)["'][^>]*id=["']pos-login-password["']/i);
assert(posLoginPasswordMatch && posLoginPasswordMatch[1].includes('pr-11'), 'Input #pos-login-password memiliki padding kanan lega (pr-11) bebas tabrakan tombol eye');

console.log('\n============================================================');
console.log(`🎯 HASIL UJI COBA: ${passed} Passed, ${failed} Failed`);
if (failed === 0) {
    console.log('✨ SISTEM KEBERSIHAN KOLOM INPUT 100% VALID & BEBAS TABRAKAN TEKS! ✅');
} else {
    console.error('❌ ADA KEGAGALAN DALAM UJI COBA KEBERSIHAN KOLOM INPUT.');
}
console.log('============================================================\n');

process.exit(failed === 0 ? 0 : 1);
