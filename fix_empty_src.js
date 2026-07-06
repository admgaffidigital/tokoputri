const fs = require('fs');
let content = fs.readFileSync('index.html', 'utf8');

const transparentGif = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";

content = content.replace(/src=''/g, `src='${transparentGif}'`);
content = content.replace(/src=""/g, `src="${transparentGif}"`);

fs.writeFileSync('index.html', content);
console.log('Fixed empty src attributes');
