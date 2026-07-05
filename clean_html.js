const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// Replace XML and HTML tags
html = html.replace(/<\?xml version="1\.0" encoding="UTF-8" \?>\s*<!DOCTYPE html>\s*<html[^>]*>/, '<!DOCTYPE html>\n<html lang="id">');

// Replace Title
html = html.replace('<title><data:blog.pageTitle/></title>', '<title>Toko Putri</title>');

// Replace b:skin
html = html.replace(/<b:skin><!\[CDATA\[/g, '<style>');
html = html.replace(/\]\]><\/b:skin>/g, '</style>');

// Remove Widget Blog Tersembunyi (lines containing it and below up to the end div)
html = html.replace(/<!-- Widget Blog Tersembunyi \(Syarat Blogger\) -->[\s\S]*?<\/b:section>\s*<\/div>/, '');

fs.writeFileSync('index.html', html, 'utf8');
