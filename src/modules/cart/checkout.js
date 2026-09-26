/**
 * ============================================================
 * MODUL CHECKOUT & PEMBAYARAN PESANAN
 * Mengatur validasi kontak & alamat pengiriman, kalkulasi total
 * pembayaran (ongkir, voucher, PPN), serta transaksi pesanan ke Firestore.
 * ============================================================
 */

import { appData, cart, setCart, cust, setCust, vouch, setVouch, myOrders, setMyOrders, currentMember, setCurrentMember, selectedReward, setSelectedReward, isSaving, setIsSaving } from '../../core/state.js';
import { el, show, hide, toggleCls, getV, setV, setIn, setH, esc, fCur, sL, ssL, sLoad, hLoad, renderProductCoverHtml } from '../../core/utils.js';
import { db, firebase } from '../../config/firebase.js';

/**
 * Toggle tampilan form drop-point (Kirim ke Lokasi Berbeda)
 */
export const toggleDropPoint = () => {
    const toggle = el('toggle-droppoint');
    const form = el('droppoint-form');
    if (!toggle || !form) return;
    if (toggle.checked) {
        form.classList.remove('hidden');
    } else {
        form.classList.add('hidden');
        // Reset data drop-point jika dinonaktifkan
        cust.dropPoint = null;
        const dpLocStatus = el('dp-location-status');
        if (dpLocStatus) dpLocStatus.classList.add('hidden');
        const btnDpLoc = el('btn-dp-location');
        const textDpLoc = el('text-dp-location');
        if (btnDpLoc) btnDpLoc.innerHTML = '<i class="fa-solid fa-location-crosshairs text-sm text-rose-500"></i> <span id="text-dp-location">Sematkan GPS Lokasi Tujuan</span>';
    }
};

/**
 * Ambil GPS untuk lokasi tujuan (Drop-Point)
 */
export const getDPLocation = () => {
    if (!navigator.geolocation) {
        if (typeof window.showToast === 'function') window.showToast('GPS tidak didukung');
        return;
    }
    const btn = el('btn-dp-location');
    if (btn) btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin text-sm"></i> Mengambil GPS...';
    navigator.geolocation.getCurrentPosition(
        (pos) => {
            if (!cust.dropPoint) cust.dropPoint = {};
            cust.dropPoint.lat = pos.coords.latitude;
            cust.dropPoint.lng = pos.coords.longitude;
            const statusEl = el('dp-location-status');
            if (statusEl) statusEl.classList.remove('hidden');
            if (btn) btn.innerHTML = '<i class="fa-solid fa-location-crosshairs text-sm text-rose-500"></i> <span id="text-dp-location">GPS Berhasil! Tap untuk Update</span>';
            if (typeof window.showToast === 'function') window.showToast('GPS Lokasi Tujuan Berhasil!');
        },
        () => {
            if (btn) btn.innerHTML = '<i class="fa-solid fa-location-crosshairs text-sm text-rose-500"></i> <span id="text-dp-location">Sematkan GPS Lokasi Tujuan</span>';
            if (typeof window.showToast === 'function') window.showToast('Gagal akses GPS');
        },
        { enableHighAccuracy: true, timeout: 15000 }
    );
};

/**
 * Handle input maps (koordinat/link) untuk lokasi tujuan drop-point
 */
export const handleDPMapsInput = (val) => {
    if (!val || val.trim().length < 5) return;
    const parseGeo = typeof window.parseGeoCoordinates === 'function' ? window.parseGeoCoordinates : null;
    const coords = parseGeo ? parseGeo(val) : null;
    if (coords) {
        if (!cust.dropPoint) cust.dropPoint = {};
        cust.dropPoint.lat = parseFloat(coords.lat);
        cust.dropPoint.lng = parseFloat(coords.lng);
        const statusEl = el('dp-location-status');
        if (statusEl) statusEl.classList.remove('hidden');
        if (typeof window.showToast === 'function') window.showToast('Koordinat Lokasi Tujuan berhasil!');
    }
};

/**
 * Paste clipboard ke input maps drop-point
 */
export const pasteDPMapsInput = async () => {
    try {
        const text = await navigator.clipboard.readText();
        const inp = el('dp-maps-input');
        if (inp) {
            inp.value = text;
            handleDPMapsInput(text);
        }
    } catch(e) {
        if (typeof window.showToast === 'function') window.showToast('Gagal membaca clipboard');
    }
};

/**
 * Validasi form pengiriman dan lanjut ke ringkasan pembayaran
 */
