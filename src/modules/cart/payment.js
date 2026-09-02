/**
 * ============================================================
 * MODUL CHECKOUT & PEMBAYARAN (BUKTI TRANSFER, QRIS & TEMPO)
 * Mengatur akses GPS pembeli, opsi pengiriman/pickup (rChck),
 * upload bukti transfer gambar kompresi WebP ke Drive & Firebase,
 * rincian pembayaran QRIS / Bank, dan kalkulasi sisa saldo Tempo.
 * ============================================================
 */

import { db, firebase } from '../../config/firebase.js';
import { appData, cart, cust } from '../../core/state.js';
import { 
    el, show, hide, toggleCls, fCur, showToast, sLoad, hLoad, fixD 
} from '../../core/utils.js';
import { toggleDeliveryMethod } from './checkout.js';

window.getLocation = () => {
    if(!navigator.geolocation) return showToast("GPS tidak didukung");
    el('btn-location').innerHTML = `<i class="fa-solid fa-spinner fa-spin text-sm"></i>`;
    navigator.geolocation.getCurrentPosition(p => {
        cust.lat = p.coords.latitude; cust.lng = p.coords.longitude;
        hide('btn-location'); show('location-status'); el('location-status').classList.add('flex');
        showToast("GPS Didapatkan");
    }, e => {
        el('btn-location').innerHTML = `<i class="fa-solid fa-location-crosshairs text-[var(--color-primary)]"></i> Set GPS Maps`;
        showToast("Gagal akses GPS");
    }, {enableHighAccuracy: true, timeout: 15000});
};

// Note: applyVoucher telah dipindahkan ke modul: src/modules/member/voucher.js


// Note: validateAndGoToPayment dan toggleDeliveryMethod telah dipindahkan ke modul: src/modules/cart/checkout.js


// Note: Logika loyalitas member (checkMemberStatus, openMemberModal, rMemberModalBody, selectReward, deselectReward, closeMemberModal)
// telah dipindahkan ke modul: src/modules/member/reward.js


// Note: Logika ulasan dan testimoni produk (openReviewModal, closeReviewModal, setReviewRating, handleReviewPhotoSelect, removeReviewPhoto, submitReview, loadProductReviews)
// telah dipindahkan ke modul: src/modules/orders/reviews.js


const rChck = () => {
    const d = appData.store.isDeliveryEnabled !== false, p = appData.store.isPickupEnabled !== false;
    toggleCls('delivery-option-container', 'hidden', !d); toggleCls('pickup-option-container', 'hidden', !p);
    toggleCls('no-delivery-warning', 'hidden', d||p); toggleCls('delivery-methods-grid', 'hidden', !(d||p));
    const b = el('btn-checkout-next');
    if (b) {
        if(d||p){
            b.removeAttribute('disabled'); b.classList.remove('opacity-50');
            // FIX: pilih radio sesuai cust.deliveryMethod yang tersimpan (bukan selalu reset ke delivery)
            const preferredMethod = cust.deliveryMethod || 'delivery';
            const targetMethod = (preferredMethod === 'pickup' && p) ? 'pickup' : (d ? 'delivery' : 'pickup');
            const targetRadio = document.querySelector('input[value="' + targetMethod + '"]');
            if (targetRadio) targetRadio.checked = true;
        } else { b.setAttribute('disabled','true'); b.classList.add('opacity-50'); }
    }
    toggleDeliveryMethod();
};

window.buktiPaymentUrl = null;
window.buktiPaymentFile = null;
window.buktiGDriveUploaded = false; // FLAG: true = sudah upload GDrive, false = masih pending

// ============================================================
// COMPRESS gambar sebelum upload agar hemat kuota & cepat
// Kualitas 0.82 menghasilkan file ~3–5x lebih kecil dari original
// ============================================================
window.compressImageForUpload = (file, maxSizePx = 1600, quality = 0.82) => {
    return new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = (ev) => {
            const img = new Image();
            img.onload = () => {
                let { width, height } = img;
                if (width > maxSizePx || height > maxSizePx) {
                    if (width > height) { height = Math.round(height * maxSizePx / width); width = maxSizePx; }
                    else { width = Math.round(width * maxSizePx / height); height = maxSizePx; }
                }
                const canvas = document.createElement('canvas');
                canvas.width = width; canvas.height = height;
                canvas.getContext('2d').drawImage(img, 0, 0, width, height);
                canvas.toBlob((blob) => {
                    if (!blob) return resolve(file); // fallback ke file asli
                    resolve(new File([blob], file.name, { type: 'image/jpeg', lastModified: Date.now() }));
                }, 'image/jpeg', quality);
            };
            img.onerror = () => resolve(file);
            img.src = ev.target.result;
        };
        reader.onerror = () => resolve(file);
    });
};

