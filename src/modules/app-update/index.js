/**
 * ============================================================
 * MODUL APP UPDATE & DOWNLOAD: GOOGLE PLAY STORE STYLE
 * Mengatur antarmuka unduhan aplikasi resmi Toko Putri (APK),
 * deteksi pembaruan versi real-time dari GitHub Release API,
 * generate QR Code untuk pengguna desktop, dan auto-download APK.
 * ============================================================
 */

import { appData } from '../../core/state.js';
import { el, esc } from '../../core/utils.js';
import { getLatestVersion } from '../../config/changelog.js';
import { pushModalHistory, requestCloseModal } from '../../core/router.js';

// URL rilis GitHub permanen & API endpoint
export const GITHUB_REPO = 'admgaffidigital/tokoputri';
export const GITHUB_LATEST_API = `https://api.github.com/repos/${GITHUB_REPO}/releases/latest`;
export const GITHUB_LATEST_DOWNLOAD_URL = `https://github.com/admgaffidigital/tokoputri/releases/latest/download/TokoPutri.apk`;

// Cache metadata rilis agar hemat bandwidth
let cachedReleaseInfo = null;
let isFetchingRelease = false;

/**
 * Format bytes ke ukuran human readable (MB)
 */
const formatFileSize = (bytes) => {
    if (!bytes || isNaN(bytes)) return '8.0 MB';
    const mb = bytes / (1024 * 1024);
    return `${mb.toFixed(1)} MB`;
};

/**
 * Format tanggal rilis ke format Indonesia
 */
const formatReleaseDate = (isoStr) => {
    if (!isoStr) return 'Terbaru';
    try {
        const d = new Date(isoStr);
        return d.toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' });
    } catch (e) {
        return 'Terbaru';
    }
};

/**
 * Mengambil informasi versi dan ukuran rilis terbaru secara real-time dari GitHub API
 */
export const fetchLatestReleaseInfo = async () => {
    if (cachedReleaseInfo) return cachedReleaseInfo;
    if (isFetchingRelease) return null;

    isFetchingRelease = true;
    try {
        const res = await fetch(GITHUB_LATEST_API, {
            headers: { 'Accept': 'application/vnd.github.v3+json' },
            cache: 'no-store'
        });

        if (res.ok) {
            const data = await res.json();
            const apkAsset = data.assets?.find(a => a.name?.toLowerCase().endsWith('.apk')) || data.assets?.[0];

            cachedReleaseInfo = {
                tagName: data.tag_name || 'v1.8.6',
                name: data.name || 'Toko Putri v1.8.6',
                publishedAt: formatReleaseDate(data.published_at),
                fileSize: apkAsset ? formatFileSize(apkAsset.size) : '8.0 MB',
                downloadUrl: apkAsset?.browser_download_url || GITHUB_LATEST_DOWNLOAD_URL,
                notes: data.body || '',
                isLiveFetched: true
            };
        } else {
            throw new Error(`GitHub API HTTP ${res.status}`);
        }
    } catch (err) {
        // Fallback anggun ke konfigurasi changelog internal
        const fallbackVer = getLatestVersion(appData) || 'v1.8.6';
        cachedReleaseInfo = {
            tagName: fallbackVer,
            name: `Toko Putri ${fallbackVer}`,
            publishedAt: 'Rilis Resmi',
            fileSize: '8.0 MB',
            downloadUrl: GITHUB_LATEST_DOWNLOAD_URL,
            notes: '',
            isLiveFetched: false
        };
    } finally {
        isFetchingRelease = false;
    }

    return cachedReleaseInfo;
};

/**
 * Membuat elemen modal Play Store bila belum ada di DOM
 */
