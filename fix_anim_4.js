const fs = require("fs");
let content = fs.readFileSync("index.html", "utf8");

content = content.replace(
    /        setH\('admin-content', `/g,
    "        setH('admin-content', `<div class=\"fade-in-scale\">\n"
);

content = content.replace(
    /        <div id="tax-content"><\/div>\n        `\);\n        rTaxSubContent\(\);/g,
    "        <div id=\"tax-content\"></div>\n        </div>`);\n        rTaxSubContent();"
);

fs.writeFileSync("index.html", content, "utf8");
console.log("Replaced exactly!");
