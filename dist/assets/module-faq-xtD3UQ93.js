import{q as b,a as c,i as d,e as u,o as L,g as p,k as x,l as M,n as S,G as g,a1 as H,H as N,v as B,af as E,r as P}from"./module-print-C_8bHKmW.js";let Q=null;const q=()=>{if(!Q)try{Q=b.collection("freshmart").doc("cms_data").collection("faqs").onSnapshot(a=>{a&&a.docs&&(c.faqs=a.docs.map(e=>({id:e.id,...e.data()}))),typeof window.curViewName<"u"&&window.curViewName==="view-faq"&&f(),window.isAdm&&typeof window.cTab<"u"&&window.cTab==="faqs"&&typeof window.rAdmFAQ=="function"&&window.rAdmFAQ()},a=>{console.warn("Sync sub-koleksi faqs dibatasi, menggunakan fallback cms_data.faqs:",a.message),typeof window.curViewName<"u"&&window.curViewName==="view-faq"&&f(),window.isAdm&&typeof window.cTab<"u"&&window.cTab==="faqs"&&typeof window.rAdmFAQ=="function"&&window.rAdmFAQ()})}catch{console.warn("Fallback sync Q&A dari cms_data aktif")}};let y="Semua";const f=()=>{q();const a=document.getElementById("storefront-faq-container"),e=document.getElementById("faq-category-pills");if(!a)return;const s=(c.faqs||[]).filter(r=>r.status==="published"),n=["Semua","Pemesanan","Pengiriman","Pembayaran","Garansi","Lainnya"];e&&(e.innerHTML=n.map(r=>`
            <button onclick="selectFAQCategory('${r}')" class="px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${y===r?"primary-bg text-white shadow-md":"bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-slate-100"}">
                ${r}
            </button>
        `).join(""));const t=(document.getElementById("faq-search-input")?.value||"").toLowerCase().trim(),o=s.filter(r=>{const l=y==="Semua"||r.category===y,m=!t||(r.question||"").toLowerCase().includes(t)||(r.answer||"").toLowerCase().includes(t);return l&&m});if(!o.length){a.innerHTML=`
            <div class="text-center py-12 bg-white dark:bg-slate-800 rounded-3xl border border-slate-200 dark:border-slate-700 p-6 shadow-sm">
                <div class="w-16 h-16 rounded-full primary-bg-soft primary-text mx-auto flex items-center justify-center mb-3">
                    <i class="fa-solid fa-circle-question text-3xl"></i>
                </div>
                <h3 class="font-bold text-slate-800 dark:text-white text-base">Belum Ada Q&A Ditemukan</h3>
                <p class="text-xs text-slate-500 mt-1 max-w-sm mx-auto">Punya pertanyaan lain? Silakan gunakan tombol <b>Ajukan Pertanyaan</b> untuk bertanya ke admin.</p>
                <button onclick="openAskQuestionModal()" class="mt-4 primary-bg text-white px-5 py-2.5 rounded-xl text-xs font-bold shadow-md active:scale-95 transition-all">Ajukan Pertanyaan Sekarang</button>
            </div>
        `;return}a.innerHTML=o.map(r=>`
        <div class="bg-white dark:bg-slate-800/95 rounded-2xl border border-slate-200/80 dark:border-slate-700/80 shadow-soft transition-all duration-200 hover:shadow-md overflow-hidden">
            <button onclick="toggleFAQAccordion('${r.id}')" class="w-full p-4 sm:p-5 text-left flex items-start justify-between gap-3.5 hover:bg-slate-50/80 dark:hover:bg-slate-800/60 transition-colors">
                <div class="flex items-start gap-3.5 min-w-0">
                    <div class="w-9 h-9 rounded-xl primary-bg text-white flex items-center justify-center shrink-0 mt-0.5 shadow-sm"><i class="fa-solid fa-question text-xs font-bold"></i></div>
                    <div class="min-w-0">
                        <div class="flex flex-wrap items-center gap-2 mb-1.5">
                            <span class="text-[9px] font-bold uppercase tracking-wider primary-bg-soft primary-text primary-border px-2.5 py-0.5 rounded-lg border">${d(r.category||"Umum")}</span>
                            ${r.authorName?`<span class="text-[10px] font-medium text-slate-400">Oleh: ${d(r.authorName)}</span>`:""}
                        </div>
                        <h4 class="font-bold text-sm sm:text-base text-slate-900 dark:text-white leading-snug break-words">${d(r.question)}</h4>
                    </div>
                </div>
                <div class="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-700/80 flex items-center justify-center text-slate-400 shrink-0 transition-transform duration-300" id="faq-icon-${r.id}">
                    <i class="fa-solid fa-chevron-down text-xs"></i>
                </div>
            </button>
            <div class="hidden border-t border-slate-100 dark:border-slate-700/70 p-3.5 sm:p-5 primary-bg-soft dark:bg-slate-900/60 text-xs sm:text-sm font-medium leading-relaxed" id="faq-body-${r.id}">
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
                        <div class="text-slate-800 dark:text-slate-100 font-semibold leading-relaxed whitespace-pre-wrap break-words">${d(r.answer||"Belum ada jawaban.")}</div>
                    </div>
                </div>
            </div>
        </div>
    `).join("")},K=a=>{y=a,f()},R=()=>{f()},_=a=>{const e=document.getElementById(`faq-body-${a}`),s=document.getElementById(`faq-icon-${a}`);if(!e||!s)return;e.classList.contains("hidden")?(e.classList.remove("hidden"),s.classList.add("rotate-180")):(e.classList.add("hidden"),s.classList.remove("rotate-180"))},V=()=>{const a=u("modal-ask-question"),e=u("modal-ask-question-box");a&&(a.classList.contains("hidden")&&typeof window.pushModalHistory=="function"&&window.pushModalHistory("askQuestion"),L(a,e))},j=(a=!1)=>{const e=()=>{B("modal-ask-question","modal-ask-question-box")};typeof window.requestCloseModal=="function"?window.requestCloseModal("askQuestion",a,e):e()},z=async()=>{const a=(p("ask-author-name")||"").trim()||"Pelanggan",e=p("ask-category")||"Pemesanan",s=(p("ask-question-text")||"").trim();if(!s)return x("Tuliskan pertanyaan Anda terlebih dahulu!");M("Mengirim pertanyaan...");const n="faq-"+Date.now().toString(36),t={id:n,question:s,answer:"",category:e,authorName:a,status:"pending_answer",createdAt:new Date().toISOString()};let o=!1;try{await b.collection("freshmart").doc("cms_data").collection("faqs").doc(n).set(t),o=!0}catch(r){console.warn("Penulisan sub-koleksi faqs dibatasi, mencoba fallback cms_data.faqs:",r)}if(!o)try{const r=[t,...(c.faqs||[]).filter(l=>l.id!==n)];await b.collection("freshmart").doc("cms_data").set({faqs:r},{merge:!0}),c.faqs=r,o=!0}catch(r){console.warn("Fallback cms_data.faqs juga gagal:",r)}S(),o?(j(),g("ask-question-text",""),x("Pertanyaan terkirim! Admin akan menjawabnya segera."),f()):x("Gagal mengirim pertanyaan. Coba lagi!")};let k="all";const v=()=>{q();const a=c.faqs||[],e=a.filter(t=>k==="pending"?t.status==="pending_answer":k==="published"?t.status==="published":!0),s=a.filter(t=>t.status==="pending_answer").length;let n=`
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
    `;setH("admin-content",n)},J=a=>{k=a,v()},U=a=>{const e=(c.faqs||[]).find(t=>t.id===a)||{id:"",question:"",answer:"",category:"Pemesanan",authorName:"Admin",status:"published"};g("admin-faq-id",e.id),g("admin-faq-category",e.category||"Pemesanan"),g("admin-faq-author",e.authorName||"Admin"),g("admin-faq-question",e.question||""),g("admin-faq-answer",e.answer||""),g("admin-faq-status",e.status||"published"),H("admin-faq-modal-title",a?"Edit Q&A":"Tambah Q&A Baru");const s=u("modal-admin-faq"),n=u("modal-admin-faq-box");s&&(s.classList.contains("hidden")&&typeof window.pushModalHistory=="function"&&window.pushModalHistory("adminFAQ"),L(s,n))},I=(a=!1)=>{const e=()=>{B("modal-admin-faq","modal-admin-faq-box")};typeof window.requestCloseModal=="function"?window.requestCloseModal("adminFAQ",a,e):e()},W=async()=>{const a=p("admin-faq-id")||"faq-"+Date.now().toString(36),e=p("admin-faq-category"),s=(p("admin-faq-author")||"").trim()||"Admin",n=(p("admin-faq-question")||"").trim(),t=(p("admin-faq-answer")||"").trim();let o=p("admin-faq-status");if(!n)return x("Pertanyaan tidak boleh kosong!");t&&o==="pending_answer"&&(o="published"),M("Menyimpan Q&A...");const r={id:a,question:n,answer:t,category:e,authorName:s,status:o,updatedAt:new Date().toISOString()};let l=[...c.faqs||[]];const m=l.findIndex(i=>i.id===a);m>-1?l[m]={...l[m],...r}:l.unshift(r),c.faqs=l;try{await b.collection("freshmart").doc("cms_data").collection("faqs").doc(a).set(r,{merge:!0})}catch(i){console.warn("Gagal set ke sub-koleksi faqs:",i)}try{await b.collection("freshmart").doc("cms_data").set({faqs:l},{merge:!0})}catch(i){console.warn("Gagal update cms_data.faqs:",i)}S(),I(),x("Q&A Berhasil Disimpan!"),v()},Z=a=>{N("Hapus Q&A","Yakin ingin menghapus pertanyaan ini?",async()=>{M("Menghapus Q&A...");let e=(c.faqs||[]).filter(s=>s.id!==a);c.faqs=e;try{await b.collection("freshmart").doc("cms_data").collection("faqs").doc(a).delete()}catch(s){console.warn("Gagal delete dari sub-koleksi faqs:",s)}try{await b.collection("freshmart").doc("cms_data").set({faqs:e},{merge:!0})}catch(s){console.warn("Gagal update cms_data.faqs:",s)}S(),x("Q&A Berhasil Dihapus!"),v()})};window.attachFAQRealtime=q;window.renderStorefrontFAQ=f;window.selectFAQCategory=K;window.filterStorefrontFAQ=R;window.toggleFAQAccordion=_;window.openAskQuestionModal=V;window.closeAskQuestionModal=j;window.submitCustomerQuestion=z;window.rAdmFAQ=v;window.setAdminFAQFilter=J;window.openFAQModal=U;window.closeAdminFAQModal=I;window.saveAdminFAQ=W;window.deleteAdminFAQ=Z;const X=5,D=[{id:"log-1-15-05",version:"v1.15.5",date:"2026-10-11",title:"Audit Sistem Menyeluruh, Optimasi Code-Splitting Bundle Admin, Harmonisasi Desain Tema Dinamis & Penguatan Guard Input",category:"feature",badge:"System Audit & Code-Splitting Optimization v1.15.5",items:["Optimasi Kinerja Bundling & Code-Splitting (Vite 5): Melepaskan re-export statis delivery.js pada barrel admin sehingga Surat Jalan DO terisolasi bersih menjadi lazy chunk mandiri (45.89 kB), mengeliminasi warning Vite 100%, memangkas bundle awal module-admin sebesar 46.24 kB, dan mempercepat waktu build kompilasi hingga 49% (10.33 detik).","Harmonisasi Tema Toko Dinamis (Zero-Hardcode Color): Menyelaraskan seluruh elemen Tab Keramik pada Kalkulator Estimator Bahan Bangunan (material-estimator.js) mengadopsi token tema toko var(--color-primary) dan kartu Bento gradien cyan/slate modern, mengeliminasi warna hardcoded indigo peninggalan lawas.","Penguatan Guard Input Focus & Multi-Lingkungan: Melengkapi active element guard pada sinkronisasi diskon kasir POS (.pos-disc-val-input) dengan pemeriksaan typeof document === 'undefined' untuk keandalan eksekusi lintas lingkungan (Browser & Node.js test runner).","Audit Kesehatan Sistem & Verifikasi Test Suite 100% Passed: Seluruh 303 kasus uji unit (UOM, Flash Sale, Member VIP, Retur RMA, Delivery DO, Dual-Location Stock, FIFO, Estimator, Barcode Code 128, Lisensi SaaS, dan 78 Modal Sistem) terverifikasi 100% lulus tanpa kegagalan.","Multi-Channel Distribution v1.15.5 (Android versionCode 11505)."]},{id:"log-1-15-04",version:"v1.15.4",date:"2026-10-10",title:"Arsitektur Zero-Flicker Partial DOM, Proteksi Fokus Input & Pengetikan Lancar Bebas Mental di Seluruh Modul",category:"feature",badge:"Zero-Flicker Partial DOM & Continuous Focus v1.15.4",items:["Resolusi Tuntas Input Mental-Mental & Hilang Fokus: Mengeliminasi masalah kolom input yang kehilangan fokus, berkedip, melompatkan kursor (caret), atau menutup keyboard virtual ponsel saat pengguna mengetik di seluruh aplikasi.","Arsitektur Pembaruan Parsial DOM (Zero-Flicker Partial DOM): Memisahkan kontainer input filter/pencarian dari kontainer hasil data dinamis pada Estimator Material (Paint, Tile, Brick, Roof), Stock Opname Dua Lokasi, Beban Pengeluaran Toko, Laporan Valuasi Stok, Kulakan Pembelian (PO), Master Supplier, Retur RMA, Kartu Piutang Tempo, dan Katalog Master Produk.","Proteksi Caret & Active Element Guard: Menerapkan pengecekan document.activeElement !== input pada sinkronisasi pencarian silang etalase & kasir POS, mencegah reset posisi caret IME saat pengetikan cepat atau penggunaan virtual keyboard Android/iOS.","Tombol Bersihkan Instan Dinamis (Reactive Clear Buttons): Integrasi tombol hapus pencarian 1-klik yang responsif dan reaktif tanpa memicu render ulang template kontainer luar.","Pencegahan Reflow Kartu Ringkasan: Mengoptimalkan pembaruan tabel katalog produk admin agar tidak merekonstruksi ulang 4 kartu ringkasan inventori di setiap ketukan tombol pencarian.","Seluruh 78 Modal Sistem & Rangkaian Test Suite Lolos 100%: 36 pengujian estimator & desimal, 28 flash sale, 24 multi-satuan UOM, 52 member loyalitas, serta verifikasi modal sinkron 100%.","Multi-Channel Distribution v1.15.4 (Android versionCode 11504)."]},{id:"log-1-15-03",version:"v1.15.3",date:"2026-10-10",title:"Kalkulator Estimator Atap & Seng Interaktif (Spandek Galvalum, Seng Gelombang, Asbes Gelombang & Nok Bubungan)",category:"feature",badge:"Roof & Corrugated Sheet Material Estimator v1.15.3",items:["Penambahan Tab Estimator Atap & Seng: Menghadirkan kalkulator matematis presisi untuk menghitung kebutuhan Atap Spandek Galvalum (Zincalume), Seng Gelombang (BJLS), dan Asbes Gelombang (Fiber Semen).","3 Mode Geometri Bidang Konstruksi: Mendukung perhitungan Model Pelana 2 Sisi Miring (Gable Roof), Model Kanopi 1 Sisi Miring (Monopitch / Carport), dan Mode Luas Bersih Langsung (m²).","Presisi Sambungan & Overlap Lapangan: Memperhitungkan lebar efektif overlap samping (75 cm untuk Spandek & Seng, 95 cm untuk Asbes) serta end-lap sambungan ujung 20 cm sesuai pilihan panjang lembar (3m, 4m, 5m, 6m untuk Spandek; 1.5m s.d. 3.0m untuk Seng & Asbes).","Perhitungan Otomatis Aksesoris & Pengencang: Menghitung kebutuhan Baut Roofing SDS 12-14x50mm (box isi 100), Paku Payung Seng Galvanis (kg isi ~70 pcs), Paku Asbes Berkaret (pack isi 50), serta Batang Nok Bubungan Puncak.","Integrasi Omnichannel Lengkap: Salin rincian format WhatsApp, konsultasi langsung ke WA Toko Putri, integrasi tombol cepat kasir POS [F3], dan rekomendasi produk etalase toko.","Rangkaian Pengujian Otomatis: 36 unit test estimator lolos 100% dan seluruh 78 modal sistem sinkron.","Multi-Channel Distribution v1.15.3 (Android versionCode 11503)."]},{id:"log-1-15-02",version:"v1.15.2",date:"2026-10-10",title:"Tipografi Industrial Hardware Depot (Archivo + Barlow) & Elevasi Visual Toko Bahan Bangunan & Alat Teknik",category:"feature",badge:"Industrial Hardware Depot Typography v1.15.2",items:["Duet Tipografi Industrial (Paket 3): Integrasi font 'Archivo' (Weight 600-900) untuk seluruh judul, nama barang, kategori, angka harga, dan tombol aksi berpadu 'Barlow' (Weight 400-600) untuk teks deskripsi & spesifikasi teknis.","Karakter Visual Heavy-Duty & Berwibawa: Menghadirkan kesan kokoh, formal, dan meyakinkan bagi kontraktor proyek serta tetap bersih & modern bagi pembeli ritel rumah tangga.","Proteksi Monospace Struk & Barcode: Menjaga format font 'Courier New' / monospace tetap murni pada struk thermal printer 58mm/80mm, kode barcode Code 128, dan nomor seri SKU.","Resolusi Anti-Flicker & Kontras Lisensi SaaS: Mengeliminasi teks berkedip pada kartu lisensi toko dengan menghapus 'text-transparent bg-clip-text' menjadi warna solid tegas, serta menstandarkan badge status lisensi ke palet kontras tinggi independen dari tema toko.","Verifikasi Presisi Member VIP & Barcode Code 128: Validasi 52 kasus uji logika loyalitas, klasifikasi tiering (Bronze, Silver, Gold, Platinum VIP), perhitungan limit kredit PayLater, serta adopsi engine barcode Code 128 ISO/IEC 15417 pada sisi belakang kartu digital untuk pemindaian scanner kasir fisik.","Integrasi Google Fonts & Tailwind Config: Penambahan font-family 'heading' dan 'industrial' pada tailwind.config.js dan prefetch Google Fonts non-blocking di index.html.","Multi-Channel Distribution v1.15.2 (Android versionCode 11502)."]},{id:"log-1-15-01",version:"v1.15.1",date:"2026-10-10",title:"Transparansi Status Stok Dual-Location (Rak Toko vs Gudang Cadangan), Transfer Dua Arah & Pemecahan Batch FIFO Presisi",category:"feature",badge:"Dual-Location Transparency & Precision FIFO Transfer v1.15.1",items:["Live Status Badge Kartu Pemindahan Internal: Menampilkan indikator real-time stok Rak Toko (Siap Kasir), Gudang Cadangan (Belakang), dan Total Stok Fisik secara presisi di dalam modal tanpa perlu scroll.","Footer Pinned Modal Transparan: Menampilkan rincian status Total Fisik, Stok Rak, dan Stok Gudang secara terpisah dan jelas di bagian bawah layar ponsel.","Aksi Pemindahan Dua Arah: Mendukung pemindahan stok dari Gudang ke Rak Toko maupun pengembalian dari Rak Toko kembali ke Gudang.","Dukungan Multi-Varian Mandiri: Setiap varian produk kini memiliki baris pemindahan independen dengan tombol transfer per-varian.","Batch Splitting FIFO Presisi: Pemindahan kuantitas parsial otomatis memecah (split) lot batch FIFO tanpa menggandakan atau menghilangkan data persediaan.","Pencatatan Otomatis Kartu Mutasi Stok: Setiap mutasi internal tercatat resmi di tab Kartu Mutasi Stok dengan stempel waktu, kuantitas, dan lokasi asal/tujuan.","Sinkronisasi Omnichannel Instan: Penyimpanan langsung ke subkoleksi produk Firestore, penyiaran saveApp(), dan pembaruan localStorage anti-delay.","Multi-Channel Distribution v1.15.1 (Android versionCode 11501)."]}],T=a=>{if(!a)return[0,0,0];const e=String(a).match(/(\d+)\.(\d+)\.(\d+)/);return e?[parseInt(e[1],10),parseInt(e[2],10),parseInt(e[3],10)]:[0,0,0]},A=(a,e)=>{const[s,n,t]=T(a),[o,r,l]=T(e);return o!==s?o-s:r!==n?r-n:l-t},$=(a,e=X)=>{const s=a&&Array.isArray(a.changelog)?a.changelog:[],n=new Set(a&&Array.isArray(a.deletedChangelogIds)?a.deletedChangelogIds:[]),t=new Set(s.map(i=>i.id||i.version)),o=D.filter(i=>!t.has(i.id)&&!t.has(i.version)&&!n.has(i.id)&&!n.has(i.version)),m=[...s.filter(i=>!n.has(i.id)&&!n.has(i.version)),...o].sort((i,w)=>{const C=new Date(i.date||"2026-01-01").getTime(),F=new Date(w.date||"2026-01-01").getTime();return F!==C?F-C:A(i.version,w.version)});return typeof e=="number"&&e>0?m.slice(0,e):m},Y=a=>{const e=D[0]?.version||"v1.12.2",s=$(a,null);if(!s||s.length===0)return e;let n=s[0].version||e;for(const t of s)t.version&&A(t.version,n)<0&&(n=t.version);return A(e,n)<0&&(n=e),n};let h="all";const ee=a=>{if(!a)return"";try{const e=a.split("-");return e.length===3?new Date(parseInt(e[0]),parseInt(e[1])-1,parseInt(e[2])).toLocaleDateString("id-ID",{day:"numeric",month:"short",year:"numeric"}):a}catch{return a}},ae=a=>{switch(a){case"feature":return{label:"Fitur Baru",icon:"fa-rocket",colorClass:"bg-slate-100 dark:bg-slate-800/90 text-slate-700 dark:text-slate-300 border-slate-200/80 dark:border-slate-700/80",iconColor:"text-[var(--color-primary)]"};case"optimization":return{label:"Optimasi",icon:"fa-bolt-lightning",colorClass:"bg-slate-100 dark:bg-slate-800/90 text-slate-700 dark:text-slate-300 border-slate-200/80 dark:border-slate-700/80",iconColor:"text-[var(--color-primary)]"};case"maintenance":return{label:"Maintenance",icon:"fa-wrench",colorClass:"bg-slate-100 dark:bg-slate-800/90 text-slate-700 dark:text-slate-300 border-slate-200/80 dark:border-slate-700/80",iconColor:"text-[var(--color-primary)]"};case"security":return{label:"Keamanan",icon:"fa-shield-halved",colorClass:"bg-red-50 dark:bg-red-950/40 text-red-700 dark:text-red-300 border-red-200/80 dark:border-red-800/60",iconColor:"text-red-500 dark:text-red-400"};case"bugfix":return{label:"Perbaikan",icon:"fa-bug-slash",colorClass:"bg-slate-100 dark:bg-slate-800/90 text-slate-700 dark:text-slate-300 border-slate-200/80 dark:border-slate-700/80",iconColor:"text-[var(--color-primary)]"};default:return{label:"Update",icon:"fa-tag",colorClass:"bg-slate-100 dark:bg-slate-800/90 text-slate-700 dark:text-slate-300 border-slate-200/80 dark:border-slate-700/80",iconColor:"text-[var(--color-primary)]"}}},te=()=>{const a=u("changelog-items-container");if(!a)return;const e=$(c),s=h==="all"?e:e.filter(t=>t.category===h);if(s.length===0){a.innerHTML=`
        <div class="flex flex-col items-center justify-center py-12 text-center text-slate-400">
            <div class="w-14 h-14 rounded-2xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-2xl mb-3">
                <i class="fa-solid fa-clipboard-list opacity-60"></i>
            </div>
            <p class="text-xs font-bold text-slate-600 dark:text-slate-300">Belum ada catatan pada kategori ini</p>
            <p class="text-[10px] text-slate-400 mt-0.5">Pilih filter kategori lain di atas</p>
        </div>`;return}let n="";s.forEach((t,o)=>{const r=o===0&&h==="all",l=ae(t.category),m=ee(t.date),i=(t.items||[]).map(w=>`
            <li class="flex items-start gap-2 text-xs font-medium text-slate-600 dark:text-slate-300 leading-relaxed">
                <i class="fa-solid fa-circle-check text-[var(--color-primary)] text-[11px] mt-1 shrink-0"></i>
                <span>${d(w)}</span>
            </li>
        `).join("");n+=`
        <div class="relative pl-6 sm:pl-8 pb-6 border-l-2 ${r?"border-[var(--color-primary)]":"border-slate-200 dark:border-slate-700"} last:border-l-transparent last:pb-2">
            <!-- Timeline Node Indicator -->
            <div class="absolute -left-[9px] top-0 w-4 h-4 rounded-full ${r?"bg-[var(--color-primary)] ring-4 ring-[rgba(var(--color-primary-rgb),0.2)]":"bg-slate-300 dark:bg-slate-600"} flex items-center justify-center transition-all">
                ${r?'<span class="w-1.5 h-1.5 rounded-full bg-white"></span>':""}
            </div>

            <!-- Card Box -->
            <div class="rounded-2xl border ${r?"border-[var(--color-primary)]/40 bg-[rgba(var(--color-primary-rgb),0.03)] dark:bg-[rgba(var(--color-primary-rgb),0.06)] shadow-sm":"border-slate-100 dark:border-slate-800/80 bg-slate-50/70 dark:bg-slate-800/40"} p-4 sm:p-5 transition-all">
                <div class="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <div class="flex items-center gap-2 flex-wrap">
                        <span class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-lg text-[11px] font-black tracking-wider uppercase ${r?"bg-[var(--color-primary)] text-white shadow-xs":"bg-slate-800 text-white dark:bg-slate-700"}">
                            ${d(t.version||"v1.0.0")}
                        </span>
                        <span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-md border text-[10px] font-bold ${l.colorClass}">
                            <i class="fa-solid ${l.icon} text-[9px] ${l.iconColor}"></i> ${d(l.label)}
                        </span>
                        ${r?`
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
        </div>`}),a.innerHTML=n},O=a=>{h=a,document.querySelectorAll(".btn-changelog-filter").forEach(e=>{const s=e.getAttribute("data-category"),n=e.querySelector("i");s===a?(e.className="btn-changelog-filter shrink-0 whitespace-nowrap flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-[10px] sm:text-xs font-bold primary-bg text-white shadow-xs transition-all cursor-pointer border border-transparent",n&&(n.className=n.className.replace(/text-\[[^\]]+\]/g,"").trim()+" text-white")):(e.className="btn-changelog-filter shrink-0 whitespace-nowrap flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-[10px] sm:text-xs font-bold bg-white dark:bg-slate-800/90 hover:bg-slate-100 dark:hover:bg-slate-700/80 border border-slate-200/80 dark:border-slate-700/80 text-slate-700 dark:text-slate-300 transition-all cursor-pointer",n&&s!=="all"?n.className=n.className.replace(/\btext-white\b/g,"").trim()+" text-[var(--color-primary)]":n&&s==="all"&&(n.className=n.className.replace(/\btext-white\b/g,"").trim()+" text-slate-400"))}),te()},se=(a="all")=>{let e=u("changelog-modal");e||(e=document.createElement("div"),e.id="changelog-modal",e.className="fixed inset-0 z-[125] bg-slate-900/80 flex items-end sm:items-center justify-center p-0 sm:p-4 opacity-0 transition-opacity duration-300",e.onclick=t=>{t.target===e&&G()},e.innerHTML=`
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
        </div>`,document.body.appendChild(e));const s=Y(c),n=u("changelog-header-ver");n&&(n.textContent=s),h=a,O(a),e.style.display!=="flex"&&E("changelog"),e.style.display="flex",e.offsetWidth,requestAnimationFrame(()=>{e.classList.remove("opacity-0");const t=u("changelog-modal-box");t&&t.classList.remove("translate-y-full","sm:translate-y-8")})},G=(a=!1)=>{const e=u("changelog-modal");if(!e||e.style.display==="none")return;const s=()=>{e.classList.add("opacity-0");const n=u("changelog-modal-box");n&&n.classList.add("translate-y-full","sm:translate-y-8"),setTimeout(()=>{e.style.display="none"},300)};typeof P=="function"?P("changelog",a,s):s()};window.openChangelogModal=se;window.closeChangelogModal=G;window.filterChangelog=O;export{Y as a,A as c,$ as g};
