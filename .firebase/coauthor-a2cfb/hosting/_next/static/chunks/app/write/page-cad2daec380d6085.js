(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[79],{8034:function(e,t,r){Promise.resolve().then(r.bind(r,3878))},8864:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return a}});let n=r(1024);r(2265);let s=n._(r(533));function i(e){return{default:(null==e?void 0:e.default)||e}}function a(e,t){let r=s.default,n={loading:e=>{let{error:t,isLoading:r,pastDelay:n}=e;return null}};"function"==typeof e&&(n.loader=e),Object.assign(n,t);let a=n.loader;return r({...n,loader:()=>null!=a?a().then(i):Promise.resolve(i(()=>null))})}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1295:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return h},unstable_getImgProps:function(){return l}});let n=r(1024),s=r(2301),i=r(7873),a=r(3222),o=n._(r(5033)),l=e=>{(0,i.warnOnce)("Warning: unstable_getImgProps() is experimental and may change or be removed at any time. Use at your own risk.");let{props:t}=(0,s.getImgProps)(e,{defaultLoader:o.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[e,r]of Object.entries(t))void 0===r&&delete t[e];return{props:t}},h=a.Image},3699:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{suspense:function(){return s},NoSSR:function(){return i}}),r(1024),r(2265);let n=r(7669);function s(){let e=Error(n.NEXT_DYNAMIC_NO_SSR_CODE);throw e.digest=n.NEXT_DYNAMIC_NO_SSR_CODE,e}function i(e){let{children:t}=e;return t}},533:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return a}});let n=r(1024),s=n._(r(2265)),i=r(3699),a=function(e){let t=Object.assign({loader:null,loading:null,ssr:!0},e);function r(e){let r=t.loading,n=s.default.createElement(r,{isLoading:!0,pastDelay:!0,error:null}),a=t.ssr?s.default.Fragment:i.NoSSR,o=t.lazy;return s.default.createElement(s.default.Suspense,{fallback:n},s.default.createElement(a,null,s.default.createElement(o,e)))}return t.lazy=s.default.lazy(t.loader),r.displayName="LoadableComponent",r}},3878:function(e,t,r){"use strict";let n,s;r.r(t),r.d(t,{default:function(){return tB}});var i,a,o,l,h,c,u,d=r(7437),p=r(8864),f=r.n(p),_=r(6691),g=r.n(_),m=r(6242),b=r.n(m),v=r(2265);r(4659);var E=r(4033),w=r(2749),y=r(2601);/**
 * @license
 * Copyright 2017 Google LLC
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
 */let T=function(e){let t=[],r=0;for(let n=0;n<e.length;n++){let s=e.charCodeAt(n);s<128?t[r++]=s:(s<2048?t[r++]=s>>6|192:((64512&s)==55296&&n+1<e.length&&(64512&e.charCodeAt(n+1))==56320?(s=65536+((1023&s)<<10)+(1023&e.charCodeAt(++n)),t[r++]=s>>18|240,t[r++]=s>>12&63|128):t[r++]=s>>12|224,t[r++]=s>>6&63|128),t[r++]=63&s|128)}return t},C=function(e){let t=[],r=0,n=0;for(;r<e.length;){let s=e[r++];if(s<128)t[n++]=String.fromCharCode(s);else if(s>191&&s<224){let i=e[r++];t[n++]=String.fromCharCode((31&s)<<6|63&i)}else if(s>239&&s<365){let i=e[r++],a=e[r++],o=e[r++],l=((7&s)<<18|(63&i)<<12|(63&a)<<6|63&o)-65536;t[n++]=String.fromCharCode(55296+(l>>10)),t[n++]=String.fromCharCode(56320+(1023&l))}else{let i=e[r++],a=e[r++];t[n++]=String.fromCharCode((15&s)<<12|(63&i)<<6|63&a)}}return t.join("")},I={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();let r=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let t=0;t<e.length;t+=3){let s=e[t],i=t+1<e.length,a=i?e[t+1]:0,o=t+2<e.length,l=o?e[t+2]:0,h=s>>2,c=(3&s)<<4|a>>4,u=(15&a)<<2|l>>6,d=63&l;o||(d=64,i||(u=64)),n.push(r[h],r[c],r[u],r[d])}return n.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(T(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):C(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();let r=t?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let t=0;t<e.length;){let s=r[e.charAt(t++)],i=t<e.length,a=i?r[e.charAt(t)]:0;++t;let o=t<e.length,l=o?r[e.charAt(t)]:64;++t;let h=t<e.length,c=h?r[e.charAt(t)]:64;if(++t,null==s||null==a||null==l||null==c)throw new S;let u=s<<2|a>>4;if(n.push(u),64!==l){let e=a<<4&240|l>>2;if(n.push(e),64!==c){let e=l<<6&192|c;n.push(e)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class S extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}let R=function(e){let t=T(e);return I.encodeByteArray(t,!0)},O=function(e){return R(e).replace(/\./g,"")},A=function(e){try{return I.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null},D=()=>/**
 * @license
 * Copyright 2022 Google LLC
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
 */(function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==r.g)return r.g;throw Error("Unable to locate global object.")})().__FIREBASE_DEFAULTS__,N=()=>{if(void 0===y||void 0===y.env)return;let e=y.env.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},k=()=>{let e;if("undefined"==typeof document)return;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){return}let t=e&&A(e[1]);return t&&JSON.parse(t)},U=()=>{try{return D()||N()||k()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},P=e=>{var t,r;return null===(r=null===(t=U())||void 0===t?void 0:t.emulatorHosts)||void 0===r?void 0:r[e]},x=e=>{let t=P(e);if(!t)return;let r=t.lastIndexOf(":");if(r<=0||r+1===t.length)throw Error(`Invalid host ${t} with no separate hostname and port!`);let n=parseInt(t.substring(r+1),10);return"["===t[0]?[t.substring(1,r-1),n]:[t.substring(0,r),n]},L=()=>{var e;return null===(e=U())||void 0===e?void 0:e.config};/**
 * @license
 * Copyright 2017 Google LLC
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
 */class B{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),"function"==typeof e&&(this.promise.catch(()=>{}),1===e.length?e(t):e(t,r))}}}class M extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name="FirebaseError",Object.setPrototypeOf(this,M.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,j.prototype.create)}}class j{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){let r=t[0]||{},n=`${this.service}/${e}`,s=this.errors[e],i=s?s.replace(F,(e,t)=>{let n=r[t];return null!=n?String(n):`<${t}?>`}):"Error",a=`${this.serviceName}: ${i} (${n}).`,o=new M(n,a,r);return o}}let F=/\{\$([^}]+)}/g;function H(e,t){if(e===t)return!0;let r=Object.keys(e),n=Object.keys(t);for(let s of r){if(!n.includes(s))return!1;let r=e[s],i=t[s];if(z(r)&&z(i)){if(!H(r,i))return!1}else if(r!==i)return!1}for(let e of n)if(!r.includes(e))return!1;return!0}function z(e){return null!==e&&"object"==typeof e}/**
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
 */function $(e){return e&&e._delegate?e._delegate:e}class V{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */let W="[DEFAULT]";/**
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
 */class q{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){let t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){let e=new B;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{let r=this.getOrInitializeService({instanceIdentifier:t});r&&e.resolve(r)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;let r=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),n=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(e){if(n)return null;throw e}else{if(n)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if("EAGER"===e.instantiationMode)try{this.getOrInitializeService({instanceIdentifier:W})}catch(e){}for(let[e,t]of this.instancesDeferred.entries()){let r=this.normalizeInstanceIdentifier(e);try{let e=this.getOrInitializeService({instanceIdentifier:r});t.resolve(e)}catch(e){}}}}clearInstance(e=W){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){let e=Array.from(this.instances.values());await Promise.all([...e.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...e.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return null!=this.component}isInitialized(e=W){return this.instances.has(e)}getOptions(e=W){return this.instancesOptions.get(e)||{}}initialize(e={}){let{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);let n=this.getOrInitializeService({instanceIdentifier:r,options:t});for(let[e,t]of this.instancesDeferred.entries()){let s=this.normalizeInstanceIdentifier(e);r===s&&t.resolve(n)}return n}onInit(e,t){var r;let n=this.normalizeInstanceIdentifier(t),s=null!==(r=this.onInitCallbacks.get(n))&&void 0!==r?r:new Set;s.add(e),this.onInitCallbacks.set(n,s);let i=this.instances.get(n);return i&&e(i,n),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){let r=this.onInitCallbacks.get(t);if(r)for(let n of r)try{n(e,t)}catch(e){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:e===W?void 0:e,options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch(e){}return r||null}normalizeInstanceIdentifier(e=W){return this.component?this.component.multipleInstances?e:W:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}/**
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
 */class G{constructor(e){this.name=e,this.providers=new Map}addComponent(e){let t=this.getProvider(e.name);if(t.isComponentSet())throw Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){let t=this.getProvider(e.name);t.isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);let t=new q(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */let X=[];(a=h||(h={}))[a.DEBUG=0]="DEBUG",a[a.VERBOSE=1]="VERBOSE",a[a.INFO=2]="INFO",a[a.WARN=3]="WARN",a[a.ERROR=4]="ERROR",a[a.SILENT=5]="SILENT";let K={debug:h.DEBUG,verbose:h.VERBOSE,info:h.INFO,warn:h.WARN,error:h.ERROR,silent:h.SILENT},J=h.INFO,Z={[h.DEBUG]:"log",[h.VERBOSE]:"log",[h.INFO]:"info",[h.WARN]:"warn",[h.ERROR]:"error"},Y=(e,t,...r)=>{if(t<e.logLevel)return;let n=new Date().toISOString(),s=Z[t];if(s)console[s](`[${n}]  ${e.name}:`,...r);else throw Error(`Attempted to log a message with an invalid logType (value: ${t})`)},Q=(e,t)=>t.some(t=>e instanceof t),ee=new WeakMap,et=new WeakMap,er=new WeakMap,en=new WeakMap,es=new WeakMap,ei={get(e,t,r){if(e instanceof IDBTransaction){if("done"===t)return et.get(e);if("objectStoreNames"===t)return e.objectStoreNames||er.get(e);if("store"===t)return r.objectStoreNames[1]?void 0:r.objectStore(r.objectStoreNames[0])}return ea(e[t])},set:(e,t,r)=>(e[t]=r,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function ea(e){var t;if(e instanceof IDBRequest)return function(e){let t=new Promise((t,r)=>{let n=()=>{e.removeEventListener("success",s),e.removeEventListener("error",i)},s=()=>{t(ea(e.result)),n()},i=()=>{r(e.error),n()};e.addEventListener("success",s),e.addEventListener("error",i)});return t.then(t=>{t instanceof IDBCursor&&ee.set(t,e)}).catch(()=>{}),es.set(t,e),t}(e);if(en.has(e))return en.get(e);let r="function"==typeof(t=e)?t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(s||(s=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(t)?function(...e){return t.apply(eo(this),e),ea(ee.get(this))}:function(...e){return ea(t.apply(eo(this),e))}:function(e,...r){let n=t.call(eo(this),e,...r);return er.set(n,e.sort?e.sort():[e]),ea(n)}:(t instanceof IDBTransaction&&function(e){if(et.has(e))return;let t=new Promise((t,r)=>{let n=()=>{e.removeEventListener("complete",s),e.removeEventListener("error",i),e.removeEventListener("abort",i)},s=()=>{t(),n()},i=()=>{r(e.error||new DOMException("AbortError","AbortError")),n()};e.addEventListener("complete",s),e.addEventListener("error",i),e.addEventListener("abort",i)});et.set(e,t)}(t),Q(t,n||(n=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])))?new Proxy(t,ei):t;return r!==e&&(en.set(e,r),es.set(r,e)),r}let eo=e=>es.get(e),el=["get","getKey","getAll","getAllKeys","count"],eh=["put","add","delete","clear"],ec=new Map;function eu(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&"string"==typeof t))return;if(ec.get(t))return ec.get(t);let r=t.replace(/FromIndex$/,""),n=t!==r,s=eh.includes(r);if(!(r in(n?IDBIndex:IDBObjectStore).prototype)||!(s||el.includes(r)))return;let i=async function(e,...t){let i=this.transaction(e,s?"readwrite":"readonly"),a=i.store;return n&&(a=a.index(t.shift())),(await Promise.all([a[r](...t),s&&i.done]))[0]};return ec.set(t,i),i}ei={...i=ei,get:(e,t,r)=>eu(e,t)||i.get(e,t,r),has:(e,t)=>!!eu(e,t)||i.has(e,t)};/**
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
 */class ed{constructor(e){this.container=e}getPlatformInfoString(){let e=this.container.getProviders();return e.map(e=>{if(!function(e){let t=e.getComponent();return(null==t?void 0:t.type)==="VERSION"}(e))return null;{let t=e.getImmediate();return`${t.library}/${t.version}`}}).filter(e=>e).join(" ")}}let ep="@firebase/app",ef="0.10.5",e_=new class{constructor(e){this.name=e,this._logLevel=J,this._logHandler=Y,this._userLogHandler=null,X.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in h))throw TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?K[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,h.DEBUG,...e),this._logHandler(this,h.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,h.VERBOSE,...e),this._logHandler(this,h.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,h.INFO,...e),this._logHandler(this,h.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,h.WARN,...e),this._logHandler(this,h.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,h.ERROR,...e),this._logHandler(this,h.ERROR,...e)}}("@firebase/app"),eg="[DEFAULT]",em={[ep]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","@firebase/vertexai-preview":"fire-vertex","fire-js":"fire-js",firebase:"fire-js-all"},eb=new Map,ev=new Map,eE=new Map;function ew(e,t){try{e.container.addComponent(t)}catch(r){e_.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,r)}}function ey(e){let t=e.name;if(eE.has(t))return e_.debug(`There were multiple attempts to register component ${t}.`),!1;for(let r of(eE.set(t,e),eb.values()))ew(r,e);for(let t of ev.values())ew(t,e);return!0}let eT=new j("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."});/**
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
 */class eC{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new V("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw eT.create("app-deleted",{appName:this._name})}}function eI(e,t={}){let r=e;if("object"!=typeof t){let e=t;t={name:e}}let n=Object.assign({name:eg,automaticDataCollectionEnabled:!1},t),s=n.name;if("string"!=typeof s||!s)throw eT.create("bad-app-name",{appName:String(s)});if(r||(r=L()),!r)throw eT.create("no-options");let i=eb.get(s);if(i){if(H(r,i.options)&&H(n,i.config))return i;throw eT.create("duplicate-app",{appName:s})}let a=new G(s);for(let e of eE.values())a.addComponent(e);let o=new eC(r,n,a);return eb.set(s,o),o}function eS(e,t,r){var n;let s=null!==(n=em[e])&&void 0!==n?n:e;r&&(s+=`-${r}`);let i=s.match(/\s|\//),a=t.match(/\s|\//);if(i||a){let e=[`Unable to register library "${s}" with version "${t}":`];i&&e.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&a&&e.push("and"),a&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),e_.warn(e.join(" "));return}ey(new V(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}let eR="firebase-heartbeat-store",eO=null;function eA(){return eO||(eO=(function(e,t,{blocked:r,upgrade:n,blocking:s,terminated:i}={}){let a=indexedDB.open(e,1),o=ea(a);return n&&a.addEventListener("upgradeneeded",e=>{n(ea(a.result),e.oldVersion,e.newVersion,ea(a.transaction),e)}),r&&a.addEventListener("blocked",e=>r(e.oldVersion,e.newVersion,e)),o.then(e=>{i&&e.addEventListener("close",()=>i()),s&&e.addEventListener("versionchange",e=>s(e.oldVersion,e.newVersion,e))}).catch(()=>{}),o})("firebase-heartbeat-database",0,{upgrade:(e,t)=>{if(0===t)try{e.createObjectStore(eR)}catch(e){console.warn(e)}}}).catch(e=>{throw eT.create("idb-open",{originalErrorMessage:e.message})})),eO}async function eD(e){try{let t=await eA(),r=t.transaction(eR),n=await r.objectStore(eR).get(ek(e));return await r.done,n}catch(e){if(e instanceof M)e_.warn(e.message);else{let t=eT.create("idb-get",{originalErrorMessage:null==e?void 0:e.message});e_.warn(t.message)}}}async function eN(e,t){try{let r=await eA(),n=r.transaction(eR,"readwrite"),s=n.objectStore(eR);await s.put(t,ek(e)),await n.done}catch(e){if(e instanceof M)e_.warn(e.message);else{let t=eT.create("idb-set",{originalErrorMessage:null==e?void 0:e.message});e_.warn(t.message)}}}function ek(e){return`${e.name}!${e.options.appId}`}class eU{constructor(e){this.container=e,this._heartbeatsCache=null;let t=this.container.getProvider("app").getImmediate();this._storage=new ex(t),this._heartbeatsCachePromise=this._storage.read().then(e=>(this._heartbeatsCache=e,e))}async triggerHeartbeat(){var e,t;let r=this.container.getProvider("platform-logger").getImmediate(),n=r.getPlatformInfoString(),s=eP();return(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,(null===(t=this._heartbeatsCache)||void 0===t?void 0:t.heartbeats)==null)?void 0:this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(e=>e.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(e=>{let t=new Date(e.date).valueOf(),r=Date.now();return r-t<=2592e6}),this._storage.overwrite(this._heartbeatsCache))}async getHeartbeatsHeader(){var e;if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)==null||0===this._heartbeatsCache.heartbeats.length)return"";let t=eP(),{heartbeatsToSend:r,unsentEntries:n}=function(e,t=1024){let r=[],n=e.slice();for(let s of e){let e=r.find(e=>e.agent===s.agent);if(e){if(e.dates.push(s.date),eL(r)>t){e.dates.pop();break}}else if(r.push({agent:s.agent,dates:[s.date]}),eL(r)>t){r.pop();break}n=n.slice(1)}return{heartbeatsToSend:r,unsentEntries:n}}(this._heartbeatsCache.heartbeats),s=O(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function eP(){let e=new Date;return e.toISOString().substring(0,10)}class ex{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!function(){try{return"object"==typeof indexedDB}catch(e){return!1}}()&&new Promise((e,t)=>{try{let r=!0,n="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(n);s.onsuccess=()=>{s.result.close(),r||self.indexedDB.deleteDatabase(n),e(!0)},s.onupgradeneeded=()=>{r=!1},s.onerror=()=>{var e;t((null===(e=s.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}}).then(()=>!0).catch(()=>!1)}async read(){let e=await this._canUseIndexedDBPromise;if(!e)return{heartbeats:[]};{let e=await eD(this.app);return(null==e?void 0:e.heartbeats)?e:{heartbeats:[]}}}async overwrite(e){var t;let r=await this._canUseIndexedDBPromise;if(r){let r=await this.read();return eN(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;let r=await this._canUseIndexedDBPromise;if(r){let r=await this.read();return eN(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}}}function eL(e){return O(JSON.stringify({version:2,heartbeats:e})).length}ey(new V("platform-logger",e=>new ed(e),"PRIVATE")),ey(new V("heartbeat",e=>new eU(e),"PRIVATE")),eS(ep,ef,""),eS(ep,ef,"esm2017"),eS("fire-js","");/**
 * @license
 * Copyright 2017 Google LLC
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
 */let eB="firebasestorage.googleapis.com",eM="storageBucket";/**
 * @license
 * Copyright 2017 Google LLC
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
 */class ej extends M{constructor(e,t,r=0){super(eF(e),`Firebase Storage: ${t} (${eF(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,ej.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return eF(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}function eF(e){return"storage/"+e}function eH(){return new ej(c.UNKNOWN,"An unknown error occurred, please check the error payload for server response.")}function ez(){return new ej(c.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function e$(){return new ej(c.CANCELED,"User canceled the upload/download.")}function eV(){return new ej(c.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function eW(e){return new ej(c.INVALID_ARGUMENT,e)}function eq(){return new ej(c.APP_DELETED,"The Firebase app was deleted.")}function eG(e,t){return new ej(c.INVALID_FORMAT,"String does not match format '"+e+"': "+t)}function eX(e){throw new ej(c.INTERNAL_ERROR,"Internal error: "+e)}(o=c||(c={})).UNKNOWN="unknown",o.OBJECT_NOT_FOUND="object-not-found",o.BUCKET_NOT_FOUND="bucket-not-found",o.PROJECT_NOT_FOUND="project-not-found",o.QUOTA_EXCEEDED="quota-exceeded",o.UNAUTHENTICATED="unauthenticated",o.UNAUTHORIZED="unauthorized",o.UNAUTHORIZED_APP="unauthorized-app",o.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",o.INVALID_CHECKSUM="invalid-checksum",o.CANCELED="canceled",o.INVALID_EVENT_NAME="invalid-event-name",o.INVALID_URL="invalid-url",o.INVALID_DEFAULT_BUCKET="invalid-default-bucket",o.NO_DEFAULT_BUCKET="no-default-bucket",o.CANNOT_SLICE_BLOB="cannot-slice-blob",o.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",o.NO_DOWNLOAD_URL="no-download-url",o.INVALID_ARGUMENT="invalid-argument",o.INVALID_ARGUMENT_COUNT="invalid-argument-count",o.APP_DELETED="app-deleted",o.INVALID_ROOT_OPERATION="invalid-root-operation",o.INVALID_FORMAT="invalid-format",o.INTERNAL_ERROR="internal-error",o.UNSUPPORTED_ENVIRONMENT="unsupported-environment";/**
 * @license
 * Copyright 2017 Google LLC
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
 */class eK{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return 0===this.path.length}fullServerUrl(){let e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){let e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let r;try{r=eK.makeFromUrl(e,t)}catch(t){return new eK(e,"")}if(""===r.path)return r;throw new ej(c.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+e+"'.")}static makeFromUrl(e,t){let r=null,n="([A-Za-z0-9.\\-_]+)",s=RegExp("^gs://"+n+"(/(.*))?$","i");function i(e){e.path_=decodeURIComponent(e.path)}let a=t.replace(/[.]/g,"\\."),o=RegExp(`^https?://${a}/v[A-Za-z0-9_]+/b/${n}/o(/([^?#]*).*)?$`,"i"),l=RegExp(`^https?://${t===eB?"(?:storage.googleapis.com|storage.cloud.google.com)":t}/${n}/([^?#]*)`,"i"),h=[{regex:s,indices:{bucket:1,path:3},postModify:function(e){"/"===e.path.charAt(e.path.length-1)&&(e.path_=e.path_.slice(0,-1))}},{regex:o,indices:{bucket:1,path:3},postModify:i},{regex:l,indices:{bucket:1,path:2},postModify:i}];for(let t=0;t<h.length;t++){let n=h[t],s=n.regex.exec(e);if(s){let e=s[n.indices.bucket],t=s[n.indices.path];t||(t=""),r=new eK(e,t),n.postModify(r);break}}if(null==r)throw new ej(c.INVALID_URL,"Invalid URL '"+e+"'.");return r}}class eJ{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}function eZ(e){return"string"==typeof e||e instanceof String}function eY(e){return eQ()&&e instanceof Blob}function eQ(){return"undefined"!=typeof Blob}function e0(e,t,r,n){if(n<t)throw eW(`Invalid value for '${e}'. Expected ${t} or greater.`);if(n>r)throw eW(`Invalid value for '${e}'. Expected ${r} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
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
 */function e1(e,t,r){let n=t;return null==r&&(n=`https://${t}`),`${r}://${n}/v0${e}`}function e2(e){let t=encodeURIComponent,r="?";for(let n in e)if(e.hasOwnProperty(n)){let s=t(n)+"="+t(e[n]);r=r+s+"&"}return r.slice(0,-1)}/**
 * @license
 * Copyright 2022 Google LLC
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
 */function e6(e,t){let r=e>=500&&e<600,n=-1!==[408,429].indexOf(e),s=-1!==t.indexOf(e);return r||n||s}(l=u||(u={}))[l.NO_ERROR=0]="NO_ERROR",l[l.NETWORK_ERROR=1]="NETWORK_ERROR",l[l.ABORT=2]="ABORT";/**
 * @license
 * Copyright 2017 Google LLC
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
 */class e4{constructor(e,t,r,n,s,i,a,o,l,h,c,u=!0){this.url_=e,this.method_=t,this.headers_=r,this.body_=n,this.successCodes_=s,this.additionalRetryCodes_=i,this.callback_=a,this.errorCallback_=o,this.timeout_=l,this.progressCallback_=h,this.connectionFactory_=c,this.retry=u,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((e,t)=>{this.resolve_=e,this.reject_=t,this.start_()})}start_(){let e=(e,t)=>{let r=this.resolve_,n=this.reject_,s=t.connection;if(t.wasSuccessCode)try{let e=this.callback_(s,s.getResponse());void 0!==e?r(e):r()}catch(e){n(e)}else if(null!==s){let e=eH();e.serverResponse=s.getErrorText(),n(this.errorCallback_?this.errorCallback_(s,e):e)}else if(t.canceled){let e=this.appDelete_?eq():e$();n(e)}else{let e=ez();n(e)}};this.canceled_?e(!1,new e3(!1,null,!0)):this.backoffId_=/**
 * @license
 * Copyright 2017 Google LLC
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
 */function(e,t,r){let n=1,s=null,i=null,a=!1,o=0,l=!1;function h(...e){l||(l=!0,t.apply(null,e))}function c(t){s=setTimeout(()=>{s=null,e(d,2===o)},t)}function u(){i&&clearTimeout(i)}function d(e,...t){let r;if(l){u();return}if(e){u(),h.call(null,e,...t);return}let s=2===o||a;if(s){u(),h.call(null,e,...t);return}n<64&&(n*=2),1===o?(o=2,r=0):r=(n+Math.random())*1e3,c(r)}let p=!1;function f(e){!p&&(p=!0,u(),!l&&(null!==s?(e||(o=2),clearTimeout(s),c(0)):e||(o=1)))}return c(0),i=setTimeout(()=>{a=!0,f(!0)},r),f}((e,t)=>{if(t){e(!1,new e3(!1,null,!0));return}let r=this.connectionFactory_();this.pendingConnection_=r;let n=e=>{let t=e.loaded,r=e.lengthComputable?e.total:-1;null!==this.progressCallback_&&this.progressCallback_(t,r)};null!==this.progressCallback_&&r.addUploadProgressListener(n),r.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{null!==this.progressCallback_&&r.removeUploadProgressListener(n),this.pendingConnection_=null;let t=r.getErrorCode()===u.NO_ERROR,s=r.getStatus();if(!t||e6(s,this.additionalRetryCodes_)&&this.retry){let t=r.getErrorCode()===u.ABORT;e(!1,new e3(!1,null,t));return}let i=-1!==this.successCodes_.indexOf(s);e(!0,new e3(i,r))})},e,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,null!==this.backoffId_&&(0,this.backoffId_)(!1),null!==this.pendingConnection_&&this.pendingConnection_.abort()}}class e3{constructor(e,t,r){this.wasSuccessCode=e,this.connection=t,this.canceled=!!r}}function e5(...e){let t="undefined"!=typeof BlobBuilder?BlobBuilder:"undefined"!=typeof WebKitBlobBuilder?WebKitBlobBuilder:void 0;if(void 0!==t){let r=new t;for(let t=0;t<e.length;t++)r.append(e[t]);return r.getBlob()}if(eQ())return new Blob(e);throw new ej(c.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}/**
 * @license
 * Copyright 2017 Google LLC
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
 */let e8={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class e9{constructor(e,t){this.data=e,this.contentType=t||null}}function e7(e){let t=[];for(let r=0;r<e.length;r++){let n=e.charCodeAt(r);if(n<=127)t.push(n);else if(n<=2047)t.push(192|n>>6,128|63&n);else if((64512&n)==55296){let s=r<e.length-1&&(64512&e.charCodeAt(r+1))==56320;if(s){let s=n,i=e.charCodeAt(++r);n=65536|(1023&s)<<10|1023&i,t.push(240|n>>18,128|n>>12&63,128|n>>6&63,128|63&n)}else t.push(239,191,189)}else(64512&n)==56320?t.push(239,191,189):t.push(224|n>>12,128|n>>6&63,128|63&n)}return new Uint8Array(t)}function te(e,t){let r;switch(e){case e8.BASE64:{let r=-1!==t.indexOf("-"),n=-1!==t.indexOf("_");if(r||n)throw eG(e,"Invalid character '"+(r?"-":"_")+"' found: is it base64url encoded?");break}case e8.BASE64URL:{let r=-1!==t.indexOf("+"),n=-1!==t.indexOf("/");if(r||n)throw eG(e,"Invalid character '"+(r?"+":"/")+"' found: is it base64 encoded?");t=t.replace(/-/g,"+").replace(/_/g,"/")}}try{r=/**
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
 */function(e){if("undefined"==typeof atob)throw new ej(c.UNSUPPORTED_ENVIRONMENT,"base-64 is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.");return atob(e)}(t)}catch(t){if(t.message.includes("polyfill"))throw t;throw eG(e,"Invalid character found")}let n=new Uint8Array(r.length);for(let e=0;e<r.length;e++)n[e]=r.charCodeAt(e);return n}class tt{constructor(e){this.base64=!1,this.contentType=null;let t=e.match(/^data:([^,]+)?,/);if(null===t)throw eG(e8.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");let r=t[1]||null;null!=r&&(this.base64=function(e,t){let r=e.length>=t.length;return!!r&&e.substring(e.length-t.length)===t}(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class tr{constructor(e,t){let r=0,n="";eY(e)?(this.data_=e,r=e.size,n=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=n}size(){return this.size_}type(){return this.type_}slice(e,t){if(eY(this.data_)){let r=this.data_,n=r.webkitSlice?r.webkitSlice(e,t):r.mozSlice?r.mozSlice(e,t):r.slice?r.slice(e,t):null;return null===n?null:new tr(n)}{let r=new Uint8Array(this.data_.buffer,e,t-e);return new tr(r,!0)}}static getBlob(...e){if(eQ()){let t=e.map(e=>e instanceof tr?e.data_:e);return new tr(e5.apply(null,t))}{let t=e.map(e=>eZ(e)?function(e,t){switch(e){case e8.RAW:return new e9(e7(t));case e8.BASE64:case e8.BASE64URL:return new e9(te(e,t));case e8.DATA_URL:return new e9(function(e){let t=new tt(e);return t.base64?te(e8.BASE64,t.rest):function(e){let t;try{t=decodeURIComponent(e)}catch(e){throw eG(e8.DATA_URL,"Malformed data URL.")}return e7(t)}(t.rest)}(t),function(e){let t=new tt(e);return t.contentType}(t))}throw eH()}(e8.RAW,e).data:e.data_),r=0;t.forEach(e=>{r+=e.byteLength});let n=new Uint8Array(r),s=0;return t.forEach(e=>{for(let t=0;t<e.length;t++)n[s++]=e[t]}),new tr(n,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */function tn(e){var t;let r;try{r=JSON.parse(e)}catch(e){return null}return"object"!=typeof(t=r)||Array.isArray(t)?null:r}function ts(e){let t=e.lastIndexOf("/",e.length-2);return -1===t?e:e.slice(t+1)}/**
 * @license
 * Copyright 2017 Google LLC
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
 */function ti(e,t){return t}class ta{constructor(e,t,r,n){this.server=e,this.local=t||e,this.writable=!!r,this.xform=n||ti}}let to=null;function tl(){if(to)return to;let e=[];e.push(new ta("bucket")),e.push(new ta("generation")),e.push(new ta("metageneration")),e.push(new ta("name","fullPath",!0));let t=new ta("name");t.xform=function(e,t){return!eZ(t)||t.length<2?t:ts(t)},e.push(t);let r=new ta("size");return r.xform=function(e,t){return void 0!==t?Number(t):t},e.push(r),e.push(new ta("timeCreated")),e.push(new ta("updated")),e.push(new ta("md5Hash",null,!0)),e.push(new ta("cacheControl",null,!0)),e.push(new ta("contentDisposition",null,!0)),e.push(new ta("contentEncoding",null,!0)),e.push(new ta("contentLanguage",null,!0)),e.push(new ta("contentType",null,!0)),e.push(new ta("metadata","customMetadata",!0)),to=e}function th(e,t,r){let n=tn(t);return null===n?null:function(e,t,r){let n={};n.type="file";let s=r.length;for(let e=0;e<s;e++){let s=r[e];n[s.local]=s.xform(n,t[s.server])}return Object.defineProperty(n,"ref",{get:function(){let t=n.bucket,r=n.fullPath,s=new eK(t,r);return e._makeStorageReference(s)}}),n}(e,n,r)}function tc(e,t){let r={},n=t.length;for(let s=0;s<n;s++){let n=t[s];n.writable&&(r[n.server]=e[n.local])}return JSON.stringify(r)}class tu{constructor(e,t,r,n){this.url=e,this.method=t,this.handler=r,this.timeout=n,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */function td(e){if(!e)throw eH()}function tp(e,t){return function(r,n){let s=th(e,n,t);return td(null!==s),s}}function tf(e){return function(t,r){var n,s;let i;return 401===t.getStatus()?i=t.getErrorText().includes("Firebase App Check token is invalid")?new ej(c.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project."):new ej(c.UNAUTHENTICATED,"User is not authenticated, please authenticate using Firebase Authentication and try again."):402===t.getStatus()?(n=e.bucket,i=new ej(c.QUOTA_EXCEEDED,"Quota for bucket '"+n+"' exceeded, please view quota on https://firebase.google.com/pricing/.")):403===t.getStatus()?(s=e.path,i=new ej(c.UNAUTHORIZED,"User does not have permission to access '"+s+"'.")):i=r,i.status=t.getStatus(),i.serverResponse=r.serverResponse,i}}function t_(e){let t=tf(e);return function(r,n){let s=t(r,n);if(404===r.getStatus()){var i;i=e.path,s=new ej(c.OBJECT_NOT_FOUND,"Object '"+i+"' does not exist.")}return s.serverResponse=n.serverResponse,s}}function tg(e,t,r){let n=Object.assign({},r);return n.fullPath=e.path,n.size=t.size(),!n.contentType&&(n.contentType=t&&t.type()||"application/octet-stream"),n}class tm{constructor(e,t,r,n){this.current=e,this.total=t,this.finalized=!!r,this.metadata=n||null}}function tb(e,t){let r=null;try{r=e.getResponseHeader("X-Goog-Upload-Status")}catch(e){td(!1)}return td(!!r&&-1!==(t||["active"]).indexOf(r)),r}let tv={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function tE(e){switch(e){case"running":case"pausing":case"canceling":return tv.RUNNING;case"paused":return tv.PAUSED;case"success":return tv.SUCCESS;case"canceled":return tv.CANCELED;default:return tv.ERROR}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class tw{constructor(e,t,r){"function"==typeof e||null!=t||null!=r?(this.next=e,this.error=null!=t?t:void 0,this.complete=null!=r?r:void 0):(this.next=e.next,this.error=e.error,this.complete=e.complete)}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */function ty(e){return(...t)=>{Promise.resolve().then(()=>e(...t))}}class tT{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=u.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=u.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=u.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,t,r,n){if(this.sent_)throw eX("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(t,e,!0),void 0!==n)for(let e in n)n.hasOwnProperty(e)&&this.xhr_.setRequestHeader(e,n[e].toString());return void 0!==r?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw eX("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw eX("cannot .getStatus() before sending");try{return this.xhr_.status}catch(e){return -1}}getResponse(){if(!this.sent_)throw eX("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw eX("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){null!=this.xhr_.upload&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){null!=this.xhr_.upload&&this.xhr_.upload.removeEventListener("progress",e)}}class tC extends tT{initXhr(){this.xhr_.responseType="text"}}function tI(){return new tC}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class tS{constructor(e,t,r=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=e,this._blob=t,this._metadata=r,this._mappings=tl(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=e=>{if(this._request=void 0,this._chunkMultiplier=1,e._codeEquals(c.CANCELED))this._needToFetchStatus=!0,this.completeTransitions_();else{let t=this.isExponentialBackoffExpired();if(e6(e.status,[])){if(t)e=ez();else{this.sleepTime=Math.max(2*this.sleepTime,1e3),this._needToFetchStatus=!0,this.completeTransitions_();return}}this._error=e,this._transition("error")}},this._metadataErrorHandler=e=>{this._request=void 0,e._codeEquals(c.CANCELED)?this.completeTransitions_():(this._error=e,this._transition("error"))},this.sleepTime=0,this.maxSleepTime=this._ref.storage.maxUploadRetryTime,this._promise=new Promise((e,t)=>{this._resolve=e,this._reject=t,this._start()}),this._promise.then(null,()=>{})}isExponentialBackoffExpired(){return this.sleepTime>this.maxSleepTime}_makeProgressCallback(){let e=this._transferred;return t=>this._updateProgress(e+t)}_shouldDoResumable(e){return e.size()>262144}_start(){"running"===this._state&&void 0===this._request&&(this._resumable?void 0===this._uploadUrl?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this.pendingTimeout=setTimeout(()=>{this.pendingTimeout=void 0,this._continueUpload()},this.sleepTime):this._oneShotUpload())}_resolveToken(e){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([t,r])=>{switch(this._state){case"running":e(t,r);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused")}})}_createResumable(){this._resolveToken((e,t)=>{let r=function(e,t,r,n,s){let i=t.bucketOnlyServerUrl(),a=tg(t,n,s),o={name:a.fullPath},l=e1(i,e.host,e._protocol),h={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${n.size()}`,"X-Goog-Upload-Header-Content-Type":a.contentType,"Content-Type":"application/json; charset=utf-8"},c=tc(a,r),u=e.maxUploadRetryTime,d=new tu(l,"POST",function(e){let t;tb(e);try{t=e.getResponseHeader("X-Goog-Upload-URL")}catch(e){td(!1)}return td(eZ(t)),t},u);return d.urlParams=o,d.headers=h,d.body=c,d.errorHandler=tf(t),d}(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),n=this._ref.storage._makeRequest(r,tI,e,t);this._request=n,n.getPromise().then(e=>{this._request=void 0,this._uploadUrl=e,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){let e=this._uploadUrl;this._resolveToken((t,r)=>{let n=function(e,t,r,n){let s=e.maxUploadRetryTime,i=new tu(r,"POST",function(e){let t=tb(e,["active","final"]),r=null;try{r=e.getResponseHeader("X-Goog-Upload-Size-Received")}catch(e){td(!1)}r||td(!1);let s=Number(r);return td(!isNaN(s)),new tm(s,n.size(),"final"===t)},s);return i.headers={"X-Goog-Upload-Command":"query"},i.errorHandler=tf(t),i}(this._ref.storage,this._ref._location,e,this._blob),s=this._ref.storage._makeRequest(n,tI,t,r);this._request=s,s.getPromise().then(e=>{this._request=void 0,this._updateProgress(e.current),this._needToFetchStatus=!1,e.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){let e=262144*this._chunkMultiplier,t=new tm(this._transferred,this._blob.size()),r=this._uploadUrl;this._resolveToken((n,s)=>{let i;try{i=function(e,t,r,n,s,i,a,o){let l=new tm(0,0);if(a?(l.current=a.current,l.total=a.total):(l.current=0,l.total=n.size()),n.size()!==l.total)throw new ej(c.SERVER_FILE_WRONG_SIZE,"Server recorded incorrect upload file size, please retry the upload.");let h=l.total-l.current,u=h;s>0&&(u=Math.min(u,s));let d=l.current,p=d+u,f="";f=0===u?"finalize":h===u?"upload, finalize":"upload";let _={"X-Goog-Upload-Command":f,"X-Goog-Upload-Offset":`${l.current}`},g=n.slice(d,p);if(null===g)throw eV();let m=t.maxUploadRetryTime,b=new tu(r,"POST",function(e,r){let s;let a=tb(e,["active","final"]),o=l.current+u,h=n.size();return s="final"===a?tp(t,i)(e,r):null,new tm(o,h,"final"===a,s)},m);return b.headers=_,b.body=g.uploadData(),b.progressCallback=o||null,b.errorHandler=tf(e),b}(this._ref._location,this._ref.storage,r,this._blob,e,this._mappings,t,this._makeProgressCallback())}catch(e){this._error=e,this._transition("error");return}let a=this._ref.storage._makeRequest(i,tI,n,s,!1);this._request=a,a.getPromise().then(e=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(e.current),e.finalized?(this._metadata=e.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){let e=262144*this._chunkMultiplier;2*e<33554432&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((e,t)=>{let r=function(e,t,r){let n=t.fullServerUrl(),s=e1(n,e.host,e._protocol),i=e.maxOperationRetryTime,a=new tu(s,"GET",tp(e,r),i);return a.errorHandler=t_(t),a}(this._ref.storage,this._ref._location,this._mappings),n=this._ref.storage._makeRequest(r,tI,e,t);this._request=n,n.getPromise().then(e=>{this._request=void 0,this._metadata=e,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((e,t)=>{let r=function(e,t,r,n,s){let i=t.bucketOnlyServerUrl(),a={"X-Goog-Upload-Protocol":"multipart"},o=function(){let e="";for(let t=0;t<2;t++)e+=Math.random().toString().slice(2);return e}();a["Content-Type"]="multipart/related; boundary="+o;let l=tg(t,n,s),h=tc(l,r),c="--"+o+"\r\nContent-Type: application/json; charset=utf-8\r\n\r\n"+h+"\r\n--"+o+"\r\nContent-Type: "+l.contentType+"\r\n\r\n",u=tr.getBlob(c,n,"\r\n--"+o+"--");if(null===u)throw eV();let d={name:l.fullPath},p=e1(i,e.host,e._protocol),f=e.maxUploadRetryTime,_=new tu(p,"POST",tp(e,r),f);return _.urlParams=d,_.headers=a,_.body=u.uploadData(),_.errorHandler=tf(t),_}(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),n=this._ref.storage._makeRequest(r,tI,e,t);this._request=n,n.getPromise().then(e=>{this._request=void 0,this._metadata=e,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(e){let t=this._transferred;this._transferred=e,this._transferred!==t&&this._notifyObservers()}_transition(e){if(this._state!==e)switch(e){case"canceling":case"pausing":this._state=e,void 0!==this._request?this._request.cancel():this.pendingTimeout&&(clearTimeout(this.pendingTimeout),this.pendingTimeout=void 0,this.completeTransitions_());break;case"running":let t="paused"===this._state;this._state=e,t&&(this._notifyObservers(),this._start());break;case"paused":case"error":case"success":this._state=e,this._notifyObservers();break;case"canceled":this._error=e$(),this._state=e,this._notifyObservers()}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start()}}get snapshot(){let e=tE(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:e,metadata:this._metadata,task:this,ref:this._ref}}on(e,t,r,n){let s=new tw(t||void 0,r||void 0,n||void 0);return this._addObserver(s),()=>{this._removeObserver(s)}}then(e,t){return this._promise.then(e,t)}catch(e){return this.then(null,e)}_addObserver(e){this._observers.push(e),this._notifyObserver(e)}_removeObserver(e){let t=this._observers.indexOf(e);-1!==t&&this._observers.splice(t,1)}_notifyObservers(){this._finishPromise();let e=this._observers.slice();e.forEach(e=>{this._notifyObserver(e)})}_finishPromise(){if(void 0!==this._resolve){let e=!0;switch(tE(this._state)){case tv.SUCCESS:ty(this._resolve.bind(null,this.snapshot))();break;case tv.CANCELED:case tv.ERROR:let t=this._reject;ty(t.bind(null,this._error))();break;default:e=!1}e&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(e){let t=tE(this._state);switch(t){case tv.RUNNING:case tv.PAUSED:e.next&&ty(e.next.bind(e,this.snapshot))();break;case tv.SUCCESS:e.complete&&ty(e.complete.bind(e))();break;case tv.CANCELED:case tv.ERROR:default:e.error&&ty(e.error.bind(e,this._error))()}}resume(){let e="paused"===this._state||"pausing"===this._state;return e&&this._transition("running"),e}pause(){let e="running"===this._state;return e&&this._transition("pausing"),e}cancel(){let e="running"===this._state||"pausing"===this._state;return e&&this._transition("canceling"),e}}/**
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
 */class tR{constructor(e,t){this._service=e,t instanceof eK?this._location=t:this._location=eK.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new tR(e,t)}get root(){let e=new eK(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return ts(this._location.path)}get storage(){return this._service}get parent(){let e=/**
 * @license
 * Copyright 2017 Google LLC
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
 */function(e){if(0===e.length)return null;let t=e.lastIndexOf("/");if(-1===t)return"";let r=e.slice(0,t);return r}(this._location.path);if(null===e)return null;let t=new eK(this._location.bucket,e);return new tR(this._service,t)}_throwIfRoot(e){if(""===this._location.path)throw new ej(c.INVALID_ROOT_OPERATION,"The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}}function tO(e,t){let r=null==t?void 0:t[eM];return null==r?null:eK.makeFromBucketSpec(r,e)}class tA{constructor(e,t,r,n,s){this.app=e,this._authProvider=t,this._appCheckProvider=r,this._url=n,this._firebaseVersion=s,this._bucket=null,this._host=eB,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=12e4,this._maxUploadRetryTime=6e5,this._requests=new Set,null!=n?this._bucket=eK.makeFromBucketSpec(n,this._host):this._bucket=tO(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,null!=this._url?this._bucket=eK.makeFromBucketSpec(this._url,e):this._bucket=tO(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){e0("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){e0("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;let e=this._authProvider.getImmediate({optional:!0});if(e){let t=await e.getToken();if(null!==t)return t.accessToken}return null}async _getAppCheckToken(){let e=this._appCheckProvider.getImmediate({optional:!0});if(e){let t=await e.getToken();return t.token}return null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new tR(this,e)}_makeRequest(e,t,r,n,s=!0){if(this._deleted)return new eJ(eq());{let i=function(e,t,r,n,s,i,a=!0){let o=e2(e.urlParams),l=e.url+o,h=Object.assign({},e.headers);return t&&(h["X-Firebase-GMPID"]=t),null!==r&&r.length>0&&(h.Authorization="Firebase "+r),h["X-Firebase-Storage-Version"]="webjs/"+(null!=i?i:"AppManager"),null!==n&&(h["X-Firebase-AppCheck"]=n),new e4(l,e.method,h,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,s,a)}(e,this._appId,r,n,t,this._firebaseVersion,s);return this._requests.add(i),i.getPromise().then(()=>this._requests.delete(i),()=>this._requests.delete(i)),i}}async makeRequestWithTokens(e,t){let[r,n]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,r,n).getPromise()}}let tD="@firebase/storage",tN="0.12.5",tk="storage";ey(new V(tk,function(e,{instanceIdentifier:t}){let r=e.getProvider("app").getImmediate(),n=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return new tA(r,n,s,t,"10.12.2")},"PUBLIC").setMultipleInstances(!0)),eS(tD,tN,""),eS(tD,tN,"esm2017"),/**
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
 */eS("firebase","10.12.2","app");var tU=r(2601);let tP={apiKey:tU.env.FIREBASE,authDomain:"coauthor-a2cfb.firebaseapp.com",projectId:"coauthor-a2cfb",storageBucket:"coauthor-a2cfb.appspot.com",messagingSenderId:"892905354852",appId:"1:892905354852:web:f51177e97fb7f677151171"},tx=eI(tP),tL=f()(()=>Promise.all([r.e(70),r.e(889)]).then(r.t.bind(r,6233,23)),{loadableGenerated:{webpack:()=>[6233]},ssr:!1});var tB=()=>{let{status:e}=(0,w.useSession)(),t=(0,E.useRouter)(),[r,n]=(0,v.useState)(!1),[s,i]=(0,v.useState)(null),[a,o]=(0,v.useState)(""),[l,h]=(0,v.useState)(""),[u,p]=(0,v.useState)(""),[f,_]=(0,v.useState)("");if((0,v.useEffect)(()=>{let e=function(e=function(e=eg){let t=eb.get(e);if(!t&&e===eg&&L())return eI();if(!t)throw eT.create("no-app",{appName:e});return t}(),t){e=$(e);let r=function(e,t){let r=e.container.getProvider("heartbeat").getImmediate({optional:!0});return r&&r.triggerHeartbeat(),e.container.getProvider(t)}(e,tk),n=r.getImmediate({identifier:void 0}),s=x("storage");return s&&function(e,t,r,n={}){!function(e,t,r,n={}){e.host=`${t}:${r}`,e._protocol="http";let{mockUserToken:s}=n;s&&(e._overrideAuthToken="string"==typeof s?s:/**
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
 */function(e,t){if(e.uid)throw Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');let r=t||"demo-project",n=e.iat||0,s=e.sub||e.user_id;if(!s)throw Error("mockUserToken must contain 'sub' or 'user_id' field!");let i=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:n,exp:n+3600,auth_time:n,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},e);return[O(JSON.stringify({alg:"none",type:"JWT"})),O(JSON.stringify(i)),""].join(".")}(s,e.app.options.projectId))}(e,t,r,n)}(n,...s),n}(tx);s&&(()=>{var t,r,n;let i=new Date().getTime()+s.name,a=function(e,t){if(!(t&&/^[A-Za-z]+:\/\//.test(t)))return function e(t,r){if(t instanceof tA){if(null==t._bucket)throw new ej(c.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+eM+"' property when initializing the app?");let n=new tR(t,t._bucket);return null!=r?e(n,r):n}return void 0!==r?function(e,t){let r=function(e,t){let r=t.split("/").filter(e=>e.length>0).join("/");return 0===e.length?r:e+"/"+r}(e._location.path,t),n=new eK(e._location.bucket,r);return new tR(e.storage,n)}(t,r):t}(e,t);if(e instanceof tA)return new tR(e,t);throw eW("To use ref(service, url), the first argument must be a Storage instance.")}($(e),i),l=((n=$(a))._throwIfRoot("uploadBytesResumable"),new tS(n,new tr(s),void 0));l.on("state_changed",e=>{let t=e.bytesTransferred/e.totalBytes*100;switch(console.log("Upload is "+t+"% done"),e.state){case"paused":console.log("Upload is paused");break;case"running":console.log("Upload is running")}},e=>{},()=>{(function(e){e._throwIfRoot("getDownloadURL");let t=function(e,t,r){let n=t.fullServerUrl(),s=e1(n,e.host,e._protocol),i=e.maxOperationRetryTime,a=new tu(s,"GET",function(t,n){let s=th(e,n,r);return td(null!==s),function(e,t,r,n){let s=tn(t);if(null===s||!eZ(s.downloadTokens))return null;let i=s.downloadTokens;if(0===i.length)return null;let a=encodeURIComponent,o=i.split(","),l=o.map(t=>{let s=e.bucket,i=e.fullPath,o="/b/"+a(s)+"/o/"+a(i),l=e1(o,r,n),h=e2({alt:"media",token:t});return l+h});return l[0]}(s,n,e.host,e._protocol)},i);return a.errorHandler=t_(t),a}(e.storage,e._location,tl());return e.storage.makeRequestWithTokens(t,tI).then(e=>{if(null===e)throw new ej(c.NO_DOWNLOAD_URL,"The given file does not have any download URLs.");return e})})($(l.snapshot.ref)).then(e=>{o(e)})})})()},[s]),"loading"===e)return(0,d.jsx)("div",{className:b().loading,children:"Loading..."});"unauthenticated"===e&&t.push("/");let m=e=>e.toLowerCase().trim().replace(/[^\w\s-]/g,"").replace(/[\s_-]+/g,"-").replace(/^-+|-+$/g,""),y=async()=>{let e=await fetch("/api/posts",{method:"POST",body:JSON.stringify({title:u,desc:l,img:a,slug:m(u),catSlug:f||"style"})});if(200===e.status){let r=await e.json();t.push("/posts/".concat(r.slug))}};return(0,d.jsxs)("div",{className:b().container,children:[(0,d.jsx)("input",{type:"text",placeholder:"Title",className:b().input,onChange:e=>p(e.target.value)}),(0,d.jsxs)("select",{className:b().select,onChange:e=>_(e.target.value),children:[(0,d.jsx)("option",{value:"style",children:"style"}),(0,d.jsx)("option",{value:"fashion",children:"fashion"}),(0,d.jsx)("option",{value:"food",children:"food"}),(0,d.jsx)("option",{value:"culture",children:"culture"}),(0,d.jsx)("option",{value:"travel",children:"travel"}),(0,d.jsx)("option",{value:"coding",children:"coding"})]}),(0,d.jsxs)("div",{className:b().editor,children:[(0,d.jsx)("button",{className:b().button,onClick:()=>n(!r),children:(0,d.jsx)(g(),{src:"/plus.png",alt:"",width:16,height:16})}),r&&(0,d.jsxs)("div",{className:b().add,children:[(0,d.jsx)("input",{type:"file",id:"image",onChange:e=>i(e.target.files[0]),style:{display:"none"}}),(0,d.jsx)("button",{className:b().addButton,children:(0,d.jsx)("label",{htmlFor:"image",children:(0,d.jsx)(g(),{src:"/image.png",alt:"",width:16,height:16})})}),(0,d.jsx)("button",{className:b().addButton,children:(0,d.jsx)(g(),{src:"/external.png",alt:"",width:16,height:16})}),(0,d.jsx)("button",{className:b().addButton,children:(0,d.jsx)(g(),{src:"/video.png",alt:"",width:16,height:16})})]}),(0,d.jsx)(tL,{className:b().textArea,theme:"bubble",value:l,onChange:h,placeholder:"Tell your story..."})]}),(0,d.jsx)("button",{className:b().publish,onClick:y,children:"Publish"})]})}},4659:function(){},6242:function(e){e.exports={container:"writePage_container__gTzhl",select:"writePage_select__CsD_c",editor:"writePage_editor__enE2b",button:"writePage_button__z5cxj",addButton:"writePage_addButton__jAN0i",add:"writePage_add___trlL",input:"writePage_input__7dFmC",textArea:"writePage_textArea__BIjTe",publish:"writePage_publish__5h5zG"}},6691:function(e,t,r){e.exports=r(1295)},4033:function(e,t,r){e.exports=r(8165)}},function(e){e.O(0,[954,749,971,596,744],function(){return e(e.s=8034)}),_N_E=e.O()}]);