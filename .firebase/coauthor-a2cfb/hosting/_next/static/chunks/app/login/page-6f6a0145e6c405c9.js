(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[626],{3137:function(e,n,o){Promise.resolve().then(o.bind(o,5749))},5749:function(e,n,o){"use strict";o.r(n);var t=o(7437),i=o(2749),r=o(1063),s=o.n(r),a=o(4033);n.default=()=>{let{status:e}=(0,i.useSession)(),n=(0,a.useRouter)();return"loading"===e?(0,t.jsx)("div",{className:s().loading,children:"Loading..."}):("authenticated"===e&&n.push("/"),(0,t.jsx)("div",{className:s().container,children:(0,t.jsxs)("div",{className:s().wrapper,children:[(0,t.jsx)("div",{className:s().socialButton,onClick:()=>(0,i.signIn)("google"),children:"Sign in with Google"}),(0,t.jsx)("div",{className:s().socialButton,children:"Sign in with Github"}),(0,t.jsx)("div",{className:s().socialButton,children:"Sign in with Facebook"})]})}))}},1063:function(e){e.exports={container:"loginPage_container__pYXxy",wrapper:"loginPage_wrapper__5joug",socialButton:"loginPage_socialButton__Vw90a"}},622:function(e,n,o){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var t=o(2265),i=Symbol.for("react.element"),r=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,a=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,n,o){var t,r={},l=null,u=null;for(t in void 0!==o&&(l=""+o),void 0!==n.key&&(l=""+n.key),void 0!==n.ref&&(u=n.ref),n)s.call(n,t)&&!c.hasOwnProperty(t)&&(r[t]=n[t]);if(e&&e.defaultProps)for(t in n=e.defaultProps)void 0===r[t]&&(r[t]=n[t]);return{$$typeof:i,type:e,key:l,ref:u,props:r,_owner:a.current}}n.Fragment=r,n.jsx=l,n.jsxs=l},7437:function(e,n,o){"use strict";e.exports=o(622)},4033:function(e,n,o){e.exports=o(8165)}},function(e){e.O(0,[749,971,596,744],function(){return e(e.s=3137)}),_N_E=e.O()}]);