/**
 * ============================================================
 * MODUL LOYALITAS MEMBER & REWARD (DIGITAL VIP LOYALTY CARD)
 * Mengatur katalog hadiah, saldo poin pelanggan, kartu member digital
 * 3D interaktif (Apple/Google Wallet style), deteksi checkout, dan penukaran reward.
 * ============================================================
 */

import { appData, currentMember, setCurrentMember, selectedReward, setSelectedReward } from '../../core/state.js';
import { el, show, hide, getV, setH, esc, ensureScriptLoaded } from '../../core/utils.js';
import { db } from '../../config/firebase.js';

const memberCache = new Map();
const MEMBER_CACHE_TTL = 3 * 60 * 1000; // 3 menit cache poin/member
const OFFICIAL_LOGO_URL = 'https://lh3.googleusercontent.com/d/1KHwsV5sK6aAH3-eP_vTJA4tE5MyRukLo';

/**
 * Hapus cache member agar data poin selalu terbaru setelah transaksi
 */
export const invalidateMemberCache = (phone) => {
    if (!phone) {
        memberCache.clear();
        return;
    }
    const clean = phone.toString().replace(/\D/g, '');
    let w1 = clean;
    let w2 = clean.startsWith('0') ? '62' + clean.substring(1) : (clean.startsWith('62') ? clean : '62' + clean);
    let w3 = clean.startsWith('62') ? '0' + clean.substring(2) : clean;
    memberCache.delete(clean);
    memberCache.delete(w1);
    memberCache.delete(w2);
    memberCache.delete(w3);
};

/**
 * Rekonsiliasi poin otomatis dari riwayat pesanan lokal (myOrders) jika data Firestore sempat tertunda / 0
 */
export const reconcilePointsFromOrders = async (phone, custName = '') => {
    try {
        let clean = (phone || '').toString().replace(/\D/g, '');
        if (clean.startsWith('0')) clean = '62' + clean.substring(1);
        else if (!clean.startsWith('62')) clean = '62' + clean;
        if (!clean || clean.length < 9) return null;

        let orders = [];
        try {
            const rawOrders = localStorage.getItem('freshmart_my_orders');
            if (rawOrders) orders = JSON.parse(rawOrders) || [];
        } catch(e) {}

        if (!orders.length) return null;

        // Cari poin tertinggi / terbaru dari riwayat pesanan
        let calculatedPoints = 0;
        const latestOrderWithPoints = orders.find(o => o.finalMemberPoints !== undefined && o.finalMemberPoints !== null);
        if (latestOrderWithPoints) {
            calculatedPoints = Math.max(0, parseFloat(latestOrderWithPoints.finalMemberPoints) || 0);
        } else {
            calculatedPoints = orders.reduce((acc, o) => acc + (parseFloat(o.pointsEarned) || 0), 0);
        }

        if (calculatedPoints <= 0) return null;

        const custRef = db.collection("freshmart").doc("cms_data").collection("customers").doc(clean);
        const existingDoc = await custRef.get();
        if (!existingDoc.exists) {
            // Pelanggan Umum: Belum didaftarkan oleh Admin, JANGAN buat akun member otomatis!
            return null;
        }

        const nameToUse = custName || (currentMember && currentMember.name) || existingDoc.data().name || 'Pelanggan Setia';
        
        const updateData = {
            id: clean,
            phone: clean,
            name: nameToUse,
            points: calculatedPoints,
            updatedAt: new Date().toISOString(),
            lastOrderAt: new Date().toISOString()
        };

        try {
            await custRef.set(updateData, { merge: true });
        } catch (e) {
            console.warn('[reconcilePointsFromOrders] Firestore set error:', e);
        }
        
        setCurrentMember(updateData);
        try {
            localStorage.setItem('freshmart_current_member', JSON.stringify(updateData));
            localStorage.setItem('freshmart_member_wa', clean);
        } catch(e) {}
        memberCache.set(clean, { data: updateData, timestamp: Date.now() });

        const mBody = document.getElementById('member-modal-body');
        if (mBody) rMemberModalBody();

        return updateData;
    } catch(err) {
        console.warn('[reconcilePointsFromOrders] Error:', err);
        return null;
    }
};

/**
 * Kalkulasi tingkatan (Tier) member berdasarkan saldo poin
 */
export const getMemberTier = (pts = 0) => {
    const p = Math.max(0, parseFloat(pts) || 0);
    if (p >= 1000) {
        return {
            level: 4,
            name: 'PLATINUM VIP',
            badge: '💎 PLATINUM VIP',
            icon: 'fa-gem',
            gradient: 'from-slate-950 via-zinc-900 to-neutral-950 border-amber-400/40 text-amber-200',
            cardBg: 'linear-gradient(135deg, #090d16 0%, #171f30 45%, #0d1322 75%, #050811 100%)',
            accentBg: 'bg-amber-400/20',
            accentText: 'text-amber-300',
            accentBorder: 'border-amber-400/40',
            chipBorder: '#f59e0b',
            foilClass: 'gold-foil-text',
            nextTier: null,
            ptsNeeded: 0,
            progress: 100,
            perks: [
                'Cashback & Poin Belanja Maksimal (2x Lipat)',
                'Akses Prioritas Antrean Kasir & Pengiriman',
                'Klaim Semua Hadiah Katalog VIP',
                'Layanan Konsultasi Khusus via WhatsApp'
            ]
        };
    } else if (p >= 500) {
        return {
            level: 3,
            name: 'GOLD MEMBER',
            badge: '🥇 GOLD MEMBER',
            icon: 'fa-crown',
            gradient: 'from-amber-600 via-yellow-600 to-amber-700 border-yellow-300/40 text-yellow-100',
            cardBg: 'linear-gradient(135deg, #78350f 0%, #b45309 35%, #d97706 70%, #92400e 100%)',
            accentBg: 'bg-yellow-400/20',
            accentText: 'text-amber-200',
            accentBorder: 'border-yellow-300/40',
            chipBorder: '#fde047',
            foilClass: 'gold-foil-text',
            nextTier: 'Platinum VIP',
            ptsNeeded: 1000 - p,
            progress: Math.min(100, Math.round(((p - 500) / 500) * 100)),
            perks: [
                'Diskon & Promo Spesial Member Gold',
                'Kumpulkan Poin di Setiap Transaksi',
                'Tukar Hadiah Menarik dari Katalog',
                'Prioritas Penyiapan Pesanan'
            ]
        };
    } else if (p >= 100) {
        return {
            level: 2,
            name: 'SILVER MEMBER',
            badge: '🥈 SILVER MEMBER',
            icon: 'fa-medal',
            gradient: 'from-slate-700 via-slate-600 to-slate-800 border-slate-300/40 text-slate-100',
            cardBg: 'linear-gradient(135deg, #1e293b 0%, #334155 40%, #475569 70%, #0f172a 100%)',
            accentBg: 'bg-slate-200/20',
            accentText: 'text-slate-100',
            accentBorder: 'border-slate-300/40',
            chipBorder: '#cbd5e1',
            foilClass: 'silver-foil-text',
            nextTier: 'Gold Member',
            ptsNeeded: 500 - p,
            progress: Math.min(100, Math.round(((p - 100) / 400) * 100)),
            perks: [
                'Kumpulkan Poin di Setiap Transaksi',
                'Tukar Hadiah Langsung Tanpa Undian',
                'Penawaran Diskon Tertentu'
            ]
        };
    } else {
        return {
            level: 1,
            name: 'BRONZE MEMBER',
            badge: '🥉 BRONZE MEMBER',
            icon: 'fa-award',
            gradient: 'from-stone-800 via-amber-950 to-stone-900 border-orange-400/30 text-orange-200',
            cardBg: 'linear-gradient(135deg, #381a10 0%, #632917 40%, #7c2d12 70%, #292524 100%)',
            accentBg: 'bg-orange-500/20',
            accentText: 'text-orange-200',
            accentBorder: 'border-orange-400/40',
            chipBorder: '#fb923c',
            foilClass: 'bronze-foil-text',
            nextTier: 'Silver Member',
            ptsNeeded: 100 - p,
            progress: Math.min(100, Math.round((p / 100) * 100)),
            perks: [
                'Kumpulkan Poin di Setiap Transaksi Belanja',
                'Akses Penuh ke Katalog Hadiah Toko'
            ]
        };
    }
};

