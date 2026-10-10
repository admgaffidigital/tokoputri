/**
 * ============================================================
 * MODUL KALKULATOR ESTIMATOR BAHAN BANGUNAN & TEKNIK INTERAKTIF
 * (Interactive Material Estimator Tool — Toko Putri)
 * 
 * Perhitungan presisi kebutuhan material bangunan:
 * 1. Estimator Cat Dinding & Plafon (Topcoat, Pail, Galon, Alkali Sealer)
 * 2. Estimator Keramik & Granit (Luas m², Dus, Waste %, Perekat, Nat)
 * 3. Estimator Pasangan Dinding (Bata Ringan Hebel, Bata Merah, Semen Mortar)
 * 4. Estimator Atap & Seng (Spandek Galvalum, Seng Gelombang, Asbes Gelombang, Baut & Nok)
 * 
 * Terintegrasi penuh dengan Storefront Catalog, Keranjang Konsumen,
 * POS Kasir (F9 / Quick Tool), dan Konsultasi WhatsApp Resmi.
 * ============================================================
 */

import { appData } from '../../core/state.js';
import { el, esc, fCur, showToast } from '../../core/utils.js';

let estimatorActiveTab = 'paint'; // 'paint' | 'tile' | 'brick' | 'roof'
let estimatorSource = 'storefront'; // 'storefront' | 'pos'

// ─── STATE KALKULATOR CAT ───────────────────────────────────
let paintState = {
    mode: 'room', // 'room' (P x L x T) | 'area' (luas langsung)
    length: 4,    // meter
    width: 3,     // meter
    height: 3,    // meter
    openings: 4,  // m² (luas pintu & jendela)
    ceiling: true, // sertakan plafon
    coats: 2,     // 1x, 2x, 3x
    directArea: 30, // m²
    includeSealer: true // sertakan cat dasar alkali sealer
};

// ─── STATE KALKULATOR KERAMIK ───────────────────────────────
let tileState = {
    length: 4,    // meter
    width: 3,     // meter
    tileSize: '40x40', // '30x30' | '40x40' | '50x50' | '60x60' | '80x80'
    wastePercent: 10,  // 5%, 10%, 15%
    includeAdhesive: true,
    includeGrout: true
};

// ─── STATE KALKULATOR BATA & SEMEN ──────────────────────────
let brickState = {
    length: 6,    // meter
    height: 3,    // meter
    sides: 1,     // jumlah dinding
    openings: 2,  // m² bukaan pintu/jendela
    brickType: 'hebel10', // 'hebel10' | 'hebel75' | 'redbrick'
    includeMortar: true
};

// ─── STATE KALKULATOR ATAP & SENG ───────────────────────────
let roofState = {
    roofType: 'spandek', // 'spandek' | 'seng' | 'asbes'
    mode: 'gable',       // 'gable' (Pelana 2 Sisi) | 'monopitch' (Kanopi 1 Sisi) | 'area' (Luas M²)
    length: 8,           // meter (panjang bangunan / bubungan)
    width: 6,            // meter (lebar bentang bangunan)
    slopeAngle: 20,      // derajat sudut kemiringan (default 20°)
    overhang: 0.6,       // meter (overstek cucuran atap)
    sheetLength: 4,      // meter (panjang lembar pilihan)
    directArea: 60,      // m² (jika mode 'area')
    includeRidge: true,  // sertakan nok bubungan
    includeFasteners: true // sertakan baut / paku
};

// ─── DEFINISI KERAMIK COVERAGE PER DUS ───────────────────────
const TILE_SPECS = {
    '30x30': { name: '30 x 30 cm', coveragePerBox: 1.00, piecesPerBox: 11 },
    '40x40': { name: '40 x 40 cm', coveragePerBox: 0.96, piecesPerBox: 6 },
    '50x50': { name: '50 x 50 cm', coveragePerBox: 1.00, piecesPerBox: 4 },
    '60x60': { name: '60 x 60 cm', coveragePerBox: 1.44, piecesPerBox: 4 },
    '80x80': { name: '80 x 80 cm', coveragePerBox: 1.92, piecesPerBox: 3 }
};

// ─── SPESIFIKASI ATAP & PENUTUP ─────────────────────────────
export const ROOF_SPECS = {
    spandek: {
        id: 'spandek',
        name: 'Atap Spandek Galvalum (Zincalume)',
        shortName: 'Spandek Galvalum',
        effectiveWidth: 0.75, // meter (lebar efektif standar setelah overlap 1 gelombang)
        standardLengths: [
            { val: 3, label: '3.0 Meter' },
            { val: 4, label: '4.0 Meter' },
            { val: 5, label: '5.0 Meter' },
            { val: 6, label: '6.0 Meter' }
        ],
        defaultLength: 4,
        fastenerName: 'Baut Roofing SDS 12-14x50mm',
        fastenerPackaging: 'Box (100 Pcs)',
        fastenerBoxSize: 100,
        ridgeUnit: 'Batang Nok Spandek (1m)'
    },
    seng: {
        id: 'seng',
        name: 'Seng Gelombang BJLS / Galvalum',
        shortName: 'Seng Gelombang',
        effectiveWidth: 0.75, // meter (lebar efektif standar)
        standardLengths: [
            { val: 1.5, label: '1.5 Meter (5 Kaki)' },
            { val: 1.8, label: '1.8 Meter (6 Kaki)' },
            { val: 2.1, label: '2.1 Meter (7 Kaki)' },
            { val: 2.4, label: '2.4 Meter (8 Kaki)' },
            { val: 3.0, label: '3.0 Meter (10 Kaki)' }
        ],
        defaultLength: 2.1,
        fastenerName: 'Paku Payung Seng Galvanis',
        fastenerPackaging: 'Kg (isi ~70 Pcs/kg)',
        fastenerBoxSize: 70,
        ridgeUnit: 'Batang Nok Seng BJLS (1m)'
    },
    asbes: {
        id: 'asbes',
        name: 'Asbes Gelombang (Fiber Semen)',
        shortName: 'Asbes Gelombang',
        effectiveWidth: 0.95, // meter (lebar efektif standar asbes gelombang)
        standardLengths: [
            { val: 1.5, label: '1.5 Meter (5 Kaki)' },
            { val: 1.8, label: '1.8 Meter (6 Kaki)' },
            { val: 2.1, label: '2.1 Meter (7 Kaki)' },
            { val: 2.4, label: '2.4 Meter (8 Kaki)' },
            { val: 3.0, label: '3.0 Meter (10 Kaki)' }
        ],
        defaultLength: 2.1,
        fastenerName: 'Paku Asbes Khusus Karet',
        fastenerPackaging: 'Pack (isi 50 Pcs)',
        fastenerBoxSize: 50,
        ridgeUnit: 'Pasang Nok Asbes Stel'
    }
};

// ─── FORMULA KALKULASI ───────────────────────────────────────

/**
 * Kalkulasi Kebutuhan Cat & Alkali Sealer
 */
export const calculatePaintNeeds = () => {
    let totalWallArea = 0;
    let ceilingArea = 0;

    if (paintState.mode === 'room') {
        const perimeter = 2 * (parseFloat(paintState.length) + parseFloat(paintState.width));
        const rawWall = perimeter * parseFloat(paintState.height);
        totalWallArea = Math.max(0, rawWall - (parseFloat(paintState.openings) || 0));
        if (paintState.ceiling) {
            ceilingArea = parseFloat(paintState.length) * parseFloat(paintState.width);
        }
    } else {
        totalWallArea = parseFloat(paintState.directArea) || 0;
    }

    const grandArea = totalWallArea + ceilingArea;
    const coats = parseInt(paintState.coats) || 2;

    // Daya sebar standar cat tembok: ~11 m² / liter atau kg per lapis
    const spreadRate = 11;
    const totalVolumeLiters = parseFloat(((grandArea * coats) / spreadRate).toFixed(2));

    // Rekomendasi kemasan: Pail (20 kg / liter) dan Galon (2.5 kg / liter atau 5 kg)
    const pails = Math.floor(totalVolumeLiters / 20);
    const remLiters = totalVolumeLiters % 20;
    const gallons = Math.ceil(remLiters / 2.5);

    // Kebutuhan Cat Dasar Alkali Sealer (1 lapis, daya sebar ~12 m²/liter)
    const sealerVolume = paintState.includeSealer ? parseFloat((grandArea / 12).toFixed(2)) : 0;
    const sealerGallons = paintState.includeSealer ? Math.ceil(sealerVolume / 2.5) : 0;

    return {
        totalWallArea: parseFloat(totalWallArea.toFixed(2)),
        ceilingArea: parseFloat(ceilingArea.toFixed(2)),
        grandArea: parseFloat(grandArea.toFixed(2)),
        coats,
        totalVolumeLiters,
        pails,
        gallons,
        sealerVolume,
        sealerGallons
    };
};

/**
 * Kalkulasi Kebutuhan Keramik & Semen Perekat
 */
export const calculateTileNeeds = () => {
    const rawArea = parseFloat(tileState.length) * parseFloat(tileState.width);
    const wasteFactor = 1 + (parseFloat(tileState.wastePercent) / 100);
    const totalAreaWithWaste = parseFloat((rawArea * wasteFactor).toFixed(2));

    const spec = TILE_SPECS[tileState.tileSize] || TILE_SPECS['40x40'];
    const totalBoxes = Math.ceil(totalAreaWithWaste / spec.coveragePerBox);

    // Semen Perekat Keramik (Tile Adhesive): 1 sak 40kg untuk ~8 m²
    const adhesiveBags = tileState.includeAdhesive ? Math.ceil(totalAreaWithWaste / 8) : 0;

    // Semen Pengisi Nat (Tile Grout): 1 bks 1kg untuk ~4 m²
    const groutBags = tileState.includeGrout ? Math.ceil(totalAreaWithWaste / 4) : 0;

    return {
        rawArea: parseFloat(rawArea.toFixed(2)),
        wastePercent: tileState.wastePercent,
        totalAreaWithWaste,
        spec,
        totalBoxes,
        adhesiveBags,
        groutBags
    };
};

/**
 * Kalkulasi Kebutuhan Pasangan Dinding (Bata / Hebel & Mortar)
 */
export const calculateBrickNeeds = () => {
    const rawWallArea = parseFloat(brickState.length) * parseFloat(brickState.height) * parseInt(brickState.sides || 1);
    const netArea = Math.max(0, parseFloat((rawWallArea - (parseFloat(brickState.openings) || 0)).toFixed(2)));

    let brickPcs = 0;
    let brickCubic = 0;
    let mortarBags = 0;
    let sandCubic = 0;
    let cementBags = 0;

    if (brickState.brickType === 'hebel10') {
        // Hebel 10cm: 8.33 pcs/m², 1 m³ = ~83 pcs (~10 m² dinding)
        brickPcs = Math.ceil(netArea * 8.33);
        brickCubic = parseFloat((netArea / 10).toFixed(2));
        mortarBags = Math.ceil(netArea / 10); // 1 sak mortar 40kg = 10 m²
    } else if (brickState.brickType === 'hebel75') {
        // Hebel 7.5cm: 8.33 pcs/m², 1 m³ = ~111 pcs (~13.3 m² dinding)
        brickPcs = Math.ceil(netArea * 8.33);
        brickCubic = parseFloat((netArea / 13.3).toFixed(2));
        mortarBags = Math.ceil(netArea / 13);
    } else {
        // Bata Merah Standar: ~70 pcs/m²
        brickPcs = Math.ceil(netArea * 70);
        cementBags = Math.ceil(netArea * 0.45); // semen plester & pasang
        sandCubic = parseFloat((netArea * 0.04).toFixed(2));
    }

    return {
        rawWallArea: parseFloat(rawWallArea.toFixed(2)),
        netArea,
        brickType: brickState.brickType,
        brickPcs,
        brickCubic,
        mortarBags,
        cementBags,
        sandCubic
    };
};

