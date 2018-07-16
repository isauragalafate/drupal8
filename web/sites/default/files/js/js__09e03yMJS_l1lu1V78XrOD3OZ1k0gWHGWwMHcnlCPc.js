/*! jQuery v3.2.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function(a,b){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){"use strict";var c=[],d=a.document,e=Object.getPrototypeOf,f=c.slice,g=c.concat,h=c.push,i=c.indexOf,j={},k=j.toString,l=j.hasOwnProperty,m=l.toString,n=m.call(Object),o={};function p(a,b){b=b||d;var c=b.createElement("script");c.text=a,b.head.appendChild(c).parentNode.removeChild(c)}var q="3.2.1",r=function(a,b){return new r.fn.init(a,b)},s=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,t=/^-ms-/,u=/-([a-z])/g,v=function(a,b){return b.toUpperCase()};r.fn=r.prototype={jquery:q,constructor:r,length:0,toArray:function(){return f.call(this)},get:function(a){return null==a?f.call(this):a<0?this[a+this.length]:this[a]},pushStack:function(a){var b=r.merge(this.constructor(),a);return b.prevObject=this,b},each:function(a){return r.each(this,a)},map:function(a){return this.pushStack(r.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(f.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(a<0?b:0);return this.pushStack(c>=0&&c<b?[this[c]]:[])},end:function(){return this.prevObject||this.constructor()},push:h,sort:c.sort,splice:c.splice},r.extend=r.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||r.isFunction(g)||(g={}),h===i&&(g=this,h--);h<i;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(r.isPlainObject(d)||(e=Array.isArray(d)))?(e?(e=!1,f=c&&Array.isArray(c)?c:[]):f=c&&r.isPlainObject(c)?c:{},g[b]=r.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},r.extend({expando:"jQuery"+(q+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===r.type(a)},isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){var b=r.type(a);return("number"===b||"string"===b)&&!isNaN(a-parseFloat(a))},isPlainObject:function(a){var b,c;return!(!a||"[object Object]"!==k.call(a))&&(!(b=e(a))||(c=l.call(b,"constructor")&&b.constructor,"function"==typeof c&&m.call(c)===n))},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?j[k.call(a)]||"object":typeof a},globalEval:function(a){p(a)},camelCase:function(a){return a.replace(t,"ms-").replace(u,v)},each:function(a,b){var c,d=0;if(w(a)){for(c=a.length;d<c;d++)if(b.call(a[d],d,a[d])===!1)break}else for(d in a)if(b.call(a[d],d,a[d])===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(s,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(w(Object(a))?r.merge(c,"string"==typeof a?[a]:a):h.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:i.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;d<c;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;f<g;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,e,f=0,h=[];if(w(a))for(d=a.length;f<d;f++)e=b(a[f],f,c),null!=e&&h.push(e);else for(f in a)e=b(a[f],f,c),null!=e&&h.push(e);return g.apply([],h)},guid:1,proxy:function(a,b){var c,d,e;if("string"==typeof b&&(c=a[b],b=a,a=c),r.isFunction(a))return d=f.call(arguments,2),e=function(){return a.apply(b||this,d.concat(f.call(arguments)))},e.guid=a.guid=a.guid||r.guid++,e},now:Date.now,support:o}),"function"==typeof Symbol&&(r.fn[Symbol.iterator]=c[Symbol.iterator]),r.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(a,b){j["[object "+b+"]"]=b.toLowerCase()});function w(a){var b=!!a&&"length"in a&&a.length,c=r.type(a);return"function"!==c&&!r.isWindow(a)&&("array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a)}var x=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ha(),z=ha(),A=ha(),B=function(a,b){return a===b&&(l=!0),0},C={}.hasOwnProperty,D=[],E=D.pop,F=D.push,G=D.push,H=D.slice,I=function(a,b){for(var c=0,d=a.length;c<d;c++)if(a[c]===b)return c;return-1},J="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",K="[\\x20\\t\\r\\n\\f]",L="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",M="\\["+K+"*("+L+")(?:"+K+"*([*^$|!~]?=)"+K+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+L+"))|)"+K+"*\\]",N=":("+L+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+M+")*)|.*)\\)|)",O=new RegExp(K+"+","g"),P=new RegExp("^"+K+"+|((?:^|[^\\\\])(?:\\\\.)*)"+K+"+$","g"),Q=new RegExp("^"+K+"*,"+K+"*"),R=new RegExp("^"+K+"*([>+~]|"+K+")"+K+"*"),S=new RegExp("="+K+"*([^\\]'\"]*?)"+K+"*\\]","g"),T=new RegExp(N),U=new RegExp("^"+L+"$"),V={ID:new RegExp("^#("+L+")"),CLASS:new RegExp("^\\.("+L+")"),TAG:new RegExp("^("+L+"|[*])"),ATTR:new RegExp("^"+M),PSEUDO:new RegExp("^"+N),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+K+"*(even|odd|(([+-]|)(\\d*)n|)"+K+"*(?:([+-]|)"+K+"*(\\d+)|))"+K+"*\\)|)","i"),bool:new RegExp("^(?:"+J+")$","i"),needsContext:new RegExp("^"+K+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+K+"*((?:-\\d)?\\d*)"+K+"*\\)|)(?=[^-]|$)","i")},W=/^(?:input|select|textarea|button)$/i,X=/^h\d$/i,Y=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,$=/[+~]/,_=new RegExp("\\\\([\\da-f]{1,6}"+K+"?|("+K+")|.)","ig"),aa=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:d<0?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},ba=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ca=function(a,b){return b?"\0"===a?"\ufffd":a.slice(0,-1)+"\\"+a.charCodeAt(a.length-1).toString(16)+" ":"\\"+a},da=function(){m()},ea=ta(function(a){return a.disabled===!0&&("form"in a||"label"in a)},{dir:"parentNode",next:"legend"});try{G.apply(D=H.call(v.childNodes),v.childNodes),D[v.childNodes.length].nodeType}catch(fa){G={apply:D.length?function(a,b){F.apply(a,H.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function ga(a,b,d,e){var f,h,j,k,l,o,r,s=b&&b.ownerDocument,w=b?b.nodeType:9;if(d=d||[],"string"!=typeof a||!a||1!==w&&9!==w&&11!==w)return d;if(!e&&((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,p)){if(11!==w&&(l=Z.exec(a)))if(f=l[1]){if(9===w){if(!(j=b.getElementById(f)))return d;if(j.id===f)return d.push(j),d}else if(s&&(j=s.getElementById(f))&&t(b,j)&&j.id===f)return d.push(j),d}else{if(l[2])return G.apply(d,b.getElementsByTagName(a)),d;if((f=l[3])&&c.getElementsByClassName&&b.getElementsByClassName)return G.apply(d,b.getElementsByClassName(f)),d}if(c.qsa&&!A[a+" "]&&(!q||!q.test(a))){if(1!==w)s=b,r=a;else if("object"!==b.nodeName.toLowerCase()){(k=b.getAttribute("id"))?k=k.replace(ba,ca):b.setAttribute("id",k=u),o=g(a),h=o.length;while(h--)o[h]="#"+k+" "+sa(o[h]);r=o.join(","),s=$.test(a)&&qa(b.parentNode)||b}if(r)try{return G.apply(d,s.querySelectorAll(r)),d}catch(x){}finally{k===u&&b.removeAttribute("id")}}}return i(a.replace(P,"$1"),b,d,e)}function ha(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ia(a){return a[u]=!0,a}function ja(a){var b=n.createElement("fieldset");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ka(a,b){var c=a.split("|"),e=c.length;while(e--)d.attrHandle[c[e]]=b}function la(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&a.sourceIndex-b.sourceIndex;if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function na(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function oa(a){return function(b){return"form"in b?b.parentNode&&b.disabled===!1?"label"in b?"label"in b.parentNode?b.parentNode.disabled===a:b.disabled===a:b.isDisabled===a||b.isDisabled!==!a&&ea(b)===a:b.disabled===a:"label"in b&&b.disabled===a}}function pa(a){return ia(function(b){return b=+b,ia(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function qa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=ga.support={},f=ga.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return!!b&&"HTML"!==b.nodeName},m=ga.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=n.documentElement,p=!f(n),v!==n&&(e=n.defaultView)&&e.top!==e&&(e.addEventListener?e.addEventListener("unload",da,!1):e.attachEvent&&e.attachEvent("onunload",da)),c.attributes=ja(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ja(function(a){return a.appendChild(n.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Y.test(n.getElementsByClassName),c.getById=ja(function(a){return o.appendChild(a).id=u,!n.getElementsByName||!n.getElementsByName(u).length}),c.getById?(d.filter.ID=function(a){var b=a.replace(_,aa);return function(a){return a.getAttribute("id")===b}},d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c?[c]:[]}}):(d.filter.ID=function(a){var b=a.replace(_,aa);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}},d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c,d,e,f=b.getElementById(a);if(f){if(c=f.getAttributeNode("id"),c&&c.value===a)return[f];e=b.getElementsByName(a),d=0;while(f=e[d++])if(c=f.getAttributeNode("id"),c&&c.value===a)return[f]}return[]}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){if("undefined"!=typeof b.getElementsByClassName&&p)return b.getElementsByClassName(a)},r=[],q=[],(c.qsa=Y.test(n.querySelectorAll))&&(ja(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\r\\' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+K+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+K+"*(?:value|"+J+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ja(function(a){a.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var b=n.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+K+"*[*^$|!~]?="),2!==a.querySelectorAll(":enabled").length&&q.push(":enabled",":disabled"),o.appendChild(a).disabled=!0,2!==a.querySelectorAll(":disabled").length&&q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=Y.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ja(function(a){c.disconnectedMatch=s.call(a,"*"),s.call(a,"[s!='']:x"),r.push("!=",N)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=Y.test(o.compareDocumentPosition),t=b||Y.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===n||a.ownerDocument===v&&t(v,a)?-1:b===n||b.ownerDocument===v&&t(v,b)?1:k?I(k,a)-I(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,g=[a],h=[b];if(!e||!f)return a===n?-1:b===n?1:e?-1:f?1:k?I(k,a)-I(k,b):0;if(e===f)return la(a,b);c=a;while(c=c.parentNode)g.unshift(c);c=b;while(c=c.parentNode)h.unshift(c);while(g[d]===h[d])d++;return d?la(g[d],h[d]):g[d]===v?-1:h[d]===v?1:0},n):n},ga.matches=function(a,b){return ga(a,null,null,b)},ga.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(S,"='$1']"),c.matchesSelector&&p&&!A[b+" "]&&(!r||!r.test(b))&&(!q||!q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return ga(b,n,null,[a]).length>0},ga.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},ga.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&C.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},ga.escape=function(a){return(a+"").replace(ba,ca)},ga.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},ga.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=ga.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=ga.selectors={cacheLength:50,createPseudo:ia,match:V,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(_,aa),a[3]=(a[3]||a[4]||a[5]||"").replace(_,aa),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||ga.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&ga.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return V.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&T.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(_,aa).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+K+")"+a+"("+K+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=ga.attr(d,a);return null==e?"!="===b:!b||(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(O," ")+" ").indexOf(c)>-1:"|="===b&&(e===c||e.slice(0,c.length+1)===c+"-"))}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h,t=!1;if(q){if(f){while(p){m=b;while(m=m[p])if(h?m.nodeName.toLowerCase()===r:1===m.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){m=q,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n&&j[2],m=n&&q.childNodes[n];while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if(1===m.nodeType&&++t&&m===b){k[a]=[w,n,t];break}}else if(s&&(m=b,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n),t===!1)while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if((h?m.nodeName.toLowerCase()===r:1===m.nodeType)&&++t&&(s&&(l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),k[a]=[w,t]),m===b))break;return t-=e,t===d||t%d===0&&t/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||ga.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ia(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=I(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ia(function(a){var b=[],c=[],d=h(a.replace(P,"$1"));return d[u]?ia(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ia(function(a){return function(b){return ga(a,b).length>0}}),contains:ia(function(a){return a=a.replace(_,aa),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ia(function(a){return U.test(a||"")||ga.error("unsupported lang: "+a),a=a.replace(_,aa).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:oa(!1),disabled:oa(!0),checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return X.test(a.nodeName)},input:function(a){return W.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:pa(function(){return[0]}),last:pa(function(a,b){return[b-1]}),eq:pa(function(a,b,c){return[c<0?c+b:c]}),even:pa(function(a,b){for(var c=0;c<b;c+=2)a.push(c);return a}),odd:pa(function(a,b){for(var c=1;c<b;c+=2)a.push(c);return a}),lt:pa(function(a,b,c){for(var d=c<0?c+b:c;--d>=0;)a.push(d);return a}),gt:pa(function(a,b,c){for(var d=c<0?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=ma(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=na(b);function ra(){}ra.prototype=d.filters=d.pseudos,d.setFilters=new ra,g=ga.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){c&&!(e=Q.exec(h))||(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=R.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(P," ")}),h=h.slice(c.length));for(g in d.filter)!(e=V[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?ga.error(a):z(a,i).slice(0)};function sa(a){for(var b=0,c=a.length,d="";b<c;b++)d+=a[b].value;return d}function ta(a,b,c){var d=b.dir,e=b.next,f=e||d,g=c&&"parentNode"===f,h=x++;return b.first?function(b,c,e){while(b=b[d])if(1===b.nodeType||g)return a(b,c,e);return!1}:function(b,c,i){var j,k,l,m=[w,h];if(i){while(b=b[d])if((1===b.nodeType||g)&&a(b,c,i))return!0}else while(b=b[d])if(1===b.nodeType||g)if(l=b[u]||(b[u]={}),k=l[b.uniqueID]||(l[b.uniqueID]={}),e&&e===b.nodeName.toLowerCase())b=b[d]||b;else{if((j=k[f])&&j[0]===w&&j[1]===h)return m[2]=j[2];if(k[f]=m,m[2]=a(b,c,i))return!0}return!1}}function ua(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function va(a,b,c){for(var d=0,e=b.length;d<e;d++)ga(a,b[d],c);return c}function wa(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;h<i;h++)(f=a[h])&&(c&&!c(f,d,e)||(g.push(f),j&&b.push(h)));return g}function xa(a,b,c,d,e,f){return d&&!d[u]&&(d=xa(d)),e&&!e[u]&&(e=xa(e,f)),ia(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||va(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:wa(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=wa(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?I(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=wa(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):G.apply(g,r)})}function ya(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=ta(function(a){return a===b},h,!0),l=ta(function(a){return I(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];i<f;i++)if(c=d.relative[a[i].type])m=[ta(ua(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;e<f;e++)if(d.relative[a[e].type])break;return xa(i>1&&ua(m),i>1&&sa(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(P,"$1"),c,i<e&&ya(a.slice(i,e)),e<f&&ya(a=a.slice(e)),e<f&&sa(a))}m.push(c)}return ua(m)}function za(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,o,q,r=0,s="0",t=f&&[],u=[],v=j,x=f||e&&d.find.TAG("*",k),y=w+=null==v?1:Math.random()||.1,z=x.length;for(k&&(j=g===n||g||k);s!==z&&null!=(l=x[s]);s++){if(e&&l){o=0,g||l.ownerDocument===n||(m(l),h=!p);while(q=a[o++])if(q(l,g||n,h)){i.push(l);break}k&&(w=y)}c&&((l=!q&&l)&&r--,f&&t.push(l))}if(r+=s,c&&s!==r){o=0;while(q=b[o++])q(t,u,g,h);if(f){if(r>0)while(s--)t[s]||u[s]||(u[s]=E.call(i));u=wa(u)}G.apply(i,u),k&&!f&&u.length>0&&r+b.length>1&&ga.uniqueSort(i)}return k&&(w=y,j=v),t};return c?ia(f):f}return h=ga.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=ya(b[c]),f[u]?d.push(f):e.push(f);f=A(a,za(e,d)),f.selector=a}return f},i=ga.select=function(a,b,c,e){var f,i,j,k,l,m="function"==typeof a&&a,n=!e&&g(a=m.selector||a);if(c=c||[],1===n.length){if(i=n[0]=n[0].slice(0),i.length>2&&"ID"===(j=i[0]).type&&9===b.nodeType&&p&&d.relative[i[1].type]){if(b=(d.find.ID(j.matches[0].replace(_,aa),b)||[])[0],!b)return c;m&&(b=b.parentNode),a=a.slice(i.shift().value.length)}f=V.needsContext.test(a)?0:i.length;while(f--){if(j=i[f],d.relative[k=j.type])break;if((l=d.find[k])&&(e=l(j.matches[0].replace(_,aa),$.test(i[0].type)&&qa(b.parentNode)||b))){if(i.splice(f,1),a=e.length&&sa(i),!a)return G.apply(c,e),c;break}}}return(m||h(a,n))(e,b,!p,c,!b||$.test(a)&&qa(b.parentNode)||b),c},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ja(function(a){return 1&a.compareDocumentPosition(n.createElement("fieldset"))}),ja(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ka("type|href|height|width",function(a,b,c){if(!c)return a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ja(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ka("value",function(a,b,c){if(!c&&"input"===a.nodeName.toLowerCase())return a.defaultValue}),ja(function(a){return null==a.getAttribute("disabled")})||ka(J,function(a,b,c){var d;if(!c)return a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),ga}(a);r.find=x,r.expr=x.selectors,r.expr[":"]=r.expr.pseudos,r.uniqueSort=r.unique=x.uniqueSort,r.text=x.getText,r.isXMLDoc=x.isXML,r.contains=x.contains,r.escapeSelector=x.escape;var y=function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&r(a).is(c))break;d.push(a)}return d},z=function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c},A=r.expr.match.needsContext;function B(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()}var C=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,D=/^.[^:#\[\.,]*$/;function E(a,b,c){return r.isFunction(b)?r.grep(a,function(a,d){return!!b.call(a,d,a)!==c}):b.nodeType?r.grep(a,function(a){return a===b!==c}):"string"!=typeof b?r.grep(a,function(a){return i.call(b,a)>-1!==c}):D.test(b)?r.filter(b,a,c):(b=r.filter(b,a),r.grep(a,function(a){return i.call(b,a)>-1!==c&&1===a.nodeType}))}r.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?r.find.matchesSelector(d,a)?[d]:[]:r.find.matches(a,r.grep(b,function(a){return 1===a.nodeType}))},r.fn.extend({find:function(a){var b,c,d=this.length,e=this;if("string"!=typeof a)return this.pushStack(r(a).filter(function(){for(b=0;b<d;b++)if(r.contains(e[b],this))return!0}));for(c=this.pushStack([]),b=0;b<d;b++)r.find(a,e[b],c);return d>1?r.uniqueSort(c):c},filter:function(a){return this.pushStack(E(this,a||[],!1))},not:function(a){return this.pushStack(E(this,a||[],!0))},is:function(a){return!!E(this,"string"==typeof a&&A.test(a)?r(a):a||[],!1).length}});var F,G=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,H=r.fn.init=function(a,b,c){var e,f;if(!a)return this;if(c=c||F,"string"==typeof a){if(e="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:G.exec(a),!e||!e[1]&&b)return!b||b.jquery?(b||c).find(a):this.constructor(b).find(a);if(e[1]){if(b=b instanceof r?b[0]:b,r.merge(this,r.parseHTML(e[1],b&&b.nodeType?b.ownerDocument||b:d,!0)),C.test(e[1])&&r.isPlainObject(b))for(e in b)r.isFunction(this[e])?this[e](b[e]):this.attr(e,b[e]);return this}return f=d.getElementById(e[2]),f&&(this[0]=f,this.length=1),this}return a.nodeType?(this[0]=a,this.length=1,this):r.isFunction(a)?void 0!==c.ready?c.ready(a):a(r):r.makeArray(a,this)};H.prototype=r.fn,F=r(d);var I=/^(?:parents|prev(?:Until|All))/,J={children:!0,contents:!0,next:!0,prev:!0};r.fn.extend({has:function(a){var b=r(a,this),c=b.length;return this.filter(function(){for(var a=0;a<c;a++)if(r.contains(this,b[a]))return!0})},closest:function(a,b){var c,d=0,e=this.length,f=[],g="string"!=typeof a&&r(a);if(!A.test(a))for(;d<e;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&r.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?r.uniqueSort(f):f)},index:function(a){return a?"string"==typeof a?i.call(r(a),this[0]):i.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(r.uniqueSort(r.merge(this.get(),r(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function K(a,b){while((a=a[b])&&1!==a.nodeType);return a}r.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return y(a,"parentNode")},parentsUntil:function(a,b,c){return y(a,"parentNode",c)},next:function(a){return K(a,"nextSibling")},prev:function(a){return K(a,"previousSibling")},nextAll:function(a){return y(a,"nextSibling")},prevAll:function(a){return y(a,"previousSibling")},nextUntil:function(a,b,c){return y(a,"nextSibling",c)},prevUntil:function(a,b,c){return y(a,"previousSibling",c)},siblings:function(a){return z((a.parentNode||{}).firstChild,a)},children:function(a){return z(a.firstChild)},contents:function(a){return B(a,"iframe")?a.contentDocument:(B(a,"template")&&(a=a.content||a),r.merge([],a.childNodes))}},function(a,b){r.fn[a]=function(c,d){var e=r.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=r.filter(d,e)),this.length>1&&(J[a]||r.uniqueSort(e),I.test(a)&&e.reverse()),this.pushStack(e)}});var L=/[^\x20\t\r\n\f]+/g;function M(a){var b={};return r.each(a.match(L)||[],function(a,c){b[c]=!0}),b}r.Callbacks=function(a){a="string"==typeof a?M(a):r.extend({},a);var b,c,d,e,f=[],g=[],h=-1,i=function(){for(e=e||a.once,d=b=!0;g.length;h=-1){c=g.shift();while(++h<f.length)f[h].apply(c[0],c[1])===!1&&a.stopOnFalse&&(h=f.length,c=!1)}a.memory||(c=!1),b=!1,e&&(f=c?[]:"")},j={add:function(){return f&&(c&&!b&&(h=f.length-1,g.push(c)),function d(b){r.each(b,function(b,c){r.isFunction(c)?a.unique&&j.has(c)||f.push(c):c&&c.length&&"string"!==r.type(c)&&d(c)})}(arguments),c&&!b&&i()),this},remove:function(){return r.each(arguments,function(a,b){var c;while((c=r.inArray(b,f,c))>-1)f.splice(c,1),c<=h&&h--}),this},has:function(a){return a?r.inArray(a,f)>-1:f.length>0},empty:function(){return f&&(f=[]),this},disable:function(){return e=g=[],f=c="",this},disabled:function(){return!f},lock:function(){return e=g=[],c||b||(f=c=""),this},locked:function(){return!!e},fireWith:function(a,c){return e||(c=c||[],c=[a,c.slice?c.slice():c],g.push(c),b||i()),this},fire:function(){return j.fireWith(this,arguments),this},fired:function(){return!!d}};return j};function N(a){return a}function O(a){throw a}function P(a,b,c,d){var e;try{a&&r.isFunction(e=a.promise)?e.call(a).done(b).fail(c):a&&r.isFunction(e=a.then)?e.call(a,b,c):b.apply(void 0,[a].slice(d))}catch(a){c.apply(void 0,[a])}}r.extend({Deferred:function(b){var c=[["notify","progress",r.Callbacks("memory"),r.Callbacks("memory"),2],["resolve","done",r.Callbacks("once memory"),r.Callbacks("once memory"),0,"resolved"],["reject","fail",r.Callbacks("once memory"),r.Callbacks("once memory"),1,"rejected"]],d="pending",e={state:function(){return d},always:function(){return f.done(arguments).fail(arguments),this},"catch":function(a){return e.then(null,a)},pipe:function(){var a=arguments;return r.Deferred(function(b){r.each(c,function(c,d){var e=r.isFunction(a[d[4]])&&a[d[4]];f[d[1]](function(){var a=e&&e.apply(this,arguments);a&&r.isFunction(a.promise)?a.promise().progress(b.notify).done(b.resolve).fail(b.reject):b[d[0]+"With"](this,e?[a]:arguments)})}),a=null}).promise()},then:function(b,d,e){var f=0;function g(b,c,d,e){return function(){var h=this,i=arguments,j=function(){var a,j;if(!(b<f)){if(a=d.apply(h,i),a===c.promise())throw new TypeError("Thenable self-resolution");j=a&&("object"==typeof a||"function"==typeof a)&&a.then,r.isFunction(j)?e?j.call(a,g(f,c,N,e),g(f,c,O,e)):(f++,j.call(a,g(f,c,N,e),g(f,c,O,e),g(f,c,N,c.notifyWith))):(d!==N&&(h=void 0,i=[a]),(e||c.resolveWith)(h,i))}},k=e?j:function(){try{j()}catch(a){r.Deferred.exceptionHook&&r.Deferred.exceptionHook(a,k.stackTrace),b+1>=f&&(d!==O&&(h=void 0,i=[a]),c.rejectWith(h,i))}};b?k():(r.Deferred.getStackHook&&(k.stackTrace=r.Deferred.getStackHook()),a.setTimeout(k))}}return r.Deferred(function(a){c[0][3].add(g(0,a,r.isFunction(e)?e:N,a.notifyWith)),c[1][3].add(g(0,a,r.isFunction(b)?b:N)),c[2][3].add(g(0,a,r.isFunction(d)?d:O))}).promise()},promise:function(a){return null!=a?r.extend(a,e):e}},f={};return r.each(c,function(a,b){var g=b[2],h=b[5];e[b[1]]=g.add,h&&g.add(function(){d=h},c[3-a][2].disable,c[0][2].lock),g.add(b[3].fire),f[b[0]]=function(){return f[b[0]+"With"](this===f?void 0:this,arguments),this},f[b[0]+"With"]=g.fireWith}),e.promise(f),b&&b.call(f,f),f},when:function(a){var b=arguments.length,c=b,d=Array(c),e=f.call(arguments),g=r.Deferred(),h=function(a){return function(c){d[a]=this,e[a]=arguments.length>1?f.call(arguments):c,--b||g.resolveWith(d,e)}};if(b<=1&&(P(a,g.done(h(c)).resolve,g.reject,!b),"pending"===g.state()||r.isFunction(e[c]&&e[c].then)))return g.then();while(c--)P(e[c],h(c),g.reject);return g.promise()}});var Q=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;r.Deferred.exceptionHook=function(b,c){a.console&&a.console.warn&&b&&Q.test(b.name)&&a.console.warn("jQuery.Deferred exception: "+b.message,b.stack,c)},r.readyException=function(b){a.setTimeout(function(){throw b})};var R=r.Deferred();r.fn.ready=function(a){return R.then(a)["catch"](function(a){r.readyException(a)}),this},r.extend({isReady:!1,readyWait:1,ready:function(a){(a===!0?--r.readyWait:r.isReady)||(r.isReady=!0,a!==!0&&--r.readyWait>0||R.resolveWith(d,[r]))}}),r.ready.then=R.then;function S(){d.removeEventListener("DOMContentLoaded",S),
a.removeEventListener("load",S),r.ready()}"complete"===d.readyState||"loading"!==d.readyState&&!d.documentElement.doScroll?a.setTimeout(r.ready):(d.addEventListener("DOMContentLoaded",S),a.addEventListener("load",S));var T=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===r.type(c)){e=!0;for(h in c)T(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,r.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(r(a),c)})),b))for(;h<i;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},U=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function V(){this.expando=r.expando+V.uid++}V.uid=1,V.prototype={cache:function(a){var b=a[this.expando];return b||(b={},U(a)&&(a.nodeType?a[this.expando]=b:Object.defineProperty(a,this.expando,{value:b,configurable:!0}))),b},set:function(a,b,c){var d,e=this.cache(a);if("string"==typeof b)e[r.camelCase(b)]=c;else for(d in b)e[r.camelCase(d)]=b[d];return e},get:function(a,b){return void 0===b?this.cache(a):a[this.expando]&&a[this.expando][r.camelCase(b)]},access:function(a,b,c){return void 0===b||b&&"string"==typeof b&&void 0===c?this.get(a,b):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d=a[this.expando];if(void 0!==d){if(void 0!==b){Array.isArray(b)?b=b.map(r.camelCase):(b=r.camelCase(b),b=b in d?[b]:b.match(L)||[]),c=b.length;while(c--)delete d[b[c]]}(void 0===b||r.isEmptyObject(d))&&(a.nodeType?a[this.expando]=void 0:delete a[this.expando])}},hasData:function(a){var b=a[this.expando];return void 0!==b&&!r.isEmptyObject(b)}};var W=new V,X=new V,Y=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Z=/[A-Z]/g;function $(a){return"true"===a||"false"!==a&&("null"===a?null:a===+a+""?+a:Y.test(a)?JSON.parse(a):a)}function _(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(Z,"-$&").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c=$(c)}catch(e){}X.set(a,b,c)}else c=void 0;return c}r.extend({hasData:function(a){return X.hasData(a)||W.hasData(a)},data:function(a,b,c){return X.access(a,b,c)},removeData:function(a,b){X.remove(a,b)},_data:function(a,b,c){return W.access(a,b,c)},_removeData:function(a,b){W.remove(a,b)}}),r.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=X.get(f),1===f.nodeType&&!W.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=r.camelCase(d.slice(5)),_(f,d,e[d])));W.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){X.set(this,a)}):T(this,function(b){var c;if(f&&void 0===b){if(c=X.get(f,a),void 0!==c)return c;if(c=_(f,a),void 0!==c)return c}else this.each(function(){X.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){X.remove(this,a)})}}),r.extend({queue:function(a,b,c){var d;if(a)return b=(b||"fx")+"queue",d=W.get(a,b),c&&(!d||Array.isArray(c)?d=W.access(a,b,r.makeArray(c)):d.push(c)),d||[]},dequeue:function(a,b){b=b||"fx";var c=r.queue(a,b),d=c.length,e=c.shift(),f=r._queueHooks(a,b),g=function(){r.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return W.get(a,c)||W.access(a,c,{empty:r.Callbacks("once memory").add(function(){W.remove(a,[b+"queue",c])})})}}),r.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?r.queue(this[0],a):void 0===b?this:this.each(function(){var c=r.queue(this,a,b);r._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&r.dequeue(this,a)})},dequeue:function(a){return this.each(function(){r.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=r.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=W.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var aa=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,ba=new RegExp("^(?:([+-])=|)("+aa+")([a-z%]*)$","i"),ca=["Top","Right","Bottom","Left"],da=function(a,b){return a=b||a,"none"===a.style.display||""===a.style.display&&r.contains(a.ownerDocument,a)&&"none"===r.css(a,"display")},ea=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};function fa(a,b,c,d){var e,f=1,g=20,h=d?function(){return d.cur()}:function(){return r.css(a,b,"")},i=h(),j=c&&c[3]||(r.cssNumber[b]?"":"px"),k=(r.cssNumber[b]||"px"!==j&&+i)&&ba.exec(r.css(a,b));if(k&&k[3]!==j){j=j||k[3],c=c||[],k=+i||1;do f=f||".5",k/=f,r.style(a,b,k+j);while(f!==(f=h()/i)&&1!==f&&--g)}return c&&(k=+k||+i||0,e=c[1]?k+(c[1]+1)*c[2]:+c[2],d&&(d.unit=j,d.start=k,d.end=e)),e}var ga={};function ha(a){var b,c=a.ownerDocument,d=a.nodeName,e=ga[d];return e?e:(b=c.body.appendChild(c.createElement(d)),e=r.css(b,"display"),b.parentNode.removeChild(b),"none"===e&&(e="block"),ga[d]=e,e)}function ia(a,b){for(var c,d,e=[],f=0,g=a.length;f<g;f++)d=a[f],d.style&&(c=d.style.display,b?("none"===c&&(e[f]=W.get(d,"display")||null,e[f]||(d.style.display="")),""===d.style.display&&da(d)&&(e[f]=ha(d))):"none"!==c&&(e[f]="none",W.set(d,"display",c)));for(f=0;f<g;f++)null!=e[f]&&(a[f].style.display=e[f]);return a}r.fn.extend({show:function(){return ia(this,!0)},hide:function(){return ia(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){da(this)?r(this).show():r(this).hide()})}});var ja=/^(?:checkbox|radio)$/i,ka=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i,la=/^$|\/(?:java|ecma)script/i,ma={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ma.optgroup=ma.option,ma.tbody=ma.tfoot=ma.colgroup=ma.caption=ma.thead,ma.th=ma.td;function na(a,b){var c;return c="undefined"!=typeof a.getElementsByTagName?a.getElementsByTagName(b||"*"):"undefined"!=typeof a.querySelectorAll?a.querySelectorAll(b||"*"):[],void 0===b||b&&B(a,b)?r.merge([a],c):c}function oa(a,b){for(var c=0,d=a.length;c<d;c++)W.set(a[c],"globalEval",!b||W.get(b[c],"globalEval"))}var pa=/<|&#?\w+;/;function qa(a,b,c,d,e){for(var f,g,h,i,j,k,l=b.createDocumentFragment(),m=[],n=0,o=a.length;n<o;n++)if(f=a[n],f||0===f)if("object"===r.type(f))r.merge(m,f.nodeType?[f]:f);else if(pa.test(f)){g=g||l.appendChild(b.createElement("div")),h=(ka.exec(f)||["",""])[1].toLowerCase(),i=ma[h]||ma._default,g.innerHTML=i[1]+r.htmlPrefilter(f)+i[2],k=i[0];while(k--)g=g.lastChild;r.merge(m,g.childNodes),g=l.firstChild,g.textContent=""}else m.push(b.createTextNode(f));l.textContent="",n=0;while(f=m[n++])if(d&&r.inArray(f,d)>-1)e&&e.push(f);else if(j=r.contains(f.ownerDocument,f),g=na(l.appendChild(f),"script"),j&&oa(g),c){k=0;while(f=g[k++])la.test(f.type||"")&&c.push(f)}return l}!function(){var a=d.createDocumentFragment(),b=a.appendChild(d.createElement("div")),c=d.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),o.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",o.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var ra=d.documentElement,sa=/^key/,ta=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,ua=/^([^.]*)(?:\.(.+)|)/;function va(){return!0}function wa(){return!1}function xa(){try{return d.activeElement}catch(a){}}function ya(a,b,c,d,e,f){var g,h;if("object"==typeof b){"string"!=typeof c&&(d=d||c,c=void 0);for(h in b)ya(a,h,c,d,b[h],f);return a}if(null==d&&null==e?(e=c,d=c=void 0):null==e&&("string"==typeof c?(e=d,d=void 0):(e=d,d=c,c=void 0)),e===!1)e=wa;else if(!e)return a;return 1===f&&(g=e,e=function(a){return r().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=r.guid++)),a.each(function(){r.event.add(this,b,e,d,c)})}r.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=W.get(a);if(q){c.handler&&(f=c,c=f.handler,e=f.selector),e&&r.find.matchesSelector(ra,e),c.guid||(c.guid=r.guid++),(i=q.events)||(i=q.events={}),(g=q.handle)||(g=q.handle=function(b){return"undefined"!=typeof r&&r.event.triggered!==b.type?r.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(L)||[""],j=b.length;while(j--)h=ua.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n&&(l=r.event.special[n]||{},n=(e?l.delegateType:l.bindType)||n,l=r.event.special[n]||{},k=r.extend({type:n,origType:p,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&r.expr.match.needsContext.test(e),namespace:o.join(".")},f),(m=i[n])||(m=i[n]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,o,g)!==!1||a.addEventListener&&a.addEventListener(n,g)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),r.event.global[n]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=W.hasData(a)&&W.get(a);if(q&&(i=q.events)){b=(b||"").match(L)||[""],j=b.length;while(j--)if(h=ua.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n){l=r.event.special[n]||{},n=(d?l.delegateType:l.bindType)||n,m=i[n]||[],h=h[2]&&new RegExp("(^|\\.)"+o.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&p!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,o,q.handle)!==!1||r.removeEvent(a,n,q.handle),delete i[n])}else for(n in i)r.event.remove(a,n+b[j],c,d,!0);r.isEmptyObject(i)&&W.remove(a,"handle events")}},dispatch:function(a){var b=r.event.fix(a),c,d,e,f,g,h,i=new Array(arguments.length),j=(W.get(this,"events")||{})[b.type]||[],k=r.event.special[b.type]||{};for(i[0]=b,c=1;c<arguments.length;c++)i[c]=arguments[c];if(b.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,b)!==!1){h=r.event.handlers.call(this,b,j),c=0;while((f=h[c++])&&!b.isPropagationStopped()){b.currentTarget=f.elem,d=0;while((g=f.handlers[d++])&&!b.isImmediatePropagationStopped())b.rnamespace&&!b.rnamespace.test(g.namespace)||(b.handleObj=g,b.data=g.data,e=((r.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(b.result=e)===!1&&(b.preventDefault(),b.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,b),b.result}},handlers:function(a,b){var c,d,e,f,g,h=[],i=b.delegateCount,j=a.target;if(i&&j.nodeType&&!("click"===a.type&&a.button>=1))for(;j!==this;j=j.parentNode||this)if(1===j.nodeType&&("click"!==a.type||j.disabled!==!0)){for(f=[],g={},c=0;c<i;c++)d=b[c],e=d.selector+" ",void 0===g[e]&&(g[e]=d.needsContext?r(e,this).index(j)>-1:r.find(e,this,null,[j]).length),g[e]&&f.push(d);f.length&&h.push({elem:j,handlers:f})}return j=this,i<b.length&&h.push({elem:j,handlers:b.slice(i)}),h},addProp:function(a,b){Object.defineProperty(r.Event.prototype,a,{enumerable:!0,configurable:!0,get:r.isFunction(b)?function(){if(this.originalEvent)return b(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[a]},set:function(b){Object.defineProperty(this,a,{enumerable:!0,configurable:!0,writable:!0,value:b})}})},fix:function(a){return a[r.expando]?a:new r.Event(a)},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==xa()&&this.focus)return this.focus(),!1},delegateType:"focusin"},blur:{trigger:function(){if(this===xa()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{trigger:function(){if("checkbox"===this.type&&this.click&&B(this,"input"))return this.click(),!1},_default:function(a){return B(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}}},r.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c)},r.Event=function(a,b){return this instanceof r.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?va:wa,this.target=a.target&&3===a.target.nodeType?a.target.parentNode:a.target,this.currentTarget=a.currentTarget,this.relatedTarget=a.relatedTarget):this.type=a,b&&r.extend(this,b),this.timeStamp=a&&a.timeStamp||r.now(),void(this[r.expando]=!0)):new r.Event(a,b)},r.Event.prototype={constructor:r.Event,isDefaultPrevented:wa,isPropagationStopped:wa,isImmediatePropagationStopped:wa,isSimulated:!1,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=va,a&&!this.isSimulated&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=va,a&&!this.isSimulated&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=va,a&&!this.isSimulated&&a.stopImmediatePropagation(),this.stopPropagation()}},r.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(a){var b=a.button;return null==a.which&&sa.test(a.type)?null!=a.charCode?a.charCode:a.keyCode:!a.which&&void 0!==b&&ta.test(a.type)?1&b?1:2&b?3:4&b?2:0:a.which}},r.event.addProp),r.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){r.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return e&&(e===d||r.contains(d,e))||(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),r.fn.extend({on:function(a,b,c,d){return ya(this,a,b,c,d)},one:function(a,b,c,d){return ya(this,a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,r(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return b!==!1&&"function"!=typeof b||(c=b,b=void 0),c===!1&&(c=wa),this.each(function(){r.event.remove(this,a,c,b)})}});var za=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,Aa=/<script|<style|<link/i,Ba=/checked\s*(?:[^=]|=\s*.checked.)/i,Ca=/^true\/(.*)/,Da=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Ea(a,b){return B(a,"table")&&B(11!==b.nodeType?b:b.firstChild,"tr")?r(">tbody",a)[0]||a:a}function Fa(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function Ga(a){var b=Ca.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function Ha(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(W.hasData(a)&&(f=W.access(a),g=W.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;c<d;c++)r.event.add(b,e,j[e][c])}X.hasData(a)&&(h=X.access(a),i=r.extend({},h),X.set(b,i))}}function Ia(a,b){var c=b.nodeName.toLowerCase();"input"===c&&ja.test(a.type)?b.checked=a.checked:"input"!==c&&"textarea"!==c||(b.defaultValue=a.defaultValue)}function Ja(a,b,c,d){b=g.apply([],b);var e,f,h,i,j,k,l=0,m=a.length,n=m-1,q=b[0],s=r.isFunction(q);if(s||m>1&&"string"==typeof q&&!o.checkClone&&Ba.test(q))return a.each(function(e){var f=a.eq(e);s&&(b[0]=q.call(this,e,f.html())),Ja(f,b,c,d)});if(m&&(e=qa(b,a[0].ownerDocument,!1,a,d),f=e.firstChild,1===e.childNodes.length&&(e=f),f||d)){for(h=r.map(na(e,"script"),Fa),i=h.length;l<m;l++)j=e,l!==n&&(j=r.clone(j,!0,!0),i&&r.merge(h,na(j,"script"))),c.call(a[l],j,l);if(i)for(k=h[h.length-1].ownerDocument,r.map(h,Ga),l=0;l<i;l++)j=h[l],la.test(j.type||"")&&!W.access(j,"globalEval")&&r.contains(k,j)&&(j.src?r._evalUrl&&r._evalUrl(j.src):p(j.textContent.replace(Da,""),k))}return a}function Ka(a,b,c){for(var d,e=b?r.filter(b,a):a,f=0;null!=(d=e[f]);f++)c||1!==d.nodeType||r.cleanData(na(d)),d.parentNode&&(c&&r.contains(d.ownerDocument,d)&&oa(na(d,"script")),d.parentNode.removeChild(d));return a}r.extend({htmlPrefilter:function(a){return a.replace(za,"<$1></$2>")},clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=r.contains(a.ownerDocument,a);if(!(o.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||r.isXMLDoc(a)))for(g=na(h),f=na(a),d=0,e=f.length;d<e;d++)Ia(f[d],g[d]);if(b)if(c)for(f=f||na(a),g=g||na(h),d=0,e=f.length;d<e;d++)Ha(f[d],g[d]);else Ha(a,h);return g=na(h,"script"),g.length>0&&oa(g,!i&&na(a,"script")),h},cleanData:function(a){for(var b,c,d,e=r.event.special,f=0;void 0!==(c=a[f]);f++)if(U(c)){if(b=c[W.expando]){if(b.events)for(d in b.events)e[d]?r.event.remove(c,d):r.removeEvent(c,d,b.handle);c[W.expando]=void 0}c[X.expando]&&(c[X.expando]=void 0)}}}),r.fn.extend({detach:function(a){return Ka(this,a,!0)},remove:function(a){return Ka(this,a)},text:function(a){return T(this,function(a){return void 0===a?r.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=a)})},null,a,arguments.length)},append:function(){return Ja(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ea(this,a);b.appendChild(a)}})},prepend:function(){return Ja(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ea(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return Ja(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return Ja(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(r.cleanData(na(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null!=a&&a,b=null==b?a:b,this.map(function(){return r.clone(this,a,b)})},html:function(a){return T(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!Aa.test(a)&&!ma[(ka.exec(a)||["",""])[1].toLowerCase()]){a=r.htmlPrefilter(a);try{for(;c<d;c++)b=this[c]||{},1===b.nodeType&&(r.cleanData(na(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=[];return Ja(this,arguments,function(b){var c=this.parentNode;r.inArray(this,a)<0&&(r.cleanData(na(this)),c&&c.replaceChild(b,this))},a)}}),r.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){r.fn[a]=function(a){for(var c,d=[],e=r(a),f=e.length-1,g=0;g<=f;g++)c=g===f?this:this.clone(!0),r(e[g])[b](c),h.apply(d,c.get());return this.pushStack(d)}});var La=/^margin/,Ma=new RegExp("^("+aa+")(?!px)[a-z%]+$","i"),Na=function(b){var c=b.ownerDocument.defaultView;return c&&c.opener||(c=a),c.getComputedStyle(b)};!function(){function b(){if(i){i.style.cssText="box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",i.innerHTML="",ra.appendChild(h);var b=a.getComputedStyle(i);c="1%"!==b.top,g="2px"===b.marginLeft,e="4px"===b.width,i.style.marginRight="50%",f="4px"===b.marginRight,ra.removeChild(h),i=null}}var c,e,f,g,h=d.createElement("div"),i=d.createElement("div");i.style&&(i.style.backgroundClip="content-box",i.cloneNode(!0).style.backgroundClip="",o.clearCloneStyle="content-box"===i.style.backgroundClip,h.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",h.appendChild(i),r.extend(o,{pixelPosition:function(){return b(),c},boxSizingReliable:function(){return b(),e},pixelMarginRight:function(){return b(),f},reliableMarginLeft:function(){return b(),g}}))}();function Oa(a,b,c){var d,e,f,g,h=a.style;return c=c||Na(a),c&&(g=c.getPropertyValue(b)||c[b],""!==g||r.contains(a.ownerDocument,a)||(g=r.style(a,b)),!o.pixelMarginRight()&&Ma.test(g)&&La.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function Pa(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}var Qa=/^(none|table(?!-c[ea]).+)/,Ra=/^--/,Sa={position:"absolute",visibility:"hidden",display:"block"},Ta={letterSpacing:"0",fontWeight:"400"},Ua=["Webkit","Moz","ms"],Va=d.createElement("div").style;function Wa(a){if(a in Va)return a;var b=a[0].toUpperCase()+a.slice(1),c=Ua.length;while(c--)if(a=Ua[c]+b,a in Va)return a}function Xa(a){var b=r.cssProps[a];return b||(b=r.cssProps[a]=Wa(a)||a),b}function Ya(a,b,c){var d=ba.exec(b);return d?Math.max(0,d[2]-(c||0))+(d[3]||"px"):b}function Za(a,b,c,d,e){var f,g=0;for(f=c===(d?"border":"content")?4:"width"===b?1:0;f<4;f+=2)"margin"===c&&(g+=r.css(a,c+ca[f],!0,e)),d?("content"===c&&(g-=r.css(a,"padding"+ca[f],!0,e)),"margin"!==c&&(g-=r.css(a,"border"+ca[f]+"Width",!0,e))):(g+=r.css(a,"padding"+ca[f],!0,e),"padding"!==c&&(g+=r.css(a,"border"+ca[f]+"Width",!0,e)));return g}function $a(a,b,c){var d,e=Na(a),f=Oa(a,b,e),g="border-box"===r.css(a,"boxSizing",!1,e);return Ma.test(f)?f:(d=g&&(o.boxSizingReliable()||f===a.style[b]),"auto"===f&&(f=a["offset"+b[0].toUpperCase()+b.slice(1)]),f=parseFloat(f)||0,f+Za(a,b,c||(g?"border":"content"),d,e)+"px")}r.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Oa(a,"opacity");return""===c?"1":c}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=r.camelCase(b),i=Ra.test(b),j=a.style;return i||(b=Xa(h)),g=r.cssHooks[b]||r.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:j[b]:(f=typeof c,"string"===f&&(e=ba.exec(c))&&e[1]&&(c=fa(a,b,e),f="number"),null!=c&&c===c&&("number"===f&&(c+=e&&e[3]||(r.cssNumber[h]?"":"px")),o.clearCloneStyle||""!==c||0!==b.indexOf("background")||(j[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i?j.setProperty(b,c):j[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=r.camelCase(b),i=Ra.test(b);return i||(b=Xa(h)),g=r.cssHooks[b]||r.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=Oa(a,b,d)),"normal"===e&&b in Ta&&(e=Ta[b]),""===c||c?(f=parseFloat(e),c===!0||isFinite(f)?f||0:e):e}}),r.each(["height","width"],function(a,b){r.cssHooks[b]={get:function(a,c,d){if(c)return!Qa.test(r.css(a,"display"))||a.getClientRects().length&&a.getBoundingClientRect().width?$a(a,b,d):ea(a,Sa,function(){return $a(a,b,d)})},set:function(a,c,d){var e,f=d&&Na(a),g=d&&Za(a,b,d,"border-box"===r.css(a,"boxSizing",!1,f),f);return g&&(e=ba.exec(c))&&"px"!==(e[3]||"px")&&(a.style[b]=c,c=r.css(a,b)),Ya(a,c,g)}}}),r.cssHooks.marginLeft=Pa(o.reliableMarginLeft,function(a,b){if(b)return(parseFloat(Oa(a,"marginLeft"))||a.getBoundingClientRect().left-ea(a,{marginLeft:0},function(){return a.getBoundingClientRect().left}))+"px"}),r.each({margin:"",padding:"",border:"Width"},function(a,b){r.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];d<4;d++)e[a+ca[d]+b]=f[d]||f[d-2]||f[0];return e}},La.test(a)||(r.cssHooks[a+b].set=Ya)}),r.fn.extend({css:function(a,b){return T(this,function(a,b,c){var d,e,f={},g=0;if(Array.isArray(b)){for(d=Na(a),e=b.length;g<e;g++)f[b[g]]=r.css(a,b[g],!1,d);return f}return void 0!==c?r.style(a,b,c):r.css(a,b)},a,b,arguments.length>1)}});function _a(a,b,c,d,e){return new _a.prototype.init(a,b,c,d,e)}r.Tween=_a,_a.prototype={constructor:_a,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||r.easing._default,this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(r.cssNumber[c]?"":"px")},cur:function(){var a=_a.propHooks[this.prop];return a&&a.get?a.get(this):_a.propHooks._default.get(this)},run:function(a){var b,c=_a.propHooks[this.prop];return this.options.duration?this.pos=b=r.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):_a.propHooks._default.set(this),this}},_a.prototype.init.prototype=_a.prototype,_a.propHooks={_default:{get:function(a){var b;return 1!==a.elem.nodeType||null!=a.elem[a.prop]&&null==a.elem.style[a.prop]?a.elem[a.prop]:(b=r.css(a.elem,a.prop,""),b&&"auto"!==b?b:0)},set:function(a){r.fx.step[a.prop]?r.fx.step[a.prop](a):1!==a.elem.nodeType||null==a.elem.style[r.cssProps[a.prop]]&&!r.cssHooks[a.prop]?a.elem[a.prop]=a.now:r.style(a.elem,a.prop,a.now+a.unit)}}},_a.propHooks.scrollTop=_a.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},r.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2},_default:"swing"},r.fx=_a.prototype.init,r.fx.step={};var ab,bb,cb=/^(?:toggle|show|hide)$/,db=/queueHooks$/;function eb(){bb&&(d.hidden===!1&&a.requestAnimationFrame?a.requestAnimationFrame(eb):a.setTimeout(eb,r.fx.interval),r.fx.tick())}function fb(){return a.setTimeout(function(){ab=void 0}),ab=r.now()}function gb(a,b){var c,d=0,e={height:a};for(b=b?1:0;d<4;d+=2-b)c=ca[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function hb(a,b,c){for(var d,e=(kb.tweeners[b]||[]).concat(kb.tweeners["*"]),f=0,g=e.length;f<g;f++)if(d=e[f].call(c,b,a))return d}function ib(a,b,c){var d,e,f,g,h,i,j,k,l="width"in b||"height"in b,m=this,n={},o=a.style,p=a.nodeType&&da(a),q=W.get(a,"fxshow");c.queue||(g=r._queueHooks(a,"fx"),null==g.unqueued&&(g.unqueued=0,h=g.empty.fire,g.empty.fire=function(){g.unqueued||h()}),g.unqueued++,m.always(function(){m.always(function(){g.unqueued--,r.queue(a,"fx").length||g.empty.fire()})}));for(d in b)if(e=b[d],cb.test(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}n[d]=q&&q[d]||r.style(a,d)}if(i=!r.isEmptyObject(b),i||!r.isEmptyObject(n)){l&&1===a.nodeType&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=q&&q.display,null==j&&(j=W.get(a,"display")),k=r.css(a,"display"),"none"===k&&(j?k=j:(ia([a],!0),j=a.style.display||j,k=r.css(a,"display"),ia([a]))),("inline"===k||"inline-block"===k&&null!=j)&&"none"===r.css(a,"float")&&(i||(m.done(function(){o.display=j}),null==j&&(k=o.display,j="none"===k?"":k)),o.display="inline-block")),c.overflow&&(o.overflow="hidden",m.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]})),i=!1;for(d in n)i||(q?"hidden"in q&&(p=q.hidden):q=W.access(a,"fxshow",{display:j}),f&&(q.hidden=!p),p&&ia([a],!0),m.done(function(){p||ia([a]),W.remove(a,"fxshow");for(d in n)r.style(a,d,n[d])})),i=hb(p?q[d]:0,d,m),d in q||(q[d]=i.start,p&&(i.end=i.start,i.start=0))}}function jb(a,b){var c,d,e,f,g;for(c in a)if(d=r.camelCase(c),e=b[d],f=a[c],Array.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=r.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function kb(a,b,c){var d,e,f=0,g=kb.prefilters.length,h=r.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=ab||fb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;g<i;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),f<1&&i?c:(i||h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:r.extend({},b),opts:r.extend(!0,{specialEasing:{},easing:r.easing._default},c),originalProperties:b,originalOptions:c,startTime:ab||fb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=r.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;c<d;c++)j.tweens[c].run(1);return b?(h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j,b])):h.rejectWith(a,[j,b]),this}}),k=j.props;for(jb(k,j.opts.specialEasing);f<g;f++)if(d=kb.prefilters[f].call(j,a,k,j.opts))return r.isFunction(d.stop)&&(r._queueHooks(j.elem,j.opts.queue).stop=r.proxy(d.stop,d)),d;return r.map(k,hb,j),r.isFunction(j.opts.start)&&j.opts.start.call(a,j),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always),r.fx.timer(r.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j}r.Animation=r.extend(kb,{tweeners:{"*":[function(a,b){var c=this.createTween(a,b);return fa(c.elem,a,ba.exec(b),c),c}]},tweener:function(a,b){r.isFunction(a)?(b=a,a=["*"]):a=a.match(L);for(var c,d=0,e=a.length;d<e;d++)c=a[d],kb.tweeners[c]=kb.tweeners[c]||[],kb.tweeners[c].unshift(b)},prefilters:[ib],prefilter:function(a,b){b?kb.prefilters.unshift(a):kb.prefilters.push(a)}}),r.speed=function(a,b,c){var d=a&&"object"==typeof a?r.extend({},a):{complete:c||!c&&b||r.isFunction(a)&&a,duration:a,easing:c&&b||b&&!r.isFunction(b)&&b};return r.fx.off?d.duration=0:"number"!=typeof d.duration&&(d.duration in r.fx.speeds?d.duration=r.fx.speeds[d.duration]:d.duration=r.fx.speeds._default),null!=d.queue&&d.queue!==!0||(d.queue="fx"),d.old=d.complete,d.complete=function(){r.isFunction(d.old)&&d.old.call(this),d.queue&&r.dequeue(this,d.queue)},d},r.fn.extend({fadeTo:function(a,b,c,d){return this.filter(da).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=r.isEmptyObject(a),f=r.speed(b,c,d),g=function(){var b=kb(this,r.extend({},a),f);(e||W.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=r.timers,g=W.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&db.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));!b&&c||r.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=W.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=r.timers,g=d?d.length:0;for(c.finish=!0,r.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;b<g;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),r.each(["toggle","show","hide"],function(a,b){var c=r.fn[b];r.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(gb(b,!0),a,d,e)}}),r.each({slideDown:gb("show"),slideUp:gb("hide"),slideToggle:gb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){r.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),r.timers=[],r.fx.tick=function(){var a,b=0,c=r.timers;for(ab=r.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||r.fx.stop(),ab=void 0},r.fx.timer=function(a){r.timers.push(a),r.fx.start()},r.fx.interval=13,r.fx.start=function(){bb||(bb=!0,eb())},r.fx.stop=function(){bb=null},r.fx.speeds={slow:600,fast:200,_default:400},r.fn.delay=function(b,c){return b=r.fx?r.fx.speeds[b]||b:b,c=c||"fx",this.queue(c,function(c,d){var e=a.setTimeout(c,b);d.stop=function(){a.clearTimeout(e)}})},function(){var a=d.createElement("input"),b=d.createElement("select"),c=b.appendChild(d.createElement("option"));a.type="checkbox",o.checkOn=""!==a.value,o.optSelected=c.selected,a=d.createElement("input"),a.value="t",a.type="radio",o.radioValue="t"===a.value}();var lb,mb=r.expr.attrHandle;r.fn.extend({attr:function(a,b){return T(this,r.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){r.removeAttr(this,a)})}}),r.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return"undefined"==typeof a.getAttribute?r.prop(a,b,c):(1===f&&r.isXMLDoc(a)||(e=r.attrHooks[b.toLowerCase()]||(r.expr.match.bool.test(b)?lb:void 0)),void 0!==c?null===c?void r.removeAttr(a,b):e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:(a.setAttribute(b,c+""),c):e&&"get"in e&&null!==(d=e.get(a,b))?d:(d=r.find.attr(a,b),
null==d?void 0:d))},attrHooks:{type:{set:function(a,b){if(!o.radioValue&&"radio"===b&&B(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}},removeAttr:function(a,b){var c,d=0,e=b&&b.match(L);if(e&&1===a.nodeType)while(c=e[d++])a.removeAttribute(c)}}),lb={set:function(a,b,c){return b===!1?r.removeAttr(a,c):a.setAttribute(c,c),c}},r.each(r.expr.match.bool.source.match(/\w+/g),function(a,b){var c=mb[b]||r.find.attr;mb[b]=function(a,b,d){var e,f,g=b.toLowerCase();return d||(f=mb[g],mb[g]=e,e=null!=c(a,b,d)?g:null,mb[g]=f),e}});var nb=/^(?:input|select|textarea|button)$/i,ob=/^(?:a|area)$/i;r.fn.extend({prop:function(a,b){return T(this,r.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[r.propFix[a]||a]})}}),r.extend({prop:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return 1===f&&r.isXMLDoc(a)||(b=r.propFix[b]||b,e=r.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=r.find.attr(a,"tabindex");return b?parseInt(b,10):nb.test(a.nodeName)||ob.test(a.nodeName)&&a.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),o.optSelected||(r.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null},set:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex)}}),r.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){r.propFix[this.toLowerCase()]=this});function pb(a){var b=a.match(L)||[];return b.join(" ")}function qb(a){return a.getAttribute&&a.getAttribute("class")||""}r.fn.extend({addClass:function(a){var b,c,d,e,f,g,h,i=0;if(r.isFunction(a))return this.each(function(b){r(this).addClass(a.call(this,b,qb(this)))});if("string"==typeof a&&a){b=a.match(L)||[];while(c=this[i++])if(e=qb(c),d=1===c.nodeType&&" "+pb(e)+" "){g=0;while(f=b[g++])d.indexOf(" "+f+" ")<0&&(d+=f+" ");h=pb(d),e!==h&&c.setAttribute("class",h)}}return this},removeClass:function(a){var b,c,d,e,f,g,h,i=0;if(r.isFunction(a))return this.each(function(b){r(this).removeClass(a.call(this,b,qb(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof a&&a){b=a.match(L)||[];while(c=this[i++])if(e=qb(c),d=1===c.nodeType&&" "+pb(e)+" "){g=0;while(f=b[g++])while(d.indexOf(" "+f+" ")>-1)d=d.replace(" "+f+" "," ");h=pb(d),e!==h&&c.setAttribute("class",h)}}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):r.isFunction(a)?this.each(function(c){r(this).toggleClass(a.call(this,c,qb(this),b),b)}):this.each(function(){var b,d,e,f;if("string"===c){d=0,e=r(this),f=a.match(L)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else void 0!==a&&"boolean"!==c||(b=qb(this),b&&W.set(this,"__className__",b),this.setAttribute&&this.setAttribute("class",b||a===!1?"":W.get(this,"__className__")||""))})},hasClass:function(a){var b,c,d=0;b=" "+a+" ";while(c=this[d++])if(1===c.nodeType&&(" "+pb(qb(c))+" ").indexOf(b)>-1)return!0;return!1}});var rb=/\r/g;r.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=r.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,r(this).val()):a,null==e?e="":"number"==typeof e?e+="":Array.isArray(e)&&(e=r.map(e,function(a){return null==a?"":a+""})),b=r.valHooks[this.type]||r.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=r.valHooks[e.type]||r.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(rb,""):null==c?"":c)}}}),r.extend({valHooks:{option:{get:function(a){var b=r.find.attr(a,"value");return null!=b?b:pb(r.text(a))}},select:{get:function(a){var b,c,d,e=a.options,f=a.selectedIndex,g="select-one"===a.type,h=g?null:[],i=g?f+1:e.length;for(d=f<0?i:g?f:0;d<i;d++)if(c=e[d],(c.selected||d===f)&&!c.disabled&&(!c.parentNode.disabled||!B(c.parentNode,"optgroup"))){if(b=r(c).val(),g)return b;h.push(b)}return h},set:function(a,b){var c,d,e=a.options,f=r.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=r.inArray(r.valHooks.option.get(d),f)>-1)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),r.each(["radio","checkbox"],function(){r.valHooks[this]={set:function(a,b){if(Array.isArray(b))return a.checked=r.inArray(r(a).val(),b)>-1}},o.checkOn||(r.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var sb=/^(?:focusinfocus|focusoutblur)$/;r.extend(r.event,{trigger:function(b,c,e,f){var g,h,i,j,k,m,n,o=[e||d],p=l.call(b,"type")?b.type:b,q=l.call(b,"namespace")?b.namespace.split("."):[];if(h=i=e=e||d,3!==e.nodeType&&8!==e.nodeType&&!sb.test(p+r.event.triggered)&&(p.indexOf(".")>-1&&(q=p.split("."),p=q.shift(),q.sort()),k=p.indexOf(":")<0&&"on"+p,b=b[r.expando]?b:new r.Event(p,"object"==typeof b&&b),b.isTrigger=f?2:3,b.namespace=q.join("."),b.rnamespace=b.namespace?new RegExp("(^|\\.)"+q.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=e),c=null==c?[b]:r.makeArray(c,[b]),n=r.event.special[p]||{},f||!n.trigger||n.trigger.apply(e,c)!==!1)){if(!f&&!n.noBubble&&!r.isWindow(e)){for(j=n.delegateType||p,sb.test(j+p)||(h=h.parentNode);h;h=h.parentNode)o.push(h),i=h;i===(e.ownerDocument||d)&&o.push(i.defaultView||i.parentWindow||a)}g=0;while((h=o[g++])&&!b.isPropagationStopped())b.type=g>1?j:n.bindType||p,m=(W.get(h,"events")||{})[b.type]&&W.get(h,"handle"),m&&m.apply(h,c),m=k&&h[k],m&&m.apply&&U(h)&&(b.result=m.apply(h,c),b.result===!1&&b.preventDefault());return b.type=p,f||b.isDefaultPrevented()||n._default&&n._default.apply(o.pop(),c)!==!1||!U(e)||k&&r.isFunction(e[p])&&!r.isWindow(e)&&(i=e[k],i&&(e[k]=null),r.event.triggered=p,e[p](),r.event.triggered=void 0,i&&(e[k]=i)),b.result}},simulate:function(a,b,c){var d=r.extend(new r.Event,c,{type:a,isSimulated:!0});r.event.trigger(d,null,b)}}),r.fn.extend({trigger:function(a,b){return this.each(function(){r.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];if(c)return r.event.trigger(a,b,c,!0)}}),r.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(a,b){r.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),r.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),o.focusin="onfocusin"in a,o.focusin||r.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){r.event.simulate(b,a.target,r.event.fix(a))};r.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=W.access(d,b);e||d.addEventListener(a,c,!0),W.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=W.access(d,b)-1;e?W.access(d,b,e):(d.removeEventListener(a,c,!0),W.remove(d,b))}}});var tb=a.location,ub=r.now(),vb=/\?/;r.parseXML=function(b){var c;if(!b||"string"!=typeof b)return null;try{c=(new a.DOMParser).parseFromString(b,"text/xml")}catch(d){c=void 0}return c&&!c.getElementsByTagName("parsererror").length||r.error("Invalid XML: "+b),c};var wb=/\[\]$/,xb=/\r?\n/g,yb=/^(?:submit|button|image|reset|file)$/i,zb=/^(?:input|select|textarea|keygen)/i;function Ab(a,b,c,d){var e;if(Array.isArray(b))r.each(b,function(b,e){c||wb.test(a)?d(a,e):Ab(a+"["+("object"==typeof e&&null!=e?b:"")+"]",e,c,d)});else if(c||"object"!==r.type(b))d(a,b);else for(e in b)Ab(a+"["+e+"]",b[e],c,d)}r.param=function(a,b){var c,d=[],e=function(a,b){var c=r.isFunction(b)?b():b;d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(null==c?"":c)};if(Array.isArray(a)||a.jquery&&!r.isPlainObject(a))r.each(a,function(){e(this.name,this.value)});else for(c in a)Ab(c,a[c],b,e);return d.join("&")},r.fn.extend({serialize:function(){return r.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=r.prop(this,"elements");return a?r.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!r(this).is(":disabled")&&zb.test(this.nodeName)&&!yb.test(a)&&(this.checked||!ja.test(a))}).map(function(a,b){var c=r(this).val();return null==c?null:Array.isArray(c)?r.map(c,function(a){return{name:b.name,value:a.replace(xb,"\r\n")}}):{name:b.name,value:c.replace(xb,"\r\n")}}).get()}});var Bb=/%20/g,Cb=/#.*$/,Db=/([?&])_=[^&]*/,Eb=/^(.*?):[ \t]*([^\r\n]*)$/gm,Fb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Gb=/^(?:GET|HEAD)$/,Hb=/^\/\//,Ib={},Jb={},Kb="*/".concat("*"),Lb=d.createElement("a");Lb.href=tb.href;function Mb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(L)||[];if(r.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Nb(a,b,c,d){var e={},f=a===Jb;function g(h){var i;return e[h]=!0,r.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Ob(a,b){var c,d,e=r.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&r.extend(!0,a,d),a}function Pb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}if(f)return f!==i[0]&&i.unshift(f),c[f]}function Qb(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}r.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:tb.href,type:"GET",isLocal:Fb.test(tb.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Kb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":r.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Ob(Ob(a,r.ajaxSettings),b):Ob(r.ajaxSettings,a)},ajaxPrefilter:Mb(Ib),ajaxTransport:Mb(Jb),ajax:function(b,c){"object"==typeof b&&(c=b,b=void 0),c=c||{};var e,f,g,h,i,j,k,l,m,n,o=r.ajaxSetup({},c),p=o.context||o,q=o.context&&(p.nodeType||p.jquery)?r(p):r.event,s=r.Deferred(),t=r.Callbacks("once memory"),u=o.statusCode||{},v={},w={},x="canceled",y={readyState:0,getResponseHeader:function(a){var b;if(k){if(!h){h={};while(b=Eb.exec(g))h[b[1].toLowerCase()]=b[2]}b=h[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return k?g:null},setRequestHeader:function(a,b){return null==k&&(a=w[a.toLowerCase()]=w[a.toLowerCase()]||a,v[a]=b),this},overrideMimeType:function(a){return null==k&&(o.mimeType=a),this},statusCode:function(a){var b;if(a)if(k)y.always(a[y.status]);else for(b in a)u[b]=[u[b],a[b]];return this},abort:function(a){var b=a||x;return e&&e.abort(b),A(0,b),this}};if(s.promise(y),o.url=((b||o.url||tb.href)+"").replace(Hb,tb.protocol+"//"),o.type=c.method||c.type||o.method||o.type,o.dataTypes=(o.dataType||"*").toLowerCase().match(L)||[""],null==o.crossDomain){j=d.createElement("a");try{j.href=o.url,j.href=j.href,o.crossDomain=Lb.protocol+"//"+Lb.host!=j.protocol+"//"+j.host}catch(z){o.crossDomain=!0}}if(o.data&&o.processData&&"string"!=typeof o.data&&(o.data=r.param(o.data,o.traditional)),Nb(Ib,o,c,y),k)return y;l=r.event&&o.global,l&&0===r.active++&&r.event.trigger("ajaxStart"),o.type=o.type.toUpperCase(),o.hasContent=!Gb.test(o.type),f=o.url.replace(Cb,""),o.hasContent?o.data&&o.processData&&0===(o.contentType||"").indexOf("application/x-www-form-urlencoded")&&(o.data=o.data.replace(Bb,"+")):(n=o.url.slice(f.length),o.data&&(f+=(vb.test(f)?"&":"?")+o.data,delete o.data),o.cache===!1&&(f=f.replace(Db,"$1"),n=(vb.test(f)?"&":"?")+"_="+ub++ +n),o.url=f+n),o.ifModified&&(r.lastModified[f]&&y.setRequestHeader("If-Modified-Since",r.lastModified[f]),r.etag[f]&&y.setRequestHeader("If-None-Match",r.etag[f])),(o.data&&o.hasContent&&o.contentType!==!1||c.contentType)&&y.setRequestHeader("Content-Type",o.contentType),y.setRequestHeader("Accept",o.dataTypes[0]&&o.accepts[o.dataTypes[0]]?o.accepts[o.dataTypes[0]]+("*"!==o.dataTypes[0]?", "+Kb+"; q=0.01":""):o.accepts["*"]);for(m in o.headers)y.setRequestHeader(m,o.headers[m]);if(o.beforeSend&&(o.beforeSend.call(p,y,o)===!1||k))return y.abort();if(x="abort",t.add(o.complete),y.done(o.success),y.fail(o.error),e=Nb(Jb,o,c,y)){if(y.readyState=1,l&&q.trigger("ajaxSend",[y,o]),k)return y;o.async&&o.timeout>0&&(i=a.setTimeout(function(){y.abort("timeout")},o.timeout));try{k=!1,e.send(v,A)}catch(z){if(k)throw z;A(-1,z)}}else A(-1,"No Transport");function A(b,c,d,h){var j,m,n,v,w,x=c;k||(k=!0,i&&a.clearTimeout(i),e=void 0,g=h||"",y.readyState=b>0?4:0,j=b>=200&&b<300||304===b,d&&(v=Pb(o,y,d)),v=Qb(o,v,y,j),j?(o.ifModified&&(w=y.getResponseHeader("Last-Modified"),w&&(r.lastModified[f]=w),w=y.getResponseHeader("etag"),w&&(r.etag[f]=w)),204===b||"HEAD"===o.type?x="nocontent":304===b?x="notmodified":(x=v.state,m=v.data,n=v.error,j=!n)):(n=x,!b&&x||(x="error",b<0&&(b=0))),y.status=b,y.statusText=(c||x)+"",j?s.resolveWith(p,[m,x,y]):s.rejectWith(p,[y,x,n]),y.statusCode(u),u=void 0,l&&q.trigger(j?"ajaxSuccess":"ajaxError",[y,o,j?m:n]),t.fireWith(p,[y,x]),l&&(q.trigger("ajaxComplete",[y,o]),--r.active||r.event.trigger("ajaxStop")))}return y},getJSON:function(a,b,c){return r.get(a,b,c,"json")},getScript:function(a,b){return r.get(a,void 0,b,"script")}}),r.each(["get","post"],function(a,b){r[b]=function(a,c,d,e){return r.isFunction(c)&&(e=e||d,d=c,c=void 0),r.ajax(r.extend({url:a,type:b,dataType:e,data:c,success:d},r.isPlainObject(a)&&a))}}),r._evalUrl=function(a){return r.ajax({url:a,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,"throws":!0})},r.fn.extend({wrapAll:function(a){var b;return this[0]&&(r.isFunction(a)&&(a=a.call(this[0])),b=r(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this},wrapInner:function(a){return r.isFunction(a)?this.each(function(b){r(this).wrapInner(a.call(this,b))}):this.each(function(){var b=r(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=r.isFunction(a);return this.each(function(c){r(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(a){return this.parent(a).not("body").each(function(){r(this).replaceWith(this.childNodes)}),this}}),r.expr.pseudos.hidden=function(a){return!r.expr.pseudos.visible(a)},r.expr.pseudos.visible=function(a){return!!(a.offsetWidth||a.offsetHeight||a.getClientRects().length)},r.ajaxSettings.xhr=function(){try{return new a.XMLHttpRequest}catch(b){}};var Rb={0:200,1223:204},Sb=r.ajaxSettings.xhr();o.cors=!!Sb&&"withCredentials"in Sb,o.ajax=Sb=!!Sb,r.ajaxTransport(function(b){var c,d;if(o.cors||Sb&&!b.crossDomain)return{send:function(e,f){var g,h=b.xhr();if(h.open(b.type,b.url,b.async,b.username,b.password),b.xhrFields)for(g in b.xhrFields)h[g]=b.xhrFields[g];b.mimeType&&h.overrideMimeType&&h.overrideMimeType(b.mimeType),b.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest");for(g in e)h.setRequestHeader(g,e[g]);c=function(a){return function(){c&&(c=d=h.onload=h.onerror=h.onabort=h.onreadystatechange=null,"abort"===a?h.abort():"error"===a?"number"!=typeof h.status?f(0,"error"):f(h.status,h.statusText):f(Rb[h.status]||h.status,h.statusText,"text"!==(h.responseType||"text")||"string"!=typeof h.responseText?{binary:h.response}:{text:h.responseText},h.getAllResponseHeaders()))}},h.onload=c(),d=h.onerror=c("error"),void 0!==h.onabort?h.onabort=d:h.onreadystatechange=function(){4===h.readyState&&a.setTimeout(function(){c&&d()})},c=c("abort");try{h.send(b.hasContent&&b.data||null)}catch(i){if(c)throw i}},abort:function(){c&&c()}}}),r.ajaxPrefilter(function(a){a.crossDomain&&(a.contents.script=!1)}),r.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(a){return r.globalEval(a),a}}}),r.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),r.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(e,f){b=r("<script>").prop({charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&f("error"===a.type?404:200,a.type)}),d.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Tb=[],Ub=/(=)\?(?=&|$)|\?\?/;r.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Tb.pop()||r.expando+"_"+ub++;return this[a]=!0,a}}),r.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Ub.test(b.url)?"url":"string"==typeof b.data&&0===(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Ub.test(b.data)&&"data");if(h||"jsonp"===b.dataTypes[0])return e=b.jsonpCallback=r.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Ub,"$1"+e):b.jsonp!==!1&&(b.url+=(vb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||r.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){void 0===f?r(a).removeProp(e):a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Tb.push(e)),g&&r.isFunction(f)&&f(g[0]),g=f=void 0}),"script"}),o.createHTMLDocument=function(){var a=d.implementation.createHTMLDocument("").body;return a.innerHTML="<form></form><form></form>",2===a.childNodes.length}(),r.parseHTML=function(a,b,c){if("string"!=typeof a)return[];"boolean"==typeof b&&(c=b,b=!1);var e,f,g;return b||(o.createHTMLDocument?(b=d.implementation.createHTMLDocument(""),e=b.createElement("base"),e.href=d.location.href,b.head.appendChild(e)):b=d),f=C.exec(a),g=!c&&[],f?[b.createElement(f[1])]:(f=qa([a],b,g),g&&g.length&&r(g).remove(),r.merge([],f.childNodes))},r.fn.load=function(a,b,c){var d,e,f,g=this,h=a.indexOf(" ");return h>-1&&(d=pb(a.slice(h)),a=a.slice(0,h)),r.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&r.ajax({url:a,type:e||"GET",dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?r("<div>").append(r.parseHTML(a)).find(d):a)}).always(c&&function(a,b){g.each(function(){c.apply(this,f||[a.responseText,b,a])})}),this},r.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){r.fn[b]=function(a){return this.on(b,a)}}),r.expr.pseudos.animated=function(a){return r.grep(r.timers,function(b){return a===b.elem}).length},r.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=r.css(a,"position"),l=r(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=r.css(a,"top"),i=r.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),r.isFunction(b)&&(b=b.call(a,c,r.extend({},h))),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},r.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){r.offset.setOffset(this,a,b)});var b,c,d,e,f=this[0];if(f)return f.getClientRects().length?(d=f.getBoundingClientRect(),b=f.ownerDocument,c=b.documentElement,e=b.defaultView,{top:d.top+e.pageYOffset-c.clientTop,left:d.left+e.pageXOffset-c.clientLeft}):{top:0,left:0}},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===r.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),B(a[0],"html")||(d=a.offset()),d={top:d.top+r.css(a[0],"borderTopWidth",!0),left:d.left+r.css(a[0],"borderLeftWidth",!0)}),{top:b.top-d.top-r.css(c,"marginTop",!0),left:b.left-d.left-r.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent;while(a&&"static"===r.css(a,"position"))a=a.offsetParent;return a||ra})}}),r.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c="pageYOffset"===b;r.fn[a]=function(d){return T(this,function(a,d,e){var f;return r.isWindow(a)?f=a:9===a.nodeType&&(f=a.defaultView),void 0===e?f?f[b]:a[d]:void(f?f.scrollTo(c?f.pageXOffset:e,c?e:f.pageYOffset):a[d]=e)},a,d,arguments.length)}}),r.each(["top","left"],function(a,b){r.cssHooks[b]=Pa(o.pixelPosition,function(a,c){if(c)return c=Oa(a,b),Ma.test(c)?r(a).position()[b]+"px":c})}),r.each({Height:"height",Width:"width"},function(a,b){r.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){r.fn[d]=function(e,f){var g=arguments.length&&(c||"boolean"!=typeof e),h=c||(e===!0||f===!0?"margin":"border");return T(this,function(b,c,e){var f;return r.isWindow(b)?0===d.indexOf("outer")?b["inner"+a]:b.document.documentElement["client"+a]:9===b.nodeType?(f=b.documentElement,Math.max(b.body["scroll"+a],f["scroll"+a],b.body["offset"+a],f["offset"+a],f["client"+a])):void 0===e?r.css(b,c,h):r.style(b,c,e,h)},b,g?e:void 0,g)}})}),r.fn.extend({bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}}),r.holdReady=function(a){a?r.readyWait++:r.ready(!0)},r.isArray=Array.isArray,r.parseJSON=JSON.parse,r.nodeName=B,"function"==typeof define&&define.amd&&define("jquery",[],function(){return r});var Vb=a.jQuery,Wb=a.$;return r.noConflict=function(b){return a.$===r&&(a.$=Wb),b&&a.jQuery===r&&(a.jQuery=Vb),r},b||(a.jQuery=a.$=r),r});
;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function () {
  var settingsElement = document.querySelector('head > script[type="application/json"][data-drupal-selector="drupal-settings-json"], body > script[type="application/json"][data-drupal-selector="drupal-settings-json"]');

  window.drupalSettings = {};

  if (settingsElement !== null) {
    window.drupalSettings = JSON.parse(settingsElement.textContent);
  }
})();;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

window.Drupal = { behaviors: {}, locale: {} };

(function (Drupal, drupalSettings, drupalTranslations) {
  Drupal.throwError = function (error) {
    setTimeout(function () {
      throw error;
    }, 0);
  };

  Drupal.attachBehaviors = function (context, settings) {
    context = context || document;
    settings = settings || drupalSettings;
    var behaviors = Drupal.behaviors;

    Object.keys(behaviors || {}).forEach(function (i) {
      if (typeof behaviors[i].attach === 'function') {
        try {
          behaviors[i].attach(context, settings);
        } catch (e) {
          Drupal.throwError(e);
        }
      }
    });
  };

  Drupal.detachBehaviors = function (context, settings, trigger) {
    context = context || document;
    settings = settings || drupalSettings;
    trigger = trigger || 'unload';
    var behaviors = Drupal.behaviors;

    Object.keys(behaviors || {}).forEach(function (i) {
      if (typeof behaviors[i].detach === 'function') {
        try {
          behaviors[i].detach(context, settings, trigger);
        } catch (e) {
          Drupal.throwError(e);
        }
      }
    });
  };

  Drupal.checkPlain = function (str) {
    str = str.toString().replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
    return str;
  };

  Drupal.formatString = function (str, args) {
    var processedArgs = {};

    Object.keys(args || {}).forEach(function (key) {
      switch (key.charAt(0)) {
        case '@':
          processedArgs[key] = Drupal.checkPlain(args[key]);
          break;

        case '!':
          processedArgs[key] = args[key];
          break;

        default:
          processedArgs[key] = Drupal.theme('placeholder', args[key]);
          break;
      }
    });

    return Drupal.stringReplace(str, processedArgs, null);
  };

  Drupal.stringReplace = function (str, args, keys) {
    if (str.length === 0) {
      return str;
    }

    if (!Array.isArray(keys)) {
      keys = Object.keys(args || {});

      keys.sort(function (a, b) {
        return a.length - b.length;
      });
    }

    if (keys.length === 0) {
      return str;
    }

    var key = keys.pop();
    var fragments = str.split(key);

    if (keys.length) {
      for (var i = 0; i < fragments.length; i++) {
        fragments[i] = Drupal.stringReplace(fragments[i], args, keys.slice(0));
      }
    }

    return fragments.join(args[key]);
  };

  Drupal.t = function (str, args, options) {
    options = options || {};
    options.context = options.context || '';

    if (typeof drupalTranslations !== 'undefined' && drupalTranslations.strings && drupalTranslations.strings[options.context] && drupalTranslations.strings[options.context][str]) {
      str = drupalTranslations.strings[options.context][str];
    }

    if (args) {
      str = Drupal.formatString(str, args);
    }
    return str;
  };

  Drupal.url = function (path) {
    return drupalSettings.path.baseUrl + drupalSettings.path.pathPrefix + path;
  };

  Drupal.url.toAbsolute = function (url) {
    var urlParsingNode = document.createElement('a');

    try {
      url = decodeURIComponent(url);
    } catch (e) {}

    urlParsingNode.setAttribute('href', url);

    return urlParsingNode.cloneNode(false).href;
  };

  Drupal.url.isLocal = function (url) {
    var absoluteUrl = Drupal.url.toAbsolute(url);
    var protocol = location.protocol;

    if (protocol === 'http:' && absoluteUrl.indexOf('https:') === 0) {
      protocol = 'https:';
    }
    var baseUrl = protocol + '//' + location.host + drupalSettings.path.baseUrl.slice(0, -1);

    try {
      absoluteUrl = decodeURIComponent(absoluteUrl);
    } catch (e) {}
    try {
      baseUrl = decodeURIComponent(baseUrl);
    } catch (e) {}

    return absoluteUrl === baseUrl || absoluteUrl.indexOf(baseUrl + '/') === 0;
  };

  Drupal.formatPlural = function (count, singular, plural, args, options) {
    args = args || {};
    args['@count'] = count;

    var pluralDelimiter = drupalSettings.pluralDelimiter;
    var translations = Drupal.t(singular + pluralDelimiter + plural, args, options).split(pluralDelimiter);
    var index = 0;

    if (typeof drupalTranslations !== 'undefined' && drupalTranslations.pluralFormula) {
      index = count in drupalTranslations.pluralFormula ? drupalTranslations.pluralFormula[count] : drupalTranslations.pluralFormula.default;
    } else if (args['@count'] !== 1) {
      index = 1;
    }

    return translations[index];
  };

  Drupal.encodePath = function (item) {
    return window.encodeURIComponent(item).replace(/%2F/g, '/');
  };

  Drupal.theme = function (func) {
    if (func in Drupal.theme) {
      var _Drupal$theme;

      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      return (_Drupal$theme = Drupal.theme)[func].apply(_Drupal$theme, args);
    }
  };

  Drupal.theme.placeholder = function (str) {
    return '<em class="placeholder">' + Drupal.checkPlain(str) + '</em>';
  };
})(Drupal, window.drupalSettings, window.drupalTranslations);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

if (window.jQuery) {
  jQuery.noConflict();
}

document.documentElement.className += ' js';

(function (domready, Drupal, drupalSettings) {
  domready(function () {
    Drupal.attachBehaviors(document, drupalSettings);
  });
})(domready, Drupal, window.drupalSettings);;
/*!
 * jquery.unevent.js 0.2
 * https://github.com/yckart/jquery.unevent.js
 *
 * Copyright (c) 2013 Yannick Albert (http://yckart.com)
 * Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php).
 * 2013/07/26
**/
;(function ($) {
    var on = $.fn.on, timer;
    $.fn.on = function () {
        var args = Array.apply(null, arguments);
        var last = args[args.length - 1];

        if (isNaN(last) || (last === 1 && args.pop())) return on.apply(this, args);

        var delay = args.pop();
        var fn = args.pop();

        args.push(function () {
            var self = this, params = arguments;
            clearTimeout(timer);
            timer = setTimeout(function () {
                fn.apply(self, params);
            }, delay);
        });

        return on.apply(this, args);
    };
}(this.jQuery || this.Zepto));
;
/*
 * Viewport - jQuery selectors for finding elements in viewport
 *
 * Copyright (c) 2008-2009 Mika Tuupola
 *
 * Licensed under the MIT license:
 *   http://www.opensource.org/licenses/mit-license.php
 *
 * Project home:
 *  http://www.appelsiini.net/projects/viewport
 *
 */
(function($) {
    
    $.belowthefold = function(element, settings) {
        var fold = $(window).height() + $(window).scrollTop();
        return fold <= $(element).offset().top - settings.threshold;
    };

    $.abovethetop = function(element, settings) {
        var top = $(window).scrollTop();
        return top >= $(element).offset().top + $(element).height() - settings.threshold;
    };
    
    $.rightofscreen = function(element, settings) {
        var fold = $(window).width() + $(window).scrollLeft();
        return fold <= $(element).offset().left - settings.threshold;
    };
    
    $.leftofscreen = function(element, settings) {
        var left = $(window).scrollLeft();
        return left >= $(element).offset().left + $(element).width() - settings.threshold;
    };
    
    $.inviewport = function(element, settings) {
        return !$.rightofscreen(element, settings) && !$.leftofscreen(element, settings) && !$.belowthefold(element, settings) && !$.abovethetop(element, settings);
    };
    
    $.extend($.expr[':'], {
        "below-the-fold": function(a, i, m) {
            return $.belowthefold(a, {threshold : 0});
        },
        "above-the-top": function(a, i, m) {
            return $.abovethetop(a, {threshold : 0});
        },
        "left-of-screen": function(a, i, m) {
            return $.leftofscreen(a, {threshold : 0});
        },
        "right-of-screen": function(a, i, m) {
            return $.rightofscreen(a, {threshold : 0});
        },
        "in-viewport": function(a, i, m) {
            return $.inviewport(a, {threshold : 0});
        }
    });

    
})(jQuery);
;
/*
 CSS Browser Selector v0.4.0 (Nov 02, 2010)
 Rafael Lima (http://rafael.adm.br)
 http://rafael.adm.br/css_browser_selector
 License: http://creativecommons.org/licenses/by/2.5/
 Contributors: http://rafael.adm.br/css_browser_selector#contributors

 v0.5.0 2011-08-24
 andrew relkin

 modified, now detects:
 any version of Firefox
 more versions of Windows (Win8, Win7, Vista, XP, Win2k)
 more versions of IE under unique conditions
 more detailed support for Opera
 if "no-js" in HTML class: removes and replaces with "js" (<html class="no-js">)

 identifies
 browsers: Firefox; IE; Opera; Safari; Chrome, Konqueror, Iron
 browser versions: (most importantly: ie6, ie7, ie8, ie9)
 rendering engines: Webkit; Mozilla; Gecko
 platforms/OSes: Mac; Win: Win7, Vista, XP, Win2k; FreeBSD; Linux/x11
 devices: Ipod; Ipad; Iphone; WebTV; Blackberry; Android; J2me; mobile(generic)
 enabled technology: JS

 v0.6.3 2014-03-06
 @silasrm <silasrm@gmail.com>
 - Added support to IE11
 @see http://msdn.microsoft.com/en-us/library/ie/hh869301(v=vs.85).aspx
 @see http://msdn.microsoft.com/en-us/library/ie/bg182625(v=vs.85).aspx
 */

showLog=true;
function log(m) {if ( window.console && showLog ) {console.log(m); }  }

function css_browser_selector(u) {
    var	uaInfo = {},
        screens = [320, 480, 640, 768, 1024, 1152, 1280, 1440, 1680, 1920, 2560],
        allScreens = screens.length,
        ua=u.toLowerCase(),
        is=function(t) { return RegExp(t,"i").test(ua);  },
        version = function(p,n)
        {
            n=n.replace(".","_"); var i = n.indexOf('_'),  ver="";
            while (i>0) {ver += " "+ p+n.substring(0,i);i = n.indexOf('_', i+1);}
            ver += " "+p+n; return ver;
        },
        g='gecko',
        w='webkit',
        c='chrome',
        f='firefox',
        s='safari',
        o='opera',
        m='mobile',
        a='android',
        bb='blackberry',
        lang='lang_',
        dv='device_',
        html=document.documentElement,
        b=	[

            // browser
            ((!(/opera|webtv/i.test(ua))&&/msie\s(\d+)/.test(ua)||(/trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.test(ua))))?('ie ie'+(/trident\/4\.0/.test(ua) ? '8' : RegExp.$1 == '11.0'?'11':RegExp.$1))
                :is('firefox/')?g+ " " + f+(/firefox\/((\d+)(\.(\d+))(\.\d+)*)/.test(ua)?' '+f+RegExp.$2 + ' '+f+RegExp.$2+"_"+RegExp.$4:'')
                :is('gecko/')?g
                    :is('opera')?o+(/version\/((\d+)(\.(\d+))(\.\d+)*)/.test(ua)?' '+o+RegExp.$2 + ' '+o+RegExp.$2+"_"+RegExp.$4 : (/opera(\s|\/)(\d+)\.(\d+)/.test(ua)?' '+o+RegExp.$2+" "+o+RegExp.$2+"_"+RegExp.$3:''))
                        :is('konqueror')?'konqueror'

                            :is('blackberry') ?
                                ( bb +
                                    ( /Version\/(\d+)(\.(\d+)+)/i.test(ua)
                                            ? " " + bb+ RegExp.$1 + " "+bb+ RegExp.$1+RegExp.$2.replace('.','_')
                                            : (/Blackberry ?(([0-9]+)([a-z]?))[\/|;]/gi.test(ua)
                                                ? ' ' +bb+RegExp.$2 + (RegExp.$3?' ' +bb+RegExp.$2+RegExp.$3:'')
                                                : '')
                                    )
                                ) // blackberry

                                :is('android') ?
                                    (  a +
                                        ( /Version\/(\d+)(\.(\d+))+/i.test(ua)
                                            ? " " + a+ RegExp.$1 + " "+a+ RegExp.$1+RegExp.$2.replace('.','_')
                                            : '')
                                        + (/Android (.+); (.+) Build/i.test(ua)
                                            ? ' '+dv+( (RegExp.$2).replace(/ /g,"_") ).replace(/-/g,"_")
                                            :''	)
                                    ) //android

                                    :is('chrome')?w+   ' '+c+(/chrome\/((\d+)(\.(\d+))(\.\d+)*)/.test(ua)?' '+c+RegExp.$2 +((RegExp.$4>0) ? ' '+c+RegExp.$2+"_"+RegExp.$4:''):'')

                                        :is('iron')?w+' iron'

                                            :is('applewebkit/') ?
                                                ( w+ ' '+ s +
                                                    ( /version\/((\d+)(\.(\d+))(\.\d+)*)/.test(ua)
                                                            ?  ' '+ s +RegExp.$2 + " "+s+ RegExp.$2+RegExp.$3.replace('.','_')
                                                            :  ( / Safari\/(\d+)/i.test(ua)
                                                                ?
                                                                ( (RegExp.$1=="419" || RegExp.$1=="417" || RegExp.$1=="416" || RegExp.$1=="412" ) ? ' '+ s + '2_0'
                                                                    : RegExp.$1=="312" ? ' '+ s + '1_3'
                                                                        : RegExp.$1=="125" ? ' '+ s + '1_2'
                                                                            : RegExp.$1=="85" ? ' '+ s + '1_0'
                                                                                : '' )
                                                                :'')
                                                    )
                                                ) //applewebkit

                                                :is('mozilla/')?g
                                                    :''

            // mobile
            ,is("android|mobi|mobile|j2me|iphone|ipod|ipad|blackberry|playbook|kindle|silk")?m:''

            // os/platform
            ,is('j2me')?'j2me'
                :is('ipad|ipod|iphone')?
                    (
                        (
                            /CPU( iPhone)? OS (\d+[_|\.]\d+([_|\.]\d+)*)/i.test(ua)  ?
                                'ios' + version('ios',RegExp.$2) : ''
                        ) + ' ' + ( /(ip(ad|od|hone))/gi.test(ua) ?	RegExp.$1 : "" )
                    ) //'iphone'
                    //:is('ipod')?'ipod'
                    //:is('ipad')?'ipad'
                    :is('playbook')?'playbook'
                        :is('kindle|silk')?'kindle'
                            :is('playbook')?'playbook'
                                :is('mac')?'mac'+ (/mac os x ((\d+)[.|_](\d+))/.test(ua) ?    ( ' mac' + (RegExp.$2)  +  ' mac' + (RegExp.$1).replace('.',"_")  )     : '' )
                                    :is('win')?'win'+
                                        (is('windows nt 6.2')?' win8'
                                                :is('windows nt 6.1')?' win7'
                                                    :is('windows nt 6.0')?' vista'
                                                        :is('windows nt 5.2') || is('windows nt 5.1') ? ' win_xp'
                                                            :is('windows nt 5.0')?' win_2k'
                                                                :is('windows nt 4.0') || is('WinNT4.0') ?' win_nt'
                                                                    : ''
                                        )
                                        :is('freebsd')?'freebsd'
                                            :(is('x11|linux'))?'linux'
                                                :''

            // user agent language
            ,(/[; |\[](([a-z]{2})(\-[a-z]{2})?)[)|;|\]]/i.test(ua))?(lang+RegExp.$2).replace("-","_")+(RegExp.$3!=''?(' '+lang+RegExp.$1).replace("-","_"):''):''

            // beta: test if running iPad app
            ,( is('ipad|iphone|ipod') && !is('safari') )  ?  'ipad_app'  : ''


        ]; // b

    console.debug(ua);

    function screenSize() {
        var w = window.outerWidth || html.clientWidth;
        var h = window.outerHeight || html.clientHeight;
        uaInfo.orientation = ((w<h) ? "portrait" : "landscape");
        // remove previous min-width, max-width, client-width, client-height, and orientation
        html.className = html.className.replace(/ ?orientation_\w+/g, "").replace(/ [min|max|cl]+[w|h]_\d+/g, "")
        for (var i=(allScreens-1);i>=0;i--) { if (w >= screens[i] ) { uaInfo.maxw = screens[i]; break; }}
        widthClasses="";
        for (var info in uaInfo) { widthClasses+=" "+info+"_"+ uaInfo[info]  };
        html.className =  ( html.className +widthClasses  );
        return widthClasses;
    } // screenSize

    window.onresize = screenSize;
    screenSize();

    function retina(){
        var r = window.devicePixelRatio > 1;
        if (r) {
            html.className+=' retina';
        }
        else {
            html.className+=' non-retina';
        }
    }
    retina();

    var cssbs = (b.join(' ')) + " js ";
    html.className =   ( cssbs + html.className.replace(/\b(no[-|_]?)?js\b/g,"")  ).replace(/^ /, "").replace(/ +/g," ");

    return cssbs;
}

css_browser_selector(navigator.userAgent);
;
! function(t, e) {
    "function" == typeof define && define.amd ? define(e) : "object" == typeof module && module.exports ? module.exports = e() : t.bodymovin = e()
}(window, function() {
    function ProjectInterface() {
        return {}
    }

    function roundValues(t) {
        bm_rnd = t ? Math.round : function(t) {
            return t
        }
    }

    function roundTo2Decimals(t) {
        return Math.round(1e4 * t) / 1e4
    }

    function roundTo3Decimals(t) {
        return Math.round(100 * t) / 100
    }

    function styleDiv(t) {
        t.style.position = "absolute", t.style.top = 0, t.style.left = 0, t.style.display = "block", t.style.transformOrigin = t.style.webkitTransformOrigin = "0 0", t.style.backfaceVisibility = t.style.webkitBackfaceVisibility = "visible", t.style.transformStyle = t.style.webkitTransformStyle = t.style.mozTransformStyle = "preserve-3d"
    }

    function styleUnselectableDiv(t) {
        t.style.userSelect = "none", t.style.MozUserSelect = "none", t.style.webkitUserSelect = "none", t.style.oUserSelect = "none"
    }

    function BMEnterFrameEvent(t, e, s, r) {
        this.type = t, this.currentTime = e, this.totalTime = s, this.direction = 0 > r ? -1 : 1
    }

    function BMCompleteEvent(t, e) {
        this.type = t, this.direction = 0 > e ? -1 : 1
    }

    function BMCompleteLoopEvent(t, e, s, r) {
        this.type = t, this.currentLoop = e, this.totalLoops = s, this.direction = 0 > r ? -1 : 1
    }

    function BMSegmentStartEvent(t, e, s) {
        this.type = t, this.firstFrame = e, this.totalFrames = s
    }

    function BMDestroyEvent(t, e) {
        this.type = t, this.target = e
    }

    function _addEventListener(t, e) {
        this._cbs[t] || (this._cbs[t] = []), this._cbs[t].push(e)
    }

    function _removeEventListener(t, e) {
        if (e) {
            if (this._cbs[t]) {
                for (var s = 0, r = this._cbs[t].length; r > s;) this._cbs[t][s] === e && (this._cbs[t].splice(s, 1), s -= 1, r -= 1), s += 1;
                this._cbs[t].length || (this._cbs[t] = null)
            }
        } else this._cbs[t] = null
    }

    function _triggerEvent(t, e) {
        if (this._cbs[t])
            for (var s = this._cbs[t].length, r = 0; s > r; r++) this._cbs[t][r](e)
    }

    function randomString(t, e) {
        void 0 === e && (e = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890");
        var s, r = "";
        for (s = t; s > 0; --s) r += e[Math.round(Math.random() * (e.length - 1))];
        return r
    }

    function HSVtoRGB(t, e, s) {
        var r, i, a, n, o, h, l, p;
        switch (1 === arguments.length && (e = t.s, s = t.v, t = t.h), n = Math.floor(6 * t), o = 6 * t - n, h = s * (1 - e), l = s * (1 - o * e), p = s * (1 - (1 - o) * e), n % 6) {
            case 0:
                r = s, i = p, a = h;
                break;
            case 1:
                r = l, i = s, a = h;
                break;
            case 2:
                r = h, i = s, a = p;
                break;
            case 3:
                r = h, i = l, a = s;
                break;
            case 4:
                r = p, i = h, a = s;
                break;
            case 5:
                r = s, i = h, a = l
        }
        return [r, i, a]
    }

    function RGBtoHSV(t, e, s) {
        1 === arguments.length && (e = t.g, s = t.b, t = t.r);
        var r, i = Math.max(t, e, s),
            a = Math.min(t, e, s),
            n = i - a,
            o = 0 === i ? 0 : n / i,
            h = i / 255;
        switch (i) {
            case a:
                r = 0;
                break;
            case t:
                r = e - s + n * (s > e ? 6 : 0), r /= 6 * n;
                break;
            case e:
                r = s - t + 2 * n, r /= 6 * n;
                break;
            case s:
                r = t - e + 4 * n, r /= 6 * n
        }
        return [r, o, h]
    }

    function addSaturationToRGB(t, e) {
        var s = RGBtoHSV(255 * t[0], 255 * t[1], 255 * t[2]);
        return s[1] += e, s[1] > 1 ? s[1] = 1 : s[1] <= 0 && (s[1] = 0), HSVtoRGB(s[0], s[1], s[2])
    }

    function addBrightnessToRGB(t, e) {
        var s = RGBtoHSV(255 * t[0], 255 * t[1], 255 * t[2]);
        return s[2] += e, s[2] > 1 ? s[2] = 1 : s[2] < 0 && (s[2] = 0), HSVtoRGB(s[0], s[1], s[2])
    }

    function addHueToRGB(t, e) {
        var s = RGBtoHSV(255 * t[0], 255 * t[1], 255 * t[2]);
        return s[0] += e / 360, s[0] > 1 ? s[0] -= 1 : s[0] < 0 && (s[0] += 1), HSVtoRGB(s[0], s[1], s[2])
    }

    function componentToHex(t) {
        var e = t.toString(16);
        return 1 == e.length ? "0" + e : e
    }

    function fillToRgba(t, e) {
        if (!cachedColors[t]) {
            var s = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);
            cachedColors[t] = parseInt(s[1], 16) + "," + parseInt(s[2], 16) + "," + parseInt(s[3], 16)
        }
        return "rgba(" + cachedColors[t] + "," + e + ")"
    }

    function RenderedFrame(t, e) {
        this.tr = t, this.o = e
    }

    function LetterProps(t, e, s, r, i, a) {
        this.o = t, this.sw = e, this.sc = s, this.fc = r, this.m = i, this.props = a
    }

    function iterateDynamicProperties(t) {
        var e, s = this.dynamicProperties;
        for (e = 0; s > e; e += 1) this.dynamicProperties[e].getValue(t)
    }

    function reversePath(t) {
        var e, s, r = [],
            i = [],
            a = [],
            n = {},
            o = 0;
        t.c && (r[0] = t.o[0], i[0] = t.i[0], a[0] = t.v[0], o = 1), s = t.i.length;
        var h = s - 1;
        for (e = o; s > e; e += 1) r.push(t.o[h]), i.push(t.i[h]), a.push(t.v[h]), h -= 1;
        return n.i = r, n.o = i, n.v = a, n
    }

    function Matrix() {}

    function matrixManagerFunction() {
        var t = new Matrix,
            e = function(e, s, r, i, a) {
                return t.reset().translate(i, a).rotate(e).scale(s, r).toCSS()
            },
            s = function(t) {
                return e(t.tr.r[2], t.tr.s[0], t.tr.s[1], t.tr.p[0], t.tr.p[1])
            };
        return {
            getMatrix: s
        }
    }

    function createElement(t, e, s) {
        if (!e) {
            var r = Object.create(t.prototype, s),
                i = {};
            return r && "[object Function]" === i.toString.call(r.init) && r.init(), r
        }
        e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e.prototype._parent = t.prototype
    }

    function extendPrototype(t, e) {
        for (var s in t.prototype) t.prototype.hasOwnProperty(s) && (e.prototype[s] = t.prototype[s])
    }

    function bezFunction() {
        function t(t, e, s, r, i, a) {
            var n = t * r + e * i + s * a - i * r - a * t - s * e;
            return n > -1e-4 && 1e-4 > n
        }

        function e(e, s, r, i, a, n, o, h, l) {
            return t(e, s, i, a, o, h) && t(e, r, i, n, o, l)
        }

        function s(t) {
            this.segmentLength = 0, this.points = new Array(t)
        }

        function r(t, e) {
            this.partialLength = t, this.point = e
        }

        function i(t, e) {
            var s = e.segments,
                r = s.length,
                i = bm_floor((r - 1) * t),
                a = t * e.addedLength,
                n = 0;
            if (a == s[i].l) return s[i].p;
            for (var o = s[i].l > a ? -1 : 1, h = !0; h;) s[i].l <= a && s[i + 1].l > a ? (n = (a - s[i].l) / (s[i + 1].l - s[i].l), h = !1) : i += o, (0 > i || i >= r - 1) && (h = !1);
            return s[i].p + (s[i + 1].p - s[i].p) * n
        }

        function a() {
            this.pt1 = new Array(2), this.pt2 = new Array(2), this.pt3 = new Array(2), this.pt4 = new Array(2)
        }

        function n(t, e, s, r, n, o, h) {
            var l = new a;
            n = 0 > n ? 0 : n > 1 ? 1 : n;
            var p = i(n, h);
            o = o > 1 ? 1 : o;
            var m, f = i(o, h),
                d = t.length,
                c = 1 - p,
                u = 1 - f;
            for (m = 0; d > m; m += 1) l.pt1[m] = Math.round(1e3 * (c * c * c * t[m] + (p * c * c + c * p * c + c * c * p) * s[m] + (p * p * c + c * p * p + p * c * p) * r[m] + p * p * p * e[m])) / 1e3, l.pt3[m] = Math.round(1e3 * (c * c * u * t[m] + (p * c * u + c * p * u + c * c * f) * s[m] + (p * p * u + c * p * f + p * c * f) * r[m] + p * p * f * e[m])) / 1e3, l.pt4[m] = Math.round(1e3 * (c * u * u * t[m] + (p * u * u + c * f * u + c * u * f) * s[m] + (p * f * u + c * f * f + p * u * f) * r[m] + p * f * f * e[m])) / 1e3, l.pt2[m] = Math.round(1e3 * (u * u * u * t[m] + (f * u * u + u * f * u + u * u * f) * s[m] + (f * f * u + u * f * f + f * u * f) * r[m] + f * f * f * e[m])) / 1e3;
            return l
        }
        var o = (Math, function() {
                function t(t, e) {
                    this.l = t, this.p = e
                }
                return function(e, s, r, i) {
                    var a, n, o, h, l, p, m = defaultCurveSegments,
                        f = 0,
                        d = [],
                        c = [],
                        u = {
                            addedLength: 0,
                            segments: []
                        };
                    for (o = r.length, a = 0; m > a; a += 1) {
                        for (l = a / (m - 1), p = 0, n = 0; o > n; n += 1) h = bm_pow(1 - l, 3) * e[n] + 3 * bm_pow(1 - l, 2) * l * r[n] + 3 * (1 - l) * bm_pow(l, 2) * i[n] + bm_pow(l, 3) * s[n], d[n] = h, null !== c[n] && (p += bm_pow(d[n] - c[n], 2)), c[n] = d[n];
                        p && (p = bm_sqrt(p), f += p), u.segments.push(new t(f, l))
                    }
                    return u.addedLength = f, u
                }
            }()),
            h = function() {
                var e = {};
                return function(i) {
                    var a = i.s,
                        n = i.e,
                        o = i.to,
                        h = i.ti,
                        l = (a.join("_") + "_" + n.join("_") + "_" + o.join("_") + "_" + h.join("_")).replace(/\./g, "p");
                    if (e[l]) return void(i.bezierData = e[l]);
                    var p, m, f, d, c, u, y, g = defaultCurveSegments,
                        v = 0,
                        b = null;
                    2 === a.length && (a[0] != n[0] || a[1] != n[1]) && t(a[0], a[1], n[0], n[1], a[0] + o[0], a[1] + o[1]) && t(a[0], a[1], n[0], n[1], n[0] + h[0], n[1] + h[1]) && (g = 2);
                    var E = new s(g);
                    for (f = o.length, p = 0; g > p; p += 1) {
                        for (y = new Array(f), c = p / (g - 1), u = 0, m = 0; f > m; m += 1) d = bm_pow(1 - c, 3) * a[m] + 3 * bm_pow(1 - c, 2) * c * (a[m] + o[m]) + 3 * (1 - c) * bm_pow(c, 2) * (n[m] + h[m]) + bm_pow(c, 3) * n[m], y[m] = d, null !== b && (u += bm_pow(y[m] - b[m], 2));
                        u = bm_sqrt(u), v += u, E.points[p] = new r(u, y), b = y
                    }
                    E.segmentLength = v, i.bezierData = E, e[l] = E
                }
            }();
        return {
            getBezierLength: o,
            getNewSegment: n,
            buildBezierData: h,
            pointOnLine2D: t,
            pointOnLine3D: e
        }
    }

    function dataFunctionManager() {
        function t(i, a, o) {
            var h, l, p, m, f, d, c, u, y = i.length;
            for (m = 0; y > m; m += 1)
                if (h = i[m], "ks" in h && !h.completed) {
                    if (h.completed = !0, h.tt && (i[m - 1].td = h.tt), l = [], p = -1, h.hasMask) {
                        var g = h.masksProperties;
                        for (d = g.length, f = 0; d > f; f += 1)
                            if (g[f].pt.k.i) r(g[f].pt.k);
                            else
                                for (u = g[f].pt.k.length, c = 0; u > c; c += 1) g[f].pt.k[c].s && r(g[f].pt.k[c].s[0]), g[f].pt.k[c].e && r(g[f].pt.k[c].e[0])
                    }
                    0 === h.ty ? (h.layers = e(h.refId, a), t(h.layers, a, o)) : 4 === h.ty ? s(h.shapes) : 5 == h.ty && n(h, o)
                }
        }

        function e(t, e) {
            for (var s = 0, r = e.length; r > s;) {
                if (e[s].id === t) return e[s].layers;
                s += 1
            }
        }

        function s(t) {
            var e, i, a, n = t.length,
                o = !1;
            for (e = n - 1; e >= 0; e -= 1)
                if ("sh" == t[e].ty) {
                    if (t[e].ks.k.i) r(t[e].ks.k);
                    else
                        for (a = t[e].ks.k.length, i = 0; a > i; i += 1) t[e].ks.k[i].s && r(t[e].ks.k[i].s[0]), t[e].ks.k[i].e && r(t[e].ks.k[i].e[0]);
                    o = !0
                } else "gr" == t[e].ty && s(t[e].it)
        }

        function r(t) {
            var e, s = t.i.length;
            for (e = 0; s > e; e += 1) t.i[e][0] += t.v[e][0], t.i[e][1] += t.v[e][1], t.o[e][0] += t.v[e][0], t.o[e][1] += t.v[e][1]
        }

        function i(t, e) {
            var s = e ? e.split(".") : [100, 100, 100];
            return t[0] > s[0] ? !0 : s[0] > t[0] ? !1 : t[1] > s[1] ? !0 : s[1] > t[1] ? !1 : t[2] > s[2] ? !0 : s[2] > t[2] ? !1 : void 0
        }

        function a(e, s) {
            e.__complete || (h(e), o(e), l(e), t(e.layers, e.assets, s), e.__complete = !0)
        }

        function n(t, e) {
            var s, r, i = t.t.d.k,
                a = i.length;
            for (r = 0; a > r; r += 1) {
                var n = t.t.d.k[r].s;
                s = [];
                var o, h, l, p, m, f, d, c = 0,
                    u = t.t.m.g,
                    y = 0,
                    g = 0,
                    v = 0,
                    b = [],
                    E = 0,
                    P = 0,
                    k = e.getFontByName(n.f),
                    x = 0,
                    S = k.fStyle.split(" "),
                    M = "normal",
                    C = "normal";
                for (h = S.length, o = 0; h > o; o += 1) "italic" === S[o].toLowerCase() ? C = "italic" : "bold" === S[o].toLowerCase() ? M = "700" : "black" === S[o].toLowerCase() ? M = "900" : "medium" === S[o].toLowerCase() ? M = "500" : "regular" === S[o].toLowerCase() || "normal" === S[o].toLowerCase() ? M = "400" : ("light" === S[o].toLowerCase() || "thin" === S[o].toLowerCase()) && (M = "200");
                if (n.fWeight = M, n.fStyle = C, h = n.t.length, n.sz) {
                    var D = n.sz[0],
                        A = -1;
                    for (o = 0; h > o; o += 1) l = !1, " " === n.t.charAt(o) ? A = o : 13 === n.t.charCodeAt(o) && (E = 0, l = !0), e.chars ? (d = e.getCharData(n.t.charAt(o), k.fStyle, k.fFamily), x = l ? 0 : d.w * n.s / 100) : x = e.measureText(n.t.charAt(o), n.f, n.s), E + x > D ? (-1 === A ? (n.t = n.t.substr(0, o) + "\r" + n.t.substr(o), h += 1) : (o = A, n.t = n.t.substr(0, o) + "\r" + n.t.substr(o + 1)), A = -1, E = 0) : E += x;
                    h = n.t.length
                }
                for (E = 0, x = 0, o = 0; h > o; o += 1)
                    if (l = !1, " " === n.t.charAt(o) ? p = " " : 13 === n.t.charCodeAt(o) ? (b.push(E), P = E > P ? E : P, E = 0, p = "", l = !0, v += 1) : p = n.t.charAt(o), e.chars ? (d = e.getCharData(n.t.charAt(o), k.fStyle, e.getFontByName(n.f).fFamily), x = l ? 0 : d.w * n.s / 100) : x = e.measureText(p, n.f, n.s), E += x, s.push({
                            l: x,
                            an: x,
                            add: y,
                            n: l,
                            anIndexes: [],
                            val: p,
                            line: v
                        }), 2 == u) {
                        if (y += x, "" == p || " " == p || o == h - 1) {
                            for (("" == p || " " == p) && (y -= x); o >= g;) s[g].an = y, s[g].ind = c, s[g].extra = x, g += 1;
                            c += 1, y = 0
                        }
                    } else if (3 == u) {
                    if (y += x, "" == p || o == h - 1) {
                        for ("" == p && (y -= x); o >= g;) s[g].an = y, s[g].ind = c, s[g].extra = x, g += 1;
                        y = 0, c += 1
                    }
                } else s[c].ind = c, s[c].extra = 0, c += 1;
                if (n.l = s, P = E > P ? E : P, b.push(E), n.sz) n.boxWidth = n.sz[0], n.justifyOffset = 0;
                else switch (n.boxWidth = P, n.j) {
                    case 1:
                        n.justifyOffset = -n.boxWidth;
                        break;
                    case 2:
                        n.justifyOffset = -n.boxWidth / 2;
                        break;
                    default:
                        n.justifyOffset = 0
                }
                n.lineWidths = b;
                var w = t.t.a;
                f = w.length;
                var T, I, F = [];
                for (m = 0; f > m; m += 1) {
                    for (w[m].a.sc && (n.strokeColorAnim = !0), w[m].a.sw && (n.strokeWidthAnim = !0), (w[m].a.fc || w[m].a.fh || w[m].a.fs || w[m].a.fb) && (n.fillColorAnim = !0), I = 0, T = w[m].s.b, o = 0; h > o; o += 1) s[o].anIndexes[m] = I, (1 == T && "" != s[o].val || 2 == T && "" != s[o].val && " " != s[o].val || 3 == T && (s[o].n || " " == s[o].val || o == h - 1) || 4 == T && (s[o].n || o == h - 1)) && (1 === w[m].s.rn && F.push(I), I += 1);
                    t.t.a[m].s.totalChars = I;
                    var V, B = -1;
                    if (1 === w[m].s.rn)
                        for (o = 0; h > o; o += 1) B != s[o].anIndexes[m] && (B = s[o].anIndexes[m], V = F.splice(Math.floor(Math.random() * F.length), 1)[0]), s[o].anIndexes[m] = V
                }
                0 !== f || "m" in t.t.p || (t.singleShape = !0), n.yOffset = n.lh || 1.2 * n.s, n.ascent = k.ascent * n.s / 100
            }
        }
        var o = function() {
                function t(t) {
                    var e = t.t.d;
                    t.t.d = {
                        k: [{
                            s: e,
                            t: 0
                        }]
                    }
                }

                function e(e) {
                    var s, r = e.length;
                    for (s = 0; r > s; s += 1) 5 === e[s].ty && t(e[s])
                }
                var s = [4, 4, 14];
                return function(t) {
                    if (i(s, t.v) && (e(t.layers), t.assets)) {
                        var r, a = t.assets.length;
                        for (r = 0; a > r; r += 1) t.assets[r].layers && e(t.assets[r].layers)
                    }
                }
            }(),
            h = function() {
                function t(e) {
                    var s, r, i, a = e.length;
                    for (s = 0; a > s; s += 1)
                        if ("gr" === e[s].ty) t(e[s].it);
                        else if ("fl" === e[s].ty || "st" === e[s].ty)
                        if (e[s].c.k && e[s].c.k[0].i)
                            for (i = e[s].c.k.length, r = 0; i > r; r += 1) e[s].c.k[r].s && (e[s].c.k[r].s[0] /= 255, e[s].c.k[r].s[1] /= 255, e[s].c.k[r].s[2] /= 255, e[s].c.k[r].s[3] /= 255), e[s].c.k[r].e && (e[s].c.k[r].e[0] /= 255, e[s].c.k[r].e[1] /= 255, e[s].c.k[r].e[2] /= 255, e[s].c.k[r].e[3] /= 255);
                        else e[s].c.k[0] /= 255, e[s].c.k[1] /= 255, e[s].c.k[2] /= 255, e[s].c.k[3] /= 255
                }

                function e(e) {
                    var s, r = e.length;
                    for (s = 0; r > s; s += 1) 4 === e[s].ty && t(e[s].shapes)
                }
                var s = [4, 1, 9];
                return function(t) {
                    if (i(s, t.v) && (e(t.layers), t.assets)) {
                        var r, a = t.assets.length;
                        for (r = 0; a > r; r += 1) t.assets[r].layers && e(t.assets[r].layers)
                    }
                }
            }(),
            l = function() {
                function t(e) {
                    var s, r, i, a = e.length,
                        n = !1;
                    for (s = a - 1; s >= 0; s -= 1)
                        if ("sh" == e[s].ty) {
                            if (e[s].ks.k.i) e[s].ks.k.c = e[s].closed;
                            else
                                for (i = e[s].ks.k.length, r = 0; i > r; r += 1) e[s].ks.k[r].s && (e[s].ks.k[r].s[0].c = e[s].closed), e[s].ks.k[r].e && (e[s].ks.k[r].e[0].c = e[s].closed);
                            n = !0
                        } else "gr" == e[s].ty && t(e[s].it)
                }

                function e(e) {
                    var s, r, i, a, n, o, h = e.length;
                    for (r = 0; h > r; r += 1) {
                        if (s = e[r], s.hasMask) {
                            var l = s.masksProperties;
                            for (a = l.length, i = 0; a > i; i += 1)
                                if (l[i].pt.k.i) l[i].pt.k.c = l[i].cl;
                                else
                                    for (o = l[i].pt.k.length, n = 0; o > n; n += 1) l[i].pt.k[n].s && (l[i].pt.k[n].s[0].c = l[i].cl), l[i].pt.k[n].e && (l[i].pt.k[n].e[0].c = l[i].cl)
                        }
                        4 === s.ty && t(s.shapes)
                    }
                }
                var s = [4, 4, 18];
                return function(t) {
                    if (i(s, t.v) && (e(t.layers), t.assets)) {
                        var r, a = t.assets.length;
                        for (r = 0; a > r; r += 1) t.assets[r].layers && e(t.assets[r].layers)
                    }
                }
            }(),
            p = {};
        return p.completeData = a, p
    }

    function ShapeModifier() {}

    function TrimModifier() {}

    function MouseModifier() {}

    function RoundCornersModifier() {}

    function BaseRenderer() {}

    function SVGRenderer(t, e) {
        this.animationItem = t, this.layers = null, this.renderedFrame = -1, this.globalData = {
            frameNum: -1
        }, this.renderConfig = {
            preserveAspectRatio: e && e.preserveAspectRatio || "xMidYMid meet",
            progressiveLoad: e && e.progressiveLoad || !1
        }, this.elements = [], this.pendingElements = [], this.destroyed = !1
    }

    function CanvasRenderer(t, e) {
        this.animationItem = t, this.renderConfig = {
            clearCanvas: e && void 0 !== e.clearCanvas ? e.clearCanvas : !0,
            context: e && e.context || null,
            progressiveLoad: e && e.progressiveLoad || !1,
            preserveAspectRatio: e && e.preserveAspectRatio || "xMidYMid meet"
        }, this.renderConfig.dpr = e && e.dpr || 1, this.animationItem.wrapper && (this.renderConfig.dpr = e && e.dpr || window.devicePixelRatio || 1), this.renderedFrame = -1, this.globalData = {
            frameNum: -1
        }, this.contextData = {
            saved: Array.apply(null, {
                length: 15
            }),
            savedOp: Array.apply(null, {
                length: 15
            }),
            cArrPos: 0,
            cTr: new Matrix,
            cO: 1
        };
        var s, r = 15;
        for (s = 0; r > s; s += 1) this.contextData.saved[s] = Array.apply(null, {
            length: 16
        });
        this.elements = [], this.pendingElements = [], this.transformMat = new Matrix, this.completeLayers = !1
    }

    function HybridRenderer(t) {
        this.animationItem = t, this.layers = null, this.renderedFrame = -1, this.globalData = {
            frameNum: -1
        }, this.pendingElements = [], this.elements = [], this.threeDElements = [], this.destroyed = !1, this.camera = null, this.supports3d = !0
    }

    function MaskElement(t, e, s) {
        this.dynamicProperties = [], this.data = t, this.element = e, this.globalData = s, this.paths = [], this.storedData = [], this.masksProperties = this.data.masksProperties, this.viewData = new Array(this.masksProperties.length), this.maskElement = null, this.firstFrame = !0;
        var r, i, a, n, o, h, l, p, m = this.globalData.defs,
            f = this.masksProperties.length,
            d = this.masksProperties,
            c = 0,
            u = [],
            y = randomString(10),
            g = "clipPath",
            v = "clip-path";
        for (r = 0; f > r; r++)
            if (("a" !== d[r].mode && "n" !== d[r].mode || d[r].inv || 100 !== d[r].o.k) && (g = "mask", v = "mask"), "s" != d[r].mode && "i" != d[r].mode || 0 != c ? o = null : (o = document.createElementNS(svgNS, "rect"), o.setAttribute("fill", "#ffffff"), o.setAttribute("width", this.element.comp.data ? this.element.comp.data.w : this.element.globalData.compSize.w), o.setAttribute("height", this.element.comp.data ? this.element.comp.data.h : this.element.globalData.compSize.h), u.push(o)), i = document.createElementNS(svgNS, "path"), "n" != d[r].mode) {
                if (c += 1, "s" == d[r].mode ? i.setAttribute("fill", "#000000") : i.setAttribute("fill", "#ffffff"), i.setAttribute("clip-rule", "nonzero"), 0 !== d[r].x.k) {
                    g = "mask", v = "mask", p = PropertyFactory.getProp(this.element, d[r].x, 0, null, this.dynamicProperties);
                    var b = "fi_" + randomString(10);
                    h = document.createElementNS(svgNS, "filter"), h.setAttribute("id", b), l = document.createElementNS(svgNS, "feMorphology"), l.setAttribute("operator", "dilate"), l.setAttribute("in", "SourceGraphic"), l.setAttribute("radius", "0"), h.appendChild(l), m.appendChild(h), "s" == d[r].mode ? i.setAttribute("stroke", "#000000") : i.setAttribute("stroke", "#ffffff")
                } else l = null, p = null;
                if (this.storedData[r] = {
                        elem: i,
                        x: p,
                        expan: l,
                        lastPath: "",
                        lastOperator: "",
                        filterId: b,
                        lastRadius: 0
                    }, "i" == d[r].mode) {
                    n = u.length;
                    var E = document.createElementNS(svgNS, "g");
                    for (a = 0; n > a; a += 1) E.appendChild(u[a]);
                    var P = document.createElementNS(svgNS, "mask");
                    P.setAttribute("mask-type", "alpha"), P.setAttribute("id", y + "_" + c), P.appendChild(i), m.appendChild(P), E.setAttribute("mask", "url(#" + y + "_" + c + ")"), u.length = 0, u.push(E)
                } else u.push(i);
                d[r].inv && !this.solidPath && (this.solidPath = this.createLayerSolidPath()), this.viewData[r] = {
                    elem: i,
                    lastPath: "",
                    op: PropertyFactory.getProp(this.element, d[r].o, 0, .01, this.dynamicProperties),
                    prop: ShapePropertyFactory.getShapeProp(this.element, d[r], 3, this.dynamicProperties, null)
                }, o && (this.viewData[r].invRect = o), this.viewData[r].prop.k || this.drawPath(d[r], this.viewData[r].prop.v, this.viewData[r])
            } else this.viewData[r] = {
                op: PropertyFactory.getProp(this.element, d[r].o, 0, .01, this.dynamicProperties),
                prop: ShapePropertyFactory.getShapeProp(this.element, d[r], 3, this.dynamicProperties, null),
                elem: i
            }, m.appendChild(i);
        for (this.maskElement = document.createElementNS(svgNS, g), f = u.length, r = 0; f > r; r += 1) this.maskElement.appendChild(u[r]);
        this.maskElement.setAttribute("id", y), c > 0 && this.element.maskedElement.setAttribute(v, "url(#" + y + ")"), m.appendChild(this.maskElement)
    }

    function BaseElement() {}

    function SVGBaseElement(t, e, s, r, i) {
        this.globalData = s, this.comp = r, this.data = t, this.matteElement = null, this.transformedElement = null, this.parentContainer = e, this.layerId = i ? i.layerId : "ly_" + randomString(10), this.placeholder = i, this.init()
    }

    function ITextElement(t, e, s, r) {}

    function SVGTextElement(t, e, s, r, i) {
        this.textSpans = [], this.renderType = "svg", this._parent.constructor.call(this, t, e, s, r, i)
    }

    function SVGEffects(t) {
        var e, s = t.data.ef.length,
            r = randomString(10),
            i = filtersFactory.createFilter(r),
            a = 0;
        this.filters = [];
        var n;
        for (e = 0; s > e; e += 1) 20 === t.data.ef[e].ty ? (a += 1, n = new SVGTintFilter(i, t.effects.effectElements[e]), this.filters.push(n)) : 21 === t.data.ef[e].ty ? (a += 1, n = new SVGFillFilter(i, t.effects.effectElements[e]), this.filters.push(n)) : 22 === t.data.ef[e].ty && (n = new SVGStrokeEffect(t, t.effects.effectElements[e]), this.filters.push(n));
        a && (t.globalData.defs.appendChild(i), t.layerElement.setAttribute("filter", "url(#" + r + ")"))
    }

    function SVGTintFilter(t, e) {
        this.filterManager = e;
        var s = document.createElementNS(svgNS, "feColorMatrix");
        if (s.setAttribute("type", "matrix"), s.setAttribute("color-interpolation-filters", "linearRGB"), s.setAttribute("values", "0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0"), s.setAttribute("result", "f1"), t.appendChild(s), s = document.createElementNS(svgNS, "feColorMatrix"), s.setAttribute("type", "matrix"), s.setAttribute("color-interpolation-filters", "sRGB"), s.setAttribute("values", "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"), s.setAttribute("result", "f2"), t.appendChild(s), this.matrixFilter = s, 100 !== e.effectElements[2].p.v || e.effectElements[2].p.k) {
            var r = document.createElementNS(svgNS, "feMerge");
            t.appendChild(r);
            var i;
            i = document.createElementNS(svgNS, "feMergeNode"), i.setAttribute("in", "SourceGraphic"), r.appendChild(i), i = document.createElementNS(svgNS, "feMergeNode"), i.setAttribute("in", "f2"), r.appendChild(i)
        }
    }

    function SVGFillFilter(t, e) {
        this.filterManager = e;
        var s = document.createElementNS(svgNS, "feColorMatrix");
        s.setAttribute("type", "matrix"), s.setAttribute("color-interpolation-filters", "sRGB"), s.setAttribute("values", "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"), t.appendChild(s), this.matrixFilter = s
    }

    function SVGStrokeEffect(t, e) {
        this.initialized = !1, this.filterManager = e, this.elem = t, this.paths = []
    }

    function ICompElement(t, e, s, r, i) {
        this._parent.constructor.call(this, t, e, s, r, i), this.layers = t.layers, this.supports3d = !0, this.completeLayers = !1, this.pendingElements = [], this.elements = this.layers ? Array.apply(null, {
            length: this.layers.length
        }) : [], this.data.tm && (this.tm = PropertyFactory.getProp(this, this.data.tm, 0, s.frameRate, this.dynamicProperties)), this.data.xt ? (this.layerElement = document.createElementNS(svgNS, "g"), this.buildAllItems()) : s.progressiveLoad || this.buildAllItems()
    }

    function IImageElement(t, e, s, r, i) {
        this.assetData = s.getAssetData(t.refId), this._parent.constructor.call(this, t, e, s, r, i)
    }

    function IShapeElement(t, e, s, r, i) {
        this.shapes = [], this.shapesData = t.shapes, this.stylesList = [], this.viewData = [], this.shapeModifiers = [], this._parent.constructor.call(this, t, e, s, r, i)
    }

    function ISolidElement(t, e, s, r, i) {
        this._parent.constructor.call(this, t, e, s, r, i)
    }

    function CVBaseElement(t, e, s) {
        this.globalData = s, this.data = t, this.comp = e, this.canvasContext = s.canvasContext, this.init()
    }

    function CVCompElement(t, e, s) {
        this._parent.constructor.call(this, t, e, s);
        var r = {};
        for (var i in s) s.hasOwnProperty(i) && (r[i] = s[i]);
        r.renderer = this, r.compHeight = this.data.h, r.compWidth = this.data.w, this.renderConfig = {
            clearCanvas: !0
        }, this.contextData = {
            saved: Array.apply(null, {
                length: 15
            }),
            savedOp: Array.apply(null, {
                length: 15
            }),
            cArrPos: 0,
            cTr: new Matrix,
            cO: 1
        }, this.completeLayers = !1;
        var a, n = 15;
        for (a = 0; n > a; a += 1) this.contextData.saved[a] = Array.apply(null, {
            length: 16
        });
        this.transformMat = new Matrix, this.parentGlobalData = this.globalData;
        var o = document.createElement("canvas");
        r.canvasContext = o.getContext("2d"), this.canvasContext = r.canvasContext, o.width = this.data.w, o.height = this.data.h, this.canvas = o, this.globalData = r, this.layers = t.layers, this.pendingElements = [], this.elements = Array.apply(null, {
            length: this.layers.length
        }), this.data.tm && (this.tm = PropertyFactory.getProp(this, this.data.tm, 0, s.frameRate, this.dynamicProperties)), (this.data.xt || !s.progressiveLoad) && this.buildAllItems()
    }

    function CVImageElement(t, e, s) {
        this.assetData = s.getAssetData(t.refId), this._parent.constructor.call(this, t, e, s), this.globalData.addPendingElement()
    }

    function CVMaskElement(t, e) {
        this.data = t, this.element = e, this.dynamicProperties = [], this.masksProperties = this.data.masksProperties, this.viewData = new Array(this.masksProperties.length);
        var s, r = this.masksProperties.length;
        for (s = 0; r > s; s++) this.viewData[s] = ShapePropertyFactory.getShapeProp(this.element, this.masksProperties[s], 3, this.dynamicProperties, null)
    }

    function CVShapeElement(t, e, s) {
        this.shapes = [], this.stylesList = [], this.viewData = [], this.shapeModifiers = [], this.shapesData = t.shapes, this.firstFrame = !0, this._parent.constructor.call(this, t, e, s)
    }

    function CVSolidElement(t, e, s) {
        this._parent.constructor.call(this, t, e, s)
    }

    function CVTextElement(t, e, s) {
        this.textSpans = [], this.yOffset = 0, this.fillColorAnim = !1, this.strokeColorAnim = !1, this.strokeWidthAnim = !1, this.stroke = !1, this.fill = !1, this.justifyOffset = 0, this.currentRender = null, this.renderType = "canvas", this.values = {
            fill: "rgba(0,0,0,0)",
            stroke: "rgba(0,0,0,0)",
            sWidth: 0,
            fValue: ""
        }, this._parent.constructor.call(this, t, e, s)
    }

    function HBaseElement(t, e, s, r, i) {
        this.globalData = s, this.comp = r, this.data = t, this.matteElement = null, this.parentContainer = e, this.layerId = i ? i.layerId : "ly_" + randomString(10), this.placeholder = i, this.init()
    }

    function HSolidElement(t, e, s, r, i) {
        this._parent.constructor.call(this, t, e, s, r, i)
    }

    function HCompElement(t, e, s, r, i) {
        this._parent.constructor.call(this, t, e, s, r, i), this.layers = t.layers, this.supports3d = !0, this.completeLayers = !1, this.pendingElements = [], this.elements = Array.apply(null, {
            length: this.layers.length
        }), this.data.tm && (this.tm = PropertyFactory.getProp(this, this.data.tm, 0, s.frameRate, this.dynamicProperties)), this.data.hasMask && (this.supports3d = !1), this.data.xt && (this.layerElement = document.createElement("div")), this.buildAllItems()
    }

    function HShapeElement(t, e, s, r, i) {
        this.shapes = [], this.shapeModifiers = [], this.shapesData = t.shapes, this.stylesList = [], this.viewData = [], this._parent.constructor.call(this, t, e, s, r, i), this.addedTransforms = {
            mdf: !1,
            mats: [this.finalTransform.mat]
        }, this.currentBBox = {
            x: 999999,
            y: -999999,
            h: 0,
            w: 0
        }
    }

    function HTextElement(t, e, s, r, i) {
        this.textSpans = [], this.textPaths = [], this.currentBBox = {
            x: 999999,
            y: -999999,
            h: 0,
            w: 0
        }, this.renderType = "svg", this.isMasked = !1, this._parent.constructor.call(this, t, e, s, r, i)
    }

    function HImageElement(t, e, s, r, i) {
        this.assetData = s.getAssetData(t.refId), this._parent.constructor.call(this, t, e, s, r, i)
    }

    function HCameraElement(t, e, s, r, i) {
        if (this._parent.constructor.call(this, t, e, s, r, i), this.pe = PropertyFactory.getProp(this, t.pe, 0, 0, this.dynamicProperties), t.ks.p.s ? (this.px = PropertyFactory.getProp(this, t.ks.p.x, 1, 0, this.dynamicProperties), this.py = PropertyFactory.getProp(this, t.ks.p.y, 1, 0, this.dynamicProperties), this.pz = PropertyFactory.getProp(this, t.ks.p.z, 1, 0, this.dynamicProperties)) : this.p = PropertyFactory.getProp(this, t.ks.p, 1, 0, this.dynamicProperties), t.ks.a && (this.a = PropertyFactory.getProp(this, t.ks.a, 1, 0, this.dynamicProperties)), t.ks.or.k.length) {
            var a, n = t.ks.or.k.length;
            for (a = 0; n > a; a += 1) t.ks.or.k[a].to = null, t.ks.or.k[a].ti = null
        }
        this.or = PropertyFactory.getProp(this, t.ks.or, 1, degToRads, this.dynamicProperties), this.or.sh = !0, this.rx = PropertyFactory.getProp(this, t.ks.rx, 0, degToRads, this.dynamicProperties), this.ry = PropertyFactory.getProp(this, t.ks.ry, 0, degToRads, this.dynamicProperties), this.rz = PropertyFactory.getProp(this, t.ks.rz, 0, degToRads, this.dynamicProperties), this.mat = new Matrix
    }

    function SliderEffect(t, e, s) {
        this.p = PropertyFactory.getProp(e, t.v, 0, 0, s)
    }

    function AngleEffect(t, e, s) {
        this.p = PropertyFactory.getProp(e, t.v, 0, 0, s)
    }

    function ColorEffect(t, e, s) {
        this.p = PropertyFactory.getProp(e, t.v, 1, 0, s)
    }

    function PointEffect(t, e, s) {
        this.p = PropertyFactory.getProp(e, t.v, 1, 0, s)
    }

    function LayerIndexEffect(t, e, s) {
        this.p = PropertyFactory.getProp(e, t.v, 0, 0, s)
    }

    function CheckboxEffect(t, e, s) {
        this.p = PropertyFactory.getProp(e, t.v, 1, 0, s)
    }

    function NoValueEffect() {
        this.p = {}
    }

    function EffectsManager(t, e, s) {
        var r = t.ef;
        this.effectElements = [];
        var i, a, n = r.length;
        for (i = 0; n > i; i++) a = new GroupEffect(r[i], e, s), this.effectElements.push(a)
    }

    function GroupEffect(t, e, s) {
        this.dynamicProperties = [], this.init(t, e, this.dynamicProperties), this.dynamicProperties.length && s.push(this)
    }

    function play(t) {
        animationManager.play(t)
    }

    function pause(t) {
        animationManager.pause(t)
    }

    function togglePause(t) {
        animationManager.togglePause(t)
    }

    function setSpeed(t, e) {
        animationManager.setSpeed(t, e)
    }

    function setDirection(t, e) {
        animationManager.setDirection(t, e)
    }

    function stop(t) {
        animationManager.stop(t)
    }

    function moveFrame(t) {
        animationManager.moveFrame(t)
    }

    function searchAnimations() {
        standalone === !0 ? animationManager.searchAnimations(animationData, standalone, renderer) : animationManager.searchAnimations()
    }

    function registerAnimation(t) {
        return animationManager.registerAnimation(t)
    }

    function resize() {
        animationManager.resize()
    }

    function start() {
        animationManager.start()
    }

    function goToAndStop(t, e, s) {
        animationManager.goToAndStop(t, e, s)
    }

    function setSubframeRendering(t) {
        subframeEnabled = t
    }

    function loadAnimation(t) {
        return standalone === !0 && (t.animationData = JSON.parse(animationData)), animationManager.loadAnimation(t)
    }

    function destroy(t) {
        return animationManager.destroy(t)
    }

    function setQuality(t) {
        if ("string" == typeof t) switch (t) {
            case "high":
                defaultCurveSegments = 200;
                break;
            case "medium":
                defaultCurveSegments = 50;
                break;
            case "low":
                defaultCurveSegments = 10
        } else !isNaN(t) && t > 1 && (defaultCurveSegments = t);
        roundValues(defaultCurveSegments >= 50 ? !1 : !0)
    }

    function installPlugin(t, e) {
        "expressions" === t && (expressionsPlugin = e)
    }

    function getFactory(t) {
        switch (t) {
            case "propertyFactory":
                return PropertyFactory;
            case "shapePropertyFactory":
                return ShapePropertyFactory;
            case "matrix":
                return Matrix
        }
    }

    function checkReady() {
        "complete" === document.readyState && (clearInterval(readyStateCheckInterval), searchAnimations())
    }

    function getQueryVariable(t) {
        for (var e = queryString.split("&"), s = 0; s < e.length; s++) {
            var r = e[s].split("=");
            if (decodeURIComponent(r[0]) == t) return decodeURIComponent(r[1])
        }
    }
    var svgNS = "http://www.w3.org/2000/svg",
        subframeEnabled = !0,
        expressionsPlugin, isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent),
        cachedColors = {},
        bm_rounder = Math.round,
        bm_rnd, bm_pow = Math.pow,
        bm_sqrt = Math.sqrt,
        bm_abs = Math.abs,
        bm_floor = Math.floor,
        bm_max = Math.max,
        bm_min = Math.min,
        blitter = 10,
        BMMath = {};
    ! function() {
        var t, e = Object.getOwnPropertyNames(Math),
            s = e.length;
        for (t = 0; s > t; t += 1) BMMath[e[t]] = Math[e[t]]
    }(), BMMath.random = Math.random, BMMath.abs = function(t) {
        var e = typeof t;
        if ("object" === e && t.length) {
            var s, r = Array.apply(null, {
                    length: t.length
                }),
                i = t.length;
            for (s = 0; i > s; s += 1) r[s] = Math.abs(t[s]);
            return r
        }
        return Math.abs(t)
    };
    var defaultCurveSegments = 75,
        degToRads = Math.PI / 180,
        roundCorner = .5519;
    roundValues(!1);
    var rgbToHex = function() {
            var t, e, s = [];
            for (t = 0; 256 > t; t += 1) e = t.toString(16), s[t] = 1 == e.length ? "0" + e : e;
            return function(t, e, r) {
                return 0 > t && (t = 0), 0 > e && (e = 0), 0 > r && (r = 0), "#" + s[t] + s[e] + s[r]
            }
        }(),
        fillColorToString = function() {
            var t = [];
            return function(e, s) {
                return void 0 !== s && (e[3] = s), t[e[0]] || (t[e[0]] = {}), t[e[0]][e[1]] || (t[e[0]][e[1]] = {}), t[e[0]][e[1]][e[2]] || (t[e[0]][e[1]][e[2]] = {}), t[e[0]][e[1]][e[2]][e[3]] || (t[e[0]][e[1]][e[2]][e[3]] = "rgba(" + e.join(",") + ")"), t[e[0]][e[1]][e[2]][e[3]]
            }
        }(),
        Matrix = function() {
            function t() {
                return this.props[0] = 1, this.props[1] = 0, this.props[2] = 0, this.props[3] = 0, this.props[4] = 0, this.props[5] = 1, this.props[6] = 0, this.props[7] = 0, this.props[8] = 0, this.props[9] = 0, this.props[10] = 1, this.props[11] = 0, this.props[12] = 0, this.props[13] = 0, this.props[14] = 0, this.props[15] = 1, this
            }

            function e(t) {
                if (0 === t) return this;
                var e = Math.cos(t),
                    s = Math.sin(t);
                return this._t(e, -s, 0, 0, s, e, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
            }

            function s(t) {
                if (0 === t) return this;
                var e = Math.cos(t),
                    s = Math.sin(t);
                return this._t(1, 0, 0, 0, 0, e, -s, 0, 0, s, e, 0, 0, 0, 0, 1)
            }

            function r(t) {
                if (0 === t) return this;
                var e = Math.cos(t),
                    s = Math.sin(t);
                return this._t(e, 0, s, 0, 0, 1, 0, 0, -s, 0, e, 0, 0, 0, 0, 1)
            }

            function i(t) {
                if (0 === t) return this;
                var e = Math.cos(t),
                    s = Math.sin(t);
                return this._t(e, -s, 0, 0, s, e, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
            }

            function a(t, e) {
                return this._t(1, e, t, 1, 0, 0)
            }

            function n(t, e) {
                return this.shear(Math.tan(t), Math.tan(e))
            }

            function o(t, e) {
                var s = Math.cos(e),
                    r = Math.sin(e);
                return this._t(s, r, 0, 0, -r, s, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(1, 0, 0, 0, Math.tan(t), 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(s, -r, 0, 0, r, s, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
            }

            function h(t, e, s) {
                return s = isNaN(s) ? 1 : s, 1 == t && 1 == e && 1 == s ? this : this._t(t, 0, 0, 0, 0, e, 0, 0, 0, 0, s, 0, 0, 0, 0, 1)
            }

            function l(t, e, s, r, i, a, n, o, h, l, p, m, f, d, c, u) {
                return this.props[0] = t, this.props[1] = e, this.props[2] = s, this.props[3] = r, this.props[4] = i, this.props[5] = a, this.props[6] = n, this.props[7] = o, this.props[8] = h, this.props[9] = l, this.props[10] = p, this.props[11] = m, this.props[12] = f, this.props[13] = d, this.props[14] = c, this.props[15] = u, this
            }

            function p(t, e, s) {
                return s = s || 0, 0 !== t || 0 !== e || 0 !== s ? this._t(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, t, e, s, 1) : this
            }

            function m(t, e, s, r, i, a, n, o, h, l, p, m, f, d, c, u) {
                if (1 === t && 0 === e && 0 === s && 0 === r && 0 === i && 1 === a && 0 === n && 0 === o && 0 === h && 0 === l && 1 === p && 0 === m) return (0 !== f || 0 !== d || 0 !== c) && (this.props[12] = this.props[12] * t + this.props[13] * i + this.props[14] * h + this.props[15] * f, this.props[13] = this.props[12] * e + this.props[13] * a + this.props[14] * l + this.props[15] * d, this.props[14] = this.props[12] * s + this.props[13] * n + this.props[14] * p + this.props[15] * c, this.props[15] = this.props[12] * r + this.props[13] * o + this.props[14] * m + this.props[15] * u), this;
                var y = this.props[0],
                    g = this.props[1],
                    v = this.props[2],
                    b = this.props[3],
                    E = this.props[4],
                    P = this.props[5],
                    k = this.props[6],
                    x = this.props[7],
                    S = this.props[8],
                    M = this.props[9],
                    C = this.props[10],
                    D = this.props[11],
                    A = this.props[12],
                    w = this.props[13],
                    T = this.props[14],
                    I = this.props[15];
                return this.props[0] = y * t + g * i + v * h + b * f, this.props[1] = y * e + g * a + v * l + b * d, this.props[2] = y * s + g * n + v * p + b * c, this.props[3] = y * r + g * o + v * m + b * u, this.props[4] = E * t + P * i + k * h + x * f, this.props[5] = E * e + P * a + k * l + x * d, this.props[6] = E * s + P * n + k * p + x * c, this.props[7] = E * r + P * o + k * m + x * u, this.props[8] = S * t + M * i + C * h + D * f, this.props[9] = S * e + M * a + C * l + D * d, this.props[10] = S * s + M * n + C * p + D * c, this.props[11] = S * r + M * o + C * m + D * u, this.props[12] = A * t + w * i + T * h + I * f, this.props[13] = A * e + w * a + T * l + I * d, this.props[14] = A * s + w * n + T * p + I * c, this.props[15] = A * r + w * o + T * m + I * u, this
            }

            function f(t) {
                var e;
                for (e = 0; 16 > e; e += 1) t.props[e] = this.props[e]
            }

            function d(t) {
                var e;
                for (e = 0; 16 > e; e += 1) this.props[e] = t[e]
            }

            function c(t, e, s) {
                return {
                    x: t * this.props[0] + e * this.props[4] + s * this.props[8] + this.props[12],
                    y: t * this.props[1] + e * this.props[5] + s * this.props[9] + this.props[13],
                    z: t * this.props[2] + e * this.props[6] + s * this.props[10] + this.props[14]
                }
            }

            function u(t, e, s) {
                return t * this.props[0] + e * this.props[4] + s * this.props[8] + this.props[12]
            }

            function y(t, e, s) {
                return t * this.props[1] + e * this.props[5] + s * this.props[9] + this.props[13]
            }

            function g(t, e, s) {
                return t * this.props[2] + e * this.props[6] + s * this.props[10] + this.props[14]
            }

            function v(t) {
                var e, s = this.props[0] * this.props[5] - this.props[1] * this.props[4],
                    r = this.props[5] / s,
                    i = -this.props[1] / s,
                    a = -this.props[4] / s,
                    n = this.props[0] / s,
                    o = (this.props[4] * this.props[13] - this.props[5] * this.props[12]) / s,
                    h = -(this.props[0] * this.props[13] - this.props[1] * this.props[12]) / s,
                    l = t.length,
                    p = [];
                for (e = 0; l > e; e += 1) p[e] = [t[e][0] * r + t[e][1] * a + o, t[e][0] * i + t[e][1] * n + h, 0];
                return p
            }

            function b(t, e, s) {
                return [t * this.props[0] + e * this.props[4] + s * this.props[8] + this.props[12], t * this.props[1] + e * this.props[5] + s * this.props[9] + this.props[13], t * this.props[2] + e * this.props[6] + s * this.props[10] + this.props[14]]
            }

            function E(t, e) {
                return bm_rnd(t * this.props[0] + e * this.props[4] + this.props[12]) + "," + bm_rnd(t * this.props[1] + e * this.props[5] + this.props[13])
            }

            function P() {
                return [this.props[0], this.props[1], this.props[2], this.props[3], this.props[4], this.props[5], this.props[6], this.props[7], this.props[8], this.props[9], this.props[10], this.props[11], this.props[12], this.props[13], this.props[14], this.props[15]];

            }

            function k() {
                return isSafari ? "matrix3d(" + roundTo2Decimals(this.props[0]) + "," + roundTo2Decimals(this.props[1]) + "," + roundTo2Decimals(this.props[2]) + "," + roundTo2Decimals(this.props[3]) + "," + roundTo2Decimals(this.props[4]) + "," + roundTo2Decimals(this.props[5]) + "," + roundTo2Decimals(this.props[6]) + "," + roundTo2Decimals(this.props[7]) + "," + roundTo2Decimals(this.props[8]) + "," + roundTo2Decimals(this.props[9]) + "," + roundTo2Decimals(this.props[10]) + "," + roundTo2Decimals(this.props[11]) + "," + roundTo2Decimals(this.props[12]) + "," + roundTo2Decimals(this.props[13]) + "," + roundTo2Decimals(this.props[14]) + "," + roundTo2Decimals(this.props[15]) + ")" : (this.cssParts[1] = this.props.join(","), this.cssParts.join(""))
            }

            function x() {
                return "matrix(" + this.props[0] + "," + this.props[1] + "," + this.props[4] + "," + this.props[5] + "," + this.props[12] + "," + this.props[13] + ")"
            }

            function S() {
                return "" + this.toArray()
            }
            return function() {
                this.reset = t, this.rotate = e, this.rotateX = s, this.rotateY = r, this.rotateZ = i, this.skew = n, this.skewFromAxis = o, this.shear = a, this.scale = h, this.setTransform = l, this.translate = p, this.transform = m, this.applyToPoint = c, this.applyToX = u, this.applyToY = y, this.applyToZ = g, this.applyToPointArray = b, this.applyToPointStringified = E, this.toArray = P, this.toCSS = k, this.to2dCSS = x, this.toString = S, this.clone = f, this.cloneFromProps = d, this.inversePoints = v, this._t = this.transform, this.props = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], this.cssParts = ["matrix3d(", "", ")"]
            }
        }();
    ! function(t, e) {
        function s(s, l, p) {
            var d = [];
            l = 1 == l ? {
                entropy: !0
            } : l || {};
            var v = n(a(l.entropy ? [s, h(t)] : null == s ? o() : s, 3), d),
                b = new r(d),
                E = function() {
                    for (var t = b.g(f), e = u, s = 0; y > t;) t = (t + s) * m, e *= m, s = b.g(1);
                    for (; t >= g;) t /= 2, e /= 2, s >>>= 1;
                    return (t + s) / e
                };
            return E.int32 = function() {
                return 0 | b.g(4)
            }, E.quick = function() {
                return b.g(4) / 4294967296
            }, E["double"] = E, n(h(b.S), t), (l.pass || p || function(t, s, r, a) {
                return a && (a.S && i(a, b), t.state = function() {
                    return i(b, {})
                }), r ? (e[c] = t, s) : t
            })(E, v, "global" in l ? l.global : this == e, l.state)
        }

        function r(t) {
            var e, s = t.length,
                r = this,
                i = 0,
                a = r.i = r.j = 0,
                n = r.S = [];
            for (s || (t = [s++]); m > i;) n[i] = i++;
            for (i = 0; m > i; i++) n[i] = n[a = v & a + t[i % s] + (e = n[i])], n[a] = e;
            (r.g = function(t) {
                for (var e, s = 0, i = r.i, a = r.j, n = r.S; t--;) e = n[i = v & i + 1], s = s * m + n[v & (n[i] = n[a = v & a + e]) + (n[a] = e)];
                return r.i = i, r.j = a, s
            })(m)
        }

        function i(t, e) {
            return e.i = t.i, e.j = t.j, e.S = t.S.slice(), e
        }

        function a(t, e) {
            var s, r = [],
                i = typeof t;
            if (e && "object" == i)
                for (s in t) try {
                    r.push(a(t[s], e - 1))
                } catch (n) {}
            return r.length ? r : "string" == i ? t : t + "\x00"
        }

        function n(t, e) {
            for (var s, r = t + "", i = 0; i < r.length;) e[v & i] = v & (s ^= 19 * e[v & i]) + r.charCodeAt(i++);
            return h(e)
        }

        function o() {
            try {
                if (l) return h(l.randomBytes(m));
                var e = new Uint8Array(m);
                return (p.crypto || p.msCrypto).getRandomValues(e), h(e)
            } catch (s) {
                var r = p.navigator,
                    i = r && r.plugins;
                return [+new Date, p, i, p.screen, h(t)]
            }
        }

        function h(t) {
            return String.fromCharCode.apply(0, t)
        }
        var l, p = this,
            m = 256,
            f = 6,
            d = 52,
            c = "random",
            u = e.pow(m, f),
            y = e.pow(2, d),
            g = 2 * y,
            v = m - 1;
        e["seed" + c] = s, n(e.random(), t)
    }([], BMMath);
    var BezierFactory = function() {
            function t(t, e, s, r, i) {
                var a = i || ("bez_" + t + "_" + e + "_" + s + "_" + r).replace(/\./g, "p");
                if (p[a]) return p[a];
                var n = new h([t, e, s, r]);
                return p[a] = n, n
            }

            function e(t, e) {
                return 1 - 3 * e + 3 * t
            }

            function s(t, e) {
                return 3 * e - 6 * t
            }

            function r(t) {
                return 3 * t
            }

            function i(t, i, a) {
                return ((e(i, a) * t + s(i, a)) * t + r(i)) * t
            }

            function a(t, i, a) {
                return 3 * e(i, a) * t * t + 2 * s(i, a) * t + r(i)
            }

            function n(t, e, s, r, a) {
                var n, o, h = 0;
                do o = e + (s - e) / 2, n = i(o, r, a) - t, n > 0 ? s = o : e = o; while (Math.abs(n) > d && ++h < c);
                return o
            }

            function o(t, e, s, r) {
                for (var n = 0; m > n; ++n) {
                    var o = a(e, s, r);
                    if (0 === o) return e;
                    var h = i(e, s, r) - t;
                    e -= h / o
                }
                return e
            }

            function h(t) {
                this._p = t, this._mSampleValues = g ? new Float32Array(u) : new Array(u), this._precomputed = !1, this.get = this.get.bind(this)
            }
            var l = {};
            l.getBezierEasing = t;
            var p = {},
                m = 4,
                f = .001,
                d = 1e-7,
                c = 10,
                u = 11,
                y = 1 / (u - 1),
                g = "function" == typeof Float32Array;
            return h.prototype = {
                get: function(t) {
                    var e = this._p[0],
                        s = this._p[1],
                        r = this._p[2],
                        a = this._p[3];
                    return this._precomputed || this._precompute(), e === s && r === a ? t : 0 === t ? 0 : 1 === t ? 1 : i(this._getTForX(t), s, a)
                },
                _precompute: function() {
                    var t = this._p[0],
                        e = this._p[1],
                        s = this._p[2],
                        r = this._p[3];
                    this._precomputed = !0, (t !== e || s !== r) && this._calcSampleValues()
                },
                _calcSampleValues: function() {
                    for (var t = this._p[0], e = this._p[2], s = 0; u > s; ++s) this._mSampleValues[s] = i(s * y, t, e)
                },
                _getTForX: function(t) {
                    for (var e = this._p[0], s = this._p[2], r = this._mSampleValues, i = 0, h = 1, l = u - 1; h !== l && r[h] <= t; ++h) i += y;
                    --h;
                    var p = (t - r[h]) / (r[h + 1] - r[h]),
                        m = i + p * y,
                        d = a(m, e, s);
                    return d >= f ? o(t, m, e, s) : 0 === d ? m : n(t, i, i + y, e, s)
                }
            }, l
        }(),
        MatrixManager = matrixManagerFunction;
    ! function() {
        for (var t = 0, e = ["ms", "moz", "webkit", "o"], s = 0; s < e.length && !window.requestAnimationFrame; ++s) window.requestAnimationFrame = window[e[s] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[e[s] + "CancelAnimationFrame"] || window[e[s] + "CancelRequestAnimationFrame"];
        window.requestAnimationFrame || (window.requestAnimationFrame = function(e, s) {
            var r = (new Date).getTime(),
                i = Math.max(0, 16 - (r - t)),
                a = window.setTimeout(function() {
                    e(r + i)
                }, i);
            return t = r + i, a
        }), window.cancelAnimationFrame || (window.cancelAnimationFrame = function(t) {
            clearTimeout(t)
        })
    }();
    var bez = bezFunction(),
        dataManager = dataFunctionManager(),
        FontManager = function() {
            function t(t, e) {
                var s = document.createElement("span");
                s.style.fontFamily = e;
                var r = document.createElement("span");
                r.innerHTML = "giItT1WQy@!-/#", s.style.position = "absolute", s.style.left = "-10000px", s.style.top = "-10000px", s.style.fontSize = "300px", s.style.fontVariant = "normal", s.style.fontStyle = "normal", s.style.fontWeight = "normal", s.style.letterSpacing = "0", s.appendChild(r), document.body.appendChild(s);
                var i = r.offsetWidth;
                return r.style.fontFamily = t + ", " + e, {
                    node: r,
                    w: i,
                    parent: s
                }
            }

            function e() {
                var t, s, r, i = this.fonts.length,
                    a = i;
                for (t = 0; i > t; t += 1)
                    if (this.fonts[t].loaded) a -= 1;
                    else if ("t" === this.fonts[t].fOrigin) {
                    if (window.Typekit && window.Typekit.load && 0 === this.typekitLoaded) {
                        this.typekitLoaded = 1;
                        try {
                            window.Typekit.load({
                                async: !0,
                                active: function() {
                                    this.typekitLoaded = 2
                                }.bind(this)
                            })
                        } catch (n) {}
                    }
                    2 === this.typekitLoaded && (this.fonts[t].loaded = !0)
                } else "n" === this.fonts[t].fOrigin ? this.fonts[t].loaded = !0 : (s = this.fonts[t].monoCase.node, r = this.fonts[t].monoCase.w, s.offsetWidth !== r ? (a -= 1, this.fonts[t].loaded = !0) : (s = this.fonts[t].sansCase.node, r = this.fonts[t].sansCase.w, s.offsetWidth !== r && (a -= 1, this.fonts[t].loaded = !0)), this.fonts[t].loaded && (this.fonts[t].sansCase.parent.parentNode.removeChild(this.fonts[t].sansCase.parent), this.fonts[t].monoCase.parent.parentNode.removeChild(this.fonts[t].monoCase.parent)));
                0 !== a && Date.now() - this.initTime < h ? setTimeout(e.bind(this), 20) : setTimeout(function() {
                    this.loaded = !0
                }.bind(this), 0)
            }

            function s(t, e) {
                var s = document.createElementNS(svgNS, "text");
                s.style.fontSize = "100px", s.style.fontFamily = e.fFamily, s.textContent = "1", e.fClass ? (s.style.fontFamily = "inherit", s.className = e.fClass) : s.style.fontFamily = e.fFamily, t.appendChild(s);
                var r = document.createElement("canvas").getContext("2d");
                return r.font = "100px " + e.fFamily, r
            }

            function r(r, i) {
                if (!r) return void(this.loaded = !0);
                if (this.chars) return this.loaded = !0, void(this.fonts = r.list);
                var a, n = r.list,
                    o = n.length;
                for (a = 0; o > a; a += 1) {
                    if (n[a].loaded = !1, n[a].monoCase = t(n[a].fFamily, "monospace"), n[a].sansCase = t(n[a].fFamily, "sans-serif"), n[a].fPath) {
                        if ("p" === n[a].fOrigin) {
                            var h = document.createElement("style");
                            h.type = "text/css", h.innerHTML = "@font-face {font-family: " + n[a].fFamily + "; font-style: normal; src: url('" + n[a].fPath + "');}", i.appendChild(h)
                        } else if ("g" === n[a].fOrigin) {
                            var l = document.createElement("link");
                            l.type = "text/css", l.rel = "stylesheet", l.href = n[a].fPath, i.appendChild(l)
                        } else if ("t" === n[a].fOrigin) {
                            var p = document.createElement("script");
                            p.setAttribute("src", n[a].fPath), i.appendChild(p)
                        }
                    } else n[a].loaded = !0;
                    n[a].helper = s(i, n[a]), this.fonts.push(n[a])
                }
                e.bind(this)()
            }

            function i(t) {
                if (t) {
                    this.chars || (this.chars = []);
                    var e, s, r, i = t.length,
                        a = this.chars.length;
                    for (e = 0; i > e; e += 1) {
                        for (s = 0, r = !1; a > s;) this.chars[s].style === t[e].style && this.chars[s].fFamily === t[e].fFamily && this.chars[s].ch === t[e].ch && (r = !0), s += 1;
                        r || (this.chars.push(t[e]), a += 1)
                    }
                }
            }

            function a(t, e, s) {
                for (var r = 0, i = this.chars.length; i > r;) {
                    if (this.chars[r].ch === t && this.chars[r].style === e && this.chars[r].fFamily === s) return this.chars[r];
                    r += 1
                }
            }

            function n(t, e, s) {
                var r = this.getFontByName(e),
                    i = r.helper;
                return i.measureText(t).width * s / 100
            }

            function o(t) {
                for (var e = 0, s = this.fonts.length; s > e;) {
                    if (this.fonts[e].fName === t) return this.fonts[e];
                    e += 1
                }
                return "sans-serif"
            }
            var h = 5e3,
                l = function() {
                    this.fonts = [], this.chars = null, this.typekitLoaded = 0, this.loaded = !1, this.initTime = Date.now()
                };
            return l.prototype.addChars = i, l.prototype.addFonts = r, l.prototype.getCharData = a, l.prototype.getFontByName = o, l.prototype.measureText = n, l
        }(),
        PropertyFactory = function() {
            function t() {
                if (this.elem.globalData.frameId !== this.frameId) {
                    this.mdf = !1;
                    var t = this.comp.renderedFrame - this.offsetTime;
                    if (t === this.lastFrame || this.lastFrame !== l && (this.lastFrame >= this.keyframes[this.keyframes.length - 1].t - this.offsetTime && t >= this.keyframes[this.keyframes.length - 1].t - this.offsetTime || this.lastFrame < this.keyframes[0].t - this.offsetTime && t < this.keyframes[0].t - this.offsetTime));
                    else {
                        for (var e, s, r = 0, i = this.keyframes.length - 1, a = 1, n = !0; n;) {
                            if (e = this.keyframes[r], s = this.keyframes[r + 1], r == i - 1 && t >= s.t - this.offsetTime) {
                                e.h && (e = s);
                                break
                            }
                            if (s.t - this.offsetTime > t) break;
                            i - 1 > r ? r += a : n = !1
                        }
                        var o, h, p, m, f, d = 0;
                        if (e.to) {
                            e.bezierData || bez.buildBezierData(e);
                            var c = e.bezierData;
                            if (t >= s.t - this.offsetTime || t < e.t - this.offsetTime) {
                                var u = t >= s.t - this.offsetTime ? c.points.length - 1 : 0;
                                for (h = c.points[u].point.length, o = 0; h > o; o += 1) this.v[o] = this.mult ? c.points[u].point[o] * this.mult : c.points[u].point[o], this.pv[o] = c.points[u].point[o], this.lastPValue[o] !== this.pv[o] && (this.mdf = !0, this.lastPValue[o] = this.pv[o])
                            } else {
                                e.__fnct ? f = e.__fnct : (f = BezierFactory.getBezierEasing(e.o.x, e.o.y, e.i.x, e.i.y, e.n).get, e.__fnct = f), p = f((t - (e.t - this.offsetTime)) / (s.t - this.offsetTime - (e.t - this.offsetTime)));
                                var y, g = c.segmentLength * p,
                                    v = 0;
                                for (a = 1, n = !0, m = c.points.length; n;) {
                                    if (v += c.points[d].partialLength * a, 0 === g || 0 === p || d == c.points.length - 1) {
                                        for (h = c.points[d].point.length, o = 0; h > o; o += 1) this.v[o] = this.mult ? c.points[d].point[o] * this.mult : c.points[d].point[o], this.pv[o] = c.points[d].point[o], this.lastPValue[o] !== this.pv[o] && (this.mdf = !0, this.lastPValue[o] = this.pv[o]);
                                        break
                                    }
                                    if (g >= v && g < v + c.points[d + 1].partialLength) {
                                        for (y = (g - v) / c.points[d + 1].partialLength, h = c.points[d].point.length, o = 0; h > o; o += 1) this.v[o] = this.mult ? (c.points[d].point[o] + (c.points[d + 1].point[o] - c.points[d].point[o]) * y) * this.mult : c.points[d].point[o] + (c.points[d + 1].point[o] - c.points[d].point[o]) * y, this.pv[o] = c.points[d].point[o] + (c.points[d + 1].point[o] - c.points[d].point[o]) * y, this.lastPValue[o] !== this.pv[o] && (this.mdf = !0, this.lastPValue[o] = this.pv[o]);
                                        break
                                    }
                                    m - 1 > d && 1 == a || d > 0 && -1 == a ? d += a : n = !1
                                }
                            }
                        } else {
                            var b, E, P, k, x, S = !1;
                            for (i = e.s.length, r = 0; i > r; r += 1) {
                                if (1 !== e.h && (e.o.x instanceof Array ? (S = !0, e.__fnct || (e.__fnct = []), e.__fnct[r] || (b = e.o.x[r] || e.o.x[0], E = e.o.y[r] || e.o.y[0], P = e.i.x[r] || e.i.x[0], k = e.i.y[r] || e.i.y[0])) : (S = !1, e.__fnct || (b = e.o.x, E = e.o.y, P = e.i.x, k = e.i.y)), S ? e.__fnct[r] ? f = e.__fnct[r] : (f = BezierFactory.getBezierEasing(b, E, P, k).get, e.__fnct[r] = f) : e.__fnct ? f = e.__fnct : (f = BezierFactory.getBezierEasing(b, E, P, k).get, e.__fnct = f), p = t >= s.t - this.offsetTime ? 1 : t < e.t - this.offsetTime ? 0 : f((t - (e.t - this.offsetTime)) / (s.t - this.offsetTime - (e.t - this.offsetTime)))), this.sh && 1 !== e.h) {
                                    var M = e.s[r],
                                        C = e.e[r]; - 180 > M - C ? M += 360 : M - C > 180 && (M -= 360), x = M + (C - M) * p
                                } else x = 1 === e.h ? e.s[r] : e.s[r] + (e.e[r] - e.s[r]) * p;
                                1 === i ? (this.v = this.mult ? x * this.mult : x, this.pv = x, this.lastPValue != this.pv && (this.mdf = !0, this.lastPValue = this.pv)) : (this.v[r] = this.mult ? x * this.mult : x, this.pv[r] = x, this.lastPValue[r] !== this.pv[r] && (this.mdf = !0, this.lastPValue[r] = this.pv[r]))
                            }
                        }
                    }
                    this.lastFrame = t, this.frameId = this.elem.globalData.frameId
                }
            }

            function e() {}

            function s(t, s, r) {
                this.mult = r, this.v = r ? s.k * r : s.k, this.pv = s.k, this.mdf = !1, this.comp = t.comp, this.k = !1, this.kf = !1, this.vel = 0, this.getValue = e
            }

            function r(t, s, r) {
                this.mult = r, this.data = s, this.mdf = !1, this.comp = t.comp, this.k = !1, this.kf = !1, this.frameId = -1, this.v = new Array(s.k.length), this.pv = new Array(s.k.length), this.lastValue = new Array(s.k.length);
                var i = Array.apply(null, {
                    length: s.k.length
                });
                this.vel = i.map(function() {
                    return 0
                });
                var a, n = s.k.length;
                for (a = 0; n > a; a += 1) this.v[a] = r ? s.k[a] * r : s.k[a], this.pv[a] = s.k[a];
                this.getValue = e
            }

            function i(e, s, r) {
                this.keyframes = s.k, this.offsetTime = e.data.st, this.lastValue = -99999, this.lastPValue = -99999, this.frameId = -1, this.k = !0, this.kf = !0, this.data = s, this.mult = r, this.elem = e, this.comp = e.comp, this.lastFrame = l, this.v = r ? s.k[0].s[0] * r : s.k[0].s[0], this.pv = s.k[0].s[0], this.getValue = t
            }

            function a(e, s, r) {
                var i, a, n, o, h, p = s.k.length;
                for (i = 0; p - 1 > i; i += 1) s.k[i].to && s.k[i].s && s.k[i].e && (a = s.k[i].s, n = s.k[i].e, o = s.k[i].to, h = s.k[i].ti, (2 === a.length && (a[0] !== n[0] || a[1] !== n[1]) && bez.pointOnLine2D(a[0], a[1], n[0], n[1], a[0] + o[0], a[1] + o[1]) && bez.pointOnLine2D(a[0], a[1], n[0], n[1], n[0] + h[0], n[1] + h[1]) || 3 === a.length && (a[0] !== n[0] || a[1] !== n[1] || a[2] !== n[2]) && bez.pointOnLine3D(a[0], a[1], a[2], n[0], n[1], n[2], a[0] + o[0], a[1] + o[1], a[2] + o[2]) && bez.pointOnLine3D(a[0], a[1], a[2], n[0], n[1], n[2], n[0] + h[0], n[1] + h[1], n[2] + h[2])) && (s.k[i].to = null, s.k[i].ti = null));
                this.keyframes = s.k, this.offsetTime = e.data.st, this.k = !0, this.kf = !0, this.mult = r, this.elem = e, this.comp = e.comp, this.getValue = t, this.frameId = -1, this.v = new Array(s.k[0].s.length), this.pv = new Array(s.k[0].s.length), this.lastValue = new Array(s.k[0].s.length), this.lastPValue = new Array(s.k[0].s.length), this.lastFrame = l
            }

            function n(t, e, n, o, h) {
                var l;
                if (2 === n) l = new p(t, e, h);
                else if (e.k.length)
                    if ("number" == typeof e.k[0]) l = new r(t, e, o);
                    else switch (n) {
                        case 0:
                            l = new i(t, e, o);
                            break;
                        case 1:
                            l = new a(t, e, o)
                    } else l = new s(t, e, o);
                return l.k && h.push(l), l
            }

            function o(t, e, s, r) {
                return new f(t, e, s, r)
            }

            function h(t, e, s) {
                return new d(t, e, s)
            }
            var l = -999999,
                p = function() {
                    function t() {
                        return this.p.k && this.p.getValue(), this.p.v.key || (this.p.v.key = function(t) {
                            return this.p.v.numKeys ? this.p.keyframes[t - 1].t : 0
                        }.bind(this)), this.p.v.numKeys || (this.p.v.numKeys = this.p.keyframes ? this.p.keyframes.length : 0), this.p.v.valueAtTime || (this.p.v.valueAtTime = this.p.getValueAtTime.bind(this.p)), this.p.v
                    }

                    function e() {
                        return this.px.k && this.px.getValue(), this.px.v
                    }

                    function s() {
                        return this.py.k && this.py.getValue(), this.py.v
                    }

                    function r() {
                        return this.a.k && this.a.getValue(), this.a.v
                    }

                    function i() {
                        return this.or.k && this.or.getValue(), this.or.v
                    }

                    function a() {
                        return this.r.k && this.r.getValue(), this.r.v / degToRads
                    }

                    function n() {
                        return this.s.k && this.s.getValue(), this.s.v
                    }

                    function o() {
                        return this.o.k && this.o.getValue(), this.o.v
                    }

                    function h() {
                        return this.sk.k && this.sk.getValue(), this.sk.v
                    }

                    function l() {
                        return this.sa.k && this.sa.getValue(), this.sa.v
                    }

                    function p(t) {
                        var e, s = this.dynamicProperties.length;
                        for (e = 0; s > e; e += 1) this.dynamicProperties[e].getValue(), this.dynamicProperties[e].mdf && (this.mdf = !0);
                        this.a && t.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.s && t.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.r ? t.rotate(-this.r.v) : t.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.data.p.s ? this.data.p.z ? t.translate(this.px.v, this.py.v, -this.pz.v) : t.translate(this.px.v, this.py.v, 0) : t.translate(this.p.v[0], this.p.v[1], -this.p.v[2])
                    }

                    function m() {
                        if (this.elem.globalData.frameId !== this.frameId) {
                            this.mdf = !1;
                            var t, e = this.dynamicProperties.length;
                            for (t = 0; e > t; t += 1) this.dynamicProperties[t].getValue(), this.dynamicProperties[t].mdf && (this.mdf = !0);
                            if (this.mdf) {
                                if (this.v.reset(), this.a && this.v.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.s && this.v.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.sk && this.v.skewFromAxis(-this.sk.v, this.sa.v), this.r ? this.v.rotate(-this.r.v) : this.v.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.autoOriented && this.p.keyframes && this.p.getValueAtTime) {
                                    var s, r;
                                    this.p.lastFrame + this.p.offsetTime < this.p.keyframes[0].t ? (s = this.p.getValueAtTime(this.p.keyframes[0].t + .01, 0), r = this.p.getValueAtTime(this.p.keyframes[0].t, 0)) : this.p.lastFrame + this.p.offsetTime > this.p.keyframes[this.p.keyframes.length - 1].t ? (s = this.p.getValueAtTime(this.p.keyframes[this.p.keyframes.length - 1].t, 0), r = this.p.getValueAtTime(this.p.keyframes[this.p.keyframes.length - 1].t - .01, 0)) : (s = this.p.pv, r = this.p.getValueAtTime(this.p.lastFrame + this.p.offsetTime - .01, this.p.offsetTime)), this.v.rotate(-Math.atan2(s[1] - r[1], s[0] - r[0]))
                                }
                                this.data.p.s ? this.data.p.z ? this.v.translate(this.px.v, this.py.v, -this.pz.v) : this.v.translate(this.px.v, this.py.v, 0) : this.v.translate(this.p.v[0], this.p.v[1], -this.p.v[2])
                            }
                            this.frameId = this.elem.globalData.frameId
                        }
                    }

                    function f() {
                        this.inverted = !0, this.iv = new Matrix, this.k || (this.data.p.s ? this.iv.translate(this.px.v, this.py.v, -this.pz.v) : this.iv.translate(this.p.v[0], this.p.v[1], -this.p.v[2]), this.r ? this.iv.rotate(-this.r.v) : this.iv.rotateX(-this.rx.v).rotateY(-this.ry.v).rotateZ(this.rz.v), this.s && this.iv.scale(this.s.v[0], this.s.v[1], 1), this.a && this.iv.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]))
                    }

                    function d() {}
                    return function(c, u, y) {
                        this.elem = c, this.frameId = -1, this.dynamicProperties = [], this.mdf = !1, this.data = u, this.getValue = m, this.applyToMatrix = p, this.setInverted = f, this.autoOrient = d, this.v = new Matrix, u.p.s ? (this.px = PropertyFactory.getProp(c, u.p.x, 0, 0, this.dynamicProperties), this.py = PropertyFactory.getProp(c, u.p.y, 0, 0, this.dynamicProperties), u.p.z && (this.pz = PropertyFactory.getProp(c, u.p.z, 0, 0, this.dynamicProperties))) : this.p = PropertyFactory.getProp(c, u.p, 1, 0, this.dynamicProperties), u.r ? this.r = PropertyFactory.getProp(c, u.r, 0, degToRads, this.dynamicProperties) : u.rx && (this.rx = PropertyFactory.getProp(c, u.rx, 0, degToRads, this.dynamicProperties), this.ry = PropertyFactory.getProp(c, u.ry, 0, degToRads, this.dynamicProperties), this.rz = PropertyFactory.getProp(c, u.rz, 0, degToRads, this.dynamicProperties), this.or = PropertyFactory.getProp(c, u.or, 0, degToRads, this.dynamicProperties)), u.sk && (this.sk = PropertyFactory.getProp(c, u.sk, 0, degToRads, this.dynamicProperties), this.sa = PropertyFactory.getProp(c, u.sa, 0, degToRads, this.dynamicProperties)), u.a && (this.a = PropertyFactory.getProp(c, u.a, 1, 0, this.dynamicProperties)), u.s && (this.s = PropertyFactory.getProp(c, u.s, 1, .01, this.dynamicProperties)), this.o = u.o ? PropertyFactory.getProp(c, u.o, 0, .01, y) : {
                            mdf: !1,
                            v: 1
                        }, this.dynamicProperties.length ? y.push(this) : (this.a && this.v.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.s && this.v.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.sk && this.v.skewFromAxis(-this.sk.v, this.sa.v), this.r ? this.v.rotate(-this.r.v) : this.v.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.data.p.s ? u.p.z ? this.v.translate(this.px.v, this.py.v, -this.pz.v) : this.v.translate(this.px.v, this.py.v, 0) : this.v.translate(this.p.v[0], this.p.v[1], -this.p.v[2])), Object.defineProperty(this, "position", {
                            get: t
                        }), Object.defineProperty(this, "xPosition", {
                            get: e
                        }), Object.defineProperty(this, "yPosition", {
                            get: s
                        }), Object.defineProperty(this, "orientation", {
                            get: i
                        }), Object.defineProperty(this, "anchorPoint", {
                            get: r
                        }), Object.defineProperty(this, "rotation", {
                            get: a
                        }), Object.defineProperty(this, "scale", {
                            get: n
                        }), Object.defineProperty(this, "opacity", {
                            get: o
                        }), Object.defineProperty(this, "skew", {
                            get: h
                        }), Object.defineProperty(this, "skewAxis", {
                            get: l
                        })
                    }
                }(),
                m = function() {
                    function t(t) {
                        if (this.prop.getValue(), this.cmdf = !1, this.omdf = !1, this.prop.mdf || t) {
                            var e, s, r, i = 4 * this.data.p;
                            for (e = 0; i > e; e += 1) s = e % 4 === 0 ? 100 : 255, r = Math.round(this.prop.v[e] * s), this.c[e] !== r && (this.c[e] = r, this.cmdf = !0);
                            if (this.o.length)
                                for (i = this.prop.v.length, e = 4 * this.data.p; i > e; e += 1) s = e % 2 === 0 ? 100 : 1, r = e % 2 === 0 ? Math.round(100 * this.prop.v[e]) : this.prop.v[e], this.o[e - 4 * this.data.p] !== r && (this.o[e - 4 * this.data.p] = r, this.omdf = !0)
                        }
                    }

                    function e(e, s, r) {
                        this.prop = n(e, s.k, 1, null, []), this.data = s, this.k = this.prop.k, this.c = Array.apply(null, {
                            length: 4 * s.p
                        });
                        var i = s.k.k[0].s ? s.k.k[0].s.length - 4 * s.p : s.k.k.length - 4 * s.p;
                        this.o = Array.apply(null, {
                            length: i
                        }), this.cmdf = !1, this.omdf = !1, this.getValue = t, this.prop.k && r.push(this), this.getValue(!0)
                    }
                    return function(t, s, r) {
                        return new e(t, s, r)
                    }
                }(),
                f = function() {
                    function t(t) {
                        var e = 0,
                            s = this.dataProps.length;
                        if (this.elem.globalData.frameId !== this.frameId || t) {
                            for (this.mdf = !1, this.frameId = this.elem.globalData.frameId; s > e;) {
                                if (this.dataProps[e].p.mdf) {
                                    this.mdf = !0;
                                    break
                                }
                                e += 1
                            }
                            if (this.mdf || t)
                                for ("svg" === this.renderer && (this.dasharray = ""), e = 0; s > e; e += 1) "o" != this.dataProps[e].n ? "svg" === this.renderer ? this.dasharray += " " + this.dataProps[e].p.v : this.dasharray[e] = this.dataProps[e].p.v : this.dashoffset = this.dataProps[e].p.v
                        }
                    }
                    return function(e, s, r, i) {
                        this.elem = e, this.frameId = -1, this.dataProps = new Array(s.length), this.renderer = r, this.mdf = !1, this.k = !1, this.dasharray = "svg" === this.renderer ? "" : new Array(s.length - 1), this.dashoffset = 0;
                        var a, n, o = s.length;
                        for (a = 0; o > a; a += 1) n = PropertyFactory.getProp(e, s[a].v, 0, 0, i), this.k = n.k ? !0 : this.k, this.dataProps[a] = {
                            n: s[a].n,
                            p: n
                        };
                        this.getValue = t, this.k ? i.push(this) : this.getValue(!0)
                    }
                }(),
                d = function() {
                    function t() {
                        if (this.dynamicProperties.length) {
                            var t, e = this.dynamicProperties.length;
                            for (t = 0; e > t; t += 1) this.dynamicProperties[t].getValue(), this.dynamicProperties[t].mdf && (this.mdf = !0)
                        }
                        var s = this.data.totalChars,
                            r = 2 === this.data.r ? 1 : 100 / s,
                            i = this.o.v / r,
                            a = this.s.v / r + i,
                            n = this.e.v / r + i;
                        if (a > n) {
                            var o = a;
                            a = n, n = o
                        }
                        this.finalS = a, this.finalE = n
                    }

                    function e(t) {
                        var e = BezierFactory.getBezierEasing(this.ne.v / 100, 0, 1 - this.xe.v / 100, 1).get,
                            a = 0,
                            n = this.finalS,
                            o = this.finalE,
                            h = this.data.sh;
                        if (2 == h) a = o === n ? t >= o ? 1 : 0 : s(0, r(.5 / (o - n) + (t - n) / (o - n), 1)), a = e(a);
                        else if (3 == h) a = o === n ? t >= o ? 0 : 1 : 1 - s(0, r(.5 / (o - n) + (t - n) / (o - n), 1)), a = e(a);
                        else if (4 == h) o === n ? a = t >= o ? 0 : 1 : (a = s(0, r(.5 / (o - n) + (t - n) / (o - n), 1)), .5 > a ? a *= 2 : a = 1 - 2 * (a - .5)), a = e(a);
                        else if (5 == h) {
                            if (o === n) a = t >= o ? 0 : 1;
                            else {
                                var l = o - n;
                                t = r(s(0, t + .5 - n), o - n);
                                var p = -l / 2 + t,
                                    m = l / 2;
                                a = Math.sqrt(1 - p * p / (m * m))
                            }
                            a = e(a)
                        } else 6 == h ? (o === n ? a = t >= o ? 0 : 1 : (t = r(s(0, t + .5 - n), o - n), a = (1 + Math.cos(Math.PI + 2 * Math.PI * t / (o - n))) / 2), a = e(a)) : (t >= i(n) && (a = 0 > t - n ? 1 - (n - t) : s(0, r(o - t, 1))), a = e(a));
                        return a * this.a.v
                    }
                    var s = Math.max,
                        r = Math.min,
                        i = Math.floor;
                    return this.mdf = !1,
                        function(s, r, i) {
                            this.mdf = !1, this.k = !1, this.data = r, this.dynamicProperties = [], this.getValue = t, this.getMult = e, this.comp = s.comp, this.finalS = 0, this.finalE = 0, this.s = PropertyFactory.getProp(s, r.s || {
                                k: 0
                            }, 0, 0, this.dynamicProperties), this.e = "e" in r ? PropertyFactory.getProp(s, r.e, 0, 0, this.dynamicProperties) : {
                                v: 2 === r.r ? r.totalChars : 100
                            }, this.o = PropertyFactory.getProp(s, r.o || {
                                k: 0
                            }, 0, 0, this.dynamicProperties), this.xe = PropertyFactory.getProp(s, r.xe || {
                                k: 0
                            }, 0, 0, this.dynamicProperties), this.ne = PropertyFactory.getProp(s, r.ne || {
                                k: 0
                            }, 0, 0, this.dynamicProperties), this.a = PropertyFactory.getProp(s, r.a, 0, .01, this.dynamicProperties), this.dynamicProperties.length ? i.push(this) : this.getValue()
                        }
                }(),
                c = {};
            return c.getProp = n, c.getDashProp = o, c.getTextSelectorProp = h, c.getGradientProp = m, c
        }(),
        ShapePropertyFactory = function() {
            function t() {
                if (this.elem.globalData.frameId !== this.frameId) {
                    this.mdf = !1;
                    var t = this.comp.renderedFrame - this.offsetTime;
                    if (this.lastFrame !== n && (this.lastFrame < this.keyframes[0].t - this.offsetTime && t < this.keyframes[0].t - this.offsetTime || this.lastFrame > this.keyframes[this.keyframes.length - 1].t - this.offsetTime && t > this.keyframes[this.keyframes.length - 1].t - this.offsetTime));
                    else {
                        var e, s, r;
                        if (t < this.keyframes[0].t - this.offsetTime) e = this.keyframes[0].s[0], r = !0;
                        else if (t >= this.keyframes[this.keyframes.length - 1].t - this.offsetTime) e = 1 === this.keyframes[this.keyframes.length - 2].h ? this.keyframes[this.keyframes.length - 1].s[0] : this.keyframes[this.keyframes.length - 2].e[0], r = !0;
                        else {
                            for (var i, a, o, h, l, p, m = 0, f = this.keyframes.length - 1, d = !0; d && (i = this.keyframes[m], a = this.keyframes[m + 1], !(a.t - this.offsetTime > t));) f - 1 > m ? m += 1 : d = !1;
                            r = 1 === i.h, r && m === f && (i = a);
                            var c;
                            if (!r) {
                                var u;
                                i.__fnct ? u = i.__fnct : (u = BezierFactory.getBezierEasing(i.o.x, i.o.y, i.i.x, i.i.y).get, i.__fnct = u), c = t >= a.t - this.offsetTime ? 1 : t < i.t - this.offsetTime ? 0 : u((t - (i.t - this.offsetTime)) / (a.t - this.offsetTime - (i.t - this.offsetTime))), s = i.e[0]
                            }
                            e = i.s[0]
                        }
                        h = this.v.i.length, p = e.i[0].length;
                        var y, g = !1;
                        for (o = 0; h > o; o += 1)
                            for (l = 0; p > l; l += 1) r ? (y = e.i[o][l], this.v.i[o][l] !== y && (this.v.i[o][l] = y, this.pv.i[o][l] = y, g = !0), y = e.o[o][l], this.v.o[o][l] !== y && (this.v.o[o][l] = y, this.pv.o[o][l] = y, g = !0), y = e.v[o][l], this.v.v[o][l] !== y && (this.v.v[o][l] = y, this.pv.v[o][l] = y, g = !0)) : (y = e.i[o][l] + (s.i[o][l] - e.i[o][l]) * c, this.v.i[o][l] !== y && (this.v.i[o][l] = y, this.pv.i[o][l] = y, g = !0), y = e.o[o][l] + (s.o[o][l] - e.o[o][l]) * c, this.v.o[o][l] !== y && (this.v.o[o][l] = y, this.pv.o[o][l] = y, g = !0), y = e.v[o][l] + (s.v[o][l] - e.v[o][l]) * c, this.v.v[o][l] !== y && (this.v.v[o][l] = y, this.pv.v[o][l] = y, g = !0));
                        this.mdf = g, this.paths.length = 0, this.v.c = e.c, this.paths[0] = this.v
                    }
                    this.lastFrame = t, this.frameId = this.elem.globalData.frameId
                }
            }

            function e() {
                return this.v
            }

            function s() {
                this.resetPaths.length = 1, this.resetPaths[0] = this.v, this.paths = this.resetPaths, this.k || (this.mdf = !1)
            }

            function r(t, r, i) {
                this.resetPaths = [], this.comp = t.comp, this.k = !1, this.mdf = !1, this.numNodes = 3 === i ? r.pt.k.v.length : r.ks.k.v.length, this.v = 3 === i ? r.pt.k : r.ks.k, this.getValue = e, this.pv = this.v, this.paths = [this.v], this.reset = s
            }

            function i(e, r, i) {
                this.resetPaths = [], this.comp = e.comp, this.elem = e, this.offsetTime = e.data.st, this.getValue = t, this.keyframes = 3 === i ? r.pt.k : r.ks.k, this.k = !0;
                var a, o = this.keyframes[0].s[0].i.length,
                    h = this.keyframes[0].s[0].i[0].length;
                for (this.numNodes = o, this.v = {
                        i: Array.apply(null, {
                            length: o
                        }),
                        o: Array.apply(null, {
                            length: o
                        }),
                        v: Array.apply(null, {
                            length: o
                        }),
                        c: this.keyframes[0].s[0].c
                    }, this.pv = {
                        i: Array.apply(null, {
                            length: o
                        }),
                        o: Array.apply(null, {
                            length: o
                        }),
                        v: Array.apply(null, {
                            length: o
                        }),
                        c: this.keyframes[0].s[0].c
                    }, a = 0; o > a; a += 1) this.v.i[a] = Array.apply(null, {
                    length: h
                }), this.v.o[a] = Array.apply(null, {
                    length: h
                }), this.v.v[a] = Array.apply(null, {
                    length: h
                }), this.pv.i[a] = Array.apply(null, {
                    length: h
                }), this.pv.o[a] = Array.apply(null, {
                    length: h
                }), this.pv.v[a] = Array.apply(null, {
                    length: h
                });
                this.paths = [], this.lastFrame = n, this.reset = s
            }

            function a(t, e, s, a) {
                var n;
                if (3 === s || 4 === s) {
                    var p = 3 === s ? e.pt.k : e.ks.k;
                    n = p.length ? new i(t, e, s) : new r(t, e, s)
                } else 5 === s ? n = new l(t, e) : 6 === s ? n = new o(t, e) : 7 === s && (n = new h(t, e));
                return n.k && a.push(n), n
            }
            var n = -999999,
                o = function() {
                    function t() {
                        var t = this.p.v[0],
                            e = this.p.v[1],
                            s = this.s.v[0] / 2,
                            i = this.s.v[1] / 2;
                        2 !== this.d && 3 !== this.d ? (this.v.v[0] = [t, e - i], this.v.i[0] = [t - s * r, e - i], this.v.o[0] = [t + s * r, e - i], this.v.v[1] = [t + s, e], this.v.i[1] = [t + s, e - i * r], this.v.o[1] = [t + s, e + i * r], this.v.v[2] = [t, e + i], this.v.i[2] = [t + s * r, e + i], this.v.o[2] = [t - s * r, e + i], this.v.v[3] = [t - s, e], this.v.i[3] = [t - s, e + i * r], this.v.o[3] = [t - s, e - i * r]) : (this.v.v[0] = [t, e - i], this.v.o[0] = [t - s * r, e - i], this.v.i[0] = [t + s * r, e - i], this.v.v[1] = [t - s, e], this.v.o[1] = [t - s, e + i * r], this.v.i[1] = [t - s, e - i * r], this.v.v[2] = [t, e + i], this.v.o[2] = [t + s * r, e + i], this.v.i[2] = [t - s * r, e + i], this.v.v[3] = [t + s, e], this.v.o[3] = [t + s, e - i * r], this.v.i[3] = [t + s, e + i * r]), this.paths.length = 0, this.paths[0] = this.v
                    }

                    function e(t) {
                        var e, s = this.dynamicProperties.length;
                        if (this.elem.globalData.frameId !== this.frameId) {
                            for (this.mdf = !1, this.frameId = this.elem.globalData.frameId, e = 0; s > e; e += 1) this.dynamicProperties[e].getValue(t), this.dynamicProperties[e].mdf && (this.mdf = !0);
                            this.mdf && (this.convertEllToPath(), this.paths.length = 0, this.paths[0] = this.v)
                        }
                    }
                    var r = roundCorner;
                    return function(r, i) {
                        this.v = {
                            v: Array.apply(null, {
                                length: 4
                            }),
                            i: Array.apply(null, {
                                length: 4
                            }),
                            o: Array.apply(null, {
                                length: 4
                            }),
                            c: !0
                        }, this.numNodes = 4, this.d = i.d, this.dynamicProperties = [], this.resetPaths = [], this.paths = [], this.elem = r, this.comp = r.comp, this.frameId = -1, this.mdf = !1, this.getValue = e, this.convertEllToPath = t, this.reset = s, this.p = PropertyFactory.getProp(r, i.p, 1, 0, this.dynamicProperties), this.s = PropertyFactory.getProp(r, i.s, 1, 0, this.dynamicProperties), this.dynamicProperties.length ? this.k = !0 : this.convertEllToPath()
                    }
                }(),
                h = function() {
                    function t() {
                        var t = Math.floor(this.pt.v),
                            e = 2 * Math.PI / t;
                        this.v.v.length = t, this.v.i.length = t, this.v.o.length = t;
                        var s, r = this.or.v,
                            i = this.os.v,
                            a = 2 * Math.PI * r / (4 * t),
                            n = -Math.PI / 2,
                            o = 3 === this.data.d ? -1 : 1;
                        for (n += this.r.v, s = 0; t > s; s += 1) {
                            var h = r * Math.cos(n),
                                l = r * Math.sin(n),
                                p = 0 === h && 0 === l ? 0 : l / Math.sqrt(h * h + l * l),
                                m = 0 === h && 0 === l ? 0 : -h / Math.sqrt(h * h + l * l);
                            h += +this.p.v[0], l += +this.p.v[1], this.v.v[s] = [h, l], this.v.i[s] = [h + p * a * i * o, l + m * a * i * o], this.v.o[s] = [h - p * a * i * o, l - m * a * i * o], n += e * o
                        }
                        this.numNodes = t, this.paths.length = 0, this.paths[0] = this.v
                    }

                    function e() {
                        var t = 2 * Math.floor(this.pt.v),
                            e = 2 * Math.PI / t;
                        this.v.v.length = t, this.v.i.length = t, this.v.o.length = t;
                        var s, r, i, a, n = !0,
                            o = this.or.v,
                            h = this.ir.v,
                            l = this.os.v,
                            p = this.is.v,
                            m = 2 * Math.PI * o / (2 * t),
                            f = 2 * Math.PI * h / (2 * t),
                            d = -Math.PI / 2;
                        d += this.r.v;
                        var c = 3 === this.data.d ? -1 : 1;
                        for (s = 0; t > s; s += 1) {
                            r = n ? o : h, i = n ? l : p, a = n ? m : f;
                            var u = r * Math.cos(d),
                                y = r * Math.sin(d),
                                g = 0 === u && 0 === y ? 0 : y / Math.sqrt(u * u + y * y),
                                v = 0 === u && 0 === y ? 0 : -u / Math.sqrt(u * u + y * y);
                            u += +this.p.v[0], y += +this.p.v[1], this.v.v[s] = [u, y], this.v.i[s] = [u + g * a * i * c, y + v * a * i * c], this.v.o[s] = [u - g * a * i * c, y - v * a * i * c], n = !n, d += e * c
                        }
                        this.numNodes = t, this.paths.length = 0, this.paths[0] = this.v
                    }

                    function r() {
                        if (this.elem.globalData.frameId !== this.frameId) {
                            this.mdf = !1, this.frameId = this.elem.globalData.frameId;
                            var t, e = this.dynamicProperties.length;
                            for (t = 0; e > t; t += 1) this.dynamicProperties[t].getValue(), this.dynamicProperties[t].mdf && (this.mdf = !0);
                            this.mdf && this.convertToPath()
                        }
                    }
                    return function(i, a) {
                        this.v = {
                            v: [],
                            i: [],
                            o: [],
                            c: !0
                        }, this.resetPaths = [], this.elem = i, this.comp = i.comp, this.data = a, this.frameId = -1, this.d = a.d, this.dynamicProperties = [], this.mdf = !1, this.getValue = r, this.reset = s, 1 === a.sy ? (this.ir = PropertyFactory.getProp(i, a.ir, 0, 0, this.dynamicProperties), this.is = PropertyFactory.getProp(i, a.is, 0, .01, this.dynamicProperties), this.convertToPath = e) : this.convertToPath = t, this.pt = PropertyFactory.getProp(i, a.pt, 0, 0, this.dynamicProperties), this.p = PropertyFactory.getProp(i, a.p, 1, 0, this.dynamicProperties), this.r = PropertyFactory.getProp(i, a.r, 0, degToRads, this.dynamicProperties), this.or = PropertyFactory.getProp(i, a.or, 0, 0, this.dynamicProperties), this.os = PropertyFactory.getProp(i, a.os, 0, .01, this.dynamicProperties), this.paths = [], this.dynamicProperties.length ? this.k = !0 : this.convertToPath()
                    }
                }(),
                l = function() {
                    function t(t) {
                        if (this.elem.globalData.frameId !== this.frameId) {
                            this.mdf = !1, this.frameId = this.elem.globalData.frameId;
                            var e, s = this.dynamicProperties.length;
                            for (e = 0; s > e; e += 1) this.dynamicProperties[e].getValue(t), this.dynamicProperties[e].mdf && (this.mdf = !0);
                            this.mdf && this.convertRectToPath()
                        }
                    }

                    function e() {
                        var t = this.p.v[0],
                            e = this.p.v[1],
                            s = this.s.v[0] / 2,
                            r = this.s.v[1] / 2,
                            i = bm_min(s, r, this.r.v),
                            a = i * (1 - roundCorner);
                        0 === i ? (this.v.v.length = 4, this.v.i.length = 4, this.v.o.length = 4) : (this.v.v.length = 8, this.v.i.length = 8, this.v.o.length = 8), 2 === this.d || 1 === this.d ? (this.v.v[0] = [t + s, e - r + i], this.v.o[0] = this.v.v[0], this.v.i[0] = [t + s, e - r + a], this.v.v[1] = [t + s, e + r - i], this.v.o[1] = [t + s, e + r - a], this.v.i[1] = this.v.v[1], 0 !== i ? (this.v.v[2] = [t + s - i, e + r], this.v.o[2] = this.v.v[2], this.v.i[2] = [t + s - a, e + r], this.v.v[3] = [t - s + i, e + r], this.v.o[3] = [t - s + a, e + r], this.v.i[3] = this.v.v[3], this.v.v[4] = [t - s, e + r - i], this.v.o[4] = this.v.v[4], this.v.i[4] = [t - s, e + r - a], this.v.v[5] = [t - s, e - r + i], this.v.o[5] = [t - s, e - r + a], this.v.i[5] = this.v.v[5], this.v.v[6] = [t - s + i, e - r], this.v.o[6] = this.v.v[6], this.v.i[6] = [t - s + a, e - r], this.v.v[7] = [t + s - i, e - r], this.v.o[7] = [t + s - a, e - r], this.v.i[7] = this.v.v[7]) : (this.v.v[2] = [t - s + i, e + r], this.v.o[2] = [t - s + a, e + r], this.v.i[2] = this.v.v[2], this.v.v[3] = [t - s, e - r + i], this.v.o[3] = [t - s, e - r + a], this.v.i[3] = this.v.v[3])) : (this.v.v[0] = [t + s, e - r + i], this.v.o[0] = [t + s, e - r + a], this.v.i[0] = this.v.v[0], 0 !== i ? (this.v.v[1] = [t + s - i, e - r], this.v.o[1] = this.v.v[1], this.v.i[1] = [t + s - a, e - r], this.v.v[2] = [t - s + i, e - r], this.v.o[2] = [t - s + a, e - r], this.v.i[2] = this.v.v[2], this.v.v[3] = [t - s, e - r + i], this.v.o[3] = this.v.v[3], this.v.i[3] = [t - s, e - r + a], this.v.v[4] = [t - s, e + r - i], this.v.o[4] = [t - s, e + r - a], this.v.i[4] = this.v.v[4], this.v.v[5] = [t - s + i, e + r], this.v.o[5] = this.v.v[5], this.v.i[5] = [t - s + a, e + r], this.v.v[6] = [t + s - i, e + r], this.v.o[6] = [t + s - a, e + r], this.v.i[6] = this.v.v[6], this.v.v[7] = [t + s, e + r - i], this.v.o[7] = this.v.v[7], this.v.i[7] = [t + s, e + r - a]) : (this.v.v[1] = [t - s + i, e - r], this.v.o[1] = [t - s + a, e - r], this.v.i[1] = this.v.v[1], this.v.v[2] = [t - s, e + r - i], this.v.o[2] = [t - s, e + r - a], this.v.i[2] = this.v.v[2], this.v.v[3] = [t + s - i, e + r], this.v.o[3] = [t + s - a, e + r], this.v.i[3] = this.v.v[3])), this.paths.length = 0, this.paths[0] = this.v
                    }
                    return function(r, i) {
                        this.v = {
                                v: Array.apply(null, {
                                    length: 8
                                }),
                                i: Array.apply(null, {
                                    length: 8
                                }),
                                o: Array.apply(null, {
                                    length: 8
                                }),
                                c: !0
                            }, this.resetPaths = [], this.paths = [], this.numNodes = 8, this.elem = r, this.comp = r.comp, this.frameId = -1, this.d = i.d, this.dynamicProperties = [], this.mdf = !1, this.getValue = t, this.convertRectToPath = e,
                            this.reset = s, this.p = PropertyFactory.getProp(r, i.p, 1, 0, this.dynamicProperties), this.s = PropertyFactory.getProp(r, i.s, 1, 0, this.dynamicProperties), this.r = PropertyFactory.getProp(r, i.r, 0, 0, this.dynamicProperties), this.dynamicProperties.length ? this.k = !0 : this.convertRectToPath()
                    }
                }(),
                p = {};
            return p.getShapeProp = a, p
        }(),
        ShapeModifiers = function() {
            function t(t, e) {
                r[t] || (r[t] = e)
            }

            function e(t, e, s, i) {
                return new r[t](e, s, i)
            }
            var s = {},
                r = {};
            return s.registerModifier = t, s.getModifier = e, s
        }();
    ShapeModifier.prototype.initModifierProperties = function() {}, ShapeModifier.prototype.addShapeToModifier = function() {}, ShapeModifier.prototype.addShape = function(t) {
        this.closed || (this.shapes.push({
            shape: t,
            last: []
        }), this.addShapeToModifier(t))
    }, ShapeModifier.prototype.init = function(t, e, s) {
        this.elem = t, this.frameId = -1, this.shapes = [], this.dynamicProperties = [], this.mdf = !1, this.closed = !1, this.k = !1, this.isTrimming = !1, this.comp = t.comp, this.initModifierProperties(t, e), this.dynamicProperties.length ? (this.k = !0, s.push(this)) : this.getValue(!0)
    }, extendPrototype(ShapeModifier, TrimModifier), TrimModifier.prototype.processKeys = function(t) {
        if (this.elem.globalData.frameId !== this.frameId || t) {
            this.mdf = t ? !0 : !1, this.frameId = this.elem.globalData.frameId;
            var e, s = this.dynamicProperties.length;
            for (e = 0; s > e; e += 1) this.dynamicProperties[e].getValue(), this.dynamicProperties[e].mdf && (this.mdf = !0);
            if (this.mdf || t) {
                var r = this.o.v % 360 / 360;
                0 > r && (r += 1);
                var i = this.s.v + r,
                    a = this.e.v + r;
                if (i > a) {
                    var n = i;
                    i = a, a = n
                }
                this.sValue = i, this.eValue = a, this.oValue = r
            }
        }
    }, TrimModifier.prototype.initModifierProperties = function(t, e) {
        this.sValue = 0, this.eValue = 0, this.oValue = 0, this.getValue = this.processKeys, this.s = PropertyFactory.getProp(t, e.s, 0, .01, this.dynamicProperties), this.e = PropertyFactory.getProp(t, e.e, 0, .01, this.dynamicProperties), this.o = PropertyFactory.getProp(t, e.o, 0, 0, this.dynamicProperties), this.dynamicProperties.length || this.getValue(!0)
    }, TrimModifier.prototype.getSegmentsLength = function(t) {
        var e, s = t.c,
            r = t.v,
            i = t.o,
            a = t.i,
            n = r.length,
            o = [],
            h = 0;
        for (e = 0; n - 1 > e; e += 1) o[e] = bez.getBezierLength(r[e], r[e + 1], i[e], a[e + 1]), h += o[e].addedLength;
        return s && (o[e] = bez.getBezierLength(r[e], r[0], i[e], a[0]), h += o[e].addedLength), {
            lengths: o,
            totalLength: h
        }
    }, TrimModifier.prototype.processShapes = function(t) {
        var e, s, r, i, a, n, o, h = this.shapes.length,
            l = this.sValue,
            p = this.eValue,
            m = 0;
        if (p === l)
            for (s = 0; h > s; s += 1) this.shapes[s].shape.paths = [], this.shapes[s].shape.mdf = !0;
        else if (1 === p && 0 === l || 0 === p && 1 === l)
            for (s = 0; h > s; s += 1) f = this.shapes[s], f.shape.paths !== f.last && (f.shape.mdf = !0, f.last = f.shape.paths);
        else {
            var f, d, c = [];
            for (s = 0; h > s; s += 1) {
                if (f = this.shapes[s], f.shape.mdf || this.mdf || t) {
                    if (e = f.shape.paths, i = e.length, o = 0, !f.shape.mdf && f.pathsData) o = f.totalShapeLength;
                    else {
                        for (a = [], r = 0; i > r; r += 1) n = this.getSegmentsLength(e[r]), a.push(n), o += n.totalLength;
                        f.totalShapeLength = o, f.pathsData = a
                    }
                    m += o
                } else f.shape.paths = f.last;
                f.shape.mdf = !0
            }
            for (s = 0; h > s; s += 1)
                if (d = [], f = this.shapes[s], f.shape.mdf) {
                    c.length = 0, 1 >= p ? c.push({
                        s: f.totalShapeLength * l,
                        e: f.totalShapeLength * p
                    }) : l >= 1 ? c.push({
                        s: f.totalShapeLength * (l - 1),
                        e: f.totalShapeLength * (p - 1)
                    }) : (c.push({
                        s: f.totalShapeLength * l,
                        e: f.totalShapeLength
                    }), c.push({
                        s: 0,
                        e: f.totalShapeLength * (p - 1)
                    }));
                    var u, y = this.addShapes(f, c[0]);
                    d.push(y), c.length > 1 && (f.shape.v.c ? this.addShapes(f, c[1], y) : (y.i[0] = [y.v[0][0], y.v[0][1]], u = y.v.length - 1, y.o[u] = [y.v[u][0], y.v[u][1]], y = this.addShapes(f, c[1]), d.push(y))), y.i[0] = [y.v[0][0], y.v[0][1]], u = y.v.length - 1, y.o[u] = [y.v[u][0], y.v[u][1]], f.last = d, f.shape.paths = d
                }
        }
        this.dynamicProperties.length || (this.mdf = !1)
    }, TrimModifier.prototype.addSegment = function(t, e, s, r, i, a) {
        i.o[a] = e, i.i[a + 1] = s, i.v[a + 1] = r, i.v[a] = t
    }, TrimModifier.prototype.addShapes = function(t, e, s) {
        var r, i, a, n, o, h, l, p = t.pathsData,
            m = t.shape.paths,
            f = m.length,
            d = 0;
        for (s ? o = s.v.length - 1 : (s = {
                c: !1,
                v: [],
                i: [],
                o: []
            }, o = 0), r = 0; f > r; r += 1) {
            for (h = p[r].lengths, a = m[r].c ? h.length : h.length + 1, i = 1; a > i; i += 1)
                if (n = h[i - 1], d + n.addedLength < e.s) d += n.addedLength;
                else {
                    if (d > e.e) break;
                    e.s <= d && e.e >= d + n.addedLength ? this.addSegment(m[r].v[i - 1], m[r].o[i - 1], m[r].i[i], m[r].v[i], s, o) : (l = bez.getNewSegment(m[r].v[i - 1], m[r].v[i], m[r].o[i - 1], m[r].i[i], (e.s - d) / n.addedLength, (e.e - d) / n.addedLength, h[i - 1]), this.addSegment(l.pt1, l.pt3, l.pt4, l.pt2, s, o)), d += n.addedLength, o += 1
                }
            if (m[r].c && d <= e.e) {
                var c = h[i - 1].addedLength;
                e.s <= d && e.e >= d + c ? this.addSegment(m[r].v[i - 1], m[r].o[i - 1], m[r].i[0], m[r].v[0], s, o) : (l = bez.getNewSegment(m[r].v[i - 1], m[r].v[0], m[r].o[i - 1], m[r].i[0], (e.s - d) / c, (e.e - d) / c, h[i - 1]), this.addSegment(l.pt1, l.pt3, l.pt4, l.pt2, s, o))
            }
        }
        return s
    }, ShapeModifiers.registerModifier("tm", TrimModifier), extendPrototype(ShapeModifier, MouseModifier), MouseModifier.prototype.processKeys = function(t) {
        (this.elem.globalData.frameId !== this.frameId || t) && (this.mdf = !0)
    }, MouseModifier.prototype.addShapeToModifier = function() {
        this.positions.push([])
    }, MouseModifier.prototype.processPath = function(t, e, s) {
        var r, i, a, n, o = t.v.length,
            h = [],
            l = [],
            p = [];
        for (r = 0; o > r; r += 1) {
            s.v[r] || (s.v[r] = [t.v[r][0], t.v[r][1]], s.o[r] = [t.o[r][0], t.o[r][1]], s.i[r] = [t.i[r][0], t.i[r][1]], s.distV[r] = 0, s.distO[r] = 0, s.distI[r] = 0), i = Math.atan2(t.v[r][1] - e[1], t.v[r][0] - e[0]), a = e[0] - s.v[r][0], n = e[1] - s.v[r][1];
            var m = Math.sqrt(a * a + n * n);
            s.distV[r] += (m - s.distV[r]) * this.data.dc, s.v[r][0] = Math.cos(i) * Math.max(0, this.data.maxDist - s.distV[r]) / 2 + t.v[r][0], s.v[r][1] = Math.sin(i) * Math.max(0, this.data.maxDist - s.distV[r]) / 2 + t.v[r][1], i = Math.atan2(t.o[r][1] - e[1], t.o[r][0] - e[0]), a = e[0] - s.o[r][0], n = e[1] - s.o[r][1];
            var m = Math.sqrt(a * a + n * n);
            s.distO[r] += (m - s.distO[r]) * this.data.dc, s.o[r][0] = Math.cos(i) * Math.max(0, this.data.maxDist - s.distO[r]) / 2 + t.o[r][0], s.o[r][1] = Math.sin(i) * Math.max(0, this.data.maxDist - s.distO[r]) / 2 + t.o[r][1], i = Math.atan2(t.i[r][1] - e[1], t.i[r][0] - e[0]), a = e[0] - s.i[r][0], n = e[1] - s.i[r][1];
            var m = Math.sqrt(a * a + n * n);
            s.distI[r] += (m - s.distI[r]) * this.data.dc, s.i[r][0] = Math.cos(i) * Math.max(0, this.data.maxDist - s.distI[r]) / 2 + t.i[r][0], s.i[r][1] = Math.sin(i) * Math.max(0, this.data.maxDist - s.distI[r]) / 2 + t.i[r][1], h.push(s.v[r]), l.push(s.o[r]), p.push(s.i[r])
        }
        return {
            v: h,
            o: l,
            i: p,
            c: t.c
        }
    }, MouseModifier.prototype.processShapes = function() {
        var t, e, s, r, i = this.elem.globalData.mouseX,
            a = this.elem.globalData.mouseY,
            n = this.shapes.length;
        if (i) {
            var o, h = this.elem.globalToLocal([i, a, 0]),
                l = [];
            for (e = 0; n > e; e += 1)
                if (o = this.shapes[e], o.shape.mdf || this.mdf) {
                    for (o.shape.mdf = !0, t = o.shape.paths, r = t.length, s = 0; r > s; s += 1) this.positions[e][s] || (this.positions[e][s] = {
                        v: [],
                        o: [],
                        i: [],
                        distV: [],
                        distO: [],
                        distI: []
                    }), l.push(this.processPath(t[s], h, this.positions[e][s]));
                    o.shape.paths = l, o.last = l
                } else o.shape.paths = o.last
        }
    }, MouseModifier.prototype.initModifierProperties = function(t, e) {
        this.getValue = this.processKeys, this.data = e, this.positions = []
    }, ShapeModifiers.registerModifier("ms", MouseModifier), extendPrototype(ShapeModifier, RoundCornersModifier), RoundCornersModifier.prototype.processKeys = function(t) {
        if (this.elem.globalData.frameId !== this.frameId || t) {
            this.mdf = t ? !0 : !1, this.frameId = this.elem.globalData.frameId;
            var e, s = this.dynamicProperties.length;
            for (e = 0; s > e; e += 1) this.dynamicProperties[e].getValue(), this.dynamicProperties[e].mdf && (this.mdf = !0)
        }
    }, RoundCornersModifier.prototype.initModifierProperties = function(t, e) {
        this.getValue = this.processKeys, this.rd = PropertyFactory.getProp(t, e.r, 0, null, this.dynamicProperties), this.dynamicProperties.length || this.getValue(!0)
    }, RoundCornersModifier.prototype.processPath = function(t, e) {
        var s, r, i, a, n, o, h, l, p, m, f = t.v.length,
            d = [],
            c = [],
            u = [];
        for (s = 0; f > s; s += 1) r = t.v[s], a = t.o[s], i = t.i[s], r[0] === a[0] && r[1] === a[1] && r[0] === i[0] && r[1] === i[1] ? 0 !== s && s !== f - 1 || t.c ? (n = 0 === s ? t.v[f - 1] : t.v[s - 1], p = Math.sqrt(Math.pow(r[0] - n[0], 2) + Math.pow(r[1] - n[1], 2)), m = p ? Math.min(p / 2, e) / p : 0, o = [r[0] + (n[0] - r[0]) * m, r[1] - (r[1] - n[1]) * m], l = o, h = [o[0] - (o[0] - r[0]) * roundCorner, o[1] - (o[1] - r[1]) * roundCorner], d.push(o), c.push(h), u.push(l), n = s === f - 1 ? t.v[0] : t.v[s + 1], p = Math.sqrt(Math.pow(r[0] - n[0], 2) + Math.pow(r[1] - n[1], 2)), m = p ? Math.min(p / 2, e) / p : 0, o = [r[0] + (n[0] - r[0]) * m, r[1] + (n[1] - r[1]) * m], l = [o[0] - (o[0] - r[0]) * roundCorner, o[1] - (o[1] - r[1]) * roundCorner], h = o, d.push(o), c.push(h), u.push(l)) : (d.push(r), c.push(a), u.push(i)) : (d.push(t.v[s]), c.push(t.o[s]), u.push(t.i[s]));
        return {
            v: d,
            o: c,
            i: u,
            c: t.c
        }
    }, RoundCornersModifier.prototype.processShapes = function() {
        var t, e, s, r, i = this.shapes.length,
            a = this.rd.v;
        if (0 !== a) {
            var n, o;
            for (e = 0; i > e; e += 1)
                if (o = [], n = this.shapes[e], n.shape.mdf || this.mdf) {
                    for (n.shape.mdf = !0, t = n.shape.paths, r = t.length, s = 0; r > s; s += 1) o.push(this.processPath(t[s], a));
                    n.shape.paths = o, n.last = o
                } else n.shape.paths = n.last
        }
        this.dynamicProperties.length || (this.mdf = !1)
    }, ShapeModifiers.registerModifier("rd", RoundCornersModifier);
    var ImagePreloader = function() {
            function t() {
                this.loadedAssets += 1, this.loadedAssets === this.totalImages
            }

            function e(t) {
                var e = "";
                if (this.assetsPath) {
                    var s = t.p; - 1 !== s.indexOf("images/") && (s = s.split("/")[1]), e = this.assetsPath + s
                } else e = this.path, e += t.u ? t.u : "", e += t.p;
                return e
            }

            function s(e) {
                var s = document.createElement("img");
                s.addEventListener("load", t.bind(this), !1), s.addEventListener("error", t.bind(this), !1), s.src = e
            }

            function r(t) {
                this.totalAssets = t.length;
                var r;
                for (r = 0; r < this.totalAssets; r += 1) t[r].layers || (s.bind(this)(e.bind(this)(t[r])), this.totalImages += 1)
            }

            function i(t) {
                this.path = t || ""
            }

            function a(t) {
                this.assetsPath = t || ""
            }
            return function() {
                this.loadAssets = r, this.setAssetsPath = a, this.setPath = i, this.assetsPath = "", this.path = "", this.totalAssets = 0, this.totalImages = 0, this.loadedAssets = 0
            }
        }(),
        featureSupport = function() {
            var t = {
                maskType: !0
            };
            return (/MSIE 10/i.test(navigator.userAgent) || /MSIE 9/i.test(navigator.userAgent) || /rv:11.0/i.test(navigator.userAgent) || /Edge\/\d./i.test(navigator.userAgent)) && (t.maskType = !1), t
        }(),
        filtersFactory = function() {
            function t(t) {
                var e = document.createElementNS(svgNS, "filter");
                return e.setAttribute("id", t), e.setAttribute("filterUnits", "objectBoundingBox"), e.setAttribute("x", "0%"), e.setAttribute("y", "0%"), e.setAttribute("width", "100%"), e.setAttribute("height", "100%"), e
            }

            function e() {
                var t = document.createElementNS(svgNS, "feColorMatrix");
                return t.setAttribute("type", "matrix"), t.setAttribute("color-interpolation-filters", "sRGB"), t.setAttribute("values", "0 0 0 1 0  0 0 0 1 0  0 0 0 1 0  0 0 0 0 1"), t
            }
            var s = {};
            return s.createFilter = t, s.createAlphaToLuminanceFilter = e, s
        }();
    BaseRenderer.prototype.checkLayers = function(t) {
        var e, s, r = this.layers.length;
        for (this.completeLayers = !0, e = r - 1; e >= 0; e--) this.elements[e] || (s = this.layers[e], s.ip - s.st <= t - this.layers[e].st && s.op - s.st > t - this.layers[e].st && this.buildItem(e)), this.completeLayers = this.elements[e] ? this.completeLayers : !1;
        this.checkPendingElements()
    }, BaseRenderer.prototype.createItem = function(t) {
        switch (t.ty) {
            case 2:
                return this.createImage(t);
            case 0:
                return this.createComp(t);
            case 1:
                return this.createSolid(t);
            case 4:
                return this.createShape(t);
            case 5:
                return this.createText(t);
            case 99:
                return null
        }
        return this.createBase(t)
    }, BaseRenderer.prototype.buildAllItems = function() {
        var t, e = this.layers.length;
        for (t = 0; e > t; t += 1) this.buildItem(t);
        this.checkPendingElements()
    }, BaseRenderer.prototype.includeLayers = function(t) {
        this.completeLayers = !1;
        var e, s, r = t.length,
            i = this.layers.length;
        for (e = 0; r > e; e += 1)
            for (s = 0; i > s;) {
                if (this.layers[s].id == t[e].id) {
                    this.layers[s] = t[e];
                    break
                }
                s += 1
            }
    }, BaseRenderer.prototype.setProjectInterface = function(t) {
        this.globalData.projectInterface = t
    }, BaseRenderer.prototype.initItems = function() {
        this.globalData.progressiveLoad || this.buildAllItems()
    }, BaseRenderer.prototype.buildElementParenting = function(t, e, s) {
        s = s || [];
        for (var r = this.elements, i = this.layers, a = 0, n = i.length; n > a;) i[a].ind == e && (r[a] && r[a] !== !0 ? void 0 !== i[a].parent ? (s.push(r[a]), this.buildElementParenting(t, i[a].parent, s)) : (s.push(r[a]), t.setHierarchy(s)) : (this.buildItem(a), this.addPendingElement(t))), a += 1
    }, BaseRenderer.prototype.addPendingElement = function(t) {
        this.pendingElements.push(t)
    }, extendPrototype(BaseRenderer, SVGRenderer), SVGRenderer.prototype.createBase = function(t) {
        return new SVGBaseElement(t, this.layerElement, this.globalData, this)
    }, SVGRenderer.prototype.createShape = function(t) {
        return new IShapeElement(t, this.layerElement, this.globalData, this)
    }, SVGRenderer.prototype.createText = function(t) {
        return new SVGTextElement(t, this.layerElement, this.globalData, this)
    }, SVGRenderer.prototype.createImage = function(t) {
        return new IImageElement(t, this.layerElement, this.globalData, this)
    }, SVGRenderer.prototype.createComp = function(t) {
        return new ICompElement(t, this.layerElement, this.globalData, this)
    }, SVGRenderer.prototype.createSolid = function(t) {
        return new ISolidElement(t, this.layerElement, this.globalData, this)
    }, SVGRenderer.prototype.configAnimation = function(t) {
        this.layerElement = document.createElementNS(svgNS, "svg"), this.layerElement.setAttribute("xmlns", "http://www.w3.org/2000/svg"), this.layerElement.setAttribute("width", t.w), this.layerElement.setAttribute("height", t.h), this.layerElement.setAttribute("viewBox", "0 0 " + t.w + " " + t.h), this.layerElement.setAttribute("preserveAspectRatio", this.renderConfig.preserveAspectRatio), this.layerElement.style.width = "100%", this.layerElement.style.height = "100%", this.animationItem.wrapper.appendChild(this.layerElement);
        var e = document.createElementNS(svgNS, "defs");
        this.globalData.defs = e, this.layerElement.appendChild(e), this.globalData.getAssetData = this.animationItem.getAssetData.bind(this.animationItem), this.globalData.getAssetsPath = this.animationItem.getAssetsPath.bind(this.animationItem), this.globalData.progressiveLoad = this.renderConfig.progressiveLoad, this.globalData.frameId = 0, this.globalData.compSize = {
            w: t.w,
            h: t.h
        }, this.globalData.frameRate = t.fr;
        var s = document.createElementNS(svgNS, "clipPath"),
            r = document.createElementNS(svgNS, "rect");
        r.setAttribute("width", t.w), r.setAttribute("height", t.h), r.setAttribute("x", 0), r.setAttribute("y", 0);
        var i = "animationMask_" + randomString(10);
        s.setAttribute("id", i), s.appendChild(r);
        var a = document.createElementNS(svgNS, "g");
        a.setAttribute("clip-path", "url(#" + i + ")"), this.layerElement.appendChild(a), e.appendChild(s), this.layerElement = a, this.layers = t.layers, this.globalData.fontManager = new FontManager, this.globalData.fontManager.addChars(t.chars), this.globalData.fontManager.addFonts(t.fonts, e), this.elements = Array.apply(null, {
            length: t.layers.length
        })
    }, SVGRenderer.prototype.destroy = function() {
        this.animationItem.wrapper.innerHTML = "", this.layerElement = null, this.globalData.defs = null;
        var t, e = this.layers ? this.layers.length : 0;
        for (t = 0; e > t; t++) this.elements[t] && this.elements[t].destroy();
        this.elements.length = 0, this.destroyed = !0, this.animationItem = null
    }, SVGRenderer.prototype.updateContainerSize = function() {}, SVGRenderer.prototype.buildItem = function(t) {
        var e = this.elements;
        if (!e[t] && 99 != this.layers[t].ty) {
            e[t] = !0;
            var s = this.createItem(this.layers[t]);
            e[t] = s, expressionsPlugin && (0 === this.layers[t].ty && this.globalData.projectInterface.registerComposition(s), s.initExpressions()), this.appendElementInPos(s, t), this.layers[t].tt && (this.elements[t - 1] && this.elements[t - 1] !== !0 ? s.setMatte(e[t - 1].layerId) : (this.buildItem(t - 1), this.addPendingElement(s)))
        }
    }, SVGRenderer.prototype.checkPendingElements = function() {
        for (; this.pendingElements.length;) {
            var t = this.pendingElements.pop();
            if (t.checkParenting(), t.data.tt)
                for (var e = 0, s = this.elements.length; s > e;) {
                    if (this.elements[e] === t) {
                        t.setMatte(this.elements[e - 1].layerId);
                        break
                    }
                    e += 1
                }
        }
    }, SVGRenderer.prototype.renderFrame = function(t) {
        if (this.renderedFrame != t && !this.destroyed) {
            null === t ? t = this.renderedFrame : this.renderedFrame = t, this.globalData.frameNum = t, this.globalData.frameId += 1, this.globalData.projectInterface.currentFrame = t;
            var e, s = this.layers.length;
            for (this.completeLayers || this.checkLayers(t), e = s - 1; e >= 0; e--)(this.completeLayers || this.elements[e]) && this.elements[e].prepareFrame(t - this.layers[e].st);
            for (e = s - 1; e >= 0; e--)(this.completeLayers || this.elements[e]) && this.elements[e].renderFrame()
        }
    }, SVGRenderer.prototype.appendElementInPos = function(t, e) {
        var s = t.getBaseElement();
        if (s) {
            for (var r, i = 0; e > i;) this.elements[i] && this.elements[i] !== !0 && this.elements[i].getBaseElement() && (r = this.elements[i].getBaseElement()), i += 1;
            r ? this.layerElement.insertBefore(s, r) : this.layerElement.appendChild(s)
        }
    }, SVGRenderer.prototype.hide = function() {
        this.layerElement.style.display = "none"
    }, SVGRenderer.prototype.show = function() {
        this.layerElement.style.display = "block"
    }, SVGRenderer.prototype.searchExtraCompositions = function(t) {
        var e, s = t.length,
            r = document.createElementNS(svgNS, "g");
        for (e = 0; s > e; e += 1)
            if (t[e].xt) {
                var i = this.createComp(t[e], r, this.globalData.comp, null);
                i.initExpressions(), this.globalData.projectInterface.registerComposition(i)
            }
    }, extendPrototype(BaseRenderer, CanvasRenderer), CanvasRenderer.prototype.createBase = function(t) {
        return new CVBaseElement(t, this, this.globalData)
    }, CanvasRenderer.prototype.createShape = function(t) {
        return new CVShapeElement(t, this, this.globalData)
    }, CanvasRenderer.prototype.createText = function(t) {
        return new CVTextElement(t, this, this.globalData)
    }, CanvasRenderer.prototype.createImage = function(t) {
        return new CVImageElement(t, this, this.globalData)
    }, CanvasRenderer.prototype.createComp = function(t) {
        return new CVCompElement(t, this, this.globalData)
    }, CanvasRenderer.prototype.createSolid = function(t) {
        return new CVSolidElement(t, this, this.globalData)
    }, CanvasRenderer.prototype.ctxTransform = function(t) {
        if (1 !== t[0] || 0 !== t[1] || 0 !== t[4] || 1 !== t[5] || 0 !== t[12] || 0 !== t[13]) {
            if (!this.renderConfig.clearCanvas) return void this.canvasContext.transform(t[0], t[1], t[4], t[5], t[12], t[13]);
            this.transformMat.cloneFromProps(t), this.transformMat.transform(this.contextData.cTr.props[0], this.contextData.cTr.props[1], this.contextData.cTr.props[2], this.contextData.cTr.props[3], this.contextData.cTr.props[4], this.contextData.cTr.props[5], this.contextData.cTr.props[6], this.contextData.cTr.props[7], this.contextData.cTr.props[8], this.contextData.cTr.props[9], this.contextData.cTr.props[10], this.contextData.cTr.props[11], this.contextData.cTr.props[12], this.contextData.cTr.props[13], this.contextData.cTr.props[14], this.contextData.cTr.props[15]), this.contextData.cTr.cloneFromProps(this.transformMat.props);
            var e = this.contextData.cTr.props;
            this.canvasContext.setTransform(e[0], e[1], e[4], e[5], e[12], e[13])
        }
    }, CanvasRenderer.prototype.ctxOpacity = function(t) {
        if (1 !== t) {
            if (!this.renderConfig.clearCanvas) return void(this.canvasContext.globalAlpha *= 0 > t ? 0 : t);
            this.contextData.cO *= 0 > t ? 0 : t, this.canvasContext.globalAlpha = this.contextData.cO
        }
    }, CanvasRenderer.prototype.reset = function() {
        return this.renderConfig.clearCanvas ? (this.contextData.cArrPos = 0, this.contextData.cTr.reset(), void(this.contextData.cO = 1)) : void this.canvasContext.restore()
    }, CanvasRenderer.prototype.save = function(t) {
        if (!this.renderConfig.clearCanvas) return void this.canvasContext.save();
        t && this.canvasContext.save();
        var e = this.contextData.cTr.props;
        (null === this.contextData.saved[this.contextData.cArrPos] || void 0 === this.contextData.saved[this.contextData.cArrPos]) && (this.contextData.saved[this.contextData.cArrPos] = new Array(16));
        var s, r = this.contextData.saved[this.contextData.cArrPos];
        for (s = 0; 16 > s; s += 1) r[s] = e[s];
        this.contextData.savedOp[this.contextData.cArrPos] = this.contextData.cO, this.contextData.cArrPos += 1
    }, CanvasRenderer.prototype.restore = function(t) {
        if (!this.renderConfig.clearCanvas) return void this.canvasContext.restore();
        t && this.canvasContext.restore(), this.contextData.cArrPos -= 1;
        var e, s = this.contextData.saved[this.contextData.cArrPos],
            r = this.contextData.cTr.props;
        for (e = 0; 16 > e; e += 1) r[e] = s[e];
        this.canvasContext.setTransform(s[0], s[1], s[4], s[5], s[12], s[13]), s = this.contextData.savedOp[this.contextData.cArrPos], this.contextData.cO = s, this.canvasContext.globalAlpha = s
    }, CanvasRenderer.prototype.configAnimation = function(t) {
        this.animationItem.wrapper ? (this.animationItem.container = document.createElement("canvas"), this.animationItem.container.style.width = "100%", this.animationItem.container.style.height = "100%", this.animationItem.container.style.transformOrigin = this.animationItem.container.style.mozTransformOrigin = this.animationItem.container.style.webkitTransformOrigin = this.animationItem.container.style["-webkit-transform"] = "0px 0px 0px", this.animationItem.wrapper.appendChild(this.animationItem.container), this.canvasContext = this.animationItem.container.getContext("2d")) : this.canvasContext = this.renderConfig.context, this.globalData.canvasContext = this.canvasContext, this.globalData.renderer = this, this.globalData.isDashed = !1, this.globalData.totalFrames = Math.floor(t.tf), this.globalData.compWidth = t.w, this.globalData.compHeight = t.h, this.globalData.frameRate = t.fr, this.globalData.frameId = 0, this.globalData.compSize = {
            w: t.w,
            h: t.h
        }, this.globalData.progressiveLoad = this.renderConfig.progressiveLoad, this.layers = t.layers, this.transformCanvas = {}, this.transformCanvas.w = t.w, this.transformCanvas.h = t.h, this.globalData.fontManager = new FontManager, this.globalData.fontManager.addChars(t.chars), this.globalData.fontManager.addFonts(t.fonts, document.body), this.globalData.getAssetData = this.animationItem.getAssetData.bind(this.animationItem), this.globalData.getAssetsPath = this.animationItem.getAssetsPath.bind(this.animationItem), this.globalData.elementLoaded = this.animationItem.elementLoaded.bind(this.animationItem), this.globalData.addPendingElement = this.animationItem.addPendingElement.bind(this.animationItem), this.globalData.transformCanvas = this.transformCanvas, this.elements = Array.apply(null, {
            length: t.layers.length
        }), this.updateContainerSize()
    }, CanvasRenderer.prototype.updateContainerSize = function() {
        var t, e;
        this.animationItem.wrapper && this.animationItem.container ? (t = this.animationItem.wrapper.offsetWidth, e = this.animationItem.wrapper.offsetHeight, this.animationItem.container.setAttribute("width", t * this.renderConfig.dpr), this.animationItem.container.setAttribute("height", e * this.renderConfig.dpr)) : (t = this.canvasContext.canvas.width * this.renderConfig.dpr, e = this.canvasContext.canvas.height * this.renderConfig.dpr);
        var s, r;
        if (-1 !== this.renderConfig.preserveAspectRatio.indexOf("meet") || -1 !== this.renderConfig.preserveAspectRatio.indexOf("slice")) {
            var i = this.renderConfig.preserveAspectRatio.split(" "),
                a = i[1] || "meet",
                n = i[0] || "xMidYMid",
                o = n.substr(0, 4),
                h = n.substr(4);
            s = t / e, r = this.transformCanvas.w / this.transformCanvas.h, r > s && "meet" === a || s > r && "slice" === a ? (this.transformCanvas.sx = t / (this.transformCanvas.w / this.renderConfig.dpr), this.transformCanvas.sy = t / (this.transformCanvas.w / this.renderConfig.dpr)) : (this.transformCanvas.sx = e / (this.transformCanvas.h / this.renderConfig.dpr), this.transformCanvas.sy = e / (this.transformCanvas.h / this.renderConfig.dpr)), this.transformCanvas.tx = "xMid" === o && (s > r && "meet" === a || r > s && "slice" === a) ? (t - this.transformCanvas.w * (e / this.transformCanvas.h)) / 2 * this.renderConfig.dpr : "xMax" === o && (s > r && "meet" === a || r > s && "slice" === a) ? (t - this.transformCanvas.w * (e / this.transformCanvas.h)) * this.renderConfig.dpr : 0, this.transformCanvas.ty = "YMid" === h && (r > s && "meet" === a || s > r && "slice" === a) ? (e - this.transformCanvas.h * (t / this.transformCanvas.w)) / 2 * this.renderConfig.dpr : "YMax" === h && (r > s && "meet" === a || s > r && "slice" === a) ? (e - this.transformCanvas.h * (t / this.transformCanvas.w)) * this.renderConfig.dpr : 0
        } else "none" == this.renderConfig.preserveAspectRatio ? (this.transformCanvas.sx = t / (this.transformCanvas.w / this.renderConfig.dpr), this.transformCanvas.sy = e / (this.transformCanvas.h / this.renderConfig.dpr), this.transformCanvas.tx = 0, this.transformCanvas.ty = 0) : (this.transformCanvas.sx = this.renderConfig.dpr, this.transformCanvas.sy = this.renderConfig.dpr, this.transformCanvas.tx = 0, this.transformCanvas.ty = 0);
        this.transformCanvas.props = [this.transformCanvas.sx, 0, 0, 0, 0, this.transformCanvas.sy, 0, 0, 0, 0, 1, 0, this.transformCanvas.tx, this.transformCanvas.ty, 0, 1];
        var l, p = this.elements.length;
        for (l = 0; p > l; l += 1) this.elements[l] && 0 === this.elements[l].data.ty && this.elements[l].resize(this.globalData.transformCanvas)
    }, CanvasRenderer.prototype.destroy = function() {
        this.renderConfig.clearCanvas && (this.animationItem.wrapper.innerHTML = "");
        var t, e = this.layers ? this.layers.length : 0;
        for (t = e - 1; t >= 0; t -= 1) this.elements[t].destroy();
        this.elements.length = 0, this.globalData.canvasContext = null, this.animationItem.container = null, this.destroyed = !0
    }, CanvasRenderer.prototype.renderFrame = function(t) {
        if (!(this.renderedFrame == t && this.renderConfig.clearCanvas === !0 || this.destroyed || null === t)) {
            this.renderedFrame = t, this.globalData.frameNum = t - this.animationItem.firstFrame, this.globalData.frameId += 1, this.globalData.projectInterface.currentFrame = t, this.renderConfig.clearCanvas === !0 ? (this.reset(), this.canvasContext.save(), this.canvasContext.clearRect(this.transformCanvas.tx, this.transformCanvas.ty, this.transformCanvas.w * this.transformCanvas.sx, this.transformCanvas.h * this.transformCanvas.sy)) : this.save(), this.ctxTransform(this.transformCanvas.props), this.canvasContext.beginPath(), this.canvasContext.rect(0, 0, this.transformCanvas.w, this.transformCanvas.h), this.canvasContext.closePath(), this.canvasContext.clip();
            var e, s = this.layers.length;
            for (this.completeLayers || this.checkLayers(t), e = 0; s > e; e++)(this.completeLayers || this.elements[e]) && this.elements[e].prepareFrame(t - this.layers[e].st);
            for (e = s - 1; e >= 0; e -= 1)(this.completeLayers || this.elements[e]) && this.elements[e].renderFrame();
            this.renderConfig.clearCanvas !== !0 ? this.restore() : this.canvasContext.restore()
        }
    }, CanvasRenderer.prototype.buildItem = function(t) {
        var e = this.elements;
        if (!e[t] && 99 != this.layers[t].ty) {
            var s = this.createItem(this.layers[t], this, this.globalData);
            e[t] = s, s.initExpressions(), 0 === this.layers[t].ty && s.resize(this.globalData.transformCanvas)
        }
    }, CanvasRenderer.prototype.checkPendingElements = function() {
        for (; this.pendingElements.length;) {
            var t = this.pendingElements.pop();
            t.checkParenting()
        }
    }, CanvasRenderer.prototype.hide = function() {
        this.animationItem.container.style.display = "none"
    }, CanvasRenderer.prototype.show = function() {
        this.animationItem.container.style.display = "block"
    }, CanvasRenderer.prototype.searchExtraCompositions = function(t) {
        {
            var e, s = t.length;
            document.createElementNS(svgNS, "g")
        }
        for (e = 0; s > e; e += 1)
            if (t[e].xt) {
                var r = this.createComp(t[e], this.globalData.comp, this.globalData);
                r.initExpressions(), this.globalData.projectInterface.registerComposition(r)
            }
    }, extendPrototype(BaseRenderer, HybridRenderer), HybridRenderer.prototype.buildItem = SVGRenderer.prototype.buildItem, HybridRenderer.prototype.checkPendingElements = function() {
        for (; this.pendingElements.length;) {
            var t = this.pendingElements.pop();
            t.checkParenting()
        }
    }, HybridRenderer.prototype.appendElementInPos = function(t, e) {
        var s = t.getBaseElement();
        if (s) {
            var r = this.layers[e];
            if (r.ddd && this.supports3d) this.addTo3dContainer(s, e);
            else {
                for (var i, a = 0; e > a;) this.elements[a] && this.elements[a] !== !0 && this.elements[a].getBaseElement() && (i = this.elements[a].getBaseElement()), a += 1;
                i ? r.ddd && this.supports3d || this.layerElement.insertBefore(s, i) : r.ddd && this.supports3d || this.layerElement.appendChild(s)
            }
        }
    }, HybridRenderer.prototype.createBase = function(t) {
        return new SVGBaseElement(t, this.layerElement, this.globalData, this)
    }, HybridRenderer.prototype.createShape = function(t) {
        return this.supports3d ? new HShapeElement(t, this.layerElement, this.globalData, this) : new IShapeElement(t, this.layerElement, this.globalData, this)
    }, HybridRenderer.prototype.createText = function(t) {
        return this.supports3d ? new HTextElement(t, this.layerElement, this.globalData, this) : new SVGTextElement(t, this.layerElement, this.globalData, this)
    }, HybridRenderer.prototype.createCamera = function(t) {
        return this.camera = new HCameraElement(t, this.layerElement, this.globalData, this), this.camera
    }, HybridRenderer.prototype.createImage = function(t) {
        return this.supports3d ? new HImageElement(t, this.layerElement, this.globalData, this) : new IImageElement(t, this.layerElement, this.globalData, this)
    }, HybridRenderer.prototype.createComp = function(t) {
        return this.supports3d ? new HCompElement(t, this.layerElement, this.globalData, this) : new ICompElement(t, this.layerElement, this.globalData, this)
    }, HybridRenderer.prototype.createSolid = function(t) {
        return this.supports3d ? new HSolidElement(t, this.layerElement, this.globalData, this) : new ISolidElement(t, this.layerElement, this.globalData, this)
    }, HybridRenderer.prototype.getThreeDContainer = function(t) {
        var e = document.createElement("div");
        styleDiv(e), e.style.width = this.globalData.compSize.w + "px", e.style.height = this.globalData.compSize.h + "px", e.style.transformOrigin = e.style.mozTransformOrigin = e.style.webkitTransformOrigin = "50% 50%";
        var s = document.createElement("div");
        styleDiv(s), s.style.transform = s.style.webkitTransform = "matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)", e.appendChild(s), this.resizerElem.appendChild(e);
        var r = {
            container: s,
            perspectiveElem: e,
            startPos: t,
            endPos: t
        };
        return this.threeDElements.push(r), r
    }, HybridRenderer.prototype.build3dContainers = function() {
        var t, e, s = this.layers.length;
        for (t = 0; s > t; t += 1) this.layers[t].ddd ? (e || (e = this.getThreeDContainer(t)), e.endPos = Math.max(e.endPos, t)) : e = null
    }, HybridRenderer.prototype.addTo3dContainer = function(t, e) {
        for (var s = 0, r = this.threeDElements.length; r > s;) {
            if (e <= this.threeDElements[s].endPos) {
                for (var i, a = this.threeDElements[s].startPos; e > a;) this.elements[a] && this.elements[a].getBaseElement() && (i = this.elements[a].getBaseElement()), a += 1;
                i ? this.threeDElements[s].container.insertBefore(t, i) : this.threeDElements[s].container.appendChild(t);
                break
            }
            s += 1
        }
    }, HybridRenderer.prototype.configAnimation = function(t) {
        var e = document.createElement("div"),
            s = this.animationItem.wrapper;
        e.style.width = t.w + "px", e.style.height = t.h + "px", this.resizerElem = e, styleDiv(e), e.style.transformStyle = e.style.webkitTransformStyle = e.style.mozTransformStyle = "flat", s.appendChild(e), e.style.overflow = "hidden";
        var r = document.createElementNS(svgNS, "svg");
        r.setAttribute("width", "1"), r.setAttribute("height", "1"), styleDiv(r), this.resizerElem.appendChild(r);
        var i = document.createElementNS(svgNS, "defs");
        r.appendChild(i), this.globalData.defs = i, this.globalData.getAssetData = this.animationItem.getAssetData.bind(this.animationItem), this.globalData.getAssetsPath = this.animationItem.getAssetsPath.bind(this.animationItem), this.globalData.elementLoaded = this.animationItem.elementLoaded.bind(this.animationItem), this.globalData.frameId = 0, this.globalData.compSize = {
            w: t.w,
            h: t.h
        }, this.globalData.frameRate = t.fr, this.layers = t.layers, this.globalData.fontManager = new FontManager, this.globalData.fontManager.addChars(t.chars), this.globalData.fontManager.addFonts(t.fonts, r), this.layerElement = this.resizerElem, this.build3dContainers(), this.updateContainerSize()
    }, HybridRenderer.prototype.destroy = function() {
        this.animationItem.wrapper.innerHTML = "", this.animationItem.container = null, this.globalData.defs = null;
        var t, e = this.layers ? this.layers.length : 0;
        for (t = 0; e > t; t++) this.elements[t].destroy();
        this.elements.length = 0, this.destroyed = !0, this.animationItem = null
    }, HybridRenderer.prototype.updateContainerSize = function() {
        var t, e, s, r, i = this.animationItem.wrapper.offsetWidth,
            a = this.animationItem.wrapper.offsetHeight,
            n = i / a,
            o = this.globalData.compSize.w / this.globalData.compSize.h;
        o > n ? (t = i / this.globalData.compSize.w, e = i / this.globalData.compSize.w, s = 0, r = (a - this.globalData.compSize.h * (i / this.globalData.compSize.w)) / 2) : (t = a / this.globalData.compSize.h, e = a / this.globalData.compSize.h, s = (i - this.globalData.compSize.w * (a / this.globalData.compSize.h)) / 2, r = 0), this.resizerElem.style.transform = this.resizerElem.style.webkitTransform = "matrix3d(" + t + ",0,0,0,0," + e + ",0,0,0,0,1,0," + s + "," + r + ",0,1)"
    }, HybridRenderer.prototype.renderFrame = SVGRenderer.prototype.renderFrame, HybridRenderer.prototype.hide = function() {
        this.resizerElem.style.display = "none"
    }, HybridRenderer.prototype.show = function() {
        this.resizerElem.style.display = "block"
    }, HybridRenderer.prototype.initItems = function() {
        if (this.buildAllItems(), this.camera) this.camera.setup();
        else {
            var t, e = this.globalData.compSize.w,
                s = this.globalData.compSize.h,
                r = this.threeDElements.length;
            for (t = 0; r > t; t += 1) this.threeDElements[t].perspectiveElem.style.perspective = this.threeDElements[t].perspectiveElem.style.webkitPerspective = Math.sqrt(Math.pow(e, 2) + Math.pow(s, 2)) + "px"
        }
    }, HybridRenderer.prototype.searchExtraCompositions = function(t) {
        var e, s = t.length,
            r = document.createElement("div");
        for (e = 0; s > e; e += 1)
            if (t[e].xt) {
                var i = this.createComp(t[e], r, this.globalData.comp, null);
                i.initExpressions(), this.globalData.projectInterface.registerComposition(i)
            }
    }, MaskElement.prototype.getMaskProperty = function(t) {
        return this.viewData[t].prop
    }, MaskElement.prototype.prepareFrame = function() {
        var t, e = this.dynamicProperties.length;
        for (t = 0; e > t; t += 1) this.dynamicProperties[t].getValue()
    }, MaskElement.prototype.renderFrame = function(t) {
        var e, s = this.masksProperties.length;

        for (e = 0; s > e; e++)
            if ((this.viewData[e].prop.mdf || this.firstFrame) && this.drawPath(this.masksProperties[e], this.viewData[e].prop.v, this.viewData[e]), (this.viewData[e].op.mdf || this.firstFrame) && this.viewData[e].elem.setAttribute("fill-opacity", this.viewData[e].op.v), "n" !== this.masksProperties[e].mode && (this.viewData[e].invRect && (this.element.finalTransform.mProp.mdf || this.firstFrame) && (this.viewData[e].invRect.setAttribute("x", -t.props[12]), this.viewData[e].invRect.setAttribute("y", -t.props[13])), this.storedData[e].x && (this.storedData[e].x.mdf || this.firstFrame))) {
                var r = this.storedData[e].expan;
                this.storedData[e].x.v < 0 ? ("erode" !== this.storedData[e].lastOperator && (this.storedData[e].lastOperator = "erode", this.storedData[e].elem.setAttribute("filter", "url(#" + this.storedData[e].filterId + ")")), r.setAttribute("radius", -this.storedData[e].x.v)) : ("dilate" !== this.storedData[e].lastOperator && (this.storedData[e].lastOperator = "dilate", this.storedData[e].elem.setAttribute("filter", null)), this.storedData[e].elem.setAttribute("stroke-width", 2 * this.storedData[e].x.v))
            }
        this.firstFrame = !1
    }, MaskElement.prototype.getMaskelement = function() {
        return this.maskElement
    }, MaskElement.prototype.createLayerSolidPath = function() {
        var t = "M0,0 ";
        return t += " h" + this.globalData.compSize.w, t += " v" + this.globalData.compSize.h, t += " h-" + this.globalData.compSize.w, t += " v-" + this.globalData.compSize.h + " "
    }, MaskElement.prototype.drawPath = function(t, e, s) {
        var r, i, a = "";
        for (i = e.v.length, r = 1; i > r; r += 1) 1 == r && (a += " M" + bm_rnd(e.v[0][0]) + "," + bm_rnd(e.v[0][1])), a += " C" + bm_rnd(e.o[r - 1][0]) + "," + bm_rnd(e.o[r - 1][1]) + " " + bm_rnd(e.i[r][0]) + "," + bm_rnd(e.i[r][1]) + " " + bm_rnd(e.v[r][0]) + "," + bm_rnd(e.v[r][1]);
        e.c && i > 1 && (a += " C" + bm_rnd(e.o[r - 1][0]) + "," + bm_rnd(e.o[r - 1][1]) + " " + bm_rnd(e.i[0][0]) + "," + bm_rnd(e.i[0][1]) + " " + bm_rnd(e.v[0][0]) + "," + bm_rnd(e.v[0][1])), s.lastPath !== a && (s.elem && (e.c ? t.inv ? s.elem.setAttribute("d", this.solidPath + a) : s.elem.setAttribute("d", a) : s.elem.setAttribute("d", "")), s.lastPath = a)
    }, MaskElement.prototype.getMask = function(t) {
        for (var e = 0, s = this.masksProperties.length; s > e;) {
            if (this.masksProperties[e].nm === t) return {
                maskPath: this.viewData[e].prop.pv
            };
            e += 1
        }
    }, MaskElement.prototype.destroy = function() {
        this.element = null, this.globalData = null, this.maskElement = null, this.data = null, this.paths = null, this.masksProperties = null
    }, BaseElement.prototype.checkMasks = function() {
        if (!this.data.hasMask) return !1;
        for (var t = 0, e = this.data.masksProperties.length; e > t;) {
            if ("n" !== this.data.masksProperties[t].mode && this.data.masksProperties[t].cl !== !1) return !0;
            t += 1
        }
        return !1
    }, BaseElement.prototype.checkParenting = function() {
        void 0 !== this.data.parent && this.comp.buildElementParenting(this, this.data.parent)
    }, BaseElement.prototype.prepareFrame = function(t) {
        this.data.ip - this.data.st <= t && this.data.op - this.data.st > t ? this.isVisible !== !0 && (this.elemMdf = !0, this.globalData.mdf = !0, this.isVisible = !0, this.firstFrame = !0, this.data.hasMask && (this.maskManager.firstFrame = !0)) : this.isVisible !== !1 && (this.elemMdf = !0, this.globalData.mdf = !0, this.isVisible = !1);
        var e, s = this.dynamicProperties.length;
        for (e = 0; s > e; e += 1) this.dynamicProperties[e].getValue(), this.dynamicProperties[e].mdf && (this.elemMdf = !0, this.globalData.mdf = !0);
        return this.data.hasMask && this.maskManager.prepareFrame(t * this.data.sr), this.currentFrameNum = t * this.data.sr, this.isVisible
    }, BaseElement.prototype.globalToLocal = function(t) {
        var e = [];
        e.push(this.finalTransform);
        for (var s = !0, r = this.comp; s;) r.finalTransform ? (r.data.hasMask && e.splice(0, 0, r.finalTransform), r = r.comp) : s = !1;
        var i, a, n = e.length;
        for (i = 0; n > i; i += 1) a = e[i].mat.applyToPointArray(0, 0, 0), t = [t[0] - a[0], t[1] - a[1], 0];
        return t
    }, BaseElement.prototype.initExpressions = function() {
        this.layerInterface = LayerExpressionInterface(this), this.data.hasMask && this.layerInterface.registerMaskInterface(this.maskManager);
        var t = EffectsExpressionInterface.createEffectsInterface(this, this.layerInterface);
        this.layerInterface.registerEffectsInterface(t), 0 === this.data.ty || this.data.xt ? this.compInterface = CompExpressionInterface(this) : 4 === this.data.ty && (this.layerInterface.shapeInterface = ShapeExpressionInterface.createShapeInterface(this.shapesData, this.viewData, this.layerInterface))
    }, BaseElement.prototype.setBlendMode = function() {
        var t = "";
        switch (this.data.bm) {
            case 1:
                t = "multiply";
                break;
            case 2:
                t = "screen";
                break;
            case 3:
                t = "overlay";
                break;
            case 4:
                t = "darken";
                break;
            case 5:
                t = "lighten";
                break;
            case 6:
                t = "color-dodge";
                break;
            case 7:
                t = "color-burn";
                break;
            case 8:
                t = "hard-light";
                break;
            case 9:
                t = "soft-light";
                break;
            case 10:
                t = "difference";
                break;
            case 11:
                t = "exclusion";
                break;
            case 12:
                t = "hue";
                break;
            case 13:
                t = "saturation";
                break;
            case 14:
                t = "color";
                break;
            case 15:
                t = "luminosity"
        }
        var e = this.baseElement || this.layerElement;
        e.style["mix-blend-mode"] = t
    }, BaseElement.prototype.init = function() {
        this.data.sr || (this.data.sr = 1), this.dynamicProperties = [], this.data.ef && (this.effects = new EffectsManager(this.data, this, this.dynamicProperties)), this.hidden = !1, this.firstFrame = !0, this.isVisible = !1, this.currentFrameNum = -99999, this.lastNum = -99999, this.data.ks && (this.finalTransform = {
            mProp: PropertyFactory.getProp(this, this.data.ks, 2, null, this.dynamicProperties),
            matMdf: !1,
            opMdf: !1,
            mat: new Matrix,
            opacity: 1
        }, this.data.ao && (this.finalTransform.mProp.autoOriented = !0), this.finalTransform.op = this.finalTransform.mProp.o, this.transform = this.finalTransform.mProp, 11 !== this.data.ty && this.createElements(), this.data.hasMask && this.addMasks(this.data)), this.elemMdf = !1
    }, BaseElement.prototype.getType = function() {
        return this.type
    }, BaseElement.prototype.resetHierarchy = function() {
        this.hierarchy ? this.hierarchy.length = 0 : this.hierarchy = []
    }, BaseElement.prototype.getHierarchy = function() {
        return this.hierarchy || (this.hierarchy = []), this.hierarchy
    }, BaseElement.prototype.setHierarchy = function(t) {
        this.hierarchy = t
    }, BaseElement.prototype.getLayerSize = function() {
        return 5 === this.data.ty ? {
            w: this.data.textData.width,
            h: this.data.textData.height
        } : {
            w: this.data.width,
            h: this.data.height
        }
    }, BaseElement.prototype.hide = function() {}, BaseElement.prototype.mHelper = new Matrix, createElement(BaseElement, SVGBaseElement), SVGBaseElement.prototype.createElements = function() {
        this.layerElement = document.createElementNS(svgNS, "g"), this.transformedElement = this.layerElement, this.data.hasMask && (this.maskedElement = this.layerElement);
        var t = null;
        if (this.data.td) {
            if (3 == this.data.td || 1 == this.data.td) {
                var e = document.createElementNS(svgNS, "mask");
                if (e.setAttribute("id", this.layerId), e.setAttribute("mask-type", 3 == this.data.td ? "luminance" : "alpha"), e.appendChild(this.layerElement), t = e, this.globalData.defs.appendChild(e), !featureSupport.maskType && 1 == this.data.td) {
                    e.setAttribute("mask-type", "luminance");
                    var s = randomString(10),
                        r = filtersFactory.createFilter(s);
                    this.globalData.defs.appendChild(r), r.appendChild(filtersFactory.createAlphaToLuminanceFilter());
                    var i = document.createElementNS(svgNS, "g");
                    i.appendChild(this.layerElement), t = i, e.appendChild(i), i.setAttribute("filter", "url(#" + s + ")")
                }
            } else if (2 == this.data.td) {
                var a = document.createElementNS(svgNS, "mask");
                a.setAttribute("id", this.layerId), a.setAttribute("mask-type", "alpha");
                var n = document.createElementNS(svgNS, "g");
                a.appendChild(n);
                var s = randomString(10),
                    r = filtersFactory.createFilter(s),
                    o = document.createElementNS(svgNS, "feColorMatrix");
                o.setAttribute("type", "matrix"), o.setAttribute("color-interpolation-filters", "sRGB"), o.setAttribute("values", "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 -1 1"), r.appendChild(o), this.globalData.defs.appendChild(r);
                var h = document.createElementNS(svgNS, "rect");
                if (h.setAttribute("width", this.comp.data ? this.comp.data.w : this.globalData.compSize.w), h.setAttribute("height", this.comp.data ? this.comp.data.h : this.globalData.compSize.h), h.setAttribute("x", "0"), h.setAttribute("y", "0"), h.setAttribute("fill", "#ffffff"), h.setAttribute("opacity", "0"), n.setAttribute("filter", "url(#" + s + ")"), n.appendChild(h), n.appendChild(this.layerElement), t = n, !featureSupport.maskType) {
                    a.setAttribute("mask-type", "luminance"), r.appendChild(filtersFactory.createAlphaToLuminanceFilter());
                    var i = document.createElementNS(svgNS, "g");
                    n.appendChild(h), i.appendChild(this.layerElement), t = i, n.appendChild(i)
                }
                this.globalData.defs.appendChild(a)
            }
        } else(this.data.hasMask || this.data.tt) && this.data.tt ? (this.matteElement = document.createElementNS(svgNS, "g"), this.matteElement.appendChild(this.layerElement), t = this.matteElement, this.baseElement = this.matteElement) : this.baseElement = this.layerElement;
        if (!this.data.ln && !this.data.cl || 4 !== this.data.ty && 0 !== this.data.ty || (this.data.ln && this.layerElement.setAttribute("id", this.data.ln), this.data.cl && this.layerElement.setAttribute("class", this.data.cl)), 0 === this.data.ty) {
            var l = document.createElementNS(svgNS, "clipPath"),
                p = document.createElementNS(svgNS, "path");
            p.setAttribute("d", "M0,0 L" + this.data.w + ",0 L" + this.data.w + "," + this.data.h + " L0," + this.data.h + "z");
            var m = "cp_" + randomString(8);
            if (l.setAttribute("id", m), l.appendChild(p), this.globalData.defs.appendChild(l), this.checkMasks()) {
                var f = document.createElementNS(svgNS, "g");
                f.setAttribute("clip-path", "url(#" + m + ")"), f.appendChild(this.layerElement), this.transformedElement = f, t ? t.appendChild(this.transformedElement) : this.baseElement = this.transformedElement
            } else this.layerElement.setAttribute("clip-path", "url(#" + m + ")")
        }
        0 !== this.data.bm && this.setBlendMode(), this.layerElement !== this.parentContainer && (this.placeholder = null), this.data.ef && (this.effectsManager = new SVGEffects(this)), this.checkParenting()
    }, SVGBaseElement.prototype.setBlendMode = BaseElement.prototype.setBlendMode, SVGBaseElement.prototype.renderFrame = function(t) {
        if (3 === this.data.ty || this.data.hd) return !1;
        if (!this.isVisible) return this.isVisible;
        this.lastNum = this.currentFrameNum, this.finalTransform.opMdf = this.finalTransform.op.mdf, this.finalTransform.matMdf = this.finalTransform.mProp.mdf, this.finalTransform.opacity = this.finalTransform.op.v, this.firstFrame && (this.finalTransform.opMdf = !0, this.finalTransform.matMdf = !0);
        var e, s = this.finalTransform.mat;
        if (this.hierarchy) {
            var r, i = this.hierarchy.length;
            for (e = this.finalTransform.mProp.v.props, s.cloneFromProps(e), r = 0; i > r; r += 1) this.finalTransform.matMdf = this.hierarchy[r].finalTransform.mProp.mdf ? !0 : this.finalTransform.matMdf, e = this.hierarchy[r].finalTransform.mProp.v.props, s.transform(e[0], e[1], e[2], e[3], e[4], e[5], e[6], e[7], e[8], e[9], e[10], e[11], e[12], e[13], e[14], e[15])
        } else this.isVisible && s.cloneFromProps(this.finalTransform.mProp.v.props);
        return t && (e = t.mat.props, s.transform(e[0], e[1], e[2], e[3], e[4], e[5], e[6], e[7], e[8], e[9], e[10], e[11], e[12], e[13], e[14], e[15]), this.finalTransform.opacity *= t.opacity, this.finalTransform.opMdf = t.opMdf ? !0 : this.finalTransform.opMdf, this.finalTransform.matMdf = t.matMdf ? !0 : this.finalTransform.matMdf), this.finalTransform.matMdf && this.layerElement && this.transformedElement.setAttribute("transform", s.to2dCSS()), this.finalTransform.opMdf && this.layerElement && this.transformedElement.setAttribute("opacity", this.finalTransform.opacity), this.data.hasMask && this.maskManager.renderFrame(s), this.effectsManager && this.effectsManager.renderFrame(this.firstFrame), this.isVisible
    }, SVGBaseElement.prototype.destroy = function() {
        this.layerElement = null, this.parentContainer = null, this.matteElement && (this.matteElement = null), this.maskManager && this.maskManager.destroy()
    }, SVGBaseElement.prototype.getBaseElement = function() {
        return this.baseElement
    }, SVGBaseElement.prototype.addMasks = function(t) {
        this.maskManager = new MaskElement(t, this, this.globalData)
    }, SVGBaseElement.prototype.setMatte = function(t) {
        this.matteElement && this.matteElement.setAttribute("mask", "url(#" + t + ")")
    }, SVGBaseElement.prototype.setMatte = function(t) {
        this.matteElement && this.matteElement.setAttribute("mask", "url(#" + t + ")")
    }, SVGBaseElement.prototype.hide = function() {}, ITextElement.prototype.init = function() {
        this._parent.init.call(this), this.lettersChangedFlag = !1, this.currentTextDocumentData = {};
        var t = this.data;
        this.viewData = {
            m: {
                a: PropertyFactory.getProp(this, t.t.m.a, 1, 0, this.dynamicProperties)
            }
        };
        var e = this.data.t;
        if (e.a.length) {
            this.viewData.a = Array.apply(null, {
                length: e.a.length
            });
            var s, r, i, a = e.a.length;
            for (s = 0; a > s; s += 1) i = e.a[s], r = {
                a: {},
                s: {}
            }, "r" in i.a && (r.a.r = PropertyFactory.getProp(this, i.a.r, 0, degToRads, this.dynamicProperties)), "rx" in i.a && (r.a.rx = PropertyFactory.getProp(this, i.a.rx, 0, degToRads, this.dynamicProperties)), "ry" in i.a && (r.a.ry = PropertyFactory.getProp(this, i.a.ry, 0, degToRads, this.dynamicProperties)), "sk" in i.a && (r.a.sk = PropertyFactory.getProp(this, i.a.sk, 0, degToRads, this.dynamicProperties)), "sa" in i.a && (r.a.sa = PropertyFactory.getProp(this, i.a.sa, 0, degToRads, this.dynamicProperties)), "s" in i.a && (r.a.s = PropertyFactory.getProp(this, i.a.s, 1, .01, this.dynamicProperties)), "a" in i.a && (r.a.a = PropertyFactory.getProp(this, i.a.a, 1, 0, this.dynamicProperties)), "o" in i.a && (r.a.o = PropertyFactory.getProp(this, i.a.o, 0, .01, this.dynamicProperties)), "p" in i.a && (r.a.p = PropertyFactory.getProp(this, i.a.p, 1, 0, this.dynamicProperties)), "sw" in i.a && (r.a.sw = PropertyFactory.getProp(this, i.a.sw, 0, 0, this.dynamicProperties)), "sc" in i.a && (r.a.sc = PropertyFactory.getProp(this, i.a.sc, 1, 0, this.dynamicProperties)), "fc" in i.a && (r.a.fc = PropertyFactory.getProp(this, i.a.fc, 1, 0, this.dynamicProperties)), "fh" in i.a && (r.a.fh = PropertyFactory.getProp(this, i.a.fh, 0, 0, this.dynamicProperties)), "fs" in i.a && (r.a.fs = PropertyFactory.getProp(this, i.a.fs, 0, .01, this.dynamicProperties)), "fb" in i.a && (r.a.fb = PropertyFactory.getProp(this, i.a.fb, 0, .01, this.dynamicProperties)), "t" in i.a && (r.a.t = PropertyFactory.getProp(this, i.a.t, 0, 0, this.dynamicProperties)), r.s = PropertyFactory.getTextSelectorProp(this, i.s, this.dynamicProperties), r.s.t = i.s.t, this.viewData.a[s] = r
        } else this.viewData.a = [];
        e.p && "m" in e.p ? (this.viewData.p = {
            f: PropertyFactory.getProp(this, e.p.f, 0, 0, this.dynamicProperties),
            l: PropertyFactory.getProp(this, e.p.l, 0, 0, this.dynamicProperties),
            r: e.p.r,
            m: this.maskManager.getMaskProperty(e.p.m)
        }, this.maskPath = !0) : this.maskPath = !1
    }, ITextElement.prototype.prepareFrame = function(t) {
        var e = 0,
            s = this.data.t.d.k.length,
            r = this.data.t.d.k[e].s;
        for (e += 1; s > e && !(this.data.t.d.k[e].t > t);) r = this.data.t.d.k[e].s, e += 1;
        this.lettersChangedFlag = !1, r !== this.currentTextDocumentData && (this.currentTextDocumentData = r, this.lettersChangedFlag = !0, this.buildNewText()), this._parent.prepareFrame.call(this, t)
    }, ITextElement.prototype.createPathShape = function(t, e) {
        var s, r, i, a, n = e.length,
            o = "";
        for (s = 0; n > s; s += 1) {
            for (i = e[s].ks.k.i.length, a = e[s].ks.k, r = 1; i > r; r += 1) 1 == r && (o += " M" + t.applyToPointStringified(a.v[0][0], a.v[0][1])), o += " C" + t.applyToPointStringified(a.o[r - 1][0], a.o[r - 1][1]) + " " + t.applyToPointStringified(a.i[r][0], a.i[r][1]) + " " + t.applyToPointStringified(a.v[r][0], a.v[r][1]);
            o += " C" + t.applyToPointStringified(a.o[r - 1][0], a.o[r - 1][1]) + " " + t.applyToPointStringified(a.i[0][0], a.i[0][1]) + " " + t.applyToPointStringified(a.v[0][0], a.v[0][1]), o += "z"
        }
        return o
    }, ITextElement.prototype.getMeasures = function() {
        var t, e, s, r, i = this.mHelper,
            a = this.renderType,
            n = this.data,
            o = this.currentTextDocumentData,
            h = o.l;
        if (this.maskPath) {
            var l = this.viewData.p.m;
            if (!this.viewData.p.n || this.viewData.p.mdf) {
                var p = l.v;
                this.viewData.p.r && (p = reversePath(p));
                var m = {
                    tLength: 0,
                    segments: []
                };
                r = p.v.length - 1;
                var f, d = 0;
                for (s = 0; r > s; s += 1) f = {
                    s: p.v[s],
                    e: p.v[s + 1],
                    to: [p.o[s][0] - p.v[s][0], p.o[s][1] - p.v[s][1]],
                    ti: [p.i[s + 1][0] - p.v[s + 1][0], p.i[s + 1][1] - p.v[s + 1][1]]
                }, bez.buildBezierData(f), m.tLength += f.bezierData.segmentLength, m.segments.push(f), d += f.bezierData.segmentLength;
                s = r, l.v.c && (f = {
                    s: p.v[s],
                    e: p.v[0],
                    to: [p.o[s][0] - p.v[s][0], p.o[s][1] - p.v[s][1]],
                    ti: [p.i[0][0] - p.v[0][0], p.i[0][1] - p.v[0][1]]
                }, bez.buildBezierData(f), m.tLength += f.bezierData.segmentLength, m.segments.push(f), d += f.bezierData.segmentLength), this.viewData.p.pi = m
            }
            var c, u, y, m = this.viewData.p.pi,
                g = this.viewData.p.f.v,
                v = 0,
                b = 1,
                E = 0,
                P = !0,
                k = m.segments;
            if (0 > g && l.v.c)
                for (m.tLength < Math.abs(g) && (g = -Math.abs(g) % m.tLength), v = k.length - 1, y = k[v].bezierData.points, b = y.length - 1; 0 > g;) g += y[b].partialLength, b -= 1, 0 > b && (v -= 1, y = k[v].bezierData.points, b = y.length - 1);
            y = k[v].bezierData.points, u = y[b - 1], c = y[b];
            var x, S, M = c.partialLength
        }
        r = h.length, t = 0, e = 0;
        var C, D, A, w, T, I = 1.2 * o.s * .714,
            F = !0,
            V = this.viewData,
            B = Array.apply(null, {
                length: r
            });
        w = V.a.length;
        var R, _, N, L, j, O, G, z, H, W, q, X, Y, U, Z, K, J = -1,
            Q = g,
            $ = v,
            tt = b,
            et = -1,
            st = 0;
        for (s = 0; r > s; s += 1)
            if (i.reset(), O = 1, h[s].n) t = 0, e += o.yOffset, e += F ? 1 : 0, g = Q, F = !1, st = 0, this.maskPath && (v = $, b = tt, y = k[v].bezierData.points, u = y[b - 1], c = y[b], M = c.partialLength, E = 0), B[s] = this.emptyProp;
            else {
                if (this.maskPath) {
                    if (et !== h[s].line) {
                        switch (o.j) {
                            case 1:
                                g += d - o.lineWidths[h[s].line];
                                break;
                            case 2:
                                g += (d - o.lineWidths[h[s].line]) / 2
                        }
                        et = h[s].line
                    }
                    J !== h[s].ind && (h[J] && (g += h[J].extra), g += h[s].an / 2, J = h[s].ind), g += V.m.a.v[0] * h[s].an / 200;
                    var rt = 0;
                    for (A = 0; w > A; A += 1) C = V.a[A].a, "p" in C && (D = V.a[A].s, _ = D.getMult(h[s].anIndexes[A], n.t.a[A].s.totalChars), rt += _.length ? C.p.v[0] * _[0] : C.p.v[0] * _);
                    for (P = !0; P;) E + M >= g + rt || !y ? (x = (g + rt - E) / c.partialLength, L = u.point[0] + (c.point[0] - u.point[0]) * x, j = u.point[1] + (c.point[1] - u.point[1]) * x, i.translate(0, -(V.m.a.v[1] * I / 100) + e), P = !1) : y && (E += c.partialLength, b += 1, b >= y.length && (b = 0, v += 1, k[v] ? y = k[v].bezierData.points : l.v.c ? (b = 0, v = 0, y = k[v].bezierData.points) : (E -= c.partialLength, y = null)), y && (u = c, c = y[b], M = c.partialLength));
                    N = h[s].an / 2 - h[s].add, i.translate(-N, 0, 0)
                } else N = h[s].an / 2 - h[s].add, i.translate(-N, 0, 0), i.translate(-V.m.a.v[0] * h[s].an / 200, -V.m.a.v[1] * I / 100, 0);
                for (st += h[s].l / 2, A = 0; w > A; A += 1) C = V.a[A].a, "t" in C && (D = V.a[A].s, _ = D.getMult(h[s].anIndexes[A], n.t.a[A].s.totalChars), this.maskPath ? g += _.length ? C.t * _[0] : C.t * _ : t += _.length ? C.t.v * _[0] : C.t.v * _);
                for (st += h[s].l / 2, o.strokeWidthAnim && (z = o.sw || 0), o.strokeColorAnim && (G = o.sc ? [o.sc[0], o.sc[1], o.sc[2]] : [0, 0, 0]), o.fillColorAnim && (H = [o.fc[0], o.fc[1], o.fc[2]]), A = 0; w > A; A += 1) C = V.a[A].a, "a" in C && (D = V.a[A].s, _ = D.getMult(h[s].anIndexes[A], n.t.a[A].s.totalChars), _.length ? i.translate(-C.a.v[0] * _[0], -C.a.v[1] * _[1], C.a.v[2] * _[2]) : i.translate(-C.a.v[0] * _, -C.a.v[1] * _, C.a.v[2] * _));
                for (A = 0; w > A; A += 1) C = V.a[A].a, "s" in C && (D = V.a[A].s, _ = D.getMult(h[s].anIndexes[A], n.t.a[A].s.totalChars), _.length ? i.scale(1 + (C.s.v[0] - 1) * _[0], 1 + (C.s.v[1] - 1) * _[1], 1) : i.scale(1 + (C.s.v[0] - 1) * _, 1 + (C.s.v[1] - 1) * _, 1));
                for (A = 0; w > A; A += 1) {
                    if (C = V.a[A].a, D = V.a[A].s, _ = D.getMult(h[s].anIndexes[A], n.t.a[A].s.totalChars), "sk" in C && (_.length ? i.skewFromAxis(-C.sk.v * _[0], C.sa.v * _[1]) : i.skewFromAxis(-C.sk.v * _, C.sa.v * _)), "r" in C && i.rotateZ(_.length ? -C.r.v * _[2] : -C.r.v * _), "ry" in C && i.rotateY(_.length ? C.ry.v * _[1] : C.ry.v * _), "rx" in C && i.rotateX(_.length ? C.rx.v * _[0] : C.rx.v * _), "o" in C && (O += _.length ? (C.o.v * _[0] - O) * _[0] : (C.o.v * _ - O) * _), o.strokeWidthAnim && "sw" in C && (z += _.length ? C.sw.v * _[0] : C.sw.v * _), o.strokeColorAnim && "sc" in C)
                        for (W = 0; 3 > W; W += 1) G[W] = Math.round(_.length ? 255 * (G[W] + (C.sc.v[W] - G[W]) * _[0]) : 255 * (G[W] + (C.sc.v[W] - G[W]) * _));
                    if (o.fillColorAnim) {
                        if ("fc" in C)
                            for (W = 0; 3 > W; W += 1) H[W] = _.length ? H[W] + (C.fc.v[W] - H[W]) * _[0] : H[W] + (C.fc.v[W] - H[W]) * _;
                        "fh" in C && (H = _.length ? addHueToRGB(H, C.fh.v * _[0]) : addHueToRGB(H, C.fh.v * _)), "fs" in C && (H = _.length ? addSaturationToRGB(H, C.fs.v * _[0]) : addSaturationToRGB(H, C.fs.v * _)), "fb" in C && (H = _.length ? addBrightnessToRGB(H, C.fb.v * _[0]) : addBrightnessToRGB(H, C.fb.v * _))
                    }
                }
                for (A = 0; w > A; A += 1) C = V.a[A].a, "p" in C && (D = V.a[A].s, _ = D.getMult(h[s].anIndexes[A], n.t.a[A].s.totalChars), this.maskPath ? _.length ? i.translate(0, C.p.v[1] * _[0], -C.p.v[2] * _[1]) : i.translate(0, C.p.v[1] * _, -C.p.v[2] * _) : _.length ? i.translate(C.p.v[0] * _[0], C.p.v[1] * _[1], -C.p.v[2] * _[2]) : i.translate(C.p.v[0] * _, C.p.v[1] * _, -C.p.v[2] * _));
                if (o.strokeWidthAnim && (q = 0 > z ? 0 : z), o.strokeColorAnim && (X = "rgb(" + Math.round(255 * G[0]) + "," + Math.round(255 * G[1]) + "," + Math.round(255 * G[2]) + ")"), o.fillColorAnim && (Y = "rgb(" + Math.round(255 * H[0]) + "," + Math.round(255 * H[1]) + "," + Math.round(255 * H[2]) + ")"), this.maskPath) {
                    if (n.t.p.p) {
                        S = (c.point[1] - u.point[1]) / (c.point[0] - u.point[0]);
                        var it = 180 * Math.atan(S) / Math.PI;
                        c.point[0] < u.point[0] && (it += 180), i.rotate(-it * Math.PI / 180)
                    }
                    i.translate(L, j, 0), i.translate(V.m.a.v[0] * h[s].an / 200, V.m.a.v[1] * I / 100, 0), g -= V.m.a.v[0] * h[s].an / 200, h[s + 1] && J !== h[s + 1].ind && (g += h[s].an / 2, g += o.tr / 1e3 * o.s)
                } else {
                    switch (i.translate(t, e, 0), o.ps && i.translate(o.ps[0], o.ps[1] + o.ascent, 0), o.j) {
                        case 1:
                            i.translate(o.justifyOffset + (o.boxWidth - o.lineWidths[h[s].line]), 0, 0);
                            break;
                        case 2:
                            i.translate(o.justifyOffset + (o.boxWidth - o.lineWidths[h[s].line]) / 2, 0, 0)
                    }
                    i.translate(N, 0, 0), i.translate(V.m.a.v[0] * h[s].an / 200, V.m.a.v[1] * I / 100, 0), t += h[s].l + o.tr / 1e3 * o.s
                }
                "html" === a ? U = i.toCSS() : "svg" === a ? U = i.to2dCSS() : Z = [i.props[0], i.props[1], i.props[2], i.props[3], i.props[4], i.props[5], i.props[6], i.props[7], i.props[8], i.props[9], i.props[10], i.props[11], i.props[12], i.props[13], i.props[14], i.props[15]], K = O, R = this.renderedLetters[s], !R || R.o === K && R.sw === q && R.sc === X && R.fc === Y ? "svg" !== a && "html" !== a || R && R.m === U ? "canvas" !== a || R && R.props[0] === Z[0] && R.props[1] === Z[1] && R.props[4] === Z[4] && R.props[5] === Z[5] && R.props[12] === Z[12] && R.props[13] === Z[13] ? T = R : (this.lettersChangedFlag = !0, T = new LetterProps(K, q, X, Y, null, Z)) : (this.lettersChangedFlag = !0, T = new LetterProps(K, q, X, Y, U)) : (this.lettersChangedFlag = !0, T = new LetterProps(K, q, X, Y, U, Z)), this.renderedLetters[s] = T
            }
    }, ITextElement.prototype.emptyProp = new LetterProps, createElement(SVGBaseElement, SVGTextElement), SVGTextElement.prototype.init = ITextElement.prototype.init, SVGTextElement.prototype.createPathShape = ITextElement.prototype.createPathShape, SVGTextElement.prototype.getMeasures = ITextElement.prototype.getMeasures, SVGTextElement.prototype.prepareFrame = ITextElement.prototype.prepareFrame, SVGTextElement.prototype.createElements = function() {
        this._parent.createElements.call(this), this.data.ln && this.layerElement.setAttribute("id", this.data.ln), this.data.cl && this.layerElement.setAttribute("class", this.data.cl)
    }, SVGTextElement.prototype.buildNewText = function() {
        var t, e, s = this.currentTextDocumentData;
        this.renderedLetters = Array.apply(null, {
            length: this.currentTextDocumentData.l ? this.currentTextDocumentData.l.length : 0
        }), s.fc ? this.layerElement.setAttribute("fill", "rgb(" + Math.round(255 * s.fc[0]) + "," + Math.round(255 * s.fc[1]) + "," + Math.round(255 * s.fc[2]) + ")") : this.layerElement.setAttribute("fill", "rgba(0,0,0,0)"), s.sc && (this.layerElement.setAttribute("stroke", "rgb(" + Math.round(255 * s.sc[0]) + "," + Math.round(255 * s.sc[1]) + "," + Math.round(255 * s.sc[2]) + ")"), this.layerElement.setAttribute("stroke-width", s.sw)), this.layerElement.setAttribute("font-size", s.s);
        var r = this.globalData.fontManager.getFontByName(s.f);
        if (r.fClass) this.layerElement.setAttribute("class", r.fClass);
        else {
            this.layerElement.setAttribute("font-family", r.fFamily);
            var i = s.fWeight,
                a = s.fStyle;
            this.layerElement.setAttribute("font-style", a), this.layerElement.setAttribute("font-weight", i)
        }
        var n = s.l || [];
        if (e = n.length) {
            var o, h, l = this.mHelper,
                p = "",
                m = this.data.singleShape;
            if (m) var f = 0,
                d = 0,
                c = s.lineWidths,
                u = s.boxWidth,
                y = !0;
            var g = 0;
            for (t = 0; e > t; t += 1) {
                if (this.globalData.fontManager.chars ? m && 0 !== t || (o = this.textSpans[g] ? this.textSpans[g] : document.createElementNS(svgNS, "path")) : o = this.textSpans[g] ? this.textSpans[g] : document.createElementNS(svgNS, "text"), o.style.display = "inherit", o.setAttribute("stroke-linecap", "butt"), o.setAttribute("stroke-linejoin", "round"), o.setAttribute("stroke-miterlimit", "4"), m && n[t].n && (f = 0, d += s.yOffset, d += y ? 1 : 0, y = !1), l.reset(), this.globalData.fontManager.chars && l.scale(s.s / 100, s.s / 100), m) {
                    switch (s.ps && l.translate(s.ps[0], s.ps[1] + s.ascent, 0), s.j) {
                        case 1:
                            l.translate(s.justifyOffset + (u - c[n[t].line]), 0, 0);
                            break;
                        case 2:
                            l.translate(s.justifyOffset + (u - c[n[t].line]) / 2, 0, 0)
                    }
                    l.translate(f, d, 0)
                }
                if (this.globalData.fontManager.chars) {
                    var v, b = this.globalData.fontManager.getCharData(s.t.charAt(t), r.fStyle, this.globalData.fontManager.getFontByName(s.f).fFamily);
                    v = b ? b.data : null, v && v.shapes && (h = v.shapes[0].it, m || (p = ""), p += this.createPathShape(l, h), m || o.setAttribute("d", p)), m || this.layerElement.appendChild(o)
                } else o.textContent = n[t].val, o.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve"), this.layerElement.appendChild(o), m && o.setAttribute("transform", l.to2dCSS());
                m && (f += n[t].l, f += s.tr / 1e3 * s.s), this.textSpans[g] = o, g += 1
            }
            if (!m)
                for (; g < this.textSpans.length;) this.textSpans[g].style.display = "none", g += 1;
            m && this.globalData.fontManager.chars && (o.setAttribute("d", p), this.layerElement.appendChild(o))
        }
    }, SVGTextElement.prototype.hide = function() {
        this.hidden || (this.layerElement.style.display = "none", this.hidden = !0)
    }, SVGTextElement.prototype.renderFrame = function(t) {
        var e = this._parent.renderFrame.call(this, t);
        if (e === !1) return void this.hide();
        if (this.hidden && (this.hidden = !1, this.layerElement.style.display = "block"), !this.data.singleShape && (this.getMeasures(), this.lettersChangedFlag)) {
            var s, r, i = this.renderedLetters,
                a = this.currentTextDocumentData.l;
            r = a.length;
            var n;
            for (s = 0; r > s; s += 1) a[s].n || (n = i[s], this.textSpans[s].setAttribute("transform", n.m), this.textSpans[s].setAttribute("opacity", n.o), n.sw && this.textSpans[s].setAttribute("stroke-width", n.sw), n.sc && this.textSpans[s].setAttribute("stroke", n.sc), n.fc && this.textSpans[s].setAttribute("fill", n.fc));
            this.firstFrame && (this.firstFrame = !1)
        }
    }, SVGTextElement.prototype.destroy = function() {
        this._parent.destroy.call()
    }, SVGEffects.prototype.renderFrame = function(t) {
        var e, s = this.filters.length;
        for (e = 0; s > e; e += 1) this.filters[e].renderFrame(t)
    }, SVGTintFilter.prototype.renderFrame = function(t) {
        if (t || this.filterManager.mdf) {
            var e = this.filterManager.effectElements[0].p.v,
                s = this.filterManager.effectElements[1].p.v,
                r = this.filterManager.effectElements[2].p.v / 100;
            this.matrixFilter.setAttribute("values", s[0] - e[0] + " 0 0 0 " + e[0] + " " + (s[1] - e[1]) + " 0 0 0 " + e[1] + " " + (s[2] - e[2]) + " 0 0 0 " + e[2] + " 0 0 0 " + r + " 0")
        }
    }, SVGFillFilter.prototype.renderFrame = function(t) {
        if (t || this.filterManager.mdf) {
            var e = this.filterManager.effectElements[2].p.v,
                s = this.filterManager.effectElements[6].p.v;
            this.matrixFilter.setAttribute("values", "0 0 0 0 " + e[0] + " 0 0 0 0 " + e[1] + " 0 0 0 0 " + e[2] + " 0 0 0 " + s + " 0")
        }
    }, SVGStrokeEffect.prototype.initialize = function() {
        var t, e, s, r, i = this.elem.layerElement.children || this.elem.layerElement.childNodes;
        for (1 === this.filterManager.effectElements[1].p.v ? (r = this.elem.maskManager.masksProperties.length, s = 0) : (s = this.filterManager.effectElements[0].p.v - 1, r = s + 1), e = document.createElementNS(svgNS, "g"), e.setAttribute("fill", "none"), e.setAttribute("stroke-linecap", "round"), e.setAttribute("stroke-dashoffset", 1), s; r > s; s += 1) t = document.createElementNS(svgNS, "path"), e.appendChild(t), this.paths.push({
            p: t,
            m: s
        });
        if (3 === this.filterManager.effectElements[10].p.v) {
            var a = document.createElementNS(svgNS, "mask"),
                n = "stms_" + randomString(10);
            a.setAttribute("id", n), a.setAttribute("mask-type", "alpha"), a.appendChild(e), this.elem.globalData.defs.appendChild(a);
            var o = document.createElementNS(svgNS, "g");
            o.setAttribute("mask", "url(#" + n + ")"), i[0] && o.appendChild(i[0]), this.elem.layerElement.appendChild(o), this.masker = a, e.setAttribute("stroke", "#fff")
        } else if (1 === this.filterManager.effectElements[10].p.v || 2 === this.filterManager.effectElements[10].p.v) {
            if (2 === this.filterManager.effectElements[10].p.v)
                for (var i = this.elem.layerElement.children || this.elem.layerElement.childNodes; i.length;) this.elem.layerElement.removeChild(i[0]);
            this.elem.layerElement.appendChild(e), this.elem.layerElement.removeAttribute("mask"), e.setAttribute("stroke", "#fff")
        }
        this.initialized = !0, this.pathMasker = e
    }, SVGStrokeEffect.prototype.renderFrame = function(t) {
        this.initialized || this.initialize();
        var e, s, r, i = this.paths.length;
        for (e = 0; i > e; e += 1)
            if (s = this.elem.maskManager.viewData[this.paths[e].m], r = this.paths[e].p, (t || this.filterManager.mdf || s.prop.mdf) && r.setAttribute("d", s.lastPath), t || this.filterManager.effectElements[9].p.mdf || this.filterManager.effectElements[4].p.mdf || this.filterManager.effectElements[7].p.mdf || this.filterManager.effectElements[8].p.mdf || s.prop.mdf) {
                var a;
                if (0 !== this.filterManager.effectElements[7].p.v || 100 !== this.filterManager.effectElements[8].p.v) {
                    var n = Math.min(this.filterManager.effectElements[7].p.v, this.filterManager.effectElements[8].p.v) / 100,
                        o = Math.max(this.filterManager.effectElements[7].p.v, this.filterManager.effectElements[8].p.v) / 100,
                        h = r.getTotalLength();
                    a = "0 0 0 " + h * n + " ";
                    var l, p = h * (o - n),
                        m = 1 + 2 * this.filterManager.effectElements[4].p.v * this.filterManager.effectElements[9].p.v / 100,
                        f = Math.floor(p / m);
                    for (l = 0; f > l; l += 1) a += "1 " + 2 * this.filterManager.effectElements[4].p.v * this.filterManager.effectElements[9].p.v / 100 + " ";
                    a += "0 " + 10 * h + " 0 0"
                } else a = "1 " + 2 * this.filterManager.effectElements[4].p.v * this.filterManager.effectElements[9].p.v / 100;
                r.setAttribute("stroke-dasharray", a)
            }
        if ((t || this.filterManager.effectElements[4].p.mdf) && this.pathMasker.setAttribute("stroke-width", 2 * this.filterManager.effectElements[4].p.v), (t || this.filterManager.effectElements[6].p.mdf) && this.pathMasker.setAttribute("opacity", this.filterManager.effectElements[6].p.v), (1 === this.filterManager.effectElements[10].p.v || 2 === this.filterManager.effectElements[10].p.v) && (t || this.filterManager.effectElements[3].p.mdf)) {
            var d = this.filterManager.effectElements[3].p.v;
            this.pathMasker.setAttribute("stroke", "rgb(" + bm_floor(255 * d[0]) + "," + bm_floor(255 * d[1]) + "," + bm_floor(255 * d[2]) + ")")
        }
    }, createElement(SVGBaseElement, ICompElement), ICompElement.prototype.hide = function() {
        if (!this.hidden) {
            var t, e = this.elements.length;
            for (t = 0; e > t; t += 1) this.elements[t] && this.elements[t].hide();
            this.hidden = !0
        }
    }, ICompElement.prototype.prepareFrame = function(t) {
        if (this._parent.prepareFrame.call(this, t), this.isVisible !== !1 || this.data.xt) {
            if (this.tm) {
                var e = this.tm.v;
                e === this.data.op && (e = this.data.op - 1), this.renderedFrame = e
            } else this.renderedFrame = t / this.data.sr;
            var s, r = this.elements.length;
            for (this.completeLayers || this.checkLayers(this.renderedFrame), s = 0; r > s; s += 1)(this.completeLayers || this.elements[s]) && this.elements[s].prepareFrame(this.renderedFrame - this.layers[s].st)
        }
    }, ICompElement.prototype.renderFrame = function(t) {
        var e, s = this._parent.renderFrame.call(this, t),
            r = this.layers.length;
        if (s === !1) return void this.hide();
        for (this.hidden = !1, e = 0; r > e; e += 1)(this.completeLayers || this.elements[e]) && this.elements[e].renderFrame();
        this.firstFrame && (this.firstFrame = !1)
    }, ICompElement.prototype.setElements = function(t) {
        this.elements = t
    }, ICompElement.prototype.getElements = function() {
        return this.elements
    }, ICompElement.prototype.destroy = function() {
        this._parent.destroy.call();
        var t, e = this.layers.length;
        for (t = 0; e > t; t += 1) this.elements[t] && this.elements[t].destroy()
    }, ICompElement.prototype.checkLayers = SVGRenderer.prototype.checkLayers, ICompElement.prototype.buildItem = SVGRenderer.prototype.buildItem, ICompElement.prototype.buildAllItems = SVGRenderer.prototype.buildAllItems, ICompElement.prototype.buildElementParenting = SVGRenderer.prototype.buildElementParenting, ICompElement.prototype.createItem = SVGRenderer.prototype.createItem, ICompElement.prototype.createImage = SVGRenderer.prototype.createImage, ICompElement.prototype.createComp = SVGRenderer.prototype.createComp, ICompElement.prototype.createSolid = SVGRenderer.prototype.createSolid, ICompElement.prototype.createShape = SVGRenderer.prototype.createShape, ICompElement.prototype.createText = SVGRenderer.prototype.createText, ICompElement.prototype.createBase = SVGRenderer.prototype.createBase, ICompElement.prototype.appendElementInPos = SVGRenderer.prototype.appendElementInPos, ICompElement.prototype.checkPendingElements = SVGRenderer.prototype.checkPendingElements, ICompElement.prototype.addPendingElement = SVGRenderer.prototype.addPendingElement, createElement(SVGBaseElement, IImageElement), IImageElement.prototype.createElements = function() {
        var t = this.globalData.getAssetsPath(this.assetData);
        this._parent.createElements.call(this), this.innerElem = document.createElementNS(svgNS, "image"), this.innerElem.setAttribute("width", this.assetData.w + "px"), this.innerElem.setAttribute("height", this.assetData.h + "px"), this.innerElem.setAttribute("preserveAspectRatio", "xMidYMid slice"), this.innerElem.setAttributeNS("http://www.w3.org/1999/xlink", "href", t), this.maskedElement = this.innerElem, this.layerElement.appendChild(this.innerElem), this.data.ln && this.layerElement.setAttribute("id", this.data.ln), this.data.cl && this.layerElement.setAttribute("class", this.data.cl)
    }, IImageElement.prototype.hide = function() {
        this.hidden || (this.layerElement.style.display = "none", this.hidden = !0)
    }, IImageElement.prototype.renderFrame = function(t) {
        var e = this._parent.renderFrame.call(this, t);
        return e === !1 ? void this.hide() : (this.hidden && (this.hidden = !1, this.layerElement.style.display = "block"), void(this.firstFrame && (this.firstFrame = !1)))
    }, IImageElement.prototype.destroy = function() {
        this._parent.destroy.call(),
            this.innerElem = null
    }, createElement(SVGBaseElement, IShapeElement), IShapeElement.prototype.lcEnum = {
        1: "butt",
        2: "round",
        3: "butt"
    }, IShapeElement.prototype.ljEnum = {
        1: "miter",
        2: "round",
        3: "butt"
    }, IShapeElement.prototype.buildExpressionInterface = function() {}, IShapeElement.prototype.createElements = function() {
        this._parent.createElements.call(this), this.searchShapes(this.shapesData, this.viewData, this.layerElement, this.dynamicProperties, 0), (!this.data.hd || this.data.td) && styleUnselectableDiv(this.layerElement)
    }, IShapeElement.prototype.setGradientData = function(t, e, s) {
        var r, i = "gr_" + randomString(10);
        r = 1 === e.t ? document.createElementNS(svgNS, "linearGradient") : document.createElementNS(svgNS, "radialGradient"), r.setAttribute("id", i), r.setAttribute("spreadMethod", "pad"), r.setAttribute("gradientUnits", "userSpaceOnUse");
        var a, n, o, h = [];
        for (o = 4 * e.g.p, n = 0; o > n; n += 4) a = document.createElementNS(svgNS, "stop"), r.appendChild(a), h.push(a);
        t.setAttribute("gf" === e.ty ? "fill" : "stroke", "url(#" + i + ")"), this.globalData.defs.appendChild(r), s.gf = r, s.cst = h
    }, IShapeElement.prototype.setGradientOpacity = function(t, e, s) {
        if (t.g.k.k[0].s && t.g.k.k[0].s.length > 4 * t.g.p || t.g.k.k.length > 4 * t.g.p) {
            var r, i, a, n, o = document.createElementNS(svgNS, "mask"),
                h = document.createElementNS(svgNS, "path");
            o.appendChild(h);
            var l = "op_" + randomString(10),
                p = "mk_" + randomString(10);
            o.setAttribute("id", p), r = 1 === t.t ? document.createElementNS(svgNS, "linearGradient") : document.createElementNS(svgNS, "radialGradient"), r.setAttribute("id", l), r.setAttribute("spreadMethod", "pad"), r.setAttribute("gradientUnits", "userSpaceOnUse"), n = t.g.k.k[0].s ? t.g.k.k[0].s.length : t.g.k.k.length;
            var m = [];
            for (a = 4 * t.g.p; n > a; a += 2) i = document.createElementNS(svgNS, "stop"), i.setAttribute("stop-color", "rgb(255,255,255)"), r.appendChild(i), m.push(i);
            return h.setAttribute("gf" === t.ty ? "fill" : "stroke", "url(#" + l + ")"), this.globalData.defs.appendChild(r), this.globalData.defs.appendChild(o), e.of = r, e.ost = m, s.msElem = h, p
        }
    }, IShapeElement.prototype.searchShapes = function(t, e, s, r, i, a) {
        a = a || [];
        var n, o, h, l, p, m = [].concat(a),
            f = t.length - 1,
            d = [],
            c = [];
        for (n = f; n >= 0; n -= 1)
            if ("fl" == t[n].ty || "st" == t[n].ty || "gf" == t[n].ty || "gs" == t[n].ty) {
                e[n] = {}, l = {
                    type: t[n].ty,
                    d: "",
                    ld: "",
                    lvl: i,
                    mdf: !1
                };
                var u = document.createElementNS(svgNS, "path");
                if (e[n].o = PropertyFactory.getProp(this, t[n].o, 0, .01, r), ("st" == t[n].ty || "gs" == t[n].ty) && (u.setAttribute("stroke-linecap", this.lcEnum[t[n].lc] || "round"), u.setAttribute("stroke-linejoin", this.ljEnum[t[n].lj] || "round"), u.setAttribute("fill-opacity", "0"), 1 == t[n].lj && u.setAttribute("stroke-miterlimit", t[n].ml), e[n].w = PropertyFactory.getProp(this, t[n].w, 0, null, r), t[n].d)) {
                    var y = PropertyFactory.getDashProp(this, t[n].d, "svg", r);
                    y.k || (u.setAttribute("stroke-dasharray", y.dasharray), u.setAttribute("stroke-dashoffset", y.dashoffset)), e[n].d = y
                }
                if ("fl" == t[n].ty || "st" == t[n].ty) e[n].c = PropertyFactory.getProp(this, t[n].c, 1, 255, r), s.appendChild(u);
                else {
                    e[n].g = PropertyFactory.getGradientProp(this, t[n].g, r), 2 == t[n].t && (e[n].h = PropertyFactory.getProp(this, t[n].h, 1, .01, r), e[n].a = PropertyFactory.getProp(this, t[n].a, 1, degToRads, r)), e[n].s = PropertyFactory.getProp(this, t[n].s, 1, null, r), e[n].e = PropertyFactory.getProp(this, t[n].e, 1, null, r), this.setGradientData(u, t[n], e[n], l);
                    var g = this.setGradientOpacity(t[n], e[n], l);
                    g && u.setAttribute("mask", "url(#" + g + ")"), e[n].elem = u, s.appendChild(u)
                }
                t[n].ln && u.setAttribute("id", t[n].ln), t[n].cl && u.setAttribute("class", t[n].cl), l.pElem = u, this.stylesList.push(l), e[n].style = l, d.push(l)
            } else if ("gr" == t[n].ty) {
            e[n] = {
                it: []
            };
            var v = document.createElementNS(svgNS, "g");
            s.appendChild(v), e[n].gr = v, this.searchShapes(t[n].it, e[n].it, v, r, i + 1, a)
        } else if ("tr" == t[n].ty) e[n] = {
            transform: {
                op: PropertyFactory.getProp(this, t[n].o, 0, .01, r),
                mProps: PropertyFactory.getProp(this, t[n], 2, null, r)
            },
            elements: []
        }, p = e[n].transform, m.push(p);
        else if ("sh" == t[n].ty || "rc" == t[n].ty || "el" == t[n].ty || "sr" == t[n].ty) {
            e[n] = {
                elements: [],
                caches: [],
                styles: [],
                transformers: m,
                lStr: ""
            };
            var b = 4;
            for ("rc" == t[n].ty ? b = 5 : "el" == t[n].ty ? b = 6 : "sr" == t[n].ty && (b = 7), e[n].sh = ShapePropertyFactory.getShapeProp(this, t[n], b, r), e[n].lvl = i, this.shapes.push(e[n].sh), this.addShapeToModifiers(e[n].sh), h = this.stylesList.length, o = 0; h > o; o += 1) this.stylesList[o].closed || e[n].elements.push({
                ty: this.stylesList[o].type,
                st: this.stylesList[o]
            })
        } else if ("tm" == t[n].ty || "rd" == t[n].ty || "ms" == t[n].ty) {
            var E = ShapeModifiers.getModifier(t[n].ty);
            E.init(this, t[n], r), this.shapeModifiers.push(E), c.push(E), e[n] = E
        }
        for (f = d.length, n = 0; f > n; n += 1) d[n].closed = !0;
        for (f = c.length, n = 0; f > n; n += 1) c[n].closed = !0
    }, IShapeElement.prototype.addShapeToModifiers = function(t) {
        var e, s = this.shapeModifiers.length;
        for (e = 0; s > e; e += 1) this.shapeModifiers[e].addShape(t)
    }, IShapeElement.prototype.renderModifiers = function() {
        if (this.shapeModifiers.length) {
            var t, e = this.shapes.length;
            for (t = 0; e > t; t += 1) this.shapes[t].reset();
            for (e = this.shapeModifiers.length, t = e - 1; t >= 0; t -= 1) this.shapeModifiers[t].processShapes(this.firstFrame)
        }
    }, IShapeElement.prototype.renderFrame = function(t) {
        var e = this._parent.renderFrame.call(this, t);
        return e === !1 ? void this.hide() : (this.globalToLocal([0, 0, 0]), this.hidden && (this.layerElement.style.display = "block", this.hidden = !1), this.renderModifiers(), void this.renderShape(null, null, !0, null))
    }, IShapeElement.prototype.hide = function() {
        if (!this.hidden) {
            this.layerElement.style.display = "none";
            var t, e = this.stylesList.length;
            for (t = e - 1; t >= 0; t -= 1) "0" !== this.stylesList[t].ld && (this.stylesList[t].ld = "0", this.stylesList[t].pElem.style.display = "none", this.stylesList[t].pElem.parentNode && (this.stylesList[t].parent = this.stylesList[t].pElem.parentNode));
            this.hidden = !0
        }
    }, IShapeElement.prototype.renderShape = function(t, e, s, r) {
        var i, a;
        if (!t)
            for (t = this.shapesData, a = this.stylesList.length, i = 0; a > i; i += 1) this.stylesList[i].d = "", this.stylesList[i].mdf = !1;
        e || (e = this.viewData), a = t.length - 1;
        var n;
        for (i = a; i >= 0; i -= 1) n = t[i].ty, "tr" == n ? ((this.firstFrame || e[i].transform.op.mdf && r) && r.setAttribute("opacity", e[i].transform.op.v), (this.firstFrame || e[i].transform.mProps.mdf && r) && r.setAttribute("transform", e[i].transform.mProps.v.to2dCSS())) : "sh" == n || "el" == n || "rc" == n || "sr" == n ? this.renderPath(t[i], e[i]) : "fl" == n ? this.renderFill(t[i], e[i]) : "gf" == n ? this.renderGradient(t[i], e[i]) : "gs" == n ? (this.renderGradient(t[i], e[i]), this.renderStroke(t[i], e[i])) : "st" == n ? this.renderStroke(t[i], e[i]) : "gr" == n && this.renderShape(t[i].it, e[i].it, !1, e[i].gr);
        if (s) {
            for (a = this.stylesList.length, i = 0; a > i; i += 1) "0" === this.stylesList[i].ld && (this.stylesList[i].ld = "1", this.stylesList[i].pElem.style.display = "block"), (this.stylesList[i].mdf || this.firstFrame) && (this.stylesList[i].pElem.setAttribute("d", this.stylesList[i].d), this.stylesList[i].msElem && this.stylesList[i].msElem.setAttribute("d", this.stylesList[i].d));
            this.firstFrame && (this.firstFrame = !1)
        }
    }, IShapeElement.prototype.renderPath = function(t, e) {
        var s, r, i, a, n, o, h, l, p = e.elements.length,
            m = e.lvl;
        for (l = 0; p > l; l += 1) {
            o = e.sh.mdf || this.firstFrame, n = "";
            var f = e.sh.paths;
            if (a = f.length, e.elements[l].st.lvl < m) {
                var d, c, u = this.mHelper.reset();
                for (c = e.transformers.length - 1; c >= 0; c -= 1) o = e.transformers[c].mProps.mdf || o, d = e.transformers[c].mProps.v.props, u.transform(d[0], d[1], d[2], d[3], d[4], d[5], d[6], d[7], d[8], d[9], d[10], d[11], d[12], d[13], d[14], d[15]);
                if (o) {
                    for (i = 0; a > i; i += 1)
                        if (h = f[i], h && h.v) {
                            for (s = h.v.length, r = 1; s > r; r += 1) 1 == r && (n += " M" + u.applyToPointStringified(h.v[0][0], h.v[0][1])), n += " C" + u.applyToPointStringified(h.o[r - 1][0], h.o[r - 1][1]) + " " + u.applyToPointStringified(h.i[r][0], h.i[r][1]) + " " + u.applyToPointStringified(h.v[r][0], h.v[r][1]);
                            1 == s && (n += " M" + u.applyToPointStringified(h.v[0][0], h.v[0][1])), h.c && (n += " C" + u.applyToPointStringified(h.o[r - 1][0], h.o[r - 1][1]) + " " + u.applyToPointStringified(h.i[0][0], h.i[0][1]) + " " + u.applyToPointStringified(h.v[0][0], h.v[0][1]), n += "z")
                        }
                    e.caches[l] = n
                } else n = e.caches[l]
            } else if (o) {
                for (i = 0; a > i; i += 1)
                    if (h = f[i], h && h.v) {
                        for (s = h.v.length, r = 1; s > r; r += 1) 1 == r && (n += " M" + h.v[0].join(",")), n += " C" + h.o[r - 1].join(",") + " " + h.i[r].join(",") + " " + h.v[r].join(",");
                        1 == s && (n += " M" + h.v[0].join(",")), h.c && s && (n += " C" + h.o[r - 1].join(",") + " " + h.i[0].join(",") + " " + h.v[0].join(","), n += "z")
                    }
                e.caches[l] = n
            } else n = e.caches[l];
            e.elements[l].st.d += n, e.elements[l].st.mdf = o || e.elements[l].st.mdf
        }
    }, IShapeElement.prototype.renderFill = function(t, e) {
        var s = e.style;
        (e.c.mdf || this.firstFrame) && s.pElem.setAttribute("fill", "rgb(" + bm_floor(e.c.v[0]) + "," + bm_floor(e.c.v[1]) + "," + bm_floor(e.c.v[2]) + ")"), (e.o.mdf || this.firstFrame) && s.pElem.setAttribute("fill-opacity", e.o.v)
    }, IShapeElement.prototype.renderGradient = function(t, e) {
        var s = e.gf,
            r = e.of,
            i = e.s.v,
            a = e.e.v;
        if (e.o.mdf || this.firstFrame) {
            var n = "gf" === t.ty ? "fill-opacity" : "stroke-opacity";
            e.elem.setAttribute(n, e.o.v)
        }
        if (e.s.mdf || this.firstFrame) {
            var o = 1 === t.t ? "x1" : "cx",
                h = "x1" === o ? "y1" : "cy";
            s.setAttribute(o, i[0]), s.setAttribute(h, i[1]), r && (r.setAttribute(o, i[0]), r.setAttribute(h, i[1]))
        }
        var l, p, m, f;
        if (e.g.cmdf || this.firstFrame) {
            l = e.cst;
            var d = e.g.c;
            for (m = l.length, p = 0; m > p; p += 1) f = l[p], f.setAttribute("offset", d[4 * p] + "%"), f.setAttribute("stop-color", "rgb(" + d[4 * p + 1] + "," + d[4 * p + 2] + "," + d[4 * p + 3] + ")")
        }
        if (r && (e.g.omdf || this.firstFrame)) {
            l = e.ost;
            var c = e.g.o;
            for (m = l.length, p = 0; m > p; p += 1) f = l[p], f.setAttribute("offset", c[2 * p] + "%"), f.setAttribute("stop-opacity", c[2 * p + 1])
        }
        if (1 === t.t)(e.e.mdf || this.firstFrame) && (s.setAttribute("x2", a[0]), s.setAttribute("y2", a[1]), r && (r.setAttribute("x2", a[0]), r.setAttribute("y2", a[1])));
        else {
            var u;
            if ((e.s.mdf || e.e.mdf || this.firstFrame) && (u = Math.sqrt(Math.pow(i[0] - a[0], 2) + Math.pow(i[1] - a[1], 2)), s.setAttribute("r", u), r && r.setAttribute("r", u)), e.e.mdf || e.h.mdf || e.a.mdf || this.firstFrame) {
                u || (u = Math.sqrt(Math.pow(i[0] - a[0], 2) + Math.pow(i[1] - a[1], 2)));
                var y = Math.atan2(a[1] - i[1], a[0] - i[0]),
                    g = e.h.v >= 1 ? .99 : e.h.v <= -1 ? -.99 : e.h.v,
                    v = u * g,
                    b = Math.cos(y + e.a.v) * v + i[0],
                    E = Math.sin(y + e.a.v) * v + i[1];
                s.setAttribute("fx", b), s.setAttribute("fy", E), r && (r.setAttribute("fx", b), r.setAttribute("fy", E))
            }
        }
    }, IShapeElement.prototype.renderStroke = function(t, e) {
        var s = e.style,
            r = e.d;
        r && r.k && (r.mdf || this.firstFrame) && (s.pElem.setAttribute("stroke-dasharray", r.dasharray), s.pElem.setAttribute("stroke-dashoffset", r.dashoffset)), e.c && (e.c.mdf || this.firstFrame) && s.pElem.setAttribute("stroke", "rgb(" + bm_floor(e.c.v[0]) + "," + bm_floor(e.c.v[1]) + "," + bm_floor(e.c.v[2]) + ")"), (e.o.mdf || this.firstFrame) && s.pElem.setAttribute("stroke-opacity", e.o.v), (e.w.mdf || this.firstFrame) && (s.pElem.setAttribute("stroke-width", e.w.v), s.msElem && s.msElem.setAttribute("stroke-width", e.w.v))
    }, IShapeElement.prototype.destroy = function() {
        this._parent.destroy.call(), this.shapeData = null, this.viewData = null, this.parentContainer = null, this.placeholder = null
    }, createElement(SVGBaseElement, ISolidElement), ISolidElement.prototype.createElements = function() {
        this._parent.createElements.call(this);
        var t = document.createElementNS(svgNS, "rect");
        t.setAttribute("width", this.data.sw), t.setAttribute("height", this.data.sh), t.setAttribute("fill", this.data.sc), this.layerElement.appendChild(t), this.innerElem = t, this.data.ln && this.layerElement.setAttribute("id", this.data.ln), this.data.cl && this.layerElement.setAttribute("class", this.data.cl)
    }, ISolidElement.prototype.hide = IImageElement.prototype.hide, ISolidElement.prototype.renderFrame = IImageElement.prototype.renderFrame, ISolidElement.prototype.destroy = IImageElement.prototype.destroy, createElement(BaseElement, CVBaseElement), CVBaseElement.prototype.createElements = function() {
        this.checkParenting()
    }, CVBaseElement.prototype.checkBlendMode = function(t) {
        if (t.blendMode !== this.data.bm) {
            t.blendMode = this.data.bm;
            var e = "";
            switch (this.data.bm) {
                case 0:
                    e = "normal";
                    break;
                case 1:
                    e = "multiply";
                    break;
                case 2:
                    e = "screen";
                    break;
                case 3:
                    e = "overlay";
                    break;
                case 4:
                    e = "darken";
                    break;
                case 5:
                    e = "lighten";
                    break;
                case 6:
                    e = "color-dodge";
                    break;
                case 7:
                    e = "color-burn";
                    break;
                case 8:
                    e = "hard-light";
                    break;
                case 9:
                    e = "soft-light";
                    break;
                case 10:
                    e = "difference";
                    break;
                case 11:
                    e = "exclusion";
                    break;
                case 12:
                    e = "hue";
                    break;
                case 13:
                    e = "saturation";
                    break;
                case 14:
                    e = "color";
                    break;
                case 15:
                    e = "luminosity"
            }
            t.canvasContext.globalCompositeOperation = e
        }
    }, CVBaseElement.prototype.renderFrame = function(t) {
        if (3 === this.data.ty) return !1;
        if (this.checkBlendMode(0 === this.data.ty ? this.parentGlobalData : this.globalData), !this.isVisible) return this.isVisible;
        this.finalTransform.opMdf = this.finalTransform.op.mdf, this.finalTransform.matMdf = this.finalTransform.mProp.mdf, this.finalTransform.opacity = this.finalTransform.op.v;
        var e, s = this.finalTransform.mat;
        if (this.hierarchy) {
            var r, i = this.hierarchy.length;
            for (e = this.finalTransform.mProp.v.props, s.cloneFromProps(e), r = 0; i > r; r += 1) this.finalTransform.matMdf = this.hierarchy[r].finalTransform.mProp.mdf ? !0 : this.finalTransform.matMdf, e = this.hierarchy[r].finalTransform.mProp.v.props, s.transform(e[0], e[1], e[2], e[3], e[4], e[5], e[6], e[7], e[8], e[9], e[10], e[11], e[12], e[13], e[14], e[15])
        } else t ? (e = this.finalTransform.mProp.v.props, s.cloneFromProps(e)) : s.cloneFromProps(this.finalTransform.mProp.v.props);
        return t && (e = t.mat.props, s.transform(e[0], e[1], e[2], e[3], e[4], e[5], e[6], e[7], e[8], e[9], e[10], e[11], e[12], e[13], e[14], e[15]), this.finalTransform.opacity *= t.opacity, this.finalTransform.opMdf = t.opMdf ? !0 : this.finalTransform.opMdf, this.finalTransform.matMdf = t.matMdf ? !0 : this.finalTransform.matMdf), this.data.hasMask && (this.globalData.renderer.save(!0), this.maskManager.renderFrame(0 === this.data.ty ? null : s)), this.data.hd && (this.isVisible = !1), this.isVisible
    }, CVBaseElement.prototype.addMasks = function(t) {
        this.maskManager = new CVMaskElement(t, this, this.globalData)
    }, CVBaseElement.prototype.destroy = function() {
        this.canvasContext = null, this.data = null, this.globalData = null, this.maskManager && this.maskManager.destroy()
    }, CVBaseElement.prototype.mHelper = new Matrix, createElement(CVBaseElement, CVCompElement), CVCompElement.prototype.ctxTransform = CanvasRenderer.prototype.ctxTransform, CVCompElement.prototype.ctxOpacity = CanvasRenderer.prototype.ctxOpacity, CVCompElement.prototype.save = CanvasRenderer.prototype.save, CVCompElement.prototype.restore = CanvasRenderer.prototype.restore, CVCompElement.prototype.reset = function() {
        this.contextData.cArrPos = 0, this.contextData.cTr.reset(), this.contextData.cO = 1
    }, CVCompElement.prototype.resize = function(t) {
        var e = Math.max(t.sx, t.sy);
        this.canvas.width = this.data.w * e, this.canvas.height = this.data.h * e, this.transformCanvas = {
            sc: e,
            w: this.data.w * e,
            h: this.data.h * e,
            props: [e, 0, 0, 0, 0, e, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]
        };
        var s, r = this.elements.length;
        for (s = 0; r > s; s += 1) this.elements[s] && 0 === this.elements[s].data.ty && this.elements[s].resize(t)
    }, CVCompElement.prototype.prepareFrame = function(t) {
        if (this.globalData.frameId = this.parentGlobalData.frameId, this.globalData.mdf = !1, this._parent.prepareFrame.call(this, t), this.isVisible !== !1 || this.data.xt) {
            var e = t;
            this.tm && (e = this.tm.v, e === this.data.op && (e = this.data.op - 1)), this.renderedFrame = e / this.data.sr;
            var s, r = this.elements.length;
            for (this.completeLayers || this.checkLayers(t), s = 0; r > s; s += 1)(this.completeLayers || this.elements[s]) && (this.elements[s].prepareFrame(e / this.data.sr - this.layers[s].st), 0 === this.elements[s].data.ty && this.elements[s].globalData.mdf && (this.globalData.mdf = !0));
            this.globalData.mdf && !this.data.xt && (this.canvasContext.clearRect(0, 0, this.data.w, this.data.h), this.ctxTransform(this.transformCanvas.props))
        }
    }, CVCompElement.prototype.renderFrame = function(t) {
        if (this._parent.renderFrame.call(this, t) !== !1) {
            if (this.globalData.mdf) {
                var e, s = this.layers.length;
                for (e = s - 1; e >= 0; e -= 1)(this.completeLayers || this.elements[e]) && this.elements[e].renderFrame()
            }
            this.data.hasMask && this.globalData.renderer.restore(!0), this.firstFrame && (this.firstFrame = !1), this.parentGlobalData.renderer.save(), this.parentGlobalData.renderer.ctxTransform(this.finalTransform.mat.props), this.parentGlobalData.renderer.ctxOpacity(this.finalTransform.opacity), this.parentGlobalData.renderer.canvasContext.drawImage(this.canvas, 0, 0, this.data.w, this.data.h), this.parentGlobalData.renderer.restore(), this.globalData.mdf && this.reset()
        }
    }, CVCompElement.prototype.setElements = function(t) {
        this.elements = t
    }, CVCompElement.prototype.getElements = function() {
        return this.elements
    }, CVCompElement.prototype.destroy = function() {
        var t, e = this.layers.length;
        for (t = e - 1; t >= 0; t -= 1) this.elements[t].destroy();
        this.layers = null, this.elements = null, this._parent.destroy.call()
    }, CVCompElement.prototype.checkLayers = CanvasRenderer.prototype.checkLayers, CVCompElement.prototype.buildItem = CanvasRenderer.prototype.buildItem, CVCompElement.prototype.checkPendingElements = CanvasRenderer.prototype.checkPendingElements, CVCompElement.prototype.addPendingElement = CanvasRenderer.prototype.addPendingElement, CVCompElement.prototype.buildAllItems = CanvasRenderer.prototype.buildAllItems, CVCompElement.prototype.createItem = CanvasRenderer.prototype.createItem, CVCompElement.prototype.createImage = CanvasRenderer.prototype.createImage, CVCompElement.prototype.createComp = CanvasRenderer.prototype.createComp, CVCompElement.prototype.createSolid = CanvasRenderer.prototype.createSolid, CVCompElement.prototype.createShape = CanvasRenderer.prototype.createShape, CVCompElement.prototype.createText = CanvasRenderer.prototype.createText, CVCompElement.prototype.createBase = CanvasRenderer.prototype.createBase, CVCompElement.prototype.buildElementParenting = CanvasRenderer.prototype.buildElementParenting, createElement(CVBaseElement, CVImageElement), CVImageElement.prototype.createElements = function() {
        var t = function() {
                if (this.globalData.elementLoaded(), this.assetData.w !== this.img.width || this.assetData.h !== this.img.height) {
                    var t = document.createElement("canvas");
                    t.width = this.assetData.w, t.height = this.assetData.h;
                    var e, s, r = t.getContext("2d"),
                        i = this.img.width,
                        a = this.img.height,
                        n = i / a,
                        o = this.assetData.w / this.assetData.h;
                    n > o ? (s = a, e = s * o) : (e = i, s = e / o), r.drawImage(this.img, (i - e) / 2, (a - s) / 2, e, s, 0, 0, this.assetData.w, this.assetData.h), this.img = t
                }
            }.bind(this),
            e = function() {
                this.failed = !0, this.globalData.elementLoaded()
            }.bind(this);
        this.img = new Image, this.img.addEventListener("load", t, !1), this.img.addEventListener("error", e, !1);
        var s = this.globalData.getAssetsPath(this.assetData);
        this.img.src = s, this._parent.createElements.call(this)
    }, CVImageElement.prototype.renderFrame = function(t) {
        if (!this.failed && this._parent.renderFrame.call(this, t) !== !1) {
            var e = this.canvasContext;
            this.globalData.renderer.save();
            var s = this.finalTransform.mat.props;
            this.globalData.renderer.ctxTransform(s), this.globalData.renderer.ctxOpacity(this.finalTransform.opacity), e.drawImage(this.img, 0, 0), this.globalData.renderer.restore(this.data.hasMask), this.firstFrame && (this.firstFrame = !1)
        }
    }, CVImageElement.prototype.destroy = function() {
        this.img = null, this._parent.destroy.call()
    }, CVMaskElement.prototype.getMaskProperty = function(t) {
        return this.viewData[t]
    }, CVMaskElement.prototype.prepareFrame = function(t) {
        var e, s = this.dynamicProperties.length;
        for (e = 0; s > e; e += 1) this.dynamicProperties[e].getValue(t), this.dynamicProperties[e].mdf && (this.element.globalData.mdf = !0)
    }, CVMaskElement.prototype.renderFrame = function(t) {
        var e, s, r, i, a, n = this.element.canvasContext,
            o = this.data.masksProperties.length,
            h = !1;
        for (e = 0; o > e; e++)
            if ("n" !== this.masksProperties[e].mode) {
                h === !1 && (n.beginPath(), h = !0), this.masksProperties[e].inv && (n.moveTo(0, 0), n.lineTo(this.element.globalData.compWidth, 0), n.lineTo(this.element.globalData.compWidth, this.element.globalData.compHeight), n.lineTo(0, this.element.globalData.compHeight), n.lineTo(0, 0)), a = this.viewData[e].v, s = t ? t.applyToPointArray(a.v[0][0], a.v[0][1], 0) : a.v[0], n.moveTo(s[0], s[1]);
                var l, p = a.v.length;
                for (l = 1; p > l; l++) s = t ? t.applyToPointArray(a.o[l - 1][0], a.o[l - 1][1], 0) : a.o[l - 1], r = t ? t.applyToPointArray(a.i[l][0], a.i[l][1], 0) : a.i[l], i = t ? t.applyToPointArray(a.v[l][0], a.v[l][1], 0) : a.v[l], n.bezierCurveTo(s[0], s[1], r[0], r[1], i[0], i[1]);
                s = t ? t.applyToPointArray(a.o[l - 1][0], a.o[l - 1][1], 0) : a.o[l - 1], r = t ? t.applyToPointArray(a.i[0][0], a.i[0][1], 0) : a.i[0], i = t ? t.applyToPointArray(a.v[0][0], a.v[0][1], 0) : a.v[0], n.bezierCurveTo(s[0], s[1], r[0], r[1], i[0], i[1])
            }
        h && n.clip()
    }, CVMaskElement.prototype.getMask = function(t) {
        for (var e = 0, s = this.masksProperties.length; s > e;) {
            if (this.masksProperties[e].nm === t) return {
                maskPath: this.viewData[e].pv
            };
            e += 1
        }
    }, CVMaskElement.prototype.destroy = function() {
        this.element = null
    }, createElement(CVBaseElement, CVShapeElement), CVShapeElement.prototype.lcEnum = {
        1: "butt",
        2: "round",
        3: "butt"
    }, CVShapeElement.prototype.ljEnum = {
        1: "miter",
        2: "round",
        3: "butt"
    }, CVShapeElement.prototype.transformHelper = {
        opacity: 1,
        mat: new Matrix,
        matMdf: !1,
        opMdf: !1
    }, CVShapeElement.prototype.dashResetter = [], CVShapeElement.prototype.createElements = function() {
        this._parent.createElements.call(this), this.searchShapes(this.shapesData, this.viewData, this.dynamicProperties)
    }, CVShapeElement.prototype.searchShapes = function(t, e, s) {
        var r, i, a, n, o = t.length - 1,
            h = [],
            l = [];
        for (r = o; r >= 0; r -= 1)
            if ("fl" == t[r].ty || "st" == t[r].ty) {
                if (n = {
                        type: t[r].ty,
                        elements: []
                    }, e[r] = {}, ("fl" == t[r].ty || "st" == t[r].ty) && (e[r].c = PropertyFactory.getProp(this, t[r].c, 1, 255, s), e[r].c.k || (n.co = "rgb(" + bm_floor(e[r].c.v[0]) + "," + bm_floor(e[r].c.v[1]) + "," + bm_floor(e[r].c.v[2]) + ")")), e[r].o = PropertyFactory.getProp(this, t[r].o, 0, .01, s), "st" == t[r].ty && (n.lc = this.lcEnum[t[r].lc] || "round", n.lj = this.ljEnum[t[r].lj] || "round", 1 == t[r].lj && (n.ml = t[r].ml), e[r].w = PropertyFactory.getProp(this, t[r].w, 0, null, s), e[r].w.k || (n.wi = e[r].w.v), t[r].d)) {
                    var p = PropertyFactory.getDashProp(this, t[r].d, "canvas", s);
                    e[r].d = p, e[r].d.k || (n.da = e[r].d.dasharray, n["do"] = e[r].d.dashoffset)
                }
                this.stylesList.push(n), e[r].style = n, h.push(e[r].style)
            } else if ("gr" == t[r].ty) e[r] = {
            it: []
        }, this.searchShapes(t[r].it, e[r].it, s);
        else if ("tr" == t[r].ty) e[r] = {
            transform: {
                mat: new Matrix,
                opacity: 1,
                matMdf: !1,
                opMdf: !1,
                op: PropertyFactory.getProp(this, t[r].o, 0, .01, s),
                mProps: PropertyFactory.getProp(this, t[r], 2, null, s)
            },
            elements: []
        };
        else if ("sh" == t[r].ty || "rc" == t[r].ty || "el" == t[r].ty || "sr" == t[r].ty) {
            e[r] = {
                nodes: [],
                trNodes: [],
                tr: [0, 0, 0, 0, 0, 0]
            };
            var m = 4;
            "rc" == t[r].ty ? m = 5 : "el" == t[r].ty ? m = 6 : "sr" == t[r].ty && (m = 7), e[r].sh = ShapePropertyFactory.getShapeProp(this, t[r], m, s), this.shapes.push(e[r].sh), this.addShapeToModifiers(e[r].sh), a = this.stylesList.length;
            var f = !1,
                d = !1;
            for (i = 0; a > i; i += 1) this.stylesList[i].closed || (this.stylesList[i].elements.push(e[r]), "st" === this.stylesList[i].type ? f = !0 : d = !0);
            e[r].st = f, e[r].fl = d
        } else if ("tm" == t[r].ty || "rd" == t[r].ty) {
            var c = ShapeModifiers.getModifier(t[r].ty);
            c.init(this, t[r], s), this.shapeModifiers.push(c), l.push(c), e[r] = c
        }
        for (o = h.length, r = 0; o > r; r += 1) h[r].closed = !0;
        for (o = l.length, r = 0; o > r; r += 1) l[r].closed = !0
    }, CVShapeElement.prototype.addShapeToModifiers = IShapeElement.prototype.addShapeToModifiers, CVShapeElement.prototype.renderModifiers = IShapeElement.prototype.renderModifiers, CVShapeElement.prototype.renderFrame = function(t) {
        this._parent.renderFrame.call(this, t) !== !1 && (this.transformHelper.mat.reset(), this.transformHelper.opacity = this.finalTransform.opacity, this.transformHelper.matMdf = !1, this.transformHelper.opMdf = this.finalTransform.opMdf, this.renderModifiers(), this.renderShape(this.transformHelper, null, null, !0), this.data.hasMask && this.globalData.renderer.restore(!0))
    }, CVShapeElement.prototype.renderShape = function(t, e, s, r) {
        var i, a;
        if (!e)
            for (e = this.shapesData, a = this.stylesList.length, i = 0; a > i; i += 1) this.stylesList[i].d = "", this.stylesList[i].mdf = !1;
        s || (s = this.viewData), a = e.length - 1;
        var n, o;
        for (n = t, i = a; i >= 0; i -= 1)
            if ("tr" == e[i].ty) {
                n = s[i].transform;
                var h = s[i].transform.mProps.v.props;
                if (n.matMdf = n.mProps.mdf, n.opMdf = n.op.mdf, o = n.mat, o.cloneFromProps(h), t) {
                    var l = t.mat.props;
                    n.opacity = t.opacity, n.opacity *= s[i].transform.op.v, n.matMdf = t.matMdf ? !0 : n.matMdf, n.opMdf = t.opMdf ? !0 : n.opMdf, o.transform(l[0], l[1], l[2], l[3], l[4], l[5], l[6], l[7], l[8], l[9], l[10], l[11], l[12], l[13], l[14], l[15])
                } else n.opacity = n.op.o
            } else "sh" == e[i].ty || "el" == e[i].ty || "rc" == e[i].ty || "sr" == e[i].ty ? this.renderPath(e[i], s[i], n) : "fl" == e[i].ty ? this.renderFill(e[i], s[i], n) : "st" == e[i].ty ? this.renderStroke(e[i], s[i], n) : "gr" == e[i].ty ? this.renderShape(n, e[i].it, s[i].it) : "tm" == e[i].ty;
        if (r) {
            a = this.stylesList.length;
            var p, m, f, d, c, u, y, g = this.globalData.renderer,
                v = this.globalData.canvasContext;
            for (g.save(), g.ctxTransform(this.finalTransform.mat.props), i = 0; a > i; i += 1)
                if (y = this.stylesList[i].type, "st" !== y || 0 !== this.stylesList[i].wi) {
                    for (g.save(), c = this.stylesList[i].elements, "st" === y ? (v.strokeStyle = this.stylesList[i].co, v.lineWidth = this.stylesList[i].wi, v.lineCap = this.stylesList[i].lc, v.lineJoin = this.stylesList[i].lj, v.miterLimit = this.stylesList[i].ml || 0) : v.fillStyle = this.stylesList[i].co, g.ctxOpacity(this.stylesList[i].coOp), "st" !== y && v.beginPath(), m = c.length, p = 0; m > p; p += 1) {
                        for ("st" === y && (v.beginPath(), this.stylesList[i].da ? (v.setLineDash(this.stylesList[i].da), v.lineDashOffset = this.stylesList[i]["do"], this.globalData.isDashed = !0) : this.globalData.isDashed && (v.setLineDash(this.dashResetter), this.globalData.isDashed = !1)), u = c[p].trNodes, d = u.length, f = 0; d > f; f += 1) "m" == u[f].t ? v.moveTo(u[f].p[0], u[f].p[1]) : "c" == u[f].t ? v.bezierCurveTo(u[f].p1[0], u[f].p1[1], u[f].p2[0], u[f].p2[1], u[f].p3[0], u[f].p3[1]) : v.closePath();
                        "st" === y && v.stroke()
                    }
                    "st" !== y && v.fill(), g.restore()
                }
            g.restore(), this.firstFrame && (this.firstFrame = !1)
        }
    }, CVShapeElement.prototype.renderPath = function(t, e, s) {
        var r, i, a, n, o = s.matMdf || e.sh.mdf || this.firstFrame;
        if (o) {
            var h = e.sh.paths;
            n = h.length;
            var l = e.trNodes;
            for (l.length = 0, a = 0; n > a; a += 1) {
                var p = h[a];
                if (p && p.v) {
                    for (r = p.v.length, i = 1; r > i; i += 1) 1 == i && l.push({
                        t: "m",
                        p: s.mat.applyToPointArray(p.v[0][0], p.v[0][1], 0)
                    }), l.push({
                        t: "c",
                        p1: s.mat.applyToPointArray(p.o[i - 1][0], p.o[i - 1][1], 0),
                        p2: s.mat.applyToPointArray(p.i[i][0], p.i[i][1], 0),
                        p3: s.mat.applyToPointArray(p.v[i][0], p.v[i][1], 0)
                    });
                    1 == r && l.push({
                        t: "m",
                        p: s.mat.applyToPointArray(p.v[0][0], p.v[0][1], 0)
                    }), p.c && r && (l.push({
                        t: "c",
                        p1: s.mat.applyToPointArray(p.o[i - 1][0], p.o[i - 1][1], 0),
                        p2: s.mat.applyToPointArray(p.i[0][0], p.i[0][1], 0),
                        p3: s.mat.applyToPointArray(p.v[0][0], p.v[0][1], 0)
                    }), l.push({
                        t: "z"
                    })), e.lStr = l
                }
            }
            if (e.st)
                for (i = 0; 16 > i; i += 1) e.tr[i] = s.mat.props[i];
            e.trNodes = l
        }
    }, CVShapeElement.prototype.renderFill = function(t, e, s) {
        var r = e.style;
        (e.c.mdf || this.firstFrame) && (r.co = "rgb(" + bm_floor(e.c.v[0]) + "," + bm_floor(e.c.v[1]) + "," + bm_floor(e.c.v[2]) + ")"), (e.o.mdf || s.opMdf || this.firstFrame) && (r.coOp = e.o.v * s.opacity)
    }, CVShapeElement.prototype.renderStroke = function(t, e, s) {
        var r = e.style,
            i = e.d;
        i && (i.mdf || this.firstFrame) && (r.da = i.dasharray, r["do"] = i.dashoffset), (e.c.mdf || this.firstFrame) && (r.co = "rgb(" + bm_floor(e.c.v[0]) + "," + bm_floor(e.c.v[1]) + "," + bm_floor(e.c.v[2]) + ")"), (e.o.mdf || s.opMdf || this.firstFrame) && (r.coOp = e.o.v * s.opacity), (e.w.mdf || this.firstFrame) && (r.wi = e.w.v)
    }, CVShapeElement.prototype.destroy = function() {
        this.shapesData = null, this.globalData = null, this.canvasContext = null, this.stylesList.length = 0, this.viewData.length = 0, this._parent.destroy.call()
    }, createElement(CVBaseElement, CVSolidElement), CVSolidElement.prototype.renderFrame = function(t) {
        if (this._parent.renderFrame.call(this, t) !== !1) {
            var e = this.canvasContext;
            this.globalData.renderer.save(), this.globalData.renderer.ctxTransform(this.finalTransform.mat.props), this.globalData.renderer.ctxOpacity(this.finalTransform.opacity), e.fillStyle = this.data.sc, e.fillRect(0, 0, this.data.sw, this.data.sh), this.globalData.renderer.restore(this.data.hasMask), this.firstFrame && (this.firstFrame = !1)
        }
    }, createElement(CVBaseElement, CVTextElement), CVTextElement.prototype.init = ITextElement.prototype.init, CVTextElement.prototype.getMeasures = ITextElement.prototype.getMeasures, CVTextElement.prototype.getMult = ITextElement.prototype.getMult, CVTextElement.prototype.prepareFrame = ITextElement.prototype.prepareFrame, CVTextElement.prototype.tHelper = document.createElement("canvas").getContext("2d"), CVTextElement.prototype.createElements = function() {
        this._parent.createElements.call(this)
    }, CVTextElement.prototype.buildNewText = function() {
        var t = this.currentTextDocumentData;
        this.renderedLetters = Array.apply(null, {
            length: this.currentTextDocumentData.l ? this.currentTextDocumentData.l.length : 0
        });
        var e = !1;
        t.fc ? (e = !0, this.values.fill = "rgb(" + Math.round(255 * t.fc[0]) + "," + Math.round(255 * t.fc[1]) + "," + Math.round(255 * t.fc[2]) + ")") : this.values.fill = "rgba(0,0,0,0)", this.fill = e;
        var s = !1;
        t.sc && (s = !0, this.values.stroke = "rgb(" + Math.round(255 * t.sc[0]) + "," + Math.round(255 * t.sc[1]) + "," + Math.round(255 * t.sc[2]) + ")", this.values.sWidth = t.sw);
        var r, i, a = this.globalData.fontManager.getFontByName(t.f),
            n = t.l,
            o = this.mHelper;
        this.stroke = s, this.values.fValue = t.s + "px " + this.globalData.fontManager.getFontByName(t.f).fFamily, i = t.t.length, this.tHelper.font = this.values.fValue;
        var h, l, p, m, f, d, c, u, y, g, v = this.data.singleShape;
        if (v) var b = 0,
            E = 0,
            P = t.lineWidths,
            k = t.boxWidth,
            x = !0;
        var S = 0;
        for (r = 0; i > r; r += 1) {
            h = this.globalData.fontManager.getCharData(t.t.charAt(r), a.fStyle, this.globalData.fontManager.getFontByName(t.f).fFamily);
            var l;
            if (l = h ? h.data : null, o.reset(), v && n[r].n && (b = 0, E += t.yOffset, E += x ? 1 : 0, x = !1), l && l.shapes) {
                if (f = l.shapes[0].it, c = f.length, o.scale(t.s / 100, t.s / 100), v) {
                    switch (t.ps && o.translate(t.ps[0], t.ps[1] + t.ascent, 0), t.j) {
                        case 1:
                            o.translate(t.justifyOffset + (k - P[n[r].line]), 0, 0);
                            break;
                        case 2:
                            o.translate(t.justifyOffset + (k - P[n[r].line]) / 2, 0, 0)
                    }
                    o.translate(b, E, 0)
                }
                for (y = new Array(c), d = 0; c > d; d += 1) {
                    for (m = f[d].ks.k.i.length, u = f[d].ks.k, g = [], p = 1; m > p; p += 1) 1 == p && g.push(o.applyToX(u.v[0][0], u.v[0][1], 0), o.applyToY(u.v[0][0], u.v[0][1], 0)), g.push(o.applyToX(u.o[p - 1][0], u.o[p - 1][1], 0), o.applyToY(u.o[p - 1][0], u.o[p - 1][1], 0), o.applyToX(u.i[p][0], u.i[p][1], 0), o.applyToY(u.i[p][0], u.i[p][1], 0), o.applyToX(u.v[p][0], u.v[p][1], 0), o.applyToY(u.v[p][0], u.v[p][1], 0));
                    g.push(o.applyToX(u.o[p - 1][0], u.o[p - 1][1], 0), o.applyToY(u.o[p - 1][0], u.o[p - 1][1], 0), o.applyToX(u.i[0][0], u.i[0][1], 0), o.applyToY(u.i[0][0], u.i[0][1], 0), o.applyToX(u.v[0][0], u.v[0][1], 0), o.applyToY(u.v[0][0], u.v[0][1], 0)), y[d] = g
                }
            } else y = [];
            v && (b += n[r].l), this.textSpans[S] ? this.textSpans[S].elem = y : this.textSpans[S] = {
                elem: y
            }, S += 1
        }
    }, CVTextElement.prototype.renderFrame = function(t) {
        if (this._parent.renderFrame.call(this, t) !== !1) {
            var e = this.canvasContext,
                s = this.finalTransform.mat.props;
            this.globalData.renderer.save(), this.globalData.renderer.ctxTransform(s), this.globalData.renderer.ctxOpacity(this.finalTransform.opacity), e.font = this.values.fValue, e.lineCap = "butt", e.lineJoin = "miter", e.miterLimit = 4, this.data.singleShape || this.getMeasures();
            var r, i, a, n, o, h, l = this.renderedLetters,
                p = this.currentTextDocumentData.l;
            i = p.length;
            var m, f, d, c = null,
                u = null,
                y = null;
            for (r = 0; i > r; r += 1)
                if (!p[r].n) {
                    if (m = l[r], m && (this.globalData.renderer.save(), this.globalData.renderer.ctxTransform(m.props), this.globalData.renderer.ctxOpacity(m.o)), this.fill) {
                        for (m && m.fc ? c !== m.fc && (c = m.fc, e.fillStyle = m.fc) : c !== this.values.fill && (c = this.values.fill, e.fillStyle = this.values.fill), f = this.textSpans[r].elem, n = f.length, this.globalData.canvasContext.beginPath(), a = 0; n > a; a += 1)
                            for (d = f[a], h = d.length, this.globalData.canvasContext.moveTo(d[0], d[1]), o = 2; h > o; o += 6) this.globalData.canvasContext.bezierCurveTo(d[o], d[o + 1], d[o + 2], d[o + 3], d[o + 4], d[o + 5]);
                        this.globalData.canvasContext.closePath(), this.globalData.canvasContext.fill()
                    }
                    if (this.stroke) {
                        for (m && m.sw ? y !== m.sw && (y = m.sw, e.lineWidth = m.sw) : y !== this.values.sWidth && (y = this.values.sWidth, e.lineWidth = this.values.sWidth), m && m.sc ? u !== m.sc && (u = m.sc, e.strokeStyle = m.sc) : u !== this.values.stroke && (u = this.values.stroke, e.strokeStyle = this.values.stroke), f = this.textSpans[r].elem, n = f.length, this.globalData.canvasContext.beginPath(), a = 0; n > a; a += 1)
                            for (d = f[a], h = d.length, this.globalData.canvasContext.moveTo(d[0], d[1]), o = 2; h > o; o += 6) this.globalData.canvasContext.bezierCurveTo(d[o], d[o + 1], d[o + 2], d[o + 3], d[o + 4], d[o + 5]);
                        this.globalData.canvasContext.closePath(), this.globalData.canvasContext.stroke()
                    }
                    m && this.globalData.renderer.restore()
                }
            this.globalData.renderer.restore(this.data.hasMask), this.firstFrame && (this.firstFrame = !1)
        }
    }, createElement(BaseElement, HBaseElement), HBaseElement.prototype.checkBlendMode = function() {}, HBaseElement.prototype.setBlendMode = BaseElement.prototype.setBlendMode, HBaseElement.prototype.getBaseElement = function() {
        return this.baseElement
    }, HBaseElement.prototype.createElements = function() {
        this.data.hasMask ? (this.layerElement = document.createElementNS(svgNS, "svg"), styleDiv(this.layerElement), this.baseElement = this.layerElement, this.maskedElement = this.layerElement) : this.layerElement = this.parentContainer, this.transformedElement = this.layerElement, !this.data.ln || 4 !== this.data.ty && 0 !== this.data.ty || (this.layerElement === this.parentContainer && (this.layerElement = document.createElementNS(svgNS, "g"), this.baseElement = this.layerElement), this.layerElement.setAttribute("id", this.data.ln)), this.setBlendMode(), this.layerElement !== this.parentContainer && (this.placeholder = null),
            this.checkParenting()
    }, HBaseElement.prototype.renderFrame = function(t) {
        if (3 === this.data.ty) return !1;
        if (this.currentFrameNum === this.lastNum || !this.isVisible) return this.isVisible;
        this.lastNum = this.currentFrameNum, this.finalTransform.opMdf = this.finalTransform.op.mdf, this.finalTransform.matMdf = this.finalTransform.mProp.mdf, this.finalTransform.opacity = this.finalTransform.op.v, this.firstFrame && (this.finalTransform.opMdf = !0, this.finalTransform.matMdf = !0);
        var e, s = this.finalTransform.mat;
        if (this.hierarchy) {
            var r, i = this.hierarchy.length;
            for (e = this.finalTransform.mProp.v.props, s.cloneFromProps(e), r = 0; i > r; r += 1) this.finalTransform.matMdf = this.hierarchy[r].finalTransform.mProp.mdf ? !0 : this.finalTransform.matMdf, e = this.hierarchy[r].finalTransform.mProp.v.props, s.transform(e[0], e[1], e[2], e[3], e[4], e[5], e[6], e[7], e[8], e[9], e[10], e[11], e[12], e[13], e[14], e[15])
        } else this.isVisible && this.finalTransform.matMdf && (t ? (e = this.finalTransform.mProp.v.props, s.cloneFromProps(e)) : s.cloneFromProps(this.finalTransform.mProp.v.props));
        return this.data.hasMask && this.maskManager.renderFrame(s), t && (e = t.mat.props, s.cloneFromProps(e), this.finalTransform.opacity *= t.opacity, this.finalTransform.opMdf = t.opMdf ? !0 : this.finalTransform.opMdf, this.finalTransform.matMdf = t.matMdf ? !0 : this.finalTransform.matMdf), this.finalTransform.matMdf && (this.transformedElement.style.transform = this.transformedElement.style.webkitTransform = s.toCSS(), this.finalMat = s), this.finalTransform.opMdf && (this.transformedElement.style.opacity = this.finalTransform.opacity), this.isVisible
    }, HBaseElement.prototype.destroy = function() {
        this.layerElement = null, this.transformedElement = null, this.parentContainer = null, this.matteElement && (this.matteElement = null), this.maskManager && (this.maskManager.destroy(), this.maskManager = null)
    }, HBaseElement.prototype.getDomElement = function() {
        return this.layerElement
    }, HBaseElement.prototype.addMasks = function(t) {
        this.maskManager = new MaskElement(t, this, this.globalData)
    }, HBaseElement.prototype.hide = function() {}, HBaseElement.prototype.setMatte = function() {}, HBaseElement.prototype.buildElementParenting = HybridRenderer.prototype.buildElementParenting, createElement(HBaseElement, HSolidElement), HSolidElement.prototype.createElements = function() {
        var t = document.createElement("div");
        styleDiv(t);
        var e = document.createElementNS(svgNS, "svg");
        styleDiv(e), e.setAttribute("width", this.data.sw), e.setAttribute("height", this.data.sh), t.appendChild(e), this.layerElement = t, this.transformedElement = t, this.baseElement = t, this.innerElem = t, this.data.ln && this.innerElem.setAttribute("id", this.data.ln), 0 !== this.data.bm && this.setBlendMode();
        var s = document.createElementNS(svgNS, "rect");
        s.setAttribute("width", this.data.sw), s.setAttribute("height", this.data.sh), s.setAttribute("fill", this.data.sc), e.appendChild(s), this.data.hasMask && (this.maskedElement = s), this.checkParenting()
    }, HSolidElement.prototype.hide = IImageElement.prototype.hide, HSolidElement.prototype.renderFrame = IImageElement.prototype.renderFrame, HSolidElement.prototype.destroy = IImageElement.prototype.destroy, createElement(HBaseElement, HCompElement), HCompElement.prototype.createElements = function() {
        var t = document.createElement("div");
        if (styleDiv(t), this.data.ln && t.setAttribute("id", this.data.ln), t.style.clip = "rect(0px, " + this.data.w + "px, " + this.data.h + "px, 0px)", this.data.hasMask) {
            var e = document.createElementNS(svgNS, "svg");
            styleDiv(e), e.setAttribute("width", this.data.w), e.setAttribute("height", this.data.h);
            var s = document.createElementNS(svgNS, "g");
            e.appendChild(s), t.appendChild(e), this.maskedElement = s, this.baseElement = t, this.layerElement = s, this.transformedElement = t
        } else this.layerElement = t, this.baseElement = this.layerElement, this.transformedElement = t;
        this.checkParenting()
    }, HCompElement.prototype.hide = ICompElement.prototype.hide, HCompElement.prototype.prepareFrame = ICompElement.prototype.prepareFrame, HCompElement.prototype.setElements = ICompElement.prototype.setElements, HCompElement.prototype.getElements = ICompElement.prototype.getElements, HCompElement.prototype.destroy = ICompElement.prototype.destroy, HCompElement.prototype.renderFrame = function(t) {
        var e, s = this._parent.renderFrame.call(this, t),
            r = this.layers.length;
        if (s === !1) return void this.hide();
        for (this.hidden = !1, e = 0; r > e; e += 1)(this.completeLayers || this.elements[e]) && this.elements[e].renderFrame();
        this.firstFrame && (this.firstFrame = !1)
    }, HCompElement.prototype.checkLayers = BaseRenderer.prototype.checkLayers, HCompElement.prototype.buildItem = HybridRenderer.prototype.buildItem, HCompElement.prototype.checkPendingElements = HybridRenderer.prototype.checkPendingElements, HCompElement.prototype.addPendingElement = HybridRenderer.prototype.addPendingElement, HCompElement.prototype.buildAllItems = BaseRenderer.prototype.buildAllItems, HCompElement.prototype.createItem = HybridRenderer.prototype.createItem, HCompElement.prototype.buildElementParenting = HybridRenderer.prototype.buildElementParenting, HCompElement.prototype.createImage = HybridRenderer.prototype.createImage, HCompElement.prototype.createComp = HybridRenderer.prototype.createComp, HCompElement.prototype.createSolid = HybridRenderer.prototype.createSolid, HCompElement.prototype.createShape = HybridRenderer.prototype.createShape, HCompElement.prototype.createText = HybridRenderer.prototype.createText, HCompElement.prototype.createBase = HybridRenderer.prototype.createBase, HCompElement.prototype.appendElementInPos = HybridRenderer.prototype.appendElementInPos, createElement(HBaseElement, HShapeElement);
    var parent = HShapeElement.prototype._parent;
    extendPrototype(IShapeElement, HShapeElement), HShapeElement.prototype._parent = parent, HShapeElement.prototype.createElements = function() {
        var t = document.createElement("div");
        styleDiv(t);
        var e = document.createElementNS(svgNS, "svg");
        styleDiv(e);
        var s = this.comp.data ? this.comp.data : this.globalData.compSize;
        if (e.setAttribute("width", s.w), e.setAttribute("height", s.h), this.data.hasMask) {
            var r = document.createElementNS(svgNS, "g");
            t.appendChild(e), e.appendChild(r), this.maskedElement = r, this.layerElement = r, this.shapesContainer = r
        } else t.appendChild(e), this.layerElement = e, this.shapesContainer = document.createElementNS(svgNS, "g"), this.layerElement.appendChild(this.shapesContainer);
        this.data.hd || (this.baseElement = t), this.innerElem = t, this.data.ln && this.innerElem.setAttribute("id", this.data.ln), this.searchShapes(this.shapesData, this.viewData, this.layerElement, this.dynamicProperties, 0), this.buildExpressionInterface(), this.layerElement = t, this.transformedElement = t, this.shapeCont = e, 0 !== this.data.bm && this.setBlendMode(), this.checkParenting()
    }, HShapeElement.prototype.renderFrame = function(t) {
        var e = this._parent.renderFrame.call(this, t);
        if (e === !1) return void this.hide();
        if (this.hidden && (this.layerElement.style.display = "block", this.hidden = !1), this.renderModifiers(), this.addedTransforms.mdf = this.finalTransform.matMdf, this.addedTransforms.mats.length = 1, this.addedTransforms.mats[0] = this.finalTransform.mat, this.renderShape(null, null, !0, null), this.isVisible && (this.elemMdf || this.firstFrame)) {
            var s = this.shapeCont.getBBox(),
                r = !1;
            this.currentBBox.w !== s.width && (this.currentBBox.w = s.width, this.shapeCont.setAttribute("width", s.width), r = !0), this.currentBBox.h !== s.height && (this.currentBBox.h = s.height, this.shapeCont.setAttribute("height", s.height), r = !0), (r || this.currentBBox.x !== s.x || this.currentBBox.y !== s.y) && (this.currentBBox.w = s.width, this.currentBBox.h = s.height, this.currentBBox.x = s.x, this.currentBBox.y = s.y, this.shapeCont.setAttribute("viewBox", this.currentBBox.x + " " + this.currentBBox.y + " " + this.currentBBox.w + " " + this.currentBBox.h), this.shapeCont.style.transform = this.shapeCont.style.webkitTransform = "translate(" + this.currentBBox.x + "px," + this.currentBBox.y + "px)")
        }
    }, createElement(HBaseElement, HTextElement), HTextElement.prototype.init = ITextElement.prototype.init, HTextElement.prototype.getMeasures = ITextElement.prototype.getMeasures, HTextElement.prototype.createPathShape = ITextElement.prototype.createPathShape, HTextElement.prototype.prepareFrame = ITextElement.prototype.prepareFrame, HTextElement.prototype.createElements = function() {
        this.isMasked = this.checkMasks();
        var t = document.createElement("div");
        if (styleDiv(t), this.layerElement = t, this.transformedElement = t, this.isMasked) {
            this.renderType = "svg";
            var e = document.createElementNS(svgNS, "svg");
            styleDiv(e), this.cont = e, this.compW = this.comp.data ? this.comp.data.w : this.globalData.compSize.w, this.compH = this.comp.data ? this.comp.data.h : this.globalData.compSize.h, e.setAttribute("width", this.compW), e.setAttribute("height", this.compH);
            var s = document.createElementNS(svgNS, "g");
            e.appendChild(s), t.appendChild(e), this.maskedElement = s, this.innerElem = s
        } else this.renderType = "html", this.innerElem = t;
        this.baseElement = t, this.checkParenting()
    }, HTextElement.prototype.buildNewText = function() {
        var t = this.currentTextDocumentData;
        this.renderedLetters = Array.apply(null, {
            length: this.currentTextDocumentData.l ? this.currentTextDocumentData.l.length : 0
        }), this.innerElem.style.color = this.innerElem.style.fill = t.fc ? "rgb(" + Math.round(255 * t.fc[0]) + "," + Math.round(255 * t.fc[1]) + "," + Math.round(255 * t.fc[2]) + ")" : "rgba(0,0,0,0)", t.sc && (this.innerElem.style.stroke = "rgb(" + Math.round(255 * t.sc[0]) + "," + Math.round(255 * t.sc[1]) + "," + Math.round(255 * t.sc[2]) + ")", this.innerElem.style.strokeWidth = t.sw + "px");
        var e = this.globalData.fontManager.getFontByName(t.f);
        if (!this.globalData.fontManager.chars)
            if (this.innerElem.style.fontSize = t.s + "px", this.innerElem.style.lineHeight = t.s + "px", e.fClass) this.innerElem.className = e.fClass;
            else {
                this.innerElem.style.fontFamily = e.fFamily;
                var s = t.fWeight,
                    r = t.fStyle;
                this.innerElem.style.fontStyle = r, this.innerElem.style.fontWeight = s
            }
        var i, a, n = t.l;
        a = n.length;
        var o, h, l, p, m = this.mHelper,
            f = "",
            d = 0;
        for (i = 0; a > i; i += 1) {
            if (this.globalData.fontManager.chars ? (this.textPaths[d] ? o = this.textPaths[d] : (o = document.createElementNS(svgNS, "path"), o.setAttribute("stroke-linecap", "butt"), o.setAttribute("stroke-linejoin", "round"), o.setAttribute("stroke-miterlimit", "4")), this.isMasked || (this.textSpans[d] ? (h = this.textSpans[d], l = h.children[0]) : (h = document.createElement("div"), l = document.createElementNS(svgNS, "svg"), l.appendChild(o), styleDiv(h)))) : this.isMasked ? o = this.textPaths[d] ? this.textPaths[d] : document.createElementNS(svgNS, "text") : this.textSpans[d] ? (h = this.textSpans[d], o = this.textPaths[d]) : (h = document.createElement("span"), styleDiv(h), o = document.createElement("span"), styleDiv(o), h.appendChild(o)), this.globalData.fontManager.chars) {
                var c, u = this.globalData.fontManager.getCharData(t.t.charAt(i), e.fStyle, this.globalData.fontManager.getFontByName(t.f).fFamily);
                if (c = u ? u.data : null, m.reset(), c && c.shapes && (p = c.shapes[0].it, m.scale(t.s / 100, t.s / 100), f = this.createPathShape(m, p), o.setAttribute("d", f)), this.isMasked) this.innerElem.appendChild(o);
                else if (this.innerElem.appendChild(h), c && c.shapes) {
                    document.body.appendChild(l);
                    var y = l.getBBox();
                    l.setAttribute("width", y.width), l.setAttribute("height", y.height), l.setAttribute("viewBox", y.x + " " + y.y + " " + y.width + " " + y.height), l.style.transform = l.style.webkitTransform = "translate(" + y.x + "px," + y.y + "px)", n[i].yOffset = y.y, h.appendChild(l)
                } else l.setAttribute("width", 1), l.setAttribute("height", 1)
            } else o.textContent = n[i].val, o.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve"), this.isMasked ? this.innerElem.appendChild(o) : (this.innerElem.appendChild(h), o.style.transform = o.style.webkitTransform = "translate3d(0," + -t.s / 1.2 + "px,0)");
            this.textSpans[d] = this.isMasked ? o : h, this.textSpans[d].style.display = "block", this.textPaths[d] = o, d += 1
        }
        for (; d < this.textSpans.length;) this.textSpans[d].style.display = "none", d += 1
    }, HTextElement.prototype.hide = SVGTextElement.prototype.hide, HTextElement.prototype.renderFrame = function(t) {
        var e = this._parent.renderFrame.call(this, t);
        if (e === !1) return void this.hide();
        if (this.hidden && (this.hidden = !1, this.innerElem.style.display = "block", this.layerElement.style.display = "block"), this.data.singleShape) {
            if (!this.firstFrame && !this.lettersChangedFlag) return;
            this.isMasked && this.finalTransform.matMdf && (this.cont.setAttribute("viewBox", -this.finalTransform.mProp.p.v[0] + " " + -this.finalTransform.mProp.p.v[1] + " " + this.compW + " " + this.compH), this.cont.style.transform = this.cont.style.webkitTransform = "translate(" + -this.finalTransform.mProp.p.v[0] + "px," + -this.finalTransform.mProp.p.v[1] + "px)")
        }
        if (this.getMeasures(), this.lettersChangedFlag) {
            var s, r, i = this.renderedLetters,
                a = this.currentTextDocumentData.l;
            r = a.length;
            var n;
            for (s = 0; r > s; s += 1) a[s].n || (n = i[s], this.isMasked ? this.textSpans[s].setAttribute("transform", n.m) : this.textSpans[s].style.transform = this.textSpans[s].style.webkitTransform = n.m, this.textSpans[s].style.opacity = n.o, n.sw && this.textPaths[s].setAttribute("stroke-width", n.sw), n.sc && this.textPaths[s].setAttribute("stroke", n.sc), n.fc && (this.textPaths[s].setAttribute("fill", n.fc), this.textPaths[s].style.color = n.fc));
            if (this.isVisible && (this.elemMdf || this.firstFrame) && this.innerElem.getBBox) {
                var o = this.innerElem.getBBox();
                this.currentBBox.w !== o.width && (this.currentBBox.w = o.width, this.cont.setAttribute("width", o.width)), this.currentBBox.h !== o.height && (this.currentBBox.h = o.height, this.cont.setAttribute("height", o.height)), (this.currentBBox.w !== o.width || this.currentBBox.h !== o.height || this.currentBBox.x !== o.x || this.currentBBox.y !== o.y) && (this.currentBBox.w = o.width, this.currentBBox.h = o.height, this.currentBBox.x = o.x, this.currentBBox.y = o.y, this.cont.setAttribute("viewBox", this.currentBBox.x + " " + this.currentBBox.y + " " + this.currentBBox.w + " " + this.currentBBox.h), this.cont.style.transform = this.cont.style.webkitTransform = "translate(" + this.currentBBox.x + "px," + this.currentBBox.y + "px)")
            }
            this.firstFrame && (this.firstFrame = !1)
        }
    }, HTextElement.prototype.destroy = SVGTextElement.prototype.destroy, createElement(HBaseElement, HImageElement), HImageElement.prototype.createElements = function() {
        var t = this.globalData.getAssetsPath(this.assetData),
            e = new Image;
        if (this.data.hasMask) {
            var s = document.createElement("div");
            styleDiv(s);
            var r = document.createElementNS(svgNS, "svg");
            styleDiv(r), r.setAttribute("width", this.assetData.w), r.setAttribute("height", this.assetData.h), s.appendChild(r), this.imageElem = document.createElementNS(svgNS, "image"), this.imageElem.setAttribute("width", this.assetData.w + "px"), this.imageElem.setAttribute("height", this.assetData.h + "px"), this.imageElem.setAttributeNS("http://www.w3.org/1999/xlink", "href", t), r.appendChild(this.imageElem), this.layerElement = s, this.transformedElement = s, this.baseElement = s, this.innerElem = s, this.maskedElement = this.imageElem
        } else styleDiv(e), this.layerElement = e, this.baseElement = e, this.innerElem = e;
        e.src = t, this.data.ln && this.innerElem.setAttribute("id", this.data.ln), this.checkParenting()
    }, HImageElement.prototype.hide = HSolidElement.prototype.hide, HImageElement.prototype.renderFrame = HSolidElement.prototype.renderFrame, HImageElement.prototype.destroy = HSolidElement.prototype.destroy, createElement(HBaseElement, HCameraElement), HCameraElement.prototype.setup = function() {
        var t, e, s = this.comp.threeDElements.length;
        for (t = 0; s > t; t += 1) e = this.comp.threeDElements[t], e.perspectiveElem.style.perspective = e.perspectiveElem.style.webkitPerspective = this.pe.v + "px", e.container.style.transformOrigin = e.container.style.mozTransformOrigin = e.container.style.webkitTransformOrigin = "0px 0px 0px", e.perspectiveElem.style.transform = e.perspectiveElem.style.webkitTransform = "matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)"
    }, HCameraElement.prototype.createElements = function() {}, HCameraElement.prototype.hide = function() {}, HCameraElement.prototype.renderFrame = function() {
        var t, e, s = this.firstFrame;
        if (this.hierarchy)
            for (e = this.hierarchy.length, t = 0; e > t; t += 1) s = this.hierarchy[t].finalTransform.mProp.mdf ? !0 : s;
        if (s || this.p && this.p.mdf || this.px && (this.px.mdf || this.py.mdf || this.pz.mdf) || this.rx.mdf || this.ry.mdf || this.rz.mdf || this.or.mdf || this.a && this.a.mdf) {
            if (this.mat.reset(), this.p ? this.mat.translate(-this.p.v[0], -this.p.v[1], this.p.v[2]) : this.mat.translate(-this.px.v, -this.py.v, this.pz.v), this.a) {
                var r = [this.p.v[0] - this.a.v[0], this.p.v[1] - this.a.v[1], this.p.v[2] - this.a.v[2]],
                    i = Math.sqrt(Math.pow(r[0], 2) + Math.pow(r[1], 2) + Math.pow(r[2], 2)),
                    a = [r[0] / i, r[1] / i, r[2] / i],
                    n = Math.sqrt(a[2] * a[2] + a[0] * a[0]),
                    o = Math.atan2(a[1], n),
                    h = Math.atan2(a[0], -a[2]);
                this.mat.rotateY(h).rotateX(-o)
            }
            if (this.mat.rotateX(-this.rx.v).rotateY(-this.ry.v).rotateZ(this.rz.v), this.mat.rotateX(-this.or.v[0]).rotateY(-this.or.v[1]).rotateZ(this.or.v[2]), this.mat.translate(this.globalData.compSize.w / 2, this.globalData.compSize.h / 2, 0), this.mat.translate(0, 0, this.pe.v), this.hierarchy) {
                var l;
                for (e = this.hierarchy.length, t = 0; e > t; t += 1) l = this.hierarchy[t].finalTransform.mProp.iv.props, this.mat.transform(l[0], l[1], l[2], l[3], l[4], l[5], l[6], l[7], l[8], l[9], l[10], l[11], -l[12], -l[13], l[14], l[15])
            }
            e = this.comp.threeDElements.length;
            var p;
            for (t = 0; e > t; t += 1) p = this.comp.threeDElements[t], p.container.style.transform = p.container.style.webkitTransform = this.mat.toCSS()
        }
        this.firstFrame = !1
    }, HCameraElement.prototype.destroy = function() {};
    var animationManager = function() {
            function t(t) {
                for (var e = 0, s = t.target; S > e;) k[e].animation === s && (k.splice(e, 1), e -= 1, S -= 1, s.isPaused || r()), e += 1
            }

            function e(t, e) {
                if (!t) return null;
                for (var s = 0; S > s;) {
                    if (k[s].elem == t && null !== k[s].elem) return k[s].animation;
                    s += 1
                }
                var r = new AnimationItem;
                return r.setData(t, e), i(r, t), r
            }

            function s() {
                C += 1, E()
            }

            function r() {
                C -= 1, 0 === C && (M = !0)
            }

            function i(e, i) {
                e.addEventListener("destroy", t), e.addEventListener("_active", s), e.addEventListener("_idle", r), k.push({
                    elem: i,
                    animation: e
                }), S += 1
            }

            function a(t) {
                var e = new AnimationItem;
                return i(e, null), e.setParams(t), e
            }

            function n(t, e) {
                var s;
                for (s = 0; S > s; s += 1) k[s].animation.setSpeed(t, e)
            }

            function o(t, e) {
                var s;
                for (s = 0; S > s; s += 1) k[s].animation.setDirection(t, e)
            }

            function h(t) {
                var e;
                for (e = 0; S > e; e += 1) k[e].animation.play(t)
            }

            function l(t, e) {
                x = Date.now();
                var s;
                for (s = 0; S > s; s += 1) k[s].animation.moveFrame(t, e)
            }

            function p(t) {
                var e, s = t - x;
                for (e = 0; S > e; e += 1) k[e].animation.advanceTime(s);
                x = t, M || requestAnimationFrame(p)
            }

            function m(t) {
                x = t, requestAnimationFrame(p)
            }

            function f(t) {
                var e;
                for (e = 0; S > e; e += 1) k[e].animation.pause(t)
            }

            function d(t, e, s) {
                var r;
                for (r = 0; S > r; r += 1) k[r].animation.goToAndStop(t, e, s)
            }

            function c(t) {
                var e;
                for (e = 0; S > e; e += 1) k[e].animation.stop(t)
            }

            function u(t) {
                var e;
                for (e = 0; S > e; e += 1) k[e].animation.togglePause(t)
            }

            function y(t) {
                var e;
                for (e = 0; S > e; e += 1) k[e].animation.destroy(t)
            }

            function g(t, s, r) {
                var i, a = document.getElementsByClassName("bodymovin"),
                    n = a.length;
                for (i = 0; n > i; i += 1) r && a[i].setAttribute("data-bm-type", r), e(a[i], t);
                if (s && 0 === n) {
                    r || (r = "svg");
                    var o = document.getElementsByTagName("body")[0];
                    o.innerHTML = "";
                    var h = document.createElement("div");
                    h.style.width = "100%", h.style.height = "100%", h.setAttribute("data-bm-type", r), o.appendChild(h), e(h, t)
                }
            }

            function v() {
                var t;
                for (t = 0; S > t; t += 1) k[t].animation.resize()
            }

            function b() {
                requestAnimationFrame(m)
            }

            function E() {
                M && (M = !1, requestAnimationFrame(m))
            }
            var P = {},
                k = [],
                x = 0,
                S = 0,
                M = !0,
                C = 0;
            return setTimeout(b, 0), P.registerAnimation = e, P.loadAnimation = a, P.setSpeed = n, P.setDirection = o, P.play = h, P.moveFrame = l, P.pause = f, P.stop = c, P.togglePause = u, P.searchAnimations = g, P.resize = v, P.start = b, P.goToAndStop = d, P.destroy = y, P
        }(),
        AnimationItem = function() {
            this._cbs = [], this.name = "", this.path = "", this.isLoaded = !1, this.currentFrame = 0, this.currentRawFrame = 0, this.totalFrames = 0, this.frameRate = 0, this.frameMult = 0, this.playSpeed = 1, this.playDirection = 1, this.pendingElements = 0, this.playCount = 0, this.prerenderFramesFlag = !0, this.animationData = {}, this.layers = [], this.assets = [], this.isPaused = !0, this.autoplay = !1, this.loop = !0, this.renderer = null, this.animationID = randomString(10), this.scaleMode = "fit", this.assetsPath = "", this.timeCompleted = 0, this.segmentPos = 0, this.subframeEnabled = subframeEnabled, this.segments = [], this.pendingSegment = !1, this._idle = !0, this.projectInterface = ProjectInterface()
        };
    AnimationItem.prototype.setParams = function(t) {
        var e = this;
        t.context && (this.context = t.context), (t.wrapper || t.container) && (this.wrapper = t.wrapper || t.container);
        var s = t.animType ? t.animType : t.renderer ? t.renderer : "svg";
        switch (s) {
            case "canvas":
                this.renderer = new CanvasRenderer(this, t.rendererSettings);
                break;
            case "svg":
                this.renderer = new SVGRenderer(this, t.rendererSettings);
                break;
            case "hybrid":
            case "html":
            default:
                this.renderer = new HybridRenderer(this, t.rendererSettings)
        }
        if (this.renderer.setProjectInterface(this.projectInterface), this.animType = s, "" === t.loop || null === t.loop || (this.loop = t.loop === !1 ? !1 : t.loop === !0 ? !0 : parseInt(t.loop)), this.autoplay = "autoplay" in t ? t.autoplay : !0, this.name = t.name ? t.name : "", this.prerenderFramesFlag = "prerender" in t ? t.prerender : !0, this.autoloadSegments = t.hasOwnProperty("autoloadSegments") ? t.autoloadSegments : !0, t.animationData) e.configAnimation(t.animationData);
        else if (t.path) {
            "json" != t.path.substr(-4) && ("/" != t.path.substr(-1, 1) && (t.path += "/"), t.path += "data.json");
            var r = new XMLHttpRequest;
            this.path = -1 != t.path.lastIndexOf("\\") ? t.path.substr(0, t.path.lastIndexOf("\\") + 1) : t.path.substr(0, t.path.lastIndexOf("/") + 1), this.assetsPath = t.assetsPath, this.fileName = t.path.substr(t.path.lastIndexOf("/") + 1), this.fileName = this.fileName.substr(0, this.fileName.lastIndexOf(".json")), r.open("GET", t.path, !0), r.send(), r.onreadystatechange = function() {
                if (4 == r.readyState)
                    if (200 == r.status) e.configAnimation(JSON.parse(r.responseText));
                    else try {
                        var t = JSON.parse(r.responseText);
                        e.configAnimation(t)
                    } catch (s) {}
            }
        }
    }, AnimationItem.prototype.setData = function(t, e) {
        var s = {
                wrapper: t,
                animationData: e ? "object" == typeof e ? e : JSON.parse(e) : null
            },
            r = t.attributes;
        s.path = r.getNamedItem("data-animation-path") ? r.getNamedItem("data-animation-path").value : r.getNamedItem("data-bm-path") ? r.getNamedItem("data-bm-path").value : r.getNamedItem("bm-path") ? r.getNamedItem("bm-path").value : "", s.animType = r.getNamedItem("data-anim-type") ? r.getNamedItem("data-anim-type").value : r.getNamedItem("data-bm-type") ? r.getNamedItem("data-bm-type").value : r.getNamedItem("bm-type") ? r.getNamedItem("bm-type").value : r.getNamedItem("data-bm-renderer") ? r.getNamedItem("data-bm-renderer").value : r.getNamedItem("bm-renderer") ? r.getNamedItem("bm-renderer").value : "canvas";
        var i = r.getNamedItem("data-anim-loop") ? r.getNamedItem("data-anim-loop").value : r.getNamedItem("data-bm-loop") ? r.getNamedItem("data-bm-loop").value : r.getNamedItem("bm-loop") ? r.getNamedItem("bm-loop").value : "";
        "" === i || (s.loop = "false" === i ? !1 : "true" === i ? !0 : parseInt(i));
        var a = r.getNamedItem("data-anim-autoplay") ? r.getNamedItem("data-anim-autoplay").value : r.getNamedItem("data-bm-autoplay") ? r.getNamedItem("data-bm-autoplay").value : r.getNamedItem("bm-autoplay") ? r.getNamedItem("bm-autoplay").value : !0;
        s.autoplay = "false" !== a, s.name = r.getNamedItem("data-name") ? r.getNamedItem("data-name").value : r.getNamedItem("data-bm-name") ? r.getNamedItem("data-bm-name").value : r.getNamedItem("bm-name") ? r.getNamedItem("bm-name").value : "";
        var n = r.getNamedItem("data-anim-prerender") ? r.getNamedItem("data-anim-prerender").value : r.getNamedItem("data-bm-prerender") ? r.getNamedItem("data-bm-prerender").value : r.getNamedItem("bm-prerender") ? r.getNamedItem("bm-prerender").value : "";
        "false" === n && (s.prerender = !1), this.setParams(s)
    }, AnimationItem.prototype.includeLayers = function(t) {
        t.op > this.animationData.op && (this.animationData.op = t.op, this.totalFrames = Math.floor(t.op - this.animationData.ip), this.animationData.tf = this.totalFrames);
        var e, s, r = this.animationData.layers,
            i = r.length,
            a = t.layers,
            n = a.length;
        for (s = 0; n > s; s += 1)
            for (e = 0; i > e;) {
                if (r[e].id == a[s].id) {
                    r[e] = a[s];
                    break
                }
                e += 1
            }
        if ((t.chars || t.fonts) && (this.renderer.globalData.fontManager.addChars(t.chars), this.renderer.globalData.fontManager.addFonts(t.fonts, this.renderer.globalData.defs)), t.assets)
            for (i = t.assets.length, e = 0; i > e; e += 1) this.animationData.assets.push(t.assets[e]);
        this.animationData.__complete = !1, dataManager.completeData(this.animationData, this.renderer.globalData.fontManager), this.renderer.includeLayers(t.layers), expressionsPlugin && expressionsPlugin.initExpressions(this), this.renderer.renderFrame(null), this.loadNextSegment()
    }, AnimationItem.prototype.loadNextSegment = function() {
        var t = this.animationData.segments;
        if (!t || 0 === t.length || !this.autoloadSegments) return this.trigger("data_ready"), void(this.timeCompleted = this.animationData.tf);
        var e = t.shift();
        this.timeCompleted = e.time * this.frameRate;
        var s = new XMLHttpRequest,
            r = this,
            i = this.path + this.fileName + "_" + this.segmentPos + ".json";
        this.segmentPos += 1, s.open("GET", i, !0), s.send(), s.onreadystatechange = function() {
            if (4 == s.readyState)
                if (200 == s.status) r.includeLayers(JSON.parse(s.responseText));
                else try {
                    var t = JSON.parse(s.responseText);
                    r.includeLayers(t)
                } catch (e) {}
        }
    }, AnimationItem.prototype.loadSegments = function() {
        var t = this.animationData.segments;
        t || (this.timeCompleted = this.animationData.tf), this.loadNextSegment()
    }, AnimationItem.prototype.configAnimation = function(t) {
        this.renderer && this.renderer.destroyed || (this.animationData = t, this.totalFrames = Math.floor(this.animationData.op - this.animationData.ip), this.animationData.tf = this.totalFrames, this.renderer.configAnimation(t), t.assets || (t.assets = []), t.comps && (t.assets = t.assets.concat(t.comps), t.comps = null), this.renderer.searchExtraCompositions(t.assets), this.layers = this.animationData.layers, this.assets = this.animationData.assets, this.frameRate = this.animationData.fr, this.firstFrame = Math.round(this.animationData.ip), this.frameMult = this.animationData.fr / 1e3, this.trigger("config_ready"), this.imagePreloader = new ImagePreloader, this.imagePreloader.setAssetsPath(this.assetsPath), this.imagePreloader.setPath(this.path), this.imagePreloader.loadAssets(t.assets), this.loadSegments(), this.updaFrameModifier(), this.renderer.globalData.fontManager ? this.waitForFontsLoaded() : (dataManager.completeData(this.animationData, this.renderer.globalData.fontManager), this.checkLoaded()))
    }, AnimationItem.prototype.waitForFontsLoaded = function() {
        function t() {
            this.renderer.globalData.fontManager.loaded ? (dataManager.completeData(this.animationData, this.renderer.globalData.fontManager), this.checkLoaded()) : setTimeout(t.bind(this), 20)
        }
        return function() {
            t.bind(this)()
        }
    }(), AnimationItem.prototype.addPendingElement = function() {
        this.pendingElements += 1
    }, AnimationItem.prototype.elementLoaded = function() {
        this.pendingElements--, this.checkLoaded()
    }, AnimationItem.prototype.checkLoaded = function() {
        0 === this.pendingElements && (expressionsPlugin && expressionsPlugin.initExpressions(this), this.renderer.initItems(), setTimeout(function() {
            this.trigger("DOMLoaded")
        }.bind(this), 0), this.isLoaded = !0, this.gotoFrame(), this.autoplay && this.play())
    }, AnimationItem.prototype.resize = function() {
        this.renderer.updateContainerSize()
    }, AnimationItem.prototype.setSubframe = function(t) {
        this.subframeEnabled = t ? !0 : !1
    }, AnimationItem.prototype.gotoFrame = function() {
        this.currentFrame = this.subframeEnabled ? this.currentRawFrame : Math.floor(this.currentRawFrame), this.timeCompleted !== this.totalFrames && this.currentFrame > this.timeCompleted && (this.currentFrame = this.timeCompleted), this.trigger("enterFrame"), this.renderFrame()
    }, AnimationItem.prototype.renderFrame = function() {
        this.isLoaded !== !1 && this.renderer.renderFrame(this.currentFrame + this.firstFrame)
    }, AnimationItem.prototype.play = function(t) {
        t && this.name != t || this.isPaused === !0 && (this.isPaused = !1, this._idle && (this._idle = !1, this.trigger("_active")))
    }, AnimationItem.prototype.pause = function(t) {
        t && this.name != t || this.isPaused === !1 && (this.isPaused = !0, this.pendingSegment || (this._idle = !0, this.trigger("_idle")))
    }, AnimationItem.prototype.togglePause = function(t) {
        t && this.name != t || (this.isPaused === !0 ? this.play() : this.pause())
    }, AnimationItem.prototype.stop = function(t) {
        t && this.name != t || (this.pause(), this.currentFrame = this.currentRawFrame = 0, this.playCount = 0, this.gotoFrame())
    }, AnimationItem.prototype.goToAndStop = function(t, e, s) {
        s && this.name != s || (this.setCurrentRawFrameValue(e ? t : t * this.frameModifier), this.pause())
    }, AnimationItem.prototype.goToAndPlay = function(t, e, s) {
        this.goToAndStop(t, e, s), this.play()
    }, AnimationItem.prototype.advanceTime = function(t) {
        return this.pendingSegment ? (this.pendingSegment = !1, this.adjustSegment(this.segments.shift()), void(this.isPaused && this.play())) : void(this.isPaused !== !0 && this.isLoaded !== !1 && this.setCurrentRawFrameValue(this.currentRawFrame + t * this.frameModifier))
    }, AnimationItem.prototype.updateAnimation = function(t) {
        this.setCurrentRawFrameValue(this.totalFrames * t)
    }, AnimationItem.prototype.moveFrame = function(t, e) {
        e && this.name != e || this.setCurrentRawFrameValue(this.currentRawFrame + t)
    }, AnimationItem.prototype.adjustSegment = function(t) {
        this.playCount = 0, t[1] < t[0] ? (this.frameModifier > 0 && (this.playSpeed < 0 ? this.setSpeed(-this.playSpeed) : this.setDirection(-1)), this.totalFrames = t[0] - t[1], this.firstFrame = t[1], this.setCurrentRawFrameValue(this.totalFrames - .01)) : t[1] > t[0] && (this.frameModifier < 0 && (this.playSpeed < 0 ? this.setSpeed(-this.playSpeed) : this.setDirection(1)), this.totalFrames = t[1] - t[0], this.firstFrame = t[0], this.setCurrentRawFrameValue(0)), this.trigger("segmentStart")
    }, AnimationItem.prototype.setSegment = function(t, e) {
        var s = -1;
        this.isPaused && (this.currentRawFrame + this.firstFrame < t ? s = t : this.currentRawFrame + this.firstFrame > e && (s = e - t - .01)), this.firstFrame = t, this.totalFrames = e - t, -1 !== s && this.goToAndStop(s, !0)
    }, AnimationItem.prototype.playSegments = function(t, e) {
        if ("object" == typeof t[0]) {
            var s, r = t.length;
            for (s = 0; r > s; s += 1) this.segments.push(t[s])
        } else this.segments.push(t);
        e && this.adjustSegment(this.segments.shift()), this.isPaused && this.play()
    }, AnimationItem.prototype.resetSegments = function(t) {
        this.segments.length = 0, this.segments.push([this.animationData.ip * this.frameRate, Math.floor(this.animationData.op - this.animationData.ip + this.animationData.ip * this.frameRate)]), t && this.adjustSegment(this.segments.shift())
    }, AnimationItem.prototype.checkSegments = function() {
        this.segments.length && (this.pendingSegment = !0)
    }, AnimationItem.prototype.remove = function(t) {
        t && this.name != t || this.renderer.destroy()
    }, AnimationItem.prototype.destroy = function(t) {
        t && this.name != t || this.renderer && this.renderer.destroyed || (this.renderer.destroy(), this.trigger("destroy"), this._cbs = null, this.onEnterFrame = this.onLoopComplete = this.onComplete = this.onSegmentStart = this.onDestroy = null)
    }, AnimationItem.prototype.setCurrentRawFrameValue = function(t) {
        if (this.currentRawFrame = t, this.currentRawFrame >= this.totalFrames) {
            if (this.checkSegments(), this.loop === !1) return this.currentRawFrame = this.totalFrames - .01, this.gotoFrame(), this.pause(), void this.trigger("complete");
            if (this.trigger("loopComplete"), this.playCount += 1, this.loop !== !0 && this.playCount == this.loop || this.pendingSegment) return this.currentRawFrame = this.totalFrames - .01, this.gotoFrame(), this.pause(), void this.trigger("complete");
            this.currentRawFrame = this.currentRawFrame % this.totalFrames
        } else if (this.currentRawFrame < 0) return this.checkSegments(), this.playCount -= 1, this.playCount < 0 && (this.playCount = 0), this.loop === !1 || this.pendingSegment ? (this.currentRawFrame = 0, this.gotoFrame(), this.pause(), void this.trigger("complete")) : (this.trigger("loopComplete"), this.currentRawFrame = (this.totalFrames + this.currentRawFrame) % this.totalFrames, void this.gotoFrame());
        this.gotoFrame()
    }, AnimationItem.prototype.setSpeed = function(t) {
        this.playSpeed = t, this.updaFrameModifier()
    }, AnimationItem.prototype.setDirection = function(t) {
        this.playDirection = 0 > t ? -1 : 1, this.updaFrameModifier()
    }, AnimationItem.prototype.updaFrameModifier = function() {
        this.frameModifier = this.frameMult * this.playSpeed * this.playDirection
    }, AnimationItem.prototype.getPath = function() {
        return this.path
    }, AnimationItem.prototype.getAssetsPath = function(t) {
        var e = "";
        if (this.assetsPath) {
            var s = t.p; - 1 !== s.indexOf("images/") && (s = s.split("/")[1]), e = this.assetsPath + s
        } else e = this.path, e += t.u ? t.u : "", e += t.p;
        return e
    }, AnimationItem.prototype.getAssetData = function(t) {
        for (var e = 0, s = this.assets.length; s > e;) {
            if (t == this.assets[e].id) return this.assets[e];
            e += 1
        }
    }, AnimationItem.prototype.hide = function() {
        this.renderer.hide()
    }, AnimationItem.prototype.show = function() {
        this.renderer.show()
    }, AnimationItem.prototype.getAssets = function() {
        return this.assets
    }, AnimationItem.prototype.trigger = function(t) {
        if (this._cbs && this._cbs[t]) switch (t) {
            case "enterFrame":
                this.triggerEvent(t, new BMEnterFrameEvent(t, this.currentFrame, this.totalFrames, this.frameMult));
                break;
            case "loopComplete":
                this.triggerEvent(t, new BMCompleteLoopEvent(t, this.loop, this.playCount, this.frameMult));
                break;
            case "complete":
                this.triggerEvent(t, new BMCompleteEvent(t, this.frameMult));
                break;
            case "segmentStart":
                this.triggerEvent(t, new BMSegmentStartEvent(t, this.firstFrame, this.totalFrames));

                break;
            case "destroy":
                this.triggerEvent(t, new BMDestroyEvent(t, this));
                break;
            default:
                this.triggerEvent(t)
        }
        "enterFrame" === t && this.onEnterFrame && this.onEnterFrame.call(this, new BMEnterFrameEvent(t, this.currentFrame, this.totalFrames, this.frameMult)), "loopComplete" === t && this.onLoopComplete && this.onLoopComplete.call(this, new BMCompleteLoopEvent(t, this.loop, this.playCount, this.frameMult)), "complete" === t && this.onComplete && this.onComplete.call(this, new BMCompleteEvent(t, this.frameMult)), "segmentStart" === t && this.onSegmentStart && this.onSegmentStart.call(this, new BMSegmentStartEvent(t, this.firstFrame, this.totalFrames)), "destroy" === t && this.onDestroy && this.onDestroy.call(this, new BMDestroyEvent(t, this))
    }, AnimationItem.prototype.addEventListener = _addEventListener, AnimationItem.prototype.removeEventListener = _removeEventListener, AnimationItem.prototype.triggerEvent = _triggerEvent;
    var Expressions = function() {
        function t(t) {
            t.renderer.compInterface = CompExpressionInterface(t.renderer), t.renderer.globalData.projectInterface.registerComposition(t.renderer)
        }
        var e = {};
        return e.initExpressions = t, e
    }();
    expressionsPlugin = Expressions,
        function() {
            function t() {
                return this.pv
            }

            function e(t, e) {
                var s, r, i = 0,
                    a = this.keyframes.length - 1,
                    n = 1,
                    o = !0;
                e = void 0 === e ? this.offsetTime : 0;
                for (var h = "object" == typeof this.pv ? [this.pv.length] : 0; o;) {
                    if (s = this.keyframes[i], r = this.keyframes[i + 1], i == a - 1 && t >= r.t - e) {
                        s.h && (s = r);
                        break
                    }
                    if (r.t - e > t) break;
                    a - 1 > i ? i += n : o = !1
                }
                var l, p, m, f, d, c = 0;
                if (s.to) {
                    s.bezierData || bez.buildBezierData(s);
                    var u = s.bezierData;
                    if (t >= r.t - e || t < s.t - e) {
                        var y = t >= r.t - e ? u.points.length - 1 : 0;
                        for (p = u.points[y].point.length, l = 0; p > l; l += 1) h[l] = u.points[y].point[l]
                    } else {
                        s.__fnct ? d = s.__fnct : (d = BezierFactory.getBezierEasing(s.o.x, s.o.y, s.i.x, s.i.y, s.n).get, s.__fnct = d), m = d((t - (s.t - e)) / (r.t - e - (s.t - e)));
                        var g, v = u.segmentLength * m,
                            b = 0;
                        for (n = 1, o = !0, f = u.points.length; o;) {
                            if (b += u.points[c].partialLength * n, 0 === v || 0 === m || c == u.points.length - 1) {
                                for (p = u.points[c].point.length, l = 0; p > l; l += 1) h[l] = u.points[c].point[l];
                                break
                            }
                            if (v >= b && v < b + u.points[c + 1].partialLength) {
                                for (g = (v - b) / u.points[c + 1].partialLength, p = u.points[c].point.length, l = 0; p > l; l += 1) h[l] = u.points[c].point[l] + (u.points[c + 1].point[l] - u.points[c].point[l]) * g;
                                break
                            }
                            f - 1 > c && 1 == n || c > 0 && -1 == n ? c += n : o = !1
                        }
                    }
                } else {
                    var E, P, k, x, S, M = !1;
                    for (a = s.s.length, i = 0; a > i; i += 1) {
                        if (1 !== s.h && (s.o.x instanceof Array ? (M = !0, s.__fnct || (s.__fnct = []), s.__fnct[i] || (E = s.o.x[i] || s.o.x[0], P = s.o.y[i] || s.o.y[0], k = s.i.x[i] || s.i.x[0], x = s.i.y[i] || s.i.y[0])) : (M = !1, s.__fnct || (E = s.o.x, P = s.o.y, k = s.i.x, x = s.i.y)), M ? s.__fnct[i] ? d = s.__fnct[i] : (d = BezierFactory.getBezierEasing(E, P, k, x).get, s.__fnct[i] = d) : s.__fnct ? d = s.__fnct : (d = BezierFactory.getBezierEasing(E, P, k, x).get, s.__fnct = d), m = t >= r.t - e ? 1 : t < s.t - e ? 0 : d((t - (s.t - e)) / (r.t - e - (s.t - e)))), this.sh && 1 !== s.h) {
                            var C = s.s[i],
                                D = s.e[i]; - 180 > C - D ? C += 360 : C - D > 180 && (C -= 360), S = C + (D - C) * m
                        } else S = 1 === s.h ? s.s[i] : s.s[i] + (s.e[i] - s.s[i]) * m;
                        1 === a ? h = S : h[i] = S
                    }
                }
                return h
            }

            function s(t) {
                if (void 0 !== this.vel) return this.vel;
                var e = -.01;
                t *= this.elem.globalData.frameRate;
                var s, r = this.getValueAtTime(t, 0),
                    i = this.getValueAtTime(t + e, 0);
                if (r.length) {
                    s = Array.apply(null, {
                        length: r.length
                    });
                    var a;
                    for (a = 0; a < r.length; a += 1) s[a] = this.elem.globalData.frameRate * ((i[a] - r[a]) / e)
                } else s = (i - r) / e;
                return s
            }

            function r(t) {
                this.propertyGroup = t
            }

            function i(t, e, s) {
                e.x && (s.k = !0, s.x = !0, s.getValue && (s.getPreValue = s.getValue), s.getValue = ExpressionManager.initiateExpression.bind(s)(t, e, s))
            }
            var a = function() {
                    function a(t, e) {
                        return this.textIndex = t + 1, this.textTotal = e, this.getValue(), this.v
                    }
                    return function(n, o) {
                        this.pv = 1, this.comp = n.comp, this.elem = n, this.mult = .01, this.type = "textSelector", this.textTotal = o.totalChars, this.selectorValue = 100, this.lastValue = [1, 1, 1], i.bind(this)(n, o, this), this.getMult = a, this.getVelocityAtTime = s, this.getValueAtTime = this.kf ? e : t, this.setGroupProperty = r
                    }
                }(),
                n = PropertyFactory.getProp;
            PropertyFactory.getProp = function(a, o, h, l, p) {
                var m = n(a, o, h, l, p);
                m.getVelocityAtTime = s, m.getValueAtTime = m.kf ? e : t, m.setGroupProperty = r;
                var f = m.k;
                return void 0 !== o.ix && Object.defineProperty(m, "propertyIndex", {
                    get: function() {
                        return o.ix
                    }
                }), i(a, o, m), !f && m.x && p.push(m), m
            };
            var o = ShapePropertyFactory.getShapeProp;
            ShapePropertyFactory.getShapeProp = function(t, e, s, a, n) {
                var h = o(t, e, s, a, n);
                h.setGroupProperty = r;
                var l = h.k;
                return void 0 !== e.ix && Object.defineProperty(h, "propertyIndex", {
                    get: function() {
                        return e.ix
                    }
                }), 3 === s ? i(t, e.pt, h) : 4 === s && i(t, e.ks, h), !l && h.x && a.push(h), h
            };
            var h = PropertyFactory.getTextSelectorProp;
            PropertyFactory.getTextSelectorProp = function(t, e, s) {
                return 1 === e.t ? new a(t, e, s) : h(t, e, s)
            }
        }();
    var ExpressionManager = function() {
            function duplicatePropertyValue(t, e) {
                if (e = e || 1, "number" == typeof t) return t * e;
                if (t.i) return JSON.parse(JSON.stringify(t));
                var s, r = Array.apply(null, {
                        length: t.length
                    }),
                    i = t.length;
                for (s = 0; i > s; s += 1) r[s] = t[s] * e;
                return r
            }

            function $bm_neg(t) {
                var e = typeof t;
                if ("number" === e || "boolean" === e) return -t;
                if ("object" === e) {
                    var s, r = t.length,
                        i = [];
                    for (s = 0; r > s; s += 1) i[s] = -t[s];
                    return i
                }
            }

            function sum(t, e) {
                var s = typeof t,
                    r = typeof e;
                if ("string" === s || "string" === r) return t + e;
                if (!("number" !== s && "boolean" !== s && "string" !== s || "number" !== r && "boolean" !== r && "string" !== r)) return t + e;
                if ("object" === s && ("number" === r || "boolean" === r || "string" === r)) return t[0] = t[0] + e, t;
                if (("number" === s || "boolean" === s || "string" === s) && "object" === r) return e[0] = t + e[0], e;
                if ("object" === s && "object" === r) {
                    for (var i = 0, a = t.length, n = e.length, o = []; a > i || n > i;) o[i] = "number" == typeof t[i] && "number" == typeof e[i] ? t[i] + e[i] : void 0 == e[i] ? t[i] : t[i] || e[i], i += 1;
                    return o
                }
                return 0
            }

            function sub(t, e) {
                var s = typeof t,
                    r = typeof e;
                if (!("number" !== s && "boolean" !== s && "string" !== s || "number" !== r && "boolean" !== r && "string" !== r)) return t - e;
                if ("object" === s && ("number" === r || "boolean" === r || "string" === r)) return t[0] = t[0] - e, t;
                if (("number" === s || "boolean" === s || "string" === s) && "object" === r) return e[0] = t - e[0], e;
                if ("object" === s && "object" === r) {
                    for (var i = 0, a = t.length, n = e.length, o = []; a > i || n > i;) o[i] = "number" == typeof t[i] && "number" == typeof e[i] ? t[i] - e[i] : void 0 == e[i] ? t[i] : t[i] || e[i], i += 1;
                    return o
                }
                return 0
            }

            function mul(t, e) {
                var s, r = typeof t,
                    i = typeof e;
                if (!("number" !== r && "boolean" !== r && "string" !== r || "number" !== i && "boolean" !== i && "string" !== i)) return t * e;
                var a, n;
                if ("object" === r && ("number" === i || "boolean" === i || "string" === i)) {
                    for (n = t.length, s = Array.apply(null, {
                            length: n
                        }), a = 0; n > a; a += 1) s[a] = t[a] * e;
                    return s
                }
                if (("number" === r || "boolean" === r || "string" === r) && "object" === i) {
                    for (n = e.length, s = Array.apply(null, {
                            length: n
                        }), a = 0; n > a; a += 1) s[a] = t * e[a];
                    return s
                }
                return 0
            }

            function div(t, e) {
                var s, r = typeof t,
                    i = typeof e;
                if (!("number" !== r && "boolean" !== r && "string" !== r || "number" !== i && "boolean" !== i && "string" !== i)) return t / e;
                var a, n;
                if ("object" === r && ("number" === i || "boolean" === i || "string" === i)) {
                    for (n = t.length, s = Array.apply(null, {
                            length: n
                        }), a = 0; n > a; a += 1) s[a] = t[a] / e;
                    return s
                }
                if (("number" === r || "boolean" === r || "string" === r) && "object" === i) {
                    for (n = e.length, s = Array.apply(null, {
                            length: n
                        }), a = 0; n > a; a += 1) s[a] = t / e[a];
                    return s
                }
                return 0
            }

            function clamp(t, e, s) {
                if (e > s) {
                    var r = s;
                    s = e, e = r
                }
                return Math.min(Math.max(t, e), s)
            }

            function radiansToDegrees(t) {
                return t / degToRads
            }

            function degreesToRadians(t) {
                return t * degToRads
            }

            function length(t, e) {
                if ("number" == typeof t) return e = e || 0, Math.abs(t - e);
                e || (e = helperLengthArray);
                var s, r = Math.min(t.length, e.length),
                    i = 0;
                for (s = 0; r > s; s += 1) i += Math.pow(e[s] - t[s], 2);
                return Math.sqrt(i)
            }

            function normalize(t) {
                return div(t, length(t))
            }

            function rgbToHsl(t) {
                var e, s, r = t[0],
                    i = t[1],
                    a = t[2],
                    n = Math.max(r, i, a),
                    o = Math.min(r, i, a),
                    h = (n + o) / 2;
                if (n == o) e = s = 0;
                else {
                    var l = n - o;
                    switch (s = h > .5 ? l / (2 - n - o) : l / (n + o), n) {
                        case r:
                            e = (i - a) / l + (a > i ? 6 : 0);
                            break;
                        case i:
                            e = (a - r) / l + 2;
                            break;
                        case a:
                            e = (r - i) / l + 4
                    }
                    e /= 6
                }
                return [e, s, h, t[3]]
            }

            function hslToRgb(t) {
                function e(t, e, s) {
                    return 0 > s && (s += 1), s > 1 && (s -= 1), 1 / 6 > s ? t + 6 * (e - t) * s : .5 > s ? e : 2 / 3 > s ? t + (e - t) * (2 / 3 - s) * 6 : t
                }
                var s, r, i, a = t[0],
                    n = t[1],
                    o = t[2];
                if (0 == n) s = r = i = o;
                else {
                    var h = .5 > o ? o * (1 + n) : o + n - o * n,
                        l = 2 * o - h;
                    s = e(l, h, a + 1 / 3), r = e(l, h, a), i = e(l, h, a - 1 / 3)
                }
                return [s, r, i, t[3]]
            }

            function linear(t, e, s, r, i) {
                if (void 0 === r || void 0 === i) return linear(t, 0, 1, e, s);
                if (e >= t) return r;
                if (t >= s) return i;
                var a = s === e ? 0 : (t - e) / (s - e);
                if (!r.length) return r + (i - r) * a;
                var n, o = r.length,
                    h = Array.apply(null, {
                        length: o
                    });
                for (n = 0; o > n; n += 1) h[n] = r[n] + (i[n] - r[n]) * a;
                return h
            }

            function random(t, e) {
                if (void 0 === e && (void 0 === t ? (t = 0, e = 1) : (e = t, t = void 0)), e.length) {
                    var s, r = e.length;
                    t || (t = Array.apply(null, {
                        length: r
                    }));
                    var i = Array.apply(null, {
                            length: r
                        }),
                        a = BMMath.random();
                    for (s = 0; r > s; s += 1) i[s] = t[s] + a * (e[s] - t[s]);
                    return i
                }
                void 0 === t && (t = 0);
                var n = BMMath.random();
                return t + n * (e - t)
            }

            function initiateExpression(elem, data, property) {
                function lookAt(t, e) {
                    var s = [e[0] - t[0], e[1] - t[1], e[2] - t[2]],
                        r = Math.atan2(s[0], Math.sqrt(s[1] * s[1] + s[2] * s[2])) / degToRads,
                        i = -Math.atan2(s[1], s[2]) / degToRads;
                    return [i, r, 0]
                }

                function easeOut(t, e, s) {
                    return -(s - e) * t * (t - 2) + e
                }

                function nearestKey(t) {
                    var e, s, r, i = data.k.length;
                    if (data.k.length && "number" != typeof data.k[0]) {
                        for (s = -1, t *= elem.comp.globalData.frameRate, e = 0; i - 1 > e; e += 1) {
                            if (t === data.k[e].t) {
                                s = e + 1, r = data.k[e].t;
                                break
                            }
                            if (t > data.k[e].t && t < data.k[e + 1].t) {
                                t - data.k[e].t > data.k[e + 1].t - t ? (s = e + 2, r = data.k[e + 1].t) : (s = e + 1, r = data.k[e].t);
                                break
                            }
                        } - 1 === s && (s = e + 1, r = data.k[e].t)
                    } else s = 0, r = 0;
                    var a = {};
                    return a.index = s, a.time = r / elem.comp.globalData.frameRate, a
                }

                function key(t) {
                    if (!data.k.length || "number" == typeof data.k[0]) return {
                        time: 0
                    };
                    t -= 1;
                    var e, s = {
                        time: data.k[t].t / elem.comp.globalData.frameRate
                    };
                    e = t === data.k.length - 1 ? data.k[t - 1].e : data.k[t].s;
                    var r, i = e.length;
                    for (r = 0; i > r; r += 1) s[r] = e[r];
                    return s
                }

                function framesToTime(t, e) {
                    return e || (e = elem.comp.globalData.frameRate), t / e
                }

                function timeToFrames(t, e) {
                    return t || (t = time), e || (e = elem.comp.globalData.frameRate), t * e
                }

                function toWorld(t) {
                    if (toworldMatrix.reset(), elem.finalTransform.mProp.applyToMatrix(toworldMatrix), elem.hierarchy && elem.hierarchy.length) {
                        var e, s = elem.hierarchy.length;
                        for (e = 0; s > e; e += 1) elem.hierarchy[e].finalTransform.mProp.applyToMatrix(toworldMatrix);
                        return toworldMatrix.applyToPointArray(t[0], t[1], t[2] || 0)
                    }
                    return toworldMatrix.applyToPointArray(t[0], t[1], t[2] || 0)
                }

                function fromWorld(t) {
                    fromworldMatrix.reset();
                    var e = [];
                    if (e.push(t), elem.finalTransform.mProp.applyToMatrix(fromworldMatrix), elem.hierarchy && elem.hierarchy.length) {
                        var s, r = elem.hierarchy.length;
                        for (s = 0; r > s; s += 1) elem.hierarchy[s].finalTransform.mProp.applyToMatrix(fromworldMatrix);
                        return fromworldMatrix.inversePoints(e)[0]
                    }
                    return fromworldMatrix.inversePoints(e)[0]
                }

                function seedRandom(t) {
                    BMMath.seedrandom(randSeed + t)
                }

                function execute() {
                    if (seedRandom(randSeed), this.frameExpressionId !== elem.globalData.frameId || "textSelector" === this.type) {
                        if (this.lock) return this.v = duplicatePropertyValue(this.pv, this.mult), !0;
                        "textSelector" === this.type && (textIndex = this.textIndex, textTotal = this.textTotal, selectorValue = this.selectorValue), transform || (transform = elem.transform), thisLayer || (thisLayer = elem.layerInterface, thisComp = elem.comp.compInterface), 4 !== elemType || content || (content = thisLayer("ADBE Root Vectors Group")), effect || (effect = thisLayer(4)), hasParent = !(!elem.hierarchy || !elem.hierarchy.length), hasParent && !parent && (parent = elem.hierarchy[elem.hierarchy.length - 1].layerInterface), this.lock = !0, this.getPreValue && this.getPreValue(), value = this.pv, time = this.comp.renderedFrame / this.comp.globalData.frameRate, needsVelocity && (velocity = velocityAtTime(time)), bindedFn(), this.frameExpressionId = elem.globalData.frameId;
                        var t, e;
                        if (this.mult)
                            if ("number" == typeof this.v) this.v *= this.mult;
                            else
                                for (e = this.v.length, value === this.v && (this.v = 2 === e ? [value[0], value[1]] : [value[0], value[1], value[2]]), t = 0; e > t; t += 1) this.v[t] *= this.mult;
                        if ("number" == typeof this.v) this.lastValue !== this.v && (this.lastValue = this.v, this.mdf = !0);
                        else if (this.v.i) this.mdf = !0, this.paths.length = 0, this.paths[0] = this.v;
                        else
                            for (e = this.v.length, t = 0; e > t; t += 1) this.v[t] !== this.lastValue[t] && (this.lastValue[t] = this.v[t], this.mdf = !0);
                        this.lock = !1
                    }
                }
                var val = data.x,
                    needsVelocity = -1 !== val.indexOf("velocity"),
                    elemType = elem.data.ty,
                    transform, content, effect, thisComp = elem.comp,
                    thisProperty = property;
                elem.comp.frameDuration = 1 / elem.comp.globalData.frameRate;
                var inPoint = elem.data.ip / elem.comp.globalData.frameRate,
                    outPoint = elem.data.op / elem.comp.globalData.frameRate,
                    thisLayer, thisComp, fn = new Function,
                    fnStr = "var fn = function(){" + val + ";this.v = $bm_rt;}";
                eval(fnStr);
                var bindedFn = fn.bind(this),
                    numKeys = data.k ? data.k.length : 0,
                    wiggle = function(t, e) {
                        var s, r, i = this.pv.length ? this.pv.length : 1,
                            a = Array.apply(null, {
                                len: i
                            });
                        for (r = 0; i > r; r += 1) a[r] = 0;
                        t = 5;
                        var n = Math.floor(time * t);
                        for (s = 0, r = 0; n > s;) {
                            for (r = 0; i > r; r += 1) a[r] += -e + 2 * e * BMMath.random();
                            s += 1
                        }
                        var o = time * t,
                            h = o - Math.floor(o),
                            l = Array.apply({
                                length: i
                            });
                        for (r = 0; i > r; r += 1) l[r] = this.pv[r] + a[r] + (-e + 2 * e * BMMath.random()) * h;
                        return l
                    }.bind(this),
                    loopIn = function(t, e, s) {
                        if (!this.k) return this.pv;
                        var r = time * elem.comp.globalData.frameRate,
                            i = this.keyframes,
                            a = i[0].t;
                        if (r >= a) return this.pv;
                        var n, o;
                        s ? (n = e ? Math.abs(elem.comp.globalData.frameRate * e) : Math.max(0, this.elem.data.op - a), o = a + n) : ((!e || e > i.length - 1) && (e = i.length - 1), o = i[e].t, n = o - a);
                        var h, l, p;
                        if ("pingpong" === t) {
                            var m = Math.floor((a - r) / n);
                            if (m % 2 === 0) return this.getValueAtTime((a - r) % n + a, 0)
                        } else {
                            if ("offset" === t) {
                                var f = this.getValueAtTime(a, 0),
                                    d = this.getValueAtTime(o, 0),
                                    c = this.getValueAtTime(n - (a - r) % n + a, 0),
                                    u = Math.floor((a - r) / n) + 1;
                                if (this.pv.length) {
                                    for (p = new Array(f.length), l = p.length, h = 0; l > h; h += 1) p[h] = c[h] - (d[h] - f[h]) * u;
                                    return p
                                }
                                return c - (d - f) * u
                            }
                            if ("continue" === t) {
                                var y = this.getValueAtTime(a, 0),
                                    g = this.getValueAtTime(a + .001, 0);
                                if (this.pv.length) {
                                    for (p = new Array(y.length), l = p.length, h = 0; l > h; h += 1) p[h] = y[h] + (y[h] - g[h]) * (a - r) / 5e-4;
                                    return p
                                }
                                return y + (y - g) * (a - r) / 5e-4
                            }
                        }
                        return this.getValueAtTime(n - (a - r) % n + a, 0)
                    }.bind(this),
                    loopInDuration = function(t, e) {
                        return loopIn(t, e, !0)
                    }.bind(this),
                    loopOut = function(t, e, s) {
                        if (!this.k || !this.keyframes) return this.pv;
                        var r = time * elem.comp.globalData.frameRate,
                            i = this.keyframes,
                            a = i[i.length - 1].t;
                        if (a >= r) return this.pv;
                        var n, o;
                        s ? (n = e ? Math.abs(a - elem.comp.globalData.frameRate * e) : Math.max(0, a - this.elem.data.ip), o = a - n) : ((!e || e > i.length - 1) && (e = i.length - 1), o = i[i.length - 1 - e].t, n = a - o);
                        var h, l, p;
                        if ("pingpong" === t) {
                            var m = Math.floor((r - o) / n);
                            if (m % 2 !== 0) return this.getValueAtTime(n - (r - o) % n + o, 0)
                        } else {
                            if ("offset" === t) {
                                var f = this.getValueAtTime(o, 0),
                                    d = this.getValueAtTime(a, 0),
                                    c = this.getValueAtTime((r - o) % n + o, 0),
                                    u = Math.floor((r - o) / n);
                                if (this.pv.length) {
                                    for (p = new Array(f.length), l = p.length, h = 0; l > h; h += 1) p[h] = (d[h] - f[h]) * u + c[h];
                                    return p
                                }
                                return (d - f) * u + c
                            }
                            if ("continue" === t) {
                                var y = this.getValueAtTime(a, 0),
                                    g = this.getValueAtTime(a - .001, 0);
                                if (this.pv.length) {
                                    for (p = new Array(y.length), l = p.length, h = 0; l > h; h += 1) p[h] = y[h] + (y[h] - g[h]) * (r - a) / 5e-4;
                                    return p
                                }
                                return y + (y - g) * (r - a) / 5e-4
                            }
                        }
                        return this.getValueAtTime((r - o) % n + o, 0)
                    }.bind(this),
                    loop_out = loopOut,
                    loopOutDuration = function(t, e) {
                        return loopOut(t, e, !0)
                    }.bind(this),
                    valueAtTime = function(t) {
                        return this.getValueAtTime(t * elem.comp.globalData.frameRate, 0)
                    }.bind(this),
                    velocityAtTime = function(t) {
                        return this.getVelocityAtTime(t)
                    }.bind(this),
                    comp = elem.comp.globalData.projectInterface.bind(elem.comp.globalData.projectInterface),
                    toworldMatrix = new Matrix,
                    fromworldMatrix = new Matrix,
                    time, velocity, value, textIndex, textTotal, selectorValue, index = elem.data.ind + 1,
                    hasParent = !(!elem.hierarchy || !elem.hierarchy.length),
                    parent, randSeed = Math.floor(1e6 * Math.random());
                return execute
            }
            var ob = {},
                Math = BMMath,
                radians_to_degrees = radiansToDegrees,
                degrees_to_radians = radiansToDegrees,
                helperLengthArray = [0, 0, 0, 0, 0, 0];
            return ob.initiateExpression = initiateExpression, ob
        }(),
        ShapeExpressionInterface = function() {
            function t(t, e, s) {
                return d(t, e, s)
            }

            function e(t, e, s) {
                return u(t, e, s)
            }

            function s(t, e, s) {
                return y(t, e, s)
            }

            function r(t, e, s) {
                return g(t, e, s)
            }

            function i(t, e, s) {
                return v(t, e, s)
            }

            function a(t, e, s) {
                return b(t, e, s)
            }

            function n(t, e, s) {
                return E(t, e, s)
            }

            function o(t, e, s) {
                return P(t, e, s)
            }

            function h(t, e, s) {
                return k(t, e, s)
            }

            function l(t, e, s) {
                return x(t, e, s)
            }

            function p(t, e, s) {
                return S(t, e, s)
            }

            function m(t, e, s) {
                var r, i = [],
                    a = t ? t.length : 0;
                for (r = 0; a > r; r += 1) "gr" == t[r].ty ? i.push(ShapeExpressionInterface.createGroupInterface(t[r], e[r], s)) : "fl" == t[r].ty ? i.push(ShapeExpressionInterface.createFillInterface(t[r], e[r], s)) : "st" == t[r].ty ? i.push(ShapeExpressionInterface.createStrokeInterface(t[r], e[r], s)) : "tm" == t[r].ty ? i.push(ShapeExpressionInterface.createTrimInterface(t[r], e[r], s)) : "tr" == t[r].ty || ("el" == t[r].ty ? i.push(ShapeExpressionInterface.createEllipseInterface(t[r], e[r], s)) : "sr" == t[r].ty ? i.push(ShapeExpressionInterface.createStarInterface(t[r], e[r], s)) : "sh" == t[r].ty ? i.push(ShapeExpressionInterface.createPathInterface(t[r], e[r], s)) : "rc" == t[r].ty ? i.push(ShapeExpressionInterface.createRectInterface(t[r], e[r], s)) : "rd" == t[r].ty && i.push(ShapeExpressionInterface.createRoundedInterface(t[r], e[r], s)));
                return i
            }
            var f = {
                    createShapeInterface: t,
                    createGroupInterface: e,
                    createTrimInterface: i,
                    createStrokeInterface: r,
                    createTransformInterface: a,
                    createEllipseInterface: n,
                    createStarInterface: o,
                    createRectInterface: h,
                    createRoundedInterface: l,
                    createPathInterface: p,
                    createFillInterface: s
                },
                d = function() {
                    return function(t, e, s) {
                        function r(t) {
                            if ("number" == typeof t) return i[t - 1];
                            for (var e = 0, s = i.length; s > e;) {
                                if (i[e]._name === t) return i[e];
                                e += 1
                            }
                        }
                        var i;
                        return r.propertyGroup = s, i = m(t, e, r), r
                    }
                }(),
                c = function() {
                    return function(t, e, s) {
                        var r, i = function(t) {
                            if ("number" == typeof t) return r[t - 1];
                            for (var e = 0, s = r.length; s > e;) {
                                if (r[e]._name === t || r[e].mn === t) return r[e];
                                e += 1
                            }
                        };
                        return i.propertyGroup = function(t) {
                            return 1 === t ? i : s(t - 1)
                        }, r = m(t.it, e.it, i.propertyGroup), i.numProperties = r.length, i
                    }
                }(),
                u = function() {
                    return function(t, e, s) {
                        var r = function(t) {
                            switch (t) {
                                case "ADBE Vectors Group":
                                case 2:
                                    return r.content;
                                case "ADBE Vector Transform Group":
                                case 3:
                                default:
                                    return r.transform
                            }
                        };
                        r.propertyGroup = function(t) {
                            return 1 === t ? r : s(t - 1)
                        };
                        var i = c(t, e, r.propertyGroup),
                            a = ShapeExpressionInterface.createTransformInterface(t.it[t.it.length - 1], e.it[e.it.length - 1], r.propertyGroup);
                        return r.content = i, r.transform = a, Object.defineProperty(r, "_name", {
                            get: function() {
                                return t.nm
                            }
                        }), r.numProperties = 1, r.nm = t.nm, r.mn = t.mn, r
                    }
                }(),
                y = function() {
                    return function(t, e, s) {
                        e.c.setGroupProperty(s), e.o.setGroupProperty(s);
                        var r = {
                            get color() {
                                return e.c.k && e.c.getValue(), [e.c.v[0] / e.c.mult, e.c.v[1] / e.c.mult, e.c.v[2] / e.c.mult, 1]
                            },
                            get opacity() {
                                return e.o.k && e.o.getValue(), e.o.v
                            },
                            _name: t.nm,
                            mn: t.mn
                        };
                        return r
                    }
                }(),
                g = function() {
                    return function(t, e, s) {
                        function r(t) {
                            return 1 === t ? i : s(t - 1)
                        }
                        e.c.setGroupProperty(r), e.o.setGroupProperty(r), e.w.setGroupProperty(r);
                        var i = {
                            get color() {
                                return e.c.k && e.c.getValue(), [e.c.v[0] / e.c.mult, e.c.v[1] / e.c.mult, e.c.v[2] / e.c.mult, 1]
                            },
                            get opacity() {
                                return e.o.k && e.o.getValue(), e.o.v
                            },
                            get strokeWidth() {
                                return e.w.k && e.w.getValue(), e.w.v
                            },
                            dashOb: {},
                            get dash() {
                                var r, i = e.d,
                                    a = t.d,
                                    n = a.length;
                                for (r = 0; n > r; r += 1) i.dataProps[r].p.k && i.dataProps[r].p.getValue(), i.dataProps[r].p.setGroupProperty(s), this.dashOb[a[r].nm] = i.dataProps[r].p.v;
                                return this.dashOb
                            },
                            _name: t.nm,
                            mn: t.mn
                        };
                        return i
                    }
                }(),
                v = function() {
                    return function(t, e, s) {
                        function r(t) {
                            return 1 == t ? i : s(--t)
                        }

                        function i(e) {
                            return e === t.e.ix ? i.end : e === t.s.ix ? i.start : e === t.o.ix ? i.offset : void 0
                        }
                        return i.propertyIndex = t.ix, e.s.setGroupProperty(r), e.e.setGroupProperty(r), e.o.setGroupProperty(r), i.propertyIndex = t.ix, Object.defineProperty(i, "start", {
                            get: function() {
                                return e.s.k && e.s.getValue(), e.s.v / e.s.mult
                            }
                        }), Object.defineProperty(i, "end", {
                            get: function() {
                                return e.e.k && e.e.getValue(), e.e.v / e.e.mult
                            }
                        }), Object.defineProperty(i, "offset", {
                            get: function() {
                                return e.o.k && e.o.getValue(), e.o.v
                            }
                        }), Object.defineProperty(i, "_name", {
                            get: function() {
                                return t.nm
                            }
                        }), i.mn = t.mn, i
                    }
                }(),
                b = function() {
                    return function(t, e, s) {
                        function r(t) {
                            return 1 == t ? i : s(--t)
                        }

                        function i(e) {
                            return t.a.ix === e ? i.anchorPoint : t.o.ix === e ? i.opacity : t.p.ix === e ? i.position : t.r.ix === e ? i.rotation : t.s.ix === e ? i.scale : t.sk && t.sk.ix === e ? i.skew : t.sa && t.sa.ix === e ? i.skewAxis : void 0
                        }
                        e.transform.mProps.o.setGroupProperty(r), e.transform.mProps.p.setGroupProperty(r), e.transform.mProps.a.setGroupProperty(r), e.transform.mProps.s.setGroupProperty(r), e.transform.mProps.r.setGroupProperty(r), e.transform.mProps.sk && (e.transform.mProps.sk.setGroupProperty(r), e.transform.mProps.sa.setGroupProperty(r)), e.transform.op.setGroupProperty(r), Object.defineProperty(i, "opacity", {
                            get: function() {
                                return e.transform.mProps.o.k && e.transform.mProps.o.getValue(), e.transform.mProps.o.v / e.transform.mProps.o.mult
                            }
                        }), Object.defineProperty(i, "position", {
                            get: function() {
                                return e.transform.mProps.p.k && e.transform.mProps.p.getValue(), [e.transform.mProps.p.v[0], e.transform.mProps.p.v[1]]
                            }
                        }), Object.defineProperty(i, "anchorPoint", {
                            get: function() {
                                return e.transform.mProps.a.k && e.transform.mProps.a.getValue(), [e.transform.mProps.a.v[0], e.transform.mProps.a.v[1]]
                            }
                        });
                        var a = [];
                        return Object.defineProperty(i, "scale", {
                            get: function() {
                                return e.transform.mProps.s.k && e.transform.mProps.s.getValue(), a[0] = e.transform.mProps.s.v[0] / e.transform.mProps.s.mult, a[1] = e.transform.mProps.s.v[1] / e.transform.mProps.s.mult, a
                            }
                        }), Object.defineProperty(i, "rotation", {
                            get: function() {
                                return e.transform.mProps.r.k && e.transform.mProps.r.getValue(), e.transform.mProps.r.v / e.transform.mProps.r.mult
                            }
                        }), Object.defineProperty(i, "skew", {
                            get: function() {
                                return e.transform.mProps.sk.k && e.transform.mProps.sk.getValue(), e.transform.mProps.sk.v
                            }
                        }), Object.defineProperty(i, "skewAxis", {
                            get: function() {
                                return e.transform.mProps.sa.k && e.transform.mProps.sa.getValue(), e.transform.mProps.sa.v
                            }
                        }), Object.defineProperty(i, "_name", {
                            get: function() {
                                return t.nm
                            }
                        }), i.ty = "tr", i.mn = t.mn, i
                    }
                }(),
                E = function() {
                    return function(t, e, s) {
                        function r(t) {
                            return 1 == t ? i : s(--t)
                        }

                        function i(e) {
                            return t.p.ix === e ? i.position : t.s.ix === e ? i.size : void 0
                        }
                        i.propertyIndex = t.ix;
                        var a = "tm" === e.sh.ty ? e.sh.prop : e.sh;
                        return a.s.setGroupProperty(r), a.p.setGroupProperty(r), Object.defineProperty(i, "size", {
                            get: function() {
                                return a.s.k && a.s.getValue(), [a.s.v[0], a.s.v[1]]
                            }
                        }), Object.defineProperty(i, "position", {
                            get: function() {
                                return a.p.k && a.p.getValue(), [a.p.v[0], a.p.v[1]]
                            }
                        }), Object.defineProperty(i, "_name", {
                            get: function() {
                                return t.nm
                            }
                        }), i.mn = t.mn, i
                    }
                }(),
                P = function() {
                    return function(t, e, s) {
                        function r(t) {
                            return 1 == t ? i : s(--t)
                        }

                        function i(e) {
                            return t.p.ix === e ? i.position : t.r.ix === e ? i.rotation : t.pt.ix === e ? i.points : t.or.ix === e || "ADBE Vector Star Outer Radius" === e ? i.outerRadius : t.os.ix === e ? i.outerRoundness : !t.ir || t.ir.ix !== e && "ADBE Vector Star Inner Radius" !== e ? t.is && t.is.ix === e ? i.innerRoundness : void 0 : i.innerRadius
                        }
                        var a = "tm" === e.sh.ty ? e.sh.prop : e.sh;
                        return i.propertyIndex = t.ix, a.or.setGroupProperty(r), a.os.setGroupProperty(r), a.pt.setGroupProperty(r), a.p.setGroupProperty(r), a.r.setGroupProperty(r), t.ir && (a.ir.setGroupProperty(r), a.is.setGroupProperty(r)), Object.defineProperty(i, "position", {
                            get: function() {
                                return a.p.k && a.p.getValue(), a.p.v
                            }
                        }), Object.defineProperty(i, "rotation", {
                            get: function() {
                                return a.r.k && a.r.getValue(), a.r.v / a.r.mult
                            }
                        }), Object.defineProperty(i, "points", {
                            get: function() {
                                return a.pt.k && a.pt.getValue(), a.pt.v
                            }
                        }), Object.defineProperty(i, "outerRadius", {
                            get: function() {
                                return a.or.k && a.or.getValue(), a.or.v
                            }
                        }), Object.defineProperty(i, "outerRoundness", {
                            get: function() {
                                return a.os.k && a.os.getValue(), a.os.v / a.os.mult
                            }
                        }), Object.defineProperty(i, "innerRadius", {
                            get: function() {
                                return a.ir ? (a.ir.k && a.ir.getValue(), a.ir.v) : 0
                            }
                        }), Object.defineProperty(i, "innerRoundness", {
                            get: function() {
                                return a.is ? (a.is.k && a.is.getValue(), a.is.v / a.is.mult) : 0
                            }
                        }), Object.defineProperty(i, "_name", {
                            get: function() {
                                return t.nm
                            }
                        }), i.mn = t.mn, i
                    }
                }(),
                k = function() {
                    return function(t, e, s) {
                        function r(t) {
                            return 1 == t ? i : s(--t)
                        }

                        function i(e) {
                            return t.p.ix === e ? i.position : t.r.ix === e ? i.rotation : t.pt.ix === e ? i.points : t.or.ix === e || "ADBE Vector Star Outer Radius" === e ? i.outerRadius : t.os.ix === e ? i.outerRoundness : !t.ir || t.ir.ix !== e && "ADBE Vector Star Inner Radius" !== e ? t.is && t.is.ix === e ? i.innerRoundness : void 0 : i.innerRadius
                        }
                        var a = "tm" === e.sh.ty ? e.sh.prop : e.sh;
                        return i.propertyIndex = t.ix, a.p.setGroupProperty(r), a.s.setGroupProperty(r), a.r.setGroupProperty(r), Object.defineProperty(i, "position", {
                            get: function() {
                                return a.p.k && a.p.getValue(), a.p.v
                            }
                        }), Object.defineProperty(i, "roundness", {
                            get: function() {
                                return a.r.k && a.r.getValue(), a.r.v
                            }
                        }), Object.defineProperty(i, "size", {
                            get: function() {
                                return a.s.k && a.s.getValue(), a.s.v
                            }
                        }), Object.defineProperty(i, "_name", {
                            get: function() {
                                return t.nm
                            }
                        }), i.mn = t.mn, i
                    }
                }(),
                x = function() {
                    return function(t, e, s) {
                        function r(t) {
                            return 1 == t ? i : s(--t)
                        }

                        function i(e) {
                            return t.r.ix === e || "Round Corners 1" === e ? i.radius : void 0
                        }
                        var a = e;
                        return i.propertyIndex = t.ix, a.rd.setGroupProperty(r), Object.defineProperty(i, "radius", {
                            get: function() {
                                return a.rd.k && a.rd.getValue(), a.rd.v
                            }
                        }), Object.defineProperty(i, "_name", {
                            get: function() {
                                return t.nm
                            }
                        }), i.mn = t.mn, i
                    }
                }(),
                S = function() {
                    return function(t, e, s) {
                        var r = "tm" === e.sh.ty ? e.sh.prop : e.sh;
                        r.setGroupProperty(s);
                        var i = {
                            get shape() {
                                return r.k && r.getValue(), r.v
                            },
                            get path() {
                                return r.k && r.getValue(), r.v
                            },
                            _name: t.nm,
                            mn: t.mn
                        };
                        return i
                    }
                }();
            return f
        }(),
        LayerExpressionInterface = function() {
            function t(t) {
                var e = new Matrix;
                if (e.reset(), this._elem.finalTransform.mProp.applyToMatrix(e), this._elem.hierarchy && this._elem.hierarchy.length) {
                    var s, r = this._elem.hierarchy.length;
                    for (s = 0; r > s; s += 1) this._elem.hierarchy[s].finalTransform.mProp.applyToMatrix(e);
                    return e.applyToPointArray(t[0], t[1], t[2] || 0)
                }
                return e.applyToPointArray(t[0], t[1], t[2] || 0)
            }
            return function(e) {
                function s(t) {
                    i.mask = t.getMask.bind(t)
                }

                function r(t) {
                    i.effect = t
                }

                function i(t) {
                    switch (t) {
                        case "ADBE Root Vectors Group":
                        case 2:
                            return i.shapeInterface;
                        case 1:
                        case "Transform":
                        case "transform":
                        case "ADBE Transform Group":
                            return a;
                        case 4:
                        case "ADBE Effect Parade":
                            return i.effect
                    }
                }
                var a = TransformExpressionInterface(e.transform);
                return i.toWorld = t, i.toComp = t, i._elem = e, Object.defineProperty(i, "hasParent", {
                    get: function() {
                        return !!e.hierarchy
                    }
                }), Object.defineProperty(i, "parent", {
                    get: function() {
                        return e.hierarchy[0].layerInterface
                    }
                }), Object.defineProperty(i, "rotation", {
                    get: function() {
                        return a.rotation
                    }
                }), Object.defineProperty(i, "scale", {
                    get: function() {
                        return a.scale
                    }
                }), Object.defineProperty(i, "position", {
                    get: function() {
                        return a.position
                    }
                }), Object.defineProperty(i, "anchorPoint", {
                    get: function() {
                        return a.anchorPoint
                    }
                }), Object.defineProperty(i, "transform", {
                    get: function() {
                        return a
                    }
                }), Object.defineProperty(i, "_name", {
                    value: e.data.nm
                }), Object.defineProperty(i, "content", {
                    get: function() {
                        return i.shapeInterface
                    }
                }), i.active = !0, i.registerMaskInterface = s, i.registerEffectsInterface = r, i
            }
        }(),
        CompExpressionInterface = function() {
            return function(t) {
                function e(e) {
                    for (var s = 0, r = t.layers.length; r > s;) {
                        if (t.layers[s].nm === e || t.layers[s].ind === e - 1) return t.elements[s].layerInterface;
                        s += 1
                    }
                }
                return e.layer = e, e.pixelAspect = 1, e.height = t.globalData.compSize.h, e.width = t.globalData.compSize.w, e.pixelAspect = 1, e.frameDuration = 1 / t.globalData.frameRate, e
            }
        }(),
        TransformExpressionInterface = function() {
            return function(t) {
                function e(s) {
                    switch (s) {
                        case "scale":
                        case "Scale":
                        case "ADBE Scale":
                            return e.scale;
                        case "rotation":
                        case "Rotation":
                        case "ADBE Rotation":
                            return e.rotation;
                        case "position":
                        case "Position":
                        case "ADBE Position":
                            return t.position;
                        case "anchorPoint":
                        case "AnchorPoint":
                        case "ADBE AnchorPoint":
                            return e.anchorPoint;
                        case "opacity":
                        case "Opacity":
                            return e.opacity
                    }
                }
                return Object.defineProperty(e, "rotation", {
                    get: function() {
                        return t.rotation
                    }
                }), Object.defineProperty(e, "scale", {
                    get: function() {
                        var e, s = t.scale,
                            r = s.length,
                            i = Array.apply(null, {
                                length: r
                            });
                        for (e = 0; r > e; e += 1) i[e] = 100 * s[e];
                        return i
                    }
                }), Object.defineProperty(e, "position", {
                    get: function() {
                        return t.position
                    }
                }), Object.defineProperty(e, "xPosition", {
                    get: function() {
                        return t.xPosition
                    }
                }), Object.defineProperty(e, "yPosition", {
                    get: function() {
                        return t.yPosition
                    }
                }), Object.defineProperty(e, "anchorPoint", {
                    get: function() {
                        return t.anchorPoint
                    }
                }), Object.defineProperty(e, "opacity", {
                    get: function() {
                        return 100 * t.opacity
                    }
                }), e
            }
        }(),
        ProjectInterface = function() {
            function t(t) {
                this.compositions.push(t)
            }
            return function() {
                function e(t) {
                    for (var e = 0, s = this.compositions.length; s > e;) {
                        if (this.compositions[e].data && this.compositions[e].data.nm === t) return this.compositions[e].prepareFrame(this.currentFrame), this.compositions[e].compInterface;
                        e += 1
                    }
                }
                return e.compositions = [], e.currentFrame = 0, e.registerComposition = t, e
            }
        }(),
        EffectsExpressionInterface = function() {
            function t(t, s) {
                if (t.effects) {
                    var r, i = [],
                        a = t.data.ef,
                        n = t.effects.effectElements.length;
                    for (r = 0; n > r; r += 1) i.push(e(a[r], t.effects.effectElements[r], s, t));
                    return function(e) {
                        for (var s = t.data.ef, r = 0, a = s.length; a > r;) {
                            if (e === s[r].nm || e === s[r].mn || e === s[r].ix) return i[r];
                            r += 1
                        }
                    }
                }
            }

            function e(t, r, i, a) {
                var n, o = [],
                    h = t.ef.length;
                for (n = 0; h > n; n += 1) o.push(5 === t.ef[n].ty ? e(t.ef[n], r.effectElements[n], i, a) : s(r.effectElements[n], t.ef[n].ty, a));
                return function(e) {
                    for (var s = t.ef, r = 0, i = s.length; i > r;) {
                        if (e === s[r].nm || e === s[r].mn || e === s[r].ix) return 5 === s[r].ty ? o[r] : o[r]();
                        r += 1
                    }
                    return o[0]()
                }
            }

            function s(t, e, s) {
                return function() {
                    if (10 === e) return s.comp.compInterface(t.p.v);
                    if (t.p.k && t.p.getValue(), "number" == typeof t.p.v) return t.p.v;
                    var r, i = t.p.v.length,
                        a = Array.apply(null, {
                            length: i
                        });
                    for (r = 0; i > r; r += 1) a[r] = t.p.v[r];
                    return a
                }
            }
            var r = {
                createEffectsInterface: t
            };
            return r
        }();
    GroupEffect.prototype.getValue = function() {
        this.mdf = !1;
        var t, e = this.dynamicProperties.length;
        for (t = 0; e > t; t += 1) this.dynamicProperties[t].getValue(), this.mdf = this.dynamicProperties[t].mdf ? !0 : this.mdf
    }, GroupEffect.prototype.init = function(t, e, s) {
        this.data = t, this.mdf = !1, this.effectElements = [];
        var r, i, a = this.data.ef.length,
            n = this.data.ef;
        for (r = 0; a > r; r += 1) switch (n[r].ty) {
            case 0:
                i = new SliderEffect(n[r], e, s), this.effectElements.push(i);
                break;
            case 1:
                i = new AngleEffect(n[r], e, s), this.effectElements.push(i);
                break;
            case 2:
                i = new ColorEffect(n[r], e, s), this.effectElements.push(i);
                break;
            case 3:
                i = new PointEffect(n[r], e, s), this.effectElements.push(i);
                break;
            case 4:
            case 7:
                i = new CheckboxEffect(n[r], e, s), this.effectElements.push(i);
                break;
            case 10:
                i = new LayerIndexEffect(n[r], e, s), this.effectElements.push(i);
                break;
            case 5:
                i = new EffectsManager(n[r], e, s), this.effectElements.push(i);
                break;
            case 6:
                i = new NoValueEffect(n[r], e, s), this.effectElements.push(i)
        }
    };
    var bodymovinjs = {};
    bodymovinjs.play = play, bodymovinjs.pause = pause, bodymovinjs.togglePause = togglePause, bodymovinjs.setSpeed = setSpeed, bodymovinjs.setDirection = setDirection, bodymovinjs.stop = stop, bodymovinjs.moveFrame = moveFrame, bodymovinjs.searchAnimations = searchAnimations, bodymovinjs.registerAnimation = registerAnimation, bodymovinjs.loadAnimation = loadAnimation, bodymovinjs.setSubframeRendering = setSubframeRendering, bodymovinjs.resize = resize, bodymovinjs.start = start, bodymovinjs.goToAndStop = goToAndStop, bodymovinjs.destroy = destroy, bodymovinjs.setQuality = setQuality, bodymovinjs.installPlugin = installPlugin, bodymovinjs.__getFactory = getFactory, bodymovinjs.version = "4.4.29";
    var standalone = "__[STANDALONE]__",
        animationData = "__[ANIMATIONDATA]__",
        renderer = "";
    if (standalone) {
        var scripts = document.getElementsByTagName("script"),
            index = scripts.length - 1,
            myScript = scripts[index],
            queryString = myScript.src.replace(/^[^\?]+\??/, "");
        renderer = getQueryVariable("renderer")
    }
    var readyStateCheckInterval = setInterval(checkReady, 100);
    return bodymovinjs
});
;
/**
 * @file
 * Back to top.
 */

'use strict';

(function (Drupal,$) {
  $(document).ready(function() {

    // Variables.
    var window = $(window),
        backToTop = $('.back-to-top'),
        windowHeight = window.height();

    // Events.

    $(window).on('scroll', function(){
      if ($(window).scrollTop() > windowHeight) {
        backToTop.addClass('show');
      } else {
        backToTop.removeClass('show');
      }
    });

    backToTop.click(function () {
      $('html, body').animate({
        scrollTop: 0
      }, 'slow');
    });
  });
})(Drupal, jQuery);;
/**
 * @file
 * Da Vinci Custom Code of the javascript behaviour.
 */

'use strict';

(function ($) {
  Drupal.behaviors.da_vinciTheme = {
    attach: function (context) {

      function querystring(key) {
        var re=new RegExp('(?:\\?|&)'+key+'=(.*?)(?=&|$)','gi');
        var r=[], m;
        while ((m=re.exec(document.location.search)) !== null) r.push(m[1]);
        return r;
      }
      function basename(str) {
        var base = new String(str).substring(str.lastIndexOf('/') + 1);
        if(base.lastIndexOf(".") != -1) {
          base = base.substring(0, base.lastIndexOf("."));
        }
        return base;
      }
      function updateQueryStringParameter(uri, key, value) {
        var re = new RegExp("([?|&])" + key + "=.*?(&|$)", "i");
        separator = uri.indexOf('?') !== -1 ? "&" : "?";
        var url = window.location.href;
        if (uri.match(re)) {
          url = uri.replace(re, '$1' + key + "=" + value + '$2');
        }
        else {
          url = uri + separator + key + "=" + value;
        }
        return url;
      }
      
    }
  };
})(jQuery);
;
/**
 * @file
 * Your custom code into javascript behaviour.
 */

'use strict';

(function (Drupal, $) {
  $(document).ready(function () {

  });
})(Drupal, jQuery);

;
/**
 * @file
 * Sliding panel.
 */

'use strict';

(function (Drupal, $) {
  $(document).ready(function () {

    // Fade into menu.
    $('#menu-svg').on('click touchstart', function (e) {
      buttonChange();
      $('.sliding-panel-content').toggleClass('is-visible');
      $('body').toggleClass('frozen-body');
      e.preventDefault();
    });

    $(window).resize(function () {
      if ($(this).width() > 1024) {
        if ($('.sliding-panel-content').hasClass('is-visible')) {
          $('.sliding-panel-content').removeClass('is-visible');
          $('body').removeClass('frozen-body');
          buttonChange();
        }
      }
    });

    // Burguer Menu.
    var menu_svg = document.getElementById('menu-svg');
    var menu_settings = {
      container: menu_svg,
      renderer: 'svg',
      loop: false,
      prerender: false,
      autoplay: false,
      autoloadSegments: false,
      path: '/themes/contrib/da_vinci/js/utils/menu-svg.json'
    };
    var menu_svg_init;
    var menu_svg_x = false;
    menu_svg_init = bodymovin.loadAnimation(menu_settings);

    function throwComplete() {
      isThrowing = false;
      menu_svg_init.removeEventListener('loopComplete', throwComplete);
    }

    function buttonChange() {
      if (menu_svg_x) {
        menu_svg_init.playSegments([26, 39], true);
        menu_svg_x = false
      } else {
        menu_svg_x = true;
        menu_svg_init.playSegments([0, 14], true)
      }
    }

  });
})(Drupal, jQuery);
;
/**
 * @file
 * Da Vinci Custom Code of the javascript behaviour.
 */

'use strict';

(function ($) {
  Drupal.behaviors.davinciTheme = {
    attach: function (context) {

      // Convert Logo.png to svg with posibility change color.
			$('.site-logo img').each(function(){

				var $img = jQuery(this);
				var imgID = $img.attr('id');
				var imgClass = $img.attr('class');
				var imgURL = $img.attr('src');
				var imgTitle = $img.attr('alt');

				$.get(imgURL, function(data) {
					// Get the SVG tag, ignore the rest
					var $svg = jQuery(data).find('svg');
					var $svg_title = jQuery(data).find('svg title');

					// Add replaced image's ID to the new SVG
					if(typeof imgID !== 'undefined') {
							$svg = $svg.attr('id', imgID);
					}

					// Add replaced image's Title to the new SVG
					if(typeof imgTitle !== 'undefined') {
							$svg_title = $svg_title.text(imgTitle);
					}

					// Add replaced image's classes to the new SVG
					if(typeof imgClass !== 'undefined') {
							$svg = $svg.attr('class', imgClass+' replaced-svg');
					}

					// Remove any invalid XML tags as per http://validator.w3.org
					$svg = $svg.removeAttr('xmlns:a');

					// Check if the viewport is set, if the viewport is not set the SVG wont't scale.
					if(!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
							$svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
					}

					// Replace image with new SVG
					$img.replaceWith($svg);

				}, 'xml');

			});

    }
  };
})(jQuery);
;
