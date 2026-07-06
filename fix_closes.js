const fs = require('fs');
let content = fs.readFileSync('index.html', 'utf8');

const tMember = `window.closeMemberModal = (fH=false) => {
    const m = document.getElementById('member-modal');
    if (!m || m.style.display === 'none') return;
    m.style.opacity = '0'; m.style.transition = 'opacity 0.25s ease';
    setTimeout(() => { m.style.display = 'none'; m.style.opacity = ''; m.style.transition = ''; }, 250);
    if (!fH && oMods.length && oMods[oMods.length-1] === 'member') { oMods.pop(); history.back(); }
};`;
const rMember = `window.closeMemberModal = (fH=false) => {
    requestCloseModal('member', fH, () => {
        const m = document.getElementById('member-modal');
        if (!m || m.style.display === 'none') return;
        m.style.opacity = '0'; m.style.transition = 'opacity 0.25s ease';
        setTimeout(() => { m.style.display = 'none'; m.style.opacity = ''; m.style.transition = ''; }, 250);
    });
};`;
content = content.replace(tMember, rMember);

const tReview = `window.closeReviewModal = (fH=false) => {
    const m = document.getElementById('review-modal');
    if (!m || m.style.display === 'none') return;
    m.style.opacity = '0'; m.style.transition = 'opacity 0.25s ease';
    setTimeout(() => { m.style.display = 'none'; m.style.opacity = ''; m.style.transition = ''; }, 250);
    if (!fH && oMods.length && oMods[oMods.length-1] === 'review') { oMods.pop(); history.back(); }
};`;
const rReview = `window.closeReviewModal = (fH=false) => {
    requestCloseModal('review', fH, () => {
        const m = document.getElementById('review-modal');
        if (!m || m.style.display === 'none') return;
        m.style.opacity = '0'; m.style.transition = 'opacity 0.25s ease';
        setTimeout(() => { m.style.display = 'none'; m.style.opacity = ''; m.style.transition = ''; }, 250);
    });
};`;
content = content.replace(tReview, rReview);

const reRestock = /window\.closeRestockModal = \(fH=false\) => \{[\s\S]*?if \(!fH && oMods\.length && oMods\[oMods\.length-1\] === 'restock'\) \{\s*oMods\.pop\(\);\s*history\.back\(\);\s*\}\s*\};/;
const rRestock = `window.closeRestockModal = (fH=false) => {
    requestCloseModal('restock', fH, () => {
        const m = document.getElementById('restock-modal');
        if (!m || m.style.display === 'none') return;
        m.style.opacity = '0'; m.style.transition = 'opacity 0.25s ease';
        setTimeout(() => {
            m.style.display = 'none'; m.style.opacity = ''; m.style.transition = '';
        }, 250);
    });
};`;
content = content.replace(reRestock, rRestock);

const reQuick = /window\.closeQuickPriceModal = \(fH=false\) => \{[\s\S]*?if \(!fH && oMods\.length && oMods\[oMods\.length-1\] === 'quickprice'\) \{\s*oMods\.pop\(\);\s*history\.back\(\);\s*\}\s*\};/;
const rQuick = `window.closeQuickPriceModal = (fH=false) => {
    requestCloseModal('quickprice', fH, () => {
        const m = document.getElementById('quickprice-modal');
        if (!m || m.style.display === 'none') return;
        m.style.opacity = '0'; m.style.transition = 'opacity 0.25s ease';
        setTimeout(() => {
            m.style.display = 'none'; m.style.opacity = ''; m.style.transition = '';
        }, 250);
    });
};`;
content = content.replace(reQuick, rQuick);

fs.writeFileSync('index.html', content);
console.log('Fixed close Modal functions');