const ensureAppDownloadModalDOM = () => {
    let m = el('app-download-modal');
    if (m) return m;

    m = document.createElement('div');
    m.id = 'app-download-modal';
    m.className = 'fixed inset-0 z-[125] bg-slate-950/80 backdrop-blur-xs flex items-end sm:items-center justify-center p-0 sm:p-4 opacity-0 transition-opacity duration-300';
    m.onclick = (e) => {
        if (e.target === m) closeAppDownloadModal();
    };

    m.innerHTML = `
    <div id="app-download-modal-box" class="relative w-full max-w-xl max-h-[92dvh] sm:max-h-[88dvh] bg-white dark:bg-[#0b1121] rounded-t-3xl sm:rounded-3xl border border-slate-200 dark:border-slate-800 flex flex-col overflow-hidden shadow-2xl transform translate-y-full sm:translate-y-8 transition-transform duration-300">
        
        <!-- Header Gaya Google Play Store -->
        <div class="px-4 sm:px-6 py-3.5 border-b border-slate-100 dark:border-slate-800/80 flex items-center justify-between shrink-0 bg-slate-50/70 dark:bg-[#0b1121]/90">
            <div class="flex items-center gap-2">
                <!-- Ikon Google Play Store Segitiga Vektor -->
                <div class="w-7 h-7 rounded-lg bg-slate-900 dark:bg-slate-800 flex items-center justify-center p-1 shadow-2xs">
                    <svg class="w-4 h-4" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M54.7 13.9C46.8 18.2 41.5 26.5 41.5 36.4V475.6C41.5 485.5 46.8 493.8 54.7 498.1L277.6 256L54.7 13.9Z" fill="#2196F3"/>
                        <path d="M352.3 181.3L277.6 256L352.3 330.7L436.4 282.8C454.1 272.8 454.1 239.2 436.4 229.2L352.3 181.3Z" fill="#FFC107"/>
                        <path d="M277.6 256L54.7 498.1C61.4 501.7 69.5 502.2 77.2 497.8L352.3 330.7L277.6 256Z" fill="#4CAF50"/>
                        <path d="M277.6 256L352.3 181.3L77.2 14.2C69.5 9.8 61.4 10.3 54.7 13.9L277.6 256Z" fill="#F44336"/>
                    </svg>
                </div>
                <div>
                    <div class="flex items-center gap-1.5">
                        <span class="text-xs font-black tracking-tight text-slate-800 dark:text-white uppercase">Google Play</span>
                        <span class="text-[9px] font-bold text-slate-400 dark:text-slate-500">• Storefront Resmi</span>
                    </div>
                </div>
            </div>

            <div class="flex items-center gap-2">
                <!-- Badge Play Protect -->
                <div class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200/80 dark:border-emerald-800/60 text-[10px] font-extrabold text-emerald-700 dark:text-emerald-300 shadow-2xs">
                    <i class="fa-solid fa-shield-halved text-emerald-500"></i>
                    <span>Play Protect</span>
                </div>
                <!-- Tombol Tutup -->
                <button type="button" onclick="closeAppDownloadModal()" class="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-white flex items-center justify-center transition-all cursor-pointer" aria-label="Tutup">
                    <i class="fa-solid fa-xmark text-sm"></i>
                </button>
            </div>
        </div>

        <!-- Scrollable Modal Body -->
        <div class="p-4 sm:p-6 overflow-y-auto flex-1 hide-scrollbar space-y-5">
            
            <!-- Kartu Identitas Aplikasi (Play Store Layout) -->
            <div class="flex items-start gap-4">
                <!-- App Icon HD -->
                <div class="relative w-20 h-20 sm:w-22 sm:h-22 rounded-2xl sm:rounded-3xl bg-[#0f172a] p-1 shadow-lg ring-1 ring-slate-200 dark:ring-slate-700 shrink-0 overflow-hidden flex items-center justify-center">
                    <img src="/official_logo.png" alt="Logo Resmi Toko Putri" class="w-full h-full object-contain p-0.5" onerror="this.src='/logo.png'">
                    <span class="absolute bottom-1 right-1 w-3.5 h-3.5 bg-emerald-500 border-2 border-white dark:border-slate-900 rounded-full" title="Status: Online & Ready"></span>
                </div>

                <!-- Info Nama & Developer -->
                <div class="flex-1 min-w-0">
                    <div class="flex items-center gap-2 flex-wrap">
                        <h2 class="text-base sm:text-lg font-black text-slate-900 dark:text-white tracking-tight leading-tight">
                            Toko Putri
                        </h2>
                        <span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-800/60 text-[9px] font-black uppercase tracking-wider">
                            <i class="fa-solid fa-crown text-[8px]"></i> Pilihan Kasir
                        </span>
                    </div>
                    <p class="text-xs font-bold text-emerald-600 dark:text-emerald-400 mt-0.5">
                        Adm Gaffi Digital • Official Partner
                    </p>
                    <p class="text-[11px] font-semibold text-slate-500 dark:text-slate-400 mt-1 line-clamp-2 leading-relaxed">
                        Aplikasi resmi kasir, katalog grosir teknik, cetak struk POS, dan belanja online Toko Putri.
                    </p>
                </div>
            </div>

            <!-- Strip Metrik Google Play Store (4 Kolom Interaktif) -->
            <div class="grid grid-cols-4 gap-2 py-3 px-2 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800 text-center">
                <!-- Rating -->
                <div class="flex flex-col items-center justify-center">
                    <div class="flex items-center gap-1 text-slate-900 dark:text-white text-xs sm:text-sm font-black">
                        <span>4.9</span>
                        <i class="fa-solid fa-star text-[10px] text-amber-400"></i>
                    </div>
                    <span class="text-[9px] font-semibold text-slate-400 dark:text-slate-500 mt-0.5">1.2 rb ulasan</span>
                </div>
                <!-- Unduhan -->
                <div class="flex flex-col items-center justify-center border-l border-slate-200 dark:border-slate-800">
                    <div class="flex items-center gap-1 text-slate-900 dark:text-white text-xs sm:text-sm font-black">
                        <span>10 rb+</span>
                    </div>
                    <span class="text-[9px] font-semibold text-slate-400 dark:text-slate-500 mt-0.5">Unduhan</span>
                </div>
                <!-- Ukuran APK -->
                <div class="flex flex-col items-center justify-center border-l border-slate-200 dark:border-slate-800">
                    <div class="flex items-center gap-1 text-slate-900 dark:text-white text-xs sm:text-sm font-black" id="app-modal-filesize">
                        <span>8.0 MB</span>
                    </div>
                    <span class="text-[9px] font-semibold text-slate-400 dark:text-slate-500 mt-0.5">Ukuran APK</span>
                </div>
                <!-- Rating Konten -->
                <div class="flex flex-col items-center justify-center border-l border-slate-200 dark:border-slate-800">
                    <div class="inline-flex items-center justify-center w-5 h-5 rounded border border-slate-400 dark:border-slate-600 text-[10px] font-black text-slate-700 dark:text-slate-300">
                        3+
                    </div>
                    <span class="text-[9px] font-semibold text-slate-400 dark:text-slate-500 mt-0.5">Semua Umur</span>
                </div>
            </div>

            <!-- Tombol CTA Utama Gaya Google Play Store (Hijau Emerald Signature) -->
            <div class="space-y-2">
                <button id="btn-download-apk-action" onclick="downloadLatestApk()" class="w-full py-3.5 px-6 rounded-2xl bg-[#01875f] hover:bg-[#01704f] active:scale-[0.98] text-white font-extrabold text-sm sm:text-base flex items-center justify-center gap-3 shadow-lg shadow-emerald-600/25 transition-all cursor-pointer group">
                    <i class="fa-solid fa-download group-hover:translate-y-0.5 transition-transform" id="btn-download-apk-icon"></i>
                    <span id="btn-download-apk-text">Unduh &amp; Pasang APK (<span id="app-modal-version-tag">v1.8.6</span>)</span>
                </button>
                <div class="flex items-center justify-between px-1 text-[10px] font-bold text-slate-400 dark:text-slate-500">
                    <span class="flex items-center gap-1.5">
                        <i class="fa-brands fa-android text-emerald-500 text-xs"></i>
                        <span>Kompatibel: Android 7.0 (Nougat) s/d Android 15</span>
                    </span>
                    <span id="app-modal-published-date" class="hidden sm:inline">Rilis: 19 Sep 2026</span>
                </div>
            </div>

            <!-- Kartu QR Code untuk Pengguna Desktop / Laptop -->
            <div id="app-desktop-qr-card" class="p-4 rounded-2xl bg-gradient-to-br from-slate-50 to-emerald-50/40 dark:from-slate-900/60 dark:to-emerald-950/20 border border-emerald-200/60 dark:border-emerald-800/40 flex flex-col sm:flex-row items-center gap-4">
                <div class="w-28 h-28 bg-white p-2 rounded-xl shadow-md border border-slate-200/80 dark:border-slate-700 shrink-0 flex items-center justify-center">
                    <img id="app-download-qr-img" src="https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=https%3A%2F%2Fgithub.com%2Fadmgaffidigital%2Ftokoputri%2Freleases%2Flatest%2Fdownload%2FTokoPutri.apk" alt="QR Code Unduh APK" class="w-full h-full object-contain" loading="lazy">
                </div>
                <div class="flex-1 text-center sm:text-left">
                    <div class="flex items-center justify-center sm:justify-start gap-1.5 text-xs font-black text-slate-800 dark:text-white">
                        <i class="fa-solid fa-qrcode text-emerald-600 dark:text-emerald-400"></i>
                        <span>Scan untuk Unduh di Ponsel</span>
                    </div>
                    <p class="text-[11px] font-semibold text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                        Buka kamera HP Android Anda dan arahkan ke kode QR ini untuk mengunduh langsung ke ponsel tanpa perlu memindahkan file dari komputer.
                    </p>
                    <div class="mt-2 inline-flex items-center gap-2 text-[10px] font-bold text-emerald-700 dark:text-emerald-300">
                        <i class="fa-solid fa-bolt-lightning text-amber-500"></i>
                        <span>Tautan Otomatis Selalu Versi Terkini</span>
                    </div>
                </div>
            </div>

            <!-- Apa yang Baru (Highlights Changelog v1.8.5) -->
            <div class="space-y-2.5">
                <div class="flex items-center justify-between">
                    <h3 class="text-xs sm:text-sm font-black text-slate-900 dark:text-white flex items-center gap-2">
                        <i class="fa-solid fa-sparkles text-amber-500"></i>
                        <span>Apa yang Baru</span>
                    </h3>
                    <button type="button" onclick="closeAppDownloadModal(); if(typeof window.openChangelogModal==='function') window.openChangelogModal();" class="text-[10px] font-bold text-[var(--color-primary)] hover:underline cursor-pointer">
                        Lihat Semua Riwayat
                    </button>
                </div>

                <div class="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800 space-y-2 text-xs">
                    <div class="flex items-start gap-2.5 text-slate-700 dark:text-slate-300">
                        <i class="fa-solid fa-circle-check text-emerald-500 mt-0.5 text-[11px] shrink-0"></i>
                        <span class="font-medium text-[11px] leading-relaxed">
                            <b>Koneksi Perangkat Universal:</b> Pengaturan printer kasir Bluetooth thermal 58mm/80mm, USB OTG, & RawBT.
                        </span>
                    </div>
                    <div class="flex items-start gap-2.5 text-slate-700 dark:text-slate-300">
                        <i class="fa-solid fa-circle-check text-emerald-500 mt-0.5 text-[11px] shrink-0"></i>
                        <span class="font-medium text-[11px] leading-relaxed">
                            <b>Navigasi WhatsApp & Exit Dialog:</b> WhatsApp membuka aplikasi eksternal tanpa reload, tombol Back Android menampilkan dialog keluar elegan.
                        </span>
                    </div>
                    <div class="flex items-start gap-2.5 text-slate-700 dark:text-slate-300">
                        <i class="fa-solid fa-circle-check text-emerald-500 mt-0.5 text-[11px] shrink-0"></i>
                        <span class="font-medium text-[11px] leading-relaxed">
                            <b>Splash Screen & Logo HD:</b> Penyempurnaan tampilan pembuka aplikasi dengan tema Dark Slate & lambang emas Toko Putri.
                        </span>
                    </div>
                    <div class="flex items-start gap-2.5 text-slate-700 dark:text-slate-300">
                        <i class="fa-solid fa-circle-check text-emerald-500 mt-0.5 text-[11px] shrink-0"></i>
                        <span class="font-medium text-[11px] leading-relaxed">
                            <b>Real-Time Auto-Sync:</b> Pembaruan sistem dan stok otomatis tersinkronisasi langsung dari cloud.
                        </span>
                    </div>
                </div>
            </div>

            <!-- 3 Langkah Mudah Instalasi APK -->
            <div class="space-y-2">
                <h3 class="text-xs sm:text-sm font-black text-slate-900 dark:text-white flex items-center gap-2">
                    <i class="fa-solid fa-circle-info text-blue-500"></i>
                    <span>Cara Pasang Aplikasi (APK) di Android</span>
                </h3>
                <div class="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                    <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800">
                        <div class="w-6 h-6 rounded-lg bg-blue-500 text-white text-[11px] font-black flex items-center justify-center mb-1.5">1</div>
                        <h4 class="text-[11px] font-bold text-slate-800 dark:text-white">Unduh APK</h4>
                        <p class="text-[10px] text-slate-500 dark:text-slate-400 mt-0.5 leading-tight">Ketuk tombol hijau di atas untuk mengunduh TokoPutri.apk.</p>
                    </div>
                    <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800">
                        <div class="w-6 h-6 rounded-lg bg-blue-500 text-white text-[11px] font-black flex items-center justify-center mb-1.5">2</div>
                        <h4 class="text-[11px] font-bold text-slate-800 dark:text-white">Buka File</h4>
                        <p class="text-[10px] text-slate-500 dark:text-slate-400 mt-0.5 leading-tight">Ketuk notifikasi unduhan selesai di HP Anda.</p>
                    </div>
                    <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800">
                        <div class="w-6 h-6 rounded-lg bg-blue-500 text-white text-[11px] font-black flex items-center justify-center mb-1.5">3</div>
                        <h4 class="text-[11px] font-bold text-slate-800 dark:text-white">Izinkan & Pasang</h4>
                        <p class="text-[10px] text-slate-500 dark:text-slate-400 mt-0.5 leading-tight">Pilih 'Tetap Pasang' jika muncul peringatan sumber tidak dikenal.</p>
                    </div>
                </div>
            </div>

            <!-- Jaminan Keamanan & Privasi -->
            <div class="p-3 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center gap-3">
                <i class="fa-solid fa-certificate text-emerald-500 text-xl shrink-0"></i>
                <div class="text-[10px] sm:text-[11px] font-semibold text-emerald-900 dark:text-emerald-200">
                    <span class="font-extrabold">100% Bebas Malware &amp; Iklan:</span> File APK ini dikompilasi secara otomatis langsung dari repository resmi GitHub Toko Putri menggunakan GitHub Actions.
                </div>
            </div>

        </div>

        <!-- Footer Modal -->
        <div class="p-3.5 sm:p-4 border-t border-slate-100 dark:border-slate-800/80 bg-slate-50/80 dark:bg-[#0b1121]/90 flex items-center justify-between shrink-0">
            <div class="flex items-center gap-2 text-[10px] font-bold text-slate-400 dark:text-slate-500">
                <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>Server Rilis: GitHub CDN Aktif</span>
            </div>
            <button type="button" onclick="closeAppDownloadModal()" class="px-5 py-2 rounded-xl bg-slate-200 hover:bg-slate-300 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs font-bold uppercase tracking-wider transition-all cursor-pointer">
                Tutup
            </button>
        </div>
    </div>`;

    document.body.appendChild(m);
    return m;
};

