import{a as u,k,e as V,o as nt,v as lt,ab as ct,aq as L,aa as dt,i as h,aQ as _,f as pt}from"./module-print-E_HtlGZ3.js";import"./module-pos-BVj6x9nJ.js";import"./vendor-firebase-core-D2OF5R23.js";import"./vendor-firebase-db-BIUZcnOd.js";import"./module-member-P3CVtlvo.js";import"./module-faq-BOfvqe00.js";let v=null,m=0,c=1;const x=t=>pt(t),ft=t=>{if(t==null)return 0;typeof t=="string"&&(t=t.replace(",",".").trim());const e=parseFloat(t);return isNaN(e)?0:Math.max(0,parseFloat(e.toFixed(3)))},P=t=>{const e=parseFloat(t)||0;return parseFloat(e.toFixed(3)).toString()},ut=(t,e)=>{if(!t||!t.wholesale||!t.wholesale.length)return null;const a=[...t.wholesale].sort((s,p)=>p.minQty-s.minQty);for(const s of a)if(e>=parseFloat(s.minQty))return parseFloat(s.price);return null},mt=t=>{v=String(t),m=0,c=1;const e=(u.products||[]).find(d=>d&&String(d.id)===v);if(!e){k("Produk tidak ditemukan","warning");return}if(!(e.isActive!=="false"&&e.isActive!==!1)){k("Produk ini sedang tidak tersedia","warning");return}const s=!!(e.poTime&&String(e.poTime).trim()),p=typeof window.computeTotalProductStock=="function"?window.computeTotalProductStock(e):null;if(p&&p.isManaged&&!s&&(p.isOutOfStock||p.totalStock<=0)){k("Maaf, stok produk ini sedang kosong atau habis","warning");return}if(e.variants&&e.variants.length>0){const d=u.store?.useStock===!0||u.store?.useStock==="true",n=e.variants.findIndex(l=>{const f=l.isActive!==!1&&l.isActive!=="false",w=l.stock!=null&&l.stock!==""?l.stock:l.stok!=null&&l.stok!==""?l.stok:null,b=w!=null&&!isNaN(parseFloat(w)),S=b?parseFloat(w):0;return f&&(s||!(d||b)||S>0)});m=n>=0?n:0}else m=0;const o=V("pos-variant-sheet"),r=V("pos-variant-sheet-box");!o||!r||(A(e),typeof window.pushModalHistory=="function"&&window.pushModalHistory("posVariantSheet"),nt(o,r),typeof window.triggerHaptic=="function"&&window.triggerHaptic("light"))},X=(t=!1)=>{const e=()=>{const a=V("pos-variant-sheet"),s=V("pos-variant-sheet-box");a&&lt(a,s,()=>{v=null,m=0,c=1})};typeof window.requestCloseModal=="function"?window.requestCloseModal("posVariantSheet",t,e):e()},A=t=>{const e=t.variants||[],a=e.length>0,s=u.store?.useStock===!0||u.store?.useStock==="true",p=!!(t.poTime&&String(t.poTime).trim()),r=a?e[m]:null,d=a?parseFloat(r?.price)||parseFloat(t.price)||0:parseFloat(t.price)||0,n=r&&r.hpp!=null?parseFloat(r.hpp)||0:parseFloat(t.hpp)||0,l=a?r?.stock!=null&&r?.stock!==""?r.stock:r?.stok!=null&&r?.stok!==""?r.stok:null:t?.stock!=null&&t?.stock!==""?t.stock:t?.stok!=null&&t?.stok!==""?t.stok:null,f=l!=null&&!isNaN(parseFloat(l)),w=f?parseFloat(l):0,b=r?r.isActive!==!1&&r.isActive!=="false":!0,S=s||f,F=!p&&S&&w<=0;let y="Tersedia";b?S&&(y=F?"Stok Habis":`Stok: ${P(w)}`):y="Tidak Tersedia";const I=r?.img||t.img||"",q=ct(I)?"":I,B=q?L(q,"w200-rw"):"",K=dt(t,{size:"thumb"}),Y=B?`<img src="${h(B)}" alt="${h(t.name)}" onerror="this.onerror=null;this.style.display='none';if(this.nextElementSibling)this.nextElementSibling.style.display='flex';" class="w-full h-full object-cover">
           <div class="w-full h-full" style="display:none">${K}</div>`:K,Z=a?e.map((i,g)=>{const O=parseFloat(i.price)||parseFloat(t.price)||0,z=i.hpp!=null?parseFloat(i.hpp)||0:parseFloat(t.hpp)||0,H=i.stock!=null&&i.stock!==""?i.stock:i.stok!=null&&i.stok!==""?i.stok:null,T=H!=null&&!isNaN(parseFloat(H)),M=T?parseFloat(H):0,G=i.isActive!==!1&&i.isActive!=="false",Q=!p&&(s||T)&&M<=0,C=!G||Q,U=g===m,ot=U?"border-[var(--color-primary)] bg-[rgba(var(--color-primary-rgb),0.08)] text-[var(--color-primary)]":"border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 bg-white dark:bg-slate-800",rt=C?"opacity-40 cursor-not-allowed":"cursor-pointer hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]";let j="";G?Q&&(j=" (Habis)"):j=" (Nonaktif)";const J=(i.colorCode||i.color||"").trim();let N="";J?N=`<span class="pos-paint-chip" style="background:${h(J)}"><span class="paint-sheen-overlay"></span></span>`:i.img&&i.img.trim()&&(N=`<img src="${L(i.img,"w100-rw")}" alt="${h(i.name)}" class="w-6 h-6 rounded-md object-cover border border-slate-200 dark:border-slate-700 shrink-0">`);const it=(s||T)&&!Q;return`<button
            onclick="${C?"":`window.selectPOSVariant(${g})`}"
            class="flex items-center gap-2 px-3 py-1.5 rounded-xl border text-[11px] font-bold transition-all ${ot} ${rt}"
            ${C?"disabled":""}>
            ${N}
            <div class="flex flex-col items-start min-w-0 flex-1">
                <span class="font-bold text-slate-800 dark:text-slate-100 truncate max-w-[280px] sm:max-w-md">${h(i.name)}${j}</span>
                <div class="flex items-center gap-1.5 text-[9px] flex-wrap">
                    <span class="text-slate-500 font-bold">${x(O)}</span>
                    ${_()&&z>0?`<span class="text-amber-600 dark:text-amber-400 font-black">HPP: ${x(z)}</span>`:""}
                    ${it?`<span class="font-extrabold ${M<=5?"text-rose-500":"text-slate-400 dark:text-slate-400"}"><i class="fa-solid fa-box text-[7px] mr-0.5"></i>Stok ${P(M)}</span>`:""}
                </div>
            </div>
            ${U?'<i class="fa-solid fa-check text-[8px] shrink-0 ml-1"></i>':""}
        </button>`}).join(""):"",tt=t.poTime?`<span class="bg-amber-500 text-white px-2 py-0.5 rounded-full text-[8px] font-bold flex items-center gap-1 whitespace-nowrap uppercase tracking-wider shadow-sm"><i class="fa-solid fa-clock"></i> PO ${h(t.poTime)}</span>`:"",D=t.variants&&t.variants.length?t.variants.reduce((i,g)=>i+(parseFloat(g.totalSold)||0),0):parseFloat(t.totalSold)||0,et=D>0?`<span class="bg-slate-100 text-slate-600 dark:bg-slate-700/60 dark:text-slate-300 px-2 py-0.5 rounded-full text-[8px] font-bold flex items-center gap-1 whitespace-nowrap uppercase tracking-wider"><i class="fa-solid fa-fire text-amber-500 text-[7px]"></i> ${D} Terjual</span>`:"";let E="";!a&&t.wholesale&&t.wholesale.length>0&&(E=`
        <div class="mt-2 p-2.5 rounded-xl bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800">
            <p class="text-[9px] font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400 mb-1.5">
                <i class="fa-solid fa-tags mr-1"></i>Harga Grosir
            </p>
            <div class="space-y-0.5">
                ${[...t.wholesale].sort((g,O)=>g.minQty-O.minQty).map(g=>`
                <div class="flex items-center justify-between text-[10px]">
                    <span class="text-amber-700 dark:text-amber-400 font-semibold">≥ ${parseFloat(g.minQty)} pcs</span>
                    <span class="font-black text-amber-800 dark:text-amber-300">${x(parseFloat(g.price))}/pcs</span>
                </div>`).join("")}
            </div>
        </div>`);const $=a?null:ut(t,c),R=($!==null?$:d)*c,at=$!==null?`
        <div class="flex items-center gap-2 flex-wrap">
            <span class="text-base font-black" style="color:var(--color-primary)">${x($)}</span>
            <span class="text-xs text-slate-400 line-through">${x(d)}</span>
            <span class="px-1.5 py-0.5 rounded text-[8px] font-black uppercase bg-amber-500 text-white">GROSIR</span>
        </div>`:`<span class="text-base font-black" style="color:var(--color-primary)">${x(d)}</span>`,st=`
    <div class="p-4 sm:p-5 pb-3 border-b border-slate-100 dark:border-slate-800/60 flex items-start gap-3.5">
        <div class="w-20 h-20 min-w-[80px] rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 flex items-center justify-center p-1.5 shadow-xs shrink-0">
            ${Y}
        </div>
        <div class="flex-1 min-w-0 pr-6">
            <h4 class="font-extrabold text-sm text-slate-900 dark:text-white line-clamp-2 leading-snug break-words flex items-center gap-1.5 flex-wrap">
                <span>${h(t.name)}</span>
                ${tt}
                ${et}
            </h4>
            <div class="mt-1 flex items-baseline gap-2 flex-wrap">
                ${at}
                <span class="inline-flex items-center gap-1 text-[10px] font-bold ${F?"text-rose-600 dark:text-rose-400 bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800":"text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-700/60 border border-slate-200 dark:border-slate-600"} px-2 py-0.5 rounded-md shadow-2xs whitespace-nowrap"><i class="fa-solid fa-box text-[8px]"></i>${y}</span>
                ${_()&&n>0?`<span class="inline-flex items-center gap-1 text-[10px] font-black text-amber-950 bg-amber-100 dark:bg-amber-950/60 dark:text-amber-300 px-2 py-0.5 rounded-md border border-amber-300/80 dark:border-amber-700 shadow-2xs whitespace-nowrap"><i class="fa-solid fa-coins text-[8px] text-amber-600 dark:text-amber-400"></i>HPP: ${x(n)}</span>`:""}
            </div>
            ${a?`<p class="text-[11px] font-bold mt-0.5 truncate" style="color:var(--color-primary)">Varian: ${h(e[m]?.name||"-")}</p>`:""}
        </div>
    </div>
    <div class="p-4 sm:p-5 space-y-4">
        ${a?`
        <div>
            <span class="text-[10px] font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 flex items-center gap-1.5 mb-2.5">
                <i class="fa-solid fa-sliders text-[var(--color-primary)]"></i> Pilih Varian
            </span>
            <div class="flex flex-wrap gap-2" id="pos-variant-chips">
                ${Z}
            </div>
        </div>`:E}

        <div class="flex items-center justify-between pt-2 border-t border-slate-100 dark:border-slate-800/60">
            <div>
                <span class="text-xs font-bold text-slate-500 dark:text-slate-400 block">Jumlah</span>
                ${$!==null?'<span class="text-[9px] text-amber-600 font-semibold">Harga grosir aktif!</span>':""}
            </div>
            <div class="pos-stepper-control flex h-10 items-center overflow-hidden rounded-xl border border-slate-200/90 dark:border-slate-700/80 bg-white dark:bg-slate-900 shadow-xs">
                <button class="flex h-full w-10 items-center justify-center font-bold text-slate-700 dark:text-slate-300 transition-colors hover:bg-slate-100 dark:hover:bg-slate-800 active:scale-90 cursor-pointer"
                    onclick="window.updatePOSVariantQty(-1)">
                    <i class="fa-solid fa-minus text-xs"></i>
                </button>
                <input id="pos-variant-qty-input" type="number" step="any" min="0.01" value="${P(c)}" onchange="window.setPOSVariantQty(this.value)"
                    class="stepper-input w-14 border-none bg-transparent text-center text-sm font-extrabold focus:outline-none dark:text-white px-1">
                <button class="flex h-full w-10 items-center justify-center font-bold text-slate-700 dark:text-slate-300 transition-colors hover:bg-slate-100 dark:hover:bg-slate-800 active:scale-90 cursor-pointer"
                    onclick="window.updatePOSVariantQty(1)">
                    <i class="fa-solid fa-plus text-xs"></i>
                </button>
            </div>
        </div>
    </div>
    <div class="sticky bottom-0 z-10 p-3.5 sm:p-4 border-t border-slate-100 dark:border-slate-800/80 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xs pb-[calc(1rem+env(safe-area-inset-bottom))] shadow-[0_-4px_14px_rgba(0,0,0,0.06)]">
        <div class="flex items-center justify-between mb-1">
            <span class="text-xs font-bold text-slate-500">Subtotal</span>
            <span class="text-sm font-black" style="color:var(--color-primary)">${x(R)}</span>
        </div>
        ${_()&&n>0?`
        <div class="flex items-center justify-between mb-3 text-[10px]">
            <span class="text-slate-400 font-semibold flex items-center gap-1"><i class="fa-solid fa-coins text-amber-500"></i> Total Modal (HPP): <b class="text-amber-600 dark:text-amber-400 font-bold">${x(n*c)}</b></span>
            <span class="font-bold text-emerald-600 dark:text-emerald-400">Untung: +${x(Math.max(0,R-n*c))}</span>
        </div>`:'<div class="mb-2"></div>'}
        <button onclick="window.confirmPOSVariantAdd()"
            class="w-full h-12 rounded-2xl text-white font-black text-sm flex items-center justify-center gap-2 active:scale-95 transition-all shadow-md cursor-pointer"
            style="background:var(--color-primary)">
            <i class="fa-solid fa-cart-plus text-base"></i>
            Tambah ke Keranjang Kasir
        </button>
    </div>`,W=V("pos-variant-sheet-content");W&&(W.innerHTML=st)},bt=t=>{m=t;const e=(u.products||[]).find(a=>a&&String(a.id)===v);e&&A(e),typeof window.triggerHaptic=="function"&&window.triggerHaptic("light")},xt=t=>{let e=parseFloat((c+t).toFixed(3));c=Math.max(.01,e);const a=(u.products||[]).find(s=>s&&String(s.id)===v);a&&A(a),typeof window.triggerHaptic=="function"&&window.triggerHaptic("selection")},kt=t=>{let e=ft(t);e<=0&&(e=.01),c=e;const a=(u.products||[]).find(s=>s&&String(s.id)===v);a&&A(a)},gt=()=>{if(!v)return;const t=(u.products||[]).find(o=>o&&String(o.id)===v);if(!t)return;if(!(t.isActive!=="false"&&t.isActive!==!1)){k("Produk ini sedang tidak tersedia","warning");return}const a=t.variants&&t.variants.length>0,s=u.store?.useStock===!0||u.store?.useStock==="true",p=typeof window.getPOSCart=="function"?window.getPOSCart():window.__getPOSCart?window.__getPOSCart():[];if(a){const o=t.variants[m];if(!o){k("Pilih varian terlebih dahulu","warning");return}if(!(o.isActive!==!1&&o.isActive!=="false")){k("Varian ini sedang tidak tersedia","warning");return}const d=!!(t.poTime&&String(t.poTime).trim()),n=o.stock!=null&&o.stock!==""?o.stock:o.stok!=null&&o.stok!==""?o.stok:null,l=n!=null&&!isNaN(parseFloat(n)),f=l?parseFloat(n):0;if((s||l)&&!d){if(f<=0){k(`Maaf, stok varian "${o.name}" sedang kosong atau habis!`,"warning");return}const b=`${t.id}__v${m}`,S=(p||[]).find(y=>y.cartKey===b);if((S&&parseFloat(S.qty)||0)+c>f){k(`Stok varian "${o.name}" tidak cukup! Sisa: ${P(f)}`,"warning");return}}if(typeof window.addToCartPOSWithVariant=="function"&&!window.addToCartPOSWithVariant(t.id,o.name,parseFloat(o.price)||parseFloat(t.price)||0,m,c))return}else{const o=!!(t.poTime&&String(t.poTime).trim()),r=t.stock!=null&&t.stock!==""?t.stock:t.stok!=null&&t.stok!==""?t.stok:null,d=r!=null&&!isNaN(parseFloat(r)),n=d?parseFloat(r):0;if((s||d)&&!o){if(n<=0){k(`Maaf, stok "${t.name}" sedang kosong atau habis!`,"warning");return}const f=(p||[]).find(b=>String(b.id)===String(t.id)&&!b.isVariant);if((f&&parseFloat(f.qty)||0)+c>n){k(`Stok "${t.name}" tidak cukup! Sisa: ${P(n)}`,"warning");return}}if(typeof window.posAddToCartQty=="function"&&!window.posAddToCartQty(t.id,c))return}X(),typeof window.triggerHaptic=="function"&&window.triggerHaptic("success")};window.openPOSVariantSheet=mt;window.closePOSVariantSheet=X;window.selectPOSVariant=bt;window.updatePOSVariantQty=xt;window.setPOSVariantQty=kt;window.confirmPOSVariantAdd=gt;export{X as closePOSVariantSheet,gt as confirmPOSVariantAdd,mt as openPOSVariantSheet,bt as selectPOSVariant,kt as setPOSVariantQty,xt as updatePOSVariantQty};
