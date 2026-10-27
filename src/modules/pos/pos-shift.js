/**
 * ============================================================
 * MODUL POS KASIR: MANAJEMEN SHIFT & REKAP TUTUP KASIR CERDAS
 * (Shift Settlement, Cash Drawer Reconciliation & X/Z-Report)
 * 
 * Mengelola siklus kerja kasir:
 * 1. Buka Shift (Modal Awal / Cash Float)
 * 2. Akumulasi Transaksi Berjalan (Live Shift Stats)
 * 3. Ringkasan Shift Berjalan (X-Report)
 * 4. Tutup Shift Kasir (Z-Report & Hitung Fisik Laci / Denominasi)
 * 5. Deteksi Selisih Kas (Pas, Lebih/Surplus, Kurang/Defisit)
 * 6. Cetak Slip Rekap Shift Thermal POS (58mm / 80mm ESC/POS)
 * 7. Laporan & Riwayat Shift Cloud Firestore untuk Admin Toko
 * ============================================================
 */

import { db, firebase, auth } from '../../config/firebase.js';
import { appData } from '../../core/state.js';
import { el, setH, esc, showToast, showConfirm } from '../../core/utils.js';
import { getCashierSession } from './pos-auth.js';
import { getPrinterConfig } from '../print/printer-settings.js';
import { saveApp } from '../../services/storage.js';

// Format Rupiah & Angka Helper POS
export const fRp = n => 'Rp ' + (Math.round(parseFloat(n) || 0)).toLocaleString('id-ID');
export const fNum = n => (Math.round(parseFloat(n) || 0)).toLocaleString('id-ID');
const formatShiftQty = n => parseFloat((parseFloat(n) || 0).toFixed(3)).toString();

// ─── State Shift Aktif & Cloud Sync ───────────────────────────
const SHIFT_STORAGE_KEY = 'pos_active_shift';
const LAST_CLOSED_SHIFT_KEY = 'pos_last_closed_shift';

let _activeShift = null;
let _shiftSnapshotUnsub = null;

export const detachActiveShiftListener = () => {
    if (typeof _shiftSnapshotUnsub === 'function') {
        try { _shiftSnapshotUnsub(); } catch (e) {}
        _shiftSnapshotUnsub = null;
    }
};

export const getCurrentCashierIdentity = () => {
    const cashierSession = typeof getCashierSession === 'function' ? getCashierSession() : null;
    const isAdmUser = !!(window.isAdm || window.__localIsAdm || window.__currentAdminUid);
    const authUid = auth?.currentUser?.uid;
    const uid = cashierSession?.uid || (isAdmUser ? (window.__currentAdminUid || authUid || 'admin') : (authUid || 'cashier-anon'));
    const name = cashierSession?.name || (isAdmUser ? 'Admin Seller' : 'Kasir Toko');
    const email = cashierSession?.email || (isAdmUser ? (auth?.currentUser?.email || '') : '');
    return { uid, name, email, isAdm: isAdmUser };
};

export const isShiftOwnedByCashier = (shiftData, identity = getCurrentCashierIdentity()) => {
    if (!shiftData) return false;
    const shiftUid = shiftData.cashierUid;
    if (shiftUid && identity.uid && shiftUid === identity.uid) return true;
    if (identity.isAdm) {
        if (shiftUid === 'admin' || shiftUid === 'ADMIN_UID' || shiftUid === window.__currentAdminUid) return true;
        if (auth?.currentUser && shiftUid === auth.currentUser.uid) return true;
    }
    return false;
};

export const getActiveShift = () => {
    if (_activeShift) return _activeShift;
    try {
        const raw = localStorage.getItem(SHIFT_STORAGE_KEY);
        if (raw) {
            _activeShift = JSON.parse(raw);
            return _activeShift;
        }
    } catch (e) {
        console.warn('[POS Shift] Gagal membaca active shift:', e);
    }
    return null;
};

export const saveActiveShift = (shift) => {
    _activeShift = shift;
    try {
        if (shift) localStorage.setItem(SHIFT_STORAGE_KEY, JSON.stringify(shift));
        else localStorage.removeItem(SHIFT_STORAGE_KEY);
    } catch (e) {}
};

export const clearActiveShift = () => {
    _activeShift = null;
    try { localStorage.removeItem(SHIFT_STORAGE_KEY); } catch (e) {}
};

export const getLastClosedShift = () => {
    try {
        const raw = localStorage.getItem(LAST_CLOSED_SHIFT_KEY);
        if (raw) return JSON.parse(raw);
    } catch (e) {}
    return null;
};

export const saveLastClosedShift = (shift) => {
    try {
        localStorage.setItem(LAST_CLOSED_SHIFT_KEY, JSON.stringify(shift));
    } catch (e) {}
};

export const isShiftActive = () => {
    const s = getActiveShift();
    return !!(s && s.status === 'open');
};

export const findActiveShiftInCloud = async (cashierUid = null) => {
    const cashierSession = typeof getCashierSession === 'function' ? getCashierSession() : null;
    const isAuth = !!(auth?.currentUser || window.isAdm || window.__localIsAdm || cashierSession);
    if (!isAuth) {
        return null;
    }
    const identity = getCurrentCashierIdentity();

    try {
        const snap = await db.collection('freshmart').doc('cms_data')
            .collection('pos_shifts')
            .where('status', '==', 'open')
            .get();

        if (!snap.empty) {
            const matches = [];
            snap.forEach(doc => {
                const data = { id: doc.id, ...doc.data() };
                if (isShiftOwnedByCashier(data, identity)) {
                    matches.push(data);
                }
            });

            if (matches.length > 0) {
                matches.sort((a, b) => (b.startTime || 0) - (a.startTime || 0));
                return matches[0];
            }
        }
    } catch (err) {
        if (err?.code !== 'permission-denied' && !err?.message?.includes('insufficient permissions')) {
            console.warn('[POS Shift] Cek open shift cms_data:', err);
        }
    }

    try {
        const rootSnap = await db.collection('pos_shifts')
            .where('status', '==', 'open')
            .get();

        if (!rootSnap.empty) {
            const matches = [];
            rootSnap.forEach(doc => {
                const data = { id: doc.id, ...doc.data() };
                if (isShiftOwnedByCashier(data, identity)) {
                    matches.push(data);
                }
            });

            if (matches.length > 0) {
                matches.sort((a, b) => (b.startTime || 0) - (a.startTime || 0));
                return matches[0];
            }
        }
    } catch (err) {
        if (err?.code !== 'permission-denied' && !err?.message?.includes('insufficient permissions')) {
            console.warn('[POS Shift] Cek open shift root pos_shifts:', err);
        }
    }

    return null;
};

export const listenActiveShiftCloud = (shiftId) => {
    if (!shiftId) return;
    detachActiveShiftListener();

    // Guard: Hanya pasang listener jika pengguna memiliki sesi/auth aktif
    const cashierSession = typeof getCashierSession === 'function' ? getCashierSession() : null;
    const isAuth = !!(auth?.currentUser || window.isAdm || window.__localIsAdm || cashierSession);
    if (!isAuth) {
        return;
    }

    try {
        const docRef = db.collection('freshmart').doc('cms_data').collection('pos_shifts').doc(shiftId);
        _shiftSnapshotUnsub = docRef.onSnapshot(docSnap => {
            if (!docSnap.exists) return;
            const data = { id: docSnap.id, ...docSnap.data() };

            if (data.status === 'closed') {
                detachActiveShiftListener();
                clearActiveShift();
                saveLastClosedShift(data);

                closePOSShiftSummaryModal();
                closePOSCloseShiftModal();
                closePOSOpenShiftModal();

                showToast('Shift kasir telah ditutup dari perangkat lain.', 'info');
                if (typeof window.renderShiftHeaderBadge === 'function') {
                    window.renderShiftHeaderBadge();
                }
                return;
            }

            if (data.status === 'open') {
                saveActiveShift(data);

                if (typeof window.renderShiftHeaderBadge === 'function') {
                    window.renderShiftHeaderBadge();
                }

                // Jika X-Report (modal summary) sedang aktif di layar, segarkan tampilannya
                const summaryModal = el('pos-shift-summary-modal');
                if (summaryModal && !summaryModal.classList.contains('opacity-0')) {
                    openShiftSummaryModal();
                }
            }
        }, err => {
            const isPermissionError = err?.code === 'permission-denied' || 
                (err?.message && (err.message.includes('Missing or insufficient permissions') || err.message.includes('insufficient permissions')));
            if (isPermissionError || !auth?.currentUser) {
                // Sesi telah berakhir atau pengguna logout - lepas listener secara damai tanpa peringatan error
                detachActiveShiftListener();
                return;
            }
            console.warn('[POS Shift] Snapshot listener cms_data error:', err);
        });
    } catch (err) {
        if (err?.code !== 'permission-denied' && !err?.message?.includes('insufficient permissions')) {
            console.warn('[POS Shift] Gagal attach snapshot listener:', err);
        }
    }
};

export const syncActiveShiftFromCloud = async () => {
    const cashierSession = typeof getCashierSession === 'function' ? getCashierSession() : null;
    const isAuth = !!(auth?.currentUser || window.isAdm || window.__localIsAdm || cashierSession);
    const localShift = getActiveShift();
    if (!isAuth) {
        return localShift;
    }
    const identity = getCurrentCashierIdentity();

    // 1. Jika ada shift lokal, cek apakah masih valid dan sesuai dengan akun ini di cloud
    if (localShift && localShift.status === 'open' && isShiftOwnedByCashier(localShift, identity)) {
        try {
            const checkDoc = await db.collection('freshmart').doc('cms_data')
                .collection('pos_shifts').doc(localShift.id).get();
            if (checkDoc.exists) {
                const cloudData = { id: checkDoc.id, ...checkDoc.data() };
                if (cloudData.status === 'closed') {
                    clearActiveShift();
                    saveLastClosedShift(cloudData);
                    if (typeof window.renderShiftHeaderBadge === 'function') {
                        window.renderShiftHeaderBadge();
                    }
                } else {
                    saveActiveShift(cloudData);
                    listenActiveShiftCloud(cloudData.id);
                    if (typeof window.renderShiftHeaderBadge === 'function') {
                        window.renderShiftHeaderBadge();
                    }
                    return cloudData;
                }
            }
        } catch (e) {
            if (e?.code !== 'permission-denied' && !e?.message?.includes('insufficient permissions')) {
                console.warn('[POS Shift] Gagal verifikasi local shift ke cloud:', e);
            }
            if (e?.code !== 'permission-denied') {
                listenActiveShiftCloud(localShift.id);
            }
            return localShift;
        }
    }

    // 2. Jika tidak ada localShift yang open atau sudah ditutup, cari shift open di cloud milik kasir ini
    try {
        const cloudShift = await findActiveShiftInCloud(identity.uid);
        if (cloudShift) {
            saveActiveShift(cloudShift);
            listenActiveShiftCloud(cloudShift.id);
            if (typeof window.renderShiftHeaderBadge === 'function') {
                window.renderShiftHeaderBadge();
            }
            return cloudShift;
        } else {
            if (localShift && !isShiftOwnedByCashier(localShift, identity)) {
                clearActiveShift();
                if (typeof window.renderShiftHeaderBadge === 'function') {
                    window.renderShiftHeaderBadge();
                }
            }
        }
    } catch (e) {
        if (e?.code !== 'permission-denied' && !e?.message?.includes('insufficient permissions')) {
            console.warn('[POS Shift] Gagal cari shift open di cloud:', e);
        }
    }

    return getActiveShift();
};

// ─── Audio Chimes Shift Kasir (Web Audio API) ────────────────
export const playShiftChime = (type = 'open') => {
    try {
        if (typeof window !== 'undefined' && typeof window.checkUserGesture === 'function') {
            if (!window.checkUserGesture()) return;
        }
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        if (!AudioCtx) return;
        const ctx = new AudioCtx();
        const now = ctx.currentTime;

        if (type === 'open') {
            // Bright cheerful arpeggio (C5 -> E5 -> G5 -> C6)
            const freqs = [523.25, 659.25, 783.99, 1046.50];
            freqs.forEach((freq, idx) => {
                const osc = ctx.createOscillator();
                const gain = ctx.createGain();
                const startTime = now + (idx * 0.07);
                osc.type = 'sine';
                osc.frequency.setValueAtTime(freq, startTime);
                gain.gain.setValueAtTime(0.09, startTime);
                gain.gain.exponentialRampToValueAtTime(0.0001, startTime + 0.16);
                osc.connect(gain);
                gain.connect(ctx.destination);
                osc.start(startTime);
                osc.stop(startTime + 0.16);
            });
            setTimeout(() => { ctx.close().catch(() => {}); }, 600);
        } else {
            // Grand settlement chord (G5+B5 -> C6+E6)
            const chords = [
                { f: [783.99, 987.77], t: now, d: 0.14 },
                { f: [1046.50, 1318.51], t: now + 0.12, d: 0.35 }
            ];
            chords.forEach(c => {
                c.f.forEach(freq => {
                    const osc = ctx.createOscillator();
                    const gain = ctx.createGain();
                    osc.type = 'triangle';
                    osc.frequency.setValueAtTime(freq, c.t);
                    gain.gain.setValueAtTime(0.08, c.t);
                    gain.gain.exponentialRampToValueAtTime(0.0001, c.t + c.d);
                    osc.connect(gain);
                    gain.connect(ctx.destination);
                    osc.start(c.t);
                    osc.stop(c.t + c.d);
                });
            });
            setTimeout(() => { ctx.close().catch(() => {}); }, 700);
        }
    } catch (e) {}
};

// ─── Format Durasi Kerja ─────────────────────────────────────
export const formatShiftDuration = (startMs, endMs = Date.now()) => {
    if (!startMs) return '-';
    const diffMs = Math.max(0, endMs - startMs);
    const totalMinutes = Math.floor(diffMs / 60000);
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    if (hours > 0) {
        return `${hours} Jam ${minutes} Menit`;
    }
    return `${minutes} Menit`;
};

// ─── Nomor Seri Shift ────────────────────────────────────────
const generateShiftNumber = () => {
    const d = new Date();
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    const rand = Math.floor(100 + Math.random() * 900);
    return `SHF-${y}${m}${day}-${rand}`;
};