export const validateAndGoToPayment = () => {
    if (appData.store.isDeliveryEnabled === false && appData.store.isPickupEnabled === false) {
        if (typeof window.showToast === 'function') window.showToast("Toko tutup!");
        return;
    }
    const n = getV('cust-name');
    const m = (document.querySelector('input[name="delivery-method"]:checked') || {}).value;
    if (!n || !m) {
        if (typeof window.showToast === 'function') window.showToast("Lengkapi form nama!");
        return;
    }
    
    // Validasi nomor WhatsApp wajib
    let waNum = getV('cust-wa').replace(/\D/g, '');
    if (!waNum || waNum.length < 9) {
        if (typeof window.showToast === 'function') window.showToast("Nomor WhatsApp wajib diisi! (min. 9 digit)");
        return;
    }
    if (waNum.startsWith('0')) waNum = '62' + waNum.substring(1);
    else if (!waNum.startsWith('62')) waNum = '62' + waNum;
    
    cust.name = n; 
    cust.deliveryMethod = m; 
    cust.note = getV('cust-note'); 
    cust.wa = waNum;
    
    if (m === 'delivery') {
        cust.address = getV('cust-address');
        if (!cust.lat || !cust.lng) {
            const mInput = el('cust-maps-input')?.value;
            if (mInput && typeof window.handleCustomerMapsInput === 'function') {
                window.handleCustomerMapsInput(mInput);
            }
        }
        if (!cust.address || !cust.lat || !cust.lng) {
            if (typeof window.showToast === 'function') window.showToast("Alamat & GPS wajib!");
            return;
        }
        const getDist = typeof window.getDist === 'function' ? window.getDist : (() => 0);
        cust.distance = getDist(parseFloat(appData.store.lat || 0), parseFloat(appData.store.lng || 0), cust.lat, cust.lng) || 0;

        // ─── LOGIKA DROP-POINT DELIVERY ───────────────────────────────
        const toggleDP = el('toggle-droppoint');
        const isDPActive = toggleDP && toggleDP.checked;
        if (isDPActive) {
            let dpName = getV('dp-receiver-name').trim();
            let dpWaRaw = getV('dp-receiver-wa').replace(/\D/g, '');
            let dpAddr = getV('dp-address').trim();
            if (!dpName) {
                if (typeof window.showToast === 'function') window.showToast('Nama penerima di lokasi tujuan wajib diisi!');
                return;
            }
            if (!dpWaRaw || dpWaRaw.length < 9) {
                if (typeof window.showToast === 'function') window.showToast('Nomor WA penerima di lokasi tujuan wajib diisi (min. 9 digit)!');
                return;
            }
            if (!dpAddr) {
                if (typeof window.showToast === 'function') window.showToast('Alamat lokasi tujuan wajib diisi!');
                return;
            }
            if (!cust.dropPoint || !cust.dropPoint.lat || !cust.dropPoint.lng) {
                if (typeof window.showToast === 'function') window.showToast('GPS / Koordinat lokasi tujuan wajib diisi untuk kalkulasi ongkir!');
                return;
            }
            // Format nomor WA penerima
            if (dpWaRaw.startsWith('0')) dpWaRaw = '62' + dpWaRaw.substring(1);
            else if (!dpWaRaw.startsWith('62')) dpWaRaw = '62' + dpWaRaw;

            // Simpan data drop-point ke cust
            cust.dropPoint.name = dpName;
            cust.dropPoint.wa = dpWaRaw;
            cust.dropPoint.address = dpAddr;

            // KUNCI: Hitung ongkir dari TOKO ke LOKASI TUJUAN (bukan lokasi pembeli)
            cust.distance = getDist(
                parseFloat(appData.store.lat || 0),
                parseFloat(appData.store.lng || 0),
                cust.dropPoint.lat,
                cust.dropPoint.lng
            ) || 0;
        } else {
            // Mode normal: hapus data drop-point jika ada
            cust.dropPoint = null;
        }
        // ─── END LOGIKA DROP-POINT ────────────────────────────────────
    } else {
        cust.address = "Ambil di Toko"; 
        cust.distance = 0;
        cust.dropPoint = null;
    }
    
    if (vouch && vouch.type && vouch.type.includes('shipping') && m !== 'delivery') {
        setVouch(null);
    }
    if (el('voucher-input') && !vouch) { 
        el('voucher-input').value = ''; 
        hide('voucher-msg-container'); 
    }
    if (typeof window.changeView === 'function') window.changeView('view-payment');
};

/**
 * Toggle tampilan form alamat berdasarkan metode antar (kirim vs ambil di toko)
 */
export const toggleDeliveryMethod = () => { 
    toggleCls('address-container', 'hidden', (document.querySelector('input[name="delivery-method"]:checked') || {}).value === 'pickup'); 
};

/**
 * Aktifkan tombol proses order saat syarat & ketentuan diceklis
 */
export const toggleOrderButton = () => { 
    const tnc = el('tnc-checkbox'), btn = el('btn-process-order');
    if (!tnc || !btn) return;
    tnc.checked ? btn.classList.remove('btn-disabled') : btn.classList.add('btn-disabled');
};

/**
 * Kalkulasi dan render rincian pembayaran di view-payment
 */
