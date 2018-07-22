(function(){var l;function aa(a,b){function c(){}
c.prototype=b.prototype;a.prototype=new c;a.prototype.constructor=a;for(var d in b)if(Object.defineProperties){var e=Object.getOwnPropertyDescriptor(b,d);e&&Object.defineProperty(a,d,e)}else a[d]=b[d]}
var da="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(c.get||c.set)throw new TypeError("ES3 does not support getters and setters.");a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)},ea="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this;
function fa(a,b){if(b){for(var c=ea,d=a.split("."),e=0;e<d.length-1;e++){var f=d[e];f in c||(c[f]={});c=c[f]}d=d[d.length-1];e=c[d];f=b(e);f!=e&&null!=f&&da(c,d,{configurable:!0,writable:!0,value:f})}}
fa("String.prototype.startsWith",function(a){return a?a:function(a,c){var b;if(null==this)throw new TypeError("The 'this' value for String.prototype.startsWith must not be null or undefined");if(a instanceof RegExp)throw new TypeError("First argument to String.prototype.startsWith must not be a regular expression");b=this+"";a+="";for(var e=b.length,f=a.length,g=Math.max(0,Math.min(c|0,b.length)),h=0;h<f&&g<e;)if(b[g++]!=a[h++])return!1;return h>=f}});
fa("Reflect.apply",function(a){if(a)return a;var b=Function.prototype.apply;return function(a,d,e){return b.call(a,d,e)}});
fa("Reflect.construct",function(a){return a?a:function(a,c,d){void 0===d&&(d=a);d=Object.create(d.prototype||Object.prototype);return Reflect.apply(a,d,c)||d}});
var n=this;function p(a){return void 0!==a}
function q(a,b,c){a=a.split(".");c=c||n;a[0]in c||!c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)!a.length&&p(b)?c[d]=b:c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}}
function r(a,b){for(var c=a.split("."),d=b||n,e;e=c.shift();)if(null!=d[e])d=d[e];else return null;return d}
function t(){}
function ga(a){a.ma=void 0;a.getInstance=function(){return a.ma?a.ma:a.ma=new a}}
function ha(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}
function ia(a){return"array"==ha(a)}
function ja(a){var b=ha(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function u(a){return"string"==typeof a}
function ka(a){return"function"==ha(a)}
function la(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function ma(a){return a[oa]||(a[oa]=++pa)}
var oa="closure_uid_"+(1E9*Math.random()>>>0),pa=0;function qa(a,b,c){return a.call.apply(a.bind,arguments)}
function ra(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}
function v(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?v=qa:v=ra;return v.apply(null,arguments)}
function w(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var b=c.slice();b.push.apply(b,arguments);return a.apply(this,b)}}
var y=Date.now||function(){return+new Date};
function z(a,b){function c(){}
c.prototype=b.prototype;a.A=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.ob=function(a,c,f){for(var d=Array(arguments.length-2),e=2;e<arguments.length;e++)d[e-2]=arguments[e];return b.prototype[c].apply(a,d)}}
;var sa=document,A=window;var ta=(new Date).getTime();function ua(a){if(!a)return"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));a=a.substring(0,a.indexOf("://"));if("http"!==a&&"https"!==a&&"chrome-extension"!==a&&"file"!==a&&"android-app"!==a&&"chrome-search"!==a)throw Error("Invalid URI scheme in origin");var c="",d=b.indexOf(":");if(-1!=d){var e=b.substring(d+
1),b=b.substring(0,d);if("http"===a&&"80"!==e||"https"===a&&"443"!==e)c=":"+e}return a+"://"+b+c}
;function va(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;x=m=0}
function b(a){for(var b=g,c=0;64>c;c+=4)b[c/4]=a[c]<<24|a[c+1]<<16|a[c+2]<<8|a[c+3];for(c=16;80>c;c++)a=b[c-3]^b[c-8]^b[c-14]^b[c-16],b[c]=(a<<1|a>>>31)&4294967295;a=e[0];for(var d=e[1],f=e[2],h=e[3],k=e[4],m,E,c=0;80>c;c++)40>c?20>c?(m=h^d&(f^h),E=1518500249):(m=d^f^h,E=1859775393):60>c?(m=d&f|h&(d|f),E=2400959708):(m=d^f^h,E=3395469782),m=((a<<5|a>>>27)&4294967295)+m+k+E+b[c]&4294967295,k=h,h=f,f=(d<<30|d>>>2)&4294967295,d=a,a=m;e[0]=e[0]+a&4294967295;e[1]=e[1]+d&4294967295;e[2]=e[2]+f&4294967295;
e[3]=e[3]+h&4294967295;e[4]=e[4]+k&4294967295}
function c(a,c){if("string"===typeof a){a=unescape(encodeURIComponent(a));for(var d=[],e=0,g=a.length;e<g;++e)d.push(a.charCodeAt(e));a=d}c||(c=a.length);d=0;if(0==m)for(;d+64<c;)b(a.slice(d,d+64)),d+=64,x+=64;for(;d<c;)if(f[m++]=a[d++],x++,64==m)for(m=0,b(f);d+64<c;)b(a.slice(d,d+64)),d+=64,x+=64}
function d(){var a=[],d=8*x;56>m?c(h,56-m):c(h,64-(m-56));for(var g=63;56<=g;g--)f[g]=d&255,d>>>=8;b(f);for(g=d=0;5>g;g++)for(var k=24;0<=k;k-=8)a[d++]=e[g]>>k&255;return a}
for(var e=[],f=[],g=[],h=[128],k=1;64>k;++k)h[k]=0;var m,x;a();return{reset:a,update:c,digest:d,Fa:function(){for(var a=d(),b="",c=0;c<a.length;c++)b+="0123456789ABCDEF".charAt(Math.floor(a[c]/16))+"0123456789ABCDEF".charAt(a[c]%16);return b}}}
;/*
 gapi.loader.OBJECT_CREATE_TEST_OVERRIDE &&*/
