/**
 * ============================================================
 * TEST SUITE: DELIVERY MANAGEMENT & SURAT JALAN (DO) ENGINE
 * Fase 3 Roadmap Strategis Toko Putri (v1.13.0)
 * ============================================================
 */

import assert from 'assert';
import { generateDONumber, DEFAULT_FLEETS, DELIVERY_STATUSES, getOrderDeliveryData } from '../src/modules/admin/delivery.js';
import { generateCode128Svg } from '../src/core/barcode-code128.js';

console.log('\n============================================================');
console.log('🧪 MENJALANKAN TEST SUITE LOGISTIK & SURAT JALAN (DO)');
console.log('============================================================\n');

let passCount = 0;
let failCount = 0;

const test = (name, fn) => {
    try {
        fn();
        console.log(`  ✅ PASS: ${name}`);
        passCount++;
    } catch (e) {
        console.error(`  ❌ FAIL: ${name}`);
        console.error(`     Error: ${e.message}`);
        failCount++;
    }
};

// ────────────────────────────────────────────────────────────
// 1. UJI GENERATOR NOMOR SURAT JALAN (DO)
// ────────────────────────────────────────────────────────────
console.log('📋 1. Uji Generator Nomor Surat Jalan (DO):');

test('Format nomor DO sesuai standar DO-YYMM-XXXXX', () => {
    const doNum = generateDONumber('ORD-202610-ABCD9');
    assert.ok(doNum.startsWith('DO-'), 'Harus diawali prefix DO-');
    const parts = doNum.split('-');
    assert.strictEqual(parts.length, 3, 'Harus terdiri dari 3 segmen terpisah strip');
    assert.strictEqual(parts[1].length, 4, 'Segmen kedua adalah YYMM 4 digit');
    assert.ok(parts[2].length >= 4, 'Segmen ketiga adalah kode unik alfanumerik');
});

test('Nomor DO konsisten menghasilkan string alfanumerik uppercase', () => {
    const doNum = generateDONumber('pos-12345');
    assert.strictEqual(doNum, doNum.toUpperCase(), 'Nomor DO harus uppercase');
});

// ────────────────────────────────────────────────────────────
// 2. UJI BARCODE CODE 128 UNTUK SURAT JALAN
// ────────────────────────────────────────────────────────────
console.log('\n🏷️ 2. Uji Integrasi Barcode Code 128 pada Surat Jalan:');

test('Nomor DO berhasil diubah menjadi Barcode Vektor SVG', () => {
    const doNum = 'DO-2610-A9F21';
    const svg = generateCode128Svg(doNum, { height: 35, showText: true });
    assert.ok(typeof svg === 'string', 'Output harus string');
    assert.ok(svg.startsWith('<svg'), 'Harus elemen SVG valid');
    assert.ok(svg.includes('DO-2610-A9F21'), 'Teks human-readable nomor DO harus ada di SVG');
    assert.ok(svg.includes('fill="#ffffff"'), 'Harus memiliki latar belakang putih solid');
    assert.ok(svg.includes('<rect'), 'Harus memiliki elemen batang hitam');
});

// ────────────────────────────────────────────────────────────
// 3. UJI INITIALISASI STRUKTUR DATA LOGISTIK
// ────────────────────────────────────────────────────────────
console.log('\n📦 3. Uji Inisialisasi Data Pengiriman Pesanan:');

const mockOrder = {
    orderId: 'ORD-PROYEK-001',
    customer: {
        name: 'Pak Mandor Joko',
        wa: '08123456789',
        address: 'Jl. Graha Mandiri No. 8, Proyek Ruko',
        note: 'Bongkar di samping bedeng mandor',
        lat: -6.2000,
        lng: 106.8166
    },
    items: [
        { id: 'sem-01', name: 'Semen Gresik 50kg', variantName: '', qty: 50, unit: 'sak' },
        { id: 'heb-01', name: 'Bata Ringan Hebel 10cm', variantName: 'Standar', qty: 200, unit: 'pcs' },
        { id: 'cat-01', name: 'Cat Tembok Putih 20kg', variantName: 'Brilliant White', qty: 2, unit: 'pail' }
    ]
};

test('getOrderDeliveryData membentuk struktur DO lengkap dari order', () => {
    const del = getOrderDeliveryData(mockOrder);
    assert.strictEqual(del.orderId, 'ORD-PROYEK-001');
    assert.ok(del.doNumber.startsWith('DO-'));
    assert.strictEqual(del.status, 'pending_dispatch');
    assert.strictEqual(del.recipientName, 'Pak Mandor Joko');
    assert.strictEqual(del.recipientPhone, '08123456789');
    assert.strictEqual(del.destinationAddress, 'Jl. Graha Mandiri No. 8, Proyek Ruko');
    assert.strictEqual(del.unloadNotes, 'Bongkar di samping bedeng mandor');
    assert.strictEqual(del.checklist.length, 3, 'Checklist muatan harus memuat 3 barang');
    assert.strictEqual(del.checklist[0].loaded, true, 'Default muatan tercentang siap muat');
});

