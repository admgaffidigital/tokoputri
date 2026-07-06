const fs = require('fs');
let content = fs.readFileSync('index.html', 'utf8');

// 1. Remove window.renderAdSlots
const rsStart = content.indexOf('window.renderAdSlots = () => {');
if (rsStart !== -1) {
    // find the end of this function. It's closed with:
    //               box.classList.add('hidden');
    //           }
    //       } catch(e) { console.error('Gagal render slot iklan:', s.id, e); }
    //   });
    // };
    const rsEnd = content.indexOf('};', content.indexOf("console.error('Gagal render slot iklan:'", rsStart));
    if (rsEnd !== -1) {
        content = content.substring(0, rsStart) + content.substring(rsEnd + 2);
        console.log('window.renderAdSlots removed');
    }
}

// 2. Remove try { renderAdSlots(); } catch(e) { console.error('Gagal render iklan:', e); }
content = content.replace(/try \{ renderAdSlots\(\); \} catch\(e\) \{ console\.error\('Gagal render iklan:', e\); \}/g, '');
content = content.replace(/setTimeout\(\(\) => \{  \}, 50\);/g, ''); // cleanup empty timeout

// 3. Remove <div id="ad-slot-banner" ...></div>
content = content.replace(/<div id="ad-slot-banner" class="hidden w-full max-w-\[1200px\] mx-auto px-4 lg:px-10 mt-5 min-h-\[90px\] fade-in flex items-center justify-center overflow-hidden"><\/div>/g, '');

// 4. Remove <div id="ad-slot-catalog-end" ...></div>
content = content.replace(/<div id="ad-slot-catalog-end" class="hidden w-full max-w-\[1200px\] mx-auto px-4 lg:px-10 mt-10 min-h-\[90px\] fade-in flex items-center justify-center overflow-hidden"><\/div>/g, '');

fs.writeFileSync('index.html.tmp', content);