// ─── Buka Shift Baru (Open Shift) ────────────────────────────
export const openPOSOpenShiftModal = async () => {
    const identity = getCurrentCashierIdentity();

    // 1. Cek dulu apakah lokal sudah ada shift aktif yang sah
    const localShift = getActiveShift();
    if (localShift && localShift.status === 'open' && isShiftOwnedByCashier(localShift, identity)) {
        showToast(`Shift kasir #${localShift.shiftNo || localShift.id} sedang aktif. Menampilkan ringkasan shift.`, 'info');
        openShiftSummaryModal();
        return;
    }

    // 2. Pre-flight check cloud: siapa tahu akun kasir ini sudah punya shift open di perangkat lain
    try {
        const cloudShift = await findActiveShiftInCloud(identity.uid);
        if (cloudShift) {
            saveActiveShift(cloudShift);
            listenActiveShiftCloud(cloudShift.id);
            if (typeof window.renderShiftHeaderBadge === 'function') {
                window.renderShiftHeaderBadge();
            }
            showToast(`Melanjutkan shift aktif (#${cloudShift.shiftNo || cloudShift.id}) dari perangkat lain!`, 'success');
            openShiftSummaryModal();
            return;
        }
    } catch (e) {
        console.warn('[POS Shift] Cek cloud saat buka modal:', e);
    }

    const cashierName = identity.name;
    const nowStr = new Date().toLocaleString('id-ID', { dateStyle: 'full', timeStyle: 'short' });

    // Hapus modal lama jika ada
    document.getElementById('pos-open-shift-modal')?.remove();

    const html = `
    <div id="pos-open-shift-modal" class="fixed inset-0 z-[10001] flex items-center justify-center p-3 sm:p-4 transition-all duration-300 opacity-0 pointer-events-none" style="background:rgba(15,23,42,0.75)">
        <div id="pos-open-shift-box" class="bg-white dark:bg-slate-900 rounded-2xl shadow-[4.5px_4.5px_0px_#0f172a] dark:shadow-[4.5px_4.5px_0px_#000000] w-full max-w-md border-2 border-slate-900 dark:border-slate-700 overflow-hidden transform translate-y-8 scale-95 transition-all duration-300 flex flex-col">
            <!-- Header Modal -->
            <div class="px-5 py-4 border-b-2 border-slate-900 dark:border-slate-700 flex items-center justify-between bg-slate-50 dark:bg-slate-800/80">
                <div class="flex items-center gap-3">
                    <div class="w-10 h-10 rounded-xl border-2 border-slate-900 dark:border-slate-700 shadow-[1.5px_1.5px_0px_#0f172a] dark:shadow-[1.5px_1.5px_0px_#000000] flex items-center justify-center text-white text-base shrink-0" style="background:var(--color-primary)">
                        <i class="fa-solid fa-cash-register"></i>
                    </div>
                    <div>
                        <h3 class="text-sm font-black text-slate-900 dark:text-white uppercase tracking-wider">Buka Shift Kasir Baru</h3>
                        <p class="text-[11px] font-semibold text-slate-500 dark:text-slate-400">Modal awal laci &amp; pembukaan kas</p>
                    </div>
                </div>
                <button onclick="window.closePOSOpenShiftModal()" class="w-8 h-8 rounded-xl border-2 border-slate-900 dark:border-slate-700 shadow-[1.5px_1.5px_0px_#0f172a] dark:shadow-[1.5px_1.5px_0px_#000000] bg-white dark:bg-slate-800 hover:bg-slate-100 text-slate-900 dark:text-slate-100 flex items-center justify-center text-base font-black transition-all cursor-pointer active:translate-x-[1px] active:translate-y-[1px]">×</button>
            </div>

            <!-- Body Modal -->
            <div class="p-5 space-y-4">
                <!-- Info Petugas & Waktu -->
                <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/80 border-2 border-slate-900 dark:border-slate-700 shadow-[2px_2px_0px_#0f172a] dark:shadow-[2px_2px_0px_#000000] flex items-center justify-between text-xs">
                    <div class="flex items-center gap-2.5">
                        <div class="w-8 h-8 rounded-lg border-1.5 border-slate-900 dark:border-slate-700 shadow-[1px_1px_0px_#0f172a] bg-emerald-100 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-300 flex items-center justify-center text-xs font-black">
                            <i class="fa-solid fa-user-check"></i>
                        </div>
                        <div>
                            <span class="text-[10px] text-slate-500 dark:text-slate-400 block font-bold uppercase tracking-wider">Kasir Bertugas</span>
                            <span class="font-black text-slate-900 dark:text-white text-xs">${esc(cashierName)}</span>
                        </div>
                    </div>
                    <div class="text-right">
                        <span class="text-[10px] text-slate-500 dark:text-slate-400 block font-bold uppercase tracking-wider">Waktu Buka</span>
                        <span class="font-black text-slate-800 dark:text-slate-200 text-[11px]">${esc(nowStr)}</span>
                    </div>
                </div>

                <!-- Input Modal Awal / Cash Float -->
                <div class="space-y-1.5">
                    <label class="block text-xs font-black text-slate-900 dark:text-slate-100 uppercase tracking-wide flex items-center justify-between">
                        <span class="flex items-center gap-1.5">
                            <i class="fa-solid fa-money-bill-wave text-emerald-600"></i>
                            <span>Modal Awal Laci (Uang Kembalian)</span>
                        </span>
                        <span class="text-[10px] font-bold text-slate-500 font-mono">Cash Float</span>
                    </label>
                    <div class="relative">
                        <span class="absolute left-3.5 top-1/2 -translate-y-1/2 font-black text-sm text-slate-600 dark:text-slate-300 pointer-events-none">Rp</span>
                        <input id="pos-shift-start-cash-input" type="number" min="0" step="1000" placeholder="0" 
                            autocomplete="off" autocorrect="off" spellcheck="false"
                            class="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-slate-900 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-black text-lg focus:outline-none focus:border-[var(--color-primary)] shadow-[2px_2px_0px_#0f172a] dark:shadow-[2px_2px_0px_#000000] transition-all text-right"
                            value="100000" oninput="window.posUpdateStartCashChips()">
                    </div>
                    <!-- Quick Amount Chips (Industrial Chiclets) -->
                    <div id="pos-shift-preset-chips" class="flex items-center gap-1.5 flex-wrap pt-1">
                        <button type="button" data-amount="0" onclick="window.posSetStartCashPreset(0)" class="pos-preset-chip px-3 py-1.5 rounded-xl text-[11px] font-bold border-2 border-slate-900 dark:border-slate-700 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 shadow-[1.5px_1.5px_0px_#0f172a] dark:shadow-[1.5px_1.5px_0px_#000000] transition-all cursor-pointer active:translate-x-[1px] active:translate-y-[1px]">Rp 0</button>
                        <button type="button" data-amount="50000" onclick="window.posSetStartCashPreset(50000)" class="pos-preset-chip px-3 py-1.5 rounded-xl text-[11px] font-bold border-2 border-slate-900 dark:border-slate-700 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 shadow-[1.5px_1.5px_0px_#0f172a] dark:shadow-[1.5px_1.5px_0px_#000000] transition-all cursor-pointer active:translate-x-[1px] active:translate-y-[1px]">50.000</button>
                        <button type="button" data-amount="100000" onclick="window.posSetStartCashPreset(100000)" class="pos-preset-chip px-3 py-1.5 rounded-xl text-[11px] font-black border-2 border-slate-900 dark:border-slate-700 text-white bg-[var(--color-primary)] shadow-[2px_2px_0px_#0f172a] dark:shadow-[2px_2px_0px_#000000] transition-all cursor-pointer active:translate-x-[1px] active:translate-y-[1px]">100.000</button>
                        <button type="button" data-amount="200000" onclick="window.posSetStartCashPreset(200000)" class="pos-preset-chip px-3 py-1.5 rounded-xl text-[11px] font-bold border-2 border-slate-900 dark:border-slate-700 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 shadow-[1.5px_1.5px_0px_#0f172a] dark:shadow-[1.5px_1.5px_0px_#000000] transition-all cursor-pointer active:translate-x-[1px] active:translate-y-[1px]">200.000</button>
                        <button type="button" data-amount="500000" onclick="window.posSetStartCashPreset(500000)" class="pos-preset-chip px-3 py-1.5 rounded-xl text-[11px] font-bold border-2 border-slate-900 dark:border-slate-700 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 shadow-[1.5px_1.5px_0px_#0f172a] dark:shadow-[1.5px_1.5px_0px_#000000] transition-all cursor-pointer active:translate-x-[1px] active:translate-y-[1px]">500.000</button>
                    </div>
                </div>

                <!-- Catatan Pembukaan (Opsional) -->
                <div class="space-y-1">
                    <label class="block text-xs font-bold text-slate-800 dark:text-slate-200">
                        <i class="fa-regular fa-clipboard text-slate-500 mr-1"></i>Catatan Pembukaan (Opsional)
                    </label>
                    <input id="pos-shift-start-notes-input" type="text" placeholder="Contoh: Uang pecahan kecil lengkap, shift pagi"
                        autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false"
                        class="w-full px-3.5 py-2.5 rounded-xl border-2 border-slate-900 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs text-slate-900 dark:text-slate-100 font-semibold focus:outline-none focus:border-[var(--color-primary)] shadow-[1.5px_1.5px_0px_#0f172a] dark:shadow-[1.5px_1.5px_0px_#000000]">
                </div>

                <!-- Hint Info Box -->
                <div class="p-3 rounded-xl bg-amber-50 dark:bg-amber-950/40 border-2 border-slate-900 dark:border-slate-700 shadow-[2px_2px_0px_#0f172a] dark:shadow-[2px_2px_0px_#000000] flex items-start gap-2.5 text-[11px] text-amber-900 dark:text-amber-200">
                    <i class="fa-solid fa-lightbulb text-amber-500 mt-0.5 shrink-0 text-sm"></i>
                    <span class="font-medium leading-relaxed">Modal awal akan dihitung bersama total penjualan tunai saat Anda melakukan tutup kasir (settlement) di akhir shift.</span>
                </div>
            </div>

            <!-- Footer Action Buttons -->
            <div class="p-4 border-t-2 border-slate-900 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/80 flex items-center gap-2.5">
                <button onclick="window.closePOSOpenShiftModal()" class="flex-1 py-3 rounded-xl bg-white dark:bg-slate-800 border-2 border-slate-900 dark:border-slate-700 text-slate-800 dark:text-slate-200 font-black text-xs uppercase tracking-wider hover:bg-slate-100 shadow-[2px_2px_0px_#0f172a] dark:shadow-[2px_2px_0px_#000000] active:translate-x-[1.5px] active:translate-y-[1.5px] transition-all cursor-pointer">
                    Batal
                </button>
                <button onclick="window.confirmStartPOSShift()" class="flex-[2] py-3 rounded-xl text-white font-black text-xs uppercase tracking-wider border-2 border-slate-900 dark:border-slate-700 shadow-[2.5px_2.5px_0px_#0f172a] dark:shadow-[2.5px_2.5px_0px_#000000] active:translate-x-[1.5px] active:translate-y-[1.5px] transition-all flex items-center justify-center gap-2 cursor-pointer hover:brightness-105" style="background:var(--color-primary)">
                    <i class="fa-solid fa-check"></i>
                    <span>Buka Shift Sekarang</span>
                </button>
            </div>
        </div>
    </div>`;

    document.body.insertAdjacentHTML('beforeend', html);

    const m = el('pos-open-shift-modal');
    const box = el('pos-open-shift-box');
    if (!m || !box) return;

    m.classList.remove('pointer-events-none');
    if (typeof window.pushModalHistory === 'function') {
        window.pushModalHistory('posOpenShift');
    }
    requestAnimationFrame(() => {
        m.classList.remove('opacity-0');
        box.classList.remove('translate-y-8', 'scale-95');
    });

    setTimeout(() => {
        const inp = el('pos-shift-start-cash-input');
        if (inp) { inp.focus(); inp.select(); }
    }, 250);
};

export const closePOSOpenShiftModal = (fH = false) => {
    const doClose = () => {
        const m = el('pos-open-shift-modal');
        const box = el('pos-open-shift-box');
        if (!m) return;
        m.classList.add('opacity-0', 'pointer-events-none');
        if (box) box.classList.add('translate-y-8', 'scale-95');
        setTimeout(() => { m.remove(); }, 280);
    };

    if (typeof window.requestCloseModal === 'function') {
        window.requestCloseModal('posOpenShift', fH, doClose);
    } else {
        doClose();
    }
};

export const posUpdateStartCashChips = () => {
    const val = parseFloat(el('pos-shift-start-cash-input')?.value) || 0;
    document.querySelectorAll('.pos-preset-chip').forEach(chip => {
        const amt = parseFloat(chip.dataset.amount);
        if (amt === val) {
            chip.className = 'pos-preset-chip px-3 py-1.5 rounded-xl text-[11px] font-black border-2 border-slate-900 dark:border-slate-700 text-white bg-[var(--color-primary)] shadow-[2px_2px_0px_#0f172a] dark:shadow-[2px_2px_0px_#000000] transition-all cursor-pointer active:translate-x-[1px] active:translate-y-[1px]';
        } else {
            chip.className = 'pos-preset-chip px-3 py-1.5 rounded-xl text-[11px] font-bold border-2 border-slate-900 dark:border-slate-700 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 shadow-[1.5px_1.5px_0px_#0f172a] dark:shadow-[1.5px_1.5px_0px_#000000] transition-all cursor-pointer active:translate-x-[1px] active:translate-y-[1px]';
        }
    });
};

export const posSetStartCashPreset = (amount) => {
    const inp = el('pos-shift-start-cash-input');
    if (inp) {
        inp.value = amount;
        inp.focus();
        inp.select();
    }
    posUpdateStartCashChips();
};

export const confirmStartPOSShift = async () => {
    const inpCash = el('pos-shift-start-cash-input');
    const inpNotes = el('pos-shift-start-notes-input');
    const startingCash = parseFloat(inpCash?.value) || 0;
    const notes = inpNotes?.value?.trim() || '';

    const identity = getCurrentCashierIdentity();
    const cashierUid = identity.uid;
    const cashierName = identity.name;
    const cashierEmail = identity.email;

    // Loading indicator on modal submit button
    const submitBtn = document.querySelector('#pos-open-shift-box button[onclick*="confirmStartPOSShift"]');
    if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin mr-1.5"></i><span>Memverifikasi Shift...</span>';
    }

    // Pre-flight check anti-double shift di Cloud
    try {
        const existingCloudShift = await findActiveShiftInCloud(cashierUid);
        if (existingCloudShift) {
            closePOSOpenShiftModal();
            saveActiveShift(existingCloudShift);
            listenActiveShiftCloud(existingCloudShift.id);
            if (typeof window.renderShiftHeaderBadge === 'function') {
                window.renderShiftHeaderBadge();
            }
            showToast(`Akun kasir sudah memiliki shift aktif (#${existingCloudShift.shiftNo || existingCloudShift.id}). Melanjutkan shift berjalan.`, 'warning');
            openShiftSummaryModal();
            return;
        }
    } catch (e) {
        console.warn('[POS Shift] Pre-flight check error:', e);
    }

    const shiftData = {
        id: 'SHF-' + Date.now(),
        shiftNo: generateShiftNumber(),
        cashierUid,
        cashierName,
        cashierEmail,
        startTime: Date.now(),
        startTimeISO: new Date().toISOString(),
        startingCash,
        startNotes: notes,
        status: 'open',
        txCount: 0,
        itemCount: 0,
        totalSales: 0,
        cashSales: 0,
        qrisSales: 0,
        bankSales: 0,
        tempoSales: 0,
        cashIn: 0,
        cashOut: 0,
        cashMovements: [],
        discountTotal: 0,
        pointsTotal: 0,
        orders: []
    };

    saveActiveShift(shiftData);
    listenActiveShiftCloud(shiftData.id);

    // Sync ke Firestore secara aman (Promise.all)
    try {
        await Promise.all([
            db.collection('freshmart').doc('cms_data').collection('pos_shifts').doc(shiftData.id).set(shiftData),
            db.collection('pos_shifts').doc(shiftData.id).set(shiftData)
        ]);
    } catch (_) {}

    closePOSOpenShiftModal();
    playShiftChime('open');
    showToast(`Shift kasir dibuka! Modal awal: ${fRp(startingCash)}`, 'success');

    // Perbarui badge indikator shift di UI
    if (typeof window.renderShiftHeaderBadge === 'function') {
        window.renderShiftHeaderBadge();
    }

    // Rekam otomatis absensi kehadiran kasir ke sistem HRD Toko (Fase 2)
    try {
        if (typeof window.autoRecordCashierShiftAttendance === 'function') {
            const curIdentity = getCurrentCashierIdentity();
            window.autoRecordCashierShiftAttendance(curIdentity, shiftData.startTimeISO);
        }
    } catch (attErr) {
        console.warn('[POS Shift] Non-blocking: Gagal auto-record absensi shift:', attErr);
    }
};

// ─── Rekam Transaksi Penjualan ke Shift Aktif ────────────────
export const recordTransactionToShift = (orderData) => {
    try {
        const shift = getActiveShift();
        if (!shift || shift.status !== 'open') return;

        const total = parseFloat(orderData.total) || 0;
        const method = orderData.payment?.method || 'cash';
        const dp = parseFloat(orderData.payment?.tempoDp ?? orderData.payment?.dp ?? orderData.payment?.paid) || 0;
        const tempoBal = parseFloat(orderData.payment?.tempoBalance) || 0;
        const discount = parseFloat(orderData.globalDiscount) || 0;
        const points = parseFloat(orderData.pointsEarned) || 0;

        const itemsQty = (orderData.items || []).reduce((acc, i) => acc + (parseFloat(i.qty) || 0), 0);

        shift.txCount = (shift.txCount || 0) + 1;
        shift.itemCount = parseFloat(((shift.itemCount || 0) + itemsQty).toFixed(3));
        shift.totalSales = (shift.totalSales || 0) + total;
        shift.discountTotal = (shift.discountTotal || 0) + discount;
        shift.pointsTotal = (shift.pointsTotal || 0) + points;

        if (method === 'cash') {
            shift.cashSales = (shift.cashSales || 0) + total;
        } else if (method === 'qris') {
            shift.qrisSales = (shift.qrisSales || 0) + total;
        } else if (method === 'bank') {
            shift.bankSales = (shift.bankSales || 0) + total;
        } else if (method === 'tempo') {
            if (dp > 0) shift.cashSales = (shift.cashSales || 0) + dp;
            shift.tempoSales = (shift.tempoSales || 0) + tempoBal;
        }

        if (!Array.isArray(shift.orders)) shift.orders = [];
        if (orderData.txId || orderData.id) {
            shift.orders.push(orderData.txId || orderData.id);
        }

        saveActiveShift(shift);

        // Update ke Firestore secara non-blocking
        try {
            const updatePayload = {
                txCount: shift.txCount,
                itemCount: shift.itemCount,
                totalSales: shift.totalSales,
                cashSales: shift.cashSales,
                qrisSales: shift.qrisSales,
                bankSales: shift.bankSales,
                tempoSales: shift.tempoSales,
                discountTotal: shift.discountTotal,
                pointsTotal: shift.pointsTotal,
                orders: shift.orders,
                lastUpdatedISO: new Date().toISOString()
            };
            db.collection('freshmart').doc('cms_data').collection('pos_shifts').doc(shift.id).update(updatePayload).catch(() => {});
            db.collection('pos_shifts').doc(shift.id).update(updatePayload).catch(() => {});
        } catch (_) {}

        // Refresh badge jika sedang terbuka
        if (typeof window.renderShiftHeaderBadge === 'function') {
            window.renderShiftHeaderBadge();
        }
    } catch (err) {
        console.warn('[POS Shift] Gagal update transaksi ke shift:', err);
    }
};

// ─── Rekam Pembayaran Cicilan Piutang Tunai ke Shift Kasir Aktif ────
export const recordTempoPaymentToShift = (amount, orderId, note = '') => {
    try {
        const shift = getActiveShift();
        if (!shift || shift.status !== 'open') return false;

        const val = parseFloat(amount) || 0;
        if (val <= 0) return false;

        shift.cashSales = (shift.cashSales || 0) + val;
        shift.tempoInstallmentCash = (shift.tempoInstallmentCash || 0) + val;

        if (!Array.isArray(shift.tempoPayments)) shift.tempoPayments = [];
        shift.tempoPayments.push({
            orderId: orderId,
            amount: val,
            timestamp: Date.now(),
            note: note || `Cicilan Piutang #${orderId}`
        });

        saveActiveShift(shift);

        try {
            const updatePayload = {
                cashSales: shift.cashSales,
                tempoInstallmentCash: shift.tempoInstallmentCash,
                tempoPayments: shift.tempoPayments,
                lastUpdatedISO: new Date().toISOString()
            };
            db.collection('freshmart').doc('cms_data').collection('pos_shifts').doc(shift.id).update(updatePayload).catch(() => {});
            db.collection('pos_shifts').doc(shift.id).update(updatePayload).catch(() => {});
        } catch (_) {}

        if (typeof window.renderShiftHeaderBadge === 'function') {
            window.renderShiftHeaderBadge();
        }
        return true;
    } catch (err) {
        console.warn('[POS Shift] Gagal rekam pembayaran cicilan ke shift:', err);
        return false;
    }
};

// ─── Kalkulasi Kas Laci Seharusnya (Expected Cash in Drawer) ──
export const getShiftExpectedCash = (shift) => {
    if (!shift) return 0;
    const start = parseFloat(shift.startingCash) || 0;
    const sales = parseFloat(shift.cashSales) || 0;
    const cIn   = parseFloat(shift.cashIn) || 0;
    const cOut  = parseFloat(shift.cashOut) || 0;
    return Math.max(0, start + sales + cIn - cOut);
};

// ─── State Tipe Mutasi Kas Aktif ──────────────────────────────
let _activeCashMovementType = 'out';

