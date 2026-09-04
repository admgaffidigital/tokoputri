/**
 * ============================================================
 * MODUL ULASAN PRODUK & TESTIMONI
 * Menangani form modal ulasan pelanggan, rating bintang, unggah foto bukti ke Google Drive,
 * kirim ulasan ke Firestore, serta muat testimoni ulasan di halaman produk.
 * ============================================================
 */

import { db, firebase } from '../../config/firebase.js';
import { isSaving, setIsSaving, oMods } from '../../core/state.js';
import { el, show, hide, setH, getV, esc, showToast, sLoad, hLoad } from '../../core/utils.js';

window.reviewPhotoFile = null;
window.reviewRating = 0;

/**
 * Buka modal ulasan pelanggan
 */
export const openReviewModal = (orderId, productId, encVName, encPName, encCName) => {
    const variantName = decodeURIComponent(encVName || '');
    const productName = decodeURIComponent(encPName || '');
    const customerName = decodeURIComponent(encCName || '');

    let m = document.getElementById('review-modal');
    if (!m) {
        m = document.createElement('div');
        m.id = 'review-modal';
        m.className = 'fixed inset-0 z-[120] bg-slate-900/70 backdrop-blur-sm flex items-end sm:items-center justify-center p-0 sm:p-5';
        m.onclick = (e) => { if (e.target === m) closeReviewModal(); };
        document.body.appendChild(m);
    }
    window.reviewPhotoFile = null;
    window.reviewRating = 0;
    m.innerHTML = `
        <div class="bg-white dark:bg-slate-900 w-full max-w-lg rounded-t-[2rem] sm:rounded-[2rem] max-h-[85vh] flex flex-col shadow-2xl border border-slate-200 dark:border-slate-700">
            <div class="p-5 sm:p-6 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center shrink-0">
                <div class="min-w-0">
                    <h3 class="font-bold text-slate-800 dark:text-white text-base flex items-center gap-2"><i class="fa-solid fa-star text-amber-400"></i> Berikan Ulasan</h3>
                    <p class="text-[10px] font-bold text-slate-500 mt-0.5 uppercase tracking-widest truncate">${esc(productName)}</p>
                </div>
                <button onclick="closeReviewModal()" class="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 hover:bg-rose-100 hover:text-rose-500 flex items-center justify-center transition-all shrink-0"><i class="fa-solid fa-xmark"></i></button>
            </div>
            <div class="p-5 sm:p-6 overflow-y-auto flex-1 space-y-5">
                <div class="text-center">
                    <p class="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-3">Beri Bintang</p>
                    <div class="flex items-center justify-center gap-2" id="review-star-picker">
                        ${[1, 2, 3, 4, 5].map(n => `<button type="button" onclick="setReviewRating(${n})" class="review-star text-3xl text-slate-300 dark:text-slate-600 transition-all hover:scale-110" data-star="${n}"><i class="fa-solid fa-star"></i></button>`).join('')}
                    </div>
                </div>
                <div>
                    <label class="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-widest">Ceritakan Pengalaman Anda</label>
                    <textarea id="review-text" rows="4" placeholder="Bagaimana kualitas produknya?" class="admin-input !py-3 bg-slate-50 dark:bg-slate-900 shadow-inner"></textarea>
                </div>
                <div>
                    <label class="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-widest">Unggah Foto (Opsional)</label>
                    <input type="file" accept="image/*" id="review-photo-input" onchange="handleReviewPhotoSelect(event)" class="hidden">
                    <div id="review-photo-preview-wrap" class="hidden mb-2.5 relative w-24 h-24">
                        <img id="review-photo-preview" class="w-24 h-24 rounded-xl object-cover border border-slate-200 dark:border-slate-700" loading="lazy">
                        <button type="button" onclick="removeReviewPhoto()" class="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-rose-500 text-white flex items-center justify-center text-[10px] shadow"><i class="fa-solid fa-xmark"></i></button>
                    </div>
                    <button type="button" onclick="document.getElementById('review-photo-input').click()" id="review-photo-btn" class="w-full py-3 rounded-xl border-2 border-dashed border-slate-300 dark:border-slate-700 text-slate-400 text-[11px] font-bold uppercase tracking-widest flex items-center justify-center gap-2 hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition-all"><i class="fa-solid fa-camera"></i> Tambah Foto Bukti</button>
                </div>
            </div>
            <div class="p-5 border-t border-slate-100 dark:border-slate-800 shrink-0">
                <button id="review-submit-btn" class="btn-primary py-3.5 text-sm shadow-glow !rounded-xl flex items-center justify-center gap-2"><i class="fa-solid fa-paper-plane"></i> Kirim Ulasan</button>
            </div>
        </div>`;
    el('review-submit-btn').onclick = () => submitReview(orderId, productId, variantName, productName, customerName);
    m.style.opacity = '0'; 
    m.style.display = 'flex';
    requestAnimationFrame(() => { 
        m.style.transition = 'opacity 0.25s ease'; 
        m.style.opacity = '1'; 
    });
    if (typeof window.pushModalHistory === 'function') {
        window.pushModalHistory('review');
    }
};

