import{e as u,a as n,i as c,f as g,o as N,k as h,b as H,l as I,n as R,G as C,v as D}from"./module-print-BkHVhnq_.js";import{M as E,p as V,N as U}from"./module-pos-Br-NTCig.js";import"./vendor-firebase-core-D2OF5R23.js";import"./vendor-firebase-db-BIUZcnOd.js";import"./module-member-DQMsca3W.js";import"./module-faq-BdeWXHTF.js";let $="sales",S="",m=null,f=[];const M=()=>{if(!u("admin-content"))return;Array.isArray(n.salesReturns)||(n.salesReturns=[]),Array.isArray(n.vendorReturns)||(n.vendorReturns=[]);const a=n.salesReturns.reduce((l,o)=>l+(parseFloat(o.totalRefund)||0),0),e=n.salesReturns.length,r=n.vendorReturns.reduce((l,o)=>l+(parseFloat(o.totalClaim)||0),0),i=(n.products||[]).reduce((l,o)=>{let p=parseFloat(o.damagedStock)||0;return Array.isArray(o.variants)&&(p+=o.variants.reduce((w,d)=>w+(parseFloat(d.damagedStock)||0),0)),l+p},0),s=`
        <div class="space-y-6">
            <!-- Header & Action Buttons -->
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2 border-b border-slate-200/80 dark:border-slate-800">
                <div>
                    <h2 class="text-xl sm:text-2xl font-black text-slate-800 dark:text-white flex items-center gap-2.5">
                        <span class="w-10 h-10 rounded-2xl flex items-center justify-center text-white shadow-md shadow-indigo-500/25" style="background: linear-gradient(135deg, #4f46e5, #3730a3);">
                            <i class="fa-solid fa-right-left text-lg"></i>
                        </span>
                        <span>Retur Barang &amp; RMA</span>
                    </h2>
                    <p class="text-xs text-slate-500 dark:text-slate-400 mt-1">
                        Rekonsiliasi pengembalian barang konsumen, klaim cacat supplier, dan kontrol stok karantina.
                    </p>
                </div>
                <div class="flex items-center gap-2 flex-wrap">
                    <button type="button" onclick="window.openSalesReturnModal()" class="px-4 py-2.5 rounded-xl text-white font-bold text-xs flex items-center gap-2 shadow-sm transition-all active:scale-95 cursor-pointer hover:brightness-105" style="background: linear-gradient(135deg, #4f46e5, #3730a3);">
                        <i class="fa-solid fa-cart-arrow-down"></i> + Retur Penjualan
                    </button>
                    <button type="button" onclick="window.openVendorReturnModal()" class="px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700/80 text-slate-700 dark:text-slate-200 font-bold text-xs flex items-center gap-2 shadow-2xs transition-all active:scale-95 cursor-pointer">
                        <i class="fa-solid fa-truck-ramp-box text-amber-500"></i> + Retur Supplier
                    </button>
                </div>
            </div>

            <!-- 4 KPI Bento Cards -->
            <div class="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                <div class="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-2xs">
                    <span class="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 block mb-1">Total Nilai Retur Konsumen</span>
                    <span class="text-lg sm:text-xl font-black text-rose-600 dark:text-rose-400">${g(a)}</span>
                    <span class="text-[10px] text-slate-400 block mt-0.5">Pengembalian dana/kredit</span>
                </div>
                <div class="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-2xs">
                    <span class="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 block mb-1">Nota Retur Penjualan</span>
                    <span class="text-lg sm:text-xl font-black text-slate-800 dark:text-white">${e} <span class="text-xs font-semibold text-slate-400">Kasus</span></span>
                    <span class="text-[10px] text-slate-400 block mt-0.5">Transaksi terselesaikan</span>
                </div>
                <div class="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-2xs">
                    <span class="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 block mb-1">Klaim Retur Supplier</span>
                    <span class="text-lg sm:text-xl font-black text-amber-600 dark:text-amber-400">${g(r)}</span>
                    <span class="text-[10px] text-slate-400 block mt-0.5">Potong hutang / refund PO</span>
                </div>
                <div class="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-2xs">
                    <span class="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 block mb-1">Stok Karantina Rusak</span>
                    <span class="text-lg sm:text-xl font-black text-purple-600 dark:text-purple-400">${i} <span class="text-xs font-semibold text-slate-400">Unit</span></span>
                    <span class="text-[10px] text-slate-400 block mt-0.5">Menunggu klaim distributor</span>
                </div>
            </div>

            <!-- Tab Switcher & Search Bar -->
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-white dark:bg-slate-900 p-3 rounded-2xl border border-slate-200/90 dark:border-slate-800 shadow-2xs">
                <!-- Tab Buttons -->
                <div class="flex items-center gap-1.5 p-1 bg-slate-100 dark:bg-slate-800/80 rounded-xl">
                    <button type="button" onclick="window.switchReturnsTab('sales')" class="px-3.5 py-1.5 rounded-lg text-xs font-extrabold transition-all cursor-pointer ${$==="sales"?"bg-white dark:bg-slate-900 text-indigo-600 dark:text-indigo-400 shadow-xs":"text-slate-500 hover:text-slate-800 dark:hover:text-white"}">
                        <i class="fa-solid fa-basket-shopping mr-1"></i> Retur Penjualan (${n.salesReturns.length})
                    </button>
                    <button type="button" onclick="window.switchReturnsTab('vendor')" class="px-3.5 py-1.5 rounded-lg text-xs font-extrabold transition-all cursor-pointer ${$==="vendor"?"bg-white dark:bg-slate-900 text-indigo-600 dark:text-indigo-400 shadow-xs":"text-slate-500 hover:text-slate-800 dark:hover:text-white"}">
                        <i class="fa-solid fa-truck-ramp-box mr-1"></i> Retur Supplier (${n.vendorReturns.length})
                    </button>
                </div>

                <!-- Live Search Box -->
                <div class="relative flex-1 sm:max-w-xs">
                    <i class="fa-solid fa-magnifying-glass absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-xs"></i>
                    <input type="text" id="returns-search-input" value="${c(S)}" oninput="window.handleReturnsSearch(this.value)" placeholder="Cari No Retur / Nota / Nama..." class="w-full pl-9 pr-4 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs text-slate-800 dark:text-slate-100 focus:outline-none focus:border-indigo-500 transition-all">
                </div>
            </div>

            <!-- Table Container -->
            <div class="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/90 dark:border-slate-800 shadow-2xs overflow-hidden">
                <div id="returns-table-wrapper" class="overflow-x-auto custom-scrollbar">
                    ${$==="sales"?B():K()}
                </div>
            </div>
        </div>
    `;H("admin-content",s)},G=t=>{$=t,M()},J=t=>{S=(t||"").trim().toLowerCase();const a=u("returns-table-wrapper");a&&(a.innerHTML=$==="sales"?B():K())},B=()=>{const t=(n.salesReturns||[]).filter(e=>{if(!S)return!0;const r=S;return e.id&&e.id.toLowerCase().includes(r)||e.orderId&&e.orderId.toLowerCase().includes(r)||e.customerName&&e.customerName.toLowerCase().includes(r)||e.customerPhone&&e.customerPhone.includes(r)});return t.length===0?`
            <div class="py-16 text-center text-slate-400 dark:text-slate-500">
                <div class="w-14 h-14 mx-auto mb-3 rounded-2xl bg-indigo-50 dark:bg-indigo-950/40 text-indigo-500 flex items-center justify-center text-2xl">
                    <i class="fa-solid fa-box-open"></i>
                </div>
                <h4 class="font-bold text-sm text-slate-700 dark:text-slate-300">Belum Ada Riwayat Retur Penjualan</h4>
                <p class="text-xs mt-1 max-w-sm mx-auto">Semua retur dari kasir POS maupun web akan tercatat otomatis di sini.</p>
                <button type="button" onclick="window.openSalesReturnModal()" class="mt-4 px-4 py-2 rounded-xl bg-indigo-600 text-white font-bold text-xs shadow-sm hover:bg-indigo-700 cursor-pointer active:scale-95 transition-all">
                    + Buat Retur Penjualan
                </button>
            </div>
        `:`
        <table class="w-full text-left text-xs">
            <thead class="bg-slate-50 dark:bg-slate-800/60 text-[11px] font-black uppercase tracking-wider text-slate-400 border-b border-slate-200 dark:border-slate-800">
                <tr>
                    <th class="py-3 px-4">No. Retur &amp; Tanggal</th>
                    <th class="py-3 px-4">Rujukan Nota</th>
                    <th class="py-3 px-4">Pelanggan</th>
                    <th class="py-3 px-4">Barang Diretur</th>
                    <th class="py-3 px-4 text-right">Nilai Kompensasi</th>
                    <th class="py-3 px-4">Metode</th>
                    <th class="py-3 px-4 text-center">Aksi</th>
                </tr>
            </thead>
            <tbody class="divide-y divide-slate-100 dark:divide-slate-800 text-slate-700 dark:text-slate-300">
                ${[...t].sort((e,r)=>new Date(r.createdAt||0)-new Date(e.createdAt||0)).map(e=>{const r=e.createdAt?new Date(e.createdAt).toLocaleDateString("id-ID",{day:"2-digit",month:"short",year:"numeric",hour:"2-digit",minute:"2-digit"}):"-",i=(e.items||[]).map(l=>`${l.qty}x ${c(l.name)}`).join(", ");let s='<span class="px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-[10px] font-bold">Lainnya</span>';return e.refundMethod==="cash"?s='<span class="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300 text-[10px] font-bold"><i class="fa-solid fa-money-bill mr-1"></i>Tunai (Kas)</span>':e.refundMethod==="credit"?s='<span class="px-2 py-0.5 rounded-full bg-blue-100 text-blue-800 dark:bg-blue-950/60 dark:text-blue-300 text-[10px] font-bold"><i class="fa-solid fa-wallet mr-1"></i>Store Credit</span>':e.refundMethod==="exchange"&&(s='<span class="px-2 py-0.5 rounded-full bg-purple-100 text-purple-800 dark:bg-purple-950/60 dark:text-purple-300 text-[10px] font-bold"><i class="fa-solid fa-repeat mr-1"></i>Tukar Barang</span>'),`
                        <tr class="hover:bg-slate-50/60 dark:hover:bg-slate-800/40 transition-colors">
                            <td class="py-3.5 px-4 font-bold">
                                <span class="font-mono text-indigo-600 dark:text-indigo-400 block">${c(e.id)}</span>
                                <span class="text-[10px] font-normal text-slate-400 block">${r}</span>
                            </td>
                            <td class="py-3.5 px-4 font-mono font-semibold text-slate-600 dark:text-slate-400">
                                ${c(e.orderId||"-")}
                            </td>
                            <td class="py-3.5 px-4">
                                <span class="font-bold block">${c(e.customerName||"Pelanggan Umum")}</span>
                                <span class="text-[10px] text-slate-400">${c(e.customerPhone||"")}</span>
                            </td>
                            <td class="py-3.5 px-4 max-w-xs">
                                <p class="truncate font-medium text-slate-600 dark:text-slate-300" title="${c(i)}">${c(i||"-")}</p>
                                <span class="text-[10px] text-slate-400">${e.items?e.items.length:0} macam barang</span>
                            </td>
                            <td class="py-3.5 px-4 text-right font-black text-rose-600 dark:text-rose-400">
                                ${g(e.totalRefund||0)}
                            </td>
                            <td class="py-3.5 px-4">
                                ${s}
                            </td>
                            <td class="py-3.5 px-4 text-center">
                                <div class="flex items-center justify-center gap-1.5">
                                    <button type="button" onclick="window.printSalesReturnA4('${c(e.id)}')" title="Cetak Nota Retur A4" class="w-7 h-7 rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 flex items-center justify-center transition-all cursor-pointer active:scale-90">
                                        <i class="fa-solid fa-file-invoice text-xs"></i>
                                    </button>
                                    <button type="button" onclick="window.printSalesReturnThermal('${c(e.id)}')" title="Cetak Struk Thermal RawBT" class="w-7 h-7 rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 flex items-center justify-center transition-all cursor-pointer active:scale-90">
                                        <i class="fa-solid fa-print text-xs text-indigo-500"></i>
                                    </button>
                                </div>
                            </td>
                        </tr>
                    `}).join("")}
            </tbody>
        </table>
    `},K=()=>{const t=(n.vendorReturns||[]).filter(e=>{if(!S)return!0;const r=S;return e.id&&e.id.toLowerCase().includes(r)||e.supplierName&&e.supplierName.toLowerCase().includes(r)||e.poId&&e.poId.toLowerCase().includes(r)});return t.length===0?`
            <div class="py-16 text-center text-slate-400 dark:text-slate-500">
                <div class="w-14 h-14 mx-auto mb-3 rounded-2xl bg-amber-50 dark:bg-amber-950/40 text-amber-500 flex items-center justify-center text-2xl">
                    <i class="fa-solid fa-truck-ramp-box"></i>
                </div>
                <h4 class="font-bold text-sm text-slate-700 dark:text-slate-300">Belum Ada Riwayat Retur Supplier</h4>
                <p class="text-xs mt-1 max-w-sm mx-auto">Pengembalian barang rusak atau klaim distributor tercatat di sini.</p>
                <button type="button" onclick="window.openVendorReturnModal()" class="mt-4 px-4 py-2 rounded-xl bg-amber-600 text-white font-bold text-xs shadow-sm hover:bg-amber-700 cursor-pointer active:scale-95 transition-all">
                    + Buat Retur Supplier Baru
                </button>
            </div>
        `:`
        <table class="w-full text-left text-xs">
            <thead class="bg-slate-50 dark:bg-slate-800/60 text-[11px] font-black uppercase tracking-wider text-slate-400 border-b border-slate-200 dark:border-slate-800">
                <tr>
                    <th class="py-3 px-4">No. Retur &amp; Tanggal</th>
                    <th class="py-3 px-4">Pemasok / Supplier</th>
                    <th class="py-3 px-4">Rujukan PO</th>
                    <th class="py-3 px-4">Barang Dikembalikan</th>
                    <th class="py-3 px-4 text-right">Nilai Klaim HPP</th>
                    <th class="py-3 px-4">Penyelesaian</th>
                    <th class="py-3 px-4 text-center">Aksi</th>
                </tr>
            </thead>
            <tbody class="divide-y divide-slate-100 dark:divide-slate-800 text-slate-700 dark:text-slate-300">
                ${[...t].sort((e,r)=>new Date(r.createdAt||0)-new Date(e.createdAt||0)).map(e=>{const r=e.createdAt?new Date(e.createdAt).toLocaleDateString("id-ID",{day:"2-digit",month:"short",year:"numeric",hour:"2-digit",minute:"2-digit"}):"-",i=(e.items||[]).map(l=>`${l.qty}x ${c(l.name)}`).join(", ");let s='<span class="px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 text-[10px] font-bold">Lainnya</span>';return e.settlementMethod==="ap_deduction"?s='<span class="px-2 py-0.5 rounded-full bg-purple-100 text-purple-800 dark:bg-purple-950/60 dark:text-purple-300 text-[10px] font-bold"><i class="fa-solid fa-file-invoice-dollar mr-1"></i>Potong Hutang PO</span>':e.settlementMethod==="cash_refund"&&(s='<span class="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300 text-[10px] font-bold"><i class="fa-solid fa-money-bill mr-1"></i>Pengembalian Kas</span>'),`
                        <tr class="hover:bg-slate-50/60 dark:hover:bg-slate-800/40 transition-colors">
                            <td class="py-3.5 px-4 font-bold">
                                <span class="font-mono text-amber-600 dark:text-amber-400 block">${c(e.id)}</span>
                                <span class="text-[10px] font-normal text-slate-400 block">${r}</span>
                            </td>
                            <td class="py-3.5 px-4 font-bold text-slate-800 dark:text-white">
                                ${c(e.supplierName||"Pemasok Toko")}
                            </td>
                            <td class="py-3.5 px-4 font-mono font-semibold text-slate-600 dark:text-slate-400">
                                ${c(e.poId||"-")}
                            </td>
                            <td class="py-3.5 px-4 max-w-xs">
                                <p class="truncate font-medium text-slate-600 dark:text-slate-300" title="${c(i)}">${c(i||"-")}</p>
                                <span class="text-[10px] text-slate-400">${e.items?e.items.length:0} macam barang</span>
                            </td>
                            <td class="py-3.5 px-4 text-right font-black text-amber-600 dark:text-amber-400">
                                ${g(e.totalClaim||0)}
                            </td>
                            <td class="py-3.5 px-4">
                                ${s}
                            </td>
                            <td class="py-3.5 px-4 text-center">
                                <button type="button" onclick="window.printVendorReturnA4('${c(e.id)}')" title="Cetak Surat Pengembalian Barang" class="w-7 h-7 rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 flex items-center justify-center transition-all cursor-pointer active:scale-90 mx-auto">
                                    <i class="fa-solid fa-print text-xs text-amber-500"></i>
                                </button>
                            </td>
                        </tr>
                    `}).join("")}
            </tbody>
        </table>
    `},W=(t=null)=>{m=null,f=[];const a=u("modal-sales-return"),e=u("modal-sales-return-box");if(!a||!e)return;const r=u("sales-return-order-search");r&&(r.value=t||"");const i=u("sales-return-order-content");i&&(i.innerHTML=""),N(a,e),typeof window.pushModalHistory=="function"&&window.pushModalHistory("salesReturn"),t&&L(t)},j=(t=!1)=>{const a=u("modal-sales-return"),e=u("modal-sales-return-box");if(!a||!e)return;const r=()=>{D(a,e),m=null,f=[]};typeof window.requestCloseModal=="function"?window.requestCloseModal("salesReturn",t,r):r()},L=async t=>{const a=(t||"").trim();if(!a){h("Masukkan nomor struk kasir atau Order ID");return}I("Mencari data transaksi...");try{let e=(n.orders||[]).find(r=>String(r.orderId)===a||String(r.id)===a);if(!e&&typeof firebase<"u"){const r=await firebase.firestore().collection("freshmart_orders").doc(a).get();r.exists&&(e={id:r.id,...r.data()})}if(R(),!e){h("Pesanan tidak ditemukan. Periksa kembali nomor nota!");return}m=e,X(e)}catch(e){R(),console.error("Error mencari order untuk retur:",e),h("Gagal memuat transaksi: "+(e.message||""))}},X=t=>{const a=u("sales-return-order-content");if(!a)return;const e=t.dateString||(t.createdAt?new Date(t.createdAt).toLocaleString("id-ID"):"-"),r=t.customer?.name||t.customerName||"Pelanggan Umum",i=t.source==="pos"?"Kasir POS":"Website Online",s=(n.salesReturns||[]).filter(o=>String(o.orderId)===String(t.orderId||t.id)),l={};s.forEach(o=>{(o.items||[]).forEach(p=>{const w=`${p.id}_${p.variantName||""}`;l[w]=(l[w]||0)+(parseFloat(p.qty)||0)})}),f=(t.items||[]).map((o,p)=>{const w=`${o.id}_${o.variantName||""}`,d=parseFloat(o.qty)||0,k=l[w]||0,v=Math.max(0,parseFloat((d-k).toFixed(3)));return{index:p,id:o.id,sku:o.sku||"",name:o.name||"Produk",variantName:o.variantName||"",price:parseFloat(o.price)||0,boughtQty:d,alreadyReturned:k,maxReturnable:v,returnQty:0,reason:"Kelebihan Proyek / Sisa Bangunan",condition:"good"}}),a.innerHTML=`
        <!-- Order Header Summary -->
        <div class="p-3.5 rounded-2xl bg-indigo-50/70 dark:bg-indigo-950/30 border border-indigo-200/80 dark:border-indigo-900/50 space-y-1">
            <div class="flex items-center justify-between text-xs font-bold">
                <span class="text-indigo-900 dark:text-indigo-200"><i class="fa-solid fa-receipt mr-1"></i> No. Nota: ${c(t.orderId||t.id)}</span>
                <span class="text-indigo-600 dark:text-indigo-400 font-normal text-[11px]">${e}</span>
            </div>
            <div class="flex items-center justify-between text-[11px] text-slate-600 dark:text-slate-400">
                <span>Pelanggan: <b class="text-slate-800 dark:text-white">${c(r)}</b> (${i})</span>
                <span>Total Belanja: <b class="text-slate-800 dark:text-white">${g(t.payment?.grandTotal||t.total||0)}</b></span>
            </div>
        </div>

        <!-- Items Checklist -->
        <div class="space-y-3 pt-2">
            <h4 class="text-xs font-black uppercase tracking-wider text-slate-500">Pilih Barang yang Diretur</h4>
            <div class="space-y-2.5">
                ${f.map((o,p)=>`
                    <div class="p-3.5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-3 shadow-2xs">
                        <div class="flex items-start justify-between gap-3">
                            <div>
                                <h5 class="font-bold text-xs text-slate-800 dark:text-white">${c(o.name)}</h5>
                                ${o.variantName?`<span class="inline-block mt-0.5 px-2 py-0.5 rounded-md bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 text-[10px] font-bold">${c(o.variantName)}</span>`:""}
                                <span class="text-[11px] text-slate-500 block mt-0.5">Harga: <b>${g(o.price)}</b> &middot; Beli: <b>${o.boughtQty}</b> unit (Sudah retur: ${o.alreadyReturned})</span>
                            </div>
                            <div class="text-right">
                                <label class="text-[10px] font-bold text-slate-400 block mb-1">Qty Retur (Maks ${o.maxReturnable}):</label>
                                <div class="inline-flex items-center border border-slate-300 dark:border-slate-700 rounded-xl overflow-hidden">
                                    <input type="number" step="any" min="0" max="${o.maxReturnable}" value="${o.returnQty}" oninput="window.handleReturnQtyChange(${p}, this.value)" class="w-16 p-1 text-center font-bold text-xs bg-slate-50 dark:bg-slate-800 focus:outline-none">
                                </div>
                            </div>
                        </div>

                        <!-- Kondisi & Alasan (Aktif jika returnQty > 0) -->
                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 border-t border-slate-100 dark:border-slate-800/80 text-[11px]">
                            <div>
                                <label class="block text-[10px] font-bold text-slate-400 mb-0.5">Alasan Pengembalian:</label>
                                <select onchange="window.handleReturnReasonChange(${p}, this.value)" class="w-full p-1.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-200 font-medium">
                                    <option value="Kelebihan Proyek / Sisa Bangunan">Kelebihan Proyek / Sisa Bangunan</option>
                                    <option value="Salah Ukuran / Salah Beli">Salah Ukuran / Salah Beli</option>
                                    <option value="Cacat Fisik / Kemasan Rusak">Cacat Fisik / Kemasan Rusak</option>
                                    <option value="Keluhan Kualitas Barang">Keluhan Kualitas Barang</option>
                                    <option value="Lainnya">Lainnya</option>
                                </select>
                            </div>
                            <div>
                                <label class="block text-[10px] font-bold text-slate-400 mb-0.5">Kondisi &amp; Alokasi Stok:</label>
                                <select onchange="window.handleReturnConditionChange(${p}, this.value)" class="w-full p-1.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-200 font-bold">
                                    <option value="good">Kondisi Baik (Kembali ke Rak Toko)</option>
                                    <option value="damaged">Cacat/Rusak (Masuk Karantina Rusak)</option>
                                </select>
                            </div>
                        </div>
                    </div>
                `).join("")}
            </div>
        </div>

        <!-- Opsi Penyelesaian Kompensasi & Ringkasan -->
        <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/80 space-y-3">
            <h4 class="text-xs font-black uppercase tracking-wider text-slate-700 dark:text-slate-300">Penyelesaian Pengembalian Dana / Kompensasi</h4>
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-2">
                <label class="p-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 cursor-pointer flex items-center gap-2 text-xs font-bold hover:border-indigo-500">
                    <input type="radio" name="sales_refund_method" value="cash" checked onchange="window.recalcSalesReturnSummary()">
                    <span><i class="fa-solid fa-money-bill-wave text-emerald-500 mr-1"></i> Tunai (Kas Laci)</span>
                </label>
                <label class="p-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 cursor-pointer flex items-center gap-2 text-xs font-bold hover:border-indigo-500">
                    <input type="radio" name="sales_refund_method" value="credit" onchange="window.recalcSalesReturnSummary()">
                    <span><i class="fa-solid fa-wallet text-blue-500 mr-1"></i> Store Credit</span>
                </label>
                <label class="p-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 cursor-pointer flex items-center gap-2 text-xs font-bold hover:border-indigo-500">
                    <input type="radio" name="sales_refund_method" value="exchange" onchange="window.recalcSalesReturnSummary()">
                    <span><i class="fa-solid fa-repeat text-purple-500 mr-1"></i> Tukar Barang</span>
                </label>
            </div>

            <div>
                <label class="block text-[10px] font-bold text-slate-400 mb-1">Catatan Tambahan / Keterangan Toko:</label>
                <input type="text" id="sales-return-notes" placeholder="Misal: Barang dibuka di depan kasir, nota asli dilampirkan" class="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs">
            </div>

            <!-- Live Subtotal Refund -->
            <div class="pt-2 border-t border-slate-200 dark:border-slate-700 flex items-center justify-between">
                <span class="text-xs font-bold text-slate-600 dark:text-slate-300">Total Nilai Pengembalian:</span>
                <span id="sales-return-grand-total" class="text-base font-black text-rose-600 dark:text-rose-400">Rp 0</span>
            </div>
        </div>
    `,A()},z=(t,a)=>{if(!f[t])return;const e=Math.max(0,Math.min(f[t].maxReturnable,parseFloat(a)||0));f[t].returnQty=e,A()},Y=(t,a)=>{f[t]&&(f[t].reason=a)},Z=(t,a)=>{f[t]&&(f[t].condition=a)},A=()=>{const t=f.reduce((e,r)=>e+r.returnQty*r.price,0),a=u("sales-return-grand-total");a&&(a.textContent=g(Math.round(t)))},ee=async()=>{if(!m){h("Pilih rujukan nota penjualan terlebih dahulu!");return}const t=f.filter(l=>l.returnQty>0);if(t.length===0){h("Pilih minimal 1 barang dengan kuantitas lebih dari 0 untuk diretur!");return}const a=Math.round(t.reduce((l,o)=>l+o.returnQty*o.price,0)),e=document.querySelector('input[name="sales_refund_method"]:checked'),r=e?e.value:"cash",i=u("sales-return-notes")?.value||"",s=`Konfirmasi proses retur penjualan senilai ${g(a)} dengan metode: ${r.toUpperCase()}?`;if(await C(s)){I("Memproses retur & merestorasi persediaan...");try{const l=new Date().toISOString(),o=Math.random().toString(36).substring(2,6).toUpperCase(),p=`RMA-SLS-${new Date().toISOString().slice(0,10).replace(/-/g,"")}-${o}`;t.forEach(d=>{const k=(n.products||[]).find(v=>String(v.id)===String(d.id));k&&E(k,{returnNumber:p,orderId:m.orderId||m.id,qty:d.returnQty,buyPrice:k.hpp||d.price,variantName:d.variantName,condition:d.condition})}),r==="cash"&&(Array.isArray(n.expenses)||(n.expenses=[]),n.expenses.unshift({id:`EXP-RET-${Date.now()}`,date:l.slice(0,10),createdAt:l,category:"Retur Penjualan",description:`Pengembalian Tunai Retur Nota ${m.orderId||m.id} (${p})`,amount:a,paymentSource:"kas_toko",source:"pos_cashier",receiptNumber:p}));const w={id:p,orderId:m.orderId||m.id,createdAt:l,customerName:m.customer?.name||m.customerName||"Pelanggan Umum",customerPhone:m.customer?.wa||m.customer?.phone||"",cashierName:m.cashierName||"Kasir Toko",source:m.source||"pos",items:t.map(d=>({id:d.id,sku:d.sku,name:d.name,variantName:d.variantName,qty:d.returnQty,soldPrice:d.price,subtotalRefund:Math.round(d.returnQty*d.price),reason:d.reason,condition:d.condition,restockLocation:d.condition==="good"?"store":"quarantine"})),totalRefund:a,refundMethod:r,status:"completed",notes:i};Array.isArray(n.salesReturns)||(n.salesReturns=[]),n.salesReturns.unshift(w),await V(["salesReturns","expenses","products"]),R(),j(),M(),h(`✅ Retur Penjualan ${p} berhasil diproses!`),await C("Cetak Nota Bukti Retur Penjualan sekarang?")&&O(p)}catch(l){R(),console.error("Error proses sales return:",l),h("Gagal memproses retur: "+(l.message||""))}}};let x=[];const te=(t=null,a=null)=>{x=[];const e=u("modal-vendor-return"),r=u("modal-vendor-return-box");!e||!r||(ae(t,a),N(e,r),typeof window.pushModalHistory=="function"&&window.pushModalHistory("vendorReturn"))},q=(t=!1)=>{const a=u("modal-vendor-return"),e=u("modal-vendor-return-box");if(!a||!e)return;const r=()=>{D(a,e),x=[]};typeof window.requestCloseModal=="function"?window.requestCloseModal("vendorReturn",t,r):r()},ae=(t=null,a=null)=>{const e=u("vendor-return-modal-content");if(!e)return;const r=n.suppliers||[],i=n.purchases||[];e.innerHTML=`
        <div class="space-y-4">
            <!-- Pilihan Pemasok & PO -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                    <label class="block text-[11px] font-bold text-slate-700 dark:text-slate-300 mb-1">Pilih Rekanan Supplier:</label>
                    <select id="vendor-return-supplier-select" onchange="window.handleVendorSupplierChange(this.value)" class="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs font-bold text-slate-800 dark:text-white">
                        <option value="">-- Pilih Supplier Pemasok --</option>
                        ${r.map(s=>`<option value="${c(s.id)}" ${String(s.id)===String(t)?"selected":""}>${c(s.name)}</option>`).join("")}
                    </select>
                </div>
                <div>
                    <label class="block text-[11px] font-bold text-slate-700 dark:text-slate-300 mb-1">Rujukan PO Kulakan (Opsional):</label>
                    <select id="vendor-return-po-select" class="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs font-semibold text-slate-800 dark:text-white">
                        <option value="">-- Tidak Terikat PO Khusus --</option>
                        ${i.map(s=>`<option value="${c(s.id)}" ${String(s.id)===String(a)?"selected":""}>${c(s.poNumber||s.id)} - ${g(s.totalPrice||0)}</option>`).join("")}
                    </select>
                </div>
            </div>

            <!-- Tambah Barang yang Diretur -->
            <div class="space-y-2">
                <div class="flex items-center justify-between">
                    <h4 class="text-xs font-black uppercase tracking-wider text-slate-700 dark:text-slate-300">Daftar Barang yang Dikembalikan</h4>
                    <button type="button" onclick="window.addVendorReturnItemRow()" class="px-2.5 py-1 rounded-lg bg-indigo-50 hover:bg-indigo-100 dark:bg-indigo-950/60 dark:hover:bg-indigo-900/60 text-indigo-600 dark:text-indigo-400 font-bold text-[11px] flex items-center gap-1 cursor-pointer">
                        <i class="fa-solid fa-plus text-[10px]"></i> Tambah Barang
                    </button>
                </div>
                <div id="vendor-return-items-list" class="space-y-2.5">
                    <!-- Dinamis terisi lewat addVendorReturnItemRow -->
                </div>
            </div>

            <!-- Metode Kompensasi Pemasok -->
            <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/80 space-y-3">
                <h4 class="text-xs font-black uppercase tracking-wider text-slate-700 dark:text-slate-300">Penyelesaian Finansial Pemasok</h4>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    <label class="p-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 cursor-pointer flex items-center gap-2 text-xs font-bold hover:border-amber-500">
                        <input type="radio" name="vendor_settlement_method" value="ap_deduction" checked onchange="window.recalcVendorReturnSummary()">
                        <span><i class="fa-solid fa-file-invoice-dollar text-purple-500 mr-1"></i> Potong Hutang PO (AP Deduction)</span>
                    </label>
                    <label class="p-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 cursor-pointer flex items-center gap-2 text-xs font-bold hover:border-amber-500">
                        <input type="radio" name="vendor_settlement_method" value="cash_refund" onchange="window.recalcVendorReturnSummary()">
                        <span><i class="fa-solid fa-money-bill-wave text-emerald-500 mr-1"></i> Pengembalian Kas / Transfer</span>
                    </label>
                </div>

                <div>
                    <label class="block text-[10px] font-bold text-slate-400 mb-1">Catatan Serah Terima / Nomor Resi Ekspedisi:</label>
                    <input type="text" id="vendor-return-notes" placeholder="Misal: Diserahkan ke supir PT Semen Gresik, bukti tanda terima terlampir" class="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs">
                </div>

                <div class="pt-2 border-t border-slate-200 dark:border-slate-700 flex items-center justify-between">
                    <span class="text-xs font-bold text-slate-600 dark:text-slate-300">Total Klaim Retur Supplier:</span>
                    <span id="vendor-return-grand-total" class="text-base font-black text-amber-600 dark:text-amber-400">Rp 0</span>
                </div>
            </div>
        </div>
    `,_()},re=t=>{const a=u("vendor-return-po-select");if(!a)return;const e=(n.purchases||[]).filter(r=>!t||String(r.supplierId)===String(t));a.innerHTML=`
        <option value="">-- Tidak Terikat PO Khusus --</option>
        ${e.map(r=>`<option value="${c(r.id)}">${c(r.poNumber||r.id)} - Sisa Hutang: ${g(r.remainingDebt||0)}</option>`).join("")}
    `},_=()=>{const t=u("vendor-return-items-list");if(!t)return;const a=x.length;x.push({productId:"",variantName:"",qty:1,buyPrice:0,fromLocation:"store",reason:"Barang Cacat Pabrik"});const e=n.products||[],r=document.createElement("div");r.id=`vendor-item-row-${a}`,r.className="p-3 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 space-y-2 shadow-2xs",r.innerHTML=`
        <div class="flex items-center justify-between gap-2">
            <span class="text-[11px] font-black text-slate-400">#${a+1}</span>
            <button type="button" onclick="window.removeVendorReturnItemRow(${a})" class="w-6 h-6 rounded-lg text-slate-400 hover:text-rose-500 flex items-center justify-center cursor-pointer">
                <i class="fa-solid fa-trash text-xs"></i>
            </button>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
            <div>
                <label class="block text-[10px] font-bold text-slate-400 mb-0.5">Pilih Produk:</label>
                <select onchange="window.handleVendorItemProductSelect(${a}, this.value)" class="w-full p-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs font-bold text-slate-800 dark:text-white">
                    <option value="">-- Pilih Barang --</option>
                    ${e.map(i=>`<option value="${c(i.id)}">${c(i.name)} (Stok: ${i.stock})</option>`).join("")}
                </select>
            </div>
            <div class="grid grid-cols-2 gap-2">
                <div>
                    <label class="block text-[10px] font-bold text-slate-400 mb-0.5">Jumlah (Qty):</label>
                    <input type="number" step="any" min="0.01" value="1" oninput="window.handleVendorItemQtyChange(${a}, this.value)" class="w-full p-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs font-bold text-center">
                </div>
                <div>
                    <label class="block text-[10px] font-bold text-slate-400 mb-0.5">Harga Modal (Rp):</label>
                    <input type="number" id="vendor-item-price-${a}" value="0" oninput="window.handleVendorItemPriceChange(${a}, this.value)" class="w-full p-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs font-bold text-right">
                </div>
            </div>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] pt-1 border-t border-slate-100 dark:border-slate-800">
            <div>
                <label class="block text-[10px] font-bold text-slate-400 mb-0.5">Ambil dari Lokasi:</label>
                <select onchange="window.handleVendorItemLocationChange(${a}, this.value)" class="w-full p-1.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs">
                    <option value="store">Rak Toko (storeStock)</option>
                    <option value="warehouse">Gudang Belakang (warehouseStock)</option>
                </select>
            </div>
            <div>
                <label class="block text-[10px] font-bold text-slate-400 mb-0.5">Alasan Retur Supplier:</label>
                <select onchange="window.handleVendorItemReasonChange(${a}, this.value)" class="w-full p-1.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs">
                    <option value="Barang Cacat Pabrik">Barang Cacat Pabrik</option>
                    <option value="Kemasan Rusak / Bocor">Kemasan Rusak / Bocor</option>
                    <option value="Kadaluarsa / Expired">Kadaluarsa / Expired</option>
                    <option value="Salah Kirim Distributor">Salah Kirim Distributor</option>
                </select>
            </div>
        </div>
    `,t.appendChild(r)},se=t=>{const a=u(`vendor-item-row-${t}`);a&&a.remove(),x[t]&&(x[t].removed=!0),P()},ne=(t,a)=>{if(!x[t])return;x[t].productId=a;const e=(n.products||[]).find(r=>String(r.id)===String(a));if(e){const r=parseFloat(e.hpp)||0;x[t].buyPrice=r;const i=u(`vendor-item-price-${t}`);i&&(i.value=r)}P()},oe=(t,a)=>{x[t]&&(x[t].qty=parseFloat(a)||0),P()},le=(t,a)=>{x[t]&&(x[t].buyPrice=parseFloat(a)||0),P()},de=(t,a)=>{x[t]&&(x[t].fromLocation=a)},ie=(t,a)=>{x[t]&&(x[t].reason=a)},P=()=>{const t=x.filter(e=>!e.removed&&e.productId&&e.qty>0).reduce((e,r)=>e+r.qty*r.buyPrice,0),a=u("vendor-return-grand-total");a&&(a.textContent=g(Math.round(t)))},ce=async()=>{const a=u("vendor-return-supplier-select")?.value;if(!a){h("Pilih rekanan supplier terlebih dahulu!");return}const e=(n.suppliers||[]).find(d=>String(d.id)===String(a)),r=x.filter(d=>!d.removed&&d.productId&&d.qty>0);if(r.length===0){h("Pilih minimal 1 barang dengan kuantitas valid untuk diretur!");return}const i=u("vendor-return-po-select")?.value||null,s=document.querySelector('input[name="vendor_settlement_method"]:checked'),l=s?s.value:"ap_deduction",o=u("vendor-return-notes")?.value||"",p=Math.round(r.reduce((d,k)=>d+k.qty*k.buyPrice,0)),w=`Kirim retur barang ke ${e?.name||"Supplier"} senilai klaim ${g(p)}?`;if(await C(w)){I("Memproses pengembalian barang ke supplier...");try{const d=new Date().toISOString(),k=Math.random().toString(36).substring(2,6).toUpperCase(),v=`RMA-VND-${new Date().toISOString().slice(0,10).replace(/-/g,"")}-${k}`;if(r.forEach(b=>{const y=(n.products||[]).find(T=>String(T.id)===String(b.productId));y&&U(y,{qty:b.qty,variantName:b.variantName,fromLocation:b.fromLocation})}),l==="ap_deduction"&&i){const b=(n.purchases||[]).find(y=>String(y.id)===String(i));b&&b.remainingDebt&&(b.remainingDebt=Math.max(0,Math.round(b.remainingDebt-p)),b.remainingDebt===0&&(b.paymentStatus="paid"))}const F={id:v,supplierId:a,supplierName:e?.name||"Pemasok Toko",poId:i,createdAt:d,items:r.map(b=>{const y=(n.products||[]).find(T=>String(T.id)===String(b.productId));return{id:b.productId,name:y?y.name:"Produk",qty:b.qty,buyPrice:b.buyPrice,subtotalCost:Math.round(b.qty*b.buyPrice),fromLocation:b.fromLocation,reason:b.reason}}),totalClaim:p,settlementMethod:l,status:"completed",notes:o};Array.isArray(n.vendorReturns)||(n.vendorReturns=[]),n.vendorReturns.unshift(F),await V(["vendorReturns","purchases","products"]),R(),q(),M(),h(`✅ Retur Supplier ${v} berhasil dicatat!`),await C("Cetak Surat Pengembalian Barang ke Supplier sekarang?")&&Q(v)}catch(d){R(),console.error("Error proses vendor return:",d),h("Gagal memproses retur supplier: "+(d.message||""))}}},O=t=>{const a=(n.salesReturns||[]).find(e=>e.id===t);if(!a)return h("Data retur tidak ditemukan!");if(typeof window.executePrintRawBTData=="function"){const e=n.store?.name||"TOKO PUTRI",r=n.store?.address||"",i=n.store?.wa||"";let s=`${e}
${r}
Telp/WA: ${i}
`;s+=`--------------------------------
`,s+=`NOTA RETUR PENJUALAN
`,s+=`No Retur: ${a.id}
`,s+=`No Nota : ${a.orderId||"-"}
`,s+=`Tanggal : ${new Date(a.createdAt).toLocaleString("id-ID")}
`,s+=`Konsumen: ${a.customerName||"Umum"}
`,s+=`--------------------------------
`,(a.items||[]).forEach(l=>{s+=`${l.name}
`,s+=`  ${l.qty} x ${g(l.soldPrice)} = ${g(l.subtotalRefund)}
`,s+=`  [${l.reason}]
`}),s+=`--------------------------------
`,s+=`TOTAL RETUR: ${g(a.totalRefund)}
`,s+=`METODE     : ${a.refundMethod.toUpperCase()}
`,s+=`--------------------------------
`,s+=`Barang telah diverifikasi toko.
`,s+=`Terima kasih atas kerja samanya.


`,window.executePrintRawBTData(s)}else window.printSalesReturnA4(t)},ue=t=>{if(!(n.salesReturns||[]).find(e=>e.id===t))return h("Data retur tidak ditemukan!");typeof window.openDocPreview=="function"?window.openDocPreview("sales_return",{returnId:t}):window.print()},Q=t=>{if(!(n.vendorReturns||[]).find(e=>e.id===t))return h("Data retur supplier tidak ditemukan!");typeof window.openDocPreview=="function"?window.openDocPreview("vendor_return",{returnId:t}):window.print()};typeof window<"u"&&(window.renderReturnsView=M,window.switchReturnsTab=G,window.handleReturnsSearch=J,window.openSalesReturnModal=W,window.closeSalesReturnModal=j,window.searchOrderForReturn=L,window.handleReturnQtyChange=z,window.handleReturnReasonChange=Y,window.handleReturnConditionChange=Z,window.recalcSalesReturnSummary=A,window.submitSalesReturn=ee,window.openVendorReturnModal=te,window.closeVendorReturnModal=q,window.handleVendorSupplierChange=re,window.addVendorReturnItemRow=_,window.removeVendorReturnItemRow=se,window.handleVendorItemProductSelect=ne,window.handleVendorItemQtyChange=oe,window.handleVendorItemPriceChange=le,window.handleVendorItemLocationChange=de,window.handleVendorItemReasonChange=ie,window.recalcVendorReturnSummary=P,window.submitVendorReturn=ce,window.printSalesReturnThermal=O,window.printSalesReturnA4=ue,window.printVendorReturnA4=Q);export{_ as addVendorReturnItemRow,j as closeSalesReturnModal,q as closeVendorReturnModal,Z as handleReturnConditionChange,z as handleReturnQtyChange,Y as handleReturnReasonChange,J as handleReturnsSearch,de as handleVendorItemLocationChange,le as handleVendorItemPriceChange,ne as handleVendorItemProductSelect,oe as handleVendorItemQtyChange,ie as handleVendorItemReasonChange,re as handleVendorSupplierChange,W as openSalesReturnModal,te as openVendorReturnModal,ue as printSalesReturnA4,O as printSalesReturnThermal,Q as printVendorReturnA4,A as recalcSalesReturnSummary,P as recalcVendorReturnSummary,se as removeVendorReturnItemRow,M as renderReturnsView,L as searchOrderForReturn,ee as submitSalesReturn,ce as submitVendorReturn,G as switchReturnsTab};
