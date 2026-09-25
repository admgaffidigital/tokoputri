import{e as b,a as r,t as g,x as C,i as p,f as I}from"./module-print-B6xAfF9T.js";let n=null,i=0,o=1;const u=t=>I(t),q=t=>{if(t==null)return 0;typeof t=="string"&&(t=t.replace(",",".").trim());const a=parseFloat(t);return isNaN(a)?0:Math.max(0,parseFloat(a.toFixed(3)))},M=t=>{const a=parseFloat(t)||0;return parseFloat(a.toFixed(3)).toString()},R=(t,a)=>{if(!t||!t.wholesale||!t.wholesale.length)return null;const e=[...t.wholesale].sort((s,l)=>l.minQty-s.minQty);for(const s of e)if(a>=parseFloat(s.minQty))return parseFloat(s.price);return null},W=t=>{n=String(t),i=0,o=1;const a=(r.products||[]).find(l=>l&&String(l.id)===n);if(!a){g("Produk tidak ditemukan","warning");return}const e=b("pos-variant-sheet"),s=b("pos-variant-sheet-box");!e||!s||(x(a),e.classList.remove("hidden"),setTimeout(()=>{e.classList.remove("opacity-0"),s&&s.classList.remove("translate-y-full")},10),typeof window.triggerHaptic=="function"&&window.triggerHaptic("light"))},V=()=>{const t=b("pos-variant-sheet"),a=b("pos-variant-sheet-box");t&&t.classList.add("opacity-0"),a&&a.classList.add("translate-y-full"),setTimeout(()=>{t&&t.classList.add("hidden"),n=null,i=0,o=1},300)},x=t=>{const a=t.variants||[],e=a.length>0,l=e?a[i]:null,m=e?parseFloat(l?.price)||parseFloat(t.price)||0:parseFloat(t.price)||0,$=e?parseFloat(l?.stock)||0:parseFloat(t.stock)||0,P=r.store?.useStock===!0||r.store?.useStock==="true"?`Stok: ${$}`:"Tersedia",h=t.img?C(t.img,"w200-rw"):"",F=h?`<img src="${p(h)}" alt="${p(t.name)}" class="w-full h-full object-cover">`:'<i class="fa-solid fa-box text-slate-300 text-2xl"></i>',O=e?a.map((d,c)=>{parseFloat(d.price)||parseFloat(t.price);const w=parseFloat(d.stock)||0,v=(r.store?.useStock===!0||r.store?.useStock==="true")&&w<=0,S=c===i,T=S?"border-[var(--color-primary)] bg-[rgba(var(--color-primary-rgb),0.08)] text-[var(--color-primary)]":"border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 bg-white dark:bg-slate-800",A=v?"opacity-40 cursor-not-allowed":"cursor-pointer hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]",L=d.color?`<span class="w-3 h-3 rounded-full border border-slate-200 dark:border-slate-600 shrink-0" style="background:${p(d.color)}"></span>`:"";return`<button
            onclick="${v?"":`window.selectPOSVariant(${c})`}"
            class="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border text-[11px] font-bold transition-all ${T} ${A}"
            ${v?"disabled":""}>
            ${L}
            <span class="truncate max-w-[80px]">${p(d.name)}</span>
            ${S?'<i class="fa-solid fa-check text-[8px] shrink-0"></i>':""}
        </button>`}).join(""):"";let k="";!e&&t.wholesale&&t.wholesale.length>0&&(k=`
        <div class="mt-2 p-2.5 rounded-xl bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800">
            <p class="text-[9px] font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400 mb-1.5">
                <i class="fa-solid fa-tags mr-1"></i>Harga Grosir
            </p>
            <div class="space-y-0.5">
                ${[...t.wholesale].sort((c,w)=>c.minQty-w.minQty).map(c=>`
                <div class="flex items-center justify-between text-[10px]">
                    <span class="text-amber-700 dark:text-amber-400 font-semibold">≥ ${parseFloat(c.minQty)} pcs</span>
                    <span class="font-black text-amber-800 dark:text-amber-300">${u(parseFloat(c.price))}/pcs</span>
                </div>`).join("")}
            </div>
        </div>`);const f=e?null:R(t,o),Q=(f!==null?f:m)*o,H=f!==null?`
        <div class="flex items-center gap-2 flex-wrap">
            <span class="text-base font-black" style="color:var(--color-primary)">${u(f)}</span>
            <span class="text-xs text-slate-400 line-through">${u(m)}</span>
            <span class="px-1.5 py-0.5 rounded text-[8px] font-black uppercase bg-amber-500 text-white">GROSIR</span>
        </div>`:`<span class="text-base font-black" style="color:var(--color-primary)">${u(m)}</span>`,j=`
    <div class="p-4 sm:p-5 pb-3 border-b border-slate-100 dark:border-slate-800/60 flex items-start gap-3.5">
        <div class="w-20 h-20 min-w-[80px] rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 flex items-center justify-center p-1.5 shadow-xs shrink-0">
            ${F}
        </div>
        <div class="flex-1 min-w-0 pr-6">
            <h4 class="font-extrabold text-sm text-slate-900 dark:text-white line-clamp-2 leading-snug break-words">${p(t.name)}</h4>
            <div class="mt-1 flex items-baseline gap-2 flex-wrap">
                ${H}
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
                ${O}
            </div>
        </div>`:k}

        <div class="flex items-center justify-between pt-2 border-t border-slate-100 dark:border-slate-800/60">
            <div>
                <span class="text-xs font-bold text-slate-500 dark:text-slate-400 block">Jumlah</span>
                ${f!==null?'<span class="text-[9px] text-amber-600 font-semibold">Harga grosir aktif!</span>':""}
            </div>
            <div class="flex h-10 items-center overflow-hidden rounded-xl border border-slate-200 bg-slate-50 shadow-xs dark:border-slate-700 dark:bg-slate-900">
                <button class="flex h-full w-10 items-center justify-center font-bold text-slate-500 transition-colors hover:bg-slate-200 dark:hover:bg-slate-800 active:scale-90 cursor-pointer"
                    onclick="window.updatePOSVariantQty(-1)">
                    <i class="fa-solid fa-minus text-xs"></i>
                </button>
                <input id="pos-variant-qty-input" type="number" step="any" min="0.01" value="${M(o)}" onchange="window.setPOSVariantQty(this.value)"
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
            <span class="text-sm font-black" style="color:var(--color-primary)">${u(Q)}</span>
        </div>
        <button onclick="window.confirmPOSVariantAdd()"
            class="w-full h-12 rounded-2xl text-white font-black text-sm flex items-center justify-center gap-2 active:scale-95 transition-all shadow-md cursor-pointer"
            style="background:var(--color-primary)">
            <i class="fa-solid fa-cart-plus text-base"></i>
            Tambah ke Keranjang Kasir
        </button>
    </div>`,y=b("pos-variant-sheet-content");y&&(y.innerHTML=j)},_=t=>{i=t;const a=(r.products||[]).find(e=>e&&String(e.id)===n);a&&x(a),typeof window.triggerHaptic=="function"&&window.triggerHaptic("light")},D=t=>{let a=parseFloat((o+t).toFixed(3));o=Math.max(.01,a);const e=(r.products||[]).find(s=>s&&String(s.id)===n);e&&x(e),typeof window.triggerHaptic=="function"&&window.triggerHaptic("selection")},G=t=>{let a=q(t);a<=0&&(a=.01),o=a;const e=(r.products||[]).find(s=>s&&String(s.id)===n);e&&x(e)},K=()=>{if(!n)return;const t=(r.products||[]).find(e=>e&&String(e.id)===n);if(!t)return;if(t.variants&&t.variants.length>0){const e=t.variants[i];if(!e){g("Pilih varian terlebih dahulu","warning");return}if((r.store?.useStock===!0||r.store?.useStock==="true")&&(parseFloat(e.stock)||0)<=0){g("Stok varian ini habis","warning");return}typeof window.addToCartPOSWithVariant=="function"&&window.addToCartPOSWithVariant(t.id,e.name,parseFloat(e.price)||parseFloat(t.price)||0,i,o)}else typeof window.posAddToCartQty=="function"&&window.posAddToCartQty(t.id,o);V(),typeof window.triggerHaptic=="function"&&window.triggerHaptic("success")};window.openPOSVariantSheet=W;window.closePOSVariantSheet=V;window.selectPOSVariant=_;window.updatePOSVariantQty=D;window.setPOSVariantQty=G;window.confirmPOSVariantAdd=K;export{V as closePOSVariantSheet,K as confirmPOSVariantAdd,W as openPOSVariantSheet,_ as selectPOSVariant,G as setPOSVariantQty,D as updatePOSVariantQty};