/**
 * Kalkulasi Kebutuhan Atap (Spandek, Seng Gelombang, Asbes Gelombang)
 */
export const calculateRoofNeeds = () => {
    const spec = ROOF_SPECS[roofState.roofType] || ROOF_SPECS.spandek;
    const effWidth = spec.effectiveWidth;
    const sheetLen = parseFloat(roofState.sheetLength) || spec.defaultLength;

    let totalRoofArea = 0;
    let slopeLength = 0;
    let ridgeLength = 0;
    let sheetsAcross = 0;
    let sheetsPerSlope = 0;
    let totalSheets = 0;
    let ridgePieces = 0;
    let fastenerPcs = 0;
    let fastenerPacks = 0;

    const angle = Math.max(5, Math.min(60, parseFloat(roofState.slopeAngle) || 20));
    const rad = (angle * Math.PI) / 180;
    const cosAngle = Math.cos(rad);
    const overhang = Math.max(0, parseFloat(roofState.overhang) || 0);

    if (roofState.mode === 'gable') {
        // Model Pelana (2 Sisi Miring Bertemu di Puncak)
        const length = Math.max(1, parseFloat(roofState.length) || 1);
        const width = Math.max(1, parseFloat(roofState.width) || 1);

        // Panjang bidang miring per sisi (puncak ke cucuran)
        const halfWidthWithOverhang = (width / 2) + overhang;
        slopeLength = parseFloat((halfWidthWithOverhang / cosAngle).toFixed(2));

        // Panjang bubungan / bentang horizontal memanjang (termasuk overstek samping)
        ridgeLength = parseFloat((length + (2 * overhang)).toFixed(2));

        // Luas total atap 2 sisi miring
        totalRoofArea = parseFloat((2 * (ridgeLength * slopeLength)).toFixed(2));

        // Jumlah baris lembar ke samping per sisi
        sheetsAcross = Math.ceil(ridgeLength / effWidth);

        // Jumlah susunan lembar ke atas (kemiringan lereng)
        if (sheetLen >= slopeLength) {
            sheetsPerSlope = 1;
        } else {
            const overlap = 0.20; // standar overlap tumpangan ujung 20 cm
            const remainingSlope = slopeLength - sheetLen;
            const effectiveStep = Math.max(0.2, sheetLen - overlap);
            sheetsPerSlope = 1 + Math.ceil(remainingSlope / effectiveStep);
        }

        // Total kebutuhan 2 sisi bidang miring
        totalSheets = sheetsAcross * sheetsPerSlope * 2;

        // Nok Bubungan Puncak (panjang nok 1.0m, overlap 10cm -> efektif 0.90m)
        if (roofState.includeRidge) {
            ridgePieces = Math.ceil(ridgeLength / 0.90);
        }
    } else if (roofState.mode === 'monopitch') {
        // Model Kanopi / Sandar / Miring 1 Sisi
        const length = Math.max(1, parseFloat(roofState.length) || 1);
        const width = Math.max(1, parseFloat(roofState.width) || 1);

        const widthWithOverhang = width + overhang;
        slopeLength = parseFloat((widthWithOverhang / cosAngle).toFixed(2));
        const horizontalSpan = parseFloat((length + (2 * overhang)).toFixed(2));

        totalRoofArea = parseFloat((horizontalSpan * slopeLength).toFixed(2));
        sheetsAcross = Math.ceil(horizontalSpan / effWidth);

        if (sheetLen >= slopeLength) {
            sheetsPerSlope = 1;
        } else {
            const overlap = 0.20;
            const remainingSlope = slopeLength - sheetLen;
            const effectiveStep = Math.max(0.2, sheetLen - overlap);
            sheetsPerSlope = 1 + Math.ceil(remainingSlope / effectiveStep);
        }

        totalSheets = sheetsAcross * sheetsPerSlope;
        ridgePieces = 0; // Kanopi 1 sisi tidak menggunakan nok bubungan puncak
    } else {
        // Mode Luas Langsung (m²)
        totalRoofArea = Math.max(1, parseFloat(roofState.directArea) || 1);
        slopeLength = 0;
        ridgeLength = 0;
        sheetsAcross = 0;
        sheetsPerSlope = 0;

        // Luas efektif 1 lembar dengan toleransi overlap tumpangan samping & ujung (0.2m) + waste 5%
        const effSheetArea = effWidth * Math.max(0.5, sheetLen - 0.20);
        totalSheets = Math.ceil((totalRoofArea * 1.05) / effSheetArea);
        ridgePieces = 0;
    }

    // Perhitungan Pengencang (Baut Roofing SDS / Paku Payung / Paku Asbes)
    if (roofState.includeFasteners) {
        if (roofState.roofType === 'spandek') {
            // Baut Roofing: ~5 pcs per m² atau minimal 8 pcs per lembar
            fastenerPcs = Math.max(Math.ceil(totalRoofArea * 5), totalSheets * 8);
            fastenerPacks = Math.ceil(fastenerPcs / spec.fastenerBoxSize);
        } else if (roofState.roofType === 'seng') {
            // Paku Payung Seng: ~8 pcs per lembar
            fastenerPcs = totalSheets * 8;
            fastenerPacks = Math.ceil(fastenerPcs / spec.fastenerBoxSize); // dalam Kg (~70 pcs/kg)
        } else {
            // Paku Asbes Berkaret: ~6 pcs per lembar
            fastenerPcs = totalSheets * 6;
            fastenerPacks = Math.ceil(fastenerPcs / spec.fastenerBoxSize); // dalam Pack isi 50
        }
    }

    return {
        roofType: roofState.roofType,
        mode: roofState.mode,
        spec,
        sheetLength: sheetLen,
        slopeAngle: angle,
        slopeLength,
        ridgeLength,
        totalRoofArea,
        sheetsAcross,
        sheetsPerSlope,
        totalSheets,
        ridgePieces,
        fastenerPcs,
        fastenerPacks
    };
};

// ─── PENCARIAN REKOMENDASI PRODUK TOKO ───────────────────────
const findRelatedStoreProducts = (type) => {
    const prods = Array.isArray(appData.products) ? appData.products : [];
    if (type === 'paint') {
        return prods.filter(p => {
            if (!p || p.isActive === false || p.isActive === 'false') return false;
            const text = `${p.name || ''} ${p.category || ''} ${p.subCategory || ''}`.toLowerCase();
            return text.includes('cat') || text.includes('mowilex') || text.includes('dulux') || 
                   text.includes('avitex') || text.includes('no drop') || text.includes('plamir') || 
                   text.includes('alkali') || text.includes('sealer');
        }).slice(0, 4);
    }
    if (type === 'tile') {
        return prods.filter(p => {
            if (!p || p.isActive === false || p.isActive === 'false') return false;
            const text = `${p.name || ''} ${p.category || ''} ${p.subCategory || ''}`.toLowerCase();
            return text.includes('keramik') || text.includes('granit') || text.includes('tile') || 
                   text.includes('nat') || text.includes('perekat');
        }).slice(0, 4);
    }
    if (type === 'brick') {
        return prods.filter(p => {
            if (!p || p.isActive === false || p.isActive === 'false') return false;
            const text = `${p.name || ''} ${p.category || ''} ${p.subCategory || ''}`.toLowerCase();
            return text.includes('hebel') || text.includes('bata') || text.includes('mortar') || 
                   text.includes('semen') || text.includes('pasir');
        }).slice(0, 4);
    }
    if (type === 'roof') {
        return prods.filter(p => {
            if (!p || p.isActive === false || p.isActive === 'false') return false;
            const text = `${p.name || ''} ${p.category || ''} ${p.subCategory || ''}`.toLowerCase();
            return text.includes('spandek') || text.includes('spandex') || text.includes('seng') || 
                   text.includes('asbes') || text.includes('atap') || text.includes('zincalume') || 
                   text.includes('galvalum') || text.includes('roofing') || text.includes('paku payung') || 
                   text.includes('nok') || text.includes('bubungan') || text.includes('baja ringan') || 
                   text.includes('reng');
        }).slice(0, 4);
    }
    return [];
};

// ─── RENDER SUB-KOMPONEN FORM & HASIL ESTIMATOR (ZERO-FLICKER ARCHITECTURE) ───

/**
 * Render Formulir Input Kolom Kiri
 * Hanya di-render ulang saat perpindahan tab atau switch mode (room vs area, tipe atap dsb)
 */