/**
 * Format nomor telepon menjadi nomor kartu VIP (Format: PUTRI • 8123 • 4567 • 8901)
 */
export const formatMemberCardNumber = (phone) => {
    let clean = (phone || '').toString().replace(/\D/g, '');
    if (clean.startsWith('62')) clean = clean.substring(2);
    else if (clean.startsWith('0')) clean = clean.substring(1);
    
    // Pastikan panjang minimal 8 digit
    while (clean.length < 8) clean += '0';
    
    // Pecah ke kelompok 4 digit
    const parts = [];
    for (let i = 0; i < clean.length && parts.length < 3; i += 4) {
        parts.push(clean.substring(i, i + 4));
    }
    return `PUTRI • ${parts.join(' • ')}`;
};

/**
 * Generate Barcode SVG Vector untuk kasir fisik (Code128 style)
 */
export const generateBarcodeSVG = (code) => {
    const clean = String(code || '812345678901').replace(/\D/g, '');
    let bars = '';
    let x = 8;
    
    // Start guard
    bars += `<rect x="${x}" y="3" width="2.5" height="34" fill="#0f172a"/>`; x += 4;
    bars += `<rect x="${x}" y="3" width="1.5" height="34" fill="#0f172a"/>`; x += 3.5;
    bars += `<rect x="${x}" y="3" width="3" height="34" fill="#0f172a"/>`; x += 5;
    
    // Encode digits into varying bar pattern
    for (let i = 0; i < clean.length; i++) {
        const d = parseInt(clean[i], 10) || 0;
        const w1 = ((d % 3) + 1) * 1.3;
        const w2 = (((d + 2) % 4) + 1) * 1.1;
        const gap = ((d % 2) + 1) * 1.8;
        bars += `<rect x="${x}" y="3" width="${w1}" height="34" fill="#0f172a"/>`;
        x += w1 + gap;
        bars += `<rect x="${x}" y="3" width="${w2}" height="34" fill="#0f172a"/>`;
        x += w2 + 2;
    }
    
    // Stop guard
    bars += `<rect x="${x}" y="3" width="3" height="34" fill="#0f172a"/>`; x += 5;
    bars += `<rect x="${x}" y="3" width="1.5" height="34" fill="#0f172a"/>`; x += 3.5;
    bars += `<rect x="${x}" y="3" width="2.5" height="34" fill="#0f172a"/>`; x += 4;
    
    return `
    <svg class="w-full h-11 bg-white rounded-lg px-2 py-1 shadow-inner border border-slate-200" viewBox="0 0 ${Math.max(x + 10, 240)} 40" xmlns="http://www.w3.org/2000/svg">
        ${bars}
    </svg>`;
};

/**
 * Render Kartu Member Digital 3D (Sisi Depan & Sisi Belakang)
 */
