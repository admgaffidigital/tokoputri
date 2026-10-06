import fs from 'fs';
import path from 'path';

console.log('\n============================================================');
console.log('🔍 AUDIT KESEHATAN SISTEM & DIAGNOSTIK KODE TOKO PUTRI');
console.log('============================================================\n');

let errorCount = 0;
let warnCount = 0;

// 1. Validasi Berkas JSON Kritis
console.log('📦 1. Memeriksa Integritas Berkas JSON Kritis...');
const jsonFiles = [
    'package.json',
    'capacitor.config.json',
    'public/manifest.json',
    'firebase.json',
    '.firebaserc'
];

if (fs.existsSync('stores-config')) {
    fs.readdirSync('stores-config').forEach(f => {
        if (f.endsWith('.json')) jsonFiles.push(path.join('stores-config', f));
    });
}

for (const jf of jsonFiles) {
    try {
        if (!fs.existsSync(jf)) {
            console.error(`  ❌ Berkas JSON tidak ditemukan: ${jf}`);
            errorCount++;
            continue;
        }
        const content = fs.readFileSync(jf, 'utf8');
        JSON.parse(content);
        console.log(`  ✅ PASS: ${jf} valid JSON`);
    } catch (e) {
        console.error(`  ❌ ERROR parsing ${jf}: ${e.message}`);
        errorCount++;
    }
}

// 2. Audit Relatif Import Seluruh Berkas JS di src/
console.log('\n🔍 2. Memeriksa Konsistensi Impor Relatif JS di src/ ...');

function walk(dir) {
    let files = [];
    fs.readdirSync(dir).forEach(file => {
        let full = path.join(dir, file);
        if (fs.statSync(full).isDirectory()) files = files.concat(walk(full));
        else if (full.endsWith('.js')) files.push(full);
    });
    return files;
}

const allJsFiles = walk('src');
console.log(`  Ditemukan ${allJsFiles.length} berkas JS di direktori src/`);

const importRegex = /(?:import|from)\s+['"](\.[^'"]+)['"]/g;

let totalImportsChecked = 0;
for (const file of allJsFiles) {
    const code = fs.readFileSync(file, 'utf8');
    const dir = path.dirname(file);
    let match;
    while ((match = importRegex.exec(code)) !== null) {
        totalImportsChecked++;
        const targetRel = match[1];
        let targetPath = path.resolve(dir, targetRel);
        
        // Cek kemungkinan ekstensi .js jika tidak disebutkan
        if (!fs.existsSync(targetPath)) {
            if (fs.existsSync(targetPath + '.js')) {
                targetPath = targetPath + '.js';
            } else if (fs.existsSync(path.join(targetPath, 'index.js'))) {
                targetPath = path.join(targetPath, 'index.js');
            } else {
                console.error(`  ❌ ERROR IMPOR PATAH di [${file}]: Target tidak ada -> ${targetRel}`);
                errorCount++;
            }
        }
    }
}
console.log(`  ✅ PASS: ${totalImportsChecked} relative imports terverifikasi valid.`);

// 3. Verifikasi Aset Kritis
console.log('\n🖼️  3. Memeriksa Ketersediaan Aset Kritis...');
const criticalAssets = [
    'public/config.js',
    'public/manifest.json',
    'public/official_logo.png',
    'firestore.rules'
];
for (const asset of criticalAssets) {
    if (fs.existsSync(asset)) {
        const stats = fs.statSync(asset);
        console.log(`  ✅ PASS: ${asset} (${(stats.size / 1024).toFixed(1)} KB)`);
    } else {
        console.error(`  ❌ Aset kritis hilang: ${asset}`);
        errorCount++;
    }
}

console.log('\n============================================================');
if (errorCount === 0) {
    console.log(`🎉 AUDIT SUKSES: 0 Error, ${warnCount} Warning. Sistem dalam kondisi prima!`);
} else {
    console.error(`⚠️ AUDIT SELESAI: Ditemukan ${errorCount} error yang memerlukan perbaikan.`);
}
console.log('============================================================\n');

process.exit(errorCount === 0 ? 0 : 1);