export const setReviewRating = (n) => {
    window.reviewRating = n;
    document.querySelectorAll('.review-star').forEach(btn => {
        const starN = parseInt(btn.dataset.star);
        btn.classList.toggle('text-amber-400', starN <= n);
        btn.classList.toggle('text-slate-300', starN > n);
        btn.classList.toggle('dark:text-slate-600', starN > n);
    });
};

export const handleReviewPhotoSelect = (event) => {
    const file = event.target.files[0];
    if (!file) return;
    if (!file.type.startsWith('image/')) { showToast('Hanya file gambar yang diizinkan!'); return; }
    if (file.size > 5 * 1024 * 1024) { showToast('Ukuran gambar max 5MB!'); return; }
    window.reviewPhotoFile = file;
    const reader = new FileReader();
    reader.onload = (e) => {
        el('review-photo-preview').src = e.target.result;
        show('review-photo-preview-wrap');
        hide('review-photo-btn');
    };
    reader.readAsDataURL(file);
};

export const removeReviewPhoto = () => {
    window.reviewPhotoFile = null;
    hide('review-photo-preview-wrap');
    show('review-photo-btn');
    const inp = el('review-photo-input'); 
    if (inp) inp.value = '';
};

export const closeReviewModal = (fH = false) => {
    const m = document.getElementById('review-modal');
    if (!m || m.style.display === 'none') return;
    m.style.opacity = '0'; 
    m.style.transition = 'opacity 0.25s ease';
    setTimeout(() => { 
        m.style.display = 'none'; 
        m.style.opacity = ''; 
        m.style.transition = ''; 
    }, 250);
    if (!fH && oMods.length && oMods[oMods.length - 1] === 'review') { 
        oMods.pop(); 
        history.back(); 
    }
};

export const submitReview = async (orderId, productId, variantName, productName, customerName) => {
    if (!window.reviewRating || window.reviewRating < 1) return showToast('Silakan beri bintang terlebih dahulu!');
    if (isSaving) return; 
    setIsSaving(true);
    sLoad('Mengirim ulasan...');
    try {
        let photoUrl = '';
        if (window.reviewPhotoFile && typeof window.uploadBuktiToGDrive === 'function') {
            const uploaded = await window.uploadBuktiToGDrive(window.reviewPhotoFile, 'review-' + orderId);
            if (uploaded) photoUrl = uploaded;
            else showToast('Foto gagal diupload, ulasan tetap dikirim tanpa foto.');
        }
        const reviewId = Date.now();
        const reviewDoc = {
            id: reviewId,
            orderId: orderId || '',
            productId: (productId !== undefined && productId !== null) ? productId : 0,
            variantName: variantName || '',
            productName: productName || '',
            customerName: customerName || 'Pelanggan',
            rating: window.reviewRating,
            text: getV('review-text') || '',
            photoUrl: photoUrl || '',
            adminReply: '',
            isVisible: true,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        };
        await db.collection("freshmart").doc("cms_data").collection("reviews").doc(reviewId.toString()).set(reviewDoc);
        reviewsCache.delete(productId); // Invalidate cache agar ulasan baru segera terlihat
        closeReviewModal();
        showToast('✅ Terima kasih atas ulasan Anda!');
        if (typeof window.openCustomerOrderDetail === 'function') {
            window.openCustomerOrderDetail(orderId);
        }
    } catch(e) {
        console.error('Gagal mengirim ulasan:', e);
        showToast('Gagal mengirim ulasan: ' + (e.message || 'Error tidak diketahui'));
    } finally { 
        setIsSaving(false); 
        hLoad(); 
    }
};

const reviewsCache = new Map();
const REVIEWS_CACHE_TTL = 5 * 60 * 1000; // 5 menit

/**
 * Muat dan tampilkan ulasan pelanggan di modal detail produk (dengan cache in-memory)
 */