// ============================================================
// UPLOAD SATU PERCOBAAN ke Google Drive via GAS
// Mengembalikan URL GDrive jika sukses, atau null jika gagal
// ============================================================
window._doSingleGDriveUpload = async (file, orderId) => {
    const reader = new FileReader();
    return new Promise((resolve) => {
        reader.readAsDataURL(file);
        reader.onload = async () => {
            try {
                const base64Data = reader.result.split(',')[1];
                const safeName = (file.name || 'bukti.jpg').replace(/[^a-zA-Z0-9.]/g, '_');
                const payload = {
                    name: 'BUKTI_' + orderId + '_' + Date.now() + '_' + safeName,
                    mimeType: file.type || 'image/jpeg',
                    data: base64Data,
                    token: GAS_SECRET_TOKEN
                };
                const res = await fetch(GAS_UPLOAD_URL, {
                    method: 'POST',
                    body: JSON.stringify(payload),
                    headers: { 'Content-Type': 'text/plain;charset=utf-8' },
                    redirect: 'follow'
                });
                if (!res.ok) { console.warn('GDrive upload HTTP error:', res.status); return resolve(null); }
                const text = await res.text();
                let data;
                try { data = JSON.parse(text); } catch(e) { console.warn('GDrive response parse error'); return resolve(null); }
                if (data && data.status === 'success' && data.url) {
                    resolve(fixD(data.url));
                } else {
                    console.warn('GDrive upload gagal:', data && data.message);
                    resolve(null);
                }
            } catch(e) {
                console.warn('GDrive upload exception:', e);
                resolve(null);
            }
        };
        reader.onerror = () => resolve(null);
    });
};

// ============================================================
// UPLOAD BUKTI dengan RETRY 2x + timeout 30 detik
// TIDAK memakai base64 sebagai fallback ke Firestore
// (base64 besar bisa meledakkan kuota Firestore 1MB/dokumen)
// ============================================================
window.uploadBuktiToGDrive = async (file, orderId) => {
    if (!file) return null;
    if (!GAS_UPLOAD_URL || GAS_UPLOAD_URL.includes('ISI_DENGAN')) {
        console.error('GAS_UPLOAD_URL belum dikonfigurasi!');
        return null; // TOLAK — tidak boleh fallback base64 ke Firestore
    }

    // Kompres dulu sebelum upload
    let fileToUpload = file;
    try { fileToUpload = await window.compressImageForUpload(file); } catch(e) { /* pakai asli */ }

    const MAX_RETRY = 2;
    const TIMEOUT_MS = 30000;

    for (let attempt = 1; attempt <= MAX_RETRY; attempt++) {
        const uploadEl = el('bukti-uploading-text');
        if (uploadEl) uploadEl.textContent = attempt > 1
            ? `Mencoba ulang ke Google Drive... (${attempt}/${MAX_RETRY})`
            : 'Mengupload ke Google Drive...';

        try {
            const url = await Promise.race([
                window._doSingleGDriveUpload(fileToUpload, orderId),
                new Promise((_, rej) => setTimeout(() => rej(new Error('timeout')), TIMEOUT_MS))
            ]);
            if (url) return url; // sukses
        } catch(e) {
            console.warn(`Percobaan upload ${attempt} gagal:`, e.message);
        }

        if (attempt < MAX_RETRY) await new Promise(r => setTimeout(r, 1500 * attempt)); // jeda antar retry
    }

    return null; // GAGAL setelah semua retry
};