export const renderDigitalMemberCard = (mData) => {
    const pts = parseFloat(mData?.points) || 0;
    const tier = getMemberTier(pts);
    const storeName = (appData.store?.name || 'Toko Putri').toUpperCase();
    const logoUrl = appData.store?.logo && appData.store.logo !== 'fa-store' ? appData.store.logo : OFFICIAL_LOGO_URL;
    const custName = (mData?.name || 'PELANGGAN SETIA').toUpperCase();
    const rawPhone = (mData?.phone || '81234567890').toString().replace(/\D/g, '');
    const cardNo = formatMemberCardNumber(rawPhone);
    const csPhone = appData.store?.wa || rawPhone;

    return `
    <div class="member-card-scene w-full max-w-[390px] mx-auto select-none my-1">
        <div id="member-card-inner" class="member-card-inner relative w-full aspect-[1.586/1] cursor-pointer rounded-2xl sm:rounded-3xl border border-black/10 dark:border-white/10" onclick="flipMemberCard()" title="Klik untuk membalik kartu">
            
            <!-- ================= SISI DEPAN (FRONT CARD) ================= -->
            <div id="member-card-front-export" class="member-card-front rounded-2xl sm:rounded-3xl overflow-hidden p-4 sm:p-5 flex flex-col justify-between text-white border border-white/20" style="background: ${tier.cardBg};">
                
                <!-- Ambient luxury light reflections (clean subtle overlay, zero blur spilling) -->
                <div class="absolute inset-0 bg-gradient-to-tr from-black/25 via-transparent to-white/15 pointer-events-none"></div>

                <!-- Header Kartu: Logo Toko, Nama Toko, & Gelombang Contactless -->
                <div class="relative z-10 flex items-center justify-between">
                    <div class="flex items-center gap-2.5 min-w-0">
                        <div class="w-8 h-8 rounded-xl bg-white/95 p-1 flex items-center justify-center shadow-2xs shrink-0 border border-white/40">
                            <img src="${esc(logoUrl)}" alt="Logo" class="w-full h-full object-contain" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">
                            <i class="fa-solid fa-store text-slate-800 text-xs hidden"></i>
                        </div>
                        <div class="min-w-0">
                            <h4 class="text-[11px] sm:text-xs font-black tracking-wider text-white uppercase truncate">${esc(storeName)}</h4>
                            <p class="text-[8px] sm:text-[9px] font-bold tracking-[0.2em] text-white/80 uppercase">VIP Loyalty Pass</p>
                        </div>
                    </div>
                    <!-- Contactless NFC & Tier Pill -->
                    <div class="flex items-center gap-2 shrink-0">
                        <span class="text-[8px] sm:text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full ${tier.accentBg} ${tier.accentText} border ${tier.accentBorder}">
                            ${tier.badge}
                        </span>
                        <div class="opacity-80 flex items-center" title="Contactless Member">
                            <svg class="w-4 h-4 text-white/90" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
                                <path d="M8.5 16.5a5 5 0 0 1 0-7"/>
                                <path d="M12 19a8.5 8.5 0 0 1 0-12"/>
                                <path d="M15.5 21.5a12 12 0 0 1 0-17"/>
                            </svg>
                        </div>
                    </div>
                </div>

                <!-- Bagian Tengah: Smart Chip EMV Emas & Hologram Seal -->
                <div class="relative z-10 flex items-center justify-between my-auto py-1">
                    <!-- EMV Smart Chip (SVG) -->
                    <div class="flex items-center gap-3">
                        <svg class="w-11 h-8 rounded-md border border-amber-300/60 bg-gradient-to-br from-amber-200 via-amber-400 to-yellow-600 p-0.5 shrink-0" viewBox="0 0 50 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="1" y="1" width="48" height="38" rx="5" fill="url(#chipGrad)" stroke="#b45309" stroke-width="0.8"/>
                            <path d="M1 13H18M1 27H18M32 13H49M32 27H49M18 1V39M32 1V39M18 20H32" stroke="#78350f" stroke-width="1" stroke-linecap="round"/>
                            <rect x="21" y="14" width="8" height="12" rx="2" fill="#d97706" stroke="#78350f" stroke-width="0.8"/>
                            <defs>
                                <linearGradient id="chipGrad" x1="0" y1="0" x2="50" y2="40" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#fef08a"/>
                                    <stop offset="0.5" stop-color="#f59e0b"/>
                                    <stop offset="1" stop-color="#b45309"/>
                                </linearGradient>
                            </defs>
                        </svg>
                        <div class="w-7 h-7 rounded-full card-hologram-seal opacity-75 border border-white/30 hidden sm:block" title="Security Seal"></div>
                    </div>
                    <!-- Poin Saldo Member -->
                    <div class="text-right">
                        <p class="text-[8px] sm:text-[9px] font-bold tracking-widest text-white/70 uppercase">Saldo Poin</p>
                        <div class="flex items-center justify-end gap-1.5 mt-0.5">
                            <i class="fa-solid fa-star text-amber-300 text-xs sm:text-sm animate-pulse"></i>
                            <span class="text-base sm:text-xl font-black tracking-tight text-white">${pts}</span>
                            <span class="text-[9px] font-bold text-white/80">PTS</span>
                        </div>
                    </div>
                </div>

                <!-- Bagian Bawah: Nomor Kartu & Nama Pelanggan Embossed -->
                <div class="relative z-10">
                    <p class="text-[11px] sm:text-[13px] embossed-text text-white/95 font-mono tracking-[0.18em] mb-1.5">${esc(cardNo)}</p>
                    <div class="flex items-end justify-between gap-2">
                        <div class="min-w-0 flex-1">
                            <p class="text-[7px] sm:text-[8px] font-bold tracking-widest text-white/70 uppercase leading-none mb-0.5">Nama Pelanggan</p>
                            <p class="text-[11px] sm:text-[13px] font-bold text-white tracking-wider truncate uppercase">${esc(custName)}</p>
                        </div>
                        <div class="text-right shrink-0">
                            <p class="text-[7px] sm:text-[8px] font-bold tracking-widest text-white/70 uppercase leading-none mb-0.5">Status Member</p>
                            <p class="text-[9px] sm:text-[10px] font-extrabold text-emerald-300 tracking-wider flex items-center justify-end gap-1">
                                <i class="fa-solid fa-circle-check text-[8px]"></i> AKTIF
                            </p>
                        </div>
                    </div>
                </div>

                <!-- Petunjuk Balik Kartu -->
                <div class="absolute bottom-1 right-3 text-[7px] text-white/40 tracking-wider font-semibold pointer-events-none flex items-center gap-1">
                    <i class="fa-solid fa-repeat text-[6px]"></i> Klik untuk balik
                </div>
            </div>

            <!-- ================= SISI BELAKANG (BACK CARD) ================= -->
            <div class="member-card-back rounded-2xl sm:rounded-3xl overflow-hidden flex flex-col justify-between text-slate-800 border border-slate-700/60 bg-[#0f172a]">
                
                <!-- Pita Magnetik Hitam (Magnetic Stripe) -->
                <div class="w-full h-8 sm:h-10 bg-slate-950 mt-4 border-y border-white/10 relative">
                    <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
                </div>

                <!-- Signature Strip & Keamanan -->
                <div class="px-4 sm:px-5 py-1">
                    <div class="flex items-center gap-2">
                        <div class="flex-1 h-6 bg-white/90 rounded border border-slate-300 px-2 flex items-center justify-between">
                            <span class="text-[9px] font-mono font-bold text-slate-500 italic truncate">${esc(custName)}</span>
                            <span class="text-[8px] font-mono font-black text-slate-800 tracking-widest">VERIFIED</span>
                        </div>
                        <div class="w-10 h-6 bg-amber-400 text-slate-950 font-black text-[9px] rounded flex items-center justify-center tracking-widest">
                            VIP
                        </div>
                    </div>

                    <!-- Barcode untuk Scanner Kasir Toko -->
                    <div class="mt-2 text-center">
                        <p class="text-[8px] font-bold text-slate-400 uppercase tracking-wider mb-1 flex items-center justify-center gap-1">
                            <i class="fa-solid fa-barcode text-[var(--color-primary)]"></i> Scan Barcode di Kasir POS Toko:
                        </p>
                        ${generateBarcodeSVG(rawPhone)}
                        <p class="text-[9px] font-mono font-bold tracking-[0.2em] text-slate-300 mt-1">*${esc(rawPhone)}*</p>
                    </div>
                </div>

                <!-- Footer Sisi Belakang: Kontak & Info -->
                <div class="p-3 sm:p-4 bg-slate-950/80 border-t border-white/10 text-center">
                    <p class="text-[7.5px] sm:text-[8px] text-slate-400 leading-tight">
                        Kartu member digital resmi <b class="text-white">${esc(storeName)}</b>. Tunjukkan saat transaksi untuk poin belanja.
                    </p>
                    <p class="text-[8px] font-bold text-emerald-400 mt-0.5">
                        <i class="fa-brands fa-whatsapp mr-1"></i>CS: +${esc(csPhone)}
                    </p>
                </div>
            </div>

        </div>
    </div>`;
};

/**
 * Balik kartu member secara 3D (Animasi Flip)
 */
export const flipMemberCard = () => {
    const inner = document.getElementById('member-card-inner');
    if (!inner) return;
    inner.classList.toggle('is-flipped');
};

/**
 * Download kartu member resolusi tinggi (PNG HD) ke galeri HP / PC
 */
