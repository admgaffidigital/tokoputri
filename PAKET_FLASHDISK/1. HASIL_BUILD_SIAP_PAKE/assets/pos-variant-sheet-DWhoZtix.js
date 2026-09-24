import{e as u,a as r,t as v,x as C,i as p,f as I}from"./module-print-C2-MjUR_.js";let c=null,i=0,o=1;const b=t=>I(t),R=(t,a)=>{if(!t||!t.wholesale||!t.wholesale.length)return null;const e=[...t.wholesale].sort((s,n)=>n.minQty-s.minQty);for(const s of e)if(a>=parseFloat(s.minQty))return parseFloat(s.price);return null},W=t=>{c=String(t),i=0,o=1;const a=(r.products||[]).find(n=>n&&String(n.id)===c);if(!a){v("Produk tidak ditemukan","warning");return}const e=u("pos-variant-sheet"),s=u("pos-variant-sheet-box");!e||!s||(g(a),e.classList.remove("hidden"),setTimeout(()=>{e.classList.remove("opacity-0"),s&&s.classList.remove("translate-y-full")},10),typeof window.triggerHaptic=="function"&&window.triggerHaptic("light"))},$=()=>{const t=u("pos-variant-sheet"),a=u("pos-variant-sheet-box");t&&t.classList.add("opacity-0"),a&&a.classList.add("translate-y-full"),setTimeout(()=>{t&&t.classList.add("hidden"),c=null,i=0,o=1},300)},g=t=>{const a=t.variants||[],e=a.length>0,n=e?a[i]:null,x=e?parseFloat(n?.price)||parseFloat(t.price)||0:parseFloat(t.price)||0,V=e?parseFloat(n?.stock)||0:parseFloat(t.stock)||0,P=r.store?.useStock===!0||r.store?.useStock==="true"?`Stok: ${V}`:"Tersedia",h=t.img?C(t.img,"w200-rw"):"",O=h?`<img src="${p(h)}" alt="${p(t.name)}" class="w-full h-full object-cover">`:'<i class="fa-solid fa-box text-slate-300 text-2xl"></i>',F=e?a.map((d,l)=>{parseFloat(d.price)||parseFloat(t.price);const m=parseFloat(d.stock)||0,w=(r.store?.useStock===!0||r.store?.useStock==="true")&&m<=0,S=l===i,T=S?"border-[var(--color-primary)] bg-[rgba(var(--color-primary-rgb),0.08)] text-[var(--color-primary)]":"border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 bg-white dark:bg-slate-800",A=w?"opacity-40 cursor-not-allowed":"cursor-pointer hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]",L=d.color?`<span class="w-3 h-3 rounded-full border border-slate-200 dark:border-slate-600 shrink-0" style="background:${p(d.color)}"></span>`:"";return`<button
            onclick="${w?"":`window.selectPOSVariant(${l})`}"
            class="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border text-[11px] font-bold transition-all ${T} ${A}"
            ${w?"disabled":""}>
            ${L}
            <span class="truncate max-w-[80px]">${p(d.name)}</span>
            ${S?'<i class="fa-solid fa-check text-[8px] shrink-0"></i>':""}
        </button>`}).join(""):"";let k="";!e&&t.wholesale&&t.wholesale.length>0&&(k=`
        <div class="mt-2 p-2.5 rounded-xl bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800">
            <p class="text-[9px] font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400 mb-1.5">
                <i class="fa-solid fa-tags mr-1"></i>Harga Grosir
            </p>
            <div class="space-y-0.5">
                ${[...t.wholesale].sort((l,m)=>l.minQty-m.minQty).map(l=>`
                <div class="flex items-center justify-between text-[10px]">
                    <span class="text-amber-700 dark:text-amber-400 font-semibold">≥ ${parseFloat(l.minQty)} pcs</span>
                    <span class="font-black text-amber-800 dark:text-amber-300">${b(parseFloat(l.price))}/pcs</span>
                </div>`).join("")}
            </div>
        </div>`);const f=e?null:R(t,o),H=(f!==null?f:x)*o,Q=f!==null?`
        <div class="flex items-center gap-2 flex-wrap">
            <span class="text-base font-black" style="color:var(--color-primary)">${b(f)}</span>
            <span class="text-xs text-slate-400 line-through">${b(x)}</span>
            <span class="px-1.5 py-0.5 rounded text-[8px] font-black uppercase bg-amber-500 text-white">GROSIR</span>
        </div>`:`<span class="text-base font-black" style="color:var(--color-primary)">${b(x)}</span>`,j=`
    <div class="p-4 sm:p-5 pb-3 border-b border-slate-100 dark:border-slate-800/60 flex items-start gap-3.5">
        <div class="w-20 h-20 min-w-[80px] rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 flex items-center justify-center p-1.5 shadow-xs shrink-0">
            ${O}
        </div>
        <div class="flex-1 min-w-0 pr-6">
            <h4 class="font-extrabold text-sm text-slate-900 dark:text-white line-clamp-2 leading-snug break-words">${p(t.name)}</h4>
            <div class="mt-1 flex items-baseline gap-2 flex-wrap">
                ${Q}
                <span class="text-[10px] font-bold text-slate-400">${P}</span>
            </div>
            ${e?`<p class="text-[11px] font-bold mt-0.5 truncate" style="color:var(--color-primary)">Varian: ${p(a[i]?.name||"-")}</p>`:""}
        </div>
    </div>
    <div class="p-4 sm:p-5 space-y-4">
        ${e?`
        <div>
            <span class="text-[10px] font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 flex items-center gap-1.5 mb-2.5">
                <i class="fa-solid fa-sliders text-[var(--color-primary)]"></i> Pilih Varian
            </span>
            <div class="flex flex-wrap gap-2" id="pos-variant-chips">
                ${F}
            </div>
        </div>`:k}

        <div class="flex items-center justify-between pt-2 border-t border-slate-100 dark:border-slate-800/60">
            <div>
                <span class="text-xs font-bold text-slate-500 dark:text-slate-400 block">Jumlah</span>
                ${f!==null?'<span class="text-[9px] text-amber-600 font-semibold">Harga grosir aktif!</span>':""}
            </div>
            <div class="flex h-10 items-center overflow-hidden rounded-xl border border-slate-200 bg-slate-50 shadow-xs dark:border-slate-700 dark:bg-slate-900">
                <button class="flex h-full w-10 items-center justify-center font-bold text-slate-500 transition-colors hover:bg-slate-200 dark:hover:bg-slate-800 active:scale-90"
                    onclick="window.updatePOSVariantQty(-1)">
                    <i class="fa-solid fa-minus text-xs"></i>
                </button>
                <input id="pos-variant-qty-input" type="number" min="1" value="${o}" readonly
                    class="w-12 border-x border-slate-200 bg-transparent text-center text-sm font-extrabold focus:outline-none dark:border-slate-700 dark:text-white">
                <button class="flex h-full w-10 items-center justify-center font-bold text-slate-500 transition-colors hover:bg-[rgba(var(--color-primary-rgb),0.1)] hover:text-[var(--color-primary)] active:scale-90"
                    onclick="window.updatePOSVariantQty(1)">
                    <i class="fa-solid fa-plus text-xs"></i>
                </button>
            </div>
        </div>
    </div>
    <div class="p-4 border-t border-slate-100 dark:border-slate-800/80 bg-slate-50/80 dark:bg-slate-900/60">
        <div class="flex items-center justify-between mb-3">
            <span class="text-xs font-bold text-slate-500">Subtotal</span>
            <span class="text-sm font-black" style="color:var(--color-primary)">${b(H)}</span>
        </div>
        <button onclick="window.confirmPOSVariantAdd()"
            class="w-full h-12 rounded-2xl text-white font-black text-sm flex items-center justify-center gap-2 active:scale-95 transition-all shadow-md"
            style="background:var(--color-primary)">
            <i class="fa-solid fa-cart-plus text-base"></i>
            Tambah ke Keranjang Kasir
        </button>
    </div>`,y=u("pos-variant-sheet-content");y&&(y.innerHTML=j)},_=t=>{i=t;const a=(r.products||[]).find(e=>e&&String(e.id)===c);a&&g(a),typeof window.triggerHaptic=="function"&&window.triggerHaptic("light")},D=t=>{o=Math.max(1,o+t);const a=(r.products||[]).find(e=>e&&String(e.id)===c);a&&g(a),typeof window.triggerHaptic=="function"&&window.triggerHaptic("selection")},G=()=>{if(!c)return;const t=(r.products||[]).find(e=>e&&String(e.id)===c);if(!t)return;if(t.variants&&t.variants.length>0){const e=t.variants[i];if(!e){v("Pilih varian terlebih dahulu","warning");return}if((r.store?.useStock===!0||r.store?.useStock==="true")&&(parseFloat(e.stock)||0)<=0){v("Stok varian ini habis","warning");return}typeof window.addToCartPOSWithVariant=="function"&&window.addToCartPOSWithVariant(t.id,e.name,parseFloat(e.price)||parseFloat(t.price)||0,i,o)}else typeof window.posAddToCartQty=="function"&&window.posAddToCartQty(t.id,o);$(),typeof window.triggerHaptic=="function"&&window.triggerHaptic("success")};window.openPOSVariantSheet=W;window.closePOSVariantSheet=$;window.selectPOSVariant=_;window.updatePOSVariantQty=D;window.confirmPOSVariantAdd=G;export{$ as closePOSVariantSheet,G as confirmPOSVariantAdd,W as openPOSVariantSheet,_ as selectPOSVariant,D as updatePOSVariantQty};
