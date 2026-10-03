/**
 * ============================================================
 * MIGRASI DATA SENSITIF: cms_data → cms_private
 * ============================================================
 * Jalankan SEKALI setelah deploy firestore.rules Fase 2.
 * Script ini memindahkan field sensitif dari dokumen publik
 * freshmart/cms_data ke freshmart/cms_private yang hanya bisa
 * dibaca oleh staf admin/owner.
 *
 * Field yang dimigrasikan:
 *   suppliers, purchases, expenses, taxSettings, stockOpnameHistory
 *
 * Cara jalankan:
 *   node scripts/migrate-private-data.mjs
 * ============================================================
 */
import { initializeApp, cert, getApps } from 'firebase-admin/app';
import { getFirestore, FieldValue } from 'firebase-admin/firestore';
import { readFileSync, existsSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const PRIVATE_KEYS = ['suppliers', 'purchases', 'expenses', 'taxSettings', 'stockOpnameHistory'];
const saPath = resolve(__dirname, '..', 'serviceAccountKey.json');

if (!getApps().length) {
    if (existsSync(saPath)) {
        const sa = JSON.parse(readFileSync(saPath, 'utf8'));
        initializeApp({ credential: cert(sa) });
        console.log('Menggunakan Service Account Key:', saPath);
    } else {
        initializeApp();
        console.log('Menggunakan Application Default Credentials (ADC)');
    }
}

const db = getFirestore();

async function migrate() {
    console.log('\n=== MIGRASI DATA SENSITIF: cms_data → cms_private ===\n');

    const cmsRef  = db.collection('freshmart').doc('cms_data');
    const privRef = db.collection('freshmart').doc('cms_private');

    console.log('Membaca freshmart/cms_data...');
    const cmsSnap = await cmsRef.get();
    if (!cmsSnap.exists) { console.error('cms_data tidak ditemukan!'); process.exit(1); }

    const cmsData = cmsSnap.data();
    const toMove = {};
    const deleteFromCms = {};
    let foundAny = false;

    for (const key of PRIVATE_KEYS) {
        if (key in cmsData) {
            toMove[key] = cmsData[key];
            deleteFromCms[key] = FieldValue.delete();
            const size = Array.isArray(cmsData[key]) ? cmsData[key].length + ' item' : typeof cmsData[key];
            console.log(`  ✓ ${key}: ${size}`);
            foundAny = true;
        } else {
            console.log(`  - ${key}: tidak ada di cms_data`);
        }
    }

    if (!foundAny) {
        console.log('\nTidak ada yang perlu dipindah. Migrasi sudah lengkap!');
        return;
    }

    console.log('\nMenulis ke freshmart/cms_private...');
    await privRef.set(toMove, { merge: true });
    console.log('✓ Data ditulis ke cms_private');

    console.log('Menghapus field sensitif dari cms_data...');
    await cmsRef.update(deleteFromCms);
    console.log('✓ Field dihapus dari cms_data');

    console.log('\n=== VERIFIKASI ===');
    const vPriv = (await privRef.get()).data();
    for (const key of Object.keys(toMove)) {
        const ok = key in (vPriv || {});
        console.log(`  cms_private.${key}: ${ok ? 'ADA ✓' : 'TIDAK ADA ❌'}`);
    }
    const vCms = (await cmsRef.get()).data();
    for (const key of Object.keys(toMove)) {
        const stillThere = key in (vCms || {});
        console.log(`  cms_data.${key}: ${stillThere ? 'MASIH ADA ❌' : 'Sudah hapus ✓'}`);
    }

    console.log('\n=== SELESAI ===');
    console.log('Langkah selanjutnya:');
    console.log('  firebase deploy --only firestore:rules');
}

migrate().catch(err => { console.error('GAGAL:', err); process.exit(1); });