export const downloadMemberCard = async () => {
    // 1. Pastikan kartu menghadap ke depan sebelum capture
    const inner = document.getElementById('member-card-inner');
    if (inner && inner.classList.contains('is-flipped')) {
        inner.classList.remove('is-flipped');
        await new Promise(r => setTimeout(r, 450));
    }

    const cardEl = document.getElementById('member-card-front-export');
    if (!cardEl) return;

    if (typeof window.showToast === 'function') window.showToast("Menyiapkan file gambar Kartu Member HD...");

    try {
        if (typeof window.ensureScriptLoaded === 'function') {
            await window.ensureScriptLoaded(
                'https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js',
                () => typeof html2canvas !== 'undefined'
            );
        }

        if (typeof html2canvas === 'undefined') {
            throw new Error('Modul html2canvas belum siap dimuat.');
        }

        const canvas = await html2canvas(cardEl, {
            scale: 3, // Kualitas super tajam untuk layar retina/HP
            useCORS: true,
            allowTaint: true,
            backgroundColor: null
        });

        const custName = (currentMember?.name || 'Pelanggan').replace(/[^a-zA-Z0-9]/g, '_');
        const fileName = `Kartu_Member_TokoPutri_${custName}.png`;
        const dataUrl = canvas.toDataURL('image/png', 1.0);

        // Jika berjalan di dalam aplikasi Android APK, panggil bridge native
        if (window.AndroidNativeApp && typeof window.AndroidNativeApp.saveOrShareFile === 'function') {
            window.AndroidNativeApp.saveOrShareFile(dataUrl, fileName, 'image/png');
        } else {
            const link = document.createElement('a');
            link.download = fileName;
            link.href = dataUrl;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }

        if (typeof window.showToast === 'function') {
            window.showToast("Kartu Member Berhasil Disimpan ke Galeri! 🎉");
        }
    } catch (err) {
        console.error("Gagal menyimpan kartu member:", err);
        if (typeof window.showToast === 'function') {
            window.showToast("Gagal menyimpan kartu. Silakan coba kembali.");
        }
    }
};

/**
 * Render slider katalog hadiah di halaman depan toko
 */
export const renderRewardCatalog = () => {
    const rcC = el('reward-catalog-container');
    if (!rcC) return;
    
    const isShow = appData.store.showRewardCatalog !== false && appData.store.showRewardCatalog !== 'false';
    
    // Pastikan listener hadiah realtime selalu terpasang jika katalog diaktifkan admin
    if (isShow && typeof window.attachRewardsRealtime === 'function' && !window.unsubRewardsRealtime) {
        window.attachRewardsRealtime();
    }

    const activeRewards = (appData.rewards || []).filter(r => r.isActive !== 'false' && r.isActive !== false);
    
    if (!isShow || activeRewards.length === 0) {
        rcC.classList.add('hidden');
        rcC.innerHTML = '';
        return;
    }
    
    rcC.classList.remove('hidden');
    let rHTML = `
    <div class="flex items-center justify-between mb-2.5">
        <h3 class="font-bold text-slate-800 dark:text-white text-xs sm:text-sm tracking-tight flex items-center gap-2">
            <div class="w-7 h-7 rounded-lg bg-[var(--color-primary)] flex items-center justify-center text-white shadow-2xs">
                <i class="fa-solid fa-gift text-xs"></i>
            </div> KATALOG HADIAH POIN PELANGGAN
        </h3>
        <button type="button" onclick="if(typeof window.openMemberModal==='function') window.openMemberModal(); else if(typeof window.showToast==='function') window.showToast('Gunakan poin Anda untuk menukar hadiah menarik!');" class="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-lg border border-[var(--color-primary)]/30 text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white transition-all active:scale-95 flex items-center gap-1 cursor-pointer">
            Lihat Kartu Member <i class="fa-solid fa-chevron-right text-[8px]"></i>
        </button>
    </div>
    <div class="flex gap-2.5 sm:gap-3 overflow-x-auto hide-scrollbar snap-x pb-3 pt-1">
        ${activeRewards.map((r) => {
            return `
            <div class="w-[115px] sm:w-[130px] shrink-0 snap-start relative group cursor-pointer active:scale-95 transition-all duration-200" onclick="if(typeof window.openMemberModal==='function') window.openMemberModal(); else if(typeof window.showToast==='function') window.showToast('Tukarkan hadiah ini saat checkout menggunakan poin belanja Anda!');">
                <div class="w-full bg-[var(--color-primary)] rounded-xl shadow-xs hover:shadow-sm hover:-translate-y-0.5 transition-all duration-200 flex flex-col relative overflow-hidden border border-white/20 text-white p-1.5">
                    <div class="absolute -right-3 -top-3 w-16 h-16 bg-white/20 rounded-full blur-lg pointer-events-none"></div>
                    <div class="absolute bottom-8 -left-2.5 w-4 h-4 rounded-full bg-[#f1f5f9] dark:bg-[#0b1121] border-r border-white/20 z-20 pointer-events-none transition-colors duration-300 shadow-inner"></div>
                    <div class="absolute bottom-8 -right-2.5 w-4 h-4 rounded-full bg-[#f1f5f9] dark:bg-[#0b1121] border-l border-white/20 z-20 pointer-events-none transition-colors duration-300 shadow-inner"></div>
                    <div class="absolute bottom-10 left-1.5 right-1.5 border-t border-dashed border-white/30 z-10 pointer-events-none"></div>
                    <div class="w-full aspect-square rounded-lg bg-white flex items-center justify-center overflow-hidden relative shadow-inner z-0 p-1.5">
                        <img loading="lazy" src="${esc(r.img)}" alt="${esc(r.name)}" class="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105" onerror="this.onerror=null;this.src='https://placehold.co/400?text=Hadiah'">
                        <div class="absolute top-1 left-1 bg-rose-500 text-white text-[7px] sm:text-[8px] font-bold px-1.5 py-0.5 rounded-md shadow-2xs uppercase tracking-wider"><i class="fa-solid fa-gift mr-0.5"></i>Gratis</div>
                        <div class="absolute top-1 right-1 bg-[var(--color-primary)] text-white text-[7px] sm:text-[8px] font-bold px-1.5 py-0.5 rounded-md shadow-2xs border border-white/20">${parseFloat(r.pointsCost || r.pointsRequired) || 0} Poin</div>
                    </div>
                    <div class="w-full h-3.5 shrink-0"></div>
                    <div class="h-7 w-full px-0.5 flex flex-col justify-center items-center relative z-0 shrink-0 mb-0.5">
                        <h4 class="text-[9px] sm:text-[10px] font-bold text-white leading-tight line-clamp-2 uppercase tracking-wider text-center drop-shadow-xs">${esc(r.name)}</h4>
                    </div>
                </div>
            </div>`;
        }).join('')}
    </div>`;
    rcC.innerHTML = rHTML;
};

/**
 * Deteksi status keanggotaan member via nomor WhatsApp saat pengisian form checkout
 */
