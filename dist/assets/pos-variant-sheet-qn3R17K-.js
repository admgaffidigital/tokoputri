import{e as y,I as X,a as d,v as b,B as Y,z as N,u as Z,i as m,f as tt}from"./module-print-CtFUQjWy.js";import{d as R}from"./module-pos-YktqeqTn.js";import"./vendor-firebase-core-D2OF5R23.js";import"./vendor-firebase-db-BIUZcnOd.js";let u=null,p=0,l=1;const f=t=>tt(t),et=t=>{if(t==null)return 0;typeof t=="string"&&(t=t.replace(",",".").trim());const e=parseFloat(t);return isNaN(e)?0:Math.max(0,parseFloat(e.toFixed(3)))},h=t=>{const e=parseFloat(t)||0;return parseFloat(e.toFixed(3)).toString()},at=(t,e)=>{if(!t||!t.wholesale||!t.wholesale.length)return null;const s=[...t.wholesale].sort((r,x)=>x.minQty-r.minQty);for(const r of s)if(e>=parseFloat(r.minQty))return parseFloat(r.price);return null},st=t=>{u=String(t),p=0,l=1;const e=(d.products||[]).find(o=>o&&String(o.id)===u);if(!e){b("Produk tidak ditemukan","warning");return}if(!(e.isActive!=="false"&&e.isActive!==!1)){b("Produk ini sedang tidak tersedia","warning");return}const r=d.store?.useStock===!0||d.store?.useStock==="true";if(r&&(e.variants&&e.variants.length?e.variants.filter(i=>i.isActive!==!1&&i.isActive!=="false").reduce((i,c)=>i+(parseFloat(c.stock)||0),0):parseFloat(e.stock)||0)<=0){b("Maaf, stok produk ini sedang kosong","warning");return}if(e.variants&&e.variants.length>0){const o=e.variants.findIndex(i=>{const c=i.isActive!==!1&&i.isActive!=="false",v=parseFloat(i.stock)||0;return c&&(!r||v>0)});p=o>=0?o:0}else p=0;const x=y("pos-variant-sheet"),a=y("pos-variant-sheet-box");!x||!a||(S(e),Y(x,a),typeof window.triggerHaptic=="function"&&window.triggerHaptic("light"))},W=()=>{const t=y("pos-variant-sheet"),e=y("pos-variant-sheet-box");t&&X(t,e,()=>{u=null,p=0,l=1})},S=t=>{const e=t.variants||[],s=e.length>0,r=d.store?.useStock===!0||d.store?.useStock==="true",a=s?e[p]:null,o=s?parseFloat(a?.price)||parseFloat(t.price)||0:parseFloat(t.price)||0,i=a&&a.hpp!=null?parseFloat(a.hpp)||0:parseFloat(t.hpp)||0,c=s?parseFloat(a?.stock)||0:parseFloat(t.stock)||0,v=a?a.isActive!==!1&&a.isActive!=="false":!0,$=r&&c<=0;let w="Tersedia";v?r&&(w=$?"Stok Habis":`Stok: ${h(c)}`):w="Tidak Tersedia";const Q=a?.img||t.img||"",C=Q?N(Q,"w200-rw"):"",T=Z(t,{size:"thumb"}),z=C?`<img src="${m(C)}" alt="${m(t.name)}" onerror="this.onerror=null;this.style.display='none';if(this.nextElementSibling)this.nextElementSibling.style.display='flex';" class="w-full h-full object-cover">
           <div class="w-full h-full" style="display:none">${T}</div>`:T,D=s?e.map((n,g)=>{const P=parseFloat(n.price)||parseFloat(t.price)||0,I=n.hpp!=null?parseFloat(n.hpp)||0:parseFloat(t.hpp)||0,A=parseFloat(n.stock)||0,q=n.isActive!==!1&&n.isActive!=="false",V=r&&A<=0,F=!q||V,K=g===p,L=K?"border-[var(--color-primary)] bg-[rgba(var(--color-primary-rgb),0.08)] text-[var(--color-primary)]":"border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 bg-white dark:bg-slate-800",U=F?"opacity-40 cursor-not-allowed":"cursor-pointer hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]";let O="";q?V&&(O=" (Habis)"):O=" (Nonaktif)";const E=(n.colorCode||n.color||"").trim();let H="";return E?H=`<span class="w-3.5 h-3.5 rounded-full border border-slate-300 dark:border-slate-600 shrink-0 shadow-2xs" style="background:${m(E)}"></span>`:n.img&&n.img.trim()&&(H=`<img src="${N(n.img,"w100-rw")}" alt="${m(n.name)}" class="w-6 h-6 rounded-md object-cover border border-slate-200 dark:border-slate-700 shrink-0">`),`<button
            onclick="${F?"":`window.selectPOSVariant(${g})`}"
            class="flex items-center gap-2 px-3 py-1.5 rounded-xl border text-[11px] font-bold transition-all ${L} ${U}"
            ${F?"disabled":""}>
            ${H}
            <div class="flex flex-col items-start min-w-0">
                <span class="truncate max-w-[120px]">${m(n.name)}${O}</span>
                <div class="flex items-center gap-1.5 text-[9px] flex-wrap">
                    <span class="text-slate-500 font-bold">${f(P)}</span>
                    ${R()&&I>0?`<span class="text-amber-600 dark:text-amber-400 font-black">HPP: ${f(I)}</span>`:""}
                    ${r&&!V?`<span class="font-extrabold ${A<=5?"text-rose-500":"text-slate-400 dark:text-slate-400"}"><i class="fa-solid fa-box text-[7px] mr-0.5"></i>Stok ${h(A)}</span>`:""}
                </div>
            </div>
            ${K?'<i class="fa-solid fa-check text-[8px] shrink-0 ml-1"></i>':""}
        </button>`}).join(""):"",G=t.poTime?`<span class="bg-amber-500 text-white px-2 py-0.5 rounded-full text-[8px] font-bold flex items-center gap-1 whitespace-nowrap uppercase tracking-wider shadow-sm"><i class="fa-solid fa-clock"></i> PO ${m(t.poTime)}</span>`:"";let j="";!s&&t.wholesale&&t.wholesale.length>0&&(j=`
        <div class="mt-2 p-2.5 rounded-xl bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800">
            <p class="text-[9px] font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400 mb-1.5">
                <i class="fa-solid fa-tags mr-1"></i>Harga Grosir
            </p>
            <div class="space-y-0.5">
                ${[...t.wholesale].sort((g,P)=>g.minQty-P.minQty).map(g=>`
                <div class="flex items-center justify-between text-[10px]">
                    <span class="text-amber-700 dark:text-amber-400 font-semibold">≥ ${parseFloat(g.minQty)} pcs</span>
                    <span class="font-black text-amber-800 dark:text-amber-300">${f(parseFloat(g.price))}/pcs</span>
                </div>`).join("")}
            </div>
        </div>`);const k=s?null:at(t,l),M=(k!==null?k:o)*l,B=k!==null?`
        <div class="flex items-center gap-2 flex-wrap">
            <span class="text-base font-black" style="color:var(--color-primary)">${f(k)}</span>
            <span class="text-xs text-slate-400 line-through">${f(o)}</span>
            <span class="px-1.5 py-0.5 rounded text-[8px] font-black uppercase bg-amber-500 text-white">GROSIR</span>
        </div>`:`<span class="text-base font-black" style="color:var(--color-primary)">${f(o)}</span>`,J=`
    <div class="p-4 sm:p-5 pb-3 border-b border-slate-100 dark:border-slate-800/60 flex items-start gap-3.5">
        <div class="w-20 h-20 min-w-[80px] rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 flex items-center justify-center p-1.5 shadow-xs shrink-0">
            ${z}
        </div>
        <div class="flex-1 min-w-0 pr-6">
            <h4 class="font-extrabold text-sm text-slate-900 dark:text-white line-clamp-2 leading-snug break-words flex items-center gap-1.5 flex-wrap">
                <span>${m(t.name)}</span>
                ${G}
            </h4>
            <div class="mt-1 flex items-baseline gap-2 flex-wrap">
                ${B}
                <span class="inline-flex items-center gap-1 text-[10px] font-bold ${$?"text-rose-600 dark:text-rose-400 bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800":"text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-700/60 border border-slate-200 dark:border-slate-600"} px-2 py-0.5 rounded-md shadow-2xs whitespace-nowrap"><i class="fa-solid fa-box text-[8px]"></i>${w}</span>
                ${R()&&i>0?`<span class="inline-flex items-center gap-1 text-[10px] font-black text-amber-950 bg-amber-100 dark:bg-amber-950/60 dark:text-amber-300 px-2 py-0.5 rounded-md border border-amber-300/80 dark:border-amber-700 shadow-2xs whitespace-nowrap"><i class="fa-solid fa-coins text-[8px] text-amber-600 dark:text-amber-400"></i>HPP: ${f(i)}</span>`:""}
            </div>
            ${s?`<p class="text-[11px] font-bold mt-0.5 truncate" style="color:var(--color-primary)">Varian: ${m(e[p]?.name||"-")}</p>`:""}
        </div>
    </div>
    <div class="p-4 sm:p-5 space-y-4">
        ${s?`
        <div>
            <span class="text-[10px] font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 flex items-center gap-1.5 mb-2.5">
                <i class="fa-solid fa-sliders text-[var(--color-primary)]"></i> Pilih Varian
            </span>
            <div class="flex flex-wrap gap-2" id="pos-variant-chips">
                ${D}
            </div>
        </div>`:j}

        <div class="flex items-center justify-between pt-2 border-t border-slate-100 dark:border-slate-800/60">
            <div>
                <span class="text-xs font-bold text-slate-500 dark:text-slate-400 block">Jumlah</span>
                ${k!==null?'<span class="text-[9px] text-amber-600 font-semibold">Harga grosir aktif!</span>':""}
            </div>
            <div class="flex h-10 items-center overflow-hidden rounded-xl border border-slate-200 bg-slate-50 shadow-xs dark:border-slate-700 dark:bg-slate-900">
                <button class="flex h-full w-10 items-center justify-center font-bold text-slate-500 transition-colors hover:bg-slate-200 dark:hover:bg-slate-800 active:scale-90 cursor-pointer"
                    onclick="window.updatePOSVariantQty(-1)">
                    <i class="fa-solid fa-minus text-xs"></i>
                </button>
                <input id="pos-variant-qty-input" type="number" step="any" min="0.01" value="${h(l)}" onchange="window.setPOSVariantQty(this.value)"
                    class="w-14 border-x border-slate-200 bg-transparent text-center text-sm font-extrabold focus:outline-none dark:border-slate-700 dark:text-white px-1">
                <button class="flex h-full w-10 items-center justify-center font-bold text-slate-500 transition-colors hover:bg-[rgba(var(--color-primary-rgb),0.1)] hover:text-[var(--color-primary)] active:scale-90 cursor-pointer"
                    onclick="window.updatePOSVariantQty(1)">
                    <i class="fa-solid fa-plus text-xs"></i>
                </button>
            </div>
        </div>
    </div>
    <div class="p-4 border-t border-slate-100 dark:border-slate-800/80 bg-slate-50/80 dark:bg-slate-900/60">
        <div class="flex items-center justify-between mb-1">
            <span class="text-xs font-bold text-slate-500">Subtotal</span>
            <span class="text-sm font-black" style="color:var(--color-primary)">${f(M)}</span>
        </div>
        ${i>0?`
        <div class="flex items-center justify-between mb-3 text-[10px]">
            <span class="text-slate-400 font-semibold flex items-center gap-1"><i class="fa-solid fa-coins text-amber-500"></i> Total Modal (HPP): <b class="text-amber-600 dark:text-amber-400 font-bold">${f(i*l)}</b></span>
            <span class="font-bold text-emerald-600 dark:text-emerald-400">Untung: +${f(Math.max(0,M-i*l))}</span>
        </div>`:'<div class="mb-2"></div>'}
        <button onclick="window.confirmPOSVariantAdd()"
            class="w-full h-12 rounded-2xl text-white font-black text-sm flex items-center justify-center gap-2 active:scale-95 transition-all shadow-md cursor-pointer"
            style="background:var(--color-primary)">
            <i class="fa-solid fa-cart-plus text-base"></i>
            Tambah ke Keranjang Kasir
        </button>
    </div>`,_=y("pos-variant-sheet-content");_&&(_.innerHTML=J)},rt=t=>{p=t;const e=(d.products||[]).find(s=>s&&String(s.id)===u);e&&S(e),typeof window.triggerHaptic=="function"&&window.triggerHaptic("light")},it=t=>{let e=parseFloat((l+t).toFixed(3));l=Math.max(.01,e);const s=(d.products||[]).find(r=>r&&String(r.id)===u);s&&S(s),typeof window.triggerHaptic=="function"&&window.triggerHaptic("selection")},ot=t=>{let e=et(t);e<=0&&(e=.01),l=e;const s=(d.products||[]).find(r=>r&&String(r.id)===u);s&&S(s)},nt=()=>{if(!u)return;const t=(d.products||[]).find(a=>a&&String(a.id)===u);if(!t)return;if(!(t.isActive!=="false"&&t.isActive!==!1)){b("Produk ini sedang tidak tersedia","warning");return}const s=t.variants&&t.variants.length>0,r=d.store?.useStock===!0||d.store?.useStock==="true",x=typeof window.getPOSCart=="function"?window.getPOSCart():window.__getPOSCart?window.__getPOSCart():[];if(s){const a=t.variants[p];if(!a){b("Pilih varian terlebih dahulu","warning");return}if(!(a.isActive!==!1&&a.isActive!=="false")){b("Varian ini sedang tidak tersedia","warning");return}if(r){const i=parseFloat(a.stock)||0;if(i<=0){b(`Maaf, stok varian "${a.name}" sedang kosong!`,"warning");return}const c=`${t.id}__v${p}`,v=(x||[]).find(w=>w.cartKey===c);if((v&&parseFloat(v.qty)||0)+l>i){b(`Stok varian "${a.name}" tidak cukup! Sisa: ${h(i)}`,"warning");return}}if(typeof window.addToCartPOSWithVariant=="function"&&!window.addToCartPOSWithVariant(t.id,a.name,parseFloat(a.price)||parseFloat(t.price)||0,p,l))return}else{if(r){const a=parseFloat(t.stock)||0;if(a<=0){b(`Maaf, stok "${t.name}" sedang kosong!`,"warning");return}const o=(x||[]).find(c=>String(c.id)===String(t.id)&&!c.isVariant);if((o&&parseFloat(o.qty)||0)+l>a){b(`Stok "${t.name}" tidak cukup! Sisa: ${h(a)}`,"warning");return}}if(typeof window.posAddToCartQty=="function"&&!window.posAddToCartQty(t.id,l))return}W(),typeof window.triggerHaptic=="function"&&window.triggerHaptic("success")};window.openPOSVariantSheet=st;window.closePOSVariantSheet=W;window.selectPOSVariant=rt;window.updatePOSVariantQty=it;window.setPOSVariantQty=ot;window.confirmPOSVariantAdd=nt;export{W as closePOSVariantSheet,nt as confirmPOSVariantAdd,st as openPOSVariantSheet,rt as selectPOSVariant,ot as setPOSVariantQty,it as updatePOSVariantQty};
