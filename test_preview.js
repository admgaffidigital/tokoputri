const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// Basic DOM polyfill
global.window = {};
global.document = {
    createElement: () => ({ classList: { add: ()=>{}, remove: ()=>{} }, querySelector: ()=>({ focus: ()=>{}, select: ()=>{} }), innerHTML: '', style: {} }),
    body: { appendChild: ()=>{} }
};
global.firebase = { firestore: { Timestamp: { fromDate: ()=>{} } } };
global.showToast = console.log;
global.sLoad = ()=>{};
global.hLoad = ()=>{};
global.show = ()=>{};
global.setH = ()=>{};
global.appData = { store: { name: 'Test', wa: '123' } };
global.esc = a => a;

const scriptMatch = html.match(/<script type='text\/javascript'>([\s\S]*?)<\/script>/);
const jsCode = scriptMatch[1].replace(/await db\.collection/g, 'await (function(){return {doc:()=>({get:async()=>({exists:true,data:()=>({orderId:"ORD1", customer:{name:"A"}, items:[{name:"B",qty:1,effectivePrice:1000}], payment:{grandTotal:1000, tempoBalance:1000} })})})}})().collection');

eval(jsCode);

window.previewTempoReceipt('ORD1').then(() => {
    console.log('Preview test finished');
}).catch(e => {
    console.error('Preview error:', e);
});
