/**
 * ============================================================
 * MODUL ADMIN: MANAJEMEN AKUN KASIR
 * Ditampilkan di tab "Kasir" pada CMS Admin.
 * Admin dapat: melihat daftar kasir, menambah kasir baru,
 * mengaktif/nonaktifkan, dan menghapus akun kasir.
 * Data disimpan di: freshmart/cms_data/cashier_accounts
 * ============================================================
 */

import { auth, db, firebase } from '../../config/firebase.js';
import { el, setH, esc, showToast, showConfirm, sLoad, hLoad } from '../../core/utils.js';
import { renderAdminShiftReportView } from './pos-shift.js';

// ─── Render Daftar Kasir ─────────────────────────────────────
export const renderCashierAccounts = async () => {
    const content = el('admin-content');
    if (!content) return;

    setH('admin-content', `
    <div class="space-y-4 p-4 sm:p-6">
        <!-- Sub-Nav Tab Switcher -->
        <div class="flex items-center gap-1.5 p-1 bg-slate-100 dark:bg-slate-800 rounded-2xl w-full sm:w-fit overflow-x-auto hide-scrollbar border border-slate-200/80 dark:border-slate-700">
            <button id="tab-btn-cashier-accounts" onclick="window.switchCashierTab('accounts')" class="px-3.5 sm:px-4 py-2 rounded-xl text-xs font-black bg-white dark:bg-slate-700 text-[var(--color-primary)] dark:text-white shadow-xs transition-all flex items-center gap-2 cursor-pointer shrink-0 border border-[rgba(var(--color-primary-rgb),0.2)] dark:border-slate-600">
                <i class="fa-solid fa-users"></i>
                <span>Akun Kasir</span>
            </button>
            <button id="tab-btn-cashier-shifts" onclick="window.switchCashierTab('shifts')" class="px-3.5 sm:px-4 py-2 rounded-xl text-xs font-bold text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-white transition-all flex items-center gap-2 cursor-pointer shrink-0 border border-transparent">
                <i class="fa-solid fa-file-invoice-dollar"></i>
                <span>Laporan Shift <span class="hidden sm:inline">&amp; Rekap Kas (Z-Report)</span></span>
            </button>
        </div>

        <!-- Panel 1: Akun Kasir -->
        <div id="cashier-panel-accounts" class="space-y-4">
            <!-- Header -->
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                    <h2 class="text-base font-black text-slate-900 dark:text-white flex items-center gap-2">
                        <i class="fa-solid fa-users-gear text-[var(--color-primary)]"></i>
                        Manajemen Akun Kasir
                    </h2>
                    <p class="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                        Daftarkan dan kelola akun kasir toko Anda
                    </p>
                </div>
                <button onclick="window.openAddCashierModal()"
                    class="flex items-center gap-2 px-4 py-2.5 rounded-xl text-white text-xs font-bold shadow-md active:scale-95 transition-all cursor-pointer hover:opacity-95"
                    style="background:var(--color-primary)">
                    <i class="fa-solid fa-user-plus"></i>
                    Tambah Kasir Baru
                </button>
            </div>

            <!-- Info Banner -->
            <div class="p-3.5 rounded-2xl bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 flex gap-3">
                <i class="fa-solid fa-circle-info text-blue-500 text-sm shrink-0 mt-0.5"></i>
                <div class="text-xs text-blue-700 dark:text-blue-300 leading-relaxed">
                    <b>Panduan Akun Kasir:</b> Kasir login melalui icon <i class="fa-solid fa-cash-register"></i> di header toko (storefront), bukan di admin CMS.
                    Akun kasir yang dibuat di sini otomatis dapat login ke mode POS kasir dengan email &amp; password yang Anda daftarkan.
                </div>
            </div>

            <!-- List Kasir -->
            <div id="cashier-list-container">
                <div class="text-center py-16"><i class="fa-solid fa-spinner fa-spin text-3xl text-slate-300"></i></div>
            </div>
        </div>

        <!-- Panel 2: Laporan Shift Kasir -->
        <div id="cashier-panel-shifts" class="hidden"></div>
    </div>`);

    await loadCashierList();
};

