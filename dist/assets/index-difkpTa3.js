import{f as _e}from"./vendor-firebase-core-D2OF5R23.js";import"./vendor-firebase-db-BIUZcnOd.js";import{p as Qt}from"./vendor-utils-Bszxp-Ae.js";import{r as ee,d as D,p as be,g as ct,c as Wt,a as zt,b as Jt,s as Zt,u as Yt,h as Xt,e as ht,t as ea,f as vt,i as ta,l as pt,j as aa,k as sa,m as oa,n as ra,o as mt,q as He,v as ia,A as yt,w as na,x as ut,y as la,z as kt,B as da,C as ca,D as pa}from"./module-admin-20eyehw0.js";import{e as l,Q as _,a as f,g as q,c as R,i as N,f as S,al as c,h as T,j as u,am as W,an as J,ao as ne,ap as z,aq as le,ar as v,A as X,d as L,a4 as tt,ah as Qe,b as Ie,a5 as ie,R as Z,S as I,as as O,at as Ne,s as Pt,m as V,au as Mt,k as b,a8 as je,a3 as at,l as Tt,o as Te,p as he,y as ve,K as At,D as st,M as St,F as We,E as ze,a1 as ma,av as ua,aw as fa,t as ba,ae as wa,ag as ga,af as xa,ai as ha,ax as va,ay as ya,az as ka,w as Pa,aA as Ma,N as Ta,G as Aa,O as Sa,I as Da,P as $a,J as Ca,B as Ea,aB as Ra,C as Ia,aC as La,aD as Fa,aE as _a,z as Ba,q as Na,x as ja,r as Oa,aF as Ua,aG as qa,aH as Ga,v as Ka,u as Ha,aI as Va,U as Qa,T as Wa,W as za,V as Ja,Y as Za,X as Ya,a7 as Xa,a0 as es,aj as ts,ab as as,a2 as ss,a6 as os,aJ as rs,ad as is,ac as ns,_ as ls,Z as ds,aK as cs,aL as ps,$ as ms,ak as us,aM as fs,aN as bs,aO as ws,aP as gs,aQ as xs}from"./module-print-CcovgEhv.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function a(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(o){if(o.ep)return;o.ep=!0;const r=a(o);fetch(o.href,r)}})();let Oe="https://script.google.com/macros/s/AKfycbx3dW9rHcdoKNYjSOJ8PoH2k6fABe7XlBD9teNHsBlCBqJquq8jd4UvnfXZVsfKdFsC/exec";const Dt=()=>{l("voucher-input");const e=(_("voucher-input")||"").toUpperCase().trim(),t=(f.vouchers||[]).find(o=>(o.code||"").toUpperCase()===e);q("voucher-msg-container");const a=typeof window.getEffP=="function"?window.getEffP:o=>o.effectivePrice||o.price||0,s=R.reduce((o,r)=>o+(parseFloat(a(r))||0)*(parseFloat(r.qty)||0),0);if(t){let o=!0;t.targetProduct&&t.targetProduct!==""&&(o=R.some(r=>r&&String(r.id)===String(t.targetProduct))),t.targetProduct&&t.targetProduct!==""&&!o?(W(null),N("voucher-msg",'<i class="fa-solid fa-box mr-1"></i> Khusus Produk Tertentu!'),l("voucher-msg")&&(l("voucher-msg").className="text-sm font-bold text-rose-500 dark:text-rose-400")):t.minPurchase&&parseFloat(t.minPurchase)>0&&s<parseFloat(t.minPurchase)?(W(null),N("voucher-msg",`<i class="fa-solid fa-circle-exclamation mr-1"></i> Minimal belanja ${S(t.minPurchase)}`),l("voucher-msg")&&(l("voucher-msg").className="text-sm font-bold text-amber-500 dark:text-amber-400")):t.type&&t.type.includes("shipping")&&c.deliveryMethod!=="delivery"?(W(null),N("voucher-msg",'<i class="fa-solid fa-motorcycle mr-1"></i> Khusus pesanan dikirim kurir!'),l("voucher-msg")&&(l("voucher-msg").className="text-sm font-bold text-rose-500 dark:text-rose-400")):(W(t),N("voucher-msg",'<i class="fa-solid fa-check-circle mr-1"></i> Voucher Diterapkan!'),l("voucher-msg")&&(l("voucher-msg").className="text-sm font-bold text-[var(--color-primary)]"))}else e===""?(W(null),T("voucher-msg-container"),typeof window.rPay=="function"&&window.rPay()):(W(null),N("voucher-msg",'<i class="fa-solid fa-times-circle mr-1"></i> Kode Tidak Valid'),l("voucher-msg")&&(l("voucher-msg").className="text-sm font-bold text-rose-500 dark:text-rose-400"));typeof window.rPay=="function"&&window.rPay()},hs=()=>{let e=document.getElementById("voucher-modal");e||(e=document.createElement("div"),e.id="voucher-modal",e.className="fixed inset-0 z-[115] bg-slate-900/80 flex items-end sm:items-center justify-center p-0 sm:p-5",e.onclick=s=>{s.target===e&&ot()},document.body.appendChild(e));const t=(f.vouchers||[]).filter(s=>s.isShow!==!1&&s.isShow!=="false"),a=t.length?t.map(s=>{let o="";s.type==="percent"?o=`Diskon ${s.value}%`:s.type==="shipping_free"?o="Gratis Ongkir":s.type==="shipping_flat"?o=`Diskon Ongkir ${S(s.value)}`:o=`Potongan ${S(s.value)}`;const r=s.minPurchase&&parseFloat(s.minPurchase)>0?`Min. belanja ${S(s.minPurchase)}`:"Tanpa minimal belanja";return`
        <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/80 hover:border-[var(--color-primary)] transition-all shadow-xs">
            <div class="flex items-start gap-3.5 min-w-0">
                <div class="w-11 h-11 rounded-xl bg-[var(--color-primary)] text-white flex items-center justify-center text-lg shrink-0 shadow-sm mt-0.5">
                    <i class="fa-solid fa-ticket"></i>
                </div>
                <div class="min-w-0">
                    <div class="flex flex-wrap items-center gap-2 mb-1.5">
                        <span class="font-extrabold text-sm font-mono tracking-wider text-slate-800 dark:text-white bg-white dark:bg-slate-900 px-2.5 py-0.5 rounded-lg border border-slate-200 dark:border-slate-700 select-all">${u(s.code)}</span>
                        <span class="primary-bg text-white text-[10px] font-bold px-2 py-0.5 rounded-md uppercase whitespace-nowrap shadow-2xs">${o}</span>
                    </div>
                    <p class="text-[11px] font-medium text-slate-500 dark:text-slate-400 flex items-center gap-1.5"><i class="fa-solid fa-circle-check text-[var(--color-primary)] text-xs"></i> ${r}</p>
                </div>
            </div>
            <div class="flex items-center gap-2 shrink-0 pt-2 md:pt-0 border-t md:border-t-0 border-slate-200 dark:border-slate-700">
                <button type="button" onclick="copyVoucherCode('${u(s.code)}')" class="flex-1 md:flex-initial bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] text-xs font-bold uppercase tracking-wider px-3.5 py-2 rounded-xl transition-all active:scale-95 flex items-center justify-center gap-1.5 shadow-2xs">
                    <i class="fa-regular fa-copy"></i> Salin
                </button>
                <button type="button" onclick="useVoucherCode('${u(s.code)}')" class="flex-1 md:flex-initial primary-bg text-white text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-xl transition-all active:scale-95 flex items-center justify-center gap-1.5 shadow-sm">
                    Gunakan <i class="fa-solid fa-arrow-right text-[10px]"></i>
                </button>
            </div>
        </div>`}).join(""):`
        <div class="p-8 text-center">
            <div class="w-16 h-16 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-400 mx-auto mb-3">
                <i class="fa-solid fa-ticket text-2xl"></i>
            </div>
            <p class="text-sm font-bold text-slate-800 dark:text-white mb-1">Belum Ada Kupon Promo</p>
            <p class="text-xs text-slate-500 dark:text-slate-400">Saat ini belum ada promo aktif. Silakan cek kembali nanti!</p>
        </div>
    `;e.innerHTML=`
        <div class="bg-white dark:bg-slate-900 w-full max-w-lg rounded-t-3xl sm:rounded-2xl max-h-[85vh] flex flex-col shadow-2xl border border-slate-200 dark:border-slate-700">
            <div class="p-5 sm:p-6 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center shrink-0">
                <h3 class="font-bold text-slate-800 dark:text-white text-base flex items-center gap-2">
                    <i class="fa-solid fa-ticket text-[var(--color-primary)]"></i> Kupon &amp; Voucher Promo
                </h3>
                <button onclick="closeVoucherModal()" class="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 hover:bg-rose-100 hover:text-rose-500 flex items-center justify-center transition-all">
                    <i class="fa-solid fa-xmark"></i>
                </button>
            </div>
            <div class="p-5 sm:p-6 overflow-y-auto flex-1 space-y-3.5">
                ${a}
            </div>
        </div>`,e.style.opacity="0",e.style.display="flex",requestAnimationFrame(()=>{e.style.transition="opacity 0.25s ease",e.style.opacity="1"}),typeof window.pushModalHistory=="function"&&window.pushModalHistory("voucher")},vs=e=>{navigator.clipboard&&navigator.clipboard.writeText?navigator.clipboard.writeText(e).then(()=>{typeof window.showToast=="function"&&window.showToast(`✅ Kode "${e}" disalin ke clipboard!`)}).catch(()=>{typeof window.showToast=="function"&&window.showToast(`Kode Kupon: ${e}`)}):typeof window.showToast=="function"&&window.showToast(`Kode Kupon: ${e}`)},ys=e=>{ot();const t=l("voucher-input");t&&(t.value=e,Dt()),R.length>0?typeof window.changeView=="function"&&window.changeView("view-checkout"):(typeof window.showToast=="function"&&window.showToast(`Kode "${e}" siap digunakan saat checkout belanja!`),typeof window.changeView=="function"&&window.changeView("view-catalog"))},ot=(e=!1)=>{const t=()=>{const a=document.getElementById("voucher-modal");!a||a.style.display==="none"||(a.style.opacity="0",a.style.transition="opacity 0.25s ease",setTimeout(()=>{a.style.display="none",a.style.opacity="",a.style.transition=""},250))};typeof ee=="function"?ee("voucher",e,t):typeof window.requestCloseModal=="function"?window.requestCloseModal("voucher",e,t):t()};window.applyVoucher=Dt;window.openVoucherModal=hs;window.closeVoucherModal=ot;window.copyVoucherCode=vs;window.useVoucherCode=ys;const ae=new Map,ks=3*60*1e3,Ps="https://lh3.googleusercontent.com/d/1KHwsV5sK6aAH3-eP_vTJA4tE5MyRukLo",Ms=e=>{if(!e){ae.clear();return}const t=e.toString().replace(/\D/g,"");let a=t,s=t.startsWith("0")?"62"+t.substring(1):t.startsWith("62")?t:"62"+t,o=t.startsWith("62")?"0"+t.substring(2):t;ae.delete(t),ae.delete(a),ae.delete(s),ae.delete(o)},rt=async(e,t="")=>{try{let a=(e||"").toString().replace(/\D/g,"");if(a.startsWith("0")?a="62"+a.substring(1):a.startsWith("62")||(a="62"+a),!a||a.length<9)return null;let s=[];try{const g=localStorage.getItem("freshmart_my_orders");g&&(s=JSON.parse(g)||[])}catch{}if(!s.length)return null;let o=0;const r=s.find(g=>g.finalMemberPoints!==void 0&&g.finalMemberPoints!==null);if(r?o=Math.max(0,parseFloat(r.finalMemberPoints)||0):o=s.reduce((g,y)=>g+(parseFloat(y.pointsEarned)||0),0),o<=0)return null;const i=D.collection("freshmart").doc("cms_data").collection("customers").doc(a),n=await i.get();if(!n.exists)return null;const d=t||z&&z.name||n.data().name||"Pelanggan Setia",p={id:a,phone:a,name:d,points:o,updatedAt:new Date().toISOString(),lastOrderAt:new Date().toISOString()};try{await i.set(p,{merge:!0})}catch(g){console.warn("[reconcilePointsFromOrders] Firestore set error:",g)}J(p);try{localStorage.setItem("freshmart_current_member",JSON.stringify(p)),localStorage.setItem("freshmart_member_wa",a)}catch{}return ae.set(a,{data:p,timestamp:Date.now()}),document.getElementById("member-modal-body")&&xe(),p}catch(a){return console.warn("[reconcilePointsFromOrders] Error:",a),null}},Ue=(e=0)=>{const t=Math.max(0,parseFloat(e)||0);return t>=1e3?{level:4,name:"PLATINUM VIP",badge:"💎 PLATINUM VIP",icon:"fa-gem",gradient:"from-slate-950 via-zinc-900 to-neutral-950 border-amber-400/40 text-amber-200",cardBg:"linear-gradient(135deg, #090d16 0%, #171f30 45%, #0d1322 75%, #050811 100%)",accentBg:"bg-amber-400/20",accentText:"text-amber-300",accentBorder:"border-amber-400/40",chipBorder:"#f59e0b",foilClass:"gold-foil-text",nextTier:null,ptsNeeded:0,progress:100,perks:["Cashback & Poin Belanja Maksimal (2x Lipat)","Akses Prioritas Antrean Kasir & Pengiriman","Klaim Semua Hadiah Katalog VIP","Layanan Konsultasi Khusus via WhatsApp"]}:t>=500?{level:3,name:"GOLD MEMBER",badge:"🥇 GOLD MEMBER",icon:"fa-crown",gradient:"from-amber-600 via-yellow-600 to-amber-700 border-yellow-300/40 text-yellow-100",cardBg:"linear-gradient(135deg, #78350f 0%, #b45309 35%, #d97706 70%, #92400e 100%)",accentBg:"bg-yellow-400/20",accentText:"text-amber-200",accentBorder:"border-yellow-300/40",chipBorder:"#fde047",foilClass:"gold-foil-text",nextTier:"Platinum VIP",ptsNeeded:1e3-t,progress:Math.min(100,Math.round((t-500)/500*100)),perks:["Diskon & Promo Spesial Member Gold","Kumpulkan Poin di Setiap Transaksi","Tukar Hadiah Menarik dari Katalog","Prioritas Penyiapan Pesanan"]}:t>=100?{level:2,name:"SILVER MEMBER",badge:"🥈 SILVER MEMBER",icon:"fa-medal",gradient:"from-slate-700 via-slate-600 to-slate-800 border-slate-300/40 text-slate-100",cardBg:"linear-gradient(135deg, #1e293b 0%, #334155 40%, #475569 70%, #0f172a 100%)",accentBg:"bg-slate-200/20",accentText:"text-slate-100",accentBorder:"border-slate-300/40",chipBorder:"#cbd5e1",foilClass:"silver-foil-text",nextTier:"Gold Member",ptsNeeded:500-t,progress:Math.min(100,Math.round((t-100)/400*100)),perks:["Kumpulkan Poin di Setiap Transaksi","Tukar Hadiah Langsung Tanpa Undian","Penawaran Diskon Tertentu"]}:{level:1,name:"BRONZE MEMBER",badge:"🥉 BRONZE MEMBER",icon:"fa-award",gradient:"from-stone-800 via-amber-950 to-stone-900 border-orange-400/30 text-orange-200",cardBg:"linear-gradient(135deg, #381a10 0%, #632917 40%, #7c2d12 70%, #292524 100%)",accentBg:"bg-orange-500/20",accentText:"text-orange-200",accentBorder:"border-orange-400/40",chipBorder:"#fb923c",foilClass:"bronze-foil-text",nextTier:"Silver Member",ptsNeeded:100-t,progress:Math.min(100,Math.round(t/100*100)),perks:["Kumpulkan Poin di Setiap Transaksi Belanja","Akses Penuh ke Katalog Hadiah Toko"]}},$t=e=>{let t=(e||"").toString().replace(/\D/g,"");for(t.startsWith("62")?t=t.substring(2):t.startsWith("0")&&(t=t.substring(1));t.length<8;)t+="0";const a=[];for(let s=0;s<t.length&&a.length<3;s+=4)a.push(t.substring(s,s+4));return`PUTRI • ${a.join(" • ")}`},Ct=e=>{const t=String(e||"812345678901").replace(/\D/g,"");let a="",s=8;a+=`<rect x="${s}" y="3" width="2.5" height="34" fill="#0f172a"/>`,s+=4,a+=`<rect x="${s}" y="3" width="1.5" height="34" fill="#0f172a"/>`,s+=3.5,a+=`<rect x="${s}" y="3" width="3" height="34" fill="#0f172a"/>`,s+=5;for(let o=0;o<t.length;o++){const r=parseInt(t[o],10)||0,i=(r%3+1)*1.3,n=((r+2)%4+1)*1.1,d=(r%2+1)*1.8;a+=`<rect x="${s}" y="3" width="${i}" height="34" fill="#0f172a"/>`,s+=i+d,a+=`<rect x="${s}" y="3" width="${n}" height="34" fill="#0f172a"/>`,s+=n+2}return a+=`<rect x="${s}" y="3" width="3" height="34" fill="#0f172a"/>`,s+=5,a+=`<rect x="${s}" y="3" width="1.5" height="34" fill="#0f172a"/>`,s+=3.5,a+=`<rect x="${s}" y="3" width="2.5" height="34" fill="#0f172a"/>`,s+=4,`
    <svg class="w-full h-11 bg-white rounded-lg px-2 py-1 shadow-inner border border-slate-200" viewBox="0 0 ${Math.max(s+10,240)} 40" xmlns="http://www.w3.org/2000/svg">
        ${a}
    </svg>`},ft=e=>{const t=parseFloat(e?.points)||0,a=Ue(t),s=(f.store?.name||"Toko Putri").toUpperCase(),o=f.store?.logo&&f.store.logo!=="fa-store"?f.store.logo:Ps,r=(e?.name||"PELANGGAN SETIA").toUpperCase(),i=(e?.phone||"81234567890").toString().replace(/\D/g,""),n=$t(i),d=f.store?.wa||i;return`
    <div class="member-card-scene w-full max-w-[390px] mx-auto select-none my-1">
        <div id="member-card-inner" class="member-card-inner relative w-full aspect-[1.586/1] cursor-pointer rounded-2xl sm:rounded-3xl border border-black/10 dark:border-white/10" onclick="flipMemberCard()" title="Klik untuk membalik kartu">
            
            <!-- ================= SISI DEPAN (FRONT CARD) ================= -->
            <div id="member-card-front-export" class="member-card-front rounded-2xl sm:rounded-3xl overflow-hidden p-4 sm:p-5 flex flex-col justify-between text-white border border-white/20" style="background: ${a.cardBg};">
                
                <!-- Ambient luxury light reflections (clean subtle overlay, zero blur spilling) -->
                <div class="absolute inset-0 bg-gradient-to-tr from-black/25 via-transparent to-white/15 pointer-events-none"></div>

                <!-- Header Kartu: Logo Toko, Nama Toko, & Gelombang Contactless -->
                <div class="relative z-10 flex items-center justify-between">
                    <div class="flex items-center gap-2.5 min-w-0">
                        <div class="w-8 h-8 rounded-xl bg-white/95 p-1 flex items-center justify-center shadow-2xs shrink-0 border border-white/40">
                            <img src="${u(o)}" alt="Logo" class="w-full h-full object-contain" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">
                            <i class="fa-solid fa-store text-slate-800 text-xs hidden"></i>
                        </div>
                        <div class="min-w-0">
                            <h4 class="text-[11px] sm:text-xs font-black tracking-wider text-white uppercase truncate">${u(s)}</h4>
                            <p class="text-[8px] sm:text-[9px] font-bold tracking-[0.2em] text-white/80 uppercase">VIP Loyalty Pass</p>
                        </div>
                    </div>
                    <!-- Contactless NFC & Tier Pill -->
                    <div class="flex items-center gap-2 shrink-0">
                        <span class="text-[8px] sm:text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full ${a.accentBg} ${a.accentText} border ${a.accentBorder}">
                            ${a.badge}
                        </span>
                        <div class="opacity-80 flex items-center" title="Contactless Member">
                            <svg class="w-4 h-4 text-white/90" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
                                <path d="M8.5 16.5a5 5 0 0 1 0-7"/>
                                <path d="M12 19a8.5 8.5 0 0 1 0-12"/>
                                <path d="M15.5 21.5a12 12 0 0 1 0-17"/>
                            </svg>
                        </div>
                    </div>
                </div>

                <!-- Bagian Tengah: Smart Chip EMV Emas & Hologram Seal -->
                <div class="relative z-10 flex items-center justify-between my-auto py-1">
                    <!-- EMV Smart Chip (SVG) -->
                    <div class="flex items-center gap-3">
                        <svg class="w-11 h-8 rounded-md border border-amber-300/60 bg-gradient-to-br from-amber-200 via-amber-400 to-yellow-600 p-0.5 shrink-0" viewBox="0 0 50 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="1" y="1" width="48" height="38" rx="5" fill="url(#chipGrad)" stroke="#b45309" stroke-width="0.8"/>
                            <path d="M1 13H18M1 27H18M32 13H49M32 27H49M18 1V39M32 1V39M18 20H32" stroke="#78350f" stroke-width="1" stroke-linecap="round"/>
                            <rect x="21" y="14" width="8" height="12" rx="2" fill="#d97706" stroke="#78350f" stroke-width="0.8"/>
                            <defs>
                                <linearGradient id="chipGrad" x1="0" y1="0" x2="50" y2="40" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#fef08a"/>
                                    <stop offset="0.5" stop-color="#f59e0b"/>
                                    <stop offset="1" stop-color="#b45309"/>
                                </linearGradient>
                            </defs>
                        </svg>
                        <div class="w-7 h-7 rounded-full card-hologram-seal opacity-75 border border-white/30 hidden sm:block" title="Security Seal"></div>
                    </div>
                    <!-- Poin Saldo Member -->
                    <div class="text-right">
                        <p class="text-[8px] sm:text-[9px] font-bold tracking-widest text-white/70 uppercase">Saldo Poin</p>
                        <div class="flex items-center justify-end gap-1.5 mt-0.5">
                            <i class="fa-solid fa-star text-amber-300 text-xs sm:text-sm animate-pulse"></i>
                            <span class="text-base sm:text-xl font-black tracking-tight text-white">${t}</span>
                            <span class="text-[9px] font-bold text-white/80">PTS</span>
                        </div>
                    </div>
                </div>

                <!-- Bagian Bawah: Nomor Kartu & Nama Pelanggan Embossed -->
                <div class="relative z-10">
                    <p class="text-[11px] sm:text-[13px] embossed-text text-white/95 font-mono tracking-[0.18em] mb-1.5">${u(n)}</p>
                    <div class="flex items-end justify-between gap-2">
                        <div class="min-w-0 flex-1">
                            <p class="text-[7px] sm:text-[8px] font-bold tracking-widest text-white/70 uppercase leading-none mb-0.5">Nama Pelanggan</p>
                            <p class="text-[11px] sm:text-[13px] font-bold text-white tracking-wider truncate uppercase">${u(r)}</p>
                        </div>
                        <div class="text-right shrink-0">
                            <p class="text-[7px] sm:text-[8px] font-bold tracking-widest text-white/70 uppercase leading-none mb-0.5">Status Member</p>
                            <p class="text-[9px] sm:text-[10px] font-extrabold text-emerald-300 tracking-wider flex items-center justify-end gap-1">
                                <i class="fa-solid fa-circle-check text-[8px]"></i> AKTIF
                            </p>
                        </div>
                    </div>
                </div>

                <!-- Petunjuk Balik Kartu -->
                <div class="absolute bottom-1 right-3 text-[7px] text-white/40 tracking-wider font-semibold pointer-events-none flex items-center gap-1">
                    <i class="fa-solid fa-repeat text-[6px]"></i> Klik untuk balik
                </div>
            </div>

            <!-- ================= SISI BELAKANG (BACK CARD) ================= -->
            <div class="member-card-back rounded-2xl sm:rounded-3xl overflow-hidden flex flex-col justify-between text-slate-800 border border-slate-700/60 bg-[#0f172a]">
                
                <!-- Pita Magnetik Hitam (Magnetic Stripe) -->
                <div class="w-full h-8 sm:h-10 bg-slate-950 mt-4 border-y border-white/10 relative">
                    <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
                </div>

                <!-- Signature Strip & Keamanan -->
                <div class="px-4 sm:px-5 py-1">
                    <div class="flex items-center gap-2">
                        <div class="flex-1 h-6 bg-white/90 rounded border border-slate-300 px-2 flex items-center justify-between">
                            <span class="text-[9px] font-mono font-bold text-slate-500 italic truncate">${u(r)}</span>
                            <span class="text-[8px] font-mono font-black text-slate-800 tracking-widest">VERIFIED</span>
                        </div>
                        <div class="w-10 h-6 bg-amber-400 text-slate-950 font-black text-[9px] rounded flex items-center justify-center tracking-widest">
                            VIP
                        </div>
                    </div>

                    <!-- Barcode untuk Scanner Kasir Toko -->
                    <div class="mt-2 text-center">
                        <p class="text-[8px] font-bold text-slate-400 uppercase tracking-wider mb-1 flex items-center justify-center gap-1">
                            <i class="fa-solid fa-barcode text-amber-400"></i> Scan Barcode di Kasir POS Toko:
                        </p>
                        ${Ct(i)}
                        <p class="text-[9px] font-mono font-bold tracking-[0.2em] text-slate-300 mt-1">*${u(i)}*</p>
                    </div>
                </div>

                <!-- Footer Sisi Belakang: Kontak & Info -->
                <div class="p-3 sm:p-4 bg-slate-950/80 border-t border-white/10 text-center">
                    <p class="text-[7.5px] sm:text-[8px] text-slate-400 leading-tight">
                        Kartu member digital resmi <b class="text-white">${u(s)}</b>. Tunjukkan saat transaksi untuk poin belanja.
                    </p>
                    <p class="text-[8px] font-bold text-amber-300 mt-0.5">
                        <i class="fa-brands fa-whatsapp mr-1"></i>CS: +${u(d)}
                    </p>
                </div>
            </div>

        </div>
    </div>`},Ts=()=>{const e=document.getElementById("member-card-inner");e&&e.classList.toggle("is-flipped")},As=async()=>{const e=document.getElementById("member-card-inner");e&&e.classList.contains("is-flipped")&&(e.classList.remove("is-flipped"),await new Promise(a=>setTimeout(a,450)));const t=document.getElementById("member-card-front-export");if(t){typeof window.showToast=="function"&&window.showToast("Menyiapkan file gambar Kartu Member HD...");try{if(typeof window.ensureScriptLoaded=="function"&&await window.ensureScriptLoaded("https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js",()=>typeof html2canvas<"u"),typeof html2canvas>"u")throw new Error("Modul html2canvas belum siap dimuat.");const a=await html2canvas(t,{scale:3,useCORS:!0,allowTaint:!0,backgroundColor:null}),o=`Kartu_Member_TokoPutri_${(z?.name||"Pelanggan").replace(/[^a-zA-Z0-9]/g,"_")}.png`,r=a.toDataURL("image/png",1);if(window.AndroidNativeApp&&typeof window.AndroidNativeApp.saveOrShareFile=="function")window.AndroidNativeApp.saveOrShareFile(r,o,"image/png");else{const i=document.createElement("a");i.download=o,i.href=r,document.body.appendChild(i),i.click(),document.body.removeChild(i)}typeof window.showToast=="function"&&window.showToast("Kartu Member Berhasil Disimpan ke Galeri! 🎉")}catch(a){console.error("Gagal menyimpan kartu member:",a),typeof window.showToast=="function"&&window.showToast("Gagal menyimpan kartu. Silakan coba kembali.")}}},Ss=()=>{const e=l("reward-catalog-container");if(!e)return;const t=f.store.showRewardCatalog!==!1&&f.store.showRewardCatalog!=="false";t&&typeof window.attachRewardsRealtime=="function"&&!window.unsubRewardsRealtime&&window.attachRewardsRealtime();const a=(f.rewards||[]).filter(o=>o.isActive!=="false"&&o.isActive!==!1);if(!t||a.length===0){e.classList.add("hidden"),e.innerHTML="";return}e.classList.remove("hidden");let s=`
    <div class="flex items-center justify-between mb-2.5">
        <h3 class="font-bold text-slate-800 dark:text-white text-xs sm:text-sm tracking-tight flex items-center gap-2">
            <div class="w-7 h-7 rounded-lg bg-[var(--color-primary)] flex items-center justify-center text-white shadow-2xs">
                <i class="fa-solid fa-gift text-xs"></i>
            </div> KATALOG HADIAH POIN PELANGGAN
        </h3>
        <button type="button" onclick="if(typeof window.openMemberModal==='function') window.openMemberModal(); else if(typeof window.showToast==='function') window.showToast('Gunakan poin Anda untuk menukar hadiah menarik!');" class="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-lg border border-[var(--color-primary)]/30 text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white transition-all active:scale-95 flex items-center gap-1 cursor-pointer">
            Lihat Kartu Member <i class="fa-solid fa-chevron-right text-[8px]"></i>
        </button>
    </div>
    <div class="flex gap-2.5 sm:gap-3 overflow-x-auto hide-scrollbar snap-x pb-3 pt-1">
        ${a.map(o=>`
            <div class="w-[115px] sm:w-[130px] shrink-0 snap-start relative group cursor-pointer active:scale-95 transition-all duration-200" onclick="if(typeof window.openMemberModal==='function') window.openMemberModal(); else if(typeof window.showToast==='function') window.showToast('Tukarkan hadiah ini saat checkout menggunakan poin belanja Anda!');">
                <div class="w-full bg-[var(--color-primary)] rounded-xl shadow-xs hover:shadow-sm hover:-translate-y-0.5 transition-all duration-200 flex flex-col relative overflow-hidden border border-white/20 text-white p-1.5">
                    <div class="absolute -right-3 -top-3 w-16 h-16 bg-white/20 rounded-full blur-lg pointer-events-none"></div>
                    <div class="absolute bottom-8 -left-2.5 w-4 h-4 rounded-full bg-[#f1f5f9] dark:bg-[#0b1121] border-r border-white/20 z-20 pointer-events-none transition-colors duration-300 shadow-inner"></div>
                    <div class="absolute bottom-8 -right-2.5 w-4 h-4 rounded-full bg-[#f1f5f9] dark:bg-[#0b1121] border-l border-white/20 z-20 pointer-events-none transition-colors duration-300 shadow-inner"></div>
                    <div class="absolute bottom-10 left-1.5 right-1.5 border-t border-dashed border-white/30 z-10 pointer-events-none"></div>
                    <div class="w-full aspect-square rounded-lg bg-white flex items-center justify-center overflow-hidden relative shadow-inner z-0 p-1.5">
                        <img loading="lazy" src="${u(o.img)}" alt="${u(o.name)}" class="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105" onerror="this.onerror=null;this.src='https://placehold.co/400?text=Hadiah'">
                        <div class="absolute top-1 left-1 bg-rose-500 text-white text-[7px] sm:text-[8px] font-bold px-1.5 py-0.5 rounded-md shadow-2xs uppercase tracking-wider"><i class="fa-solid fa-gift mr-0.5"></i>Gratis</div>
                        <div class="absolute top-1 right-1 bg-[var(--color-primary)] text-white text-[7px] sm:text-[8px] font-bold px-1.5 py-0.5 rounded-md shadow-2xs border border-white/20">${parseFloat(o.pointsCost||o.pointsRequired)||0} Poin</div>
                    </div>
                    <div class="w-full h-3.5 shrink-0"></div>
                    <div class="h-7 w-full px-0.5 flex flex-col justify-center items-center relative z-0 shrink-0 mb-0.5">
                        <h4 class="text-[9px] sm:text-[10px] font-bold text-white leading-tight line-clamp-2 uppercase tracking-wider text-center drop-shadow-xs">${u(o.name)}</h4>
                    </div>
                </div>
            </div>`).join("")}
    </div>`;e.innerHTML=s};let bt=null;const Ds=()=>{clearTimeout(bt),bt=setTimeout(async()=>{const t=(window.normalizeWA||(r=>(r||"").replace(/\D/g,"").replace(/^0/,"62")))(_("cust-wa")),a=l("member-status-banner");if(!a)return;if(!t||t.length<10){T(a),T("payment-option-tempo"),J(null),ne(null);const r=document.querySelector('input[name="payment"][value="tempo"]');if(r&&r.checked){const i=document.querySelector('input[name="payment"][value="transfer"]')||document.querySelector('input[name="payment"][value="cashier"]');i&&(i.checked=!0,typeof window.togglePaymentDetails=="function"&&window.togglePaymentDetails())}return}const s=r=>{const i=parseFloat(r.points)||0,n=Ue(i);a.className="mt-3 p-3 sm:p-4 rounded-2xl bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 text-white border border-amber-400/40 shadow-xl relative overflow-hidden flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3",a.innerHTML=`
                <div class="absolute -right-6 -bottom-6 w-28 h-28 bg-amber-400/10 rounded-full blur-xl pointer-events-none"></div>
                <div class="flex items-center gap-3 relative z-10 min-w-0">
                    <div class="w-12 h-10 rounded-xl bg-gradient-to-br from-amber-400/20 to-yellow-600/20 border border-amber-400/40 flex items-center justify-center shrink-0 shadow-inner">
                        <i class="fa-solid fa-id-card text-xl text-amber-300"></i>
                    </div>
                    <div class="min-w-0">
                        <div class="flex items-center gap-2 flex-wrap">
                            <span class="text-[9px] font-black uppercase tracking-widest px-2 py-0.5 rounded-full ${n.accentBg} ${n.accentText} border ${n.accentBorder}">${n.badge}</span>
                            <span class="text-[10px] font-bold text-amber-300 flex items-center gap-1"><i class="fa-solid fa-star text-[9px]"></i>${i} Poin</span>
                        </div>
                        <p class="text-xs font-bold text-white mt-0.5 truncate flex items-center gap-1.5">
                            <span>${u(r.name||"Pelanggan")}</span>
                            <span class="text-[9px] font-normal text-slate-400">(Member Resmi)</span>
                        </p>
                    </div>
                </div>
                <button type="button" onclick="openMemberModal()" class="relative z-10 w-full sm:w-auto shrink-0 bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-slate-950 text-[10px] font-black uppercase tracking-wider px-3.5 py-2.5 rounded-xl shadow-md active:scale-95 transition-all flex items-center justify-center gap-1.5 cursor-pointer">
                    <i class="fa-solid fa-wallet"></i> Buka Kartu Member
                </button>`,q(a),q("payment-option-tempo")},o=ae.get(t);if(o&&Date.now()-o.timestamp<ks){if(o.data)J(o.data),s(o.data);else{J(null),ne(null),T(a),T("payment-option-tempo");const r=document.querySelector('input[name="payment"][value="tempo"]');if(r&&r.checked){const i=document.querySelector('input[name="payment"][value="transfer"]')||document.querySelector('input[name="payment"][value="cashier"]');i&&(i.checked=!0,typeof window.togglePaymentDetails=="function"&&window.togglePaymentDetails())}}return}try{const r=await D.collection("freshmart").doc("cms_data").collection("customers").doc(t).get();if(r.exists){const i=r.data();ae.set(t,{data:i,timestamp:Date.now()}),J(i),s(i)}else{ae.set(t,{data:null,timestamp:Date.now()}),J(null),ne(null),T(a),T("payment-option-tempo");const i=document.querySelector('input[name="payment"][value="tempo"]');if(i&&i.checked){const n=document.querySelector('input[name="payment"][value="transfer"]')||document.querySelector('input[name="payment"][value="cashier"]');n&&(n.checked=!0,typeof window.togglePaymentDetails=="function"&&window.togglePaymentDetails())}}}catch{}},500)},$s=()=>{if(!z)try{const s=localStorage.getItem("freshmart_current_member");if(s){const o=JSON.parse(s);o&&(o.id||o.phone||o.name)&&J(o)}}catch{}const e=z?.phone||z?.id||localStorage.getItem("freshmart_member_wa");if(e){let s=e.toString().replace(/\D/g,"");s.startsWith("0")?s="62"+s.substring(1):s.startsWith("62")||(s="62"+s),D.collection("freshmart").doc("cms_data").collection("customers").doc(s).get().then(async o=>{if(o.exists){let r=o.data();if((parseFloat(r.points)||0)===0){const n=await rt(s,r.name);n&&(r=n)}ae.set(s,{data:r,timestamp:Date.now()}),J(r);try{localStorage.setItem("freshmart_current_member",JSON.stringify(r)),localStorage.setItem("freshmart_member_wa",s)}catch{}document.getElementById("member-modal-body")&&xe()}else{ae.set(s,{data:null,timestamp:Date.now()}),J(null);try{localStorage.removeItem("freshmart_current_member"),localStorage.removeItem("freshmart_member_wa")}catch{}document.getElementById("member-modal-body")&&xe()}}).catch(()=>{})}typeof window.attachRewardsRealtime=="function"&&!window.unsubRewardsRealtime&&window.attachRewardsRealtime();let t=document.getElementById("member-modal");t||(t=document.createElement("div"),t.id="member-modal",t.className="fixed inset-0 z-[115] bg-slate-900/60 flex items-end sm:items-center justify-center p-0 sm:p-5 backdrop-blur-xs",t.onclick=s=>{s.target===t&&Et()},document.body.appendChild(t));const a=t.style.display!=="none"&&t.style.opacity==="1";t.innerHTML=`
        <div class="bg-white dark:bg-slate-900 w-full max-w-lg rounded-t-3xl sm:rounded-3xl max-h-[90vh] flex flex-col shadow-xl border border-slate-200 dark:border-slate-800 overflow-hidden">
            <!-- Header Modal -->
            <div class="p-4 sm:p-5 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center shrink-0 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md">
                <div class="flex items-center gap-2.5">
                    <div class="w-8 h-8 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-white shadow-sm">
                        <i class="fa-solid fa-id-card text-xs"></i>
                    </div>
                    <div>
                        <h3 class="font-bold text-slate-800 dark:text-white text-sm sm:text-base leading-tight">Kartu Member Digital</h3>
                        <p class="text-[9px] sm:text-[10px] font-semibold text-slate-400">Loyalty Pass &amp; Poin Hadiah Toko Putri</p>
                    </div>
                </div>
                <button onclick="closeMemberModal()" class="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 hover:bg-rose-100 hover:text-rose-500 flex items-center justify-center transition-all cursor-pointer">
                    <i class="fa-solid fa-xmark text-sm"></i>
                </button>
            </div>
            <!-- Body Modal -->
            <div class="p-4 sm:p-6 overflow-y-auto flex-1 space-y-5" id="member-modal-body"></div>
        </div>`,xe(),t.style.opacity="0",t.style.display="flex",requestAnimationFrame(()=>{t.style.transition="opacity 0.25s ease",t.style.opacity="1"}),!a&&typeof window.pushModalHistory=="function"&&window.pushModalHistory("member")},xe=()=>{const e=(f.rewards||[]).filter(o=>o.isActive!=="false"&&o.isActive!==!1),t=z&&parseFloat(z.points)||0,a=Ue(t),s=e.length?e.map(o=>{const r=(parseFloat(o.stock)||0)>0,i=z&&t>=(parseFloat(o.pointsCost)||0)&&r,n=le&&le.id===o.id;return`
        <div class="flex items-center gap-3 p-3.5 rounded-2xl border ${n?"border-[var(--color-primary)] bg-[rgba(var(--color-primary-rgb),0.06)] dark:bg-[rgba(var(--color-primary-rgb),0.12)] shadow-xs":"border-slate-200 dark:border-slate-700/80 bg-slate-50/70 dark:bg-slate-800/40"} transition-all">
            ${o.img?`<img src="${u(o.img)}" class="w-14 h-14 rounded-xl object-contain bg-white p-1 border border-slate-200 dark:border-slate-700 shrink-0" onerror="this.style.display='none'" loading="lazy">`:'<div class="w-14 h-14 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-300 shrink-0"><i class="fa-solid fa-gift text-xl"></i></div>'}
            <div class="min-w-0 flex-1">
                <p class="text-xs font-bold text-slate-800 dark:text-white truncate">${u(o.name)}</p>
                <p class="text-[11px] font-black text-amber-500 dark:text-amber-400 mt-0.5 flex items-center gap-1">
                    <i class="fa-solid fa-star text-[10px]"></i> ${parseFloat(o.pointsCost)||0} Poin
                </p>
                ${r?"":'<p class="text-[10px] font-bold text-rose-500 mt-0.5">Stok hadiah habis</p>'}
            </div>
            ${z?n?'<button type="button" onclick="deselectReward()" class="shrink-0 bg-rose-500 hover:bg-rose-600 text-white text-[10px] font-bold uppercase px-3 py-2 rounded-xl active:scale-95 transition-all whitespace-nowrap shadow-xs">Batal</button>':`<button type="button" ${i?"":"disabled"} onclick="selectReward(${o.id})" class="shrink-0 ${i?"primary-bg hover:opacity-90 text-white active:scale-95 shadow-xs":"bg-slate-200 dark:bg-slate-700 text-slate-400 cursor-not-allowed"} text-[10px] font-bold uppercase px-3 py-2 rounded-xl transition-all whitespace-nowrap">Pilih Hadiah</button>`:`<span class="text-[10px] font-bold text-slate-400 uppercase bg-slate-100 dark:bg-slate-800 px-2.5 py-1.5 rounded-lg">${parseFloat(o.pointsCost)||0} Poin</span>`}
        </div>`}).join(""):'<p class="text-[11px] font-bold text-slate-400 text-center py-3">Belum ada program hadiah yang tersedia.</p>';z?N("member-modal-body",`
            <!-- KARTU MEMBER DIGITAL (3D INTERAKTIF) -->
            <div>
                ${ft(z)}
                
                <!-- Action Controls: Balik Kartu, Unduh Kartu & Tutup -->
                <div class="flex items-center justify-between gap-2 mt-3 max-w-[390px] mx-auto">
                    <button type="button" onclick="flipMemberCard()" class="flex-1 py-2.5 px-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-200 text-xs font-bold flex items-center justify-center gap-1.5 hover:bg-slate-100 dark:hover:bg-slate-700 active:scale-95 transition-all shadow-xs cursor-pointer">
                        <i class="fa-solid fa-repeat text-[11px] text-amber-500"></i> Balik Kartu
                    </button>
                    <button type="button" onclick="downloadMemberCard()" class="flex-1 py-2.5 px-3 rounded-xl border border-amber-400/50 bg-gradient-to-r from-amber-500 to-amber-600 text-white text-xs font-bold flex items-center justify-center gap-1.5 hover:opacity-95 active:scale-95 transition-all shadow-xs cursor-pointer">
                        <i class="fa-solid fa-download text-[11px]"></i> Simpan ke Galeri
                    </button>
                    <button type="button" onclick="closeMemberModal()" class="py-2.5 px-3.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-500 hover:text-slate-800 dark:hover:text-white text-xs font-bold flex items-center justify-center gap-1 active:scale-95 transition-all cursor-pointer" title="Tutup">
                        <i class="fa-solid fa-xmark"></i>
                    </button>
                </div>
                <div class="text-center mt-2">
                    <button type="button" onclick="setCurrentMember(null); try{localStorage.removeItem('freshmart_current_member');localStorage.removeItem('freshmart_member_wa');}catch(e){} rMemberModalBody();" class="text-[10px] text-slate-400 hover:text-[var(--color-primary)] font-semibold transition-colors cursor-pointer">
                        <i class="fa-solid fa-user-pen mr-1"></i>Bukan Anda? Cek nomor WhatsApp lain
                    </button>
                </div>
            </div>

            <!-- TIER STATUS & PROGRESS LEVEL -->
            <div class="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-800/40 space-y-3">
                <div class="flex items-center justify-between">
                    <div>
                        <p class="text-[9px] font-bold text-slate-400 uppercase tracking-wider">Level Keanggotaan</p>
                        <h4 class="text-xs sm:text-sm font-black text-slate-800 dark:text-white flex items-center gap-1.5 mt-0.5">
                            <i class="fa-solid ${a.icon} text-amber-500"></i> ${a.name}
                        </h4>
                    </div>
                    <div class="text-right">
                        <p class="text-[9px] font-bold text-slate-400 uppercase tracking-wider">Total Saldo</p>
                        <p class="text-xs sm:text-sm font-black text-amber-500 dark:text-amber-400 mt-0.5">${t} Poin</p>
                    </div>
                </div>

                ${a.nextTier?`
                <div class="space-y-1.5 pt-1">
                    <div class="flex justify-between text-[10px] font-semibold text-slate-500 dark:text-slate-400">
                        <span>Menuju <b>${a.nextTier}</b></span>
                        <span class="font-bold text-slate-700 dark:text-slate-200">${a.progress}%</span>
                    </div>
                    <div class="w-full h-2 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden">
                        <div class="h-full rounded-full bg-gradient-to-r from-amber-500 to-yellow-400 transition-all duration-500" style="width: ${a.progress}%"></div>
                    </div>
                    <p class="text-[9px] text-slate-500 dark:text-slate-400 font-medium">
                        Kumpulkan <b>${a.ptsNeeded} poin lagi</b> untuk otomatis naik tingkat ke <b>${a.nextTier}</b>!
                    </p>
                </div>`:`
                <p class="text-[10px] text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-1">
                    <i class="fa-solid fa-crown"></i> Anda telah mencapai level member tertinggi Toko Putri!
                </p>`}

                <!-- Member Privileges Pill -->
                <div class="pt-2 border-t border-slate-200/60 dark:border-slate-700/60">
                    <p class="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-1.5">Hak Istimewa Member Anda:</p>
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                        ${a.perks.map(o=>`
                        <div class="flex items-center gap-1.5 text-[10px] font-semibold text-slate-700 dark:text-slate-300">
                            <i class="fa-solid fa-check text-emerald-500 text-[9px] shrink-0"></i>
                            <span class="truncate">${u(o)}</span>
                        </div>`).join("")}
                    </div>
                </div>
            </div>

            <!-- KATALOG REWARD / PENUKARAN HADIAH -->
            <div>
                <p class="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-2.5">Katalog Hadiah yang Dapat Ditukar</p>
                <div class="space-y-2.5">${s}</div>
            </div>

            ${le?`<div class="bg-[rgba(var(--color-primary-rgb),0.06)] dark:bg-[rgba(var(--color-primary-rgb),0.12)] border border-[var(--color-primary)]/30 rounded-xl p-3.5 text-[11px] font-bold text-[var(--color-primary)] flex items-center gap-2"><i class="fa-solid fa-gift text-base shrink-0"></i><span>Hadiah "<b>${u(le.name)}</b>" telah dipilih dan akan otomatis diproses saat pesanan Anda selesai di checkout.</span></div>`:""}
        `):N("member-modal-body",`
            <!-- PREVIEW KARTU CONTOH (MEMIKAT PELANGGAN) -->
            <div class="opacity-90">
                ${ft({name:"NAMA ANDA",phone:"81234567890",points:0})}
            </div>

            <!-- FORM PENCARIAN / CEK KARTU MEMBER -->
            <div class="p-4 sm:p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-800/40 space-y-3">
                <div class="flex items-center gap-2 text-slate-800 dark:text-white font-bold text-xs sm:text-sm">
                    <div class="w-7 h-7 rounded-xl primary-bg text-white flex items-center justify-center text-xs shrink-0 shadow-2xs">
                        <i class="fa-solid fa-magnifying-glass"></i>
                    </div>
                    <span>Cek Kartu Member &amp; Saldo Poin Anda</span>
                </div>
                <p class="text-xs text-slate-500 dark:text-slate-400 font-medium leading-relaxed">
                    Masukkan nomor WhatsApp yang pernah Anda gunakan saat berbelanja di Toko Putri:
                </p>
                <div class="flex gap-2">
                    <div class="relative flex-1">
                        <span class="absolute left-3.5 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400">+62</span>
                        <input type="tel" id="member-lookup-input" class="w-full rounded-xl border border-slate-200 bg-white py-3 pl-12 pr-3 text-xs font-bold text-slate-800 outline-none focus:border-[var(--color-primary)] dark:border-slate-700 dark:bg-slate-900 dark:text-white" placeholder="81234567890" inputmode="numeric" />
                    </div>
                    <button type="button" onclick="lookupMemberPoints()" class="primary-bg text-white px-4 py-3 rounded-xl text-xs font-bold uppercase tracking-wider shrink-0 transition-all active:scale-95 shadow-sm cursor-pointer">
                        Cek Kartu
                    </button>
                </div>
                <div id="member-lookup-result" class="hidden text-xs font-bold mt-2"></div>
            </div>

            <!-- KEUNTUNGAN MENJADI MEMBER -->
            <div class="p-4 rounded-2xl border border-amber-400/30 bg-amber-50/50 dark:bg-amber-950/20 text-xs space-y-2">
                <h4 class="font-bold text-amber-800 dark:text-amber-300 flex items-center gap-1.5">
                    <i class="fa-solid fa-sparkles text-amber-500"></i> Keuntungan Menjadi Member Toko Putri:
                </h4>
                <ul class="text-[11px] text-slate-600 dark:text-slate-300 space-y-1 list-disc pl-4">
                    <li>Otomatis terdaftar menjadi member pada pesanan pertama Anda.</li>
                    <li>Kumpulkan poin di setiap transaksi belanja untuk ditukar hadiah gratis.</li>
                    <li>Mendapatkan kartu digital eksklusif yang bisa disimpan di galeri ponsel.</li>
                </ul>
            </div>

            <!-- KATALOG HADIAH -->
            <div>
                <p class="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-2.5">Katalog Hadiah yang Dapat Ditukar</p>
                <div class="space-y-2.5">${s}</div>
            </div>
        `)},Cs=async()=>{const e=document.getElementById("member-lookup-input"),t=document.getElementById("member-lookup-result");if(!e||!t)return;let a=e.value.replace(/\D/g,"");if(!a||a.length<9){t.className="text-xs font-bold text-rose-500 p-2.5 bg-rose-50 dark:bg-rose-900/20 rounded-xl",t.textContent="Masukkan minimal 9 digit nomor WhatsApp!",t.classList.remove("hidden");return}a.startsWith("0")?a="62"+a.substring(1):a.startsWith("62")||(a="62"+a),t.className="text-xs font-bold text-[var(--color-primary)] p-2.5 primary-bg-soft rounded-xl",t.textContent="Memuat data kartu member...",t.classList.remove("hidden");try{const s=await D.collection("freshmart").doc("cms_data").collection("customers").doc(a).get();if(s.exists){let o=s.data();if((parseFloat(o.points)||0)===0){const r=await rt(a,o.name);r&&(o=r)}ae.set(a,{data:o,timestamp:Date.now()}),J(o);try{localStorage.setItem("freshmart_current_member",JSON.stringify(o)),localStorage.setItem("freshmart_member_wa",a)}catch{}xe(),typeof window.showToast=="function"&&window.showToast(`Selamat datang kembali, ${o.name||"Pelanggan"}! 💳`)}else{t.className="text-xs font-bold text-amber-700 dark:text-amber-300 p-3.5 bg-amber-50 dark:bg-amber-900/20 rounded-xl leading-relaxed border border-amber-200 dark:border-amber-800/40 space-y-1.5";const o=(f.store&&f.store.wa||"").replace(/\D/g,""),r=o?`https://wa.me/${o}?text=Halo%20Admin%20Toko%20Putri,%20saya%20ingin%20mendaftarkan%20nomor%20saya%20(${a})%20sebagai%20Member%20Resmi.`:"#";t.innerHTML=`
                <div class="flex items-center gap-1.5 text-amber-800 dark:text-amber-200 font-extrabold text-[11px]">
                    <i class="fa-solid fa-circle-info text-amber-500"></i>
                    <span>Nomor Belum Terdaftar sebagai Member Resmi</span>
                </div>
                <p class="text-[11px] font-medium text-slate-600 dark:text-slate-300 leading-normal">
                    Nomor <b>+${u(a)}</b> saat ini tercatat sebagai <b>Pelanggan Umum</b>. Fitur Poin Hadiah dan fasilitas pembayaran <b>Cash Tempo</b> hanya dapat digunakan setelah nomor Anda dikonfirmasi & disimpan oleh Admin Toko di database CMS.
                </p>
                ${o?`
                <div class="pt-1">
                    <a href="${r}" target="_blank" class="inline-flex items-center gap-1.5 text-[10px] font-bold text-emerald-600 dark:text-emerald-400 hover:underline">
                        <i class="fa-brands fa-whatsapp text-emerald-500"></i> Hubungi Admin untuk Pendaftaran Member
                    </a>
                </div>`:""}
            `}}catch{t.className="text-xs font-bold text-rose-500 p-2.5 bg-rose-50 dark:bg-rose-900/20 rounded-xl",t.textContent="Gagal mengecek data. Silakan periksa koneksi internet Anda."}},Es=e=>{const t=(f.rewards||[]).find(s=>s.id===e);if(!t)return;if((parseFloat(z?.points)||0)<(parseFloat(t.pointsCost)||0)){typeof window.showToast=="function"&&window.showToast("Poin Anda belum cukup untuk hadiah ini!");return}if((parseFloat(t.stock)||0)<=0){typeof window.showToast=="function"&&window.showToast("Maaf, stok hadiah ini sedang kosong!");return}ne({id:t.id,name:t.name,pointsCost:parseFloat(t.pointsCost)||0}),xe(),typeof window.showToast=="function"&&window.showToast(`Hadiah "${t.name}" dipilih! Lanjutkan checkout untuk menukarnya.`)},Rs=()=>{ne(null),xe()},Et=(e=!1)=>{const t=document.getElementById("member-modal");if(!t||t.style.display==="none")return;const a=()=>{t.style.opacity="0",t.style.transition="opacity 0.25s ease",setTimeout(()=>{t.style.display="none",t.style.opacity="",t.style.transition=""},250)};typeof window.requestCloseModal=="function"?window.requestCloseModal("member",e,a):a()};window.renderRewardCatalog=Ss;window.checkMemberStatus=Ds;window.openMemberModal=$s;window.rMemberModalBody=xe;window.lookupMemberPoints=Cs;window.selectReward=Es;window.deselectReward=Rs;window.closeMemberModal=Et;window.flipMemberCard=Ts;window.downloadMemberCard=As;window.getMemberTier=Ue;window.formatMemberCardNumber=$t;window.generateBarcodeSVG=Ct;window.setCurrentMember=J;window.invalidateMemberCache=Ms;window.reconcilePointsFromOrders=rt;const Is=()=>{const e=l("toggle-droppoint"),t=l("droppoint-form");if(!(!e||!t))if(e.checked)t.classList.remove("hidden");else{t.classList.add("hidden"),c.dropPoint=null;const a=l("dp-location-status");a&&a.classList.add("hidden");const s=l("btn-dp-location");l("text-dp-location"),s&&(s.innerHTML='<i class="fa-solid fa-location-crosshairs text-sm text-rose-500"></i> <span id="text-dp-location">Sematkan GPS Lokasi Tujuan</span>')}},Ls=()=>{if(!navigator.geolocation){typeof window.showToast=="function"&&window.showToast("GPS tidak didukung");return}const e=l("btn-dp-location");e&&(e.innerHTML='<i class="fa-solid fa-spinner fa-spin text-sm"></i> Mengambil GPS...'),navigator.geolocation.getCurrentPosition(t=>{c.dropPoint||(c.dropPoint={}),c.dropPoint.lat=t.coords.latitude,c.dropPoint.lng=t.coords.longitude;const a=l("dp-location-status");a&&a.classList.remove("hidden"),e&&(e.innerHTML='<i class="fa-solid fa-location-crosshairs text-sm text-rose-500"></i> <span id="text-dp-location">GPS Berhasil! Tap untuk Update</span>'),typeof window.showToast=="function"&&window.showToast("GPS Lokasi Tujuan Berhasil!")},()=>{e&&(e.innerHTML='<i class="fa-solid fa-location-crosshairs text-sm text-rose-500"></i> <span id="text-dp-location">Sematkan GPS Lokasi Tujuan</span>'),typeof window.showToast=="function"&&window.showToast("Gagal akses GPS")},{enableHighAccuracy:!0,timeout:15e3})},Rt=e=>{if(!e||e.trim().length<5)return;const t=typeof window.parseGeoCoordinates=="function"?window.parseGeoCoordinates:null,a=t?t(e):null;if(a){c.dropPoint||(c.dropPoint={}),c.dropPoint.lat=parseFloat(a.lat),c.dropPoint.lng=parseFloat(a.lng);const s=l("dp-location-status");s&&s.classList.remove("hidden"),typeof window.showToast=="function"&&window.showToast("Koordinat Lokasi Tujuan berhasil!")}},Fs=async()=>{try{const e=await navigator.clipboard.readText(),t=l("dp-maps-input");t&&(t.value=e,Rt(e))}catch{typeof window.showToast=="function"&&window.showToast("Gagal membaca clipboard")}},_s=()=>{if(f.store.isDeliveryEnabled===!1&&f.store.isPickupEnabled===!1){typeof window.showToast=="function"&&window.showToast("Toko tutup!");return}const e=_("cust-name"),t=(document.querySelector('input[name="delivery-method"]:checked')||{}).value;if(!e||!t){typeof window.showToast=="function"&&window.showToast("Lengkapi form nama!");return}let a=_("cust-wa").replace(/\D/g,"");if(!a||a.length<9){typeof window.showToast=="function"&&window.showToast("Nomor WhatsApp wajib diisi! (min. 9 digit)");return}if(a.startsWith("0")?a="62"+a.substring(1):a.startsWith("62")||(a="62"+a),c.name=e,c.deliveryMethod=t,c.note=_("cust-note"),c.wa=a,t==="delivery"){if(c.address=_("cust-address"),!c.lat||!c.lng){const i=l("cust-maps-input")?.value;i&&typeof window.handleCustomerMapsInput=="function"&&window.handleCustomerMapsInput(i)}if(!c.address||!c.lat||!c.lng){typeof window.showToast=="function"&&window.showToast("Alamat & GPS wajib!");return}const s=typeof window.getDist=="function"?window.getDist:()=>0;c.distance=s(parseFloat(f.store.lat||0),parseFloat(f.store.lng||0),c.lat,c.lng)||0;const o=l("toggle-droppoint");if(o&&o.checked){let i=_("dp-receiver-name").trim(),n=_("dp-receiver-wa").replace(/\D/g,""),d=_("dp-address").trim();if(!i){typeof window.showToast=="function"&&window.showToast("Nama penerima di lokasi tujuan wajib diisi!");return}if(!n||n.length<9){typeof window.showToast=="function"&&window.showToast("Nomor WA penerima di lokasi tujuan wajib diisi (min. 9 digit)!");return}if(!d){typeof window.showToast=="function"&&window.showToast("Alamat lokasi tujuan wajib diisi!");return}if(!c.dropPoint||!c.dropPoint.lat||!c.dropPoint.lng){typeof window.showToast=="function"&&window.showToast("GPS / Koordinat lokasi tujuan wajib diisi untuk kalkulasi ongkir!");return}n.startsWith("0")?n="62"+n.substring(1):n.startsWith("62")||(n="62"+n),c.dropPoint.name=i,c.dropPoint.wa=n,c.dropPoint.address=d,c.distance=s(parseFloat(f.store.lat||0),parseFloat(f.store.lng||0),c.dropPoint.lat,c.dropPoint.lng)||0}else c.dropPoint=null}else c.address="Ambil di Toko",c.distance=0,c.dropPoint=null;v&&v.type&&v.type.includes("shipping")&&t!=="delivery"&&W(null),l("voucher-input")&&!v&&(l("voucher-input").value="",T("voucher-msg-container")),typeof window.changeView=="function"&&window.changeView("view-payment")},it=()=>{X("address-container","hidden",(document.querySelector('input[name="delivery-method"]:checked')||{}).value==="pickup")},It=()=>{const e=l("tnc-checkbox"),t=l("btn-process-order");!e||!t||(e.checked?t.classList.remove("btn-disabled"):t.classList.add("btn-disabled"))},Lt=()=>{if(!R.length){typeof window.showToast=="function"&&window.showToast("Keranjang belanja kosong!"),typeof window.changeView=="function"&&window.changeView("view-catalog",!0);return}if(!c.name){typeof window.showToast=="function"&&window.showToast("Lengkapi data pengiriman terlebih dahulu!"),typeof window.changeView=="function"&&window.changeView("view-checkout",!0);return}const e=typeof window.getEffP=="function"?window.getEffP:w=>w.price||0,t=R.reduce((w,C)=>w+(parseFloat(e(C))||0)*(parseFloat(C.qty)||0),0);let a=0,s=0,o=0;if(c.deliveryMethod==="delivery"&&(a=Math.ceil((parseFloat(c.distance)||0)*(parseFloat(f.store.costPerKm)||0)/500)*500),v&&(v.minPurchase&&parseFloat(v.minPurchase)>0&&t<parseFloat(v.minPurchase)?(W(null),T("voucher-msg-container"),typeof window.showToast=="function"&&window.showToast(`Voucher dibatalkan (min. belanja ${S(v.minPurchase)})`)):v.targetProduct&&!R.some(w=>w.id===parseInt(v.targetProduct))&&(W(null),T("voucher-msg-container"),typeof window.showToast=="function"&&window.showToast("Voucher dibatalkan (produk khusus dihapus)"))),v){let w=t;if(v.targetProduct&&v.targetProduct!==""){const C=parseInt(v.targetProduct);w=R.filter(se=>se.id===C).reduce((se,m)=>se+(parseFloat(e(m))||0)*(parseFloat(m.qty)||0),0)}if(v.type==="shipping_free")s=a;else if(v.type==="shipping_flat")s=parseFloat(v.value)||0;else if(v.type==="percent"){let C=w*((parseFloat(v.value)||0)/100);v.maxDiscount&&parseFloat(v.maxDiscount)>0&&(C=Math.min(C,parseFloat(v.maxDiscount))),o=C}else o=parseFloat(v.value)||0,o=Math.min(o,w)}const r=(f.store.freeShippingMinSpendEnabled===!0||f.store.freeShippingMinSpendEnabled==="true")&&(parseFloat(f.store.freeShippingMinSpendAmount)||0)>0&&t>=(parseFloat(f.store.freeShippingMinSpendAmount)||0)&&c.deliveryMethod==="delivery";r&&(s=a),s=Math.min(s,a),o=Math.min(o,t);const i=Math.max(0,t-o+(a-s)),d=(typeof window.calcTaxDetails=="function"?window.calcTaxDetails:()=>({ppnEnabled:!1,ppnAmount:0,grandTotalAdd:0}))(i),p=d.ppnAmount,h=i+d.grandTotalAdd;L("summary-subtotal",S(t)),X("summary-shipping-row","hidden",c.deliveryMethod!=="delivery");const g=l("summary-discount-row");if(g)if(o>0||s>0){g.classList.remove("hidden");let w="";o>0&&(w+=`<div class="flex justify-between items-center w-full mt-1.5"><p class="text-xs font-bold text-slate-500">Diskon Promo</p><p class="text-[13px] font-bold text-rose-500">-${S(o)}</p></div>`),s>0&&(w+=`<div class="flex justify-between items-center w-full mt-1.5"><p class="text-xs font-bold text-slate-500">${r?"Gratis Ongkir (Promo Belanja)":"Diskon Ongkir"}</p><p class="text-[13px] font-bold text-rose-500">-${S(s)}</p></div>`),g.innerHTML=w}else g.classList.add("hidden");c.deliveryMethod==="delivery"&&(L("summary-shipping",S(a)),L("summary-distance",`(${c.distance.toFixed(1)}km)`)),L("summary-total",S(h)),l("btn-total-preview")&&L("btn-total-preview",S(h));const y=l("summary-ppn-row");y&&(d.ppnEnabled&&p>0?(y.classList.remove("hidden"),d.ppnType==="inclusive"?(L("summary-ppn-label",`Termasuk PPN (${d.ppnRate}%)`),L("summary-ppn",S(p))):(L("summary-ppn-label",`PPN (${d.ppnRate}%)`),L("summary-ppn",`+${S(p)}`))):y.classList.add("hidden")),L("payment-cust-name",c.name||"-"),l("payment-cust-wa")&&(l("payment-cust-wa").textContent=c.wa?"+"+c.wa:"-"),c.dropPoint&&c.dropPoint.lat?L("payment-cust-method",`Kirim ke Lokasi Berbeda (${c.distance.toFixed(1)}km dari Toko)`):L("payment-cust-method",c.deliveryMethod==="delivery"?`Dikirim (${c.distance.toFixed(1)}km)`:"Ambil di Toko"),L("payment-cust-address",c.address||"-");const k=l("payment-droppoint-info");if(k)if(c.dropPoint&&c.dropPoint.lat&&c.dropPoint.name){k.classList.remove("hidden"),L("payment-dp-name",c.dropPoint.name||"-");const w=l("payment-dp-wa");w&&(w.textContent=c.dropPoint.wa?"+"+c.dropPoint.wa:"-"),L("payment-dp-address",c.dropPoint.address||"-")}else k.classList.add("hidden");N("payment-items-preview",R.map(w=>{const C=w.variantName?`<span class="bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300 px-1.5 py-0.5 rounded-lg text-[9px] font-bold">${u(w.variantName)}</span>`:"",ye=w.poTime?`<span class="amber-badge px-1.5 py-0.5 rounded-lg text-[8px] font-bold uppercase">PO ${u(w.poTime)}</span>`:"";return`
        <div class="flex justify-between items-center bg-white dark:bg-slate-800 p-4 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm min-w-0">
            <div class="flex items-center gap-3.5 min-w-0">
                <img loading="lazy" src="${u(w.img)}" alt="${u(w.name)}" class="w-12 h-12 rounded-xl object-cover border border-slate-200 dark:border-slate-700 shrink-0" onerror="this.onerror=null;this.src='https://placehold.co/400?text=No+Image'">
                <div class="min-w-0">
                    <p class="text-sm font-bold text-slate-800 dark:text-white truncate mb-1" title="${u(w.name)}">${u(w.name)}</p>
                    ${w.variantName||w.poTime?`
                    <div class="flex flex-wrap gap-1 mb-1">
                        ${C}
                        ${ye}
                    </div>`:""}
                    <p class="text-[11px] text-[var(--color-primary)] font-bold">${parseFloat(w.qty)} ${u(w.unit||"pcs")} x ${S(e(w))}</p>
                </div>
            </div>
            <div class="text-sm font-bold text-slate-900 dark:text-white whitespace-nowrap ml-3 shrink-0">${S(e(w)*parseFloat(w.qty))}</div>
        </div>`}).join("")+(le?`<div class="flex justify-between items-center bg-[rgba(var(--color-primary-rgb),0.06)] dark:bg-[rgba(var(--color-primary-rgb),0.12)] p-4 rounded-2xl border border-[var(--color-primary)]/30 shadow-sm min-w-0"><div class="flex items-center gap-3.5 min-w-0"><div class="w-12 h-12 rounded-xl bg-[var(--color-primary)] text-white flex items-center justify-center shrink-0"><i class="fa-solid fa-gift"></i></div><div class="min-w-0"><p class="text-sm font-bold text-[var(--color-primary)] truncate">${u(le.name)}</p><p class="text-[11px] text-[var(--color-primary)] font-bold mt-1"><i class="fa-solid fa-star mr-1"></i>Tukar ${le.pointsCost} Poin (Gratis)</p></div></div><button type="button" onclick="if(typeof deselectReward==='function') deselectReward(); rPay();" class="text-[10px] font-bold text-rose-500 uppercase shrink-0 ml-3">Batal</button></div>`:"")),c.note?(L("payment-note-text",`"${u(c.note)}"`),q("payment-note-preview")):T("payment-note-preview"),N("dynamic-banks-container",f.banks?.length?f.banks.map(w=>`<div class="bg-white dark:bg-slate-800 p-4 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm"><p class="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">Bank ${u(w.bankName)}</p><p class="text-lg font-bold text-[var(--color-primary)] tracking-wide">${u(w.bankAccount)}</p><p class="text-xs text-slate-500 dark:text-slate-400 font-medium mt-1.5">a.n <span class="font-bold text-slate-700 dark:text-white">${u(w.bankOwner)}</span></p></div>`).join(""):'<div class="bg-rose-50 dark:bg-rose-900/20 border border-rose-200 p-4 rounded-2xl text-center"><p class="text-sm text-rose-500 dark:text-rose-400 font-bold">Rekening belum diatur.</p></div>');const G=l("payment-option-cashier"),F=l("payment-option-cod");if(G&&F){if(c.deliveryMethod==="pickup"){if(q("payment-option-cashier"),T("payment-option-cod"),(document.querySelector('input[name="payment"]:checked')||{}).value==="cod"){const w=document.querySelector('input[value="cashier"]');w&&(w.checked=!0)}}else{T("payment-option-cashier"),q("payment-option-cod");const w=(document.querySelector('input[name="payment"]:checked')||{}).value;if(w==="cashier"||!w){const C=document.querySelector('input[value="cod"]');C&&(C.checked=!0)}}typeof window.togglePaymentDetails=="function"&&window.togglePaymentDetails()}const Q=l("tnc-checkbox");Q&&(Q.checked=!1,It())},Bs=async()=>{if(!l("tnc-checkbox").checked||tt)return;if(window.isAdm){typeof window.showToast=="function"&&window.showToast("Anda login sebagai Seller. Logout dulu untuk membuat pesanan.");return}const e=Qe("freshmart_last_order");if(e&&Date.now()-parseInt(e)<6e4){typeof window.showToast=="function"&&window.showToast("Tunggu 1 menit untuk pesanan baru!");return}const t=typeof window.getEffP=="function"?window.getEffP:r=>r.price||0,a=typeof window.getEffHpp=="function"?window.getEffHpp:()=>0,s=typeof window.getEffPoin=="function"?window.getEffPoin:()=>0;let o=!1;if(R.forEach(r=>{const i=f.products.find(d=>d.id===r.id);if(!i)return;const n=r.variantName?((i.variants||[]).find(d=>d.name===r.variantName)||{}).price??i.price:i.price;n!==void 0&&Math.abs(r.price-n)>1&&(r.price=n,o=!0),r.poin=s(r)}),o){Ie("freshmart_cart",JSON.stringify(R)),typeof window.renderCart=="function"&&window.renderCart(),Lt(),typeof window.showToast=="function"&&window.showToast("Harga produk telah diperbarui. Periksa kembali sebelum order.");return}ie(!0),Z("Proses Pesanan...");try{const r=R.reduce((x,A)=>x+(parseFloat(t(A))||0)*(parseFloat(A.qty)||0),0);let i=0,n=0,d=0;c.deliveryMethod==="delivery"&&(i=Math.ceil((parseFloat(c.distance)||0)*(parseFloat(f.store.costPerKm)||0)/500)*500);const p=f.store.useStock===!0||f.store.useStock==="true";if(p)for(const x of R){const A=f.products.find(M=>M.id===x.id);if(!A)continue;const te=parseFloat(x.qty)||0;if(x.variantName){const M=(A.variants||[]).find(U=>U.name===x.variantName),E=parseFloat(M&&M.stock!==void 0?M.stock:0);if(E<te){ie(!1),I(),typeof window.showToast=="function"&&window.showToast(`Stok ${x.name} (${x.variantName}) tidak cukup! Sisa: ${E}`);return}}else{const M=parseFloat(A.stock!==void 0?A.stock:0);if(M<te){ie(!1),I(),typeof window.showToast=="function"&&window.showToast(`Stok ${x.name} tidak cukup! Sisa: ${M}`);return}}}if(v){let x=r;if(v.targetProduct&&v.targetProduct!==""){const A=parseInt(v.targetProduct);x=R.filter(M=>M.id===A).reduce((M,E)=>M+(parseFloat(t(E))||0)*(parseFloat(E.qty)||0),0)}if(v.minPurchase&&parseFloat(v.minPurchase)>0&&r<parseFloat(v.minPurchase))W(null);else if(v.targetProduct&&v.targetProduct!==""&&x===0)W(null);else if(v.type&&v.type.includes("shipping")&&c.deliveryMethod!=="delivery")W(null);else if(v.type==="shipping_free")n=i;else if(v.type==="shipping_flat")n=parseFloat(v.value)||0;else if(v.type==="percent"){let A=x*((parseFloat(v.value)||0)/100);v.maxDiscount&&parseFloat(v.maxDiscount)>0&&(A=Math.min(A,parseFloat(v.maxDiscount))),d=A}else d=parseFloat(v.value)||0,d=Math.min(d,x)}const h=(f.store.freeShippingMinSpendEnabled===!0||f.store.freeShippingMinSpendEnabled==="true")&&(parseFloat(f.store.freeShippingMinSpendAmount)||0)>0&&r>=(parseFloat(f.store.freeShippingMinSpendAmount)||0)&&c.deliveryMethod==="delivery";h&&(n=i),n=Math.min(n,i),d=Math.min(d,r);const g=Math.max(0,r-d+(i-n)),k=(typeof window.calcTaxDetails=="function"?window.calcTaxDetails:()=>({ppnEnabled:!1,ppnAmount:0,grandTotalAdd:0}))(g),G=k.ppnAmount,F=k.dppAmount,Q=g+k.grandTotalAdd,w=(document.querySelector('input[name="payment"]:checked')||{}).value,C=w==="transfer"||w==="qris"||w==="tempo",ye=window.buktiGDriveUploaded&&window.buktiPaymentUrl&&!window.buktiPaymentUrl.startsWith("data:");if(C&&!ye){if(ie(!1),I(),!window.buktiPaymentFile){typeof window.showToast=="function"&&window.showToast("Upload bukti pembayaran terlebih dahulu!");return}typeof window.showToast=="function"&&window.showToast("Tunggu upload Google Drive selesai, atau coba lagi!");return}const se="ORD-"+Date.now().toString(36).toUpperCase()+"-"+Math.random().toString(36).substring(2,6).toUpperCase();if(window.buktiPaymentFile&&!window.buktiGDriveUploaded)try{Z("Upload Bukti ke Google Drive...");const x=await window.uploadBuktiToFirebase(window.buktiPaymentFile,se);if(x&&!x.startsWith("data:"))window.buktiPaymentUrl=x,window.buktiGDriveUploaded=!0;else{ie(!1),I(),typeof window.showToast=="function"&&window.showToast("❌ Upload bukti ke Google Drive gagal. Coba pilih gambar lagi!");return}Z("Proses Pesanan...")}catch{ie(!1),I(),typeof window.showToast=="function"&&window.showToast("❌ Gagal upload bukti. Periksa koneksi dan coba lagi!");return}const m={orderId:se,timestamp:_e.firestore.FieldValue.serverTimestamp(),dateString:new Date().toISOString(),customer:c,isDropPoint:!!(c.dropPoint&&c.dropPoint.lat&&c.dropPoint.name),dropPoint:c.dropPoint&&c.dropPoint.lat&&c.dropPoint.name?{...c.dropPoint}:null,items:R.map(x=>({...x,qty:parseFloat(x.qty),effectivePrice:t(x),poTime:x.poTime||"",hpp:a(x),poin:s(x)})),payment:{method:w,subtotal:r,shippingCost:i,shippingDiscount:n,productDiscount:d,ppnAmount:G,dppAmount:F,ppnRate:k.ppnEnabled?k.ppnRate:0,ppnType:k.ppnEnabled?k.ppnType:"exclusive",grandTotal:Q,isFreeShippingPromo:h||!1},status:"Baru",buktiPayment:window.buktiPaymentUrl||null};if(w==="tempo"){if(!c.wa){ie(!1),I(),typeof window.showToast=="function"&&window.showToast("Pembayaran Cash Tempo hanya untuk Member Resmi terdaftar!");return}const x=document.getElementById("tempo-dp-input");let A=x&&parseFloat(x.value)||0;A>Q&&(A=Q),m.payment.tempoDp=A,m.payment.tempoBalance=Q-A,m.payment.tempoDueDate=Date.now()+30*24*60*60*1e3,m.payment.paymentStatus="hutang"}const j=D.collection("freshmart_orders").doc(se),de=typeof window.calculateCartPoints=="function"?window.calculateCartPoints(R,f.store):{totalPoints:0,directPoints:0,spendPoints:0},pe=de.totalPoints;m.pointsEarned=pe,m.pointsBreakdown={direct:de.directPoints,spend:de.spendPoints};const Re=D.collection("freshmart").doc("cms_data"),me=c.wa?Re.collection("customers").doc(c.wa):null,Ae=!!le;let we=null;if(p){const x={};R.forEach(M=>{const E=M.id!=null?M.id.toString():null;if(!E)return;x[E]||(x[E]={main:0,variants:{}});const U=parseFloat(M.qty)||0;M.variantName?x[E].variants[M.variantName]=(x[E].variants[M.variantName]||0)+U:x[E].main+=U});const A=Object.keys(x),te=A.map(M=>D.collection("freshmart").doc("cms_data").collection("products").doc(M));await D.runTransaction(async M=>{const E=await Promise.all(te.map(H=>M.get(H))),U=me?await M.get(me):null,oe=!!(U&&U.exists),ue=oe&&Ae?D.collection("freshmart").doc("cms_data").collection("rewards").doc(le.id.toString()):null,ce=ue?await M.get(ue):null,K=[];if(E.forEach((H,re)=>{if(!H.exists)return;const B=H.data(),Y=x[A[re]];if(Y.main>0){const $=parseFloat(B.stock!==void 0?B.stock:0);$<Y.main&&K.push(`${B.name} (sisa ${$})`)}Object.keys(Y.variants).forEach($=>{const fe=(B.variants||[]).find(ke=>ke.name===$),Ce=parseFloat(fe&&fe.stock!==void 0?fe.stock:0);Ce<Y.variants[$]&&K.push(`${B.name} (${$}, sisa ${Ce})`)})}),K.length)throw new Error("STOK_TIDAK_CUKUP: "+K.join(", "));let Se=null,ge=null;if(oe){const H=parseFloat(U.data().points)||0;let re=H;if(Ae){if(!ce||!ce.exists)throw new Error("HADIAH_TIDAK_DITEMUKAN");const B=ce.data();if(H<(parseFloat(B.pointsCost)||0))throw new Error("POIN_TIDAK_CUKUP");if((parseFloat(B.stock)||0)<=0)throw new Error("STOK_HADIAH_HABIS");Se=(parseFloat(B.stock)||0)-1,re-=parseFloat(B.pointsCost)||0,m.claimedReward={id:B.id,name:B.name,pointsCost:parseFloat(B.pointsCost)||0,status:"pending",note:""}}re+=pe,ge=re,m.pointsEarned=pe,m.customerPhone=c.wa,m.finalMemberPoints=ge,m.customerType="Member"}else{if(w==="tempo")throw new Error("TEMPO_KHUSUS_MEMBER");if(Ae)throw new Error("MEMBER_TIDAK_DITEMUKAN");m.pointsEarned=0,m.pointsBreakdown={direct:0,spend:0},m.finalMemberPoints=null,m.customerType="Pelanggan Umum"}if(E.forEach((H,re)=>{if(!H.exists)return;const B=A[re],Y=x[B],$=JSON.parse(JSON.stringify(H.data())),fe={};Y.main>0&&($.stock=Math.max(0,(parseFloat($.stock)||0)-Y.main),fe.stock=$.stock,$.stock===0&&($.isActive="false",fe.isActive="false"),$.totalSold=(parseFloat($.totalSold)||0)+Y.main,fe.totalSold=$.totalSold),Object.keys(Y.variants).length>0&&$.variants&&(Object.keys(Y.variants).forEach(ke=>{const Pe=($.variants||[]).findIndex(Vt=>Vt.name===ke);Pe>-1&&($.variants[Pe].stock=Math.max(0,(parseFloat($.variants[Pe].stock)||0)-Y.variants[ke]),$.variants[Pe].stock===0&&($.variants[Pe].isActive=!1),$.variants[Pe].totalSold=(parseFloat($.variants[Pe].totalSold)||0)+Y.variants[ke])}),fe.variants=$.variants);const Ce=f.products.findIndex(ke=>ke.id.toString()===B);Ce>-1&&(f.products[Ce]=$),M.update(te[re],fe)}),M.set(j,m),oe&&me&&ge!==null){const H={points:ge,name:c.name||U.data().name||"Pelanggan Setia",lastOrderAt:Date.now()};M.set(me,H,{merge:!0}),we=ge}Se!==null&&M.set(ue,{stock:Se},{merge:!0}),M.update(Re,{lastUpdate:_e.firestore.FieldValue.increment(1),updateType:"stock_change",updatedProductIds:A})}),f.lastUpdate=(parseInt(Qe("freshmart_last_update"))||f.lastUpdate||0)+1,Ie("freshmart_last_update",f.lastUpdate.toString()),Ie("freshmart_products",JSON.stringify(f.products))}else if(me)await D.runTransaction(async x=>{const A=await x.get(me),te=A.exists,M=te&&Ae?D.collection("freshmart").doc("cms_data").collection("rewards").doc(le.id.toString()):null,E=M?await x.get(M):null;let U=null,oe=null;if(te){const ue=parseFloat(A.data().points)||0;let ce=ue;if(Ae){if(!E||!E.exists)throw new Error("HADIAH_TIDAK_DITEMUKAN");const K=E.data();if(ue<(parseFloat(K.pointsCost)||0))throw new Error("POIN_TIDAK_CUKUP");if((parseFloat(K.stock)||0)<=0)throw new Error("STOK_HADIAH_HABIS");U=(parseFloat(K.stock)||0)-1,ce-=parseFloat(K.pointsCost)||0,m.claimedReward={id:K.id,name:K.name,pointsCost:parseFloat(K.pointsCost)||0,status:"pending",note:""}}ce+=pe,oe=ce,m.pointsEarned=pe,m.customerPhone=c.wa,m.finalMemberPoints=oe,m.customerType="Member",x.set(me,{points:oe,name:c.name||A.data().name||"Pelanggan Setia",lastOrderAt:Date.now()},{merge:!0}),we=oe,U!==null&&x.set(M,{stock:U},{merge:!0})}else{if(w==="tempo")throw new Error("TEMPO_KHUSUS_MEMBER");if(Ae)throw new Error("MEMBER_TIDAK_DITEMUKAN");m.pointsEarned=0,m.pointsBreakdown={direct:0,spend:0},m.finalMemberPoints=null,m.customerType="Pelanggan Umum"}x.set(j,m)});else{if(m.pointsEarned=0,m.pointsBreakdown={direct:0,spend:0},m.finalMemberPoints=null,m.customerType="Pelanggan Umum",w==="tempo")throw new Error("TEMPO_KHUSUS_MEMBER");await j.set(m)}O.unshift({orderId:se,date:new Date().toISOString(),total:Q,itemCount:R.reduce((x,A)=>x+parseFloat(A.qty),0),status:"Baru",pointsEarned:m.pointsEarned||0,claimedReward:m.claimedReward||null,finalMemberPoints:we,customerType:m.customerType||"Pelanggan Umum"}),Ne(O);try{localStorage.setItem("freshmart_my_orders",JSON.stringify(O)),localStorage.setItem("freshmart_last_order",Date.now().toString())}catch{}if(typeof analytics<"u"&&analytics.logEvent("purchase",{transaction_id:se,value:Q,currency:"IDR"}),c.wa&&we!==null){const x={id:c.wa,phone:c.wa,name:c.name||"Pelanggan Setia",points:we};J(x);try{localStorage.setItem("freshmart_current_member",JSON.stringify(x)),localStorage.setItem("freshmart_member_wa",c.wa)}catch{}typeof window.invalidateMemberCache=="function"&&window.invalidateMemberCache(c.wa)}else{J(null);try{localStorage.removeItem("freshmart_current_member")}catch{}}m.claimedReward&&we!==null?typeof window.showToast=="function"&&window.showToast(`✅ Hadiah "${m.claimedReward.name}" berhasil ditukar! Sisa poin Anda: ${we}`):we!==null&&pe>0?typeof window.showToast=="function"&&window.showToast(`✅ Pesanan berhasil dikirim ke admin! (+${pe} Poin Member didapat!)`):typeof window.showToast=="function"&&window.showToast("✅ Pesanan berhasil dikirim ke admin!"),setTimeout(()=>{Pt([]),V("cust-name",""),V("cust-address",""),V("cust-maps-input",""),V("cust-note",""),V("cust-wa",""),window.buktiPaymentUrl=null,window.buktiPaymentFile=null,window.buktiGDriveUploaded=!1;const x=l("bukti-preview-wrap"),A=l("bukti-placeholder");x&&x.classList.add("hidden"),A&&A.classList.remove("hidden"),T("bukti-uploading"),T("bukti-success"),T("bukti-gdrive-error");const te=l("bukti-file-input");te&&(te.value=""),Mt({name:"",address:"",lat:null,lng:null,deliveryMethod:"delivery",distance:0,note:"",wa:"",dropPoint:null}),W(null),ne(null);const M=l("toggle-droppoint"),E=l("droppoint-form");M&&(M.checked=!1),E&&E.classList.add("hidden");const U=l("dp-location-status");U&&U.classList.add("hidden");const oe=l("payment-droppoint-info");oe&&oe.classList.add("hidden");const ue=l("dp-receiver-name");ue&&(ue.value="");const ce=l("dp-receiver-wa");ce&&(ce.value="");const K=l("dp-address");K&&(K.value="");const Se=l("dp-maps-input");Se&&(Se.value="");const ge=l("btn-dp-location");ge&&(ge.innerHTML='<i class="fa-solid fa-location-crosshairs text-sm text-rose-500"></i> <span id="text-dp-location">Sematkan GPS Lokasi Tujuan</span>');const H=l("member-status-banner");H&&T(H),T("payment-option-tempo"),l("voucher-input")&&(l("voucher-input").value=""),T("voucher-msg-container"),T("location-status"),l("btn-location")&&q("btn-location");const re=document.querySelector('input[name="delivery-method"][value="delivery"]');re&&(re.checked=!0,it());const B=document.querySelector('input[name="payment"][value="transfer"]');B&&(B.checked=!0,typeof window.togglePaymentDetails=="function"&&window.togglePaymentDetails()),typeof window.updCart=="function"&&window.updCart(),typeof window.renderCart=="function"&&window.renderCart();try{window.history.replaceState({view:"view-catalog"},"",window.location.pathname)}catch{}typeof window.changeView=="function"&&window.changeView("view-catalog",!0),typeof window.showToast=="function"&&window.showToast("Pesanan Dibuat! 🎉")},2e3)}catch(r){const i=r.message||"Error";i.startsWith("STOK_TIDAK_CUKUP:")?typeof window.showToast=="function"&&window.showToast("Maaf, stok berubah: "+i.replace("STOK_TIDAK_CUKUP: ","")):i==="TEMPO_KHUSUS_MEMBER"?typeof window.showToast=="function"&&window.showToast("Pembayaran Cash Tempo hanya untuk Member Resmi yang telah didaftarkan Admin!"):i==="POIN_TIDAK_CUKUP"?(typeof window.showToast=="function"&&window.showToast("Maaf, poin Anda ternyata tidak cukup untuk hadiah ini. Silakan cek lagi."),ne(null)):i==="STOK_HADIAH_HABIS"?(typeof window.showToast=="function"&&window.showToast("Maaf, stok hadiah yang dipilih baru saja habis. Silakan pilih hadiah lain."),ne(null)):i==="HADIAH_TIDAK_DITEMUKAN"?(typeof window.showToast=="function"&&window.showToast("Hadiah yang dipilih sudah tidak tersedia. Silakan pilih ulang."),ne(null)):i==="MEMBER_TIDAK_DITEMUKAN"?(typeof window.showToast=="function"&&window.showToast("Data member tidak ditemukan, klaim hadiah dibatalkan. Pesanan bisa dicoba lagi tanpa hadiah."),ne(null)):typeof window.showToast=="function"&&window.showToast(r.code==="resource-exhausted"?"Quota Server Penuh!":"Gagal proses: "+i)}finally{ie(!1),I()}};window.validateAndGoToPayment=_s;window.toggleDeliveryMethod=it;window.toggleDropPoint=Is;window.getDPLocation=Ls;window.handleDPMapsInput=Rt;window.pasteDPMapsInput=Fs;window.toggleOrderButton=It;window.rPay=Lt;window.processOrder=Bs;window.getLocation=()=>{if(!navigator.geolocation)return b("GPS tidak didukung");l("btn-location").innerHTML='<i class="fa-solid fa-spinner fa-spin text-sm"></i>',navigator.geolocation.getCurrentPosition(e=>{c.lat=e.coords.latitude,c.lng=e.coords.longitude,T("btn-location"),q("location-status"),l("location-status").classList.add("flex"),b("GPS Didapatkan")},e=>{l("btn-location").innerHTML='<i class="fa-solid fa-location-crosshairs text-[var(--color-primary)]"></i> Set GPS Maps',b("Gagal akses GPS")},{enableHighAccuracy:!0,timeout:15e3})};window.handleCustomerMapsInput=e=>{const t=typeof window.parseGeoCoordinates=="function"?window.parseGeoCoordinates:null,a=t?t(e):null;if(a){c.lat=parseFloat(a.lat),c.lng=parseFloat(a.lng),T("btn-location"),q("location-status");const s=l("location-status");return s&&(s.classList.add("flex"),s.innerHTML=`
                <i class="fa-solid fa-circle-check shrink-0 text-lg primary-text"></i>
                <div class="min-w-0">
                    <span class="text-[10px] font-bold uppercase leading-tight tracking-wide primary-text block">Koordinat Berhasil Disematkan!</span>
                    <span class="text-[9px] text-slate-500 dark:text-slate-400 font-mono">${a.lat}, ${a.lng}</span>
                </div>
            `),b("Titik lokasi Maps pembeli berhasil disematkan!"),typeof window.rPay=="function"&&window.rPay(),!0}return!1};window.pasteCustomerMapsInput=async()=>{const e=l("cust-maps-input");if(e){try{if(navigator.clipboard&&navigator.clipboard.readText){const t=await navigator.clipboard.readText();if(t){e.value=t,window.handleCustomerMapsInput(t)||b("Format tidak dikenali! Tempel koordinat: Lat, Lng atau link Maps");return}}}catch{}e.focus(),b("Silakan tekan Ctrl+V atau tahan untuk menempel")}};const Ns=()=>{const e=f.store.isDeliveryEnabled!==!1,t=f.store.isPickupEnabled!==!1;X("delivery-option-container","hidden",!e),X("pickup-option-container","hidden",!t),X("no-delivery-warning","hidden",e||t),X("delivery-methods-grid","hidden",!(e||t));const a=l("btn-checkout-next");if(a)if(e||t){a.removeAttribute("disabled"),a.classList.remove("opacity-50");const o=(c.deliveryMethod||"delivery")==="pickup"&&t?"pickup":e?"delivery":"pickup",r=document.querySelector(`input[value="${o}"]`);r&&(r.checked=!0)}else a.setAttribute("disabled","true"),a.classList.add("opacity-50");it()};window.rChck=Ns;window.buktiPaymentUrl=null;window.buktiPaymentFile=null;window.buktiGDriveUploaded=!1;window.compressImageForUpload=(e,t=1600,a=.82)=>new Promise(s=>{const o=new FileReader;o.readAsDataURL(e),o.onload=r=>{const i=new Image;i.onload=()=>{let{width:n,height:d}=i;(n>t||d>t)&&(n>d?(d=Math.round(d*t/n),n=t):(n=Math.round(n*t/d),d=t));const p=document.createElement("canvas");p.width=n,p.height=d,p.getContext("2d").drawImage(i,0,0,n,d),p.toBlob(h=>{if(!h)return s(e);s(new File([h],e.name,{type:"image/jpeg",lastModified:Date.now()}))},"image/jpeg",a)},i.onerror=()=>s(e),i.src=r.target.result},o.onerror=()=>s(e)});window._doSingleGDriveUpload=async(e,t)=>{const a=new FileReader;return new Promise(s=>{a.readAsDataURL(e),a.onload=async()=>{try{const o=a.result.split(",")[1],r=(e.name||"bukti.jpg").replace(/[^a-zA-Z0-9.]/g,"_"),i={name:"BUKTI_"+t+"_"+Date.now()+"_"+r,mimeType:e.type||"image/jpeg",data:o,token:GAS_SECRET_TOKEN},n=await fetch(GAS_UPLOAD_URL,{method:"POST",body:JSON.stringify(i),headers:{"Content-Type":"text/plain;charset=utf-8"},redirect:"follow"});if(!n.ok)return console.warn("GDrive upload HTTP error:",n.status),s(null);const d=await n.text();let p;try{p=JSON.parse(d)}catch{return console.warn("GDrive response parse error"),s(null)}p&&p.status==="success"&&p.url?s(je(p.url)):(console.warn("GDrive upload gagal:",p&&p.message),s(null))}catch(o){console.warn("GDrive upload exception:",o),s(null)}},a.onerror=()=>s(null)})};window.uploadBuktiToGDrive=async(e,t)=>{if(!e)return null;if(!GAS_UPLOAD_URL||GAS_UPLOAD_URL.includes("ISI_DENGAN"))return console.error("GAS_UPLOAD_URL belum dikonfigurasi!"),null;let a=e;try{a=await window.compressImageForUpload(e)}catch{}const s=2,o=3e4;for(let r=1;r<=s;r++){const i=l("bukti-uploading-text");i&&(i.textContent=r>1?`Mencoba ulang ke Google Drive... (${r}/${s})`:"Mengupload ke Google Drive...");try{const n=await Promise.race([window._doSingleGDriveUpload(a,t),new Promise((d,p)=>setTimeout(()=>p(new Error("timeout")),o))]);if(n)return n}catch(n){console.warn(`Percobaan upload ${r} gagal:`,n.message)}r<s&&await new Promise(n=>setTimeout(n,1500*r))}return null};window.handleBuktiUpload=async e=>{const t=e.target.files[0];if(!t)return;if(!t.type.startsWith("image/"))return b("Hanya file gambar yang diizinkan!");if(t.size>5*1024*1024)return b("Ukuran gambar max 5MB!");window.buktiPaymentFile=t,window.buktiPaymentUrl=null,window.buktiGDriveUploaded=!1;const a=new FileReader;a.onload=i=>{const n=l("bukti-preview-img"),d=l("bukti-preview-wrap"),p=l("bukti-placeholder");n&&(n.src=i.target.result),d&&d.classList.remove("hidden"),p&&p.classList.add("hidden")},a.readAsDataURL(t),T("bukti-success"),T("bukti-gdrive-error");const s=l("bukti-uploading");s&&(s.classList.remove("hidden"),s.style.display="flex");const o="TEMP_"+Date.now().toString(36).toUpperCase(),r=await window.uploadBuktiToGDrive(t,o);if(T("bukti-uploading"),r){window.buktiPaymentUrl=r,window.buktiGDriveUploaded=!0;const i=l("bukti-success"),n=l("bukti-success-text"),d=l("bukti-storage-info");n&&(n.textContent="Bukti berhasil disimpan!"),d&&(d.textContent="(tersimpan di Google Drive ✓)"),i&&(i.classList.remove("hidden"),i.style.display="flex"),T("bukti-gdrive-error")}else{window.buktiPaymentUrl=null,window.buktiGDriveUploaded=!1;const i=l("bukti-gdrive-error");i&&(i.classList.remove("hidden"),i.style.display="flex"),T("bukti-success"),b("❌ Upload ke Google Drive gagal. Coba lagi!")}};window.retryBuktiUpload=async()=>{if(!window.buktiPaymentFile)return b("Pilih gambar terlebih dahulu!");T("bukti-gdrive-error"),T("bukti-success");const e=l("bukti-uploading");e&&(e.classList.remove("hidden"),e.style.display="flex");const t="RETRY_"+Date.now().toString(36).toUpperCase(),a=await window.uploadBuktiToGDrive(window.buktiPaymentFile,t);if(T("bukti-uploading"),a){window.buktiPaymentUrl=a,window.buktiGDriveUploaded=!0;const s=l("bukti-success"),o=l("bukti-success-text"),r=l("bukti-storage-info");o&&(o.textContent="Bukti berhasil disimpan!"),r&&(r.textContent="(tersimpan di Google Drive ✓)"),s&&(s.classList.remove("hidden"),s.style.display="flex"),b("✅ Upload berhasil!")}else{const s=l("bukti-gdrive-error");s&&(s.classList.remove("hidden"),s.style.display="flex"),b("❌ Masih gagal. Periksa koneksi internet Anda.")}};window.uploadBuktiToFirebase=async(e,t)=>{if(window.buktiGDriveUploaded&&window.buktiPaymentUrl)return window.buktiPaymentUrl;if(!e)return null;const a=await window.uploadBuktiToGDrive(e,t);return a&&(window.buktiPaymentUrl=a,window.buktiGDriveUploaded=!0),a};window.togglePaymentDetails=()=>{const e=(document.querySelector('input[name="payment"]:checked')||{}).value;X("detail-transfer","hidden",e!=="transfer"),X("detail-qris","hidden",e!=="qris"),X("detail-cashier","hidden",e!=="cashier"),X("detail-cod","hidden",e!=="cod"),X("detail-tempo","hidden",e!=="tempo"),e==="tempo"&&window.calculateTempoBalance(),X("bukti-payment-section","hidden",!(e==="transfer"||e==="qris"||e==="tempo"))};window.calculateTempoBalance=()=>{const e=document.getElementById("tempo-dp-input");let t=parseFloat(e?.value)||0;t<0&&(t=0,e&&(e.value=0));let a=R.reduce((G,F)=>G+(parseFloat(getEffP(F))||0)*(parseFloat(F.qty)||0),0),s=0,o=0,r=0;if(c.deliveryMethod==="delivery"&&(s=Math.ceil((parseFloat(c.distance)||0)*(parseFloat(f.store.costPerKm)||0)/500)*500),vouch){let G=a;if(vouch.targetProduct&&vouch.targetProduct!==""){const F=parseInt(vouch.targetProduct);G=R.filter(w=>w.id===F).reduce((w,C)=>w+(parseFloat(getEffP(C))||0)*(parseFloat(C.qty)||0),0)}if(vouch.type==="shipping_free")r=s;else if(vouch.type==="shipping_flat")r=parseFloat(vouch.value)||0;else if(vouch.type==="percent"){let F=G*((parseFloat(vouch.value)||0)/100);vouch.maxDiscount&&parseFloat(vouch.maxDiscount)>0&&(F=Math.min(F,parseFloat(vouch.maxDiscount))),o=F}else o=parseFloat(vouch.value)||0,o=Math.min(o,G)}(f.store.freeShippingMinSpendEnabled===!0||f.store.freeShippingMinSpendEnabled==="true")&&(parseFloat(f.store.freeShippingMinSpendAmount)||0)>0&&a>=(parseFloat(f.store.freeShippingMinSpendAmount)||0)&&c.deliveryMethod==="delivery"&&(r=s),r=Math.min(r,s),o=Math.min(o,a);let n=Math.max(0,a-o),d=Math.max(0,s-r);const p=window.calcTaxDetails(n+d);let h=0;window.useMemberPoints&&currentMember&&(h=Math.min(n+d+p.grandTotalAdd,parseFloat(currentMember.points)||0));let g=n+d+p.grandTotalAdd-h;t>g&&(t=g,e&&(e.value=t));let y=g-t;const k=document.getElementById("tempo-balance-display");k&&(k.innerText=S(y))};let Je=[];const qe=()=>{try{localStorage.setItem("freshmart_my_orders",JSON.stringify(O))}catch(e){console.warn("[MyOrders] Gagal menyimpan ke localStorage:",e)}},js=()=>{try{const e=localStorage.getItem("freshmart_my_orders");if(e){const t=JSON.parse(e);Array.isArray(t)&&t.length>0&&Ne(t)}}catch(e){console.warn("[MyOrders] Gagal memuat dari localStorage:",e)}return O},Ft=()=>{Je.forEach(e=>{try{typeof e=="function"&&e()}catch{}}),Je=[]},_t=()=>{Ft(),O.filter(a=>{const s=a.status==="Selesai"||a.status==="Dibatalkan",o=a.claimedReward&&(a.claimedReward.status==="Menunggu Persetujuan"||!a.claimedReward.status);return!s||o}).slice(0,10).forEach(a=>{const s=a.orderId;if(!s)return;const o=D.collection("freshmart_orders").doc(s).onSnapshot(r=>{if(!r.exists)return;const i=r.data(),n=i.status,d=i.claimedReward?i.claimedReward.status:null,p=i.claimedReward&&i.claimedReward.note||"";let h=!1,g="";const y=O.find(k=>k.orderId===s);if(y){if(n&&y.status!==n){const k=y.status;y.status=n,h=!0,k!==void 0&&(g=`Pesanan #${s.split("-").pop()} kini: ${n}`)}y.claimedReward&&d&&(y.claimedReward.status!==d||y.claimedReward.note!==p)&&(y.claimedReward.status=d,y.claimedReward.note=p,h=!0),h&&(qe(),window.curViewName==="view-orders"&&Ee(),g&&b(g))}},r=>{console.warn("[MyOrders Realtime] Snapshot error:",r.message)});Je.push(o)})},Ee=async()=>{if(js(),!O.length){q("orders-empty-state"),T("btn-clear-orders"),q("spacer-orders"),N("orders-items-container","");return}T("orders-empty-state"),q("btn-clear-orders"),T("spacer-orders"),_t(),N("orders-items-container",O.map((e,t)=>{const a=new Date(e.date).toLocaleDateString("id-ID",{day:"numeric",month:"short",year:"numeric"});let s="text-slate-500 border-slate-200 bg-slate-50 dark:bg-slate-800 dark:border-slate-700",o="fa-clock";return e.status==="Baru"?(s="text-rose-600 border-rose-200 bg-rose-50 dark:bg-rose-900/30 dark:border-rose-800 dark:text-rose-400",o="fa-asterisk"):e.status==="Diproses"?(s="text-[var(--color-primary)] border-[var(--color-primary)]/30 bg-[rgba(var(--color-primary-rgb),0.08)] dark:bg-[rgba(var(--color-primary-rgb),0.15)] dark:border-[var(--color-primary)]/40",o="fa-spinner fa-spin"):e.status==="Selesai"?(s="text-[var(--color-primary)] border-[var(--color-primary)]/30 bg-[rgba(var(--color-primary-rgb),0.08)] dark:bg-[rgba(var(--color-primary-rgb),0.15)] dark:border-[var(--color-primary)]/40",o="fa-check-double"):e.status==="Dibatalkan"&&(s="text-slate-400 border-slate-200 bg-slate-100 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-400",o="fa-xmark"),`
        <div class="bg-white dark:bg-slate-800 p-4 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm relative overflow-hidden group min-w-0 transition-all hover:border-[var(--color-primary)]/40">
            <div class="flex justify-between items-start mb-3 border-b border-slate-100 dark:border-slate-700/60 pb-3">
                <div>
                    <span class="font-bold text-sm text-slate-800 dark:text-white tracking-tight">#${e.orderId.split("-").pop()}</span>
                    <p class="text-[10px] font-semibold text-slate-500 dark:text-slate-400 mt-0.5"><i class="fa-regular fa-calendar-days mr-1"></i>${a}</p>
                </div>
                <span class="text-[10px] font-bold px-2.5 py-1 rounded-lg border ${s} uppercase tracking-wider flex items-center shadow-xs"><i class="fa-solid ${o} mr-1.5 text-[9px]"></i> ${u(e.status)}</span>
            </div>
            ${e.pointsEarned>0||e.claimedReward?`
            <div class="flex flex-wrap gap-1.5 mb-3">
                ${e.pointsEarned>0?`<span class="text-[9px] font-bold px-2 py-1 rounded-lg bg-amber-50 text-amber-600 border border-amber-200 dark:bg-amber-900/20 dark:border-amber-800 dark:text-amber-400"><i class="fa-solid fa-star mr-1"></i>+${e.pointsEarned} Poin</span>`:""}
                ${e.claimedReward?`<span class="text-[9px] font-bold px-2 py-1 rounded-lg bg-[rgba(var(--color-primary-rgb),0.08)] text-[var(--color-primary)] border border-[var(--color-primary)]/30 dark:bg-[rgba(var(--color-primary-rgb),0.12)] dark:border-[var(--color-primary)]/40 dark:text-[var(--color-primary)]"><i class="fa-solid fa-gift mr-1"></i>Hadiah: ${u(e.claimedReward.name)} ${at(e.claimedReward)}</span>`:""}
                ${e.claimedReward&&e.finalMemberPoints!==void 0&&e.finalMemberPoints!==null?`<span class="text-[9px] font-bold px-2 py-1 rounded-lg bg-slate-100 text-slate-500 border border-slate-200 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-400"><i class="fa-solid fa-wallet mr-1"></i>Sisa: ${e.finalMemberPoints} Poin</span>`:""}
            </div>`:""}
            <div class="flex justify-between items-end mt-2 pt-1">
                <div>
                    <p class="text-[9px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-0.5">Total Tagihan</p>
                    <p class="text-[var(--color-primary)] font-bold text-base tracking-tight">${S(e.total)} <span class="text-[10px] text-slate-500 dark:text-slate-400 font-medium ml-1">(${e.itemCount} Item)</span></p>
                </div>
                <div class="flex gap-2">
                    <button onclick="openCustomerOrderDetail('${e.orderId}')" class="h-8 px-3.5 rounded-xl bg-[rgba(var(--color-primary-rgb),0.08)] hover:bg-[rgba(var(--color-primary-rgb),0.15)] text-[var(--color-primary)] border border-[rgba(var(--color-primary-rgb),0.2)] dark:border-[rgba(var(--color-primary-rgb),0.35)] text-[11px] font-bold transition-all active:scale-95 shadow-xs flex items-center gap-1.5"><i class="fa-solid fa-file-invoice"></i> Detail</button>
                    <button onclick="checkOrderStatus('${e.orderId}', ${t})" class="h-8 px-3.5 rounded-xl bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 text-[11px] font-bold transition-all active:scale-95 shadow-xs flex items-center gap-1.5"><i class="fa-solid fa-rotate"></i> Status</button>
                </div>
            </div>
        </div>`}).join(""))},Os=async(e,t)=>{Z("Melacak Status...");try{const a=await D.collection("freshmart_orders").doc(e).get();if(a.exists){const s=a.data();if(O[t])O[t].status=s.status;else{const o=O.findIndex(r=>r.orderId===e);o>-1&&(O[o].status=s.status)}qe(),Ee(),b(`✅ Status Pesanan: ${s.status}`)}else b("Pesanan tidak ditemukan di server.")}catch(a){console.error("Gagal cek status pesanan:",a),b("Gagal mengambil data sistem. Periksa koneksi.")}finally{I()}},Us=async()=>{const e=l("order-tracking-input"),t=e?e.value.trim():"";if(!t){b("Masukkan ID Pesanan terlebih dahulu!");return}let a=t.replace(/^#/,"").trim();const s=O.find(o=>o.orderId===a||o.orderId.endsWith(a));if(s){Ze(s.orderId);return}Z("Mencari Pesanan...");try{let o=await D.collection("freshmart_orders").doc(a).get();if(!o.exists&&!a.startsWith("ORD-")){const r="ORD-"+a,i=await D.collection("freshmart_orders").doc(r).get();i.exists&&(o=i,a=r)}if(o.exists){const r=o.data();O.some(n=>n.orderId===a)||(O.unshift({orderId:a,date:r.dateString||(r.timestamp?r.timestamp.toDate().toISOString():new Date().toISOString()),total:r.payment&&r.payment.grandTotal?r.payment.grandTotal:0,itemCount:(r.items||[]).reduce((n,d)=>n+(parseFloat(d.qty)||0),0),status:r.status||"Baru",pointsEarned:r.pointsEarned||0,claimedReward:r.claimedReward||null,finalMemberPoints:r.finalMemberPoints||null}),qe(),Ee()),e&&(e.value=""),b("✅ Pesanan berhasil ditemukan!"),Ze(a)}else b("❌ Pesanan dengan ID tersebut tidak ditemukan.")}catch(o){console.error("Gagal melacak pesanan:",o),b("Gagal menghubungi server. Pastikan ID Pesanan sudah benar.")}finally{I()}},qs=()=>{Tt("Hapus Riwayat","Riwayat pesanan di perangkat ini akan dihapus. Pesanan tetap tersimpan di sistem toko. Lanjutkan?",()=>{Ne([]),qe(),Ee(),b("Riwayat lokal dibersihkan")})},Ze=async e=>{Z("Memuat Rincian...");try{const t=await D.collection("freshmart_orders").doc(e).get();if(!t.exists){b("Pesanan tidak ditemukan."),I();return}const a=t.data();let s=[];if(a.status==="Selesai")try{s=(await D.collection("freshmart").doc("cms_data").collection("reviews").where("orderId","==",e).get()).docs.map(r=>`${r.data().productId}::${r.data().variantName||""}`)}catch{}Bt(e,a,s)}catch(t){console.error("Gagal mengambil data pesanan:",t),b("Gagal memuat rincian pesanan. Coba beberapa saat lagi.")}finally{I()}},Bt=(e,t,a=[])=>{try{let s=document.getElementById("order-detail-modal");s||(s=document.createElement("div"),s.id="order-detail-modal",s.className="fixed inset-0 z-[100] flex justify-center items-end sm:items-center bg-slate-900/60 opacity-0 pointer-events-none transition-opacity duration-300",document.body.appendChild(s));const o=u(t.customer&&t.customer.name?t.customer.name:"-"),r=u(t.customer&&t.customer.wa?t.customer.wa:"-"),i=u(t.customer&&t.customer.address?t.customer.address:"-"),n=t.customer&&t.customer.deliveryMethod==="delivery"?"Dikirim ke Alamat":"Ambil di Toko (Pickup)",d=u(t.customer&&t.customer.note?t.customer.note:""),p=u(t.payment&&t.payment.method?t.payment.method:"Cash / COD"),h=t.items||[],g=h.some(m=>m.poTime&&m.poTime!==""),y=h.map(m=>{const j=parseFloat(m.qty)||0,de=parseFloat(m.effectivePrice||m.price)||0,pe=j*de,Re=`${m.id}::${m.variantName||""}`,me=t.status==="Selesai"&&!a.includes(Re)&&m.id!==void 0&&m.id!==null;return`
            <div class="flex gap-3 items-center border-b border-slate-100 dark:border-slate-700/50 py-3 last:border-0">
                <div class="w-12 h-12 rounded-xl bg-slate-100 dark:bg-slate-800 bg-cover bg-center shrink-0 border border-slate-200 dark:border-slate-700" style="background-image:url('${u(m.img||(f&&f.store?f.store.logo:""))}')"></div>
                <div class="flex-1 min-w-0">
                    <p class="text-xs font-bold text-slate-800 dark:text-white truncate mb-0.5" title="${u(m.name)}">${u(m.name)}</p>
                    ${m.variantName||m.poTime?`
                    <div class="flex flex-wrap gap-1 mb-1">
                        ${m.variantName?`<span class="bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300 px-1.5 py-0.5 rounded text-[9px] font-semibold">${u(m.variantName)}</span>`:""}
                        ${m.poTime?`<span class="bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400 border border-amber-200 dark:border-amber-800 px-1.5 py-0.5 rounded text-[8px] font-bold uppercase">PO ${u(m.poTime)}</span>`:""}
                    </div>
                    `:""}
                    <p class="text-[10px] font-medium text-slate-500 dark:text-slate-400">${j} ${u(m.unit||"pcs")} x ${S(de)}</p>
                    ${me?`<button type="button" onclick="openReviewModal('${e}',${m.id},'${encodeURIComponent(m.variantName||"")}','${encodeURIComponent(m.name||"")}','${encodeURIComponent(t.customer?.name||"")}')" class="mt-1.5 text-[10px] font-bold text-amber-500 hover:text-amber-600 flex items-center gap-1 transition-colors"><i class="fa-solid fa-star"></i> Berikan Ulasan</button>`:""}
                </div>
                <div class="text-right shrink-0">
                    <p class="text-xs font-bold text-slate-800 dark:text-[var(--color-primary)]">${S(pe)}</p>
                </div>
            </div>
            `}).join("");let k="Tanggal Tidak Tersedia";try{let m;if(t.timestamp&&typeof t.timestamp.toDate=="function")m=t.timestamp.toDate();else{const j=t.timestamp||t.dateString||Date.now();if(typeof j=="number")m=new Date(j);else if(!isNaN(Number(j))&&String(j).trim()!=="")m=new Date(Number(j));else{const de=String(j).replace(/-/g,"/").replace("T"," ").replace(/\..*$/,"");m=new Date(j),isNaN(m.getTime())&&(m=new Date(de))}}m&&!isNaN(m.getTime())&&(k=m.toLocaleString("id-ID",{day:"numeric",month:"short",year:"numeric",hour:"2-digit",minute:"2-digit"}))}catch(m){console.error("Gagal memproses tanggal:",m)}const G=t.payment&&t.payment.subtotal?t.payment.subtotal:0,F=t.payment&&t.payment.shippingCost?t.payment.shippingCost:0,Q=t.payment&&t.payment.productDiscount?t.payment.productDiscount:0,w=t.payment&&t.payment.shippingDiscount?t.payment.shippingDiscount:0,C=t.payment&&t.payment.ppnAmount?t.payment.ppnAmount:0,ye=t.payment&&t.payment.ppnRate?t.payment.ppnRate:0,se=t.payment&&t.payment.grandTotal?t.payment.grandTotal:0;s.innerHTML=`
            <div class="bg-white dark:bg-slate-900 w-full max-w-lg rounded-t-3xl sm:rounded-2xl max-h-[88vh] flex flex-col shadow-2xl transform translate-y-full sm:translate-y-10 scale-100 transition-transform duration-300 border border-slate-200 dark:border-slate-700 overflow-hidden" id="order-detail-content">
                
                <div class="p-4 sm:p-5 border-b border-slate-200 dark:border-slate-800 flex justify-between items-center shrink-0 bg-slate-50 dark:bg-slate-800/80">
                    <div>
                        <h3 class="font-bold text-slate-800 dark:text-white text-base">Rincian Pesanan</h3>
                        <p class="text-[11px] font-semibold text-slate-500 dark:text-slate-400 mt-0.5">ID: #${e.split("-").pop()}</p>
                    </div>
                    <button onclick="closeCustomerOrderDetailModal()" class="w-8 h-8 flex items-center justify-center rounded-full bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-rose-100 hover:text-rose-500 transition-colors active:scale-95"><i class="fa-solid fa-xmark"></i></button>
                </div>
                
                <div class="p-4 sm:p-5 overflow-y-auto flex-1 space-y-5 custom-scrollbar text-sm">
                    <div class="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-xl border border-slate-200 dark:border-slate-700 flex justify-between items-center">
                        <div>
                            <p class="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-1">Status Pesanan</p>
                            <span class="text-xs font-bold px-2.5 py-1 rounded-md bg-[rgba(var(--color-primary-rgb),0.08)] text-[var(--color-primary)] border border-[var(--color-primary)]/30 dark:bg-[rgba(var(--color-primary-rgb),0.15)] dark:border-[var(--color-primary)]/40">${u(t.status||"Baru")}</span>
                        </div>
                        <div class="text-right">
                            <p class="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-1">Waktu Pembelian</p>
                            <p class="text-[11px] font-bold text-slate-700 dark:text-slate-300">${k}</p>
                        </div>
                    </div>

                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div class="bg-slate-50 dark:bg-slate-800/40 p-3.5 rounded-xl border border-slate-200 dark:border-slate-700/60">
                            <h4 class="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2 flex items-center gap-1.5"><i class="fa-solid fa-user text-slate-400"></i> Info Pelanggan</h4>
                            <div class="space-y-1 text-xs">
                                <p class="font-bold text-slate-800 dark:text-slate-200">${o}</p>
                                ${t.customer&&t.customer.wa?`<a href="javascript:void(0)" onclick="if(typeof window.openWhatsApp==='function') window.openWhatsApp('${r}'); else window.open('https://wa.me/${r}', '_blank', 'noopener,noreferrer');" class="flex items-center gap-1 text-[var(--color-primary)] font-bold hover:underline cursor-pointer"><i class="fa-brands fa-whatsapp"></i> +${r}</a>`:""}
                                ${t.customer&&t.customer.lat&&t.customer.deliveryMethod==="delivery"?`<a href="https://www.google.com/maps?q=${u(t.customer.lat)},${u(t.customer.lng)}" target="_blank" class="flex items-center gap-1 text-blue-600 dark:text-blue-400 font-bold hover:underline"><i class="fa-solid fa-location-dot"></i> Lihat Peta</a>`:""}
                            </div>
                        </div>
                        <div class="bg-slate-50 dark:bg-slate-800/40 p-3.5 rounded-xl border border-slate-200 dark:border-slate-700/60">
                            <h4 class="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2 flex items-center gap-1.5"><i class="fa-solid fa-truck text-slate-400"></i> Pengiriman & Bayar</h4>
                            <div class="space-y-1 text-xs">
                                <p><span class="text-slate-500 inline-block w-14">Metode</span> <span class="font-bold text-slate-800 dark:text-slate-200">: ${n}</span></p>
                                <p><span class="text-slate-500 inline-block w-14">Bayar</span> <span class="font-bold text-slate-800 dark:text-slate-200">: ${p.toUpperCase()}</span></p>
                            </div>
                        </div>
                    </div>

                    <div class="space-y-2.5">
                        <div class="bg-slate-50 dark:bg-slate-800/40 p-3.5 rounded-xl border border-slate-200 dark:border-slate-700/60">
                            <p class="text-[9px] font-bold text-[var(--color-primary)] uppercase tracking-widest mb-1">Alamat Tujuan</p>
                            <p class="text-xs font-semibold text-slate-700 dark:text-slate-200 leading-relaxed">${i}</p>
                        </div>
                        ${d?`<div class="bg-slate-50 dark:bg-slate-800/40 p-3.5 rounded-xl border border-slate-200 dark:border-slate-700/60"><p class="text-[9px] font-bold text-amber-500 dark:text-amber-400 uppercase tracking-widest mb-1">Catatan Pembeli</p><p class="text-xs font-medium text-slate-700 dark:text-slate-200 leading-relaxed italic">"${d}"</p></div>`:""}
                    </div>

                    ${t.buktiPayment?`
                    <div>
                        <h4 class="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2 flex items-center gap-1.5"><i class="fa-solid fa-image text-[var(--color-primary)]"></i> Bukti Pembayaran</h4>
                        <a href="${u(t.buktiPayment)}" target="_blank" class="block rounded-xl overflow-hidden border-2 border-[var(--color-primary)]/30 hover:border-[var(--color-primary)] transition-colors shadow-xs">
                            <img src="${u(t.buktiPayment)}" alt="Bukti Pembayaran" class="w-full max-h-52 object-cover" onerror="this.style.display='none'" loading="lazy">
                            <div class="bg-[rgba(var(--color-primary-rgb),0.06)] p-2 flex items-center justify-center gap-1.5 text-[10px] font-bold text-[var(--color-primary)]"><i class="fa-solid fa-arrow-up-right-from-square"></i> Buka Ukuran Penuh</div>
                        </a>
                    </div>`:""}
                    
                    <div>
                        <h4 class="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2 flex items-center gap-1.5"><i class="fa-solid fa-basket-shopping text-slate-400"></i> Daftar Produk</h4>
                        <div class="bg-slate-50 dark:bg-slate-800/30 rounded-xl px-3 py-1 border border-slate-200 dark:border-slate-700/80">
                            ${y}
                        </div>
                    </div>

                    ${g?`
                    <div class="bg-amber-50 dark:bg-amber-900/15 p-3.5 rounded-xl border border-amber-200 dark:border-amber-800/40 flex gap-2.5 items-start">
                        <i class="fa-solid fa-clock text-amber-500 mt-0.5 animate-pulse"></i>
                        <p class="text-[11px] font-semibold text-amber-800 dark:text-amber-300 leading-relaxed">Catatan: Pesanan ini mengandung produk Pre-Order (PO). Khusus produk PO akan dikirimkan menyusul (estimasi sesuai label) tanpa biaya tambahan.</p>
                    </div>`:""}

                    ${t.pointsEarned>0||t.claimedReward||t.finalMemberPoints!==void 0&&t.finalMemberPoints!==null?`
                    <div class="space-y-2">
                        ${t.pointsEarned>0?`<div class="bg-amber-50 dark:bg-amber-900/15 p-3 rounded-xl border border-amber-200 dark:border-amber-800/30 flex items-center gap-2"><i class="fa-solid fa-star text-amber-500"></i><p class="text-xs font-bold text-amber-700 dark:text-amber-400">Mendapat <b>+${t.pointsEarned} Poin</b> dari pesanan ini!</p></div>`:""}
                        ${t.finalMemberPoints!==void 0&&t.finalMemberPoints!==null?`<div class="bg-slate-50 dark:bg-slate-800/50 p-3 rounded-xl border border-slate-200 dark:border-slate-700 flex items-center gap-2"><i class="fa-solid fa-wallet text-slate-400"></i><p class="text-xs font-semibold text-slate-600 dark:text-slate-300">Saldo Poin Member: <b>${t.finalMemberPoints}</b></p></div>`:""}
                        ${t.claimedReward?`
                        <div class="bg-[rgba(var(--color-primary-rgb),0.06)] p-3 rounded-xl border border-[var(--color-primary)]/20">
                            <div class="flex items-center gap-2"><i class="fa-solid fa-gift text-[var(--color-primary)]"></i><p class="text-xs font-bold text-[var(--color-primary)]">Klaim Hadiah: <b>${u(t.claimedReward.name)}</b> (${t.claimedReward.pointsCost} Poin)</p></div>
                            <p class="text-[11px] font-semibold text-[var(--color-primary)] mt-1 ml-5">${at(t.claimedReward)}</p>
                            ${t.claimedReward.note?`<p class="text-[11px] text-[var(--color-primary)]/70 italic mt-0.5 ml-5">"${u(t.claimedReward.note)}"</p>`:""}
                        </div>`:""}
                    </div>`:""}

                    <div class="bg-slate-100 dark:bg-slate-800 p-4 rounded-xl space-y-2 text-xs">
                        <div class="flex justify-between text-slate-600 dark:text-slate-400"><p>Subtotal Produk</p><p class="font-bold text-slate-800 dark:text-white">${S(G)}</p></div>
                        <div class="flex justify-between text-slate-600 dark:text-slate-400"><p>Ongkos Kirim</p><p class="font-bold text-slate-800 dark:text-white">${S(F)}</p></div>
                        ${w>0?`<div class="flex justify-between text-[var(--color-primary)]"><p>Diskon Ongkir</p><p class="font-bold">-${S(w)}</p></div>`:""}
                        ${Q>0?`<div class="flex justify-between text-rose-500"><p>Diskon Promo</p><p class="font-bold">-${S(Q)}</p></div>`:""}
                        ${(()=>{if(C<=0)return"";const m=t.payment?.ppnType==="inclusive",j=G-Q+(F-w),de=t.payment?.dppAmount||(m?Math.round(j*100/(100+ye)):Math.max(0,j));return`
                            <div class="flex justify-between text-slate-600 dark:text-slate-400"><p>DPP (Dasar Pengenaan Pajak)</p><p class="font-bold text-slate-800 dark:text-white">${S(de)}</p></div>
                            <div class="flex justify-between text-amber-600 dark:text-amber-400"><p>${m?"Termasuk PPN":"PPN"} (${ye}%)</p><p class="font-bold">${m?"":"+"}${S(C)}</p></div>
                            `})()}
                        <div class="flex justify-between items-center border-t border-dashed border-slate-300 dark:border-slate-700 pt-3 mt-2">
                            <p class="font-bold text-slate-800 dark:text-white uppercase tracking-wider">Total Tagihan</p>
                            <p class="text-lg font-bold text-[var(--color-primary)]">${S(se)}</p>
                        </div>
                    </div>
                </div>
            </div>
        `,s.classList.contains("opacity-0")&&typeof window.pushModalHistory=="function"&&window.pushModalHistory("customerOrder"),s.classList.remove("opacity-0","pointer-events-none"),s.offsetWidth,requestAnimationFrame(()=>{const m=document.getElementById("order-detail-content");m&&(m.classList.remove("translate-y-full","sm:translate-y-10"),m.classList.add("translate-y-0","sm:translate-y-0"))})}catch(s){console.error("Error Render HTML Modal:",s),b("Gagal menampilkan detail. Coba lagi.")}},Gs=(e=!1)=>{const t=()=>{const a=document.getElementById("order-detail-modal"),s=document.getElementById("order-detail-content");s&&(s.classList.remove("translate-y-0","sm:translate-y-0"),s.classList.add("translate-y-full","sm:translate-y-10")),setTimeout(()=>{a&&a.classList.add("opacity-0","pointer-events-none")},300)};typeof window.requestCloseModal=="function"?window.requestCloseModal("customerOrder",e,t):t()};window.attachMyOrdersRealtime=_t;window.detachMyOrdersRealtime=Ft;window.renderMyOrders=Ee;window.checkOrderStatus=Os;window.trackOrderManual=Us;window.clearMyOrders=qs;window.openCustomerOrderDetail=Ze;window.renderOrderDetailModal=Bt;window.closeCustomerOrderDetailModal=Gs;window.reviewPhotoFile=null;window.reviewRating=0;const Ks=(e,t,a,s,o)=>{const r=decodeURIComponent(a||""),i=decodeURIComponent(s||""),n=decodeURIComponent(o||"");let d=document.getElementById("review-modal");d||(d=document.createElement("div"),d.id="review-modal",d.className="fixed inset-0 z-[120] bg-slate-900/80 flex items-end sm:items-center justify-center p-0 sm:p-5",d.onclick=p=>{p.target===d&&nt()},document.body.appendChild(d)),window.reviewPhotoFile=null,window.reviewRating=0,d.innerHTML=`
        <div class="bg-white dark:bg-slate-900 w-full max-w-lg rounded-t-3xl sm:rounded-2xl max-h-[85vh] flex flex-col shadow-2xl border border-slate-200 dark:border-slate-700">
            <div class="p-5 sm:p-6 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center shrink-0">
                <div class="min-w-0">
                    <h3 class="font-bold text-slate-800 dark:text-white text-base flex items-center gap-2"><i class="fa-solid fa-star text-amber-400"></i> Berikan Ulasan</h3>
                    <p class="text-[10px] font-bold text-slate-500 mt-0.5 uppercase tracking-widest truncate">${u(i)}</p>
                </div>
                <button onclick="closeReviewModal()" class="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 hover:bg-rose-100 hover:text-rose-500 flex items-center justify-center transition-all shrink-0"><i class="fa-solid fa-xmark"></i></button>
            </div>
            <div class="p-5 sm:p-6 overflow-y-auto flex-1 space-y-5">
                <div class="text-center">
                    <p class="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-3">Beri Bintang</p>
                    <div class="flex items-center justify-center gap-2" id="review-star-picker">
                        ${[1,2,3,4,5].map(p=>`<button type="button" onclick="setReviewRating(${p})" class="review-star text-3xl text-slate-300 dark:text-slate-600 transition-all hover:scale-110" data-star="${p}"><i class="fa-solid fa-star"></i></button>`).join("")}
                    </div>
                </div>
                <div>
                    <label class="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-widest">Ceritakan Pengalaman Anda</label>
                    <textarea id="review-text" rows="4" placeholder="Bagaimana kualitas produknya?" class="admin-input !py-3 bg-slate-50 dark:bg-slate-900 shadow-inner"></textarea>
                </div>
                <div>
                    <label class="block text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-widest">Unggah Foto (Opsional)</label>
                    <input type="file" accept="image/*" id="review-photo-input" onchange="handleReviewPhotoSelect(event)" class="hidden">
                    <div id="review-photo-preview-wrap" class="hidden mb-2.5 relative w-24 h-24">
                        <img id="review-photo-preview" class="w-24 h-24 rounded-xl object-cover border border-slate-200 dark:border-slate-700" loading="lazy">
                        <button type="button" onclick="removeReviewPhoto()" class="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-rose-500 text-white flex items-center justify-center text-[10px] shadow"><i class="fa-solid fa-xmark"></i></button>
                    </div>
                    <button type="button" onclick="document.getElementById('review-photo-input').click()" id="review-photo-btn" class="w-full py-3 rounded-xl border-2 border-dashed border-slate-300 dark:border-slate-700 text-slate-400 text-[11px] font-bold uppercase tracking-widest flex items-center justify-center gap-2 hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition-all"><i class="fa-solid fa-camera"></i> Tambah Foto Bukti</button>
                </div>
            </div>
            <div class="p-5 border-t border-slate-100 dark:border-slate-800 shrink-0">
                <button id="review-submit-btn" class="btn-primary py-3.5 text-sm shadow-glow !rounded-xl flex items-center justify-center gap-2"><i class="fa-solid fa-paper-plane"></i> Kirim Ulasan</button>
            </div>
        </div>`,l("review-submit-btn").onclick=()=>lt(e,t,r,i,n),d.style.opacity="0",d.style.display="flex",requestAnimationFrame(()=>{d.style.transition="opacity 0.25s ease",d.style.opacity="1"}),typeof window.pushModalHistory=="function"&&window.pushModalHistory("review")},Hs=e=>{window.reviewRating=e,document.querySelectorAll(".review-star").forEach(t=>{const a=parseInt(t.dataset.star);t.classList.toggle("text-amber-400",a<=e),t.classList.toggle("text-slate-300",a>e),t.classList.toggle("dark:text-slate-600",a>e)})},Vs=e=>{const t=e.target.files[0];if(!t)return;if(!t.type.startsWith("image/")){b("Hanya file gambar yang diizinkan!");return}if(t.size>5*1024*1024){b("Ukuran gambar max 5MB!");return}window.reviewPhotoFile=t;const a=new FileReader;a.onload=s=>{l("review-photo-preview").src=s.target.result,q("review-photo-preview-wrap"),T("review-photo-btn")},a.readAsDataURL(t)},Qs=()=>{window.reviewPhotoFile=null,T("review-photo-preview-wrap"),q("review-photo-btn");const e=l("review-photo-input");e&&(e.value="")},nt=(e=!1)=>{const t=document.getElementById("review-modal");if(!t||t.style.display==="none")return;const a=()=>{t.style.opacity="0",t.style.transition="opacity 0.25s ease",setTimeout(()=>{t.style.display="none",t.style.opacity="",t.style.transition=""},250)};if(typeof ee=="function")ee("review",e,a);else if(typeof window.requestCloseModal=="function")window.requestCloseModal("review",e,a);else{if(!e&&Te.length&&Te[Te.length-1]==="review"){Te.pop();try{history.back()}catch{}}a()}},lt=async(e,t,a,s,o)=>{if(!window.reviewRating||window.reviewRating<1)return b("Silakan beri bintang terlebih dahulu!");if(!tt){ie(!0),Z("Mengirim ulasan...");try{let r="";if(window.reviewPhotoFile&&typeof window.uploadBuktiToGDrive=="function"){const d=await window.uploadBuktiToGDrive(window.reviewPhotoFile,"review-"+e);d?r=d:b("Foto gagal diupload, ulasan tetap dikirim tanpa foto.")}const i=Date.now(),n={id:i,orderId:e||"",productId:t??0,variantName:a||"",productName:s||"",customerName:o||"Pelanggan",rating:window.reviewRating,text:_("review-text")||"",photoUrl:r||"",adminReply:"",isVisible:!0,createdAt:_e.firestore.FieldValue.serverTimestamp()};await D.collection("freshmart").doc("cms_data").collection("reviews").doc(i.toString()).set(n),Ye.delete(t),nt(),b("✅ Terima kasih atas ulasan Anda!"),typeof window.openCustomerOrderDetail=="function"&&window.openCustomerOrderDetail(e)}catch(r){console.error("Gagal mengirim ulasan:",r),b("Gagal mengirim ulasan: "+(r.message||"Error tidak diketahui"))}finally{ie(!1),I()}}},Ye=new Map,Ws=5*60*1e3,zs=async e=>{if(!l("product-modal-reviews-container"))return;const a=o=>{const r=o.length?o.reduce((p,h)=>p+(parseFloat(h.rating)||0),0)/o.length:0,i=p=>Array.from({length:5},(h,g)=>`<i class="fa-solid fa-star ${g<Math.round(p)?"text-amber-400":"text-slate-200 dark:text-slate-700"}"></i>`).join("");let n=`
            <div class="flex items-center justify-between mb-4">
                <h4 class="font-bold text-slate-800 dark:text-white text-sm flex items-center gap-2"><i class="fa-solid fa-comment-dots text-amber-400"></i> Ulasan Pelanggan</h4>
                ${o.length?`<div class="flex items-center gap-1.5"><span class="flex text-xs">${i(r)}</span><span class="text-xs font-bold text-slate-600 dark:text-slate-300">${r.toFixed(1)}</span><span class="text-[10px] font-bold text-slate-400">(${o.length})</span></div>`:""}
            </div>`;if(!o.length){N("product-modal-reviews-container",n+'<p class="text-[11px] font-bold text-slate-400 text-center py-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl">Belum ada ulasan untuk produk ini.</p>');return}const d=o.map(p=>{let h="";try{p.createdAt&&p.createdAt.toDate&&(h=p.createdAt.toDate().toLocaleDateString("id-ID",{day:"numeric",month:"short",year:"numeric"}))}catch{}return`
            <div class="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-2xl border border-slate-100 dark:border-slate-700/60">
                <div class="flex items-center justify-between mb-1.5">
                    <p class="text-xs font-bold text-slate-800 dark:text-white">${u(p.customerName||"Pelanggan")}</p>
                    <span class="text-[9px] font-bold text-slate-400">${h}</span>
                </div>
                <div class="flex text-[11px] mb-2">${i(p.rating)}</div>
                ${p.variantName?`<p class="text-[10px] font-bold text-slate-400 mb-1.5">Varian: ${u(p.variantName)}</p>`:""}
                ${p.text?`<p class="text-xs text-slate-600 dark:text-slate-300 mb-3">${u(p.text)}</p>`:""}
                ${p.photoUrl?`<div class="w-16 h-16 rounded-xl overflow-hidden mb-3 border border-slate-200 dark:border-slate-700"><img src="${u(p.photoUrl)}" class="w-full h-full object-cover cursor-pointer" onclick="window.open('${u(p.photoUrl)}','_blank')" alt="Foto ulasan"></div>`:""}
                ${p.adminReply?`
                <div class="mt-2.5 p-3 bg-[rgba(var(--color-primary-rgb),0.08)] dark:bg-[rgba(var(--color-primary-rgb),0.15)] border border-[rgba(var(--color-primary-rgb),0.2)] rounded-xl">
                    <p class="text-[10px] font-bold text-[var(--color-primary-dark)] dark:text-[var(--color-primary)] mb-1 flex items-center gap-1"><i class="fa-solid fa-reply"></i> Balasan Penjual</p>
                    <p class="text-xs text-slate-600 dark:text-slate-300">${u(p.adminReply)}</p>
                </div>`:""}
            </div>`}).join("");N("product-modal-reviews-container",n+`<div class="space-y-3">${d}</div>`)},s=Ye.get(e);if(s&&Date.now()-s.timestamp<Ws){a(s.data);return}N("product-modal-reviews-container",'<div class="text-center py-6"><i class="fa-solid fa-spinner fa-spin text-xl text-slate-300"></i></div>');try{let r=(await D.collection("freshmart").doc("cms_data").collection("reviews").where("productId","==",e).get()).docs.map(i=>i.data()).filter(i=>i.isVisible!==!1);r.sort((i,n)=>{const d=i.createdAt&&i.createdAt.toMillis?i.createdAt.toMillis():0;return(n.createdAt&&n.createdAt.toMillis?n.createdAt.toMillis():0)-d}),Ye.set(e,{data:r,timestamp:Date.now()}),a(r)}catch(o){console.warn("Gagal memuat ulasan:",o),N("product-modal-reviews-container",'<p class="text-[11px] text-slate-400 text-center py-4">Belum ada ulasan yang dapat dimuat.</p>')}};window.openReviewModal=Ks;window.setReviewRating=Hs;window.handleReviewPhotoSelect=Vs;window.removeReviewPhoto=Qs;window.closeReviewModal=nt;window.submitReview=lt;window.submitProductReview=lt;window.loadProductReviews=zs;let wt=null;const dt=()=>{if(!wt)try{wt=D.collection("freshmart").doc("cms_data").collection("faqs").onSnapshot(e=>{e&&e.docs&&(f.faqs=e.docs.map(t=>({id:t.id,...t.data()}))),typeof window.curViewName<"u"&&window.curViewName==="view-faq"&&$e(),window.isAdm&&typeof window.cTab<"u"&&window.cTab==="faqs"&&typeof window.rAdmFAQ=="function"&&window.rAdmFAQ()},e=>{console.warn("Sync sub-koleksi faqs dibatasi, menggunakan fallback cms_data.faqs:",e.message),typeof window.curViewName<"u"&&window.curViewName==="view-faq"&&$e(),window.isAdm&&typeof window.cTab<"u"&&window.cTab==="faqs"&&typeof window.rAdmFAQ=="function"&&window.rAdmFAQ()})}catch{console.warn("Fallback sync Q&A dari cms_data aktif")}};let Le="Semua";const $e=()=>{dt();const e=document.getElementById("storefront-faq-container"),t=document.getElementById("faq-category-pills");if(!e)return;const a=(f.faqs||[]).filter(i=>i.status==="published"),s=["Semua","Pemesanan","Pengiriman","Pembayaran","Garansi","Lainnya"];t&&(t.innerHTML=s.map(i=>`
            <button onclick="selectFAQCategory('${i}')" class="px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${Le===i?"primary-bg text-white shadow-md":"bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-slate-100"}">
                ${i}
            </button>
        `).join(""));const o=(document.getElementById("faq-search-input")?.value||"").toLowerCase().trim(),r=a.filter(i=>{const n=Le==="Semua"||i.category===Le,d=!o||(i.question||"").toLowerCase().includes(o)||(i.answer||"").toLowerCase().includes(o);return n&&d});if(!r.length){e.innerHTML=`
            <div class="text-center py-12 bg-white dark:bg-slate-800 rounded-3xl border border-slate-200 dark:border-slate-700 p-6 shadow-sm">
                <div class="w-16 h-16 rounded-full primary-bg-soft primary-text mx-auto flex items-center justify-center mb-3">
                    <i class="fa-solid fa-circle-question text-3xl"></i>
                </div>
                <h3 class="font-bold text-slate-800 dark:text-white text-base">Belum Ada Q&A Ditemukan</h3>
                <p class="text-xs text-slate-500 mt-1 max-w-sm mx-auto">Punya pertanyaan lain? Silakan gunakan tombol <b>Ajukan Pertanyaan</b> untuk bertanya ke admin.</p>
                <button onclick="openAskQuestionModal()" class="mt-4 primary-bg text-white px-5 py-2.5 rounded-xl text-xs font-bold shadow-md active:scale-95 transition-all">Ajukan Pertanyaan Sekarang</button>
            </div>
        `;return}e.innerHTML=r.map(i=>`
        <div class="bg-white dark:bg-slate-800/95 rounded-2xl border border-slate-200/80 dark:border-slate-700/80 shadow-soft transition-all duration-200 hover:shadow-md overflow-hidden">
            <button onclick="toggleFAQAccordion('${i.id}')" class="w-full p-4 sm:p-5 text-left flex items-start justify-between gap-3.5 hover:bg-slate-50/80 dark:hover:bg-slate-800/60 transition-colors">
                <div class="flex items-start gap-3.5 min-w-0">
                    <div class="w-9 h-9 rounded-xl primary-bg text-white flex items-center justify-center shrink-0 mt-0.5 shadow-sm"><i class="fa-solid fa-question text-xs font-bold"></i></div>
                    <div class="min-w-0">
                        <div class="flex flex-wrap items-center gap-2 mb-1.5">
                            <span class="text-[9px] font-bold uppercase tracking-wider primary-bg-soft primary-text primary-border px-2.5 py-0.5 rounded-lg border">${u(i.category||"Umum")}</span>
                            ${i.authorName?`<span class="text-[10px] font-medium text-slate-400">Oleh: ${u(i.authorName)}</span>`:""}
                        </div>
                        <h4 class="font-bold text-sm sm:text-base text-slate-900 dark:text-white leading-snug break-words">${u(i.question)}</h4>
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
                        <div class="text-slate-800 dark:text-slate-100 font-semibold leading-relaxed whitespace-pre-wrap break-words">${u(i.answer||"Belum ada jawaban.")}</div>
                    </div>
                </div>
            </div>
        </div>
    `).join("")},Js=e=>{Le=e,$e()},Zs=()=>{$e()},Ys=e=>{const t=document.getElementById(`faq-body-${e}`),a=document.getElementById(`faq-icon-${e}`);if(!t||!a)return;t.classList.contains("hidden")?(t.classList.remove("hidden"),a.classList.add("rotate-180")):(t.classList.add("hidden"),a.classList.remove("rotate-180"))},Xs=()=>{const e=l("modal-ask-question"),t=l("modal-ask-question-box");e&&(e.classList.contains("hidden")&&typeof window.pushModalHistory=="function"&&window.pushModalHistory("askQuestion"),he(e,t))},Nt=(e=!1)=>{const t=()=>{ve("modal-ask-question","modal-ask-question-box")};typeof window.requestCloseModal=="function"?window.requestCloseModal("askQuestion",e,t):t()},eo=async()=>{const e=(_("ask-author-name")||"").trim()||"Pelanggan",t=_("ask-category")||"Pemesanan",a=(_("ask-question-text")||"").trim();if(!a)return b("Tuliskan pertanyaan Anda terlebih dahulu!");Z("Mengirim pertanyaan...");const s="faq-"+Date.now().toString(36),o={id:s,question:a,answer:"",category:t,authorName:e,status:"pending_answer",createdAt:new Date().toISOString()};let r=!1;try{await D.collection("freshmart").doc("cms_data").collection("faqs").doc(s).set(o),r=!0}catch(i){console.warn("Penulisan sub-koleksi faqs dibatasi, mencoba fallback cms_data.faqs:",i)}if(!r)try{const i=[o,...(f.faqs||[]).filter(n=>n.id!==s)];await D.collection("freshmart").doc("cms_data").set({faqs:i},{merge:!0}),f.faqs=i,r=!0}catch(i){console.warn("Fallback cms_data.faqs juga gagal:",i)}I(),r?(Nt(),V("ask-question-text",""),b("Pertanyaan terkirim! Admin akan menjawabnya segera."),$e()):b("Gagal mengirim pertanyaan. Coba lagi!")};let De="all";const Ge=()=>{dt();const e=f.faqs||[],t=e.filter(o=>De==="pending"?o.status==="pending_answer":De==="published"?o.status==="published":!0),a=e.filter(o=>o.status==="pending_answer").length;let s=`
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
                <button onclick="setAdminFAQFilter('all')" class="shrink-0 px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${De==="all"?"primary-bg text-white shadow-md":"bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200"}">
                    Semua (${e.length})
                </button>
                <button onclick="setAdminFAQFilter('pending')" class="shrink-0 px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${De==="pending"?"primary-bg text-white shadow-md":"bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200"}">
                    <span>Belum Dijawab</span>
                    ${a>0?`<span class="bg-rose-500 text-white text-[9px] px-1.5 py-0.5 rounded-full font-bold">${a}</span>`:""}
                </button>
                <button onclick="setAdminFAQFilter('published')" class="shrink-0 px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${De==="published"?"primary-bg text-white shadow-md":"bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200"}">
                    Terpublikasi
                </button>
            </div>

            <!-- List Q&A Admin -->
            <div class="space-y-4">
                ${t.length?t.map(o=>`
                    <div class="bg-white dark:bg-slate-800 p-4 sm:p-5 rounded-2xl border ${o.status==="pending_answer"?"border-amber-300/80 bg-amber-50/20 dark:bg-amber-900/10":"border-slate-200/80 dark:border-slate-700/80"} shadow-sm space-y-3">
                        <div class="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 dark:border-slate-700/60 pb-2.5">
                            <div class="flex flex-wrap items-center gap-1.5 min-w-0">
                                <span class="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-lg ${o.status==="published"?"primary-bg-soft primary-text border primary-border":o.status==="pending_answer"?"bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400":"bg-slate-100 text-slate-600 dark:bg-slate-700 dark:text-slate-400"}">
                                    ${o.status==="published"?"Terpublikasi":o.status==="pending_answer"?"Menunggu Jawaban":"Disembunyikan"}
                                </span>
                                <span class="text-[9px] sm:text-[10px] font-bold text-slate-400 uppercase tracking-wider px-2 py-0.5 rounded-lg bg-slate-100 dark:bg-slate-700/50">${u(o.category||"Umum")}</span>
                                ${o.authorName?`<span class="text-[10px] text-slate-400 italic">Oleh: ${u(o.authorName)}</span>`:""}
                            </div>
                            <div class="flex items-center gap-1.5 shrink-0 ml-auto">
                                <button onclick="openFAQModal('${o.id}')" class="px-2.5 py-1.5 rounded-xl bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400 font-bold text-xs hover:bg-blue-100 transition-colors flex items-center gap-1 active:scale-95">
                                    <i class="fa-solid fa-pen-to-square"></i> Edit / Jawab
                                </button>
                                <button onclick="deleteAdminFAQ('${o.id}')" class="px-2.5 py-1.5 rounded-xl bg-rose-50 text-rose-600 dark:bg-rose-900/20 dark:text-rose-400 font-bold text-xs hover:bg-rose-100 transition-colors active:scale-95" title="Hapus Q&A">
                                    <i class="fa-solid fa-trash"></i>
                                </button>
                            </div>
                        </div>

                        <div>
                            <h3 class="font-bold text-sm sm:text-base text-slate-900 dark:text-white leading-snug break-words">${u(o.question)}</h3>
                        </div>

                        <div class="primary-bg-soft dark:bg-slate-900/60 p-3.5 sm:p-4 rounded-xl border primary-border text-xs font-medium text-slate-800 dark:text-slate-200">
                            <span class="font-extrabold primary-text uppercase text-[10px] tracking-wider flex items-center gap-1.5 mb-1">
                                <i class="fa-solid fa-user-shield text-[10px]"></i> Jawaban Admin Toko:
                            </span>
                            <div class="whitespace-pre-wrap leading-relaxed font-semibold break-words">${o.answer?u(o.answer):'<span class="text-rose-500 italic font-semibold">Belum dijawab. Klik "Edit / Jawab" untuk memberikan jawaban.</span>'}</div>
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
    `;setH("admin-content",s)},to=e=>{De=e,Ge()},ao=e=>{const t=(f.faqs||[]).find(o=>o.id===e)||{id:"",question:"",answer:"",category:"Pemesanan",authorName:"Admin",status:"published"};V("admin-faq-id",t.id),V("admin-faq-category",t.category||"Pemesanan"),V("admin-faq-author",t.authorName||"Admin"),V("admin-faq-question",t.question||""),V("admin-faq-answer",t.answer||""),V("admin-faq-status",t.status||"published"),L("admin-faq-modal-title",e?"Edit Q&A":"Tambah Q&A Baru");const a=l("modal-admin-faq"),s=l("modal-admin-faq-box");a&&(a.classList.contains("hidden")&&typeof window.pushModalHistory=="function"&&window.pushModalHistory("adminFAQ"),he(a,s))},jt=(e=!1)=>{const t=()=>{ve("modal-admin-faq","modal-admin-faq-box")};typeof window.requestCloseModal=="function"?window.requestCloseModal("adminFAQ",e,t):t()},so=async()=>{const e=_("admin-faq-id")||"faq-"+Date.now().toString(36),t=_("admin-faq-category"),a=(_("admin-faq-author")||"").trim()||"Admin",s=(_("admin-faq-question")||"").trim(),o=(_("admin-faq-answer")||"").trim();let r=_("admin-faq-status");if(!s)return b("Pertanyaan tidak boleh kosong!");o&&r==="pending_answer"&&(r="published"),Z("Menyimpan Q&A...");const i={id:e,question:s,answer:o,category:t,authorName:a,status:r,updatedAt:new Date().toISOString()};let n=[...f.faqs||[]];const d=n.findIndex(p=>p.id===e);d>-1?n[d]={...n[d],...i}:n.unshift(i),f.faqs=n;try{await D.collection("freshmart").doc("cms_data").collection("faqs").doc(e).set(i,{merge:!0})}catch(p){console.warn("Gagal set ke sub-koleksi faqs:",p)}try{await D.collection("freshmart").doc("cms_data").set({faqs:n},{merge:!0})}catch(p){console.warn("Gagal update cms_data.faqs:",p)}I(),jt(),b("Q&A Berhasil Disimpan!"),Ge()},oo=e=>{Tt("Hapus Q&A","Yakin ingin menghapus pertanyaan ini?",async()=>{Z("Menghapus Q&A...");let t=(f.faqs||[]).filter(a=>a.id!==e);f.faqs=t;try{await D.collection("freshmart").doc("cms_data").collection("faqs").doc(e).delete()}catch(a){console.warn("Gagal delete dari sub-koleksi faqs:",a)}try{await D.collection("freshmart").doc("cms_data").set({faqs:t},{merge:!0})}catch(a){console.warn("Gagal update cms_data.faqs:",a)}I(),b("Q&A Berhasil Dihapus!"),Ge()})};window.attachFAQRealtime=dt;window.renderStorefrontFAQ=$e;window.selectFAQCategory=Js;window.filterStorefrontFAQ=Zs;window.toggleFAQAccordion=Ys;window.openAskQuestionModal=Xs;window.closeAskQuestionModal=Nt;window.submitCustomerQuestion=eo;window.rAdmFAQ=Ge;window.setAdminFAQFilter=to;window.openFAQModal=ao;window.closeAdminFAQModal=jt;window.saveAdminFAQ=so;window.deleteAdminFAQ=oo;const ro="admgaffidigital/tokoputri",io=`https://api.github.com/repos/${ro}/releases/latest`,Xe="https://github.com/admgaffidigital/tokoputri/releases/latest/download/TokoPutri.apk";let Me=null,Ve=!1;const no=e=>!e||isNaN(e)?"8.0 MB":`${(e/(1024*1024)).toFixed(1)} MB`,lo=e=>{if(!e)return"Terbaru";try{return new Date(e).toLocaleDateString("id-ID",{day:"numeric",month:"short",year:"numeric"})}catch{return"Terbaru"}},co=async()=>{if(Me)return Me;if(Ve)return null;const e=ct(f)||"v1.8.7";Ve=!0;try{const t=await fetch(io,{headers:{Accept:"application/vnd.github.v3+json"},cache:"no-store"});if(t.ok){const a=await t.json(),s=a.assets?.find(n=>n.name?.toLowerCase().endsWith(".apk"))||a.assets?.[0],o=a.tag_name||e,r=Wt(o,e)>0,i=r?e:o;Me={tagName:i,name:`Toko Putri ${i}`,publishedAt:r?"19 Sep 2026":lo(a.published_at),fileSize:s?no(s.size):"8.0 MB",downloadUrl:s?.browser_download_url||Xe,notes:a.body||"",isLiveFetched:!0}}else throw new Error(`GitHub API HTTP ${t.status}`)}catch{const a=ct(f)||"v1.8.7";Me={tagName:a,name:`Toko Putri ${a}`,publishedAt:"19 Sep 2026",fileSize:"8.0 MB",downloadUrl:Xe,notes:"",isLiveFetched:!1}}finally{Ve=!1}return Me},po=()=>{let e=l("app-download-modal");return e||(e=document.createElement("div"),e.id="app-download-modal",e.className="fixed inset-0 z-[125] bg-slate-950/80 backdrop-blur-xs flex items-end sm:items-center justify-center p-0 sm:p-4 opacity-0 transition-opacity duration-300",e.onclick=t=>{t.target===e&&Ot()},e.innerHTML=`
    <div id="app-download-modal-box" class="relative w-full max-w-xl max-h-[92dvh] sm:max-h-[88dvh] bg-white dark:bg-[#0b1121] rounded-t-3xl sm:rounded-3xl border border-slate-200 dark:border-slate-800 flex flex-col overflow-hidden shadow-2xl transform translate-y-full sm:translate-y-8 transition-transform duration-300">
        
        <!-- Header Gaya Google Play Store -->
        <div class="px-4 sm:px-6 py-3.5 border-b border-slate-100 dark:border-slate-800/80 flex items-center justify-between shrink-0 bg-slate-50/70 dark:bg-[#0b1121]/90">
            <div class="flex items-center gap-2">
                <!-- Ikon Google Play Store Segitiga Vektor -->
                <div class="w-7 h-7 rounded-lg bg-slate-900 dark:bg-slate-800 flex items-center justify-center p-1 shadow-2xs">
                    <svg class="w-4 h-4" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M54.7 13.9C46.8 18.2 41.5 26.5 41.5 36.4V475.6C41.5 485.5 46.8 493.8 54.7 498.1L277.6 256L54.7 13.9Z" fill="#2196F3"/>
                        <path d="M352.3 181.3L277.6 256L352.3 330.7L436.4 282.8C454.1 272.8 454.1 239.2 436.4 229.2L352.3 181.3Z" fill="#FFC107"/>
                        <path d="M277.6 256L54.7 498.1C61.4 501.7 69.5 502.2 77.2 497.8L352.3 330.7L277.6 256Z" fill="#4CAF50"/>
                        <path d="M277.6 256L352.3 181.3L77.2 14.2C69.5 9.8 61.4 10.3 54.7 13.9L277.6 256Z" fill="#F44336"/>
                    </svg>
                </div>
                <div>
                    <div class="flex items-center gap-1.5">
                        <span class="text-xs font-black tracking-tight text-slate-800 dark:text-white uppercase">Google Play</span>
                        <span class="text-[9px] font-bold text-slate-400 dark:text-slate-500">• Storefront Resmi</span>
                    </div>
                </div>
            </div>

            <div class="flex items-center gap-2">
                <!-- Badge Play Protect -->
                <div class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200/80 dark:border-emerald-800/60 text-[10px] font-extrabold text-emerald-700 dark:text-emerald-300 shadow-2xs">
                    <i class="fa-solid fa-shield-halved text-emerald-500"></i>
                    <span>Play Protect</span>
                </div>
                <!-- Tombol Tutup -->
                <button type="button" onclick="closeAppDownloadModal()" class="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-white flex items-center justify-center transition-all cursor-pointer" aria-label="Tutup">
                    <i class="fa-solid fa-xmark text-sm"></i>
                </button>
            </div>
        </div>

        <!-- Scrollable Modal Body -->
        <div class="p-4 sm:p-6 overflow-y-auto flex-1 hide-scrollbar space-y-5">
            
            <!-- Kartu Identitas Aplikasi (Play Store Layout) -->
            <div class="flex items-start gap-4">
                <!-- App Icon HD -->
                <div class="relative w-20 h-20 sm:w-22 sm:h-22 rounded-2xl sm:rounded-3xl bg-[#0f172a] p-1 shadow-lg ring-1 ring-slate-200 dark:ring-slate-700 shrink-0 overflow-hidden flex items-center justify-center">
                    <img src="/official_logo.png" alt="Logo Resmi Toko Putri" class="w-full h-full object-contain p-0.5" onerror="this.src='/logo.png'">
                    <span class="absolute bottom-1 right-1 w-3.5 h-3.5 bg-emerald-500 border-2 border-white dark:border-slate-900 rounded-full" title="Status: Online & Ready"></span>
                </div>

                <!-- Info Nama & Developer -->
                <div class="flex-1 min-w-0">
                    <div class="flex items-center gap-2 flex-wrap">
                        <h2 class="text-base sm:text-lg font-black text-slate-900 dark:text-white tracking-tight leading-tight">
                            Toko Putri
                        </h2>
                        <span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-800/60 text-[9px] font-black uppercase tracking-wider">
                            <i class="fa-solid fa-crown text-[8px]"></i> Pilihan Kasir
                        </span>
                    </div>
                    <p class="text-xs font-bold text-emerald-600 dark:text-emerald-400 mt-0.5">
                        Adm Gaffi Digital • Official Partner
                    </p>
                    <p class="text-[11px] font-semibold text-slate-500 dark:text-slate-400 mt-1 line-clamp-2 leading-relaxed">
                        Aplikasi resmi kasir, katalog grosir teknik, cetak struk POS, dan belanja online Toko Putri.
                    </p>
                </div>
            </div>

            <!-- Strip Metrik Google Play Store (4 Kolom Interaktif) -->
            <div class="grid grid-cols-4 gap-2 py-3 px-2 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800 text-center">
                <!-- Rating -->
                <div class="flex flex-col items-center justify-center">
                    <div class="flex items-center gap-1 text-slate-900 dark:text-white text-xs sm:text-sm font-black">
                        <span>4.9</span>
                        <i class="fa-solid fa-star text-[10px] text-amber-400"></i>
                    </div>
                    <span class="text-[9px] font-semibold text-slate-400 dark:text-slate-500 mt-0.5">1.2 rb ulasan</span>
                </div>
                <!-- Unduhan -->
                <div class="flex flex-col items-center justify-center border-l border-slate-200 dark:border-slate-800">
                    <div class="flex items-center gap-1 text-slate-900 dark:text-white text-xs sm:text-sm font-black">
                        <span>10 rb+</span>
                    </div>
                    <span class="text-[9px] font-semibold text-slate-400 dark:text-slate-500 mt-0.5">Unduhan</span>
                </div>
                <!-- Ukuran APK -->
                <div class="flex flex-col items-center justify-center border-l border-slate-200 dark:border-slate-800">
                    <div class="flex items-center gap-1 text-slate-900 dark:text-white text-xs sm:text-sm font-black" id="app-modal-filesize">
                        <span>8.0 MB</span>
                    </div>
                    <span class="text-[9px] font-semibold text-slate-400 dark:text-slate-500 mt-0.5">Ukuran APK</span>
                </div>
                <!-- Rating Konten -->
                <div class="flex flex-col items-center justify-center border-l border-slate-200 dark:border-slate-800">
                    <div class="inline-flex items-center justify-center w-5 h-5 rounded border border-slate-400 dark:border-slate-600 text-[10px] font-black text-slate-700 dark:text-slate-300">
                        3+
                    </div>
                    <span class="text-[9px] font-semibold text-slate-400 dark:text-slate-500 mt-0.5">Semua Umur</span>
                </div>
            </div>

            <!-- Tombol CTA Utama Gaya Google Play Store (Hijau Emerald Signature) -->
            <div class="space-y-2">
                <button id="btn-download-apk-action" onclick="downloadLatestApk()" class="w-full py-3.5 px-6 rounded-2xl bg-[#01875f] hover:bg-[#01704f] active:scale-[0.98] text-white font-extrabold text-sm sm:text-base flex items-center justify-center gap-3 shadow-lg shadow-emerald-600/25 transition-all cursor-pointer group">
                    <i class="fa-solid fa-download group-hover:translate-y-0.5 transition-transform" id="btn-download-apk-icon"></i>
                    <span id="btn-download-apk-text">Unduh &amp; Pasang APK (<span id="app-modal-version-tag">v1.8.7</span>)</span>
                </button>
                <div class="flex items-center justify-between px-1 text-[10px] font-bold text-slate-400 dark:text-slate-500">
                    <span class="flex items-center gap-1.5">
                        <i class="fa-brands fa-android text-emerald-500 text-xs"></i>
                        <span>Kompatibel: Android 7.0 (Nougat) s/d Android 15</span>
                    </span>
                    <span id="app-modal-published-date" class="hidden sm:inline">Rilis: 19 Sep 2026</span>
                </div>
            </div>

            <!-- Kartu QR Code untuk Pengguna Desktop / Laptop -->
            <div id="app-desktop-qr-card" class="p-4 rounded-2xl bg-gradient-to-br from-slate-50 to-emerald-50/40 dark:from-slate-900/60 dark:to-emerald-950/20 border border-emerald-200/60 dark:border-emerald-800/40 flex flex-col sm:flex-row items-center gap-4">
                <div class="w-28 h-28 bg-white p-2 rounded-xl shadow-md border border-slate-200/80 dark:border-slate-700 shrink-0 flex items-center justify-center">
                    <img id="app-download-qr-img" src="https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=https%3A%2F%2Fgithub.com%2Fadmgaffidigital%2Ftokoputri%2Freleases%2Flatest%2Fdownload%2FTokoPutri.apk" alt="QR Code Unduh APK" class="w-full h-full object-contain" loading="lazy">
                </div>
                <div class="flex-1 text-center sm:text-left">
                    <div class="flex items-center justify-center sm:justify-start gap-1.5 text-xs font-black text-slate-800 dark:text-white">
                        <i class="fa-solid fa-qrcode text-emerald-600 dark:text-emerald-400"></i>
                        <span>Scan untuk Unduh di Ponsel</span>
                    </div>
                    <p class="text-[11px] font-semibold text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                        Buka kamera HP Android Anda dan arahkan ke kode QR ini untuk mengunduh langsung ke ponsel tanpa perlu memindahkan file dari komputer.
                    </p>
                    <div class="mt-2 inline-flex items-center gap-2 text-[10px] font-bold text-emerald-700 dark:text-emerald-300">
                        <i class="fa-solid fa-bolt-lightning text-amber-500"></i>
                        <span>Tautan Otomatis Selalu Versi Terkini</span>
                    </div>
                </div>
            </div>

            <!-- Apa yang Baru (Highlights Changelog v1.8.7) -->
            <div class="space-y-2.5">
                <div class="flex items-center justify-between">
                    <h3 class="text-xs sm:text-sm font-black text-slate-900 dark:text-white flex items-center gap-2">
                        <i class="fa-solid fa-sparkles text-amber-500"></i>
                        <span>Apa yang Baru</span>
                    </h3>
                    <button type="button" onclick="closeAppDownloadModal(); if(typeof window.openChangelogModal==='function') window.openChangelogModal();" class="text-[10px] font-bold text-[var(--color-primary)] hover:underline cursor-pointer">
                        Lihat Semua Riwayat
                    </button>
                </div>

                <div class="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800 space-y-2 text-xs">
                    <div class="flex items-start gap-2.5 text-slate-700 dark:text-slate-300">
                        <i class="fa-solid fa-circle-check text-emerald-500 mt-0.5 text-[11px] shrink-0"></i>
                        <span class="font-medium text-[11px] leading-relaxed">
                            <b>Pemisahan Pelanggan Umum &amp; Member Resmi:</b> Nomor HP baru berstatus Pelanggan Umum, wajib verifikasi database Admin CMS untuk hak member.
                        </span>
                    </div>
                    <div class="flex items-start gap-2.5 text-slate-700 dark:text-slate-300">
                        <i class="fa-solid fa-circle-check text-emerald-500 mt-0.5 text-[11px] shrink-0"></i>
                        <span class="font-medium text-[11px] leading-relaxed">
                            <b>Proteksi Cash Tempo &amp; Loyalty Points:</b> Opsi tempo disembunyikan dan saldo poin belanja dilindungi khusus untuk member terverifikasi.
                        </span>
                    </div>
                    <div class="flex items-start gap-2.5 text-slate-700 dark:text-slate-300">
                        <i class="fa-solid fa-circle-check text-emerald-500 mt-0.5 text-[11px] shrink-0"></i>
                        <span class="font-medium text-[11px] leading-relaxed">
                            <b>Konfirmasi Member 1-Klik di CMS Admin:</b> Admin toko dapat mendaftarkan nomor pelanggan menjadi member langsung dari detail pesanan.
                        </span>
                    </div>
                    <div class="flex items-start gap-2.5 text-slate-700 dark:text-slate-300">
                        <i class="fa-solid fa-circle-check text-emerald-500 mt-0.5 text-[11px] shrink-0"></i>
                        <span class="font-medium text-[11px] leading-relaxed">
                            <b>Koneksi Universal POS Printer:</b> Mendukung printer kasir Bluetooth thermal 58mm/80mm, USB OTG, LAN/WiFi, &amp; RawBT.
                        </span>
                    </div>
                </div>
            </div>

            <!-- 3 Langkah Mudah Instalasi APK -->
            <div class="space-y-2">
                <h3 class="text-xs sm:text-sm font-black text-slate-900 dark:text-white flex items-center gap-2">
                    <i class="fa-solid fa-circle-info text-blue-500"></i>
                    <span>Cara Pasang Aplikasi (APK) di Android</span>
                </h3>
                <div class="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                    <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800">
                        <div class="w-6 h-6 rounded-lg bg-blue-500 text-white text-[11px] font-black flex items-center justify-center mb-1.5">1</div>
                        <h4 class="text-[11px] font-bold text-slate-800 dark:text-white">Unduh APK</h4>
                        <p class="text-[10px] text-slate-500 dark:text-slate-400 mt-0.5 leading-tight">Ketuk tombol hijau di atas untuk mengunduh TokoPutri.apk.</p>
                    </div>
                    <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800">
                        <div class="w-6 h-6 rounded-lg bg-blue-500 text-white text-[11px] font-black flex items-center justify-center mb-1.5">2</div>
                        <h4 class="text-[11px] font-bold text-slate-800 dark:text-white">Buka File</h4>
                        <p class="text-[10px] text-slate-500 dark:text-slate-400 mt-0.5 leading-tight">Ketuk notifikasi unduhan selesai di HP Anda.</p>
                    </div>
                    <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800">
                        <div class="w-6 h-6 rounded-lg bg-blue-500 text-white text-[11px] font-black flex items-center justify-center mb-1.5">3</div>
                        <h4 class="text-[11px] font-bold text-slate-800 dark:text-white">Izinkan & Pasang</h4>
                        <p class="text-[10px] text-slate-500 dark:text-slate-400 mt-0.5 leading-tight">Pilih 'Tetap Pasang' jika muncul peringatan sumber tidak dikenal.</p>
                    </div>
                </div>
            </div>

            <!-- Jaminan Keamanan & Privasi -->
            <div class="p-3 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center gap-3">
                <i class="fa-solid fa-certificate text-emerald-500 text-xl shrink-0"></i>
                <div class="text-[10px] sm:text-[11px] font-semibold text-emerald-900 dark:text-emerald-200">
                    <span class="font-extrabold">100% Bebas Malware &amp; Iklan:</span> File APK ini dikompilasi secara otomatis langsung dari repository resmi GitHub Toko Putri menggunakan GitHub Actions.
                </div>
            </div>

        </div>

        <!-- Footer Modal -->
        <div class="p-3.5 sm:p-4 border-t border-slate-100 dark:border-slate-800/80 bg-slate-50/80 dark:bg-[#0b1121]/90 flex items-center justify-between shrink-0">
            <div class="flex items-center gap-2 text-[10px] font-bold text-slate-400 dark:text-slate-500">
                <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>Server Rilis: GitHub CDN Aktif</span>
            </div>
            <button type="button" onclick="closeAppDownloadModal()" class="px-5 py-2 rounded-xl bg-slate-200 hover:bg-slate-300 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs font-bold uppercase tracking-wider transition-all cursor-pointer">
                Tutup
            </button>
        </div>
    </div>`,document.body.appendChild(e),e)},mo=async()=>{const e=po();if(!e)return;be("appDownload"),e.style.display="flex",e.offsetWidth,requestAnimationFrame(()=>{e.classList.remove("opacity-0");const a=l("app-download-modal-box");a&&a.classList.remove("translate-y-full","sm:translate-y-8")}),typeof window.triggerHaptic=="function"&&window.triggerHaptic("light");const t=await co();if(t){const a=l("app-modal-version-tag"),s=l("app-modal-filesize"),o=l("app-modal-published-date");a&&(a.textContent=t.tagName),s&&(s.innerHTML=`<span>${u(t.fileSize)}</span>`),o&&(o.textContent=`Rilis: ${u(t.publishedAt)}`)}},Ot=(e=!1)=>{const t=l("app-download-modal");!t||t.style.display==="none"||ee("appDownload",e,()=>{t.classList.add("opacity-0");const a=l("app-download-modal-box");a&&a.classList.add("translate-y-full","sm:translate-y-8"),setTimeout(()=>{t.style.display="none"},300)})},uo=()=>{const e=l("btn-download-apk-action"),t=l("btn-download-apk-icon"),a=l("btn-download-apk-text");e&&e.classList.add("opacity-80","pointer-events-none"),t&&(t.className="fa-solid fa-spinner fa-spin"),a&&(a.textContent="Menghubungkan ke Server Rilis..."),typeof window.triggerHaptic=="function"&&window.triggerHaptic("medium"),typeof window.showToast=="function"&&window.showToast("Memulai unduhan TokoPutri.apk terbaru. Cek panel notifikasi HP Anda!");const s=Me?.downloadUrl||Xe,o=document.createElement("a");o.href=s,o.setAttribute("download","TokoPutri.apk"),o.target="_blank",o.rel="noopener noreferrer",document.body.appendChild(o),o.click(),document.body.removeChild(o),setTimeout(()=>{if(e&&e.classList.remove("opacity-80","pointer-events-none"),t&&(t.className="fa-solid fa-circle-check text-white"),a){const r=Me?.tagName||"v1.8.7";a.textContent=`Unduh Ulang APK (${r})`}},2500)};window.openAppDownloadModal=mo;window.closeAppDownloadModal=Ot;window.downloadLatestApk=uo;const Ke="B7qgwFQqtYLpBqdaK69HgtCfR7s5t67p",fo=20*1024*1024,bo=["video/mp4","video/webm","video/quicktime","video/x-msvideo","video/3gpp"],Ut=["image/jpeg","image/png","image/webp","image/gif"],wo=async(e,t,a=null)=>{const s=e.files[0];if(!s)return;if(!Ut.includes(s.type))return e.value="",b("Hanya file JPG, PNG, WEBP, atau GIF yang diizinkan!");if(s.size>3*1024*1024)return e.value="",b("Maksimal gambar 3MB!");const o=window.GAS_UPLOAD_URL||Oe;if(o.includes("ISI_DENGAN"))return e.value="",b("URL Script Google belum diisi!");Z("Upload Gambar...");const r=new FileReader;r.readAsDataURL(s),r.onload=async()=>{try{const i=r.result.split(",")[1],n=s.name.replace(/[^a-zA-Z0-9.]/g,"_"),d={name:"POS_"+Date.now()+"_"+n,mimeType:s.type,data:i,token:Ke},h=await(await fetch(o,{method:"POST",body:JSON.stringify(d),headers:{"Content-Type":"text/plain;charset=utf-8"},redirect:"follow"})).text();let g;try{g=JSON.parse(h)}catch{return b("Error Server!")}if(g.status==="success"){const y=je(g.url),k=l(t);k&&(k.value=y,k.dispatchEvent(new Event("input",{bubbles:!0})),k.dispatchEvent(new Event("change",{bubbles:!0})),a!==null&&typeof window.uVar=="function"&&window.uVar(a,"img",y),b("Gambar diupload!"))}else b("Gagal: "+(g.message||"Error"))}catch{b("Koneksi terputus saat upload.")}finally{I(),e.value=""}},r.onerror=()=>{b("Gagal membaca file!"),I(),e.value=""}},go=async(e,t)=>{const a=e.files[0];if(!a)return;if(!bo.includes(a.type))return e.value="",b("Hanya file MP4, WEBM, MOV, atau AVI yang diizinkan!");if(a.size>fo)return e.value="",b("Video terlalu besar! Maksimal 20MB.");const s=window.GAS_UPLOAD_URL||Oe;if(s.includes("ISI_DENGAN"))return e.value="",b("URL Script Google belum diisi di Pengaturan!");Z("Upload Video... (harap tunggu)");const o=new FileReader;o.readAsDataURL(a),o.onload=async()=>{try{const r=o.result.split(",")[1],i=a.name.replace(/[^a-zA-Z0-9.]/g,"_"),n={name:"VID_"+Date.now()+"_"+i,mimeType:a.type,data:r,token:Ke},p=await(await fetch(s,{method:"POST",body:JSON.stringify(n),headers:{"Content-Type":"text/plain;charset=utf-8"},redirect:"follow"})).text();let h;try{h=JSON.parse(p)}catch{return b("Error Server GAS!")}if(h.status==="success"){const g="https://drive.google.com/file/d/"+h.fileId+"/preview",y=l(t);y&&(y.value=g,y.dispatchEvent(new Event("input",{bubbles:!0})),y.dispatchEvent(new Event("change",{bubbles:!0})),b("Video berhasil diupload ke Drive!"))}else b("Gagal upload: "+(h.message||"Error"))}catch{b("Koneksi terputus saat upload video.")}finally{I(),e.value=""}},o.onerror=()=>{b("Gagal membaca file video!"),I(),e.value=""}},xo=async(e,t)=>{const a=e.files[0];if(!a)return;if(!Ut.includes(a.type))return e.value="",b("Hanya file JPG, PNG, WEBP, atau GIF yang diizinkan!");if(a.size>3*1024*1024)return e.value="",b("Maksimal gambar 3MB!");const s=window.GAS_UPLOAD_URL||Oe;if(s.includes("ISI_DENGAN"))return e.value="",b("URL Script Google belum diisi!");Z("Menyisipkan Gambar...");const o=new FileReader;o.readAsDataURL(a),o.onload=async()=>{try{const r=o.result.split(",")[1],i=a.name.replace(/[^a-zA-Z0-9.]/g,"_"),n={name:"RTE_"+Date.now()+"_"+i,mimeType:a.type,data:r,token:Ke},p=await(await fetch(s,{method:"POST",body:JSON.stringify(n),headers:{"Content-Type":"text/plain;charset=utf-8"},redirect:"follow"})).text();let h;try{h=JSON.parse(p)}catch{return b("Error Server!")}if(h.status==="success"){const g=je(h.url),y=l(t);y&&(y.focus(),document.execCommand("insertHTML",!1,`<br><img loading="lazy" src="${g}" style="max-width:100%; border-radius:12px; margin: 10px 0; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);" ><br>`)),b("Gambar berhasil disisipkan!")}else b("Gagal upload gambar.")}catch{b("Gagal koneksi.")}finally{I(),e.value=""}},o.onerror=()=>{b("Gagal membaca file!"),I(),e.value=""}};window.GAS_SECRET_TOKEN=Ke;window.handleImageUpload=wo;window.handleVideoUpload=go;window.handleRTEditorImage=xo;window.setCat=e=>{At(e),st(1),typeof window.rCat=="function"&&window.rCat()};window.setBrand=e=>{St(e),st(1),typeof window.rCat=="function"&&window.rCat()};const ho=()=>{let e="",t=ze==="Semua Produk";e+=`
    <button onclick="setCat('Semua Produk'); closeCategoryModal()" class="w-full flex items-center gap-3.5 p-3 sm:p-3.5 rounded-2xl border transition-all active:scale-[0.98] ${t?"bg-[rgba(var(--color-primary-rgb),0.08)] border-[var(--color-primary)] dark:bg-[rgba(var(--color-primary-rgb),0.12)] dark:border-[var(--color-primary)] shadow-[0_0_0_1px_rgba(var(--color-primary-rgb),0.2)]":"bg-slate-50 border-slate-200 dark:bg-slate-800/50 dark:border-slate-700 hover:border-[var(--color-primary)]/40 dark:hover:border-[var(--color-primary)]/40"} group">
        <div class="w-11 h-11 sm:w-12 sm:h-12 rounded-xl ${t?"bg-[var(--color-primary)] text-white border-none":"bg-white text-slate-400 border border-slate-200 dark:border-slate-600 group-hover:text-[var(--color-primary)]"} flex items-center justify-center shadow-sm shrink-0 overflow-hidden transition-colors">
            <i class="fa-solid fa-layer-group text-base sm:text-lg"></i>
        </div>
        <span class="text-xs sm:text-sm font-bold uppercase tracking-widest text-left flex-1 ${t?"text-[var(--color-primary)]":"text-slate-600 dark:text-slate-300"}">SEMUA</span>
        <i class="fa-solid fa-circle-check text-base ${t?"text-[var(--color-primary)]":"text-slate-300 dark:text-slate-600"}"></i>
    </button>`,f.categories.forEach(r=>{let i=ze===r.name,n=r.img?`<img loading="lazy" src="${u(r.img)}" alt="${u(r.name)}" class="w-full h-full object-cover" onerror="this.onerror=null;this.src='https://placehold.co/100?text=Cat'">`:'<i class="fa-solid fa-box text-base sm:text-lg"></i>';e+=`
        <button onclick="setCat('${u(r.name)}'); closeCategoryModal()" class="w-full flex items-center gap-3.5 p-3 sm:p-3.5 rounded-2xl border transition-all active:scale-[0.98] ${i?"bg-[rgba(var(--color-primary-rgb),0.08)] border-[var(--color-primary)] dark:bg-[rgba(var(--color-primary-rgb),0.12)] dark:border-[var(--color-primary)] shadow-[0_0_0_1px_rgba(var(--color-primary-rgb),0.2)]":"bg-slate-50 border-slate-200 dark:bg-slate-800/50 dark:border-slate-700 hover:border-[var(--color-primary)]/40 dark:hover:border-[var(--color-primary)]/40"} group">
            <div class="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-white dark:bg-slate-800 flex items-center justify-center shadow-sm shrink-0 text-slate-400 group-hover:text-[var(--color-primary)] overflow-hidden border border-slate-200 dark:border-slate-600">
                ${n}
            </div>
            <span class="text-xs sm:text-sm font-bold uppercase tracking-widest text-left flex-1 line-clamp-1 ${i?"text-[var(--color-primary)]":"text-slate-600 dark:text-slate-300"}">${u(r.name)}</span>
            <i class="fa-solid fa-circle-check text-base ${i?"text-[var(--color-primary)]":"text-slate-300 dark:text-slate-600"}"></i>
        </button>`});const a=l("modal-category-list");a&&(a.innerHTML=`<div class="flex flex-col gap-2.5 pb-6 w-full">${e}</div>`);const s=l("category-modal"),o=l("category-modal-content");s&&o&&(s.classList.contains("hidden")&&be("category"),he(s,o))};window.openCategoryModal=ho;window.openBrandModal=()=>{let e="",t=We==="Semua Merek";e+=`
    <button onclick="setBrand('Semua Merek'); closeBrandModal()" class="flex flex-col items-center justify-start p-2.5 sm:p-3.5 rounded-2xl border transition-all ${t?"bg-[rgba(var(--color-primary-rgb),0.08)] border-[var(--color-primary)] dark:bg-[rgba(var(--color-primary-rgb),0.12)] dark:border-[var(--color-primary)] shadow-[0_0_0_1px_rgba(var(--color-primary-rgb),0.2)]":"bg-slate-50 border-slate-200 dark:bg-slate-800/50 dark:border-slate-700 hover:border-[var(--color-primary)]/40 dark:hover:border-[var(--color-primary)]/40"} group">
        <div class="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl ${t?"bg-[var(--color-primary)] text-white border-none":"bg-white text-slate-400 border border-slate-200 dark:border-slate-600 group-hover:text-[var(--color-primary)]"} flex items-center justify-center shadow-sm mb-2.5 transition-colors shrink-0">
            <i class="fa-solid fa-copyright text-lg sm:text-xl"></i>
        </div>
        <span class="text-[9px] font-bold uppercase tracking-widest text-center leading-tight line-clamp-2 w-full break-words ${t?"text-[var(--color-primary)]":"text-slate-600 dark:text-slate-300"}">SEMUA MEREK</span>
    </button>`,f.brands.forEach(r=>{let i=We===r.name,n=r.img?`<img loading="lazy" src="${u(r.img)}" alt="${u(r.name)}" class="w-full h-full object-contain p-1.5" >`:'<i class="fa-solid fa-tag text-lg sm:text-xl"></i>';e+=`
        <button onclick="setBrand('${u(r.name)}'); closeBrandModal()" class="flex flex-col items-center justify-start p-2.5 sm:p-3.5 rounded-2xl border transition-all ${i?"bg-[rgba(var(--color-primary-rgb),0.08)] border-[var(--color-primary)] dark:bg-[rgba(var(--color-primary-rgb),0.12)] dark:border-[var(--color-primary)] shadow-[0_0_0_1px_rgba(var(--color-primary-rgb),0.2)]":"bg-slate-50 border-slate-200 dark:bg-slate-800/50 dark:border-slate-700 hover:border-[var(--color-primary)]/40 dark:hover:border-[var(--color-primary)]/40"} group">
            <div class="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white flex items-center justify-center shadow-sm mb-2.5 text-slate-400 group-hover:text-[var(--color-primary)] overflow-hidden shrink-0 border border-slate-200 dark:border-slate-600">
                ${n}
            </div>
            <span class="text-[9px] font-bold uppercase tracking-widest text-center leading-tight line-clamp-2 w-full break-words ${i?"text-[var(--color-primary)]":"text-slate-600 dark:text-slate-300"}">${u(r.name)}</span>
        </button>`});const a=l("modal-brand-grid");a&&(a.innerHTML=e);const s=l("brand-modal"),o=l("brand-modal-content");s&&o&&(s.classList.contains("hidden")&&be("brand"),he(s,o))};window.closeCategoryModal=(e=!1)=>{const t=l("category-modal"),a=l("category-modal-content");t&&a&&ee("category",e,()=>{ve(t,a)})};window.closeBrandModal=(e=!1)=>{const t=l("brand-modal"),a=l("brand-modal-content");t&&a&&ee("brand",e,()=>{ve(t,a)})};window.openQuickMenuModal=()=>{const e=l("quickmenu-modal"),t=l("quickmenu-modal-content");e&&t&&(e.classList.contains("hidden")&&be("quickmenu"),he(e,t))};window.openTermsModal=()=>{const e=`
      <div class="space-y-3">
        <div class="p-3.5 rounded-2xl bg-[rgba(var(--color-primary-rgb),0.06)] border border-[rgba(var(--color-primary-rgb),0.2)] flex items-start gap-3">
          <i class="fa-solid fa-file-shield text-[var(--color-primary)] text-base shrink-0 mt-0.5"></i>
          <p class="text-xs leading-relaxed text-slate-700 dark:text-slate-200 font-medium">
            Dengan mengakses dan bertransaksi di website <b>Toko Putri</b>, Anda menyetujui seluruh syarat dan ketentuan layanan yang berlaku berikut ini:
          </p>
        </div>

        <div class="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-800/40 space-y-2">
          <div class="flex items-center gap-2.5">
            <span class="w-6 h-6 rounded-lg primary-bg text-white text-xs font-black flex items-center justify-center shrink-0">1</span>
            <h4 class="font-bold text-slate-800 dark:text-white text-sm">Ketentuan Umum</h4>
          </div>
          <p class="text-xs leading-relaxed pl-8 text-slate-600 dark:text-slate-300">
            Layanan website Toko Putri diperuntukkan bagi pelanggan yang ingin memesan perkakas, alat teknik, dan perlengkapan pertukangan secara online.
          </p>
        </div>

        <div class="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-800/40 space-y-2">
          <div class="flex items-center gap-2.5">
            <span class="w-6 h-6 rounded-lg primary-bg text-white text-xs font-black flex items-center justify-center shrink-0">2</span>
            <h4 class="font-bold text-slate-800 dark:text-white text-sm">Pemesanan &amp; Hubungi Admin</h4>
          </div>
          <p class="text-xs leading-relaxed pl-8 text-slate-600 dark:text-slate-300">
            Setiap pesanan yang dibuat melalui keranjang belanja akan diteruskan secara otomatis ke nomor WhatsApp admin untuk konfirmasi akhir dan pengiriman.
          </p>
        </div>

        <div class="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-800/40 space-y-2">
          <div class="flex items-center gap-2.5">
            <span class="w-6 h-6 rounded-lg primary-bg text-white text-xs font-black flex items-center justify-center shrink-0">3</span>
            <h4 class="font-bold text-slate-800 dark:text-white text-sm">Kebijakan Pembayaran</h4>
          </div>
          <p class="text-xs leading-relaxed pl-8 text-slate-600 dark:text-slate-300">
            Kami mendukung pembayaran Tunai (Cash), COD, Transfer Bank, QRIS, dan sistem Tempo (Kredit) untuk pelanggan dengan limit piutang aktif.
          </p>
        </div>

        <div class="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-800/40 space-y-2">
          <div class="flex items-center gap-2.5">
            <span class="w-6 h-6 rounded-lg primary-bg text-white text-xs font-black flex items-center justify-center shrink-0">4</span>
            <h4 class="font-bold text-slate-800 dark:text-white text-sm">Kebijakan Retur &amp; Barang PO</h4>
          </div>
          <p class="text-xs leading-relaxed pl-8 text-slate-600 dark:text-slate-300">
            Barang Pre-Order (PO) dikirim sesuai estimasi. Khusus produk cat bangunan yang dicampur (tinting) tidak dapat dibatalkan atau diretur.
          </p>
        </div>
      </div>
    `,t=f?.store?.terms,a=t?t.includes("<")?t:`<div class="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-800/40 leading-relaxed text-xs sm:text-sm text-slate-600 dark:text-slate-300 whitespace-pre-line">${t}</div>`:e;N("terms-modal-content-body",a);const s=l("terms-modal"),o=l("terms-modal-content");s&&o&&(s.classList.contains("hidden")&&be("terms"),he(s,o))};window.closeTermsModal=(e=!1)=>{const t=l("terms-modal"),a=l("terms-modal-content");t&&a&&ee("terms",e,()=>{ve(t,a)})};window.openPrivacyModal=()=>{const e=`
      <div class="space-y-3">
        <div class="p-3.5 rounded-2xl bg-[rgba(var(--color-primary-rgb),0.06)] border border-[rgba(var(--color-primary-rgb),0.2)] flex items-start gap-3">
          <i class="fa-solid fa-user-shield text-[var(--color-primary)] text-base shrink-0 mt-0.5"></i>
          <p class="text-xs leading-relaxed text-slate-700 dark:text-slate-200 font-medium">
            Keamanan data dan privasi Anda adalah prioritas utama kami di <b>Toko Putri</b>. Berikut komitmen perlindungan data pelanggan:
          </p>
        </div>

        <div class="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-800/40 space-y-2">
          <div class="flex items-center gap-2.5">
            <span class="w-6 h-6 rounded-lg primary-bg text-white text-xs font-black flex items-center justify-center shrink-0">1</span>
            <h4 class="font-bold text-slate-800 dark:text-white text-sm">Data Yang Kami Kumpulkan</h4>
          </div>
          <p class="text-xs leading-relaxed pl-8 text-slate-600 dark:text-slate-300">
            Kami mengumpulkan data berupa Nama, Nomor WhatsApp, dan Alamat Pengiriman Anda saat membuat pesanan untuk keperluan pengantaran barang.
          </p>
        </div>

        <div class="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-800/40 space-y-2">
          <div class="flex items-center gap-2.5">
            <span class="w-6 h-6 rounded-lg primary-bg text-white text-xs font-black flex items-center justify-center shrink-0">2</span>
            <h4 class="font-bold text-slate-800 dark:text-white text-sm">Kerahasiaan Data</h4>
          </div>
          <p class="text-xs leading-relaxed pl-8 text-slate-600 dark:text-slate-300">
            Toko Putri berkomitmen penuh untuk menjaga kerahasiaan data pribadi pelanggan dan tidak akan membagikannya ke pihak ketiga manapun.
          </p>
        </div>

        <div class="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-800/40 space-y-2">
          <div class="flex items-center gap-2.5">
            <span class="w-6 h-6 rounded-lg primary-bg text-white text-xs font-black flex items-center justify-center shrink-0">3</span>
            <h4 class="font-bold text-slate-800 dark:text-white text-sm">Keamanan Data Transaksi</h4>
          </div>
          <p class="text-xs leading-relaxed pl-8 text-slate-600 dark:text-slate-300">
            Semua file bukti pembayaran yang diunggah diproses melalui server terenkripsi yang aman untuk mencegah kebocoran data sensitif.
          </p>
        </div>
      </div>
    `,t=f?.store?.privacy,a=t?t.includes("<")?t:`<div class="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-800/40 leading-relaxed text-xs sm:text-sm text-slate-600 dark:text-slate-300 whitespace-pre-line">${t}</div>`:e;N("privacy-modal-content-body",a);const s=l("privacy-modal"),o=l("privacy-modal-content");s&&o&&(s.classList.contains("hidden")&&be("privacy"),he(s,o))};window.closePrivacyModal=(e=!1)=>{const t=l("privacy-modal"),a=l("privacy-modal-content");t&&a&&ee("privacy",e,()=>{ve(t,a)})};window.closeQuickMenuModal=(e=!1)=>{const t=l("quickmenu-modal"),a=l("quickmenu-modal-content");t&&a&&ee("quickmenu",e,()=>{ve(t,a)})};window.openShoppingGuideModal=()=>{const e=l("shopping-guide-modal"),t=l("shopping-guide-modal-content");e&&t&&(e.classList.contains("hidden")&&be("guide"),he(e,t))};window.closeShoppingGuideModal=(e=!1)=>{const t=l("shopping-guide-modal"),a=l("shopping-guide-modal-content");t&&a&&ee("guide",e,()=>{ve(t,a)})};window.navigateFromQuickMenu=e=>{closeQuickMenuModal(!0);const t=Te.indexOf("quickmenu");t>-1&&Te.splice(t,1),typeof e=="function"?(history.replaceState({view:zt},"",window.location.href),e()):(history.replaceState({view:e},"",window.location.href),Jt(e,!0))};const qt=e=>{const t=f.products?.find(o=>o&&o.id!=null&&String(o.id)===String(e.id));let a=e.price||0;if(e.variantName&&t&&t.variants){const o=t.variants.find(r=>r.name===e.variantName);o&&o.price!=null&&(a=o.price)}if(e.variantName||!t||!t.wholesale||!t.wholesale.length)return a;const s=R.filter(o=>o.id!=null&&String(o.id)===String(e.id)).reduce((o,r)=>o+(parseFloat(r.qty)||0),0);for(let o of t.wholesale.slice().sort((r,i)=>i.minQty-r.minQty))if(s>=parseFloat(o.minQty))return o.price;return a},vo=e=>{const t=f.products?.find(a=>a&&a.id!=null&&String(a.id)===String(e.id));if(!t)return 0;if(e.variantName&&t.variants){const a=t.variants.find(s=>s.name===e.variantName);if(a&&a.hpp!=null)return parseFloat(a.hpp)||0}return parseFloat(t.hpp)||0},Gt=e=>{if(!e)return 0;const t=f.products?.find(a=>a&&a.id!=null&&String(a.id)===String(e.id));if(!t)return parseFloat(e.poin)||0;if(e.variantName&&t.variants){const a=t.variants.find(s=>s.name===e.variantName);if(a&&a.poin!==void 0&&a.poin!==null&&a.poin!==""){const s=parseFloat(a.poin);if(!isNaN(s)&&s>0)return s}}return parseFloat(t.poin)||0},yo=(e,t,a,s)=>{if(!e||!t||!a||!s)return 0;const o=6371,r=(a-e)*Math.PI/180,i=(s-t)*Math.PI/180,n=Math.sin(r/2)*Math.sin(r/2)+Math.cos(e*Math.PI/180)*Math.cos(a*Math.PI/180)*Math.sin(i/2)*Math.sin(i/2),d=2*Math.atan2(Math.sqrt(n),Math.sqrt(1-n));return o*d},Kt=e=>{if(!e||typeof e!="string")return null;let t=e.trim();try{t=decodeURIComponent(t)}catch{}const a=t.match(/@(-?\d{1,3}\.\d+)[,\s]+(-?\d{1,3}\.\d+)/);if(a){const i=parseFloat(a[1]),n=parseFloat(a[2]);if(!isNaN(i)&&!isNaN(n)&&Math.abs(i)<=90&&Math.abs(n)<=180)return{lat:a[1],lng:a[2]}}const s=t.match(/[?&](?:q|ll|query|loc|center)=(-?\d{1,3}\.\d+)[,\s]+(-?\d{1,3}\.\d+)/i);if(s){const i=parseFloat(s[1]),n=parseFloat(s[2]);if(!isNaN(i)&&!isNaN(n)&&Math.abs(i)<=90&&Math.abs(n)<=180)return{lat:s[1],lng:s[2]}}const o=t.match(/(\d+)[°\s]+(\d+)['\s]+([\d.]+)"?\s*([NSns])[,\s]+(\d+)[°\s]+(\d+)['\s]+([\d.]+)"?\s*([EWew])/);if(o){let i=parseInt(o[1],10)+parseInt(o[2],10)/60+parseFloat(o[3])/3600;o[4].toUpperCase()==="S"&&(i=-i);let n=parseInt(o[5],10)+parseInt(o[6],10)/60+parseFloat(o[7])/3600;return o[8].toUpperCase()==="W"&&(n=-n),{lat:i.toFixed(8),lng:n.toFixed(8)}}const r=t.match(/(-?\d{1,3}\.\d{3,20})[,\s;\t]+(-?\d{1,3}\.\d{3,20})/);if(r){const i=parseFloat(r[1]),n=parseFloat(r[2]);if(!isNaN(i)&&!isNaN(n)&&Math.abs(i)<=90&&Math.abs(n)<=180)return{lat:r[1],lng:r[2]}}return null},ko=e=>{const t=(typeof e=="string"?e:e?.value||"").trim(),a=Kt(t);return a?(V("set-lat",a.lat),V("set-lng",a.lng),b("Koordinat GPS berhasil disalin!"),a):(b("Format tidak dikenali! Tempel koordinat: Lat, Lng atau link Google Maps"),null)},Po=(e=R,t=f.store)=>{if(!e||!e.length)return{totalPoints:0,directPoints:0,spendPoints:0,nonPointSpend:0,threshold:1e5,pointsPerThreshold:1,isSpendPointsActive:!1,remainingToNextPoint:0,progressPercent:0};let a=0,s=0;e.forEach(h=>{const g=Gt(h),y=parseFloat(h.qty)||0;if(g>0)a+=g*y;else{const k=qt(h);s+=k*y}});let o=0,r=0,i=0;const n=t?t.spendPointsEnabled===!0||t.spendPointsEnabled==="true":!1,d=Math.max(1,parseFloat(t?.spendPointsThreshold)||1e5),p=Math.max(1,parseFloat(t?.spendPointsPerThreshold)||1);if(n&&s>0){const h=Math.floor(s/d);o=h*p;const g=s%d;r=g>0?d-g:d,i=Math.min(100,Math.round((g||(h>0?d:0))/d*100))}return{totalPoints:a+o,directPoints:a,spendPoints:o,nonPointSpend:s,threshold:d,pointsPerThreshold:p,isSpendPointsActive:n,remainingToNextPoint:r,progressPercent:i}};window.getEffP=qt;window.getEffHpp=vo;window.getEffPoin=Gt;window.calculateCartPoints=Po;window.getDist=yo;window.parseGeoCoordinates=Kt;window.autoParseCoords=ko;let et=null,Fe=null;const Mo=async e=>{try{if(navigator.clipboard&&navigator.clipboard.writeText)await navigator.clipboard.writeText(e);else{const t=document.createElement("textarea");t.value=e,t.style.position="fixed",t.style.opacity="0",document.body.appendChild(t),t.select(),document.execCommand("copy"),document.body.removeChild(t)}Be("Kode "+e+" berhasil disalin!")}catch{Be("Gagal menyalin. Kode: "+e)}},Be=(e,t,a,s)=>{const o=l("toast");if(!o)return;if(!t){const F=e.toLowerCase();/berhasil|sukses|selamat|✅|🎉|aktif|dikirim|disimpan|diupload|disalin|dipulihkan|login berhasil|restock|terhapus|diunduh|diperbarui/.test(F)?t="success":/gagal|error|tolak|❌|tidak valid|tidak ditemukan|tidak cukup|salah|ditolak|quota|koneksi|putus|izin|wajib/.test(F)?t="error":/tunggu|maks|hati|stok|coba|⚠️|pastikan/.test(F)?t="warning":/upload|proses|memuat|loading|sedang/.test(F)?t="loading":t="info"}const r=getComputedStyle(document.documentElement),i=r.getPropertyValue("--color-primary-rgb").trim()||"16,185,129",n=r.getPropertyValue("--color-primary").trim()||"#10b981";r.getPropertyValue("--color-primary-dark").trim();const d={success:{icon:"fa-circle-check",label:"Berhasil",accent:n,iconBg:`rgba(${i},0.12)`,border:`rgba(${i},0.35)`},error:{icon:"fa-circle-xmark",label:"Gagal",accent:"#ef4444",iconBg:"rgba(239,68,68,0.12)",border:"rgba(239,68,68,0.35)"},warning:{icon:"fa-triangle-exclamation",label:"Perhatian",accent:"#f59e0b",iconBg:"rgba(245,158,11,0.12)",border:"rgba(245,158,11,0.35)"},loading:{icon:"fa-spinner fa-spin",label:"Memproses",accent:n,iconBg:`rgba(${i},0.12)`,border:`rgba(${i},0.35)`},info:{icon:"fa-circle-info",label:"Informasi",accent:n,iconBg:`rgba(${i},0.12)`,border:`rgba(${i},0.35)`}},p=d[t]||d.info,h=l("toast-icon");h&&(h.className="fa-solid "+p.icon);const g=l("toast-title");g&&(g.textContent=a||p.label,g.style.display="block",g.style.color=p.accent);const y=l("toast-icon-wrap");y&&(y.style.background=p.iconBg,y.style.color=p.accent),L("toast-message",e.replace(/^[✅❌⚠️🎉🔔]\s*/,""));let k=l("toast-progress");k||(k=document.createElement("div"),k.id="toast-progress",o.appendChild(k)),k.style.background=p.accent,k.style.transition="none",k.style.width="100%",k.style.opacity="0.85",clearTimeout(et),o.classList.add("toast-show");const G=s||(t==="loading"?8e3:t==="error"?4500:3e3);requestAnimationFrame(()=>requestAnimationFrame(()=>{k.style.transition=`width ${G}ms linear`,k.style.width="0%"})),et=setTimeout(()=>{o.classList.remove("toast-show")},G)},To=e=>Be(e,"loading","Memproses...",8e3),Ao=()=>{clearTimeout(et);const e=l("toast");e&&e.classList.remove("toast-show")},So=()=>{const e=document.documentElement.classList.toggle("dark");localStorage.setItem("freshmart_theme",e?"dark":"light");const t=document.getElementById("icon-theme")||document.getElementById("theme-toggle-icon");t&&(t.className=e?"fa-solid fa-sun text-sm text-amber-400":"fa-solid fa-moon text-sm text-slate-600 dark:text-slate-300")},Do=(e,t,a,s="Ya, Hapus",o=!0)=>{let r=e,i=t,n=a,d=s,p=o;typeof t=="function"&&(n=t,i=e,r=typeof s=="string"&&s!=="Ya, Hapus"?s:"Konfirmasi Tindakan",d=typeof a=="string"?a:"Ya, Lanjutkan",p=!0),L("confirm-title",r),L("confirm-msg",i);const h=l("confirm-yes-btn");h&&(h.innerText=d,p?(h.className="flex-1 py-3.5 bg-rose-600 text-white font-bold rounded-xl hover:bg-rose-700 active:scale-95 transition-all text-sm shadow-md shadow-rose-500/30 cursor-pointer",l("confirm-icon-box").className="w-16 h-16 bg-rose-50 dark:bg-rose-900/30 text-rose-500 dark:text-rose-400 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-5 border border-rose-200 dark:border-rose-800",l("confirm-icon").className="fa-solid fa-triangle-exclamation"):(h.className="flex-1 py-3.5 bg-[var(--color-primary)] text-white font-bold rounded-xl hover:opacity-90 active:scale-95 transition-all text-sm shadow-sm cursor-pointer",l("confirm-icon-box").className="w-16 h-16 bg-[rgba(var(--color-primary-rgb),0.08)] dark:bg-[rgba(var(--color-primary-rgb),0.15)] text-[var(--color-primary)] rounded-2xl flex items-center justify-center text-3xl mx-auto mb-5 border border-[var(--color-primary)]/20",l("confirm-icon").className="fa-solid fa-copy")),Fe=n;const g=l("custom-confirm-modal");g&&g.classList.contains("hidden")&&be("confirm"),q("custom-confirm-modal"),setTimeout(()=>{l("custom-confirm-modal").classList.remove("opacity-0"),l("custom-confirm-box").classList.remove("scale-95")},10)},Ht=(e=!1)=>{ee("confirm",e,()=>{l("custom-confirm-modal").classList.add("opacity-0"),l("custom-confirm-box").classList.add("scale-95"),setTimeout(()=>T("custom-confirm-modal"),300)})},$o=()=>{if(Fe){const e=Fe;Fe=null,Ht(),setTimeout(()=>{e()},150)}},Co=(e,t,a)=>{let s=document.createElement("div");s.className="fixed inset-0 z-[9999] bg-slate-900/80 flex items-center justify-center p-4 opacity-0 transition-opacity duration-300",s.innerHTML=`
        <div class="bg-white dark:bg-slate-800 rounded-3xl w-full max-w-[320px] p-6 shadow-2xl border border-slate-200 dark:border-slate-700 relative transform scale-95 transition-all duration-300 flex flex-col text-center">
            <h3 class="font-bold text-slate-900 dark:text-white text-lg mb-4">${e}</h3>
            <input type="text" id="prompt-input" value="${t}" class="w-full px-4 py-3.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-700 dark:text-slate-300 mb-6 focus:ring-2 focus:ring-[var(--color-primary)] outline-none text-center font-bold text-xl tracking-wider" autocomplete="off" />
            <div class="flex gap-3">
                <button id="prompt-cancel" class="flex-1 py-3.5 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 font-bold rounded-xl hover:bg-slate-200 dark:hover:bg-slate-600 active:scale-95 transition-all text-sm">Batal</button>
                <button id="prompt-ok" class="flex-1 py-3.5 bg-[var(--color-primary)] text-white font-bold rounded-xl hover:opacity-90 active:scale-95 transition-all text-sm shadow-md">Simpan</button>
            </div>
        </div>
    `,document.body.appendChild(s);const o=s.querySelector("div");be("prompt"),setTimeout(()=>{s.classList.remove("opacity-0"),o.classList.remove("scale-95")},10);const r=s.querySelector("#prompt-input");r.focus(),r.select(),window.closePrompt=(i=!1)=>{!s||!s.parentNode||ee("prompt",i,()=>{s.classList.add("opacity-0"),o.classList.add("scale-95"),setTimeout(()=>s.remove(),300),window.closePrompt=null})},s.querySelector("#prompt-cancel").onclick=()=>window.closePrompt(),s.querySelector("#prompt-ok").onclick=()=>{let i=r.value;window.closePrompt(),a(i)}},Eo=()=>{typeof window.openReceiptPreview=="function"&&window.openReceiptPreview()};window.copyVoucher=Mo;window.showToast=Be;window.showToastLoading=To;window.hideToast=Ao;window.toggleTheme=So;window.showConfirm=Do;window.closeConfirm=Ht;window.executeConfirm=$o;window.customPrompt=Co;window.checkProPrint=Eo;typeof history<"u"&&"scrollRestoration"in history&&(history.scrollRestoration="manual");window.scrollTo(0,0);document.documentElement&&(document.documentElement.scrollTop=0);document.body&&(document.body.scrollTop=0);Zt();window.firebase=_e;window.db=D;window.DOMPurify=Qt;window.ensureScriptLoaded=ma;if(typeof window<"u"){const e=window.print?window.print.bind(window):null;window.print=function(){window.AndroidNativeApp&&typeof window.AndroidNativeApp.print=="function"?window.AndroidNativeApp.print():e&&e()}}window.uiPalettes=Yt;window.hexToRgb=Xt;window.applyUITheme=ht;window.toggleTheme=ea;window.applyBackgroundStyle=vt;ta();const Ro=localStorage.getItem("freshmart_ui_theme")||"emerald";ht(Ro,localStorage.getItem("freshmart_theme_color"));const gt=()=>{ca();const e=localStorage.getItem("freshmart_bg_style")||"minimalist",t=localStorage.getItem("freshmart_bg_custom_url")||"";vt(e,t),pa()};document.readyState==="loading"?document.addEventListener("DOMContentLoaded",gt):gt();window.onerror=function(e,t,a,s,o){return console.error("Global Error Caught:",e,"at",a,":",s),typeof showToast=="function"&&showToast("Ops, ada kendala sistem."),!1};window.addEventListener("unhandledrejection",function(e){console.warn("Promise Rejection Sentinel:",e.reason)});window.updateSEO=ua;window.injectJSONLD=fa;window.rewardStatusLabel=at;window.getYouTubeId=ba;window.parseVideoUrl=wa;window.fixDriveVideo=ga;window.fixDriveVideoPreview=xa;let xt=Oe;window.calcTaxDetails=e=>{const t=f?.store||{},a=t.ppnEnabled===!0||t.ppnEnabled==="true",s=parseFloat(t.ppnRate)||11,o=t.ppnType||"exclusive";if(!a||e<=0)return{ppnEnabled:!1,ppnRate:0,ppnType:o,ppnAmount:0,dppAmount:Math.max(0,e),grandTotalAdd:0};if(o==="inclusive"){const r=Math.round(e*100/(100+s)),i=e-r;return{ppnEnabled:!0,ppnRate:s,ppnType:"inclusive",ppnAmount:i,dppAmount:r,grandTotalAdd:0}}else{const r=Math.round(e*s/100);return{ppnEnabled:!0,ppnRate:s,ppnType:"exclusive",ppnAmount:r,dppAmount:Math.max(0,e),grandTotalAdd:r}}};typeof requestIdleCallback<"u"?requestIdleCallback(pt,{timeout:5e3}):setTimeout(pt,3e3);window.updateProBadge=()=>{};window.isAdm=!1;window.isPro=!0;history.replaceState({view:"view-catalog"},"","");window.addEventListener("DOMContentLoaded",async()=>{await aa();try{sa()}catch(e){console.warn("[syncAppMeta] Error:",e)}oa(),ra(),mt(),window.attachRewardsRealtime=mt,He.onAuthStateChanged(async e=>{if(!ia()){if(e&&e.uid!==yt){await He.signOut();return}if(e){if(!await na()){console.log("[Auth] Sesi admin lokal sudah tidak aktif (diambil alih perangkat lain)."),ut(),localStorage.removeItem("freshmart_admin_session_id"),window.isAdm=!1,window.__localIsAdm=!1,window.isPro=!1,window.updateProBadge&&window.updateProBadge(),await He.signOut();return}la(),window.isAdm=!0,window.isPro=!0,localStorage.removeItem("isFreshmartPro"),localStorage.removeItem("freshmart_license_code"),window.updateProBadge&&window.updateProBadge();let a=document.getElementById("view-admin-login");a&&!a.classList.contains("hidden")&&(history.replaceState({view:"view-admin"},"",window.location.href),changeView("view-admin",!0),openAdminMenu(),showToast("Sesi Dipulihkan! Selamat Datang."))}else ut(),localStorage.removeItem("freshmart_admin_session_id"),window.isAdm=!1,window.__localIsAdm=!1,window.isPro=!1,window.updateProBadge&&window.updateProBadge(),localStorage.removeItem("isFreshmartPro"),localStorage.removeItem("freshmart_license_code")}})});window.el=l;window.show=q;window.hide=T;window.toggleCls=X;window.setIn=L;window.setH=N;window.setV=V;window.getV=_;window.esc=u;window.fixD=je;window.fCur=S;window.sL=Qe;window.ssL=Ie;window.defaultFbC=kt;window.fbC=kt;window.defApp=ha;window.ADMIN_UID=yt;window.sLoad=Z;window.hLoad=I;window.sanitizeCart=da;const P=(e,t,a)=>{try{Object.defineProperty(window,e,{get:t,set:a,configurable:!0})}catch{}};P("GAS_UPLOAD_URL",()=>xt,e=>{xt=e});P("confirmCb",()=>va,e=>{cs(e)});P("appData",()=>f,e=>{ya(e)});P("cart",()=>R,e=>{Pt(e)});P("wishlist",()=>Pa,e=>{ka(e)});P("myOrders",()=>O,e=>{Ne(e)});P("cust",()=>c,e=>{Mt(e)});P("currentMember",()=>z,e=>{J(e)});P("selectedReward",()=>le,e=>{ne(e)});P("memberCheckTimer",()=>Ma,e=>{ps(e)});P("aCat",()=>ze,e=>{At(e)});P("aBrand",()=>We,e=>{St(e)});P("sQ",()=>Aa,e=>{Ta(e)});P("cSort",()=>Da,e=>{Sa(e)});P("cView",()=>Ca,e=>{$a(e)});P("cPage",()=>Ea,e=>{st(e)});P("iPP",()=>Ia,e=>{Ra(e)});P("cTab",()=>La,e=>{ms(e)});P("aSq",()=>Fa,e=>{us(e)});P("eId",()=>_a,e=>{fs(e)});P("cProd",()=>Na,e=>{Ba(e)});P("cVar",()=>Oa,e=>{ja(e)});P("tVars",()=>Ua,e=>{bs(e)});P("tWhol",()=>qa,e=>{ws(e)});P("tSpec",()=>Ga,e=>{gs(e)});P("cQty",()=>Ha,e=>{Ka(e)});P("oMods",()=>Te,e=>{Va(e)});P("aOrdLst",()=>Wa,e=>{Qa(e)});P("aCustLst",()=>Ja,e=>{za(e)});P("aRevLst",()=>Ya,e=>{Za(e)});P("gOrds",()=>es,e=>{Xa(e)});P("gReviews",()=>as,e=>{ts(e)});P("cVOrd",()=>os,e=>{ss(e)});P("vouch",()=>v,e=>{W(e)});P("toastT",()=>rs,e=>{xs(e)});P("isSaving",()=>tt,e=>{ie(e)});P("reviewFilterMode",()=>ns,e=>{is(e)});P("lastReportPeriod",()=>ds,e=>{ls(e)});
