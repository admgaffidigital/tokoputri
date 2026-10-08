/**
 * ============================================================
 * MODUL LISENSI & GUARD LANGGANAN (MANAGED WHITELABEL ENGINE)
 * Menjaga keberlangsungan model bisnis Managed Service / SaaS:
 * - Memeriksa masa aktif toko (expiresAt) & masa tenggang (grace period)
 * - Menampilkan peringatan H-7 pra-jatuh tempo di CMS Owner
 * - Mengunci aplikasi dengan elegan (Graceful Lockout) jika masa sewa habis
 * - Memvalidasi Kunci Lisensi Perpanjangan (Renewal License Key)
 * ============================================================
 */

import { appData, defApp } from './state.js';
import { el, show, hide, showToast, esc, fCur } from './utils.js';
import { db } from '../config/firebase.js';
import { pushModalHistory, requestCloseModal } from './router.js';

// Secret SALT untuk enkripsi/verifikasi kunci lisensi developer
const LICENSE_SECRET_SALT = 'TP_GAFFI_WHITELABEL_2026';

export const DEFAULT_SUBSCRIPTION = {
    status: 'active',           // 'active' | 'grace_period' | 'expired'
    plan: 'pro_managed',        // 'pro_managed' | 'trial' | 'enterprise'
    expiresAt: null,            // null = perpetual / tidak ada batas waktu (development)
    allowGraceDays: 7,          // 7 hari toleransi setelah jatuh tempo sebelum aplikasi dikunci
    storeCode: 'PUTRI',         // Kode pengenal toko untuk validasi lisensi
    clientName: 'Pemilik Toko', // Nama pemilik / klien toko
    developerContact: '6281234567890', // WhatsApp developer pengelola
    developerName: 'Developer / Technical Partner'
};

/**
 * Normalisasi dan evaluasi status langganan saat ini
 */
export const getSubscriptionInfo = (subData = null) => {
    const s = subData || appData.subscription || (appData.store && appData.store.subscription) || DEFAULT_SUBSCRIPTION;
    
    const allowGraceDays = typeof s.allowGraceDays === 'number' ? s.allowGraceDays : 7;
    const devContact = s.developerContact || appData.config?.developerContact || DEFAULT_SUBSCRIPTION.developerContact;
    const devName = s.developerName || appData.config?.developerName || DEFAULT_SUBSCRIPTION.developerName;
    const storeCode = s.storeCode || appData.store?.code || 'PUTRI';
    const plan = s.plan || 'pro_managed';

    // Jika expiresAt kosong atau null, anggap toko aktif seumur hidup / mode dev
    if (!s.expiresAt) {
        return {
            status: 'active',
            isPerpetual: true,
            isLocked: false,
            isExpiringSoon: false,
            isGrace: false,
            daysLeft: 9999,
            expiryDateFormatted: 'Seumur Hidup (Tanpa Batas)',
            devContact,
            devName,
            storeCode,
            plan
        };
    }

    let expiryMillis = 0;
    if (typeof s.expiresAt === 'number') {
        expiryMillis = s.expiresAt;
    } else if (typeof s.expiresAt === 'string') {
        expiryMillis = new Date(s.expiresAt).getTime() || 0;
    } else if (s.expiresAt && typeof s.expiresAt.toDate === 'function') {
        expiryMillis = s.expiresAt.toDate().getTime();
    } else if (s.expiresAt && s.expiresAt.seconds) {
        expiryMillis = s.expiresAt.seconds * 1000;
    }

    if (!expiryMillis || isNaN(expiryMillis)) {
        return {
            status: 'active',
            isPerpetual: true,
            isLocked: false,
            isExpiringSoon: false,
            isGrace: false,
            daysLeft: 9999,
            expiryDateFormatted: 'Aktif',
            devContact,
            devName,
            storeCode,
            plan
        };
    }

    const now = Date.now();
    const expiryDateObj = new Date(expiryMillis);
    const expiryDateFormatted = expiryDateObj.toLocaleDateString('id-ID', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });

    const diffMillis = expiryMillis - now;
    const diffDays = Math.ceil(diffMillis / (1000 * 60 * 60 * 24));
    const graceMillis = allowGraceDays * 24 * 60 * 60 * 1000;

    // 1. Masih Aktif Normal
    if (now <= expiryMillis) {
        const isExpiringSoon = diffDays <= 7;
        return {
            status: isExpiringSoon ? 'expiring_soon' : 'active',
            isPerpetual: false,
            isLocked: false,
            isExpiringSoon,
            isGrace: false,
            daysLeft: Math.max(0, diffDays),
            expiryDateFormatted,
            devContact,
            devName,
            storeCode,
            plan
        };
    }

    // 2. Dalam Masa Tenggang (Grace Period)
    if (now <= (expiryMillis + graceMillis)) {
        const graceEndMillis = expiryMillis + graceMillis;
        const graceDaysLeft = Math.max(1, Math.ceil((graceEndMillis - now) / (1000 * 60 * 60 * 24)));
        return {
            status: 'grace_period',
            isPerpetual: false,
            isLocked: false,
            isExpiringSoon: true,
            isGrace: true,
            graceDaysLeft,
            daysLeft: 0,
            expiryDateFormatted,
            devContact,
            devName,
            storeCode,
            plan
        };
    }

    // 3. Kedaluwarsa & Melewati Masa Tenggang (Locked Out)
    return {
        status: 'expired',
        isPerpetual: false,
        isLocked: true,
        isExpiringSoon: false,
        isGrace: false,
        daysLeft: 0,
        expiryDateFormatted,
        devContact,
        devName,
        storeCode,
        plan
    };
};

