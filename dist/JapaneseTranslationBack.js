/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/JapaneseTranslationBack.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/preact/dist/preact.module.js":
/*!***************************************************!*\
  !*** ./node_modules/preact/dist/preact.module.js ***!
  \***************************************************/
/*! exports provided: render, hydrate, createElement, h, Fragment, createRef, isValidElement, Component, cloneElement, createContext, toChildArray, _unmount, options */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return E; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hydrate", function() { return H; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createElement", function() { return v; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return v; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Fragment", function() { return d; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createRef", function() { return p; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isValidElement", function() { return l; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Component", function() { return y; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cloneElement", function() { return I; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createContext", function() { return L; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toChildArray", function() { return b; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_unmount", function() { return A; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "options", function() { return n; });
var n,l,u,i,t,o,r,f={},e=[],c=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord/i;function s(n,l){for(var u in l)n[u]=l[u];return n}function a(n){var l=n.parentNode;l&&l.removeChild(n)}function v(n,l,u){var i,t=arguments,o={};for(i in l)"key"!==i&&"ref"!==i&&(o[i]=l[i]);if(arguments.length>3)for(u=[u],i=3;i<arguments.length;i++)u.push(t[i]);if(null!=u&&(o.children=u),"function"==typeof n&&null!=n.defaultProps)for(i in n.defaultProps)void 0===o[i]&&(o[i]=n.defaultProps[i]);return h(n,o,l&&l.key,l&&l.ref)}function h(l,u,i,t){var o={type:l,props:u,key:i,ref:t,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0};return n.vnode&&n.vnode(o),o}function p(){return{}}function d(n){return n.children}function y(n,l){this.props=n,this.context=l}function m(n,l){if(null==l)return n.__?m(n.__,n.__.__k.indexOf(n)+1):null;for(var u;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e)return u.__e;return"function"==typeof n.type?m(n):null}function w(n){var l,u;if(null!=(n=n.__)&&null!=n.__c){for(n.__e=n.__c.base=null,l=0;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e){n.__e=n.__c.base=u.__e;break}return w(n)}}function g(l){(!l.__d&&(l.__d=!0)&&1===u.push(l)||t!==n.debounceRendering)&&((t=n.debounceRendering)||i)(k)}function k(){var n,l,i,t,o,r,f;for(u.sort(function(n,l){return l.__v.__b-n.__v.__b});n=u.pop();)n.__d&&(i=void 0,t=void 0,r=(o=(l=n).__v).__e,(f=l.__P)&&(i=[],t=z(f,o,s({},o),l.__n,void 0!==f.ownerSVGElement,null,i,null==r?m(o):r),T(i,o),t!=r&&w(o)))}function _(n,l,u,i,t,o,r,c,s){var v,h,p,d,y,w,g,k=u&&u.__k||e,_=k.length;if(c==f&&(c=null!=o?o[0]:_?m(u,0):null),v=0,l.__k=b(l.__k,function(u){if(null!=u){if(u.__=l,u.__b=l.__b+1,null===(p=k[v])||p&&u.key==p.key&&u.type===p.type)k[v]=void 0;else for(h=0;h<_;h++){if((p=k[h])&&u.key==p.key&&u.type===p.type){k[h]=void 0;break}p=null}if(d=z(n,u,p=p||f,i,t,o,r,c,s),(h=u.ref)&&p.ref!=h&&(g||(g=[]),p.ref&&g.push(p.ref,null,u),g.push(h,u.__c||d,u)),null!=d){var e;if(null==w&&(w=d),void 0!==u.__d)e=u.__d,u.__d=void 0;else if(o==p||d!=c||null==d.parentNode){n:if(null==c||c.parentNode!==n)n.appendChild(d),e=null;else{for(y=c,h=0;(y=y.nextSibling)&&h<_;h+=2)if(y==d)break n;n.insertBefore(d,c),e=c}"option"==l.type&&(n.value="")}c=void 0!==e?e:d.nextSibling,"function"==typeof l.type&&(l.__d=c)}}return v++,u}),l.__e=w,null!=o&&"function"!=typeof l.type)for(v=o.length;v--;)null!=o[v]&&a(o[v]);for(v=_;v--;)null!=k[v]&&A(k[v],k[v]);if(g)for(v=0;v<g.length;v++)j(g[v],g[++v],g[++v])}function b(n,l,u){if(null==u&&(u=[]),null==n||"boolean"==typeof n)l&&u.push(l(null));else if(Array.isArray(n))for(var i=0;i<n.length;i++)b(n[i],l,u);else u.push(l?l("string"==typeof n||"number"==typeof n?h(null,n,null,null):null!=n.__e||null!=n.__c?h(n.type,n.props,n.key,null):n):n);return u}function x(n,l,u,i,t){var o;for(o in u)o in l||C(n,o,null,u[o],i);for(o in l)t&&"function"!=typeof l[o]||"value"===o||"checked"===o||u[o]===l[o]||C(n,o,l[o],u[o],i)}function P(n,l,u){"-"===l[0]?n.setProperty(l,u):n[l]="number"==typeof u&&!1===c.test(l)?u+"px":null==u?"":u}function C(n,l,u,i,t){var o,r,f,e,c;if(t?"className"===l&&(l="class"):"class"===l&&(l="className"),"key"===l||"children"===l);else if("style"===l)if(o=n.style,"string"==typeof u)o.cssText=u;else{if("string"==typeof i&&(o.cssText="",i=null),i)for(r in i)u&&r in u||P(o,r,"");if(u)for(f in u)i&&u[f]===i[f]||P(o,f,u[f])}else"o"===l[0]&&"n"===l[1]?(e=l!==(l=l.replace(/Capture$/,"")),c=l.toLowerCase(),l=(c in n?c:l).slice(2),u?(i||n.addEventListener(l,N,e),(n.l||(n.l={}))[l]=u):n.removeEventListener(l,N,e)):"list"!==l&&"tagName"!==l&&"form"!==l&&"type"!==l&&"size"!==l&&!t&&l in n?n[l]=null==u?"":u:"function"!=typeof u&&"dangerouslySetInnerHTML"!==l&&(l!==(l=l.replace(/^xlink:?/,""))?null==u||!1===u?n.removeAttributeNS("http://www.w3.org/1999/xlink",l.toLowerCase()):n.setAttributeNS("http://www.w3.org/1999/xlink",l.toLowerCase(),u):null==u||!1===u?n.removeAttribute(l):n.setAttribute(l,u))}function N(l){this.l[l.type](n.event?n.event(l):l)}function z(l,u,i,t,o,r,f,e,c){var a,v,h,p,m,w,g,k,b,x,P=u.type;if(void 0!==u.constructor)return null;(a=n.__b)&&a(u);try{n:if("function"==typeof P){if(k=u.props,b=(a=P.contextType)&&t[a.__c],x=a?b?b.props.value:a.__:t,i.__c?g=(v=u.__c=i.__c).__=v.__E:("prototype"in P&&P.prototype.render?u.__c=v=new P(k,x):(u.__c=v=new y(k,x),v.constructor=P,v.render=D),b&&b.sub(v),v.props=k,v.state||(v.state={}),v.context=x,v.__n=t,h=v.__d=!0,v.__h=[]),null==v.__s&&(v.__s=v.state),null!=P.getDerivedStateFromProps&&(v.__s==v.state&&(v.__s=s({},v.__s)),s(v.__s,P.getDerivedStateFromProps(k,v.__s))),p=v.props,m=v.state,h)null==P.getDerivedStateFromProps&&null!=v.componentWillMount&&v.componentWillMount(),null!=v.componentDidMount&&v.__h.push(v.componentDidMount);else{if(null==P.getDerivedStateFromProps&&k!==p&&null!=v.componentWillReceiveProps&&v.componentWillReceiveProps(k,x),!v.__e&&null!=v.shouldComponentUpdate&&!1===v.shouldComponentUpdate(k,v.__s,x)){for(v.props=k,v.state=v.__s,v.__d=!1,v.__v=u,u.__e=i.__e,u.__k=i.__k,v.__h.length&&f.push(v),a=0;a<u.__k.length;a++)u.__k[a]&&(u.__k[a].__=u);break n}null!=v.componentWillUpdate&&v.componentWillUpdate(k,v.__s,x),null!=v.componentDidUpdate&&v.__h.push(function(){v.componentDidUpdate(p,m,w)})}v.context=x,v.props=k,v.state=v.__s,(a=n.__r)&&a(u),v.__d=!1,v.__v=u,v.__P=l,a=v.render(v.props,v.state,v.context),u.__k=null!=a&&a.type==d&&null==a.key?a.props.children:a,null!=v.getChildContext&&(t=s(s({},t),v.getChildContext())),h||null==v.getSnapshotBeforeUpdate||(w=v.getSnapshotBeforeUpdate(p,m)),_(l,u,i,t,o,r,f,e,c),v.base=u.__e,v.__h.length&&f.push(v),g&&(v.__E=v.__=null),v.__e=!1}else u.__e=$(i.__e,u,i,t,o,r,f,c);(a=n.diffed)&&a(u)}catch(l){n.__e(l,u,i)}return u.__e}function T(l,u){n.__c&&n.__c(u,l),l.some(function(u){try{l=u.__h,u.__h=[],l.some(function(n){n.call(u)})}catch(l){n.__e(l,u.__v)}})}function $(n,l,u,i,t,o,r,c){var s,a,v,h,p,d=u.props,y=l.props;if(t="svg"===l.type||t,null==n&&null!=o)for(s=0;s<o.length;s++)if(null!=(a=o[s])&&(null===l.type?3===a.nodeType:a.localName===l.type)){n=a,o[s]=null;break}if(null==n){if(null===l.type)return document.createTextNode(y);n=t?document.createElementNS("http://www.w3.org/2000/svg",l.type):document.createElement(l.type,y.is&&{is:y.is}),o=null}if(null===l.type)null!=o&&(o[o.indexOf(n)]=null),d!==y&&n.data!=y&&(n.data=y);else if(l!==u){if(null!=o&&(o[o.indexOf(n)]=null,o=e.slice.call(n.childNodes)),v=(d=u.props||f).dangerouslySetInnerHTML,h=y.dangerouslySetInnerHTML,!c){if(d===f)for(d={},p=0;p<n.attributes.length;p++)d[n.attributes[p].name]=n.attributes[p].value;(h||v)&&(h&&v&&h.__html==v.__html||(n.innerHTML=h&&h.__html||""))}x(n,y,d,t,c),l.__k=l.props.children,h||_(n,l,u,i,"foreignObject"!==l.type&&t,o,r,f,c),c||("value"in y&&void 0!==y.value&&y.value!==n.value&&(n.value=null==y.value?"":y.value),"checked"in y&&void 0!==y.checked&&y.checked!==n.checked&&(n.checked=y.checked))}return n}function j(l,u,i){try{"function"==typeof l?l(u):l.current=u}catch(l){n.__e(l,i)}}function A(l,u,i){var t,o,r;if(n.unmount&&n.unmount(l),(t=l.ref)&&(t.current&&t.current!==l.__e||j(t,null,u)),i||"function"==typeof l.type||(i=null!=(o=l.__e)),l.__e=l.__d=void 0,null!=(t=l.__c)){if(t.componentWillUnmount)try{t.componentWillUnmount()}catch(l){n.__e(l,u)}t.base=t.__P=null}if(t=l.__k)for(r=0;r<t.length;r++)t[r]&&A(t[r],u,i);null!=o&&a(o)}function D(n,l,u){return this.constructor(n,u)}function E(l,u,i){var t,r,c;n.__&&n.__(l,u),r=(t=i===o)?null:i&&i.__k||u.__k,l=v(d,null,[l]),c=[],z(u,(t?u:i||u).__k=l,r||f,f,void 0!==u.ownerSVGElement,i&&!t?[i]:r?null:e.slice.call(u.childNodes),c,i||f,t),T(c,l)}function H(n,l){E(n,l,o)}function I(n,l){return l=s(s({},n.props),l),arguments.length>2&&(l.children=e.slice.call(arguments,2)),h(n.type,l,l.key||n.key,l.ref||n.ref)}function L(n){var l={},u={__c:"__cC"+r++,__:n,Consumer:function(n,l){return n.children(l)},Provider:function(n){var i,t=this;return this.getChildContext||(i=[],this.getChildContext=function(){return l[u.__c]=t,l},this.shouldComponentUpdate=function(l){n.value!==l.value&&i.some(function(n){n.context=l.value,g(n)})},this.sub=function(n){i.push(n);var l=n.componentWillUnmount;n.componentWillUnmount=function(){i.splice(i.indexOf(n),1),l&&l.call(n)}}),n.children}};return u.Consumer.contextType=u,u}n={__e:function(n,l){for(var u,i;l=l.__;)if((u=l.__c)&&!u.__)try{if(u.constructor&&null!=u.constructor.getDerivedStateFromError&&(i=!0,u.setState(u.constructor.getDerivedStateFromError(n))),null!=u.componentDidCatch&&(i=!0,u.componentDidCatch(n)),i)return g(u.__E=u)}catch(l){n=l}throw n}},l=function(n){return null!=n&&void 0===n.constructor},y.prototype.setState=function(n,l){var u;u=this.__s!==this.state?this.__s:this.__s=s({},this.state),"function"==typeof n&&(n=n(u,this.props)),n&&s(u,n),null!=n&&this.__v&&(l&&this.__h.push(l),g(this))},y.prototype.forceUpdate=function(n){this.__v&&(this.__e=!0,n&&this.__h.push(n),g(this))},y.prototype.render=d,u=[],i="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,o=f,r=0;
//# sourceMappingURL=preact.module.js.map


/***/ }),

/***/ "./src/JapaneseTranslationBack.tsx":
/*!*****************************************!*\
  !*** ./src/JapaneseTranslationBack.tsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const preact_1 = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
const Persist_1 = __webpack_require__(/*! ./Persist */ "./src/Persist.ts");
const JapaneseTranslationFront_1 = __webpack_require__(/*! ./JapaneseTranslationFront */ "./src/JapaneseTranslationFront.tsx");
let card = document.getElementsByClassName('card')[0];
class JapaneseTranslationBack extends preact_1.Component {
    constructor() {
        super();
        this.showHint = () => {
            this.setState({ hintVisible: true });
        };
        this.showBack = () => {
            this.setState({ displayFront: false });
        };
        this.state = {
            hintVisible: false,
            dictionary_form_kana: '{{dictionary_form_kana}}',
            type: '{{type}}',
            displayFront: Persist_1.default.getItem() === 'display front'
        };
        Persist_1.default.setItem('displayed front');
    }
    render(props, state) {
        return (state.displayFront ?
            preact_1.h("span", null,
                preact_1.h(JapaneseTranslationFront_1.default, null),
                preact_1.h("button", { onClick: this.showBack }, "Show Back"))
            :
                preact_1.h("div", null,
                    preact_1.h("div", null, '{{dictionary_form}}'),
                    state.dictionary_form_kana !== '' && preact_1.h("div", null, '{{dictionary_form_kana}}'),
                    preact_1.h("div", null, '{{translation}}'),
                    state.type === 'ichidan-verb' && preact_1.h("div", { className: "ichidan-verb" }, "Ichidan verb"),
                    state.type === 'godan-verb' && preact_1.h("div", { className: "godan-verb" }, "Godan verb"),
                    state.type === 'irregular-verb' && preact_1.h("div", { className: "irregular-verb" }, "Irregular verb")));
    }
}
preact_1.render(preact_1.h(JapaneseTranslationBack, null), card);


/***/ }),

