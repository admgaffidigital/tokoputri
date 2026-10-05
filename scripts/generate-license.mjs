#!/usr/bin/env node
/**
 * ============================================================
 * GENERATOR KUNCI LISENSI RESMI (MANAGED SAAS / WHITELABEL)
 * Digunakan oleh Pengembang / Technical Partner untuk menerbitkan
 * kode lisensi perpanjangan sewa software kepada pemilik toko.
 *
 * Penggunaan:
 *   node scripts/generate-license.mjs --store "BERKAH" --days 365
 *   node scripts/generate-license.mjs --store "PUTRI" --days 30
 *   node scripts/generate-license.mjs --store "MASTER" --days 3650
 * ============================================================
 */

const LICENSE_SECRET_SALT = 'TP_GAFFI_WHITELABEL_2026';

// Algoritma hash identik dengan src/core/subscription.js
const simpleHash = (str) => {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        const char = str.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash;
    }
    return Math.abs(hash).toString(16).toUpperCase();
};

const computeChecksum = (storeCode, days) => {
    const raw = `${storeCode.toUpperCase().trim()}_${days}_${LICENSE_SECRET_SALT}`;
    return simpleHash(raw).padStart(6, '0').substring(0, 6);
};

// Parse command line arguments
const args = process.argv.slice(2);
let storeCode = 'PUTRI';
let days = 365;

for (let i = 0; i < args.length; i++) {
    if (args[i] === '--store' && args[i + 1]) {
        storeCode = args[i + 1].toUpperCase().trim();
        i++;
    } else if (args[i] === '--days' && args[i + 1]) {
        days = parseInt(args[i + 1], 10) || 365;
        i++;
    }
}

if (!days || isNaN(days) || days <= 0) {
    console.error('❌ Error: Jumlah hari harus berupa angka positif!');
    process.exit(1);
}

const checksum = computeChecksum(storeCode, days);
const licenseKey = `PUTRI-${days}D-${storeCode}-${checksum}`;

const now = new Date();
const targetDate = new Date(now.getTime() + (days * 24 * 60 * 60 * 1000));
const formattedTarget = targetDate.toLocaleDateString('id-ID', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
});

console.log('\n' + '='.repeat(64));
console.log('  👑 GENERATOR LISENSI RESMI - MANAGED WHITELABEL SAAS');
console.log('='.repeat(64));
console.log(`  🏢 Kode Toko Target : ${storeCode}`);
console.log(`  ⏱️  Durasi Lisensi   : ${days} Hari (${Math.round(days / 30)} Bulan)`);
console.log(`  📅 Estimasi Berakhir: ${formattedTarget}`);
console.log('  --------------------------------------------------------------');
console.log(`  🔑 KODE LISENSI RESMI:`);
console.log(`     \x1b[32m\x1b[1m${licenseKey}\x1b[0m`);
console.log('  --------------------------------------------------------------');
console.log('\n💬 DRAF PESAN WHATSAPP UNTUK KLIEN / PEMILIK TOKO:');
console.log('-'.repeat(64));
console.log(`Halo Bapak/Ibu Pemilik Toko [${storeCode}],

Terima kasih atas pembayaran perpanjangan sewa operasional sistem toko Anda.
Berikut adalah Kode Lisensi Resmi Perpanjangan Layanan (${days} Hari):

👉 *${licenseKey}*

*Cara Aktivasi Sangat Mudah:*
1. Buka Panel Kontrol Toko Anda
2. Masuk ke menu *Pengaturan Toko*
3. Klik tombol *'Masukkan Lisensi'*
4. Tempelkan kode lisensi di atas dan klik *'Aktifkan Lisensi'*

Sistem toko Anda akan otomatis aktif kembali hingga *${formattedTarget}*.
Seluruh data produk, pesanan, dan keuangan toko Anda tetap aman terjaga.

Terima kasih atas kerja sama dan kepercayaan Anda!
Tim Dukungan Teknis.`);
console.log('-'.repeat(64));
console.log('='.repeat(64) + '\n');