export const renderEstimatorFormHtml = (tab) => {
    if (tab === 'paint') {
        return `
        <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80 space-y-3.5">
            <div class="flex items-center justify-between pb-2 border-b border-slate-200/60 dark:border-slate-700/60">
                <span class="text-xs font-black uppercase tracking-wider text-slate-700 dark:text-slate-300 flex items-center gap-2">
                    <i class="fa-solid fa-paintbrush text-[var(--color-primary)]"></i> Parameter Dinding
                </span>
                <div class="inline-flex p-0.5 rounded-lg bg-slate-200/70 dark:bg-slate-700 text-[10px] font-bold">
                    <button type="button" onclick="window.setEstimatorPaintMode('room')" class="px-2 py-1 rounded-md transition-all cursor-pointer ${paintState.mode === 'room' ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-2xs font-extrabold' : 'text-slate-500'}">Ruangan</button>
                    <button type="button" onclick="window.setEstimatorPaintMode('area')" class="px-2 py-1 rounded-md transition-all cursor-pointer ${paintState.mode === 'area' ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-2xs font-extrabold' : 'text-slate-500'}">Luas M²</button>
                </div>
            </div>

            ${paintState.mode === 'room' ? `
            <div class="grid grid-cols-2 gap-2.5">
                <div>
                    <label class="text-[10px] font-bold text-slate-500 uppercase">Panjang Ruang (m)</label>
                    <input type="number" id="paint-input-length" step="0.5" min="1" max="100" value="${paintState.length}" oninput="window.updateEstimatorPaintField('length', this.value)"
                        class="w-full mt-1 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2 text-xs font-bold bg-white dark:bg-slate-800 text-slate-800 dark:text-white focus:outline-none focus:border-[var(--color-primary)]">
                </div>
                <div>
                    <label class="text-[10px] font-bold text-slate-500 uppercase">Lebar Ruang (m)</label>
                    <input type="number" id="paint-input-width" step="0.5" min="1" max="100" value="${paintState.width}" oninput="window.updateEstimatorPaintField('width', this.value)"
                        class="w-full mt-1 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2 text-xs font-bold bg-white dark:bg-slate-800 text-slate-800 dark:text-white focus:outline-none focus:border-[var(--color-primary)]">
                </div>
            </div>
            <div class="grid grid-cols-2 gap-2.5">
                <div>
                    <label class="text-[10px] font-bold text-slate-500 uppercase">Tinggi Dinding (m)</label>
                    <input type="number" id="paint-input-height" step="0.25" min="1" max="20" value="${paintState.height}" oninput="window.updateEstimatorPaintField('height', this.value)"
                        class="w-full mt-1 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2 text-xs font-bold bg-white dark:bg-slate-800 text-slate-800 dark:text-white focus:outline-none focus:border-[var(--color-primary)]">
                </div>
                <div>
                    <label class="text-[10px] font-bold text-slate-500 uppercase" title="Area pintu dan jendela yang tidak dicat">Pintu/Jendela (m²)</label>
                    <input type="number" id="paint-input-openings" step="0.5" min="0" max="50" value="${paintState.openings}" oninput="window.updateEstimatorPaintField('openings', this.value)"
                        class="w-full mt-1 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2 text-xs font-bold bg-white dark:bg-slate-800 text-slate-800 dark:text-white focus:outline-none focus:border-[var(--color-primary)]">
                </div>
            </div>
            <div class="flex items-center justify-between pt-1">
                <span class="text-xs font-bold text-slate-700 dark:text-slate-300">Cat Plafon Sekalian?</span>
                <input type="checkbox" id="paint-input-ceiling" ${paintState.ceiling ? 'checked' : ''} onchange="window.updateEstimatorPaintField('ceiling', this.checked)"
                    class="w-4 h-4 rounded text-[var(--color-primary)] accent-[var(--color-primary)] cursor-pointer">
            </div>
            ` : `
            <div>
                <label class="text-[10px] font-bold text-slate-500 uppercase">Total Luas Bidang Cat (m²)</label>
                <input type="number" id="paint-input-directArea" step="1" min="1" max="10000" value="${paintState.directArea}" oninput="window.updateEstimatorPaintField('directArea', this.value)"
                    class="w-full mt-1 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2.5 text-xs font-bold bg-white dark:bg-slate-800 text-slate-800 dark:text-white focus:outline-none focus:border-[var(--color-primary)]">
            </div>
            `}

            <!-- Layer Pengecatan (Preset Buttons Cerdas Tanpa Rebuild Input) -->
            <div>
                <label class="text-[10px] font-bold text-slate-500 uppercase mb-1.5 block">Jumlah Lapisan Pengecatan</label>
                <div class="grid grid-cols-3 gap-2" id="paint-coats-button-group">
                    <button type="button" onclick="window.setEstimatorPaintCoats(1)" class="paint-coat-btn py-2 rounded-xl text-xs font-extrabold transition-all border cursor-pointer ${paintState.coats === 1 ? 'border-[var(--color-primary)] bg-[rgba(var(--color-primary-rgb),0.1)] text-[var(--color-primary)] shadow-2xs' : 'border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400'}" data-coats="1">1x Lapis</button>
                    <button type="button" onclick="window.setEstimatorPaintCoats(2)" class="paint-coat-btn py-2 rounded-xl text-xs font-extrabold transition-all border cursor-pointer ${paintState.coats === 2 ? 'border-[var(--color-primary)] bg-[rgba(var(--color-primary-rgb),0.1)] text-[var(--color-primary)] shadow-2xs' : 'border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400'}" data-coats="2">2x Rekomendasi</button>
                    <button type="button" onclick="window.setEstimatorPaintCoats(3)" class="paint-coat-btn py-2 rounded-xl text-xs font-extrabold transition-all border cursor-pointer ${paintState.coats === 3 ? 'border-[var(--color-primary)] bg-[rgba(var(--color-primary-rgb),0.1)] text-[var(--color-primary)] shadow-2xs' : 'border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400'}" data-coats="3">3x Warna Gelap</button>
                </div>
            </div>

            <div class="flex items-center justify-between pt-1">
                <span class="text-xs font-bold text-slate-700 dark:text-slate-300">Termasuk Cat Dasar (Alkali)?</span>
                <input type="checkbox" id="paint-input-sealer" ${paintState.includeSealer ? 'checked' : ''} onchange="window.updateEstimatorPaintField('includeSealer', this.checked)"
                    class="w-4 h-4 rounded text-[var(--color-primary)] accent-[var(--color-primary)] cursor-pointer">
            </div>
        </div>`;
    }

    if (tab === 'tile') {
        return `
        <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80 space-y-3.5">
            <span class="text-xs font-black uppercase tracking-wider text-slate-700 dark:text-slate-300 flex items-center gap-2 pb-2 border-b border-slate-200/60 dark:border-slate-700/60">
                <i class="fa-solid fa-table-cells text-indigo-500"></i> Parameter Keramik / Granit
            </span>

            <div class="grid grid-cols-2 gap-2.5">
                <div>
                    <label class="text-[10px] font-bold text-slate-500 uppercase">Panjang Lantai (m)</label>
                    <input type="number" id="tile-input-length" step="0.5" min="1" max="100" value="${tileState.length}" oninput="window.updateEstimatorTileField('length', this.value)"
                        class="w-full mt-1 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2 text-xs font-bold bg-white dark:bg-slate-800 text-slate-800 dark:text-white focus:outline-none focus:border-[var(--color-primary)]">
                </div>
                <div>
                    <label class="text-[10px] font-bold text-slate-500 uppercase">Lebar Lantai (m)</label>
                    <input type="number" id="tile-input-width" step="0.5" min="1" max="100" value="${tileState.width}" oninput="window.updateEstimatorTileField('width', this.value)"
                        class="w-full mt-1 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2 text-xs font-bold bg-white dark:bg-slate-800 text-slate-800 dark:text-white focus:outline-none focus:border-[var(--color-primary)]">
                </div>
            </div>

            <div>
                <label class="text-[10px] font-bold text-slate-500 uppercase mb-1.5 block">Ukuran Keramik / Granit</label>
                <select id="tile-input-size" onchange="window.updateEstimatorTileField('tileSize', this.value)"
                    class="w-full border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2.5 text-xs font-bold bg-white dark:bg-slate-800 text-slate-800 dark:text-white focus:outline-none focus:border-[var(--color-primary)]">
                    <option value="30x30" ${tileState.tileSize === '30x30' ? 'selected' : ''}>30 x 30 cm (1 Dus = 1.00 m² / 11 keping)</option>
                    <option value="40x40" ${tileState.tileSize === '40x40' ? 'selected' : ''}>40 x 40 cm (1 Dus = 0.96 m² / 6 keping)</option>
                    <option value="50x50" ${tileState.tileSize === '50x50' ? 'selected' : ''}>50 x 50 cm (1 Dus = 1.00 m² / 4 keping)</option>
                    <option value="60x60" ${tileState.tileSize === '60x60' ? 'selected' : ''}>60 x 60 cm (1 Dus = 1.44 m² / 4 keping)</option>
                    <option value="80x80" ${tileState.tileSize === '80x80' ? 'selected' : ''}>80 x 80 cm (1 Dus = 1.92 m² / 3 keping)</option>
                </select>
            </div>

            <div>
                <label class="text-[10px] font-bold text-slate-500 uppercase mb-1.5 block">Cadangan Potongan / Waste Factor</label>
                <div class="grid grid-cols-3 gap-2" id="tile-waste-button-group">
                    <button type="button" onclick="window.setEstimatorTileWaste(5)" class="tile-waste-btn py-2 rounded-xl text-xs font-extrabold transition-all border cursor-pointer ${tileState.wastePercent === 5 ? 'border-[var(--color-primary)] text-[var(--color-primary)] font-black shadow-2xs' : 'border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400'}" style="${tileState.wastePercent === 5 ? 'background: rgba(var(--color-primary-rgb), 0.08); border-color: var(--color-primary);' : ''}" data-waste="5">5% Minimal</button>
                    <button type="button" onclick="window.setEstimatorTileWaste(10)" class="tile-waste-btn py-2 rounded-xl text-xs font-extrabold transition-all border cursor-pointer ${tileState.wastePercent === 10 ? 'border-[var(--color-primary)] text-[var(--color-primary)] font-black shadow-2xs' : 'border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400'}" style="${tileState.wastePercent === 10 ? 'background: rgba(var(--color-primary-rgb), 0.08); border-color: var(--color-primary);' : ''}" data-waste="10">10% Standar</button>
                    <button type="button" onclick="window.setEstimatorTileWaste(15)" class="tile-waste-btn py-2 rounded-xl text-xs font-extrabold transition-all border cursor-pointer ${tileState.wastePercent === 15 ? 'border-[var(--color-primary)] text-[var(--color-primary)] font-black shadow-2xs' : 'border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400'}" style="${tileState.wastePercent === 15 ? 'background: rgba(var(--color-primary-rgb), 0.08); border-color: var(--color-primary);' : ''}" data-waste="15">15% Diagonal</button>
                </div>
            </div>

            <div class="space-y-2 pt-1 border-t border-slate-200/60 dark:border-slate-700/60">
                <div class="flex items-center justify-between">
                    <span class="text-xs font-bold text-slate-700 dark:text-slate-300">Semen Perekat Keramik (Adhesive)?</span>
                    <input type="checkbox" id="tile-input-adhesive" ${tileState.includeAdhesive ? 'checked' : ''} onchange="window.updateEstimatorTileField('includeAdhesive', this.checked)"
                        class="w-4 h-4 rounded accent-[var(--color-primary)] cursor-pointer">
                </div>
                <div class="flex items-center justify-between">
                    <span class="text-xs font-bold text-slate-700 dark:text-slate-300">Semen Pengisi Nat (Tile Grout)?</span>
                    <input type="checkbox" id="tile-input-grout" ${tileState.includeGrout ? 'checked' : ''} onchange="window.updateEstimatorTileField('includeGrout', this.checked)"
                        class="w-4 h-4 rounded accent-[var(--color-primary)] cursor-pointer">
                </div>
            </div>
        </div>`;
    }

    if (tab === 'brick') {
        return `
        <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80 space-y-3.5">
            <span class="text-xs font-black uppercase tracking-wider text-slate-700 dark:text-slate-300 flex items-center gap-2 pb-2 border-b border-slate-200/60 dark:border-slate-700/60">
                <i class="fa-solid fa-cubes-stacked text-amber-600"></i> Parameter Pasangan Dinding
            </span>

            <div class="grid grid-cols-2 gap-2.5">
                <div>
                    <label class="text-[10px] font-bold text-slate-500 uppercase">Panjang Dinding (m)</label>
                    <input type="number" id="brick-input-length" step="0.5" min="1" max="200" value="${brickState.length}" oninput="window.updateEstimatorBrickField('length', this.value)"
                        class="w-full mt-1 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2 text-xs font-bold bg-white dark:bg-slate-800 text-slate-800 dark:text-white focus:outline-none focus:border-[var(--color-primary)]">
                </div>
                <div>
                    <label class="text-[10px] font-bold text-slate-500 uppercase">Tinggi Dinding (m)</label>
                    <input type="number" id="brick-input-height" step="0.25" min="1" max="20" value="${brickState.height}" oninput="window.updateEstimatorBrickField('height', this.value)"
                        class="w-full mt-1 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2 text-xs font-bold bg-white dark:bg-slate-800 text-slate-800 dark:text-white focus:outline-none focus:border-[var(--color-primary)]">
                </div>
            </div>

            <div class="grid grid-cols-2 gap-2.5">
                <div>
                    <label class="text-[10px] font-bold text-slate-500 uppercase">Jumlah Sisi Tembok</label>
                    <input type="number" id="brick-input-sides" min="1" max="20" value="${brickState.sides}" oninput="window.updateEstimatorBrickField('sides', this.value)"
                        class="w-full mt-1 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2 text-xs font-bold bg-white dark:bg-slate-800 text-slate-800 dark:text-white focus:outline-none focus:border-[var(--color-primary)]">
                </div>
                <div>
                    <label class="text-[10px] font-bold text-slate-500 uppercase">Bukaan Pintu/Jendela (m²)</label>
                    <input type="number" id="brick-input-openings" step="0.5" min="0" max="50" value="${brickState.openings}" oninput="window.updateEstimatorBrickField('openings', this.value)"
                        class="w-full mt-1 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2 text-xs font-bold bg-white dark:bg-slate-800 text-slate-800 dark:text-white focus:outline-none focus:border-[var(--color-primary)]">
                </div>
            </div>

            <div>
                <label class="text-[10px] font-bold text-slate-500 uppercase mb-1.5 block">Pilihan Material Dinding</label>
                <select id="brick-input-type" onchange="window.updateEstimatorBrickField('brickType', this.value)"
                    class="w-full border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2.5 text-xs font-bold bg-white dark:bg-slate-800 text-slate-800 dark:text-white focus:outline-none focus:border-[var(--color-primary)]">
                    <option value="hebel10" ${brickState.brickType === 'hebel10' ? 'selected' : ''}>Bata Ringan / Hebel Tebal 10 cm (60x20x10)</option>
                    <option value="hebel75" ${brickState.brickType === 'hebel75' ? 'selected' : ''}>Bata Ringan / Hebel Tebal 7.5 cm (60x20x7.5)</option>
                    <option value="redbrick" ${brickState.brickType === 'redbrick' ? 'selected' : ''}>Bata Merah Bakar Standar</option>
                </select>
            </div>
        </div>`;
    }

    if (tab === 'roof') {
        const spec = ROOF_SPECS[roofState.roofType] || ROOF_SPECS.spandek;
        return `
        <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80 space-y-3.5">
            <!-- Header Parameter & Mode Atap -->
            <div class="flex items-center justify-between pb-2 border-b border-slate-200/60 dark:border-slate-700/60">
                <span class="text-xs font-black uppercase tracking-wider text-slate-700 dark:text-slate-300 flex items-center gap-2">
                    <i class="fa-solid fa-house-chimney text-sky-500"></i> Parameter Bidang Atap
                </span>
                <div class="inline-flex p-0.5 rounded-lg bg-slate-200/70 dark:bg-slate-700 text-[10px] font-bold">
                    <button type="button" onclick="window.setEstimatorRoofMode('gable')" class="px-2 py-1 rounded-md transition-all cursor-pointer ${roofState.mode === 'gable' ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-2xs font-extrabold' : 'text-slate-500'}">Pelana</button>
                    <button type="button" onclick="window.setEstimatorRoofMode('monopitch')" class="px-2 py-1 rounded-md transition-all cursor-pointer ${roofState.mode === 'monopitch' ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-2xs font-extrabold' : 'text-slate-500'}">Kanopi</button>
                    <button type="button" onclick="window.setEstimatorRoofMode('area')" class="px-2 py-1 rounded-md transition-all cursor-pointer ${roofState.mode === 'area' ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-2xs font-extrabold' : 'text-slate-500'}">Luas M²</button>
                </div>
            </div>

            <!-- Pilihan Jenis Material Atap (Spandek, Seng, Asbes) -->
            <div>
                <label class="text-[10px] font-bold text-slate-500 uppercase mb-1.5 block">Jenis Material Atap / Penutup</label>
                <div class="grid grid-cols-3 gap-1.5" id="roof-type-button-group">
                    <button type="button" onclick="window.setEstimatorRoofType('spandek')" class="roof-type-btn py-2 px-1.5 rounded-xl text-[11px] font-extrabold transition-all border cursor-pointer text-center ${roofState.roofType === 'spandek' ? 'border-sky-500 bg-sky-50 dark:bg-sky-950/40 text-sky-700 dark:text-sky-300 shadow-2xs' : 'border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400'}" data-rooftype="spandek">
                        <i class="fa-solid fa-layer-group block text-xs mb-1 ${roofState.roofType === 'spandek' ? 'text-sky-500' : 'text-slate-400'}"></i>
                        Spandek
                    </button>
                    <button type="button" onclick="window.setEstimatorRoofType('seng')" class="roof-type-btn py-2 px-1.5 rounded-xl text-[11px] font-extrabold transition-all border cursor-pointer text-center ${roofState.roofType === 'seng' ? 'border-amber-500 bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-300 shadow-2xs' : 'border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400'}" data-rooftype="seng">
                        <i class="fa-solid fa-water block text-xs mb-1 ${roofState.roofType === 'seng' ? 'text-amber-500' : 'text-slate-400'}"></i>
                        Seng
                    </button>
                    <button type="button" onclick="window.setEstimatorRoofType('asbes')" class="roof-type-btn py-2 px-1.5 rounded-xl text-[11px] font-extrabold transition-all border cursor-pointer text-center ${roofState.roofType === 'asbes' ? 'border-emerald-500 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 shadow-2xs' : 'border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400'}" data-rooftype="asbes">
                        <i class="fa-solid fa-bars-staggered block text-xs mb-1 ${roofState.roofType === 'asbes' ? 'text-emerald-500' : 'text-slate-400'}"></i>
                        Asbes
                    </button>
                </div>
            </div>

            <!-- Pilihan Panjang Lembar -->
            <div>
                <div class="flex items-center justify-between mb-1">
                    <label class="text-[10px] font-bold text-slate-500 uppercase">Panjang Lembar Pilihan</label>
                    <span class="text-[10px] font-mono font-bold text-sky-600 dark:text-sky-400" id="roof-effective-width-badge">Lebar Efektif: ${spec.effectiveWidth * 100} cm</span>
                </div>
                <select id="roof-input-sheetLength" onchange="window.updateEstimatorRoofField('sheetLength', this.value)"
                    class="w-full border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2 text-xs font-bold bg-white dark:bg-slate-800 text-slate-800 dark:text-white focus:outline-none focus:border-[var(--color-primary)]">
                    ${spec.standardLengths.map(l => `
                        <option value="${l.val}" ${parseFloat(roofState.sheetLength) === l.val ? 'selected' : ''}>${l.label}</option>
                    `).join('')}
                </select>
            </div>

            ${roofState.mode !== 'area' ? `
            <div class="grid grid-cols-2 gap-2.5">
                <div>
                    <label class="text-[10px] font-bold text-slate-500 uppercase">${roofState.mode === 'gable' ? 'P. Bangunan (m)' : 'Lebar Kanopi (m)'}</label>
                    <input type="number" id="roof-input-length" step="0.5" min="1" max="100" value="${roofState.length}" oninput="window.updateEstimatorRoofField('length', this.value)"
                        class="w-full mt-1 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2 text-xs font-bold bg-white dark:bg-slate-800 text-slate-800 dark:text-white focus:outline-none focus:border-[var(--color-primary)]">
                </div>
                <div>
                    <label class="text-[10px] font-bold text-slate-500 uppercase">${roofState.mode === 'gable' ? 'Bentang Lebar (m)' : 'P. Jatuh Air (m)'}</label>
                    <input type="number" id="roof-input-width" step="0.5" min="1" max="100" value="${roofState.width}" oninput="window.updateEstimatorRoofField('width', this.value)"
                        class="w-full mt-1 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2 text-xs font-bold bg-white dark:bg-slate-800 text-slate-800 dark:text-white focus:outline-none focus:border-[var(--color-primary)]">
                </div>
            </div>

            <div class="grid grid-cols-2 gap-2.5">
                <div>
                    <label class="text-[10px] font-bold text-slate-500 uppercase">Sudut Miring (°)</label>
                    <input type="number" id="roof-input-slopeAngle" step="1" min="5" max="60" value="${roofState.slopeAngle}" oninput="window.updateEstimatorRoofField('slopeAngle', this.value)"
                        class="w-full mt-1 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2 text-xs font-bold bg-white dark:bg-slate-800 text-slate-800 dark:text-white focus:outline-none focus:border-[var(--color-primary)]">
                </div>
                <div>
                    <label class="text-[10px] font-bold text-slate-500 uppercase" title="Lebar cucuran atap keluar dinding">Overstek (m)</label>
                    <input type="number" id="roof-input-overhang" step="0.1" min="0" max="3" value="${roofState.overhang}" oninput="window.updateEstimatorRoofField('overhang', this.value)"
                        class="w-full mt-1 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2 text-xs font-bold bg-white dark:bg-slate-800 text-slate-800 dark:text-white focus:outline-none focus:border-[var(--color-primary)]">
                </div>
            </div>

            <!-- Preset Sudut Cepat (Tanpa Rebuild Input) -->
            <div class="pt-0.5">
                <label class="text-[9px] font-bold text-slate-400 uppercase mb-1 block">Preset Sudut Kemiringan</label>
                <div class="grid grid-cols-4 gap-1.5" id="roof-angle-button-group">
                    ${[15, 20, 25, 30].map(ang => `
                        <button type="button" onclick="window.setEstimatorRoofAngle(${ang})" class="roof-angle-btn py-1 rounded-lg text-[10px] font-black border transition-all cursor-pointer ${parseFloat(roofState.slopeAngle) === ang ? 'bg-sky-50 dark:bg-sky-950/60 border-sky-400 text-sky-700 dark:text-sky-300 shadow-2xs' : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-500'}" data-angle="${ang}">${ang}°</button>
                    `).join('')}
                </div>
            </div>
            ` : `
            <div>
                <label class="text-[10px] font-bold text-slate-500 uppercase">Total Luas Bidang Atap (m²)</label>
                <input type="number" id="roof-input-directArea" step="1" min="1" max="10000" value="${roofState.directArea}" oninput="window.updateEstimatorRoofField('directArea', this.value)"
                    class="w-full mt-1 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2.5 text-xs font-bold bg-white dark:bg-slate-800 text-slate-800 dark:text-white focus:outline-none focus:border-[var(--color-primary)]">
            </div>
            `}

            <!-- Checkboxes Nok & Pengencang -->
            <div class="space-y-2 pt-1 border-t border-slate-200/60 dark:border-slate-700/60">
                ${roofState.mode === 'gable' ? `
                <div class="flex items-center justify-between">
                    <span class="text-xs font-bold text-slate-700 dark:text-slate-300">Sertakan Nok Bubungan Puncak?</span>
                    <input type="checkbox" id="roof-input-ridge" ${roofState.includeRidge ? 'checked' : ''} onchange="window.updateEstimatorRoofField('includeRidge', this.checked)"
                        class="w-4 h-4 rounded text-sky-600 accent-sky-600 cursor-pointer">
                </div>
                ` : ''}
                <div class="flex items-center justify-between">
                    <span class="text-xs font-bold text-slate-700 dark:text-slate-300">Sertakan Baut / Paku?</span>
                    <input type="checkbox" id="roof-input-fasteners" ${roofState.includeFasteners ? 'checked' : ''} onchange="window.updateEstimatorRoofField('includeFasteners', this.checked)"
                        class="w-4 h-4 rounded text-sky-600 accent-sky-600 cursor-pointer">
                </div>
            </div>
        </div>`;
    }

    return '';
};

