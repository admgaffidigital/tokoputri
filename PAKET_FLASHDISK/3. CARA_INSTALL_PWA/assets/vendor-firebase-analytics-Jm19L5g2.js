import{r as S,_ as v,C as y,h as z,E as Y,o as Ce,F as J,L as Ee,g as T,j as X,e as Q,v as Z,k as N,l as ee,f as te}from"./vendor-firebase-core-D2OF5R23.js";const ne="@firebase/installations",$="0.6.9";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ie=1e4,ae=`w:${$}`,re="FIS_v2",Re="https://firebaseinstallations.googleapis.com/v1",Pe=60*60*1e3,ke="installations",Oe="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const De={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},I=new Y(ke,Oe,De);function se(e){return e instanceof J&&e.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oe({projectId:e}){return`${Re}/projects/${e}/installations`}function ce(e){return{token:e.token,requestStatus:2,expiresIn:$e(e.expiresIn),creationTime:Date.now()}}async function le(e,t){const i=(await t.json()).error;return I.create("request-failed",{requestName:e,serverCode:i.code,serverMessage:i.message,serverStatus:i.status})}function ue({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function Me(e,{refreshToken:t}){const n=ue(e);return n.append("Authorization",Fe(t)),n}async function de(e){const t=await e();return t.status>=500&&t.status<600?e():t}function $e(e){return Number(e.replace("s","000"))}function Fe(e){return`${re} ${e}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Le({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const i=oe(e),a=ue(e),r=t.getImmediate({optional:!0});if(r){const l=await r.getHeartbeatsHeader();l&&a.append("x-firebase-client",l)}const s={fid:n,authVersion:re,appId:e.appId,sdkVersion:ae},o={method:"POST",headers:a,body:JSON.stringify(s)},c=await de(()=>fetch(i,o));if(c.ok){const l=await c.json();return{fid:l.fid||n,registrationStatus:2,refreshToken:l.refreshToken,authToken:ce(l.authToken)}}else throw await le("Create Installation",c)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fe(e){return new Promise(t=>{setTimeout(t,e)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function je(e){return btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xe=/^[cdef][\w-]{21}$/,O="";function Ne(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const n=Ue(e);return xe.test(n)?n:O}catch{return O}}function Ue(e){return je(e).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E(e){return`${e.appName}!${e.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pe=new Map;function ge(e,t){const n=E(e);he(n,t),qe(n,t)}function he(e,t){const n=pe.get(e);if(n)for(const i of n)i(t)}function qe(e,t){const n=Ve();n&&n.postMessage({key:e,fid:t}),Be()}let m=null;function Ve(){return!m&&"BroadcastChannel"in self&&(m=new BroadcastChannel("[Firebase] FID Change"),m.onmessage=e=>{he(e.data.key,e.data.fid)}),m}function Be(){pe.size===0&&m&&(m.close(),m=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ge="firebase-installations-database",He=1,w="firebase-installations-store";let P=null;function F(){return P||(P=Ce(Ge,He,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(w)}}})),P}async function C(e,t){const n=E(e),a=(await F()).transaction(w,"readwrite"),r=a.objectStore(w),s=await r.get(n);return await r.put(t,n),await a.done,(!s||s.fid!==t.fid)&&ge(e,t.fid),t}async function me(e){const t=E(e),i=(await F()).transaction(w,"readwrite");await i.objectStore(w).delete(t),await i.done}async function R(e,t){const n=E(e),a=(await F()).transaction(w,"readwrite"),r=a.objectStore(w),s=await r.get(n),o=t(s);return o===void 0?await r.delete(n):await r.put(o,n),await a.done,o&&(!s||s.fid!==o.fid)&&ge(e,o.fid),o}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function L(e){let t;const n=await R(e.appConfig,i=>{const a=We(i),r=Ke(e,a);return t=r.registrationPromise,r.installationEntry});return n.fid===O?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function We(e){const t=e||{fid:Ne(),registrationStatus:0};return Ie(t)}function Ke(e,t){if(t.registrationStatus===0){if(!navigator.onLine){const a=Promise.reject(I.create("app-offline"));return{installationEntry:t,registrationPromise:a}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},i=ze(e,n);return{installationEntry:n,registrationPromise:i}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:Ye(e)}:{installationEntry:t}}async function ze(e,t){try{const n=await Le(e,t);return C(e.appConfig,n)}catch(n){throw se(n)&&n.customData.serverCode===409?await me(e.appConfig):await C(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function Ye(e){let t=await U(e.appConfig);for(;t.registrationStatus===1;)await fe(100),t=await U(e.appConfig);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:i}=await L(e);return i||n}return t}function U(e){return R(e,t=>{if(!t)throw I.create("installation-not-found");return Ie(t)})}function Ie(e){return Je(e)?{fid:e.fid,registrationStatus:0}:e}function Je(e){return e.registrationStatus===1&&e.registrationTime+ie<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xe({appConfig:e,heartbeatServiceProvider:t},n){const i=Qe(e,n),a=Me(e,n),r=t.getImmediate({optional:!0});if(r){const l=await r.getHeartbeatsHeader();l&&a.append("x-firebase-client",l)}const s={installation:{sdkVersion:ae,appId:e.appId}},o={method:"POST",headers:a,body:JSON.stringify(s)},c=await de(()=>fetch(i,o));if(c.ok){const l=await c.json();return ce(l)}else throw await le("Generate Auth Token",c)}function Qe(e,{fid:t}){return`${oe(e)}/${t}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function j(e,t=!1){let n;const i=await R(e.appConfig,r=>{if(!we(r))throw I.create("not-registered");const s=r.authToken;if(!t&&tt(s))return r;if(s.requestStatus===1)return n=Ze(e,t),r;{if(!navigator.onLine)throw I.create("app-offline");const o=it(r);return n=et(e,o),o}});return n?await n:i.authToken}async function Ze(e,t){let n=await q(e.appConfig);for(;n.authToken.requestStatus===1;)await fe(100),n=await q(e.appConfig);const i=n.authToken;return i.requestStatus===0?j(e,t):i}function q(e){return R(e,t=>{if(!we(t))throw I.create("not-registered");const n=t.authToken;return at(n)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function et(e,t){try{const n=await Xe(e,t),i=Object.assign(Object.assign({},t),{authToken:n});return await C(e.appConfig,i),n}catch(n){if(se(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await me(e.appConfig);else{const i=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await C(e.appConfig,i)}throw n}}function we(e){return e!==void 0&&e.registrationStatus===2}function tt(e){return e.requestStatus===2&&!nt(e)}function nt(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+Pe}function it(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}function at(e){return e.requestStatus===1&&e.requestTime+ie<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rt(e){const t=e,{installationEntry:n,registrationPromise:i}=await L(t);return i?i.catch(console.error):j(t).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function st(e,t=!1){const n=e;return await ot(n),(await j(n,t)).token}async function ot(e){const{registrationPromise:t}=await L(e);t&&await t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ct(e){if(!e||!e.options)throw k("App Configuration");if(!e.name)throw k("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw k(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function k(e){return I.create("missing-app-config-values",{valueName:e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ye="installations",lt="installations-internal",ut=e=>{const t=e.getProvider("app").getImmediate(),n=ct(t),i=z(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:i,_delete:()=>Promise.resolve()}},dt=e=>{const t=e.getProvider("app").getImmediate(),n=z(t,ye).getImmediate();return{getId:()=>rt(n),getToken:a=>st(n,a)}};function ft(){v(new y(ye,ut,"PUBLIC")),v(new y(lt,dt,"PRIVATE"))}ft();S(ne,$);S(ne,$,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V="analytics",pt="firebase_id",gt="origin",ht=60*1e3,mt="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",x="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u=new Ee("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const It={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},d=new Y("analytics","Analytics",It);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wt(e){if(!e.startsWith(x)){const t=d.create("invalid-gtag-resource",{gtagURL:e});return u.warn(t.message),""}return e}function Te(e){return Promise.all(e.map(t=>t.catch(n=>n)))}function yt(e,t){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(e,t)),n}function Tt(e,t){const n=yt("firebase-js-sdk-policy",{createScriptURL:wt}),i=document.createElement("script"),a=`${x}?l=${e}&id=${t}`;i.src=n?n?.createScriptURL(a):a,i.async=!0,document.head.appendChild(i)}function bt(e){let t=[];return Array.isArray(window[e])?t=window[e]:window[e]=t,t}async function _t(e,t,n,i,a,r){const s=i[a];try{if(s)await t[s];else{const c=(await Te(n)).find(l=>l.measurementId===a);c&&await t[c.appId]}}catch(o){u.error(o)}e("config",a,r)}async function At(e,t,n,i,a){try{let r=[];if(a&&a.send_to){let s=a.send_to;Array.isArray(s)||(s=[s]);const o=await Te(n);for(const c of s){const l=o.find(h=>h.measurementId===c),f=l&&t[l.appId];if(f)r.push(f);else{r=[];break}}}r.length===0&&(r=Object.values(t)),await Promise.all(r),e("event",i,a||{})}catch(r){u.error(r)}}function St(e,t,n,i){async function a(r,...s){try{if(r==="event"){const[o,c]=s;await At(e,t,n,o,c)}else if(r==="config"){const[o,c]=s;await _t(e,t,n,i,o,c)}else if(r==="consent"){const[o,c]=s;e("consent",o,c)}else if(r==="get"){const[o,c,l]=s;e("get",o,c,l)}else if(r==="set"){const[o]=s;e("set",o)}else e(r,...s)}catch(o){u.error(o)}}return a}function vt(e,t,n,i,a){let r=function(...s){window[i].push(arguments)};return window[a]&&typeof window[a]=="function"&&(r=window[a]),window[a]=St(r,e,t,n),{gtagCore:r,wrappedGtag:window[a]}}function Ct(e){const t=window.document.getElementsByTagName("script");for(const n of Object.values(t))if(n.src&&n.src.includes(x)&&n.src.includes(e))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Et=30,Rt=1e3;class Pt{constructor(t={},n=Rt){this.throttleMetadata=t,this.intervalMillis=n}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,n){this.throttleMetadata[t]=n}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const be=new Pt;function kt(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function Ot(e){var t;const{appId:n,apiKey:i}=e,a={method:"GET",headers:kt(i)},r=mt.replace("{app-id}",n),s=await fetch(r,a);if(s.status!==200&&s.status!==304){let o="";try{const c=await s.json();!((t=c.error)===null||t===void 0)&&t.message&&(o=c.error.message)}catch{}throw d.create("config-fetch-failed",{httpStatus:s.status,responseMessage:o})}return s.json()}async function Dt(e,t=be,n){const{appId:i,apiKey:a,measurementId:r}=e.options;if(!i)throw d.create("no-app-id");if(!a){if(r)return{measurementId:r,appId:i};throw d.create("no-api-key")}const s=t.getThrottleMetadata(i)||{backoffCount:0,throttleEndTimeMillis:Date.now()},o=new Ft;return setTimeout(async()=>{o.abort()},ht),_e({appId:i,apiKey:a,measurementId:r},s,o,t)}async function _e(e,{throttleEndTimeMillis:t,backoffCount:n},i,a=be){var r;const{appId:s,measurementId:o}=e;try{await Mt(i,t)}catch(c){if(o)return u.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${c?.message}]`),{appId:s,measurementId:o};throw c}try{const c=await Ot(e);return a.deleteThrottleMetadata(s),c}catch(c){const l=c;if(!$t(l)){if(a.deleteThrottleMetadata(s),o)return u.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${l?.message}]`),{appId:s,measurementId:o};throw c}const f=Number((r=l?.customData)===null||r===void 0?void 0:r.httpStatus)===503?N(n,a.intervalMillis,Et):N(n,a.intervalMillis),h={throttleEndTimeMillis:Date.now()+f,backoffCount:n+1};return a.setThrottleMetadata(s,h),u.debug(`Calling attemptFetch again in ${f} millis`),_e(e,h,i,a)}}function Mt(e,t){return new Promise((n,i)=>{const a=Math.max(t-Date.now(),0),r=setTimeout(n,a);e.addEventListener(()=>{clearTimeout(r),i(d.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function $t(e){if(!(e instanceof J)||!e.customData)return!1;const t=Number(e.customData.httpStatus);return t===429||t===500||t===503||t===504}class Ft{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function Lt(e,t,n,i,a){if(a&&a.global){e("event",n,i);return}else{const r=await t,s=Object.assign(Object.assign({},i),{send_to:r});e("event",n,s)}}async function jt(e,t,n,i){if(i&&i.global)return e("set",{screen_name:n}),Promise.resolve();{const a=await t;e("config",a,{update:!0,screen_name:n})}}async function xt(e,t,n,i){if(i&&i.global)return e("set",{user_id:n}),Promise.resolve();{const a=await t;e("config",a,{update:!0,user_id:n})}}async function Nt(e,t,n,i){if(i&&i.global){const a={};for(const r of Object.keys(n))a[`user_properties.${r}`]=n[r];return e("set",a),Promise.resolve()}else{const a=await t;e("config",a,{update:!0,user_properties:n})}}async function Ut(e,t){const n=await e;window[`ga-disable-${n}`]=!t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qt(){if(Q())try{await Z()}catch(e){return u.warn(d.create("indexeddb-unavailable",{errorInfo:e?.toString()}).message),!1}else return u.warn(d.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function Vt(e,t,n,i,a,r,s){var o;const c=Dt(e);c.then(g=>{n[g.measurementId]=g.appId,e.options.measurementId&&g.measurementId!==e.options.measurementId&&u.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${g.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(g=>u.error(g)),t.push(c);const l=qt().then(g=>{if(g)return i.getId()}),[f,h]=await Promise.all([c,l]);Ct(r)||Tt(r,f.measurementId),a("js",new Date);const _=(o=s?.config)!==null&&o!==void 0?o:{};return _[gt]="firebase",_.update=!0,h!=null&&(_[pt]=h),a("config",f.measurementId,_),f.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Bt=class{constructor(t){this.app=t}_delete(){return delete p[this.app.options.appId],Promise.resolve()}},p={},B=[];const G={};let A="dataLayer",Ae="gtag",H,b,D=!1;function Gt(e){if(D)throw d.create("already-initialized");e.dataLayerName&&(A=e.dataLayerName),e.gtagName&&(Ae=e.gtagName)}function Ht(){const e=[];if(X()&&e.push("This is a browser extension environment."),ee()||e.push("Cookies are not available."),e.length>0){const t=e.map((i,a)=>`(${a+1}) ${i}`).join(" "),n=d.create("invalid-analytics-context",{errorInfo:t});u.warn(n.message)}}function Wt(e,t,n){Ht();const i=e.options.appId;if(!i)throw d.create("no-app-id");if(!e.options.apiKey)if(e.options.measurementId)u.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw d.create("no-api-key");if(p[i]!=null)throw d.create("already-exists",{id:i});if(!D){bt(A);const{wrappedGtag:r,gtagCore:s}=vt(p,B,G,A,Ae);b=r,H=s,D=!0}return p[i]=Vt(e,B,G,t,H,A,n),new Bt(e)}async function Kt(){if(X()||!ee()||!Q())return!1;try{return await Z()}catch{return!1}}function zt(e,t,n){e=T(e),jt(b,p[e.app.options.appId],t,n).catch(i=>u.error(i))}function Yt(e,t,n){e=T(e),xt(b,p[e.app.options.appId],t,n).catch(i=>u.error(i))}function Jt(e,t,n){e=T(e),Nt(b,p[e.app.options.appId],t,n).catch(i=>u.error(i))}function Xt(e,t){e=T(e),Ut(p[e.app.options.appId],t).catch(n=>u.error(n))}function Se(e,t,n,i){e=T(e),Lt(b,p[e.app.options.appId],t,n,i).catch(a=>u.error(a))}const W="@firebase/analytics",K="0.10.8";function Qt(){v(new y(V,(t,{options:n})=>{const i=t.getProvider("app").getImmediate(),a=t.getProvider("installations-internal").getImmediate();return Wt(i,a,n)},"PUBLIC")),v(new y("analytics-internal",e,"PRIVATE")),S(W,K),S(W,K,"esm2017");function e(t){try{const n=t.getProvider(V).getImmediate();return{logEvent:(i,a,r)=>Se(n,i,a,r)}}catch(n){throw d.create("interop-component-reg-failed",{reason:n})}}}Qt();const Zt="@firebase/analytics-compat",en="0.2.14";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ve{constructor(t,n){this.app=t,this._delegate=n}logEvent(t,n,i){Se(this._delegate,t,n,i)}setCurrentScreen(t,n){zt(this._delegate,t,n)}setUserId(t,n){Yt(this._delegate,t,n)}setUserProperties(t,n){Jt(this._delegate,t,n)}setAnalyticsCollectionEnabled(t){Xt(this._delegate,t)}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var M;(function(e){e.ADD_SHIPPING_INFO="add_shipping_info",e.ADD_PAYMENT_INFO="add_payment_info",e.ADD_TO_CART="add_to_cart",e.ADD_TO_WISHLIST="add_to_wishlist",e.BEGIN_CHECKOUT="begin_checkout",e.CHECKOUT_PROGRESS="checkout_progress",e.EXCEPTION="exception",e.GENERATE_LEAD="generate_lead",e.LOGIN="login",e.PAGE_VIEW="page_view",e.PURCHASE="purchase",e.REFUND="refund",e.REMOVE_FROM_CART="remove_from_cart",e.SCREEN_VIEW="screen_view",e.SEARCH="search",e.SELECT_CONTENT="select_content",e.SELECT_ITEM="select_item",e.SELECT_PROMOTION="select_promotion",e.SET_CHECKOUT_OPTION="set_checkout_option",e.SHARE="share",e.SIGN_UP="sign_up",e.TIMING_COMPLETE="timing_complete",e.VIEW_CART="view_cart",e.VIEW_ITEM="view_item",e.VIEW_ITEM_LIST="view_item_list",e.VIEW_PROMOTION="view_promotion",e.VIEW_SEARCH_RESULTS="view_search_results"})(M||(M={}));/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tn=e=>{const t=e.getProvider("app-compat").getImmediate(),n=e.getProvider("analytics").getImmediate();return new ve(t,n)};function nn(){const e={Analytics:ve,settings:Gt,isSupported:Kt,EventName:M};te.INTERNAL.registerComponent(new y("analytics-compat",tn,"PUBLIC").setServiceProps(e).setMultipleInstances(!0))}nn();te.registerVersion(Zt,en);