/***/ "./src/JapaneseTranslationFront.tsx":
/*!******************************************!*\
  !*** ./src/JapaneseTranslationFront.tsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const preact_1 = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
const Persist_1 = __webpack_require__(/*! ./Persist */ "./src/Persist.ts");
let card = document.getElementsByClassName('card')[0];
class JapaneseTranslationFront extends preact_1.Component {
    constructor() {
        super();
        this.showHint = () => {
            this.setState({ hintVisible: true });
        };
        this.state = { hintVisible: false, dictionary_form_kana: '{{dictionary_form_kana}}' };
        if (Persist_1.default.getItem() !== 'displayed front') {
            Persist_1.default.setItem('display front');
        }
    }
    render(props, state) {
        return (preact_1.h("div", null,
            preact_1.h("div", null, '{{dictionary_form}}'),
            preact_1.h("div", null,
                !state.hintVisible && state.dictionary_form_kana !== '' && preact_1.h("button", { onClick: this.showHint }, "Show kana"),
                state.hintVisible && '{{dictionary_form_kana}}')));
    }
}
exports.default = JapaneseTranslationFront;
preact_1.render(preact_1.h(JapaneseTranslationFront, null), card);


/***/ }),

/***/ "./src/Persist.ts":
/*!************************!*\
  !*** ./src/Persist.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(/*! ./anki-persistence */ "./src/anki-persistence.js");