/**
 * Render Hasil Kalkulasi & Rekomendasi Kolom Kanan
 * Di-update secara instan (Zero Flicker) setiap keystroke input
 */
export const renderEstimatorResultHtml = (tab) => {
    if (tab === 'paint') {
        const res = calculatePaintNeeds();
        const related = findRelatedStoreProducts('paint');

        return `
        <!-- Bento Result Card -->
        <div class="p-5 rounded-3xl bg-gradient-to-br from-slate-900 to-slate-800 text-white shadow-xl border border-slate-700/80 relative overflow-hidden">
            <div class="flex items-start justify-between gap-3 relative z-10">
                <div>
                    <span class="text-[10px] font-black uppercase tracking-widest text-amber-400">Hasil Estimasi Cat Resmi</span>
                    <h4 class="text-2xl sm:text-3xl font-black mt-1 tracking-tight text-white">
                        ${res.pails > 0 ? `${res.pails} Pail (20L) ` : ''}${res.gallons > 0 ? `+ ${res.gallons} Galon (2.5L)` : (res.pails === 0 ? '1 Galon' : '')}
                    </h4>
                    <p class="text-xs text-slate-300 mt-1">Total kebutuhan volume: <b class="text-white">${res.totalVolumeLiters} Liter / Kg</b> (${res.coats}x lapis)</p>
                </div>
                <div class="w-12 h-12 rounded-2xl bg-slate-800 flex items-center justify-center text-xl text-amber-400 border border-slate-700 shrink-0">
                    <i class="fa-solid fa-bucket"></i>
                </div>
            </div>

            <div class="grid grid-cols-2 sm:grid-cols-3 gap-2.5 mt-4 pt-4 border-t border-white/15 relative z-10 text-xs">
                <div class="p-2.5 rounded-xl bg-white/5 border border-white/10">
                    <p class="text-[10px] text-slate-400 font-bold uppercase">Luas Dinding</p>
                    <p class="text-sm font-black text-white mt-0.5">${res.totalWallArea} m²</p>
                </div>
                <div class="p-2.5 rounded-xl bg-white/5 border border-white/10">
                    <p class="text-[10px] text-slate-400 font-bold uppercase">Luas Plafon</p>
                    <p class="text-sm font-black text-white mt-0.5">${res.ceilingArea} m²</p>
                </div>
                <div class="p-2.5 rounded-xl bg-white/5 border border-white/10 col-span-2 sm:col-span-1">
                    <p class="text-[10px] text-amber-300 font-bold uppercase">Alkali Sealer</p>
                    <p class="text-sm font-black text-amber-300 mt-0.5">${res.sealerGallons > 0 ? `${res.sealerGallons} Galon (${res.sealerVolume}L)` : 'Tidak dipilih'}</p>
                </div>
            </div>
        </div>

        <!-- Tombol Aksi Cepat -->
        <div class="flex flex-wrap gap-2.5">
            <button type="button" onclick="window.copyEstimatorSummary('paint')" class="flex-1 py-3 px-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 font-bold text-xs hover:bg-slate-100 transition-all cursor-pointer active:scale-95 flex items-center justify-center gap-2">
                <i class="fa-solid fa-copy"></i> Salin Rincian
            </button>
            <button type="button" onclick="window.shareEstimatorToWA('paint')" class="flex-1 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-md transition-all cursor-pointer active:scale-95 flex items-center justify-center gap-2">
                <i class="fa-brands fa-whatsapp text-sm"></i> Konsultasi WA
            </button>
            ${estimatorSource === 'pos' ? `
            <button type="button" onclick="window.addEstimatorToPOSCart('Cat Dinding (Estimasi)', ${res.totalVolumeLiters}, 'liter')" class="w-full py-3 px-4 rounded-xl text-white font-black text-xs shadow-md active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer" style="background:var(--color-primary)">
                <i class="fa-solid fa-cart-plus"></i> Masukkan Estimasi Cat ke Transaksi Kasir
            </button>
            ` : ''}
        </div>

        <!-- Katalog Produk Terkait di Toko -->
        ${related.length > 0 ? `
        <div class="pt-2">
            <p class="text-[11px] font-black uppercase tracking-wider text-slate-500 mb-2 flex items-center gap-1.5">
                <i class="fa-solid fa-tags text-[var(--color-primary)]"></i> Rekomendasi Produk Cat di Toko Kami:
            </p>
            <div class="grid grid-cols-2 gap-2">
                ${related.map(p => `
                <div class="p-2.5 rounded-xl border border-slate-200 dark:border-slate-700/80 bg-white dark:bg-slate-800 flex items-center gap-2 shadow-2xs">
                    <div class="w-10 h-10 rounded-lg overflow-hidden bg-slate-100 dark:bg-slate-700 shrink-0 flex items-center justify-center text-xs">
                        ${p.img ? `<img src="${esc(p.img)}" class="w-full h-full object-cover">` : `<i class="fa-solid fa-paint-roller text-slate-400"></i>`}
                    </div>
                    <div class="min-w-0 flex-1">
                        <p class="text-[11px] font-bold text-slate-800 dark:text-slate-100 truncate">${esc(p.name)}</p>
                        <p class="text-[10px] font-extrabold text-[var(--color-primary)]">${fCur(p.price)}</p>
                    </div>
                    <button type="button" onclick="window.addStoreProductFromEstimator('${p.id}')" class="btn-native-icon w-9 h-9 rounded-xl bg-[var(--color-primary)] text-white flex items-center justify-center text-xs hover:opacity-95 active:scale-95 transition-all cursor-pointer shrink-0 shadow-2xs" style="box-shadow: 0 2px 8px rgba(var(--color-primary-rgb), 0.3);" title="Tambah ke Belanja">
                        <i class="fa-solid fa-plus text-xs"></i>
                    </button>
                </div>
                `).join('')}
            </div>
        </div>
        ` : ''}`;
    }

    if (tab === 'tile') {
        const res = calculateTileNeeds();
        const related = findRelatedStoreProducts('tile');

        return `
        <!-- Bento Result Card -->
        <div class="p-5 rounded-3xl bg-gradient-to-br from-indigo-950 to-slate-900 text-white shadow-xl border border-indigo-900/60 relative overflow-hidden">
            <div class="flex items-start justify-between gap-3 relative z-10">
                <div>
                    <span class="text-[10px] font-black uppercase tracking-widest text-indigo-300">Hasil Estimasi Keramik Lantai</span>
                    <h4 class="text-3xl font-black mt-1 tracking-tight text-white">${res.totalBoxes} Dus Keramik</h4>
                    <p class="text-xs text-indigo-200 mt-1">Ukuran: <b>${res.spec.name}</b> (Coverage: ${res.spec.coveragePerBox} m²/dus)</p>
                </div>
                <div class="w-12 h-12 rounded-2xl bg-slate-800 flex items-center justify-center text-xl text-indigo-300 border border-slate-700 shrink-0">
                    <i class="fa-solid fa-border-all"></i>
                </div>
            </div>

            <div class="grid grid-cols-2 sm:grid-cols-3 gap-2.5 mt-4 pt-4 border-t border-white/15 relative z-10 text-xs">
                <div class="p-2.5 rounded-xl bg-white/5 border border-white/10">
                    <p class="text-[10px] text-slate-400 font-bold uppercase">Luas Bersih</p>
                    <p class="text-sm font-black text-white mt-0.5">${res.rawArea} m²</p>
                </div>
                <div class="p-2.5 rounded-xl bg-white/5 border border-white/10">
                    <p class="text-[10px] text-indigo-300 font-bold uppercase">+ Cadangan (${res.wastePercent}%)</p>
                    <p class="text-sm font-black text-white mt-0.5">${res.totalAreaWithWaste} m²</p>
                </div>
                <div class="p-2.5 rounded-xl bg-white/5 border border-white/10 col-span-2 sm:col-span-1">
                    <p class="text-[10px] text-emerald-300 font-bold uppercase">Perekat &amp; Nat</p>
                    <p class="text-sm font-black text-emerald-300 mt-0.5">${res.adhesiveBags} Sak / ${res.groutBags} Bks</p>
                </div>
            </div>
        </div>

        <!-- Tombol Aksi Cepat -->
        <div class="flex flex-wrap gap-2.5">
            <button type="button" onclick="window.copyEstimatorSummary('tile')" class="flex-1 py-3 px-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 font-bold text-xs hover:bg-slate-100 transition-all cursor-pointer active:scale-95 flex items-center justify-center gap-2">
                <i class="fa-solid fa-copy"></i> Salin Rincian
            </button>
            <button type="button" onclick="window.shareEstimatorToWA('tile')" class="flex-1 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-md transition-all cursor-pointer active:scale-95 flex items-center justify-center gap-2">
                <i class="fa-brands fa-whatsapp text-sm"></i> Konsultasi WA
            </button>
            ${estimatorSource === 'pos' ? `
            <button type="button" onclick="window.addEstimatorToPOSCart('Keramik ${res.spec.name} (Estimasi)', ${res.totalBoxes}, 'dus')" class="w-full py-3 px-4 rounded-xl text-white font-black text-xs shadow-md active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer" style="background:var(--color-primary)">
                <i class="fa-solid fa-cart-plus"></i> Masukkan ${res.totalBoxes} Dus Keramik ke Transaksi Kasir
            </button>
            ` : ''}
        </div>

        <!-- Produk Terkait -->
        ${related.length > 0 ? `
        <div class="pt-2">
            <p class="text-[11px] font-black uppercase tracking-wider text-slate-500 mb-2 flex items-center gap-1.5">
                <i class="fa-solid fa-tags text-indigo-500"></i> Rekomendasi Keramik &amp; Semen di Toko:
            </p>
            <div class="grid grid-cols-2 gap-2">
                ${related.map(p => `
                <div class="p-2.5 rounded-xl border border-slate-200 dark:border-slate-700/80 bg-white dark:bg-slate-800 flex items-center gap-2 shadow-2xs">
                    <div class="w-10 h-10 rounded-lg overflow-hidden bg-slate-100 dark:bg-slate-700 shrink-0 flex items-center justify-center text-xs">
                        ${p.img ? `<img src="${esc(p.img)}" class="w-full h-full object-cover">` : `<i class="fa-solid fa-border-all text-slate-400"></i>`}
                    </div>
                    <div class="min-w-0 flex-1">
                        <p class="text-[11px] font-bold text-slate-800 dark:text-slate-100 truncate">${esc(p.name)}</p>
                        <p class="text-[10px] font-extrabold text-[var(--color-primary)]">${fCur(p.price)}</p>
                    </div>
                    <button type="button" onclick="window.addStoreProductFromEstimator('${p.id}')" class="btn-native-icon w-9 h-9 rounded-xl bg-[var(--color-primary)] text-white flex items-center justify-center text-xs hover:opacity-95 active:scale-95 transition-all cursor-pointer shrink-0 shadow-2xs" style="box-shadow: 0 2px 8px rgba(var(--color-primary-rgb), 0.3);" title="Tambah ke Belanja">
                        <i class="fa-solid fa-plus text-xs"></i>
                    </button>
                </div>
                `).join('')}
            </div>
        </div>
        ` : ''}`;
    }

    if (tab === 'brick') {
        const res = calculateBrickNeeds();
        const related = findRelatedStoreProducts('brick');

        return `
        <!-- Bento Result Card -->
        <div class="p-5 rounded-3xl bg-gradient-to-br from-amber-950 to-slate-900 text-white shadow-xl border border-amber-900/60 relative overflow-hidden">
            <div class="flex items-start justify-between gap-3 relative z-10">
                <div>
                    <span class="text-[10px] font-black uppercase tracking-widest text-amber-300">Hasil Estimasi Pasangan Dinding</span>
                    <h4 class="text-2xl sm:text-3xl font-black mt-1 tracking-tight text-white">
                        ${brickState.brickType.startsWith('hebel') ? `${res.brickPcs} Pcs (${res.brickCubic} m³)` : `${res.brickPcs} Buah Bata Merah`}
                    </h4>
                    <p class="text-xs text-amber-200 mt-1">Luas Dinding Bersih: <b>${res.netArea} m²</b></p>
                </div>
                <div class="w-12 h-12 rounded-2xl bg-slate-800 flex items-center justify-center text-xl text-amber-300 border border-slate-700 shrink-0">
                    <i class="fa-solid fa-trowel-bricks"></i>
                </div>
            </div>

            <div class="grid grid-cols-2 gap-2.5 mt-4 pt-4 border-t border-white/15 relative z-10 text-xs">
                <div class="p-2.5 rounded-xl bg-white/5 border border-white/10">
                    <p class="text-[10px] text-slate-400 font-bold uppercase">Semen Perekat / Mortar</p>
                    <p class="text-sm font-black text-white mt-0.5">
                        ${brickState.brickType.startsWith('hebel') ? `${res.mortarBags} Sak Mortar (40kg)` : `${res.cementBags} Sak Semen (50kg)`}
                    </p>
                </div>
                <div class="p-2.5 rounded-xl bg-white/5 border border-white/10">
                    <p class="text-[10px] text-amber-300 font-bold uppercase">Pasir Pasang</p>
                    <p class="text-sm font-black text-amber-300 mt-0.5">
                        ${brickState.brickType.startsWith('hebel') ? 'Cukup Lem Mortar' : `${res.sandCubic} m³ Pasir`}
                    </p>
                </div>
            </div>
        </div>

        <!-- Tombol Aksi Cepat -->
        <div class="flex flex-wrap gap-2.5">
            <button type="button" onclick="window.copyEstimatorSummary('brick')" class="flex-1 py-3 px-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 font-bold text-xs hover:bg-slate-100 transition-all cursor-pointer active:scale-95 flex items-center justify-center gap-2">
                <i class="fa-solid fa-copy"></i> Salin Rincian
            </button>
            <button type="button" onclick="window.shareEstimatorToWA('brick')" class="flex-1 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-md transition-all cursor-pointer active:scale-95 flex items-center justify-center gap-2">
                <i class="fa-brands fa-whatsapp text-sm"></i> Konsultasi WA
            </button>
            ${estimatorSource === 'pos' ? `
            <button type="button" onclick="window.addEstimatorToPOSCart('${brickState.brickType.startsWith('hebel') ? 'Bata Ringan Hebel (Estimasi)' : 'Bata Merah (Estimasi)'}', ${res.brickPcs}, 'pcs')" class="w-full py-3 px-4 rounded-xl text-white font-black text-xs shadow-md active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer" style="background:var(--color-primary)">
                <i class="fa-solid fa-cart-plus"></i> Masukkan ${res.brickPcs} Pcs ke Transaksi Kasir
            </button>
            ` : ''}
        </div>

        <!-- Produk Terkait -->
        ${related.length > 0 ? `
        <div class="pt-2">
            <p class="text-[11px] font-black uppercase tracking-wider text-slate-500 mb-2 flex items-center gap-1.5">
                <i class="fa-solid fa-tags text-amber-500"></i> Rekomendasi Bata &amp; Semen Mortar di Toko:
            </p>
            <div class="grid grid-cols-2 gap-2">
                ${related.map(p => `
                <div class="p-2.5 rounded-xl border border-slate-200 dark:border-slate-700/80 bg-white dark:bg-slate-800 flex items-center gap-2 shadow-2xs">
                    <div class="w-10 h-10 rounded-lg overflow-hidden bg-slate-100 dark:bg-slate-700 shrink-0 flex items-center justify-center text-xs">
                        ${p.img ? `<img src="${esc(p.img)}" class="w-full h-full object-cover">` : `<i class="fa-solid fa-cubes text-slate-400"></i>`}
                    </div>
                    <div class="min-w-0 flex-1">
                        <p class="text-[11px] font-bold text-slate-800 dark:text-slate-100 truncate">${esc(p.name)}</p>
                        <p class="text-[10px] font-extrabold text-[var(--color-primary)]">${fCur(p.price)}</p>
                    </div>
                    <button type="button" onclick="window.addStoreProductFromEstimator('${p.id}')" class="btn-native-icon w-9 h-9 rounded-xl bg-[var(--color-primary)] text-white flex items-center justify-center text-xs hover:opacity-95 active:scale-95 transition-all cursor-pointer shrink-0 shadow-2xs" style="box-shadow: 0 2px 8px rgba(var(--color-primary-rgb), 0.3);" title="Tambah ke Belanja">
                        <i class="fa-solid fa-plus text-xs"></i>
                    </button>
                </div>
                `).join('')}
            </div>
        </div>
        ` : ''}`;
    }

    if (tab === 'roof') {
        const res = calculateRoofNeeds();
        const related = findRelatedStoreProducts('roof');

        return `
        <!-- Bento Result Card -->
        <div class="p-5 rounded-3xl bg-gradient-to-br from-slate-900 via-sky-950 to-slate-900 text-white shadow-xl border border-sky-900/60 relative overflow-hidden">
            <div class="flex items-start justify-between gap-3 relative z-10">
                <div>
                    <span class="text-[10px] font-black uppercase tracking-widest text-sky-400">Hasil Estimasi ${esc(res.spec.shortName)}</span>
                    <h4 class="text-2xl sm:text-3xl font-black mt-1 tracking-tight text-white flex items-baseline gap-2">
                        <span>${res.totalSheets} Lembar</span>
                        <span class="text-sm font-bold text-sky-300">(${res.sheetLength} Meter)</span>
                    </h4>
                    <p class="text-xs text-sky-200/90 mt-1 flex flex-wrap items-center gap-x-2 gap-y-0.5">
                        <span>Total Luas Atap: <b>${res.totalRoofArea} m²</b></span>
                        ${res.slopeLength > 0 ? `<span>• Panjang Lereng: <b>${res.slopeLength} m</b></span>` : ''}
                    </p>
                </div>
                <div class="w-12 h-12 rounded-2xl bg-slate-800/90 flex items-center justify-center text-xl text-sky-400 border border-sky-800/80 shrink-0">
                    <i class="fa-solid fa-roof-chimney"></i>
                </div>
            </div>

            <div class="grid grid-cols-2 sm:grid-cols-3 gap-2.5 mt-4 pt-4 border-t border-white/15 relative z-10 text-xs">
                <div class="p-2.5 rounded-xl bg-white/5 border border-white/10">
                    <p class="text-[10px] text-slate-400 font-bold uppercase truncate" title="${esc(res.spec.fastenerName)}">${esc(res.spec.fastenerName.split(' ')[0])} / Pengencang</p>
                    <p class="text-sm font-black text-white mt-0.5">
                        ${res.fastenerPacks > 0 ? `${res.fastenerPacks} ${res.spec.fastenerPackaging}` : '-' }
                    </p>
                    <p class="text-[10px] text-sky-300 font-semibold mt-0.5">${res.fastenerPcs} Pcs</p>
                </div>
                <div class="p-2.5 rounded-xl bg-white/5 border border-white/10">
                    <p class="text-[10px] text-slate-400 font-bold uppercase">Nok Bubungan</p>
                    <p class="text-sm font-black text-white mt-0.5">
                        ${res.ridgePieces > 0 ? `${res.ridgePieces} Batang` : (res.mode === 'monopitch' ? 'Tidak Perlu' : '-')}
                    </p>
                    <p class="text-[10px] text-sky-300 font-semibold mt-0.5">${res.mode === 'gable' ? `Bentang ${res.ridgeLength}m` : 'Kanopi 1 Sisi'}</p>
                </div>
                <div class="col-span-2 sm:col-span-1 p-2.5 rounded-xl bg-white/5 border border-white/10">
                    <p class="text-[10px] text-slate-400 font-bold uppercase">Susunan Lembar</p>
                    <p class="text-sm font-black text-sky-300 mt-0.5">
                        ${res.sheetsAcross > 0 ? `${res.sheetsAcross} Kolom × ${res.sheetsPerSlope} Susun` : `${res.totalSheets} Lbr`}
                    </p>
                    <p class="text-[10px] text-slate-300 font-semibold mt-0.5">${res.mode === 'gable' ? '2 Sisi Miring' : res.mode === 'monopitch' ? '1 Sisi Miring' : 'Hitungan Luas'}</p>
                </div>
            </div>

            <!-- Panduan Teknis Lapangan -->
            <div class="mt-3 p-2.5 rounded-xl bg-sky-950/70 border border-sky-800/60 text-[10px] text-sky-200 flex items-center gap-2">
                <i class="fa-solid fa-circle-info text-sky-400 shrink-0"></i>
                <span>Lebar efektif <b>${res.spec.effectiveWidth * 100} cm</b> (overlap samping 1 gelombang). Overlap sambungan ujung: 20 cm.</span>
            </div>
        </div>

        <!-- Tombol Aksi Cepat -->
        <div class="flex flex-wrap gap-2.5">
            <button type="button" onclick="window.copyEstimatorSummary('roof')" class="flex-1 py-3 px-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 font-bold text-xs hover:bg-slate-100 transition-all cursor-pointer active:scale-95 flex items-center justify-center gap-2">
                <i class="fa-solid fa-copy"></i> Salin Rincian
            </button>
            <button type="button" onclick="window.shareEstimatorToWA('roof')" class="flex-1 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-md transition-all cursor-pointer active:scale-95 flex items-center justify-center gap-2">
                <i class="fa-brands fa-whatsapp text-sm"></i> Konsultasi WA
            </button>
            ${estimatorSource === 'pos' ? `
            <button type="button" onclick="window.addEstimatorToPOSCart('${esc(res.spec.shortName)} (Estimasi)', ${res.totalSheets}, 'lembar')" class="w-full py-3 px-4 rounded-xl text-white font-black text-xs shadow-md active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer" style="background:var(--color-primary)">
                <i class="fa-solid fa-cart-plus"></i> Masukkan ${res.totalSheets} Lembar ke Transaksi Kasir
            </button>
            ` : ''}
        </div>

        <!-- Rekomendasi Produk Terkait Toko -->
        ${related.length > 0 ? `
        <div class="pt-2">
            <p class="text-[11px] font-black uppercase tracking-wider text-slate-500 mb-2 flex items-center gap-1.5">
                <i class="fa-solid fa-tags text-sky-500"></i> Rekomendasi Atap, Seng &amp; Nok di Toko:
            </p>
            <div class="grid grid-cols-2 gap-2">
                ${related.map(p => `
                <div class="p-2.5 rounded-xl border border-slate-200 dark:border-slate-700/80 bg-white dark:bg-slate-800 flex items-center gap-2 shadow-2xs">
                    <div class="w-10 h-10 rounded-lg overflow-hidden bg-slate-100 dark:bg-slate-700 shrink-0 flex items-center justify-center text-xs">
                        ${p.img ? `<img src="${esc(p.img)}" class="w-full h-full object-cover">` : `<i class="fa-solid fa-house-chimney text-slate-400"></i>`}
                    </div>
                    <div class="min-w-0 flex-1">
                        <p class="text-[11px] font-bold text-slate-800 dark:text-slate-100 truncate">${esc(p.name)}</p>
                        <p class="text-[10px] font-extrabold text-[var(--color-primary)]">${fCur(p.price)}</p>
                    </div>
                    <button type="button" onclick="window.addStoreProductFromEstimator('${p.id}')" class="btn-native-icon w-9 h-9 rounded-xl bg-[var(--color-primary)] text-white flex items-center justify-center text-xs hover:opacity-95 active:scale-95 transition-all cursor-pointer shrink-0 shadow-2xs" style="box-shadow: 0 2px 8px rgba(var(--color-primary-rgb), 0.3);" title="Tambah ke Belanja">
                        <i class="fa-solid fa-plus text-xs"></i>
                    </button>
                </div>
                `).join('')}
            </div>
        </div>
        ` : ''}`;
    }

    return '';
};

