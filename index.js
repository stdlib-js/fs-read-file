// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(e){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,i=Object.defineProperty;function t(e){return"number"==typeof e}function a(e){var r,i="";for(r=0;r<e;r++)i+="0";return i}function n(e,r,i){var t=!1,n=r-e.length;return n<0||(function(e){return"-"===e[0]}(e)&&(t=!0,e=e.substr(1)),e=i?e+a(n):a(n)+e,t&&(e="-"+e)),e}var o=String.prototype.toLowerCase,s=String.prototype.toUpperCase;function c(e){var r,i,a;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(i=e.arg,a=parseInt(i,10),!isFinite(a)){if(!t(i))throw new Error("invalid integer. Value: "+i);a=0}return a<0&&("u"===e.specifier||10!==r)&&(a=4294967295+a+1),a<0?(i=(-a).toString(r),e.precision&&(i=n(i,e.precision,e.padRight)),i="-"+i):(i=a.toString(r),a||e.precision?e.precision&&(i=n(i,e.precision,e.padRight)):i="",e.sign&&(i=e.sign+i)),16===r&&(e.alternate&&(i="0x"+i),i=e.specifier===s.call(e.specifier)?s.call(i):o.call(i)),8===r&&e.alternate&&"0"!==i.charAt(0)&&(i="0"+i),i}var p=Math.abs,l=String.prototype.toLowerCase,u=String.prototype.toUpperCase,f=String.prototype.replace,g=/e\+(\d)$/,d=/e-(\d)$/,h=/^(\d+)$/,w=/^(\d+)e/,b=/\.0$/,v=/\.0*e/,y=/(\..*[^0])0*e/;function m(e){var r,i,a=parseFloat(e.arg);if(!isFinite(a)){if(!t(e.arg))throw new Error("invalid floating-point number. Value: "+i);a=e.arg}switch(e.specifier){case"e":case"E":i=a.toExponential(e.precision);break;case"f":case"F":i=a.toFixed(e.precision);break;case"g":case"G":p(a)<1e-4?((r=e.precision)>0&&(r-=1),i=a.toExponential(r)):i=a.toPrecision(e.precision),e.alternate||(i=f.call(i,y,"$1e"),i=f.call(i,v,"e"),i=f.call(i,b,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return i=f.call(i,g,"e+0$1"),i=f.call(i,d,"e-0$1"),e.alternate&&(i=f.call(i,h,"$1."),i=f.call(i,w,"$1.e")),a>=0&&e.sign&&(i=e.sign+i),i=e.specifier===u.call(e.specifier)?u.call(i):l.call(i)}function _(e){var r,i="";for(r=0;r<e;r++)i+=" ";return i}var x=String.fromCharCode,k=isNaN,E=Array.isArray;function S(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function F(e){var r,i,t,a,o,s,p,l,u,f,g,d,h;if(!E(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(s="",p=1,l=0;l<e.length;l++)if("string"==typeof(t=e[l]))s+=t;else{if(r=void 0!==t.precision,!(t=S(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+t+"`.");for(t.mapping&&(p=t.mapping),i=t.flags,u=0;u<i.length;u++)switch(a=i.charAt(u)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=i.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===t.width){if(t.width=parseInt(arguments[p],10),p+=1,k(t.width))throw new TypeError("the argument for * width at position "+p+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(r&&"*"===t.precision){if(t.precision=parseInt(arguments[p],10),p+=1,k(t.precision))throw new TypeError("the argument for * precision at position "+p+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,r=!1)}switch(t.arg=arguments[p],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(t.padZeros=!1),t.arg=c(t);break;case"s":t.maxWidth=r?t.precision:-1;break;case"c":if(!k(t.arg)){if((o=parseInt(t.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=k(o)?String(t.arg):x(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(t.precision=6),t.arg=m(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=n(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=(f=t.arg,g=t.width,d=t.padRight,h=void 0,(h=g-f.length)<0?f:f=d?f+_(h):_(h)+f)),s+=t.arg||"",p+=1}return s}var $=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function j(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function V(e){var r,i,t,a;for(i=[],a=0,t=$.exec(e);t;)(r=e.slice(a,$.lastIndex-t[0].length)).length&&i.push(r),i.push(j(t)),a=$.lastIndex,t=$.exec(e);return(r=e.slice(a)).length&&i.push(r),i}function T(e){var r,i;if("string"!=typeof e)throw new TypeError(T("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[V(e)],i=1;i<arguments.length;i++)r.push(arguments[i]);return F.apply(null,r)}var I,A=Object.prototype,C=A.toString,R=A.__defineGetter__,O=A.__defineSetter__,P=A.__lookupGetter__,Z=A.__lookupSetter__;I=function(){try{return r({},"x",{}),!0}catch(e){return!1}}()?i:function(e,r,i){var t,a,n,o;if("object"!=typeof e||null===e||"[object Array]"===C.call(e))throw new TypeError(T("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof i||null===i||"[object Array]"===C.call(i))throw new TypeError(T("invalid argument. Property descriptor must be an object. Value: `%s`.",i));if((a="value"in i)&&(P.call(e,r)||Z.call(e,r)?(t=e.__proto__,e.__proto__=A,delete e[r],e[r]=i.value,e.__proto__=t):e[r]=i.value),n="get"in i,o="set"in i,a&&(n||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return n&&R&&R.call(e,r,i.get),o&&O&&O.call(e,r,i.set),e};var G=I,W=e.readFile;function L(){var e,r;for(e=[],r=0;r<arguments.length;r++)e.push(arguments[r]);W.apply(null,e)}var q,N=e.readFileSync;return q=function(e,r){var i;try{i=arguments.length>1?N(e,r):N(e)}catch(e){return e}return i},G(L,"sync",{configurable:!1,enumerable:!1,writable:!1,value:q}),L},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r(require("fs")):"function"==typeof define&&define.amd?define(["fs"],r):(e="undefined"!=typeof globalThis?globalThis:e||self).readFile=r(e.require$$0);
//# sourceMappingURL=index.js.map
