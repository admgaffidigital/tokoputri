const fCur = (a) => 'Rp ' + a;
let o = { orderId: 'ORD-123', payment: { tempoBalance: 100000, tempoDueDate: Date.now() - 200000000 } };

let sisa = o.payment?.tempoBalance || 0;
let rate = o.payment?.tempoPenaltyRate !== undefined ? parseFloat(o.payment.tempoPenaltyRate) : 1;
let isStopped = o.payment?.tempoPenaltyStopped === true;
let latePenalty = 0;
let dueDate = o.payment?.tempoDueDate || 0;
let daysLate = 0;
let isLate = false;

if (isStopped) {
    latePenalty = parseFloat(o.payment?.tempoFixedPenalty) || 0;
    if (Date.now() > dueDate) {
        daysLate = Math.floor((Date.now() - dueDate) / (24 * 60 * 60 * 1000));
        if (daysLate > 0) isLate = true;
    }
} else if (Date.now() > dueDate) {
    daysLate = Math.floor((Date.now() - dueDate) / (24 * 60 * 60 * 1000));
    if (daysLate > 0) {
        isLate = true;
        latePenalty = (rate / 100 * sisa) * daysLate;
    }
}

console.log('latePenalty:', latePenalty);
console.log('Button1:', \onclick="editTempoPenalty('\', \)"\);
console.log('Button2:', \onclick="stopTempoPenalty('\', \, \)"\);