exports.default = {
    setItem(item) {
        window.Persistence.setItem(item);
    },
    getItem() {
        return window.Persistence.getItem();
    }
};


/***/ }),

/***/ "./src/anki-persistence.js":
/*!*********************************!*\
  !*** ./src/anki-persistence.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// anki-persistence
// https://github.com/SimonLammer/anki-persistence

if (typeof(window.Persistence) === 'undefined') {
  var _persistenceKey = 'github.com/SimonLammer/anki-persistence/';
  var _defaultKey = '_default';
  window.Persistence_sessionStorage = function() { // used in android, iOS, web
    var isAvailable = false;
    try {
      if (typeof(window.sessionStorage) === 'object') {
        isAvailable = true;
        this.clear = function() {
          for (var i = 0; i < sessionStorage.length; i++) {
            var k = sessionStorage.key(i);
            if (k.indexOf(_persistenceKey) == 0) {
              sessionStorage.removeItem(k);
              i--;
            }
          };
        };
        this.setItem = function(key, value) {
          if (value == undefined) {
            value = key;
            key = _defaultKey;
          }
          sessionStorage.setItem(_persistenceKey + key, JSON.stringify(value));
        };
        this.getItem = function(key) {
          if (key == undefined) {
            key = _defaultKey;
          }
          return JSON.parse(sessionStorage.getItem(_persistenceKey + key));
        };
        this.removeItem = function(key) {
          if (key == undefined) {
            key = _defaultKey;
          }
          sessionStorage.removeItem(_persistenceKey + key);
        };
      }
    } catch(err) {}
    this.isAvailable = function() {
      return isAvailable;
    };
  };
  window.Persistence_windowKey = function(persistentKey) { // used in windows, linux, mac
    var obj = window[persistentKey];
    var isAvailable = false;
    if (typeof(obj) === 'object') {
      isAvailable = true;
      this.clear = function() {
        obj[_persistenceKey] = {};
      };
      this.setItem = function(key, value) {
        if (value == undefined) {
          value = key;
          key = _defaultKey;
        }
        obj[_persistenceKey][key] = value;
      };
      this.getItem = function(key) {
        if (key == undefined) {
          key = _defaultKey;
        }
        return obj[_persistenceKey][key] == undefined ? null : obj[_persistenceKey][key];
      };
      this.removeItem = function(key) {
        if (key == undefined) {
          key = _defaultKey;
        }
        delete obj[_persistenceKey][key];
      };

      if (obj[_persistenceKey] == undefined) {
        this.clear();
      }
    }
    this.isAvailable = function() {
      return isAvailable;
    };
  };
  /*
   *   client  | sessionStorage | persistentKey | useful location |
   * ----------|----------------|---------------|-----------------|
   * web       |       YES      |       -       |       NO        |
   * windows   |       NO       |       py      |       NO        |
   * android   |       YES      |       -       |       NO        |
   * linux 2.0 |       NO       |       qt      |       YES       |
   * linux 2.1 |       NO       |       qt      |       YES       |
   * mac 2.0   |       NO       |       py      |       NO        |
   * mac 2.1   |       NO       |       qt      |       YES       |
   * iOS       |       YES      |       -       |       NO        |
   */
  window.Persistence = new Persistence_sessionStorage(); // android, iOS, web
  if (!Persistence.isAvailable()) {
    window.Persistence = new Persistence_windowKey("py"); // windows, mac (2.0)
  }
  if (!Persistence.isAvailable()) {
    var titleStartIndex = window.location.toString().indexOf('title'); // if titleStartIndex > 0, window.location is useful
    var titleContentIndex = window.location.toString().indexOf('main', titleStartIndex);
    if (titleStartIndex > 0 && titleContentIndex > 0 && (titleContentIndex - titleStartIndex) < 10) {
      window.Persistence = new Persistence_windowKey("qt"); // linux, mac (2.1)
    }
  }
}

