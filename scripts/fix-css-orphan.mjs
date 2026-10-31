import { readFileSync, writeFileSync } from 'fs';

let css = readFileSync('src/style.css', 'utf8');

// Normalize CRLF to LF for consistent processing
css = css.replace(/\r\n/g, '\n').replace(/\r/g, '\n');

// The orphan block: floating CSS properties without a selector, 
// appearing right after the .btn-flash-buy:active closing brace
// It starts with "    padding: 0 0.5rem" and ends with lone "}"
// These are remnants from the old neo-brutalism btn styles that were partially overwritten

const orphanPattern = /\n(\s+padding: 0 0\.5rem !important;\s+border-radius: 0\.75rem[^}]+border: 1\.5px solid #0f172a !important;\s+box-shadow: 1\.5px 1\.5px 0px #0f172a !important;\s+cursor: pointer !important;\s+user-select: none !important;\s+transition: transform 0\.08s ease, box-shadow 0\.08s ease !important;\s+box-sizing: border-box !important;\n})/;

if (orphanPattern.test(css)) {
  css = css.replace(orphanPattern, '');
  writeFileSync('src/style.css', css, 'utf8');
  console.log('SUCCESS: orphan CSS block removed via regex');
} else {
  // Fallback: line-based approach
  const lines = css.split('\n');
  let orphanStart = -1;
  let orphanEnd = -1;
  
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].includes('border: 1.5px solid #0f172a !important') && 
        i > 0 && lines[i-1].includes('background: var(--color-primary)')) {
      // Find start of this orphan block
      let s = i - 1;
      while (s > 0 && lines[s].trim() !== '' && !lines[s].trim().endsWith('}')) s--;
      s++;
      orphanStart = s;
      // Find end
      let e = i;
      while (e < lines.length && lines[e].trim() !== '}') e++;
      orphanEnd = e;
      break;
    }
  }
  
  if (orphanStart !== -1) {
    console.log(`Removing orphan block lines ${orphanStart + 1}–${orphanEnd + 1}`);
    lines.splice(orphanStart, orphanEnd - orphanStart + 1);
    writeFileSync('src/style.css', lines.join('\n'), 'utf8');
    console.log('SUCCESS via line-based removal');
  } else {
    console.error('FAILED: could not find orphan block');
    process.exit(1);
  }
}

// Verify fix
const fixed = readFileSync('src/style.css', 'utf8').replace(/\r\n/g, '\n');
const lines2 = fixed.split('\n');
let depth = 0;
let hasError = false;
for (let i = 0; i < lines2.length; i++) {
  for (const c of lines2[i]) {
    if (c === '{') depth++;
    else if (c === '}') {
      depth--;
      if (depth < 0) {
        console.error(`Still has unmatched } at line ${i + 1}: ${lines2[i].trim()}`);
        hasError = true;
        depth = 0;
      }
    }
  }
}
console.log(`Final brace depth: ${depth} (should be 0)`);
console.log(`Total lines: ${lines2.length}`);
if (!hasError && depth === 0) {
  console.log('CSS brace structure VALID');
} else {
  process.exit(1);
}

