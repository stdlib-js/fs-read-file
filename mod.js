// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function e(e){if(e.__esModule)return e;var r=Object.defineProperty({},"__esModule",{value:!0});return Object.keys(e).forEach((function(t){var n=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(r,t,n.get?n:{enumerable:!0,get:function(){return e[t]}})})),r}var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var t=function(){try{return r({},"x",{}),!0}catch(e){return!1}},n=Object.defineProperty,o=Object.prototype,a=o.toString,l=o.__defineGetter__,u=o.__defineSetter__,c=o.__lookupGetter__,i=o.__lookupSetter__;var _=n,f=function(e,r,t){var n,_,f,p;if("object"!=typeof e||null===e||"[object Array]"===a.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof t||null===t||"[object Array]"===a.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((_="value"in t)&&(c.call(e,r)||i.call(e,r)?(n=e.__proto__,e.__proto__=o,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),f="get"in t,p="set"in t,_&&(f||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return f&&l&&l.call(e,r,t.get),p&&u&&u.call(e,r,t.set),e},p=t()?_:f;var b=function(e,r,t){p(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})},y=e(Object.freeze({__proto__:null,default:{}})),v=y.readFile;var d=function(){var e,r;for(e=[],r=0;r<arguments.length;r++)e.push(arguments[r]);v.apply(null,e)},s=y.readFileSync;var j=d,g=function(e,r){var t;try{t=arguments.length>1?s(e,r):s(e)}catch(e){return e}return t};b(j,"sync",g);var h=j;export{h as default,g as sync};
//# sourceMappingURL=mod.js.map
