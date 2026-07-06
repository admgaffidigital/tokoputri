const fs = require("fs");
let content = fs.readFileSync("index.html", "utf8");

// 1. Brand Logo Grid Modal - add overflow-hidden
content = content.replace(
    /class="w-14 h-14 rounded-full flex items-center justify-center p-2\.5 bg-white border border-slate-100 dark:border-slate-600 shadow-inner/g,
    'class="w-14 h-14 rounded-full flex items-center justify-center bg-white border border-slate-100 dark:border-slate-600 shadow-inner overflow-hidden p-1.5'
);

// 2. Brand Logo Horizontal - add overflow-hidden
content = content.replace(
    /class="relative w-16 h-16 sm:w-\[68px\] sm:h-\[68px\] rounded-full bg-white flex items-center justify-center p-3/g,
    'class="relative w-16 h-16 sm:w-[68px] sm:h-[68px] rounded-full bg-white flex items-center justify-center overflow-hidden p-2'
);

// 3. Close & Share buttons in product modal
content = content.replace(
    /shadow-sm text-slate-600 hover:bg-emerald-500/g,
    'shadow-sm text-slate-600 dark:text-slate-300 hover:bg-emerald-500'
);
content = content.replace(
    /shadow-sm text-slate-600 hover:bg-rose-500/g,
    'shadow-sm text-slate-600 dark:text-slate-300 hover:bg-rose-500'
);

fs.writeFileSync("index.html", content, "utf8");
console.log("Replaced successfully!");
