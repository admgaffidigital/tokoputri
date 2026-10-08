import{e as u,a as d,i as c,f as g,o as V,k as f,b as Q,l as I,n as R,G as C,v as D}from"./module-print-B46u5dXP.js";import{M as E,p as j,N as U}from"./module-pos-C4P3NrE3.js";import"./vendor-firebase-core-D2OF5R23.js";import"./vendor-firebase-db-BIUZcnOd.js";import"./module-member-DMlLXnT8.js";import"./module-faq-DWvp31M1.js";let P="sales",S="",x=null,k=[];const M=()=>{if(!u("admin-content"))return;Array.isArray(d.salesReturns)||(d.salesReturns=[]),Array.isArray(d.vendorReturns)||(d.vendorReturns=[]);const a=d.salesReturns.reduce((o,s)=>o+(parseFloat(s.totalRefund)||0),0),e=d.salesReturns.length,r=d.vendorReturns.reduce((o,s)=>o+(parseFloat(s.totalClaim)||0),0),l=(d.products||[]).reduce((o,s)=>{let m=parseFloat(s.damagedStock)||0;return Array.isArray(s.variants)&&(m+=s.variants.reduce((v,i)=>v+(parseFloat(i.damagedStock)||0),0)),o+m},0),n=`
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
                    <span class="text-lg sm:text-xl font-black text-purple-600 dark:text-purple-400">${l} <span class="text-xs font-semibold text-slate-400">Unit</span></span>
                    <span class="text-[10px] text-slate-400 block mt-0.5">Menunggu klaim distributor</span>
                </div>
            </div>

            <!-- Tab Switcher & Search Bar -->
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-white dark:bg-slate-900 p-3 rounded-2xl border border-slate-200/90 dark:border-slate-800 shadow-2xs">
                <!-- Tab Buttons -->
                <div class="flex items-center gap-1.5 p-1 bg-slate-100 dark:bg-slate-800/80 rounded-xl">
                    <button type="button" onclick="window.switchReturnsTab('sales')" class="px-3.5 py-1.5 rounded-lg text-xs font-extrabold transition-all cursor-pointer ${P==="sales"?"bg-white dark:bg-slate-900 text-indigo-600 dark:text-indigo-400 shadow-xs":"text-slate-500 hover:text-slate-800 dark:hover:text-white"}">
                        <i class="fa-solid fa-basket-shopping mr-1"></i> Retur Penjualan (${d.salesReturns.length})
                    </button>
                    <button type="button" onclick="window.switchReturnsTab('vendor')" class="px-3.5 py-1.5 rounded-lg text-xs font-extrabold transition-all cursor-pointer ${P==="vendor"?"bg-white dark:bg-slate-900 text-indigo-600 dark:text-indigo-400 shadow-xs":"text-slate-500 hover:text-slate-800 dark:hover:text-white"}">
                        <i class="fa-solid fa-truck-ramp-box mr-1"></i> Retur Supplier (${d.vendorReturns.length})
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
                    ${P==="sales"?B():K()}
                </div>
            </div>
        </div>
    `;Q("admin-content",n)},G=t=>{P=t,M()},W=t=>{S=(t||"").trim().toLowerCase();const a=u("returns-table-wrapper");a&&(a.innerHTML=P==="sales"?B():K())},B=()=>{const t=(d.salesReturns||[]).filter(e=>{if(!S)return!0;const r=S;return e.id&&e.id.toLowerCase().includes(r)||e.orderId&&e.orderId.toLowerCase().includes(r)||e.customerName&&e.customerName.toLowerCase().includes(r)||e.customerPhone&&e.customerPhone.includes(r)});return t.length===0?`
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
                ${[...t].sort((e,r)=>new Date(r.createdAt||0)-new Date(e.createdAt||0)).map(e=>{const r=e.createdAt?new Date(e.createdAt).toLocaleDateString("id-ID",{day:"2-digit",month:"short",year:"numeric",hour:"2-digit",minute:"2-digit"}):"-",l=(e.items||[]).map(o=>`${o.qty}x ${c(o.name)}${o.variantName?` [${c(o.variantName)}]`:""}`).join(", ");let n='<span class="px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-[10px] font-bold">Lainnya</span>';return e.refundMethod==="cash"?n='<span class="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300 text-[10px] font-bold"><i class="fa-solid fa-money-bill mr-1"></i>Tunai (Kas)</span>':e.refundMethod==="credit"?n='<span class="px-2 py-0.5 rounded-full bg-blue-100 text-blue-800 dark:bg-blue-950/60 dark:text-blue-300 text-[10px] font-bold"><i class="fa-solid fa-wallet mr-1"></i>Store Credit</span>':e.refundMethod==="exchange"&&(n='<span class="px-2 py-0.5 rounded-full bg-purple-100 text-purple-800 dark:bg-purple-950/60 dark:text-purple-300 text-[10px] font-bold"><i class="fa-solid fa-repeat mr-1"></i>Tukar Barang</span>'),`
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
                                <p class="truncate font-medium text-slate-600 dark:text-slate-300" title="${c(l)}">${c(l||"-")}</p>
                                <span class="text-[10px] text-slate-400">${e.items?e.items.length:0} macam barang</span>
                            </td>
                            <td class="py-3.5 px-4 text-right font-black text-rose-600 dark:text-rose-400">
                                ${g(e.totalRefund||0)}
                            </td>
                            <td class="py-3.5 px-4">
                                ${n}
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
    `},K=()=>{const t=(d.vendorReturns||[]).filter(e=>{if(!S)return!0;const r=S;return e.id&&e.id.toLowerCase().includes(r)||e.supplierName&&e.supplierName.toLowerCase().includes(r)||e.poId&&e.poId.toLowerCase().includes(r)});return t.length===0?`
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
                ${[...t].sort((e,r)=>new Date(r.createdAt||0)-new Date(e.createdAt||0)).map(e=>{const r=e.createdAt?new Date(e.createdAt).toLocaleDateString("id-ID",{day:"2-digit",month:"short",year:"numeric",hour:"2-digit",minute:"2-digit"}):"-",l=(e.items||[]).map(o=>`${o.qty}x ${c(o.name)}${o.variantName?` [${c(o.variantName)}]`:""}`).join(", ");let n='<span class="px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 text-[10px] font-bold">Lainnya</span>';return e.settlementMethod==="ap_deduction"?n='<span class="px-2 py-0.5 rounded-full bg-purple-100 text-purple-800 dark:bg-purple-950/60 dark:text-purple-300 text-[10px] font-bold"><i class="fa-solid fa-file-invoice-dollar mr-1"></i>Potong Hutang PO</span>':e.settlementMethod==="cash_refund"&&(n='<span class="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300 text-[10px] font-bold"><i class="fa-solid fa-money-bill mr-1"></i>Pengembalian Kas</span>'),`
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
                                <p class="truncate font-medium text-slate-600 dark:text-slate-300" title="${c(l)}">${c(l||"-")}</p>
                                <span class="text-[10px] text-slate-400">${e.items?e.items.length:0} macam barang</span>
                            </td>
                            <td class="py-3.5 px-4 text-right font-black text-amber-600 dark:text-amber-400">
                                ${g(e.totalClaim||0)}
                            </td>
                            <td class="py-3.5 px-4">
                                ${n}
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
    `},J=(t=null)=>{x=null,k=[];const a=u("modal-sales-return"),e=u("modal-sales-return-box");if(!a||!e)return;const r=u("sales-return-order-search");r&&(r.value=t||"");const l=u("sales-return-order-content");l&&(l.innerHTML=""),V(a,e),typeof window.pushModalHistory=="function"&&window.pushModalHistory("salesReturn"),t&&q(t)},L=(t=!1)=>{const a=u("modal-sales-return"),e=u("modal-sales-return-box");if(!a||!e)return;const r=()=>{D(a,e),x=null,k=[]};typeof window.requestCloseModal=="function"?window.requestCloseModal("salesReturn",t,r):r()},q=async t=>{const a=(t||"").trim();if(!a){f("Masukkan nomor struk kasir atau Order ID");return}I("Mencari data transaksi...");try{let e=(d.orders||[]).find(r=>String(r.orderId)===a||String(r.id)===a);if(!e&&typeof firebase<"u"){const r=await firebase.firestore().collection("freshmart_orders").doc(a).get();r.exists&&(e={id:r.id,...r.data()})}if(R(),!e){f("Pesanan tidak ditemukan. Periksa kembali nomor nota!");return}x=e,X(e)}catch(e){R(),console.error("Error mencari order untuk retur:",e),f("Gagal memuat transaksi: "+(e.message||""))}},X=t=>{const a=u("sales-return-order-content");if(!a)return;const e=t.dateString||(t.createdAt?new Date(t.createdAt).toLocaleString("id-ID"):"-"),r=t.customer?.name||t.customerName||"Pelanggan Umum",l=t.source==="pos"?"Kasir POS":"Website Online",n=(d.salesReturns||[]).filter(s=>String(s.orderId)===String(t.orderId||t.id)),o={};n.forEach(s=>{(s.items||[]).forEach(m=>{const v=`${m.id}_${m.variantName||""}`;o[v]=(o[v]||0)+(parseFloat(m.qty)||0)})}),k=(t.items||[]).map((s,m)=>{const v=`${s.id}_${s.variantName||""}`,i=parseFloat(s.qty)||0,h=o[v]||0,w=Math.max(0,parseFloat((i-h).toFixed(3)));return{index:m,id:s.id,sku:s.sku||"",name:s.name||"Produk",variantName:s.variantName||"",price:parseFloat(s.price)||0,boughtQty:i,alreadyReturned:h,maxReturnable:w,returnQty:0,reason:"Kelebihan Proyek / Sisa Bangunan",condition:"good"}}),a.innerHTML=`
        <!-- Order Header Summary -->
        <div class="p-3.5 rounded-2xl bg-indigo-50/70 dark:bg-indigo-950/30 border border-indigo-200/80 dark:border-indigo-900/50 space-y-1">
            <div class="flex items-center justify-between text-xs font-bold">
                <span class="text-indigo-900 dark:text-indigo-200"><i class="fa-solid fa-receipt mr-1"></i> No. Nota: ${c(t.orderId||t.id)}</span>
                <span class="text-indigo-600 dark:text-indigo-400 font-normal text-[11px]">${e}</span>
            </div>
            <div class="flex items-center justify-between text-[11px] text-slate-600 dark:text-slate-400">
                <span>Pelanggan: <b class="text-slate-800 dark:text-white">${c(r)}</b> (${l})</span>
                <span>Total Belanja: <b class="text-slate-800 dark:text-white">${g(t.payment?.grandTotal||t.total||0)}</b></span>
            </div>
        </div>

        <!-- Items Checklist -->
        <div class="space-y-3 pt-2">
            <h4 class="text-xs font-black uppercase tracking-wider text-slate-500">Pilih Barang yang Diretur</h4>
            <div class="space-y-2.5">
                ${k.map((s,m)=>`
                    <div class="p-3.5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-3 shadow-2xs">
                        <div class="flex items-start justify-between gap-3">
                            <div>
                                <h5 class="font-bold text-xs text-slate-800 dark:text-white">${c(s.name)}</h5>
                                ${s.variantName?`<span class="inline-block mt-0.5 px-2 py-0.5 rounded-md bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 text-[10px] font-bold">${c(s.variantName)}</span>`:""}
                                <span class="text-[11px] text-slate-500 block mt-0.5">Harga: <b>${g(s.price)}</b> &middot; Beli: <b>${s.boughtQty}</b> unit (Sudah retur: ${s.alreadyReturned})</span>
                            </div>
                            <div class="text-right">
                                <label class="text-[10px] font-bold text-slate-400 block mb-1">Qty Retur (Maks ${s.maxReturnable}):</label>
                                <div class="inline-flex items-center border border-slate-300 dark:border-slate-700 rounded-xl overflow-hidden">
                                    <input type="number" step="any" min="0" max="${s.maxReturnable}" value="${s.returnQty}" oninput="window.handleReturnQtyChange(${m}, this.value)" class="w-16 p-1 text-center font-bold text-xs bg-slate-50 dark:bg-slate-800 focus:outline-none">
                                </div>
                            </div>
                        </div>

                        <!-- Kondisi & Alasan (Aktif jika returnQty > 0) -->
                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 border-t border-slate-100 dark:border-slate-800/80 text-[11px]">
                            <div>
                                <label class="block text-[10px] font-bold text-slate-400 mb-0.5">Alasan Pengembalian:</label>
                                <select onchange="window.handleReturnReasonChange(${m}, this.value)" class="w-full p-1.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-200 font-medium">
                                    <option value="Kelebihan Proyek / Sisa Bangunan">Kelebihan Proyek / Sisa Bangunan</option>
                                    <option value="Salah Ukuran / Salah Beli">Salah Ukuran / Salah Beli</option>
                                    <option value="Cacat Fisik / Kemasan Rusak">Cacat Fisik / Kemasan Rusak</option>
                                    <option value="Keluhan Kualitas Barang">Keluhan Kualitas Barang</option>
                                    <option value="Lainnya">Lainnya</option>
                                </select>
                            </div>
                            <div>
                                <label class="block text-[10px] font-bold text-slate-400 mb-0.5">Kondisi &amp; Alokasi Stok:</label>
                                <select onchange="window.handleReturnConditionChange(${m}, this.value)" class="w-full p-1.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-200 font-bold">
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
    `,A()},z=(t,a)=>{if(!k[t])return;const e=Math.max(0,Math.min(k[t].maxReturnable,parseFloat(a)||0));k[t].returnQty=e,A()},Y=(t,a)=>{k[t]&&(k[t].reason=a)},Z=(t,a)=>{k[t]&&(k[t].condition=a)},A=()=>{const t=k.reduce((e,r)=>e+r.returnQty*r.price,0),a=u("sales-return-grand-total");a&&(a.textContent=g(Math.round(t)))},ee=async()=>{if(!x){f("Pilih rujukan nota penjualan terlebih dahulu!");return}const t=k.filter(o=>o.returnQty>0);if(t.length===0){f("Pilih minimal 1 barang dengan kuantitas lebih dari 0 untuk diretur!");return}const a=Math.round(t.reduce((o,s)=>o+s.returnQty*s.price,0)),e=document.querySelector('input[name="sales_refund_method"]:checked'),r=e?e.value:"cash",l=u("sales-return-notes")?.value||"",n=`Konfirmasi proses retur penjualan senilai ${g(a)} dengan metode: ${r.toUpperCase()}?`;if(await C(n)){I("Memproses retur & merestorasi persediaan...");try{const o=new Date().toISOString(),s=Math.random().toString(36).substring(2,6).toUpperCase(),m=`RMA-SLS-${new Date().toISOString().slice(0,10).replace(/-/g,"")}-${s}`;t.forEach(i=>{const h=(d.products||[]).find(w=>String(w.id)===String(i.id));if(h){const w=i.variantName&&Array.isArray(h.variants)?h.variants.find(p=>p.name===i.variantName):null,N=w&&w.hpp?parseFloat(w.hpp):parseFloat(h.hpp)||i.price;E(h,{returnNumber:m,orderId:x.orderId||x.id,qty:i.returnQty,buyPrice:N,variantName:i.variantName,condition:i.condition})}}),r==="cash"&&(Array.isArray(d.expenses)||(d.expenses=[]),d.expenses.unshift({id:`EXP-RET-${Date.now()}`,date:o.slice(0,10),createdAt:o,category:"Retur Penjualan",description:`Pengembalian Tunai Retur Nota ${x.orderId||x.id} (${m})`,amount:a,paymentSource:"kas_toko",source:"pos_cashier",receiptNumber:m}));const v={id:m,orderId:x.orderId||x.id,createdAt:o,customerName:x.customer?.name||x.customerName||"Pelanggan Umum",customerPhone:x.customer?.wa||x.customer?.phone||"",cashierName:x.cashierName||"Kasir Toko",source:x.source||"pos",items:t.map(i=>({id:i.id,sku:i.sku,name:i.name,variantName:i.variantName,qty:i.returnQty,soldPrice:i.price,subtotalRefund:Math.round(i.returnQty*i.price),reason:i.reason,condition:i.condition,restockLocation:i.condition==="good"?"store":"quarantine"})),totalRefund:a,refundMethod:r,status:"completed",notes:l};Array.isArray(d.salesReturns)||(d.salesReturns=[]),d.salesReturns.unshift(v),await j(["salesReturns","expenses","products"]),R(),L(),M(),f(`✅ Retur Penjualan ${m} berhasil diproses!`),await C("Cetak Nota Bukti Retur Penjualan sekarang?")&&O(m)}catch(o){R(),console.error("Error proses sales return:",o),f("Gagal memproses retur: "+(o.message||""))}}};let b=[];const te=(t=null,a=null)=>{b=[];const e=u("modal-vendor-return"),r=u("modal-vendor-return-box");!e||!r||(ae(t,a),V(e,r),typeof window.pushModalHistory=="function"&&window.pushModalHistory("vendorReturn"))},F=(t=!1)=>{const a=u("modal-vendor-return"),e=u("modal-vendor-return-box");if(!a||!e)return;const r=()=>{D(a,e),b=[]};typeof window.requestCloseModal=="function"?window.requestCloseModal("vendorReturn",t,r):r()},ae=(t=null,a=null)=>{const e=u("vendor-return-modal-content");if(!e)return;const r=d.suppliers||[],l=d.purchases||[];e.innerHTML=`
        <div class="space-y-4">
            <!-- Pilihan Pemasok & PO -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                    <label class="block text-[11px] font-bold text-slate-700 dark:text-slate-300 mb-1">Pilih Rekanan Supplier:</label>
                    <select id="vendor-return-supplier-select" onchange="window.handleVendorSupplierChange(this.value)" class="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs font-bold text-slate-800 dark:text-white">
                        <option value="">-- Pilih Supplier Pemasok --</option>
                        ${r.map(n=>`<option value="${c(n.id)}" ${String(n.id)===String(t)?"selected":""}>${c(n.name)}</option>`).join("")}
                    </select>
                </div>
                <div>
                    <label class="block text-[11px] font-bold text-slate-700 dark:text-slate-300 mb-1">Rujukan PO Kulakan (Opsional):</label>
                    <select id="vendor-return-po-select" class="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs font-semibold text-slate-800 dark:text-white">
                        <option value="">-- Tidak Terikat PO Khusus --</option>
                        ${l.map(n=>`<option value="${c(n.id)}" ${String(n.id)===String(a)?"selected":""}>${c(n.poNumber||n.id)} - ${g(n.totalPrice||0)}</option>`).join("")}
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
    `,H()},re=t=>{const a=u("vendor-return-po-select");if(!a)return;const e=(d.purchases||[]).filter(r=>!t||String(r.supplierId)===String(t));a.innerHTML=`
        <option value="">-- Tidak Terikat PO Khusus --</option>
        ${e.map(r=>`<option value="${c(r.id)}">${c(r.poNumber||r.id)} - Sisa Hutang: ${g(r.remainingDebt||0)}</option>`).join("")}
    `},H=()=>{const t=u("vendor-return-items-list");if(!t)return;const a=b.length;b.push({productId:"",variantName:"",qty:1,buyPrice:0,fromLocation:"store",reason:"Barang Cacat Pabrik"});const e=d.products||[],r=document.createElement("div");r.id=`vendor-item-row-${a}`,r.className="p-3 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 space-y-2 shadow-2xs",r.innerHTML=`
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
                    ${e.map(l=>`<option value="${c(l.id)}">${c(l.name)} (Stok: ${l.stock}${Array.isArray(l.variants)&&l.variants.length>0?` &middot; ${l.variants.length} Varian`:""})</option>`).join("")}
                </select>
                <!-- Kontainer Pemilih Varian Spesifik (Dinamis jika produk memiliki varian) -->
                <div id="vendor-item-variant-box-${a}" class="hidden mt-1.5 p-2 rounded-xl bg-indigo-50/70 dark:bg-indigo-950/40 border border-indigo-200/80 dark:border-indigo-900/50"></div>
            </div>
            <div class="grid grid-cols-2 gap-2">
                <div>
                    <label class="block text-[10px] font-bold text-slate-400 mb-0.5">Jumlah (Qty):</label>
                    <input type="number" step="any" min="0.01" value="1" oninput="window.handleVendorItemQtyChange(${a}, this.value)" class="w-full p-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs font-bold text-center">
                </div>
                <div>
                    <label class="block text-[10px] font-bold text-slate-400 mb-0.5">Harga Modal / HPP (Rp):</label>
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
                    <option value="quarantine">Karantina Rusak (damagedStock)</option>
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
    `,t.appendChild(r)},ne=t=>{const a=u(`vendor-item-row-${t}`);a&&a.remove(),b[t]&&(b[t].removed=!0),$()},se=(t,a)=>{if(!b[t])return;b[t].productId=a;const e=(d.products||[]).find(l=>String(l.id)===String(a)),r=u(`vendor-item-variant-box-${t}`);if(e&&Array.isArray(e.variants)&&e.variants.length>0){const l=e.variants[0];b[t].variantName=l.name||"";const n=parseFloat(l.hpp)||parseFloat(e.hpp)||0;b[t].buyPrice=n,r&&(r.className="mt-1.5 p-2 rounded-xl bg-indigo-50/70 dark:bg-indigo-950/40 border border-indigo-200/80 dark:border-indigo-900/50 block space-y-1",r.innerHTML=`
                <div class="flex items-center justify-between">
                    <label class="block text-[10px] font-black text-indigo-700 dark:text-indigo-300">
                        <i class="fa-solid fa-layer-group mr-1"></i>Pilih Varian Spesifik:
                    </label>
                    <span class="text-[9.5px] font-semibold text-indigo-600 dark:text-indigo-400">${e.variants.length} Varian</span>
                </div>
                <select onchange="window.handleVendorItemVariantSelect(${t}, this.value)" class="w-full p-1.5 rounded-lg border border-indigo-300 dark:border-indigo-700 bg-white dark:bg-slate-900 text-xs font-bold text-slate-800 dark:text-white focus:outline-none">
                    ${e.variants.map(s=>{const m=s.storeStock!==void 0?s.storeStock:s.stock||0,v=s.warehouseStock!==void 0?s.warehouseStock:0,i=s.damagedStock||0,h=parseFloat(s.hpp)||parseFloat(e.hpp)||0;return`<option value="${c(s.name)}">${c(s.name)} (Rak: ${m}, Gudang: ${v}, Rusak: ${i} &middot; HPP: ${g(h)})</option>`}).join("")}
                </select>
            `);const o=u(`vendor-item-price-${t}`);o&&(o.value=n)}else if(b[t].variantName="",r&&(r.className="hidden",r.innerHTML=""),e){const l=parseFloat(e.hpp)||0;b[t].buyPrice=l;const n=u(`vendor-item-price-${t}`);n&&(n.value=l)}$()},oe=(t,a)=>{if(!b[t])return;b[t].variantName=a;const e=(d.products||[]).find(r=>String(r.id)===String(b[t].productId));if(e&&Array.isArray(e.variants)){const r=e.variants.find(l=>l.name===a);if(r){const l=parseFloat(r.hpp)||parseFloat(e.hpp)||0;b[t].buyPrice=l;const n=u(`vendor-item-price-${t}`);n&&(n.value=l)}}$()},le=(t,a)=>{b[t]&&(b[t].qty=parseFloat(a)||0),$()},de=(t,a)=>{b[t]&&(b[t].buyPrice=parseFloat(a)||0),$()},ie=(t,a)=>{b[t]&&(b[t].fromLocation=a)},ce=(t,a)=>{b[t]&&(b[t].reason=a)},$=()=>{const t=b.filter(e=>!e.removed&&e.productId&&e.qty>0).reduce((e,r)=>e+r.qty*r.buyPrice,0),a=u("vendor-return-grand-total");a&&(a.textContent=g(Math.round(t)))},ue=async()=>{const a=u("vendor-return-supplier-select")?.value;if(!a){f("Pilih rekanan supplier terlebih dahulu!");return}const e=(d.suppliers||[]).find(i=>String(i.id)===String(a)),r=b.filter(i=>!i.removed&&i.productId&&i.qty>0);if(r.length===0){f("Pilih minimal 1 barang dengan kuantitas valid untuk diretur!");return}const l=u("vendor-return-po-select")?.value||null,n=document.querySelector('input[name="vendor_settlement_method"]:checked'),o=n?n.value:"ap_deduction",s=u("vendor-return-notes")?.value||"",m=Math.round(r.reduce((i,h)=>i+h.qty*h.buyPrice,0)),v=`Kirim retur barang ke ${e?.name||"Supplier"} senilai klaim ${g(m)}?`;if(await C(v)){I("Memproses pengembalian barang ke supplier...");try{const i=new Date().toISOString(),h=Math.random().toString(36).substring(2,6).toUpperCase(),w=`RMA-VND-${new Date().toISOString().slice(0,10).replace(/-/g,"")}-${h}`;if(r.forEach(p=>{const y=(d.products||[]).find(T=>String(T.id)===String(p.productId));y&&U(y,{qty:p.qty,variantName:p.variantName,fromLocation:p.fromLocation})}),o==="ap_deduction"&&l){const p=(d.purchases||[]).find(y=>String(y.id)===String(l));p&&p.remainingDebt&&(p.remainingDebt=Math.max(0,Math.round(p.remainingDebt-m)),p.remainingDebt===0&&(p.paymentStatus="paid"))}const N={id:w,supplierId:a,supplierName:e?.name||"Pemasok Toko",poId:l,createdAt:i,items:r.map(p=>{const y=(d.products||[]).find(T=>String(T.id)===String(p.productId));return{id:p.productId,name:y?y.name:"Produk",variantName:p.variantName||"",sku:p.sku||y?.sku||"",qty:p.qty,buyPrice:p.buyPrice,subtotalClaim:Math.round(p.qty*p.buyPrice),subtotalCost:Math.round(p.qty*p.buyPrice),fromLocation:p.fromLocation,reason:p.reason}}),totalClaim:m,settlementMethod:o,status:"completed",notes:s};Array.isArray(d.vendorReturns)||(d.vendorReturns=[]),d.vendorReturns.unshift(N),await j(["vendorReturns","purchases","products"]),R(),F(),M(),f(`✅ Retur Supplier ${w} berhasil dicatat!`),await C("Cetak Surat Pengembalian Barang ke Supplier sekarang?")&&_(w)}catch(i){R(),console.error("Error proses vendor return:",i),f("Gagal memproses retur supplier: "+(i.message||""))}}},O=t=>{const a=(d.salesReturns||[]).find(e=>e.id===t);if(!a)return f("Data retur tidak ditemukan!");if(typeof window.executePrintRawBTData=="function"){const e=d.store?.name||"TOKO PUTRI",r=d.store?.address||"",l=d.store?.wa||"";let n=`${e}
${r}
Telp/WA: ${l}
`;n+=`--------------------------------
`,n+=`NOTA RETUR PENJUALAN
`,n+=`No Retur: ${a.id}
`,n+=`No Nota : ${a.orderId||"-"}
`,n+=`Tanggal : ${new Date(a.createdAt).toLocaleString("id-ID")}
`,n+=`Konsumen: ${a.customerName||"Umum"}
`,n+=`--------------------------------
`,(a.items||[]).forEach(o=>{n+=`${o.name}${o.variantName?` (${o.variantName})`:""}
`,n+=`  ${o.qty} x ${g(o.soldPrice)} = ${g(o.subtotalRefund)}
`,n+=`  [${o.reason}]
`}),n+=`--------------------------------
`,n+=`TOTAL RETUR: ${g(a.totalRefund)}
`,n+=`METODE     : ${a.refundMethod.toUpperCase()}
`,n+=`--------------------------------
`,n+=`Barang telah diverifikasi toko.
`,n+=`Terima kasih atas kerja samanya.


`,window.executePrintRawBTData(n)}else window.printSalesReturnA4(t)},pe=t=>{if(!(d.salesReturns||[]).find(e=>e.id===t))return f("Data retur tidak ditemukan!");typeof window.openDocPreview=="function"?window.openDocPreview("sales_return",{returnId:t}):window.print()},_=t=>{if(!(d.vendorReturns||[]).find(e=>e.id===t))return f("Data retur supplier tidak ditemukan!");typeof window.openDocPreview=="function"?window.openDocPreview("vendor_return",{returnId:t}):window.print()};typeof window<"u"&&(window.renderReturnsView=M,window.switchReturnsTab=G,window.handleReturnsSearch=W,window.openSalesReturnModal=J,window.closeSalesReturnModal=L,window.searchOrderForReturn=q,window.handleReturnQtyChange=z,window.handleReturnReasonChange=Y,window.handleReturnConditionChange=Z,window.recalcSalesReturnSummary=A,window.submitSalesReturn=ee,window.openVendorReturnModal=te,window.closeVendorReturnModal=F,window.handleVendorSupplierChange=re,window.addVendorReturnItemRow=H,window.removeVendorReturnItemRow=ne,window.handleVendorItemProductSelect=se,window.handleVendorItemVariantSelect=oe,window.handleVendorItemQtyChange=le,window.handleVendorItemPriceChange=de,window.handleVendorItemLocationChange=ie,window.handleVendorItemReasonChange=ce,window.recalcVendorReturnSummary=$,window.submitVendorReturn=ue,window.printSalesReturnThermal=O,window.printSalesReturnA4=pe,window.printVendorReturnA4=_);export{H as addVendorReturnItemRow,L as closeSalesReturnModal,F as closeVendorReturnModal,Z as handleReturnConditionChange,z as handleReturnQtyChange,Y as handleReturnReasonChange,W as handleReturnsSearch,ie as handleVendorItemLocationChange,de as handleVendorItemPriceChange,se as handleVendorItemProductSelect,le as handleVendorItemQtyChange,ce as handleVendorItemReasonChange,oe as handleVendorItemVariantSelect,re as handleVendorSupplierChange,J as openSalesReturnModal,te as openVendorReturnModal,pe as printSalesReturnA4,O as printSalesReturnThermal,_ as printVendorReturnA4,A as recalcSalesReturnSummary,$ as recalcVendorReturnSummary,ne as removeVendorReturnItemRow,M as renderReturnsView,q as searchOrderForReturn,ee as submitSalesReturn,ue as submitVendorReturn,G as switchReturnsTab};
