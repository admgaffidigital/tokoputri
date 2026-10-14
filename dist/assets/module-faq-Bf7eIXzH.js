import{q as b,a as c,i as d,e as u,o as I,g as p,k as f,l as M,n as S,G as g,a1 as H,H as V,v as j,af as N,r as F}from"./module-print-qG-eMUiy.js";let Q=null;const C=()=>{if(!Q)try{Q=b.collection("freshmart").doc("cms_data").collection("faqs").onSnapshot(e=>{e&&e.docs&&(c.faqs=e.docs.map(a=>({id:a.id,...a.data()}))),typeof window.curViewName<"u"&&window.curViewName==="view-faq"&&x(),window.isAdm&&typeof window.cTab<"u"&&window.cTab==="faqs"&&typeof window.rAdmFAQ=="function"&&window.rAdmFAQ()},e=>{console.warn("Sync sub-koleksi faqs dibatasi, menggunakan fallback cms_data.faqs:",e.message),typeof window.curViewName<"u"&&window.curViewName==="view-faq"&&x(),window.isAdm&&typeof window.cTab<"u"&&window.cTab==="faqs"&&typeof window.rAdmFAQ=="function"&&window.rAdmFAQ()})}catch{console.warn("Fallback sync Q&A dari cms_data aktif")}};let y="Semua";const x=()=>{C();const e=document.getElementById("storefront-faq-container"),a=document.getElementById("faq-category-pills");if(!e)return;const s=(c.faqs||[]).filter(i=>i.status==="published"),r=["Semua","Pemesanan","Pengiriman","Pembayaran","Garansi","Lainnya"];a&&(a.innerHTML=r.map(i=>`
            <button onclick="selectFAQCategory('${i}')" class="px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${y===i?"primary-bg text-white shadow-md":"bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-slate-100"}">
                ${i}
            </button>
        `).join(""));const t=(document.getElementById("faq-search-input")?.value||"").toLowerCase().trim(),o=s.filter(i=>{const l=y==="Semua"||i.category===y,m=!t||(i.question||"").toLowerCase().includes(t)||(i.answer||"").toLowerCase().includes(t);return l&&m});if(!o.length){e.innerHTML=`
            <div class="text-center py-12 bg-white dark:bg-slate-800 rounded-3xl border border-slate-200 dark:border-slate-700 p-6 shadow-sm">
                <div class="w-16 h-16 rounded-full primary-bg-soft primary-text mx-auto flex items-center justify-center mb-3">
                    <i class="fa-solid fa-circle-question text-3xl"></i>
                </div>
                <h3 class="font-bold text-slate-800 dark:text-white text-base">Belum Ada Q&A Ditemukan</h3>
                <p class="text-xs text-slate-500 mt-1 max-w-sm mx-auto">Punya pertanyaan lain? Silakan gunakan tombol <b>Ajukan Pertanyaan</b> untuk bertanya ke admin.</p>
                <button onclick="openAskQuestionModal()" class="mt-4 primary-bg text-white px-5 py-2.5 rounded-xl text-xs font-bold shadow-md active:scale-95 transition-all">Ajukan Pertanyaan Sekarang</button>
            </div>
        `;return}e.innerHTML=o.map(i=>`
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
    `).join("")},O=e=>{y=e,x()},G=()=>{x()},_=e=>{const a=document.getElementById(`faq-body-${e}`),s=document.getElementById(`faq-icon-${e}`);if(!a||!s)return;a.classList.contains("hidden")?(a.classList.remove("hidden"),s.classList.add("rotate-180")):(a.classList.add("hidden"),s.classList.remove("rotate-180"))},R=()=>{const e=u("modal-ask-question"),a=u("modal-ask-question-box");e&&(e.classList.contains("hidden")&&typeof window.pushModalHistory=="function"&&window.pushModalHistory("askQuestion"),I(e,a))},T=(e=!1)=>{const a=()=>{j("modal-ask-question","modal-ask-question-box")};typeof window.requestCloseModal=="function"?window.requestCloseModal("askQuestion",e,a):a()},U=async()=>{const e=(p("ask-author-name")||"").trim()||"Pelanggan",a=p("ask-category")||"Pemesanan",s=(p("ask-question-text")||"").trim();if(!s)return f("Tuliskan pertanyaan Anda terlebih dahulu!");M("Mengirim pertanyaan...");const r="faq-"+Date.now().toString(36),t={id:r,question:s,answer:"",category:a,authorName:e,status:"pending_answer",createdAt:new Date().toISOString()};let o=!1;try{await b.collection("freshmart").doc("cms_data").collection("faqs").doc(r).set(t),o=!0}catch(i){console.warn("Penulisan sub-koleksi faqs dibatasi, mencoba fallback cms_data.faqs:",i)}if(!o)try{const i=[t,...(c.faqs||[]).filter(l=>l.id!==r)];await b.collection("freshmart").doc("cms_data").set({faqs:i},{merge:!0}),c.faqs=i,o=!0}catch(i){console.warn("Fallback cms_data.faqs juga gagal:",i)}S(),o?(T(),g("ask-question-text",""),f("Pertanyaan terkirim! Admin akan menjawabnya segera."),x()):f("Gagal mengirim pertanyaan. Coba lagi!")};let k="all";const v=()=>{C();const e=c.faqs||[],a=e.filter(t=>k==="pending"?t.status==="pending_answer":k==="published"?t.status==="published":!0),s=e.filter(t=>t.status==="pending_answer").length;let r=`
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
                    Semua (${e.length})
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
                ${a.length?a.map(t=>`
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
    `;setH("admin-content",r)},z=e=>{k=e,v()},W=e=>{const a=(c.faqs||[]).find(t=>t.id===e)||{id:"",question:"",answer:"",category:"Pemesanan",authorName:"Admin",status:"published"};g("admin-faq-id",a.id),g("admin-faq-category",a.category||"Pemesanan"),g("admin-faq-author",a.authorName||"Admin"),g("admin-faq-question",a.question||""),g("admin-faq-answer",a.answer||""),g("admin-faq-status",a.status||"published"),H("admin-faq-modal-title",e?"Edit Q&A":"Tambah Q&A Baru");const s=u("modal-admin-faq"),r=u("modal-admin-faq-box");s&&(s.classList.contains("hidden")&&typeof window.pushModalHistory=="function"&&window.pushModalHistory("adminFAQ"),I(s,r))},B=(e=!1)=>{const a=()=>{j("modal-admin-faq","modal-admin-faq-box")};typeof window.requestCloseModal=="function"?window.requestCloseModal("adminFAQ",e,a):a()},J=async()=>{const e=p("admin-faq-id")||"faq-"+Date.now().toString(36),a=p("admin-faq-category"),s=(p("admin-faq-author")||"").trim()||"Admin",r=(p("admin-faq-question")||"").trim(),t=(p("admin-faq-answer")||"").trim();let o=p("admin-faq-status");if(!r)return f("Pertanyaan tidak boleh kosong!");t&&o==="pending_answer"&&(o="published"),M("Menyimpan Q&A...");const i={id:e,question:r,answer:t,category:a,authorName:s,status:o,updatedAt:new Date().toISOString()};let l=[...c.faqs||[]];const m=l.findIndex(n=>n.id===e);m>-1?l[m]={...l[m],...i}:l.unshift(i),c.faqs=l;try{await b.collection("freshmart").doc("cms_data").collection("faqs").doc(e).set(i,{merge:!0})}catch(n){console.warn("Gagal set ke sub-koleksi faqs:",n)}try{await b.collection("freshmart").doc("cms_data").set({faqs:l},{merge:!0})}catch(n){console.warn("Gagal update cms_data.faqs:",n)}S(),B(),f("Q&A Berhasil Disimpan!"),v()},Z=e=>{V("Hapus Q&A","Yakin ingin menghapus pertanyaan ini?",async()=>{M("Menghapus Q&A...");let a=(c.faqs||[]).filter(s=>s.id!==e);c.faqs=a;try{await b.collection("freshmart").doc("cms_data").collection("faqs").doc(e).delete()}catch(s){console.warn("Gagal delete dari sub-koleksi faqs:",s)}try{await b.collection("freshmart").doc("cms_data").set({faqs:a},{merge:!0})}catch(s){console.warn("Gagal update cms_data.faqs:",s)}S(),f("Q&A Berhasil Dihapus!"),v()})};window.attachFAQRealtime=C;window.renderStorefrontFAQ=x;window.selectFAQCategory=O;window.filterStorefrontFAQ=G;window.toggleFAQAccordion=_;window.openAskQuestionModal=R;window.closeAskQuestionModal=T;window.submitCustomerQuestion=U;window.rAdmFAQ=v;window.setAdminFAQFilter=z;window.openFAQModal=W;window.closeAdminFAQModal=B;window.saveAdminFAQ=J;window.deleteAdminFAQ=Z;const X=5,$=[{id:"log-1-17-03",version:"v1.17.3",date:"2026-10-15",title:"Proteksi Keamanan Fintech Panel Member: Autentikasi PIN 6-Digit, Sensor Mata Privasi Finansial (Anti Shoulder-Surfing), Masking Kartu VIP & Auto-Lock Sesi",category:"feature",badge:"Fintech Security Member Panel & Privacy Eye Shield v1.17.3",items:["Autentikasi PIN Keamanan 6-Digit Member: Memproteksi akses data sensitif pelanggan (nomor WhatsApp, barcode kartu VIP, sisa limit kredit, dan seluruh riwayat tagihan PayLater) dengan verifikasi 6-digit PIN terenkripsi salt SHA-256 via Web Crypto API (zero plain-text storage).","Antarmuka Keypad PIN Bento 6-Dots Interaktif: Menghadirkan keypad numerik modular bergaya Bento Grid dengan 6 bulatan indikator responsif, animasi haptic & audio tick native, serta dukungan penuh pengetikan langsung via keyboard fisik PC/laptop (0-9, Backspace, Escape).","Mode Sensor Privasi Finansial Mata (Privacy Eye Shield 👁️): Seluruh angka saldo PayLater, limit terpakai, total plafon, serta angsuran tagihan berjalan otomatis disensor sebagai 'Rp ••••••' secara default untuk mencegah intipan visual di tempat umum (anti shoulder-surfing), dengan tombol toggle intip cepat di header.","Masking Kartu Member Digital & Barcode Laser Kasir: Menyamarkan nomor telepon dan nomor kartu VIP (+62 812-••••-7890 dan PUTRI • 8123 • •••• • 8901), dengan tetap mempertahankan integritas barcode Code 128 fisik di kasir agar scanner laser toko tetap membaca data asli 100% cepat dan akurat.","Kunci Sesi Cepat & Proteksi Perangkat Publik (Anti Sesi Tertinggal): Tombol Kunci Sesi (Quick Lock) persisten di header modal serta opsi centang 'Ingat sesi di perangkat pribadi ini' yang otomatis memusnahkan sesi member seketika saat modal ditutup jika dibuka pada perangkat kasir atau komputer umum.","Fitur Reset PIN Member oleh Admin CMS: Menyediakan tombol Reset PIN terdedikasi di tabel data pelanggan CMS Admin lengkap dengan dialog konfirmasi aman agar staf admin/owner dapat membantu pelanggan yang lupa PIN.","Verifikasi 16 Test Suite Sistem Lolos 100%: 61 unit test member & logika loyalitas lulus 100%, seluruh pengujian otomatis sistem integritas toko lulus tanpa regresi.","Multi-Channel Distribution v1.17.3 (Android versionCode 11703)."]},{id:"log-1-17-02",version:"v1.17.2",date:"2026-10-15",title:"Stabilitas Mutlak Kolom Input (Anti-Input Mental), Proteksi Kursor & Pengalaman Mengetik Mulus Mobile & Desktop",category:"feature",badge:"Input Focus & Anti-Flicker Stability v1.17.2",items:["Proteksi Anti Auto-Zoom Mobile (Font-Size 16px & Touch-Action Manipulation): Menetapkan standar font-size minimal 16px pada seluruh kolom input, select, textarea, dan form bento di viewport smartphone (<= 768px) untuk mengeliminasi zoom-in otomatis browser iOS Safari & Android Chrome yang merusak scroll dan melepaskan fokus kursor.","Eliminasi Re-Render Destruktif Form CMS Admin: Menghapus pemanggilan innerHTML rebuild (rWholB & rMultiUnitsB) saat pengguna mengetik harga grosir atau satuan kemasan bertingkat, digantikan dengan sistem update parsial reaktif (updateWholMarginBadge & updateMultiUnitSummary) sehingga keyboard HP tidak pernah tertutup sendiri saat berpindah kolom.","Proteksi Kursor & Debounce Pencarian Kasir POS & Storefront: Mengoptimasi debounce delay pencarian kasir POS (#pos-search-input) ke 250ms dan memasang pemulihan fokus kursor otomatis (preventScroll & setSelectionRange) agar kursor tetap tenang dan utuh saat kartu katalog diperbarui.","Eliminasi Scroll Reflow pada Header Search: Menghapus event listener onkeyup ganda dan manipulasi smooth-scroll otomatis pada saat fokus kolom pencarian mobile (#mobile-header-search) yang sebelumnya memicu blur kursor.","Active Element Guard & Autocomplete Standar: Menyelaraskan form login admin dan kasir dengan standar autocomplete='username' dan autocomplete='current-password' serta activeElement guard agar kursor tidak dirampas oleh password manager maupun router view.","Verifikasi 16 Test Suite Sistem Lolos 100%: Menjaga seluruh pengujian otomatis integritas RMA, Member VIP, Barcode Code 128, POS Header, Laporan Keuangan CSV & SVG, Estimator Material, Auth Guard, dan 78 dialog modal sistem lulus 100%.","Multi-Channel Distribution v1.17.2 (Android versionCode 11702)."]},{id:"log-1-17-01",version:"v1.17.1",date:"2026-10-15",title:"Sanitasi Murni Kolom Input (Pristine Input Cleanliness), Proteksi Anti-Autofill & Keamanan Kredensial Seluruh Web Aplikasi",category:"feature",badge:"Pristine Input Cleanliness & Universal Anti-Autofill v1.17.1",items:["Sanitasi Murni Kolom Input (Pristine Input Cleanliness): Menjamin seluruh kolom input di aplikasi terbebas dari residu sampah teks, riwayat kata sandi lama, maupun kode usang saat formulir atau modal dibuka, ditutup, atau diselesaikan.",'Standar Proteksi Anti-Autofill Modern (Chromium & WebKit Compliant): Mengganti atribut autocomplete pada kolom kata sandi login admin, login kasir, dan formulir staf dengan standar autocomplete="new-password" serta autocorrect="off" autocapitalize="off" spellcheck="false" sehingga browser tidak lagi menyuntikkan atau meninggalkan kata sandi tersimpan secara otomatis.',"Sanitasi Programmatic Instan Login Kasir & Admin: Mengosongkan nilai username/email dan password secara otomatis dan aman saat pengguna membuka layar login, menutup modal autentikasi, berhasil masuk, maupun saat logout.","Sanitasi Kolom Pencarian & Barcode Scanner: Menyematkan proteksi anti-autofill dan spellcheck pada kolom pencarian storefront (#search-input, #mobile-header-search), pencarian kasir POS (#pos-search-input), dan pelacak nota retur agar tidak memunculkan popup riwayat yang menghalangi keyboard.","Sanitasi Modal Kas Laci & Shift Kasir: Seluruh kolom nominal uang tunai, alasan transaksi, penerima dana, serta kalkulator pecahan denominasi selalu dibuka dalam kondisi bersih murni (0 / kosong).","Verifikasi 16 Test Suite Sistem Lolos 100%: Menjaga seluruh pengujian otomatis integritas RMA, Member VIP, Barcode Code 128, POS Header, Laporan Keuangan CSV & SVG, Estimator Material, Auth Guard, dan 78 dialog modal sistem lulus 100%.","Multi-Channel Distribution v1.17.1 (Android versionCode 11701)."]},{id:"log-1-17-00",version:"v1.17.0",date:"2026-10-14",title:"Sistem Desain Universal Edge 3D Layar Lengkung, Harmonisasi Multi-Perangkat (Mobile, Tablet & Desktop) & Finalisasi Antarmuka",category:"feature",badge:"Universal 3D Curved Edge & Multi-Device Parity v1.17.0",items:["Universal 3D Curved Edge Display Overlay (#flagship-edge-screen-overlay): Menghadirkan bingkai layar lengkung 3D (Samsung Galaxy Edge / Flagship AMOLED / Curved Workstation) yang persisten di seluruh web aplikasi (Etalase Katalog, Kasir POS Hardware, Admin Backoffice, Keranjang, Checkout, Riwayat Pesanan, Wishlist, dan FAQ).","Harmonisasi Bezel Multi-Perangkat (Edge-to-Edge Parity): Skala lebar bezel adaptif otomatis—6px di smartphone, 10px di tablet workstation, 8px di monitor laptop/desktop PC, dan 10px di ultra-wide workstation dengan garis kilau kristal (specular glass sheen highlight) dan pendaran aura tema toko dinamis.","Harmonisasi Komponen Antarmuka Mikro (Micro-Edge Design System): Menyelaraskan rim tepi atas lembar modal dialog (.modal-bottom-sheet & .drawer-bottom), garis kilau atas bilah navigasi (#bottom-nav-bar), rim pembatas bawah header (.glass-header & .pos-storefront-header), serta garis divider vertikal kasir POS.","Proteksi Aksesibilitas 100% & Zero Touch Interference: Overlay dilengkapi pointer-events: none !important, select-none, dan akselerasi GPU (transform: translateZ(0)) tanpa lag sentuhan, klik, scroll, ketikan formulir, maupun barcode scanner.","Verifikasi 16 Test Suite Sistem Lolos 100%: Menjaga seluruh pengujian otomatis integritas RMA, Member VIP, Barcode Code 128, POS Header, Laporan Keuangan CSV & SVG, Estimator Material, Auth Guard, dan 78 dialog modal sistem lulus 100%.","Perampingan Navigasi CMS & Eliminasi Duplikasi POS Kasir: Menghapus kartu menu duplikat 'Kasir POS' dari dasbor menu CMS agar panel admin lebih ringkas dan fokus backoffice, menyatukan seluruh akses kasir point-of-sale secara presisi melalui icon kasir terdedikasi di header toko (openPOSCashierMode) yang membuka antarmuka terminal layar penuh.","Standardisasi Bento UI/UX & Elevasi Kartu Modular (.bento-island-card): Menerapkan arsitektur visual Bento Grid secara konsisten di seluruh web aplikasi (Checkout, Pembayaran, Pelacak Pesanan, Panduan FAQ, Login Admin, dan POS Kasir) dengan border radius squircle adaptif (20px mobile / 24px desktop) dan elevasi solid crystal anti-kaca.","Standardisasi Proporsionalitas Kolom Input (Anti-Kerdil & Touch Ergonomics): Mengeliminasi seluruh input kerdil/sempit di seluruh modul aplikasi. Menstandarkan input teks, angka, tanggal, dan dropdown select ke tinggi proporsional (min-height 40-44px, font 13.5-14px anti auto-zoom), stepper kuantitas keranjang web (w-14 sm:w-16 h-10 sm:h-11), input diskon nota kasir (h-10 text-sm), input denominasi kasir (w-16 sm:w-20 h-9), parameter estimator material bangunan (h-11 text-sm font-bold), input peta koordinat, serta form pengeluaran & stock opname.","Penyempurnaan & Harmonisasi Simetris Modal Tautan Cepat (Centered Bento Shortcut Tiles): Menata ulang grid modal Tautan Cepat (#quickmenu-modal) menjadi kartu pintas terpusat yang simetris dan seimbang. Seluruh icon menu diperbesar (w-12 h-12 rounded-2xl) dan diletakkan presisi di tengah, judul dan subjudul teks terpusat rata tengah (text-center), badge status (VIP, SOP, Update, Wishlist) diposisikan melayang elegan di sudut kanan atas (absolute top-2.5 right-2.5), serta kartu utilitas Tema Layar diformat membentang 2 kolom penuh (col-span-2) sehingga grid menjadi 100% konsisten, simetris, dan proporsional.","Multi-Channel Distribution v1.17.0 (Android versionCode 11700)."]},{id:"log-1-16-09",version:"v1.16.9",date:"2026-10-14",title:"Elevasi Ruang Vertikal Banner Hero Beranda, Harmonisasi Badge Maskot 3D & Proporsionalitas Kartu Promo Bento",category:"feature",badge:"Hero Banner Vertical Space & Mascot Badge Elevation v1.16.9",items:["Elevasi Ruang Vertikal Banner Hero Storefront (min-h-[195px] sm:min-h-[240px] md:min-h-[285px] lg:min-h-[300px]): Memberikan ruang kanvas vertikal yang lapang dan elegan bagi banner hero utama dan kartu promo bento di desktop, tablet, dan smartphone.","Harmonisasi Posisi Badge Maskot 3D (Anti-Mepet Frame Atas & Bawah): Memposisikan lencana '100% ORI' dan badge live pulsing 'Siap Melayani' dengan margin bernapas yang aman dan presisi di dalam kanvas kartu banner hero tanpa menabrak garis frame.","Sinkronisasi Skeleton Loader Beranda: Menyelaraskan dimensi skeleton #dynamic-banners-container dengan tinggi baru guna mengeliminasi loncatan visual (zero cumulative layout shift).","Desain Responsif & Proporsionalitas Bento: Menyeimbangkan skala tipografi judul, deskripsi, tombol aksi CTA, dan grafis produk pada kartu promosi bento di seluruh ukuran layar.","Verifikasi 16 Test Suite Sistem Lolos 100%: Menjaga seluruh pengujian otomatis integritas RMA, Member VIP, Barcode Code 128, POS Header, Laporan Keuangan CSV & SVG, Estimator Material, Auth Guard, dan 78 dialog modal sistem lulus 100%.","Multi-Channel Distribution v1.16.9 (Android versionCode 11609)."]}],L=e=>{if(!e)return[0,0,0];const a=String(e).match(/(\d+)\.(\d+)\.(\d+)/);return a?[parseInt(a[1],10),parseInt(a[2],10),parseInt(a[3],10)]:[0,0,0]},A=(e,a)=>{const[s,r,t]=L(e),[o,i,l]=L(a);return o!==s?o-s:i!==r?i-r:l-t},D=(e,a=X)=>{const s=e&&Array.isArray(e.changelog)?e.changelog:[],r=new Set(e&&Array.isArray(e.deletedChangelogIds)?e.deletedChangelogIds:[]),t=new Set(s.map(n=>n.id||n.version)),o=$.filter(n=>!t.has(n.id)&&!t.has(n.version)&&!r.has(n.id)&&!r.has(n.version)),m=[...s.filter(n=>!r.has(n.id)&&!r.has(n.version)),...o].sort((n,w)=>{const q=new Date(n.date||"2026-01-01").getTime(),P=new Date(w.date||"2026-01-01").getTime();return P!==q?P-q:A(n.version,w.version)});return typeof a=="number"&&a>0?m.slice(0,a):m},Y=e=>{const a=$[0]?.version||"v1.10.91",s=D(e,null);if(!s||s.length===0)return a;let r=s[0].version||a;for(const t of s)t.version&&A(t.version,r)<0&&(r=t.version);return A(a,r)<0&&(r=a),r};let h="all";const aa=e=>{if(!e)return"";try{const a=e.split("-");return a.length===3?new Date(parseInt(a[0]),parseInt(a[1])-1,parseInt(a[2])).toLocaleDateString("id-ID",{day:"numeric",month:"short",year:"numeric"}):e}catch{return e}},ea=e=>{switch(e){case"feature":return{label:"Fitur Baru",icon:"fa-rocket",colorClass:"bg-slate-100 dark:bg-slate-800/90 text-slate-700 dark:text-slate-300 border-slate-200/80 dark:border-slate-700/80",iconColor:"text-[var(--color-primary)]"};case"optimization":return{label:"Optimasi",icon:"fa-bolt-lightning",colorClass:"bg-slate-100 dark:bg-slate-800/90 text-slate-700 dark:text-slate-300 border-slate-200/80 dark:border-slate-700/80",iconColor:"text-[var(--color-primary)]"};case"maintenance":return{label:"Maintenance",icon:"fa-wrench",colorClass:"bg-slate-100 dark:bg-slate-800/90 text-slate-700 dark:text-slate-300 border-slate-200/80 dark:border-slate-700/80",iconColor:"text-[var(--color-primary)]"};case"security":return{label:"Keamanan",icon:"fa-shield-halved",colorClass:"bg-red-50 dark:bg-red-950/40 text-red-700 dark:text-red-300 border-red-200/80 dark:border-red-800/60",iconColor:"text-red-500 dark:text-red-400"};case"bugfix":return{label:"Perbaikan",icon:"fa-bug-slash",colorClass:"bg-slate-100 dark:bg-slate-800/90 text-slate-700 dark:text-slate-300 border-slate-200/80 dark:border-slate-700/80",iconColor:"text-[var(--color-primary)]"};default:return{label:"Update",icon:"fa-tag",colorClass:"bg-slate-100 dark:bg-slate-800/90 text-slate-700 dark:text-slate-300 border-slate-200/80 dark:border-slate-700/80",iconColor:"text-[var(--color-primary)]"}}},ta=()=>{const e=u("changelog-items-container");if(!e)return;const a=D(c),s=h==="all"?a:a.filter(t=>t.category===h);if(s.length===0){e.innerHTML=`
        <div class="flex flex-col items-center justify-center py-12 text-center text-slate-400">
            <div class="w-14 h-14 rounded-2xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-2xl mb-3">
                <i class="fa-solid fa-clipboard-list opacity-60"></i>
            </div>
            <p class="text-xs font-bold text-slate-600 dark:text-slate-300">Belum ada catatan pada kategori ini</p>
            <p class="text-[10px] text-slate-400 mt-0.5">Pilih filter kategori lain di atas</p>
        </div>`;return}let r="";s.forEach((t,o)=>{const i=o===0&&h==="all",l=ea(t.category),m=aa(t.date),n=(t.items||[]).map(w=>`
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
        </div>`}),e.innerHTML=r},K=e=>{h=e,document.querySelectorAll(".btn-changelog-filter").forEach(a=>{const s=a.getAttribute("data-category"),r=a.querySelector("i");s===e?(a.className="btn-changelog-filter shrink-0 whitespace-nowrap flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-[10px] sm:text-xs font-bold primary-bg text-white shadow-xs transition-all cursor-pointer border border-transparent",r&&(r.className=r.className.replace(/text-\[[^\]]+\]/g,"").trim()+" text-white")):(a.className="btn-changelog-filter shrink-0 whitespace-nowrap flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-[10px] sm:text-xs font-bold bg-white dark:bg-slate-800/90 hover:bg-slate-100 dark:hover:bg-slate-700/80 border border-slate-200/80 dark:border-slate-700/80 text-slate-700 dark:text-slate-300 transition-all cursor-pointer",r&&s!=="all"?r.className=r.className.replace(/\btext-white\b/g,"").trim()+" text-[var(--color-primary)]":r&&s==="all"&&(r.className=r.className.replace(/\btext-white\b/g,"").trim()+" text-slate-400"))}),ta()},sa=(e="all")=>{let a=u("changelog-modal");a||(a=document.createElement("div"),a.id="changelog-modal",a.className="fixed inset-0 z-[125] bg-slate-900/80 flex items-end sm:items-center justify-center p-0 sm:p-4 opacity-0 transition-opacity duration-300",a.onclick=t=>{t.target===a&&E()},a.innerHTML=`
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
        </div>`,document.body.appendChild(a));const s=Y(c),r=u("changelog-header-ver");r&&(r.textContent=s),h=e,K(e),a.style.display!=="flex"&&N("changelog"),a.style.display="flex",a.offsetWidth,requestAnimationFrame(()=>{a.classList.remove("opacity-0");const t=u("changelog-modal-box");t&&t.classList.remove("translate-y-full","sm:translate-y-8")})},E=(e=!1)=>{const a=u("changelog-modal");if(!a||a.style.display==="none")return;const s=()=>{a.classList.add("opacity-0");const r=u("changelog-modal-box");r&&r.classList.add("translate-y-full","sm:translate-y-8"),setTimeout(()=>{a.style.display="none"},300)};typeof F=="function"?F("changelog",e,s):s()};window.openChangelogModal=sa;window.closeChangelogModal=E;window.filterChangelog=K;export{Y as a,A as c,D as g};
