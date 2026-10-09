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
 * Status sesi Flash Sale: 'upcoming' | 'active' | 'ended'
 */
export const checkFlashSaleStatus = (session) => {
    if (!session || session.isActive === false || session.isActive === 'false') return 'ended';
    const now = Date.now();
    const start = session.startTime ? new Date(session.startTime).getTime() : 0;
    const end = session.endTime ? new Date(session.endTime).getTime() : 0;
    
    if (start && now < start) return 'upcoming';
    if (end && now > end) return 'ended';
    return 'active';
};

/**
 * Ambil sesi Flash Sale yang sedang aktif (atau upcoming jika diminta)
 */
export const getActiveFlashSaleSession = (targetChannel = 'all') => {
    const list = Array.isArray(appData.flashSales) ? appData.flashSales : [];
    for (const session of list) {
        if (!session || session.isActive === false || session.isActive === 'false') continue;
        const channel = session.channel || 'both';
        if (targetChannel !== 'all' && channel !== 'both' && channel !== targetChannel) continue;
        
        if (checkFlashSaleStatus(session) === 'active') {
            return session;
        }
    }
    return null;
};

/**
 * Cek apakah produk/varian terdaftar dalam sesi Flash Sale aktif
 */
export const getFlashSaleItem = (productId, variantName = null, targetChannel = 'all') => {
    if (!productId) return null;
    const session = getActiveFlashSaleSession(targetChannel);
    if (!session || !Array.isArray(session.items)) return null;

    const item = session.items.find(it => {
        if (!it || String(it.productId) !== String(productId)) return false;
        if (variantName && it.variantName) {
            return String(it.variantName).trim().toLowerCase() === String(variantName).trim().toLowerCase();
        }
        return true;
    });

    if (!item) return null;

    const quota = parseFloat(item.quota) || 0;
    const sold = parseFloat(item.soldCount) || 0;
    const isSoldOut = quota > 0 && sold >= quota;
    const remainingQuota = Math.max(0, quota - sold);
    const normalPrice = parseFloat(item.normalPrice) || 0;
    const flashSalePrice = parseFloat(item.flashSalePrice) || 0;
    const discountPercent = normalPrice > 0 ? Math.round(((normalPrice - flashSalePrice) / normalPrice) * 100) : (item.discountPercent || 0);

    return {
        ...item,
        session,
        quota,
        soldCount: sold,
        isSoldOut,
        remainingQuota,
        normalPrice,
        flashSalePrice,
        discountPercent: Math.max(0, discountPercent)
    };
};

/**
 * Catat penjualan Flash Sale (menambah soldCount)
 */
export const recordFlashSaleSale = (productId, variantName = null, qty = 1) => {
    if (!productId || !Array.isArray(appData.flashSales)) return false;
    let modified = false;
    const numQty = parseFloat(qty) || 1;

    for (const session of appData.flashSales) {
        if (!session || !Array.isArray(session.items)) continue;
        if (checkFlashSaleStatus(session) !== 'active') continue;

        for (const it of session.items) {
            if (String(it.productId) === String(productId)) {
                if (!variantName || !it.variantName || String(it.variantName).trim().toLowerCase() === String(variantName).trim().toLowerCase()) {
                    it.soldCount = (parseFloat(it.soldCount) || 0) + numQty;
                    modified = true;
                }
            }
        }
    }
    return modified;
};

/**
 * Ambil harga jual efektif produk/varian saat ini (memperhitungkan flash sale & grosir)
 */
export const getEffP = (i, channel = 'web') => {
    // 1. Prioritas Utama: Cek apakah item sedang aktif dalam sesi Flash Sale
    const fsItem = getFlashSaleItem(i.id, i.variantName, channel);
    if (fsItem && !fsItem.isSoldOut && fsItem.flashSalePrice > 0) {
        return fsItem.flashSalePrice;
    }

    const p = appData.products?.find(x => x && x.id != null && String(x.id) === String(i.id));
    let basePrice = (i.price != null && !isNaN(i.price) && i.price !== '') ? parseFloat(i.price) : (p ? parseFloat(p.price) || 0 : 0);
    if (i.variantName && p && p.variants) {
        const v = p.variants.find(vv => vv.name === i.variantName);
        if (v && v.price != null) basePrice = parseFloat(v.price) || 0;
    }
    // Grosir hanya berlaku untuk item tanpa varian
    if (i.variantName) return basePrice;
    if (!p || !p.wholesale || !p.wholesale.length) return basePrice;
    const t = cart.filter(c => c.id != null && String(c.id) === String(i.id)).reduce((s, c) => s + (parseFloat(c.qty) || 0), 0);
    for (let w of p.wholesale.slice().sort((a, b) => b.minQty - a.minQty)) {
        if (t >= parseFloat(w.minQty)) return w.price;
    }
    return basePrice;
};