// ─── Rekam Mutasi Kas Masuk / Kas Keluar Laci ke Shift & Buku Kas ─
export const recordCashMovementToShift = async ({ type, amount, reason, category = 'lainnya', recipient = '' }) => {
    try {
        const shift = getActiveShift();
        if (!shift || shift.status !== 'open') {
            showToast('Shift kasir tidak aktif!', 'warning');
            return false;
        }

        const val = parseFloat(amount) || 0;
        if (val <= 0) return false;

        let expenseId = null;
        const nowMs = Date.now();
        const nowIso = new Date(nowMs).toISOString();

        if (type === 'out') {
            shift.cashOut = (shift.cashOut || 0) + val;
            expenseId = 'exp_shift_' + nowMs + '_' + Math.random().toString(36).substring(2, 6);

            // Jembatan Otomatis: Buat entri pengeluaran resmi di appData.expenses
            const newExp = {
                id: expenseId,
                date: nowIso.split('T')[0],
                category: category || 'kemasan',
                amount: val,
                desc: `[Laci Kasir SHF #${shift.shiftNo || shift.id}] ${reason}`,
                source: 'cash',
                recipient: recipient || shift.cashierName || 'Kasir Toko',
                createdBy: shift.cashierName || 'Kasir',
                shiftId: shift.id,
                receiptImg: null,
                createdAt: nowIso,
                updatedAt: nowIso
            };

            if (!Array.isArray(appData.expenses)) appData.expenses = [];
            appData.expenses.unshift(newExp);
            try {
                await saveApp(['expenses']);
            } catch (errExp) {
                console.warn('[POS Shift] Gagal simpan expense ke private storage:', errExp);
            }
        } else {
            shift.cashIn = (shift.cashIn || 0) + val;
        }

        const movement = {
            id: 'CSHMV-' + nowMs,
            type,
            amount: val,
            reason: reason || (type === 'out' ? 'Operasional Laci Kasir' : 'Tambah Modal Receh'),
            category: type === 'out' ? category : 'kas_masuk',
            recipient: recipient || '',
            cashierName: shift.cashierName || 'Kasir',
            time: nowMs,
            timeISO: nowIso,
            expenseId
        };

        if (!Array.isArray(shift.cashMovements)) shift.cashMovements = [];
        shift.cashMovements.unshift(movement);

        saveActiveShift(shift);

        try {
            const updatePayload = {
                cashIn: shift.cashIn || 0,
                cashOut: shift.cashOut || 0,
                cashMovements: shift.cashMovements,
                lastUpdatedISO: nowIso
            };
            db.collection('freshmart').doc('cms_data').collection('pos_shifts').doc(shift.id).update(updatePayload).catch(() => {});
            db.collection('pos_shifts').doc(shift.id).update(updatePayload).catch(() => {});
        } catch (_) {}

        if (typeof window.renderShiftHeaderBadge === 'function') {
            window.renderShiftHeaderBadge();
        }

        // Refresh X-Report jika sedang terbuka
        const summaryModal = el('pos-shift-summary-modal');
        if (summaryModal && !summaryModal.classList.contains('opacity-0')) {
            openShiftSummaryModal();
        }

        if (type === 'out') {
            showToast(`Kas keluar ${fRp(val)} berhasil dicatat & masuk ke Buku Kas Toko!`, 'success');
        } else {
            showToast(`Kas masuk ${fRp(val)} berhasil ditambahkan ke laci kasir!`, 'success');
        }
        return true;
    } catch (err) {
        console.warn('[POS Shift] Gagal catat cash movement:', err);
        showToast('Gagal mencatat arus kas: ' + (err.message || err), 'error');
        return false;
    }
};

// ─── Modal Catat Kas Masuk & Kas Keluar Laci Kasir ─────────────
export const openPOSCashMovementModal = (defaultType = 'out') => {
    const shift = getActiveShift();
    if (!shift || shift.status !== 'open') {
        showToast('Buka shift kasir terlebih dahulu sebelum mencatat arus kas.', 'warning');
        openPOSOpenShiftModal();
        return;
    }

    document.getElementById('pos-cash-movement-modal')?.remove();

    const expectedCash = getShiftExpectedCash(shift);

    const html = `
    <div id="pos-cash-movement-modal" class="fixed inset-0 z-[10002] flex items-center justify-center p-3 sm:p-4 transition-all duration-300 opacity-0 pointer-events-none" style="background:rgba(15,23,42,0.8)">
        <div id="pos-cash-movement-box" class="bg-white dark:bg-slate-900 rounded-2xl shadow-[4.5px_4.5px_0px_#0f172a] dark:shadow-[4.5px_4.5px_0px_#000000] w-full max-w-md border-2 border-slate-900 dark:border-slate-700 overflow-hidden transform translate-y-8 scale-95 transition-all duration-300 flex flex-col max-h-[92vh]">
            <!-- Header Modal -->
            <div class="px-5 py-4 border-b-2 border-slate-900 dark:border-slate-700 flex items-center justify-between bg-slate-50 dark:bg-slate-800/80">
                <div class="flex items-center gap-3">
                    <div id="pos-cshmv-header-icon" class="w-10 h-10 rounded-xl flex items-center justify-center text-white text-base border-2 border-slate-900 shadow-[1.5px_1.5px_0px_#0f172a] shrink-0 bg-rose-600">
                        <i class="fa-solid fa-arrow-up-from-bracket"></i>
                    </div>
                    <div>
                        <h3 id="pos-cshmv-header-title" class="text-sm font-black text-slate-900 dark:text-white uppercase tracking-wider">Catat Kas Keluar Laci</h3>
                        <p class="text-[11px] font-semibold text-slate-500 dark:text-slate-400">Shift: <b>${esc(shift.shiftNo || shift.id)}</b> &bull; Laci: <b>${fRp(expectedCash)}</b></p>
                    </div>
                </div>
                <button onclick="window.closePOSCashMovementModal()" class="w-8 h-8 rounded-xl border-2 border-slate-900 dark:border-slate-700 shadow-[1.5px_1.5px_0px_#0f172a] dark:shadow-[1.5px_1.5px_0px_#000000] bg-white dark:bg-slate-800 hover:bg-slate-100 text-slate-900 dark:text-slate-100 flex items-center justify-center text-base font-black transition-all cursor-pointer active:translate-x-[1px] active:translate-y-[1px]">×</button>
            </div>

            <!-- Body Modal -->
            <div class="p-5 space-y-4 overflow-y-auto flex-1">
                <!-- Tipe Mutasi Tab (Kas Keluar vs Kas Masuk) -->
                <div class="grid grid-cols-2 p-1 rounded-xl bg-slate-100 dark:bg-slate-800 border-2 border-slate-900 dark:border-slate-700 shadow-[1.5px_1.5px_0px_#0f172a] gap-1 text-xs">
                    <button type="button" id="pos-cshmv-tab-out" onclick="window.setPOSCashMovementType('out')" 
                        class="py-2.5 rounded-lg font-black transition-all flex items-center justify-center gap-1.5 cursor-pointer border-1.5 border-slate-900 shadow-[1.5px_1.5px_0px_#0f172a] bg-rose-600 text-white active:translate-x-[1px] active:translate-y-[1px]">
                        <i class="fa-solid fa-arrow-up-from-bracket"></i>
                        <span>Kas Keluar (Biaya)</span>
                    </button>
                    <button type="button" id="pos-cshmv-tab-in" onclick="window.setPOSCashMovementType('in')" 
                        class="py-2.5 rounded-lg font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer text-slate-700 dark:text-slate-300 hover:text-slate-900">
                        <i class="fa-solid fa-arrow-down-to-bracket"></i>
                        <span>Kas Masuk (Modal)</span>
                    </button>
                </div>

                <!-- Input Nominal Rp -->
                <div class="space-y-1.5">
                    <label class="block text-xs font-black text-slate-800 dark:text-slate-100 uppercase tracking-wide flex items-center justify-between">
                        <span>Nominal Uang Tunai</span>
                        <span id="pos-cshmv-type-label" class="text-[10px] font-black text-rose-600 uppercase tracking-wider">Pengeluaran Laci</span>
                    </label>
                    <div class="relative">
                        <span class="absolute left-3.5 top-1/2 -translate-y-1/2 font-black text-base text-slate-900 dark:text-slate-100 pointer-events-none">Rp</span>
                        <input id="pos-cshmv-amount-input" type="number" min="500" step="1000" placeholder="0" 
                            autocomplete="off" autocorrect="off" spellcheck="false"
                            class="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-slate-900 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-black text-lg shadow-[2px_2px_0px_#0f172a] dark:shadow-[2px_2px_0px_#000000] focus:outline-none transition-all text-right">
                    </div>
                    <!-- Quick Amount Chips -->
                    <div class="flex items-center gap-1.5 flex-wrap pt-1">
                        <button type="button" onclick="window.posSetCashMovementPreset(5000)" class="pos-preset-chip px-3 py-1.5 rounded-xl text-xs font-black border-2 border-slate-900 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-50 text-slate-800 dark:text-slate-200 shadow-[1.5px_1.5px_0px_#0f172a] dark:shadow-[1.5px_1.5px_0px_#000000] active:translate-x-[1px] active:translate-y-[1px] transition-all cursor-pointer">5.000</button>
                        <button type="button" onclick="window.posSetCashMovementPreset(10000)" class="pos-preset-chip px-3 py-1.5 rounded-xl text-xs font-black border-2 border-slate-900 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-50 text-slate-800 dark:text-slate-200 shadow-[1.5px_1.5px_0px_#0f172a] dark:shadow-[1.5px_1.5px_0px_#000000] active:translate-x-[1px] active:translate-y-[1px] transition-all cursor-pointer">10.000</button>
                        <button type="button" onclick="window.posSetCashMovementPreset(20000)" class="pos-preset-chip px-3 py-1.5 rounded-xl text-xs font-black border-2 border-slate-900 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-50 text-slate-800 dark:text-slate-200 shadow-[1.5px_1.5px_0px_#0f172a] dark:shadow-[1.5px_1.5px_0px_#000000] active:translate-x-[1px] active:translate-y-[1px] transition-all cursor-pointer">20.000</button>
                        <button type="button" onclick="window.posSetCashMovementPreset(50000)" class="pos-preset-chip px-3 py-1.5 rounded-xl text-xs font-black border-2 border-slate-900 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-50 text-slate-800 dark:text-slate-200 shadow-[1.5px_1.5px_0px_#0f172a] dark:shadow-[1.5px_1.5px_0px_#000000] active:translate-x-[1px] active:translate-y-[1px] transition-all cursor-pointer">50.000</button>
                        <button type="button" onclick="window.posSetCashMovementPreset(100000)" class="pos-preset-chip px-3 py-1.5 rounded-xl text-xs font-black border-2 border-slate-900 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-50 text-slate-800 dark:text-slate-200 shadow-[1.5px_1.5px_0px_#0f172a] dark:shadow-[1.5px_1.5px_0px_#000000] active:translate-x-[1px] active:translate-y-[1px] transition-all cursor-pointer">100.000</button>
                    </div>
                </div>

                <!-- Input Keperluan / Alasan -->
                <div class="space-y-1">
                    <label class="block text-xs font-black text-slate-800 dark:text-slate-100 uppercase tracking-wide">
                        <i class="fa-regular fa-clipboard text-slate-500 mr-1"></i>Keperluan / Alasan Transaksi
                    </label>
                    <input id="pos-cshmv-reason-input" type="text" placeholder="Contoh: Beli kantong kresek / es batu / bensin kurir..."
                        autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false"
                        class="w-full px-3.5 py-2.5 rounded-xl border-2 border-slate-900 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs font-bold text-slate-800 dark:text-slate-200 shadow-[1.5px_1.5px_0px_#0f172a] dark:shadow-[1.5px_1.5px_0px_#000000] focus:outline-none">
                </div>

                <!-- Kategori Pengeluaran (Hanya Tampil Saat Kas Keluar) -->
                <div id="pos-cshmv-category-wrap" class="space-y-1">
                    <label class="block text-xs font-black text-slate-800 dark:text-slate-100 uppercase tracking-wide">
                        <i class="fa-solid fa-tags text-slate-500 mr-1"></i>Kategori Buku Kas Pengeluaran
                    </label>
                    <select id="pos-cshmv-category-select" class="w-full px-3.5 py-2.5 rounded-xl border-2 border-slate-900 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs font-bold text-slate-800 dark:text-slate-200 shadow-[1.5px_1.5px_0px_#0f172a] dark:shadow-[1.5px_1.5px_0px_#000000] focus:outline-none">
                        <option value="kemasan">Kemasan / Lakban / Plastik Kresek</option>
                        <option value="transport">Bensin / Ongkir / Transportasi Kurir</option>
                        <option value="perawatan">Kebersihan / Alat Toko / Perlengkapan</option>
                        <option value="listrik">Air Minum Galon / Listrik / Es Batu</option>
                        <option value="gaji">Uang Makan / Konsumsi Kasir &amp; Staf</option>
                        <option value="lainnya" selected>Biaya Operasional Toko Lainnya</option>
                    </select>
                </div>

                <!-- Penerima / Sumber Dana -->
                <div class="space-y-1">
                    <label id="pos-cshmv-recipient-label" class="block text-xs font-black text-slate-800 dark:text-slate-100 uppercase tracking-wide">
                        <i class="fa-solid fa-user text-slate-500 mr-1"></i>Penerima Uang (Opsional)
                    </label>
                    <input id="pos-cshmv-recipient-input" type="text" placeholder="Contoh: Toko Plastik Sejahtera / Kasir"
                        autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false"
                        class="w-full px-3.5 py-2.5 rounded-xl border-2 border-slate-900 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs font-bold text-slate-800 dark:text-slate-200 shadow-[1.5px_1.5px_0px_#0f172a] dark:shadow-[1.5px_1.5px_0px_#000000] focus:outline-none">
                </div>

                <!-- Petunjuk Otomatisasi Buku Kas -->
                <div id="pos-cshmv-auto-note" class="p-3 rounded-xl bg-amber-50 dark:bg-amber-950/40 border-2 border-slate-900 dark:border-slate-700 shadow-[2px_2px_0px_#0f172a] dark:shadow-[2px_2px_0px_#000000] flex items-start gap-2.5 text-[11px] text-amber-900 dark:text-amber-200 font-semibold">
                    <i class="fa-solid fa-circle-check text-amber-600 dark:text-amber-400 mt-0.5 shrink-0"></i>
                    <span><b>Otomatis Terhubung:</b> Pengeluaran ini langsung masuk ke <b>Buku Kas Toko</b> dan laporan Laba Rugi owner tanpa perlu input manual lagi.</span>
                </div>
            </div>

            <!-- Footer Action Buttons -->
            <div class="p-4 border-t-2 border-slate-900 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/80 flex items-center gap-2.5">
                <button onclick="window.closePOSCashMovementModal()" class="flex-1 py-3 rounded-xl bg-white dark:bg-slate-800 border-2 border-slate-900 dark:border-slate-700 text-slate-800 dark:text-slate-200 font-black text-xs shadow-[2px_2px_0px_#0f172a] dark:shadow-[2px_2px_0px_#000000] hover:bg-slate-100 transition-all cursor-pointer active:translate-x-[1px] active:translate-y-[1px]">
                    Batal
                </button>
                <button id="pos-cshmv-submit-btn" onclick="window.confirmPOSCashMovement()" class="flex-[2] py-3 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-black text-xs uppercase tracking-wider border-2 border-slate-900 dark:border-slate-700 shadow-[2.5px_2.5px_0px_#0f172a] dark:shadow-[2.5px_2.5px_0px_#000000] active:translate-x-[1px] active:translate-y-[1px] transition-all flex items-center justify-center gap-2 cursor-pointer">
                    <i class="fa-solid fa-check"></i>
                    <span>Simpan Kas Keluar</span>
                </button>
            </div>
        </div>
    </div>`;

    document.body.insertAdjacentHTML('beforeend', html);

    const m = el('pos-cash-movement-modal');
    const box = el('pos-cash-movement-box');
    if (!m || !box) return;

    m.classList.remove('pointer-events-none');
    if (typeof window.pushModalHistory === 'function') {
        window.pushModalHistory('posCashMovement');
    }
    requestAnimationFrame(() => {
        m.classList.remove('opacity-0');
        box.classList.remove('translate-y-8', 'scale-95');
    });

    setPOSCashMovementType(defaultType);

    setTimeout(() => {
        const inp = el('pos-cshmv-amount-input');
        if (inp) { inp.value = ''; inp.focus(); }
        const rsn = el('pos-cshmv-reason-input');
        if (rsn) rsn.value = '';
        const rec = el('pos-cshmv-recipient-input');
        if (rec) rec.value = '';
    }, 250);
};

export const closePOSCashMovementModal = (fH = false) => {
    const amtEl = el('pos-cshmv-amount-input'); if (amtEl) amtEl.value = '';
    const rsnEl = el('pos-cshmv-reason-input'); if (rsnEl) rsnEl.value = '';
    const recEl = el('pos-cshmv-recipient-input'); if (recEl) recEl.value = '';

    const doClose = () => {
        const m = el('pos-cash-movement-modal');
        const box = el('pos-cash-movement-box');
        if (!m) return;
        m.classList.add('opacity-0', 'pointer-events-none');
        if (box) box.classList.add('translate-y-8', 'scale-95');
        setTimeout(() => { m.remove(); }, 280);
    };

    if (typeof window.requestCloseModal === 'function') {
        window.requestCloseModal('posCashMovement', fH, doClose);
    } else {
        doClose();
    }
};

export const setPOSCashMovementType = (type) => {
    _activeCashMovementType = type;
    const tabOut = el('pos-cshmv-tab-out');
    const tabIn  = el('pos-cshmv-tab-in');
    const icon   = el('pos-cshmv-header-icon');
    const title  = el('pos-cshmv-header-title');
    const typeLbl= el('pos-cshmv-type-label');
    const catWrap= el('pos-cshmv-category-wrap');
    const recLbl = el('pos-cshmv-recipient-label');
    const recInp = el('pos-cshmv-recipient-input');
    const autoNote = el('pos-cshmv-auto-note');
    const btn    = el('pos-cshmv-submit-btn');
    const amtInp = el('pos-cshmv-amount-input');

    if (type === 'out') {
        if (tabOut) tabOut.className = 'py-2.5 rounded-lg font-black transition-all flex items-center justify-center gap-1.5 cursor-pointer border-1.5 border-slate-900 shadow-[1.5px_1.5px_0px_#0f172a] bg-rose-600 text-white active:translate-x-[1px] active:translate-y-[1px]';
        if (tabIn)  tabIn.className  = 'py-2.5 rounded-lg font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer text-slate-700 dark:text-slate-300 hover:text-slate-900';
        if (icon) { icon.className = 'w-10 h-10 rounded-xl flex items-center justify-center text-white text-base border-2 border-slate-900 shadow-[1.5px_1.5px_0px_#0f172a] shrink-0 bg-rose-600'; icon.innerHTML = '<i class="fa-solid fa-arrow-up-from-bracket"></i>'; }
        if (title) title.innerText = 'Catat Kas Keluar Laci';
        if (typeLbl) { typeLbl.innerText = 'Pengeluaran Laci'; typeLbl.className = 'text-[10px] font-black text-rose-600 uppercase tracking-wider'; }
        if (catWrap) catWrap.classList.remove('hidden');
        if (recLbl) recLbl.innerHTML = '<i class="fa-solid fa-user text-slate-500 mr-1"></i>Penerima Uang (Opsional)';
        if (recInp) recInp.placeholder = 'Contoh: Toko Plastik Sejahtera / Kasir';
        if (autoNote) autoNote.classList.remove('hidden');
        if (btn) { btn.className = 'flex-[2] py-3 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-black text-xs uppercase tracking-wider border-2 border-slate-900 dark:border-slate-700 shadow-[2.5px_2.5px_0px_#0f172a] dark:shadow-[2.5px_2.5px_0px_#000000] active:translate-x-[1px] active:translate-y-[1px] transition-all flex items-center justify-center gap-2 cursor-pointer'; btn.innerHTML = '<i class="fa-solid fa-check"></i><span>Simpan Kas Keluar</span>'; }
    } else {
        if (tabOut) tabOut.className = 'py-2.5 rounded-lg font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer text-slate-700 dark:text-slate-300 hover:text-slate-900';
        if (tabIn)  tabIn.className  = 'py-2.5 rounded-lg font-black transition-all flex items-center justify-center gap-1.5 cursor-pointer border-1.5 border-slate-900 shadow-[1.5px_1.5px_0px_#0f172a] bg-emerald-600 text-white active:translate-x-[1px] active:translate-y-[1px]';
        if (icon) { icon.className = 'w-10 h-10 rounded-xl flex items-center justify-center text-white text-base border-2 border-slate-900 shadow-[1.5px_1.5px_0px_#0f172a] shrink-0 bg-emerald-600'; icon.innerHTML = '<i class="fa-solid fa-arrow-down-to-bracket"></i>'; }
        if (title) title.innerText = 'Catat Kas Masuk Laci';
        if (typeLbl) { typeLbl.innerText = 'Penerimaan Laci'; typeLbl.className = 'text-[10px] font-black text-emerald-600 uppercase tracking-wider'; }
        if (catWrap) catWrap.classList.add('hidden');
        if (recLbl) recLbl.innerHTML = '<i class="fa-solid fa-vault text-slate-500 mr-1"></i>Sumber Uang Masuk';
        if (recInp) recInp.placeholder = 'Contoh: Tambah Modal Receh dari Brankas / Kas Induk';
        if (autoNote) autoNote.classList.add('hidden');
        if (btn) { btn.className = 'flex-[2] py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-black text-xs uppercase tracking-wider border-2 border-slate-900 dark:border-slate-700 shadow-[2.5px_2.5px_0px_#0f172a] dark:shadow-[2.5px_2.5px_0px_#000000] active:translate-x-[1px] active:translate-y-[1px] transition-all flex items-center justify-center gap-2 cursor-pointer'; btn.innerHTML = '<i class="fa-solid fa-check"></i><span>Simpan Kas Masuk</span>'; }
    }
};

