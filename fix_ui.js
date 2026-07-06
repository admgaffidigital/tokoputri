const fs = require('fs');
let content = fs.readFileSync('index.html', 'utf8');

// Phase 1: Border Radius Standardization
// Replace rounded-md and rounded-lg (and their variants) with rounded-xl
content = content.replace(/\brounded-md\b/g, 'rounded-xl');
content = content.replace(/\brounded-lg\b/g, 'rounded-xl');
content = content.replace(/\brounded-t-lg\b/g, 'rounded-t-xl');
content = content.replace(/\brounded-b-lg\b/g, 'rounded-b-xl');
content = content.replace(/\brounded-l-lg\b/g, 'rounded-l-xl');
content = content.replace(/\brounded-r-lg\b/g, 'rounded-r-xl');
content = content.replace(/\brounded-tl-lg\b/g, 'rounded-tl-xl');
content = content.replace(/\brounded-tr-lg\b/g, 'rounded-tr-xl');
content = content.replace(/\brounded-bl-lg\b/g, 'rounded-bl-xl');
content = content.replace(/\brounded-br-lg\b/g, 'rounded-br-xl');

content = content.replace(/\brounded-t-md\b/g, 'rounded-t-xl');
content = content.replace(/\brounded-b-md\b/g, 'rounded-b-xl');
content = content.replace(/\brounded-l-md\b/g, 'rounded-l-xl');
content = content.replace(/\brounded-r-md\b/g, 'rounded-r-xl');
content = content.replace(/\brounded-tl-md\b/g, 'rounded-tl-xl');
content = content.replace(/\brounded-tr-md\b/g, 'rounded-tr-xl');
content = content.replace(/\brounded-bl-md\b/g, 'rounded-bl-xl');
content = content.replace(/\brounded-br-md\b/g, 'rounded-br-xl');

// Phase 2: Padding responsiveness (changing standard px-4 to scale up on large screens)
// For major outer containers that have px-4 without lg:px-8
// Example: <div class='px-4
// But wait, it's safer to just change `<div class="p-4 sm:p-5"` to `<div class="p-4 md:p-6 lg:p-8"`
content = content.replace(/\bp-4 sm:p-5\b/g, 'p-4 sm:p-5 md:p-6 lg:p-8');
content = content.replace(/\bp-5 sm:p-6 lg:p-7\b/g, 'p-5 sm:p-6 md:p-7 lg:p-8');
content = content.replace(/\bp-5 sm:p-7\b/g, 'p-5 sm:p-6 md:p-7 lg:p-8');

// Phase 3: Admin dashboard width
content = content.replace(/max-w-5xl/g, 'max-w-7xl');

// Add safe area to bottom of admin content for mobile
content = content.replace(/<div id='admin-content'><\/div>/g, "<div id='admin-content' class='pb-10 md:pb-12'></div>");

fs.writeFileSync('index.html', content);
console.log('Phases 1-3 implemented');
