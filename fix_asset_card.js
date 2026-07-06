const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

html = html.replace(/<div class="card-modern p-5 sm:p-6">\s*<h4(.*?)>.*?ASET<\/h4>/g,
    '<div class="card-modern p-5 sm:p-6 relative overflow-hidden shadow-lg border-emerald-100 dark:border-emerald-900/30" style="background: linear-gradient(135deg, rgba(16,185,129,0.05), transparent)"><div class="absolute -top-10 -right-10 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none"></div>\n                <h4><i class="fa-solid fa-arrow-down-wide-short mr-1.5 text-emerald-500"></i>ASET</h4>');

html = html.replace(/<div class="card-modern p-5 sm:p-6">\s*<h4(.*?)>.*?KEWAJIBAN &amp; MODAL<\/h4>/g,
    '<div class="card-modern p-5 sm:p-6 relative overflow-hidden shadow-lg border-rose-100 dark:border-rose-900/30" style="background: linear-gradient(135deg, rgba(244,63,94,0.05), transparent)"><div class="absolute -top-10 -right-10 w-32 h-32 bg-rose-500/10 rounded-full blur-2xl pointer-events-none"></div>\n                <h4><i class="fa-solid fa-arrow-up-wide-short mr-1.5 text-rose-500"></i>KEWAJIBAN &amp; MODAL</h4>');

fs.writeFileSync('index.html', html, 'utf8');
