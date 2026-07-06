const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

html = html.replace(/<h4><i class="fa-solid fa-arrow-down-wide-short mr-1\.5 text-emerald-500"><\/i>ASET<\/h4>/g,
    '<h4 class="font-black text-slate-800 dark:text-white text-xs uppercase tracking-widest mb-4 pb-3 border-b border-slate-100 dark:border-slate-700"><i class="fa-solid fa-arrow-down-wide-short mr-1.5 text-emerald-500"></i>ASET</h4>');

html = html.replace(/<h4><i class="fa-solid fa-arrow-up-wide-short mr-1\.5 text-rose-500"><\/i>KEWAJIBAN &amp; MODAL<\/h4>/g,
    '<h4 class="font-black text-slate-800 dark:text-white text-xs uppercase tracking-widest mb-4 pb-3 border-b border-slate-100 dark:border-slate-700"><i class="fa-solid fa-arrow-up-wide-short mr-1.5 text-rose-500"></i>KEWAJIBAN &amp; MODAL</h4>');

fs.writeFileSync('index.html', html, 'utf8');