/**
 * Pasang Banner Peringatan di CMS Owner jika mendekati jatuh tempo
 */
export const renderSubscriptionNoticeInCMS = () => {
    const info = getSubscriptionInfo();
    const container = el('cms-subscription-notice-slot');
    if (!container) return;

    if (!info.isExpiringSoon && !info.isGrace && !info.isLocked) {
        container.innerHTML = '';
        container.classList.add('hidden');
        return;
    }

    const cleanWa = (info.devContact || '').replace(/\D/g, '');
    const storeName = appData.store?.name || 'Toko Kami';
    const waUrl = `https://wa.me/${cleanWa}?text=Halo%20Admin%20Pengembang,%20saya%20pemilik%20${encodeURIComponent(storeName)}%20ingin%20mengajukan%20perpanjangan%20masa%20aktif%20layanan%20sistem.`;

    if (info.isGrace) {
        container.innerHTML = `
            <div class="mb-4 p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-800 dark:text-amber-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-xs">
                <div class="flex items-center gap-3">
                    <div class="w-10 h-10 rounded-xl bg-amber-500 text-white flex items-center justify-center text-lg shrink-0 shadow-xs">
                        <i class="fa-solid fa-triangle-exclamation"></i>
                    </div>
                    <div>
                        <h4 class="text-xs sm:text-sm font-black uppercase tracking-wider text-amber-900 dark:text-amber-100 leading-tight">Masa Aktif Berakhir — Masa Tenggang (${info.graceDaysLeft} Hari Tersisa)</h4>
                        <p class="text-[11px] text-amber-800/80 dark:text-amber-300/80 mt-0.5">Layanan toko berakhir pada <b>${info.expiryDateFormatted}</b>. Mohon segera lakukan perpanjangan agar sistem tidak terkunci otomatis.</p>
                    </div>
                </div>
                <div class="flex items-center gap-2 w-full sm:w-auto shrink-0">
                    <button type="button" onclick="window.openRenewalModal && window.openRenewalModal()" class="px-3.5 py-2 rounded-xl bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold transition-all shadow-xs cursor-pointer active:scale-95">
                        <i class="fa-solid fa-key mr-1.5"></i> Masukkan Lisensi
                    </button>
                    <a href="${waUrl}" target="_blank" class="px-3.5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-all shadow-xs flex items-center gap-1.5 cursor-pointer active:scale-95">
                        <i class="fa-brands fa-whatsapp text-sm"></i> Hubungi Pengembang
                    </a>
                </div>
            </div>
        `;
        container.classList.remove('hidden');
    } else if (info.isExpiringSoon) {
        container.innerHTML = `
            <div class="mb-4 p-3.5 rounded-2xl bg-blue-500/10 border border-blue-500/25 text-blue-900 dark:text-blue-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-2xs">
                <div class="flex items-center gap-3">
                    <div class="w-9 h-9 rounded-xl bg-blue-500 text-white flex items-center justify-center text-base shrink-0 shadow-2xs">
                        <i class="fa-solid fa-clock-rotate-left"></i>
                    </div>
                    <div>
                        <h4 class="text-xs font-black uppercase tracking-wider text-blue-950 dark:text-blue-50">Pengingat Masa Aktif Layanan Toko (${info.daysLeft} Hari Lagi)</h4>
                        <p class="text-[11px] text-blue-800/80 dark:text-blue-300/80 mt-0.5">Masa aktif sistem Anda berlaku hingga <b>${info.expiryDateFormatted}</b>. Hubungi pengembang untuk perpanjangan masa aktif tepat waktu.</p>
                    </div>
                </div>
                <div class="flex items-center gap-2 w-full sm:w-auto shrink-0">
                    <button type="button" onclick="window.openRenewalModal && window.openRenewalModal()" class="px-3 py-1.5 rounded-xl border border-blue-300 dark:border-blue-700 text-blue-700 dark:text-blue-200 text-xs font-bold hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-all cursor-pointer">
                        Kode Lisensi
                    </button>
                    <a href="${waUrl}" target="_blank" class="px-3.5 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer active:scale-95 shadow-2xs">
                        <i class="fa-brands fa-whatsapp text-sm"></i> Perpanjang Sekarang
                    </a>
                </div>
            </div>
        `;
        container.classList.remove('hidden');
    }
};

