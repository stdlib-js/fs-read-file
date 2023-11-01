"use strict";var t=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var i=t(function(q,n){
var y=require("fs").readFile;function d(){var e,r;for(e=[],r=0;r<arguments.length;r++)e.push(arguments[r]);y.apply(null,e)}n.exports=d
});var c=t(function(h,u){
var s=require("fs").readFileSync;function f(e,r){var a;try{arguments.length>1?a=s(e,r):a=s(e)}catch(v){return v}return a}u.exports=f
});var g=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),l=i(),o=c();g(l,"sync",o);module.exports=l;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
