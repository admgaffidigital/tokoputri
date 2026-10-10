/**
 * ============================================================
 * MODUL KALKULATOR ESTIMATOR BAHAN BANGUNAN & TEKNIK INTERAKTIF
 * (Interactive Material Estimator Tool — Toko Putri)
 * 
 * Perhitungan presisi kebutuhan material bangunan:
 * 1. Estimator Cat Dinding & Plafon (Topcoat, Pail, Galon, Alkali Sealer)
 * 2. Estimator Keramik & Granit (Luas m², Dus, Waste %, Perekat, Nat)
 * 3. Estimator Pasangan Dinding (Bata Ringan Hebel, Bata Merah, Semen Mortar)
 * 
 * Terintegrasi penuh dengan Storefront Catalog, Keranjang Konsumen,
 * POS Kasir (F9 / Quick Tool), dan Konsultasi WhatsApp Resmi.
 * ============================================================
 */

import { appData } from '../../core/state.js';
import { el, esc, fCur, showToast } from '../../core/utils.js';

let estimatorActiveTab = 'paint'; // 'paint' | 'tile' | 'brick'
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

// ─── DEFINISI KERAMIK COVERAGE PER DUS ───────────────────────
const TILE_SPECS = {
    '30x30': { name: '30 x 30 cm', coveragePerBox: 1.00, piecesPerBox: 11 },
    '40x40': { name: '40 x 40 cm', coveragePerBox: 0.96, piecesPerBox: 6 },
    '50x50': { name: '50 x 50 cm', coveragePerBox: 1.00, piecesPerBox: 4 },
    '60x60': { name: '60 x 60 cm', coveragePerBox: 1.44, piecesPerBox: 4 },
    '80x80': { name: '80 x 80 cm', coveragePerBox: 1.92, piecesPerBox: 3 }
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
    return [];
};

