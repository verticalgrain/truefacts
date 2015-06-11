/*! gruntyplate - v0.1.0 - 2015-06-10
* Copyright (c) 2015 Gruntyplate;*/

window.Modernizr=function(a,b,c){function d(a){o.cssText=a}function e(a,b){return typeof a===b}var f,g,h,i="2.8.3",j={},k=!0,l=b.documentElement,m="modernizr",n=b.createElement(m),o=n.style,p=({}.toString,{}),q=[],r=q.slice,s={}.hasOwnProperty;h=e(s,"undefined")||e(s.call,"undefined")?function(a,b){return b in a&&e(a.constructor.prototype[b],"undefined")}:function(a,b){return s.call(a,b)},Function.prototype.bind||(Function.prototype.bind=function(a){var b=this;if("function"!=typeof b)throw new TypeError;var c=r.call(arguments,1),d=function(){if(this instanceof d){var e=function(){};e.prototype=b.prototype;var f=new e,g=b.apply(f,c.concat(r.call(arguments)));return Object(g)===g?g:f}return b.apply(a,c.concat(r.call(arguments)))};return d});for(var t in p)h(p,t)&&(g=t.toLowerCase(),j[g]=p[t](),q.push((j[g]?"":"no-")+g));return j.addTest=function(a,b){if("object"==typeof a)for(var d in a)h(a,d)&&j.addTest(d,a[d]);else{if(a=a.toLowerCase(),j[a]!==c)return j;b="function"==typeof b?b():b,"undefined"!=typeof k&&k&&(l.className+=" "+(b?"":"no-")+a),j[a]=b}return j},d(""),n=f=null,function(a,b){function c(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild)}function d(){var a=s.elements;return"string"==typeof a?a.split(" "):a}function e(a){var b=r[a[p]];return b||(b={},q++,a[p]=q,r[q]=b),b}function f(a,c,d){if(c||(c=b),k)return c.createElement(a);d||(d=e(c));var f;return f=d.cache[a]?d.cache[a].cloneNode():o.test(a)?(d.cache[a]=d.createElem(a)).cloneNode():d.createElem(a),!f.canHaveChildren||n.test(a)||f.tagUrn?f:d.frag.appendChild(f)}function g(a,c){if(a||(a=b),k)return a.createDocumentFragment();c=c||e(a);for(var f=c.frag.cloneNode(),g=0,h=d(),i=h.length;i>g;g++)f.createElement(h[g]);return f}function h(a,b){b.cache||(b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag()),a.createElement=function(c){return s.shivMethods?f(c,a,b):b.createElem(c)},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+d().join().replace(/[\w\-]+/g,function(a){return b.createElem(a),b.frag.createElement(a),'c("'+a+'")'})+");return n}")(s,b.frag)}function i(a){a||(a=b);var d=e(a);return s.shivCSS&&!j&&!d.hasCSS&&(d.hasCSS=!!c(a,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),k||h(a,d),a}var j,k,l="3.7.0",m=a.html5||{},n=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,o=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,p="_html5shiv",q=0,r={};!function(){try{var a=b.createElement("a");a.innerHTML="<xyz></xyz>",j="hidden"in a,k=1==a.childNodes.length||function(){b.createElement("a");var a=b.createDocumentFragment();return"undefined"==typeof a.cloneNode||"undefined"==typeof a.createDocumentFragment||"undefined"==typeof a.createElement}()}catch(c){j=!0,k=!0}}();var s={elements:m.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",version:l,shivCSS:m.shivCSS!==!1,supportsUnknownElements:k,shivMethods:m.shivMethods!==!1,type:"default",shivDocument:i,createElement:f,createDocumentFragment:g};a.html5=s,i(b)}(this,b),j._version=i,l.className=l.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(k?" js "+q.join(" "):""),j}(this,this.document),function(a,b,c){function d(a){return"[object Function]"==q.call(a)}function e(a){return"string"==typeof a}function f(){}function g(a){return!a||"loaded"==a||"complete"==a||"uninitialized"==a}function h(){var a=r.shift();s=1,a?a.t?o(function(){("c"==a.t?m.injectCss:m.injectJs)(a.s,0,a.a,a.x,a.e,1)},0):(a(),h()):s=0}function i(a,c,d,e,f,i,j){function k(b){if(!n&&g(l.readyState)&&(t.r=n=1,!s&&h(),l.onload=l.onreadystatechange=null,b)){"img"!=a&&o(function(){v.removeChild(l)},50);for(var d in A[c])A[c].hasOwnProperty(d)&&A[c][d].onload()}}var j=j||m.errorTimeout,l=b.createElement(a),n=0,q=0,t={t:d,s:c,e:f,a:i,x:j};1===A[c]&&(q=1,A[c]=[]),"object"==a?l.data=c:(l.src=c,l.type=a),l.width=l.height="0",l.onerror=l.onload=l.onreadystatechange=function(){k.call(this,q)},r.splice(e,0,t),"img"!=a&&(q||2===A[c]?(v.insertBefore(l,u?null:p),o(k,j)):A[c].push(l))}function j(a,b,c,d,f){return s=0,b=b||"j",e(a)?i("c"==b?x:w,a,b,this.i++,c,d,f):(r.splice(this.i++,0,a),1==r.length&&h()),this}function k(){var a=m;return a.loader={load:j,i:0},a}var l,m,n=b.documentElement,o=a.setTimeout,p=b.getElementsByTagName("script")[0],q={}.toString,r=[],s=0,t="MozAppearance"in n.style,u=t&&!!b.createRange().compareNode,v=u?n:p.parentNode,n=a.opera&&"[object Opera]"==q.call(a.opera),n=!!b.attachEvent&&!n,w=t?"object":n?"script":"img",x=n?"script":w,y=Array.isArray||function(a){return"[object Array]"==q.call(a)},z=[],A={},B={timeout:function(a,b){return b.length&&(a.timeout=b[0]),a}};m=function(a){function b(a){var b,c,d,a=a.split("!"),e=z.length,f=a.pop(),g=a.length,f={url:f,origUrl:f,prefixes:a};for(c=0;g>c;c++)d=a[c].split("="),(b=B[d.shift()])&&(f=b(f,d));for(c=0;e>c;c++)f=z[c](f);return f}function g(a,e,f,g,h){var i=b(a),j=i.autoCallback;i.url.split(".").pop().split("?").shift(),i.bypass||(e&&(e=d(e)?e:e[a]||e[g]||e[a.split("/").pop().split("?")[0]]),i.instead?i.instead(a,e,f,g,h):(A[i.url]?i.noexec=!0:A[i.url]=1,f.load(i.url,i.forceCSS||!i.forceJS&&"css"==i.url.split(".").pop().split("?").shift()?"c":c,i.noexec,i.attrs,i.timeout),(d(e)||d(j))&&f.load(function(){k(),e&&e(i.origUrl,h,g),j&&j(i.origUrl,h,g),A[i.url]=2})))}function h(a,b){function c(a,c){if(a){if(e(a))c||(l=function(){var a=[].slice.call(arguments);m.apply(this,a),n()}),g(a,l,b,0,j);else if(Object(a)===a)for(i in h=function(){var b,c=0;for(b in a)a.hasOwnProperty(b)&&c++;return c}(),a)a.hasOwnProperty(i)&&(!c&&!--h&&(d(l)?l=function(){var a=[].slice.call(arguments);m.apply(this,a),n()}:l[i]=function(a){return function(){var b=[].slice.call(arguments);a&&a.apply(this,b),n()}}(m[i])),g(a[i],l,b,i,j))}else!c&&n()}var h,i,j=!!a.test,k=a.load||a.both,l=a.callback||f,m=l,n=a.complete||f;c(j?a.yep:a.nope,!!k),k&&c(k)}var i,j,l=this.yepnope.loader;if(e(a))g(a,0,l,0);else if(y(a))for(i=0;i<a.length;i++)j=a[i],e(j)?g(j,0,l,0):y(j)?m(j):Object(j)===j&&h(j,l);else Object(a)===a&&h(a,l)},m.addPrefix=function(a,b){B[a]=b},m.addFilter=function(a){z.push(a)},m.errorTimeout=1e4,null==b.readyState&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",l=function(){b.removeEventListener("DOMContentLoaded",l,0),b.readyState="complete"},0)),a.yepnope=k(),a.yepnope.executeStack=h,a.yepnope.injectJs=function(a,c,d,e,i,j){var k,l,n=b.createElement("script"),e=e||m.errorTimeout;n.src=a;for(l in d)n.setAttribute(l,d[l]);c=j?h:c||f,n.onreadystatechange=n.onload=function(){!k&&g(n.readyState)&&(k=1,c(),n.onload=n.onreadystatechange=null)},o(function(){k||(k=1,c(1))},e),i?n.onload():p.parentNode.insertBefore(n,p)},a.yepnope.injectCss=function(a,c,d,e,g,i){var j,e=b.createElement("link"),c=i?h:c||f;e.href=a,e.rel="stylesheet",e.type="text/css";for(j in d)e.setAttribute(j,d[j]);g||(p.parentNode.insertBefore(e,p),o(c,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};
//# sourceMappingURL=application-head.js.map