export const switchCashierTab = (tab) => {
    const tabAccounts = el('tab-btn-cashier-accounts');
    const tabShifts   = el('tab-btn-cashier-shifts');
    const panelAccounts = el('cashier-panel-accounts');
    const panelShifts   = el('cashier-panel-shifts');

    if (tab === 'shifts') {
        if (tabAccounts) {
            tabAccounts.className = 'px-3.5 sm:px-4 py-2 rounded-xl text-xs font-bold text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-white transition-all cursor-pointer shrink-0 border border-transparent';
        }
        if (tabShifts) {
            tabShifts.className = 'px-3.5 sm:px-4 py-2 rounded-xl text-xs font-black bg-white dark:bg-slate-700 text-[var(--color-primary)] dark:text-white shadow-xs transition-all cursor-pointer shrink-0 border border-[rgba(var(--color-primary-rgb),0.2)] dark:border-slate-600';
        }
        if (panelAccounts) panelAccounts.classList.add('hidden');
        if (panelShifts) {
            panelShifts.classList.remove('hidden');
            renderAdminShiftReportView(panelShifts);
        }
    } else {
        if (tabAccounts) {
            tabAccounts.className = 'px-3.5 sm:px-4 py-2 rounded-xl text-xs font-black bg-white dark:bg-slate-700 text-[var(--color-primary)] dark:text-white shadow-xs transition-all cursor-pointer shrink-0 border border-[rgba(var(--color-primary-rgb),0.2)] dark:border-slate-600';
        }
        if (tabShifts) {
            tabShifts.className = 'px-3.5 sm:px-4 py-2 rounded-xl text-xs font-bold text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-white transition-all cursor-pointer shrink-0 border border-transparent';
        }
        if (panelAccounts) panelAccounts.classList.remove('hidden');
        if (panelShifts) panelShifts.classList.add('hidden');
    }
};

const loadCashierList = async () => {
    const container = el('cashier-list-container');
    if (!container) return;

    try {
        const snap = await db.collection('freshmart').doc('cms_data')
            .collection('cashier_accounts')
            .orderBy('createdAt', 'desc')
            .get();

        if (snap.empty) {
            try {
                localStorage.setItem('pos_has_cashier', 'false');
                await db.collection('freshmart').doc('cms_data').set({ hasCashier: false }, { merge: true });
            } catch (_) {}
            if (typeof window.updatePOSHeaderIcon === 'function') window.updatePOSHeaderIcon();
            container.innerHTML = `
            <div class="flex flex-col items-center justify-center py-16 text-slate-400 dark:text-slate-600">
                <i class="fa-solid fa-user-slash text-4xl mb-3"></i>
                <p class="font-bold text-sm">Belum ada akun kasir</p>
                <p class="text-xs mt-1 text-center">Klik "Tambah Kasir Baru" untuk mendaftarkan kasir pertama</p>
            </div>`;
            return;
        }

        const hasActive = snap.docs.some(doc => doc.data()?.isActive !== false);
        try {
            localStorage.setItem('pos_has_cashier', hasActive ? 'true' : 'false');
            await db.collection('freshmart').doc('cms_data').set({ hasCashier: hasActive }, { merge: true });
        } catch (_) {}
        if (typeof window.updatePOSHeaderIcon === 'function') window.updatePOSHeaderIcon();

        const listHtml = snap.docs.map(doc => {
            const d = doc.data();
            const uid = doc.id;
            const isActive = d.isActive !== false;
            const dateStr  = d.createdAt?.toDate ? d.createdAt.toDate().toLocaleDateString('id-ID') : '-';
            return `
            <div class="flex items-center gap-3 p-3.5 bg-white dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-xs hover:shadow-sm transition-all">
                <div class="w-10 h-10 rounded-xl flex items-center justify-center text-white font-black text-sm shrink-0"
                    style="background:${isActive ? 'var(--color-primary)' : '#94a3b8'}">
                    <i class="fa-solid fa-user-tie"></i>
                </div>
                <div class="flex-1 min-w-0">
                    <p class="text-sm font-bold text-slate-900 dark:text-white truncate">${esc(d.name || 'Kasir')}</p>
                    <p class="text-[11px] text-slate-400 truncate">${esc(d.email || '')}</p>
                    <div class="flex items-center gap-2 mt-0.5">
                        <span class="text-[9px] font-bold px-2 py-0.5 rounded-full ${isActive
                            ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400'
                            : 'bg-slate-100 text-slate-500 dark:bg-slate-700 dark:text-slate-400'}">
                            ${isActive ? '✅ Aktif' : '❌ Nonaktif'}
                        </span>
                        <span class="text-[9px] text-slate-400">Didaftarkan ${esc(dateStr)}</span>
                    </div>
                </div>
                <div class="flex items-center gap-1.5 shrink-0">
                    <button onclick="window.toggleCashierActive('${esc(uid)}', ${!isActive})"
                        title="${isActive ? 'Nonaktifkan' : 'Aktifkan'}"
                        class="w-8 h-8 rounded-xl flex items-center justify-center text-xs transition-all active:scale-90
                        ${isActive
                            ? 'bg-amber-50 text-amber-500 hover:bg-amber-500 hover:text-white dark:bg-amber-900/30'
                            : 'bg-emerald-50 text-emerald-500 hover:bg-emerald-500 hover:text-white dark:bg-emerald-900/30'}">
                        <i class="fa-solid ${isActive ? 'fa-ban' : 'fa-circle-check'}"></i>
                    </button>
                    <button onclick="window.openEditCashierModal('${esc(uid)}', '${esc(d.name || '')}', '${esc(d.email || '')}')"
                        title="Edit Kasir"
                        class="w-8 h-8 rounded-xl flex items-center justify-center text-xs bg-blue-50 text-blue-500 hover:bg-blue-500 hover:text-white transition-all active:scale-90 dark:bg-blue-900/30">
                        <i class="fa-solid fa-pen-to-square"></i>
                    </button>
                    <button onclick="window.deleteCashierAccount('${esc(uid)}', '${esc(d.name || 'Kasir')}')"
                        title="Hapus Kasir"
                        class="w-8 h-8 rounded-xl flex items-center justify-center text-xs bg-rose-50 text-rose-500 hover:bg-rose-500 hover:text-white transition-all active:scale-90 dark:bg-rose-900/30">
                        <i class="fa-solid fa-trash-can"></i>
                    </button>
                </div>
            </div>`;
        }).join('');

        container.innerHTML = `<div class="space-y-2.5">${listHtml}</div>
        <p class="text-center text-[10px] text-slate-400 mt-3">${snap.size} akun kasir terdaftar</p>`;

    } catch (err) {
        console.error('[CashierAdmin] Gagal memuat daftar kasir:', err);
        container.innerHTML = `<div class="text-center py-10 text-rose-500 text-sm"><i class="fa-solid fa-triangle-exclamation mr-2"></i>Gagal memuat data kasir</div>`;
    }
};