// ─── RENDER MODAL MATERIAL ESTIMATOR ─────────────────────────
export const renderMaterialEstimatorModalContent = () => {
    const modalBody = el('modal-material-estimator-body');
    if (!modalBody) return;

    let contentHtml = '';

    if (estimatorActiveTab === 'paint') {
        const res = calculatePaintNeeds();
        const related = findRelatedStoreProducts('paint');

        contentHtml = `
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-5">
            <!-- Kolom Kiri: Formulir Input Dimensi (5 Kolom Desktop) -->
            <div class="lg:col-span-5 space-y-4">
                <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80 space-y-3.5">
                    <div class="flex items-center justify-between pb-2 border-b border-slate-200/60 dark:border-slate-700/60">
                        <span class="text-xs font-black uppercase tracking-wider text-slate-700 dark:text-slate-300 flex items-center gap-2">
                            <i class="fa-solid fa-paintbrush text-[var(--color-primary)]"></i> Parameter Dinding
                        </span>
                        <div class="inline-flex p-0.5 rounded-lg bg-slate-200/70 dark:bg-slate-700 text-[10px] font-bold">
                            <button type="button" onclick="window.setEstimatorPaintMode('room')" class="px-2 py-1 rounded-md transition-all cursor-pointer ${paintState.mode === 'room' ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-2xs' : 'text-slate-500'}">Ruangan</button>
                            <button type="button" onclick="window.setEstimatorPaintMode('area')" class="px-2 py-1 rounded-md transition-all cursor-pointer ${paintState.mode === 'area' ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-2xs' : 'text-slate-500'}">Luas M²</button>
                        </div>
                    </div>

                    ${paintState.mode === 'room' ? `
                    <div class="grid grid-cols-2 gap-2.5">
                        <div>
                            <label class="text-[10px] font-bold text-slate-500 uppercase">Panjang Ruang (m)</label>
                            <input type="number" step="0.5" min="1" max="100" value="${paintState.length}" oninput="window.updateEstimatorPaintField('length', this.value)"
                                class="w-full mt-1 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2 text-xs font-bold bg-white dark:bg-slate-800 text-slate-800 dark:text-white focus:outline-none focus:border-[var(--color-primary)]">
                        </div>
                        <div>
                            <label class="text-[10px] font-bold text-slate-500 uppercase">Lebar Ruang (m)</label>
                            <input type="number" step="0.5" min="1" max="100" value="${paintState.width}" oninput="window.updateEstimatorPaintField('width', this.value)"
                                class="w-full mt-1 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2 text-xs font-bold bg-white dark:bg-slate-800 text-slate-800 dark:text-white focus:outline-none focus:border-[var(--color-primary)]">
                        </div>
                    </div>
                    <div class="grid grid-cols-2 gap-2.5">
                        <div>
                            <label class="text-[10px] font-bold text-slate-500 uppercase">Tinggi Dinding (m)</label>
                            <input type="number" step="0.25" min="1" max="20" value="${paintState.height}" oninput="window.updateEstimatorPaintField('height', this.value)"
                                class="w-full mt-1 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2 text-xs font-bold bg-white dark:bg-slate-800 text-slate-800 dark:text-white focus:outline-none focus:border-[var(--color-primary)]">
                        </div>
                        <div>
                            <label class="text-[10px] font-bold text-slate-500 uppercase" title="Area pintu dan jendela yang tidak dicat">Pintu/Jendela (m²)</label>
                            <input type="number" step="0.5" min="0" max="50" value="${paintState.openings}" oninput="window.updateEstimatorPaintField('openings', this.value)"
                                class="w-full mt-1 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2 text-xs font-bold bg-white dark:bg-slate-800 text-slate-800 dark:text-white focus:outline-none focus:border-[var(--color-primary)]">
                        </div>
                    </div>
                    <div class="flex items-center justify-between pt-1">
                        <span class="text-xs font-bold text-slate-700 dark:text-slate-300">Cat Plafon Sekalian?</span>
                        <input type="checkbox" ${paintState.ceiling ? 'checked' : ''} onchange="window.updateEstimatorPaintField('ceiling', this.checked)"
                            class="w-4 h-4 rounded text-[var(--color-primary)] accent-[var(--color-primary)] cursor-pointer">
                    </div>
                    ` : `
                    <div>
                        <label class="text-[10px] font-bold text-slate-500 uppercase">Total Luas Bidang Cat (m²)</label>
                        <input type="number" step="1" min="1" max="10000" value="${paintState.directArea}" oninput="window.updateEstimatorPaintField('directArea', this.value)"
                            class="w-full mt-1 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2.5 text-xs font-bold bg-white dark:bg-slate-800 text-slate-800 dark:text-white focus:outline-none focus:border-[var(--color-primary)]">
                    </div>
                    `}

                    <!-- Layer Pengecatan -->
                    <div>
                        <label class="text-[10px] font-bold text-slate-500 uppercase mb-1.5 block">Jumlah Lapisan Pengecatan</label>
                        <div class="grid grid-cols-3 gap-2">
                            <button type="button" onclick="window.updateEstimatorPaintField('coats', 1)" class="py-2 rounded-xl text-xs font-extrabold transition-all border cursor-pointer ${paintState.coats === 1 ? 'border-[var(--color-primary)] bg-[rgba(var(--color-primary-rgb),0.1)] text-[var(--color-primary)] shadow-2xs' : 'border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400'}">1x Lapis</button>
                            <button type="button" onclick="window.updateEstimatorPaintField('coats', 2)" class="py-2 rounded-xl text-xs font-extrabold transition-all border cursor-pointer ${paintState.coats === 2 ? 'border-[var(--color-primary)] bg-[rgba(var(--color-primary-rgb),0.1)] text-[var(--color-primary)] shadow-2xs' : 'border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400'}">2x Rekomendasi</button>
                            <button type="button" onclick="window.updateEstimatorPaintField('coats', 3)" class="py-2 rounded-xl text-xs font-extrabold transition-all border cursor-pointer ${paintState.coats === 3 ? 'border-[var(--color-primary)] bg-[rgba(var(--color-primary-rgb),0.1)] text-[var(--color-primary)] shadow-2xs' : 'border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400'}">3x Warna Gelap</button>
                        </div>
                    </div>

                    <div class="flex items-center justify-between pt-1">
                        <span class="text-xs font-bold text-slate-700 dark:text-slate-300">Termasuk Cat Dasar (Alkali)?</span>
                        <input type="checkbox" ${paintState.includeSealer ? 'checked' : ''} onchange="window.updateEstimatorPaintField('includeSealer', this.checked)"
                            class="w-4 h-4 rounded text-[var(--color-primary)] accent-[var(--color-primary)] cursor-pointer">
                    </div>
                </div>
            </div>

            <!-- Kolom Kanan: Hasil Kalkulasi & Rekomendasi (7 Kolom Desktop) -->
            <div class="lg:col-span-7 space-y-4">
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
                ` : ''}
            </div>
        </div>`;
    } else if (estimatorActiveTab === 'tile') {
        const res = calculateTileNeeds();
        const related = findRelatedStoreProducts('tile');

        contentHtml = `
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-5">
            <!-- Kolom Kiri: Input Dimensi Lantai -->
            <div class="lg:col-span-5 space-y-4">
                <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80 space-y-3.5">
                    <span class="text-xs font-black uppercase tracking-wider text-slate-700 dark:text-slate-300 flex items-center gap-2 pb-2 border-b border-slate-200/60 dark:border-slate-700/60">
                        <i class="fa-solid fa-table-cells text-indigo-500"></i> Parameter Keramik / Granit
                    </span>

                    <div class="grid grid-cols-2 gap-2.5">
                        <div>
                            <label class="text-[10px] font-bold text-slate-500 uppercase">Panjang Lantai (m)</label>
                            <input type="number" step="0.5" min="1" max="100" value="${tileState.length}" oninput="window.updateEstimatorTileField('length', this.value)"
                                class="w-full mt-1 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2 text-xs font-bold bg-white dark:bg-slate-800 text-slate-800 dark:text-white focus:outline-none focus:border-[var(--color-primary)]">
                        </div>
                        <div>
                            <label class="text-[10px] font-bold text-slate-500 uppercase">Lebar Lantai (m)</label>
                            <input type="number" step="0.5" min="1" max="100" value="${tileState.width}" oninput="window.updateEstimatorTileField('width', this.value)"
                                class="w-full mt-1 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2 text-xs font-bold bg-white dark:bg-slate-800 text-slate-800 dark:text-white focus:outline-none focus:border-[var(--color-primary)]">
                        </div>
                    </div>

                    <div>
                        <label class="text-[10px] font-bold text-slate-500 uppercase mb-1.5 block">Ukuran Keramik / Granit</label>
                        <select onchange="window.updateEstimatorTileField('tileSize', this.value)"
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
                        <div class="grid grid-cols-3 gap-2">
                            <button type="button" onclick="window.updateEstimatorTileField('wastePercent', 5)" class="py-2 rounded-xl text-xs font-extrabold transition-all border cursor-pointer ${tileState.wastePercent === 5 ? 'border-[var(--color-primary)] text-[var(--color-primary)] font-black shadow-2xs' : 'border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400'}" style="${tileState.wastePercent === 5 ? 'background: rgba(var(--color-primary-rgb), 0.08); border-color: var(--color-primary);' : ''}">5% Minimal</button>
                            <button type="button" onclick="window.updateEstimatorTileField('wastePercent', 10)" class="py-2 rounded-xl text-xs font-extrabold transition-all border cursor-pointer ${tileState.wastePercent === 10 ? 'border-[var(--color-primary)] text-[var(--color-primary)] font-black shadow-2xs' : 'border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400'}" style="${tileState.wastePercent === 10 ? 'background: rgba(var(--color-primary-rgb), 0.08); border-color: var(--color-primary);' : ''}">10% Standar</button>
                            <button type="button" onclick="window.updateEstimatorTileField('wastePercent', 15)" class="py-2 rounded-xl text-xs font-extrabold transition-all border cursor-pointer ${tileState.wastePercent === 15 ? 'border-[var(--color-primary)] text-[var(--color-primary)] font-black shadow-2xs' : 'border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400'}" style="${tileState.wastePercent === 15 ? 'background: rgba(var(--color-primary-rgb), 0.08); border-color: var(--color-primary);' : ''}">15% Diagonal</button>
                        </div>
                    </div>

                    <div class="space-y-2 pt-1 border-t border-slate-200/60 dark:border-slate-700/60">
                        <div class="flex items-center justify-between">
                            <span class="text-xs font-bold text-slate-700 dark:text-slate-300">Semen Perekat Keramik (Adhesive)?</span>
                            <input type="checkbox" ${tileState.includeAdhesive ? 'checked' : ''} onchange="window.updateEstimatorTileField('includeAdhesive', this.checked)"
                                class="w-4 h-4 rounded accent-[var(--color-primary)] cursor-pointer">
                        </div>
                        <div class="flex items-center justify-between">
                            <span class="text-xs font-bold text-slate-700 dark:text-slate-300">Semen Pengisi Nat (Tile Grout)?</span>
                            <input type="checkbox" ${tileState.includeGrout ? 'checked' : ''} onchange="window.updateEstimatorTileField('includeGrout', this.checked)"
                                class="w-4 h-4 rounded accent-[var(--color-primary)] cursor-pointer">
                        </div>
                    </div>
                </div>
            </div>

            <!-- Kolom Kanan: Hasil Kalkulasi Keramik -->
            <div class="lg:col-span-7 space-y-4">
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
                ` : ''}
            </div>
        </div>`;
    } else if (estimatorActiveTab === 'brick') {
        const res = calculateBrickNeeds();
        const related = findRelatedStoreProducts('brick');

        contentHtml = `
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-5">
            <!-- Kolom Kiri: Input Dimensi Tembok -->
            <div class="lg:col-span-5 space-y-4">
                <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80 space-y-3.5">
                    <span class="text-xs font-black uppercase tracking-wider text-slate-700 dark:text-slate-300 flex items-center gap-2 pb-2 border-b border-slate-200/60 dark:border-slate-700/60">
                        <i class="fa-solid fa-cubes-stacked text-amber-600"></i> Parameter Pasangan Dinding
                    </span>

                    <div class="grid grid-cols-2 gap-2.5">
                        <div>
                            <label class="text-[10px] font-bold text-slate-500 uppercase">Panjang Dinding (m)</label>
                            <input type="number" step="0.5" min="1" max="200" value="${brickState.length}" oninput="window.updateEstimatorBrickField('length', this.value)"
                                class="w-full mt-1 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2 text-xs font-bold bg-white dark:bg-slate-800 text-slate-800 dark:text-white focus:outline-none focus:border-[var(--color-primary)]">
                        </div>
                        <div>
                            <label class="text-[10px] font-bold text-slate-500 uppercase">Tinggi Dinding (m)</label>
                            <input type="number" step="0.25" min="1" max="20" value="${brickState.height}" oninput="window.updateEstimatorBrickField('height', this.value)"
                                class="w-full mt-1 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2 text-xs font-bold bg-white dark:bg-slate-800 text-slate-800 dark:text-white focus:outline-none focus:border-[var(--color-primary)]">
                        </div>
                    </div>

                    <div class="grid grid-cols-2 gap-2.5">
                        <div>
                            <label class="text-[10px] font-bold text-slate-500 uppercase">Jumlah Sisi Tembok</label>
                            <input type="number" min="1" max="20" value="${brickState.sides}" oninput="window.updateEstimatorBrickField('sides', this.value)"
                                class="w-full mt-1 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2 text-xs font-bold bg-white dark:bg-slate-800 text-slate-800 dark:text-white focus:outline-none focus:border-[var(--color-primary)]">
                        </div>
                        <div>
                            <label class="text-[10px] font-bold text-slate-500 uppercase">Bukaan Pintu/Jendela (m²)</label>
                            <input type="number" step="0.5" min="0" max="50" value="${brickState.openings}" oninput="window.updateEstimatorBrickField('openings', this.value)"
                                class="w-full mt-1 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2 text-xs font-bold bg-white dark:bg-slate-800 text-slate-800 dark:text-white focus:outline-none focus:border-[var(--color-primary)]">
                        </div>
                    </div>

                    <div>
                        <label class="text-[10px] font-bold text-slate-500 uppercase mb-1.5 block">Pilihan Material Dinding</label>
                        <select onchange="window.updateEstimatorBrickField('brickType', this.value)"
                            class="w-full border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2.5 text-xs font-bold bg-white dark:bg-slate-800 text-slate-800 dark:text-white focus:outline-none focus:border-[var(--color-primary)]">
                            <option value="hebel10" ${brickState.brickType === 'hebel10' ? 'selected' : ''}>Bata Ringan / Hebel Tebal 10 cm (60x20x10)</option>
                            <option value="hebel75" ${brickState.brickType === 'hebel75' ? 'selected' : ''}>Bata Ringan / Hebel Tebal 7.5 cm (60x20x7.5)</option>
                            <option value="redbrick" ${brickState.brickType === 'redbrick' ? 'selected' : ''}>Bata Merah Bakar Standar</option>
                        </select>
                    </div>
                </div>
            </div>

            <!-- Kolom Kanan: Hasil Kalkulasi Bata -->
            <div class="lg:col-span-7 space-y-4">
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
                ` : ''}
            </div>
        </div>`;
    }

    modalBody.innerHTML = contentHtml;
    updateEstimatorTabHeaderStyles();
};

const updateEstimatorTabHeaderStyles = () => {
    const tabs = ['paint', 'tile', 'brick'];
    tabs.forEach(t => {
        const btn = el(`estimator-tab-btn-${t}`);
        if (!btn) return;
        if (t === estimatorActiveTab) {
            btn.className = 'flex-1 py-2 sm:py-2.5 px-3 rounded-xl font-black text-xs transition-all shadow-xs flex items-center justify-center gap-1.5 whitespace-nowrap cursor-pointer primary-bg text-white';
        } else {
            btn.className = 'flex-1 py-2 sm:py-2.5 px-3 rounded-xl font-bold text-xs transition-all flex items-center justify-center gap-1.5 whitespace-nowrap cursor-pointer bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white';
        }
    });
};

// ─── TAB SWITCHER ───────────────────────────────────────────
export const switchEstimatorTab = (tab) => {
    estimatorActiveTab = tab;
    renderMaterialEstimatorModalContent();
};

// ─── FIELD UPDATERS ─────────────────────────────────────────
export const setEstimatorPaintMode = (mode) => {
    paintState.mode = mode;
    renderMaterialEstimatorModalContent();
};

export const updateEstimatorPaintField = (field, val) => {
    paintState[field] = val;
    renderMaterialEstimatorModalContent();
};

export const updateEstimatorTileField = (field, val) => {
    tileState[field] = val;
    renderMaterialEstimatorModalContent();
};

export const updateEstimatorBrickField = (field, val) => {
    brickState[field] = val;
    renderMaterialEstimatorModalContent();
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
    window.copyEstimatorSummary           = copyEstimatorSummary;
    window.shareEstimatorToWA             = shareEstimatorToWA;
    window.addEstimatorToPOSCart          = addEstimatorToPOSCart;
    window.addStoreProductFromEstimator   = addStoreProductFromEstimator;
}