// ─── RENDER MODAL MATERIAL ESTIMATOR (CONTAINER UTAMA) ─────────
export const renderMaterialEstimatorModalContent = () => {
    if (typeof document === 'undefined') return;
    const modalBody = el('modal-material-estimator-body');
    if (!modalBody) return;

    modalBody.innerHTML = `
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-5">
        <!-- Kolom Kiri: Formulir Input Dimensi (5 Kolom Desktop) -->
        <div class="lg:col-span-5 space-y-4" id="estimator-form-container">
            ${renderEstimatorFormHtml(estimatorActiveTab)}
        </div>
        <!-- Kolom Kanan: Hasil Kalkulasi & Rekomendasi (7 Kolom Desktop) -->
        <div class="lg:col-span-7 space-y-4" id="estimator-results-container">
            ${renderEstimatorResultHtml(estimatorActiveTab)}
        </div>
    </div>`;

    updateEstimatorTabHeaderStyles();
};

/**
 * Update DOM Parsial untuk Hasil Estimasi (Zero-Flicker)
 * Memperbarui hasil hitungan seketika tanpa menghancurkan fokus kolom input yang sedang diketik
 */
export const updateEstimatorResultOnly = (tab = estimatorActiveTab) => {
    if (typeof document === 'undefined') return;
    const resContainer = el('estimator-results-container');
    if (!resContainer) {
        renderMaterialEstimatorModalContent();
        return;
    }
    resContainer.innerHTML = renderEstimatorResultHtml(tab);
};

