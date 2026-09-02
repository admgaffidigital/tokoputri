import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import 'firebase/compat/analytics';

// Konfigurasi Default Bawaan Script
export const defaultFbC = { 
    apiKey: "AIzaSyCOjrhMP52TGbiOyQLY92NDYE26N6d9hJM",
    authDomain: "restu-karya-utama.firebaseapp.com",
    databaseURL: "",
    projectId: "restu-karya-utama",
    storageBucket: "restu-karya-utama.firebasestorage.app",
    messagingSenderId: "858310421352",
    appId: "1:858310421352:web:e20a833875e8d5c19944dd",
    measurementId: "G-PHDG2LJ8PM"
};

// Remove override if present in localStorage
try { localStorage.removeItem('freshmart_fb_config'); } catch(e) {}
export const fbC = defaultFbC;

// GAS URL
export let GAS_UPLOAD_URL = "https://script.google.com/macros/s/AKfycbx3dW9rHcdoKNYjSOJ8PoH2k6fABe7XlBD9teNHsBlCBqJquq8jd4UvnfXZVsfKdFsC/exec";

export const setGasUploadUrl = (url) => {
    GAS_UPLOAD_URL = url;
};

// Inisialisasi Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(fbC);
}

export const analytics = firebase.analytics();
export const db = firebase.firestore();
export const auth = firebase.auth();

// FIX KEAMANAN: hanya 1 akun (UID) ini yang boleh jadi admin.
export const ADMIN_UID = 'K2ijSERTT2dg27yYGTEgn6XHSnW2';

// CATATAN: merge:true di db.settings() adalah opsi VALID Firebase — artinya
// "gabungkan settings ini dengan settings yang sudah ada" (bukan override penuh).
// Tanpa ini Firebase mengeluarkan warning "You are overriding the original host" di console.
// Aktifkan IndexedDB Persistence dengan sinkronisasi multi-tab untuk load data super cepat & offline
try {
    db.enablePersistence({ synchronizeTabs: true }).catch((err) => {
        if (err.code === 'failed-precondition') {
            // Multi-tab active
        } else if (err.code === 'unimplemented') {
            // Browser not supported
        }
    });
} catch(e) {}

db.settings({
    ignoreUndefinedProperties: true,
    cacheSizeBytes: firebase.firestore.CACHE_SIZE_UNLIMITED,
    merge: true,
    experimentalForceLongPolling: true,
});

export { firebase };
