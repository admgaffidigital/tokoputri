global.window = {};
global.db = {
    collection: () => ({
        doc: () => ({
            get: async () => ({
                exists: true,
                data: () => ({
                    orderId: "ORD1",
                    dateString: new Date().toISOString(),
                    customer: { name: "Test User" },
                    items: [ { name: "Barang", qty: 2, effectivePrice: 50000 } ],
                    payment: {
                        grandTotal: 100000,
                        tempoBalance: 100000,
                        paymentStatus: "hutang"
                    }
                })
            })
        })
    })
};
global.showToast = console.log;
global.sLoad = ()=>{};
global.hLoad = ()=>{};
global.show = ()=>{};
global.setH = ()=>{};
global.appData = { store: { name: 'Test', wa: '123' } };
global.esc = a => a;

const fs = require('fs');
let code = fs.readFileSync('test2.js');
// convert buffer utf16 to utf8 string
code = code.toString('utf16le');
eval(code);

window.previewTempoReceipt('ORD1').then(() => {
    console.log("TEST PREVIEW FINISHED");
}).catch(e => {
    console.error("TEST PREVIEW FAILED:", e);
});
