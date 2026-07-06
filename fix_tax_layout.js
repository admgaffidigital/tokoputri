const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// For rTaxIncome: max-w-2xl -> max-w-4xl
html = html.replace(/<div class="card-modern p-5 sm:p-7 max-w-2xl mx-auto">/g, 
                    '<div class="card-modern p-5 sm:p-7 max-w-4xl mx-auto">');

// For rTaxBalance: max-w-4xl -> max-w-5xl
html = html.replace(/<div class="grid grid-cols-1 lg:grid-cols-2 gap-4 max-w-4xl mx-auto">/g, 
                    '<div class="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6 max-w-5xl mx-auto">');
html = html.replace(/<div class="max-w-4xl mx-auto mt-4 text-center">/g,
                    '<div class="max-w-5xl mx-auto mt-6 text-center">');

// Check rTaxSettingsPanel
html = html.replace(/<div class="card-modern p-5 sm:p-7 max-w-2xl mx-auto">/g,
                    '<div class="card-modern p-5 sm:p-7 max-w-4xl mx-auto">'); // Just in case settings uses max-w-2xl

fs.writeFileSync('index.html', html, 'utf8');