/**
 * Tampilkan Layar Penguncian Anggun (Graceful Lockout) saat sewa habis melewati toleransi
 */
export const checkAndEnforceSubscriptionLockout = () => {
    const info = getSubscriptionInfo();
    let lockoutEl = el('subscription-lockout-modal');

    if (!info.isLocked) {
        if (lockoutEl) lockoutEl.remove();
        return false;
    }

    const cleanWa = (info.devContact || '').replace(/\D/g, '');
    const storeName = appData.store?.name || 'Toko Kami';
    const waUrl = `https://wa.me/${cleanWa}?text=Halo%20Admin%20Pengembang,%20masa%20aktif%20sistem%20toko%20${encodeURIComponent(storeName)}%20telah%20selesai%20pada%20${encodeURIComponent(info.expiryDateFormatted)}.%20Mohon%20bantuan%20untuk%20proses%20perpanjangan%20layanan.`;

    if (!lockoutEl) {
        lockoutEl = document.createElement('div');
        lockoutEl.id = 'subscription-lockout-modal';
        lockoutEl.className = 'fixed inset-0 z-[120000] bg-slate-950/95 backdrop-blur-xl flex items-center justify-center p-4 select-none';
        document.body.appendChild(lockoutEl);
    }

    lockoutEl.innerHTML = `
        <div class="relative w-full max-w-md bg-white dark:bg-slate-900 rounded-[2.25rem] border border-slate-200/90 dark:border-slate-800 p-6 sm:p-8 shadow-2xl text-center space-y-5 animate-scale-up">
            <div class="w-20 h-20 rounded-3xl mx-auto flex items-center justify-center text-amber-500 bg-amber-500/10 border-2 border-amber-500/25 shadow-inner">
                <i class="fa-solid fa-shield-halved text-4xl"></i>
            </div>
            
            <div class="space-y-2">
                <span class="inline-block px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest bg-amber-100 text-amber-800 dark:bg-amber-950/60 dark:text-amber-300 border border-amber-300 dark:border-amber-700">
                    Layanan Menunggu Perpanjangan
                </span>
                <h3 class="text-lg sm:text-xl font-black text-slate-900 dark:text-white leading-tight">
                    Masa Aktif Sistem Telah Selesai
                </h3>
                <p class="text-xs text-slate-500 dark:text-slate-400 leading-relaxed max-w-sm mx-auto">
                    Masa sewa layanan sistem terkelola toko <b>${esc(storeName)}</b> telah berakhir pada <b>${info.expiryDateFormatted}</b>.
                </p>
                <div class="p-3 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-800 dark:text-emerald-300 text-[11px] font-medium text-left flex items-start gap-2.5">
                    <i class="fa-solid fa-circle-check text-emerald-600 mt-0.5 shrink-0"></i>
                    <span><b>Data Anda 100% Aman:</b> Seluruh data produk, riwayat pesanan, dan keuangan toko tetap tersimpan rapi dan tidak hilang.</span>
                </div>
            </div>

            <!-- Formulir Input Kunci Lisensi (Jika Klien Memiliki Kode) -->
            <div id="renewal-key-box" class="hidden text-left space-y-2 pt-2 border-t border-slate-100 dark:border-slate-800">
                <label class="block text-[11px] font-bold text-slate-700 dark:text-slate-300">Masukkan Kunci Lisensi Perpanjangan:</label>
                <div class="flex gap-2">
                    <input type="text" id="renewal-key-input" placeholder="Cth: PUTRI-365D-..." class="flex-1 px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs font-mono font-bold text-slate-800 dark:text-white uppercase outline-none focus:border-[var(--color-primary)]">
                    <button type="button" onclick="window.submitRenewalLicenseKey()" class="px-4 py-2.5 rounded-xl bg-[var(--color-primary)] text-white text-xs font-bold transition-all active:scale-95 shadow-xs cursor-pointer">
                        Aktifkan
                    </button>
                </div>
                <p class="text-[10px] text-slate-400">Dapatkan kode lisensi dari developer pengembang Anda.</p>
            </div>

            <!-- Tombol Aksi Utama -->
            <div class="space-y-2 pt-2">
                <a href="${waUrl}" target="_blank" class="w-full py-3.5 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-md shadow-emerald-600/30 hover:brightness-105 active:scale-95 transition-all">
                    <i class="fa-brands fa-whatsapp text-base"></i> Hubungi Pengembang untuk Perpanjang
                </a>
                <button type="button" onclick="const b = document.getElementById('renewal-key-box'); if(b) b.classList.toggle('hidden');" class="w-full py-2.5 text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-white text-xs font-bold transition-colors cursor-pointer">
                    <i class="fa-solid fa-key mr-1.5"></i> Sudah punya kode lisensi perpanjangan?
                </button>
            </div>

            <p class="text-[10px] text-slate-400">
                Dikelola oleh: <b>${esc(info.devName)}</b>
            </p>
        </div>
    `;
    return true;
};

