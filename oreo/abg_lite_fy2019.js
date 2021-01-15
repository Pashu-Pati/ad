(function(){/* 
 
 Copyright The Closure Library Authors. 
 SPDX-License-Identifier: Apache-2.0 
*/ 
'use strict';var l=this||self,aa=/^[\w+/_-]+[=]{0,2}$/,n=null;function ba(a){return(a=a.querySelector&&a.querySelector("script[nonce]"))&&(a=a.nonce||a.getAttribute("nonce"))&&aa.test(a)?a:""}function ca(){}var p="closure_uid_"+(1E9*Math.random()>>>0),da=0; 
function ea(a,b){function c(){}c.prototype=b.prototype;a.W=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.V=function(d,e,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[e].apply(d,g)}}function q(a){return a};function fa(a){let b=!1,c;return function(){b||(c=a(),b=!0);return c}};var r;var u=class{constructor(a,b){this.g=b===ha?a:""}},ha={};function ia(a){ia[" "](a);return a}ia[" "]=ca;function ja(){}var ka="function"==typeof Uint8Array;function la(a,b,c){a.i=null;b||(b=[]);a.o=void 0;a.j=-1;a.g=b;a:{if(b=a.g.length){--b;var d=a.g[b];if(!(null===d||"object"!=typeof d||Array.isArray(d)||ka&&d instanceof Uint8Array)){a.l=b-a.j;a.h=d;break a}}a.l=Number.MAX_VALUE}a.m={};if(c)for(b=0;b<c.length;b++)if(d=c[b],d<a.l)d+=a.j,a.g[d]=a.g[d]||v;else{var e=a.l+a.j;a.g[e]||(a.h=a.g[e]={});a.h[d]=a.h[d]||v}}var v=[]; 
function w(a,b){if(b<a.l){b+=a.j;var c=a.g[b];return c!==v?c:a.g[b]=[]}if(a.h)return c=a.h[b],c===v?a.h[b]=[]:c}function ma(a,b){a=w(a,b);return null==a?0:a}function A(a,b){a=w(a,b);return null==a?"":a}function B(a,b){a=w(a,b);a=null==a?a:!!a;return null==a?!1:a}function na(a){var b=ra;a.i||(a.i={});if(!a.i[1]){var c=w(a,1);c&&(a.i[1]=new b(c))}return a.i[1]};function ra(a){la(this,a,sa)}ea(ra,ja);var sa=[28];function ta(a){la(this,a,ua)}ea(ta,ja);var ua=[21];class va{constructor(a,b){this.error=a;this.context=b.context;this.msg=b.message||"";this.id=b.id||"jserror";this.meta={}}};var wa={passive:!0},xa=fa(function(){let a=!1;try{const b=Object.defineProperty({},"passive",{get:function(){a=!0}});l.addEventListener("test",null,b)}catch(b){}return a});function E(a,b,c,d){if(a.addEventListener){var e=a.addEventListener;d=d?d.passive&&xa()?d:d.capture||!1:!1;e.call(a,b,c,d)}};function F(a){var b=document;return"string"===typeof a?b.getElementById(a):a}function ya(a){var b=document;b.getElementsByClassName?a=b.getElementsByClassName(a)[0]:(b=document,a=b.querySelectorAll&&b.querySelector&&a?b.querySelector(a?"."+a:""):za(b,a)[0]||null);return a||null} 
function za(a,b){var c,d;if(a.querySelectorAll&&a.querySelector&&b)return a.querySelectorAll(b?"."+b:"");if(b&&a.getElementsByClassName){var e=a.getElementsByClassName(b);return e}e=a.getElementsByTagName("*");if(b){var f={};for(c=d=0;a=e[c];c++){var g=a.className,h;if(h="function"==typeof g.split)h=0<=Array.prototype.indexOf.call(g.split(/\s+/),b,void 0);h&&(f[d++]=a)}f.length=d;return f}return e}function Aa(a){a&&a.parentNode&&a.parentNode.removeChild(a)};var Ba=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function G(a){try{var b;if(b=!!a&&null!=a.location.href)a:{try{ia(a.foo);b=!0;break a}catch(c){}b=!1}return b}catch(c){return!1}}function Ca(a,b){if(a)for(const c in a)Object.prototype.hasOwnProperty.call(a,c)&&b.call(void 0,a[c],c,a)};function Da(a,b){a.google_image_requests||(a.google_image_requests=[]);const c=a.document.createElement("img");c.src=b;a.google_image_requests.push(c)};let Ea=0;function Fa(a=null){return a&&"60"===a.getAttribute("data-jc")?a:document.querySelector('[data-jc="60"]')} 
function Ga(){if(!(.01<Math.random())){var a=(a=Fa(document.currentScript))&&a.getAttribute("data-jc-version")||"unknown";a=`https://${"pagead2.googlesyndication.com"}/pagead/gen_204?id=jca&jc=${60}&version=${a}&sample=${.01}`;var b=window,c;if(c=b.navigator)c=b.navigator.userAgent,c=/Chrome/.test(c)&&!/Edge/.test(c)?!0:!1;c&&b.navigator.sendBeacon?b.navigator.sendBeacon(a):Da(b,a)}};var H=document,J=window;function Ha(a){return"string"==typeof a.className?a.className:a.getAttribute&&a.getAttribute("class")||""}function Ia(a,b){a.classList?b=a.classList.contains(b):(a=a.classList?a.classList:Ha(a).match(/\S+/g)||[],b=0<=Array.prototype.indexOf.call(a,b,void 0));return b}function K(a,b){if(a.classList)a.classList.add(b);else if(!Ia(a,b)){var c=Ha(a);b=c+(0<c.length?" "+b:b);"string"==typeof a.className?a.className=b:a.setAttribute&&a.setAttribute("class",b)}};class Ja{constructor(a){this.g=(this.serializedAttributionData=a)?new ta(a):null;this.isMutableImpression=null!=w(this.g,1)&&!!B(na(this.g),33);A(this.g,30);this.S=!!B(this.g,11);this.hasUserFeedbackData=!!this.g&&null!=w(this.g,1);this.K=!!B(this.g,4);this.N=!!B(this.g,6);this.J=!!B(this.g,13);ma(this.g,8);this.creativeIndexSuffix=1<ma(this.g,8)?ma(this.g,7).toString():"";this.T=!!B(this.g,17);this.P=!!B(this.g,18);this.I=!!B(this.g,14);this.enableMultiplexThirdPartyAttribution=!!B(this.g,32);this.B= 
!!B(this.g,15);this.U=!!B(this.g,31);this.O=1==B(this.g,9);this.openAttributionInline=1==B(this.g,10);this.isMobileDevice=!!B(this.g,12);this.R=null;this.M=(a=H.querySelector("[data-slide]"))?"true"===a.getAttribute("data-slide"):!1;(this.D=""!==this.creativeIndexSuffix)&&void 0===J.goog_multislot_cache&&(J.goog_multislot_cache={});if(this.D&&!this.M){if(a=J.goog_multislot_cache.hd,void 0===a){a=!1;var b=H.querySelector("[data-dim]");if(b)if(b=b.getBoundingClientRect(),150<=b.right-b.left&&150<=b.bottom- 
b.top)a=!1;else{var c=document.body.getBoundingClientRect();150>(1>=Math.abs(c.left-b.left)&&1>=Math.abs(c.right-b.right)?b.bottom-b.top:b.right-b.left)&&(a=!0)}else a=!1;window.goog_multislot_cache.hd=a}}else a=!1;this.C=a;this.u=F("abgcp"+this.creativeIndexSuffix);this.s=F("abgc"+this.creativeIndexSuffix);this.h=F("abgs"+this.creativeIndexSuffix);F("abgl"+this.creativeIndexSuffix);this.o=F("abgb"+this.creativeIndexSuffix);this.A=F("abgac"+this.creativeIndexSuffix);F("mute_panel"+this.creativeIndexSuffix); 
this.v=ya("goog_delegate_attribution"+this.creativeIndexSuffix);this.isDelegateAttributionActive=!!this.v&&!!this.I&&!ya("goog_delegate_disabled")&&!this.B;if(this.h)a:{a=this.h;b="A";c=a.childNodes;for(let d=0;d<c.length;d++){const e=c.item(d);if("undefined"!=typeof e.tagName&&e.tagName.toUpperCase()==b){a=e;break a}}}else a=null;this.j=a;this.l=this.isDelegateAttributionActive?this.v:F("cbb"+this.creativeIndexSuffix);this.L=this.C?"0"===this.creativeIndexSuffix:!0;this.enableDelegateDismissableMenu= 
!!this.l&&Ia(this.l,"goog_dismissable_menu");this.m=null;this.F=0;this.i=this.isDelegateAttributionActive?this.v:this.N&&this.u?this.u:this.s;this.H=!!B(this.g,19);this.adbadgeEnabled=!!B(this.g,24);this.enableNativeJakeUi=!!B(this.g,27)}};class Ka{constructor(a,b,c){if(!a)throw Error("bad conv util ctor args");this.h=a;this.g=c}};var La={};function Ma(){if(La!==La)throw Error("Bad secret");};function Na(){var a="undefined"!==typeof window?window.trustedTypes:void 0;return null!==a&&void 0!==a?a:null};var Oa,Pa=class{};class Qa extends Pa{constructor(){var a=null!==Ra&&void 0!==Ra?Ra:"";super();Ma();this.g=a}toString(){return this.g.toString()}}var Ra=null===(Oa=Na())||void 0===Oa?void 0:Oa.emptyHTML;new Qa;var Sa,Ta=class{};class Ya extends Ta{constructor(){var a=null!==Za&&void 0!==Za?Za:"";super();Ma();this.g=a}toString(){return this.g.toString()}}var Za=null===(Sa=Na())||void 0===Sa?void 0:Sa.emptyScript;new Ya;var $a=class{};class ab extends $a{constructor(a){super();Ma();this.g=a}toString(){return this.g}};new ab("about:blank");new ab("about:invalid#zTSz");function bb(){cb();if(void 0===r){var a=null;var b=l.trustedTypes;if(b&&b.createPolicy){try{a=b.createPolicy("goog#html",{createHTML:q,createScript:q,createScriptURL:q})}catch(c){l.console&&l.console.error(c.message)}r=a}else r=a}a=(a=r)?a.createScriptURL("https://pagead2.googlesyndication.com/pagead/js/r20201203/r20110914/abg_survey.js"):"https://pagead2.googlesyndication.com/pagead/js/r20201203/r20110914/abg_survey.js"; 
return new u(a,ha)}var cb=ca;var db=(a,b)=>{if(a)for(let c in a)Object.prototype.hasOwnProperty.call(a,c)&&b.call(void 0,a[c],c,a)},eb=!!window.google_async_iframe_id;let L=eb&&window.parent||window;var O=(a,b)=>{a&&db(b,(c,d)=>{a.style[d]=c})};const fb=/^https?:\/\/(\w|-)+\.cdn\.ampproject\.(net|org)(\?|\/|$)/;var gb=class{constructor(a,b){this.g=a;this.h=b}},hb=class{constructor(a,b){this.url=a;this.G=!!b;this.depth=null}};function P(a,b){const c={};c[a]=b;return[c]}function ib(a,b,c,d,e){const f=[];Ca(a,function(g,h){(g=jb(g,b,c,d,e))&&f.push(h+"="+g)});return f.join(b)} 
function jb(a,b,c,d,e){if(null==a)return"";b=b||"&";c=c||",$";"string"==typeof c&&(c=c.split(""));if(a instanceof Array){if(d=d||0,d<c.length){const f=[];for(let g=0;g<a.length;g++)f.push(jb(a[g],b,c,d+1,e));return f.join(c[d])}}else if("object"==typeof a)return e=e||0,2>e?encodeURIComponent(ib(a,b,c,d,e+1)):"...";return encodeURIComponent(String(a))}function kb(a){let b=1;for(const c in a.h)b=c.length>b?c.length:b;return 3997-b-a.i.length-1} 
function lb(a,b,c){b=b+"//pagead2.googlesyndication.com"+c;let d=kb(a)-c.length;if(0>d)return"";a.g.sort(function(f,g){return f-g});c=null;let e="";for(let f=0;f<a.g.length;f++){const g=a.g[f],h=a.h[g];for(let m=0;m<h.length;m++){if(!d){c=null==c?g:c;break}let k=ib(h[m],a.i,",$");if(k){k=e+k;if(d>=k.length){d-=k.length;b+=k;e=a.i;break}c=null==c?g:c}}}a="";null!=c&&(a=e+"trn="+c);return b+a}class mb{constructor(){this.i="&";this.h={};this.j=0;this.g=[]}};function nb(a,b,c,d,e){if((d?a.g:Math.random())<(e||.01))try{let f;c instanceof mb?f=c:(f=new mb,Ca(c,(h,m)=>{var k=f,t=k.j++;h=P(m,h);k.g.push(t);k.h[t]=h}));const g=lb(f,a.h,"/pagead/gen_204?id="+b+"&");g&&Da(l,g)}catch(f){}}class ob{constructor(){this.h="http:"===J.location.protocol?"http:":"https:";this.g=Math.random()}};let Q=null;var pb=()=>{const a=l.performance;return a&&a.now&&a.timing?Math.floor(a.now()+a.timing.navigationStart):Date.now()},qb=()=>{const a=l.performance;return a&&a.now?a.now():null};class rb{constructor(a,b){var c=qb()||pb();this.label=a;this.type=b;this.value=c;this.duration=0;this.uniqueId=Math.random();this.slotId=void 0}};const R=l.performance,sb=!!(R&&R.mark&&R.measure&&R.clearMarks),S=fa(()=>{var a;if(a=sb){var b;if(null===Q){Q="";try{a="";try{a=l.top.location.hash}catch(c){a=l.location.hash}a&&(Q=(b=a.match(/\bdeid=([\d,]+)/))?b[1]:"")}catch(c){}}b=Q;a=!!b.indexOf&&0<=b.indexOf("1337")}return a});function tb(a){a&&R&&S()&&(R.clearMarks(`goog_${a.label}_${a.uniqueId}_start`),R.clearMarks(`goog_${a.label}_${a.uniqueId}_end`))} 
class ub{constructor(){var a=T;this.h=[];this.i=a||l;let b=null;a&&(a.google_js_reporting_queue=a.google_js_reporting_queue||[],this.h=a.google_js_reporting_queue,b=a.google_measure_js_timing);this.g=S()||(null!=b?b:1>Math.random())}start(a,b){if(!this.g)return null;a=new rb(a,b);b=`goog_${a.label}_${a.uniqueId}_start`;R&&S()&&R.mark(b);return a}};function vb(a){let b=a.toString();a.name&&-1==b.indexOf(a.name)&&(b+=": "+a.name);a.message&&-1==b.indexOf(a.message)&&(b+=": "+a.message);if(a.stack){a=a.stack;try{-1==a.indexOf(b)&&(a=b+"\n"+a);let c;for(;a!=c;)c=a,a=a.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/,"$1");b=a.replace(/\n */g,"\n")}catch(c){}}return b} 
function wb(a,b,c){let d,e;try{if(a.g&&a.g.g){e=a.g.start(b.toString(),3);d=c();var f=a.g;c=e;if(f.g&&"number"===typeof c.value){c.duration=(qb()||pb())-c.value;var g=`goog_${c.label}_${c.uniqueId}_end`;R&&S()&&R.mark(g);!f.g||2048<f.h.length||f.h.push(c)}}else d=c()}catch(h){f=!0;try{tb(e),f=a.m(b,new va(h,{message:vb(h)}),void 0,void 0)}catch(m){a.j(217,m)}if(!f)throw h;}return d}function xb(a,b){var c=U;return(...d)=>wb(c,a,()=>b.apply(void 0,d))} 
class yb{constructor(a=null){this.l=zb;this.h=null;this.m=this.j;this.g=a;this.i=!1}j(a,b,c,d,e){e=e||"jserror";let f;try{const x=new mb;var g=x;g.g.push(1);g.h[1]=P("context",a);b.error&&b.meta&&b.id||(b=new va(b,{message:vb(b)}));if(b.msg){g=x;var h=b.msg.substring(0,512);g.g.push(2);g.h[2]=P("msg",h)}var m=b.meta||{};b=m;if(this.h)try{this.h(b)}catch(I){}if(d)try{d(b)}catch(I){}d=x;m=[m];d.g.push(3);d.h[3]=m;{d=l;m=[];b=null;do{var k=d;if(G(k)){var t=k.location.href;b=k.document&&k.document.referrer|| 
null}else t=b,b=null;m.push(new hb(t||""));try{d=k.parent}catch(M){d=null}}while(d&&k!=d);for(let M=0,Ua=m.length-1;M<=Ua;++M)m[M].depth=Ua-M;k=l;if(k.location&&k.location.ancestorOrigins&&k.location.ancestorOrigins.length==m.length-1)for(t=1;t<m.length;++t){var C=m[t];C.url||(C.url=k.location.ancestorOrigins[t-1]||"",C.G=!0)}var y=m;let I=new hb(l.location.href,!1);k=null;const oa=y.length-1;for(C=oa;0<=C;--C){var z=y[C];!k&&fb.test(z.url)&&(k=z);if(z.url&&!z.G){I=z;break}}z=null;const Hb=y.length&& 
y[oa].url;0!=I.depth&&Hb&&(z=y[oa]);f=new gb(I,z)}if(f.h){y=x;var D=f.h.url||"";y.g.push(4);y.h[4]=P("top",D)}var pa={url:f.g.url||""};if(f.g.url){var qa=f.g.url.match(Ba),N=qa[1],Va=qa[3],Wa=qa[4];D="";N&&(D+=N+":");Va&&(D+="//",D+=Va,Wa&&(D+=":"+Wa));var Xa=D}else Xa="";N=x;pa=[pa,{url:Xa}];N.g.push(5);N.h[5]=pa;nb(this.l,e,x,this.i,c)}catch(x){try{nb(this.l,e,{context:"ecmserr",rctx:a,msg:vb(x),url:f&&f.g.url},this.i,c)}catch(I){}}return!0}};let zb,U;if(eb&&!G(L)){let a="."+H.domain;try{for(;2<a.split(".").length&&!G(L);)H.domain=a=a.substr(a.indexOf(".")+1),L=window.parent}catch(b){}G(L)||(L=window)}const T=L,V=new ub;var Ab=()=>{T.google_measure_js_timing||(V.g=!1,V.h!=V.i.google_js_reporting_queue&&(S()&&Array.prototype.forEach.call(V.h,tb,void 0),V.h.length=0))};zb=new ob;"number"!==typeof T.google_srt&&(T.google_srt=Math.random());var Bb=zb,Cb=T.google_srt;0<=Cb&&1>=Cb&&(Bb.g=Cb);U=new yb(V); 
U.h=a=>{var b=J.jerExpIds;if(Array.isArray(b)&&0!==b.length){var c=a.eid;if(c){c=[...c.split(","),...b];b={};for(var d=0,e=0;e<c.length;){var f=c[e++];var g=f;var h=typeof g;g="object"==h&&null!=g||"function"==h?"o"+(Object.prototype.hasOwnProperty.call(g,p)&&g[p]||(g[p]=++da)):(typeof g).charAt(0)+g;Object.prototype.hasOwnProperty.call(b,g)||(b[g]=!0,c[d++]=f)}c.length=d;a.eid=c.join(",")}else a.eid=b.join(",")}0!==Ea&&(a.jc=String(Ea));(c=J.jerUserAgent)&&(a.useragent=c)};U.i=!0; 
"complete"==T.document.readyState?Ab():V.g&&E(T,"load",()=>{Ab()});var W=(a,b)=>xb(a,b);function Db(a){if(a.g.j&&a.g.P){const b=na(a.g.g);b&&null!=w(b,5)&&null!=w(b,6)&&(a.i=new Ka(A(b,5),A(b,6),A(b,19)));E(a.g.j,"click",W(452,()=>{if(!a.j&&(a.j=!0,a.i)){{var c=a.i;let d=c.h+"&label=closebutton_whythisad_click";d+="&label_instance=1";c.g&&(d+="&cid="+c.g);Da(window,d)}}}))}} 
function Eb(a){if(a.g.S)E(a.g.i,"click",W(365,b=>{const c=J.goog_interstitial_display;c&&(c(b),b&&(b.stopPropagation(),b.preventDefault()))}));else if(a.g.isMutableImpression&&a.g.isMobileDevice)E(a.g.i,"click",()=>a.h());else if(a.g.isMutableImpression&&!a.g.isMobileDevice&&(a.g.l&&E(a.g.l,"click",()=>a.h()),a.g.U&&a.g.h&&E(a.g.h,"click",()=>a.h())),a.g.K)Fb(a);else{E(a.g.i,"mouseover",W(367,()=>Fb(a)));E(a.g.i,"mouseout",W(369,()=>Gb(a,500)));E(a.g.i,"touchstart",W(368,()=>Fb(a)),wa);const b=W(370, 
()=>Gb(a,4E3));E(a.g.i,"mouseup",b);E(a.g.i,"touchend",b);E(a.g.i,"touchcancel",b);a.g.j&&E(a.g.j,"click",W(371,c=>a.preventDefault(c)))}}function Fb(a){window.clearTimeout(a.g.m);a.g.m=null;a.g.h&&"block"==a.g.h.style.display||(a.g.F=Date.now(),a.g.o&&a.g.h&&(a.g.o.style.display="none",a.g.h.style.display="block"))}function Gb(a,b){window.clearTimeout(a.g.m);a.g.m=window.setTimeout(()=>Ib(a),b)} 
function Jb(a){const b=a.g.A;b.style.display="block";a.g.enableNativeJakeUi&&window.requestAnimationFrame(()=>{K(b,"abgacfo")})}function Ib(a){window.clearTimeout(a.g.m);a.g.m=null;a.g.o&&a.g.h&&(a.g.o.style.display="block",a.g.h.style.display="none")} 
class Kb{constructor(a,b){this.g=a;this.h=b;this.g.T||(this.j=!1,this.i=null,!this.g.C||this.g.adbadgeEnabled||this.g.L?Db(this):(a={display:"none"},b={width:"15px",height:"15px"},this.g.isMobileDevice?(O(this.g.o,a),O(this.g.h,a),O(this.g.u,b),O(this.g.s,b)):O(this.g.s,a)),Eb(this),this.g.enableNativeJakeUi&&K(this.g.A,"abgnac"),this.g.isDelegateAttributionActive?(K(document.body,"goog_delegate_active"),K(document.body,"jaa")):(!this.g.isMutableImpression&&this.g.l&&Aa(this.g.l),setTimeout(()=>{K(document.body, 
"jar")},this.g.J?750:100)),this.g.B&&K(document.body,"goog_delegate_disabled"),this.g.H&&J.addEventListener("load",()=>this.h()))}preventDefault(a){if(this.g.h&&"block"==this.g.h.style.display&&500>Date.now()-this.g.F)a.preventDefault?a.preventDefault():a.returnValue=!1;else if(this.g.openAttributionInline){var b=this.g.j.getAttribute("href");window.adSlot?window.adSlot.openAttribution(b)&&(a.preventDefault?a.preventDefault():a.returnValue=!1):window.openAttribution&&(window.openAttribution(b),a.preventDefault? 
a.preventDefault():a.returnValue=!1)}else this.g.O&&(b=this.g.j.getAttribute("href"),window.adSlot?window.adSlot.openSystemBrowser(b)&&(a.preventDefault?a.preventDefault():a.returnValue=!1):window.openSystemBrowser&&(window.openSystemBrowser(b),a.preventDefault?a.preventDefault():a.returnValue=!1))}};function Lb(a){if(!a.g&&(a.g=!0,J.goog_delegate_deferred_token=void 0,a.h)){var b=a.i;a=a.h;if(!a)throw Error("bad attrdata");a=new Ja(a);new b(a)}}class Mb{constructor(a){var b=Nb;if(!b)throw Error("bad ctor");this.i=b;this.h=a;this.g=!1;ya("goog_delegate_deferred")?void 0!==J.goog_delegate_deferred_token?Lb(this):(a=()=>{Lb(this)},J.goog_delegate_deferred_token=a,setTimeout(a,5E3)):Lb(this)}};var Ob=(a=[])=>{l.google_logging_queue||(l.google_logging_queue=[]);l.google_logging_queue.push([11,a])};class Pb{constructor(){this.promise=new Promise(a=>{this.g=a})}};var Qb=class{constructor(){const a=new Pb;this.promise=a.promise;this.resolve=a.g}};function Rb(a,b){a.google_llp||(a.google_llp={});a=a.google_llp;a[5]||(a[5]=new Qb,b&&b());return a[5]} 
function Sb(){var a=window,b=bb();return Rb(a,function(){{var c=a.document;const f=c.createElement("script");f.src=b instanceof u&&b.constructor===u?b.g:"type_error:TrustedResourceUrl";var d=f,e;(e=d.ownerDocument&&d.ownerDocument.defaultView)&&e!=l?e=ba(e.document):(null===n&&(n=ba(l.document)),e=n);e&&d.setAttribute("nonce",e);(c=c.getElementsByTagName("script")[0])&&c.parentNode&&c.parentNode.insertBefore(f,c)}}).promise};function Tb(a){wb(U,373,()=>{Ib(a.h);Jb(a.h)});Sb().then(b=>{b.createAttributionCard(a.g);a.g.R=b;b.expandAttributionCard()});Ga()}class Nb{constructor(a){this.g=a;this.h=new Kb(this.g,W(359,()=>Tb(this)))}};Ea=60;function Ub(a){Ob([a]);new Mb(a)}var X=["buildAttribution"],Y=l;X[0]in Y||"undefined"==typeof Y.execScript||Y.execScript("var "+X[0]);for(var Z;X.length&&(Z=X.shift());)X.length||void 0===Ub?Y[Z]&&Y[Z]!==Object.prototype[Z]?Y=Y[Z]:Y=Y[Z]={}:Y[Z]=Ub;}).call(this);