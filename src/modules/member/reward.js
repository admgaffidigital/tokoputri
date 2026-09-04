/**
 * ============================================================
 * MODUL LOYALITAS MEMBER & REWARD
 * Mengatur katalog hadiah, saldo poin pelanggan,
 * deteksi nomor WhatsApp member saat checkout, dan penukaran reward.
 * ============================================================
 */

import { appData, currentMember, setCurrentMember, selectedReward, setSelectedReward } from '../../core/state.js';
import { el, show, hide, getV, setH, esc } from '../../core/utils.js';
import { db } from '../../config/firebase.js';

const memberCache = new Map();
const MEMBER_CACHE_TTL = 3 * 60 * 1000; // 3 menit cache poin/member

/**
 * Render slider katalog hadiah di halaman depan toko
 */
export const renderRewardCatalog = () => {
    const rcC = el('reward-catalog-container');
    if (!rcC) return;
    
    const isShow = appData.store.showRewardCatalog !== false && appData.store.showRewardCatalog !== 'false';
    const activeRewards = (appData.rewards || []).filter(r => r.isActive !== 'false' && r.isActive !== false);
    
    if (!isShow || activeRewards.length === 0) {
        rcC.classList.add('hidden');
        return;
    }

    // Lazy attach realtime listener hadiah hanya jika katalog aktif & ditampilkan
    if (typeof window.attachRewardsRealtime === 'function' && !window.unsubRewardsRealtime) {
        window.attachRewardsRealtime();
    }
    
    rcC.classList.remove('hidden');
    let rHTML = `
    <div class="flex items-center justify-between mb-4">
        <h3 class="font-bold text-slate-800 dark:text-white text-sm sm:text-base tracking-tight flex items-center gap-2">
            <div class="w-8 h-8 rounded-xl bg-[var(--color-primary)] flex items-center justify-center text-white shadow-sm">
                <i class="fa-solid fa-gift text-sm"></i>
            </div> KATALOG HADIAH POIN PELANGGAN
        </h3>
    </div>
    <div class="flex gap-4 overflow-x-auto hide-scrollbar snap-x pb-6 pt-2">
        ${activeRewards.map((r) => {
            return `
            <div class="w-[140px] sm:w-[160px] shrink-0 snap-start relative group cursor-pointer active:scale-95 transition-all duration-300" onclick="if(typeof window.openMemberModal==='function') window.openMemberModal(); else if(typeof window.showToast==='function') window.showToast('Tukarkan hadiah ini saat checkout menggunakan poin belanja Anda!');">
                <div class="w-full bg-[var(--color-primary)] rounded-[1.25rem] shadow-md hover:shadow-[0_12px_28px_-6px_rgba(var(--color-primary-rgb),0.4)] hover:-translate-y-1.5 hover:scale-[1.02] transition-all duration-300 flex flex-col relative overflow-hidden border border-white/20 text-white p-2">
                    <div class="absolute -right-4 -top-4 w-24 h-24 bg-white/20 rounded-full blur-xl pointer-events-none"></div>
                    <div class="absolute bottom-11 -left-3 w-6 h-6 rounded-full bg-[#f1f5f9] dark:bg-[#0b1121] border-r border-white/20 z-20 pointer-events-none transition-colors duration-400 shadow-inner"></div>
                    <div class="absolute bottom-11 -right-3 w-6 h-6 rounded-full bg-[#f1f5f9] dark:bg-[#0b1121] border-l border-white/20 z-20 pointer-events-none transition-colors duration-400 shadow-inner"></div>
                    <div class="absolute bottom-14 left-2 right-2 border-t border-dashed border-white/40 z-10 pointer-events-none"></div>
                    <div class="w-full aspect-square rounded-xl bg-white flex items-center justify-center overflow-hidden relative shadow-inner z-0">
                        <img loading="lazy" src="${esc(r.img)}" alt="${esc(r.name)}" class="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110 p-2" onerror="this.onerror=null;this.src='https://placehold.co/400?text=Hadiah'">
                        <div class="absolute top-1.5 left-1.5 bg-rose-500 text-white text-[8px] sm:text-[9px] font-bold px-2 py-0.5 rounded-full shadow-sm uppercase tracking-widest"><i class="fa-solid fa-gift mr-1"></i>Gratis</div>
                        <div class="absolute top-1.5 right-1.5 bg-[var(--color-primary)] text-white text-[8px] sm:text-[9px] font-bold px-2 py-0.5 rounded-full shadow-sm border border-white/20">${parseFloat(r.pointsCost || r.pointsRequired) || 0} Poin</div>
                    </div>
                    <div class="w-full h-6 shrink-0"></div>
                    <div class="h-8 w-full px-1 flex flex-col justify-center items-center relative z-0 shrink-0 mb-1">
                        <h4 class="text-[10px] sm:text-[11px] font-bold text-white leading-tight line-clamp-2 uppercase tracking-widest text-center drop-shadow-sm">${esc(r.name)}</h4>
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
            return; 
        }

        // Cek in-memory cache untuk memotong query berulang ke Firestore
        const cached = memberCache.get(waNum);
        if (cached && (Date.now() - cached.timestamp < MEMBER_CACHE_TTL)) {
            if (cached.data) {
                setCurrentMember(cached.data);
                banner.className = 'mt-3 p-4 rounded-2xl border border-[var(--color-primary)]/30 bg-[rgba(var(--color-primary-rgb),0.06)] dark:bg-[rgba(var(--color-primary-rgb),0.12)] flex items-center justify-between gap-3';
                banner.innerHTML = `<p class="text-[11px] font-bold text-[var(--color-primary)] leading-snug"><i class="fa-solid fa-circle-check mr-1"></i>Nomor Anda terdaftar sebagai pelanggan toko kami!</p><button type="button" onclick="openMemberModal()" class="shrink-0 bg-[var(--color-primary)] hover:opacity-90 text-white text-[10px] font-bold uppercase tracking-widest px-3.5 py-2.5 rounded-xl shadow-sm active:scale-95 transition-all whitespace-nowrap">Lihat Data Saya</button>`;
                show(banner); 
                show('payment-option-tempo');
            } else {
                setCurrentMember(null); 
                setSelectedReward(null); 
                hide(banner); 
                hide('payment-option-tempo');
            }
            return;
        }
        
        try {
            const doc = await db.collection("freshmart").doc("cms_data").collection("customers").doc(waNum).get();
            if (doc.exists) {
                const mData = doc.data();
                memberCache.set(waNum, { data: mData, timestamp: Date.now() });
                setCurrentMember(mData);
                banner.className = 'mt-3 p-4 rounded-2xl border border-[var(--color-primary)]/30 bg-[rgba(var(--color-primary-rgb),0.06)] dark:bg-[rgba(var(--color-primary-rgb),0.12)] flex items-center justify-between gap-3';
                banner.innerHTML = `<p class="text-[11px] font-bold text-[var(--color-primary)] leading-snug"><i class="fa-solid fa-circle-check mr-1"></i>Nomor Anda terdaftar sebagai pelanggan toko kami!</p><button type="button" onclick="openMemberModal()" class="shrink-0 bg-[var(--color-primary)] hover:opacity-90 text-white text-[10px] font-bold uppercase tracking-widest px-3.5 py-2.5 rounded-xl shadow-sm active:scale-95 transition-all whitespace-nowrap">Lihat Data Saya</button>`;
                show(banner); 
                show('payment-option-tempo');
            } else {
                memberCache.set(waNum, { data: null, timestamp: Date.now() });
                setCurrentMember(null); 
                setSelectedReward(null); 
                hide(banner); 
                hide('payment-option-tempo');
            }
        } catch(e) {
            // Diamkan jika gagal query member (non-blocking)
        }
    }, 500);
};