// ============================================================
// HANDLER: saat user pilih file bukti pembayaran
// Upload SEGERA ke GDrive (bukan nunggu processOrder) agar user
// tahu hasilnya lebih awal + tidak blocking saat submit pesanan
// ============================================================
window.handleBuktiUpload = async (event) => {
    const file = event.target.files[0];
    if (!file) return;
    if (!file.type.startsWith('image/')) return showToast('Hanya file gambar yang diizinkan!');
    if (file.size > 5 * 1024 * 1024) return showToast('Ukuran gambar max 5MB!');

    window.buktiPaymentFile = file;
    window.buktiPaymentUrl = null;
    window.buktiGDriveUploaded = false;

    // Tampilkan preview lokal (tidak perlu tunggu upload selesai)
    const reader = new FileReader();
    reader.onload = (e) => {
        const imgEl = el('bukti-preview-img');
        const wrap = el('bukti-preview-wrap');
        const plc = el('bukti-placeholder');
        if (imgEl) imgEl.src = e.target.result;
        if (wrap) wrap.classList.remove('hidden');
        if (plc) plc.classList.add('hidden');
    };
    reader.readAsDataURL(file);

    // Sembunyikan pesan lama, tampilkan status uploading
    hide('bukti-success'); hide('bukti-gdrive-error');
    const upEl = el('bukti-uploading');
    if (upEl) { upEl.classList.remove('hidden'); upEl.style.display = 'flex'; }

    // Upload langsung ke GDrive setelah file dipilih
    const tempOrderId = 'TEMP_' + Date.now().toString(36).toUpperCase();
    const gDriveUrl = await window.uploadBuktiToGDrive(file, tempOrderId);

    hide('bukti-uploading');

    if (gDriveUrl) {
        window.buktiPaymentUrl = gDriveUrl;
        window.buktiGDriveUploaded = true;
        const sEl = el('bukti-success');
        const sTxt = el('bukti-success-text');
        const sInfo = el('bukti-storage-info');
        if (sTxt) sTxt.textContent = 'Bukti berhasil disimpan!';
        if (sInfo) sInfo.textContent = '(tersimpan di Google Drive ✓)';
        if (sEl) { sEl.classList.remove('hidden'); sEl.style.display = 'flex'; }
        hide('bukti-gdrive-error');
    } else {
        // GDrive gagal — tampilkan error, JANGAN izinkan lanjut
        window.buktiPaymentUrl = null;
        window.buktiGDriveUploaded = false;
        const errEl = el('bukti-gdrive-error');
        if (errEl) { errEl.classList.remove('hidden'); errEl.style.display = 'flex'; }
        hide('bukti-success');
        showToast('❌ Upload ke Google Drive gagal. Coba lagi!');
    }
};

// ============================================================
// RETRY: tombol "Coba lagi" di banner error
// ============================================================
window.retryBuktiUpload = async () => {
    if (!window.buktiPaymentFile) return showToast('Pilih gambar terlebih dahulu!');
    hide('bukti-gdrive-error'); hide('bukti-success');
    const upEl = el('bukti-uploading');
    if (upEl) { upEl.classList.remove('hidden'); upEl.style.display = 'flex'; }
    const tempOrderId = 'RETRY_' + Date.now().toString(36).toUpperCase();
    const gDriveUrl = await window.uploadBuktiToGDrive(window.buktiPaymentFile, tempOrderId);
    hide('bukti-uploading');
    if (gDriveUrl) {
        window.buktiPaymentUrl = gDriveUrl;
        window.buktiGDriveUploaded = true;
        const sEl = el('bukti-success'); const sTxt = el('bukti-success-text'); const sInfo = el('bukti-storage-info');
        if (sTxt) sTxt.textContent = 'Bukti berhasil disimpan!';
        if (sInfo) sInfo.textContent = '(tersimpan di Google Drive ✓)';
        if (sEl) { sEl.classList.remove('hidden'); sEl.style.display = 'flex'; }
        showToast('✅ Upload berhasil!');
    } else {
        const errEl = el('bukti-gdrive-error');
        if (errEl) { errEl.classList.remove('hidden'); errEl.style.display = 'flex'; }
        showToast('❌ Masih gagal. Periksa koneksi internet Anda.');
    }
};

