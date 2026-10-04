/**
 * ============================================================
 * MODUL CHECKOUT & PEMBAYARAN (BUKTI TRANSFER, QRIS & TEMPO)
 * Mengatur akses GPS pembeli, opsi pengiriman/pickup (rChck),
 * upload bukti transfer gambar kompresi WebP ke Drive & Firebase,
 * rincian pembayaran QRIS / Bank, dan kalkulasi sisa saldo Tempo.
 * ============================================================
 */

import { db, firebase } from '../../config/firebase.js';
import { appData, cart, cust, currentMember } from '../../core/state.js';
import { 
    el, show, hide, toggleCls, fCur, esc, showToast, sLoad, hLoad, fixD 
} from '../../core/utils.js';
import { toggleDeliveryMethod } from './checkout.js';
import { calculateAllPaylaterTenors, calculateInstallmentBreakdown, getPaylaterConfig } from '../../core/paylater.js';

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

window.handleCustomerMapsInput = (val) => {
    const parseFn = typeof window.parseGeoCoordinates === 'function' ? window.parseGeoCoordinates : null;
    const res = parseFn ? parseFn(val) : null;
    if (res) {
        cust.lat = parseFloat(res.lat);
        cust.lng = parseFloat(res.lng);
        hide('btn-location'); 
        show('location-status'); 
        const st = el('location-status');
        if (st) {
            st.classList.add('flex');
            st.innerHTML = `
                <i class="fa-solid fa-circle-check shrink-0 text-lg primary-text"></i>
                <div class="min-w-0">
                    <span class="text-[10px] font-bold uppercase leading-tight tracking-wide primary-text block">Koordinat Berhasil Disematkan!</span>
                    <span class="text-[9px] text-slate-500 dark:text-slate-400 font-mono">${res.lat}, ${res.lng}</span>
                </div>
            `;
        }
        showToast("Titik lokasi Maps pembeli berhasil disematkan!");
        if (typeof window.rPay === 'function') window.rPay();
        return true;
    }
    return false;
};

window.pasteCustomerMapsInput = async () => {
    const input = el('cust-maps-input');
    if (!input) return;
    try {
        if (navigator.clipboard && navigator.clipboard.readText) {
            const text = await navigator.clipboard.readText();
            if (text) {
                input.value = text;
                const ok = window.handleCustomerMapsInput(text);
                if (!ok) showToast("Format tidak dikenali! Tempel koordinat: Lat, Lng atau link Maps");
                return;
            }
        }
    } catch(e) {}
    input.focus();
    showToast("Silakan tekan Ctrl+V atau tahan untuk menempel");
};

export const rChck = () => {
    const d = appData.store.isDeliveryEnabled !== false, p = appData.store.isPickupEnabled !== false;
    toggleCls("delivery-option-container", "hidden", !d); toggleCls("pickup-option-container", "hidden", !p);
    toggleCls("no-delivery-warning", "hidden", d||p); toggleCls("delivery-methods-grid", "hidden", !(d||p));
    const b = el("btn-checkout-next");
    if (b) {
        if(d||p){
            b.removeAttribute("disabled"); b.classList.remove("opacity-50");
            const preferredMethod = cust.deliveryMethod || "delivery";
            const targetMethod = (preferredMethod === "pickup" && p) ? "pickup" : (d ? "delivery" : "pickup");
            const targetRadio = document.querySelector(`input[value="${targetMethod}"]`);
            if (targetRadio) targetRadio.checked = true;
        } else { b.setAttribute("disabled","true"); b.classList.add("opacity-50"); }
    }
    toggleDeliveryMethod();
};
window.rChck = rChck;

window.buktiPaymentUrl = null;
window.buktiPaymentFile = null;
window.buktiGDriveUploaded = false;

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
    toggleCls('detail-paylater', 'hidden', m !== 'paylater');
    if (m === 'tempo') window.calculateTempoBalance();
    if (m === 'paylater') window.calculatePaylaterBalance?.();

    // Sembunyikan bagian upload bukti pembayaran jika COD, Kasir, atau PayLater (tanpa kekurangan DP)
    const excessDp = parseFloat(document.getElementById('paylater-dp-input')?.value) || 0;
    const needsBukti = (m === 'transfer' || m === 'qris' || m === 'tempo' || (m === 'paylater' && excessDp > 0));
    toggleCls('bukti-payment-section', 'hidden', !needsBukti);
};

window.selectedCheckoutPaylaterTenor = window.selectedCheckoutPaylaterTenor || '30d';

