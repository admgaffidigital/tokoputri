/**
 * ============================================================
 * KONFIGURASI FIREBASE
 * File ini berisi inisialisasi Firebase: db, auth, analytics.
 * Untuk mengganti database toko, edit /public/config.js saja.
 * Jangan edit file ini langsung kecuali memang perlu.
 * ============================================================
 */

import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

// Konfigurasi Firebase: diambil dari public/config.js (window.FIREBASE_CONFIG)
// yang di-inject sebelum bundle JS dimuat, agar bisa diganti tanpa build ulang.
// Fallback ke config default jika public/config.js belum ada/belum diisi.
const defaultConfig = {
    apiKey: "AIzaSyCOjrhMP52TGbiOyQLY92NDYE26N6d9hJM",
    authDomain: "restu-karya-utama.firebaseapp.com",
    databaseURL: "https://restu-karya-utama-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "restu-karya-utama",
    storageBucket: "restu-karya-utama.firebasestorage.app",
    messagingSenderId: "858310421352",
    appId: "1:858310421352:web:e20a833875e8d5c19944dd",
    measurementId: "G-PHDG2LJ8PM"
};

// FIX KEAMANAN: hapus override config lama dari localStorage agar semua perangkat
// selalu pakai config yang sama (dari file tema/deploy), bukan config lama yang mungkin
// tersimpan dari sesi sebelumnya.
try { localStorage.removeItem('freshmart_fb_config'); } catch(e) {}

export const firebaseConfig = window.FIREBASE_CONFIG || defaultConfig;

// Inisialisasi Firebase (hanya sekali)
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export const db      = firebase.firestore();
export const auth    = firebase.auth();
export { firebase };

// Konfigurasi Firestore
// CATATAN: merge:true artinya "gabungkan settings ini dengan yang sudah ada",
// BUKAN override penuh. Tanpa ini Firebase mengeluarkan warning di console.
db.settings({
    ignoreUndefinedProperties: true,
    cacheSizeBytes: firebase.firestore.CACHE_SIZE_UNLIMITED,
    merge: true,
    // FIX: di jaringan tidak stabil (WiFi publik, proxy, VPN), koneksi QUIC sering gagal.
    // Opsi ini membiarkan SDK mendeteksi otomatis dan langsung pakai transport lebih stabil,
    // tanpa memaksa long-polling terus-menerus di jaringan normal.
    experimentalAutoDetectLongPolling: true,
});

// Aktifkan IndexedDB Persistence untuk load data super cepat & offline
try {
    db.enablePersistence({ synchronizeTabs: true }).catch((err) => {
        if (err.code === 'failed-precondition') {
            console.info('Firestore persistence: multi-tab active.');
        } else if (err.code === 'unimplemented') {
            console.info('Firestore persistence: browser not supported.');
        }
    });
} catch(e) {}

// Analytics diload LAZY setelah browser idle agar tidak memperlambat render awal.
// Gunakan loadAnalytics() untuk mengaktifkannya.
export let analytics = null;
export const loadAnalytics = () => {
    import('firebase/compat/analytics').then(() => {
        try { analytics = firebase.analytics(); } catch(e) {}
    }).catch(() => {});
};

// FIX KEAMANAN: hanya UID ini yang boleh jadi admin.
// Sebelumnya SIAPA SAJA yang login Firebase bisa jadi admin.
export const ADMIN_UID = 'K2ijSERTT2dg27yYGTEgn6XHSnW2';