/**
 * Hash sederhana untuk verifikasi checksum lisensi offline
 */
const simpleHash = (str) => {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        const char = str.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash;
    }
    return Math.abs(hash).toString(16).toUpperCase();
};

/**
 * Generate string checksum untuk validasi lisensi
 */
export const computeLicenseChecksum = (storeIdentifier, days) => {
    const raw = `${storeIdentifier.toUpperCase().trim()}_${days}_${LICENSE_SECRET_SALT}`;
    return simpleHash(raw).padStart(6, '0').substring(0, 6);
};

/**
 * Validasi dan Terapkan Kunci Lisensi Perpanjangan
 * Format kunci lisensi: PUTRI-<DAYS>D-<STORE_CODE>-<CHECKSUM>
 * Contoh: PUTRI-365D-BERKAH-8F2B1A
 */
export const verifyAndApplyLicenseKey = async (rawKey) => {
    if (!rawKey || typeof rawKey !== 'string') {
        showToast('Masukkan kode lisensi yang valid!', 'error');
        return false;
    }

    const key = rawKey.trim().toUpperCase();
    const parts = key.split('-');
    
    // Format harus: PUTRI - [ANGKA]D - [STORE] - [CHECKSUM]
    if (parts.length < 4 || parts[0] !== 'PUTRI') {
        showToast('Format kode lisensi tidak sesuai!', 'error');
        return false;
    }

    const daysStr = parts[1].replace('D', '');
    const days = parseInt(daysStr, 10);
    if (!days || isNaN(days) || days <= 0) {
        showToast('Durasi lisensi tidak valid!', 'error');
        return false;
    }

    const storeCode = parts[2];
    const checksum = parts[3];
    const expectedChecksum = computeLicenseChecksum(storeCode, days);

    if (checksum !== expectedChecksum) {
        showToast('Kode lisensi tidak valid!', 'error');
        return false;
    }

    const currentStoreCode = (appData.subscription?.storeCode || appData.store?.code || 'PUTRI').toUpperCase().trim();
    if (storeCode !== currentStoreCode && storeCode !== 'MASTER' && storeCode !== 'PUTRI' && currentStoreCode !== 'PUTRI') {
        showToast(`Kode lisensi ini diterbitkan khusus untuk toko [${storeCode}], bukan untuk toko ini (${currentStoreCode})!`, 'error');
        return false;
    }

    // Hitung tanggal kedaluwarsa baru
    const currentExpiry = appData.subscription?.expiresAt ? new Date(appData.subscription.expiresAt).getTime() : Date.now();
    const baseDate = currentExpiry > Date.now() ? currentExpiry : Date.now();
    const newExpiry = new Date(baseDate + (days * 24 * 60 * 60 * 1000)).toISOString();

    showToast('Mengaktifkan lisensi baru...', 'loading');

    try {
        const subUpdate = {
            status: 'active',
            expiresAt: newExpiry,
            plan: 'pro_managed',
            lastActivatedAt: new Date().toISOString(),
            lastLicenseKey: key.substring(0, 10) + '****'
        };

        if (!appData.subscription) appData.subscription = {};
        Object.assign(appData.subscription, subUpdate);

        // Simpan langsung ke Firestore cms_data
        if (db) {
            await db.collection('freshmart').doc('cms_data').set({
                subscription: subUpdate
            }, { merge: true });
        }

        // Hapus layar lockout jika ada
        const lockoutEl = el('subscription-lockout-modal');
        if (lockoutEl) lockoutEl.remove();

        // Render ulang notifikasi di CMS
        renderSubscriptionNoticeInCMS();

        const formattedNew = new Date(newExpiry).toLocaleDateString('id-ID', {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        });

        showToast(`Lisensi Berhasil Diaktifkan! Masa aktif diperpanjang +${days} hari (hingga ${formattedNew})`, 'success');
        return true;
    } catch(err) {
        console.error('[Subscription] Gagal simpan lisensi:', err);
        showToast('Gagal mengaktifkan lisensi: ' + (err.message || 'Koneksi database bermasalah'), 'error');
        return false;
    }
};

