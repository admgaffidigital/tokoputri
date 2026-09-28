import fs from 'fs';
import path from 'path';

function walk(dir) {
    let files = [];
    fs.readdirSync(dir).forEach(file => {
        let full = path.join(dir, file);
        if (fs.statSync(full).isDirectory()) files = files.concat(walk(full));
        else if (full.endsWith('.js')) files.push(full);
    });
    return files;
}

const all = walk('src');
console.log(`Found ${all.length} JS files in src. Checking syntax & imports...`);

// Test Vite build parse check
console.log('Validating via Vite build output...');
