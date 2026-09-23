/**
 * ============================================================
 * MODUL POS KASIR: AUTENTIKASI KASIR
 * Login / logout kasir yang terpisah dari sesi admin.
 * Akun kasir didaftarkan oleh admin via CMS → disimpan ke
 * Firestore (freshmart/cms_data/cashier_accounts).
 * Sesi kasir pakai Firebase Auth (sama) tapi state-nya
 * disimpan di sessionStorage agar tidak bentrok dengan admin.
 * ============================================================
 */

import { auth, db, firebase } from '../../config/firebase.js';
import { appData } from '../../core/state.js';
import { el, esc, showToast, sLoad, hLoad } from '../../core/utils.js';

// ─── Cashier Session State ───────────────────────────────────
let _cashierSession = null; // { uid, name, email, role }

export const getCashierSession = () => {
    if (_cashierSession) return _cashierSession;
    try {
        const raw = sessionStorage.getItem('pos_cashier_session');
        if (raw) {
            _cashierSession = JSON.parse(raw);
            return _cashierSession;
        }
    } catch (e) {}
    return null;
};

const setCashierSession = (data) => {
    _cashierSession = data;
    try {
        if (data) sessionStorage.setItem('pos_cashier_session', JSON.stringify(data));
        else sessionStorage.removeItem('pos_cashier_session');
    } catch (e) {}
};

export const clearCashierSession = () => {
    _cashierSession = null;
    try { sessionStorage.removeItem('pos_cashier_session'); } catch (e) {}
};

export const isCashierLoggedIn = () => !!getCashierSession();

// ─── Cek apakah ada kasir terdaftar di toko ─────────────────
export const checkCashierExists = async () => {
    try {
        const snap = await db.collection('freshmart').doc('cms_data')
            .collection('cashier_accounts')
            .where('isActive', '==', true)
            .limit(1).get();
        return !snap.empty;
    } catch (e) {
        return false;
    }
};

// ─── Tampilkan / Sembunyikan icon POS di header ──────────────
export const updatePOSHeaderIcon = async () => {
    const btn = el('pos-cashier-header-btn');
    if (!btn) return;
    try {
        const exists = await checkCashierExists();
        if (exists) {
            btn.classList.remove('hidden');
        } else {
            btn.classList.add('hidden');
        }
    } catch (e) {
        btn.classList.remove('hidden'); // tampilkan saja jika error
    }
};

// ─── Buka POS Mode (entry point dari header) ─────────────────
export const openPOSCashierMode = async () => {
    if (typeof window.triggerHaptic === 'function') window.triggerHaptic('medium');
    const session = getCashierSession();
    if (session) {
        // sudah login → langsung buka POS
        if (typeof window.changeView === 'function') window.changeView('view-pos-cashier');
        if (typeof window.renderPOSStorefront === 'function') window.renderPOSStorefront();
    } else {
        openPOSLoginModal();
    }
};

// ─── Modal Login Kasir ───────────────────────────────────────
export const openPOSLoginModal = () => {
    const modal = el('pos-login-modal');
    if (!modal) return;
    modal.classList.remove('hidden');
    setTimeout(() => {
        modal.classList.remove('opacity-0');
        const box = el('pos-login-modal-box');
        if (box) box.classList.remove('translate-y-full', 'scale-95');
    }, 10);
    // Focus ke email input
    setTimeout(() => {
        const emailInput = el('pos-login-email');
        if (emailInput) emailInput.focus();
    }, 300);
    if (typeof window.triggerHaptic === 'function') window.triggerHaptic('light');
};

export const closePOSLoginModal = () => {
    const modal = el('pos-login-modal');
    const box = el('pos-login-modal-box');
    if (modal) modal.classList.add('opacity-0');
    if (box) box.classList.add('translate-y-full');
    setTimeout(() => {
        if (modal) modal.classList.add('hidden');
        // Reset form
        const emailInput = el('pos-login-email');
        const passInput = el('pos-login-password');
        const errEl = el('pos-login-error');
        if (emailInput) emailInput.value = '';
        if (passInput) passInput.value = '';
        if (errEl) { errEl.textContent = ''; errEl.classList.add('hidden'); }
    }, 300);
};

