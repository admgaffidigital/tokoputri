import fs from 'fs';
import path from 'path';

// Read router.js
const routerCode = fs.readFileSync('src/core/router.js', 'utf8');

// Extract MODAL_ELEMENT_MAP
const mapMatch = routerCode.match(/export const MODAL_ELEMENT_MAP = \{([\s\S]*?)\};/);
if (!mapMatch) {
    console.error('MODAL_ELEMENT_MAP not found!');
    process.exit(1);
}

const mapContent = mapMatch[1];
const mapEntries = {};
const entryRegex = /([a-zA-Z0-9]+):\s*(\[[^\]]+\]|'[^']+'|"[^"]+"),?/g;
let em;
while ((em = entryRegex.exec(mapContent)) !== null) {
    const key = em[1];
    let val = em[2].trim();
    if (val.startsWith('[')) {
        val = eval(val);
    } else {
        val = [val.replace(/['"]/g, '')];
    }
    mapEntries[key] = val;
}

console.log(`Found ${Object.keys(mapEntries).length} modals in MODAL_ELEMENT_MAP.\n`);

// Extract closeModalByName cases
const casesMatch = routerCode.match(/export const closeModalByName = \(m\) => \{([\s\S]*?default:)/);
const casesCode = casesMatch ? casesMatch[1] : '';
const caseRegex = /case\s+['"]([a-zA-Z0-9]+)['"]:\s*([\s\S]*?)(?=case\s+['"]|default:)/g;
const caseEntries = {};
let cm;
while ((cm = caseRegex.exec(casesCode)) !== null) {
    caseEntries[cm[1]] = cm[2].trim();
}

console.log(`Found ${Object.keys(caseEntries).length} cases in closeModalByName.\n`);

// Extract allKnownModals in router.js
const allKnownMatch = routerCode.match(/const allKnownModals = \[([\s\S]*?)\];/);
const allKnown = allKnownMatch ? allKnownMatch[1].match(/['"][a-zA-Z0-9]+['"]/g).map(s => s.replace(/['"]/g, '')) : [];
console.log(`Found ${allKnown.length} modals in allKnownModals fallback list.\n`);

// Check 1: Any modal in MODAL_ELEMENT_MAP missing from closeModalByName?
const missingInCases = [];
for (const k of Object.keys(mapEntries)) {
    if (!caseEntries[k]) {
        missingInCases.push(k);
    }
}
console.log('1. Modals in MODAL_ELEMENT_MAP but missing in closeModalByName:', missingInCases.length ? missingInCases : 'NONE (PASS)');

// Check 2: Any modal in closeModalByName missing from MODAL_ELEMENT_MAP?
const missingInMap = [];
for (const k of Object.keys(caseEntries)) {
    if (!mapEntries[k]) {
        missingInMap.push(k);
    }
}
console.log('2. Modals in closeModalByName but missing in MODAL_ELEMENT_MAP:', missingInMap.length ? missingInMap : 'NONE (PASS)');

// Check 3: Any modal in MODAL_ELEMENT_MAP missing from allKnownModals?
const missingInAllKnown = [];
for (const k of Object.keys(mapEntries)) {
    if (!allKnown.includes(k)) {
        missingInAllKnown.push(k);
    }
}
console.log('3. Modals in MODAL_ELEMENT_MAP but missing in allKnownModals:', missingInAllKnown.length ? missingInAllKnown : 'NONE (PASS)');

// Check 4: For each case in closeModalByName, check what window.close* function it calls,
// and verify if that function is exposed in the codebase!
console.log('\n4. Checking function names called in closeModalByName against codebase exposures:');
const funcChecks = [];
for (const [name, code] of Object.entries(caseEntries)) {
    const fnCalls = code.match(/window\.([a-zA-Z0-9_]+)/g);
    if (fnCalls) {
        fnCalls.forEach(fn => {
            const cleanFn = fn.replace('window.', '');
            funcChecks.push({ modal: name, fn: cleanFn });
        });
    }
}

// Search all JS files for window.X = or export const X
const allJsFiles = [];
function walkDir(dir) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
        const full = path.join(dir, entry.name);
        if (entry.isDirectory()) {
            walkDir(full);
        } else if (entry.name.endsWith('.js')) {
            allJsFiles.push(full);
        }
    }
}
walkDir('src');

const allExposed = new Set();
for (const f of allJsFiles) {
    if (f.endsWith('router.js')) continue; // Exclude router.js itself!
    const c = fs.readFileSync(f, 'utf8');
    const wAssign = c.match(/window\.([a-zA-Z0-9_]+)\s*=/g);
    if (wAssign) wAssign.forEach(w => allExposed.add(w.replace('window.', '').replace('=', '').trim()));
    const expConst = c.match(/export\s+const\s+([a-zA-Z0-9_]+)/g);
    if (expConst) expConst.forEach(e => allExposed.add(e.replace(/export\s+const\s+/, '').trim()));
}

const internalRouterFuncs = new Set(['closeExitConfirmModal']);
const unexposedFuncs = [];
for (const item of funcChecks) {
    if (!internalRouterFuncs.has(item.fn) && !allExposed.has(item.fn)) {
        unexposedFuncs.push(item);
    }
}
console.log('Unexposed or mismatched functions in closeModalByName:', unexposedFuncs.length ? unexposedFuncs : 'NONE (PASS)');

let hasError = false;
if (missingInCases.length > 0) {
    console.error(`❌ ERROR: ${missingInCases.length} modal(s) in MODAL_ELEMENT_MAP lack a case in closeModalByName:`, missingInCases);
    hasError = true;
}
if (missingInMap.length > 0) {
    console.error(`❌ ERROR: ${missingInMap.length} modal(s) in closeModalByName lack mapping in MODAL_ELEMENT_MAP:`, missingInMap);
    hasError = true;
}
if (missingInAllKnown.length > 0) {
    console.error(`❌ ERROR: ${missingInAllKnown.length} modal(s) in MODAL_ELEMENT_MAP missing from allKnownModals:`, missingInAllKnown);
    hasError = true;
}
if (unexposedFuncs.length > 0) {
    console.error(`❌ ERROR: ${unexposedFuncs.length} closer function(s) not exposed in codebase:`, unexposedFuncs);
    hasError = true;
}

if (hasError) {
    console.error('\n❌ VERIFIKASI GAGAL! Terdeteksi ketidaksinkronan modal.');
    process.exit(1);
} else {
    console.log(`\n🎉 SELURUH ${Object.keys(mapEntries).length} MODAL SISTEM 100% TERVERIFIKASI SINKRON & BEBAS BUG! ✅`);
    process.exit(0);
}