// ============================================================
// ALIAS untuk kompatibilitas kode lama (processOrder memanggil ini)
// Karena upload sudah dilakukan di handleBuktiUpload, fungsi ini
// hanya mengembalikan URL yang sudah ada — tidak upload ulang
// ============================================================
window.uploadBuktiToFirebase = async (file, orderId) => {
    // Jika sudah upload saat pilih file, kembalikan URL yang ada
    if (window.buktiGDriveUploaded && window.buktiPaymentUrl) {
        return window.buktiPaymentUrl;
    }
    // Fallback: coba upload lagi (misalnya state hilang karena navigasi)
    if (!file) return null;
    const url = await window.uploadBuktiToGDrive(file, orderId);
    if (url) { window.buktiPaymentUrl = url; window.buktiGDriveUploaded = true; }
    return url; // null jika gagal — processOrder akan menangani ini
};

window.togglePaymentDetails = () => {
    const m = (document.querySelector('input[name="payment"]:checked')||{}).value;
    toggleCls('detail-transfer', 'hidden', m !== 'transfer'); toggleCls('detail-qris', 'hidden', m !== 'qris');
    toggleCls('detail-cashier', 'hidden', m !== 'cashier'); toggleCls('detail-cod', 'hidden', m !== 'cod');
    toggleCls('detail-tempo', 'hidden', m !== 'tempo');
    if (m === 'tempo') window.calculateTempoBalance();

    // Sembunyikan bagian upload bukti pembayaran jika COD atau Kasir
    const needsBukti = (m === 'transfer' || m === 'qris' || m === 'tempo');
    toggleCls('bukti-payment-section', 'hidden', !needsBukti);
};

window.calculateTempoBalance = () => {
    const dpInput = document.getElementById('tempo-dp-input');
    let dp = parseFloat(dpInput?.value) || 0;
    if (dp < 0) { dp = 0; if (dpInput) dpInput.value = 0; }
    let sub = cart.reduce((s,i) => s + (parseFloat(getEffP(i))||0) * (parseFloat(i.qty)||0), 0);
    let sC = 0, productDisc = 0, shippingDisc = 0;
    if (cust.deliveryMethod === 'delivery') {
        sC = Math.ceil((parseFloat(cust.distance)||0) * (parseFloat(appData.store.costPerKm)||0) / 500) * 500;
    }
    if (vouch) {
        let eligibleSubtotal = sub;
        if(vouch.targetProduct && vouch.targetProduct !== '') {
            const targetId = parseInt(vouch.targetProduct);
            const eligibleItems = cart.filter(i => i.id === targetId);
            eligibleSubtotal = eligibleItems.reduce((s,i) => s + (parseFloat(getEffP(i))||0) * (parseFloat(i.qty)||0), 0);
        }
        if(vouch.type === 'shipping_free') {
            shippingDisc = sC;
        } else if(vouch.type === 'shipping_flat') {
            shippingDisc = parseFloat(vouch.value)||0;
        } else if(vouch.type === 'percent') {
            let calcDisc = eligibleSubtotal * ((parseFloat(vouch.value)||0) / 100);
            if(vouch.maxDiscount && parseFloat(vouch.maxDiscount) > 0) calcDisc = Math.min(calcDisc, parseFloat(vouch.maxDiscount));
            productDisc = calcDisc;
        } else {
            productDisc = parseFloat(vouch.value)||0;
            productDisc = Math.min(productDisc, eligibleSubtotal);
        }
    }
    shippingDisc = Math.min(shippingDisc, sC);
    productDisc = Math.min(productDisc, sub);

    let subAfterDisc = Math.max(0, sub - productDisc);
    let shippingAfterDisc = Math.max(0, sC - shippingDisc);
    const taxInfo = window.calcTaxDetails(subAfterDisc + shippingAfterDisc);
    let pointsDisc = 0;
    if (window.useMemberPoints && currentMember) {
        pointsDisc = Math.min(subAfterDisc + shippingAfterDisc + taxInfo.grandTotalAdd, parseFloat(currentMember.points) || 0);
    }
    let grandTotal = subAfterDisc + shippingAfterDisc + taxInfo.grandTotalAdd - pointsDisc;
    if (dp > grandTotal) {
        dp = grandTotal;
        if (dpInput) dpInput.value = dp;
    }
    let balance = grandTotal - dp;
    const disp = document.getElementById('tempo-balance-display');
    if (disp) disp.innerText = fCur(balance);
};

// Note: Logika rPay, toggleOrderButton, dan processOrder telah dipindahkan ke modul: src/modules/cart/checkout.js
