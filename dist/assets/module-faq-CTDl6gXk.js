import{q as b,a as c,i as d,e as m,o as j,g as p,k,l as M,n as q,G as g,a1 as H,H as N,v as L,af as E,r as P}from"./module-print-DFMrgAtk.js";let Q=null;const C=()=>{if(!Q)try{Q=b.collection("freshmart").doc("cms_data").collection("faqs").onSnapshot(a=>{a&&a.docs&&(c.faqs=a.docs.map(e=>({id:e.id,...e.data()}))),typeof window.curViewName<"u"&&window.curViewName==="view-faq"&&f(),window.isAdm&&typeof window.cTab<"u"&&window.cTab==="faqs"&&typeof window.rAdmFAQ=="function"&&window.rAdmFAQ()},a=>{console.warn("Sync sub-koleksi faqs dibatasi, menggunakan fallback cms_data.faqs:",a.message),typeof window.curViewName<"u"&&window.curViewName==="view-faq"&&f(),window.isAdm&&typeof window.cTab<"u"&&window.cTab==="faqs"&&typeof window.rAdmFAQ=="function"&&window.rAdmFAQ()})}catch{console.warn("Fallback sync Q&A dari cms_data aktif")}};let y="Semua";const f=()=>{C();const a=document.getElementById("storefront-faq-container"),e=document.getElementById("faq-category-pills");if(!a)return;const s=(c.faqs||[]).filter(n=>n.status==="published"),r=["Semua","Pemesanan","Pengiriman","Pembayaran","Garansi","Lainnya"];e&&(e.innerHTML=r.map(n=>`
            <button onclick="selectFAQCategory('${n}')" class="px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${y===n?"primary-bg text-white shadow-md":"bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-slate-100"}">
                ${n}
            </button>
        `).join(""));const t=(document.getElementById("faq-search-input")?.value||"").toLowerCase().trim(),o=s.filter(n=>{const l=y==="Semua"||n.category===y,u=!t||(n.question||"").toLowerCase().includes(t)||(n.answer||"").toLowerCase().includes(t);return l&&u});if(!o.length){a.innerHTML=`
            <div class="text-center py-12 bg-white dark:bg-slate-800 rounded-3xl border border-slate-200 dark:border-slate-700 p-6 shadow-sm">
                <div class="w-16 h-16 rounded-full primary-bg-soft primary-text mx-auto flex items-center justify-center mb-3">
                    <i class="fa-solid fa-circle-question text-3xl"></i>
                </div>
                <h3 class="font-bold text-slate-800 dark:text-white text-base">Belum Ada Q&A Ditemukan</h3>
                <p class="text-xs text-slate-500 mt-1 max-w-sm mx-auto">Punya pertanyaan lain? Silakan gunakan tombol <b>Ajukan Pertanyaan</b> untuk bertanya ke admin.</p>
                <button onclick="openAskQuestionModal()" class="mt-4 primary-bg text-white px-5 py-2.5 rounded-xl text-xs font-bold shadow-md active:scale-95 transition-all">Ajukan Pertanyaan Sekarang</button>
            </div>
        `;return}a.innerHTML=o.map(n=>`
        <div class="bg-white dark:bg-slate-800/95 rounded-2xl border border-slate-200/80 dark:border-slate-700/80 shadow-soft transition-all duration-200 hover:shadow-md overflow-hidden">
            <button onclick="toggleFAQAccordion('${n.id}')" class="w-full p-4 sm:p-5 text-left flex items-start justify-between gap-3.5 hover:bg-slate-50/80 dark:hover:bg-slate-800/60 transition-colors">
                <div class="flex items-start gap-3.5 min-w-0">
                    <div class="w-9 h-9 rounded-xl primary-bg text-white flex items-center justify-center shrink-0 mt-0.5 shadow-sm"><i class="fa-solid fa-question text-xs font-bold"></i></div>
                    <div class="min-w-0">
                        <div class="flex flex-wrap items-center gap-2 mb-1.5">
                            <span class="text-[9px] font-bold uppercase tracking-wider primary-bg-soft primary-text primary-border px-2.5 py-0.5 rounded-lg border">${d(n.category||"Umum")}</span>
                            ${n.authorName?`<span class="text-[10px] font-medium text-slate-400">Oleh: ${d(n.authorName)}</span>`:""}
                        </div>
                        <h4 class="font-bold text-sm sm:text-base text-slate-900 dark:text-white leading-snug break-words">${d(n.question)}</h4>
                    </div>
                </div>
                <div class="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-700/80 flex items-center justify-center text-slate-400 shrink-0 transition-transform duration-300" id="faq-icon-${n.id}">
                    <i class="fa-solid fa-chevron-down text-xs"></i>
                </div>
            </button>
            <div class="hidden border-t border-slate-100 dark:border-slate-700/70 p-3.5 sm:p-5 primary-bg-soft dark:bg-slate-900/60 text-xs sm:text-sm font-medium leading-relaxed" id="faq-body-${n.id}">
                <div class="flex items-start gap-3 bg-white/90 dark:bg-slate-800/90 p-3.5 sm:p-4 rounded-2xl border primary-border shadow-sm">
                    <div class="w-8 h-8 rounded-xl primary-bg text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5 shadow-sm shadow-[rgba(var(--color-primary-rgb),0.25)]">
                        <i class="fa-solid fa-reply text-xs"></i>
                    </div>
                    <div class="flex-1 min-w-0">
                        <div class="flex items-center justify-between gap-2 mb-1">
                            <span class="text-[10px] font-extrabold uppercase tracking-wider primary-text flex items-center gap-1">
                                <i class="fa-solid fa-user-shield text-[10px]"></i> Jawaban Tim Admin Toko
                            </span>
                        </div>
                        <div class="text-slate-800 dark:text-slate-100 font-semibold leading-relaxed whitespace-pre-wrap break-words">${d(n.answer||"Belum ada jawaban.")}</div>
                    </div>
                </div>
            </div>
        </div>
    `).join("")},K=a=>{y=a,f()},G=()=>{f()},_=a=>{const e=document.getElementById(`faq-body-${a}`),s=document.getElementById(`faq-icon-${a}`);if(!e||!s)return;e.classList.contains("hidden")?(e.classList.remove("hidden"),s.classList.add("rotate-180")):(e.classList.add("hidden"),s.classList.remove("rotate-180"))},V=()=>{const a=m("modal-ask-question"),e=m("modal-ask-question-box");a&&(a.classList.contains("hidden")&&typeof window.pushModalHistory=="function"&&window.pushModalHistory("askQuestion"),j(a,e))},$=(a=!1)=>{const e=()=>{L("modal-ask-question","modal-ask-question-box")};typeof window.requestCloseModal=="function"?window.requestCloseModal("askQuestion",a,e):e()},z=async()=>{const a=(p("ask-author-name")||"").trim()||"Pelanggan",e=p("ask-category")||"Pemesanan",s=(p("ask-question-text")||"").trim();if(!s)return k("Tuliskan pertanyaan Anda terlebih dahulu!");M("Mengirim pertanyaan...");const r="faq-"+Date.now().toString(36),t={id:r,question:s,answer:"",category:e,authorName:a,status:"pending_answer",createdAt:new Date().toISOString()};let o=!1;try{await b.collection("freshmart").doc("cms_data").collection("faqs").doc(r).set(t),o=!0}catch(n){console.warn("Penulisan sub-koleksi faqs dibatasi, mencoba fallback cms_data.faqs:",n)}if(!o)try{const n=[t,...(c.faqs||[]).filter(l=>l.id!==r)];await b.collection("freshmart").doc("cms_data").set({faqs:n},{merge:!0}),c.faqs=n,o=!0}catch(n){console.warn("Fallback cms_data.faqs juga gagal:",n)}q(),o?($(),g("ask-question-text",""),k("Pertanyaan terkirim! Admin akan menjawabnya segera."),f()):k("Gagal mengirim pertanyaan. Coba lagi!")};let x="all";const v=()=>{C();const a=c.faqs||[],e=a.filter(t=>x==="pending"?t.status==="pending_answer":x==="published"?t.status==="published":!0),s=a.filter(t=>t.status==="pending_answer").length;let r=`
        <div class="space-y-5 pb-12">
            <!-- Header Card -->
            <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3.5 bg-white dark:bg-slate-800 p-4 sm:p-5 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
                <div>
                    <h2 class="text-base sm:text-lg font-bold text-slate-800 dark:text-white flex items-center gap-2">
                        <i class="fa-solid fa-circle-question primary-text text-lg"></i> Kelola Tanya Jawab (Q&A / FAQ)
                    </h2>
                    <p class="text-xs font-medium text-slate-500 mt-0.5">Sunting FAQ toko & jawab pertanyaan yang diajukan pelanggan.</p>
                </div>
                <button onclick="openFAQModal('')" class="w-full sm:w-auto primary-bg text-white shadow-glow px-4 py-2.5 rounded-xl font-bold text-xs flex items-center justify-center gap-2 active:scale-95 transition-all">
                    <i class="fa-solid fa-plus"></i> Tambah Q&A Baru
                </button>
            </div>

            <!-- Filter Tabs -->
            <div class="flex items-center gap-2 overflow-x-auto pb-1.5 hide-scrollbar border-b border-slate-200 dark:border-slate-700">
                <button onclick="setAdminFAQFilter('all')" class="shrink-0 px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${x==="all"?"primary-bg text-white shadow-md":"bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200"}">
                    Semua (${a.length})
                </button>
                <button onclick="setAdminFAQFilter('pending')" class="shrink-0 px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${x==="pending"?"primary-bg text-white shadow-md":"bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200"}">
                    <span>Belum Dijawab</span>
                    ${s>0?`<span class="bg-rose-500 text-white text-[9px] px-1.5 py-0.5 rounded-full font-bold">${s}</span>`:""}
                </button>
                <button onclick="setAdminFAQFilter('published')" class="shrink-0 px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${x==="published"?"primary-bg text-white shadow-md":"bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200"}">
                    Terpublikasi
                </button>
            </div>

            <!-- List Q&A Admin -->
            <div class="space-y-4">
                ${e.length?e.map(t=>`
                    <div class="bg-white dark:bg-slate-800 p-4 sm:p-5 rounded-2xl border ${t.status==="pending_answer"?"border-amber-300/80 bg-amber-50/20 dark:bg-amber-900/10":"border-slate-200/80 dark:border-slate-700/80"} shadow-sm space-y-3">
                        <div class="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 dark:border-slate-700/60 pb-2.5">
                            <div class="flex flex-wrap items-center gap-1.5 min-w-0">
                                <span class="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-lg ${t.status==="published"?"primary-bg-soft primary-text border primary-border":t.status==="pending_answer"?"bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400":"bg-slate-100 text-slate-600 dark:bg-slate-700 dark:text-slate-400"}">
                                    ${t.status==="published"?"Terpublikasi":t.status==="pending_answer"?"Menunggu Jawaban":"Disembunyikan"}
                                </span>
                                <span class="text-[9px] sm:text-[10px] font-bold text-slate-400 uppercase tracking-wider px-2 py-0.5 rounded-lg bg-slate-100 dark:bg-slate-700/50">${d(t.category||"Umum")}</span>
                                ${t.authorName?`<span class="text-[10px] text-slate-400 italic">Oleh: ${d(t.authorName)}</span>`:""}
                            </div>
                            <div class="flex items-center gap-1.5 shrink-0 ml-auto">
                                <button onclick="openFAQModal('${t.id}')" class="px-2.5 py-1.5 rounded-xl bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400 font-bold text-xs hover:bg-blue-100 transition-colors flex items-center gap-1 active:scale-95">
                                    <i class="fa-solid fa-pen-to-square"></i> Edit / Jawab
                                </button>
                                <button onclick="deleteAdminFAQ('${t.id}')" class="px-2.5 py-1.5 rounded-xl bg-rose-50 text-rose-600 dark:bg-rose-900/20 dark:text-rose-400 font-bold text-xs hover:bg-rose-100 transition-colors active:scale-95" title="Hapus Q&A">
                                    <i class="fa-solid fa-trash"></i>
                                </button>
                            </div>
                        </div>

                        <div>
                            <h3 class="font-bold text-sm sm:text-base text-slate-900 dark:text-white leading-snug break-words">${d(t.question)}</h3>
                        </div>

                        <div class="primary-bg-soft dark:bg-slate-900/60 p-3.5 sm:p-4 rounded-xl border primary-border text-xs font-medium text-slate-800 dark:text-slate-200">
                            <span class="font-extrabold primary-text uppercase text-[10px] tracking-wider flex items-center gap-1.5 mb-1">
                                <i class="fa-solid fa-user-shield text-[10px]"></i> Jawaban Admin Toko:
                            </span>
                            <div class="whitespace-pre-wrap leading-relaxed font-semibold break-words">${t.answer?d(t.answer):'<span class="text-rose-500 italic font-semibold">Belum dijawab. Klik "Edit / Jawab" untuk memberikan jawaban.</span>'}</div>
                        </div>
                    </div>
                `).join(""):`
                    <div class="text-center py-10 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 p-6">
                        <i class="fa-solid fa-inbox text-3xl text-slate-300 mb-2"></i>
                        <p class="text-xs font-bold text-slate-600 dark:text-slate-300">Tidak ada Q&A ditemukan pada kategori filter ini.</p>
                    </div>
                `}
            </div>
        </div>
    `;setH("admin-content",r)},J=a=>{x=a,v()},U=a=>{const e=(c.faqs||[]).find(t=>t.id===a)||{id:"",question:"",answer:"",category:"Pemesanan",authorName:"Admin",status:"published"};g("admin-faq-id",e.id),g("admin-faq-category",e.category||"Pemesanan"),g("admin-faq-author",e.authorName||"Admin"),g("admin-faq-question",e.question||""),g("admin-faq-answer",e.answer||""),g("admin-faq-status",e.status||"published"),H("admin-faq-modal-title",a?"Edit Q&A":"Tambah Q&A Baru");const s=m("modal-admin-faq"),r=m("modal-admin-faq-box");s&&(s.classList.contains("hidden")&&typeof window.pushModalHistory=="function"&&window.pushModalHistory("adminFAQ"),j(s,r))},B=(a=!1)=>{const e=()=>{L("modal-admin-faq","modal-admin-faq-box")};typeof window.requestCloseModal=="function"?window.requestCloseModal("adminFAQ",a,e):e()},Z=async()=>{const a=p("admin-faq-id")||"faq-"+Date.now().toString(36),e=p("admin-faq-category"),s=(p("admin-faq-author")||"").trim()||"Admin",r=(p("admin-faq-question")||"").trim(),t=(p("admin-faq-answer")||"").trim();let o=p("admin-faq-status");if(!r)return k("Pertanyaan tidak boleh kosong!");t&&o==="pending_answer"&&(o="published"),M("Menyimpan Q&A...");const n={id:a,question:r,answer:t,category:e,authorName:s,status:o,updatedAt:new Date().toISOString()};let l=[...c.faqs||[]];const u=l.findIndex(i=>i.id===a);u>-1?l[u]={...l[u],...n}:l.unshift(n),c.faqs=l;try{await b.collection("freshmart").doc("cms_data").collection("faqs").doc(a).set(n,{merge:!0})}catch(i){console.warn("Gagal set ke sub-koleksi faqs:",i)}try{await b.collection("freshmart").doc("cms_data").set({faqs:l},{merge:!0})}catch(i){console.warn("Gagal update cms_data.faqs:",i)}q(),B(),k("Q&A Berhasil Disimpan!"),v()},W=a=>{N("Hapus Q&A","Yakin ingin menghapus pertanyaan ini?",async()=>{M("Menghapus Q&A...");let e=(c.faqs||[]).filter(s=>s.id!==a);c.faqs=e;try{await b.collection("freshmart").doc("cms_data").collection("faqs").doc(a).delete()}catch(s){console.warn("Gagal delete dari sub-koleksi faqs:",s)}try{await b.collection("freshmart").doc("cms_data").set({faqs:e},{merge:!0})}catch(s){console.warn("Gagal update cms_data.faqs:",s)}q(),k("Q&A Berhasil Dihapus!"),v()})};window.attachFAQRealtime=C;window.renderStorefrontFAQ=f;window.selectFAQCategory=K;window.filterStorefrontFAQ=G;window.toggleFAQAccordion=_;window.openAskQuestionModal=V;window.closeAskQuestionModal=$;window.submitCustomerQuestion=z;window.rAdmFAQ=v;window.setAdminFAQFilter=J;window.openFAQModal=U;window.closeAdminFAQModal=B;window.saveAdminFAQ=Z;window.deleteAdminFAQ=W;const X=5,O=[{id:"log-1-15-07",version:"v1.15.7",date:"2026-10-11",title:"Tombol Hapus Kartu Returan (RMA Engine) & Rollback Persediaan Otomatis",category:"feature",badge:"RMA Return Deletion & Inventory Rollback v1.15.7",items:["Tombol Hapus Retur Penjualan (Customer RMA): Menghadirkan tombol hapus permanen pada kartu retur mobile dan tabel desktop dengan dialog konfirmasi aman (danger mode). Saat data retur dihapus, penyesuaian stok fisik dan lot FIFO dibatalkan/dikembalikan otomatis, serta pengeluaran buku kas laci dibersihkan.","Tombol Hapus Retur Supplier (Vendor RMA): Menghadirkan tombol hapus permanen pada kartu retur supplier dan tabel desktop. Saat dihapus, barang dikembalikan ke lokasi asal persediaan (Rak Toko, Gudang Cadangan, atau Karantina), serta potongan hutang PO supplier dikembalikan normal.","Arsitektur Rollback Bersih & Presisi: Mengimplementasikan rollbackSalesReturnStock dan rollbackVendorReturnStock pada engine FIFO terpadu (fifo-inventory.js) dengan penanganan varian dan integritas data tanpa kompromi.","Rangkaian Pengujian Menyeluruh: 55 skenario pengujian RMA lolos 100% dan seluruh 11 test suite sistem audit lolos 100%.","Multi-Channel Distribution v1.15.7 (Android versionCode 11507)."]},{id:"log-1-15-06",version:"v1.15.6",date:"2026-10-11",title:"Redesain Header POS Kasir Mobile (Clean Native Single-Row), Ruang Nama Toko & Kasir Lega, Serta Quick Action Menu [⋮]",category:"feature",badge:"Clean Mobile POS Header & Quick Action Menu v1.15.6",items:["Header POS Kasir Ramah Smartphone (HP): Merestrukturisasi tata letak header POS kasir layar ponsel pintar (360–390px) dengan wadah judul toko & kasir fleksibel (flex-1 min-w-0 mr-1.5), mengeliminasi masalah teks sempit terpotong menjadi 'P...' dan tumpang tindih. Nama toko dan nama kasir aktif kini tampil 100% utuh, tegak, lapang, dan estetis.","Quick Action Menu Popover [⋮] (Titik Tiga): Menghadirkan menu aksi cepat modern berdesain 100% Solid & Crisp (tanpa blur) khusus layar ponsel (sm:hidden). Menu ini memuat akses lengkap berikon dan rapi untuk Kalkulator Estimator Material [F3], Pengaturan Printer Thermal [F7], Catat Kas Laci (Kas ±) [F11], Ringkasan Shift (X-Report), Buku Panduan Kasir POS, dan Tombol Keluar Kasir.","Ergonomi & Optimasi Tombol Esensial Mobile: Tombol status shift dan antrean parkir [⌛] dioptimasi ringkas di ponsel (w-8 h-8 saat 0 antrean dan badge pill saat aktif), membebaskan ruang horizontal maksimal untuk judul etalase toko.","Desktop Parity Terjaga Penuh: Seluruh tombol aksi horizontal di layar laptop/desktop (sm: ke atas) tetap dipertahankan lengkap tanpa gangguan.","Multi-Channel Distribution v1.15.6 (Android versionCode 11506)."]},{id:"log-1-15-05",version:"v1.15.5",date:"2026-10-11",title:"Audit Sistem Menyeluruh, Optimasi Code-Splitting Bundle Admin, Harmonisasi Desain Tema Dinamis & Penguatan Guard Input",category:"feature",badge:"System Audit & Code-Splitting Optimization v1.15.5",items:["Optimasi Kinerja Bundling & Code-Splitting (Vite 5): Melepaskan re-export statis delivery.js pada barrel admin sehingga Surat Jalan DO terisolasi bersih menjadi lazy chunk mandiri (45.89 kB), mengeliminasi warning Vite 100%, memangkas bundle awal module-admin sebesar 46.24 kB, dan mempercepat waktu build kompilasi hingga 49% (10.33 detik).","Harmonisasi Tema Toko Dinamis (Zero-Hardcode Color): Menyelaraskan seluruh elemen Tab Keramik pada Kalkulator Estimator Bahan Bangunan (material-estimator.js) mengadopsi token tema toko var(--color-primary) dan kartu Bento gradien cyan/slate modern, mengeliminasi warna hardcoded indigo peninggalan lawas.","Penguatan Guard Input Focus & Multi-Lingkungan: Melengkapi active element guard pada sinkronisasi diskon kasir POS (.pos-disc-val-input) dengan pemeriksaan typeof document === 'undefined' untuk keandalan eksekusi lintas lingkungan (Browser & Node.js test runner).","Audit Kesehatan Sistem & Verifikasi Test Suite 100% Passed: Seluruh 303 kasus uji unit (UOM, Flash Sale, Member VIP, Retur RMA, Delivery DO, Dual-Location Stock, FIFO, Estimator, Barcode Code 128, Lisensi SaaS, dan 78 Modal Sistem) terverifikasi 100% lulus tanpa kegagalan.","Multi-Channel Distribution v1.15.5 (Android versionCode 11505)."]},{id:"log-1-15-04",version:"v1.15.4",date:"2026-10-10",title:"Arsitektur Zero-Flicker Partial DOM, Proteksi Fokus Input & Pengetikan Lancar Bebas Mental di Seluruh Modul",category:"feature",badge:"Zero-Flicker Partial DOM & Continuous Focus v1.15.4",items:["Resolusi Tuntas Input Mental-Mental & Hilang Fokus: Mengeliminasi masalah kolom input yang kehilangan fokus, berkedip, melompatkan kursor (caret), atau menutup keyboard virtual ponsel saat pengguna mengetik di seluruh aplikasi.","Arsitektur Pembaruan Parsial DOM (Zero-Flicker Partial DOM): Memisahkan kontainer input filter/pencarian dari kontainer hasil data dinamis pada Estimator Material (Paint, Tile, Brick, Roof), Stock Opname Dua Lokasi, Beban Pengeluaran Toko, Laporan Valuasi Stok, Kulakan Pembelian (PO), Master Supplier, Retur RMA, Kartu Piutang Tempo, dan Katalog Master Produk.","Proteksi Caret & Active Element Guard: Menerapkan pengecekan document.activeElement !== input pada sinkronisasi pencarian silang etalase & kasir POS, mencegah reset posisi caret IME saat pengetikan cepat atau penggunaan virtual keyboard Android/iOS.","Tombol Bersihkan Instan Dinamis (Reactive Clear Buttons): Integrasi tombol hapus pencarian 1-klik yang responsif dan reaktif tanpa memicu render ulang template kontainer luar.","Pencegahan Reflow Kartu Ringkasan: Mengoptimalkan pembaruan tabel katalog produk admin agar tidak merekonstruksi ulang 4 kartu ringkasan inventori di setiap ketukan tombol pencarian.","Seluruh 78 Modal Sistem & Rangkaian Test Suite Lolos 100%: 36 pengujian estimator & desimal, 28 flash sale, 24 multi-satuan UOM, 52 member loyalitas, serta verifikasi modal sinkron 100%.","Multi-Channel Distribution v1.15.4 (Android versionCode 11504)."]},{id:"log-1-15-03",version:"v1.15.3",date:"2026-10-10",title:"Kalkulator Estimator Atap & Seng Interaktif (Spandek Galvalum, Seng Gelombang, Asbes Gelombang & Nok Bubungan)",category:"feature",badge:"Roof & Corrugated Sheet Material Estimator v1.15.3",items:["Penambahan Tab Estimator Atap & Seng: Menghadirkan kalkulator matematis presisi untuk menghitung kebutuhan Atap Spandek Galvalum (Zincalume), Seng Gelombang (BJLS), dan Asbes Gelombang (Fiber Semen).","3 Mode Geometri Bidang Konstruksi: Mendukung perhitungan Model Pelana 2 Sisi Miring (Gable Roof), Model Kanopi 1 Sisi Miring (Monopitch / Carport), dan Mode Luas Bersih Langsung (m²).","Presisi Sambungan & Overlap Lapangan: Memperhitungkan lebar efektif overlap samping (75 cm untuk Spandek & Seng, 95 cm untuk Asbes) serta end-lap sambungan ujung 20 cm sesuai pilihan panjang lembar (3m, 4m, 5m, 6m untuk Spandek; 1.5m s.d. 3.0m untuk Seng & Asbes).","Perhitungan Otomatis Aksesoris & Pengencang: Menghitung kebutuhan Baut Roofing SDS 12-14x50mm (box isi 100), Paku Payung Seng Galvanis (kg isi ~70 pcs), Paku Asbes Berkaret (pack isi 50), serta Batang Nok Bubungan Puncak.","Integrasi Omnichannel Lengkap: Salin rincian format WhatsApp, konsultasi langsung ke WA Toko Putri, integrasi tombol cepat kasir POS [F3], dan rekomendasi produk etalase toko.","Rangkaian Pengujian Otomatis: 36 unit test estimator lolos 100% dan seluruh 78 modal sistem sinkron.","Multi-Channel Distribution v1.15.3 (Android versionCode 11503)."]}],T=a=>{if(!a)return[0,0,0];const e=String(a).match(/(\d+)\.(\d+)\.(\d+)/);return e?[parseInt(e[1],10),parseInt(e[2],10),parseInt(e[3],10)]:[0,0,0]},A=(a,e)=>{const[s,r,t]=T(a),[o,n,l]=T(e);return o!==s?o-s:n!==r?n-r:l-t},R=(a,e=X)=>{const s=a&&Array.isArray(a.changelog)?a.changelog:[],r=new Set(a&&Array.isArray(a.deletedChangelogIds)?a.deletedChangelogIds:[]),t=new Set(s.map(i=>i.id||i.version)),o=O.filter(i=>!t.has(i.id)&&!t.has(i.version)&&!r.has(i.id)&&!r.has(i.version)),u=[...s.filter(i=>!r.has(i.id)&&!r.has(i.version)),...o].sort((i,w)=>{const S=new Date(i.date||"2026-01-01").getTime(),F=new Date(w.date||"2026-01-01").getTime();return F!==S?F-S:A(i.version,w.version)});return typeof e=="number"&&e>0?u.slice(0,e):u},Y=a=>{const e=O[0]?.version||"v1.12.2",s=R(a,null);if(!s||s.length===0)return e;let r=s[0].version||e;for(const t of s)t.version&&A(t.version,r)<0&&(r=t.version);return A(e,r)<0&&(r=e),r};let h="all";const ee=a=>{if(!a)return"";try{const e=a.split("-");return e.length===3?new Date(parseInt(e[0]),parseInt(e[1])-1,parseInt(e[2])).toLocaleDateString("id-ID",{day:"numeric",month:"short",year:"numeric"}):a}catch{return a}},ae=a=>{switch(a){case"feature":return{label:"Fitur Baru",icon:"fa-rocket",colorClass:"bg-slate-100 dark:bg-slate-800/90 text-slate-700 dark:text-slate-300 border-slate-200/80 dark:border-slate-700/80",iconColor:"text-[var(--color-primary)]"};case"optimization":return{label:"Optimasi",icon:"fa-bolt-lightning",colorClass:"bg-slate-100 dark:bg-slate-800/90 text-slate-700 dark:text-slate-300 border-slate-200/80 dark:border-slate-700/80",iconColor:"text-[var(--color-primary)]"};case"maintenance":return{label:"Maintenance",icon:"fa-wrench",colorClass:"bg-slate-100 dark:bg-slate-800/90 text-slate-700 dark:text-slate-300 border-slate-200/80 dark:border-slate-700/80",iconColor:"text-[var(--color-primary)]"};case"security":return{label:"Keamanan",icon:"fa-shield-halved",colorClass:"bg-red-50 dark:bg-red-950/40 text-red-700 dark:text-red-300 border-red-200/80 dark:border-red-800/60",iconColor:"text-red-500 dark:text-red-400"};case"bugfix":return{label:"Perbaikan",icon:"fa-bug-slash",colorClass:"bg-slate-100 dark:bg-slate-800/90 text-slate-700 dark:text-slate-300 border-slate-200/80 dark:border-slate-700/80",iconColor:"text-[var(--color-primary)]"};default:return{label:"Update",icon:"fa-tag",colorClass:"bg-slate-100 dark:bg-slate-800/90 text-slate-700 dark:text-slate-300 border-slate-200/80 dark:border-slate-700/80",iconColor:"text-[var(--color-primary)]"}}},te=()=>{const a=m("changelog-items-container");if(!a)return;const e=R(c),s=h==="all"?e:e.filter(t=>t.category===h);if(s.length===0){a.innerHTML=`
        <div class="flex flex-col items-center justify-center py-12 text-center text-slate-400">
            <div class="w-14 h-14 rounded-2xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-2xl mb-3">
                <i class="fa-solid fa-clipboard-list opacity-60"></i>
            </div>
            <p class="text-xs font-bold text-slate-600 dark:text-slate-300">Belum ada catatan pada kategori ini</p>
            <p class="text-[10px] text-slate-400 mt-0.5">Pilih filter kategori lain di atas</p>
        </div>`;return}let r="";s.forEach((t,o)=>{const n=o===0&&h==="all",l=ae(t.category),u=ee(t.date),i=(t.items||[]).map(w=>`
            <li class="flex items-start gap-2 text-xs font-medium text-slate-600 dark:text-slate-300 leading-relaxed">
                <i class="fa-solid fa-circle-check text-[var(--color-primary)] text-[11px] mt-1 shrink-0"></i>
                <span>${d(w)}</span>
            </li>
        `).join("");r+=`
        <div class="relative pl-6 sm:pl-8 pb-6 border-l-2 ${n?"border-[var(--color-primary)]":"border-slate-200 dark:border-slate-700"} last:border-l-transparent last:pb-2">
            <!-- Timeline Node Indicator -->
            <div class="absolute -left-[9px] top-0 w-4 h-4 rounded-full ${n?"bg-[var(--color-primary)] ring-4 ring-[rgba(var(--color-primary-rgb),0.2)]":"bg-slate-300 dark:bg-slate-600"} flex items-center justify-center transition-all">
                ${n?'<span class="w-1.5 h-1.5 rounded-full bg-white"></span>':""}
            </div>

            <!-- Card Box -->
            <div class="rounded-2xl border ${n?"border-[var(--color-primary)]/40 bg-[rgba(var(--color-primary-rgb),0.03)] dark:bg-[rgba(var(--color-primary-rgb),0.06)] shadow-sm":"border-slate-100 dark:border-slate-800/80 bg-slate-50/70 dark:bg-slate-800/40"} p-4 sm:p-5 transition-all">
                <div class="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <div class="flex items-center gap-2 flex-wrap">
                        <span class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-lg text-[11px] font-black tracking-wider uppercase ${n?"bg-[var(--color-primary)] text-white shadow-xs":"bg-slate-800 text-white dark:bg-slate-700"}">
                            ${d(t.version||"v1.0.0")}
                        </span>
                        <span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-md border text-[10px] font-bold ${l.colorClass}">
                            <i class="fa-solid ${l.icon} text-[9px] ${l.iconColor}"></i> ${d(l.label)}
                        </span>
                        ${n?`
                        <span class="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-[rgba(var(--color-primary-rgb),0.1)] text-[var(--color-primary)] border border-[rgba(var(--color-primary-rgb),0.25)] text-[9px] font-black uppercase tracking-wider">
                            <span class="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)] animate-pulse"></span> Versi Terbaru
                        </span>`:""}
                    </div>
                    <span class="text-[10px] font-bold text-slate-400 dark:text-slate-500 flex items-center gap-1">
                        <i class="fa-regular fa-calendar text-[10px]"></i> ${d(u)}
                    </span>
                </div>

                <h4 class="text-xs sm:text-sm font-extrabold text-slate-800 dark:text-white leading-snug mb-3">
                    ${d(t.title||"Pembaruan Sistem")}
                </h4>

                <ul class="space-y-2">
                    ${i}
                </ul>
            </div>
        </div>`}),a.innerHTML=r},D=a=>{h=a,document.querySelectorAll(".btn-changelog-filter").forEach(e=>{const s=e.getAttribute("data-category"),r=e.querySelector("i");s===a?(e.className="btn-changelog-filter shrink-0 whitespace-nowrap flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-[10px] sm:text-xs font-bold primary-bg text-white shadow-xs transition-all cursor-pointer border border-transparent",r&&(r.className=r.className.replace(/text-\[[^\]]+\]/g,"").trim()+" text-white")):(e.className="btn-changelog-filter shrink-0 whitespace-nowrap flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-[10px] sm:text-xs font-bold bg-white dark:bg-slate-800/90 hover:bg-slate-100 dark:hover:bg-slate-700/80 border border-slate-200/80 dark:border-slate-700/80 text-slate-700 dark:text-slate-300 transition-all cursor-pointer",r&&s!=="all"?r.className=r.className.replace(/\btext-white\b/g,"").trim()+" text-[var(--color-primary)]":r&&s==="all"&&(r.className=r.className.replace(/\btext-white\b/g,"").trim()+" text-slate-400"))}),te()},se=(a="all")=>{let e=m("changelog-modal");e||(e=document.createElement("div"),e.id="changelog-modal",e.className="fixed inset-0 z-[125] bg-slate-900/80 flex items-end sm:items-center justify-center p-0 sm:p-4 opacity-0 transition-opacity duration-300",e.onclick=t=>{t.target===e&&I()},e.innerHTML=`
        <div id="changelog-modal-box" class="w-full max-w-xl max-h-[90dvh] sm:max-h-[85dvh] bg-white dark:bg-[#0b1121] rounded-t-3xl sm:rounded-2xl border border-slate-200 dark:border-slate-800 flex flex-col overflow-hidden shadow-2xl transform translate-y-full sm:translate-y-8 transition-transform duration-300">
            <!-- Header Modal -->
            <div class="p-4 sm:p-5 border-b border-slate-100 dark:border-slate-800/80 flex items-center justify-between shrink-0 bg-white dark:bg-[#0b1121]">
                <div class="flex items-center gap-3">
                    <div class="w-10 h-10 rounded-2xl bg-[rgba(var(--color-primary-rgb),0.12)] border border-[rgba(var(--color-primary-rgb),0.22)] text-[var(--color-primary)] flex items-center justify-center text-base sm:text-lg shadow-2xs shrink-0">
                        <i class="fa-solid fa-clock-rotate-left"></i>
                    </div>
                    <div>
                        <div class="flex items-center gap-2">
                            <h3 class="text-sm sm:text-base font-black text-slate-900 dark:text-white tracking-tight leading-tight">
                                Log Pembaruan Sistem
                            </h3>
                            <span id="changelog-header-ver" class="px-2 py-0.5 rounded-full text-[9px] font-black uppercase tracking-wider primary-bg text-white">
                                v1.3.1
                            </span>
                        </div>
                        <p class="text-[10px] sm:text-[11px] font-semibold text-slate-400 dark:text-slate-500 mt-0.5">
                            Transparansi riwayat perbaikan, fitur, dan performa Toko Putri
                        </p>
                    </div>
                </div>
                <button onclick="closeChangelogModal()" class="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-white flex items-center justify-center transition-all cursor-pointer">
                    <i class="fa-solid fa-xmark text-sm"></i>
                </button>
            </div>

            <!-- Filter Kategori Kancing (Horizontal Scroll) -->
            <div class="px-4 sm:px-5 py-2.5 border-b border-slate-100 dark:border-slate-800/60 flex items-center gap-1.5 sm:gap-2 overflow-x-auto hide-scrollbar shrink-0 bg-slate-50/60 dark:bg-slate-900/40">
                <button onclick="window.filterChangelog('all')" data-category="all" class="btn-changelog-filter shrink-0 whitespace-nowrap flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-[10px] sm:text-xs font-bold primary-bg text-white shadow-xs transition-all cursor-pointer border border-transparent">
                    <i class="fa-solid fa-list-check text-[10px]"></i>
                    <span>Semua</span>
                </button>
                <button onclick="window.filterChangelog('feature')" data-category="feature" class="btn-changelog-filter shrink-0 whitespace-nowrap flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-[10px] sm:text-xs font-bold bg-white dark:bg-slate-800/90 hover:bg-slate-100 dark:hover:bg-slate-700/80 border border-slate-200/80 dark:border-slate-700/80 text-slate-700 dark:text-slate-300 transition-all cursor-pointer">
                    <i class="fa-solid fa-rocket text-[10px] text-[var(--color-primary)]"></i>
                    <span>Fitur Baru</span>
                </button>
                <button onclick="window.filterChangelog('optimization')" data-category="optimization" class="btn-changelog-filter shrink-0 whitespace-nowrap flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-[10px] sm:text-xs font-bold bg-white dark:bg-slate-800/90 hover:bg-slate-100 dark:hover:bg-slate-700/80 border border-slate-200/80 dark:border-slate-700/80 text-slate-700 dark:text-slate-300 transition-all cursor-pointer">
                    <i class="fa-solid fa-bolt-lightning text-[10px] text-[var(--color-primary)]"></i>
                    <span>Optimasi</span>
                </button>
                <button onclick="window.filterChangelog('maintenance')" data-category="maintenance" class="btn-changelog-filter shrink-0 whitespace-nowrap flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-[10px] sm:text-xs font-bold bg-white dark:bg-slate-800/90 hover:bg-slate-100 dark:hover:bg-slate-700/80 border border-slate-200/80 dark:border-slate-700/80 text-slate-700 dark:text-slate-300 transition-all cursor-pointer">
                    <i class="fa-solid fa-wrench text-[10px] text-[var(--color-primary)]"></i>
                    <span>Maintenance</span>
                </button>
                <button onclick="window.filterChangelog('security')" data-category="security" class="btn-changelog-filter shrink-0 whitespace-nowrap flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-[10px] sm:text-xs font-bold bg-white dark:bg-slate-800/90 hover:bg-slate-100 dark:hover:bg-slate-700/80 border border-slate-200/80 dark:border-slate-700/80 text-slate-700 dark:text-slate-300 transition-all cursor-pointer">
                    <i class="fa-solid fa-shield-halved"></i> Keamanan
                </button>
                <button onclick="window.filterChangelog('bugfix')" data-category="bugfix" class="btn-changelog-filter shrink-0 whitespace-nowrap flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-[10px] sm:text-xs font-bold bg-white dark:bg-slate-800/90 hover:bg-slate-100 dark:hover:bg-slate-700/80 border border-slate-200/80 dark:border-slate-700/80 text-slate-700 dark:text-slate-300 transition-all cursor-pointer">
                    <i class="fa-solid fa-bug-slash text-[10px] text-[var(--color-primary)]"></i>
                    <span>Perbaikan</span>
                </button>
            </div>

            <!-- List Content Timeline -->
            <div class="p-4 sm:p-6 overflow-y-auto flex-1 custom-scrollbar">
                <div id="changelog-items-container" class="space-y-1"></div>
            </div>

            <!-- Footer Modal -->
            <div class="p-3.5 sm:p-4 border-t border-slate-100 dark:border-slate-800/80 bg-slate-50/80 dark:bg-[#0b1121]/90 flex items-center justify-between shrink-0">
                <div class="flex items-center gap-2 text-[10px] font-bold text-slate-400 dark:text-slate-500">
                    <span class="w-2 h-2 rounded-full bg-[var(--color-primary)] animate-pulse"></span>
                    <span>Real-Time Sync Active</span>
                </div>
                <button onclick="closeChangelogModal()" class="px-6 py-2.5 rounded-2xl primary-bg text-white text-xs font-bold uppercase tracking-wider hover:opacity-90 active:scale-95 transition-all cursor-pointer shadow-sm">
                    Tutup
                </button>
            </div>
        </div>`,document.body.appendChild(e));const s=Y(c),r=m("changelog-header-ver");r&&(r.textContent=s),h=a,D(a),e.style.display!=="flex"&&E("changelog"),e.style.display="flex",e.offsetWidth,requestAnimationFrame(()=>{e.classList.remove("opacity-0");const t=m("changelog-modal-box");t&&t.classList.remove("translate-y-full","sm:translate-y-8")})},I=(a=!1)=>{const e=m("changelog-modal");if(!e||e.style.display==="none")return;const s=()=>{e.classList.add("opacity-0");const r=m("changelog-modal-box");r&&r.classList.add("translate-y-full","sm:translate-y-8"),setTimeout(()=>{e.style.display="none"},300)};typeof P=="function"?P("changelog",a,s):s()};window.openChangelogModal=se;window.closeChangelogModal=I;window.filterChangelog=D;export{Y as a,A as c,R as g};
