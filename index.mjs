// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";function r(e){if(e.__esModule)return e;var r=Object.defineProperty({},"__esModule",{value:!0});return Object.keys(e).forEach((function(t){var n=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(r,t,n.get?n:{enumerable:!0,get:function(){return e[t]}})})),r}var t=r(Object.freeze({__proto__:null,default:{}})),n=t.readFile;var o=function(){var e,r;for(e=[],r=0;r<arguments.length;r++)e.push(arguments[r]);n.apply(null,e)},u=t.readFileSync;var a=o,l=function(e,r){var t;try{t=arguments.length>1?u(e,r):u(e)}catch(e){return e}return t};e(a,"sync",l);var c=a;export{c as default,l as sync};
//# sourceMappingURL=index.mjs.map