const updateEstimatorTabHeaderStyles = () => {
    const tabs = ['paint', 'tile', 'brick', 'roof'];
    tabs.forEach(t => {
        const btn = el(`estimator-tab-btn-${t}`);
        if (!btn) return;
        if (t === estimatorActiveTab) {
            btn.className = 'shrink-0 sm:flex-1 py-2 sm:py-2.5 px-3 sm:px-3.5 rounded-xl font-black text-xs transition-all shadow-xs flex items-center justify-center gap-1.5 whitespace-nowrap cursor-pointer primary-bg text-white';
        } else {
            btn.className = 'shrink-0 sm:flex-1 py-2 sm:py-2.5 px-3 sm:px-3.5 rounded-xl font-bold text-xs transition-all flex items-center justify-center gap-1.5 whitespace-nowrap cursor-pointer bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white';
        }
    });
};

// ─── TAB SWITCHER ───────────────────────────────────────────
export const switchEstimatorTab = (tab) => {
    estimatorActiveTab = tab;
    renderMaterialEstimatorModalContent();
};

// ─── PRESET SELECTORS (ZERO-FLICKER INTERACTION) ─────────────
export const setEstimatorPaintCoats = (coats) => {
    paintState.coats = coats;
    if (typeof document !== 'undefined') {
        document.querySelectorAll('.paint-coat-btn').forEach(btn => {
        const c = parseInt(btn.getAttribute('data-coats'), 10);
        if (c === coats) {
            btn.className = 'paint-coat-btn py-2 rounded-xl text-xs font-extrabold transition-all border cursor-pointer border-[var(--color-primary)] bg-[rgba(var(--color-primary-rgb),0.1)] text-[var(--color-primary)] shadow-2xs';
        } else {
            btn.className = 'paint-coat-btn py-2 rounded-xl text-xs font-extrabold transition-all border cursor-pointer border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400';
        }
        });
    }
    updateEstimatorResultOnly('paint');
};