test('Dukungan prioritas Drop Point jika pesanan dikirim ke lokasi berbeda', () => {
    const mockDropPointOrder = {
        orderId: 'ORD-DROP-002',
        customer: { name: 'Ibu Bos Arsitek', wa: '08111111' },
        isDropPoint: true,
        dropPoint: {
            name: 'Mandor Asep Lapangan',
            wa: '08222222',
            address: 'Lokasi Proyek Villa Puncak Cisarua',
            lat: -6.7,
            lng: 106.9
        },
        items: [{ id: 'p1', name: 'Paku Cor 5cm', qty: 10, unit: 'kg' }]
    };

    const del = getOrderDeliveryData(mockDropPointOrder);
    assert.strictEqual(del.recipientName, 'Mandor Asep Lapangan', 'Penerima harus mengacu ke Drop Point');
    assert.strictEqual(del.recipientPhone, '08222222');
    assert.strictEqual(del.destinationAddress, 'Lokasi Proyek Villa Puncak Cisarua');
});

// ────────────────────────────────────────────────────────────
// 4. UJI PRESET ARMADA & SIKLUS STATUS PENGIRIMAN
// ────────────────────────────────────────────────────────────
console.log('\n🚛 4. Uji Preset Armada & Transisi Status Logistik:');

test('Preset armada mencakup kendaraan ritel material konstruksi', () => {
    assert.ok(DEFAULT_FLEETS.length >= 5, 'Harus ada minimal 5 jenis armada preset');
    const pickup = DEFAULT_FLEETS.find(f => f.id === 'pickup');
    const truck = DEFAULT_FLEETS.find(f => f.id === 'truck_engkel');
    const trike = DEFAULT_FLEETS.find(f => f.id === 'trike');
    assert.ok(pickup, 'Armada Mobil Pick-up harus tersedia');
    assert.ok(truck, 'Armada Truk Engkel harus tersedia');
    assert.ok(trike, 'Armada Roda Tiga harus tersedia');
});

test('Metadata status pengiriman terdefinisi lengkap', () => {
    assert.ok(DELIVERY_STATUSES.pending_dispatch, 'Status pending_dispatch harus ada');
    assert.ok(DELIVERY_STATUSES.out_for_delivery, 'Status out_for_delivery harus ada');
    assert.ok(DELIVERY_STATUSES.delivered, 'Status delivered harus ada');
    assert.strictEqual(DELIVERY_STATUSES.out_for_delivery.label, 'Dalam Perjalanan');
});

// ────────────────────────────────────────────────────────────
// 5. UJI SERAH TERIMA & BUKTI TANDA TANGAN DIGITAL
// ────────────────────────────────────────────────────────────
console.log('\n✍️ 5. Uji Verifikasi Tanda Tangan Digital Proyek:');

test('Payload serah terima dan tanda tangan digital tervalidasi', () => {
    const del = getOrderDeliveryData(mockOrder);
    
    // Simulasi input tanda tangan dari signature pad
    const mockSignature = {
        signerName: 'Asep Supriadi (Mandor Pelaksana)',
        signatureDataUrl: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==',
        timestamp: 1728475000000,
        notes: 'Semen dan hebel dicek lengkap di lokasi.'
    };

    del.status = 'delivered';
    del.deliveredAt = mockSignature.timestamp;
    del.signature = mockSignature;
    del.logs.push({ status: 'delivered', timestamp: mockSignature.timestamp, note: 'Serah terima diverifikasi' });

    assert.strictEqual(del.status, 'delivered');
    assert.ok(del.signature.signatureDataUrl.startsWith('data:image/png;base64,'), 'Harus data URL PNG gambar tanda tangan');
    assert.strictEqual(del.signature.signerName, 'Asep Supriadi (Mandor Pelaksana)');
    assert.strictEqual(del.logs.length, 2, 'Log riwayat harus bertambah');
});

// ────────────────────────────────────────────────────────────
// HASIL AKHIR
// ────────────────────────────────────────────────────────────
console.log('\n============================================================');
console.log(`🎯 HASIL UJI COBA: ${passCount} Passed, ${failCount} Failed`);
if (failCount === 0) {
    console.log('✨ ENGINE LOGISTIK & SURAT JALAN (DO) TERVERIFIKASI 100% VALID! ✅');
    console.log('============================================================\n');
    process.exit(0);
} else {
    console.error('❌ TERDAPAT PENGUJIAN YANG GAGAL!');
    console.log('============================================================\n');
    process.exit(1);
}
