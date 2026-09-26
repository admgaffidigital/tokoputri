import{e as k,a as l,t as p,x as R,i as v,f as W}from"./module-print-B6xAfF9T.js";let b=null,c=0,n=1;const w=t=>W(t),G=t=>{if(t==null)return 0;typeof t=="string"&&(t=t.replace(",",".").trim());const e=parseFloat(t);return isNaN(e)?0:Math.max(0,parseFloat(e.toFixed(3)))},S=t=>{const e=parseFloat(t)||0;return parseFloat(e.toFixed(3)).toString()},E=(t,e)=>{if(!t||!t.wholesale||!t.wholesale.length)return null;const s=[...t.wholesale].sort((r,f)=>f.minQty-r.minQty);for(const r of s)if(e>=parseFloat(r.minQty))return parseFloat(r.price);return null},J=t=>{b=String(t),c=0,n=1;const e=(l.products||[]).find(o=>o&&String(o.id)===b);if(!e){p("Produk tidak ditemukan","warning");return}if(!(e.isActive!=="false"&&e.isActive!==!1)){p("Produk ini sedang tidak tersedia","warning");return}const r=l.store?.useStock===!0||l.store?.useStock==="true";if(r&&(e.variants&&e.variants.length?e.variants.filter(i=>i.isActive!==!1&&i.isActive!=="false").reduce((i,d)=>i+(parseFloat(d.stock)||0),0):parseFloat(e.stock)||0)<=0){p("Maaf, stok produk ini sedang kosong","warning");return}if(e.variants&&e.variants.length>0){const o=e.variants.findIndex(i=>{const d=i.isActive!==!1&&i.isActive!=="false",g=parseFloat(i.stock)||0;return d&&(!r||g>0)});c=o>=0?o:0}else c=0;const f=k("pos-variant-sheet"),a=k("pos-variant-sheet-box");!f||!a||($(e),f.classList.remove("hidden"),setTimeout(()=>{f.classList.remove("opacity-0"),a&&a.classList.remove("translate-y-full")},10),typeof window.triggerHaptic=="function"&&window.triggerHaptic("light"))},T=()=>{const t=k("pos-variant-sheet"),e=k("pos-variant-sheet-box");t&&t.classList.add("opacity-0"),e&&e.classList.add("translate-y-full"),setTimeout(()=>{t&&t.classList.add("hidden"),b=null,c=0,n=1},300)},$=t=>{const e=t.variants||[],s=e.length>0,r=l.store?.useStock===!0||l.store?.useStock==="true",a=s?e[c]:null,o=s?parseFloat(a?.price)||parseFloat(t.price)||0:parseFloat(t.price)||0,i=s?parseFloat(a?.stock)||0:parseFloat(t.stock)||0,d=a?a.isActive!==!1&&a.isActive!=="false":!0,g=r&&i<=0;let h="Tersedia";d?r&&(h=g?"Stok Habis":`Stok: ${S(i)}`):h="Tidak Tersedia";const y=t.img?R(t.img,"w200-rw"):"",j=y?`<img src="${v(y)}" alt="${v(t.name)}" class="w-full h-full object-cover">`:'<i class="fa-solid fa-box text-slate-300 text-2xl"></i>',_=s?e.map((u,x)=>{parseFloat(u.price)||parseFloat(t.price);const P=parseFloat(u.stock)||0,Q=u.isActive!==!1&&u.isActive!=="false",H=r&&P<=0,A=!Q||H,C=x===c,K=C?"border-[var(--color-primary)] bg-[rgba(var(--color-primary-rgb),0.08)] text-[var(--color-primary)]":"border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 bg-white dark:bg-slate-800",D=A?"opacity-40 cursor-not-allowed":"cursor-pointer hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]";let V="";Q?H&&(V=" (Habis)"):V=" (Nonaktif)";const N=u.color?`<span class="w-3 h-3 rounded-full border border-slate-200 dark:border-slate-600 shrink-0" style="background:${v(u.color)}"></span>`:"";return`<button
            onclick="${A?"":`window.selectPOSVariant(${x})`}"
            class="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border text-[11px] font-bold transition-all ${K} ${D}"
            ${A?"disabled":""}>
            ${N}
            <span class="truncate max-w-[100px]">${v(u.name)}${V}</span>
            ${C?'<i class="fa-solid fa-check text-[8px] shrink-0"></i>':""}
        </button>`}).join(""):"",L=t.poTime?`<span class="bg-amber-500 text-white px-2 py-0.5 rounded-full text-[8px] font-bold flex items-center gap-1 whitespace-nowrap uppercase tracking-wider shadow-sm"><i class="fa-solid fa-clock"></i> PO ${v(t.poTime)}</span>`:"";let O="";!s&&t.wholesale&&t.wholesale.length>0&&(O=`
        <div class="mt-2 p-2.5 rounded-xl bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800">
            <p class="text-[9px] font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400 mb-1.5">
                <i class="fa-solid fa-tags mr-1"></i>Harga Grosir
            </p>
            <div class="space-y-0.5">
                ${[...t.wholesale].sort((x,P)=>x.minQty-P.minQty).map(x=>`
                <div class="flex items-center justify-between text-[10px]">
                    <span class="text-amber-700 dark:text-amber-400 font-semibold">≥ ${parseFloat(x.minQty)} pcs</span>
                    <span class="font-black text-amber-800 dark:text-amber-300">${w(parseFloat(x.price))}/pcs</span>
                </div>`).join("")}
            </div>
        </div>`);const m=s?null:E(t,n),M=(m!==null?m:o)*n,q=m!==null?`
        <div class="flex items-center gap-2 flex-wrap">
            <span class="text-base font-black" style="color:var(--color-primary)">${w(m)}</span>
            <span class="text-xs text-slate-400 line-through">${w(o)}</span>
            <span class="px-1.5 py-0.5 rounded text-[8px] font-black uppercase bg-amber-500 text-white">GROSIR</span>
        </div>`:`<span class="text-base font-black" style="color:var(--color-primary)">${w(o)}</span>`,I=`
    <div class="p-4 sm:p-5 pb-3 border-b border-slate-100 dark:border-slate-800/60 flex items-start gap-3.5">
        <div class="w-20 h-20 min-w-[80px] rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 flex items-center justify-center p-1.5 shadow-xs shrink-0">
            ${j}
        <div class="flex-1 min-w-0 pr-6">
            <h4 class="font-extrabold text-sm text-slate-900 dark:text-white line-clamp-2 leading-snug break-words flex items-center gap-1.5 flex-wrap">
                <span>${v(t.name)}</span>
                ${L}
            </h4>
            <div class="mt-1 flex items-baseline gap-2 flex-wrap">
                ${q}
                <span class="text-[10px] font-bold text-slate-400">${h}</span>
            </div>
            ${s?`<p class="text-[11px] font-bold mt-0.5 truncate" style="color:var(--color-primary)">Varian: ${v(e[c]?.name||"-")}</p>`:""}
        </div>
    </div>
    <div class="p-4 sm:p-5 space-y-4">
        ${s?`
        <div>
            <span class="text-[10px] font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 flex items-center gap-1.5 mb-2.5">
                <i class="fa-solid fa-sliders text-[var(--color-primary)]"></i> Pilih Varian
            </span>
            <div class="flex flex-wrap gap-2" id="pos-variant-chips">
                ${_}
            </div>
        </div>`:O}

        <div class="flex items-center justify-between pt-2 border-t border-slate-100 dark:border-slate-800/60">
            <div>
                <span class="text-xs font-bold text-slate-500 dark:text-slate-400 block">Jumlah</span>
                ${m!==null?'<span class="text-[9px] text-amber-600 font-semibold">Harga grosir aktif!</span>':""}
            </div>
            <div class="flex h-10 items-center overflow-hidden rounded-xl border border-slate-200 bg-slate-50 shadow-xs dark:border-slate-700 dark:bg-slate-900">
                <button class="flex h-full w-10 items-center justify-center font-bold text-slate-500 transition-colors hover:bg-slate-200 dark:hover:bg-slate-800 active:scale-90 cursor-pointer"
                    onclick="window.updatePOSVariantQty(-1)">
                    <i class="fa-solid fa-minus text-xs"></i>
                </button>
                <input id="pos-variant-qty-input" type="number" step="any" min="0.01" value="${S(n)}" onchange="window.setPOSVariantQty(this.value)"
                    class="w-14 border-x border-slate-200 bg-transparent text-center text-sm font-extrabold focus:outline-none dark:border-slate-700 dark:text-white px-1">
                <button class="flex h-full w-10 items-center justify-center font-bold text-slate-500 transition-colors hover:bg-[rgba(var(--color-primary-rgb),0.1)] hover:text-[var(--color-primary)] active:scale-90 cursor-pointer"
                    onclick="window.updatePOSVariantQty(1)">
                    <i class="fa-solid fa-plus text-xs"></i>
                </button>
            </div>
        </div>
    </div>
    <div class="p-4 border-t border-slate-100 dark:border-slate-800/80 bg-slate-50/80 dark:bg-slate-900/60">
        <div class="flex items-center justify-between mb-3">
            <span class="text-xs font-bold text-slate-500">Subtotal</span>
            <span class="text-sm font-black" style="color:var(--color-primary)">${w(M)}</span>
        </div>
        <button onclick="window.confirmPOSVariantAdd()"
            class="w-full h-12 rounded-2xl text-white font-black text-sm flex items-center justify-center gap-2 active:scale-95 transition-all shadow-md cursor-pointer"
            style="background:var(--color-primary)">
            <i class="fa-solid fa-cart-plus text-base"></i>
            Tambah ke Keranjang Kasir
        </button>
    </div>`,F=k("pos-variant-sheet-content");F&&(F.innerHTML=I)},z=t=>{c=t;const e=(l.products||[]).find(s=>s&&String(s.id)===b);e&&$(e),typeof window.triggerHaptic=="function"&&window.triggerHaptic("light")},B=t=>{let e=parseFloat((n+t).toFixed(3));n=Math.max(.01,e);const s=(l.products||[]).find(r=>r&&String(r.id)===b);s&&$(s),typeof window.triggerHaptic=="function"&&window.triggerHaptic("selection")},U=t=>{let e=G(t);e<=0&&(e=.01),n=e;const s=(l.products||[]).find(r=>r&&String(r.id)===b);s&&$(s)},X=()=>{if(!b)return;const t=(l.products||[]).find(a=>a&&String(a.id)===b);if(!t)return;if(!(t.isActive!=="false"&&t.isActive!==!1)){p("Produk ini sedang tidak tersedia","warning");return}const s=t.variants&&t.variants.length>0,r=l.store?.useStock===!0||l.store?.useStock==="true",f=typeof window.getPOSCart=="function"?window.getPOSCart():window.__getPOSCart?window.__getPOSCart():[];if(s){const a=t.variants[c];if(!a){p("Pilih varian terlebih dahulu","warning");return}if(!(a.isActive!==!1&&a.isActive!=="false")){p("Varian ini sedang tidak tersedia","warning");return}if(r){const i=parseFloat(a.stock)||0;if(i<=0){p(`Maaf, stok varian "${a.name}" sedang kosong!`,"warning");return}const d=`${t.id}__v${c}`,g=(f||[]).find(y=>y.cartKey===d);if((g&&parseFloat(g.qty)||0)+n>i){p(`Stok varian "${a.name}" tidak cukup! Sisa: ${S(i)}`,"warning");return}}if(typeof window.addToCartPOSWithVariant=="function"&&!window.addToCartPOSWithVariant(t.id,a.name,parseFloat(a.price)||parseFloat(t.price)||0,c,n))return}else{if(r){const a=parseFloat(t.stock)||0;if(a<=0){p(`Maaf, stok "${t.name}" sedang kosong!`,"warning");return}const o=(f||[]).find(d=>String(d.id)===String(t.id)&&!d.isVariant);if((o&&parseFloat(o.qty)||0)+n>a){p(`Stok "${t.name}" tidak cukup! Sisa: ${S(a)}`,"warning");return}}if(typeof window.posAddToCartQty=="function"&&!window.posAddToCartQty(t.id,n))return}T(),typeof window.triggerHaptic=="function"&&window.triggerHaptic("success")};window.openPOSVariantSheet=J;window.closePOSVariantSheet=T;window.selectPOSVariant=z;window.updatePOSVariantQty=B;window.setPOSVariantQty=U;window.confirmPOSVariantAdd=X;export{T as closePOSVariantSheet,X as confirmPOSVariantAdd,J as openPOSVariantSheet,z as selectPOSVariant,U as setPOSVariantQty,B as updatePOSVariantQty};