export const setEstimatorTileWaste = (waste) => {
    tileState.wastePercent = waste;
    if (typeof document !== 'undefined') {
        document.querySelectorAll('.tile-waste-btn').forEach(btn => {
        const w = parseInt(btn.getAttribute('data-waste'), 10);
        if (w === waste) {
            btn.className = 'tile-waste-btn py-2 rounded-xl text-xs font-extrabold transition-all border cursor-pointer border-[var(--color-primary)] text-[var(--color-primary)] font-black shadow-2xs';
            btn.style.cssText = 'background: rgba(var(--color-primary-rgb), 0.08); border-color: var(--color-primary);';
        } else {
            btn.className = 'tile-waste-btn py-2 rounded-xl text-xs font-extrabold transition-all border cursor-pointer border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400';
            btn.style.cssText = '';
        }
        });
    }
    updateEstimatorResultOnly('tile');
};

export const setEstimatorRoofAngle = (angle) => {
    roofState.slopeAngle = angle;
    if (typeof document !== 'undefined') {
        const inp = el('roof-input-slopeAngle');
        if (inp) inp.value = angle;
        document.querySelectorAll('.roof-angle-btn').forEach(btn => {
        const a = parseFloat(btn.getAttribute('data-angle'));
        if (a === angle) {
            btn.className = 'roof-angle-btn py-1 rounded-lg text-[10px] font-black border transition-all cursor-pointer bg-sky-50 dark:bg-sky-950/60 border-sky-400 text-sky-700 dark:text-sky-300 shadow-2xs';
        } else {
            btn.className = 'roof-angle-btn py-1 rounded-lg text-[10px] font-black border transition-all cursor-pointer bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-500';
        }
        });
    }
    updateEstimatorResultOnly('roof');
};

// ─── FIELD UPDATERS (ZERO-FLICKER PARTIAL UPDATES) ───────────
export const setEstimatorPaintMode = (mode) => {
    paintState.mode = mode;
    renderMaterialEstimatorModalContent();
};

export const updateEstimatorPaintField = (field, val) => {
    if (field === 'coats') {
        setEstimatorPaintCoats(parseInt(val, 10) || 2);
        return;
    }
    paintState[field] = val;
    updateEstimatorResultOnly('paint');
};

export const updateEstimatorTileField = (field, val) => {
    if (field === 'wastePercent') {
        setEstimatorTileWaste(parseInt(val, 10) || 10);
        return;
    }
    tileState[field] = val;
    updateEstimatorResultOnly('tile');
};

export const updateEstimatorBrickField = (field, val) => {
    brickState[field] = val;
    updateEstimatorResultOnly('brick');
};

export const setEstimatorRoofMode = (mode) => {
    roofState.mode = mode;
    renderMaterialEstimatorModalContent();
};

export const setEstimatorRoofType = (type) => {
    roofState.roofType = type;
    const spec = ROOF_SPECS[type] || ROOF_SPECS.spandek;
    // Sesuaikan sheetLength jika panjang saat ini tidak relevan untuk spesifikasi tipe baru
    const hasLength = spec.standardLengths.some(l => l.val === parseFloat(roofState.sheetLength));
    if (!hasLength) {
        roofState.sheetLength = spec.defaultLength;
    }
    renderMaterialEstimatorModalContent();
};

export const updateEstimatorRoofField = (field, val) => {
    if (field === 'slopeAngle') {
        roofState.slopeAngle = val;
        // Sinkronkan styling preset button jika nilai cocok
        const parsedAngle = parseFloat(val);
        if (typeof document !== 'undefined') {
            document.querySelectorAll('.roof-angle-btn').forEach(btn => {
            const a = parseFloat(btn.getAttribute('data-angle'));
            if (a === parsedAngle) {
                btn.className = 'roof-angle-btn py-1 rounded-lg text-[10px] font-black border transition-all cursor-pointer bg-sky-50 dark:bg-sky-950/60 border-sky-400 text-sky-700 dark:text-sky-300 shadow-2xs';
            } else {
                btn.className = 'roof-angle-btn py-1 rounded-lg text-[10px] font-black border transition-all cursor-pointer bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-500';
            }
            });
        }
        updateEstimatorResultOnly('roof');
        return;
    }
    roofState[field] = val;
    updateEstimatorResultOnly('roof');
};

