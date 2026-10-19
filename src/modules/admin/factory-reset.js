/**
 * ============================================================
 * MODUL PUSAT RESET KE SETELAN AWAL & PEMBERSIHAN DATA TOKO (SYSTEM CLEAN SWEEP)
 * Toko Putri v1.18.8 — Managed Whitelabel & Single-Tenant SaaS
 *
 * Fitur Eksekutif Khusus Pemilik Toko (Owner) untuk membersihkan
 * data transaksi uji coba atau mereset total seluruh toko ke setelan
 * awal (fresh clean slate) dengan proteksi keamanan berlapis (Triple Guard).
 * ============================================================
 */

import { db } from '../../config/firebase.js';
import { appData, defApp } from '../../core/state.js';
import { el, esc, showToast, openModalAnim, closeModalAnim } from '../../core/utils.js';
import { isOwnerUser } from '../../core/auth-roles.js';
import { saveApp } from '../../services/storage.js';

// ─── STATE INTERNAL MODUL RESET ──────────────────────────────
export const RESET_MODES = {
    TRANSACTIONS: 'transactions', // Reset data transaksi, pesanan, shift & buku kas (Katalog Produk & Profil AMAN)
    FULL_FACTORY: 'full_factory'  // Reset total ke setelan awal (Semua bersih seperti baru, akun owner & lisensi tetap aktif)
};

let activeResetMode = RESET_MODES.TRANSACTIONS;
let isProcessingReset = false;
let isBackupDownloaded = false;
let isRiskUnderstood = false;
let confirmationPhraseInput = '';

export const TARGET_CONFIRM_PHRASE = 'RESET KE SETELAN AWAL';

/**
 * Pastikan elemen modal terpasang di DOM
 */
export const ensureFactoryResetModalDOM = () => {
    let m = el('modal-factory-reset');
    if (!m) {
        m = document.createElement('div');
        m.id = 'modal-factory-reset';
        m.className = 'fixed inset-0 z-[200] flex hidden items-end sm:items-center justify-center p-0 sm:p-4 bg-slate-950/85 opacity-0 transition-opacity duration-300';
        m.onclick = (e) => { if (e.target === m && !isProcessingReset) closeFactoryResetModal(); };
        m.innerHTML = `
            <div id="modal-factory-reset-box" class="modal-bottom-sheet relative flex max-h-[94dvh] sm:max-h-[90dvh] w-full max-w-full sm:max-w-2xl md:max-w-3xl translate-y-full sm:translate-y-10 transform flex-col overflow-hidden rounded-t-[2rem] sm:rounded-3xl border border-rose-300/80 dark:border-rose-900/60 bg-white dark:bg-[#0b1121] shadow-2xl transition-transform duration-300">
                <div id="modal-factory-reset-content" class="flex-1 flex flex-col overflow-hidden min-h-0"></div>
            </div>
        `;
        document.body.appendChild(m);
    }
};

/**
 * Buka modal konfigurasi Reset ke Setelan Awal
 * @param {'transactions'|'full_factory'} [mode='transactions']
 */
export const openFactoryResetModal = (mode = RESET_MODES.TRANSACTIONS) => {
    // 1. Guard Keamanan Tertinggi: HANYA OWNER YANG BOLEH
    if (!isOwnerUser()) {
        showToast('Akses Ditolak: Hanya Pemilik Toko (Owner) yang berwenang melakukan Reset ke Setelan Awal.', 'error');
        return;
    }

    ensureFactoryResetModalDOM();

    activeResetMode = mode === RESET_MODES.FULL_FACTORY ? RESET_MODES.FULL_FACTORY : RESET_MODES.TRANSACTIONS;
    isProcessingReset = false;
    isBackupDownloaded = false;
    isRiskUnderstood = false;
    confirmationPhraseInput = '';

    renderFactoryResetModalView();

    const m = el('modal-factory-reset');
    const b = el('modal-factory-reset-box');
    if (m && b) {
        openModalAnim(m, b);
        if (typeof window.pushModalHistory === 'function') {
            window.pushModalHistory('factoryReset');
        }
    }
};