export const posSetCashMovementPreset = (amount) => {
    const inp = el('pos-cshmv-amount-input');
    if (inp) {
        inp.value = amount;
        inp.focus();
        inp.select();
    }
};

export const confirmPOSCashMovement = async () => {
    const shift = getActiveShift();
    if (!shift || shift.status !== 'open') return;

    const amtInp = el('pos-cshmv-amount-input');
    const reasonInp = el('pos-cshmv-reason-input');
    const catSelect = el('pos-cshmv-category-select');
    const recInp = el('pos-cshmv-recipient-input');

    const amount = parseFloat(amtInp?.value) || 0;
    if (amount <= 0) {
        showToast('Nominal uang harus lebih dari Rp 0', 'warning');
        amtInp?.focus();
        return;
    }

    const type = _activeCashMovementType || 'out';
    const reason = (reasonInp?.value || '').trim() || (type === 'out' ? 'Pengeluaran operasional laci kasir' : 'Kas masuk / modal receh');
    const category = catSelect?.value || 'lainnya';
    const recipient = (recInp?.value || '').trim();

    const btn = el('pos-cshmv-submit-btn');
    if (btn) {
        btn.disabled = true;
        btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin mr-1"></i> Menyimpan...';
    }

    const success = await recordCashMovementToShift({ type, amount, reason, category, recipient });
    if (success) {
        closePOSCashMovementModal();
    } else if (btn) {
        btn.disabled = false;
        btn.innerHTML = '<i class="fa-solid fa-check"></i><span>Simpan Transaksi</span>';
    }
};

// ─── Modal Ringkasan Shift Berjalan (X-Report) ───────────────
export const openShiftSummaryModal = () => {
    const shift = getActiveShift();
    if (!shift) {
        openPOSOpenShiftModal();
        return;
    }

    document.getElementById('pos-shift-summary-modal')?.remove();

    const expectedCash = getShiftExpectedCash(shift);
    const durationStr = formatShiftDuration(shift.startTime);
    const startTimeStr = new Date(shift.startTime).toLocaleString('id-ID', { dateStyle: 'medium', timeStyle: 'short' });
    const cashMovements = Array.isArray(shift.cashMovements) ? shift.cashMovements : [];

    const html = `
    <div id="pos-shift-summary-modal" class="fixed inset-0 z-[10001] flex items-center justify-center p-3 sm:p-4 transition-all duration-300 opacity-0 pointer-events-none" style="background:rgba(15,23,42,0.75)">
        <div id="pos-shift-summary-box" class="bg-white dark:bg-slate-900 rounded-2xl shadow-[4.5px_4.5px_0px_#0f172a] dark:shadow-[4.5px_4.5px_0px_#000000] w-full max-w-lg border-2 border-slate-900 dark:border-slate-700 overflow-hidden transform translate-y-8 scale-95 transition-all duration-300 flex flex-col max-h-[92vh]">
            <!-- Header Modal -->
            <div class="px-5 py-4 border-b-2 border-slate-900 dark:border-slate-700 flex items-center justify-between bg-slate-50 dark:bg-slate-800/80">
                <div class="flex items-center gap-3">
                    <div class="w-10 h-10 rounded-xl border-2 border-slate-900 dark:border-slate-700 shadow-[1.5px_1.5px_0px_#0f172a] dark:shadow-[1.5px_1.5px_0px_#000000] flex items-center justify-center text-white text-base shrink-0" style="background:var(--color-primary)">
                        <i class="fa-solid fa-chart-pie"></i>
                    </div>
                    <div>
                        <div class="flex items-center gap-2">
                            <h3 class="text-sm font-black text-slate-900 dark:text-white uppercase tracking-wider">Ringkasan Shift Kasir</h3>
                            <span class="px-2 py-0.5 rounded-lg text-[9px] font-black uppercase tracking-wider bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 border-1.5 border-slate-900 dark:border-slate-700 shadow-[1px_1px_0px_#0f172a]">X-Report</span>
                        </div>
                        <p class="text-[11px] font-semibold text-slate-500 dark:text-slate-400">Shift aktif: <b>${esc(shift.shiftNo || shift.id)}</b></p>
                    </div>
                </div>
                <button onclick="window.closePOSShiftSummaryModal()" class="w-8 h-8 rounded-xl border-2 border-slate-900 dark:border-slate-700 shadow-[1.5px_1.5px_0px_#0f172a] dark:shadow-[1.5px_1.5px_0px_#000000] bg-white dark:bg-slate-800 hover:bg-slate-100 text-slate-900 dark:text-slate-100 flex items-center justify-center text-base font-black transition-all cursor-pointer active:translate-x-[1px] active:translate-y-[1px]">×</button>
            </div>

            <!-- Body Modal -->
            <div class="p-5 space-y-4 overflow-y-auto flex-1">
                <!-- Info Kasir & Durasi -->
                <div class="grid grid-cols-2 gap-2.5">
                    <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/80 border-2 border-slate-900 dark:border-slate-700 shadow-[2px_2px_0px_#0f172a] dark:shadow-[2px_2px_0px_#000000]">
                        <span class="text-[10px] text-slate-500 dark:text-slate-400 block font-bold uppercase tracking-wider">Kasir Bertugas</span>
                        <span class="font-black text-slate-900 dark:text-slate-100 text-xs truncate block">${esc(shift.cashierName)}</span>
                        <span class="text-[10px] text-slate-500 dark:text-slate-400 mt-0.5 block font-semibold">Mulai: ${esc(startTimeStr)}</span>
                    </div>
                    <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/80 border-2 border-slate-900 dark:border-slate-700 shadow-[2px_2px_0px_#0f172a] dark:shadow-[2px_2px_0px_#000000]">
                        <span class="text-[10px] text-slate-500 dark:text-slate-400 block font-bold uppercase tracking-wider">Durasi Kerja</span>
                        <span class="font-black text-emerald-600 dark:text-emerald-400 text-xs block">${esc(durationStr)}</span>
                        <span class="text-[10px] text-slate-500 dark:text-slate-400 mt-0.5 block font-semibold">${shift.txCount || 0} Struk / ${formatShiftQty(shift.itemCount || 0)} Item</span>
                    </div>
                </div>

                <!-- Kartu Utama: Kas di Laci Saat Ini (Expected Cash) -->
                <div class="p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border-2 border-slate-900 dark:border-slate-700 shadow-[3px_3px_0px_#0f172a] dark:shadow-[3px_3px_0px_#000000]">
                    <div class="flex items-center justify-between">
                        <div>
                            <span class="text-[11px] font-black text-emerald-800 dark:text-emerald-300 uppercase tracking-wider block">Uang Kas di Laci Seharusnya</span>
                            <span class="text-[10px] font-medium text-slate-600 dark:text-slate-400">Modal Awal + Penjualan Tunai + Kas Masuk - Kas Keluar</span>
                        </div>
                        <div class="text-right">
                            <span class="text-xl font-black text-emerald-700 dark:text-emerald-300 block">${fRp(expectedCash)}</span>
                        </div>
                    </div>
                    <!-- Micro Formula Pills -->
                    <div class="mt-3 pt-2.5 border-t-2 border-slate-900/20 dark:border-slate-700/60 grid grid-cols-2 sm:grid-cols-4 gap-2 text-[10px]">
                        <div class="p-2 rounded-lg bg-white dark:bg-slate-800 border-1.5 border-slate-900 dark:border-slate-700 shadow-[1px_1px_0px_#0f172a]">
                            <span class="text-slate-500 dark:text-slate-400 block font-bold">Modal Awal</span>
                            <span class="font-black text-slate-900 dark:text-white">${fRp(shift.startingCash)}</span>
                        </div>
                        <div class="p-2 rounded-lg bg-white dark:bg-slate-800 border-1.5 border-slate-900 dark:border-slate-700 shadow-[1px_1px_0px_#0f172a]">
                            <span class="text-slate-500 dark:text-slate-400 block font-bold">+ Penjualan Tunai</span>
                            <span class="font-black text-emerald-600 dark:text-emerald-400">+${fRp(shift.cashSales || 0)}</span>
                        </div>
                        <div class="p-2 rounded-lg bg-white dark:bg-slate-800 border-1.5 border-slate-900 dark:border-slate-700 shadow-[1px_1px_0px_#0f172a]">
                            <span class="text-slate-500 dark:text-slate-400 block font-bold">+ Kas Masuk (In)</span>
                            <span class="font-black text-emerald-600 dark:text-emerald-400">+${fRp(shift.cashIn || 0)}</span>
                        </div>
                        <div class="p-2 rounded-lg bg-white dark:bg-slate-800 border-1.5 border-slate-900 dark:border-slate-700 shadow-[1px_1px_0px_#0f172a]">
                            <span class="text-slate-500 dark:text-slate-400 block font-bold">- Kas Keluar (Out)</span>
                            <span class="font-black text-rose-600 dark:text-rose-400">-${fRp(shift.cashOut || 0)}</span>
                        </div>
                    </div>
                </div>

                <!-- Tombol Cepat Arus Kas Laci -->
                <div class="grid grid-cols-2 gap-2">
                    <button type="button" onclick="window.openPOSCashMovementModal('out')" 
                        class="py-2.5 px-3 rounded-xl bg-rose-50 dark:bg-rose-950/40 hover:bg-rose-100 dark:hover:bg-rose-900/60 text-rose-800 dark:text-rose-300 border-2 border-slate-900 dark:border-slate-700 shadow-[2px_2px_0px_#0f172a] dark:shadow-[2px_2px_0px_#000000] font-black text-xs flex items-center justify-center gap-2 transition-all active:translate-x-[1px] active:translate-y-[1px] cursor-pointer">
                        <i class="fa-solid fa-arrow-up-from-bracket text-xs text-rose-600 dark:text-rose-400"></i>
                        <span>Catat Kas Keluar</span>
                    </button>
                    <button type="button" onclick="window.openPOSCashMovementModal('in')" 
                        class="py-2.5 px-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 hover:bg-emerald-100 dark:hover:bg-emerald-900/60 text-emerald-800 dark:text-emerald-300 border-2 border-slate-900 dark:border-slate-700 shadow-[2px_2px_0px_#0f172a] dark:shadow-[2px_2px_0px_#000000] font-black text-xs flex items-center justify-center gap-2 transition-all active:translate-x-[1px] active:translate-y-[1px] cursor-pointer">
                        <i class="fa-solid fa-arrow-down-to-bracket text-xs text-emerald-600 dark:text-emerald-400"></i>
                        <span>Catat Kas Masuk</span>
                    </button>
                </div>

                <!-- Riwayat Mutasi Kas di Shift Ini (Jika Ada) -->
                ${cashMovements.length > 0 ? `
                <div class="space-y-1.5">
                    <div class="flex items-center justify-between text-xs font-black text-slate-800 dark:text-slate-200">
                        <span class="flex items-center gap-1.5"><i class="fa-solid fa-money-bill-transfer text-amber-500"></i>Mutasi Kas Laci Non-Sales (${cashMovements.length})</span>
                    </div>
                    <div class="max-h-36 overflow-y-auto space-y-1.5 pr-1 custom-scrollbar">
                        ${cashMovements.map(m => `
                        <div class="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border-2 border-slate-900 dark:border-slate-700 shadow-[1.5px_1.5px_0px_#0f172a] dark:shadow-[1.5px_1.5px_0px_#000000] flex items-center justify-between text-xs">
                            <div class="flex items-center gap-2 min-w-0">
                                <span class="w-6 h-6 rounded-lg border-1.5 border-slate-900 dark:border-slate-700 flex items-center justify-center text-[10px] shrink-0 ${m.type === 'out' ? 'bg-rose-100 text-rose-700 dark:bg-rose-950/80 dark:text-rose-300' : 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950/80 dark:text-emerald-300'}">
                                    <i class="fa-solid ${m.type === 'out' ? 'fa-arrow-up' : 'fa-arrow-down'}"></i>
                                </span>
                                <div class="min-w-0">
                                    <p class="font-black text-slate-900 dark:text-white truncate">${esc(m.reason || (m.type === 'out' ? 'Kas Keluar' : 'Kas Masuk'))}</p>
                                    <p class="text-[10px] font-semibold text-slate-500 dark:text-slate-400">${new Date(m.time).toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' })}${m.recipient ? ` &bull; ${esc(m.recipient)}` : ''}</p>
                                </div>
                            </div>
                            <span class="font-black shrink-0 ${m.type === 'out' ? 'text-rose-600 dark:text-rose-400' : 'text-emerald-600 dark:text-emerald-400'}">
                                ${m.type === 'out' ? '-' : '+'}${fRp(m.amount)}
                            </span>
                        </div>
                        `).join('')}
                    </div>
                </div>` : ''}

                <!-- Rincian Omset Penjualan -->
                <div class="space-y-2">
                    <div class="flex items-center justify-between text-xs font-black text-slate-800 dark:text-slate-200 border-b-2 border-slate-900 dark:border-slate-700 pb-1.5">
                        <span class="flex items-center gap-1.5"><i class="fa-solid fa-receipt text-slate-500"></i>Rincian Metode Pembayaran</span>
                        <span class="text-slate-600 dark:text-slate-400 text-[11px] font-bold">Total Omset: <b class="font-black text-slate-900 dark:text-white">${fRp(shift.totalSales || 0)}</b></span>
                    </div>

                    <div class="space-y-1.5 text-xs">
                        <div class="flex justify-between items-center p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border-2 border-slate-900 dark:border-slate-700 shadow-[1.5px_1.5px_0px_#0f172a] dark:shadow-[1.5px_1.5px_0px_#000000]">
                            <span class="text-slate-700 dark:text-slate-200 font-bold flex items-center gap-2">
                                <span class="w-6 h-6 rounded-lg border-1.5 border-slate-900 dark:border-slate-700 bg-emerald-100 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-300 flex items-center justify-center text-[10px]"><i class="fa-solid fa-money-bill-wave"></i></span>
                                <span>Tunai (Cash)</span>
                            </span>
                            <span class="font-black text-slate-900 dark:text-white">${fRp(shift.cashSales || 0)}</span>
                        </div>
                        ${(shift.tempoInstallmentCash || 0) > 0 ? `
                        <div class="flex justify-between items-center p-2.5 rounded-xl bg-amber-50 dark:bg-amber-950/40 border-2 border-slate-900 dark:border-slate-700 shadow-[1.5px_1.5px_0px_#0f172a] dark:shadow-[1.5px_1.5px_0px_#000000] text-[11px]">
                            <span class="text-amber-800 dark:text-amber-300 font-bold flex items-center gap-2">
                                <span class="w-6 h-6 rounded-lg border-1.5 border-slate-900 dark:border-slate-700 bg-amber-100 dark:bg-amber-900/80 text-amber-700 dark:text-amber-300 flex items-center justify-center text-[10px]"><i class="fa-solid fa-hand-holding-dollar"></i></span>
                                <span>Dari Cicilan Piutang (Kas Masuk)</span>
                            </span>
                            <span class="font-black text-amber-800 dark:text-amber-300">+${fRp(shift.tempoInstallmentCash)}</span>
                        </div>` : ''}
                        <div class="flex justify-between items-center p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border-2 border-slate-900 dark:border-slate-700 shadow-[1.5px_1.5px_0px_#0f172a] dark:shadow-[1.5px_1.5px_0px_#000000]">
                            <span class="text-slate-700 dark:text-slate-200 font-bold flex items-center gap-2">
                                <span class="w-6 h-6 rounded-lg border-1.5 border-slate-900 dark:border-slate-700 bg-indigo-100 dark:bg-indigo-950/80 text-indigo-700 dark:text-indigo-300 flex items-center justify-center text-[10px]"><i class="fa-solid fa-qrcode"></i></span>
                                <span>QRIS Dinamis</span>
                            </span>
                            <span class="font-black text-slate-900 dark:text-white">${fRp(shift.qrisSales || 0)}</span>
                        </div>
                        <div class="flex justify-between items-center p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border-2 border-slate-900 dark:border-slate-700 shadow-[1.5px_1.5px_0px_#0f172a] dark:shadow-[1.5px_1.5px_0px_#000000]">
                            <span class="text-slate-700 dark:text-slate-200 font-bold flex items-center gap-2">
                                <span class="w-6 h-6 rounded-lg border-1.5 border-slate-900 dark:border-slate-700 bg-blue-100 dark:bg-blue-950/80 text-blue-700 dark:text-blue-300 flex items-center justify-center text-[10px]"><i class="fa-solid fa-building-columns"></i></span>
                                <span>Transfer Bank</span>
                            </span>
                            <span class="font-black text-slate-900 dark:text-white">${fRp(shift.bankSales || 0)}</span>
                        </div>
                        <div class="flex justify-between items-center p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border-2 border-slate-900 dark:border-slate-700 shadow-[1.5px_1.5px_0px_#0f172a] dark:shadow-[1.5px_1.5px_0px_#000000]">
                            <span class="text-slate-700 dark:text-slate-200 font-bold flex items-center gap-2">
                                <span class="w-6 h-6 rounded-lg border-1.5 border-slate-900 dark:border-slate-700 bg-amber-100 dark:bg-amber-950/80 text-amber-700 dark:text-amber-300 flex items-center justify-center text-[10px]"><i class="fa-solid fa-clock-rotate-left"></i></span>
                                <span>Tempo / Piutang (Sisa)</span>
                            </span>
                            <span class="font-black text-slate-900 dark:text-white">${fRp(shift.tempoSales || 0)}</span>
                        </div>
                    </div>
                </div>

                <!-- Diskon & Poin -->
                <div class="grid grid-cols-2 gap-2 text-xs">
                    <div class="p-2.5 rounded-xl bg-rose-50 dark:bg-rose-950/40 border-2 border-slate-900 dark:border-slate-700 shadow-[1.5px_1.5px_0px_#0f172a] dark:shadow-[1.5px_1.5px_0px_#000000]">
                        <span class="text-[10px] text-rose-700 dark:text-rose-400 block font-bold uppercase tracking-wider">Total Diskon Diberikan</span>
                        <span class="font-black text-rose-700 dark:text-rose-300 text-xs">${fRp(shift.discountTotal || 0)}</span>
                    </div>
                    <div class="p-2.5 rounded-xl bg-amber-50 dark:bg-amber-950/40 border-2 border-slate-900 dark:border-slate-700 shadow-[1.5px_1.5px_0px_#0f172a] dark:shadow-[1.5px_1.5px_0px_#000000]">
                        <span class="text-[10px] text-amber-700 dark:text-amber-400 block font-bold uppercase tracking-wider">Poin Member Dikreditkan</span>
                        <span class="font-black text-amber-700 dark:text-amber-300 text-xs">+${shift.pointsTotal || 0} Poin</span>
                    </div>
                </div>
            </div>

            <!-- Footer Action Buttons -->
            <div class="p-4 border-t-2 border-slate-900 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/80 flex items-center gap-2">
                <button onclick="window.printShiftSettlementReceipt(window.getActiveShift(), true)" class="px-3.5 py-3 rounded-xl bg-white dark:bg-slate-800 border-2 border-slate-900 dark:border-slate-700 text-slate-800 dark:text-slate-200 font-black text-xs hover:bg-slate-100 dark:hover:bg-slate-700 transition-all flex items-center gap-1.5 cursor-pointer shadow-[2px_2px_0px_#0f172a] dark:shadow-[2px_2px_0px_#000000] active:translate-x-[1px] active:translate-y-[1px]" title="Preview & Cetak Slip Sementara (X-Report)">
                    <i class="fa-solid fa-eye text-emerald-600"></i>
                    <i class="fa-solid fa-print"></i>
                    <span class="hidden sm:inline">Preview X-Report</span>
                </button>
                <button onclick="window.closePOSShiftSummaryModal()" class="flex-1 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 dark:hover:bg-slate-600 text-slate-800 dark:text-slate-200 border-2 border-slate-900 dark:border-slate-700 font-black text-xs transition-all cursor-pointer shadow-[2px_2px_0px_#0f172a] dark:shadow-[2px_2px_0px_#000000] active:translate-x-[1px] active:translate-y-[1px]">
                    <span class="sm:hidden">Lanjut Shift</span>
                    <span class="hidden sm:inline">Lanjut Jaga Kasir</span>
                </button>
                <button onclick="window.closePOSShiftSummaryModal(); window.openPOSCloseShiftModal();" class="flex-1 py-3 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-black text-xs uppercase tracking-wider border-2 border-slate-900 dark:border-slate-700 shadow-[2px_2px_0px_#0f172a] dark:shadow-[2px_2px_0px_#000000] active:translate-x-[1px] active:translate-y-[1px] transition-all flex items-center justify-center gap-1.5 cursor-pointer">
                    <i class="fa-solid fa-lock"></i>
                    <span>Tutup Shift</span>
                </button>
            </div>
        </div>
    </div>`;

    document.body.insertAdjacentHTML('beforeend', html);

    const m = el('pos-shift-summary-modal');
    const box = el('pos-shift-summary-box');
    if (!m || !box) return;

    m.classList.remove('pointer-events-none');
    if (typeof window.pushModalHistory === 'function') {
        window.pushModalHistory('posShiftSummary');
    }
    requestAnimationFrame(() => {
        m.classList.remove('opacity-0');
        box.classList.remove('translate-y-8', 'scale-95');
    });
};

