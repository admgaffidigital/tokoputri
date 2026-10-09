/**
 * ============================================================
 * MODUL BERANDA: STOREFRONT DYNAMIC SECTIONS
 * Mengatur render data toko dinamis di beranda, banner slider,
 * voucher promo interaktif, pill kategori beranda, merek,
 * footer kontak, dan navigasi filter beranda.
 * ============================================================
 */

import { appData, aCat, aBrand, setCPage } from '../../core/state.js';
import { 
    el, show, hide, setIn, setH, esc, fCur, 
    parseVideoUrl, fixDriveVideo, fixDriveVideoPreview, getOptImg 
} from '../../core/utils.js';
import { startBannerAutoSlide, forcePlayBannerVideos } from './banner.js';
import { renderFooter } from './footer.js';
import { rCat } from '../catalog/catalog.js';

export const rDyn = () => {
    // 1. Render komponen footer storefront secara modular & reaktif
    renderFooter();

    // 2. Binding data toko ke header
    setIn('dyn-store-name', appData.store.name || 'Toko Putri');
    setIn('dyn-store-slogan', appData.store.slogan || appData.store.tagline || appData.store.desc || appData.store.description || 'Toko Online & Kasir Resmi');

    if (appData.store.logo) {
        const i = el('dyn-store-logo-img'), c = el('dyn-store-logo-icon');
        if (appData.store.logo.includes('http') || appData.store.logo.includes('data:')) {
            if (i) {
                i.src = appData.store.logo;
                i.onerror = () => { i.onerror = null; i.src = 'https://placehold.co/100?text=Logo'; };
                show('dyn-store-logo-img');
                hide('dyn-store-logo-icon');
                i.style.display = 'block';
                if (c) c.style.display = 'none';
            }
        } else {
            if (c) {
                c.className = `fa-solid ${esc(appData.store.logo)} text-xl text-[var(--color-primary)]`;
                show('dyn-store-logo-icon');
                hide('dyn-store-logo-img');
                c.style.display = 'inline-flex';
                if (i) i.style.display = 'none';
            }
        }
    }

    // Logo toko pada kartu login Panel Owner (fallback ke ikon jika gambar gagal/kosong)
    {
        const li = el('login-store-logo-img'), lc = el('login-store-logo-icon');
        const logo = appData.store.logo || '';
        const isImg = logo.includes('http') || logo.includes('data:');
        if (li && lc) {
            if (isImg) {
                li.src = logo;
                li.onerror = () => { li.onerror = null; li.classList.add('hidden'); lc.classList.remove('hidden'); };
                li.classList.remove('hidden');
                lc.classList.add('hidden');
            } else {
                lc.className = `fa-solid ${esc(logo || 'fa-store')} text-3xl text-[var(--color-primary)]`;
                li.classList.add('hidden');
            }
        }
        const lb = el('login-store-badge');
        if (lb) {
            lb.innerHTML = `<i class="fa-solid fa-crown text-[10px]"></i> ${esc(appData.store.name || 'Toko Putri')} ( Official Store )`;
        }
    }

    // --- RENDER BANNER 3D PREMIUM & KARTU SAMBUTAN HERO MASKOT ---
    // ── SLIDE 0: KARTU SAMBUTAN HERO MASKOT 3D & ANIMASI (Putri Utama Teknik / Toko Putri) ──
    const showHeroSlide = appData.store.showHeroSlide !== false && appData.store.showHeroSlide !== 'false';
    const heroMascotImg = appData.store.heroMascotImg || '/putri_mascot_anim.gif';
    const heroBadgeText = appData.store.heroBadgeText || 'Siap Melayani';
    const heroWelcomeTag = appData.store.heroWelcomeTag || 'SELAMAT DATANG';
    const heroTitle = appData.store.heroTitle || appData.store.name || 'TOKO PUTRI';
    const heroSubtitle = appData.store.heroSubtitle || appData.store.slogan || appData.store.desc || 'Pusat Solusi Bangunan, Alat Teknik & Cat Terlengkap. Belanja Mudah, Cepat, dan Bergaransi!';
    const heroBtnText = appData.store.heroBtnText || 'Member VIP';

    const welcomeHeroSlide = showHeroSlide ? `
        <div id="banner-slide-0" class="banner-slide-item w-[88vw] sm:w-[480px] min-h-[190px] sm:min-h-[220px] snap-center shrink-0 rounded-3xl relative overflow-hidden group cursor-pointer text-white shadow-lg flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
             style="background: linear-gradient(135deg, var(--color-primary-light) 0%, var(--color-primary) 45%, var(--color-primary-dark) 100%); border: 1px solid rgba(var(--color-primary-rgb), 0.35); box-shadow: 0 10px 25px -5px rgba(var(--color-primary-rgb), 0.35);">
            <!-- Clean Decorative Ring -->
            <div class="absolute right-24 top-3 w-10 h-10 rounded-full border border-white/20 pointer-events-none"></div>

            <div class="flex flex-1 w-full relative z-10 items-center justify-between">
                <!-- Text & Action (Left Side) -->
                <div class="w-[60%] sm:w-[62%] p-4 sm:p-5 md:p-6 flex flex-col justify-center z-20">
                    <div class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-black/40 text-white text-[8.5px] sm:text-[9.5px] font-black uppercase tracking-wider mb-1.5 border border-white/25 w-max shadow-2xs">
                        <i class="fa-solid fa-sparkles text-amber-300"></i> ${esc(heroWelcomeTag)}
                    </div>
                    <h2 class="text-[15px] sm:text-lg md:text-xl font-black text-white leading-tight tracking-tight drop-shadow-sm line-clamp-1">
                        ${esc(heroTitle)}
                    </h2>
                    <p class="text-[10px] sm:text-xs text-white/90 font-medium leading-relaxed mt-1 line-clamp-2">
                        ${esc(heroSubtitle)}
                    </p>
                    <div class="mt-2.5 sm:mt-3 flex items-center gap-2">
                        <button type="button" onclick="event.stopPropagation(); if(typeof window.openMemberModal==='function') window.openMemberModal(); else if(typeof window.showToast==='function') window.showToast('Buka kartu member VIP untuk info poin!');" class="bg-white hover:bg-slate-50 active:scale-95 text-[9px] sm:text-[10px] uppercase tracking-wider font-extrabold py-1.5 sm:py-2 px-3.5 sm:px-4 rounded-full shadow-md flex items-center gap-1.5 transition-all group-hover:pr-4 cursor-pointer" style="color: var(--color-primary-dark);">
                            <i class="fa-solid fa-id-card" style="color: var(--color-primary);"></i> ${esc(heroBtnText)} <i class="fa-solid fa-arrow-right text-[8px] transition-transform group-hover:translate-x-1" style="color: var(--color-primary);"></i>
                        </button>
                    </div>
                </div>

                <!-- 3D Mascot Avatar (Right Side) -->
                <div class="w-[40%] sm:w-[38%] relative z-10 flex flex-col items-center justify-center p-2 pr-3 sm:pr-5 shrink-0">
                    <div class="relative group/mascot">
                        <div class="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden shadow-2xl border-2 border-white/60 bg-black/20 transform group-hover:scale-105 transition-transform duration-500 flex items-center justify-center">
                            <img width="128" height="128" loading="eager" fetchpriority="high" src="${esc(heroMascotImg)}" onerror="this.onerror=null;this.src='/putri_mascot_3d.jpg';" alt="${esc(heroTitle)}" class="w-full h-full object-contain" style="image-rendering: auto;">
                        </div>
                        <!-- Status Badge -->
                        <div class="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-slate-950 text-[7.5px] sm:text-[8px] font-bold text-white border border-white/20 px-2 py-0.5 rounded-full shadow-md whitespace-nowrap flex items-center gap-1">
                            <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span> ${esc(heroBadgeText)}
                        </div>
                    </div>
                </div>
            </div>
        </div>` : '';

    // ── SLIDES BANNER PROMOSI (jika ada) ──
    const promoBannersHtml = ((appData.banners || [])).map((b, idx) => {
        const slideIdx = (showHeroSlide ? 1 : 0) + idx;
        const isVideo = b.type === 'video' && b.videoUrl;
        const linkAction = (!isVideo && b.link) ? `onclick="window.open('${esc(b.link)}', '_self')"` : '';

        if (isVideo) {
            // ── SLIDE VIDEO (Google Drive, YouTube/Shorts, atau Direct MP4) ──
            const vInfo = parseVideoUrl(b.videoUrl) || { type: 'direct', directUrl: fixDriveVideo(b.videoUrl), embedUrl: fixDriveVideoPreview(b.videoUrl) };
            
            let videoMediaHtml = '';
            if (vInfo.type === 'youtube') {
                videoMediaHtml = `
                <iframe
                    class="banner-video-iframe w-full h-full absolute inset-0 z-0 border-0 pointer-events-none select-none"
                    src="${esc(vInfo.embedUrl)}"
                    data-src="${esc(vInfo.embedUrl)}"
                    frameborder="0"
                    scrolling="no"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                ></iframe>`;
            } else if (vInfo.type === 'gdrive') {
                videoMediaHtml = `
                <iframe
                    class="banner-video-iframe absolute z-0 border-0 pointer-events-none select-none"
                    src="${esc(vInfo.embedUrl)}"
                    frameborder="0"
                    allow="autoplay; fullscreen"
                    style="width:180%; height:210%; top:-55%; left:-40%; transform:scale(1); object-fit:cover;"
                ></iframe>`;
            } else {
                videoMediaHtml = `
                <video
                    class="banner-video-element w-full h-full object-cover absolute inset-0 z-0 pointer-events-none select-none"
                    src="${esc(vInfo.directUrl)}"
                    autoplay
                    loop
                    muted
                    playsinline
                    webkit-playsinline
                    onended="this.currentTime=0; this.play();"
                ></video>`;
            }

            return `
            <div id="banner-slide-${slideIdx}" class="banner-slide-item w-[88vw] sm:w-[520px] aspect-video snap-center shrink-0 rounded-3xl relative overflow-hidden group bg-black shadow-none border border-white/10 flex flex-col select-none">
                ${videoMediaHtml}
                <!-- Shield Transparan: Mencegah klik/tap pada video agar video tidak bisa di-klik/di-pause -->
                <div class="absolute inset-0 z-15 bg-transparent pointer-events-auto cursor-default" onclick="event.preventDefault(); event.stopPropagation();"></div>
                <!-- Konten bawah: judul & tombol suara murni transparan tanpa shadow gradient -->
                <div class="absolute bottom-0 left-0 right-0 z-20 bg-transparent px-5 py-4 flex items-end justify-between pointer-events-none">
                    <div class="flex-1 min-w-0 pointer-events-none">
                        ${b.title ? `<p class="text-white font-extrabold text-sm sm:text-base line-clamp-2">${esc(b.title)}</p>` : ''}
                        ${b.desc  ? `<p class="text-white/90 text-[11px] sm:text-xs font-medium line-clamp-2 mt-0.5">${esc(b.desc)}</p>` : ''}
                    </div>
                    <div class="ml-3 shrink-0 flex items-center gap-2 pointer-events-auto">
                        <button onclick="event.stopPropagation(); window.toggleBannerVideoSound(this, ${slideIdx});" type="button" aria-label="Aktifkan Suara Video" class="banner-sound-toggle inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-900/80 hover:bg-slate-900 text-white text-[10px] sm:text-xs font-bold rounded-full shadow-lg border border-white/20 active:scale-95 transition-all cursor-pointer">
                            <i class="fa-solid fa-volume-xmark text-xs"></i> <span>Aktifkan Suara</span>
                        </button>
                    </div>
                </div>
            </div>`;
        }

        // ── SLIDE GAMBAR (default) ────────────────────────────────────────
        return `
        <div id="banner-slide-${slideIdx}" ${linkAction} class="banner-slide-item w-[88vw] sm:w-[480px] min-h-[190px] sm:min-h-[220px] snap-center shrink-0 rounded-3xl relative overflow-hidden group cursor-pointer bg-[var(--color-primary)] text-white shadow-none hover:-translate-y-1 hover:scale-[1.01] hover:shadow-none transition-all duration-300 border border-white/15 flex flex-col">
            <!-- Dynamic Solid Header Shapes -->
            <div class="absolute -right-10 -top-10 w-40 h-40 border-[16px] border-white/10 rounded-full pointer-events-none group-hover:scale-105 transition-transform duration-500"></div>
            <div class="absolute -left-12 top-10 w-24 h-24 bg-white/10 rounded-full border border-white/10 pointer-events-none transform -rotate-12 group-hover:-translate-x-1 transition-transform duration-500"></div>
            
            <div class="flex flex-1 w-full relative z-10 items-center">
                <div class="w-[62%] sm:w-[65%] p-5 sm:p-6 md:p-7 flex flex-col justify-center z-20">
                    <h2 class="text-[15px] sm:text-lg md:text-xl font-black text-white leading-snug mb-2 drop-shadow-sm tracking-tight">${esc(b.title || 'Penawaran Spesial')}</h2>
                    <p class="text-[11px] sm:text-xs text-white/95 font-medium leading-relaxed mb-2 break-words">${esc(b.desc || 'Belanja sekarang dan dapatkan penawaran terbaik.')}</p>
                    ${b.link ? `<button class="mt-2 bg-white text-slate-900 text-[9px] sm:text-[10px] uppercase tracking-wider font-extrabold py-2 px-4 rounded-full w-max hover:bg-slate-100 active:scale-95 transition-all shadow-md flex items-center gap-2 group-hover:pr-5">Beli Sekarang <i class="fa-solid fa-arrow-right transition-transform group-hover:translate-x-1"></i></button>` : ''}
                </div>
                <div class="w-[38%] sm:w-[35%] relative z-10 flex items-center justify-center p-2 sm:p-4 pr-4 sm:pr-6 shrink-0">
                    ${b.img ? `<img width="240" height="140" loading="lazy" decoding="async" src="${esc(getOptImg(b.img, 'w600-rw'))}" alt="${esc(b.title || 'Promo Banner')}" class="w-full h-full max-h-[140px] sm:max-h-[170px] object-contain drop-shadow-md transition-transform duration-500 group-hover:scale-105" onerror="this.style.display='none'">` : `
                    <div class="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-white/20 border-2 border-white/30 flex items-center justify-center shadow-md group-hover:scale-105 transition-all duration-300">
                        <i class="fa-solid fa-gift text-4xl sm:text-5xl text-white"></i>
                    </div>`}
                </div>
            </div>
        </div>`;
    }).join('');

    const totalBannerSlides = (showHeroSlide ? 1 : 0) + ((appData.banners && appData.banners.length) || 0);
    if (totalBannerSlides > 0) {
        show('dynamic-banners-container');
        const bHTML = `
        <div class="relative group/banner-wrapper w-full">
            <div id="banner-slider" class="flex overflow-x-auto gap-4 sm:gap-6 pb-4 pt-2 snap-x hide-scrollbar scroll-smooth" ontouchstart="clearInterval(window.bannerTmr)" ontouchend="setTimeout(() => window.startBannerAutoSlide?.(), 8000)" onmouseenter="clearInterval(window.bannerTmr)" onmouseleave="window.startBannerAutoSlide?.()" onscroll="window.onBannerScroll && window.onBannerScroll()">
                ${welcomeHeroSlide}
                ${promoBannersHtml}
            </div>
            ${totalBannerSlides > 1 ? `
            <!-- Navigation Arrows (Desktop) -->
            <button onclick="window.scrollBannerPrev()" type="button" aria-label="Banner Sebelumnya" class="hidden sm:flex absolute left-1 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-slate-900 hover:bg-slate-800 text-white items-center justify-center border border-slate-700 transition-all opacity-0 group-hover/banner-wrapper:opacity-100 shadow-xl active:scale-95">
                <i class="fa-solid fa-chevron-left text-sm"></i>
            </button>
            <button onclick="window.scrollBannerNext()" type="button" aria-label="Banner Selanjutnya" class="hidden sm:flex absolute right-1 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-slate-900 hover:bg-slate-800 text-white items-center justify-center border border-slate-700 transition-all opacity-0 group-hover/banner-wrapper:opacity-100 shadow-xl active:scale-95">
                <i class="fa-solid fa-chevron-right text-sm"></i>
            </button>

            <!-- Dots Indicator Navigation -->
            <div id="banner-dots-container" class="flex items-center justify-center gap-1.5 mt-2">
                ${Array.from({ length: totalBannerSlides }).map((_, idx) => `
                    <button onclick="window.scrollToBanner(${idx})" type="button" aria-label="Slide ${idx+1}" class="banner-dot-item ${idx === 0 ? 'h-2.5 rounded-full transition-all duration-300 bg-[var(--color-primary)] w-7 shadow-sm' : 'w-2.5 h-2.5 rounded-full transition-all duration-300 bg-slate-300 dark:bg-slate-700 hover:bg-slate-400'}" data-index="${idx}"></button>
                `).join('')}
            </div>
            ` : ''}
        </div>`;

        setH('dynamic-banners-container', bHTML);
        if (totalBannerSlides > 1) {
            setTimeout(startBannerAutoSlide, 500);
        }
    } else {
        setH('dynamic-banners-container', '');
        hide('dynamic-banners-container');
    }

    // --- RENDER PANGGUNG FLASH SALE PROMO KILAT (Live Countdown & Kuota) ---
    if (typeof window.renderStorefrontFlashSale === 'function') {
        window.renderStorefrontFlashSale();
    }

    // --- RENDER VOUCHERS PROMO (Dynamic Theme Luxury Ticket Style) ---
    const activeVouchers = (appData.vouchers || []).filter(v => v.isShow === 'true' || v.isShow === true);
    const vC = el('dynamic-vouchers-container');
    if (activeVouchers.length > 0 && vC) {
        vC.classList.remove('hidden');
        let vHTML = `
        <div class="bento-island-card rounded-2xl p-3.5 sm:p-4 md:p-4.5 shadow-xs transition-all duration-300 hover:shadow-sm">
            <div class="mb-3 flex items-center justify-between border-b border-[rgba(var(--color-primary-rgb),0.12)] pb-2.5 dark:border-slate-700/50">
                <div class="flex items-center gap-2.5">
                    <div class="flex h-7 w-7 items-center justify-center rounded-lg text-white shadow-2xs"
                         style="background: linear-gradient(135deg, var(--color-primary-light) 0%, var(--color-primary) 50%, var(--color-primary-dark) 100%);">
                        <i class="fa-solid fa-ticket-simple text-xs -rotate-45"></i>
                    </div>
                    <h3 class="text-xs font-extrabold uppercase tracking-tight text-slate-800 dark:text-white sm:text-sm">VOUCHER DISKON TOKO</h3>
                </div>
            </div>
            <div class="flex gap-2.5 sm:gap-3.5 overflow-x-auto hide-scrollbar snap-x pb-1 pt-1 md:flex-wrap md:overflow-visible">
                ${activeVouchers.map((v) => {
                    let desc = v.type === 'shipping_free' ? 'Gratis Ongkir' : (v.type === 'percent' ? `Diskon ${esc(String(parseFloat(v.value)||0))}%` : `Diskon ${fCur(v.value)}`);
                    let terms = [];
                    if(v.minPurchase > 0) terms.push(`Min. Blj ${fCur(v.minPurchase)}`);
                    if(v.maxDiscount > 0) terms.push(`Maks. ptg ${fCur(v.maxDiscount)}`);
                    if(v.targetProduct) terms.push(`Produk Khusus`);
                    let termsStr = terms.length > 0 ? esc(terms.join(' • ')) : 'Tanpa min. belanja';
                    
                    return `
                    <div class="w-[225px] sm:w-[250px] shrink-0 snap-start md:shrink md:flex-1 md:min-w-[280px] md:max-w-[420px] relative group cursor-pointer active:scale-95 transition-all duration-200" onclick="copyVoucher('${esc(v.code)}')">
                        <div class="w-full h-[82px] sm:h-[86px] rounded-2xl shadow-xs hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 flex relative overflow-hidden text-white"
                             style="background: linear-gradient(135deg, var(--color-primary-light) 0%, var(--color-primary) 45%, var(--color-primary-dark) 100%); border: 1px solid rgba(var(--color-primary-rgb), 0.35);">
                            <!-- Left/Right Ticket Punch Holes (Biting into the sides using bento canvas color) -->
                            <div class="absolute -top-2.5 right-[26%] w-4 h-4 rounded-full bg-white dark:bg-slate-900 border-b border-black/20 z-20 pointer-events-none transform translate-x-1/2 transition-colors duration-300"></div>
                            <div class="absolute -bottom-2.5 right-[26%] w-4 h-4 rounded-full bg-white dark:bg-slate-900 border-t border-black/20 z-20 pointer-events-none transform translate-x-1/2 transition-colors duration-300"></div>
                            
                            <!-- Main Details (Left Side) -->
                            <div class="flex-1 px-3.5 py-2 flex flex-col justify-center relative z-10 min-w-0">
                                <h4 class="font-extrabold text-white text-xs sm:text-[13px] leading-tight mb-0.5 drop-shadow-xs line-clamp-1">${desc}</h4>
                                <p class="text-[7.5px] sm:text-[8px] font-medium text-white/90 flex items-center gap-1 mb-1.5 uppercase tracking-wider line-clamp-1"><i class="fa-solid fa-circle-info text-white/80 text-[7px]"></i> ${termsStr}</p>
                                <div class="inline-flex">
                                    <span class="bg-black/40 text-white text-[9px] sm:text-[10px] font-bold px-2 py-0.5 rounded-md uppercase tracking-wider border border-white/20 flex items-center gap-1.5 font-mono w-max shadow-inner">
                                        <i class="fa-solid fa-ticket text-white/90 text-[8px]"></i> ${esc(v.code)}
                                    </span>
                                </div>
                            </div>
                            
                            <!-- Divider Line -->
                            <div class="w-0 border-l-[1.5px] border-dashed border-white/30 relative z-10 my-2.5"></div>
                            
                            <!-- Action Area (Right Side) -->
                            <div class="w-[26%] flex flex-col items-center justify-center relative z-10 bg-black/20 group-hover:bg-black/30 transition-all duration-200">
                                <div class="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white font-black flex items-center justify-center mb-0.5 shadow-sm group-hover:scale-110 active:scale-90 transition-all"
                                     style="color: var(--color-primary-dark);">
                                    <i class="fa-regular fa-copy text-xs"></i>
                                </div>
                                <span class="text-[8px] font-black uppercase tracking-wider text-white drop-shadow-xs">Salin</span>
                            </div>
                        </div>
                    </div>`;
                }).join('')}
            </div>
        </div>`;
        vC.innerHTML = vHTML;
    } else if (vC) {
        vC.classList.add('hidden');
        vC.innerHTML = '';
    }

    const cLHorizontal = [...(appData.categories || [])];
    // CLEANUP: variabel cLModal & setH('modal-category-list', ...) yang lama dihapus —
    // itu kode mati (selalu ketimpa setiap kali openCategoryModal() jalan), sekarang openCategoryModal()
    // yang jadi satu-satunya sumber render daftar kategori di modal (lihat fungsi di atas).
    
    if (cLHorizontal.length > 0) {
        setH('dynamic-categories-container', cLHorizontal.map(c => {
            const isSel = aCat === c.name; const nameSafe = decodeURIComponent(encodeURIComponent(c.name).replace(/'/g,"%27"));
            const isPillCategory = appData.store.categoryStyle === 'pill' || appData.store.categoryStyle === 'text' || !appData.store.categoryStyle;
            if(isPillCategory) {
                const rawCatImg = (c.img && !c.img.includes('10b981')) ? getOptImg(c.img, 'w150-rw') : '';
                return `<div onclick="filterCategory('${nameSafe}')" class="cursor-pointer shrink-0 snap-start group py-0.5"><div class="px-3.5 py-1.5 rounded-xl border transition-all duration-200 flex items-center gap-2 ${isSel ? 'bg-[var(--color-primary)] border-transparent text-white shadow-xs' : 'bg-slate-50 dark:bg-slate-800/90 border-[rgba(var(--color-primary-rgb),0.16)] dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-[var(--color-primary)] hover:bg-[rgba(var(--color-primary-rgb),0.06)]'}"><div class="w-5 h-5 rounded-md flex items-center justify-center ${isSel ? 'bg-white/20 text-white' : 'bg-white dark:bg-slate-700 text-slate-400 group-hover:text-[var(--color-primary)]'} transition-colors overflow-hidden">${rawCatImg ? `<img loading="lazy" src="${esc(rawCatImg)}" alt="${esc(c.name)}" class="w-full h-full object-cover rounded-sm" onerror="this.outerHTML='<i class=\\\'fa-solid fa-layer-group text-[9px]\\\'></i>'">` : `<i class="fa-solid fa-layer-group text-[9px]"></i>`}</div><span class="font-bold text-[10px] sm:text-[11px] uppercase tracking-wider">${esc(c.name)}</span></div></div>`;
            } else {
                const rawCatImg = (c.img && !c.img.includes('10b981')) ? getOptImg(c.img, 'w150-rw') : 'https://placehold.co/150/f1f5f9/64748b?text=Cat';
                return `<div onclick="filterCategory('${nameSafe}')" class="flex flex-col items-center gap-1.5 cursor-pointer shrink-0 w-[64px] sm:w-[72px] group snap-start py-0.5"><div class="relative w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center p-1.5 transition-all duration-200 ${isSel ? 'bg-[rgba(var(--color-primary-rgb),0.12)] border-2 border-[var(--color-primary)] shadow-xs dark:bg-[rgba(var(--color-primary-rgb),0.2)]' : 'border border-[rgba(var(--color-primary-rgb),0.16)] dark:border-slate-700 shadow-2xs group-hover:border-[var(--color-primary)] group-hover:-translate-y-0.5'} overflow-hidden"><img loading="lazy" src="${esc(rawCatImg)}" alt="${esc(c.name)}" onerror="this.onerror=null;this.src='https://placehold.co/150/f1f5f9/64748b?text=Cat'" class="w-full h-full object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"></div><span class="text-[8.5px] sm:text-[9px] text-center w-full line-clamp-1 leading-tight px-0.5 ${isSel ? 'font-bold text-[var(--color-primary)]' : 'font-semibold text-slate-600 dark:text-slate-300 group-hover:text-[var(--color-primary)]'} uppercase tracking-wider transition-colors">${esc(c.name)}</span></div>`;
            }
        }).join(''));
    }
    
    const bLHorizontal = [...(appData.brands || [])];
    const bLModal = [{name:'Semua Merek', img:(appData.store.allBrandsIcon && !appData.store.allBrandsIcon.includes('10b981')) ? appData.store.allBrandsIcon : 'https://placehold.co/150/f1f5f9/475569?text=Semua+Merek'}, ...(appData.brands || [])];
    
    if (bLHorizontal.length > 0) {
        setH('dynamic-brands-container', bLHorizontal.map(b => {
            const isSel = aBrand === b.name; const nameSafe = decodeURIComponent(encodeURIComponent(b.name).replace(/'/g,"%27"));
            const isPillBrand = appData.store.brandStyle === 'pill' || appData.store.brandStyle === 'text';
            if(isPillBrand) {
                const rawBrandImg = (b.img && !b.img.includes('10b981')) ? getOptImg(b.img, 'w150-rw') : '';
                return `<div onclick="filterBrand('${nameSafe}')" class="cursor-pointer shrink-0 snap-start group py-0.5"><div class="px-3.5 py-1.5 rounded-xl border transition-all duration-200 flex items-center gap-2 ${isSel ? 'bg-[var(--color-primary)] border-transparent text-white shadow-xs' : 'bg-slate-50 dark:bg-slate-800/90 border-[rgba(var(--color-primary-rgb),0.16)] dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-[var(--color-primary)] hover:bg-[rgba(var(--color-primary-rgb),0.06)]'}"><div class="w-5 h-5 rounded-md flex items-center justify-center ${isSel ? 'bg-white/20 text-white' : 'bg-white dark:bg-slate-700 text-slate-400 group-hover:text-[var(--color-primary)]'} transition-colors overflow-hidden">${rawBrandImg ? `<img loading="lazy" src="${esc(rawBrandImg)}" alt="${esc(b.name)}" class="w-full h-full object-contain rounded-sm" onerror="this.outerHTML='<i class=\\\'fa-solid fa-copyright text-[9px]\\\'></i>'">` : `<i class="fa-solid fa-copyright text-[9px]"></i>`}</div><span class="font-bold text-[10px] sm:text-[11px] uppercase tracking-wider">${esc(b.name)}</span></div></div>`;
            } else {
                const rawBrandImg = (b.img && !b.img.includes('10b981')) ? getOptImg(b.img, 'w150-rw') : 'https://placehold.co/150/f1f5f9/64748b?text=Brand';
                return `<div onclick="filterBrand('${nameSafe}')" class="flex flex-col items-center gap-1.5 cursor-pointer shrink-0 w-[64px] sm:w-[72px] group snap-start py-0.5"><div class="relative w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-white flex items-center justify-center overflow-hidden p-1.5 transition-all duration-200 ${isSel ? 'ring-2 ring-[var(--color-primary)] ring-offset-1 ring-offset-slate-50 dark:ring-offset-slate-800 shadow-xs' : 'border border-[rgba(var(--color-primary-rgb),0.16)] dark:border-slate-700 shadow-2xs group-hover:border-[var(--color-primary)]/50 group-hover:-translate-y-0.5'}"><img loading="lazy" src="${esc(rawBrandImg)}" alt="${esc(b.name)}" onerror="this.onerror=null;this.src='https://placehold.co/150/f1f5f9/64748b?text=Brand'" class="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"></div><span class="text-[8.5px] sm:text-[9px] text-center w-full line-clamp-1 leading-tight px-0.5 ${isSel ? 'font-bold text-[var(--color-primary)]' : 'font-semibold text-slate-600 dark:text-slate-300 group-hover:text-[var(--color-primary)]'} uppercase tracking-wider transition-colors">${esc(b.name)}</span></div>`;
            }
        }).join(''));
    }
    
    setH('modal-brand-grid', bLModal.map(b => {
        const isSel = aBrand === b.name; const nameSafe = decodeURIComponent(encodeURIComponent(b.name).replace(/'/g,"%27"));
        const rawModalBrandImg = (b.img && !b.img.includes('10b981')) ? getOptImg(b.img, 'w150-rw') : 'https://placehold.co/150/f1f5f9/64748b?text=Brand';
        return `<button onclick="filterBrand('${nameSafe}'); closeBrandModal();" class="flex flex-col items-center gap-3 p-4 rounded-2xl border ${isSel?'border-[var(--color-primary)] bg-[rgba(var(--color-primary-rgb),0.07)] dark:bg-[rgba(var(--color-primary-rgb),0.12)] shadow-sm':'border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:border-[var(--color-primary)]/40 hover:shadow-sm'} transition-all active:scale-[0.96]"><div class="w-14 h-14 rounded-2xl flex items-center justify-center bg-white border border-slate-100 dark:border-slate-600 shadow-inner overflow-hidden p-1.5"><img loading="lazy" src="${esc(rawModalBrandImg)}" alt="${esc(b.name)}" class="w-full h-full object-contain" onerror="this.src='https://placehold.co/150/f1f5f9/64748b?text=Brand'"></div> <span class="text-[10px] sm:text-xs font-bold ${isSel?'text-[var(--color-primary)]':'text-slate-700 dark:text-slate-300'} text-center leading-tight line-clamp-2 uppercase tracking-widest">${esc(b.name)}</span></button>`;
    }).join(''));

    if(el('dyn-qris-img') && appData.payment) el('dyn-qris-img').src = appData.payment.qrisUrl;
    if (typeof window.renderRewardCatalog === 'function') window.renderRewardCatalog();
    if (typeof window.applyBackgroundStyle === 'function') {
        window.applyBackgroundStyle(appData.store.bgStyle, appData.store.bgCustomUrl);
    }
    setCPage(1);
    rCat();
};




// FITUR BARU (PERFORMA): Loader skrip on-demand generik. Dipakai untuk library berat
// yang cuma dibutuhkan admin (html2canvas, jsPDF, XLSX) atau fitur yang jarang dipakai
// (html5-qrcode) — supaya TIDAK dimuat di setiap kunjungan, cuma saat benar-benar dipakai.
window.rDyn = rDyn;
