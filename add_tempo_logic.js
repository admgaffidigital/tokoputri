const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// 1. checkMemberStatus: show payment-option-tempo if doc.exists
html = html.replace(/show\(banner\);/g, "show(banner); show('payment-option-tempo');");
html = html.replace(/currentMember = null; selectedReward = null; hide\(banner\);/g, "currentMember = null; selectedReward = null; hide(banner); hide('payment-option-tempo');");
html = html.replace(/currentMember = null; selectedReward = null; return;/g, "currentMember = null; selectedReward = null; hide('payment-option-tempo'); return;");

// 2. togglePaymentDetails
html = html.replace(/hide\('detail-transfer'\); hide\('detail-qris'\);/g, "hide('detail-transfer'); hide('detail-qris'); hide('detail-tempo');");
html = html.replace(/else if \(p === 'qris'\) show\('detail-qris'\);/g, "else if (p === 'qris') show('detail-qris');\n    else if (p === 'tempo') { show('detail-tempo'); window.calculateTempoBalance(); }");

// 3. calculateTempoBalance function (put right after togglePaymentDetails)
const calcFunc = 
window.calculateTempoBalance = () => {
    let dp = parseFloat(document.getElementById('tempo-dp-input').value) || 0;
    // Calculate total
    let total = cart.reduce((s,i) => s + (parseFloat(getEffP(i))||0) * (parseFloat(i.qty)||0), 0);
    
    // Diskon dan Ongkir (mirip processOrder)
    let sC = 0, productDisc = 0, shippingDisc = 0;
    if (cust.deliveryMethod === 'delivery') {
        sC = Math.ceil((parseFloat(cust.distance)||0) * (parseFloat(appData.store.costPerKm)||0) / 500) * 500;
    }
    if (vouch) {
        if (vouch.type === 'product_nominal') productDisc = parseFloat(vouch.discount);
        else if (vouch.type === 'product_percent') productDisc = total * parseFloat(vouch.discount)/100;
        else if (vouch.type === 'shipping_nominal') shippingDisc = Math.min(sC, parseFloat(vouch.discount));
        else if (vouch.type === 'shipping_percent') shippingDisc = Math.min(sC, sC * parseFloat(vouch.discount)/100);
    }
    let subAfterDisc = Math.max(0, total - productDisc);
    let shippingAfterDisc = Math.max(0, sC - shippingDisc);
    
    // PPN
    let ppnAmount = 0;
    if (appData.store.ppnEnabled === 'true' || appData.store.ppnEnabled === true) {
        let ppnRate = parseFloat(appData.store.ppnRate) || 0;
        ppnAmount = (subAfterDisc + shippingAfterDisc) * (ppnRate/100);
    }
    
    // Points deduction
    let pointsDisc = 0;
    if (window.useMemberPoints && currentMember) {
        pointsDisc = Math.min(subAfterDisc + shippingAfterDisc + ppnAmount, parseFloat(currentMember.points) || 0);
    }
    
    let grandTotal = subAfterDisc + shippingAfterDisc + ppnAmount - pointsDisc;
    if (dp > grandTotal) {
        dp = grandTotal;
        document.getElementById('tempo-dp-input').value = dp;
    }
    let balance = grandTotal - dp;
    document.getElementById('tempo-balance-display').innerText = fCur(balance);
};
;
html = html.replace(/(window\.togglePaymentDetails = \(\) => \{[\s\S]*?\};)/, '\n' + calcFunc);

// 4. Update window.rPay function
// Oh wait, I need to find where rPay resets the payment radio. Let's make sure 'tempo' is handled when generating rPay if any.
// In the checkout UI, the radios are hardcoded and just hidden/shown by JS. So it's fine.

fs.writeFileSync('index.html', html, 'utf8');
