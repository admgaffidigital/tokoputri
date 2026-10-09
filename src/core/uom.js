/**
 * ============================================================
 * MODUL MULTI-SATUAN BERTINGKAT & HARGA GROSIR (CORE UOM ENGINE)
 * Spesialisasi Ritel Bahan Bangunan: Satuan Dasar vs Satuan Kemasan
 * (Contoh: Meter <-> Roll, Keping <-> Dus, Pcs <-> Kotak/Sak),
 * Konversi Kuantitas Presisi, Pencocokan Barcode Kemasan,
 * serta Proteksi Margin HPP Otomatis.
 * ============================================================
 */

/**
 * Normalisasi nama satuan (trim, fallback ke 'pcs')
 */
export const normalizeUnitName = (u) => {
    if (!u || typeof u !== 'string') return 'pcs';
    const trimmed = u.trim();
    return trimmed || 'pcs';
};

/**
 * Dapatkan daftar semua satuan yang tersedia untuk produk/varian:
 * Satuan dasar (isBase: true) + array satuan kemasan multiUnits
 */
export const getAvailableUnits = (product, variantName = '') => {
    if (!product) return [];
    
    // Satuan dasar
    const baseUnitName = normalizeUnitName(product.unit || 'pcs');
    let basePrice = parseFloat(product.price) || 0;
    let baseHpp = parseFloat(product.hpp) || 0;
    let baseBarcode = product.sku || '';

    // Jika varian dipilih
    if (variantName && Array.isArray(product.variants)) {
        const v = product.variants.find(vv => vv.name === variantName);
        if (v) {
            if (v.price != null && !isNaN(parseFloat(v.price))) basePrice = parseFloat(v.price);
            if (v.hpp != null && !isNaN(parseFloat(v.hpp))) baseHpp = parseFloat(v.hpp);
            if (v.sku) baseBarcode = v.sku;
        }
    }

    const units = [
        {
            name: baseUnitName,
            multiplier: 1,
            price: basePrice,
            hpp: baseHpp,
            barcode: baseBarcode,
            isBase: true
        }
    ];

    // Ambil daftar satuan kemasan bertingkat (multiUnits)
    const rawMulti = Array.isArray(product.multiUnits) ? product.multiUnits : [];
    rawMulti.forEach(mu => {
        if (!mu) return;
        const uName = mu.name || mu.unitName;
        if (!uName) return;
        const multiplier = parseFloat(mu.multiplier != null ? mu.multiplier : mu.conversionRatio) || 1;
        if (multiplier <= 0) return;
        
        // Harga kemasan: gunakan mu.price jika ada & valid (> 0), jika tidak hitung basePrice * multiplier
        const pkgPrice = (mu.price != null && parseFloat(mu.price) > 0) 
            ? parseFloat(mu.price) 
            : Math.round(basePrice * multiplier);

        // HPP kemasan: gunakan mu.hpp jika ada & valid (> 0), jika tidak hitung baseHpp * multiplier
        const pkgHpp = (mu.hpp != null && parseFloat(mu.hpp) > 0)
            ? parseFloat(mu.hpp)
            : Math.round(baseHpp * multiplier);

        units.push({
            name: normalizeUnitName(uName),
            multiplier,
            price: pkgPrice,
            hpp: pkgHpp,
            barcode: (mu.barcode || '').trim(),
            isBase: false
        });
    });

    return units;
};

/**
 * Konversi kuantitas dari satuan tertentu ke satuan dasar terkecil
 * Cth: 2 Roll (multiplier 100) -> 200 Meter
 */
export const convertQtyToBase = (qty, unitMultiplier = 1) => {
    const q = parseFloat(qty) || 0;
    const m = parseFloat(unitMultiplier) || 1;
    return Math.round(q * m * 1000) / 1000;
};

/**
 * Konversi kuantitas dari satuan dasar ke satuan kemasan
 * Cth: 200 Meter (multiplier 100) -> 2 Roll
 */
export const convertBaseToUnit = (baseQty, unitMultiplier = 1) => {
    const b = parseFloat(baseQty) || 0;
    const m = parseFloat(unitMultiplier) || 1;
    if (m <= 0) return b;
    return Math.round((b / m) * 1000) / 1000;
};

/**
 * Evaluasi harga efektif dan tingkatan grosir bertingkat
 */
export const resolveEffectivePrice = (product, unitName = '', qty = 1, variantName = '') => {
    if (!product) {
        return { 
            price: 0, 
            isWholesale: false, 
            isPackagingUnit: false, 
            unitMultiplier: 1, 
            unit: 'pcs',
            baseUnit: 'pcs',
            hpp: 0
        };
    }

    const availUnits = getAvailableUnits(product, variantName);
    const selectedUnitObj = availUnits.find(u => u.name.toLowerCase() === (unitName || '').toLowerCase()) || availUnits[0];

    const isPackagingUnit = !selectedUnitObj.isBase;
    const unitMultiplier = selectedUnitObj.multiplier || 1;
    let price = selectedUnitObj.price;
    let isWholesale = false;

    // Jika memilih satuan dasar (atau item eceran), periksa aturan harga grosir bertingkat (product.wholesale)
    if (selectedUnitObj.isBase && Array.isArray(product.wholesale) && product.wholesale.length > 0 && !variantName) {
        const sortedWholesale = [...product.wholesale].sort((a, b) => parseFloat(b.minQty) - parseFloat(a.minQty));
        const numQty = parseFloat(qty) || 1;
        for (const w of sortedWholesale) {
            if (numQty >= parseFloat(w.minQty)) {
                price = parseFloat(w.price);
                isWholesale = true;
                break;
            }
        }
    }

    return {
        price,
        isWholesale,
        isPackagingUnit,
        unitMultiplier,
        unit: selectedUnitObj.name,
        baseUnit: availUnits[0].name,
        hpp: selectedUnitObj.hpp
    };
};

/**
 * Validasi margin HPP: apakah harga di bawah modal atau sangat tipis (< 3%)
 */
export const checkHppMarginStatus = (price, hpp) => {
    const p = parseFloat(price) || 0;
    const h = parseFloat(hpp) || 0;
    if (h <= 0 || p <= 0) return { isNegative: false, isThin: false, marginRp: 0, marginPercent: 0 };

    const marginRp = p - h;
    const marginPercent = Math.round((marginRp / p) * 1000) / 10;

    return {
        isNegative: p < h,
        isThin: p >= h && marginPercent < 3.0,
        marginRp,
        marginPercent
    };
};

/**
 * Cari produk dan satuan kemasan berdasarkan scan barcode khusus kemasan
 */
export const findProductByMultiUnitBarcode = (products, barcodeRaw) => {
    if (!products || !Array.isArray(products) || !barcodeRaw) return null;
    const clean = String(barcodeRaw).trim().toLowerCase();
    if (!clean) return null;

    for (const p of products) {
        if (!p || !Array.isArray(p.multiUnits)) continue;
        for (const mu of p.multiUnits) {
            if (mu.barcode && String(mu.barcode).trim().toLowerCase() === clean) {
                return {
                    product: p,
                    matchedUnit: mu
                };
            }
        }
    }
    return null;
};