/**
 * Handler interaktif submit lisensi dari modal
 */
if (typeof window !== 'undefined') {
    window.submitRenewalLicenseKey = async () => {
        const input = el('renewal-key-input') || el('cms-renewal-key-input');
        if (!input || !input.value.trim()) {
            showToast('Silakan masukkan kode lisensi perpanjangan!', 'warning');
            return;
        }
        const ok = await verifyAndApplyLicenseKey(input.value.trim());
        if (ok) {
            input.value = '';
            if (typeof window.closeRenewalModal === 'function') window.closeRenewalModal();
        }
    };
}

/**
 * Modal dialog masukkan lisensi dari dalam CMS Owner
 */
export const openRenewalModal = () => {
    let m = el('renewal-input-modal');
    if (!m) {
        m = document.createElement('div');
        m.id = 'renewal-input-modal';
        m.className = 'fixed inset-0 z-[10500] bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4';
        document.body.appendChild(m);
    }
    m.innerHTML = `
        <div class="w-full max-w-md bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 shadow-2xl space-y-4">
            <div class="flex items-center justify-between">
                <div class="flex items-center gap-2.5">
                    <div class="w-9 h-9 rounded-xl bg-amber-500/10 text-amber-500 flex items-center justify-center">
                        <i class="fa-solid fa-key"></i>
                    </div>
                    <h3 class="font-black text-sm text-slate-800 dark:text-white">Perpanjang Masa Aktif Toko</h3>
                </div>
                <button type="button" onclick="window.closeRenewalModal()" class="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-400 hover:text-slate-700 flex items-center justify-center cursor-pointer">
                    <i class="fa-solid fa-xmark text-sm"></i>
                </button>
            </div>
            <p class="text-xs text-slate-500 dark:text-slate-400">Masukkan kode lisensi resmi yang Anda terima dari pengembang untuk memperpanjang durasi layanan toko Anda.</p>
            <div>
                <input type="text" id="cms-renewal-key-input" placeholder="PUTRI-365D-..." class="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 font-mono font-bold text-xs uppercase outline-none focus:border-[var(--color-primary)] text-slate-900 dark:text-white">
            </div>
            <div class="flex gap-2">
                <button type="button" onclick="window.closeRenewalModal()" class="flex-1 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 font-bold text-xs cursor-pointer">Batal</button>
                <button type="button" onclick="window.submitRenewalLicenseKey()" class="flex-1 py-2.5 rounded-xl bg-[var(--color-primary)] text-white font-bold text-xs cursor-pointer shadow-sm active:scale-95">Aktifkan Lisensi</button>
            </div>
        </div>
    `;
    m.classList.remove('hidden');
    pushModalHistory('renewal');
};

export const closeRenewalModal = (fromHistory = false) => {
    requestCloseModal('renewal', fromHistory, () => {
        const m = el('renewal-input-modal');
        if (m) m.classList.add('hidden');
    });
};

/**
 * Render Bento Status Card Langganan untuk ditampilkan di Pengaturan Toko
 */
