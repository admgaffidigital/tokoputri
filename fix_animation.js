const fs = require("fs");
let content = fs.readFileSync("index.html", "utf8");

// We only want to target rTaxRenderShell
const regex = /window\.rTaxRenderShell = \(\) => \{[\s\S]*?setH\('admin-content', `([\s\S]*?)<div id="tax-content"><\/div>\n      `\);/g;
content = content.replace(regex, (match, p1) => {
    return match
        .replace("setH('admin-content', `", "setH('admin-content', `<div class=\"fade-in-scale\">")
        .replace("<div id=\"tax-content\"></div>\n      `);", "<div id=\"tax-content\"></div>\n      </div>`);");
});

fs.writeFileSync("index.html", content, "utf8");
console.log("Updated tax render shell safely!");
