import{a as d,k as u,e as S,o as ot,v as it,E as nt,J as z,F as lt,i as k,aN as j,f as ct}from"./module-print-CuGBSj6J.js";import"./module-pos-D25gtbAB.js";import"./vendor-firebase-core-D2OF5R23.js";import"./vendor-firebase-db-BIUZcnOd.js";let w=null,p=0,c=1;const f=t=>ct(t),dt=t=>{if(t==null)return 0;typeof t=="string"&&(t=t.replace(",",".").trim());const e=parseFloat(t);return isNaN(e)?0:Math.max(0,parseFloat(e.toFixed(3)))},y=t=>{const e=parseFloat(t)||0;return parseFloat(e.toFixed(3)).toString()},pt=(t,e)=>{if(!t||!t.wholesale||!t.wholesale.length)return null;const s=[...t.wholesale].sort((r,m)=>m.minQty-r.minQty);for(const r of s)if(e>=parseFloat(r.minQty))return parseFloat(r.price);return null},ft=t=>{w=String(t),p=0,c=1;const e=(d.products||[]).find(n=>n&&String(n.id)===w);if(!e){u("Produk tidak ditemukan","warning");return}if(!(e.isActive!=="false"&&e.isActive!==!1)){u("Produk ini sedang tidak tersedia","warning");return}const r=d.store?.useStock===!0||d.store?.useStock==="true";if(r&&(e.variants&&e.variants.length?e.variants.filter(i=>i.isActive!==!1&&i.isActive!=="false").reduce((i,l)=>i+(parseFloat(l.stock)||0),0):parseFloat(e.stock)||0)<=0){u("Maaf, stok produk ini sedang kosong","warning");return}if(e.variants&&e.variants.length>0){const n=e.variants.findIndex(i=>{const l=i.isActive!==!1&&i.isActive!=="false",b=parseFloat(i.stock)||0;return l&&(!r||b>0)});p=n>=0?n:0}else p=0;const m=S("pos-variant-sheet"),a=S("pos-variant-sheet-box");!m||!a||(P(e),typeof window.pushModalHistory=="function"&&window.pushModalHistory("posVariantSheet"),ot(m,a),typeof window.triggerHaptic=="function"&&window.triggerHaptic("light"))},L=(t=!1)=>{const e=()=>{const s=S("pos-variant-sheet"),r=S("pos-variant-sheet-box");s&&it(s,r,()=>{w=null,p=0,c=1})};typeof window.requestCloseModal=="function"?window.requestCloseModal("posVariantSheet",t,e):e()},P=t=>{const e=t.variants||[],s=e.length>0,r=d.store?.useStock===!0||d.store?.useStock==="true",a=s?e[p]:null,n=s?parseFloat(a?.price)||parseFloat(t.price)||0:parseFloat(t.price)||0,i=a&&a.hpp!=null?parseFloat(a.hpp)||0:parseFloat(t.hpp)||0,l=s?a?.stock!=null&&a?.stock!==""?a.stock:a?.stok!=null&&a?.stok!==""?a.stok:null:t?.stock!=null&&t?.stock!==""?t.stock:t?.stok!=null&&t?.stok!==""?t.stok:null,b=l!=null&&!isNaN(parseFloat(l)),g=b?parseFloat(l):0,$=a?a.isActive!==!1&&a.isActive!=="false":!0,V=r&&g<=0;let v="Tersedia";$?(r||b)&&(v=V?"Stok Habis":`Stok: ${y(g)}`):v="Tidak Tersedia";const M=a?.img||t.img||"",N=nt(M)?"":M,_=N?z(N,"w200-rw"):"",I=lt(t,{size:"thumb"}),U=_?`<img src="${k(_)}" alt="${k(t.name)}" onerror="this.onerror=null;this.style.display='none';if(this.nextElementSibling)this.nextElementSibling.style.display='flex';" class="w-full h-full object-cover">
           <div class="w-full h-full" style="display:none">${I}</div>`:I,X=s?e.map((o,x)=>{const F=parseFloat(o.price)||parseFloat(t.price)||0,R=o.hpp!=null?parseFloat(o.hpp)||0:parseFloat(t.hpp)||0,A=o.stock!=null&&o.stock!==""?o.stock:o.stok!=null&&o.stok!==""?o.stok:null,W=A!=null&&!isNaN(parseFloat(A)),O=W?parseFloat(A):0,B=o.isActive!==!1&&o.isActive!=="false",H=r&&O<=0,Q=!B||H,G=x===p,at=G?"border-[var(--color-primary)] bg-[rgba(var(--color-primary-rgb),0.08)] text-[var(--color-primary)]":"border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 bg-white dark:bg-slate-800",st=Q?"opacity-40 cursor-not-allowed":"cursor-pointer hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]";let C="";B?H&&(C=" (Habis)"):C=" (Nonaktif)";const J=(o.colorCode||o.color||"").trim();let T="";J?T=`<span class="w-3.5 h-3.5 rounded-full border border-slate-300 dark:border-slate-600 shrink-0 shadow-2xs" style="background:${k(J)}"></span>`:o.img&&o.img.trim()&&(T=`<img src="${z(o.img,"w100-rw")}" alt="${k(o.name)}" class="w-6 h-6 rounded-md object-cover border border-slate-200 dark:border-slate-700 shrink-0">`);const rt=(r||W)&&!H;return`<button
            onclick="${Q?"":`window.selectPOSVariant(${x})`}"
            class="flex items-center gap-2 px-3 py-1.5 rounded-xl border text-[11px] font-bold transition-all ${at} ${st}"
            ${Q?"disabled":""}>
            ${T}
            <div class="flex flex-col items-start min-w-0">
                <span class="truncate max-w-[120px]">${k(o.name)}${C}</span>
                <div class="flex items-center gap-1.5 text-[9px] flex-wrap">
                    <span class="text-slate-500 font-bold">${f(F)}</span>
                    ${j()&&R>0?`<span class="text-amber-600 dark:text-amber-400 font-black">HPP: ${f(R)}</span>`:""}
                    ${rt?`<span class="font-extrabold ${O<=5?"text-rose-500":"text-slate-400 dark:text-slate-400"}"><i class="fa-solid fa-box text-[7px] mr-0.5"></i>Stok ${y(O)}</span>`:""}
                </div>
            </div>
            ${G?'<i class="fa-solid fa-check text-[8px] shrink-0 ml-1"></i>':""}
        </button>`}).join(""):"",Y=t.poTime?`<span class="bg-amber-500 text-white px-2 py-0.5 rounded-full text-[8px] font-bold flex items-center gap-1 whitespace-nowrap uppercase tracking-wider shadow-sm"><i class="fa-solid fa-clock"></i> PO ${k(t.poTime)}</span>`:"",q=t.variants&&t.variants.length?t.variants.reduce((o,x)=>o+(parseFloat(x.totalSold)||0),0):parseFloat(t.totalSold)||0,Z=q>0?`<span class="bg-slate-100 text-slate-600 dark:bg-slate-700/60 dark:text-slate-300 px-2 py-0.5 rounded-full text-[8px] font-bold flex items-center gap-1 whitespace-nowrap uppercase tracking-wider"><i class="fa-solid fa-fire text-amber-500 text-[7px]"></i> ${q} Terjual</span>`:"";let E="";!s&&t.wholesale&&t.wholesale.length>0&&(E=`
        <div class="mt-2 p-2.5 rounded-xl bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800">
            <p class="text-[9px] font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400 mb-1.5">
                <i class="fa-solid fa-tags mr-1"></i>Harga Grosir
            </p>
            <div class="space-y-0.5">
                ${[...t.wholesale].sort((x,F)=>x.minQty-F.minQty).map(x=>`
                <div class="flex items-center justify-between text-[10px]">
                    <span class="text-amber-700 dark:text-amber-400 font-semibold">≥ ${parseFloat(x.minQty)} pcs</span>
                    <span class="font-black text-amber-800 dark:text-amber-300">${f(parseFloat(x.price))}/pcs</span>
                </div>`).join("")}
            </div>
        </div>`);const h=s?null:pt(t,c),K=(h!==null?h:n)*c,tt=h!==null?`
        <div class="flex items-center gap-2 flex-wrap">
            <span class="text-base font-black" style="color:var(--color-primary)">${f(h)}</span>
            <span class="text-xs text-slate-400 line-through">${f(n)}</span>
            <span class="px-1.5 py-0.5 rounded text-[8px] font-black uppercase bg-amber-500 text-white">GROSIR</span>
        </div>`:`<span class="text-base font-black" style="color:var(--color-primary)">${f(n)}</span>`,et=`
    <div class="p-4 sm:p-5 pb-3 border-b border-slate-100 dark:border-slate-800/60 flex items-start gap-3.5">
        <div class="w-20 h-20 min-w-[80px] rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 flex items-center justify-center p-1.5 shadow-xs shrink-0">
            ${U}
        </div>
        <div class="flex-1 min-w-0 pr-6">
            <h4 class="font-extrabold text-sm text-slate-900 dark:text-white line-clamp-2 leading-snug break-words flex items-center gap-1.5 flex-wrap">
                <span>${k(t.name)}</span>
                ${Y}
                ${Z}
            </h4>
            <div class="mt-1 flex items-baseline gap-2 flex-wrap">
                ${tt}
                <span class="inline-flex items-center gap-1 text-[10px] font-bold ${V?"text-rose-600 dark:text-rose-400 bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800":"text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-700/60 border border-slate-200 dark:border-slate-600"} px-2 py-0.5 rounded-md shadow-2xs whitespace-nowrap"><i class="fa-solid fa-box text-[8px]"></i>${v}</span>
                ${j()&&i>0?`<span class="inline-flex items-center gap-1 text-[10px] font-black text-amber-950 bg-amber-100 dark:bg-amber-950/60 dark:text-amber-300 px-2 py-0.5 rounded-md border border-amber-300/80 dark:border-amber-700 shadow-2xs whitespace-nowrap"><i class="fa-solid fa-coins text-[8px] text-amber-600 dark:text-amber-400"></i>HPP: ${f(i)}</span>`:""}
            </div>
            ${s?`<p class="text-[11px] font-bold mt-0.5 truncate" style="color:var(--color-primary)">Varian: ${k(e[p]?.name||"-")}</p>`:""}
        </div>
    </div>
    <div class="p-4 sm:p-5 space-y-4">
        ${s?`
        <div>
            <span class="text-[10px] font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 flex items-center gap-1.5 mb-2.5">
                <i class="fa-solid fa-sliders text-[var(--color-primary)]"></i> Pilih Varian
            </span>
            <div class="flex flex-wrap gap-2" id="pos-variant-chips">
                ${X}
            </div>
        </div>`:E}

        <div class="flex items-center justify-between pt-2 border-t border-slate-100 dark:border-slate-800/60">
            <div>
                <span class="text-xs font-bold text-slate-500 dark:text-slate-400 block">Jumlah</span>
                ${h!==null?'<span class="text-[9px] text-amber-600 font-semibold">Harga grosir aktif!</span>':""}
            </div>
            <div class="flex h-10 items-center overflow-hidden rounded-xl border border-slate-200 bg-slate-50 shadow-xs dark:border-slate-700 dark:bg-slate-900">
                <button class="flex h-full w-10 items-center justify-center font-bold text-slate-500 transition-colors hover:bg-slate-200 dark:hover:bg-slate-800 active:scale-90 cursor-pointer"
                    onclick="window.updatePOSVariantQty(-1)">
                    <i class="fa-solid fa-minus text-xs"></i>
                </button>
                <input id="pos-variant-qty-input" type="number" step="any" min="0.01" value="${y(c)}" onchange="window.setPOSVariantQty(this.value)"
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
            <span class="text-sm font-black" style="color:var(--color-primary)">${f(K)}</span>
        </div>
        ${j()&&i>0?`
        <div class="flex items-center justify-between mb-3 text-[10px]">
            <span class="text-slate-400 font-semibold flex items-center gap-1"><i class="fa-solid fa-coins text-amber-500"></i> Total Modal (HPP): <b class="text-amber-600 dark:text-amber-400 font-bold">${f(i*c)}</b></span>
            <span class="font-bold text-emerald-600 dark:text-emerald-400">Untung: +${f(Math.max(0,K-i*c))}</span>
        </div>`:'<div class="mb-2"></div>'}
        <button onclick="window.confirmPOSVariantAdd()"
            class="w-full h-12 rounded-2xl text-white font-black text-sm flex items-center justify-center gap-2 active:scale-95 transition-all shadow-md cursor-pointer"
            style="background:var(--color-primary)">
            <i class="fa-solid fa-cart-plus text-base"></i>
            Tambah ke Keranjang Kasir
        </button>
    </div>`,D=S("pos-variant-sheet-content");D&&(D.innerHTML=et)},ut=t=>{p=t;const e=(d.products||[]).find(s=>s&&String(s.id)===w);e&&P(e),typeof window.triggerHaptic=="function"&&window.triggerHaptic("light")},bt=t=>{let e=parseFloat((c+t).toFixed(3));c=Math.max(.01,e);const s=(d.products||[]).find(r=>r&&String(r.id)===w);s&&P(s),typeof window.triggerHaptic=="function"&&window.triggerHaptic("selection")},xt=t=>{let e=dt(t);e<=0&&(e=.01),c=e;const s=(d.products||[]).find(r=>r&&String(r.id)===w);s&&P(s)},mt=()=>{if(!w)return;const t=(d.products||[]).find(a=>a&&String(a.id)===w);if(!t)return;if(!(t.isActive!=="false"&&t.isActive!==!1)){u("Produk ini sedang tidak tersedia","warning");return}const s=t.variants&&t.variants.length>0,r=d.store?.useStock===!0||d.store?.useStock==="true",m=typeof window.getPOSCart=="function"?window.getPOSCart():window.__getPOSCart?window.__getPOSCart():[];if(s){const a=t.variants[p];if(!a){u("Pilih varian terlebih dahulu","warning");return}if(!(a.isActive!==!1&&a.isActive!=="false")){u("Varian ini sedang tidak tersedia","warning");return}const i=!!(t.poTime&&String(t.poTime).trim());if(r&&!i){const l=a.stock!=null&&a.stock!==""?a.stock:a.stok!=null&&a.stok!==""?a.stok:null,b=l!=null&&!isNaN(parseFloat(l))?parseFloat(l):0;if(b<=0){u(`Maaf, stok varian "${a.name}" sedang kosong!`,"warning");return}const g=`${t.id}__v${p}`,$=(m||[]).find(v=>v.cartKey===g);if(($&&parseFloat($.qty)||0)+c>b){u(`Stok varian "${a.name}" tidak cukup! Sisa: ${y(b)}`,"warning");return}}if(typeof window.addToCartPOSWithVariant=="function"&&!window.addToCartPOSWithVariant(t.id,a.name,parseFloat(a.price)||parseFloat(t.price)||0,p,c))return}else{const a=!!(t.poTime&&String(t.poTime).trim());if(r&&!a){const n=t.stock!=null&&t.stock!==""?t.stock:t.stok!=null&&t.stok!==""?t.stok:null,i=n!=null&&!isNaN(parseFloat(n))?parseFloat(n):0;if(i<=0){u(`Maaf, stok "${t.name}" sedang kosong!`,"warning");return}const l=(m||[]).find(g=>String(g.id)===String(t.id)&&!g.isVariant);if((l&&parseFloat(l.qty)||0)+c>i){u(`Stok "${t.name}" tidak cukup! Sisa: ${y(i)}`,"warning");return}}if(typeof window.posAddToCartQty=="function"&&!window.posAddToCartQty(t.id,c))return}L(),typeof window.triggerHaptic=="function"&&window.triggerHaptic("success")};window.openPOSVariantSheet=ft;window.closePOSVariantSheet=L;window.selectPOSVariant=ut;window.updatePOSVariantQty=bt;window.setPOSVariantQty=xt;window.confirmPOSVariantAdd=mt;export{L as closePOSVariantSheet,mt as confirmPOSVariantAdd,ft as openPOSVariantSheet,ut as selectPOSVariant,xt as setPOSVariantQty,bt as updatePOSVariantQty};
