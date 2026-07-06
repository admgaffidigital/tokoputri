const fs = require('fs');
let content = fs.readFileSync('index.html', 'utf8');

// Update customPrompt
const targetPrompt = `    document.body.appendChild(div);
    const box = div.querySelector('div');
    setTimeout(() => { div.classList.remove('opacity-0'); box.classList.remove('scale-95'); }, 10);
    const input = div.querySelector('#prompt-input');
    input.focus();
    input.select();
    
    const closeIt = () => {
        div.classList.add('opacity-0'); box.classList.add('scale-95');
        setTimeout(() => div.remove(), 300);
    };
    
    div.querySelector('#prompt-cancel').onclick = closeIt;
    div.querySelector('#prompt-ok').onclick = () => {
        let val = input.value;
        closeIt();
        callback(val);
    };`;

const newPrompt = `    document.body.appendChild(div);
    const box = div.querySelector('div');
    
    pushModalHistory('prompt');
    
    setTimeout(() => { div.classList.remove('opacity-0'); box.classList.remove('scale-95'); }, 10);
    const input = div.querySelector('#prompt-input');
    input.focus();
    input.select();
    
    window.closePrompt = (fH=false) => {
        if (!div || !div.parentNode) return;
        requestCloseModal('prompt', fH, () => {
            div.classList.add('opacity-0'); box.classList.add('scale-95');
            setTimeout(() => div.remove(), 300);
            window.closePrompt = null;
        });
    };
    
    div.querySelector('#prompt-cancel').onclick = () => window.closePrompt();
    div.querySelector('#prompt-ok').onclick = () => {
        let val = input.value;
        window.closePrompt();
        callback(val);
    };`;

if (content.includes(targetPrompt)) {
    content = content.replace(targetPrompt, newPrompt);
    console.log('Fixed customPrompt history');
} else {
    console.log('targetPrompt not found!');
}

// Update popstate
const targetPopstate = `          else if (m === 'member') closeMemberModal(true); // FITUR BARU: back button tutup modal data member`;
const newPopstate = `          else if (m === 'member') closeMemberModal(true); // FITUR BARU: back button tutup modal data member
          else if (m === 'prompt' && typeof window.closePrompt === 'function') window.closePrompt(true);`;

if (content.includes(targetPopstate)) {
    content = content.replace(targetPopstate, newPopstate);
    console.log('Fixed popstate');
} else {
    console.log('targetPopstate not found');
}

fs.writeFileSync('index.html', content);