/**
 * Tutup modal Reset ke Setelan Awal
 * @param {boolean} [skipHistory=false]
 */
export const closeFactoryResetModal = (skipHistory = false) => {
    if (isProcessingReset) {
        showToast('Proses pembersihan sedang berjalan, mohon tunggu...', 'warning');
        return;
    }

    const m = el('modal-factory-reset');
    const b = el('modal-factory-reset-box');
    if (!m) return;

    const executeClose = () => {
        closeModalAnim(m, b);
    };

    if (!skipHistory && typeof window.requestCloseModal === 'function') {
        window.requestCloseModal('factoryReset', false, executeClose);
    } else {
        executeClose();
    }
};

/**
 * Ganti opsi mode reset
 * @param {'transactions'|'full_factory'} mode
 */
export const setFactoryResetMode = (mode) => {
    if (isProcessingReset) return;
    activeResetMode = mode;
    renderFactoryResetModalView();
};

/**
 * Update status ketikan frasa konfirmasi
 * @param {string} val
 */
export const onFactoryResetPhraseInput = (val) => {
    confirmationPhraseInput = String(val || '').trim();
    checkResetButtonState();
};

/**
 * Update checkbox pemahaman risiko
 * @param {boolean} checked
 */
export const onFactoryResetRiskToggle = (checked) => {
    isRiskUnderstood = Boolean(checked);
    checkResetButtonState();
};

/**
 * Validasi apakah tombol eksekusi boleh aktif
 */
export const isResetExecutable = () => {
    const inputUpper = confirmationPhraseInput.toUpperCase();
    const isPhraseValid = inputUpper === TARGET_CONFIRM_PHRASE || inputUpper === 'RESET SETELAN AWAL' || inputUpper === 'RESET PABRIK';
    return isPhraseValid && isRiskUnderstood && !isProcessingReset;
};

const checkResetButtonState = () => {
    const btn = el('btn-execute-factory-reset');
    if (!btn) return;

    if (isResetExecutable()) {
        btn.disabled = false;
        btn.className = 'w-full sm:w-auto px-6 py-3 rounded-2xl bg-rose-600 hover:bg-rose-700 text-white font-black text-xs uppercase tracking-wider transition-all shadow-lg shadow-rose-600/30 active:scale-95 cursor-pointer flex items-center justify-center gap-2';
    } else {
        btn.disabled = true;
        btn.className = 'w-full sm:w-auto px-6 py-3 rounded-2xl bg-slate-200 dark:bg-slate-800 text-slate-400 dark:text-slate-600 font-black text-xs uppercase tracking-wider transition-all cursor-not-allowed flex items-center justify-center gap-2 border border-slate-300/60 dark:border-slate-700/60';
    }
};

/**
 * Render antarmuka Bento Modal Reset ke Setelan Awal
 */
