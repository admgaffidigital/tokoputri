import fs from 'fs';
import path from 'path';

console.log('🌟 Cleaning up hardcoded brutalist markup across HTML and JavaScript...');

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        const full = path.join(dir, file);
        const stat = fs.statSync(full);
        if (stat.isDirectory()) {
            results = results.concat(walk(full));
        } else if (file.endsWith('.js') || file.endsWith('.mjs')) {
            results.push(full);
        }
    });
    return results;
}

const replacementPairs = [
    // Combined pairs with dark variants
    { from: /shadow-\[4\.5px_4\.5px_0px_#0f172a\]\s*dark:shadow-\[4\.5px_4\.5px_0px_#000000\]/g, to: 'shadow-2xl' },
    { from: /shadow-\[5px_5px_0px_#0f172a\]\s*dark:shadow-\[5px_5px_0px_#000000\]/g, to: 'shadow-2xl' },
    { from: /shadow-\[3\.5px_3\.5px_0px_#0f172a\]\s*dark:shadow-\[3\.5px_3\.5px_0px_#000000\]/g, to: 'shadow-md' },
    { from: /shadow-\[3px_3px_0px_#0f172a\]\s*dark:shadow-\[3px_3px_0px_#000000\]/g, to: 'shadow-md' },
    { from: /shadow-\[2\.5px_2\.5px_0px_#0f172a\]\s*dark:shadow-\[2\.5px_2\.5px_0px_#000000\]/g, to: 'shadow-sm' },
    { from: /shadow-\[2px_2px_0px_#0f172a\]\s*dark:shadow-\[2px_2px_0px_#000000\]/g, to: 'shadow-sm' },
    { from: /shadow-\[1\.5px_1\.5px_0px_#0f172a\]\s*dark:shadow-\[1\.5px_1\.5px_0px_#000000\]/g, to: 'shadow-xs' },
    { from: /shadow-\[1px_1px_0px_#0f172a\]\s*dark:shadow-\[1px_1px_0px_#000000\]/g, to: 'shadow-2xs' },

    // Single shadows
    { from: /shadow-\[5px_5px_0px_#0f172a\]/g, to: 'shadow-2xl' },
    { from: /shadow-\[4\.5px_4\.5px_0px_#0f172a\]/g, to: 'shadow-2xl' },
    { from: /shadow-\[3\.5px_3\.5px_0px_#0f172a\]/g, to: 'shadow-md' },
    { from: /shadow-\[3px_3px_0px_#0f172a\]/g, to: 'shadow-md' },
    { from: /shadow-\[2\.5px_2\.5px_0px_#0f172a\]/g, to: 'shadow-sm' },
    { from: /shadow-\[2px_2px_0px_#0f172a\]/g, to: 'shadow-sm' },
    { from: /shadow-\[1\.5px_1\.5px_0px_#0f172a\]/g, to: 'shadow-xs' },
    { from: /shadow-\[1px_1px_0px_#0f172a\]/g, to: 'shadow-2xs' },
    { from: /shadow-\[0\.5px_0\.5px_0px_#0f172a\]/g, to: 'shadow-none' },

    { from: /dark:shadow-\[5px_5px_0px_#000000\]/g, to: 'dark:shadow-2xl' },
    { from: /dark:shadow-\[4\.5px_4\.5px_0px_#000000\]/g, to: 'dark:shadow-2xl' },
    { from: /dark:shadow-\[3\.5px_3\.5px_0px_#000000\]/g, to: 'dark:shadow-md' },
    { from: /dark:shadow-\[3px_3px_0px_#000000\]/g, to: 'dark:shadow-md' },
    { from: /dark:shadow-\[2\.5px_2\.5px_0px_#000000\]/g, to: 'dark:shadow-sm' },
    { from: /dark:shadow-\[2px_2px_0px_#000000\]/g, to: 'dark:shadow-sm' },
    { from: /dark:shadow-\[1\.5px_1\.5px_0px_#000000\]/g, to: 'dark:shadow-xs' },
    { from: /dark:shadow-\[1px_1px_0px_#000000\]/g, to: 'dark:shadow-2xs' },

    // Borders
    { from: /border-2 border-slate-900 dark:border-slate-700/g, to: 'border border-slate-200/90 dark:border-slate-700/80' },
    { from: /border-2 border-slate-900 dark:border-slate-800/g, to: 'border border-slate-200/90 dark:border-slate-800' },
    { from: /border-1\.5 border-slate-900 dark:border-slate-700/g, to: 'border border-slate-200/90 dark:border-slate-700/80' },
    { from: /border-2 border-slate-950/g, to: 'border border-slate-200/90 dark:border-slate-800' },
    { from: /border-2 border-slate-900/g, to: 'border border-slate-200/90 dark:border-slate-800' },
    { from: /border-1\.5 border-slate-900/g, to: 'border border-slate-200/90 dark:border-slate-800' },

    // Active mechanical translations -> spring scaling
    { from: /active:translate-x-\[1\.5px\] active:translate-y-\[1\.5px\]/g, to: 'active:scale-95' },
    { from: /active:translate-x-\[1px\] active:translate-y-\[1px\]/g, to: 'active:scale-95' },
    { from: /active:translate-x-0\.5 active:translate-y-0\.5/g, to: 'active:scale-95' },
    { from: /active:translate-x-1 active:translate-y-1/g, to: 'active:scale-95' },
    { from: /active:translate-x-\[2px\] active:translate-y-\[2px\]/g, to: 'active:scale-95' }
];

function processFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    let original = content;
    let fileReplacements = 0;

    replacementPairs.forEach(pair => {
        const matches = (content.match(pair.from) || []).length;
        if (matches > 0) {
            fileReplacements += matches;
            content = content.replace(pair.from, pair.to);
        }
    });

    if (content !== original) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`  ✓ Updated ${filePath}: ${fileReplacements} replacements`);
        return fileReplacements;
    }
    return 0;
}

let totalCount = 0;

// 1. Process index.html
if (fs.existsSync('index.html')) {
    totalCount += processFile('index.html');
}

// 2. Process all JS files in src
const jsFiles = walk('src');
jsFiles.forEach(f => {
    totalCount += processFile(f);
});

console.log(`\n🎉 Total brutalist markup replacements made: ${totalCount}`);