let _memberCheckTimer = null;
export const checkMemberStatus = () => {
    clearTimeout(_memberCheckTimer);
    _memberCheckTimer = setTimeout(async () => {
        const normalizeWA = window.normalizeWA || (num => (num || '').replace(/\D/g, '').replace(/^0/, '62'));
        const waNum = normalizeWA(getV('cust-wa'));
        const banner = el('member-status-banner');
        if (!banner) return;
        
        if (!waNum || waNum.length < 10) { 
            hide(banner); 
            hide('payment-option-tempo'); 
            setCurrentMember(null); 
            setSelectedReward(null); 
            const tempoRadio = document.querySelector('input[name="payment"][value="tempo"]');
            if (tempoRadio && tempoRadio.checked) {
                const fallbackRadio = document.querySelector('input[name="payment"][value="transfer"]') || document.querySelector('input[name="payment"][value="cashier"]');
                if (fallbackRadio) { fallbackRadio.checked = true; if (typeof window.togglePaymentDetails === 'function') window.togglePaymentDetails(); }
            }
            return; 
        }

        const renderCheckoutMiniCard = (mData) => {
            const pts = parseFloat(mData.points) || 0;
            const tier = getMemberTier(pts);
            banner.className = 'mt-3 p-3 sm:p-4 rounded-2xl bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 text-white border border-[rgba(var(--color-primary-rgb),0.35)] shadow-xl relative overflow-hidden flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3';
            banner.innerHTML = `
                <div class="absolute -right-6 -bottom-6 w-28 h-28 bg-[rgba(var(--color-primary-rgb),0.12)] rounded-full blur-xl pointer-events-none"></div>
                <div class="flex items-center gap-3 relative z-10 min-w-0">
                    <div class="w-12 h-10 rounded-xl bg-[rgba(var(--color-primary-rgb),0.15)] border border-[rgba(var(--color-primary-rgb),0.35)] flex items-center justify-center shrink-0 shadow-inner">
                        <i class="fa-solid fa-id-card text-xl text-[var(--color-primary)]"></i>
                    </div>
                    <div class="min-w-0">
                        <div class="flex items-center gap-2 flex-wrap">
                            <span class="text-[9px] font-black uppercase tracking-widest px-2 py-0.5 rounded-full ${tier.accentBg} ${tier.accentText} border ${tier.accentBorder}">${tier.badge}</span>
                            <span class="text-[10px] font-bold text-[var(--color-primary)] flex items-center gap-1"><i class="fa-solid fa-coins text-[9px]"></i>${pts} Poin</span>
                        </div>
                        <p class="text-xs font-bold text-white mt-0.5 truncate flex items-center gap-1.5">
                            <span>${esc(mData.name || 'Pelanggan')}</span>
                            <span class="text-[9px] font-normal text-slate-400">(Member Resmi)</span>
                        </p>
                    </div>
                </div>
                <button type="button" onclick="openMemberModal()" class="relative z-10 w-full sm:w-auto shrink-0 primary-bg hover:opacity-90 text-white text-[10px] font-black uppercase tracking-wider px-3.5 py-2.5 rounded-xl shadow-md active:scale-95 transition-all flex items-center justify-center gap-1.5 cursor-pointer">
                    <i class="fa-solid fa-wallet"></i> Buka Kartu Member
                </button>`;
            show(banner); 
            show('payment-option-tempo');
        };

        // Cek in-memory cache untuk memotong query berulang ke Firestore
        const cached = memberCache.get(waNum);
        if (cached && (Date.now() - cached.timestamp < MEMBER_CACHE_TTL)) {
            if (cached.data) {
                setCurrentMember(cached.data);
                renderCheckoutMiniCard(cached.data);
            } else {
                setCurrentMember(null); 
                setSelectedReward(null); 
                hide(banner); 
                hide('payment-option-tempo');
                const tempoRadio = document.querySelector('input[name="payment"][value="tempo"]');
                if (tempoRadio && tempoRadio.checked) {
                    const fallbackRadio = document.querySelector('input[name="payment"][value="transfer"]') || document.querySelector('input[name="payment"][value="cashier"]');
                    if (fallbackRadio) { fallbackRadio.checked = true; if (typeof window.togglePaymentDetails === 'function') window.togglePaymentDetails(); }
                }
            }
            return;
        }
        
        try {
            const doc = await db.collection("freshmart").doc("cms_data").collection("customers").doc(waNum).get();
            if (doc.exists) {
                const mData = doc.data();
                memberCache.set(waNum, { data: mData, timestamp: Date.now() });
                setCurrentMember(mData);
                renderCheckoutMiniCard(mData);
            } else {
                // Pelanggan Umum: belum tersimpan di database pelanggan oleh Admin
                memberCache.set(waNum, { data: null, timestamp: Date.now() });
                setCurrentMember(null); 
                setSelectedReward(null); 
                hide(banner); 
                hide('payment-option-tempo');
                const tempoRadio = document.querySelector('input[name="payment"][value="tempo"]');
                if (tempoRadio && tempoRadio.checked) {
                    const fallbackRadio = document.querySelector('input[name="payment"][value="transfer"]') || document.querySelector('input[name="payment"][value="cashier"]');
                    if (fallbackRadio) { fallbackRadio.checked = true; if (typeof window.togglePaymentDetails === 'function') window.togglePaymentDetails(); }
                }
            }
        } catch(e) {
            // Diamkan jika gagal query member (non-blocking)
        }
    }, 500);
};

/**
 * Tampilkan modal data member dan kartu loyalitas
 */