/* harmony default export */ __webpack_exports__["default"] = (window.Persistence);

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ByZWFjdC9kaXN0L3ByZWFjdC5tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0phcGFuZXNlVHJhbnNsYXRpb25CYWNrLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvSmFwYW5lc2VUcmFuc2xhdGlvbkZyb250LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvUGVyc2lzdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYW5raS1wZXJzaXN0ZW5jZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFBc0Isc0VBQXNFLGdCQUFnQix5QkFBeUIsU0FBUyxj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QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMERBQTBEO0FBQzFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdEQUF3RDtBQUN4RDtBQUNBLHlEQUF5RDtBQUN6RDtBQUNBO0FBQ0Esc0VBQXNFO0FBQ3RFO0FBQ0E7QUFDQSwyREFBMkQ7QUFDM0Q7QUFDQTtBQUNBOztBQUVlLGlGQUFrQixFIiwiZmlsZSI6IkphcGFuZXNlVHJhbnNsYXRpb25CYWNrLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvSmFwYW5lc2VUcmFuc2xhdGlvbkJhY2sudHN4XCIpO1xuIiwidmFyIG4sbCx1LGksdCxvLHIsZj17fSxlPVtdLGM9L2FjaXR8ZXgoPzpzfGd8bnxwfCQpfHJwaHxncmlkfG93c3xtbmN8bnR3fGluZVtjaF18em9vfF5vcmQvaTtmdW5jdGlvbiBzKG4sbCl7Zm9yKHZhciB1IGluIGwpblt1XT1sW3VdO3JldHVybiBufWZ1bmN0aW9uIGEobil7dmFyIGw9bi5wYXJlbnROb2RlO2wmJmwucmVtb3ZlQ2hpbGQobil9ZnVuY3Rpb24gdihuLGwsdSl7dmFyIGksdD1hcmd1bWVudHMsbz17fTtmb3IoaSBpbiBsKVwia2V5XCIhPT1pJiZcInJlZlwiIT09aSYmKG9baV09bFtpXSk7aWYoYXJndW1lbnRzLmxlbmd0aD4zKWZvcih1PVt1XSxpPTM7aTxhcmd1bWVudHMubGVuZ3RoO2krKyl1LnB1c2godFtpXSk7aWYobnVsbCE9dSYmKG8uY2hpbGRyZW49dSksXCJmdW5jdGlvblwiPT10eXBlb2YgbiYmbnVsbCE9bi5kZWZhdWx0UHJvcHMpZm9yKGkgaW4gbi5kZWZhdWx0UHJvcHMpdm9pZCAwPT09b1tpXSYmKG9baV09bi5kZWZhdWx0UHJvcHNbaV0pO3JldHVybiBoKG4sbyxsJiZsLmtleSxsJiZsLnJlZil9ZnVuY3Rpb24gaChsLHUsaSx0KXt2YXIgbz17dHlwZTpsLHByb3BzOnUsa2V5OmkscmVmOnQsX19rOm51bGwsX186bnVsbCxfX2I6MCxfX2U6bnVsbCxfX2Q6dm9pZCAwLF9fYzpudWxsLGNvbnN0cnVjdG9yOnZvaWQgMH07cmV0dXJuIG4udm5vZGUmJm4udm5vZGUobyksb31mdW5jdGlvbiBwKCl7cmV0dXJue319ZnVuY3Rpb24gZChuKXtyZXR1cm4gbi5jaGlsZHJlbn1mdW5jdGlvbiB5KG4sbCl7dGhpcy5wcm9wcz1uLHRoaXMuY29udGV4dD1sfWZ1bmN0aW9uIG0obixsKXtpZihudWxsPT1sKXJldHVybiBuLl9fP20obi5fXyxuLl9fLl9fay5pbmRleE9mKG4pKzEpOm51bGw7Zm9yKHZhciB1O2w8bi5fX2subGVuZ3RoO2wrKylpZihudWxsIT0odT1uLl9fa1tsXSkmJm51bGwhPXUuX19lKXJldHVybiB1Ll9fZTtyZXR1cm5cImZ1bmN0aW9uXCI9PXR5cGVvZiBuLnR5cGU/bShuKTpudWxsfWZ1bmN0aW9uIHcobil7dmFyIGwsdTtpZihudWxsIT0obj1uLl9fKSYmbnVsbCE9bi5fX2Mpe2ZvcihuLl9fZT1uLl9fYy5iYXNlPW51bGwsbD0wO2w8bi5fX2subGVuZ3RoO2wrKylpZihudWxsIT0odT1uLl9fa1tsXSkmJm51bGwhPXUuX19lKXtuLl9fZT1uLl9fYy5iYXNlPXUuX19lO2JyZWFrfXJldHVybiB3KG4pfX1mdW5jdGlvbiBnKGwpeyghbC5fX2QmJihsLl9fZD0hMCkmJjE9PT11LnB1c2gobCl8fHQhPT1uLmRlYm91bmNlUmVuZGVyaW5nKSYmKCh0PW4uZGVib3VuY2VSZW5kZXJpbmcpfHxpKShrKX1mdW5jdGlvbiBrKCl7dmFyIG4sbCxpLHQsbyxyLGY7Zm9yKHUuc29ydChmdW5jdGlvbihuLGwpe3JldHVybiBsLl9fdi5fX2Itbi5fX3YuX19ifSk7bj11LnBvcCgpOyluLl9fZCYmKGk9dm9pZCAwLHQ9dm9pZCAwLHI9KG89KGw9bikuX192KS5fX2UsKGY9bC5fX1ApJiYoaT1bXSx0PXooZixvLHMoe30sbyksbC5fX24sdm9pZCAwIT09Zi5vd25lclNWR0VsZW1lbnQsbnVsbCxpLG51bGw9PXI/bShvKTpyKSxUKGksbyksdCE9ciYmdyhvKSkpfWZ1bmN0aW9uIF8obixsLHUsaSx0LG8scixjLHMpe3ZhciB2LGgscCxkLHksdyxnLGs9dSYmdS5fX2t8fGUsXz1rLmxlbmd0aDtpZihjPT1mJiYoYz1udWxsIT1vP29bMF06Xz9tKHUsMCk6bnVsbCksdj0wLGwuX19rPWIobC5fX2ssZnVuY3Rpb24odSl7aWYobnVsbCE9dSl7aWYodS5fXz1sLHUuX19iPWwuX19iKzEsbnVsbD09PShwPWtbdl0pfHxwJiZ1LmtleT09cC5rZXkmJnUudHlwZT09PXAudHlwZSlrW3ZdPXZvaWQgMDtlbHNlIGZvcihoPTA7aDxfO2grKyl7aWYoKHA9a1toXSkmJnUua2V5PT1wLmtleSYmdS50eXBlPT09cC50eXBlKXtrW2hdPXZvaWQgMDticmVha31wPW51bGx9aWYoZD16KG4sdSxwPXB8fGYsaSx0LG8scixjLHMpLChoPXUucmVmKSYmcC5yZWYhPWgmJihnfHwoZz1bXSkscC5yZWYmJmcucHVzaChwLnJlZixudWxsLHUpLGcucHVzaChoLHUuX19jfHxkLHUpKSxudWxsIT1kKXt2YXIgZTtpZihudWxsPT13JiYodz1kKSx2b2lkIDAhPT11Ll9fZCllPXUuX19kLHUuX19kPXZvaWQgMDtlbHNlIGlmKG89PXB8fGQhPWN8fG51bGw9PWQucGFyZW50Tm9kZSl7bjppZihudWxsPT1jfHxjLnBhcmVudE5vZGUhPT1uKW4uYXBwZW5kQ2hpbGQoZCksZT1udWxsO2Vsc2V7Zm9yKHk9YyxoPTA7KHk9eS5uZXh0U2libGluZykmJmg8XztoKz0yKWlmKHk9PWQpYnJlYWsgbjtuLmluc2VydEJlZm9yZShkLGMpLGU9Y31cIm9wdGlvblwiPT1sLnR5cGUmJihuLnZhbHVlPVwiXCIpfWM9dm9pZCAwIT09ZT9lOmQubmV4dFNpYmxpbmcsXCJmdW5jdGlvblwiPT10eXBlb2YgbC50eXBlJiYobC5fX2Q9Yyl9fXJldHVybiB2KyssdX0pLGwuX19lPXcsbnVsbCE9byYmXCJmdW5jdGlvblwiIT10eXBlb2YgbC50eXBlKWZvcih2PW8ubGVuZ3RoO3YtLTspbnVsbCE9b1t2XSYmYShvW3ZdKTtmb3Iodj1fO3YtLTspbnVsbCE9a1t2XSYmQShrW3ZdLGtbdl0pO2lmKGcpZm9yKHY9MDt2PGcubGVuZ3RoO3YrKylqKGdbdl0sZ1srK3ZdLGdbKyt2XSl9ZnVuY3Rpb24gYihuLGwsdSl7aWYobnVsbD09dSYmKHU9W10pLG51bGw9PW58fFwiYm9vbGVhblwiPT10eXBlb2YgbilsJiZ1LnB1c2gobChudWxsKSk7ZWxzZSBpZihBcnJheS5pc0FycmF5KG4pKWZvcih2YXIgaT0wO2k8bi5sZW5ndGg7aSsrKWIobltpXSxsLHUpO2Vsc2UgdS5wdXNoKGw/bChcInN0cmluZ1wiPT10eXBlb2Ygbnx8XCJudW1iZXJcIj09dHlwZW9mIG4/aChudWxsLG4sbnVsbCxudWxsKTpudWxsIT1uLl9fZXx8bnVsbCE9bi5fX2M/aChuLnR5cGUsbi5wcm9wcyxuLmtleSxudWxsKTpuKTpuKTtyZXR1cm4gdX1mdW5jdGlvbiB4KG4sbCx1LGksdCl7dmFyIG87Zm9yKG8gaW4gdSlvIGluIGx8fEMobixvLG51bGwsdVtvXSxpKTtmb3IobyBpbiBsKXQmJlwiZnVuY3Rpb25cIiE9dHlwZW9mIGxbb118fFwidmFsdWVcIj09PW98fFwiY2hlY2tlZFwiPT09b3x8dVtvXT09PWxbb118fEMobixvLGxbb10sdVtvXSxpKX1mdW5jdGlvbiBQKG4sbCx1KXtcIi1cIj09PWxbMF0/bi5zZXRQcm9wZXJ0eShsLHUpOm5bbF09XCJudW1iZXJcIj09dHlwZW9mIHUmJiExPT09Yy50ZXN0KGwpP3UrXCJweFwiOm51bGw9PXU/XCJcIjp1fWZ1bmN0aW9uIEMobixsLHUsaSx0KXt2YXIgbyxyLGYsZSxjO2lmKHQ/XCJjbGFzc05hbWVcIj09PWwmJihsPVwiY2xhc3NcIik6XCJjbGFzc1wiPT09bCYmKGw9XCJjbGFzc05hbWVcIiksXCJrZXlcIj09PWx8fFwiY2hpbGRyZW5cIj09PWwpO2Vsc2UgaWYoXCJzdHlsZVwiPT09bClpZihvPW4uc3R5bGUsXCJzdHJpbmdcIj09dHlwZW9mIHUpby5jc3NUZXh0PXU7ZWxzZXtpZihcInN0cmluZ1wiPT10eXBlb2YgaSYmKG8uY3NzVGV4dD1cIlwiLGk9bnVsbCksaSlmb3IociBpbiBpKXUmJnIgaW4gdXx8UChvLHIsXCJcIik7aWYodSlmb3IoZiBpbiB1KWkmJnVbZl09PT1pW2ZdfHxQKG8sZix1W2ZdKX1lbHNlXCJvXCI9PT1sWzBdJiZcIm5cIj09PWxbMV0/KGU9bCE9PShsPWwucmVwbGFjZSgvQ2FwdHVyZSQvLFwiXCIpKSxjPWwudG9Mb3dlckNhc2UoKSxsPShjIGluIG4/YzpsKS5zbGljZSgyKSx1PyhpfHxuLmFkZEV2ZW50TGlzdGVuZXIobCxOLGUpLChuLmx8fChuLmw9e30pKVtsXT11KTpuLnJlbW92ZUV2ZW50TGlzdGVuZXIobCxOLGUpKTpcImxpc3RcIiE9PWwmJlwidGFnTmFtZVwiIT09bCYmXCJmb3JtXCIhPT1sJiZcInR5cGVcIiE9PWwmJlwic2l6ZVwiIT09bCYmIXQmJmwgaW4gbj9uW2xdPW51bGw9PXU/XCJcIjp1OlwiZnVuY3Rpb25cIiE9dHlwZW9mIHUmJlwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUxcIiE9PWwmJihsIT09KGw9bC5yZXBsYWNlKC9eeGxpbms6Py8sXCJcIikpP251bGw9PXV8fCExPT09dT9uLnJlbW92ZUF0dHJpYnV0ZU5TKFwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiLGwudG9Mb3dlckNhc2UoKSk6bi5zZXRBdHRyaWJ1dGVOUyhcImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIixsLnRvTG93ZXJDYXNlKCksdSk6bnVsbD09dXx8ITE9PT11P24ucmVtb3ZlQXR0cmlidXRlKGwpOm4uc2V0QXR0cmlidXRlKGwsdSkpfWZ1bmN0aW9uIE4obCl7dGhpcy5sW2wudHlwZV0obi5ldmVudD9uLmV2ZW50KGwpOmwpfWZ1bmN0aW9uIHoobCx1LGksdCxvLHIsZixlLGMpe3ZhciBhLHYsaCxwLG0sdyxnLGssYix4LFA9dS50eXBlO2lmKHZvaWQgMCE9PXUuY29uc3RydWN0b3IpcmV0dXJuIG51bGw7KGE9bi5fX2IpJiZhKHUpO3RyeXtuOmlmKFwiZnVuY3Rpb25cIj09dHlwZW9mIFApe2lmKGs9dS5wcm9wcyxiPShhPVAuY29udGV4dFR5cGUpJiZ0W2EuX19jXSx4PWE/Yj9iLnByb3BzLnZhbHVlOmEuX186dCxpLl9fYz9nPSh2PXUuX19jPWkuX19jKS5fXz12Ll9fRTooXCJwcm90b3R5cGVcImluIFAmJlAucHJvdG90eXBlLnJlbmRlcj91Ll9fYz12PW5ldyBQKGsseCk6KHUuX19jPXY9bmV3IHkoayx4KSx2LmNvbnN0cnVjdG9yPVAsdi5yZW5kZXI9RCksYiYmYi5zdWIodiksdi5wcm9wcz1rLHYuc3RhdGV8fCh2LnN0YXRlPXt9KSx2LmNvbnRleHQ9eCx2Ll9fbj10LGg9di5fX2Q9ITAsdi5fX2g9W10pLG51bGw9PXYuX19zJiYodi5fX3M9di5zdGF0ZSksbnVsbCE9UC5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMmJih2Ll9fcz09di5zdGF0ZSYmKHYuX19zPXMoe30sdi5fX3MpKSxzKHYuX19zLFAuZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzKGssdi5fX3MpKSkscD12LnByb3BzLG09di5zdGF0ZSxoKW51bGw9PVAuZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzJiZudWxsIT12LmNvbXBvbmVudFdpbGxNb3VudCYmdi5jb21wb25lbnRXaWxsTW91bnQoKSxudWxsIT12LmNvbXBvbmVudERpZE1vdW50JiZ2Ll9faC5wdXNoKHYuY29tcG9uZW50RGlkTW91bnQpO2Vsc2V7aWYobnVsbD09UC5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMmJmshPT1wJiZudWxsIT12LmNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMmJnYuY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhrLHgpLCF2Ll9fZSYmbnVsbCE9di5zaG91bGRDb21wb25lbnRVcGRhdGUmJiExPT09di5zaG91bGRDb21wb25lbnRVcGRhdGUoayx2Ll9fcyx4KSl7Zm9yKHYucHJvcHM9ayx2LnN0YXRlPXYuX19zLHYuX19kPSExLHYuX192PXUsdS5fX2U9aS5fX2UsdS5fX2s9aS5fX2ssdi5fX2gubGVuZ3RoJiZmLnB1c2godiksYT0wO2E8dS5fX2subGVuZ3RoO2ErKyl1Ll9fa1thXSYmKHUuX19rW2FdLl9fPXUpO2JyZWFrIG59bnVsbCE9di5jb21wb25lbnRXaWxsVXBkYXRlJiZ2LmNvbXBvbmVudFdpbGxVcGRhdGUoayx2Ll9fcyx4KSxudWxsIT12LmNvbXBvbmVudERpZFVwZGF0ZSYmdi5fX2gucHVzaChmdW5jdGlvbigpe3YuY29tcG9uZW50RGlkVXBkYXRlKHAsbSx3KX0pfXYuY29udGV4dD14LHYucHJvcHM9ayx2LnN0YXRlPXYuX19zLChhPW4uX19yKSYmYSh1KSx2Ll9fZD0hMSx2Ll9fdj11LHYuX19QPWwsYT12LnJlbmRlcih2LnByb3BzLHYuc3RhdGUsdi5jb250ZXh0KSx1Ll9faz1udWxsIT1hJiZhLnR5cGU9PWQmJm51bGw9PWEua2V5P2EucHJvcHMuY2hpbGRyZW46YSxudWxsIT12LmdldENoaWxkQ29udGV4dCYmKHQ9cyhzKHt9LHQpLHYuZ2V0Q2hpbGRDb250ZXh0KCkpKSxofHxudWxsPT12LmdldFNuYXBzaG90QmVmb3JlVXBkYXRlfHwodz12LmdldFNuYXBzaG90QmVmb3JlVXBkYXRlKHAsbSkpLF8obCx1LGksdCxvLHIsZixlLGMpLHYuYmFzZT11Ll9fZSx2Ll9faC5sZW5ndGgmJmYucHVzaCh2KSxnJiYodi5fX0U9di5fXz1udWxsKSx2Ll9fZT0hMX1lbHNlIHUuX19lPSQoaS5fX2UsdSxpLHQsbyxyLGYsYyk7KGE9bi5kaWZmZWQpJiZhKHUpfWNhdGNoKGwpe24uX19lKGwsdSxpKX1yZXR1cm4gdS5fX2V9ZnVuY3Rpb24gVChsLHUpe24uX19jJiZuLl9fYyh1LGwpLGwuc29tZShmdW5jdGlvbih1KXt0cnl7bD11Ll9faCx1Ll9faD1bXSxsLnNvbWUoZnVuY3Rpb24obil7bi5jYWxsKHUpfSl9Y2F0Y2gobCl7bi5fX2UobCx1Ll9fdil9fSl9ZnVuY3Rpb24gJChuLGwsdSxpLHQsbyxyLGMpe3ZhciBzLGEsdixoLHAsZD11LnByb3BzLHk9bC5wcm9wcztpZih0PVwic3ZnXCI9PT1sLnR5cGV8fHQsbnVsbD09biYmbnVsbCE9bylmb3Iocz0wO3M8by5sZW5ndGg7cysrKWlmKG51bGwhPShhPW9bc10pJiYobnVsbD09PWwudHlwZT8zPT09YS5ub2RlVHlwZTphLmxvY2FsTmFtZT09PWwudHlwZSkpe249YSxvW3NdPW51bGw7YnJlYWt9aWYobnVsbD09bil7aWYobnVsbD09PWwudHlwZSlyZXR1cm4gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoeSk7bj10P2RvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsbC50eXBlKTpkb2N1bWVudC5jcmVhdGVFbGVtZW50KGwudHlwZSx5LmlzJiZ7aXM6eS5pc30pLG89bnVsbH1pZihudWxsPT09bC50eXBlKW51bGwhPW8mJihvW28uaW5kZXhPZihuKV09bnVsbCksZCE9PXkmJm4uZGF0YSE9eSYmKG4uZGF0YT15KTtlbHNlIGlmKGwhPT11KXtpZihudWxsIT1vJiYob1tvLmluZGV4T2YobildPW51bGwsbz1lLnNsaWNlLmNhbGwobi5jaGlsZE5vZGVzKSksdj0oZD11LnByb3BzfHxmKS5kYW5nZXJvdXNseVNldElubmVySFRNTCxoPXkuZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwsIWMpe2lmKGQ9PT1mKWZvcihkPXt9LHA9MDtwPG4uYXR0cmlidXRlcy5sZW5ndGg7cCsrKWRbbi5hdHRyaWJ1dGVzW3BdLm5hbWVdPW4uYXR0cmlidXRlc1twXS52YWx1ZTsoaHx8dikmJihoJiZ2JiZoLl9faHRtbD09di5fX2h0bWx8fChuLmlubmVySFRNTD1oJiZoLl9faHRtbHx8XCJcIikpfXgobix5LGQsdCxjKSxsLl9faz1sLnByb3BzLmNoaWxkcmVuLGh8fF8obixsLHUsaSxcImZvcmVpZ25PYmplY3RcIiE9PWwudHlwZSYmdCxvLHIsZixjKSxjfHwoXCJ2YWx1ZVwiaW4geSYmdm9pZCAwIT09eS52YWx1ZSYmeS52YWx1ZSE9PW4udmFsdWUmJihuLnZhbHVlPW51bGw9PXkudmFsdWU/XCJcIjp5LnZhbHVlKSxcImNoZWNrZWRcImluIHkmJnZvaWQgMCE9PXkuY2hlY2tlZCYmeS5jaGVja2VkIT09bi5jaGVja2VkJiYobi5jaGVja2VkPXkuY2hlY2tlZCkpfXJldHVybiBufWZ1bmN0aW9uIGoobCx1LGkpe3RyeXtcImZ1bmN0aW9uXCI9PXR5cGVvZiBsP2wodSk6bC5jdXJyZW50PXV9Y2F0Y2gobCl7bi5fX2UobCxpKX19ZnVuY3Rpb24gQShsLHUsaSl7dmFyIHQsbyxyO2lmKG4udW5tb3VudCYmbi51bm1vdW50KGwpLCh0PWwucmVmKSYmKHQuY3VycmVudCYmdC5jdXJyZW50IT09bC5fX2V8fGoodCxudWxsLHUpKSxpfHxcImZ1bmN0aW9uXCI9PXR5cGVvZiBsLnR5cGV8fChpPW51bGwhPShvPWwuX19lKSksbC5fX2U9bC5fX2Q9dm9pZCAwLG51bGwhPSh0PWwuX19jKSl7aWYodC5jb21wb25lbnRXaWxsVW5tb3VudCl0cnl7dC5jb21wb25lbnRXaWxsVW5tb3VudCgpfWNhdGNoKGwpe24uX19lKGwsdSl9dC5iYXNlPXQuX19QPW51bGx9aWYodD1sLl9faylmb3Iocj0wO3I8dC5sZW5ndGg7cisrKXRbcl0mJkEodFtyXSx1LGkpO251bGwhPW8mJmEobyl9ZnVuY3Rpb24gRChuLGwsdSl7cmV0dXJuIHRoaXMuY29uc3RydWN0b3Iobix1KX1mdW5jdGlvbiBFKGwsdSxpKXt2YXIgdCxyLGM7bi5fXyYmbi5fXyhsLHUpLHI9KHQ9aT09PW8pP251bGw6aSYmaS5fX2t8fHUuX19rLGw9dihkLG51bGwsW2xdKSxjPVtdLHoodSwodD91Oml8fHUpLl9faz1sLHJ8fGYsZix2b2lkIDAhPT11Lm93bmVyU1ZHRWxlbWVudCxpJiYhdD9baV06cj9udWxsOmUuc2xpY2UuY2FsbCh1LmNoaWxkTm9kZXMpLGMsaXx8Zix0KSxUKGMsbCl9ZnVuY3Rpb24gSChuLGwpe0UobixsLG8pfWZ1bmN0aW9uIEkobixsKXtyZXR1cm4gbD1zKHMoe30sbi5wcm9wcyksbCksYXJndW1lbnRzLmxlbmd0aD4yJiYobC5jaGlsZHJlbj1lLnNsaWNlLmNhbGwoYXJndW1lbnRzLDIpKSxoKG4udHlwZSxsLGwua2V5fHxuLmtleSxsLnJlZnx8bi5yZWYpfWZ1bmN0aW9uIEwobil7dmFyIGw9e30sdT17X19jOlwiX19jQ1wiK3IrKyxfXzpuLENvbnN1bWVyOmZ1bmN0aW9uKG4sbCl7cmV0dXJuIG4uY2hpbGRyZW4obCl9LFByb3ZpZGVyOmZ1bmN0aW9uKG4pe3ZhciBpLHQ9dGhpcztyZXR1cm4gdGhpcy5nZXRDaGlsZENvbnRleHR8fChpPVtdLHRoaXMuZ2V0Q2hpbGRDb250ZXh0PWZ1bmN0aW9uKCl7cmV0dXJuIGxbdS5fX2NdPXQsbH0sdGhpcy5zaG91bGRDb21wb25lbnRVcGRhdGU9ZnVuY3Rpb24obCl7bi52YWx1ZSE9PWwudmFsdWUmJmkuc29tZShmdW5jdGlvbihuKXtuLmNvbnRleHQ9bC52YWx1ZSxnKG4pfSl9LHRoaXMuc3ViPWZ1bmN0aW9uKG4pe2kucHVzaChuKTt2YXIgbD1uLmNvbXBvbmVudFdpbGxVbm1vdW50O24uY29tcG9uZW50V2lsbFVubW91bnQ9ZnVuY3Rpb24oKXtpLnNwbGljZShpLmluZGV4T2YobiksMSksbCYmbC5jYWxsKG4pfX0pLG4uY2hpbGRyZW59fTtyZXR1cm4gdS5Db25zdW1lci5jb250ZXh0VHlwZT11LHV9bj17X19lOmZ1bmN0aW9uKG4sbCl7Zm9yKHZhciB1LGk7bD1sLl9fOylpZigodT1sLl9fYykmJiF1Ll9fKXRyeXtpZih1LmNvbnN0cnVjdG9yJiZudWxsIT11LmNvbnN0cnVjdG9yLmdldERlcml2ZWRTdGF0ZUZyb21FcnJvciYmKGk9ITAsdS5zZXRTdGF0ZSh1LmNvbnN0cnVjdG9yLmdldERlcml2ZWRTdGF0ZUZyb21FcnJvcihuKSkpLG51bGwhPXUuY29tcG9uZW50RGlkQ2F0Y2gmJihpPSEwLHUuY29tcG9uZW50RGlkQ2F0Y2gobikpLGkpcmV0dXJuIGcodS5fX0U9dSl9Y2F0Y2gobCl7bj1sfXRocm93IG59fSxsPWZ1bmN0aW9uKG4pe3JldHVybiBudWxsIT1uJiZ2b2lkIDA9PT1uLmNvbnN0cnVjdG9yfSx5LnByb3RvdHlwZS5zZXRTdGF0ZT1mdW5jdGlvbihuLGwpe3ZhciB1O3U9dGhpcy5fX3MhPT10aGlzLnN0YXRlP3RoaXMuX19zOnRoaXMuX19zPXMoe30sdGhpcy5zdGF0ZSksXCJmdW5jdGlvblwiPT10eXBlb2YgbiYmKG49bih1LHRoaXMucHJvcHMpKSxuJiZzKHUsbiksbnVsbCE9biYmdGhpcy5fX3YmJihsJiZ0aGlzLl9faC5wdXNoKGwpLGcodGhpcykpfSx5LnByb3RvdHlwZS5mb3JjZVVwZGF0ZT1mdW5jdGlvbihuKXt0aGlzLl9fdiYmKHRoaXMuX19lPSEwLG4mJnRoaXMuX19oLnB1c2gobiksZyh0aGlzKSl9LHkucHJvdG90eXBlLnJlbmRlcj1kLHU9W10saT1cImZ1bmN0aW9uXCI9PXR5cGVvZiBQcm9taXNlP1Byb21pc2UucHJvdG90eXBlLnRoZW4uYmluZChQcm9taXNlLnJlc29sdmUoKSk6c2V0VGltZW91dCxvPWYscj0wO2V4cG9ydHtFIGFzIHJlbmRlcixIIGFzIGh5ZHJhdGUsdiBhcyBjcmVhdGVFbGVtZW50LHYgYXMgaCxkIGFzIEZyYWdtZW50LHAgYXMgY3JlYXRlUmVmLGwgYXMgaXNWYWxpZEVsZW1lbnQseSBhcyBDb21wb25lbnQsSSBhcyBjbG9uZUVsZW1lbnQsTCBhcyBjcmVhdGVDb250ZXh0LGIgYXMgdG9DaGlsZEFycmF5LEEgYXMgX3VubW91bnQsbiBhcyBvcHRpb25zfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXByZWFjdC5tb2R1bGUuanMubWFwXG4iLCJpbXBvcnQgeyBoLCByZW5kZXIsIENvbXBvbmVudCB9IGZyb20gJ3ByZWFjdCc7XG5pbXBvcnQgcGVyc2lzdCBmcm9tICcuL1BlcnNpc3QnO1xuaW1wb3J0IEphcGFuZXNlVHJhbnNsYXRpb25Gcm9udCBmcm9tICcuL0phcGFuZXNlVHJhbnNsYXRpb25Gcm9udCc7XG5cbmxldCBjYXJkOiBIVE1MRGl2RWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2NhcmQnKVswXSBhcyBIVE1MRGl2RWxlbWVudDtcblxudHlwZSBTdGF0ZSA9IHtcbiAgaGludFZpc2libGU6IGJvb2xlYW4sXG4gIGRpY3Rpb25hcnlfZm9ybV9rYW5hOiBzdHJpbmcsXG4gIHR5cGU6IHN0cmluZyxcbiAgZGlzcGxheUZyb250OiBib29sZWFuXG59O1xuY2xhc3MgSmFwYW5lc2VUcmFuc2xhdGlvbkJhY2sgZXh0ZW5kcyBDb21wb25lbnQ8YW55LCBTdGF0ZT4ge1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5zdGF0ZSA9IHsgXG4gICAgICBoaW50VmlzaWJsZTogZmFsc2UsIFxuICAgICAgZGljdGlvbmFyeV9mb3JtX2thbmE6ICd7e2RpY3Rpb25hcnlfZm9ybV9rYW5hfX0nLFxuICAgICAgdHlwZTogJ3t7dHlwZX19JyxcbiAgICAgIGRpc3BsYXlGcm9udDogcGVyc2lzdC5nZXRJdGVtKCkgPT09ICdkaXNwbGF5IGZyb250J1xuICAgIH07XG4gICAgcGVyc2lzdC5zZXRJdGVtKCdkaXNwbGF5ZWQgZnJvbnQnKVxuICB9XG5cbiAgcmVuZGVyKHByb3BzOiBhbnksIHN0YXRlOiBTdGF0ZSkge1xuICAgIHJldHVybiAoXG4gICAgICBzdGF0ZS5kaXNwbGF5RnJvbnQgP1xuICAgICAgPHNwYW4+XG4gICAgICAgIDxKYXBhbmVzZVRyYW5zbGF0aW9uRnJvbnQgLz5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsgdGhpcy5zaG93QmFjayB9PlNob3cgQmFjazwvYnV0dG9uPlxuICAgICAgPC9zcGFuPlxuICAgICAgOlxuICAgICAgPGRpdj5cbiAgICAgICAgPGRpdj57J3t7ZGljdGlvbmFyeV9mb3JtfX0nfTwvZGl2PlxuICAgICAgICB7IHN0YXRlLmRpY3Rpb25hcnlfZm9ybV9rYW5hICE9PSAnJyAmJiA8ZGl2Pnsne3tkaWN0aW9uYXJ5X2Zvcm1fa2FuYX19J308L2Rpdj4gfVxuICAgICAgICA8ZGl2Pnsne3t0cmFuc2xhdGlvbn19J308L2Rpdj5cbiAgICAgICAgeyBzdGF0ZS50eXBlID09PSAnaWNoaWRhbi12ZXJiJyAmJiA8ZGl2IGNsYXNzTmFtZT1cImljaGlkYW4tdmVyYlwiPkljaGlkYW4gdmVyYjwvZGl2PiB9XG4gICAgICAgIHsgc3RhdGUudHlwZSA9PT0gJ2dvZGFuLXZlcmInICYmIDxkaXYgY2xhc3NOYW1lPVwiZ29kYW4tdmVyYlwiPkdvZGFuIHZlcmI8L2Rpdj4gfVxuICAgICAgICB7IHN0YXRlLnR5cGUgPT09ICdpcnJlZ3VsYXItdmVyYicgJiYgPGRpdiBjbGFzc05hbWU9XCJpcnJlZ3VsYXItdmVyYlwiPklycmVndWxhciB2ZXJiPC9kaXY+IH1cbiAgICAgIDwvZGl2Pik7XG4gIH1cblxuICBzaG93SGludCA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgaGludFZpc2libGU6IHRydWUgfSk7XG4gIH1cblxuICBzaG93QmFjayA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgZGlzcGxheUZyb250OiBmYWxzZSB9KTtcbiAgfVxufVxuXG5yZW5kZXIoPEphcGFuZXNlVHJhbnNsYXRpb25CYWNrIC8+LCBjYXJkKTsiLCJpbXBvcnQgeyBoLCByZW5kZXIsIENvbXBvbmVudCB9IGZyb20gJ3ByZWFjdCc7XHJcbmltcG9ydCBwZXJzaXN0IGZyb20gJy4vUGVyc2lzdCc7XHJcblxyXG50eXBlIFBlcnNpc3RlbmNlVHlwZSA9IHtcclxuICBzZXRJdGVtOiAoXzogc3RyaW5nKSA9PiB2b2lkLFxyXG4gIGdldEl0ZW06ICgpID0+IHN0cmluZ1xyXG59O1xyXG5cclxubGV0IGNhcmQ6IEhUTUxEaXZFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnY2FyZCcpWzBdIGFzIEhUTUxEaXZFbGVtZW50O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSmFwYW5lc2VUcmFuc2xhdGlvbkZyb250IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHsgaGludFZpc2libGU6IGZhbHNlLCBkaWN0aW9uYXJ5X2Zvcm1fa2FuYTogJ3t7ZGljdGlvbmFyeV9mb3JtX2thbmF9fScgfTtcclxuICAgIGlmIChwZXJzaXN0LmdldEl0ZW0oKSAhPT0gJ2Rpc3BsYXllZCBmcm9udCcpIHtcclxuICAgICAgcGVyc2lzdC5zZXRJdGVtKCdkaXNwbGF5IGZyb250Jyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZW5kZXIocHJvcHM6IGFueSwgc3RhdGU6IGFueSkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgICA8ZGl2Pnsne3tkaWN0aW9uYXJ5X2Zvcm19fSd9PC9kaXY+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIHsgIXN0YXRlLmhpbnRWaXNpYmxlICYmIHN0YXRlLmRpY3Rpb25hcnlfZm9ybV9rYW5hICE9PSAnJyAmJiA8YnV0dG9uIG9uQ2xpY2sgPSB7IHRoaXMuc2hvd0hpbnQgfSA+U2hvdyBrYW5hPC9idXR0b24+IH1cclxuICAgICAgICAgIHsgc3RhdGUuaGludFZpc2libGUgJiYgJ3t7ZGljdGlvbmFyeV9mb3JtX2thbmF9fScgfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj4pO1xyXG4gIH1cclxuXHJcbiAgc2hvd0hpbnQgPSAoKSA9PiB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgaGludFZpc2libGU6IHRydWUgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5yZW5kZXIoPEphcGFuZXNlVHJhbnNsYXRpb25Gcm9udCAvPiwgY2FyZCk7IiwiaW1wb3J0ICcuL2Fua2ktcGVyc2lzdGVuY2UnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG5cbiAgc2V0SXRlbShpdGVtOiBhbnkpIHtcbiAgICAoKHdpbmRvdyBhcyBhbnkpLlBlcnNpc3RlbmNlIGFzIGFueSkuc2V0SXRlbShpdGVtKTtcbiAgfSxcblxuICBnZXRJdGVtKCk6IGFueSB7XG4gICAgcmV0dXJuICgod2luZG93IGFzIGFueSkuUGVyc2lzdGVuY2UgYXMgYW55KS5nZXRJdGVtKCk7XG4gIH1cblxufSIsIi8vIGFua2ktcGVyc2lzdGVuY2Vcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9TaW1vbkxhbW1lci9hbmtpLXBlcnNpc3RlbmNlXG5cbmlmICh0eXBlb2Yod2luZG93LlBlcnNpc3RlbmNlKSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgdmFyIF9wZXJzaXN0ZW5jZUtleSA9ICdnaXRodWIuY29tL1NpbW9uTGFtbWVyL2Fua2ktcGVyc2lzdGVuY2UvJztcbiAgdmFyIF9kZWZhdWx0S2V5ID0gJ19kZWZhdWx0JztcbiAgd2luZG93LlBlcnNpc3RlbmNlX3Nlc3Npb25TdG9yYWdlID0gZnVuY3Rpb24oKSB7IC8vIHVzZWQgaW4gYW5kcm9pZCwgaU9TLCB3ZWJcbiAgICB2YXIgaXNBdmFpbGFibGUgPSBmYWxzZTtcbiAgICB0cnkge1xuICAgICAgaWYgKHR5cGVvZih3aW5kb3cuc2Vzc2lvblN0b3JhZ2UpID09PSAnb2JqZWN0Jykge1xuICAgICAgICBpc0F2YWlsYWJsZSA9IHRydWU7XG4gICAgICAgIHRoaXMuY2xlYXIgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNlc3Npb25TdG9yYWdlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgayA9IHNlc3Npb25TdG9yYWdlLmtleShpKTtcbiAgICAgICAgICAgIGlmIChrLmluZGV4T2YoX3BlcnNpc3RlbmNlS2V5KSA9PSAwKSB7XG4gICAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0oayk7XG4gICAgICAgICAgICAgIGktLTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9O1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLnNldEl0ZW0gPSBmdW5jdGlvbihrZXksIHZhbHVlKSB7XG4gICAgICAgICAgaWYgKHZhbHVlID09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdmFsdWUgPSBrZXk7XG4gICAgICAgICAgICBrZXkgPSBfZGVmYXVsdEtleTtcbiAgICAgICAgICB9XG4gICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShfcGVyc2lzdGVuY2VLZXkgKyBrZXksIEpTT04uc3RyaW5naWZ5KHZhbHVlKSk7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuZ2V0SXRlbSA9IGZ1bmN0aW9uKGtleSkge1xuICAgICAgICAgIGlmIChrZXkgPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBrZXkgPSBfZGVmYXVsdEtleTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIEpTT04ucGFyc2Uoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShfcGVyc2lzdGVuY2VLZXkgKyBrZXkpKTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5yZW1vdmVJdGVtID0gZnVuY3Rpb24oa2V5KSB7XG4gICAgICAgICAgaWYgKGtleSA9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGtleSA9IF9kZWZhdWx0S2V5O1xuICAgICAgICAgIH1cbiAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKF9wZXJzaXN0ZW5jZUtleSArIGtleSk7XG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfSBjYXRjaChlcnIpIHt9XG4gICAgdGhpcy5pc0F2YWlsYWJsZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIGlzQXZhaWxhYmxlO1xuICAgIH07XG4gIH07XG4gIHdpbmRvdy5QZXJzaXN0ZW5jZV93aW5kb3dLZXkgPSBmdW5jdGlvbihwZXJzaXN0ZW50S2V5KSB7IC8vIHVzZWQgaW4gd2luZG93cywgbGludXgsIG1hY1xuICAgIHZhciBvYmogPSB3aW5kb3dbcGVyc2lzdGVudEtleV07XG4gICAgdmFyIGlzQXZhaWxhYmxlID0gZmFsc2U7XG4gICAgaWYgKHR5cGVvZihvYmopID09PSAnb2JqZWN0Jykge1xuICAgICAgaXNBdmFpbGFibGUgPSB0cnVlO1xuICAgICAgdGhpcy5jbGVhciA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBvYmpbX3BlcnNpc3RlbmNlS2V5XSA9IHt9O1xuICAgICAgfTtcbiAgICAgIHRoaXMuc2V0SXRlbSA9IGZ1bmN0aW9uKGtleSwgdmFsdWUpIHtcbiAgICAgICAgaWYgKHZhbHVlID09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHZhbHVlID0ga2V5O1xuICAgICAgICAgIGtleSA9IF9kZWZhdWx0S2V5O1xuICAgICAgICB9XG4gICAgICAgIG9ialtfcGVyc2lzdGVuY2VLZXldW2tleV0gPSB2YWx1ZTtcbiAgICAgIH07XG4gICAgICB0aGlzLmdldEl0ZW0gPSBmdW5jdGlvbihrZXkpIHtcbiAgICAgICAgaWYgKGtleSA9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBrZXkgPSBfZGVmYXVsdEtleTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gb2JqW19wZXJzaXN0ZW5jZUtleV1ba2V5XSA9PSB1bmRlZmluZWQgPyBudWxsIDogb2JqW19wZXJzaXN0ZW5jZUtleV1ba2V5XTtcbiAgICAgIH07XG4gICAgICB0aGlzLnJlbW92ZUl0ZW0gPSBmdW5jdGlvbihrZXkpIHtcbiAgICAgICAgaWYgKGtleSA9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBrZXkgPSBfZGVmYXVsdEtleTtcbiAgICAgICAgfVxuICAgICAgICBkZWxldGUgb2JqW19wZXJzaXN0ZW5jZUtleV1ba2V5XTtcbiAgICAgIH07XG5cbiAgICAgIGlmIChvYmpbX3BlcnNpc3RlbmNlS2V5XSA9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhpcy5jbGVhcigpO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLmlzQXZhaWxhYmxlID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gaXNBdmFpbGFibGU7XG4gICAgfTtcbiAgfTtcbiAgLypcbiAgICogICBjbGllbnQgIHwgc2Vzc2lvblN0b3JhZ2UgfCBwZXJzaXN0ZW50S2V5IHwgdXNlZnVsIGxvY2F0aW9uIHxcbiAgICogLS0tLS0tLS0tLXwtLS0tLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tLS0tLS0tLXxcbiAgICogd2ViICAgICAgIHwgICAgICAgWUVTICAgICAgfCAgICAgICAtICAgICAgIHwgICAgICAgTk8gICAgICAgIHxcbiAgICogd2luZG93cyAgIHwgICAgICAgTk8gICAgICAgfCAgICAgICBweSAgICAgIHwgICAgICAgTk8gICAgICAgIHxcbiAgICogYW5kcm9pZCAgIHwgICAgICAgWUVTICAgICAgfCAgICAgICAtICAgICAgIHwgICAgICAgTk8gICAgICAgIHxcbiAgICogbGludXggMi4wIHwgICAgICAgTk8gICAgICAgfCAgICAgICBxdCAgICAgIHwgICAgICAgWUVTICAgICAgIHxcbiAgICogbGludXggMi4xIHwgICAgICAgTk8gICAgICAgfCAgICAgICBxdCAgICAgIHwgICAgICAgWUVTICAgICAgIHxcbiAgICogbWFjIDIuMCAgIHwgICAgICAgTk8gICAgICAgfCAgICAgICBweSAgICAgIHwgICAgICAgTk8gICAgICAgIHxcbiAgICogbWFjIDIuMSAgIHwgICAgICAgTk8gICAgICAgfCAgICAgICBxdCAgICAgIHwgICAgICAgWUVTICAgICAgIHxcbiAgICogaU9TICAgICAgIHwgICAgICAgWUVTICAgICAgfCAgICAgICAtICAgICAgIHwgICAgICAgTk8gICAgICAgIHxcbiAgICovXG4gIHdpbmRvdy5QZXJzaXN0ZW5jZSA9IG5ldyBQZXJzaXN0ZW5jZV9zZXNzaW9uU3RvcmFnZSgpOyAvLyBhbmRyb2lkLCBpT1MsIHdlYlxuICBpZiAoIVBlcnNpc3RlbmNlLmlzQXZhaWxhYmxlKCkpIHtcbiAgICB3aW5kb3cuUGVyc2lzdGVuY2UgPSBuZXcgUGVyc2lzdGVuY2Vfd2luZG93S2V5KFwicHlcIik7IC8vIHdpbmRvd3MsIG1hYyAoMi4wKVxuICB9XG4gIGlmICghUGVyc2lzdGVuY2UuaXNBdmFpbGFibGUoKSkge1xuICAgIHZhciB0aXRsZVN0YXJ0SW5kZXggPSB3aW5kb3cubG9jYXRpb24udG9TdHJpbmcoKS5pbmRleE9mKCd0aXRsZScpOyAvLyBpZiB0aXRsZVN0YXJ0SW5kZXggPiAwLCB3aW5kb3cubG9jYXRpb24gaXMgdXNlZnVsXG4gICAgdmFyIHRpdGxlQ29udGVudEluZGV4ID0gd2luZG93LmxvY2F0aW9uLnRvU3RyaW5nKCkuaW5kZXhPZignbWFpbicsIHRpdGxlU3RhcnRJbmRleCk7XG4gICAgaWYgKHRpdGxlU3RhcnRJbmRleCA+IDAgJiYgdGl0bGVDb250ZW50SW5kZXggPiAwICYmICh0aXRsZUNvbnRlbnRJbmRleCAtIHRpdGxlU3RhcnRJbmRleCkgPCAxMCkge1xuICAgICAgd2luZG93LlBlcnNpc3RlbmNlID0gbmV3IFBlcnNpc3RlbmNlX3dpbmRvd0tleShcInF0XCIpOyAvLyBsaW51eCwgbWFjICgyLjEpXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpbmRvdy5QZXJzaXN0ZW5jZTsiXSwic291cmNlUm9vdCI6IiJ9