/**
 * ============================================================
 * MODUL ADMIN: SINGLE ACTIVE SESSION (AUTO KICK-OUT)
 * Mengatur agar hanya ada 1 perangkat admin yang aktif di CMS.
 * Jika admin login dari perangkat baru, perangkat lama akan
 * ditendang keluar secara realtime secara otomatis.
 * ============================================================
 */

import { db, auth, firebase } from '../../config/firebase.js';

let unsubAdminSession = null;
let isBeingKickedOut = false;
let isLoggingInState = false;

export const setLoggingIn = (val) => {
    isLoggingInState = !!val;
    if (typeof window !== 'undefined') {
        window.__isLoggingIn = isLoggingInState;
    }
};

export const isLoggingIn = () => {
    return isLoggingInState || (typeof window !== 'undefined' && !!window.__isLoggingIn);
};

/**
 * Mendapatkan label perangkat yang mudah dibaca pengguna
 */
export const getDeviceLabel = () => {
    if (typeof navigator === 'undefined') return 'Perangkat Lain';
    const ua = navigator.userAgent || '';
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(ua);
    
    let os = 'Perangkat';
    if (/iPhone|iPad|iPod/i.test(ua)) os = 'iPhone/iPad';
    else if (/Android/i.test(ua)) os = 'HP Android';
    else if (/Windows/i.test(ua)) os = 'Desktop Windows';
    else if (/Mac/i.test(ua)) os = 'Mac/MacBook';
    else if (/Linux/i.test(ua)) os = 'Linux PC';
    else os = isMobile ? 'Smartphone' : 'Komputer Desktop';

    let browser = 'Browser';
    if (/Edg/i.test(ua)) browser = 'Edge';
    else if (/Chrome/i.test(ua)) browser = 'Chrome';
    else if (/Safari/i.test(ua)) browser = 'Safari';
    else if (/Firefox/i.test(ua)) browser = 'Firefox';

    return `${os} (${browser})`;
};

/**
 * Mengklaim sesi admin aktif di Firestore saat login berhasil.
 * Menghasilkan Session ID baru yang akan memicu kick-out di perangkat lama.
 */
export const claimAdminSession = async (existingSessionId = null) => {
    const _db = (typeof db !== 'undefined' && db) ? db : window.db;
    if (!_db) return null;

    const mySessionId = existingSessionId || localStorage.getItem('freshmart_admin_session_id') || ('sess_' + Date.now() + '_' + Math.random().toString(36).substring(2, 9));
    const deviceName = getDeviceLabel();

    try {
        localStorage.setItem('freshmart_admin_session_id', mySessionId);

        await _db.collection("freshmart").doc("cms_data").collection("admin_session").doc("active").set({
            sessionId: mySessionId,
            deviceName: deviceName,
            loginAt: firebase.firestore.FieldValue.serverTimestamp(),
            lastActive: firebase.firestore.FieldValue.serverTimestamp()
        });

        isBeingKickedOut = false;
        return mySessionId;
    } catch (e) {
        console.warn('Gagal mengklaim sesi admin aktif:', e);
        return null;
    }
};

/**
 * Menampilkan modal peringatan saat sesi ditendang keluar oleh perangkat lain
 */
export const showSessionKickedModal = (deviceName) => {
    let m = document.getElementById('session-kicked-modal');
    if (!m) {
        m = document.createElement('div');
        m.id = 'session-kicked-modal';
        m.className = 'fixed inset-0 z-[150] bg-slate-900/80 flex items-center justify-center p-4 transition-opacity duration-300';
        document.body.appendChild(m);
    }

    m.innerHTML = `
        <div class="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 max-w-md w-full border border-rose-200 dark:border-rose-900/50 shadow-2xl text-center flex flex-col items-center">
            <div class="w-16 h-16 rounded-full bg-rose-50 dark:bg-rose-900/30 border border-rose-200 dark:border-rose-800 text-rose-500 flex items-center justify-center text-2xl mb-4 shadow-sm animate-bounce">
                <i class="fa-solid fa-right-from-bracket"></i>
            </div>
            <h3 class="text-lg sm:text-xl font-bold text-slate-800 dark:text-white mb-2">
                Sesi Anda Telah Diakhiri
            </h3>
            <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
                Akun Admin baru saja login dari perangkat lain:
                <br>
                <b class="text-rose-600 dark:text-rose-400 font-bold bg-rose-50 dark:bg-rose-900/20 px-2.5 py-1 rounded-lg mt-1.5 inline-block">${deviceName || 'Perangkat Lain'}</b>
            </p>
            <p class="text-[11px] text-slate-400 dark:text-slate-500 mb-6 leading-normal bg-slate-50 dark:bg-slate-800/60 p-3 rounded-xl border border-slate-100 dark:border-slate-800">
                <i class="fa-solid fa-shield-halved text-amber-500 mr-1"></i>
                Untuk mencegah konflik data dan menjaga keamanan toko, sistem hanya mengizinkan 1 perangkat aktif mengelola CMS pada satu waktu.
            </p>
            <button id="btn-session-kicked-ok" class="btn-primary w-full py-3.5 text-sm !rounded-xl font-bold flex items-center justify-center gap-2 shadow-glow">
                <i class="fa-solid fa-arrow-left"></i> Kembali ke Toko
            </button>
        </div>
    `;

    m.style.display = 'flex';
    m.style.opacity = '1';

    const okBtn = document.getElementById('btn-session-kicked-ok');
    if (okBtn) {
        okBtn.onclick = () => {
            m.style.opacity = '0';
            setTimeout(() => { m.style.display = 'none'; }, 250);
        };
    }
};