export const openMemberModal = () => {
    // 1. Pulihkan sesi member dari localStorage jika belum ada di memory
    if (!currentMember) {
        try {
            const savedMember = localStorage.getItem('freshmart_current_member');
            if (savedMember) {
                const parsed = JSON.parse(savedMember);
                if (parsed && (parsed.id || parsed.phone || parsed.name)) {
                    setCurrentMember(parsed);
                }
            }
        } catch (e) {}
    }

    // 2. Refresh poin terbaru secara live dari Firestore & lakukan rekonsiliasi jika perlu
    const targetWa = currentMember?.phone || currentMember?.id || localStorage.getItem('freshmart_member_wa');
    if (targetWa) {
        let clean = targetWa.toString().replace(/\D/g, '');
        if (clean.startsWith('0')) clean = '62' + clean.substring(1);
        else if (!clean.startsWith('62')) clean = '62' + clean;

        db.collection("freshmart").doc("cms_data").collection("customers").doc(clean).get().then(async (doc) => {
            if (doc.exists) {
                let mData = doc.data();
                if ((parseFloat(mData.points) || 0) === 0) {
                    const rec = await reconcilePointsFromOrders(clean, mData.name);
                    if (rec) mData = rec;
                }
                memberCache.set(clean, { data: mData, timestamp: Date.now() });
                setCurrentMember(mData);
                try {
                    localStorage.setItem('freshmart_current_member', JSON.stringify(mData));
                    localStorage.setItem('freshmart_member_wa', clean);
                } catch(e) {}
                const mBody = document.getElementById('member-modal-body');
                if (mBody) rMemberModalBody();
            } else {
                // Dokumen member tidak ada di database: bukan member resmi
                memberCache.set(clean, { data: null, timestamp: Date.now() });
                setCurrentMember(null);
                try {
                    localStorage.removeItem('freshmart_current_member');
                    localStorage.removeItem('freshmart_member_wa');
                } catch(e) {}
                const mBody = document.getElementById('member-modal-body');
                if (mBody) rMemberModalBody();
            }
        }).catch(() => {});
    }

    if (typeof window.attachRewardsRealtime === 'function' && !window.unsubRewardsRealtime) {
        window.attachRewardsRealtime();
    }
    let m = document.getElementById('member-modal');
    if (!m) {
        m = document.createElement('div');
        m.id = 'member-modal';
        m.className = 'fixed inset-0 z-[115] bg-slate-900/60 flex items-end sm:items-center justify-center p-0 sm:p-5 backdrop-blur-xs';
        m.onclick = (e) => { if (e.target === m) closeMemberModal(); };
        document.body.appendChild(m);
    }
    const isAlreadyOpen = m.style.display !== 'none' && m.style.opacity === '1';
    m.innerHTML = `
        <div class="bg-white dark:bg-slate-900 w-full max-w-lg rounded-t-3xl sm:rounded-3xl max-h-[90vh] flex flex-col shadow-xl border border-slate-200 dark:border-slate-800 overflow-hidden">
            <!-- Header Modal -->
            <div class="p-4 sm:p-5 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center shrink-0 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md">
                <div class="flex items-center gap-2.5">
                    <div class="w-8 h-8 rounded-xl primary-bg flex items-center justify-center text-white shadow-sm shadow-[rgba(var(--color-primary-rgb),0.25)]">
                        <i class="fa-solid fa-id-card text-xs"></i>
                    </div>
                    <div>
                        <h3 class="font-bold text-slate-800 dark:text-white text-sm sm:text-base leading-tight">Kartu Member Digital</h3>
                        <p class="text-[9px] sm:text-[10px] font-semibold text-slate-400">Loyalty Pass &amp; Poin Hadiah Toko Putri</p>
                    </div>
                </div>
                <button onclick="closeMemberModal()" class="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 hover:bg-rose-100 hover:text-rose-500 flex items-center justify-center transition-all cursor-pointer">
                    <i class="fa-solid fa-xmark text-sm"></i>
                </button>
            </div>
            <!-- Body Modal -->
            <div class="p-4 sm:p-6 overflow-y-auto flex-1 space-y-5" id="member-modal-body"></div>
        </div>`;
    rMemberModalBody();
    m.style.opacity = '0'; 
    m.style.display = 'flex';
    requestAnimationFrame(() => { 
        m.style.transition = 'opacity 0.25s ease'; 
        m.style.opacity = '1'; 
    });
    if (!isAlreadyOpen && typeof window.pushModalHistory === 'function') {
        window.pushModalHistory('member');
    }
};

/**
 * Render isi modal member (Kartu digital + Progress tier + Katalog Hadiah)
 */
