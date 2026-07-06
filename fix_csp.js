const fs = require('fs');
let content = fs.readFileSync('index.html', 'utf8');

content = content.replace(/https:\/\/pagead2\.googlesyndication\.com /g, '');
content = content.replace(/https:\/\/googleads\.g\.doubleclick\.net /g, '');
content = content.replace(/https:\/\/www\.googletagservices\.com /g, '');
content = content.replace(/https:\/\/tpc\.googlesyndication\.com /g, '');
content = content.replace(/https:\/\/\*\.adtrafficquality\.google /g, '');
content = content.replace(/https:\/\/pagead2\.googlesyndication\.com/g, ''); // catch end of string
content = content.replace(/https:\/\/googleads\.g\.doubleclick\.net/g, '');
content = content.replace(/https:\/\/www\.googletagservices\.com/g, '');
content = content.replace(/https:\/\/tpc\.googlesyndication\.com/g, '');
content = content.replace(/https:\/\/\*\.adtrafficquality\.google/g, '');

// Clean up double spaces in CSP
content = content.replace(/  +/g, ' ');

fs.writeFileSync('index.html', content);
console.log('CSP cleaned');