/**
 * Tampilkan modal data member dan poin
 */
export const openMemberModal = () => {
    if (typeof window.attachRewardsRealtime === 'function' && !window.unsubRewardsRealtime) {
        window.attachRewardsRealtime();
    }
    let m = document.getElementById('member-modal');
    if (!m) {
        m = document.createElement('div');
        m.id = 'member-modal';
        m.className = 'fixed inset-0 z-[115] bg-slate-900/70 backdrop-blur-sm flex items-end sm:items-center justify-center p-0 sm:p-5';
        m.onclick = (e) => { if (e.target === m) closeMemberModal(); };
        document.body.appendChild(m);
    }
    m.innerHTML = `
        <div class="bg-white dark:bg-slate-900 w-full max-w-lg rounded-t-[2rem] sm:rounded-[2rem] max-h-[85vh] flex flex-col shadow-2xl border border-slate-200 dark:border-slate-700">
            <div class="p-5 sm:p-6 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center shrink-0">
                <h3 class="font-bold text-slate-800 dark:text-white text-base flex items-center gap-2"><i class="fa-solid fa-crown text-amber-400"></i> Poin &amp; Hadiah Member</h3>
                <button onclick="closeMemberModal()" class="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 hover:bg-rose-100 hover:text-rose-500 flex items-center justify-center transition-all"><i class="fa-solid fa-xmark"></i></button>
            </div>
            <div class="p-5 sm:p-6 overflow-y-auto flex-1 space-y-5" id="member-modal-body"></div>
        </div>`;
    rMemberModalBody();
    m.style.opacity = '0'; 
    m.style.display = 'flex';
    requestAnimationFrame(() => { 
        m.style.transition = 'opacity 0.25s ease'; 
        m.style.opacity = '1'; 
    });
    if (typeof window.pushModalHistory === 'function') window.pushModalHistory('member');
};

