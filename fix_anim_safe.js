const fs = require("fs");
let content = fs.readFileSync("index.html", "utf8");

// Find rTaxRenderShell
const shellStart = content.indexOf("window.rTaxRenderShell = () => {");
if (shellStart === -1) throw new Error("Could not find rTaxRenderShell");

// Find the first setH('admin-content' AFTER shellStart
const setHStart = content.indexOf("setH('admin-content', `", shellStart);
if (setHStart === -1) throw new Error("Could not find setH inside rTaxRenderShell");

// Replace that specific setH
const p1 = content.slice(0, setHStart);
const p2 = content.slice(setHStart);
content = p1 + p2.replace("setH('admin-content', `", "setH('admin-content', `<div class=\"fade-in-scale\">");

// Find the closing of that specific setH
// It's the first `); after setHStart
const setHEnd = content.indexOf("`);", setHStart);
if (setHEnd === -1) throw new Error("Could not find setH end");

const p3 = content.slice(0, setHEnd);
const p4 = content.slice(setHEnd);
content = p3 + p4.replace("`);", "</div>`);");

fs.writeFileSync("index.html", content, "utf8");
console.log("Safely updated tax shell animation using index!");