// ─── Proses Login Kasir ──────────────────────────────────────
export const processCashierLogin = async () => {
    const emailInput = el('pos-login-email');
    const passInput  = el('pos-login-password');
    const errEl      = el('pos-login-error');
    const btn        = el('pos-login-btn');

    const email = emailInput?.value?.trim() || '';
    const pass  = passInput?.value || '';

    const showErr = (msg) => {
        if (errEl) {
            errEl.classList.remove('hidden');
            const span = errEl.querySelector('span');
            if (span) span.textContent = msg;
            else errEl.textContent = msg;
        }
        if (typeof window.triggerHaptic === 'function') window.triggerHaptic('error');
    };
    const clearErr = () => {
        if (errEl) {
            errEl.classList.add('hidden');
            const span = errEl.querySelector('span');
            if (span) span.textContent = '';
        }
    };

    clearErr();
    if (!email || !pass) { showErr('Email dan password wajib diisi.'); return; }

    if (btn) { btn.disabled = true; btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin mr-2"></i>Memverifikasi...'; }

    try {
        // Sign in ke Firebase Auth
        const cred = await auth.signInWithEmailAndPassword(email, pass);
        const uid  = cred.user?.uid;
        if (!uid) throw new Error('UID tidak ditemukan');

        // Verifikasi role kasir di Firestore
        const docRef = db.collection('freshmart').doc('cms_data').collection('cashier_accounts').doc(uid);
        const docSnap = await docRef.get();

        if (!docSnap.exists) {
            await auth.signOut();
            showErr('Akun ini bukan akun kasir yang terdaftar di toko ini.');
            return;
        }

        const cashierData = docSnap.data();

        if (cashierData.role !== 'cashier') {
            await auth.signOut();
            showErr('Akun ini tidak memiliki akses kasir.');
            return;
        }

        if (!cashierData.isActive) {
            await auth.signOut();
            showErr('Akun kasir ini telah dinonaktifkan. Hubungi admin toko.');
            return;
        }

        // Simpan sesi kasir di sessionStorage (tidak mengganggu sesi admin)
        setCashierSession({
            uid,
            name: cashierData.name || email,
            email: cashierData.email || email,
            role: 'cashier'
        });

        // Jika admin sedang login, jangan sign out Firebase Auth
        // (gunakan state window.__cashierSession untuk POS, admin tetap pakai window.isAdm)
        // Note: Firebase Auth akan menunjuk ke akun kasir sekarang,
        // namun admin session di Firestore (admin_session doc) tidak terganggu

        closePOSLoginModal();
        showToast(`Selamat datang, ${cashierData.name || 'Kasir'}! 👋`, 'success');

        // Buka POS View
        if (typeof window.changeView === 'function') window.changeView('view-pos-cashier');
        setTimeout(() => {
            if (typeof window.renderPOSStorefront === 'function') window.renderPOSStorefront();
        }, 100);

        if (typeof window.triggerHaptic === 'function') window.triggerHaptic('success');

    } catch (err) {
        console.error('[POS Auth] Login error:', err);
        const code = err.code || '';
        if (code === 'auth/user-not-found' || code === 'auth/wrong-password' || code === 'auth/invalid-credential') {
            showErr('Email atau password salah.');
        } else if (code === 'auth/too-many-requests') {
            showErr('Terlalu banyak percobaan. Coba lagi beberapa saat.');
        } else if (code === 'auth/network-request-failed') {
            showErr('Koneksi gagal. Periksa jaringan internet.');
        } else {
            showErr('Login gagal: ' + (err.message || 'Kesalahan tidak diketahui'));
        }
    } finally {
        if (btn) { btn.disabled = false; btn.innerHTML = '<i class="fa-solid fa-right-to-bracket mr-2"></i>Masuk Kasir'; }
    }
};

// ─── Logout Kasir ────────────────────────────────────────────
export const cashierLogout = async () => {
    const session = getCashierSession();
    if (!session) return;

    if (typeof window.detachPOSHistoryListener === 'function') {
        window.detachPOSHistoryListener();
    }

    try {
        // Sign out dari Firebase Auth HANYA jika tidak ada admin yang login
        if (!window.isAdm && !window.__localIsAdm) {
            try { await auth.signOut(); } catch(e) {}
        }
    } catch (e) {}

    clearCashierSession();
    if (typeof window.destroyBarcodeListener === 'function') window.destroyBarcodeListener();
    showToast('Sesi kasir berakhir. Sampai jumpa! 👋');

    // Kembali ke storefront
    if (typeof window.changeView === 'function') window.changeView('view-catalog');

    if (typeof window.triggerHaptic === 'function') window.triggerHaptic('medium');
};

// ─── Inisialisasi: pasang icon POS di header jika ada kasir ──
export const initPOSAuth = async () => {
    await updatePOSHeaderIcon();
};

// ─── Expose ke window ────────────────────────────────────────
window.openPOSCashierMode  = openPOSCashierMode;
window.openPOSLoginModal   = openPOSLoginModal;
window.closePOSLoginModal  = closePOSLoginModal;
window.processCashierLogin = processCashierLogin;
window.cashierLogout       = cashierLogout;
window.exitPOSMode         = cashierLogout; // alias untuk router back-button
window.getCashierSession   = getCashierSession;
window.isCashierLoggedIn   = isCashierLoggedIn;
window.initPOSAuth         = initPOSAuth;