// ─── Modal Tambah Kasir ──────────────────────────────────────
export const openAddCashierModal = () => {
    document.body.insertAdjacentHTML('beforeend', `
    <div id="add-cashier-modal" class="fixed inset-0 z-[9990] flex items-center justify-center p-4 bg-slate-900/70 transition-all duration-300"
        onclick="if(event.target===this) window.closeAddCashierModal()">
        <div class="bg-white dark:bg-slate-900 rounded-3xl shadow-2xl w-full max-w-md flex flex-col overflow-hidden scale-95 transition-transform duration-300" id="add-cashier-modal-box">
            <div class="flex items-center justify-between p-5 border-b border-slate-100 dark:border-slate-800 shrink-0">
                <div class="flex items-center gap-2.5">
                    <div class="w-9 h-9 rounded-xl flex items-center justify-center text-white text-sm" style="background:var(--color-primary)">
                        <i class="fa-solid fa-user-plus"></i>
                    </div>
                    <div>
                        <h3 class="font-black text-sm text-slate-900 dark:text-white">Tambah Akun Kasir</h3>
                        <p class="text-[10px] text-slate-400">Buat akun login untuk kasir baru</p>
                    </div>
                </div>
                <button onclick="window.closeAddCashierModal()" class="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 flex items-center justify-center hover:bg-rose-50 hover:text-rose-500 transition-all active:scale-90">
                    <i class="fa-solid fa-xmark text-sm"></i>
                </button>
            </div>
            <div class="p-5 space-y-3.5">
                <div>
                    <label class="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1.5">Nama Kasir</label>
                    <input id="new-cashier-name" type="text" placeholder="Contoh: Budi Santoso"
                        class="w-full border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2.5 text-sm bg-white dark:bg-slate-800 focus:outline-none focus:border-[var(--color-primary)] text-slate-900 dark:text-white">
                </div>
                <div>
                    <label class="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1.5">Email Kasir</label>
                    <input id="new-cashier-email" type="email" placeholder="kasir1@toko.com"
                        class="w-full border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2.5 text-sm bg-white dark:bg-slate-800 focus:outline-none focus:border-[var(--color-primary)] text-slate-900 dark:text-white">
                </div>
                <div>
                    <label class="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1.5">Password</label>
                    <div class="relative">
                        <input id="new-cashier-pass" type="password" placeholder="Min. 6 karakter"
                            class="w-full border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2.5 text-sm bg-white dark:bg-slate-800 focus:outline-none focus:border-[var(--color-primary)] text-slate-900 dark:text-white pr-10">
                        <button type="button" onclick="window.toggleCashierPassVisibility('new-cashier-pass')"
                            class="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 text-xs">
                            <i class="fa-solid fa-eye" id="new-cashier-pass-eye"></i>
                        </button>
                    </div>
                </div>
                <div id="add-cashier-error" class="hidden text-xs text-rose-600 font-semibold p-2.5 bg-rose-50 dark:bg-rose-900/20 rounded-xl border border-rose-200 dark:border-rose-800"></div>
                <div class="p-3 rounded-xl bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 text-xs text-amber-700 dark:text-amber-400">
                    <i class="fa-solid fa-triangle-exclamation mr-1"></i>
                    Simpan email &amp; password ini. Kasir menggunakannya untuk login ke mode POS dari storefront toko.
                </div>
            </div>
            <div class="p-4 border-t border-slate-100 dark:border-slate-800 flex gap-3 shrink-0">
                <button onclick="window.closeAddCashierModal()"
                    class="flex-1 py-3 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 font-bold text-sm hover:bg-slate-50 transition-all">
                    Batal
                </button>
                <button onclick="window.saveCashierAccount()" id="save-cashier-btn"
                    class="flex-[2] py-3 rounded-xl text-white font-black text-sm shadow-lg active:scale-95 transition-all flex items-center justify-center gap-2"
                    style="background:var(--color-primary)">
                    <i class="fa-solid fa-floppy-disk"></i> Simpan & Daftarkan
                </button>
            </div>
        </div>
    </div>`);
    setTimeout(() => {
        const box = el('add-cashier-modal-box');
        if (box) box.classList.remove('scale-95');
        const nameInput = el('new-cashier-name');
        if (nameInput) nameInput.focus();
    }, 10);
};