export const loadProductReviews = async (productId) => {
    const container = el('product-modal-reviews-container');
    if (!container) return;

    const renderReviewList = (reviews) => {
        const avgRating = reviews.length ? (reviews.reduce((s, r) => s + (parseFloat(r.rating) || 0), 0) / reviews.length) : 0;
        const starRow = (n) => Array.from({ length: 5 }, (_, idx) => `<i class="fa-solid fa-star ${idx < Math.round(n) ? 'text-amber-400' : 'text-slate-200 dark:text-slate-700'}"></i>`).join('');

        let header = `
            <div class="flex items-center justify-between mb-4">
                <h4 class="font-bold text-slate-800 dark:text-white text-sm flex items-center gap-2"><i class="fa-solid fa-comment-dots text-amber-400"></i> Ulasan Pelanggan</h4>
                ${reviews.length ? `<div class="flex items-center gap-1.5"><span class="flex text-xs">${starRow(avgRating)}</span><span class="text-xs font-bold text-slate-600 dark:text-slate-300">${avgRating.toFixed(1)}</span><span class="text-[10px] font-bold text-slate-400">(${reviews.length})</span></div>` : ''}
            </div>`;

        if (!reviews.length) {
            setH('product-modal-reviews-container', header + `<p class="text-[11px] font-bold text-slate-400 text-center py-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl">Belum ada ulasan untuk produk ini.</p>`);
            return;
        }

        const list = reviews.map(r => {
            let dateStr = '';
            try { 
                if (r.createdAt && r.createdAt.toDate) {
                    dateStr = r.createdAt.toDate().toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' }); 
                }
            } catch(e) {}
            return `
            <div class="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-2xl border border-slate-100 dark:border-slate-700/60">
                <div class="flex items-center justify-between mb-1.5">
                    <p class="text-xs font-bold text-slate-800 dark:text-white">${esc(r.customerName || 'Pelanggan')}</p>
                    <span class="text-[9px] font-bold text-slate-400">${dateStr}</span>
                </div>
                <div class="flex text-[11px] mb-2">${starRow(r.rating)}</div>
                ${r.variantName ? `<p class="text-[10px] font-bold text-slate-400 mb-1.5">Varian: ${esc(r.variantName)}</p>` : ''}
                ${r.text ? `<p class="text-xs text-slate-600 dark:text-slate-300 mb-3">${esc(r.text)}</p>` : ''}
                ${r.photoUrl ? `<div class="w-16 h-16 rounded-xl overflow-hidden mb-3 border border-slate-200 dark:border-slate-700"><img src="${esc(r.photoUrl)}" class="w-full h-full object-cover cursor-pointer" onclick="window.open('${esc(r.photoUrl)}','_blank')" alt="Foto ulasan"></div>` : ''}
                ${r.adminReply ? `
                <div class="mt-2.5 p-3 bg-[rgba(var(--color-primary-rgb),0.08)] dark:bg-[rgba(var(--color-primary-rgb),0.15)] border border-[rgba(var(--color-primary-rgb),0.2)] rounded-xl">
                    <p class="text-[10px] font-bold text-[var(--color-primary-dark)] dark:text-[var(--color-primary)] mb-1 flex items-center gap-1"><i class="fa-solid fa-reply"></i> Balasan Penjual</p>
                    <p class="text-xs text-slate-600 dark:text-slate-300">${esc(r.adminReply)}</p>
                </div>` : ''}
            </div>`;
        }).join('');

        setH('product-modal-reviews-container', header + `<div class="space-y-3">${list}</div>`);
    };

    // 1. Cek in-memory cache (hemat kuota pembacaan Firestore)
    const cached = reviewsCache.get(productId);
    if (cached && (Date.now() - cached.timestamp < REVIEWS_CACHE_TTL)) {
        renderReviewList(cached.data);
        return;
    }

    setH('product-modal-reviews-container', `<div class="text-center py-6"><i class="fa-solid fa-spinner fa-spin text-xl text-slate-300"></i></div>`);
    try {
        const snap = await db.collection("freshmart").doc("cms_data").collection("reviews").where("productId", "==", productId).get();
        let reviews = snap.docs.map(d => d.data()).filter(r => r.isVisible !== false);
        reviews.sort((a, b) => {
            const ta = a.createdAt && a.createdAt.toMillis ? a.createdAt.toMillis() : 0;
            const tb = b.createdAt && b.createdAt.toMillis ? b.createdAt.toMillis() : 0;
            return tb - ta;
        });

        reviewsCache.set(productId, { data: reviews, timestamp: Date.now() });
        renderReviewList(reviews);
    } catch(e) {
        console.warn('Gagal memuat ulasan:', e);
        setH('product-modal-reviews-container', `<p class="text-[11px] text-slate-400 text-center py-4">Belum ada ulasan yang dapat dimuat.</p>`);
    }
};

export const submitProductReview = submitReview;

// ─── Expose ke window untuk onclick di HTML ───────────────
window.openReviewModal = openReviewModal;
window.setReviewRating = setReviewRating;
window.handleReviewPhotoSelect = handleReviewPhotoSelect;
window.removeReviewPhoto = removeReviewPhoto;
window.closeReviewModal = closeReviewModal;
window.submitReview = submitReview;
window.submitProductReview = submitReview;
window.loadProductReviews = loadProductReviews;
