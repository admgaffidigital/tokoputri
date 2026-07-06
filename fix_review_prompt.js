const fs = require('fs');
let content = fs.readFileSync('index.html', 'utf8');

const oldFunc = /window\.replyToReview = async \(reviewId\) => \{[\s\S]*?finally \{ hLoad\(\); \}\s*\};/;

const newFunc = `window.replyToReview = async (reviewId) => {
    const r = gReviews.find(x => x.id === reviewId);
    if (!r) return;
    
    window.customPrompt("Tulis balasan untuk ulasan ini:", r.adminReply || '', async (reply) => {
        // jika kosong, bisa juga dianggap menghapus balasan
        sLoad('Menyimpan balasan...');
        try {
            await db.collection("freshmart").doc("cms_data").collection("reviews").doc(reviewId.toString()).update({ adminReply: reply });
            showToast("Balasan tersimpan!");
        } catch(e) { 
            showToast("Gagal menyimpan balasan!"); 
        } finally { 
            hLoad(); 
        }
    });
};`;

if (content.match(oldFunc)) {
    content = content.replace(oldFunc, newFunc);
    fs.writeFileSync('index.html', content);
    console.log('Fixed replyToReview to use customPrompt');
} else {
    console.log('Target function not found');
}
