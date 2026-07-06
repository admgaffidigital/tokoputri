const fs = require("fs");
let content = fs.readFileSync("index.html", "utf8");

// Fix openBrandModal brand item circle
content = content.replace(
    /class="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white dark:bg-slate-800/g,
    'class="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white'
);

// Fix the image size in openBrandModal to fill the container with slight padding
content = content.replace(
    /<img loading="lazy" src="\$\{esc\(b\.img\)\}" class="w-8 h-8 sm:w-9 sm:h-9 object-contain" >/g,
    '<img loading="lazy" src="${esc(b.img)}" class="w-full h-full object-contain p-1.5" >'
);

// Fix the Semua Merek circle in openBrandModal
content = content.replace(
    /'bg-white dark:bg-slate-700 text-slate-400 border/g,
    "'bg-white text-slate-400 border"
);

fs.writeFileSync("index.html", content, "utf8");
console.log("Replaced openBrandModal HTML successfully!");
