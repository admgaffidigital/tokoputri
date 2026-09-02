/**
 * ============================================================
 * MODUL LOGIKA HARGA, HPP, POIN & JARAK GPS (CORE PRICING & GEO)
 * Mengatur harga efektif produk/varian, harga grosir bertingkat,
 * HPP modal produk/varian, poin reward member per produk,
 * kalkulasi jarak GPS Haversine (km), dan parse koordinat toko.
 * ============================================================
 */

import { appData, cart } from './state.js';
import { setV, showToast } from './utils.js';

/**
 * Ambil harga jual efektif produk/varian saat ini (memperhitungkan grosir)
 */
export const getEffP = (i) => {
    const p = appData.products?.find(x => x.id === i.id);
    let basePrice = i.price || 0;
    if (i.variantName && p && p.variants) {
        const v = p.variants.find(vv => vv.name === i.variantName);
        if (v && v.price != null) basePrice = v.price;
    }
    // Grosir hanya berlaku untuk item tanpa varian
    if (i.variantName) return basePrice;
    if (!p || !p.wholesale || !p.wholesale.length) return basePrice;
    const t = cart.filter(c => c.id === i.id).reduce((s, c) => s + (parseFloat(c.qty) || 0), 0);
    for (let w of p.wholesale.slice().sort((a, b) => b.minQty - a.minQty)) {
        if (t >= parseFloat(w.minQty)) return w.price;
    }
    return basePrice;
};

/**
 * Ambil HPP (harga modal) produk/varian saat ini
 */
export const getEffHpp = (i) => {
    const p = appData.products?.find(x => x.id === i.id);
    if (!p) return 0;
    if (i.variantName && p.variants) {
        const v = p.variants.find(vv => vv.name === i.variantName);
        if (v && v.hpp != null) return parseFloat(v.hpp) || 0;
    }
    return parseFloat(p.hpp) || 0;
};

/**
 * Ambil Poin Member produk/varian saat ini dengan fallback cerdas
 */
export const getEffPoin = (i) => {
    if (!i) return 0;
    const p = appData.products?.find(x => x.id === i.id);
    if (!p) return parseFloat(i.poin) || 0;
    if (i.variantName && p.variants) {
        const v = p.variants.find(vv => vv.name === i.variantName);
        if (v && v.poin !== undefined && v.poin !== null && v.poin !== '') {
            const vPoin = parseFloat(v.poin);
            if (!isNaN(vPoin) && vPoin > 0) return vPoin;
        }
    }
    return parseFloat(p.poin) || 0;
};

/**
 * Hitung jarak Haversine antara dua titik koordinat GPS (satuan KM)
 */
export const getDist = (lat1, lon1, lat2, lon2) => {
    if (!lat1 || !lon1 || !lat2 || !lon2) return 0;
    const R = 6371; 
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + 
              Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
              Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
};

/**
 * Parser koordinat cepat (format 'lat, lng') di form pengaturan toko
 */
export const autoParseCoords = (input) => {
    const val = input.value.trim();
    const coords = val.split(',');
    if (coords.length >= 2) {
        const lat = parseFloat(coords[0].trim());
        const lng = parseFloat(coords[1].trim());
        if (!isNaN(lat) && !isNaN(lng)) {
            setV('set-lat', lat);
            setV('set-lng', lng);
            showToast("Koordinat tersalin!");
            return;
        }
    }
    showToast("Format salah! Coba: Lat, Lng");
};

// ─── Expose ke window untuk atribut onclick di HTML ──────
window.getEffP = getEffP;
window.getEffHpp = getEffHpp;
window.getEffPoin = getEffPoin;
window.getDist = getDist;
window.autoParseCoords = autoParseCoords;
