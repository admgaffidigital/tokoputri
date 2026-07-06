const fs = require('fs');
let content = fs.readFileSync('index.html', 'utf8');

const startStr = '<div class="bg-orange-50 dark:bg-orange-900/10 border border-orange-100 dark:border-orange-900/30 rounded-2xl p-5 space-y-4">';
const startIdx = content.indexOf(startStr);
if (startIdx !== -1) {
    // Find the end of this div block. It is followed by `          `;\n      }`
    const endStr = '</div>\n              </div>\n          `;\n      }';
    const endIdx = content.indexOf(endStr, startIdx);
    if (endIdx !== -1) {
        content = content.substring(0, startIdx) + '          `;\n      }';
        console.log('UI Block removed successfully');
    } else {
        console.log('End string not found, try a different approach');
    }
} else {
    console.log('Start string not found');
}

fs.writeFileSync('index.html.tmp', content);
