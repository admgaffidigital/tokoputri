/**
 * ============================================================
 * ENGINE GENERATOR BARCODE CODE 128 (NATIVE SVG & HIGH-RES VECTOR)
 * Toko Putri - Zero External Dependencies, Offline-First,
 * Sesuai Standar ISO/IEC 15417 Code 128 Subtipe B
 * ============================================================
 */

// Pola lebar garis (bar) dan spasi (space) untuk tiap nilai 0 s.d. 106
// Tiap digit mewakili lebar modul (1 s.d. 4)
const CODE128_PATTERNS = [
    "212222", "222122", "222221", "121223", "121322", "131222", "122213", "122312", "132212", "221213", // 0-9
    "221312", "231212", "112232", "122132", "122231", "113222", "123122", "123221", "223211", "221132", // 10-19
    "221231", "213212", "223112", "312131", "311222", "321122", "321221", "312212", "322112", "322211", // 20-29
    "212123", "212321", "232121", "111323", "131123", "131321", "112313", "132113", "132311", "211313", // 30-39
    "231113", "231311", "112133", "112331", "132131", "113123", "113321", "133121", "313121", "211331", // 40-49
    "231131", "213113", "213311", "213131", "311123", "311321", "331121", "312113", "312311", "332111", // 50-59
    "314111", "221411", "431111", "111224", "111422", "121124", "121421", "141122", "141221", "112214", // 60-69
    "112412", "122114", "122411", "142112", "142211", "241211", "221114", "413111", "241112", "134111", // 70-79
    "111242", "121142", "121241", "114212", "124112", "124211", "411212", "421112", "421211", "212141", // 80-89
    "214121", "412121", "111143", "111341", "131141", "114113", "114311", "411113", "411311", "113141", // 90-99
    "114131", "311141", "411131", "211412", "211214", "211232", "2331112" // 100-106 (104: Start B, 105: Start C, 106: Stop)
];

const START_B = 104;
const STOP = 106;

/**
 * Encode string alfanumerik menjadi nilai-nilai Code 128 Subtipe B
 * @param {string} text Teks yang akan diubah menjadi barcode
 * @returns {Object|null}
 */
export const encodeCode128B = (text) => {
    if (!text || typeof text !== 'string') return null;
    const clean = text.trim();
    if (!clean) return null;

    const values = [START_B];
    let checksum = START_B;

    let charIndex = 1;
    for (let i = 0; i < clean.length; i++) {
        const code = clean.charCodeAt(i);
        // ASCII 32 s.d. 126
        if (code < 32 || code > 126) continue;
        const val = code - 32;
        values.push(val);
        checksum += val * charIndex;
        charIndex++;
    }

    if (values.length <= 1) return null;

    const checkValue = checksum % 103;
    values.push(checkValue);
    values.push(STOP);

    // Konversi nilai menjadi deretan bit modul (1 = garis, 0 = spasi)
    let modules = '';
    values.forEach(val => {
        const pattern = CODE128_PATTERNS[val];
        if (!pattern) return;
        let isBar = true;
        for (let ch of pattern) {
            const width = parseInt(ch, 10);
            modules += (isBar ? '1' : '0').repeat(width);
            isBar = !isBar;
        }
    });

    return {
        text: clean,
        values,
        modules,
        moduleCount: modules.length
    };
};

/**
 * Generate string SVG murni berkualitas tinggi (Vektor tajam anti-pecah)
 * Cocok untuk printer thermal label (203/300 DPI) maupun printer A4
 * @param {string} text Teks SKU atau Barcode
 * @param {Object} options Opsi rendering
 * @returns {string} String elemen <svg>...</svg>
 */
export const generateCode128Svg = (text, options = {}) => {
    const enc = encodeCode128B(text);
    if (!enc) {
        return `<div class="p-2 text-center text-xs text-rose-500 font-bold bg-rose-50 border border-rose-200 rounded-lg">Kode barcode tidak valid</div>`;
    }

    const height = options.height || 42;
    const quietZone = options.quietZone !== undefined ? options.quietZone : 8;
    const moduleWidth = options.moduleWidth || 1.4;
    const totalModules = enc.moduleCount;
    const totalWidth = (totalModules * moduleWidth) + (quietZone * 2);

    // Kumpulkan garis batang hitam secara efisien
    let rects = '';
    let inBar = false;
    let barStart = 0;

    for (let i = 0; i < enc.modules.length; i++) {
        const isOne = enc.modules[i] === '1';
        if (isOne && !inBar) {
            inBar = true;
            barStart = i;
        } else if (!isOne && inBar) {
            inBar = false;
            const barWidth = (i - barStart) * moduleWidth;
            const x = quietZone + (barStart * moduleWidth);
            rects += `<rect x="${x.toFixed(2)}" y="0" width="${barWidth.toFixed(2)}" height="${height}" fill="#000" />`;
        }
    }
    if (inBar) {
        const barWidth = (enc.modules.length - barStart) * moduleWidth;
        const x = quietZone + (barStart * moduleWidth);
        rects += `<rect x="${x.toFixed(2)}" y="0" width="${barWidth.toFixed(2)}" height="${height}" fill="#000" />`;
    }

    const showText = options.showText !== false;
    const displayText = options.customText || enc.text;
    const fontSize = options.fontSize || 10;
    const textHeight = showText ? fontSize + 4 : 0;
    const svgHeight = height + textHeight;

    let textElement = '';
    if (showText) {
        const textY = height + fontSize + 1;
        textElement = `<text x="${(totalWidth / 2).toFixed(2)}" y="${textY.toFixed(2)}" text-anchor="middle" font-family="'Courier New', Courier, monospace" font-size="${fontSize}" font-weight="700" fill="#000" letter-spacing="1">${displayText}</text>`;
    }

    const cssClass = options.className || 'w-full h-auto';
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${totalWidth.toFixed(2)} ${svgHeight.toFixed(2)}" class="${cssClass}" shape-rendering="crispEdges" style="display:block;margin:0 auto;max-width:100%;height:auto;">${rects}${textElement}</svg>`;
};

// Bind ke window object untuk akses global
if (typeof window !== 'undefined') {
    window.encodeCode128B = encodeCode128B;
    window.generateCode128Svg = generateCode128Svg;
}
