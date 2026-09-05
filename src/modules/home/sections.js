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
    setIn('dyn-store-slogan', appData.store.slogan || 'Toko Online & Kasir Resmi');

    if (appData.store.logo) {
        const i = el('dyn-store-logo-img'), c = el('dyn-store-logo-icon');
        if (appData.store.logo.includes('http') || appData.store.logo.includes('data:')) {
            if(i) { i.src = appData.store.logo; i.onerror = () => { i.onerror=null; i.src='https://placehold.co/100?text=Logo'; }; show('dyn-store-logo-img'); hide('dyn-store-logo-icon'); }
        } else {
            if(c) { c.className = `fa-solid ${esc(appData.store.logo)} text-xl text-[var(--color-primary)]`; show('dyn-store-logo-icon'); hide('dyn-store-logo-img'); }
        }
    }

    // --- RENDER BANNER 3D PREMIUM (mendukung tipe gambar & video) ---
    let bHTML = (appData.banners && appData.banners.length) ? `
    <div class="relative group/banner-wrapper w-full">
        <div id="banner-slider" class="flex overflow-x-auto gap-4 sm:gap-6 pb-4 pt-2 snap-x hide-scrollbar scroll-smooth" ontouchstart="clearInterval(window.bannerTmr)" ontouchend="setTimeout(() => window.startBannerAutoSlide?.(), 8000)" onmouseenter="clearInterval(window.bannerTmr)" onmouseleave="window.startBannerAutoSlide?.()" onscroll="window.onBannerScroll && window.onBannerScroll()">
            ${appData.banners.map((b,i)=>{
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
                // Langsung pakai iframe /preview — Google Drive tidak mengizinkan
                // streaming <video> langsung (CORS + redirect blocked), sehingga
                // <video src="uc?export=download"> selalu blank hitam.
                // iframe /preview adalah satu-satunya cara yang andal untuk Drive.
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
            <div id="banner-slide-${i}" class="banner-slide-item w-[88vw] sm:w-[520px] aspect-video snap-center shrink-0 rounded-[2rem] relative overflow-hidden group bg-black shadow-none border border-white/10 flex flex-col select-none">
                ${videoMediaHtml}
                <!-- Shield Transparan: Mencegah klik/tap pada video agar video tidak bisa di-klik/di-pause -->
                <div class="absolute inset-0 z-15 bg-transparent pointer-events-auto cursor-default" onclick="event.preventDefault(); event.stopPropagation();"></div>
                <!-- Konten bawah: judul & tombol suara murni transparan tanpa shadow gradient -->
                <div class="absolute bottom-0 left-0 right-0 z-20 bg-transparent px-5 py-4 flex items-end justify-between pointer-events-none">
                    <div class="flex-1 min-w-0 pointer-events-none">
                        ${b.title ? `<p class="text-white font-extrabold text-sm sm:text-base line-clamp-1">${esc(b.title)}</p>` : ''}
                        ${b.desc  ? `<p class="text-white/80 text-[10px] sm:text-xs font-medium line-clamp-1 mt-0.5">${esc(b.desc)}</p>` : ''}
                    </div>
                    <div class="ml-3 shrink-0 flex items-center gap-2 pointer-events-auto">
                        <button onclick="event.stopPropagation(); window.toggleBannerVideoSound(this, ${i});" type="button" aria-label="Aktifkan Suara Video" class="banner-sound-toggle inline-flex items-center gap-1.5 px-3 py-1.5 bg-rose-600 hover:bg-rose-500 text-white text-[10px] sm:text-xs font-bold rounded-full shadow-none border border-white/20 active:scale-95 transition-all cursor-pointer">
                            <i class="fa-solid fa-volume-xmark text-xs"></i> <span>Aktifkan Suara</span>
                        </button>
                    </div>
                </div>

            </div>`;
        }

        // ── SLIDE GAMBAR (default) ────────────────────────────────────────
        return `
        <div ${linkAction} class="banner-slide-item w-[88vw] sm:w-[480px] min-h-[180px] sm:min-h-[220px] snap-center shrink-0 rounded-[2rem] relative overflow-hidden group cursor-pointer bg-[var(--color-primary)] text-white shadow-none hover:-translate-y-1 hover:scale-[1.01] hover:shadow-none transition-all duration-300 border border-white/15 flex flex-col">
            <!-- Dynamic Solid Header Shapes -->
            <div class="absolute -right-10 -top-10 w-40 h-40 border-[16px] border-white/10 rounded-full pointer-events-none group-hover:scale-105 transition-transform duration-500"></div>
            <div class="absolute -left-12 top-10 w-24 h-24 bg-white/10 rounded-full border border-white/10 pointer-events-none transform -rotate-12 group-hover:-translate-x-1 transition-transform duration-500"></div>
            
            <div class="flex flex-1 w-full relative z-10">
                <div class="w-[60%] p-5 sm:p-6 md:p-7 flex flex-col justify-center z-20">
                    <span class="inline-block px-3 py-1 bg-black/25 rounded-full text-white text-[9px] sm:text-[10px] font-bold uppercase tracking-widest w-max mb-3 border border-white/20 shadow-sm"><i class="fa-solid fa-star text-amber-300 mr-1 animate-pulse"></i> Promo</span>
                    <h2 class="text-[15px] sm:text-lg md:text-xl font-extrabold text-white leading-snug mb-2 drop-shadow-sm line-clamp-2 tracking-tight">${esc(b.title || 'Penawaran Spesial')}</h2>
                    <p class="text-[10px] sm:text-[11px] text-white/90 font-medium line-clamp-3 leading-relaxed mb-3">${esc(b.desc || 'Belanja sekarang dan dapatkan penawaran terbaik.')}</p>
                    ${b.link ? `<button class="mt-auto bg-white text-slate-900 text-[9px] sm:text-[10px] uppercase tracking-wider font-extrabold py-2.5 px-4.5 rounded-full w-max hover:bg-slate-100 active:scale-95 transition-all shadow-md flex items-center gap-2 group-hover:pr-5">Beli Sekarang <i class="fa-solid fa-arrow-right transition-transform group-hover:translate-x-1"></i></button>` : ''}
                </div>
                <div class="w-[40%] relative z-10 flex items-center justify-center p-2 sm:p-4 pr-4 sm:pr-6">
                    ${b.img ? `<img loading="lazy" src="${esc(getOptImg(b.img, 'w800-rw'))}" alt="${esc(b.title || 'Promo Banner')}" class="w-full h-full object-contain drop-shadow-md transition-transform duration-500 group-hover:scale-105" onerror="this.style.display='none'">` : `
                    <div class="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-white/20 border-2 border-white/30 flex items-center justify-center shadow-md group-hover:scale-105 transition-all duration-300">
                        <i class="fa-solid fa-gift text-4xl sm:text-5xl text-white"></i>
                    </div>`}
                </div>
            </div>
        </div>`;
    }).join('')}
        </div>
        ${appData.banners.length > 1 ? `
        <!-- Navigation Arrows (Desktop) -->
        <button onclick="window.scrollBannerPrev()" type="button" aria-label="Banner Sebelumnya" class="hidden sm:flex absolute left-1 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-slate-900 hover:bg-slate-800 text-white items-center justify-center border border-slate-700 transition-all opacity-0 group-hover/banner-wrapper:opacity-100 shadow-xl active:scale-95">
            <i class="fa-solid fa-chevron-left text-sm"></i>
        </button>
        <button onclick="window.scrollBannerNext()" type="button" aria-label="Banner Selanjutnya" class="hidden sm:flex absolute right-1 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-slate-900 hover:bg-slate-800 text-white items-center justify-center border border-slate-700 transition-all opacity-0 group-hover/banner-wrapper:opacity-100 shadow-xl active:scale-95">
            <i class="fa-solid fa-chevron-right text-sm"></i>
        </button>

        <!-- Dots Indicator Navigation -->
        <div id="banner-dots-container" class="flex items-center justify-center gap-1.5 mt-2">
            ${appData.banners.map((_, idx) => `
                <button onclick="window.scrollToBanner(${idx})" type="button" aria-label="Slide ${idx+1}" class="banner-dot-item ${idx === 0 ? 'h-2.5 rounded-full transition-all duration-300 bg-[var(--color-primary)] w-7 shadow-sm' : 'w-2.5 h-2.5 rounded-full transition-all duration-300 bg-slate-300 dark:bg-slate-700 hover:bg-slate-400'}" data-index="${idx}"></button>
            `).join('')}
        </div>
        ` : ''}
    </div>` : '';

    setH('dynamic-banners-container', bHTML);
    setTimeout(startBannerAutoSlide, 500);

    // --- RENDER VOUCHERS PROMO ---
    const activeVouchers = (appData.vouchers || []).filter(v => v.isShow === 'true' || v.isShow === true);
    const vC = el('dynamic-vouchers-container');
    if (activeVouchers.length > 0 && vC) {
        vC.classList.remove('hidden');
        let vHTML = `
        <div class="flex items-center justify-between mb-4">
            <h3 class="font-bold text-slate-800 dark:text-white text-sm sm:text-base tracking-tight flex items-center gap-2">
                <div class="w-8 h-8 rounded-xl bg-[var(--color-primary)] flex items-center justify-center text-white shadow-sm">
                    <i class="fa-solid fa-ticket-simple text-sm -rotate-45"></i>
                </div> VOUCHER TOKO
            </h3>
        </div>
        <div class="flex gap-4 overflow-x-auto hide-scrollbar snap-x pb-6 pt-2">
            ${activeVouchers.map((v) => {
                let desc = v.type === 'shipping_free' ? 'Gratis Ongkir' : (v.type === 'percent' ? `Diskon ${esc(String(parseFloat(v.value)||0))}%` : `Diskon ${fCur(v.value)}`);
                let terms = [];
                if(v.minPurchase > 0) terms.push(`Min. Blj ${fCur(v.minPurchase)}`);
                if(v.maxDiscount > 0) terms.push(`Maks. ptg ${fCur(v.maxDiscount)}`);
                if(v.targetProduct) terms.push(`Produk Khusus`);
                let termsStr = terms.length > 0 ? esc(terms.join(' • ')) : 'Tanpa minimal belanja';
                
                return `
                <div class="w-[280px] sm:w-[320px] shrink-0 snap-start relative group cursor-pointer active:scale-95 transition-all duration-300" onclick="copyVoucher('${esc(v.code)}')">
                    <div class="w-full h-[110px] bg-[var(--color-primary)] rounded-[1.25rem] shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex relative overflow-hidden border border-white/20 text-white">
                        <!-- Left/Right Ticket Punch Holes (Biting into the sides) -->
                        <div class="absolute -top-2.5 right-[28%] w-5 h-5 rounded-full bg-[#f1f5f9] dark:bg-[#0b1121] border-b border-white/10 z-20 pointer-events-none transform translate-x-1/2 transition-colors duration-400"></div>
                        <div class="absolute -bottom-2.5 right-[28%] w-5 h-5 rounded-full bg-[#f1f5f9] dark:bg-[#0b1121] border-t border-white/10 z-20 pointer-events-none transform translate-x-1/2 transition-colors duration-400"></div>
                        
                        <!-- Main Details (Left Side) -->
                        <div class="flex-1 px-5 py-3 flex flex-col justify-center relative z-10">
                            <h4 class="font-extrabold text-white text-base leading-tight mb-1 drop-shadow-sm line-clamp-1">${desc}</h4>
                            <p class="text-[8px] sm:text-[9px] font-bold text-white/90 flex items-center gap-1.5 mb-2.5 uppercase tracking-wider"><i class="fa-solid fa-circle-info text-white/70"></i> ${termsStr}</p>
                            <div class="inline-flex">
                                <span class="bg-black/35 text-white text-[10px] sm:text-xs font-bold px-3 py-1.5 rounded-xl uppercase tracking-widest border border-white/20 shadow-inner flex items-center gap-2 font-mono">
                                    <i class="fa-solid fa-ticket text-amber-300"></i> ${esc(v.code)}
                                </span>
                            </div>
                        </div>
                        
                        <!-- Divider Line -->
                        <div class="w-0 border-l-[2px] border-dashed border-white/30 relative z-10 my-3"></div>
                        
                        <!-- Action Area (Right Side) -->
                        <div class="w-[28%] flex flex-col items-center justify-center relative z-10 bg-black/15 group-hover:bg-black/25 transition-all duration-300">
                            <div class="w-9 h-9 rounded-full bg-white text-[var(--color-primary)] font-bold flex items-center justify-center mb-1.5 shadow-sm group-hover:scale-110 transition-all duration-300">
                                <i class="fa-regular fa-copy text-sm"></i>
                            </div>
                            <span class="text-[9px] font-bold uppercase tracking-wider text-white drop-shadow-sm group-hover:scale-105 transition-transform">Salin</span>
                        </div>
                    </div>
                </div>`;
            }).join('')}
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
    
    setH('dynamic-categories-container', cLHorizontal.map(c => {
        const isSel = aCat === c.name; const nameSafe = decodeURIComponent(encodeURIComponent(c.name).replace(/'/g,"%27"));
        if(appData.store.categoryStyle === 'text' || !appData.store.categoryStyle) {
            return `<div onclick="filterCategory('${nameSafe}')" class="cursor-pointer shrink-0 snap-start group py-1"><div class="px-5 py-2.5 rounded-[1.25rem] border-2 transition-all duration-300 flex items-center gap-3 ${isSel ? 'bg-[var(--color-primary)] border-transparent text-white shadow-md' : 'bg-white dark:bg-slate-800 border-slate-100 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:border-[var(--color-primary)] hover:shadow-md hover:-translate-y-1'}"><div class="w-6 h-6 rounded-full flex items-center justify-center ${isSel ? 'bg-white/20 text-white shadow-inner' : 'bg-slate-50 dark:bg-slate-700 text-slate-400 group-hover:bg-[var(--color-primary-light)] group-hover:text-[var(--color-primary)]'} transition-all duration-300"><i class="fa-solid fa-layer-group text-[10px]"></i></div><span class="font-bold text-[11px] sm:text-xs uppercase tracking-widest pr-2">${esc(c.name)}</span></div></div>`;
        } else {
            return `<div onclick="filterCategory('${nameSafe}')" class="flex flex-col items-center gap-3 cursor-pointer shrink-0 w-[80px] sm:w-[95px] group snap-start py-1"><div class="relative w-16 h-16 sm:w-[72px] sm:h-[72px] rounded-[1.25rem] bg-slate-50 dark:bg-slate-800 flex items-center justify-center p-2 transition-all duration-300 ${isSel ? 'bg-[var(--color-primary-light)] border-2 border-[var(--color-primary)] shadow-glow dark:bg-[var(--color-primary-dark)]/20' : 'border border-slate-200 dark:border-slate-700 shadow-sm group-hover:border-[var(--color-primary)] group-hover:shadow-lg group-hover:-translate-y-1.5'} overflow-hidden"><img loading="lazy" src="${esc(getOptImg(c.img, 'w150-rw'))}" alt="${esc(c.name)}" onerror="this.onerror=null;this.src='https://placehold.co/150/10b981/ffffff?text=Cat'" class="w-full h-full object-cover rounded-xl transition-transform duration-500 group-hover:scale-110"></div><span class="text-[9px] sm:text-[10px] text-center w-full line-clamp-2 leading-tight px-1 ${isSel ? 'font-bold text-[var(--color-primary)]' : 'font-bold text-slate-600 dark:text-slate-300 group-hover:text-[var(--color-primary)]'} uppercase tracking-widest transition-colors">${esc(c.name)}</span></div>`;
        }
    }).join(''));
    
    const bLHorizontal = [...(appData.brands || [])];
    const bLModal = [{name:'Semua Merek', img:appData.store.allBrandsIcon||'https://placehold.co/150/10b981/ffffff?text=Semua+Merek'}, ...(appData.brands || [])];
    
    setH('dynamic-brands-container', bLHorizontal.map(b => {
        const isSel = aBrand === b.name; const nameSafe = decodeURIComponent(encodeURIComponent(b.name).replace(/'/g,"%27"));
        if(appData.store.brandStyle === 'text') {
            return `<div onclick="filterBrand('${nameSafe}')" class="cursor-pointer shrink-0 snap-start group py-1"><div class="px-5 py-2.5 rounded-[1.25rem] border-2 transition-all duration-300 flex items-center gap-3 ${isSel ? 'bg-[var(--color-primary)] border-transparent text-white shadow-sm' : 'bg-white dark:bg-slate-800 border-slate-100 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:border-[var(--color-primary)]/40 hover:shadow-md hover:-translate-y-1'}"><div class="w-6 h-6 rounded-full flex items-center justify-center ${isSel ? 'bg-white/20 text-white shadow-inner' : 'bg-slate-50 dark:bg-slate-700 text-slate-400 group-hover:bg-[rgba(var(--color-primary-rgb),0.08)] group-hover:text-[var(--color-primary)]'} transition-all duration-300"><i class="fa-solid fa-copyright text-[10px]"></i></div><span class="font-bold text-[11px] sm:text-xs uppercase tracking-widest pr-2">${esc(b.name)}</span></div></div>`;
        } else {
            return `<div onclick="filterBrand('${nameSafe}')" class="flex flex-col items-center gap-3 cursor-pointer shrink-0 w-[75px] sm:w-[85px] group snap-start py-1"><div class="relative w-16 h-16 sm:w-[68px] sm:h-[68px] rounded-2xl bg-white flex items-center justify-center overflow-hidden p-2 transition-all duration-500 ${isSel ? 'ring-4 ring-[var(--color-primary)] ring-offset-2 ring-offset-slate-50 dark:ring-offset-slate-800 shadow-md shadow-[rgba(var(--color-primary-rgb),0.25)]' : 'border border-slate-200 dark:border-slate-700 shadow-sm group-hover:border-[var(--color-primary)]/50 group-hover:shadow-md group-hover:-translate-y-1.5'}"><img loading="lazy" src="${esc(getOptImg(b.img, 'w150-rw'))}" alt="${esc(b.name)}" onerror="this.onerror=null;this.src='https://placehold.co/150/10b981/ffffff?text=Brand'" class="w-full h-full object-contain drop-shadow-sm transition-transform duration-500 group-hover:scale-110"></div><span class="text-[9px] sm:text-[10px] text-center w-full line-clamp-2 leading-tight px-1 ${isSel ? 'font-bold text-[var(--color-primary)]' : 'font-bold text-slate-600 dark:text-slate-300 group-hover:text-[var(--color-primary)]'} uppercase tracking-widest transition-colors">${esc(b.name)}</span></div>`;
        }
    }).join(''));
    
    setH('modal-brand-grid', bLModal.map(b => {
        const isSel = aBrand === b.name; const nameSafe = decodeURIComponent(encodeURIComponent(b.name).replace(/'/g,"%27"));
        return `<button onclick="filterBrand('${nameSafe}'); closeBrandModal();" class="flex flex-col items-center gap-3 p-4 rounded-[1.25rem] border ${isSel?'border-[var(--color-primary)] bg-[rgba(var(--color-primary-rgb),0.07)] dark:bg-[rgba(var(--color-primary-rgb),0.12)] shadow-sm':'border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:border-[var(--color-primary)]/40 hover:shadow-sm'} transition-all active:scale-[0.96]"><div class="w-14 h-14 rounded-2xl flex items-center justify-center bg-white border border-slate-100 dark:border-slate-600 shadow-inner overflow-hidden p-1.5"><img loading="lazy" src="${esc(getOptImg(b.img, 'w150-rw'))}" alt="${esc(b.name)}" class="w-full h-full object-contain" onerror="this.src='https://placehold.co/100?text=Brand'"></div> <span class="text-[10px] sm:text-xs font-bold ${isSel?'text-[var(--color-primary)]':'text-slate-700 dark:text-slate-300'} text-center leading-tight line-clamp-2 uppercase tracking-widest">${esc(b.name)}</span></button>`;
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