export const rPay = () => {
    if (!cart.length) {
        if (typeof window.showToast === 'function') window.showToast("Keranjang belanja kosong!");
        if (typeof window.changeView === 'function') window.changeView('view-catalog', true);
        return;
    }
    if (!cust.name) {
        if (typeof window.showToast === 'function') window.showToast("Lengkapi data pengiriman terlebih dahulu!");
        if (typeof window.changeView === 'function') window.changeView('view-checkout', true);
        return;
    }
    
    const getEffP = typeof window.getEffP === 'function' ? window.getEffP : (i => i.price || 0);
    const sub = cart.reduce((s, i) => s + (parseFloat(getEffP(i)) || 0) * (parseFloat(i.qty) || 0), 0);
    let sC = 0, shippingDisc = 0, productDisc = 0;
    
    if (cust.deliveryMethod === 'delivery') {
        sC = Math.ceil((parseFloat(cust.distance) || 0) * (parseFloat(appData.store.costPerKm) || 0) / 500) * 500;
    }

    // Re-validasi voucher jika barang dihapus / subtotal berkurang
    if (vouch) {
        if (vouch.minPurchase && parseFloat(vouch.minPurchase) > 0 && sub < parseFloat(vouch.minPurchase)) {
            setVouch(null);
            hide('voucher-msg-container');
            if (typeof window.showToast === 'function') window.showToast(`Voucher dibatalkan (min. belanja ${fCur(vouch.minPurchase)})`);
        } else if (vouch.targetProduct && !cart.some(i => i.id === parseInt(vouch.targetProduct))) {
            setVouch(null);
            hide('voucher-msg-container');
            if (typeof window.showToast === 'function') window.showToast("Voucher dibatalkan (produk khusus dihapus)");
        }
    }
    
    if (vouch) {
        let eligibleSubtotal = sub;
        if (vouch.targetProduct && vouch.targetProduct !== '') {
            const targetId = parseInt(vouch.targetProduct);
            const eligibleItems = cart.filter(i => i.id === targetId);
            eligibleSubtotal = eligibleItems.reduce((s, i) => s + (parseFloat(getEffP(i)) || 0) * (parseFloat(i.qty) || 0), 0);
        }

        if (vouch.type === 'shipping_free') {
            shippingDisc = sC; 
        } else if (vouch.type === 'shipping_flat') {
            shippingDisc = parseFloat(vouch.value) || 0; 
        } else if (vouch.type === 'percent') {
            let calcDisc = eligibleSubtotal * ((parseFloat(vouch.value) || 0) / 100);
            if (vouch.maxDiscount && parseFloat(vouch.maxDiscount) > 0) calcDisc = Math.min(calcDisc, parseFloat(vouch.maxDiscount));
            productDisc = calcDisc;
        } else {
            productDisc = parseFloat(vouch.value) || 0;
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
    
    // --- KALKULASI PPN & PAJAK ---
    const baseAfterDisc = Math.max(0, (sub - productDisc) + (sC - shippingDisc));
    const calcTaxDetails = typeof window.calcTaxDetails === 'function' ? window.calcTaxDetails : (() => ({ ppnEnabled: false, ppnAmount: 0, grandTotalAdd: 0 }));
    const taxInfo = calcTaxDetails(baseAfterDisc);
    const ppnAmount = taxInfo.ppnAmount;
    const t = baseAfterDisc + taxInfo.grandTotalAdd;
    
    setIn('summary-subtotal', fCur(sub));
    toggleCls('summary-shipping-row', 'hidden', cust.deliveryMethod !== 'delivery');
    
    const discRow = el('summary-discount-row');
    if (discRow) {
        if (productDisc > 0 || shippingDisc > 0) {
            discRow.classList.remove('hidden'); 
            let txtHtml = '';
            if (productDisc > 0) txtHtml += `<div class="flex justify-between items-center w-full mt-1.5"><p class="text-xs font-bold text-slate-500">Diskon Promo</p><p class="text-[13px] font-bold text-rose-500">-${fCur(productDisc)}</p></div>`;
            if (shippingDisc > 0) {
                const sLabel = isFsPromo ? 'Gratis Ongkir (Promo Belanja)' : 'Diskon Ongkir';
                txtHtml += `<div class="flex justify-between items-center w-full mt-1.5"><p class="text-xs font-bold text-slate-500">${sLabel}</p><p class="text-[13px] font-bold text-rose-500">-${fCur(shippingDisc)}</p></div>`;
            }
            discRow.innerHTML = txtHtml;
        } else { 
            discRow.classList.add('hidden'); 
        }
    }
    
    if (cust.deliveryMethod === 'delivery') {
        setIn('summary-shipping', fCur(sC));
        setIn('summary-distance', `(${cust.distance.toFixed(1)}km)`);
    }
    
    setIn('summary-total', fCur(t));
    if (el('btn-total-preview')) setIn('btn-total-preview', fCur(t));
    
    // PPN row
    const ppnRow = el('summary-ppn-row');
    if (ppnRow) {
        if (taxInfo.ppnEnabled && ppnAmount > 0) {
            ppnRow.classList.remove('hidden');
            if (taxInfo.ppnType === 'inclusive') {
                setIn('summary-ppn-label', `Termasuk PPN (${taxInfo.ppnRate}%)`);
                setIn('summary-ppn', fCur(ppnAmount));
            } else {
                setIn('summary-ppn-label', `PPN (${taxInfo.ppnRate}%)`);
                setIn('summary-ppn', `+${fCur(ppnAmount)}`);
            }
        } else {
            ppnRow.classList.add('hidden');
        }
    }
    
    setIn('payment-cust-name', cust.name || '-');
    if (el('payment-cust-wa')) el('payment-cust-wa').textContent = cust.wa ? '+' + cust.wa : '-';
    if (cust.dropPoint && cust.dropPoint.lat) {
        setIn('payment-cust-method', `Kirim ke Lokasi Berbeda (${cust.distance.toFixed(1)}km dari Toko)`);
    } else {
        setIn('payment-cust-method', cust.deliveryMethod === 'delivery' ? `Dikirim (${cust.distance.toFixed(1)}km)` : 'Ambil di Toko');
    }
    setIn('payment-cust-address', cust.address || '-');

    // ─── TAMPILKAN INFO DROP-POINT DI VIEW-PAYMENT ───────────────
    const dpInfoEl = el('payment-droppoint-info');
    if (dpInfoEl) {
        if (cust.dropPoint && cust.dropPoint.lat && cust.dropPoint.name) {
            dpInfoEl.classList.remove('hidden');
            setIn('payment-dp-name', cust.dropPoint.name || '-');
            const dpWaEl = el('payment-dp-wa');
            if (dpWaEl) dpWaEl.textContent = cust.dropPoint.wa ? '+' + cust.dropPoint.wa : '-';
            setIn('payment-dp-address', cust.dropPoint.address || '-');
        } else {
            dpInfoEl.classList.add('hidden');
        }
    }
    // ─── END DROP-POINT DISPLAY ───────────────────────────────────
    
    setH('payment-items-preview', cart.map(i => {
        const variantText = i.variantName ? `<span class="bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300 px-1.5 py-0.5 rounded-lg text-[9px] font-bold">${esc(i.variantName)}</span>` : '';
        const poText = i.poTime ? `<span class="amber-badge px-1.5 py-0.5 rounded-lg text-[8px] font-bold uppercase">PO ${esc(i.poTime)}</span>` : '';
        const hasCheckImg = Boolean(i.img && typeof i.img === 'string' && i.img.trim());
        const coverThumb = renderProductCoverHtml(i, { size: 'thumb' });
        return `
        <div class="flex justify-between items-center bg-white dark:bg-slate-800 p-4 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm min-w-0">
            <div class="flex items-center gap-3.5 min-w-0">
                <div class="w-12 h-12 rounded-xl border border-slate-200 dark:border-slate-700 shrink-0 overflow-hidden flex items-center justify-center">
                    ${hasCheckImg 
                        ? `<img loading="lazy" src="${esc(i.img)}" alt="${esc(i.name)}" class="w-full h-full object-cover" onerror="this.onerror=null;this.style.display='none';if(this.nextElementSibling)this.nextElementSibling.style.display='flex';"><div class="w-full h-full" style="display:none">${coverThumb}</div>`
                        : coverThumb}
                </div>
                <div class="min-w-0">
                    <p class="text-sm font-bold text-slate-800 dark:text-white truncate mb-1" title="${esc(i.name)}">${esc(i.name)}</p>
                    ${(i.variantName || i.poTime) ? `
                    <div class="flex flex-wrap gap-1 mb-1">
                        ${variantText}
                        ${poText}
                    </div>` : ''}
                    <p class="text-[11px] text-[var(--color-primary)] font-bold">${parseFloat(i.qty)} ${esc(i.unit || 'pcs')} x ${fCur(getEffP(i))}</p>
                </div>
            </div>
            <div class="text-sm font-bold text-slate-900 dark:text-white whitespace-nowrap ml-3 shrink-0">${fCur(getEffP(i) * parseFloat(i.qty))}</div>
        </div>`;
    }).join('')
    + (selectedReward ? `<div class="flex justify-between items-center bg-[rgba(var(--color-primary-rgb),0.06)] dark:bg-[rgba(var(--color-primary-rgb),0.12)] p-4 rounded-2xl border border-[var(--color-primary)]/30 shadow-sm min-w-0"><div class="flex items-center gap-3.5 min-w-0"><div class="w-12 h-12 rounded-xl bg-[var(--color-primary)] text-white flex items-center justify-center shrink-0"><i class="fa-solid fa-gift"></i></div><div class="min-w-0"><p class="text-sm font-bold text-[var(--color-primary)] truncate">${esc(selectedReward.name)}</p><p class="text-[11px] text-[var(--color-primary)] font-bold mt-1"><i class="fa-solid fa-star mr-1"></i>Tukar ${selectedReward.pointsCost} Poin (Gratis)</p></div></div><button type="button" onclick="if(typeof deselectReward==='function') deselectReward(); rPay();" class="text-[10px] font-bold text-rose-500 uppercase shrink-0 ml-3">Batal</button></div>` : ''));
        
    if (cust.note) { 
        setIn('payment-note-text', `"${esc(cust.note)}"`); 
        show('payment-note-preview'); 
    } else {
        hide('payment-note-preview');
    }
    
    setH('dynamic-banks-container', appData.banks?.length ? appData.banks.map(b => `<div class="bg-white dark:bg-slate-800 p-4 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm"><p class="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">Bank ${esc(b.bankName)}</p><p class="text-lg font-bold text-[var(--color-primary)] tracking-wide">${esc(b.bankAccount)}</p><p class="text-xs text-slate-500 dark:text-slate-400 font-medium mt-1.5">a.n <span class="font-bold text-slate-700 dark:text-white">${esc(b.bankOwner)}</span></p></div>`).join('') : '<div class="bg-rose-50 dark:bg-rose-900/20 border border-rose-200 p-4 rounded-2xl text-center"><p class="text-sm text-rose-500 dark:text-rose-400 font-bold">Rekening belum diatur.</p></div>');
    
    const co = el('payment-option-cashier'), cc = el('payment-option-cod');
    if (co && cc) {
        if (cust.deliveryMethod === 'pickup') {
            show('payment-option-cashier'); 
            hide('payment-option-cod');
            if ((document.querySelector('input[name="payment"]:checked') || {}).value === 'cod') {
                const cashierEl = document.querySelector('input[value="cashier"]');
                if (cashierEl) cashierEl.checked = true;
            }
        } else {
            hide('payment-option-cashier'); 
            show('payment-option-cod');
            const checkedVal = (document.querySelector('input[name="payment"]:checked') || {}).value;
            if (checkedVal === 'cashier' || !checkedVal) {
                const codEl = document.querySelector('input[value="cod"]');
                if (codEl) codEl.checked = true;
            }
        }
        if (typeof window.togglePaymentDetails === 'function') window.togglePaymentDetails();
    }
    
    const tncEl = el('tnc-checkbox');
    if (tncEl) { 
        tncEl.checked = false; 
        toggleOrderButton(); 
    }
};

/**
 * Transaksi proses order ke server Firestore (Atomic Transaction)
 */
export const processOrder = async () => {
    if (!el('tnc-checkbox').checked || isSaving) return;

    if (window.isAdm) {
        if (typeof window.showToast === 'function') window.showToast("Anda login sebagai Seller. Logout dulu untuk membuat pesanan.");
        return;
    }

    const lO = sL('freshmart_last_order');
    if (lO && (Date.now() - parseInt(lO)) < 60000) {
        if (typeof window.showToast === 'function') window.showToast("Tunggu 1 menit untuk pesanan baru!");
        return;
    }
    
    const getEffP = typeof window.getEffP === 'function' ? window.getEffP : (i => i.price || 0);
    const getEffHpp = typeof window.getEffHpp === 'function' ? window.getEffHpp : (() => 0);
    const getEffPoin = typeof window.getEffPoin === 'function' ? window.getEffPoin : (() => 0);

    // Keamanan: Validasi & sinkronisasi harga dari server appData
    let priceWasTampered = false;
    cart.forEach(cartItem => {
        const serverProd = appData.products.find(p => p.id === cartItem.id);
        if (!serverProd) return;
        const serverPrice = cartItem.variantName
            ? ((serverProd.variants || []).find(v => v.name === cartItem.variantName) || {}).price ?? serverProd.price
            : serverProd.price;
        if (serverPrice !== undefined && Math.abs(cartItem.price - serverPrice) > 1) {
            cartItem.price = serverPrice;
            priceWasTampered = true;
        }
        cartItem.poin = getEffPoin(cartItem);
    });
    
    if (priceWasTampered) {
        ssL('freshmart_cart', JSON.stringify(cart));
        if (typeof window.renderCart === 'function') window.renderCart();
        rPay();
        if (typeof window.showToast === 'function') window.showToast("Harga produk telah diperbarui. Periksa kembali sebelum order.");
        return;
    }
    
    setIsSaving(true); 
    sLoad('Proses Pesanan...');
    
    try {
        const sub = cart.reduce((s, i) => s + (parseFloat(getEffP(i)) || 0) * (parseFloat(i.qty) || 0), 0);
        let sC = 0, shippingDisc = 0, productDisc = 0;
        
        if (cust.deliveryMethod === 'delivery') {
            sC = Math.ceil((parseFloat(cust.distance) || 0) * (parseFloat(appData.store.costPerKm) || 0) / 500) * 500;
        }
        
        const useStk = appData.store.useStock === true || appData.store.useStock === 'true';
        if (useStk) {
            for (const cartItem of cart) {
                const serverProd = appData.products.find(p => p.id === cartItem.id);
                if (!serverProd) continue;
                const qty = parseFloat(cartItem.qty) || 0;
                if (cartItem.variantName) {
                    const variant = (serverProd.variants || []).find(v => v.name === cartItem.variantName);
                    const stk = parseFloat(variant && variant.stock !== undefined ? variant.stock : 0);
                    if (stk < qty) {
                        setIsSaving(false); 
                        hLoad();
                        if (typeof window.showToast === 'function') window.showToast(`Stok ${cartItem.name} (${cartItem.variantName}) tidak cukup! Sisa: ${stk}`);
                        return;
                    }
                } else {
                    const stk = parseFloat(serverProd.stock !== undefined ? serverProd.stock : 0);
                    if (stk < qty) {
                        setIsSaving(false); 
                        hLoad();
                        if (typeof window.showToast === 'function') window.showToast(`Stok ${cartItem.name} tidak cukup! Sisa: ${stk}`);
                        return;
                    }
                }
            }
        }
        
        if (vouch) {
            let eligibleSubtotal = sub;
            if (vouch.targetProduct && vouch.targetProduct !== '') {
                const targetId = parseInt(vouch.targetProduct);
                const eligibleItems = cart.filter(i => i.id === targetId);
                eligibleSubtotal = eligibleItems.reduce((s, i) => s + (parseFloat(getEffP(i)) || 0) * (parseFloat(i.qty) || 0), 0);
            }

            if (vouch.minPurchase && parseFloat(vouch.minPurchase) > 0 && sub < parseFloat(vouch.minPurchase)) { 
                setVouch(null); 
            } else if (vouch.targetProduct && vouch.targetProduct !== '' && eligibleSubtotal === 0) { 
                setVouch(null); 
            } else if (vouch.type && vouch.type.includes('shipping') && cust.deliveryMethod !== 'delivery') { 
                setVouch(null); 
            } else {
                if (vouch.type === 'shipping_free') shippingDisc = sC;
                else if (vouch.type === 'shipping_flat') shippingDisc = parseFloat(vouch.value) || 0;
                else if (vouch.type === 'percent') {
                    let calcDisc = eligibleSubtotal * ((parseFloat(vouch.value) || 0) / 100);
                    if (vouch.maxDiscount && parseFloat(vouch.maxDiscount) > 0) calcDisc = Math.min(calcDisc, parseFloat(vouch.maxDiscount));
                    productDisc = calcDisc;
                } else {
                    productDisc = parseFloat(vouch.value) || 0;
                    productDisc = Math.min(productDisc, eligibleSubtotal);
                }
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
        
        const baseAfterDisc = Math.max(0, (sub - productDisc) + (sC - shippingDisc));
        const calcTaxDetails = typeof window.calcTaxDetails === 'function' ? window.calcTaxDetails : (() => ({ ppnEnabled: false, ppnAmount: 0, grandTotalAdd: 0 }));
        const taxInfo = calcTaxDetails(baseAfterDisc);
        const ppnAmount = taxInfo.ppnAmount;
        const dppAmount = taxInfo.dppAmount;
        const tot = baseAfterDisc + taxInfo.grandTotalAdd;
        
        const m = (document.querySelector('input[name="payment"]:checked') || {}).value;
        
        const needsBukti = (m === 'transfer' || m === 'qris' || m === 'tempo');
        const buktiReady = window.buktiGDriveUploaded && window.buktiPaymentUrl && !window.buktiPaymentUrl.startsWith('data:');
        if (needsBukti && !buktiReady) {
            setIsSaving(false); 
            hLoad();
            if (!window.buktiPaymentFile) {
                if (typeof window.showToast === 'function') window.showToast('Upload bukti pembayaran terlebih dahulu!');
                return;
            }
            if (typeof window.showToast === 'function') window.showToast('Tunggu upload Google Drive selesai, atau coba lagi!');
            return;
        }
        
        const oI = 'ORD-' + Date.now().toString(36).toUpperCase() + '-' + Math.random().toString(36).substring(2, 6).toUpperCase();
        
        if (window.buktiPaymentFile && !window.buktiGDriveUploaded) {
            try {
                sLoad('Upload Bukti ke Google Drive...');
                const uploadedUrl = await window.uploadBuktiToFirebase(window.buktiPaymentFile, oI);
                if (uploadedUrl && !uploadedUrl.startsWith('data:')) {
                    window.buktiPaymentUrl = uploadedUrl;
                    window.buktiGDriveUploaded = true;
                } else {
                    setIsSaving(false); 
                    hLoad();
                    if (typeof window.showToast === 'function') window.showToast('❌ Upload bukti ke Google Drive gagal. Coba pilih gambar lagi!');
                    return;
                }
                sLoad('Proses Pesanan...');
            } catch(uploadErr) {
                setIsSaving(false); 
                hLoad();
                if (typeof window.showToast === 'function') window.showToast('❌ Gagal upload bukti. Periksa koneksi dan coba lagi!');
                return;
            }
        }
        
        const oD = {
            orderId: oI, 
            timestamp: firebase.firestore.FieldValue.serverTimestamp(), 
            dateString: new Date().toISOString(),
            customer: cust, 
            isDropPoint: !!(cust.dropPoint && cust.dropPoint.lat && cust.dropPoint.name),
            dropPoint: (cust.dropPoint && cust.dropPoint.lat && cust.dropPoint.name) ? { ...cust.dropPoint } : null,
            items: cart.map(i => ({
                ...i, 
                qty: parseFloat(i.qty), 
                effectivePrice: getEffP(i), 
                poTime: i.poTime || '', 
                hpp: getEffHpp(i), 
                poin: getEffPoin(i)
            })),
            payment: { 
                method: m, 
                subtotal: sub, 
                shippingCost: sC, 
                shippingDiscount: shippingDisc, 
                productDiscount: productDisc, 
                ppnAmount: ppnAmount, 
                dppAmount: dppAmount, 
                ppnRate: taxInfo.ppnEnabled ? taxInfo.ppnRate : 0, 
                ppnType: taxInfo.ppnEnabled ? taxInfo.ppnType : 'exclusive', 
                grandTotal: tot,
                isFreeShippingPromo: isFsPromo || false
            },
            status: 'Baru',
            buktiPayment: window.buktiPaymentUrl || null
        };

        if (m === 'tempo') {
            if (!cust.wa) {
                setIsSaving(false); 
                hLoad();
                if (typeof window.showToast === 'function') window.showToast('Pembayaran Cash Tempo hanya untuk Member Resmi terdaftar!');
                return;
            }
            const dpInput = document.getElementById('tempo-dp-input');
            let dp = dpInput ? parseFloat(dpInput.value) || 0 : 0;
            if (dp > tot) dp = tot;
            oD.payment.tempoDp = dp;
            oD.payment.tempoBalance = tot - dp;
            oD.payment.tempoDueDate = Date.now() + (30 * 24 * 60 * 60 * 1000);
            oD.payment.paymentStatus = 'hutang';
        }

        const orderRef = db.collection("freshmart_orders").doc(oI);
        const calcPoints = typeof window.calculateCartPoints === 'function' 
            ? window.calculateCartPoints(cart, appData.store) 
            : { totalPoints: 0, directPoints: 0, spendPoints: 0 };
        const pointsEarnedThisOrder = calcPoints.totalPoints;
        oD.pointsEarned = pointsEarnedThisOrder;
        oD.pointsBreakdown = {
            direct: calcPoints.directPoints,
            spend: calcPoints.spendPoints
        };
        const cmsDataRef = db.collection("freshmart").doc("cms_data");
        const memberRef = cust.wa ? cmsDataRef.collection("customers").doc(cust.wa) : null;
        const wantsRewardClaim = !!selectedReward;
        let finalMemberPoints = null;

        if (useStk) {
            const qtyMap = {}; 
            cart.forEach(ci => {
                const pId = ci.id != null ? ci.id.toString() : null;
                if (!pId) return;
                if (!qtyMap[pId]) qtyMap[pId] = { main: 0, variants: {} };
                const q = parseFloat(ci.qty) || 0;
                if (ci.variantName) qtyMap[pId].variants[ci.variantName] = (qtyMap[pId].variants[ci.variantName] || 0) + q;
                else qtyMap[pId].main += q;
            });
            const pIds = Object.keys(qtyMap);
            const refs = pIds.map(pId => db.collection("freshmart").doc("cms_data").collection("products").doc(pId));

            await db.runTransaction(async (transaction) => {
                const docs = await Promise.all(refs.map(ref => transaction.get(ref)));
                const memberDoc = memberRef ? await transaction.get(memberRef) : null;
                const isRegisteredMember = !!(memberDoc && memberDoc.exists);
                const rewardRef = (isRegisteredMember && wantsRewardClaim) ? db.collection("freshmart").doc("cms_data").collection("rewards").doc(selectedReward.id.toString()) : null;
                const rewardDoc = rewardRef ? await transaction.get(rewardRef) : null;

                const kurang = [];
                docs.forEach((docSnap, idx) => {
                    if (!docSnap.exists) return;
                    const prod = docSnap.data();
                    const need = qtyMap[pIds[idx]];
                    if (need.main > 0) {
                        const stk = parseFloat(prod.stock !== undefined ? prod.stock : 0);
                        if (stk < need.main) kurang.push(`${prod.name} (sisa ${stk})`);
                    }
                    Object.keys(need.variants).forEach(vName => {
                        const v = (prod.variants || []).find(vv => vv.name === vName);
                        const stk = parseFloat(v && v.stock !== undefined ? v.stock : 0);
                        if (stk < need.variants[vName]) kurang.push(`${prod.name} (${vName}, sisa ${stk})`);
                    });
                });
                if (kurang.length) {
                    throw new Error('STOK_TIDAK_CUKUP: ' + kurang.join(', '));
                }

                let rewardStockUpdated = null, memberPointsUpdated = null;

                if (isRegisteredMember) {
                    const currentPts = parseFloat(memberDoc.data().points) || 0;
                    let newPoints = currentPts;
                    if (wantsRewardClaim) {
                        if (!rewardDoc || !rewardDoc.exists) throw new Error('HADIAH_TIDAK_DITEMUKAN');
                        const rew = rewardDoc.data();
                        if (currentPts < (parseFloat(rew.pointsCost) || 0)) throw new Error('POIN_TIDAK_CUKUP');
                        if ((parseFloat(rew.stock) || 0) <= 0) throw new Error('STOK_HADIAH_HABIS');
                        rewardStockUpdated = (parseFloat(rew.stock) || 0) - 1;
                        newPoints -= (parseFloat(rew.pointsCost) || 0);
                        oD.claimedReward = { id: rew.id, name: rew.name, pointsCost: parseFloat(rew.pointsCost) || 0, status: 'pending', note: '' };
                    }
                    newPoints += pointsEarnedThisOrder;
                    memberPointsUpdated = newPoints;
                    oD.pointsEarned = pointsEarnedThisOrder;
                    oD.customerPhone = cust.wa;
                    oD.finalMemberPoints = memberPointsUpdated;
                    oD.customerType = 'Member';
                } else {
                    // Pelanggan Umum: belum tersimpan di database pelanggan oleh Admin
                    if (m === 'tempo') {
                        throw new Error('TEMPO_KHUSUS_MEMBER');
                    }
                    if (wantsRewardClaim) {
                        throw new Error('MEMBER_TIDAK_DITEMUKAN');
                    }
                    oD.pointsEarned = 0;
                    oD.pointsBreakdown = { direct: 0, spend: 0 };
                    oD.finalMemberPoints = null;
                    oD.customerType = 'Pelanggan Umum';
                }

                docs.forEach((docSnap, idx) => {
                    if (!docSnap.exists) return;
                    const pId = pIds[idx];
                    const need = qtyMap[pId];
                    const prod = JSON.parse(JSON.stringify(docSnap.data()));

                    const updatePayload = {};
                    if (need.main > 0) {
                        prod.stock = Math.max(0, (parseFloat(prod.stock) || 0) - need.main);
                        updatePayload.stock = prod.stock;
                        if (prod.stock === 0) {
                            prod.isActive = 'false';
                            updatePayload.isActive = 'false';
                        }
                        prod.totalSold = (parseFloat(prod.totalSold) || 0) + need.main;
                        updatePayload.totalSold = prod.totalSold;
                    }
                    if (Object.keys(need.variants).length > 0 && prod.variants) {
                        Object.keys(need.variants).forEach(vName => {
                            const vIdx = (prod.variants || []).findIndex(v => v.name === vName);
                            if (vIdx > -1) {
                                prod.variants[vIdx].stock = Math.max(0, (parseFloat(prod.variants[vIdx].stock) || 0) - need.variants[vName]);
                                if (prod.variants[vIdx].stock === 0) prod.variants[vIdx].isActive = false;
                                prod.variants[vIdx].totalSold = (parseFloat(prod.variants[vIdx].totalSold) || 0) + need.variants[vName];
                            }
                        });
                        updatePayload.variants = prod.variants;
                    }

                    const localIdx = appData.products.findIndex(p => p.id.toString() === pId);
                    if (localIdx > -1) appData.products[localIdx] = prod;

                    transaction.update(refs[idx], updatePayload);
                });

                transaction.set(orderRef, oD);

                // HANYA update data jika memang Member Resmi terdaftar (JANGAN auto-create!)
                if (isRegisteredMember && memberRef && memberPointsUpdated !== null) {
                    const registeredName = memberDoc.data().name || cust.name || 'Pelanggan Setia';
                    // Nama di order selalu pakai nama terdaftar pertama kali
                    if (oD.customer) oD.customer.name = registeredName;
                    const memberPayload = {
                        points: memberPointsUpdated,
                        name: registeredName,
                        lastOrderAt: Date.now()
                    };
                    transaction.set(memberRef, memberPayload, { merge: true });
                    finalMemberPoints = memberPointsUpdated;
                }
                if (rewardStockUpdated !== null) {
                    transaction.set(rewardRef, { stock: rewardStockUpdated }, { merge: true });
                }

                transaction.update(cmsDataRef, { 
                    lastUpdate: firebase.firestore.FieldValue.increment(1),
                    updateType: 'stock_change',
                    updatedProductIds: pIds
                });
            });

            appData.lastUpdate = (parseInt(sL('freshmart_last_update')) || appData.lastUpdate || 0) + 1;
            ssL('freshmart_last_update', appData.lastUpdate.toString());
            ssL('freshmart_products', JSON.stringify(appData.products));
        } else if (memberRef) {
            await db.runTransaction(async (transaction) => {
                const memberDoc = await transaction.get(memberRef);
                const isRegisteredMember = memberDoc.exists;
                const rewardRef = (isRegisteredMember && wantsRewardClaim) ? db.collection("freshmart").doc("cms_data").collection("rewards").doc(selectedReward.id.toString()) : null;
                const rewardDoc = rewardRef ? await transaction.get(rewardRef) : null;
                
                let rewardStockUpdated = null, memberPointsUpdated = null;

                if (isRegisteredMember) {
                    const currentPts = parseFloat(memberDoc.data().points) || 0;
                    let newPoints = currentPts;
                    if (wantsRewardClaim) {
                        if (!rewardDoc || !rewardDoc.exists) throw new Error('HADIAH_TIDAK_DITEMUKAN');
                        const rew = rewardDoc.data();
                        if (currentPts < (parseFloat(rew.pointsCost) || 0)) throw new Error('POIN_TIDAK_CUKUP');
                        if ((parseFloat(rew.stock) || 0) <= 0) throw new Error('STOK_HADIAH_HABIS');
                        rewardStockUpdated = (parseFloat(rew.stock) || 0) - 1;
                        newPoints -= (parseFloat(rew.pointsCost) || 0);
                        oD.claimedReward = { id: rew.id, name: rew.name, pointsCost: parseFloat(rew.pointsCost) || 0, status: 'pending', note: '' };
                    }
                    newPoints += pointsEarnedThisOrder;
                    memberPointsUpdated = newPoints;
                    oD.pointsEarned = pointsEarnedThisOrder;
                    oD.customerPhone = cust.wa;
                    oD.finalMemberPoints = memberPointsUpdated;
                    oD.customerType = 'Member';
                    
                    const registeredName = memberDoc.data().name || cust.name || 'Pelanggan Setia';
                    // Nama di order selalu pakai nama terdaftar pertama kali
                    if (oD.customer) oD.customer.name = registeredName;
                    transaction.set(memberRef, { 
                        points: memberPointsUpdated, 
                        name: registeredName,
                        lastOrderAt: Date.now() 
                    }, { merge: true });
                    finalMemberPoints = memberPointsUpdated;
                    
                    if (rewardStockUpdated !== null) {
                        transaction.set(rewardRef, { stock: rewardStockUpdated }, { merge: true });
                    }
                } else {
                    // Pelanggan Umum: belum tersimpan di database pelanggan oleh Admin
                    if (m === 'tempo') {
                        throw new Error('TEMPO_KHUSUS_MEMBER');
                    }
                    if (wantsRewardClaim) {
                        throw new Error('MEMBER_TIDAK_DITEMUKAN');
                    }
                    oD.pointsEarned = 0;
                    oD.pointsBreakdown = { direct: 0, spend: 0 };
                    oD.finalMemberPoints = null;
                    oD.customerType = 'Pelanggan Umum';
                }
                
                transaction.set(orderRef, oD);
            });
        } else {
            oD.pointsEarned = 0;
            oD.pointsBreakdown = { direct: 0, spend: 0 };
            oD.finalMemberPoints = null;
            oD.customerType = 'Pelanggan Umum';
            if (m === 'tempo') {
                throw new Error('TEMPO_KHUSUS_MEMBER');
            }
            await orderRef.set(oD);
        }

        // Simpan ke riwayat lokal pesanan
        myOrders.unshift({
            orderId: oI, 
            date: new Date().toISOString(), 
            total: tot,
            itemCount: cart.reduce((sum, i) => sum + parseFloat(i.qty), 0),
            status: 'Baru',
            pointsEarned: oD.pointsEarned || 0,
            claimedReward: oD.claimedReward || null,
            finalMemberPoints: finalMemberPoints,
            customerType: oD.customerType || 'Pelanggan Umum'
        });
        setMyOrders(myOrders);
        try {
            localStorage.setItem('freshmart_my_orders', JSON.stringify(myOrders));
            localStorage.setItem('freshmart_last_order', Date.now().toString());
        } catch(e) {}
        
        if (typeof analytics !== 'undefined') analytics.logEvent('purchase', { transaction_id: oI, value: tot, currency: 'IDR' });
        
        // Simpan & aktifkan profil member di state dan localStorage HANYA jika memang Member Resmi
        if (cust.wa && finalMemberPoints !== null) {
            const activeMemberObj = {
                id: cust.wa,
                phone: cust.wa,
                name: cust.name || 'Pelanggan Setia',
                points: finalMemberPoints
            };
            setCurrentMember(activeMemberObj);
            try {
                localStorage.setItem('freshmart_current_member', JSON.stringify(activeMemberObj));
                localStorage.setItem('freshmart_member_wa', cust.wa);
            } catch(e) {}
            if (typeof window.invalidateMemberCache === 'function') {
                window.invalidateMemberCache(cust.wa);
            }
        } else {
            // Pelanggan Umum: JANGAN aktifkan profil member
            setCurrentMember(null);
            try {
                localStorage.removeItem('freshmart_current_member');
            } catch(e) {}
        }

        if (oD.claimedReward && finalMemberPoints !== null) {
            if (typeof window.showToast === 'function') window.showToast(`✅ Hadiah "${oD.claimedReward.name}" berhasil ditukar! Sisa poin Anda: ${finalMemberPoints}`);
        } else if (finalMemberPoints !== null && pointsEarnedThisOrder > 0) {
            if (typeof window.showToast === 'function') window.showToast(`✅ Pesanan berhasil dikirim ke admin! (+${pointsEarnedThisOrder} Poin Member didapat!)`);
        } else {
            if (typeof window.showToast === 'function') window.showToast("✅ Pesanan berhasil dikirim ke admin!");
        }
        
        setTimeout(() => {
            setCart([]); 
            setV('cust-name', ''); 
            setV('cust-address', ''); 
            setV('cust-maps-input', ''); 
            setV('cust-note', ''); 
            setV('cust-wa', '');
            window.buktiPaymentUrl = null; 
            window.buktiPaymentFile = null; 
            window.buktiGDriveUploaded = false;
            
            const bPrev = el('bukti-preview-wrap'); 
            const bPlc = el('bukti-placeholder');
            if (bPrev) bPrev.classList.add('hidden'); 
            if (bPlc) bPlc.classList.remove('hidden');
            hide('bukti-uploading'); 
            hide('bukti-success'); 
            hide('bukti-gdrive-error');
            
            const bInp = el('bukti-file-input'); 
            if (bInp) bInp.value = '';
            
            setCust({ name: '', address: '', lat: null, lng: null, deliveryMethod: 'delivery', distance: 0, note: '', wa: '', dropPoint: null }); 
            setVouch(null);
            setSelectedReward(null);
            
            // Reset UI drop-point
            const dpToggle = el('toggle-droppoint');
            const dpForm = el('droppoint-form');
            if (dpToggle) dpToggle.checked = false;
            if (dpForm) dpForm.classList.add('hidden');
            const dpLocStatus = el('dp-location-status');
            if (dpLocStatus) dpLocStatus.classList.add('hidden');
            const dpDpInfo = el('payment-droppoint-info');
            if (dpDpInfo) dpDpInfo.classList.add('hidden');
            const dpNameEl = el('dp-receiver-name'); if (dpNameEl) dpNameEl.value = '';
            const dpWaEl = el('dp-receiver-wa'); if (dpWaEl) dpWaEl.value = '';
            const dpAddrEl = el('dp-address'); if (dpAddrEl) dpAddrEl.value = '';
            const dpMapsEl = el('dp-maps-input'); if (dpMapsEl) dpMapsEl.value = '';
            const btnDpLoc = el('btn-dp-location');
            if (btnDpLoc) btnDpLoc.innerHTML = '<i class="fa-solid fa-location-crosshairs text-sm text-rose-500"></i> <span id="text-dp-location">Sematkan GPS Lokasi Tujuan</span>';

            const memBanner = el('member-status-banner'); 
            if (memBanner) hide(memBanner);
            hide('payment-option-tempo');
            if (el('voucher-input')) el('voucher-input').value = ''; 
            hide('voucher-msg-container'); 
            hide('location-status');
            if (el('btn-location')) show('btn-location');
            
            const defDelivery = document.querySelector('input[name="delivery-method"][value="delivery"]');
            if (defDelivery) { defDelivery.checked = true; toggleDeliveryMethod(); }
            const defPayment = document.querySelector('input[name="payment"][value="transfer"]');
            if (defPayment) { defPayment.checked = true; if (typeof window.togglePaymentDetails === 'function') window.togglePaymentDetails(); }
            
            if (typeof window.updCart === 'function') window.updCart();
            if (typeof window.renderCart === 'function') window.renderCart();
            try {
                window.history.replaceState({ view: 'view-catalog' }, '', window.location.pathname);
            } catch(e) {}
            if (typeof window.changeView === 'function') window.changeView('view-catalog', true);
            if (typeof window.showToast === 'function') window.showToast("Pesanan Dibuat! 🎉");
        }, 2000);
        
    } catch(e) {
        const msg = e.message || "Error";
        if (msg.startsWith('STOK_TIDAK_CUKUP:')) {
            if (typeof window.showToast === 'function') window.showToast('Maaf, stok berubah: ' + msg.replace('STOK_TIDAK_CUKUP: ', ''));
        } else if (msg === 'TEMPO_KHUSUS_MEMBER') {
            if (typeof window.showToast === 'function') window.showToast('Pembayaran Cash Tempo hanya untuk Member Resmi yang telah didaftarkan Admin!');
        } else if (msg === 'POIN_TIDAK_CUKUP') {
            if (typeof window.showToast === 'function') window.showToast('Maaf, poin Anda ternyata tidak cukup untuk hadiah ini. Silakan cek lagi.');
            setSelectedReward(null);
        } else if (msg === 'STOK_HADIAH_HABIS') {
            if (typeof window.showToast === 'function') window.showToast('Maaf, stok hadiah yang dipilih baru saja habis. Silakan pilih hadiah lain.');
            setSelectedReward(null);
        } else if (msg === 'HADIAH_TIDAK_DITEMUKAN') {
            if (typeof window.showToast === 'function') window.showToast('Hadiah yang dipilih sudah tidak tersedia. Silakan pilih ulang.');
            setSelectedReward(null);
        } else if (msg === 'MEMBER_TIDAK_DITEMUKAN') {
            if (typeof window.showToast === 'function') window.showToast('Data member tidak ditemukan, klaim hadiah dibatalkan. Pesanan bisa dicoba lagi tanpa hadiah.');
            setSelectedReward(null);
        } else {
            if (typeof window.showToast === 'function') window.showToast(e.code === 'resource-exhausted' ? "Quota Server Penuh!" : "Gagal proses: " + msg);
        }
    } finally {
        setIsSaving(false); 
        hLoad();
    }
};

// ─── Expose ke window untuk kompatibilitas onclick di HTML ──────
window.validateAndGoToPayment = validateAndGoToPayment;
window.toggleDeliveryMethod = toggleDeliveryMethod;
window.toggleDropPoint = toggleDropPoint;
window.getDPLocation = getDPLocation;
window.handleDPMapsInput = handleDPMapsInput;
window.pasteDPMapsInput = pasteDPMapsInput;
window.toggleOrderButton = toggleOrderButton;
window.rPay = rPay;
window.processOrder = processOrder;
