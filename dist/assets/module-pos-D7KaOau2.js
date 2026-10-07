const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/pos-variant-sheet-AjRLtFRP.js","assets/module-print-Nd5nEehY.js","assets/vendor-firebase-core-D2OF5R23.js","assets/vendor-firebase-db-BIUZcnOd.js"])))=>i.map(i=>d[i]);
import{a as m,c as Ga,I as Na,k as y,z as fe,e as p,aq as za,q as B,i as b,aM as Qe,H as Vs,aN as re,aA as Us,E as Ut,J as Qt,F as Gt,b as Qs,as as Gs,m as zs,f as Ws}from"./module-print-Nd5nEehY.js";import{f as st}from"./vendor-firebase-core-D2OF5R23.js";const ye={enabled:!0,minOrder:2e4,maxOrder:1e7,noticeText:"Cicilan transparan tanpa bunga atau biaya tersembunyi. Tagihan jatuh tempo setiap bulan.",tenors:{"30d":{enabled:!0,label:"30 Hari (1x Bayar)",shortLabel:"30 Hari",months:1,days:30,adminFeeType:"flat",adminFeeValue:0,serviceFeeType:"flat",serviceFeeValue:0},"2m":{enabled:!0,label:"2 Bulan (Cicilan 2x)",shortLabel:"2 Bulan",months:2,days:60,adminFeeType:"flat",adminFeeValue:1500,serviceFeeType:"percent",serviceFeeValue:1.5},"3m":{enabled:!0,label:"3 Bulan (Cicilan 3x)",shortLabel:"3 Bulan",months:3,days:90,adminFeeType:"flat",adminFeeValue:2500,serviceFeeType:"percent",serviceFeeValue:2.5}}},pt=()=>{const e=m?.store?.paylater||{},t=e.tenors||{},a=(s,r)=>{const o=t[s]||{};return{enabled:o.enabled!==void 0?!!o.enabled:r.enabled,label:o.label||r.label,shortLabel:o.shortLabel||r.shortLabel,months:parseInt(o.months,10)||r.months,days:parseInt(o.days,10)||r.days,adminFeeType:o.adminFeeType==="percent"?"percent":"flat",adminFeeValue:Math.max(0,parseFloat(o.adminFeeValue)||0),serviceFeeType:o.serviceFeeType==="percent"?"percent":"flat",serviceFeeValue:Math.max(0,parseFloat(o.serviceFeeValue)||0)}};return{enabled:e.enabled!==void 0?e.enabled===!0||e.enabled==="true":ye.enabled,minOrder:Math.max(0,parseFloat(e.minOrder!==void 0?e.minOrder:ye.minOrder)),maxOrder:Math.max(0,parseFloat(e.maxOrder!==void 0?e.maxOrder:ye.maxOrder)),noticeText:(e.noticeText||ye.noticeText).trim(),tenors:{"30d":a("30d",ye.tenors["30d"]),"2m":a("2m",ye.tenors["2m"]),"3m":a("3m",ye.tenors["3m"])}}},Js=e=>{if(typeof e=="number")return isNaN(e)?0:Math.max(0,e);if(!e)return 0;let t=String(e).trim().replace(/[^0-9.,-]/g,"");if(!t)return 0;t.includes(".")&&t.includes(",")?t=t.replace(/\./g,"").replace(",","."):t.includes(".")&&!t.includes(",")?/\.\d{3}($|\.)/.test(t)&&(t=t.replace(/\./g,"")):t.includes(",")&&!t.includes(".")&&(/,\d{3}($|,)/.test(t)?t=t.replace(/,/g,""):t=t.replace(",","."));const a=parseFloat(t);return isNaN(a)?0:Math.max(0,a)},ot=(e,t="30d",a=null)=>{const s=a||pt(),r=Js(e),o=s.tenors?.[t]||ye.tenors[t]||ye.tenors["30d"],n=Math.max(1,parseInt(o.months,10)||1),d=r>=s.minOrder&&(s.maxOrder<=0||r<=s.maxOrder),l=r,c=Math.round(l/n);let i=0;const u=Math.max(0,parseFloat(o.adminFeeValue)||0);r>0&&u>0&&(o.adminFeeType==="percent"?i=Math.round(l*u/100):i=Math.round(u));const k=Math.round(i/n);let v=0;const x=Math.max(0,parseFloat(o.serviceFeeValue)||0);r>0&&x>0&&(o.serviceFeeType==="percent"?v=Math.round(l*x/100):v=Math.round(x));const w=Math.round(v/n),S=r>0?c+k+w:0,P=r>0?l+i+v:0,O=[];if(r>0){const I=new Date,D=Math.max(1,Math.min(31,parseInt(a?.dueDay??s?.dueDay??5,10)||5));let R=0,J=0,Y=0;for(let T=1;T<=n;T++){const E=I.getFullYear(),f=I.getMonth()+T,$=new Date(E,f,1),F=$.getFullYear(),M=$.getMonth(),L=new Date(F,M+1,0).getDate(),ae=Math.min(D,L),_=new Date(F,M,ae,23,59,59);let z=c,W=k,pe=w;T===n?(z=Math.max(0,l-R),W=Math.max(0,i-J),pe=Math.max(0,v-Y)):(R+=z,J+=W,Y+=pe);const at=z+W+pe;O.push({installmentIndex:T,totalMonths:n,dueDate:_.getTime(),dueDateFormatted:_.toLocaleDateString("id-ID",{day:"numeric",month:"short",year:"numeric"}),pokok:z,adminFee:W,serviceFee:pe,total:at})}}return{tenorKey:t,enabled:o.enabled,label:o.label,shortLabel:o.shortLabel,months:n,days:o.days||n*30,isEligible:d,minOrder:s.minOrder,maxOrder:s.maxOrder,pokokTotal:l,pokokPerMonth:c,adminFeeType:o.adminFeeType,adminFeeValue:o.adminFeeValue,totalAdminFee:i,adminFeePerMonth:k,serviceFeeType:o.serviceFeeType,serviceFeeValue:o.serviceFeeValue,totalServiceFee:v,serviceFeePerMonth:w,totalPerMonth:S,grandTotal:P,schedule:O,noticeText:s.noticeText}},vr=(e,t=null)=>{const a=t||pt(),s=["30d","2m","3m"],r={};let o=1/0,n="3m";return s.forEach(d=>{const l=ot(e,d,a);r[d]=l,l.enabled&&l.totalPerMonth>0&&l.totalPerMonth<o&&(o=l.totalPerMonth,n=d)}),{config:a,results:r,minMonthly:o===1/0?0:o,minTenorKey:n,amount:Math.max(0,parseFloat(e)||0)}},zt=(e,t)=>{const a=Math.max(0,parseFloat(e?.paylaterUsed)||0);if(a<=0)return null;const s=Math.max(0,parseFloat(e?.paylaterAdminFee)||0)+Math.max(0,parseFloat(e?.paylaterServiceFee)||0),r=a+s,o=Math.max(0,parseFloat(t)||0);if(o<=0)return a;const n=Math.max(0,r-o);return Math.min(a,Math.max(0,Math.round(a*n/r)))},yr=(e,t,a,s=0)=>{const r=zt(e,t),o=zt(e,a);return r===null||o===null?Math.max(0,parseFloat(s)||0):Math.max(0,o-r)},Sr=e=>{const t=Math.max(0,parseFloat(e?.paylaterUsed)||0);if(t<=0)return 0;if(!(e&&e.tempoBalance!==void 0&&e.tempoBalance!==null))return t;const s=zt(e,e.tempoBalance)||0;return Math.max(0,t-s)},We=(e,t=[])=>{if(!e||typeof e!="object")return e;if(Array.isArray(e.suppliers)||(e.suppliers=[]),e.supplierId&&!e.suppliers.some(s=>String(s.supplierId)===String(e.supplierId))){const s=(t||[]).find(r=>String(r.id)===String(e.supplierId));e.suppliers.unshift({supplierId:String(e.supplierId),supplierName:s?s.name:"Supplier Utama",lastBuyPrice:parseFloat(e.hpp)||0,supplierSku:e.sku||"",minOrderQty:1,isPrimary:!0,updatedAt:e.updatedAt||new Date().toISOString()})}e.suppliers.length>0&&!e.suppliers.some(s=>s.isPrimary)&&(e.suppliers[0].isPrimary=!0);const a=e.suppliers.find(s=>s.isPrimary)||e.suppliers[0];if(a&&!e.supplierId&&(e.supplierId=a.supplierId),!Array.isArray(e.stockBatches)){e.stockBatches=[];const s=parseFloat(e.stock)||0;if(s>0){const r=a?a.supplierName:"Stok Awal Toko";e.stockBatches.push({batchId:`BATCH-INIT-${e.id||Date.now()}`,poId:null,poNumber:"STOK AWAL",supplierId:e.supplierId||"",supplierName:r,receivedAt:e.createdAt||new Date(0).toISOString(),buyPrice:parseFloat(e.hpp)||0,initialQty:s,remainingQty:s,variantName:"",location:"store",isInitial:!0})}}return e.storeStock===void 0&&e.warehouseStock===void 0?(e.storeStock=parseFloat(e.stock)||0,e.warehouseStock=0):(e.storeStock=Math.max(0,parseFloat(e.storeStock)||0),e.warehouseStock=Math.max(0,parseFloat(e.warehouseStock)||0)),e.stock=parseFloat((e.storeStock+e.warehouseStock).toFixed(3)),Array.isArray(e.variants)&&(e.variants.forEach(s=>{s.storeStock===void 0&&s.warehouseStock===void 0?(s.storeStock=parseFloat(s.stock)||0,s.warehouseStock=0):(s.storeStock=Math.max(0,parseFloat(s.storeStock)||0),s.warehouseStock=Math.max(0,parseFloat(s.warehouseStock)||0)),s.stock=parseFloat((s.storeStock+s.warehouseStock).toFixed(3))}),e.variants.length>0&&(e.storeStock=e.variants.reduce((s,r)=>s+(parseFloat(r.storeStock)||0),0),e.warehouseStock=e.variants.reduce((s,r)=>s+(parseFloat(r.warehouseStock)||0),0),e.stock=parseFloat((e.storeStock+e.warehouseStock).toFixed(3)))),e},Pr=(e,t={})=>{if(!e)return null;We(e);const a=parseFloat(t.qty)||0;if(a<=0)return null;const s=parseFloat(t.unitPrice)||0,r=t.supplierId?String(t.supplierId):e.supplierId||"",o=t.supplierName||"Pemasok Toko",n=t.variantName||"",d=t.receivedAt||new Date().toISOString(),l=e.suppliers.findIndex(x=>String(x.supplierId)===r);l>-1?(s>0&&(e.suppliers[l].lastBuyPrice=s),e.suppliers[l].supplierName=o,e.suppliers[l].updatedAt=d):r&&e.suppliers.push({supplierId:r,supplierName:o,lastBuyPrice:s,supplierSku:t.supplierSku||"",minOrderQty:1,isPrimary:e.suppliers.length===0,updatedAt:d});const c=t.targetLocation==="warehouse"||t.location==="warehouse"?"warehouse":"store",i=Math.random().toString(36).substring(2,7).toUpperCase(),k={batchId:`BATCH-${Date.now().toString(36).toUpperCase()}-${i}`,poId:t.poId||null,poNumber:t.poNumber||(t.poId?`PO-${t.poId}`:"KULAKAN"),supplierId:r,supplierName:o,receivedAt:d,buyPrice:s,initialQty:a,remainingQty:a,variantName:n,location:c,expDate:t.expDate||null};if(e.stockBatches.push(k),e.stockBatches.sort((x,w)=>new Date(x.receivedAt||0)-new Date(w.receivedAt||0)),n&&Array.isArray(e.variants)){const x=e.variants.find(w=>w.name===n);x&&(c==="warehouse"?x.warehouseStock=parseFloat(((parseFloat(x.warehouseStock)||0)+a).toFixed(3)):x.storeStock=parseFloat(((parseFloat(x.storeStock)||0)+a).toFixed(3)),x.stock=parseFloat(((parseFloat(x.storeStock)||0)+(parseFloat(x.warehouseStock)||0)).toFixed(3))),e.storeStock=e.variants.reduce((w,S)=>w+(parseFloat(S.storeStock)||0),0),e.warehouseStock=e.variants.reduce((w,S)=>w+(parseFloat(S.warehouseStock)||0),0),e.stock=parseFloat((e.storeStock+e.warehouseStock).toFixed(3))}else c==="warehouse"?e.warehouseStock=parseFloat(((parseFloat(e.warehouseStock)||0)+a).toFixed(3)):e.storeStock=parseFloat(((parseFloat(e.storeStock)||0)+a).toFixed(3)),e.stock=parseFloat((e.storeStock+e.warehouseStock).toFixed(3));const v=e.stockBatches.find(x=>(!n||x.variantName===n)&&(parseFloat(x.remainingQty)||0)>0&&(parseFloat(x.buyPrice)||0)>0);if(v)if(n&&Array.isArray(e.variants)){const x=e.variants.find(w=>w.name===n);x&&(x.hpp=v.buyPrice)}else e.hpp=v.buyPrice;return k},Ea=(e,t,a="")=>{const s=parseFloat(t)||0;if(!e||s<=0)return{deductedQty:0,batchesDeducted:[],totalCost:0,effectiveHpp:0};We(e);let r=s;const o=[];let n=0;e.stockBatches.sort((x,w)=>new Date(x.receivedAt||0)-new Date(w.receivedAt||0));for(const x of e.stockBatches){if(r<=0)break;if(a){if(x.variantName!==a)continue}else if(x.variantName&&x.variantName!=="")continue;const w=parseFloat(x.remainingQty)||0;if(w<=0)continue;const S=Math.min(w,r);x.remainingQty=parseFloat((w-S).toFixed(3)),r=parseFloat((r-S).toFixed(3));const P=parseFloat((S*(parseFloat(x.buyPrice)||0)).toFixed(2));n+=P,o.push({batchId:x.batchId,poId:x.poId,poNumber:x.poNumber,supplierId:x.supplierId,supplierName:x.supplierName,qty:S,buyPrice:parseFloat(x.buyPrice)||0,subtotalCost:P})}if(r>0){const x=parseFloat(e.hpp)||0,w=parseFloat((r*x).toFixed(2));n+=w,o.push({batchId:"FALLBACK-DEFICIT",poId:null,poNumber:"STOK DARURAT",supplierId:e.supplierId||"",supplierName:"Stok Toko",qty:r,buyPrice:x,subtotalCost:w,isDeficit:!0})}let d=0,l=0,c=e;if(a&&Array.isArray(e.variants)){const x=e.variants.find(w=>w.name===a);x&&(c=x,d=parseFloat(x.storeStock)||0,l=parseFloat(x.warehouseStock)||0)}else d=parseFloat(e.storeStock)||0,l=parseFloat(e.warehouseStock)||0;const i=Math.min(d,s),u=Math.max(0,s-i);c.storeStock=Math.max(0,parseFloat((d-i).toFixed(3))),c.warehouseStock=Math.max(0,parseFloat((l-u).toFixed(3))),c.stock=parseFloat((c.storeStock+c.warehouseStock).toFixed(3)),a&&Array.isArray(e.variants)&&(e.storeStock=e.variants.reduce((x,w)=>x+(parseFloat(w.storeStock)||0),0),e.warehouseStock=e.variants.reduce((x,w)=>x+(parseFloat(w.warehouseStock)||0),0)),e.stock=parseFloat((e.storeStock+e.warehouseStock).toFixed(3));const k=e.stockBatches.find(x=>(!a||x.variantName===a)&&(parseFloat(x.remainingQty)||0)>0&&(parseFloat(x.buyPrice)||0)>0);if(k)if(a&&Array.isArray(e.variants)){const x=e.variants.find(w=>w.name===a);x&&(x.hpp=k.buyPrice)}else e.hpp=k.buyPrice;const v=s>0?parseFloat((n/s).toFixed(2)):0;return{deductedQty:s,storeDeducted:i,warehouseDeducted:u,needWarehouseRetrieval:u>0,batchesDeducted:o,totalCost:n,effectiveHpp:v}},Mr=(e,t="warehouse",a="store",s=0,r="")=>{const o=parseFloat(s)||0;if(!e||o<=0)return{success:!1,message:"Jumlah mutasi harus lebih besar dari 0"};if(t===a)return{success:!1,message:"Lokasi asal dan tujuan tidak boleh sama"};We(e);let n=e;if(r&&Array.isArray(e.variants)){const u=e.variants.find(k=>k.name===r);u&&(n=u)}const d=t==="warehouse"?"warehouseStock":"storeStock",l=a==="warehouse"?"warehouseStock":"storeStock",c=parseFloat(n[d])||0;if(c<o){const k=`Stok di ${t==="warehouse"?"Gudang":"Rak Toko"} tidak mencukupi! Tersedia: ${c} ${e.unit||"pcs"}`;return{success:!1,message:k,error:k}}n[d]=parseFloat((c-o).toFixed(3)),n[l]=parseFloat(((parseFloat(n[l])||0)+o).toFixed(3)),n.stock=parseFloat((n.storeStock+n.warehouseStock).toFixed(3)),r&&Array.isArray(e.variants)&&(e.storeStock=e.variants.reduce((u,k)=>u+(parseFloat(k.storeStock)||0),0),e.warehouseStock=e.variants.reduce((u,k)=>u+(parseFloat(k.warehouseStock)||0),0),e.stock=parseFloat((e.storeStock+e.warehouseStock).toFixed(3)));let i=o;for(const u of e.stockBatches||[]){if(i<=0)break;if(r&&u.variantName!==r||!r&&u.variantName)continue;(u.location||"store")===t&&(parseFloat(u.remainingQty)||0)>0&&(u.location=a,i-=parseFloat(u.remainingQty))}return{success:!0,transferredQty:o,fromLocation:t,toLocation:a,newStoreStock:n.storeStock,newWarehouseStock:n.warehouseStock,totalStock:n.stock}},Tr=(e,t={})=>{if(!e||!t.supplierId)return e?.suppliers||[];We(e);const a=String(t.supplierId),s=e.suppliers.findIndex(o=>String(o.supplierId)===a);t.isPrimary&&(e.suppliers.forEach(o=>{o.isPrimary=!1}),e.supplierId=a);const r={supplierId:a,supplierName:t.supplierName||"Supplier Rekanan",lastBuyPrice:parseFloat(t.lastBuyPrice)||0,supplierSku:t.supplierSku||"",minOrderQty:parseFloat(t.minOrderQty)||1,leadTimeDays:parseInt(t.leadTimeDays,10)||0,isPrimary:!!t.isPrimary,updatedAt:new Date().toISOString()};return s>-1?e.suppliers[s]={...e.suppliers[s],...r}:(e.suppliers.length===0&&(r.isPrimary=!0,e.supplierId=a),e.suppliers.push(r)),e.suppliers},$r=(e,t)=>{if(!e||!t)return;We(e);const a=String(t);e.suppliers.forEach(s=>{s.isPrimary=String(s.supplierId)===a}),e.supplierId=a},Cr=e=>{if(!e)return{totalValuationRp:0,totalActiveQty:0,activeBatchesCount:0,batches:[]};We(e);const t=(e.stockBatches||[]).filter(r=>(parseFloat(r.remainingQty)||0)>0);let a=0,s=0;return t.forEach(r=>{const o=parseFloat(r.remainingQty)||0,n=parseFloat(r.buyPrice)||0;a+=o*n,s+=o}),{totalValuationRp:Math.round(a),totalActiveQty:parseFloat(s.toFixed(3)),activeBatchesCount:t.length,storeStock:parseFloat((e.storeStock||0).toFixed(3)),warehouseStock:parseFloat((e.warehouseStock||0).toFixed(3)),batches:t}},Wa=e=>{const t=m.products?.find(r=>r&&r.id!=null&&String(r.id)===String(e.id));let a=e.price||0;if(e.variantName&&t&&t.variants){const r=t.variants.find(o=>o.name===e.variantName);r&&r.price!=null&&(a=r.price)}if(e.variantName||!t||!t.wholesale||!t.wholesale.length)return a;const s=Ga.filter(r=>r.id!=null&&String(r.id)===String(e.id)).reduce((r,o)=>r+(parseFloat(o.qty)||0),0);for(let r of t.wholesale.slice().sort((o,n)=>n.minQty-o.minQty))if(s>=parseFloat(r.minQty))return r.price;return a},Je=e=>{const t=m.products?.find(a=>a&&a.id!=null&&String(a.id)===String(e.id));if(!t)return 0;if(e.variantName&&t.variants){const a=t.variants.find(s=>s.name===e.variantName);if(a&&a.hpp!=null)return parseFloat(a.hpp)||0}return parseFloat(t.hpp)||0},Ja=e=>{if(!e)return 0;const t=m.products?.find(a=>a&&a.id!=null&&String(a.id)===String(e.id));if(!t)return parseFloat(e.poin)||0;if(e.variantName&&t.variants){const a=t.variants.find(s=>s.name===e.variantName);if(a&&a.poin!==void 0&&a.poin!==null&&a.poin!==""){const s=parseFloat(a.poin);if(!isNaN(s)&&s>0)return s}}return parseFloat(t.poin)||0},Ys=(e,t,a,s)=>{if(!e||!t||!a||!s)return 0;const r=6371,o=(a-e)*Math.PI/180,n=(s-t)*Math.PI/180,d=Math.sin(o/2)*Math.sin(o/2)+Math.cos(e*Math.PI/180)*Math.cos(a*Math.PI/180)*Math.sin(n/2)*Math.sin(n/2),l=2*Math.atan2(Math.sqrt(d),Math.sqrt(1-d));return r*l},Ya=e=>{if(!e||typeof e!="string")return null;let t=e.trim();try{t=decodeURIComponent(t)}catch{}const a=t.match(/@(-?\d{1,3}\.\d+)[,\s]+(-?\d{1,3}\.\d+)/);if(a){const n=parseFloat(a[1]),d=parseFloat(a[2]);if(!isNaN(n)&&!isNaN(d)&&Math.abs(n)<=90&&Math.abs(d)<=180)return{lat:a[1],lng:a[2]}}const s=t.match(/[?&](?:q|ll|query|loc|center)=(-?\d{1,3}\.\d+)[,\s]+(-?\d{1,3}\.\d+)/i);if(s){const n=parseFloat(s[1]),d=parseFloat(s[2]);if(!isNaN(n)&&!isNaN(d)&&Math.abs(n)<=90&&Math.abs(d)<=180)return{lat:s[1],lng:s[2]}}const r=t.match(/(\d+)[°\s]+(\d+)['\s]+([\d.]+)"?\s*([NSns])[,\s]+(\d+)[°\s]+(\d+)['\s]+([\d.]+)"?\s*([EWew])/);if(r){let n=parseInt(r[1],10)+parseInt(r[2],10)/60+parseFloat(r[3])/3600;r[4].toUpperCase()==="S"&&(n=-n);let d=parseInt(r[5],10)+parseInt(r[6],10)/60+parseFloat(r[7])/3600;return r[8].toUpperCase()==="W"&&(d=-d),{lat:n.toFixed(8),lng:d.toFixed(8)}}const o=t.match(/(-?\d{1,3}\.\d{3,20})[,\s;\t]+(-?\d{1,3}\.\d{3,20})/);if(o){const n=parseFloat(o[1]),d=parseFloat(o[2]);if(!isNaN(n)&&!isNaN(d)&&Math.abs(n)<=90&&Math.abs(d)<=180)return{lat:o[1],lng:o[2]}}return null},Zs=e=>{const t=(typeof e=="string"?e:e?.value||"").trim(),a=Ya(t);return a?(Na("set-lat",a.lat),Na("set-lng",a.lng),y("Koordinat GPS berhasil disalin!"),a):(y("Format tidak dikenali! Tempel koordinat: Lat, Lng atau link Google Maps"),null)},Xs=(e=Ga,t=m.store)=>{if(!e||!e.length)return{totalPoints:0,directPoints:0,spendPoints:0,nonPointSpend:0,threshold:1e5,pointsPerThreshold:1,isSpendPointsActive:!1,remainingToNextPoint:0,progressPercent:0};let a=0,s=0;e.forEach(i=>{const u=Ja(i),k=parseFloat(i.qty)||0;if(u>0)a+=u*k;else{const v=Wa(i);s+=v*k}});let r=0,o=0,n=0;const d=t?t.spendPointsEnabled===!0||t.spendPointsEnabled==="true":!1,l=Math.max(1,parseFloat(t?.spendPointsThreshold)||1e5),c=Math.max(1,parseFloat(t?.spendPointsPerThreshold)||1);if(d&&s>0){const i=Math.floor(s/l);r=i*c;const u=s%l;o=u>0?l-u:l,n=Math.min(100,Math.round((u||(i>0?l:0))/l*100))}return{totalPoints:a+r,directPoints:a,spendPoints:r,nonPointSpend:s,threshold:l,pointsPerThreshold:c,isSpendPointsActive:d,remainingToNextPoint:o,progressPercent:n}},er=()=>{const e=m.store.useStock===!0||m.store.useStock==="true";let t=0,a=0,s=0,r=0,o=0,n=0;return(m.products||[]).forEach(d=>{if(d.variants&&d.variants.length)d.variants.forEach(l=>{const c=l.isActive!==!1&&l.isActive!=="false",i=parseFloat(l.stock)||0;c&&(!e||i>0)?s++:r++,o+=(parseFloat(l.hpp)||0)*i,n+=(parseFloat(l.price)||0)*i});else{const l=d.isActive!==!1&&d.isActive!=="false",c=parseFloat(d.stock)||0;l&&(!e||c>0)?t++:a++,o+=(parseFloat(d.hpp)||0)*c,n+=(parseFloat(d.price)||0)*c}}),{activeProd:t,inactiveProd:a,activeVar:s,inactiveVar:r,assetHpp:o,assetJual:n}},Za=e=>{if(!e)return{totalStock:0,hasStockData:!1,isManaged:!1,isOutOfStock:!0,isLowStock:!1,isInactive:!0,isPreorder:!1,poTime:""};const t=e.isActive!=="false"&&e.isActive!==!1,a=m?.store?.useStock===!0||m?.store?.useStock==="true",s=!!(e.poTime&&String(e.poTime).trim()),r=s?String(e.poTime).trim():"",o=Array.isArray(e.variants)&&e.variants.length>0;let n=0,d=!1;if(o){const S=e.variants.filter(P=>P&&P.isActive!==!1&&P.isActive!=="false");for(const P of S){const O=P.stock!=null&&P.stock!==""?P.stock:P.stok!=null&&P.stok!==""?P.stok:null;if(O!=null){const I=parseFloat(O);isNaN(I)||(d=!0,n+=I)}}}const l=e.stock!=null&&e.stock!==""?e.stock:e.stok!=null&&e.stok!==""?e.stok:null,c=l!=null&&!isNaN(parseFloat(l)),i=c?parseFloat(l):0;let u=0,k=!1;o&&d?(u=n,k=!0,u===0&&c&&i>0&&(u=i)):c?(u=i,k=!0):(u=0,k=!1);const v=a||k,x=!t||v&&u<=0&&!s,w=v&&u>0&&u<=5;return{totalStock:Math.max(0,u),hasStockData:k,isManaged:v,isOutOfStock:x,isLowStock:w,isInactive:!t,isPreorder:s,poTime:r}};window.getEffP=Wa;window.getEffHpp=Je;window.getEffPoin=Ja;window.calculateCartPoints=Xs;window.computeInventoryStats=er;window.computeTotalProductStock=Za;window.getDist=Ys;window.parseGeoCoordinates=Ya;window.autoParseCoords=Zs;let qe=null;const ge=()=>{if(qe)return qe;try{const e=sessionStorage.getItem("pos_cashier_session");if(e)return qe=JSON.parse(e),qe}catch{}return null},Wt=e=>{qe=e;try{e?sessionStorage.setItem("pos_cashier_session",JSON.stringify(e)):sessionStorage.removeItem("pos_cashier_session")}catch{}},Xa=()=>{qe=null;try{sessionStorage.removeItem("pos_cashier_session")}catch{}},es=()=>!!ge(),ts=async()=>{if(ge()||window.isAdm||window.__localIsAdm||m&&(m.hasCashier===!0||m.store?.posEnabled===!0))return!0;const e=localStorage.getItem("pos_has_cashier");if(e==="true")return!0;const t=!!(window.isAdm||window.__localIsAdm||fe.currentUser&&fe.currentUser.uid===za);try{if(t){const s=!(await B.collection("freshmart").doc("cms_data").collection("cashier_accounts").where("isActive","==",!0).limit(1).get()).empty;try{localStorage.setItem("pos_has_cashier",s?"true":"false"),B.collection("freshmart").doc("cms_data").set({hasCashier:s},{merge:!0}).catch(()=>{})}catch{}return s}else{const a=await B.collection("freshmart").doc("cms_data").get();if(a.exists){const s=a.data();if(s.hasCashier!==void 0){const r=!!s.hasCashier;try{localStorage.setItem("pos_has_cashier",r?"true":"false")}catch{}return r}}return e!=="false"}}catch{return e!=="false"}},nt=async()=>{const e=p("pos-cashier-header-btn");if(!e)return;const t=!!ge(),a=!!(window.isAdm||window.__localIsAdm),s=localStorage.getItem("pos_has_cashier"),r=m?m.hasCashier??!0:!0;t||a||s==="true"||s===null&&r!==!1?e.classList.remove("hidden"):s==="false"&&e.classList.add("hidden");try{await ts()||t||a?e.classList.remove("hidden"):e.classList.add("hidden")}catch{(t||a||s!=="false")&&e.classList.remove("hidden")}},as=async()=>{typeof window.triggerHaptic=="function"&&window.triggerHaptic("medium"),ge()?(typeof window.changeView=="function"&&window.changeView("view-pos-cashier"),typeof window.renderPOSStorefront=="function"&&window.renderPOSStorefront()):Zt()},Zt=()=>{const e=p("pos-login-modal");e&&(typeof window.pushModalHistory=="function"&&window.pushModalHistory("posLogin"),e.classList.remove("hidden"),setTimeout(()=>{e.classList.remove("opacity-0");const t=p("pos-login-modal-box");t&&t.classList.remove("translate-y-full","scale-95")},10),setTimeout(()=>{const t=p("pos-login-email");t&&t.focus()},300),typeof window.triggerHaptic=="function"&&window.triggerHaptic("light"))},Xt=(e=!1)=>{const t=()=>{const a=p("pos-login-modal"),s=p("pos-login-modal-box");a&&a.classList.add("opacity-0"),s&&s.classList.add("translate-y-full"),setTimeout(()=>{a&&a.classList.add("hidden");const r=p("pos-login-email"),o=p("pos-login-password"),n=p("pos-login-error");r&&(r.value=""),o&&(o.value=""),n&&(n.textContent="",n.classList.add("hidden"))},300)};typeof window.requestCloseModal=="function"?window.requestCloseModal("posLogin",e,t):t()},ss=async()=>{const e=p("pos-login-email"),t=p("pos-login-password"),a=p("pos-login-error"),s=p("pos-login-btn"),r=e?.value?.trim()||"",o=t?.value||"",n=l=>{if(a){a.classList.remove("hidden");const c=a.querySelector("span");c?c.textContent=l:a.textContent=l}typeof window.triggerHaptic=="function"&&window.triggerHaptic("error")};if((()=>{if(a){a.classList.add("hidden");const l=a.querySelector("span");l&&(l.textContent="")}})(),!r||!o){n("Email dan password wajib diisi.");return}s&&(s.disabled=!0,s.innerHTML='<i class="fa-solid fa-spinner fa-spin mr-2"></i>Memverifikasi...');try{const c=(await fe.signInWithEmailAndPassword(r,o)).user?.uid;if(!c)throw new Error("UID tidak ditemukan");if(c===za){Wt({uid:c,name:"Owner Toko",email:r,role:"owner"});try{localStorage.setItem("pos_has_cashier","true")}catch{}nt()}else{const k=await B.collection("freshmart").doc("cms_data").collection("cashier_accounts").doc(c).get();if(!k.exists){await fe.signOut(),n("Akun ini bukan akun staf/kasir yang terdaftar di toko ini.");return}const v=k.data()||{};if(v.isActive===!1){await fe.signOut(),n("Akun staf ini telah dinonaktifkan oleh Owner toko.");return}if(!(v.role==="cashier"||v.role==="admin"||v.role==="owner"||v.permissions?.pos!==!1)){await fe.signOut(),n("Akun ini tidak memiliki hak akses kasir POS.");return}Wt({uid:c,name:v.name||r,email:v.email||r,role:v.role||"cashier"});try{localStorage.setItem("pos_has_cashier","true")}catch{}nt()}typeof window.syncActiveShiftFromCloud=="function"&&window.syncActiveShiftFromCloud().catch(()=>{}),Xt();const i=ge();y(`Selamat datang, ${i?.name||"Kasir"}!`,"success"),typeof window.changeView=="function"&&window.changeView("view-pos-cashier"),setTimeout(()=>{typeof window.renderPOSStorefront=="function"&&window.renderPOSStorefront()},100),typeof window.triggerHaptic=="function"&&window.triggerHaptic("success")}catch(l){console.error("[POS Auth] Login error:",l);const c=l.code||"";n(c==="auth/user-not-found"||c==="auth/wrong-password"||c==="auth/invalid-credential"?"Email atau password salah.":c==="auth/too-many-requests"?"Terlalu banyak percobaan. Coba lagi beberapa saat.":c==="auth/network-request-failed"?"Koneksi gagal. Periksa jaringan internet.":"Login gagal: "+(l.message||"Kesalahan tidak diketahui"))}finally{s&&(s.disabled=!1,s.innerHTML='<i class="fa-solid fa-right-to-bracket mr-2"></i>Masuk Kasir')}},rs=(e=!1)=>{const t=document.getElementById("pos-logout-shift-modal");t&&(!e&&typeof window.requestCloseModal=="function"?window.requestCloseModal("posLogoutShift",!1,()=>t.remove()):t.remove())};typeof window<"u"&&(window.closePOSLogoutShiftModal=rs);const ea=async(e=!1)=>{if(!e&&typeof window.getActiveShift=="function"){const a=window.getActiveShift();if(a&&a.status==="open"){document.getElementById("pos-logout-shift-modal")?.remove();const s=typeof window.fRp=="function"?window.fRp(a.startingCash):"Rp "+a.startingCash;document.body.insertAdjacentHTML("beforeend",`
            <div id="pos-logout-shift-modal" class="fixed inset-0 z-[10005] flex items-center justify-center p-3 sm:p-4" style="background:rgba(15,23,42,0.8)" onclick="if(event.target===this) window.closePOSLogoutShiftModal && window.closePOSLogoutShiftModal()">
                <div class="bg-white dark:bg-slate-900 rounded-3xl shadow-2xl w-full max-w-sm border border-slate-200 dark:border-slate-800 p-5 text-center space-y-4" onclick="event.stopPropagation()">
                    <div class="w-14 h-14 rounded-2xl bg-amber-100 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 flex items-center justify-center text-2xl mx-auto shadow-inner">
                        <i class="fa-solid fa-triangle-exclamation"></i>
                    </div>
                    <div>
                        <h4 class="text-sm font-black text-slate-800 dark:text-white uppercase tracking-wider">Shift Kasir Masih Aktif</h4>
                        <p class="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                            Shift kasir Anda saat ini masih aktif dengan modal awal <b>${s}</b>. Apakah Anda ingin menutup shift &amp; merekap uang fisik laci kasir sekarang?
                        </p>
                    </div>
                    <div class="space-y-2 pt-1">
                        <button onclick="window.closePOSLogoutShiftModal(true); if(typeof window.openPOSCloseShiftModal==='function') window.openPOSCloseShiftModal();" class="w-full py-3 rounded-2xl bg-rose-600 hover:bg-rose-700 text-white font-black text-xs uppercase tracking-wider shadow-md active:scale-95 transition-all flex items-center justify-center gap-1.5 cursor-pointer">
                            <i class="fa-solid fa-lock"></i> Tutup Shift Sekarang
                        </button>
                        <button onclick="window.closePOSLogoutShiftModal(true); window.cashierLogout(true);" class="w-full py-2.5 rounded-2xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 font-bold text-xs transition-all cursor-pointer">
                            Tetap Logout (Shift Tetap Berjalan)
                        </button>
                        <button onclick="window.closePOSLogoutShiftModal()" class="w-full py-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 text-xs font-semibold cursor-pointer">
                            Batal
                        </button>
                    </div>
                </div>
            </div>`),typeof window.pushModalHistory=="function"&&window.pushModalHistory("posLogoutShift");return}}ge(),typeof window.detachPOSHistoryListener=="function"&&window.detachPOSHistoryListener(),typeof window.detachActiveShiftListener=="function"&&window.detachActiveShiftListener(),typeof window.clearActiveShift=="function"&&window.clearActiveShift();try{if(!window.isAdm&&!window.__localIsAdm)try{await fe.signOut()}catch{}}catch{}Xa();const t=p("view-pos-cashier");t&&(t.innerHTML=""),typeof window.destroyBarcodeListener=="function"&&window.destroyBarcodeListener(),typeof window.stopPOSClock=="function"&&window.stopPOSClock(),y("Sesi kasir berakhir. Sampai jumpa!"),typeof window.changeView=="function"&&window.changeView("view-catalog"),typeof window.triggerHaptic=="function"&&window.triggerHaptic("medium"),typeof window.updatePOSHeaderIcon=="function"&&window.updatePOSHeaderIcon()},os=async()=>{await nt()};window.openPOSCashierMode=as;window.openPOSLoginModal=Zt;window.closePOSLoginModal=Xt;window.processCashierLogin=ss;window.cashierLogout=ea;window.exitPOSMode=ea;window.getCashierSession=ge;window.isCashierLoggedIn=es;window.initPOSAuth=os;window.updatePOSHeaderIcon=nt;const Ar=Object.freeze(Object.defineProperty({__proto__:null,cashierLogout:ea,checkCashierExists:ts,clearCashierSession:Xa,closePOSLoginModal:Xt,closePOSLogoutShiftModal:rs,getCashierSession:ge,initPOSAuth:os,isCashierLoggedIn:es,openPOSCashierMode:as,openPOSLoginModal:Zt,processCashierLogin:ss,setCashierSession:Wt,updatePOSHeaderIcon:nt},Symbol.toStringTag,{value:"Module"})),C=e=>"Rp "+Math.round(parseFloat(e)||0).toLocaleString("id-ID"),ns=e=>parseFloat((parseFloat(e)||0).toFixed(3)).toString(),Ct="pos_active_shift",is="pos_last_closed_shift";let Ke=null,Pt=null;const At=()=>{if(typeof Pt=="function"){try{Pt()}catch{}Pt=null}},Ye=()=>{const e=typeof ge=="function"?ge():null,t=!!(window.isAdm||window.__localIsAdm||window.__currentAdminUid),a=fe?.currentUser?.uid,s=e?.uid||(t?window.__currentAdminUid||a||"admin":a||"cashier-anon"),r=e?.name||(t?"Admin Seller":"Kasir Toko"),o=e?.email||t&&fe?.currentUser?.email||"";return{uid:s,name:r,email:o,isAdm:t}},Ge=(e,t=Ye())=>{if(!e)return!1;const a=e.cashierUid;return!!(a&&t.uid&&a===t.uid||t.isAdm&&(a==="admin"||a==="ADMIN_UID"||a===window.__currentAdminUid||fe?.currentUser&&a===fe.currentUser.uid))},ee=()=>{if(Ke)return Ke;try{const e=localStorage.getItem(Ct);if(e)return Ke=JSON.parse(e),Ke}catch(e){console.warn("[POS Shift] Gagal membaca active shift:",e)}return null},Te=e=>{Ke=e;try{e?localStorage.setItem(Ct,JSON.stringify(e)):localStorage.removeItem(Ct)}catch{}},it=()=>{Ke=null;try{localStorage.removeItem(Ct)}catch{}},tr=()=>{try{const e=localStorage.getItem(is);if(e)return JSON.parse(e)}catch{}return null},ta=e=>{try{localStorage.setItem(is,JSON.stringify(e))}catch{}},Fe=()=>{const e=ee();return!!(e&&e.status==="open")},Ot=async(e=null)=>{const t=Ye();try{const a=await B.collection("freshmart").doc("cms_data").collection("pos_shifts").where("status","==","open").get();if(!a.empty){const s=[];if(a.forEach(r=>{const o={id:r.id,...r.data()};Ge(o,t)&&s.push(o)}),s.length>0)return s.sort((r,o)=>(o.startTime||0)-(r.startTime||0)),s[0]}}catch(a){console.warn("[POS Shift] Cek open shift cms_data:",a)}try{const a=await B.collection("pos_shifts").where("status","==","open").get();if(!a.empty){const s=[];if(a.forEach(r=>{const o={id:r.id,...r.data()};Ge(o,t)&&s.push(o)}),s.length>0)return s.sort((r,o)=>(o.startTime||0)-(r.startTime||0)),s[0]}}catch(a){console.warn("[POS Shift] Cek open shift root pos_shifts:",a)}return null},Be=e=>{if(e){At();try{Pt=B.collection("freshmart").doc("cms_data").collection("pos_shifts").doc(e).onSnapshot(a=>{if(!a.exists)return;const s={id:a.id,...a.data()};if(s.status==="closed"){At(),it(),ta(s),ut(),Ze(),Ne(),y("Shift kasir telah ditutup dari perangkat lain.","info"),typeof window.renderShiftHeaderBadge=="function"&&window.renderShiftHeaderBadge();return}if(s.status==="open"){Te(s),typeof window.renderShiftHeaderBadge=="function"&&window.renderShiftHeaderBadge();const r=p("pos-shift-summary-modal");r&&!r.classList.contains("opacity-0")&&ce()}},a=>{console.warn("[POS Shift] Snapshot listener cms_data error:",a)})}catch(t){console.warn("[POS Shift] Gagal attach snapshot listener:",t)}}},$e=async()=>{const e=Ye(),t=ee();if(t&&t.status==="open"&&Ge(t,e))try{const a=await B.collection("freshmart").doc("cms_data").collection("pos_shifts").doc(t.id).get();if(a.exists){const s={id:a.id,...a.data()};if(s.status==="closed")it(),ta(s),typeof window.renderShiftHeaderBadge=="function"&&window.renderShiftHeaderBadge();else return Te(s),Be(s.id),typeof window.renderShiftHeaderBadge=="function"&&window.renderShiftHeaderBadge(),s}}catch(a){return console.warn("[POS Shift] Gagal verifikasi local shift ke cloud:",a),Be(t.id),t}try{const a=await Ot(e.uid);if(a)return Te(a),Be(a.id),typeof window.renderShiftHeaderBadge=="function"&&window.renderShiftHeaderBadge(),a;t&&!Ge(t,e)&&(it(),typeof window.renderShiftHeaderBadge=="function"&&window.renderShiftHeaderBadge())}catch(a){console.warn("[POS Shift] Gagal cari shift open di cloud:",a)}return ee()},ls=(e="open")=>{try{if(typeof window<"u"&&typeof window.checkUserGesture=="function"&&!window.checkUserGesture())return;const t=window.AudioContext||window.webkitAudioContext;if(!t)return;const a=new t,s=a.currentTime;e==="open"?([523.25,659.25,783.99,1046.5].forEach((o,n)=>{const d=a.createOscillator(),l=a.createGain(),c=s+n*.07;d.type="sine",d.frequency.setValueAtTime(o,c),l.gain.setValueAtTime(.09,c),l.gain.exponentialRampToValueAtTime(1e-4,c+.16),d.connect(l),l.connect(a.destination),d.start(c),d.stop(c+.16)}),setTimeout(()=>{a.close().catch(()=>{})},600)):([{f:[783.99,987.77],t:s,d:.14},{f:[1046.5,1318.51],t:s+.12,d:.35}].forEach(o=>{o.f.forEach(n=>{const d=a.createOscillator(),l=a.createGain();d.type="triangle",d.frequency.setValueAtTime(n,o.t),l.gain.setValueAtTime(.08,o.t),l.gain.exponentialRampToValueAtTime(1e-4,o.t+o.d),d.connect(l),l.connect(a.destination),d.start(o.t),d.stop(o.t+o.d)})}),setTimeout(()=>{a.close().catch(()=>{})},700))}catch{}},aa=(e,t=Date.now())=>{if(!e)return"-";const a=Math.max(0,t-e),s=Math.floor(a/6e4),r=Math.floor(s/60),o=s%60;return r>0?`${r} Jam ${o} Menit`:`${o} Menit`},ar=()=>{const e=new Date,t=e.getFullYear(),a=String(e.getMonth()+1).padStart(2,"0"),s=String(e.getDate()).padStart(2,"0"),r=Math.floor(100+Math.random()*900);return`SHF-${t}${a}${s}-${r}`},oe=async()=>{const e=Ye(),t=ee();if(t&&t.status==="open"&&Ge(t,e)){y(`Shift kasir #${t.shiftNo||t.id} sedang aktif. Menampilkan ringkasan shift.`,"info"),ce();return}try{const d=await Ot(e.uid);if(d){Te(d),Be(d.id),typeof window.renderShiftHeaderBadge=="function"&&window.renderShiftHeaderBadge(),y(`Melanjutkan shift aktif (#${d.shiftNo||d.id}) dari perangkat lain!`,"success"),ce();return}}catch(d){console.warn("[POS Shift] Cek cloud saat buka modal:",d)}const a=e.name,s=new Date().toLocaleString("id-ID",{dateStyle:"full",timeStyle:"short"});document.getElementById("pos-open-shift-modal")?.remove();const r=`
    <div id="pos-open-shift-modal" class="fixed inset-0 z-[10001] flex items-center justify-center p-3 sm:p-4 transition-all duration-300 opacity-0 pointer-events-none" style="background:rgba(15,23,42,0.75)">
        <div id="pos-open-shift-box" class="bg-white dark:bg-slate-900 rounded-3xl shadow-2xl w-full max-w-md border border-slate-200/90 dark:border-slate-800 overflow-hidden transform translate-y-8 scale-95 transition-all duration-300 flex flex-col">
            <!-- Header Modal -->
            <div class="px-5 py-4 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between bg-slate-50/80 dark:bg-slate-800/40">
                <div class="flex items-center gap-3">
                    <div class="w-10 h-10 rounded-2xl flex items-center justify-center text-white text-base shadow-sm shrink-0" style="background:linear-gradient(135deg, var(--color-primary-light,#e1b858) 0%, var(--color-primary,#c59b27) 60%, var(--color-primary-dark,#a87f1b) 100%);box-shadow:0 3px 10px rgba(var(--color-primary-rgb),0.35)">
                        <i class="fa-solid fa-cash-register"></i>
                    </div>
                    <div>
                        <h3 class="text-sm font-black text-slate-800 dark:text-white uppercase tracking-wider">Buka Shift Kasir Baru</h3>
                        <p class="text-[11px] text-slate-500 dark:text-slate-400">Modal awal laci &amp; pembukaan kas</p>
                    </div>
                </div>
                <button onclick="window.closePOSOpenShiftModal()" class="w-8 h-8 rounded-xl bg-slate-200/60 dark:bg-slate-800 hover:bg-slate-300 text-slate-600 dark:text-slate-300 flex items-center justify-center text-sm transition-all cursor-pointer">×</button>
            </div>

            <!-- Body Modal -->
            <div class="p-5 space-y-4">
                <!-- Info Petugas & Waktu -->
                <div class="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60 flex items-center justify-between text-xs">
                    <div class="flex items-center gap-2">
                        <div class="w-7 h-7 rounded-xl bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center text-xs font-bold">
                            <i class="fa-solid fa-user-check"></i>
                        </div>
                        <div>
                            <span class="text-[10px] text-slate-400 block font-medium">Kasir Bertugas</span>
                            <span class="font-bold text-slate-800 dark:text-slate-200">${b(a)}</span>
                        </div>
                    </div>
                    <div class="text-right">
                        <span class="text-[10px] text-slate-400 block font-medium">Waktu Buka</span>
                        <span class="font-bold text-slate-700 dark:text-slate-300 text-[11px]">${b(s)}</span>
                    </div>
                </div>

                <!-- Input Modal Awal / Cash Float -->
                <div class="space-y-1.5">
                    <label class="block text-xs font-bold text-slate-700 dark:text-slate-200 flex items-center justify-between">
                        <span class="flex items-center gap-1.5">
                            <i class="fa-solid fa-money-bill-wave text-emerald-500"></i>
                            <span>Modal Awal Laci (Uang Kembalian)</span>
                        </span>
                        <span class="text-[10px] font-normal text-slate-400">Cash Float</span>
                    </label>
                    <div class="relative">
                        <span class="absolute left-3.5 top-1/2 -translate-y-1/2 font-black text-sm text-slate-400 pointer-events-none">Rp</span>
                        <input id="pos-shift-start-cash-input" type="number" min="0" step="1000" placeholder="0" 
                            class="w-full pl-12 pr-4 py-3 rounded-2xl border-2 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-white font-black text-base focus:outline-none focus:border-[var(--color-primary)] transition-all text-right"
                            value="100000" oninput="window.posUpdateStartCashChips()">
                    </div>
                    <!-- Quick Amount Chips (Reactive Theme Sync) -->
                    <div id="pos-shift-preset-chips" class="flex items-center gap-1.5 flex-wrap pt-1">
                        <button type="button" data-amount="0" onclick="window.posSetStartCashPreset(0)" class="pos-preset-chip px-2.5 py-1 rounded-xl text-[10px] font-bold border border-slate-200 dark:border-slate-700 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition-all cursor-pointer">Rp 0</button>
                        <button type="button" data-amount="50000" onclick="window.posSetStartCashPreset(50000)" class="pos-preset-chip px-2.5 py-1 rounded-xl text-[10px] font-bold border border-slate-200 dark:border-slate-700 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition-all cursor-pointer">50.000</button>
                        <button type="button" data-amount="100000" onclick="window.posSetStartCashPreset(100000)" class="pos-preset-chip px-2.5 py-1 rounded-xl text-[10px] font-black border-2 border-[var(--color-primary)] text-[var(--color-primary)] bg-[rgba(var(--color-primary-rgb),0.1)] shadow-xs transition-all cursor-pointer">100.000</button>
                        <button type="button" data-amount="200000" onclick="window.posSetStartCashPreset(200000)" class="pos-preset-chip px-2.5 py-1 rounded-xl text-[10px] font-bold border border-slate-200 dark:border-slate-700 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition-all cursor-pointer">200.000</button>
                        <button type="button" data-amount="500000" onclick="window.posSetStartCashPreset(500000)" class="pos-preset-chip px-2.5 py-1 rounded-xl text-[10px] font-bold border border-slate-200 dark:border-slate-700 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition-all cursor-pointer">500.000</button>
                    </div>
                </div>

                <!-- Catatan Pembukaan (Opsional) -->
                <div class="space-y-1">
                    <label class="block text-xs font-bold text-slate-700 dark:text-slate-200">
                        <i class="fa-regular fa-clipboard text-slate-400 mr-1"></i>Catatan Pembukaan (Opsional)
                    </label>
                    <input id="pos-shift-start-notes-input" type="text" placeholder="Contoh: Uang pecahan kecil lengkap, shift pagi"
                        class="w-full px-3.5 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs text-slate-800 dark:text-slate-200 focus:outline-none focus:border-[var(--color-primary)]">
                </div>

                <!-- Hint Info Box -->
                <div class="p-3 rounded-xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200/80 dark:border-amber-800/60 flex items-start gap-2.5 text-[11px] text-amber-800 dark:text-amber-300">
                    <i class="fa-solid fa-lightbulb text-amber-500 mt-0.5 shrink-0"></i>
                    <span>Modal awal akan dihitung bersama total penjualan tunai saat Anda melakukan tutup kasir (settlement) di akhir shift.</span>
                </div>
            </div>

            <!-- Footer Action Buttons -->
            <div class="p-4 border-t border-slate-100 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-800/40 flex items-center gap-2">
                <button onclick="window.closePOSOpenShiftModal()" class="flex-1 py-3 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-bold text-xs hover:bg-slate-100 transition-all cursor-pointer">
                    Batal
                </button>
                <button onclick="window.confirmStartPOSShift()" class="flex-[2] py-3 rounded-2xl text-white font-black text-xs uppercase tracking-wider shadow-lg active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer hover:brightness-105" style="background:linear-gradient(135deg, var(--color-primary-light,#e1b858) 0%, var(--color-primary,#c59b27) 50%, var(--color-primary-dark,#a87f1b) 100%);box-shadow:0 4px 14px rgba(var(--color-primary-rgb),0.35)">
                    <i class="fa-solid fa-check"></i>
                    <span>Buka Shift Sekarang</span>
                </button>
            </div>
        </div>
    </div>`;document.body.insertAdjacentHTML("beforeend",r);const o=p("pos-open-shift-modal"),n=p("pos-open-shift-box");!o||!n||(o.classList.remove("pointer-events-none"),typeof window.pushModalHistory=="function"&&window.pushModalHistory("posOpenShift"),requestAnimationFrame(()=>{o.classList.remove("opacity-0"),n.classList.remove("translate-y-8","scale-95")}),setTimeout(()=>{const d=p("pos-shift-start-cash-input");d&&(d.focus(),d.select())},250))},Ne=(e=!1)=>{const t=()=>{const a=p("pos-open-shift-modal"),s=p("pos-open-shift-box");a&&(a.classList.add("opacity-0","pointer-events-none"),s&&s.classList.add("translate-y-8","scale-95"),setTimeout(()=>{a.remove()},280))};typeof window.requestCloseModal=="function"?window.requestCloseModal("posOpenShift",e,t):t()},ds=()=>{const e=parseFloat(p("pos-shift-start-cash-input")?.value)||0;document.querySelectorAll(".pos-preset-chip").forEach(t=>{parseFloat(t.dataset.amount)===e?t.className="pos-preset-chip px-2.5 py-1 rounded-xl text-[10px] font-black border-2 border-[var(--color-primary)] text-[var(--color-primary)] bg-[rgba(var(--color-primary-rgb),0.1)] shadow-xs transition-all cursor-pointer":t.className="pos-preset-chip px-2.5 py-1 rounded-xl text-[10px] font-bold border border-slate-200 dark:border-slate-700 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition-all cursor-pointer"})},sr=e=>{const t=p("pos-shift-start-cash-input");t&&(t.value=e,t.focus(),t.select()),ds()},rr=async()=>{const e=p("pos-shift-start-cash-input"),t=p("pos-shift-start-notes-input"),a=parseFloat(e?.value)||0,s=t?.value?.trim()||"",r=Ye(),o=r.uid,n=r.name,d=r.email,l=document.querySelector('#pos-open-shift-box button[onclick*="confirmStartPOSShift"]');l&&(l.disabled=!0,l.innerHTML='<i class="fa-solid fa-spinner fa-spin mr-1.5"></i><span>Memverifikasi Shift...</span>');try{const i=await Ot(o);if(i){Ne(),Te(i),Be(i.id),typeof window.renderShiftHeaderBadge=="function"&&window.renderShiftHeaderBadge(),y(`Akun kasir sudah memiliki shift aktif (#${i.shiftNo||i.id}). Melanjutkan shift berjalan.`,"warning"),ce();return}}catch(i){console.warn("[POS Shift] Pre-flight check error:",i)}const c={id:"SHF-"+Date.now(),shiftNo:ar(),cashierUid:o,cashierName:n,cashierEmail:d,startTime:Date.now(),startTimeISO:new Date().toISOString(),startingCash:a,startNotes:s,status:"open",txCount:0,itemCount:0,totalSales:0,cashSales:0,qrisSales:0,bankSales:0,tempoSales:0,discountTotal:0,pointsTotal:0,orders:[]};Te(c),Be(c.id);try{await Promise.all([B.collection("freshmart").doc("cms_data").collection("pos_shifts").doc(c.id).set(c),B.collection("pos_shifts").doc(c.id).set(c)])}catch{}Ne(),ls("open"),y(`Shift kasir dibuka! Modal awal: ${C(a)}`,"success"),typeof window.renderShiftHeaderBadge=="function"&&window.renderShiftHeaderBadge()},cs=e=>{try{const t=ee();if(!t||t.status!=="open")return;const a=parseFloat(e.total)||0,s=e.payment?.method||"cash",r=parseFloat(e.payment?.tempoDp??e.payment?.dp??e.payment?.paid)||0,o=parseFloat(e.payment?.tempoBalance)||0,n=parseFloat(e.globalDiscount)||0,d=parseFloat(e.pointsEarned)||0,l=(e.items||[]).reduce((c,i)=>c+(parseFloat(i.qty)||0),0);t.txCount=(t.txCount||0)+1,t.itemCount=parseFloat(((t.itemCount||0)+l).toFixed(3)),t.totalSales=(t.totalSales||0)+a,t.discountTotal=(t.discountTotal||0)+n,t.pointsTotal=(t.pointsTotal||0)+d,s==="cash"?t.cashSales=(t.cashSales||0)+a:s==="qris"?t.qrisSales=(t.qrisSales||0)+a:s==="bank"?t.bankSales=(t.bankSales||0)+a:s==="tempo"&&(r>0&&(t.cashSales=(t.cashSales||0)+r),t.tempoSales=(t.tempoSales||0)+o),Array.isArray(t.orders)||(t.orders=[]),(e.txId||e.id)&&t.orders.push(e.txId||e.id),Te(t);try{const c={txCount:t.txCount,itemCount:t.itemCount,totalSales:t.totalSales,cashSales:t.cashSales,qrisSales:t.qrisSales,bankSales:t.bankSales,tempoSales:t.tempoSales,discountTotal:t.discountTotal,pointsTotal:t.pointsTotal,orders:t.orders,lastUpdatedISO:new Date().toISOString()};B.collection("freshmart").doc("cms_data").collection("pos_shifts").doc(t.id).update(c).catch(()=>{}),B.collection("pos_shifts").doc(t.id).update(c).catch(()=>{})}catch{}typeof window.renderShiftHeaderBadge=="function"&&window.renderShiftHeaderBadge()}catch(t){console.warn("[POS Shift] Gagal update transaksi ke shift:",t)}},or=(e,t,a="")=>{try{const s=ee();if(!s||s.status!=="open")return!1;const r=parseFloat(e)||0;if(r<=0)return!1;s.cashSales=(s.cashSales||0)+r,s.tempoInstallmentCash=(s.tempoInstallmentCash||0)+r,Array.isArray(s.tempoPayments)||(s.tempoPayments=[]),s.tempoPayments.push({orderId:t,amount:r,timestamp:Date.now(),note:a||`Cicilan Piutang #${t}`}),Te(s);try{const o={cashSales:s.cashSales,tempoInstallmentCash:s.tempoInstallmentCash,tempoPayments:s.tempoPayments,lastUpdatedISO:new Date().toISOString()};B.collection("freshmart").doc("cms_data").collection("pos_shifts").doc(s.id).update(o).catch(()=>{}),B.collection("pos_shifts").doc(s.id).update(o).catch(()=>{})}catch{}return typeof window.renderShiftHeaderBadge=="function"&&window.renderShiftHeaderBadge(),!0}catch(s){return console.warn("[POS Shift] Gagal rekam pembayaran cicilan ke shift:",s),!1}},ce=()=>{const e=ee();if(!e){oe();return}document.getElementById("pos-shift-summary-modal")?.remove();const t=(parseFloat(e.startingCash)||0)+(parseFloat(e.cashSales)||0),a=aa(e.startTime),s=new Date(e.startTime).toLocaleString("id-ID",{dateStyle:"medium",timeStyle:"short"}),r=`
    <div id="pos-shift-summary-modal" class="fixed inset-0 z-[10001] flex items-center justify-center p-3 sm:p-4 transition-all duration-300 opacity-0 pointer-events-none" style="background:rgba(15,23,42,0.75)">
        <div id="pos-shift-summary-box" class="bg-white dark:bg-slate-900 rounded-3xl shadow-2xl w-full max-w-lg border border-slate-200/90 dark:border-slate-800 overflow-hidden transform translate-y-8 scale-95 transition-all duration-300 flex flex-col max-h-[92vh]">
            <!-- Header Modal -->
            <div class="px-5 py-4 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between bg-slate-50/80 dark:bg-slate-800/40">
                <div class="flex items-center gap-3">
                    <div class="w-10 h-10 rounded-2xl flex items-center justify-center text-white text-base shadow-sm shrink-0" style="background:linear-gradient(135deg, var(--color-primary-light,#e1b858) 0%, var(--color-primary,#c59b27) 60%, var(--color-primary-dark,#a87f1b) 100%);box-shadow:0 3px 10px rgba(var(--color-primary-rgb),0.35)">
                        <i class="fa-solid fa-chart-pie"></i>
                    </div>
                    <div>
                        <div class="flex items-center gap-2">
                            <h3 class="text-sm font-black text-slate-800 dark:text-white uppercase tracking-wider">Ringkasan Shift Kasir</h3>
                            <span class="px-2 py-0.5 rounded-full text-[9px] font-black uppercase tracking-wider bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800">X-Report</span>
                        </div>
                        <p class="text-[11px] text-slate-500 dark:text-slate-400">Shift aktif: <b>${b(e.shiftNo||e.id)}</b></p>
                    </div>
                </div>
                <button onclick="window.closePOSShiftSummaryModal()" class="w-8 h-8 rounded-xl bg-slate-200/60 dark:bg-slate-800 hover:bg-slate-300 text-slate-600 dark:text-slate-300 flex items-center justify-center text-sm transition-all cursor-pointer">×</button>
            </div>

            <!-- Body Modal -->
            <div class="p-5 space-y-4 overflow-y-auto flex-1">
                <!-- Info Kasir & Durasi -->
                <div class="grid grid-cols-2 gap-2.5">
                    <div class="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60">
                        <span class="text-[10px] text-slate-400 block font-medium">Kasir Bertugas</span>
                        <span class="font-bold text-slate-800 dark:text-slate-200 text-xs truncate block">${b(e.cashierName)}</span>
                        <span class="text-[10px] text-slate-500 mt-0.5 block">Mulai: ${b(s)}</span>
                    </div>
                    <div class="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60">
                        <span class="text-[10px] text-slate-400 block font-medium">Durasi Kerja</span>
                        <span class="font-bold text-emerald-600 dark:text-emerald-400 text-xs block">${b(a)}</span>
                        <span class="text-[10px] text-slate-500 mt-0.5 block">${e.txCount||0} Struk / ${ns(e.itemCount||0)} Item</span>
                    </div>
                </div>

                <!-- Kartu Utama: Kas di Laci Saat Ini (Expected Cash) -->
                <div class="p-4 rounded-2xl bg-gradient-to-br from-emerald-500/10 via-emerald-500/5 to-transparent border-2 border-emerald-500/30 flex items-center justify-between">
                    <div>
                        <span class="text-[11px] font-bold text-emerald-700 dark:text-emerald-300 uppercase tracking-wider block">Uang Kas di Laci Seharusnya</span>
                        <span class="text-[10px] text-slate-500 dark:text-slate-400">Modal Awal (${C(e.startingCash)}) + Penjualan Tunai (${C(e.cashSales||0)})</span>
                    </div>
                    <div class="text-right">
                        <span class="text-xl font-black text-emerald-600 dark:text-emerald-400 block">${C(t)}</span>
                    </div>
                </div>

                <!-- Rincian Omset Penjualan -->
                <div class="space-y-2">
                    <div class="flex items-center justify-between text-xs font-bold text-slate-700 dark:text-slate-200 border-b border-slate-100 dark:border-slate-800 pb-1.5">
                        <span class="flex items-center gap-1.5"><i class="fa-solid fa-receipt text-slate-400"></i>Rincian Metode Pembayaran</span>
                        <span class="text-slate-500 text-[11px]">Total Omset: <b style="color:var(--color-primary)">${C(e.totalSales||0)}</b></span>
                    </div>

                    <div class="space-y-1.5 text-xs">
                        <div class="flex justify-between items-center p-2 rounded-xl bg-slate-50 dark:bg-slate-800/40">
                            <span class="text-slate-600 dark:text-slate-300 flex items-center gap-2">
                                <span class="w-6 h-6 rounded-lg bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 flex items-center justify-center text-[10px]"><i class="fa-solid fa-money-bill-wave"></i></span>
                                <span>Tunai (Cash)</span>
                            </span>
                            <span class="font-bold text-slate-800 dark:text-white">${C(e.cashSales||0)}</span>
                        </div>
                        ${(e.tempoInstallmentCash||0)>0?`
                        <div class="flex justify-between items-center p-2 rounded-xl bg-amber-50/70 dark:bg-amber-950/30 border border-amber-200/60 dark:border-amber-800/40 text-[11px]">
                            <span class="text-amber-700 dark:text-amber-300 flex items-center gap-2">
                                <span class="w-6 h-6 rounded-lg bg-amber-100 dark:bg-amber-900/60 text-amber-600 flex items-center justify-center text-[10px]"><i class="fa-solid fa-hand-holding-dollar"></i></span>
                                <span>Dari Cicilan Piutang (Kas Masuk)</span>
                            </span>
                            <span class="font-bold text-amber-700 dark:text-amber-300">+${C(e.tempoInstallmentCash)}</span>
                        </div>`:""}
                        <div class="flex justify-between items-center p-2 rounded-xl bg-slate-50 dark:bg-slate-800/40">
                            <span class="text-slate-600 dark:text-slate-300 flex items-center gap-2">
                                <span class="w-6 h-6 rounded-lg bg-indigo-100 dark:bg-indigo-950/60 text-indigo-600 flex items-center justify-center text-[10px]"><i class="fa-solid fa-qrcode"></i></span>
                                <span>QRIS Dinamis</span>
                            </span>
                            <span class="font-bold text-slate-800 dark:text-white">${C(e.qrisSales||0)}</span>
                        </div>
                        <div class="flex justify-between items-center p-2 rounded-xl bg-slate-50 dark:bg-slate-800/40">
                            <span class="text-slate-600 dark:text-slate-300 flex items-center gap-2">
                                <span class="w-6 h-6 rounded-lg bg-blue-100 dark:bg-blue-950/60 text-blue-600 flex items-center justify-center text-[10px]"><i class="fa-solid fa-building-columns"></i></span>
                                <span>Transfer Bank</span>
                            </span>
                            <span class="font-bold text-slate-800 dark:text-white">${C(e.bankSales||0)}</span>
                        </div>
                        <div class="flex justify-between items-center p-2 rounded-xl bg-slate-50 dark:bg-slate-800/40">
                            <span class="text-slate-600 dark:text-slate-300 flex items-center gap-2">
                                <span class="w-6 h-6 rounded-lg bg-amber-100 dark:bg-amber-950/60 text-amber-600 flex items-center justify-center text-[10px]"><i class="fa-solid fa-clock-rotate-left"></i></span>
                                <span>Tempo / Piutang (Sisa)</span>
                            </span>
                            <span class="font-bold text-slate-800 dark:text-white">${C(e.tempoSales||0)}</span>
                        </div>
                    </div>
                </div>

                <!-- Diskon & Poin -->
                <div class="grid grid-cols-2 gap-2 text-xs">
                    <div class="p-2.5 rounded-xl bg-rose-50 dark:bg-rose-950/20 border border-rose-200/60 dark:border-rose-800/40">
                        <span class="text-[10px] text-rose-500 block font-bold">Total Diskon Diberikan</span>
                        <span class="font-black text-rose-600 dark:text-rose-400 text-xs">${C(e.discountTotal||0)}</span>
                    </div>
                    <div class="p-2.5 rounded-xl bg-amber-50 dark:bg-amber-950/20 border border-amber-200/60 dark:border-amber-800/40">
                        <span class="text-[10px] text-amber-600 block font-bold">Poin Member Dikreditkan</span>
                        <span class="font-black text-amber-600 dark:text-amber-400 text-xs">+${e.pointsTotal||0} Poin</span>
                    </div>
                </div>
            </div>

            <!-- Footer Action Buttons -->
            <div class="p-4 border-t border-slate-100 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-800/40 flex items-center gap-2">
                <button onclick="window.printShiftSettlementReceipt(window.getActiveShift(), true)" class="px-3.5 py-3 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-bold text-xs hover:bg-slate-100 dark:hover:bg-slate-700 transition-all flex items-center gap-1.5 cursor-pointer shadow-xs active:scale-95" title="Preview & Cetak Slip Sementara (X-Report)">
                    <i class="fa-solid fa-eye text-emerald-500"></i>
                    <i class="fa-solid fa-print"></i>
                    <span class="hidden sm:inline">Preview X-Report</span>
                </button>
                <button onclick="window.closePOSShiftSummaryModal()" class="flex-1 py-3 rounded-2xl bg-slate-200/70 hover:bg-slate-300 dark:bg-slate-700 dark:hover:bg-slate-600 text-slate-700 dark:text-slate-200 font-bold text-xs transition-all cursor-pointer active:scale-95">
                    <span class="sm:hidden">Lanjut Shift</span>
                    <span class="hidden sm:inline">Lanjut Jaga Kasir</span>
                </button>
                <button onclick="window.closePOSShiftSummaryModal(); window.openPOSCloseShiftModal();" class="flex-1 py-3 rounded-2xl bg-rose-600 hover:bg-rose-700 text-white font-black text-xs uppercase tracking-wider shadow-lg active:scale-95 transition-all flex items-center justify-center gap-1.5 cursor-pointer">
                    <i class="fa-solid fa-lock"></i>
                    <span>Tutup Shift</span>
                </button>
            </div>
        </div>
    </div>`;document.body.insertAdjacentHTML("beforeend",r);const o=p("pos-shift-summary-modal"),n=p("pos-shift-summary-box");!o||!n||(o.classList.remove("pointer-events-none"),typeof window.pushModalHistory=="function"&&window.pushModalHistory("posShiftSummary"),requestAnimationFrame(()=>{o.classList.remove("opacity-0"),n.classList.remove("translate-y-8","scale-95")}))},ut=(e=!1)=>{const t=()=>{const a=p("pos-shift-summary-modal"),s=p("pos-shift-summary-box");a&&(a.classList.add("opacity-0","pointer-events-none"),s&&s.classList.add("translate-y-8","scale-95"),setTimeout(()=>{a.remove()},280))};typeof window.requestCloseModal=="function"?window.requestCloseModal("posShiftSummary",e,t):t()},sa=()=>{const e=ee();if(!e){y("Tidak ada shift kasir yang aktif saat ini.","warning");return}document.getElementById("pos-close-shift-modal")?.remove();const t=(parseFloat(e.startingCash)||0)+(parseFloat(e.cashSales)||0),a=`
    <div id="pos-close-shift-modal" class="fixed inset-0 z-[10001] flex items-center justify-center p-3 sm:p-4 transition-all duration-300 opacity-0 pointer-events-none" style="background:rgba(15,23,42,0.8)">
        <div id="pos-close-shift-box" class="bg-white dark:bg-slate-900 rounded-3xl shadow-2xl w-full max-w-lg border border-slate-200/90 dark:border-slate-800 overflow-hidden transform translate-y-8 scale-95 transition-all duration-300 flex flex-col max-h-[94vh]">
            <!-- Header Modal -->
            <div class="px-5 py-4 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between bg-slate-50/80 dark:bg-slate-800/40">
                <div class="flex items-center gap-3">
                    <div class="w-10 h-10 rounded-2xl flex items-center justify-center text-white text-base shadow-sm shrink-0 bg-rose-600">
                        <i class="fa-solid fa-lock"></i>
                    </div>
                    <div>
                        <div class="flex items-center gap-2">
                            <h3 class="text-sm font-black text-slate-800 dark:text-white uppercase tracking-wider">Rekap &amp; Tutup Shift Kasir</h3>
                            <span class="px-2 py-0.5 rounded-full text-[9px] font-black uppercase tracking-wider bg-rose-100 dark:bg-rose-950/60 text-rose-700 dark:text-rose-300 border border-rose-300 dark:border-rose-800">Z-Report</span>
                        </div>
                        <p class="text-[11px] text-slate-500 dark:text-slate-400">Rekonsiliasi uang kas di laci kasir</p>
                    </div>
                </div>
                <button onclick="window.closePOSCloseShiftModal()" class="w-8 h-8 rounded-xl bg-slate-200/60 dark:bg-slate-800 hover:bg-slate-300 text-slate-600 dark:text-slate-300 flex items-center justify-center text-sm transition-all cursor-pointer">×</button>
            </div>

            <!-- Body Modal -->
            <div class="p-5 space-y-4 overflow-y-auto flex-1">
                <!-- Info Uang Kas Sistem -->
                <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 flex items-center justify-between">
                    <div>
                        <span class="text-[10px] uppercase font-black text-slate-400 block tracking-wider">Uang Kas Sistem (Seharusnya di Laci)</span>
                        <div class="text-xs text-slate-600 dark:text-slate-300 mt-0.5">
                            Modal Awal: <b>${C(e.startingCash)}</b> + Kas Masuk: <b>${C(e.cashSales||0)}</b>${(e.tempoInstallmentCash||0)>0?` <span class="text-amber-600 dark:text-amber-400 font-semibold">(incl. Cicilan +${C(e.tempoInstallmentCash)})</span>`:""}
                        </div>
                    </div>
                    <div class="text-right">
                        <span id="pos-close-expected-cash" class="text-lg font-black text-slate-900 dark:text-white">${C(t)}</span>
                    </div>
                </div>

                <!-- Pengalih Mode Hitung Fisik (Quick vs Denominasi) -->
                <div class="space-y-2">
                    <div class="flex items-center justify-between">
                        <label class="text-xs font-bold text-slate-700 dark:text-slate-200 flex items-center gap-1.5">
                            <i class="fa-solid fa-calculator text-emerald-500"></i>
                            <span>Hitung Uang Fisik di Laci</span>
                        </label>
                        <div class="flex items-center bg-slate-200 dark:bg-slate-800 rounded-xl p-0.5 text-[10px]">
                            <button type="button" id="pos-count-tab-quick" onclick="window.setPOSCountMode('quick')" class="px-2.5 py-1 rounded-lg font-black bg-white dark:bg-slate-700 text-slate-800 dark:text-white shadow-xs transition-all cursor-pointer">Input Cepat</button>
                            <button type="button" id="pos-count-tab-denom" onclick="window.setPOSCountMode('denom')" class="px-2.5 py-1 rounded-lg font-bold text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-white transition-all cursor-pointer">Lembaran (Denominasi)</button>
                        </div>
                    </div>

                    <!-- Panel Input Cepat -->
                    <div id="pos-count-panel-quick" class="space-y-1.5">
                        <div class="relative">
                            <span class="absolute left-3.5 top-1/2 -translate-y-1/2 font-black text-sm text-slate-400 pointer-events-none">Rp</span>
                            <input id="pos-shift-actual-cash-input" type="number" min="0" step="1000" placeholder="0" 
                                class="w-full pl-12 pr-4 py-3 rounded-2xl border-2 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-white font-black text-base focus:outline-none focus:border-[var(--color-primary)] transition-all text-right"
                                value="${t}" oninput="window.updatePOSShiftDiscrepancy()">
                        </div>
                    </div>

                    <!-- Panel Kalkulator Denominasi -->
                    <div id="pos-count-panel-denom" class="hidden space-y-2 p-3 bg-slate-50 dark:bg-slate-800/40 rounded-2xl border border-slate-200/70 dark:border-slate-700/60">
                        <div class="grid grid-cols-2 gap-2 text-xs">
                            <div class="flex items-center justify-between bg-white dark:bg-slate-800 px-2 sm:px-2.5 py-1.5 sm:py-2 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 transition-all">
                                <span class="font-bold text-slate-700 dark:text-slate-200 text-[10px] sm:text-[11px] whitespace-nowrap">Rp 100.000</span>
                                <div class="flex items-center gap-1 shrink-0">
                                    <span class="text-[10px] text-slate-400">×</span>
                                    <input type="number" min="0" id="denom-100k" placeholder="0" class="w-12 sm:w-16 px-1.5 py-1 text-right font-black text-xs border border-slate-200 dark:border-slate-700 rounded-lg bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-white focus:outline-none focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)] transition-all" oninput="window.calcPOSDenominations()">
                                </div>
                            </div>
                            <div class="flex items-center justify-between bg-white dark:bg-slate-800 px-2 sm:px-2.5 py-1.5 sm:py-2 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 transition-all">
                                <span class="font-bold text-slate-700 dark:text-slate-200 text-[10px] sm:text-[11px] whitespace-nowrap">Rp 50.000</span>
                                <div class="flex items-center gap-1 shrink-0">
                                    <span class="text-[10px] text-slate-400">×</span>
                                    <input type="number" min="0" id="denom-50k" placeholder="0" class="w-12 sm:w-16 px-1.5 py-1 text-right font-black text-xs border border-slate-200 dark:border-slate-700 rounded-lg bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-white focus:outline-none focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)] transition-all" oninput="window.calcPOSDenominations()">
                                </div>
                            </div>
                            <div class="flex items-center justify-between bg-white dark:bg-slate-800 px-2 sm:px-2.5 py-1.5 sm:py-2 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 transition-all">
                                <span class="font-bold text-slate-700 dark:text-slate-200 text-[10px] sm:text-[11px] whitespace-nowrap">Rp 20.000</span>
                                <div class="flex items-center gap-1 shrink-0">
                                    <span class="text-[10px] text-slate-400">×</span>
                                    <input type="number" min="0" id="denom-20k" placeholder="0" class="w-12 sm:w-16 px-1.5 py-1 text-right font-black text-xs border border-slate-200 dark:border-slate-700 rounded-lg bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-white focus:outline-none focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)] transition-all" oninput="window.calcPOSDenominations()">
                                </div>
                            </div>
                            <div class="flex items-center justify-between bg-white dark:bg-slate-800 px-2 sm:px-2.5 py-1.5 sm:py-2 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 transition-all">
                                <span class="font-bold text-slate-700 dark:text-slate-200 text-[10px] sm:text-[11px] whitespace-nowrap">Rp 10.000</span>
                                <div class="flex items-center gap-1 shrink-0">
                                    <span class="text-[10px] text-slate-400">×</span>
                                    <input type="number" min="0" id="denom-10k" placeholder="0" class="w-12 sm:w-16 px-1.5 py-1 text-right font-black text-xs border border-slate-200 dark:border-slate-700 rounded-lg bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-white focus:outline-none focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)] transition-all" oninput="window.calcPOSDenominations()">
                                </div>
                            </div>
                            <div class="flex items-center justify-between bg-white dark:bg-slate-800 px-2 sm:px-2.5 py-1.5 sm:py-2 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 transition-all">
                                <span class="font-bold text-slate-700 dark:text-slate-200 text-[10px] sm:text-[11px] whitespace-nowrap">Rp 5.000</span>
                                <div class="flex items-center gap-1 shrink-0">
                                    <span class="text-[10px] text-slate-400">×</span>
                                    <input type="number" min="0" id="denom-5k" placeholder="0" class="w-12 sm:w-16 px-1.5 py-1 text-right font-black text-xs border border-slate-200 dark:border-slate-700 rounded-lg bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-white focus:outline-none focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)] transition-all" oninput="window.calcPOSDenominations()">
                                </div>
                            </div>
                            <div class="flex items-center justify-between bg-white dark:bg-slate-800 px-2 sm:px-2.5 py-1.5 sm:py-2 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 transition-all">
                                <span class="font-bold text-slate-700 dark:text-slate-200 text-[10px] sm:text-[11px] whitespace-nowrap">Rp 2.000</span>
                                <div class="flex items-center gap-1 shrink-0">
                                    <span class="text-[10px] text-slate-400">×</span>
                                    <input type="number" min="0" id="denom-2k" placeholder="0" class="w-12 sm:w-16 px-1.5 py-1 text-right font-black text-xs border border-slate-200 dark:border-slate-700 rounded-lg bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-white focus:outline-none focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)] transition-all" oninput="window.calcPOSDenominations()">
                                </div>
                            </div>
                            <div class="flex items-center justify-between bg-white dark:bg-slate-800 px-2 sm:px-2.5 py-1.5 sm:py-2 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 transition-all">
                                <span class="font-bold text-slate-700 dark:text-slate-200 text-[10px] sm:text-[11px] whitespace-nowrap">Rp 1.000</span>
                                <div class="flex items-center gap-1 shrink-0">
                                    <span class="text-[10px] text-slate-400">×</span>
                                    <input type="number" min="0" id="denom-1k" placeholder="0" class="w-12 sm:w-16 px-1.5 py-1 text-right font-black text-xs border border-slate-200 dark:border-slate-700 rounded-lg bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-white focus:outline-none focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)] transition-all" oninput="window.calcPOSDenominations()">
                                </div>
                            </div>
                            <div class="flex items-center justify-between bg-white dark:bg-slate-800 px-2 sm:px-2.5 py-1.5 sm:py-2 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 transition-all">
                                <span class="font-bold text-slate-700 dark:text-slate-200 text-[10px] sm:text-[11px] whitespace-nowrap">Koin / Receh</span>
                                <div class="flex items-center gap-1 shrink-0">
                                    <span class="text-[10px] text-slate-400">Rp</span>
                                    <input type="number" min="0" id="denom-coin" placeholder="0" class="w-14 sm:w-20 px-1.5 py-1 text-right font-black text-xs border border-slate-200 dark:border-slate-700 rounded-lg bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-white focus:outline-none focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)] transition-all" oninput="window.calcPOSDenominations()">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Kartu Status Selisih Kas (Live Dynamic Calculation) -->
                <div id="pos-discrepancy-card" class="p-4 rounded-2xl border-2 transition-all duration-300 flex items-center justify-between bg-emerald-50 dark:bg-emerald-950/20 border-emerald-500/40">
                    <div class="flex items-center gap-3">
                        <div id="pos-discrepancy-icon" class="w-10 h-10 rounded-2xl flex items-center justify-center text-white text-base shadow-sm shrink-0 bg-emerald-600">
                            <i class="fa-solid fa-check"></i>
                        </div>
                        <div>
                            <span id="pos-discrepancy-status" class="text-xs font-black uppercase tracking-wider text-emerald-800 dark:text-emerald-300 block">SEIMBANG (PAS)</span>
                            <span id="pos-discrepancy-desc" class="text-[11px] text-emerald-700 dark:text-emerald-400 block">Uang fisik laci kasir cocok dengan transaksi sistem</span>
                        </div>
                    </div>
                    <div class="text-right">
                        <span class="text-[10px] font-bold text-slate-400 block uppercase">Selisih Kas</span>
                        <span id="pos-discrepancy-amount" class="text-base font-black text-emerald-600 dark:text-emerald-400">Rp 0</span>
                    </div>
                </div>

                <!-- Catatan Penutupan Shift -->
                <div class="space-y-1">
                    <label class="block text-xs font-bold text-slate-700 dark:text-slate-200">
                        <i class="fa-regular fa-comment-dots text-slate-400 mr-1"></i>Catatan Penutupan Shift
                    </label>
                    <textarea id="pos-shift-close-notes" rows="2" placeholder="Catatan mengenai kondisi laci, sisa kembalian, atau alasan jika terdapat selisih kas..."
                        class="w-full px-3.5 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs text-slate-800 dark:text-slate-200 focus:outline-none focus:border-[var(--color-primary)]"></textarea>
                </div>
            </div>

            <!-- Footer Action Buttons -->
            <div class="p-4 border-t border-slate-100 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-800/40 flex items-center gap-2">
                <button onclick="window.closePOSCloseShiftModal()" class="flex-1 py-3 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-bold text-xs hover:bg-slate-100 transition-all cursor-pointer">
                    Batal
                </button>
                <button onclick="window.confirmClosePOSShift()" class="flex-[2] py-3 rounded-2xl bg-rose-600 hover:bg-rose-700 text-white font-black text-xs uppercase tracking-wider shadow-lg active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer">
                    <i class="fa-solid fa-lock"></i>
                    <span>Konfirmasi &amp; Tutup Shift</span>
                </button>
            </div>
        </div>
    </div>`;document.body.insertAdjacentHTML("beforeend",a);const s=p("pos-close-shift-modal"),r=p("pos-close-shift-box");!s||!r||(s.classList.remove("pointer-events-none"),typeof window.pushModalHistory=="function"&&window.pushModalHistory("posCloseShift"),requestAnimationFrame(()=>{s.classList.remove("opacity-0"),r.classList.remove("translate-y-8","scale-95")}),setTimeout(()=>{const o=p("pos-shift-actual-cash-input");o&&(o.focus(),o.select())},250))},Ze=(e=!1)=>{const t=()=>{const a=p("pos-close-shift-modal"),s=p("pos-close-shift-box");a&&(a.classList.add("opacity-0","pointer-events-none"),s&&s.classList.add("translate-y-8","scale-95"),setTimeout(()=>{a.remove()},280))};typeof window.requestCloseModal=="function"?window.requestCloseModal("posCloseShift",e,t):t()},nr=e=>{const t=p("pos-count-tab-quick"),a=p("pos-count-tab-denom"),s=p("pos-count-panel-quick"),r=p("pos-count-panel-denom");e==="quick"?(t&&(t.className="px-2.5 py-1 rounded-lg font-black bg-white dark:bg-slate-700 text-[var(--color-primary)] dark:text-white shadow-xs transition-all cursor-pointer border border-[rgba(var(--color-primary-rgb),0.2)] dark:border-slate-600"),a&&(a.className="px-2.5 py-1 rounded-lg font-bold text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-white transition-all cursor-pointer border border-transparent"),s&&s.classList.remove("hidden"),r&&r.classList.add("hidden")):(t&&(t.className="px-2.5 py-1 rounded-lg font-bold text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-white transition-all cursor-pointer border border-transparent"),a&&(a.className="px-2.5 py-1 rounded-lg font-black bg-white dark:bg-slate-700 text-[var(--color-primary)] dark:text-white shadow-xs transition-all cursor-pointer border border-[rgba(var(--color-primary-rgb),0.2)] dark:border-slate-600"),s&&s.classList.add("hidden"),r&&r.classList.remove("hidden"),ps())},ps=()=>{const e=(parseFloat(p("denom-100k")?.value)||0)*1e5,t=(parseFloat(p("denom-50k")?.value)||0)*5e4,a=(parseFloat(p("denom-20k")?.value)||0)*2e4,s=(parseFloat(p("denom-10k")?.value)||0)*1e4,r=(parseFloat(p("denom-5k")?.value)||0)*5e3,o=(parseFloat(p("denom-2k")?.value)||0)*2e3,n=(parseFloat(p("denom-1k")?.value)||0)*1e3,d=parseFloat(p("denom-coin")?.value)||0,l=e+t+a+s+r+o+n+d,c=p("pos-shift-actual-cash-input");c&&(c.value=l),us()},us=()=>{const e=ee();if(!e)return;const t=(parseFloat(e.startingCash)||0)+(parseFloat(e.cashSales)||0),s=(parseFloat(p("pos-shift-actual-cash-input")?.value)||0)-t,r=p("pos-discrepancy-card"),o=p("pos-discrepancy-icon"),n=p("pos-discrepancy-status"),d=p("pos-discrepancy-desc"),l=p("pos-discrepancy-amount");!r||!o||!n||!d||!l||(s===0?(r.className="p-4 rounded-2xl border-2 transition-all duration-300 flex items-center justify-between bg-emerald-50 dark:bg-emerald-950/20 border-emerald-500/40",o.className="w-10 h-10 rounded-2xl flex items-center justify-center text-white text-base shadow-sm shrink-0 bg-emerald-600",o.innerHTML='<i class="fa-solid fa-check"></i>',n.className="text-xs font-black uppercase tracking-wider text-emerald-800 dark:text-emerald-300 block",n.innerText="SEIMBANG (PAS)",d.className="text-[11px] text-emerald-700 dark:text-emerald-400 block",d.innerText="Uang fisik laci kasir cocok dengan transaksi sistem",l.className="text-base font-black text-emerald-600 dark:text-emerald-400",l.innerText="Rp 0"):s>0?(r.className="p-4 rounded-2xl border-2 transition-all duration-300 flex items-center justify-between bg-amber-50 dark:bg-amber-950/20 border-amber-500/40",o.className="w-10 h-10 rounded-2xl flex items-center justify-center text-white text-base shadow-sm shrink-0 bg-amber-500",o.innerHTML='<i class="fa-solid fa-plus"></i>',n.className="text-xs font-black uppercase tracking-wider text-amber-800 dark:text-amber-300 block",n.innerText="LEBIH (SURPLUS)",d.className="text-[11px] text-amber-700 dark:text-amber-400 block",d.innerText="Terdapat kelebihan uang fisik di laci kasir",l.className="text-base font-black text-amber-600 dark:text-amber-400",l.innerText="+ "+C(s)):(r.className="p-4 rounded-2xl border-2 transition-all duration-300 flex items-center justify-between bg-rose-50 dark:bg-rose-950/20 border-rose-500/40",o.className="w-10 h-10 rounded-2xl flex items-center justify-center text-white text-base shadow-sm shrink-0 bg-rose-600",o.innerHTML='<i class="fa-solid fa-minus"></i>',n.className="text-xs font-black uppercase tracking-wider text-rose-800 dark:text-rose-300 block",n.innerText="KURANG (DEFISIT)",d.className="text-[11px] text-rose-700 dark:text-rose-400 block",d.innerText="Terdapat kekurangan uang fisik di laci kasir",l.className="text-base font-black text-rose-600 dark:text-rose-400",l.innerText="- "+C(Math.abs(s))))},ir=async()=>{const e=ee();if(!e)return;const t=(parseFloat(e.startingCash)||0)+(parseFloat(e.cashSales)||0),a=parseFloat(p("pos-shift-actual-cash-input")?.value)||0,s=a-t,r=p("pos-shift-close-notes")?.value?.trim()||"",o={d100k:parseFloat(p("denom-100k")?.value)||0,d50k:parseFloat(p("denom-50k")?.value)||0,d20k:parseFloat(p("denom-20k")?.value)||0,d10k:parseFloat(p("denom-10k")?.value)||0,d5k:parseFloat(p("denom-5k")?.value)||0,d2k:parseFloat(p("denom-2k")?.value)||0,d1k:parseFloat(p("denom-1k")?.value)||0,coin:parseFloat(p("denom-coin")?.value)||0},n=Date.now(),d=aa(e.startTime,n),l={...e,status:"closed",endTime:n,endTimeISO:new Date(n).toISOString(),duration:d,expectedCash:t,actualCash:a,difference:s,discrepancyStatus:s===0?"balanced":s>0?"surplus":"deficit",denominations:o,closingNotes:r};At();try{await Promise.all([B.collection("freshmart").doc("cms_data").collection("pos_shifts").doc(l.id).set(l,{merge:!0}),B.collection("pos_shifts").doc(l.id).set(l,{merge:!0})])}catch(c){console.warn("[POS Shift] Simpan Firestore:",c)}it(),ta(l),Ze(),ls("close"),lr(l),typeof window.renderShiftHeaderBadge=="function"&&window.renderShiftHeaderBadge()},lr=e=>{document.getElementById("pos-closed-success-modal")?.remove();const t=e.difference||0,a=t===0?'<span class="px-2.5 py-1 rounded-xl text-xs font-black bg-emerald-100 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300">PAS (Rp 0)</span>':t>0?`<span class="px-2.5 py-1 rounded-xl text-xs font-black bg-amber-100 text-amber-700 dark:bg-amber-950/60 dark:text-amber-300">LEBIH (+${C(t)})</span>`:`<span class="px-2.5 py-1 rounded-xl text-xs font-black bg-rose-100 text-rose-700 dark:bg-rose-950/60 dark:text-rose-300">KURANG (-${C(Math.abs(t))})</span>`,s=`
    <div id="pos-closed-success-modal" class="fixed inset-0 z-[10002] flex items-center justify-center p-3 sm:p-4" style="background:rgba(15,23,42,0.85)">
        <div class="bg-white dark:bg-slate-900 rounded-3xl shadow-2xl w-full max-w-md border border-slate-200/90 dark:border-slate-800 overflow-hidden text-center p-6 space-y-4">
            <div class="w-16 h-16 rounded-3xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center text-3xl mx-auto shadow-inner">
                <i class="fa-solid fa-circle-check"></i>
            </div>
            <div>
                <h3 class="text-base font-black text-slate-800 dark:text-white uppercase tracking-wider">Shift Kasir Berhasil Ditutup</h3>
                <p class="text-xs text-slate-500 dark:text-slate-400 mt-1">Laporan rekap Z-Report telah tersimpan aman di database toko</p>
            </div>

            <!-- Rekap Kartu Ringkas -->
            <div class="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60 text-xs space-y-2 text-left">
                <div class="flex justify-between"><span>No Shift:</span><span class="font-bold font-mono">#${b(e.shiftNo||e.id)}</span></div>
                <div class="flex justify-between"><span>Kasir:</span><span class="font-bold">${b(e.cashierName)}</span></div>
                <div class="flex justify-between"><span>Durasi:</span><span class="font-bold">${b(e.duration)}</span></div>
                <div class="flex justify-between border-t border-slate-200/60 dark:border-slate-700/60 pt-1.5"><span>Total Omset:</span><span class="font-bold">${C(e.totalSales||0)}</span></div>
                <div class="flex justify-between"><span>Kas Fisik Laci:</span><span class="font-black text-slate-900 dark:text-white">${C(e.actualCash||0)}</span></div>
                <div class="flex justify-between items-center border-t border-slate-200/60 dark:border-slate-700/60 pt-1.5"><span>Status Selisih:</span><div>${a}</div></div>
            </div>

            <!-- Action Buttons -->
            <div class="space-y-2 pt-2">
                <button onclick="window.printShiftSettlementReceipt(window.getLastClosedShift(), false)" class="w-full py-3.5 rounded-2xl text-white font-black text-xs uppercase tracking-wider shadow-lg active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer hover:brightness-105" style="background:linear-gradient(135deg, var(--color-primary-light,#e1b858) 0%, var(--color-primary,#c59b27) 50%, var(--color-primary-dark,#a87f1b) 100%);box-shadow:0 4px 14px rgba(var(--color-primary-rgb),0.35)">
                    <i class="fa-solid fa-eye"></i>
                    <i class="fa-solid fa-print"></i>
                    <span>Preview & Cetak Slip Shift (Z-Report)</span>
                </button>
                <div class="flex items-center gap-2">
                    <button onclick="document.getElementById('pos-closed-success-modal')?.remove(); window.openPOSOpenShiftModal();" class="flex-1 py-3 rounded-2xl bg-[rgba(var(--color-primary-rgb),0.1)] hover:bg-[rgba(var(--color-primary-rgb),0.18)] text-[var(--color-primary)] font-bold text-xs border border-[rgba(var(--color-primary-rgb),0.25)] transition-all cursor-pointer flex items-center justify-center gap-1.5 active:scale-95">
                        <i class="fa-solid fa-plus-circle"></i>
                        <span>Buka Shift Baru</span>
                    </button>
                    <button onclick="document.getElementById('pos-closed-success-modal')?.remove(); if(typeof window.cashierLogout==='function') window.cashierLogout(true);" class="flex-1 py-3 rounded-2xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 font-bold text-xs transition-all cursor-pointer active:scale-95">
                        Selesai &amp; Keluar
                    </button>
                </div>
            </div>
        </div>
    </div>`;document.body.insertAdjacentHTML("beforeend",s)},ra=(e,t=!1,a=!1)=>{if(!e){y("Data shift tidak ditemukan.","warning");return}window._lastShiftData={shift:e,isXReport:t};const s=typeof Qe=="function"?Qe():{paperSize:"58mm"};if(typeof window.printShiftSettlementDirect=="function"){window.printShiftSettlementDirect(e,t);return}const r=typeof window.getPaperCols=="function"?window.getPaperCols(s.paperSize):s.paperSize==="80mm"?48:32,o=r>=40,n=s.headerText||m.store?.name||"TOKO PUTRI",d=m.store?.address||"",l=m.store?.wa||"",c=s.footerText||"Laporan Kasir Resmi Toko Putri",i=o?t?"*** RINGKASAN SHIFT (X-REPORT) ***":"*** REKAP TUTUP SHIFT (Z-REPORT) ***":t?"** RINGKASAN SHIFT (X) **":"** REKAP TUTUP SHIFT (Z) **",u=typeof window.formatCompactDate=="function"?window.formatCompactDate(e.startTime,o):new Date(e.startTime).toLocaleString("id-ID"),k=typeof window.formatCompactDate=="function"?window.formatCompactDate(e.endTime||Date.now(),o):new Date(e.endTime||Date.now()).toLocaleString("id-ID"),v=e.duration||aa(e.startTime,e.endTime||Date.now()),x=(parseFloat(e.startingCash)||0)+(parseFloat(e.cashSales)||0),w=e.actualCash!==void 0?parseFloat(e.actualCash):x,S=w-x,P=S===0?"SEIMBANG (PAS)":S>0?`LEBIH (+${C(S)})`:`KURANG (-${C(Math.abs(S))})`;document.getElementById("pos-shift-receipt-modal")?.remove(),typeof window.pushModalHistory=="function"&&window.pushModalHistory("posShiftReceipt"),document.body.insertAdjacentHTML("beforeend",`
    <div id="pos-shift-receipt-modal" class="fixed inset-0 z-[10003] flex items-center justify-center p-3 sm:p-4" style="background:rgba(15,23,42,0.75)" onclick="if(event.target===this) window.closePOSShiftReceiptModal()">
        <div class="bg-white dark:bg-slate-900 rounded-3xl shadow-2xl w-full ${o?"max-w-[420px]":"max-w-[340px]"} border border-slate-200 dark:border-slate-800 overflow-hidden flex flex-col max-h-[90vh]">
            <div class="p-3.5 sm:p-4 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center bg-slate-50 dark:bg-slate-800/50">
                <span class="font-bold text-xs text-slate-700 dark:text-slate-200 flex items-center gap-1.5"><i class="fa-solid fa-receipt text-emerald-500"></i>Preview Slip Rekap Shift (${r} Kolom)</span>
                <button onclick="window.closePOSShiftReceiptModal()" class="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-slate-700 dark:hover:text-slate-200 transition-colors flex items-center justify-center cursor-pointer" aria-label="Tutup preview"><i class="fa-solid fa-xmark text-sm"></i></button>
            </div>
            <div id="pos-shift-receipt-paper-box" class="p-4 overflow-y-auto flex-1 font-mono text-[11px] bg-slate-50/60 dark:bg-slate-950 text-slate-800 dark:text-slate-200 space-y-1.5 select-text custom-scrollbar">
                <div class="text-center font-bold text-sm uppercase">${b(n)}</div>
                ${d?`<div class="text-center text-[10px] text-slate-500">${b(d)}</div>`:""}
                ${l?`<div class="text-center text-[10px] text-slate-500">WA: ${b(l)}</div>`:""}
                <div class="border-t border-dashed border-slate-300 dark:border-slate-700 my-2"></div>
                <div class="text-center font-black text-xs uppercase">${b(i)}</div>
                <div class="border-t border-dashed border-slate-300 dark:border-slate-700 my-2"></div>
                <div class="flex justify-between"><span>No Shift: <b>#${b(e.shiftNo||e.id)}</b></span><span>${b(u)}</span></div>
                <div class="flex justify-between"><span>Kasir   : ${b(e.cashierName)}</span><span>Durasi: ${b(v)}</span></div>
                <div class="flex justify-between"><span>Selesai : ${b(k)}</span></div>
                <div class="border-t border-dashed border-slate-300 dark:border-slate-700 my-2"></div>
                <div class="font-bold">RINGKASAN PENJUALAN:</div>
                <div class="flex justify-between"><span>Total Struk</span><span>${e.txCount||0} Trx</span></div>
                <div class="flex justify-between"><span>Total Barang</span><span>${ns(e.itemCount||0)} Item</span></div>
                <div class="border-t border-dashed border-slate-300 dark:border-slate-700 my-1"></div>
                <div class="flex justify-between"><span>Tunai (Cash)</span><span>${C(e.cashSales||0)}</span></div>
                <div class="flex justify-between"><span>QRIS</span><span>${C(e.qrisSales||0)}</span></div>
                <div class="flex justify-between"><span>Transfer Bank</span><span>${C(e.bankSales||e.transferSales||0)}</span></div>
                <div class="flex justify-between"><span>Tempo (Piutang)</span><span>${C(e.tempoSales||0)}</span></div>
                <div class="border-t border-dashed border-slate-300 dark:border-slate-700 my-1"></div>
                <div class="flex justify-between font-black text-xs pt-0.5"><span>TOTAL OMSET</span><span style="color:var(--color-primary)">${C(e.totalSales||0)}</span></div>
                ${(e.discountTotal||0)>0?`<div class="flex justify-between text-rose-500"><span>Diskon Toko</span><span>-${C(e.discountTotal)}</span></div>`:""}
                <div class="border-t border-dashed border-slate-300 dark:border-slate-700 my-2"></div>
                <div class="font-bold">REKONSILIASI KAS LACI:</div>
                <div class="flex justify-between"><span>Modal Awal</span><span>${C(e.startingCash)}</span></div>
                <div class="flex justify-between"><span>Penjualan Tunai</span><span>${C((e.cashSales||0)-(e.tempoInstallmentCash||0))}</span></div>
                ${(e.tempoInstallmentCash||0)>0?`
                <div class="flex justify-between text-amber-600"><span>+ Cicilan Piutang</span><span>+${C(e.tempoInstallmentCash)}</span></div>`:""}
                <div class="flex justify-between font-bold"><span>Kas Sistem</span><span>${C(x)}</span></div>
                ${t?"":`
                <div class="flex justify-between font-bold"><span>Kas Fisik Dihitung</span><span>${C(w)}</span></div>
                <div class="border-t border-dashed border-slate-300 dark:border-slate-700 my-1"></div>
                <div class="flex justify-between font-black text-xs ${S===0?"text-emerald-600":S>0?"text-amber-600":"text-rose-600"}">
                    <span>SELISIH KAS</span>
                    <span>${P}</span>
                </div>`}
                ${e.closingNotes?`
                <div class="border-t border-dashed border-slate-300 dark:border-slate-700 my-1.5"></div>
                <div class="text-[10px]"><b>Catatan:</b> ${b(e.closingNotes)}</div>`:""}
                <div class="border-t border-dashed border-slate-300 dark:border-slate-700 my-2"></div>
                <div class="text-center text-[10px] text-slate-400 my-1">${b(c)}</div>
                <div class="grid grid-cols-2 text-center text-[10px] pt-4 pb-2">
                    <div>
                        <div>Kasir Bertugas</div>
                        <div class="pt-8 font-bold">(${b(e.cashierName)})</div>
                    </div>
                    <div>
                        <div>Supervisor / Admin</div>
                        <div class="pt-8 font-bold">( ................ )</div>
                    </div>
                </div>
            </div>
            <div class="p-3 border-t border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/40 flex gap-2">
                <button onclick="window.executeShiftPrintDirect()" class="flex-1 py-3.5 rounded-2xl text-white font-black text-xs sm:text-sm flex items-center justify-center gap-2 cursor-pointer shadow-lg transition-all active:scale-95 hover:brightness-105" style="background:linear-gradient(135deg, var(--color-primary-light,#e1b858) 0%, var(--color-primary,#c59b27) 50%, var(--color-primary-dark,#a87f1b) 100%);box-shadow:0 4px 14px rgba(var(--color-primary-rgb),0.35)">
                    <i class="fa-solid fa-bolt text-white/90"></i><i class="fa-solid fa-print"></i> Cetak Sekarang
                </button>
            </div>
        </div>
    </div>`)},dr=(e=!1)=>{const t=()=>{document.getElementById("pos-shift-receipt-modal")?.remove()};typeof window.requestCloseModal=="function"?window.requestCloseModal("posShiftReceipt",e,t):t()};window.closePOSShiftReceiptModal=dr;const oa=()=>{if(window._lastShiftData&&typeof window.printShiftSettlementDirect=="function"){window.printShiftSettlementDirect(window._lastShiftData.shift,window._lastShiftData.isXReport);return}const e=p("pos-shift-receipt-paper-box");e&&(typeof window.renderThermalDOMAndPrint=="function"?window.renderThermalDOMAndPrint(e.innerHTML):window.print())},ft=()=>{const e=[p("pos-shift-btn-storefront"),p("pos-shift-btn-admin")],t=ee();e.forEach(a=>{a&&(t&&t.status==="open"?a.id==="pos-shift-btn-storefront"?a.innerHTML=`
                <button onclick="window.openPOSShiftSummaryModal()" class="h-8 px-2 sm:px-2.5 rounded-xl bg-black/15 hover:bg-black/25 text-white border border-white/20 transition-all cursor-pointer shadow-xs active:scale-95 inline-flex items-center gap-1 sm:gap-1.5 whitespace-nowrap shrink-0" title="Klik untuk lihat ringkasan shift (X-Report)">
                    <i class="fa-solid fa-cash-register text-emerald-300 text-xs"></i>
                    <span class="hidden sm:inline text-xs font-medium">Shift: </span>
                    <b class="text-white text-xs whitespace-nowrap">${C(t.startingCash)}</b>
                </button>`:a.innerHTML=`
                <button onclick="window.openPOSShiftSummaryModal()" class="h-8 px-2.5 sm:px-3 rounded-xl text-xs font-bold bg-[rgba(var(--color-primary-rgb),0.1)] hover:bg-[rgba(var(--color-primary-rgb),0.18)] text-[var(--color-primary)] border border-[rgba(var(--color-primary-rgb),0.25)] inline-flex items-center gap-1.5 transition-all cursor-pointer active:scale-95 whitespace-nowrap shrink-0 shadow-2xs" title="Klik untuk lihat ringkasan shift (X-Report)">
                    <i class="fa-solid fa-cash-register text-xs"></i>
                    <span class="hidden sm:inline font-medium">Shift: </span>
                    <b class="font-black whitespace-nowrap">${C(t.startingCash)}</b>
                </button>`:a.id==="pos-shift-btn-storefront"?a.innerHTML=`
                <button onclick="window.openPOSOpenShiftModal()" class="h-8 px-2.5 sm:px-3 rounded-xl bg-white/20 hover:bg-white/30 text-white font-bold text-xs inline-flex items-center gap-1.5 transition-all active:scale-95 shadow-xs cursor-pointer border border-white/25 whitespace-nowrap shrink-0" title="Buka shift kasir baru">
                    <span class="w-1.5 h-1.5 rounded-full bg-amber-300 animate-pulse"></span>
                    <i class="fa-solid fa-wallet text-amber-300 text-xs"></i>
                    <span class="text-xs font-black whitespace-nowrap">Buka Shift</span>
                </button>`:a.innerHTML=`
                <button onclick="window.openPOSOpenShiftModal()" class="h-8 px-2.5 sm:px-3 rounded-xl text-xs font-bold bg-amber-50 hover:bg-amber-100 dark:bg-amber-950/40 dark:hover:bg-amber-900/60 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-800 inline-flex items-center gap-1.5 transition-all cursor-pointer active:scale-95 animate-pulse whitespace-nowrap shrink-0 shadow-2xs" title="Buka shift kasir baru">
                    <i class="fa-solid fa-wallet text-xs"></i>
                    <span class="whitespace-nowrap">Buka Shift</span>
                </button>`)})},cr=async e=>{const t=typeof e=="string"?p(e):e;t&&(t.innerHTML=`
    <div class="space-y-4">
        <!-- Top Toolbar Header -->
        <div class="flex items-center justify-between gap-3 pt-1">
            <div class="min-w-0">
                <h3 class="text-sm sm:text-base font-black text-slate-900 dark:text-white flex items-center gap-2.5">
                    <span class="w-8 h-8 rounded-xl flex items-center justify-center text-xs shrink-0 shadow-2xs border border-[rgba(var(--color-primary-rgb),0.25)]" style="background: rgba(var(--color-primary-rgb), 0.12); color: var(--color-primary)">
                        <i class="fa-solid fa-file-invoice-dollar"></i>
                    </span>
                    <span class="truncate">Laporan Shift Kasir</span>
                </h3>
                <p class="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 mt-0.5 truncate">Rekap Z-Report buka-tutup kasir &amp; audit selisih kas fisik laci</p>
            </div>
            <button onclick="window.loadAdminShiftReports()" class="h-9 px-3.5 sm:px-4 rounded-xl bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700/80 text-slate-700 dark:text-slate-200 text-xs font-bold transition-all flex items-center gap-2 cursor-pointer shrink-0 shadow-2xs active:scale-95 border border-slate-200/90 dark:border-slate-700/80" title="Segarkan Data Shift">
                <i class="fa-solid fa-arrows-rotate text-[11px]" style="color:var(--color-primary)"></i>
                <span>Segarkan Data</span>
            </button>
        </div>

        <!-- Summary Metrics Banner Container -->
        <div id="admin-shift-metrics-target"></div>

        <!-- Shift Cards Container -->
        <div id="admin-shift-list-target" class="space-y-3">
            <div class="text-center py-12 text-slate-400"><i class="fa-solid fa-spinner fa-spin text-2xl mb-2"></i><p class="text-xs">Memuat laporan shift kasir...</p></div>
        </div>
    </div>`,await na())},na=async()=>{const e=p("admin-shift-list-target"),t=p("admin-shift-metrics-target");if(e)try{const a=await B.collection("freshmart").doc("cms_data").collection("pos_shifts").orderBy("startTime","desc").limit(50).get();if(a.empty){t&&(t.innerHTML=""),e.innerHTML=`
            <div class="text-center py-14 p-6 rounded-2xl sm:rounded-3xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700 text-slate-400 dark:text-slate-500">
                <i class="fa-solid fa-clipboard-list text-3xl mb-2"></i>
                <p class="font-bold text-xs">Belum ada riwayat shift kasir tercatat</p>
                <p class="text-[11px] mt-0.5">Shift yang dibuka dan ditutup oleh kasir akan otomatis terarsip di sini.</p>
            </div>`;return}const s=a.docs.map(c=>({id:c.id,...c.data()}));let r=s.length,o=0,n=0,d=0;s.forEach(c=>{c.status==="open"&&o++,n+=parseFloat(c.totalSales)||0;const i=c.actualCash!==void 0?parseFloat(c.actualCash):(parseFloat(c.startingCash)||0)+(parseFloat(c.cashSales)||0);d+=i||0}),t&&(t.innerHTML=`
            <div class="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-3.5">
                <div class="p-3.5 sm:p-4 rounded-2xl sm:rounded-3xl bg-white dark:bg-slate-800/90 border border-slate-200/90 dark:border-slate-700/80 shadow-2xs flex flex-col justify-between">
                    <div class="flex items-center justify-between mb-1.5">
                        <span class="text-[9px] font-black uppercase tracking-wider text-slate-500 dark:text-slate-400">Total Shift</span>
                        <div class="w-8 h-8 rounded-xl flex items-center justify-center text-xs shadow-2xs border border-[rgba(var(--color-primary-rgb),0.25)]" style="background: rgba(var(--color-primary-rgb), 0.12); color: var(--color-primary);">
                            <i class="fa-solid fa-receipt"></i>
                        </div>
                    </div>
                    <p class="text-base sm:text-xl font-black text-slate-900 dark:text-white tracking-tight">${r} <span class="text-xs font-bold text-slate-400">Shift</span></p>
                    <p class="text-[10px] font-bold text-slate-400 mt-0.5">Arsip Rekap Kasir</p>
                </div>

                <div class="p-3.5 sm:p-4 rounded-2xl sm:rounded-3xl bg-white dark:bg-slate-800/90 border border-slate-200/90 dark:border-slate-700/80 shadow-2xs flex flex-col justify-between">
                    <div class="flex items-center justify-between mb-1.5">
                        <span class="text-[9px] font-black uppercase tracking-wider text-emerald-600 dark:text-emerald-400">Shift Aktif</span>
                        <div class="w-8 h-8 rounded-xl bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 flex items-center justify-center text-xs shadow-2xs border border-emerald-200 dark:border-emerald-800/60">
                            <i class="fa-solid fa-clock-rotate-left"></i>
                        </div>
                    </div>
                    <p class="text-base sm:text-xl font-black text-emerald-600 dark:text-emerald-400 tracking-tight flex items-center gap-1.5">
                        ${o} <span class="text-xs font-bold text-slate-400">Kasir</span>
                        ${o>0?'<span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>':""}
                    </p>
                    <p class="text-[10px] font-bold text-slate-400 mt-0.5">${o>0?"Sedang Bertransaksi":"Semua Shift Ditutup"}</p>
                </div>

                <div class="p-3.5 sm:p-4 rounded-2xl sm:rounded-3xl bg-white dark:bg-slate-800/90 border border-slate-200/90 dark:border-slate-700/80 shadow-2xs flex flex-col justify-between">
                    <div class="flex items-center justify-between mb-1.5">
                        <span class="text-[9px] font-black uppercase tracking-wider" style="color:var(--color-primary)">Total Omset</span>
                        <div class="w-8 h-8 rounded-xl flex items-center justify-center text-xs shadow-2xs border border-[rgba(var(--color-primary-rgb),0.25)]" style="background: rgba(var(--color-primary-rgb), 0.12); color: var(--color-primary);">
                            <i class="fa-solid fa-chart-line"></i>
                        </div>
                    </div>
                    <p class="text-base sm:text-lg font-black font-mono tracking-tight" style="color:var(--color-primary)">${C(n)}</p>
                    <p class="text-[10px] font-bold text-slate-400 mt-0.5">Gross Sales Shift</p>
                </div>

                <div class="p-3.5 sm:p-4 rounded-2xl sm:rounded-3xl bg-white dark:bg-slate-800/90 border border-slate-200/90 dark:border-slate-700/80 shadow-2xs flex flex-col justify-between">
                    <div class="flex items-center justify-between mb-1.5">
                        <span class="text-[9px] font-black uppercase tracking-wider text-slate-500 dark:text-slate-400">Total Kas Laci</span>
                        <div class="w-8 h-8 rounded-xl bg-slate-100 dark:bg-slate-700/60 text-slate-700 dark:text-slate-300 flex items-center justify-center text-xs shadow-2xs border border-slate-200 dark:border-slate-600/60">
                            <i class="fa-solid fa-vault"></i>
                        </div>
                    </div>
                    <p class="text-base sm:text-lg font-black font-mono text-slate-900 dark:text-white tracking-tight">${C(d)}</p>
                    <p class="text-[10px] font-bold text-slate-400 mt-0.5">Uang Kas Fisik Terdata</p>
                </div>
            </div>`);const l=s.map(c=>{const i=c.status==="closed",u=c.difference||0,k=i?u===0?'<span class="inline-flex items-center gap-1 px-3 py-1 rounded-full text-[10px] font-black bg-emerald-100 dark:bg-emerald-950/70 text-emerald-700 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800 shadow-2xs shrink-0"><i class="fa-solid fa-check text-[10px]"></i> PAS</span>':u>0?`<span class="inline-flex items-center gap-1 px-3 py-1 rounded-full text-[10px] font-black bg-amber-100 dark:bg-amber-950/70 text-amber-700 dark:text-amber-300 border border-amber-300 dark:border-amber-800 shadow-2xs shrink-0"><i class="fa-solid fa-arrow-trend-up text-[10px]"></i> LEBIH +${C(u)}</span>`:`<span class="inline-flex items-center gap-1 px-3 py-1 rounded-full text-[10px] font-black bg-rose-100 dark:bg-rose-950/70 text-rose-700 dark:text-rose-300 border border-rose-300 dark:border-rose-800 shadow-2xs shrink-0"><i class="fa-solid fa-arrow-trend-down text-[10px]"></i> KURANG -${C(Math.abs(u))}</span>`:'<span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-black bg-emerald-50 dark:bg-emerald-950/70 text-emerald-700 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800 shadow-2xs tracking-wide shrink-0"><span class="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>SEDANG BERJALAN</span>',v=c.startTime?new Date(c.startTime).toLocaleString("id-ID",{dateStyle:"medium",timeStyle:"short"}):"-",x=c.endTime?new Date(c.endTime).toLocaleTimeString("id-ID",{hour:"2-digit",minute:"2-digit"})+" WIB":"",w=JSON.stringify(c).replace(/"/g,"&quot;"),S=c.actualCash!==void 0?c.actualCash:(c.startingCash||0)+(c.cashSales||0);return`
            <div class="p-4 sm:p-5 rounded-2xl sm:rounded-3xl bg-white dark:bg-slate-800/95 border border-slate-200/90 dark:border-slate-700/80 shadow-2xs hover:shadow-xs transition-all space-y-3.5">
                <div class="flex items-center justify-between gap-2 border-b border-slate-100 dark:border-slate-700/60 pb-3 flex-wrap sm:flex-nowrap">
                    <div class="flex items-center gap-3 min-w-0">
                        <div class="w-10 h-10 rounded-2xl flex items-center justify-center text-sm text-white shrink-0 shadow-2xs ${i?"bg-slate-800 dark:bg-slate-700":""}" style="${i?"":"background: var(--color-primary); box-shadow: 0 4px 12px rgba(var(--color-primary-rgb), 0.35);"}">
                            <i class="fa-solid ${i?"fa-receipt":"fa-cash-register"}"></i>
                        </div>
                        <div class="min-w-0">
                            <div class="flex items-center gap-2">
                                <span class="font-mono font-black text-xs sm:text-sm text-slate-900 dark:text-white whitespace-nowrap block truncate">#${b(c.shiftNo||c.id)}</span>
                            </div>
                            <span class="text-[11px] text-slate-400 dark:text-slate-500 whitespace-nowrap block truncate mt-0.5">
                                <i class="fa-solid fa-clock text-[10px] mr-1"></i>${v} ${x?"— "+x:"• Aktif"}
                            </span>
                        </div>
                    </div>
                    <div class="flex items-center gap-2 shrink-0">
                        ${k}
                        <button onclick="window.printShiftSettlementReceipt(${w}, ${!i})" class="h-9 px-3 rounded-xl bg-slate-50 hover:bg-slate-100 dark:bg-slate-700/80 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer shrink-0 shadow-2xs active:scale-95 border border-slate-200/80 dark:border-slate-600/60 hover:text-[var(--color-primary)]" title="Preview & Cetak Slip Rekap Shift">
                            <i class="fa-solid fa-print text-xs"></i>
                            <span class="hidden sm:inline">Slip Z-Report</span>
                        </button>
                        <button onclick="window.deleteShiftRecord('${c.id}', '${b(c.shiftNo||c.id)}')" class="w-9 h-9 rounded-xl bg-slate-50 hover:bg-rose-50 dark:bg-slate-700/80 dark:hover:bg-rose-950/40 text-slate-400 hover:text-rose-600 dark:hover:text-rose-400 text-xs flex items-center justify-center transition-all cursor-pointer shrink-0 shadow-2xs active:scale-95 border border-slate-200/80 dark:border-slate-600/60 hover:border-rose-200" title="Hapus Data Shift">
                            <i class="fa-solid fa-trash-can"></i>
                        </button>
                    </div>
                </div>

                <div class="grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-xs">
                    <div class="p-3 rounded-2xl bg-slate-50/90 dark:bg-slate-900/60 border border-slate-200/70 dark:border-slate-800/80">
                        <span class="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
                            <i class="fa-solid fa-user-tie text-[10px]"></i> Kasir
                        </span>
                        <span class="font-black text-sm text-slate-800 dark:text-slate-100 truncate block mt-1">${b(c.cashierName||"Kasir")}</span>
                        <span class="text-[10px] font-bold text-slate-400 dark:text-slate-500 block mt-0.5">${c.txCount||0} Trx • ${c.itemCount||0} Item</span>
                    </div>
                    <div class="p-3 rounded-2xl bg-slate-50/90 dark:bg-slate-900/60 border border-slate-200/70 dark:border-slate-800/80">
                        <span class="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
                            <i class="fa-solid fa-hand-holding-dollar text-[10px]"></i> Modal Awal
                        </span>
                        <span class="font-black text-sm text-slate-800 dark:text-slate-100 font-mono block mt-1">${C(c.startingCash||0)}</span>
                        <span class="text-[10px] text-slate-400 block mt-0.5">Uang Kas Buka Shift</span>
                    </div>
                    <div class="p-3 rounded-2xl bg-slate-50/90 dark:bg-slate-900/60 border border-slate-200/70 dark:border-slate-800/80">
                        <span class="text-[10px] font-bold uppercase tracking-wider flex items-center gap-1.5" style="color:var(--color-primary)">
                            <i class="fa-solid fa-chart-line text-[10px]"></i> Total Omset
                        </span>
                        <span class="font-black text-sm sm:text-base font-mono block mt-1" style="color:var(--color-primary)">${C(c.totalSales||0)}</span>
                        <span class="text-[10px] font-bold text-emerald-600 dark:text-emerald-400 block mt-0.5">Gross Sales Shift</span>
                    </div>
                    <div class="p-3 rounded-2xl bg-slate-50/90 dark:bg-slate-900/60 border border-slate-200/70 dark:border-slate-800/80">
                        <span class="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
                            <i class="fa-solid fa-vault text-[10px]"></i> Kas Fisik Laci
                        </span>
                        <span class="font-black text-sm sm:text-base font-mono text-slate-900 dark:text-white block mt-1">${C(S)}</span>
                        <span class="text-[10px] font-bold block mt-0.5 ${u===0?"text-emerald-600 dark:text-emerald-400":u>0?"text-amber-600":"text-rose-600"}">
                            ${i?u===0?"Kas Pas & Sesuai":u>0?"Surplus +"+C(u):"Defisit -"+C(Math.abs(u)):"Kas Saat Ini"}
                        </span>
                    </div>
                </div>

                ${c.cashSales>0||c.qrisSales>0||c.bankSales>0||c.tempoSales>0?`
                <div class="flex items-center gap-2 overflow-x-auto pb-1 hide-scrollbar text-[11px] pt-1">
                    <span class="text-[10px] font-bold text-slate-400 uppercase tracking-wider shrink-0 mr-0.5">Rincian Bayar:</span>
                    ${c.cashSales?`<span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-xl bg-slate-100 dark:bg-slate-700/60 text-slate-700 dark:text-slate-300 font-bold shrink-0"><i class="fa-solid fa-money-bill-wave text-emerald-500"></i> Tunai: ${C(c.cashSales)}</span>`:""}
                    ${c.qrisSales?`<span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-xl bg-slate-100 dark:bg-slate-700/60 text-slate-700 dark:text-slate-300 font-bold shrink-0"><i class="fa-solid fa-qrcode text-indigo-500"></i> QRIS: ${C(c.qrisSales)}</span>`:""}
                    ${c.bankSales?`<span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-xl bg-slate-100 dark:bg-slate-700/60 text-slate-700 dark:text-slate-300 font-bold shrink-0"><i class="fa-solid fa-building-columns text-blue-500"></i> Transfer: ${C(c.bankSales)}</span>`:""}
                    ${c.tempoSales?`<span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-xl bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-300 font-bold shrink-0 border border-amber-200/60"><i class="fa-solid fa-clock text-amber-500"></i> Tempo: ${C(c.tempoSales)}</span>`:""}
                </div>`:""}

                ${c.closingNotes?`
                <div class="text-xs text-slate-600 dark:text-slate-300 bg-slate-50 dark:bg-slate-900/60 p-3 rounded-2xl border border-slate-200/80 dark:border-slate-800 flex items-start gap-2.5">
                    <i class="fa-solid fa-comment-dots text-slate-400 mt-0.5 shrink-0"></i>
                    <div class="min-w-0">
                        <span class="font-bold text-slate-800 dark:text-slate-200">Catatan Kasir:</span> ${b(c.closingNotes)}
                    </div>
                </div>`:""}
            </div>`}).join("");e.innerHTML=l}catch(a){console.error("[POS Shift] Gagal memuat daftar shift admin:",a),e.innerHTML=`
        <div class="text-center py-10 text-rose-500 text-xs">
            <i class="fa-solid fa-triangle-exclamation text-2xl mb-1"></i>
            <p>Gagal memuat laporan shift: ${b(a.message)}</p>
        </div>`}},pr=(e,t)=>{Vs("Hapus Data Shift",`Hapus shift #${t}? Data akan dihapus permanen dari cloud dan tidak bisa dikembalikan.`,async()=>{try{await B.collection("freshmart").doc("cms_data").collection("pos_shifts").doc(e).delete(),y("Data shift berhasil dihapus.","success"),await na()}catch(a){console.error("[POS Shift] Gagal menghapus shift:",a),y("Gagal menghapus: "+a.message,"error")}},"Ya, Hapus")};window.getActiveShift=ee;window.saveActiveShift=Te;window.clearActiveShift=it;window.getLastClosedShift=tr;window.isShiftActive=Fe;window.getCurrentCashierIdentity=Ye;window.isShiftOwnedByCashier=Ge;window.findActiveShiftInCloud=Ot;window.syncActiveShiftFromCloud=$e;window.listenActiveShiftCloud=Be;window.detachActiveShiftListener=At;window.openPOSOpenShiftModal=oe;window.closePOSOpenShiftModal=Ne;window.posSetStartCashPreset=sr;window.posUpdateStartCashChips=ds;window.confirmStartPOSShift=rr;window.recordTransactionToShift=cs;window.recordTempoPaymentToShift=or;window.openPOSShiftModal=ce;window.openPOSShiftSummaryModal=ce;window.closePOSShiftSummaryModal=ut;window.openPOSCloseShiftModal=sa;window.closePOSCloseShiftModal=Ze;window.setPOSCountMode=nr;window.calcPOSDenominations=ps;window.updatePOSShiftDiscrepancy=us;window.confirmClosePOSShift=ir;window.printShiftSettlementReceipt=ra;window.executeShiftPrintDirect=oa;window.renderShiftHeaderBadge=ft;window.renderAdminShiftReportView=cr;window.loadAdminShiftReports=na;window.deleteShiftRecord=pr;let _a=!1;const fs=()=>_a?Promise.resolve():Gs(()=>import("./pos-variant-sheet-AjRLtFRP.js"),__vite__mapDeps([0,1,2,3])).then(()=>{_a=!0});let A=[],ue="",xe="",Pe="",Se="grid",ze=1;const ur=48;let yt=null;const ms="freshmart_pos_offline_tx_queue";try{const e=localStorage.getItem("pos_view_mode");(e==="list"||e==="grid")&&(Se=e)}catch{}let h={name:"",phone:"",isMember:!1,memberId:null,isNewTempo:!1,paylaterActive:!1,paylaterLimit:0,paylaterUsed:0,paylaterDueDay:5},He="30d",te=0,N=null,K="cash",le=0,de=0,Z="rp",G=0;const Mt=new Set,bs=e=>{const t=String(e);Mt.has(t)?Mt.delete(t):Mt.add(t),Q()};let be="",qa=null,Ve=null,Re=null,St=null,Ue=null,Tt=!0,Jt="environment",rt=!1,Ae=null,Ka="",Va=0;const ia=e=>{Se=e;try{localStorage.setItem("pos_view_mode",e)}catch{}document.querySelectorAll("#pos-view-btn-grid").forEach(t=>{e==="grid"?(t.style.background="linear-gradient(135deg, var(--color-primary-light, #e1b858) 0%, var(--color-primary, #c59b27) 60%, var(--color-primary-dark, #a87f1b) 100%)",t.className="w-8 h-8 rounded-lg flex items-center justify-center text-xs transition-all cursor-pointer text-white shadow-xs"):(t.style.removeProperty("background"),t.className="w-8 h-8 rounded-lg flex items-center justify-center text-xs transition-all cursor-pointer text-slate-500 hover:text-slate-800 dark:text-slate-400")}),document.querySelectorAll("#pos-view-btn-list").forEach(t=>{e==="list"?(t.style.background="linear-gradient(135deg, var(--color-primary-light, #e1b858) 0%, var(--color-primary, #c59b27) 60%, var(--color-primary-dark, #a87f1b) 100%)",t.className="w-8 h-8 rounded-lg flex items-center justify-center text-xs transition-all cursor-pointer text-white shadow-xs"):(t.style.removeProperty("background"),t.className="w-8 h-8 rounded-lg flex items-center justify-center text-xs transition-all cursor-pointer text-slate-500 hover:text-slate-800 dark:text-slate-400")}),X()},Me=e=>Math.max(0,parseInt(e)||0),lt=e=>{if(e==null)return 0;typeof e=="string"&&(e=e.replace(",",".").trim());const t=parseFloat(e);return isNaN(t)?0:Math.max(0,parseFloat(t.toFixed(3)))},V=e=>{const t=parseFloat(e)||0;return parseFloat(t.toFixed(3)).toString()},g=e=>Ws(e),mt=()=>parseFloat(m.store?.pointValue)||1e3,Oe=()=>Math.max(0,(parseFloat(te)||0)*mt()),Lt=()=>{if(!h.isMember||!h.points)return 0;const e=Math.max(0,parseFloat(h.points)||0),t=N&&parseFloat(N.pointsCost)||0,a=Math.max(0,e-t),s=mt();if(s<=0)return 0;const r=Math.max(0,ne()-ie()),o=ke(),n=Math.max(0,r-o),d=Math.floor(n/s);return Math.min(a,d)},ne=()=>A.reduce((e,t)=>e+t.subtotal,0),ke=()=>A.reduce((e,t)=>{const a=t.hpp!=null?parseFloat(t.hpp):Je(t)||0;return e+(parseFloat(a)||0)*(parseFloat(t.qty)||0)},0),ie=()=>{const e=ne();let t=0;if(Z==="percent"){const s=Math.min(100,Math.max(0,parseFloat(G)||0));t=Math.round(e*s/100)}else t=Math.min(e,Me(G||de));const a=ke();if(a>0){const s=Math.max(0,e-a);t>s&&(t=s)}return t},se=()=>{const e=ne(),t=ie(),a=Oe(),s=Math.max(0,e-t-a);if(typeof window.calcTaxDetails=="function")return window.calcTaxDetails(s);const r=m.store?.ppnEnabled===!0||m.store?.ppnEnabled==="true",o=m.store?.ppnType||"exclusive",n=m.store?.ppnRate!==void 0&&!isNaN(parseFloat(m.store?.ppnRate))?parseFloat(m.store?.ppnRate):11;return{ppnEnabled:r,ppnRate:n,ppnType:o,ppnAmount:0,dppAmount:s,grandTotalAdd:0,ppnShowZero:m.store?.ppnShowZero!==!1,ppnLabel:m.store?.ppnTaxLabel||""}},j=()=>{const e=ne(),t=ie(),a=Oe(),s=Math.max(0,e-t-a),r=se();let o=s+(r.ppnType==="exclusive"&&r.grandTotalAdd||0);const n=ke();return n>0&&o<n&&(o=n),o},xs=()=>le-j(),Xe=e=>Za(e),hs=e=>e?String(e).replace(/\s*hari\s*kerja/gi,"hr").replace(/\s*hari/gi,"hr").replace(/\s*minggu/gi,"mgg").replace(/\s*bulan/gi,"bln").trim():"",Ie=()=>{try{if(typeof window<"u"&&typeof window.checkUserGesture=="function"&&!window.checkUserGesture())return;const e=window.AudioContext||window.webkitAudioContext;if(!e)return;const t=new e,a=t.createOscillator(),s=t.createGain();a.type="sine",a.frequency.setValueAtTime(1400,t.currentTime),s.gain.setValueAtTime(.08,t.currentTime),s.gain.exponentialRampToValueAtTime(1e-4,t.currentTime+.08),a.connect(s),s.connect(t.destination),a.start(),a.stop(t.currentTime+.08),setTimeout(()=>{t.close().catch(()=>{})},150)}catch{}},fr=(e,t)=>{if(!e||!e.wholesale||!e.wholesale.length)return null;const a=[...e.wholesale].sort((s,r)=>r.minQty-s.minQty);for(const s of a)if(t>=parseFloat(s.minQty))return parseFloat(s.price);return null},we=e=>{if(!e.isVariant){const a=(m.products||[]).find(r=>r&&String(r.id)===String(e.id)),s=a?fr(a,e.qty):null;s!==null?(e.basePrice=e.basePrice||e.price,e.price=s,e.isWholesale=!0):(e.basePrice&&(e.price=e.basePrice),e.isWholesale=!1)}e.hpp==null&&(e.hpp=Je(e)||0);const t=parseFloat(e.hpp)||0;if(t>0){const a=Math.max(0,Math.round((e.price-t)*e.qty));Me(e.discount)>a&&(e.discount=a)}else e.discount=Math.min(Me(e.discount),e.price*e.qty);return e.subtotal=Math.max(0,e.price*e.qty-Me(e.discount)),e},mr=()=>{const e=new Date,t=a=>String(a).padStart(2,"0");return`POS-${e.getFullYear()}${t(e.getMonth()+1)}${t(e.getDate())}-${Date.now().toString(36).toUpperCase()}`},gs=()=>{Ve&&clearInterval(Ve);const e=()=>{const a=new Date().toLocaleTimeString("id-ID",{hour:"2-digit",minute:"2-digit",second:"2-digit"})+" WIB";document.querySelectorAll("#pos-live-clock").forEach(s=>{s.textContent=a})};e(),Ve=setInterval(e,1e3)},ws=()=>{Ve&&(clearInterval(Ve),Ve=null)};window.stopPOSClock=ws;const It=()=>{window.__posBarcodeFn&&(document.removeEventListener("keydown",window.__posBarcodeFn),window.__posBarcodeFn=null)},Dt=e=>{if(!e)return null;const t=String(e).trim().toLowerCase(),a=m.products||[];for(const s of a)if(!(!s||s.isActive==="false"||s.isActive===!1)&&Array.isArray(s.variants)&&s.variants.length>0){const r=s.variants.findIndex(o=>o&&o.isActive!==!1&&o.isActive!=="false"&&(o.barcode&&String(o.barcode).trim().toLowerCase()===t||o.sku&&String(o.sku).trim().toLowerCase()===t));if(r>-1)return{product:s,variant:s.variants[r],variantIdx:r,isVariantMatch:!0}}for(const s of a){if(!s||s.isActive==="false"||s.isActive!==!1)continue;const r=s.barcode&&String(s.barcode).trim().toLowerCase()===t,o=s.sku&&String(s.sku).trim().toLowerCase()===t,n=s.id&&String(s.id).trim().toLowerCase()===t;if(r||o||n)return{product:s,variant:null,variantIdx:-1,isVariantMatch:!1}}return null},ks=()=>{It(),window.__posBarcodeFn=e=>{if(!e||typeof e.key!="string")return;const t=window.curViewName||"";if(!(t==="view-pos-cashier"||t==="view-admin"&&window.cTab==="pos"))return;if(e.key==="F2"||e.key==="F3"){e.preventDefault();const r=p("pos-search-input");r&&(r.focus(),r.select());return}if(e.key==="F4"){if(e.preventDefault(),!A.length){y("Keranjang kasir masih kosong","warning");return}xa();return}if(e.key==="F5"){e.preventDefault(),Pa();return}if(e.key==="F6"){e.preventDefault(),Nt();return}if(e.key==="F7"){e.preventDefault();const r=document.querySelector(".pos-disc-val-input");r&&(r.focus(),r.select());return}if(e.key==="F8"){e.preventDefault(),xt();return}if(e.key==="F9"){e.preventDefault(),p("pos-camera-scanner-modal")?Le():Kt();return}if(e.key==="F10"){e.preventDefault(),Fe()?ce():typeof $e=="function"?$e().then(r=>{r&&r.status==="open"?ce():oe()}).catch(()=>oe()):oe();return}if(e.key==="Escape"){if(p("pos-camera-scanner-modal")){Le();return}if(p("pos-held-modal")){et();return}if(p("pos-pay-modal")){_t();return}if(p("modal-pos-open-shift")){Ne();return}if(p("modal-pos-shift-summary")){ut();return}if(p("modal-pos-close-shift")){Ze();return}if(p("pos-success-modal")){p("pos-success-modal").remove();return}const r=p("pos-variant-sheet");if(r&&!r.classList.contains("hidden")){typeof window.closePOSVariantSheet=="function"&&window.closePOSVariantSheet();return}const o=p("pos-cart-drawer");if(o&&!o.classList.contains("hidden")){typeof window.closePOSCartDrawer=="function"&&window.closePOSCartDrawer();return}const n=p("pos-search-input");if(n&&(n.value||document.activeElement===n)){typeof window.posClearSearch=="function"&&window.posClearSearch(),n.blur();return}}const s=document.activeElement?.tagName?.toLowerCase();if(!(s==="input"||s==="textarea"||s==="select"))if(e.key==="Enter"){if(be&&be.length>=3){const r=Dt(be);if(r){const o=r.product;if(r.isVariantMatch&&r.variant){const n=parseFloat(r.variant.price)||0;Ht(o.id,r.variant.name,n,r.variantIdx,1)&&y(`Ditambahkan: ${o.name} — ${r.variant.name}`,"success")}else jt(o.id)&&y(`Ditambahkan: ${o.name}`,"success")}else{if(typeof window.posSearchFn=="function")window.posSearchFn(be,!0);else{const o=p("pos-search-input");o&&(o.value=be,ue=be,X())}y("Barcode tidak ditemukan di katalog","warning")}be=""}}else e.key&&e.key.length===1&&(be=(be||"")+e.key,clearTimeout(qa),qa=setTimeout(()=>{be=""},150))},document.addEventListener("keydown",window.__posBarcodeFn)},jt=e=>{const t=(m.products||[]).find(n=>n&&String(n.id)===String(e));if(!t)return!1;if(!(t.isActive!=="false"&&t.isActive!==!1))return y("Produk ini sedang tidak tersedia","warning"),!1;if(t.variants&&t.variants.length>0)return fs().then(()=>{typeof window.openPOSVariantSheet=="function"&&window.openPOSVariantSheet(e)}),!0;const r=Xe(t);if(r.isManaged&&!r.isPreorder&&r.isOutOfStock)return y(`Maaf, stok "${t.name}" sedang kosong!`,"warning"),!1;const o=A.find(n=>String(n.id)===String(e)&&!n.isVariant);if(o){const n=parseFloat((o.qty+1).toFixed(3));if(r.isManaged&&!r.isPreorder&&n>r.totalStock)return y(`Stok tidak cukup! Tersisa: ${V(r.totalStock)} ${t.unit||"pcs"}`,"warning"),!1;o.qty=n,we(o)}else{const n=parseFloat(t.price)||0;A.push(we({id:t.id,name:t.name,price:n,basePrice:n,hpp:parseFloat(t.hpp)||0,qty:1,unit:t.unit||"pcs",poTime:t.poTime||"",discount:0,subtotal:n,isVariant:!1,isWholesale:!1}))}return Ie(),typeof window.triggerHaptic=="function"&&window.triggerHaptic("light"),Q(),!0},vs=(e,t)=>{const a=(m.products||[]).find(d=>d&&String(d.id)===String(e));if(!a)return!1;if(!(a.isActive!=="false"&&a.isActive!==!1))return y("Produk ini sedang tidak tersedia","warning"),!1;const r=Xe(a);if(r.isManaged&&!r.isPreorder&&r.isOutOfStock)return y(`Maaf, stok "${a.name}" sedang kosong!`,"warning"),!1;const o=lt(t)||1,n=A.find(d=>String(d.id)===String(e)&&!d.isVariant);if(n){const d=parseFloat((n.qty+o).toFixed(3));if(r.isManaged&&!r.isPreorder&&d>r.totalStock)return y(`Stok tidak cukup! Tersisa: ${V(r.totalStock)} ${a.unit||"pcs"}`,"warning"),!1;n.qty=d,we(n)}else{if(r.isManaged&&!r.isPreorder&&o>r.totalStock)return y(`Stok tidak cukup! Tersisa: ${V(r.totalStock)} ${a.unit||"pcs"}`,"warning"),!1;const d=parseFloat(a.price)||0,l=we({id:a.id,name:a.name,price:d,basePrice:d,hpp:parseFloat(a.hpp)||0,qty:o,unit:a.unit||"pcs",poTime:a.poTime||"",discount:0,subtotal:d*o,isVariant:!1,isWholesale:!1});A.push(l)}return Ie(),typeof window.triggerHaptic=="function"&&window.triggerHaptic("light"),Q(),!0},Ht=(e,t,a,s,r=1)=>{const o=(m.products||[]).find(u=>u&&String(u.id)===String(e));if(!o)return!1;if(!(o.isActive!=="false"&&o.isActive!==!1))return y("Produk ini sedang tidak tersedia","warning"),!1;const d=o.variants?.[s];if(d){if(!(d.isActive!==!1&&d.isActive!=="false"))return y("Varian ini sedang tidak tersedia","warning"),!1;if(m.store?.useStock===!0||m.store?.useStock==="true"){const v=parseFloat(d.stock)||0,x=`${e}__v${s}`,w=A.find(O=>O.cartKey===x),S=w&&parseFloat(w.qty)||0,P=lt(r)||1;if(v<=0)return y(`Maaf, stok varian "${d.name}" sedang kosong!`,"warning"),!1;if(S+P>v)return y(`Stok varian "${d.name}" tidak cukup! Sisa: ${V(v)}`,"warning"),!1}}const l=`${e}__v${s}`,c=lt(r)||1,i=A.find(u=>u.cartKey===l);if(i)i.qty=parseFloat((i.qty+c).toFixed(3)),we(i);else{const u=`${o.name} — ${t}`,k=parseFloat(d?.hpp!=null?d.hpp:o.hpp)||0;A.push(we({id:e,cartKey:l,name:u,variantName:t,variantIdx:s,price:a,basePrice:a,hpp:k,qty:c,unit:d?.unit||o.unit||"pcs",poTime:o.poTime||"",discount:0,subtotal:a*c,isVariant:!0,isWholesale:!1}))}return Ie(),typeof window.triggerHaptic=="function"&&window.triggerHaptic("light"),Q(),!0},ys=(e,t)=>{const a=A.find(r=>(r.cartKey||String(r.id))===String(e));if(!a)return;const s=parseFloat((a.qty+t).toFixed(3));if(s<=0){Bt(e);return}if(t>0){const r=(m.products||[]).find(o=>o&&String(o.id)===String(a.id));if(r&&(m.store?.useStock===!0||m.store?.useStock==="true"))if(a.isVariant&&r.variants){const n=r.variants.find(l=>l.name===a.variantName),d=parseFloat(n?.stock)||0;if(s>d){y(`Stok maksimal "${a.name}" hanya ${V(d)}`,"warning");return}}else{const n=Xe(r);if(n.isManaged&&s>n.totalStock){y(`Stok maksimal tersedia: ${V(n.totalStock)} ${r.unit||"pcs"}`,"warning");return}}}a.qty=s,we(a),t>0&&Ie(),Q()},Ss=(e,t)=>{const a=A.find(o=>(o.cartKey||String(o.id))===String(e));if(!a)return;let s=lt(t);if(s<=0){Bt(e);return}const r=(m.products||[]).find(o=>o&&String(o.id)===String(a.id));if(r&&(m.store?.useStock===!0||m.store?.useStock==="true"))if(a.isVariant&&r.variants){const n=r.variants.find(l=>l.name===a.variantName),d=parseFloat(n?.stock)||0;s>d&&(y(`Stok maksimal "${a.name}" hanya ${V(d)}`,"warning"),s=d)}else{const n=Xe(r);n.isManaged&&s>n.totalStock&&(y(`Stok maksimal tersedia: ${V(n.totalStock)} ${r.unit||"pcs"}`,"warning"),s=n.totalStock)}a.qty=s,we(a),Q()},Ps=(e,t)=>{const a=A.find(o=>(o.cartKey||String(o.id))===String(e));if(!a)return;const s=Me(t),r=a.hpp!=null?parseFloat(a.hpp):Je(a)||0;if(r>0){const o=Math.max(0,Math.round((a.price-r)*a.qty));if(s>o){const n=re()?`Diskon ditolak! Tidak boleh di bawah harga modal toko (HPP ${g(r)}). Maksimal diskon: ${g(o)}`:"Diskon ditolak! Nilai diskon melebihi batas diskon maksimum yang diizinkan untuk item ini.";y(n,"warning"),a.discount=o,we(a),Q(),typeof window.triggerHaptic=="function"&&window.triggerHaptic("heavy");return}}a.discount=Math.min(s,a.price*a.qty),we(a),Q()},Bt=e=>{A=A.filter(t=>(t.cartKey||String(t.id))!==String(e)),Q(),typeof window.triggerHaptic=="function"&&window.triggerHaptic("light")},Ms=()=>{if(A.length===0)return;const e=()=>{A=[],de=0,G=0,Z="rp",te=0,N=null,Q(),y("Keranjang kasir dikosongkan.")};typeof window.showConfirm=="function"?window.showConfirm("Kosongkan Keranjang","Hapus semua item dari transaksi saat ini?",e,"Ya, Kosongkan",!0):e()},bt=(e="hold")=>{try{if(typeof window<"u"&&typeof window.checkUserGesture=="function"&&!window.checkUserGesture())return;const t=window.AudioContext||window.webkitAudioContext;if(!t)return;const a=new t,s=a.createOscillator(),r=a.createGain();s.type="sine";const o=a.currentTime;e==="hold"?(s.frequency.setValueAtTime(659.25,o),s.frequency.exponentialRampToValueAtTime(880,o+.1)):(s.frequency.setValueAtTime(880,o),s.frequency.exponentialRampToValueAtTime(1174.66,o+.1)),r.gain.setValueAtTime(.08,o),r.gain.exponentialRampToValueAtTime(1e-4,o+.16),s.connect(r),r.connect(a.destination),s.start(),s.stop(o+.16),setTimeout(()=>{a.close().catch(()=>{})},200)}catch{}},br=e=>{if(!e)return"";const t=Math.floor((Date.now()-e)/1e3);if(t<45)return"Baru saja";const a=Math.floor(t/60);if(a<60)return`${a} mnt lalu`;const s=Math.floor(a/60);return s<24?`${s} jam lalu`:new Date(e).toLocaleDateString("id-ID",{day:"numeric",month:"short",hour:"2-digit",minute:"2-digit"})};let U=[];try{const e=localStorage.getItem("pos_held_carts");if(e){const t=JSON.parse(e);Array.isArray(t)&&(U=t)}}catch{U=[]}const Rt=()=>{try{localStorage.setItem("pos_held_carts",JSON.stringify(U))}catch{}Ee()},Ee=()=>{const e=U.length,t=p("pos-held-btn-storefront"),a=p("pos-held-btn-admin");t&&(e>0?t.innerHTML=`
            <button onclick="window.openPOSHeldModal()" class="h-8 px-2.5 sm:px-3 rounded-xl bg-amber-500 hover:bg-amber-600 text-white text-xs font-black inline-flex items-center gap-1.5 transition-all active:scale-95 shadow-md cursor-pointer animate-pulse whitespace-nowrap shrink-0" title="Ada ${e} transaksi antrean tertahan (F8)">
                <i class="fa-solid fa-hourglass-half text-xs"></i>
                <span class="whitespace-nowrap">${e} Parkir</span>
            </button>`:t.innerHTML=`
            <button onclick="window.openPOSHeldModal()" class="h-8 px-2 sm:px-2.5 rounded-xl bg-black/15 hover:bg-black/25 text-white/90 hover:text-white text-xs font-bold inline-flex items-center gap-1.5 transition-all active:scale-95 cursor-pointer whitespace-nowrap shrink-0" title="Daftar Transaksi Tertahan (F8)">
                <i class="fa-solid fa-hourglass-half text-xs"></i>
                <span class="hidden sm:inline whitespace-nowrap">Parkir (0)</span>
            </button>`),a&&(e>0?a.innerHTML=`
            <button onclick="window.openPOSHeldModal()" class="h-8 px-2.5 sm:px-3 rounded-xl bg-amber-500 hover:bg-amber-600 text-white text-xs font-black inline-flex items-center gap-1.5 shadow-sm transition-all active:scale-95 cursor-pointer animate-pulse whitespace-nowrap shrink-0" title="Ada ${e} transaksi antrean tertahan (F8)">
                <i class="fa-solid fa-hourglass-half text-xs"></i>
                <span class="whitespace-nowrap">${e} Parkir</span>
            </button>`:a.innerHTML=`
            <button onclick="window.openPOSHeldModal()" class="h-8 px-2.5 sm:px-3 rounded-xl bg-slate-50 hover:bg-slate-100 dark:bg-slate-800 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 text-xs font-bold inline-flex items-center gap-1.5 transition-all cursor-pointer whitespace-nowrap shrink-0 shadow-2xs active:scale-95" title="Daftar Transaksi Tertahan (F8)">
                <i class="fa-solid fa-hourglass-half text-xs"></i>
                <span class="whitespace-nowrap">Parkir</span>
            </button>`)},Nt=()=>{if(A.length===0){y("Keranjang masih kosong, tidak ada transaksi untuk ditahan.","warning");return}const e=h?.name?`Antrean #${U.length+1} — ${h.name}`:`Antrean #${U.length+1}`,t=parseFloat(A.reduce((s,r)=>s+(parseFloat(r.qty)||0),0).toFixed(3)),a=j();tt(!0),typeof window.pushModalHistory=="function"&&window.pushModalHistory("posHoldPrompt"),document.getElementById("pos-hold-prompt-modal")?.remove(),document.body.insertAdjacentHTML("beforeend",`
    <div id="pos-hold-prompt-modal" class="fixed inset-0 z-[9999] flex items-center justify-center p-4" style="background:rgba(15,23,42,0.75)">
        <div class="bg-white dark:bg-slate-900 rounded-[2rem] shadow-2xl w-full max-w-[380px] sm:max-w-[420px] border border-slate-200/80 dark:border-slate-800 overflow-hidden transform transition-all animate-scaleIn">
            <div class="p-5 sm:p-6 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between bg-slate-50/70 dark:bg-slate-800/40">
                <div class="flex items-center gap-3">
                    <div class="w-10 h-10 rounded-2xl bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 flex items-center justify-center text-base font-bold shadow-2xs">
                        <i class="fa-solid fa-pause"></i>
                    </div>
                    <div>
                        <h3 class="font-black text-sm sm:text-base text-slate-900 dark:text-white leading-tight">Parkir / Tahan Transaksi</h3>
                        <p class="text-[10px] text-slate-400 mt-0.5">Simpan antrean sementara (F6)</p>
                    </div>
                </div>
                <button onclick="window.closePOSHoldPrompt()" class="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-white flex items-center justify-center transition-all cursor-pointer">
                    <i class="fa-solid fa-xmark text-sm"></i>
                </button>
            </div>
            <div class="p-5 sm:p-6 space-y-4">
                <div class="p-3.5 bg-amber-50/70 dark:bg-amber-950/20 border border-amber-200/60 dark:border-amber-800/40 rounded-2xl flex items-center justify-between text-xs">
                    <div>
                        <p class="text-[10px] font-bold text-amber-700 dark:text-amber-300 uppercase tracking-wider">Total Belanjaan</p>
                        <p class="font-black text-slate-800 dark:text-slate-100 text-sm mt-0.5">${V(t)} item</p>
                    </div>
                    <div class="text-right">
                        <p class="text-[10px] font-bold text-amber-700 dark:text-amber-300 uppercase tracking-wider">Total Tagihan</p>
                        <p class="font-black text-sm sm:text-base" style="color:var(--color-primary)">${g(a)}</p>
                    </div>
                </div>
                <div>
                    <label class="text-[10px] font-black uppercase tracking-wider text-slate-400 mb-1.5 block">Label / Catatan Antrean Pelanggan</label>
                    <input id="pos-hold-note-input" type="text" value="${b(e)}" placeholder="Contoh: Bpk Budi (ambil barang lagi)..."
                        class="w-full border border-slate-200 dark:border-slate-700 rounded-2xl px-4 py-3 text-xs sm:text-sm font-semibold bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-slate-100 focus:outline-none focus:border-[var(--color-primary)] focus:bg-white dark:focus:bg-slate-900 transition-all placeholder:text-slate-400"
                        onkeydown="if(event.key==='Enter') window.posConfirmHoldCart();">
                </div>
            </div>
            <div class="p-4 sm:p-5 border-t border-slate-100 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-800/40 flex gap-2.5">
                <button onclick="window.closePOSHoldPrompt()" class="flex-1 py-3.5 rounded-2xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 font-bold text-xs sm:text-sm hover:bg-slate-100 dark:hover:bg-slate-800 transition-all cursor-pointer active:scale-95">Batal</button>
                <button onclick="window.posConfirmHoldCart()" class="flex-[1.5] py-3.5 rounded-2xl bg-amber-500 hover:bg-amber-600 text-white font-black text-xs sm:text-sm shadow-md active:scale-95 transition-all flex items-center justify-center gap-1.5 cursor-pointer">
                    <i class="fa-solid fa-pause"></i>
                    <span>Tahan Transaksi</span>
                </button>
            </div>
        </div>
    </div>`),setTimeout(()=>{const s=p("pos-hold-note-input");s&&(s.focus(),s.select())},50)},Et=(e=!1)=>{const t=p("pos-hold-prompt-modal");t&&(!e&&typeof window.requestCloseModal=="function"?window.requestCloseModal("posHoldPrompt",!1,()=>t.remove()):t.remove())},la=()=>{if(A.length===0)return;const t=(p("pos-hold-note-input")?.value||"").trim()||`Antrean #${U.length+1}`,a={id:`HELD-${Date.now().toString(36).toUpperCase()}`,time:Date.now(),note:t,cart:JSON.parse(JSON.stringify(A)),globalDisc:ie(),discountType:Z,discountVal:G,customer:{...h},total:j(),subtotal:ne(),itemCount:parseFloat(A.reduce((s,r)=>s+(parseFloat(r.qty)||0),0).toFixed(3))};U.unshift(a),Rt(),A=[],de=0,G=0,Z="rp",h={name:"",phone:"",isMember:!1,memberId:null,isNewTempo:!1},Et(),Q(),X(),bt("hold"),y(`Antrean "${t}" berhasil diparkir!`,"success")},xt=(e=!1)=>{!e&&typeof window.pushModalHistory=="function"&&window.pushModalHistory("posHeldModal"),document.getElementById("pos-held-list-modal")?.remove();const t=U.length,a=t===0?`
        <div class="py-12 px-4 text-center">
            <div class="w-14 h-14 rounded-2xl bg-amber-50 dark:bg-amber-950/30 text-amber-500 flex items-center justify-center mx-auto mb-3 text-2xl shadow-inner">
                <i class="fa-solid fa-hourglass-half"></i>
            </div>
            <h4 class="font-bold text-sm text-slate-800 dark:text-slate-200">Tidak Ada Transaksi Tertahan</h4>
            <p class="text-xs text-slate-400 mt-1 max-w-xs mx-auto leading-relaxed">
                Gunakan tombol <span class="font-bold text-amber-600 dark:text-amber-400">"Tahan"</span> di keranjang kasir (atau tekan F6) untuk memarkir antrean saat pelanggan mengambil barang tambahan.
            </p>
        </div>`:`
        <div class="divide-y divide-slate-100 dark:divide-slate-800">
            ${U.map((s,r)=>{const o=b(s.id),n=(s.cart||[]).slice(0,3).map(l=>`${b(l.name)} (${V(l.qty)}x)`).join(", "),d=(s.cart||[]).length>3?` +${s.cart.length-3} lainnya`:"";return`
                <div class="p-3.5 sm:p-4 hover:bg-slate-50/80 dark:hover:bg-slate-800/40 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div class="min-w-0 flex-1">
                        <div class="flex items-center gap-2 mb-1 flex-wrap">
                            <span class="px-2 py-0.5 rounded-lg bg-amber-100 dark:bg-amber-900/40 text-amber-800 dark:text-amber-300 font-black text-[10px] uppercase">
                                #${r+1}
                            </span>
                            <h4 class="font-black text-xs sm:text-sm text-slate-900 dark:text-white truncate" title="${b(s.note)}">
                                ${b(s.note)}
                            </h4>
                            <span class="text-[10px] text-slate-400">• ${br(s.time)}</span>
                        </div>
                        <p class="text-[11px] text-slate-500 dark:text-slate-400 truncate mt-0.5">
                            <i class="fa-solid fa-box-open mr-1 text-[10px] opacity-70"></i>
                            <span>${n}${d}</span>
                        </p>
                        <div class="flex items-center gap-3 mt-1.5 text-xs">
                            <span class="text-slate-500 font-medium">${V(s.itemCount)} item</span>
                            <span class="text-slate-300 dark:text-slate-700">•</span>
                            <span class="font-black" style="color:var(--color-primary)">${g(s.total)}</span>
                            ${(s.globalDisc||0)>0?`<span class="text-[10px] text-rose-500 font-bold">(Disc: ${g(s.globalDisc)})</span>`:""}
                        </div>
                    </div>
                    <div class="flex items-center gap-2 shrink-0">
                        <button onclick="window.posDeleteHeldCart('${o}')" class="w-8 h-8 rounded-xl border border-rose-200 dark:border-rose-900/50 text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-950/30 flex items-center justify-center text-xs transition-all active:scale-95 cursor-pointer" title="Hapus Antrean">
                            <i class="fa-solid fa-trash-can"></i>
                        </button>
                        <button onclick="window.posRecallHeldCart('${o}')" class="px-3.5 py-2 rounded-xl text-white font-black text-xs shadow-md active:scale-95 transition-all flex items-center gap-1.5 cursor-pointer" style="background:var(--color-primary)">
                            <i class="fa-solid fa-play text-[10px]"></i>
                            <span>Panggil Antrean</span>
                        </button>
                    </div>
                </div>`}).join("")}
        </div>`;document.body.insertAdjacentHTML("beforeend",`
    <div id="pos-held-list-modal" class="fixed inset-0 z-[9999] flex items-end sm:items-center justify-center p-0 sm:p-4" style="background:rgba(15,23,42,0.75)">
        <div class="bg-white dark:bg-slate-900 rounded-t-3xl sm:rounded-3xl shadow-2xl w-full sm:max-w-lg max-h-[85vh] flex flex-col overflow-hidden border border-slate-200/80 dark:border-slate-800">
            <div class="p-4 sm:p-5 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between shrink-0 bg-slate-50/70 dark:bg-slate-800/40">
                <div class="flex items-center gap-2.5">
                    <div class="w-8 h-8 rounded-xl bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 flex items-center justify-center text-sm font-bold shadow-2xs">
                        <i class="fa-solid fa-hourglass-half"></i>
                    </div>
                    <div>
                        <h3 class="font-black text-sm text-slate-900 dark:text-white leading-tight flex items-center gap-2">
                            <span>Daftar Transaksi Tertahan (Parkir)</span>
                            <span class="px-2 py-0.5 rounded-full text-[10px] font-black bg-amber-500 text-white">${t}</span>
                        </h3>
                        <p class="text-[10px] text-slate-400">Panggil kembali belanjaan pelanggan yang diparkir (F8)</p>
                    </div>
                </div>
                <button onclick="window.closePOSHeldModal()" class="w-8 h-8 rounded-xl bg-slate-200/60 dark:bg-slate-700/60 text-slate-500 hover:text-slate-800 dark:hover:text-white text-lg flex items-center justify-center transition-all leading-none cursor-pointer">×</button>
            </div>
            <div class="overflow-y-auto flex-1 max-h-[55vh]">
                ${a}
            </div>
            <div class="p-3 sm:p-4 border-t border-slate-100 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-800/40 flex justify-between items-center shrink-0">
                <p class="text-[11px] text-slate-400 font-medium">
                    <i class="fa-solid fa-keyboard mr-1"></i>Tekan <kbd class="px-1 py-0.5 bg-slate-200 dark:bg-slate-700 rounded text-[9px] font-mono">F6</kbd> Tahan, <kbd class="px-1 py-0.5 bg-slate-200 dark:bg-slate-700 rounded text-[9px] font-mono">F8</kbd> Antrean
                </p>
                <button onclick="window.closePOSHeldModal()" class="px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 font-bold text-xs hover:bg-slate-100 dark:hover:bg-slate-800 transition-all cursor-pointer">
                    Tutup
                </button>
            </div>
        </div>
    </div>`)},et=(e=!1)=>{const t=p("pos-held-list-modal");t&&(!e&&typeof window.requestCloseModal=="function"?window.requestCloseModal("posHeldModal",!1,()=>t.remove()):t.remove())},da=e=>{const t=U.findIndex(a=>a.id===e);if(t===-1){y("Transaksi tertahan tidak ditemukan.","warning");return}if(A.length>0){document.getElementById("pos-recall-confirm-modal")?.remove(),document.body.insertAdjacentHTML("beforeend",`
        <div id="pos-recall-confirm-modal" class="fixed inset-0 z-[10000] flex items-center justify-center p-4" style="background:rgba(15,23,42,0.75)">
            <div class="bg-white dark:bg-slate-900 rounded-3xl shadow-2xl w-full max-w-sm border border-slate-200/80 dark:border-slate-800 overflow-hidden">
                <div class="p-5 text-center">
                    <div class="w-14 h-14 rounded-2xl bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 flex items-center justify-center mx-auto mb-3 text-2xl shadow-inner">
                        <i class="fa-solid fa-triangle-exclamation"></i>
                    </div>
                    <h3 class="font-black text-sm text-slate-900 dark:text-white mb-1">Keranjang Masih Berisi Item</h3>
                    <p class="text-xs text-slate-500 leading-relaxed mb-4">
                        Ada <span class="font-bold text-slate-800 dark:text-slate-200">${A.length} jenis item</span> di transaksi aktif saat ini. Ingin tahan transaksi aktif ke antrean baru atau menimpa?
                    </p>
                    <div class="flex flex-col gap-2">
                        <button onclick="window.posHoldCurrentAndRecall('${b(e)}')" class="w-full py-2.5 rounded-xl text-white font-bold text-xs shadow-md transition-all cursor-pointer flex items-center justify-center gap-1.5 active:scale-95 hover:brightness-105" style="background:var(--color-primary)">
                            <i class="fa-solid fa-floppy-disk"></i>
                            <span>Tahan Transaksi Aktif &amp; Panggil</span>
                        </button>
                        <button onclick="window.posOverwriteAndRecall('${b(e)}')" class="w-full py-2 rounded-xl border border-rose-200 dark:border-rose-900 text-rose-600 dark:text-rose-400 font-bold text-xs hover:bg-rose-50 dark:hover:bg-rose-950/20 transition-all cursor-pointer">
                            Timpa Transaksi Aktif
                        </button>
                        <button onclick="document.getElementById('pos-recall-confirm-modal')?.remove()" class="w-full py-2 rounded-xl text-slate-400 text-xs font-medium hover:text-slate-600 transition-all cursor-pointer">
                            Batal
                        </button>
                    </div>
                </div>
            </div>
        </div>`);return}ca(t)},ca=e=>{const t=U[e];t&&(A=JSON.parse(JSON.stringify(t.cart||[])),Z=t.discountType||"rp",G=t.discountVal!==void 0?t.discountVal:t.globalDisc||0,de=ie(),h=t.customer?{...t.customer}:{name:"",phone:"",isMember:!1,memberId:null,isNewTempo:!1},U.splice(e,1),Rt(),et(),Q(),X(),bt("recall"),y(`Antrean "${t.note}" berhasil dipanggil kembali!`,"success"))},pa=e=>{document.getElementById("pos-recall-confirm-modal")?.remove();const t=h?.name?`Antrean #${U.length+1} — ${h.name}`:`Antrean #${U.length+1}`,a={id:`HELD-${Date.now().toString(36).toUpperCase()}`,time:Date.now(),note:t,cart:JSON.parse(JSON.stringify(A)),globalDisc:ie(),discountType:Z,discountVal:G,customer:{...h},total:j(),subtotal:ne(),itemCount:parseFloat(A.reduce((r,o)=>r+(parseFloat(o.qty)||0),0).toFixed(3))};U.unshift(a);const s=U.findIndex(r=>r.id===e);s!==-1?ca(s):(Rt(),et())},ua=e=>{document.getElementById("pos-recall-confirm-modal")?.remove();const t=U.findIndex(a=>a.id===e);t!==-1&&ca(t)},fa=e=>{const t=U.find(a=>a.id===e);t&&(document.getElementById("pos-delete-confirm-modal")?.remove(),document.body.insertAdjacentHTML("beforeend",`
    <div id="pos-delete-confirm-modal" class="fixed inset-0 z-[10005] flex items-center justify-center p-4" style="background:rgba(15,23,42,0.8)">
        <div class="bg-white dark:bg-slate-900 rounded-3xl shadow-2xl w-full max-w-xs border border-slate-200 dark:border-slate-800 p-6 text-center transform transition-all">
            <div class="w-14 h-14 rounded-2xl bg-rose-50 dark:bg-rose-950/40 text-rose-500 border border-rose-200 dark:border-rose-900/50 flex items-center justify-center mx-auto mb-3.5 text-2xl shadow-inner">
                <i class="fa-solid fa-trash-can"></i>
            </div>
            <h4 class="font-black text-sm text-slate-900 dark:text-white mb-1.5">Hapus Antrean Ini?</h4>
            <p class="text-xs text-slate-500 dark:text-slate-400 mb-5 leading-relaxed">
                Antrean <span class="font-bold text-slate-800 dark:text-slate-200">"${b(t.note)}"</span> (${t.itemCount} item • ${g(t.total)}) akan dihapus permanen.
            </p>
            <div class="flex gap-2.5">
                <button onclick="document.getElementById('pos-delete-confirm-modal')?.remove()" class="flex-1 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all cursor-pointer">
                    Batal
                </button>
                <button onclick="window.posExecuteDeleteHeld('${b(e)}')" class="flex-1 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-700 active:scale-95 text-xs font-bold text-white shadow-md shadow-rose-600/30 transition-all cursor-pointer flex items-center justify-center gap-1.5">
                    <i class="fa-solid fa-trash-can text-[11px]"></i>
                    <span>Ya, Hapus</span>
                </button>
            </div>
        </div>
    </div>`))},ma=e=>{document.getElementById("pos-delete-confirm-modal")?.remove();const t=U.find(a=>a.id===e);U=U.filter(a=>a.id!==e),Rt(),y(`Antrean "${t?.note||""}" berhasil dihapus.`,"info"),xt(!0)},ba=()=>{const e=p("pos-mobile-cart-drawer"),t=p("pos-mobile-cart-sheet");e&&t&&(e.classList.remove("opacity-0","pointer-events-none"),e.classList.add("opacity-100"),t.classList.remove("translate-y-full"),t.classList.add("translate-y-0"),typeof window.pushModalHistory=="function"&&window.pushModalHistory("posCartDrawer"),typeof window.triggerHaptic=="function"&&window.triggerHaptic("light"))},tt=(e=!1)=>{const t=p("pos-mobile-cart-drawer"),a=p("pos-mobile-cart-sheet");if(t&&a){const s=()=>{a.classList.add("translate-y-full"),a.classList.remove("translate-y-0"),t.classList.add("opacity-0","pointer-events-none"),t.classList.remove("opacity-100")};!e&&typeof window.requestCloseModal=="function"?window.requestCloseModal("posCartDrawer",!1,s):s()}},xr=e=>{if(!e)return"";if(e.img&&typeof e.img=="string"&&!Ut(e.img))return Qt(e.img,"w150-rw");const t=(m?.products||[]).find(a=>a&&String(a.id)===String(e.id));return t&&t.img&&typeof t.img=="string"&&!Ut(t.img)?Qt(t.img,"w150-rw"):""},X=(e=!1)=>{try{if(e||(ze=1),!m?.products||!m.products.length)try{const i=JSON.parse(localStorage.getItem("freshmart_products")||"null");Array.isArray(i)&&i.length>0&&(m||(window.appData={}),m.products=i)}catch{}const t=Array.isArray(m?.products)?m.products:[],a=t.filter(i=>{if(!i||i.isActive==="false"||i.isActive===!1||xe&&i.category!==xe||Pe&&(i.subCategory||"").trim().toLowerCase()!==Pe.toLowerCase())return!1;if(ue){const u=String(ue).toLowerCase(),k=String(i.name||"").toLowerCase(),v=String(i.barcode||"").toLowerCase(),x=String(i.sku||"").toLowerCase(),w=String(i.category||"").toLowerCase(),S=String(i.subCategory||"").toLowerCase(),P=String(i.brand||"").toLowerCase(),O=Array.isArray(i.variants)&&i.variants.some(I=>(I.name||"").toLowerCase().includes(u)||(I.sku||"").toLowerCase().includes(u)||(I.barcode||"").toLowerCase().includes(u));return k.includes(u)||v.includes(u)||x.includes(u)||w.includes(u)||S.includes(u)||P.includes(u)||O}return!0}),s=t.filter(i=>i&&i.isActive!=="false"&&i.isActive!==!1&&i.category).map(i=>String(i.category).trim()).filter(i=>i.length>0),o=["Semua",...new Set(s)].map(i=>{const u=i==="Semua",k=u?!xe:xe===i;return`<button type="button" onclick="window.posCatFilter('${b(u?"":i)}')" class="shrink-0 px-3.5 py-1.5 rounded-xl text-[11px] font-black uppercase tracking-wider border transition-all active:scale-95 shadow-2xs cursor-pointer touch-manipulation select-none ${k?"text-white border-transparent":"bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:border-[var(--color-primary)]/50"}" style="${k?"background:linear-gradient(135deg, var(--color-primary-light,#e1b858) 0%, var(--color-primary,#c59b27) 60%, var(--color-primary-dark,#a87f1b) 100%);box-shadow:0 2px 8px rgba(var(--color-primary-rgb),0.3)":""}">${b(i)}</button>`}).join("");let n="";if(xe){const i=(m?.categories||[]).find(w=>w.name===xe),u=Array.isArray(i?.subCategories)?i.subCategories:[],k=t.filter(w=>w&&w.isActive!=="false"&&w.isActive!==!1&&w.category===xe),v={};u.forEach(w=>{const S=(w||"").trim();S&&(v[S]=0)}),k.forEach(w=>{const S=(w.subCategory||"").trim();S&&(v[S]=(v[S]||0)+1)});const x=Object.keys(v).sort().map(w=>({name:w,count:v[w]}));x.length>0&&(n=`
                <div class="flex items-center gap-1.5 overflow-x-auto pb-1 hide-scrollbar pt-1.5 mt-1 border-t border-slate-100 dark:border-slate-700/50 w-full">
                    <button type="button" onclick="window.posSubCatFilter('')" class="shrink-0 px-2.5 py-1 rounded-lg text-[10px] font-bold uppercase transition-all active:scale-95 border cursor-pointer touch-manipulation select-none ${Pe?"bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700":"bg-slate-800 text-white dark:bg-white dark:text-slate-900 border-transparent shadow-2xs"}">Semua Jenis</button>
                    ${x.map(w=>{const S=Pe.toLowerCase()===w.name.toLowerCase();return`<button type="button" onclick="window.posSubCatFilter('${b(w.name).replace(/'/g,"\\'")}')" class="shrink-0 px-2.5 py-1 rounded-lg text-[10px] font-bold transition-all active:scale-95 border flex items-center gap-1 cursor-pointer touch-manipulation select-none ${S?"bg-[var(--color-primary)] text-white border-transparent shadow-2xs":"bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700"}">
                            <span>${b(w.name)}</span>
                            <span class="text-[9px] px-1 py-0.2 rounded-full ${S?"bg-white/20 text-white":"bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300"}">${w.count}</span>
                        </button>`}).join("")}
                </div>`)}const d=a.slice(0,ze*ur),l=a.length>d.length;let c=a.length===0?`<div class="col-span-full flex flex-col items-center justify-center py-20 text-slate-400 dark:text-slate-600">
                 <div class="w-16 h-16 rounded-3xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-400 mb-3 shadow-inner">
                   <i class="fa-solid fa-box-open text-2xl"></i>
                 </div>
                 <p class="font-bold text-sm text-slate-600 dark:text-slate-400">Produk Tidak Ditemukan</p>
                 <p class="text-xs text-slate-400 mt-0.5">Coba gunakan kata kunci pencarian atau kategori lain</p>
               </div>`:d.map(i=>{if(!i)return"";const u=!!(i.img&&typeof i.img=="string"&&i.img.trim()&&!Ut(i.img)),k=u?Qt(i.img,"w300-rw"):"",v=Array.isArray(i.variants)&&i.variants.length>0,x=Array.isArray(i.wholesale)&&i.wholesale.length>0,w=A.filter(q=>q&&String(q.id)===String(i.id)),S=parseFloat(w.reduce((q,H)=>q+(H&&H.qty&&parseFloat(H.qty)||0),0).toFixed(3)),P=b(String(i.id!=null?i.id:"")),O=Xe(i),I=b(String(i.name||"Produk")),D=b(String(i.category||"")),R=parseFloat(i.price)||0;let J="";if(v){const q=(i.variants||[]).map(H=>parseFloat(H.price)||0).filter(H=>H>0);if(q.length>0){const H=Math.min(...q),je=Math.max(...q);J=H===je?g(H):`${g(H)} - ${g(je)}`}else J=R>0?g(R):"Pilih Varian"}else J=g(R);let Y="",T="";if(i.priceNormal&&parseFloat(i.priceNormal)>R)Y=`<span class="bg-rose-500 text-white px-2 py-0.5 rounded-md text-[8.5px] font-extrabold flex items-center gap-1 whitespace-nowrap shrink-0 uppercase tracking-wider shadow-sm"><i class="fa-solid fa-tags text-[7.5px]"></i> -${Math.round((parseFloat(i.priceNormal)-R)/parseFloat(i.priceNormal)*100)}%</span>`,T=`<p class="text-[10px] sm:text-[11px] text-slate-400 dark:text-slate-500 line-through leading-none font-semibold truncate mb-0.5">${g(parseFloat(i.priceNormal))}</p>`;else if(v&&i.variants&&i.variants.length){const q=i.variants.filter(H=>H.priceNormal&&parseFloat(H.priceNormal)>parseFloat(H.price)).map(H=>Math.round((parseFloat(H.priceNormal)-parseFloat(H.price))/parseFloat(H.priceNormal)*100));q.length>0&&(Y=`<span class="bg-rose-500 text-white px-2 py-0.5 rounded-md text-[8.5px] font-extrabold flex items-center gap-1 whitespace-nowrap shrink-0 uppercase tracking-wider shadow-sm"><i class="fa-solid fa-tags text-[7.5px]"></i> -${Math.max(...q)}%</span>`)}const E=i.poTime?hs(i.poTime):"";let f=E?`<span class="bg-amber-500 text-white px-2 py-0.5 rounded-md text-[8.5px] font-extrabold flex items-center gap-1 whitespace-nowrap shrink-0 uppercase tracking-wider shadow-sm"><i class="fa-solid fa-clock text-[7.5px]"></i> PO ${b(E)}</span>`:"";const $=b(`${i.subCategory||D||"PRODUK"}${i.brand?` · ${i.brand}`:""}`);let F="";O.isOutOfStock?F='<span class="bg-rose-500 text-white px-2 py-0.5 rounded-md text-[8.5px] font-extrabold flex items-center gap-1 whitespace-nowrap shrink-0 uppercase tracking-wider shadow-sm"><i class="fa-solid fa-ban text-[7.5px]"></i> Habis</span>':O.isLowStock?F=`<span class="bg-rose-500 text-white px-2 py-0.5 rounded-md text-[8.5px] font-extrabold flex items-center gap-1 whitespace-nowrap shrink-0 uppercase tracking-wider shadow-sm"><i class="fa-solid fa-fire text-[7.5px]"></i> Sisa ${V(O.totalStock)}</span>`:O.isManaged&&O.totalStock>0&&(F=`<span class="bg-slate-800/90 dark:bg-slate-700 text-white px-2 py-0.5 rounded-md text-[8.5px] font-bold flex items-center gap-1 whitespace-nowrap shrink-0 uppercase tracking-wider"><i class="fa-solid fa-box text-[7.5px]"></i> Stok ${V(O.totalStock)}</span>`);const M=v?'<span class="bg-indigo-50 text-indigo-600 dark:bg-indigo-950/60 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-800/50 px-1.5 py-0.5 rounded-md text-[8.5px] font-bold flex items-center gap-1 whitespace-nowrap shrink-0 uppercase tracking-wider"><i class="fa-solid fa-layer-group text-[7.5px]"></i> Varian</span>':"",L=x?'<span class="amber-badge px-1.5 py-0.5 rounded-md text-[8.5px] font-bold flex items-center gap-1 whitespace-nowrap shrink-0 uppercase tracking-wider"><i class="fa-solid fa-tags text-[7.5px]"></i> Grosir</span>':"",ae=i.variants&&i.variants.length?Math.max(...i.variants.map(q=>parseFloat(q.poin)||0)):parseFloat(i.poin)||0,_=ae>0?`<span class="bg-[rgba(var(--color-primary-rgb),0.08)] text-[var(--color-primary)] border border-[rgba(var(--color-primary-rgb),0.2)] px-1.5 py-0.5 rounded-md text-[8.5px] font-bold flex items-center gap-1 whitespace-nowrap shrink-0 uppercase tracking-wider"><i class="fa-solid fa-star text-[7.5px]"></i> +${ae}</span>`:"",z=i.variants&&i.variants.length?i.variants.reduce((q,H)=>q+(parseFloat(H.totalSold)||0),0):parseFloat(i.totalSold)||0,W=z>0?`<span class="bg-slate-100 text-slate-600 dark:bg-slate-700/60 dark:text-slate-300 border border-slate-200/80 dark:border-slate-600/50 px-1.5 py-0.5 rounded-md text-[8.5px] font-bold flex items-center gap-1 whitespace-nowrap shrink-0 uppercase tracking-wider"><i class="fa-solid fa-fire text-amber-500 text-[7.5px]"></i> ${z} Terjual</span>`:"",pe=i.unit&&typeof i.unit=="string"&&i.unit.trim()?`<span class="bg-sky-50 text-sky-700 dark:bg-sky-950/60 dark:text-sky-300 border border-sky-200/80 dark:border-sky-800/50 px-1.5 py-0.5 rounded-md text-[8.5px] font-bold flex items-center gap-1 whitespace-nowrap shrink-0 uppercase tracking-wider"><i class="fa-solid fa-cube text-sky-600 dark:text-sky-400 text-[7.5px]"></i> ${b(i.unit.trim())}</span>`:"";let at="";if(re()){let q=0,H="";if(v){const je=(i.variants||[]).map(ve=>ve.hpp!=null?parseFloat(ve.hpp)||0:parseFloat(i.hpp)||0).filter(ve=>ve>0);if(je.length>0){const ve=Math.min(...je),Ra=Math.max(...je);q=ve,H=ve===Ra?g(ve):`${g(ve)} - ${g(Ra)}`}else i.hpp!=null&&parseFloat(i.hpp)>0&&(q=parseFloat(i.hpp),H=g(q))}else i.hpp!=null&&parseFloat(i.hpp)>0&&(q=parseFloat(i.hpp),H=g(q));(H||i.hpp!=null&&parseFloat(i.hpp)>0)&&(at=`<span class="bg-amber-50 text-amber-800 dark:bg-amber-950/60 dark:text-amber-300 border border-amber-200/90 dark:border-amber-800/60 px-1.5 py-0.5 rounded-md text-[8.5px] font-bold flex items-center gap-1 whitespace-nowrap shrink-0 uppercase tracking-wider" title="Harga Pokok Penjualan (Modal Toko)"><i class="fa-solid fa-coins text-[7.5px] text-amber-600 dark:text-amber-400"></i> Modal: ${H||g(parseFloat(i.hpp))}</span>`)}const me=[];Y&&me.push(Y),F&&me.push(F),f&&me.push(f),pe&&me.push(pe),M&&me.push(M),L&&me.push(L),_&&me.push(_),W&&me.push(W),at&&me.push(at);const ja=me.join(""),Ha=Gt(i,{size:"sm"}),Ba=Gt(i,{size:"md"});return Se==="list"?`
                    <div class="pos-list-item w-full bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/70 rounded-2xl shadow-xs transition-all duration-300 flex items-center p-3 sm:p-3.5 gap-3 sm:gap-4 group relative overflow-hidden text-left shrink-0${S>0?" in-cart":""}${O.isOutOfStock?" is-out-of-stock cursor-not-allowed":" cursor-pointer"}" onclick="window.posAddToCart('${P}')">
                        <!-- Thumbnail Kiri (Ukuran Presisi 80px/96px Bersih Murni Anti-Gepeng) -->
                        <div class="pos-list-thumb relative w-20 h-20 sm:w-24 sm:h-24 shrink-0 bg-slate-50 dark:bg-slate-900 rounded-xl sm:rounded-2xl flex items-center justify-center border border-slate-100 dark:border-slate-700/50 overflow-hidden">
                            ${O.isOutOfStock?`
                                <div class="absolute inset-0 bg-slate-900/70 z-20 flex items-center justify-center">
                                    <span class="bg-rose-600 text-white text-[8px] font-black px-1.5 py-0.5 rounded shadow uppercase tracking-wider flex items-center gap-0.5">
                                        <i class="fa-solid fa-ban"></i> HABIS
                                    </span>
                                </div>`:""}
                            ${S>0?`<div class="pos-qty-badge" style="top:2px;right:2px;min-width:20px;height:20px;font-size:9.5px;border-width:1.5px">+${V(S)}</div>`:""}
                            ${u?`<img width="96" height="96" loading="lazy" decoding="async" src="${b(k)}" alt="${I}"
                                     class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 ${O.isOutOfStock?"grayscale opacity-50":""}"
                                     onerror="this.onerror=null;this.style.display='none';this.nextElementSibling.style.display='flex';">
                                   <div class="w-full h-full" style="display:none">${Ha}</div>`:Ha}
                        </div>
                        <!-- Konten Kanan -->
                        <div class="flex-1 min-w-0 flex flex-col justify-between py-0.5 gap-1 relative z-10 pr-0.5">
                            <!-- Line 1: Eyebrow Kategori & Merek -->
                            <p class="text-[9.5px] sm:text-[10px] uppercase tracking-wider font-bold text-slate-400 dark:text-slate-500 truncate leading-none">${$}</p>
                            <!-- Line 2: Nama Produk -->
                            <h4 class="text-xs sm:text-[14px] font-bold text-slate-800 dark:text-slate-100 line-clamp-1 sm:line-clamp-2 leading-snug group-hover:text-[var(--color-primary)] transition-colors uppercase break-words" title="${I}">${I}</h4>
                            <!-- Line 3: Chips Badges Lengkap & Rapi (Bisa 2, 3, 4+ Baris, Anti-Terpotong) -->
                            <div class="product-chips-wrap">
                                ${ja}
                            </div>
                            <!-- Line 4: Harga & Action Button -->
                            <div class="flex items-center justify-between pt-0.5">
                                <div class="flex items-baseline gap-1.5 min-w-0">
                                    <p class="text-[var(--color-primary)] font-black text-xs sm:text-[15px] leading-none tracking-tight truncate">${J}</p>
                                    ${i.unit?`<span class="text-[9.5px] sm:text-[10px] text-slate-400 dark:text-slate-500 font-bold ml-0.5 uppercase tracking-wide">/${b(i.unit)}</span>`:""}
                                    ${T?`<span class="text-[10px] sm:text-[11px] text-slate-400 dark:text-slate-500 line-through leading-none font-semibold truncate">${g(parseFloat(i.priceNormal))}</span>`:""}
                                </div>
                                <button type="button" class="${O.isOutOfStock?"btn-catalog-action btn-catalog-disabled":S>0?"btn-catalog-action btn-catalog-add ring-2 ring-[var(--color-primary)]/30":v?"btn-catalog-action btn-catalog-variant":"btn-catalog-action btn-catalog-add"} mr-0.5 z-20" onclick="event.stopPropagation();window.posAddToCart('${P}')" title="${O.isOutOfStock?"Stok Habis":S>0?"Tambah lagi (+1)":v?"Pilih Varian":"Tambah ke Keranjang"}">
                                    ${O.isOutOfStock?'<i class="fa-solid fa-ban text-xs"></i>':S>0?`<b class="text-xs font-black">+${V(S)}</b>`:v?'<i class="fa-solid fa-layer-group text-[12.5px] font-bold leading-none drop-shadow-2xs"></i>':'<i class="fa-solid fa-plus text-[13px] font-black leading-none drop-shadow-2xs"></i>'}
                                </button>
                            </div>
                        </div>
                    </div>`:`
                <div class="pos-product-card w-full bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/70 rounded-2xl shadow-xs transition-all duration-300 flex flex-col group relative overflow-hidden text-left${S>0?" in-cart":""}${O.isOutOfStock?" is-out-of-stock cursor-not-allowed":" cursor-pointer"}" onclick="window.posAddToCart('${P}')">
                    <!-- Kotak Gambar Rasio 1:1 Flush Cover Bersih Murni (Tanpa Badge Menutupi Gambar) -->
                    <div class="pos-img-box relative aspect-square w-full bg-slate-50 dark:bg-slate-900/80 flex items-center justify-center shrink-0 border-b border-slate-100 dark:border-slate-700/50 overflow-hidden">
                        ${O.isOutOfStock?`
                            <div class="absolute inset-0 bg-slate-900/70 z-20 flex items-center justify-center">
                                <span class="bg-rose-600 text-white text-[9px] font-black px-2.5 py-1 rounded-lg shadow-md uppercase tracking-wider flex items-center gap-1">
                                    <i class="fa-solid fa-ban"></i> HABIS
                                </span>
                            </div>`:""}
                        ${S>0?`<div class="pos-qty-badge">+${V(S)}</div>`:""}
                        ${u?`<img width="300" height="300" loading="lazy" decoding="async" src="${b(k)}" alt="${I}"
                                 class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 ${O.isOutOfStock?"grayscale opacity-50":""}"
                                 onerror="this.onerror=null;this.style.display='none';this.nextElementSibling.style.display='flex';">
                               <div class="w-full h-full" style="display:none">${Ba}</div>`:Ba}
                    </div>
                    <!-- Info Produk Rapi & Lega -->
                    <div class="pos-card-info flex-1 flex flex-col p-3 sm:p-3.5 min-w-0 bg-white dark:bg-slate-800 relative z-10">
                        <p class="pos-card-cat text-[9.5px] sm:text-[10px] uppercase tracking-wider font-bold text-slate-400 dark:text-slate-500 truncate leading-none mb-1.5">${$}</p>
                        <h4 class="pos-card-name text-xs sm:text-[13px] font-bold text-slate-800 dark:text-slate-100 line-clamp-2 leading-snug min-h-[2.3rem] sm:min-h-[2.5rem] mb-1.5 group-hover:text-[var(--color-primary)] transition-colors uppercase break-words" title="${I}">${I}</h4>
                        <!-- Baris Chip Operasional Lengkap (Bisa 2, 3, 4+ Baris Mengalir, Anti-Terpotong) -->
                        <div class="product-chips-wrap">
                            ${ja}
                        </div>
                        <!-- Footer Harga & Tombol Aksi POS (Anti-Potong) -->
                        <div class="pos-card-footer flex items-end justify-between mt-auto pt-1.5 border-t border-slate-100 dark:border-slate-700/50 shrink-0 gap-2">
                            <div class="min-w-0 pr-1 flex-1">
                                <div class="h-3.5 flex items-center mb-0.5">
                                    ${T}
                                </div>
                                <div class="flex items-baseline gap-0.5">
                                    <p class="pos-card-price text-[var(--color-primary)] font-black text-xs sm:text-[14px] lg:text-[15px] leading-tight tracking-tight break-words">${J}</p>
                                    ${i.unit?`<span class="text-[9.5px] sm:text-[10px] text-slate-400 dark:text-slate-500 font-bold ml-0.5 mb-0.5 uppercase tracking-wide">/${b(i.unit)}</span>`:""}
                                </div>
                            </div>
                            <button type="button" class="${O.isOutOfStock?"btn-catalog-action btn-catalog-disabled":S>0?"btn-catalog-action btn-catalog-add ring-2 ring-[var(--color-primary)]/30":v?"btn-catalog-action btn-catalog-variant":"btn-catalog-action btn-catalog-add"} z-20" onclick="event.stopPropagation();window.posAddToCart('${P}')" title="${O.isOutOfStock?"Stok Habis":S>0?"Tambah lagi (+1)":v?"Pilih Varian":"Tambah ke Keranjang"}" aria-label="${I}">
                                ${O.isOutOfStock?'<i class="fa-solid fa-ban text-xs"></i>':S>0?`<b class="text-xs font-black">+${V(S)}</b>`:v?'<i class="fa-solid fa-layer-group text-[12.5px] font-bold leading-none drop-shadow-2xs"></i>':'<i class="fa-solid fa-plus text-[13px] font-black leading-none drop-shadow-2xs"></i>'}
                            </button>
                        </div>
                    </div>
                </div>`}).join("");a.length>0&&l&&(c+=`
            <div class="col-span-full py-4 flex flex-col items-center justify-center gap-2">
                <button type="button" onclick="window.posLoadMoreProducts()" class="px-6 py-2.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-700 dark:text-slate-200 hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition-all shadow-2xs active:scale-95 flex items-center gap-2 cursor-pointer group">
                    <i class="fa-solid fa-layer-group text-[var(--color-primary)] group-hover:scale-110 transition-transform"></i>
                    <span>Tampilkan Lebih Banyak (${a.length-d.length} lagi)</span>
                </button>
                <span class="text-[10px] text-slate-400 dark:text-slate-500 font-medium">Menampilkan ${d.length} dari ${a.length} produk</span>
            </div>`),document.querySelectorAll("#pos-cat-filter").forEach(i=>{i.innerHTML=o}),document.querySelectorAll("#pos-subcat-filter").forEach(i=>{i.innerHTML=n,n?i.classList.remove("hidden"):i.classList.add("hidden")}),document.querySelectorAll("#pos-catalog-grid").forEach(i=>{i.className=Se==="list"?"pos-catalog-list-mode":"pos-catalog-grid-mode",i.innerHTML=c})}catch(t){console.error("[POS] renderCatalog error:",t),document.querySelectorAll("#pos-catalog-grid").forEach(a=>{a.innerHTML=`
                <div class="col-span-full flex flex-col items-center justify-center py-16 text-slate-500">
                    <i class="fa-solid fa-triangle-exclamation text-amber-500 text-3xl mb-3"></i>
                    <p class="font-bold text-sm text-slate-700 dark:text-slate-300">Gagal Memuat Katalog Kasir</p>
                    <p class="text-xs text-slate-400 mt-1 mb-4">${b(t.message||"Terjadi kesalahan")}</p>
                    <button onclick="if(typeof window.posRenderCatalog==='function') window.posRenderCatalog(); else if(typeof window.refreshPOSCatalog==='function') window.refreshPOSCatalog();" class="px-4 py-2 rounded-xl text-xs font-bold text-white shadow-md active:scale-95 cursor-pointer" style="background:var(--color-primary)">
                        <i class="fa-solid fa-arrows-rotate mr-1.5"></i> Coba Muat Ulang
                    </button>
                </div>`})}},Q=()=>{const e=parseFloat(A.reduce((f,$)=>f+(parseFloat($.qty)||0),0).toFixed(3)),t=ne(),a=j(),s=g(a),r=g(t),o=A.length===0?`<div class="flex flex-col items-center justify-center h-full py-12 text-slate-300 dark:text-slate-600 select-none">
            <div class="w-16 h-16 rounded-3xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-400 mb-3 shadow-inner">
                <i class="fa-solid fa-cart-shopping text-2xl"></i>
            </div>
            <p class="text-sm font-bold text-slate-600 dark:text-slate-400">Keranjang Kasir Kosong</p>
            <p class="text-xs text-slate-400 mt-1 text-center max-w-[200px]">Pilih produk di katalog atau scan barcode untuk menambah</p>
           </div>`:A.map(f=>{const $=b(String(f.cartKey||f.id)),F=xr(f),M=f.isVariant&&f.variantName?b(f.name.replace(` — ${f.variantName}`,"")):b(f.name),L=f.hpp!=null?parseFloat(f.hpp):Je(f)||0,ae=L>0?Math.max(0,Math.round((f.price-L)*f.qty)):Math.round(f.price*f.qty),_=L>0?Math.round(f.subtotal-L*f.qty):0,z=Gt(f,{size:"thumb"}),W=(parseFloat(f.discount)||0)>0,pe=Mt.has(String(f.cartKey||f.id))||W;return`
            <div class="group flex items-start gap-2.5 p-2 sm:p-2.5 bg-white dark:bg-slate-800/90 rounded-2xl border border-slate-200/90 dark:border-slate-700/80 shadow-xs hover:border-[var(--color-primary)] transition-all">
                <!-- 44px Thumbnail -->
                <div class="w-10 h-10 sm:w-11 sm:h-11 rounded-xl overflow-hidden shrink-0 border border-slate-200/60 dark:border-slate-700 flex items-center justify-center bg-slate-50 dark:bg-slate-800">
                    ${F?`<img width="44" height="44" loading="lazy" src="${b(F)}" alt="${b(f.name)}" onerror="this.onerror=null; this.style.display='none'; this.nextElementSibling.style.display='flex';" class="w-full h-full object-cover">
                           <div class="w-full h-full" style="display:none">${z}</div>`:z}
                </div>
                <!-- Details -->
                <div class="flex-1 min-w-0 pr-1">
                    <p class="text-xs font-bold text-slate-800 dark:text-slate-100 truncate leading-snug" title="${b(f.name)}">${M}</p>
                    <div class="flex items-center gap-1.5 mt-0.5 flex-wrap">
                        ${f.isWholesale?'<span class="inline-flex items-center text-[8px] font-black px-1.5 py-0.5 rounded text-white shadow-2xs" style="background:var(--color-primary)">GROSIR</span>':""}
                        ${f.isVariant?`<span class="inline-flex items-center gap-1 text-[8px] font-black px-1.5 py-0.5 rounded text-white shadow-2xs" style="background:var(--color-primary);opacity:0.95"><i class="fa-solid fa-layer-group text-[7px]"></i>${b(f.variantName||"VARIAN")}</span>`:""}
                        ${f.poTime?`<span class="inline-flex items-center gap-1 text-[8px] font-bold px-1.5 py-0.5 rounded text-amber-700 bg-amber-100 dark:bg-amber-900/30 dark:text-amber-300 border border-amber-200 dark:border-amber-800 shadow-2xs uppercase tracking-wide"><i class="fa-solid fa-clock text-[7px]"></i> PO ${b(f.poTime)}</span>`:""}
                        ${re()&&L>0?`<span class="inline-flex items-center gap-1 text-[8px] font-black px-1.5 py-0.5 rounded text-amber-950 bg-amber-100 dark:bg-amber-950/60 dark:text-amber-300 border border-amber-300/80 dark:border-amber-700 shadow-2xs" title="Harga Modal (HPP)"><i class="fa-solid fa-coins text-[7px] text-amber-600 dark:text-amber-400"></i>HPP: ${g(L)}</span>`:""}
                        <span class="text-[10px] text-slate-500 font-medium">
                            ${f.isWholesale&&f.basePrice?`<span class="line-through text-slate-400">${g(f.basePrice)}</span> <span class="font-bold" style="color:var(--color-primary)">${g(f.price)}</span>`:g(f.price)}
                        </span>
                    </div>

                    <!-- Smart Item Discount Toggle / Input (Ramping & Bebas Sesak) -->
                    ${pe?`
                        <div class="flex items-center gap-1.5 mt-1.5 flex-wrap">
                            <span class="text-[9px] text-slate-400 font-bold uppercase tracking-wider">Diskon:</span>
                            <input type="number" min="0" ${L>0?`max="${ae}"`:""} placeholder="0" value="${f.discount||""}" onchange="window.posSetItemDisc('${$}',this.value)"
                                class="w-16 text-[10px] font-mono font-bold border border-slate-200 dark:border-slate-700 rounded-md px-1.5 py-0.5 bg-slate-50 dark:bg-slate-700/60 text-right focus:outline-none focus:border-[var(--color-primary)] transition-all">
                            ${re()&&L>0?`<span class="text-[9px] text-amber-600 dark:text-amber-400 font-bold whitespace-nowrap" title="Maksimal diskon">(Maks: ${g(ae)})</span>`:""}
                            ${W?"":`<button type="button" onclick="window.togglePOSItemDiscInput('${$}')" class="text-[9px] text-slate-400 hover:text-rose-500 ml-0.5 cursor-pointer" title="Tutup input diskon"><i class="fa-solid fa-xmark"></i></button>`}
                        </div>`:`
                        <div class="flex items-center gap-2 mt-1">
                            <button type="button" onclick="window.togglePOSItemDiscInput('${$}')" class="pos-item-disc-btn" title="Beri diskon khusus per item">
                                <i class="fa-solid fa-tag text-[8px]"></i> +Diskon
                            </button>
                        </div>`}
                </div>
                <!-- Stepper & Subtotal -->
                <div class="flex flex-col items-end shrink-0">
                    <div class="flex items-center gap-1">
                        <div class="flex items-center bg-slate-100 dark:bg-slate-700/80 rounded-lg p-0.5 border border-slate-200 dark:border-slate-600 focus-within:border-[var(--color-primary)] transition-colors">
                            <button onclick="window.posUpdateQty('${$}',-1)" class="w-5 h-5 rounded text-slate-600 dark:text-slate-200 hover:bg-white dark:hover:bg-slate-600 font-black text-xs flex items-center justify-center cursor-pointer active:scale-90 transition-all">−</button>
                            <input type="number" step="any" min="0.01" value="${V(f.qty)}" onchange="window.posSetQty('${$}',this.value)"
                                class="w-11 text-center text-[11px] font-black bg-transparent text-slate-800 dark:text-slate-100 focus:outline-none px-0.5">
                            <button onclick="window.posUpdateQty('${$}',1)" class="w-5 h-5 rounded text-slate-600 dark:text-slate-200 hover:bg-white dark:hover:bg-slate-600 font-black text-xs flex items-center justify-center cursor-pointer active:scale-90 transition-all">+</button>
                        </div>
                        <button onclick="window.posRemoveItem('${$}')" class="w-6 h-6 rounded-lg text-slate-400 hover:text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-950/30 flex items-center justify-center text-xs transition-all cursor-pointer" title="Hapus item">
                            <i class="fa-solid fa-trash-can"></i>
                        </button>
                    </div>
                    <div class="flex items-baseline gap-1 mt-1.5">
                        ${W?`<span class="line-through text-[10px] text-slate-400">${g(f.price*f.qty)}</span>`:""}
                        <p class="text-xs font-black" style="color:var(--color-primary)">${g(f.subtotal)}</p>
                    </div>
                    ${re()&&L>0?`<p class="text-[9px] font-bold ${_>=0?"text-emerald-600 dark:text-emerald-400":"text-rose-500"} mt-0.5" title="Estimasi laba kotor item ini"><i class="fa-solid fa-arrow-trend-up text-[8px] mr-0.5"></i>Untung: ${g(_)}</p>`:""}
                </div>
            </div>`}).join("");document.querySelectorAll(".pos-cart-items-target").forEach(f=>f.innerHTML=o),document.querySelectorAll(".pos-subtotal-target").forEach(f=>f.textContent=r),document.querySelectorAll(".pos-total-target").forEach(f=>f.textContent=s),document.querySelectorAll(".pos-item-count-target").forEach(f=>f.textContent=V(e));const n=re(),d=n?ke():0,l=g(d),c=n?Math.max(0,a-d):0,i=g(c);document.querySelectorAll(".pos-total-hpp-target").forEach(f=>f.textContent=l),document.querySelectorAll(".pos-total-margin-target").forEach(f=>f.textContent=i),document.querySelectorAll(".pos-hpp-margin-row").forEach(f=>{f.style.display=n?"flex":"none"});const u=A.length>0;document.querySelectorAll(".pos-cart-breakdown").forEach(f=>{f.style.display=u?"block":"none"});const k=se(),v=k&&(k.ppnEnabled||k.ppnAmount&&k.ppnAmount>0||k.ppnRate>0&&(m.store?.ppnEnabled===!0||m.store?.ppnEnabled==="true")),x=k?.ppnType==="inclusive",w=k?.ppnAmount||0,S=k?.ppnRate||0,P=k?.ppnLabel||`${x?"Inc. PPN":"PPN"} (${S}%)`,O=w>0?`${x?"":"+"}${g(w)}`:"Rp 0";document.querySelectorAll(".pos-tax-breakdown-row").forEach(f=>{f.style.display=u&&v?"flex":"none"}),document.querySelectorAll(".pos-tax-label-target").forEach(f=>{f.textContent=P}),document.querySelectorAll(".pos-tax-amt-target").forEach(f=>{f.textContent=O});const I=ie(),D=g(I);document.querySelectorAll(".pos-disc-val-input").forEach(f=>{document.activeElement!==f&&(f.value=G||"")}),document.querySelectorAll(".pos-global-disc-target").forEach(f=>{document.activeElement!==f&&(f.value=G||"")}),document.querySelectorAll(".pos-disc-preview-target").forEach(f=>{I>0?(f.textContent=`- ${D}`,f.classList.remove("hidden"),f.classList.add("text-rose-500")):(f.textContent="",f.classList.add("hidden"))}),document.querySelectorAll(".pos-disc-type-rp").forEach(f=>{Z==="rp"?(f.className="pos-disc-type-rp px-2.5 py-0.5 rounded-md transition-all cursor-pointer font-black text-white shadow-xs text-[10px]",f.style.background="var(--color-primary)",f.style.color="#ffffff"):(f.className="pos-disc-type-rp px-2.5 py-0.5 rounded-md transition-all cursor-pointer text-slate-600 dark:text-slate-300 hover:text-slate-900 font-bold text-[10px]",f.style.background="transparent",f.style.color="")}),document.querySelectorAll(".pos-disc-type-pct").forEach(f=>{Z==="percent"?(f.className="pos-disc-type-pct px-2.5 py-0.5 rounded-md transition-all cursor-pointer font-black text-white shadow-xs text-[10px]",f.style.background="var(--color-primary)",f.style.color="#ffffff"):(f.className="pos-disc-type-pct px-2.5 py-0.5 rounded-md transition-all cursor-pointer text-slate-600 dark:text-slate-300 hover:text-slate-900 font-bold text-[10px]",f.style.background="transparent",f.style.color="")}),document.querySelectorAll(".pos-disc-prefix").forEach(f=>{f.textContent=Z==="percent"?"%":"Rp",f.style.color="var(--color-primary)"});const R=[5,10,15,20,50],J=[2e3,5e3,1e4,25e3,5e4],Y=(f,$)=>Z===$&&Number(G)===Number(f),T=Z==="percent"?`
        ${R.map(f=>{const $=Y(f,"percent");return`<button onclick="window.posApplyQuickDiscount(${f},'percent')" 
                class="px-2.5 py-1 rounded-lg text-[10px] cursor-pointer transition-all active:scale-95 ${$?"text-white shadow-xs font-black":"bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-slate-700 font-bold"}"
                style="${$?"background:var(--color-primary);border:1px solid var(--color-primary);":""}">${f}%</button>`}).join("")}
        ${G>0?`<button onclick="window.posApplyQuickDiscount(0,'percent')" class="px-2.5 py-1 rounded-lg bg-rose-50 hover:bg-rose-100 dark:bg-rose-950/40 text-[10px] font-bold text-rose-600 dark:text-rose-400 border border-rose-200 dark:border-rose-800 cursor-pointer transition-all active:scale-95"><i class="fa-solid fa-rotate-left mr-1 text-[9px]"></i>Reset</button>`:""}
        `:`
        ${J.map(f=>{const $=Y(f,"rp"),F=`${f/1e3}rb`;return`<button onclick="window.posApplyQuickDiscount(${f},'rp')" 
                class="px-2.5 py-1 rounded-lg text-[10px] cursor-pointer transition-all active:scale-95 ${$?"text-white shadow-xs font-black":"bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-slate-700 font-bold"}"
                style="${$?"background:var(--color-primary);border:1px solid var(--color-primary);":""}">${F}</button>`}).join("")}
        ${G>0?`<button onclick="window.posApplyQuickDiscount(0,'rp')" class="px-2.5 py-1 rounded-lg bg-rose-50 hover:bg-rose-100 dark:bg-rose-950/40 text-[10px] font-bold text-rose-600 dark:text-rose-400 border border-rose-200 dark:border-rose-800 cursor-pointer transition-all active:scale-95"><i class="fa-solid fa-rotate-left mr-1 text-[9px]"></i>Reset</button>`:""}
        `;document.querySelectorAll(".pos-disc-chips-target").forEach(f=>f.innerHTML=T),document.querySelectorAll(".pos-pay-btn-target").forEach(f=>{f.disabled=A.length===0;const $=f.querySelector(".btn-text");$&&($.textContent=A.length>0?`BAYAR — ${s}`:"PROSES PEMBAYARAN")}),document.querySelectorAll(".pos-hold-btn-target").forEach(f=>{f.disabled=A.length===0,A.length===0?f.classList.add("opacity-40","cursor-not-allowed"):f.classList.remove("opacity-40","cursor-not-allowed")}),Ee();const E=p("pos-mobile-floating-bar");E&&(A.length>0?(E.classList.remove("translate-y-32","opacity-0","pointer-events-none"),E.classList.add("translate-y-0","opacity-100")):(E.classList.add("translate-y-32","opacity-0","pointer-events-none"),E.classList.remove("translate-y-0","opacity-100"),tt(!0)))},xa=()=>{if(A.length===0){y("Keranjang masih kosong!","warning");return}const e=ke();if(e>0&&j()<e){const t=re()?`Transaksi ditolak! Total tagihan (${g(j())}) tidak boleh di bawah harga modal HPP (${g(e)})!`:"Transaksi ditolak! Total transaksi melebihi batas diskon maksimum yang diizinkan sistem.";y(t,"error"),typeof window.triggerHaptic=="function"&&window.triggerHaptic("heavy");return}typeof window.pushModalHistory=="function"&&window.pushModalHistory("posPayment"),h={name:"",phone:"",isMember:!1,memberId:null,isNewTempo:!1},te=0,N=null,K="cash",le=j(),De(),ht(),document.body.insertAdjacentHTML("beforeend",`
    <div id="pos-pay-modal" class="fixed inset-0 z-[9999] flex items-end sm:items-center justify-center p-0 sm:p-4" style="background:rgba(15,23,42,0.75)">
      <div class="bg-white dark:bg-slate-900 rounded-t-3xl sm:rounded-3xl shadow-2xl w-full sm:max-w-md max-h-[94vh] flex flex-col overflow-hidden border border-slate-200/80 dark:border-slate-800">
        <!-- Header -->
        <div class="p-4 sm:p-5 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center shrink-0 bg-slate-50/60 dark:bg-slate-800/40">
          <div>
            <h2 class="font-black text-base text-slate-900 dark:text-white flex items-center gap-2">
              <i class="fa-solid fa-cash-register" style="color:var(--color-primary)"></i>
              <span>Proses Pembayaran Kasir</span>
            </h2>
            <div class="flex items-center gap-2 mt-0.5 flex-wrap">
              <span class="text-xs text-slate-500">Total Tagihan: <span class="font-black text-sm" style="color:var(--color-primary)">${g(j())}</span></span>
              ${re()&&e>0?`<span class="inline-flex items-center gap-1 text-[10px] font-bold text-amber-950 bg-amber-100 dark:bg-amber-950/60 dark:text-amber-300 px-2 py-0.5 rounded-full border border-amber-300/80 dark:border-amber-700 shadow-2xs"><i class="fa-solid fa-coins text-[8px] text-amber-600 dark:text-amber-400"></i>HPP: ${g(e)}</span>`:""}
            </div>
          </div>
          <button onclick="window.closePayModal()" class="w-9 h-9 rounded-xl bg-slate-200/60 dark:bg-slate-700/60 text-slate-500 hover:text-slate-800 dark:hover:text-white text-lg flex items-center justify-center transition-all leading-none cursor-pointer">×</button>
        </div>

        <!-- Body Scrollable -->
        <div class="p-4 sm:p-5 space-y-4 overflow-y-auto flex-1">
          <!-- Pilih Pelanggan -->
          <div>
            <label class="text-[10px] font-black uppercase tracking-wider text-slate-400 mb-1.5 block">Tipe Pelanggan</label>
            <div class="grid grid-cols-3 gap-2 mb-2.5">
              <button onclick="window.setPosCustomerType('umum')" id="pos-ctype-umum" type="button" class="flex flex-col items-center justify-center text-center py-2.5 px-2 rounded-xl text-[10px] font-black uppercase border transition-all cursor-pointer shadow-xs" style="background:var(--color-primary);color:white;border-color:var(--color-primary)"><i class="fa-solid fa-user text-base leading-none mb-1 text-center"></i><span>Umum</span></button>
              <button onclick="window.setPosCustomerType('member')" id="pos-ctype-member" type="button" class="flex flex-col items-center justify-center text-center py-2.5 px-2 rounded-xl text-[10px] font-black uppercase border border-slate-200 dark:border-slate-700 text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 transition-all cursor-pointer"><i class="fa-solid fa-id-card text-base leading-none mb-1 text-center"></i><span>Member</span></button>
              <button onclick="window.setPosCustomerType('tempo')" id="pos-ctype-tempo" type="button" class="flex flex-col items-center justify-center text-center py-2.5 px-2 rounded-xl text-[10px] font-black uppercase border border-slate-200 dark:border-slate-700 text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 transition-all cursor-pointer"><i class="fa-solid fa-hourglass-half text-base leading-none mb-1 text-center"></i><span>Tempo</span></button>
            </div>
            <div id="pos-customer-fields">
              <input id="pos-cust-name" type="text" placeholder="Nama pembeli (opsional)" class="w-full border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2 text-xs bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-slate-100 focus:outline-none focus:border-[var(--color-primary)] focus:bg-white">
            </div>
          </div>

          <!-- Metode Bayar -->
          <div>
            <label class="text-[10px] font-black uppercase tracking-wider text-slate-400 mb-1.5 block">Metode Pembayaran</label>
            <div class="grid grid-cols-4 gap-1.5 mb-3">
              <button onclick="window.setPosPayMethod('cash')" id="pos-pay-cash" type="button" class="flex flex-col items-center justify-center text-center py-2 px-1 rounded-xl text-[9px] font-black uppercase border transition-all cursor-pointer shadow-xs" style="background:var(--color-primary);color:white;border-color:var(--color-primary)"><i class="fa-solid fa-money-bill-wave text-base leading-none mb-1 text-center"></i><span>Tunai</span></button>
              <button onclick="window.setPosPayMethod('qris')" id="pos-pay-qris" type="button" class="flex flex-col items-center justify-center text-center py-2 px-1 rounded-xl text-[9px] font-black uppercase border border-slate-200 dark:border-slate-700 text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 transition-all cursor-pointer"><i class="fa-solid fa-qrcode text-base leading-none mb-1 text-center"></i><span>QRIS</span></button>
              <button onclick="window.setPosPayMethod('transfer')" id="pos-pay-transfer" type="button" class="flex flex-col items-center justify-center text-center py-2 px-1 rounded-xl text-[9px] font-black uppercase border border-slate-200 dark:border-slate-700 text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 transition-all cursor-pointer"><i class="fa-solid fa-building-columns text-base leading-none mb-1 text-center"></i><span>Bank</span></button>
              <button onclick="window.setPosPayMethod('tempo')" id="pos-pay-tempo" type="button" class="flex flex-col items-center justify-center text-center py-2 px-1 rounded-xl text-[9px] font-black uppercase border border-slate-200 dark:border-slate-700 text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 transition-all cursor-pointer"><i class="fa-solid fa-hourglass-half text-base leading-none mb-1 text-center"></i><span>Tempo</span></button>
            </div>
            <div id="pos-pay-detail"></div>
          </div>
        </div>

        <!-- Footer -->
        <div class="p-4 border-t border-slate-100 dark:border-slate-800 flex gap-2.5 shrink-0 bg-slate-50/60 dark:bg-slate-800/40">
          <button onclick="window.closePayModal()" class="w-1/3 py-3 rounded-2xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 font-bold text-xs hover:bg-slate-100 dark:hover:bg-slate-800 transition-all cursor-pointer">Batal</button>
          <button onclick="window.processPOSTx()" id="pos-process-btn" class="w-2/3 py-3 rounded-2xl text-white font-black text-xs sm:text-sm shadow-xl active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer hover:brightness-105" style="background:linear-gradient(135deg, var(--color-primary-light,#e1b858) 0%, var(--color-primary,#c59b27) 50%, var(--color-primary-dark,#a87f1b) 100%);box-shadow:0 4px 14px rgba(var(--color-primary-rgb),0.35)">
            <i class="fa-solid fa-check-circle"></i>
            <span>Selesaikan Transaksi</span>
          </button>
        </div>
      </div>
    </div>`),Ce("cash")},_t=(e=!1)=>{const t=p("pos-pay-modal");t&&(!e&&typeof window.requestCloseModal=="function"?window.requestCloseModal("posPayment",!1,()=>t.remove()):t.remove())},Ts=(e,t,a)=>{a.forEach(s=>{const r=p(`${e}-${s}`);r&&(s===t?(r.style.background="var(--color-primary)",r.style.color="white",r.style.borderColor="var(--color-primary)",r.classList.add("shadow-xs")):(r.style.removeProperty("background"),r.style.removeProperty("color"),r.style.removeProperty("border-color"),r.classList.remove("shadow-xs")))})},Ce=e=>{const t=p("pos-pay-detail");if(!t)return;const a=j(),s=ke(),r=Math.max(0,a-s),o=Oe(),n=se(),d=n&&(n.ppnEnabled||n.ppnAmount&&n.ppnAmount>0||n.ppnRate>0&&(m.store?.ppnEnabled===!0||m.store?.ppnEnabled==="true")),l=n?.ppnType==="inclusive",c=n?.ppnAmount||0,i=n?.ppnRate||0,u=n?.ppnLabel||`${l?"Termasuk PPN":"PPN"} (${i}%)`,k=n?.dppAmount!==void 0?n.dppAmount:Math.max(0,ne()-ie()-o),v=`
      <div class="p-3 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-100 dark:border-slate-700/60 mb-2.5 text-xs space-y-1.5">
        <div class="flex justify-between items-center">
          <span class="text-slate-500 font-medium">Subtotal Belanja</span>
          <span class="font-bold font-mono text-xs">${g(ne())}</span>
        </div>
        ${ie()>0?`
        <div class="flex justify-between items-center text-rose-500 text-[11px]">
          <span>Diskon Toko</span>
          <span class="font-bold font-mono">- ${g(ie())}</span>
        </div>`:""}
        ${o>0?`
        <div class="flex justify-between items-center text-emerald-600 dark:text-emerald-400 text-[11px]">
          <span class="flex items-center gap-1 font-bold"><i class="fa-solid fa-tags"></i> Diskon Poin (${te} Pts)</span>
          <span class="font-black font-mono">- ${g(o)}</span>
        </div>`:""}
        ${N?`
        <div class="flex justify-between items-center text-purple-600 dark:text-purple-400 text-[11px]">
          <span class="flex items-center gap-1 font-bold"><i class="fa-solid fa-gift"></i> Klaim Hadiah</span>
          <span class="font-bold truncate max-w-[170px]">${b(N.name)} (-${N.pointsCost} Pts)</span>
        </div>`:""}
        ${d?`
        <div class="flex justify-between items-center text-slate-500 text-[11px]">
          <span>DPP</span>
          <span class="font-bold font-mono">${g(k)}</span>
        </div>
        <div class="flex justify-between items-center text-amber-600 dark:text-amber-400 text-[11px] font-bold">
          <span>${b(u)}</span>
          <span class="font-black font-mono">${c>0?(l?"":"+")+g(c):"Rp 0"}</span>
        </div>`:""}
        <div class="flex justify-between items-center pt-1.5 border-t border-slate-200/60 dark:border-slate-700/60">
          <span class="text-slate-700 dark:text-slate-200 font-bold">Total Wajib Bayar</span>
          <span class="font-black text-sm" style="color:var(--color-primary)">${g(a)}</span>
        </div>
        ${re()&&s>0?`
        <div class="flex justify-between items-center pt-1 border-t border-slate-200/40 dark:border-slate-700/40 text-[10px]">
          <span class="text-slate-400 font-semibold flex items-center gap-1"><i class="fa-solid fa-coins text-amber-500"></i> Total Modal (HPP):</span>
          <span class="font-bold text-amber-600 dark:text-amber-400">${g(s)}</span>
        </div>
        <div class="flex justify-between items-center text-[10px]">
          <span class="text-slate-400 font-semibold flex items-center gap-1"><i class="fa-solid fa-arrow-trend-up text-emerald-500"></i> Estimasi Laba Bersih:</span>
          <span class="font-bold text-emerald-600 dark:text-emerald-400">+ ${g(r)}</span>
        </div>`:""}
      </div>`;if(e==="cash"){const w=[{label:"Uang Pas",val:a,isPas:!0},{label:"10.000",val:1e4},{label:"20.000",val:2e4},{label:"50.000",val:5e4},{label:"100.000",val:1e5},{label:"200.000",val:2e5},{label:"500.000",val:5e5}].map(S=>`
            <button onclick="window.posSetQuickCash(${S.val})" type="button"
                class="px-2.5 py-1.5 rounded-xl text-[11px] font-black border transition-all active:scale-95 ${S.isPas?"text-white border-transparent shadow-xs":"bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 border-slate-200 dark:border-slate-700 hover:border-[var(--color-primary)]"}"
                style="${S.isPas?"background:var(--color-primary)":""}">
                ${S.isPas?'<i class="fa-solid fa-money-bill-wave mr-1 text-emerald-400"></i> Uang Pas':`Rp ${S.label}`}
            </button>
        `).join("");t.innerHTML=`
            ${v}
            <div class="space-y-2">
                <label class="text-[10px] font-black uppercase tracking-wider text-slate-400">Nominal Uang Diterima (Rp)</label>
                <div class="relative">
                    <span class="absolute left-3.5 top-1/2 -translate-y-1/2 text-sm font-black text-slate-400">Rp</span>
                    <input id="pos-paid-input" type="number" min="0" placeholder="${a}" value="${le||""}"
                        class="w-full border-2 rounded-2xl pl-10 pr-4 py-2.5 text-base sm:text-lg font-black bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none text-right transition-all"
                        style="border-color:var(--color-primary)" oninput="window.updatePosChange(this.value)">
                </div>

                <!-- Quick Cash Buttons Grid -->
                <div class="pt-1">
                    <p class="text-[9px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">Pilihan Uang Cepat (1-Klik)</p>
                    <div class="grid grid-cols-3 sm:grid-cols-4 gap-1.5">
                        ${w}
                    </div>
                </div>

                <!-- Kembalian Box -->
                <div id="pos-change-box" class="mt-2.5 p-3 rounded-2xl border transition-all flex items-center justify-between ${le>=a?"bg-emerald-50 dark:bg-emerald-950/30 border-emerald-200 dark:border-emerald-800":"bg-rose-50 dark:bg-rose-950/30 border-rose-200 dark:border-rose-800"}">
                    <div>
                        <p class="text-[9px] font-black uppercase tracking-wider text-slate-400">Status Kembalian</p>
                        <p id="pos-change-label" class="text-xs font-bold ${le>=a?"text-emerald-700 dark:text-emerald-400":"text-rose-700 dark:text-rose-400"}">
                            ${le>=a?"Kembalian Uang Pembeli:":"Uang Masih Kurang:"}
                        </p>
                    </div>
                    <span id="pos-change-display" class="text-base font-black ${le>=a?"text-emerald-700 dark:text-emerald-400":"text-rose-600 dark:text-rose-400"}">
                        ${g(Math.abs(xs()))}
                    </span>
                </div>
            </div>
        `}else if(e==="qris"){const x=m.payment?.qrisUrl||m.store?.qrisUrl||m.payment?.qris||m.store?.qris||m.qrisUrl||"",w=x?zs(x):"";t.innerHTML=`
          ${v}
          ${w?`<div class="flex flex-col items-center justify-center p-3 bg-slate-50 dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700"><img src="${b(w)}" class="w-48 h-48 object-contain rounded-xl shadow-xs" alt="QRIS"><p class="text-center text-xs font-bold text-slate-600 dark:text-slate-300 mt-2">Arahkan kamera pembeli untuk memindai QRIS</p></div>`:'<div class="p-4 bg-amber-50 dark:bg-amber-900/20 text-amber-700 dark:text-amber-400 text-xs rounded-2xl border border-amber-200 text-center font-bold"><i class="fa-solid fa-triangle-exclamation mr-1.5"></i>QRIS toko belum diatur di menu Pengaturan.</div>'}`}else if(e==="transfer"){const w=(Array.isArray(m.banks)?m.banks:[]).filter(P=>P&&(P.bankName||P.name||P.bank));let S='<option value="">Rekening bank belum diatur di CMS Admin</option>';w.length>0&&(S=w.map(P=>{const O=P.bankName||P.name||P.bank||"Bank",I=P.bankAccount||P.number||P.noRekening||P.account||"",D=P.bankOwner||P.holder||P.atasNama||P.owner||"",R=`${O}${I?" — "+I:""}${D?" a/n "+D:""}`;return`<option value="${b(R)}">${b(R)}</option>`}).join("")),t.innerHTML=`
          ${v}
          <div class="space-y-2">
            <label class="text-[10px] font-black uppercase tracking-wider text-slate-400 block">Rekening Tujuan Toko</label>
            <div class="relative">
              <select id="pos-bank-sel" class="w-full border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2.5 text-xs font-bold bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 focus:outline-none focus:border-[var(--color-primary)] transition-all">
                ${S}
              </select>
            </div>
            ${w.length>0?`
              <div class="p-2.5 bg-emerald-50/80 dark:bg-emerald-950/30 rounded-xl border border-emerald-200/80 dark:border-emerald-800/60 text-[11px] text-emerald-800 dark:text-emerald-300 flex items-center gap-2">
                <i class="fa-solid fa-building-columns text-emerald-600 dark:text-emerald-400 shrink-0 text-xs"></i>
                <span>Pastikan pembeli telah mentransfer sesuai tagihan ke rekening di atas sebelum menyelesaikan transaksi.</span>
              </div>
            `:`
              <div class="p-2.5 bg-amber-50 dark:bg-amber-950/30 rounded-xl border border-amber-200 dark:border-amber-800 text-[11px] text-amber-800 dark:text-amber-300 flex items-center gap-2">
                <i class="fa-solid fa-triangle-exclamation text-amber-600 dark:text-amber-400 shrink-0 text-xs"></i>
                <span>Rekening bank belum diatur di menu CMS Admin > Rekening.</span>
              </div>
            `}
          </div>`}else if(e==="tempo"){const x=pt(),w=x.tenors||{},P=x.enabled!==!1&&!!(h.isMember&&h.paylaterActive&&h.paylaterLimit>0),O=P?Math.max(0,(h.paylaterLimit||0)-Math.max(0,h.paylaterUsed||0)):0,I=P&&a>O?a-O:0,D=p("pos-dp-input"),R=D?Math.max(0,parseFloat(D.value)||0):I>0?I:0,J=Math.max(I,R),Y=Math.min(O,Math.max(0,a-J)),T=h.paylaterDueDay||5,E=["30d","2m","3m"].filter(F=>w[F]&&w[F].enabled);E.length>0&&!E.includes(He)&&(He=E[0]);const f=ot(Y,He,{...x,dueDay:T}),$=E.map(F=>{const M=w[F],L=F===He,ae=ot(Y,F,{...x,dueDay:T});return`
              <button type="button" onclick="window.posSelectPaylaterTenor('${F}')"
                class="flex-1 py-2 px-2.5 rounded-xl border text-center transition-all cursor-pointer ${L?"border-[var(--color-primary)] bg-[rgba(var(--color-primary-rgb),0.08)] text-[var(--color-primary)] font-black shadow-xs":"border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:border-slate-300"}">
                <div class="text-[11px] font-extrabold flex items-center justify-center gap-1">
                  <span>${b(M.shortLabel||M.label)}</span>
                  ${L?'<i class="fa-solid fa-circle-check text-[10px]" style="color:var(--color-primary)"></i>':""}
                </div>
                <div class="text-[10px] font-mono mt-0.5 ${L?"font-black":"text-slate-500 dark:text-slate-400"}">
                  ${g(ae.totalPerMonth)}/bln
                </div>
              </button>
            `}).join("");t.innerHTML=`
          ${v}
          ${P?`
            <div class="p-3.5 bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-950/40 dark:to-teal-950/40 rounded-2xl border border-emerald-200/80 dark:border-emerald-800/60 mb-2.5 space-y-2.5">
              <div class="flex items-center justify-between">
                <span class="text-xs font-black text-emerald-800 dark:text-emerald-300 flex items-center gap-1.5">
                  <i class="fa-solid fa-bolt text-emerald-500"></i> Putri PayLater Member
                </span>
                <span class="text-[10px] font-black px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 dark:bg-emerald-900/60 dark:text-emerald-200">
                  Plafon: ${g(h.paylaterLimit)}
                </span>
              </div>
              <div class="flex justify-between items-center text-xs">
                <span class="text-slate-500 dark:text-slate-400 text-[11px]">Sisa Plafon Tersedia:</span>
                <span class="font-black text-emerald-600 dark:text-emerald-400 font-mono text-sm">${g(O)}</span>
              </div>
              <label class="flex items-center gap-2 pt-1.5 cursor-pointer select-none border-t border-emerald-200/60 dark:border-emerald-800/40">
                <input type="checkbox" id="pos-use-paylater" ${O>0?"checked":"disabled"} onchange="window.posTogglePaylater(this.checked)" class="w-4 h-4 rounded text-emerald-600 focus:ring-emerald-500 cursor-pointer">
                <span class="text-xs font-bold text-slate-700 dark:text-slate-200">Gunakan Cicilan Putri PayLater</span>
              </label>

              <!-- Tenor & Simulasi Cicilan Interaktif Kasir POS -->
              <div id="pos-paylater-tenor-box" class="space-y-2 pt-1" style="display: ${O>0?"block":"none"};">
                <div class="flex items-center justify-between">
                  <span class="text-[10px] font-black uppercase tracking-wider text-slate-500 dark:text-slate-400">Pilih Tenor Cicilan:</span>
                  <span class="text-[9px] font-bold text-emerald-700 dark:text-emerald-400"><i class="fa-solid fa-shield-halved mr-1"></i>Tanpa Biaya Tersembunyi</span>
                </div>
                <div class="flex gap-1.5">
                  ${$}
                </div>

                <!-- Rincian Biaya & Angsuran Transparan -->
                <div id="pos-paylater-breakdown-box" class="p-2.5 rounded-xl bg-white/80 dark:bg-slate-900/80 border border-emerald-200/60 dark:border-emerald-800/40 text-[11px] space-y-1">
                  <div class="flex justify-between text-slate-500 dark:text-slate-400">
                    <span>Pokok Dibiayai:</span>
                    <span class="font-mono font-bold text-slate-700 dark:text-slate-200">${g(f.pokokTotal)}</span>
                  </div>
                  <div class="flex justify-between text-slate-500 dark:text-slate-400">
                    <span>Biaya Admin:</span>
                    <span class="font-mono font-bold ${f.totalAdminFee>0?"text-amber-600 dark:text-amber-400":"text-emerald-600 dark:text-emerald-400"}">
                      ${f.totalAdminFee>0?g(f.totalAdminFee):"Gratis"}
                    </span>
                  </div>
                  <div class="flex justify-between text-slate-500 dark:text-slate-400">
                    <span>Biaya Penanganan / Layanan:</span>
                    <span class="font-mono font-bold ${f.totalServiceFee>0?"text-amber-600 dark:text-amber-400":"text-emerald-600 dark:text-emerald-400"}">
                      ${f.totalServiceFee>0?g(f.totalServiceFee):"Gratis"}
                    </span>
                  </div>
                  <div class="pt-1 border-t border-slate-200/60 dark:border-slate-800 flex justify-between items-center font-bold">
                    <span class="text-slate-700 dark:text-slate-200">Cicilan / Bulan (${f.months}x):</span>
                    <span class="text-xs font-black font-mono" style="color:var(--color-primary)">${g(f.totalPerMonth)}/bln</span>
                  </div>
                  <div class="flex justify-between items-center text-[10px] text-slate-400">
                    <span>Total Tagihan PayLater:</span>
                    <span class="font-mono font-bold text-slate-600 dark:text-slate-300">${g(f.grandTotal)}</span>
                  </div>
                </div>
              </div>

              ${I>0?`
                <div class="p-2 bg-amber-50 dark:bg-amber-950/40 rounded-xl border border-amber-200 dark:border-amber-800 text-[10px] text-amber-800 dark:text-amber-300 font-bold flex items-center gap-1.5">
                  <i class="fa-solid fa-circle-exclamation text-amber-500 shrink-0"></i>
                  <span>Total belanja melebihi sisa limit. Wajib DP minimal ${g(I)}</span>
                </div>
              `:""}
            </div>
          `:`
            <div class="p-3 bg-amber-50 dark:bg-amber-900/20 rounded-2xl border border-amber-200 dark:border-amber-700/80 mb-2.5">
              <p class="text-xs font-bold text-amber-800 dark:text-amber-300 flex items-center gap-1.5"><i class="fa-solid fa-hourglass-half"></i> Pembayaran Tempo / Piutang</p>
              <p class="text-[10px] text-amber-700 dark:text-amber-400 mt-1">Transaksi otomatis dicatat sebagai piutang di database toko.</p>
            </div>
          `}
          <label class="text-[10px] font-black uppercase tracking-wider text-slate-400 block mb-1">${P&&I>0?"Uang Muka / DP Wajib (Rp)":"Uang Muka / DP (Rp) — opsional"}</label>
          <input id="pos-dp-input" type="number" min="0" placeholder="0" value="${I>0?I:0}" oninput="window.posOnDpInput(this.value)" class="w-full border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2 text-xs font-black text-right bg-white dark:bg-slate-800 focus:outline-none focus:border-[var(--color-primary)]">`}},$s=e=>{He=e,Ce("tempo")};window.posSelectPaylaterTenor=$s;const Cs=e=>{const t=j(),a=Math.max(0,parseFloat(e)||0);if(!!!(h.isMember&&h.paylaterActive&&h.paylaterLimit>0))return;const r=Math.max(0,(h.paylaterLimit||0)-Math.max(0,h.paylaterUsed||0)),o=Math.min(r,Math.max(0,t-a)),n=pt(),d=h.paylaterDueDay||5,l=ot(o,He,{...n,dueDay:d}),c=p("pos-paylater-breakdown-box");c&&(c.innerHTML=`
          <div class="flex justify-between text-slate-500 dark:text-slate-400">
            <span>Pokok Dibiayai:</span>
            <span class="font-mono font-bold text-slate-700 dark:text-slate-200">${g(l.pokokTotal)}</span>
          </div>
          <div class="flex justify-between text-slate-500 dark:text-slate-400">
            <span>Biaya Admin:</span>
            <span class="font-mono font-bold ${l.totalAdminFee>0?"text-amber-600 dark:text-amber-400":"text-emerald-600 dark:text-emerald-400"}">
              ${l.totalAdminFee>0?g(l.totalAdminFee):"Gratis"}
            </span>
          </div>
          <div class="flex justify-between text-slate-500 dark:text-slate-400">
            <span>Biaya Penanganan / Layanan:</span>
            <span class="font-mono font-bold ${l.totalServiceFee>0?"text-amber-600 dark:text-amber-400":"text-emerald-600 dark:text-emerald-400"}">
              ${l.totalServiceFee>0?g(l.totalServiceFee):"Gratis"}
            </span>
          </div>
          <div class="pt-1 border-t border-slate-200/60 dark:border-slate-800 flex justify-between items-center font-bold">
            <span class="text-slate-700 dark:text-slate-200">Cicilan / Bulan (${l.months}x):</span>
            <span class="text-xs font-black font-mono" style="color:var(--color-primary)">${g(l.totalPerMonth)}/bln</span>
          </div>
          <div class="flex justify-between items-center text-[10px] text-slate-400">
            <span>Total Tagihan PayLater:</span>
            <span class="font-mono font-bold text-slate-600 dark:text-slate-300">${g(l.grandTotal)}</span>
          </div>
        `)};window.posOnDpInput=Cs;const As=e=>{const t=j(),a=p("pos-dp-input"),s=p("pos-dp-input")?.previousElementSibling,r=!!(h.isMember&&h.paylaterActive&&h.paylaterLimit>0),o=r?Math.max(0,(h.paylaterLimit||0)-Math.max(0,h.paylaterUsed||0)):0,n=e&&r&&t>o?t-o:0;a&&(a.value=n>0?n:0),s&&s.tagName==="LABEL"&&(s.textContent=e&&r&&n>0?"Uang Muka / DP Wajib (Rp)":"Uang Muka / DP (Rp) — opsional");const d=p("pos-paylater-tenor-box");d&&(d.style.display=e?"block":"none"),window.posOnDpInput(a?a.value:0)};window.posTogglePaylater=As;const Fs=e=>{h.isMember=e==="member",h.isNewTempo=e==="tempo",Ts("pos-ctype",e,["umum","member","tempo"]);const t=p("pos-customer-fields");t&&(e==="umum"?(h.name="",h.phone="",h.memberId=null,h.points=0,t.innerHTML='<input id="pos-cust-name" type="text" placeholder="Nama pembeli (opsional)" class="w-full border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2 text-xs bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-slate-100 focus:outline-none focus:border-[var(--color-primary)] focus:bg-white">'):e==="member"?(t.innerHTML=`
          <div class="space-y-2">
            <div class="flex gap-2">
              <div class="relative flex-1">
                <i class="fa-solid fa-magnifying-glass absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xs"></i>
                <input id="pos-cust-phone" type="text" placeholder="Ketik No. HP / Nama / ID Member..."
                  value="${h.isMember?b(h.phone||h.name||""):""}"
                  class="w-full pl-8 pr-3 py-2 text-xs border border-slate-200 dark:border-slate-700 rounded-xl bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-slate-100 focus:outline-none focus:border-[var(--color-primary)] focus:bg-white transition-all"
                  oninput="window.debouncedLookupPosMember()"
                  onkeydown="if(event.key==='Enter'){event.preventDefault();window.lookupPosMember();}">
              </div>
              <button onclick="window.lookupPosMember()" id="pos-member-lookup-btn" type="button"
                class="px-4 py-2 rounded-xl text-white text-xs font-bold transition-all active:scale-95 flex items-center justify-center gap-1.5 shrink-0 shadow-xs cursor-pointer"
                style="background:var(--color-primary)">
                <i class="fa-solid fa-magnifying-glass"></i>
                <span>Cek</span>
              </button>
            </div>
            <div id="pos-member-result"></div>
          </div>`,De().then(()=>{p("pos-cust-phone")?.value?.trim()&&wt()})):e==="tempo"&&(h.isMember=!1,ha("tempo"),t.innerHTML=`
          <div class="space-y-2">
            <input id="pos-cust-name" type="text" placeholder="Nama Pelanggan / Rekanan *" required class="w-full border border-amber-300 dark:border-amber-600 rounded-xl px-3 py-2 text-xs bg-amber-50/40 dark:bg-slate-800 text-slate-800 dark:text-slate-100 focus:outline-none">
            <input id="pos-cust-phone" type="tel" placeholder="No. WhatsApp Pelanggan *" required class="w-full border border-amber-300 dark:border-amber-600 rounded-xl px-3 py-2 text-xs bg-amber-50/40 dark:bg-slate-800 text-slate-800 dark:text-slate-100 focus:outline-none">
          </div>`))},ha=e=>{K=e,Ts("pos-pay",e,["cash","qris","transfer","tempo"]),Ce(e),e==="transfer"&&(!m.banks||!m.banks.length)&&ht().then(t=>{K==="transfer"&&t&&t.length>0&&Ce("transfer")})},ga=e=>{le=Me(e);const t=j(),a=le-t,s=p("pos-change-display"),r=p("pos-change-label"),o=p("pos-change-box"),n=p("pos-process-btn");s&&(s.textContent=g(Math.abs(a))),r&&(r.textContent=a>=0?"Kembalian Uang Pembeli:":"Uang Masih Kurang:"),s&&(s.className=`text-base font-black ${a>=0?"text-emerald-700 dark:text-emerald-400":"text-rose-600 dark:text-rose-400"}`),o&&(o.className=`mt-2.5 p-3 rounded-2xl border transition-all flex items-center justify-between ${a>=0?"bg-emerald-50 dark:bg-emerald-950/30 border-emerald-200 dark:border-emerald-800":"bg-rose-50 dark:bg-rose-950/30 border-rose-200 dark:border-rose-800"}`),n&&K==="cash"&&(n.disabled=a<0,n.classList.toggle("opacity-50",a<0))},wa=e=>{const t=p("pos-paid-input");t&&(t.value=e,ga(e),typeof window.triggerHaptic=="function"&&window.triggerHaptic("light"))},ht=async()=>{if(Array.isArray(m.banks)&&m.banks.length>0)return m.banks;try{const e=await B.collection("freshmart").doc("cms_data").get();if(e.exists){const t=e.data();if(Array.isArray(t?.banks)&&t.banks.length>0)return m.banks=t.banks,m.banks}}catch{}return m.banks||[]},De=async()=>{if(m.customers&&m.customers.length>0)return m.customers;try{const e=await B.collection("freshmart").doc("cms_data").collection("customers").get();return m.customers=e.docs.map(t=>({...t.data(),id:t.id,_docId:t.id})),m.customers}catch{return m.customers||[]}},Os=(e,t)=>{if(!e||!t||!t.length)return[];const a=e.trim().toLowerCase(),s=a.replace(/\D/g,"");let r=s;r.startsWith("62")?r=r.slice(2):r.startsWith("0")&&(r=r.slice(1));const o=[],n=new Set;return t.forEach(d=>{if(!d)return;const l=String(d.id||d._docId||d.phone||"");if(n.has(l))return;const c=String(d.phone||"").replace(/\D/g,"");let i=c;i.startsWith("62")?i=i.slice(2):i.startsWith("0")&&(i=i.slice(1));const u=String(d.name||"").toLowerCase();let k=!1;r.length>=4&&i&&(i===r||i.endsWith(r)||r.endsWith(i)||c.includes(s))&&(k=!0),!k&&(l.toLowerCase()===a||l===s)&&(k=!0),!k&&a.length>=2&&u.includes(a)&&(k=!0),k&&(n.add(l),o.push(d))}),o},hr=async e=>{if(!e)return null;const t=e.trim(),a=t.replace(/\D/g,"");let s=a;s.startsWith("62")?s=s.slice(2):s.startsWith("0")&&(s=s.slice(1));const r=B.collection("freshmart").doc("cms_data").collection("customers"),n=Array.from(new Set([s?"62"+s:null,s?"0"+s:null,s||null,s?"+62"+s:null,a||null,t].filter(Boolean))).map(async c=>{try{const i=await r.doc(c).get();if(i&&i.exists)return{...i.data(),id:i.id,_docId:i.id}}catch{}return null}),l=(await Promise.all(n)).find(Boolean);if(l){m.customers||(m.customers=[]);const c=m.customers.findIndex(i=>String(i.id||i.phone)===String(l.id||l.phone));return c>-1?m.customers[c]=l:m.customers.push(l),l}try{const c=await r.limit(300).get();if(!c.empty){m.customers=c.docs.map(u=>({...u.data(),id:u.id,_docId:u.id}));const i=Os(e,m.customers);if(i.length>0)return i[0]}}catch{}return null},gt=()=>{const e=p("pos-member-result");if(!e||!h.isMember)return;const t=parseFloat(h.points)||0,a=typeof window.getMemberTier=="function"?window.getMemberTier(t):{badge:"MEMBER RESMI"},s=mt(),r=Oe(),o=Lt(),n=(m.rewards||[]).filter(l=>l.isActive!=="false"&&l.isActive!==!1&&(parseFloat(l.stock)||0)>0),d=Math.max(0,t-(te||0));e.innerHTML=`
    <div class="space-y-2.5">
      <!-- Info Member Bar -->
      <div class="p-3 bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-950/40 dark:to-teal-950/30 rounded-2xl border border-emerald-300 dark:border-emerald-700/60 shadow-xs flex items-center justify-between gap-2.5">
        <div class="flex items-center gap-2.5 min-w-0">
          <div class="w-10 h-10 rounded-xl bg-emerald-500 text-white flex items-center justify-center shrink-0 shadow-xs">
            <i class="fa-solid fa-id-card text-base"></i>
          </div>
          <div class="min-w-0">
            <div class="flex items-center gap-1.5 flex-wrap">
              <span class="text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-900/60 text-emerald-800 dark:text-emerald-200 border border-emerald-300 dark:border-emerald-700">${b(a.badge||"VIP")}</span>
              <span class="text-[10px] font-black text-amber-600 dark:text-amber-400 flex items-center gap-0.5"><i class="fa-solid fa-star text-[9px]"></i>${t} Poin</span>
              ${h.paylaterActive&&h.paylaterLimit>0?`
                <span class="text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-900/60 text-emerald-800 dark:text-emerald-200 border border-emerald-300 dark:border-emerald-700 flex items-center gap-1">
                  <i class="fa-solid fa-bolt text-emerald-500"></i> PayLater: ${g(Math.max(0,(h.paylaterLimit||0)-Math.max(0,h.paylaterUsed||0)))}
                </span>
              `:""}
            </div>
            <p class="text-xs font-black text-slate-800 dark:text-white truncate mt-0.5">${b(h.name||"Pelanggan Setia")}</p>
            <p class="text-[10px] text-slate-500 dark:text-slate-400 font-mono">${b(h.phone||"")}</p>
          </div>
        </div>
        <button onclick="window.resetPosMember()" type="button" class="shrink-0 px-2.5 py-1.5 rounded-xl text-[10px] font-bold text-slate-600 hover:text-rose-600 dark:text-slate-300 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 transition-all cursor-pointer" title="Ganti Member">
          <i class="fa-solid fa-rotate-left mr-1"></i>Ganti
        </button>
      </div>

      <!-- PANEL LOYALITAS KASIR: TUKAR POIN DISKON & KLAIM REWARD -->
      ${t>0?`
      <div class="p-3 bg-white dark:bg-slate-800/90 rounded-2xl border border-slate-200 dark:border-slate-700 space-y-3 shadow-xs">
        <!-- 1. Tukar Poin Jadi Diskon Belanja Langsung -->
        <div>
          <div class="flex items-center justify-between text-xs mb-1.5">
            <span class="font-bold text-slate-700 dark:text-slate-200 flex items-center gap-1.5">
              <i class="fa-solid fa-tags text-emerald-500"></i>
              <span>Tukar Poin Diskon Belanja</span>
            </span>
            <span class="text-[10px] text-slate-400 font-semibold font-mono">1 Poin = ${g(s)}</span>
          </div>

          ${te>0?`
          <div class="p-2.5 bg-emerald-50 dark:bg-emerald-950/40 rounded-xl border border-emerald-200 dark:border-emerald-800/60 flex items-center justify-between gap-2">
            <div class="text-xs">
              <span class="font-bold text-emerald-700 dark:text-emerald-300">Potongan Belanja:</span>
              <span class="font-black font-mono text-emerald-600 dark:text-emerald-400 ml-1">-${g(r)}</span>
              <span class="text-[10px] text-slate-500 ml-1">(${te} Poin)</span>
            </div>
            <button type="button" onclick="window.setPosPointsRedeemed(0)" class="text-[10px] font-bold text-rose-500 hover:underline cursor-pointer">
              Batal
            </button>
          </div>
          `:`
          <div class="space-y-2">
            <div class="flex gap-1.5 flex-wrap">
              ${[10,20,50].map(l=>l>o?"":`
                <button type="button" onclick="window.setPosPointsRedeemed(${l})" class="px-2.5 py-1.5 rounded-lg text-[10px] font-bold bg-slate-100 hover:bg-emerald-50 hover:text-emerald-700 dark:bg-slate-700 dark:hover:bg-emerald-900/40 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-600 transition-all cursor-pointer">
                  Tukar ${l} Pts (-${g(l*s)})
                </button>
                `).join("")}
              ${o>0?`
              <button type="button" onclick="window.setPosPointsRedeemed(${o})" class="px-2.5 py-1.5 rounded-lg text-[10px] font-bold bg-emerald-600 text-white hover:bg-emerald-700 transition-all cursor-pointer shadow-xs">
                Maksimal (${o} Pts)
              </button>
              `:""}
            </div>
            ${o<=0?`
            <p class="text-[10px] text-slate-400 italic">${re()?"* Batas harga modal HPP atau saldo poin telah tercapai.":"* Batas diskon maksimum atau saldo poin telah tercapai."}</p>
            `:""}
          </div>
          `}
        </div>

        <!-- 2. Klaim Hadiah Katalog Langsung di Kasir -->
        ${n.length>0?`
        <div class="pt-2.5 border-t border-slate-100 dark:border-slate-700/60">
          <div class="flex items-center justify-between text-xs mb-1.5">
            <span class="font-bold text-slate-700 dark:text-slate-200 flex items-center gap-1.5">
              <i class="fa-solid fa-gift text-purple-500"></i>
              <span>Klaim Hadiah Katalog Reward</span>
            </span>
            <span class="text-[10px] text-slate-400 font-semibold">Tersisa: ${d} Poin</span>
          </div>

          ${N?`
          <div class="p-2.5 bg-purple-50 dark:bg-purple-950/40 rounded-xl border border-purple-200 dark:border-purple-800/60 flex items-center justify-between gap-2">
            <div class="text-xs min-w-0">
              <span class="font-bold text-purple-800 dark:text-purple-300 block truncate inline-flex items-center gap-1.5"><i class="fa-solid fa-gift text-purple-500"></i> ${b(N.name)}</span>
              <span class="text-[10px] text-purple-600 dark:text-purple-400 font-mono">Ditukar dengan ${N.pointsCost} Poin</span>
            </div>
            <button type="button" onclick="window.deselectPosReward()" class="text-[10px] font-bold text-rose-500 hover:underline cursor-pointer shrink-0">
              Batal
            </button>
          </div>
          `:`
          <div class="relative">
            <select onchange="if(this.value){window.selectPosReward(this.value);}else{window.deselectPosReward();}" class="w-full text-xs py-2 pl-3 pr-8 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-100 focus:outline-none focus:border-[var(--color-primary)]">
              <option value="">-- Pilih Hadiah Member (Opsional) --</option>
              ${n.map(l=>{const c=parseFloat(l.pointsCost)||0,i=c<=d;return`
                <option value="${l.id}" ${i?"":"disabled"}>
                  ${b(l.name)} (${c} Poin) ${i?"":"[Poin Kurang]"}
                </option>
                `}).join("")}
            </select>
          </div>
          `}
        </div>
        `:""}
      </div>
      `:""}
    </div>`},Ls=e=>{const t=Lt();te=Math.min(t,Math.max(0,parseInt(e)||0)),gt(),Ce(K);const s=document.querySelector("#pos-pay-modal .text-xs.text-slate-500 .font-black");s&&(s.textContent=g(j()))},Is=e=>{const t=(m.rewards||[]).find(o=>String(o.id)===String(e));if(!t)return;const a=parseFloat(t.pointsCost)||0,s=Math.max(0,(parseFloat(h.points)||0)-(te||0));if(a>s){y("Poin member tidak cukup untuk hadiah ini!","warning");return}N={id:t.id,name:t.name,pointsCost:a},y(`Hadiah "${t.name}" dipilih!`,"success"),gt(),Ce(K);const r=document.querySelector("#pos-pay-modal .text-xs.text-slate-500 .font-black");r&&(r.textContent=g(j()))},Ds=()=>{N=null,gt(),Ce(K);const e=document.querySelector("#pos-pay-modal .text-xs.text-slate-500 .font-black");e&&(e.textContent=g(j()))},Ft=e=>{h.isMember=!0,h.name=e.name||"Member Toko",h.phone=e.phone||"",h.memberId=e.id||e._docId||e.phone,h.points=parseFloat(e.points)||0,te=0,N=null,h.paylaterActive=!!e.paylaterActive,h.paylaterLimit=Math.max(0,parseFloat(e.paylaterLimit)||0),h.paylaterUsed=Math.max(0,parseFloat(e.paylaterUsed)||0),h.paylaterDueDay=parseInt(e.paylaterDueDay,10)||5;const t=p("pos-cust-phone");t&&(t.value=e.phone||e.name||""),gt(),Ce(K),y(`Member terdeteksi: ${e.name} (${h.points} Poin)`,"success")},ka=e=>{const a=(m.customers||[]).find(s=>s&&String(s.id||s._docId||s.phone)===String(e));a&&Ft(a)},va=()=>{h.isMember=!1,h.name="",h.phone="",h.memberId=null,h.points=0,te=0,N=null,h.paylaterActive=!1,h.paylaterLimit=0,h.paylaterUsed=0,h.paylaterDueDay=5;const e=p("pos-cust-phone");e&&(e.value="",e.focus());const t=p("pos-member-result");t&&(t.innerHTML=""),Ce(K)};let Ua=null;const ya=()=>{clearTimeout(Ua);const e=p("pos-cust-phone")?.value?.trim()||"";if(!e){if(!h.memberId){const s=p("pos-member-result");s&&(s.innerHTML="")}return}const t=e.replace(/\D/g,"");!(Array.isArray(m.customers)&&m.customers.length>0)&&t.length<10&&e.length<8||(Ua=setTimeout(()=>{wt()},350))},wt=async()=>{const t=p("pos-cust-phone")?.value?.trim()||"";if(!t){y("Masukkan nomor HP atau nama member","warning");return}const a=p("pos-member-result"),s=p("pos-member-lookup-btn");s&&(s.disabled=!0,s.innerHTML='<i class="fa-solid fa-spinner fa-spin"></i>'),a&&(a.innerHTML='<div class="p-2.5 text-center text-xs text-slate-400"><i class="fa-solid fa-spinner fa-spin mr-1.5"></i>Memeriksa database member...</div>');try{await De();const r=Os(t,m.customers||[]);if(r.length===1)Ft(r[0]);else if(r.length>1)a.innerHTML=`
              <div class="space-y-1.5 max-h-44 overflow-y-auto pr-1">
                <p class="text-[10px] font-bold text-slate-500 mb-1">Ditemukan ${r.length} member (klik untuk memilih):</p>
                ${r.map(o=>`
                  <button onclick="window.selectPosMember('${b(o.id||o._docId||o.phone)}')" type="button"
                    class="w-full text-left p-2 rounded-xl bg-slate-50 dark:bg-slate-800 hover:bg-emerald-50 dark:hover:bg-emerald-950/30 border border-slate-200 dark:border-slate-700 hover:border-emerald-400 transition-all flex items-center justify-between gap-2 cursor-pointer">
                    <div class="min-w-0">
                      <p class="text-xs font-bold text-slate-800 dark:text-white truncate">${b(o.name||"Member")}</p>
                      <p class="text-[10px] text-slate-500 dark:text-slate-400 font-mono">${b(o.phone||"")}</p>
                    </div>
                    <span class="text-[10px] font-black text-amber-500 shrink-0"><i class="fa-solid fa-star text-[9px]"></i> ${parseFloat(o.points)||0} Poin</span>
                  </button>
                `).join("")}
              </div>
            `;else{const o=await hr(t);if(o)Ft(o);else{h.isMember=!1,h.name="",h.memberId=null,h.points=0;const d=t.replace(/\D/g,"").length>=8;a.innerHTML=`
                  <div class="p-3 bg-amber-50 dark:bg-amber-950/30 rounded-xl border border-amber-200 dark:border-amber-800 text-amber-800 dark:text-amber-300 text-xs space-y-1">
                    <p class="font-bold flex items-center gap-1.5"><i class="fa-solid fa-circle-info"></i> Member Tidak Ditemukan</p>
                    <p class="text-[11px] text-amber-700 dark:text-amber-400">Tidak ada member ditemukan untuk "<b>${b(t)}</b>".</p>
                    ${d?"":`
                      <p class="text-[10px] text-amber-600/90 dark:text-amber-400/80 pt-1 border-t border-amber-200 dark:border-amber-800/60">
                        <i class="fa-solid fa-lightbulb mr-1 text-amber-500"></i><b>Tips Kasir:</b> Masukkan nomor WhatsApp/HP member (contoh: <code>0812...</code>) untuk verifikasi instan.
                      </p>
                    `}
                  </div>`}}}catch(r){console.error("[POS] Error lookupPosMember:",r),a&&(a.innerHTML=`<p class="text-xs text-rose-500 p-2">Gagal memeriksa data: ${b(r.message||"Koneksi error")}</p>`)}finally{s&&(s.disabled=!1,s.innerHTML='<i class="fa-solid fa-magnifying-glass mr-1.5"></i><span>Cek</span>')}},js=async()=>{if(A.length===0){y("Keranjang kosong!","warning");return}const e=ke();if(e>0&&j()<e){const i=re()?`Transaksi ditolak! Total transaksi (${g(j())}) tidak boleh di bawah total harga modal HPP (${g(e)})!`:"Transaksi ditolak! Total transaksi melebihi batas diskon maksimum yang diizinkan sistem.";y(i,"error"),typeof window.triggerHaptic=="function"&&window.triggerHaptic("heavy");return}const t=h.isMember?h.name||"Member Toko":p("pos-cust-name")?.value?.trim()||"Pelanggan Umum",a=h.isMember?h.phone||p("pos-cust-phone")?.value?.trim()||"":p("pos-cust-phone")?.value?.trim()||"";if(h.isNewTempo&&!a){y("No. HP wajib diisi untuk tempo!","warning");return}if(K==="cash"&&(le=Me(p("pos-paid-input")?.value||0),le<j())){y(`Uang kurang! Minimal ${g(j())}`,"warning");return}h.name=t,h.phone=a;const s=K==="tempo"?Me(p("pos-dp-input")?.value||0):0,r=K==="transfer"&&p("pos-bank-sel")?.value||"",o=K==="tempo"&&!!(h.isMember&&h.paylaterActive&&p("pos-use-paylater")?.checked),n=o?Math.max(0,(h.paylaterLimit||0)-Math.max(0,h.paylaterUsed||0)):0;if(o){const i=j()>n?j()-n:0;if(s<i){y(`DP tidak mencukupi limit PayLater! Minimal DP: ${g(i)}`,"warning");return}}const d=o?Math.min(j()-s,n):0,l=p("pos-process-btn");l&&(l.disabled=!0,l.innerHTML='<i class="fa-solid fa-spinner fa-spin mr-2"></i>Memproses...');const c=m.store?.useStock===!0||m.store?.useStock==="true";if(c)for(const i of A){const u=(m.products||[]).find(v=>String(v.id)===String(i.id));if(!u)continue;const k=parseFloat(i.qty)||0;if(i.variantName&&u.variants){const v=(u.variants||[]).find(w=>w.name===i.variantName),x=parseFloat(v&&v.stock!==void 0?v.stock:0);if(x<k){y(`Stok ${i.name} (${i.variantName}) tidak cukup! Sisa: ${x}`,"warning"),l&&(l.disabled=!1,l.innerHTML='<i class="fa-solid fa-check-circle mr-2"></i>Selesaikan Transaksi');return}}else{const v=parseFloat(u.stock!==void 0?u.stock:0);if(v<k){y(`Stok ${i.name} tidak cukup! Sisa: ${v}`,"warning"),l&&(l.disabled=!1,l.innerHTML='<i class="fa-solid fa-check-circle mr-2"></i>Selesaikan Transaksi');return}}}try{const i=mr(),u=typeof window.getCashierSession=="function"?window.getCashierSession():null,k=u?.name||m.store?.name||"Kasir",v=u?.uid||window.__currentAdminUid||"admin",x=new Date().toISOString(),w=st.firestore.FieldValue.serverTimestamp(),S=K==="tempo"?"Diproses":"Selesai",P=ee(),O=P&&P.status==="open"?P.id:null,I=P&&P.status==="open"?P.shiftNo||P.id:null;let D=null;if(o){const T=He||"30d",E=pt(),f=h.paylaterDueDay||5;D=ot(d,T,{...E,dueDay:f})}const R={orderId:i,txId:i,source:"pos",channel:"pos",status:S,timestamp:w,dateString:x,dateMs:Date.now(),shiftId:O,shiftNo:I,cashier:v,cashierName:k,customer:{name:t,phone:a,wa:a,address:"Beli Langsung di Kasir (POS)",deliveryMethod:"takeaway",isMember:!!h.isMember,memberId:h.memberId||null},customerName:t,customerPhone:a,customerType:h.isMember?"Member":"Pelanggan Umum",items:A.map(T=>({id:T.id,name:T.name,price:parseFloat(T.price)||0,basePrice:parseFloat(T.basePrice||T.price)||0,hpp:T.hpp!=null?parseFloat(T.hpp):Je(T)||0,qty:parseFloat(T.qty)||1,discount:parseFloat(T.discount)||0,subtotal:parseFloat(T.subtotal)||0,variantName:T.variantName||"",isVariant:!!T.isVariant,isWholesale:!!T.isWholesale,effectivePrice:parseFloat(T.price)||0,poTime:T.poTime||"",unit:T.unit||"pcs"})),hasPO:A.some(T=>T.poTime&&String(T.poTime).trim()!==""),payment:{method:K,subtotal:ne(),productDiscount:Me(de),shippingCost:0,pointDiscount:Oe(),ppnAmount:se().ppnAmount||0,dppAmount:se().dppAmount||ne(),ppnRate:se().ppnEnabled?se().ppnRate:0,ppnType:se().ppnEnabled?se().ppnType:"exclusive",ppnEnabled:!!se().ppnEnabled,ppnShowZero:!!se().ppnShowZero,ppnLabel:se().ppnLabel||"",taxNpwp:m.store?.taxNpwp||m.taxSettings?.npwp||"",grandTotal:j(),paid:K==="cash"?le:K==="tempo"?s:j(),change:K==="cash"?xs():0,bank:r,paymentStatus:o&&(D?D.grandTotal:0)<=0?"lunas":K==="tempo"?j()-s<=0?"lunas":"hutang":"lunas",subMethod:o?"paylater":K==="tempo"?"tempo":"",isPaylater:o,paylaterUsed:d,paylaterTenor:D?D.tenorKey:o?"30d":null,paylaterMonths:D?D.months:o?1:null,paylaterAdminFee:D?D.totalAdminFee:0,paylaterServiceFee:D?D.totalServiceFee:0,paylaterMonthlyInstallment:D?D.totalPerMonth:0,paylaterSchedule:D?D.schedule:[],dp:s,tempoDp:s,tempoBalance:o?D?D.grandTotal:Math.max(0,j()-s):K==="tempo"?Math.max(0,j()-s):0,tempoDueDate:D&&D.schedule?.length>0?D.schedule[D.schedule.length-1].dueDate:Date.now()+30*24*60*60*1e3,tempoPenaltyRate:1,tempoPenaltyStopped:!1},subtotal:ne(),globalDiscount:ie(),pointDiscount:Oe(),pointsRedeemed:(te||0)+(N&&parseFloat(N.pointsCost)||0),claimedReward:N?{id:N.id,name:N.name,pointsCost:parseFloat(N.pointsCost)||0}:null,discountType:Z,discountVal:G,totalHpp:e,grossProfit:Math.max(0,j()-e),total:j(),isTempo:K==="tempo",pointsEarned:0,notes:""};if(h.isMember&&a){const E=(typeof window.calculateCartPoints=="function"?window.calculateCartPoints(A,m.store):{totalPoints:0}).totalPoints||0;R.pointsEarned=E;const f=(te||0)+(N&&parseFloat(N.pointsCost)||0),$=E-f,F=Math.max(0,(parseFloat(h.points)||0)+$);R.finalMemberPoints=F;try{const M=a.replace(/\D/g,""),L=String(h.memberId||M);if(await B.collection("freshmart").doc("cms_data").collection("customers").doc(L).set({points:st.firestore.FieldValue.increment($),lastOrderAt:x},{merge:!0}),m.customers){const _=m.customers.find(z=>z&&(String(z.id)===L||String(z.phone).replace(/\D/g,"")===M));_&&(_.points=F)}h.points=F}catch(M){console.warn("[POS] Gagal update poin member:",M)}if(N&&N.id)try{await B.collection("freshmart").doc("cms_data").collection("rewards").doc(String(N.id)).update({stock:st.firestore.FieldValue.increment(-1)});const M=(m.rewards||[]).find(L=>String(L.id)===String(N.id));M&&M.stock!==void 0&&(M.stock=Math.max(0,(parseInt(M.stock)||0)-1))}catch(M){console.warn("[POS] Gagal update stok reward:",M)}}if(R.paylaterLimitTracked=!1,o&&h.phone)try{const T=h.phone.replace(/\D/g,""),E=T.startsWith("0")?"62"+T.slice(1):T;if(await B.collection("freshmart").doc("cms_data").collection("customers").doc(E).set({paylaterUsed:st.firestore.FieldValue.increment(d)},{merge:!0}),m.customers){const $=m.customers.find(F=>F&&(String(F.id)===E||String(F.phone).replace(/\D/g,"")===T));$&&($.paylaterUsed=Math.max(0,parseFloat($.paylaterUsed)||0)+d)}h.paylaterUsed=Math.max(0,parseFloat(h.paylaterUsed)||0)+d,R.paylaterLimitTracked=!0}catch(T){console.warn("[POS] Gagal potong limit PayLater:",T)}let J=!1;if(typeof navigator<"u"&&!navigator.onLine)Yt(R),J=!0,R._isSavedOffline=!0;else try{await B.collection("freshmart_orders").doc(i).set(R)}catch(T){console.warn("[POS] Gagal simpan order online, mengalihkan ke antrean offline:",T),Yt(R),J=!0,R._isSavedOffline=!0}if(cs(R),c){const T={};A.forEach($=>{const F=$.id!=null?$.id.toString():null;if(!F)return;T[F]||(T[F]={main:0,variants:{}});const M=parseFloat($.qty)||0;$.variantName?T[F].variants[$.variantName]=(T[F].variants[$.variantName]||0)+M:T[F].main+=M});const E=Object.keys(T),f=[];for(const $ of E){const F=T[$],M=(m.products||[]).find(_=>String(_.id)===$);if(!M)continue;const L={};F.main>0&&(Ea(M,F.main),L.stock=M.stock,M.storeStock!==void 0&&(L.storeStock=M.storeStock),M.warehouseStock!==void 0&&(L.warehouseStock=M.warehouseStock),Array.isArray(M.stockBatches)&&(L.stockBatches=M.stockBatches),M.hpp&&(L.hpp=M.hpp),M.stock===0&&(M.isActive="false",L.isActive="false"),M.totalSold=(parseFloat(M.totalSold)||0)+F.main,L.totalSold=M.totalSold),Object.keys(F.variants).length>0&&M.variants&&(Object.keys(F.variants).forEach(_=>{const z=F.variants[_];Ea(M,z,_);const W=M.variants.findIndex(pe=>pe.name===_);W>-1&&(M.variants[W].stock===0&&(M.variants[W].isActive=!1),M.variants[W].totalSold=(parseFloat(M.variants[W].totalSold)||0)+z)}),L.variants=M.variants,L.stock=M.stock,M.storeStock!==void 0&&(L.storeStock=M.storeStock),M.warehouseStock!==void 0&&(L.warehouseStock=M.warehouseStock),Array.isArray(M.stockBatches)&&(L.stockBatches=M.stockBatches));const ae=(m.products||[]).findIndex(_=>String(_.id)===$);ae>-1&&(m.products[ae]=M);try{await B.collection("freshmart").doc("cms_data").collection("products").doc($).update(L),f.push($)}catch(_){console.warn("[POS] Gagal update stok produk di Firestore:",$,_)}}if(f.length>0)try{await B.collection("freshmart").doc("cms_data").update({lastUpdate:st.firestore.FieldValue.increment(1),updateType:"stock_change",updatedProductIds:f})}catch{}}_t(),tt(!0);const Y={...R};A=[],de=0,G=0,Z="rp",te=0,N=null,Q(),X(),gr(Y),J&&y(`Mode Offline: Transaksi #${Y.txId.slice(-6)} tersimpan di antrean lokal. Otomatis sinkron saat online.`,"warning")}catch(i){console.error("[POS] Error:",i),y("Gagal menyimpan transaksi. Coba lagi.","error"),l&&(l.disabled=!1,l.innerHTML='<i class="fa-solid fa-check-circle mr-2"></i>Selesaikan Transaksi')}},gr=e=>{window._lastPOSTx=e;try{localStorage.setItem("freshmart_last_pos_tx",JSON.stringify(e))}catch{}const t=e.payment.method==="cash"?`<p class="text-sm text-slate-500">Kembalian: <span class="font-black text-emerald-600">${g(e.payment.change)}</span></p>`:e.payment.method==="tempo"?'<p class="text-sm text-amber-600 font-semibold inline-flex items-center gap-1.5 justify-center"><i class="fa-solid fa-triangle-exclamation text-amber-500"></i> Dicatat sebagai Piutang Tempo</p>':`<p class="text-sm text-slate-500">Metode: ${e.payment.method.toUpperCase()}</p>`,a=!!document.getElementById("pos-admin-container")||typeof window.cTab=="function"&&window.cTab()==="pos";document.body.insertAdjacentHTML("beforeend",`
    <div id="pos-success-modal" class="fixed inset-0 z-[9999] flex items-center justify-center p-4" style="background:rgba(15,23,42,0.75)">
      <div class="bg-white dark:bg-slate-900 rounded-3xl shadow-2xl w-full max-w-sm border border-slate-200/80 dark:border-slate-800">
        <div class="p-6 text-center">
          <div class="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center mx-auto mb-4"><i class="fa-solid fa-circle-check text-emerald-500 text-3xl"></i></div>
          <h2 class="font-black text-lg text-slate-900 dark:text-white mb-1">Transaksi Berhasil!</h2>
          <p class="text-xs text-slate-400 mb-2">#${b(e.txId)}</p>
          <p class="text-2xl font-black mb-1" style="color:var(--color-primary)">${g(e.total)}</p>
          ${t}
          ${e._isSavedOffline||e._offlineQueuedAt?`
          <div class="mt-2.5 px-3 py-1.5 rounded-xl bg-amber-50 dark:bg-amber-950/40 text-[11px] font-bold text-amber-700 dark:text-amber-300 flex items-center justify-center gap-1.5 border border-amber-200 dark:border-amber-800">
            <i class="fa-solid fa-cloud-arrow-up text-amber-500"></i>
            <span>Tersimpan di Antrean Offline (Akan sinkron saat online)</span>
          </div>`:`
          <div class="mt-2.5 px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800/80 text-[11px] font-bold text-slate-600 dark:text-slate-300 flex items-center justify-center gap-1.5 border border-slate-200/60 dark:border-slate-700/60">
            <i class="fa-solid fa-check-double text-emerald-500"></i>
            <span>Tercatat Resmi di Menu Pesanan CMS</span>
          </div>`}
          ${e.pointsEarned>0?`
          <div class="mt-2 p-2 rounded-xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 text-amber-700 dark:text-amber-300 text-xs font-bold flex items-center justify-center gap-1.5">
            <i class="fa-solid fa-star text-amber-500"></i>
            <span>+${e.pointsEarned} Poin Member Didapat!</span>
          </div>`:""}
          ${e.pointDiscount>0||e.payment&&e.payment.pointDiscount>0?`
          <div class="mt-1.5 p-2 rounded-xl bg-rose-50 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-800 text-rose-700 dark:text-rose-300 text-xs font-bold flex items-center justify-center gap-1.5">
            <i class="fa-solid fa-tags text-rose-500"></i>
            <span>Diskon Poin: -${g(e.pointDiscount||e.payment?.pointDiscount)}</span>
          </div>`:""}
          ${e.claimedReward?`
          <div class="mt-1.5 p-2 rounded-xl bg-purple-50 dark:bg-purple-950/30 border border-purple-200 dark:border-purple-800 text-purple-700 dark:text-purple-300 text-xs font-bold flex items-center justify-center gap-1.5">
            <i class="fa-solid fa-gift text-purple-500"></i>
            <span>Klaim Hadiah: ${b(e.claimedReward.name)}</span>
          </div>`:""}
        </div>
        <div class="px-6 pb-6 flex flex-col gap-2">
          <button onclick="window.printPOSReceiptDirect(window._lastPOSTx)" class="w-full py-3.5 rounded-2xl text-white font-black text-sm shadow-lg active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer hover:brightness-105" style="background:linear-gradient(135deg, var(--color-primary-light,#e1b858) 0%, var(--color-primary,#c59b27) 50%, var(--color-primary-dark,#a87f1b) 100%);box-shadow:0 4px 14px rgba(var(--color-primary-rgb),0.35)">
            <i class="fa-solid fa-eye text-white/90"></i> Preview &amp; Cetak Struk
          </button>
          <button onclick="document.getElementById('pos-success-modal')?.remove()" class="w-full py-2.5 rounded-2xl border border-slate-200/80 dark:border-slate-700/80 text-slate-500 dark:text-slate-400 font-medium text-xs hover:bg-slate-50 dark:hover:bg-slate-800 transition-all cursor-pointer">Transaksi Baru</button>
          ${a?`
          <button onclick="document.getElementById('pos-success-modal')?.remove(); if(typeof window.openAdminTab==='function') window.openAdminTab('orders');" class="w-full py-2 rounded-xl text-slate-400 dark:text-slate-500 text-[11px] font-medium hover:text-[var(--color-primary)] transition-all flex items-center justify-center gap-1.5 cursor-pointer">
            <i class="fa-solid fa-receipt"></i> Buka Menu Pesanan Toko
          </button>`:""}
        </div>
      </div>
    </div>`),(typeof Qe=="function"?Qe():{}).autoPrintOrder&&typeof window.printPOSReceiptDirect=="function"&&setTimeout(()=>{window.printPOSReceiptDirect(e)},300)},Hs=e=>{kt(e)},kt=e=>{window._lastPOSTx=e;try{localStorage.setItem("freshmart_last_pos_tx",JSON.stringify(e))}catch{}if(typeof window.printPOSReceiptDirect=="function"){window.printPOSReceiptDirect(e);return}const t=typeof Qe=="function"?Qe():{paperSize:"58mm"},a=typeof window.getPaperCols=="function"?window.getPaperCols(t.paperSize):t.paperSize==="80mm"?48:32,s=a>=40,r=t.headerText||m.store?.name||"TOKO PUTRI",o=m.store?.wa||"",n=m.store?.address||"",d=t.footerText||"Terima Kasih Atas Kunjungan Anda!",l=typeof window.formatCompactDate=="function"?window.formatCompactDate(e.dateMs||Date.now(),s):new Date(e.dateMs||Date.now()).toLocaleString("id-ID"),c=(e.items||[]).map(u=>{const k=u.variantName?` (${b(u.variantName)}${u.colorCode?" "+b(u.colorCode):""})`:"",v=u.effectivePrice||u.price||0,x=u.subtotal!==void 0?u.subtotal:parseFloat(u.qty||1)*v;return`
        <tr>
            <td colspan="2" style="padding-top:4px;font-weight:bold;word-break:break-word;">${b(u.name)}${k}${u.poTime?" [PO]":""}</td>
        </tr>
        <tr>
            <td style="padding-bottom:3px;color:#475569;font-size:10.5px;">&nbsp;&nbsp;${V(u.qty)} ${b(u.unit||"pcs")} x ${Math.round(v).toLocaleString("id-ID")}</td>
            <td style="text-align:right;padding-bottom:3px;white-space:nowrap;font-weight:bold;">${Math.round(x).toLocaleString("id-ID")}</td>
        </tr>
        ${u.discount&&u.discount>0?`<tr><td style="padding-bottom:2px;color:#e11d48;font-size:10px;">&nbsp;&nbsp;(Diskon)</td><td style="text-align:right;color:#e11d48;font-size:10px;">-${Math.round(u.discount).toLocaleString("id-ID")}</td></tr>`:""}
        ${u.poTime?`<tr><td colspan="2" style="font-size:9.5px;font-style:italic;color:#64748b;">&nbsp;&nbsp;* Estimasi PO: ${b(u.poTime)}</td></tr>`:""}
        `}).join(""),i=e.discountType==="percent"&&e.discountVal?`Diskon (${e.discountVal}%)`:"Diskon Toko";document.getElementById("pos-receipt-fallback-modal")?.remove(),typeof window.pushModalHistory=="function"&&window.pushModalHistory("posReceiptFallback"),document.body.insertAdjacentHTML("beforeend",`
    <div id="pos-receipt-fallback-modal" class="fixed inset-0 z-[10000] flex items-center justify-center p-3 sm:p-4" style="background:rgba(15,23,42,0.75)" onclick="if(event.target===this) window.closePOSReceiptFallbackModal()">
        <div class="bg-white dark:bg-slate-900 rounded-3xl shadow-2xl w-full ${s?"max-w-[420px]":"max-w-[340px]"} border border-slate-200 dark:border-slate-800 overflow-hidden flex flex-col max-h-[90vh]">
            <div class="p-3.5 sm:p-4 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center bg-slate-50 dark:bg-slate-800/50">
                <span class="font-bold text-xs text-slate-700 dark:text-slate-200 flex items-center gap-1.5"><i class="fa-solid fa-receipt text-amber-500"></i>Preview Struk Thermal (${a} Kolom)</span>
                <button onclick="window.closePOSReceiptFallbackModal()" class="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-slate-700 dark:hover:text-slate-200 transition-colors flex items-center justify-center cursor-pointer" aria-label="Tutup preview"><i class="fa-solid fa-xmark text-sm"></i></button>
            </div>
            <div id="pos-receipt-paper-box" class="p-4 overflow-y-auto flex-1 font-mono text-[11px] bg-slate-50/60 dark:bg-slate-950 text-slate-800 dark:text-slate-200 space-y-1.5 select-text custom-scrollbar">
                <div class="text-center font-bold text-sm uppercase">${b(r)}</div>
                ${n?`<div class="text-center text-[10px] text-slate-500">${b(n)}</div>`:""}
                ${o?`<div class="text-center text-[10px] text-slate-500">WA: ${b(o)}</div>`:""}
                ${e.payment?.taxNpwp||m.store?.taxNpwp?`<div class="text-center text-[9px] font-mono text-slate-500">NPWP: ${b(e.payment?.taxNpwp||m.store.taxNpwp)}</div>`:""}
                <div class="border-t border-dashed border-slate-300 dark:border-slate-700 my-2"></div>
                <div class="flex justify-between"><span>No : <b>#${b(e.txId)}</b></span><span>${b(l)}</span></div>
                <div class="flex justify-between"><span>Kasir: ${b(e.cashierName||"Kasir")}</span><span>Plg: ${b(e.customer?.name||"Umum")}</span></div>
                ${e.customer?.phone?`<div>HP  : ${b(e.customer.phone)}</div>`:""}
                <div class="border-t border-dashed border-slate-300 dark:border-slate-700 my-2"></div>
                <table class="w-full text-[11px] border-collapse">
                    ${c}
                </table>
                <div class="border-t border-dashed border-slate-300 dark:border-slate-700 my-2"></div>
                <div class="flex justify-between"><span>Subtotal</span><span>${g(e.subtotal)}</span></div>
                ${(e.globalDiscount||0)>0?`<div class="flex justify-between text-rose-500 font-bold"><span>${i}</span><span>- ${g(e.globalDiscount)}</span></div>`:""}
                ${(e.pointDiscount||0)>0?`<div class="flex justify-between text-emerald-600 font-bold"><span>Diskon Poin (${e.pointsRedeemed||0} Pts)</span><span>- ${g(e.pointDiscount)}</span></div>`:""}
                ${e.claimedReward?`<div class="flex justify-between text-purple-600 font-bold"><span>[Klaim Hadiah]</span><span class="truncate max-w-[150px]">${b(e.claimedReward.name)}</span></div>`:""}
                ${(()=>{const u=Us(e);if(!u.hasPpn)return"";const k=u.ppnAmount>0?`${u.isInclusive?"":"+"}${g(u.ppnAmount)}`:"Rp 0";return`
                    <div class="flex justify-between text-slate-500"><span>DPP</span><span>${g(u.dppAmount)}</span></div>
                    <div class="flex justify-between font-bold text-amber-600 dark:text-amber-400"><span>${b(u.ppnLabel)}</span><span>${k}</span></div>
                    `})()}
                <div class="flex justify-between font-black text-sm pt-1 border-t border-slate-200 dark:border-slate-700"><span>TOTAL</span><span style="color:var(--color-primary)">${g(e.total)}</span></div>
                ${e.payment.method==="cash"?`<div class="flex justify-between"><span>Bayar Tunai</span><span>${g(e.payment.paid)}</span></div><div class="flex justify-between font-bold text-emerald-600"><span>Kembalian</span><span>${g(e.payment.change)}</span></div>`:""}
                ${e.payment.method==="tempo"?`
                    ${e.payment.isPaylater||e.isPaylater?`<div class="flex justify-between font-bold text-emerald-600"><span>Plafon PayLater Digunakan</span><span>${g(e.payment.paylaterUsed||e.total-(e.payment.tempoDp||e.payment.dp||0))}</span></div>`:""}
                    <div class="flex justify-between"><span>Uang Muka (DP)</span><span>${g(e.payment.tempoDp||e.payment.dp||0)}</span></div>
                    <div class="flex justify-between font-bold ${e.payment.isPaylater||e.isPaylater?"text-emerald-700 dark:text-emerald-400":"text-amber-600"}">
                        <span>${e.payment.isPaylater||e.isPaylater?"Tagihan PayLater":"Sisa Piutang"}</span>
                        <span>${g(e.payment.tempoBalance||0)}</span>
                    </div>
                `:""}
                <div class="flex justify-between"><span>Metode Bayar</span><span>${e.payment.isPaylater||e.isPaylater?"PUTRI PAYLATER":b(e.payment.method.toUpperCase())}</span></div>
                ${e.pointsEarned>0||(e.pointsRedeemed||0)>0?`
                <div class="border-t border-dashed border-slate-300 dark:border-slate-700 my-2"></div>
                ${e.pointsEarned>0?`<div class="flex justify-between text-amber-600 dark:text-amber-400 font-bold"><span>Poin Didapat:</span><span>+${e.pointsEarned} Poin</span></div>`:""}
                ${(e.pointsRedeemed||0)>0?`<div class="flex justify-between text-rose-500 font-bold"><span>Poin Ditukar:</span><span>-${e.pointsRedeemed} Poin</span></div>`:""}
                ${e.finalMemberPoints!==void 0?`<div class="flex justify-between text-slate-600 dark:text-slate-300 font-bold"><span>Sisa Saldo Poin:</span><span>${e.finalMemberPoints} Poin</span></div>`:""}`:""}
                <div class="border-t border-dashed border-slate-300 dark:border-slate-700 my-2"></div>
                <div class="text-center text-[10px] text-slate-400 my-1">${b(d)}</div>
            </div>
            <div class="p-3 border-t border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/40 flex gap-2">
                <button onclick="window.executePOSPrintDirect()" class="flex-1 py-3.5 rounded-2xl text-white font-black text-xs sm:text-sm flex items-center justify-center gap-2 cursor-pointer shadow-md transition-all active:scale-95 hover:opacity-95" style="background:var(--color-primary)">
                    <i class="fa-solid fa-bolt text-amber-300"></i><i class="fa-solid fa-print"></i> Cetak Struk Langsung
                </button>
                <button onclick="if(typeof window.openPrinterSettingsModal==='function') window.openPrinterSettingsModal();" class="px-3.5 py-3.5 rounded-2xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 font-bold text-xs flex items-center gap-1 cursor-pointer transition-all active:scale-95" title="Pengaturan Printer">
                    <i class="fa-solid fa-gear"></i>
                </button>
            </div>
        </div>
    </div>`)},Bs=(e=!1)=>{const t=()=>{document.getElementById("pos-receipt-fallback-modal")?.remove()};typeof window.requestCloseModal=="function"?window.requestCloseModal("posReceiptFallback",e,t):t()};window.closePOSReceiptFallbackModal=Bs;const Sa=()=>{if(window._lastPOSTx&&typeof window.printPOSReceiptDirect=="function"){window.printPOSReceiptDirect(window._lastPOSTx);return}const e=p("pos-receipt-paper-box");e&&(typeof window.renderThermalDOMAndPrint=="function"?window.renderThermalDOMAndPrint(e.innerHTML):window.print())},Pa=()=>{let e=window._lastPOSTx;if(!e)try{const t=localStorage.getItem("freshmart_last_pos_tx");t&&(e=JSON.parse(t))}catch{}if(!e&&Array.isArray(window.appData?.orders)&&window.appData.orders.length>0){const t=window.appData.orders.filter(a=>a.source==="pos"||a.isPos||a.id&&a.id.startsWith("POS-"));e=t.length>0?t[0]:window.appData.orders[0]}if(!e){y("Belum ada transaksi terakhir untuk dicetak ulang.","info");return}y(`Mencetak ulang struk #${e.txId||e.id||""}...`,"info"),kt(e)},qt=(e,t=!1)=>{const a=typeof e=="string"?e:e?.value||"";yt&&(clearTimeout(yt),yt=null);const s=()=>{ue=a,ze=1,document.querySelectorAll("#pos-search-input").forEach(r=>{r.value!==ue&&(r.value=ue)}),document.querySelectorAll(".pos-search-clear-btn").forEach(r=>{ue&&ue.trim().length>0?(r.classList.remove("hidden"),r.classList.add("flex")):(r.classList.add("hidden"),r.classList.remove("flex"))}),X()};t?s():yt=setTimeout(s,130)},Ma=()=>{document.querySelectorAll("#pos-search-input").forEach(t=>{t.value=""}),qt("",!0);const e=p("pos-search-input");e&&e.focus()},Ta=()=>{ze+=1,X(!0)},_e=()=>{try{const e=localStorage.getItem(ms);return e?JSON.parse(e):[]}catch(e){return console.error("[POS Offline] Gagal baca antrean offline:",e),[]}},$a=e=>{try{localStorage.setItem(ms,JSON.stringify(e||[]))}catch(t){console.error("[POS Offline] Gagal simpan antrean offline:",t)}},Yt=e=>{const t=_e(),a={...e,_offlineQueuedAt:new Date().toISOString()},s=t.findIndex(r=>(r.id||r.txId)===(e.id||e.txId));s>=0?t[s]=a:t.push(a),$a(t),he()};let Vt=!1;const dt=async(e=!1)=>{if(Vt)return;if(typeof navigator<"u"&&!navigator.onLine){e||y("Koneksi internet offline. Sinkronisasi ditunda sampai koneksi pulih.","warning");return}const t=_e();if(!t||t.length===0){he(),e||y("Semua transaksi kasir sudah tersinkronisasi.","success");return}Vt=!0,he(!0),e||y(`Menyinkronkan ${t.length} transaksi offline ke server...`,"info");let a=0;const s=[];for(const r of t)try{const o={...r},n=o.id||o.txId;delete o._isSavedOffline,delete o._offlineQueuedAt,await B.collection("freshmart_orders").doc(n).set(o,{merge:!0}),a++}catch(o){console.error("[POS Offline] Gagal sinkronkan transaksi:",r.id||r.txId,o),s.push(r)}$a(s),Vt=!1,he(),a>0&&y(`Berhasil menyinkronkan ${a} transaksi kasir ke cloud!`,"success"),s.length>0&&y(`${s.length} transaksi belum berhasil disinkronkan. Akan dicoba lagi otomatis.`,"warning")},he=(e=!1)=>{const a=_e().length;document.querySelectorAll(".pos-offline-sync-container").forEach(s=>{if(a===0&&!e){s.innerHTML="",s.classList.add("hidden");return}s.classList.remove("hidden"),e?s.innerHTML=`
                <div class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-amber-500/20 text-amber-300 border border-amber-500/30 text-[10px] font-bold shadow-xs">
                    <i class="fa-solid fa-arrows-rotate animate-spin text-[10px]"></i>
                    <span class="hidden sm:inline">Sinkron (${a})...</span>
                    <span class="sm:hidden">${a}</span>
                </div>
            `:s.innerHTML=`
                <button type="button" onclick="window.posSyncOfflineTransactions()" class="inline-flex items-center gap-1.5 px-2 sm:px-2.5 py-1 rounded-xl bg-amber-500/25 hover:bg-amber-500/40 text-amber-200 hover:text-white border border-amber-400/40 text-[10px] font-bold cursor-pointer active:scale-95 transition-all shadow-xs" title="${a} transaksi offline belum disinkronkan ke server. Klik untuk sinkronisasi sekarang.">
                    <i class="fa-solid fa-cloud-arrow-up text-amber-400"></i>
                    <span class="hidden sm:inline">${a} Antrean Offline</span>
                    <span class="sm:hidden font-black">${a}</span>
                </button>
            `})},$t=e=>{document.querySelectorAll(".pos-network-status-badge").forEach(t=>{e?(t.className="pos-network-status-badge hidden sm:inline-flex items-center gap-1.5 text-[10px] font-bold text-emerald-400 bg-emerald-950/40 px-2.5 py-1 rounded-lg border border-emerald-500/30",t.innerHTML='<span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span><span>Online</span>'):(t.className="pos-network-status-badge inline-flex items-center gap-1.5 text-[10px] font-bold text-rose-300 bg-rose-950/60 px-2.5 py-1 rounded-lg border border-rose-500/40 animate-pulse",t.innerHTML='<i class="fa-solid fa-wifi-slash text-[10px] text-rose-400"></i><span>Offline</span>')})};let Qa=!1;const vt=()=>{const e=typeof navigator<"u"?navigator.onLine:!0;$t(e),he(),!Qa&&(Qa=!0,window.addEventListener("online",()=>{$t(!0),y("Koneksi internet terhubung kembali. Memulai auto-sync transaksi kasir...","info"),dt(!0)}),window.addEventListener("offline",()=>{$t(!1),y("Koneksi terputus. Mode POS Offline aktif (transaksi kasir aman di antrean lokal).","warning")}),e&&_e().length>0&&setTimeout(()=>{dt(!0)},2500))},Rs=({isStorefront:e})=>{const a=(typeof window.getCashierSession=="function"?window.getCashierSession():null)?.name||(e?"Kasir":"Admin Seller"),s=b(m.store?.name||"Toko Putri");return`
    <div class="flex flex-col h-full w-full overflow-hidden bg-slate-50/50 dark:bg-slate-900/40 relative">
        ${e?`
        <!-- STOREFRONT POS HEADER (Proteksi Anti-Tabrakan Status Bar / Safe-Area) -->
        <header class="glass-header pos-storefront-header sticky top-0 z-30 flex shrink-0 items-center justify-between text-white shadow-md">
            <div class="flex items-center gap-2.5 min-w-0">
                <button onclick="window.exitPOSMode()" class="w-8 h-8 rounded-xl bg-black/15 hover:bg-black/25 text-white flex items-center justify-center text-xs transition-all active:scale-90 cursor-pointer shrink-0" title="Kembali ke Etalase Toko">
                    <i class="fa-solid fa-arrow-left"></i>
                </button>
                <div class="flex items-center gap-2 min-w-0">
                    <div class="w-8 h-8 rounded-xl flex items-center justify-center text-white text-sm shrink-0 shadow-xs bg-black/20">
                        <i class="fa-solid fa-cash-register"></i>
                    </div>
                    <div class="min-w-0">
                        <h1 class="text-xs font-black uppercase tracking-wider leading-none text-white truncate">${s}</h1>
                        <div class="flex items-center gap-1.5 mt-1">
                            <span class="w-1.5 h-1.5 rounded-full bg-emerald-300 animate-pulse"></span>
                            <span class="text-[10px] text-white/90 font-medium truncate">${b(a)}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex items-center gap-1.5 sm:gap-2 shrink-0 whitespace-nowrap">
                <span class="pos-network-status-badge hidden sm:inline-flex items-center gap-1.5 text-[10px] font-bold text-emerald-400 bg-emerald-950/40 px-2.5 py-1 rounded-lg border border-emerald-500/30">
                    <span class="relative flex h-2 w-2">
                        <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span class="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                    <span>Online</span>
                </span>
                <div class="pos-offline-sync-container hidden items-center shrink-0"></div>
                <span id="pos-live-clock" class="hidden sm:inline-block text-[10px] font-mono text-white/90 px-2.5 py-1 bg-black/15 rounded-lg border border-white/20">--:--:--</span>
                <span class="hidden md:inline-flex items-center gap-1.5 text-[10px] font-bold text-white bg-black/20 px-2.5 py-1 rounded-lg">
                    <i class="fa-solid fa-barcode text-xs"></i> USB Scanner Aktif
                </span>
                <div id="pos-shift-btn-storefront" class="flex items-center shrink-0"></div>
                <div id="pos-held-btn-storefront" class="flex items-center shrink-0"></div>
                <button onclick="window.openShoppingGuideModal && window.openShoppingGuideModal('pos')" class="w-8 h-8 rounded-xl bg-black/15 hover:bg-black/25 text-white flex items-center justify-center text-xs transition-all active:scale-90 cursor-pointer shrink-0" title="Buku Panduan Kasir POS">
                    <i class="fa-solid fa-circle-question"></i>
                </button>
                <button onclick="window.cashierLogout()" class="h-8 px-2.5 sm:px-3 rounded-xl bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold inline-flex items-center gap-1.5 transition-all active:scale-95 shadow-xs cursor-pointer whitespace-nowrap shrink-0" title="Keluar Mode Kasir">
                    <i class="fa-solid fa-power-off text-xs"></i>
                    <span class="hidden sm:inline">Keluar</span>
                </button>
            </div>
        </header>`:`
        <!-- ADMIN POS ACTION STRIP (lega, nyaman, presisi tinggi, anti-wrap di mobile) -->
        <div class="min-h-[46px] sm:min-h-[50px] py-1.5 sm:py-2 px-3 sm:px-4 shrink-0 bg-slate-50/80 dark:bg-slate-800/60 border-b border-slate-200/80 dark:border-slate-800 flex items-center justify-between text-xs overflow-hidden gap-2">
            <div class="flex items-center gap-1.5 sm:gap-2 shrink-0 whitespace-nowrap">
                <span class="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-emerald-500 animate-pulse shrink-0 shadow-xs"></span>
                <span class="text-xs font-black uppercase tracking-wider text-slate-800 dark:text-slate-100 whitespace-nowrap">
                    <span class="hidden sm:inline">Terminal </span>POS
                </span>
                <span class="hidden sm:inline text-slate-300 dark:text-slate-600">•</span>
                <span id="pos-live-clock" class="hidden sm:inline text-[11px] font-mono font-bold text-slate-500 dark:text-slate-400">--:--:--</span>
            </div>
            <div class="flex items-center gap-1.5 sm:gap-2 shrink-0 whitespace-nowrap">
                <span class="pos-network-status-badge hidden sm:inline-flex items-center gap-1.5 text-[10px] font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 px-2.5 py-1 rounded-lg border border-emerald-200 dark:border-emerald-800">
                    <span class="relative flex h-2 w-2">
                        <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                        <span class="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                    <span>Online</span>
                </span>
                <div class="pos-offline-sync-container hidden items-center shrink-0"></div>
                <span class="hidden md:inline-flex items-center gap-1.5 text-[10px] font-bold text-slate-500 dark:text-slate-400 whitespace-nowrap">
                    <i class="fa-solid fa-barcode text-xs"></i> Scanner Otomatis
                </span>
                <div id="pos-shift-btn-admin" class="flex items-center shrink-0"></div>
                <div id="pos-held-btn-admin" class="flex items-center shrink-0"></div>
                <button onclick="if(typeof window.openPrinterSettingsModal==='function') window.openPrinterSettingsModal();" class="h-8 px-2 sm:px-2.5 rounded-xl bg-white hover:bg-slate-100 dark:bg-slate-800 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 text-xs font-bold inline-flex items-center gap-1.5 transition-all cursor-pointer whitespace-nowrap shrink-0 shadow-2xs active:scale-95" title="Pengaturan Printer Kasir & Thermal">
                    <i class="fa-solid fa-print text-xs text-sky-500"></i>
                    <span class="hidden sm:inline">Printer</span>
                </button>
                <button onclick="window.openShoppingGuideModal && window.openShoppingGuideModal('pos')" class="h-8 px-2 sm:px-2.5 rounded-xl bg-white hover:bg-slate-100 dark:bg-slate-800 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 text-xs font-bold inline-flex items-center gap-1.5 transition-all cursor-pointer whitespace-nowrap shrink-0 shadow-2xs active:scale-95" title="Buku Panduan Kasir POS">
                    <i class="fa-solid fa-circle-question text-xs text-[var(--color-primary)]"></i>
                    <span class="hidden sm:inline">Panduan POS</span>
                </button>
                <button onclick="window.posClearCart()" class="h-8 px-2.5 sm:px-3 rounded-xl bg-white hover:bg-rose-50 dark:bg-slate-800 dark:hover:bg-rose-950/30 border border-slate-200 dark:border-slate-700 text-rose-500 text-xs font-bold inline-flex items-center gap-1.5 transition-all cursor-pointer whitespace-nowrap shrink-0 shadow-2xs active:scale-95" title="Reset Keranjang Kasir">
                    <i class="fa-solid fa-trash-can text-xs"></i>
                    <span class="inline">Reset</span>
                </button>
            </div>
        </div>`}

        <!-- MAIN SPLIT WORKSPACE: Desktop side-by-side, Mobile full catalog -->
        <div class="flex flex-1 overflow-hidden">
            <!-- PANEL KIRI: KATALOG (Mobile 100%, Desktop 63%-65%) -->
            <div class="flex flex-col flex-1 lg:w-[63%] xl:w-[65%] border-r border-slate-200/80 dark:border-slate-800 overflow-hidden bg-slate-50/50 dark:bg-slate-900/30">
                <!-- Search & Category Bar with View Switcher -->
                <div class="p-2.5 sm:p-3.5 bg-white dark:bg-slate-900 border-b border-slate-200/80 dark:border-slate-800 space-y-2 shrink-0 shadow-2xs">
                    <div class="flex items-center gap-2">
                        <div class="relative flex-1 min-w-0">
                            <i class="fa-solid fa-magnifying-glass absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xs pointer-events-none"></i>
                            <input id="pos-search-input" type="text" placeholder="Cari nama, SKU, barcode... [F2]" 
                                class="w-full pl-8 pr-8 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs sm:text-sm font-medium text-slate-800 dark:text-slate-100 focus:outline-none focus:border-[var(--color-primary)] focus:bg-white dark:focus:bg-slate-900 transition-all"
                                oninput="window.posSearchFn(this.value)">
                            <button type="button" onclick="window.posClearSearch()" class="pos-search-clear-btn hidden absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-rose-500 text-xs p-1 cursor-pointer transition-colors active:scale-90" title="Hapus pencarian (Esc)">
                                <i class="fa-solid fa-circle-xmark"></i>
                            </button>
                        </div>
                        <!-- Tombol Scan Barcode Kamera HP / Laptop (F9) -->
                        <button onclick="window.openPOSCameraScanner()" class="h-9 px-2.5 sm:px-3 rounded-xl bg-[rgba(var(--color-primary-rgb),0.08)] hover:bg-[rgba(var(--color-primary-rgb),0.15)] text-[var(--color-primary)] text-xs font-bold flex items-center gap-1.5 transition-all active:scale-95 border border-[rgba(var(--color-primary-rgb),0.25)] shrink-0 cursor-pointer shadow-2xs" title="Scan Barcode Kamera (F9)">
                            <i class="fa-solid fa-camera text-xs"></i>
                            <span class="hidden sm:inline">Scan (F9)</span>
                        </button>
                        <!-- View Switcher (Grid vs List) -->
                        <div class="flex items-center p-0.5 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl shrink-0">
                            <button id="pos-view-btn-grid" onclick="window.setPOSViewMode('grid')" class="w-8 h-8 rounded-lg flex items-center justify-center text-xs transition-all cursor-pointer ${Se==="grid"?"text-white shadow-xs":"text-slate-500 hover:text-slate-800 dark:text-slate-400"}" style="${Se==="grid"?"background:linear-gradient(135deg, var(--color-primary-light,#e1b858) 0%, var(--color-primary,#c59b27) 60%, var(--color-primary-dark,#a87f1b) 100%)":""}" title="Tampilan Grid Foto">
                                <i class="fa-solid fa-grip"></i>
                            </button>
                            <button id="pos-view-btn-list" onclick="window.setPOSViewMode('list')" class="w-8 h-8 rounded-lg flex items-center justify-center text-xs transition-all cursor-pointer ${Se==="list"?"text-white shadow-xs":"text-slate-500 hover:text-slate-800 dark:text-slate-400"}" style="${Se==="list"?"background:linear-gradient(135deg, var(--color-primary-light,#e1b858) 0%, var(--color-primary,#c59b27) 60%, var(--color-primary-dark,#a87f1b) 100%)":""}" title="Tampilan List Baris Kompak">
                                <i class="fa-solid fa-list-ul"></i>
                            </button>
                        </div>
                    </div>
                    <!-- Kategori Chips -->
                    <div id="pos-cat-filter" class="flex gap-1.5 overflow-x-auto hide-scrollbar pb-0.5"></div>
                    <div id="pos-subcat-filter" class="w-full hidden"></div>
                    <!-- Keyboard Shortcuts Quick Bar (Hanya Desktop >= sm) -->
                    <div class="hidden sm:flex items-center justify-between text-[10px] text-slate-400 dark:text-slate-500 pt-1.5 border-t border-slate-100 dark:border-slate-800/80 px-0.5 select-none">
                        <div class="flex items-center gap-1.5 overflow-x-auto hide-scrollbar py-0.5">
                            <button type="button" onclick="document.getElementById('pos-search-input')?.focus()" class="pos-shortcut-chiclet" title="Cari produk [F2]"><kbd class="pos-keycap">F2</kbd><span>Cari</span></button>
                            <button type="button" onclick="window.openPayModal()" class="pos-shortcut-chiclet" title="Proses pembayaran [F4]"><kbd class="pos-keycap">F4</kbd><span>Bayar</span></button>
                            <button type="button" onclick="window.reprintLastPOSReceipt && window.reprintLastPOSReceipt()" class="pos-shortcut-chiclet" title="Cetak ulang struk terakhir [F5]"><kbd class="pos-keycap">F5</kbd><span>Ulang</span></button>
                            <button type="button" onclick="window.posHoldCurrentCart()" class="pos-shortcut-chiclet" title="Tahan transaksi [F6]"><kbd class="pos-keycap">F6</kbd><span>Tahan</span></button>
                            <button type="button" onclick="document.querySelector('.pos-disc-val-input')?.focus()" class="pos-shortcut-chiclet" title="Fokus input diskon [F7]"><kbd class="pos-keycap">F7</kbd><span>Diskon</span></button>
                            <button type="button" onclick="window.openPOSHeldModal()" class="pos-shortcut-chiclet" title="Buka transaksi tertahan [F8]"><kbd class="pos-keycap">F8</kbd><span>Tertahan</span></button>
                            <button type="button" onclick="window.openPOSCameraScanner()" class="pos-shortcut-chiclet" title="Scan kamera [F9]"><kbd class="pos-keycap">F9</kbd><span>Kamera</span></button>
                            <button type="button" onclick="window.posClearSearch()" class="pos-shortcut-chiclet" title="Batal / Tutup [Esc]"><kbd class="pos-keycap">Esc</kbd><span>Batal</span></button>
                        </div>
                    </div>
                </div>

                <!-- Product Catalog Container -->
                <div id="pos-catalog-grid" class="${Se==="list"?"pos-catalog-list-mode":"pos-catalog-grid-mode"}"></div>
            </div>

            <!-- PANEL KANAN: BILLING & KERANJANG (Hanya Desktop >= lg) -->
            <div class="hidden lg:flex flex-col lg:w-[37%] xl:w-[35%] bg-white dark:bg-slate-900 border-l border-slate-200/80 dark:border-slate-800 overflow-hidden shrink-0 shadow-sm">
                <!-- Header Keranjang Desktop -->
                <div class="px-4 py-3 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between shrink-0 bg-slate-50/70 dark:bg-slate-800/40">
                    <div class="flex items-center gap-2 min-w-0">
                        <div class="w-7 h-7 rounded-lg flex items-center justify-center text-xs text-white shadow-xs shrink-0" style="background:var(--color-primary)">
                            <i class="fa-solid fa-cart-shopping"></i>
                        </div>
                        <h3 class="text-xs font-black uppercase tracking-wider text-slate-800 dark:text-white truncate whitespace-nowrap leading-none">
                            Keranjang (<span class="pos-item-count-target">0</span>)
                        </h3>
                    </div>
                    <div class="flex items-center gap-1.5 shrink-0">
                        <button onclick="window.posHoldCurrentCart()" class="pos-hold-btn-target text-[10px] font-bold text-slate-700 dark:text-slate-200 bg-white hover:bg-slate-100 dark:bg-slate-800 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 px-2.5 py-1 rounded-lg transition-all cursor-pointer flex items-center gap-1.5 whitespace-nowrap active:scale-95 shadow-2xs" title="Tahan transaksi sementara (F6)">
                            <i class="fa-solid fa-pause text-amber-500 text-[9px]"></i><span>Tahan</span>
                        </button>
                        <button onclick="window.posClearCart()" class="text-[10px] font-bold text-slate-700 dark:text-slate-200 bg-white hover:bg-slate-100 dark:bg-slate-800 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 px-2.5 py-1 rounded-lg transition-all cursor-pointer flex items-center gap-1.5 shrink-0 whitespace-nowrap active:scale-95 shadow-2xs" title="Kosongkan keranjang">
                            <i class="fa-solid fa-trash-can text-rose-500 text-[9px]"></i><span>Kosongkan</span>
                        </button>
                    </div>
                </div>

                <!-- Items List Desktop -->
                <div class="pos-cart-items-target flex-1 overflow-y-auto p-3 space-y-2"></div>

                <!-- Summary & Bayar Desktop -->
                <div class="p-4 border-t border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/60 shrink-0 space-y-2.5">
                    <!-- Breakdown Ringkasan & Diskon (Hanya muncul saat keranjang ada isi agar bebas sesak saat kosong) -->
                    <div class="pos-cart-breakdown space-y-2.5" style="display:none">
                        <div class="flex justify-between text-xs text-slate-500 font-medium">
                            <span>Subtotal Item</span>
                            <span class="pos-subtotal-target font-bold text-slate-800 dark:text-slate-200">Rp 0</span>
                        </div>
                        <div class="pos-tax-breakdown-row flex justify-between text-xs font-medium" style="display:none">
                            <span class="pos-tax-label-target text-slate-500">PPN (11%)</span>
                            <span class="pos-tax-amt-target font-bold font-mono text-amber-600 dark:text-amber-400">Rp 0</span>
                        </div>
                        <div class="pos-hpp-margin-row flex justify-between text-xs text-slate-500 font-medium" style="display:none">
                            <span class="flex items-center gap-1"><i class="fa-solid fa-coins text-amber-500 text-[10px]"></i> Total Modal (HPP)</span>
                            <span class="pos-total-hpp-target font-bold text-amber-600 dark:text-amber-400">Rp 0</span>
                        </div>
                        <div class="pos-hpp-margin-row flex justify-between text-xs text-slate-500 font-medium" style="display:none">
                            <span class="flex items-center gap-1"><i class="fa-solid fa-arrow-trend-up text-emerald-500 text-[10px]"></i> Estimasi Laba</span>
                            <span class="pos-total-margin-target font-bold text-emerald-600 dark:text-emerald-400">Rp 0</span>
                        </div>
                        <!-- Smart Diskon Transaksi Kasir (Rp / %) -->
                        <div class="space-y-1.5 p-2.5 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200/80 dark:border-slate-700/60 text-xs transition-colors" style="border-color:rgba(var(--color-primary-rgb),0.25)">
                            <div class="flex items-center justify-between">
                                <span class="text-slate-700 dark:text-slate-200 font-bold flex items-center gap-1.5">
                                    <div class="w-5 h-5 rounded-md flex items-center justify-center text-[10px] text-white shrink-0 shadow-2xs" style="background:var(--color-primary)">
                                        <i class="fa-solid fa-tags"></i>
                                    </div>
                                    <span>Diskon Transaksi</span>
                                </span>
                                <div class="flex items-center bg-slate-200/80 dark:bg-slate-700/80 rounded-lg p-0.5 text-[10px]">
                                    <button onclick="window.posSetDiscountType('rp')" class="pos-disc-type-rp px-2.5 py-0.5 rounded-md transition-all cursor-pointer font-black text-white shadow-xs text-[10px]" style="background:var(--color-primary)">Rp</button>
                                    <button onclick="window.posSetDiscountType('percent')" class="pos-disc-type-pct px-2.5 py-0.5 rounded-md transition-all cursor-pointer font-bold text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 text-[10px]">%</button>
                                </div>
                            </div>
                            <div class="flex items-center gap-2">
                                <div class="flex-1 relative">
                                    <span class="pos-disc-prefix absolute left-2.5 top-1/2 -translate-y-1/2 text-[10px] font-black" style="color:var(--color-primary)">Rp</span>
                                    <input type="number" min="0" placeholder="0" class="pos-disc-val-input w-full border border-slate-200 dark:border-slate-700 rounded-lg pl-8 pr-2.5 py-1 text-right text-xs font-mono font-bold bg-white dark:bg-slate-800 focus:outline-none focus:border-[var(--color-primary)] transition-all" oninput="window.posSetDiscountVal(this.value)">
                                </div>
                                <div class="pos-disc-preview-target hidden text-[10px] font-black text-rose-500 whitespace-nowrap min-w-[70px] text-right"></div>
                            </div>
                            <div class="pos-disc-chips-target flex gap-1 overflow-x-auto hide-scrollbar pt-0.5"></div>
                        </div>
                    </div>
                    <div class="flex justify-between items-center pt-2.5 border-t border-slate-200/80 dark:border-slate-800">
                        <div>
                            <p class="text-[9px] uppercase tracking-wider font-bold text-slate-400">Total Akhir</p>
                            <p class="pos-total-target text-2xl font-black font-mono tracking-tight" style="color:var(--color-primary)">Rp 0</p>
                        </div>
                        <span class="inline-flex items-center gap-1.5 text-[10px] font-bold px-2.5 py-1 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/25">
                            <span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> Siap Bayar
                        </span>
                    </div>
                    <button onclick="window.openPayModal()" class="pos-pay-btn-target w-full py-3.5 rounded-2xl text-white font-black text-sm shadow-xl disabled:opacity-40 disabled:cursor-not-allowed active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer hover:brightness-105" style="background:linear-gradient(135deg, var(--color-primary-light,#e1b858) 0%, var(--color-primary,#c59b27) 50%, var(--color-primary-dark,#a87f1b) 100%);box-shadow:0 4px 14px rgba(var(--color-primary-rgb),0.35)">
                        <span class="pos-keycap-on-btn">F4</span>
                        <i class="fa-solid fa-cash-register"></i>
                        <span class="btn-text">PROSES PEMBAYARAN</span>
                    </button>
                </div>
            </div>
        </div>

        <!-- FLOATING CART BAR (Khusus Mobile < lg saat keranjang ada isi with safe-area) -->
        <div id="pos-mobile-floating-bar" class="lg:hidden fixed bottom-[max(0.75rem,env(safe-area-inset-bottom))] left-3 right-3 z-40 transition-all duration-300 transform translate-y-32 opacity-0 pointer-events-none">
            <div class="backdrop-blur-xl bg-slate-900/95 dark:bg-slate-950/95 text-white p-3 rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.35)] flex items-center justify-between border border-white/15 dark:border-white/10 cursor-pointer active:scale-[0.99] transition-all" onclick="window.openPOSCartDrawer()">
                <div class="flex items-center gap-2.5">
                    <div class="relative w-10 h-10 rounded-xl flex items-center justify-center text-white text-sm font-bold shadow-md shrink-0" style="background:linear-gradient(135deg, var(--color-primary-light,#34d399), var(--color-primary,#10b981))">
                        <i class="fa-solid fa-cart-shopping"></i>
                        <span class="pos-item-count-target absolute -top-1.5 -right-1.5 min-w-5 h-5 px-1 rounded-full bg-rose-500 text-white text-[9px] font-black flex items-center justify-center border-2 border-slate-900 shadow-xs">0</span>
                    </div>
                    <div>
                        <div class="flex items-center gap-1.5">
                            <span class="text-[11px] font-bold text-slate-300">Total Transaksi</span>
                        </div>
                        <p class="pos-total-target text-sm font-black text-emerald-400 dark:text-emerald-300">Rp 0</p>
                    </div>
                </div>
                <button onclick="event.stopPropagation(); window.openPOSCartDrawer();" class="px-4 py-2.5 rounded-xl font-black text-xs uppercase tracking-wider text-white shadow-lg active:scale-95 transition-all flex items-center gap-1.5 shrink-0" style="background:linear-gradient(135deg, var(--color-primary-light,#34d399), var(--color-primary,#10b981)); box-shadow:0 4px 14px rgba(var(--color-primary-rgb),0.35)">
                    <span>Lihat Keranjang</span>
                    <i class="fa-solid fa-chevron-up text-xs"></i>
                </button>
            </div>
        </div>

        <!-- MOBILE CART DRAWER (Full-Height Mobile Cart — Bersih Tanpa Celah Hitam) -->
        <div id="pos-mobile-cart-drawer" class="lg:hidden absolute inset-0 z-50 transition-all duration-300 opacity-0 pointer-events-none bg-white dark:bg-slate-900 flex flex-col">
            <div id="pos-mobile-cart-sheet" class="w-full h-full bg-white dark:bg-slate-900 flex flex-col transition-transform duration-300 transform translate-y-full overflow-hidden">
                <!-- Header Drawer Mobile dengan Safe-Area Inset Proteksi -->
                <div class="pos-mobile-cart-header border-b border-slate-100 dark:border-slate-800 flex items-center justify-between shrink-0 bg-slate-50/90 dark:bg-slate-800/80">
                    <div class="flex items-center gap-2 shrink-0">
                        <div class="w-7 h-7 rounded-lg flex items-center justify-center text-xs text-white shrink-0 shadow-xs" style="background:var(--color-primary)"><i class="fa-solid fa-cart-shopping"></i></div>
                        <h3 class="text-xs font-black uppercase tracking-tight text-slate-800 dark:text-white whitespace-nowrap leading-none">
                            Keranjang (<span class="pos-item-count-target">0</span>)
                        </h3>
                    </div>
                    <div class="flex items-center gap-1.5 shrink-0">
                        <button onclick="window.posHoldCurrentCart()" class="pos-hold-btn-target text-[10px] font-bold text-slate-700 dark:text-slate-200 bg-white hover:bg-slate-100 dark:bg-slate-800 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 px-2 py-1 rounded-lg transition-all flex items-center gap-1 whitespace-nowrap cursor-pointer active:scale-95 shadow-2xs" title="Tahan transaksi sementara (F6)">
                            <i class="fa-solid fa-pause text-amber-500 text-[9px]"></i><span>Tahan</span>
                        </button>
                        <button onclick="window.posClearCart()" class="text-[10px] font-bold text-slate-700 dark:text-slate-200 bg-white hover:bg-slate-100 dark:bg-slate-800 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 px-2 py-1 rounded-lg transition-all flex items-center gap-1 whitespace-nowrap cursor-pointer active:scale-95 shadow-2xs" title="Kosongkan keranjang">
                            <i class="fa-solid fa-trash-can text-rose-500 text-[9px]"></i><span>Kosongkan</span>
                        </button>
                        <button onclick="window.closePOSCartDrawer()" class="w-7 h-7 rounded-lg bg-white hover:bg-slate-100 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-500 hover:text-slate-800 dark:hover:text-white border border-slate-200 dark:border-slate-700 text-xs font-bold flex items-center justify-center transition-all cursor-pointer shadow-2xs" title="Tutup Keranjang">
                            <i class="fa-solid fa-xmark text-[11px]"></i>
                        </button>
                    </div>
                </div>

                <!-- Items Container -->
                <div class="pos-cart-items-target flex-1 overflow-y-auto p-3 space-y-2"></div>

                <!-- Footer Summary & Pay -->
                <div class="p-3.5 pb-[calc(1rem+env(safe-area-inset-bottom))] border-t border-slate-100 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-950/80 space-y-2 shrink-0">
                    <!-- Breakdown Ringkasan & Diskon Mobile (Hanya muncul saat keranjang ada isi agar bebas sesak saat kosong) -->
                    <div class="pos-cart-breakdown space-y-2" style="display:none">
                        <div class="flex justify-between text-xs text-slate-500 font-medium">
                            <span>Subtotal Item</span>
                            <span class="pos-subtotal-target font-bold text-slate-700 dark:text-slate-200">Rp 0</span>
                        </div>
                        <div class="pos-tax-breakdown-row flex justify-between text-xs font-medium" style="display:none">
                            <span class="pos-tax-label-target text-slate-500">PPN (11%)</span>
                            <span class="pos-tax-amt-target font-bold font-mono text-amber-600 dark:text-amber-400">Rp 0</span>
                        </div>
                        <div class="pos-hpp-margin-row flex justify-between text-xs text-slate-500 font-medium" style="display:none">
                            <span class="flex items-center gap-1"><i class="fa-solid fa-coins text-amber-500 text-[10px]"></i> Total Modal (HPP)</span>
                            <span class="pos-total-hpp-target font-bold text-amber-600 dark:text-amber-400">Rp 0</span>
                        </div>
                        <div class="pos-hpp-margin-row flex justify-between text-xs text-slate-500 font-medium" style="display:none">
                            <span class="flex items-center gap-1"><i class="fa-solid fa-arrow-trend-up text-emerald-500 text-[10px]"></i> Estimasi Laba</span>
                            <span class="pos-total-margin-target font-bold text-emerald-600 dark:text-emerald-400">Rp 0</span>
                        </div>
                        <!-- Smart Diskon Transaksi Kasir (Rp / %) di Mobile Drawer -->
                        <div class="space-y-1.5 p-2 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200/80 dark:border-slate-700/60 text-xs transition-colors" style="border-color:rgba(var(--color-primary-rgb),0.25)">
                            <div class="flex items-center justify-between">
                                <span class="text-slate-700 dark:text-slate-200 font-bold flex items-center gap-1.5">
                                    <div class="w-5 h-5 rounded-md flex items-center justify-center text-[10px] text-white shrink-0 shadow-2xs" style="background:var(--color-primary)">
                                        <i class="fa-solid fa-tags"></i>
                                    </div>
                                    <span>Diskon Transaksi</span>
                                </span>
                                <div class="flex items-center bg-slate-200/80 dark:bg-slate-700/80 rounded-lg p-0.5 text-[10px]">
                                    <button onclick="window.posSetDiscountType('rp')" class="pos-disc-type-rp px-2.5 py-0.5 rounded-md transition-all cursor-pointer font-black text-white shadow-xs text-[10px]" style="background:var(--color-primary)">Rp</button>
                                    <button onclick="window.posSetDiscountType('percent')" class="pos-disc-type-pct px-2.5 py-0.5 rounded-md transition-all cursor-pointer font-bold text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 text-[10px]">%</button>
                                </div>
                            </div>
                            <div class="flex items-center gap-2">
                                <div class="flex-1 relative">
                                    <span class="pos-disc-prefix absolute left-2.5 top-1/2 -translate-y-1/2 text-[10px] font-black" style="color:var(--color-primary)">Rp</span>
                                    <input type="number" min="0" placeholder="0" class="pos-disc-val-input w-full border border-slate-200 dark:border-slate-700 rounded-lg pl-8 pr-2.5 py-1 text-right text-xs font-mono font-bold bg-white dark:bg-slate-800 focus:outline-none focus:border-[var(--color-primary)] transition-all" oninput="window.posSetDiscountVal(this.value)">
                                </div>
                                <div class="pos-disc-preview-target hidden text-[10px] font-black text-rose-500 whitespace-nowrap min-w-[70px] text-right"></div>
                            </div>
                            <div class="pos-disc-chips-target flex gap-1 overflow-x-auto hide-scrollbar pt-0.5"></div>
                        </div>
                    </div>
                    <div class="flex justify-between items-center pt-1.5 border-t border-slate-200/80 dark:border-slate-800">
                        <span class="text-xs font-black uppercase tracking-wider text-slate-700 dark:text-white">Total Tagihan</span>
                        <span class="pos-total-target text-base sm:text-lg font-black font-mono" style="color:var(--color-primary)">Rp 0</span>
                    </div>
                    <button onclick="window.closePOSCartDrawer(); window.openPayModal();" class="pos-pay-btn-target w-full py-3.5 rounded-2xl text-white font-black text-xs sm:text-sm shadow-xl disabled:opacity-40 disabled:cursor-not-allowed active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer hover:brightness-105" style="background:linear-gradient(135deg, var(--color-primary-light,#e1b858) 0%, var(--color-primary,#c59b27) 50%, var(--color-primary-dark,#a87f1b) 100%);box-shadow:0 4px 14px rgba(var(--color-primary-rgb),0.35)">
                        <span class="pos-keycap-on-btn">F4</span>
                        <i class="fa-solid fa-cash-register"></i>
                        <span class="btn-text">LANJUT KE PEMBAYARAN</span>
                    </button>
                </div>
            </div>
        </div>
    </div>
    `},Ns=()=>{try{ue="",xe="",Pe="",A=[],de=0;const e=p("view-pos-cashier");if(!e)return;const t=p("admin-content"),a=p("view-admin");t&&a?.classList.contains("admin-pos-mode")&&(t.innerHTML="",a.classList.remove("admin-pos-mode")),e.innerHTML=Rs({isStorefront:!0}),X(),Q(),Ee(),ft(),vt(),he(),ks(),gs(),De(),_s(),typeof $e=="function"?$e().then(s=>{(!s||s.status!=="open")&&oe()}).catch(()=>{Fe()||oe()}):setTimeout(()=>{Fe()||oe()},350)}catch(e){console.error("Gagal render POS Storefront:",e)}},Es=()=>{try{ue="",xe="",Pe="";const e=p("view-admin");e&&e.classList.add("admin-pos-mode");const t=p("view-pos-cashier");if(t&&(t.innerHTML=""),!p("admin-content"))return;Qs("admin-content",`
            <div class="h-full w-full flex flex-col overflow-hidden rounded-2xl sm:rounded-3xl border border-slate-200/90 dark:border-slate-800 shadow-md bg-white dark:bg-slate-900 min-h-0">
                ${Rs({isStorefront:!1})}
            </div>
        `),X(),Q(),Ee(),ft(),vt(),he(),ks(),gs(),De(),_s(),typeof $e=="function"?$e().then(s=>{(!s||s.status!=="open")&&oe()}).catch(()=>{Fe()||oe()}):setTimeout(()=>{Fe()||oe()},350)}catch(e){console.error("Gagal render POS Admin:",e);const t=p("admin-content");t&&(t.innerHTML=`
                <div class="h-full w-full flex flex-col items-center justify-center p-6 text-center">
                    <i class="fa-solid fa-triangle-exclamation text-4xl text-amber-500 mb-3"></i>
                    <h3 class="text-base font-bold text-slate-800 dark:text-white">Gagal Membuka Terminal POS</h3>
                    <p class="text-xs text-slate-500 mt-1 max-w-sm">Terjadi kendala saat memuat terminal. Silakan coba muat ulang.</p>
                    <button onclick="window.renderPOS()" class="mt-4 px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white rounded-xl text-xs font-bold transition-all shadow-md">
                        <i class="fa-solid fa-arrows-rotate mr-1.5"></i>Muat Ulang Terminal
                    </button>
                </div>
            `)}},_s=()=>{window.setPOSViewMode=ia,window.posAddToCart=jt,window.posAddToCartQty=vs,window.addToCartPOSWithVariant=Ht,window.posUpdateQty=ys,window.posSetQty=Ss,window.posFormatQty=V,window.posFQty=lt,window.posSetItemDisc=Ps,window.togglePOSItemDiscInput=bs,window.posRemoveItem=Bt,window.posClearCart=Ms,window.openPayModal=xa,window.closePayModal=_t,window.getPOSCart=()=>A,window.getCartTotalHpp=ke,window.setPosCustomerType=Fs,window.setPosPayMethod=ha,window.updatePosChange=ga,window.posSetQuickCash=wa,window.ensureCustomersLoaded=De,window.ensureBanksLoaded=ht,window.lookupPosMember=wt,window.debouncedLookupPosMember=ya,window.selectPosMember=ka,window.resetPosMember=va,window.processPOSTx=js,window.setPosPointsRedeemed=Ls,window.selectPosReward=Is,window.deselectPosReward=Ds,window.posMemberPointsDiscount=Oe,window.getMaxRedeemablePoints=Lt,window.getPointValue=mt,window.printPOSReceipt=Hs,window.previewPOSReceiptThenPrint=kt,window.posSetGlobalDisc=e=>{ct(e)},window.posSetDiscountType=Ca,window.posSetDiscountVal=ct,window.posApplyQuickDiscount=Aa,window.openPOSCameraScanner=Kt,window.closePOSCameraScanner=Le,window.togglePOSScannerFacing=Oa,window.togglePOSScannerTorch=Fa,window.togglePOSScannerMode=La,window.posProcessManualBarcode=Ia,window.posSearchScannedCode=Da,window.executePOSPrintDirect=Sa,window.getActiveShift=ee,window.isShiftActive=Fe,window.syncActiveShiftFromCloud=$e,window.openPOSOpenShiftModal=oe,window.closePOSOpenShiftModal=Ne,window.openPOSShiftModal=ce,window.openPOSShiftSummaryModal=ce,window.closePOSShiftSummaryModal=ut,window.openPOSCloseShiftModal=sa,window.closePOSCloseShiftModal=Ze,window.renderShiftHeaderBadge=ft,window.printShiftSettlementReceipt=ra,window.executeShiftPrintDirect=oa,window.posCatFilter=e=>{xe=e,Pe="",ze=1,X()},window.posSubCatFilter=e=>{Pe=e,ze=1,X()},window.posSearchFn=qt,window.posClearSearch=Ma,window.posLoadMoreProducts=Ta,window.posSyncOfflineTransactions=dt,window.renderOfflineQueueBadge=he,window.initPOSNetworkMonitoring=vt,window.getOfflineTxQueue=_e,window.posRenderCatalog=X,window.posRenderCart=Q,window.refreshPOSCatalog=()=>{try{X()}catch(e){console.warn("refreshPOSCatalog error:",e)}},window.openPOSCartDrawer=ba,window.closePOSCartDrawer=tt,window.playCashierBeep=Ie,window.openPOSHistory=()=>{typeof window.openAdminTab=="function"?window.openAdminTab("orders"):typeof window.showToast=="function"&&window.showToast("Semua transaksi kasir terpusat di menu Pesanan CMS Admin")},window.destroyBarcodeListener=It,window.playCashierChime=bt,window.posHoldCurrentCart=Nt,window.closePOSHoldPrompt=Et,window.posConfirmHoldCart=la,window.openPOSHeldModal=xt,window.closePOSHeldModal=et,window.posRecallHeldCart=da,window.posHoldCurrentAndRecall=pa,window.posOverwriteAndRecall=ua,window.posDeleteHeldCart=fa,window.posExecuteDeleteHeld=ma,window.renderHeldBadges=Ee},Ca=e=>{Z=e==="percent"?"percent":"rp",de=ie(),Q()},ct=e=>{const t=Math.max(0,parseFloat(e)||0),a=ke(),s=ne(),r=a>0?Math.max(0,s-a):s;if(Z==="percent"){const o=Math.min(100,t),n=Math.round(s*o/100);if(a>0&&n>r){const d=s>0?Math.floor(r/s*100):0,l=re()?`Diskon ${o}% ditolak karena melebihi batas modal toko (Total HPP ${g(a)})! Diskon maksimal: ${d}% (${g(r)})`:`Diskon ${o}% ditolak! Persentase diskon melebihi batas maksimum transaksi yang diizinkan sistem.`;y(l,"warning"),G=d,de=Math.round(s*d/100),Q(),typeof window.triggerHaptic=="function"&&window.triggerHaptic("heavy");return}G=o,de=n}else{const o=t;if(a>0&&o>r){const n=re()?`Diskon ditolak! Total transaksi tidak boleh di bawah harga modal toko (Total HPP ${g(a)}). Maksimal diskon: ${g(r)}`:"Diskon ditolak! Nominal diskon melebihi batas maksimum transaksi yang diizinkan sistem.";y(n,"warning"),G=r,de=r,Q(),typeof window.triggerHaptic=="function"&&window.triggerHaptic("heavy");return}G=o,de=o}Q()},Aa=(e,t)=>{t&&(Z=t),ct(e),Ie()},Kt=async()=>{if(p("pos-camera-scanner-modal"))return;typeof window.pushModalHistory=="function"&&window.pushModalHistory("posCameraScanner"),document.body.insertAdjacentHTML("beforeend",`
    <div id="pos-camera-scanner-modal" class="fixed inset-0 z-[10010] flex items-center justify-center p-3 sm:p-4" style="background:rgba(15,23,42,0.9)">
        <div class="bg-slate-900 text-white rounded-3xl shadow-2xl w-full max-w-md border border-slate-700/80 overflow-hidden flex flex-col max-h-[92vh]">
            <!-- Modal Header -->
            <div class="p-3.5 sm:p-4 border-b border-slate-800 flex items-center justify-between bg-slate-950/60 shrink-0">
                <div class="flex items-center gap-2 min-w-0">
                    <div class="w-8 h-8 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-sm font-bold shadow-inner">
                        <i class="fa-solid fa-camera"></i>
                    </div>
                    <div>
                        <h3 class="font-black text-xs sm:text-sm text-white leading-tight">Pemindai Barcode Kamera</h3>
                        <p class="text-[10px] text-slate-400">Arahkan kamera ke barcode / QR produk</p>
                    </div>
                </div>
                <div class="flex items-center gap-1.5 shrink-0">
                    <!-- Toggle Torch (Flash) -->
                    <button id="pos-scanner-torch-btn" onclick="window.togglePOSScannerTorch()" class="w-8 h-8 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs flex items-center justify-center transition-all cursor-pointer" title="Lampu Flash / Senter">
                        <i class="fa-solid fa-bolt"></i>
                    </button>
                    <!-- Switch Camera -->
                    <button onclick="window.togglePOSScannerFacing()" class="w-8 h-8 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs flex items-center justify-center transition-all cursor-pointer" title="Putar Kamera">
                        <i class="fa-solid fa-camera-rotate"></i>
                    </button>
                    <!-- Close -->
                    <button onclick="window.closePOSCameraScanner()" class="w-8 h-8 rounded-xl bg-slate-800 hover:bg-rose-900/50 text-slate-400 hover:text-rose-400 text-base flex items-center justify-center transition-all leading-none cursor-pointer">×</button>
                </div>
            </div>

            <!-- Viewport Kamera -->
            <div class="relative w-full bg-black flex items-center justify-center overflow-hidden aspect-[4/3] sm:h-72">
                <video id="pos-camera-video" playsinline autoplay muted class="w-full h-full object-cover"></video>
                
                <!-- Reticle Target Aiming Box -->
                <div id="pos-scanner-reticle" class="absolute w-[72%] max-w-[260px] aspect-[1.3/1] border-2 border-emerald-400/90 rounded-2xl shadow-[0_0_0_9999px_rgba(15,23,42,0.55)] pointer-events-none transition-all duration-200">
                    <!-- Corner Brackets -->
                    <span class="absolute -top-1 -left-1 w-4 h-4 border-t-4 border-l-4 border-emerald-400 rounded-tl-lg"></span>
                    <span class="absolute -top-1 -right-1 w-4 h-4 border-t-4 border-r-4 border-emerald-400 rounded-tr-lg"></span>
                    <span class="absolute -bottom-1 -left-1 w-4 h-4 border-b-4 border-l-4 border-emerald-400 rounded-bl-lg"></span>
                    <span class="absolute -bottom-1 -right-1 w-4 h-4 border-b-4 border-r-4 border-emerald-400 rounded-br-lg"></span>
                    
                    <!-- Laser Scanline Animation -->
                    <div class="pos-scanline"></div>
                </div>

                <!-- Floating Feedback Pill -->
                <div id="pos-scanner-status-pill" class="absolute bottom-3 px-3 py-1 rounded-full bg-slate-900 border border-slate-700 text-[10px] font-bold text-slate-300 flex items-center gap-1.5 shadow-md">
                    <span class="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                    <span>Menunggu barcode...</span>
                </div>
            </div>

            <!-- Action Strip & Options -->
            <div class="p-3 bg-slate-950/80 border-t border-slate-800 space-y-2.5 shrink-0">
                <!-- Mode Continuous vs Single -->
                <div class="flex items-center justify-between text-xs px-1">
                    <span class="text-slate-400 text-[11px] font-medium flex items-center gap-1.5">
                        <i class="fa-solid fa-repeat text-emerald-400 text-xs"></i>
                        Mode Pemindaian:
                    </span>
                    <button onclick="window.togglePOSScannerMode()" id="pos-scanner-mode-btn" class="px-2.5 py-1 rounded-lg bg-emerald-950/60 border border-emerald-600/60 text-emerald-400 text-[10px] font-black tracking-wider uppercase transition-all cursor-pointer">
                        Terus-menerus
                    </button>
                </div>

                <!-- Fallback Input Manual Barcode -->
                <div class="flex items-center gap-1.5">
                    <div class="relative flex-1">
                        <i class="fa-solid fa-barcode absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 text-xs"></i>
                        <input id="pos-manual-barcode-input" type="text" placeholder="Atau ketik/scan nomor barcode..."
                            class="w-full pl-8 pr-3 py-2 rounded-xl border border-slate-700 bg-slate-800 text-xs font-mono font-bold text-white placeholder-slate-500 focus:outline-none focus:border-[var(--color-primary)] transition-all"
                            onkeydown="if(event.key==='Enter') window.posProcessManualBarcode(this.value)">
                    </div>
                    <button onclick="window.posProcessManualBarcode(document.getElementById('pos-manual-barcode-input')?.value)"
                        class="px-3.5 py-2 rounded-xl text-white text-xs font-bold transition-all active:scale-95 shadow-md cursor-pointer hover:brightness-105" style="background:var(--color-primary)">
                        Tambah
                    </button>
                </div>

                <!-- Last Scanned Banner -->
                <div id="pos-last-scanned-banner" class="hidden p-2 rounded-xl bg-emerald-950/40 border border-emerald-800/60 text-[11px] text-emerald-300 flex items-center justify-between">
                    <div class="flex items-center gap-1.5 min-w-0">
                        <i class="fa-solid fa-circle-check text-emerald-400 shrink-0"></i>
                        <span id="pos-last-scanned-text" class="truncate font-bold">-</span>
                    </div>
                    <span id="pos-last-scanned-price" class="font-black text-emerald-400 shrink-0 ml-2">-</span>
                </div>
            </div>
        </div>
    </div>`),await qs()},qs=async()=>{const e=p("pos-camera-video");if(e)try{const t={video:{facingMode:{ideal:Jt},width:{ideal:1280},height:{ideal:720}},audio:!1},a=await navigator.mediaDevices.getUserMedia(t);Re=a,e.srcObject=a,await e.play();const s=a.getVideoTracks();if(s.length>0){Ae=s[0];const r=Ae.getCapabilities?Ae.getCapabilities():{},o=p("pos-scanner-torch-btn");o&&(r.torch?o.classList.remove("hidden"):o.classList.add("opacity-40"))}if(typeof window.BarcodeDetector<"u")try{St=new BarcodeDetector({formats:["ean_13","ean_8","upc_a","upc_e","code_128","code_39","code_93","qr_code","data_matrix"]})}catch{St=null}Ue&&clearInterval(Ue),Ue=setInterval(async()=>{if(!(!St||!e||e.readyState<2))try{const r=await St.detect(e);if(r&&r.length>0){const o=r[0].rawValue?.trim();o&&Ks(o)}}catch{}},180)}catch(t){console.warn("[POS Scanner] Gagal akses kamera:",t);const a=p("pos-scanner-status-pill");a&&(a.innerHTML='<span class="text-rose-400 font-bold"><i class="fa-solid fa-triangle-exclamation mr-1"></i>Kamera tidak dapat diakses</span>'),y("Izin kamera ditolak atau kamera sedang digunakan aplikasi lain.","warning")}},Ks=e=>{const t=Date.now();if(e===Ka&&t-Va<1800)return;Ka=e,Va=t;const a=Dt(e),s=p("pos-scanner-reticle"),r=p("pos-scanner-status-pill"),o=p("pos-last-scanned-banner"),n=p("pos-last-scanned-text"),d=p("pos-last-scanned-price");if(a){s&&(s.classList.add("border-emerald-300","scale-105","bg-emerald-500/20"),setTimeout(()=>{s.classList.remove("border-emerald-300","scale-105","bg-emerald-500/20")},300));const l=a.product;let c=!1,i=l.name,u=parseFloat(l.price)||0;if(a.isVariantMatch&&a.variant)i=`${l.name} — ${a.variant.name}`,u=parseFloat(a.variant.price)||0,c=Ht(l.id,a.variant.name,u,a.variantIdx,1);else{if(l.variants&&l.variants.length>0){r&&(r.innerHTML='<span class="text-amber-300 font-bold">Buka pilihan varian...</span>'),Le(),fs().then(()=>{typeof window.openPOSVariantSheet=="function"&&window.openPOSVariantSheet(l.id)});return}c=jt(l.id)}c?(o&&n&&d&&(n.textContent=i,d.textContent=g(u),o.classList.remove("hidden")),r&&(r.innerHTML=`<span class="text-emerald-300 font-black"><i class="fa-solid fa-check mr-1"></i>${b(i)} (+1)</span>`,setTimeout(()=>{r&&(r.innerHTML='<span class="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span><span>Menunggu barcode...</span>')},1500)),Tt||(Le(),y(`Ditambahkan: ${i}`,"success"))):r&&(r.innerHTML=`<span class="text-rose-400 font-bold"><i class="fa-solid fa-ban mr-1"></i>Stok "${b(i)}" Habis</span>`,setTimeout(()=>{r&&(r.innerHTML='<span class="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span><span>Menunggu barcode...</span>')},2e3))}else s&&(s.classList.add("border-rose-500","bg-rose-500/20"),setTimeout(()=>{s.classList.remove("border-rose-500","bg-rose-500/20")},400)),r&&(r.innerHTML=`<span class="text-rose-400 font-bold"><i class="fa-solid fa-xmark mr-1"></i>Barcode "${e}" tidak ditemukan</span>`)},Le=(e=!1)=>{if(Ue&&(clearInterval(Ue),Ue=null),Re){try{Re.getTracks().forEach(a=>a.stop())}catch{}Re=null}Ae=null,rt=!1;const t=p("pos-camera-scanner-modal");t&&(!e&&typeof window.requestCloseModal=="function"?window.requestCloseModal("posCameraScanner",!1,()=>t.remove()):t.remove())},Fa=async()=>{if(Ae)try{if(!(Ae.getCapabilities?Ae.getCapabilities():{}).torch){y("Lampu senter (torch) tidak didukung kamera ini.");return}rt=!rt,await Ae.applyConstraints({advanced:[{torch:rt}]});const t=p("pos-scanner-torch-btn");t&&(rt?(t.classList.add("bg-amber-500","text-white"),t.classList.remove("bg-slate-800","text-slate-300")):(t.classList.remove("bg-amber-500","text-white"),t.classList.add("bg-slate-800","text-slate-300")))}catch(e){console.warn("Gagal toggle torch:",e)}},Oa=async()=>{Jt=Jt==="environment"?"user":"environment",Re&&(Re.getTracks().forEach(e=>e.stop()),Re=null),await qs()},La=()=>{Tt=!Tt;const e=p("pos-scanner-mode-btn");e&&(Tt?(e.textContent="Terus-menerus",e.className="px-2.5 py-1 rounded-lg bg-emerald-950/60 border border-emerald-600/60 text-emerald-400 text-[10px] font-black tracking-wider uppercase transition-all cursor-pointer"):(e.textContent="Scan Sekali",e.className="px-2.5 py-1 rounded-lg bg-slate-800 border border-slate-700 text-slate-300 text-[10px] font-black tracking-wider uppercase transition-all cursor-pointer"))},Ia=e=>{if(!e||!e.trim())return;Ks(e.trim());const t=p("pos-manual-barcode-input");t&&(t.value="")},Da=e=>{Le();const t=p("pos-search-input");t&&(t.value=e,ue=e,X())};window.findProductOrVariantByBarcode=Dt;window.setPOSViewMode=ia;window.renderPOSStorefront=Ns;window.renderPOS=Es;window.destroyBarcodeListener=It;window.openPOSCartDrawer=ba;window.closePOSCartDrawer=tt;window.posSetQuickCash=wa;window.playCashierBeep=Ie;window.playCashierChime=bt;window.posHoldCurrentCart=Nt;window.closePOSHoldPrompt=Et;window.posConfirmHoldCart=la;window.openPOSHeldModal=xt;window.closePOSHeldModal=et;window.posRecallHeldCart=da;window.posHoldCurrentAndRecall=pa;window.posOverwriteAndRecall=ua;window.posDeleteHeldCart=fa;window.posExecuteDeleteHeld=ma;window.renderHeldBadges=Ee;window.ensureCustomersLoaded=De;window.ensureBanksLoaded=ht;window.lookupPosMember=wt;window.debouncedLookupPosMember=ya;window.selectPosMember=ka;window.resetPosMember=va;window.posSetDiscountType=Ca;window.posSetDiscountVal=ct;window.posApplyQuickDiscount=Aa;window.openPOSCameraScanner=Kt;window.closePOSCameraScanner=Le;window.togglePOSScannerFacing=Oa;window.togglePOSScannerTorch=Fa;window.togglePOSScannerMode=La;window.posProcessManualBarcode=Ia;window.posSearchScannedCode=Da;window.executePOSPrintDirect=Sa;window.previewPOSReceiptThenPrint=kt;window.reprintLastPOSReceipt=Pa;window.getActiveShift=ee;window.isShiftActive=Fe;window.syncActiveShiftFromCloud=$e;window.openPOSOpenShiftModal=oe;window.closePOSOpenShiftModal=Ne;window.openPOSShiftModal=ce;window.openPOSShiftSummaryModal=ce;window.closePOSShiftSummaryModal=ut;window.openPOSCloseShiftModal=sa;window.closePOSCloseShiftModal=Ze;window.renderShiftHeaderBadge=ft;window.printShiftSettlementReceipt=ra;window.executeShiftPrintDirect=oa;window.posSubCatFilter=e=>{Pe=e,X()};window.getPOSCart=()=>A;window.posSearchFn=qt;window.posClearSearch=Ma;window.posLoadMoreProducts=Ta;window.posSyncOfflineTransactions=dt;window.renderOfflineQueueBadge=he;window.initPOSNetworkMonitoring=vt;window.getOfflineTxQueue=_e;const Fr=Object.freeze(Object.defineProperty({__proto__:null,addToCart:jt,addToCartWithVariant:Ht,applyMemberToPos:Ft,clearCart:Ms,closePOSCameraScanner:Le,closePOSCartDrawer:tt,closePOSHeldModal:et,closePOSHoldPrompt:Et,closePOSReceiptFallbackModal:Bs,closePayModal:_t,debouncedLookupPosMember:ya,deselectPosReward:Ds,destroyBarcodeListener:It,enqueueOfflineTx:Yt,ensureBanksLoaded:ht,ensureCustomersLoaded:De,executePOSPrintDirect:Sa,findProductOrVariantByBarcode:Dt,formatCompactPoText:hs,formatQty:V,getCartTotalHpp:ke,getMaxRedeemablePoints:Lt,getOfflineTxQueue:_e,getPointValue:mt,getProductStockInfo:Xe,initPOSNetworkMonitoring:vt,lookupPosMember:wt,openPOSCameraScanner:Kt,openPOSCartDrawer:ba,openPOSHeldModal:xt,openPayModal:xa,playCashierBeep:Ie,playCashierChime:bt,posAddToCartQty:vs,posApplyQuickDiscount:Aa,posClearSearch:Ma,posConfirmHoldCart:la,posDeleteHeldCart:fa,posDiscountAmount:ie,posExecuteDeleteHeld:ma,posHoldCurrentAndRecall:pa,posHoldCurrentCart:Nt,posLoadMoreProducts:Ta,posMemberPointsDiscount:Oe,posOnDpInput:Cs,posOverwriteAndRecall:ua,posProcessManualBarcode:Ia,posRecallHeldCart:da,posSearchFn:qt,posSearchScannedCode:Da,posSelectPaylaterTenor:$s,posSetDiscountType:Ca,posSetDiscountVal:ct,posSetQuickCash:wa,posSyncOfflineTransactions:dt,posTaxInfo:se,posTogglePaylater:As,previewPOSReceiptThenPrint:kt,printPOSReceipt:Hs,processPOSTx:js,removeFromCart:Bt,renderCatalog:X,renderHeldBadges:Ee,renderOfflineQueueBadge:he,renderPOS:Es,renderPOSStorefront:Ns,renderPosMemberResult:gt,reprintLastPOSReceipt:Pa,resetPosMember:va,saveOfflineTxQueue:$a,selectPosMember:ka,selectPosReward:Is,setItemDisc:Ps,setPOSViewMode:ia,setPosCustomerType:Fs,setPosPayMethod:ha,setPosPointsRedeemed:Ls,setQty:Ss,stopClock:ws,togglePOSItemDiscInput:bs,togglePOSScannerFacing:Oa,togglePOSScannerMode:La,togglePOSScannerTorch:Fa,updateNetworkStatusUI:$t,updatePosChange:ga,updateQty:ys},Symbol.toStringTag,{value:"Module"}));export{Za as a,Sr as b,vr as c,er as d,yr as e,Cr as f,pt as g,ot as h,Ea as i,cr as j,Fr as k,Tr as l,We as n,Ar as p,Pr as r,$r as s,Mr as t};
