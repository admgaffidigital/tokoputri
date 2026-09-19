import{f as _e}from"./vendor-firebase-core-D2OF5R23.js";import"./vendor-firebase-db-BIUZcnOd.js";import{p as Vt}from"./vendor-utils-Bszxp-Ae.js";import{r as J,d as $,p as me,g as ct,c as Qt,a as Wt,b as zt,s as Jt,u as Zt,h as Yt,e as ht,t as Xt,f as vt,i as ea,l as pt,j as ta,k as aa,m as sa,n as ra,o as mt,q as He,v as oa,A as yt,w as ia,x as ut,y as na,z as kt,B as la,C as da,D as ca}from"./module-admin-DBZiTYkI.js";import{e as l,Q as N,a as u,g as q,c as E,i as L,f as D,aj as b,h as T,j as m,ak as H,al as Q,am as se,an as V,ao as re,ap as v,A as z,d as _,a4 as tt,af as Qe,b as Ee,a5 as ae,R as W,S as I,aq as j,ar as Be,s as Pt,m as K,as as Mt,k as f,a8 as Ne,a3 as at,l as Tt,o as Pe,p as ge,y as xe,K as At,D as st,M as St,F as We,E as ze,a1 as pa,at as ma,au as ua,t as fa,ac as ba,ae as wa,ad as ga,ag as xa,av as ha,aw as va,ax as ya,w as ka,ay as Pa,N as Ma,G as Ta,O as Aa,I as Sa,P as Da,J as $a,B as Ca,az as Ra,C as Ea,aA as Ia,aB as Fa,aC as _a,z as La,q as Ba,x as Na,r as ja,aD as Oa,aE as Ua,aF as qa,v as Ga,u as Ka,aG as Ha,U as Va,T as Qa,W as Wa,V as za,Y as Ja,X as Za,a7 as Ya,a0 as Xa,ah as es,a9 as ts,a2 as as,a6 as ss,aH as rs,ab as os,aa as is,_ as ns,Z as ls,aI as ds,aJ as cs,$ as ps,ai as ms,aK as us,aL as fs,aM as bs,aN as ws,aO as gs}from"./module-print-CjXZkp6R.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function a(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(s){if(s.ep)return;s.ep=!0;const o=a(s);fetch(s.href,o)}})();let je="https://script.google.com/macros/s/AKfycbx3dW9rHcdoKNYjSOJ8PoH2k6fABe7XlBD9teNHsBlCBqJquq8jd4UvnfXZVsfKdFsC/exec";const Dt=()=>{l("voucher-input");const e=(N("voucher-input")||"").toUpperCase().trim(),t=(u.vouchers||[]).find(s=>(s.code||"").toUpperCase()===e);q("voucher-msg-container");const a=typeof window.getEffP=="function"?window.getEffP:s=>s.effectivePrice||s.price||0,r=E.reduce((s,o)=>s+(parseFloat(a(o))||0)*(parseFloat(o.qty)||0),0);if(t){let s=!0;t.targetProduct&&t.targetProduct!==""&&(s=E.some(o=>o&&String(o.id)===String(t.targetProduct))),t.targetProduct&&t.targetProduct!==""&&!s?(H(null),L("voucher-msg",'<i class="fa-solid fa-box mr-1"></i> Khusus Produk Tertentu!'),l("voucher-msg")&&(l("voucher-msg").className="text-sm font-bold text-rose-500 dark:text-rose-400")):t.minPurchase&&parseFloat(t.minPurchase)>0&&r<parseFloat(t.minPurchase)?(H(null),L("voucher-msg",`<i class="fa-solid fa-circle-exclamation mr-1"></i> Minimal belanja ${D(t.minPurchase)}`),l("voucher-msg")&&(l("voucher-msg").className="text-sm font-bold text-amber-500 dark:text-amber-400")):t.type&&t.type.includes("shipping")&&b.deliveryMethod!=="delivery"?(H(null),L("voucher-msg",'<i class="fa-solid fa-motorcycle mr-1"></i> Khusus pesanan dikirim kurir!'),l("voucher-msg")&&(l("voucher-msg").className="text-sm font-bold text-rose-500 dark:text-rose-400")):(H(t),L("voucher-msg",'<i class="fa-solid fa-check-circle mr-1"></i> Voucher Diterapkan!'),l("voucher-msg")&&(l("voucher-msg").className="text-sm font-bold text-[var(--color-primary)]"))}else e===""?(H(null),T("voucher-msg-container"),typeof window.rPay=="function"&&window.rPay()):(H(null),L("voucher-msg",'<i class="fa-solid fa-times-circle mr-1"></i> Kode Tidak Valid'),l("voucher-msg")&&(l("voucher-msg").className="text-sm font-bold text-rose-500 dark:text-rose-400"));typeof window.rPay=="function"&&window.rPay()},xs=()=>{let e=document.getElementById("voucher-modal");e||(e=document.createElement("div"),e.id="voucher-modal",e.className="fixed inset-0 z-[115] bg-slate-900/80 flex items-end sm:items-center justify-center p-0 sm:p-5",e.onclick=r=>{r.target===e&&rt()},document.body.appendChild(e));const t=(u.vouchers||[]).filter(r=>r.isShow!==!1&&r.isShow!=="false"),a=t.length?t.map(r=>{let s="";r.type==="percent"?s=`Diskon ${r.value}%`:r.type==="shipping_free"?s="Gratis Ongkir":r.type==="shipping_flat"?s=`Diskon Ongkir ${D(r.value)}`:s=`Potongan ${D(r.value)}`;const o=r.minPurchase&&parseFloat(r.minPurchase)>0?`Min. belanja ${D(r.minPurchase)}`:"Tanpa minimal belanja";return`
        <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/80 hover:border-[var(--color-primary)] transition-all shadow-xs">
            <div class="flex items-start gap-3.5 min-w-0">
                <div class="w-11 h-11 rounded-xl bg-[var(--color-primary)] text-white flex items-center justify-center text-lg shrink-0 shadow-sm mt-0.5">
                    <i class="fa-solid fa-ticket"></i>
                </div>
                <div class="min-w-0">
                    <div class="flex flex-wrap items-center gap-2 mb-1.5">
                        <span class="font-extrabold text-sm font-mono tracking-wider text-slate-800 dark:text-white bg-white dark:bg-slate-900 px-2.5 py-0.5 rounded-lg border border-slate-200 dark:border-slate-700 select-all">${m(r.code)}</span>
                        <span class="primary-bg text-white text-[10px] font-bold px-2 py-0.5 rounded-md uppercase whitespace-nowrap shadow-2xs">${s}</span>
                    </div>
                    <p class="text-[11px] font-medium text-slate-500 dark:text-slate-400 flex items-center gap-1.5"><i class="fa-solid fa-circle-check text-[var(--color-primary)] text-xs"></i> ${o}</p>
                </div>
            </div>
            <div class="flex items-center gap-2 shrink-0 pt-2 md:pt-0 border-t md:border-t-0 border-slate-200 dark:border-slate-700">
                <button type="button" onclick="copyVoucherCode('${m(r.code)}')" class="flex-1 md:flex-initial bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] text-xs font-bold uppercase tracking-wider px-3.5 py-2 rounded-xl transition-all active:scale-95 flex items-center justify-center gap-1.5 shadow-2xs">
                    <i class="fa-regular fa-copy"></i> Salin
                </button>
                <button type="button" onclick="useVoucherCode('${m(r.code)}')" class="flex-1 md:flex-initial primary-bg text-white text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-xl transition-all active:scale-95 flex items-center justify-center gap-1.5 shadow-sm">
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
        </div>`,e.style.opacity="0",e.style.display="flex",requestAnimationFrame(()=>{e.style.transition="opacity 0.25s ease",e.style.opacity="1"}),typeof window.pushModalHistory=="function"&&window.pushModalHistory("voucher")},hs=e=>{navigator.clipboard&&navigator.clipboard.writeText?navigator.clipboard.writeText(e).then(()=>{typeof window.showToast=="function"&&window.showToast(`✅ Kode "${e}" disalin ke clipboard!`)}).catch(()=>{typeof window.showToast=="function"&&window.showToast(`Kode Kupon: ${e}`)}):typeof window.showToast=="function"&&window.showToast(`Kode Kupon: ${e}`)},vs=e=>{rt();const t=l("voucher-input");t&&(t.value=e,Dt()),E.length>0?typeof window.changeView=="function"&&window.changeView("view-checkout"):(typeof window.showToast=="function"&&window.showToast(`Kode "${e}" siap digunakan saat checkout belanja!`),typeof window.changeView=="function"&&window.changeView("view-catalog"))},rt=(e=!1)=>{const t=()=>{const a=document.getElementById("voucher-modal");!a||a.style.display==="none"||(a.style.opacity="0",a.style.transition="opacity 0.25s ease",setTimeout(()=>{a.style.display="none",a.style.opacity="",a.style.transition=""},250))};typeof J=="function"?J("voucher",e,t):typeof window.requestCloseModal=="function"?window.requestCloseModal("voucher",e,t):t()};window.applyVoucher=Dt;window.openVoucherModal=xs;window.closeVoucherModal=rt;window.copyVoucherCode=hs;window.useVoucherCode=vs;const te=new Map,ys=3*60*1e3,ks="https://lh3.googleusercontent.com/d/1KHwsV5sK6aAH3-eP_vTJA4tE5MyRukLo",Ps=e=>{if(!e){te.clear();return}const t=e.toString().replace(/\D/g,"");let a=t,r=t.startsWith("0")?"62"+t.substring(1):t.startsWith("62")?t:"62"+t,s=t.startsWith("62")?"0"+t.substring(2):t;te.delete(t),te.delete(a),te.delete(r),te.delete(s)},ot=async(e,t="")=>{try{let a=(e||"").toString().replace(/\D/g,"");if(a.startsWith("0")?a="62"+a.substring(1):a.startsWith("62")||(a="62"+a),!a||a.length<9)return null;let r=[];try{const w=localStorage.getItem("freshmart_my_orders");w&&(r=JSON.parse(w)||[])}catch{}if(!r.length)return null;let s=0;const o=r.find(w=>w.finalMemberPoints!==void 0&&w.finalMemberPoints!==null);if(o?s=Math.max(0,parseFloat(o.finalMemberPoints)||0):s=r.reduce((w,y)=>w+(parseFloat(y.pointsEarned)||0),0),s<=0)return null;const i=$.collection("freshmart").doc("cms_data").collection("customers").doc(a),n=await i.get();if(!n.exists)return null;const d=t||V&&V.name||n.data().name||"Pelanggan Setia",c={id:a,phone:a,name:d,points:s,updatedAt:new Date().toISOString(),lastOrderAt:new Date().toISOString()};try{await i.set(c,{merge:!0})}catch(w){console.warn("[reconcilePointsFromOrders] Firestore set error:",w)}Q(c);try{localStorage.setItem("freshmart_current_member",JSON.stringify(c)),localStorage.setItem("freshmart_member_wa",a)}catch{}return te.set(a,{data:c,timestamp:Date.now()}),document.getElementById("member-modal-body")&&we(),c}catch(a){return console.warn("[reconcilePointsFromOrders] Error:",a),null}},Oe=(e=0)=>{const t=Math.max(0,parseFloat(e)||0);return t>=1e3?{level:4,name:"PLATINUM VIP",badge:"💎 PLATINUM VIP",icon:"fa-gem",gradient:"from-slate-950 via-zinc-900 to-neutral-950 border-amber-400/40 text-amber-200",cardBg:"linear-gradient(135deg, #090d16 0%, #171f30 45%, #0d1322 75%, #050811 100%)",accentBg:"bg-amber-400/20",accentText:"text-amber-300",accentBorder:"border-amber-400/40",chipBorder:"#f59e0b",foilClass:"gold-foil-text",nextTier:null,ptsNeeded:0,progress:100,perks:["Cashback & Poin Belanja Maksimal (2x Lipat)","Akses Prioritas Antrean Kasir & Pengiriman","Klaim Semua Hadiah Katalog VIP","Layanan Konsultasi Khusus via WhatsApp"]}:t>=500?{level:3,name:"GOLD MEMBER",badge:"🥇 GOLD MEMBER",icon:"fa-crown",gradient:"from-amber-600 via-yellow-600 to-amber-700 border-yellow-300/40 text-yellow-100",cardBg:"linear-gradient(135deg, #78350f 0%, #b45309 35%, #d97706 70%, #92400e 100%)",accentBg:"bg-yellow-400/20",accentText:"text-amber-200",accentBorder:"border-yellow-300/40",chipBorder:"#fde047",foilClass:"gold-foil-text",nextTier:"Platinum VIP",ptsNeeded:1e3-t,progress:Math.min(100,Math.round((t-500)/500*100)),perks:["Diskon & Promo Spesial Member Gold","Kumpulkan Poin di Setiap Transaksi","Tukar Hadiah Menarik dari Katalog","Prioritas Penyiapan Pesanan"]}:t>=100?{level:2,name:"SILVER MEMBER",badge:"🥈 SILVER MEMBER",icon:"fa-medal",gradient:"from-slate-700 via-slate-600 to-slate-800 border-slate-300/40 text-slate-100",cardBg:"linear-gradient(135deg, #1e293b 0%, #334155 40%, #475569 70%, #0f172a 100%)",accentBg:"bg-slate-200/20",accentText:"text-slate-100",accentBorder:"border-slate-300/40",chipBorder:"#cbd5e1",foilClass:"silver-foil-text",nextTier:"Gold Member",ptsNeeded:500-t,progress:Math.min(100,Math.round((t-100)/400*100)),perks:["Kumpulkan Poin di Setiap Transaksi","Tukar Hadiah Langsung Tanpa Undian","Penawaran Diskon Tertentu"]}:{level:1,name:"BRONZE MEMBER",badge:"🥉 BRONZE MEMBER",icon:"fa-award",gradient:"from-stone-800 via-amber-950 to-stone-900 border-orange-400/30 text-orange-200",cardBg:"linear-gradient(135deg, #381a10 0%, #632917 40%, #7c2d12 70%, #292524 100%)",accentBg:"bg-orange-500/20",accentText:"text-orange-200",accentBorder:"border-orange-400/40",chipBorder:"#fb923c",foilClass:"bronze-foil-text",nextTier:"Silver Member",ptsNeeded:100-t,progress:Math.min(100,Math.round(t/100*100)),perks:["Kumpulkan Poin di Setiap Transaksi Belanja","Akses Penuh ke Katalog Hadiah Toko"]}},$t=e=>{let t=(e||"").toString().replace(/\D/g,"");for(t.startsWith("62")?t=t.substring(2):t.startsWith("0")&&(t=t.substring(1));t.length<8;)t+="0";const a=[];for(let r=0;r<t.length&&a.length<3;r+=4)a.push(t.substring(r,r+4));return`PUTRI • ${a.join(" • ")}`},Ct=e=>{const t=String(e||"812345678901").replace(/\D/g,"");let a="",r=8;a+=`<rect x="${r}" y="3" width="2.5" height="34" fill="#0f172a"/>`,r+=4,a+=`<rect x="${r}" y="3" width="1.5" height="34" fill="#0f172a"/>`,r+=3.5,a+=`<rect x="${r}" y="3" width="3" height="34" fill="#0f172a"/>`,r+=5;for(let s=0;s<t.length;s++){const o=parseInt(t[s],10)||0,i=(o%3+1)*1.3,n=((o+2)%4+1)*1.1,d=(o%2+1)*1.8;a+=`<rect x="${r}" y="3" width="${i}" height="34" fill="#0f172a"/>`,r+=i+d,a+=`<rect x="${r}" y="3" width="${n}" height="34" fill="#0f172a"/>`,r+=n+2}return a+=`<rect x="${r}" y="3" width="3" height="34" fill="#0f172a"/>`,r+=5,a+=`<rect x="${r}" y="3" width="1.5" height="34" fill="#0f172a"/>`,r+=3.5,a+=`<rect x="${r}" y="3" width="2.5" height="34" fill="#0f172a"/>`,r+=4,`
    <svg class="w-full h-11 bg-white rounded-lg px-2 py-1 shadow-inner border border-slate-200" viewBox="0 0 ${Math.max(r+10,240)} 40" xmlns="http://www.w3.org/2000/svg">
        ${a}
    </svg>`},ft=e=>{const t=parseFloat(e?.points)||0,a=Oe(t),r=(u.store?.name||"Toko Putri").toUpperCase(),s=u.store?.logo&&u.store.logo!=="fa-store"?u.store.logo:ks,o=(e?.name||"PELANGGAN SETIA").toUpperCase(),i=(e?.phone||"81234567890").toString().replace(/\D/g,""),n=$t(i),d=u.store?.wa||i;return`
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
                            <img src="${m(s)}" alt="Logo" class="w-full h-full object-contain" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">
                            <i class="fa-solid fa-store text-slate-800 text-xs hidden"></i>
                        </div>
                        <div class="min-w-0">
                            <h4 class="text-[11px] sm:text-xs font-black tracking-wider text-white uppercase truncate">${m(r)}</h4>
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
                            <p class="text-[11px] sm:text-[13px] font-bold text-white tracking-wider truncate uppercase">${m(o)}</p>
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
                            <span class="text-[9px] font-mono font-bold text-slate-500 italic truncate">${m(o)}</span>
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
                        <p class="text-[9px] font-mono font-bold tracking-[0.2em] text-slate-300 mt-1">*${m(i)}*</p>
                    </div>
                </div>

                <!-- Footer Sisi Belakang: Kontak & Info -->
                <div class="p-3 sm:p-4 bg-slate-950/80 border-t border-white/10 text-center">
                    <p class="text-[7.5px] sm:text-[8px] text-slate-400 leading-tight">
                        Kartu member digital resmi <b class="text-white">${m(r)}</b>. Tunjukkan saat transaksi untuk poin belanja.
                    </p>
                    <p class="text-[8px] font-bold text-amber-300 mt-0.5">
                        <i class="fa-brands fa-whatsapp mr-1"></i>CS: +${m(d)}
                    </p>
                </div>
            </div>

        </div>
    </div>`},Ms=()=>{const e=document.getElementById("member-card-inner");e&&e.classList.toggle("is-flipped")},Ts=async()=>{const e=document.getElementById("member-card-inner");e&&e.classList.contains("is-flipped")&&(e.classList.remove("is-flipped"),await new Promise(a=>setTimeout(a,450)));const t=document.getElementById("member-card-front-export");if(t){typeof window.showToast=="function"&&window.showToast("Menyiapkan file gambar Kartu Member HD...");try{if(typeof window.ensureScriptLoaded=="function"&&await window.ensureScriptLoaded("https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js",()=>typeof html2canvas<"u"),typeof html2canvas>"u")throw new Error("Modul html2canvas belum siap dimuat.");const a=await html2canvas(t,{scale:3,useCORS:!0,allowTaint:!0,backgroundColor:null}),s=`Kartu_Member_TokoPutri_${(V?.name||"Pelanggan").replace(/[^a-zA-Z0-9]/g,"_")}.png`,o=a.toDataURL("image/png",1);if(window.AndroidNativeApp&&typeof window.AndroidNativeApp.saveOrShareFile=="function")window.AndroidNativeApp.saveOrShareFile(o,s,"image/png");else{const i=document.createElement("a");i.download=s,i.href=o,document.body.appendChild(i),i.click(),document.body.removeChild(i)}typeof window.showToast=="function"&&window.showToast("Kartu Member Berhasil Disimpan ke Galeri! 🎉")}catch(a){console.error("Gagal menyimpan kartu member:",a),typeof window.showToast=="function"&&window.showToast("Gagal menyimpan kartu. Silakan coba kembali.")}}},As=()=>{const e=l("reward-catalog-container");if(!e)return;const t=u.store.showRewardCatalog!==!1&&u.store.showRewardCatalog!=="false";t&&typeof window.attachRewardsRealtime=="function"&&!window.unsubRewardsRealtime&&window.attachRewardsRealtime();const a=(u.rewards||[]).filter(s=>s.isActive!=="false"&&s.isActive!==!1);if(!t||a.length===0){e.classList.add("hidden"),e.innerHTML="";return}e.classList.remove("hidden");let r=`
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
        ${a.map(s=>`
            <div class="w-[115px] sm:w-[130px] shrink-0 snap-start relative group cursor-pointer active:scale-95 transition-all duration-200" onclick="if(typeof window.openMemberModal==='function') window.openMemberModal(); else if(typeof window.showToast==='function') window.showToast('Tukarkan hadiah ini saat checkout menggunakan poin belanja Anda!');">
                <div class="w-full bg-[var(--color-primary)] rounded-xl shadow-xs hover:shadow-sm hover:-translate-y-0.5 transition-all duration-200 flex flex-col relative overflow-hidden border border-white/20 text-white p-1.5">
                    <div class="absolute -right-3 -top-3 w-16 h-16 bg-white/20 rounded-full blur-lg pointer-events-none"></div>
                    <div class="absolute bottom-8 -left-2.5 w-4 h-4 rounded-full bg-[#f1f5f9] dark:bg-[#0b1121] border-r border-white/20 z-20 pointer-events-none transition-colors duration-300 shadow-inner"></div>
                    <div class="absolute bottom-8 -right-2.5 w-4 h-4 rounded-full bg-[#f1f5f9] dark:bg-[#0b1121] border-l border-white/20 z-20 pointer-events-none transition-colors duration-300 shadow-inner"></div>
                    <div class="absolute bottom-10 left-1.5 right-1.5 border-t border-dashed border-white/30 z-10 pointer-events-none"></div>
                    <div class="w-full aspect-square rounded-lg bg-white flex items-center justify-center overflow-hidden relative shadow-inner z-0 p-1.5">
                        <img loading="lazy" src="${m(s.img)}" alt="${m(s.name)}" class="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105" onerror="this.onerror=null;this.src='https://placehold.co/400?text=Hadiah'">
                        <div class="absolute top-1 left-1 bg-rose-500 text-white text-[7px] sm:text-[8px] font-bold px-1.5 py-0.5 rounded-md shadow-2xs uppercase tracking-wider"><i class="fa-solid fa-gift mr-0.5"></i>Gratis</div>
                        <div class="absolute top-1 right-1 bg-[var(--color-primary)] text-white text-[7px] sm:text-[8px] font-bold px-1.5 py-0.5 rounded-md shadow-2xs border border-white/20">${parseFloat(s.pointsCost||s.pointsRequired)||0} Poin</div>
                    </div>
                    <div class="w-full h-3.5 shrink-0"></div>
                    <div class="h-7 w-full px-0.5 flex flex-col justify-center items-center relative z-0 shrink-0 mb-0.5">
                        <h4 class="text-[9px] sm:text-[10px] font-bold text-white leading-tight line-clamp-2 uppercase tracking-wider text-center drop-shadow-xs">${m(s.name)}</h4>
                    </div>
                </div>
            </div>`).join("")}
    </div>`;e.innerHTML=r};let bt=null;const Ss=()=>{clearTimeout(bt),bt=setTimeout(async()=>{const t=(window.normalizeWA||(o=>(o||"").replace(/\D/g,"").replace(/^0/,"62")))(N("cust-wa")),a=l("member-status-banner");if(!a)return;if(!t||t.length<10){T(a),T("payment-option-tempo"),Q(null),se(null);const o=document.querySelector('input[name="payment"][value="tempo"]');if(o&&o.checked){const i=document.querySelector('input[name="payment"][value="transfer"]')||document.querySelector('input[name="payment"][value="cashier"]');i&&(i.checked=!0,typeof window.togglePaymentDetails=="function"&&window.togglePaymentDetails())}return}const r=o=>{const i=parseFloat(o.points)||0,n=Oe(i);a.className="mt-3 p-3 sm:p-4 rounded-2xl bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 text-white border border-amber-400/40 shadow-xl relative overflow-hidden flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3",a.innerHTML=`
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
                            <span>${m(o.name||"Pelanggan")}</span>
                            <span class="text-[9px] font-normal text-slate-400">(Member Resmi)</span>
                        </p>
                    </div>
                </div>
                <button type="button" onclick="openMemberModal()" class="relative z-10 w-full sm:w-auto shrink-0 bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-slate-950 text-[10px] font-black uppercase tracking-wider px-3.5 py-2.5 rounded-xl shadow-md active:scale-95 transition-all flex items-center justify-center gap-1.5 cursor-pointer">
                    <i class="fa-solid fa-wallet"></i> Buka Kartu Member
                </button>`,q(a),q("payment-option-tempo")},s=te.get(t);if(s&&Date.now()-s.timestamp<ys){if(s.data)Q(s.data),r(s.data);else{Q(null),se(null),T(a),T("payment-option-tempo");const o=document.querySelector('input[name="payment"][value="tempo"]');if(o&&o.checked){const i=document.querySelector('input[name="payment"][value="transfer"]')||document.querySelector('input[name="payment"][value="cashier"]');i&&(i.checked=!0,typeof window.togglePaymentDetails=="function"&&window.togglePaymentDetails())}}return}try{const o=await $.collection("freshmart").doc("cms_data").collection("customers").doc(t).get();if(o.exists){const i=o.data();te.set(t,{data:i,timestamp:Date.now()}),Q(i),r(i)}else{te.set(t,{data:null,timestamp:Date.now()}),Q(null),se(null),T(a),T("payment-option-tempo");const i=document.querySelector('input[name="payment"][value="tempo"]');if(i&&i.checked){const n=document.querySelector('input[name="payment"][value="transfer"]')||document.querySelector('input[name="payment"][value="cashier"]');n&&(n.checked=!0,typeof window.togglePaymentDetails=="function"&&window.togglePaymentDetails())}}}catch{}},500)},Ds=()=>{if(!V)try{const r=localStorage.getItem("freshmart_current_member");if(r){const s=JSON.parse(r);s&&(s.id||s.phone||s.name)&&Q(s)}}catch{}const e=V?.phone||V?.id||localStorage.getItem("freshmart_member_wa");if(e){let r=e.toString().replace(/\D/g,"");r.startsWith("0")?r="62"+r.substring(1):r.startsWith("62")||(r="62"+r),$.collection("freshmart").doc("cms_data").collection("customers").doc(r).get().then(async s=>{if(s.exists){let o=s.data();if((parseFloat(o.points)||0)===0){const n=await ot(r,o.name);n&&(o=n)}te.set(r,{data:o,timestamp:Date.now()}),Q(o);try{localStorage.setItem("freshmart_current_member",JSON.stringify(o)),localStorage.setItem("freshmart_member_wa",r)}catch{}document.getElementById("member-modal-body")&&we()}else{te.set(r,{data:null,timestamp:Date.now()}),Q(null);try{localStorage.removeItem("freshmart_current_member"),localStorage.removeItem("freshmart_member_wa")}catch{}document.getElementById("member-modal-body")&&we()}}).catch(()=>{})}typeof window.attachRewardsRealtime=="function"&&!window.unsubRewardsRealtime&&window.attachRewardsRealtime();let t=document.getElementById("member-modal");t||(t=document.createElement("div"),t.id="member-modal",t.className="fixed inset-0 z-[115] bg-slate-900/60 flex items-end sm:items-center justify-center p-0 sm:p-5 backdrop-blur-xs",t.onclick=r=>{r.target===t&&Rt()},document.body.appendChild(t));const a=t.style.display!=="none"&&t.style.opacity==="1";t.innerHTML=`
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
        </div>`,we(),t.style.opacity="0",t.style.display="flex",requestAnimationFrame(()=>{t.style.transition="opacity 0.25s ease",t.style.opacity="1"}),!a&&typeof window.pushModalHistory=="function"&&window.pushModalHistory("member")},we=()=>{const e=(u.rewards||[]).filter(s=>s.isActive!=="false"&&s.isActive!==!1),t=V&&parseFloat(V.points)||0,a=Oe(t),r=e.length?e.map(s=>{const o=(parseFloat(s.stock)||0)>0,i=V&&t>=(parseFloat(s.pointsCost)||0)&&o,n=re&&re.id===s.id;return`
        <div class="flex items-center gap-3 p-3.5 rounded-2xl border ${n?"border-[var(--color-primary)] bg-[rgba(var(--color-primary-rgb),0.06)] dark:bg-[rgba(var(--color-primary-rgb),0.12)] shadow-xs":"border-slate-200 dark:border-slate-700/80 bg-slate-50/70 dark:bg-slate-800/40"} transition-all">
            ${s.img?`<img src="${m(s.img)}" class="w-14 h-14 rounded-xl object-contain bg-white p-1 border border-slate-200 dark:border-slate-700 shrink-0" onerror="this.style.display='none'" loading="lazy">`:'<div class="w-14 h-14 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-300 shrink-0"><i class="fa-solid fa-gift text-xl"></i></div>'}
            <div class="min-w-0 flex-1">
                <p class="text-xs font-bold text-slate-800 dark:text-white truncate">${m(s.name)}</p>
                <p class="text-[11px] font-black text-amber-500 dark:text-amber-400 mt-0.5 flex items-center gap-1">
                    <i class="fa-solid fa-star text-[10px]"></i> ${parseFloat(s.pointsCost)||0} Poin
                </p>
                ${o?"":'<p class="text-[10px] font-bold text-rose-500 mt-0.5">Stok hadiah habis</p>'}
            </div>
            ${V?n?'<button type="button" onclick="deselectReward()" class="shrink-0 bg-rose-500 hover:bg-rose-600 text-white text-[10px] font-bold uppercase px-3 py-2 rounded-xl active:scale-95 transition-all whitespace-nowrap shadow-xs">Batal</button>':`<button type="button" ${i?"":"disabled"} onclick="selectReward(${s.id})" class="shrink-0 ${i?"primary-bg hover:opacity-90 text-white active:scale-95 shadow-xs":"bg-slate-200 dark:bg-slate-700 text-slate-400 cursor-not-allowed"} text-[10px] font-bold uppercase px-3 py-2 rounded-xl transition-all whitespace-nowrap">Pilih Hadiah</button>`:`<span class="text-[10px] font-bold text-slate-400 uppercase bg-slate-100 dark:bg-slate-800 px-2.5 py-1.5 rounded-lg">${parseFloat(s.pointsCost)||0} Poin</span>`}
        </div>`}).join(""):'<p class="text-[11px] font-bold text-slate-400 text-center py-3">Belum ada program hadiah yang tersedia.</p>';V?L("member-modal-body",`
            <!-- KARTU MEMBER DIGITAL (3D INTERAKTIF) -->
            <div>
                ${ft(V)}
                
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
                        ${a.perks.map(s=>`
                        <div class="flex items-center gap-1.5 text-[10px] font-semibold text-slate-700 dark:text-slate-300">
                            <i class="fa-solid fa-check text-emerald-500 text-[9px] shrink-0"></i>
                            <span class="truncate">${m(s)}</span>
                        </div>`).join("")}
                    </div>
                </div>
            </div>

            <!-- KATALOG REWARD / PENUKARAN HADIAH -->
            <div>
                <p class="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-2.5">Katalog Hadiah yang Dapat Ditukar</p>
                <div class="space-y-2.5">${r}</div>
            </div>

            ${re?`<div class="bg-[rgba(var(--color-primary-rgb),0.06)] dark:bg-[rgba(var(--color-primary-rgb),0.12)] border border-[var(--color-primary)]/30 rounded-xl p-3.5 text-[11px] font-bold text-[var(--color-primary)] flex items-center gap-2"><i class="fa-solid fa-gift text-base shrink-0"></i><span>Hadiah "<b>${m(re.name)}</b>" telah dipilih dan akan otomatis diproses saat pesanan Anda selesai di checkout.</span></div>`:""}
        `):L("member-modal-body",`
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
                <div class="space-y-2.5">${r}</div>
            </div>
        `)},$s=async()=>{const e=document.getElementById("member-lookup-input"),t=document.getElementById("member-lookup-result");if(!e||!t)return;let a=e.value.replace(/\D/g,"");if(!a||a.length<9){t.className="text-xs font-bold text-rose-500 p-2.5 bg-rose-50 dark:bg-rose-900/20 rounded-xl",t.textContent="Masukkan minimal 9 digit nomor WhatsApp!",t.classList.remove("hidden");return}a.startsWith("0")?a="62"+a.substring(1):a.startsWith("62")||(a="62"+a),t.className="text-xs font-bold text-[var(--color-primary)] p-2.5 primary-bg-soft rounded-xl",t.textContent="Memuat data kartu member...",t.classList.remove("hidden");try{const r=await $.collection("freshmart").doc("cms_data").collection("customers").doc(a).get();if(r.exists){let s=r.data();if((parseFloat(s.points)||0)===0){const o=await ot(a,s.name);o&&(s=o)}te.set(a,{data:s,timestamp:Date.now()}),Q(s);try{localStorage.setItem("freshmart_current_member",JSON.stringify(s)),localStorage.setItem("freshmart_member_wa",a)}catch{}we(),typeof window.showToast=="function"&&window.showToast(`Selamat datang kembali, ${s.name||"Pelanggan"}! 💳`)}else{t.className="text-xs font-bold text-amber-700 dark:text-amber-300 p-3.5 bg-amber-50 dark:bg-amber-900/20 rounded-xl leading-relaxed border border-amber-200 dark:border-amber-800/40 space-y-1.5";const s=(u.store&&u.store.wa||"").replace(/\D/g,""),o=s?`https://wa.me/${s}?text=Halo%20Admin%20Toko%20Putri,%20saya%20ingin%20mendaftarkan%20nomor%20saya%20(${a})%20sebagai%20Member%20Resmi.`:"#";t.innerHTML=`
                <div class="flex items-center gap-1.5 text-amber-800 dark:text-amber-200 font-extrabold text-[11px]">
                    <i class="fa-solid fa-circle-info text-amber-500"></i>
                    <span>Nomor Belum Terdaftar sebagai Member Resmi</span>
                </div>
                <p class="text-[11px] font-medium text-slate-600 dark:text-slate-300 leading-normal">
                    Nomor <b>+${m(a)}</b> saat ini tercatat sebagai <b>Pelanggan Umum</b>. Fitur Poin Hadiah dan fasilitas pembayaran <b>Cash Tempo</b> hanya dapat digunakan setelah nomor Anda dikonfirmasi & disimpan oleh Admin Toko di database CMS.
                </p>
                ${s?`
                <div class="pt-1">
                    <a href="${o}" target="_blank" class="inline-flex items-center gap-1.5 text-[10px] font-bold text-emerald-600 dark:text-emerald-400 hover:underline">
                        <i class="fa-brands fa-whatsapp text-emerald-500"></i> Hubungi Admin untuk Pendaftaran Member
                    </a>
                </div>`:""}
            `}}catch{t.className="text-xs font-bold text-rose-500 p-2.5 bg-rose-50 dark:bg-rose-900/20 rounded-xl",t.textContent="Gagal mengecek data. Silakan periksa koneksi internet Anda."}},Cs=e=>{const t=(u.rewards||[]).find(r=>r.id===e);if(!t)return;if((parseFloat(V?.points)||0)<(parseFloat(t.pointsCost)||0)){typeof window.showToast=="function"&&window.showToast("Poin Anda belum cukup untuk hadiah ini!");return}if((parseFloat(t.stock)||0)<=0){typeof window.showToast=="function"&&window.showToast("Maaf, stok hadiah ini sedang kosong!");return}se({id:t.id,name:t.name,pointsCost:parseFloat(t.pointsCost)||0}),we(),typeof window.showToast=="function"&&window.showToast(`Hadiah "${t.name}" dipilih! Lanjutkan checkout untuk menukarnya.`)},Rs=()=>{se(null),we()},Rt=(e=!1)=>{const t=document.getElementById("member-modal");if(!t||t.style.display==="none")return;const a=()=>{t.style.opacity="0",t.style.transition="opacity 0.25s ease",setTimeout(()=>{t.style.display="none",t.style.opacity="",t.style.transition=""},250)};typeof window.requestCloseModal=="function"?window.requestCloseModal("member",e,a):a()};window.renderRewardCatalog=As;window.checkMemberStatus=Ss;window.openMemberModal=Ds;window.rMemberModalBody=we;window.lookupMemberPoints=$s;window.selectReward=Cs;window.deselectReward=Rs;window.closeMemberModal=Rt;window.flipMemberCard=Ms;window.downloadMemberCard=Ts;window.getMemberTier=Oe;window.formatMemberCardNumber=$t;window.generateBarcodeSVG=Ct;window.setCurrentMember=Q;window.invalidateMemberCache=Ps;window.reconcilePointsFromOrders=ot;const Es=()=>{if(u.store.isDeliveryEnabled===!1&&u.store.isPickupEnabled===!1){typeof window.showToast=="function"&&window.showToast("Toko tutup!");return}const e=N("cust-name"),t=(document.querySelector('input[name="delivery-method"]:checked')||{}).value;if(!e||!t){typeof window.showToast=="function"&&window.showToast("Lengkapi form nama!");return}let a=N("cust-wa").replace(/\D/g,"");if(!a||a.length<9){typeof window.showToast=="function"&&window.showToast("Nomor WhatsApp wajib diisi! (min. 9 digit)");return}if(a.startsWith("0")?a="62"+a.substring(1):a.startsWith("62")||(a="62"+a),b.name=e,b.deliveryMethod=t,b.note=N("cust-note"),b.wa=a,t==="delivery"){if(b.address=N("cust-address"),!b.lat||!b.lng){const s=l("cust-maps-input")?.value;s&&typeof window.handleCustomerMapsInput=="function"&&window.handleCustomerMapsInput(s)}if(!b.address||!b.lat||!b.lng){typeof window.showToast=="function"&&window.showToast("Alamat & GPS wajib!");return}const r=typeof window.getDist=="function"?window.getDist:()=>0;b.distance=r(parseFloat(u.store.lat||0),parseFloat(u.store.lng||0),b.lat,b.lng)||0}else b.address="Ambil di Toko",b.distance=0;v&&v.type&&v.type.includes("shipping")&&t!=="delivery"&&H(null),l("voucher-input")&&!v&&(l("voucher-input").value="",T("voucher-msg-container")),typeof window.changeView=="function"&&window.changeView("view-payment")},it=()=>{z("address-container","hidden",(document.querySelector('input[name="delivery-method"]:checked')||{}).value==="pickup")},Et=()=>{const e=l("tnc-checkbox"),t=l("btn-process-order");!e||!t||(e.checked?t.classList.remove("btn-disabled"):t.classList.add("btn-disabled"))},It=()=>{if(!E.length){typeof window.showToast=="function"&&window.showToast("Keranjang belanja kosong!"),typeof window.changeView=="function"&&window.changeView("view-catalog",!0);return}if(!b.name){typeof window.showToast=="function"&&window.showToast("Lengkapi data pengiriman terlebih dahulu!"),typeof window.changeView=="function"&&window.changeView("view-checkout",!0);return}const e=typeof window.getEffP=="function"?window.getEffP:h=>h.price||0,t=E.reduce((h,S)=>h+(parseFloat(e(S))||0)*(parseFloat(S.qty)||0),0);let a=0,r=0,s=0;if(b.deliveryMethod==="delivery"&&(a=Math.ceil((parseFloat(b.distance)||0)*(parseFloat(u.store.costPerKm)||0)/500)*500),v&&(v.minPurchase&&parseFloat(v.minPurchase)>0&&t<parseFloat(v.minPurchase)?(H(null),T("voucher-msg-container"),typeof window.showToast=="function"&&window.showToast(`Voucher dibatalkan (min. belanja ${D(v.minPurchase)})`)):v.targetProduct&&!E.some(h=>h.id===parseInt(v.targetProduct))&&(H(null),T("voucher-msg-container"),typeof window.showToast=="function"&&window.showToast("Voucher dibatalkan (produk khusus dihapus)"))),v){let h=t;if(v.targetProduct&&v.targetProduct!==""){const S=parseInt(v.targetProduct);h=E.filter(ue=>ue.id===S).reduce((ue,ie)=>ue+(parseFloat(e(ie))||0)*(parseFloat(ie.qty)||0),0)}if(v.type==="shipping_free")r=a;else if(v.type==="shipping_flat")r=parseFloat(v.value)||0;else if(v.type==="percent"){let S=h*((parseFloat(v.value)||0)/100);v.maxDiscount&&parseFloat(v.maxDiscount)>0&&(S=Math.min(S,parseFloat(v.maxDiscount))),s=S}else s=parseFloat(v.value)||0,s=Math.min(s,h)}const o=(u.store.freeShippingMinSpendEnabled===!0||u.store.freeShippingMinSpendEnabled==="true")&&(parseFloat(u.store.freeShippingMinSpendAmount)||0)>0&&t>=(parseFloat(u.store.freeShippingMinSpendAmount)||0)&&b.deliveryMethod==="delivery";o&&(r=a),r=Math.min(r,a),s=Math.min(s,t);const i=Math.max(0,t-s+(a-r)),d=(typeof window.calcTaxDetails=="function"?window.calcTaxDetails:()=>({ppnEnabled:!1,ppnAmount:0,grandTotalAdd:0}))(i),c=d.ppnAmount,x=i+d.grandTotalAdd;_("summary-subtotal",D(t)),z("summary-shipping-row","hidden",b.deliveryMethod!=="delivery");const w=l("summary-discount-row");if(w)if(s>0||r>0){w.classList.remove("hidden");let h="";s>0&&(h+=`<div class="flex justify-between items-center w-full mt-1.5"><p class="text-xs font-bold text-slate-500">Diskon Promo</p><p class="text-[13px] font-bold text-rose-500">-${D(s)}</p></div>`),r>0&&(h+=`<div class="flex justify-between items-center w-full mt-1.5"><p class="text-xs font-bold text-slate-500">${o?"Gratis Ongkir (Promo Belanja)":"Diskon Ongkir"}</p><p class="text-[13px] font-bold text-rose-500">-${D(r)}</p></div>`),w.innerHTML=h}else w.classList.add("hidden");b.deliveryMethod==="delivery"&&(_("summary-shipping",D(a)),_("summary-distance",`(${b.distance.toFixed(1)}km)`)),_("summary-total",D(x)),l("btn-total-preview")&&_("btn-total-preview",D(x));const y=l("summary-ppn-row");y&&(d.ppnEnabled&&c>0?(y.classList.remove("hidden"),d.ppnType==="inclusive"?(_("summary-ppn-label",`Termasuk PPN (${d.ppnRate}%)`),_("summary-ppn",D(c))):(_("summary-ppn-label",`PPN (${d.ppnRate}%)`),_("summary-ppn",`+${D(c)}`))):y.classList.add("hidden")),_("payment-cust-name",b.name||"-"),l("payment-cust-wa")&&(l("payment-cust-wa").textContent=b.wa?"+"+b.wa:"-"),_("payment-cust-method",b.deliveryMethod==="delivery"?`Dikirim (${b.distance.toFixed(1)}km)`:"Ambil di Toko"),_("payment-cust-address",b.address||"-"),L("payment-items-preview",E.map(h=>{const S=h.variantName?`<span class="bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300 px-1.5 py-0.5 rounded-lg text-[9px] font-bold">${m(h.variantName)}</span>`:"",oe=h.poTime?`<span class="amber-badge px-1.5 py-0.5 rounded-lg text-[8px] font-bold uppercase">PO ${m(h.poTime)}</span>`:"";return`
        <div class="flex justify-between items-center bg-white dark:bg-slate-800 p-4 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm min-w-0">
            <div class="flex items-center gap-3.5 min-w-0">
                <img loading="lazy" src="${m(h.img)}" alt="${m(h.name)}" class="w-12 h-12 rounded-xl object-cover border border-slate-200 dark:border-slate-700 shrink-0" onerror="this.onerror=null;this.src='https://placehold.co/400?text=No+Image'">
                <div class="min-w-0">
                    <p class="text-sm font-bold text-slate-800 dark:text-white truncate mb-1" title="${m(h.name)}">${m(h.name)}</p>
                    ${h.variantName||h.poTime?`
                    <div class="flex flex-wrap gap-1 mb-1">
                        ${S}
                        ${oe}
                    </div>`:""}
                    <p class="text-[11px] text-[var(--color-primary)] font-bold">${parseFloat(h.qty)} ${m(h.unit||"pcs")} x ${D(e(h))}</p>
                </div>
            </div>
            <div class="text-sm font-bold text-slate-900 dark:text-white whitespace-nowrap ml-3 shrink-0">${D(e(h)*parseFloat(h.qty))}</div>
        </div>`}).join("")+(re?`<div class="flex justify-between items-center bg-[rgba(var(--color-primary-rgb),0.06)] dark:bg-[rgba(var(--color-primary-rgb),0.12)] p-4 rounded-2xl border border-[var(--color-primary)]/30 shadow-sm min-w-0"><div class="flex items-center gap-3.5 min-w-0"><div class="w-12 h-12 rounded-xl bg-[var(--color-primary)] text-white flex items-center justify-center shrink-0"><i class="fa-solid fa-gift"></i></div><div class="min-w-0"><p class="text-sm font-bold text-[var(--color-primary)] truncate">${m(re.name)}</p><p class="text-[11px] text-[var(--color-primary)] font-bold mt-1"><i class="fa-solid fa-star mr-1"></i>Tukar ${re.pointsCost} Poin (Gratis)</p></div></div><button type="button" onclick="if(typeof deselectReward==='function') deselectReward(); rPay();" class="text-[10px] font-bold text-rose-500 uppercase shrink-0 ml-3">Batal</button></div>`:"")),b.note?(_("payment-note-text",`"${m(b.note)}"`),q("payment-note-preview")):T("payment-note-preview"),L("dynamic-banks-container",u.banks?.length?u.banks.map(h=>`<div class="bg-white dark:bg-slate-800 p-4 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm"><p class="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">Bank ${m(h.bankName)}</p><p class="text-lg font-bold text-[var(--color-primary)] tracking-wide">${m(h.bankAccount)}</p><p class="text-xs text-slate-500 dark:text-slate-400 font-medium mt-1.5">a.n <span class="font-bold text-slate-700 dark:text-white">${m(h.bankOwner)}</span></p></div>`).join(""):'<div class="bg-rose-50 dark:bg-rose-900/20 border border-rose-200 p-4 rounded-2xl text-center"><p class="text-sm text-rose-500 dark:text-rose-400 font-bold">Rekening belum diatur.</p></div>');const P=l("payment-option-cashier"),G=l("payment-option-cod");if(P&&G){if(b.deliveryMethod==="pickup"){if(q("payment-option-cashier"),T("payment-option-cod"),(document.querySelector('input[name="payment"]:checked')||{}).value==="cod"){const h=document.querySelector('input[value="cashier"]');h&&(h.checked=!0)}}else{T("payment-option-cashier"),q("payment-option-cod");const h=(document.querySelector('input[name="payment"]:checked')||{}).value;if(h==="cashier"||!h){const S=document.querySelector('input[value="cod"]');S&&(S.checked=!0)}}typeof window.togglePaymentDetails=="function"&&window.togglePaymentDetails()}const F=l("tnc-checkbox");F&&(F.checked=!1,Et())},Is=async()=>{if(!l("tnc-checkbox").checked||tt)return;if(window.isAdm){typeof window.showToast=="function"&&window.showToast("Anda login sebagai Seller. Logout dulu untuk membuat pesanan.");return}const e=Qe("freshmart_last_order");if(e&&Date.now()-parseInt(e)<6e4){typeof window.showToast=="function"&&window.showToast("Tunggu 1 menit untuk pesanan baru!");return}const t=typeof window.getEffP=="function"?window.getEffP:o=>o.price||0,a=typeof window.getEffHpp=="function"?window.getEffHpp:()=>0,r=typeof window.getEffPoin=="function"?window.getEffPoin:()=>0;let s=!1;if(E.forEach(o=>{const i=u.products.find(d=>d.id===o.id);if(!i)return;const n=o.variantName?((i.variants||[]).find(d=>d.name===o.variantName)||{}).price??i.price:i.price;n!==void 0&&Math.abs(o.price-n)>1&&(o.price=n,s=!0),o.poin=r(o)}),s){Ee("freshmart_cart",JSON.stringify(E)),typeof window.renderCart=="function"&&window.renderCart(),It(),typeof window.showToast=="function"&&window.showToast("Harga produk telah diperbarui. Periksa kembali sebelum order.");return}ae(!0),W("Proses Pesanan...");try{const o=E.reduce((g,A)=>g+(parseFloat(t(A))||0)*(parseFloat(A.qty)||0),0);let i=0,n=0,d=0;b.deliveryMethod==="delivery"&&(i=Math.ceil((parseFloat(b.distance)||0)*(parseFloat(u.store.costPerKm)||0)/500)*500);const c=u.store.useStock===!0||u.store.useStock==="true";if(c)for(const g of E){const A=u.products.find(M=>M.id===g.id);if(!A)continue;const Z=parseFloat(g.qty)||0;if(g.variantName){const M=(A.variants||[]).find(O=>O.name===g.variantName),R=parseFloat(M&&M.stock!==void 0?M.stock:0);if(R<Z){ae(!1),I(),typeof window.showToast=="function"&&window.showToast(`Stok ${g.name} (${g.variantName}) tidak cukup! Sisa: ${R}`);return}}else{const M=parseFloat(A.stock!==void 0?A.stock:0);if(M<Z){ae(!1),I(),typeof window.showToast=="function"&&window.showToast(`Stok ${g.name} tidak cukup! Sisa: ${M}`);return}}}if(v){let g=o;if(v.targetProduct&&v.targetProduct!==""){const A=parseInt(v.targetProduct);g=E.filter(M=>M.id===A).reduce((M,R)=>M+(parseFloat(t(R))||0)*(parseFloat(R.qty)||0),0)}if(v.minPurchase&&parseFloat(v.minPurchase)>0&&o<parseFloat(v.minPurchase))H(null);else if(v.targetProduct&&v.targetProduct!==""&&g===0)H(null);else if(v.type&&v.type.includes("shipping")&&b.deliveryMethod!=="delivery")H(null);else if(v.type==="shipping_free")n=i;else if(v.type==="shipping_flat")n=parseFloat(v.value)||0;else if(v.type==="percent"){let A=g*((parseFloat(v.value)||0)/100);v.maxDiscount&&parseFloat(v.maxDiscount)>0&&(A=Math.min(A,parseFloat(v.maxDiscount))),d=A}else d=parseFloat(v.value)||0,d=Math.min(d,g)}const x=(u.store.freeShippingMinSpendEnabled===!0||u.store.freeShippingMinSpendEnabled==="true")&&(parseFloat(u.store.freeShippingMinSpendAmount)||0)>0&&o>=(parseFloat(u.store.freeShippingMinSpendAmount)||0)&&b.deliveryMethod==="delivery";x&&(n=i),n=Math.min(n,i),d=Math.min(d,o);const w=Math.max(0,o-d+(i-n)),P=(typeof window.calcTaxDetails=="function"?window.calcTaxDetails:()=>({ppnEnabled:!1,ppnAmount:0,grandTotalAdd:0}))(w),G=P.ppnAmount,F=P.dppAmount,h=w+P.grandTotalAdd,S=(document.querySelector('input[name="payment"]:checked')||{}).value,oe=S==="transfer"||S==="qris"||S==="tempo",ue=window.buktiGDriveUploaded&&window.buktiPaymentUrl&&!window.buktiPaymentUrl.startsWith("data:");if(oe&&!ue){if(ae(!1),I(),!window.buktiPaymentFile){typeof window.showToast=="function"&&window.showToast("Upload bukti pembayaran terlebih dahulu!");return}typeof window.showToast=="function"&&window.showToast("Tunggu upload Google Drive selesai, atau coba lagi!");return}const ie="ORD-"+Date.now().toString(36).toUpperCase()+"-"+Math.random().toString(36).substring(2,6).toUpperCase();if(window.buktiPaymentFile&&!window.buktiGDriveUploaded)try{W("Upload Bukti ke Google Drive...");const g=await window.uploadBuktiToFirebase(window.buktiPaymentFile,ie);if(g&&!g.startsWith("data:"))window.buktiPaymentUrl=g,window.buktiGDriveUploaded=!0;else{ae(!1),I(),typeof window.showToast=="function"&&window.showToast("❌ Upload bukti ke Google Drive gagal. Coba pilih gambar lagi!");return}W("Proses Pesanan...")}catch{ae(!1),I(),typeof window.showToast=="function"&&window.showToast("❌ Gagal upload bukti. Periksa koneksi dan coba lagi!");return}const p={orderId:ie,timestamp:_e.firestore.FieldValue.serverTimestamp(),dateString:new Date().toISOString(),customer:b,items:E.map(g=>({...g,qty:parseFloat(g.qty),effectivePrice:t(g),poTime:g.poTime||"",hpp:a(g),poin:r(g)})),payment:{method:S,subtotal:o,shippingCost:i,shippingDiscount:n,productDiscount:d,ppnAmount:G,dppAmount:F,ppnRate:P.ppnEnabled?P.ppnRate:0,ppnType:P.ppnEnabled?P.ppnType:"exclusive",grandTotal:h,isFreeShippingPromo:x||!1},status:"Baru",buktiPayment:window.buktiPaymentUrl||null};if(S==="tempo"){if(!b.wa){ae(!1),I(),typeof window.showToast=="function"&&window.showToast("Pembayaran Cash Tempo hanya untuk Member Resmi terdaftar!");return}const g=document.getElementById("tempo-dp-input");let A=g&&parseFloat(g.value)||0;A>h&&(A=h),p.payment.tempoDp=A,p.payment.tempoBalance=h-A,p.payment.tempoDueDate=Date.now()+30*24*60*60*1e3,p.payment.paymentStatus="hutang"}const B=$.collection("freshmart_orders").doc(ie),ne=typeof window.calculateCartPoints=="function"?window.calculateCartPoints(E,u.store):{totalPoints:0,directPoints:0,spendPoints:0},le=ne.totalPoints;p.pointsEarned=le,p.pointsBreakdown={direct:ne.directPoints,spend:ne.spendPoints};const Re=$.collection("freshmart").doc("cms_data"),de=b.wa?Re.collection("customers").doc(b.wa):null,Me=!!re;let fe=null;if(c){const g={};E.forEach(M=>{const R=M.id!=null?M.id.toString():null;if(!R)return;g[R]||(g[R]={main:0,variants:{}});const O=parseFloat(M.qty)||0;M.variantName?g[R].variants[M.variantName]=(g[R].variants[M.variantName]||0)+O:g[R].main+=O});const A=Object.keys(g),Z=A.map(M=>$.collection("freshmart").doc("cms_data").collection("products").doc(M));await $.runTransaction(async M=>{const R=await Promise.all(Z.map(X=>M.get(X))),O=de?await M.get(de):null,ce=!!(O&&O.exists),Te=ce&&Me?$.collection("freshmart").doc("cms_data").collection("rewards").doc(re.id.toString()):null,he=Te?await M.get(Te):null,Y=[];if(R.forEach((X,be)=>{if(!X.exists)return;const U=X.data(),ee=g[A[be]];if(ee.main>0){const C=parseFloat(U.stock!==void 0?U.stock:0);C<ee.main&&Y.push(`${U.name} (sisa ${C})`)}Object.keys(ee.variants).forEach(C=>{const pe=(U.variants||[]).find(ve=>ve.name===C),$e=parseFloat(pe&&pe.stock!==void 0?pe.stock:0);$e<ee.variants[C]&&Y.push(`${U.name} (${C}, sisa ${$e})`)})}),Y.length)throw new Error("STOK_TIDAK_CUKUP: "+Y.join(", "));let Ke=null,De=null;if(ce){const X=parseFloat(O.data().points)||0;let be=X;if(Me){if(!he||!he.exists)throw new Error("HADIAH_TIDAK_DITEMUKAN");const U=he.data();if(X<(parseFloat(U.pointsCost)||0))throw new Error("POIN_TIDAK_CUKUP");if((parseFloat(U.stock)||0)<=0)throw new Error("STOK_HADIAH_HABIS");Ke=(parseFloat(U.stock)||0)-1,be-=parseFloat(U.pointsCost)||0,p.claimedReward={id:U.id,name:U.name,pointsCost:parseFloat(U.pointsCost)||0,status:"pending",note:""}}be+=le,De=be,p.pointsEarned=le,p.customerPhone=b.wa,p.finalMemberPoints=De,p.customerType="Member"}else{if(S==="tempo")throw new Error("TEMPO_KHUSUS_MEMBER");if(Me)throw new Error("MEMBER_TIDAK_DITEMUKAN");p.pointsEarned=0,p.pointsBreakdown={direct:0,spend:0},p.finalMemberPoints=null,p.customerType="Pelanggan Umum"}if(R.forEach((X,be)=>{if(!X.exists)return;const U=A[be],ee=g[U],C=JSON.parse(JSON.stringify(X.data())),pe={};ee.main>0&&(C.stock=Math.max(0,(parseFloat(C.stock)||0)-ee.main),pe.stock=C.stock,C.stock===0&&(C.isActive="false",pe.isActive="false"),C.totalSold=(parseFloat(C.totalSold)||0)+ee.main,pe.totalSold=C.totalSold),Object.keys(ee.variants).length>0&&C.variants&&(Object.keys(ee.variants).forEach(ve=>{const ye=(C.variants||[]).findIndex(Ht=>Ht.name===ve);ye>-1&&(C.variants[ye].stock=Math.max(0,(parseFloat(C.variants[ye].stock)||0)-ee.variants[ve]),C.variants[ye].stock===0&&(C.variants[ye].isActive=!1),C.variants[ye].totalSold=(parseFloat(C.variants[ye].totalSold)||0)+ee.variants[ve])}),pe.variants=C.variants);const $e=u.products.findIndex(ve=>ve.id.toString()===U);$e>-1&&(u.products[$e]=C),M.update(Z[be],pe)}),M.set(B,p),ce&&de&&De!==null){const X={points:De,name:b.name||O.data().name||"Pelanggan Setia",lastOrderAt:Date.now()};M.set(de,X,{merge:!0}),fe=De}Ke!==null&&M.set(Te,{stock:Ke},{merge:!0}),M.update(Re,{lastUpdate:_e.firestore.FieldValue.increment(1),updateType:"stock_change",updatedProductIds:A})}),u.lastUpdate=(parseInt(Qe("freshmart_last_update"))||u.lastUpdate||0)+1,Ee("freshmart_last_update",u.lastUpdate.toString()),Ee("freshmart_products",JSON.stringify(u.products))}else if(de)await $.runTransaction(async g=>{const A=await g.get(de),Z=A.exists,M=Z&&Me?$.collection("freshmart").doc("cms_data").collection("rewards").doc(re.id.toString()):null,R=M?await g.get(M):null;let O=null,ce=null;if(Z){const Te=parseFloat(A.data().points)||0;let he=Te;if(Me){if(!R||!R.exists)throw new Error("HADIAH_TIDAK_DITEMUKAN");const Y=R.data();if(Te<(parseFloat(Y.pointsCost)||0))throw new Error("POIN_TIDAK_CUKUP");if((parseFloat(Y.stock)||0)<=0)throw new Error("STOK_HADIAH_HABIS");O=(parseFloat(Y.stock)||0)-1,he-=parseFloat(Y.pointsCost)||0,p.claimedReward={id:Y.id,name:Y.name,pointsCost:parseFloat(Y.pointsCost)||0,status:"pending",note:""}}he+=le,ce=he,p.pointsEarned=le,p.customerPhone=b.wa,p.finalMemberPoints=ce,p.customerType="Member",g.set(de,{points:ce,name:b.name||A.data().name||"Pelanggan Setia",lastOrderAt:Date.now()},{merge:!0}),fe=ce,O!==null&&g.set(M,{stock:O},{merge:!0})}else{if(S==="tempo")throw new Error("TEMPO_KHUSUS_MEMBER");if(Me)throw new Error("MEMBER_TIDAK_DITEMUKAN");p.pointsEarned=0,p.pointsBreakdown={direct:0,spend:0},p.finalMemberPoints=null,p.customerType="Pelanggan Umum"}g.set(B,p)});else{if(p.pointsEarned=0,p.pointsBreakdown={direct:0,spend:0},p.finalMemberPoints=null,p.customerType="Pelanggan Umum",S==="tempo")throw new Error("TEMPO_KHUSUS_MEMBER");await B.set(p)}j.unshift({orderId:ie,date:new Date().toISOString(),total:h,itemCount:E.reduce((g,A)=>g+parseFloat(A.qty),0),status:"Baru",pointsEarned:p.pointsEarned||0,claimedReward:p.claimedReward||null,finalMemberPoints:fe,customerType:p.customerType||"Pelanggan Umum"}),Be(j);try{localStorage.setItem("freshmart_my_orders",JSON.stringify(j)),localStorage.setItem("freshmart_last_order",Date.now().toString())}catch{}if(typeof analytics<"u"&&analytics.logEvent("purchase",{transaction_id:ie,value:h,currency:"IDR"}),b.wa&&fe!==null){const g={id:b.wa,phone:b.wa,name:b.name||"Pelanggan Setia",points:fe};Q(g);try{localStorage.setItem("freshmart_current_member",JSON.stringify(g)),localStorage.setItem("freshmart_member_wa",b.wa)}catch{}typeof window.invalidateMemberCache=="function"&&window.invalidateMemberCache(b.wa)}else{Q(null);try{localStorage.removeItem("freshmart_current_member")}catch{}}p.claimedReward&&fe!==null?typeof window.showToast=="function"&&window.showToast(`✅ Hadiah "${p.claimedReward.name}" berhasil ditukar! Sisa poin Anda: ${fe}`):fe!==null&&le>0?typeof window.showToast=="function"&&window.showToast(`✅ Pesanan berhasil dikirim ke admin! (+${le} Poin Member didapat!)`):typeof window.showToast=="function"&&window.showToast("✅ Pesanan berhasil dikirim ke admin!"),setTimeout(()=>{Pt([]),K("cust-name",""),K("cust-address",""),K("cust-maps-input",""),K("cust-note",""),K("cust-wa",""),window.buktiPaymentUrl=null,window.buktiPaymentFile=null,window.buktiGDriveUploaded=!1;const g=l("bukti-preview-wrap"),A=l("bukti-placeholder");g&&g.classList.add("hidden"),A&&A.classList.remove("hidden"),T("bukti-uploading"),T("bukti-success"),T("bukti-gdrive-error");const Z=l("bukti-file-input");Z&&(Z.value=""),Mt({name:"",address:"",lat:null,lng:null,deliveryMethod:"delivery",distance:0,note:"",wa:""}),H(null),se(null);const M=l("member-status-banner");M&&T(M),T("payment-option-tempo"),l("voucher-input")&&(l("voucher-input").value=""),T("voucher-msg-container"),T("location-status"),l("btn-location")&&q("btn-location");const R=document.querySelector('input[name="delivery-method"][value="delivery"]');R&&(R.checked=!0,it());const O=document.querySelector('input[name="payment"][value="transfer"]');O&&(O.checked=!0,typeof window.togglePaymentDetails=="function"&&window.togglePaymentDetails()),typeof window.updCart=="function"&&window.updCart(),typeof window.renderCart=="function"&&window.renderCart();try{window.history.replaceState({view:"view-catalog"},"",window.location.pathname)}catch{}typeof window.changeView=="function"&&window.changeView("view-catalog",!0),typeof window.showToast=="function"&&window.showToast("Pesanan Dibuat! 🎉")},2e3)}catch(o){const i=o.message||"Error";i.startsWith("STOK_TIDAK_CUKUP:")?typeof window.showToast=="function"&&window.showToast("Maaf, stok berubah: "+i.replace("STOK_TIDAK_CUKUP: ","")):i==="TEMPO_KHUSUS_MEMBER"?typeof window.showToast=="function"&&window.showToast("Pembayaran Cash Tempo hanya untuk Member Resmi yang telah didaftarkan Admin!"):i==="POIN_TIDAK_CUKUP"?(typeof window.showToast=="function"&&window.showToast("Maaf, poin Anda ternyata tidak cukup untuk hadiah ini. Silakan cek lagi."),se(null)):i==="STOK_HADIAH_HABIS"?(typeof window.showToast=="function"&&window.showToast("Maaf, stok hadiah yang dipilih baru saja habis. Silakan pilih hadiah lain."),se(null)):i==="HADIAH_TIDAK_DITEMUKAN"?(typeof window.showToast=="function"&&window.showToast("Hadiah yang dipilih sudah tidak tersedia. Silakan pilih ulang."),se(null)):i==="MEMBER_TIDAK_DITEMUKAN"?(typeof window.showToast=="function"&&window.showToast("Data member tidak ditemukan, klaim hadiah dibatalkan. Pesanan bisa dicoba lagi tanpa hadiah."),se(null)):typeof window.showToast=="function"&&window.showToast(o.code==="resource-exhausted"?"Quota Server Penuh!":"Gagal proses: "+i)}finally{ae(!1),I()}};window.validateAndGoToPayment=Es;window.toggleDeliveryMethod=it;window.toggleOrderButton=Et;window.rPay=It;window.processOrder=Is;window.getLocation=()=>{if(!navigator.geolocation)return f("GPS tidak didukung");l("btn-location").innerHTML='<i class="fa-solid fa-spinner fa-spin text-sm"></i>',navigator.geolocation.getCurrentPosition(e=>{b.lat=e.coords.latitude,b.lng=e.coords.longitude,T("btn-location"),q("location-status"),l("location-status").classList.add("flex"),f("GPS Didapatkan")},e=>{l("btn-location").innerHTML='<i class="fa-solid fa-location-crosshairs text-[var(--color-primary)]"></i> Set GPS Maps',f("Gagal akses GPS")},{enableHighAccuracy:!0,timeout:15e3})};window.handleCustomerMapsInput=e=>{const t=typeof window.parseGeoCoordinates=="function"?window.parseGeoCoordinates:null,a=t?t(e):null;if(a){b.lat=parseFloat(a.lat),b.lng=parseFloat(a.lng),T("btn-location"),q("location-status");const r=l("location-status");return r&&(r.classList.add("flex"),r.innerHTML=`
                <i class="fa-solid fa-circle-check shrink-0 text-lg primary-text"></i>
                <div class="min-w-0">
                    <span class="text-[10px] font-bold uppercase leading-tight tracking-wide primary-text block">Koordinat Berhasil Disematkan!</span>
                    <span class="text-[9px] text-slate-500 dark:text-slate-400 font-mono">${a.lat}, ${a.lng}</span>
                </div>
            `),f("Titik lokasi Maps pembeli berhasil disematkan!"),typeof window.rPay=="function"&&window.rPay(),!0}return!1};window.pasteCustomerMapsInput=async()=>{const e=l("cust-maps-input");if(e){try{if(navigator.clipboard&&navigator.clipboard.readText){const t=await navigator.clipboard.readText();if(t){e.value=t,window.handleCustomerMapsInput(t)||f("Format tidak dikenali! Tempel koordinat: Lat, Lng atau link Maps");return}}}catch{}e.focus(),f("Silakan tekan Ctrl+V atau tahan untuk menempel")}};const Fs=()=>{const e=u.store.isDeliveryEnabled!==!1,t=u.store.isPickupEnabled!==!1;z("delivery-option-container","hidden",!e),z("pickup-option-container","hidden",!t),z("no-delivery-warning","hidden",e||t),z("delivery-methods-grid","hidden",!(e||t));const a=l("btn-checkout-next");if(a)if(e||t){a.removeAttribute("disabled"),a.classList.remove("opacity-50");const s=(b.deliveryMethod||"delivery")==="pickup"&&t?"pickup":e?"delivery":"pickup",o=document.querySelector(`input[value="${s}"]`);o&&(o.checked=!0)}else a.setAttribute("disabled","true"),a.classList.add("opacity-50");it()};window.rChck=Fs;window.buktiPaymentUrl=null;window.buktiPaymentFile=null;window.buktiGDriveUploaded=!1;window.compressImageForUpload=(e,t=1600,a=.82)=>new Promise(r=>{const s=new FileReader;s.readAsDataURL(e),s.onload=o=>{const i=new Image;i.onload=()=>{let{width:n,height:d}=i;(n>t||d>t)&&(n>d?(d=Math.round(d*t/n),n=t):(n=Math.round(n*t/d),d=t));const c=document.createElement("canvas");c.width=n,c.height=d,c.getContext("2d").drawImage(i,0,0,n,d),c.toBlob(x=>{if(!x)return r(e);r(new File([x],e.name,{type:"image/jpeg",lastModified:Date.now()}))},"image/jpeg",a)},i.onerror=()=>r(e),i.src=o.target.result},s.onerror=()=>r(e)});window._doSingleGDriveUpload=async(e,t)=>{const a=new FileReader;return new Promise(r=>{a.readAsDataURL(e),a.onload=async()=>{try{const s=a.result.split(",")[1],o=(e.name||"bukti.jpg").replace(/[^a-zA-Z0-9.]/g,"_"),i={name:"BUKTI_"+t+"_"+Date.now()+"_"+o,mimeType:e.type||"image/jpeg",data:s,token:GAS_SECRET_TOKEN},n=await fetch(GAS_UPLOAD_URL,{method:"POST",body:JSON.stringify(i),headers:{"Content-Type":"text/plain;charset=utf-8"},redirect:"follow"});if(!n.ok)return console.warn("GDrive upload HTTP error:",n.status),r(null);const d=await n.text();let c;try{c=JSON.parse(d)}catch{return console.warn("GDrive response parse error"),r(null)}c&&c.status==="success"&&c.url?r(Ne(c.url)):(console.warn("GDrive upload gagal:",c&&c.message),r(null))}catch(s){console.warn("GDrive upload exception:",s),r(null)}},a.onerror=()=>r(null)})};window.uploadBuktiToGDrive=async(e,t)=>{if(!e)return null;if(!GAS_UPLOAD_URL||GAS_UPLOAD_URL.includes("ISI_DENGAN"))return console.error("GAS_UPLOAD_URL belum dikonfigurasi!"),null;let a=e;try{a=await window.compressImageForUpload(e)}catch{}const r=2,s=3e4;for(let o=1;o<=r;o++){const i=l("bukti-uploading-text");i&&(i.textContent=o>1?`Mencoba ulang ke Google Drive... (${o}/${r})`:"Mengupload ke Google Drive...");try{const n=await Promise.race([window._doSingleGDriveUpload(a,t),new Promise((d,c)=>setTimeout(()=>c(new Error("timeout")),s))]);if(n)return n}catch(n){console.warn(`Percobaan upload ${o} gagal:`,n.message)}o<r&&await new Promise(n=>setTimeout(n,1500*o))}return null};window.handleBuktiUpload=async e=>{const t=e.target.files[0];if(!t)return;if(!t.type.startsWith("image/"))return f("Hanya file gambar yang diizinkan!");if(t.size>5*1024*1024)return f("Ukuran gambar max 5MB!");window.buktiPaymentFile=t,window.buktiPaymentUrl=null,window.buktiGDriveUploaded=!1;const a=new FileReader;a.onload=i=>{const n=l("bukti-preview-img"),d=l("bukti-preview-wrap"),c=l("bukti-placeholder");n&&(n.src=i.target.result),d&&d.classList.remove("hidden"),c&&c.classList.add("hidden")},a.readAsDataURL(t),T("bukti-success"),T("bukti-gdrive-error");const r=l("bukti-uploading");r&&(r.classList.remove("hidden"),r.style.display="flex");const s="TEMP_"+Date.now().toString(36).toUpperCase(),o=await window.uploadBuktiToGDrive(t,s);if(T("bukti-uploading"),o){window.buktiPaymentUrl=o,window.buktiGDriveUploaded=!0;const i=l("bukti-success"),n=l("bukti-success-text"),d=l("bukti-storage-info");n&&(n.textContent="Bukti berhasil disimpan!"),d&&(d.textContent="(tersimpan di Google Drive ✓)"),i&&(i.classList.remove("hidden"),i.style.display="flex"),T("bukti-gdrive-error")}else{window.buktiPaymentUrl=null,window.buktiGDriveUploaded=!1;const i=l("bukti-gdrive-error");i&&(i.classList.remove("hidden"),i.style.display="flex"),T("bukti-success"),f("❌ Upload ke Google Drive gagal. Coba lagi!")}};window.retryBuktiUpload=async()=>{if(!window.buktiPaymentFile)return f("Pilih gambar terlebih dahulu!");T("bukti-gdrive-error"),T("bukti-success");const e=l("bukti-uploading");e&&(e.classList.remove("hidden"),e.style.display="flex");const t="RETRY_"+Date.now().toString(36).toUpperCase(),a=await window.uploadBuktiToGDrive(window.buktiPaymentFile,t);if(T("bukti-uploading"),a){window.buktiPaymentUrl=a,window.buktiGDriveUploaded=!0;const r=l("bukti-success"),s=l("bukti-success-text"),o=l("bukti-storage-info");s&&(s.textContent="Bukti berhasil disimpan!"),o&&(o.textContent="(tersimpan di Google Drive ✓)"),r&&(r.classList.remove("hidden"),r.style.display="flex"),f("✅ Upload berhasil!")}else{const r=l("bukti-gdrive-error");r&&(r.classList.remove("hidden"),r.style.display="flex"),f("❌ Masih gagal. Periksa koneksi internet Anda.")}};window.uploadBuktiToFirebase=async(e,t)=>{if(window.buktiGDriveUploaded&&window.buktiPaymentUrl)return window.buktiPaymentUrl;if(!e)return null;const a=await window.uploadBuktiToGDrive(e,t);return a&&(window.buktiPaymentUrl=a,window.buktiGDriveUploaded=!0),a};window.togglePaymentDetails=()=>{const e=(document.querySelector('input[name="payment"]:checked')||{}).value;z("detail-transfer","hidden",e!=="transfer"),z("detail-qris","hidden",e!=="qris"),z("detail-cashier","hidden",e!=="cashier"),z("detail-cod","hidden",e!=="cod"),z("detail-tempo","hidden",e!=="tempo"),e==="tempo"&&window.calculateTempoBalance(),z("bukti-payment-section","hidden",!(e==="transfer"||e==="qris"||e==="tempo"))};window.calculateTempoBalance=()=>{const e=document.getElementById("tempo-dp-input");let t=parseFloat(e?.value)||0;t<0&&(t=0,e&&(e.value=0));let a=E.reduce((G,F)=>G+(parseFloat(getEffP(F))||0)*(parseFloat(F.qty)||0),0),r=0,s=0,o=0;if(b.deliveryMethod==="delivery"&&(r=Math.ceil((parseFloat(b.distance)||0)*(parseFloat(u.store.costPerKm)||0)/500)*500),vouch){let G=a;if(vouch.targetProduct&&vouch.targetProduct!==""){const F=parseInt(vouch.targetProduct);G=E.filter(S=>S.id===F).reduce((S,oe)=>S+(parseFloat(getEffP(oe))||0)*(parseFloat(oe.qty)||0),0)}if(vouch.type==="shipping_free")o=r;else if(vouch.type==="shipping_flat")o=parseFloat(vouch.value)||0;else if(vouch.type==="percent"){let F=G*((parseFloat(vouch.value)||0)/100);vouch.maxDiscount&&parseFloat(vouch.maxDiscount)>0&&(F=Math.min(F,parseFloat(vouch.maxDiscount))),s=F}else s=parseFloat(vouch.value)||0,s=Math.min(s,G)}(u.store.freeShippingMinSpendEnabled===!0||u.store.freeShippingMinSpendEnabled==="true")&&(parseFloat(u.store.freeShippingMinSpendAmount)||0)>0&&a>=(parseFloat(u.store.freeShippingMinSpendAmount)||0)&&b.deliveryMethod==="delivery"&&(o=r),o=Math.min(o,r),s=Math.min(s,a);let n=Math.max(0,a-s),d=Math.max(0,r-o);const c=window.calcTaxDetails(n+d);let x=0;window.useMemberPoints&&currentMember&&(x=Math.min(n+d+c.grandTotalAdd,parseFloat(currentMember.points)||0));let w=n+d+c.grandTotalAdd-x;t>w&&(t=w,e&&(e.value=t));let y=w-t;const P=document.getElementById("tempo-balance-display");P&&(P.innerText=D(y))};let Je=[];const Ue=()=>{try{localStorage.setItem("freshmart_my_orders",JSON.stringify(j))}catch(e){console.warn("[MyOrders] Gagal menyimpan ke localStorage:",e)}},_s=()=>{try{const e=localStorage.getItem("freshmart_my_orders");if(e){const t=JSON.parse(e);Array.isArray(t)&&t.length>0&&Be(t)}}catch(e){console.warn("[MyOrders] Gagal memuat dari localStorage:",e)}return j},Ft=()=>{Je.forEach(e=>{try{typeof e=="function"&&e()}catch{}}),Je=[]},_t=()=>{Ft(),j.filter(a=>{const r=a.status==="Selesai"||a.status==="Dibatalkan",s=a.claimedReward&&(a.claimedReward.status==="Menunggu Persetujuan"||!a.claimedReward.status);return!r||s}).slice(0,10).forEach(a=>{const r=a.orderId;if(!r)return;const s=$.collection("freshmart_orders").doc(r).onSnapshot(o=>{if(!o.exists)return;const i=o.data(),n=i.status,d=i.claimedReward?i.claimedReward.status:null,c=i.claimedReward&&i.claimedReward.note||"";let x=!1,w="";const y=j.find(P=>P.orderId===r);if(y){if(n&&y.status!==n){const P=y.status;y.status=n,x=!0,P!==void 0&&(w=`Pesanan #${r.split("-").pop()} kini: ${n}`)}y.claimedReward&&d&&(y.claimedReward.status!==d||y.claimedReward.note!==c)&&(y.claimedReward.status=d,y.claimedReward.note=c,x=!0),x&&(Ue(),window.curViewName==="view-orders"&&Ce(),w&&f(w))}},o=>{console.warn("[MyOrders Realtime] Snapshot error:",o.message)});Je.push(s)})},Ce=async()=>{if(_s(),!j.length){q("orders-empty-state"),T("btn-clear-orders"),q("spacer-orders"),L("orders-items-container","");return}T("orders-empty-state"),q("btn-clear-orders"),T("spacer-orders"),_t(),L("orders-items-container",j.map((e,t)=>{const a=new Date(e.date).toLocaleDateString("id-ID",{day:"numeric",month:"short",year:"numeric"});let r="text-slate-500 border-slate-200 bg-slate-50 dark:bg-slate-800 dark:border-slate-700",s="fa-clock";return e.status==="Baru"?(r="text-rose-600 border-rose-200 bg-rose-50 dark:bg-rose-900/30 dark:border-rose-800 dark:text-rose-400",s="fa-asterisk"):e.status==="Diproses"?(r="text-[var(--color-primary)] border-[var(--color-primary)]/30 bg-[rgba(var(--color-primary-rgb),0.08)] dark:bg-[rgba(var(--color-primary-rgb),0.15)] dark:border-[var(--color-primary)]/40",s="fa-spinner fa-spin"):e.status==="Selesai"?(r="text-[var(--color-primary)] border-[var(--color-primary)]/30 bg-[rgba(var(--color-primary-rgb),0.08)] dark:bg-[rgba(var(--color-primary-rgb),0.15)] dark:border-[var(--color-primary)]/40",s="fa-check-double"):e.status==="Dibatalkan"&&(r="text-slate-400 border-slate-200 bg-slate-100 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-400",s="fa-xmark"),`
        <div class="bg-white dark:bg-slate-800 p-4 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm relative overflow-hidden group min-w-0 transition-all hover:border-[var(--color-primary)]/40">
            <div class="flex justify-between items-start mb-3 border-b border-slate-100 dark:border-slate-700/60 pb-3">
                <div>
                    <span class="font-bold text-sm text-slate-800 dark:text-white tracking-tight">#${e.orderId.split("-").pop()}</span>
                    <p class="text-[10px] font-semibold text-slate-500 dark:text-slate-400 mt-0.5"><i class="fa-regular fa-calendar-days mr-1"></i>${a}</p>
                </div>
                <span class="text-[10px] font-bold px-2.5 py-1 rounded-lg border ${r} uppercase tracking-wider flex items-center shadow-xs"><i class="fa-solid ${s} mr-1.5 text-[9px]"></i> ${m(e.status)}</span>
            </div>
            ${e.pointsEarned>0||e.claimedReward?`
            <div class="flex flex-wrap gap-1.5 mb-3">
                ${e.pointsEarned>0?`<span class="text-[9px] font-bold px-2 py-1 rounded-lg bg-amber-50 text-amber-600 border border-amber-200 dark:bg-amber-900/20 dark:border-amber-800 dark:text-amber-400"><i class="fa-solid fa-star mr-1"></i>+${e.pointsEarned} Poin</span>`:""}
                ${e.claimedReward?`<span class="text-[9px] font-bold px-2 py-1 rounded-lg bg-[rgba(var(--color-primary-rgb),0.08)] text-[var(--color-primary)] border border-[var(--color-primary)]/30 dark:bg-[rgba(var(--color-primary-rgb),0.12)] dark:border-[var(--color-primary)]/40 dark:text-[var(--color-primary)]"><i class="fa-solid fa-gift mr-1"></i>Hadiah: ${m(e.claimedReward.name)} ${at(e.claimedReward)}</span>`:""}
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
        </div>`}).join(""))},Ls=async(e,t)=>{W("Melacak Status...");try{const a=await $.collection("freshmart_orders").doc(e).get();if(a.exists){const r=a.data();if(j[t])j[t].status=r.status;else{const s=j.findIndex(o=>o.orderId===e);s>-1&&(j[s].status=r.status)}Ue(),Ce(),f(`✅ Status Pesanan: ${r.status}`)}else f("Pesanan tidak ditemukan di server.")}catch(a){console.error("Gagal cek status pesanan:",a),f("Gagal mengambil data sistem. Periksa koneksi.")}finally{I()}},Bs=async()=>{const e=l("order-tracking-input"),t=e?e.value.trim():"";if(!t){f("Masukkan ID Pesanan terlebih dahulu!");return}let a=t.replace(/^#/,"").trim();const r=j.find(s=>s.orderId===a||s.orderId.endsWith(a));if(r){Ze(r.orderId);return}W("Mencari Pesanan...");try{let s=await $.collection("freshmart_orders").doc(a).get();if(!s.exists&&!a.startsWith("ORD-")){const o="ORD-"+a,i=await $.collection("freshmart_orders").doc(o).get();i.exists&&(s=i,a=o)}if(s.exists){const o=s.data();j.some(n=>n.orderId===a)||(j.unshift({orderId:a,date:o.dateString||(o.timestamp?o.timestamp.toDate().toISOString():new Date().toISOString()),total:o.payment&&o.payment.grandTotal?o.payment.grandTotal:0,itemCount:(o.items||[]).reduce((n,d)=>n+(parseFloat(d.qty)||0),0),status:o.status||"Baru",pointsEarned:o.pointsEarned||0,claimedReward:o.claimedReward||null,finalMemberPoints:o.finalMemberPoints||null}),Ue(),Ce()),e&&(e.value=""),f("✅ Pesanan berhasil ditemukan!"),Ze(a)}else f("❌ Pesanan dengan ID tersebut tidak ditemukan.")}catch(s){console.error("Gagal melacak pesanan:",s),f("Gagal menghubungi server. Pastikan ID Pesanan sudah benar.")}finally{I()}},Ns=()=>{Tt("Hapus Riwayat","Riwayat pesanan di perangkat ini akan dihapus. Pesanan tetap tersimpan di sistem toko. Lanjutkan?",()=>{Be([]),Ue(),Ce(),f("Riwayat lokal dibersihkan")})},Ze=async e=>{W("Memuat Rincian...");try{const t=await $.collection("freshmart_orders").doc(e).get();if(!t.exists){f("Pesanan tidak ditemukan."),I();return}const a=t.data();let r=[];if(a.status==="Selesai")try{r=(await $.collection("freshmart").doc("cms_data").collection("reviews").where("orderId","==",e).get()).docs.map(o=>`${o.data().productId}::${o.data().variantName||""}`)}catch{}Lt(e,a,r)}catch(t){console.error("Gagal mengambil data pesanan:",t),f("Gagal memuat rincian pesanan. Coba beberapa saat lagi.")}finally{I()}},Lt=(e,t,a=[])=>{try{let r=document.getElementById("order-detail-modal");r||(r=document.createElement("div"),r.id="order-detail-modal",r.className="fixed inset-0 z-[100] flex justify-center items-end sm:items-center bg-slate-900/60 opacity-0 pointer-events-none transition-opacity duration-300",document.body.appendChild(r));const s=m(t.customer&&t.customer.name?t.customer.name:"-"),o=m(t.customer&&t.customer.wa?t.customer.wa:"-"),i=m(t.customer&&t.customer.address?t.customer.address:"-"),n=t.customer&&t.customer.deliveryMethod==="delivery"?"Dikirim ke Alamat":"Ambil di Toko (Pickup)",d=m(t.customer&&t.customer.note?t.customer.note:""),c=m(t.payment&&t.payment.method?t.payment.method:"Cash / COD"),x=t.items||[],w=x.some(p=>p.poTime&&p.poTime!==""),y=x.map(p=>{const B=parseFloat(p.qty)||0,ne=parseFloat(p.effectivePrice||p.price)||0,le=B*ne,Re=`${p.id}::${p.variantName||""}`,de=t.status==="Selesai"&&!a.includes(Re)&&p.id!==void 0&&p.id!==null;return`
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
                    <p class="text-[10px] font-medium text-slate-500 dark:text-slate-400">${B} ${m(p.unit||"pcs")} x ${D(ne)}</p>
                    ${de?`<button type="button" onclick="openReviewModal('${e}',${p.id},'${encodeURIComponent(p.variantName||"")}','${encodeURIComponent(p.name||"")}','${encodeURIComponent(t.customer?.name||"")}')" class="mt-1.5 text-[10px] font-bold text-amber-500 hover:text-amber-600 flex items-center gap-1 transition-colors"><i class="fa-solid fa-star"></i> Berikan Ulasan</button>`:""}
                </div>
                <div class="text-right shrink-0">
                    <p class="text-xs font-bold text-slate-800 dark:text-[var(--color-primary)]">${D(le)}</p>
                </div>
            </div>
            `}).join("");let P="Tanggal Tidak Tersedia";try{let p;if(t.timestamp&&typeof t.timestamp.toDate=="function")p=t.timestamp.toDate();else{const B=t.timestamp||t.dateString||Date.now();if(typeof B=="number")p=new Date(B);else if(!isNaN(Number(B))&&String(B).trim()!=="")p=new Date(Number(B));else{const ne=String(B).replace(/-/g,"/").replace("T"," ").replace(/\..*$/,"");p=new Date(B),isNaN(p.getTime())&&(p=new Date(ne))}}p&&!isNaN(p.getTime())&&(P=p.toLocaleString("id-ID",{day:"numeric",month:"short",year:"numeric",hour:"2-digit",minute:"2-digit"}))}catch(p){console.error("Gagal memproses tanggal:",p)}const G=t.payment&&t.payment.subtotal?t.payment.subtotal:0,F=t.payment&&t.payment.shippingCost?t.payment.shippingCost:0,h=t.payment&&t.payment.productDiscount?t.payment.productDiscount:0,S=t.payment&&t.payment.shippingDiscount?t.payment.shippingDiscount:0,oe=t.payment&&t.payment.ppnAmount?t.payment.ppnAmount:0,ue=t.payment&&t.payment.ppnRate?t.payment.ppnRate:0,ie=t.payment&&t.payment.grandTotal?t.payment.grandTotal:0;r.innerHTML=`
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
                            <p class="text-[11px] font-bold text-slate-700 dark:text-slate-300">${P}</p>
                        </div>
                    </div>

                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div class="bg-slate-50 dark:bg-slate-800/40 p-3.5 rounded-xl border border-slate-200 dark:border-slate-700/60">
                            <h4 class="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2 flex items-center gap-1.5"><i class="fa-solid fa-user text-slate-400"></i> Info Pelanggan</h4>
                            <div class="space-y-1 text-xs">
                                <p class="font-bold text-slate-800 dark:text-slate-200">${s}</p>
                                ${t.customer&&t.customer.wa?`<a href="javascript:void(0)" onclick="if(typeof window.openWhatsApp==='function') window.openWhatsApp('${o}'); else window.open('https://wa.me/${o}', '_blank', 'noopener,noreferrer');" class="flex items-center gap-1 text-[var(--color-primary)] font-bold hover:underline cursor-pointer"><i class="fa-brands fa-whatsapp"></i> +${o}</a>`:""}
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
                            ${y}
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
                            <p class="text-[11px] font-semibold text-[var(--color-primary)] mt-1 ml-5">${at(t.claimedReward)}</p>
                            ${t.claimedReward.note?`<p class="text-[11px] text-[var(--color-primary)]/70 italic mt-0.5 ml-5">"${m(t.claimedReward.note)}"</p>`:""}
                        </div>`:""}
                    </div>`:""}

                    <div class="bg-slate-100 dark:bg-slate-800 p-4 rounded-xl space-y-2 text-xs">
                        <div class="flex justify-between text-slate-600 dark:text-slate-400"><p>Subtotal Produk</p><p class="font-bold text-slate-800 dark:text-white">${D(G)}</p></div>
                        <div class="flex justify-between text-slate-600 dark:text-slate-400"><p>Ongkos Kirim</p><p class="font-bold text-slate-800 dark:text-white">${D(F)}</p></div>
                        ${S>0?`<div class="flex justify-between text-[var(--color-primary)]"><p>Diskon Ongkir</p><p class="font-bold">-${D(S)}</p></div>`:""}
                        ${h>0?`<div class="flex justify-between text-rose-500"><p>Diskon Promo</p><p class="font-bold">-${D(h)}</p></div>`:""}
                        ${(()=>{if(oe<=0)return"";const p=t.payment?.ppnType==="inclusive",B=G-h+(F-S),ne=t.payment?.dppAmount||(p?Math.round(B*100/(100+ue)):Math.max(0,B));return`
                            <div class="flex justify-between text-slate-600 dark:text-slate-400"><p>DPP (Dasar Pengenaan Pajak)</p><p class="font-bold text-slate-800 dark:text-white">${D(ne)}</p></div>
                            <div class="flex justify-between text-amber-600 dark:text-amber-400"><p>${p?"Termasuk PPN":"PPN"} (${ue}%)</p><p class="font-bold">${p?"":"+"}${D(oe)}</p></div>
                            `})()}
                        <div class="flex justify-between items-center border-t border-dashed border-slate-300 dark:border-slate-700 pt-3 mt-2">
                            <p class="font-bold text-slate-800 dark:text-white uppercase tracking-wider">Total Tagihan</p>
                            <p class="text-lg font-bold text-[var(--color-primary)]">${D(ie)}</p>
                        </div>
                    </div>
                </div>
            </div>
        `,r.classList.contains("opacity-0")&&typeof window.pushModalHistory=="function"&&window.pushModalHistory("customerOrder"),r.classList.remove("opacity-0","pointer-events-none"),r.offsetWidth,requestAnimationFrame(()=>{const p=document.getElementById("order-detail-content");p&&(p.classList.remove("translate-y-full","sm:translate-y-10"),p.classList.add("translate-y-0","sm:translate-y-0"))})}catch(r){console.error("Error Render HTML Modal:",r),f("Gagal menampilkan detail. Coba lagi.")}},js=(e=!1)=>{const t=()=>{const a=document.getElementById("order-detail-modal"),r=document.getElementById("order-detail-content");r&&(r.classList.remove("translate-y-0","sm:translate-y-0"),r.classList.add("translate-y-full","sm:translate-y-10")),setTimeout(()=>{a&&a.classList.add("opacity-0","pointer-events-none")},300)};typeof window.requestCloseModal=="function"?window.requestCloseModal("customerOrder",e,t):t()};window.attachMyOrdersRealtime=_t;window.detachMyOrdersRealtime=Ft;window.renderMyOrders=Ce;window.checkOrderStatus=Ls;window.trackOrderManual=Bs;window.clearMyOrders=Ns;window.openCustomerOrderDetail=Ze;window.renderOrderDetailModal=Lt;window.closeCustomerOrderDetailModal=js;window.reviewPhotoFile=null;window.reviewRating=0;const Os=(e,t,a,r,s)=>{const o=decodeURIComponent(a||""),i=decodeURIComponent(r||""),n=decodeURIComponent(s||"");let d=document.getElementById("review-modal");d||(d=document.createElement("div"),d.id="review-modal",d.className="fixed inset-0 z-[120] bg-slate-900/80 flex items-end sm:items-center justify-center p-0 sm:p-5",d.onclick=c=>{c.target===d&&nt()},document.body.appendChild(d)),window.reviewPhotoFile=null,window.reviewRating=0,d.innerHTML=`
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
        </div>`,l("review-submit-btn").onclick=()=>lt(e,t,o,i,n),d.style.opacity="0",d.style.display="flex",requestAnimationFrame(()=>{d.style.transition="opacity 0.25s ease",d.style.opacity="1"}),typeof window.pushModalHistory=="function"&&window.pushModalHistory("review")},Us=e=>{window.reviewRating=e,document.querySelectorAll(".review-star").forEach(t=>{const a=parseInt(t.dataset.star);t.classList.toggle("text-amber-400",a<=e),t.classList.toggle("text-slate-300",a>e),t.classList.toggle("dark:text-slate-600",a>e)})},qs=e=>{const t=e.target.files[0];if(!t)return;if(!t.type.startsWith("image/")){f("Hanya file gambar yang diizinkan!");return}if(t.size>5*1024*1024){f("Ukuran gambar max 5MB!");return}window.reviewPhotoFile=t;const a=new FileReader;a.onload=r=>{l("review-photo-preview").src=r.target.result,q("review-photo-preview-wrap"),T("review-photo-btn")},a.readAsDataURL(t)},Gs=()=>{window.reviewPhotoFile=null,T("review-photo-preview-wrap"),q("review-photo-btn");const e=l("review-photo-input");e&&(e.value="")},nt=(e=!1)=>{const t=document.getElementById("review-modal");if(!t||t.style.display==="none")return;const a=()=>{t.style.opacity="0",t.style.transition="opacity 0.25s ease",setTimeout(()=>{t.style.display="none",t.style.opacity="",t.style.transition=""},250)};if(typeof J=="function")J("review",e,a);else if(typeof window.requestCloseModal=="function")window.requestCloseModal("review",e,a);else{if(!e&&Pe.length&&Pe[Pe.length-1]==="review"){Pe.pop();try{history.back()}catch{}}a()}},lt=async(e,t,a,r,s)=>{if(!window.reviewRating||window.reviewRating<1)return f("Silakan beri bintang terlebih dahulu!");if(!tt){ae(!0),W("Mengirim ulasan...");try{let o="";if(window.reviewPhotoFile&&typeof window.uploadBuktiToGDrive=="function"){const d=await window.uploadBuktiToGDrive(window.reviewPhotoFile,"review-"+e);d?o=d:f("Foto gagal diupload, ulasan tetap dikirim tanpa foto.")}const i=Date.now(),n={id:i,orderId:e||"",productId:t??0,variantName:a||"",productName:r||"",customerName:s||"Pelanggan",rating:window.reviewRating,text:N("review-text")||"",photoUrl:o||"",adminReply:"",isVisible:!0,createdAt:_e.firestore.FieldValue.serverTimestamp()};await $.collection("freshmart").doc("cms_data").collection("reviews").doc(i.toString()).set(n),Ye.delete(t),nt(),f("✅ Terima kasih atas ulasan Anda!"),typeof window.openCustomerOrderDetail=="function"&&window.openCustomerOrderDetail(e)}catch(o){console.error("Gagal mengirim ulasan:",o),f("Gagal mengirim ulasan: "+(o.message||"Error tidak diketahui"))}finally{ae(!1),I()}}},Ye=new Map,Ks=5*60*1e3,Hs=async e=>{if(!l("product-modal-reviews-container"))return;const a=s=>{const o=s.length?s.reduce((c,x)=>c+(parseFloat(x.rating)||0),0)/s.length:0,i=c=>Array.from({length:5},(x,w)=>`<i class="fa-solid fa-star ${w<Math.round(c)?"text-amber-400":"text-slate-200 dark:text-slate-700"}"></i>`).join("");let n=`
            <div class="flex items-center justify-between mb-4">
                <h4 class="font-bold text-slate-800 dark:text-white text-sm flex items-center gap-2"><i class="fa-solid fa-comment-dots text-amber-400"></i> Ulasan Pelanggan</h4>
                ${s.length?`<div class="flex items-center gap-1.5"><span class="flex text-xs">${i(o)}</span><span class="text-xs font-bold text-slate-600 dark:text-slate-300">${o.toFixed(1)}</span><span class="text-[10px] font-bold text-slate-400">(${s.length})</span></div>`:""}
            </div>`;if(!s.length){L("product-modal-reviews-container",n+'<p class="text-[11px] font-bold text-slate-400 text-center py-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl">Belum ada ulasan untuk produk ini.</p>');return}const d=s.map(c=>{let x="";try{c.createdAt&&c.createdAt.toDate&&(x=c.createdAt.toDate().toLocaleDateString("id-ID",{day:"numeric",month:"short",year:"numeric"}))}catch{}return`
            <div class="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-2xl border border-slate-100 dark:border-slate-700/60">
                <div class="flex items-center justify-between mb-1.5">
                    <p class="text-xs font-bold text-slate-800 dark:text-white">${m(c.customerName||"Pelanggan")}</p>
                    <span class="text-[9px] font-bold text-slate-400">${x}</span>
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
            </div>`}).join("");L("product-modal-reviews-container",n+`<div class="space-y-3">${d}</div>`)},r=Ye.get(e);if(r&&Date.now()-r.timestamp<Ks){a(r.data);return}L("product-modal-reviews-container",'<div class="text-center py-6"><i class="fa-solid fa-spinner fa-spin text-xl text-slate-300"></i></div>');try{let o=(await $.collection("freshmart").doc("cms_data").collection("reviews").where("productId","==",e).get()).docs.map(i=>i.data()).filter(i=>i.isVisible!==!1);o.sort((i,n)=>{const d=i.createdAt&&i.createdAt.toMillis?i.createdAt.toMillis():0;return(n.createdAt&&n.createdAt.toMillis?n.createdAt.toMillis():0)-d}),Ye.set(e,{data:o,timestamp:Date.now()}),a(o)}catch(s){console.warn("Gagal memuat ulasan:",s),L("product-modal-reviews-container",'<p class="text-[11px] text-slate-400 text-center py-4">Belum ada ulasan yang dapat dimuat.</p>')}};window.openReviewModal=Os;window.setReviewRating=Us;window.handleReviewPhotoSelect=qs;window.removeReviewPhoto=Gs;window.closeReviewModal=nt;window.submitReview=lt;window.submitProductReview=lt;window.loadProductReviews=Hs;let wt=null;const dt=()=>{if(!wt)try{wt=$.collection("freshmart").doc("cms_data").collection("faqs").onSnapshot(e=>{e&&e.docs&&(u.faqs=e.docs.map(t=>({id:t.id,...t.data()}))),typeof window.curViewName<"u"&&window.curViewName==="view-faq"&&Se(),window.isAdm&&typeof window.cTab<"u"&&window.cTab==="faqs"&&typeof window.rAdmFAQ=="function"&&window.rAdmFAQ()},e=>{console.warn("Sync sub-koleksi faqs dibatasi, menggunakan fallback cms_data.faqs:",e.message),typeof window.curViewName<"u"&&window.curViewName==="view-faq"&&Se(),window.isAdm&&typeof window.cTab<"u"&&window.cTab==="faqs"&&typeof window.rAdmFAQ=="function"&&window.rAdmFAQ()})}catch{console.warn("Fallback sync Q&A dari cms_data aktif")}};let Ie="Semua";const Se=()=>{dt();const e=document.getElementById("storefront-faq-container"),t=document.getElementById("faq-category-pills");if(!e)return;const a=(u.faqs||[]).filter(i=>i.status==="published"),r=["Semua","Pemesanan","Pengiriman","Pembayaran","Garansi","Lainnya"];t&&(t.innerHTML=r.map(i=>`
            <button onclick="selectFAQCategory('${i}')" class="px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${Ie===i?"primary-bg text-white shadow-md":"bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-slate-100"}">
                ${i}
            </button>
        `).join(""));const s=(document.getElementById("faq-search-input")?.value||"").toLowerCase().trim(),o=a.filter(i=>{const n=Ie==="Semua"||i.category===Ie,d=!s||(i.question||"").toLowerCase().includes(s)||(i.answer||"").toLowerCase().includes(s);return n&&d});if(!o.length){e.innerHTML=`
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
    `).join("")},Vs=e=>{Ie=e,Se()},Qs=()=>{Se()},Ws=e=>{const t=document.getElementById(`faq-body-${e}`),a=document.getElementById(`faq-icon-${e}`);if(!t||!a)return;t.classList.contains("hidden")?(t.classList.remove("hidden"),a.classList.add("rotate-180")):(t.classList.add("hidden"),a.classList.remove("rotate-180"))},zs=()=>{const e=l("modal-ask-question"),t=l("modal-ask-question-box");e&&(e.classList.contains("hidden")&&typeof window.pushModalHistory=="function"&&window.pushModalHistory("askQuestion"),ge(e,t))},Bt=(e=!1)=>{const t=()=>{xe("modal-ask-question","modal-ask-question-box")};typeof window.requestCloseModal=="function"?window.requestCloseModal("askQuestion",e,t):t()},Js=async()=>{const e=(N("ask-author-name")||"").trim()||"Pelanggan",t=N("ask-category")||"Pemesanan",a=(N("ask-question-text")||"").trim();if(!a)return f("Tuliskan pertanyaan Anda terlebih dahulu!");W("Mengirim pertanyaan...");const r="faq-"+Date.now().toString(36),s={id:r,question:a,answer:"",category:t,authorName:e,status:"pending_answer",createdAt:new Date().toISOString()};let o=!1;try{await $.collection("freshmart").doc("cms_data").collection("faqs").doc(r).set(s),o=!0}catch(i){console.warn("Penulisan sub-koleksi faqs dibatasi, mencoba fallback cms_data.faqs:",i)}if(!o)try{const i=[s,...(u.faqs||[]).filter(n=>n.id!==r)];await $.collection("freshmart").doc("cms_data").set({faqs:i},{merge:!0}),u.faqs=i,o=!0}catch(i){console.warn("Fallback cms_data.faqs juga gagal:",i)}I(),o?(Bt(),K("ask-question-text",""),f("Pertanyaan terkirim! Admin akan menjawabnya segera."),Se()):f("Gagal mengirim pertanyaan. Coba lagi!")};let Ae="all";const qe=()=>{dt();const e=u.faqs||[],t=e.filter(s=>Ae==="pending"?s.status==="pending_answer":Ae==="published"?s.status==="published":!0),a=e.filter(s=>s.status==="pending_answer").length;let r=`
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
                <button onclick="setAdminFAQFilter('all')" class="shrink-0 px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${Ae==="all"?"primary-bg text-white shadow-md":"bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200"}">
                    Semua (${e.length})
                </button>
                <button onclick="setAdminFAQFilter('pending')" class="shrink-0 px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${Ae==="pending"?"primary-bg text-white shadow-md":"bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200"}">
                    <span>Belum Dijawab</span>
                    ${a>0?`<span class="bg-rose-500 text-white text-[9px] px-1.5 py-0.5 rounded-full font-bold">${a}</span>`:""}
                </button>
                <button onclick="setAdminFAQFilter('published')" class="shrink-0 px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${Ae==="published"?"primary-bg text-white shadow-md":"bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200"}">
                    Terpublikasi
                </button>
            </div>

            <!-- List Q&A Admin -->
            <div class="space-y-4">
                ${t.length?t.map(s=>`
                    <div class="bg-white dark:bg-slate-800 p-4 sm:p-5 rounded-2xl border ${s.status==="pending_answer"?"border-amber-300/80 bg-amber-50/20 dark:bg-amber-900/10":"border-slate-200/80 dark:border-slate-700/80"} shadow-sm space-y-3">
                        <div class="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 dark:border-slate-700/60 pb-2.5">
                            <div class="flex flex-wrap items-center gap-1.5 min-w-0">
                                <span class="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-lg ${s.status==="published"?"primary-bg-soft primary-text border primary-border":s.status==="pending_answer"?"bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400":"bg-slate-100 text-slate-600 dark:bg-slate-700 dark:text-slate-400"}">
                                    ${s.status==="published"?"Terpublikasi":s.status==="pending_answer"?"Menunggu Jawaban":"Disembunyikan"}
                                </span>
                                <span class="text-[9px] sm:text-[10px] font-bold text-slate-400 uppercase tracking-wider px-2 py-0.5 rounded-lg bg-slate-100 dark:bg-slate-700/50">${m(s.category||"Umum")}</span>
                                ${s.authorName?`<span class="text-[10px] text-slate-400 italic">Oleh: ${m(s.authorName)}</span>`:""}
                            </div>
                            <div class="flex items-center gap-1.5 shrink-0 ml-auto">
                                <button onclick="openFAQModal('${s.id}')" class="px-2.5 py-1.5 rounded-xl bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400 font-bold text-xs hover:bg-blue-100 transition-colors flex items-center gap-1 active:scale-95">
                                    <i class="fa-solid fa-pen-to-square"></i> Edit / Jawab
                                </button>
                                <button onclick="deleteAdminFAQ('${s.id}')" class="px-2.5 py-1.5 rounded-xl bg-rose-50 text-rose-600 dark:bg-rose-900/20 dark:text-rose-400 font-bold text-xs hover:bg-rose-100 transition-colors active:scale-95" title="Hapus Q&A">
                                    <i class="fa-solid fa-trash"></i>
                                </button>
                            </div>
                        </div>

                        <div>
                            <h3 class="font-bold text-sm sm:text-base text-slate-900 dark:text-white leading-snug break-words">${m(s.question)}</h3>
                        </div>

                        <div class="primary-bg-soft dark:bg-slate-900/60 p-3.5 sm:p-4 rounded-xl border primary-border text-xs font-medium text-slate-800 dark:text-slate-200">
                            <span class="font-extrabold primary-text uppercase text-[10px] tracking-wider flex items-center gap-1.5 mb-1">
                                <i class="fa-solid fa-user-shield text-[10px]"></i> Jawaban Admin Toko:
                            </span>
                            <div class="whitespace-pre-wrap leading-relaxed font-semibold break-words">${s.answer?m(s.answer):'<span class="text-rose-500 italic font-semibold">Belum dijawab. Klik "Edit / Jawab" untuk memberikan jawaban.</span>'}</div>
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
    `;setH("admin-content",r)},Zs=e=>{Ae=e,qe()},Ys=e=>{const t=(u.faqs||[]).find(s=>s.id===e)||{id:"",question:"",answer:"",category:"Pemesanan",authorName:"Admin",status:"published"};K("admin-faq-id",t.id),K("admin-faq-category",t.category||"Pemesanan"),K("admin-faq-author",t.authorName||"Admin"),K("admin-faq-question",t.question||""),K("admin-faq-answer",t.answer||""),K("admin-faq-status",t.status||"published"),_("admin-faq-modal-title",e?"Edit Q&A":"Tambah Q&A Baru");const a=l("modal-admin-faq"),r=l("modal-admin-faq-box");a&&(a.classList.contains("hidden")&&typeof window.pushModalHistory=="function"&&window.pushModalHistory("adminFAQ"),ge(a,r))},Nt=(e=!1)=>{const t=()=>{xe("modal-admin-faq","modal-admin-faq-box")};typeof window.requestCloseModal=="function"?window.requestCloseModal("adminFAQ",e,t):t()},Xs=async()=>{const e=N("admin-faq-id")||"faq-"+Date.now().toString(36),t=N("admin-faq-category"),a=(N("admin-faq-author")||"").trim()||"Admin",r=(N("admin-faq-question")||"").trim(),s=(N("admin-faq-answer")||"").trim();let o=N("admin-faq-status");if(!r)return f("Pertanyaan tidak boleh kosong!");s&&o==="pending_answer"&&(o="published"),W("Menyimpan Q&A...");const i={id:e,question:r,answer:s,category:t,authorName:a,status:o,updatedAt:new Date().toISOString()};let n=[...u.faqs||[]];const d=n.findIndex(c=>c.id===e);d>-1?n[d]={...n[d],...i}:n.unshift(i),u.faqs=n;try{await $.collection("freshmart").doc("cms_data").collection("faqs").doc(e).set(i,{merge:!0})}catch(c){console.warn("Gagal set ke sub-koleksi faqs:",c)}try{await $.collection("freshmart").doc("cms_data").set({faqs:n},{merge:!0})}catch(c){console.warn("Gagal update cms_data.faqs:",c)}I(),Nt(),f("Q&A Berhasil Disimpan!"),qe()},er=e=>{Tt("Hapus Q&A","Yakin ingin menghapus pertanyaan ini?",async()=>{W("Menghapus Q&A...");let t=(u.faqs||[]).filter(a=>a.id!==e);u.faqs=t;try{await $.collection("freshmart").doc("cms_data").collection("faqs").doc(e).delete()}catch(a){console.warn("Gagal delete dari sub-koleksi faqs:",a)}try{await $.collection("freshmart").doc("cms_data").set({faqs:t},{merge:!0})}catch(a){console.warn("Gagal update cms_data.faqs:",a)}I(),f("Q&A Berhasil Dihapus!"),qe()})};window.attachFAQRealtime=dt;window.renderStorefrontFAQ=Se;window.selectFAQCategory=Vs;window.filterStorefrontFAQ=Qs;window.toggleFAQAccordion=Ws;window.openAskQuestionModal=zs;window.closeAskQuestionModal=Bt;window.submitCustomerQuestion=Js;window.rAdmFAQ=qe;window.setAdminFAQFilter=Zs;window.openFAQModal=Ys;window.closeAdminFAQModal=Nt;window.saveAdminFAQ=Xs;window.deleteAdminFAQ=er;const tr="admgaffidigital/tokoputri",ar=`https://api.github.com/repos/${tr}/releases/latest`,Xe="https://github.com/admgaffidigital/tokoputri/releases/latest/download/TokoPutri.apk";let ke=null,Ve=!1;const sr=e=>!e||isNaN(e)?"8.0 MB":`${(e/(1024*1024)).toFixed(1)} MB`,rr=e=>{if(!e)return"Terbaru";try{return new Date(e).toLocaleDateString("id-ID",{day:"numeric",month:"short",year:"numeric"})}catch{return"Terbaru"}},or=async()=>{if(ke)return ke;if(Ve)return null;const e=ct(u)||"v1.8.7";Ve=!0;try{const t=await fetch(ar,{headers:{Accept:"application/vnd.github.v3+json"},cache:"no-store"});if(t.ok){const a=await t.json(),r=a.assets?.find(n=>n.name?.toLowerCase().endsWith(".apk"))||a.assets?.[0],s=a.tag_name||e,o=Qt(s,e)>0,i=o?e:s;ke={tagName:i,name:`Toko Putri ${i}`,publishedAt:o?"19 Sep 2026":rr(a.published_at),fileSize:r?sr(r.size):"8.0 MB",downloadUrl:r?.browser_download_url||Xe,notes:a.body||"",isLiveFetched:!0}}else throw new Error(`GitHub API HTTP ${t.status}`)}catch{const a=ct(u)||"v1.8.7";ke={tagName:a,name:`Toko Putri ${a}`,publishedAt:"19 Sep 2026",fileSize:"8.0 MB",downloadUrl:Xe,notes:"",isLiveFetched:!1}}finally{Ve=!1}return ke},ir=()=>{let e=l("app-download-modal");return e||(e=document.createElement("div"),e.id="app-download-modal",e.className="fixed inset-0 z-[125] bg-slate-950/80 backdrop-blur-xs flex items-end sm:items-center justify-center p-0 sm:p-4 opacity-0 transition-opacity duration-300",e.onclick=t=>{t.target===e&&jt()},e.innerHTML=`
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
    </div>`,document.body.appendChild(e),e)},nr=async()=>{const e=ir();if(!e)return;me("appDownload"),e.style.display="flex",e.offsetWidth,requestAnimationFrame(()=>{e.classList.remove("opacity-0");const a=l("app-download-modal-box");a&&a.classList.remove("translate-y-full","sm:translate-y-8")}),typeof window.triggerHaptic=="function"&&window.triggerHaptic("light");const t=await or();if(t){const a=l("app-modal-version-tag"),r=l("app-modal-filesize"),s=l("app-modal-published-date");a&&(a.textContent=t.tagName),r&&(r.innerHTML=`<span>${m(t.fileSize)}</span>`),s&&(s.textContent=`Rilis: ${m(t.publishedAt)}`)}},jt=(e=!1)=>{const t=l("app-download-modal");!t||t.style.display==="none"||J("appDownload",e,()=>{t.classList.add("opacity-0");const a=l("app-download-modal-box");a&&a.classList.add("translate-y-full","sm:translate-y-8"),setTimeout(()=>{t.style.display="none"},300)})},lr=()=>{const e=l("btn-download-apk-action"),t=l("btn-download-apk-icon"),a=l("btn-download-apk-text");e&&e.classList.add("opacity-80","pointer-events-none"),t&&(t.className="fa-solid fa-spinner fa-spin"),a&&(a.textContent="Menghubungkan ke Server Rilis..."),typeof window.triggerHaptic=="function"&&window.triggerHaptic("medium"),typeof window.showToast=="function"&&window.showToast("Memulai unduhan TokoPutri.apk terbaru. Cek panel notifikasi HP Anda!");const r=ke?.downloadUrl||Xe,s=document.createElement("a");s.href=r,s.setAttribute("download","TokoPutri.apk"),s.target="_blank",s.rel="noopener noreferrer",document.body.appendChild(s),s.click(),document.body.removeChild(s),setTimeout(()=>{if(e&&e.classList.remove("opacity-80","pointer-events-none"),t&&(t.className="fa-solid fa-circle-check text-white"),a){const o=ke?.tagName||"v1.8.7";a.textContent=`Unduh Ulang APK (${o})`}},2500)};window.openAppDownloadModal=nr;window.closeAppDownloadModal=jt;window.downloadLatestApk=lr;const Ge="B7qgwFQqtYLpBqdaK69HgtCfR7s5t67p",dr=20*1024*1024,cr=["video/mp4","video/webm","video/quicktime","video/x-msvideo","video/3gpp"],Ot=["image/jpeg","image/png","image/webp","image/gif"],pr=async(e,t,a=null)=>{const r=e.files[0];if(!r)return;if(!Ot.includes(r.type))return e.value="",f("Hanya file JPG, PNG, WEBP, atau GIF yang diizinkan!");if(r.size>3*1024*1024)return e.value="",f("Maksimal gambar 3MB!");const s=window.GAS_UPLOAD_URL||je;if(s.includes("ISI_DENGAN"))return e.value="",f("URL Script Google belum diisi!");W("Upload Gambar...");const o=new FileReader;o.readAsDataURL(r),o.onload=async()=>{try{const i=o.result.split(",")[1],n=r.name.replace(/[^a-zA-Z0-9.]/g,"_"),d={name:"POS_"+Date.now()+"_"+n,mimeType:r.type,data:i,token:Ge},x=await(await fetch(s,{method:"POST",body:JSON.stringify(d),headers:{"Content-Type":"text/plain;charset=utf-8"},redirect:"follow"})).text();let w;try{w=JSON.parse(x)}catch{return f("Error Server!")}if(w.status==="success"){const y=Ne(w.url),P=l(t);P&&(P.value=y,P.dispatchEvent(new Event("input",{bubbles:!0})),P.dispatchEvent(new Event("change",{bubbles:!0})),a!==null&&typeof window.uVar=="function"&&window.uVar(a,"img",y),f("Gambar diupload!"))}else f("Gagal: "+(w.message||"Error"))}catch{f("Koneksi terputus saat upload.")}finally{I(),e.value=""}},o.onerror=()=>{f("Gagal membaca file!"),I(),e.value=""}},mr=async(e,t)=>{const a=e.files[0];if(!a)return;if(!cr.includes(a.type))return e.value="",f("Hanya file MP4, WEBM, MOV, atau AVI yang diizinkan!");if(a.size>dr)return e.value="",f("Video terlalu besar! Maksimal 20MB.");const r=window.GAS_UPLOAD_URL||je;if(r.includes("ISI_DENGAN"))return e.value="",f("URL Script Google belum diisi di Pengaturan!");W("Upload Video... (harap tunggu)");const s=new FileReader;s.readAsDataURL(a),s.onload=async()=>{try{const o=s.result.split(",")[1],i=a.name.replace(/[^a-zA-Z0-9.]/g,"_"),n={name:"VID_"+Date.now()+"_"+i,mimeType:a.type,data:o,token:Ge},c=await(await fetch(r,{method:"POST",body:JSON.stringify(n),headers:{"Content-Type":"text/plain;charset=utf-8"},redirect:"follow"})).text();let x;try{x=JSON.parse(c)}catch{return f("Error Server GAS!")}if(x.status==="success"){const w="https://drive.google.com/file/d/"+x.fileId+"/preview",y=l(t);y&&(y.value=w,y.dispatchEvent(new Event("input",{bubbles:!0})),y.dispatchEvent(new Event("change",{bubbles:!0})),f("Video berhasil diupload ke Drive!"))}else f("Gagal upload: "+(x.message||"Error"))}catch{f("Koneksi terputus saat upload video.")}finally{I(),e.value=""}},s.onerror=()=>{f("Gagal membaca file video!"),I(),e.value=""}},ur=async(e,t)=>{const a=e.files[0];if(!a)return;if(!Ot.includes(a.type))return e.value="",f("Hanya file JPG, PNG, WEBP, atau GIF yang diizinkan!");if(a.size>3*1024*1024)return e.value="",f("Maksimal gambar 3MB!");const r=window.GAS_UPLOAD_URL||je;if(r.includes("ISI_DENGAN"))return e.value="",f("URL Script Google belum diisi!");W("Menyisipkan Gambar...");const s=new FileReader;s.readAsDataURL(a),s.onload=async()=>{try{const o=s.result.split(",")[1],i=a.name.replace(/[^a-zA-Z0-9.]/g,"_"),n={name:"RTE_"+Date.now()+"_"+i,mimeType:a.type,data:o,token:Ge},c=await(await fetch(r,{method:"POST",body:JSON.stringify(n),headers:{"Content-Type":"text/plain;charset=utf-8"},redirect:"follow"})).text();let x;try{x=JSON.parse(c)}catch{return f("Error Server!")}if(x.status==="success"){const w=Ne(x.url),y=l(t);y&&(y.focus(),document.execCommand("insertHTML",!1,`<br><img loading="lazy" src="${w}" style="max-width:100%; border-radius:12px; margin: 10px 0; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);" ><br>`)),f("Gambar berhasil disisipkan!")}else f("Gagal upload gambar.")}catch{f("Gagal koneksi.")}finally{I(),e.value=""}},s.onerror=()=>{f("Gagal membaca file!"),I(),e.value=""}};window.GAS_SECRET_TOKEN=Ge;window.handleImageUpload=pr;window.handleVideoUpload=mr;window.handleRTEditorImage=ur;window.setCat=e=>{At(e),st(1),typeof window.rCat=="function"&&window.rCat()};window.setBrand=e=>{St(e),st(1),typeof window.rCat=="function"&&window.rCat()};const fr=()=>{let e="",t=ze==="Semua Produk";e+=`
    <button onclick="setCat('Semua Produk'); closeCategoryModal()" class="w-full flex items-center gap-3.5 p-3 sm:p-3.5 rounded-2xl border transition-all active:scale-[0.98] ${t?"bg-[rgba(var(--color-primary-rgb),0.08)] border-[var(--color-primary)] dark:bg-[rgba(var(--color-primary-rgb),0.12)] dark:border-[var(--color-primary)] shadow-[0_0_0_1px_rgba(var(--color-primary-rgb),0.2)]":"bg-slate-50 border-slate-200 dark:bg-slate-800/50 dark:border-slate-700 hover:border-[var(--color-primary)]/40 dark:hover:border-[var(--color-primary)]/40"} group">
        <div class="w-11 h-11 sm:w-12 sm:h-12 rounded-xl ${t?"bg-[var(--color-primary)] text-white border-none":"bg-white text-slate-400 border border-slate-200 dark:border-slate-600 group-hover:text-[var(--color-primary)]"} flex items-center justify-center shadow-sm shrink-0 overflow-hidden transition-colors">
            <i class="fa-solid fa-layer-group text-base sm:text-lg"></i>
        </div>
        <span class="text-xs sm:text-sm font-bold uppercase tracking-widest text-left flex-1 ${t?"text-[var(--color-primary)]":"text-slate-600 dark:text-slate-300"}">SEMUA</span>
        <i class="fa-solid fa-circle-check text-base ${t?"text-[var(--color-primary)]":"text-slate-300 dark:text-slate-600"}"></i>
    </button>`,u.categories.forEach(o=>{let i=ze===o.name,n=o.img?`<img loading="lazy" src="${m(o.img)}" alt="${m(o.name)}" class="w-full h-full object-cover" onerror="this.onerror=null;this.src='https://placehold.co/100?text=Cat'">`:'<i class="fa-solid fa-box text-base sm:text-lg"></i>';e+=`
        <button onclick="setCat('${m(o.name)}'); closeCategoryModal()" class="w-full flex items-center gap-3.5 p-3 sm:p-3.5 rounded-2xl border transition-all active:scale-[0.98] ${i?"bg-[rgba(var(--color-primary-rgb),0.08)] border-[var(--color-primary)] dark:bg-[rgba(var(--color-primary-rgb),0.12)] dark:border-[var(--color-primary)] shadow-[0_0_0_1px_rgba(var(--color-primary-rgb),0.2)]":"bg-slate-50 border-slate-200 dark:bg-slate-800/50 dark:border-slate-700 hover:border-[var(--color-primary)]/40 dark:hover:border-[var(--color-primary)]/40"} group">
            <div class="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-white dark:bg-slate-800 flex items-center justify-center shadow-sm shrink-0 text-slate-400 group-hover:text-[var(--color-primary)] overflow-hidden border border-slate-200 dark:border-slate-600">
                ${n}
            </div>
            <span class="text-xs sm:text-sm font-bold uppercase tracking-widest text-left flex-1 line-clamp-1 ${i?"text-[var(--color-primary)]":"text-slate-600 dark:text-slate-300"}">${m(o.name)}</span>
            <i class="fa-solid fa-circle-check text-base ${i?"text-[var(--color-primary)]":"text-slate-300 dark:text-slate-600"}"></i>
        </button>`});const a=l("modal-category-list");a&&(a.innerHTML=`<div class="flex flex-col gap-2.5 pb-6 w-full">${e}</div>`);const r=l("category-modal"),s=l("category-modal-content");r&&s&&(r.classList.contains("hidden")&&me("category"),ge(r,s))};window.openCategoryModal=fr;window.openBrandModal=()=>{let e="",t=We==="Semua Merek";e+=`
    <button onclick="setBrand('Semua Merek'); closeBrandModal()" class="flex flex-col items-center justify-start p-2.5 sm:p-3.5 rounded-2xl border transition-all ${t?"bg-[rgba(var(--color-primary-rgb),0.08)] border-[var(--color-primary)] dark:bg-[rgba(var(--color-primary-rgb),0.12)] dark:border-[var(--color-primary)] shadow-[0_0_0_1px_rgba(var(--color-primary-rgb),0.2)]":"bg-slate-50 border-slate-200 dark:bg-slate-800/50 dark:border-slate-700 hover:border-[var(--color-primary)]/40 dark:hover:border-[var(--color-primary)]/40"} group">
        <div class="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl ${t?"bg-[var(--color-primary)] text-white border-none":"bg-white text-slate-400 border border-slate-200 dark:border-slate-600 group-hover:text-[var(--color-primary)]"} flex items-center justify-center shadow-sm mb-2.5 transition-colors shrink-0">
            <i class="fa-solid fa-copyright text-lg sm:text-xl"></i>
        </div>
        <span class="text-[9px] font-bold uppercase tracking-widest text-center leading-tight line-clamp-2 w-full break-words ${t?"text-[var(--color-primary)]":"text-slate-600 dark:text-slate-300"}">SEMUA MEREK</span>
    </button>`,u.brands.forEach(o=>{let i=We===o.name,n=o.img?`<img loading="lazy" src="${m(o.img)}" alt="${m(o.name)}" class="w-full h-full object-contain p-1.5" >`:'<i class="fa-solid fa-tag text-lg sm:text-xl"></i>';e+=`
        <button onclick="setBrand('${m(o.name)}'); closeBrandModal()" class="flex flex-col items-center justify-start p-2.5 sm:p-3.5 rounded-2xl border transition-all ${i?"bg-[rgba(var(--color-primary-rgb),0.08)] border-[var(--color-primary)] dark:bg-[rgba(var(--color-primary-rgb),0.12)] dark:border-[var(--color-primary)] shadow-[0_0_0_1px_rgba(var(--color-primary-rgb),0.2)]":"bg-slate-50 border-slate-200 dark:bg-slate-800/50 dark:border-slate-700 hover:border-[var(--color-primary)]/40 dark:hover:border-[var(--color-primary)]/40"} group">
            <div class="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white flex items-center justify-center shadow-sm mb-2.5 text-slate-400 group-hover:text-[var(--color-primary)] overflow-hidden shrink-0 border border-slate-200 dark:border-slate-600">
                ${n}
            </div>
            <span class="text-[9px] font-bold uppercase tracking-widest text-center leading-tight line-clamp-2 w-full break-words ${i?"text-[var(--color-primary)]":"text-slate-600 dark:text-slate-300"}">${m(o.name)}</span>
        </button>`});const a=l("modal-brand-grid");a&&(a.innerHTML=e);const r=l("brand-modal"),s=l("brand-modal-content");r&&s&&(r.classList.contains("hidden")&&me("brand"),ge(r,s))};window.closeCategoryModal=(e=!1)=>{const t=l("category-modal"),a=l("category-modal-content");t&&a&&J("category",e,()=>{xe(t,a)})};window.closeBrandModal=(e=!1)=>{const t=l("brand-modal"),a=l("brand-modal-content");t&&a&&J("brand",e,()=>{xe(t,a)})};window.openQuickMenuModal=()=>{const e=l("quickmenu-modal"),t=l("quickmenu-modal-content");e&&t&&(e.classList.contains("hidden")&&me("quickmenu"),ge(e,t))};window.openTermsModal=()=>{const e=`
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
    `,t=u?.store?.terms,a=t?t.includes("<")?t:`<div class="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-800/40 leading-relaxed text-xs sm:text-sm text-slate-600 dark:text-slate-300 whitespace-pre-line">${t}</div>`:e;L("terms-modal-content-body",a);const r=l("terms-modal"),s=l("terms-modal-content");r&&s&&(r.classList.contains("hidden")&&me("terms"),ge(r,s))};window.closeTermsModal=(e=!1)=>{const t=l("terms-modal"),a=l("terms-modal-content");t&&a&&J("terms",e,()=>{xe(t,a)})};window.openPrivacyModal=()=>{const e=`
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
    `,t=u?.store?.privacy,a=t?t.includes("<")?t:`<div class="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-800/40 leading-relaxed text-xs sm:text-sm text-slate-600 dark:text-slate-300 whitespace-pre-line">${t}</div>`:e;L("privacy-modal-content-body",a);const r=l("privacy-modal"),s=l("privacy-modal-content");r&&s&&(r.classList.contains("hidden")&&me("privacy"),ge(r,s))};window.closePrivacyModal=(e=!1)=>{const t=l("privacy-modal"),a=l("privacy-modal-content");t&&a&&J("privacy",e,()=>{xe(t,a)})};window.closeQuickMenuModal=(e=!1)=>{const t=l("quickmenu-modal"),a=l("quickmenu-modal-content");t&&a&&J("quickmenu",e,()=>{xe(t,a)})};window.openShoppingGuideModal=()=>{const e=l("shopping-guide-modal"),t=l("shopping-guide-modal-content");e&&t&&(e.classList.contains("hidden")&&me("guide"),ge(e,t))};window.closeShoppingGuideModal=(e=!1)=>{const t=l("shopping-guide-modal"),a=l("shopping-guide-modal-content");t&&a&&J("guide",e,()=>{xe(t,a)})};window.navigateFromQuickMenu=e=>{closeQuickMenuModal(!0);const t=Pe.indexOf("quickmenu");t>-1&&Pe.splice(t,1),typeof e=="function"?(history.replaceState({view:Wt},"",window.location.href),e()):(history.replaceState({view:e},"",window.location.href),zt(e,!0))};const Ut=e=>{const t=u.products?.find(s=>s&&s.id!=null&&String(s.id)===String(e.id));let a=e.price||0;if(e.variantName&&t&&t.variants){const s=t.variants.find(o=>o.name===e.variantName);s&&s.price!=null&&(a=s.price)}if(e.variantName||!t||!t.wholesale||!t.wholesale.length)return a;const r=E.filter(s=>s.id!=null&&String(s.id)===String(e.id)).reduce((s,o)=>s+(parseFloat(o.qty)||0),0);for(let s of t.wholesale.slice().sort((o,i)=>i.minQty-o.minQty))if(r>=parseFloat(s.minQty))return s.price;return a},br=e=>{const t=u.products?.find(a=>a&&a.id!=null&&String(a.id)===String(e.id));if(!t)return 0;if(e.variantName&&t.variants){const a=t.variants.find(r=>r.name===e.variantName);if(a&&a.hpp!=null)return parseFloat(a.hpp)||0}return parseFloat(t.hpp)||0},qt=e=>{if(!e)return 0;const t=u.products?.find(a=>a&&a.id!=null&&String(a.id)===String(e.id));if(!t)return parseFloat(e.poin)||0;if(e.variantName&&t.variants){const a=t.variants.find(r=>r.name===e.variantName);if(a&&a.poin!==void 0&&a.poin!==null&&a.poin!==""){const r=parseFloat(a.poin);if(!isNaN(r)&&r>0)return r}}return parseFloat(t.poin)||0},wr=(e,t,a,r)=>{if(!e||!t||!a||!r)return 0;const s=6371,o=(a-e)*Math.PI/180,i=(r-t)*Math.PI/180,n=Math.sin(o/2)*Math.sin(o/2)+Math.cos(e*Math.PI/180)*Math.cos(a*Math.PI/180)*Math.sin(i/2)*Math.sin(i/2),d=2*Math.atan2(Math.sqrt(n),Math.sqrt(1-n));return s*d},Gt=e=>{if(!e||typeof e!="string")return null;let t=e.trim();try{t=decodeURIComponent(t)}catch{}const a=t.match(/@(-?\d{1,3}\.\d+)[,\s]+(-?\d{1,3}\.\d+)/);if(a){const i=parseFloat(a[1]),n=parseFloat(a[2]);if(!isNaN(i)&&!isNaN(n)&&Math.abs(i)<=90&&Math.abs(n)<=180)return{lat:a[1],lng:a[2]}}const r=t.match(/[?&](?:q|ll|query|loc|center)=(-?\d{1,3}\.\d+)[,\s]+(-?\d{1,3}\.\d+)/i);if(r){const i=parseFloat(r[1]),n=parseFloat(r[2]);if(!isNaN(i)&&!isNaN(n)&&Math.abs(i)<=90&&Math.abs(n)<=180)return{lat:r[1],lng:r[2]}}const s=t.match(/(\d+)[°\s]+(\d+)['\s]+([\d.]+)"?\s*([NSns])[,\s]+(\d+)[°\s]+(\d+)['\s]+([\d.]+)"?\s*([EWew])/);if(s){let i=parseInt(s[1],10)+parseInt(s[2],10)/60+parseFloat(s[3])/3600;s[4].toUpperCase()==="S"&&(i=-i);let n=parseInt(s[5],10)+parseInt(s[6],10)/60+parseFloat(s[7])/3600;return s[8].toUpperCase()==="W"&&(n=-n),{lat:i.toFixed(8),lng:n.toFixed(8)}}const o=t.match(/(-?\d{1,3}\.\d{3,20})[,\s;\t]+(-?\d{1,3}\.\d{3,20})/);if(o){const i=parseFloat(o[1]),n=parseFloat(o[2]);if(!isNaN(i)&&!isNaN(n)&&Math.abs(i)<=90&&Math.abs(n)<=180)return{lat:o[1],lng:o[2]}}return null},gr=e=>{const t=(typeof e=="string"?e:e?.value||"").trim(),a=Gt(t);return a?(K("set-lat",a.lat),K("set-lng",a.lng),f("Koordinat GPS berhasil disalin!"),a):(f("Format tidak dikenali! Tempel koordinat: Lat, Lng atau link Google Maps"),null)},xr=(e=E,t=u.store)=>{if(!e||!e.length)return{totalPoints:0,directPoints:0,spendPoints:0,nonPointSpend:0,threshold:1e5,pointsPerThreshold:1,isSpendPointsActive:!1,remainingToNextPoint:0,progressPercent:0};let a=0,r=0;e.forEach(x=>{const w=qt(x),y=parseFloat(x.qty)||0;if(w>0)a+=w*y;else{const P=Ut(x);r+=P*y}});let s=0,o=0,i=0;const n=t?t.spendPointsEnabled===!0||t.spendPointsEnabled==="true":!1,d=Math.max(1,parseFloat(t?.spendPointsThreshold)||1e5),c=Math.max(1,parseFloat(t?.spendPointsPerThreshold)||1);if(n&&r>0){const x=Math.floor(r/d);s=x*c;const w=r%d;o=w>0?d-w:d,i=Math.min(100,Math.round((w||(x>0?d:0))/d*100))}return{totalPoints:a+s,directPoints:a,spendPoints:s,nonPointSpend:r,threshold:d,pointsPerThreshold:c,isSpendPointsActive:n,remainingToNextPoint:o,progressPercent:i}};window.getEffP=Ut;window.getEffHpp=br;window.getEffPoin=qt;window.calculateCartPoints=xr;window.getDist=wr;window.parseGeoCoordinates=Gt;window.autoParseCoords=gr;let et=null,Fe=null;const hr=async e=>{try{if(navigator.clipboard&&navigator.clipboard.writeText)await navigator.clipboard.writeText(e);else{const t=document.createElement("textarea");t.value=e,t.style.position="fixed",t.style.opacity="0",document.body.appendChild(t),t.select(),document.execCommand("copy"),document.body.removeChild(t)}Le("Kode "+e+" berhasil disalin!")}catch{Le("Gagal menyalin. Kode: "+e)}},Le=(e,t,a,r)=>{const s=l("toast");if(!s)return;if(!t){const F=e.toLowerCase();/berhasil|sukses|selamat|✅|🎉|aktif|dikirim|disimpan|diupload|disalin|dipulihkan|login berhasil|restock|terhapus|diunduh|diperbarui/.test(F)?t="success":/gagal|error|tolak|❌|tidak valid|tidak ditemukan|tidak cukup|salah|ditolak|quota|koneksi|putus|izin|wajib/.test(F)?t="error":/tunggu|maks|hati|stok|coba|⚠️|pastikan/.test(F)?t="warning":/upload|proses|memuat|loading|sedang/.test(F)?t="loading":t="info"}const o=getComputedStyle(document.documentElement),i=o.getPropertyValue("--color-primary-rgb").trim()||"16,185,129",n=o.getPropertyValue("--color-primary").trim()||"#10b981";o.getPropertyValue("--color-primary-dark").trim();const d={success:{icon:"fa-circle-check",label:"Berhasil",accent:n,iconBg:`rgba(${i},0.12)`,border:`rgba(${i},0.35)`},error:{icon:"fa-circle-xmark",label:"Gagal",accent:"#ef4444",iconBg:"rgba(239,68,68,0.12)",border:"rgba(239,68,68,0.35)"},warning:{icon:"fa-triangle-exclamation",label:"Perhatian",accent:"#f59e0b",iconBg:"rgba(245,158,11,0.12)",border:"rgba(245,158,11,0.35)"},loading:{icon:"fa-spinner fa-spin",label:"Memproses",accent:n,iconBg:`rgba(${i},0.12)`,border:`rgba(${i},0.35)`},info:{icon:"fa-circle-info",label:"Informasi",accent:n,iconBg:`rgba(${i},0.12)`,border:`rgba(${i},0.35)`}},c=d[t]||d.info,x=l("toast-icon");x&&(x.className="fa-solid "+c.icon);const w=l("toast-title");w&&(w.textContent=a||c.label,w.style.display="block",w.style.color=c.accent);const y=l("toast-icon-wrap");y&&(y.style.background=c.iconBg,y.style.color=c.accent),_("toast-message",e.replace(/^[✅❌⚠️🎉🔔]\s*/,""));let P=l("toast-progress");P||(P=document.createElement("div"),P.id="toast-progress",s.appendChild(P)),P.style.background=c.accent,P.style.transition="none",P.style.width="100%",P.style.opacity="0.85",clearTimeout(et),s.classList.add("toast-show");const G=r||(t==="loading"?8e3:t==="error"?4500:3e3);requestAnimationFrame(()=>requestAnimationFrame(()=>{P.style.transition=`width ${G}ms linear`,P.style.width="0%"})),et=setTimeout(()=>{s.classList.remove("toast-show")},G)},vr=e=>Le(e,"loading","Memproses...",8e3),yr=()=>{clearTimeout(et);const e=l("toast");e&&e.classList.remove("toast-show")},kr=()=>{const e=document.documentElement.classList.toggle("dark");localStorage.setItem("freshmart_theme",e?"dark":"light");const t=document.getElementById("icon-theme")||document.getElementById("theme-toggle-icon");t&&(t.className=e?"fa-solid fa-sun text-sm text-amber-400":"fa-solid fa-moon text-sm text-slate-600 dark:text-slate-300")},Pr=(e,t,a,r="Ya, Hapus",s=!0)=>{let o=e,i=t,n=a,d=r,c=s;typeof t=="function"&&(n=t,i=e,o=typeof r=="string"&&r!=="Ya, Hapus"?r:"Konfirmasi Tindakan",d=typeof a=="string"?a:"Ya, Lanjutkan",c=!0),_("confirm-title",o),_("confirm-msg",i);const x=l("confirm-yes-btn");x&&(x.innerText=d,c?(x.className="flex-1 py-3.5 bg-rose-600 text-white font-bold rounded-xl hover:bg-rose-700 active:scale-95 transition-all text-sm shadow-md shadow-rose-500/30 cursor-pointer",l("confirm-icon-box").className="w-16 h-16 bg-rose-50 dark:bg-rose-900/30 text-rose-500 dark:text-rose-400 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-5 border border-rose-200 dark:border-rose-800",l("confirm-icon").className="fa-solid fa-triangle-exclamation"):(x.className="flex-1 py-3.5 bg-[var(--color-primary)] text-white font-bold rounded-xl hover:opacity-90 active:scale-95 transition-all text-sm shadow-sm cursor-pointer",l("confirm-icon-box").className="w-16 h-16 bg-[rgba(var(--color-primary-rgb),0.08)] dark:bg-[rgba(var(--color-primary-rgb),0.15)] text-[var(--color-primary)] rounded-2xl flex items-center justify-center text-3xl mx-auto mb-5 border border-[var(--color-primary)]/20",l("confirm-icon").className="fa-solid fa-copy")),Fe=n;const w=l("custom-confirm-modal");w&&w.classList.contains("hidden")&&me("confirm"),q("custom-confirm-modal"),setTimeout(()=>{l("custom-confirm-modal").classList.remove("opacity-0"),l("custom-confirm-box").classList.remove("scale-95")},10)},Kt=(e=!1)=>{J("confirm",e,()=>{l("custom-confirm-modal").classList.add("opacity-0"),l("custom-confirm-box").classList.add("scale-95"),setTimeout(()=>T("custom-confirm-modal"),300)})},Mr=()=>{if(Fe){const e=Fe;Fe=null,Kt(),setTimeout(()=>{e()},150)}},Tr=(e,t,a)=>{let r=document.createElement("div");r.className="fixed inset-0 z-[9999] bg-slate-900/80 flex items-center justify-center p-4 opacity-0 transition-opacity duration-300",r.innerHTML=`
        <div class="bg-white dark:bg-slate-800 rounded-3xl w-full max-w-[320px] p-6 shadow-2xl border border-slate-200 dark:border-slate-700 relative transform scale-95 transition-all duration-300 flex flex-col text-center">
            <h3 class="font-bold text-slate-900 dark:text-white text-lg mb-4">${e}</h3>
            <input type="text" id="prompt-input" value="${t}" class="w-full px-4 py-3.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-700 dark:text-slate-300 mb-6 focus:ring-2 focus:ring-[var(--color-primary)] outline-none text-center font-bold text-xl tracking-wider" autocomplete="off" />
            <div class="flex gap-3">
                <button id="prompt-cancel" class="flex-1 py-3.5 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 font-bold rounded-xl hover:bg-slate-200 dark:hover:bg-slate-600 active:scale-95 transition-all text-sm">Batal</button>
                <button id="prompt-ok" class="flex-1 py-3.5 bg-[var(--color-primary)] text-white font-bold rounded-xl hover:opacity-90 active:scale-95 transition-all text-sm shadow-md">Simpan</button>
            </div>
        </div>
    `,document.body.appendChild(r);const s=r.querySelector("div");me("prompt"),setTimeout(()=>{r.classList.remove("opacity-0"),s.classList.remove("scale-95")},10);const o=r.querySelector("#prompt-input");o.focus(),o.select(),window.closePrompt=(i=!1)=>{!r||!r.parentNode||J("prompt",i,()=>{r.classList.add("opacity-0"),s.classList.add("scale-95"),setTimeout(()=>r.remove(),300),window.closePrompt=null})},r.querySelector("#prompt-cancel").onclick=()=>window.closePrompt(),r.querySelector("#prompt-ok").onclick=()=>{let i=o.value;window.closePrompt(),a(i)}},Ar=()=>{typeof window.openReceiptPreview=="function"&&window.openReceiptPreview()};window.copyVoucher=hr;window.showToast=Le;window.showToastLoading=vr;window.hideToast=yr;window.toggleTheme=kr;window.showConfirm=Pr;window.closeConfirm=Kt;window.executeConfirm=Mr;window.customPrompt=Tr;window.checkProPrint=Ar;typeof history<"u"&&"scrollRestoration"in history&&(history.scrollRestoration="manual");window.scrollTo(0,0);document.documentElement&&(document.documentElement.scrollTop=0);document.body&&(document.body.scrollTop=0);Jt();window.firebase=_e;window.db=$;window.DOMPurify=Vt;window.ensureScriptLoaded=pa;if(typeof window<"u"){const e=window.print?window.print.bind(window):null;window.print=function(){window.AndroidNativeApp&&typeof window.AndroidNativeApp.print=="function"?window.AndroidNativeApp.print():e&&e()}}window.uiPalettes=Zt;window.hexToRgb=Yt;window.applyUITheme=ht;window.toggleTheme=Xt;window.applyBackgroundStyle=vt;ea();const Sr=localStorage.getItem("freshmart_ui_theme")||"emerald";ht(Sr,localStorage.getItem("freshmart_theme_color"));const gt=()=>{da();const e=localStorage.getItem("freshmart_bg_style")||"minimalist",t=localStorage.getItem("freshmart_bg_custom_url")||"";vt(e,t),ca()};document.readyState==="loading"?document.addEventListener("DOMContentLoaded",gt):gt();window.onerror=function(e,t,a,r,s){return console.error("Global Error Caught:",e,"at",a,":",r),typeof showToast=="function"&&showToast("Ops, ada kendala sistem."),!1};window.addEventListener("unhandledrejection",function(e){console.warn("Promise Rejection Sentinel:",e.reason)});window.updateSEO=ma;window.injectJSONLD=ua;window.rewardStatusLabel=at;window.getYouTubeId=fa;window.parseVideoUrl=ba;window.fixDriveVideo=wa;window.fixDriveVideoPreview=ga;let xt=je;window.calcTaxDetails=e=>{const t=u?.store||{},a=t.ppnEnabled===!0||t.ppnEnabled==="true",r=parseFloat(t.ppnRate)||11,s=t.ppnType||"exclusive";if(!a||e<=0)return{ppnEnabled:!1,ppnRate:0,ppnType:s,ppnAmount:0,dppAmount:Math.max(0,e),grandTotalAdd:0};if(s==="inclusive"){const o=Math.round(e*100/(100+r)),i=e-o;return{ppnEnabled:!0,ppnRate:r,ppnType:"inclusive",ppnAmount:i,dppAmount:o,grandTotalAdd:0}}else{const o=Math.round(e*r/100);return{ppnEnabled:!0,ppnRate:r,ppnType:"exclusive",ppnAmount:o,dppAmount:Math.max(0,e),grandTotalAdd:o}}};typeof requestIdleCallback<"u"?requestIdleCallback(pt,{timeout:5e3}):setTimeout(pt,3e3);window.updateProBadge=()=>{};window.isAdm=!1;window.isPro=!0;history.replaceState({view:"view-catalog"},"","");window.addEventListener("DOMContentLoaded",async()=>{await ta();try{aa()}catch(e){console.warn("[syncAppMeta] Error:",e)}sa(),ra(),mt(),window.attachRewardsRealtime=mt,He.onAuthStateChanged(async e=>{if(!oa()){if(e&&e.uid!==yt){await He.signOut();return}if(e){if(!await ia()){console.log("[Auth] Sesi admin lokal sudah tidak aktif (diambil alih perangkat lain)."),ut(),localStorage.removeItem("freshmart_admin_session_id"),window.isAdm=!1,window.__localIsAdm=!1,window.isPro=!1,window.updateProBadge&&window.updateProBadge(),await He.signOut();return}na(),window.isAdm=!0,window.isPro=!0,localStorage.removeItem("isFreshmartPro"),localStorage.removeItem("freshmart_license_code"),window.updateProBadge&&window.updateProBadge();let a=document.getElementById("view-admin-login");a&&!a.classList.contains("hidden")&&(history.replaceState({view:"view-admin"},"",window.location.href),changeView("view-admin",!0),openAdminMenu(),showToast("Sesi Dipulihkan! Selamat Datang."))}else ut(),localStorage.removeItem("freshmart_admin_session_id"),window.isAdm=!1,window.__localIsAdm=!1,window.isPro=!1,window.updateProBadge&&window.updateProBadge(),localStorage.removeItem("isFreshmartPro"),localStorage.removeItem("freshmart_license_code")}})});window.el=l;window.show=q;window.hide=T;window.toggleCls=z;window.setIn=_;window.setH=L;window.setV=K;window.getV=N;window.esc=m;window.fixD=Ne;window.fCur=D;window.sL=Qe;window.ssL=Ee;window.defaultFbC=kt;window.fbC=kt;window.defApp=xa;window.ADMIN_UID=yt;window.sLoad=W;window.hLoad=I;window.sanitizeCart=la;const k=(e,t,a)=>{try{Object.defineProperty(window,e,{get:t,set:a,configurable:!0})}catch{}};k("GAS_UPLOAD_URL",()=>xt,e=>{xt=e});k("confirmCb",()=>ha,e=>{ds(e)});k("appData",()=>u,e=>{va(e)});k("cart",()=>E,e=>{Pt(e)});k("wishlist",()=>ka,e=>{ya(e)});k("myOrders",()=>j,e=>{Be(e)});k("cust",()=>b,e=>{Mt(e)});k("currentMember",()=>V,e=>{Q(e)});k("selectedReward",()=>re,e=>{se(e)});k("memberCheckTimer",()=>Pa,e=>{cs(e)});k("aCat",()=>ze,e=>{At(e)});k("aBrand",()=>We,e=>{St(e)});k("sQ",()=>Ta,e=>{Ma(e)});k("cSort",()=>Sa,e=>{Aa(e)});k("cView",()=>$a,e=>{Da(e)});k("cPage",()=>Ca,e=>{st(e)});k("iPP",()=>Ea,e=>{Ra(e)});k("cTab",()=>Ia,e=>{ps(e)});k("aSq",()=>Fa,e=>{ms(e)});k("eId",()=>_a,e=>{us(e)});k("cProd",()=>Ba,e=>{La(e)});k("cVar",()=>ja,e=>{Na(e)});k("tVars",()=>Oa,e=>{fs(e)});k("tWhol",()=>Ua,e=>{bs(e)});k("tSpec",()=>qa,e=>{ws(e)});k("cQty",()=>Ka,e=>{Ga(e)});k("oMods",()=>Pe,e=>{Ha(e)});k("aOrdLst",()=>Qa,e=>{Va(e)});k("aCustLst",()=>za,e=>{Wa(e)});k("aRevLst",()=>Za,e=>{Ja(e)});k("gOrds",()=>Xa,e=>{Ya(e)});k("gReviews",()=>ts,e=>{es(e)});k("cVOrd",()=>ss,e=>{as(e)});k("vouch",()=>v,e=>{H(e)});k("toastT",()=>rs,e=>{gs(e)});k("isSaving",()=>tt,e=>{ae(e)});k("reviewFilterMode",()=>is,e=>{os(e)});k("lastReportPeriod",()=>ls,e=>{ns(e)});
