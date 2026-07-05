const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// Inside rAdmSet() we want to replace gap-3 with gap-4 sm:gap-5 for the main menu grid
html = html.replace(/<div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-6">/g, 
                    '<div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-5 mb-6">');

// Adjust padding on card-modern inside the admin menus
html = html.replace(/class="card-modern p-4 /g, 'class="card-modern p-5 ');

// Replace admin-input padding from py-3 to py-3.5
html = html.replace(/\.admin-input \{ @apply w-full (.*?) py-3 (.*?); \}/g, '.admin-input { @apply w-full  py-3.5 sm:py-4 ; }');

// Increase gap in view-catalog from gap-4 sm:gap-5 to gap-4 sm:gap-6
html = html.replace(/gap-4 sm:gap-5/g, 'gap-4 sm:gap-6 lg:gap-8');

fs.writeFileSync('index.html', html, 'utf8');
