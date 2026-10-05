#!/usr/bin/env node
/**
 * ============================================================
 * SCRIPT OTOMASI KLONING TOKO 1-KLIK (MANAGED WHITELABEL SAAS)
 * Membantu developer men-setup toko baru untuk klien dalam waktu < 5 menit.
 *
 * Penggunaan:
 *   node scripts/new-store.mjs --name "Toko Berkah" --code "BERKAH" --phone "081234567890" --days 365 --theme "teal"
 * ============================================================
 */

import fs from 'fs';
import path from 'path';

const LICENSE_SECRET_SALT = 'TP_GAFFI_WHITELABEL_2026';

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

// Parse arguments
const args = process.argv.slice(2);
const params = {
    name: 'Toko Baru',
    code: 'TOKO_BARU',
    phone: '',
    client: 'Pemilik Toko',
    theme: 'emerald',
    days: 365,
    devContact: '6281234567890',
    devName: 'Developer / Technical Partner'
};

for (let i = 0; i < args.length; i++) {
    if (args[i] === '--name' && args[i + 1]) { params.name = args[++i]; }
    else if (args[i] === '--code' && args[i + 1]) { params.code = args[++i].toUpperCase().replace(/[^A-Z0-9_]/g, ''); }
    else if (args[i] === '--phone' && args[i + 1]) { params.phone = args[++i]; }
    else if (args[i] === '--client' && args[i + 1]) { params.client = args[++i]; }
    else if (args[i] === '--theme' && args[i + 1]) { params.theme = args[++i]; }
    else if (args[i] === '--days' && args[i + 1]) { params.days = parseInt(args[++i], 10) || 365; }
    else if (args[i] === '--devContact' && args[i + 1]) { params.devContact = args[++i]; }
    else if (args[i] === '--devName' && args[i + 1]) { params.devName = args[++i]; }
}

const now = new Date();
const expiryDate = new Date(now.getTime() + (params.days * 24 * 60 * 60 * 1000));
const formattedExpiry = expiryDate.toLocaleDateString('id-ID', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
});

const checksum = computeChecksum(params.code, params.days);
const initialLicenseKey = `PUTRI-${params.days}D-${params.code}-${checksum}`;

// Profile toko baru siap-impor
const storeProfile = {
    _meta: {
        createdAt: now.toISOString(),
        createdBy: params.devName,
        storeCode: params.code
    },
    store: {
        name: params.name,
        code: params.code,
        slogan: "Toko Online & Kasir Resmi",
        logo: "fa-store",
        wa: params.phone,
        phone: params.phone,
        address: "Alamat Toko",
        lat: "-7.82308507053985",
        lng: "112.0988374794464",
        costPerKm: 0,
        isDeliveryEnabled: true,
        isPickupEnabled: true,
        uiTheme: params.theme,
        themeColor: params.theme === 'emerald' ? '#10b981' : (params.theme === 'teal' ? '#14b8a6' : '#c59b27'),
        bgStyle: "minimalist",
        showHeroSlide: true,
        heroBadgeText: "Siap Melayani",
        heroWelcomeTag: "SELAMAT DATANG",
        heroTitle: params.name,
        heroSubtitle: "Pusat belanja resmi, lengkap, dan terpercaya.",
        useStock: true,
        ppnEnabled: false,
        paylater: {
            enabled: true,
            minOrder: 20000,
            maxOrder: 10000000,
            noticeText: "Cicilan transparan tanpa biaya tersembunyi.",
            tenors: {
                "30d": { enabled: true, label: "30 Hari (1x Bayar)", months: 1, days: 30 },
                "2m":  { enabled: true, label: "2 Bulan (Cicilan 2x)", months: 2, days: 60 },
                "3m":  { enabled: true, label: "3 Bulan (Cicilan 3x)", months: 3, days: 90 }
            }
        }
    },
    subscription: {
        status: 'active',
        plan: 'pro_managed',
        storeCode: params.code,
        clientName: params.client,
        expiresAt: expiryDate.toISOString(),
        allowGraceDays: 7,
        developerContact: params.devContact,
        developerName: params.devName,
        lastActivatedAt: now.toISOString(),
        lastLicenseKey: initialLicenseKey
    },
    payment: { qrisUrl: "" },
    config: { gasUrl: "" }
};

// Buat direktori stores-config jika belum ada
const configDir = path.resolve(process.cwd(), 'stores-config');
if (!fs.existsSync(configDir)) {
    fs.mkdirSync(configDir, { recursive: true });
}

const outputFile = path.join(configDir, `${params.code}.json`);
fs.writeFileSync(outputFile, JSON.stringify(storeProfile, null, 2), 'utf-8');

console.log('\n' + '='.repeat(68));
console.log('  🚀 SUKSES MEMBUAT INSTANCE TOKO BARU (MANAGED SAAS)');
console.log('='.repeat(68));
console.log(`  🏪 Nama Toko       : ${params.name}`);
console.log(`  🔖 Kode Toko       : ${params.code}`);
console.log(`  👤 Nama Pemilik    : ${params.client}`);
console.log(`  📱 WhatsApp Toko   : ${params.phone || '-'}`);
console.log(`  🎨 Tema Tampilan   : ${params.theme}`);
console.log(`  ⏱️  Durasi Sewa     : ${params.days} Hari (Masa Aktif hingga ${formattedExpiry})`);
console.log(`  🔑 Kunci Lisensi   : \x1b[32m\x1b[1m${initialLicenseKey}\x1b[0m`);
console.log(`  💾 Berkas Konfig   : stores-config/${params.code}.json`);
console.log('-'.repeat(68));
console.log('📋 LANGKAH CEPAT DEPLOY TOKO KLIEN (< 5 MENIT):');
console.log('1. Buat Firebase Project baru untuk klien (misal: "toko-berkah-id") di console.firebase.google.com');
console.log('2. Buka Firestore Database -> buat koleksi "freshmart" -> dokumen "cms_data"');
console.log('3. Salin isi file stores-config/' + params.code + '.json ke cms_data');
console.log('4. Sambungkan ke Vercel (1 repository, bedakan konfigurasi Firebase melalui environment variables / config.js)');
console.log('5. (Opsional) Pasang custom domain klien (misal: tokoberkah.com) di dashboard Vercel');
console.log('6. Buat file .apk bertuliskan nama toko klien dengan Capacitor: npm run build');
console.log('='.repeat(68) + '\n');
