import{f as Be}from"./vendor-firebase-core-D2OF5R23.js";import"./vendor-firebase-db-BIUZcnOd.js";import{p as ta}from"./vendor-utils-Bszxp-Ae.js";import{d as C,g as ut,c as aa,u as sa,h as oa,a as Mt,t as ra,b as Pt,i as ia,l as ft,e as na,s as la,f as da,j as ca,k as wt,m as Qe,n as pa,A as Tt,o as ma,p as bt,q as ua,r as At,v as fa,w as wa,x as ba}from"./module-admin-2eQOEIE2.js";import{e as l,Q as N,a as u,g as q,c as E,i as _,f as D,aj as b,h as T,j as m,ak as H,al as Q,am as se,an as V,ao as oe,ap as y,A as J,d as F,a3 as st,ae as ze,b as Ie,a4 as ae,R as z,S as L,aq as O,ar as Oe,s as St,m as K,as as Dt,k as f,a7 as je,a2 as ot,l as Ct,z as W,o as ye,x as ve,K as $t,D as rt,M as Rt,F as Je,E as Ye,a0 as ga,at as xa,au as ha,r as ya,ab as va,ad as ka,ac as Ma,af as Pa,av as Ta,aw as Aa,ax as Sa,w as Da,ay as Ca,N as $a,G as Ra,O as Ea,I as La,P as Ia,J as Fa,B as _a,az as Ba,C as Na,aA as Oa,aB as ja,aC as Ua,y as qa,p as Ga,v as Ka,q as Ha,aD as Va,aE as Qa,aF as Wa,u as za,t as Ja,aG as Ya,U as Za,T as Xa,W as es,V as ts,Y as as,X as ss,a6 as os,$ as rs,ag as is,a8 as ns,a1 as ls,a5 as ds,aH as cs,aa as ps,a9 as ms,_ as us,Z as fs,aI as ws,aJ as bs,ah as gs,ai as xs,aK as hs,aL as ys,aM as vs,aN as ks,aO as Ms}from"./module-print-CDLpN0fO.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function a(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(o){if(o.ep)return;o.ep=!0;const r=a(o);fetch(o.href,r)}})();let Ue="https://script.google.com/macros/s/AKfycbx3dW9rHcdoKNYjSOJ8PoH2k6fABe7XlBD9teNHsBlCBqJquq8jd4UvnfXZVsfKdFsC/exec";const Et=()=>{l("voucher-input");const e=(N("voucher-input")||"").toUpperCase().trim(),t=(u.vouchers||[]).find(o=>(o.code||"").toUpperCase()===e);q("voucher-msg-container");const a=typeof window.getEffP=="function"?window.getEffP:o=>o.effectivePrice||o.price||0,s=E.reduce((o,r)=>o+(parseFloat(a(r))||0)*(parseFloat(r.qty)||0),0);if(t){let o=!0;t.targetProduct&&t.targetProduct!==""&&(o=E.some(r=>r&&String(r.id)===String(t.targetProduct))),t.targetProduct&&t.targetProduct!==""&&!o?(H(null),_("voucher-msg",'<i class="fa-solid fa-box mr-1"></i> Khusus Produk Tertentu!'),l("voucher-msg")&&(l("voucher-msg").className="text-sm font-bold text-rose-500 dark:text-rose-400")):t.minPurchase&&parseFloat(t.minPurchase)>0&&s<parseFloat(t.minPurchase)?(H(null),_("voucher-msg",`<i class="fa-solid fa-circle-exclamation mr-1"></i> Minimal belanja ${D(t.minPurchase)}`),l("voucher-msg")&&(l("voucher-msg").className="text-sm font-bold text-amber-500 dark:text-amber-400")):t.type&&t.type.includes("shipping")&&b.deliveryMethod!=="delivery"?(H(null),_("voucher-msg",'<i class="fa-solid fa-motorcycle mr-1"></i> Khusus pesanan dikirim kurir!'),l("voucher-msg")&&(l("voucher-msg").className="text-sm font-bold text-rose-500 dark:text-rose-400")):(H(t),_("voucher-msg",'<i class="fa-solid fa-check-circle mr-1"></i> Voucher Diterapkan!'),l("voucher-msg")&&(l("voucher-msg").className="text-sm font-bold text-[var(--color-primary)]"))}else e===""?(H(null),T("voucher-msg-container"),typeof window.rPay=="function"&&window.rPay()):(H(null),_("voucher-msg",'<i class="fa-solid fa-times-circle mr-1"></i> Kode Tidak Valid'),l("voucher-msg")&&(l("voucher-msg").className="text-sm font-bold text-rose-500 dark:text-rose-400"));typeof window.rPay=="function"&&window.rPay()},Ps=()=>{let e=document.getElementById("voucher-modal");e||(e=document.createElement("div"),e.id="voucher-modal",e.className="fixed inset-0 z-[115] bg-slate-900/80 flex items-end sm:items-center justify-center p-0 sm:p-5",e.onclick=s=>{s.target===e&&it()},document.body.appendChild(e));const t=(u.vouchers||[]).filter(s=>s.isShow!==!1&&s.isShow!=="false"),a=t.length?t.map(s=>{let o="";s.type==="percent"?o=`Diskon ${s.value}%`:s.type==="shipping_free"?o="Gratis Ongkir":s.type==="shipping_flat"?o=`Diskon Ongkir ${D(s.value)}`:o=`Potongan ${D(s.value)}`;const r=s.minPurchase&&parseFloat(s.minPurchase)>0?`Min. belanja ${D(s.minPurchase)}`:"Tanpa minimal belanja";return`
        <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/80 hover:border-[var(--color-primary)] transition-all shadow-xs">
            <div class="flex items-start gap-3.5 min-w-0">
                <div class="w-11 h-11 rounded-xl bg-[var(--color-primary)] text-white flex items-center justify-center text-lg shrink-0 shadow-sm mt-0.5">
                    <i class="fa-solid fa-ticket"></i>
                </div>
                <div class="min-w-0">
                    <div class="flex flex-wrap items-center gap-2 mb-1.5">
                        <span class="font-extrabold text-sm font-mono tracking-wider text-slate-800 dark:text-white bg-white dark:bg-slate-900 px-2.5 py-0.5 rounded-lg border border-slate-200 dark:border-slate-700 select-all">${m(s.code)}</span>
                        <span class="primary-bg text-white text-[10px] font-bold px-2 py-0.5 rounded-md uppercase whitespace-nowrap shadow-2xs">${o}</span>
                    </div>
                    <p class="text-[11px] font-medium text-slate-500 dark:text-slate-400 flex items-center gap-1.5"><i class="fa-solid fa-circle-check text-[var(--color-primary)] text-xs"></i> ${r}</p>
                </div>
            </div>
            <div class="flex items-center gap-2 shrink-0 pt-2 md:pt-0 border-t md:border-t-0 border-slate-200 dark:border-slate-700">
                <button type="button" onclick="copyVoucherCode('${m(s.code)}')" class="flex-1 md:flex-initial bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] text-xs font-bold uppercase tracking-wider px-3.5 py-2 rounded-xl transition-all active:scale-95 flex items-center justify-center gap-1.5 shadow-2xs">
                    <i class="fa-regular fa-copy"></i> Salin
                </button>
                <button type="button" onclick="useVoucherCode('${m(s.code)}')" class="flex-1 md:flex-initial primary-bg text-white text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-xl transition-all active:scale-95 flex items-center justify-center gap-1.5 shadow-sm">
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
        </div>`,e.style.opacity="0",e.style.display="flex",requestAnimationFrame(()=>{e.style.transition="opacity 0.25s ease",e.style.opacity="1"}),typeof window.pushModalHistory=="function"&&window.pushModalHistory("voucher")},Ts=e=>{navigator.clipboard&&navigator.clipboard.writeText?navigator.clipboard.writeText(e).then(()=>{typeof window.showToast=="function"&&window.showToast(`✅ Kode "${e}" disalin ke clipboard!`)}).catch(()=>{typeof window.showToast=="function"&&window.showToast(`Kode Kupon: ${e}`)}):typeof window.showToast=="function"&&window.showToast(`Kode Kupon: ${e}`)},As=e=>{it();const t=l("voucher-input");t&&(t.value=e,Et()),E.length>0?typeof window.changeView=="function"&&window.changeView("view-checkout"):(typeof window.showToast=="function"&&window.showToast(`Kode "${e}" siap digunakan saat checkout belanja!`),typeof window.changeView=="function"&&window.changeView("view-catalog"))},it=()=>{const e=document.getElementById("voucher-modal");!e||e.style.display==="none"||(e.style.opacity="0",e.style.transition="opacity 0.25s ease",setTimeout(()=>{e.style.display="none",e.style.opacity="",e.style.transition=""},250))};window.applyVoucher=Et;window.openVoucherModal=Ps;window.closeVoucherModal=it;window.copyVoucherCode=Ts;window.useVoucherCode=As;const te=new Map,Ss=3*60*1e3,Ds="https://lh3.googleusercontent.com/d/1KHwsV5sK6aAH3-eP_vTJA4tE5MyRukLo",Cs=e=>{if(!e){te.clear();return}const t=e.toString().replace(/\D/g,"");let a=t,s=t.startsWith("0")?"62"+t.substring(1):t.startsWith("62")?t:"62"+t,o=t.startsWith("62")?"0"+t.substring(2):t;te.delete(t),te.delete(a),te.delete(s),te.delete(o)},nt=async(e,t="")=>{try{let a=(e||"").toString().replace(/\D/g,"");if(a.startsWith("0")?a="62"+a.substring(1):a.startsWith("62")||(a="62"+a),!a||a.length<9)return null;let s=[];try{const w=localStorage.getItem("freshmart_my_orders");w&&(s=JSON.parse(w)||[])}catch{}if(!s.length)return null;let o=0;const r=s.find(w=>w.finalMemberPoints!==void 0&&w.finalMemberPoints!==null);if(r?o=Math.max(0,parseFloat(r.finalMemberPoints)||0):o=s.reduce((w,v)=>w+(parseFloat(v.pointsEarned)||0),0),o<=0)return null;const i=C.collection("freshmart").doc("cms_data").collection("customers").doc(a),n=await i.get();if(!n.exists)return null;const d=t||V&&V.name||n.data().name||"Pelanggan Setia",c={id:a,phone:a,name:d,points:o,updatedAt:new Date().toISOString(),lastOrderAt:new Date().toISOString()};try{await i.set(c,{merge:!0})}catch(w){console.warn("[reconcilePointsFromOrders] Firestore set error:",w)}Q(c);try{localStorage.setItem("freshmart_current_member",JSON.stringify(c)),localStorage.setItem("freshmart_member_wa",a)}catch{}return te.set(a,{data:c,timestamp:Date.now()}),document.getElementById("member-modal-body")&&he(),c}catch(a){return console.warn("[reconcilePointsFromOrders] Error:",a),null}},qe=(e=0)=>{const t=Math.max(0,parseFloat(e)||0);return t>=1e3?{level:4,name:"PLATINUM VIP",badge:"💎 PLATINUM VIP",icon:"fa-gem",gradient:"from-slate-950 via-zinc-900 to-neutral-950 border-amber-400/40 text-amber-200",cardBg:"linear-gradient(135deg, #090d16 0%, #171f30 45%, #0d1322 75%, #050811 100%)",accentBg:"bg-amber-400/20",accentText:"text-amber-300",accentBorder:"border-amber-400/40",chipBorder:"#f59e0b",foilClass:"gold-foil-text",nextTier:null,ptsNeeded:0,progress:100,perks:["Cashback & Poin Belanja Maksimal (2x Lipat)","Akses Prioritas Antrean Kasir & Pengiriman","Klaim Semua Hadiah Katalog VIP","Layanan Konsultasi Khusus via WhatsApp"]}:t>=500?{level:3,name:"GOLD MEMBER",badge:"🥇 GOLD MEMBER",icon:"fa-crown",gradient:"from-amber-600 via-yellow-600 to-amber-700 border-yellow-300/40 text-yellow-100",cardBg:"linear-gradient(135deg, #78350f 0%, #b45309 35%, #d97706 70%, #92400e 100%)",accentBg:"bg-yellow-400/20",accentText:"text-amber-200",accentBorder:"border-yellow-300/40",chipBorder:"#fde047",foilClass:"gold-foil-text",nextTier:"Platinum VIP",ptsNeeded:1e3-t,progress:Math.min(100,Math.round((t-500)/500*100)),perks:["Diskon & Promo Spesial Member Gold","Kumpulkan Poin di Setiap Transaksi","Tukar Hadiah Menarik dari Katalog","Prioritas Penyiapan Pesanan"]}:t>=100?{level:2,name:"SILVER MEMBER",badge:"🥈 SILVER MEMBER",icon:"fa-medal",gradient:"from-slate-700 via-slate-600 to-slate-800 border-slate-300/40 text-slate-100",cardBg:"linear-gradient(135deg, #1e293b 0%, #334155 40%, #475569 70%, #0f172a 100%)",accentBg:"bg-slate-200/20",accentText:"text-slate-100",accentBorder:"border-slate-300/40",chipBorder:"#cbd5e1",foilClass:"silver-foil-text",nextTier:"Gold Member",ptsNeeded:500-t,progress:Math.min(100,Math.round((t-100)/400*100)),perks:["Kumpulkan Poin di Setiap Transaksi","Tukar Hadiah Langsung Tanpa Undian","Penawaran Diskon Tertentu"]}:{level:1,name:"BRONZE MEMBER",badge:"🥉 BRONZE MEMBER",icon:"fa-award",gradient:"from-stone-800 via-amber-950 to-stone-900 border-orange-400/30 text-orange-200",cardBg:"linear-gradient(135deg, #381a10 0%, #632917 40%, #7c2d12 70%, #292524 100%)",accentBg:"bg-orange-500/20",accentText:"text-orange-200",accentBorder:"border-orange-400/40",chipBorder:"#fb923c",foilClass:"bronze-foil-text",nextTier:"Silver Member",ptsNeeded:100-t,progress:Math.min(100,Math.round(t/100*100)),perks:["Kumpulkan Poin di Setiap Transaksi Belanja","Akses Penuh ke Katalog Hadiah Toko"]}},Lt=e=>{let t=(e||"").toString().replace(/\D/g,"");for(t.startsWith("62")?t=t.substring(2):t.startsWith("0")&&(t=t.substring(1));t.length<8;)t+="0";const a=[];for(let s=0;s<t.length&&a.length<3;s+=4)a.push(t.substring(s,s+4));return`PUTRI • ${a.join(" • ")}`},It=e=>{const t=String(e||"812345678901").replace(/\D/g,"");let a="",s=8;a+=`<rect x="${s}" y="3" width="2.5" height="34" fill="#0f172a"/>`,s+=4,a+=`<rect x="${s}" y="3" width="1.5" height="34" fill="#0f172a"/>`,s+=3.5,a+=`<rect x="${s}" y="3" width="3" height="34" fill="#0f172a"/>`,s+=5;for(let o=0;o<t.length;o++){const r=parseInt(t[o],10)||0,i=(r%3+1)*1.3,n=((r+2)%4+1)*1.1,d=(r%2+1)*1.8;a+=`<rect x="${s}" y="3" width="${i}" height="34" fill="#0f172a"/>`,s+=i+d,a+=`<rect x="${s}" y="3" width="${n}" height="34" fill="#0f172a"/>`,s+=n+2}return a+=`<rect x="${s}" y="3" width="3" height="34" fill="#0f172a"/>`,s+=5,a+=`<rect x="${s}" y="3" width="1.5" height="34" fill="#0f172a"/>`,s+=3.5,a+=`<rect x="${s}" y="3" width="2.5" height="34" fill="#0f172a"/>`,s+=4,`
    <svg class="w-full h-11 bg-white rounded-lg px-2 py-1 shadow-inner border border-slate-200" viewBox="0 0 ${Math.max(s+10,240)} 40" xmlns="http://www.w3.org/2000/svg">
        ${a}
    </svg>`},gt=e=>{const t=parseFloat(e?.points)||0,a=qe(t),s=(u.store?.name||"Toko Putri").toUpperCase(),o=u.store?.logo&&u.store.logo!=="fa-store"?u.store.logo:Ds,r=(e?.name||"PELANGGAN SETIA").toUpperCase(),i=(e?.phone||"81234567890").toString().replace(/\D/g,""),n=Lt(i),d=u.store?.wa||i;return`
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
                            <img src="${m(o)}" alt="Logo" class="w-full h-full object-contain" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">
                            <i class="fa-solid fa-store text-slate-800 text-xs hidden"></i>
                        </div>
                        <div class="min-w-0">
                            <h4 class="text-[11px] sm:text-xs font-black tracking-wider text-white uppercase truncate">${m(s)}</h4>
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
                    <p class="text-[11px] sm:text-[13px] embossed-text text-white/95 font-mono tracking-[0.18em] mb-1.5">${m(n)}</p>
                    <div class="flex items-end justify-between gap-2">
                        <div class="min-w-0 flex-1">
                            <p class="text-[7px] sm:text-[8px] font-bold tracking-widest text-white/70 uppercase leading-none mb-0.5">Nama Pelanggan</p>
                            <p class="text-[11px] sm:text-[13px] font-bold text-white tracking-wider truncate uppercase">${m(r)}</p>
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
                            <span class="text-[9px] font-mono font-bold text-slate-500 italic truncate">${m(r)}</span>
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
                        ${It(i)}
                        <p class="text-[9px] font-mono font-bold tracking-[0.2em] text-slate-300 mt-1">*${m(i)}*</p>
                    </div>
                </div>

                <!-- Footer Sisi Belakang: Kontak & Info -->
                <div class="p-3 sm:p-4 bg-slate-950/80 border-t border-white/10 text-center">
                    <p class="text-[7.5px] sm:text-[8px] text-slate-400 leading-tight">
                        Kartu member digital resmi <b class="text-white">${m(s)}</b>. Tunjukkan saat transaksi untuk poin belanja.
                    </p>
                    <p class="text-[8px] font-bold text-amber-300 mt-0.5">
                        <i class="fa-brands fa-whatsapp mr-1"></i>CS: +${m(d)}
                    </p>
                </div>
            </div>

        </div>
    </div>`},$s=()=>{const e=document.getElementById("member-card-inner");e&&e.classList.toggle("is-flipped")},Rs=async()=>{const e=document.getElementById("member-card-inner");e&&e.classList.contains("is-flipped")&&(e.classList.remove("is-flipped"),await new Promise(a=>setTimeout(a,450)));const t=document.getElementById("member-card-front-export");if(t){typeof window.showToast=="function"&&window.showToast("Menyiapkan file gambar Kartu Member HD...");try{if(typeof window.ensureScriptLoaded=="function"&&await window.ensureScriptLoaded("https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js",()=>typeof html2canvas<"u"),typeof html2canvas>"u")throw new Error("Modul html2canvas belum siap dimuat.");const a=await html2canvas(t,{scale:3,useCORS:!0,allowTaint:!0,backgroundColor:null}),o=`Kartu_Member_TokoPutri_${(V?.name||"Pelanggan").replace(/[^a-zA-Z0-9]/g,"_")}.png`,r=a.toDataURL("image/png",1);if(window.AndroidNativeApp&&typeof window.AndroidNativeApp.saveOrShareFile=="function")window.AndroidNativeApp.saveOrShareFile(r,o,"image/png");else{const i=document.createElement("a");i.download=o,i.href=r,document.body.appendChild(i),i.click(),document.body.removeChild(i)}typeof window.showToast=="function"&&window.showToast("Kartu Member Berhasil Disimpan ke Galeri! 🎉")}catch(a){console.error("Gagal menyimpan kartu member:",a),typeof window.showToast=="function"&&window.showToast("Gagal menyimpan kartu. Silakan coba kembali.")}}},Es=()=>{const e=l("reward-catalog-container");if(!e)return;const t=u.store.showRewardCatalog!==!1&&u.store.showRewardCatalog!=="false";t&&typeof window.attachRewardsRealtime=="function"&&!window.unsubRewardsRealtime&&window.attachRewardsRealtime();const a=(u.rewards||[]).filter(o=>o.isActive!=="false"&&o.isActive!==!1);if(!t||a.length===0){e.classList.add("hidden"),e.innerHTML="";return}e.classList.remove("hidden");let s=`
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
                        <img loading="lazy" src="${m(o.img)}" alt="${m(o.name)}" class="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105" onerror="this.onerror=null;this.src='https://placehold.co/400?text=Hadiah'">
                        <div class="absolute top-1 left-1 bg-rose-500 text-white text-[7px] sm:text-[8px] font-bold px-1.5 py-0.5 rounded-md shadow-2xs uppercase tracking-wider"><i class="fa-solid fa-gift mr-0.5"></i>Gratis</div>
                        <div class="absolute top-1 right-1 bg-[var(--color-primary)] text-white text-[7px] sm:text-[8px] font-bold px-1.5 py-0.5 rounded-md shadow-2xs border border-white/20">${parseFloat(o.pointsCost||o.pointsRequired)||0} Poin</div>
                    </div>
                    <div class="w-full h-3.5 shrink-0"></div>
                    <div class="h-7 w-full px-0.5 flex flex-col justify-center items-center relative z-0 shrink-0 mb-0.5">
                        <h4 class="text-[9px] sm:text-[10px] font-bold text-white leading-tight line-clamp-2 uppercase tracking-wider text-center drop-shadow-xs">${m(o.name)}</h4>
                    </div>
                </div>
            </div>`).join("")}
    </div>`;e.innerHTML=s};let xt=null;const Ls=()=>{clearTimeout(xt),xt=setTimeout(async()=>{const t=(window.normalizeWA||(r=>(r||"").replace(/\D/g,"").replace(/^0/,"62")))(N("cust-wa")),a=l("member-status-banner");if(!a)return;if(!t||t.length<10){T(a),T("payment-option-tempo"),Q(null),se(null);const r=document.querySelector('input[name="payment"][value="tempo"]');if(r&&r.checked){const i=document.querySelector('input[name="payment"][value="transfer"]')||document.querySelector('input[name="payment"][value="cashier"]');i&&(i.checked=!0,typeof window.togglePaymentDetails=="function"&&window.togglePaymentDetails())}return}const s=r=>{const i=parseFloat(r.points)||0,n=qe(i);a.className="mt-3 p-3 sm:p-4 rounded-2xl bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 text-white border border-amber-400/40 shadow-xl relative overflow-hidden flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3",a.innerHTML=`
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
                            <span>${m(r.name||"Pelanggan")}</span>
                            <span class="text-[9px] font-normal text-slate-400">(Member Resmi)</span>
                        </p>
                    </div>
                </div>
                <button type="button" onclick="openMemberModal()" class="relative z-10 w-full sm:w-auto shrink-0 bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-slate-950 text-[10px] font-black uppercase tracking-wider px-3.5 py-2.5 rounded-xl shadow-md active:scale-95 transition-all flex items-center justify-center gap-1.5 cursor-pointer">
                    <i class="fa-solid fa-wallet"></i> Buka Kartu Member
                </button>`,q(a),q("payment-option-tempo")},o=te.get(t);if(o&&Date.now()-o.timestamp<Ss){if(o.data)Q(o.data),s(o.data);else{Q(null),se(null),T(a),T("payment-option-tempo");const r=document.querySelector('input[name="payment"][value="tempo"]');if(r&&r.checked){const i=document.querySelector('input[name="payment"][value="transfer"]')||document.querySelector('input[name="payment"][value="cashier"]');i&&(i.checked=!0,typeof window.togglePaymentDetails=="function"&&window.togglePaymentDetails())}}return}try{const r=await C.collection("freshmart").doc("cms_data").collection("customers").doc(t).get();if(r.exists){const i=r.data();te.set(t,{data:i,timestamp:Date.now()}),Q(i),s(i)}else{te.set(t,{data:null,timestamp:Date.now()}),Q(null),se(null),T(a),T("payment-option-tempo");const i=document.querySelector('input[name="payment"][value="tempo"]');if(i&&i.checked){const n=document.querySelector('input[name="payment"][value="transfer"]')||document.querySelector('input[name="payment"][value="cashier"]');n&&(n.checked=!0,typeof window.togglePaymentDetails=="function"&&window.togglePaymentDetails())}}}catch{}},500)},Is=()=>{if(!V)try{const s=localStorage.getItem("freshmart_current_member");if(s){const o=JSON.parse(s);o&&(o.id||o.phone||o.name)&&Q(o)}}catch{}const e=V?.phone||V?.id||localStorage.getItem("freshmart_member_wa");if(e){let s=e.toString().replace(/\D/g,"");s.startsWith("0")?s="62"+s.substring(1):s.startsWith("62")||(s="62"+s),C.collection("freshmart").doc("cms_data").collection("customers").doc(s).get().then(async o=>{if(o.exists){let r=o.data();if((parseFloat(r.points)||0)===0){const n=await nt(s,r.name);n&&(r=n)}te.set(s,{data:r,timestamp:Date.now()}),Q(r);try{localStorage.setItem("freshmart_current_member",JSON.stringify(r)),localStorage.setItem("freshmart_member_wa",s)}catch{}document.getElementById("member-modal-body")&&he()}else{te.set(s,{data:null,timestamp:Date.now()}),Q(null);try{localStorage.removeItem("freshmart_current_member"),localStorage.removeItem("freshmart_member_wa")}catch{}document.getElementById("member-modal-body")&&he()}}).catch(()=>{})}typeof window.attachRewardsRealtime=="function"&&!window.unsubRewardsRealtime&&window.attachRewardsRealtime();let t=document.getElementById("member-modal");t||(t=document.createElement("div"),t.id="member-modal",t.className="fixed inset-0 z-[115] bg-slate-900/60 flex items-end sm:items-center justify-center p-0 sm:p-5 backdrop-blur-xs",t.onclick=s=>{s.target===t&&Ft()},document.body.appendChild(t));const a=t.style.display!=="none"&&t.style.opacity==="1";t.innerHTML=`
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
        </div>`,he(),t.style.opacity="0",t.style.display="flex",requestAnimationFrame(()=>{t.style.transition="opacity 0.25s ease",t.style.opacity="1"}),!a&&typeof window.pushModalHistory=="function"&&window.pushModalHistory("member")},he=()=>{const e=(u.rewards||[]).filter(o=>o.isActive!=="false"&&o.isActive!==!1),t=V&&parseFloat(V.points)||0,a=qe(t),s=e.length?e.map(o=>{const r=(parseFloat(o.stock)||0)>0,i=V&&t>=(parseFloat(o.pointsCost)||0)&&r,n=oe&&oe.id===o.id;return`
        <div class="flex items-center gap-3 p-3.5 rounded-2xl border ${n?"border-[var(--color-primary)] bg-[rgba(var(--color-primary-rgb),0.06)] dark:bg-[rgba(var(--color-primary-rgb),0.12)] shadow-xs":"border-slate-200 dark:border-slate-700/80 bg-slate-50/70 dark:bg-slate-800/40"} transition-all">
            ${o.img?`<img src="${m(o.img)}" class="w-14 h-14 rounded-xl object-contain bg-white p-1 border border-slate-200 dark:border-slate-700 shrink-0" onerror="this.style.display='none'" loading="lazy">`:'<div class="w-14 h-14 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-300 shrink-0"><i class="fa-solid fa-gift text-xl"></i></div>'}
            <div class="min-w-0 flex-1">
                <p class="text-xs font-bold text-slate-800 dark:text-white truncate">${m(o.name)}</p>
                <p class="text-[11px] font-black text-amber-500 dark:text-amber-400 mt-0.5 flex items-center gap-1">
                    <i class="fa-solid fa-star text-[10px]"></i> ${parseFloat(o.pointsCost)||0} Poin
                </p>
                ${r?"":'<p class="text-[10px] font-bold text-rose-500 mt-0.5">Stok hadiah habis</p>'}
            </div>
            ${V?n?'<button type="button" onclick="deselectReward()" class="shrink-0 bg-rose-500 hover:bg-rose-600 text-white text-[10px] font-bold uppercase px-3 py-2 rounded-xl active:scale-95 transition-all whitespace-nowrap shadow-xs">Batal</button>':`<button type="button" ${i?"":"disabled"} onclick="selectReward(${o.id})" class="shrink-0 ${i?"primary-bg hover:opacity-90 text-white active:scale-95 shadow-xs":"bg-slate-200 dark:bg-slate-700 text-slate-400 cursor-not-allowed"} text-[10px] font-bold uppercase px-3 py-2 rounded-xl transition-all whitespace-nowrap">Pilih Hadiah</button>`:`<span class="text-[10px] font-bold text-slate-400 uppercase bg-slate-100 dark:bg-slate-800 px-2.5 py-1.5 rounded-lg">${parseFloat(o.pointsCost)||0} Poin</span>`}
        </div>`}).join(""):'<p class="text-[11px] font-bold text-slate-400 text-center py-3">Belum ada program hadiah yang tersedia.</p>';V?_("member-modal-body",`
            <!-- KARTU MEMBER DIGITAL (3D INTERAKTIF) -->
            <div>
                ${gt(V)}
                
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
                            <span class="truncate">${m(o)}</span>
                        </div>`).join("")}
                    </div>
                </div>
            </div>

            <!-- KATALOG REWARD / PENUKARAN HADIAH -->
            <div>
                <p class="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-2.5">Katalog Hadiah yang Dapat Ditukar</p>
                <div class="space-y-2.5">${s}</div>
            </div>

            ${oe?`<div class="bg-[rgba(var(--color-primary-rgb),0.06)] dark:bg-[rgba(var(--color-primary-rgb),0.12)] border border-[var(--color-primary)]/30 rounded-xl p-3.5 text-[11px] font-bold text-[var(--color-primary)] flex items-center gap-2"><i class="fa-solid fa-gift text-base shrink-0"></i><span>Hadiah "<b>${m(oe.name)}</b>" telah dipilih dan akan otomatis diproses saat pesanan Anda selesai di checkout.</span></div>`:""}
        `):_("member-modal-body",`
            <!-- PREVIEW KARTU CONTOH (MEMIKAT PELANGGAN) -->
            <div class="opacity-90">
                ${gt({name:"NAMA ANDA",phone:"81234567890",points:0})}
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
        `)},Fs=async()=>{const e=document.getElementById("member-lookup-input"),t=document.getElementById("member-lookup-result");if(!e||!t)return;let a=e.value.replace(/\D/g,"");if(!a||a.length<9){t.className="text-xs font-bold text-rose-500 p-2.5 bg-rose-50 dark:bg-rose-900/20 rounded-xl",t.textContent="Masukkan minimal 9 digit nomor WhatsApp!",t.classList.remove("hidden");return}a.startsWith("0")?a="62"+a.substring(1):a.startsWith("62")||(a="62"+a),t.className="text-xs font-bold text-[var(--color-primary)] p-2.5 primary-bg-soft rounded-xl",t.textContent="Memuat data kartu member...",t.classList.remove("hidden");try{const s=await C.collection("freshmart").doc("cms_data").collection("customers").doc(a).get();if(s.exists){let o=s.data();if((parseFloat(o.points)||0)===0){const r=await nt(a,o.name);r&&(o=r)}te.set(a,{data:o,timestamp:Date.now()}),Q(o);try{localStorage.setItem("freshmart_current_member",JSON.stringify(o)),localStorage.setItem("freshmart_member_wa",a)}catch{}he(),typeof window.showToast=="function"&&window.showToast(`Selamat datang kembali, ${o.name||"Pelanggan"}! 💳`)}else{t.className="text-xs font-bold text-amber-700 dark:text-amber-300 p-3.5 bg-amber-50 dark:bg-amber-900/20 rounded-xl leading-relaxed border border-amber-200 dark:border-amber-800/40 space-y-1.5";const o=(u.store&&u.store.wa||"").replace(/\D/g,""),r=o?`https://wa.me/${o}?text=Halo%20Admin%20Toko%20Putri,%20saya%20ingin%20mendaftarkan%20nomor%20saya%20(${a})%20sebagai%20Member%20Resmi.`:"#";t.innerHTML=`
                <div class="flex items-center gap-1.5 text-amber-800 dark:text-amber-200 font-extrabold text-[11px]">
                    <i class="fa-solid fa-circle-info text-amber-500"></i>
                    <span>Nomor Belum Terdaftar sebagai Member Resmi</span>
                </div>
                <p class="text-[11px] font-medium text-slate-600 dark:text-slate-300 leading-normal">
                    Nomor <b>+${m(a)}</b> saat ini tercatat sebagai <b>Pelanggan Umum</b>. Fitur Poin Hadiah dan fasilitas pembayaran <b>Cash Tempo</b> hanya dapat digunakan setelah nomor Anda dikonfirmasi & disimpan oleh Admin Toko di database CMS.
                </p>
                ${o?`
                <div class="pt-1">
                    <a href="${r}" target="_blank" class="inline-flex items-center gap-1.5 text-[10px] font-bold text-emerald-600 dark:text-emerald-400 hover:underline">
                        <i class="fa-brands fa-whatsapp text-emerald-500"></i> Hubungi Admin untuk Pendaftaran Member
                    </a>
                </div>`:""}
            `}}catch{t.className="text-xs font-bold text-rose-500 p-2.5 bg-rose-50 dark:bg-rose-900/20 rounded-xl",t.textContent="Gagal mengecek data. Silakan periksa koneksi internet Anda."}},_s=e=>{const t=(u.rewards||[]).find(s=>s.id===e);if(!t)return;if((parseFloat(V?.points)||0)<(parseFloat(t.pointsCost)||0)){typeof window.showToast=="function"&&window.showToast("Poin Anda belum cukup untuk hadiah ini!");return}if((parseFloat(t.stock)||0)<=0){typeof window.showToast=="function"&&window.showToast("Maaf, stok hadiah ini sedang kosong!");return}se({id:t.id,name:t.name,pointsCost:parseFloat(t.pointsCost)||0}),he(),typeof window.showToast=="function"&&window.showToast(`Hadiah "${t.name}" dipilih! Lanjutkan checkout untuk menukarnya.`)},Bs=()=>{se(null),he()},Ft=(e=!1)=>{const t=document.getElementById("member-modal");if(!t||t.style.display==="none")return;const a=()=>{t.style.opacity="0",t.style.transition="opacity 0.25s ease",setTimeout(()=>{t.style.display="none",t.style.opacity="",t.style.transition=""},250)};typeof window.requestCloseModal=="function"?window.requestCloseModal("member",e,a):a()};window.renderRewardCatalog=Es;window.checkMemberStatus=Ls;window.openMemberModal=Is;window.rMemberModalBody=he;window.lookupMemberPoints=Fs;window.selectReward=_s;window.deselectReward=Bs;window.closeMemberModal=Ft;window.flipMemberCard=$s;window.downloadMemberCard=Rs;window.getMemberTier=qe;window.formatMemberCardNumber=Lt;window.generateBarcodeSVG=It;window.setCurrentMember=Q;window.invalidateMemberCache=Cs;window.reconcilePointsFromOrders=nt;const Ns=()=>{if(u.store.isDeliveryEnabled===!1&&u.store.isPickupEnabled===!1){typeof window.showToast=="function"&&window.showToast("Toko tutup!");return}const e=N("cust-name"),t=(document.querySelector('input[name="delivery-method"]:checked')||{}).value;if(!e||!t){typeof window.showToast=="function"&&window.showToast("Lengkapi form nama!");return}let a=N("cust-wa").replace(/\D/g,"");if(!a||a.length<9){typeof window.showToast=="function"&&window.showToast("Nomor WhatsApp wajib diisi! (min. 9 digit)");return}if(a.startsWith("0")?a="62"+a.substring(1):a.startsWith("62")||(a="62"+a),b.name=e,b.deliveryMethod=t,b.note=N("cust-note"),b.wa=a,t==="delivery"){if(b.address=N("cust-address"),!b.lat||!b.lng){const o=l("cust-maps-input")?.value;o&&typeof window.handleCustomerMapsInput=="function"&&window.handleCustomerMapsInput(o)}if(!b.address||!b.lat||!b.lng){typeof window.showToast=="function"&&window.showToast("Alamat & GPS wajib!");return}const s=typeof window.getDist=="function"?window.getDist:()=>0;b.distance=s(parseFloat(u.store.lat||0),parseFloat(u.store.lng||0),b.lat,b.lng)||0}else b.address="Ambil di Toko",b.distance=0;y&&y.type&&y.type.includes("shipping")&&t!=="delivery"&&H(null),l("voucher-input")&&!y&&(l("voucher-input").value="",T("voucher-msg-container")),typeof window.changeView=="function"&&window.changeView("view-payment")},lt=()=>{J("address-container","hidden",(document.querySelector('input[name="delivery-method"]:checked')||{}).value==="pickup")},_t=()=>{const e=l("tnc-checkbox"),t=l("btn-process-order");!e||!t||(e.checked?t.classList.remove("btn-disabled"):t.classList.add("btn-disabled"))},Bt=()=>{if(!E.length){typeof window.showToast=="function"&&window.showToast("Keranjang belanja kosong!"),typeof window.changeView=="function"&&window.changeView("view-catalog",!0);return}if(!b.name){typeof window.showToast=="function"&&window.showToast("Lengkapi data pengiriman terlebih dahulu!"),typeof window.changeView=="function"&&window.changeView("view-checkout",!0);return}const e=typeof window.getEffP=="function"?window.getEffP:h=>h.price||0,t=E.reduce((h,S)=>h+(parseFloat(e(S))||0)*(parseFloat(S.qty)||0),0);let a=0,s=0,o=0;if(b.deliveryMethod==="delivery"&&(a=Math.ceil((parseFloat(b.distance)||0)*(parseFloat(u.store.costPerKm)||0)/500)*500),y&&(y.minPurchase&&parseFloat(y.minPurchase)>0&&t<parseFloat(y.minPurchase)?(H(null),T("voucher-msg-container"),typeof window.showToast=="function"&&window.showToast(`Voucher dibatalkan (min. belanja ${D(y.minPurchase)})`)):y.targetProduct&&!E.some(h=>h.id===parseInt(y.targetProduct))&&(H(null),T("voucher-msg-container"),typeof window.showToast=="function"&&window.showToast("Voucher dibatalkan (produk khusus dihapus)"))),y){let h=t;if(y.targetProduct&&y.targetProduct!==""){const S=parseInt(y.targetProduct);h=E.filter(we=>we.id===S).reduce((we,de)=>we+(parseFloat(e(de))||0)*(parseFloat(de.qty)||0),0)}if(y.type==="shipping_free")s=a;else if(y.type==="shipping_flat")s=parseFloat(y.value)||0;else if(y.type==="percent"){let S=h*((parseFloat(y.value)||0)/100);y.maxDiscount&&parseFloat(y.maxDiscount)>0&&(S=Math.min(S,parseFloat(y.maxDiscount))),o=S}else o=parseFloat(y.value)||0,o=Math.min(o,h)}const r=(u.store.freeShippingMinSpendEnabled===!0||u.store.freeShippingMinSpendEnabled==="true")&&(parseFloat(u.store.freeShippingMinSpendAmount)||0)>0&&t>=(parseFloat(u.store.freeShippingMinSpendAmount)||0)&&b.deliveryMethod==="delivery";r&&(s=a),s=Math.min(s,a),o=Math.min(o,t);const i=Math.max(0,t-o+(a-s)),d=(typeof window.calcTaxDetails=="function"?window.calcTaxDetails:()=>({ppnEnabled:!1,ppnAmount:0,grandTotalAdd:0}))(i),c=d.ppnAmount,g=i+d.grandTotalAdd;F("summary-subtotal",D(t)),J("summary-shipping-row","hidden",b.deliveryMethod!=="delivery");const w=l("summary-discount-row");if(w)if(o>0||s>0){w.classList.remove("hidden");let h="";o>0&&(h+=`<div class="flex justify-between items-center w-full mt-1.5"><p class="text-xs font-bold text-slate-500">Diskon Promo</p><p class="text-[13px] font-bold text-rose-500">-${D(o)}</p></div>`),s>0&&(h+=`<div class="flex justify-between items-center w-full mt-1.5"><p class="text-xs font-bold text-slate-500">${r?"Gratis Ongkir (Promo Belanja)":"Diskon Ongkir"}</p><p class="text-[13px] font-bold text-rose-500">-${D(s)}</p></div>`),w.innerHTML=h}else w.classList.add("hidden");b.deliveryMethod==="delivery"&&(F("summary-shipping",D(a)),F("summary-distance",`(${b.distance.toFixed(1)}km)`)),F("summary-total",D(g)),l("btn-total-preview")&&F("btn-total-preview",D(g));const v=l("summary-ppn-row");v&&(d.ppnEnabled&&c>0?(v.classList.remove("hidden"),d.ppnType==="inclusive"?(F("summary-ppn-label",`Termasuk PPN (${d.ppnRate}%)`),F("summary-ppn",D(c))):(F("summary-ppn-label",`PPN (${d.ppnRate}%)`),F("summary-ppn",`+${D(c)}`))):v.classList.add("hidden")),F("payment-cust-name",b.name||"-"),l("payment-cust-wa")&&(l("payment-cust-wa").textContent=b.wa?"+"+b.wa:"-"),F("payment-cust-method",b.deliveryMethod==="delivery"?`Dikirim (${b.distance.toFixed(1)}km)`:"Ambil di Toko"),F("payment-cust-address",b.address||"-"),_("payment-items-preview",E.map(h=>{const S=h.variantName?`<span class="bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300 px-1.5 py-0.5 rounded-lg text-[9px] font-bold">${m(h.variantName)}</span>`:"",le=h.poTime?`<span class="amber-badge px-1.5 py-0.5 rounded-lg text-[8px] font-bold uppercase">PO ${m(h.poTime)}</span>`:"";return`
        <div class="flex justify-between items-center bg-white dark:bg-slate-800 p-4 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm min-w-0">
            <div class="flex items-center gap-3.5 min-w-0">
                <img loading="lazy" src="${m(h.img)}" alt="${m(h.name)}" class="w-12 h-12 rounded-xl object-cover border border-slate-200 dark:border-slate-700 shrink-0" onerror="this.onerror=null;this.src='https://placehold.co/400?text=No+Image'">
                <div class="min-w-0">
                    <p class="text-sm font-bold text-slate-800 dark:text-white truncate mb-1" title="${m(h.name)}">${m(h.name)}</p>
                    ${h.variantName||h.poTime?`
                    <div class="flex flex-wrap gap-1 mb-1">
                        ${S}
                        ${le}
                    </div>`:""}
                    <p class="text-[11px] text-[var(--color-primary)] font-bold">${parseFloat(h.qty)} ${m(h.unit||"pcs")} x ${D(e(h))}</p>
                </div>
            </div>
            <div class="text-sm font-bold text-slate-900 dark:text-white whitespace-nowrap ml-3 shrink-0">${D(e(h)*parseFloat(h.qty))}</div>
        </div>`}).join("")+(oe?`<div class="flex justify-between items-center bg-[rgba(var(--color-primary-rgb),0.06)] dark:bg-[rgba(var(--color-primary-rgb),0.12)] p-4 rounded-2xl border border-[var(--color-primary)]/30 shadow-sm min-w-0"><div class="flex items-center gap-3.5 min-w-0"><div class="w-12 h-12 rounded-xl bg-[var(--color-primary)] text-white flex items-center justify-center shrink-0"><i class="fa-solid fa-gift"></i></div><div class="min-w-0"><p class="text-sm font-bold text-[var(--color-primary)] truncate">${m(oe.name)}</p><p class="text-[11px] text-[var(--color-primary)] font-bold mt-1"><i class="fa-solid fa-star mr-1"></i>Tukar ${oe.pointsCost} Poin (Gratis)</p></div></div><button type="button" onclick="if(typeof deselectReward==='function') deselectReward(); rPay();" class="text-[10px] font-bold text-rose-500 uppercase shrink-0 ml-3">Batal</button></div>`:"")),b.note?(F("payment-note-text",`"${m(b.note)}"`),q("payment-note-preview")):T("payment-note-preview"),_("dynamic-banks-container",u.banks?.length?u.banks.map(h=>`<div class="bg-white dark:bg-slate-800 p-4 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm"><p class="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">Bank ${m(h.bankName)}</p><p class="text-lg font-bold text-[var(--color-primary)] tracking-wide">${m(h.bankAccount)}</p><p class="text-xs text-slate-500 dark:text-slate-400 font-medium mt-1.5">a.n <span class="font-bold text-slate-700 dark:text-white">${m(h.bankOwner)}</span></p></div>`).join(""):'<div class="bg-rose-50 dark:bg-rose-900/20 border border-rose-200 p-4 rounded-2xl text-center"><p class="text-sm text-rose-500 dark:text-rose-400 font-bold">Rekening belum diatur.</p></div>');const M=l("payment-option-cashier"),G=l("payment-option-cod");if(M&&G){if(b.deliveryMethod==="pickup"){if(q("payment-option-cashier"),T("payment-option-cod"),(document.querySelector('input[name="payment"]:checked')||{}).value==="cod"){const h=document.querySelector('input[value="cashier"]');h&&(h.checked=!0)}}else{T("payment-option-cashier"),q("payment-option-cod");const h=(document.querySelector('input[name="payment"]:checked')||{}).value;if(h==="cashier"||!h){const S=document.querySelector('input[value="cod"]');S&&(S.checked=!0)}}typeof window.togglePaymentDetails=="function"&&window.togglePaymentDetails()}const I=l("tnc-checkbox");I&&(I.checked=!1,_t())},Os=async()=>{if(!l("tnc-checkbox").checked||st)return;if(window.isAdm){typeof window.showToast=="function"&&window.showToast("Anda login sebagai Seller. Logout dulu untuk membuat pesanan.");return}const e=ze("freshmart_last_order");if(e&&Date.now()-parseInt(e)<6e4){typeof window.showToast=="function"&&window.showToast("Tunggu 1 menit untuk pesanan baru!");return}const t=typeof window.getEffP=="function"?window.getEffP:r=>r.price||0,a=typeof window.getEffHpp=="function"?window.getEffHpp:()=>0,s=typeof window.getEffPoin=="function"?window.getEffPoin:()=>0;let o=!1;if(E.forEach(r=>{const i=u.products.find(d=>d.id===r.id);if(!i)return;const n=r.variantName?((i.variants||[]).find(d=>d.name===r.variantName)||{}).price??i.price:i.price;n!==void 0&&Math.abs(r.price-n)>1&&(r.price=n,o=!0),r.poin=s(r)}),o){Ie("freshmart_cart",JSON.stringify(E)),typeof window.renderCart=="function"&&window.renderCart(),Bt(),typeof window.showToast=="function"&&window.showToast("Harga produk telah diperbarui. Periksa kembali sebelum order.");return}ae(!0),z("Proses Pesanan...");try{const r=E.reduce((x,A)=>x+(parseFloat(t(A))||0)*(parseFloat(A.qty)||0),0);let i=0,n=0,d=0;b.deliveryMethod==="delivery"&&(i=Math.ceil((parseFloat(b.distance)||0)*(parseFloat(u.store.costPerKm)||0)/500)*500);const c=u.store.useStock===!0||u.store.useStock==="true";if(c)for(const x of E){const A=u.products.find(P=>P.id===x.id);if(!A)continue;const Y=parseFloat(x.qty)||0;if(x.variantName){const P=(A.variants||[]).find(j=>j.name===x.variantName),R=parseFloat(P&&P.stock!==void 0?P.stock:0);if(R<Y){ae(!1),L(),typeof window.showToast=="function"&&window.showToast(`Stok ${x.name} (${x.variantName}) tidak cukup! Sisa: ${R}`);return}}else{const P=parseFloat(A.stock!==void 0?A.stock:0);if(P<Y){ae(!1),L(),typeof window.showToast=="function"&&window.showToast(`Stok ${x.name} tidak cukup! Sisa: ${P}`);return}}}if(y){let x=r;if(y.targetProduct&&y.targetProduct!==""){const A=parseInt(y.targetProduct);x=E.filter(P=>P.id===A).reduce((P,R)=>P+(parseFloat(t(R))||0)*(parseFloat(R.qty)||0),0)}if(y.minPurchase&&parseFloat(y.minPurchase)>0&&r<parseFloat(y.minPurchase))H(null);else if(y.targetProduct&&y.targetProduct!==""&&x===0)H(null);else if(y.type&&y.type.includes("shipping")&&b.deliveryMethod!=="delivery")H(null);else if(y.type==="shipping_free")n=i;else if(y.type==="shipping_flat")n=parseFloat(y.value)||0;else if(y.type==="percent"){let A=x*((parseFloat(y.value)||0)/100);y.maxDiscount&&parseFloat(y.maxDiscount)>0&&(A=Math.min(A,parseFloat(y.maxDiscount))),d=A}else d=parseFloat(y.value)||0,d=Math.min(d,x)}const g=(u.store.freeShippingMinSpendEnabled===!0||u.store.freeShippingMinSpendEnabled==="true")&&(parseFloat(u.store.freeShippingMinSpendAmount)||0)>0&&r>=(parseFloat(u.store.freeShippingMinSpendAmount)||0)&&b.deliveryMethod==="delivery";g&&(n=i),n=Math.min(n,i),d=Math.min(d,r);const w=Math.max(0,r-d+(i-n)),M=(typeof window.calcTaxDetails=="function"?window.calcTaxDetails:()=>({ppnEnabled:!1,ppnAmount:0,grandTotalAdd:0}))(w),G=M.ppnAmount,I=M.dppAmount,h=w+M.grandTotalAdd,S=(document.querySelector('input[name="payment"]:checked')||{}).value,le=S==="transfer"||S==="qris"||S==="tempo",we=window.buktiGDriveUploaded&&window.buktiPaymentUrl&&!window.buktiPaymentUrl.startsWith("data:");if(le&&!we){if(ae(!1),L(),!window.buktiPaymentFile){typeof window.showToast=="function"&&window.showToast("Upload bukti pembayaran terlebih dahulu!");return}typeof window.showToast=="function"&&window.showToast("Tunggu upload Google Drive selesai, atau coba lagi!");return}const de="ORD-"+Date.now().toString(36).toUpperCase()+"-"+Math.random().toString(36).substring(2,6).toUpperCase();if(window.buktiPaymentFile&&!window.buktiGDriveUploaded)try{z("Upload Bukti ke Google Drive...");const x=await window.uploadBuktiToFirebase(window.buktiPaymentFile,de);if(x&&!x.startsWith("data:"))window.buktiPaymentUrl=x,window.buktiGDriveUploaded=!0;else{ae(!1),L(),typeof window.showToast=="function"&&window.showToast("❌ Upload bukti ke Google Drive gagal. Coba pilih gambar lagi!");return}z("Proses Pesanan...")}catch{ae(!1),L(),typeof window.showToast=="function"&&window.showToast("❌ Gagal upload bukti. Periksa koneksi dan coba lagi!");return}const p={orderId:de,timestamp:Be.firestore.FieldValue.serverTimestamp(),dateString:new Date().toISOString(),customer:b,items:E.map(x=>({...x,qty:parseFloat(x.qty),effectivePrice:t(x),poTime:x.poTime||"",hpp:a(x),poin:s(x)})),payment:{method:S,subtotal:r,shippingCost:i,shippingDiscount:n,productDiscount:d,ppnAmount:G,dppAmount:I,ppnRate:M.ppnEnabled?M.ppnRate:0,ppnType:M.ppnEnabled?M.ppnType:"exclusive",grandTotal:h,isFreeShippingPromo:g||!1},status:"Baru",buktiPayment:window.buktiPaymentUrl||null};if(S==="tempo"){if(!b.wa){ae(!1),L(),typeof window.showToast=="function"&&window.showToast("Pembayaran Cash Tempo hanya untuk Member Resmi terdaftar!");return}const x=document.getElementById("tempo-dp-input");let A=x&&parseFloat(x.value)||0;A>h&&(A=h),p.payment.tempoDp=A,p.payment.tempoBalance=h-A,p.payment.tempoDueDate=Date.now()+30*24*60*60*1e3,p.payment.paymentStatus="hutang"}const B=C.collection("freshmart_orders").doc(de),ce=typeof window.calculateCartPoints=="function"?window.calculateCartPoints(E,u.store):{totalPoints:0,directPoints:0,spendPoints:0},pe=ce.totalPoints;p.pointsEarned=pe,p.pointsBreakdown={direct:ce.directPoints,spend:ce.spendPoints};const Le=C.collection("freshmart").doc("cms_data"),me=b.wa?Le.collection("customers").doc(b.wa):null,Ae=!!oe;let be=null;if(c){const x={};E.forEach(P=>{const R=P.id!=null?P.id.toString():null;if(!R)return;x[R]||(x[R]={main:0,variants:{}});const j=parseFloat(P.qty)||0;P.variantName?x[R].variants[P.variantName]=(x[R].variants[P.variantName]||0)+j:x[R].main+=j});const A=Object.keys(x),Y=A.map(P=>C.collection("freshmart").doc("cms_data").collection("products").doc(P));await C.runTransaction(async P=>{const R=await Promise.all(Y.map(X=>P.get(X))),j=me?await P.get(me):null,ge=!!(j&&j.exists),Se=ge&&Ae?C.collection("freshmart").doc("cms_data").collection("rewards").doc(oe.id.toString()):null,ke=Se?await P.get(Se):null,Z=[];if(R.forEach((X,xe)=>{if(!X.exists)return;const U=X.data(),ee=x[A[xe]];if(ee.main>0){const $=parseFloat(U.stock!==void 0?U.stock:0);$<ee.main&&Z.push(`${U.name} (sisa ${$})`)}Object.keys(ee.variants).forEach($=>{const ue=(U.variants||[]).find(Me=>Me.name===$),Re=parseFloat(ue&&ue.stock!==void 0?ue.stock:0);Re<ee.variants[$]&&Z.push(`${U.name} (${$}, sisa ${Re})`)})}),Z.length)throw new Error("STOK_TIDAK_CUKUP: "+Z.join(", "));let Ve=null,$e=null;if(ge){const X=parseFloat(j.data().points)||0;let xe=X;if(Ae){if(!ke||!ke.exists)throw new Error("HADIAH_TIDAK_DITEMUKAN");const U=ke.data();if(X<(parseFloat(U.pointsCost)||0))throw new Error("POIN_TIDAK_CUKUP");if((parseFloat(U.stock)||0)<=0)throw new Error("STOK_HADIAH_HABIS");Ve=(parseFloat(U.stock)||0)-1,xe-=parseFloat(U.pointsCost)||0,p.claimedReward={id:U.id,name:U.name,pointsCost:parseFloat(U.pointsCost)||0,status:"pending",note:""}}xe+=pe,$e=xe,p.pointsEarned=pe,p.customerPhone=b.wa,p.finalMemberPoints=$e,p.customerType="Member"}else{if(S==="tempo")throw new Error("TEMPO_KHUSUS_MEMBER");if(Ae)throw new Error("MEMBER_TIDAK_DITEMUKAN");p.pointsEarned=0,p.pointsBreakdown={direct:0,spend:0},p.finalMemberPoints=null,p.customerType="Pelanggan Umum"}if(R.forEach((X,xe)=>{if(!X.exists)return;const U=A[xe],ee=x[U],$=JSON.parse(JSON.stringify(X.data())),ue={};ee.main>0&&($.stock=Math.max(0,(parseFloat($.stock)||0)-ee.main),ue.stock=$.stock,$.stock===0&&($.isActive="false",ue.isActive="false"),$.totalSold=(parseFloat($.totalSold)||0)+ee.main,ue.totalSold=$.totalSold),Object.keys(ee.variants).length>0&&$.variants&&(Object.keys(ee.variants).forEach(Me=>{const Pe=($.variants||[]).findIndex(ea=>ea.name===Me);Pe>-1&&($.variants[Pe].stock=Math.max(0,(parseFloat($.variants[Pe].stock)||0)-ee.variants[Me]),$.variants[Pe].stock===0&&($.variants[Pe].isActive=!1),$.variants[Pe].totalSold=(parseFloat($.variants[Pe].totalSold)||0)+ee.variants[Me])}),ue.variants=$.variants);const Re=u.products.findIndex(Me=>Me.id.toString()===U);Re>-1&&(u.products[Re]=$),P.update(Y[xe],ue)}),P.set(B,p),ge&&me&&$e!==null){const X={points:$e,name:b.name||j.data().name||"Pelanggan Setia",lastOrderAt:Date.now()};P.set(me,X,{merge:!0}),be=$e}Ve!==null&&P.set(Se,{stock:Ve},{merge:!0}),P.update(Le,{lastUpdate:Be.firestore.FieldValue.increment(1),updateType:"stock_change",updatedProductIds:A})}),u.lastUpdate=(parseInt(ze("freshmart_last_update"))||u.lastUpdate||0)+1,Ie("freshmart_last_update",u.lastUpdate.toString()),Ie("freshmart_products",JSON.stringify(u.products))}else if(me)await C.runTransaction(async x=>{const A=await x.get(me),Y=A.exists,P=Y&&Ae?C.collection("freshmart").doc("cms_data").collection("rewards").doc(oe.id.toString()):null,R=P?await x.get(P):null;let j=null,ge=null;if(Y){const Se=parseFloat(A.data().points)||0;let ke=Se;if(Ae){if(!R||!R.exists)throw new Error("HADIAH_TIDAK_DITEMUKAN");const Z=R.data();if(Se<(parseFloat(Z.pointsCost)||0))throw new Error("POIN_TIDAK_CUKUP");if((parseFloat(Z.stock)||0)<=0)throw new Error("STOK_HADIAH_HABIS");j=(parseFloat(Z.stock)||0)-1,ke-=parseFloat(Z.pointsCost)||0,p.claimedReward={id:Z.id,name:Z.name,pointsCost:parseFloat(Z.pointsCost)||0,status:"pending",note:""}}ke+=pe,ge=ke,p.pointsEarned=pe,p.customerPhone=b.wa,p.finalMemberPoints=ge,p.customerType="Member",x.set(me,{points:ge,name:b.name||A.data().name||"Pelanggan Setia",lastOrderAt:Date.now()},{merge:!0}),be=ge,j!==null&&x.set(P,{stock:j},{merge:!0})}else{if(S==="tempo")throw new Error("TEMPO_KHUSUS_MEMBER");if(Ae)throw new Error("MEMBER_TIDAK_DITEMUKAN");p.pointsEarned=0,p.pointsBreakdown={direct:0,spend:0},p.finalMemberPoints=null,p.customerType="Pelanggan Umum"}x.set(B,p)});else{if(p.pointsEarned=0,p.pointsBreakdown={direct:0,spend:0},p.finalMemberPoints=null,p.customerType="Pelanggan Umum",S==="tempo")throw new Error("TEMPO_KHUSUS_MEMBER");await B.set(p)}O.unshift({orderId:de,date:new Date().toISOString(),total:h,itemCount:E.reduce((x,A)=>x+parseFloat(A.qty),0),status:"Baru",pointsEarned:p.pointsEarned||0,claimedReward:p.claimedReward||null,finalMemberPoints:be,customerType:p.customerType||"Pelanggan Umum"}),Oe(O);try{localStorage.setItem("freshmart_my_orders",JSON.stringify(O)),localStorage.setItem("freshmart_last_order",Date.now().toString())}catch{}if(typeof analytics<"u"&&analytics.logEvent("purchase",{transaction_id:de,value:h,currency:"IDR"}),b.wa&&be!==null){const x={id:b.wa,phone:b.wa,name:b.name||"Pelanggan Setia",points:be};Q(x);try{localStorage.setItem("freshmart_current_member",JSON.stringify(x)),localStorage.setItem("freshmart_member_wa",b.wa)}catch{}typeof window.invalidateMemberCache=="function"&&window.invalidateMemberCache(b.wa)}else{Q(null);try{localStorage.removeItem("freshmart_current_member")}catch{}}p.claimedReward&&be!==null?typeof window.showToast=="function"&&window.showToast(`✅ Hadiah "${p.claimedReward.name}" berhasil ditukar! Sisa poin Anda: ${be}`):be!==null&&pe>0?typeof window.showToast=="function"&&window.showToast(`✅ Pesanan berhasil dikirim ke admin! (+${pe} Poin Member didapat!)`):typeof window.showToast=="function"&&window.showToast("✅ Pesanan berhasil dikirim ke admin!"),setTimeout(()=>{St([]),K("cust-name",""),K("cust-address",""),K("cust-maps-input",""),K("cust-note",""),K("cust-wa",""),window.buktiPaymentUrl=null,window.buktiPaymentFile=null,window.buktiGDriveUploaded=!1;const x=l("bukti-preview-wrap"),A=l("bukti-placeholder");x&&x.classList.add("hidden"),A&&A.classList.remove("hidden"),T("bukti-uploading"),T("bukti-success"),T("bukti-gdrive-error");const Y=l("bukti-file-input");Y&&(Y.value=""),Dt({name:"",address:"",lat:null,lng:null,deliveryMethod:"delivery",distance:0,note:"",wa:""}),H(null),se(null);const P=l("member-status-banner");P&&T(P),T("payment-option-tempo"),l("voucher-input")&&(l("voucher-input").value=""),T("voucher-msg-container"),T("location-status"),l("btn-location")&&q("btn-location");const R=document.querySelector('input[name="delivery-method"][value="delivery"]');R&&(R.checked=!0,lt());const j=document.querySelector('input[name="payment"][value="transfer"]');j&&(j.checked=!0,typeof window.togglePaymentDetails=="function"&&window.togglePaymentDetails()),typeof window.updCart=="function"&&window.updCart(),typeof window.renderCart=="function"&&window.renderCart(),typeof window.changeView=="function"&&window.changeView("view-catalog"),typeof window.showToast=="function"&&window.showToast("Pesanan Dibuat! 🎉")},2e3)}catch(r){const i=r.message||"Error";i.startsWith("STOK_TIDAK_CUKUP:")?typeof window.showToast=="function"&&window.showToast("Maaf, stok berubah: "+i.replace("STOK_TIDAK_CUKUP: ","")):i==="TEMPO_KHUSUS_MEMBER"?typeof window.showToast=="function"&&window.showToast("Pembayaran Cash Tempo hanya untuk Member Resmi yang telah didaftarkan Admin!"):i==="POIN_TIDAK_CUKUP"?(typeof window.showToast=="function"&&window.showToast("Maaf, poin Anda ternyata tidak cukup untuk hadiah ini. Silakan cek lagi."),se(null)):i==="STOK_HADIAH_HABIS"?(typeof window.showToast=="function"&&window.showToast("Maaf, stok hadiah yang dipilih baru saja habis. Silakan pilih hadiah lain."),se(null)):i==="HADIAH_TIDAK_DITEMUKAN"?(typeof window.showToast=="function"&&window.showToast("Hadiah yang dipilih sudah tidak tersedia. Silakan pilih ulang."),se(null)):i==="MEMBER_TIDAK_DITEMUKAN"?(typeof window.showToast=="function"&&window.showToast("Data member tidak ditemukan, klaim hadiah dibatalkan. Pesanan bisa dicoba lagi tanpa hadiah."),se(null)):typeof window.showToast=="function"&&window.showToast(r.code==="resource-exhausted"?"Quota Server Penuh!":"Gagal proses: "+i)}finally{ae(!1),L()}};window.validateAndGoToPayment=Ns;window.toggleDeliveryMethod=lt;window.toggleOrderButton=_t;window.rPay=Bt;window.processOrder=Os;window.getLocation=()=>{if(!navigator.geolocation)return f("GPS tidak didukung");l("btn-location").innerHTML='<i class="fa-solid fa-spinner fa-spin text-sm"></i>',navigator.geolocation.getCurrentPosition(e=>{b.lat=e.coords.latitude,b.lng=e.coords.longitude,T("btn-location"),q("location-status"),l("location-status").classList.add("flex"),f("GPS Didapatkan")},e=>{l("btn-location").innerHTML='<i class="fa-solid fa-location-crosshairs text-[var(--color-primary)]"></i> Set GPS Maps',f("Gagal akses GPS")},{enableHighAccuracy:!0,timeout:15e3})};window.handleCustomerMapsInput=e=>{const t=typeof window.parseGeoCoordinates=="function"?window.parseGeoCoordinates:null,a=t?t(e):null;if(a){b.lat=parseFloat(a.lat),b.lng=parseFloat(a.lng),T("btn-location"),q("location-status");const s=l("location-status");return s&&(s.classList.add("flex"),s.innerHTML=`
                <i class="fa-solid fa-circle-check shrink-0 text-lg primary-text"></i>
                <div class="min-w-0">
                    <span class="text-[10px] font-bold uppercase leading-tight tracking-wide primary-text block">Koordinat Berhasil Disematkan!</span>
                    <span class="text-[9px] text-slate-500 dark:text-slate-400 font-mono">${a.lat}, ${a.lng}</span>
                </div>
            `),f("Titik lokasi Maps pembeli berhasil disematkan!"),typeof window.rPay=="function"&&window.rPay(),!0}return!1};window.pasteCustomerMapsInput=async()=>{const e=l("cust-maps-input");if(e){try{if(navigator.clipboard&&navigator.clipboard.readText){const t=await navigator.clipboard.readText();if(t){e.value=t,window.handleCustomerMapsInput(t)||f("Format tidak dikenali! Tempel koordinat: Lat, Lng atau link Maps");return}}}catch{}e.focus(),f("Silakan tekan Ctrl+V atau tahan untuk menempel")}};const js=()=>{const e=u.store.isDeliveryEnabled!==!1,t=u.store.isPickupEnabled!==!1;J("delivery-option-container","hidden",!e),J("pickup-option-container","hidden",!t),J("no-delivery-warning","hidden",e||t),J("delivery-methods-grid","hidden",!(e||t));const a=l("btn-checkout-next");if(a)if(e||t){a.removeAttribute("disabled"),a.classList.remove("opacity-50");const o=(b.deliveryMethod||"delivery")==="pickup"&&t?"pickup":e?"delivery":"pickup",r=document.querySelector(`input[value="${o}"]`);r&&(r.checked=!0)}else a.setAttribute("disabled","true"),a.classList.add("opacity-50");lt()};window.rChck=js;window.buktiPaymentUrl=null;window.buktiPaymentFile=null;window.buktiGDriveUploaded=!1;window.compressImageForUpload=(e,t=1600,a=.82)=>new Promise(s=>{const o=new FileReader;o.readAsDataURL(e),o.onload=r=>{const i=new Image;i.onload=()=>{let{width:n,height:d}=i;(n>t||d>t)&&(n>d?(d=Math.round(d*t/n),n=t):(n=Math.round(n*t/d),d=t));const c=document.createElement("canvas");c.width=n,c.height=d,c.getContext("2d").drawImage(i,0,0,n,d),c.toBlob(g=>{if(!g)return s(e);s(new File([g],e.name,{type:"image/jpeg",lastModified:Date.now()}))},"image/jpeg",a)},i.onerror=()=>s(e),i.src=r.target.result},o.onerror=()=>s(e)});window._doSingleGDriveUpload=async(e,t)=>{const a=new FileReader;return new Promise(s=>{a.readAsDataURL(e),a.onload=async()=>{try{const o=a.result.split(",")[1],r=(e.name||"bukti.jpg").replace(/[^a-zA-Z0-9.]/g,"_"),i={name:"BUKTI_"+t+"_"+Date.now()+"_"+r,mimeType:e.type||"image/jpeg",data:o,token:GAS_SECRET_TOKEN},n=await fetch(GAS_UPLOAD_URL,{method:"POST",body:JSON.stringify(i),headers:{"Content-Type":"text/plain;charset=utf-8"},redirect:"follow"});if(!n.ok)return console.warn("GDrive upload HTTP error:",n.status),s(null);const d=await n.text();let c;try{c=JSON.parse(d)}catch{return console.warn("GDrive response parse error"),s(null)}c&&c.status==="success"&&c.url?s(je(c.url)):(console.warn("GDrive upload gagal:",c&&c.message),s(null))}catch(o){console.warn("GDrive upload exception:",o),s(null)}},a.onerror=()=>s(null)})};window.uploadBuktiToGDrive=async(e,t)=>{if(!e)return null;if(!GAS_UPLOAD_URL||GAS_UPLOAD_URL.includes("ISI_DENGAN"))return console.error("GAS_UPLOAD_URL belum dikonfigurasi!"),null;let a=e;try{a=await window.compressImageForUpload(e)}catch{}const s=2,o=3e4;for(let r=1;r<=s;r++){const i=l("bukti-uploading-text");i&&(i.textContent=r>1?`Mencoba ulang ke Google Drive... (${r}/${s})`:"Mengupload ke Google Drive...");try{const n=await Promise.race([window._doSingleGDriveUpload(a,t),new Promise((d,c)=>setTimeout(()=>c(new Error("timeout")),o))]);if(n)return n}catch(n){console.warn(`Percobaan upload ${r} gagal:`,n.message)}r<s&&await new Promise(n=>setTimeout(n,1500*r))}return null};window.handleBuktiUpload=async e=>{const t=e.target.files[0];if(!t)return;if(!t.type.startsWith("image/"))return f("Hanya file gambar yang diizinkan!");if(t.size>5*1024*1024)return f("Ukuran gambar max 5MB!");window.buktiPaymentFile=t,window.buktiPaymentUrl=null,window.buktiGDriveUploaded=!1;const a=new FileReader;a.onload=i=>{const n=l("bukti-preview-img"),d=l("bukti-preview-wrap"),c=l("bukti-placeholder");n&&(n.src=i.target.result),d&&d.classList.remove("hidden"),c&&c.classList.add("hidden")},a.readAsDataURL(t),T("bukti-success"),T("bukti-gdrive-error");const s=l("bukti-uploading");s&&(s.classList.remove("hidden"),s.style.display="flex");const o="TEMP_"+Date.now().toString(36).toUpperCase(),r=await window.uploadBuktiToGDrive(t,o);if(T("bukti-uploading"),r){window.buktiPaymentUrl=r,window.buktiGDriveUploaded=!0;const i=l("bukti-success"),n=l("bukti-success-text"),d=l("bukti-storage-info");n&&(n.textContent="Bukti berhasil disimpan!"),d&&(d.textContent="(tersimpan di Google Drive ✓)"),i&&(i.classList.remove("hidden"),i.style.display="flex"),T("bukti-gdrive-error")}else{window.buktiPaymentUrl=null,window.buktiGDriveUploaded=!1;const i=l("bukti-gdrive-error");i&&(i.classList.remove("hidden"),i.style.display="flex"),T("bukti-success"),f("❌ Upload ke Google Drive gagal. Coba lagi!")}};window.retryBuktiUpload=async()=>{if(!window.buktiPaymentFile)return f("Pilih gambar terlebih dahulu!");T("bukti-gdrive-error"),T("bukti-success");const e=l("bukti-uploading");e&&(e.classList.remove("hidden"),e.style.display="flex");const t="RETRY_"+Date.now().toString(36).toUpperCase(),a=await window.uploadBuktiToGDrive(window.buktiPaymentFile,t);if(T("bukti-uploading"),a){window.buktiPaymentUrl=a,window.buktiGDriveUploaded=!0;const s=l("bukti-success"),o=l("bukti-success-text"),r=l("bukti-storage-info");o&&(o.textContent="Bukti berhasil disimpan!"),r&&(r.textContent="(tersimpan di Google Drive ✓)"),s&&(s.classList.remove("hidden"),s.style.display="flex"),f("✅ Upload berhasil!")}else{const s=l("bukti-gdrive-error");s&&(s.classList.remove("hidden"),s.style.display="flex"),f("❌ Masih gagal. Periksa koneksi internet Anda.")}};window.uploadBuktiToFirebase=async(e,t)=>{if(window.buktiGDriveUploaded&&window.buktiPaymentUrl)return window.buktiPaymentUrl;if(!e)return null;const a=await window.uploadBuktiToGDrive(e,t);return a&&(window.buktiPaymentUrl=a,window.buktiGDriveUploaded=!0),a};window.togglePaymentDetails=()=>{const e=(document.querySelector('input[name="payment"]:checked')||{}).value;J("detail-transfer","hidden",e!=="transfer"),J("detail-qris","hidden",e!=="qris"),J("detail-cashier","hidden",e!=="cashier"),J("detail-cod","hidden",e!=="cod"),J("detail-tempo","hidden",e!=="tempo"),e==="tempo"&&window.calculateTempoBalance(),J("bukti-payment-section","hidden",!(e==="transfer"||e==="qris"||e==="tempo"))};window.calculateTempoBalance=()=>{const e=document.getElementById("tempo-dp-input");let t=parseFloat(e?.value)||0;t<0&&(t=0,e&&(e.value=0));let a=E.reduce((G,I)=>G+(parseFloat(getEffP(I))||0)*(parseFloat(I.qty)||0),0),s=0,o=0,r=0;if(b.deliveryMethod==="delivery"&&(s=Math.ceil((parseFloat(b.distance)||0)*(parseFloat(u.store.costPerKm)||0)/500)*500),vouch){let G=a;if(vouch.targetProduct&&vouch.targetProduct!==""){const I=parseInt(vouch.targetProduct);G=E.filter(S=>S.id===I).reduce((S,le)=>S+(parseFloat(getEffP(le))||0)*(parseFloat(le.qty)||0),0)}if(vouch.type==="shipping_free")r=s;else if(vouch.type==="shipping_flat")r=parseFloat(vouch.value)||0;else if(vouch.type==="percent"){let I=G*((parseFloat(vouch.value)||0)/100);vouch.maxDiscount&&parseFloat(vouch.maxDiscount)>0&&(I=Math.min(I,parseFloat(vouch.maxDiscount))),o=I}else o=parseFloat(vouch.value)||0,o=Math.min(o,G)}(u.store.freeShippingMinSpendEnabled===!0||u.store.freeShippingMinSpendEnabled==="true")&&(parseFloat(u.store.freeShippingMinSpendAmount)||0)>0&&a>=(parseFloat(u.store.freeShippingMinSpendAmount)||0)&&b.deliveryMethod==="delivery"&&(r=s),r=Math.min(r,s),o=Math.min(o,a);let n=Math.max(0,a-o),d=Math.max(0,s-r);const c=window.calcTaxDetails(n+d);let g=0;window.useMemberPoints&&currentMember&&(g=Math.min(n+d+c.grandTotalAdd,parseFloat(currentMember.points)||0));let w=n+d+c.grandTotalAdd-g;t>w&&(t=w,e&&(e.value=t));let v=w-t;const M=document.getElementById("tempo-balance-display");M&&(M.innerText=D(v))};let Ze=[];const Ge=()=>{try{localStorage.setItem("freshmart_my_orders",JSON.stringify(O))}catch(e){console.warn("[MyOrders] Gagal menyimpan ke localStorage:",e)}},Us=()=>{try{const e=localStorage.getItem("freshmart_my_orders");if(e){const t=JSON.parse(e);Array.isArray(t)&&t.length>0&&Oe(t)}}catch(e){console.warn("[MyOrders] Gagal memuat dari localStorage:",e)}return O},Nt=()=>{Ze.forEach(e=>{try{typeof e=="function"&&e()}catch{}}),Ze=[]},Ot=()=>{Nt(),O.filter(a=>{const s=a.status==="Selesai"||a.status==="Dibatalkan",o=a.claimedReward&&(a.claimedReward.status==="Menunggu Persetujuan"||!a.claimedReward.status);return!s||o}).slice(0,10).forEach(a=>{const s=a.orderId;if(!s)return;const o=C.collection("freshmart_orders").doc(s).onSnapshot(r=>{if(!r.exists)return;const i=r.data(),n=i.status,d=i.claimedReward?i.claimedReward.status:null,c=i.claimedReward&&i.claimedReward.note||"";let g=!1,w="";const v=O.find(M=>M.orderId===s);if(v){if(n&&v.status!==n){const M=v.status;v.status=n,g=!0,M!==void 0&&(w=`Pesanan #${s.split("-").pop()} kini: ${n}`)}v.claimedReward&&d&&(v.claimedReward.status!==d||v.claimedReward.note!==c)&&(v.claimedReward.status=d,v.claimedReward.note=c,g=!0),g&&(Ge(),window.curViewName==="view-orders"&&Ee(),w&&f(w))}},r=>{console.warn("[MyOrders Realtime] Snapshot error:",r.message)});Ze.push(o)})},Ee=async()=>{if(Us(),!O.length){q("orders-empty-state"),T("btn-clear-orders"),q("spacer-orders"),_("orders-items-container","");return}T("orders-empty-state"),q("btn-clear-orders"),T("spacer-orders"),Ot(),_("orders-items-container",O.map((e,t)=>{const a=new Date(e.date).toLocaleDateString("id-ID",{day:"numeric",month:"short",year:"numeric"});let s="text-slate-500 border-slate-200 bg-slate-50 dark:bg-slate-800 dark:border-slate-700",o="fa-clock";return e.status==="Baru"?(s="text-rose-600 border-rose-200 bg-rose-50 dark:bg-rose-900/30 dark:border-rose-800 dark:text-rose-400",o="fa-asterisk"):e.status==="Diproses"?(s="text-[var(--color-primary)] border-[var(--color-primary)]/30 bg-[rgba(var(--color-primary-rgb),0.08)] dark:bg-[rgba(var(--color-primary-rgb),0.15)] dark:border-[var(--color-primary)]/40",o="fa-spinner fa-spin"):e.status==="Selesai"?(s="text-[var(--color-primary)] border-[var(--color-primary)]/30 bg-[rgba(var(--color-primary-rgb),0.08)] dark:bg-[rgba(var(--color-primary-rgb),0.15)] dark:border-[var(--color-primary)]/40",o="fa-check-double"):e.status==="Dibatalkan"&&(s="text-slate-400 border-slate-200 bg-slate-100 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-400",o="fa-xmark"),`
        <div class="bg-white dark:bg-slate-800 p-4 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm relative overflow-hidden group min-w-0 transition-all hover:border-[var(--color-primary)]/40">
            <div class="flex justify-between items-start mb-3 border-b border-slate-100 dark:border-slate-700/60 pb-3">
                <div>
                    <span class="font-bold text-sm text-slate-800 dark:text-white tracking-tight">#${e.orderId.split("-").pop()}</span>
                    <p class="text-[10px] font-semibold text-slate-500 dark:text-slate-400 mt-0.5"><i class="fa-regular fa-calendar-days mr-1"></i>${a}</p>
                </div>
                <span class="text-[10px] font-bold px-2.5 py-1 rounded-lg border ${s} uppercase tracking-wider flex items-center shadow-xs"><i class="fa-solid ${o} mr-1.5 text-[9px]"></i> ${m(e.status)}</span>
            </div>
            ${e.pointsEarned>0||e.claimedReward?`
            <div class="flex flex-wrap gap-1.5 mb-3">
                ${e.pointsEarned>0?`<span class="text-[9px] font-bold px-2 py-1 rounded-lg bg-amber-50 text-amber-600 border border-amber-200 dark:bg-amber-900/20 dark:border-amber-800 dark:text-amber-400"><i class="fa-solid fa-star mr-1"></i>+${e.pointsEarned} Poin</span>`:""}
                ${e.claimedReward?`<span class="text-[9px] font-bold px-2 py-1 rounded-lg bg-[rgba(var(--color-primary-rgb),0.08)] text-[var(--color-primary)] border border-[var(--color-primary)]/30 dark:bg-[rgba(var(--color-primary-rgb),0.12)] dark:border-[var(--color-primary)]/40 dark:text-[var(--color-primary)]"><i class="fa-solid fa-gift mr-1"></i>Hadiah: ${m(e.claimedReward.name)} ${ot(e.claimedReward)}</span>`:""}
                ${e.claimedReward&&e.finalMemberPoints!==void 0&&e.finalMemberPoints!==null?`<span class="text-[9px] font-bold px-2 py-1 rounded-lg bg-slate-100 text-slate-500 border border-slate-200 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-400"><i class="fa-solid fa-wallet mr-1"></i>Sisa: ${e.finalMemberPoints} Poin</span>`:""}
            </div>`:""}
            <div class="flex justify-between items-end mt-2 pt-1">
                <div>
                    <p class="text-[9px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-0.5">Total Tagihan</p>
                    <p class="text-[var(--color-primary)] font-bold text-base tracking-tight">${D(e.total)} <span class="text-[10px] text-slate-500 dark:text-slate-400 font-medium ml-1">(${e.itemCount} Item)</span></p>
                </div>
                <div class="flex gap-2">
                    <button onclick="openCustomerOrderDetail('${e.orderId}')" class="h-8 px-3.5 rounded-xl bg-[rgba(var(--color-primary-rgb),0.08)] hover:bg-[rgba(var(--color-primary-rgb),0.15)] text-[var(--color-primary)] border border-[rgba(var(--color-primary-rgb),0.2)] dark:border-[rgba(var(--color-primary-rgb),0.35)] text-[11px] font-bold transition-all active:scale-95 shadow-xs flex items-center gap-1.5"><i class="fa-solid fa-file-invoice"></i> Detail</button>
                    <button onclick="checkOrderStatus('${e.orderId}', ${t})" class="h-8 px-3.5 rounded-xl bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 text-[11px] font-bold transition-all active:scale-95 shadow-xs flex items-center gap-1.5"><i class="fa-solid fa-rotate"></i> Status</button>
                </div>
            </div>
        </div>`}).join(""))},qs=async(e,t)=>{z("Melacak Status...");try{const a=await C.collection("freshmart_orders").doc(e).get();if(a.exists){const s=a.data();if(O[t])O[t].status=s.status;else{const o=O.findIndex(r=>r.orderId===e);o>-1&&(O[o].status=s.status)}Ge(),Ee(),f(`✅ Status Pesanan: ${s.status}`)}else f("Pesanan tidak ditemukan di server.")}catch(a){console.error("Gagal cek status pesanan:",a),f("Gagal mengambil data sistem. Periksa koneksi.")}finally{L()}},Gs=async()=>{const e=l("order-tracking-input"),t=e?e.value.trim():"";if(!t){f("Masukkan ID Pesanan terlebih dahulu!");return}let a=t.replace(/^#/,"").trim();const s=O.find(o=>o.orderId===a||o.orderId.endsWith(a));if(s){Xe(s.orderId);return}z("Mencari Pesanan...");try{let o=await C.collection("freshmart_orders").doc(a).get();if(!o.exists&&!a.startsWith("ORD-")){const r="ORD-"+a,i=await C.collection("freshmart_orders").doc(r).get();i.exists&&(o=i,a=r)}if(o.exists){const r=o.data();O.some(n=>n.orderId===a)||(O.unshift({orderId:a,date:r.dateString||(r.timestamp?r.timestamp.toDate().toISOString():new Date().toISOString()),total:r.payment&&r.payment.grandTotal?r.payment.grandTotal:0,itemCount:(r.items||[]).reduce((n,d)=>n+(parseFloat(d.qty)||0),0),status:r.status||"Baru",pointsEarned:r.pointsEarned||0,claimedReward:r.claimedReward||null,finalMemberPoints:r.finalMemberPoints||null}),Ge(),Ee()),e&&(e.value=""),f("✅ Pesanan berhasil ditemukan!"),Xe(a)}else f("❌ Pesanan dengan ID tersebut tidak ditemukan.")}catch(o){console.error("Gagal melacak pesanan:",o),f("Gagal menghubungi server. Pastikan ID Pesanan sudah benar.")}finally{L()}},Ks=()=>{Ct("Hapus Riwayat","Riwayat pesanan di perangkat ini akan dihapus. Pesanan tetap tersimpan di sistem toko. Lanjutkan?",()=>{Oe([]),Ge(),Ee(),f("Riwayat lokal dibersihkan")})},Xe=async e=>{z("Memuat Rincian...");try{const t=await C.collection("freshmart_orders").doc(e).get();if(!t.exists){f("Pesanan tidak ditemukan."),L();return}const a=t.data();let s=[];if(a.status==="Selesai")try{s=(await C.collection("freshmart").doc("cms_data").collection("reviews").where("orderId","==",e).get()).docs.map(r=>`${r.data().productId}::${r.data().variantName||""}`)}catch{}jt(e,a,s)}catch(t){console.error("Gagal mengambil data pesanan:",t),f("Gagal memuat rincian pesanan. Coba beberapa saat lagi.")}finally{L()}},jt=(e,t,a=[])=>{try{let s=document.getElementById("order-detail-modal");s||(s=document.createElement("div"),s.id="order-detail-modal",s.className="fixed inset-0 z-[100] flex justify-center items-end sm:items-center bg-slate-900/60 opacity-0 pointer-events-none transition-opacity duration-300",document.body.appendChild(s));const o=m(t.customer&&t.customer.name?t.customer.name:"-"),r=m(t.customer&&t.customer.wa?t.customer.wa:"-"),i=m(t.customer&&t.customer.address?t.customer.address:"-"),n=t.customer&&t.customer.deliveryMethod==="delivery"?"Dikirim ke Alamat":"Ambil di Toko (Pickup)",d=m(t.customer&&t.customer.note?t.customer.note:""),c=m(t.payment&&t.payment.method?t.payment.method:"Cash / COD"),g=t.items||[],w=g.some(p=>p.poTime&&p.poTime!==""),v=g.map(p=>{const B=parseFloat(p.qty)||0,ce=parseFloat(p.effectivePrice||p.price)||0,pe=B*ce,Le=`${p.id}::${p.variantName||""}`,me=t.status==="Selesai"&&!a.includes(Le)&&p.id!==void 0&&p.id!==null;return`
            <div class="flex gap-3 items-center border-b border-slate-100 dark:border-slate-700/50 py-3 last:border-0">
                <div class="w-12 h-12 rounded-xl bg-slate-100 dark:bg-slate-800 bg-cover bg-center shrink-0 border border-slate-200 dark:border-slate-700" style="background-image:url('${m(p.img||(u&&u.store?u.store.logo:""))}')"></div>
                <div class="flex-1 min-w-0">
                    <p class="text-xs font-bold text-slate-800 dark:text-white truncate mb-0.5" title="${m(p.name)}">${m(p.name)}</p>
                    ${p.variantName||p.poTime?`
                    <div class="flex flex-wrap gap-1 mb-1">
                        ${p.variantName?`<span class="bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300 px-1.5 py-0.5 rounded text-[9px] font-semibold">${m(p.variantName)}</span>`:""}
                        ${p.poTime?`<span class="bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400 border border-amber-200 dark:border-amber-800 px-1.5 py-0.5 rounded text-[8px] font-bold uppercase">PO ${m(p.poTime)}</span>`:""}
                    </div>
                    `:""}
                    <p class="text-[10px] font-medium text-slate-500 dark:text-slate-400">${B} ${m(p.unit||"pcs")} x ${D(ce)}</p>
                    ${me?`<button type="button" onclick="openReviewModal('${e}',${p.id},'${encodeURIComponent(p.variantName||"")}','${encodeURIComponent(p.name||"")}','${encodeURIComponent(t.customer?.name||"")}')" class="mt-1.5 text-[10px] font-bold text-amber-500 hover:text-amber-600 flex items-center gap-1 transition-colors"><i class="fa-solid fa-star"></i> Berikan Ulasan</button>`:""}
                </div>
                <div class="text-right shrink-0">
                    <p class="text-xs font-bold text-slate-800 dark:text-[var(--color-primary)]">${D(pe)}</p>
                </div>
            </div>
            `}).join("");let M="Tanggal Tidak Tersedia";try{let p;if(t.timestamp&&typeof t.timestamp.toDate=="function")p=t.timestamp.toDate();else{const B=t.timestamp||t.dateString||Date.now();if(typeof B=="number")p=new Date(B);else if(!isNaN(Number(B))&&String(B).trim()!=="")p=new Date(Number(B));else{const ce=String(B).replace(/-/g,"/").replace("T"," ").replace(/\..*$/,"");p=new Date(B),isNaN(p.getTime())&&(p=new Date(ce))}}p&&!isNaN(p.getTime())&&(M=p.toLocaleString("id-ID",{day:"numeric",month:"short",year:"numeric",hour:"2-digit",minute:"2-digit"}))}catch(p){console.error("Gagal memproses tanggal:",p)}const G=t.payment&&t.payment.subtotal?t.payment.subtotal:0,I=t.payment&&t.payment.shippingCost?t.payment.shippingCost:0,h=t.payment&&t.payment.productDiscount?t.payment.productDiscount:0,S=t.payment&&t.payment.shippingDiscount?t.payment.shippingDiscount:0,le=t.payment&&t.payment.ppnAmount?t.payment.ppnAmount:0,we=t.payment&&t.payment.ppnRate?t.payment.ppnRate:0,de=t.payment&&t.payment.grandTotal?t.payment.grandTotal:0;s.innerHTML=`
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
                            <span class="text-xs font-bold px-2.5 py-1 rounded-md bg-[rgba(var(--color-primary-rgb),0.08)] text-[var(--color-primary)] border border-[var(--color-primary)]/30 dark:bg-[rgba(var(--color-primary-rgb),0.15)] dark:border-[var(--color-primary)]/40">${m(t.status||"Baru")}</span>
                        </div>
                        <div class="text-right">
                            <p class="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-1">Waktu Pembelian</p>
                            <p class="text-[11px] font-bold text-slate-700 dark:text-slate-300">${M}</p>
                        </div>
                    </div>

                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div class="bg-slate-50 dark:bg-slate-800/40 p-3.5 rounded-xl border border-slate-200 dark:border-slate-700/60">
                            <h4 class="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2 flex items-center gap-1.5"><i class="fa-solid fa-user text-slate-400"></i> Info Pelanggan</h4>
                            <div class="space-y-1 text-xs">
                                <p class="font-bold text-slate-800 dark:text-slate-200">${o}</p>
                                ${t.customer&&t.customer.wa?`<a href="javascript:void(0)" onclick="if(typeof window.openWhatsApp==='function') window.openWhatsApp('${r}'); else window.open('https://wa.me/${r}', '_blank', 'noopener,noreferrer');" class="flex items-center gap-1 text-[var(--color-primary)] font-bold hover:underline cursor-pointer"><i class="fa-brands fa-whatsapp"></i> +${r}</a>`:""}
                                ${t.customer&&t.customer.lat&&t.customer.deliveryMethod==="delivery"?`<a href="https://www.google.com/maps?q=${m(t.customer.lat)},${m(t.customer.lng)}" target="_blank" class="flex items-center gap-1 text-blue-600 dark:text-blue-400 font-bold hover:underline"><i class="fa-solid fa-location-dot"></i> Lihat Peta</a>`:""}
                            </div>
                        </div>
                        <div class="bg-slate-50 dark:bg-slate-800/40 p-3.5 rounded-xl border border-slate-200 dark:border-slate-700/60">
                            <h4 class="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2 flex items-center gap-1.5"><i class="fa-solid fa-truck text-slate-400"></i> Pengiriman & Bayar</h4>
                            <div class="space-y-1 text-xs">
                                <p><span class="text-slate-500 inline-block w-14">Metode</span> <span class="font-bold text-slate-800 dark:text-slate-200">: ${n}</span></p>
                                <p><span class="text-slate-500 inline-block w-14">Bayar</span> <span class="font-bold text-slate-800 dark:text-slate-200">: ${c.toUpperCase()}</span></p>
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
                        <a href="${m(t.buktiPayment)}" target="_blank" class="block rounded-xl overflow-hidden border-2 border-[var(--color-primary)]/30 hover:border-[var(--color-primary)] transition-colors shadow-xs">
                            <img src="${m(t.buktiPayment)}" alt="Bukti Pembayaran" class="w-full max-h-52 object-cover" onerror="this.style.display='none'" loading="lazy">
                            <div class="bg-[rgba(var(--color-primary-rgb),0.06)] p-2 flex items-center justify-center gap-1.5 text-[10px] font-bold text-[var(--color-primary)]"><i class="fa-solid fa-arrow-up-right-from-square"></i> Buka Ukuran Penuh</div>
                        </a>
                    </div>`:""}
                    
                    <div>
                        <h4 class="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2 flex items-center gap-1.5"><i class="fa-solid fa-basket-shopping text-slate-400"></i> Daftar Produk</h4>
                        <div class="bg-slate-50 dark:bg-slate-800/30 rounded-xl px-3 py-1 border border-slate-200 dark:border-slate-700/80">
                            ${v}
                        </div>
                    </div>

                    ${w?`
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
                            <div class="flex items-center gap-2"><i class="fa-solid fa-gift text-[var(--color-primary)]"></i><p class="text-xs font-bold text-[var(--color-primary)]">Klaim Hadiah: <b>${m(t.claimedReward.name)}</b> (${t.claimedReward.pointsCost} Poin)</p></div>
                            <p class="text-[11px] font-semibold text-[var(--color-primary)] mt-1 ml-5">${ot(t.claimedReward)}</p>
                            ${t.claimedReward.note?`<p class="text-[11px] text-[var(--color-primary)]/70 italic mt-0.5 ml-5">"${m(t.claimedReward.note)}"</p>`:""}
                        </div>`:""}
                    </div>`:""}

                    <div class="bg-slate-100 dark:bg-slate-800 p-4 rounded-xl space-y-2 text-xs">
                        <div class="flex justify-between text-slate-600 dark:text-slate-400"><p>Subtotal Produk</p><p class="font-bold text-slate-800 dark:text-white">${D(G)}</p></div>
                        <div class="flex justify-between text-slate-600 dark:text-slate-400"><p>Ongkos Kirim</p><p class="font-bold text-slate-800 dark:text-white">${D(I)}</p></div>
                        ${S>0?`<div class="flex justify-between text-[var(--color-primary)]"><p>Diskon Ongkir</p><p class="font-bold">-${D(S)}</p></div>`:""}
                        ${h>0?`<div class="flex justify-between text-rose-500"><p>Diskon Promo</p><p class="font-bold">-${D(h)}</p></div>`:""}
                        ${(()=>{if(le<=0)return"";const p=t.payment?.ppnType==="inclusive",B=G-h+(I-S),ce=t.payment?.dppAmount||(p?Math.round(B*100/(100+we)):Math.max(0,B));return`
                            <div class="flex justify-between text-slate-600 dark:text-slate-400"><p>DPP (Dasar Pengenaan Pajak)</p><p class="font-bold text-slate-800 dark:text-white">${D(ce)}</p></div>
                            <div class="flex justify-between text-amber-600 dark:text-amber-400"><p>${p?"Termasuk PPN":"PPN"} (${we}%)</p><p class="font-bold">${p?"":"+"}${D(le)}</p></div>
                            `})()}
                        <div class="flex justify-between items-center border-t border-dashed border-slate-300 dark:border-slate-700 pt-3 mt-2">
                            <p class="font-bold text-slate-800 dark:text-white uppercase tracking-wider">Total Tagihan</p>
                            <p class="text-lg font-bold text-[var(--color-primary)]">${D(de)}</p>
                        </div>
                    </div>
                </div>
            </div>
        `,s.classList.contains("opacity-0")&&typeof window.pushModalHistory=="function"&&window.pushModalHistory("customerOrder"),s.classList.remove("opacity-0","pointer-events-none"),s.offsetWidth,requestAnimationFrame(()=>{const p=document.getElementById("order-detail-content");p&&(p.classList.remove("translate-y-full","sm:translate-y-10"),p.classList.add("translate-y-0","sm:translate-y-0"))})}catch(s){console.error("Error Render HTML Modal:",s),f("Gagal menampilkan detail. Coba lagi.")}},Hs=(e=!1)=>{const t=()=>{const a=document.getElementById("order-detail-modal"),s=document.getElementById("order-detail-content");s&&(s.classList.remove("translate-y-0","sm:translate-y-0"),s.classList.add("translate-y-full","sm:translate-y-10")),setTimeout(()=>{a&&a.classList.add("opacity-0","pointer-events-none")},300)};typeof window.requestCloseModal=="function"?window.requestCloseModal("customerOrder",e,t):t()};window.attachMyOrdersRealtime=Ot;window.detachMyOrdersRealtime=Nt;window.renderMyOrders=Ee;window.checkOrderStatus=qs;window.trackOrderManual=Gs;window.clearMyOrders=Ks;window.openCustomerOrderDetail=Xe;window.renderOrderDetailModal=jt;window.closeCustomerOrderDetailModal=Hs;window.reviewPhotoFile=null;window.reviewRating=0;const Vs=(e,t,a,s,o)=>{const r=decodeURIComponent(a||""),i=decodeURIComponent(s||""),n=decodeURIComponent(o||"");let d=document.getElementById("review-modal");d||(d=document.createElement("div"),d.id="review-modal",d.className="fixed inset-0 z-[120] bg-slate-900/80 flex items-end sm:items-center justify-center p-0 sm:p-5",d.onclick=c=>{c.target===d&&dt()},document.body.appendChild(d)),window.reviewPhotoFile=null,window.reviewRating=0,d.innerHTML=`
        <div class="bg-white dark:bg-slate-900 w-full max-w-lg rounded-t-3xl sm:rounded-2xl max-h-[85vh] flex flex-col shadow-2xl border border-slate-200 dark:border-slate-700">
            <div class="p-5 sm:p-6 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center shrink-0">
                <div class="min-w-0">
                    <h3 class="font-bold text-slate-800 dark:text-white text-base flex items-center gap-2"><i class="fa-solid fa-star text-amber-400"></i> Berikan Ulasan</h3>
                    <p class="text-[10px] font-bold text-slate-500 mt-0.5 uppercase tracking-widest truncate">${m(i)}</p>
                </div>
                <button onclick="closeReviewModal()" class="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 hover:bg-rose-100 hover:text-rose-500 flex items-center justify-center transition-all shrink-0"><i class="fa-solid fa-xmark"></i></button>
            </div>
            <div class="p-5 sm:p-6 overflow-y-auto flex-1 space-y-5">
                <div class="text-center">
                    <p class="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-3">Beri Bintang</p>
                    <div class="flex items-center justify-center gap-2" id="review-star-picker">
                        ${[1,2,3,4,5].map(c=>`<button type="button" onclick="setReviewRating(${c})" class="review-star text-3xl text-slate-300 dark:text-slate-600 transition-all hover:scale-110" data-star="${c}"><i class="fa-solid fa-star"></i></button>`).join("")}
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
        </div>`,l("review-submit-btn").onclick=()=>ct(e,t,r,i,n),d.style.opacity="0",d.style.display="flex",requestAnimationFrame(()=>{d.style.transition="opacity 0.25s ease",d.style.opacity="1"}),typeof window.pushModalHistory=="function"&&window.pushModalHistory("review")},Qs=e=>{window.reviewRating=e,document.querySelectorAll(".review-star").forEach(t=>{const a=parseInt(t.dataset.star);t.classList.toggle("text-amber-400",a<=e),t.classList.toggle("text-slate-300",a>e),t.classList.toggle("dark:text-slate-600",a>e)})},Ws=e=>{const t=e.target.files[0];if(!t)return;if(!t.type.startsWith("image/")){f("Hanya file gambar yang diizinkan!");return}if(t.size>5*1024*1024){f("Ukuran gambar max 5MB!");return}window.reviewPhotoFile=t;const a=new FileReader;a.onload=s=>{l("review-photo-preview").src=s.target.result,q("review-photo-preview-wrap"),T("review-photo-btn")},a.readAsDataURL(t)},zs=()=>{window.reviewPhotoFile=null,T("review-photo-preview-wrap"),q("review-photo-btn");const e=l("review-photo-input");e&&(e.value="")},dt=(e=!1)=>{const t=document.getElementById("review-modal");!t||t.style.display==="none"||(t.style.opacity="0",t.style.transition="opacity 0.25s ease",setTimeout(()=>{t.style.display="none",t.style.opacity="",t.style.transition=""},250),!e&&W.length&&W[W.length-1]==="review"&&(W.pop(),history.back()))},ct=async(e,t,a,s,o)=>{if(!window.reviewRating||window.reviewRating<1)return f("Silakan beri bintang terlebih dahulu!");if(!st){ae(!0),z("Mengirim ulasan...");try{let r="";if(window.reviewPhotoFile&&typeof window.uploadBuktiToGDrive=="function"){const d=await window.uploadBuktiToGDrive(window.reviewPhotoFile,"review-"+e);d?r=d:f("Foto gagal diupload, ulasan tetap dikirim tanpa foto.")}const i=Date.now(),n={id:i,orderId:e||"",productId:t??0,variantName:a||"",productName:s||"",customerName:o||"Pelanggan",rating:window.reviewRating,text:N("review-text")||"",photoUrl:r||"",adminReply:"",isVisible:!0,createdAt:Be.firestore.FieldValue.serverTimestamp()};await C.collection("freshmart").doc("cms_data").collection("reviews").doc(i.toString()).set(n),et.delete(t),dt(),f("✅ Terima kasih atas ulasan Anda!"),typeof window.openCustomerOrderDetail=="function"&&window.openCustomerOrderDetail(e)}catch(r){console.error("Gagal mengirim ulasan:",r),f("Gagal mengirim ulasan: "+(r.message||"Error tidak diketahui"))}finally{ae(!1),L()}}},et=new Map,Js=5*60*1e3,Ys=async e=>{if(!l("product-modal-reviews-container"))return;const a=o=>{const r=o.length?o.reduce((c,g)=>c+(parseFloat(g.rating)||0),0)/o.length:0,i=c=>Array.from({length:5},(g,w)=>`<i class="fa-solid fa-star ${w<Math.round(c)?"text-amber-400":"text-slate-200 dark:text-slate-700"}"></i>`).join("");let n=`
            <div class="flex items-center justify-between mb-4">
                <h4 class="font-bold text-slate-800 dark:text-white text-sm flex items-center gap-2"><i class="fa-solid fa-comment-dots text-amber-400"></i> Ulasan Pelanggan</h4>
                ${o.length?`<div class="flex items-center gap-1.5"><span class="flex text-xs">${i(r)}</span><span class="text-xs font-bold text-slate-600 dark:text-slate-300">${r.toFixed(1)}</span><span class="text-[10px] font-bold text-slate-400">(${o.length})</span></div>`:""}
            </div>`;if(!o.length){_("product-modal-reviews-container",n+'<p class="text-[11px] font-bold text-slate-400 text-center py-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl">Belum ada ulasan untuk produk ini.</p>');return}const d=o.map(c=>{let g="";try{c.createdAt&&c.createdAt.toDate&&(g=c.createdAt.toDate().toLocaleDateString("id-ID",{day:"numeric",month:"short",year:"numeric"}))}catch{}return`
            <div class="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-2xl border border-slate-100 dark:border-slate-700/60">
                <div class="flex items-center justify-between mb-1.5">
                    <p class="text-xs font-bold text-slate-800 dark:text-white">${m(c.customerName||"Pelanggan")}</p>
                    <span class="text-[9px] font-bold text-slate-400">${g}</span>
                </div>
                <div class="flex text-[11px] mb-2">${i(c.rating)}</div>
                ${c.variantName?`<p class="text-[10px] font-bold text-slate-400 mb-1.5">Varian: ${m(c.variantName)}</p>`:""}
                ${c.text?`<p class="text-xs text-slate-600 dark:text-slate-300 mb-3">${m(c.text)}</p>`:""}
                ${c.photoUrl?`<div class="w-16 h-16 rounded-xl overflow-hidden mb-3 border border-slate-200 dark:border-slate-700"><img src="${m(c.photoUrl)}" class="w-full h-full object-cover cursor-pointer" onclick="window.open('${m(c.photoUrl)}','_blank')" alt="Foto ulasan"></div>`:""}
                ${c.adminReply?`
                <div class="mt-2.5 p-3 bg-[rgba(var(--color-primary-rgb),0.08)] dark:bg-[rgba(var(--color-primary-rgb),0.15)] border border-[rgba(var(--color-primary-rgb),0.2)] rounded-xl">
                    <p class="text-[10px] font-bold text-[var(--color-primary-dark)] dark:text-[var(--color-primary)] mb-1 flex items-center gap-1"><i class="fa-solid fa-reply"></i> Balasan Penjual</p>
                    <p class="text-xs text-slate-600 dark:text-slate-300">${m(c.adminReply)}</p>
                </div>`:""}
            </div>`}).join("");_("product-modal-reviews-container",n+`<div class="space-y-3">${d}</div>`)},s=et.get(e);if(s&&Date.now()-s.timestamp<Js){a(s.data);return}_("product-modal-reviews-container",'<div class="text-center py-6"><i class="fa-solid fa-spinner fa-spin text-xl text-slate-300"></i></div>');try{let r=(await C.collection("freshmart").doc("cms_data").collection("reviews").where("productId","==",e).get()).docs.map(i=>i.data()).filter(i=>i.isVisible!==!1);r.sort((i,n)=>{const d=i.createdAt&&i.createdAt.toMillis?i.createdAt.toMillis():0;return(n.createdAt&&n.createdAt.toMillis?n.createdAt.toMillis():0)-d}),et.set(e,{data:r,timestamp:Date.now()}),a(r)}catch(o){console.warn("Gagal memuat ulasan:",o),_("product-modal-reviews-container",'<p class="text-[11px] text-slate-400 text-center py-4">Belum ada ulasan yang dapat dimuat.</p>')}};window.openReviewModal=Vs;window.setReviewRating=Qs;window.handleReviewPhotoSelect=Ws;window.removeReviewPhoto=zs;window.closeReviewModal=dt;window.submitReview=ct;window.submitProductReview=ct;window.loadProductReviews=Ys;let ht=null;const pt=()=>{if(!ht)try{ht=C.collection("freshmart").doc("cms_data").collection("faqs").onSnapshot(e=>{e&&e.docs&&(u.faqs=e.docs.map(t=>({id:t.id,...t.data()}))),typeof window.curViewName<"u"&&window.curViewName==="view-faq"&&Ce(),window.isAdm&&typeof window.cTab<"u"&&window.cTab==="faqs"&&typeof window.rAdmFAQ=="function"&&window.rAdmFAQ()},e=>{console.warn("Sync sub-koleksi faqs dibatasi, menggunakan fallback cms_data.faqs:",e.message),typeof window.curViewName<"u"&&window.curViewName==="view-faq"&&Ce(),window.isAdm&&typeof window.cTab<"u"&&window.cTab==="faqs"&&typeof window.rAdmFAQ=="function"&&window.rAdmFAQ()})}catch{console.warn("Fallback sync Q&A dari cms_data aktif")}};let Fe="Semua";const Ce=()=>{pt();const e=document.getElementById("storefront-faq-container"),t=document.getElementById("faq-category-pills");if(!e)return;const a=(u.faqs||[]).filter(i=>i.status==="published"),s=["Semua","Pemesanan","Pengiriman","Pembayaran","Garansi","Lainnya"];t&&(t.innerHTML=s.map(i=>`
            <button onclick="selectFAQCategory('${i}')" class="px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${Fe===i?"primary-bg text-white shadow-md":"bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-slate-100"}">
                ${i}
            </button>
        `).join(""));const o=(document.getElementById("faq-search-input")?.value||"").toLowerCase().trim(),r=a.filter(i=>{const n=Fe==="Semua"||i.category===Fe,d=!o||(i.question||"").toLowerCase().includes(o)||(i.answer||"").toLowerCase().includes(o);return n&&d});if(!r.length){e.innerHTML=`
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
                            <span class="text-[9px] font-bold uppercase tracking-wider primary-bg-soft primary-text primary-border px-2.5 py-0.5 rounded-lg border">${m(i.category||"Umum")}</span>
                            ${i.authorName?`<span class="text-[10px] font-medium text-slate-400">Oleh: ${m(i.authorName)}</span>`:""}
                        </div>
                        <h4 class="font-bold text-sm sm:text-base text-slate-900 dark:text-white leading-snug break-words">${m(i.question)}</h4>
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
                        <div class="text-slate-800 dark:text-slate-100 font-semibold leading-relaxed whitespace-pre-wrap break-words">${m(i.answer||"Belum ada jawaban.")}</div>
                    </div>
                </div>
            </div>
        </div>
    `).join("")},Zs=e=>{Fe=e,Ce()},Xs=()=>{Ce()},eo=e=>{const t=document.getElementById(`faq-body-${e}`),a=document.getElementById(`faq-icon-${e}`);if(!t||!a)return;t.classList.contains("hidden")?(t.classList.remove("hidden"),a.classList.add("rotate-180")):(t.classList.add("hidden"),a.classList.remove("rotate-180"))},to=()=>{const e=l("modal-ask-question"),t=l("modal-ask-question-box");e&&(e.classList.contains("hidden")&&typeof window.pushModalHistory=="function"&&window.pushModalHistory("askQuestion"),ye(e,t))},Ut=(e=!1)=>{const t=()=>{ve("modal-ask-question","modal-ask-question-box")};typeof window.requestCloseModal=="function"?window.requestCloseModal("askQuestion",e,t):t()},ao=async()=>{const e=(N("ask-author-name")||"").trim()||"Pelanggan",t=N("ask-category")||"Pemesanan",a=(N("ask-question-text")||"").trim();if(!a)return f("Tuliskan pertanyaan Anda terlebih dahulu!");z("Mengirim pertanyaan...");const s="faq-"+Date.now().toString(36),o={id:s,question:a,answer:"",category:t,authorName:e,status:"pending_answer",createdAt:new Date().toISOString()};let r=!1;try{await C.collection("freshmart").doc("cms_data").collection("faqs").doc(s).set(o),r=!0}catch(i){console.warn("Penulisan sub-koleksi faqs dibatasi, mencoba fallback cms_data.faqs:",i)}if(!r)try{const i=[o,...(u.faqs||[]).filter(n=>n.id!==s)];await C.collection("freshmart").doc("cms_data").set({faqs:i},{merge:!0}),u.faqs=i,r=!0}catch(i){console.warn("Fallback cms_data.faqs juga gagal:",i)}L(),r?(Ut(),K("ask-question-text",""),f("Pertanyaan terkirim! Admin akan menjawabnya segera."),Ce()):f("Gagal mengirim pertanyaan. Coba lagi!")};let De="all";const Ke=()=>{pt();const e=u.faqs||[],t=e.filter(o=>De==="pending"?o.status==="pending_answer":De==="published"?o.status==="published":!0),a=e.filter(o=>o.status==="pending_answer").length;let s=`
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
                                <span class="text-[9px] sm:text-[10px] font-bold text-slate-400 uppercase tracking-wider px-2 py-0.5 rounded-lg bg-slate-100 dark:bg-slate-700/50">${m(o.category||"Umum")}</span>
                                ${o.authorName?`<span class="text-[10px] text-slate-400 italic">Oleh: ${m(o.authorName)}</span>`:""}
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
                            <h3 class="font-bold text-sm sm:text-base text-slate-900 dark:text-white leading-snug break-words">${m(o.question)}</h3>
                        </div>

                        <div class="primary-bg-soft dark:bg-slate-900/60 p-3.5 sm:p-4 rounded-xl border primary-border text-xs font-medium text-slate-800 dark:text-slate-200">
                            <span class="font-extrabold primary-text uppercase text-[10px] tracking-wider flex items-center gap-1.5 mb-1">
                                <i class="fa-solid fa-user-shield text-[10px]"></i> Jawaban Admin Toko:
                            </span>
                            <div class="whitespace-pre-wrap leading-relaxed font-semibold break-words">${o.answer?m(o.answer):'<span class="text-rose-500 italic font-semibold">Belum dijawab. Klik "Edit / Jawab" untuk memberikan jawaban.</span>'}</div>
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
    `;setH("admin-content",s)},so=e=>{De=e,Ke()},oo=e=>{const t=(u.faqs||[]).find(o=>o.id===e)||{id:"",question:"",answer:"",category:"Pemesanan",authorName:"Admin",status:"published"};K("admin-faq-id",t.id),K("admin-faq-category",t.category||"Pemesanan"),K("admin-faq-author",t.authorName||"Admin"),K("admin-faq-question",t.question||""),K("admin-faq-answer",t.answer||""),K("admin-faq-status",t.status||"published"),F("admin-faq-modal-title",e?"Edit Q&A":"Tambah Q&A Baru");const a=l("modal-admin-faq"),s=l("modal-admin-faq-box");a&&(a.classList.contains("hidden")&&typeof window.pushModalHistory=="function"&&window.pushModalHistory("adminFAQ"),ye(a,s))},qt=(e=!1)=>{const t=()=>{ve("modal-admin-faq","modal-admin-faq-box")};typeof window.requestCloseModal=="function"?window.requestCloseModal("adminFAQ",e,t):t()},ro=async()=>{const e=N("admin-faq-id")||"faq-"+Date.now().toString(36),t=N("admin-faq-category"),a=(N("admin-faq-author")||"").trim()||"Admin",s=(N("admin-faq-question")||"").trim(),o=(N("admin-faq-answer")||"").trim();let r=N("admin-faq-status");if(!s)return f("Pertanyaan tidak boleh kosong!");o&&r==="pending_answer"&&(r="published"),z("Menyimpan Q&A...");const i={id:e,question:s,answer:o,category:t,authorName:a,status:r,updatedAt:new Date().toISOString()};let n=[...u.faqs||[]];const d=n.findIndex(c=>c.id===e);d>-1?n[d]={...n[d],...i}:n.unshift(i),u.faqs=n;try{await C.collection("freshmart").doc("cms_data").collection("faqs").doc(e).set(i,{merge:!0})}catch(c){console.warn("Gagal set ke sub-koleksi faqs:",c)}try{await C.collection("freshmart").doc("cms_data").set({faqs:n},{merge:!0})}catch(c){console.warn("Gagal update cms_data.faqs:",c)}L(),qt(),f("Q&A Berhasil Disimpan!"),Ke()},io=e=>{Ct("Hapus Q&A","Yakin ingin menghapus pertanyaan ini?",async()=>{z("Menghapus Q&A...");let t=(u.faqs||[]).filter(a=>a.id!==e);u.faqs=t;try{await C.collection("freshmart").doc("cms_data").collection("faqs").doc(e).delete()}catch(a){console.warn("Gagal delete dari sub-koleksi faqs:",a)}try{await C.collection("freshmart").doc("cms_data").set({faqs:t},{merge:!0})}catch(a){console.warn("Gagal update cms_data.faqs:",a)}L(),f("Q&A Berhasil Dihapus!"),Ke()})};window.attachFAQRealtime=pt;window.renderStorefrontFAQ=Ce;window.selectFAQCategory=Zs;window.filterStorefrontFAQ=Xs;window.toggleFAQAccordion=eo;window.openAskQuestionModal=to;window.closeAskQuestionModal=Ut;window.submitCustomerQuestion=ao;window.rAdmFAQ=Ke;window.setAdminFAQFilter=so;window.openFAQModal=oo;window.closeAdminFAQModal=qt;window.saveAdminFAQ=ro;window.deleteAdminFAQ=io;let yt={},re="view-catalog";const ie=e=>{history.pushState({modal:e},"",window.location.href),W.push(e)},ne=(e,t,a)=>{if(!t){const s=W.lastIndexOf(e);if(s>-1){W.splice(s,1);try{history.back()}catch{}}}a()},fe=(e,t=!1)=>{t||history.pushState({view:e},"",window.location.href);const a=l(re);if(a){const o=a.querySelector(".scroll-content");o&&(yt[re]=o.scrollTop)}re==="view-orders"&&e!=="view-orders"&&typeof window.detachMyOrdersRealtime=="function"&&window.detachMyOrdersRealtime();const s=l(e);if(s&&(s.classList.remove("hidden"),s.classList.add("flex")),document.querySelectorAll(".view-section").forEach(o=>{o!==s&&(o.classList.add("hidden"),o.classList.remove("flex"))}),s){e==="view-cart"&&typeof window.renderCart=="function"?window.renderCart():e==="view-checkout"&&typeof window.rChck=="function"?window.rChck():e==="view-payment"&&typeof window.rPay=="function"?window.rPay():e==="view-wishlist"&&typeof window.renderWish=="function"?window.renderWish():e==="view-orders"&&typeof window.renderMyOrders=="function"?window.renderMyOrders():e==="view-faq"&&typeof window.renderStorefrontFAQ=="function"&&window.renderStorefrontFAQ();const o=s.querySelector(".scroll-content");if(o)if(t){const r=yt[e]||0;requestAnimationFrame(()=>requestAnimationFrame(()=>{o.scrollTop=r}))}else o.scrollTo(0,0)}re=e,Gt(e)},Gt=(e=re)=>{const t=l("bottom-nav-bar");if(!t)return;if(["view-cart","view-checkout","view-payment","view-admin-login","view-admin"].includes(e)){t.classList.add("bnav-hidden","translate-y-[250%]","opacity-0","pointer-events-none"),t.classList.remove("translate-y-0","opacity-100");return}if(t.classList.remove("bnav-hidden","translate-y-[250%]","opacity-0","pointer-events-none"),t.classList.add("translate-y-0","opacity-100"),document.querySelectorAll(".bnav-item").forEach(s=>s.classList.remove("active")),e==="view-catalog"){const s=l("bnav-home");s&&s.classList.add("active")}else if(e==="view-orders"){const s=l("bnav-orders");s&&s.classList.add("active")}else if(e==="view-wishlist"||e==="view-faq"){const s=l("bnav-menu");s&&s.classList.add("active")}},no=e=>{if(typeof window.triggerHaptic=="function"&&window.triggerHaptic(e==="home"?"medium":"light"),e==="home")if(re==="view-catalog"){const t=document.querySelector("#view-catalog .scroll-content");t?t.scrollTo({top:0,behavior:"smooth"}):window.scrollTo({top:0,behavior:"smooth"})}else fe("view-catalog");else e==="categories"?typeof window.openCategoryModal=="function"&&window.openCategoryModal():e==="cart"?fe("view-cart"):e==="orders"?fe("view-orders"):e==="menu"&&typeof window.openQuickMenuModal=="function"&&window.openQuickMenuModal()},Kt=()=>{const e=document.querySelector("#view-catalog .scroll-content"),t=l("pull-to-refresh-indicator"),a=l("ptr-icon"),s=l("ptr-text");if(!e||!t)return;let o=0,r=0,i=!1,n=!1;const d=65;e.addEventListener("touchstart",c=>{e.scrollTop<=5&&!n&&(o=c.touches[0].pageY,i=!0)},{passive:!0}),e.addEventListener("touchmove",c=>{if(!i||n)return;r=c.touches[0].pageY;const g=r-o;if(g>15&&e.scrollTop<=5){t.classList.add("visible");const w=Math.min(g/d,1.5);a&&(a.style.transform=`rotate(${w*240}deg)`),s&&(s.innerText=g>=d?"Lepaskan untuk segarkan":"Tarik ke bawah untuk refresh")}else t.classList.remove("visible")},{passive:!0}),e.addEventListener("touchend",async()=>{if(!i||n)return;if(i=!1,r-o>=d&&e.scrollTop<=5){n=!0,typeof window.triggerHaptic=="function"&&window.triggerHaptic("medium"),a&&(a.className="fa-solid fa-arrows-rotate fa-spin text-[var(--color-primary)]",a.style.transform=""),s&&(s.innerText="Menyinkronkan katalog...");try{typeof window.syncAppMeta=="function"?await window.syncAppMeta():typeof window.loadAppData=="function"&&await window.loadAppData(),typeof window.rCat=="function"&&window.rCat(),typeof window.rDyn=="function"&&window.rDyn(),s&&(s.innerText="Katalog Terkini Disinkron!"),a&&(a.className="fa-solid fa-circle-check text-emerald-500"),typeof window.triggerHaptic=="function"&&window.triggerHaptic("success")}catch{s&&(s.innerText="Gagal sinkron data")}setTimeout(()=>{t.classList.remove("visible"),setTimeout(()=>{n=!1,a&&(a.className="fa-solid fa-arrows-rotate text-[var(--color-primary)] transition-transform duration-300",a.style.transform=""),s&&(s.innerText="Tarik ke bawah untuk refresh")},300)},600)}else t.classList.remove("visible"),a&&(a.style.transform="")})},Ht=e=>{e==="product"&&typeof window.closeProductModal=="function"?window.closeProductModal(!0):e==="category"&&typeof window.closeCategoryModal=="function"?window.closeCategoryModal(!0):e==="brand"&&typeof window.closeBrandModal=="function"?window.closeBrandModal(!0):e==="admin"&&typeof window.closeAdminModal=="function"?window.closeAdminModal(!0):e==="adminOrder"&&typeof window.closeOrderDetailModal=="function"?window.closeOrderDetailModal(!0):e==="receipt"&&typeof window.closeReceiptPreviewModal=="function"?window.closeReceiptPreviewModal(!0):e==="docPreview"&&typeof window.closeDocPreviewModal=="function"?window.closeDocPreviewModal(!0):e==="scanner"&&typeof window.closeCameraScanner=="function"?window.closeCameraScanner(!0):e==="confirm"&&typeof window.closeConfirm=="function"?window.closeConfirm(!0):e==="customerOrder"&&typeof window.closeCustomerOrderDetailModal=="function"?window.closeCustomerOrderDetailModal(!0):e==="restock"&&typeof window.closeRestockModal=="function"?window.closeRestockModal(!0):e==="quickprice"&&typeof window.closeQuickPriceModal=="function"?window.closeQuickPriceModal(!0):e==="member"&&typeof window.closeMemberModal=="function"?window.closeMemberModal(!0):e==="prompt"&&typeof window.closePrompt=="function"?window.closePrompt(!0):e==="review"&&typeof window.closeReviewModal=="function"?window.closeReviewModal(!0):e==="quickmenu"&&typeof window.closeQuickMenuModal=="function"?window.closeQuickMenuModal(!0):e==="variantPreview"&&typeof window.closeVariantPreviewModal=="function"?window.closeVariantPreviewModal(!0):e==="terms"&&typeof window.closeTermsModal=="function"?window.closeTermsModal(!0):e==="privacy"&&typeof window.closePrivacyModal=="function"?window.closePrivacyModal(!0):e==="askQuestion"&&typeof window.closeAskQuestionModal=="function"?window.closeAskQuestionModal(!0):e==="quickVariant"&&typeof window.closeQuickVariantSheet=="function"?window.closeQuickVariantSheet(!0):e==="adminFAQ"&&typeof window.closeAdminFAQModal=="function"?window.closeAdminFAQModal(!0):e==="printerSettings"&&typeof window.closePrinterSettingsModal=="function"?window.closePrinterSettingsModal(!0):e==="exitConfirm"&&typeof window.closeExitConfirmModal=="function"?window.closeExitConfirmModal(!0):e==="appDownload"&&typeof window.closeAppDownloadModal=="function"&&window.closeAppDownloadModal(!0)},Vt=()=>{const e=l("exit-confirm-modal");e&&(e.classList.contains("hidden")&&ie("exitConfirm"),e.classList.remove("hidden"),setTimeout(()=>{e.classList.remove("opacity-0");const t=l("exit-confirm-modal-box");t&&t.classList.remove("scale-95")},10),typeof window.triggerHaptic=="function"&&window.triggerHaptic("light"))},mt=(e=!1)=>{ne("exitConfirm",e,()=>{const t=l("exit-confirm-modal"),a=l("exit-confirm-modal-box");t&&t.classList.add("opacity-0"),a&&a.classList.add("scale-95"),setTimeout(()=>{t&&t.classList.add("hidden")},250)})},lo=()=>{mt(!0),window.AndroidNativeApp&&typeof window.AndroidNativeApp.exitApp=="function"?window.AndroidNativeApp.exitApp():navigator.app&&typeof navigator.app.exitApp=="function"?navigator.app.exitApp():(typeof window.showToast=="function"&&window.showToast("Sampai jumpa kembali di Toko Putri! 🙏"),setTimeout(()=>{try{window.close()}catch{}},400))},co=()=>{if(W.length>0){try{window.history.back()}catch{const a=W.pop();Ht(a)}return}if(re==="view-admin"){typeof window.showConfirm=="function"&&window.showConfirm("Keluar Seller","Apakah anda akan keluar dari dashboard seller?",()=>{typeof window.logoutAdmin=="function"&&window.logoutAdmin()},"Ya, Keluar",!0);return}if(re!=="view-catalog"){fe("view-catalog");return}const e=l("exit-confirm-modal");e&&!e.classList.contains("hidden")?mt():Vt()},Qt=()=>{Kt(),window.addEventListener("popstate",e=>{if(W.length){const t=W.pop();Ht(t)}else{const t=e.state||{},a=t.view||null;if(window.isAdm||window.__localIsAdm)a==="view-admin"?(fe("view-admin",!0),t.tab&&typeof window.openAdminTab=="function"?window.openAdminTab(t.tab,!0):typeof window.openAdminMenu=="function"&&window.openAdminMenu()):(history.pushState({view:"view-admin"},"",window.location.href),typeof window.showConfirm=="function"&&window.showConfirm("Keluar Seller","Apakah anda akan keluar dari dashboard seller?",()=>{typeof window.logoutAdmin=="function"&&window.logoutAdmin()},"Ya, Keluar",!0));else if(a){let o=a;a==="view-admin"&&(o="view-admin-login"),fe(o,!0)}else fe("view-catalog",!0)}})};window.pushModalHistory=ie;window.requestCloseModal=ne;window.changeView=fe;window.setupHistoryRouter=Qt;window.onBottomNavClick=no;window.updateBottomNav=Gt;window.initPullToRefresh=Kt;window.handleAppBackButton=co;window.openExitConfirmModal=Vt;window.closeExitConfirmModal=mt;window.confirmExitApp=lo;try{Object.defineProperty(window,"curViewName",{get:()=>re,set:e=>{re=e},configurable:!0})}catch{}const po="admgaffidigital/tokoputri",mo=`https://api.github.com/repos/${po}/releases/latest`,tt="https://github.com/admgaffidigital/tokoputri/releases/latest/download/TokoPutri.apk";let Te=null,We=!1;const uo=e=>!e||isNaN(e)?"8.0 MB":`${(e/(1024*1024)).toFixed(1)} MB`,fo=e=>{if(!e)return"Terbaru";try{return new Date(e).toLocaleDateString("id-ID",{day:"numeric",month:"short",year:"numeric"})}catch{return"Terbaru"}},wo=async()=>{if(Te)return Te;if(We)return null;const e=ut(u)||"v1.8.7";We=!0;try{const t=await fetch(mo,{headers:{Accept:"application/vnd.github.v3+json"},cache:"no-store"});if(t.ok){const a=await t.json(),s=a.assets?.find(n=>n.name?.toLowerCase().endsWith(".apk"))||a.assets?.[0],o=a.tag_name||e,r=aa(o,e)>0,i=r?e:o;Te={tagName:i,name:`Toko Putri ${i}`,publishedAt:r?"19 Sep 2026":fo(a.published_at),fileSize:s?uo(s.size):"8.0 MB",downloadUrl:s?.browser_download_url||tt,notes:a.body||"",isLiveFetched:!0}}else throw new Error(`GitHub API HTTP ${t.status}`)}catch{const a=ut(u)||"v1.8.7";Te={tagName:a,name:`Toko Putri ${a}`,publishedAt:"19 Sep 2026",fileSize:"8.0 MB",downloadUrl:tt,notes:"",isLiveFetched:!1}}finally{We=!1}return Te},bo=()=>{let e=l("app-download-modal");return e||(e=document.createElement("div"),e.id="app-download-modal",e.className="fixed inset-0 z-[125] bg-slate-950/80 backdrop-blur-xs flex items-end sm:items-center justify-center p-0 sm:p-4 opacity-0 transition-opacity duration-300",e.onclick=t=>{t.target===e&&Wt()},e.innerHTML=`
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
    </div>`,document.body.appendChild(e),e)},go=async()=>{const e=bo();if(!e)return;ie("appDownload"),e.style.display="flex",e.offsetWidth,requestAnimationFrame(()=>{e.classList.remove("opacity-0");const a=l("app-download-modal-box");a&&a.classList.remove("translate-y-full","sm:translate-y-8")}),typeof window.triggerHaptic=="function"&&window.triggerHaptic("light");const t=await wo();if(t){const a=l("app-modal-version-tag"),s=l("app-modal-filesize"),o=l("app-modal-published-date");a&&(a.textContent=t.tagName),s&&(s.innerHTML=`<span>${m(t.fileSize)}</span>`),o&&(o.textContent=`Rilis: ${m(t.publishedAt)}`)}},Wt=(e=!1)=>{const t=l("app-download-modal");!t||t.style.display==="none"||ne("appDownload",e,()=>{t.classList.add("opacity-0");const a=l("app-download-modal-box");a&&a.classList.add("translate-y-full","sm:translate-y-8"),setTimeout(()=>{t.style.display="none"},300)})},xo=()=>{const e=l("btn-download-apk-action"),t=l("btn-download-apk-icon"),a=l("btn-download-apk-text");e&&e.classList.add("opacity-80","pointer-events-none"),t&&(t.className="fa-solid fa-spinner fa-spin"),a&&(a.textContent="Menghubungkan ke Server Rilis..."),typeof window.triggerHaptic=="function"&&window.triggerHaptic("medium"),typeof window.showToast=="function"&&window.showToast("Memulai unduhan TokoPutri.apk terbaru. Cek panel notifikasi HP Anda!");const s=Te?.downloadUrl||tt,o=document.createElement("a");o.href=s,o.setAttribute("download","TokoPutri.apk"),o.target="_blank",o.rel="noopener noreferrer",document.body.appendChild(o),o.click(),document.body.removeChild(o),setTimeout(()=>{if(e&&e.classList.remove("opacity-80","pointer-events-none"),t&&(t.className="fa-solid fa-circle-check text-white"),a){const r=Te?.tagName||"v1.8.7";a.textContent=`Unduh Ulang APK (${r})`}},2500)};window.openAppDownloadModal=go;window.closeAppDownloadModal=Wt;window.downloadLatestApk=xo;const He="B7qgwFQqtYLpBqdaK69HgtCfR7s5t67p",ho=20*1024*1024,yo=["video/mp4","video/webm","video/quicktime","video/x-msvideo","video/3gpp"],zt=["image/jpeg","image/png","image/webp","image/gif"],vo=async(e,t,a=null)=>{const s=e.files[0];if(!s)return;if(!zt.includes(s.type))return e.value="",f("Hanya file JPG, PNG, WEBP, atau GIF yang diizinkan!");if(s.size>3*1024*1024)return e.value="",f("Maksimal gambar 3MB!");const o=window.GAS_UPLOAD_URL||Ue;if(o.includes("ISI_DENGAN"))return e.value="",f("URL Script Google belum diisi!");z("Upload Gambar...");const r=new FileReader;r.readAsDataURL(s),r.onload=async()=>{try{const i=r.result.split(",")[1],n=s.name.replace(/[^a-zA-Z0-9.]/g,"_"),d={name:"POS_"+Date.now()+"_"+n,mimeType:s.type,data:i,token:He},g=await(await fetch(o,{method:"POST",body:JSON.stringify(d),headers:{"Content-Type":"text/plain;charset=utf-8"},redirect:"follow"})).text();let w;try{w=JSON.parse(g)}catch{return f("Error Server!")}if(w.status==="success"){const v=je(w.url),M=l(t);M&&(M.value=v,M.dispatchEvent(new Event("input",{bubbles:!0})),M.dispatchEvent(new Event("change",{bubbles:!0})),a!==null&&typeof window.uVar=="function"&&window.uVar(a,"img",v),f("Gambar diupload!"))}else f("Gagal: "+(w.message||"Error"))}catch{f("Koneksi terputus saat upload.")}finally{L(),e.value=""}},r.onerror=()=>{f("Gagal membaca file!"),L(),e.value=""}},ko=async(e,t)=>{const a=e.files[0];if(!a)return;if(!yo.includes(a.type))return e.value="",f("Hanya file MP4, WEBM, MOV, atau AVI yang diizinkan!");if(a.size>ho)return e.value="",f("Video terlalu besar! Maksimal 20MB.");const s=window.GAS_UPLOAD_URL||Ue;if(s.includes("ISI_DENGAN"))return e.value="",f("URL Script Google belum diisi di Pengaturan!");z("Upload Video... (harap tunggu)");const o=new FileReader;o.readAsDataURL(a),o.onload=async()=>{try{const r=o.result.split(",")[1],i=a.name.replace(/[^a-zA-Z0-9.]/g,"_"),n={name:"VID_"+Date.now()+"_"+i,mimeType:a.type,data:r,token:He},c=await(await fetch(s,{method:"POST",body:JSON.stringify(n),headers:{"Content-Type":"text/plain;charset=utf-8"},redirect:"follow"})).text();let g;try{g=JSON.parse(c)}catch{return f("Error Server GAS!")}if(g.status==="success"){const w="https://drive.google.com/file/d/"+g.fileId+"/preview",v=l(t);v&&(v.value=w,v.dispatchEvent(new Event("input",{bubbles:!0})),v.dispatchEvent(new Event("change",{bubbles:!0})),f("Video berhasil diupload ke Drive!"))}else f("Gagal upload: "+(g.message||"Error"))}catch{f("Koneksi terputus saat upload video.")}finally{L(),e.value=""}},o.onerror=()=>{f("Gagal membaca file video!"),L(),e.value=""}},Mo=async(e,t)=>{const a=e.files[0];if(!a)return;if(!zt.includes(a.type))return e.value="",f("Hanya file JPG, PNG, WEBP, atau GIF yang diizinkan!");if(a.size>3*1024*1024)return e.value="",f("Maksimal gambar 3MB!");const s=window.GAS_UPLOAD_URL||Ue;if(s.includes("ISI_DENGAN"))return e.value="",f("URL Script Google belum diisi!");z("Menyisipkan Gambar...");const o=new FileReader;o.readAsDataURL(a),o.onload=async()=>{try{const r=o.result.split(",")[1],i=a.name.replace(/[^a-zA-Z0-9.]/g,"_"),n={name:"RTE_"+Date.now()+"_"+i,mimeType:a.type,data:r,token:He},c=await(await fetch(s,{method:"POST",body:JSON.stringify(n),headers:{"Content-Type":"text/plain;charset=utf-8"},redirect:"follow"})).text();let g;try{g=JSON.parse(c)}catch{return f("Error Server!")}if(g.status==="success"){const w=je(g.url),v=l(t);v&&(v.focus(),document.execCommand("insertHTML",!1,`<br><img loading="lazy" src="${w}" style="max-width:100%; border-radius:12px; margin: 10px 0; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);" ><br>`)),f("Gambar berhasil disisipkan!")}else f("Gagal upload gambar.")}catch{f("Gagal koneksi.")}finally{L(),e.value=""}},o.onerror=()=>{f("Gagal membaca file!"),L(),e.value=""}};window.GAS_SECRET_TOKEN=He;window.handleImageUpload=vo;window.handleVideoUpload=ko;window.handleRTEditorImage=Mo;window.setCat=e=>{$t(e),rt(1),typeof window.rCat=="function"&&window.rCat()};window.setBrand=e=>{Rt(e),rt(1),typeof window.rCat=="function"&&window.rCat()};const Po=()=>{let e="",t=Ye==="Semua Produk";e+=`
    <button onclick="setCat('Semua Produk'); closeCategoryModal()" class="w-full flex items-center gap-3.5 p-3 sm:p-3.5 rounded-2xl border transition-all active:scale-[0.98] ${t?"bg-[rgba(var(--color-primary-rgb),0.08)] border-[var(--color-primary)] dark:bg-[rgba(var(--color-primary-rgb),0.12)] dark:border-[var(--color-primary)] shadow-[0_0_0_1px_rgba(var(--color-primary-rgb),0.2)]":"bg-slate-50 border-slate-200 dark:bg-slate-800/50 dark:border-slate-700 hover:border-[var(--color-primary)]/40 dark:hover:border-[var(--color-primary)]/40"} group">
        <div class="w-11 h-11 sm:w-12 sm:h-12 rounded-xl ${t?"bg-[var(--color-primary)] text-white border-none":"bg-white text-slate-400 border border-slate-200 dark:border-slate-600 group-hover:text-[var(--color-primary)]"} flex items-center justify-center shadow-sm shrink-0 overflow-hidden transition-colors">
            <i class="fa-solid fa-layer-group text-base sm:text-lg"></i>
        </div>
        <span class="text-xs sm:text-sm font-bold uppercase tracking-widest text-left flex-1 ${t?"text-[var(--color-primary)]":"text-slate-600 dark:text-slate-300"}">SEMUA</span>
        <i class="fa-solid fa-circle-check text-base ${t?"text-[var(--color-primary)]":"text-slate-300 dark:text-slate-600"}"></i>
    </button>`,u.categories.forEach(r=>{let i=Ye===r.name,n=r.img?`<img loading="lazy" src="${m(r.img)}" alt="${m(r.name)}" class="w-full h-full object-cover" onerror="this.onerror=null;this.src='https://placehold.co/100?text=Cat'">`:'<i class="fa-solid fa-box text-base sm:text-lg"></i>';e+=`
        <button onclick="setCat('${m(r.name)}'); closeCategoryModal()" class="w-full flex items-center gap-3.5 p-3 sm:p-3.5 rounded-2xl border transition-all active:scale-[0.98] ${i?"bg-[rgba(var(--color-primary-rgb),0.08)] border-[var(--color-primary)] dark:bg-[rgba(var(--color-primary-rgb),0.12)] dark:border-[var(--color-primary)] shadow-[0_0_0_1px_rgba(var(--color-primary-rgb),0.2)]":"bg-slate-50 border-slate-200 dark:bg-slate-800/50 dark:border-slate-700 hover:border-[var(--color-primary)]/40 dark:hover:border-[var(--color-primary)]/40"} group">
            <div class="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-white dark:bg-slate-800 flex items-center justify-center shadow-sm shrink-0 text-slate-400 group-hover:text-[var(--color-primary)] overflow-hidden border border-slate-200 dark:border-slate-600">
                ${n}
            </div>
            <span class="text-xs sm:text-sm font-bold uppercase tracking-widest text-left flex-1 line-clamp-1 ${i?"text-[var(--color-primary)]":"text-slate-600 dark:text-slate-300"}">${m(r.name)}</span>
            <i class="fa-solid fa-circle-check text-base ${i?"text-[var(--color-primary)]":"text-slate-300 dark:text-slate-600"}"></i>
        </button>`});const a=l("modal-category-list");a&&(a.innerHTML=`<div class="flex flex-col gap-2.5 pb-6 w-full">${e}</div>`);const s=l("category-modal"),o=l("category-modal-content");s&&o&&(s.classList.contains("hidden")&&ie("category"),ye(s,o))};window.openCategoryModal=Po;window.openBrandModal=()=>{let e="",t=Je==="Semua Merek";e+=`
    <button onclick="setBrand('Semua Merek'); closeBrandModal()" class="flex flex-col items-center justify-start p-2.5 sm:p-3.5 rounded-2xl border transition-all ${t?"bg-[rgba(var(--color-primary-rgb),0.08)] border-[var(--color-primary)] dark:bg-[rgba(var(--color-primary-rgb),0.12)] dark:border-[var(--color-primary)] shadow-[0_0_0_1px_rgba(var(--color-primary-rgb),0.2)]":"bg-slate-50 border-slate-200 dark:bg-slate-800/50 dark:border-slate-700 hover:border-[var(--color-primary)]/40 dark:hover:border-[var(--color-primary)]/40"} group">
        <div class="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl ${t?"bg-[var(--color-primary)] text-white border-none":"bg-white text-slate-400 border border-slate-200 dark:border-slate-600 group-hover:text-[var(--color-primary)]"} flex items-center justify-center shadow-sm mb-2.5 transition-colors shrink-0">
            <i class="fa-solid fa-copyright text-lg sm:text-xl"></i>
        </div>
        <span class="text-[9px] font-bold uppercase tracking-widest text-center leading-tight line-clamp-2 w-full break-words ${t?"text-[var(--color-primary)]":"text-slate-600 dark:text-slate-300"}">SEMUA MEREK</span>
    </button>`,u.brands.forEach(r=>{let i=Je===r.name,n=r.img?`<img loading="lazy" src="${m(r.img)}" alt="${m(r.name)}" class="w-full h-full object-contain p-1.5" >`:'<i class="fa-solid fa-tag text-lg sm:text-xl"></i>';e+=`
        <button onclick="setBrand('${m(r.name)}'); closeBrandModal()" class="flex flex-col items-center justify-start p-2.5 sm:p-3.5 rounded-2xl border transition-all ${i?"bg-[rgba(var(--color-primary-rgb),0.08)] border-[var(--color-primary)] dark:bg-[rgba(var(--color-primary-rgb),0.12)] dark:border-[var(--color-primary)] shadow-[0_0_0_1px_rgba(var(--color-primary-rgb),0.2)]":"bg-slate-50 border-slate-200 dark:bg-slate-800/50 dark:border-slate-700 hover:border-[var(--color-primary)]/40 dark:hover:border-[var(--color-primary)]/40"} group">
            <div class="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white flex items-center justify-center shadow-sm mb-2.5 text-slate-400 group-hover:text-[var(--color-primary)] overflow-hidden shrink-0 border border-slate-200 dark:border-slate-600">
                ${n}
            </div>
            <span class="text-[9px] font-bold uppercase tracking-widest text-center leading-tight line-clamp-2 w-full break-words ${i?"text-[var(--color-primary)]":"text-slate-600 dark:text-slate-300"}">${m(r.name)}</span>
        </button>`});const a=l("modal-brand-grid");a&&(a.innerHTML=e);const s=l("brand-modal"),o=l("brand-modal-content");s&&o&&(s.classList.contains("hidden")&&ie("brand"),ye(s,o))};window.closeCategoryModal=(e=!1)=>{const t=l("category-modal"),a=l("category-modal-content");t&&a&&ne("category",e,()=>{ve(t,a)})};window.closeBrandModal=(e=!1)=>{const t=l("brand-modal"),a=l("brand-modal-content");t&&a&&ne("brand",e,()=>{ve(t,a)})};window.openQuickMenuModal=()=>{const e=l("quickmenu-modal"),t=l("quickmenu-modal-content");e&&t&&(e.classList.contains("hidden")&&ie("quickmenu"),ye(e,t))};window.openTermsModal=()=>{const e=`
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
    `,t=u?.store?.terms,a=t?t.includes("<")?t:`<div class="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-800/40 leading-relaxed text-xs sm:text-sm text-slate-600 dark:text-slate-300 whitespace-pre-line">${t}</div>`:e;_("terms-modal-content-body",a);const s=l("terms-modal"),o=l("terms-modal-content");s&&o&&(s.classList.contains("hidden")&&ie("terms"),ye(s,o))};window.closeTermsModal=(e=!1)=>{const t=l("terms-modal"),a=l("terms-modal-content");t&&a&&ne("terms",e,()=>{ve(t,a)})};window.openPrivacyModal=()=>{const e=`
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
    `,t=u?.store?.privacy,a=t?t.includes("<")?t:`<div class="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-800/40 leading-relaxed text-xs sm:text-sm text-slate-600 dark:text-slate-300 whitespace-pre-line">${t}</div>`:e;_("privacy-modal-content-body",a);const s=l("privacy-modal"),o=l("privacy-modal-content");s&&o&&(s.classList.contains("hidden")&&ie("privacy"),ye(s,o))};window.closePrivacyModal=(e=!1)=>{const t=l("privacy-modal"),a=l("privacy-modal-content");t&&a&&ne("privacy",e,()=>{ve(t,a)})};window.closeQuickMenuModal=(e=!1)=>{const t=l("quickmenu-modal"),a=l("quickmenu-modal-content");t&&a&&ne("quickmenu",e,()=>{ve(t,a)})};window.openShoppingGuideModal=()=>{const e=l("shopping-guide-modal"),t=l("shopping-guide-modal-content");e&&t&&(e.classList.contains("hidden")&&ie("guide"),ye(e,t))};window.closeShoppingGuideModal=(e=!1)=>{const t=l("shopping-guide-modal"),a=l("shopping-guide-modal-content");t&&a&&ne("guide",e,()=>{ve(t,a)})};window.navigateFromQuickMenu=e=>{closeQuickMenuModal(!0);const t=W.indexOf("quickmenu");t>-1&&W.splice(t,1),typeof e=="function"?(history.replaceState({view:re},"",window.location.href),e()):(history.replaceState({view:e},"",window.location.href),fe(e,!0))};const Jt=e=>{const t=u.products?.find(o=>o&&o.id!=null&&String(o.id)===String(e.id));let a=e.price||0;if(e.variantName&&t&&t.variants){const o=t.variants.find(r=>r.name===e.variantName);o&&o.price!=null&&(a=o.price)}if(e.variantName||!t||!t.wholesale||!t.wholesale.length)return a;const s=E.filter(o=>o.id!=null&&String(o.id)===String(e.id)).reduce((o,r)=>o+(parseFloat(r.qty)||0),0);for(let o of t.wholesale.slice().sort((r,i)=>i.minQty-r.minQty))if(s>=parseFloat(o.minQty))return o.price;return a},To=e=>{const t=u.products?.find(a=>a&&a.id!=null&&String(a.id)===String(e.id));if(!t)return 0;if(e.variantName&&t.variants){const a=t.variants.find(s=>s.name===e.variantName);if(a&&a.hpp!=null)return parseFloat(a.hpp)||0}return parseFloat(t.hpp)||0},Yt=e=>{if(!e)return 0;const t=u.products?.find(a=>a&&a.id!=null&&String(a.id)===String(e.id));if(!t)return parseFloat(e.poin)||0;if(e.variantName&&t.variants){const a=t.variants.find(s=>s.name===e.variantName);if(a&&a.poin!==void 0&&a.poin!==null&&a.poin!==""){const s=parseFloat(a.poin);if(!isNaN(s)&&s>0)return s}}return parseFloat(t.poin)||0},Ao=(e,t,a,s)=>{if(!e||!t||!a||!s)return 0;const o=6371,r=(a-e)*Math.PI/180,i=(s-t)*Math.PI/180,n=Math.sin(r/2)*Math.sin(r/2)+Math.cos(e*Math.PI/180)*Math.cos(a*Math.PI/180)*Math.sin(i/2)*Math.sin(i/2),d=2*Math.atan2(Math.sqrt(n),Math.sqrt(1-n));return o*d},Zt=e=>{if(!e||typeof e!="string")return null;let t=e.trim();try{t=decodeURIComponent(t)}catch{}const a=t.match(/@(-?\d{1,3}\.\d+)[,\s]+(-?\d{1,3}\.\d+)/);if(a){const i=parseFloat(a[1]),n=parseFloat(a[2]);if(!isNaN(i)&&!isNaN(n)&&Math.abs(i)<=90&&Math.abs(n)<=180)return{lat:a[1],lng:a[2]}}const s=t.match(/[?&](?:q|ll|query|loc|center)=(-?\d{1,3}\.\d+)[,\s]+(-?\d{1,3}\.\d+)/i);if(s){const i=parseFloat(s[1]),n=parseFloat(s[2]);if(!isNaN(i)&&!isNaN(n)&&Math.abs(i)<=90&&Math.abs(n)<=180)return{lat:s[1],lng:s[2]}}const o=t.match(/(\d+)[°\s]+(\d+)['\s]+([\d.]+)"?\s*([NSns])[,\s]+(\d+)[°\s]+(\d+)['\s]+([\d.]+)"?\s*([EWew])/);if(o){let i=parseInt(o[1],10)+parseInt(o[2],10)/60+parseFloat(o[3])/3600;o[4].toUpperCase()==="S"&&(i=-i);let n=parseInt(o[5],10)+parseInt(o[6],10)/60+parseFloat(o[7])/3600;return o[8].toUpperCase()==="W"&&(n=-n),{lat:i.toFixed(8),lng:n.toFixed(8)}}const r=t.match(/(-?\d{1,3}\.\d{3,20})[,\s;\t]+(-?\d{1,3}\.\d{3,20})/);if(r){const i=parseFloat(r[1]),n=parseFloat(r[2]);if(!isNaN(i)&&!isNaN(n)&&Math.abs(i)<=90&&Math.abs(n)<=180)return{lat:r[1],lng:r[2]}}return null},So=e=>{const t=(typeof e=="string"?e:e?.value||"").trim(),a=Zt(t);return a?(K("set-lat",a.lat),K("set-lng",a.lng),f("Koordinat GPS berhasil disalin!"),a):(f("Format tidak dikenali! Tempel koordinat: Lat, Lng atau link Google Maps"),null)},Do=(e=E,t=u.store)=>{if(!e||!e.length)return{totalPoints:0,directPoints:0,spendPoints:0,nonPointSpend:0,threshold:1e5,pointsPerThreshold:1,isSpendPointsActive:!1,remainingToNextPoint:0,progressPercent:0};let a=0,s=0;e.forEach(g=>{const w=Yt(g),v=parseFloat(g.qty)||0;if(w>0)a+=w*v;else{const M=Jt(g);s+=M*v}});let o=0,r=0,i=0;const n=t?t.spendPointsEnabled===!0||t.spendPointsEnabled==="true":!1,d=Math.max(1,parseFloat(t?.spendPointsThreshold)||1e5),c=Math.max(1,parseFloat(t?.spendPointsPerThreshold)||1);if(n&&s>0){const g=Math.floor(s/d);o=g*c;const w=s%d;r=w>0?d-w:d,i=Math.min(100,Math.round((w||(g>0?d:0))/d*100))}return{totalPoints:a+o,directPoints:a,spendPoints:o,nonPointSpend:s,threshold:d,pointsPerThreshold:c,isSpendPointsActive:n,remainingToNextPoint:r,progressPercent:i}};window.getEffP=Jt;window.getEffHpp=To;window.getEffPoin=Yt;window.calculateCartPoints=Do;window.getDist=Ao;window.parseGeoCoordinates=Zt;window.autoParseCoords=So;let at=null,_e=null;const Co=async e=>{try{if(navigator.clipboard&&navigator.clipboard.writeText)await navigator.clipboard.writeText(e);else{const t=document.createElement("textarea");t.value=e,t.style.position="fixed",t.style.opacity="0",document.body.appendChild(t),t.select(),document.execCommand("copy"),document.body.removeChild(t)}Ne("Kode "+e+" berhasil disalin!")}catch{Ne("Gagal menyalin. Kode: "+e)}},Ne=(e,t,a,s)=>{const o=l("toast");if(!o)return;if(!t){const I=e.toLowerCase();/berhasil|sukses|selamat|✅|🎉|aktif|dikirim|disimpan|diupload|disalin|dipulihkan|login berhasil|restock|terhapus|diunduh|diperbarui/.test(I)?t="success":/gagal|error|tolak|❌|tidak valid|tidak ditemukan|tidak cukup|salah|ditolak|quota|koneksi|putus|izin|wajib/.test(I)?t="error":/tunggu|maks|hati|stok|coba|⚠️|pastikan/.test(I)?t="warning":/upload|proses|memuat|loading|sedang/.test(I)?t="loading":t="info"}const r=getComputedStyle(document.documentElement),i=r.getPropertyValue("--color-primary-rgb").trim()||"16,185,129",n=r.getPropertyValue("--color-primary").trim()||"#10b981";r.getPropertyValue("--color-primary-dark").trim();const d={success:{icon:"fa-circle-check",label:"Berhasil",accent:n,iconBg:`rgba(${i},0.12)`,border:`rgba(${i},0.35)`},error:{icon:"fa-circle-xmark",label:"Gagal",accent:"#ef4444",iconBg:"rgba(239,68,68,0.12)",border:"rgba(239,68,68,0.35)"},warning:{icon:"fa-triangle-exclamation",label:"Perhatian",accent:"#f59e0b",iconBg:"rgba(245,158,11,0.12)",border:"rgba(245,158,11,0.35)"},loading:{icon:"fa-spinner fa-spin",label:"Memproses",accent:n,iconBg:`rgba(${i},0.12)`,border:`rgba(${i},0.35)`},info:{icon:"fa-circle-info",label:"Informasi",accent:n,iconBg:`rgba(${i},0.12)`,border:`rgba(${i},0.35)`}},c=d[t]||d.info,g=l("toast-icon");g&&(g.className="fa-solid "+c.icon);const w=l("toast-title");w&&(w.textContent=a||c.label,w.style.display="block",w.style.color=c.accent);const v=l("toast-icon-wrap");v&&(v.style.background=c.iconBg,v.style.color=c.accent),F("toast-message",e.replace(/^[✅❌⚠️🎉🔔]\s*/,""));let M=l("toast-progress");M||(M=document.createElement("div"),M.id="toast-progress",o.appendChild(M)),M.style.background=c.accent,M.style.transition="none",M.style.width="100%",M.style.opacity="0.85",clearTimeout(at),o.classList.add("toast-show");const G=s||(t==="loading"?8e3:t==="error"?4500:3e3);requestAnimationFrame(()=>requestAnimationFrame(()=>{M.style.transition=`width ${G}ms linear`,M.style.width="0%"})),at=setTimeout(()=>{o.classList.remove("toast-show")},G)},$o=e=>Ne(e,"loading","Memproses...",8e3),Ro=()=>{clearTimeout(at);const e=l("toast");e&&e.classList.remove("toast-show")},Eo=()=>{const e=document.documentElement.classList.toggle("dark");localStorage.setItem("freshmart_theme",e?"dark":"light");const t=document.getElementById("icon-theme")||document.getElementById("theme-toggle-icon");t&&(t.className=e?"fa-solid fa-sun text-sm text-amber-400":"fa-solid fa-moon text-sm text-slate-600 dark:text-slate-300")},Lo=(e,t,a,s="Ya, Hapus",o=!0)=>{let r=e,i=t,n=a,d=s,c=o;typeof t=="function"&&(n=t,i=e,r=typeof s=="string"&&s!=="Ya, Hapus"?s:"Konfirmasi Tindakan",d=typeof a=="string"?a:"Ya, Lanjutkan",c=!0),F("confirm-title",r),F("confirm-msg",i);const g=l("confirm-yes-btn");g&&(g.innerText=d,c?(g.className="flex-1 py-3.5 bg-rose-600 text-white font-bold rounded-xl hover:bg-rose-700 active:scale-95 transition-all text-sm shadow-md shadow-rose-500/30 cursor-pointer",l("confirm-icon-box").className="w-16 h-16 bg-rose-50 dark:bg-rose-900/30 text-rose-500 dark:text-rose-400 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-5 border border-rose-200 dark:border-rose-800",l("confirm-icon").className="fa-solid fa-triangle-exclamation"):(g.className="flex-1 py-3.5 bg-[var(--color-primary)] text-white font-bold rounded-xl hover:opacity-90 active:scale-95 transition-all text-sm shadow-sm cursor-pointer",l("confirm-icon-box").className="w-16 h-16 bg-[rgba(var(--color-primary-rgb),0.08)] dark:bg-[rgba(var(--color-primary-rgb),0.15)] text-[var(--color-primary)] rounded-2xl flex items-center justify-center text-3xl mx-auto mb-5 border border-[var(--color-primary)]/20",l("confirm-icon").className="fa-solid fa-copy")),_e=n;const w=l("custom-confirm-modal");w&&w.classList.contains("hidden")&&ie("confirm"),q("custom-confirm-modal"),setTimeout(()=>{l("custom-confirm-modal").classList.remove("opacity-0"),l("custom-confirm-box").classList.remove("scale-95")},10)},Xt=(e=!1)=>{ne("confirm",e,()=>{l("custom-confirm-modal").classList.add("opacity-0"),l("custom-confirm-box").classList.add("scale-95"),setTimeout(()=>T("custom-confirm-modal"),300)})},Io=()=>{if(_e){const e=_e;_e=null,Xt(),setTimeout(()=>{e()},150)}},Fo=(e,t,a)=>{let s=document.createElement("div");s.className="fixed inset-0 z-[9999] bg-slate-900/80 flex items-center justify-center p-4 opacity-0 transition-opacity duration-300",s.innerHTML=`
        <div class="bg-white dark:bg-slate-800 rounded-3xl w-full max-w-[320px] p-6 shadow-2xl border border-slate-200 dark:border-slate-700 relative transform scale-95 transition-all duration-300 flex flex-col text-center">
            <h3 class="font-bold text-slate-900 dark:text-white text-lg mb-4">${e}</h3>
            <input type="text" id="prompt-input" value="${t}" class="w-full px-4 py-3.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-700 dark:text-slate-300 mb-6 focus:ring-2 focus:ring-[var(--color-primary)] outline-none text-center font-bold text-xl tracking-wider" autocomplete="off" />
            <div class="flex gap-3">
                <button id="prompt-cancel" class="flex-1 py-3.5 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 font-bold rounded-xl hover:bg-slate-200 dark:hover:bg-slate-600 active:scale-95 transition-all text-sm">Batal</button>
                <button id="prompt-ok" class="flex-1 py-3.5 bg-[var(--color-primary)] text-white font-bold rounded-xl hover:opacity-90 active:scale-95 transition-all text-sm shadow-md">Simpan</button>
            </div>
        </div>
    `,document.body.appendChild(s);const o=s.querySelector("div");ie("prompt"),setTimeout(()=>{s.classList.remove("opacity-0"),o.classList.remove("scale-95")},10);const r=s.querySelector("#prompt-input");r.focus(),r.select(),window.closePrompt=(i=!1)=>{!s||!s.parentNode||ne("prompt",i,()=>{s.classList.add("opacity-0"),o.classList.add("scale-95"),setTimeout(()=>s.remove(),300),window.closePrompt=null})},s.querySelector("#prompt-cancel").onclick=()=>window.closePrompt(),s.querySelector("#prompt-ok").onclick=()=>{let i=r.value;window.closePrompt(),a(i)}},_o=()=>{typeof window.openReceiptPreview=="function"&&window.openReceiptPreview()};window.copyVoucher=Co;window.showToast=Ne;window.showToastLoading=$o;window.hideToast=Ro;window.toggleTheme=Eo;window.showConfirm=Lo;window.closeConfirm=Xt;window.executeConfirm=Io;window.customPrompt=Fo;window.checkProPrint=_o;typeof history<"u"&&"scrollRestoration"in history&&(history.scrollRestoration="manual");window.scrollTo(0,0);document.documentElement&&(document.documentElement.scrollTop=0);document.body&&(document.body.scrollTop=0);Qt();window.firebase=Be;window.db=C;window.DOMPurify=ta;window.ensureScriptLoaded=ga;if(typeof window<"u"){const e=window.print?window.print.bind(window):null;window.print=function(){window.AndroidNativeApp&&typeof window.AndroidNativeApp.print=="function"?window.AndroidNativeApp.print():e&&e()}}window.uiPalettes=sa;window.hexToRgb=oa;window.applyUITheme=Mt;window.toggleTheme=ra;window.applyBackgroundStyle=Pt;ia();const Bo=localStorage.getItem("freshmart_ui_theme")||"emerald";Mt(Bo,localStorage.getItem("freshmart_theme_color"));const vt=()=>{wa();const e=localStorage.getItem("freshmart_bg_style")||"minimalist",t=localStorage.getItem("freshmart_bg_custom_url")||"";Pt(e,t),ba()};document.readyState==="loading"?document.addEventListener("DOMContentLoaded",vt):vt();window.onerror=function(e,t,a,s,o){return console.error("Global Error Caught:",e,"at",a,":",s),typeof showToast=="function"&&showToast("Ops, ada kendala sistem."),!1};window.addEventListener("unhandledrejection",function(e){console.warn("Promise Rejection Sentinel:",e.reason)});window.updateSEO=xa;window.injectJSONLD=ha;window.rewardStatusLabel=ot;window.getYouTubeId=ya;window.parseVideoUrl=va;window.fixDriveVideo=ka;window.fixDriveVideoPreview=Ma;let kt=Ue;window.calcTaxDetails=e=>{const t=u?.store||{},a=t.ppnEnabled===!0||t.ppnEnabled==="true",s=parseFloat(t.ppnRate)||11,o=t.ppnType||"exclusive";if(!a||e<=0)return{ppnEnabled:!1,ppnRate:0,ppnType:o,ppnAmount:0,dppAmount:Math.max(0,e),grandTotalAdd:0};if(o==="inclusive"){const r=Math.round(e*100/(100+s)),i=e-r;return{ppnEnabled:!0,ppnRate:s,ppnType:"inclusive",ppnAmount:i,dppAmount:r,grandTotalAdd:0}}else{const r=Math.round(e*s/100);return{ppnEnabled:!0,ppnRate:s,ppnType:"exclusive",ppnAmount:r,dppAmount:Math.max(0,e),grandTotalAdd:r}}};typeof requestIdleCallback<"u"?requestIdleCallback(ft,{timeout:5e3}):setTimeout(ft,3e3);window.updateProBadge=()=>{};window.isAdm=!1;window.isPro=!0;history.replaceState({view:"view-catalog"},"","");window.addEventListener("DOMContentLoaded",async()=>{await na();try{la()}catch(e){console.warn("[syncAppMeta] Error:",e)}da(),ca(),wt(),window.attachRewardsRealtime=wt,Qe.onAuthStateChanged(async e=>{if(!pa()){if(e&&e.uid!==Tt){await Qe.signOut();return}if(e){if(!await ma()){console.log("[Auth] Sesi admin lokal sudah tidak aktif (diambil alih perangkat lain)."),bt(),localStorage.removeItem("freshmart_admin_session_id"),window.isAdm=!1,window.__localIsAdm=!1,window.isPro=!1,window.updateProBadge&&window.updateProBadge(),await Qe.signOut();return}ua(),window.isAdm=!0,window.isPro=!0,localStorage.removeItem("isFreshmartPro"),localStorage.removeItem("freshmart_license_code"),window.updateProBadge&&window.updateProBadge();let a=document.getElementById("view-admin-login");a&&!a.classList.contains("hidden")&&(history.replaceState({view:"view-admin"},"",window.location.href),changeView("view-admin",!0),openAdminMenu(),showToast("Sesi Dipulihkan! Selamat Datang."))}else bt(),localStorage.removeItem("freshmart_admin_session_id"),window.isAdm=!1,window.__localIsAdm=!1,window.isPro=!1,window.updateProBadge&&window.updateProBadge(),localStorage.removeItem("isFreshmartPro"),localStorage.removeItem("freshmart_license_code")}})});window.el=l;window.show=q;window.hide=T;window.toggleCls=J;window.setIn=F;window.setH=_;window.setV=K;window.getV=N;window.esc=m;window.fixD=je;window.fCur=D;window.sL=ze;window.ssL=Ie;window.defaultFbC=At;window.fbC=At;window.defApp=Pa;window.ADMIN_UID=Tt;window.sLoad=z;window.hLoad=L;window.sanitizeCart=fa;const k=(e,t,a)=>{try{Object.defineProperty(window,e,{get:t,set:a,configurable:!0})}catch{}};k("GAS_UPLOAD_URL",()=>kt,e=>{kt=e});k("confirmCb",()=>Ta,e=>{ws(e)});k("appData",()=>u,e=>{Aa(e)});k("cart",()=>E,e=>{St(e)});k("wishlist",()=>Da,e=>{Sa(e)});k("myOrders",()=>O,e=>{Oe(e)});k("cust",()=>b,e=>{Dt(e)});k("currentMember",()=>V,e=>{Q(e)});k("selectedReward",()=>oe,e=>{se(e)});k("memberCheckTimer",()=>Ca,e=>{bs(e)});k("aCat",()=>Ye,e=>{$t(e)});k("aBrand",()=>Je,e=>{Rt(e)});k("sQ",()=>Ra,e=>{$a(e)});k("cSort",()=>La,e=>{Ea(e)});k("cView",()=>Fa,e=>{Ia(e)});k("cPage",()=>_a,e=>{rt(e)});k("iPP",()=>Na,e=>{Ba(e)});k("cTab",()=>Oa,e=>{gs(e)});k("aSq",()=>ja,e=>{xs(e)});k("eId",()=>Ua,e=>{hs(e)});k("cProd",()=>Ga,e=>{qa(e)});k("cVar",()=>Ha,e=>{Ka(e)});k("tVars",()=>Va,e=>{ys(e)});k("tWhol",()=>Qa,e=>{vs(e)});k("tSpec",()=>Wa,e=>{ks(e)});k("cQty",()=>Ja,e=>{za(e)});k("oMods",()=>W,e=>{Ya(e)});k("aOrdLst",()=>Xa,e=>{Za(e)});k("aCustLst",()=>ts,e=>{es(e)});k("aRevLst",()=>ss,e=>{as(e)});k("gOrds",()=>rs,e=>{os(e)});k("gReviews",()=>ns,e=>{is(e)});k("cVOrd",()=>ds,e=>{ls(e)});k("vouch",()=>y,e=>{H(e)});k("toastT",()=>cs,e=>{Ms(e)});k("isSaving",()=>st,e=>{ae(e)});k("reviewFilterMode",()=>ms,e=>{ps(e)});k("lastReportPeriod",()=>fs,e=>{us(e)});
