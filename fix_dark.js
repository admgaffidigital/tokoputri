const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// Category icons
html = html.replace(/bg-white flex items-center justify-center shadow-sm shrink-0 text-slate-400/g, 'bg-white dark:bg-slate-800 flex items-center justify-center shadow-sm shrink-0 text-slate-400');
html = html.replace(/bg-white flex items-center justify-center shadow-sm mb-2.5 text-slate-400/g, 'bg-white dark:bg-slate-800 flex items-center justify-center shadow-sm mb-2.5 text-slate-400');

// Beli Sekarang button on main page
html = html.replace(/bg-white text-\[var\(--color-primary-dark\)\]/g, 'bg-white dark:bg-slate-800 text-[var(--color-primary-dark)] dark:text-white');

// Brand filter icons
html = html.replace(/bg-white flex items-center justify-center p-3 transition-all/g, 'bg-white dark:bg-slate-800 flex items-center justify-center p-3 transition-all');
html = html.replace(/bg-white text-slate-800 flex items-center justify-center/g, 'bg-white dark:bg-slate-800 text-slate-800 dark:text-white flex items-center justify-center');
html = html.replace(/bg-white border border-slate-100 dark:border-slate-600/g, 'bg-white dark:bg-slate-700 border border-slate-100 dark:border-slate-600');

// Product item image wrappers - keep them white? Or dark? 
// If dark:bg-slate-800 is added, transparent images might not look great if they were meant for white. Let's keep product images white for now, it's safer.

fs.writeFileSync('index.html', html, 'utf8');
