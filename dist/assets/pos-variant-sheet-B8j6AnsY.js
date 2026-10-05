import{e as S,t as at,a as d,k as u,o as st,I as G,E as rt,i as m,aL as j,f as ot}from"./module-print-DU-o4X7J.js";import"./module-pos-CEGC7AKd.js";import"./vendor-firebase-core-D2OF5R23.js";import"./vendor-firebase-db-BIUZcnOd.js";let k=null,p=0,c=1;const f=t=>ot(t),it=t=>{if(t==null)return 0;typeof t=="string"&&(t=t.replace(",",".").trim());const a=parseFloat(t);return isNaN(a)?0:Math.max(0,parseFloat(a.toFixed(3)))},y=t=>{const a=parseFloat(t)||0;return parseFloat(a.toFixed(3)).toString()},nt=(t,a)=>{if(!t||!t.wholesale||!t.wholesale.length)return null;const s=[...t.wholesale].sort((r,x)=>x.minQty-r.minQty);for(const r of s)if(a>=parseFloat(r.minQty))return parseFloat(r.price);return null},lt=t=>{k=String(t),p=0,c=1;const a=(d.products||[]).find(n=>n&&String(n.id)===k);if(!a){u("Produk tidak ditemukan","warning");return}if(!(a.isActive!=="false"&&a.isActive!==!1)){u("Produk ini sedang tidak tersedia","warning");return}const r=d.store?.useStock===!0||d.store?.useStock==="true";if(r&&(a.variants&&a.variants.length?a.variants.filter(o=>o.isActive!==!1&&o.isActive!=="false").reduce((o,l)=>o+(parseFloat(l.stock)||0),0):parseFloat(a.stock)||0)<=0){u("Maaf, stok produk ini sedang kosong","warning");return}if(a.variants&&a.variants.length>0){const n=a.variants.findIndex(o=>{const l=o.isActive!==!1&&o.isActive!=="false",b=parseFloat(o.stock)||0;return l&&(!r||b>0)});p=n>=0?n:0}else p=0;const x=S("pos-variant-sheet"),e=S("pos-variant-sheet-box");!x||!e||(P(a),st(x,e),typeof window.triggerHaptic=="function"&&window.triggerHaptic("light"))},L=()=>{const t=S("pos-variant-sheet"),a=S("pos-variant-sheet-box");t&&at(t,a,()=>{k=null,p=0,c=1})},P=t=>{const a=t.variants||[],s=a.length>0,r=d.store?.useStock===!0||d.store?.useStock==="true",e=s?a[p]:null,n=s?parseFloat(e?.price)||parseFloat(t.price)||0:parseFloat(t.price)||0,o=e&&e.hpp!=null?parseFloat(e.hpp)||0:parseFloat(t.hpp)||0,l=s?e?.stock!=null&&e?.stock!==""?e.stock:e?.stok!=null&&e?.stok!==""?e.stok:null:t?.stock!=null&&t?.stock!==""?t.stock:t?.stok!=null&&t?.stok!==""?t.stok:null,b=l!=null&&!isNaN(parseFloat(l)),g=b?parseFloat(l):0,$=e?e.isActive!==!1&&e.isActive!=="false":!0,V=r&&g<=0;let v="Tersedia";$?(r||b)&&(v=V?"Stok Habis":`Stok: ${y(g)}`):v="Tidak Tersedia";const N=e?.img||t.img||"",M=N?G(N,"w200-rw"):"",_=rt(t,{size:"thumb"}),z=M?`<img src="${m(M)}" alt="${m(t.name)}" onerror="this.onerror=null;this.style.display='none';if(this.nextElementSibling)this.nextElementSibling.style.display='flex';" class="w-full h-full object-cover">
           <div class="w-full h-full" style="display:none">${_}</div>`:_,J=s?a.map((i,w)=>{const A=parseFloat(i.price)||parseFloat(t.price)||0,K=i.hpp!=null?parseFloat(i.hpp)||0:parseFloat(t.hpp)||0,F=i.stock!=null&&i.stock!==""?i.stock:i.stok!=null&&i.stok!==""?i.stok:null,D=F!=null&&!isNaN(parseFloat(F)),O=D?parseFloat(F):0,R=i.isActive!==!1&&i.isActive!=="false",H=r&&O<=0,Q=!R||H,W=w===p,Z=W?"border-[var(--color-primary)] bg-[rgba(var(--color-primary-rgb),0.08)] text-[var(--color-primary)]":"border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 bg-white dark:bg-slate-800",tt=Q?"opacity-40 cursor-not-allowed":"cursor-pointer hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]";let C="";R?H&&(C=" (Habis)"):C=" (Nonaktif)";const B=(i.colorCode||i.color||"").trim();let T="";B?T=`<span class="w-3.5 h-3.5 rounded-full border border-slate-300 dark:border-slate-600 shrink-0 shadow-2xs" style="background:${m(B)}"></span>`:i.img&&i.img.trim()&&(T=`<img src="${G(i.img,"w100-rw")}" alt="${m(i.name)}" class="w-6 h-6 rounded-md object-cover border border-slate-200 dark:border-slate-700 shrink-0">`);const et=(r||D)&&!H;return`<button
            onclick="${Q?"":`window.selectPOSVariant(${w})`}"
            class="flex items-center gap-2 px-3 py-1.5 rounded-xl border text-[11px] font-bold transition-all ${Z} ${tt}"
            ${Q?"disabled":""}>
            ${T}
            <div class="flex flex-col items-start min-w-0">
                <span class="truncate max-w-[120px]">${m(i.name)}${C}</span>
                <div class="flex items-center gap-1.5 text-[9px] flex-wrap">
                    <span class="text-slate-500 font-bold">${f(A)}</span>
                    ${j()&&K>0?`<span class="text-amber-600 dark:text-amber-400 font-black">HPP: ${f(K)}</span>`:""}
                    ${et?`<span class="font-extrabold ${O<=5?"text-rose-500":"text-slate-400 dark:text-slate-400"}"><i class="fa-solid fa-box text-[7px] mr-0.5"></i>Stok ${y(O)}</span>`:""}
                </div>
            </div>
            ${W?'<i class="fa-solid fa-check text-[8px] shrink-0 ml-1"></i>':""}
        </button>`}).join(""):"",U=t.poTime?`<span class="bg-amber-500 text-white px-2 py-0.5 rounded-full text-[8px] font-bold flex items-center gap-1 whitespace-nowrap uppercase tracking-wider shadow-sm"><i class="fa-solid fa-clock"></i> PO ${m(t.poTime)}</span>`:"";let I="";!s&&t.wholesale&&t.wholesale.length>0&&(I=`
        <div class="mt-2 p-2.5 rounded-xl bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800">
            <p class="text-[9px] font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400 mb-1.5">
                <i class="fa-solid fa-tags mr-1"></i>Harga Grosir
            </p>
            <div class="space-y-0.5">
                ${[...t.wholesale].sort((w,A)=>w.minQty-A.minQty).map(w=>`
                <div class="flex items-center justify-between text-[10px]">
                    <span class="text-amber-700 dark:text-amber-400 font-semibold">≥ ${parseFloat(w.minQty)} pcs</span>
                    <span class="font-black text-amber-800 dark:text-amber-300">${f(parseFloat(w.price))}/pcs</span>
                </div>`).join("")}
            </div>
        </div>`);const h=s?null:nt(t,c),q=(h!==null?h:n)*c,X=h!==null?`
        <div class="flex items-center gap-2 flex-wrap">
            <span class="text-base font-black" style="color:var(--color-primary)">${f(h)}</span>
            <span class="text-xs text-slate-400 line-through">${f(n)}</span>
            <span class="px-1.5 py-0.5 rounded text-[8px] font-black uppercase bg-amber-500 text-white">GROSIR</span>
        </div>`:`<span class="text-base font-black" style="color:var(--color-primary)">${f(n)}</span>`,Y=`
    <div class="p-4 sm:p-5 pb-3 border-b border-slate-100 dark:border-slate-800/60 flex items-start gap-3.5">
        <div class="w-20 h-20 min-w-[80px] rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 flex items-center justify-center p-1.5 shadow-xs shrink-0">
            ${z}
        </div>
        <div class="flex-1 min-w-0 pr-6">
            <h4 class="font-extrabold text-sm text-slate-900 dark:text-white line-clamp-2 leading-snug break-words flex items-center gap-1.5 flex-wrap">
                <span>${m(t.name)}</span>
                ${U}
            </h4>
            <div class="mt-1 flex items-baseline gap-2 flex-wrap">
                ${X}
                <span class="inline-flex items-center gap-1 text-[10px] font-bold ${V?"text-rose-600 dark:text-rose-400 bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800":"text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-700/60 border border-slate-200 dark:border-slate-600"} px-2 py-0.5 rounded-md shadow-2xs whitespace-nowrap"><i class="fa-solid fa-box text-[8px]"></i>${v}</span>
                ${j()&&o>0?`<span class="inline-flex items-center gap-1 text-[10px] font-black text-amber-950 bg-amber-100 dark:bg-amber-950/60 dark:text-amber-300 px-2 py-0.5 rounded-md border border-amber-300/80 dark:border-amber-700 shadow-2xs whitespace-nowrap"><i class="fa-solid fa-coins text-[8px] text-amber-600 dark:text-amber-400"></i>HPP: ${f(o)}</span>`:""}
            </div>
            ${s?`<p class="text-[11px] font-bold mt-0.5 truncate" style="color:var(--color-primary)">Varian: ${m(a[p]?.name||"-")}</p>`:""}
        </div>
    </div>
    <div class="p-4 sm:p-5 space-y-4">
        ${s?`
        <div>
            <span class="text-[10px] font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 flex items-center gap-1.5 mb-2.5">
                <i class="fa-solid fa-sliders text-[var(--color-primary)]"></i> Pilih Varian
            </span>
            <div class="flex flex-wrap gap-2" id="pos-variant-chips">
                ${J}
            </div>
        </div>`:I}

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
            <span class="text-sm font-black" style="color:var(--color-primary)">${f(q)}</span>
        </div>
        ${j()&&o>0?`
        <div class="flex items-center justify-between mb-3 text-[10px]">
            <span class="text-slate-400 font-semibold flex items-center gap-1"><i class="fa-solid fa-coins text-amber-500"></i> Total Modal (HPP): <b class="text-amber-600 dark:text-amber-400 font-bold">${f(o*c)}</b></span>
            <span class="font-bold text-emerald-600 dark:text-emerald-400">Untung: +${f(Math.max(0,q-o*c))}</span>
        </div>`:'<div class="mb-2"></div>'}
        <button onclick="window.confirmPOSVariantAdd()"
            class="w-full h-12 rounded-2xl text-white font-black text-sm flex items-center justify-center gap-2 active:scale-95 transition-all shadow-md cursor-pointer"
            style="background:var(--color-primary)">
            <i class="fa-solid fa-cart-plus text-base"></i>
            Tambah ke Keranjang Kasir
        </button>
    </div>`,E=S("pos-variant-sheet-content");E&&(E.innerHTML=Y)},ct=t=>{p=t;const a=(d.products||[]).find(s=>s&&String(s.id)===k);a&&P(a),typeof window.triggerHaptic=="function"&&window.triggerHaptic("light")},dt=t=>{let a=parseFloat((c+t).toFixed(3));c=Math.max(.01,a);const s=(d.products||[]).find(r=>r&&String(r.id)===k);s&&P(s),typeof window.triggerHaptic=="function"&&window.triggerHaptic("selection")},pt=t=>{let a=it(t);a<=0&&(a=.01),c=a;const s=(d.products||[]).find(r=>r&&String(r.id)===k);s&&P(s)},ft=()=>{if(!k)return;const t=(d.products||[]).find(e=>e&&String(e.id)===k);if(!t)return;if(!(t.isActive!=="false"&&t.isActive!==!1)){u("Produk ini sedang tidak tersedia","warning");return}const s=t.variants&&t.variants.length>0,r=d.store?.useStock===!0||d.store?.useStock==="true",x=typeof window.getPOSCart=="function"?window.getPOSCart():window.__getPOSCart?window.__getPOSCart():[];if(s){const e=t.variants[p];if(!e){u("Pilih varian terlebih dahulu","warning");return}if(!(e.isActive!==!1&&e.isActive!=="false")){u("Varian ini sedang tidak tersedia","warning");return}const o=!!(t.poTime&&String(t.poTime).trim());if(r&&!o){const l=e.stock!=null&&e.stock!==""?e.stock:e.stok!=null&&e.stok!==""?e.stok:null,b=l!=null&&!isNaN(parseFloat(l))?parseFloat(l):0;if(b<=0){u(`Maaf, stok varian "${e.name}" sedang kosong!`,"warning");return}const g=`${t.id}__v${p}`,$=(x||[]).find(v=>v.cartKey===g);if(($&&parseFloat($.qty)||0)+c>b){u(`Stok varian "${e.name}" tidak cukup! Sisa: ${y(b)}`,"warning");return}}if(typeof window.addToCartPOSWithVariant=="function"&&!window.addToCartPOSWithVariant(t.id,e.name,parseFloat(e.price)||parseFloat(t.price)||0,p,c))return}else{const e=!!(t.poTime&&String(t.poTime).trim());if(r&&!e){const n=t.stock!=null&&t.stock!==""?t.stock:t.stok!=null&&t.stok!==""?t.stok:null,o=n!=null&&!isNaN(parseFloat(n))?parseFloat(n):0;if(o<=0){u(`Maaf, stok "${t.name}" sedang kosong!`,"warning");return}const l=(x||[]).find(g=>String(g.id)===String(t.id)&&!g.isVariant);if((l&&parseFloat(l.qty)||0)+c>o){u(`Stok "${t.name}" tidak cukup! Sisa: ${y(o)}`,"warning");return}}if(typeof window.posAddToCartQty=="function"&&!window.posAddToCartQty(t.id,c))return}L(),typeof window.triggerHaptic=="function"&&window.triggerHaptic("success")};window.openPOSVariantSheet=lt;window.closePOSVariantSheet=L;window.selectPOSVariant=ct;window.updatePOSVariantQty=dt;window.setPOSVariantQty=pt;window.confirmPOSVariantAdd=ft;export{L as closePOSVariantSheet,ft as confirmPOSVariantAdd,lt as openPOSVariantSheet,ct as selectPOSVariant,pt as setPOSVariantQty,dt as updatePOSVariantQty};