// ─── COPY & WHATSAPP ACTION HANDLERS ─────────────────────────
export const copyEstimatorSummary = (type) => {
    let text = '';
    const storeName = appData.store?.name || 'TOKO PUTRI';

    if (type === 'paint') {
        const res = calculatePaintNeeds();
        text = `*ESTIMASI KEBUTUHAN CAT TEMBOK — ${storeName}*\n` +
               `--------------------------------------\n` +
               `• Luas Dinding: ${res.totalWallArea} m²\n` +
               `• Luas Plafon: ${res.ceilingArea} m²\n` +
               `• Total Luas Bidang: ${res.grandArea} m²\n` +
               `• Lapisan Pengecatan: ${res.coats}x Lapis\n` +
               `--------------------------------------\n` +
               `*REKOMENDASI KEBUTUHAN:*\n` +
               `✓ Total Cat Topcoat: ${res.totalVolumeLiters} Liter/Kg\n` +
               `  → ${res.pails > 0 ? `${res.pails} Pail (20L) ` : ''}${res.gallons > 0 ? `+ ${res.gallons} Galon (2.5L)` : ''}\n` +
               (res.sealerGallons > 0 ? `✓ Cat Dasar Alkali Sealer: ${res.sealerGallons} Galon (${res.sealerVolume} Liter)\n` : '') +
               `--------------------------------------\n` +
               `Dihitung otomatis via Sistem Toko Putri`;
    } else if (type === 'tile') {
        const res = calculateTileNeeds();
        text = `*ESTIMASI KEBUTUHAN KERAMIK / GRANIT — ${storeName}*\n` +
               `--------------------------------------\n` +
               `• Ukuran Keramik: ${res.spec.name}\n` +
               `• Luas Bersih: ${res.rawArea} m²\n` +
               `• Cadangan Potongan: ${res.wastePercent}%\n` +
               `• Total Luas Dihitung: ${res.totalAreaWithWaste} m²\n` +
               `--------------------------------------\n` +
               `*REKOMENDASI KEBUTUHAN:*\n` +
               `✓ Keramik Wajib Dibeli: ${res.totalBoxes} Dus\n` +
               (res.adhesiveBags > 0 ? `✓ Semen Perekat Keramik: ${res.adhesiveBags} Sak (40kg)\n` : '') +
               (res.groutBags > 0 ? `✓ Semen Pengisi Nat: ${res.groutBags} Bungkus (1kg)\n` : '') +
               `--------------------------------------\n` +
               `Dihitung otomatis via Sistem Toko Putri`;
    } else if (type === 'brick') {
        const res = calculateBrickNeeds();
        text = `*ESTIMASI PASANGAN DINDING — ${storeName}*\n` +
               `--------------------------------------\n` +
               `• Material Dinding: ${brickState.brickType.startsWith('hebel') ? 'Bata Ringan Hebel' : 'Bata Merah Bakar'}\n` +
               `• Luas Dinding Efektif: ${res.netArea} m²\n` +
               `--------------------------------------\n` +
               `*REKOMENDASI KEBUTUHAN:*\n` +
               `✓ Kebutuhan Bata: ${res.brickPcs} Pcs ${res.brickCubic > 0 ? `(~${res.brickCubic} m³)` : ''}\n` +
               (res.mortarBags > 0 ? `✓ Semen Mortar Thinbed: ${res.mortarBags} Sak (40kg)\n` : '') +
               (res.cementBags > 0 ? `✓ Semen Plester/Pasang: ${res.cementBags} Sak (50kg)\n` : '') +
               (res.sandCubic > 0 ? `✓ Pasir Pasang: ~${res.sandCubic} m³\n` : '') +
               `--------------------------------------\n` +
               `Dihitung otomatis via Sistem Toko Putri`;
    } else if (type === 'roof') {
        const res = calculateRoofNeeds();
        text = `*ESTIMASI KEBUTUHAN ATAP & PENUTUP — ${storeName}*\n` +
               `--------------------------------------\n` +
               `• Jenis Atap: ${res.spec.name}\n` +
               `• Ukuran Lembar: ${res.sheetLength} Meter (Lebar Efektif: ${res.spec.effectiveWidth * 100} cm)\n` +
               `• Model Bidang: ${res.mode === 'gable' ? 'Pelana (2 Sisi Miring)' : res.mode === 'monopitch' ? 'Kanopi (1 Sisi Miring)' : 'Hitungan Luas Langsung'}\n` +
               `• Total Luas Bidang Atap: ${res.totalRoofArea} m²\n` +
               (res.slopeLength > 0 ? `• Panjang Lereng Miring: ${res.slopeLength} Meter\n` : '') +
               `--------------------------------------\n` +
               `*REKOMENDASI KEBUTUHAN UTAMA:*\n` +
               `✓ Total Kebutuhan Atap: *${res.totalSheets} Lembar*\n` +
               (res.sheetsAcross > 0 ? `  → Susunan: ${res.sheetsAcross} Kolom Jajar × ${res.sheetsPerSlope} Susun Sambung ${res.mode === 'gable' ? '(2 Sisi)' : ''}\n` : '') +
               (res.ridgePieces > 0 ? `✓ Nok Bubungan Puncak: ${res.ridgePieces} Batang (Bentang ${res.ridgeLength}m)\n` : '') +
               (res.fastenerPacks > 0 ? `✓ ${res.spec.fastenerName}: ${res.fastenerPacks} ${res.spec.fastenerPackaging} (~${res.fastenerPcs} Pcs)\n` : '') +
               `--------------------------------------\n` +
               `Dihitung otomatis via Sistem Toko Putri`;
    }

    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(() => {
            showToast('Rincian estimasi berhasil disalin ke clipboard!', 'success');
        }).catch(() => {
            showToast('Gagal menyalin rincian.', 'warning');
        });
    } else {
        showToast('Clipboard browser tidak didukung.', 'warning');
    }
};

export const shareEstimatorToWA = (type) => {
    let text = '';
    const storeName = appData.store?.name || 'Toko Putri';
    const waNumber = (appData.store?.wa || '').replace(/[^0-9]/g, '');

    if (type === 'paint') {
        const res = calculatePaintNeeds();
        text = `Halo ${storeName}, saya ingin konsultasi kebutuhan cat dinding:\n\n` +
               `• Luas Bidang Cat: ${res.grandArea} m² (${res.coats}x lapis)\n` +
               `• Estimasi Kebutuhan: ${res.pails > 0 ? `${res.pails} Pail ` : ''}${res.gallons > 0 ? `${res.gallons} Galon` : ''} (${res.totalVolumeLiters} Liter)\n` +
               (res.sealerGallons > 0 ? `• Alkali Sealer: ${res.sealerGallons} Galon\n` : '') +
               `\nMohon info ketersediaan stok & rekomendasi merk cat terbaik. Terima kasih!`;
    } else if (type === 'tile') {
        const res = calculateTileNeeds();
        text = `Halo ${storeName}, saya ingin konsultasi kebutuhan keramik:\n\n` +
               `• Ukuran Keramik: ${res.spec.name}\n` +
               `• Luas Bersih + Waste: ${res.totalAreaWithWaste} m²\n` +
               `• Estimasi Kebutuhan: ${res.totalBoxes} Dus\n` +
               (res.adhesiveBags > 0 ? `• Semen Perekat: ${res.adhesiveBags} Sak\n` : '') +
               `\nMohon info pilihan motif & harga terbaik. Terima kasih!`;
    } else if (type === 'brick') {
        const res = calculateBrickNeeds();
        text = `Halo ${storeName}, saya ingin konsultasi pasangan dinding:\n\n` +
               `• Jenis: ${brickState.brickType.startsWith('hebel') ? 'Bata Ringan Hebel' : 'Bata Merah'}\n` +
               `• Luas Bersih: ${res.netArea} m²\n` +
               `• Kebutuhan: ${res.brickPcs} Pcs ${res.brickCubic > 0 ? `(${res.brickCubic} m³)` : ''}\n` +
               (res.mortarBags > 0 ? `• Mortar: ${res.mortarBags} Sak\n` : '') +
               `\nMohon info pengiriman armada ke lokasi proyek. Terima kasih!`;
    } else if (type === 'roof') {
        const res = calculateRoofNeeds();
        text = `Halo ${storeName}, saya ingin konsultasi kebutuhan atap:\n\n` +
               `• Jenis Atap: ${res.spec.name} (${res.sheetLength}m)\n` +
               `• Luas Bidang Atap: ${res.totalRoofArea} m²\n` +
               `• Estimasi Kebutuhan: ${res.totalSheets} Lembar\n` +
               (res.ridgePieces > 0 ? `• Nok Bubungan: ${res.ridgePieces} Batang\n` : '') +
               (res.fastenerPacks > 0 ? `• Pengencang: ${res.fastenerPacks} ${res.spec.fastenerPackaging} (${res.fastenerPcs} Pcs)\n` : '') +
               `\nMohon info ketersediaan stok & rekomendasi pengiriman ke lokasi. Terima kasih!`;
    }

    const url = `https://wa.me/${waNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
};

export const addEstimatorToPOSCart = (name, qty, unit) => {
    if (typeof window.posAddToCartQty === 'function') {
        // Cek apakah ada produk generik atau buat item instan
        showToast(`Estimasi ${name} (${qty} ${unit}) siap dimasukkan ke kasir.`);
        closeMaterialEstimatorModal();
    }
};

export const addStoreProductFromEstimator = (productId) => {
    if (estimatorSource === 'pos') {
        if (typeof window.posAddToCart === 'function') {
            window.posAddToCart(productId);
            showToast('Produk ditambahkan ke kasir POS!', 'success');
        }
    } else {
        if (typeof window.addToCart === 'function') {
            window.addToCart(productId);
            showToast('Produk ditambahkan ke keranjang belanja!', 'success');
        }
    }
};

// ─── BUKA & TUTUP MODAL ESTIMATOR ───────────────────────────
export const openMaterialEstimatorModal = (source = 'storefront') => {
    estimatorSource = source;

    if (typeof window.pushModalHistory === 'function') {
        window.pushModalHistory('materialEstimator');
    }

    const modal = el('modal-material-estimator');
    if (!modal) return;

    modal.classList.remove('hidden');
    setTimeout(() => {
        modal.classList.remove('opacity-0');
        const box = el('modal-material-estimator-content');
        if (box) {
            box.classList.remove('translate-y-full', 'sm:translate-y-10');
            box.classList.add('translate-y-0');
        }
    }, 10);

    renderMaterialEstimatorModalContent();
    if (typeof window.triggerHaptic === 'function') window.triggerHaptic('light');
};

export const closeMaterialEstimatorModal = (skipHistory = false) => {
    const modal = el('modal-material-estimator');
    const box = el('modal-material-estimator-content');

    const executeClose = () => {
        if (box) {
            box.classList.add('translate-y-full', 'sm:translate-y-10');
            box.classList.remove('translate-y-0');
        }
        if (modal) modal.classList.add('opacity-0');
        setTimeout(() => {
            if (modal) modal.classList.add('hidden');
        }, 280);
    };

    if (!skipHistory && typeof window.requestCloseModal === 'function') {
        window.requestCloseModal('materialEstimator', false, executeClose);
    } else {
        executeClose();
    }
};

// ─── WINDOW EXPOSURES ───────────────────────────────────────
if (typeof window !== 'undefined') {
    window.openMaterialEstimatorModal     = openMaterialEstimatorModal;
    window.closeMaterialEstimatorModal    = closeMaterialEstimatorModal;
    window.switchEstimatorTab             = switchEstimatorTab;
    window.setEstimatorPaintMode          = setEstimatorPaintMode;
    window.updateEstimatorPaintField      = updateEstimatorPaintField;
    window.updateEstimatorTileField       = updateEstimatorTileField;
    window.updateEstimatorBrickField      = updateEstimatorBrickField;
    window.setEstimatorRoofMode           = setEstimatorRoofMode;
    window.setEstimatorRoofType           = setEstimatorRoofType;
    window.updateEstimatorRoofField       = updateEstimatorRoofField;
    window.copyEstimatorSummary           = copyEstimatorSummary;
    window.shareEstimatorToWA             = shareEstimatorToWA;
    window.addEstimatorToPOSCart          = addEstimatorToPOSCart;
    window.addStoreProductFromEstimator   = addStoreProductFromEstimator;
    window.updateEstimatorResultOnly      = updateEstimatorResultOnly;
    window.setEstimatorPaintCoats         = setEstimatorPaintCoats;
    window.setEstimatorTileWaste          = setEstimatorTileWaste;
    window.setEstimatorRoofAngle          = setEstimatorRoofAngle;
}

