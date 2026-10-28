import{e as x,g as De,a as y,s as ne,c as ye,b as q,f as v,d as Ye,h as H,i as g,r as Ae,j as X,k,l as se,m as xe,n as W,o as Le,p as h,q as K,t as ee,u as te,v as je,w as j,x as ie,y as ue,z as Ie,A as $e,B as Xe}from"./module-print-CgmifTLn.js";let ge="https://script.google.com/macros/s/AKfycbx3dW9rHcdoKNYjSOJ8PoH2k6fABe7XlBD9teNHsBlCBqJquq8jd4UvnfXZVsfKdFsC/exec";const Re=()=>{x("voucher-input");const s=(De("voucher-input")||"").toUpperCase().trim(),e=(y.vouchers||[]).find(r=>(r.code||"").toUpperCase()===s);ne("voucher-msg-container");const t=typeof window.getEffP=="function"?window.getEffP:r=>r.effectivePrice||r.price||0,a=ye.reduce((r,n)=>r+(parseFloat(t(n))||0)*(parseFloat(n.qty)||0),0);if(e){let r=!0;e.targetProduct&&e.targetProduct!==""&&(r=ye.some(n=>n&&String(n.id)===String(e.targetProduct))),e.targetProduct&&e.targetProduct!==""&&!r?(X(null),q("voucher-msg",'<i class="fa-solid fa-box mr-1"></i> Khusus Produk Tertentu!'),x("voucher-msg")&&(x("voucher-msg").className="text-sm font-bold text-rose-500 dark:text-rose-400")):e.minPurchase&&parseFloat(e.minPurchase)>0&&a<parseFloat(e.minPurchase)?(X(null),q("voucher-msg",`<i class="fa-solid fa-circle-exclamation mr-1"></i> Minimal belanja ${v(e.minPurchase)}`),x("voucher-msg")&&(x("voucher-msg").className="text-sm font-bold text-amber-500 dark:text-amber-400")):e.type&&e.type.includes("shipping")&&Ye.deliveryMethod!=="delivery"?(X(null),q("voucher-msg",'<i class="fa-solid fa-motorcycle mr-1"></i> Khusus pesanan dikirim kurir!'),x("voucher-msg")&&(x("voucher-msg").className="text-sm font-bold text-rose-500 dark:text-rose-400")):(X(e),q("voucher-msg",'<i class="fa-solid fa-check-circle mr-1"></i> Voucher Diterapkan!'),x("voucher-msg")&&(x("voucher-msg").className="text-sm font-bold text-[var(--color-primary)]"))}else s===""?(X(null),H("voucher-msg-container"),typeof window.rPay=="function"&&window.rPay()):(X(null),q("voucher-msg",'<i class="fa-solid fa-times-circle mr-1"></i> Kode Tidak Valid'),x("voucher-msg")&&(x("voucher-msg").className="text-sm font-bold text-rose-500 dark:text-rose-400"));typeof window.rPay=="function"&&window.rPay()},et=()=>{let s=document.getElementById("voucher-modal");s||(s=document.createElement("div"),s.id="voucher-modal",s.className="fixed inset-0 z-[115] bg-slate-900/80 flex items-end sm:items-center justify-center p-0 sm:p-5",s.onclick=a=>{a.target===s&&Pe()},document.body.appendChild(s));const e=(y.vouchers||[]).filter(a=>a.isShow!==!1&&a.isShow!=="false"),t=e.length?e.map(a=>{let r="";a.type==="percent"?r=`Diskon ${a.value}%`:a.type==="shipping_free"?r="Gratis Ongkir":a.type==="shipping_flat"?r=`Diskon Ongkir ${v(a.value)}`:r=`Potongan ${v(a.value)}`;const n=a.minPurchase&&parseFloat(a.minPurchase)>0?`Min. belanja ${v(a.minPurchase)}`:"Tanpa minimal belanja";return`
        <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/80 hover:border-[var(--color-primary)] transition-all shadow-xs">
            <div class="flex items-start gap-3.5 min-w-0">
                <div class="w-11 h-11 rounded-xl bg-[var(--color-primary)] text-white flex items-center justify-center text-lg shrink-0 shadow-sm mt-0.5">
                    <i class="fa-solid fa-ticket"></i>
                </div>
                <div class="min-w-0">
                    <div class="flex flex-wrap items-center gap-2 mb-1.5">
                        <span class="font-extrabold text-sm font-mono tracking-wider text-slate-800 dark:text-white bg-white dark:bg-slate-900 px-2.5 py-0.5 rounded-lg border border-slate-200 dark:border-slate-700 select-all">${g(a.code)}</span>
                        <span class="primary-bg text-white text-[10px] font-bold px-2 py-0.5 rounded-md uppercase whitespace-nowrap shadow-2xs">${r}</span>
                    </div>
                    <p class="text-[11px] font-medium text-slate-500 dark:text-slate-400 flex items-center gap-1.5"><i class="fa-solid fa-circle-check text-[var(--color-primary)] text-xs"></i> ${n}</p>
                </div>
            </div>
            <div class="flex items-center gap-2 shrink-0 pt-2 md:pt-0 border-t md:border-t-0 border-slate-200 dark:border-slate-700">
                <button type="button" onclick="copyVoucherCode('${g(a.code)}')" class="flex-1 md:flex-initial bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] text-xs font-bold uppercase tracking-wider px-3.5 py-2 rounded-xl transition-all active:scale-95 flex items-center justify-center gap-1.5 shadow-2xs">
                    <i class="fa-regular fa-copy"></i> Salin
                </button>
                <button type="button" onclick="useVoucherCode('${g(a.code)}')" class="flex-1 md:flex-initial primary-bg text-white text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-xl transition-all active:scale-95 flex items-center justify-center gap-1.5 shadow-sm">
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
    `;s.innerHTML=`
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
        </div>`,s.style.opacity="0",s.style.display="flex",requestAnimationFrame(()=>{s.style.transition="opacity 0.25s ease",s.style.opacity="1"}),typeof window.pushModalHistory=="function"&&window.pushModalHistory("voucher")},tt=s=>{navigator.clipboard&&navigator.clipboard.writeText?navigator.clipboard.writeText(s).then(()=>{typeof window.showToast=="function"&&window.showToast(`Kode "${s}" disalin ke clipboard!`)}).catch(()=>{typeof window.showToast=="function"&&window.showToast(`Kode Kupon: ${s}`)}):typeof window.showToast=="function"&&window.showToast(`Kode Kupon: ${s}`)},at=s=>{Pe();const e=x("voucher-input");e&&(e.value=s,Re()),ye.length>0?typeof window.changeView=="function"&&window.changeView("view-checkout"):(typeof window.showToast=="function"&&window.showToast(`Kode "${s}" siap digunakan saat checkout belanja!`),typeof window.changeView=="function"&&window.changeView("view-catalog"))},Pe=(s=!1)=>{const e=()=>{const t=document.getElementById("voucher-modal");!t||t.style.display==="none"||(t.style.opacity="0",t.style.transition="opacity 0.25s ease",setTimeout(()=>{t.style.display="none",t.style.opacity="",t.style.transition=""},250))};typeof Ae=="function"?Ae("voucher",s,e):typeof window.requestCloseModal=="function"?window.requestCloseModal("voucher",s,e):e()};window.applyVoucher=Re;window.openVoucherModal=et;window.closeVoucherModal=Pe;window.copyVoucherCode=tt;window.useVoucherCode=at;const de="B7qgwFQqtYLpBqdaK69HgtCfR7s5t67p",st=20*1024*1024,rt=["video/mp4","video/webm","video/quicktime","video/x-msvideo","video/3gpp"],_e=["image/jpeg","image/png","image/webp","image/gif"],nt=async(s,e,t=null)=>{const a=s.files[0];if(!a)return;const r=a.type==="image/gif"||/\.gif$/i.test(a.name||""),n=r?"image/gif":a.type||"image/jpeg";if(!_e.includes(n)&&!r)return s.value="",k("Hanya file JPG, PNG, WEBP, atau GIF yang diizinkan!");const i=r?8*1024*1024:3*1024*1024,c=r?"8MB":"3MB";if(a.size>i)return s.value="",k(`Maksimal ukuran file ${c} (GIF animasi maks 8MB)!`);const l=window.GAS_UPLOAD_URL||ge;if(l.includes("ISI_DENGAN"))return s.value="",k("URL Script Google belum diisi!");se("Upload Gambar...");const u=new FileReader;u.readAsDataURL(a),u.onload=async()=>{try{const m=u.result.split(",")[1],f=a.name.replace(/[^a-zA-Z0-9.]/g,"_"),o={name:"POS_"+Date.now()+"_"+f,mimeType:n,data:m,token:de},p=await(await fetch(l,{method:"POST",body:JSON.stringify(o),headers:{"Content-Type":"text/plain;charset=utf-8"},redirect:"follow"})).text();let w;try{w=JSON.parse(p)}catch{return k("Error Server!")}if(w.status==="success"){const M=xe(w.url,n),I=x(e);I&&(I.value=M,I.dispatchEvent(new Event("input",{bubbles:!0})),I.dispatchEvent(new Event("change",{bubbles:!0})),t!==null&&typeof window.uVar=="function"&&window.uVar(t,"img",M),k("Gambar diupload!"))}else k("Gagal: "+(w.message||"Error"))}catch{k("Koneksi terputus saat upload.")}finally{W(),s.value=""}},u.onerror=()=>{k("Gagal membaca file!"),W(),s.value=""}},it=async(s,e)=>{const t=s.files[0];if(!t)return;if(!rt.includes(t.type))return s.value="",k("Hanya file MP4, WEBM, MOV, atau AVI yang diizinkan!");if(t.size>st)return s.value="",k("Video terlalu besar! Maksimal 20MB.");const a=window.GAS_UPLOAD_URL||ge;if(a.includes("ISI_DENGAN"))return s.value="",k("URL Script Google belum diisi di Pengaturan!");se("Upload Video... (harap tunggu)");const r=new FileReader;r.readAsDataURL(t),r.onload=async()=>{try{const n=r.result.split(",")[1],i=t.name.replace(/[^a-zA-Z0-9.]/g,"_"),c={name:"VID_"+Date.now()+"_"+i,mimeType:t.type,data:n,token:de},u=await(await fetch(a,{method:"POST",body:JSON.stringify(c),headers:{"Content-Type":"text/plain;charset=utf-8"},redirect:"follow"})).text();let m;try{m=JSON.parse(u)}catch{return k("Error Server GAS!")}if(m.status==="success"){const f="https://drive.google.com/file/d/"+m.fileId+"/preview",o=x(e);o&&(o.value=f,o.dispatchEvent(new Event("input",{bubbles:!0})),o.dispatchEvent(new Event("change",{bubbles:!0})),k("Video berhasil diupload ke Drive!"))}else k("Gagal upload: "+(m.message||"Error"))}catch{k("Koneksi terputus saat upload video.")}finally{W(),s.value=""}},r.onerror=()=>{k("Gagal membaca file video!"),W(),s.value=""}},ot=async(s,e)=>{const t=s.files[0];if(!t)return;const a=t.type==="image/gif"||/\.gif$/i.test(t.name||""),r=a?"image/gif":t.type||"image/jpeg";if(!_e.includes(r)&&!a)return s.value="",k("Hanya file JPG, PNG, WEBP, atau GIF yang diizinkan!");const n=a?8*1024*1024:3*1024*1024;if(t.size>n)return s.value="",k(`Maksimal gambar ${a?"8MB (GIF)":"3MB"}!`);const i=window.GAS_UPLOAD_URL||ge;if(i.includes("ISI_DENGAN"))return s.value="",k("URL Script Google belum diisi!");se("Menyisipkan Gambar...");const c=new FileReader;c.readAsDataURL(t),c.onload=async()=>{try{const l=c.result.split(",")[1],u=t.name.replace(/[^a-zA-Z0-9.]/g,"_"),m={name:"RTE_"+Date.now()+"_"+u,mimeType:t.type,data:l,token:de},o=await(await fetch(i,{method:"POST",body:JSON.stringify(m),headers:{"Content-Type":"text/plain;charset=utf-8"},redirect:"follow"})).text();let d;try{d=JSON.parse(o)}catch{return k("Error Server!")}if(d.status==="success"){const p=xe(d.url),w=x(e);w&&(w.focus(),document.execCommand("insertHTML",!1,`<br><img loading="lazy" src="${p}" style="max-width:100%; border-radius:12px; margin: 10px 0; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);" ><br>`)),k("Gambar berhasil disisipkan!")}else k("Gagal upload gambar.")}catch{k("Gagal koneksi.")}finally{W(),s.value=""}},c.onerror=()=>{k("Gagal membaca file!"),W(),s.value=""}},we=async(s,e="BUKTI")=>{if(!s)return null;const t=window.GAS_UPLOAD_URL||y&&y.config&&y.config.gasUrl||ge;if(!t||t.includes("ISI_DENGAN"))return console.warn("[GAS Upload] GAS_UPLOAD_URL belum dikonfigurasi."),null;try{let a=null,r="bukti.jpg";if(typeof s=="string"?(s.startsWith("data:")?a=s.split(",")[1]:a=s,r=`${e}_${Date.now()}.jpg`):(s instanceof Blob||s instanceof File)&&(r=(s.name||"bukti.jpg").replace(/[^a-zA-Z0-9.]/g,"_"),a=await new Promise((u,m)=>{const f=new FileReader;f.onload=o=>{const d=new Image;d.onload=()=>{let{width:w,height:M}=d;(w>1200||M>1200)&&(w>M?(M=Math.round(M*1200/w),w=1200):(w=Math.round(w*1200/M),M=1200));const I=document.createElement("canvas");I.width=w,I.height=M,I.getContext("2d").drawImage(d,0,0,w,M);const E=I.toDataURL("image/jpeg",.82);u(E.split(",")[1])},d.onerror=()=>{const p=(o.target.result||"").toString();u(p.split(",")[1]||"")},d.src=o.target.result},f.onerror=m,f.readAsDataURL(s)})),!a)return null;const n={name:`${e}_${Date.now()}_${r}`,mimeType:"image/jpeg",data:a,token:de},i=await fetch(t,{method:"POST",body:JSON.stringify(n),headers:{"Content-Type":"text/plain;charset=utf-8"},redirect:"follow"});if(!i.ok)return console.warn(`[GAS Upload] HTTP error: ${i.status}`),null;const c=await i.text();let l;try{l=JSON.parse(c)}catch{return console.warn("[GAS Upload] Parse response error:",c),null}return l&&l.status==="success"&&l.url?(console.info("[GAS Upload] Sukses diunggah ke Google Drive:",l.url),xe(l.url)):(console.warn("[GAS Upload] Server message:",l&&l.message),null)}catch(a){return console.warn("[GAS Upload] Upload exception:",a),null}};typeof window<"u"&&(window.GAS_SECRET_TOKEN=de,window.handleImageUpload=nt,window.handleVideoUpload=it,window.handleRTEditorImage=ot,window.uploadImageFileToDrive=we,window.uploadBuktiToGDrive=we);let _=null,J="bank",ae=null,oe=null,ke=[];const Ee=()=>{let s=(y.payment?.qrisUrl||y.payment?.qris||y.store?.qrisUrl||y.store?.qris||y.qrisUrl||"").trim();if(!s)try{const e=JSON.parse(localStorage.getItem("freshmart_cms_data")||"{}");s=(e.payment?.qrisUrl||e.payment?.qris||e.store?.qrisUrl||e.store?.qris||"").trim()}catch{}return s?xe(s):""},lt=s=>{if(!s)return;const e=String(s).trim();navigator.clipboard&&navigator.clipboard.writeText?navigator.clipboard.writeText(e).then(()=>{k("Nomor rekening "+e+" berhasil disalin!","success")}).catch(()=>{prompt("Salin nomor rekening:",e)}):prompt("Salin nomor rekening:",e)},dt=(s,e=700,t=.6)=>new Promise(a=>{if(!s||!s.type.startsWith("image/"))return a(null);const r=new FileReader;r.readAsDataURL(s),r.onload=n=>{const i=new Image;i.onload=()=>{let{width:c,height:l}=i;(c>e||l>e)&&(c>l?(l=Math.round(l*e/c),c=e):(c=Math.round(c*e/l),l=e));const u=document.createElement("canvas");u.width=c,u.height=l,u.getContext("2d").drawImage(i,0,0,c,l);const f=u.toDataURL("image/jpeg",t);a(f)},i.onerror=()=>a(n.target.result),i.src=n.target.result},r.onerror=()=>a(null)}),ct=()=>{let s=x("modal-client-tempo-pay");if(!s){const e=document.createElement("div");e.id="modal-client-tempo-pay",e.onclick=t=>{t.target===e&&be()},e.innerHTML=`
            <div id="modal-client-tempo-pay-box" class="bg-white dark:bg-slate-900 w-full sm:max-w-lg rounded-t-[2.25rem] sm:rounded-3xl max-h-[92dvh] sm:max-h-[88vh] flex flex-col shadow-2xl border border-slate-200/80 dark:border-slate-800 overflow-hidden pointer-events-auto transform translate-y-full sm:translate-y-6 transition-transform duration-300" onclick="event.stopPropagation()">
                <!-- Isi Modal dirender reaktif oleh openClientPaymentModal() -->
            </div>
        `,document.body.appendChild(e),s=e}s.className="fixed inset-0 z-[140] flex items-end sm:items-center justify-center p-0 sm:p-4 bg-slate-900/80 transition-opacity duration-300 opacity-0 pointer-events-none",s.style.zIndex="140"},fe=()=>{const s=[];Array.isArray(ee)&&ee.length&&s.push(...ee),Array.isArray(te)&&te.length&&s.push(...te);try{const r=localStorage.getItem("freshmart_my_orders");if(r){const n=JSON.parse(r);Array.isArray(n)&&s.push(...n)}}catch{}const e=new Set,t=s.filter(r=>!r||!r.orderId||e.has(r.orderId)?!1:(e.add(r.orderId),!0)),a=(h?.phone||h?.id||"").toString().replace(/\D/g,"");return t.filter(r=>{if(!!!(r.isTempo||r.payment?.isPaylater||r.payment?.subMethod==="paylater"||r.payment?.method==="tempo")||r.status==="Batal"||r.payment?.paymentStatus==="lunas")return!1;const i=parseFloat(r.payment?.tempoBalance);if(isNaN(i)||i<=0)return!1;if(a){const c=(r.customer?.phone||r.customer?.wa||"").toString().replace(/\D/g,"");if(c&&!(c===a||c.endsWith(a)||a.endsWith(c)))return!1}return!0})},pt=async(s=null)=>{try{let e=[];try{const r=localStorage.getItem("freshmart_pending_confirmations");if(r){const n=JSON.parse(r);Array.isArray(n)&&(e=n)}}catch{}const t=(h?.phone||h?.id||"").toString().replace(/\D/g,"");let a=!1;if(t)try{const r=await K.collection("tempo_payment_confirmations").where("customerPhone","==",t).where("status","==","pending").get();if(a=!0,r.empty){e=[];try{localStorage.setItem("freshmart_pending_confirmations",JSON.stringify([]))}catch{}}else{const n=[];r.forEach(i=>n.push({id:i.id,...i.data()})),e=n;try{localStorage.setItem("freshmart_pending_confirmations",JSON.stringify(e))}catch{}}}catch(r){r?.code!=="permission-denied"&&!r?.message?.includes("permission")&&console.warn("[ClientPay] Query pending list ditolak/offline:",r?.message||r)}if(!a&&e.length>0)try{const r=[];for(const n of e){const i=n.confirmId||n.id;if(i)try{const c=await K.collection("tempo_payment_confirmations").doc(i).get();if(c.exists){const l=c.data();l.status==="pending"&&r.push({id:c.id,...l})}}catch{n.status==="pending"&&r.push(n)}}e=r;try{localStorage.setItem("freshmart_pending_confirmations",JSON.stringify(e))}catch{}}catch{}return ke=e,s?e.filter(r=>r.orderId===s):e}catch(e){return e?.code!=="permission-denied"&&!e?.message?.includes("permission")&&console.warn("[ClientPay] Gagal muat konfirmasi pending:",e),ke||[]}},mt=async(s=null,e=null)=>{ct();const t=x("modal-client-tempo-pay"),a=x("modal-client-tempo-pay-box");if(!t||!a)return;t.classList.remove("z-[110]"),t.classList.add("z-[140]"),t.style.zIndex="140";const r=fe();if(!r.length){k("Tidak ada tagihan atau angsuran tempo aktif yang perlu dibayar.","info");return}_=(s?r.find(n=>n.orderId===s):null)||r[0],J="bank",ae=null,oe=null,Fe(r,e),document.body.classList.add("overflow-hidden"),typeof window.pushModalHistory=="function"&&window.pushModalHistory("clientTempoPay"),Le(t,a),pt(_.orderId).then(n=>{if(t&&!t.classList.contains("hidden")&&!t.classList.contains("opacity-0")){const i=(n||[]).filter(l=>l.orderId===_?.orderId&&l.status==="pending").reduce((l,u)=>l+(parseFloat(u.amount)||0),0),c=x("client-pay-pending-banner-wrap");c&&(i>0?(c.innerHTML=`
                    <div class="p-4 sm:p-5 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-300 dark:border-amber-800/60 flex items-start sm:items-center gap-3 text-amber-800 dark:text-amber-200 shadow-2xs">
                        <i class="fa-solid fa-hourglass-half text-amber-500 text-base shrink-0 mt-0.5 sm:mt-0"></i>
                        <div class="min-w-0 flex-1">
                            <p class="font-bold text-xs sm:text-sm">Ada Pengajuan Pembayaran Sedang Diverifikasi: <b class="font-mono text-amber-900 dark:text-amber-100">${v(i)}</b></p>
                            <p class="text-[11px] text-amber-700/80 dark:text-amber-300/80 mt-1 leading-relaxed">Admin toko sedang memeriksa mutasi rekening Anda. Limit kredit belanja Anda akan otomatis pulih segera setelah diverifikasi.</p>
                        </div>
                    </div>`,ne(c)):H(c))}}).catch(n=>{n?.code!=="permission-denied"&&!n?.message?.includes("permission")&&console.warn("[ClientPay] Background pending load error:",n)})},be=(s=!1)=>{const e=()=>{const t=x("modal-client-tempo-pay"),a=x("modal-client-tempo-pay-box");!t||!a||je(t,a,()=>{t.classList.add("pointer-events-none"),a.classList.remove("pointer-events-auto"),document.querySelector('[id*="modal"]:not(.hidden):not(.pointer-events-none):not(#modal-client-tempo-pay)')||document.body.classList.remove("overflow-hidden")})};typeof window.requestCloseModal=="function"?window.requestCloseModal("clientTempoPay",s,e):e()},Fe=(s,e=null)=>{const t=x("modal-client-tempo-pay-box");if(!t)return;const a=_,r=!!(a.payment?.isPaylater||a.isPaylater||a.payment?.subMethod==="paylater"),n=Math.max(0,parseFloat(a.payment?.tempoBalance)||0),i=Array.isArray(a.payment?.paylaterSchedule)&&a.payment.paylaterSchedule.length>0?a.payment.paylaterSchedule:null,l=(a.payment?.installments||[]).reduce((b,R)=>b+(parseFloat(R.amount)||0),0);parseInt(a.payment?.paylaterMonths)||(i?i.length:a.payment?.paylaterTenor==="2m"||a.payment?.paylaterTenor);const u=r?a.payment?.paylaterTenor==="2m"?"2 Bulan":a.payment?.paylaterTenor==="3m"?"3 Bulan":"30 Hari":"Tempo Toko";let m=0,f="-",o=0,d=1,p=!1;const w=[];if(i&&i.length>0){let b=0,R=!1;i.forEach((A,Q)=>{const Y=A.installmentIndex||A.installmentNo||A.installmentNumber||A.month||Q+1,V=parseFloat(A.pokok||A.principal)||0,F=parseFloat((A.adminFee||0)+(A.serviceFee||0))||0,re=parseFloat(A.total||A.totalMonthly||A.totalInstallment)||V+F;b+=re;const ce=b,G=A.dueDate||0,pe=A.dueDateFormatted||A.dueDateStr||(G?new Date(G).toLocaleDateString("id-ID",{day:"numeric",month:"short",year:"numeric"}):"-");let me="upcoming",Se=0;l>=ce?me="paid":R?me="upcoming":(R=!0,me="current",d=Y,f=pe,o=G,p=G&&Date.now()>G,Se=Math.max(0,ce-l),m=Math.min(Se,re)),w.push({monthIndex:Y,dueStr:pe,dueTime:G,pokok:V,fee:F,total:re,statusType:me})}),R||(m=n)}else m=n,o=a.payment?.tempoDueDate||0,f=o?new Date(o).toLocaleDateString("id-ID",{day:"numeric",month:"short",year:"numeric"}):"-",p=o&&Date.now()>o;const M=e&&e>0?Math.min(n,e):m>0&&m<n?m:n,B=ke.filter(b=>b.orderId===a.orderId&&b.status==="pending").reduce((b,R)=>b+(parseFloat(R.amount)||0),0);let P=(Array.isArray(y.banks)?y.banks:[]).filter(b=>b&&(b.bankName||b.bank||b.bankAccount||b.number));P.length===0&&y.store?.bankName&&(y.store?.bankAccount||y.store?.bankNumber)&&(P=[{bankName:y.store.bankName,bankAccount:y.store.bankAccount||y.store.bankNumber,bankOwner:y.store.bankOwner||y.store.name||"Toko Putri"}]),P.length===0&&(P=[{bankName:"BCA",bankAccount:"1234567890",bankOwner:y.store?.name||"Toko Putri"}]);const T=Ee();t.innerHTML=`
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
            <div id="client-pay-pending-banner-wrap" class="${B>0?"block":"hidden"}">
                ${B>0?`
                <div class="p-4 sm:p-5 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-300 dark:border-amber-800/60 flex items-start sm:items-center gap-3 text-amber-800 dark:text-amber-200 shadow-2xs">
                    <i class="fa-solid fa-hourglass-half text-amber-500 text-base shrink-0 mt-0.5 sm:mt-0"></i>
                    <div class="min-w-0 flex-1">
                        <p class="font-bold text-xs sm:text-sm">Ada Pengajuan Pembayaran Sedang Diverifikasi: <b class="font-mono text-amber-900 dark:text-amber-100">${v(B)}</b></p>
                        <p class="text-[11px] text-amber-700/80 dark:text-amber-300/80 mt-1 leading-relaxed">Admin toko sedang memeriksa mutasi rekening Anda. Limit kredit belanja Anda akan otomatis pulih segera setelah diverifikasi.</p>
                    </div>
                </div>
                `:""}
            </div>

            <!-- PILIH NOTA PESANAN (JIKA LEBIH DARI 1) -->
            ${s.length>1?`
            <div class="space-y-2">
                <label class="block text-[10px] font-black uppercase tracking-wider text-slate-500 dark:text-slate-400">Pilih Nota Tagihan</label>
                <select id="client-pay-order-select" onchange="window.switchClientPaymentOrder(this.value)" class="admin-input bg-slate-50 dark:bg-slate-900 rounded-2xl font-bold cursor-pointer h-12 text-xs">
                    ${s.map(b=>`
                        <option value="${b.orderId}" ${b.orderId===a.orderId?"selected":""}>
                            Nota #${b.orderId} — Sisa: ${v(b.payment?.tempoBalance||0)} (${b.payment?.isPaylater?"PayLater":"Tempo"})
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
                            <span class="font-mono font-bold text-slate-800 dark:text-slate-200 text-sm">Nota #${g(a.orderId)}</span>
                            <span class="px-2 py-0.5 rounded-full text-[9px] font-black uppercase tracking-wider bg-[rgba(var(--color-primary-rgb),0.12)] text-[var(--color-primary)] font-bold">
                                ${g(u)}
                            </span>
                        </div>
                        <span class="text-[11px] text-slate-500 dark:text-slate-400 font-medium">Total: ${v(a.payment?.grandTotal||a.total||n)}</span>
                    </div>

                    ${w.length>1?`
                    <!-- HIGHLIGHT UTAMA: TAGIHAN BULAN INI -->
                    <div class="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-800 text-emerald-900 dark:text-emerald-100 space-y-1.5 shadow-2xs">
                        <div class="flex items-center justify-between flex-wrap gap-1">
                            <span class="text-[10px] font-black uppercase tracking-wider text-emerald-800 dark:text-emerald-300 flex items-center gap-1.5">
                                <i class="fa-solid fa-calendar-check text-emerald-600"></i> Angsuran Bulan Ini (Termin Ke-${d} dari ${w.length})
                            </span>
                            <span class="px-2 py-0.5 rounded-md text-[9.5px] font-black font-mono ${p?"bg-rose-100 text-rose-700 border border-rose-300":"bg-emerald-200/70 dark:bg-emerald-800/70 text-emerald-900 dark:text-emerald-100"}">
                                ${p?"Lewat Jatuh Tempo":"Jatuh Tempo: "+f}
                            </span>
                        </div>
                        <div class="flex items-baseline justify-between pt-1">
                            <span class="text-xs font-bold text-emerald-700 dark:text-emerald-300">Wajib Dibayar:</span>
                            <span class="font-mono font-black text-2xl text-emerald-900 dark:text-white tracking-tight">${v(m)}</span>
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
                                ${w.map(b=>`
                                    <div class="p-2.5 sm:p-3 flex items-center justify-between gap-2 ${b.statusType==="paid"?"bg-slate-50/50 dark:bg-slate-800/20 opacity-60":b.statusType==="current"?"bg-emerald-50/30 dark:bg-emerald-950/20 font-bold":""}">
                                        <div class="min-w-0">
                                            <p class="font-bold text-slate-800 dark:text-slate-200 text-xs">Bulan Ke-${b.monthIndex}</p>
                                            <p class="text-[10px] text-slate-400 font-mono mt-0.5">Jatuh Tempo: ${b.dueStr}</p>
                                        </div>
                                        <div class="text-right shrink-0">
                                            <p class="font-mono font-black text-xs sm:text-sm text-slate-900 dark:text-white">${v(b.total)}</p>
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
                        <span class="font-mono font-black text-slate-800 dark:text-slate-200 text-sm">${v(n)}</span>
                    </div>
                    `:`
                    <!-- SINGLE TEMPO / 1 BULAN -->
                    <div class="pt-2.5 border-t border-slate-200/60 dark:border-slate-700/60 space-y-2">
                        <div class="flex items-center justify-between text-xs">
                            <span class="text-slate-500 dark:text-slate-400 font-bold">Tanggal Jatuh Tempo:</span>
                            <span class="font-mono font-bold ${p?"text-rose-600":"text-slate-800 dark:text-slate-200"}">${f}</span>
                        </div>
                        <div class="flex items-center justify-between text-xs pt-1">
                            <span class="text-slate-500 dark:text-slate-400 font-bold">Sisa Tagihan Wajib Bayar:</span>
                            <span class="text-base sm:text-lg font-black font-mono text-rose-600 dark:text-rose-400">${v(n)}</span>
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
                <div class="grid ${w.length>1&&m>0&&m<n?"grid-cols-3":"grid-cols-2"} gap-2">
                    ${w.length>1&&m>0&&m<n?`
                    <button type="button" onclick="window.setClientPayAmount(${m}, 'angsuran')" class="p-2.5 sm:p-3 rounded-2xl border-2 border-[var(--color-primary)] bg-[rgba(var(--color-primary-rgb),0.08)] dark:bg-[rgba(var(--color-primary-rgb),0.15)] text-[var(--color-primary)] font-bold text-xs text-left active:scale-95 transition-all shadow-xs relative overflow-hidden flex flex-col justify-between">
                        <span class="block text-[8.5px] uppercase tracking-wider font-extrabold text-[var(--color-primary)] truncate">Bulan Ini</span>
                        <span class="font-mono font-black text-xs sm:text-sm mt-1 block truncate">${v(m)}</span>
                        <span class="block text-[8px] opacity-75 mt-0.5 font-medium truncate">Termin Ke-${d}</span>
                    </button>
                    `:""}
                    <button type="button" onclick="window.setClientPayAmount(${n}, 'pelunasan')" class="p-2.5 sm:p-3 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-750 text-slate-700 dark:text-slate-200 font-bold text-xs text-left active:scale-95 transition-all shadow-2xs flex flex-col justify-between">
                        <span class="block text-[8.5px] uppercase tracking-wider text-slate-400 font-extrabold truncate">Pelunasan</span>
                        <span class="font-mono font-black text-xs sm:text-sm mt-1 block truncate">${v(n)}</span>
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
                        <input type="number" id="client-pay-amount-input" min="1000" max="${n}" value="${M}" class="w-full h-12 px-4 bg-transparent text-slate-900 dark:text-white font-black font-mono text-base sm:text-lg focus:outline-none" placeholder="0">
                    </div>
                    <p class="text-[10px] text-slate-400 leading-relaxed">
                        Default terisi nominal <b>Angsuran Bulan Ini (${v(M)})</b>. Anda juga dapat memilih Pelunasan Penuh di atas jika ingin melunasi seluruhnya sekaligus.
                    </p>
                </div>
            </div>

            <!-- PILIH SALURAN PEMBAYARAN TOKO (BANK VS QRIS) -->
            <div class="space-y-3.5 pt-3 border-t border-slate-200/60 dark:border-slate-700/60">
                <label class="block text-[10px] font-black uppercase tracking-wider text-slate-500 dark:text-slate-400">Saluran Pembayaran Resmi Toko Putri *</label>
                
                <div class="grid grid-cols-2 gap-2 p-1.5 rounded-2xl bg-slate-100 dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700">
                    <button type="button" onclick="window.switchClientPayChannel('bank')" id="tab-btn-client-bank" class="py-2.5 rounded-xl text-xs font-black transition-all ${J==="bank"?"bg-white dark:bg-slate-900 shadow-xs text-slate-900 dark:text-white":"text-slate-500 hover:text-slate-800"}">
                        <i class="fa-solid fa-building-columns mr-1.5"></i> Transfer Bank
                    </button>
                    <button type="button" onclick="window.switchClientPayChannel('qris')" id="tab-btn-client-qris" class="py-2.5 rounded-xl text-xs font-black transition-all ${J==="qris"?"bg-white dark:bg-slate-900 shadow-xs text-slate-900 dark:text-white":"text-slate-500 hover:text-slate-800"}">
                        <i class="fa-solid fa-qrcode mr-1.5"></i> QRIS Toko
                    </button>
                </div>

                <!-- CONTAINER CHANNEL BANK -->
                <div id="client-pay-channel-bank" class="${J==="bank"?"block":"hidden"} space-y-3">
                    <p class="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed">Silakan transfer nominal di atas ke salah satu rekening resmi Toko Putri:</p>
                    <div class="space-y-2.5">
                        ${P.map(b=>{const R=b.bankName||b.bank||"BANK",A=b.bankAccount||b.number||"-",Q=b.bankOwner||b.name||y.store?.name||"Toko Putri";return`
                            <div class="p-3.5 sm:p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700 flex items-center justify-between gap-3 shadow-2xs">
                                <div class="min-w-0 flex-1">
                                    <div class="flex items-center gap-2">
                                        <span class="px-2 py-0.5 rounded-lg text-[9.5px] font-black uppercase bg-blue-100 dark:bg-blue-900/60 text-blue-700 dark:text-blue-300 font-mono shrink-0">${g(R)}</span>
                                        <span class="text-xs font-bold text-slate-800 dark:text-white truncate">${g(Q)}</span>
                                    </div>
                                    <p class="font-mono text-base sm:text-lg font-black text-slate-900 dark:text-slate-100 tracking-wider mt-1 truncate">${g(A)}</p>
                                </div>
                                <button type="button" onclick="window.copyAccountNumber('${g(A)}')" class="h-10 px-3.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 hover:bg-slate-100 text-slate-700 dark:text-slate-200 text-xs font-bold flex items-center justify-center gap-1.5 active:scale-95 transition-all shadow-2xs shrink-0 cursor-pointer">
                                    <i class="fa-regular fa-copy text-xs"></i> <span>Salin</span>
                                </button>
                            </div>`}).join("")}
                    </div>
                </div>

                <!-- CONTAINER CHANNEL QRIS -->
                <div id="client-pay-channel-qris" class="${J==="qris"?"block":"hidden"} space-y-3.5 text-center">
                    <p class="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed">Scan QRIS toko di bawah menggunakan BCA Mobile, Livin, GoPay, OVO, DANA, ShopeePay, atau m-Banking apa pun:</p>
                    ${T?`
                        <div class="inline-block p-4 sm:p-5 rounded-3xl bg-white border border-slate-200 dark:border-slate-700 shadow-sm mx-auto">
                            <img id="client-pay-qris-img" src="${g(T)}" alt="QRIS Resmi Toko Putri" 
                                 class="w-56 h-56 sm:w-64 sm:h-64 object-contain mx-auto rounded-2xl"
                                 loading="eager"
                                 onerror="if(!this.dataset.retried){this.dataset.retried=1;const id=(this.src.match(/(?:id=|\\/d\\/)([a-zA-Z0-9_-]+)/)||[])[1];if(id){this.src='https://drive.google.com/uc?export=view&id='+id;}}else if(this.dataset.retried==1){this.dataset.retried=2;const id=(this.src.match(/(?:id=|\\/d\\/)([a-zA-Z0-9_-]+)/)||[])[1];if(id){this.src='https://drive.google.com/thumbnail?id='+id+'&sz=w800';}}">
                        </div>
                        <div class="flex items-center justify-center gap-2">
                            <a href="${g(T)}" target="_blank" rel="noopener noreferrer" download="QRIS_Toko_Putri.jpg" class="inline-flex items-center gap-1.5 text-xs font-bold text-[var(--color-primary)] hover:underline py-1.5 px-3 rounded-xl bg-[rgba(var(--color-primary-rgb),0.06)]">
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
            <button type="button" id="client-pay-submit-btn" onclick="window.submitClientPaymentConfirmation()" class="neo-btn h-12 px-6 rounded-xl text-white font-bold text-xs cursor-pointer flex items-center gap-2" style="background: var(--color-primary);">
                <i class="fa-solid fa-paper-plane text-xs"></i>
                <span>Kirim Konfirmasi Pembayaran</span>
            </button>
        </div>
    `},ut=s=>{const e=fe(),t=e.find(a=>a.orderId===s);t&&(_=t,Fe(e))},ft=s=>{J=s;const e=x("tab-btn-client-bank"),t=x("tab-btn-client-qris"),a=x("client-pay-channel-bank"),r=x("client-pay-channel-qris");if(s==="bank")e&&(e.className="py-2.5 rounded-xl text-xs font-black transition-all bg-white dark:bg-slate-900 shadow-xs text-slate-900 dark:text-white"),t&&(t.className="py-2.5 rounded-xl text-xs font-black transition-all text-slate-500 hover:text-slate-800"),a&&a.classList.remove("hidden"),r&&r.classList.add("hidden");else{if(t&&(t.className="py-2.5 rounded-xl text-xs font-black transition-all bg-white dark:bg-slate-900 shadow-xs text-slate-900 dark:text-white"),e&&(e.className="py-2.5 rounded-xl text-xs font-black transition-all text-slate-500 hover:text-slate-800"),r){r.classList.remove("hidden");const n=x("client-pay-qris-img");if(n&&(!n.src||n.src.includes("placeholder"))){const i=Ee();i&&(n.src=i)}}a&&a.classList.add("hidden")}},bt=(s,e="angsuran")=>{const t=x("client-pay-amount-input");t&&(t.value=s,t.focus())},xt=()=>{const s=x("client-pay-amount-input");s&&(s.focus(),s.select())},gt=async s=>{const e=s.target.files&&s.target.files[0];if(e){se("Memproses foto bukti transfer...");try{oe=e;const t=await dt(e);ae=t;const a=x("client-pay-proof-preview-wrap"),r=x("client-pay-proof-img"),n=x("client-pay-proof-placeholder");r&&t&&(r.src=t),a&&a.classList.remove("hidden"),n&&n.classList.add("hidden")}catch(t){console.warn("Gagal memproses gambar:",t),k("Gagal memproses foto bukti transfer!","error")}finally{W()}}},ht=()=>{oe=null,ae=null;const s=x("client-pay-proof-input");s&&(s.value="");const e=x("client-pay-proof-preview-wrap"),t=x("client-pay-proof-placeholder"),a=x("client-pay-proof-img");a&&(a.src=""),e&&e.classList.add("hidden"),t&&t.classList.remove("hidden")},yt=async()=>{if(!_)return k("Pilih nota pesanan yang ingin dibayar!","error");const s=x("client-pay-amount-input"),e=parseFloat(s?.value)||0,t=Math.max(0,parseFloat(_.payment?.tempoBalance)||0);if(e<=0)return k("Masukkan nominal pembayaran yang valid!","error");if(e>t+100)return k("Nominal pembayaran melebihi sisa tagihan ("+v(t)+")!","error");if(!ae&&!oe)return k("Wajib melampirkan foto / screenshot bukti transfer!","error");const a=x("client-pay-submit-btn");a&&(a.disabled=!0,a.innerHTML='<i class="fa-solid fa-spinner fa-spin mr-1"></i> Mengunggah ke Drive...');try{let r=ae;const n=oe||ae;if(n)try{se("Mengupload bukti transfer ke Google Drive...");const p=await we(n,"BUKTI_CICILAN_"+_.orderId);p?(r=p,console.info("[ClientPay] Bukti pembayaran berhasil diunggah ke Google Drive:",p)):console.warn("[ClientPay] Upload GAS mengembalikan null, menggunakan fallback data lokal.")}catch(p){console.warn("[ClientPay] GDrive upload fallback ke gambar terkompresi lokal:",p)}se("Menyimpan konfirmasi pembayaran...");const i=(h?.phone||h?.id||_.customer?.phone||_.customer?.wa||"").toString().replace(/\D/g,""),c=i.startsWith("0")?"62"+i.substring(1):i,l=h?.name||_.customer?.name||"Pelanggan",u="CONF-"+Date.now().toString(36).toUpperCase()+"-"+Math.random().toString(36).substring(2,6).toUpperCase(),m=y.banks&&y.banks[0]?y.banks[0].bankName:"Transfer Bank",f=(x("client-pay-notes-input")?.value||"").trim(),o={confirmId:u,orderId:_.orderId,customerPhone:c,customerName:l,amount:e,channel:J,bankName:J==="bank"?m:"QRIS Toko",buktiUrl:r,notes:f,createdAt:Date.now(),status:"pending"};await K.collection("tempo_payment_confirmations").doc(u).set(o);let d=[];try{const p=localStorage.getItem("freshmart_pending_confirmations");p&&(d=JSON.parse(p)||[])}catch{}d.unshift(o);try{localStorage.setItem("freshmart_pending_confirmations",JSON.stringify(d))}catch{}W(),be(),typeof window.rMemberModalBody=="function"&&window.rMemberModalBody(),setTimeout(()=>{He({orderId:_?.orderId||"",amount:e})},250)}catch(r){console.error("[ClientPay] Gagal kirim konfirmasi:",r),W(),a&&(a.disabled=!1,a.innerHTML='<i class="fa-solid fa-paper-plane mr-1"></i> Kirim Konfirmasi Pembayaran'),k("Gagal mengirim konfirmasi: "+(r.message||"Periksa koneksi internet"),"error")}},ve=(s,e=[])=>{if(!s)return"";const t=!!(s.payment?.isPaylater||s.isPaylater||s.payment?.subMethod==="paylater"),a=Array.isArray(s.payment?.paylaterSchedule)&&s.payment.paylaterSchedule.length>0?s.payment.paylaterSchedule:null,r=Math.max(0,parseFloat(s.payment?.tempoBalance)||0);parseFloat(s.payment?.grandTotal||s.total);const i=(s.payment?.installments||[]).reduce((m,f)=>m+(parseFloat(f.amount)||0),0),l=(e||[]).filter(m=>m.orderId===s.orderId&&m.status==="pending").reduce((m,f)=>m+(parseFloat(f.amount)||0),0),u=t?s.payment?.paylaterTenor==="2m"?"2 Bulan (2x Cicilan)":s.payment?.paylaterTenor==="3m"?"3 Bulan (3x Cicilan)":"30 Hari (1x Bayar)":"Tempo Pembayaran Toko";if(a&&a.length>0){let m=0,f=!1;const o=a.map((d,p)=>{const w=d.installmentIndex||d.installmentNo||d.installmentNumber||d.month||p+1,M=parseFloat(d.pokok||d.principal)||0,I=parseFloat((d.adminFee||0)+(d.serviceFee||0))||0,B=parseFloat(d.total||d.totalMonthly||d.totalInstallment)||M+I;m+=B;const E=m;let P="",T="",b=!1;i>=E?(P="LUNAS",T="bg-emerald-100 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-400 border border-emerald-300 dark:border-emerald-700",b=!0):l>0?(P="SEDANG DIVERIFIKASI",T="bg-amber-100 text-amber-700 dark:bg-amber-950/60 dark:text-amber-400 border border-amber-300 dark:border-amber-700"):f?(P="BULAN DEPAN",T="bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400 border border-slate-200 dark:border-slate-700"):(f=!0,d.dueDate&&Date.now()>d.dueDate?(P="JATUH TEMPO",T="bg-rose-100 text-rose-700 dark:bg-rose-950/60 dark:text-rose-400 border border-rose-300 dark:border-rose-700"):(P="WAJIB BULAN INI",T="bg-amber-100 text-amber-800 dark:bg-amber-950/60 dark:text-amber-300 border border-amber-300 dark:border-amber-700 font-bold"));const R=d.dueDateFormatted||d.dueDateStr||(d.dueDate?new Date(d.dueDate).toLocaleDateString("id-ID",{day:"numeric",month:"short",year:"numeric"}):"-");return`
                <tr class="text-xs ${b?"opacity-70 bg-slate-50/50 dark:bg-slate-900/20":""}">
                    <td class="py-2.5 px-3 sm:px-3.5 font-bold text-slate-800 dark:text-slate-200">
                        Bulan ke-${w}
                    </td>
                    <td class="py-2.5 px-3 sm:px-3.5 text-slate-600 dark:text-slate-400 font-mono text-[11px]">
                        ${R}
                    </td>
                    <td class="py-2.5 px-3 sm:px-3.5 font-mono font-bold text-slate-800 dark:text-slate-200">
                        ${v(M)}
                    </td>
                    <td class="py-2.5 px-3 sm:px-3.5 font-mono text-slate-700 dark:text-slate-300 font-bold">
                        +${v(I)}
                    </td>
                    <td class="py-2.5 px-3 sm:px-3.5 font-mono font-black text-slate-900 dark:text-white">
                        ${v(B)}
                    </td>
                    <td class="py-2.5 px-3 sm:px-3.5 text-right">
                        <span class="inline-block px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider ${T}">
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
                        <p class="text-[11px] text-slate-400 font-medium mt-0.5">Nota #${g(s.orderId)} • ${g(u)}</p>
                    </div>
                    ${r>0?`
                    <button type="button" onclick="window.openClientPaymentModal('${g(s.orderId)}')" class="neo-btn px-3.5 py-2 rounded-xl text-white font-bold text-[10px] uppercase tracking-wider flex items-center gap-1.5 cursor-pointer" style="background: var(--color-primary);">
                        <i class="fa-solid fa-credit-card text-[10px]"></i> Bayar Angsuran Ini
                    </button>
                    `:""}
                </div>

                <!-- MOBILE VIEW: NATIVE CARDS (ZERO HORIZONTAL SCROLL) -->
                <div class="sm:hidden space-y-2">
                    ${a.map((d,p)=>{const w=d.installmentIndex||d.installmentNo||d.installmentNumber||d.month||p+1,M=parseFloat(d.pokok||d.principal)||0,I=parseFloat((d.adminFee||0)+(d.serviceFee||0))||0,B=parseFloat(d.total||d.totalMonthly||d.totalInstallment)||M+I,E=d.dueDateFormatted||d.dueDateStr||(d.dueDate?new Date(d.dueDate).toLocaleDateString("id-ID",{day:"numeric",month:"short",year:"numeric"}):"-");let P="",T="",b=!1;return i>=B*(p+1)?(P="Lunas",T="bg-emerald-100 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-400 border border-emerald-300 dark:border-emerald-700",b=!0):l>0?(P="Sedang Diverifikasi",T="bg-amber-100 text-amber-700 dark:bg-amber-950/60 dark:text-amber-400 border border-amber-300 dark:border-amber-700"):d.dueDate&&Date.now()>d.dueDate?(P="Lewat Jatuh Tempo",T="bg-rose-100 text-rose-700 dark:bg-rose-950/60 dark:text-rose-400 border border-rose-300 dark:border-rose-700"):(P="Bayar Bulan Ini",T="bg-amber-100 text-amber-800 dark:bg-amber-950/60 dark:text-amber-300 border border-amber-300 dark:border-amber-700 font-bold"),`
                        <div class="p-3 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700 flex items-center justify-between gap-3 shadow-2xs ${b?"opacity-60":""}">
                            <div class="flex items-center gap-2.5 min-w-0">
                                <span class="w-7 h-7 rounded-xl bg-[rgba(var(--color-primary-rgb),0.1)] text-[var(--color-primary)] font-black text-xs flex items-center justify-center shrink-0">${w}</span>
                                <div class="min-w-0">
                                    <p class="text-xs font-bold text-slate-800 dark:text-white">Bulan ke-${w}</p>
                                    <p class="text-[10px] text-slate-400 font-mono mt-0.5">Jatuh Tempo: ${E}</p>
                                </div>
                            </div>
                            <div class="text-right shrink-0">
                                <p class="text-xs font-black font-mono text-slate-900 dark:text-white">${v(B)}</p>
                                <span class="inline-block mt-0.5 px-2 py-0.5 rounded text-[8.5px] font-black uppercase tracking-wider ${T}">${P}</span>
                            </div>
                        </div>`}).join("")}
                </div>

                <!-- DESKTOP / TABLET VIEW: FULL TABLE -->
                <div id="tempo-sched-wrap-${g(s.orderId)}" class="hidden sm:block overflow-x-auto rounded-xl border border-slate-200/80 dark:border-slate-800 custom-scrollbar">
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
                            ${o}
                        </tbody>
                    </table>
                </div>

                <div class="pt-2 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 flex-wrap gap-2.5">
                    <span>Sudah Dibayar: <b class="font-mono text-emerald-600 dark:text-emerald-400">${v(i)}</b></span>
                    <span>Sisa Wajib Bayar: <b class="font-mono text-rose-600 dark:text-rose-400 font-black">${v(r)}</b></span>
                </div>
            </div>
        `}return`
        <div class="mt-3 rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white/70 dark:bg-slate-900/60 p-3.5 sm:p-4 space-y-2.5">
            <div class="flex items-center justify-between flex-wrap gap-2">
                <div>
                    <h4 class="text-xs font-black text-slate-800 dark:text-white flex items-center gap-1.5">
                        <i class="fa-solid fa-file-invoice text-[var(--color-primary)]"></i> Tagihan Tempo Berjalan
                    </h4>
                    <p class="text-[10px] text-slate-400 font-medium">Nota #${g(s.orderId)} • Jatuh Tempo: ${s.payment?.tempoDueDate?new Date(s.payment.tempoDueDate).toLocaleDateString("id-ID",{day:"numeric",month:"short",year:"numeric"}):"-"}</p>
                </div>
                ${r>0?`
                <button type="button" onclick="window.openClientPaymentModal('${g(s.orderId)}')" class="neo-btn px-3 py-1.5 rounded-xl text-white font-bold text-[10px] uppercase tracking-wider flex items-center gap-1.5 cursor-pointer" style="background: var(--color-primary);">
                    <i class="fa-solid fa-credit-card text-[9px]"></i> Bayar Sekarang
                </button>
                `:""}
            </div>

            <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/70 dark:border-slate-700/60 flex items-center justify-between text-xs">
                <span class="text-slate-500 font-bold">Sisa Tagihan Tempo</span>
                <span class="font-mono font-black text-rose-600 dark:text-rose-400 text-sm">${v(r)}</span>
            </div>
        </div>
    `},He=({orderId:s,amount:e})=>{let t=x("modal-client-pay-success");t||(t=document.createElement("div"),t.id="modal-client-pay-success",document.body.appendChild(t)),t.className="fixed inset-0 z-[150] flex items-center justify-center p-4 bg-slate-900/75 transition-opacity duration-300 opacity-0 pointer-events-none",t.style.zIndex="150";const a=s?s.split("-").pop()||s:"-";t.innerHTML=`
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
                    <span class="font-mono font-bold text-slate-800 dark:text-white">#${g(a)}</span>
                </div>
                <div class="flex justify-between items-center text-xs border-t border-slate-200/60 dark:border-slate-700/60 pt-2">
                    <span class="text-slate-500 dark:text-slate-400 font-medium">Nominal Konfirmasi</span>
                    <span class="font-extrabold text-sm sm:text-base text-[var(--color-primary)] font-mono">${v(e)}</span>
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
            <button type="button" onclick="window.closeClientPaymentSuccessModal()" class="neo-btn w-full h-12 py-3 px-5 rounded-xl text-white text-xs sm:text-sm font-bold flex items-center justify-center gap-2 cursor-pointer" style="background: var(--color-primary);">
                <i class="fa-solid fa-check-double mr-1"></i> Mengerti &amp; Selesai
            </button>
        </div>
    `;const r=x("modal-client-pay-success-box");document.body.classList.add("overflow-hidden"),typeof window.pushModalHistory=="function"&&window.pushModalHistory("clientPaySuccess"),Le(t,r)},wt=(s=!1)=>{const e=()=>{const t=x("modal-client-pay-success"),a=x("modal-client-pay-success-box");!t||!a||je(t,a,()=>{t.classList.add("pointer-events-none"),a.classList.remove("pointer-events-auto"),document.querySelector('[id*="modal"]:not(.hidden):not(.pointer-events-none):not(#modal-client-pay-success)')||document.body.classList.remove("overflow-hidden")})};typeof window.requestCloseModal=="function"?window.requestCloseModal("clientPaySuccess",s,e):e()};typeof window<"u"&&(window.openClientPaymentModal=mt,window.closeClientPaymentModal=be,window.closeClientTempoPayModal=be,window.switchClientPaymentOrder=ut,window.switchClientPayChannel=ft,window.setClientPayAmount=bt,window.focusCustomClientPay=xt,window.handleClientProofFileChange=gt,window.resetClientProofFile=ht,window.submitClientPaymentConfirmation=yt,window.copyAccountNumber=lt,window.renderClientInstallmentSchedule=ve,window.showClientPaymentSuccessModal=He,window.closeClientPaymentSuccessModal=wt);const O=new Map,kt=3*60*1e3,Z=new Map,vt=2*60*1e3,Pt="https://lh3.googleusercontent.com/d/1KHwsV5sK6aAH3-eP_vTJA4tE5MyRukLo";let $=!0;try{const s=typeof localStorage<"u"?localStorage.getItem("freshmart_member_privacy"):null;s!==null&&($=s==="true")}catch{}let N=null,D="idle",S="",z="",le=!0,L="";const Ne=async s=>{const e=`tokoputri_salt_${String(s||"").trim()}`;if(typeof crypto<"u"&&crypto.subtle&&typeof crypto.subtle.digest=="function"){const r=new TextEncoder().encode(e),n=await crypto.subtle.digest("SHA-256",r);return Array.from(new Uint8Array(n)).map(c=>c.toString(16).padStart(2,"0")).join("")}let t=3735928559,a=1103515245;for(let r=0;r<e.length;r++){const n=e.charCodeAt(r);t=Math.imul(t^n,2654435761),a=Math.imul(a^n,1597334677)}return t=Math.imul(t^t>>>16,2246822507)^Math.imul(a^a>>>13,3266489909),a=Math.imul(a^a>>>16,2246822507)^Math.imul(t^t>>>13,3266489909),(4294967296*(2097151&a)+(t>>>0)).toString(16).padStart(16,"0")},Me=(s,e=!0)=>{let t=(s||"").toString().replace(/\D/g,"");if(!t)return"••••";t.startsWith("0")?t="62"+t.substring(1):t.startsWith("62")||(t="62"+t);const a=t.substring(2);if(a.length<=6)return`+62 ${a.substring(0,2)}••••`;const r=a.substring(0,3),n=a.substring(a.length-4);if(e)return`+62 ${r}-••••-${n}`;const i=a.substring(3,a.length-4);return`+62 ${r}-${i}-${n}`},U=(s,e=!0)=>e?'<span class="tracking-widest font-mono text-slate-400 font-bold select-none" title="Nominal dirahasiakan (Klik tombol mata 👁️ untuk melihat)">Rp ••••••</span>':v(s),Mt=()=>{$=!$;try{typeof localStorage<"u"&&localStorage.setItem("freshmart_member_privacy",String($))}catch{}typeof window<"u"&&typeof window.triggerHaptic=="function"&&window.triggerHaptic("light"),typeof window<"u"&&typeof window.showToast=="function"&&window.showToast($?"Mode Privasi Aktif: Angka Tagihan & Saldo Disensor (Rp ••••••)":"Mode Privasi Nonaktif: Angka Ditampilkan");const s=typeof document<"u"?document.getElementById("member-privacy-toggle-btn"):null;s&&(s.innerHTML=`<i class="fa-solid ${$?"fa-eye-slash text-amber-500":"fa-eye text-slate-500"} text-xs"></i>`,s.title=$?"Buka Sensor Angka Finansial":"Sensor Angka Finansial"),C()},Oe=()=>{j(null),N=null,D="idle",S="",z="",L="";try{typeof localStorage<"u"&&(localStorage.removeItem("freshmart_current_member"),localStorage.removeItem("freshmart_member_wa"))}catch{}typeof window<"u"&&typeof window.triggerHaptic=="function"&&window.triggerHaptic("light"),typeof window<"u"&&typeof window.showToast=="function"&&window.showToast("Sesi Member Telah Dikunci."),C()},Tt=s=>{le=!!s},Ue=s=>{if(S.length>=6)return;S+=String(s),L="",typeof window<"u"&&typeof window.triggerHaptic=="function"&&window.triggerHaptic("light"),typeof window<"u"&&typeof window.playNativeSound=="function"&&window.playNativeSound("tick");const e=typeof document<"u"?document.getElementById("member-pin-dots-container"):null;if(e){const t=e.children;for(let a=0;a<t.length;a++)a<S.length?(t[a].className="w-4 h-4 sm:w-5 sm:h-5 rounded-full border-2 transition-all duration-200 flex items-center justify-center primary-bg border-[var(--color-primary)] scale-110 shadow-xs shadow-[rgba(var(--color-primary-rgb),0.4)]",t[a].innerHTML='<div class="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-white"></div>'):(t[a].className="w-4 h-4 sm:w-5 sm:h-5 rounded-full border-2 transition-all duration-200 flex items-center justify-center border-slate-300 dark:border-slate-600 bg-slate-100 dark:bg-slate-800",t[a].innerHTML="")}S.length===6&&setTimeout(()=>{We()},120)},Ke=()=>{if(S.length<=0)return;S=S.slice(0,-1),L="",typeof window<"u"&&typeof window.triggerHaptic=="function"&&window.triggerHaptic("light");const s=typeof document<"u"?document.getElementById("member-pin-dots-container"):null;if(s){const e=s.children;for(let t=0;t<e.length;t++)t<S.length?(e[t].className="w-4 h-4 sm:w-5 sm:h-5 rounded-full border-2 transition-all duration-200 flex items-center justify-center primary-bg border-[var(--color-primary)] scale-110 shadow-xs shadow-[rgba(var(--color-primary-rgb),0.4)]",e[t].innerHTML='<div class="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-white"></div>'):(e[t].className="w-4 h-4 sm:w-5 sm:h-5 rounded-full border-2 transition-all duration-200 flex items-center justify-center border-slate-300 dark:border-slate-600 bg-slate-100 dark:bg-slate-800",e[t].innerHTML="")}},Ge=()=>{N=null,D="idle",S="",z="",L="",C()},We=async()=>{if(D==="enter_pin"&&N)if(await Ne(S)===N.pin){const e={...N};if(j(e),le)try{localStorage.setItem("freshmart_current_member",JSON.stringify(e)),localStorage.setItem("freshmart_member_wa",e.phone||e.id)}catch{}else try{localStorage.removeItem("freshmart_current_member"),localStorage.removeItem("freshmart_member_wa")}catch{}D="idle",S="",L="",N=null,typeof window<"u"&&typeof window.triggerHaptic=="function"&&window.triggerHaptic("success"),typeof window<"u"&&typeof window.playNativeSound=="function"&&window.playNativeSound("success"),typeof window<"u"&&typeof window.showToast=="function"&&window.showToast("PIN Terverifikasi! Akses panel member dibuka."),C()}else L="PIN Keamanan salah! Silakan coba kembali.",S="",typeof window<"u"&&typeof window.triggerHaptic=="function"&&window.triggerHaptic("error"),typeof window<"u"&&typeof window.playNativeSound=="function"&&window.playNativeSound("error"),C();else if(D==="create_pin")z=S,S="",L="",D="confirm_pin",typeof window<"u"&&typeof window.triggerHaptic=="function"&&window.triggerHaptic("light"),C();else if(D==="confirm_pin"&&N)if(S===z)try{const s=await Ne(S);let e=(N.phone||N.id||"").toString().replace(/\D/g,"");e.startsWith("0")?e="62"+e.substring(1):e.startsWith("62")||(e="62"+e),await K.collection("freshmart").doc("cms_data").collection("customers").doc(e).set({pin:s,pinSetAt:new Date().toISOString()},{merge:!0}),N.pin=s;const t={...N};if(j(t),le)try{localStorage.setItem("freshmart_current_member",JSON.stringify(t)),localStorage.setItem("freshmart_member_wa",e)}catch{}D="idle",S="",z="",L="",N=null,typeof window<"u"&&typeof window.triggerHaptic=="function"&&window.triggerHaptic("success"),typeof window<"u"&&typeof window.playNativeSound=="function"&&window.playNativeSound("success"),typeof window<"u"&&typeof window.showToast=="function"&&window.showToast("PIN Keamanan 6-Digit Berhasil Diaktifkan!"),C()}catch(s){console.error("Gagal simpan PIN ke Firestore:",s),L="Gagal menyimpan PIN. Periksa koneksi internet.",S="",C()}else L="Konfirmasi PIN tidak cocok! Silakan buat ulang PIN.",S="",z="",D="create_pin",typeof window<"u"&&typeof window.triggerHaptic=="function"&&window.triggerHaptic("error"),C()},St=s=>{if(!s){O.clear(),Z.clear();return}const e=s.toString().replace(/\D/g,"");let t=e,a=e.startsWith("0")?"62"+e.substring(1):e.startsWith("62")?e:"62"+e,r=e.startsWith("62")?"0"+e.substring(2):e;O.delete(e),O.delete(t),O.delete(a),O.delete(r),Z.delete(e),Z.delete(t),Z.delete(a),Z.delete(r)},Te=async(s,e="")=>{try{let t=(s||"").toString().replace(/\D/g,"");if(t.startsWith("0")?t="62"+t.substring(1):t.startsWith("62")||(t="62"+t),!t||t.length<9)return null;let a=[];try{const f=localStorage.getItem("freshmart_my_orders");f&&(a=JSON.parse(f)||[])}catch{}if(!a.length)return null;let r=0;const n=a.find(f=>f.finalMemberPoints!==void 0&&f.finalMemberPoints!==null);if(n?r=Math.max(0,parseFloat(n.finalMemberPoints)||0):r=a.reduce((f,o)=>f+(parseFloat(o.pointsEarned)||0),0),r<=0)return null;const i=K.collection("freshmart").doc("cms_data").collection("customers").doc(t),c=await i.get();if(!c.exists)return null;const l=e||h&&h.name||c.data().name||"Pelanggan Setia",u={id:t,phone:t,name:l,points:r,updatedAt:new Date().toISOString(),lastOrderAt:new Date().toISOString()};try{await i.set(u,{merge:!0})}catch(f){console.warn("[reconcilePointsFromOrders] Firestore set error:",f)}j(u);try{localStorage.setItem("freshmart_current_member",JSON.stringify(u)),localStorage.setItem("freshmart_member_wa",t)}catch{}return O.set(t,{data:u,timestamp:Date.now()}),document.getElementById("member-modal-body")&&C(),u}catch(t){return console.warn("[reconcilePointsFromOrders] Error:",t),null}},he=(s=0)=>{const e=Math.max(0,parseFloat(s)||0);return e>=1e3?{level:4,name:"PLATINUM VIP",badge:'<i class="fa-solid fa-gem mr-1"></i> PLATINUM VIP',icon:"fa-gem",gradient:"from-slate-950 via-zinc-900 to-neutral-950 border-amber-400/40 text-amber-200",cardBg:"linear-gradient(135deg, #090d16 0%, #171f30 45%, #0d1322 75%, #050811 100%)",accentBg:"bg-amber-400/20",accentText:"text-amber-300",accentBorder:"border-amber-400/40",chipBorder:"#f59e0b",foilClass:"gold-foil-text",nextTier:null,ptsNeeded:0,progress:100,perks:["Cashback & Poin Belanja Maksimal (2x Lipat)","Akses Prioritas Antrean Kasir & Pengiriman","Klaim Semua Hadiah Katalog VIP","Layanan Konsultasi Khusus via WhatsApp"]}:e>=500?{level:3,name:"GOLD MEMBER",badge:'<i class="fa-solid fa-crown mr-1"></i> GOLD MEMBER',icon:"fa-crown",gradient:"from-amber-600 via-yellow-600 to-amber-700 border-yellow-300/40 text-yellow-100",cardBg:"linear-gradient(135deg, #78350f 0%, #b45309 35%, #d97706 70%, #92400e 100%)",accentBg:"bg-yellow-400/20",accentText:"text-amber-200",accentBorder:"border-yellow-300/40",chipBorder:"#fde047",foilClass:"gold-foil-text",nextTier:"Platinum VIP",ptsNeeded:1e3-e,progress:Math.min(100,Math.round((e-500)/500*100)),perks:["Diskon & Promo Spesial Member Gold","Kumpulkan Poin di Setiap Transaksi","Tukar Hadiah Menarik dari Katalog","Prioritas Penyiapan Pesanan"]}:e>=100?{level:2,name:"SILVER MEMBER",badge:'<i class="fa-solid fa-medal mr-1"></i> SILVER MEMBER',icon:"fa-medal",gradient:"from-slate-700 via-slate-600 to-slate-800 border-slate-300/40 text-slate-100",cardBg:"linear-gradient(135deg, #1e293b 0%, #334155 40%, #475569 70%, #0f172a 100%)",accentBg:"bg-slate-200/20",accentText:"text-slate-100",accentBorder:"border-slate-300/40",chipBorder:"#cbd5e1",foilClass:"silver-foil-text",nextTier:"Gold Member",ptsNeeded:500-e,progress:Math.min(100,Math.round((e-100)/400*100)),perks:["Kumpulkan Poin di Setiap Transaksi","Tukar Hadiah Langsung Tanpa Undian","Penawaran Diskon Tertentu"]}:{level:1,name:"BRONZE MEMBER",badge:'<i class="fa-solid fa-award mr-1"></i> BRONZE MEMBER',icon:"fa-award",gradient:"from-stone-800 via-amber-950 to-stone-900 border-orange-400/30 text-orange-200",cardBg:"linear-gradient(135deg, #381a10 0%, #632917 40%, #7c2d12 70%, #292524 100%)",accentBg:"bg-orange-500/20",accentText:"text-orange-200",accentBorder:"border-orange-400/40",chipBorder:"#fb923c",foilClass:"bronze-foil-text",nextTier:"Silver Member",ptsNeeded:100-e,progress:Math.min(100,Math.round(e/100*100)),perks:["Kumpulkan Poin di Setiap Transaksi Belanja","Akses Penuh ke Katalog Hadiah Toko"]}},Ve=(s,e=!1)=>{let t=(s||"").toString().replace(/\D/g,"");for(t.startsWith("62")?t=t.substring(2):t.startsWith("0")&&(t=t.substring(1));t.length<8;)t+="0";const a=[];for(let r=0;r<t.length&&a.length<3;r+=4)a.push(t.substring(r,r+4));return e&&a.length>=2&&(a.length>=3?a[1]="••••":a[a.length-1]="••••"),`PUTRI • ${a.join(" • ")}`},qe=(s,e=!0)=>Ve(s,e),Je=s=>{const e=String(s||"812345678901").replace(/\D/g,"");try{if(typeof Ie=="function")return Ie(e,{height:34,showText:!1,moduleWidth:1.25,quietZone:12,className:"w-full h-11 bg-white rounded-lg px-2 py-1 shadow-inner border border-slate-200"})}catch{}let t="",a=8;t+=`<rect x="${a}" y="3" width="2.5" height="34" fill="#0f172a"/>`,a+=4,t+=`<rect x="${a}" y="3" width="1.5" height="34" fill="#0f172a"/>`,a+=3.5,t+=`<rect x="${a}" y="3" width="3" height="34" fill="#0f172a"/>`,a+=5;for(let r=0;r<e.length;r++){const n=parseInt(e[r],10)||0,i=(n%3+1)*1.3,c=((n+2)%4+1)*1.1,l=(n%2+1)*1.8;t+=`<rect x="${a}" y="3" width="${i}" height="34" fill="#0f172a"/>`,a+=i+l,t+=`<rect x="${a}" y="3" width="${c}" height="34" fill="#0f172a"/>`,a+=c+2}return t+=`<rect x="${a}" y="3" width="3" height="34" fill="#0f172a"/>`,a+=5,t+=`<rect x="${a}" y="3" width="1.5" height="34" fill="#0f172a"/>`,a+=3.5,t+=`<rect x="${a}" y="3" width="2.5" height="34" fill="#0f172a"/>`,a+=4,`
    <svg class="w-full h-11 bg-white rounded-lg px-2 py-1 shadow-inner border border-slate-200" viewBox="0 0 ${Math.max(a+10,240)} 40" xmlns="http://www.w3.org/2000/svg">
        ${t}
    </svg>`},Be=s=>{const e=parseFloat(s?.points)||0,t=he(e),a=(y.store?.name||"Toko Putri").toUpperCase(),r=y.store?.logo&&y.store.logo!=="fa-store"?y.store.logo:Pt,n=(s?.name||"PELANGGAN SETIA").toUpperCase(),i=(s?.phone||"81234567890").toString().replace(/\D/g,""),c=qe(i,$),l=y.store?.wa||i;return`
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
                            <img src="${g(r)}" alt="Logo" class="w-full h-full object-contain" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">
                            <i class="fa-solid fa-store text-slate-800 text-xs hidden"></i>
                        </div>
                        <div class="min-w-0">
                            <h4 class="text-[11px] sm:text-xs font-black tracking-wider text-white uppercase truncate">${g(a)}</h4>
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
                        ${h&&(h.paylaterActive===!0||h.paylaterActive==="true")&&(parseFloat(h.paylaterLimit)||0)>0?`
                        <div class="mt-1 flex items-center justify-end gap-1 text-[8px] font-black text-emerald-300 uppercase tracking-wider">
                            <i class="fa-solid fa-bolt text-amber-300 text-[7px]"></i> PayLater: ${U(Math.max(0,(parseFloat(h.paylaterLimit)||0)-Math.max(0,parseFloat(h.paylaterUsed)||0)),$)}
                        </div>`:""}
                    </div>
                </div>

                <!-- Bagian Bawah: Nomor Kartu & Nama Pelanggan Embossed -->
                <div class="relative z-10">
                    <p class="text-[11px] sm:text-[13px] embossed-text text-white/95 font-mono tracking-[0.18em] mb-1.5">${g(c)}</p>
                    <div class="flex items-end justify-between gap-2">
                        <div class="min-w-0 flex-1">
                            <p class="text-[7px] sm:text-[8px] font-bold tracking-widest text-white/70 uppercase leading-none mb-0.5">Nama Pelanggan</p>
                            <p class="text-[11px] sm:text-[13px] font-bold text-white tracking-wider truncate uppercase">${g(n)}</p>
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
                            <span class="text-[9px] font-mono font-bold text-slate-500 italic truncate">${g(n)}</span>
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
                        ${Je(i)}
                        <p class="text-[9px] font-mono font-bold tracking-[0.2em] text-slate-300 mt-1">*${g($?Me(i,!0):i)}*</p>
                    </div>
                </div>

                <!-- Footer Sisi Belakang: Kontak & Info -->
                <div class="p-3 sm:p-4 bg-slate-950/80 border-t border-white/10 text-center">
                    <p class="text-[7.5px] sm:text-[8px] text-slate-400 leading-tight">
                        Kartu member digital resmi <b class="text-white">${g(a)}</b>. Tunjukkan saat transaksi untuk poin belanja.
                    </p>
                    <p class="text-[8px] font-bold text-emerald-400 mt-0.5">
                        <i class="fa-brands fa-whatsapp mr-1"></i>CS: +${g(l)}
                    </p>
                </div>
            </div>

        </div>
    </div>`},At=()=>{const s=document.getElementById("member-card-inner");s&&(s.classList.toggle("is-flipped"),typeof window.triggerHaptic=="function"&&window.triggerHaptic("light"),typeof window.playNativeSound=="function"&&window.playNativeSound("tick"))},It=async()=>{const s=document.getElementById("member-card-inner");s&&s.classList.contains("is-flipped")&&(s.classList.remove("is-flipped"),await new Promise(t=>setTimeout(t,450)));const e=document.getElementById("member-card-front-export");if(e){typeof window.showToast=="function"&&window.showToast("Menyiapkan file gambar Kartu Member HD...");try{if(typeof window.ensureScriptLoaded=="function"&&await window.ensureScriptLoaded("https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js",()=>typeof html2canvas<"u"),typeof html2canvas>"u")throw new Error("Modul html2canvas belum siap dimuat.");const t=await html2canvas(e,{scale:3,useCORS:!0,allowTaint:!0,backgroundColor:null}),r=`Kartu_Member_TokoPutri_${(h?.name||"Pelanggan").replace(/[^a-zA-Z0-9]/g,"_")}.png`,n=t.toDataURL("image/png",1);if(window.AndroidNativeApp&&typeof window.AndroidNativeApp.saveOrShareFile=="function")window.AndroidNativeApp.saveOrShareFile(n,r,"image/png");else{const i=document.createElement("a");i.download=r,i.href=n,document.body.appendChild(i),i.click(),document.body.removeChild(i)}typeof window.showToast=="function"&&window.showToast("Kartu Member Berhasil Disimpan ke Galeri!")}catch(t){console.error("Gagal menyimpan kartu member:",t),typeof window.showToast=="function"&&window.showToast("Gagal menyimpan kartu. Silakan coba kembali.")}}},$t=()=>{const s=x("reward-catalog-container");if(!s)return;const e=y.store.showRewardCatalog!==!1&&y.store.showRewardCatalog!=="false";e&&typeof window.attachRewardsRealtime=="function"&&!window.unsubRewardsRealtime&&window.attachRewardsRealtime();const t=(y.rewards||[]).filter(r=>r.isActive!=="false"&&r.isActive!==!1);if(!e||t.length===0){s.classList.add("hidden"),s.innerHTML="";return}s.classList.remove("hidden");let a=`
    <div class="bento-island-card rounded-[1.25rem] sm:rounded-[1.5rem] p-3.5 sm:p-5 shadow-xs transition-all duration-300 hover:shadow-sm">
        <div class="mb-3.5 flex items-center justify-between gap-2 border-b border-[rgba(var(--color-primary-rgb),0.12)] pb-3 dark:border-slate-700/50">
            <div class="flex items-center gap-2 sm:gap-2.5 min-w-0 flex-1">
                <div class="shrink-0 flex h-8 w-8 items-center justify-center rounded-xl text-white shadow-2xs"
                     style="background: var(--color-primary);">
                    <i class="fa-solid fa-gift text-sm"></i>
                </div>
                <div class="min-w-0 flex-1">
                    <h3 class="text-xs sm:text-sm font-extrabold uppercase tracking-tight text-slate-800 dark:text-white leading-tight truncate">KATALOG REWARD POIN</h3>
                    <p class="text-[9.5px] sm:text-[10px] font-semibold text-slate-400 dark:text-slate-500 mt-0.5 truncate hidden xs:block sm:block">Tukar poin transaksi Anda dengan hadiah fisik gratis</p>
                </div>
            </div>
            <button type="button" onclick="if(typeof window.openMemberModal==='function') window.openMemberModal(); else if(typeof window.showToast==='function') window.showToast('Gunakan poin Anda untuk menukar hadiah menarik!');" 
                    class="shrink-0 whitespace-nowrap min-h-[30px] rounded-xl border border-[rgba(var(--color-primary-rgb),0.2)] bg-[rgba(var(--color-primary-rgb),0.08)] px-3 py-1.5 text-[9.5px] sm:text-[10.5px] font-bold uppercase tracking-wider text-[var(--color-primary)] shadow-2xs transition-all hover:bg-[var(--color-primary)] hover:text-white active:scale-95 flex items-center gap-1.5 cursor-pointer">
                <span>Lihat Kartu VIP</span> <i class="fa-solid fa-chevron-right text-[8px]"></i>
            </button>
        </div>
        <div class="grid grid-cols-1 ${t.length>1?"md:grid-cols-2 lg:grid-cols-3":""} gap-3 pt-1">
            ${t.map(r=>{const n=parseFloat(r.pointsCost||r.pointsRequired)||0;return`
                <div class="group relative flex w-full items-center gap-3 p-3 rounded-2xl border-2 border-slate-900 dark:border-slate-700 bg-white dark:bg-slate-900 shadow-[2.5px_2.5px_0px_#0f172a] dark:shadow-[2.5px_2.5px_0px_#000000] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[3.5px_3.5px_0px_#0f172a] cursor-pointer select-none" onclick="if(typeof window.openMemberModal==='function') window.openMemberModal(); else if(typeof window.showToast==='function') window.showToast('Tukarkan hadiah ini saat checkout menggunakan poin belanja Anda!');">
                    
                    <!-- Thumbnail Kompak & Proporsional (Ukuran 68px x 68px) -->
                    <div class="relative w-16 h-16 sm:w-20 sm:h-20 overflow-hidden rounded-xl bg-slate-50 dark:bg-slate-950 flex items-center justify-center border-2 border-slate-900 dark:border-slate-700 shrink-0 shadow-[1.5px_1.5px_0px_#0f172a]">
                        ${r.img?`<img loading="lazy" src="${g(r.img)}" alt="${g(r.name)}" class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" onerror="this.onerror=null; this.style.display='none'; if(this.nextElementSibling) this.nextElementSibling.style.display='flex';">`:""}
                        <div class="w-full h-full flex flex-col items-center justify-center bg-slate-100 dark:bg-slate-800 text-slate-400 font-black text-xs select-none" style="${r.img?"display:none;":"display:flex;"}">
                            <span class="text-2xl">🎁</span>
                        </div>
                    </div>

                    <!-- Detail Hadiah (Tengah) -->
                    <div class="flex-1 min-w-0">
                        <div class="flex items-center gap-1.5 mb-1">
                            <span class="text-[8.5px] font-black uppercase tracking-wider text-slate-500 dark:text-slate-400">REWARD POIN</span>
                            <span class="text-[8.5px] font-black text-emerald-800 dark:text-emerald-300 bg-emerald-100 dark:bg-emerald-950 px-1.5 py-0.5 rounded-md border border-emerald-600 dark:border-emerald-500 uppercase tracking-tight">100% Free</span>
                        </div>
                        <h4 class="text-xs sm:text-sm font-black text-slate-900 dark:text-slate-100 group-hover:text-[var(--color-primary)] transition-colors truncate uppercase" title="${g(r.name)}">
                            ${g(r.name)}
                        </h4>
                        <div class="mt-1 flex items-center gap-2">
                            <span class="text-[9.5px] font-bold text-slate-400">Biaya:</span>
                            <div class="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-amber-100 dark:bg-amber-950/60 border border-amber-600 dark:border-amber-500 shadow-[1px_1px_0px_#0f172a]">
                                <i class="fa-solid fa-coins text-amber-600 text-[9px]"></i>
                                <span class="text-xs font-black font-mono text-amber-950 dark:text-amber-200 leading-none">${n}</span>
                                <span class="text-[8px] font-black uppercase text-amber-800 dark:text-amber-300 leading-none">Poin</span>
                            </div>
                        </div>
                    </div>

                    <!-- Tombol Aksi Tukar (Kanan) -->
                    <div class="shrink-0 pl-1">
                        <button type="button" 
                                onclick="event.stopPropagation(); if(typeof window.openMemberModal==='function') window.openMemberModal(); else if(typeof window.showToast==='function') window.showToast('Tukarkan hadiah ini saat checkout menggunakan poin belanja Anda!');" 
                                class="neo-btn py-2 px-3 sm:px-4 rounded-xl text-white font-black text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 border-2 border-slate-900 shadow-[2px_2px_0px_#0f172a] active:translate-x-[1px] active:translate-y-[1px] transition-all cursor-pointer whitespace-nowrap" 
                                style="background: var(--color-primary);"
                                title="Tukar Hadiah ${g(r.name)}" 
                                aria-label="Tukar Hadiah ${g(r.name)}">
                            <i class="fa-solid fa-hand-holding-dollar text-[11px] text-amber-300"></i>
                            <span>Tukar</span>
                        </button>
                    </div>
                </div>`}).join("")}
        </div>
    </div>`;s.innerHTML=a};let Ce=null;const Nt=()=>{clearTimeout(Ce),Ce=setTimeout(async()=>{const e=(window.normalizeWA||(n=>(n||"").replace(/\D/g,"").replace(/^0/,"62")))(De("cust-wa")),t=x("member-status-banner");if(!t)return;if(!e||e.length<10){H(t),H("payment-option-tempo"),H("payment-option-paylater"),j(null),ie(null);const n=document.querySelector('input[name="payment"][value="tempo"]');if(n&&n.checked){const i=document.querySelector('input[name="payment"][value="transfer"]')||document.querySelector('input[name="payment"][value="cashier"]');i&&(i.checked=!0,typeof window.togglePaymentDetails=="function"&&window.togglePaymentDetails())}return}const a=n=>{const i=parseFloat(n.points)||0,c=he(i);t.className="mt-3 p-3 sm:p-4 rounded-2xl bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 text-white border border-[rgba(var(--color-primary-rgb),0.35)] shadow-xl relative overflow-hidden flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3",t.innerHTML=`
                <div class="flex items-center gap-3 relative z-10 min-w-0">
                    <div class="w-12 h-10 rounded-xl bg-[rgba(var(--color-primary-rgb),0.15)] border border-[rgba(var(--color-primary-rgb),0.35)] flex items-center justify-center shrink-0 shadow-inner">
                        <i class="fa-solid fa-id-card text-xl text-[var(--color-primary)]"></i>
                    </div>
                    <div class="min-w-0">
                        <div class="flex items-center gap-2 flex-wrap">
                            <span class="text-[9px] font-black uppercase tracking-widest px-2 py-0.5 rounded-full ${c.accentBg} ${c.accentText} border ${c.accentBorder}">${c.badge}</span>
                            <span class="text-[10px] font-bold text-[var(--color-primary)] flex items-center gap-1"><i class="fa-solid fa-coins text-[9px]"></i>${i} Poin</span>
                        </div>
                        <p class="text-xs font-bold text-white mt-0.5 truncate flex items-center gap-1.5">
                            <span>${g(n.name||"Pelanggan")}</span>
                            <span class="text-[9px] font-normal text-slate-400">(Member Resmi)</span>
                        </p>
                    </div>
                </div>
                <button type="button" onclick="openMemberModal()" class="relative z-10 w-full sm:w-auto shrink-0 primary-bg hover:opacity-90 text-white text-[10px] font-black uppercase tracking-wider px-3.5 py-2.5 rounded-xl shadow-md active:scale-95 transition-all flex items-center justify-center gap-1.5 cursor-pointer">
                    <i class="fa-solid fa-wallet"></i> Buka Kartu Member
                </button>`,ne(t),ne("payment-option-tempo"),n.paylaterActive===!0||n.paylaterActive==="true"?ne("payment-option-paylater"):H("payment-option-paylater")},r=O.get(e);if(r&&Date.now()-r.timestamp<kt){if(r.data)j(r.data),a(r.data);else{j(null),ie(null),H(t),H("payment-option-tempo"),H("payment-option-paylater");const n=document.querySelector('input[name="payment"][value="tempo"]');if(n&&n.checked){const i=document.querySelector('input[name="payment"][value="transfer"]')||document.querySelector('input[name="payment"][value="cashier"]');i&&(i.checked=!0,typeof window.togglePaymentDetails=="function"&&window.togglePaymentDetails())}}return}try{const n=await K.collection("freshmart").doc("cms_data").collection("customers").doc(e).get();if(n.exists){const i=n.data();O.set(e,{data:i,timestamp:Date.now()}),j(i),a(i)}else{O.set(e,{data:null,timestamp:Date.now()}),j(null),ie(null),H(t),H("payment-option-tempo"),H("payment-option-paylater");const i=document.querySelector('input[name="payment"][value="tempo"]');if(i&&i.checked){const c=document.querySelector('input[name="payment"][value="transfer"]')||document.querySelector('input[name="payment"][value="cashier"]');c&&(c.checked=!0,typeof window.togglePaymentDetails=="function"&&window.togglePaymentDetails())}}}catch{}},500)},Bt=()=>{if(!h)try{const a=localStorage.getItem("freshmart_current_member");if(a){const r=JSON.parse(a);r&&(r.id||r.phone||r.name)&&j(r)}}catch{}const s=h?.phone||h?.id||localStorage.getItem("freshmart_member_wa");if(s){let a=s.toString().replace(/\D/g,"");a.startsWith("0")?a="62"+a.substring(1):a.startsWith("62")||(a="62"+a),K.collection("freshmart").doc("cms_data").collection("customers").doc(a).get().then(async r=>{if(r.exists){let n=r.data();if(parseFloat(n.paylaterUsed)<0&&(n.paylaterUsed=0),(parseFloat(n.points)||0)===0){const c=await Te(a,n.name);c&&(n=c)}O.set(a,{data:n,timestamp:Date.now()}),j(n);try{localStorage.setItem("freshmart_current_member",JSON.stringify(n)),localStorage.setItem("freshmart_member_wa",a)}catch{}document.getElementById("member-modal-body")&&C()}else{O.set(a,{data:null,timestamp:Date.now()}),j(null);try{localStorage.removeItem("freshmart_current_member"),localStorage.removeItem("freshmart_member_wa")}catch{}document.getElementById("member-modal-body")&&C()}}).catch(()=>{})}typeof window.attachRewardsRealtime=="function"&&!window.unsubRewardsRealtime&&window.attachRewardsRealtime();let e=document.getElementById("member-modal");e||(e=document.createElement("div"),e.id="member-modal",e.className="fixed inset-0 z-[115] bg-slate-900/75 flex items-end sm:items-center justify-center p-0 sm:p-5",e.onclick=a=>{a.target===e&&Ze()},document.body.appendChild(e));const t=e.style.display!=="none"&&e.style.opacity==="1";e.innerHTML=`
        <div class="modal-bottom-sheet bg-white dark:bg-slate-900 w-full max-w-lg sm:max-w-2xl lg:max-w-3xl rounded-t-[2rem] sm:rounded-3xl max-h-[92dvh] sm:max-h-[88vh] flex flex-col shadow-2xl border border-slate-200/90 dark:border-slate-800 overflow-hidden" id="member-modal-box">
            <!-- DRAG PULL INDICATOR MOBILE -->
            <div class="sm:hidden w-full pt-3 pb-1 flex justify-center items-center shrink-0">
                <div class="w-12 h-1.5 bg-slate-300 dark:bg-slate-700 rounded-full pull-indicator"></div>
            </div>

            <!-- Header Modal -->
            <div class="px-5 sm:px-6 pt-3.5 sm:pt-5 pb-4 border-b-2 border-slate-900 dark:border-slate-700 flex justify-between items-center shrink-0 bg-white dark:bg-slate-900">
                <div class="flex items-center gap-3">
                    <div class="w-10 h-10 rounded-xl flex items-center justify-center text-white shrink-0 border border-slate-900 dark:border-slate-700 shadow-[1px_1px_0px_#0f172a] dark:shadow-[1px_1px_0px_#000000]" style="background: var(--color-primary);">
                        <i class="fa-solid fa-id-card text-base"></i>
                    </div>
                    <div>
                        <h3 class="font-black text-slate-800 dark:text-white text-sm sm:text-base leading-tight">Kartu Member Digital</h3>
                        <p class="text-[10px] font-semibold text-slate-400">Loyalty Pass &amp; Poin Hadiah Toko Putri</p>
                    </div>
                </div>
                <div class="flex items-center gap-2">
                    <!-- Privacy Eye Shield Toggle -->
                    <button type="button" id="member-privacy-toggle-btn" onclick="toggleMemberPrivacyMode()" class="w-9 h-9 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 flex items-center justify-center transition-all cursor-pointer active:scale-95" title="${$?"Buka Sensor Angka Finansial":"Sensor Angka Finansial"}">
                        <i class="fa-solid ${$?"fa-eye-slash text-amber-500":"fa-eye text-slate-500"} text-xs"></i>
                    </button>

                    <!-- Quick Session Lock -->
                    <button type="button" id="member-quick-lock-btn" onclick="lockMemberSession()" class="${h?"":"hidden "}w-9 h-9 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 hover:bg-rose-100 hover:text-rose-500 flex items-center justify-center transition-all cursor-pointer active:scale-95" title="Kunci Sesi Member (Logout Cepat)">
                        <i class="fa-solid fa-lock text-xs"></i>
                    </button>

                    <!-- Close Button -->
                    <button type="button" onclick="closeMemberModal()" class="w-9 h-9 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 hover:bg-rose-100 hover:text-rose-500 flex items-center justify-center transition-all cursor-pointer active:scale-95" title="Tutup">
                        <i class="fa-solid fa-xmark text-sm"></i>
                    </button>
                </div>
            </div>
            <!-- Body Modal (Spacious Scroll Clearance) -->
            <div class="p-5 sm:p-6 pb-20 sm:pb-24 overflow-y-auto flex-1 space-y-6 custom-scrollbar" id="member-modal-body"></div>
        </div>`,C(),e.style.opacity="0",e.style.display="flex",requestAnimationFrame(()=>{e.style.transition="opacity 0.25s ease",e.style.opacity="1"}),!t&&typeof window.pushModalHistory=="function"&&window.pushModalHistory("member")},ze=async(s,e=!1)=>{try{let t=(s||"").toString().replace(/\D/g,"");if(t.startsWith("0")?t="62"+t.substring(1):t.startsWith("62")||(t="62"+t),!t||t.length<9)return[];const a=t,r=Z.get(a);if(!e&&r&&Date.now()-r.timestamp<vt)return r.data;const n=new Set([t,t.startsWith("62")?"0"+t.substring(2):t,t.startsWith("62")?t.substring(2):t]);let i=[];try{const o=localStorage.getItem("freshmart_my_orders");o&&(i=JSON.parse(o)||[])}catch{}let c=[];const l=o=>!!o&&(o.code==="permission-denied"||/insufficient permissions/i.test(o.message||""));if(!!($e&&$e.currentUser))for(const o of["customerPhone","phone"])try{const d=await K.collection("freshmart_orders").where(o,"in",Array.from(n).slice(0,10)).limit(50).get();if(d&&!d.empty){c=d.docs.map(p=>({id:p.id,...p.data()}));break}}catch(d){if(l(d))break;console.warn(`[getMemberPointsHistory] Query ${o} gagal:`,d)}if(!c.length&&i.length){const o=[...new Set(i.filter(p=>p&&p.id).map(p=>String(p.id)))].slice(0,20);(await Promise.allSettled(o.map(p=>K.collection("freshmart_orders").doc(p).get()))).forEach(p=>{p.status==="fulfilled"&&p.value&&p.value.exists?c.push({id:p.value.id,...p.value.data()}):p.status==="rejected"&&!l(p.reason)&&console.warn("[getMemberPointsHistory] Gagal memuat pesanan:",p.reason)})}const m=new Map;[...c,...i].forEach(o=>{if(o&&o.id){const d=(o.customerPhone||o.phone||o.customer&&o.customer.phone||"").toString().replace(/\D/g,"");(n.has(d)||!d)&&m.set(o.id,o)}});const f=[];return m.forEach(o=>{const d=Xe(o),p=d.toLocaleDateString("id-ID",{day:"numeric",month:"short",year:"numeric",hour:"2-digit",minute:"2-digit"}),w=d.getTime(),M=o.source==="pos",I=parseFloat(o.pointsEarned)||0;I>0&&f.push({id:`${o.id}-earn`,orderId:o.id,timestamp:w,dateStr:p,type:"earn",title:`Poin Belanja (${M?"Kasir POS":"Belanja Online"})`,desc:`Faktur #${o.id} • Total Belanja ${v(o.total||o.payment?.grandTotal||0)}`,points:I,sign:"+",colorClass:"text-emerald-500 dark:text-emerald-400",bgClass:"bg-emerald-500/10 border-emerald-500/20 text-emerald-600 dark:text-emerald-400",icon:"fa-coins"});const B=parseFloat(o.pointDiscount||o.payment?.pointDiscount)||0,E=parseFloat(o.pointsRedeemed)||0;if(B>0||E>0&&!o.claimedReward){const P=E>0?E:Math.round(B/1e3);f.push({id:`${o.id}-discount`,orderId:o.id,timestamp:w+1,dateStr:p,type:"discount",title:"Diskon Poin di Kasir POS",desc:`Potongan belanja tunai -${v(B||P*1e3)} • #${o.id}`,points:P,sign:"-",colorClass:"text-rose-500 dark:text-rose-400",bgClass:"bg-rose-500/10 border-rose-500/20 text-rose-600 dark:text-rose-400",icon:"fa-percent"})}if(o.claimedReward&&(o.claimedReward.name||o.claimedReward.id)){const P=parseFloat(o.claimedReward.pointsCost)||0,T=o.claimedReward.status==="ready"?"Tersedia / Diterima":o.claimedReward.status==="waiting_stock"?"Menunggu Stok Toko":"Sedang Diproses Toko";f.push({id:`${o.id}-reward`,orderId:o.id,timestamp:w+2,dateStr:p,type:"reward",title:`Tukar Hadiah: ${o.claimedReward.name}`,desc:`Status: ${T}${o.claimedReward.note?` ("${o.claimedReward.note}")`:""} • #${o.id}`,points:P,sign:"-",colorClass:"text-amber-500 dark:text-amber-400",bgClass:"bg-amber-500/10 border-amber-500/20 text-amber-600 dark:text-amber-400",icon:"fa-gift"})}}),f.sort((o,d)=>d.timestamp-o.timestamp),Z.set(a,{data:f,timestamp:Date.now()}),f}catch(t){return console.warn("[getMemberPointsHistory] Error:",t),[]}},Qe=async(s,e=!1)=>{const t=document.getElementById("member-points-history-list");if(!t)return;e&&(t.innerHTML=`
            <div class="space-y-2">
                <div class="flex items-center gap-3 p-3 rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white/70 dark:bg-slate-900/50">
                    <div class="w-9 h-9 rounded-xl skeleton-shimmer shrink-0"></div>
                    <div class="flex-1 space-y-1.5">
                        <div class="h-3 w-32 rounded-md skeleton-shimmer"></div>
                        <div class="h-2.5 w-44 rounded-md skeleton-shimmer"></div>
                    </div>
                    <div class="h-4 w-12 rounded-md skeleton-shimmer"></div>
                </div>
            </div>`);const a=await ze(s,e);if(t){if(!a||!a.length){t.innerHTML=`
            <div class="p-5 rounded-2xl border border-slate-200/90 dark:border-slate-800 text-center space-y-2 bg-slate-50/70 dark:bg-slate-900/40">
                <div class="w-10 h-10 rounded-2xl bg-amber-50 dark:bg-amber-950/40 text-amber-500 flex items-center justify-center mx-auto text-sm border border-amber-200/80 dark:border-amber-900/40 shadow-2xs">
                    <i class="fa-solid fa-coins"></i>
                </div>
                <p class="text-xs font-bold text-slate-700 dark:text-slate-300">Belum Ada Mutasi Poin</p>
                <p class="text-[11px] text-slate-400 max-w-xs mx-auto">
                    Kumpulkan poin di setiap belanja kasir POS atau pesanan online Toko Putri untuk menikmati diskon tunai &amp; hadiah eksklusif.
                </p>
            </div>
        `;return}t.innerHTML=a.map(r=>`
        <div class="flex items-center gap-3 p-3 rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white/70 dark:bg-slate-900/50 shadow-2xs hover:border-[var(--color-primary)]/40 transition-all">
            <div class="w-9 h-9 rounded-xl flex items-center justify-center text-xs shrink-0 border ${r.bgClass}">
                <i class="fa-solid ${r.icon}"></i>
            </div>
            <div class="min-w-0 flex-1">
                <div class="flex items-center justify-between gap-1">
                    <p class="text-xs font-bold text-slate-800 dark:text-white truncate">${g(r.title)}</p>
                    <span class="text-xs font-black ${r.colorClass} shrink-0">
                        ${r.sign}${r.points} Poin
                    </span>
                </div>
                <p class="text-[10px] text-slate-500 dark:text-slate-400 truncate mt-0.5">${g(r.desc)}</p>
                <p class="text-[9px] font-semibold text-slate-400 dark:text-slate-500 mt-0.5 flex items-center gap-1">
                    <i class="fa-regular fa-clock text-[8px]"></i> ${r.dateStr}
                </p>
            </div>
        </div>
    `).join("")}},Ct=s=>{if(!s)return{used:0,tagihanWajibBayar:0,totalPokok:0,totalFee:0,monthlyInstallment:0,tenorLabel:"",hasActiveOrder:!1};const e=Math.max(0,parseFloat(s.paylaterUsed)||0),t=(s.phone||s.id||"").toString().replace(/\D/g,""),a=[];Array.isArray(ee)&&ee.length&&a.push(...ee),Array.isArray(te)&&te.length&&a.push(...te);try{const l=localStorage.getItem("freshmart_my_orders");if(l){const u=JSON.parse(l);Array.isArray(u)&&a.push(...u)}}catch{}const r=new Set,n=a.filter(l=>!l||!l.orderId||r.has(l.orderId)?!1:(r.add(l.orderId),!0)),i=l=>{if(!t)return!0;const u=(l.customer?.phone||l.customer?.wa||"").toString().replace(/\D/g,"");return u&&(u===t||u.endsWith(t)||t.endsWith(u))},c=n.filter(l=>{if(!!!(l.payment?.isPaylater||l.isPaylater||l.payment?.subMethod==="paylater")||l.status==="Batal"||l.payment?.paymentStatus==="lunas")return!1;const m=parseFloat(l.payment?.tempoBalance);return!(isNaN(m)||m<=0||!i(l))});if(c.length>0){let l=0,u=0,m=0,f=0,o=0,d=[];return c.forEach(p=>{const w=Math.max(0,parseFloat(p.payment?.tempoBalance)||0);u+=w;const M=parseFloat(p.payment?.paylaterAdminFee)||0,I=parseFloat(p.payment?.paylaterServiceFee)||0,B=M+I,E=parseFloat(p.payment?.paylaterUsed)||Math.max(0,w-B),P=parseFloat(p.payment?.paylaterMonthlyInstallment)||w;m+=E,f+=B,o+=P;const T=Array.isArray(p.payment?.paylaterSchedule)&&p.payment.paylaterSchedule.length>0?p.payment.paylaterSchedule:null;if(T&&T.length>1){const A=(p.payment?.installments||[]).reduce((V,F)=>V+(parseFloat(F.amount)||0),0);let Q=0,Y=0;for(let V=0;V<T.length;V++){const F=T[V],re=parseFloat(F.pokok||F.principal)||0,ce=parseFloat((F.adminFee||0)+(F.serviceFee||0))||0,G=parseFloat(F.total||F.totalMonthly||F.totalInstallment)||re+ce;if(Q+=G,A<Q){const pe=Math.max(0,Q-A);Y=Math.min(pe,G);break}}l+=Y>0?Y:w}else l+=w;const b=p.payment?.paylaterTenor==="2m"?"2 Bulan":p.payment?.paylaterTenor==="3m"?"3 Bulan":"30 Hari";d.includes(b)||d.push(b)}),{used:e>0?e:m,tagihanBulanIni:l>0?l:u,tagihanWajibBayar:u,tagihanMendatang:Math.max(0,u-l),totalPokok:m>0?m:e,totalFee:f,monthlyInstallment:o>0?o:u,tenorLabel:d.join(", "),activeCount:c.length,hasActiveOrder:!0}}return{used:e,tagihanBulanIni:e,tagihanWajibBayar:e,tagihanMendatang:0,totalPokok:e,totalFee:0,monthlyInstallment:e,tenorLabel:"",activeCount:0,hasActiveOrder:!1}},C=()=>{const s=typeof document<"u"?document.getElementById("member-quick-lock-btn"):null;if(s&&(h?s.classList.remove("hidden"):s.classList.add("hidden")),D!=="idle"&&N){const n=D==="enter_pin",i=D==="create_pin",c=n?"Masukkan PIN Keamanan Member":i?"Buat 6-Digit PIN Pengaman":"Konfirmasi PIN 6-Digit",l=n?`Akun member <b>${Me(N.phone,!0)}</b> (${g(N.name||"Member")})`:i?"Lindungi akun kartu VIP, nomor HP, dan limit PayLater Anda.":"Ketikkan kembali 6 digit PIN yang baru saja Anda buat.",u=n?"fa-key":i?"fa-shield-halved":"fa-lock-open",m=Array.from({length:6}).map((o,d)=>{const p=S.length>d;return`
            <div class="w-4 h-4 sm:w-5 sm:h-5 rounded-full border-2 transition-all duration-200 flex items-center justify-center ${p?"primary-bg border-[var(--color-primary)] scale-110 shadow-xs shadow-[rgba(var(--color-primary-rgb),0.4)]":"border-slate-300 dark:border-slate-600 bg-slate-100 dark:bg-slate-800"}">
                ${p?'<div class="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-white"></div>':""}
            </div>`}).join(""),f=[["1","2","3"],["4","5","6"],["7","8","9"],["cancel","0","backspace"]];q("member-modal-body",`
            <div class="max-w-[360px] mx-auto py-2 flex flex-col items-center text-center select-none">
                <!-- Icon Badge -->
                <div class="w-12 h-12 rounded-xl flex items-center justify-center text-white text-lg mb-3 border-2 border-slate-900 dark:border-slate-700 shadow-[1.5px_1.5px_0px_#0f172a] dark:shadow-[1.5px_1.5px_0px_#000000]" style="background: var(--color-primary);">
                    <i class="fa-solid ${u}"></i>
                </div>

                <h3 class="text-sm sm:text-base font-black text-slate-800 dark:text-white">${c}</h3>
                <p class="text-[11px] text-slate-500 dark:text-slate-400 mt-1 max-w-[280px] leading-relaxed">${l}</p>

                ${L?`
                    <div class="mt-2.5 px-3 py-1.5 rounded-xl bg-rose-50 dark:bg-rose-900/30 border border-rose-200 dark:border-rose-800 text-rose-600 dark:text-rose-400 text-[11px] font-bold flex items-center gap-1.5 animate-shake">
                        <i class="fa-solid fa-triangle-exclamation text-xs"></i>
                        <span>${g(L)}</span>
                    </div>
                `:""}

                <!-- 6-Dots Indicator Container -->
                <div id="member-pin-dots-container" class="flex items-center justify-center gap-3 my-5 py-2">
                    ${m}
                </div>

                <!-- Bento Keypad Grid -->
                <div class="grid grid-cols-3 gap-2 sm:gap-2.5 w-full max-w-[280px]">
                    ${f.map(o=>o.map(d=>d==="cancel"?`
                            <button type="button" onclick="cancelMemberPinAuth()" class="h-12 sm:h-13 rounded-2xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-500 dark:text-slate-300 font-bold text-xs flex items-center justify-center active:scale-90 transition-all cursor-pointer shadow-2xs" title="Batal">
                                <i class="fa-solid fa-arrow-left text-sm"></i>
                            </button>`:d==="backspace"?`
                            <button type="button" onclick="handleMemberPinBackspace()" class="h-12 sm:h-13 rounded-2xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-200 font-bold text-xs flex items-center justify-center active:scale-90 transition-all cursor-pointer shadow-2xs" title="Hapus">
                                <i class="fa-solid fa-delete-left text-base"></i>
                            </button>`:`
                        <button type="button" onclick="handleMemberPinDigit('${d}')" class="h-12 sm:h-13 rounded-2xl bg-white hover:bg-slate-50 dark:bg-slate-800/90 dark:hover:bg-slate-700/80 border border-slate-200/90 dark:border-slate-700 text-slate-800 dark:text-white font-black text-lg sm:text-xl flex items-center justify-center active:scale-90 transition-all cursor-pointer shadow-2xs hover:border-[var(--color-primary)]/40">
                            ${d}
                        </button>`).join("")).join("")}
                </div>

                <!-- Public Device Auto-Lock Warning / Remember Device -->
                ${n?`
                    <div class="mt-4 pt-3 border-t border-slate-200/60 dark:border-slate-800/60 w-full flex flex-col items-center gap-2">
                        <label class="flex items-center gap-2 text-[11px] font-bold text-slate-600 dark:text-slate-300 cursor-pointer select-none">
                            <input type="checkbox" id="member-remember-device-check" ${le?"checked":""} onchange="toggleRememberMemberDevice(this.checked)" class="rounded text-[var(--color-primary)] focus:ring-[var(--color-primary)] w-4 h-4 cursor-pointer" />
                            <span>Ingat sesi di perangkat pribadi ini</span>
                        </label>
                        <p class="text-[9.5px] text-slate-400 dark:text-slate-500 max-w-[260px] leading-tight">
                            <i class="fa-solid fa-shield-cat text-amber-500 mr-0.5"></i>
                            Jika di HP kasir atau komputer publik, hilangkan centang agar akun otomatis terkunci saat ditutup.
                        </p>
                    </div>

                    <!-- Lupa PIN Support Link -->
                    <div class="mt-3">
                        <a href="https://wa.me/${(y.store?.wa||"").replace(/\D/g,"")}?text=${encodeURIComponent(`Halo Admin Toko Putri, saya lupa PIN keamanan akun member untuk nomor +${N.phone||""}. Mohon bantuannya untuk reset PIN member saya. Terima kasih.`)}" target="_blank" class="text-[10.5px] font-bold text-[var(--color-primary)] hover:underline flex items-center justify-center gap-1 cursor-pointer">
                            <i class="fa-solid fa-circle-question text-[10px]"></i> Lupa PIN? Hubungi Admin Toko
                        </a>
                    </div>
                `:""}
            </div>
        `);return}const e=(y.rewards||[]).filter(n=>n.isActive!=="false"&&n.isActive!==!1),t=h&&parseFloat(h.points)||0,a=he(t),r=e.length?e.map(n=>{const i=(parseFloat(n.stock)||0)>0,c=h&&t>=(parseFloat(n.pointsCost)||0)&&i,l=ue&&ue.id===n.id;return`
        <div class="flex items-center gap-3 p-3.5 rounded-2xl border ${l?"border-[var(--color-primary)] bg-[rgba(var(--color-primary-rgb),0.06)] dark:bg-[rgba(var(--color-primary-rgb),0.12)] shadow-xs":"border-slate-200/90 dark:border-slate-800/80 bg-white dark:bg-slate-900"} transition-all">
            ${n.img?`<div class="w-14 h-14 rounded-xl overflow-hidden bg-white dark:bg-slate-950 border border-slate-200/90 dark:border-slate-800/80 shrink-0 flex items-center justify-center"><img src="${g(n.img)}" class="w-full h-full object-cover" onerror="this.style.display='none'" loading="lazy"></div>`:'<div class="w-14 h-14 rounded-xl bg-white dark:bg-slate-950 border border-slate-200/90 dark:border-slate-800/80 flex items-center justify-center text-slate-300 dark:text-slate-600 shrink-0"><i class="fa-solid fa-gift text-xl"></i></div>'}
            <div class="min-w-0 flex-1">
                <p class="text-xs font-bold text-slate-800 dark:text-white truncate">${g(n.name)}</p>
                <p class="text-[11px] font-black text-[var(--color-primary)] mt-0.5 flex items-center gap-1">
                    <i class="fa-solid fa-star text-[10px]"></i> ${parseFloat(n.pointsCost)||0} Poin
                </p>
                ${i?"":'<p class="text-[10px] font-bold text-rose-500 mt-0.5">Stok hadiah habis</p>'}
            </div>
            ${h?l?'<button type="button" onclick="deselectReward()" class="shrink-0 bg-rose-500 hover:bg-rose-600 text-white text-[10px] font-bold uppercase px-3 py-2 rounded-xl active:scale-95 transition-all whitespace-nowrap shadow-xs cursor-pointer">Batal</button>':`<button type="button" ${c?"":"disabled"} onclick="selectReward('${g(String(n.id))}')" class="shrink-0 ${c?"primary-bg hover:opacity-90 text-white active:scale-95 shadow-xs cursor-pointer":"bg-slate-200 dark:bg-slate-700 text-slate-400 cursor-not-allowed"} text-[10px] font-bold uppercase px-3 py-2 rounded-xl transition-all whitespace-nowrap">Pilih Hadiah</button>`:`<span class="text-[10px] font-bold text-slate-400 uppercase bg-slate-100 dark:bg-slate-800 px-2.5 py-1.5 rounded-lg">${parseFloat(n.pointsCost)||0} Poin</span>`}
        </div>`}).join(""):'<p class="text-[11px] font-bold text-slate-400 text-center py-3">Belum ada program hadiah yang tersedia.</p>';h?(q("member-modal-body",`
            <!-- KARTU MEMBER DIGITAL (3D INTERAKTIF) -->
            <div>
                ${Be(h)}
                
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
                    <button type="button" onclick="lockMemberSession()" class="text-[10px] text-slate-400 hover:text-[var(--color-primary)] font-semibold transition-colors cursor-pointer">
                        <i class="fa-solid fa-lock mr-1"></i>Kunci Sesi / Cek nomor WhatsApp lain
                    </button>
                </div>
            </div>

            <!-- TIER STATUS & PROGRESS LEVEL -->
            <div class="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-800/40 space-y-3">
                <div class="flex items-center justify-between">
                    <div>
                        <p class="text-[9px] font-bold text-slate-400 uppercase tracking-wider">Level Keanggotaan</p>
                        <h4 class="text-xs sm:text-sm font-black text-slate-800 dark:text-white flex items-center gap-1.5 mt-0.5">
                            <i class="fa-solid ${a.icon} text-[var(--color-primary)]"></i> ${a.name}
                        </h4>
                    </div>
                    <div class="text-right">
                        <p class="text-[9px] font-bold text-slate-400 uppercase tracking-wider">Total Saldo</p>
                        <p class="text-xs sm:text-sm font-black text-[var(--color-primary)] mt-0.5 flex items-center justify-end gap-1"><i class="fa-solid fa-coins text-[11px]"></i> ${t} Poin</p>
                    </div>
                </div>

                ${a.nextTier?`
                <div class="space-y-1.5 pt-1">
                    <div class="flex justify-between text-[10px] font-semibold text-slate-500 dark:text-slate-400">
                        <span>Menuju <b>${a.nextTier}</b></span>
                        <span class="font-bold text-[var(--color-primary)]">${a.progress}%</span>
                    </div>
                    <div class="w-full h-2 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden">
                        <div class="h-full rounded-full primary-bg transition-all duration-500" style="width: ${a.progress}%"></div>
                    </div>
                    <p class="text-[9px] text-slate-500 dark:text-slate-400 font-medium">
                        Kumpulkan <b>${a.ptsNeeded} poin lagi</b> untuk otomatis naik tingkat ke <b>${a.nextTier}</b>!
                    </p>
                </div>`:`
                <p class="text-[10px] text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-1">
                    <i class="fa-solid fa-crown"></i> Anda telah mencapai level member tertinggi Toko Putri!
                </p>`}

                <!-- Member Privileges Pill -->
                <div class="pt-2 border-t border-slate-200/60 dark:border-slate-700/60">
                    <p class="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-1.5">Hak Istimewa Member Anda:</p>
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                        ${a.perks.map(n=>`
                        <div class="flex items-center gap-1.5 text-[10px] font-semibold text-slate-700 dark:text-slate-300">
                            <i class="fa-solid fa-check text-emerald-500 text-[9px] shrink-0"></i>
                            <span class="truncate">${g(n)}</span>
                        </div>`).join("")}
                    </div>
                </div>
            </div>

            <!-- PUTRI PAYLATER DIGITAL CREDIT LIMIT -->
            ${(()=>{const n=Math.max(0,parseFloat(h.paylaterLimit)||0),i=Ct(h),c=i.used,l=h.paylaterActive===!0||h.paylaterActive==="true",u=Math.max(0,n-c),m=n>0?Math.min(100,Math.max(0,Math.round(c/n*100))):0,f=h.paylaterDueDay||5;if(!l||n<=0)return`
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
                            <a href="https://wa.me/${(y.store?.wa||"").replace(/\D/g,"")}?text=${encodeURIComponent(`Halo Admin Toko Putri, saya bermaksud mengajukan aktivasi fasilitas limit kredit Putri PayLater untuk nomor member: ${h.phone||""}. Mohon informasi dan verifikasi persyaratannya. Terima kasih.`)}" target="_blank" class="text-[10px] font-bold text-[var(--color-primary)] hover:underline flex items-center gap-1">Ajukan Aktivasi <i class="fa-solid fa-arrow-right text-[8px]"></i></a>
                        </div>
                    </div>`;const o=i.tagihanBulanIni>0?i.tagihanBulanIni:i.monthlyInstallment>0?i.monthlyInstallment:i.tagihanWajibBayar,d=i.tagihanBulanIni>0&&i.tagihanBulanIni<i.tagihanWajibBayar;return`
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
                            <p class="text-sm font-black text-[var(--color-primary)] font-mono">${U(u,$)}</p>
                        </div>
                    </div>

                    <!-- Progress Bar Penggunaan Limit -->
                    <div class="space-y-1.5 pt-0.5">
                        <div class="flex justify-between text-[10px] font-bold text-slate-500 dark:text-slate-400">
                            <span>Terpakai: <b class="font-mono text-slate-800 dark:text-slate-200">${U(c,$)}</b> (${m}%)</span>
                            <span>Total Plafon: <b class="font-mono text-slate-800 dark:text-slate-200">${U(n,$)}</b></span>
                        </div>
                        <div class="w-full h-2.5 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden p-0.5">
                            <div class="h-full rounded-full transition-all duration-500" style="background: var(--color-primary); width: ${m}%;"></div>
                        </div>
                    </div>

                    <div class="pt-2 border-t border-slate-200/60 dark:border-slate-700/60 flex items-center justify-between text-[10px]">
                        <span class="text-slate-500 dark:text-slate-400 flex items-center gap-1">
                            <i class="fa-regular fa-calendar-check text-[var(--color-primary)]"></i> Jatuh Tempo: <b>Tgl ${f} Bulan Depan</b>
                        </span>
                        <span class="text-[var(--color-primary)] font-bold">1-Klik Checkout Siap Pakai</span>
                    </div>

                    ${i.tagihanWajibBayar>0||c>0?`
                        <div class="pt-2.5 border-t border-dashed border-slate-200 dark:border-slate-700 space-y-2.5">
                            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                                <div class="min-w-0 space-y-0.5">
                                    <p class="text-[9px] text-slate-400 uppercase font-black tracking-wider flex items-center gap-1">
                                        <i class="fa-solid fa-file-invoice-dollar text-[var(--color-primary)]"></i> ${d?"Angsuran Bulan Ini (Wajib Bayar)":"Tagihan Berjalan (Wajib Bayar)"}
                                    </p>
                                    <div class="flex items-baseline gap-1.5 flex-wrap">
                                        <p class="text-base sm:text-lg font-black text-rose-600 dark:text-rose-400 font-mono">${U(o,$)}</p>
                                        ${d?`
                                             <span class="text-[10px] text-slate-500 dark:text-slate-400 font-medium">dari total ${U(i.tagihanWajibBayar,$)}</span>
                                        `:""}
                                    </div>
                                    ${d?`
                                        <p class="text-[9.5px] text-slate-500 dark:text-slate-400 font-medium">
                                            Sisa Termin Bulan Depan: <b class="font-mono text-slate-700 dark:text-slate-300">${U(i.tagihanMendatang,$)}</b>
                                        </p>
                                    `:i.totalFee>0?`
                                        <p class="text-[9px] text-slate-400 font-medium mt-0.5">
                                            Pokok: <span class="font-mono text-slate-600 dark:text-slate-300 font-bold">${U(i.totalPokok,$)}</span> + Biaya Tenor: <span class="font-mono text-[var(--color-primary)] font-bold">+${U(i.totalFee,$)}</span>
                                        </p>
                                    `:""}
                                </div>
                                <div class="flex items-center gap-2 shrink-0">
                                    <button type="button" onclick="if(typeof window.openClientPaymentModal==='function') window.openClientPaymentModal('', ${o}); else if(typeof openClientPaymentModal==='function') openClientPaymentModal('', ${o});" class="neo-btn flex-1 sm:flex-none px-4 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-wider text-white flex items-center justify-center gap-1.5 cursor-pointer" style="background: var(--color-primary);">
                                        <i class="fa-solid fa-credit-card text-xs"></i> Bayar ${d?"Bulan Ini":"Tagihan"}
                                    </button>
                                    <a href="https://wa.me/${(y.store?.wa||"").replace(/\D/g,"")}?text=${encodeURIComponent(`Halo Tim Keuangan Toko Putri, saya ingin konfirmasi pembayaran tagihan Putri PayLater sebesar ${v(o)} untuk nomor akun: ${h.phone||""}. Berikut saya lampirkan bukti transfer pembayarannya. Terima kasih.`)}" target="_blank" class="p-2.5 rounded-xl text-slate-500 hover:text-[var(--color-primary)] border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 flex items-center justify-center active:scale-95 transition-all shadow-2xs" title="Konfirmasi via WhatsApp">
                                        <i class="fa-brands fa-whatsapp text-sm text-[var(--color-primary)]"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    `:""}
                </div>`})()}

            <!-- TABEL RINCIAN JADWAL ANGSURAN & TAGIHAN BERJALAN PELANGGAN -->
            ${(()=>{const n=typeof fe=="function"?fe():typeof window.getMemberActiveTempoOrders=="function"?window.getMemberActiveTempoOrders():[];if(!n||n.length===0)return"";let i=[];try{const l=localStorage.getItem("freshmart_pending_confirmations");l&&(i=JSON.parse(l)||[])}catch{}const c=typeof ve=="function"?ve:window.renderClientInstallmentSchedule;return typeof c!="function"?"":`
                <div class="space-y-3.5">
                    <div class="flex items-center justify-between">
                        <p class="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest flex items-center gap-1.5">
                            <i class="fa-solid fa-list-check text-[var(--color-primary)]"></i> Jadwal Angsuran &amp; Cicilan Anda
                        </p>
                        <span class="text-[10px] font-bold text-[var(--color-primary)]">${n.length} Tagihan Aktif</span>
                    </div>
                    ${n.map(l=>c(l,i)).join("")}
                </div>`})()}

            <!-- KATALOG REWARD / PENUKARAN HADIAH -->
            <div>
                <p class="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-2.5">Katalog Hadiah yang Dapat Ditukar</p>
                <div class="space-y-2.5">${r}</div>
            </div>

            ${ue?`<div class="bg-[rgba(var(--color-primary-rgb),0.06)] dark:bg-[rgba(var(--color-primary-rgb),0.12)] border border-[var(--color-primary)]/30 rounded-xl p-3.5 text-[11px] font-bold text-[var(--color-primary)] flex items-center gap-2"><i class="fa-solid fa-gift text-base shrink-0"></i><span>Hadiah "<b>${g(ue.name)}</b>" telah dipilih dan akan otomatis diproses saat pesanan Anda selesai di checkout.</span></div>`:""}

            <!-- RIWAYAT MUTASI POIN & HADIAH (POINT LEDGER) -->
            <div class="space-y-2.5 pt-2 border-t border-slate-200/60 dark:border-slate-800/60">
                <div class="flex items-center justify-between">
                    <p class="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">Riwayat Mutasi Poin &amp; Hadiah</p>
                    <button type="button" onclick="loadMemberPointsHistory('${g(h.phone||h.id||"")}', true)" class="text-[10px] text-[var(--color-primary)] font-bold hover:underline cursor-pointer flex items-center gap-1 active:scale-95 transition-all">
                        <i class="fa-solid fa-arrows-rotate text-[9px]"></i> Refresh
                    </button>
                </div>
                <div id="member-points-history-list" class="space-y-2">
                    <div class="space-y-2">
                        <div class="flex items-center gap-3 p-3 rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white/70 dark:bg-slate-900/50">
                            <div class="w-9 h-9 rounded-xl skeleton-shimmer shrink-0"></div>
                            <div class="flex-1 space-y-1.5">
                                <div class="h-3 w-32 rounded-md skeleton-shimmer"></div>
                                <div class="h-2.5 w-44 rounded-md skeleton-shimmer"></div>
                            </div>
                            <div class="h-4 w-12 rounded-md skeleton-shimmer"></div>
                        </div>
                        <div class="flex items-center gap-3 p-3 rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white/70 dark:bg-slate-900/50">
                            <div class="w-9 h-9 rounded-xl skeleton-shimmer shrink-0"></div>
                            <div class="flex-1 space-y-1.5">
                                <div class="h-3 w-28 rounded-md skeleton-shimmer"></div>
                                <div class="h-2.5 w-40 rounded-md skeleton-shimmer"></div>
                            </div>
                            <div class="h-4 w-12 rounded-md skeleton-shimmer"></div>
                        </div>
                    </div>
                </div>
            </div>
        `),setTimeout(()=>{h&&Qe(h.phone||h.id)},50)):q("member-modal-body",`
            <!-- PREVIEW KARTU CONTOH (MEMIKAT PELANGGAN) -->
            <div class="opacity-95">
                ${Be({name:"CONTOH: PELANGGAN VIP",phone:"81234567890",points:500})}
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
                        <input type="tel" id="member-lookup-input" class="w-full form-input-bento rounded-xl border border-slate-200 bg-white py-3 pl-12 pr-3 text-sm sm:text-xs font-bold text-slate-800 outline-none focus:border-[var(--color-primary)] dark:border-slate-700 dark:bg-slate-900 dark:text-white" placeholder="81234567890" inputmode="numeric" autocomplete="off" />
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
                    <li>Dilengkapi PIN Keamanan 6-Digit &amp; Sensor Mata Privasi Finansial.</li>
                </ul>
            </div>

            <!-- KATALOG HADIAH -->
            <div>
                <p class="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-2.5">Katalog Hadiah yang Dapat Ditukar</p>
                <div class="space-y-2.5">${r}</div>
            </div>
        `)},Dt=async()=>{const s=document.getElementById("member-lookup-input"),e=document.getElementById("member-lookup-result");if(!s||!e)return;let t=s.value.replace(/\D/g,"");if(!t||t.length<9){e.className="text-xs font-bold text-rose-500 p-2.5 bg-rose-50 dark:bg-rose-900/20 rounded-xl",e.textContent="Masukkan minimal 9 digit nomor WhatsApp!",e.classList.remove("hidden");return}t.startsWith("0")?t="62"+t.substring(1):t.startsWith("62")||(t="62"+t),e.className="text-xs font-bold text-[var(--color-primary)] p-2.5 primary-bg-soft rounded-xl",e.textContent="Memverifikasi status keanggotaan...",e.classList.remove("hidden");try{const a=await K.collection("freshmart").doc("cms_data").collection("customers").doc(t).get();if(a.exists){let r=a.data();if((parseFloat(r.points)||0)===0){const n=await Te(t,r.name);n&&(r=n)}O.set(t,{data:r,timestamp:Date.now()}),N=r,S="",z="",L="",r.pin?D="enter_pin":D="create_pin",C();return}else{e.className="text-xs font-bold text-amber-700 dark:text-amber-300 p-3.5 bg-amber-50 dark:bg-amber-900/20 rounded-xl leading-relaxed border border-amber-200 dark:border-amber-800/40 space-y-1.5";const r=(y.store&&y.store.wa||"").replace(/\D/g,""),n=encodeURIComponent(`Halo Admin Toko Putri, saya bermaksud mendaftarkan nomor saya (+${t}) sebagai Member Resmi Toko Putri untuk mendapatkan reward poin dan fasilitas tempo. Mohon bantuannya. Terima kasih.`),i=r?`https://wa.me/${r}?text=${n}`:"#";e.innerHTML=`
                <div class="flex items-center gap-1.5 text-amber-800 dark:text-amber-200 font-extrabold text-[11px]">
                    <i class="fa-solid fa-circle-info text-amber-500"></i>
                    <span>Nomor Belum Terdaftar sebagai Member Resmi</span>
                </div>
                <p class="text-[11px] font-medium text-slate-600 dark:text-slate-300 leading-normal">
                    Nomor <b>+${g(t)}</b> saat ini tercatat sebagai <b>Pelanggan Umum</b>. Fitur Poin Hadiah dan fasilitas pembayaran <b>Cash Tempo</b> hanya dapat digunakan setelah nomor Anda dikonfirmasi & disimpan oleh Admin Toko di database CMS.
                </p>
                ${r?`
                <div class="pt-1">
                    <a href="${i}" target="_blank" class="inline-flex items-center gap-1.5 text-[10px] font-bold text-emerald-600 dark:text-emerald-400 hover:underline">
                        <i class="fa-brands fa-whatsapp text-emerald-500"></i> Hubungi Admin untuk Pendaftaran Member
                    </a>
                </div>`:""}
            `}}catch{e.className="text-xs font-bold text-rose-500 p-2.5 bg-rose-50 dark:bg-rose-900/20 rounded-xl",e.textContent="Gagal mengecek data. Silakan periksa koneksi internet Anda."}},Lt=s=>{const e=(y.rewards||[]).find(a=>a.id===s);if(!e)return;if((parseFloat(h?.points)||0)<(parseFloat(e.pointsCost)||0)){typeof window.showToast=="function"&&window.showToast("Poin Anda belum cukup untuk hadiah ini!");return}if((parseFloat(e.stock)||0)<=0){typeof window.showToast=="function"&&window.showToast("Maaf, stok hadiah ini sedang kosong!");return}ie({id:e.id,name:e.name,pointsCost:parseFloat(e.pointsCost)||0}),C(),typeof window.showToast=="function"&&window.showToast(`Hadiah "${e.name}" dipilih! Lanjutkan checkout untuk menukarnya.`)},jt=()=>{ie(null),C()},Ze=(s=!1)=>{const e=document.getElementById("member-modal");if(!e||e.style.display==="none")return;if(!le){j(null);try{typeof localStorage<"u"&&(localStorage.removeItem("freshmart_current_member"),localStorage.removeItem("freshmart_member_wa"))}catch{}}N=null,D="idle",S="",z="",L="";const t=()=>{e.style.opacity="0",e.style.transition="opacity 0.25s ease",setTimeout(()=>{e.style.display="none",e.style.opacity="",e.style.transition=""},250)};typeof window.requestCloseModal=="function"?window.requestCloseModal("member",s,t):t()},Rt=()=>{Oe()};typeof document<"u"&&document.addEventListener("keydown",s=>{const e=document.getElementById("member-modal");!e||e.style.display==="none"||D!=="idle"&&(/^[0-9]$/.test(s.key)?(s.preventDefault(),Ue(s.key)):s.key==="Backspace"?(s.preventDefault(),Ke()):s.key==="Escape"&&(s.preventDefault(),Ge()))});typeof window<"u"&&(window.renderRewardCatalog=$t,window.checkMemberStatus=Nt,window.openMemberModal=Bt,window.rMemberModalBody=C,window.lookupMemberPoints=Dt,window.selectReward=Lt,window.deselectReward=jt,window.closeMemberModal=Ze,window.flipMemberCard=At,window.downloadMemberCard=It,window.getMemberTier=he,window.formatMemberCardNumber=Ve,window.maskMemberCardNumber=qe,window.maskPhoneNumber=Me,window.formatMaskedCurrency=U,window.toggleMemberPrivacyMode=Mt,window.lockMemberSession=Oe,window.toggleRememberMemberDevice=Tt,window.handleMemberPinDigit=Ue,window.handleMemberPinBackspace=Ke,window.cancelMemberPinAuth=Ge,window.processMemberPinSubmission=We,window.generateBarcodeSVG=Je,window.setCurrentMember=j,window.logoutMember=Rt,window.invalidateMemberCache=St,window.reconcilePointsFromOrders=Te,window.getMemberPointsHistory=ze,window.loadMemberPointsHistory=Qe);export{de as G,ge as a,he as g,we as u};
