(function(){/*

 Copyright 2017 Google Inc. All Rights Reserved.

 Licensed under the W3C SOFTWARE AND DOCUMENT NOTICE AND LICENSE.

  https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document
*/
var h="function"==typeof Object.create?Object.create:function(a){function b(){}b.prototype=a;return new b},m;if("function"==typeof Object.setPrototypeOf)m=Object.setPrototypeOf;else{var n;a:{var q={l:!0},t={};try{t.__proto__=q;n=t.l;break a}catch(a){}n=!1}m=n?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var u=m;
function w(a,b){a.prototype=h(b.prototype);a.prototype.constructor=a;if(u)u(a,b);else for(var f in b)if("prototype"!=f)if(Object.defineProperties){var e=Object.getOwnPropertyDescriptor(b,f);e&&Object.defineProperty(a,f,e)}else a[f]=b[f];a.D=b.prototype}var z="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,f){a!=Array.prototype&&a!=Object.prototype&&(a[b]=f.value)},A="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this;
function B(){B=function(){};A.Symbol||(A.Symbol=H)}var H=function(){var a=0;return function(b){return"jscomp_symbol_"+(b||"")+a++}}();function I(){B();var a=A.Symbol.iterator;a||(a=A.Symbol.iterator=A.Symbol("iterator"));"function"!=typeof Array.prototype[a]&&z(Array.prototype,a,{configurable:!0,writable:!0,value:function(){return J(this)}});I=function(){}}function J(a){var b=0;return K(function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}})}
function K(a){I();a={next:a};a[A.Symbol.iterator]=function(){return this};return a}function L(a){I();var b=a[Symbol.iterator];return b?b.call(a):J(a)}function N(a,b){return Object.prototype.hasOwnProperty.call(a,b)}function R(a,b){if(b){var f=A;a=a.split(".");for(var e=0;e<a.length-1;e++){var d=a[e];d in f||(f[d]={});f=f[d]}a=a[a.length-1];e=f[a];b=b(e);b!=e&&null!=b&&z(f,a,{configurable:!0,writable:!0,value:b})}}
R("WeakMap",function(a){function b(a){this.a=(k+=Math.random()+1).toString();if(a){B();I();a=L(a);for(var c;!(c=a.next()).done;)c=c.value,this.set(c[0],c[1])}}function f(a){N(a,d)||z(a,d,{value:{}})}function e(a){var c=Object[a];c&&(Object[a]=function(a){f(a);return c(a)})}if(function(){if(!a||!Object.seal)return!1;try{var b=Object.seal({}),c=Object.seal({}),g=new a([[b,2],[c,3]]);if(2!=g.get(b)||3!=g.get(c))return!1;g.delete(b);g.set(c,4);return!g.has(b)&&4==g.get(c)}catch(M){return!1}}())return a;
var d="$jscomp_hidden_"+Math.random();e("freeze");e("preventExtensions");e("seal");var k=0;b.prototype.set=function(a,c){f(a);if(!N(a,d))throw Error("WeakMap key fail: "+a);a[d][this.a]=c;return this};b.prototype.get=function(a){return N(a,d)?a[d][this.a]:void 0};b.prototype.has=function(a){return N(a,d)&&N(a[d],this.a)};b.prototype.delete=function(a){return N(a,d)&&N(a[d],this.a)?delete a[d][this.a]:!1};return b});
R("Map",function(a){function b(){var a={};return a.c=a.next=a.head=a}function f(a,b){var c=a.a;return K(function(){if(c){for(;c.head!=a.a;)c=c.c;for(;c.next!=c.head;)return c=c.next,{done:!1,value:b(c)};c=null}return{done:!0,value:void 0}})}function e(a,b){var c=b&&typeof b;"object"==c||"function"==c?k.has(b)?c=k.get(b):(c=""+ ++r,k.set(b,c)):c="p_"+b;var d=a.f[c];if(d&&N(a.f,c))for(a=0;a<d.length;a++){var g=d[a];if(b!==b&&g.key!==g.key||b===g.key)return{id:c,list:d,index:a,b:g}}return{id:c,list:d,
index:-1,b:void 0}}function d(a){this.f={};this.a=b();this.size=0;if(a){a=L(a);for(var c;!(c=a.next()).done;)c=c.value,this.set(c[0],c[1])}}if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var c=Object.seal({x:4}),b=new a(L([[c,"s"]]));if("s"!=b.get(c)||1!=b.size||b.get({x:4})||b.set({x:4},"t")!=b||2!=b.size)return!1;var d=b.entries(),f=d.next();if(f.done||f.value[0]!=c||"s"!=f.value[1])return!1;f=d.next();return f.done||4!=f.value[0].x||
"t"!=f.value[1]||!d.next().done?!1:!0}catch(v){return!1}}())return a;B();I();var k=new WeakMap;d.prototype.set=function(a,b){a=0===a?0:a;var c=e(this,a);c.list||(c.list=this.f[c.id]=[]);c.b?c.b.value=b:(c.b={next:this.a,c:this.a.c,head:this.a,key:a,value:b},c.list.push(c.b),this.a.c.next=c.b,this.a.c=c.b,this.size++);return this};d.prototype.delete=function(a){a=e(this,a);return a.b&&a.list?(a.list.splice(a.index,1),a.list.length||delete this.f[a.id],a.b.c.next=a.b.next,a.b.next.c=a.b.c,a.b.head=
null,this.size--,!0):!1};d.prototype.clear=function(){this.f={};this.a=this.a.c=b();this.size=0};d.prototype.has=function(a){return!!e(this,a).b};d.prototype.get=function(a){return(a=e(this,a).b)&&a.value};d.prototype.entries=function(){return f(this,function(a){return[a.key,a.value]})};d.prototype.keys=function(){return f(this,function(a){return a.key})};d.prototype.values=function(){return f(this,function(a){return a.value})};d.prototype.forEach=function(a,b){for(var c=this.entries(),d;!(d=c.next()).done;)d=
d.value,a.call(b,d[1],d[0],this)};d.prototype[Symbol.iterator]=d.prototype.entries;var r=0;return d});function S(){throw new TypeError("undefined conversion");}function T(){throw new TypeError("Illegal constructor");}
var U=function(){function a(a){return d.apply(this,arguments)||this}function b(a){return d.apply(this,arguments)||this}function f(a){return e.apply(this,arguments)||this}function e(a){return d.apply(this,arguments)||this}function d(a,b){if(a!==O)throw Error("cannot call the constructor");x(this,"policyName",{value:b,enumerable:!0})}function k(a){var b=C.get(a);void 0===b&&(b=v(null),C.set(a,b));return b}function r(a){var b=P(a);if(null==b||P(b)!==V)throw Error();b=L(D(b));for(var c=b.next();!c.done;c=
b.next())c=c.value,x(a,c,{value:a[c]});return a}function c(a,b){p(a.prototype);delete a.name;x(a,"name",{value:b})}function g(a){return function(b){return b instanceof a&&C.has(b)}}function M(a,b){function c(c,d){var f=b[d]||S,e=p(new c(O,a));c={};d=(c[d]=function(a){a=f(a);if(void 0===a||null===a)a="";a=""+a;var b=p(v(e));k(b).v=a;return b},c)[d];return p(d)}for(var d=v(T.prototype),f=L(D(y)),e=f.next();!e.done;e=f.next())e=e.value,d[e]=c(y[e],e);x(d,"name",{value:a,writable:!1,configurable:!1,enumerable:!0});
return p(d)}var l=Object,v=l.create,x=l.defineProperty,p=l.freeze,D=l.getOwnPropertyNames,P=l.getPrototypeOf,V=l.prototype;l=Array.prototype;var W=l.forEach,X=l.push;B();var O=Symbol(),C=r(new WeakMap),E=r([]),Q=r(new Map),F=r([]),G=!1;d.prototype.toString=function(){return k(this).v};d.prototype.valueOf=function(){return k(this).v};w(e,d);c(e,"TrustedURL");w(f,e);c(f,"TrustedScriptURL");w(b,d);c(b,"TrustedHTML");w(a,d);c(a,"TrustedScript");c(d,"TrustedType");var y={createHTML:b,createScriptURL:f,
createURL:e,createScript:a},Y=y.hasOwnProperty;return p({g:b,j:e,i:f,h:a,m:function(a,b,c){c=void 0===c?!1:c;if(G&&-1===F.indexOf(a))throw new TypeError("Policy "+a+" disallowed.");if(-1!==E.indexOf(a))throw new TypeError("Policy "+a+" exists.");E.push(a);var d=v(null);if(b&&"object"===typeof b)for(var f=L(D(b)),e=f.next();!e.done;e=f.next())e=e.value,Y.call(y,e)&&(d[e]=b[e]);else console.warn("TrustedTypes.createPolicy "+a+" was given an empty policy");p(d);b=M(a,d);c&&Q.set(a,b);return b},o:function(a){return Q.get(a)||
null},s:function(){return E.slice()},u:g(b),B:g(e),A:g(f),w:g(a),C:function(a){-1!==a.indexOf("*")?G=!1:(G=!0,F.length=0,W.call(a,function(a){X.call(F,""+a)}))}})}(),Z=U.g,aa=U.j,ba=U.i,ca=U.h;"undefined"!==typeof window&&"undefined"===typeof window.TrustedTypes&&(window.TrustedTypes={isHTML:U.u,isURL:U.B,isScriptURL:U.A,isScript:U.w,createPolicy:U.m,getExposedPolicy:U.o,getPolicyNames:U.s},window.TrustedHTML=Z,window.TrustedURL=aa,window.TrustedScriptURL=ba,window.TrustedScript=ca,window.TrustedTypePolicy=T);}).call(window);//# sourceMappingURL=trustedtypes.api_only.build.js.map