window.selectCheckoutPaylaterTenor = (tenorKey) => {
    window.selectedCheckoutPaylaterTenor = tenorKey;
    if (typeof window.calculatePaylaterBalance === 'function') {
        window.calculatePaylaterBalance();
    }
};

window.calculatePaylaterBalance = () => {
    const limit = currentMember ? Math.max(0, parseFloat(currentMember.paylaterLimit) || 0) : 0;
    const used = currentMember ? Math.max(0, parseFloat(currentMember.paylaterUsed) || 0) : 0;
    const available = Math.max(0, limit - used);
    const dueDay = currentMember?.paylaterDueDay || 5;

    const limitDisp = document.getElementById('paylater-limit-display');
    const dueDisp = document.getElementById('paylater-due-display');
    const statusBox = document.getElementById('paylater-status-box');
    const excessBox = document.getElementById('paylater-excess-dp-container');
    const dpInput = document.getElementById('paylater-dp-input');
    const tenorChipsGrid = document.getElementById('paylater-tenor-chips-grid');
    const tenorBreakdownBox = document.getElementById('paylater-tenor-breakdown-box');

    if (limitDisp) limitDisp.textContent = fCur(available);
    if (dueDisp) dueDisp.textContent = 'Tgl ' + dueDay + ' Tiap Bulan';

    let sub = cart.reduce((s,i) => s + (parseFloat(getEffP(i))||0) * (parseFloat(i.qty)||0), 0);
    let sC = 0, productDisc = 0, shippingDisc = 0;
    if (cust.deliveryMethod === 'delivery') {
        sC = Math.ceil((parseFloat(cust.distance)||0) * (parseFloat(appData.store.costPerKm)||0) / 500) * 500;
    }
    if (typeof vouch !== 'undefined' && vouch) {
        let eligibleSubtotal = sub;
        if(vouch.targetProduct && vouch.targetProduct !== '') {
            const targetId = parseInt(vouch.targetProduct);
            const eligibleItems = cart.filter(i => i.id === targetId);
            eligibleSubtotal = eligibleItems.reduce((s,i) => s + (parseFloat(getEffP(i))||0) * (parseFloat(i.qty)||0), 0);
        }
        if(vouch.type === 'shipping_free') shippingDisc = sC;
        else if(vouch.type === 'shipping_flat') shippingDisc = parseFloat(vouch.value)||0;
        else if(vouch.type === 'percent') {
            let calcDisc = eligibleSubtotal * ((parseFloat(vouch.value)||0) / 100);
            if(vouch.maxDiscount && parseFloat(vouch.maxDiscount) > 0) calcDisc = Math.min(calcDisc, parseFloat(vouch.maxDiscount));
            productDisc = calcDisc;
        } else {
            productDisc = parseFloat(vouch.value)||0;
            productDisc = Math.min(productDisc, eligibleSubtotal);
        }
    }
    const isFsPromo = (appData.store?.freeShippingMinSpendEnabled === true || appData.store?.freeShippingMinSpendEnabled === 'true')
        && (parseFloat(appData.store?.freeShippingMinSpendAmount) || 0) > 0
        && sub >= (parseFloat(appData.store?.freeShippingMinSpendAmount) || 0)
        && cust.deliveryMethod === 'delivery';
    if (isFsPromo) shippingDisc = sC;
    shippingDisc = Math.min(shippingDisc, sC);
    productDisc = Math.min(productDisc, sub);

    let subAfterDisc = Math.max(0, sub - productDisc);
    let shippingAfterDisc = Math.max(0, sC - shippingDisc);
    const taxInfo = typeof window.calcTaxDetails === 'function' ? window.calcTaxDetails(subAfterDisc + shippingAfterDisc) : { grandTotalAdd: 0 };
    let pointsDisc = 0;
    if (window.useMemberPoints && currentMember) {
        pointsDisc = Math.min(subAfterDisc + shippingAfterDisc + taxInfo.grandTotalAdd, parseFloat(currentMember.points) || 0);
    }
    let grandTotal = Math.max(0, subAfterDisc + shippingAfterDisc + (taxInfo.grandTotalAdd || 0) - pointsDisc);

    // Evaluasi Limit PayLater & Down Payment (DP)
    let dpVal = 0;
    const isExceedLimit = grandTotal > available;
    if (isExceedLimit) {
        const deficit = grandTotal - available;
        dpVal = parseFloat(dpInput?.value) || 0;
        if (dpVal < deficit) {
            dpVal = deficit;
            if (dpInput) dpInput.value = dpVal;
        }
        if (excessBox) excessBox.classList.remove('hidden');
    } else {
        if (excessBox) excessBox.classList.add('hidden');
        if (dpInput) dpInput.value = 0;
        dpVal = 0;
    }

    const financedAmount = Math.min(available, Math.max(0, grandTotal - dpVal));

    // Hitung rincian multi-tenor PayLater berdasarkan sisa pembiayaan yang dicicil
    const plConfig = getPaylaterConfig();
    const sim = calculateAllPaylaterTenors(financedAmount > 0 ? financedAmount : grandTotal, { ...plConfig, dueDay });
    const tenors = sim.results;

    let activeTenorKey = window.selectedCheckoutPaylaterTenor || '30d';
    if (!tenors[activeTenorKey] || !tenors[activeTenorKey].enabled) {
        const firstEnabled = Object.keys(tenors).find(k => tenors[k].enabled);
        activeTenorKey = firstEnabled || '30d';
        window.selectedCheckoutPaylaterTenor = activeTenorKey;
    }
    const activeBreakdown = tenors[activeTenorKey];
    window.currentPaylaterBreakdown = activeBreakdown;

    // Render Tenor Chips di Checkout
    if (tenorChipsGrid) {
        const tenorKeys = ['30d', '2m', '3m'];
        tenorChipsGrid.innerHTML = tenorKeys.map(k => {
            const t = tenors[k];
            if (!t || !t.enabled) return '';
            const isSelected = k === activeTenorKey;
            const cardCls = isSelected 
                ? 'border-2 text-[var(--color-primary)] shadow-sm' 
                : 'border border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-slate-800/80 text-slate-600 dark:text-slate-300 hover:border-slate-300 dark:hover:border-slate-600';
            const cardStyle = isSelected
                ? `border-color: var(--color-primary); background: rgba(var(--color-primary-rgb), 0.1); box-shadow: 0 0 0 2px rgba(var(--color-primary-rgb), 0.15);`
                : '';
            return `
                <button type="button" onclick="window.selectCheckoutPaylaterTenor('${k}')" 
                        class="p-2 sm:p-2.5 rounded-xl text-center transition-all cursor-pointer flex flex-col items-center justify-center gap-0.5 min-h-[46px] select-none touch-manipulation active:scale-95 ${cardCls}"
                        style="${cardStyle}">
                    <span class="text-[9.5px] font-black uppercase tracking-wider block">${esc(t.shortLabel)}</span>
                    <span class="text-[11px] sm:text-xs font-black block" ${isSelected ? 'style="color: var(--color-primary);"' : ''}>${fCur(t.totalPerMonth)}<span class="text-[8px] font-normal text-slate-400">/bln</span></span>
                </button>
            `;
        }).filter(Boolean).join('');
    }

    // Render Rincian Transparan (Zero Hidden Fees)
    if (tenorBreakdownBox && activeBreakdown) {
        tenorBreakdownBox.innerHTML = `
            <div class="p-3 sm:p-3.5 rounded-xl bg-white/95 dark:bg-slate-800/90 border border-slate-200/90 dark:border-slate-700 shadow-2xs space-y-1.5 text-xs" style="border-left: 3.5px solid var(--color-primary);">
                <div class="flex items-center justify-between pb-1.5 border-b border-slate-100 dark:border-slate-700">
                    <span class="text-[10px] font-black uppercase tracking-wider text-slate-700 dark:text-slate-200 flex items-center gap-1.5">
                        <i class="fa-solid fa-receipt" style="color: var(--color-primary);"></i> Rincian Tenor ${esc(activeBreakdown.label)}
                    </span>
                    <span class="text-[9px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1" style="background: rgba(var(--color-primary-rgb), 0.1); color: var(--color-primary);">
                        <i class="fa-solid fa-shield-halved text-[9px] text-emerald-500"></i> Transparan
                    </span>
                </div>
                <div class="flex justify-between items-center text-slate-600 dark:text-slate-400 text-[11px]">
                    <span>Pokok Tagihan (${activeBreakdown.months} bulan)</span>
                    <span class="font-bold text-slate-800 dark:text-slate-200">${fCur(activeBreakdown.pokokPerMonth)} / bln</span>
                </div>
                <div class="flex justify-between items-center text-slate-600 dark:text-slate-400 text-[11px]">
                    <span class="flex items-center gap-1">Biaya Admin ${activeBreakdown.adminFeeType === 'percent' && activeBreakdown.adminFeeValue > 0 ? `(${activeBreakdown.adminFeeValue}%)` : ''}</span>
                    <span class="font-bold ${activeBreakdown.adminFeePerMonth === 0 ? 'text-emerald-600 dark:text-emerald-400' : 'text-slate-800 dark:text-slate-200'}">
                        ${activeBreakdown.adminFeePerMonth === 0 ? 'Rp 0 (Gratis)' : `${fCur(activeBreakdown.adminFeePerMonth)} / bln`}
                    </span>
                </div>
                <div class="flex justify-between items-center text-slate-600 dark:text-slate-400 text-[11px]">
                    <span class="flex items-center gap-1">Biaya Penanganan ${activeBreakdown.serviceFeeType === 'percent' && activeBreakdown.serviceFeeValue > 0 ? `(${activeBreakdown.serviceFeeValue}%)` : ''}</span>
                    <span class="font-bold ${activeBreakdown.serviceFeePerMonth === 0 ? 'text-emerald-600 dark:text-emerald-400' : 'text-slate-800 dark:text-slate-200'}">
                        ${activeBreakdown.serviceFeePerMonth === 0 ? 'Rp 0 (Gratis)' : `${fCur(activeBreakdown.serviceFeePerMonth)} / bln`}
                    </span>
                </div>
                <div class="pt-2 mt-1.5 border-t border-dashed border-slate-200 dark:border-slate-700 flex justify-between items-baseline">
                    <span class="text-[11px] font-black uppercase text-slate-800 dark:text-white">Tagihan per Bulan:</span>
                    <span class="text-sm font-black font-mono" style="color: var(--color-primary);">${fCur(activeBreakdown.totalPerMonth)} <span class="text-[10px] font-bold text-slate-400">/ bulan</span></span>
                </div>
                <div class="flex justify-between items-center text-[10px] text-slate-500 pt-0.5">
                    <span>Total Tagihan Seluruhnya:</span>
                    <span class="font-bold text-slate-700 dark:text-slate-300">${fCur(activeBreakdown.grandTotal)}</span>
                </div>
            </div>
        `;
    }

    // Render Box Status Evaluasi Limit
    if (!isExceedLimit) {
        if (statusBox) {
            statusBox.innerHTML = '<div class="flex items-center gap-2 font-extrabold mb-1" style="color: var(--color-primary);"><i class="fa-solid fa-circle-check text-emerald-500 text-sm"></i><span>Limit PayLater Anda Sangat Cukup!</span></div><p class="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed">Total belanja <b>' + fCur(grandTotal) + '</b> otomatis dipotong dari limit PayLater Anda. Anda <b>tidak perlu bayar sekarang</b> dan tanpa uang muka (DP Rp 0). Angsuran dicicil sesuai tenor ' + esc(activeBreakdown.label) + ' (' + fCur(activeBreakdown.totalPerMonth) + '/bln) mulai tgl ' + dueDay + ' bulan depan.</p>';
        }
    } else {
        const deficit = grandTotal - available;
        if (statusBox) {
            statusBox.innerHTML = '<div class="flex items-center gap-2 text-amber-700 dark:text-amber-300 font-extrabold mb-1"><i class="fa-solid fa-triangle-exclamation text-amber-500 text-sm"></i><span>Total Belanja Melebihi Sisa Limit PayLater</span></div><p class="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed">Sisa limit Anda <b>' + fCur(available) + '</b> akan digunakan maksimal untuk cicilan ' + esc(activeBreakdown.label) + ' (' + fCur(activeBreakdown.totalPerMonth) + '/bln). Selisih kekurangan sebesar <b>' + fCur(deficit) + '</b> wajib dibayar sebagai DP via Transfer/QRIS.</p>';
        }
    }

    const needsBukti = (parseFloat(dpInput?.value) || 0) > 0;
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

    // Auto Free Shipping jika memenuhi minimal belanja promo
    const isFsPromo = (appData.store.freeShippingMinSpendEnabled === true || appData.store.freeShippingMinSpendEnabled === 'true')
        && (parseFloat(appData.store.freeShippingMinSpendAmount) || 0) > 0
        && sub >= (parseFloat(appData.store.freeShippingMinSpendAmount) || 0)
        && cust.deliveryMethod === 'delivery';

    if (isFsPromo) {
        shippingDisc = sC;
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