/**
 * Ambil HPP (harga modal) produk/varian saat ini
 */
export const getEffHpp = (i) => {
    const p = appData.products?.find(x => x && x.id != null && String(x.id) === String(i.id));
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
    const p = appData.products?.find(x => x && x.id != null && String(x.id) === String(i.id));
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
 * Parser koordinat cerdas: mengekstrak latitude & longitude presisi tinggi
 * dari berbagai format input (koordinat murni, Google Maps URL, share link, DMS, dll).
 */
export const parseGeoCoordinates = (str) => {
    if (!str || typeof str !== 'string') return null;
    let text = str.trim();
    try { text = decodeURIComponent(text); } catch(e) {}

    // 1. Google Maps @lat,lng pattern (contoh: https://www.google.com/maps/.../@-7.823085,112.098837,17z)
    const atMatch = text.match(/@(-?\d{1,3}\.\d+)[,\s]+(-?\d{1,3}\.\d+)/);
    if (atMatch) {
        const lat = parseFloat(atMatch[1]);
        const lng = parseFloat(atMatch[2]);
        if (!isNaN(lat) && !isNaN(lng) && Math.abs(lat) <= 90 && Math.abs(lng) <= 180) {
            return { lat: atMatch[1], lng: atMatch[2] };
        }
    }

    // 2. Query param ?q=lat,lng atau ?ll=lat,lng atau ?query=lat,lng atau ?loc=lat,lng
    const queryMatch = text.match(/[?&](?:q|ll|query|loc|center)=(-?\d{1,3}\.\d+)[,\s]+(-?\d{1,3}\.\d+)/i);
    if (queryMatch) {
        const lat = parseFloat(queryMatch[1]);
        const lng = parseFloat(queryMatch[2]);
        if (!isNaN(lat) && !isNaN(lng) && Math.abs(lat) <= 90 && Math.abs(lng) <= 180) {
            return { lat: queryMatch[1], lng: queryMatch[2] };
        }
    }

    // 3. DMS (Degrees Minutes Seconds) format
    const dmsMatch = text.match(/(\d+)[°\s]+(\d+)['\s]+([\d.]+)"?\s*([NSns])[,\s]+(\d+)[°\s]+(\d+)['\s]+([\d.]+)"?\s*([EWew])/);
    if (dmsMatch) {
        let lat = parseInt(dmsMatch[1], 10) + parseInt(dmsMatch[2], 10)/60 + parseFloat(dmsMatch[3])/3600;
        if (dmsMatch[4].toUpperCase() === 'S') lat = -lat;
        let lng = parseInt(dmsMatch[5], 10) + parseInt(dmsMatch[6], 10)/60 + parseFloat(dmsMatch[7])/3600;
        if (dmsMatch[8].toUpperCase() === 'W') lng = -lng;
        return { lat: lat.toFixed(8), lng: lng.toFixed(8) };
    }

    // 4. Standard coordinate string (contoh: "-7.82308507053985, 112.0988374794464" atau "-7.823085 112.098837")
    const coordMatch = text.match(/(-?\d{1,3}\.\d{3,20})[,\s;\t]+(-?\d{1,3}\.\d{3,20})/);
    if (coordMatch) {
        const lat = parseFloat(coordMatch[1]);
        const lng = parseFloat(coordMatch[2]);
        if (!isNaN(lat) && !isNaN(lng) && Math.abs(lat) <= 90 && Math.abs(lng) <= 180) {
            return { lat: coordMatch[1], lng: coordMatch[2] };
        }
    }

    return null;
};

/**
 * Parser koordinat cepat di form pengaturan toko
 */
export const autoParseCoords = (input) => {
    const val = (typeof input === 'string' ? input : input?.value || '').trim();
    const result = parseGeoCoordinates(val);
    if (result) {
        setV('set-lat', result.lat);
        setV('set-lng', result.lng);
        showToast("Koordinat GPS berhasil disalin!");
        return result;
    }
    showToast("Format tidak dikenali! Tempel koordinat: Lat, Lng atau link Google Maps");
    return null;
};

/**
 * Kalkulator Poin Belanja Hibrida:
 * 1. Poin Produk Langsung (Direct Points): untuk item dengan getEffPoin(item) > 0.
 * 2. Poin Minimal Belanja (Spend Threshold Points): untuk item reguler non-poin (getEffPoin == 0).
 *    Subtotal produk non-poin dihitung, jika mencapai threshold (misal kelipatan Rp 100.000),
 *    maka dihadiahi poin belanja (berlaku kelipatan).
 */
export const calculateCartPoints = (cartItems = cart, store = appData.store) => {
    if (!cartItems || !cartItems.length) {
        return {
            totalPoints: 0,
            directPoints: 0,
            spendPoints: 0,
            nonPointSpend: 0,
            threshold: 100000,
            pointsPerThreshold: 1,
            isSpendPointsActive: false,
            remainingToNextPoint: 0,
            progressPercent: 0
        };
    }

    let directPoints = 0;
    let nonPointSpend = 0;

    cartItems.forEach(item => {
        const itemPoin = getEffPoin(item);
        const qty = parseFloat(item.qty) || 0;
        if (itemPoin > 0) {
            directPoints += (itemPoin * qty);
        } else {
            const price = getEffP(item);
            nonPointSpend += (price * qty);
        }
    });

    let spendPoints = 0;
    let remainingToNextPoint = 0;
    let progressPercent = 0;

    const isSpendPointsActive = store ? (store.spendPointsEnabled === true || store.spendPointsEnabled === 'true') : false;
    const threshold = Math.max(1, parseFloat(store?.spendPointsThreshold) || 100000);
    const pointsPerThreshold = Math.max(1, parseFloat(store?.spendPointsPerThreshold) || 1);

    if (isSpendPointsActive && nonPointSpend > 0) {
        const multiplier = Math.floor(nonPointSpend / threshold);
        spendPoints = multiplier * pointsPerThreshold;
        const remainder = nonPointSpend % threshold;
        remainingToNextPoint = remainder > 0 ? (threshold - remainder) : threshold;
        progressPercent = Math.min(100, Math.round(((remainder || (multiplier > 0 ? threshold : 0)) / threshold) * 100));
    }

    return {
        totalPoints: directPoints + spendPoints,
        directPoints,
        spendPoints,
        nonPointSpend,
        threshold,
        pointsPerThreshold,
        isSpendPointsActive,
        remainingToNextPoint,
        progressPercent
    };
};

/**
 * Hitung statistik inventaris produk, varian, dan total modal aset tertanam
 */
export const computeInventoryStats = () => {
    const useStk = appData.store.useStock === true || appData.store.useStock === 'true';
    let activeProd = 0, inactiveProd = 0, activeVar = 0, inactiveVar = 0, assetHpp = 0, assetJual = 0;
    (appData.products || []).forEach(p => {
        if (p.variants && p.variants.length) {
            p.variants.forEach(v => {
                const isAct = v.isActive !== false && v.isActive !== 'false';
                const stock = parseFloat(v.stock) || 0;
                const purchasable = isAct && (!useStk || stock > 0);
                if (purchasable) activeVar++; else inactiveVar++;
                assetHpp += (parseFloat(v.hpp) || 0) * stock;
                assetJual += (parseFloat(v.price) || 0) * stock;
            });
        } else {
            const isAct = p.isActive !== false && p.isActive !== 'false';
            const stock = parseFloat(p.stock) || 0;
            const purchasable = isAct && (!useStk || stock > 0);
            if (purchasable) activeProd++; else inactiveProd++;
            assetHpp += (parseFloat(p.hpp) || 0) * stock;
            assetJual += (parseFloat(p.price) || 0) * stock;
        }
    });
    return { activeProd, inactiveProd, activeVar, inactiveVar, assetHpp, assetJual };
};

/**
 * Kalkulasi total stok produk terpadu (Storefront & POS Kasir)
 * Menjamin pembacaan stok akurat baik dari varian aktif, stok induk,
 * maupun fallback cerdas jika produk memiliki data stok di database.
 */
export const computeTotalProductStock = (p) => {
    if (!p) {
        return {
            totalStock: 0,
            hasStockData: false,
            isManaged: false,
            isOutOfStock: true,
            isLowStock: false,
            isInactive: true,
            isPreorder: false,
            poTime: ''
        };
    }

    const pActive = p.isActive !== 'false' && p.isActive !== false;
    const storeUseStock = appData?.store?.useStock === true || appData?.store?.useStock === 'true';
    const isPreorder = Boolean(p.poTime && String(p.poTime).trim());
    const poTime = isPreorder ? String(p.poTime).trim() : '';

    const hasVariants = Array.isArray(p.variants) && p.variants.length > 0;
    let variantStockSum = 0;
    let hasVariantStockDefined = false;

    if (hasVariants) {
        const activeVariants = p.variants.filter(v => v && v.isActive !== false && v.isActive !== 'false');
        for (const v of activeVariants) {
            const rawVal = v.stock != null && v.stock !== '' ? v.stock : (v.stok != null && v.stok !== '' ? v.stok : null);
            if (rawVal !== null && rawVal !== undefined) {
                const num = parseFloat(rawVal);
                if (!isNaN(num)) {
                    hasVariantStockDefined = true;
                    variantStockSum += num;
                }
            }
        }
    }

    const rawParent = p.stock != null && p.stock !== '' ? p.stock : (p.stok != null && p.stok !== '' ? p.stok : null);
    const hasParentStockDefined = rawParent !== null && rawParent !== undefined && !isNaN(parseFloat(rawParent));
    const parentStockNum = hasParentStockDefined ? parseFloat(rawParent) : 0;

    let totalStock = 0;
    let hasStockData = false;

    if (hasVariants && hasVariantStockDefined) {
        totalStock = variantStockSum;
        hasStockData = true;
        // Fallback cerdas: Jika varian stok berjumlah 0 tapi induk memiliki stok > 0
        if (totalStock === 0 && hasParentStockDefined && parentStockNum > 0) {
            totalStock = parentStockNum;
        }
    } else if (hasParentStockDefined) {
        totalStock = parentStockNum;
        hasStockData = true;
    } else if (hasVariants) {
        totalStock = 0;
        hasStockData = false;
    } else {
        totalStock = 0;
        hasStockData = false;
    }

    // isManaged: aktif jika toko mengaktifkan kelola stok ATAU produk memiliki data stok yang terisi
    const isManaged = storeUseStock || hasStockData;
    const isOutOfStock = !pActive || (isManaged && totalStock <= 0 && !isPreorder);
    const isLowStock = isManaged && totalStock > 0 && totalStock <= 5;

    return {
        totalStock: Math.max(0, totalStock),
        hasStockData,
        isManaged,
        isOutOfStock,
        isLowStock,
        isInactive: !pActive,
        isPreorder,
        poTime
    };
};

// ─── Expose ke window untuk atribut onclick di HTML ──────
if (typeof window !== 'undefined') {
    window.getEffP = getEffP;
    window.getEffHpp = getEffHpp;
    window.getEffPoin = getEffPoin;
    window.calculateCartPoints = calculateCartPoints;
    window.computeInventoryStats = computeInventoryStats;
    window.computeTotalProductStock = computeTotalProductStock;
    window.getDist = getDist;
    window.parseGeoCoordinates = parseGeoCoordinates;
    window.autoParseCoords = autoParseCoords;
    window.checkFlashSaleStatus = checkFlashSaleStatus;
    window.getActiveFlashSaleSession = getActiveFlashSaleSession;
    window.getFlashSaleItem = getFlashSaleItem;
    window.recordFlashSaleSale = recordFlashSaleSale;
}