export const renderFactoryResetModalView = () => {
    const container = el('modal-factory-reset-content');
    if (!container) return;

    const isFull = activeResetMode === RESET_MODES.FULL_FACTORY;

    container.innerHTML = `
        <!-- Header Modal Peringatan Bahaya -->
        <div class="p-5 sm:p-6 border-b border-rose-100 dark:border-rose-950/80 bg-rose-50/70 dark:bg-rose-950/30 flex items-center justify-between shrink-0">
            <div class="flex items-center gap-3.5">
                <div class="w-11 h-11 rounded-2xl bg-rose-500 text-white flex items-center justify-center text-xl shadow-md shadow-rose-500/30 shrink-0">
                    <i class="fa-solid fa-triangle-exclamation animate-pulse"></i>
                </div>
                <div>
                    <div class="flex items-center gap-2">
                        <h3 class="font-black text-base sm:text-lg text-slate-900 dark:text-white leading-tight">
                            Pusat Reset ke Setelan Awal &amp; Pembersihan Toko
                        </h3>
                        <span class="px-2 py-0.5 rounded-full text-[9px] font-black uppercase tracking-wider bg-rose-200 dark:bg-rose-900 text-rose-800 dark:text-rose-200">Zona Bahaya</span>
                    </div>
                    <p class="text-xs font-semibold text-slate-500 dark:text-slate-400 mt-0.5">
                        Kembalikan sistem ke setelan awal yang bersih dan segar dengan perlindungan cadangan darurat.
                    </p>
                </div>
            </div>
            <button type="button" onclick="window.closeFactoryResetModal()" class="w-8 h-8 rounded-xl bg-white dark:bg-slate-800 text-slate-400 hover:text-slate-700 dark:hover:text-white flex items-center justify-center text-sm cursor-pointer transition-colors shadow-2xs border border-slate-200 dark:border-slate-700">
                <i class="fa-solid fa-xmark"></i>
            </button>
        </div>

        <!-- Scrollable Modal Body -->
        <div class="p-5 sm:p-6 overflow-y-auto space-y-5 flex-1 custom-scrollbar">

            <!-- 1. Pemilihan Mode Reset (2 Bento Cards) -->
            <div>
                <label class="block text-xs font-black uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-2.5">
                    1. Pilih Lingkup Pembersihan Data
                </label>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    
                    <!-- Opsi A: Reset Transaksi & Data Uji Coba (Disarankan) -->
                    <div onclick="window.setFactoryResetMode('${RESET_MODES.TRANSACTIONS}')"
                        class="p-4 rounded-2xl border-2 transition-all cursor-pointer relative overflow-hidden flex flex-col justify-between ${!isFull ? 'border-emerald-500 bg-emerald-50/40 dark:bg-emerald-950/20 shadow-sm' : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-slate-300'}">
                        <div>
                            <div class="flex items-center justify-between mb-2">
                                <span class="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-emerald-500 text-white shadow-2xs">Sangat Disarankan</span>
                                <input type="radio" name="reset_mode" ${!isFull ? 'checked' : ''} class="w-4 h-4 accent-emerald-600 cursor-pointer">
                            </div>
                            <h4 class="font-extrabold text-sm text-slate-900 dark:text-white flex items-center gap-1.5">
                                <i class="fa-solid fa-receipt text-emerald-600 dark:text-emerald-400"></i>
                                Bersihkan Transaksi Saja
                            </h4>
                            <p class="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                                Menghapus seluruh riwayat pesanan, struk kasir, shift kasir, dan pengeluaran dummy hasil uji coba.
                            </p>
                        </div>
                        <div class="mt-3 pt-2.5 border-t border-slate-200/60 dark:border-slate-800 text-[11px] font-bold text-emerald-700 dark:text-emerald-300 flex items-center gap-1.5">
                            <i class="fa-solid fa-shield-check"></i>
                            <span>Katalog Produk, Stok &amp; Supplier AMAN</span>
                        </div>
                    </div>

                    <!-- Opsi B: Reset Total ke Setelan Awal (Full Clean Slate) -->
                    <div onclick="window.setFactoryResetMode('${RESET_MODES.FULL_FACTORY}')"
                        class="p-4 rounded-2xl border-2 transition-all cursor-pointer relative overflow-hidden flex flex-col justify-between ${isFull ? 'border-rose-500 bg-rose-50/40 dark:bg-rose-950/20 shadow-sm' : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-slate-300'}">
                        <div>
                            <div class="flex items-center justify-between mb-2">
                                <span class="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-rose-500 text-white shadow-2xs">Reset Total</span>
                                <input type="radio" name="reset_mode" ${isFull ? 'checked' : ''} class="w-4 h-4 accent-rose-600 cursor-pointer">
                            </div>
                            <h4 class="font-extrabold text-sm text-slate-900 dark:text-white flex items-center gap-1.5">
                                <i class="fa-solid fa-rotate-left text-rose-600 dark:text-rose-400"></i>
                                Reset Total ke Setelan Awal
                            </h4>
                            <p class="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                                Mengosongkan SEMUA transaksi + SEMUA produk + kategori + banner. Toko kembali bersih ke setelan awal 100%.
                            </p>
                        </div>
                        <div class="mt-3 pt-2.5 border-t border-slate-200/60 dark:border-slate-800 text-[11px] font-bold text-slate-600 dark:text-slate-400 flex items-center gap-1.5">
                            <i class="fa-solid fa-key"></i>
                            <span>Akun Login Owner &amp; Lisensi Tetap Aktif</span>
                        </div>
                    </div>

                </div>
            </div>

            <!-- 2. Rincian Objek yang Dihapus vs Disimpan -->
            <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/90 dark:border-slate-700/80 text-xs">
                <div class="font-bold text-slate-700 dark:text-slate-300 mb-2 flex items-center gap-2">
                    <i class="fa-solid fa-list-check text-slate-400"></i>
                    <span>Rincian Tindakan Pembersihan (${!isFull ? 'Mode Transaksi Saja' : 'Mode Reset Total'}):</span>
                </div>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[11.5px]">
                    <div class="space-y-1.5">
                        <span class="font-bold text-rose-600 dark:text-rose-400 flex items-center gap-1">
                            <i class="fa-solid fa-circle-xmark"></i> Akan Dihapus Bersih:
                        </span>
                        <ul class="space-y-1 text-slate-600 dark:text-slate-400 pl-4 list-disc">
                            <li>Semua Pesanan Penjualan Online &amp; POS Kasir</li>
                            <li>Semua Riwayat Buka/Tutup Shift Kasir &amp; Kas Laci</li>
                            <li>Buku Kas Pengeluaran Harian Toko</li>
                            <li>Riwayat Retur Penjualan (RMA) &amp; Piutang Tempo</li>
                            <li>Riwayat Audit Fisik (Stock Opname)</li>
                            ${isFull ? `
                            <li class="font-bold text-rose-700 dark:text-rose-300">Semua Master Produk, Varian &amp; Stok Barang</li>
                            <li class="font-bold text-rose-700 dark:text-rose-300">Kategori, Brand, Banner Promo &amp; Voucher</li>
                            <li class="font-bold text-rose-700 dark:text-rose-300">Database Member Pelanggan &amp; Supplier</li>
                            ` : ''}
                        </ul>
                    </div>
                    <div class="space-y-1.5">
                        <span class="font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                            <i class="fa-solid fa-circle-check"></i> Tetap Aman &amp; Tidak Dihapus:
                        </span>
                        <ul class="space-y-1 text-slate-600 dark:text-slate-400 pl-4 list-disc">
                            <li>Akun Login Pemilik Toko (Owner) &amp; Password</li>
                            <li>Kunci Lisensi Resmi Toko Putri (Masa Aktif Terjaga)</li>
                            ${!isFull ? `
                            <li class="font-bold text-emerald-700 dark:text-emerald-300">Seluruh Produk, Foto, Harga &amp; Stok Gudang/Rak</li>
                            <li class="font-bold text-emerald-700 dark:text-emerald-300">Kategori, Brand, Supplier &amp; Pengaturan Toko</li>
                            <li class="font-bold text-emerald-700 dark:text-emerald-300">Profil Toko, Logo, Rekening Bank &amp; QRIS</li>
                            ` : `
                            <li>Konfigurasi Infrastruktur Server Firebase</li>
                            `}
                        </ul>
                    </div>
                </div>
            </div>

            <!-- 3. Cadangan Darurat Otomatis (Safety Net) -->
            <div class="p-4 rounded-2xl border ${isBackupDownloaded ? 'bg-emerald-50/50 dark:bg-emerald-950/20 border-emerald-300 dark:border-emerald-800' : 'bg-amber-50/60 dark:bg-amber-950/20 border-amber-300 dark:border-amber-800'} flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div class="flex items-center gap-3">
                    <div class="w-9 h-9 rounded-xl ${isBackupDownloaded ? 'bg-emerald-500 text-white' : 'bg-amber-500 text-white'} flex items-center justify-center text-base shrink-0 shadow-xs">
                        <i class="fa-solid ${isBackupDownloaded ? 'fa-check' : 'fa-cloud-arrow-down'}"></i>
                    </div>
                    <div>
                        <h5 class="font-extrabold text-xs text-slate-900 dark:text-white">
                            ${isBackupDownloaded ? 'Cadangan Darurat Telah Tersimpan di Perangkat' : 'Perisai Cadangan Darurat (Safety Snapshot)'}
                        </h5>
                        <p class="text-[11px] text-slate-500 dark:text-slate-400">
                            ${isBackupDownloaded ? 'File cadangan JSON siap dipakai jika sewaktu-waktu ingin memulihkan data.' : 'Sistem otomatis mengunduh file cadangan lengkap (.json) sebelum pembersihan.'}
                        </p>
                    </div>
                </div>
                <button type="button" onclick="window.downloadEmergencyBackupManual()" class="px-3.5 py-1.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-50 text-slate-700 dark:text-slate-200 text-xs font-bold transition-all shadow-2xs whitespace-nowrap active:scale-95 cursor-pointer">
                    <i class="fa-solid fa-download mr-1 text-slate-400"></i> Unduh Manual
                </button>
            </div>

            <!-- 4. Konfirmasi Ganda (Anti Salah Tekan) -->
            <div class="space-y-3 pt-2 border-t border-slate-200/80 dark:border-slate-800">
                <label class="block text-xs font-black uppercase tracking-wider text-rose-600 dark:text-rose-400">
                    2. Konfirmasi Keamanan (Wajib)
                </label>

                <!-- Checkbox Pemahaman Risiko -->
                <label class="flex items-start gap-2.5 p-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 cursor-pointer hover:border-rose-400 transition-colors">
                    <input type="checkbox" id="chk-reset-risk" onchange="window.onFactoryResetRiskToggle(this.checked)" class="w-4 h-4 mt-0.5 rounded accent-rose-600 cursor-pointer">
                    <span class="text-xs font-bold text-slate-700 dark:text-slate-300 select-none">
                        Saya memahami bahwa tindakan pembersihan data ini bersifat permanen dan tidak dapat dibatalkan di cloud.
                    </span>
                </label>

                <!-- Kolom Ketik Frasa Rahasia -->
                <div>
                    <label class="block text-xs font-bold text-slate-600 dark:text-slate-400 mb-1.5">
                        Ketik kata <span class="font-black text-rose-600 dark:text-rose-400 px-1.5 py-0.5 rounded bg-rose-100 dark:bg-rose-950/60 font-mono">RESET KE SETELAN AWAL</span> di bawah ini untuk membuka kunci:
                    </label>
                    <input type="text" id="input-reset-phrase" autocomplete="off" spellcheck="false"
                        placeholder="Ketik RESET KE SETELAN AWAL"
                        value="${esc(confirmationPhraseInput)}"
                        oninput="window.onFactoryResetPhraseInput(this.value)"
                        class="w-full h-11 px-4 rounded-xl border-2 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm font-black tracking-wider text-slate-800 dark:text-white uppercase focus:outline-none focus:border-rose-500 placeholder:normal-case placeholder:font-normal placeholder:tracking-normal">
                </div>
            </div>

        </div>

        <!-- Footer Modal Aksi -->
        <div class="p-4 sm:p-5 border-t border-slate-100 dark:border-slate-800/80 bg-slate-50/80 dark:bg-[#0b1121]/90 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0" style="padding-bottom: max(1rem, env(safe-area-inset-bottom));">
            <button type="button" onclick="window.closeFactoryResetModal()" class="w-full sm:w-auto px-5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 text-xs font-bold hover:bg-slate-100 dark:hover:bg-slate-700 transition-all cursor-pointer shadow-2xs">
                Batal (Aman)
            </button>
            <button type="button" id="btn-execute-factory-reset" disabled onclick="window.executeFactoryResetAction()"
                class="w-full sm:w-auto px-6 py-3 rounded-2xl bg-slate-200 dark:bg-slate-800 text-slate-400 dark:text-slate-600 font-black text-xs uppercase tracking-wider transition-all cursor-not-allowed flex items-center justify-center gap-2 border border-slate-300/60 dark:border-slate-700/60">
                <i class="fa-solid fa-trash-can"></i>
                <span>Eksekusi Pembersihan Data</span>
            </button>
        </div>
    `;

    checkResetButtonState();
};