/**
 * Render isi modal member
 */
export const rMemberModalBody = () => {
    const activeRewards = (appData.rewards || []).filter(r => r.isActive !== 'false' && r.isActive !== false);
    const pts = currentMember ? (parseFloat(currentMember.points) || 0) : 0;
    
    const rewardsHtml = activeRewards.length ? activeRewards.map(r => {
        const stockOk = (parseFloat(r.stock) || 0) > 0;
        const canClaim = currentMember && pts >= (parseFloat(r.pointsCost) || 0) && stockOk;
        const isSelected = selectedReward && selectedReward.id === r.id;
        return `
        <div class="flex items-center gap-3 p-4 rounded-[1.25rem] border ${isSelected ? 'border-[var(--color-primary)] bg-[rgba(var(--color-primary-rgb),0.06)] dark:bg-[rgba(var(--color-primary-rgb),0.12)]' : 'border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/50'}">
            ${r.img ? `<img src="${esc(r.img)}" class="w-14 h-14 rounded-xl object-cover border border-slate-200 dark:border-slate-700 shrink-0" onerror="this.style.display='none'" loading="lazy">` : `<div class="w-14 h-14 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-300 shrink-0"><i class="fa-solid fa-gift text-xl"></i></div>`}
            <div class="min-w-0 flex-1">
                <p class="text-xs font-bold text-slate-800 dark:text-white truncate">${esc(r.name)}</p>
                <p class="text-[11px] font-bold text-[var(--color-primary)] mt-0.5"><i class="fa-solid fa-star mr-1"></i>${parseFloat(r.pointsCost) || 0} Poin</p>
                ${!stockOk ? `<p class="text-[10px] font-bold text-rose-500 mt-0.5">Stok hadiah kosong</p>` : ''}
            </div>
            ${currentMember ? (isSelected
                ? `<button type="button" onclick="deselectReward()" class="shrink-0 bg-rose-500 hover:bg-rose-600 text-white text-[10px] font-bold uppercase px-3 py-2.5 rounded-xl active:scale-95 transition-all whitespace-nowrap">Batal</button>`
                : `<button type="button" ${canClaim ? '' : 'disabled'} onclick="selectReward(${r.id})" class="shrink-0 ${canClaim ? 'primary-bg hover:opacity-90 text-white active:scale-95' : 'bg-slate-200 dark:bg-slate-700 text-slate-400 cursor-not-allowed'} text-[10px] font-bold uppercase px-3 py-2.5 rounded-xl transition-all whitespace-nowrap">Pilih</button>`) : `<span class="text-[10px] font-bold text-slate-400 uppercase bg-slate-100 dark:bg-slate-800 px-2.5 py-1.5 rounded-lg">${parseFloat(r.pointsCost) || 0} Poin</span>`}
        </div>`;
    }).join('') : `<p class="text-[11px] font-bold text-slate-400 text-center py-3">Belum ada program hadiah yang tersedia.</p>`;

    if (currentMember) {
        setH('member-modal-body', `
            <div class="bg-[var(--color-primary)] rounded-[1.5rem] p-5 text-white shadow-lg">
                <div class="flex justify-between items-start mb-2">
                    <div>
                        <p class="text-[10px] font-bold uppercase tracking-widest opacity-80">Nama Pelanggan</p>
                        <p class="text-base font-bold">${esc(currentMember.name || 'Pelanggan')}</p>
                    </div>
                    <button type="button" onclick="setCurrentMember(null); rMemberModalBody();" class="bg-white/20 hover:bg-white/30 text-white text-[10px] font-bold uppercase px-2.5 py-1 rounded-lg transition-all active:scale-95">Keluar</button>
                </div>
                <p class="text-[10px] font-bold uppercase tracking-widest opacity-80 mt-2">No. WhatsApp</p>
                <p class="text-sm font-bold mb-3">+${esc(currentMember.phone || '')}</p>
                <div class="flex items-center gap-2 bg-white/15 rounded-xl px-4 py-3 mt-2">
                    <i class="fa-solid fa-star text-amber-300 text-lg"></i>
                    <p class="text-xl font-bold">${pts}</p>
                    <p class="text-[11px] font-bold opacity-90">Poin Terkumpul</p>
                </div>
            </div>
            <div>
                <p class="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-2.5">Katalog Hadiah yang Tersedia</p>
                <div class="space-y-2.5">${rewardsHtml}</div>
            </div>
            ${selectedReward ? `<div class="bg-[rgba(var(--color-primary-rgb),0.06)] dark:bg-[rgba(var(--color-primary-rgb),0.12)] border border-[var(--color-primary)]/30 rounded-xl p-3.5 text-[11px] font-bold text-[var(--color-primary)]"><i class="fa-solid fa-circle-info mr-1"></i>Hadiah "<b>${esc(selectedReward.name)}</b>" akan otomatis ditukar saat pesanan Anda diproses di checkout.</div>` : ''}
        `);
    } else {
        setH('member-modal-body', `
            <div class="p-5 rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/60 space-y-3">
                <div class="flex items-center gap-2.5 text-slate-800 dark:text-white font-bold text-sm">
                    <div class="w-8 h-8 rounded-xl bg-[var(--color-primary)] text-white flex items-center justify-center text-sm shrink-0">
                        <i class="fa-solid fa-search"></i>
                    </div>
                    <span>Cek Poin &amp; Status Member</span>
                </div>
                <p class="text-xs text-slate-500 dark:text-slate-400 font-medium">Masukkan nomor WhatsApp yang pernah Anda gunakan saat berbelanja di toko kami:</p>
                <div class="flex gap-2">
                    <div class="relative flex-1">
                        <span class="absolute left-3.5 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400">+62</span>
                        <input type="tel" id="member-lookup-input" class="w-full rounded-xl border border-slate-200 bg-white py-3 pl-12 pr-3 text-xs font-bold text-slate-800 outline-none focus:border-[var(--color-primary)] dark:border-slate-700 dark:bg-slate-800 dark:text-white" placeholder="81234567890" inputmode="numeric" />
                    </div>
                    <button type="button" onclick="lookupMemberPoints()" class="primary-bg text-white px-4 py-3 rounded-xl text-xs font-bold uppercase tracking-wider shrink-0 transition-all active:scale-95 shadow-sm">
                        Cek Poin
                    </button>
                </div>
                <div id="member-lookup-result" class="hidden text-xs font-bold mt-2"></div>
            </div>

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
    resultDiv.textContent = 'Mengecek data member...';
    resultDiv.classList.remove('hidden');

    try {
        const doc = await db.collection("freshmart").doc("cms_data").collection("customers").doc(rawVal).get();
        if (doc.exists) {
            const mData = doc.data();
            setCurrentMember(mData);
            rMemberModalBody();
            if (typeof window.showToast === 'function') window.showToast(`Selamat datang, ${mData.name || 'Pelanggan'}!`);
        } else {
            resultDiv.className = 'text-xs font-bold text-amber-600 dark:text-amber-400 p-3 bg-amber-50 dark:bg-amber-900/20 rounded-xl leading-relaxed';
            resultDiv.innerHTML = `<i class="fa-solid fa-circle-info mr-1"></i> Nomor <b>+${esc(rawVal)}</b> belum terdaftar. Lakukan pesanan pertama Anda untuk otomatis mengumpulkan poin member!`;
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
    m.style.opacity = '0'; 
    m.style.transition = 'opacity 0.25s ease';
    setTimeout(() => { 
        m.style.display = 'none'; 
        m.style.opacity = ''; 
        m.style.transition = ''; 
    }, 250);
};

// ─── Expose ke window untuk interaksi onclick inline ──────────
window.renderRewardCatalog = renderRewardCatalog;
window.checkMemberStatus = checkMemberStatus;
window.openMemberModal = openMemberModal;
window.rMemberModalBody = rMemberModalBody;
window.lookupMemberPoints = lookupMemberPoints;
window.selectReward = selectReward;
window.deselectReward = deselectReward;
window.closeMemberModal = closeMemberModal;