export const closePOSShiftSummaryModal = (fH = false) => {
    const doClose = () => {
        const m = el('pos-shift-summary-modal');
        const box = el('pos-shift-summary-box');
        if (!m) return;
        m.classList.add('opacity-0', 'pointer-events-none');
        if (box) box.classList.add('translate-y-8', 'scale-95');
        setTimeout(() => { m.remove(); }, 280);
    };

    if (typeof window.requestCloseModal === 'function') {
        window.requestCloseModal('posShiftSummary', fH, doClose);
    } else {
        doClose();
    }
};

// ─── Modal Tutup Shift & Rekonsiliasi Kas Laci (Z-Report) ─────
export const openPOSCloseShiftModal = () => {
    const shift = getActiveShift();
    if (!shift) {
        showToast('Tidak ada shift kasir yang aktif saat ini.', 'warning');
        return;
    }

    document.getElementById('pos-close-shift-modal')?.remove();

    const expectedCash = getShiftExpectedCash(shift);

    const html = `
    <div id="pos-close-shift-modal" class="fixed inset-0 z-[10001] flex items-center justify-center p-3 sm:p-4 transition-all duration-300 opacity-0 pointer-events-none" style="background:rgba(15,23,42,0.8)">
        <div id="pos-close-shift-box" class="bg-white dark:bg-slate-900 rounded-2xl shadow-[4.5px_4.5px_0px_#0f172a] dark:shadow-[4.5px_4.5px_0px_#000000] w-full max-w-lg border-2 border-slate-900 dark:border-slate-700 overflow-hidden transform translate-y-8 scale-95 transition-all duration-300 flex flex-col max-h-[94vh]">
            <!-- Header Modal -->
            <div class="px-5 py-4 border-b-2 border-slate-900 dark:border-slate-700 flex items-center justify-between bg-slate-50 dark:bg-slate-800/80">
                <div class="flex items-center gap-3">
                    <div class="w-10 h-10 rounded-xl border-2 border-slate-900 dark:border-slate-700 shadow-[1.5px_1.5px_0px_#0f172a] dark:shadow-[1.5px_1.5px_0px_#000000] flex items-center justify-center text-white text-base shrink-0 bg-rose-600">
                        <i class="fa-solid fa-lock"></i>
                    </div>
                    <div>
                        <div class="flex items-center gap-2">
                            <h3 class="text-sm font-black text-slate-900 dark:text-white uppercase tracking-wider">Rekap &amp; Tutup Shift Kasir</h3>
                            <span class="px-2 py-0.5 rounded-lg text-[9px] font-black uppercase tracking-wider bg-rose-100 dark:bg-rose-950/80 text-rose-800 dark:text-rose-300 border-1.5 border-slate-900 dark:border-slate-700 shadow-[1px_1px_0px_#0f172a]">Z-Report</span>
                        </div>
                        <p class="text-[11px] font-semibold text-slate-500 dark:text-slate-400">Rekonsiliasi uang kas di laci kasir</p>
                    </div>
                </div>
                <button onclick="window.closePOSCloseShiftModal()" class="w-8 h-8 rounded-xl border-2 border-slate-900 dark:border-slate-700 shadow-[1.5px_1.5px_0px_#0f172a] dark:shadow-[1.5px_1.5px_0px_#000000] bg-white dark:bg-slate-800 hover:bg-slate-100 text-slate-900 dark:text-slate-100 flex items-center justify-center text-base font-black transition-all cursor-pointer active:translate-x-[1px] active:translate-y-[1px]">×</button>
            </div>

            <!-- Body Modal -->
            <div class="p-5 space-y-4 overflow-y-auto flex-1">
                <!-- Info Uang Kas Sistem -->
                <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/80 border-2 border-slate-900 dark:border-slate-700 shadow-[2px_2px_0px_#0f172a] dark:shadow-[2px_2px_0px_#000000] flex items-center justify-between">
                    <div>
                        <span class="text-[10px] uppercase font-black text-slate-500 dark:text-slate-400 block tracking-wider">Uang Kas Sistem (Seharusnya di Laci)</span>
                        <div class="text-xs text-slate-600 dark:text-slate-300 mt-0.5 font-semibold">
                            Modal: <b>${fRp(shift.startingCash)}</b> + Penjualan: <b>${fRp(shift.cashSales || 0)}</b>
                            ${(shift.cashIn || 0) > 0 ? ` <span class="text-emerald-600 dark:text-emerald-400 font-bold">(+ Kas Masuk ${fRp(shift.cashIn)})</span>` : ''}
                            ${(shift.cashOut || 0) > 0 ? ` <span class="text-rose-600 dark:text-rose-400 font-bold">(- Kas Keluar ${fRp(shift.cashOut)})</span>` : ''}
                            ${(shift.tempoInstallmentCash || 0) > 0 ? ` <span class="text-amber-600 dark:text-amber-400 font-bold">(incl. Cicilan +${fRp(shift.tempoInstallmentCash)})</span>` : ''}
                        </div>
                    </div>
                    <div class="text-right">
                        <span id="pos-close-expected-cash" class="text-lg font-black text-slate-900 dark:text-white">${fRp(expectedCash)}</span>
                    </div>
                </div>

                <!-- Pengalih Mode Hitung Fisik (Quick vs Denominasi) -->
                <div class="space-y-2">
                    <div class="flex items-center justify-between">
                        <label class="text-xs font-black text-slate-800 dark:text-slate-200 uppercase tracking-wide flex items-center gap-1.5">
                            <i class="fa-solid fa-calculator text-emerald-600"></i>
                            <span>Hitung Uang Fisik di Laci</span>
                        </label>
                        <div class="flex items-center bg-slate-100 dark:bg-slate-800 rounded-xl p-1 text-[10px] border-2 border-slate-900 dark:border-slate-700 shadow-[1.5px_1.5px_0px_#0f172a] dark:shadow-[1.5px_1.5px_0px_#000000]">
                            <button type="button" id="pos-count-tab-quick" onclick="window.setPOSCountMode('quick')" class="px-2.5 py-1 rounded-lg font-black bg-white dark:bg-slate-700 text-slate-900 dark:text-white border-1.5 border-slate-900 dark:border-slate-600 shadow-[1px_1px_0px_#0f172a] transition-all cursor-pointer">Input Cepat</button>
                            <button type="button" id="pos-count-tab-denom" onclick="window.setPOSCountMode('denom')" class="px-2.5 py-1 rounded-lg font-bold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-all cursor-pointer border border-transparent">Lembaran (Denominasi)</button>
                        </div>
                    </div>

                    <!-- Panel Input Cepat -->
                    <div id="pos-count-panel-quick" class="space-y-1.5">
                        <div class="relative">
                            <span class="absolute left-3.5 top-1/2 -translate-y-1/2 font-black text-sm text-slate-600 dark:text-slate-300 pointer-events-none">Rp</span>
                            <input id="pos-shift-actual-cash-input" type="number" min="0" step="1000" placeholder="0" 
                                autocomplete="off" autocorrect="off" spellcheck="false"
                                class="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-slate-900 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-black text-lg focus:outline-none focus:border-[var(--color-primary)] shadow-[2px_2px_0px_#0f172a] dark:shadow-[2px_2px_0px_#000000] transition-all text-right"
                                value="${expectedCash}" oninput="window.updatePOSShiftDiscrepancy()">
                        </div>
                    </div>

                    <!-- Panel Kalkulator Denominasi -->
                    <div id="pos-count-panel-denom" class="hidden space-y-2 p-3 bg-slate-50 dark:bg-slate-800/80 rounded-xl border-2 border-slate-900 dark:border-slate-700 shadow-[2px_2px_0px_#0f172a] dark:shadow-[2px_2px_0px_#000000]">
                        <div class="grid grid-cols-2 gap-2 text-xs">
                            <div class="flex items-center justify-between bg-white dark:bg-slate-800 px-2.5 sm:px-3 py-2 rounded-xl border-2 border-slate-900 dark:border-slate-700 shadow-[1px_1px_0px_#0f172a] transition-all">
                                <span class="font-black text-slate-800 dark:text-slate-200 text-xs sm:text-[13px] whitespace-nowrap">Rp 100.000</span>
                                <div class="flex items-center gap-1.5 shrink-0">
                                    <span class="text-xs text-slate-500 font-bold">×</span>
                                    <input type="number" min="0" id="denom-100k" placeholder="0" autocomplete="off" autocorrect="off" spellcheck="false" class="w-16 sm:w-20 h-9 px-2 text-right font-black text-xs sm:text-sm border-2 border-slate-900 dark:border-slate-700 rounded-lg bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:border-[var(--color-primary)] transition-all" oninput="window.calcPOSDenominations()">
                                </div>
                            </div>
                            <div class="flex items-center justify-between bg-white dark:bg-slate-800 px-2.5 sm:px-3 py-2 rounded-xl border-2 border-slate-900 dark:border-slate-700 shadow-[1px_1px_0px_#0f172a] transition-all">
                                <span class="font-black text-slate-800 dark:text-slate-200 text-xs sm:text-[13px] whitespace-nowrap">Rp 50.000</span>
                                <div class="flex items-center gap-1.5 shrink-0">
                                    <span class="text-xs text-slate-500 font-bold">×</span>
                                    <input type="number" min="0" id="denom-50k" placeholder="0" autocomplete="off" autocorrect="off" spellcheck="false" class="w-16 sm:w-20 h-9 px-2 text-right font-black text-xs sm:text-sm border-2 border-slate-900 dark:border-slate-700 rounded-lg bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:border-[var(--color-primary)] transition-all" oninput="window.calcPOSDenominations()">
                                </div>
                            </div>
                            <div class="flex items-center justify-between bg-white dark:bg-slate-800 px-2.5 sm:px-3 py-2 rounded-xl border-2 border-slate-900 dark:border-slate-700 shadow-[1px_1px_0px_#0f172a] transition-all">
                                <span class="font-black text-slate-800 dark:text-slate-200 text-xs sm:text-[13px] whitespace-nowrap">Rp 20.000</span>
                                <div class="flex items-center gap-1.5 shrink-0">
                                    <span class="text-xs text-slate-500 font-bold">×</span>
                                    <input type="number" min="0" id="denom-20k" placeholder="0" autocomplete="off" autocorrect="off" spellcheck="false" class="w-16 sm:w-20 h-9 px-2 text-right font-black text-xs sm:text-sm border-2 border-slate-900 dark:border-slate-700 rounded-lg bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:border-[var(--color-primary)] transition-all" oninput="window.calcPOSDenominations()">
                                </div>
                            </div>
                            <div class="flex items-center justify-between bg-white dark:bg-slate-800 px-2.5 sm:px-3 py-2 rounded-xl border-2 border-slate-900 dark:border-slate-700 shadow-[1px_1px_0px_#0f172a] transition-all">
                                <span class="font-black text-slate-800 dark:text-slate-200 text-xs sm:text-[13px] whitespace-nowrap">Rp 10.000</span>
                                <div class="flex items-center gap-1.5 shrink-0">
                                    <span class="text-xs text-slate-500 font-bold">×</span>
                                    <input type="number" min="0" id="denom-10k" placeholder="0" autocomplete="off" autocorrect="off" spellcheck="false" class="w-16 sm:w-20 h-9 px-2 text-right font-black text-xs sm:text-sm border-2 border-slate-900 dark:border-slate-700 rounded-lg bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:border-[var(--color-primary)] transition-all" oninput="window.calcPOSDenominations()">
                                </div>
                            </div>
                            <div class="flex items-center justify-between bg-white dark:bg-slate-800 px-2.5 sm:px-3 py-2 rounded-xl border-2 border-slate-900 dark:border-slate-700 shadow-[1px_1px_0px_#0f172a] transition-all">
                                <span class="font-black text-slate-800 dark:text-slate-200 text-xs sm:text-[13px] whitespace-nowrap">Rp 5.000</span>
                                <div class="flex items-center gap-1.5 shrink-0">
                                    <span class="text-xs text-slate-500 font-bold">×</span>
                                    <input type="number" min="0" id="denom-5k" placeholder="0" autocomplete="off" autocorrect="off" spellcheck="false" class="w-16 sm:w-20 h-9 px-2 text-right font-black text-xs sm:text-sm border-2 border-slate-900 dark:border-slate-700 rounded-lg bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:border-[var(--color-primary)] transition-all" oninput="window.calcPOSDenominations()">
                                </div>
                            </div>
                            <div class="flex items-center justify-between bg-white dark:bg-slate-800 px-2.5 sm:px-3 py-2 rounded-xl border-2 border-slate-900 dark:border-slate-700 shadow-[1px_1px_0px_#0f172a] transition-all">
                                <span class="font-black text-slate-800 dark:text-slate-200 text-xs sm:text-[13px] whitespace-nowrap">Rp 2.000</span>
                                <div class="flex items-center gap-1.5 shrink-0">
                                    <span class="text-xs text-slate-500 font-bold">×</span>
                                    <input type="number" min="0" id="denom-2k" placeholder="0" autocomplete="off" autocorrect="off" spellcheck="false" class="w-16 sm:w-20 h-9 px-2 text-right font-black text-xs sm:text-sm border-2 border-slate-900 dark:border-slate-700 rounded-lg bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:border-[var(--color-primary)] transition-all" oninput="window.calcPOSDenominations()">
                                </div>
                            </div>
                            <div class="flex items-center justify-between bg-white dark:bg-slate-800 px-2.5 sm:px-3 py-2 rounded-xl border-2 border-slate-900 dark:border-slate-700 shadow-[1px_1px_0px_#0f172a] transition-all">
                                <span class="font-black text-slate-800 dark:text-slate-200 text-xs sm:text-[13px] whitespace-nowrap">Rp 1.000</span>
                                <div class="flex items-center gap-1.5 shrink-0">
                                    <span class="text-xs text-slate-500 font-bold">×</span>
                                    <input type="number" min="0" id="denom-1k" placeholder="0" autocomplete="off" autocorrect="off" spellcheck="false" class="w-16 sm:w-20 h-9 px-2 text-right font-black text-xs sm:text-sm border-2 border-slate-900 dark:border-slate-700 rounded-lg bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:border-[var(--color-primary)] transition-all" oninput="window.calcPOSDenominations()">
                                </div>
                            </div>
                            <div class="flex items-center justify-between bg-white dark:bg-slate-800 px-2.5 sm:px-3 py-2 rounded-xl border-2 border-slate-900 dark:border-slate-700 shadow-[1px_1px_0px_#0f172a] transition-all">
                                <span class="font-black text-slate-800 dark:text-slate-200 text-xs sm:text-[13px] whitespace-nowrap">Koin / Receh</span>
                                <div class="flex items-center gap-1.5 shrink-0">
                                    <span class="text-xs text-slate-500 font-bold">Rp</span>
                                    <input type="number" min="0" id="denom-coin" placeholder="0" autocomplete="off" autocorrect="off" spellcheck="false" class="w-16 sm:w-24 h-9 px-2 text-right font-black text-xs sm:text-sm border-2 border-slate-900 dark:border-slate-700 rounded-lg bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:border-[var(--color-primary)] transition-all" oninput="window.calcPOSDenominations()">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Kartu Status Selisih Kas (Live Dynamic Calculation) -->
                <div id="pos-discrepancy-card" class="p-4 rounded-xl border-2 border-slate-900 dark:border-slate-700 shadow-[2px_2px_0px_#0f172a] dark:shadow-[2px_2px_0px_#000000] transition-all duration-300 flex items-center justify-between bg-emerald-50 dark:bg-emerald-950/40">
                    <div class="flex items-center gap-3">
                        <div id="pos-discrepancy-icon" class="w-10 h-10 rounded-xl border-2 border-slate-900 dark:border-slate-700 shadow-[1.5px_1.5px_0px_#0f172a] dark:shadow-[1.5px_1.5px_0px_#000000] flex items-center justify-center text-white text-base shrink-0 bg-emerald-600">
                            <i class="fa-solid fa-check"></i>
                        </div>
                        <div>
                            <span id="pos-discrepancy-status" class="text-xs font-black uppercase tracking-wider text-emerald-900 dark:text-emerald-300 block">SEIMBANG (PAS)</span>
                            <span id="pos-discrepancy-desc" class="text-[11px] font-semibold text-emerald-700 dark:text-emerald-400 block">Uang fisik laci kasir cocok dengan transaksi sistem</span>
                        </div>
                    </div>
                    <div class="text-right">
                        <span class="text-[10px] font-bold text-slate-500 dark:text-slate-400 block uppercase tracking-wider">Selisih Kas</span>
                        <span id="pos-discrepancy-amount" class="text-base font-black text-emerald-600 dark:text-emerald-400">Rp 0</span>
                    </div>
                </div>

                <!-- Catatan Penutupan Shift -->
                <div class="space-y-1">
                    <label class="block text-xs font-black text-slate-800 dark:text-slate-200 uppercase tracking-wide">
                        <i class="fa-regular fa-comment-dots text-slate-500 mr-1"></i>Catatan Penutupan Shift
                    </label>
                    <textarea id="pos-shift-close-notes" rows="2" placeholder="Catatan mengenai kondisi laci, sisa kembalian, atau alasan jika terdapat selisih kas..."
                        class="w-full px-3.5 py-2.5 rounded-xl border-2 border-slate-900 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs text-slate-900 dark:text-slate-100 font-semibold focus:outline-none focus:border-[var(--color-primary)] shadow-[2px_2px_0px_#0f172a] dark:shadow-[2px_2px_0px_#000000]"></textarea>
                </div>
            </div>

            <!-- Footer Action Buttons -->
            <div class="p-4 border-t-2 border-slate-900 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/80 flex items-center gap-2">
                <button onclick="window.closePOSCloseShiftModal()" class="flex-1 py-3 rounded-xl bg-white dark:bg-slate-800 border-2 border-slate-900 dark:border-slate-700 text-slate-800 dark:text-slate-200 font-black text-xs hover:bg-slate-100 transition-all cursor-pointer shadow-[2px_2px_0px_#0f172a] dark:shadow-[2px_2px_0px_#000000] active:translate-x-[1px] active:translate-y-[1px]">
                    Batal
                </button>
                <button onclick="window.confirmClosePOSShift()" class="flex-[2] py-3 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-black text-xs uppercase tracking-wider border-2 border-slate-900 dark:border-slate-700 shadow-[2px_2px_0px_#0f172a] dark:shadow-[2px_2px_0px_#000000] active:translate-x-[1px] active:translate-y-[1px] transition-all flex items-center justify-center gap-2 cursor-pointer">
                    <i class="fa-solid fa-lock"></i>
                    <span>Konfirmasi &amp; Tutup Shift</span>
                </button>
            </div>
        </div>
    </div>`;

    document.body.insertAdjacentHTML('beforeend', html);

    const m = el('pos-close-shift-modal');
    const box = el('pos-close-shift-box');
    if (!m || !box) return;

    m.classList.remove('pointer-events-none');
    if (typeof window.pushModalHistory === 'function') {
        window.pushModalHistory('posCloseShift');
    }
    requestAnimationFrame(() => {
        m.classList.remove('opacity-0');
        box.classList.remove('translate-y-8', 'scale-95');
    });

    setTimeout(() => {
        const inp = el('pos-shift-actual-cash-input');
        if (inp) { inp.focus(); inp.select(); }
    }, 250);
};