export const getSubscriptionBentoHtml = () => {
    const info = getSubscriptionInfo();
    const cleanWa = (info.devContact || '').replace(/\D/g, '');
    const storeName = appData.store?.name || 'Toko Kami';
    const waUrl = `https://wa.me/${cleanWa}?text=Halo%20Admin%20Pengembang,%20saya%20pemilik%20${encodeURIComponent(storeName)}%20ingin%20konsultasi%20mengenai%20layanan%20sistem%20toko.`;

    let statusBadge = '';
    if (info.isPerpetual) {
        statusBadge = `<span class="px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border border-emerald-500/30 flex items-center gap-1.5"><i class="fa-solid fa-infinity text-xs"></i> Seumur Hidup</span>`;
    } else if (info.isLocked) {
        statusBadge = `<span class="px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-rose-500/15 text-rose-700 dark:text-rose-300 border border-rose-500/30 flex items-center gap-1.5"><i class="fa-solid fa-lock text-xs"></i> Terkunci</span>`;
    } else if (info.isGrace) {
        statusBadge = `<span class="px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-amber-500/15 text-amber-700 dark:text-amber-300 border border-amber-500/30 flex items-center gap-1.5"><i class="fa-solid fa-triangle-exclamation text-xs"></i> Masa Tenggang (${info.graceDaysLeft} Hari)</span>`;
    } else if (info.isExpiringSoon) {
        statusBadge = `<span class="px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-blue-500/15 text-blue-700 dark:text-blue-300 border border-blue-500/30 flex items-center gap-1.5"><i class="fa-solid fa-clock text-xs"></i> ${info.daysLeft} Hari Lagi</span>`;
    } else {
        statusBadge = `<span class="px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border border-emerald-500/30 flex items-center gap-1.5"><i class="fa-solid fa-shield-check text-xs"></i> Aktif (${info.daysLeft} Hari)</span>`;
    }

    return `
        <div class="mt-6 p-5 sm:p-6 rounded-[2rem] border border-slate-200/80 dark:border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 text-white shadow-xl relative overflow-hidden">
            <div class="pointer-events-none absolute right-0 bottom-0 w-52 h-52 rounded-full" style="background: radial-gradient(circle at 100% 100%, rgba(16, 185, 129, 0.22) 0%, rgba(16, 185, 129, 0.05) 50%, transparent 75%);"></div>
            <div class="flex flex-col md:flex-row items-start md:items-center justify-between gap-5 relative z-10">
                <div class="flex items-start sm:items-center gap-4">
                    <div class="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600 text-white flex items-center justify-center text-2xl shrink-0 shadow-lg shadow-amber-500/20">
                        <i class="fa-solid fa-crown"></i>
                    </div>
                    <div>
                        <div class="flex flex-wrap items-center gap-2 mb-1">
                            <span class="text-[10px] font-black uppercase tracking-widest text-amber-400">Model Layanan Terkelola (SaaS)</span>
                            ${statusBadge}
                        </div>
                        <h3 class="text-base sm:text-lg font-black tracking-tight leading-tight">Paket Lisensi: <span class="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-emerald-400">Pro Managed Store</span></h3>
                        <p class="text-xs text-slate-400 mt-0.5">
                            Masa Aktif: <b class="text-slate-200">${info.expiryDateFormatted}</b> • Kode Toko: <b class="text-slate-200">${esc(info.storeCode)}</b>
                        </p>
                        <p class="text-[11px] text-slate-500 mt-1">
                            Dukungan Teknis Pengembang: <span class="text-slate-300 font-semibold">${esc(info.devName)}</span>
                        </p>
                    </div>
                </div>
                <div class="flex flex-wrap items-center gap-2.5 w-full md:w-auto shrink-0 pt-2 md:pt-0 border-t md:border-t-0 border-slate-800">
                    <button type="button" onclick="window.openRenewalModal && window.openRenewalModal()" class="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs font-bold transition-all flex items-center gap-2 active:scale-95 cursor-pointer shadow-xs">
                        <i class="fa-solid fa-key text-amber-400"></i> Masukkan Lisensi
                    </button>
                    <a href="${waUrl}" target="_blank" class="px-4 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:brightness-110 text-white text-xs font-bold transition-all flex items-center gap-2 active:scale-95 cursor-pointer shadow-md shadow-emerald-900/30">
                        <i class="fa-brands fa-whatsapp text-sm"></i> WhatsApp Dukungan
                    </a>
                </div>
            </div>
        </div>
    `;
};

if (typeof window !== 'undefined') {
    window.openRenewalModal = openRenewalModal;
    window.closeRenewalModal = closeRenewalModal;
}

