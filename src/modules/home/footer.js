/**
 * ============================================================
 * MODUL BERANDA: STOREFRONT FOOTER COMPONENT
 * Mengatur template, data dinamis, link kontak, jam kerja,
 * metode pembayaran, jasa pengiriman, dan navigasi footer toko.
 * ============================================================
 */

import { appData } from '../../core/state.js';
import { esc } from '../../core/utils.js';
import { getLatestVersion } from '../../config/changelog.js';
import { pushModalHistory, requestCloseModal } from '../../core/router.js';

/**
 * Render footer toko resmi ke container #storefront-footer-container
 */
export const renderFooter = () => {
    const container = document.getElementById('storefront-footer-container');
    if (!container) return;

    const store = appData.store || {};
    const storeName = store.name || 'Toko Putri';
    const storeDesc = store.description || store.slogan || 'Selamat datang di toko kami. Melayani pembelian online dan offline dengan kualitas terbaik.';
    const storeEmail = store.email || '';
    const storeHours = store.operationalHours || 'Buka Setiap Hari (08:00 - 17:00)';
    const storeAddress = store.address || '';
    const storeWa = store.wa || '';
    const footerCredit = store.footerCredit || 'Seluruh hak cipta dilindungi undang-undang.';
    const currentYear = new Date().getFullYear();
    const latestVer = getLatestVersion(appData);

    // Format nomor WhatsApp aman (standar internasional 62...)
    let cleanWa = (storeWa || '').replace(/\D/g, '');
    if (cleanWa.startsWith('0')) cleanWa = '62' + cleanWa.slice(1);
    else if (!cleanWa.startsWith('62') && cleanWa.length > 0) cleanWa = '62' + cleanWa;

    // Logo rendering (gambar atau ikon)
    let logoHtml = `<i class="fa-solid fa-store text-2xl text-[var(--color-primary)]"></i>`;
    if (store.logo) {
        if (store.logo.includes('http') || store.logo.includes('data:')) {
            logoHtml = `<img src="${esc(store.logo)}" alt="${esc(storeName)}" class="h-full w-full max-h-10 max-w-10 object-contain" onerror="this.outerHTML='<i class=\\'fa-solid fa-store text-2xl text-[var(--color-primary)]\\'></i>'">`;
        } else {
            logoHtml = `<i class="fa-solid ${esc(store.logo)} text-2xl text-[var(--color-primary)]"></i>`;
        }
    }

    // WhatsApp action
    const waOnClick = cleanWa 
        ? `if(typeof window.openWhatsApp==='function') window.openWhatsApp('${esc(cleanWa)}'); else window.open('https://wa.me/${esc(cleanWa)}', '_blank', 'noopener,noreferrer');`
        : `if(typeof window.showToast==='function') window.showToast('Nomor WhatsApp belum dikonfigurasi admin.');`;

    container.innerHTML = `
    <!-- ================= FOOTER TOKO RESMI: ADAPTIVE RESPONSIVE (MOBILE NATIVE END-CAP & DESKTOP BENTO HUB) ================= -->
    <footer class="themed-footer relative mt-6 sm:mt-14 w-full overflow-hidden pb-[calc(6.5rem+env(safe-area-inset-bottom))] sm:pb-[calc(4rem+env(safe-area-inset-bottom))]">

      <!-- ================= 1. MOBILE NATIVE END-CAP (KHUSUS SMARTPHONE < 640px: RINGKAS, BERSIH, NATIVE APP FEEL) ================= -->
      <div class="block sm:hidden w-full px-3.5 mb-2">
        <div class="footer-mobile-endcap relative overflow-hidden p-4 rounded-3xl transition-all duration-300">
          
          <!-- Mini Brand & Live Operating Indicator -->
          <div class="flex items-center justify-between gap-3 mb-2.5">
            <div class="flex items-center gap-2.5 min-w-0">
              <div class="flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-[rgba(var(--color-primary-rgb),0.25)] bg-slate-50 dark:bg-slate-800 p-1.5 shadow-2xs">
                ${logoHtml}
              </div>
              <div class="min-w-0">
                <div class="flex items-center gap-1.5 flex-wrap">
                  <h3 class="text-xs font-black tracking-tight text-slate-900 dark:text-white truncate">${esc(storeName)}</h3>
                  <span class="inline-flex items-center gap-0.5 rounded-full border border-[rgba(var(--color-primary-rgb),0.3)] bg-[rgba(var(--color-primary-rgb),0.1)] px-1.5 py-0.2 text-[8px] font-black uppercase text-[var(--color-primary)]">
                    <i class="fa-solid fa-circle-check text-[8px]"></i> Official
                  </span>
                </div>
                <div class="flex items-center gap-1.5 mt-0.5">
                  <span class="relative flex h-1.5 w-1.5">
                    <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                    <span class="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
                  </span>
                  <span class="text-[10px] font-bold text-slate-500 dark:text-slate-400 truncate">${esc(storeHours)}</span>
                </div>
              </div>
            </div>

            <!-- APK Shortcut Pill -->
            <button type="button" onclick="if(typeof window.openAppDownloadModal==='function') window.openAppDownloadModal();" class="shrink-0 flex items-center gap-1 px-2.5 py-1 rounded-lg text-[9px] font-black uppercase text-white shadow-2xs active:scale-95 transition-transform cursor-pointer" style="background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%);">
              <i class="fa-brands fa-android text-xs"></i>
              <span>APK</span>
            </button>
          </div>

          ${storeAddress ? `
          <div class="mb-3 flex items-start gap-1.5 text-[10px] text-slate-500 dark:text-slate-400 bg-slate-50/70 dark:bg-slate-800/50 rounded-lg px-2.5 py-1.5 border border-slate-200/60 dark:border-slate-700/50">
            <i class="fa-solid fa-location-dot text-[var(--color-primary)] mt-0.5 shrink-0 text-[10px]"></i>
            <span class="line-clamp-1 font-medium">${esc(storeAddress)}</span>
          </div>` : ''}

          <!-- Dual Quick Action Buttons (1-Tap CS & Pusat Bantuan) -->
          <div class="grid grid-cols-2 gap-2 mb-3">
            <button type="button" onclick="${waOnClick}" class="w-full py-2 px-3 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/15 border border-emerald-500/25 text-emerald-600 dark:text-emerald-400 text-[11px] font-bold flex items-center justify-center gap-1.5 active:scale-95 transition-all cursor-pointer">
              <i class="fa-brands fa-whatsapp text-xs"></i>
              <span>Chat CS</span>
            </button>
            <button type="button" onclick="changeView('view-faq')" class="w-full py-2 px-3 rounded-xl bg-slate-100 hover:bg-slate-200/70 dark:bg-slate-800 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-[11px] font-bold flex items-center justify-center gap-1.5 active:scale-95 transition-all cursor-pointer">
              <i class="fa-solid fa-circle-question text-xs text-[var(--color-primary)]"></i>
              <span>Bantuan &amp; FAQ</span>
            </button>
          </div>

          <!-- Micro Sub-Footer Legal & Admin Link -->
          <div class="pt-2.5 border-t border-slate-200/70 dark:border-slate-800/80 flex items-center justify-between text-[9.5px] font-semibold text-slate-400 dark:text-slate-500">
            <span class="truncate">&#169; ${currentYear} ${esc(storeName)}</span>
            <div class="flex items-center gap-2 shrink-0">
              <button type="button" onclick="openShoppingGuideModal()" class="hover:text-[var(--color-primary)] transition-colors cursor-pointer">Panduan</button>
              <span>•</span>
              <button type="button" onclick="if(typeof window.openChangelogModal==='function') window.openChangelogModal();" class="hover:text-[var(--color-primary)] transition-colors cursor-pointer">v${esc(latestVer)}</button>
              <span>•</span>
              <button type="button" onclick="changeView('view-admin-login')" class="hover:text-slate-700 dark:hover:text-slate-200 transition-colors flex items-center gap-1 cursor-pointer font-bold" title="Akses Admin Toko">
                <i class="fa-solid fa-lock text-[8px]"></i>
                <span>Admin</span>
              </button>
            </div>
          </div>

        </div>
      </div>

      <!-- ================= 2. DESKTOP BENTO ISLAND HUB (KHUSUS LAYAR TABLET & DESKTOP >= 640px: LENGKAP & KORPORAT RESMI) ================= -->
      <div class="hidden sm:block">
        <!-- Top Subtle Theme Ambient Horizon -->
        <div class="themed-footer-glow-bar mx-auto w-full max-w-[1240px] px-4 sm:px-6 lg:px-8 mb-5 pointer-events-none">
          <div class="h-[1px] w-full bg-gradient-to-r from-transparent via-[rgba(var(--color-primary-rgb),0.35)] to-transparent"></div>
        </div>

        <div class="relative z-10 mx-auto w-full px-4 sm:px-6 lg:px-8 xl:max-w-[1240px]">
          <!-- MAIN BENTO ISLAND HUB -->
          <div class="footer-bento-hub relative overflow-hidden rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-9 transition-all duration-300">
            
            <!-- Atmospheric Subtle Radial Washes Inside Bento -->
            <div class="absolute -top-24 -right-24 w-80 h-80 rounded-full pointer-events-none opacity-20 dark:opacity-15" style="background: radial-gradient(circle, var(--color-primary) 0%, transparent 70%);"></div>
            <div class="absolute -bottom-24 -left-24 w-80 h-80 rounded-full pointer-events-none opacity-15 dark:opacity-10" style="background: radial-gradient(circle, var(--color-primary) 0%, transparent 70%);"></div>

            <!-- SECTION 1: STORE IDENTITY & DUAL ACTION BANNERS -->
            <div class="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-7 lg:gap-10 items-start pb-7 border-b border-slate-100 dark:border-slate-800">
              
              <!-- Left: Brand Info & Operating Status (7 cols on lg) -->
              <div class="lg:col-span-7 flex flex-col items-start text-left">
                <div class="flex items-center gap-3.5 mb-3.5">
                  <div class="flex h-13 w-13 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-[rgba(var(--color-primary-rgb),0.25)] bg-slate-50 dark:bg-slate-800 p-2 shadow-sm shadow-[rgba(var(--color-primary-rgb),0.12)]">
                    ${logoHtml}
                  </div>
                  <div class="flex flex-col items-start min-w-0">
                    <div class="flex items-center gap-2 flex-wrap">
                      <h3 class="text-lg sm:text-xl font-black tracking-tight text-slate-900 dark:text-white leading-tight break-words">${esc(storeName)}</h3>
                      <span class="inline-flex items-center gap-1 rounded-full border border-[rgba(var(--color-primary-rgb),0.3)] bg-[rgba(var(--color-primary-rgb),0.1)] px-2.5 py-0.5 text-[9px] font-black uppercase tracking-wider text-[var(--color-primary)]">
                        <i class="fa-solid fa-circle-check text-[10px]"></i> Official Store
                      </span>
                    </div>
                    <p class="text-[11px] font-semibold text-slate-500 dark:text-slate-400 mt-0.5">Platform Belanja Online &amp; Kasir Fisik Terpadu</p>
                  </div>
                </div>

                <p class="text-xs font-normal leading-relaxed text-slate-600 dark:text-slate-300 max-w-xl mb-4">
                  ${esc(storeDesc)}
                </p>

                <!-- Operational Badges -->
                <div class="flex flex-wrap items-center gap-2">
                  <!-- Hours -->
                  <div class="inline-flex items-center gap-2 rounded-xl border border-slate-200 dark:border-slate-700/80 bg-slate-50/80 dark:bg-slate-800/60 px-3 py-1.5 text-[11px] font-bold text-slate-700 dark:text-slate-200 shadow-2xs">
                    <span class="relative flex h-2 w-2">
                      <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                      <span class="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
                    </span>
                    <span>${esc(storeHours)}</span>
                  </div>

                  <!-- Trust Value -->
                  <div class="inline-flex items-center gap-1.5 rounded-xl border border-[rgba(var(--color-primary-rgb),0.2)] bg-[rgba(var(--color-primary-rgb),0.06)] px-3 py-1.5 text-[11px] font-bold text-[var(--color-primary)] shadow-2xs">
                    <i class="fa-solid fa-truck-fast"></i>
                    <span>Kirim Cepat &amp; Ambil di Toko</span>
                  </div>
                </div>

                ${storeAddress ? `
                <div class="mt-3 flex items-start gap-2.5 text-xs text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-800/40 border border-slate-200/80 dark:border-slate-700/60 rounded-xl p-2.5 max-w-xl">
                  <i class="fa-solid fa-location-dot text-[var(--color-primary)] mt-0.5 shrink-0 text-sm"></i>
                  <span class="font-medium leading-relaxed">${esc(storeAddress)}</span>
                </div>` : ''}
              </div>

              <!-- Right: Dual Native Action Cards (WhatsApp & APK) (5 cols on lg) -->
              <div class="lg:col-span-5 w-full flex flex-col sm:flex-row lg:flex-col gap-3">
                <!-- WhatsApp Priority Card -->
                <a
                  class="group flex-1 flex items-center gap-3.5 rounded-2xl border border-emerald-500/25 bg-gradient-to-r from-emerald-500/10 via-emerald-500/5 to-transparent dark:from-emerald-500/15 dark:to-transparent hover:border-emerald-500/50 p-3.5 transition-all duration-200 shadow-2xs active:scale-98 cursor-pointer"
                  href="javascript:void(0)"
                  onclick="${waOnClick}"
                >
                  <div class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#25D366] text-white text-2xl shadow-md shadow-[#25D366]/30 group-hover:scale-105 transition-transform">
                    <i class="fa-brands fa-whatsapp"></i>
                  </div>
                  <div class="min-w-0 text-left">
                    <div class="flex items-center gap-1.5">
                      <span class="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                      <span class="text-[9px] font-black uppercase tracking-widest text-emerald-600 dark:text-emerald-400">Customer Support</span>
                    </div>
                    <p class="truncate text-xs font-black text-slate-900 dark:text-white">Konsultasi via WhatsApp</p>
                    <p class="text-[10px] font-medium text-slate-500 dark:text-slate-400">Respon Cepat &amp; Ramah</p>
                  </div>
                  <div class="ml-auto text-emerald-600 dark:text-emerald-400 group-hover:translate-x-0.5 transition-transform">
                    <i class="fa-solid fa-arrow-up-right-from-square text-xs"></i>
                  </div>
                </a>

                <!-- Download APK Card -->
                <div
                  class="group flex-1 flex items-center gap-3.5 rounded-2xl border border-[rgba(var(--color-primary-rgb),0.25)] bg-gradient-to-r from-[rgba(var(--color-primary-rgb),0.10)] via-[rgba(var(--color-primary-rgb),0.04)] to-transparent hover:border-[rgba(var(--color-primary-rgb),0.45)] p-3.5 transition-all duration-200 shadow-2xs active:scale-98 cursor-pointer"
                  onclick="if(typeof window.openAppDownloadModal==='function') window.openAppDownloadModal();"
                >
                  <div class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-white text-xl shadow-md transition-transform group-hover:scale-105" style="background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%);">
                    <i class="fa-brands fa-google-play"></i>
                  </div>
                  <div class="min-w-0 text-left">
                    <div class="flex items-center gap-1.5">
                      <span class="px-1.5 py-0.2 rounded text-[8px] font-black uppercase text-white shadow-2xs" style="background:var(--color-primary)">APK RESMI</span>
                      <span class="text-[9px] font-black uppercase tracking-widest text-[var(--color-primary)]">Android App</span>
                    </div>
                    <p class="truncate text-xs font-black text-slate-900 dark:text-white">Unduh Aplikasi Android</p>
                    <p class="text-[10px] font-medium text-slate-500 dark:text-slate-400">Versi ${esc(latestVer)} • Siap Pasang</p>
                  </div>
                  <div class="ml-auto text-[var(--color-primary)] group-hover:translate-x-0.5 transition-transform">
                    <i class="fa-solid fa-download text-xs"></i>
                  </div>
                </div>
              </div>
            </div>

            <!-- SECTION 2: 4 NATIVE QUICK ACTION TILES -->
            <div class="relative z-10 py-6 border-b border-slate-100 dark:border-slate-800">
              <div class="mb-3.5 flex items-center justify-between">
                <p class="text-[10px] font-black uppercase tracking-wider text-slate-400 dark:text-slate-500 flex items-center gap-1.5">
                  <i class="fa-solid fa-bolt text-[var(--color-primary)]"></i> Menu Layanan &amp; Bantuan Cepat
                </p>
              </div>
              <div class="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4">
                
                <!-- Tile 1: Lacak Pesanan -->
                <button type="button" onclick="changeView('view-orders')" class="group flex items-center sm:items-start gap-2.5 sm:gap-3 p-2.5 sm:p-3.5 rounded-xl sm:rounded-2xl border border-slate-200/90 dark:border-slate-700/80 bg-slate-50/60 dark:bg-slate-800/50 hover:bg-white dark:hover:bg-slate-800 hover:border-[var(--color-primary)]/40 hover:shadow-md transition-all active:scale-95 text-left cursor-pointer">
                  <div class="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl flex items-center justify-center shrink-0 text-white shadow-xs transition-transform group-hover:scale-105" style="background: linear-gradient(135deg, var(--color-primary-light) 0%, var(--color-primary) 100%);">
                    <i class="fa-solid fa-clock-rotate-left text-xs sm:text-sm"></i>
                  </div>
                  <div class="min-w-0 flex-1">
                    <p class="text-[11px] sm:text-xs font-extrabold text-slate-900 dark:text-white group-hover:text-[var(--color-primary)] transition-colors truncate">Lacak Pesanan</p>
                    <p class="text-[9px] sm:text-[10px] font-medium text-slate-500 dark:text-slate-400 truncate mt-0.5">Status &amp; resi kirim</p>
                  </div>
                  <i class="hidden sm:block fa-solid fa-chevron-right text-[10px] text-slate-400 group-hover:text-[var(--color-primary)] group-hover:translate-x-0.5 transition-all mt-1"></i>
                </button>

                <!-- Tile 2: Kupon Promo -->
                <button type="button" onclick="if(typeof window.openVoucherModal==='function') window.openVoucherModal();" class="group flex items-center sm:items-start gap-2.5 sm:gap-3 p-2.5 sm:p-3.5 rounded-xl sm:rounded-2xl border border-slate-200/90 dark:border-slate-700/80 bg-slate-50/60 dark:bg-slate-800/50 hover:bg-white dark:hover:bg-slate-800 hover:border-amber-400/50 hover:shadow-md transition-all active:scale-95 text-left cursor-pointer">
                  <div class="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl flex items-center justify-center shrink-0 text-white shadow-xs bg-gradient-to-br from-amber-400 to-amber-600 transition-transform group-hover:scale-105">
                    <i class="fa-solid fa-ticket-simple text-xs sm:text-sm"></i>
                  </div>
                  <div class="min-w-0 flex-1">
                    <p class="text-[11px] sm:text-xs font-extrabold text-slate-900 dark:text-white group-hover:text-amber-500 transition-colors truncate">Kupon Promo</p>
                    <p class="text-[9px] sm:text-[10px] font-medium text-slate-500 dark:text-slate-400 truncate mt-0.5">Diskon belanja</p>
                  </div>
                  <i class="hidden sm:block fa-solid fa-chevron-right text-[10px] text-slate-400 group-hover:text-amber-500 group-hover:translate-x-0.5 transition-all mt-1"></i>
                </button>

                <!-- Tile 3: Pusat Bantuan & FAQ -->
                <button type="button" onclick="changeView('view-faq')" class="group flex items-center sm:items-start gap-2.5 sm:gap-3 p-2.5 sm:p-3.5 rounded-xl sm:rounded-2xl border border-slate-200/90 dark:border-slate-700/80 bg-slate-50/60 dark:bg-slate-800/50 hover:bg-white dark:hover:bg-slate-800 hover:border-blue-400/50 hover:shadow-md transition-all active:scale-95 text-left cursor-pointer">
                  <div class="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl flex items-center justify-center shrink-0 text-white shadow-xs bg-gradient-to-br from-sky-400 to-blue-600 transition-transform group-hover:scale-105">
                    <i class="fa-solid fa-circle-question text-xs sm:text-sm"></i>
                  </div>
                  <div class="min-w-0 flex-1">
                    <p class="text-[11px] sm:text-xs font-extrabold text-slate-900 dark:text-white group-hover:text-blue-500 transition-colors truncate">Tanya Jawab</p>
                    <p class="text-[9px] sm:text-[10px] font-medium text-slate-500 dark:text-slate-400 truncate mt-0.5">FAQ &amp; panduan</p>
                  </div>
                  <i class="hidden sm:block fa-solid fa-chevron-right text-[10px] text-slate-400 group-hover:text-blue-500 group-hover:translate-x-0.5 transition-all mt-1"></i>
                </button>

                <!-- Tile 4: Jaminan Mutu Resmi -->
                <button type="button" onclick="openQualityGuaranteeModal()" class="group flex items-center sm:items-start gap-2.5 sm:gap-3 p-2.5 sm:p-3.5 rounded-xl sm:rounded-2xl border border-slate-200/90 dark:border-slate-700/80 bg-slate-50/60 dark:bg-slate-800/50 hover:bg-white dark:hover:bg-slate-800 hover:border-rose-400/50 hover:shadow-md transition-all active:scale-95 text-left cursor-pointer">
                  <div class="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl flex items-center justify-center shrink-0 text-white shadow-xs bg-gradient-to-br from-rose-400 to-rose-600 transition-transform group-hover:scale-105">
                    <i class="fa-solid fa-shield-halved text-xs sm:text-sm"></i>
                  </div>
                  <div class="min-w-0 flex-1">
                    <p class="text-[11px] sm:text-xs font-extrabold text-slate-900 dark:text-white group-hover:text-rose-500 transition-colors truncate">Jaminan Mutu</p>
                    <p class="text-[9px] sm:text-[10px] font-medium text-slate-500 dark:text-slate-400 truncate mt-0.5">100% garansi resmi</p>
                  </div>
                  <i class="hidden sm:block fa-solid fa-chevron-right text-[10px] text-slate-400 group-hover:text-rose-500 group-hover:translate-x-0.5 transition-all mt-1"></i>
                </button>

              </div>
            </div>

            <!-- SECTION 3: PAYMENT & SHIPPING PILLS RIBBON -->
            <div class="relative z-10 py-6 border-b border-slate-100 dark:border-slate-800">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
                
                <!-- Payment Pills -->
                <div class="flex flex-col items-start w-full">
                  <p class="mb-3 text-[10px] font-black uppercase tracking-wider text-slate-400 dark:text-slate-500 flex items-center gap-1.5">
                    <i class="fa-solid fa-credit-card text-[var(--color-primary)]"></i> Pembayaran Terverifikasi
                  </p>
                  <div class="flex flex-wrap items-center gap-2 w-full">
                    <span class="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/60 px-3 py-1.5 text-[11px] font-bold text-slate-700 dark:text-slate-300 shadow-2xs">
                      <i class="fa-solid fa-qrcode text-rose-500"></i> QRIS
                    </span>
                    <span class="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/60 px-3 py-1.5 text-[11px] font-bold text-slate-700 dark:text-slate-300 shadow-2xs">
                      <i class="fa-solid fa-building-columns text-blue-600"></i> BCA
                    </span>
                    <span class="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/60 px-3 py-1.5 text-[11px] font-bold text-slate-700 dark:text-slate-300 shadow-2xs">
                      <i class="fa-solid fa-building-columns text-amber-600"></i> Mandiri
                    </span>
                    <span class="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/60 px-3 py-1.5 text-[11px] font-bold text-slate-700 dark:text-slate-300 shadow-2xs">
                      <i class="fa-solid fa-building-columns text-sky-600"></i> BRI
                    </span>
                    <span class="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/60 px-3 py-1.5 text-[11px] font-bold text-slate-700 dark:text-slate-300 shadow-2xs">
                      <i class="fa-brands fa-cc-visa text-indigo-500"></i> <i class="fa-brands fa-cc-mastercard text-orange-500"></i> Kartu
                    </span>
                    <span class="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/60 px-3 py-1.5 text-[11px] font-bold text-slate-700 dark:text-slate-300 shadow-2xs">
                      <i class="fa-solid fa-cash-register text-[var(--color-primary)]"></i> Kasir Fisik
                    </span>
                  </div>
                </div>

                <!-- Shipping Pills -->
                <div class="flex flex-col items-start w-full">
                  <p class="mb-3 text-[10px] font-black uppercase tracking-wider text-slate-400 dark:text-slate-500 flex items-center gap-1.5">
                    <i class="fa-solid fa-truck-fast text-[var(--color-primary)]"></i> Logistik &amp; Pengiriman
                  </p>
                  <div class="flex flex-wrap items-center gap-2 w-full">
                    <span class="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/60 px-3 py-1.5 text-[11px] font-bold text-slate-700 dark:text-slate-300 shadow-2xs">
                      <i class="fa-solid fa-truck-fast text-sky-500"></i> Ekspedisi Cepat
                    </span>
                    <span class="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/60 px-3 py-1.5 text-[11px] font-bold text-slate-700 dark:text-slate-300 shadow-2xs">
                      <i class="fa-solid fa-truck-ramp-box text-amber-500"></i> Kargo &amp; Truk
                    </span>
                    <span class="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/60 px-3 py-1.5 text-[11px] font-bold text-slate-700 dark:text-slate-300 shadow-2xs">
                      <i class="fa-solid fa-motorcycle text-emerald-500"></i> Kurir Instan
                    </span>
                    <span class="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/60 px-3 py-1.5 text-[11px] font-bold text-slate-700 dark:text-slate-300 shadow-2xs">
                      <i class="fa-solid fa-store text-violet-500"></i> Ambil di Toko
                    </span>
                  </div>
                </div>

              </div>
            </div>

            <!-- SECTION 4: SUB-FOOTER LEGAL & SECURITY RIBBON -->
            <div class="relative z-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
              <p class="text-[11px] font-medium text-slate-500 dark:text-slate-400 text-center sm:text-left">
                &#169; ${currentYear} <span class="font-extrabold text-slate-800 dark:text-white">${esc(storeName)}</span>. ${esc(footerCredit)}
              </p>

              <div class="flex flex-wrap items-center justify-center gap-3 text-[10px] font-bold">
                <!-- Security modal trigger -->
                <button type="button" onclick="openSecurityModal()" class="inline-flex items-center gap-1 text-emerald-600 dark:text-emerald-400 font-bold bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 px-2.5 py-1 rounded-full hover:bg-emerald-100 transition-all cursor-pointer">
                  <i class="fa-solid fa-shield-halved text-[9px]"></i> Keamanan &amp; SSL
                </button>

                <!-- Shopping Guide trigger -->
                <button type="button" onclick="openShoppingGuideModal()" class="inline-flex items-center gap-1 text-slate-600 dark:text-slate-300 hover:text-[var(--color-primary)] transition-colors cursor-pointer py-1">
                  <i class="fa-solid fa-circle-question text-[10px]"></i> Panduan
                </button>

                <span class="text-slate-300 dark:text-slate-700">•</span>

                <!-- Changelog Pill -->
                <button type="button" onclick="if(typeof window.openChangelogModal==='function') window.openChangelogModal();" class="inline-flex items-center gap-1.5 rounded-full border border-slate-200 dark:border-slate-700 bg-slate-100/80 dark:bg-slate-800 px-3 py-1 text-[9px] font-extrabold uppercase tracking-wider text-slate-700 dark:text-slate-300 hover:text-[var(--color-primary)] transition-all active:scale-95 cursor-pointer shadow-2xs">
                  <span class="h-1.5 w-1.5 rounded-full bg-[var(--color-primary)] animate-pulse"></span>
                  <span>Versi ${esc(latestVer)}</span>
                </button>

                <span class="text-slate-300 dark:text-slate-700">•</span>

                <!-- Admin Portal Link -->
                <button type="button" onclick="changeView('view-admin-login')" class="inline-flex items-center gap-1 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 transition-colors p-1 cursor-pointer" title="Akses Admin Toko">
                  <i class="fa-solid fa-lock text-[9px]"></i>
                  <span>Admin</span>
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>

    </footer>
    `;
};

