const fs = require("fs");
let content = fs.readFileSync("index.html", "utf8");

const regex = /window\.rTaxRenderShell = \(\) => \{[\s\S]*?setH\('admin-content', `([\s\S]*?)<div id="tax-content"><\/div>\n        `\);\n        rTaxSubContent\(\);/g;
content = content.replace(regex, (match, p1) => {
    return match
        .replace("setH('admin-content', `", "setH('admin-content', `<div class=\"fade-in-scale\">")
        .replace("<div id=\"tax-content\"></div>\n        `);", "<div id=\"tax-content\"></div>\n        </div>`);");
});

fs.writeFileSync("index.html", content, "utf8");
console.log("Updated tax shell animation again!");