var wa=window,xa=document,ya=wa.location;function za(){}
var Aa=/\[native code\]/;function B(a,b,c){return a[b]=a[b]||c}
function Ba(a){for(var b=0;b<this.length;b++)if(this[b]===a)return b;return-1}
function Ca(a){a=a.sort();for(var b=[],c=void 0,d=0;d<a.length;d++){var e=a[d];e!=c&&b.push(e);c=e}return b}
function C(){var a;if((a=Object.create)&&Aa.test(a))a=a(null);else{a={};for(var b in a)a[b]=void 0}return a}
var Da=B(wa,"gapi",{});function Ea(a,b,c){this.i=c;this.g=a;this.j=b;this.f=0;this.b=null}
Ea.prototype.get=function(){var a;0<this.f?(this.f--,a=this.b,this.b=a.next,a.next=null):a=this.g();return a};
function Fa(a,b){a.j(b);a.f<a.i&&(a.f++,b.next=a.b,a.b=b)}
;function D(a){if(Error.captureStackTrace)Error.captureStackTrace(this,D);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))}
z(D,Error);D.prototype.name="CustomError";function Ga(a){return/^\s*$/.test(a)?!1:/^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g,"@").replace(/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g,"]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g,""))}
function Ha(a){a=String(a);if(Ga(a))try{return eval("("+a+")")}catch(b){}throw Error("Invalid JSON string: "+a);}
function Ia(a){return eval("("+a+")")}
function Ja(a){var b=[];Ka(new La,a,b);return b.join("")}
function La(){}
function Ka(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(ia(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),Ka(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],"function"!=typeof f&&(c.push(e),Ma(d,c),c.push(":"),Ka(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":Ma(b,c);break;case "number":c.push(isFinite(b)&&
!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}
var Na={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},Oa=/\uffff/.test("\uffff")?/[\\\"\x00-\x1f\x7f-\uffff]/g:/[\\\"\x00-\x1f\x7f-\xff]/g;function Ma(a,b){b.push('"',a.replace(Oa,function(a){var b=Na[a];b||(b="\\u"+(a.charCodeAt(0)|65536).toString(16).substr(1),Na[a]=b);return b}),'"')}
;function Pa(a,b){this.width=a;this.height=b}
l=Pa.prototype;l.aspectRatio=function(){return this.width/this.height};
l.isEmpty=function(){return!(this.width*this.height)};
l.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
l.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
l.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function Qa(a){var b=Ra,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function Sa(){var a=G,b;for(b in a)return!1;return!0}
function Ta(a,b){if(null!==a&&b in a)throw Error('The object already contains the key "'+b+'"');a[b]=!0}
function Ua(a){var b={},c;for(c in a)b[c]=a[c];return b}
var Va="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Wa(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<Va.length;f++)c=Va[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;function Xa(a){a.prototype.then=a.prototype.then;a.prototype.$goog_Thenable=!0}
;function Ya(a){Ya[" "](a);return a}
Ya[" "]=t;function Za(a,b){var c=$a;return Object.prototype.hasOwnProperty.call(c,a)?c[a]:c[a]=b(a)}
;function ab(){}
;var bb=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")};
function cb(a,b){return a<b?-1:a>b?1:0}
function db(a){for(var b=0,c=0;c<a.length;++c)b=31*b+a.charCodeAt(c)>>>0;return b}
;var eb=function(){var a=!1;try{var b=Object.defineProperty({},"passive",{get:function(){a=!0}});
n.addEventListener("test",null,b)}catch(c){}return a}();var fb={};function gb(a){return fb[a]||(fb[a]=String(a).replace(/\-([a-z])/g,function(a,c){return c.toUpperCase()}))}
function hb(a,b){return a?a.dataset?a.dataset[gb(b)]:a.getAttribute("data-"+b):null}
function ib(a){a&&(a.dataset?a.dataset[gb("loaded")]="true":a.setAttribute("data-loaded","true"))}
;var jb={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function kb(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.shiftKey=this.ctrlKey=this.altKey=!1;this.clientY=this.clientX=0;this.changedTouches=this.touches=null;if(a=a||window.event){this.event=a;for(var b in a)b in jb||(this[b]=a[b]);(b=a.target||a.srcElement)&&3==b.nodeType&&(b=b.parentNode);this.target=b;if(b=a.relatedTarget)try{b=b.nodeName?b:null}catch(c){b=null}else"mouseover"==this.type?b=a.fromElement:
"mouseout"==this.type&&(b=a.toElement);this.relatedTarget=b;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey}}
kb.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
kb.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
kb.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var lb=window.performance&&window.performance.timing&&window.performance.now?function(){return window.performance.timing.navigationStart+window.performance.now()}:function(){return(new Date).getTime()},mb="Microsoft Internet Explorer"==navigator.appName;
function nb(a,b){if(1<b.length)a[b[0]]=b[1];else{var c=b[0],d;for(d in c)a[d]=c[d]}}
;function ob(a,b,c,d){this.f=a;this.i=b;this.g=c;this.b=d}
var pb=1;function qb(a){var b={};void 0!==a.f?b.trackingParams=a.f:(b.veType=a.i,null!=a.g&&(b.veCounter=a.g));void 0!==a.b&&(b.dataElement=qb(a.b));return b}
;var rb=p(XMLHttpRequest)?function(){return new XMLHttpRequest}:p(ActiveXObject)?function(){return new ActiveXObject("Microsoft.XMLHTTP")}:null;
function sb(){if(!rb)return null;var a=rb();return"open"in a?a:null}
function tb(a){switch(a&&"status"in a?a.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:return!0;default:return!1}}
;function ub(a){this.topic=a}
ub.prototype.toString=function(){return this.topic};var H=window.performance||window.mozPerformance||window.msPerformance||window.webkitPerformance||{};function I(){this.f=this.f;this.F=this.F}
I.prototype.f=!1;I.prototype.dispose=function(){this.f||(this.f=!0,this.o())};
function vb(a,b){a.f?p(void 0)?b.call(void 0):b():(a.F||(a.F=[]),a.F.push(p(void 0)?v(b,void 0):b))}
I.prototype.o=function(){if(this.F)for(;this.F.length;)this.F.shift()()};
function wb(a){a&&"function"==typeof a.dispose&&a.dispose()}
function xb(a){for(var b=0,c=arguments.length;b<c;++b){var d=arguments[b];ja(d)?xb.apply(null,d):wb(d)}}
;var J;a:{var yb=n.navigator;if(yb){var zb=yb.userAgent;if(zb){J=zb;break a}}J=""}function K(a){return-1!=J.indexOf(a)}
;function Ab(a){this.b=a||{cookie:""}}
l=Ab.prototype;l.isEnabled=function(){return navigator.cookieEnabled};
l.set=function(a,b,c,d,e,f){if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');p(c)||(c=-1);e=e?";domain="+e:"";d=d?";path="+d:"";f=f?";secure":"";c=0>c?"":0==c?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(y()+1E3*c)).toUTCString();this.b.cookie=a+"="+b+e+d+c+f};
l.get=function(a,b){for(var c=a+"=",d=(this.b.cookie||"").split(";"),e=0,f;e<d.length;e++){f=bb(d[e]);if(0==f.lastIndexOf(c,0))return f.substr(c.length);if(f==a)return""}return b};
l.remove=function(a,b,c){var d=p(this.get(a));this.set(a,"",0,b,c);return d};
l.isEmpty=function(){return!this.b.cookie};
l.clear=function(){for(var a=(this.b.cookie||"").split(";"),b=[],c=[],d,e,f=0;f<a.length;f++)e=bb(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));for(a=b.length-1;0<=a;a--)this.remove(b[a])};
var Bb=new Ab("undefined"==typeof document?null:document);Bb.f=3950;function Cb(a){this.b=a}
Cb.prototype.set=function(a,b){p(b)?this.b.set(a,Ja(b)):this.b.remove(a)};
Cb.prototype.get=function(a){var b;try{b=this.b.get(a)}catch(c){return}if(null!==b)try{return Ha(b)}catch(c){throw"Storage: Invalid value was encountered";}};
Cb.prototype.remove=function(a){this.b.remove(a)};var Db=!1,Eb="";function Fb(a){a=a.match(/[\d]+/g);if(!a)return"";a.length=3;return a.join(".")}
(function(){if(navigator.plugins&&navigator.plugins.length){var a=navigator.plugins["Shockwave Flash"];if(a&&(Db=!0,a.description)){Eb=Fb(a.description);return}if(navigator.plugins["Shockwave Flash 2.0"]){Db=!0;Eb="2.0.0.11";return}}if(navigator.mimeTypes&&navigator.mimeTypes.length&&(a=navigator.mimeTypes["application/x-shockwave-flash"],Db=!(!a||!a.enabledPlugin))){Eb=Fb(a.enabledPlugin.description);return}try{var b=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");Db=!0;Eb=Fb(b.GetVariable("$version"));
return}catch(c){}try{b=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");Db=!0;Eb="6.0.21";return}catch(c){}try{b=new ActiveXObject("ShockwaveFlash.ShockwaveFlash"),Db=!0,Eb=Fb(b.GetVariable("$version"))}catch(c){}})();
var Gb=Db,Hb=Eb;function Ib(a,b){var c=Jb();this.label=a;this.type=b;this.value=c;this.duration=0;this.uniqueId=this.label+"_"+this.type+"_"+Math.random()}
;var Kb=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{};q("yt.config_",Kb,void 0);function L(a){nb(Kb,arguments)}
function M(a,b){return a in Kb?Kb[a]:b}
;function Lb(a){a=a||{};this.url=a.url||"";this.urlV9As2=a.url_v9as2||"";this.args=a.args||Ua(Mb);this.assets=a.assets||{};this.attrs=a.attrs||Ua(Nb);this.params=a.params||Ua(Ob);this.minVersion=a.min_version||"8.0.0";this.fallback=a.fallback||null;this.fallbackMessage=a.fallbackMessage||null;this.html5=!!a.html5;this.disable=a.disable||{};this.loaded=!!a.loaded;this.messages=a.messages||{}}
var Mb={enablejsapi:1},Nb={},Ob={allowscriptaccess:"always",allowfullscreen:"true",bgcolor:"#000000"};function Pb(a){a instanceof Lb||(a=new Lb(a));return a}
function Qb(a){var b=new Lb,c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];b[c]="object"==ha(d)?Ua(d):d}return b}
;var Rb={"api.invalidparam":2,auth:150,"drm.auth":150,"heartbeat.net":150,"heartbeat.servererror":150,"heartbeat.stop":150,"html5.unsupportedads":5,"fmt.noneavailable":5,"fmt.decode":5,"fmt.unplayable":5,"html5.missingapi":5,"html5.unsupportedlive":5,"drm.unavailable":5};var N;N=B(wa,"___jsl",C());B(N,"I",0);B(N,"hel",10);function Sb(){var a=ya.href,b;if(N.dpo)b=N.h;else{b=N.h;var c=RegExp("([#].*&|[#])jsh=([^&#]*)","g"),d=RegExp("([?#].*&|[?#])jsh=([^&#]*)","g");if(a=a&&(c.exec(a)||d.exec(a)))try{b=decodeURIComponent(a[2])}catch(e){}}return b}
function Tb(a){var b=B(N,"PQ",[]);N.PQ=[];var c=b.length;if(0===c)a();else for(var d=0,e=function(){++d===c&&a()},f=0;f<c;f++)b[f](e)}
function Ub(a){return B(B(N,"H",C()),a,C())}
;var Vb=Array.prototype.indexOf?function(a,b,c){return Array.prototype.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;
if(u(a))return u(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},O=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=u(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},Wb=Array.prototype.map?function(a,b,c){return Array.prototype.map.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=Array(d),f=u(a)?a.split(""):a,g=0;g<d;g++)g in f&&(e[g]=b.call(c,f[g],g,a));
return e};
function Xb(a,b){var c;a:{c=a.length;for(var d=u(a)?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){c=e;break a}c=-1}return 0>c?null:u(a)?a.charAt(c):a[c]}
function Yb(a,b){var c=Vb(a,b);0<=c&&Array.prototype.splice.call(a,c,1)}
function Zb(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}
function $b(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(ja(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
;function ac(){this.f=this.b=null}
var cc=new Ea(function(){return new bc},function(a){a.reset()},100);
ac.prototype.remove=function(){var a=null;this.b&&(a=this.b,this.b=this.b.next,this.b||(this.f=null),a.next=null);return a};
function bc(){this.next=this.scope=this.b=null}
bc.prototype.set=function(a,b){this.b=a;this.scope=b;this.next=null};
bc.prototype.reset=function(){this.next=this.scope=this.b=null};function dc(){return K("iPhone")&&!K("iPod")&&!K("iPad")}
;function ec(a){this.b=a}
z(ec,Cb);function gc(a){this.data=a}
function hc(a){return!p(a)||a instanceof gc?a:new gc(a)}
ec.prototype.set=function(a,b){ec.A.set.call(this,a,hc(b))};
ec.prototype.f=function(a){a=ec.A.get.call(this,a);if(!p(a)||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
ec.prototype.get=function(a){if(a=this.f(a)){if(a=a.data,!p(a))throw"Storage: Invalid value was encountered";}else a=void 0;return a};var ic=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function P(a){return a.match(ic)}
function jc(a){return a?decodeURI(a):a}
function kc(a){if(a[1]){var b=a[0],c=b.indexOf("#");0<=c&&(a.push(b.substr(c)),a[0]=b=b.substr(0,c));c=b.indexOf("?");0>c?a[1]="?":c==b.length-1&&(a[1]=void 0)}return a.join("")}
function lc(a,b,c){if(ia(b))for(var d=0;d<b.length;d++)lc(a,String(b[d]),c);else null!=b&&c.push("&",a,""===b?"":"=",encodeURIComponent(String(b)))}
function mc(a,b){for(var c in b)lc(c,b[c],a);return a}
;function Q(a,b){var c=r("yt.logging.errors.log");c?c(a,b,void 0,void 0,void 0):(c=M("ERRORS",[]),c.push([a,b,void 0,void 0,void 0]),L("ERRORS",c))}
function nc(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){Q(b)}}:a}
;function R(a){return M("EXPERIMENT_FLAGS",{})[a]}
;var oc=window.yt&&window.yt.msgs_||window.ytcfg&&window.ytcfg.msgs||{};q("yt.msgs_",oc,void 0);function pc(a){nb(oc,arguments)}
;function qc(a){a={client:{hl:a.Na,gl:a.Ma,clientName:a.La,clientVersion:a.innertubeContextClientVersion}};M("DELEGATED_SESSION_ID")&&(a.user={onBehalfOfUser:M("DELEGATED_SESSION_ID")});return a}
function rc(){return{apiaryHost:M("APIARY_HOST",void 0),Da:M("APIARY_HOST_FIRSTPARTY",void 0),gapiHintOverride:!!M("GAPI_HINT_OVERRIDE",void 0),gapiHintParams:M("GAPI_HINT_PARAMS",void 0),innertubeApiKey:M("INNERTUBE_API_KEY",void 0),innertubeApiVersion:M("INNERTUBE_API_VERSION",void 0),La:M("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),innertubeContextClientVersion:M("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0),Na:M("INNERTUBE_CONTEXT_HL",void 0),Ma:M("INNERTUBE_CONTEXT_GL",void 0),xhrApiaryHost:M("XHR_APIARY_HOST",
void 0),Oa:M("INNERTUBE_HOST_OVERRIDE",void 0)}}
function sc(a,b,c){c.context&&c.context.capabilities&&(c=c.context.capabilities,c.snapshot||c.golden)&&(a="vix");return"/youtubei/"+a+"/"+b}
;function tc(a){I.call(this);this.g=a;this.g.subscribe("command",this.xa,this);this.i={};this.j=!1}
z(tc,I);l=tc.prototype;l.start=function(){this.j||this.f||(this.j=!0,uc(this.g,"RECEIVING"))};
l.xa=function(a,b){if(this.j&&!this.f){var c=b||{};switch(a){case "addEventListener":if(u(c.event)&&(c=c.event,!(c in this.i))){var d=v(this.eb,this,c);this.i[c]=d;this.addEventListener(c,d)}break;case "removeEventListener":u(c.event)&&vc(this,c.event);break;default:this.b.isReady()&&this.b[a]&&(c=wc(a,b||{}),c=this.b[a].apply(this.b,c),(c=xc(a,c))&&this.j&&!this.f&&uc(this.g,a,c))}}};
l.eb=function(a,b){this.j&&!this.f&&uc(this.g,a,this.ia(a,b))};
l.ia=function(a,b){if(null!=b)return{value:b}};
function vc(a,b){b in a.i&&(a.removeEventListener(b,a.i[b]),delete a.i[b])}
l.o=function(){var a=this.g;a.f||yc(a.b,"command",this.xa,this);this.g=null;for(var b in this.i)vc(this,b);tc.A.o.call(this)};function zc(a,b,c){var d=[],e=[];if(1==(ia(c)?2:1))return e=[b,a],O(d,function(a){e.push(a)}),Ac(e.join(" "));
var f=[],g=[];O(c,function(a){g.push(a.key);f.push(a.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];O(d,function(a){e.push(a)});
a=Ac(e.join(" "));a=[c,a];0==g.length||a.push(g.join(""));return a.join("_")}
function Ac(a){var b=va();b.update(a);return b.Fa().toLowerCase()}
;var Bc=B(N,"perf",C());B(Bc,"g",C());var Cc=B(Bc,"i",C());B(Bc,"r",[]);C();C();function Dc(a,b,c){b&&0<b.length&&(b=Ec(b),c&&0<c.length&&(b+="___"+Ec(c)),28<b.length&&(b=b.substr(0,28)+(b.length-28)),c=b,b=B(Cc,"_p",C()),B(b,c,C())[a]=(new Date).getTime(),b=Bc.r,"function"===typeof b?b(a,"_p",c):b.push([a,"_p",c]))}
function Ec(a){return a.join("__").replace(/\./g,"_").replace(/\-/g,"_").replace(/\,/g,"_")}
;function Fc(){this.b="";this.f=Gc}
Fc.prototype.la=!0;Fc.prototype.ka=function(){return this.b};
var Gc={};function Hc(){return(K("Chrome")||K("CriOS"))&&!K("Edge")}
;function Ic(a){this.b=a}
z(Ic,ec);Ic.prototype.set=function(a,b,c){if(b=hc(b)){if(c){if(c<y()){Ic.prototype.remove.call(this,a);return}b.expiration=c}b.creation=y()}Ic.A.set.call(this,a,b)};
Ic.prototype.f=function(a,b){var c=Ic.A.f.call(this,a);if(c){var d;if(d=!b){d=c.creation;var e=c.expiration;d=!!e&&e<y()||!!d&&d>y()}if(d)Ic.prototype.remove.call(this,a);else return c}};function Jc(){var a=Kc;try{var b;if(b=!!a&&null!=a.location.href)a:{try{Ya(a.foo);b=!0;break a}catch(c){}b=!1}return b}catch(c){return!1}}
;function Lc(a,b){this.events=[];this.f=b||n;var c=null;b&&(b.google_js_reporting_queue=b.google_js_reporting_queue||[],this.events=b.google_js_reporting_queue,c=b.b);this.b=null!=c?c:Math.random()<a}
function Jb(){var a=n.performance;return a&&a.now?a.now():y()}
Lc.prototype.g=function(a){var b=this.f.performance;a&&b&&b.clearMarks&&(b.clearMarks("goog_"+a.uniqueId+"_start"),b.clearMarks("goog_"+a.uniqueId+"_end"))};
Lc.prototype.start=function(a,b){if(!this.b)return null;var c=new Ib(a,b),d=this.f.performance;d&&d.mark&&d.mark("goog_"+c.uniqueId+"_start");return c};
Lc.prototype.end=function(a){if(this.b){a.duration=Jb()-a.value;var b=this.f.performance;b&&b.mark&&b.mark("goog_"+a.uniqueId+"_end");this.b&&this.events.push(a)}};function Mc(){this.b=M("ALT_PREF_COOKIE_NAME","PREF");var a=Bb.get(""+this.b,void 0);if(a)for(var a=unescape(a).split("&"),b=0;b<a.length;b++){var c=a[b].split("="),d=c[0];(c=c[1])&&(S[d]=c.toString())}}
ga(Mc);var S=r("yt.prefs.UserPrefs.prefs_")||{};q("yt.prefs.UserPrefs.prefs_",S,void 0);function Nc(a){if(/^f([1-9][0-9]*)$/.test(a))throw Error("ExpectedRegexMatch: "+a);}
function Oc(a){if(!/^\w+$/.test(a))throw Error("ExpectedRegexMismatch: "+a);}
function Pc(a){a=void 0!==S[a]?S[a].toString():null;return null!=a&&/^[A-Fa-f0-9]+$/.test(a)?parseInt(a,16):null}
Mc.prototype.get=function(a,b){Oc(a);Nc(a);var c=void 0!==S[a]?S[a].toString():null;return null!=c?c:b?b:""};
Mc.prototype.set=function(a,b){Oc(a);Nc(a);if(null==b)throw Error("ExpectedNotNull");S[a]=b.toString()};
Mc.prototype.remove=function(a){Oc(a);Nc(a);delete S[a]};
Mc.prototype.clear=function(){S={}};function Qc(a,b){this.version=a;this.args=b}
;function T(a,b){ka(a)&&(a=nc(a));return window.setTimeout(a,b)}
;function Rc(a){"?"==a.charAt(0)&&(a=a.substr(1));a=a.split("&");for(var b={},c=0,d=a.length;c<d;c++){var e=a[c].split("=");if(1==e.length&&e[0]||2==e.length){var f=decodeURIComponent((e[0]||"").replace(/\+/g," ")),e=decodeURIComponent((e[1]||"").replace(/\+/g," "));f in b?ia(b[f])?$b(b[f],e):b[f]=[b[f],e]:b[f]=e}}return b}
function Sc(a,b){var c=a.split("#",2);a=c[0];var c=1<c.length?"#"+c[1]:"",d=a.split("?",2);a=d[0];var d=Rc(d[1]||""),e;for(e in b)d[e]=b[e];return kc(mc([a],d))+c}
function Tc(a){a=mc([],a);a[0]="";return a.join("")}
;var Uc=y().toString();function Vc(){var a=[],b=ua(String(n.location.href)),c=n.__OVERRIDE_SID;null==c&&(c=(new Ab(document)).get("SID"));if(c&&(b=(c=0==b.indexOf("https:")||0==b.indexOf("chrome-extension:"))?n.__SAPISID:n.__APISID,null==b&&(b=(new Ab(document)).get(c?"SAPISID":"APISID")),b)){var c=c?"SAPISIDHASH":"APISIDHASH",d=String(n.location.href);return d&&b&&c?[c,zc(ua(d),b,a||null)].join(" "):null}return null}
;var Wc=C(),Xc=[];function U(a){throw Error("Bad hint"+(a?": "+a:""));}
Xc.push(["jsl",function(a){for(var b in a)if(Object.prototype.hasOwnProperty.call(a,b)){var c=a[b];"object"==typeof c?N[b]=B(N,b,[]).concat(c):B(N,b,c)}if(b=a.u)a=B(N,"us",[]),a.push(b),(b=/^https:(.*)$/.exec(b))&&a.push("http:"+b[1])}]);
var Yc=/^(\/[a-zA-Z0-9_\-]+)+$/,Zc=[/\/amp\//,/\/amp$/,/^\/amp$/],$c=/^[a-zA-Z0-9\-_\.,!]+$/,ad=/^gapi\.loaded_[0-9]+$/,bd=/^[a-zA-Z0-9,._-]+$/;function cd(a,b,c,d){var e=a.split(";"),f=e.shift(),g=Wc[f],h=null;g?h=g(e,b,c,d):U("no hint processor for: "+f);h||U("failed to generate load url");b=h;c=b.match(dd);(d=b.match(ed))&&1===d.length&&fd.test(b)&&c&&1===c.length||U("failed sanity: "+a);return h}
function gd(a,b,c,d){function e(a){return encodeURIComponent(a).replace(/%2C/g,",")}
a=hd(a);ad.test(c)||U("invalid_callback");b=id(b);d=d&&d.length?id(d):null;return[encodeURIComponent(a.Za).replace(/%2C/g,",").replace(/%2F/g,"/"),"/k=",e(a.version),"/m=",e(b),d?"/exm="+e(d):"","/rt=j/sv=1/d=1/ed=1",a.qa?"/am="+e(a.qa):"",a.ya?"/rs="+e(a.ya):"",a.Ba?"/t="+e(a.Ba):"","/cb=",e(c)].join("")}
function hd(a){"/"!==a.charAt(0)&&U("relative path");for(var b=a.substring(1).split("/"),c=[];b.length;){a=b.shift();if(!a.length||0==a.indexOf("."))U("empty/relative directory");else if(0<a.indexOf("=")){b.unshift(a);break}c.push(a)}a={};for(var d=0,e=b.length;d<e;++d){var f=b[d].split("="),g=decodeURIComponent(f[0]),h=decodeURIComponent(f[1]);2==f.length&&g&&h&&(a[g]=a[g]||h)}b="/"+c.join("/");Yc.test(b)||U("invalid_prefix");c=0;for(d=Zc.length;c<d;++c)Zc[c].test(b)&&U("invalid_prefix");c=jd(a,
"k",!0);d=jd(a,"am");e=jd(a,"rs");a=jd(a,"t");return{Za:b,version:c,qa:d,ya:e,Ba:a}}
function id(a){for(var b=[],c=0,d=a.length;c<d;++c){var e=a[c].replace(/\./g,"_").replace(/-/g,"_");bd.test(e)&&b.push(e)}return b.join(",")}
function jd(a,b,c){a=a[b];!a&&c&&U("missing: "+b);if(a){if($c.test(a))return a;U("invalid: "+b)}return null}
var fd=/^https?:\/\/[a-z0-9_.-]+\.google\.com(:\d+)?\/[a-zA-Z0-9_.,!=\-\/]+$/,ed=/\/cb=/g,dd=/\/\//g;function kd(){var a=Sb();if(!a)throw Error("Bad hint");return a}
Wc.m=function(a,b,c,d){(a=a[0])||U("missing_hint");return"https://apis.google.com"+gd(a,b,c,d)};
var ld=decodeURI("%73cript"),md=/^[-+_0-9\/A-Za-z]+={0,2}$/;function nd(a,b){for(var c=[],d=0;d<a.length;++d){var e=a[d];e&&0>Ba.call(b,e)&&c.push(e)}return c}
function od(){var a=N.nonce;if(void 0!==a)return a&&a===String(a)&&a.match(md)?a:N.nonce=null;var b=B(N,"us",[]);if(!b||!b.length)return N.nonce=null;for(var c=xa.getElementsByTagName(ld),d=0,e=c.length;d<e;++d){var f=c[d];if(f.src&&(a=String(f.nonce||f.getAttribute("nonce")||"")||null)){for(var g=0,h=b.length;g<h&&b[g]!==f.src;++g);if(g!==h&&a&&a===String(a)&&a.match(md))return N.nonce=a}}return null}
function pd(a){if("loading"!=xa.readyState)qd(a);else{var b=od(),c="";null!==b&&(c=' nonce="'+b+'"');xa.write("<"+ld+' src="'+encodeURI(a)+'"'+c+"></"+ld+">")}}
function qd(a){var b=xa.createElement(ld);b.setAttribute("src",a);a=od();null!==a&&b.setAttribute("nonce",a);b.async="true";(a=xa.getElementsByTagName(ld)[0])?a.parentNode.insertBefore(b,a):(xa.head||xa.body||xa.documentElement).appendChild(b)}
function rd(a,b){var c=b&&b._c;if(c)for(var d=0;d<Xc.length;d++){var e=Xc[d][0],f=Xc[d][1];f&&Object.prototype.hasOwnProperty.call(c,e)&&f(c[e],a,b)}}
function sd(a,b,c){td(function(){var c;c=b===Sb()?B(Da,"_",C()):C();c=B(Ub(b),"_",c);a(c)},c)}
function ud(a,b){var c=b||{};"function"==typeof b&&(c={},c.callback=b);rd(a,c);var d=a?a.split(":"):[],e=c.h||kd(),f=B(N,"ah",C());if(f["::"]&&d.length){for(var g=[],h=null;h=d.shift();){var k=h.split("."),k=f[h]||f[k[1]&&"ns:"+k[0]||""]||e,m=g.length&&g[g.length-1]||null,x=m;m&&m.hint==k||(x={hint:k,features:[]},g.push(x));x.features.push(h)}var E=g.length;if(1<E){var Z=c.callback;Z&&(c.callback=function(){0==--E&&Z()})}for(;d=g.shift();)vd(d.features,c,d.hint)}else vd(d||[],c,e)}
function vd(a,b,c){function d(a,b){if(E)return 0;wa.clearTimeout(x);Z.push.apply(Z,F);var d=((Da||{}).config||{}).update;d?d(f):f&&B(N,"cu",[]).push(f);if(b){Dc("me0",a,na);try{sd(b,c,m)}finally{Dc("me1",a,na)}}return 1}
a=Ca(a)||[];var e=b.callback,f=b.config,g=b.timeout,h=b.ontimeout,k=b.onerror,m=void 0;"function"==typeof k&&(m=k);var x=null,E=!1;if(g&&!h||!g&&h)throw"Timeout requires both the timeout parameter and ontimeout parameter to be set";var k=B(Ub(c),"r",[]).sort(),Z=B(Ub(c),"L",[]).sort(),na=[].concat(k);0<g&&(x=wa.setTimeout(function(){E=!0;h()},g));
var F=nd(a,Z);if(F.length){var F=nd(a,k),ba=B(N,"CP",[]),ca=ba.length;ba[ca]=function(a){function b(){var a=ba[ca+1];a&&a()}
function c(b){ba[ca]=null;d(F,a)&&Tb(function(){e&&e();b()})}
if(!a)return 0;Dc("ml1",F,na);0<ca&&ba[ca-1]?ba[ca]=function(){c(b)}:c(b)};
if(F.length){var fc="loaded_"+N.I++;Da[fc]=function(a){ba[ca](a);Da[fc]=null};
a=cd(c,F,"gapi."+fc,k);k.push.apply(k,F);Dc("ml0",F,na);b.sync||wa.___gapisync?pd(a):qd(a)}else ba[ca](za)}else d(F)&&e&&e()}
function td(a,b){if(N.hee&&0<N.hel)try{return a()}catch(c){b&&b(c),N.hel--,ud("debug_error",function(){try{window.___jsl.hefn(c)}catch(d){throw c;}})}else try{return a()}catch(c){throw b&&b(c),c;
}}
Da.load=function(a,b){return td(function(){return ud(a,b)})};function wd(a){n.setTimeout(function(){throw a;},0)}
var xd;
function yd(){var a=n.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!K("Presto")&&(a=function(){var a=document.createElement("IFRAME");a.style.display="none";a.src="";document.documentElement.appendChild(a);var b=a.contentWindow,a=b.document;a.open();a.write("");a.close();var c="callImmediate"+Math.random(),d="file:"==b.location.protocol?"*":b.location.protocol+"//"+b.location.host,a=v(function(a){if(("*"==d||a.origin==d)&&a.data==
c)this.port1.onmessage()},this);
b.addEventListener("message",a,!1);this.port1={};this.port2={postMessage:function(){b.postMessage(c,d)}}});
if("undefined"!==typeof a&&!K("Trident")&&!K("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(p(c.next)){c=c.next;var a=c.sa;c.sa=null;a()}};
return function(a){d.next={sa:a};d=d.next;b.port2.postMessage(0)}}return"undefined"!==typeof document&&"onreadystatechange"in document.createElement("SCRIPT")?function(a){var b=document.createElement("SCRIPT");
b.onreadystatechange=function(){b.onreadystatechange=null;b.parentNode.removeChild(b);b=null;a();a=null};
document.documentElement.appendChild(b)}:function(a){n.setTimeout(a,0)}}
;function zd(){this.b="";this.f=Ad}
zd.prototype.la=!0;zd.prototype.ka=function(){return this.b};
function Bd(a){return a instanceof zd&&a.constructor===zd&&a.f===Ad?a.b:"type_error:SafeUrl"}
var Cd=/^(?:(?:https?|mailto|ftp):|[^&:/?#]*(?:[/?#]|$))/i;function Dd(a){if(a instanceof zd)return a;a=a.la?a.ka():String(a);Cd.test(a)||(a="about:invalid#zClosurez");return Ed(a)}
var Ad={};function Ed(a){var b=new zd;b.b=a;return b}
Ed("about:blank");var Fd="StopIteration"in n?n.StopIteration:{message:"StopIteration",stack:""};function Gd(){}
Gd.prototype.next=function(){throw Fd;};
Gd.prototype.ca=function(){return this};
function Hd(a){if(a instanceof Gd)return a;if("function"==typeof a.ca)return a.ca(!1);if(ja(a)){var b=0,c=new Gd;c.next=function(){for(;;){if(b>=a.length)throw Fd;if(b in a)return a[b++];b++}};
return c}throw Error("Not implemented");}
function Id(a,b){if(ja(a))try{O(a,b,void 0)}catch(c){if(c!==Fd)throw c;}else{a=Hd(a);try{for(;;)b.call(void 0,a.next(),void 0,a)}catch(c){if(c!==Fd)throw c;}}}
function Jd(a){if(ja(a))return Zb(a);a=Hd(a);var b=[];Id(a,function(a){b.push(a)});
return b}
;function Kd(a,b){this.b=p(a)?a:0;this.f=p(b)?b:0}
Kd.prototype.equals=function(a){return a instanceof Kd&&(this==a?!0:this&&a?this.b==a.b&&this.f==a.f:!1)};
Kd.prototype.ceil=function(){this.b=Math.ceil(this.b);this.f=Math.ceil(this.f);return this};
Kd.prototype.floor=function(){this.b=Math.floor(this.b);this.f=Math.floor(this.f);return this};
Kd.prototype.round=function(){this.b=Math.round(this.b);this.f=Math.round(this.f);return this};var Ld=K("Opera"),V=K("Trident")||K("MSIE"),Md=K("Edge"),Nd=K("Gecko")&&!(-1!=J.toLowerCase().indexOf("webkit")&&!K("Edge"))&&!(K("Trident")||K("MSIE"))&&!K("Edge"),Od=-1!=J.toLowerCase().indexOf("webkit")&&!K("Edge"),Pd=K("Macintosh"),Qd=K("Windows"),Rd=K("Android"),Sd=dc(),Td=K("iPad"),Ud=K("iPod");function Vd(){var a=n.document;return a?a.documentMode:void 0}
var Wd;a:{var Xd="",Yd=function(){var a=J;if(Nd)return/rv\:([^\);]+)(\)|;)/.exec(a);if(Md)return/Edge\/([\d\.]+)/.exec(a);if(V)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(Od)return/WebKit\/(\S+)/.exec(a);if(Ld)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
Yd&&(Xd=Yd?Yd[1]:"");if(V){var Zd=Vd();if(null!=Zd&&Zd>parseFloat(Xd)){Wd=String(Zd);break a}}Wd=Xd}var $d=Wd,$a={};
function W(a){return Za(a,function(){for(var b=0,c=bb(String($d)).split("."),d=bb(String(a)).split("."),e=Math.max(c.length,d.length),f=0;0==b&&f<e;f++){var g=c[f]||"",h=d[f]||"";do{g=/(\d*)(\D*)(.*)/.exec(g)||["","","",""];h=/(\d*)(\D*)(.*)/.exec(h)||["","","",""];if(0==g[0].length&&0==h[0].length)break;b=cb(0==g[1].length?0:parseInt(g[1],10),0==h[1].length?0:parseInt(h[1],10))||cb(0==g[2].length,0==h[2].length)||cb(g[2],h[2]);g=g[3];h=h[3]}while(0==b)}return 0<=b})}
var ae;var be=n.document;ae=be&&V?Vd()||("CSS1Compat"==be.compatMode?parseInt($d,10):5):void 0;function ce(a,b){var c=5E3;isNaN(c)&&(c=void 0);var d=r("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),NaN):T(a,c||0)}
;function de(a,b){Qc.call(this,1,arguments)}
z(de,Qc);var ee=new ub("timing-sent");function fe(a,b){ge||he();ie||(ge(),ie=!0);var c=je,d=cc.get();d.set(a,b);c.f?c.f.next=d:c.b=d;c.f=d}
var ge;function he(){if(-1!=String(n.Promise).indexOf("[native code]")){var a=n.Promise.resolve(void 0);ge=function(){a.then(ke)}}else ge=function(){var a=ke;
!ka(n.setImmediate)||n.Window&&n.Window.prototype&&!K("Edge")&&n.Window.prototype.setImmediate==n.setImmediate?(xd||(xd=yd()),xd(a)):n.setImmediate(a)}}
var ie=!1,je=new ac;function ke(){for(var a;a=je.remove();){try{a.b.call(a.scope)}catch(b){wd(b)}Fa(cc,a)}ie=!1}
;!Nd&&!V||V&&9<=Number(ae)||Nd&&W("1.9.1");V&&W("9");V&&W("9");!Od||W("528");Nd&&W("1.9b")||V&&W("8")||Ld&&W("9.5")||Od&&W("528");Nd&&!W("8")||V&&W("9");function le(){this.b=""}
le.prototype.la=!0;le.prototype.ka=function(){return this.b};
function me(a){var b=new le;b.b=a;return b}
me("<!DOCTYPE html>");me("");me("<br>");function ne(a){this.b=a}
z(ne,Ic);function oe(){}
z(oe,ab);oe.prototype.clear=function(){var a=Jd(this.ca(!0)),b=this;O(a,function(a){b.remove(a)})};(function(){var a;return Qd?(a=/Windows NT ([0-9.]+)/,(a=a.exec(J))?a[1]:"0"):Pd?(a=/10[_.][0-9_.]+/,(a=a.exec(J))?a[0].replace(/_/g,"."):"10"):Rd?(a=/Android\s+([^\);]+)(\)|;)/,(a=a.exec(J))?a[1]:""):Sd||Td||Ud?(a=/(?:iPhone|CPU)\s+OS\s+(\S+)/,(a=a.exec(J))?a[1].replace(/_/g,"."):""):""})();var pe=K("Firefox"),qe=dc()||K("iPod"),re=K("iPad"),se=K("Android")&&!(Hc()||K("Firefox")||K("Opera")||K("Silk")),te=Hc(),ue=K("Safari")&&!(Hc()||K("Coast")||K("Opera")||K("Edge")||K("Silk")||K("Android"))&&!(dc()||K("iPad")||K("iPod"));function ve(){this.g=this.f=this.b=0;this.i="";var a=r("window.navigator.plugins"),b=r("window.navigator.mimeTypes"),a=a&&a["Shockwave Flash"],b=b&&b["application/x-shockwave-flash"],b=a&&b&&b.enabledPlugin&&a.description||"";if(a=b){var c=a.indexOf("Shockwave Flash");0<=c&&(a=a.substr(c+15));for(var c=a.split(" "),d="",a="",e=0,f=c.length;e<f;e++)if(d)if(a)break;else a=c[e];else d=c[e];d=d.split(".");c=parseInt(d[0],10)||0;d=parseInt(d[1],10)||0;e=0;if("r"==a.charAt(0)||"d"==a.charAt(0))e=parseInt(a.substr(1),
10)||0;a=[c,d,e]}else a=[0,0,0];this.i=b;b=a;this.b=b[0];this.f=b[1];this.g=b[2];if(0>=this.b){var g,h,k,m;if(mb)try{g=new ActiveXObject("ShockwaveFlash.ShockwaveFlash")}catch(x){g=null}else k=document.body,m=document.createElement("object"),m.setAttribute("type","application/x-shockwave-flash"),g=k.appendChild(m);if(g&&"GetVariable"in g)try{h=g.GetVariable("$version")}catch(x){h=""}k&&m&&k.removeChild(m);(g=h||"")?(g=g.split(" ")[1].split(","),g=[parseInt(g[0],10)||0,parseInt(g[1],10)||0,parseInt(g[2],
10)||0]):g=[0,0,0];this.b=g[0];this.f=g[1];this.g=g[2]}}
ga(ve);function we(a,b,c,d){b="string"==typeof b?b.split("."):[b,c,d];b[0]=parseInt(b[0],10)||0;b[1]=parseInt(b[1],10)||0;b[2]=parseInt(b[2],10)||0;return a.b>b[0]||a.b==b[0]&&a.f>b[1]||a.b==b[0]&&a.f==b[1]&&a.g>=b[2]}
;var xe;var ye=J,ye=ye.toLowerCase();if(-1!=ye.indexOf("android")){var ze=ye.match(/android\D*(\d\.\d)[^\;|\)]*[\;\)]/);if(ze)xe=Number(ze[1]);else{var Ae={cupcake:1.5,donut:1.6,eclair:2,froyo:2.2,gingerbread:2.3,honeycomb:3,"ice cream sandwich":4,jellybean:4.1,kitkat:4.4,lollipop:5.1,marshmallow:6,nougat:7.1},Be=[],Ce=0,De;for(De in Ae)Be[Ce++]=De;var Ee=ye.match("("+Be.join("|")+")");xe=Ee?Ae[Ee[0]]:0}}else xe=void 0;function Fe(a,b){var c;c=b instanceof zd?b:Dd(b);a.href=Bd(c)}
;function Ge(a){He();var b=new Fc;b.b=a;return b}
var He=t;function X(a,b){this.b=0;this.w=void 0;this.i=this.f=this.g=null;this.j=this.l=!1;if(a!=t)try{var c=this;a.call(b,function(a){Ie(c,2,a)},function(a){Ie(c,3,a)})}catch(d){Ie(this,3,d)}}
function Je(){this.next=this.context=this.f=this.g=this.b=null;this.i=!1}
Je.prototype.reset=function(){this.context=this.f=this.g=this.b=null;this.i=!1};
var Ke=new Ea(function(){return new Je},function(a){a.reset()},100);
function Le(a,b,c){var d=Ke.get();d.g=a;d.f=b;d.context=c;return d}
function Me(a){if(a instanceof X)return a;var b=new X(t);Ie(b,2,a);return b}
function Ne(a){return new X(function(b,c){c(a)})}
X.prototype.then=function(a,b,c){return Oe(this,ka(a)?a:null,ka(b)?b:null,c)};
Xa(X);X.prototype.cancel=function(a){0==this.b&&fe(function(){var b=new Pe(a);Qe(this,b)},this)};
function Qe(a,b){if(0==a.b)if(a.g){var c=a.g;if(c.f){for(var d=0,e=null,f=null,g=c.f;g&&(g.i||(d++,g.b==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.b&&1==d?Qe(c,b):(f?(d=f,d.next==c.i&&(c.i=d),d.next=d.next.next):Re(c),Se(c,e,3,b)))}a.g=null}else Ie(a,3,b)}
function Te(a,b){a.f||2!=a.b&&3!=a.b||Ue(a);a.i?a.i.next=b:a.f=b;a.i=b}
function Oe(a,b,c,d){var e=Le(null,null,null);e.b=new X(function(a,g){e.g=b?function(c){try{var e=b.call(d,c);a(e)}catch(m){g(m)}}:a;
e.f=c?function(b){try{var e=c.call(d,b);!p(e)&&b instanceof Pe?g(b):a(e)}catch(m){g(m)}}:g});
e.b.g=a;Te(a,e);return e.b}
X.prototype.C=function(a){this.b=0;Ie(this,2,a)};
X.prototype.F=function(a){this.b=0;Ie(this,3,a)};
function Ie(a,b,c){if(0==a.b){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.b=1;var d;a:{var e=c,f=a.C,g=a.F;if(e instanceof X)Te(e,Le(f||t,g||null,a)),d=!0;else{var h;if(e)try{h=!!e.$goog_Thenable}catch(m){h=!1}else h=!1;if(h)e.then(f,g,a),d=!0;else{if(la(e))try{var k=e.then;if(ka(k)){Ve(e,k,f,g,a);d=!0;break a}}catch(m){g.call(a,m);d=!0;break a}d=!1}}}d||(a.w=c,a.b=b,a.g=null,Ue(a),3!=b||c instanceof Pe||We(a,c))}}
function Ve(a,b,c,d,e){function f(a){h||(h=!0,d.call(e,a))}
function g(a){h||(h=!0,c.call(e,a))}
var h=!1;try{b.call(a,g,f)}catch(k){f(k)}}
function Ue(a){a.l||(a.l=!0,fe(a.B,a))}
function Re(a){var b=null;a.f&&(b=a.f,a.f=b.next,b.next=null);a.f||(a.i=null);return b}
X.prototype.B=function(){for(var a;a=Re(this);)Se(this,a,this.b,this.w);this.l=!1};
function Se(a,b,c,d){if(3==c&&b.f&&!b.i)for(;a&&a.j;a=a.g)a.j=!1;if(b.b)b.b.g=null,Xe(b,c,d);else try{b.i?b.g.call(b.context):Xe(b,c,d)}catch(e){Ye.call(null,e)}Fa(Ke,b)}
function Xe(a,b,c){2==b?a.g.call(a.context,c):a.f&&a.f.call(a.context,c)}
function We(a,b){a.j=!0;fe(function(){a.j&&Ye.call(null,b)})}
var Ye=wd;function Pe(a){D.call(this,a)}
z(Pe,D);Pe.prototype.name="cancel";function Y(a){I.call(this);this.l=1;this.i=[];this.j=0;this.b=[];this.g={};this.w=!!a}
z(Y,I);l=Y.prototype;l.subscribe=function(a,b,c){var d=this.g[a];d||(d=this.g[a]=[]);var e=this.l;this.b[e]=a;this.b[e+1]=b;this.b[e+2]=c;this.l=e+3;d.push(e);return e};
function yc(a,b,c,d){if(b=a.g[b]){var e=a.b;(b=Xb(b,function(a){return e[a+1]==c&&e[a+2]==d}))&&a.K(b)}}
l.K=function(a){var b=this.b[a];if(b){var c=this.g[b];0!=this.j?(this.i.push(a),this.b[a+1]=t):(c&&Yb(c,a),delete this.b[a],delete this.b[a+1],delete this.b[a+2])}return!!b};
l.V=function(a,b){var c=this.g[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.w)for(e=0;e<c.length;e++){var g=c[e];Ze(this.b[g+1],this.b[g+2],d)}else{this.j++;try{for(e=0,f=c.length;e<f;e++)g=c[e],this.b[g+1].apply(this.b[g+2],d)}finally{if(this.j--,0<this.i.length&&0==this.j)for(;c=this.i.pop();)this.K(c)}}return 0!=e}return!1};
function Ze(a,b,c){fe(function(){a.apply(b,c)})}
l.clear=function(a){if(a){var b=this.g[a];b&&(O(b,this.K,this),delete this.g[a])}else this.b.length=0,this.g={}};
l.o=function(){Y.A.o.call(this);this.clear();this.i.length=0};function $e(a){this.b=a}
z($e,oe);l=$e.prototype;l.isAvailable=function(){if(!this.b)return!1;try{return this.b.setItem("__sak","1"),this.b.removeItem("__sak"),!0}catch(a){return!1}};
l.set=function(a,b){try{this.b.setItem(a,b)}catch(c){if(0==this.b.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
l.get=function(a){a=this.b.getItem(a);if(!u(a)&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
l.remove=function(a){this.b.removeItem(a)};
l.ca=function(a){var b=0,c=this.b,d=new Gd;d.next=function(){if(b>=c.length)throw Fd;var d=c.key(b++);if(a)return d;d=c.getItem(d);if(!u(d))throw"Storage mechanism: Invalid value was encountered";return d};
return d};
l.clear=function(){this.b.clear()};
l.key=function(a){return this.b.key(a)};function af(a){return(a=a.exec(J))?a[1]:""}
(function(){if(pe)return af(/Firefox\/([0-9.]+)/);if(V||Md||Ld)return $d;if(te)return dc()||K("iPad")||K("iPod")?af(/CriOS\/([0-9.]+)/):af(/Chrome\/([0-9.]+)/);if(ue&&!(dc()||K("iPad")||K("iPod")))return af(/Version\/([0-9.]+)/);if(qe||re){var a=/Version\/(\S+).*Mobile\/(\S+)/.exec(J);if(a)return a[1]+"."+a[2]}else if(se)return(a=af(/Android\s+([0-9.]+)/))?a:af(/Version\/([0-9.]+)/);return""})();function bf(a,b,c,d){I.call(this);this.g=b||null;this.B="*";this.i=c||null;this.sessionId=null;this.channel=d||null;this.H=!!a;this.w=v(this.C,this);window.addEventListener("message",this.w)}
aa(bf,I);
bf.prototype.C=function(a){if(!("*"!=this.i&&a.origin!=this.i||this.g&&a.source!=this.g)&&u(a.data)){var b;try{b=Ha(a.data)}catch(c){return}if(!(null==b||this.H&&(this.sessionId&&this.sessionId!=b.id||this.channel&&this.channel!=b.channel))&&b)switch(b.event){case "listening":"null"!=a.origin?this.i=this.B=a.origin:Q(Error("MessageEvent origin is null"),"WARNING");this.g=a.source;this.sessionId=b.id;this.b&&(this.b(),this.b=null);break;case "command":this.j&&(this.l&&!(0<=Vb(this.l,b.func))||this.j(b.func,
b.args))}}};
bf.prototype.sendMessage=function(a,b){var c=b||this.g;if(c){this.sessionId&&(a.id=this.sessionId);this.channel&&(a.channel=this.channel);try{var d=Ja(a);c.postMessage(d,this.B)}catch(e){Q(e,"WARNING")}}};
bf.prototype.o=function(){window.removeEventListener("message",this.w);I.prototype.o.call(this)};var cf;var df=J,ef=df.match(/\((iPad|iPhone|iPod)( Simulator)?;/);if(!ef||2>ef.length)cf=void 0;else{var ff=df.match(/\((iPad|iPhone|iPod)( Simulator)?; (U; )?CPU (iPhone )?OS (\d+_\d)[_ ]/);cf=ff&&6==ff.length?Number(ff[5].replace("_",".")):0}0<=cf&&0<=J.search("Safari")&&J.search("Version");function gf(a){var b=document;return u(a)?b.getElementById(a):a}
function hf(a){if(!a)return null;if(a.firstChild)return a.firstChild;for(;a&&!a.nextSibling;)a=a.parentNode;return a?a.nextSibling:null}
function jf(a){if(!a)return null;if(!a.previousSibling)return a.parentNode;for(a=a.previousSibling;a&&a.lastChild;)a=a.lastChild;return a}
function kf(a,b){for(var c=0;a;){if(b(a))return a;a=a.parentNode;c++}return null}
;function lf(){var a=null;try{a=window.localStorage||null}catch(b){}this.b=a}
z(lf,$e);function mf(){var a=null;try{a=window.sessionStorage||null}catch(b){}this.b=a}
z(mf,$e);function nf(a){this.b=a||rc();of||(of=pf(this.b))}
function pf(a){return(new X(function(b){try{var c={gapiHintOverride:a.gapiHintOverride,_c:{jsl:{h:a.gapiHintParams}},callback:b},d=ka(c)?{callback:c}:c||{};d._c&&d._c.jsl&&d._c.jsl.h||Wa(d,{_c:{jsl:{h:M("GAPI_HINT_PARAMS",void 0)}}});if(d.gapiHintOverride||M("GAPI_HINT_OVERRIDE")){var e;var f=document.location.href;if(-1!=f.indexOf("?")){var f=(f||"").split("#")[0],g=f.split("?",2);e=Rc(1<g.length?g[1]:g[0])}else e={};var h=e.gapi_jsh;h&&Wa(d,{_c:{jsl:{h:h}}})}ud("client",d)}catch(k){Q(k)}})).then(function(){})}
nf.prototype.i=function(){var a=r("gapi.config.update");a("googleapis.config/auth/useFirstPartyAuth",!0);a("googleapis.config/auth/useFirstPartyAuthV2",!0);var b=this.b.apiaryHost;/^[\s\xa0]*$/.test(null==b?"":String(b))||a("googleapis.config/root",(-1==b.indexOf("://")?"//":"")+b);b=this.b.Da;/^[\s\xa0]*$/.test(null==b?"":String(b))||a("googleapis.config/root-1p",(-1==b.indexOf("://")?"//":"")+b);b=M("SESSION_INDEX");a("googleapis.config/sessionIndex",b);r("gapi.client.setApiKey")(this.b.innertubeApiKey)};
nf.prototype.f=function(){return{context:qc(this.b)}};
nf.prototype.g=function(a,b,c){var d,e=!1;0<c.timeout&&(d=T(function(){e||(e=!0,c.O&&c.O())},c.timeout));
qf(this,a,b,function(a){if(!e)if(e=!0,d&&window.clearTimeout(d),a)c.J&&c.J(a);else if(c.onError)c.onError()})};
function qf(a,b,c,d){var e={path:sc(a.b.innertubeApiVersion,b,c),headers:{"X-Goog-Visitor-Id":M("VISITOR_DATA")},method:"POST",body:Ja(c)},f=v(a.i,a);of.then(function(){f();r("gapi.client.request")(e).execute(d||t)})}
var of=null;function rf(){I.call(this);this.b=new Y;vb(this,w(wb,this.b))}
z(rf,I);rf.prototype.subscribe=function(a,b,c){return this.f?0:this.b.subscribe(a,b,c)};
rf.prototype.K=function(a){return this.f?!1:this.b.K(a)};
rf.prototype.l=function(a,b){this.f||this.b.V.apply(this.b,arguments)};var sf=r("ytPubsubPubsubInstance")||r("yt.pubsub.instance_")||new Y;Y.prototype.subscribe=Y.prototype.subscribe;Y.prototype.unsubscribeByKey=Y.prototype.K;Y.prototype.publish=Y.prototype.V;Y.prototype.clear=Y.prototype.clear;q("yt.pubsub.instance_",sf,void 0);q("ytPubsubPubsubInstance",sf,void 0);var tf=r("ytPubsubPubsubSubscribedKeys")||r("yt.pubsub.subscribedKeys_")||{};q("yt.pubsub.subscribedKeys_",tf,void 0);q("ytPubsubPubsubSubscribedKeys",tf,void 0);
var uf=r("ytPubsubPubsubTopicToKeys")||r("yt.pubsub.topicToKeys_")||{};q("yt.pubsub.topicToKeys_",uf,void 0);q("ytPubsubPubsubTopicToKeys",uf,void 0);var vf=r("ytPubsubPubsubIsSynchronous")||r("yt.pubsub.isSynchronous_")||{};q("yt.pubsub.isSynchronous_",vf,void 0);q("ytPubsubPubsubIsSynchronous",vf,void 0);function wf(){return r("ytPubsubPubsubInstance")||r("yt.pubsub.instance_")}
function xf(a){uf[a]&&(a=uf[a],O(a,function(a){tf[a]&&delete tf[a]}),a.length=0)}
function yf(a){var b=wf();if(b)if(b.clear(a),a)xf(a);else for(var c in uf)xf(c)}
function zf(a,b){var c=wf();c&&c.publish.apply(c,arguments)}
function Af(a,b){var c=wf();if(c){var d=c.subscribe(a,function(){var c=arguments,f;f=function(){tf[d]&&b.apply(window,c)};
try{vf[a]?f():T(f,0)}catch(g){Q(g)}},void 0);
tf[d]=!0;uf[a]||(uf[a]=[]);uf[a].push(d);return d}return 0}
function Bf(a){var b=wf();b&&("number"==typeof a?a=[a]:u(a)&&(a=[parseInt(a,10)]),O(a,function(a){b.unsubscribeByKey(a);delete tf[a]}))}
;var Cf=r("ytPubsub2Pubsub2Instance")||new Y;Y.prototype.subscribe=Y.prototype.subscribe;Y.prototype.unsubscribeByKey=Y.prototype.K;Y.prototype.publish=Y.prototype.V;Y.prototype.clear=Y.prototype.clear;q("ytPubsub2Pubsub2Instance",Cf,void 0);var Df=r("ytPubsub2Pubsub2SubscribedKeys")||{};q("ytPubsub2Pubsub2SubscribedKeys",Df,void 0);var Ef=r("ytPubsub2Pubsub2TopicToKeys")||{};q("ytPubsub2Pubsub2TopicToKeys",Ef,void 0);var Ff=r("ytPubsub2Pubsub2IsAsync")||{};q("ytPubsub2Pubsub2IsAsync",Ff,void 0);
q("ytPubsub2Pubsub2SkipSubKey",null,void 0);function Gf(a){var b=r("ytPubsub2Pubsub2Instance");b&&b.publish.call(b,ee.toString(),ee,a)}
;function Hf(a){"number"==typeof a&&(a=Math.round(a)+"px");return a}
;var If=0,Jf=r("yt.dom.dom.getNextId")||function(){return++If};
q("yt.dom.dom.getNextId",Jf,void 0);function Kf(a,b,c){bf.call(this,a,b,c||M("POST_MESSAGE_ORIGIN",void 0)||window.document.location.protocol+"//"+window.document.location.hostname,"widget");this.l=this.b=this.j=null}
aa(Kf,bf);var Lf={log_event:"events",log_interaction:"interactions"},Mf={},Nf={},Of=0,G=r("yt.logging.transport.logPayloadsQueue_")||{};q("yt.logging.transport.logPayloadsQueue_",G,void 0);var Pf=r("yt.logging.transport.tokensToCttTargetIds_")||{};q("yt.logging.transport.tokensToCttTargetIds_",Pf,void 0);
function Qf(a,b){Nf[a.endpoint]=b;var c;if(a.da){c=a.da;var d={};c.videoId?d.videoId=c.videoId:c.playlistId&&(d.playlistId=c.playlistId);Pf[a.da.token]=d;c=Rf(a.endpoint,a.da.token)}else c=Rf(a.endpoint);c.push(a.va);d=Number(R("web_logging_max_batch")||0)||20;c.length>=d?Sf():Tf()}
function Sf(){window.clearTimeout(Of);if(!Sa()){for(var a in G){var b=Mf[a];if(!b){var c=Nf[a];if(!c)continue;b=new c;Mf[a]=b}var c=void 0,d=a,e=Lf[d];for(c in G[d]){var f=b.f();f[e]=Rf(d,c);f.requestTimeMs=Math.round(lb());var g=Pf[c];if(g)a:{var h,k=f,m=c;if(g.videoId)h="VIDEO";else if(g.playlistId)h="PLAYLIST";else break a;k.credentialTransferTokenTargetId=g;k.context=k.context||{};k.context.user=k.context.user||{};k.context.user.credentialTransferTokens=[{token:m,scope:h}]}delete Pf[c];b.g(d,
f,{})}delete G[a]}Sa()||Tf()}}
function Tf(){window.clearTimeout(Of);Of=T(Sf,M("LOGGING_BATCH_TIMEOUT",1E4))}
function Rf(a,b){b||(b="");G[a]=G[a]||{};G[a][b]=G[a][b]||[];return G[a][b]}
;var Uf=/\.vflset|-vfl[a-zA-Z0-9_+=-]+/,Vf=/-[a-zA-Z]{2,3}_[a-zA-Z]{2,3}(?=(\/|$))/;function Wf(a,b){var c=Xf(a),d=document.getElementById(c),e=d&&hb(d,"loaded"),f=d&&!e;if(e)b&&b();else{if(b){var e=Af(c,b),g=""+ma(b);Yf[g]=e}f||(d=Zf(a,c,function(){hb(d,"loaded")||(ib(d),zf(c),T(w(yf,c),0))}))}}
function Zf(a,b,c){var d=document.createElement("script");d.id=b;d.onload=function(){c&&setTimeout(c,0)};
d.onreadystatechange=function(){switch(d.readyState){case "loaded":case "complete":d.onload()}};
d.src=a;a=document.getElementsByTagName("head")[0]||document.body;a.insertBefore(d,a.firstChild);return d}
function $f(a,b){if(a&&b){var c=""+ma(b);(c=Yf[c])&&Bf(c)}}
function Xf(a){var b=document.createElement("a");Fe(b,a);a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"js-"+db(a)}
var Yf={};function ag(a,b){if(window.spf){var c="";if(a){var d=a.indexOf("jsbin/"),e=a.lastIndexOf(".js"),f=d+6;-1<d&&-1<e&&e>f&&(c=a.substring(f,e),c=c.replace(Uf,""),c=c.replace(Vf,""),c=c.replace("debug-",""),c=c.replace("tracing-",""))}spf.script.load(a,c,b)}else Wf(a,b)}
;var bg=/cssbin\/(?:debug-)?([a-zA-Z0-9_-]+?)(?:-2x|-web|-rtl|-vfl|.css)/;function cg(a){if(window.spf){var b=a.match(bg);spf.style.load(a,b?b[1]:"",void 0)}else dg(a)}
function dg(a){var b=eg(a),c=document.getElementById(b),d=c&&hb(c,"loaded");d||c&&!d||(c=fg(a,b,function(){hb(c,"loaded")||(ib(c),zf(b),T(w(yf,b),0))}))}
function fg(a,b,c){var d=document.createElement("link");d.id=b;d.onload=function(){c&&setTimeout(c,0)};
a=Ge(a);d.rel="stylesheet";d.href=a instanceof Fc&&a.constructor===Fc&&a.f===Gc?a.b:"type_error:TrustedResourceUrl";(document.getElementsByTagName("head")[0]||document.body).appendChild(d);return d}
function eg(a){var b=document.createElement("a");Fe(b,a);a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"css-"+db(a)}
;function gg(){if(!hg&&!ig||!window.JSON)return null;var a;try{a=hg.get("yt-player-two-stage-token")}catch(b){}if(!u(a))try{a=ig.get("yt-player-two-stage-token")}catch(b){}if(!u(a))return null;try{a=JSON.parse(a,void 0)}catch(b){}return a}
var ig,jg=new lf;ig=jg.isAvailable()?new ne(jg):null;var hg,kg=new mf;hg=kg.isAvailable()?new ne(kg):null;function lg(a,b,c){rf.call(this);this.g=a;this.i=b;this.j=c}
z(lg,rf);function uc(a,b,c){if(!a.f){var d=a.g;d.f||a.i!=d.b||(a={id:a.j,command:b},c&&(a.data=c),d.b.postMessage(Ja(a),d.i))}}
lg.prototype.o=function(){this.i=this.g=null;lg.A.o.call(this)};var mg=!!window.google_async_iframe_id,Kc=mg&&window.parent||window;var ng=null;function og(){var a=M("BG_I",null),b=M("BG_IU",null),c=M("BG_P",void 0);b?ag(b,function(){ng=new botguard.bg(c)}):a&&(eval(a),ng=new botguard.bg(c))}
function pg(){return null!=ng}
function qg(){return ng?ng.invoke():null}
;var rg=[],sg=!1;function tg(){function a(){sg=!0;"google_ad_status"in window?L("DCLKSTAT",1):L("DCLKSTAT",2)}
ag("//static.doubleclick.net/instream/ad_status.js",a);rg.push(ce(function(){sg||"google_ad_status"in window||($f("//static.doubleclick.net/instream/ad_status.js",a),L("DCLKSTAT",3))},1))}
function ug(){return parseInt(M("DCLKSTAT",0),10)}
;var Ra=r("ytEventsEventsListeners")||{};q("ytEventsEventsListeners",Ra,void 0);var vg=r("ytEventsEventsCounter")||{count:0};q("ytEventsEventsCounter",vg,void 0);function wg(a,b,c,d){d=void 0===d?!1:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return Qa(function(e){return e[0]==a&&e[1]==b&&e[2]==c&&e[4]==!!d})}
function xg(a,b,c){var d;d=void 0===d?!1:d;if(!a||!a.addEventListener&&!a.attachEvent)return"";var e=wg(a,b,c,d);if(e)return e;var e=++vg.count+"",f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document),g;g=f?function(d){d=new kb(d);if(!kf(d.relatedTarget,function(b){return b==a}))return d.currentTarget=a,d.type=b,c.call(a,d)}:function(b){b=new kb(b);
b.currentTarget=a;return c.call(a,b)};
g=nc(g);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),a.addEventListener(b,g,d)):a.attachEvent("on"+b,g);Ra[e]=[a,b,c,g,d];return e}
function yg(a){a&&("string"==typeof a&&(a=[a]),O(a,function(a){if(a in Ra){var b=Ra[a],d=b[0],e=b[1],f=b[3],b=b[4];d.removeEventListener?d.removeEventListener(e,f,b):d.detachEvent&&d.detachEvent("on"+e,f);delete Ra[a]}}))}
;var zg={"X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL","X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"};
function Ag(a,b){b=void 0===b?{}:b;var c=void 0;c=window.location.href;var d=P(a)[1]||null,e=jc(P(a)[3]||null);d&&e?(d=c,c=P(a),d=P(d),c=c[3]==d[3]&&c[1]==d[1]&&c[4]==d[4]):c=e?jc(P(c)[3]||null)==e&&(Number(P(c)[4]||null)||null)==(Number(P(a)[4]||null)||null):!0;for(var f in zg){if((e=d=M(zg[f]))&&!(e=c)){var g=a,e=f,h=M("CORS_HEADER_WHITELIST")||{};e=(g=jc(P(g)[3]||null))?(h=h[g])?0<=Vb(h,e):!1:!0}e&&(b[f]=d)}return b}
function Bg(a,b){var c=M("XSRF_FIELD_NAME",void 0),d;b.headers&&(d=b.headers["Content-Type"]);return!b.qb&&(!jc(P(a)[3]||null)||b.withCredentials||jc(P(a)[3]||null)==document.location.hostname)&&"POST"==b.method&&(!d||"application/x-www-form-urlencoded"==d)&&!(b.D&&b.D[c])}
function Cg(a,b){var c=b.format||"JSON";b.Ka&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var d=M("XSRF_FIELD_NAME",void 0),e=M("XSRF_TOKEN",void 0),f=b.kb;f&&(f[d]&&delete f[d],a=Sc(a,f||{}));var g=b.postBody||"",f=b.D;Bg(a,b)&&(f||(f={}),f[d]=e);f&&u(g)&&(d=Rc(g),Wa(d,f),g=b.wa&&"JSON"==b.wa?JSON.stringify(d):Tc(d));var h=!1,k,m=Dg(a,function(a){if(!h){h=!0;k&&window.clearTimeout(k);var d=tb(a),e=null;if(d||400<=a.status&&
500>a.status)e=Eg(c,a,b.pb);if(d)a:if(204==a.status)d=!0;else{switch(c){case "XML":d=0==parseInt(e&&e.return_code,10);break a;case "RAW":d=!0;break a}d=!!e}var e=e||{},f=b.context||n;d?b.J&&b.J.call(f,a,e):b.onError&&b.onError.call(f,a,e);b.Qa&&b.Qa.call(f,a,e)}},b.method,g,b.headers,b.responseType,b.withCredentials);
b.O&&0<b.timeout&&(k=T(function(){h||(h=!0,m.abort(),window.clearTimeout(k),b.O.call(b.context||n,m))},b.timeout))}
function Eg(a,b,c){var d=null;switch(a){case "JSON":a=b.responseText;b=b.getResponseHeader("Content-Type")||"";a&&0<=b.indexOf("json")&&(d=Ia(a));break;case "XML":if(b=(b=b.responseXML)?Fg(b):null)d={},O(b.getElementsByTagName("*"),function(a){d[a.tagName]=Gg(a)})}c&&Hg(d);
return d}
function Hg(a){if(la(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);if(c){c=b;var d;d=me(a[b]);a[c]=d}else Hg(a[b])}}
function Fg(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function Gg(a){var b="";O(a.childNodes,function(a){b+=a.nodeValue});
return b}
function Ig(a,b){b.method="POST";b.D||(b.D={});Cg(a,b)}
function Dg(a,b,c,d,e,f,g){function h(){4==(k&&"readyState"in k?k.readyState:0)&&b&&nc(b)(k)}
c=void 0===c?"GET":c;d=void 0===d?"":d;var k=sb();if(!k)return null;"onloadend"in k?k.addEventListener("loadend",h,!1):k.onreadystatechange=h;k.open(c,a,!0);f&&(k.responseType=f);g&&(k.withCredentials=!0);c="POST"==c;if(e=Ag(a,e))for(var m in e)k.setRequestHeader(m,e[m]),"content-type"==m.toLowerCase()&&(c=!1);c&&k.setRequestHeader("Content-Type","application/x-www-form-urlencoded");k.send(d);return k}
;var Jg=['video/mp4; codecs="avc1.42001E, mp4a.40.2"','video/webm; codecs="vp8.0, vorbis"'],Kg=['audio/mp4; codecs="mp4a.40.2"'];function Lg(){var a=!!M("WIDGET_ID_ENFORCE"),a=this.f=new Kf(a),b=v(this.ab,this);a.j=b;a.l=null;this.f.channel="widget";if(a=M("WIDGET_ID"))this.f.sessionId=a;this.i=[];this.l=!1;this.j={}}
l=Lg.prototype;l.ab=function(a,b){if("addEventListener"==a&&b){var c=b[0];this.j[c]||"onReady"==c||(this.addEventListener(c,Mg(this,c)),this.j[c]=!0)}else this.Aa(a,b)};
l.Aa=function(){};
function Mg(a,b){return v(function(a){this.sendMessage(b,a)},a)}
l.addEventListener=function(){};
l.Ga=function(){this.l=!0;this.sendMessage("initialDelivery",this.ja());this.sendMessage("onReady");O(this.i,this.za,this);this.i=[]};
l.ja=function(){return null};
function Ng(a,b){a.sendMessage("infoDelivery",b)}
l.za=function(a){this.l?this.f.sendMessage(a):this.i.push(a)};
l.sendMessage=function(a,b){this.za({event:a,info:void 0==b?null:b})};
l.dispose=function(){this.f=null};var Og;if(mg&&!Jc()){var Pg="."+sa.domain;try{for(;2<Pg.split(".").length&&!Jc();)sa.domain=Pg=Pg.substr(Pg.indexOf(".")+1),Kc=window.parent}catch(a){}Jc()||(Kc=window)}Og=Kc;var Qg=new Lc(1,Og);function Rg(){Og.b||(O(Qg.events,Qg.g,Qg),Qg.events.length=0,Qg.b=!1)}
if("complete"==Og.document.readyState)Rg();else if(Qg.b){var Sg=function(){Rg()};
Og.addEventListener?Og.addEventListener("load",Sg,eb?void 0:!1):Og.attachEvent&&Og.attachEvent("onload",Sg)};function Tg(a,b,c,d,e){c={name:c||M("INNERTUBE_CONTEXT_CLIENT_NAME",1),version:d||M("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0)};e=window&&window.yterr||e||!1;if(a&&e&&!(5<=Ug)){e=a.stacktrace;d=a.columnNumber;var f=r("window.location.href");if(u(a))a={message:a,name:"Unknown error",lineNumber:"Not available",fileName:f,stack:"Not available"};else{var g,h,k=!1;try{g=a.lineNumber||a.line||"Not available"}catch(E){g="Not available",k=!0}try{h=a.fileName||a.filename||a.sourceURL||n.$googDebugFname||f}catch(E){h=
"Not available",k=!0}a=!k&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name?a:{message:a.message||"Not available",name:a.name||"UnknownError",lineNumber:g,fileName:h,stack:a.stack||"Not available"}}e=e||a.stack;g=a.lineNumber.toString();isNaN(g)||isNaN(d)||(g=g+":"+d);if(!(Vg[a.message]||0<=e.indexOf("/YouTubeCenter.js")||0<=e.indexOf("/mytube.js"))){h=a.fileName;b={kb:{a:"logerror",t:"jserror",type:a.name,msg:a.message.substr(0,1E3),line:g,level:b||"ERROR"},D:{url:M("PAGE_NAME",window.location.href),
file:h},method:"POST"};e&&(b.D.stack=e);for(var m in c)b.D["client."+m]=c[m];if(m=M("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS",void 0))for(var x in m)b.D[x]=m[x];Cg("/error_204",b);Vg[a.message]=!0;Ug++}}}
var Vg={},Ug=0;function Wg(a){this.b=a||rc()}
Wg.prototype.f=function(){return{context:qc(this.b)}};
Wg.prototype.g=function(a,b,c){M("VISITOR_DATA")||Q(Error("Missing VISITOR_DATA when sending innertube request."));var d={headers:{"Content-Type":"application/json","X-Goog-Visitor-Id":M("VISITOR_DATA","")},D:b,wa:"JSON",O:c.O,J:function(a,b){c.J&&c.J(b)},
onError:function(a,b){if(c.onError)c.onError(b)},
timeout:c.timeout,withCredentials:!0},e=Vc();e&&(d.headers.Authorization=e,d.headers["X-Goog-AuthUser"]=M("SESSION_INDEX",0));var f=this.b.xhrApiaryHost;f.startsWith("http")||(f="//"+f);R("youtubei_for_web")&&(f="");var g=this.b.Oa;g&&(f=g);e&&!f&&(d.headers["x-origin"]=window.location.origin);Ig(""+f+sc(this.b.innertubeApiVersion,a,b)+"?alt=json&key="+this.b.innertubeApiKey,d)};var Xg={},Yg=0;function Zg(a,b){a&&(M("USE_NET_AJAX_FOR_PING_TRANSPORT",!1)?Dg(a,b):$g(a,b))}
function $g(a,b){var c=new Image,d=""+Yg++;Xg[d]=c;c.onload=c.onerror=function(){b&&Xg[d]&&b();delete Xg[d]};
c.src=a}
;function ah(){var a=Ua(bh);return new X(function(b,c){a.J=function(a){tb(a)?b(a):c(new ch("Request failed, status="+a.status,"net.badstatus"))};
a.onError=function(){c(new ch("Unknown request error","net.unknown"))};
a.O=function(){c(new ch("Request timed out","net.timeout"))};
Cg("//googleads.g.doubleclick.net/pagead/id",a)})}
function ch(a,b){D.call(this,a+", errorCode="+b);this.errorCode=b;this.name="PromiseAjaxError"}
aa(ch,D);function dh(a){return(0==a.search("cue")||0==a.search("load"))&&"loadModule"!=a}
function eh(a,b,c){u(a)&&(a={mediaContentUrl:a,startSeconds:b,suggestedQuality:c});b=/\/([ve]|embed)\/([^#?]+)/.exec(a.mediaContentUrl);a.videoId=b&&b[2]?b[2]:null;return fh(a)}
function fh(a,b,c){if(la(a)){b="endSeconds startSeconds mediaContentUrl suggestedQuality videoId two_stage_token".split(" ");c={};for(var d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}return{videoId:a,startSeconds:b,suggestedQuality:c}}
function gh(a,b,c,d){if(la(a)&&!ia(a)){b="playlist list listType index startSeconds suggestedQuality".split(" ");c={};for(d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}c={index:b,startSeconds:c,suggestedQuality:d};u(a)&&16==a.length?c.list="PL"+a:c.playlist=a;return c}
function hh(a){var b=a.video_id||a.videoId;if(u(b)){var c=gg()||{},d=gg()||{};p(void 0)?d[b]=void 0:delete d[b];var e=y()+3E5,f=ig;if(f&&window.JSON){u(d)||(d=JSON.stringify(d,void 0));try{f.set("yt-player-two-stage-token",d,e)}catch(g){f.remove("yt-player-two-stage-token")}}(b=c[b])&&(a.two_stage_token=b)}}
;function ih(){if(null==r("_lact",window)){var a=parseInt(M("LACT"),10),a=isFinite(a)?y()-Math.max(a,0):-1;q("_lact",a,window);-1==a&&jh();xg(document,"keydown",jh);xg(document,"keyup",jh);xg(document,"mousedown",jh);xg(document,"mouseup",jh);Af("page-mouse",jh);Af("page-scroll",jh);Af("page-resize",jh)}}
function jh(){null==r("_lact",window)&&(ih(),r("_lact",window));var a=y();q("_lact",a,window);zf("USER_ACTIVE")}
function kh(){var a=r("_lact",window);return null==a?-1:Math.max(y()-a,0)}
;function lh(a,b,c){I.call(this);this.b=a;this.i=c;this.j=xg(window,"message",v(this.l,this));this.g=new lg(this,a,b);vb(this,w(wb,this.g))}
z(lh,I);lh.prototype.l=function(a){var b;if(b=!this.f)if(b=a.origin==this.i)a:{b=this.b;do{var c;b:{c=a.source;do{if(c==b){c=!0;break b}if(c==c.parent)break;c=c.parent}while(null!=c);c=!1}if(c){b=!0;break a}b=b.opener}while(null!=b);b=!1}if(b&&(a=a.data,u(a))){try{a=Ha(a)}catch(d){return}a.command&&(b=this.g,b.f||b.l("command",a.command,a.data))}};
lh.prototype.o=function(){yg(this.j);this.b=null;lh.A.o.call(this)};function mh(a){D.call(this,a.message||a.description||a.name);this.Pa=a instanceof nh;this.b=a instanceof Pe}
z(mh,D);mh.prototype.name="BiscottiError";function nh(){D.call(this,"Biscotti ID is missing from server")}
z(nh,D);nh.prototype.name="BiscottiMissingError";function oh(a,b){this.f=a;this.b=b}
oh.prototype.then=function(a,b,c){try{if(p(this.f))return a?Me(a.call(c,this.f)):Me(this.f);if(p(this.b)){if(!b)return Ne(this.b);var d=b.call(c,this.b);return!p(d)&&this.b.b?Ne(this.b):Me(d)}throw Error("Invalid Result_ state");}catch(e){return Ne(e)}};
Xa(oh);var bh={format:"RAW",method:"GET",timeout:5E3,withCredentials:!0},ph=null;function qh(){if(!ph){var a=v(rh,n,2),b=ah().then(sh);ph=Oe(b,null,a,void 0)}return ph}
function sh(a){a=a.responseText;if(0!=a.lastIndexOf(")]}'",0))throw new nh;a=JSON.parse(a.substr(4)).id;th(a);ph=new oh(a);uh(18E5,2);return a}
function rh(a,b){var c=new mh(b);th("");ph=new oh(void 0,c);0<a&&uh(12E4,a-1);throw c;}
function uh(a,b){T(function(){var a=v(rh,n,b),a=ah().then(sh,a);Oe(a,null,t,void 0)},a)}
function th(a){q("yt.ads.biscotti.lastId_",a,void 0)}
;function vh(a,b,c,d,e){var f={};f.eventTimeMs=Math.round(d||lb());f[a]=b;R("web_gel_lact")&&(f.context={lastActivityMs:kh()});Qf({endpoint:"log_event",va:f,da:e},c)}
;function wh(a,b,c,d){xh(a,{attachChild:{csn:b,parentVisualElement:qb(c),visualElements:[qb(d)]}},void 0)}
function yh(a,b,c){c=Wb(c,function(a){return qb(a)});
xh(a,{visibilityUpdate:{csn:b,visualElements:c}})}
function xh(a,b,c){b.eventTimeMs=Math.round(lb());b.lactMs=kh();c&&(b.clientData=zh(c));Qf({endpoint:"log_interaction",va:b},a)}
function zh(a){var b={};a.analyticsChannelData&&(b.analyticsDatas=Wb(a.analyticsChannelData,function(a){return{tabName:a.tabName,cardName:a.cardName,isChannelScreen:a.isChannelScreen,insightId:a.insightId,externalChannelId:a.externalChannelId,externalContentOwnerId:a.externalContentOwnerId}}));
return{playbackData:{clientPlaybackNonce:a.clientPlaybackNonce},analyticsChannelData:b,externalLinkData:a.externalLinkData}}
;function Ah(a,b){tc.call(this,b);this.b=a;this.start()}
z(Ah,tc);Ah.prototype.addEventListener=function(a,b){this.b.addEventListener(a,b)};
Ah.prototype.removeEventListener=function(a,b){this.b.removeEventListener(a,b)};
function wc(a,b){switch(a){case "loadVideoById":return b=fh(b),hh(b),[b];case "cueVideoById":return b=fh(b),hh(b),[b];case "loadVideoByPlayerVars":return hh(b),[b];case "cueVideoByPlayerVars":return hh(b),[b];case "loadPlaylist":return b=gh(b),hh(b),[b];case "cuePlaylist":return b=gh(b),hh(b),[b];case "seekTo":return[b.seconds,b.allowSeekAhead];case "playVideoAt":return[b.index];case "setVolume":return[b.volume];case "setPlaybackQuality":return[b.suggestedQuality];case "setPlaybackRate":return[b.suggestedRate];
case "setLoop":return[b.loopPlaylists];case "setShuffle":return[b.shufflePlaylist];case "getOptions":return[b.module];case "getOption":return[b.module,b.option];case "setOption":return[b.module,b.option,b.value];case "handleGlobalKeyDown":return[b.keyCode,b.shiftKey]}return[]}
function xc(a,b){switch(a){case "isMuted":return{muted:b};case "getVolume":return{volume:b};case "getPlaybackRate":return{playbackRate:b};case "getAvailablePlaybackRates":return{availablePlaybackRates:b};case "getVideoLoadedFraction":return{videoLoadedFraction:b};case "getPlayerState":return{playerState:b};case "getCurrentTime":return{currentTime:b};case "getPlaybackQuality":return{playbackQuality:b};case "getAvailableQualityLevels":return{availableQualityLevels:b};case "getDuration":return{duration:b};
case "getVideoUrl":return{videoUrl:b};case "getVideoEmbedCode":return{videoEmbedCode:b};case "getPlaylist":return{playlist:b};case "getPlaylistIndex":return{playlistIndex:b};case "getOptions":return{options:b};case "getOption":return{option:b}}}
Ah.prototype.ia=function(a,b){switch(a){case "onReady":return;case "onStateChange":return{playerState:b};case "onPlaybackQualityChange":return{playbackQuality:b};case "onPlaybackRateChange":return{playbackRate:b};case "onError":return{errorCode:b}}return Ah.A.ia.call(this,a,b)};
Ah.prototype.o=function(){Ah.A.o.call(this);delete this.b};function Bh(a){Lg.call(this);this.b=a;this.g=[];this.addEventListener("onReady",v(this.Wa,this));this.addEventListener("onVideoProgress",v(this.ib,this));this.addEventListener("onVolumeChange",v(this.jb,this));this.addEventListener("onApiChange",v(this.cb,this));this.addEventListener("onPlaybackQualityChange",v(this.fb,this));this.addEventListener("onPlaybackRateChange",v(this.gb,this));this.addEventListener("onStateChange",v(this.hb,this))}
z(Bh,Lg);l=Bh.prototype;l.Aa=function(a,b){if(this.b[a]){b=b||[];if(0<b.length&&dh(a)){var c;c=b;if(la(c[0])&&!ia(c[0]))c=c[0];else{var d={};switch(a){case "loadVideoById":case "cueVideoById":d=fh.apply(window,c);break;case "loadVideoByUrl":case "cueVideoByUrl":d=eh.apply(window,c);break;case "loadPlaylist":case "cuePlaylist":d=gh.apply(window,c)}c=d}hh(c);b.length=1;b[0]=c}this.b[a].apply(this.b,b);dh(a)&&Ng(this,this.ja())}};
l.Wa=function(){var a=v(this.Ga,this);this.f.b=a};
l.addEventListener=function(a,b){this.g.push({eventType:a,listener:b});this.b.addEventListener(a,b)};
l.ja=function(){if(!this.b)return null;var a=this.b.getApiInterface();Yb(a,"getVideoData");for(var b={apiInterface:a},c=0,d=a.length;c<d;c++){var e=a[c],f=e;if(0==f.search("get")||0==f.search("is")){var f=e,g=0;0==f.search("get")?g=3:0==f.search("is")&&(g=2);f=f.charAt(g).toLowerCase()+f.substr(g+1);try{var h=this.b[e]();b[f]=h}catch(k){}}}b.videoData=this.b.getVideoData();b.currentTimeLastUpdated_=y()/1E3;return b};
l.hb=function(a){a={playerState:a,currentTime:this.b.getCurrentTime(),duration:this.b.getDuration(),videoData:this.b.getVideoData(),videoStartBytes:0,videoBytesTotal:this.b.getVideoBytesTotal(),videoLoadedFraction:this.b.getVideoLoadedFraction(),playbackQuality:this.b.getPlaybackQuality(),availableQualityLevels:this.b.getAvailableQualityLevels(),videoUrl:this.b.getVideoUrl(),playlist:this.b.getPlaylist(),playlistIndex:this.b.getPlaylistIndex(),currentTimeLastUpdated_:y()/1E3,playbackRate:this.b.getPlaybackRate(),
mediaReferenceTime:this.b.getMediaReferenceTime()};this.b.getProgressState&&(a.progressState=this.b.getProgressState());this.b.getStoryboardFormat&&(a.storyboardFormat=this.b.getStoryboardFormat());Ng(this,a)};
l.fb=function(a){Ng(this,{playbackQuality:a})};
l.gb=function(a){Ng(this,{playbackRate:a})};
l.cb=function(){for(var a=this.b.getOptions(),b={namespaces:a},c=0,d=a.length;c<d;c++){var e=a[c],f=this.b.getOptions(e);b[e]={options:f};for(var g=0,h=f.length;g<h;g++){var k=f[g],m=this.b.getOption(e,k);b[e][k]=m}}this.sendMessage("apiInfoDelivery",b)};
l.jb=function(){Ng(this,{muted:this.b.isMuted(),volume:this.b.getVolume()})};
l.ib=function(a){a={currentTime:a,videoBytesLoaded:this.b.getVideoBytesLoaded(),videoLoadedFraction:this.b.getVideoLoadedFraction(),currentTimeLastUpdated_:y()/1E3,playbackRate:this.b.getPlaybackRate(),mediaReferenceTime:this.b.getMediaReferenceTime()};this.b.getProgressState&&(a.progressState=this.b.getProgressState());Ng(this,a)};
l.dispose=function(){Bh.A.dispose.call(this);for(var a=0;a<this.g.length;a++){var b=this.g[a];this.b.removeEventListener(b.eventType,b.listener)}this.g=[]};function Ch(){return R("enable_youtubei_innertube")?Wg:nf}
;var Dh=r("yt.logging.latency.usageStats_")||{};q("yt.logging.latency.usageStats_",Dh,void 0);var Eh=0;function Fh(a){Dh[a]=Dh[a]||{count:0};var b=Dh[a];b.count++;b.time=lb();Eh||(Eh=ce(Gh,0));return 10<b.count?(11==b.count&&Tg(Error("CSI data exceeded logging limit with key: "+a)),!0):!1}
function Gh(){var a=lb(),b;for(b in Dh)6E4<a-Dh[b].time&&delete Dh[b];Eh=0}
;function Hh(){var a=M("ROOT_VE_TYPE",void 0);return a?new ob(void 0,a,void 0):null}
function Ih(){var a=M("client-screen-nonce",void 0);a||(a=M("EVENT_ID",void 0));return a}
;function Jh(a){I.call(this);this.b=[];this.g=a||this}
z(Jh,I);function Kh(a,b,c,d){d=nc(v(d,a.g));d={target:b,name:c,ra:d};b.addEventListener(c,d.ra,void 0);a.b.push(d)}
function Lh(a){for(;a.b.length;){var b=a.b.pop();b.target.removeEventListener(b.name,b.ra)}}
Jh.prototype.o=function(){Lh(this);Jh.A.o.call(this)};var Mh={vc:!0},Nh={ad_at:"adType",cpn:"clientPlaybackNonce",csn:"clientScreenNonce",is_nav:"isNavigation",yt_lt:"loadType",yt_ad:"isMonetized",yt_ad_pr:"prerollAllowed",yt_red:"isRedSubscriber",yt_vis:"isVisible",docid:"videoId",plid:"videoId",fmt:"playerInfo.itag"},Oh="ap c cver ei yt_fss yt_li".split(" "),Ph=["isNavigation","isMonetized","prerollAllowed","isRedSubscriber","isVisible"],Qh=v(H.clearResourceTimings||H.webkitClearResourceTimings||H.mozClearResourceTimings||H.msClearResourceTimings||
H.oClearResourceTimings||t,H);
function Rh(a){if("_"!=a[0]){var b=a;H.mark&&(0==b.lastIndexOf("mark_",0)||(b="mark_"+b),H.mark(b))}var b=Sh(),c=lb();b[a]&&(b["_"+a]=b["_"+a]||[b[a]],b["_"+a].push(c));b[a]=c;Th()["tick_"+a]=void 0;lb();R("csi_on_gel")?(b=Uh(),"_start"==a?Fh("baseline_"+b)||vh("latencyActionBaselined",{clientActionNonce:b},Wg,void 0):Fh("tick_"+a+"_"+b)||vh("latencyActionTicked",{tickName:a,clientActionNonce:b},Wg,void 0),a=!0):a=!1;if(a=!a)a=!r("yt.timing.pingSent_");if(a&&(b=M("TIMING_ACTION",void 0),a=Sh(),r("yt.timing.ready_")&&
b&&a._start&&Vh())){b=!0;c=M("TIMING_WAIT",[]);if(c.length)for(var d=0,e=c.length;d<e;++d)if(!(c[d]in a)){b=!1;break}b&&Wh()}}
function Xh(){var a=Yh().info.yt_lt="hot_bg";Th().info_yt_lt=a;if(R("csi_on_gel"))if("yt_lt"in Nh){var b={},c=Nh.yt_lt.split(".");0<=Vb(Ph,c)&&(a=!!a);for(var d=b,e=0;e<c.length-1;e++)d[c[e]]=d[c[e]]||{},d=d[c[e]];b[c[c.length-1]]=a;a=Uh();c=Object.keys(b).join("");Fh("info_"+c+"_"+a)||(b.clientActionNonce=a,vh("latencyActionInfo",b,Wg))}else 0<=Vb(Oh,"yt_lt")||Q(Error("Unknown label yt_lt logged with GEL CSI."))}
function Vh(){var a=Sh();if(a.aft)return a.aft;for(var b=M("TIMING_AFT_KEYS",["ol"]),c=b.length,d=0;d<c;d++){var e=a[b[d]];if(e)return e}return NaN}
function Wh(){if(!R("csi_on_gel")){var a=Sh(),b=Yh().info,c=a._start,d;for(d in a)if(0==d.lastIndexOf("_",0)&&ia(a[d])){var e=d.slice(1);if(e in Mh){var f=Wb(a[d],function(a){return Math.round(a-c)});
b["all_"+e]=f.join()}delete a[d]}e=!!b.ap;if(f=r("yt.timing.reportbuilder_")){if(f=f(a,b,void 0))Zh(f,e),$h(),Qh(),ai(!1,void 0),M("TIMING_ACTION")&&L("PREVIOUS_ACTION",M("TIMING_ACTION")),L("TIMING_ACTION","")}else{var g=M("CSI_SERVICE_NAME","youtube"),f={v:2,s:g,action:M("TIMING_ACTION",void 0)},h=b.srt;void 0!==a.srt&&delete b.srt;if(b.h5jse){var k=window.location.protocol+r("ytplayer.config.assets.js");(k=H.getEntriesByName?H.getEntriesByName(k)[0]:null)?b.h5jse=Math.round(b.h5jse-k.responseEnd):
delete b.h5jse}a.aft=Vh();bi()&&"youtube"==g&&(Xh(),g=a.vc,k=a.pbs,delete a.aft,b.aft=Math.round(k-g));for(var m in b)"_"!=m.charAt(0)&&(f[m]=b[m]);a.ps=lb();b={};m=[];for(d in a)"_"!=d.charAt(0)&&(g=Math.round(a[d]-c),b[d]=g,m.push(d+"."+g));f.rt=m.join(",");(a=r("ytdebug.logTiming"))&&a(f,b);Zh(f,e,void 0);Gf(new de(b.aft+(h||0),void 0))}}}
function Zh(a,b,c){if(R("debug_csi_data")){var d=r("yt.timing.csiData");d||(d=[],q("yt.timing.csiData",d,void 0));d.push({page:location.href,time:new Date,args:a})}var d="",e;for(e in a)d+="&"+e+"="+a[e];a="/csi_204?"+d.substring(1);if(window.navigator&&window.navigator.sendBeacon&&b)try{window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,"")||Zg(a,void 0)}catch(f){Zg(a,void 0)}else Zg(a);ai(!0,c)}
function Uh(){var a=Yh().nonce;if(!a){var b;a:{if(window.crypto&&window.crypto.getRandomValues)try{var c=Array(16),d=new Uint8Array(16);window.crypto.getRandomValues(d);for(a=0;a<c.length;a++)c[a]=d[a];b=c;break a}catch(e){}b=Array(16);for(c=0;16>c;c++){d=y();for(a=0;a<d%23;a++)b[c]=Math.random();b[c]=Math.floor(256*Math.random())}if(Uc)for(c=1,d=0;d<Uc.length;d++)b[c%16]=b[c%16]^b[(c-1)%16]/4^Uc.charCodeAt(d),c++}c=[];for(d=0;d<b.length;d++)c.push("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-_".charAt(b[d]&
63));a=c.join("");Yh().nonce=a}return a}
function Sh(){return Yh().tick}
function Th(){var a=Yh();"gel"in a||(a.gel={});return a.gel}
function Yh(){return r("ytcsi.data_")||$h()}
function $h(){var a={tick:{},info:{}};q("ytcsi.data_",a,void 0);return a}
function ai(a,b){q("yt.timing."+(b||"")+"pingSent_",a,void 0)}
function bi(){var a=Sh(),b=a.pbr,c=a.vc,a=a.pbs;return b&&c&&a&&b<c&&c<a&&1==Yh().info.yt_pvis}
;function ci(a,b){I.call(this);this.w=this.l=a;this.T=b;this.C=!1;this.g={};this.Z=this.S=null;this.U=new Y;vb(this,w(wb,this.U));this.j={};this.L=this.aa=this.i=this.ha=this.b=null;this.W=!1;this.M=this.B=this.H=this.R=null;this.ba={};this.Ca=["onReady"];this.X=new Jh(this);vb(this,w(wb,this.X));this.fa=null;this.oa=NaN;this.Y={};di(this);this.G("onDetailedError",v(this.Ta,this));this.G("onTabOrderChange",v(this.Ea,this));this.G("onTabAnnounce",v(this.pa,this));this.G("WATCH_LATER_VIDEO_ADDED",v(this.Ua,
this));this.G("WATCH_LATER_VIDEO_REMOVED",v(this.Va,this));pe||(this.G("onMouseWheelCapture",v(this.Ra,this)),this.G("onMouseWheelRelease",v(this.Sa,this)));this.G("onAdAnnounce",v(this.pa,this));this.N=new Jh(this);vb(this,w(wb,this.N));this.ga=!1;this.ea=null}
z(ci,I);var ei=["drm.unavailable","fmt.noneavailable","html5.missingapi","html5.unsupportedads","html5.unsupportedlive"];l=ci.prototype;l.na=function(a,b){this.f||(fi(this,a),gi(this,b),this.C&&hi(this))};
function fi(a,b){a.ha=b;a.b=Qb(b);a.i=a.b.attrs.id||a.i;"video-player"==a.i&&(a.i=a.T,a.b.attrs.id=a.T);a.w.id==a.i&&(a.i+="-player",a.b.attrs.id=a.i);a.b.args.enablejsapi="1";a.b.args.playerapiid=a.T;a.aa||(a.aa=ii(a,a.b.args.jsapicallback||"onYouTubePlayerReady"));a.b.args.jsapicallback=null;var c=a.b.attrs.width;c&&(a.w.style.width=Hf(Number(c)||c));if(c=a.b.attrs.height)a.w.style.height=Hf(Number(c)||c)}
l.Ha=function(){return this.ha};
function hi(a){a.b.loaded||(a.b.loaded=!0,"0"!=a.b.args.autoplay?a.g.loadVideoByPlayerVars(a.b.args):a.g.cueVideoByPlayerVars(a.b.args))}
function ji(a){if(!p(a.b.disable.flash)){var b=a.b.disable,c;c=we(ve.getInstance(),a.b.minVersion);b.flash=!c}return!a.b.disable.flash}
function ki(a,b){if((!b||(5!=(Rb[b.errorCode]||5)?0:-1!=ei.indexOf(b.errorCode)))&&ji(a)){var c=li(a);c&&c.stopVideo&&c.stopVideo();var d=a.b;c&&c.getUpdatedConfigurationData&&(c=c.getUpdatedConfigurationData(),d=Pb(c));d.args.autoplay=1;d.args.html5_unavailable="1";fi(a,d);gi(a,"flash")}}
function gi(a,b){if(!a.f){if(!b){var c;if(!(c=!a.b.html5&&ji(a))){if(!p(a.b.disable.html5)){var d;c=!0;void 0!=a.b.args.deviceHasDisplay&&(c=a.b.args.deviceHasDisplay);if(2.2==xe)d=!0;else{a:{var e=c;c=r("yt.player.utils.videoElement_");c||(c=document.createElement("VIDEO"),q("yt.player.utils.videoElement_",c,void 0));try{if(c.canPlayType)for(var e=e?Jg:Kg,f=0;f<e.length;f++)if(c.canPlayType(e[f])){d=null;break a}d="fmt.noneavailable"}catch(g){d="html5.missingapi"}}d=!d}d&&(d=mi(a)||a.b.assets.js);
a.b.disable.html5=!d;d||(a.b.args.html5_unavailable="1")}c=!!a.b.disable.html5}b=c?ji(a)?"flash":"unsupported":"html5"}("flash"==b?a.lb:a.mb).call(a)}}
function mi(a){var b=!0,c=li(a);c&&a.b&&(a=a.b,b=hb(c,"version")==a.assets.js);return b&&!!r("yt.player.Application.create")}
l.mb=function(){if(!this.W){var a=mi(this);if(a&&"html5"==ni(this))this.L="html5",this.C||this.P();else if(oi(this),this.L="html5",a&&this.H)this.l.appendChild(this.H),this.P();else{this.b.loaded=!0;var b=!1;this.R=v(function(){b=!0;var a=this.l,d=Qb(this.b);r("yt.player.Application.create")(a,d);this.P()},this);
this.W=!0;a?this.R():(ag(this.b.assets.js,this.R),cg(this.b.assets.css),pi(this)&&!b&&q("yt.player.Application.create",null,void 0))}}};
l.lb=function(){var a=Qb(this.b);if(!this.B){var b=li(this);b&&(this.B=document.createElement("SPAN"),this.B.tabIndex=0,Kh(this.X,this.B,"focus",this.ta),this.M=document.createElement("SPAN"),this.M.tabIndex=0,Kh(this.X,this.M,"focus",this.ta),b.parentNode&&b.parentNode.insertBefore(this.B,b),b.parentNode&&b.parentNode.insertBefore(this.M,b.nextSibling))}a.attrs.width=a.attrs.width||"100%";a.attrs.height=a.attrs.height||"100%";if("flash"==ni(this))this.L="flash",this.C||this.P();else{oi(this);this.L=
"flash";this.b.loaded=!0;var b=ve.getInstance(),c=(-1<b.i.indexOf("Gnash")&&-1==b.i.indexOf("AVM2")||9==b.b&&1==b.f||9==b.b&&0==b.f&&1==b.g?0:9<=b.b)||-1<navigator.userAgent.indexOf("Sony/COM2")&&!we(b,9,1,58)?a.url:a.urlV9As2;window!=window.top&&document.referrer&&(a.args.framer=document.referrer.substring(0,128));b=this.l;if(c){var b=u(b)?gf(b):b,d=Ua(a.attrs);d.tabindex=0;var e=Ua(a.params);e.flashvars=Tc(a.args);if(mb){d.classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000";e.movie=c;var a=document.createElement("object"),
f;for(f in d)a.setAttribute(f,d[f]);for(var g in e)f=document.createElement("param"),f.setAttribute("name",g),f.setAttribute("value",e[g]),a.appendChild(f)}else{d.type="application/x-shockwave-flash";d.src=c;a=document.createElement("embed");a.setAttribute("name",d.id);for(var h in d)a.setAttribute(h,d[h]);for(var k in e)a.setAttribute(k,e[k])}g=document.createElement("div");g.appendChild(a);b.innerHTML=g.innerHTML}this.P()}};
l.ta=function(){li(this).focus()};
function li(a){var b=gf(a.i);!b&&a.w&&a.w.querySelector&&(b=a.w.querySelector("#"+a.i));return b}
l.P=function(){if(!this.f){var a=li(this),b=!1;try{a&&a.getApiInterface&&a.getApiInterface()&&(b=!0)}catch(f){}if(b)if(this.W=!1,a.isNotServable&&a.isNotServable(this.b.args.video_id))ki(this);else{di(this);this.C=!0;a=li(this);a.addEventListener&&(this.S=qi(this,a,"addEventListener"));a.removeEventListener&&(this.Z=qi(this,a,"removeEventListener"));for(var b=a.getApiInterface(),b=b.concat(a.getInternalApiInterface()),c=0;c<b.length;c++){var d=b[c];this.g[d]||(this.g[d]=qi(this,a,d))}for(var e in this.j)this.S(e,
this.j[e]);hi(this);this.aa&&this.aa(this.g);this.U.V("onReady",this.g)}else this.oa=T(v(this.P,this),50)}};
function qi(a,b,c){var d=b[c];return function(){try{return a.fa=null,d.apply(b,arguments)}catch(e){"Bad NPObject as private data!"!=e.message&&"sendAbandonmentPing"!=c&&(e.message+=" ("+c+")",a.fa=e,Q(e,"WARNING"))}}}
function di(a){a.C=!1;if(a.Z)for(var b in a.j)a.Z(b,a.j[b]);for(var c in a.Y)window.clearTimeout(parseInt(c,10));a.Y={};a.S=null;a.Z=null;for(var d in a.g)a.g[d]=null;a.g.addEventListener=v(a.G,a);a.g.removeEventListener=v(a.bb,a);a.g.destroy=v(a.dispose,a);a.g.getLastError=v(a.Ia,a);a.g.getPlayerType=v(a.Ja,a);a.g.getCurrentVideoConfig=v(a.Ha,a);a.g.loadNewVideoConfig=v(a.na,a);a.g.isReady=v(a.nb,a)}
l.nb=function(){return this.C};
l.G=function(a,b){if(!this.f){var c=ii(this,b);if(c){if(!(0<=Vb(this.Ca,a)||this.j[a])){var d=ri(this,a);this.S&&this.S(a,d)}this.U.subscribe(a,c);"onReady"==a&&this.C&&T(w(c,this.g),0)}}};
l.bb=function(a,b){if(!this.f){var c=ii(this,b);c&&yc(this.U,a,c)}};
function ii(a,b){var c=b;if("string"==typeof b){if(a.ba[b])return a.ba[b];c=function(){var a=r(b);a&&a.apply(n,arguments)};
a.ba[b]=c}return c?c:null}
function ri(a,b){var c="ytPlayer"+b+a.T;a.j[b]=c;n[c]=function(c){var d=T(function(){if(!a.f){a.U.V(b,c);var e=a.Y,g=String(d);g in e&&delete e[g]}},0);
Ta(a.Y,String(d))};
return c}
l.Ea=function(a){a=a?jf:hf;for(var b=a(document.activeElement);b&&(1!=b.nodeType||b==this.B||b==this.M||(b.focus(),b!=document.activeElement));)b=a(b)};
l.pa=function(a){zf("a11y-announce",a)};
l.Ta=function(a){ki(this,a)};
l.Ua=function(a){zf("WATCH_LATER_VIDEO_ADDED",a)};
l.Va=function(a){zf("WATCH_LATER_VIDEO_REMOVED",a)};
l.Ra=function(){if(!this.ga){if(te){var a=document,b=a.scrollingElement?a.scrollingElement:Od||"CSS1Compat"!=a.compatMode?a.body||a.documentElement:a.documentElement,a=a.parentWindow||a.defaultView;this.ea=V&&W("10")&&a.pageYOffset!=b.scrollTop?new Kd(b.scrollLeft,b.scrollTop):new Kd(a.pageXOffset||b.scrollLeft,a.pageYOffset||b.scrollTop);Kh(this.N,window,"scroll",this.Ya);Kh(this.N,this.l,"touchmove",this.Xa)}else Kh(this.N,this.l,"mousewheel",this.ua),Kh(this.N,this.l,"wheel",this.ua);this.ga=!0}};
l.Sa=function(){Lh(this.N);this.ga=!1};
l.ua=function(a){a=a||window.event;a.returnValue=!1;a.preventDefault&&a.preventDefault()};
l.Ya=function(){window.scrollTo(this.ea.b,this.ea.f)};
l.Xa=function(a){a.preventDefault()};
l.Ja=function(){return this.L||ni(this)};
l.Ia=function(){return this.fa};
function ni(a){return(a=li(a))?"div"==a.tagName.toLowerCase()?"html5":"flash":null}
function oi(a){Rh("dcp");a.cancel();di(a);a.L=null;a.b&&(a.b.loaded=!1);var b=li(a);"html5"==ni(a)?mi(a)||!pi(a)?a.H=b:(b&&b.destroy&&b.destroy(),a.H=null):b&&b.destroy&&b.destroy();for(var b=a.l,c;c=b.firstChild;)b.removeChild(c);Lh(a.X);a.B=null;a.M=null}
l.cancel=function(){this.R&&$f(this.b.assets.js,this.R);window.clearTimeout(this.oa);this.W=!1};
l.o=function(){oi(this);if(this.H&&this.b)try{this.H.destroy()}catch(b){Q(b)}this.ba=null;for(var a in this.j)n[this.j[a]]=null;this.ha=this.b=this.g=null;delete this.l;delete this.w;ci.A.o.call(this)};
function pi(a){return a.b&&a.b.args&&a.b.args.fflags?-1!=a.b.args.fflags.indexOf("player_destroy_old_version=true"):!1}
;function si(a,b,c){b=void 0===b?{}:b;c=void 0===c?!1:c;var d=M("EVENT_ID");d&&(b.ei||(b.ei=d));if(b){var d=a,e=M("VALID_SESSION_TEMPDATA_DOMAINS",[]),f=jc(P(window.location.href)[3]||null);f&&e.push(f);f=jc(P(d)[3]||null);if(0<=Vb(e,f)||!f&&0==d.lastIndexOf("/",0))if(R("autoescape_tempdata_url")&&(e=document.createElement("a"),Fe(e,d),d=e.href),d){var f=P(d),d=f[5],e=f[6],f=f[7],g="";d&&(g+=d);e&&(g+="?"+e);f&&(g+="#"+f);d=g;e=d.indexOf("#");if(d=0>e?d:d.substr(0,e)){if(b.itct||b.ved)b.csn=b.csn||
Ih();d="ST-"+db(d).toString(36);e=b?Tc(b):"";Bb.set(""+d,e,5,"/","youtube.com");b&&(b=b.itct||b.ved,d=r("yt.logging.screen.storeParentElement"),b&&d&&d(new ob(b)))}}}if(c)return!1;if((window.ytspf||{}).enabled)spf.navigate(a);else{var h,k,m;h=void 0===h?{}:h;k=void 0===k?"":k;m=void 0===m?window:m;c=m.location;a=kc(mc([a],h))+k;a=a instanceof zd?a:Dd(a);c.href=Bd(a)}return!0}
;function ti(a){a.Pa&&ui("")}
function vi(a){!a||r("yt.ads.biscotti.getId_")||r("yt.www.ads.biscotti.getId_")||q("yt.ads.biscotti.getId_",qh,void 0);try{var b;try{var c=r("yt.ads.biscotti.getId_")||r("yt.www.ads.biscotti.getId_");b=c?c():qh()}catch(d){b=Ne(d)}b.then(ui,ti);T(vi,18E5)}catch(d){Q(d)}}
var wi=0;
function ui(a){var b;a:{try{b=window.top.location.href}catch(F){b=2;break a}b=null!=b?b==window.document.location.href?0:1:2}b={dt:ta,flash:Hb||"0",frm:b};b.u_tz=-(new Date).getTimezoneOffset();var c;try{c=A.history.length}catch(F){c=0}b.u_his=c;b.u_java=!!A.navigator&&"unknown"!==typeof A.navigator.javaEnabled&&!!A.navigator.javaEnabled&&A.navigator.javaEnabled();A.screen&&(b.u_h=A.screen.height,b.u_w=A.screen.width,b.u_ah=A.screen.availHeight,b.u_aw=A.screen.availWidth,b.u_cd=A.screen.colorDepth);A.navigator&&
A.navigator.plugins&&(b.u_nplug=A.navigator.plugins.length);A.navigator&&A.navigator.mimeTypes&&(b.u_nmime=A.navigator.mimeTypes.length);b.bid=a;b.ca_type=Gb?"flash":"image";if(R("enable_server_side_search_pyv")||R("enable_server_side_mweb_search_pyv")){var d,e;a=window;try{e=a.screenX;var f=a.screenY}catch(F){}try{var g=a.outerWidth,h=a.outerHeight}catch(F){}try{var k=a.innerWidth,m=a.innerHeight}catch(F){}e=[a.screenLeft,a.screenTop,e,f,a.screen?a.screen.availWidth:void 0,a.screen?a.screen.availTop:
void 0,g,h,k,m];f=window.top||A;try{var x;if(f.document&&!f.document.body)x=new Pa(-1,-1);else{var E=(f||window).document,Z="CSS1Compat"==E.compatMode?E.documentElement:E.body;x=(new Pa(Z.clientWidth,Z.clientHeight)).round()}d=x}catch(F){d=new Pa(-12245933,-12245933)}x=0;window.SVGElement&&document.createElementNS&&(x|=1);d={bc:x,bih:d.height,biw:d.width,brdim:e.join(),vis:{visible:1,hidden:2,prerender:3,preview:4}[sa.webkitVisibilityState||sa.mozVisibilityState||sa.visibilityState||""]||0,wgl:!!A.WebGLRenderingContext};
for(var na in d)b[na]=d[na]}b.bsq=wi++;Ig("//www.youtube.com/ad_data_204",{Ka:!1,D:b})}
;var xi={},yi="player_uid_"+(1E9*Math.random()>>>0);function zi(a,b){a=u(a)?gf(a):a;b=Pb(b);var c=yi+"_"+ma(a),d=xi[c];if(d)return d.na(b),d.g;d=new ci(a,c);xi[c]=d;zf("player-added",d.g);vb(d,w(Ai,d));T(function(){d.na(b)},0);
return d.g}
function Ai(a){xi[a.T]=null}
function Bi(a){a=gf(a);if(!a)return null;var b=yi+"_"+ma(a),c=xi[b];c||(c=new ci(a,b),xi[b]=c);return c.g}
;var Ci=r("yt.abuse.botguardInitialized")||pg;q("yt.abuse.botguardInitialized",Ci,void 0);var Di=r("yt.abuse.invokeBotguard")||qg;q("yt.abuse.invokeBotguard",Di,void 0);var Ei=r("yt.abuse.dclkstatus.checkDclkStatus")||ug;q("yt.abuse.dclkstatus.checkDclkStatus",Ei,void 0);var Fi=r("yt.player.exports.navigate")||si;q("yt.player.exports.navigate",Fi,void 0);var Gi=r("yt.player.embed")||zi;q("yt.player.embed",Gi,void 0);var Hi=r("yt.player.getPlayerByElement")||Bi;q("yt.player.getPlayerByElement",Hi,void 0);
var Ii=r("yt.util.activity.init")||ih;q("yt.util.activity.init",Ii,void 0);var Ji=r("yt.util.activity.getTimeSinceActive")||kh;q("yt.util.activity.getTimeSinceActive",Ji,void 0);var Ki=r("yt.util.activity.setTimestamp")||jh;q("yt.util.activity.setTimestamp",Ki,void 0);var Li=null,Mi=null,Ni=null,Oi={};function Pi(a){vh(a.payload_name,a.payload,R("enable_youtubei_innertube")?Wg:nf,void 0,void 0)}
function Qi(a){var b=a.id;a=a.ve_type;var c=pb++;a=new ob(void 0,a,c,void 0);Oi[b]=a;b=Ih();c=Hh();b&&c&&wh(Ch(),b,c,a)}
function Ri(a){var b=a.csn;a=a.root_ve_type;if(b&&a&&(L("client-screen-nonce",b),L("ROOT_VE_TYPE",a),a=Hh()))for(var c in Oi){var d=b,e=a,f=Oi[c];wh(Ch(),d,e,f)}}
function Si(a){Oi[a.id]=new ob(a.tracking_params)}
function Ti(a){var b=Ih();a=Oi[a.id];if(b&&a){var c=Ch();xh(c,{click:{csn:b,visualElement:qb(a)}},void 0)}}
function Ui(a){a=a.ids;var b=Ih();if(b){for(var c=[],d=0;d<a.length;d++){var e=Oi[a[d]];e&&c.push(e)}c.length&&yh(Ch(),b,c)}}
function Vi(){var a=Li;a&&a.startInteractionLogging&&a.startInteractionLogging()}
;q("yt.setConfig",L,void 0);q("yt.config.set",L,void 0);q("yt.setMsg",pc,void 0);q("yt.msgs.set",pc,void 0);q("yt.logging.errors.log",Tg,void 0);
q("writeEmbed",function(){var a=M("PLAYER_CONFIG",void 0);"1"!=a.privembed&&vi(!0);"gvn"==a.args.ps&&(document.body.style.backgroundColor="transparent");var b=document.referrer,c=M("POST_MESSAGE_ORIGIN");window!=window.top&&b&&b!=document.URL&&(a.args.loaderUrl=b);M("LIGHTWEIGHT_AUTOPLAY")&&(a.args.autoplay="1");a.args.autoplay&&hh(a.args);Li=a=zi("player",a);a.addEventListener("onScreenChanged",Ri);a.addEventListener("onLogClientVeCreated",Qi);a.addEventListener("onLogServerVeCreated",Si);a.addEventListener("onLogToGel",
Pi);a.addEventListener("onLogVeClicked",Ti);a.addEventListener("onLogVesShown",Ui);a.addEventListener("onReady",Vi);b=M("POST_MESSAGE_ID","player");M("ENABLE_JS_API")?Ni=new Bh(a):M("ENABLE_POST_API")&&u(b)&&u(c)&&(Mi=new lh(window.parent,b,c),Ni=new Ah(a,Mi.g));M("BG_P")&&(M("BG_I")||M("BG_IU"))&&og();tg()},void 0);
q("yt.www.watch.ads.restrictioncookie.spr",function(a){Zg(a+"mac_204?action_fcts=1");return!0},void 0);
var Wi=nc(function(){Rh("ol");var a=Mc.getInstance(),b=1<window.devicePixelRatio;if(!!((Pc("f"+(Math.floor(119/31)+1))||0)&67108864)!=b){var c="f"+(Math.floor(119/31)+1),d=Pc(c)||0,d=b?d|67108864:d&-67108865;0==d?delete S[c]:S[c]=d.toString(16).toString();var a=a.b,b=[],e;for(e in S)b.push(e+"="+escape(S[e]));Bb.set(""+a,b.join("&"),63072E3,"/","youtube.com")}}),Xi=nc(function(){var a=Li;
a&&a.sendAbandonmentPing&&a.sendAbandonmentPing();M("PL_ATT")&&(ng=null);for(var a=0,b=rg.length;a<b;a++){var c=rg[a];if(!isNaN(c)){var d=r("yt.scheduler.instance.cancelJob");d?d(c):window.clearTimeout(c)}}rg.length=0;a=Xf("//static.doubleclick.net/instream/ad_status.js");if(b=document.getElementById(a))yf(a),b.parentNode.removeChild(b);sg=!1;L("DCLKSTAT",0);xb(Ni,Mi);if(a=Li)a.removeEventListener("onScreenChanged",Ri),a.removeEventListener("onLogClientVeCreated",Qi),a.removeEventListener("onLogServerVeCreated",
Si),a.removeEventListener("onLogToGel",Pi),a.removeEventListener("onLogVeClicked",Ti),a.removeEventListener("onLogVesShown",Ui),a.removeEventListener("onReady",Vi),a.destroy();Oi={}});
window.addEventListener?(window.addEventListener("load",Wi),window.addEventListener("unload",Xi)):window.attachEvent&&(window.attachEvent("onload",Wi),window.attachEvent("onunload",Xi));}).call(this);