export const rMemberModalBody = () => {
    const activeRewards = (appData.rewards || []).filter(r => r.isActive !== 'false' && r.isActive !== false);
    const pts = currentMember ? (parseFloat(currentMember.points) || 0) : 0;
    const tier = getMemberTier(pts);
    
    const rewardsHtml = activeRewards.length ? activeRewards.map(r => {
        const stockOk = (parseFloat(r.stock) || 0) > 0;
        const canClaim = currentMember && pts >= (parseFloat(r.pointsCost) || 0) && stockOk;
        const isSelected = selectedReward && selectedReward.id === r.id;
        return `
        <div class="flex items-center gap-3 p-3.5 rounded-2xl border ${isSelected ? 'border-[var(--color-primary)] bg-[rgba(var(--color-primary-rgb),0.06)] dark:bg-[rgba(var(--color-primary-rgb),0.12)] shadow-xs' : 'border-slate-200 dark:border-slate-700/80 bg-slate-50/70 dark:bg-slate-800/40'} transition-all">
            ${r.img ? `<img src="${esc(r.img)}" class="w-14 h-14 rounded-xl object-contain bg-white p-1 border border-slate-200 dark:border-slate-700 shrink-0" onerror="this.style.display='none'" loading="lazy">` : `<div class="w-14 h-14 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-300 shrink-0"><i class="fa-solid fa-gift text-xl"></i></div>`}
            <div class="min-w-0 flex-1">
                <p class="text-xs font-bold text-slate-800 dark:text-white truncate">${esc(r.name)}</p>
                <p class="text-[11px] font-black text-[var(--color-primary)] mt-0.5 flex items-center gap-1">
                    <i class="fa-solid fa-star text-[10px]"></i> ${parseFloat(r.pointsCost) || 0} Poin
                </p>
                ${!stockOk ? `<p class="text-[10px] font-bold text-rose-500 mt-0.5">Stok hadiah habis</p>` : ''}
            </div>
            ${currentMember ? (isSelected
                ? `<button type="button" onclick="deselectReward()" class="shrink-0 bg-rose-500 hover:bg-rose-600 text-white text-[10px] font-bold uppercase px-3 py-2 rounded-xl active:scale-95 transition-all whitespace-nowrap shadow-xs">Batal</button>`
                : `<button type="button" ${canClaim ? '' : 'disabled'} onclick="selectReward(${r.id})" class="shrink-0 ${canClaim ? 'primary-bg hover:opacity-90 text-white active:scale-95 shadow-xs' : 'bg-slate-200 dark:bg-slate-700 text-slate-400 cursor-not-allowed'} text-[10px] font-bold uppercase px-3 py-2 rounded-xl transition-all whitespace-nowrap">Pilih Hadiah</button>`) : `<span class="text-[10px] font-bold text-slate-400 uppercase bg-slate-100 dark:bg-slate-800 px-2.5 py-1.5 rounded-lg">${parseFloat(r.pointsCost) || 0} Poin</span>`}
        </div>`;
    }).join('') : `<p class="text-[11px] font-bold text-slate-400 text-center py-3">Belum ada program hadiah yang tersedia.</p>`;

    if (currentMember) {
        setH('member-modal-body', `
            <!-- KARTU MEMBER DIGITAL (3D INTERAKTIF) -->
            <div>
                ${renderDigitalMemberCard(currentMember)}
                
                <!-- Action Controls: Balik Kartu, Unduh Kartu & Tutup -->
                <div class="flex items-center justify-between gap-2 mt-3 max-w-[390px] mx-auto">
                    <button type="button" onclick="flipMemberCard()" class="flex-1 py-2.5 px-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 text-xs font-bold flex items-center justify-center gap-1.5 hover:bg-slate-50 dark:hover:bg-slate-700 active:scale-95 transition-all shadow-2xs cursor-pointer">
                        <i class="fa-solid fa-repeat text-[11px] text-[var(--color-primary)]"></i> Balik Kartu
                    </button>
                    <button type="button" onclick="downloadMemberCard()" class="flex-1 py-2.5 px-3 rounded-xl primary-bg hover:opacity-95 text-white text-xs font-bold flex items-center justify-center gap-1.5 active:scale-95 transition-all shadow-sm shadow-[rgba(var(--color-primary-rgb),0.25)] cursor-pointer">
                        <i class="fa-solid fa-download text-[11px]"></i> Simpan ke Galeri
                    </button>
                    <button type="button" onclick="closeMemberModal()" class="py-2.5 px-3.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-500 hover:text-slate-800 dark:hover:text-white text-xs font-bold flex items-center justify-center gap-1 active:scale-95 transition-all cursor-pointer" title="Tutup">
                        <i class="fa-solid fa-xmark"></i>
                    </button>
                </div>
                <div class="text-center mt-2">
                    <button type="button" onclick="setCurrentMember(null); try{localStorage.removeItem('freshmart_current_member');localStorage.removeItem('freshmart_member_wa');}catch(e){} rMemberModalBody();" class="text-[10px] text-slate-400 hover:text-[var(--color-primary)] font-semibold transition-colors cursor-pointer">
                        <i class="fa-solid fa-user-pen mr-1"></i>Bukan Anda? Cek nomor WhatsApp lain
                    </button>
                </div>
            </div>

            <!-- TIER STATUS & PROGRESS LEVEL -->
            <div class="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-800/40 space-y-3">
                <div class="flex items-center justify-between">
                    <div>
                        <p class="text-[9px] font-bold text-slate-400 uppercase tracking-wider">Level Keanggotaan</p>
                        <h4 class="text-xs sm:text-sm font-black text-slate-800 dark:text-white flex items-center gap-1.5 mt-0.5">
                            <i class="fa-solid ${tier.icon} text-[var(--color-primary)]"></i> ${tier.name}
                        </h4>
                    </div>
                    <div class="text-right">
                        <p class="text-[9px] font-bold text-slate-400 uppercase tracking-wider">Total Saldo</p>
                        <p class="text-xs sm:text-sm font-black text-[var(--color-primary)] mt-0.5 flex items-center justify-end gap-1"><i class="fa-solid fa-coins text-[11px]"></i> ${pts} Poin</p>
                    </div>
                </div>

                ${tier.nextTier ? `
                <div class="space-y-1.5 pt-1">
                    <div class="flex justify-between text-[10px] font-semibold text-slate-500 dark:text-slate-400">
                        <span>Menuju <b>${tier.nextTier}</b></span>
                        <span class="font-bold text-[var(--color-primary)]">${tier.progress}%</span>
                    </div>
                    <div class="w-full h-2 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden">
                        <div class="h-full rounded-full primary-bg transition-all duration-500" style="width: ${tier.progress}%"></div>
                    </div>
                    <p class="text-[9px] text-slate-500 dark:text-slate-400 font-medium">
                        Kumpulkan <b>${tier.ptsNeeded} poin lagi</b> untuk otomatis naik tingkat ke <b>${tier.nextTier}</b>!
                    </p>
                </div>` : `
                <p class="text-[10px] text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-1">
                    <i class="fa-solid fa-crown"></i> Anda telah mencapai level member tertinggi Toko Putri!
                </p>`}

                <!-- Member Privileges Pill -->
                <div class="pt-2 border-t border-slate-200/60 dark:border-slate-700/60">
                    <p class="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-1.5">Hak Istimewa Member Anda:</p>
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                        ${tier.perks.map(p => `
                        <div class="flex items-center gap-1.5 text-[10px] font-semibold text-slate-700 dark:text-slate-300">
                            <i class="fa-solid fa-check text-emerald-500 text-[9px] shrink-0"></i>
                            <span class="truncate">${esc(p)}</span>
                        </div>`).join('')}
                    </div>
                </div>
            </div>

            <!-- KATALOG REWARD / PENUKARAN HADIAH -->
            <div>
                <p class="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-2.5">Katalog Hadiah yang Dapat Ditukar</p>
                <div class="space-y-2.5">${rewardsHtml}</div>
            </div>

            ${selectedReward ? `<div class="bg-[rgba(var(--color-primary-rgb),0.06)] dark:bg-[rgba(var(--color-primary-rgb),0.12)] border border-[var(--color-primary)]/30 rounded-xl p-3.5 text-[11px] font-bold text-[var(--color-primary)] flex items-center gap-2"><i class="fa-solid fa-gift text-base shrink-0"></i><span>Hadiah "<b>${esc(selectedReward.name)}</b>" telah dipilih dan akan otomatis diproses saat pesanan Anda selesai di checkout.</span></div>` : ''}
        `);
    } else {
        setH('member-modal-body', `
            <!-- PREVIEW KARTU CONTOH (MEMIKAT PELANGGAN) -->
            <div class="opacity-90">
                ${renderDigitalMemberCard({
                    name: 'NAMA ANDA',
                    phone: '81234567890',
                    points: 0
                })}
            </div>

            <!-- FORM PENCARIAN / CEK KARTU MEMBER -->
            <div class="p-4 sm:p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-800/40 space-y-3">
                <div class="flex items-center gap-2 text-slate-800 dark:text-white font-bold text-xs sm:text-sm">
                    <div class="w-7 h-7 rounded-xl primary-bg text-white flex items-center justify-center text-xs shrink-0 shadow-2xs">
                        <i class="fa-solid fa-magnifying-glass"></i>
                    </div>
                    <span>Cek Kartu Member &amp; Saldo Poin Anda</span>
                </div>
                <p class="text-xs text-slate-500 dark:text-slate-400 font-medium leading-relaxed">
                    Masukkan nomor WhatsApp yang pernah Anda gunakan saat berbelanja di Toko Putri:
                </p>
                <div class="flex gap-2">
                    <div class="relative flex-1">
                        <span class="absolute left-3.5 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400">+62</span>
                        <input type="tel" id="member-lookup-input" class="w-full rounded-xl border border-slate-200 bg-white py-3 pl-12 pr-3 text-xs font-bold text-slate-800 outline-none focus:border-[var(--color-primary)] dark:border-slate-700 dark:bg-slate-900 dark:text-white" placeholder="81234567890" inputmode="numeric" />
                    </div>
                    <button type="button" onclick="lookupMemberPoints()" class="primary-bg text-white px-4 py-3 rounded-xl text-xs font-bold uppercase tracking-wider shrink-0 transition-all active:scale-95 shadow-sm cursor-pointer">
                        Cek Kartu
                    </button>
                </div>
                <div id="member-lookup-result" class="hidden text-xs font-bold mt-2"></div>
            </div>

            <!-- KEUNTUNGAN MENJADI MEMBER -->
            <div class="p-4 rounded-2xl border border-[rgba(var(--color-primary-rgb),0.25)] bg-[rgba(var(--color-primary-rgb),0.05)] dark:bg-[rgba(var(--color-primary-rgb),0.1)] text-xs space-y-2">
                <h4 class="font-bold text-slate-800 dark:text-white flex items-center gap-1.5">
                    <i class="fa-solid fa-sparkles text-[var(--color-primary)]"></i> Keuntungan Menjadi Member Toko Putri:
                </h4>
                <ul class="text-[11px] text-slate-600 dark:text-slate-300 space-y-1 list-disc pl-4">
                    <li>Otomatis terdaftar menjadi member pada pesanan pertama Anda.</li>
                    <li>Kumpulkan poin di setiap transaksi belanja untuk ditukar hadiah gratis.</li>
                    <li>Mendapatkan kartu digital eksklusif yang bisa disimpan di galeri ponsel.</li>
                </ul>
            </div>

            <!-- KATALOG HADIAH -->
            <div>
                <p class="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-2.5">Katalog Hadiah yang Dapat Ditukar</p>
                <div class="space-y-2.5">${rewardsHtml}</div>
            </div>
        `);
    }
};