/**
 * Unduh berkas cadangan darurat komprehensif (.json)
 */
export const exportEmergencySafetyBackup = async () => {
    try {
        const [ordersSnap, customersSnap, cashiersSnap, shiftsSnap, reviewsSnap] = await Promise.all([
            db.collection("freshmart_orders").get().catch(() => ({ docs: [] })),
            db.collection("freshmart").doc("cms_data").collection("customers").get().catch(() => ({ docs: [] })),
            db.collection("freshmart").doc("cms_data").collection("cashier_accounts").get().catch(() => ({ docs: [] })),
            db.collection("freshmart").doc("cms_data").collection("pos_shifts").get().catch(() => ({ docs: [] })),
            db.collection("freshmart").doc("cms_data").collection("reviews").get().catch(() => ({ docs: [] }))
        ]);

        const ordersList    = ordersSnap.docs.map(d => ({ _id: d.id, ...d.data() }));
        const customersList = customersSnap.docs.map(d => ({ _id: d.id, ...d.data() }));
        const cashiersList  = cashiersSnap.docs.map(d => ({ _id: d.id, ...d.data() }));
        const shiftsList    = shiftsSnap.docs.map(d => ({ _id: d.id, ...d.data() }));
        const reviewsList   = reviewsSnap.docs.map(d => ({ _id: d.id, ...d.data() }));

        const now = new Date();
        const dateStr = now.toISOString().slice(0, 10);
        const timeStr = `${String(now.getHours()).padStart(2, '0')}-${String(now.getMinutes()).padStart(2, '0')}`;

        const payload = {
            _meta: {
                appName: "Toko Putri Super App",
                backupType: "emergency_pre_reset_snapshot",
                createdAt: now.toISOString(),
                exportedBy: "Owner Emergency Guard",
                resetModeTarget: activeResetMode
            },
            appData: JSON.parse(JSON.stringify(appData)),
            orders: ordersList,
            customers: customersList,
            cashiers: cashiersList,
            shifts: shiftsList,
            reviews: reviewsList
        };

        const jsonStr = JSON.stringify(payload, null, 2);
        const fileName = `backup_darurat_sebelum_reset_${appData.subscription?.storeCode || 'TOKO'}_${dateStr}_${timeStr}.json`;

        if (window.AndroidNativeApp && typeof window.AndroidNativeApp.saveOrShareFile === 'function') {
            const base64Str = btoa(unescape(encodeURIComponent(jsonStr)));
            window.AndroidNativeApp.saveOrShareFile(base64Str, fileName, 'application/json');
        } else {
            const blob = new Blob([jsonStr], { type: 'application/json;charset=utf-8;' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = fileName;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            setTimeout(() => URL.revokeObjectURL(url), 2000);
        }

        isBackupDownloaded = true;
        return true;
    } catch (err) {
        console.error('[FactoryReset] Gagal membuat cadangan darurat:', err);
        return false;
    }
};

/**
 * Unduh manual cadangan darurat dari tombol modal
 */
export const downloadEmergencyBackupManual = async () => {
    showToast('Menyiapkan berkas cadangan darurat...', 'info');
    const ok = await exportEmergencySafetyBackup();
    if (ok) {
        showToast('Berkas cadangan darurat berhasil diunduh!', 'success');
        renderFactoryResetModalView();
    } else {
        showToast('Gagal mengunduh cadangan darurat!', 'error');
    }
};

/**
 * Helper hapus dokumen koleksi dengan batch Firestore
 * @param {firebase.firestore.Query} queryRef
 */
const batchDeleteCollection = async (queryRef) => {
    try {
        const snap = await queryRef.get();
        if (snap.empty) return 0;

        let batch = db.batch();
        let counter = 0;
        let totalDeleted = 0;

        for (const doc of snap.docs) {
            batch.delete(doc.ref);
            counter++;
            totalDeleted++;

            if (counter === 400) {
                await batch.commit();
                batch = db.batch();
                counter = 0;
            }
        }

        if (counter > 0) {
            await batch.commit();
        }

        return totalDeleted;
    } catch (err) {
        console.warn('[FactoryReset] Gagal batch delete:', err);
        return 0;
    }
};

/**
 * Eksekusi Pembersihan Data Toko (Factory Reset)
 */
export const executeFactoryResetAction = async () => {
    if (!isResetExecutable()) {
        showToast('Harap centang persetujuan dan ketik frasa konfirmasi dengan benar.', 'warning');
        return;
    }

    if (!isOwnerUser()) {
        showToast('Akses ditolak: Hanya Pemilik Toko yang berwenang.', 'error');
        return;
    }

    isProcessingReset = true;
    checkResetButtonState();

    // 1. Ekspor cadangan darurat otomatis jika belum diunduh
    if (!isBackupDownloaded) {
        showToast('Mengunduh cadangan darurat otomatis...', 'info');
        await exportEmergencySafetyBackup();
    }

    const isFull = activeResetMode === RESET_MODES.FULL_FACTORY;

    // Tampilkan modal loading progress
    const container = el('modal-factory-reset-content');
    if (container) {
        container.innerHTML = `
            <div class="p-8 sm:p-12 flex flex-col items-center justify-center text-center space-y-4">
                <div class="w-16 h-16 rounded-3xl bg-rose-100 dark:bg-rose-950/60 border border-rose-300 dark:border-rose-800 text-rose-600 dark:text-rose-400 flex items-center justify-center text-2xl animate-spin">
                    <i class="fa-solid fa-spinner"></i>
                </div>
                <h3 class="text-lg font-black text-slate-900 dark:text-white" id="reset-progress-title">
                    Sedang Membersihkan Data Toko...
                </h3>
                <p class="text-xs font-semibold text-slate-500 dark:text-slate-400 max-w-sm" id="reset-progress-desc">
                    Mohon jangan menutup jendela browser Anda. Sistem sedang menghapus data dari database cloud.
                </p>
                <div class="w-full max-w-xs h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden mt-4">
                    <div id="reset-progress-bar" class="h-full bg-rose-500 transition-all duration-300 w-1/4"></div>
                </div>
            </div>
        `;
    }

    const setProgress = (percent, title, desc) => {
        const bar = el('reset-progress-bar');
        const tit = el('reset-progress-title');
        const des = el('reset-progress-desc');
        if (bar) bar.style.width = `${percent}%`;
        if (tit) tit.textContent = title;
        if (des) des.textContent = desc;
    };

    try {
        // TAHAP 1: Membersihkan Pesanan & Transaksi Penjualan
        setProgress(25, 'Membersihkan Pesanan Penjualan...', 'Menghapus dokumen di koleksi pesanan cloud.');
        await Promise.all([
            batchDeleteCollection(db.collection("freshmart_orders")),
            batchDeleteCollection(db.collection("freshmart").doc("cms_data").collection("pos_transactions")),
            batchDeleteCollection(db.collection("freshmart").doc("cms_data").collection("orders")),
            batchDeleteCollection(db.collection("tempo_payment_confirmations"))
        ]);

        // TAHAP 2: Membersihkan Shift Kasir & Pergerakan Uang Kas
        setProgress(50, 'Membersihkan Shift Kasir...', 'Mengosongkan riwayat shift kasir dan buku kas laci.');
        await Promise.all([
            batchDeleteCollection(db.collection("freshmart").doc("cms_data").collection("pos_shifts")),
            batchDeleteCollection(db.collection("pos_shifts"))
        ]);

        // TAHAP 3: Membersihkan Buku Kas Sensitif (Expenses, Retur, Opname) di cms_private
        setProgress(70, 'Membersihkan Pengeluaran & Retur...', 'Mereset pembukuan kas biaya operasional toko.');
        appData.expenses = [];
        appData.stockOpnameHistory = [];
        appData.salesReturns = [];
        appData.vendorReturns = [];
        appData.purchases = [];

        // Reset total penjualan produk & varian
        if (Array.isArray(appData.products)) {
            appData.products.forEach(p => {
                if (p) {
                    p.totalSold = 0;
                    if (Array.isArray(p.variants)) {
                        p.variants.forEach(v => { if (v) v.totalSold = 0; });
                    }
                }
            });
        }

        // TAHAP 4 (KHUSUS FULL FACTORY RESET): Bersihkan Produk, Kategori, Banner, Member
        if (isFull) {
            setProgress(85, 'Membersihkan Katalog & Master Data...', 'Menghapus master produk, kategori, dan profil.');
            await Promise.all([
                batchDeleteCollection(db.collection("freshmart").doc("cms_data").collection("products")),
                batchDeleteCollection(db.collection("freshmart").doc("cms_data").collection("customers")),
                batchDeleteCollection(db.collection("freshmart").doc("cms_data").collection("reviews")),
                batchDeleteCollection(db.collection("freshmart").doc("cms_data").collection("faqs")),
                batchDeleteCollection(db.collection("freshmart").doc("cms_data").collection("rewards"))
            ]);

            appData.products = [];
            appData.categories = [];
            appData.brands = [];
            appData.colors = [];
            appData.suppliers = [];
            appData.vouchers = [];
            appData.banners = [];
            appData.flashSales = [];
            appData.rewards = [];
            appData.reviews = [];
            appData.faqs = [];
            appData.customers = [];

            // Reset profil toko ke default template tapi pertahankan nama dan kode toko
            const currentStoreCode = appData.subscription?.storeCode || 'PUTRI';
            const currentStoreName = appData.store?.name || 'Toko Putri';
            appData.store = JSON.parse(JSON.stringify(defApp.store));
            appData.store.name = currentStoreName;
        }

        // TAHAP 5: Simpan State Bersih ke Firestore
        setProgress(95, 'Menyimpan State Bersih...', 'Memperbarui database cloud ke kondisi segar.');
        await saveApp();

        // Bersihkan data lokal perangkat
        try {
            localStorage.removeItem('freshmart_cart');
            localStorage.removeItem('freshmart_my_orders');
            localStorage.removeItem('freshmart_wishlist');
            localStorage.removeItem('pos_held_carts');
            localStorage.removeItem('freshmart_pos_offline_tx_queue');
            sessionStorage.removeItem('pos_cashier_session');
        } catch (_) {}

        setProgress(100, 'Pembersihan Selesai!', 'Sistem kini bersih dan segar kembali.');

        showToast('Sistem toko berhasil direset ke setelan awal!', 'success');

        setTimeout(() => {
            closeFactoryResetModal(true);
            window.location.reload();
        }, 1200);

    } catch (err) {
        console.error('[FactoryReset] Gagal mengeksekusi reset:', err);
        showToast('Terjadi kesalahan saat pembersihan: ' + err.message, 'error');
        renderFactoryResetModalView();
    } finally {
        isProcessingReset = false;
    }
};

// ─── WINDOW EXPOSURES UNTUK INTERAKSI HTML ──────────────────
if (typeof window !== 'undefined') {
    window.openFactoryResetModal         = openFactoryResetModal;
    window.closeFactoryResetModal        = closeFactoryResetModal;
    window.setFactoryResetMode           = setFactoryResetMode;
    window.onFactoryResetPhraseInput     = onFactoryResetPhraseInput;
    window.onFactoryResetRiskToggle      = onFactoryResetRiskToggle;
    window.downloadEmergencyBackupManual = downloadEmergencyBackupManual;
    window.executeFactoryResetAction     = executeFactoryResetAction;
}
