import{q as b,a as c,i as d,e as u,o as P,g as p,k as x,l as M,n as q,G as g,a1 as K,H as B,v as L,ag as H,r as Q}from"./module-print-B7a6cnwC.js";let j=null;const S=()=>{if(!j)try{j=b.collection("freshmart").doc("cms_data").collection("faqs").onSnapshot(a=>{a&&a.docs&&(c.faqs=a.docs.map(e=>({id:e.id,...e.data()}))),typeof window.curViewName<"u"&&window.curViewName==="view-faq"&&k(),window.isAdm&&typeof window.cTab<"u"&&window.cTab==="faqs"&&typeof window.rAdmFAQ=="function"&&window.rAdmFAQ()},a=>{console.warn("Sync sub-koleksi faqs dibatasi, menggunakan fallback cms_data.faqs:",a.message),typeof window.curViewName<"u"&&window.curViewName==="view-faq"&&k(),window.isAdm&&typeof window.cTab<"u"&&window.cTab==="faqs"&&typeof window.rAdmFAQ=="function"&&window.rAdmFAQ()})}catch{console.warn("Fallback sync Q&A dari cms_data aktif")}};let y="Semua";const k=()=>{S();const a=document.getElementById("storefront-faq-container"),e=document.getElementById("faq-category-pills");if(!a)return;const s=(c.faqs||[]).filter(i=>i.status==="published"),r=["Semua","Pemesanan","Pengiriman","Pembayaran","Garansi","Lainnya"];e&&(e.innerHTML=r.map(i=>`
            <button onclick="selectFAQCategory('${i}')" class="px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${y===i?"primary-bg text-white shadow-md":"bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-slate-100"}">
                ${i}
            </button>
        `).join(""));const t=(document.getElementById("faq-search-input")?.value||"").toLowerCase().trim(),o=s.filter(i=>{const l=y==="Semua"||i.category===y,m=!t||(i.question||"").toLowerCase().includes(t)||(i.answer||"").toLowerCase().includes(t);return l&&m});if(!o.length){a.innerHTML=`
            <div class="text-center py-12 bg-white dark:bg-slate-800 rounded-3xl border border-slate-200 dark:border-slate-700 p-6 shadow-sm">
                <div class="w-16 h-16 rounded-full primary-bg-soft primary-text mx-auto flex items-center justify-center mb-3">
                    <i class="fa-solid fa-circle-question text-3xl"></i>
                </div>
                <h3 class="font-bold text-slate-800 dark:text-white text-base">Belum Ada Q&A Ditemukan</h3>
                <p class="text-xs text-slate-500 mt-1 max-w-sm mx-auto">Punya pertanyaan lain? Silakan gunakan tombol <b>Ajukan Pertanyaan</b> untuk bertanya ke admin.</p>
                <button onclick="openAskQuestionModal()" class="mt-4 primary-bg text-white px-5 py-2.5 rounded-xl text-xs font-bold shadow-md active:scale-95 transition-all">Ajukan Pertanyaan Sekarang</button>
            </div>
        `;return}a.innerHTML=o.map(i=>`
        <div class="bg-white dark:bg-slate-800/95 rounded-2xl border border-slate-200/80 dark:border-slate-700/80 shadow-soft transition-all duration-200 hover:shadow-md overflow-hidden">
            <button onclick="toggleFAQAccordion('${i.id}')" class="w-full p-4 sm:p-5 text-left flex items-start justify-between gap-3.5 hover:bg-slate-50/80 dark:hover:bg-slate-800/60 transition-colors">
                <div class="flex items-start gap-3.5 min-w-0">
                    <div class="w-9 h-9 rounded-xl primary-bg text-white flex items-center justify-center shrink-0 mt-0.5 shadow-sm"><i class="fa-solid fa-question text-xs font-bold"></i></div>
                    <div class="min-w-0">
                        <div class="flex flex-wrap items-center gap-2 mb-1.5">
                            <span class="text-[9px] font-bold uppercase tracking-wider primary-bg-soft primary-text primary-border px-2.5 py-0.5 rounded-lg border">${d(i.category||"Umum")}</span>
                            ${i.authorName?`<span class="text-[10px] font-medium text-slate-400">Oleh: ${d(i.authorName)}</span>`:""}
                        </div>
                        <h4 class="font-bold text-sm sm:text-base text-slate-900 dark:text-white leading-snug break-words">${d(i.question)}</h4>
                    </div>
                </div>
                <div class="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-700/80 flex items-center justify-center text-slate-400 shrink-0 transition-transform duration-300" id="faq-icon-${i.id}">
                    <i class="fa-solid fa-chevron-down text-xs"></i>
                </div>
            </button>
            <div class="hidden border-t border-slate-100 dark:border-slate-700/70 p-3.5 sm:p-5 primary-bg-soft dark:bg-slate-900/60 text-xs sm:text-sm font-medium leading-relaxed" id="faq-body-${i.id}">
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
                        <div class="text-slate-800 dark:text-slate-100 font-semibold leading-relaxed whitespace-pre-wrap break-words">${d(i.answer||"Belum ada jawaban.")}</div>
                    </div>
                </div>
            </div>
        </div>
    `).join("")},_=a=>{y=a,k()},O=()=>{k()},G=a=>{const e=document.getElementById(`faq-body-${a}`),s=document.getElementById(`faq-icon-${a}`);if(!e||!s)return;e.classList.contains("hidden")?(e.classList.remove("hidden"),s.classList.add("rotate-180")):(e.classList.add("hidden"),s.classList.remove("rotate-180"))},V=()=>{const a=u("modal-ask-question"),e=u("modal-ask-question-box");a&&(a.classList.contains("hidden")&&typeof window.pushModalHistory=="function"&&window.pushModalHistory("askQuestion"),P(a,e))},$=(a=!1)=>{const e=()=>{L("modal-ask-question","modal-ask-question-box")};typeof window.requestCloseModal=="function"?window.requestCloseModal("askQuestion",a,e):e()},z=async()=>{const a=(p("ask-author-name")||"").trim()||"Pelanggan",e=p("ask-category")||"Pemesanan",s=(p("ask-question-text")||"").trim();if(!s)return x("Tuliskan pertanyaan Anda terlebih dahulu!");M("Mengirim pertanyaan...");const r="faq-"+Date.now().toString(36),t={id:r,question:s,answer:"",category:e,authorName:a,status:"pending_answer",createdAt:new Date().toISOString()};let o=!1;try{await b.collection("freshmart").doc("cms_data").collection("faqs").doc(r).set(t),o=!0}catch(i){console.warn("Penulisan sub-koleksi faqs dibatasi, mencoba fallback cms_data.faqs:",i)}if(!o)try{const i=[t,...(c.faqs||[]).filter(l=>l.id!==r)];await b.collection("freshmart").doc("cms_data").set({faqs:i},{merge:!0}),c.faqs=i,o=!0}catch(i){console.warn("Fallback cms_data.faqs juga gagal:",i)}q(),o?($(),g("ask-question-text",""),x("Pertanyaan terkirim! Admin akan menjawabnya segera."),k()):x("Gagal mengirim pertanyaan. Coba lagi!")};let f="all";const v=()=>{S();const a=c.faqs||[],e=a.filter(t=>f==="pending"?t.status==="pending_answer":f==="published"?t.status==="published":!0),s=a.filter(t=>t.status==="pending_answer").length;let r=`
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
                <button onclick="setAdminFAQFilter('all')" class="shrink-0 px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${f==="all"?"primary-bg text-white shadow-md":"bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200"}">
                    Semua (${a.length})
                </button>
                <button onclick="setAdminFAQFilter('pending')" class="shrink-0 px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${f==="pending"?"primary-bg text-white shadow-md":"bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200"}">
                    <span>Belum Dijawab</span>
                    ${s>0?`<span class="bg-rose-500 text-white text-[9px] px-1.5 py-0.5 rounded-full font-bold">${s}</span>`:""}
                </button>
                <button onclick="setAdminFAQFilter('published')" class="shrink-0 px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${f==="published"?"primary-bg text-white shadow-md":"bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200"}">
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
    `;setH("admin-content",r)},J=a=>{f=a,v()},U=a=>{const e=(c.faqs||[]).find(t=>t.id===a)||{id:"",question:"",answer:"",category:"Pemesanan",authorName:"Admin",status:"published"};g("admin-faq-id",e.id),g("admin-faq-category",e.category||"Pemesanan"),g("admin-faq-author",e.authorName||"Admin"),g("admin-faq-question",e.question||""),g("admin-faq-answer",e.answer||""),g("admin-faq-status",e.status||"published"),K("admin-faq-modal-title",a?"Edit Q&A":"Tambah Q&A Baru");const s=u("modal-admin-faq"),r=u("modal-admin-faq-box");s&&(s.classList.contains("hidden")&&typeof window.pushModalHistory=="function"&&window.pushModalHistory("adminFAQ"),P(s,r))},D=(a=!1)=>{const e=()=>{L("modal-admin-faq","modal-admin-faq-box")};typeof window.requestCloseModal=="function"?window.requestCloseModal("adminFAQ",a,e):e()},W=async()=>{const a=p("admin-faq-id")||"faq-"+Date.now().toString(36),e=p("admin-faq-category"),s=(p("admin-faq-author")||"").trim()||"Admin",r=(p("admin-faq-question")||"").trim(),t=(p("admin-faq-answer")||"").trim();let o=p("admin-faq-status");if(!r)return x("Pertanyaan tidak boleh kosong!");t&&o==="pending_answer"&&(o="published"),M("Menyimpan Q&A...");const i={id:a,question:r,answer:t,category:e,authorName:s,status:o,updatedAt:new Date().toISOString()};let l=[...c.faqs||[]];const m=l.findIndex(n=>n.id===a);m>-1?l[m]={...l[m],...i}:l.unshift(i),c.faqs=l;try{await b.collection("freshmart").doc("cms_data").collection("faqs").doc(a).set(i,{merge:!0})}catch(n){console.warn("Gagal set ke sub-koleksi faqs:",n)}try{await b.collection("freshmart").doc("cms_data").set({faqs:l},{merge:!0})}catch(n){console.warn("Gagal update cms_data.faqs:",n)}q(),D(),x("Q&A Berhasil Disimpan!"),v()},Z=a=>{B("Hapus Q&A","Yakin ingin menghapus pertanyaan ini?",async()=>{M("Menghapus Q&A...");let e=(c.faqs||[]).filter(s=>s.id!==a);c.faqs=e;try{await b.collection("freshmart").doc("cms_data").collection("faqs").doc(a).delete()}catch(s){console.warn("Gagal delete dari sub-koleksi faqs:",s)}try{await b.collection("freshmart").doc("cms_data").set({faqs:e},{merge:!0})}catch(s){console.warn("Gagal update cms_data.faqs:",s)}q(),x("Q&A Berhasil Dihapus!"),v()})};window.attachFAQRealtime=S;window.renderStorefrontFAQ=k;window.selectFAQCategory=_;window.filterStorefrontFAQ=O;window.toggleFAQAccordion=G;window.openAskQuestionModal=V;window.closeAskQuestionModal=$;window.submitCustomerQuestion=z;window.rAdmFAQ=v;window.setAdminFAQFilter=J;window.openFAQModal=U;window.closeAdminFAQModal=D;window.saveAdminFAQ=W;window.deleteAdminFAQ=Z;const X=5,I=[{id:"log-1-17-08",version:"v1.17.8",date:"2026-10-15",title:"Resolusi Komprehensif Tombol Kembali & Tutup Modal, Navigasi Deterministik Seketika & Stabilitas Keyboard Native Android",category:"feature",badge:"Navigasi Deterministik & Keyboard Native v1.17.8",items:["Navigasi Kembali In-App Deterministik Seketika (1-Klik Pasti Kembali): Mengeliminasi tombol kembali yang macet di web dan aplikasi Android dengan mengganti ketergantungan rapuh window.history.back() pada tombol in-app header (Keranjang, Checkout, Pembayaran, Pesanan, Favorit, FAQ, dan Admin Login) menjadi navigasi deterministik terstruktur changeView(targetView, true) seketika pada sentuhan pertama.","Resolusi Konflik Double-Resize Keyboard Android (Native Window Resizing): Mengubah konfigurasi plugin Keyboard Capacitor dari 'resize: body' menjadi 'resize: native'. Eliminasi JavaScript layout thrashing pada document.body menuntaskan 100% masalah virtual keyboard Android (Gboard, Samsung Keyboard, Xiaomi) yang membuka-menutup sendiri (mental) saat pertama kali mengetik.","Sanitasi Peta Modal & Resolusi False-Positive factoryReset: Membersihkan elemen modal-factory-reset-box dari MODAL_ELEMENT_MAP agar status modal tertutup tidak lagi salah dilaporkan sebagai terbuka (isModalOpenInDOM) yang sebelumnya memblokir tombol kembali di halaman web.","Proteksi Sinkronisasi History URL Produk (Zero Navigation Lock): Menghapus eksekusi history.replaceState sinkron yang bertabrakan dengan in-flight history.back() saat menutup modal produk (closeProductModal) di engine Chromium/WebKit.","Multi-Channel Distribution v1.17.8 (Android versionCode 11708)."]},{id:"log-1-17-07",version:"v1.17.7",date:"2026-10-15",title:"Pusat Reset ke Setelan Awal (Clean Sweep & Data Purge), Triple-Guard Security, Auto-Backup Darurat & Opsi Pembersihan Transaksi",category:"security",badge:"Setelan Awal & Triple-Guard Security v1.17.7",items:["Fitur Reset ke Setelan Awal Eksklusif Pemilik Toko (Owner-Only): Menghadirkan pusat reset data dan pembersihan aplikasi terpadu di menu Pengaturan Toko dan Pusat Cadangan Data yang hanya dapat diakses oleh akun Pemilik (Owner).","Dua Opsi Mode Pembersihan Data: Opsi 1 (Hanya Transaksi & Operasional) membersihkan order, transaksi kasir, log shift, kas laci, pengeluaran, piutang tempo, RMA, dan log opname dengan tetap mempertahankan master produk, stok, kategori, dan supplier; Opsi 2 (Reset Total ke Setelan Awal) membersihkan seluruh transaksi + katalog produk + varian + banner + data pelanggan menjadi fresh bersih seperti baru.","Triple-Guard Security Anti-Kecelakaan Data: Proteksi tiga lapis mencakup: Unduh Otomatis Cadangan Darurat (Emergency Safety Backup JSON) sebelum penghapusan, konfirmasi ketik frasa rahasia 'RESET KE SETELAN AWAL', serta persetujuan risiko via checkbox interaktif.","Proteksi Kedaulatan Lisensi & Kredensial Owner: Menjamin status langganan software (freshmart_licenses) dan akun login Pemilik Toko (ADMIN_UID) 100% aman dan tidak terhapus.","Multi-Channel Distribution v1.17.7 (Android versionCode 11707)."]},{id:"log-1-17-06",version:"v1.17.6",date:"2026-10-15",title:"Resolusi Bug Re-Aktivasi Flash Sale Selesai, Sinkronisasi Realtime Storefront, Auto-Extend Jadwal & Reset Kuota Terjual",category:"feature",badge:"Flash Sale Re-Activation & Realtime Storefront Sync v1.17.6",items:["Resolusi Bug Re-Aktivasi Sesi Flash Sale Selesai: Mengeliminasi kendala sesi flash sale yang telah selesai tidak muncul di etalase toko saat diaktifkan kembali. Sistem kini secara cerdas mendeteksi sesi kedaluwarsa dan otomatis memperpanjang jadwal mulai/berakhir dari waktu saat ini (+4 jam) serta menyegarkan kuota produk yang telah habis terjual.","Tombol Aksi Cepat 'Naikkan Lagi' & Reset Kuota Produk di CMS: Menambahkan tombol aksi 1-sentuhan 'Naikkan Lagi' pada kartu sesi berstatus SELESAI di CMS Admin, serta tombol reset kuota keterjualan per-produk dan reset seluruh kuota draft agar produk promo siap langsung dinaikkan kembali ke flash sale.","Sinkronisasi Realtime Storefront & doSync Storage Engine: Mengintegrasikan sinkronisasi realtime dokumen 'flashSales' pada listener 'attachRealtimeStockSync' (storage.js) sehingga perubahan status flash sale seketika ter-broadcast dan me-render panggung flash sale di seluruh perangkat tanpa perlu refresh manual.","Proteksi Anti-Kandang Kosong Storefront: Menyempurnakan renderStorefrontFlashSale() dengan parser tanggal aman parseSafeTimestamp() dan validasi cardsHtml sehingga seksi flash sale hanya terbuka jika terdapat produk aktif yang valid dan otomatis tertutup jika sesi/produk telah berakhir.","Multi-Channel Distribution v1.17.6 (Android versionCode 11706)."]},{id:"log-1-17-05",version:"v1.17.5",date:"2026-10-15",title:"Resolusi Forensik Runtime Checkout Tempo, Standarisasi Flag Produk Habis & Guard Perhitungan Pajak",category:"feature",badge:"Tempo Checkout Runtime Fix & Inventory Flag v1.17.5",items:["Resolusi Bug Impor Pembayaran Tempo (Zero ReferenceError): Menambahkan impor resmi 'vouch' dari state.js serta helper 'getEffP' mandiri pada payment.js sehingga kalkulasi sisa saldo Tempo tidak lagi melempar ReferenceError saat pembeli mengetik nominal DP.","Proteksi Anti-NaN Kalkulasi Pajak & Poin Member: Menambahkan fallback safe guard pada pemanggilan window.calcTaxDetails di fungsi calculateTempoBalance guna mencegah hasil kalkulasi menjadi 'Rp NaN'.","Standarisasi Tipe Data Flag Produk Habis (Boolean false): Menyelaraskan status 'isActive' produk induk saat stok habis dari string 'false' menjadi boolean false murni, konsisten dengan seluruh varian produk di database Firestore.","Multi-Channel Distribution v1.17.5 (Android versionCode 11705)."]},{id:"log-1-17-04",version:"v1.17.4",date:"2026-10-15",title:"Stabilitas Fokus Keyboard Mobile Android: Eliminasi Keyboard Menutup Sendiri, SoftInputMode AdjustResize & Standar Input Anti Auto-Zoom",category:"feature",badge:"Android Keyboard Stability & SoftInputMode v1.17.4",items:["Eliminasi Konflik Input Android (captureInput: false): Mematikan override BaseInputConnection pada konfigurasi Capacitor Android agar WebView menggunakan koneksi input standar Chromium modern, menuntaskan masalah keyboard Gboard, Samsung Keyboard, dan Xiaomi yang sering menutup sendiri saat mulai mengetik.","Integrasi windowSoftInputMode='adjustResize' Android: Mengonfigurasi mode penanganan keyboard pada MainActivity di AndroidManifest.xml sehingga layout aplikasi menyesuaikan tinggi viewport secara mulus saat keyboard muncul tanpa memicu reflow agresif atau kehilangan fokus (blur) pada elemen aktif.","Optimasi Plugin Keyboard Capacitor: Menambahkan konfigurasi resmi resize body dan resizeOnFullScreen pada plugin Keyboard di capacitor.config.json guna menjamin stabilitas area ketik pada layar Android berponi (notch) dan edge-to-edge.","Standardisasi Font Input Mobile Anti-Auto-Zoom (16px): Memastikan seluruh input, termasuk input-compact, stepper-input, dan member lookup form menggunakan font-size minimal 16px di viewport smartphone (<= 768px) untuk mencegah auto-zoom browser yang menggeser kursor kencang.","Proteksi User-Select Text pada Form: Memastikan seleksi teks murni aktif pada elemen input, select, dan textarea guna menjamin kursor tetap persisten di kolom yang sedang diketik.","Verifikasi 16 Test Suite Sistem Lolos 100%: Menjaga seluruh pengujian otomatis integritas RMA, Member VIP, Barcode Code 128, POS Header, Laporan Keuangan CSV & SVG, Estimator Material, Auth Guard, dan 78 dialog modal sistem lulus 100%.","Multi-Channel Distribution v1.17.4 (Android versionCode 11704)."]}],T=a=>{if(!a)return[0,0,0];const e=String(a).match(/(\d+)\.(\d+)\.(\d+)/);return e?[parseInt(e[1],10),parseInt(e[2],10),parseInt(e[3],10)]:[0,0,0]},A=(a,e)=>{const[s,r,t]=T(a),[o,i,l]=T(e);return o!==s?o-s:i!==r?i-r:l-t},N=(a,e=X)=>{const s=a&&Array.isArray(a.changelog)?a.changelog:[],r=new Set(a&&Array.isArray(a.deletedChangelogIds)?a.deletedChangelogIds:[]),t=new Set(s.map(n=>n.id||n.version)),o=I.filter(n=>!t.has(n.id)&&!t.has(n.version)&&!r.has(n.id)&&!r.has(n.version)),m=[...s.filter(n=>!r.has(n.id)&&!r.has(n.version)),...o].sort((n,w)=>{const C=new Date(n.date||"2026-01-01").getTime(),F=new Date(w.date||"2026-01-01").getTime();return F!==C?F-C:A(n.version,w.version)});return typeof e=="number"&&e>0?m.slice(0,e):m},Y=a=>{const e=I[0]?.version||"v1.10.91",s=N(a,null);if(!s||s.length===0)return e;let r=s[0].version||e;for(const t of s)t.version&&A(t.version,r)<0&&(r=t.version);return A(e,r)<0&&(r=e),r};let h="all";const ee=a=>{if(!a)return"";try{const e=a.split("-");return e.length===3?new Date(parseInt(e[0]),parseInt(e[1])-1,parseInt(e[2])).toLocaleDateString("id-ID",{day:"numeric",month:"short",year:"numeric"}):a}catch{return a}},ae=a=>{switch(a){case"feature":return{label:"Fitur Baru",icon:"fa-rocket",colorClass:"bg-slate-100 dark:bg-slate-800/90 text-slate-700 dark:text-slate-300 border-slate-200/80 dark:border-slate-700/80",iconColor:"text-[var(--color-primary)]"};case"optimization":return{label:"Optimasi",icon:"fa-bolt-lightning",colorClass:"bg-slate-100 dark:bg-slate-800/90 text-slate-700 dark:text-slate-300 border-slate-200/80 dark:border-slate-700/80",iconColor:"text-[var(--color-primary)]"};case"maintenance":return{label:"Maintenance",icon:"fa-wrench",colorClass:"bg-slate-100 dark:bg-slate-800/90 text-slate-700 dark:text-slate-300 border-slate-200/80 dark:border-slate-700/80",iconColor:"text-[var(--color-primary)]"};case"security":return{label:"Keamanan",icon:"fa-shield-halved",colorClass:"bg-red-50 dark:bg-red-950/40 text-red-700 dark:text-red-300 border-red-200/80 dark:border-red-800/60",iconColor:"text-red-500 dark:text-red-400"};case"bugfix":return{label:"Perbaikan",icon:"fa-bug-slash",colorClass:"bg-slate-100 dark:bg-slate-800/90 text-slate-700 dark:text-slate-300 border-slate-200/80 dark:border-slate-700/80",iconColor:"text-[var(--color-primary)]"};default:return{label:"Update",icon:"fa-tag",colorClass:"bg-slate-100 dark:bg-slate-800/90 text-slate-700 dark:text-slate-300 border-slate-200/80 dark:border-slate-700/80",iconColor:"text-[var(--color-primary)]"}}},te=()=>{const a=u("changelog-items-container");if(!a)return;const e=N(c),s=h==="all"?e:e.filter(t=>t.category===h);if(s.length===0){a.innerHTML=`
        <div class="flex flex-col items-center justify-center py-12 text-center text-slate-400">
            <div class="w-14 h-14 rounded-2xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-2xl mb-3">
                <i class="fa-solid fa-clipboard-list opacity-60"></i>
            </div>
            <p class="text-xs font-bold text-slate-600 dark:text-slate-300">Belum ada catatan pada kategori ini</p>
            <p class="text-[10px] text-slate-400 mt-0.5">Pilih filter kategori lain di atas</p>
        </div>`;return}let r="";s.forEach((t,o)=>{const i=o===0&&h==="all",l=ae(t.category),m=ee(t.date),n=(t.items||[]).map(w=>`
            <li class="flex items-start gap-2 text-xs font-medium text-slate-600 dark:text-slate-300 leading-relaxed">
                <i class="fa-solid fa-circle-check text-[var(--color-primary)] text-[11px] mt-1 shrink-0"></i>
                <span>${d(w)}</span>
            </li>
        `).join("");r+=`
        <div class="relative pl-6 sm:pl-8 pb-6 border-l-2 ${i?"border-[var(--color-primary)]":"border-slate-200 dark:border-slate-700"} last:border-l-transparent last:pb-2">
            <!-- Timeline Node Indicator -->
            <div class="absolute -left-[9px] top-0 w-4 h-4 rounded-full ${i?"bg-[var(--color-primary)] ring-4 ring-[rgba(var(--color-primary-rgb),0.2)]":"bg-slate-300 dark:bg-slate-600"} flex items-center justify-center transition-all">
                ${i?'<span class="w-1.5 h-1.5 rounded-full bg-white"></span>':""}
            </div>

            <!-- Card Box -->
            <div class="rounded-2xl border ${i?"border-[var(--color-primary)]/40 bg-[rgba(var(--color-primary-rgb),0.03)] dark:bg-[rgba(var(--color-primary-rgb),0.06)] shadow-sm":"border-slate-100 dark:border-slate-800/80 bg-slate-50/70 dark:bg-slate-800/40"} p-4 sm:p-5 transition-all">
                <div class="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <div class="flex items-center gap-2 flex-wrap">
                        <span class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-lg text-[11px] font-black tracking-wider uppercase ${i?"bg-[var(--color-primary)] text-white shadow-xs":"bg-slate-800 text-white dark:bg-slate-700"}">
                            ${d(t.version||"v1.0.0")}
                        </span>
                        <span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-md border text-[10px] font-bold ${l.colorClass}">
                            <i class="fa-solid ${l.icon} text-[9px] ${l.iconColor}"></i> ${d(l.label)}
                        </span>
                        ${i?`
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
                    ${n}
                </ul>
            </div>
        </div>`}),a.innerHTML=r},R=a=>{h=a,document.querySelectorAll(".btn-changelog-filter").forEach(e=>{const s=e.getAttribute("data-category"),r=e.querySelector("i");s===a?(e.className="btn-changelog-filter shrink-0 whitespace-nowrap flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-[10px] sm:text-xs font-bold primary-bg text-white shadow-xs transition-all cursor-pointer border border-transparent",r&&(r.className=r.className.replace(/text-\[[^\]]+\]/g,"").trim()+" text-white")):(e.className="btn-changelog-filter shrink-0 whitespace-nowrap flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-[10px] sm:text-xs font-bold bg-white dark:bg-slate-800/90 hover:bg-slate-100 dark:hover:bg-slate-700/80 border border-slate-200/80 dark:border-slate-700/80 text-slate-700 dark:text-slate-300 transition-all cursor-pointer",r&&s!=="all"?r.className=r.className.replace(/\btext-white\b/g,"").trim()+" text-[var(--color-primary)]":r&&s==="all"&&(r.className=r.className.replace(/\btext-white\b/g,"").trim()+" text-slate-400"))}),te()},se=(a="all")=>{let e=u("changelog-modal");e||(e=document.createElement("div"),e.id="changelog-modal",e.className="fixed inset-0 z-[125] bg-slate-900/80 flex items-end sm:items-center justify-center p-0 sm:p-4 opacity-0 transition-opacity duration-300",e.onclick=t=>{t.target===e&&E()},e.innerHTML=`
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
        </div>`,document.body.appendChild(e));const s=Y(c),r=u("changelog-header-ver");r&&(r.textContent=s),h=a,R(a),e.style.display!=="flex"&&H("changelog"),e.style.display="flex",e.offsetWidth,requestAnimationFrame(()=>{e.classList.remove("opacity-0");const t=u("changelog-modal-box");t&&t.classList.remove("translate-y-full","sm:translate-y-8")})},E=(a=!1)=>{const e=u("changelog-modal");if(!e||e.style.display==="none")return;const s=()=>{e.classList.add("opacity-0");const r=u("changelog-modal-box");r&&r.classList.add("translate-y-full","sm:translate-y-8"),setTimeout(()=>{e.style.display="none"},300)};typeof Q=="function"?Q("changelog",a,s):s()};window.openChangelogModal=se;window.closeChangelogModal=E;window.filterChangelog=R;export{Y as a,A as c,N as g};
