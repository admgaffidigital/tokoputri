const fs = require("fs");
let content = fs.readFileSync("index.html", "utf8");

content = content.replace(
    /      setH\('admin-content', `\n          <div class="bg-amber-50 dark:bg-amber-900\/10 border border-amber-200 dark:border-amber-800 rounded-2xl p-4 mb-5 flex items-start gap-3">/g,
    "      setH('admin-content', `<div class=\"fade-in-scale\">\n          <div class=\"bg-amber-50 dark:bg-amber-900/10 border border-amber-200 dark:border-amber-800 rounded-2xl p-4 mb-5 flex items-start gap-3\">"
);

content = content.replace(
    /          <div id="tax-content"><\/div>\n      `\);\n      rTaxSubContent\(\);/g,
    "          <div id=\"tax-content\"></div>\n      </div>`);\n      rTaxSubContent();"
);

fs.writeFileSync("index.html", content, "utf8");
console.log("Updated animation correctly!");
