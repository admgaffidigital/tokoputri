import{e as y,g as ve,a as f,s as _,c as ce,b as H,f as w,d as $e,h as I,i as h,r as he,j as q,k as v,l as Q,m as ie,n as O,o as Ce,p as g,q as G,t as J,u as z,v as De,w as D,x as Z,y as re,z as ye}from"./module-print-BE76b_Ra.js";let le="https://script.google.com/macros/s/AKfycbx3dW9rHcdoKNYjSOJ8PoH2k6fABe7XlBD9teNHsBlCBqJquq8jd4UvnfXZVsfKdFsC/exec";const Pe=()=>{y("voucher-input");const s=(ve("voucher-input")||"").toUpperCase().trim(),e=(f.vouchers||[]).find(r=>(r.code||"").toUpperCase()===s);_("voucher-msg-container");const t=typeof window.getEffP=="function"?window.getEffP:r=>r.effectivePrice||r.price||0,a=ce.reduce((r,n)=>r+(parseFloat(t(n))||0)*(parseFloat(n.qty)||0),0);if(e){let r=!0;e.targetProduct&&e.targetProduct!==""&&(r=ce.some(n=>n&&String(n.id)===String(e.targetProduct))),e.targetProduct&&e.targetProduct!==""&&!r?(q(null),H("voucher-msg",'<i class="fa-solid fa-box mr-1"></i> Khusus Produk Tertentu!'),y("voucher-msg")&&(y("voucher-msg").className="text-sm font-bold text-rose-500 dark:text-rose-400")):e.minPurchase&&parseFloat(e.minPurchase)>0&&a<parseFloat(e.minPurchase)?(q(null),H("voucher-msg",`<i class="fa-solid fa-circle-exclamation mr-1"></i> Minimal belanja ${w(e.minPurchase)}`),y("voucher-msg")&&(y("voucher-msg").className="text-sm font-bold text-amber-500 dark:text-amber-400")):e.type&&e.type.includes("shipping")&&$e.deliveryMethod!=="delivery"?(q(null),H("voucher-msg",'<i class="fa-solid fa-motorcycle mr-1"></i> Khusus pesanan dikirim kurir!'),y("voucher-msg")&&(y("voucher-msg").className="text-sm font-bold text-rose-500 dark:text-rose-400")):(q(e),H("voucher-msg",'<i class="fa-solid fa-check-circle mr-1"></i> Voucher Diterapkan!'),y("voucher-msg")&&(y("voucher-msg").className="text-sm font-bold text-[var(--color-primary)]"))}else s===""?(q(null),I("voucher-msg-container"),typeof window.rPay=="function"&&window.rPay()):(q(null),H("voucher-msg",'<i class="fa-solid fa-times-circle mr-1"></i> Kode Tidak Valid'),y("voucher-msg")&&(y("voucher-msg").className="text-sm font-bold text-rose-500 dark:text-rose-400"));typeof window.rPay=="function"&&window.rPay()},Re=()=>{let s=document.getElementById("voucher-modal");s||(s=document.createElement("div"),s.id="voucher-modal",s.className="fixed inset-0 z-[115] bg-slate-900/80 flex items-end sm:items-center justify-center p-0 sm:p-5",s.onclick=a=>{a.target===s&&ue()},document.body.appendChild(s));const e=(f.vouchers||[]).filter(a=>a.isShow!==!1&&a.isShow!=="false"),t=e.length?e.map(a=>{let r="";a.type==="percent"?r=`Diskon ${a.value}%`:a.type==="shipping_free"?r="Gratis Ongkir":a.type==="shipping_flat"?r=`Diskon Ongkir ${w(a.value)}`:r=`Potongan ${w(a.value)}`;const n=a.minPurchase&&parseFloat(a.minPurchase)>0?`Min. belanja ${w(a.minPurchase)}`:"Tanpa minimal belanja";return`
        <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/80 hover:border-[var(--color-primary)] transition-all shadow-xs">
            <div class="flex items-start gap-3.5 min-w-0">
                <div class="w-11 h-11 rounded-xl bg-[var(--color-primary)] text-white flex items-center justify-center text-lg shrink-0 shadow-sm mt-0.5">
                    <i class="fa-solid fa-ticket"></i>
                </div>
                <div class="min-w-0">
                    <div class="flex flex-wrap items-center gap-2 mb-1.5">
                        <span class="font-extrabold text-sm font-mono tracking-wider text-slate-800 dark:text-white bg-white dark:bg-slate-900 px-2.5 py-0.5 rounded-lg border border-slate-200 dark:border-slate-700 select-all">${h(a.code)}</span>
                        <span class="primary-bg text-white text-[10px] font-bold px-2 py-0.5 rounded-md uppercase whitespace-nowrap shadow-2xs">${r}</span>
                    </div>
                    <p class="text-[11px] font-medium text-slate-500 dark:text-slate-400 flex items-center gap-1.5"><i class="fa-solid fa-circle-check text-[var(--color-primary)] text-xs"></i> ${n}</p>
                </div>
            </div>
            <div class="flex items-center gap-2 shrink-0 pt-2 md:pt-0 border-t md:border-t-0 border-slate-200 dark:border-slate-700">
                <button type="button" onclick="copyVoucherCode('${h(a.code)}')" class="flex-1 md:flex-initial bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] text-xs font-bold uppercase tracking-wider px-3.5 py-2 rounded-xl transition-all active:scale-95 flex items-center justify-center gap-1.5 shadow-2xs">
                    <i class="fa-regular fa-copy"></i> Salin
                </button>
                <button type="button" onclick="useVoucherCode('${h(a.code)}')" class="flex-1 md:flex-initial primary-bg text-white text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-xl transition-all active:scale-95 flex items-center justify-center gap-1.5 shadow-sm">
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
        </div>`,s.style.opacity="0",s.style.display="flex",requestAnimationFrame(()=>{s.style.transition="opacity 0.25s ease",s.style.opacity="1"}),typeof window.pushModalHistory=="function"&&window.pushModalHistory("voucher")},Le=s=>{navigator.clipboard&&navigator.clipboard.writeText?navigator.clipboard.writeText(s).then(()=>{typeof window.showToast=="function"&&window.showToast(`✅ Kode "${s}" disalin ke clipboard!`)}).catch(()=>{typeof window.showToast=="function"&&window.showToast(`Kode Kupon: ${s}`)}):typeof window.showToast=="function"&&window.showToast(`Kode Kupon: ${s}`)},je=s=>{ue();const e=y("voucher-input");e&&(e.value=s,Pe()),ce.length>0?typeof window.changeView=="function"&&window.changeView("view-checkout"):(typeof window.showToast=="function"&&window.showToast(`Kode "${s}" siap digunakan saat checkout belanja!`),typeof window.changeView=="function"&&window.changeView("view-catalog"))},ue=(s=!1)=>{const e=()=>{const t=document.getElementById("voucher-modal");!t||t.style.display==="none"||(t.style.opacity="0",t.style.transition="opacity 0.25s ease",setTimeout(()=>{t.style.display="none",t.style.opacity="",t.style.transition=""},250))};typeof he=="function"?he("voucher",s,e):typeof window.requestCloseModal=="function"?window.requestCloseModal("voucher",s,e):e()};window.applyVoucher=Pe;window.openVoucherModal=Re;window.closeVoucherModal=ue;window.copyVoucherCode=Le;window.useVoucherCode=je;const X="B7qgwFQqtYLpBqdaK69HgtCfR7s5t67p",Ee=20*1024*1024,Oe=["video/mp4","video/webm","video/quicktime","video/x-msvideo","video/3gpp"],Ae=["image/jpeg","image/png","image/webp","image/gif"],Fe=async(s,e,t=null)=>{const a=s.files[0];if(!a)return;const r=a.type==="image/gif"||/\.gif$/i.test(a.name||""),n=r?"image/gif":a.type||"image/jpeg";if(!Ae.includes(n)&&!r)return s.value="",v("Hanya file JPG, PNG, WEBP, atau GIF yang diizinkan!");const i=r?8*1024*1024:3*1024*1024,l=r?"8MB":"3MB";if(a.size>i)return s.value="",v(`Maksimal ukuran file ${l} (GIF animasi maks 8MB)!`);const d=window.GAS_UPLOAD_URL||le;if(d.includes("ISI_DENGAN"))return s.value="",v("URL Script Google belum diisi!");Q("Upload Gambar...");const u=new FileReader;u.readAsDataURL(a),u.onload=async()=>{try{const x=u.result.split(",")[1],m=a.name.replace(/[^a-zA-Z0-9.]/g,"_"),o={name:"POS_"+Date.now()+"_"+m,mimeType:n,data:x,token:X},p=await(await fetch(d,{method:"POST",body:JSON.stringify(o),headers:{"Content-Type":"text/plain;charset=utf-8"},redirect:"follow"})).text();let k;try{k=JSON.parse(p)}catch{return v("Error Server!")}if(k.status==="success"){const P=ie(k.url,n),S=y(e);S&&(S.value=P,S.dispatchEvent(new Event("input",{bubbles:!0})),S.dispatchEvent(new Event("change",{bubbles:!0})),t!==null&&typeof window.uVar=="function"&&window.uVar(t,"img",P),v("Gambar diupload!"))}else v("Gagal: "+(k.message||"Error"))}catch{v("Koneksi terputus saat upload.")}finally{O(),s.value=""}},u.onerror=()=>{v("Gagal membaca file!"),O(),s.value=""}},Ue=async(s,e)=>{const t=s.files[0];if(!t)return;if(!Oe.includes(t.type))return s.value="",v("Hanya file MP4, WEBM, MOV, atau AVI yang diizinkan!");if(t.size>Ee)return s.value="",v("Video terlalu besar! Maksimal 20MB.");const a=window.GAS_UPLOAD_URL||le;if(a.includes("ISI_DENGAN"))return s.value="",v("URL Script Google belum diisi di Pengaturan!");Q("Upload Video... (harap tunggu)");const r=new FileReader;r.readAsDataURL(t),r.onload=async()=>{try{const n=r.result.split(",")[1],i=t.name.replace(/[^a-zA-Z0-9.]/g,"_"),l={name:"VID_"+Date.now()+"_"+i,mimeType:t.type,data:n,token:X},u=await(await fetch(a,{method:"POST",body:JSON.stringify(l),headers:{"Content-Type":"text/plain;charset=utf-8"},redirect:"follow"})).text();let x;try{x=JSON.parse(u)}catch{return v("Error Server GAS!")}if(x.status==="success"){const m="https://drive.google.com/file/d/"+x.fileId+"/preview",o=y(e);o&&(o.value=m,o.dispatchEvent(new Event("input",{bubbles:!0})),o.dispatchEvent(new Event("change",{bubbles:!0})),v("Video berhasil diupload ke Drive!"))}else v("Gagal upload: "+(x.message||"Error"))}catch{v("Koneksi terputus saat upload video.")}finally{O(),s.value=""}},r.onerror=()=>{v("Gagal membaca file video!"),O(),s.value=""}},_e=async(s,e)=>{const t=s.files[0];if(!t)return;const a=t.type==="image/gif"||/\.gif$/i.test(t.name||""),r=a?"image/gif":t.type||"image/jpeg";if(!Ae.includes(r)&&!a)return s.value="",v("Hanya file JPG, PNG, WEBP, atau GIF yang diizinkan!");const n=a?8*1024*1024:3*1024*1024;if(t.size>n)return s.value="",v(`Maksimal gambar ${a?"8MB (GIF)":"3MB"}!`);const i=window.GAS_UPLOAD_URL||le;if(i.includes("ISI_DENGAN"))return s.value="",v("URL Script Google belum diisi!");Q("Menyisipkan Gambar...");const l=new FileReader;l.readAsDataURL(t),l.onload=async()=>{try{const d=l.result.split(",")[1],u=t.name.replace(/[^a-zA-Z0-9.]/g,"_"),x={name:"RTE_"+Date.now()+"_"+u,mimeType:t.type,data:d,token:X},o=await(await fetch(i,{method:"POST",body:JSON.stringify(x),headers:{"Content-Type":"text/plain;charset=utf-8"},redirect:"follow"})).text();let c;try{c=JSON.parse(o)}catch{return v("Error Server!")}if(c.status==="success"){const p=ie(c.url),k=y(e);k&&(k.focus(),document.execCommand("insertHTML",!1,`<br><img loading="lazy" src="${p}" style="max-width:100%; border-radius:12px; margin: 10px 0; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);" ><br>`)),v("Gambar berhasil disisipkan!")}else v("Gagal upload gambar.")}catch{v("Gagal koneksi.")}finally{O(),s.value=""}},l.onerror=()=>{v("Gagal membaca file!"),O(),s.value=""}},xe=async(s,e="BUKTI")=>{if(!s)return null;const t=window.GAS_UPLOAD_URL||f&&f.config&&f.config.gasUrl||le;if(!t||t.includes("ISI_DENGAN"))return console.warn("[GAS Upload] GAS_UPLOAD_URL belum dikonfigurasi."),null;try{const a=await new Promise((u,x)=>{const m=new FileReader;m.onload=o=>{const c=new Image;c.onload=()=>{let{width:k,height:P}=c;(k>1200||P>1200)&&(k>P?(P=Math.round(P*1200/k),k=1200):(k=Math.round(k*1200/P),P=1200));const S=document.createElement("canvas");S.width=k,S.height=P,S.getContext("2d").drawImage(c,0,0,k,P);const L=S.toDataURL("image/jpeg",.82);u(L.split(",")[1])},c.onerror=()=>{const p=(o.target.result||"").toString();u(p.split(",")[1]||"")},c.src=o.target.result},m.onerror=x,m.readAsDataURL(s)});if(!a)return null;const r=(s.name||"bukti.jpg").replace(/[^a-zA-Z0-9.]/g,"_"),n={name:`${e}_${Date.now()}_${r}`,mimeType:"image/jpeg",data:a,token:X},i=await fetch(t,{method:"POST",body:JSON.stringify(n),headers:{"Content-Type":"text/plain;charset=utf-8"},redirect:"follow"});if(!i.ok)return console.warn(`[GAS Upload] HTTP error: ${i.status}`),null;const l=await i.text();let d;try{d=JSON.parse(l)}catch{return console.warn("[GAS Upload] Parse response error:",l),null}return d&&d.status==="success"&&d.url?ie(d.url):(console.warn("[GAS Upload] Server message:",d&&d.message),null)}catch(a){return console.warn("[GAS Upload] Upload exception:",a),null}};window.GAS_SECRET_TOKEN=X;window.handleImageUpload=Fe;window.handleVideoUpload=Ue;window.handleRTEditorImage=_e;window.uploadImageFileToDrive=xe;window.uploadBuktiToGDrive=xe;let B=null,U="bank",se=null,ne=null,pe=[];const Ge=()=>{const s=(f.payment?.qrisUrl||f.payment?.qris||f.store?.qrisUrl||f.store?.qris||f.qrisUrl||"").trim();return s?ie(s):""},Ke=s=>{if(!s)return;const e=String(s).trim();navigator.clipboard&&navigator.clipboard.writeText?navigator.clipboard.writeText(e).then(()=>{v("Nomor rekening "+e+" berhasil disalin!","success")}).catch(()=>{prompt("Salin nomor rekening:",e)}):prompt("Salin nomor rekening:",e)},He=(s,e=700,t=.6)=>new Promise(a=>{if(!s||!s.type.startsWith("image/"))return a(null);const r=new FileReader;r.readAsDataURL(s),r.onload=n=>{const i=new Image;i.onload=()=>{let{width:l,height:d}=i;(l>e||d>e)&&(l>d?(d=Math.round(d*e/l),l=e):(l=Math.round(l*e/d),d=e));const u=document.createElement("canvas");u.width=l,u.height=d,u.getContext("2d").drawImage(i,0,0,l,d);const m=u.toDataURL("image/jpeg",t);a(m)},i.onerror=()=>a(n.target.result),i.src=n.target.result},r.onerror=()=>a(null)}),Ve=()=>{if(!y("modal-client-tempo-pay")){const e=document.createElement("div");e.id="modal-client-tempo-pay",e.className="fixed inset-0 z-[110] flex items-end sm:items-center justify-center p-0 sm:p-4 bg-slate-900/80 transition-opacity duration-300 opacity-0 pointer-events-none",e.onclick=t=>{t.target===e&&be()},e.innerHTML=`
            <div id="modal-client-tempo-pay-box" class="bg-white dark:bg-slate-900 w-full sm:max-w-lg rounded-t-[2.25rem] sm:rounded-3xl max-h-[92dvh] sm:max-h-[88vh] flex flex-col shadow-2xl border border-slate-200/80 dark:border-slate-800 overflow-hidden pointer-events-auto transform translate-y-full sm:translate-y-6 transition-transform duration-300" onclick="event.stopPropagation()">
                <!-- Isi Modal dirender reaktif oleh openClientPaymentModal() -->
            </div>
        `,document.body.appendChild(e)}},oe=()=>{const s=[];Array.isArray(J)&&J.length&&s.push(...J),Array.isArray(z)&&z.length&&s.push(...z);try{const r=localStorage.getItem("freshmart_my_orders");if(r){const n=JSON.parse(r);Array.isArray(n)&&s.push(...n)}}catch{}const e=new Set,t=s.filter(r=>!r||!r.orderId||e.has(r.orderId)?!1:(e.add(r.orderId),!0)),a=(g?.phone||g?.id||"").toString().replace(/\D/g,"");return t.filter(r=>{if(!!!(r.isTempo||r.payment?.isPaylater||r.payment?.subMethod==="paylater"||r.payment?.method==="tempo")||r.status==="Batal"||r.payment?.paymentStatus==="lunas")return!1;const i=parseFloat(r.payment?.tempoBalance);if(isNaN(i)||i<=0)return!1;if(a){const l=(r.customer?.phone||r.customer?.wa||"").toString().replace(/\D/g,"");if(l&&!(l===a||l.endsWith(a)||a.endsWith(l)))return!1}return!0})},We=async(s=null)=>{try{let e=[];try{const a=localStorage.getItem("freshmart_pending_confirmations");a&&(e=JSON.parse(a)||[])}catch{}const t=(g?.phone||g?.id||"").toString().replace(/\D/g,"");if(t){const a=await G.collection("tempo_payment_confirmations").where("customerPhone","==",t).where("status","==","pending").get();if(!a.empty){const r=[];a.forEach(n=>r.push({id:n.id,...n.data()})),e=r;try{localStorage.setItem("freshmart_pending_confirmations",JSON.stringify(e))}catch{}}}return pe=e,s?e.filter(a=>a.orderId===s):e}catch(e){return console.warn("[ClientPay] Gagal muat konfirmasi pending:",e),pe}},qe=async(s=null,e=null)=>{Ve();const t=y("modal-client-tempo-pay"),a=y("modal-client-tempo-pay-box");if(!t||!a)return;const r=oe();if(!r.length){v("Tidak ada tagihan atau angsuran tempo aktif yang perlu dibayar.","info");return}B=(s?r.find(n=>n.orderId===s):null)||r[0],U="bank",se=null,ne=null,Te(r,e),document.body.classList.add("overflow-hidden"),typeof window.pushModalHistory=="function"&&window.pushModalHistory("clientTempoPay"),Ce(t,a),We(B.orderId).then(n=>{if(t&&!t.classList.contains("hidden")&&!t.classList.contains("opacity-0")){const i=(n||[]).filter(d=>d.orderId===B?.orderId&&d.status==="pending").reduce((d,u)=>d+(parseFloat(u.amount)||0),0),l=y("client-pay-pending-banner-wrap");l&&(i>0?(l.innerHTML=`
                    <div class="p-4 sm:p-5 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-300 dark:border-amber-800/60 flex items-start sm:items-center gap-3 text-amber-800 dark:text-amber-200 shadow-2xs">
                        <i class="fa-solid fa-hourglass-half text-amber-500 text-base shrink-0 mt-0.5 sm:mt-0"></i>
                        <div class="min-w-0 flex-1">
                            <p class="font-bold text-xs sm:text-sm">Ada Pengajuan Pembayaran Sedang Diverifikasi: <b class="font-mono text-amber-900 dark:text-amber-100">${w(i)}</b></p>
                            <p class="text-[11px] text-amber-700/80 dark:text-amber-300/80 mt-1 leading-relaxed">Admin toko sedang memeriksa mutasi rekening Anda. Limit kredit belanja Anda akan otomatis pulih segera setelah diverifikasi.</p>
                        </div>
                    </div>`,_(l)):I(l))}}).catch(n=>console.warn("[ClientPay] Background pending load error:",n))},be=(s=!1)=>{const e=()=>{const t=y("modal-client-tempo-pay"),a=y("modal-client-tempo-pay-box");!t||!a||De(t,a,()=>{t.classList.add("pointer-events-none"),a.classList.remove("pointer-events-auto"),document.querySelector('[id*="modal"]:not(.hidden):not(.pointer-events-none):not(#modal-client-tempo-pay)')||document.body.classList.remove("overflow-hidden")})};typeof window.requestCloseModal=="function"?window.requestCloseModal("clientTempoPay",s,e):e()},Te=(s,e=null)=>{const t=y("modal-client-tempo-pay-box");if(!t)return;const a=B,r=!!(a.payment?.isPaylater||a.isPaylater||a.payment?.subMethod==="paylater"),n=Math.max(0,parseFloat(a.payment?.tempoBalance)||0),i=Array.isArray(a.payment?.paylaterSchedule)&&a.payment.paylaterSchedule.length>0?a.payment.paylaterSchedule:null,d=(a.payment?.installments||[]).reduce((b,$)=>b+(parseFloat($.amount)||0),0);parseInt(a.payment?.paylaterMonths)||(i?i.length:a.payment?.paylaterTenor==="2m"||a.payment?.paylaterTenor);const u=r?a.payment?.paylaterTenor==="2m"?"2 Bulan":a.payment?.paylaterTenor==="3m"?"3 Bulan":"30 Hari":"Tempo Toko";let x=0,m="-",o=0,c=1,p=!1;const k=[];if(i&&i.length>0){let b=0,$=!1;i.forEach((A,K)=>{const W=A.installmentIndex||A.installmentNo||A.installmentNumber||A.month||K+1,F=parseFloat(A.pokok||A.principal)||0,C=parseFloat((A.adminFee||0)+(A.serviceFee||0))||0,Y=parseFloat(A.total||A.totalMonthly||A.totalInstallment)||F+C;b+=Y;const ee=b,j=A.dueDate||0,te=A.dueDateFormatted||A.dueDateStr||(j?new Date(j).toLocaleDateString("id-ID",{day:"numeric",month:"short",year:"numeric"}):"-");let ae="upcoming",ge=0;d>=ee?ae="paid":$?ae="upcoming":($=!0,ae="current",c=W,m=te,o=j,p=j&&Date.now()>j,ge=Math.max(0,ee-d),x=Math.min(ge,Y)),k.push({monthIndex:W,dueStr:te,dueTime:j,pokok:F,fee:C,total:Y,statusType:ae})}),$||(x=n)}else x=n,o=a.payment?.tempoDueDate||0,m=o?new Date(o).toLocaleDateString("id-ID",{day:"numeric",month:"short",year:"numeric"}):"-",p=o&&Date.now()>o;const P=e&&e>0?Math.min(n,e):x>0&&x<n?x:n,N=pe.filter(b=>b.orderId===a.orderId&&b.status==="pending").reduce((b,$)=>b+(parseFloat($.amount)||0),0);let M=(Array.isArray(f.banks)?f.banks:[]).filter(b=>b&&(b.bankName||b.bank||b.bankAccount||b.number));M.length===0&&f.store?.bankName&&(f.store?.bankAccount||f.store?.bankNumber)&&(M=[{bankName:f.store.bankName,bankAccount:f.store.bankAccount||f.store.bankNumber,bankOwner:f.store.bankOwner||f.store.name||"Toko Putri"}]),M.length===0&&(M=[{bankName:"BCA",bankAccount:"1234567890",bankOwner:f.store?.name||"Toko Putri"}]);const T=Ge();t.innerHTML=`
        <!-- DRAG PULL MOBILE -->
        <div class="pull-indicator sm:hidden"></div>

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

        <!-- BODY SCROLLABLE DENGAN PADDING LEGA ANTI-TERTUTUP FOOTER -->
        <div class="p-5 sm:p-6 pb-28 sm:pb-32 overflow-y-auto flex-1 space-y-6 text-xs custom-scrollbar" style="-webkit-overflow-scrolling: touch; overscroll-behavior-y: contain; touch-action: pan-y;">
            <!-- PENDING BANNER JIKA ADA PENGAJUAN -->
            <div id="client-pay-pending-banner-wrap" class="${N>0?"block":"hidden"}">
                ${N>0?`
                <div class="p-4 sm:p-5 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-300 dark:border-amber-800/60 flex items-start sm:items-center gap-3 text-amber-800 dark:text-amber-200 shadow-2xs">
                    <i class="fa-solid fa-hourglass-half text-amber-500 text-base shrink-0 mt-0.5 sm:mt-0"></i>
                    <div class="min-w-0 flex-1">
                        <p class="font-bold text-xs sm:text-sm">Ada Pengajuan Pembayaran Sedang Diverifikasi: <b class="font-mono text-amber-900 dark:text-amber-100">${w(N)}</b></p>
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
                            Nota #${b.orderId} — Sisa: ${w(b.payment?.tempoBalance||0)} (${b.payment?.isPaylater?"PayLater":"Tempo"})
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
                            <span class="font-mono font-bold text-slate-800 dark:text-slate-200 text-sm">Nota #${h(a.orderId)}</span>
                            <span class="px-2 py-0.5 rounded-full text-[9px] font-black uppercase tracking-wider bg-[rgba(var(--color-primary-rgb),0.12)] text-[var(--color-primary)] font-bold">
                                ${h(u)}
                            </span>
                        </div>
                        <span class="text-[11px] text-slate-500 dark:text-slate-400 font-medium">Total: ${w(a.payment?.grandTotal||a.total||n)}</span>
                    </div>

                    ${k.length>1?`
                    <!-- HIGHLIGHT UTAMA: TAGIHAN BULAN INI -->
                    <div class="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-800 text-emerald-900 dark:text-emerald-100 space-y-1.5 shadow-2xs">
                        <div class="flex items-center justify-between flex-wrap gap-1">
                            <span class="text-[10px] font-black uppercase tracking-wider text-emerald-800 dark:text-emerald-300 flex items-center gap-1.5">
                                <i class="fa-solid fa-calendar-check text-emerald-600"></i> Angsuran Bulan Ini (Termin Ke-${c} dari ${k.length})
                            </span>
                            <span class="px-2 py-0.5 rounded-md text-[9.5px] font-black font-mono ${p?"bg-rose-100 text-rose-700 border border-rose-300":"bg-emerald-200/70 dark:bg-emerald-800/70 text-emerald-900 dark:text-emerald-100"}">
                                ${p?"Lewat Jatuh Tempo":"Jatuh Tempo: "+m}
                            </span>
                        </div>
                        <div class="flex items-baseline justify-between pt-1">
                            <span class="text-xs font-bold text-emerald-700 dark:text-emerald-300">Wajib Dibayar:</span>
                            <span class="font-mono font-black text-2xl text-emerald-900 dark:text-white tracking-tight">${w(x)}</span>
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
                                ${k.map(b=>`
                                    <div class="p-2.5 sm:p-3 flex items-center justify-between gap-2 ${b.statusType==="paid"?"bg-slate-50/50 dark:bg-slate-800/20 opacity-60":b.statusType==="current"?"bg-emerald-50/30 dark:bg-emerald-950/20 font-bold":""}">
                                        <div class="min-w-0">
                                            <p class="font-bold text-slate-800 dark:text-slate-200 text-xs">Bulan Ke-${b.monthIndex}</p>
                                            <p class="text-[10px] text-slate-400 font-mono mt-0.5">Jatuh Tempo: ${b.dueStr}</p>
                                        </div>
                                        <div class="text-right shrink-0">
                                            <p class="font-mono font-black text-xs sm:text-sm text-slate-900 dark:text-white">${w(b.total)}</p>
                                            <div class="mt-0.5">
                                                ${b.statusType==="paid"?`
                                                    <span class="px-2 py-0.5 rounded text-[8.5px] font-black uppercase bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300">✓ Lunas</span>
                                                `:b.statusType==="current"?`
                                                    <span class="px-2 py-0.5 rounded text-[8.5px] font-black uppercase bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300">★ Bayar Bulan Ini</span>
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
                        <span class="font-mono font-black text-slate-800 dark:text-slate-200 text-sm">${w(n)}</span>
                    </div>
                    `:`
                    <!-- SINGLE TEMPO / 1 BULAN -->
                    <div class="pt-2.5 border-t border-slate-200/60 dark:border-slate-700/60 space-y-2">
                        <div class="flex items-center justify-between text-xs">
                            <span class="text-slate-500 dark:text-slate-400 font-bold">Tanggal Jatuh Tempo:</span>
                            <span class="font-mono font-bold ${p?"text-rose-600":"text-slate-800 dark:text-slate-200"}">${m}</span>
                        </div>
                        <div class="flex items-center justify-between text-xs pt-1">
                            <span class="text-slate-500 dark:text-slate-400 font-bold">Sisa Tagihan Wajib Bayar:</span>
                            <span class="text-base sm:text-lg font-black font-mono text-rose-600 dark:text-rose-400">${w(n)}</span>
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
                
                <!-- Quick Chips -->
                <div class="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                    ${k.length>1&&x>0&&x<n?`
                    <button type="button" onclick="window.setClientPayAmount(${x}, 'angsuran')" class="p-3.5 rounded-2xl border-2 border-[var(--color-primary)] bg-[rgba(var(--color-primary-rgb),0.08)] dark:bg-[rgba(var(--color-primary-rgb),0.15)] text-[var(--color-primary)] font-bold text-xs text-left active:scale-95 transition-all shadow-xs relative overflow-hidden group">
                        <div class="absolute top-1.5 right-2 px-1.5 py-0.5 rounded text-[8px] font-black uppercase tracking-wider bg-[var(--color-primary)] text-white">Rekomendasi</div>
                        <span class="block text-[9px] uppercase tracking-wider opacity-90 font-bold">Angsuran Bulan Ini</span>
                        <span class="font-mono font-black text-sm sm:text-base mt-1 block">${w(x)}</span>
                        <span class="block text-[9px] opacity-75 mt-0.5 font-normal">Termin Ke-${c}</span>
                    </button>
                    `:""}
                    <button type="button" onclick="window.setClientPayAmount(${n}, 'pelunasan')" class="p-3.5 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-750 text-slate-700 dark:text-slate-200 font-bold text-xs text-left active:scale-95 transition-all shadow-2xs">
                        <span class="block text-[9px] uppercase tracking-wider opacity-75 text-slate-400">Pelunasan Penuh</span>
                        <span class="font-mono font-black text-sm mt-0.5 block">${w(n)}</span>
                        <span class="block text-[9px] opacity-75 mt-0.5 font-normal">Lunas Seluruhnya</span>
                    </button>
                    <button type="button" onclick="window.focusCustomClientPay()" class="p-3.5 rounded-2xl border border-dashed border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/40 text-slate-600 dark:text-slate-300 font-bold text-xs text-left active:scale-95 transition-all col-span-2 sm:col-span-1 shadow-2xs">
                        <span class="block text-[9px] uppercase tracking-wider opacity-75 text-slate-400">Nominal Lain</span>
                        <span class="text-xs mt-0.5 block font-bold">Titipan Bebas</span>
                        <span class="block text-[9px] opacity-75 mt-0.5 font-normal">Ketik Nominal</span>
                    </button>
                </div>

                <!-- Input Nominal Rupiah -->
                <div class="space-y-1.5">
                    <div class="relative">
                        <span class="absolute left-4 top-1/2 -translate-y-1/2 font-black text-base text-slate-400">Rp</span>
                        <input type="number" id="client-pay-amount-input" min="1000" max="${n}" value="${P}" class="admin-input pl-12 h-13 text-base sm:text-lg font-black font-mono rounded-2xl focus:border-[var(--color-primary)]" placeholder="0">
                    </div>
                    <p class="text-[10px] text-slate-400 leading-relaxed">
                        Default terisi nominal <b>Angsuran Bulan Ini (${w(P)})</b>. Anda juga dapat memilih Pelunasan Penuh di atas jika ingin melunasi seluruhnya sekaligus.
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
                    <div class="space-y-3">
                        ${M.map(b=>{const $=b.bankName||b.bank||"BANK",A=b.bankAccount||b.number||"-",K=b.bankOwner||b.name||f.store?.name||"Toko Putri";return`
                            <div class="p-4 sm:p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700 flex flex-col sm:flex-row sm:items-center justify-between gap-3.5 shadow-2xs">
                                <div>
                                    <div class="flex items-center gap-2">
                                        <span class="px-2.5 py-1 rounded-lg text-[10px] font-black uppercase bg-blue-100 dark:bg-blue-900/60 text-blue-700 dark:text-blue-300 font-mono">${h($)}</span>
                                        <span class="text-xs font-bold text-slate-800 dark:text-white">${h(K)}</span>
                                    </div>
                                    <p class="font-mono text-base sm:text-lg font-black text-slate-900 dark:text-slate-100 tracking-wider mt-1.5">${h(A)}</p>
                                </div>
                                <button type="button" onclick="window.copyAccountNumber('${h(A)}')" class="h-11 px-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 hover:bg-slate-100 text-slate-700 dark:text-slate-200 text-xs font-bold flex items-center justify-center gap-2 active:scale-95 transition-all shadow-2xs shrink-0 cursor-pointer">
                                    <i class="fa-regular fa-copy text-xs"></i> Salin Rekening
                                </button>
                            </div>`}).join("")}
                    </div>
                </div>

                <!-- CONTAINER CHANNEL QRIS -->
                <div id="client-pay-channel-qris" class="${U==="qris"?"block":"hidden"} space-y-3.5 text-center">
                    <p class="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed">Scan QRIS toko di bawah menggunakan BCA Mobile, Livin, GoPay, OVO, DANA, ShopeePay, atau m-Banking apa pun:</p>
                    ${T?`
                        <div class="inline-block p-4 sm:p-5 rounded-3xl bg-white border border-slate-200 dark:border-slate-700 shadow-sm mx-auto">
                            <img src="${h(T)}" alt="QRIS Resmi Toko Putri" 
                                 class="w-56 h-56 sm:w-64 sm:h-64 object-contain mx-auto rounded-2xl"
                                 loading="eager"
                                 onerror="if(!this.dataset.retried){this.dataset.retried=1;const id=(this.src.match(/\\/d\\/([a-zA-Z0-9_-]+)/)||[])[1];if(id){this.src='https://drive.google.com/uc?export=view&id='+id;}}">
                        </div>
                        <div class="flex items-center justify-center gap-2">
                            <a href="${h(T)}" target="_blank" rel="noopener noreferrer" download="QRIS_Toko_Putri.jpg" class="inline-flex items-center gap-1.5 text-xs font-bold text-[var(--color-primary)] hover:underline py-1.5 px-3 rounded-xl bg-[rgba(var(--color-primary-rgb),0.06)]">
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
                
                <div id="client-pay-proof-dropzone" onclick="document.getElementById('client-pay-proof-input').click()" class="p-6 sm:p-8 rounded-2xl border-2 border-dashed border-slate-300 dark:border-slate-700 hover:border-[var(--color-primary)] transition-all cursor-pointer text-center bg-slate-50/60 dark:bg-slate-800/40 group">
                    <div id="client-pay-proof-placeholder">
                        <div class="w-13 h-13 rounded-2xl bg-[rgba(var(--color-primary-rgb),0.1)] text-[var(--color-primary)] flex items-center justify-center mx-auto mb-3 group-hover:scale-105 transition-transform">
                            <i class="fa-solid fa-camera text-2xl"></i>
                        </div>
                        <p class="text-xs sm:text-sm font-bold text-slate-700 dark:text-slate-200">Klik untuk Ambil Foto / Pilih Bukti Transfer</p>
                        <p class="text-[11px] text-slate-400 mt-1">Format JPG, PNG atau WebP (Otomatis dikompresi ringan)</p>
                    </div>

                    <div id="client-pay-proof-preview-wrap" class="hidden">
                        <img id="client-pay-proof-img" src="" alt="Preview Bukti" class="max-h-60 sm:max-h-72 mx-auto rounded-2xl border border-slate-200 dark:border-slate-700 object-contain shadow-sm">
                        <p class="text-xs font-bold text-[var(--color-primary)] mt-3 flex items-center justify-center gap-1.5">
                            <i class="fa-solid fa-circle-check"></i> Foto siap dikirim (Klik untuk ganti)
                        </p>
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
    `},Je=s=>{const e=oe(),t=e.find(a=>a.orderId===s);t&&(B=t,Te(e))},ze=s=>{U=s;const e=y("tab-btn-client-bank"),t=y("tab-btn-client-qris"),a=y("client-pay-channel-bank"),r=y("client-pay-channel-qris");s==="bank"?(e&&(e.className="py-2 rounded-xl text-xs font-black transition-all bg-white dark:bg-slate-900 shadow-xs text-slate-900 dark:text-white"),t&&(t.className="py-2 rounded-xl text-xs font-black transition-all text-slate-500 hover:text-slate-800"),a&&_(a),r&&I(r)):(t&&(t.className="py-2 rounded-xl text-xs font-black transition-all bg-white dark:bg-slate-900 shadow-xs text-slate-900 dark:text-white"),e&&(e.className="py-2 rounded-xl text-xs font-black transition-all text-slate-500 hover:text-slate-800"),r&&_(r),a&&I(a))},Qe=(s,e="angsuran")=>{const t=y("client-pay-amount-input");t&&(t.value=s,t.focus())},Ye=()=>{const s=y("client-pay-amount-input");s&&(s.focus(),s.select())},Ze=async s=>{const e=s.target.files&&s.target.files[0];if(e){Q("Mengompresi foto bukti transfer...");try{ne=e;const t=await He(e);se=t;const a=y("client-pay-proof-preview-wrap"),r=y("client-pay-proof-img"),n=y("client-pay-proof-placeholder");r&&t&&(r.src=t),a&&_(a),n&&I(n)}catch(t){console.warn("Gagal memproses gambar:",t),v("Gagal memproses foto bukti transfer!","error")}finally{O()}}},Xe=async()=>{if(!B)return v("Pilih nota pesanan yang ingin dibayar!","error");const s=y("client-pay-amount-input"),e=parseFloat(s?.value)||0,t=Math.max(0,parseFloat(B.payment?.tempoBalance)||0);if(e<=0)return v("Masukkan nominal pembayaran yang valid!","error");if(e>t+100)return v("Nominal pembayaran melebihi sisa tagihan ("+w(t)+")!","error");if(!se)return v("Wajib melampirkan foto / screenshot bukti transfer!","error");const a=y("client-pay-submit-btn");a&&(a.disabled=!0,a.innerHTML='<i class="fa-solid fa-spinner fa-spin mr-1"></i> Mengirim...');try{let r=se;if(ne)try{Q("Mengupload bukti transfer ke Google Drive...");const c=await xe(ne,"BUKTI_CICILAN_"+B.orderId);c&&(r=c,console.info("[ClientPay] Bukti pembayaran berhasil diunggah ke Google Drive:",c))}catch(c){console.warn("[ClientPay] GDrive upload fallback ke gambar terkompresi lokal:",c)}Q("Menyimpan konfirmasi pembayaran...");const n=(g?.phone||g?.id||B.customer?.phone||B.customer?.wa||"").toString().replace(/\D/g,""),i=n.startsWith("0")?"62"+n.substring(1):n,l=g?.name||B.customer?.name||"Pelanggan",d="CONF-"+Date.now().toString(36).toUpperCase()+"-"+Math.random().toString(36).substring(2,6).toUpperCase(),u=f.banks&&f.banks[0]?f.banks[0].bankName:"Transfer Bank",x=(y("client-pay-notes-input")?.value||"").trim(),m={confirmId:d,orderId:B.orderId,customerPhone:i,customerName:l,amount:e,channel:U,bankName:U==="bank"?u:"QRIS Toko",buktiUrl:r,notes:x,createdAt:Date.now(),status:"pending"};await G.collection("tempo_payment_confirmations").doc(d).set(m);let o=[];try{const c=localStorage.getItem("freshmart_pending_confirmations");c&&(o=JSON.parse(c)||[])}catch{}o.unshift(m);try{localStorage.setItem("freshmart_pending_confirmations",JSON.stringify(o))}catch{}O(),be(),typeof window.showToast=="function"&&window.showToast("Bukti transfer "+w(e)+" berhasil dikirim ke Admin Toko Putri!","success"),typeof window.rMemberModalBody=="function"&&window.rMemberModalBody(),setTimeout(()=>{alert("Alhamdulillah! Konfirmasi pembayaran sebesar "+w(e)+" untuk nota #"+B.orderId+` telah berhasil dikirim ke Admin Toko Putri.

Admin akan memeriksa mutasi rekening dan menyetujui pembayaran Anda. Limit belanja PayLater Anda akan otomatis pulih segera setelah disetujui.`)},300)}catch(r){console.error("[ClientPay] Gagal kirim konfirmasi:",r),O(),a&&(a.disabled=!1,a.innerHTML='<i class="fa-solid fa-paper-plane mr-1"></i> Kirim Konfirmasi Pembayaran'),v("Gagal mengirim konfirmasi: "+(r.message||"Periksa koneksi internet"),"error")}},me=(s,e=[])=>{if(!s)return"";const t=!!(s.payment?.isPaylater||s.isPaylater||s.payment?.subMethod==="paylater"),a=Array.isArray(s.payment?.paylaterSchedule)&&s.payment.paylaterSchedule.length>0?s.payment.paylaterSchedule:null,r=Math.max(0,parseFloat(s.payment?.tempoBalance)||0);parseFloat(s.payment?.grandTotal||s.total);const i=(s.payment?.installments||[]).reduce((x,m)=>x+(parseFloat(m.amount)||0),0),d=(e||[]).filter(x=>x.orderId===s.orderId&&x.status==="pending").reduce((x,m)=>x+(parseFloat(m.amount)||0),0),u=t?s.payment?.paylaterTenor==="2m"?"2 Bulan (2x Cicilan)":s.payment?.paylaterTenor==="3m"?"3 Bulan (3x Cicilan)":"30 Hari (1x Bayar)":"Tempo Pembayaran Toko";if(a&&a.length>0){let x=0,m=!1;const o=a.map((c,p)=>{const k=c.installmentIndex||c.installmentNo||c.installmentNumber||c.month||p+1,P=parseFloat(c.pokok||c.principal)||0,S=parseFloat((c.adminFee||0)+(c.serviceFee||0))||0,N=parseFloat(c.total||c.totalMonthly||c.totalInstallment)||P+S;x+=N;const L=x;let M="",T="",b=!1;i>=L?(M="✓ LUNAS",T="bg-emerald-100 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-400 border border-emerald-300 dark:border-emerald-700",b=!0):d>0?(M="⏳ SEDANG DIVERIFIKASI",T="bg-amber-100 text-amber-700 dark:bg-amber-950/60 dark:text-amber-400 border border-amber-300 dark:border-amber-700"):m?(M="BULAN DEPAN",T="bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400 border border-slate-200 dark:border-slate-700"):(m=!0,c.dueDate&&Date.now()>c.dueDate?(M="⚠️ JATUH TEMPO",T="bg-rose-100 text-rose-700 dark:bg-rose-950/60 dark:text-rose-400 border border-rose-300 dark:border-rose-700"):(M="★ WAJIB BULAN INI",T="bg-amber-100 text-amber-800 dark:bg-amber-950/60 dark:text-amber-300 border border-amber-300 dark:border-amber-700 font-bold"));const $=c.dueDateFormatted||c.dueDateStr||(c.dueDate?new Date(c.dueDate).toLocaleDateString("id-ID",{day:"numeric",month:"short",year:"numeric"}):"-");return`
                <tr class="text-xs ${b?"opacity-70 bg-slate-50/50 dark:bg-slate-900/20":""}">
                    <td class="py-3 px-4 font-bold text-slate-800 dark:text-slate-200">
                        Bulan ke-${k}
                    </td>
                    <td class="py-3 px-4 text-slate-600 dark:text-slate-400 font-mono text-[11px]">
                        ${$}
                    </td>
                    <td class="py-3 px-4 font-mono font-bold text-slate-800 dark:text-slate-200">
                        ${w(P)}
                    </td>
                    <td class="py-3 px-4 font-mono text-slate-700 dark:text-slate-300 font-bold">
                        +${w(S)}
                    </td>
                    <td class="py-3 px-4 font-mono font-black text-slate-900 dark:text-white">
                        ${w(N)}
                    </td>
                    <td class="py-3 px-4 text-right">
                        <span class="inline-block px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider ${T}">
                            ${M}
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
                        <p class="text-[11px] text-slate-400 font-medium mt-0.5">Nota #${h(s.orderId)} • ${h(u)}</p>
                    </div>
                    ${r>0?`
                    <button type="button" onclick="window.openClientPaymentModal('${h(s.orderId)}')" class="px-3.5 py-2 rounded-xl text-white font-bold text-[10px] uppercase tracking-wider flex items-center gap-1.5 shadow-2xs active:scale-95 transition-all cursor-pointer" style="background: var(--color-primary); box-shadow: 0 2px 8px rgba(var(--color-primary-rgb), 0.3);">
                        <i class="fa-solid fa-credit-card text-[10px]"></i> Bayar Angsuran Ini
                    </button>
                    `:""}
                </div>

                <div class="overflow-x-auto rounded-xl border border-slate-200/80 dark:border-slate-800 custom-scrollbar">
                    <table class="w-full text-left whitespace-nowrap min-w-[540px]">
                        <thead class="bg-slate-100/90 dark:bg-slate-800/90 text-[10px] font-black uppercase tracking-wider text-slate-500 dark:text-slate-400">
                            <tr>
                                <th class="py-3 px-4">Angsuran</th>
                                <th class="py-3 px-4">Jatuh Tempo</th>
                                <th class="py-3 px-4">Pokok</th>
                                <th class="py-3 px-4">Biaya Tenor</th>
                                <th class="py-3 px-4">Wajib Bayar</th>
                                <th class="py-3 px-4 text-right">Status</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-slate-100 dark:divide-slate-800 bg-white dark:bg-slate-900/40">
                            ${o}
                        </tbody>
                    </table>
                </div>

                <div class="pt-2 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 flex-wrap gap-2.5">
                    <span>Sudah Dibayar: <b class="font-mono text-emerald-600 dark:text-emerald-400">${w(i)}</b></span>
                    <span>Sisa Wajib Bayar: <b class="font-mono text-rose-600 dark:text-rose-400 font-black">${w(r)}</b></span>
                </div>
            </div>
        `}return`
        <div class="mt-3 rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white/70 dark:bg-slate-900/60 p-3.5 sm:p-4 space-y-2.5">
            <div class="flex items-center justify-between flex-wrap gap-2">
                <div>
                    <h4 class="text-xs font-black text-slate-800 dark:text-white flex items-center gap-1.5">
                        <i class="fa-solid fa-file-invoice text-[var(--color-primary)]"></i> Tagihan Tempo Berjalan
                    </h4>
                    <p class="text-[10px] text-slate-400 font-medium">Nota #${h(s.orderId)} • Jatuh Tempo: ${s.payment?.tempoDueDate?new Date(s.payment.tempoDueDate).toLocaleDateString("id-ID",{day:"numeric",month:"short",year:"numeric"}):"-"}</p>
                </div>
                ${r>0?`
                <button type="button" onclick="window.openClientPaymentModal('${h(s.orderId)}')" class="px-3 py-1.5 rounded-xl text-white font-bold text-[10px] uppercase tracking-wider flex items-center gap-1.5 shadow-2xs active:scale-95 transition-all cursor-pointer" style="background: var(--color-primary); box-shadow: 0 2px 8px rgba(var(--color-primary-rgb), 0.3);">
                    <i class="fa-solid fa-credit-card text-[9px]"></i> Bayar Sekarang
                </button>
                `:""}
            </div>

            <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/70 dark:border-slate-700/60 flex items-center justify-between text-xs">
                <span class="text-slate-500 font-bold">Sisa Tagihan Tempo</span>
                <span class="font-mono font-black text-rose-600 dark:text-rose-400 text-sm">${w(r)}</span>
            </div>
        </div>
    `};typeof window<"u"&&(window.openClientPaymentModal=qe,window.closeClientPaymentModal=be,window.switchClientPaymentOrder=Je,window.switchClientPayChannel=ze,window.setClientPayAmount=Qe,window.focusCustomClientPay=Ye,window.handleClientProofFileChange=Ze,window.submitClientPaymentConfirmation=Xe,window.copyAccountNumber=Ke,window.renderClientInstallmentSchedule=me);const R=new Map,et=3*60*1e3,V=new Map,tt=2*60*1e3,at="https://lh3.googleusercontent.com/d/1KHwsV5sK6aAH3-eP_vTJA4tE5MyRukLo",rt=s=>{if(!s){R.clear(),V.clear();return}const e=s.toString().replace(/\D/g,"");let t=e,a=e.startsWith("0")?"62"+e.substring(1):e.startsWith("62")?e:"62"+e,r=e.startsWith("62")?"0"+e.substring(2):e;R.delete(e),R.delete(t),R.delete(a),R.delete(r),V.delete(e),V.delete(t),V.delete(a),V.delete(r)},fe=async(s,e="")=>{try{let t=(s||"").toString().replace(/\D/g,"");if(t.startsWith("0")?t="62"+t.substring(1):t.startsWith("62")||(t="62"+t),!t||t.length<9)return null;let a=[];try{const m=localStorage.getItem("freshmart_my_orders");m&&(a=JSON.parse(m)||[])}catch{}if(!a.length)return null;let r=0;const n=a.find(m=>m.finalMemberPoints!==void 0&&m.finalMemberPoints!==null);if(n?r=Math.max(0,parseFloat(n.finalMemberPoints)||0):r=a.reduce((m,o)=>m+(parseFloat(o.pointsEarned)||0),0),r<=0)return null;const i=G.collection("freshmart").doc("cms_data").collection("customers").doc(t),l=await i.get();if(!l.exists)return null;const d=e||g&&g.name||l.data().name||"Pelanggan Setia",u={id:t,phone:t,name:d,points:r,updatedAt:new Date().toISOString(),lastOrderAt:new Date().toISOString()};try{await i.set(u,{merge:!0})}catch(m){console.warn("[reconcilePointsFromOrders] Firestore set error:",m)}D(u);try{localStorage.setItem("freshmart_current_member",JSON.stringify(u)),localStorage.setItem("freshmart_member_wa",t)}catch{}return R.set(t,{data:u,timestamp:Date.now()}),document.getElementById("member-modal-body")&&E(),u}catch(t){return console.warn("[reconcilePointsFromOrders] Error:",t),null}},de=(s=0)=>{const e=Math.max(0,parseFloat(s)||0);return e>=1e3?{level:4,name:"PLATINUM VIP",badge:"💎 PLATINUM VIP",icon:"fa-gem",gradient:"from-slate-950 via-zinc-900 to-neutral-950 border-amber-400/40 text-amber-200",cardBg:"linear-gradient(135deg, #090d16 0%, #171f30 45%, #0d1322 75%, #050811 100%)",accentBg:"bg-amber-400/20",accentText:"text-amber-300",accentBorder:"border-amber-400/40",chipBorder:"#f59e0b",foilClass:"gold-foil-text",nextTier:null,ptsNeeded:0,progress:100,perks:["Cashback & Poin Belanja Maksimal (2x Lipat)","Akses Prioritas Antrean Kasir & Pengiriman","Klaim Semua Hadiah Katalog VIP","Layanan Konsultasi Khusus via WhatsApp"]}:e>=500?{level:3,name:"GOLD MEMBER",badge:"🥇 GOLD MEMBER",icon:"fa-crown",gradient:"from-amber-600 via-yellow-600 to-amber-700 border-yellow-300/40 text-yellow-100",cardBg:"linear-gradient(135deg, #78350f 0%, #b45309 35%, #d97706 70%, #92400e 100%)",accentBg:"bg-yellow-400/20",accentText:"text-amber-200",accentBorder:"border-yellow-300/40",chipBorder:"#fde047",foilClass:"gold-foil-text",nextTier:"Platinum VIP",ptsNeeded:1e3-e,progress:Math.min(100,Math.round((e-500)/500*100)),perks:["Diskon & Promo Spesial Member Gold","Kumpulkan Poin di Setiap Transaksi","Tukar Hadiah Menarik dari Katalog","Prioritas Penyiapan Pesanan"]}:e>=100?{level:2,name:"SILVER MEMBER",badge:"🥈 SILVER MEMBER",icon:"fa-medal",gradient:"from-slate-700 via-slate-600 to-slate-800 border-slate-300/40 text-slate-100",cardBg:"linear-gradient(135deg, #1e293b 0%, #334155 40%, #475569 70%, #0f172a 100%)",accentBg:"bg-slate-200/20",accentText:"text-slate-100",accentBorder:"border-slate-300/40",chipBorder:"#cbd5e1",foilClass:"silver-foil-text",nextTier:"Gold Member",ptsNeeded:500-e,progress:Math.min(100,Math.round((e-100)/400*100)),perks:["Kumpulkan Poin di Setiap Transaksi","Tukar Hadiah Langsung Tanpa Undian","Penawaran Diskon Tertentu"]}:{level:1,name:"BRONZE MEMBER",badge:"🥉 BRONZE MEMBER",icon:"fa-award",gradient:"from-stone-800 via-amber-950 to-stone-900 border-orange-400/30 text-orange-200",cardBg:"linear-gradient(135deg, #381a10 0%, #632917 40%, #7c2d12 70%, #292524 100%)",accentBg:"bg-orange-500/20",accentText:"text-orange-200",accentBorder:"border-orange-400/40",chipBorder:"#fb923c",foilClass:"bronze-foil-text",nextTier:"Silver Member",ptsNeeded:100-e,progress:Math.min(100,Math.round(e/100*100)),perks:["Kumpulkan Poin di Setiap Transaksi Belanja","Akses Penuh ke Katalog Hadiah Toko"]}},Me=s=>{let e=(s||"").toString().replace(/\D/g,"");for(e.startsWith("62")?e=e.substring(2):e.startsWith("0")&&(e=e.substring(1));e.length<8;)e+="0";const t=[];for(let a=0;a<e.length&&t.length<3;a+=4)t.push(e.substring(a,a+4));return`PUTRI • ${t.join(" • ")}`},Se=s=>{const e=String(s||"812345678901").replace(/\D/g,"");let t="",a=8;t+=`<rect x="${a}" y="3" width="2.5" height="34" fill="#0f172a"/>`,a+=4,t+=`<rect x="${a}" y="3" width="1.5" height="34" fill="#0f172a"/>`,a+=3.5,t+=`<rect x="${a}" y="3" width="3" height="34" fill="#0f172a"/>`,a+=5;for(let r=0;r<e.length;r++){const n=parseInt(e[r],10)||0,i=(n%3+1)*1.3,l=((n+2)%4+1)*1.1,d=(n%2+1)*1.8;t+=`<rect x="${a}" y="3" width="${i}" height="34" fill="#0f172a"/>`,a+=i+d,t+=`<rect x="${a}" y="3" width="${l}" height="34" fill="#0f172a"/>`,a+=l+2}return t+=`<rect x="${a}" y="3" width="3" height="34" fill="#0f172a"/>`,a+=5,t+=`<rect x="${a}" y="3" width="1.5" height="34" fill="#0f172a"/>`,a+=3.5,t+=`<rect x="${a}" y="3" width="2.5" height="34" fill="#0f172a"/>`,a+=4,`
    <svg class="w-full h-11 bg-white rounded-lg px-2 py-1 shadow-inner border border-slate-200" viewBox="0 0 ${Math.max(a+10,240)} 40" xmlns="http://www.w3.org/2000/svg">
        ${t}
    </svg>`},we=s=>{const e=parseFloat(s?.points)||0,t=de(e),a=(f.store?.name||"Toko Putri").toUpperCase(),r=f.store?.logo&&f.store.logo!=="fa-store"?f.store.logo:at,n=(s?.name||"PELANGGAN SETIA").toUpperCase(),i=(s?.phone||"81234567890").toString().replace(/\D/g,""),l=Me(i),d=f.store?.wa||i;return`
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
                            <img src="${h(r)}" alt="Logo" class="w-full h-full object-contain" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">
                            <i class="fa-solid fa-store text-slate-800 text-xs hidden"></i>
                        </div>
                        <div class="min-w-0">
                            <h4 class="text-[11px] sm:text-xs font-black tracking-wider text-white uppercase truncate">${h(a)}</h4>
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
                        ${g&&(g.paylaterActive===!0||g.paylaterActive==="true")&&(parseFloat(g.paylaterLimit)||0)>0?`
                        <div class="mt-1 flex items-center justify-end gap-1 text-[8px] font-black text-emerald-300 uppercase tracking-wider">
                            <i class="fa-solid fa-bolt text-amber-300 text-[7px]"></i> PayLater: ${w(Math.max(0,(parseFloat(g.paylaterLimit)||0)-Math.max(0,parseFloat(g.paylaterUsed)||0)))}
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
                        ${Se(i)}
                        <p class="text-[9px] font-mono font-bold tracking-[0.2em] text-slate-300 mt-1">*${h(i)}*</p>
                    </div>
                </div>

                <!-- Footer Sisi Belakang: Kontak & Info -->
                <div class="p-3 sm:p-4 bg-slate-950/80 border-t border-white/10 text-center">
                    <p class="text-[7.5px] sm:text-[8px] text-slate-400 leading-tight">
                        Kartu member digital resmi <b class="text-white">${h(a)}</b>. Tunjukkan saat transaksi untuk poin belanja.
                    </p>
                    <p class="text-[8px] font-bold text-emerald-400 mt-0.5">
                        <i class="fa-brands fa-whatsapp mr-1"></i>CS: +${h(d)}
                    </p>
                </div>
            </div>

        </div>
    </div>`},st=()=>{const s=document.getElementById("member-card-inner");s&&(s.classList.toggle("is-flipped"),typeof window.triggerHaptic=="function"&&window.triggerHaptic("light"),typeof window.playNativeSound=="function"&&window.playNativeSound("tick"))},nt=async()=>{const s=document.getElementById("member-card-inner");s&&s.classList.contains("is-flipped")&&(s.classList.remove("is-flipped"),await new Promise(t=>setTimeout(t,450)));const e=document.getElementById("member-card-front-export");if(e){typeof window.showToast=="function"&&window.showToast("Menyiapkan file gambar Kartu Member HD...");try{if(typeof window.ensureScriptLoaded=="function"&&await window.ensureScriptLoaded("https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js",()=>typeof html2canvas<"u"),typeof html2canvas>"u")throw new Error("Modul html2canvas belum siap dimuat.");const t=await html2canvas(e,{scale:3,useCORS:!0,allowTaint:!0,backgroundColor:null}),r=`Kartu_Member_TokoPutri_${(g?.name||"Pelanggan").replace(/[^a-zA-Z0-9]/g,"_")}.png`,n=t.toDataURL("image/png",1);if(window.AndroidNativeApp&&typeof window.AndroidNativeApp.saveOrShareFile=="function")window.AndroidNativeApp.saveOrShareFile(n,r,"image/png");else{const i=document.createElement("a");i.download=r,i.href=n,document.body.appendChild(i),i.click(),document.body.removeChild(i)}typeof window.showToast=="function"&&window.showToast("Kartu Member Berhasil Disimpan ke Galeri! 🎉")}catch(t){console.error("Gagal menyimpan kartu member:",t),typeof window.showToast=="function"&&window.showToast("Gagal menyimpan kartu. Silakan coba kembali.")}}},ot=()=>{const s=y("reward-catalog-container");if(!s)return;const e=f.store.showRewardCatalog!==!1&&f.store.showRewardCatalog!=="false";e&&typeof window.attachRewardsRealtime=="function"&&!window.unsubRewardsRealtime&&window.attachRewardsRealtime();const t=(f.rewards||[]).filter(r=>r.isActive!=="false"&&r.isActive!==!1);if(!e||t.length===0){s.classList.add("hidden"),s.innerHTML="";return}s.classList.remove("hidden");let a=`
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
            ${t.map(r=>`
                <div class="w-[130px] sm:w-[145px] shrink-0 snap-start md:shrink md:flex-1 md:min-w-[150px] md:max-w-[260px] relative group cursor-pointer active:scale-95 transition-all duration-200" onclick="if(typeof window.openMemberModal==='function') window.openMemberModal(); else if(typeof window.showToast==='function') window.showToast('Tukarkan hadiah ini saat checkout menggunakan poin belanja Anda!');">
                    <div class="w-full h-full bg-slate-50/80 dark:bg-slate-900/60 rounded-2xl shadow-2xs hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col relative overflow-hidden border border-[rgba(var(--color-primary-rgb),0.15)] dark:border-slate-700/80 p-2 sm:p-2.5 text-slate-800 dark:text-slate-100">
                        <!-- Badges Row -->
                        <div class="flex items-center justify-between gap-1 mb-1.5">
                            <span class="text-white text-[7.5px] sm:text-[8px] font-extrabold px-1.5 py-0.5 rounded-full uppercase tracking-wider shadow-2xs flex items-center gap-1"
                                  style="background: linear-gradient(135deg, var(--color-primary-light) 0%, var(--color-primary) 50%, var(--color-primary-dark) 100%);">
                                <i class="fa-solid fa-gift text-[7px]"></i> Gratis
                            </span>
                            <span class="bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-300 border border-amber-300/40 dark:border-amber-700/50 text-[7.5px] sm:text-[8px] font-black px-1.5 py-0.5 rounded-full flex items-center gap-1 shadow-2xs">
                                <i class="fa-solid fa-coins text-amber-500 text-[7px]"></i> ${parseFloat(r.pointsCost||r.pointsRequired)||0} Poin
                            </span>
                        </div>
                        <!-- Reward Image -->
                        <div class="w-full aspect-square rounded-xl bg-white dark:bg-slate-800 flex items-center justify-center overflow-hidden relative border border-slate-100 dark:border-slate-700/60 p-2 group-hover:bg-[rgba(var(--color-primary-rgb),0.05)] transition-colors">
                            <img loading="lazy" src="${h(r.img)}" alt="${h(r.name)}" class="w-full h-full object-contain transition-transform duration-300 group-hover:scale-108" onerror="this.onerror=null;this.src='https://placehold.co/400?text=Hadiah'">
                        </div>
                        <!-- Details & Action -->
                        <div class="mt-2 flex-1 flex flex-col justify-between">
                            <h4 class="text-[9.5px] sm:text-[10px] font-black text-slate-800 dark:text-white leading-snug line-clamp-2 uppercase tracking-tight text-center drop-shadow-2xs">${h(r.name)}</h4>
                            <div class="mt-2 w-full py-1.5 rounded-xl text-white text-[8.5px] sm:text-[9.5px] font-extrabold uppercase tracking-wider text-center shadow-2xs transition-all flex items-center justify-center gap-1 group-hover:shadow-xs"
                                 style="background: linear-gradient(135deg, var(--color-primary-light) 0%, var(--color-primary) 50%, var(--color-primary-dark) 100%);">
                                <i class="fa-solid fa-hand-holding-dollar text-[8px]"></i> Tukar Poin
                            </div>
                        </div>
                    </div>
                </div>`).join("")}
        </div>
    </div>`;s.innerHTML=a};let ke=null;const it=()=>{clearTimeout(ke),ke=setTimeout(async()=>{const e=(window.normalizeWA||(n=>(n||"").replace(/\D/g,"").replace(/^0/,"62")))(ve("cust-wa")),t=y("member-status-banner");if(!t)return;if(!e||e.length<10){I(t),I("payment-option-tempo"),I("payment-option-paylater"),D(null),Z(null);const n=document.querySelector('input[name="payment"][value="tempo"]');if(n&&n.checked){const i=document.querySelector('input[name="payment"][value="transfer"]')||document.querySelector('input[name="payment"][value="cashier"]');i&&(i.checked=!0,typeof window.togglePaymentDetails=="function"&&window.togglePaymentDetails())}return}const a=n=>{const i=parseFloat(n.points)||0,l=de(i);t.className="mt-3 p-3 sm:p-4 rounded-2xl bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 text-white border border-[rgba(var(--color-primary-rgb),0.35)] shadow-xl relative overflow-hidden flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3",t.innerHTML=`
                <div class="flex items-center gap-3 relative z-10 min-w-0">
                    <div class="w-12 h-10 rounded-xl bg-[rgba(var(--color-primary-rgb),0.15)] border border-[rgba(var(--color-primary-rgb),0.35)] flex items-center justify-center shrink-0 shadow-inner">
                        <i class="fa-solid fa-id-card text-xl text-[var(--color-primary)]"></i>
                    </div>
                    <div class="min-w-0">
                        <div class="flex items-center gap-2 flex-wrap">
                            <span class="text-[9px] font-black uppercase tracking-widest px-2 py-0.5 rounded-full ${l.accentBg} ${l.accentText} border ${l.accentBorder}">${l.badge}</span>
                            <span class="text-[10px] font-bold text-[var(--color-primary)] flex items-center gap-1"><i class="fa-solid fa-coins text-[9px]"></i>${i} Poin</span>
                        </div>
                        <p class="text-xs font-bold text-white mt-0.5 truncate flex items-center gap-1.5">
                            <span>${h(n.name||"Pelanggan")}</span>
                            <span class="text-[9px] font-normal text-slate-400">(Member Resmi)</span>
                        </p>
                    </div>
                </div>
                <button type="button" onclick="openMemberModal()" class="relative z-10 w-full sm:w-auto shrink-0 primary-bg hover:opacity-90 text-white text-[10px] font-black uppercase tracking-wider px-3.5 py-2.5 rounded-xl shadow-md active:scale-95 transition-all flex items-center justify-center gap-1.5 cursor-pointer">
                    <i class="fa-solid fa-wallet"></i> Buka Kartu Member
                </button>`,_(t),_("payment-option-tempo"),n.paylaterActive===!0||n.paylaterActive==="true"?_("payment-option-paylater"):I("payment-option-paylater")},r=R.get(e);if(r&&Date.now()-r.timestamp<et){if(r.data)D(r.data),a(r.data);else{D(null),Z(null),I(t),I("payment-option-tempo"),I("payment-option-paylater");const n=document.querySelector('input[name="payment"][value="tempo"]');if(n&&n.checked){const i=document.querySelector('input[name="payment"][value="transfer"]')||document.querySelector('input[name="payment"][value="cashier"]');i&&(i.checked=!0,typeof window.togglePaymentDetails=="function"&&window.togglePaymentDetails())}}return}try{const n=await G.collection("freshmart").doc("cms_data").collection("customers").doc(e).get();if(n.exists){const i=n.data();R.set(e,{data:i,timestamp:Date.now()}),D(i),a(i)}else{R.set(e,{data:null,timestamp:Date.now()}),D(null),Z(null),I(t),I("payment-option-tempo"),I("payment-option-paylater");const i=document.querySelector('input[name="payment"][value="tempo"]');if(i&&i.checked){const l=document.querySelector('input[name="payment"][value="transfer"]')||document.querySelector('input[name="payment"][value="cashier"]');l&&(l.checked=!0,typeof window.togglePaymentDetails=="function"&&window.togglePaymentDetails())}}}catch{}},500)},lt=()=>{if(!g)try{const a=localStorage.getItem("freshmart_current_member");if(a){const r=JSON.parse(a);r&&(r.id||r.phone||r.name)&&D(r)}}catch{}const s=g?.phone||g?.id||localStorage.getItem("freshmart_member_wa");if(s){let a=s.toString().replace(/\D/g,"");a.startsWith("0")?a="62"+a.substring(1):a.startsWith("62")||(a="62"+a),G.collection("freshmart").doc("cms_data").collection("customers").doc(a).get().then(async r=>{if(r.exists){let n=r.data();if(parseFloat(n.paylaterUsed)<0&&(n.paylaterUsed=0),(parseFloat(n.points)||0)===0){const l=await fe(a,n.name);l&&(n=l)}R.set(a,{data:n,timestamp:Date.now()}),D(n);try{localStorage.setItem("freshmart_current_member",JSON.stringify(n)),localStorage.setItem("freshmart_member_wa",a)}catch{}document.getElementById("member-modal-body")&&E()}else{R.set(a,{data:null,timestamp:Date.now()}),D(null);try{localStorage.removeItem("freshmart_current_member"),localStorage.removeItem("freshmart_member_wa")}catch{}document.getElementById("member-modal-body")&&E()}}).catch(()=>{})}typeof window.attachRewardsRealtime=="function"&&!window.unsubRewardsRealtime&&window.attachRewardsRealtime();let e=document.getElementById("member-modal");e||(e=document.createElement("div"),e.id="member-modal",e.className="fixed inset-0 z-[115] bg-slate-900/75 flex items-end sm:items-center justify-center p-0 sm:p-5",e.onclick=a=>{a.target===e&&Be()},document.body.appendChild(e));const t=e.style.display!=="none"&&e.style.opacity==="1";e.innerHTML=`
        <div class="bg-white dark:bg-slate-900 w-full max-w-lg rounded-t-[2.25rem] sm:rounded-3xl max-h-[92dvh] sm:max-h-[88vh] flex flex-col shadow-2xl border border-slate-200/90 dark:border-slate-800 overflow-hidden">
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
        </div>`,E(),e.style.opacity="0",e.style.display="flex",requestAnimationFrame(()=>{e.style.transition="opacity 0.25s ease",e.style.opacity="1"}),!t&&typeof window.pushModalHistory=="function"&&window.pushModalHistory("member")},Ie=async(s,e=!1)=>{try{let t=(s||"").toString().replace(/\D/g,"");if(t.startsWith("0")?t="62"+t.substring(1):t.startsWith("62")||(t="62"+t),!t||t.length<9)return[];const a=t,r=V.get(a);if(!e&&r&&Date.now()-r.timestamp<tt)return r.data;const n=new Set([t,t.startsWith("62")?"0"+t.substring(2):t,t.startsWith("62")?t.substring(2):t]);let i=[];try{const o=localStorage.getItem("freshmart_my_orders");o&&(i=JSON.parse(o)||[])}catch{}let l=[];const d=o=>!!o&&(o.code==="permission-denied"||/insufficient permissions/i.test(o.message||""));if(!!(ye&&ye.currentUser))for(const o of["customerPhone","phone"])try{const c=await G.collection("freshmart_orders").where(o,"in",Array.from(n).slice(0,10)).limit(50).get();if(c&&!c.empty){l=c.docs.map(p=>({id:p.id,...p.data()}));break}}catch(c){if(d(c))break;console.warn(`[getMemberPointsHistory] Query ${o} gagal:`,c)}if(!l.length&&i.length){const o=[...new Set(i.filter(p=>p&&p.id).map(p=>String(p.id)))].slice(0,20);(await Promise.allSettled(o.map(p=>G.collection("freshmart_orders").doc(p).get()))).forEach(p=>{p.status==="fulfilled"&&p.value&&p.value.exists?l.push({id:p.value.id,...p.value.data()}):p.status==="rejected"&&!d(p.reason)&&console.warn("[getMemberPointsHistory] Gagal memuat pesanan:",p.reason)})}const x=new Map;[...l,...i].forEach(o=>{if(o&&o.id){const c=(o.customerPhone||o.phone||o.customer&&o.customer.phone||"").toString().replace(/\D/g,"");(n.has(c)||!c)&&x.set(o.id,o)}});const m=[];return x.forEach(o=>{const c=o.createdAt||o.date||o.timestamp||o.dateString;let p=new Date;c&&(typeof c.toDate=="function"?p=c.toDate():typeof c=="number"||!isNaN(Number(c))?p=new Date(Number(c)):p=new Date(c));const k=isNaN(p.getTime())?"-":p.toLocaleDateString("id-ID",{day:"numeric",month:"short",year:"numeric",hour:"2-digit",minute:"2-digit"}),P=isNaN(p.getTime())?0:p.getTime(),S=o.source==="pos",N=parseFloat(o.pointsEarned)||0;N>0&&m.push({id:`${o.id}-earn`,orderId:o.id,timestamp:P,dateStr:k,type:"earn",title:`Poin Belanja (${S?"Kasir POS":"Belanja Online"})`,desc:`Faktur #${o.id} • Total Belanja ${w(o.total||o.payment?.grandTotal||0)}`,points:N,sign:"+",colorClass:"text-emerald-500 dark:text-emerald-400",bgClass:"bg-emerald-500/10 border-emerald-500/20 text-emerald-600 dark:text-emerald-400",icon:"fa-coins"});const L=parseFloat(o.pointDiscount||o.payment?.pointDiscount)||0,M=parseFloat(o.pointsRedeemed)||0;if(L>0||M>0&&!o.claimedReward){const T=M>0?M:Math.round(L/1e3);m.push({id:`${o.id}-discount`,orderId:o.id,timestamp:P+1,dateStr:k,type:"discount",title:"Diskon Poin di Kasir POS",desc:`Potongan belanja tunai -${w(L||T*1e3)} • #${o.id}`,points:T,sign:"-",colorClass:"text-rose-500 dark:text-rose-400",bgClass:"bg-rose-500/10 border-rose-500/20 text-rose-600 dark:text-rose-400",icon:"fa-percent"})}if(o.claimedReward&&(o.claimedReward.name||o.claimedReward.id)){const T=parseFloat(o.claimedReward.pointsCost)||0,b=o.claimedReward.status==="ready"?"Tersedia / Diterima":o.claimedReward.status==="waiting_stock"?"Menunggu Stok Toko":"Sedang Diproses Toko";m.push({id:`${o.id}-reward`,orderId:o.id,timestamp:P+2,dateStr:k,type:"reward",title:`Tukar Hadiah: ${o.claimedReward.name}`,desc:`Status: ${b}${o.claimedReward.note?` ("${o.claimedReward.note}")`:""} • #${o.id}`,points:T,sign:"-",colorClass:"text-amber-500 dark:text-amber-400",bgClass:"bg-amber-500/10 border-amber-500/20 text-amber-600 dark:text-amber-400",icon:"fa-gift"})}}),m.sort((o,c)=>c.timestamp-o.timestamp),V.set(a,{data:m,timestamp:Date.now()}),m}catch(t){return console.warn("[getMemberPointsHistory] Error:",t),[]}},Ne=async(s,e=!1)=>{const t=document.getElementById("member-points-history-list");if(!t)return;e&&(t.innerHTML=`
            <div class="p-4 text-center text-slate-400 text-xs font-semibold">
                <i class="fa-solid fa-circle-notch fa-spin mr-1.5 text-[var(--color-primary)]"></i> Memperbarui riwayat poin...
            </div>
        `);const a=await Ie(s,e);if(t){if(!a||!a.length){t.innerHTML=`
            <div class="p-4 rounded-2xl border border-dashed border-slate-200 dark:border-slate-800 text-center space-y-1.5 bg-slate-50/50 dark:bg-slate-900/30">
                <div class="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-400 flex items-center justify-center mx-auto text-xs">
                    <i class="fa-solid fa-receipt"></i>
                </div>
                <p class="text-xs font-bold text-slate-700 dark:text-slate-300">Belum Ada Riwayat Mutasi Poin</p>
                <p class="text-[10px] text-slate-400 max-w-xs mx-auto">
                    Kumpulkan poin di setiap belanja kasir POS atau pesanan online Toko Putri untuk menikmati diskon &amp; hadiah eksklusif.
                </p>
            </div>
        `;return}t.innerHTML=a.map(r=>`
        <div class="flex items-center gap-3 p-3 rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white/70 dark:bg-slate-900/50 shadow-2xs hover:border-[var(--color-primary)]/40 transition-all">
            <div class="w-9 h-9 rounded-xl flex items-center justify-center text-xs shrink-0 border ${r.bgClass}">
                <i class="fa-solid ${r.icon}"></i>
            </div>
            <div class="min-w-0 flex-1">
                <div class="flex items-center justify-between gap-1">
                    <p class="text-xs font-bold text-slate-800 dark:text-white truncate">${h(r.title)}</p>
                    <span class="text-xs font-black ${r.colorClass} shrink-0">
                        ${r.sign}${r.points} Poin
                    </span>
                </div>
                <p class="text-[10px] text-slate-500 dark:text-slate-400 truncate mt-0.5">${h(r.desc)}</p>
                <p class="text-[9px] font-semibold text-slate-400 dark:text-slate-500 mt-0.5 flex items-center gap-1">
                    <i class="fa-regular fa-clock text-[8px]"></i> ${r.dateStr}
                </p>
            </div>
        </div>
    `).join("")}},dt=s=>{if(!s)return{used:0,tagihanWajibBayar:0,totalPokok:0,totalFee:0,monthlyInstallment:0,tenorLabel:"",hasActiveOrder:!1};const e=Math.max(0,parseFloat(s.paylaterUsed)||0),t=(s.phone||s.id||"").toString().replace(/\D/g,""),a=[];Array.isArray(J)&&J.length&&a.push(...J),Array.isArray(z)&&z.length&&a.push(...z);try{const d=localStorage.getItem("freshmart_my_orders");if(d){const u=JSON.parse(d);Array.isArray(u)&&a.push(...u)}}catch{}const r=new Set,n=a.filter(d=>!d||!d.orderId||r.has(d.orderId)?!1:(r.add(d.orderId),!0)),i=d=>{if(!t)return!0;const u=(d.customer?.phone||d.customer?.wa||"").toString().replace(/\D/g,"");return u&&(u===t||u.endsWith(t)||t.endsWith(u))},l=n.filter(d=>{if(!!!(d.payment?.isPaylater||d.isPaylater||d.payment?.subMethod==="paylater")||d.status==="Batal"||d.payment?.paymentStatus==="lunas")return!1;const x=parseFloat(d.payment?.tempoBalance);return!(isNaN(x)||x<=0||!i(d))});if(l.length>0){let d=0,u=0,x=0,m=0,o=0,c=[];return l.forEach(p=>{const k=Math.max(0,parseFloat(p.payment?.tempoBalance)||0);u+=k;const P=parseFloat(p.payment?.paylaterAdminFee)||0,S=parseFloat(p.payment?.paylaterServiceFee)||0,N=P+S,L=parseFloat(p.payment?.paylaterUsed)||Math.max(0,k-N),M=parseFloat(p.payment?.paylaterMonthlyInstallment)||k;x+=L,m+=N,o+=M;const T=Array.isArray(p.payment?.paylaterSchedule)&&p.payment.paylaterSchedule.length>0?p.payment.paylaterSchedule:null;if(T&&T.length>1){const A=(p.payment?.installments||[]).reduce((F,C)=>F+(parseFloat(C.amount)||0),0);let K=0,W=0;for(let F=0;F<T.length;F++){const C=T[F],Y=parseFloat(C.pokok||C.principal)||0,ee=parseFloat((C.adminFee||0)+(C.serviceFee||0))||0,j=parseFloat(C.total||C.totalMonthly||C.totalInstallment)||Y+ee;if(K+=j,A<K){const te=Math.max(0,K-A);W=Math.min(te,j);break}}d+=W>0?W:k}else d+=k;const b=p.payment?.paylaterTenor==="2m"?"2 Bulan":p.payment?.paylaterTenor==="3m"?"3 Bulan":"30 Hari";c.includes(b)||c.push(b)}),{used:e>0?e:x,tagihanBulanIni:d>0?d:u,tagihanWajibBayar:u,tagihanMendatang:Math.max(0,u-d),totalPokok:x>0?x:e,totalFee:m,monthlyInstallment:o>0?o:u,tenorLabel:c.join(", "),activeCount:l.length,hasActiveOrder:!0}}return{used:e,tagihanBulanIni:e,tagihanWajibBayar:e,tagihanMendatang:0,totalPokok:e,totalFee:0,monthlyInstallment:e,tenorLabel:"",activeCount:0,hasActiveOrder:!1}},E=()=>{const s=(f.rewards||[]).filter(r=>r.isActive!=="false"&&r.isActive!==!1),e=g&&parseFloat(g.points)||0,t=de(e),a=s.length?s.map(r=>{const n=(parseFloat(r.stock)||0)>0,i=g&&e>=(parseFloat(r.pointsCost)||0)&&n,l=re&&re.id===r.id;return`
        <div class="flex items-center gap-3 p-3.5 rounded-2xl border ${l?"border-[var(--color-primary)] bg-[rgba(var(--color-primary-rgb),0.06)] dark:bg-[rgba(var(--color-primary-rgb),0.12)] shadow-xs":"border-slate-200 dark:border-slate-700/80 bg-slate-50/70 dark:bg-slate-800/40"} transition-all">
            ${r.img?`<img src="${h(r.img)}" class="w-14 h-14 rounded-xl object-contain bg-white p-1 border border-slate-200 dark:border-slate-700 shrink-0" onerror="this.style.display='none'" loading="lazy">`:'<div class="w-14 h-14 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-300 shrink-0"><i class="fa-solid fa-gift text-xl"></i></div>'}
            <div class="min-w-0 flex-1">
                <p class="text-xs font-bold text-slate-800 dark:text-white truncate">${h(r.name)}</p>
                <p class="text-[11px] font-black text-[var(--color-primary)] mt-0.5 flex items-center gap-1">
                    <i class="fa-solid fa-star text-[10px]"></i> ${parseFloat(r.pointsCost)||0} Poin
                </p>
                ${n?"":'<p class="text-[10px] font-bold text-rose-500 mt-0.5">Stok hadiah habis</p>'}
            </div>
            ${g?l?'<button type="button" onclick="deselectReward()" class="shrink-0 bg-rose-500 hover:bg-rose-600 text-white text-[10px] font-bold uppercase px-3 py-2 rounded-xl active:scale-95 transition-all whitespace-nowrap shadow-xs cursor-pointer">Batal</button>':`<button type="button" ${i?"":"disabled"} onclick="selectReward('${h(String(r.id))}')" class="shrink-0 ${i?"primary-bg hover:opacity-90 text-white active:scale-95 shadow-xs cursor-pointer":"bg-slate-200 dark:bg-slate-700 text-slate-400 cursor-not-allowed"} text-[10px] font-bold uppercase px-3 py-2 rounded-xl transition-all whitespace-nowrap">Pilih Hadiah</button>`:`<span class="text-[10px] font-bold text-slate-400 uppercase bg-slate-100 dark:bg-slate-800 px-2.5 py-1.5 rounded-lg">${parseFloat(r.pointsCost)||0} Poin</span>`}
        </div>`}).join(""):'<p class="text-[11px] font-bold text-slate-400 text-center py-3">Belum ada program hadiah yang tersedia.</p>';g?(H("member-modal-body",`
            <!-- KARTU MEMBER DIGITAL (3D INTERAKTIF) -->
            <div>
                ${we(g)}
                
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
                        ${t.perks.map(r=>`
                        <div class="flex items-center gap-1.5 text-[10px] font-semibold text-slate-700 dark:text-slate-300">
                            <i class="fa-solid fa-check text-emerald-500 text-[9px] shrink-0"></i>
                            <span class="truncate">${h(r)}</span>
                        </div>`).join("")}
                    </div>
                </div>
            </div>

            <!-- PUTRI PAYLATER DIGITAL CREDIT LIMIT -->
            ${(()=>{const r=Math.max(0,parseFloat(g.paylaterLimit)||0),n=dt(g),i=n.used,l=g.paylaterActive===!0||g.paylaterActive==="true",d=Math.max(0,r-i),u=r>0?Math.min(100,Math.max(0,Math.round(i/r*100))):0,x=g.paylaterDueDay||5;if(!l||r<=0)return`
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
                            <a href="https://wa.me/${(f.store?.wa||"").replace(/\D/g,"")}?text=Halo%20Admin%20Toko%20Putri,%20saya%20ingin%20mengajukan%20aktivasi%20fitur%20Putri%20PayLater%20untuk%20nomor%20${g.phone||""}" target="_blank" class="text-[10px] font-bold text-[var(--color-primary)] hover:underline flex items-center gap-1">Ajukan Aktivasi <i class="fa-solid fa-arrow-right text-[8px]"></i></a>
                        </div>
                    </div>`;const m=n.tagihanBulanIni>0?n.tagihanBulanIni:n.monthlyInstallment>0?n.monthlyInstallment:n.tagihanWajibBayar,o=n.tagihanBulanIni>0&&n.tagihanBulanIni<n.tagihanWajibBayar;return`
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
                            <p class="text-sm font-black text-[var(--color-primary)] font-mono">${w(d)}</p>
                        </div>
                    </div>

                    <!-- Progress Bar Penggunaan Limit -->
                    <div class="space-y-1.5 pt-0.5">
                        <div class="flex justify-between text-[10px] font-bold text-slate-500 dark:text-slate-400">
                            <span>Terpakai: <b class="font-mono text-slate-800 dark:text-slate-200">${w(i)}</b> (${u}%)</span>
                            <span>Total Plafon: <b class="font-mono text-slate-800 dark:text-slate-200">${w(r)}</b></span>
                        </div>
                        <div class="w-full h-2.5 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden p-0.5">
                            <div class="h-full rounded-full transition-all duration-500" style="background: var(--color-primary); width: ${u}%;"></div>
                        </div>
                    </div>

                    <div class="pt-2 border-t border-slate-200/60 dark:border-slate-700/60 flex items-center justify-between text-[10px]">
                        <span class="text-slate-500 dark:text-slate-400 flex items-center gap-1">
                            <i class="fa-regular fa-calendar-check text-[var(--color-primary)]"></i> Jatuh Tempo: <b>Tgl ${x} Bulan Depan</b>
                        </span>
                        <span class="text-[var(--color-primary)] font-bold">1-Klik Checkout Siap Pakai</span>
                    </div>

                    ${n.tagihanWajibBayar>0||i>0?`
                        <div class="pt-2.5 border-t border-dashed border-slate-200 dark:border-slate-700 space-y-2.5">
                            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                                <div class="min-w-0 space-y-0.5">
                                    <p class="text-[9px] text-slate-400 uppercase font-black tracking-wider flex items-center gap-1">
                                        <i class="fa-solid fa-file-invoice-dollar text-[var(--color-primary)]"></i> ${o?"Angsuran Bulan Ini (Wajib Bayar)":"Tagihan Berjalan (Wajib Bayar)"}
                                    </p>
                                    <div class="flex items-baseline gap-1.5 flex-wrap">
                                        <p class="text-base sm:text-lg font-black text-rose-600 dark:text-rose-400 font-mono">${w(m)}</p>
                                        ${o?`
                                            <span class="text-[10px] text-slate-500 dark:text-slate-400 font-medium">dari total ${w(n.tagihanWajibBayar)}</span>
                                        `:""}
                                    </div>
                                    ${o?`
                                        <p class="text-[9.5px] text-slate-500 dark:text-slate-400 font-medium">
                                            Sisa Termin Bulan Depan: <b class="font-mono text-slate-700 dark:text-slate-300">${w(n.tagihanMendatang)}</b>
                                        </p>
                                    `:n.totalFee>0?`
                                        <p class="text-[9px] text-slate-400 font-medium mt-0.5">
                                            Pokok: <span class="font-mono text-slate-600 dark:text-slate-300 font-bold">${w(n.totalPokok)}</span> + Biaya Tenor: <span class="font-mono text-[var(--color-primary)] font-bold">+${w(n.totalFee)}</span>
                                        </p>
                                    `:""}
                                </div>
                                <div class="flex items-center gap-2 shrink-0">
                                    <button type="button" onclick="if(typeof window.openClientPaymentModal==='function') window.openClientPaymentModal('', ${m}); else if(typeof openClientPaymentModal==='function') openClientPaymentModal('', ${m});" class="flex-1 sm:flex-none px-4 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-wider text-white flex items-center justify-center gap-1.5 shadow-sm transition-all active:scale-95 cursor-pointer" style="background: var(--color-primary); box-shadow: 0 4px 14px rgba(var(--color-primary-rgb), 0.35);">
                                        <i class="fa-solid fa-credit-card text-xs"></i> Bayar ${o?"Bulan Ini":"Tagihan"}
                                    </button>
                                    <a href="https://wa.me/${(f.store?.wa||"").replace(/\D/g,"")}?text=Halo%20Admin%20Toko%20Putri,%20saya%20ingin%20melakukan%20pembayaran%20tagihan%20Putri%20PayLater%20sebesar%20${encodeURIComponent(w(m))}%20untuk%20nomor%20${g.phone||""}" target="_blank" class="p-2.5 rounded-xl text-slate-500 hover:text-[var(--color-primary)] border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 flex items-center justify-center active:scale-95 transition-all shadow-2xs" title="Konfirmasi via WhatsApp">
                                        <i class="fa-brands fa-whatsapp text-sm text-[var(--color-primary)]"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    `:""}
                </div>`})()}

            <!-- TABEL RINCIAN JADWAL ANGSURAN & TAGIHAN BERJALAN PELANGGAN -->
            ${(()=>{const r=typeof oe=="function"?oe():typeof window.getMemberActiveTempoOrders=="function"?window.getMemberActiveTempoOrders():[];if(!r||r.length===0)return"";let n=[];try{const l=localStorage.getItem("freshmart_pending_confirmations");l&&(n=JSON.parse(l)||[])}catch{}const i=typeof me=="function"?me:window.renderClientInstallmentSchedule;return typeof i!="function"?"":`
                <div class="space-y-3.5">
                    <div class="flex items-center justify-between">
                        <p class="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest flex items-center gap-1.5">
                            <i class="fa-solid fa-list-check text-[var(--color-primary)]"></i> Jadwal Angsuran &amp; Cicilan Anda
                        </p>
                        <span class="text-[10px] font-bold text-[var(--color-primary)]">${r.length} Tagihan Aktif</span>
                    </div>
                    ${r.map(l=>i(l,n)).join("")}
                </div>`})()}

            <!-- KATALOG REWARD / PENUKARAN HADIAH -->
            <div>
                <p class="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-2.5">Katalog Hadiah yang Dapat Ditukar</p>
                <div class="space-y-2.5">${a}</div>
            </div>

            ${re?`<div class="bg-[rgba(var(--color-primary-rgb),0.06)] dark:bg-[rgba(var(--color-primary-rgb),0.12)] border border-[var(--color-primary)]/30 rounded-xl p-3.5 text-[11px] font-bold text-[var(--color-primary)] flex items-center gap-2"><i class="fa-solid fa-gift text-base shrink-0"></i><span>Hadiah "<b>${h(re.name)}</b>" telah dipilih dan akan otomatis diproses saat pesanan Anda selesai di checkout.</span></div>`:""}

            <!-- RIWAYAT MUTASI POIN & HADIAH (POINT LEDGER) -->
            <div class="space-y-2.5 pt-2 border-t border-slate-200/60 dark:border-slate-800/60">
                <div class="flex items-center justify-between">
                    <p class="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">Riwayat Mutasi Poin &amp; Hadiah</p>
                    <button type="button" onclick="loadMemberPointsHistory('${h(g.phone||g.id||"")}', true)" class="text-[10px] text-[var(--color-primary)] font-bold hover:underline cursor-pointer flex items-center gap-1 active:scale-95 transition-all">
                        <i class="fa-solid fa-arrows-rotate text-[9px]"></i> Refresh
                    </button>
                </div>
                <div id="member-points-history-list" class="space-y-2">
                    <div class="p-4 text-center text-slate-400 text-xs font-semibold">
                        <i class="fa-solid fa-circle-notch fa-spin mr-1.5 text-[var(--color-primary)]"></i> Memuat riwayat poin...
                    </div>
                </div>
            </div>
        `),setTimeout(()=>{g&&Ne(g.phone||g.id)},50)):H("member-modal-body",`
            <!-- PREVIEW KARTU CONTOH (MEMIKAT PELANGGAN) -->
            <div class="opacity-95">
                ${we({name:"CONTOH: PELANGGAN VIP",phone:"81234567890",points:500})}
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
                <div class="space-y-2.5">${a}</div>
            </div>
        `)},ct=async()=>{const s=document.getElementById("member-lookup-input"),e=document.getElementById("member-lookup-result");if(!s||!e)return;let t=s.value.replace(/\D/g,"");if(!t||t.length<9){e.className="text-xs font-bold text-rose-500 p-2.5 bg-rose-50 dark:bg-rose-900/20 rounded-xl",e.textContent="Masukkan minimal 9 digit nomor WhatsApp!",e.classList.remove("hidden");return}t.startsWith("0")?t="62"+t.substring(1):t.startsWith("62")||(t="62"+t),e.className="text-xs font-bold text-[var(--color-primary)] p-2.5 primary-bg-soft rounded-xl",e.textContent="Memuat data kartu member...",e.classList.remove("hidden");try{const a=await G.collection("freshmart").doc("cms_data").collection("customers").doc(t).get();if(a.exists){let r=a.data();if((parseFloat(r.points)||0)===0){const n=await fe(t,r.name);n&&(r=n)}R.set(t,{data:r,timestamp:Date.now()}),D(r);try{localStorage.setItem("freshmart_current_member",JSON.stringify(r)),localStorage.setItem("freshmart_member_wa",t)}catch{}E(),typeof window.showToast=="function"&&window.showToast(`Selamat datang kembali, ${r.name||"Pelanggan"}! 💳`)}else{e.className="text-xs font-bold text-amber-700 dark:text-amber-300 p-3.5 bg-amber-50 dark:bg-amber-900/20 rounded-xl leading-relaxed border border-amber-200 dark:border-amber-800/40 space-y-1.5";const r=(f.store&&f.store.wa||"").replace(/\D/g,""),n=r?`https://wa.me/${r}?text=Halo%20Admin%20Toko%20Putri,%20saya%20ingin%20mendaftarkan%20nomor%20saya%20(${t})%20sebagai%20Member%20Resmi.`:"#";e.innerHTML=`
                <div class="flex items-center gap-1.5 text-amber-800 dark:text-amber-200 font-extrabold text-[11px]">
                    <i class="fa-solid fa-circle-info text-amber-500"></i>
                    <span>Nomor Belum Terdaftar sebagai Member Resmi</span>
                </div>
                <p class="text-[11px] font-medium text-slate-600 dark:text-slate-300 leading-normal">
                    Nomor <b>+${h(t)}</b> saat ini tercatat sebagai <b>Pelanggan Umum</b>. Fitur Poin Hadiah dan fasilitas pembayaran <b>Cash Tempo</b> hanya dapat digunakan setelah nomor Anda dikonfirmasi & disimpan oleh Admin Toko di database CMS.
                </p>
                ${r?`
                <div class="pt-1">
                    <a href="${n}" target="_blank" class="inline-flex items-center gap-1.5 text-[10px] font-bold text-emerald-600 dark:text-emerald-400 hover:underline">
                        <i class="fa-brands fa-whatsapp text-emerald-500"></i> Hubungi Admin untuk Pendaftaran Member
                    </a>
                </div>`:""}
            `}}catch{e.className="text-xs font-bold text-rose-500 p-2.5 bg-rose-50 dark:bg-rose-900/20 rounded-xl",e.textContent="Gagal mengecek data. Silakan periksa koneksi internet Anda."}},pt=s=>{const e=(f.rewards||[]).find(a=>a.id===s);if(!e)return;if((parseFloat(g?.points)||0)<(parseFloat(e.pointsCost)||0)){typeof window.showToast=="function"&&window.showToast("Poin Anda belum cukup untuk hadiah ini!");return}if((parseFloat(e.stock)||0)<=0){typeof window.showToast=="function"&&window.showToast("Maaf, stok hadiah ini sedang kosong!");return}Z({id:e.id,name:e.name,pointsCost:parseFloat(e.pointsCost)||0}),E(),typeof window.showToast=="function"&&window.showToast(`Hadiah "${e.name}" dipilih! Lanjutkan checkout untuk menukarnya.`)},mt=()=>{Z(null),E()},Be=(s=!1)=>{const e=document.getElementById("member-modal");if(!e||e.style.display==="none")return;const t=()=>{e.style.opacity="0",e.style.transition="opacity 0.25s ease",setTimeout(()=>{e.style.display="none",e.style.opacity="",e.style.transition=""},250)};typeof window.requestCloseModal=="function"?window.requestCloseModal("member",s,t):t()},ut=()=>{D(null);try{localStorage.removeItem("freshmart_current_member"),localStorage.removeItem("freshmart_member_wa")}catch{}E()};window.renderRewardCatalog=ot;window.checkMemberStatus=it;window.openMemberModal=lt;window.rMemberModalBody=E;window.lookupMemberPoints=ct;window.selectReward=pt;window.deselectReward=mt;window.closeMemberModal=Be;window.flipMemberCard=st;window.downloadMemberCard=nt;window.getMemberTier=de;window.formatMemberCardNumber=Me;window.generateBarcodeSVG=Se;window.setCurrentMember=D;window.logoutMember=ut;window.invalidateMemberCache=rt;window.reconcilePointsFromOrders=fe;window.getMemberPointsHistory=Ie;window.loadMemberPointsHistory=Ne;export{X as G,le as a,xe as u};