export const closePOSCloseShiftModal = (fH = false) => {
    const doClose = () => {
        const m = el('pos-close-shift-modal');
        const box = el('pos-close-shift-box');
        if (!m) return;
        m.classList.add('opacity-0', 'pointer-events-none');
        if (box) box.classList.add('translate-y-8', 'scale-95');
        setTimeout(() => { m.remove(); }, 280);
    };

    if (typeof window.requestCloseModal === 'function') {
        window.requestCloseModal('posCloseShift', fH, doClose);
    } else {
        doClose();
    }
};

export const setPOSCountMode = (mode) => {
    const tabQuick = el('pos-count-tab-quick');
    const tabDenom = el('pos-count-tab-denom');
    const panelQuick = el('pos-count-panel-quick');
    const panelDenom = el('pos-count-panel-denom');

    if (mode === 'quick') {
        if (tabQuick) { tabQuick.className = 'px-2.5 py-1 rounded-lg font-black bg-white dark:bg-slate-700 text-slate-900 dark:text-white border-1.5 border-slate-900 dark:border-slate-600 shadow-[1px_1px_0px_#0f172a] transition-all cursor-pointer'; }
        if (tabDenom) { tabDenom.className = 'px-2.5 py-1 rounded-lg font-bold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-all cursor-pointer border border-transparent'; }
        if (panelQuick) panelQuick.classList.remove('hidden');
        if (panelDenom) panelDenom.classList.add('hidden');
    } else {
        if (tabQuick) { tabQuick.className = 'px-2.5 py-1 rounded-lg font-bold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-all cursor-pointer border border-transparent'; }
        if (tabDenom) { tabDenom.className = 'px-2.5 py-1 rounded-lg font-black bg-white dark:bg-slate-700 text-slate-900 dark:text-white border-1.5 border-slate-900 dark:border-slate-600 shadow-[1px_1px_0px_#0f172a] transition-all cursor-pointer'; }
        if (panelQuick) panelQuick.classList.add('hidden');
        if (panelDenom) panelDenom.classList.remove('hidden');
        calcPOSDenominations();
    }
};

export const calcPOSDenominations = () => {
    const d100 = (parseFloat(el('denom-100k')?.value) || 0) * 100000;
    const d50  = (parseFloat(el('denom-50k')?.value) || 0) * 50000;
    const d20  = (parseFloat(el('denom-20k')?.value) || 0) * 20000;
    const d10  = (parseFloat(el('denom-10k')?.value) || 0) * 10000;
    const d5   = (parseFloat(el('denom-5k')?.value) || 0) * 5000;
    const d2   = (parseFloat(el('denom-2k')?.value) || 0) * 2000;
    const d1   = (parseFloat(el('denom-1k')?.value) || 0) * 1000;
    const coin = parseFloat(el('denom-coin')?.value) || 0;

    const total = d100 + d50 + d20 + d10 + d5 + d2 + d1 + coin;

    const inp = el('pos-shift-actual-cash-input');
    if (inp) inp.value = total;

    updatePOSShiftDiscrepancy();
};

export const updatePOSShiftDiscrepancy = () => {
    const shift = getActiveShift();
    if (!shift) return;

    const expectedCash = getShiftExpectedCash(shift);
    const actualCash = parseFloat(el('pos-shift-actual-cash-input')?.value) || 0;
    const diff = actualCash - expectedCash;

    const card = el('pos-discrepancy-card');
    const icon = el('pos-discrepancy-icon');
    const status = el('pos-discrepancy-status');
    const desc = el('pos-discrepancy-desc');
    const amount = el('pos-discrepancy-amount');

    if (!card || !icon || !status || !desc || !amount) return;

    if (diff === 0) {
        card.className = 'p-4 rounded-xl border-2 border-slate-900 dark:border-slate-700 shadow-[2px_2px_0px_#0f172a] dark:shadow-[2px_2px_0px_#000000] transition-all duration-300 flex items-center justify-between bg-emerald-50 dark:bg-emerald-950/40';
        icon.className = 'w-10 h-10 rounded-xl border-2 border-slate-900 dark:border-slate-700 shadow-[1.5px_1.5px_0px_#0f172a] dark:shadow-[1.5px_1.5px_0px_#000000] flex items-center justify-center text-white text-base shrink-0 bg-emerald-600';
        icon.innerHTML = '<i class="fa-solid fa-check"></i>';
        status.className = 'text-xs font-black uppercase tracking-wider text-emerald-900 dark:text-emerald-300 block';
        status.innerText = 'SEIMBANG (PAS)';
        desc.className = 'text-[11px] font-semibold text-emerald-700 dark:text-emerald-400 block';
        desc.innerText = 'Uang fisik laci kasir cocok dengan transaksi sistem';
        amount.className = 'text-base font-black text-emerald-600 dark:text-emerald-400';
        amount.innerText = 'Rp 0';
    } else if (diff > 0) {
        card.className = 'p-4 rounded-xl border-2 border-slate-900 dark:border-slate-700 shadow-[2px_2px_0px_#0f172a] dark:shadow-[2px_2px_0px_#000000] transition-all duration-300 flex items-center justify-between bg-amber-50 dark:bg-amber-950/40';
        icon.className = 'w-10 h-10 rounded-xl border-2 border-slate-900 dark:border-slate-700 shadow-[1.5px_1.5px_0px_#0f172a] dark:shadow-[1.5px_1.5px_0px_#000000] flex items-center justify-center text-white text-base shrink-0 bg-amber-500';
        icon.innerHTML = '<i class="fa-solid fa-plus"></i>';
        status.className = 'text-xs font-black uppercase tracking-wider text-amber-900 dark:text-amber-300 block';
        status.innerText = 'LEBIH (SURPLUS)';
        desc.className = 'text-[11px] font-semibold text-amber-700 dark:text-amber-400 block';
        desc.innerText = 'Terdapat kelebihan uang fisik di laci kasir';
        amount.className = 'text-base font-black text-amber-600 dark:text-amber-400';
        amount.innerText = '+ ' + fRp(diff);
    } else {
        card.className = 'p-4 rounded-xl border-2 border-slate-900 dark:border-slate-700 shadow-[2px_2px_0px_#0f172a] dark:shadow-[2px_2px_0px_#000000] transition-all duration-300 flex items-center justify-between bg-rose-50 dark:bg-rose-950/40';
        icon.className = 'w-10 h-10 rounded-xl border-2 border-slate-900 dark:border-slate-700 shadow-[1.5px_1.5px_0px_#0f172a] dark:shadow-[1.5px_1.5px_0px_#000000] flex items-center justify-center text-white text-base shrink-0 bg-rose-600';
        icon.innerHTML = '<i class="fa-solid fa-minus"></i>';
        status.className = 'text-xs font-black uppercase tracking-wider text-rose-900 dark:text-rose-300 block';
        status.innerText = 'KURANG (DEFISIT)';
        desc.className = 'text-[11px] font-semibold text-rose-700 dark:text-rose-400 block';
        desc.innerText = 'Terdapat kekurangan uang fisik di laci kasir';
        amount.className = 'text-base font-black text-rose-600 dark:text-rose-400';
        amount.innerText = '- ' + fRp(Math.abs(diff));
    }
};

export const confirmClosePOSShift = async () => {
    const shift = getActiveShift();
    if (!shift) return;

    const expectedCash = getShiftExpectedCash(shift);
    const actualCash = parseFloat(el('pos-shift-actual-cash-input')?.value) || 0;
    const diff = actualCash - expectedCash;
    const closingNotes = el('pos-shift-close-notes')?.value?.trim() || '';

    const denominations = {
        d100k: parseFloat(el('denom-100k')?.value) || 0,
        d50k:  parseFloat(el('denom-50k')?.value) || 0,
        d20k:  parseFloat(el('denom-20k')?.value) || 0,
        d10k:  parseFloat(el('denom-10k')?.value) || 0,
        d5k:   parseFloat(el('denom-5k')?.value) || 0,
        d2k:   parseFloat(el('denom-2k')?.value) || 0,
        d1k:   parseFloat(el('denom-1k')?.value) || 0,
        coin:  parseFloat(el('denom-coin')?.value) || 0
    };

    const endTime = Date.now();
    const durationStr = formatShiftDuration(shift.startTime, endTime);

    const closedShift = {
        ...shift,
        status: 'closed',
        endTime,
        endTimeISO: new Date(endTime).toISOString(),
        duration: durationStr,
        expectedCash,
        actualCash,
        difference: diff,
        discrepancyStatus: diff === 0 ? 'balanced' : (diff > 0 ? 'surplus' : 'deficit'),
        denominations,
        closingNotes
    };

    // Lepas listener realtime
    detachActiveShiftListener();

    // Simpan ke Firestore pos_shifts
    try {
        await Promise.all([
            db.collection('freshmart').doc('cms_data').collection('pos_shifts').doc(closedShift.id).set(closedShift, { merge: true }),
            db.collection('pos_shifts').doc(closedShift.id).set(closedShift, { merge: true })
        ]);
    } catch (e) {
        console.warn('[POS Shift] Simpan Firestore:', e);
    }

    // Bersihkan sesi aktif & simpan riwayat terakhir
    clearActiveShift();
    saveLastClosedShift(closedShift);

    closePOSCloseShiftModal();
    playShiftChime('close');

    // Tampilkan modal selesai tutup shift dengan tombol Cetak Slip Thermal
    showClosedShiftSuccessModal(closedShift);

    // Refresh UI
    if (typeof window.renderShiftHeaderBadge === 'function') {
        window.renderShiftHeaderBadge();
    }
};

// ─── Modal Sukses Tutup Shift ─────────────────────────────────
const showClosedShiftSuccessModal = (closedShift) => {
    document.getElementById('pos-closed-success-modal')?.remove();

    const diff = closedShift.difference || 0;
    const diffBadge = diff === 0
        ? `<span class="px-2.5 py-1 rounded-xl text-xs font-black bg-emerald-100 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300">PAS (Rp 0)</span>`
        : (diff > 0
            ? `<span class="px-2.5 py-1 rounded-xl text-xs font-black bg-amber-100 text-amber-700 dark:bg-amber-950/60 dark:text-amber-300">LEBIH (+${fRp(diff)})</span>`
            : `<span class="px-2.5 py-1 rounded-xl text-xs font-black bg-rose-100 text-rose-700 dark:bg-rose-950/60 dark:text-rose-300">KURANG (-${fRp(Math.abs(diff))})</span>`);

    const html = `
    <div id="pos-closed-success-modal" class="fixed inset-0 z-[10002] flex items-center justify-center p-3 sm:p-4" style="background:rgba(15,23,42,0.85)">
        <div class="bg-white dark:bg-slate-900 rounded-3xl shadow-2xl w-full max-w-md border border-slate-200/90 dark:border-slate-800 overflow-hidden text-center p-6 space-y-4">
            <div class="w-16 h-16 rounded-3xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center text-3xl mx-auto shadow-inner">
                <i class="fa-solid fa-circle-check"></i>
            </div>
            <div>
                <h3 class="text-base font-black text-slate-800 dark:text-white uppercase tracking-wider">Shift Kasir Berhasil Ditutup</h3>
                <p class="text-xs text-slate-500 dark:text-slate-400 mt-1">Laporan rekap Z-Report telah tersimpan aman di database toko</p>
            </div>

            <!-- Rekap Kartu Ringkas -->
            <div class="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60 text-xs space-y-2 text-left">
                <div class="flex justify-between"><span>No Shift:</span><span class="font-bold font-mono">#${esc(closedShift.shiftNo || closedShift.id)}</span></div>
                <div class="flex justify-between"><span>Kasir:</span><span class="font-bold">${esc(closedShift.cashierName)}</span></div>
                <div class="flex justify-between"><span>Durasi:</span><span class="font-bold">${esc(closedShift.duration)}</span></div>
                <div class="flex justify-between border-t border-slate-200/60 dark:border-slate-700/60 pt-1.5"><span>Total Omset:</span><span class="font-bold">${fRp(closedShift.totalSales || 0)}</span></div>
                <div class="flex justify-between"><span>Kas Fisik Laci:</span><span class="font-black text-slate-900 dark:text-white">${fRp(closedShift.actualCash || 0)}</span></div>
                <div class="flex justify-between items-center border-t border-slate-200/60 dark:border-slate-700/60 pt-1.5"><span>Status Selisih:</span><div>${diffBadge}</div></div>
            </div>

            <!-- Action Buttons -->
            <div class="space-y-2 pt-2">
                <button onclick="window.printShiftSettlementReceipt(window.getLastClosedShift(), false)" class="neo-btn w-full py-3.5 rounded-xl text-white font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer" style="background: var(--color-primary);">
                    <i class="fa-solid fa-eye"></i>
                    <i class="fa-solid fa-print"></i>
                    <span>Preview & Cetak Slip Shift (Z-Report)</span>
                </button>
                <div class="flex items-center gap-2">
                    <button onclick="document.getElementById('pos-closed-success-modal')?.remove(); window.openPOSOpenShiftModal();" class="flex-1 py-3 rounded-2xl bg-[rgba(var(--color-primary-rgb),0.1)] hover:bg-[rgba(var(--color-primary-rgb),0.18)] text-[var(--color-primary)] font-bold text-xs border border-[rgba(var(--color-primary-rgb),0.25)] transition-all cursor-pointer flex items-center justify-center gap-1.5 active:scale-95">
                        <i class="fa-solid fa-plus-circle"></i>
                        <span>Buka Shift Baru</span>
                    </button>
                    <button onclick="document.getElementById('pos-closed-success-modal')?.remove(); if(typeof window.cashierLogout==='function') window.cashierLogout(true);" class="flex-1 py-3 rounded-2xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 font-bold text-xs transition-all cursor-pointer active:scale-95">
                        Selesai &amp; Keluar
                    </button>
                </div>
            </div>
        </div>
    </div>`;

    document.body.insertAdjacentHTML('beforeend', html);
};

