!function(n,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("isomorphic-fetch"),require("form-data")):"function"==typeof define&&define.amd?define(["isomorphic-fetch","form-data"],t):"object"==typeof exports?exports.library=t(require("isomorphic-fetch"),require("form-data")):n.library=t(n["isomorphic-fetch"],n["form-data"])}("undefined"!=typeof self?self:this,function(n,t){return function(n){function t(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return n[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var e={};return t.m=n,t.c=e,t.d=function(n,e,r){t.o(n,e)||Object.defineProperty(n,e,{configurable:!1,enumerable:!0,get:r})},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},t.p="",t(t.s=0)}([function(n,t,e){"use strict";function r(n){return n&&n.__esModule?n:{default:n}}function o(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}Object.defineProperty(t,"__esModule",{value:!0}),t.luchFor=t.luch=t.stryForBody=t.getJson=t.removeUndefinedAttrs=t.getAbsoluteUrl=t.appendToFormData=void 0;var u=e(1),i=r(u),c=e(2),f=r(c),a=e(3),s=t.appendToFormData=function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:new f.default;return Object.keys(n).map(function(e){return t.append(e,n[e])}),t},p=t.getAbsoluteUrl=function(n){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return""+n+t}},l=(t.removeUndefinedAttrs=function(n){return JSON.parse(JSON.stringify(n))},t.getJson=function(n){return n.json()},t.stryForBody=function(n,t){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return Object.assign({headers:{"Content-Type":"application/json"},method:t,body:JSON.stringify(n)},e)},function(n,t){return{method:n,body:s(t)}}),d=function(n){return{method:n}},b=function(n){return function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return(0,i.default)(t,Object.assign({},l(n,e),r))}},y=function(n){return function(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return(0,i.default)(t+(e?"?"+(0,a.stringify)(e):""),Object.assign({},d(n),r))}},j={get:y("GET"),head:y("HEAD"),oprions:y("OPTIONS"),delete:y("DELETE"),post:b("POST"),put:b("PUT"),patch:b("PATCH")},g=t.luch=Object.assign(function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return(0,i.default)(n,t)},j);t.default=g;t.luchFor=function n(t,e){return Object.assign(function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return g(p(t)(n),e)},Object.keys(j).reduce(function(n,r){return Object.assign(o({},r,function(n,o){var u=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return j[r](p(t)(n),o,Object.assign({},e,u))}),n)},{}),{baseUrl:t,baseOptions:e,addToBaseConfig:function(r){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return n(""+t+r,Object.assign({},e,o))}})}},function(t,e){t.exports=n},function(n,e){n.exports=t},function(n,t,e){!function(t,e){n.exports=e()}(0,function(){return function(n){function t(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return n[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var e={};return t.m=n,t.c=e,t.d=function(n,e,r){t.o(n,e)||Object.defineProperty(n,e,{configurable:!1,enumerable:!0,get:r})},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},t.p="",t(t.s=0)}([function(n,t,e){"use strict";function r(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r])}return n},u=function(n){return"[object Object]"===Object.prototype.toString.call(n)},i=function n(t){return t.reduce(function(t,e){return t.concat(Array.isArray(e)?n(e):e)},[])},c=function(n,t){return n+"="+t},f=function(n,t){return"["+n+"]="+t},a=function(n,t){return n+"[]="+t},s=function(n,t){return"["+n+"][]="+t},p=function(n,t){return t.map(function(t){return(u(t)?x:h)(n,t,a)})},l=function(n,t){return t.map(function(t){return h(n,t,s)})},d=function n(t,e){return Array.isArray(e)?e.map(function(e){return n(t,e)}):""+t+e},b=function(n,t){return[].concat(t).map(function(t){return d(n,t)})},y=function(n,t){return Object.keys(t).map(function(n){return h(n,t[n],f)}).map(function(t){return b(n,t)})},j=function n(t,e){return Array.isArray(e)?e.map(function(e){return n(t,e)}):"["+t+"]"+e},g=function(n,t){return Object.keys(t).map(function(n){return h(n,t[n],f)}).map(function(t){return j(n,t)})},O={"[object Object]":y,"[object Array]":p},v={"[object Object]":g,"[object Array]":l},m=function(n){return function(t,e,r){return(n[Object.prototype.toString.call(e)]||r)(t,e)}},h=m(v),x=m(O);t.stringify=function(n){return i(Object.keys(n).map(function(t){return x(t,n[t],c)})).join("&")},t.parse=function(n){return n.split("&").map(function(n){return n.split("=")}).reduce(function(n,t){return o({},n,r({},t[0],t[1]))},{})}}])})}])});