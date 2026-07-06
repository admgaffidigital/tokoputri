const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// Add gradient and glow to PPN card
html = html.replace(/<div class="card-modern p-5 sm:p-5 bg-amber-50 dark:bg-amber-900\/10 border-amber-200 dark:border-amber-800">/,
                    '<div class="card-modern p-5 sm:p-5 border-amber-200 dark:border-amber-700 relative overflow-hidden" style="background: linear-gradient(135deg, rgba(245,158,11,0.1), rgba(245,158,11,0.02))"><div class="absolute -right-4 -bottom-4 w-24 h-24 bg-amber-500/20 rounded-full blur-xl pointer-events-none"></div>');

// Add gradient to Aset card
html = html.replace(/<div class="card-modern p-5 sm:p-6">/g, 
                    function(match, offset, string) {
                        if (string.substr(offset, 200).includes('ASET</h4>')) {
                            return '<div class="card-modern p-5 sm:p-6 relative overflow-hidden shadow-lg border-emerald-100 dark:border-emerald-900/30" style="background: linear-gradient(135deg, rgba(16,185,129,0.05), transparent)"><div class="absolute -top-10 -right-10 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none"></div>';
                        }
                        if (string.substr(offset, 200).includes('KEWAJIBAN')) {
                            return '<div class="card-modern p-5 sm:p-6 relative overflow-hidden shadow-lg border-rose-100 dark:border-rose-900/30" style="background: linear-gradient(135deg, rgba(244,63,94,0.05), transparent)"><div class="absolute -top-10 -right-10 w-32 h-32 bg-rose-500/10 rounded-full blur-2xl pointer-events-none"></div>';
                        }
                        return match;
                    });

fs.writeFileSync('index.html', html, 'utf8');