export const closeAddCashierModal = () => {
    const modal = el('add-cashier-modal');
    if (modal) { modal.style.opacity = '0'; setTimeout(() => modal.remove(), 200); }
};

// ─── Simpan Akun Kasir Baru ──────────────────────────────────
export const saveCashierAccount = async () => {
    const name  = el('new-cashier-name')?.value?.trim() || '';
    const email = el('new-cashier-email')?.value?.trim() || '';
    const pass  = el('new-cashier-pass')?.value || '';
    const errEl = el('add-cashier-error');
    const btn   = el('save-cashier-btn');

    const showErr = (msg) => {
        if (errEl) { errEl.textContent = msg; errEl.classList.remove('hidden'); }
    };
    const clearErr = () => { if (errEl) errEl.classList.add('hidden'); };

    clearErr();
    if (!name) { showErr('Nama kasir wajib diisi.'); return; }
    if (!email || !email.includes('@')) { showErr('Email tidak valid.'); return; }
    if (pass.length < 6) { showErr('Password minimal 6 karakter.'); return; }

    if (btn) { btn.disabled = true; btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin mr-2"></i>Mendaftarkan...'; }
    sLoad('Membuat akun kasir...');

    try {
        // Buat akun Firebase Auth untuk kasir
        // Menggunakan Cloud Function atau Admin SDK seharusnya, namun karena tidak tersedia,
        // kita gunakan secondary Firebase app instance agar tidak menggeser auth admin
        const secondaryApp = firebase.apps.find(a => a.name === 'pos-cashier-creator') ||
            firebase.initializeApp(window.FIREBASE_CONFIG || firebase.app().options, 'pos-cashier-creator');
        const secondaryAuth = secondaryApp.auth();

        const cred = await secondaryAuth.createUserWithEmailAndPassword(email, pass);
        const uid  = cred.user?.uid;
        if (!uid) throw new Error('UID tidak diterima dari Firebase');

        // Sign out dari secondary app (agar tidak ada sesi ganda)
        await secondaryAuth.signOut();

        // Simpan data kasir ke Firestore
        await db.collection('freshmart').doc('cms_data').collection('cashier_accounts').doc(uid).set({
            uid,
            name,
            email,
            role: 'cashier',
            isActive: true,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            createdBy: auth.currentUser?.uid || 'admin'
        });

        try {
            localStorage.setItem('pos_has_cashier', 'true');
            await db.collection('freshmart').doc('cms_data').set({ hasCashier: true }, { merge: true });
        } catch (_) {}

        closeAddCashierModal();
        showToast(`Kasir "${name}" berhasil didaftarkan! ✅`, 'success');
        await loadCashierList();

        // Update icon kasir di storefront (jika ada)
        if (typeof window.updatePOSHeaderIcon === 'function') window.updatePOSHeaderIcon();
        else if (typeof window.initPOSAuth === 'function') window.initPOSAuth();

    } catch (err) {
        console.error('[CashierAdmin] Gagal membuat kasir:', err);
        const code = err.code || '';
        if (code === 'auth/email-already-in-use') {
            showErr('Email sudah digunakan oleh akun lain.');
        } else if (code === 'auth/invalid-email') {
            showErr('Format email tidak valid.');
        } else if (code === 'auth/weak-password') {
            showErr('Password terlalu lemah (min. 6 karakter).');
        } else {
            showErr('Gagal mendaftarkan: ' + (err.message || 'Error tidak diketahui'));
        }
        if (btn) { btn.disabled = false; btn.innerHTML = '<i class="fa-solid fa-floppy-disk mr-2"></i>Simpan & Daftarkan'; }
    } finally {
        hLoad();
    }
};

// ─── Modal Edit Kasir (Nama saja) ────────────────────────────
export const openEditCashierModal = (uid, currentName, currentEmail) => {
    document.body.insertAdjacentHTML('beforeend', `
    <div id="edit-cashier-modal" class="fixed inset-0 z-[9990] flex items-center justify-center p-4 bg-slate-900/70"
        onclick="if(event.target===this) window.closeEditCashierModal()">
        <div class="bg-white dark:bg-slate-900 rounded-3xl shadow-2xl w-full max-w-sm flex flex-col overflow-hidden scale-95 transition-transform duration-300" id="edit-cashier-modal-box">
            <div class="flex items-center justify-between p-5 border-b border-slate-100 dark:border-slate-800 shrink-0">
                <h3 class="font-black text-sm text-slate-900 dark:text-white flex items-center gap-2">
                    <i class="fa-solid fa-pen-to-square text-[var(--color-primary)]"></i> Edit Kasir
                </h3>
                <button onclick="window.closeEditCashierModal()" class="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 flex items-center justify-center hover:bg-rose-50 hover:text-rose-500 transition-all active:scale-90">
                    <i class="fa-solid fa-xmark text-sm"></i>
                </button>
            </div>
            <div class="p-5 space-y-3.5">
                <div>
                    <label class="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1.5">Nama Kasir</label>
                    <input id="edit-cashier-name" type="text" value="${esc(currentName)}"
                        class="w-full border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2.5 text-sm bg-white dark:bg-slate-800 focus:outline-none focus:border-[var(--color-primary)] text-slate-900 dark:text-white">
                </div>
                <div>
                    <label class="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1.5">Email (Tidak dapat diubah)</label>
                    <input type="email" value="${esc(currentEmail)}" disabled
                        class="w-full border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2.5 text-sm bg-slate-50 dark:bg-slate-800/50 text-slate-400 cursor-not-allowed">
                </div>
                <div id="edit-cashier-error" class="hidden text-xs text-rose-600 font-semibold p-2.5 bg-rose-50 rounded-xl border border-rose-200"></div>
            </div>
            <div class="p-4 border-t border-slate-100 dark:border-slate-800 flex gap-3 shrink-0">
                <button onclick="window.closeEditCashierModal()"
                    class="flex-1 py-3 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 font-bold text-sm hover:bg-slate-50 transition-all">
                    Batal
                </button>
                <button onclick="window.updateCashierName('${esc(uid)}')" id="update-cashier-btn"
                    class="flex-[2] py-3 rounded-xl text-white font-black text-sm shadow-lg active:scale-95 transition-all flex items-center justify-center gap-2"
                    style="background:var(--color-primary)">
                    <i class="fa-solid fa-floppy-disk"></i> Simpan Perubahan
                </button>
            </div>
        </div>
    </div>`);
    setTimeout(() => {
        const box = el('edit-cashier-modal-box');
        if (box) box.classList.remove('scale-95');
    }, 10);
};

export const closeEditCashierModal = () => {
    const modal = el('edit-cashier-modal');
    if (modal) { modal.style.opacity = '0'; setTimeout(() => modal.remove(), 200); }
};

export const updateCashierName = async (uid) => {
    const name  = el('edit-cashier-name')?.value?.trim() || '';
    const errEl = el('edit-cashier-error');
    const btn   = el('update-cashier-btn');
    if (!name) {
        if (errEl) { errEl.textContent = 'Nama tidak boleh kosong.'; errEl.classList.remove('hidden'); }
        return;
    }
    if (btn) { btn.disabled = true; btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin mr-2"></i>Menyimpan...'; }
    sLoad('Memperbarui...');
    try {
        await db.collection('freshmart').doc('cms_data').collection('cashier_accounts').doc(uid).update({ name });
        closeEditCashierModal();
        showToast('Nama kasir diperbarui!', 'success');
        await loadCashierList();
    } catch (err) {
        if (errEl) { errEl.textContent = 'Gagal memperbarui: ' + err.message; errEl.classList.remove('hidden'); }
        if (btn) { btn.disabled = false; btn.innerHTML = '<i class="fa-solid fa-floppy-disk mr-2"></i>Simpan Perubahan'; }
    } finally {
        hLoad();
    }
};

// ─── Toggle Aktif / Nonaktif ─────────────────────────────────
export const toggleCashierActive = async (uid, newStatus) => {
    sLoad(newStatus ? 'Mengaktifkan kasir...' : 'Menonaktifkan kasir...');
    try {
        await db.collection('freshmart').doc('cms_data').collection('cashier_accounts').doc(uid).update({
            isActive: newStatus
        });
        showToast(newStatus ? 'Kasir diaktifkan ✅' : 'Kasir dinonaktifkan ❌', 'success');
        await loadCashierList();
    } catch (err) {
        showToast('Gagal mengubah status kasir', 'error');
    } finally {
        hLoad();
    }
};

// ─── Hapus Akun Kasir ────────────────────────────────────────
export const deleteCashierAccount = (uid, name) => {
    showConfirm(
        'Hapus Akun Kasir',
        `Yakin hapus akun kasir "${name}"? Akun tidak dapat dipulihkan dan kasir tidak bisa login lagi.`,
        async () => {
            sLoad('Menghapus akun kasir...');
            try {
                // Hapus dari Firestore (Firebase Auth user harus dihapus via Cloud Function/Admin SDK)
                // Di sini kita hanya nonaktifkan + hapus doc Firestore
                await db.collection('freshmart').doc('cms_data').collection('cashier_accounts').doc(uid).delete();
                showToast(`Kasir "${name}" dihapus`, 'success');
                await loadCashierList();
            } catch (err) {
                showToast('Gagal menghapus kasir', 'error');
            } finally {
                hLoad();
            }
        },
        'Ya, Hapus',
        true
    );
};

// ─── Toggle Password Visibility ──────────────────────────────
export const toggleCashierPassVisibility = (inputId) => {
    const input = el(inputId);
    const eyeIcon = el(inputId + '-eye');
    if (!input) return;
    if (input.type === 'password') {
        input.type = 'text';
        if (eyeIcon) { eyeIcon.className = 'fa-solid fa-eye-slash'; }
    } else {
        input.type = 'password';
        if (eyeIcon) { eyeIcon.className = 'fa-solid fa-eye'; }
    }
};

// ─── Expose ke window ────────────────────────────────────────
window.renderCashierAccounts    = renderCashierAccounts;
window.switchCashierTab         = switchCashierTab;
window.openAddCashierModal      = openAddCashierModal;
window.closeAddCashierModal     = closeAddCashierModal;
window.saveCashierAccount       = saveCashierAccount;
window.openEditCashierModal     = openEditCashierModal;
window.closeEditCashierModal    = closeEditCashierModal;
window.updateCashierName        = updateCashierName;
window.toggleCashierActive      = toggleCashierActive;
window.deleteCashierAccount     = deleteCashierAccount;
window.toggleCashierPassVisibility = toggleCashierPassVisibility;