/**
 * Modal Jaminan Mutu
 */
export const openQualityGuaranteeModal = () => {
    let m = document.getElementById('guarantee-modal');
    if (!m) {
        m = document.createElement('div');
        m.id = 'guarantee-modal';
        m.className = 'fixed inset-0 z-[115] bg-slate-900/80 flex items-end sm:items-center justify-center p-0 sm:p-5';
        m.onclick = (e) => { if (e.target === m) closeQualityGuaranteeModal(); };
        document.body.appendChild(m);
    }
    m.innerHTML = `
        <div class="bg-white dark:bg-slate-900 w-full max-w-md rounded-t-3xl sm:rounded-2xl p-6 shadow-2xl border border-slate-200 dark:border-slate-700 space-y-4">
            <div class="flex justify-between items-center border-b border-slate-100 dark:border-slate-800 pb-4">
                <h3 class="font-bold text-slate-800 dark:text-white text-base flex items-center gap-2">
                    <i class="fa-solid fa-shield-halved text-[var(--color-primary)]"></i> Jaminan Mutu &amp; Kualitas
                </h3>
                <button onclick="closeQualityGuaranteeModal()" class="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 hover:bg-rose-100 hover:text-rose-500 flex items-center justify-center transition-all">
                    <i class="fa-solid fa-xmark"></i>
                </button>
            </div>
            <div class="space-y-3.5 text-xs text-slate-600 dark:text-slate-300 font-medium leading-relaxed">
                <div class="flex items-start gap-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
                    <i class="fa-solid fa-certificate text-[var(--color-primary)] text-lg shrink-0 mt-0.5"></i>
                    <div>
                        <p class="font-bold text-slate-800 dark:text-white mb-0.5">100% Produk Berkualitas Resmi</p>
                        <p class="text-[11px] text-slate-500 dark:text-slate-400">Seluruh produk yang kami sediakan terjamin keasliannya dan telah melalui proses sortir mutu terbaik.</p>
                    </div>
                </div>
                <div class="flex items-start gap-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
                    <i class="fa-solid fa-arrows-rotate text-[var(--color-primary)] text-lg shrink-0 mt-0.5"></i>
                    <div>
                        <p class="font-bold text-slate-800 dark:text-white mb-0.5">Garansi Toko Terpercaya</p>
                        <p class="text-[11px] text-slate-500 dark:text-slate-400">Jika produk yang diterima tidak sesuai atau mengalami kendala, hubungi kami via WhatsApp untuk solusi penggantian cepat.</p>
                    </div>
                </div>
                <div class="flex items-start gap-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
                    <i class="fa-solid fa-headset text-[var(--color-primary)] text-lg shrink-0 mt-0.5"></i>
                    <div>
                        <p class="font-bold text-slate-800 dark:text-white mb-0.5">Layanan Purna Jual Responsif</p>
                        <p class="text-[11px] text-slate-500 dark:text-slate-400">Customer service kami siap membantu Anda dengan ramah dan solutif setiap hari operasional.</p>
                    </div>
                </div>
            </div>
            <button onclick="closeQualityGuaranteeModal()" class="w-full primary-bg text-white py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all active:scale-95 shadow-sm">
                Tutup
            </button>
        </div>`;
    m.style.opacity = '0';
    m.style.display = 'flex';
    requestAnimationFrame(() => {
        m.style.transition = 'opacity 0.25s ease';
        m.style.opacity = '1';
    });
    pushModalHistory('guarantee');
};