// ─── Cetak Slip Rekap Shift Thermal POS (58mm / 80mm) ────────
export const printShiftSettlementReceipt = (shift, isXReport = false, forcePreview = false) => {
    if (!shift) {
        showToast('Data shift tidak ditemukan.', 'warning');
        return;
    }

    window._lastShiftData = { shift, isXReport };
    const config = typeof getPrinterConfig === 'function' ? getPrinterConfig() : { paperSize: '58mm', deviceType: 'rawbt' };

    // Satu tampilan preview universal untuk seluruh sistem (konsisten dengan tema)
    if (typeof window.printShiftSettlementDirect === 'function') {
        window.printShiftSettlementDirect(shift, isXReport);
        return;
    }

    const cols = typeof window.getPaperCols === 'function' ? window.getPaperCols(config.paperSize) : (config.paperSize === '80mm' ? 48 : 32);
    const is80 = cols >= 40;

    const storeName = config.headerText || appData.store?.name || 'TOKO PUTRI';
    const storeAddr = appData.store?.address || '';
    const storeWa   = appData.store?.wa || '';
    const footerTxt = config.footerText || 'Laporan Kasir Resmi Toko Putri';

    const pL = (l, r, len = cols) => {
        const p = len - String(l).length - String(r).length;
        return String(l) + (p > 0 ? ' '.repeat(p) : ' ') + String(r);
    };

    const titleStr = is80
        ? (isXReport ? '*** RINGKASAN SHIFT (X-REPORT) ***' : '*** REKAP TUTUP SHIFT (Z-REPORT) ***')
        : (isXReport ? '** RINGKASAN SHIFT (X) **' : '** REKAP TUTUP SHIFT (Z) **');

    const startDateStr = typeof window.formatCompactDate === 'function' ? window.formatCompactDate(shift.startTime, is80) : new Date(shift.startTime).toLocaleString('id-ID');
    const endDateStr = typeof window.formatCompactDate === 'function' ? window.formatCompactDate(shift.endTime || Date.now(), is80) : new Date(shift.endTime || Date.now()).toLocaleString('id-ID');
    const durationStr = shift.duration || formatShiftDuration(shift.startTime, shift.endTime || Date.now());

    const expectedCash = getShiftExpectedCash(shift);
    const actualCash = shift.actualCash !== undefined ? parseFloat(shift.actualCash) : expectedCash;
    const diff = actualCash - expectedCash;
    const diffStatusStr = diff === 0 ? 'SEIMBANG (PAS)' : (diff > 0 ? `LEBIH (+${fRp(diff)})` : `KURANG (-${fRp(Math.abs(diff))})`);

    // Tampilkan modal preview in-page
    document.getElementById('pos-shift-receipt-modal')?.remove();
    if (typeof window.pushModalHistory === 'function') {
        window.pushModalHistory('posShiftReceipt');
    }
    document.body.insertAdjacentHTML('beforeend', `
    <div id="pos-shift-receipt-modal" class="fixed inset-0 z-[10003] flex items-center justify-center p-3 sm:p-4" style="background:rgba(15,23,42,0.75)" onclick="if(event.target===this) window.closePOSShiftReceiptModal()">
        <div class="bg-white dark:bg-slate-900 rounded-3xl shadow-2xl w-full ${is80 ? 'max-w-[420px]' : 'max-w-[340px]'} border border-slate-200 dark:border-slate-800 overflow-hidden flex flex-col max-h-[90vh]">
            <div class="p-3.5 sm:p-4 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center bg-slate-50 dark:bg-slate-800/50">
                <span class="font-bold text-xs text-slate-700 dark:text-slate-200 flex items-center gap-1.5"><i class="fa-solid fa-receipt text-emerald-500"></i>Preview Slip Rekap Shift (${cols} Kolom)</span>
                <button onclick="window.closePOSShiftReceiptModal()" class="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-slate-700 dark:hover:text-slate-200 transition-colors flex items-center justify-center cursor-pointer" aria-label="Tutup preview"><i class="fa-solid fa-xmark text-sm"></i></button>
            </div>
            <div id="pos-shift-receipt-paper-box" class="p-4 overflow-y-auto flex-1 font-mono text-[11px] bg-slate-50/60 dark:bg-slate-950 text-slate-800 dark:text-slate-200 space-y-1.5 select-text custom-scrollbar">
                <div class="text-center font-bold text-sm uppercase">${esc(storeName)}</div>
                ${storeAddr ? `<div class="text-center text-[10px] text-slate-500">${esc(storeAddr)}</div>` : ''}
                ${storeWa ? `<div class="text-center text-[10px] text-slate-500">WA: ${esc(storeWa)}</div>` : ''}
                <div class="border-t border-dashed border-slate-300 dark:border-slate-700 my-2"></div>
                <div class="text-center font-black text-xs uppercase">${esc(titleStr)}</div>
                <div class="border-t border-dashed border-slate-300 dark:border-slate-700 my-2"></div>
                <div class="flex justify-between"><span>No Shift: <b>#${esc(shift.shiftNo || shift.id)}</b></span><span>${esc(startDateStr)}</span></div>
                <div class="flex justify-between"><span>Kasir   : ${esc(shift.cashierName)}</span><span>Durasi: ${esc(durationStr)}</span></div>
                <div class="flex justify-between"><span>Selesai : ${esc(endDateStr)}</span></div>
                <div class="border-t border-dashed border-slate-300 dark:border-slate-700 my-2"></div>
                <div class="font-bold">RINGKASAN PENJUALAN:</div>
                <div class="flex justify-between"><span>Total Struk</span><span>${shift.txCount || 0} Trx</span></div>
                <div class="flex justify-between"><span>Total Barang</span><span>${formatShiftQty(shift.itemCount || 0)} Item</span></div>
                <div class="border-t border-dashed border-slate-300 dark:border-slate-700 my-1"></div>
                <div class="flex justify-between"><span>Tunai (Cash)</span><span>${fRp(shift.cashSales || 0)}</span></div>
                <div class="flex justify-between"><span>QRIS</span><span>${fRp(shift.qrisSales || 0)}</span></div>
                <div class="flex justify-between"><span>Transfer Bank</span><span>${fRp(shift.bankSales || shift.transferSales || 0)}</span></div>
                <div class="flex justify-between"><span>Tempo (Piutang)</span><span>${fRp(shift.tempoSales || 0)}</span></div>
                <div class="border-t border-dashed border-slate-300 dark:border-slate-700 my-1"></div>
                <div class="flex justify-between font-black text-xs pt-0.5"><span>TOTAL OMSET</span><span style="color:var(--color-primary)">${fRp(shift.totalSales || 0)}</span></div>
                ${(shift.discountTotal || 0) > 0 ? `<div class="flex justify-between text-rose-500"><span>Diskon Toko</span><span>-${fRp(shift.discountTotal)}</span></div>` : ''}
                <div class="border-t border-dashed border-slate-300 dark:border-slate-700 my-2"></div>
                <div class="font-bold">REKONSILIASI KAS LACI:</div>
                <div class="flex justify-between"><span>Modal Awal</span><span>${fRp(shift.startingCash)}</span></div>
                <div class="flex justify-between"><span>Penjualan Tunai</span><span>${fRp((shift.cashSales || 0) - (shift.tempoInstallmentCash || 0))}</span></div>
                ${(shift.tempoInstallmentCash || 0) > 0 ? `
                <div class="flex justify-between text-amber-600"><span>+ Cicilan Piutang</span><span>+${fRp(shift.tempoInstallmentCash)}</span></div>` : ''}
                ${(shift.cashIn || 0) > 0 ? `
                <div class="flex justify-between text-emerald-600"><span>+ Kas Masuk (In)</span><span>+${fRp(shift.cashIn)}</span></div>` : ''}
                ${(shift.cashOut || 0) > 0 ? `
                <div class="flex justify-between text-rose-600"><span>- Kas Keluar (Out)</span><span>-${fRp(shift.cashOut)}</span></div>` : ''}
                <div class="flex justify-between font-bold"><span>Kas Sistem</span><span>${fRp(expectedCash)}</span></div>
                ${!isXReport ? `
                <div class="flex justify-between font-bold"><span>Kas Fisik Dihitung</span><span>${fRp(actualCash)}</span></div>
                <div class="border-t border-dashed border-slate-300 dark:border-slate-700 my-1"></div>
                <div class="flex justify-between font-black text-xs ${diff === 0 ? 'text-emerald-600' : (diff > 0 ? 'text-amber-600' : 'text-rose-600')}">
                    <span>SELISIH KAS</span>
                    <span>${diffStatusStr}</span>
                </div>` : ''}
                ${shift.closingNotes ? `
                <div class="border-t border-dashed border-slate-300 dark:border-slate-700 my-1.5"></div>
                <div class="text-[10px]"><b>Catatan:</b> ${esc(shift.closingNotes)}</div>` : ''}
                <div class="border-t border-dashed border-slate-300 dark:border-slate-700 my-2"></div>
                <div class="text-center text-[10px] text-slate-400 my-1">${esc(footerTxt)}</div>
                <div class="grid grid-cols-2 text-center text-[10px] pt-4 pb-2">
                    <div>
                        <div>Kasir Bertugas</div>
                        <div class="pt-8 font-bold">(${esc(shift.cashierName)})</div>
                    </div>
                    <div>
                        <div>Supervisor / Admin</div>
                        <div class="pt-8 font-bold">( ................ )</div>
                    </div>
                </div>
            </div>
            <div class="p-3 border-t border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/40 flex gap-2">
                <button onclick="window.executeShiftPrintDirect()" class="neo-btn flex-1 py-3.5 rounded-xl text-white font-black text-xs sm:text-sm flex items-center justify-center gap-2 cursor-pointer" style="background: var(--color-primary);">
                    <i class="fa-solid fa-bolt text-white/90"></i><i class="fa-solid fa-print"></i> Cetak Sekarang
                </button>
            </div>
        </div>
    </div>`);
};

export const closePOSShiftReceiptModal = (fH = false) => {
    const doClose = () => {
        document.getElementById('pos-shift-receipt-modal')?.remove();
    };
    if (typeof window.requestCloseModal === 'function') {
        window.requestCloseModal('posShiftReceipt', fH, doClose);
    } else {
        doClose();
    }
};
window.closePOSShiftReceiptModal = closePOSShiftReceiptModal;

export const executeShiftPrintDirect = () => {
    if (window._lastShiftData && typeof window.printShiftSettlementDirect === 'function') {
        window.printShiftSettlementDirect(window._lastShiftData.shift, window._lastShiftData.isXReport);
        return;
    }

    const pBox = el('pos-shift-receipt-paper-box');
    if (!pBox) return;

    if (typeof window.renderThermalDOMAndPrint === 'function') {
        window.renderThermalDOMAndPrint(pBox.innerHTML);
    } else {
        window.print();
    }
};

// ─── Render Shift Header Badge di POS ─────────────────────────
export const renderShiftHeaderBadge = () => {
    const targets = [el('pos-shift-btn-storefront'), el('pos-shift-btn-admin')];
    const shift = getActiveShift();

    targets.forEach(target => {
        if (!target) return;
        if (shift && shift.status === 'open') {
            const isStorefront = target.id === 'pos-shift-btn-storefront';
            if (isStorefront) {
                target.innerHTML = `
                <div class="flex items-center gap-1.5 shrink-0">
                    <button onclick="window.openPOSShiftSummaryModal()" class="h-8 px-2 sm:px-2.5 rounded-xl bg-black/15 hover:bg-black/25 text-white border border-white/20 transition-all cursor-pointer shadow-xs active:scale-95 inline-flex items-center gap-1 sm:gap-1.5 whitespace-nowrap shrink-0" title="Klik untuk lihat ringkasan shift (X-Report)">
                        <i class="fa-solid fa-cash-register text-emerald-300 text-xs"></i>
                        <span class="hidden lg:inline text-xs font-medium">Shift: </span>
                        <b class="text-white text-xs whitespace-nowrap hidden sm:inline">${fRp(shift.startingCash)}</b>
                    </button>
                    <button onclick="window.openPOSCashMovementModal()" class="hidden lg:inline-flex h-8 px-2 sm:px-2.5 rounded-xl bg-black/15 hover:bg-black/25 text-amber-300 border border-amber-300/30 transition-all cursor-pointer shadow-xs active:scale-95 items-center gap-1 whitespace-nowrap shrink-0" title="Catat Kas Keluar (Beli Plastik/Biaya) atau Kas Masuk Laci">
                        <i class="fa-solid fa-money-bill-transfer text-xs"></i>
                        <span class="text-xs font-bold">Kas &plusmn;</span>
                    </button>
                </div>`;
            } else {
                target.innerHTML = `
                <div class="flex items-center gap-1.5 shrink-0">
                    <button onclick="window.openPOSShiftSummaryModal()" class="h-8 px-2.5 sm:px-3 rounded-xl text-xs font-bold bg-[rgba(var(--color-primary-rgb),0.1)] hover:bg-[rgba(var(--color-primary-rgb),0.18)] text-[var(--color-primary)] border border-[rgba(var(--color-primary-rgb),0.25)] inline-flex items-center gap-1.5 transition-all cursor-pointer active:scale-95 whitespace-nowrap shrink-0 shadow-2xs" title="Klik untuk lihat ringkasan shift (X-Report)">
                        <i class="fa-solid fa-cash-register text-xs"></i>
                        <span class="hidden lg:inline font-medium">Shift: </span>
                        <b class="font-black whitespace-nowrap">${fRp(shift.startingCash)}</b>
                    </button>
                    <button onclick="window.openPOSCashMovementModal()" class="hidden lg:inline-flex h-8 px-2.5 sm:px-3 rounded-xl text-xs font-bold bg-amber-50 hover:bg-amber-100 dark:bg-amber-950/40 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-800/80 items-center gap-1 transition-all cursor-pointer active:scale-95 whitespace-nowrap shrink-0 shadow-2xs" title="Catat Kas Keluar (Beli Plastik/Biaya) atau Kas Masuk Laci">
                        <i class="fa-solid fa-money-bill-transfer text-xs"></i>
                        <span class="font-bold">Kas &plusmn;</span>
                    </button>
                </div>`;
            }
        } else {
            const isStorefront = target.id === 'pos-shift-btn-storefront';
            if (isStorefront) {
                target.innerHTML = `
                <button onclick="window.openPOSOpenShiftModal()" class="h-8 px-2 sm:px-2.5 rounded-xl bg-white/20 hover:bg-white/30 text-white font-bold text-xs inline-flex items-center gap-1 sm:gap-1.5 transition-all active:scale-95 shadow-xs cursor-pointer border border-white/25 whitespace-nowrap shrink-0" title="Buka shift kasir baru">
                    <span class="w-1.5 h-1.5 rounded-full bg-amber-300 animate-pulse"></span>
                    <i class="fa-solid fa-wallet text-amber-300 text-xs"></i>
                    <span class="text-xs font-black whitespace-nowrap hidden sm:inline">Buka Shift</span>
                </button>`;
            } else {
                target.innerHTML = `
                <button onclick="window.openPOSOpenShiftModal()" class="h-8 px-2.5 sm:px-3 rounded-xl text-xs font-bold bg-amber-50 hover:bg-amber-100 dark:bg-amber-950/40 dark:hover:bg-amber-900/60 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-800 inline-flex items-center gap-1.5 transition-all cursor-pointer active:scale-95 animate-pulse whitespace-nowrap shrink-0 shadow-2xs" title="Buka shift kasir baru">
                    <i class="fa-solid fa-wallet text-xs"></i>
                    <span class="whitespace-nowrap">Buka Shift</span>
                </button>`;
            }
        }
    });
};

// ─── Riwayat Shift di CMS Admin & POS ─────────────────────────
export const renderAdminShiftReportView = async (containerEl) => {
    const c = typeof containerEl === 'string' ? el(containerEl) : containerEl;
    if (!c) return;

    c.innerHTML = `
    <div class="space-y-4">
        <!-- Top Toolbar Header -->
        <div class="flex items-center justify-between gap-3 pt-1">
            <div class="min-w-0">
                <h3 class="text-sm sm:text-base font-black text-slate-900 dark:text-white flex items-center gap-2.5">
                    <span class="w-8 h-8 rounded-xl flex items-center justify-center text-xs shrink-0 shadow-2xs border border-[rgba(var(--color-primary-rgb),0.25)]" style="background: rgba(var(--color-primary-rgb), 0.12); color: var(--color-primary)">
                        <i class="fa-solid fa-file-invoice-dollar"></i>
                    </span>
                    <span class="truncate">Laporan Shift Kasir</span>
                </h3>
                <p class="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 mt-0.5 truncate">Rekap Z-Report buka-tutup kasir &amp; audit selisih kas fisik laci</p>
            </div>
            <button onclick="window.loadAdminShiftReports()" class="h-9 px-3.5 sm:px-4 rounded-xl bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700/80 text-slate-700 dark:text-slate-200 text-xs font-bold transition-all flex items-center gap-2 cursor-pointer shrink-0 shadow-2xs active:scale-95 border border-slate-200/90 dark:border-slate-700/80" title="Segarkan Data Shift">
                <i class="fa-solid fa-arrows-rotate text-[11px]" style="color:var(--color-primary)"></i>
                <span>Segarkan Data</span>
            </button>
        </div>

        <!-- Summary Metrics Banner Container -->
        <div id="admin-shift-metrics-target"></div>

        <!-- Shift Cards Container -->
        <div id="admin-shift-list-target" class="space-y-3">
            <div class="space-y-3">
                <div class="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 space-y-3">
                    <div class="flex items-center justify-between">
                        <div class="h-3.5 w-32 rounded-md skeleton-shimmer"></div>
                        <div class="h-3 w-20 rounded-md skeleton-shimmer"></div>
                    </div>
                    <div class="h-3 w-48 rounded-md skeleton-shimmer"></div>
                    <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1">
                        <div class="h-10 rounded-xl skeleton-shimmer"></div>
                        <div class="h-10 rounded-xl skeleton-shimmer"></div>
                        <div class="h-10 rounded-xl skeleton-shimmer"></div>
                        <div class="h-10 rounded-xl skeleton-shimmer"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>`;

    await loadAdminShiftReports();
};