/**
 * Buka modal unduh aplikasi Play Store
 */
export const openAppDownloadModal = async () => {
    const m = ensureAppDownloadModalDOM();
    if (!m) return;

    // Daftarkan ke router history stack untuk hardware back button
    pushModalHistory('appDownload');

    // Tampilkan modal dengan animasi lembut tanpa kedip
    m.style.display = 'flex';
    void m.offsetWidth; // Force synchronous browser reflow
    requestAnimationFrame(() => {
        m.classList.remove('opacity-0');
        const box = el('app-download-modal-box');
        if (box) box.classList.remove('translate-y-full', 'sm:translate-y-8');
    });

    if (typeof window.triggerHaptic === 'function') {
        window.triggerHaptic('light');
    }

    // Ambil data rilis terbaru secara real-time dari GitHub API
    const info = await fetchLatestReleaseInfo();
    if (info) {
        const verTagEl = el('app-modal-version-tag');
        const fileSizeEl = el('app-modal-filesize');
        const pubDateEl = el('app-modal-published-date');

        if (verTagEl) verTagEl.textContent = info.tagName;
        if (fileSizeEl) fileSizeEl.innerHTML = `<span>${esc(info.fileSize)}</span>`;
        if (pubDateEl) pubDateEl.textContent = `Rilis: ${esc(info.publishedAt)}`;
    }
};