/**
 * Cek poin member secara langsung dari input modal
 */
export const lookupMemberPoints = async () => {
    const input = document.getElementById('member-lookup-input');
    const resultDiv = document.getElementById('member-lookup-result');
    if (!input || !resultDiv) return;

    let rawVal = input.value.replace(/\D/g, '');
    if (!rawVal || rawVal.length < 9) {
        resultDiv.className = 'text-xs font-bold text-rose-500 p-2.5 bg-rose-50 dark:bg-rose-900/20 rounded-xl';
        resultDiv.textContent = 'Masukkan minimal 9 digit nomor WhatsApp!';
        resultDiv.classList.remove('hidden');
        return;
    }

    if (rawVal.startsWith('0')) rawVal = '62' + rawVal.substring(1);
    else if (!rawVal.startsWith('62')) rawVal = '62' + rawVal;

    resultDiv.className = 'text-xs font-bold text-[var(--color-primary)] p-2.5 primary-bg-soft rounded-xl';
    resultDiv.textContent = 'Memuat data kartu member...';
    resultDiv.classList.remove('hidden');

    try {
        const doc = await db.collection("freshmart").doc("cms_data").collection("customers").doc(rawVal).get();
        if (doc.exists) {
            let mData = doc.data();
            if ((parseFloat(mData.points) || 0) === 0) {
                const rec = await reconcilePointsFromOrders(rawVal, mData.name);
                if (rec) mData = rec;
            }
            memberCache.set(rawVal, { data: mData, timestamp: Date.now() });
            setCurrentMember(mData);
            try {
                localStorage.setItem('freshmart_current_member', JSON.stringify(mData));
                localStorage.setItem('freshmart_member_wa', rawVal);
            } catch(e) {}
            rMemberModalBody();
            if (typeof window.showToast === 'function') {
                window.showToast(`Selamat datang kembali, ${mData.name || 'Pelanggan'}! 💳`);
            }
        } else {
            resultDiv.className = 'text-xs font-bold text-amber-700 dark:text-amber-300 p-3.5 bg-amber-50 dark:bg-amber-900/20 rounded-xl leading-relaxed border border-amber-200 dark:border-amber-800/40 space-y-1.5';
            const adminWa = ((appData.store && appData.store.wa) || '').replace(/\D/g, '');
            const waLink = adminWa ? `https://wa.me/${adminWa}?text=Halo%20Admin%20Toko%20Putri,%20saya%20ingin%20mendaftarkan%20nomor%20saya%20(${rawVal})%20sebagai%20Member%20Resmi.` : '#';
            resultDiv.innerHTML = `
                <div class="flex items-center gap-1.5 text-amber-800 dark:text-amber-200 font-extrabold text-[11px]">
                    <i class="fa-solid fa-circle-info text-amber-500"></i>
                    <span>Nomor Belum Terdaftar sebagai Member Resmi</span>
                </div>
                <p class="text-[11px] font-medium text-slate-600 dark:text-slate-300 leading-normal">
                    Nomor <b>+${esc(rawVal)}</b> saat ini tercatat sebagai <b>Pelanggan Umum</b>. Fitur Poin Hadiah dan fasilitas pembayaran <b>Cash Tempo</b> hanya dapat digunakan setelah nomor Anda dikonfirmasi & disimpan oleh Admin Toko di database CMS.
                </p>
                ${adminWa ? `
                <div class="pt-1">
                    <a href="${waLink}" target="_blank" class="inline-flex items-center gap-1.5 text-[10px] font-bold text-emerald-600 dark:text-emerald-400 hover:underline">
                        <i class="fa-brands fa-whatsapp text-emerald-500"></i> Hubungi Admin untuk Pendaftaran Member
                    </a>
                </div>` : ''}
            `;
        }
    } catch(err) {
        resultDiv.className = 'text-xs font-bold text-rose-500 p-2.5 bg-rose-50 dark:bg-rose-900/20 rounded-xl';
        resultDiv.textContent = 'Gagal mengecek data. Silakan periksa koneksi internet Anda.';
    }
};

export const selectReward = (rewardId) => {
    const r = (appData.rewards || []).find(x => x.id === rewardId);
    if (!r) return;
    const pts = parseFloat(currentMember?.points) || 0;
    if (pts < (parseFloat(r.pointsCost) || 0)) {
        if (typeof window.showToast === 'function') window.showToast("Poin Anda belum cukup untuk hadiah ini!");
        return;
    }
    if ((parseFloat(r.stock) || 0) <= 0) {
        if (typeof window.showToast === 'function') window.showToast("Maaf, stok hadiah ini sedang kosong!");
        return;
    }
    setSelectedReward({ id: r.id, name: r.name, pointsCost: parseFloat(r.pointsCost) || 0 });
    rMemberModalBody();
    if (typeof window.showToast === 'function') {
        window.showToast(`Hadiah "${r.name}" dipilih! Lanjutkan checkout untuk menukarnya.`);
    }
};

export const deselectReward = () => { 
    setSelectedReward(null); 
    rMemberModalBody(); 
};

export const closeMemberModal = (fH = false) => {
    const m = document.getElementById('member-modal');
    if (!m || m.style.display === 'none') return;
    
    const doClose = () => {
        m.style.opacity = '0'; 
        m.style.transition = 'opacity 0.25s ease';
        setTimeout(() => { 
            m.style.display = 'none'; 
            m.style.opacity = ''; 
            m.style.transition = ''; 
        }, 250);
    };

    if (typeof window.requestCloseModal === 'function') {
        window.requestCloseModal('member', fH, doClose);
    } else {
        doClose();
    }
};

// ─── Expose ke window untuk interaksi inline onclick di HTML ──────────
window.renderRewardCatalog = renderRewardCatalog;
window.checkMemberStatus = checkMemberStatus;
window.openMemberModal = openMemberModal;
window.rMemberModalBody = rMemberModalBody;
window.lookupMemberPoints = lookupMemberPoints;
window.selectReward = selectReward;
window.deselectReward = deselectReward;
window.closeMemberModal = closeMemberModal;
window.flipMemberCard = flipMemberCard;
window.downloadMemberCard = downloadMemberCard;
window.getMemberTier = getMemberTier;
window.formatMemberCardNumber = formatMemberCardNumber;
window.generateBarcodeSVG = generateBarcodeSVG;
window.setCurrentMember = setCurrentMember;
window.invalidateMemberCache = invalidateMemberCache;
window.reconcilePointsFromOrders = reconcilePointsFromOrders;

