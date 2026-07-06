const fs = require('fs');
let content = fs.readFileSync('index.html', 'utf8');

// Add placeholder favicon if not present to prevent 404
if (!content.includes("<link rel='icon'")) {
    content = content.replace(
        "<title>Toko Putri</title>",
        "<title>Toko Putri</title>\n    <link rel='icon' href='data:image/x-icon;base64,AA'>"
    );
    fs.writeFileSync('index.html', content);
    console.log('Favicon placeholder added');
} else {
    console.log('Favicon already present');
}