/**
 * Memasang listener realtime untuk memantau apakah ada perangkat lain yang mengklaim sesi
 */
export const attachAdminSessionGuard = () => {
    if (unsubAdminSession) return;
    const _db = (typeof db !== 'undefined' && db) ? db : window.db;
    if (!_db) return;

    const mySessionId = localStorage.getItem('freshmart_admin_session_id');
    if (!mySessionId) return;

    isBeingKickedOut = false;

    unsubAdminSession = _db.collection("freshmart").doc("cms_data").collection("admin_session").doc("active")
        .onSnapshot(async (doc) => {
            if (!doc.exists) return;
            const data = doc.data();
            const activeSessionId = data.sessionId;
            const currentSessionId = localStorage.getItem('freshmart_admin_session_id');

            // Jika session ID di Firestore sudah berbeda dengan yang dimiliki perangkat ini
            if (activeSessionId && currentSessionId && activeSessionId !== currentSessionId) {
                if (isBeingKickedOut) return;
                isBeingKickedOut = true;

                detachAdminSessionGuard();
                localStorage.removeItem('freshmart_admin_session_id');

                const newDeviceName = data.deviceName || 'Perangkat Lain';

                // Eksekusi Kick-Out secara damai & aman
                try {
                    window.isAdm = false;
                    window.__localIsAdm = false;
                    window.isPro = false;
                    if (auth && typeof auth.signOut === 'function') {
                        await auth.signOut();
                    }
                } catch (e) {}

                // Alihkan tampilan ke katalog
                if (typeof window.changeView === 'function') {
                    window.changeView('view-catalog');
                }

                // Tampilkan notifikasi penjelasan
                showSessionKickedModal(newDeviceName);
            }
        }, (err) => {
            console.warn('Admin session guard listener error:', err);
        });
};

/**
 * Melepas listener sesi (dipanggil saat logout normal)
 */
export const detachAdminSessionGuard = () => {
    if (unsubAdminSession) {
        unsubAdminSession();
        unsubAdminSession = null;
    }
};

/**
 * Memvalidasi apakah sesi lokal saat ini masih merupakan sesi aktif di server
 */
export const isCurrentSessionActive = async () => {
    if (isLoggingIn()) return true;

    const _db = (typeof db !== 'undefined' && db) ? db : window.db;
    if (!_db) return true;

    const mySessionId = localStorage.getItem('freshmart_admin_session_id');
    if (!mySessionId) {
        try {
            const doc = await _db.collection("freshmart").doc("cms_data").collection("admin_session").doc("active").get();
            if (!doc.exists) return true;
            return false;
        } catch (e) {
            return true;
        }
    }

    try {
        const doc = await _db.collection("freshmart").doc("cms_data").collection("admin_session").doc("active").get();
        if (!doc.exists) return true;
        return doc.data().sessionId === mySessionId;
    } catch (e) {
        return true;
    }
};

// Expose ke window
if (typeof window !== 'undefined') {
    window.claimAdminSession = claimAdminSession;
    window.attachAdminSessionGuard = attachAdminSessionGuard;
    window.detachAdminSessionGuard = detachAdminSessionGuard;
    window.isCurrentSessionActive = isCurrentSessionActive;
    window.setLoggingIn = setLoggingIn;
    window.isLoggingIn = isLoggingIn;
}