export const closeQualityGuaranteeModal = (fH = false) => {
    const doClose = () => {
        const m = document.getElementById('guarantee-modal');
        if (!m || m.style.display === 'none') return;
        m.style.opacity = '0';
        m.style.transition = 'opacity 0.25s ease';
        setTimeout(() => {
            m.style.display = 'none';
            m.style.opacity = '';
            m.style.transition = '';
        }, 250);
    };

    if (typeof requestCloseModal === 'function') {
        requestCloseModal('guarantee', fH, doClose);
    } else {
        doClose();
    }
};

/**
 * Modal Keamanan
 */
export const openSecurityModal = () => {
    let m = document.getElementById('security-modal');
    if (!m) {
        m = document.createElement('div');
        m.id = 'security-modal';
        m.className = 'fixed inset-0 z-[115] bg-slate-900/80 flex items-end sm:items-center justify-center p-0 sm:p-5';
        m.onclick = (e) => { if (e.target === m) closeSecurityModal(); };
        document.body.appendChild(m);
    }
    m.innerHTML = `
        <div class="bg-white dark:bg-slate-900 w-full max-w-md rounded-t-3xl sm:rounded-2xl p-6 shadow-2xl border border-slate-200 dark:border-slate-700 space-y-4">
            <div class="flex justify-between items-center border-b border-slate-100 dark:border-slate-800 pb-4">
                <h3 class="font-bold text-slate-800 dark:text-white text-base flex items-center gap-2">
                    <i class="fa-solid fa-lock text-[var(--color-primary)]"></i> Keamanan &amp; Privasi
                </h3>
                <button onclick="closeSecurityModal()" class="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 hover:bg-rose-100 hover:text-rose-500 flex items-center justify-center transition-all">
                    <i class="fa-solid fa-xmark"></i>
                </button>
            </div>
            <div class="space-y-3.5 text-xs text-slate-600 dark:text-slate-300 font-medium leading-relaxed">
                <div class="flex items-start gap-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
                    <i class="fa-solid fa-shield-halved text-[var(--color-primary)] text-lg shrink-0 mt-0.5"></i>
                    <div>
                        <p class="font-bold text-slate-800 dark:text-white mb-0.5">Enkripsi SSL 256-Bit</p>
                        <p class="text-[11px] text-slate-500 dark:text-slate-400">Seluruh lalu lintas data transaksi dan kontak Anda dilindungi enkripsi standar industri internasional.</p>
                    </div>
                </div>
                <div class="flex items-start gap-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
                    <i class="fa-solid fa-user-shield text-[var(--color-primary)] text-lg shrink-0 mt-0.5"></i>
                    <div>
                        <p class="font-bold text-slate-800 dark:text-white mb-0.5">Privasi Data Pelanggan Terlindungi</p>
                        <p class="text-[11px] text-slate-500 dark:text-slate-400">Nomor WhatsApp dan riwayat pesanan Anda hanya digunakan untuk kebutuhan pemrosesan pesanan dan poin loyalitas.</p>
                    </div>
                </div>
                <div class="flex items-start gap-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
                    <i class="fa-solid fa-qrcode text-[var(--color-primary)] text-lg shrink-0 mt-0.5"></i>
                    <div>
                        <p class="font-bold text-slate-800 dark:text-white mb-0.5">Pembayaran Resmi &amp; Terverifikasi</p>
                        <p class="text-[11px] text-slate-500 dark:text-slate-400">Kanal QRIS Nasional dan transfer bank toko resmi tanpa perantara pihak ketiga yang meragukan.</p>
                    </div>
                </div>
            </div>
            <button onclick="closeSecurityModal()" class="w-full primary-bg text-white py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all active:scale-95 shadow-sm">
                Tutup
            </button>
        </div>`;
    m.style.opacity = '0';
    m.style.display = 'flex';
    requestAnimationFrame(() => {
        m.style.transition = 'opacity 0.25s ease';
        m.style.opacity = '1';
    });
    pushModalHistory('security');
};

export const closeSecurityModal = (fH = false) => {
    const doClose = () => {
        const m = document.getElementById('security-modal');
        if (!m || m.style.display === 'none') return;
        m.style.opacity = '0';
        m.style.transition = 'opacity 0.25s ease';
        setTimeout(() => {
            m.style.display = 'none';
            m.style.opacity = '';
            m.style.transition = '';
        }, 250);
    };

    if (typeof requestCloseModal === 'function') {
        requestCloseModal('security', fH, doClose);
    } else {
        doClose();
    }
};

// Export ke window untuk kemudahan panggil
window.renderFooter = renderFooter;
window.renderStorefrontFooter = renderFooter;
window.openQualityGuaranteeModal = openQualityGuaranteeModal;
window.closeQualityGuaranteeModal = closeQualityGuaranteeModal;
window.openSecurityModal = openSecurityModal;
window.closeSecurityModal = closeSecurityModal;
