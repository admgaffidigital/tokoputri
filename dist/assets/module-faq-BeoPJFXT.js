import{q as g,a as c,i as d,e as u,o as T,g as p,k as f,l as C,n as S,F as b,a0 as I,G as H,v as B,ad as N,r as M}from"./module-print-kS9uyETk.js";let Q=null;const q=()=>{if(!Q)try{Q=g.collection("freshmart").doc("cms_data").collection("faqs").onSnapshot(a=>{a&&a.docs&&(c.faqs=a.docs.map(e=>({id:e.id,...e.data()}))),typeof window.curViewName<"u"&&window.curViewName==="view-faq"&&x(),window.isAdm&&typeof window.cTab<"u"&&window.cTab==="faqs"&&typeof window.rAdmFAQ=="function"&&window.rAdmFAQ()},a=>{console.warn("Sync sub-koleksi faqs dibatasi, menggunakan fallback cms_data.faqs:",a.message),typeof window.curViewName<"u"&&window.curViewName==="view-faq"&&x(),window.isAdm&&typeof window.cTab<"u"&&window.cTab==="faqs"&&typeof window.rAdmFAQ=="function"&&window.rAdmFAQ()})}catch{console.warn("Fallback sync Q&A dari cms_data aktif")}};let y="Semua";const x=()=>{q();const a=document.getElementById("storefront-faq-container"),e=document.getElementById("faq-category-pills");if(!a)return;const s=(c.faqs||[]).filter(n=>n.status==="published"),r=["Semua","Pemesanan","Pengiriman","Pembayaran","Garansi","Lainnya"];e&&(e.innerHTML=r.map(n=>`
            <button onclick="selectFAQCategory('${n}')" class="px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${y===n?"primary-bg text-white shadow-md":"bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-slate-100"}">
                ${n}
            </button>
        `).join(""));const t=(document.getElementById("faq-search-input")?.value||"").toLowerCase().trim(),o=s.filter(n=>{const l=y==="Semua"||n.category===y,m=!t||(n.question||"").toLowerCase().includes(t)||(n.answer||"").toLowerCase().includes(t);return l&&m});if(!o.length){a.innerHTML=`
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
    `).join("")},_=a=>{y=a,x()},R=()=>{x()},V=a=>{const e=document.getElementById(`faq-body-${a}`),s=document.getElementById(`faq-icon-${a}`);if(!e||!s)return;e.classList.contains("hidden")?(e.classList.remove("hidden"),s.classList.add("rotate-180")):(e.classList.add("hidden"),s.classList.remove("rotate-180"))},U=()=>{const a=u("modal-ask-question"),e=u("modal-ask-question-box");a&&(a.classList.contains("hidden")&&typeof window.pushModalHistory=="function"&&window.pushModalHistory("askQuestion"),T(a,e))},L=(a=!1)=>{const e=()=>{B("modal-ask-question","modal-ask-question-box")};typeof window.requestCloseModal=="function"?window.requestCloseModal("askQuestion",a,e):e()},G=async()=>{const a=(p("ask-author-name")||"").trim()||"Pelanggan",e=p("ask-category")||"Pemesanan",s=(p("ask-question-text")||"").trim();if(!s)return f("Tuliskan pertanyaan Anda terlebih dahulu!");C("Mengirim pertanyaan...");const r="faq-"+Date.now().toString(36),t={id:r,question:s,answer:"",category:e,authorName:a,status:"pending_answer",createdAt:new Date().toISOString()};let o=!1;try{await g.collection("freshmart").doc("cms_data").collection("faqs").doc(r).set(t),o=!0}catch(n){console.warn("Penulisan sub-koleksi faqs dibatasi, mencoba fallback cms_data.faqs:",n)}if(!o)try{const n=[t,...(c.faqs||[]).filter(l=>l.id!==r)];await g.collection("freshmart").doc("cms_data").set({faqs:n},{merge:!0}),c.faqs=n,o=!0}catch(n){console.warn("Fallback cms_data.faqs juga gagal:",n)}S(),o?(L(),b("ask-question-text",""),f("Pertanyaan terkirim! Admin akan menjawabnya segera."),x()):f("Gagal mengirim pertanyaan. Coba lagi!")};let k="all";const v=()=>{q();const a=c.faqs||[],e=a.filter(t=>k==="pending"?t.status==="pending_answer":k==="published"?t.status==="published":!0),s=a.filter(t=>t.status==="pending_answer").length;let r=`
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
                <button onclick="setAdminFAQFilter('all')" class="shrink-0 px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${k==="all"?"primary-bg text-white shadow-md":"bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200"}">
                    Semua (${a.length})
                </button>
                <button onclick="setAdminFAQFilter('pending')" class="shrink-0 px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${k==="pending"?"primary-bg text-white shadow-md":"bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200"}">
                    <span>Belum Dijawab</span>
                    ${s>0?`<span class="bg-rose-500 text-white text-[9px] px-1.5 py-0.5 rounded-full font-bold">${s}</span>`:""}
                </button>
                <button onclick="setAdminFAQFilter('published')" class="shrink-0 px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${k==="published"?"primary-bg text-white shadow-md":"bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200"}">
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
    `;setH("admin-content",r)},z=a=>{k=a,v()},J=a=>{const e=(c.faqs||[]).find(t=>t.id===a)||{id:"",question:"",answer:"",category:"Pemesanan",authorName:"Admin",status:"published"};b("admin-faq-id",e.id),b("admin-faq-category",e.category||"Pemesanan"),b("admin-faq-author",e.authorName||"Admin"),b("admin-faq-question",e.question||""),b("admin-faq-answer",e.answer||""),b("admin-faq-status",e.status||"published"),I("admin-faq-modal-title",a?"Edit Q&A":"Tambah Q&A Baru");const s=u("modal-admin-faq"),r=u("modal-admin-faq-box");s&&(s.classList.contains("hidden")&&typeof window.pushModalHistory=="function"&&window.pushModalHistory("adminFAQ"),T(s,r))},$=(a=!1)=>{const e=()=>{B("modal-admin-faq","modal-admin-faq-box")};typeof window.requestCloseModal=="function"?window.requestCloseModal("adminFAQ",a,e):e()},X=async()=>{const a=p("admin-faq-id")||"faq-"+Date.now().toString(36),e=p("admin-faq-category"),s=(p("admin-faq-author")||"").trim()||"Admin",r=(p("admin-faq-question")||"").trim(),t=(p("admin-faq-answer")||"").trim();let o=p("admin-faq-status");if(!r)return f("Pertanyaan tidak boleh kosong!");t&&o==="pending_answer"&&(o="published"),C("Menyimpan Q&A...");const n={id:a,question:r,answer:t,category:e,authorName:s,status:o,updatedAt:new Date().toISOString()};let l=[...c.faqs||[]];const m=l.findIndex(i=>i.id===a);m>-1?l[m]={...l[m],...n}:l.unshift(n),c.faqs=l;try{await g.collection("freshmart").doc("cms_data").collection("faqs").doc(a).set(n,{merge:!0})}catch(i){console.warn("Gagal set ke sub-koleksi faqs:",i)}try{await g.collection("freshmart").doc("cms_data").set({faqs:l},{merge:!0})}catch(i){console.warn("Gagal update cms_data.faqs:",i)}S(),$(),f("Q&A Berhasil Disimpan!"),v()},Z=a=>{H("Hapus Q&A","Yakin ingin menghapus pertanyaan ini?",async()=>{C("Menghapus Q&A...");let e=(c.faqs||[]).filter(s=>s.id!==a);c.faqs=e;try{await g.collection("freshmart").doc("cms_data").collection("faqs").doc(a).delete()}catch(s){console.warn("Gagal delete dari sub-koleksi faqs:",s)}try{await g.collection("freshmart").doc("cms_data").set({faqs:e},{merge:!0})}catch(s){console.warn("Gagal update cms_data.faqs:",s)}S(),f("Q&A Berhasil Dihapus!"),v()})};window.attachFAQRealtime=q;window.renderStorefrontFAQ=x;window.selectFAQCategory=_;window.filterStorefrontFAQ=R;window.toggleFAQAccordion=V;window.openAskQuestionModal=U;window.closeAskQuestionModal=L;window.submitCustomerQuestion=G;window.rAdmFAQ=v;window.setAdminFAQFilter=z;window.openFAQModal=J;window.closeAdminFAQModal=$;window.saveAdminFAQ=X;window.deleteAdminFAQ=Z;const W=5,K=[{id:"log-1-10-95",version:"v1.10.95",date:"2026-10-08",title:"Universal Dual-Engine Scanner Kamera HP & Toleransi Presisi Barcode Label Anti Gagal Temukan",category:"feature",badge:"Universal Dual-Engine Camera Scanner & Barcode Matcher v1.10.95",items:["Universal Dual-Engine Barcode Scanner POS Kasir (pos.js): Mengintegrasikan engine Html5Qrcode (ZXing) lokal berkinerja tinggi sebagai pemindai utama yang kompatibel 100% di semua browser smartphone (Android Chrome, iOS Safari, WebView Capacitor, Firefox) dengan fallback otomatis ke native BarcodeDetector jika offline.","Area Bidik Horizontal Optimal Barcode 1D (qrbox aspect 2.2:1): Viewfinder kamera HP dikalibrasi khusus untuk barcode memanjang (Code 128 / EAN-13) dengan reticle aspect-[2.2/1] dan resolusi dinamis, menghilangkan kendala kamera HP yang sebelumnya tidak bisa memindai atau terpotong area kubus sempit.","Aset Lokal html5-qrcode.min.js Anti-Gagal Offline: Pustaka scanner kini tersimpan langsung di public/html5-qrcode.min.js sehingga kamera scanner dapat berjalan instan tanpa tergantung koneksi CDN internet.","Engine Pencocokan Barcode Bertoleransi Tinggi (getBarcodeVariations & matchCodeAny): Mendukung pembersihan otomatis awalan nol scanner (leading zeroes 0899... vs 899...), padding format UPC-A/EAN-13 (12 digit ke 13 digit), barcode bertipe data numerik di database, serta toleransi variasi spasi dan tanda hubung SKU.","Feedback Cerdas Kasir & Deteksi Produk Nonaktif: Jika barcode terbaca namun berstatus nonaktif di master admin, kasir mendapatkan notifikasi spesifik sehingga tidak bingung. Dilengkapi tombol kilat 'Cari Teks di POS' untuk mencari produk terdekat dalam 1 ketukan.","Pencarian Etalase Storefront Bebas Hambat Kategori: Filter penelusuran katalog etalase (catalog.js) otomatis mengizinkan produk yang discan lewat kamera tampil seketika meskipun pembeli sedang berada di tab kategori yang berbeda.","Multi-Channel Distribution v1.10.95 (Android versionCode 11095)."]},{id:"log-1-10-94",version:"v1.10.94",date:"2026-10-08",title:"Resolusi Paripurna Keterbacaan Barcode Label & Penyatuan Engine Pencarian POS Kasir & Etalase Storefront",category:"feature",badge:"High-Readability Barcode & Unified Scanner Search v1.10.94",items:["Engine Barcode Code 128 Vektor Murni Generasi Baru (barcode-code128.js): Menambahkan kompresi otomatis Code 128 Subtipe C untuk digit angka genap (batang barcode 40-50% lebih lebar dan tebal), Quiet Zone standar ISO/IEC 15417 (>= 12 modul), background putih solid murni (#ffffff), dan tinggi batang default 58 untuk first-pass read rate 100% pada seluruh scanner laser USB, Bluetooth, maupun kamera HP.","Desain Proporsional Label Stiker Thermal (barcode-label-modal.js): Mengalokasikan 60%+ area stiker untuk batang barcode (tinggi fisik 14-17mm), nama barang 1 baris terpotong rapi dengan elipsis, crisp edges rendering, serta peningkatan tinggi barcode RawBT ESC/POS ke 55 dots.","Penyatuan Pencocokan Barcode POS Kasir (pos.js): Fungsi findProductOrVariantByBarcode kini membersihkan prefix AIM Symbology hardware (]C1, ]e0), karakter kontrol, serta mendukung pencocokan menyeluruh: barcode pabrik, SKU toko, ID produk, fallback label SKU-id, barcode varian, SKU varian, dan fallback varian.","Auto-Add Enter Barcode pada Kotak Cari POS: Input pencarian kasir (#pos-search-input) kini dilengkapi event listener tombol Enter cerdas (handlePOSSearchKeydown) yang seketika mendeteksi tembakan barcode scanner, langsung memasukkan barang ke keranjang kasir dengan audio chime kasir, dan membersihkan kolom pencarian.","Pencarian Barcode di Etalase Storefront & Admin Table: Filter penelusuran katalog etalase (rCat di catalog.js) dan direktori produk admin (table.js) kini mengenali kode barcode fisik, varian barcode, ID produk, dan fallback label cetak.","Multi-Channel Distribution v1.10.94 (Android versionCode 11094)."]},{id:"log-1-10-93",version:"v1.10.93",date:"2026-10-08",title:"Standardisasi Bahasa & Copywriting Profesional Enterprise (Storefront, Checkout, WhatsApp & POS)",category:"feature",badge:"Enterprise Copywriting & Tone of Voice v1.10.93",items:["Storefront & Etalase Material: Transformasi menyeluruh teks penelusuran, kategori alat teknik, empty state keranjang, dan formulir pengajuan Surat Penawaran Resmi (SPH) dengan diksi bisnis konstruksi yang meyakinkan kontraktor dan pemilik proyek.","Alur Checkout Online 3 Langkah: Penyempurnaan opsi pengiriman langsung ke proyek/mandor dengan koordinasi titik bongkar muat armada, kejelasan termin pembayaran (Transfer, QRIS, COD, Cash Tempo VIP, Putri PayLater), serta pesan konfirmasi pesanan yang ramah dan formal.","Otomasi Pesan WhatsApp Pelanggan & Logistik: Template notifikasi resmi berstruktur rapi (Kop Toko, No. Referensi, Status Pemrosesan, Alamat Proyek) untuk status Baru, Diproses, Selesai, dan Drop-Point Armada, menggantikan gaya percakapan kaku/bot.","POS Kasir & Struk Termal Resmi: Penyelarasan notifikasi kasir (validasi stok persediaan, penahanan antrean, pengosongan keranjang) dan standarisasi teks penutup struk/nota retur resmi untuk membangun kepercayaan pelanggan ritel maupun grosir.","Multi-Channel Distribution v1.10.93 (Android versionCode 11093)."]},{id:"log-1-10-92",version:"v1.10.92",date:"2026-10-08",title:"Sistem Cetak Label Barcode & Harga Universal (Thermal Stiker Roll & Kertas A4)",category:"feature",badge:"Universal Barcode Label Printer v1.10.92",items:["Engine Barcode Code 128 Vektor Murni (barcode-code128.js): Menghadirkan generator barcode Code 128 native SVG beresolusi tinggi tanpa dependensi eksternal, menghasilkan garis barcode hitam pekat kristal yang 100% terbaca instan oleh seluruh pemindai laser kasir POS.","Modal Pintar Cetak Label Universal (barcode-label-modal.js): Modal konfigurasi cetak stiker label dengan pratinjau live skala 1:1, dukungan multi-varian dengan input jumlah cetak mandiri per varian, opsi stepper (+1, +5, +10, Set Sesuai Stok Fisik), dan tombol toggle informasi stiker (Kop Toko, Harga, Satuan, Teks SKU).","Multi-Printer & Preset Kertas Lengkap: Mendukung Printer Thermal Stiker Roll khusus (40x30mm, 50x30mm, continuous 58mm & 80mm) via isolasi CSS @page peramban maupun transmisi langsung ESC/POS Bluetooth / RawBT Android, serta format kisi Kertas Stiker A4 Lembaran (Grid 3x10 / 30 label & Grid 2x7 / 14 label) untuk printer inkjet/laser standar.","Aksesibilitas 1-Klik di Katalog & PO: Tombol 'Label' pada baris produk admin table, chip SKU berkemampuan interaktif, tombol cetak di header modal Bento FIFO, serta tombol cetak kilat pada dokumen penerimaan barang PO kulakan.","Multi-Channel Distribution v1.10.92 (Android versionCode 11092)."]},{id:"log-1-10-91",version:"v1.10.91",date:"2026-10-08",title:"Operasional Kasir Presisi (Arus Kas Laci & Shortcuts) & Finansial Piutang Toko A4 / CSV",category:"feature",badge:"Cash Movements, Keyboard Turbo & Debt Recap v1.10.91",items:["Pilar A — Manajemen Arus Kas Laci Kasir (Cash In / Cash Out Movements): Mengintegrasikan modal pencatatan kas masuk & kas keluar mandiri (modal-pos-cash-movement) yang otomatis sinkron dengan buku beban operasional toko (appData.expenses) dan cloud pos_shifts. Perhitungan uang kas diharapkan (expectedCash) pada X-Report & Z-Report kini 100% presisi: max(0, startingCash + cashSales + cashIn - cashOut).","Pilar A — Keyboard Shortcuts Desktop Kasir Lengkap & Chiclet Quick Bar: Memperluas pemindai keyboard kasir dengan [F1 / F2] fokus pencarian, [F10] Shift X/Z, [F11] Arus Kas Laci, dan tombol [Spasi Cepat] saat kursor bebas untuk langsung mengaktifkan pemindai barcode / pencarian seketika tanpa mouse.","Pilar A — Sinkronisasi Thermal Struk Shift (rawbt.js): Slip rekap shift X-Report dan Z-Report thermal ESC/POS kini otomatis menyertakan baris Kas Masuk (In), Kas Keluar (Out), serta status posisi uang kas laci terkini.","Pilar B — Cetak Rekap Buku Piutang Toko A4 & Ekspor CSV (tempo.js & documents.js): Menghadirkan cetak Rekap Buku Besar Piutang Toko resmi standar A4 (type: 'tempo_recap') dengan nomor registrasi AR, aging keterlambatan debitur, kop toko, rekening pelunasan resmi, dan tanda tangan Owner/Penagih, serta ekspor file CSV instan (Rekap_Piutang_Toko_Putri.csv) ber-BOM UTF-8 kompatibel Excel.","Pilar B — Kartu Riwayat Mutasi Stok (Stock Card Ledger di fifo-modal.js): Tab baru 'Kartu Mutasi Stok' pada modal Bento FIFO produk yang merekonsiliasi barang masuk kulakan PO, barang keluar penjualan kasir/online, filter segmented (Semua, Masuk, Keluar), dan ringkasan kuantitas fisik real-time.","Multi-Channel Distribution v1.10.91 (Android versionCode 11091)."]}],j=a=>{if(!a)return[0,0,0];const e=String(a).match(/(\d+)\.(\d+)\.(\d+)/);return e?[parseInt(e[1],10),parseInt(e[2],10),parseInt(e[3],10)]:[0,0,0]},A=(a,e)=>{const[s,r,t]=j(a),[o,n,l]=j(e);return o!==s?o-s:n!==r?n-r:l-t},D=(a,e=W)=>{const s=a&&Array.isArray(a.changelog)?a.changelog:[],r=new Set(a&&Array.isArray(a.deletedChangelogIds)?a.deletedChangelogIds:[]),t=new Set(s.map(i=>i.id||i.version)),o=K.filter(i=>!t.has(i.id)&&!t.has(i.version)&&!r.has(i.id)&&!r.has(i.version)),m=[...s.filter(i=>!r.has(i.id)&&!r.has(i.version)),...o].sort((i,w)=>{const P=new Date(i.date||"2026-01-01").getTime(),F=new Date(w.date||"2026-01-01").getTime();return F!==P?F-P:A(i.version,w.version)});return typeof e=="number"&&e>0?m.slice(0,e):m},Y=a=>{const e=K[0]?.version||"v1.10.94",s=D(a,null);if(!s||s.length===0)return e;let r=s[0].version||e;for(const t of s)t.version&&A(t.version,r)<0&&(r=t.version);return A(e,r)<0&&(r=e),r};let h="all";const ee=a=>{if(!a)return"";try{const e=a.split("-");return e.length===3?new Date(parseInt(e[0]),parseInt(e[1])-1,parseInt(e[2])).toLocaleDateString("id-ID",{day:"numeric",month:"short",year:"numeric"}):a}catch{return a}},ae=a=>{switch(a){case"feature":return{label:"Fitur Baru",icon:"fa-rocket",colorClass:"bg-slate-100 dark:bg-slate-800/90 text-slate-700 dark:text-slate-300 border-slate-200/80 dark:border-slate-700/80",iconColor:"text-[var(--color-primary)]"};case"optimization":return{label:"Optimasi",icon:"fa-bolt-lightning",colorClass:"bg-slate-100 dark:bg-slate-800/90 text-slate-700 dark:text-slate-300 border-slate-200/80 dark:border-slate-700/80",iconColor:"text-[var(--color-primary)]"};case"maintenance":return{label:"Maintenance",icon:"fa-wrench",colorClass:"bg-slate-100 dark:bg-slate-800/90 text-slate-700 dark:text-slate-300 border-slate-200/80 dark:border-slate-700/80",iconColor:"text-[var(--color-primary)]"};case"security":return{label:"Keamanan",icon:"fa-shield-halved",colorClass:"bg-red-50 dark:bg-red-950/40 text-red-700 dark:text-red-300 border-red-200/80 dark:border-red-800/60",iconColor:"text-red-500 dark:text-red-400"};case"bugfix":return{label:"Perbaikan",icon:"fa-bug-slash",colorClass:"bg-slate-100 dark:bg-slate-800/90 text-slate-700 dark:text-slate-300 border-slate-200/80 dark:border-slate-700/80",iconColor:"text-[var(--color-primary)]"};default:return{label:"Update",icon:"fa-tag",colorClass:"bg-slate-100 dark:bg-slate-800/90 text-slate-700 dark:text-slate-300 border-slate-200/80 dark:border-slate-700/80",iconColor:"text-[var(--color-primary)]"}}},te=()=>{const a=u("changelog-items-container");if(!a)return;const e=D(c),s=h==="all"?e:e.filter(t=>t.category===h);if(s.length===0){a.innerHTML=`
        <div class="flex flex-col items-center justify-center py-12 text-center text-slate-400">
            <div class="w-14 h-14 rounded-2xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-2xl mb-3">
                <i class="fa-solid fa-clipboard-list opacity-60"></i>
            </div>
            <p class="text-xs font-bold text-slate-600 dark:text-slate-300">Belum ada catatan pada kategori ini</p>
            <p class="text-[10px] text-slate-400 mt-0.5">Pilih filter kategori lain di atas</p>
        </div>`;return}let r="";s.forEach((t,o)=>{const n=o===0&&h==="all",l=ae(t.category),m=ee(t.date),i=(t.items||[]).map(w=>`
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
                        <i class="fa-regular fa-calendar text-[10px]"></i> ${d(m)}
                    </span>
                </div>

                <h4 class="text-xs sm:text-sm font-extrabold text-slate-800 dark:text-white leading-snug mb-3">
                    ${d(t.title||"Pembaruan Sistem")}
                </h4>

                <ul class="space-y-2">
                    ${i}
                </ul>
            </div>
        </div>`}),a.innerHTML=r},O=a=>{h=a,document.querySelectorAll(".btn-changelog-filter").forEach(e=>{const s=e.getAttribute("data-category"),r=e.querySelector("i");s===a?(e.className="btn-changelog-filter shrink-0 whitespace-nowrap flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-[10px] sm:text-xs font-bold primary-bg text-white shadow-xs transition-all cursor-pointer border border-transparent",r&&(r.className=r.className.replace(/text-\[[^\]]+\]/g,"").trim()+" text-white")):(e.className="btn-changelog-filter shrink-0 whitespace-nowrap flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-[10px] sm:text-xs font-bold bg-white dark:bg-slate-800/90 hover:bg-slate-100 dark:hover:bg-slate-700/80 border border-slate-200/80 dark:border-slate-700/80 text-slate-700 dark:text-slate-300 transition-all cursor-pointer",r&&s!=="all"?r.className=r.className.replace(/\btext-white\b/g,"").trim()+" text-[var(--color-primary)]":r&&s==="all"&&(r.className=r.className.replace(/\btext-white\b/g,"").trim()+" text-slate-400"))}),te()},se=(a="all")=>{let e=u("changelog-modal");e||(e=document.createElement("div"),e.id="changelog-modal",e.className="fixed inset-0 z-[125] bg-slate-900/80 flex items-end sm:items-center justify-center p-0 sm:p-4 opacity-0 transition-opacity duration-300",e.onclick=t=>{t.target===e&&E()},e.innerHTML=`
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
        </div>`,document.body.appendChild(e));const s=Y(c),r=u("changelog-header-ver");r&&(r.textContent=s),h=a,O(a),e.style.display!=="flex"&&N("changelog"),e.style.display="flex",e.offsetWidth,requestAnimationFrame(()=>{e.classList.remove("opacity-0");const t=u("changelog-modal-box");t&&t.classList.remove("translate-y-full","sm:translate-y-8")})},E=(a=!1)=>{const e=u("changelog-modal");if(!e||e.style.display==="none")return;const s=()=>{e.classList.add("opacity-0");const r=u("changelog-modal-box");r&&r.classList.add("translate-y-full","sm:translate-y-8"),setTimeout(()=>{e.style.display="none"},300)};typeof M=="function"?M("changelog",a,s):s()};window.openChangelogModal=se;window.closeChangelogModal=E;window.filterChangelog=O;export{Y as a,A as c,D as g};
