import{e as f,g as Pe,a as g,s as Y,c as pe,b as H,f as k,d as je,h as L,i as h,r as he,j as W,k as v,l as Q,m as le,n as F,o as Te,p as w,q as O,t as q,u as J,v as Ae,w as D,x as X,y as ne,z as ye,A as we,B as Ee}from"./module-print-DEFpDARp.js";let de="https://script.google.com/macros/s/AKfycbx3dW9rHcdoKNYjSOJ8PoH2k6fABe7XlBD9teNHsBlCBqJquq8jd4UvnfXZVsfKdFsC/exec";const Me=()=>{f("voucher-input");const r=(Pe("voucher-input")||"").toUpperCase().trim(),e=(g.vouchers||[]).find(a=>(a.code||"").toUpperCase()===r);Y("voucher-msg-container");const t=typeof window.getEffP=="function"?window.getEffP:a=>a.effectivePrice||a.price||0,s=pe.reduce((a,n)=>a+(parseFloat(t(n))||0)*(parseFloat(n.qty)||0),0);if(e){let a=!0;e.targetProduct&&e.targetProduct!==""&&(a=pe.some(n=>n&&String(n.id)===String(e.targetProduct))),e.targetProduct&&e.targetProduct!==""&&!a?(W(null),H("voucher-msg",'<i class="fa-solid fa-box mr-1"></i> Khusus Produk Tertentu!'),f("voucher-msg")&&(f("voucher-msg").className="text-sm font-bold text-rose-500 dark:text-rose-400")):e.minPurchase&&parseFloat(e.minPurchase)>0&&s<parseFloat(e.minPurchase)?(W(null),H("voucher-msg",`<i class="fa-solid fa-circle-exclamation mr-1"></i> Minimal belanja ${k(e.minPurchase)}`),f("voucher-msg")&&(f("voucher-msg").className="text-sm font-bold text-amber-500 dark:text-amber-400")):e.type&&e.type.includes("shipping")&&je.deliveryMethod!=="delivery"?(W(null),H("voucher-msg",'<i class="fa-solid fa-motorcycle mr-1"></i> Khusus pesanan dikirim kurir!'),f("voucher-msg")&&(f("voucher-msg").className="text-sm font-bold text-rose-500 dark:text-rose-400")):(W(e),H("voucher-msg",'<i class="fa-solid fa-check-circle mr-1"></i> Voucher Diterapkan!'),f("voucher-msg")&&(f("voucher-msg").className="text-sm font-bold text-[var(--color-primary)]"))}else r===""?(W(null),L("voucher-msg-container"),typeof window.rPay=="function"&&window.rPay()):(W(null),H("voucher-msg",'<i class="fa-solid fa-times-circle mr-1"></i> Kode Tidak Valid'),f("voucher-msg")&&(f("voucher-msg").className="text-sm font-bold text-rose-500 dark:text-rose-400"));typeof window.rPay=="function"&&window.rPay()},Fe=()=>{let r=document.getElementById("voucher-modal");r||(r=document.createElement("div"),r.id="voucher-modal",r.className="fixed inset-0 z-[115] bg-slate-900/80 flex items-end sm:items-center justify-center p-0 sm:p-5",r.onclick=s=>{s.target===r&&be()},document.body.appendChild(r));const e=(g.vouchers||[]).filter(s=>s.isShow!==!1&&s.isShow!=="false"),t=e.length?e.map(s=>{let a="";s.type==="percent"?a=`Diskon ${s.value}%`:s.type==="shipping_free"?a="Gratis Ongkir":s.type==="shipping_flat"?a=`Diskon Ongkir ${k(s.value)}`:a=`Potongan ${k(s.value)}`;const n=s.minPurchase&&parseFloat(s.minPurchase)>0?`Min. belanja ${k(s.minPurchase)}`:"Tanpa minimal belanja";return`
        <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/80 hover:border-[var(--color-primary)] transition-all shadow-xs">
            <div class="flex items-start gap-3.5 min-w-0">
                <div class="w-11 h-11 rounded-xl bg-[var(--color-primary)] text-white flex items-center justify-center text-lg shrink-0 shadow-sm mt-0.5">
                    <i class="fa-solid fa-ticket"></i>
                </div>
                <div class="min-w-0">
                    <div class="flex flex-wrap items-center gap-2 mb-1.5">
                        <span class="font-extrabold text-sm font-mono tracking-wider text-slate-800 dark:text-white bg-white dark:bg-slate-900 px-2.5 py-0.5 rounded-lg border border-slate-200 dark:border-slate-700 select-all">${h(s.code)}</span>
                        <span class="primary-bg text-white text-[10px] font-bold px-2 py-0.5 rounded-md uppercase whitespace-nowrap shadow-2xs">${a}</span>
                    </div>
                    <p class="text-[11px] font-medium text-slate-500 dark:text-slate-400 flex items-center gap-1.5"><i class="fa-solid fa-circle-check text-[var(--color-primary)] text-xs"></i> ${n}</p>
                </div>
            </div>
            <div class="flex items-center gap-2 shrink-0 pt-2 md:pt-0 border-t md:border-t-0 border-slate-200 dark:border-slate-700">
                <button type="button" onclick="copyVoucherCode('${h(s.code)}')" class="flex-1 md:flex-initial bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] text-xs font-bold uppercase tracking-wider px-3.5 py-2 rounded-xl transition-all active:scale-95 flex items-center justify-center gap-1.5 shadow-2xs">
                    <i class="fa-regular fa-copy"></i> Salin
                </button>
                <button type="button" onclick="useVoucherCode('${h(s.code)}')" class="flex-1 md:flex-initial primary-bg text-white text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-xl transition-all active:scale-95 flex items-center justify-center gap-1.5 shadow-sm">
                    Gunakan <i class="fa-solid fa-arrow-right text-[10px]"></i>
                </button>
            </div>
        </div>`}).join(""):`
        <div class="p-8 text-center">
            <div class="w-16 h-16 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-400 mx-auto mb-3">
                <i class="fa-solid fa-ticket text-2xl"></i>
            </div>
            <p class="text-sm font-bold text-slate-800 dark:text-white mb-1">Belum Ada Kupon Promo</p>
            <p class="text-xs text-slate-500 dark:text-slate-400">Saat ini belum ada promo aktif. Silakan cek kembali nanti!</p>
        </div>
    `;r.innerHTML=`
        <div class="bg-white dark:bg-slate-900 w-full max-w-lg rounded-t-3xl sm:rounded-2xl max-h-[85vh] flex flex-col shadow-2xl border border-slate-200 dark:border-slate-700">
            <div class="p-5 sm:p-6 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center shrink-0">
                <h3 class="font-bold text-slate-800 dark:text-white text-base flex items-center gap-2">
                    <i class="fa-solid fa-ticket text-[var(--color-primary)]"></i> Kupon &amp; Voucher Promo
                </h3>
                <button onclick="closeVoucherModal()" class="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 hover:bg-rose-100 hover:text-rose-500 flex items-center justify-center transition-all">
                    <i class="fa-solid fa-xmark"></i>
                </button>
            </div>
            <div class="p-5 sm:p-6 overflow-y-auto flex-1 space-y-3.5">
                ${t}
            </div>
        </div>`,r.style.opacity="0",r.style.display="flex",requestAnimationFrame(()=>{r.style.transition="opacity 0.25s ease",r.style.opacity="1"}),typeof window.pushModalHistory=="function"&&window.pushModalHistory("voucher")},Oe=r=>{navigator.clipboard&&navigator.clipboard.writeText?navigator.clipboard.writeText(r).then(()=>{typeof window.showToast=="function"&&window.showToast(`Kode "${r}" disalin ke clipboard!`)}).catch(()=>{typeof window.showToast=="function"&&window.showToast(`Kode Kupon: ${r}`)}):typeof window.showToast=="function"&&window.showToast(`Kode Kupon: ${r}`)},_e=r=>{be();const e=f("voucher-input");e&&(e.value=r,Me()),pe.length>0?typeof window.changeView=="function"&&window.changeView("view-checkout"):(typeof window.showToast=="function"&&window.showToast(`Kode "${r}" siap digunakan saat checkout belanja!`),typeof window.changeView=="function"&&window.changeView("view-catalog"))},be=(r=!1)=>{const e=()=>{const t=document.getElementById("voucher-modal");!t||t.style.display==="none"||(t.style.opacity="0",t.style.transition="opacity 0.25s ease",setTimeout(()=>{t.style.display="none",t.style.opacity="",t.style.transition=""},250))};typeof he=="function"?he("voucher",r,e):typeof window.requestCloseModal=="function"?window.requestCloseModal("voucher",r,e):e()};window.applyVoucher=Me;window.openVoucherModal=Fe;window.closeVoucherModal=be;window.copyVoucherCode=Oe;window.useVoucherCode=_e;const te="B7qgwFQqtYLpBqdaK69HgtCfR7s5t67p",Ue=20*1024*1024,Ge=["video/mp4","video/webm","video/quicktime","video/x-msvideo","video/3gpp"],Se=["image/jpeg","image/png","image/webp","image/gif"],He=async(r,e,t=null)=>{const s=r.files[0];if(!s)return;const a=s.type==="image/gif"||/\.gif$/i.test(s.name||""),n=a?"image/gif":s.type||"image/jpeg";if(!Se.includes(n)&&!a)return r.value="",v("Hanya file JPG, PNG, WEBP, atau GIF yang diizinkan!");const o=a?8*1024*1024:3*1024*1024,l=a?"8MB":"3MB";if(s.size>o)return r.value="",v(`Maksimal ukuran file ${l} (GIF animasi maks 8MB)!`);const d=window.GAS_UPLOAD_URL||de;if(d.includes("ISI_DENGAN"))return r.value="",v("URL Script Google belum diisi!");Q("Upload Gambar...");const x=new FileReader;x.readAsDataURL(s),x.onload=async()=>{try{const m=x.result.split(",")[1],u=s.name.replace(/[^a-zA-Z0-9.]/g,"_"),i={name:"POS_"+Date.now()+"_"+u,mimeType:n,data:m,token:te},p=await(await fetch(d,{method:"POST",body:JSON.stringify(i),headers:{"Content-Type":"text/plain;charset=utf-8"},redirect:"follow"})).text();let y;try{y=JSON.parse(p)}catch{return v("Error Server!")}if(y.status==="success"){const T=le(y.url,n),S=f(e);S&&(S.value=T,S.dispatchEvent(new Event("input",{bubbles:!0})),S.dispatchEvent(new Event("change",{bubbles:!0})),t!==null&&typeof window.uVar=="function"&&window.uVar(t,"img",T),v("Gambar diupload!"))}else v("Gagal: "+(y.message||"Error"))}catch{v("Koneksi terputus saat upload.")}finally{F(),r.value=""}},x.onerror=()=>{v("Gagal membaca file!"),F(),r.value=""}},Ke=async(r,e)=>{const t=r.files[0];if(!t)return;if(!Ge.includes(t.type))return r.value="",v("Hanya file MP4, WEBM, MOV, atau AVI yang diizinkan!");if(t.size>Ue)return r.value="",v("Video terlalu besar! Maksimal 20MB.");const s=window.GAS_UPLOAD_URL||de;if(s.includes("ISI_DENGAN"))return r.value="",v("URL Script Google belum diisi di Pengaturan!");Q("Upload Video... (harap tunggu)");const a=new FileReader;a.readAsDataURL(t),a.onload=async()=>{try{const n=a.result.split(",")[1],o=t.name.replace(/[^a-zA-Z0-9.]/g,"_"),l={name:"VID_"+Date.now()+"_"+o,mimeType:t.type,data:n,token:te},x=await(await fetch(s,{method:"POST",body:JSON.stringify(l),headers:{"Content-Type":"text/plain;charset=utf-8"},redirect:"follow"})).text();let m;try{m=JSON.parse(x)}catch{return v("Error Server GAS!")}if(m.status==="success"){const u="https://drive.google.com/file/d/"+m.fileId+"/preview",i=f(e);i&&(i.value=u,i.dispatchEvent(new Event("input",{bubbles:!0})),i.dispatchEvent(new Event("change",{bubbles:!0})),v("Video berhasil diupload ke Drive!"))}else v("Gagal upload: "+(m.message||"Error"))}catch{v("Koneksi terputus saat upload video.")}finally{F(),r.value=""}},a.onerror=()=>{v("Gagal membaca file video!"),F(),r.value=""}},Ve=async(r,e)=>{const t=r.files[0];if(!t)return;const s=t.type==="image/gif"||/\.gif$/i.test(t.name||""),a=s?"image/gif":t.type||"image/jpeg";if(!Se.includes(a)&&!s)return r.value="",v("Hanya file JPG, PNG, WEBP, atau GIF yang diizinkan!");const n=s?8*1024*1024:3*1024*1024;if(t.size>n)return r.value="",v(`Maksimal gambar ${s?"8MB (GIF)":"3MB"}!`);const o=window.GAS_UPLOAD_URL||de;if(o.includes("ISI_DENGAN"))return r.value="",v("URL Script Google belum diisi!");Q("Menyisipkan Gambar...");const l=new FileReader;l.readAsDataURL(t),l.onload=async()=>{try{const d=l.result.split(",")[1],x=t.name.replace(/[^a-zA-Z0-9.]/g,"_"),m={name:"RTE_"+Date.now()+"_"+x,mimeType:t.type,data:d,token:te},i=await(await fetch(o,{method:"POST",body:JSON.stringify(m),headers:{"Content-Type":"text/plain;charset=utf-8"},redirect:"follow"})).text();let c;try{c=JSON.parse(i)}catch{return v("Error Server!")}if(c.status==="success"){const p=le(c.url),y=f(e);y&&(y.focus(),document.execCommand("insertHTML",!1,`<br><img loading="lazy" src="${p}" style="max-width:100%; border-radius:12px; margin: 10px 0; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);" ><br>`)),v("Gambar berhasil disisipkan!")}else v("Gagal upload gambar.")}catch{v("Gagal koneksi.")}finally{F(),r.value=""}},l.onerror=()=>{v("Gagal membaca file!"),F(),r.value=""}},me=async(r,e="BUKTI")=>{if(!r)return null;const t=window.GAS_UPLOAD_URL||g&&g.config&&g.config.gasUrl||de;if(!t||t.includes("ISI_DENGAN"))return console.warn("[GAS Upload] GAS_UPLOAD_URL belum dikonfigurasi."),null;try{let s=null,a="bukti.jpg";if(typeof r=="string"?(r.startsWith("data:")?s=r.split(",")[1]:s=r,a=`${e}_${Date.now()}.jpg`):(r instanceof Blob||r instanceof File)&&(a=(r.name||"bukti.jpg").replace(/[^a-zA-Z0-9.]/g,"_"),s=await new Promise((x,m)=>{const u=new FileReader;u.onload=i=>{const c=new Image;c.onload=()=>{let{width:y,height:T}=c;(y>1200||T>1200)&&(y>T?(T=Math.round(T*1200/y),y=1200):(y=Math.round(y*1200/T),T=1200));const S=document.createElement("canvas");S.width=y,S.height=T,S.getContext("2d").drawImage(c,0,0,y,T);const B=S.toDataURL("image/jpeg",.82);x(B.split(",")[1])},c.onerror=()=>{const p=(i.target.result||"").toString();x(p.split(",")[1]||"")},c.src=i.target.result},u.onerror=m,u.readAsDataURL(r)})),!s)return null;const n={name:`${e}_${Date.now()}_${a}`,mimeType:"image/jpeg",data:s,token:te},o=await fetch(t,{method:"POST",body:JSON.stringify(n),headers:{"Content-Type":"text/plain;charset=utf-8"},redirect:"follow"});if(!o.ok)return console.warn(`[GAS Upload] HTTP error: ${o.status}`),null;const l=await o.text();let d;try{d=JSON.parse(l)}catch{return console.warn("[GAS Upload] Parse response error:",l),null}return d&&d.status==="success"&&d.url?(console.info("[GAS Upload] Sukses diunggah ke Google Drive:",d.url),le(d.url)):(console.warn("[GAS Upload] Server message:",d&&d.message),null)}catch(s){return console.warn("[GAS Upload] Upload exception:",s),null}};typeof window<"u"&&(window.GAS_SECRET_TOKEN=te,window.handleImageUpload=He,window.handleVideoUpload=Ke,window.handleRTEditorImage=Ve,window.uploadImageFileToDrive=me,window.uploadBuktiToGDrive=me);let $=null,U="bank",z=null,ee=null,ue=[];const Ie=()=>{let r=(g.payment?.qrisUrl||g.payment?.qris||g.store?.qrisUrl||g.store?.qris||g.qrisUrl||"").trim();if(!r)try{const e=JSON.parse(localStorage.getItem("freshmart_cms_data")||"{}");r=(e.payment?.qrisUrl||e.payment?.qris||e.store?.qrisUrl||e.store?.qris||"").trim()}catch{}return r?le(r):""},We=r=>{if(!r)return;const e=String(r).trim();navigator.clipboard&&navigator.clipboard.writeText?navigator.clipboard.writeText(e).then(()=>{v("Nomor rekening "+e+" berhasil disalin!","success")}).catch(()=>{prompt("Salin nomor rekening:",e)}):prompt("Salin nomor rekening:",e)},qe=(r,e=700,t=.6)=>new Promise(s=>{if(!r||!r.type.startsWith("image/"))return s(null);const a=new FileReader;a.readAsDataURL(r),a.onload=n=>{const o=new Image;o.onload=()=>{let{width:l,height:d}=o;(l>e||d>e)&&(l>d?(d=Math.round(d*e/l),l=e):(l=Math.round(l*e/d),d=e));const x=document.createElement("canvas");x.width=l,x.height=d,x.getContext("2d").drawImage(o,0,0,l,d);const u=x.toDataURL("image/jpeg",t);s(u)},o.onerror=()=>s(n.target.result),o.src=n.target.result},a.onerror=()=>s(null)}),Je=()=>{let r=f("modal-client-tempo-pay");if(!r){const e=document.createElement("div");e.id="modal-client-tempo-pay",e.onclick=t=>{t.target===e&&ie()},e.innerHTML=`
            <div id="modal-client-tempo-pay-box" class="bg-white dark:bg-slate-900 w-full sm:max-w-lg rounded-t-[2.25rem] sm:rounded-3xl max-h-[92dvh] sm:max-h-[88vh] flex flex-col shadow-2xl border border-slate-200/80 dark:border-slate-800 overflow-hidden pointer-events-auto transform translate-y-full sm:translate-y-6 transition-transform duration-300" onclick="event.stopPropagation()">
                <!-- Isi Modal dirender reaktif oleh openClientPaymentModal() -->
            </div>
        `,document.body.appendChild(e),r=e}r.className="fixed inset-0 z-[140] flex items-end sm:items-center justify-center p-0 sm:p-4 bg-slate-900/80 transition-opacity duration-300 opacity-0 pointer-events-none",r.style.zIndex="140"},oe=()=>{const r=[];Array.isArray(q)&&q.length&&r.push(...q),Array.isArray(J)&&J.length&&r.push(...J);try{const a=localStorage.getItem("freshmart_my_orders");if(a){const n=JSON.parse(a);Array.isArray(n)&&r.push(...n)}}catch{}const e=new Set,t=r.filter(a=>!a||!a.orderId||e.has(a.orderId)?!1:(e.add(a.orderId),!0)),s=(w?.phone||w?.id||"").toString().replace(/\D/g,"");return t.filter(a=>{if(!!!(a.isTempo||a.payment?.isPaylater||a.payment?.subMethod==="paylater"||a.payment?.method==="tempo")||a.status==="Batal"||a.payment?.paymentStatus==="lunas")return!1;const o=parseFloat(a.payment?.tempoBalance);if(isNaN(o)||o<=0)return!1;if(s){const l=(a.customer?.phone||a.customer?.wa||"").toString().replace(/\D/g,"");if(l&&!(l===s||l.endsWith(s)||s.endsWith(l)))return!1}return!0})},ze=async(r=null)=>{try{let e=[];try{const a=localStorage.getItem("freshmart_pending_confirmations");if(a){const n=JSON.parse(a);Array.isArray(n)&&(e=n)}}catch{}const t=(w?.phone||w?.id||"").toString().replace(/\D/g,"");let s=!1;if(t)try{const a=await O.collection("tempo_payment_confirmations").where("customerPhone","==",t).where("status","==","pending").get();if(s=!0,a.empty){e=[];try{localStorage.setItem("freshmart_pending_confirmations",JSON.stringify([]))}catch{}}else{const n=[];a.forEach(o=>n.push({id:o.id,...o.data()})),e=n;try{localStorage.setItem("freshmart_pending_confirmations",JSON.stringify(e))}catch{}}}catch(a){a?.code!=="permission-denied"&&!a?.message?.includes("permission")&&console.warn("[ClientPay] Query pending list ditolak/offline:",a?.message||a)}if(!s&&e.length>0)try{const a=[];for(const n of e){const o=n.confirmId||n.id;if(o)try{const l=await O.collection("tempo_payment_confirmations").doc(o).get();if(l.exists){const d=l.data();d.status==="pending"&&a.push({id:l.id,...d})}}catch{n.status==="pending"&&a.push(n)}}e=a;try{localStorage.setItem("freshmart_pending_confirmations",JSON.stringify(e))}catch{}}catch{}return ue=e,r?e.filter(a=>a.orderId===r):e}catch(e){return e?.code!=="permission-denied"&&!e?.message?.includes("permission")&&console.warn("[ClientPay] Gagal muat konfirmasi pending:",e),ue||[]}},Qe=async(r=null,e=null)=>{Je();const t=f("modal-client-tempo-pay"),s=f("modal-client-tempo-pay-box");if(!t||!s)return;t.classList.remove("z-[110]"),t.classList.add("z-[140]"),t.style.zIndex="140";const a=oe();if(!a.length){v("Tidak ada tagihan atau angsuran tempo aktif yang perlu dibayar.","info");return}$=(r?a.find(n=>n.orderId===r):null)||a[0],U="bank",z=null,ee=null,Ce(a,e),document.body.classList.add("overflow-hidden"),typeof window.pushModalHistory=="function"&&window.pushModalHistory("clientTempoPay"),Te(t,s),ze($.orderId).then(n=>{if(t&&!t.classList.contains("hidden")&&!t.classList.contains("opacity-0")){const o=(n||[]).filter(d=>d.orderId===$?.orderId&&d.status==="pending").reduce((d,x)=>d+(parseFloat(x.amount)||0),0),l=f("client-pay-pending-banner-wrap");l&&(o>0?(l.innerHTML=`
                    <div class="p-4 sm:p-5 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-300 dark:border-amber-800/60 flex items-start sm:items-center gap-3 text-amber-800 dark:text-amber-200 shadow-2xs">
                        <i class="fa-solid fa-hourglass-half text-amber-500 text-base shrink-0 mt-0.5 sm:mt-0"></i>
                        <div class="min-w-0 flex-1">
                            <p class="font-bold text-xs sm:text-sm">Ada Pengajuan Pembayaran Sedang Diverifikasi: <b class="font-mono text-amber-900 dark:text-amber-100">${k(o)}</b></p>
                            <p class="text-[11px] text-amber-700/80 dark:text-amber-300/80 mt-1 leading-relaxed">Admin toko sedang memeriksa mutasi rekening Anda. Limit kredit belanja Anda akan otomatis pulih segera setelah diverifikasi.</p>
                        </div>
                    </div>`,Y(l)):L(l))}}).catch(n=>{n?.code!=="permission-denied"&&!n?.message?.includes("permission")&&console.warn("[ClientPay] Background pending load error:",n)})},ie=(r=!1)=>{const e=()=>{const t=f("modal-client-tempo-pay"),s=f("modal-client-tempo-pay-box");!t||!s||Ae(t,s,()=>{t.classList.add("pointer-events-none"),s.classList.remove("pointer-events-auto"),document.querySelector('[id*="modal"]:not(.hidden):not(.pointer-events-none):not(#modal-client-tempo-pay)')||document.body.classList.remove("overflow-hidden")})};typeof window.requestCloseModal=="function"?window.requestCloseModal("clientTempoPay",r,e):e()},Ce=(r,e=null)=>{const t=f("modal-client-tempo-pay-box");if(!t)return;const s=$,a=!!(s.payment?.isPaylater||s.isPaylater||s.payment?.subMethod==="paylater"),n=Math.max(0,parseFloat(s.payment?.tempoBalance)||0),o=Array.isArray(s.payment?.paylaterSchedule)&&s.payment.paylaterSchedule.length>0?s.payment.paylaterSchedule:null,d=(s.payment?.installments||[]).reduce((b,C)=>b+(parseFloat(C.amount)||0),0);parseInt(s.payment?.paylaterMonths)||(o?o.length:s.payment?.paylaterTenor==="2m"||s.payment?.paylaterTenor);const x=a?s.payment?.paylaterTenor==="2m"?"2 Bulan":s.payment?.paylaterTenor==="3m"?"3 Bulan":"30 Hari":"Tempo Toko";let m=0,u="-",i=0,c=1,p=!1;const y=[];if(o&&o.length>0){let b=0,C=!1;o.forEach((M,G)=>{const V=M.installmentIndex||M.installmentNo||M.installmentNumber||M.month||G+1,_=parseFloat(M.pokok||M.principal)||0,N=parseFloat((M.adminFee||0)+(M.serviceFee||0))||0,Z=parseFloat(M.total||M.totalMonthly||M.totalInstallment)||_+N;b+=Z;const ae=b,j=M.dueDate||0,se=M.dueDateFormatted||M.dueDateStr||(j?new Date(j).toLocaleDateString("id-ID",{day:"numeric",month:"short",year:"numeric"}):"-");let re="upcoming",ge=0;d>=ae?re="paid":C?re="upcoming":(C=!0,re="current",c=V,u=se,i=j,p=j&&Date.now()>j,ge=Math.max(0,ae-d),m=Math.min(ge,Z)),y.push({monthIndex:V,dueStr:se,dueTime:j,pokok:_,fee:N,total:Z,statusType:re})}),C||(m=n)}else m=n,i=s.payment?.tempoDueDate||0,u=i?new Date(i).toLocaleDateString("id-ID",{day:"numeric",month:"short",year:"numeric"}):"-",p=i&&Date.now()>i;const T=e&&e>0?Math.min(n,e):m>0&&m<n?m:n,I=ue.filter(b=>b.orderId===s.orderId&&b.status==="pending").reduce((b,C)=>b+(parseFloat(C.amount)||0),0);let P=(Array.isArray(g.banks)?g.banks:[]).filter(b=>b&&(b.bankName||b.bank||b.bankAccount||b.number));P.length===0&&g.store?.bankName&&(g.store?.bankAccount||g.store?.bankNumber)&&(P=[{bankName:g.store.bankName,bankAccount:g.store.bankAccount||g.store.bankNumber,bankOwner:g.store.bankOwner||g.store.name||"Toko Putri"}]),P.length===0&&(P=[{bankName:"BCA",bankAccount:"1234567890",bankOwner:g.store?.name||"Toko Putri"}]);const A=Ie();t.innerHTML=`
        <!-- DRAG PULL MOBILE -->
        <div class="pull-indicator w-12 h-1.5 rounded-full bg-slate-300 dark:bg-slate-700 mx-auto my-2.5 sm:hidden shrink-0"></div>

        <!-- HEADER -->
        <div class="px-5 sm:px-6 pt-3.5 sm:pt-5 pb-4 border-b border-slate-100 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-900/60 flex items-center justify-between shrink-0">
            <div class="flex items-center gap-3">
                <div class="w-10 h-10 rounded-2xl flex items-center justify-center text-xs font-black text-white shrink-0 shadow-xs" style="background: var(--color-primary);">
                    <i class="fa-solid fa-file-invoice-dollar text-sm"></i>
                </div>
                <div>
                    <h3 class="font-black text-sm sm:text-base text-slate-800 dark:text-white">Pembayaran Tagihan Cicilan</h3>
                    <p class="text-[10px] text-slate-400 font-semibold">Konfirmasi Langsung &amp; Real-Time ke Toko Putri</p>
                </div>
            </div>
            <button type="button" onclick="window.closeClientPaymentModal()" class="w-8 h-8 rounded-full bg-slate-100 hover:bg-rose-100 hover:text-rose-500 dark:bg-slate-800 text-slate-500 flex items-center justify-center transition-all cursor-pointer active:scale-95" title="Tutup">
                <i class="fa-solid fa-xmark text-xs"></i>
            </button>
        </div>

        <!-- BODY SCROLLABLE DENGAN PADDING LEGA ANTI-TERTUTUP FOOTER & HIDE SCROLLBAR NATIVE -->
        <div class="p-5 sm:p-6 pb-28 sm:pb-32 overflow-y-auto flex-1 space-y-5 text-xs hide-scrollbar" style="-webkit-overflow-scrolling: touch; overscroll-behavior-y: contain; touch-action: pan-y;">
            <!-- PENDING BANNER JIKA ADA PENGAJUAN -->
            <div id="client-pay-pending-banner-wrap" class="${I>0?"block":"hidden"}">
                ${I>0?`
                <div class="p-4 sm:p-5 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-300 dark:border-amber-800/60 flex items-start sm:items-center gap-3 text-amber-800 dark:text-amber-200 shadow-2xs">
                    <i class="fa-solid fa-hourglass-half text-amber-500 text-base shrink-0 mt-0.5 sm:mt-0"></i>
                    <div class="min-w-0 flex-1">
                        <p class="font-bold text-xs sm:text-sm">Ada Pengajuan Pembayaran Sedang Diverifikasi: <b class="font-mono text-amber-900 dark:text-amber-100">${k(I)}</b></p>
                        <p class="text-[11px] text-amber-700/80 dark:text-amber-300/80 mt-1 leading-relaxed">Admin toko sedang memeriksa mutasi rekening Anda. Limit kredit belanja Anda akan otomatis pulih segera setelah diverifikasi.</p>
                    </div>
                </div>
                `:""}
            </div>

            <!-- PILIH NOTA PESANAN (JIKA LEBIH DARI 1) -->
            ${r.length>1?`
            <div class="space-y-2">
                <label class="block text-[10px] font-black uppercase tracking-wider text-slate-500 dark:text-slate-400">Pilih Nota Tagihan</label>
                <select id="client-pay-order-select" onchange="window.switchClientPaymentOrder(this.value)" class="admin-input bg-slate-50 dark:bg-slate-900 rounded-2xl font-bold cursor-pointer h-12 text-xs">
                    ${r.map(b=>`
                        <option value="${b.orderId}" ${b.orderId===s.orderId?"selected":""}>
                            Nota #${b.orderId} — Sisa: ${k(b.payment?.tempoBalance||0)} (${b.payment?.isPaylater?"PayLater":"Tempo"})
                        </option>
                    `).join("")}
                </select>
            </div>
            `:""}

            <!-- KARTU MODEL ANGSURAN: BULAN INI VS BULAN BERIKUTNYA -->
            <div class="space-y-3">
                <div class="p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-slate-50 to-slate-100/60 dark:from-slate-800/60 dark:to-slate-900/60 border border-slate-200/80 dark:border-slate-800 space-y-4 shadow-2xs">
                    <div class="flex items-center justify-between text-xs">
                        <div class="flex items-center gap-2">
                            <span class="font-mono font-bold text-slate-800 dark:text-slate-200 text-sm">Nota #${h(s.orderId)}</span>
                            <span class="px-2 py-0.5 rounded-full text-[9px] font-black uppercase tracking-wider bg-[rgba(var(--color-primary-rgb),0.12)] text-[var(--color-primary)] font-bold">
                                ${h(x)}
                            </span>
                        </div>
                        <span class="text-[11px] text-slate-500 dark:text-slate-400 font-medium">Total: ${k(s.payment?.grandTotal||s.total||n)}</span>
                    </div>

                    ${y.length>1?`
                    <!-- HIGHLIGHT UTAMA: TAGIHAN BULAN INI -->
                    <div class="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-800 text-emerald-900 dark:text-emerald-100 space-y-1.5 shadow-2xs">
                        <div class="flex items-center justify-between flex-wrap gap-1">
                            <span class="text-[10px] font-black uppercase tracking-wider text-emerald-800 dark:text-emerald-300 flex items-center gap-1.5">
                                <i class="fa-solid fa-calendar-check text-emerald-600"></i> Angsuran Bulan Ini (Termin Ke-${c} dari ${y.length})
                            </span>
                            <span class="px-2 py-0.5 rounded-md text-[9.5px] font-black font-mono ${p?"bg-rose-100 text-rose-700 border border-rose-300":"bg-emerald-200/70 dark:bg-emerald-800/70 text-emerald-900 dark:text-emerald-100"}">
                                ${p?"Lewat Jatuh Tempo":"Jatuh Tempo: "+u}
                            </span>
                        </div>
                        <div class="flex items-baseline justify-between pt-1">
                            <span class="text-xs font-bold text-emerald-700 dark:text-emerald-300">Wajib Dibayar:</span>
                            <span class="font-mono font-black text-2xl text-emerald-900 dark:text-white tracking-tight">${k(m)}</span>
                        </div>
                    </div>

                    <!-- TABEL MINI RINCIAN JADWAL TIAP BULAN -->
                    <div class="space-y-1.5 pt-1">
                        <p class="text-[10px] font-black uppercase tracking-wider text-slate-400 flex items-center justify-between">
                            <span>Jadwal Angsuran Per Bulan</span>
                            <span class="text-[9px] font-semibold text-slate-500">Transparan &amp; Jelas</span>
                        </p>
                        <div class="rounded-xl border border-slate-200/80 dark:border-slate-700/80 overflow-hidden bg-white dark:bg-slate-900/60 text-xs">
                            <div class="divide-y divide-slate-100 dark:divide-slate-800">
                                ${y.map(b=>`
                                    <div class="p-2.5 sm:p-3 flex items-center justify-between gap-2 ${b.statusType==="paid"?"bg-slate-50/50 dark:bg-slate-800/20 opacity-60":b.statusType==="current"?"bg-emerald-50/30 dark:bg-emerald-950/20 font-bold":""}">
                                        <div class="min-w-0">
                                            <p class="font-bold text-slate-800 dark:text-slate-200 text-xs">Bulan Ke-${b.monthIndex}</p>
                                            <p class="text-[10px] text-slate-400 font-mono mt-0.5">Jatuh Tempo: ${b.dueStr}</p>
                                        </div>
                                        <div class="text-right shrink-0">
                                            <p class="font-mono font-black text-xs sm:text-sm text-slate-900 dark:text-white">${k(b.total)}</p>
                                            <div class="mt-0.5">
                                                ${b.statusType==="paid"?`
                                                    <span class="px-2 py-0.5 rounded text-[8.5px] font-black uppercase bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300">Lunas</span>
                                                `:b.statusType==="current"?`
                                                    <span class="px-2 py-0.5 rounded text-[8.5px] font-black uppercase bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300">Bayar Bulan Ini</span>
                                                `:`
                                                    <span class="px-2 py-0.5 rounded text-[8.5px] font-medium uppercase bg-slate-100 text-slate-500 dark:bg-slate-800 dark:text-slate-400">Bulan Depan</span>
                                                `}
                                            </div>
                                        </div>
                                    </div>
                                `).join("")}
                            </div>
                        </div>
                    </div>

                    <!-- RINGKASAN SISA KESELURUHAN -->
                    <div class="pt-2 border-t border-slate-200/60 dark:border-slate-700/60 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                        <span>Total Sisa Seluruh Tenor (Pelunasan Penuh):</span>
                        <span class="font-mono font-black text-slate-800 dark:text-slate-200 text-sm">${k(n)}</span>
                    </div>
                    `:`
                    <!-- SINGLE TEMPO / 1 BULAN -->
                    <div class="pt-2.5 border-t border-slate-200/60 dark:border-slate-700/60 space-y-2">
                        <div class="flex items-center justify-between text-xs">
                            <span class="text-slate-500 dark:text-slate-400 font-bold">Tanggal Jatuh Tempo:</span>
                            <span class="font-mono font-bold ${p?"text-rose-600":"text-slate-800 dark:text-slate-200"}">${u}</span>
                        </div>
                        <div class="flex items-center justify-between text-xs pt-1">
                            <span class="text-slate-500 dark:text-slate-400 font-bold">Sisa Tagihan Wajib Bayar:</span>
                            <span class="text-base sm:text-lg font-black font-mono text-rose-600 dark:text-rose-400">${k(n)}</span>
                        </div>
                    </div>
                    `}
                </div>
            </div>

            <!-- PILIHAN NOMINAL PEMBAYARAN -->
            <div class="space-y-3">
                <div class="flex items-center justify-between">
                    <label class="block text-[10px] font-black uppercase tracking-wider text-slate-500 dark:text-slate-400">Pilih Nominal Pembayaran *</label>
                    <span class="text-[10px] text-slate-400 italic">Bebas cicil atau lunas</span>
                </div>
                
                <!-- Quick Choice Chips (Symmetric 3-Column on Mobile & Desktop) -->
                <div class="grid ${y.length>1&&m>0&&m<n?"grid-cols-3":"grid-cols-2"} gap-2">
                    ${y.length>1&&m>0&&m<n?`
                    <button type="button" onclick="window.setClientPayAmount(${m}, 'angsuran')" class="p-2.5 sm:p-3 rounded-2xl border-2 border-[var(--color-primary)] bg-[rgba(var(--color-primary-rgb),0.08)] dark:bg-[rgba(var(--color-primary-rgb),0.15)] text-[var(--color-primary)] font-bold text-xs text-left active:scale-95 transition-all shadow-xs relative overflow-hidden flex flex-col justify-between">
                        <span class="block text-[8.5px] uppercase tracking-wider font-extrabold text-[var(--color-primary)] truncate">Bulan Ini</span>
                        <span class="font-mono font-black text-xs sm:text-sm mt-1 block truncate">${k(m)}</span>
                        <span class="block text-[8px] opacity-75 mt-0.5 font-medium truncate">Termin Ke-${c}</span>
                    </button>
                    `:""}
                    <button type="button" onclick="window.setClientPayAmount(${n}, 'pelunasan')" class="p-2.5 sm:p-3 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-750 text-slate-700 dark:text-slate-200 font-bold text-xs text-left active:scale-95 transition-all shadow-2xs flex flex-col justify-between">
                        <span class="block text-[8.5px] uppercase tracking-wider text-slate-400 font-extrabold truncate">Pelunasan</span>
                        <span class="font-mono font-black text-xs sm:text-sm mt-1 block truncate">${k(n)}</span>
                        <span class="block text-[8px] opacity-75 mt-0.5 font-medium truncate">Semua Tenor</span>
                    </button>
                    <button type="button" onclick="window.focusCustomClientPay()" class="p-2.5 sm:p-3 rounded-2xl border border-dashed border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/40 text-slate-600 dark:text-slate-300 font-bold text-xs text-left active:scale-95 transition-all shadow-2xs flex flex-col justify-between">
                        <span class="block text-[8.5px] uppercase tracking-wider text-slate-400 font-extrabold truncate">Bebas</span>
                        <span class="font-bold text-xs sm:text-sm mt-1 block truncate">Ketik Nominal</span>
                        <span class="block text-[8px] opacity-75 mt-0.5 font-medium truncate">Titipan Sebagian</span>
                    </button>
                </div>

                <!-- Input Nominal Rupiah Anti-Overlap -->
                <div class="space-y-1.5">
                    <div class="flex items-center rounded-2xl border-2 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 focus-within:border-[var(--color-primary)] focus-within:ring-2 focus-within:ring-[var(--color-primary)]/20 transition-all overflow-hidden shadow-2xs">
                        <div class="px-4 py-3 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-black text-sm border-r border-slate-200 dark:border-slate-700 select-none shrink-0 flex items-center justify-center">
                            Rp
                        </div>
                        <input type="number" id="client-pay-amount-input" min="1000" max="${n}" value="${T}" class="w-full h-12 px-4 bg-transparent text-slate-900 dark:text-white font-black font-mono text-base sm:text-lg focus:outline-none" placeholder="0">
                    </div>
                    <p class="text-[10px] text-slate-400 leading-relaxed">
                        Default terisi nominal <b>Angsuran Bulan Ini (${k(T)})</b>. Anda juga dapat memilih Pelunasan Penuh di atas jika ingin melunasi seluruhnya sekaligus.
                    </p>
                </div>
            </div>

            <!-- PILIH SALURAN PEMBAYARAN TOKO (BANK VS QRIS) -->
            <div class="space-y-3.5 pt-3 border-t border-slate-200/60 dark:border-slate-700/60">
                <label class="block text-[10px] font-black uppercase tracking-wider text-slate-500 dark:text-slate-400">Saluran Pembayaran Resmi Toko Putri *</label>
                
                <div class="grid grid-cols-2 gap-2 p-1.5 rounded-2xl bg-slate-100 dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700">
                    <button type="button" onclick="window.switchClientPayChannel('bank')" id="tab-btn-client-bank" class="py-2.5 rounded-xl text-xs font-black transition-all ${U==="bank"?"bg-white dark:bg-slate-900 shadow-xs text-slate-900 dark:text-white":"text-slate-500 hover:text-slate-800"}">
                        <i class="fa-solid fa-building-columns mr-1.5"></i> Transfer Bank
                    </button>
                    <button type="button" onclick="window.switchClientPayChannel('qris')" id="tab-btn-client-qris" class="py-2.5 rounded-xl text-xs font-black transition-all ${U==="qris"?"bg-white dark:bg-slate-900 shadow-xs text-slate-900 dark:text-white":"text-slate-500 hover:text-slate-800"}">
                        <i class="fa-solid fa-qrcode mr-1.5"></i> QRIS Toko
                    </button>
                </div>

                <!-- CONTAINER CHANNEL BANK -->
                <div id="client-pay-channel-bank" class="${U==="bank"?"block":"hidden"} space-y-3">
                    <p class="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed">Silakan transfer nominal di atas ke salah satu rekening resmi Toko Putri:</p>
                    <div class="space-y-2.5">
                        ${P.map(b=>{const C=b.bankName||b.bank||"BANK",M=b.bankAccount||b.number||"-",G=b.bankOwner||b.name||g.store?.name||"Toko Putri";return`
                            <div class="p-3.5 sm:p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700 flex items-center justify-between gap-3 shadow-2xs">
                                <div class="min-w-0 flex-1">
                                    <div class="flex items-center gap-2">
                                        <span class="px-2 py-0.5 rounded-lg text-[9.5px] font-black uppercase bg-blue-100 dark:bg-blue-900/60 text-blue-700 dark:text-blue-300 font-mono shrink-0">${h(C)}</span>
                                        <span class="text-xs font-bold text-slate-800 dark:text-white truncate">${h(G)}</span>
                                    </div>
                                    <p class="font-mono text-base sm:text-lg font-black text-slate-900 dark:text-slate-100 tracking-wider mt-1 truncate">${h(M)}</p>
                                </div>
                                <button type="button" onclick="window.copyAccountNumber('${h(M)}')" class="h-10 px-3.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 hover:bg-slate-100 text-slate-700 dark:text-slate-200 text-xs font-bold flex items-center justify-center gap-1.5 active:scale-95 transition-all shadow-2xs shrink-0 cursor-pointer">
                                    <i class="fa-regular fa-copy text-xs"></i> <span>Salin</span>
                                </button>
                            </div>`}).join("")}
                    </div>
                </div>

                <!-- CONTAINER CHANNEL QRIS -->
                <div id="client-pay-channel-qris" class="${U==="qris"?"block":"hidden"} space-y-3.5 text-center">
                    <p class="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed">Scan QRIS toko di bawah menggunakan BCA Mobile, Livin, GoPay, OVO, DANA, ShopeePay, atau m-Banking apa pun:</p>
                    ${A?`
                        <div class="inline-block p-4 sm:p-5 rounded-3xl bg-white border border-slate-200 dark:border-slate-700 shadow-sm mx-auto">
                            <img id="client-pay-qris-img" src="${h(A)}" alt="QRIS Resmi Toko Putri" 
                                 class="w-56 h-56 sm:w-64 sm:h-64 object-contain mx-auto rounded-2xl"
                                 loading="eager"
                                 onerror="if(!this.dataset.retried){this.dataset.retried=1;const id=(this.src.match(/(?:id=|\\/d\\/)([a-zA-Z0-9_-]+)/)||[])[1];if(id){this.src='https://drive.google.com/uc?export=view&id='+id;}}else if(this.dataset.retried==1){this.dataset.retried=2;const id=(this.src.match(/(?:id=|\\/d\\/)([a-zA-Z0-9_-]+)/)||[])[1];if(id){this.src='https://drive.google.com/thumbnail?id='+id+'&sz=w800';}}">
                        </div>
                        <div class="flex items-center justify-center gap-2">
                            <a href="${h(A)}" target="_blank" rel="noopener noreferrer" download="QRIS_Toko_Putri.jpg" class="inline-flex items-center gap-1.5 text-xs font-bold text-[var(--color-primary)] hover:underline py-1.5 px-3 rounded-xl bg-[rgba(var(--color-primary-rgb),0.06)]">
                                <i class="fa-solid fa-arrow-down-to-bracket text-sm"></i> Unduh / Buka Gambar QRIS Penuh
                            </a>
                        </div>
                    `:`
                        <div class="p-8 rounded-2xl border border-dashed border-slate-200 dark:border-slate-700 text-slate-400 text-center space-y-2 bg-slate-50/50 dark:bg-slate-800/30">
                            <div class="w-12 h-12 rounded-2xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center mx-auto text-slate-400 text-xl">
                                <i class="fa-solid fa-qrcode"></i>
                            </div>
                            <p class="text-xs font-bold text-slate-600 dark:text-slate-300">QRIS Toko Belum Dikonfigurasi</p>
                            <p class="text-[11px] text-slate-400">Silakan gunakan tab Transfer Bank di atas untuk pembayaran ke rekening resmi Toko Putri.</p>
                        </div>
                    `}
                </div>
            </div>

            <!-- UNGGAH BUKTI TRANSFER -->
            <div class="space-y-3.5 pt-3 border-t border-slate-200/60 dark:border-slate-700/60">
                <div>
                    <label class="block text-[10px] font-black uppercase tracking-wider text-slate-500 dark:text-slate-400">Unggah Bukti Transfer / Resi *</label>
                    <p class="text-[11px] text-slate-400 mt-0.5">Lampirkan tangkapan layar (screenshot) atau foto struk bukti mutasi</p>
                </div>
                
                <input type="file" id="client-pay-proof-input" accept="image/*" class="hidden" onchange="window.handleClientProofFileChange(event)">
                
                <div id="client-pay-proof-dropzone" onclick="document.getElementById('client-pay-proof-input').click()" class="p-5 sm:p-7 rounded-2xl border-2 border-dashed border-slate-300 dark:border-slate-700 hover:border-[var(--color-primary)] transition-all cursor-pointer text-center bg-slate-50/60 dark:bg-slate-800/40 group">
                    <div id="client-pay-proof-placeholder">
                        <div class="w-12 h-12 rounded-2xl bg-[rgba(var(--color-primary-rgb),0.1)] text-[var(--color-primary)] flex items-center justify-center mx-auto mb-2.5 group-hover:scale-105 transition-transform">
                            <i class="fa-solid fa-camera text-xl"></i>
                        </div>
                        <p class="text-xs sm:text-sm font-bold text-slate-700 dark:text-slate-200">Klik untuk Ambil Foto / Pilih Bukti Transfer</p>
                        <p class="text-[11px] text-slate-400 mt-0.5">Format JPG, PNG atau WebP (Otomatis dikompresi ringan)</p>
                    </div>

                    <div id="client-pay-proof-preview-wrap" class="hidden space-y-2.5">
                        <img id="client-pay-proof-img" src="" alt="Preview Bukti" class="max-h-56 sm:max-h-64 mx-auto rounded-2xl border border-slate-200 dark:border-slate-700 object-contain shadow-sm">
                        <div class="flex items-center justify-center gap-2">
                            <span class="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 px-3 py-1.5 rounded-xl border border-emerald-200 dark:border-emerald-800">
                                <i class="fa-solid fa-circle-check"></i> Foto siap dikirim
                            </span>
                            <button type="button" onclick="event.stopPropagation(); window.resetClientProofFile()" class="inline-flex items-center gap-1 text-xs font-bold text-rose-600 hover:text-rose-700 bg-rose-50 dark:bg-rose-950/40 px-3 py-1.5 rounded-xl border border-rose-200 dark:border-rose-800 cursor-pointer">
                                <i class="fa-solid fa-trash-can"></i> Hapus
                            </button>
                        </div>
                    </div>
                </div>

                <!-- Input Catatan Pengirim (Opsional) -->
                <div class="space-y-1.5">
                    <label class="block text-[10px] font-bold text-slate-400 uppercase tracking-wider">Catatan Tambahan (Opsional)</label>
                    <input type="text" id="client-pay-notes-input" placeholder="Contoh: Transfer dari rekening an. Putri / No. Referensi 987654" class="admin-input rounded-2xl text-xs h-12 bg-slate-50 dark:bg-slate-900 focus:border-[var(--color-primary)]">
                </div>
            </div>
        </div>

        <!-- STICKY ACTION FOOTER (LEGA, SOLID & DOCKING AMAN ANTI-TERTUTUP) -->
        <div class="p-4 sm:p-5 border-t border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 shrink-0 flex items-center justify-end gap-3 shadow-[0_-4px_20px_rgba(0,0,0,0.06)] dark:shadow-[0_-4px_20px_rgba(0,0,0,0.35)]" style="padding-bottom: max(1.25rem, env(safe-area-inset-bottom))">
            <button type="button" onclick="window.closeClientPaymentModal()" class="h-12 px-5 rounded-2xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 font-bold text-xs hover:bg-slate-100 dark:hover:bg-slate-800 transition-all cursor-pointer active:scale-95">
                Batal
            </button>
            <button type="button" id="client-pay-submit-btn" onclick="window.submitClientPaymentConfirmation()" class="h-12 px-6 rounded-2xl text-white font-bold text-xs shadow-glow transition-all active:scale-95 cursor-pointer flex items-center gap-2" style="background: var(--color-primary); box-shadow: 0 4px 14px rgba(var(--color-primary-rgb), 0.35);">
                <i class="fa-solid fa-paper-plane text-xs"></i>
                <span>Kirim Konfirmasi Pembayaran</span>
            </button>
        </div>
    `},Ze=r=>{const e=oe(),t=e.find(s=>s.orderId===r);t&&($=t,Ce(e))},Ye=r=>{U=r;const e=f("tab-btn-client-bank"),t=f("tab-btn-client-qris"),s=f("client-pay-channel-bank"),a=f("client-pay-channel-qris");if(r==="bank")e&&(e.className="py-2.5 rounded-xl text-xs font-black transition-all bg-white dark:bg-slate-900 shadow-xs text-slate-900 dark:text-white"),t&&(t.className="py-2.5 rounded-xl text-xs font-black transition-all text-slate-500 hover:text-slate-800"),s&&s.classList.remove("hidden"),a&&a.classList.add("hidden");else{if(t&&(t.className="py-2.5 rounded-xl text-xs font-black transition-all bg-white dark:bg-slate-900 shadow-xs text-slate-900 dark:text-white"),e&&(e.className="py-2.5 rounded-xl text-xs font-black transition-all text-slate-500 hover:text-slate-800"),a){a.classList.remove("hidden");const n=f("client-pay-qris-img");if(n&&(!n.src||n.src.includes("placeholder"))){const o=Ie();o&&(n.src=o)}}s&&s.classList.add("hidden")}},Xe=(r,e="angsuran")=>{const t=f("client-pay-amount-input");t&&(t.value=r,t.focus())},et=()=>{const r=f("client-pay-amount-input");r&&(r.focus(),r.select())},tt=async r=>{const e=r.target.files&&r.target.files[0];if(e){Q("Memproses foto bukti transfer...");try{ee=e;const t=await qe(e);z=t;const s=f("client-pay-proof-preview-wrap"),a=f("client-pay-proof-img"),n=f("client-pay-proof-placeholder");a&&t&&(a.src=t),s&&s.classList.remove("hidden"),n&&n.classList.add("hidden")}catch(t){console.warn("Gagal memproses gambar:",t),v("Gagal memproses foto bukti transfer!","error")}finally{F()}}},at=()=>{ee=null,z=null;const r=f("client-pay-proof-input");r&&(r.value="");const e=f("client-pay-proof-preview-wrap"),t=f("client-pay-proof-placeholder"),s=f("client-pay-proof-img");s&&(s.src=""),e&&e.classList.add("hidden"),t&&t.classList.remove("hidden")},st=async()=>{if(!$)return v("Pilih nota pesanan yang ingin dibayar!","error");const r=f("client-pay-amount-input"),e=parseFloat(r?.value)||0,t=Math.max(0,parseFloat($.payment?.tempoBalance)||0);if(e<=0)return v("Masukkan nominal pembayaran yang valid!","error");if(e>t+100)return v("Nominal pembayaran melebihi sisa tagihan ("+k(t)+")!","error");if(!z&&!ee)return v("Wajib melampirkan foto / screenshot bukti transfer!","error");const s=f("client-pay-submit-btn");s&&(s.disabled=!0,s.innerHTML='<i class="fa-solid fa-spinner fa-spin mr-1"></i> Mengunggah ke Drive...');try{let a=z;const n=ee||z;if(n)try{Q("Mengupload bukti transfer ke Google Drive...");const p=await me(n,"BUKTI_CICILAN_"+$.orderId);p?(a=p,console.info("[ClientPay] Bukti pembayaran berhasil diunggah ke Google Drive:",p)):console.warn("[ClientPay] Upload GAS mengembalikan null, menggunakan fallback data lokal.")}catch(p){console.warn("[ClientPay] GDrive upload fallback ke gambar terkompresi lokal:",p)}Q("Menyimpan konfirmasi pembayaran...");const o=(w?.phone||w?.id||$.customer?.phone||$.customer?.wa||"").toString().replace(/\D/g,""),l=o.startsWith("0")?"62"+o.substring(1):o,d=w?.name||$.customer?.name||"Pelanggan",x="CONF-"+Date.now().toString(36).toUpperCase()+"-"+Math.random().toString(36).substring(2,6).toUpperCase(),m=g.banks&&g.banks[0]?g.banks[0].bankName:"Transfer Bank",u=(f("client-pay-notes-input")?.value||"").trim(),i={confirmId:x,orderId:$.orderId,customerPhone:l,customerName:d,amount:e,channel:U,bankName:U==="bank"?m:"QRIS Toko",buktiUrl:a,notes:u,createdAt:Date.now(),status:"pending"};await O.collection("tempo_payment_confirmations").doc(x).set(i);let c=[];try{const p=localStorage.getItem("freshmart_pending_confirmations");p&&(c=JSON.parse(p)||[])}catch{}c.unshift(i);try{localStorage.setItem("freshmart_pending_confirmations",JSON.stringify(c))}catch{}F(),ie(),typeof window.rMemberModalBody=="function"&&window.rMemberModalBody(),setTimeout(()=>{$e({orderId:$?.orderId||"",amount:e})},250)}catch(a){console.error("[ClientPay] Gagal kirim konfirmasi:",a),F(),s&&(s.disabled=!1,s.innerHTML='<i class="fa-solid fa-paper-plane mr-1"></i> Kirim Konfirmasi Pembayaran'),v("Gagal mengirim konfirmasi: "+(a.message||"Periksa koneksi internet"),"error")}},xe=(r,e=[])=>{if(!r)return"";const t=!!(r.payment?.isPaylater||r.isPaylater||r.payment?.subMethod==="paylater"),s=Array.isArray(r.payment?.paylaterSchedule)&&r.payment.paylaterSchedule.length>0?r.payment.paylaterSchedule:null,a=Math.max(0,parseFloat(r.payment?.tempoBalance)||0);parseFloat(r.payment?.grandTotal||r.total);const o=(r.payment?.installments||[]).reduce((m,u)=>m+(parseFloat(u.amount)||0),0),d=(e||[]).filter(m=>m.orderId===r.orderId&&m.status==="pending").reduce((m,u)=>m+(parseFloat(u.amount)||0),0),x=t?r.payment?.paylaterTenor==="2m"?"2 Bulan (2x Cicilan)":r.payment?.paylaterTenor==="3m"?"3 Bulan (3x Cicilan)":"30 Hari (1x Bayar)":"Tempo Pembayaran Toko";if(s&&s.length>0){let m=0,u=!1;const i=s.map((c,p)=>{const y=c.installmentIndex||c.installmentNo||c.installmentNumber||c.month||p+1,T=parseFloat(c.pokok||c.principal)||0,S=parseFloat((c.adminFee||0)+(c.serviceFee||0))||0,I=parseFloat(c.total||c.totalMonthly||c.totalInstallment)||T+S;m+=I;const B=m;let P="",A="",b=!1;o>=B?(P="LUNAS",A="bg-emerald-100 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-400 border border-emerald-300 dark:border-emerald-700",b=!0):d>0?(P="SEDANG DIVERIFIKASI",A="bg-amber-100 text-amber-700 dark:bg-amber-950/60 dark:text-amber-400 border border-amber-300 dark:border-amber-700"):u?(P="BULAN DEPAN",A="bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400 border border-slate-200 dark:border-slate-700"):(u=!0,c.dueDate&&Date.now()>c.dueDate?(P="JATUH TEMPO",A="bg-rose-100 text-rose-700 dark:bg-rose-950/60 dark:text-rose-400 border border-rose-300 dark:border-rose-700"):(P="WAJIB BULAN INI",A="bg-amber-100 text-amber-800 dark:bg-amber-950/60 dark:text-amber-300 border border-amber-300 dark:border-amber-700 font-bold"));const C=c.dueDateFormatted||c.dueDateStr||(c.dueDate?new Date(c.dueDate).toLocaleDateString("id-ID",{day:"numeric",month:"short",year:"numeric"}):"-");return`
                <tr class="text-xs ${b?"opacity-70 bg-slate-50/50 dark:bg-slate-900/20":""}">
                    <td class="py-2.5 px-3 sm:px-3.5 font-bold text-slate-800 dark:text-slate-200">
                        Bulan ke-${y}
                    </td>
                    <td class="py-2.5 px-3 sm:px-3.5 text-slate-600 dark:text-slate-400 font-mono text-[11px]">
                        ${C}
                    </td>
                    <td class="py-2.5 px-3 sm:px-3.5 font-mono font-bold text-slate-800 dark:text-slate-200">
                        ${k(T)}
                    </td>
                    <td class="py-2.5 px-3 sm:px-3.5 font-mono text-slate-700 dark:text-slate-300 font-bold">
                        +${k(S)}
                    </td>
                    <td class="py-2.5 px-3 sm:px-3.5 font-mono font-black text-slate-900 dark:text-white">
                        ${k(I)}
                    </td>
                    <td class="py-2.5 px-3 sm:px-3.5 text-right">
                        <span class="inline-block px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider ${A}">
                            ${P}
                        </span>
                    </td>
                </tr>
            `}).join("");return`
            <div class="mt-3 rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white/70 dark:bg-slate-900/60 overflow-hidden shadow-2xs space-y-3 p-4 sm:p-5">
                <div class="flex items-center justify-between flex-wrap gap-2.5">
                    <div>
                        <h4 class="text-xs sm:text-sm font-black text-slate-800 dark:text-white flex items-center gap-1.5">
                            <i class="fa-solid fa-calendar-check text-[var(--color-primary)]"></i> Rincian Jadwal Angsuran Anda
                        </h4>
                        <p class="text-[11px] text-slate-400 font-medium mt-0.5">Nota #${h(r.orderId)} • ${h(x)}</p>
                    </div>
                    ${a>0?`
                    <button type="button" onclick="window.openClientPaymentModal('${h(r.orderId)}')" class="px-3.5 py-2 rounded-xl text-white font-bold text-[10px] uppercase tracking-wider flex items-center gap-1.5 shadow-2xs active:scale-95 transition-all cursor-pointer" style="background: var(--color-primary); box-shadow: 0 2px 8px rgba(var(--color-primary-rgb), 0.3);">
                        <i class="fa-solid fa-credit-card text-[10px]"></i> Bayar Angsuran Ini
                    </button>
                    `:""}
                </div>

                <!-- MOBILE VIEW: NATIVE CARDS (ZERO HORIZONTAL SCROLL) -->
                <div class="sm:hidden space-y-2">
                    ${s.map((c,p)=>{const y=c.installmentIndex||c.installmentNo||c.installmentNumber||c.month||p+1,T=parseFloat(c.pokok||c.principal)||0,S=parseFloat((c.adminFee||0)+(c.serviceFee||0))||0,I=parseFloat(c.total||c.totalMonthly||c.totalInstallment)||T+S,B=c.dueDateFormatted||c.dueDateStr||(c.dueDate?new Date(c.dueDate).toLocaleDateString("id-ID",{day:"numeric",month:"short",year:"numeric"}):"-");let P="",A="",b=!1;return o>=I*(p+1)?(P="Lunas",A="bg-emerald-100 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-400 border border-emerald-300 dark:border-emerald-700",b=!0):d>0?(P="Sedang Diverifikasi",A="bg-amber-100 text-amber-700 dark:bg-amber-950/60 dark:text-amber-400 border border-amber-300 dark:border-amber-700"):c.dueDate&&Date.now()>c.dueDate?(P="Lewat Jatuh Tempo",A="bg-rose-100 text-rose-700 dark:bg-rose-950/60 dark:text-rose-400 border border-rose-300 dark:border-rose-700"):(P="Bayar Bulan Ini",A="bg-amber-100 text-amber-800 dark:bg-amber-950/60 dark:text-amber-300 border border-amber-300 dark:border-amber-700 font-bold"),`
                        <div class="p-3 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700 flex items-center justify-between gap-3 shadow-2xs ${b?"opacity-60":""}">
                            <div class="flex items-center gap-2.5 min-w-0">
                                <span class="w-7 h-7 rounded-xl bg-[rgba(var(--color-primary-rgb),0.1)] text-[var(--color-primary)] font-black text-xs flex items-center justify-center shrink-0">${y}</span>
                                <div class="min-w-0">
                                    <p class="text-xs font-bold text-slate-800 dark:text-white">Bulan ke-${y}</p>
                                    <p class="text-[10px] text-slate-400 font-mono mt-0.5">Jatuh Tempo: ${B}</p>
                                </div>
                            </div>
                            <div class="text-right shrink-0">
                                <p class="text-xs font-black font-mono text-slate-900 dark:text-white">${k(I)}</p>
                                <span class="inline-block mt-0.5 px-2 py-0.5 rounded text-[8.5px] font-black uppercase tracking-wider ${A}">${P}</span>
                            </div>
                        </div>`}).join("")}
                </div>

                <!-- DESKTOP / TABLET VIEW: FULL TABLE -->
                <div id="tempo-sched-wrap-${h(r.orderId)}" class="hidden sm:block overflow-x-auto rounded-xl border border-slate-200/80 dark:border-slate-800 custom-scrollbar">
                    <table class="w-full text-left whitespace-nowrap min-w-full">
                        <thead class="bg-slate-100/90 dark:bg-slate-800/90 text-[10px] font-black uppercase tracking-wider text-slate-500 dark:text-slate-400">
                            <tr>
                                <th class="py-2.5 px-3 sm:px-3.5">Angsuran</th>
                                <th class="py-2.5 px-3 sm:px-3.5">Jatuh Tempo</th>
                                <th class="py-2.5 px-3 sm:px-3.5">Pokok</th>
                                <th class="py-2.5 px-3 sm:px-3.5">Biaya Tenor</th>
                                <th class="py-2.5 px-3 sm:px-3.5">Wajib Bayar</th>
                                <th class="py-2.5 px-3 sm:px-3.5 text-right">Status</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-slate-100 dark:divide-slate-800 bg-white dark:bg-slate-900/40">
                            ${i}
                        </tbody>
                    </table>
                </div>

                <div class="pt-2 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 flex-wrap gap-2.5">
                    <span>Sudah Dibayar: <b class="font-mono text-emerald-600 dark:text-emerald-400">${k(o)}</b></span>
                    <span>Sisa Wajib Bayar: <b class="font-mono text-rose-600 dark:text-rose-400 font-black">${k(a)}</b></span>
                </div>
            </div>
        `}return`
        <div class="mt-3 rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white/70 dark:bg-slate-900/60 p-3.5 sm:p-4 space-y-2.5">
            <div class="flex items-center justify-between flex-wrap gap-2">
                <div>
                    <h4 class="text-xs font-black text-slate-800 dark:text-white flex items-center gap-1.5">
                        <i class="fa-solid fa-file-invoice text-[var(--color-primary)]"></i> Tagihan Tempo Berjalan
                    </h4>
                    <p class="text-[10px] text-slate-400 font-medium">Nota #${h(r.orderId)} • Jatuh Tempo: ${r.payment?.tempoDueDate?new Date(r.payment.tempoDueDate).toLocaleDateString("id-ID",{day:"numeric",month:"short",year:"numeric"}):"-"}</p>
                </div>
                ${a>0?`
                <button type="button" onclick="window.openClientPaymentModal('${h(r.orderId)}')" class="px-3 py-1.5 rounded-xl text-white font-bold text-[10px] uppercase tracking-wider flex items-center gap-1.5 shadow-2xs active:scale-95 transition-all cursor-pointer" style="background: var(--color-primary); box-shadow: 0 2px 8px rgba(var(--color-primary-rgb), 0.3);">
                    <i class="fa-solid fa-credit-card text-[9px]"></i> Bayar Sekarang
                </button>
                `:""}
            </div>

            <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/70 dark:border-slate-700/60 flex items-center justify-between text-xs">
                <span class="text-slate-500 font-bold">Sisa Tagihan Tempo</span>
                <span class="font-mono font-black text-rose-600 dark:text-rose-400 text-sm">${k(a)}</span>
            </div>
        </div>
    `},$e=({orderId:r,amount:e})=>{let t=f("modal-client-pay-success");t||(t=document.createElement("div"),t.id="modal-client-pay-success",document.body.appendChild(t)),t.className="fixed inset-0 z-[150] flex items-center justify-center p-4 bg-slate-900/75 transition-opacity duration-300 opacity-0 pointer-events-none",t.style.zIndex="150";const s=r?r.split("-").pop()||r:"-";t.innerHTML=`
        <div id="modal-client-pay-success-box" class="bg-white dark:bg-slate-900 w-full max-w-sm sm:max-w-md rounded-[2.25rem] p-6 sm:p-7 shadow-2xl border border-slate-200/90 dark:border-slate-800 text-center relative overflow-hidden transform scale-95 transition-all duration-300 pointer-events-auto">

            <!-- Tombol Tutup X Pojok Kanan Atas -->
            <button type="button" onclick="window.closeClientPaymentSuccessModal()" class="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 flex items-center justify-center text-xs transition-all active:scale-90 cursor-pointer" title="Tutup">
                <i class="fa-solid fa-xmark"></i>
            </button>

            <!-- Icon Sukses Squircle -->
            <div class="w-16 h-16 sm:w-20 sm:h-20 rounded-[1.75rem] bg-emerald-50 dark:bg-emerald-950/60 text-emerald-500 dark:text-emerald-400 mx-auto flex items-center justify-center text-3xl sm:text-4xl shadow-inner border border-emerald-200 dark:border-emerald-800/80 mb-3.5">
                <i class="fa-solid fa-check"></i>
            </div>

            <!-- Header Text -->
            <h3 class="text-xl sm:text-2xl font-black text-slate-800 dark:text-white tracking-tight">Konfirmasi Terkirim!</h3>
            <p class="text-xs sm:text-[13px] text-slate-500 dark:text-slate-400 mt-1.5 leading-relaxed font-medium">
                Alhamdulillah! Bukti transfer pembayaran cicilan Anda telah berhasil dikirimkan ke Admin Toko Putri.
            </p>

            <!-- Bento Card Rincian -->
            <div class="bg-slate-50 dark:bg-slate-800/70 rounded-2xl p-4 my-4.5 border border-slate-100 dark:border-slate-700/60 text-left space-y-2.5 shadow-2xs">
                <div class="flex justify-between items-center text-xs">
                    <span class="text-slate-500 dark:text-slate-400 font-medium">Nomor Nota</span>
                    <span class="font-mono font-bold text-slate-800 dark:text-white">#${h(s)}</span>
                </div>
                <div class="flex justify-between items-center text-xs border-t border-slate-200/60 dark:border-slate-700/60 pt-2">
                    <span class="text-slate-500 dark:text-slate-400 font-medium">Nominal Konfirmasi</span>
                    <span class="font-extrabold text-sm sm:text-base text-[var(--color-primary)] font-mono">${k(e)}</span>
                </div>
                <div class="flex justify-between items-center text-xs border-t border-slate-200/60 dark:border-slate-700/60 pt-2">
                    <span class="text-slate-500 dark:text-slate-400 font-medium">Status Pengajuan</span>
                    <span class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-amber-50 dark:bg-amber-950/50 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-800/60">
                        <i class="fa-solid fa-hourglass-half text-amber-500 text-[9px]"></i> Menunggu Verifikasi
                    </span>
                </div>
            </div>

            <!-- Pesan Info Pemulihan Limit -->
            <div class="p-3 sm:p-3.5 rounded-xl bg-blue-50/70 dark:bg-blue-950/30 border border-blue-100 dark:border-blue-900/50 text-left flex items-start gap-2.5 mb-5">
                <i class="fa-solid fa-circle-info text-blue-500 text-sm shrink-0 mt-0.5"></i>
                <p class="text-[11px] leading-relaxed text-blue-800 dark:text-blue-300 font-normal">
                    Admin akan segera memeriksa mutasi rekening. Limit belanja <b>Putri PayLater</b> Anda akan otomatis pulih segera setelah disetujui.
                </p>
            </div>

            <!-- Tombol CTA Selesai -->
            <button type="button" onclick="window.closeClientPaymentSuccessModal()" class="w-full h-12 py-3 px-5 rounded-2xl text-white text-xs sm:text-sm font-bold flex items-center justify-center gap-2 active:scale-95 transition-all cursor-pointer shadow-lg" style="background: var(--color-primary); box-shadow: 0 4px 14px rgba(var(--color-primary-rgb), 0.35);">
                <i class="fa-solid fa-check-double mr-1"></i> Mengerti &amp; Selesai
            </button>
        </div>
    `;const a=f("modal-client-pay-success-box");document.body.classList.add("overflow-hidden"),typeof window.pushModalHistory=="function"&&window.pushModalHistory("clientPaySuccess"),Te(t,a)},rt=(r=!1)=>{const e=()=>{const t=f("modal-client-pay-success"),s=f("modal-client-pay-success-box");!t||!s||Ae(t,s,()=>{t.classList.add("pointer-events-none"),s.classList.remove("pointer-events-auto"),document.querySelector('[id*="modal"]:not(.hidden):not(.pointer-events-none):not(#modal-client-pay-success)')||document.body.classList.remove("overflow-hidden")})};typeof window.requestCloseModal=="function"?window.requestCloseModal("clientPaySuccess",r,e):e()};typeof window<"u"&&(window.openClientPaymentModal=Qe,window.closeClientPaymentModal=ie,window.closeClientTempoPayModal=ie,window.switchClientPaymentOrder=Ze,window.switchClientPayChannel=Ye,window.setClientPayAmount=Xe,window.focusCustomClientPay=et,window.handleClientProofFileChange=tt,window.resetClientProofFile=at,window.submitClientPaymentConfirmation=st,window.copyAccountNumber=We,window.renderClientInstallmentSchedule=xe,window.showClientPaymentSuccessModal=$e,window.closeClientPaymentSuccessModal=rt);const R=new Map,nt=3*60*1e3,K=new Map,ot=2*60*1e3,it="https://lh3.googleusercontent.com/d/1KHwsV5sK6aAH3-eP_vTJA4tE5MyRukLo",lt=r=>{if(!r){R.clear(),K.clear();return}const e=r.toString().replace(/\D/g,"");let t=e,s=e.startsWith("0")?"62"+e.substring(1):e.startsWith("62")?e:"62"+e,a=e.startsWith("62")?"0"+e.substring(2):e;R.delete(e),R.delete(t),R.delete(s),R.delete(a),K.delete(e),K.delete(t),K.delete(s),K.delete(a)},fe=async(r,e="")=>{try{let t=(r||"").toString().replace(/\D/g,"");if(t.startsWith("0")?t="62"+t.substring(1):t.startsWith("62")||(t="62"+t),!t||t.length<9)return null;let s=[];try{const u=localStorage.getItem("freshmart_my_orders");u&&(s=JSON.parse(u)||[])}catch{}if(!s.length)return null;let a=0;const n=s.find(u=>u.finalMemberPoints!==void 0&&u.finalMemberPoints!==null);if(n?a=Math.max(0,parseFloat(n.finalMemberPoints)||0):a=s.reduce((u,i)=>u+(parseFloat(i.pointsEarned)||0),0),a<=0)return null;const o=O.collection("freshmart").doc("cms_data").collection("customers").doc(t),l=await o.get();if(!l.exists)return null;const d=e||w&&w.name||l.data().name||"Pelanggan Setia",x={id:t,phone:t,name:d,points:a,updatedAt:new Date().toISOString(),lastOrderAt:new Date().toISOString()};try{await o.set(x,{merge:!0})}catch(u){console.warn("[reconcilePointsFromOrders] Firestore set error:",u)}D(x);try{localStorage.setItem("freshmart_current_member",JSON.stringify(x)),localStorage.setItem("freshmart_member_wa",t)}catch{}return R.set(t,{data:x,timestamp:Date.now()}),document.getElementById("member-modal-body")&&E(),x}catch(t){return console.warn("[reconcilePointsFromOrders] Error:",t),null}},ce=(r=0)=>{const e=Math.max(0,parseFloat(r)||0);return e>=1e3?{level:4,name:"PLATINUM VIP",badge:'<i class="fa-solid fa-gem mr-1"></i> PLATINUM VIP',icon:"fa-gem",gradient:"from-slate-950 via-zinc-900 to-neutral-950 border-amber-400/40 text-amber-200",cardBg:"linear-gradient(135deg, #090d16 0%, #171f30 45%, #0d1322 75%, #050811 100%)",accentBg:"bg-amber-400/20",accentText:"text-amber-300",accentBorder:"border-amber-400/40",chipBorder:"#f59e0b",foilClass:"gold-foil-text",nextTier:null,ptsNeeded:0,progress:100,perks:["Cashback & Poin Belanja Maksimal (2x Lipat)","Akses Prioritas Antrean Kasir & Pengiriman","Klaim Semua Hadiah Katalog VIP","Layanan Konsultasi Khusus via WhatsApp"]}:e>=500?{level:3,name:"GOLD MEMBER",badge:'<i class="fa-solid fa-crown mr-1"></i> GOLD MEMBER',icon:"fa-crown",gradient:"from-amber-600 via-yellow-600 to-amber-700 border-yellow-300/40 text-yellow-100",cardBg:"linear-gradient(135deg, #78350f 0%, #b45309 35%, #d97706 70%, #92400e 100%)",accentBg:"bg-yellow-400/20",accentText:"text-amber-200",accentBorder:"border-yellow-300/40",chipBorder:"#fde047",foilClass:"gold-foil-text",nextTier:"Platinum VIP",ptsNeeded:1e3-e,progress:Math.min(100,Math.round((e-500)/500*100)),perks:["Diskon & Promo Spesial Member Gold","Kumpulkan Poin di Setiap Transaksi","Tukar Hadiah Menarik dari Katalog","Prioritas Penyiapan Pesanan"]}:e>=100?{level:2,name:"SILVER MEMBER",badge:'<i class="fa-solid fa-medal mr-1"></i> SILVER MEMBER',icon:"fa-medal",gradient:"from-slate-700 via-slate-600 to-slate-800 border-slate-300/40 text-slate-100",cardBg:"linear-gradient(135deg, #1e293b 0%, #334155 40%, #475569 70%, #0f172a 100%)",accentBg:"bg-slate-200/20",accentText:"text-slate-100",accentBorder:"border-slate-300/40",chipBorder:"#cbd5e1",foilClass:"silver-foil-text",nextTier:"Gold Member",ptsNeeded:500-e,progress:Math.min(100,Math.round((e-100)/400*100)),perks:["Kumpulkan Poin di Setiap Transaksi","Tukar Hadiah Langsung Tanpa Undian","Penawaran Diskon Tertentu"]}:{level:1,name:"BRONZE MEMBER",badge:'<i class="fa-solid fa-award mr-1"></i> BRONZE MEMBER',icon:"fa-award",gradient:"from-stone-800 via-amber-950 to-stone-900 border-orange-400/30 text-orange-200",cardBg:"linear-gradient(135deg, #381a10 0%, #632917 40%, #7c2d12 70%, #292524 100%)",accentBg:"bg-orange-500/20",accentText:"text-orange-200",accentBorder:"border-orange-400/40",chipBorder:"#fb923c",foilClass:"bronze-foil-text",nextTier:"Silver Member",ptsNeeded:100-e,progress:Math.min(100,Math.round(e/100*100)),perks:["Kumpulkan Poin di Setiap Transaksi Belanja","Akses Penuh ke Katalog Hadiah Toko"]}},Be=r=>{let e=(r||"").toString().replace(/\D/g,"");for(e.startsWith("62")?e=e.substring(2):e.startsWith("0")&&(e=e.substring(1));e.length<8;)e+="0";const t=[];for(let s=0;s<e.length&&t.length<3;s+=4)t.push(e.substring(s,s+4));return`PUTRI • ${t.join(" • ")}`},Ne=r=>{const e=String(r||"812345678901").replace(/\D/g,"");try{if(typeof ye=="function")return ye(e,{height:34,showText:!1,moduleWidth:1.25,quietZone:12,className:"w-full h-11 bg-white rounded-lg px-2 py-1 shadow-inner border border-slate-200"})}catch{}let t="",s=8;t+=`<rect x="${s}" y="3" width="2.5" height="34" fill="#0f172a"/>`,s+=4,t+=`<rect x="${s}" y="3" width="1.5" height="34" fill="#0f172a"/>`,s+=3.5,t+=`<rect x="${s}" y="3" width="3" height="34" fill="#0f172a"/>`,s+=5;for(let a=0;a<e.length;a++){const n=parseInt(e[a],10)||0,o=(n%3+1)*1.3,l=((n+2)%4+1)*1.1,d=(n%2+1)*1.8;t+=`<rect x="${s}" y="3" width="${o}" height="34" fill="#0f172a"/>`,s+=o+d,t+=`<rect x="${s}" y="3" width="${l}" height="34" fill="#0f172a"/>`,s+=l+2}return t+=`<rect x="${s}" y="3" width="3" height="34" fill="#0f172a"/>`,s+=5,t+=`<rect x="${s}" y="3" width="1.5" height="34" fill="#0f172a"/>`,s+=3.5,t+=`<rect x="${s}" y="3" width="2.5" height="34" fill="#0f172a"/>`,s+=4,`
    <svg class="w-full h-11 bg-white rounded-lg px-2 py-1 shadow-inner border border-slate-200" viewBox="0 0 ${Math.max(s+10,240)} 40" xmlns="http://www.w3.org/2000/svg">
        ${t}
    </svg>`},ke=r=>{const e=parseFloat(r?.points)||0,t=ce(e),s=(g.store?.name||"Toko Putri").toUpperCase(),a=g.store?.logo&&g.store.logo!=="fa-store"?g.store.logo:it,n=(r?.name||"PELANGGAN SETIA").toUpperCase(),o=(r?.phone||"81234567890").toString().replace(/\D/g,""),l=Be(o),d=g.store?.wa||o;return`
    <div class="member-card-scene w-full max-w-[390px] mx-auto select-none my-1">
        <div id="member-card-inner" class="member-card-inner relative w-full aspect-[1.586/1] cursor-pointer rounded-2xl sm:rounded-3xl border border-black/10 dark:border-white/10" onclick="flipMemberCard()" title="Klik untuk membalik kartu">
            
            <!-- ================= SISI DEPAN (FRONT CARD) ================= -->
            <div id="member-card-front-export" class="member-card-front rounded-2xl sm:rounded-3xl overflow-hidden p-4 sm:p-5 flex flex-col justify-between text-white border border-white/20" style="background: ${t.cardBg};">
                
                <!-- Ambient luxury light reflections (clean subtle overlay, zero blur spilling) -->
                <div class="absolute inset-0 bg-gradient-to-tr from-black/25 via-transparent to-white/15 pointer-events-none"></div>

                <!-- Header Kartu: Logo Toko, Nama Toko, & Gelombang Contactless -->
                <div class="relative z-10 flex items-center justify-between">
                    <div class="flex items-center gap-2.5 min-w-0">
                        <div class="w-8 h-8 rounded-xl bg-white/95 p-1 flex items-center justify-center shadow-2xs shrink-0 border border-white/40">
                            <img src="${h(a)}" alt="Logo" class="w-full h-full object-contain" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">
                            <i class="fa-solid fa-store text-slate-800 text-xs hidden"></i>
                        </div>
                        <div class="min-w-0">
                            <h4 class="text-[11px] sm:text-xs font-black tracking-wider text-white uppercase truncate">${h(s)}</h4>
                            <p class="text-[8px] sm:text-[9px] font-bold tracking-[0.2em] text-white/80 uppercase">VIP Loyalty Pass</p>
                        </div>
                    </div>
                    <!-- Contactless NFC & Tier Pill -->
                    <div class="flex items-center gap-2 shrink-0">
                        <span class="text-[8px] sm:text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full ${t.accentBg} ${t.accentText} border ${t.accentBorder}">
                            ${t.badge}
                        </span>
                        <div class="opacity-80 flex items-center" title="Contactless Member">
                            <svg class="w-4 h-4 text-white/90" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
                                <path d="M8.5 16.5a5 5 0 0 1 0-7"/>
                                <path d="M12 19a8.5 8.5 0 0 1 0-12"/>
                                <path d="M15.5 21.5a12 12 0 0 1 0-17"/>
                            </svg>
                        </div>
                    </div>
                </div>

                <!-- Bagian Tengah: Smart Chip EMV Emas & Hologram Seal -->
                <div class="relative z-10 flex items-center justify-between my-auto py-1">
                    <!-- EMV Smart Chip (SVG) -->
                    <div class="flex items-center gap-3">
                        <svg class="w-11 h-8 rounded-md border border-amber-300/60 bg-gradient-to-br from-amber-200 via-amber-400 to-yellow-600 p-0.5 shrink-0" viewBox="0 0 50 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="1" y="1" width="48" height="38" rx="5" fill="url(#chipGrad)" stroke="#b45309" stroke-width="0.8"/>
                            <path d="M1 13H18M1 27H18M32 13H49M32 27H49M18 1V39M32 1V39M18 20H32" stroke="#78350f" stroke-width="1" stroke-linecap="round"/>
                            <rect x="21" y="14" width="8" height="12" rx="2" fill="#d97706" stroke="#78350f" stroke-width="0.8"/>
                            <defs>
                                <linearGradient id="chipGrad" x1="0" y1="0" x2="50" y2="40" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#fef08a"/>
                                    <stop offset="0.5" stop-color="#f59e0b"/>
                                    <stop offset="1" stop-color="#b45309"/>
                                </linearGradient>
                            </defs>
                        </svg>
                        <div class="w-7 h-7 rounded-full card-hologram-seal opacity-75 border border-white/30 hidden sm:block" title="Security Seal"></div>
                    </div>
                    <!-- Poin Saldo Member -->
                    <div class="text-right">
                        <p class="text-[8px] sm:text-[9px] font-bold tracking-widest text-white/70 uppercase">Saldo Poin</p>
                        <div class="flex items-center justify-end gap-1.5 mt-0.5">
                            <i class="fa-solid fa-star text-amber-300 text-xs sm:text-sm animate-pulse"></i>
                            <span class="text-base sm:text-xl font-black tracking-tight text-white">${e}</span>
                            <span class="text-[9px] font-bold text-white/80">PTS</span>
                        </div>
                        ${w&&(w.paylaterActive===!0||w.paylaterActive==="true")&&(parseFloat(w.paylaterLimit)||0)>0?`
                        <div class="mt-1 flex items-center justify-end gap-1 text-[8px] font-black text-emerald-300 uppercase tracking-wider">
                            <i class="fa-solid fa-bolt text-amber-300 text-[7px]"></i> PayLater: ${k(Math.max(0,(parseFloat(w.paylaterLimit)||0)-Math.max(0,parseFloat(w.paylaterUsed)||0)))}
                        </div>`:""}
                    </div>
                </div>

                <!-- Bagian Bawah: Nomor Kartu & Nama Pelanggan Embossed -->
                <div class="relative z-10">
                    <p class="text-[11px] sm:text-[13px] embossed-text text-white/95 font-mono tracking-[0.18em] mb-1.5">${h(l)}</p>
                    <div class="flex items-end justify-between gap-2">
                        <div class="min-w-0 flex-1">
                            <p class="text-[7px] sm:text-[8px] font-bold tracking-widest text-white/70 uppercase leading-none mb-0.5">Nama Pelanggan</p>
                            <p class="text-[11px] sm:text-[13px] font-bold text-white tracking-wider truncate uppercase">${h(n)}</p>
                        </div>
                        <div class="text-right shrink-0">
                            <p class="text-[7px] sm:text-[8px] font-bold tracking-widest text-white/70 uppercase leading-none mb-0.5">Status Member</p>
                            <p class="text-[9px] sm:text-[10px] font-extrabold text-emerald-300 tracking-wider flex items-center justify-end gap-1">
                                <i class="fa-solid fa-circle-check text-[8px]"></i> AKTIF
                            </p>
                        </div>
                    </div>
                </div>

                <!-- Petunjuk Balik Kartu -->
                <div class="absolute bottom-1 right-3 text-[7px] text-white/40 tracking-wider font-semibold pointer-events-none flex items-center gap-1">
                    <i class="fa-solid fa-repeat text-[6px]"></i> Klik untuk balik
                </div>
            </div>

            <!-- ================= SISI BELAKANG (BACK CARD) ================= -->
            <div class="member-card-back rounded-2xl sm:rounded-3xl overflow-hidden flex flex-col justify-between text-slate-800 border border-slate-700/60 bg-[#0f172a]">
                
                <!-- Pita Magnetik Hitam (Magnetic Stripe) -->
                <div class="w-full h-8 sm:h-10 bg-slate-950 mt-4 border-y border-white/10 relative">
                    <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
                </div>

                <!-- Signature Strip & Keamanan -->
                <div class="px-4 sm:px-5 py-1">
                    <div class="flex items-center gap-2">
                        <div class="flex-1 h-6 bg-white/90 rounded border border-slate-300 px-2 flex items-center justify-between">
                            <span class="text-[9px] font-mono font-bold text-slate-500 italic truncate">${h(n)}</span>
                            <span class="text-[8px] font-mono font-black text-slate-800 tracking-widest">VERIFIED</span>
                        </div>
                        <div class="w-10 h-6 bg-amber-400 text-slate-950 font-black text-[9px] rounded flex items-center justify-center tracking-widest">
                            VIP
                        </div>
                    </div>

                    <!-- Barcode untuk Scanner Kasir Toko -->
                    <div class="mt-2 text-center">
                        <p class="text-[8px] font-bold text-slate-400 uppercase tracking-wider mb-1 flex items-center justify-center gap-1">
                            <i class="fa-solid fa-barcode text-[var(--color-primary)]"></i> Scan Barcode di Kasir POS Toko:
                        </p>
                        ${Ne(o)}
                        <p class="text-[9px] font-mono font-bold tracking-[0.2em] text-slate-300 mt-1">*${h(o)}*</p>
                    </div>
                </div>

                <!-- Footer Sisi Belakang: Kontak & Info -->
                <div class="p-3 sm:p-4 bg-slate-950/80 border-t border-white/10 text-center">
                    <p class="text-[7.5px] sm:text-[8px] text-slate-400 leading-tight">
                        Kartu member digital resmi <b class="text-white">${h(s)}</b>. Tunjukkan saat transaksi untuk poin belanja.
                    </p>
                    <p class="text-[8px] font-bold text-emerald-400 mt-0.5">
                        <i class="fa-brands fa-whatsapp mr-1"></i>CS: +${h(d)}
                    </p>
                </div>
            </div>

        </div>
    </div>`},dt=()=>{const r=document.getElementById("member-card-inner");r&&(r.classList.toggle("is-flipped"),typeof window.triggerHaptic=="function"&&window.triggerHaptic("light"),typeof window.playNativeSound=="function"&&window.playNativeSound("tick"))},ct=async()=>{const r=document.getElementById("member-card-inner");r&&r.classList.contains("is-flipped")&&(r.classList.remove("is-flipped"),await new Promise(t=>setTimeout(t,450)));const e=document.getElementById("member-card-front-export");if(e){typeof window.showToast=="function"&&window.showToast("Menyiapkan file gambar Kartu Member HD...");try{if(typeof window.ensureScriptLoaded=="function"&&await window.ensureScriptLoaded("https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js",()=>typeof html2canvas<"u"),typeof html2canvas>"u")throw new Error("Modul html2canvas belum siap dimuat.");const t=await html2canvas(e,{scale:3,useCORS:!0,allowTaint:!0,backgroundColor:null}),a=`Kartu_Member_TokoPutri_${(w?.name||"Pelanggan").replace(/[^a-zA-Z0-9]/g,"_")}.png`,n=t.toDataURL("image/png",1);if(window.AndroidNativeApp&&typeof window.AndroidNativeApp.saveOrShareFile=="function")window.AndroidNativeApp.saveOrShareFile(n,a,"image/png");else{const o=document.createElement("a");o.download=a,o.href=n,document.body.appendChild(o),o.click(),document.body.removeChild(o)}typeof window.showToast=="function"&&window.showToast("Kartu Member Berhasil Disimpan ke Galeri!")}catch(t){console.error("Gagal menyimpan kartu member:",t),typeof window.showToast=="function"&&window.showToast("Gagal menyimpan kartu. Silakan coba kembali.")}}},pt=()=>{const r=f("reward-catalog-container");if(!r)return;const e=g.store.showRewardCatalog!==!1&&g.store.showRewardCatalog!=="false";e&&typeof window.attachRewardsRealtime=="function"&&!window.unsubRewardsRealtime&&window.attachRewardsRealtime();const t=(g.rewards||[]).filter(a=>a.isActive!=="false"&&a.isActive!==!1);if(!e||t.length===0){r.classList.add("hidden"),r.innerHTML="";return}r.classList.remove("hidden");let s=`
    <div class="bento-island-card rounded-2xl p-3.5 sm:p-4 md:p-4.5 shadow-xs transition-all duration-300 hover:shadow-sm">
        <div class="mb-3 flex items-center justify-between border-b border-[rgba(var(--color-primary-rgb),0.12)] pb-2.5 dark:border-slate-700/50">
            <div class="flex items-center gap-2.5">
                <div class="flex h-7 w-7 items-center justify-center rounded-lg text-white shadow-2xs"
                     style="background: linear-gradient(135deg, var(--color-primary-light) 0%, var(--color-primary) 50%, var(--color-primary-dark) 100%);">
                    <i class="fa-solid fa-gift text-xs"></i>
                </div>
                <h3 class="text-xs font-extrabold uppercase tracking-tight text-slate-800 dark:text-white sm:text-sm">KATALOG REWARD POIN</h3>
            </div>
            <button type="button" onclick="if(typeof window.openMemberModal==='function') window.openMemberModal(); else if(typeof window.showToast==='function') window.showToast('Gunakan poin Anda untuk menukar hadiah menarik!');" 
                    class="rounded-lg border border-[rgba(var(--color-primary-rgb),0.2)] bg-[rgba(var(--color-primary-rgb),0.08)] px-2.5 sm:px-3 py-1 sm:py-1.5 text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-[var(--color-primary)] shadow-2xs transition-all hover:bg-[var(--color-primary)] hover:text-white active:scale-95 flex items-center gap-1 cursor-pointer">
                Lihat Kartu VIP <i class="fa-solid fa-chevron-right text-[8px]"></i>
            </button>
        </div>
        <div class="flex gap-2.5 sm:gap-3.5 overflow-x-auto hide-scrollbar snap-x pb-1 pt-1 md:flex-wrap md:overflow-visible">
            ${t.map(a=>`
                <div class="w-[130px] sm:w-[145px] shrink-0 snap-start md:shrink md:flex-1 md:min-w-[150px] md:max-w-[260px] relative group cursor-pointer active:scale-95 transition-all duration-200" onclick="if(typeof window.openMemberModal==='function') window.openMemberModal(); else if(typeof window.showToast==='function') window.showToast('Tukarkan hadiah ini saat checkout menggunakan poin belanja Anda!');">
                    <div class="w-full h-full bg-slate-50/80 dark:bg-slate-900/60 rounded-2xl shadow-2xs hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col relative overflow-hidden border border-[rgba(var(--color-primary-rgb),0.15)] dark:border-slate-700/80 p-2 sm:p-2.5 text-slate-800 dark:text-slate-100">
                        <!-- Badges Row -->
                        <div class="flex items-center justify-between gap-1 mb-1.5">
                            <span class="text-white text-[7.5px] sm:text-[8px] font-extrabold px-1.5 py-0.5 rounded-full uppercase tracking-wider shadow-2xs flex items-center gap-1"
                                  style="background: linear-gradient(135deg, var(--color-primary-light) 0%, var(--color-primary) 50%, var(--color-primary-dark) 100%);">
                                <i class="fa-solid fa-gift text-[7px]"></i> Gratis
                            </span>
                            <span class="bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-300 border border-amber-300/40 dark:border-amber-700/50 text-[7.5px] sm:text-[8px] font-black px-1.5 py-0.5 rounded-full flex items-center gap-1 shadow-2xs">
                                <i class="fa-solid fa-coins text-amber-500 text-[7px]"></i> ${parseFloat(a.pointsCost||a.pointsRequired)||0} Poin
                            </span>
                        </div>
                        <!-- Reward Image -->
                        <div class="w-full aspect-square rounded-xl bg-white dark:bg-slate-800 flex items-center justify-center overflow-hidden relative border border-slate-100 dark:border-slate-700/60 p-2 group-hover:bg-[rgba(var(--color-primary-rgb),0.05)] transition-colors">
                            <img loading="lazy" src="${h(a.img)}" alt="${h(a.name)}" class="w-full h-full object-contain transition-transform duration-300 group-hover:scale-108" onerror="this.onerror=null;this.src='https://placehold.co/400?text=Hadiah'">
                        </div>
                        <!-- Details & Action -->
                        <div class="mt-2 flex-1 flex flex-col justify-between">
                            <h4 class="text-[9.5px] sm:text-[10px] font-black text-slate-800 dark:text-white leading-snug line-clamp-2 uppercase tracking-tight text-center drop-shadow-2xs">${h(a.name)}</h4>
                            <div class="mt-2 w-full py-1.5 rounded-xl text-white text-[8.5px] sm:text-[9.5px] font-extrabold uppercase tracking-wider text-center shadow-2xs transition-all flex items-center justify-center gap-1 group-hover:shadow-xs"
                                 style="background: linear-gradient(135deg, var(--color-primary-light) 0%, var(--color-primary) 50%, var(--color-primary-dark) 100%);">
                                <i class="fa-solid fa-hand-holding-dollar text-[8px]"></i> Tukar Poin
                            </div>
                        </div>
                    </div>
                </div>`).join("")}
        </div>
    </div>`;r.innerHTML=s};let ve=null;const mt=()=>{clearTimeout(ve),ve=setTimeout(async()=>{const e=(window.normalizeWA||(n=>(n||"").replace(/\D/g,"").replace(/^0/,"62")))(Pe("cust-wa")),t=f("member-status-banner");if(!t)return;if(!e||e.length<10){L(t),L("payment-option-tempo"),L("payment-option-paylater"),D(null),X(null);const n=document.querySelector('input[name="payment"][value="tempo"]');if(n&&n.checked){const o=document.querySelector('input[name="payment"][value="transfer"]')||document.querySelector('input[name="payment"][value="cashier"]');o&&(o.checked=!0,typeof window.togglePaymentDetails=="function"&&window.togglePaymentDetails())}return}const s=n=>{const o=parseFloat(n.points)||0,l=ce(o);t.className="mt-3 p-3 sm:p-4 rounded-2xl bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 text-white border border-[rgba(var(--color-primary-rgb),0.35)] shadow-xl relative overflow-hidden flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3",t.innerHTML=`
                <div class="flex items-center gap-3 relative z-10 min-w-0">
                    <div class="w-12 h-10 rounded-xl bg-[rgba(var(--color-primary-rgb),0.15)] border border-[rgba(var(--color-primary-rgb),0.35)] flex items-center justify-center shrink-0 shadow-inner">
                        <i class="fa-solid fa-id-card text-xl text-[var(--color-primary)]"></i>
                    </div>
                    <div class="min-w-0">
                        <div class="flex items-center gap-2 flex-wrap">
                            <span class="text-[9px] font-black uppercase tracking-widest px-2 py-0.5 rounded-full ${l.accentBg} ${l.accentText} border ${l.accentBorder}">${l.badge}</span>
                            <span class="text-[10px] font-bold text-[var(--color-primary)] flex items-center gap-1"><i class="fa-solid fa-coins text-[9px]"></i>${o} Poin</span>
                        </div>
                        <p class="text-xs font-bold text-white mt-0.5 truncate flex items-center gap-1.5">
                            <span>${h(n.name||"Pelanggan")}</span>
                            <span class="text-[9px] font-normal text-slate-400">(Member Resmi)</span>
                        </p>
                    </div>
                </div>
                <button type="button" onclick="openMemberModal()" class="relative z-10 w-full sm:w-auto shrink-0 primary-bg hover:opacity-90 text-white text-[10px] font-black uppercase tracking-wider px-3.5 py-2.5 rounded-xl shadow-md active:scale-95 transition-all flex items-center justify-center gap-1.5 cursor-pointer">
                    <i class="fa-solid fa-wallet"></i> Buka Kartu Member
                </button>`,Y(t),Y("payment-option-tempo"),n.paylaterActive===!0||n.paylaterActive==="true"?Y("payment-option-paylater"):L("payment-option-paylater")},a=R.get(e);if(a&&Date.now()-a.timestamp<nt){if(a.data)D(a.data),s(a.data);else{D(null),X(null),L(t),L("payment-option-tempo"),L("payment-option-paylater");const n=document.querySelector('input[name="payment"][value="tempo"]');if(n&&n.checked){const o=document.querySelector('input[name="payment"][value="transfer"]')||document.querySelector('input[name="payment"][value="cashier"]');o&&(o.checked=!0,typeof window.togglePaymentDetails=="function"&&window.togglePaymentDetails())}}return}try{const n=await O.collection("freshmart").doc("cms_data").collection("customers").doc(e).get();if(n.exists){const o=n.data();R.set(e,{data:o,timestamp:Date.now()}),D(o),s(o)}else{R.set(e,{data:null,timestamp:Date.now()}),D(null),X(null),L(t),L("payment-option-tempo"),L("payment-option-paylater");const o=document.querySelector('input[name="payment"][value="tempo"]');if(o&&o.checked){const l=document.querySelector('input[name="payment"][value="transfer"]')||document.querySelector('input[name="payment"][value="cashier"]');l&&(l.checked=!0,typeof window.togglePaymentDetails=="function"&&window.togglePaymentDetails())}}}catch{}},500)},ut=()=>{if(!w)try{const s=localStorage.getItem("freshmart_current_member");if(s){const a=JSON.parse(s);a&&(a.id||a.phone||a.name)&&D(a)}}catch{}const r=w?.phone||w?.id||localStorage.getItem("freshmart_member_wa");if(r){let s=r.toString().replace(/\D/g,"");s.startsWith("0")?s="62"+s.substring(1):s.startsWith("62")||(s="62"+s),O.collection("freshmart").doc("cms_data").collection("customers").doc(s).get().then(async a=>{if(a.exists){let n=a.data();if(parseFloat(n.paylaterUsed)<0&&(n.paylaterUsed=0),(parseFloat(n.points)||0)===0){const l=await fe(s,n.name);l&&(n=l)}R.set(s,{data:n,timestamp:Date.now()}),D(n);try{localStorage.setItem("freshmart_current_member",JSON.stringify(n)),localStorage.setItem("freshmart_member_wa",s)}catch{}document.getElementById("member-modal-body")&&E()}else{R.set(s,{data:null,timestamp:Date.now()}),D(null);try{localStorage.removeItem("freshmart_current_member"),localStorage.removeItem("freshmart_member_wa")}catch{}document.getElementById("member-modal-body")&&E()}}).catch(()=>{})}typeof window.attachRewardsRealtime=="function"&&!window.unsubRewardsRealtime&&window.attachRewardsRealtime();let e=document.getElementById("member-modal");e||(e=document.createElement("div"),e.id="member-modal",e.className="fixed inset-0 z-[115] bg-slate-900/75 flex items-end sm:items-center justify-center p-0 sm:p-5",e.onclick=s=>{s.target===e&&Re()},document.body.appendChild(e));const t=e.style.display!=="none"&&e.style.opacity==="1";e.innerHTML=`
        <div class="bg-white dark:bg-slate-900 w-full max-w-lg sm:max-w-2xl lg:max-w-3xl rounded-t-[2.25rem] sm:rounded-3xl max-h-[92dvh] sm:max-h-[88vh] flex flex-col shadow-2xl border border-slate-200/90 dark:border-slate-800 overflow-hidden">
            <!-- DRAG PULL MOBILE -->
            <div class="pull-indicator sm:hidden"></div>

            <!-- Header Modal -->
            <div class="px-5 sm:px-6 pt-3.5 sm:pt-5 pb-4 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center shrink-0 bg-white dark:bg-slate-900">
                <div class="flex items-center gap-3">
                    <div class="w-9 h-9 rounded-2xl flex items-center justify-center text-white shadow-xs" style="background: var(--color-primary); box-shadow: 0 4px 12px rgba(var(--color-primary-rgb), 0.3);">
                        <i class="fa-solid fa-id-card text-xs"></i>
                    </div>
                    <div>
                        <h3 class="font-black text-slate-800 dark:text-white text-sm sm:text-base leading-tight">Kartu Member Digital</h3>
                        <p class="text-[10px] font-semibold text-slate-400">Loyalty Pass &amp; Poin Hadiah Toko Putri</p>
                    </div>
                </div>
                <button onclick="closeMemberModal()" class="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 hover:bg-rose-100 hover:text-rose-500 flex items-center justify-center transition-all cursor-pointer active:scale-95" title="Tutup">
                    <i class="fa-solid fa-xmark text-sm"></i>
                </button>
            </div>
            <!-- Body Modal (Spacious Scroll Clearance) -->
            <div class="p-5 sm:p-6 pb-20 sm:pb-24 overflow-y-auto flex-1 space-y-6 custom-scrollbar" id="member-modal-body"></div>
        </div>`,E(),e.style.opacity="0",e.style.display="flex",requestAnimationFrame(()=>{e.style.transition="opacity 0.25s ease",e.style.opacity="1"}),!t&&typeof window.pushModalHistory=="function"&&window.pushModalHistory("member")},Le=async(r,e=!1)=>{try{let t=(r||"").toString().replace(/\D/g,"");if(t.startsWith("0")?t="62"+t.substring(1):t.startsWith("62")||(t="62"+t),!t||t.length<9)return[];const s=t,a=K.get(s);if(!e&&a&&Date.now()-a.timestamp<ot)return a.data;const n=new Set([t,t.startsWith("62")?"0"+t.substring(2):t,t.startsWith("62")?t.substring(2):t]);let o=[];try{const i=localStorage.getItem("freshmart_my_orders");i&&(o=JSON.parse(i)||[])}catch{}let l=[];const d=i=>!!i&&(i.code==="permission-denied"||/insufficient permissions/i.test(i.message||""));if(!!(we&&we.currentUser))for(const i of["customerPhone","phone"])try{const c=await O.collection("freshmart_orders").where(i,"in",Array.from(n).slice(0,10)).limit(50).get();if(c&&!c.empty){l=c.docs.map(p=>({id:p.id,...p.data()}));break}}catch(c){if(d(c))break;console.warn(`[getMemberPointsHistory] Query ${i} gagal:`,c)}if(!l.length&&o.length){const i=[...new Set(o.filter(p=>p&&p.id).map(p=>String(p.id)))].slice(0,20);(await Promise.allSettled(i.map(p=>O.collection("freshmart_orders").doc(p).get()))).forEach(p=>{p.status==="fulfilled"&&p.value&&p.value.exists?l.push({id:p.value.id,...p.value.data()}):p.status==="rejected"&&!d(p.reason)&&console.warn("[getMemberPointsHistory] Gagal memuat pesanan:",p.reason)})}const m=new Map;[...l,...o].forEach(i=>{if(i&&i.id){const c=(i.customerPhone||i.phone||i.customer&&i.customer.phone||"").toString().replace(/\D/g,"");(n.has(c)||!c)&&m.set(i.id,i)}});const u=[];return m.forEach(i=>{const c=Ee(i),p=c.toLocaleDateString("id-ID",{day:"numeric",month:"short",year:"numeric",hour:"2-digit",minute:"2-digit"}),y=c.getTime(),T=i.source==="pos",S=parseFloat(i.pointsEarned)||0;S>0&&u.push({id:`${i.id}-earn`,orderId:i.id,timestamp:y,dateStr:p,type:"earn",title:`Poin Belanja (${T?"Kasir POS":"Belanja Online"})`,desc:`Faktur #${i.id} • Total Belanja ${k(i.total||i.payment?.grandTotal||0)}`,points:S,sign:"+",colorClass:"text-emerald-500 dark:text-emerald-400",bgClass:"bg-emerald-500/10 border-emerald-500/20 text-emerald-600 dark:text-emerald-400",icon:"fa-coins"});const I=parseFloat(i.pointDiscount||i.payment?.pointDiscount)||0,B=parseFloat(i.pointsRedeemed)||0;if(I>0||B>0&&!i.claimedReward){const P=B>0?B:Math.round(I/1e3);u.push({id:`${i.id}-discount`,orderId:i.id,timestamp:y+1,dateStr:p,type:"discount",title:"Diskon Poin di Kasir POS",desc:`Potongan belanja tunai -${k(I||P*1e3)} • #${i.id}`,points:P,sign:"-",colorClass:"text-rose-500 dark:text-rose-400",bgClass:"bg-rose-500/10 border-rose-500/20 text-rose-600 dark:text-rose-400",icon:"fa-percent"})}if(i.claimedReward&&(i.claimedReward.name||i.claimedReward.id)){const P=parseFloat(i.claimedReward.pointsCost)||0,A=i.claimedReward.status==="ready"?"Tersedia / Diterima":i.claimedReward.status==="waiting_stock"?"Menunggu Stok Toko":"Sedang Diproses Toko";u.push({id:`${i.id}-reward`,orderId:i.id,timestamp:y+2,dateStr:p,type:"reward",title:`Tukar Hadiah: ${i.claimedReward.name}`,desc:`Status: ${A}${i.claimedReward.note?` ("${i.claimedReward.note}")`:""} • #${i.id}`,points:P,sign:"-",colorClass:"text-amber-500 dark:text-amber-400",bgClass:"bg-amber-500/10 border-amber-500/20 text-amber-600 dark:text-amber-400",icon:"fa-gift"})}}),u.sort((i,c)=>c.timestamp-i.timestamp),K.set(s,{data:u,timestamp:Date.now()}),u}catch(t){return console.warn("[getMemberPointsHistory] Error:",t),[]}},De=async(r,e=!1)=>{const t=document.getElementById("member-points-history-list");if(!t)return;e&&(t.innerHTML=`
            <div class="p-4 text-center text-slate-400 text-xs font-semibold">
                <i class="fa-solid fa-circle-notch fa-spin mr-1.5 text-[var(--color-primary)]"></i> Memperbarui riwayat poin...
            </div>
        `);const s=await Le(r,e);if(t){if(!s||!s.length){t.innerHTML=`
            <div class="p-4 rounded-2xl border border-dashed border-slate-200 dark:border-slate-800 text-center space-y-1.5 bg-slate-50/50 dark:bg-slate-900/30">
                <div class="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-400 flex items-center justify-center mx-auto text-xs">
                    <i class="fa-solid fa-receipt"></i>
                </div>
                <p class="text-xs font-bold text-slate-700 dark:text-slate-300">Belum Ada Riwayat Mutasi Poin</p>
                <p class="text-[10px] text-slate-400 max-w-xs mx-auto">
                    Kumpulkan poin di setiap belanja kasir POS atau pesanan online Toko Putri untuk menikmati diskon &amp; hadiah eksklusif.
                </p>
            </div>
        `;return}t.innerHTML=s.map(a=>`
        <div class="flex items-center gap-3 p-3 rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white/70 dark:bg-slate-900/50 shadow-2xs hover:border-[var(--color-primary)]/40 transition-all">
            <div class="w-9 h-9 rounded-xl flex items-center justify-center text-xs shrink-0 border ${a.bgClass}">
                <i class="fa-solid ${a.icon}"></i>
            </div>
            <div class="min-w-0 flex-1">
                <div class="flex items-center justify-between gap-1">
                    <p class="text-xs font-bold text-slate-800 dark:text-white truncate">${h(a.title)}</p>
                    <span class="text-xs font-black ${a.colorClass} shrink-0">
                        ${a.sign}${a.points} Poin
                    </span>
                </div>
                <p class="text-[10px] text-slate-500 dark:text-slate-400 truncate mt-0.5">${h(a.desc)}</p>
                <p class="text-[9px] font-semibold text-slate-400 dark:text-slate-500 mt-0.5 flex items-center gap-1">
                    <i class="fa-regular fa-clock text-[8px]"></i> ${a.dateStr}
                </p>
            </div>
        </div>
    `).join("")}},xt=r=>{if(!r)return{used:0,tagihanWajibBayar:0,totalPokok:0,totalFee:0,monthlyInstallment:0,tenorLabel:"",hasActiveOrder:!1};const e=Math.max(0,parseFloat(r.paylaterUsed)||0),t=(r.phone||r.id||"").toString().replace(/\D/g,""),s=[];Array.isArray(q)&&q.length&&s.push(...q),Array.isArray(J)&&J.length&&s.push(...J);try{const d=localStorage.getItem("freshmart_my_orders");if(d){const x=JSON.parse(d);Array.isArray(x)&&s.push(...x)}}catch{}const a=new Set,n=s.filter(d=>!d||!d.orderId||a.has(d.orderId)?!1:(a.add(d.orderId),!0)),o=d=>{if(!t)return!0;const x=(d.customer?.phone||d.customer?.wa||"").toString().replace(/\D/g,"");return x&&(x===t||x.endsWith(t)||t.endsWith(x))},l=n.filter(d=>{if(!!!(d.payment?.isPaylater||d.isPaylater||d.payment?.subMethod==="paylater")||d.status==="Batal"||d.payment?.paymentStatus==="lunas")return!1;const m=parseFloat(d.payment?.tempoBalance);return!(isNaN(m)||m<=0||!o(d))});if(l.length>0){let d=0,x=0,m=0,u=0,i=0,c=[];return l.forEach(p=>{const y=Math.max(0,parseFloat(p.payment?.tempoBalance)||0);x+=y;const T=parseFloat(p.payment?.paylaterAdminFee)||0,S=parseFloat(p.payment?.paylaterServiceFee)||0,I=T+S,B=parseFloat(p.payment?.paylaterUsed)||Math.max(0,y-I),P=parseFloat(p.payment?.paylaterMonthlyInstallment)||y;m+=B,u+=I,i+=P;const A=Array.isArray(p.payment?.paylaterSchedule)&&p.payment.paylaterSchedule.length>0?p.payment.paylaterSchedule:null;if(A&&A.length>1){const M=(p.payment?.installments||[]).reduce((_,N)=>_+(parseFloat(N.amount)||0),0);let G=0,V=0;for(let _=0;_<A.length;_++){const N=A[_],Z=parseFloat(N.pokok||N.principal)||0,ae=parseFloat((N.adminFee||0)+(N.serviceFee||0))||0,j=parseFloat(N.total||N.totalMonthly||N.totalInstallment)||Z+ae;if(G+=j,M<G){const se=Math.max(0,G-M);V=Math.min(se,j);break}}d+=V>0?V:y}else d+=y;const b=p.payment?.paylaterTenor==="2m"?"2 Bulan":p.payment?.paylaterTenor==="3m"?"3 Bulan":"30 Hari";c.includes(b)||c.push(b)}),{used:e>0?e:m,tagihanBulanIni:d>0?d:x,tagihanWajibBayar:x,tagihanMendatang:Math.max(0,x-d),totalPokok:m>0?m:e,totalFee:u,monthlyInstallment:i>0?i:x,tenorLabel:c.join(", "),activeCount:l.length,hasActiveOrder:!0}}return{used:e,tagihanBulanIni:e,tagihanWajibBayar:e,tagihanMendatang:0,totalPokok:e,totalFee:0,monthlyInstallment:e,tenorLabel:"",activeCount:0,hasActiveOrder:!1}},E=()=>{const r=(g.rewards||[]).filter(a=>a.isActive!=="false"&&a.isActive!==!1),e=w&&parseFloat(w.points)||0,t=ce(e),s=r.length?r.map(a=>{const n=(parseFloat(a.stock)||0)>0,o=w&&e>=(parseFloat(a.pointsCost)||0)&&n,l=ne&&ne.id===a.id;return`
        <div class="flex items-center gap-3 p-3.5 rounded-2xl border ${l?"border-[var(--color-primary)] bg-[rgba(var(--color-primary-rgb),0.06)] dark:bg-[rgba(var(--color-primary-rgb),0.12)] shadow-xs":"border-slate-200 dark:border-slate-700/80 bg-slate-50/70 dark:bg-slate-800/40"} transition-all">
            ${a.img?`<img src="${h(a.img)}" class="w-14 h-14 rounded-xl object-contain bg-white p-1 border border-slate-200 dark:border-slate-700 shrink-0" onerror="this.style.display='none'" loading="lazy">`:'<div class="w-14 h-14 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-300 shrink-0"><i class="fa-solid fa-gift text-xl"></i></div>'}
            <div class="min-w-0 flex-1">
                <p class="text-xs font-bold text-slate-800 dark:text-white truncate">${h(a.name)}</p>
                <p class="text-[11px] font-black text-[var(--color-primary)] mt-0.5 flex items-center gap-1">
                    <i class="fa-solid fa-star text-[10px]"></i> ${parseFloat(a.pointsCost)||0} Poin
                </p>
                ${n?"":'<p class="text-[10px] font-bold text-rose-500 mt-0.5">Stok hadiah habis</p>'}
            </div>
            ${w?l?'<button type="button" onclick="deselectReward()" class="shrink-0 bg-rose-500 hover:bg-rose-600 text-white text-[10px] font-bold uppercase px-3 py-2 rounded-xl active:scale-95 transition-all whitespace-nowrap shadow-xs cursor-pointer">Batal</button>':`<button type="button" ${o?"":"disabled"} onclick="selectReward('${h(String(a.id))}')" class="shrink-0 ${o?"primary-bg hover:opacity-90 text-white active:scale-95 shadow-xs cursor-pointer":"bg-slate-200 dark:bg-slate-700 text-slate-400 cursor-not-allowed"} text-[10px] font-bold uppercase px-3 py-2 rounded-xl transition-all whitespace-nowrap">Pilih Hadiah</button>`:`<span class="text-[10px] font-bold text-slate-400 uppercase bg-slate-100 dark:bg-slate-800 px-2.5 py-1.5 rounded-lg">${parseFloat(a.pointsCost)||0} Poin</span>`}
        </div>`}).join(""):'<p class="text-[11px] font-bold text-slate-400 text-center py-3">Belum ada program hadiah yang tersedia.</p>';w?(H("member-modal-body",`
            <!-- KARTU MEMBER DIGITAL (3D INTERAKTIF) -->
            <div>
                ${ke(w)}
                
                <!-- Action Controls: Balik Kartu, Unduh Kartu & Tutup -->
                <div class="flex items-center justify-between gap-2 mt-3 max-w-[390px] mx-auto">
                    <button type="button" onclick="flipMemberCard()" class="flex-1 py-2.5 px-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 text-xs font-bold flex items-center justify-center gap-1.5 hover:bg-slate-50 dark:hover:bg-slate-700 active:scale-95 transition-all shadow-2xs cursor-pointer">
                        <i class="fa-solid fa-repeat text-[11px] text-[var(--color-primary)]"></i> Balik Kartu
                    </button>
                    <button type="button" onclick="downloadMemberCard()" class="flex-1 py-2.5 px-3 rounded-xl primary-bg hover:opacity-95 text-white text-xs font-bold flex items-center justify-center gap-1.5 active:scale-95 transition-all shadow-sm shadow-[rgba(var(--color-primary-rgb),0.25)] cursor-pointer">
                        <i class="fa-solid fa-download text-[11px]"></i> Simpan ke Galeri
                    </button>
                    <button type="button" onclick="closeMemberModal()" class="py-2.5 px-3.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-500 hover:text-slate-800 dark:hover:text-white text-xs font-bold flex items-center justify-center gap-1 active:scale-95 transition-all cursor-pointer" title="Tutup">
                        <i class="fa-solid fa-xmark"></i>
                    </button>
                </div>
                <div class="text-center mt-2">
                    <button type="button" onclick="logoutMember()" class="text-[10px] text-slate-400 hover:text-[var(--color-primary)] font-semibold transition-colors cursor-pointer">
                        <i class="fa-solid fa-user-pen mr-1"></i>Bukan Anda? Cek nomor WhatsApp lain
                    </button>
                </div>
            </div>

            <!-- TIER STATUS & PROGRESS LEVEL -->
            <div class="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-800/40 space-y-3">
                <div class="flex items-center justify-between">
                    <div>
                        <p class="text-[9px] font-bold text-slate-400 uppercase tracking-wider">Level Keanggotaan</p>
                        <h4 class="text-xs sm:text-sm font-black text-slate-800 dark:text-white flex items-center gap-1.5 mt-0.5">
                            <i class="fa-solid ${t.icon} text-[var(--color-primary)]"></i> ${t.name}
                        </h4>
                    </div>
                    <div class="text-right">
                        <p class="text-[9px] font-bold text-slate-400 uppercase tracking-wider">Total Saldo</p>
                        <p class="text-xs sm:text-sm font-black text-[var(--color-primary)] mt-0.5 flex items-center justify-end gap-1"><i class="fa-solid fa-coins text-[11px]"></i> ${e} Poin</p>
                    </div>
                </div>

                ${t.nextTier?`
                <div class="space-y-1.5 pt-1">
                    <div class="flex justify-between text-[10px] font-semibold text-slate-500 dark:text-slate-400">
                        <span>Menuju <b>${t.nextTier}</b></span>
                        <span class="font-bold text-[var(--color-primary)]">${t.progress}%</span>
                    </div>
                    <div class="w-full h-2 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden">
                        <div class="h-full rounded-full primary-bg transition-all duration-500" style="width: ${t.progress}%"></div>
                    </div>
                    <p class="text-[9px] text-slate-500 dark:text-slate-400 font-medium">
                        Kumpulkan <b>${t.ptsNeeded} poin lagi</b> untuk otomatis naik tingkat ke <b>${t.nextTier}</b>!
                    </p>
                </div>`:`
                <p class="text-[10px] text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-1">
                    <i class="fa-solid fa-crown"></i> Anda telah mencapai level member tertinggi Toko Putri!
                </p>`}

                <!-- Member Privileges Pill -->
                <div class="pt-2 border-t border-slate-200/60 dark:border-slate-700/60">
                    <p class="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-1.5">Hak Istimewa Member Anda:</p>
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                        ${t.perks.map(a=>`
                        <div class="flex items-center gap-1.5 text-[10px] font-semibold text-slate-700 dark:text-slate-300">
                            <i class="fa-solid fa-check text-emerald-500 text-[9px] shrink-0"></i>
                            <span class="truncate">${h(a)}</span>
                        </div>`).join("")}
                    </div>
                </div>
            </div>

            <!-- PUTRI PAYLATER DIGITAL CREDIT LIMIT -->
            ${(()=>{const a=Math.max(0,parseFloat(w.paylaterLimit)||0),n=xt(w),o=n.used,l=w.paylaterActive===!0||w.paylaterActive==="true",d=Math.max(0,a-o),x=a>0?Math.min(100,Math.max(0,Math.round(o/a*100))):0,m=w.paylaterDueDay||5;if(!l||a<=0)return`
                    <div class="p-4 rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-gradient-to-br from-slate-50 to-slate-100/60 dark:from-slate-900/60 dark:to-slate-800/40 relative overflow-hidden">
                        <div class="flex items-center justify-between gap-2">
                            <div class="flex items-center gap-2.5">
                                <div class="w-9 h-9 rounded-xl bg-amber-500/10 text-amber-500 flex items-center justify-center border border-amber-500/20 shrink-0">
                                    <i class="fa-solid fa-bolt text-sm"></i>
                                </div>
                                <div>
                                    <h4 class="text-xs font-black text-slate-800 dark:text-white flex items-center gap-1.5">
                                        Putri PayLater <span class="px-1.5 py-0.5 rounded text-[8px] font-black uppercase bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300">Belum Aktif</span>
                                    </h4>
                                    <p class="text-[10px] text-slate-500 dark:text-slate-400 mt-0.5">Belanja sekarang, bayar bulan depan (Limit Kredit Member VIP).</p>
                                </div>
                            </div>
                        </div>
                        <div class="mt-2.5 pt-2.5 border-t border-slate-200/60 dark:border-slate-700/60 flex items-center justify-between">
                            <span class="text-[10px] text-slate-400 font-semibold">Plafon limit hingga Rp 5.000.000</span>
                            <a href="https://wa.me/${(g.store?.wa||"").replace(/\D/g,"")}?text=${encodeURIComponent(`Halo Admin Toko Putri, saya bermaksud mengajukan aktivasi fasilitas limit kredit Putri PayLater untuk nomor member: ${w.phone||""}. Mohon informasi dan verifikasi persyaratannya. Terima kasih.`)}" target="_blank" class="text-[10px] font-bold text-[var(--color-primary)] hover:underline flex items-center gap-1">Ajukan Aktivasi <i class="fa-solid fa-arrow-right text-[8px]"></i></a>
                        </div>
                    </div>`;const u=n.tagihanBulanIni>0?n.tagihanBulanIni:n.monthlyInstallment>0?n.monthlyInstallment:n.tagihanWajibBayar,i=n.tagihanBulanIni>0&&n.tagihanBulanIni<n.tagihanWajibBayar;return`
                <div class="p-4 sm:p-5 rounded-2xl border border-[var(--color-primary)]/25 dark:border-[var(--color-primary)]/35 bg-gradient-to-br from-[rgba(var(--color-primary-rgb),0.06)] via-transparent to-[rgba(var(--color-primary-rgb),0.02)] dark:from-[rgba(var(--color-primary-rgb),0.12)] dark:to-slate-900 shadow-sm relative overflow-hidden space-y-3">
                    <div class="flex items-center justify-between">
                        <div class="flex items-center gap-2">
                            <div class="w-8 h-8 rounded-xl text-white flex items-center justify-center shadow-xs" style="background: var(--color-primary);">
                                <i class="fa-solid fa-bolt text-xs"></i>
                            </div>
                            <div>
                                <div class="flex items-center gap-1.5">
                                    <span class="text-xs font-black text-slate-900 dark:text-white">Putri PayLater</span>
                                    <span class="px-1.5 py-0.5 rounded-full text-[8px] font-black uppercase tracking-wider bg-[rgba(var(--color-primary-rgb),0.12)] text-[var(--color-primary)] border border-[var(--color-primary)]/30 font-bold">Aktif</span>
                                </div>
                                <p class="text-[9px] text-slate-400 font-semibold">Limit Kredit Eksklusif Member Toko</p>
                            </div>
                        </div>
                        <div class="text-right">
                            <p class="text-[9px] font-bold text-slate-400 uppercase tracking-wider">Sisa Limit Tersedia</p>
                            <p class="text-sm font-black text-[var(--color-primary)] font-mono">${k(d)}</p>
                        </div>
                    </div>

                    <!-- Progress Bar Penggunaan Limit -->
                    <div class="space-y-1.5 pt-0.5">
                        <div class="flex justify-between text-[10px] font-bold text-slate-500 dark:text-slate-400">
                            <span>Terpakai: <b class="font-mono text-slate-800 dark:text-slate-200">${k(o)}</b> (${x}%)</span>
                            <span>Total Plafon: <b class="font-mono text-slate-800 dark:text-slate-200">${k(a)}</b></span>
                        </div>
                        <div class="w-full h-2.5 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden p-0.5">
                            <div class="h-full rounded-full transition-all duration-500" style="background: var(--color-primary); width: ${x}%;"></div>
                        </div>
                    </div>

                    <div class="pt-2 border-t border-slate-200/60 dark:border-slate-700/60 flex items-center justify-between text-[10px]">
                        <span class="text-slate-500 dark:text-slate-400 flex items-center gap-1">
                            <i class="fa-regular fa-calendar-check text-[var(--color-primary)]"></i> Jatuh Tempo: <b>Tgl ${m} Bulan Depan</b>
                        </span>
                        <span class="text-[var(--color-primary)] font-bold">1-Klik Checkout Siap Pakai</span>
                    </div>

                    ${n.tagihanWajibBayar>0||o>0?`
                        <div class="pt-2.5 border-t border-dashed border-slate-200 dark:border-slate-700 space-y-2.5">
                            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                                <div class="min-w-0 space-y-0.5">
                                    <p class="text-[9px] text-slate-400 uppercase font-black tracking-wider flex items-center gap-1">
                                        <i class="fa-solid fa-file-invoice-dollar text-[var(--color-primary)]"></i> ${i?"Angsuran Bulan Ini (Wajib Bayar)":"Tagihan Berjalan (Wajib Bayar)"}
                                    </p>
                                    <div class="flex items-baseline gap-1.5 flex-wrap">
                                        <p class="text-base sm:text-lg font-black text-rose-600 dark:text-rose-400 font-mono">${k(u)}</p>
                                        ${i?`
                                            <span class="text-[10px] text-slate-500 dark:text-slate-400 font-medium">dari total ${k(n.tagihanWajibBayar)}</span>
                                        `:""}
                                    </div>
                                    ${i?`
                                        <p class="text-[9.5px] text-slate-500 dark:text-slate-400 font-medium">
                                            Sisa Termin Bulan Depan: <b class="font-mono text-slate-700 dark:text-slate-300">${k(n.tagihanMendatang)}</b>
                                        </p>
                                    `:n.totalFee>0?`
                                        <p class="text-[9px] text-slate-400 font-medium mt-0.5">
                                            Pokok: <span class="font-mono text-slate-600 dark:text-slate-300 font-bold">${k(n.totalPokok)}</span> + Biaya Tenor: <span class="font-mono text-[var(--color-primary)] font-bold">+${k(n.totalFee)}</span>
                                        </p>
                                    `:""}
                                </div>
                                <div class="flex items-center gap-2 shrink-0">
                                    <button type="button" onclick="if(typeof window.openClientPaymentModal==='function') window.openClientPaymentModal('', ${u}); else if(typeof openClientPaymentModal==='function') openClientPaymentModal('', ${u});" class="flex-1 sm:flex-none px-4 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-wider text-white flex items-center justify-center gap-1.5 shadow-sm transition-all active:scale-95 cursor-pointer" style="background: var(--color-primary); box-shadow: 0 4px 14px rgba(var(--color-primary-rgb), 0.35);">
                                        <i class="fa-solid fa-credit-card text-xs"></i> Bayar ${i?"Bulan Ini":"Tagihan"}
                                    </button>
                                    <a href="https://wa.me/${(g.store?.wa||"").replace(/\D/g,"")}?text=${encodeURIComponent(`Halo Tim Keuangan Toko Putri, saya ingin konfirmasi pembayaran tagihan Putri PayLater sebesar ${k(u)} untuk nomor akun: ${w.phone||""}. Berikut saya lampirkan bukti transfer pembayarannya. Terima kasih.`)}" target="_blank" class="p-2.5 rounded-xl text-slate-500 hover:text-[var(--color-primary)] border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 flex items-center justify-center active:scale-95 transition-all shadow-2xs" title="Konfirmasi via WhatsApp">
                                        <i class="fa-brands fa-whatsapp text-sm text-[var(--color-primary)]"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    `:""}
                </div>`})()}

            <!-- TABEL RINCIAN JADWAL ANGSURAN & TAGIHAN BERJALAN PELANGGAN -->
            ${(()=>{const a=typeof oe=="function"?oe():typeof window.getMemberActiveTempoOrders=="function"?window.getMemberActiveTempoOrders():[];if(!a||a.length===0)return"";let n=[];try{const l=localStorage.getItem("freshmart_pending_confirmations");l&&(n=JSON.parse(l)||[])}catch{}const o=typeof xe=="function"?xe:window.renderClientInstallmentSchedule;return typeof o!="function"?"":`
                <div class="space-y-3.5">
                    <div class="flex items-center justify-between">
                        <p class="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest flex items-center gap-1.5">
                            <i class="fa-solid fa-list-check text-[var(--color-primary)]"></i> Jadwal Angsuran &amp; Cicilan Anda
                        </p>
                        <span class="text-[10px] font-bold text-[var(--color-primary)]">${a.length} Tagihan Aktif</span>
                    </div>
                    ${a.map(l=>o(l,n)).join("")}
                </div>`})()}

            <!-- KATALOG REWARD / PENUKARAN HADIAH -->
            <div>
                <p class="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-2.5">Katalog Hadiah yang Dapat Ditukar</p>
                <div class="space-y-2.5">${s}</div>
            </div>

            ${ne?`<div class="bg-[rgba(var(--color-primary-rgb),0.06)] dark:bg-[rgba(var(--color-primary-rgb),0.12)] border border-[var(--color-primary)]/30 rounded-xl p-3.5 text-[11px] font-bold text-[var(--color-primary)] flex items-center gap-2"><i class="fa-solid fa-gift text-base shrink-0"></i><span>Hadiah "<b>${h(ne.name)}</b>" telah dipilih dan akan otomatis diproses saat pesanan Anda selesai di checkout.</span></div>`:""}

            <!-- RIWAYAT MUTASI POIN & HADIAH (POINT LEDGER) -->
            <div class="space-y-2.5 pt-2 border-t border-slate-200/60 dark:border-slate-800/60">
                <div class="flex items-center justify-between">
                    <p class="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">Riwayat Mutasi Poin &amp; Hadiah</p>
                    <button type="button" onclick="loadMemberPointsHistory('${h(w.phone||w.id||"")}', true)" class="text-[10px] text-[var(--color-primary)] font-bold hover:underline cursor-pointer flex items-center gap-1 active:scale-95 transition-all">
                        <i class="fa-solid fa-arrows-rotate text-[9px]"></i> Refresh
                    </button>
                </div>
                <div id="member-points-history-list" class="space-y-2">
                    <div class="p-4 text-center text-slate-400 text-xs font-semibold">
                        <i class="fa-solid fa-circle-notch fa-spin mr-1.5 text-[var(--color-primary)]"></i> Memuat riwayat poin...
                    </div>
                </div>
            </div>
        `),setTimeout(()=>{w&&De(w.phone||w.id)},50)):H("member-modal-body",`
            <!-- PREVIEW KARTU CONTOH (MEMIKAT PELANGGAN) -->
            <div class="opacity-95">
                ${ke({name:"CONTOH: PELANGGAN VIP",phone:"81234567890",points:500})}
            </div>

            <!-- FORM PENCARIAN / CEK KARTU MEMBER -->
            <div class="p-4 sm:p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-800/40 space-y-3">
                <div class="flex items-center gap-2 text-slate-800 dark:text-white font-bold text-xs sm:text-sm">
                    <div class="w-7 h-7 rounded-xl primary-bg text-white flex items-center justify-center text-xs shrink-0 shadow-2xs">
                        <i class="fa-solid fa-magnifying-glass"></i>
                    </div>
                    <span>Cek Kartu Member &amp; Saldo Poin Anda</span>
                </div>
                <p class="text-xs text-slate-500 dark:text-slate-400 font-medium leading-relaxed">
                    Masukkan nomor WhatsApp yang pernah Anda gunakan saat berbelanja di Toko Putri:
                </p>
                <div class="flex gap-2">
                    <div class="relative flex-1">
                        <span class="absolute left-3.5 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400">+62</span>
                        <input type="tel" id="member-lookup-input" class="w-full rounded-xl border border-slate-200 bg-white py-3 pl-12 pr-3 text-xs font-bold text-slate-800 outline-none focus:border-[var(--color-primary)] dark:border-slate-700 dark:bg-slate-900 dark:text-white" placeholder="81234567890" inputmode="numeric" />
                    </div>
                    <button type="button" onclick="lookupMemberPoints()" class="primary-bg text-white px-4 py-3 rounded-xl text-xs font-bold uppercase tracking-wider shrink-0 transition-all active:scale-95 shadow-sm cursor-pointer">
                        Cek Kartu
                    </button>
                </div>
                <div id="member-lookup-result" class="hidden text-xs font-bold mt-2"></div>
            </div>

            <!-- KEUNTUNGAN MENJADI MEMBER -->
            <div class="p-4 rounded-2xl border border-[rgba(var(--color-primary-rgb),0.25)] bg-[rgba(var(--color-primary-rgb),0.05)] dark:bg-[rgba(var(--color-primary-rgb),0.1)] text-xs space-y-2">
                <h4 class="font-bold text-slate-800 dark:text-white flex items-center gap-1.5">
                    <i class="fa-solid fa-sparkles text-[var(--color-primary)]"></i> Keuntungan Menjadi Member Toko Putri:
                </h4>
                <ul class="text-[11px] text-slate-600 dark:text-slate-300 space-y-1 list-disc pl-4">
                    <li>Otomatis terdaftar menjadi member pada pesanan pertama Anda.</li>
                    <li>Kumpulkan poin di setiap transaksi belanja untuk ditukar hadiah gratis.</li>
                    <li>Mendapatkan kartu digital eksklusif yang bisa disimpan di galeri ponsel.</li>
                </ul>
            </div>

            <!-- KATALOG HADIAH -->
            <div>
                <p class="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-2.5">Katalog Hadiah yang Dapat Ditukar</p>
                <div class="space-y-2.5">${s}</div>
            </div>
        `)},bt=async()=>{const r=document.getElementById("member-lookup-input"),e=document.getElementById("member-lookup-result");if(!r||!e)return;let t=r.value.replace(/\D/g,"");if(!t||t.length<9){e.className="text-xs font-bold text-rose-500 p-2.5 bg-rose-50 dark:bg-rose-900/20 rounded-xl",e.textContent="Masukkan minimal 9 digit nomor WhatsApp!",e.classList.remove("hidden");return}t.startsWith("0")?t="62"+t.substring(1):t.startsWith("62")||(t="62"+t),e.className="text-xs font-bold text-[var(--color-primary)] p-2.5 primary-bg-soft rounded-xl",e.textContent="Memuat data kartu member...",e.classList.remove("hidden");try{const s=await O.collection("freshmart").doc("cms_data").collection("customers").doc(t).get();if(s.exists){let a=s.data();if((parseFloat(a.points)||0)===0){const n=await fe(t,a.name);n&&(a=n)}R.set(t,{data:a,timestamp:Date.now()}),D(a);try{localStorage.setItem("freshmart_current_member",JSON.stringify(a)),localStorage.setItem("freshmart_member_wa",t)}catch{}E(),typeof window.showToast=="function"&&window.showToast(`Selamat datang kembali, ${a.name||"Pelanggan"}!`)}else{e.className="text-xs font-bold text-amber-700 dark:text-amber-300 p-3.5 bg-amber-50 dark:bg-amber-900/20 rounded-xl leading-relaxed border border-amber-200 dark:border-amber-800/40 space-y-1.5";const a=(g.store&&g.store.wa||"").replace(/\D/g,""),n=encodeURIComponent(`Halo Admin Toko Putri, saya bermaksud mendaftarkan nomor saya (+${t}) sebagai Member Resmi Toko Putri untuk mendapatkan reward poin dan fasilitas tempo. Mohon bantuannya. Terima kasih.`),o=a?`https://wa.me/${a}?text=${n}`:"#";e.innerHTML=`
                <div class="flex items-center gap-1.5 text-amber-800 dark:text-amber-200 font-extrabold text-[11px]">
                    <i class="fa-solid fa-circle-info text-amber-500"></i>
                    <span>Nomor Belum Terdaftar sebagai Member Resmi</span>
                </div>
                <p class="text-[11px] font-medium text-slate-600 dark:text-slate-300 leading-normal">
                    Nomor <b>+${h(t)}</b> saat ini tercatat sebagai <b>Pelanggan Umum</b>. Fitur Poin Hadiah dan fasilitas pembayaran <b>Cash Tempo</b> hanya dapat digunakan setelah nomor Anda dikonfirmasi & disimpan oleh Admin Toko di database CMS.
                </p>
                ${a?`
                <div class="pt-1">
                    <a href="${o}" target="_blank" class="inline-flex items-center gap-1.5 text-[10px] font-bold text-emerald-600 dark:text-emerald-400 hover:underline">
                        <i class="fa-brands fa-whatsapp text-emerald-500"></i> Hubungi Admin untuk Pendaftaran Member
                    </a>
                </div>`:""}
            `}}catch{e.className="text-xs font-bold text-rose-500 p-2.5 bg-rose-50 dark:bg-rose-900/20 rounded-xl",e.textContent="Gagal mengecek data. Silakan periksa koneksi internet Anda."}},ft=r=>{const e=(g.rewards||[]).find(s=>s.id===r);if(!e)return;if((parseFloat(w?.points)||0)<(parseFloat(e.pointsCost)||0)){typeof window.showToast=="function"&&window.showToast("Poin Anda belum cukup untuk hadiah ini!");return}if((parseFloat(e.stock)||0)<=0){typeof window.showToast=="function"&&window.showToast("Maaf, stok hadiah ini sedang kosong!");return}X({id:e.id,name:e.name,pointsCost:parseFloat(e.pointsCost)||0}),E(),typeof window.showToast=="function"&&window.showToast(`Hadiah "${e.name}" dipilih! Lanjutkan checkout untuk menukarnya.`)},gt=()=>{X(null),E()},Re=(r=!1)=>{const e=document.getElementById("member-modal");if(!e||e.style.display==="none")return;const t=()=>{e.style.opacity="0",e.style.transition="opacity 0.25s ease",setTimeout(()=>{e.style.display="none",e.style.opacity="",e.style.transition=""},250)};typeof window.requestCloseModal=="function"?window.requestCloseModal("member",r,t):t()},ht=()=>{D(null);try{localStorage.removeItem("freshmart_current_member"),localStorage.removeItem("freshmart_member_wa")}catch{}E()};typeof window<"u"&&(window.renderRewardCatalog=pt,window.checkMemberStatus=mt,window.openMemberModal=ut,window.rMemberModalBody=E,window.lookupMemberPoints=bt,window.selectReward=ft,window.deselectReward=gt,window.closeMemberModal=Re,window.flipMemberCard=dt,window.downloadMemberCard=ct,window.getMemberTier=ce,window.formatMemberCardNumber=Be,window.generateBarcodeSVG=Ne,window.setCurrentMember=D,window.logoutMember=ht,window.invalidateMemberCache=lt,window.reconcilePointsFromOrders=fe,window.getMemberPointsHistory=Le,window.loadMemberPointsHistory=De);export{te as G,de as a,ce as g,me as u};
