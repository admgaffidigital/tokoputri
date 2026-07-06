const fs = require("fs");
let content = fs.readFileSync("index.html", "utf8");

// 1. Brand Logo Grid
content = content.replace(
    /class="w-14 h-14 rounded-full flex items-center justify-center p-2\.5 bg-white dark:bg-slate-700/g,
    'class="w-14 h-14 rounded-full flex items-center justify-center p-2.5 bg-white'
);

// 2. Brand Logo Horizontal
content = content.replace(
    /class="relative w-16 h-16 sm:w-\[68px\] sm:h-\[68px\] rounded-full bg-white dark:bg-slate-800/g,
    'class="relative w-16 h-16 sm:w-[68px] sm:h-[68px] rounded-full bg-white'
);

// 3. Product Catalog Card Image
content = content.replace(
    /<div class="relative aspect-square w-full bg-white flex items-center justify-center p-3 sm:p-5 shrink-0 border-b border-slate-100 dark:border-slate-700\/50">\s*\$\{stockBadge\}\s*<img loading="lazy" src="\$\{esc\(p\.img\)\}" onerror="this\.onerror=null;this\.src='https:\/\/placehold\.co\/400\?text=No\+Image'" class="max-w-full max-h-full object-contain/g,
    '<div class="relative aspect-square w-full bg-white flex items-center justify-center shrink-0 border-b border-slate-100 dark:border-slate-700/50">\n                      ${stockBadge}\n                      <img loading="lazy" src="${esc(p.img)}" onerror="this.onerror=null;this.src=\'https://placehold.co/400?text=No+Image\'" class="w-full h-full object-cover'
);

// 4. Product Modal Detail Image
content = content.replace(
    /<div class='w-full aspect-square shrink-0 bg-white flex items-center justify-center p-8 sm:p-10 border-b border-slate-100 dark:border-slate-800\/60 sm:rounded-t-\[2rem\]'>\s*<img alt='Product' class='max-w-full max-h-full object-contain/g,
    '<div class=\'w-full aspect-square shrink-0 bg-white flex items-center justify-center border-b border-slate-100 dark:border-slate-800/60 sm:rounded-t-[2rem] rounded-t-[2rem] overflow-hidden\'>\n                  <img alt=\'Product\' class=\'w-full h-full object-cover'
);

fs.writeFileSync("index.html", content, "utf8");
console.log("Replaced successfully!");
