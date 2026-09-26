const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/vendor-firebase-analytics-Jm19L5g2.js","assets/vendor-firebase-core-D2OF5R23.js","assets/module-pos-CNPoopjW.js","assets/module-print-BniTkM5y.js"])))=>i.map(i=>d[i]);
import{e as l,o as P,g as q,a as w,s as I,c as D,b as M,f as B,d as oe,h as k,i as c,j as S,k as x,l as C,m as h,n as L}from"./module-print-BniTkM5y.js";import{f as A}from"./vendor-firebase-core-D2OF5R23.js";import"./vendor-firebase-db-BIUZcnOd.js";const ie="modulepreload",re=function(e){return"/"+e},V={},U=function(t,a,o){let i=Promise.resolve();if(a&&a.length>0){document.getElementsByTagName("link");const s=document.querySelector("meta[property=csp-nonce]"),n=s?.nonce||s?.getAttribute("nonce");i=Promise.allSettled(a.map(p=>{if(p=re(p),p in V)return;V[p]=!0;const m=p.endsWith(".css"),v=m?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${p}"]${v}`))return;const d=document.createElement("link");if(d.rel=m?"stylesheet":ie,m||(d.as="script"),d.crossOrigin="",d.href=p,n&&d.setAttribute("nonce",n),document.head.appendChild(d),m)return new Promise((N,ae)=>{d.addEventListener("load",N),d.addEventListener("error",()=>ae(new Error(`Unable to preload CSS for ${p}`)))})}))}function r(s){const n=new Event("vite:preloadError",{cancelable:!0});if(n.payload=s,window.dispatchEvent(n),!n.defaultPrevented)throw s}return i.then(s=>{for(const n of s||[])n.status==="rejected"&&r(n.reason);return t().catch(r)})},se={apiKey:"AIzaSyCOjrhMP52TGbiOyQLY92NDYE26N6d9hJM",authDomain:"restu-karya-utama.firebaseapp.com",databaseURL:"https://restu-karya-utama-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"restu-karya-utama",storageBucket:"restu-karya-utama.firebasestorage.app",messagingSenderId:"858310421352",appId:"1:858310421352:web:e20a833875e8d5c19944dd",measurementId:"G-PHDG2LJ8PM"};try{localStorage.removeItem("freshmart_fb_config")}catch{}const ne=window.FIREBASE_CONFIG||se;A.apps.length||A.initializeApp(ne);const y=A.firestore(),le=A.auth();typeof window<"u"&&(window.firebase=A,window.db=y,window.auth=le);try{y.settings({ignoreUndefinedProperties:!0,experimentalForceLongPolling:!0,merge:!0})}catch{}typeof window<"u"&&(window.addEventListener("online",()=>{try{y.enableNetwork().catch(()=>{})}catch{}}),window.addEventListener("offline",()=>{try{y.disableNetwork().catch(()=>{})}catch{}}));let de=null;const Be=()=>{U(()=>import("./vendor-firebase-analytics-Jm19L5g2.js"),__vite__mapDeps([0,1])).then(()=>{try{de=A.analytics()}catch{}}).catch(()=>{})},$e="K2ijSERTT2dg27yYGTEgn6XHSnW2";let _={},f="view-catalog",T=!1,E=null,K=["view-catalog"];const W=e=>{history.pushState({modal:e},"",window.location.href),P.push(e)},$=(e,t,a)=>{if(!t){const o=P.lastIndexOf(e);o>-1&&P.splice(o,1),T=!0,E&&clearTimeout(E),E=setTimeout(()=>{T=!1},300);try{history.back()}catch{T=!1}}a()},u=(e,t=!1)=>{if(!e||e===f)return;t||(history.pushState({view:e},"",window.location.href),e==="view-catalog"?K=["view-catalog"]:K.push(e));const a=l(f);if(a){const i=a.querySelector(".scroll-content");i&&(_[f]=i.scrollTop)}if(f==="view-orders"&&e!=="view-orders"&&typeof window.detachMyOrdersRealtime=="function"&&window.detachMyOrdersRealtime(),f==="view-pos-cashier"&&e!=="view-pos-cashier"&&(typeof window.destroyBarcodeListener=="function"&&window.destroyBarcodeListener(),typeof window.detachPOSHistoryListener=="function"&&window.detachPOSHistoryListener()),f==="view-admin"&&e!=="view-admin"){const i=l("view-admin");i&&i.classList.remove("admin-pos-mode"),typeof window.detachPOSHistoryListener=="function"&&window.detachPOSHistoryListener()}const o=l(e);if(o&&(o.classList.remove("hidden"),o.classList.add("flex")),document.querySelectorAll(".view-section").forEach(i=>{i!==o&&(i.classList.add("hidden"),i.classList.remove("flex"))}),o){e==="view-cart"&&typeof window.renderCart=="function"?window.renderCart():e==="view-checkout"&&typeof window.rChck=="function"?window.rChck():e==="view-payment"&&typeof window.rPay=="function"?window.rPay():e==="view-wishlist"&&typeof window.renderWish=="function"?window.renderWish():e==="view-orders"&&typeof window.renderMyOrders=="function"?window.renderMyOrders():e==="view-faq"&&typeof window.renderStorefrontFAQ=="function"?window.renderStorefrontFAQ():e==="view-pos-cashier"&&U(()=>import("./module-pos-CNPoopjW.js").then(r=>r.a),__vite__mapDeps([2,3,1])).then(r=>{typeof r.renderPOSStorefront=="function"&&r.renderPOSStorefront()}).catch(r=>console.error("[POS] Gagal memuat storefront:",r));const i=o.querySelector(".scroll-content");if(i)if(t){const r=_[e]||0;requestAnimationFrame(()=>requestAnimationFrame(()=>{i.scrollTop=r}))}else i.scrollTo(0,0)}f=e,z(e)},z=(e=f)=>{const t=l("bottom-nav-bar");if(!t)return;if(["view-cart","view-checkout","view-payment","view-admin-login","view-admin","view-pos-cashier"].includes(e)){t.classList.add("bnav-hidden","translate-y-[250%]","opacity-0","pointer-events-none"),t.classList.remove("translate-y-0","opacity-100");return}if(t.classList.remove("bnav-hidden","translate-y-[250%]","opacity-0","pointer-events-none"),t.classList.add("translate-y-0","opacity-100"),document.querySelectorAll(".bnav-item").forEach(o=>o.classList.remove("active")),e==="view-catalog"){const o=l("bnav-home");o&&o.classList.add("active")}else if(e==="view-orders"){const o=l("bnav-orders");o&&o.classList.add("active")}else if(e==="view-wishlist"||e==="view-faq"){const o=l("bnav-menu");o&&o.classList.add("active")}},ce=e=>{if(typeof window.triggerHaptic=="function"&&window.triggerHaptic(e==="home"?"medium":"light"),e==="home")if(f==="view-catalog"){const t=document.querySelector("#view-catalog .scroll-content");t?t.scrollTo({top:0,behavior:"smooth"}):window.scrollTo({top:0,behavior:"smooth"})}else u("view-catalog");else e==="categories"?typeof window.openCategoryModal=="function"&&window.openCategoryModal():e==="cart"?u("view-cart"):e==="orders"?u("view-orders"):e==="menu"&&typeof window.openQuickMenuModal=="function"&&window.openQuickMenuModal()},Q=()=>{const e=document.querySelector("#view-catalog .scroll-content"),t=l("pull-to-refresh-indicator"),a=l("ptr-icon"),o=l("ptr-text");if(!e||!t)return;let i=0,r=0,s=!1,n=!1;const p=65;e.addEventListener("touchstart",m=>{e.scrollTop<=5&&!n&&(i=m.touches[0].pageY,s=!0)},{passive:!0}),e.addEventListener("touchmove",m=>{if(!s||n)return;r=m.touches[0].pageY;const v=r-i;if(v>15&&e.scrollTop<=5){t.classList.add("visible");const d=Math.min(v/p,1.5);a&&(a.style.transform=`rotate(${d*240}deg)`),o&&(o.innerText=v>=p?"Lepaskan untuk segarkan":"Tarik ke bawah untuk refresh")}else t.classList.remove("visible")},{passive:!0}),e.addEventListener("touchend",async()=>{if(!s||n)return;if(s=!1,r-i>=p&&e.scrollTop<=5){n=!0,typeof window.triggerHaptic=="function"&&window.triggerHaptic("medium"),a&&(a.className="fa-solid fa-arrows-rotate fa-spin text-[var(--color-primary)]",a.style.transform=""),o&&(o.innerText="Menyinkronkan katalog...");try{typeof window.syncAppMeta=="function"?await window.syncAppMeta():typeof window.loadAppData=="function"&&await window.loadAppData(),typeof window.rCat=="function"&&window.rCat(),typeof window.rDyn=="function"&&window.rDyn(),o&&(o.innerText="Katalog Terkini Disinkron!"),a&&(a.className="fa-solid fa-circle-check text-emerald-500"),typeof window.triggerHaptic=="function"&&window.triggerHaptic("success")}catch{o&&(o.innerText="Gagal sinkron data")}setTimeout(()=>{t.classList.remove("visible"),setTimeout(()=>{n=!1,a&&(a.className="fa-solid fa-arrows-rotate text-[var(--color-primary)] transition-transform duration-300",a.style.transform=""),o&&(o.innerText="Tarik ke bawah untuk refresh")},300)},600)}else t.classList.remove("visible"),a&&(a.style.transform="")})},Y=e=>{e==="product"&&typeof window.closeProductModal=="function"?window.closeProductModal(!0):e==="category"&&typeof window.closeCategoryModal=="function"?window.closeCategoryModal(!0):e==="brand"&&typeof window.closeBrandModal=="function"?window.closeBrandModal(!0):e==="admin"&&typeof window.closeAdminModal=="function"?window.closeAdminModal(!0):e==="adminOrder"&&typeof window.closeOrderDetailModal=="function"?window.closeOrderDetailModal(!0):e==="receipt"&&typeof window.closeReceiptPreviewModal=="function"?window.closeReceiptPreviewModal(!0):e==="docPreview"&&typeof window.closeDocPreviewModal=="function"?window.closeDocPreviewModal(!0):e==="scanner"&&typeof window.closeCameraScanner=="function"?window.closeCameraScanner(!0):e==="confirm"&&typeof window.closeConfirm=="function"?window.closeConfirm(!0):e==="customerOrder"&&typeof window.closeCustomerOrderDetailModal=="function"?window.closeCustomerOrderDetailModal(!0):e==="restock"&&typeof window.closeRestockModal=="function"?window.closeRestockModal(!0):e==="quickprice"&&typeof window.closeQuickPriceModal=="function"?window.closeQuickPriceModal(!0):e==="member"&&typeof window.closeMemberModal=="function"?window.closeMemberModal(!0):e==="prompt"&&typeof window.closePrompt=="function"?window.closePrompt(!0):e==="review"&&typeof window.closeReviewModal=="function"?window.closeReviewModal(!0):e==="quickmenu"&&typeof window.closeQuickMenuModal=="function"?window.closeQuickMenuModal(!0):e==="variantPreview"&&typeof window.closeVariantPreviewModal=="function"?window.closeVariantPreviewModal(!0):e==="terms"&&typeof window.closeTermsModal=="function"?window.closeTermsModal(!0):e==="privacy"&&typeof window.closePrivacyModal=="function"?window.closePrivacyModal(!0):e==="askQuestion"&&typeof window.closeAskQuestionModal=="function"?window.closeAskQuestionModal(!0):e==="quickVariant"&&typeof window.closeQuickVariantSheet=="function"?window.closeQuickVariantSheet(!0):e==="adminFAQ"&&typeof window.closeAdminFAQModal=="function"?window.closeAdminFAQModal(!0):e==="printerSettings"&&typeof window.closePrinterSettingsModal=="function"?window.closePrinterSettingsModal(!0):e==="exitConfirm"&&typeof window.closeExitConfirmModal=="function"?window.closeExitConfirmModal(!0):e==="appDownload"&&typeof window.closeAppDownloadModal=="function"?window.closeAppDownloadModal(!0):e==="voucher"&&typeof window.closeVoucherModal=="function"?window.closeVoucherModal(!0):e==="guide"&&typeof window.closeShoppingGuideModal=="function"?window.closeShoppingGuideModal(!0):e==="changelog"&&typeof window.closeChangelogModal=="function"?window.closeChangelogModal(!0):e==="guarantee"&&typeof window.closeQualityGuaranteeModal=="function"?window.closeQualityGuaranteeModal(!0):e==="security"&&typeof window.closeSecurityModal=="function"?window.closeSecurityModal(!0):e==="posVariantSheet"&&typeof window.closePOSVariantSheet=="function"?window.closePOSVariantSheet(!0):e==="posLogin"&&typeof window.closePOSLoginModal=="function"?window.closePOSLoginModal(!0):e==="posCartDrawer"&&typeof window.closePOSCartDrawer=="function"?window.closePOSCartDrawer(!0):e==="posPayment"&&typeof window.closePayModal=="function"&&window.closePayModal(!0)},J=()=>{const e=l("exit-confirm-modal");e&&(e.classList.contains("hidden")&&W("exitConfirm"),e.classList.remove("hidden"),setTimeout(()=>{e.classList.remove("opacity-0");const t=l("exit-confirm-modal-box");t&&t.classList.remove("scale-95")},10),typeof window.triggerHaptic=="function"&&window.triggerHaptic("light"))},O=(e=!1)=>{$("exitConfirm",e,()=>{const t=l("exit-confirm-modal"),a=l("exit-confirm-modal-box");t&&t.classList.add("opacity-0"),a&&a.classList.add("scale-95"),setTimeout(()=>{t&&t.classList.add("hidden")},250)})},pe=()=>{O(!0),window.AndroidNativeApp&&typeof window.AndroidNativeApp.exitApp=="function"?window.AndroidNativeApp.exitApp():navigator.app&&typeof navigator.app.exitApp=="function"?navigator.app.exitApp():(typeof window.showToast=="function"&&window.showToast("Sampai jumpa kembali di Toko Putri! 🙏"),setTimeout(()=>{try{window.close()}catch{}},400))},fe=()=>{if(P.length>0){try{window.history.back()}catch{const a=P.pop();Y(a)}return}if(f==="view-admin"){const t=l("admin-content-view"),a=l("admin-dashboard-view");if(!!(t&&!t.classList.contains("hidden")||a&&a.classList.contains("hidden")||window.history.state&&window.history.state.tab||typeof window.cTab<"u"&&window.cTab)){if(window.history.state&&window.history.state.tab&&window.history.length>1)try{window.history.back();return}catch{}typeof window.openAdminMenu=="function"&&window.openAdminMenu();try{window.history.replaceState({view:"view-admin"},"",window.location.href)}catch{}return}typeof window.showConfirm=="function"&&window.showConfirm("Keluar Seller","Apakah anda akan keluar dari dashboard seller?",()=>{typeof window.logoutAdmin=="function"&&window.logoutAdmin()},"Ya, Keluar",!0);return}if(f==="view-pos-cashier"){typeof window.showConfirm=="function"?window.showConfirm("Keluar Mode Kasir","Yakin keluar dari mode POS kasir?",()=>{typeof window.exitPOSMode=="function"?window.exitPOSMode():u("view-catalog")},"Ya, Keluar",!0):u("view-catalog");return}if(f!=="view-catalog"){if(f==="view-payment"){u("view-checkout");return}if(f==="view-checkout"){u("view-cart");return}if(f==="view-cart"){u("view-catalog");return}window.history.length>1?window.history.back():u("view-catalog");return}const e=l("exit-confirm-modal");e&&!e.classList.contains("hidden")?O():J()},me=()=>{Q();try{(!history.state||!history.state.view)&&history.replaceState({view:"view-catalog"},"",window.location.href)}catch{}window.addEventListener("popstate",e=>{if(T){T=!1,E&&clearTimeout(E);return}if(P.length>0){const i=P.pop();Y(i);return}const t=e.state||{},a=t.view||null;if(window.isAdm||window.__localIsAdm)if(a==="view-admin")u("view-admin",!0),t.tab&&typeof window.openAdminTab=="function"?window.openAdminTab(t.tab,!0):typeof window.openAdminMenu=="function"&&window.openAdminMenu();else{const i=l("admin-content-view");if(i&&!i.classList.contains("hidden")){history.pushState({view:"view-admin"},"",window.location.href),u("view-admin",!0),typeof window.openAdminMenu=="function"&&window.openAdminMenu();return}history.pushState({view:"view-admin"},"",window.location.href),typeof window.showConfirm=="function"&&window.showConfirm("Keluar Seller","Apakah anda akan keluar dari dashboard seller?",()=>{typeof window.logoutAdmin=="function"&&window.logoutAdmin()},"Ya, Keluar",!0)}else if(a){let i=a;a==="view-admin"&&(i="view-admin-login"),u(i,!0)}else u("view-catalog",!0)})};window.pushModalHistory=W;window.requestCloseModal=$;window.changeView=u;window.setupHistoryRouter=me;window.onBottomNavClick=ce;window.updateBottomNav=z;window.initPullToRefresh=Q;window.handleAppBackButton=fe;window.openExitConfirmModal=J;window.closeExitConfirmModal=O;window.confirmExitApp=pe;window.isProgrammaticModalClose=T;window.viewHistoryStack=K;try{Object.defineProperty(window,"curViewName",{get:()=>f,set:e=>{f=e},configurable:!0})}catch{}const Z=()=>{l("voucher-input");const e=(q("voucher-input")||"").toUpperCase().trim(),t=(w.vouchers||[]).find(i=>(i.code||"").toUpperCase()===e);I("voucher-msg-container");const a=typeof window.getEffP=="function"?window.getEffP:i=>i.effectivePrice||i.price||0,o=D.reduce((i,r)=>i+(parseFloat(a(r))||0)*(parseFloat(r.qty)||0),0);if(t){let i=!0;t.targetProduct&&t.targetProduct!==""&&(i=D.some(r=>r&&String(r.id)===String(t.targetProduct))),t.targetProduct&&t.targetProduct!==""&&!i?(S(null),M("voucher-msg",'<i class="fa-solid fa-box mr-1"></i> Khusus Produk Tertentu!'),l("voucher-msg")&&(l("voucher-msg").className="text-sm font-bold text-rose-500 dark:text-rose-400")):t.minPurchase&&parseFloat(t.minPurchase)>0&&o<parseFloat(t.minPurchase)?(S(null),M("voucher-msg",`<i class="fa-solid fa-circle-exclamation mr-1"></i> Minimal belanja ${B(t.minPurchase)}`),l("voucher-msg")&&(l("voucher-msg").className="text-sm font-bold text-amber-500 dark:text-amber-400")):t.type&&t.type.includes("shipping")&&oe.deliveryMethod!=="delivery"?(S(null),M("voucher-msg",'<i class="fa-solid fa-motorcycle mr-1"></i> Khusus pesanan dikirim kurir!'),l("voucher-msg")&&(l("voucher-msg").className="text-sm font-bold text-rose-500 dark:text-rose-400")):(S(t),M("voucher-msg",'<i class="fa-solid fa-check-circle mr-1"></i> Voucher Diterapkan!'),l("voucher-msg")&&(l("voucher-msg").className="text-sm font-bold text-[var(--color-primary)]"))}else e===""?(S(null),k("voucher-msg-container"),typeof window.rPay=="function"&&window.rPay()):(S(null),M("voucher-msg",'<i class="fa-solid fa-times-circle mr-1"></i> Kode Tidak Valid'),l("voucher-msg")&&(l("voucher-msg").className="text-sm font-bold text-rose-500 dark:text-rose-400"));typeof window.rPay=="function"&&window.rPay()},ue=()=>{let e=document.getElementById("voucher-modal");e||(e=document.createElement("div"),e.id="voucher-modal",e.className="fixed inset-0 z-[115] bg-slate-900/80 flex items-end sm:items-center justify-center p-0 sm:p-5",e.onclick=o=>{o.target===e&&j()},document.body.appendChild(e));const t=(w.vouchers||[]).filter(o=>o.isShow!==!1&&o.isShow!=="false"),a=t.length?t.map(o=>{let i="";o.type==="percent"?i=`Diskon ${o.value}%`:o.type==="shipping_free"?i="Gratis Ongkir":o.type==="shipping_flat"?i=`Diskon Ongkir ${B(o.value)}`:i=`Potongan ${B(o.value)}`;const r=o.minPurchase&&parseFloat(o.minPurchase)>0?`Min. belanja ${B(o.minPurchase)}`:"Tanpa minimal belanja";return`
        <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/80 hover:border-[var(--color-primary)] transition-all shadow-xs">
            <div class="flex items-start gap-3.5 min-w-0">
                <div class="w-11 h-11 rounded-xl bg-[var(--color-primary)] text-white flex items-center justify-center text-lg shrink-0 shadow-sm mt-0.5">
                    <i class="fa-solid fa-ticket"></i>
                </div>
                <div class="min-w-0">
                    <div class="flex flex-wrap items-center gap-2 mb-1.5">
                        <span class="font-extrabold text-sm font-mono tracking-wider text-slate-800 dark:text-white bg-white dark:bg-slate-900 px-2.5 py-0.5 rounded-lg border border-slate-200 dark:border-slate-700 select-all">${c(o.code)}</span>
                        <span class="primary-bg text-white text-[10px] font-bold px-2 py-0.5 rounded-md uppercase whitespace-nowrap shadow-2xs">${i}</span>
                    </div>
                    <p class="text-[11px] font-medium text-slate-500 dark:text-slate-400 flex items-center gap-1.5"><i class="fa-solid fa-circle-check text-[var(--color-primary)] text-xs"></i> ${r}</p>
                </div>
            </div>
            <div class="flex items-center gap-2 shrink-0 pt-2 md:pt-0 border-t md:border-t-0 border-slate-200 dark:border-slate-700">
                <button type="button" onclick="copyVoucherCode('${c(o.code)}')" class="flex-1 md:flex-initial bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] text-xs font-bold uppercase tracking-wider px-3.5 py-2 rounded-xl transition-all active:scale-95 flex items-center justify-center gap-1.5 shadow-2xs">
                    <i class="fa-regular fa-copy"></i> Salin
                </button>
                <button type="button" onclick="useVoucherCode('${c(o.code)}')" class="flex-1 md:flex-initial primary-bg text-white text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-xl transition-all active:scale-95 flex items-center justify-center gap-1.5 shadow-sm">
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
    `;e.innerHTML=`
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
                ${a}
            </div>
        </div>`,e.style.opacity="0",e.style.display="flex",requestAnimationFrame(()=>{e.style.transition="opacity 0.25s ease",e.style.opacity="1"}),typeof window.pushModalHistory=="function"&&window.pushModalHistory("voucher")},we=e=>{navigator.clipboard&&navigator.clipboard.writeText?navigator.clipboard.writeText(e).then(()=>{typeof window.showToast=="function"&&window.showToast(`✅ Kode "${e}" disalin ke clipboard!`)}).catch(()=>{typeof window.showToast=="function"&&window.showToast(`Kode Kupon: ${e}`)}):typeof window.showToast=="function"&&window.showToast(`Kode Kupon: ${e}`)},he=e=>{j();const t=l("voucher-input");t&&(t.value=e,Z()),D.length>0?typeof window.changeView=="function"&&window.changeView("view-checkout"):(typeof window.showToast=="function"&&window.showToast(`Kode "${e}" siap digunakan saat checkout belanja!`),typeof window.changeView=="function"&&window.changeView("view-catalog"))},j=(e=!1)=>{const t=()=>{const a=document.getElementById("voucher-modal");!a||a.style.display==="none"||(a.style.opacity="0",a.style.transition="opacity 0.25s ease",setTimeout(()=>{a.style.display="none",a.style.opacity="",a.style.transition=""},250))};typeof $=="function"?$("voucher",e,t):typeof window.requestCloseModal=="function"?window.requestCloseModal("voucher",e,t):t()};window.applyVoucher=Z;window.openVoucherModal=ue;window.closeVoucherModal=j;window.copyVoucherCode=we;window.useVoucherCode=he;const b=new Map,be=3*60*1e3,xe="https://lh3.googleusercontent.com/d/1KHwsV5sK6aAH3-eP_vTJA4tE5MyRukLo",ge=e=>{if(!e){b.clear();return}const t=e.toString().replace(/\D/g,"");let a=t,o=t.startsWith("0")?"62"+t.substring(1):t.startsWith("62")?t:"62"+t,i=t.startsWith("62")?"0"+t.substring(2):t;b.delete(t),b.delete(a),b.delete(o),b.delete(i)},H=async(e,t="")=>{try{let a=(e||"").toString().replace(/\D/g,"");if(a.startsWith("0")?a="62"+a.substring(1):a.startsWith("62")||(a="62"+a),!a||a.length<9)return null;let o=[];try{const d=localStorage.getItem("freshmart_my_orders");d&&(o=JSON.parse(d)||[])}catch{}if(!o.length)return null;let i=0;const r=o.find(d=>d.finalMemberPoints!==void 0&&d.finalMemberPoints!==null);if(r?i=Math.max(0,parseFloat(r.finalMemberPoints)||0):i=o.reduce((d,N)=>d+(parseFloat(N.pointsEarned)||0),0),i<=0)return null;const s=y.collection("freshmart").doc("cms_data").collection("customers").doc(a),n=await s.get();if(!n.exists)return null;const p=t||h&&h.name||n.data().name||"Pelanggan Setia",m={id:a,phone:a,name:p,points:i,updatedAt:new Date().toISOString(),lastOrderAt:new Date().toISOString()};try{await s.set(m,{merge:!0})}catch(d){console.warn("[reconcilePointsFromOrders] Firestore set error:",d)}x(m);try{localStorage.setItem("freshmart_current_member",JSON.stringify(m)),localStorage.setItem("freshmart_member_wa",a)}catch{}return b.set(a,{data:m,timestamp:Date.now()}),document.getElementById("member-modal-body")&&g(),m}catch(a){return console.warn("[reconcilePointsFromOrders] Error:",a),null}},R=(e=0)=>{const t=Math.max(0,parseFloat(e)||0);return t>=1e3?{level:4,name:"PLATINUM VIP",badge:"💎 PLATINUM VIP",icon:"fa-gem",gradient:"from-slate-950 via-zinc-900 to-neutral-950 border-amber-400/40 text-amber-200",cardBg:"linear-gradient(135deg, #090d16 0%, #171f30 45%, #0d1322 75%, #050811 100%)",accentBg:"bg-amber-400/20",accentText:"text-amber-300",accentBorder:"border-amber-400/40",chipBorder:"#f59e0b",foilClass:"gold-foil-text",nextTier:null,ptsNeeded:0,progress:100,perks:["Cashback & Poin Belanja Maksimal (2x Lipat)","Akses Prioritas Antrean Kasir & Pengiriman","Klaim Semua Hadiah Katalog VIP","Layanan Konsultasi Khusus via WhatsApp"]}:t>=500?{level:3,name:"GOLD MEMBER",badge:"🥇 GOLD MEMBER",icon:"fa-crown",gradient:"from-amber-600 via-yellow-600 to-amber-700 border-yellow-300/40 text-yellow-100",cardBg:"linear-gradient(135deg, #78350f 0%, #b45309 35%, #d97706 70%, #92400e 100%)",accentBg:"bg-yellow-400/20",accentText:"text-amber-200",accentBorder:"border-yellow-300/40",chipBorder:"#fde047",foilClass:"gold-foil-text",nextTier:"Platinum VIP",ptsNeeded:1e3-t,progress:Math.min(100,Math.round((t-500)/500*100)),perks:["Diskon & Promo Spesial Member Gold","Kumpulkan Poin di Setiap Transaksi","Tukar Hadiah Menarik dari Katalog","Prioritas Penyiapan Pesanan"]}:t>=100?{level:2,name:"SILVER MEMBER",badge:"🥈 SILVER MEMBER",icon:"fa-medal",gradient:"from-slate-700 via-slate-600 to-slate-800 border-slate-300/40 text-slate-100",cardBg:"linear-gradient(135deg, #1e293b 0%, #334155 40%, #475569 70%, #0f172a 100%)",accentBg:"bg-slate-200/20",accentText:"text-slate-100",accentBorder:"border-slate-300/40",chipBorder:"#cbd5e1",foilClass:"silver-foil-text",nextTier:"Gold Member",ptsNeeded:500-t,progress:Math.min(100,Math.round((t-100)/400*100)),perks:["Kumpulkan Poin di Setiap Transaksi","Tukar Hadiah Langsung Tanpa Undian","Penawaran Diskon Tertentu"]}:{level:1,name:"BRONZE MEMBER",badge:"🥉 BRONZE MEMBER",icon:"fa-award",gradient:"from-stone-800 via-amber-950 to-stone-900 border-orange-400/30 text-orange-200",cardBg:"linear-gradient(135deg, #381a10 0%, #632917 40%, #7c2d12 70%, #292524 100%)",accentBg:"bg-orange-500/20",accentText:"text-orange-200",accentBorder:"border-orange-400/40",chipBorder:"#fb923c",foilClass:"bronze-foil-text",nextTier:"Silver Member",ptsNeeded:100-t,progress:Math.min(100,Math.round(t/100*100)),perks:["Kumpulkan Poin di Setiap Transaksi Belanja","Akses Penuh ke Katalog Hadiah Toko"]}},X=e=>{let t=(e||"").toString().replace(/\D/g,"");for(t.startsWith("62")?t=t.substring(2):t.startsWith("0")&&(t=t.substring(1));t.length<8;)t+="0";const a=[];for(let o=0;o<t.length&&a.length<3;o+=4)a.push(t.substring(o,o+4));return`PUTRI • ${a.join(" • ")}`},ee=e=>{const t=String(e||"812345678901").replace(/\D/g,"");let a="",o=8;a+=`<rect x="${o}" y="3" width="2.5" height="34" fill="#0f172a"/>`,o+=4,a+=`<rect x="${o}" y="3" width="1.5" height="34" fill="#0f172a"/>`,o+=3.5,a+=`<rect x="${o}" y="3" width="3" height="34" fill="#0f172a"/>`,o+=5;for(let i=0;i<t.length;i++){const r=parseInt(t[i],10)||0,s=(r%3+1)*1.3,n=((r+2)%4+1)*1.1,p=(r%2+1)*1.8;a+=`<rect x="${o}" y="3" width="${s}" height="34" fill="#0f172a"/>`,o+=s+p,a+=`<rect x="${o}" y="3" width="${n}" height="34" fill="#0f172a"/>`,o+=n+2}return a+=`<rect x="${o}" y="3" width="3" height="34" fill="#0f172a"/>`,o+=5,a+=`<rect x="${o}" y="3" width="1.5" height="34" fill="#0f172a"/>`,o+=3.5,a+=`<rect x="${o}" y="3" width="2.5" height="34" fill="#0f172a"/>`,o+=4,`
    <svg class="w-full h-11 bg-white rounded-lg px-2 py-1 shadow-inner border border-slate-200" viewBox="0 0 ${Math.max(o+10,240)} 40" xmlns="http://www.w3.org/2000/svg">
        ${a}
    </svg>`},F=e=>{const t=parseFloat(e?.points)||0,a=R(t),o=(w.store?.name||"Toko Putri").toUpperCase(),i=w.store?.logo&&w.store.logo!=="fa-store"?w.store.logo:xe,r=(e?.name||"PELANGGAN SETIA").toUpperCase(),s=(e?.phone||"81234567890").toString().replace(/\D/g,""),n=X(s),p=w.store?.wa||s;return`
    <div class="member-card-scene w-full max-w-[390px] mx-auto select-none my-1">
        <div id="member-card-inner" class="member-card-inner relative w-full aspect-[1.586/1] cursor-pointer rounded-2xl sm:rounded-3xl border border-black/10 dark:border-white/10" onclick="flipMemberCard()" title="Klik untuk membalik kartu">
            
            <!-- ================= SISI DEPAN (FRONT CARD) ================= -->
            <div id="member-card-front-export" class="member-card-front rounded-2xl sm:rounded-3xl overflow-hidden p-4 sm:p-5 flex flex-col justify-between text-white border border-white/20" style="background: ${a.cardBg};">
                
                <!-- Ambient luxury light reflections (clean subtle overlay, zero blur spilling) -->
                <div class="absolute inset-0 bg-gradient-to-tr from-black/25 via-transparent to-white/15 pointer-events-none"></div>

                <!-- Header Kartu: Logo Toko, Nama Toko, & Gelombang Contactless -->
                <div class="relative z-10 flex items-center justify-between">
                    <div class="flex items-center gap-2.5 min-w-0">
                        <div class="w-8 h-8 rounded-xl bg-white/95 p-1 flex items-center justify-center shadow-2xs shrink-0 border border-white/40">
                            <img src="${c(i)}" alt="Logo" class="w-full h-full object-contain" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">
                            <i class="fa-solid fa-store text-slate-800 text-xs hidden"></i>
                        </div>
                        <div class="min-w-0">
                            <h4 class="text-[11px] sm:text-xs font-black tracking-wider text-white uppercase truncate">${c(o)}</h4>
                            <p class="text-[8px] sm:text-[9px] font-bold tracking-[0.2em] text-white/80 uppercase">VIP Loyalty Pass</p>
                        </div>
                    </div>
                    <!-- Contactless NFC & Tier Pill -->
                    <div class="flex items-center gap-2 shrink-0">
                        <span class="text-[8px] sm:text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full ${a.accentBg} ${a.accentText} border ${a.accentBorder}">
                            ${a.badge}
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
                            <span class="text-base sm:text-xl font-black tracking-tight text-white">${t}</span>
                            <span class="text-[9px] font-bold text-white/80">PTS</span>
                        </div>
                    </div>
                </div>

                <!-- Bagian Bawah: Nomor Kartu & Nama Pelanggan Embossed -->
                <div class="relative z-10">
                    <p class="text-[11px] sm:text-[13px] embossed-text text-white/95 font-mono tracking-[0.18em] mb-1.5">${c(n)}</p>
                    <div class="flex items-end justify-between gap-2">
                        <div class="min-w-0 flex-1">
                            <p class="text-[7px] sm:text-[8px] font-bold tracking-widest text-white/70 uppercase leading-none mb-0.5">Nama Pelanggan</p>
                            <p class="text-[11px] sm:text-[13px] font-bold text-white tracking-wider truncate uppercase">${c(r)}</p>
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
                            <span class="text-[9px] font-mono font-bold text-slate-500 italic truncate">${c(r)}</span>
                            <span class="text-[8px] font-mono font-black text-slate-800 tracking-widest">VERIFIED</span>
                        </div>
                        <div class="w-10 h-6 bg-amber-400 text-slate-950 font-black text-[9px] rounded flex items-center justify-center tracking-widest">
                            VIP
                        </div>
                    </div>

                    <!-- Barcode untuk Scanner Kasir Toko -->
                    <div class="mt-2 text-center">
                        <p class="text-[8px] font-bold text-slate-400 uppercase tracking-wider mb-1 flex items-center justify-center gap-1">
                            <i class="fa-solid fa-barcode text-[var(--color-primary-light)]"></i> Scan Barcode di Kasir POS Toko:
                        </p>
                        ${ee(s)}
                        <p class="text-[9px] font-mono font-bold tracking-[0.2em] text-slate-300 mt-1">*${c(s)}*</p>
                    </div>
                </div>

                <!-- Footer Sisi Belakang: Kontak & Info -->
                <div class="p-3 sm:p-4 bg-slate-950/80 border-t border-white/10 text-center">
                    <p class="text-[7.5px] sm:text-[8px] text-slate-400 leading-tight">
                        Kartu member digital resmi <b class="text-white">${c(o)}</b>. Tunjukkan saat transaksi untuk poin belanja.
                    </p>
                    <p class="text-[8px] font-bold text-emerald-400 mt-0.5">
                        <i class="fa-brands fa-whatsapp mr-1"></i>CS: +${c(p)}
                    </p>
                </div>
            </div>

        </div>
    </div>`},ye=()=>{const e=document.getElementById("member-card-inner");e&&e.classList.toggle("is-flipped")},ve=async()=>{const e=document.getElementById("member-card-inner");e&&e.classList.contains("is-flipped")&&(e.classList.remove("is-flipped"),await new Promise(a=>setTimeout(a,450)));const t=document.getElementById("member-card-front-export");if(t){typeof window.showToast=="function"&&window.showToast("Menyiapkan file gambar Kartu Member HD...");try{if(typeof window.ensureScriptLoaded=="function"&&await window.ensureScriptLoaded("https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js",()=>typeof html2canvas<"u"),typeof html2canvas>"u")throw new Error("Modul html2canvas belum siap dimuat.");const a=await html2canvas(t,{scale:3,useCORS:!0,allowTaint:!0,backgroundColor:null}),i=`Kartu_Member_TokoPutri_${(h?.name||"Pelanggan").replace(/[^a-zA-Z0-9]/g,"_")}.png`,r=a.toDataURL("image/png",1);if(window.AndroidNativeApp&&typeof window.AndroidNativeApp.saveOrShareFile=="function")window.AndroidNativeApp.saveOrShareFile(r,i,"image/png");else{const s=document.createElement("a");s.download=i,s.href=r,document.body.appendChild(s),s.click(),document.body.removeChild(s)}typeof window.showToast=="function"&&window.showToast("Kartu Member Berhasil Disimpan ke Galeri! 🎉")}catch(a){console.error("Gagal menyimpan kartu member:",a),typeof window.showToast=="function"&&window.showToast("Gagal menyimpan kartu. Silakan coba kembali.")}}},ke=()=>{const e=l("reward-catalog-container");if(!e)return;const t=w.store.showRewardCatalog!==!1&&w.store.showRewardCatalog!=="false";t&&typeof window.attachRewardsRealtime=="function"&&!window.unsubRewardsRealtime&&window.attachRewardsRealtime();const a=(w.rewards||[]).filter(i=>i.isActive!=="false"&&i.isActive!==!1);if(!t||a.length===0){e.classList.add("hidden"),e.innerHTML="";return}e.classList.remove("hidden");let o=`
    <div class="flex items-center justify-between mb-2.5">
        <h3 class="font-bold text-slate-800 dark:text-white text-xs sm:text-sm tracking-tight flex items-center gap-2">
            <div class="w-7 h-7 rounded-lg bg-[var(--color-primary)] flex items-center justify-center text-white shadow-2xs">
                <i class="fa-solid fa-gift text-xs"></i>
            </div> KATALOG HADIAH POIN PELANGGAN
        </h3>
        <button type="button" onclick="if(typeof window.openMemberModal==='function') window.openMemberModal(); else if(typeof window.showToast==='function') window.showToast('Gunakan poin Anda untuk menukar hadiah menarik!');" class="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-lg border border-[var(--color-primary)]/30 text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white transition-all active:scale-95 flex items-center gap-1 cursor-pointer">
            Lihat Kartu Member <i class="fa-solid fa-chevron-right text-[8px]"></i>
        </button>
    </div>
    <div class="flex gap-2.5 sm:gap-3 overflow-x-auto hide-scrollbar snap-x pb-3 pt-1">
        ${a.map(i=>`
            <div class="w-[115px] sm:w-[130px] shrink-0 snap-start relative group cursor-pointer active:scale-95 transition-all duration-200" onclick="if(typeof window.openMemberModal==='function') window.openMemberModal(); else if(typeof window.showToast==='function') window.showToast('Tukarkan hadiah ini saat checkout menggunakan poin belanja Anda!');">
                <div class="w-full bg-[var(--color-primary)] rounded-xl shadow-xs hover:shadow-sm hover:-translate-y-0.5 transition-all duration-200 flex flex-col relative overflow-hidden border border-white/20 text-white p-1.5">
                    <div class="absolute -right-3 -top-3 w-16 h-16 bg-white/20 rounded-full blur-lg pointer-events-none"></div>
                    <div class="absolute bottom-8 -left-2.5 w-4 h-4 rounded-full bg-[#f1f5f9] dark:bg-[#0b1121] border-r border-white/20 z-20 pointer-events-none transition-colors duration-300 shadow-inner"></div>
                    <div class="absolute bottom-8 -right-2.5 w-4 h-4 rounded-full bg-[#f1f5f9] dark:bg-[#0b1121] border-l border-white/20 z-20 pointer-events-none transition-colors duration-300 shadow-inner"></div>
                    <div class="absolute bottom-10 left-1.5 right-1.5 border-t border-dashed border-white/30 z-10 pointer-events-none"></div>
                    <div class="w-full aspect-square rounded-lg bg-white flex items-center justify-center overflow-hidden relative shadow-inner z-0 p-1.5">
                        <img loading="lazy" src="${c(i.img)}" alt="${c(i.name)}" class="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105" onerror="this.onerror=null;this.src='https://placehold.co/400?text=Hadiah'">
                        <div class="absolute top-1 left-1 bg-rose-500 text-white text-[7px] sm:text-[8px] font-bold px-1.5 py-0.5 rounded-md shadow-2xs uppercase tracking-wider"><i class="fa-solid fa-gift mr-0.5"></i>Gratis</div>
                        <div class="absolute top-1 right-1 bg-[var(--color-primary)] text-white text-[7px] sm:text-[8px] font-bold px-1.5 py-0.5 rounded-md shadow-2xs border border-white/20">${parseFloat(i.pointsCost||i.pointsRequired)||0} Poin</div>
                    </div>
                    <div class="w-full h-3.5 shrink-0"></div>
                    <div class="h-7 w-full px-0.5 flex flex-col justify-center items-center relative z-0 shrink-0 mb-0.5">
                        <h4 class="text-[9px] sm:text-[10px] font-bold text-white leading-tight line-clamp-2 uppercase tracking-wider text-center drop-shadow-xs">${c(i.name)}</h4>
                    </div>
                </div>
            </div>`).join("")}
    </div>`;e.innerHTML=o};let G=null;const Me=()=>{clearTimeout(G),G=setTimeout(async()=>{const t=(window.normalizeWA||(r=>(r||"").replace(/\D/g,"").replace(/^0/,"62")))(q("cust-wa")),a=l("member-status-banner");if(!a)return;if(!t||t.length<10){k(a),k("payment-option-tempo"),x(null),C(null);const r=document.querySelector('input[name="payment"][value="tempo"]');if(r&&r.checked){const s=document.querySelector('input[name="payment"][value="transfer"]')||document.querySelector('input[name="payment"][value="cashier"]');s&&(s.checked=!0,typeof window.togglePaymentDetails=="function"&&window.togglePaymentDetails())}return}const o=r=>{const s=parseFloat(r.points)||0,n=R(s);a.className="mt-3 p-3 sm:p-4 rounded-2xl bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 text-white border border-[rgba(var(--color-primary-rgb),0.35)] shadow-xl relative overflow-hidden flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3",a.innerHTML=`
                <div class="absolute -right-6 -bottom-6 w-28 h-28 bg-[rgba(var(--color-primary-rgb),0.12)] rounded-full blur-xl pointer-events-none"></div>
                <div class="flex items-center gap-3 relative z-10 min-w-0">
                    <div class="w-12 h-10 rounded-xl bg-[rgba(var(--color-primary-rgb),0.15)] border border-[rgba(var(--color-primary-rgb),0.35)] flex items-center justify-center shrink-0 shadow-inner">
                        <i class="fa-solid fa-id-card text-xl text-[var(--color-primary-light)]"></i>
                    </div>
                    <div class="min-w-0">
                        <div class="flex items-center gap-2 flex-wrap">
                            <span class="text-[9px] font-black uppercase tracking-widest px-2 py-0.5 rounded-full ${n.accentBg} ${n.accentText} border ${n.accentBorder}">${n.badge}</span>
                            <span class="text-[10px] font-bold text-[var(--color-primary-light)] flex items-center gap-1"><i class="fa-solid fa-coins text-[9px]"></i>${s} Poin</span>
                        </div>
                        <p class="text-xs font-bold text-white mt-0.5 truncate flex items-center gap-1.5">
                            <span>${c(r.name||"Pelanggan")}</span>
                            <span class="text-[9px] font-normal text-slate-400">(Member Resmi)</span>
                        </p>
                    </div>
                </div>
                <button type="button" onclick="openMemberModal()" class="relative z-10 w-full sm:w-auto shrink-0 primary-bg hover:opacity-90 text-white text-[10px] font-black uppercase tracking-wider px-3.5 py-2.5 rounded-xl shadow-md active:scale-95 transition-all flex items-center justify-center gap-1.5 cursor-pointer">
                    <i class="fa-solid fa-wallet"></i> Buka Kartu Member
                </button>`,I(a),I("payment-option-tempo")},i=b.get(t);if(i&&Date.now()-i.timestamp<be){if(i.data)x(i.data),o(i.data);else{x(null),C(null),k(a),k("payment-option-tempo");const r=document.querySelector('input[name="payment"][value="tempo"]');if(r&&r.checked){const s=document.querySelector('input[name="payment"][value="transfer"]')||document.querySelector('input[name="payment"][value="cashier"]');s&&(s.checked=!0,typeof window.togglePaymentDetails=="function"&&window.togglePaymentDetails())}}return}try{const r=await y.collection("freshmart").doc("cms_data").collection("customers").doc(t).get();if(r.exists){const s=r.data();b.set(t,{data:s,timestamp:Date.now()}),x(s),o(s)}else{b.set(t,{data:null,timestamp:Date.now()}),x(null),C(null),k(a),k("payment-option-tempo");const s=document.querySelector('input[name="payment"][value="tempo"]');if(s&&s.checked){const n=document.querySelector('input[name="payment"][value="transfer"]')||document.querySelector('input[name="payment"][value="cashier"]');n&&(n.checked=!0,typeof window.togglePaymentDetails=="function"&&window.togglePaymentDetails())}}}catch{}},500)},Pe=()=>{if(!h)try{const o=localStorage.getItem("freshmart_current_member");if(o){const i=JSON.parse(o);i&&(i.id||i.phone||i.name)&&x(i)}}catch{}const e=h?.phone||h?.id||localStorage.getItem("freshmart_member_wa");if(e){let o=e.toString().replace(/\D/g,"");o.startsWith("0")?o="62"+o.substring(1):o.startsWith("62")||(o="62"+o),y.collection("freshmart").doc("cms_data").collection("customers").doc(o).get().then(async i=>{if(i.exists){let r=i.data();if((parseFloat(r.points)||0)===0){const n=await H(o,r.name);n&&(r=n)}b.set(o,{data:r,timestamp:Date.now()}),x(r);try{localStorage.setItem("freshmart_current_member",JSON.stringify(r)),localStorage.setItem("freshmart_member_wa",o)}catch{}document.getElementById("member-modal-body")&&g()}else{b.set(o,{data:null,timestamp:Date.now()}),x(null);try{localStorage.removeItem("freshmart_current_member"),localStorage.removeItem("freshmart_member_wa")}catch{}document.getElementById("member-modal-body")&&g()}}).catch(()=>{})}typeof window.attachRewardsRealtime=="function"&&!window.unsubRewardsRealtime&&window.attachRewardsRealtime();let t=document.getElementById("member-modal");t||(t=document.createElement("div"),t.id="member-modal",t.className="fixed inset-0 z-[115] bg-slate-900/60 flex items-end sm:items-center justify-center p-0 sm:p-5 backdrop-blur-xs",t.onclick=o=>{o.target===t&&te()},document.body.appendChild(t));const a=t.style.display!=="none"&&t.style.opacity==="1";t.innerHTML=`
        <div class="bg-white dark:bg-slate-900 w-full max-w-lg rounded-t-3xl sm:rounded-3xl max-h-[90vh] flex flex-col shadow-xl border border-slate-200 dark:border-slate-800 overflow-hidden">
            <!-- Header Modal -->
            <div class="p-4 sm:p-5 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center shrink-0 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md">
                <div class="flex items-center gap-2.5">
                    <div class="w-8 h-8 rounded-xl primary-bg flex items-center justify-center text-white shadow-sm shadow-[rgba(var(--color-primary-rgb),0.25)]">
                        <i class="fa-solid fa-id-card text-xs"></i>
                    </div>
                    <div>
                        <h3 class="font-bold text-slate-800 dark:text-white text-sm sm:text-base leading-tight">Kartu Member Digital</h3>
                        <p class="text-[9px] sm:text-[10px] font-semibold text-slate-400">Loyalty Pass &amp; Poin Hadiah Toko Putri</p>
                    </div>
                </div>
                <button onclick="closeMemberModal()" class="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 hover:bg-rose-100 hover:text-rose-500 flex items-center justify-center transition-all cursor-pointer">
                    <i class="fa-solid fa-xmark text-sm"></i>
                </button>
            </div>
            <!-- Body Modal -->
            <div class="p-4 sm:p-6 overflow-y-auto flex-1 space-y-5" id="member-modal-body"></div>
        </div>`,g(),t.style.opacity="0",t.style.display="flex",requestAnimationFrame(()=>{t.style.transition="opacity 0.25s ease",t.style.opacity="1"}),!a&&typeof window.pushModalHistory=="function"&&window.pushModalHistory("member")},g=()=>{const e=(w.rewards||[]).filter(i=>i.isActive!=="false"&&i.isActive!==!1),t=h&&parseFloat(h.points)||0,a=R(t),o=e.length?e.map(i=>{const r=(parseFloat(i.stock)||0)>0,s=h&&t>=(parseFloat(i.pointsCost)||0)&&r,n=L&&L.id===i.id;return`
        <div class="flex items-center gap-3 p-3.5 rounded-2xl border ${n?"border-[var(--color-primary)] bg-[rgba(var(--color-primary-rgb),0.06)] dark:bg-[rgba(var(--color-primary-rgb),0.12)] shadow-xs":"border-slate-200 dark:border-slate-700/80 bg-slate-50/70 dark:bg-slate-800/40"} transition-all">
            ${i.img?`<img src="${c(i.img)}" class="w-14 h-14 rounded-xl object-contain bg-white p-1 border border-slate-200 dark:border-slate-700 shrink-0" onerror="this.style.display='none'" loading="lazy">`:'<div class="w-14 h-14 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-300 shrink-0"><i class="fa-solid fa-gift text-xl"></i></div>'}
            <div class="min-w-0 flex-1">
                <p class="text-xs font-bold text-slate-800 dark:text-white truncate">${c(i.name)}</p>
                <p class="text-[11px] font-black text-[var(--color-primary)] mt-0.5 flex items-center gap-1">
                    <i class="fa-solid fa-star text-[10px]"></i> ${parseFloat(i.pointsCost)||0} Poin
                </p>
                ${r?"":'<p class="text-[10px] font-bold text-rose-500 mt-0.5">Stok hadiah habis</p>'}
            </div>
            ${h?n?'<button type="button" onclick="deselectReward()" class="shrink-0 bg-rose-500 hover:bg-rose-600 text-white text-[10px] font-bold uppercase px-3 py-2 rounded-xl active:scale-95 transition-all whitespace-nowrap shadow-xs">Batal</button>':`<button type="button" ${s?"":"disabled"} onclick="selectReward(${i.id})" class="shrink-0 ${s?"primary-bg hover:opacity-90 text-white active:scale-95 shadow-xs":"bg-slate-200 dark:bg-slate-700 text-slate-400 cursor-not-allowed"} text-[10px] font-bold uppercase px-3 py-2 rounded-xl transition-all whitespace-nowrap">Pilih Hadiah</button>`:`<span class="text-[10px] font-bold text-slate-400 uppercase bg-slate-100 dark:bg-slate-800 px-2.5 py-1.5 rounded-lg">${parseFloat(i.pointsCost)||0} Poin</span>`}
        </div>`}).join(""):'<p class="text-[11px] font-bold text-slate-400 text-center py-3">Belum ada program hadiah yang tersedia.</p>';h?M("member-modal-body",`
            <!-- KARTU MEMBER DIGITAL (3D INTERAKTIF) -->
            <div>
                ${F(h)}
                
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
                    <button type="button" onclick="setCurrentMember(null); try{localStorage.removeItem('freshmart_current_member');localStorage.removeItem('freshmart_member_wa');}catch(e){} rMemberModalBody();" class="text-[10px] text-slate-400 hover:text-[var(--color-primary)] font-semibold transition-colors cursor-pointer">
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
                        ${a.perks.map(i=>`
                        <div class="flex items-center gap-1.5 text-[10px] font-semibold text-slate-700 dark:text-slate-300">
                            <i class="fa-solid fa-check text-emerald-500 text-[9px] shrink-0"></i>
                            <span class="truncate">${c(i)}</span>
                        </div>`).join("")}
                    </div>
                </div>
            </div>

            <!-- KATALOG REWARD / PENUKARAN HADIAH -->
            <div>
                <p class="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-2.5">Katalog Hadiah yang Dapat Ditukar</p>
                <div class="space-y-2.5">${o}</div>
            </div>

            ${L?`<div class="bg-[rgba(var(--color-primary-rgb),0.06)] dark:bg-[rgba(var(--color-primary-rgb),0.12)] border border-[var(--color-primary)]/30 rounded-xl p-3.5 text-[11px] font-bold text-[var(--color-primary)] flex items-center gap-2"><i class="fa-solid fa-gift text-base shrink-0"></i><span>Hadiah "<b>${c(L.name)}</b>" telah dipilih dan akan otomatis diproses saat pesanan Anda selesai di checkout.</span></div>`:""}
        `):M("member-modal-body",`
            <!-- PREVIEW KARTU CONTOH (MEMIKAT PELANGGAN) -->
            <div class="opacity-90">
                ${F({name:"NAMA ANDA",phone:"81234567890",points:0})}
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
                <div class="space-y-2.5">${o}</div>
            </div>
        `)},Se=async()=>{const e=document.getElementById("member-lookup-input"),t=document.getElementById("member-lookup-result");if(!e||!t)return;let a=e.value.replace(/\D/g,"");if(!a||a.length<9){t.className="text-xs font-bold text-rose-500 p-2.5 bg-rose-50 dark:bg-rose-900/20 rounded-xl",t.textContent="Masukkan minimal 9 digit nomor WhatsApp!",t.classList.remove("hidden");return}a.startsWith("0")?a="62"+a.substring(1):a.startsWith("62")||(a="62"+a),t.className="text-xs font-bold text-[var(--color-primary)] p-2.5 primary-bg-soft rounded-xl",t.textContent="Memuat data kartu member...",t.classList.remove("hidden");try{const o=await y.collection("freshmart").doc("cms_data").collection("customers").doc(a).get();if(o.exists){let i=o.data();if((parseFloat(i.points)||0)===0){const r=await H(a,i.name);r&&(i=r)}b.set(a,{data:i,timestamp:Date.now()}),x(i);try{localStorage.setItem("freshmart_current_member",JSON.stringify(i)),localStorage.setItem("freshmart_member_wa",a)}catch{}g(),typeof window.showToast=="function"&&window.showToast(`Selamat datang kembali, ${i.name||"Pelanggan"}! 💳`)}else{t.className="text-xs font-bold text-amber-700 dark:text-amber-300 p-3.5 bg-amber-50 dark:bg-amber-900/20 rounded-xl leading-relaxed border border-amber-200 dark:border-amber-800/40 space-y-1.5";const i=(w.store&&w.store.wa||"").replace(/\D/g,""),r=i?`https://wa.me/${i}?text=Halo%20Admin%20Toko%20Putri,%20saya%20ingin%20mendaftarkan%20nomor%20saya%20(${a})%20sebagai%20Member%20Resmi.`:"#";t.innerHTML=`
                <div class="flex items-center gap-1.5 text-amber-800 dark:text-amber-200 font-extrabold text-[11px]">
                    <i class="fa-solid fa-circle-info text-amber-500"></i>
                    <span>Nomor Belum Terdaftar sebagai Member Resmi</span>
                </div>
                <p class="text-[11px] font-medium text-slate-600 dark:text-slate-300 leading-normal">
                    Nomor <b>+${c(a)}</b> saat ini tercatat sebagai <b>Pelanggan Umum</b>. Fitur Poin Hadiah dan fasilitas pembayaran <b>Cash Tempo</b> hanya dapat digunakan setelah nomor Anda dikonfirmasi & disimpan oleh Admin Toko di database CMS.
                </p>
                ${i?`
                <div class="pt-1">
                    <a href="${r}" target="_blank" class="inline-flex items-center gap-1.5 text-[10px] font-bold text-emerald-600 dark:text-emerald-400 hover:underline">
                        <i class="fa-brands fa-whatsapp text-emerald-500"></i> Hubungi Admin untuk Pendaftaran Member
                    </a>
                </div>`:""}
            `}}catch{t.className="text-xs font-bold text-rose-500 p-2.5 bg-rose-50 dark:bg-rose-900/20 rounded-xl",t.textContent="Gagal mengecek data. Silakan periksa koneksi internet Anda."}},Te=e=>{const t=(w.rewards||[]).find(o=>o.id===e);if(!t)return;if((parseFloat(h?.points)||0)<(parseFloat(t.pointsCost)||0)){typeof window.showToast=="function"&&window.showToast("Poin Anda belum cukup untuk hadiah ini!");return}if((parseFloat(t.stock)||0)<=0){typeof window.showToast=="function"&&window.showToast("Maaf, stok hadiah ini sedang kosong!");return}C({id:t.id,name:t.name,pointsCost:parseFloat(t.pointsCost)||0}),g(),typeof window.showToast=="function"&&window.showToast(`Hadiah "${t.name}" dipilih! Lanjutkan checkout untuk menukarnya.`)},Ae=()=>{C(null),g()},te=(e=!1)=>{const t=document.getElementById("member-modal");if(!t||t.style.display==="none")return;const a=()=>{t.style.opacity="0",t.style.transition="opacity 0.25s ease",setTimeout(()=>{t.style.display="none",t.style.opacity="",t.style.transition=""},250)};typeof window.requestCloseModal=="function"?window.requestCloseModal("member",e,a):a()};window.renderRewardCatalog=ke;window.checkMemberStatus=Me;window.openMemberModal=Pe;window.rMemberModalBody=g;window.lookupMemberPoints=Se;window.selectReward=Te;window.deselectReward=Ae;window.closeMemberModal=te;window.flipMemberCard=ye;window.downloadMemberCard=ve;window.getMemberTier=R;window.formatMemberCardNumber=X;window.generateBarcodeSVG=ee;window.setCurrentMember=x;window.invalidateMemberCache=ge;window.reconcilePointsFromOrders=H;export{$e as A,U as _,le as a,u as b,f as c,y as d,ne as f,Be as l,W as p,$ as r,me as s};