export const loadAdminShiftReports = async () => {
    const target = el('admin-shift-list-target');
    const metricsTarget = el('admin-shift-metrics-target');
    if (!target) return;

    try {
        const snap = await db.collection('freshmart').doc('cms_data').collection('pos_shifts')
            .orderBy('startTime', 'desc')
            .limit(50)
            .get();

        if (snap.empty) {
            if (metricsTarget) metricsTarget.innerHTML = '';
            target.innerHTML = `
            <div class="text-center py-14 p-6 rounded-2xl sm:rounded-3xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700 text-slate-400 dark:text-slate-500">
                <i class="fa-solid fa-clipboard-list text-3xl mb-2"></i>
                <p class="font-bold text-xs">Belum ada riwayat shift kasir tercatat</p>
                <p class="text-[11px] mt-0.5">Shift yang dibuka dan ditutup oleh kasir akan otomatis terarsip di sini.</p>
            </div>`;
            return;
        }

        const docsData = snap.docs.map(doc => ({ id: doc.id, ...doc.data() }));

        // ── Hitung Metrik Ringkasan (Theme Harmonized) ──
        let totalShiftsCount = docsData.length;
        let activeShiftsCount = 0;
        let totalOmsetSum = 0;
        let totalCashInDrawerSum = 0;

        docsData.forEach(s => {
            if (s.status === 'open') activeShiftsCount++;
            totalOmsetSum += (parseFloat(s.totalSales) || 0);
            const actual = s.actualCash !== undefined 
                ? parseFloat(s.actualCash) 
                : getShiftExpectedCash(s);
            totalCashInDrawerSum += (actual || 0);
        });

        if (metricsTarget) {
            metricsTarget.innerHTML = `
            <div class="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-3.5">
                <div class="p-3.5 sm:p-4 rounded-2xl sm:rounded-3xl bg-white dark:bg-slate-800/90 border border-slate-200/90 dark:border-slate-700/80 shadow-2xs flex flex-col justify-between">
                    <div class="flex items-center justify-between mb-1.5">
                        <span class="text-[9px] font-black uppercase tracking-wider text-slate-500 dark:text-slate-400">Total Shift</span>
                        <div class="w-8 h-8 rounded-xl flex items-center justify-center text-xs shadow-2xs border border-[rgba(var(--color-primary-rgb),0.25)]" style="background: rgba(var(--color-primary-rgb), 0.12); color: var(--color-primary);">
                            <i class="fa-solid fa-receipt"></i>
                        </div>
                    </div>
                    <p class="text-base sm:text-xl font-black text-slate-900 dark:text-white tracking-tight">${totalShiftsCount} <span class="text-xs font-bold text-slate-400">Shift</span></p>
                    <p class="text-[10px] font-bold text-slate-400 mt-0.5">Arsip Rekap Kasir</p>
                </div>

                <div class="p-3.5 sm:p-4 rounded-2xl sm:rounded-3xl bg-white dark:bg-slate-800/90 border border-slate-200/90 dark:border-slate-700/80 shadow-2xs flex flex-col justify-between">
                    <div class="flex items-center justify-between mb-1.5">
                        <span class="text-[9px] font-black uppercase tracking-wider text-emerald-600 dark:text-emerald-400">Shift Aktif</span>
                        <div class="w-8 h-8 rounded-xl bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 flex items-center justify-center text-xs shadow-2xs border border-emerald-200 dark:border-emerald-800/60">
                            <i class="fa-solid fa-clock-rotate-left"></i>
                        </div>
                    </div>
                    <p class="text-base sm:text-xl font-black text-emerald-600 dark:text-emerald-400 tracking-tight flex items-center gap-1.5">
                        ${activeShiftsCount} <span class="text-xs font-bold text-slate-400">Kasir</span>
                        ${activeShiftsCount > 0 ? '<span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>' : ''}
                    </p>
                    <p class="text-[10px] font-bold text-slate-400 mt-0.5">${activeShiftsCount > 0 ? 'Sedang Bertransaksi' : 'Semua Shift Ditutup'}</p>
                </div>

                <div class="p-3.5 sm:p-4 rounded-2xl sm:rounded-3xl bg-white dark:bg-slate-800/90 border border-slate-200/90 dark:border-slate-700/80 shadow-2xs flex flex-col justify-between">
                    <div class="flex items-center justify-between mb-1.5">
                        <span class="text-[9px] font-black uppercase tracking-wider" style="color:var(--color-primary)">Total Omset</span>
                        <div class="w-8 h-8 rounded-xl flex items-center justify-center text-xs shadow-2xs border border-[rgba(var(--color-primary-rgb),0.25)]" style="background: rgba(var(--color-primary-rgb), 0.12); color: var(--color-primary);">
                            <i class="fa-solid fa-chart-line"></i>
                        </div>
                    </div>
                    <p class="text-base sm:text-lg font-black font-mono tracking-tight" style="color:var(--color-primary)">${fRp(totalOmsetSum)}</p>
                    <p class="text-[10px] font-bold text-slate-400 mt-0.5">Gross Sales Shift</p>
                </div>

                <div class="p-3.5 sm:p-4 rounded-2xl sm:rounded-3xl bg-white dark:bg-slate-800/90 border border-slate-200/90 dark:border-slate-700/80 shadow-2xs flex flex-col justify-between">
                    <div class="flex items-center justify-between mb-1.5">
                        <span class="text-[9px] font-black uppercase tracking-wider text-slate-500 dark:text-slate-400">Total Kas Laci</span>
                        <div class="w-8 h-8 rounded-xl bg-slate-100 dark:bg-slate-700/60 text-slate-700 dark:text-slate-300 flex items-center justify-center text-xs shadow-2xs border border-slate-200 dark:border-slate-600/60">
                            <i class="fa-solid fa-vault"></i>
                        </div>
                    </div>
                    <p class="text-base sm:text-lg font-black font-mono text-slate-900 dark:text-white tracking-tight">${fRp(totalCashInDrawerSum)}</p>
                    <p class="text-[10px] font-bold text-slate-400 mt-0.5">Uang Kas Fisik Terdata</p>
                </div>
            </div>`;
        }

        const cards = docsData.map(s => {
            const isClosed = s.status === 'closed';
            const diff = s.difference || 0;
            const diffBadge = !isClosed
                ? `<span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-black bg-emerald-50 dark:bg-emerald-950/70 text-emerald-700 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800 shadow-2xs tracking-wide shrink-0"><span class="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>SEDANG BERJALAN</span>`
                : (diff === 0
                    ? `<span class="inline-flex items-center gap-1 px-3 py-1 rounded-full text-[10px] font-black bg-emerald-100 dark:bg-emerald-950/70 text-emerald-700 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800 shadow-2xs shrink-0"><i class="fa-solid fa-check text-[10px]"></i> PAS</span>`
                    : (diff > 0
                        ? `<span class="inline-flex items-center gap-1 px-3 py-1 rounded-full text-[10px] font-black bg-amber-100 dark:bg-amber-950/70 text-amber-700 dark:text-amber-300 border border-amber-300 dark:border-amber-800 shadow-2xs shrink-0"><i class="fa-solid fa-arrow-trend-up text-[10px]"></i> LEBIH +${fRp(diff)}</span>`
                        : `<span class="inline-flex items-center gap-1 px-3 py-1 rounded-full text-[10px] font-black bg-rose-100 dark:bg-rose-950/70 text-rose-700 dark:text-rose-300 border border-rose-300 dark:border-rose-800 shadow-2xs shrink-0"><i class="fa-solid fa-arrow-trend-down text-[10px]"></i> KURANG -${fRp(Math.abs(diff))}</span>`));

            const startDate = s.startTime ? new Date(s.startTime).toLocaleString('id-ID', { dateStyle: 'medium', timeStyle: 'short' }) : '-';
            const endDate = s.endTime ? new Date(s.endTime).toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' }) + ' WIB' : '';
            const sJson = JSON.stringify(s).replace(/"/g, '&quot;');
            const actualCash = s.actualCash !== undefined ? s.actualCash : getShiftExpectedCash(s);

            return `
            <div class="p-4 sm:p-5 rounded-2xl sm:rounded-3xl bg-white dark:bg-slate-800/95 border border-slate-200/90 dark:border-slate-700/80 shadow-2xs hover:shadow-xs transition-all space-y-3.5">
                <div class="flex items-center justify-between gap-2 border-b border-slate-100 dark:border-slate-700/60 pb-3 flex-wrap sm:flex-nowrap">
                    <div class="flex items-center gap-3 min-w-0">
                        <div class="w-10 h-10 rounded-xl flex items-center justify-center text-sm text-white shrink-0 border border-slate-900 dark:border-slate-700 shadow-[1px_1px_0px_#0f172a] dark:shadow-[1px_1px_0px_#000000] ${isClosed ? 'bg-slate-800 dark:bg-slate-700' : ''}" style="${!isClosed ? 'background: var(--color-primary);' : ''}">
                            <i class="fa-solid ${!isClosed ? 'fa-cash-register' : 'fa-receipt'}"></i>
                        </div>
                        <div class="min-w-0">
                            <div class="flex items-center gap-2">
                                <span class="font-mono font-black text-xs sm:text-sm text-slate-900 dark:text-white whitespace-nowrap block truncate">#${esc(s.shiftNo || s.id)}</span>
                            </div>
                            <span class="text-[11px] text-slate-400 dark:text-slate-500 whitespace-nowrap block truncate mt-0.5">
                                <i class="fa-solid fa-clock text-[10px] mr-1"></i>${startDate} ${endDate ? '— ' + endDate : '• Aktif'}
                            </span>
                        </div>
                    </div>
                    <div class="flex items-center gap-2 shrink-0">
                        ${diffBadge}
                        <button onclick="window.printShiftSettlementReceipt(${sJson}, ${!isClosed})" class="h-9 px-3 rounded-xl bg-slate-50 hover:bg-slate-100 dark:bg-slate-700/80 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer shrink-0 shadow-2xs active:scale-95 border border-slate-200/80 dark:border-slate-600/60 hover:text-[var(--color-primary)]" title="Preview & Cetak Slip Rekap Shift">
                            <i class="fa-solid fa-print text-xs"></i>
                            <span class="hidden sm:inline">Slip Z-Report</span>
                        </button>
                        <button onclick="window.deleteShiftRecord('${s.id}', '${esc(s.shiftNo || s.id)}')" class="w-9 h-9 rounded-xl bg-slate-50 hover:bg-rose-50 dark:bg-slate-700/80 dark:hover:bg-rose-950/40 text-slate-400 hover:text-rose-600 dark:hover:text-rose-400 text-xs flex items-center justify-center transition-all cursor-pointer shrink-0 shadow-2xs active:scale-95 border border-slate-200/80 dark:border-slate-600/60 hover:border-rose-200" title="Hapus Data Shift">
                            <i class="fa-solid fa-trash-can"></i>
                        </button>
                    </div>
                </div>

                <div class="grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-xs">
                    <div class="p-3 rounded-2xl bg-slate-50/90 dark:bg-slate-900/60 border border-slate-200/70 dark:border-slate-800/80">
                        <span class="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
                            <i class="fa-solid fa-user-tie text-[10px]"></i> Kasir
                        </span>
                        <span class="font-black text-sm text-slate-800 dark:text-slate-100 truncate block mt-1">${esc(s.cashierName || 'Kasir')}</span>
                        <span class="text-[10px] font-bold text-slate-400 dark:text-slate-500 block mt-0.5">${s.txCount || 0} Trx • ${s.itemCount || 0} Item</span>
                    </div>
                    <div class="p-3 rounded-2xl bg-slate-50/90 dark:bg-slate-900/60 border border-slate-200/70 dark:border-slate-800/80">
                        <span class="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
                            <i class="fa-solid fa-hand-holding-dollar text-[10px]"></i> Modal Awal
                        </span>
                        <span class="font-black text-sm text-slate-800 dark:text-slate-100 font-mono block mt-1">${fRp(s.startingCash || 0)}</span>
                        <span class="text-[10px] text-slate-400 block mt-0.5">Uang Kas Buka Shift</span>
                    </div>
                    <div class="p-3 rounded-2xl bg-slate-50/90 dark:bg-slate-900/60 border border-slate-200/70 dark:border-slate-800/80">
                        <span class="text-[10px] font-bold uppercase tracking-wider flex items-center gap-1.5" style="color:var(--color-primary)">
                            <i class="fa-solid fa-chart-line text-[10px]"></i> Total Omset
                        </span>
                        <span class="font-black text-sm sm:text-base font-mono block mt-1" style="color:var(--color-primary)">${fRp(s.totalSales || 0)}</span>
                        <span class="text-[10px] font-bold text-emerald-600 dark:text-emerald-400 block mt-0.5">Gross Sales Shift</span>
                    </div>
                    <div class="p-3 rounded-2xl bg-slate-50/90 dark:bg-slate-900/60 border border-slate-200/70 dark:border-slate-800/80">
                        <span class="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
                            <i class="fa-solid fa-vault text-[10px]"></i> Kas Fisik Laci
                        </span>
                        <span class="font-black text-sm sm:text-base font-mono text-slate-900 dark:text-white block mt-1">${fRp(actualCash)}</span>
                        <span class="text-[10px] font-bold block mt-0.5 ${diff === 0 ? 'text-emerald-600 dark:text-emerald-400' : (diff > 0 ? 'text-amber-600' : 'text-rose-600')}">
                            ${!isClosed ? 'Kas Saat Ini' : (diff === 0 ? 'Kas Pas & Sesuai' : (diff > 0 ? 'Surplus +' + fRp(diff) : 'Defisit -' + fRp(Math.abs(diff))))}
                        </span>
                    </div>
                </div>

                ${(s.cashSales > 0 || s.qrisSales > 0 || s.bankSales > 0 || s.tempoSales > 0) ? `
                <div class="flex items-center gap-2 overflow-x-auto pb-1 hide-scrollbar text-[11px] pt-1">
                    <span class="text-[10px] font-bold text-slate-400 uppercase tracking-wider shrink-0 mr-0.5">Rincian Bayar:</span>
                    ${s.cashSales ? `<span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-xl bg-slate-100 dark:bg-slate-700/60 text-slate-700 dark:text-slate-300 font-bold shrink-0"><i class="fa-solid fa-money-bill-wave text-emerald-500"></i> Tunai: ${fRp(s.cashSales)}</span>` : ''}
                    ${s.qrisSales ? `<span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-xl bg-slate-100 dark:bg-slate-700/60 text-slate-700 dark:text-slate-300 font-bold shrink-0"><i class="fa-solid fa-qrcode text-indigo-500"></i> QRIS: ${fRp(s.qrisSales)}</span>` : ''}
                    ${s.bankSales ? `<span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-xl bg-slate-100 dark:bg-slate-700/60 text-slate-700 dark:text-slate-300 font-bold shrink-0"><i class="fa-solid fa-building-columns text-blue-500"></i> Transfer: ${fRp(s.bankSales)}</span>` : ''}
                    ${s.tempoSales ? `<span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-xl bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-300 font-bold shrink-0 border border-amber-200/60"><i class="fa-solid fa-clock text-amber-500"></i> Tempo: ${fRp(s.tempoSales)}</span>` : ''}
                </div>` : ''}

                ${s.closingNotes ? `
                <div class="text-xs text-slate-600 dark:text-slate-300 bg-slate-50 dark:bg-slate-900/60 p-3 rounded-2xl border border-slate-200/80 dark:border-slate-800 flex items-start gap-2.5">
                    <i class="fa-solid fa-comment-dots text-slate-400 mt-0.5 shrink-0"></i>
                    <div class="min-w-0">
                        <span class="font-bold text-slate-800 dark:text-slate-200">Catatan Kasir:</span> ${esc(s.closingNotes)}
                    </div>
                </div>` : ''}
            </div>`;
        }).join('');

        target.innerHTML = cards;
    } catch (err) {
        console.error('[POS Shift] Gagal memuat daftar shift admin:', err);
        target.innerHTML = `
        <div class="text-center py-10 text-rose-500 text-xs">
            <i class="fa-solid fa-triangle-exclamation text-2xl mb-1"></i>
            <p>Gagal memuat laporan shift: ${esc(err.message)}</p>
        </div>`;
    }
};

// ─── Hapus Riwayat Shift (Admin Only) ────────────────────────
const deleteShiftRecord = (shiftId, shiftNo) => {
    showConfirm(
        'Hapus Data Shift',
        `Hapus shift #${shiftNo}? Data akan dihapus permanen dari cloud dan tidak bisa dikembalikan.`,
        async () => {
            try {
                await db.collection('freshmart').doc('cms_data').collection('pos_shifts').doc(shiftId).delete();
                showToast('Data shift berhasil dihapus.', 'success');
                await loadAdminShiftReports();
            } catch (err) {
                console.error('[POS Shift] Gagal menghapus shift:', err);
                showToast('Gagal menghapus: ' + err.message, 'error');
            }
        },
        'Ya, Hapus',
        true
    );
};

// ─── Expose ke Global Window ─────────────────────────────────
window.getActiveShift             = getActiveShift;
window.saveActiveShift            = saveActiveShift;
window.clearActiveShift           = clearActiveShift;
window.getLastClosedShift         = getLastClosedShift;
window.isShiftActive              = isShiftActive;
window.getCurrentCashierIdentity  = getCurrentCashierIdentity;
window.isShiftOwnedByCashier      = isShiftOwnedByCashier;
window.findActiveShiftInCloud     = findActiveShiftInCloud;
window.syncActiveShiftFromCloud   = syncActiveShiftFromCloud;
window.listenActiveShiftCloud     = listenActiveShiftCloud;
window.detachActiveShiftListener  = detachActiveShiftListener;
window.openPOSOpenShiftModal      = openPOSOpenShiftModal;
window.closePOSOpenShiftModal     = closePOSOpenShiftModal;
window.posSetStartCashPreset      = posSetStartCashPreset;
window.posUpdateStartCashChips    = posUpdateStartCashChips;
window.confirmStartPOSShift       = confirmStartPOSShift;
window.recordTransactionToShift   = recordTransactionToShift;
window.recordTempoPaymentToShift  = recordTempoPaymentToShift;
window.openPOSShiftModal          = openShiftSummaryModal;
window.openPOSShiftSummaryModal   = openShiftSummaryModal;
window.closePOSShiftSummaryModal  = closePOSShiftSummaryModal;
window.openPOSCashMovementModal   = openPOSCashMovementModal;
window.closePOSCashMovementModal  = closePOSCashMovementModal;
window.setPOSCashMovementType     = setPOSCashMovementType;
window.posSetCashMovementPreset   = posSetCashMovementPreset;
window.confirmPOSCashMovement     = confirmPOSCashMovement;
window.getShiftExpectedCash       = getShiftExpectedCash;
window.recordCashMovementToShift  = recordCashMovementToShift;
window.openPOSCloseShiftModal     = openPOSCloseShiftModal;
window.closePOSCloseShiftModal    = closePOSCloseShiftModal;
window.setPOSCountMode            = setPOSCountMode;
window.calcPOSDenominations       = calcPOSDenominations;
window.updatePOSShiftDiscrepancy  = updatePOSShiftDiscrepancy;
window.confirmClosePOSShift       = confirmClosePOSShift;
window.printShiftSettlementReceipt= printShiftSettlementReceipt;
window.executeShiftPrintDirect    = executeShiftPrintDirect;
window.renderShiftHeaderBadge     = renderShiftHeaderBadge;
window.renderAdminShiftReportView = renderAdminShiftReportView;
window.loadAdminShiftReports      = loadAdminShiftReports;
window.deleteShiftRecord          = deleteShiftRecord;