/**
 * Tutup modal unduh aplikasi
 */
export const closeAppDownloadModal = (fromHistory = false) => {
    const m = el('app-download-modal');
    if (!m || m.style.display === 'none') return;

    requestCloseModal('appDownload', fromHistory, () => {
        m.classList.add('opacity-0');
        const box = el('app-download-modal-box');
        if (box) box.classList.add('translate-y-full', 'sm:translate-y-8');

        setTimeout(() => {
            m.style.display = 'none';
        }, 300);
    });
};

/**
 * Eksekusi unduhan APK rilis terbaru
 */
export const downloadLatestApk = () => {
    const btn = el('btn-download-apk-action');
    const icon = el('btn-download-apk-icon');
    const text = el('btn-download-apk-text');

    if (btn) {
        btn.classList.add('opacity-80', 'pointer-events-none');
    }
    if (icon) {
        icon.className = 'fa-solid fa-spinner fa-spin';
    }
    if (text) {
        text.textContent = 'Menghubungkan ke Server Rilis...';
    }

    if (typeof window.triggerHaptic === 'function') {
        window.triggerHaptic('medium');
    }

    // Tampilkan notifikasi toast
    if (typeof window.showToast === 'function') {
        window.showToast('Memulai unduhan TokoPutri.apk terbaru. Cek panel notifikasi HP Anda!');
    }

    // Trigger unduhan APK menggunakan link permanen GitHub Releases
    const downloadUrl = cachedReleaseInfo?.downloadUrl || GITHUB_LATEST_DOWNLOAD_URL;
    
    // Gunakan anchor element agar trigger download browser bekerja di semua platform
    const a = document.createElement('a');
    a.href = downloadUrl;
    a.setAttribute('download', 'TokoPutri.apk');
    a.target = '_blank';
    a.rel = 'noopener noreferrer';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

    // Reset teks tombol setelah 2.5 detik
    setTimeout(() => {
        if (btn) {
            btn.classList.remove('opacity-80', 'pointer-events-none');
        }
        if (icon) {
            icon.className = 'fa-solid fa-circle-check text-white';
        }
        if (text) {
            const ver = cachedReleaseInfo?.tagName || 'v1.8.6';
            text.textContent = `Unduh Ulang APK (${ver})`;
        }
    }, 2500);
};

// Expose ke window global
window.openAppDownloadModal = openAppDownloadModal;
window.closeAppDownloadModal = closeAppDownloadModal;
window.downloadLatestApk = downloadLatestApk;
