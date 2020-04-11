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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/TranslationJapaneseBack.tsx");
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

/***/ "./src/Canvas.tsx":
/*!************************!*\
  !*** ./src/Canvas.tsx ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const preact_1 = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
const CanvasFrame_1 = __webpack_require__(/*! ./CanvasFrame */ "./src/CanvasFrame.tsx");
class Canvas extends preact_1.Component {
    render(props, state) {
        let frames = [];
        for (let e of props.word.split('')) {
            frames.push(preact_1.h(CanvasFrame_1.default, { character: e, guides: props.guides }));
        }
        return preact_1.h("div", { className: "canvas" }, frames);
    }
}
exports.default = Canvas;


/***/ }),

/***/ "./src/CanvasFrame.tsx":
/*!*****************************!*\
  !*** ./src/CanvasFrame.tsx ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const preact_1 = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
const preact_2 = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
class CanvasFrame extends preact_1.Component {
    constructor() {
        super();
        this.penDown = false;
        // mousePositions will be used as a FIFO queue
        this.penPositions = Array.from({ length: 3 }, () => { return { x: 0, y: 0 }; });
        this.positionsSincePenDown = 0;
        this.ref = preact_2.createRef();
        this.canvasRef = preact_2.createRef();
        this.onMouseDown = this.onMouseDown.bind(this);
        this.onTouchStart = this.onTouchStart.bind(this);
        this.onMouseMove = this.onMouseMove.bind(this);
        this.onTouchMove = this.onTouchMove.bind(this);
        this.onMouseUp = this.onMouseUp.bind(this);
        this.onTouchEnd = this.onTouchEnd.bind(this);
        this.onMouseLeave = this.onMouseLeave.bind(this);
        this.adjustForResizeAndInit = this.adjustForResizeAndInit.bind(this);
        this.adjustForScroll = this.adjustForScroll.bind(this);
        window.addEventListener('resize', this.adjustForResizeAndInit);
        window.addEventListener('scroll', this.adjustForScroll);
        setTimeout(this.adjustForResizeAndInit);
    }
    render(props, state) {
        return (preact_1.h("div", { class: "canvas-frame", ref: this.ref },
            props.guides && preact_1.h("div", null, props.character),
            preact_1.h("canvas", { width: "1", height: "1", onMouseDown: this.onMouseDown, onTouchStart: this.onTouchStart, onMouseMove: this.onMouseMove, onTouchMove: this.onTouchMove, onMouseUp: this.onMouseUp, onTouchEnd: this.onTouchEnd, onMouseLeave: this.onMouseLeave, ref: this.canvasRef })));
    }
    /* Current limitation:
     * Resizing the viewport clears canvas */
    adjustForResizeAndInit() {
        console.log('adjustForResize called');
        this.adjustForScroll();
        this.canvasRef.current.width = this.canvasRef.current.clientWidth;
        this.canvasRef.current.height = this.canvasRef.current.clientHeight;
        this.renderingContext = this.canvasRef.current.getContext('2d');
        this.renderingContext.fillStyle = '#586e75'; // Solarized Light base01
        this.renderingContext.lineWidth = 1200 / this.ref.current.clientWidth;
    }
    adjustForScroll() {
        console.log('adjustForScroll called');
        this.pageOffset = {
            x: this.ref.current.offsetLeft,
            y: this.ref.current.offsetTop
        };
    }
    drawIfPenDown(position) {
        this.penPositions.push(position);
        this.penPositions.shift();
        if (this.penDown && this.positionsSincePenDown > 2) {
            this.renderingContext.beginPath();
            this.renderingContext.moveTo(this.penPositions[0].x - this.pageOffset.x, this.penPositions[0].y - this.pageOffset.y);
            for (let i = 1; i < this.penPositions.length; i++) {
                this.renderingContext.lineTo(this.penPositions[i].x - this.pageOffset.x, this.penPositions[i].y - this.pageOffset.y);
            }
            this.renderingContext.stroke();
            this.renderingContext.closePath();
        }
    }
    onMouseDown(e) {
        e.preventDefault();
        this.penDown = true;
        this.positionsSincePenDown = 0;
        this.drawIfPenDown({
            x: e.pageX,
            y: e.pageY
        });
    }
    onTouchStart(e) {
        e.preventDefault();
        this.penDown = true;
        this.positionsSincePenDown = 0;
        this.drawIfPenDown({
            x: e.changedTouches[0].pageX,
            y: e.changedTouches[0].pageY
        });
    }
    onMouseMove(e) {
        e.preventDefault();
        this.positionsSincePenDown++;
        this.drawIfPenDown({
            x: e.pageX,
            y: e.pageY
        });
    }
    onTouchMove(e) {
        e.preventDefault();
        this.positionsSincePenDown++;
        this.drawIfPenDown({
            x: e.changedTouches[0].pageX,
            y: e.changedTouches[0].pageY
        });
    }
    onMouseUp(e) {
        e.preventDefault();
        this.penDown = false;
        this.drawIfPenDown({
            x: e.pageX,
            y: e.pageY
        });
    }
    onTouchEnd(e) {
        e.preventDefault();
        this.penDown = false;
        this.drawIfPenDown({
            x: e.changedTouches[0].pageX,
            y: e.changedTouches[0].pageY
        });
    }
    onMouseLeave(e) {
        e.preventDefault();
        this.penDown = false;
        this.drawIfPenDown({
            x: e.pageX,
            y: e.pageY
        });
    }
}
exports.default = CanvasFrame;


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

/***/ "./src/TranslationJapaneseBack.tsx":
/*!*****************************************!*\
  !*** ./src/TranslationJapaneseBack.tsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const preact_1 = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
const Persist_1 = __webpack_require__(/*! ./Persist */ "./src/Persist.ts");
const Canvas_1 = __webpack_require__(/*! ./Canvas */ "./src/Canvas.tsx");
const TranslationJapaneseFront_1 = __webpack_require__(/*! ./TranslationJapaneseFront */ "./src/TranslationJapaneseFront.tsx");
let card = document.getElementsByClassName('card')[0];
class TranslationJapaneseBack extends preact_1.Component {
    constructor() {
        super();
        this.addCanvases = (e) => {
            this.setState({ canvases: this.state.canvases.concat(e) });
        };
        this.showBack = () => {
            this.setState({ displayFront: false });
        };
        this.state = {
            hintVisible: false,
            dictionary_form_kana: '{{dictionary_form_kana}}',
            canvases: [],
            displayFront: Persist_1.default.getItem() === 'display front'
        };
        Persist_1.default.setItem('displayed front');
    }
    render(props, state) {
        return (state.displayFront ?
            preact_1.h("span", null,
                preact_1.h(TranslationJapaneseFront_1.default, null),
                preact_1.h("button", { onClick: this.showBack }, "Show Back"))
            :
                preact_1.h("div", null,
                    preact_1.h("div", null, '{{translation}}'),
                    preact_1.h("div", null, '{{dictionary_form}}'),
                    state.dictionary_form_kana !== '' && preact_1.h("div", null, '{{dictionary_form_kana}}'),
                    preact_1.h("div", null, state.canvases.map(drawGuides => preact_1.h(Canvas_1.default, { word: "{{dictionary_form}}", guides: drawGuides }))),
                    preact_1.h("div", null,
                        preact_1.h("button", { onClick: () => this.addCanvases(false) }, "Empty boxes"),
                        preact_1.h("button", { onClick: () => this.addCanvases(true) }, "Boxes with guides"))));
    }
}
preact_1.render(preact_1.h(TranslationJapaneseBack, null), card);


/***/ }),

/***/ "./src/TranslationJapaneseFront.tsx":
/*!******************************************!*\
  !*** ./src/TranslationJapaneseFront.tsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const preact_1 = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
const Persist_1 = __webpack_require__(/*! ./Persist */ "./src/Persist.ts");
const Canvas_1 = __webpack_require__(/*! ./Canvas */ "./src/Canvas.tsx");
let card = document.getElementsByClassName('card')[0];
class TranslationJapaneseFront extends preact_1.Component {
    constructor() {
        super();
        this.showHint = () => {
            this.setState({ hintVisible: true });
        };
        this.state = {
            hintVisible: false,
            dictionary_form_kana: '{{dictionary_form_kana}}'
        };
        if (Persist_1.default.getItem() !== 'displayed front') {
            Persist_1.default.setItem('display front');
        }
    }
    render(props, state) {
        return (preact_1.h("div", null,
            preact_1.h("div", null, '{{translation}}'),
            preact_1.h(Canvas_1.default, { word: "{{dictionary_form}}", guides: false })));
    }
}
exports.default = TranslationJapaneseFront;
preact_1.render(preact_1.h(TranslationJapaneseFront, null), card);


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ByZWFjdC9kaXN0L3ByZWFjdC5tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NhbnZhcy50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL0NhbnZhc0ZyYW1lLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvUGVyc2lzdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvVHJhbnNsYXRpb25KYXBhbmVzZUJhY2sudHN4Iiwid2VicGFjazovLy8uL3NyYy9UcmFuc2xhdGlvbkphcGFuZXNlRnJvbnQudHN4Iiwid2VicGFjazovLy8uL3NyYy9hbmtpLXBlcnNpc3RlbmNlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFB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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBEQUEwRDtBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3REFBd0Q7QUFDeEQ7QUFDQSx5REFBeUQ7QUFDekQ7QUFDQTtBQUNBLHNFQUFzRTtBQUN0RTtBQUNBO0FBQ0EsMkRBQTJEO0FBQzNEO0FBQ0E7QUFDQTs7QUFFZSxpRkFBa0IsRSIsImZpbGUiOiJUcmFuc2xhdGlvbkphcGFuZXNlQmFjay5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL1RyYW5zbGF0aW9uSmFwYW5lc2VCYWNrLnRzeFwiKTtcbiIsInZhciBuLGwsdSxpLHQsbyxyLGY9e30sZT1bXSxjPS9hY2l0fGV4KD86c3xnfG58cHwkKXxycGh8Z3JpZHxvd3N8bW5jfG50d3xpbmVbY2hdfHpvb3xeb3JkL2k7ZnVuY3Rpb24gcyhuLGwpe2Zvcih2YXIgdSBpbiBsKW5bdV09bFt1XTtyZXR1cm4gbn1mdW5jdGlvbiBhKG4pe3ZhciBsPW4ucGFyZW50Tm9kZTtsJiZsLnJlbW92ZUNoaWxkKG4pfWZ1bmN0aW9uIHYobixsLHUpe3ZhciBpLHQ9YXJndW1lbnRzLG89e307Zm9yKGkgaW4gbClcImtleVwiIT09aSYmXCJyZWZcIiE9PWkmJihvW2ldPWxbaV0pO2lmKGFyZ3VtZW50cy5sZW5ndGg+Mylmb3IodT1bdV0saT0zO2k8YXJndW1lbnRzLmxlbmd0aDtpKyspdS5wdXNoKHRbaV0pO2lmKG51bGwhPXUmJihvLmNoaWxkcmVuPXUpLFwiZnVuY3Rpb25cIj09dHlwZW9mIG4mJm51bGwhPW4uZGVmYXVsdFByb3BzKWZvcihpIGluIG4uZGVmYXVsdFByb3BzKXZvaWQgMD09PW9baV0mJihvW2ldPW4uZGVmYXVsdFByb3BzW2ldKTtyZXR1cm4gaChuLG8sbCYmbC5rZXksbCYmbC5yZWYpfWZ1bmN0aW9uIGgobCx1LGksdCl7dmFyIG89e3R5cGU6bCxwcm9wczp1LGtleTppLHJlZjp0LF9fazpudWxsLF9fOm51bGwsX19iOjAsX19lOm51bGwsX19kOnZvaWQgMCxfX2M6bnVsbCxjb25zdHJ1Y3Rvcjp2b2lkIDB9O3JldHVybiBuLnZub2RlJiZuLnZub2RlKG8pLG99ZnVuY3Rpb24gcCgpe3JldHVybnt9fWZ1bmN0aW9uIGQobil7cmV0dXJuIG4uY2hpbGRyZW59ZnVuY3Rpb24geShuLGwpe3RoaXMucHJvcHM9bix0aGlzLmNvbnRleHQ9bH1mdW5jdGlvbiBtKG4sbCl7aWYobnVsbD09bClyZXR1cm4gbi5fXz9tKG4uX18sbi5fXy5fX2suaW5kZXhPZihuKSsxKTpudWxsO2Zvcih2YXIgdTtsPG4uX19rLmxlbmd0aDtsKyspaWYobnVsbCE9KHU9bi5fX2tbbF0pJiZudWxsIT11Ll9fZSlyZXR1cm4gdS5fX2U7cmV0dXJuXCJmdW5jdGlvblwiPT10eXBlb2Ygbi50eXBlP20obik6bnVsbH1mdW5jdGlvbiB3KG4pe3ZhciBsLHU7aWYobnVsbCE9KG49bi5fXykmJm51bGwhPW4uX19jKXtmb3Iobi5fX2U9bi5fX2MuYmFzZT1udWxsLGw9MDtsPG4uX19rLmxlbmd0aDtsKyspaWYobnVsbCE9KHU9bi5fX2tbbF0pJiZudWxsIT11Ll9fZSl7bi5fX2U9bi5fX2MuYmFzZT11Ll9fZTticmVha31yZXR1cm4gdyhuKX19ZnVuY3Rpb24gZyhsKXsoIWwuX19kJiYobC5fX2Q9ITApJiYxPT09dS5wdXNoKGwpfHx0IT09bi5kZWJvdW5jZVJlbmRlcmluZykmJigodD1uLmRlYm91bmNlUmVuZGVyaW5nKXx8aSkoayl9ZnVuY3Rpb24gaygpe3ZhciBuLGwsaSx0LG8scixmO2Zvcih1LnNvcnQoZnVuY3Rpb24obixsKXtyZXR1cm4gbC5fX3YuX19iLW4uX192Ll9fYn0pO249dS5wb3AoKTspbi5fX2QmJihpPXZvaWQgMCx0PXZvaWQgMCxyPShvPShsPW4pLl9fdikuX19lLChmPWwuX19QKSYmKGk9W10sdD16KGYsbyxzKHt9LG8pLGwuX19uLHZvaWQgMCE9PWYub3duZXJTVkdFbGVtZW50LG51bGwsaSxudWxsPT1yP20obyk6ciksVChpLG8pLHQhPXImJncobykpKX1mdW5jdGlvbiBfKG4sbCx1LGksdCxvLHIsYyxzKXt2YXIgdixoLHAsZCx5LHcsZyxrPXUmJnUuX19rfHxlLF89ay5sZW5ndGg7aWYoYz09ZiYmKGM9bnVsbCE9bz9vWzBdOl8/bSh1LDApOm51bGwpLHY9MCxsLl9faz1iKGwuX19rLGZ1bmN0aW9uKHUpe2lmKG51bGwhPXUpe2lmKHUuX189bCx1Ll9fYj1sLl9fYisxLG51bGw9PT0ocD1rW3ZdKXx8cCYmdS5rZXk9PXAua2V5JiZ1LnR5cGU9PT1wLnR5cGUpa1t2XT12b2lkIDA7ZWxzZSBmb3IoaD0wO2g8XztoKyspe2lmKChwPWtbaF0pJiZ1LmtleT09cC5rZXkmJnUudHlwZT09PXAudHlwZSl7a1toXT12b2lkIDA7YnJlYWt9cD1udWxsfWlmKGQ9eihuLHUscD1wfHxmLGksdCxvLHIsYyxzKSwoaD11LnJlZikmJnAucmVmIT1oJiYoZ3x8KGc9W10pLHAucmVmJiZnLnB1c2gocC5yZWYsbnVsbCx1KSxnLnB1c2goaCx1Ll9fY3x8ZCx1KSksbnVsbCE9ZCl7dmFyIGU7aWYobnVsbD09dyYmKHc9ZCksdm9pZCAwIT09dS5fX2QpZT11Ll9fZCx1Ll9fZD12b2lkIDA7ZWxzZSBpZihvPT1wfHxkIT1jfHxudWxsPT1kLnBhcmVudE5vZGUpe246aWYobnVsbD09Y3x8Yy5wYXJlbnROb2RlIT09biluLmFwcGVuZENoaWxkKGQpLGU9bnVsbDtlbHNle2Zvcih5PWMsaD0wOyh5PXkubmV4dFNpYmxpbmcpJiZoPF87aCs9MilpZih5PT1kKWJyZWFrIG47bi5pbnNlcnRCZWZvcmUoZCxjKSxlPWN9XCJvcHRpb25cIj09bC50eXBlJiYobi52YWx1ZT1cIlwiKX1jPXZvaWQgMCE9PWU/ZTpkLm5leHRTaWJsaW5nLFwiZnVuY3Rpb25cIj09dHlwZW9mIGwudHlwZSYmKGwuX19kPWMpfX1yZXR1cm4gdisrLHV9KSxsLl9fZT13LG51bGwhPW8mJlwiZnVuY3Rpb25cIiE9dHlwZW9mIGwudHlwZSlmb3Iodj1vLmxlbmd0aDt2LS07KW51bGwhPW9bdl0mJmEob1t2XSk7Zm9yKHY9Xzt2LS07KW51bGwhPWtbdl0mJkEoa1t2XSxrW3ZdKTtpZihnKWZvcih2PTA7djxnLmxlbmd0aDt2KyspaihnW3ZdLGdbKyt2XSxnWysrdl0pfWZ1bmN0aW9uIGIobixsLHUpe2lmKG51bGw9PXUmJih1PVtdKSxudWxsPT1ufHxcImJvb2xlYW5cIj09dHlwZW9mIG4pbCYmdS5wdXNoKGwobnVsbCkpO2Vsc2UgaWYoQXJyYXkuaXNBcnJheShuKSlmb3IodmFyIGk9MDtpPG4ubGVuZ3RoO2krKyliKG5baV0sbCx1KTtlbHNlIHUucHVzaChsP2woXCJzdHJpbmdcIj09dHlwZW9mIG58fFwibnVtYmVyXCI9PXR5cGVvZiBuP2gobnVsbCxuLG51bGwsbnVsbCk6bnVsbCE9bi5fX2V8fG51bGwhPW4uX19jP2gobi50eXBlLG4ucHJvcHMsbi5rZXksbnVsbCk6bik6bik7cmV0dXJuIHV9ZnVuY3Rpb24geChuLGwsdSxpLHQpe3ZhciBvO2ZvcihvIGluIHUpbyBpbiBsfHxDKG4sbyxudWxsLHVbb10saSk7Zm9yKG8gaW4gbCl0JiZcImZ1bmN0aW9uXCIhPXR5cGVvZiBsW29dfHxcInZhbHVlXCI9PT1vfHxcImNoZWNrZWRcIj09PW98fHVbb109PT1sW29dfHxDKG4sbyxsW29dLHVbb10saSl9ZnVuY3Rpb24gUChuLGwsdSl7XCItXCI9PT1sWzBdP24uc2V0UHJvcGVydHkobCx1KTpuW2xdPVwibnVtYmVyXCI9PXR5cGVvZiB1JiYhMT09PWMudGVzdChsKT91K1wicHhcIjpudWxsPT11P1wiXCI6dX1mdW5jdGlvbiBDKG4sbCx1LGksdCl7dmFyIG8scixmLGUsYztpZih0P1wiY2xhc3NOYW1lXCI9PT1sJiYobD1cImNsYXNzXCIpOlwiY2xhc3NcIj09PWwmJihsPVwiY2xhc3NOYW1lXCIpLFwia2V5XCI9PT1sfHxcImNoaWxkcmVuXCI9PT1sKTtlbHNlIGlmKFwic3R5bGVcIj09PWwpaWYobz1uLnN0eWxlLFwic3RyaW5nXCI9PXR5cGVvZiB1KW8uY3NzVGV4dD11O2Vsc2V7aWYoXCJzdHJpbmdcIj09dHlwZW9mIGkmJihvLmNzc1RleHQ9XCJcIixpPW51bGwpLGkpZm9yKHIgaW4gaSl1JiZyIGluIHV8fFAobyxyLFwiXCIpO2lmKHUpZm9yKGYgaW4gdSlpJiZ1W2ZdPT09aVtmXXx8UChvLGYsdVtmXSl9ZWxzZVwib1wiPT09bFswXSYmXCJuXCI9PT1sWzFdPyhlPWwhPT0obD1sLnJlcGxhY2UoL0NhcHR1cmUkLyxcIlwiKSksYz1sLnRvTG93ZXJDYXNlKCksbD0oYyBpbiBuP2M6bCkuc2xpY2UoMiksdT8oaXx8bi5hZGRFdmVudExpc3RlbmVyKGwsTixlKSwobi5sfHwobi5sPXt9KSlbbF09dSk6bi5yZW1vdmVFdmVudExpc3RlbmVyKGwsTixlKSk6XCJsaXN0XCIhPT1sJiZcInRhZ05hbWVcIiE9PWwmJlwiZm9ybVwiIT09bCYmXCJ0eXBlXCIhPT1sJiZcInNpemVcIiE9PWwmJiF0JiZsIGluIG4/bltsXT1udWxsPT11P1wiXCI6dTpcImZ1bmN0aW9uXCIhPXR5cGVvZiB1JiZcImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MXCIhPT1sJiYobCE9PShsPWwucmVwbGFjZSgvXnhsaW5rOj8vLFwiXCIpKT9udWxsPT11fHwhMT09PXU/bi5yZW1vdmVBdHRyaWJ1dGVOUyhcImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIixsLnRvTG93ZXJDYXNlKCkpOm4uc2V0QXR0cmlidXRlTlMoXCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCIsbC50b0xvd2VyQ2FzZSgpLHUpOm51bGw9PXV8fCExPT09dT9uLnJlbW92ZUF0dHJpYnV0ZShsKTpuLnNldEF0dHJpYnV0ZShsLHUpKX1mdW5jdGlvbiBOKGwpe3RoaXMubFtsLnR5cGVdKG4uZXZlbnQ/bi5ldmVudChsKTpsKX1mdW5jdGlvbiB6KGwsdSxpLHQsbyxyLGYsZSxjKXt2YXIgYSx2LGgscCxtLHcsZyxrLGIseCxQPXUudHlwZTtpZih2b2lkIDAhPT11LmNvbnN0cnVjdG9yKXJldHVybiBudWxsOyhhPW4uX19iKSYmYSh1KTt0cnl7bjppZihcImZ1bmN0aW9uXCI9PXR5cGVvZiBQKXtpZihrPXUucHJvcHMsYj0oYT1QLmNvbnRleHRUeXBlKSYmdFthLl9fY10seD1hP2I/Yi5wcm9wcy52YWx1ZTphLl9fOnQsaS5fX2M/Zz0odj11Ll9fYz1pLl9fYykuX189di5fX0U6KFwicHJvdG90eXBlXCJpbiBQJiZQLnByb3RvdHlwZS5yZW5kZXI/dS5fX2M9dj1uZXcgUChrLHgpOih1Ll9fYz12PW5ldyB5KGsseCksdi5jb25zdHJ1Y3Rvcj1QLHYucmVuZGVyPUQpLGImJmIuc3ViKHYpLHYucHJvcHM9ayx2LnN0YXRlfHwodi5zdGF0ZT17fSksdi5jb250ZXh0PXgsdi5fX249dCxoPXYuX19kPSEwLHYuX19oPVtdKSxudWxsPT12Ll9fcyYmKHYuX19zPXYuc3RhdGUpLG51bGwhPVAuZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzJiYodi5fX3M9PXYuc3RhdGUmJih2Ll9fcz1zKHt9LHYuX19zKSkscyh2Ll9fcyxQLmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyhrLHYuX19zKSkpLHA9di5wcm9wcyxtPXYuc3RhdGUsaCludWxsPT1QLmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyYmbnVsbCE9di5jb21wb25lbnRXaWxsTW91bnQmJnYuY29tcG9uZW50V2lsbE1vdW50KCksbnVsbCE9di5jb21wb25lbnREaWRNb3VudCYmdi5fX2gucHVzaCh2LmNvbXBvbmVudERpZE1vdW50KTtlbHNle2lmKG51bGw9PVAuZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzJiZrIT09cCYmbnVsbCE9di5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzJiZ2LmNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMoayx4KSwhdi5fX2UmJm51bGwhPXYuc2hvdWxkQ29tcG9uZW50VXBkYXRlJiYhMT09PXYuc2hvdWxkQ29tcG9uZW50VXBkYXRlKGssdi5fX3MseCkpe2Zvcih2LnByb3BzPWssdi5zdGF0ZT12Ll9fcyx2Ll9fZD0hMSx2Ll9fdj11LHUuX19lPWkuX19lLHUuX19rPWkuX19rLHYuX19oLmxlbmd0aCYmZi5wdXNoKHYpLGE9MDthPHUuX19rLmxlbmd0aDthKyspdS5fX2tbYV0mJih1Ll9fa1thXS5fXz11KTticmVhayBufW51bGwhPXYuY29tcG9uZW50V2lsbFVwZGF0ZSYmdi5jb21wb25lbnRXaWxsVXBkYXRlKGssdi5fX3MseCksbnVsbCE9di5jb21wb25lbnREaWRVcGRhdGUmJnYuX19oLnB1c2goZnVuY3Rpb24oKXt2LmNvbXBvbmVudERpZFVwZGF0ZShwLG0sdyl9KX12LmNvbnRleHQ9eCx2LnByb3BzPWssdi5zdGF0ZT12Ll9fcywoYT1uLl9fcikmJmEodSksdi5fX2Q9ITEsdi5fX3Y9dSx2Ll9fUD1sLGE9di5yZW5kZXIodi5wcm9wcyx2LnN0YXRlLHYuY29udGV4dCksdS5fX2s9bnVsbCE9YSYmYS50eXBlPT1kJiZudWxsPT1hLmtleT9hLnByb3BzLmNoaWxkcmVuOmEsbnVsbCE9di5nZXRDaGlsZENvbnRleHQmJih0PXMocyh7fSx0KSx2LmdldENoaWxkQ29udGV4dCgpKSksaHx8bnVsbD09di5nZXRTbmFwc2hvdEJlZm9yZVVwZGF0ZXx8KHc9di5nZXRTbmFwc2hvdEJlZm9yZVVwZGF0ZShwLG0pKSxfKGwsdSxpLHQsbyxyLGYsZSxjKSx2LmJhc2U9dS5fX2Usdi5fX2gubGVuZ3RoJiZmLnB1c2godiksZyYmKHYuX19FPXYuX189bnVsbCksdi5fX2U9ITF9ZWxzZSB1Ll9fZT0kKGkuX19lLHUsaSx0LG8scixmLGMpOyhhPW4uZGlmZmVkKSYmYSh1KX1jYXRjaChsKXtuLl9fZShsLHUsaSl9cmV0dXJuIHUuX19lfWZ1bmN0aW9uIFQobCx1KXtuLl9fYyYmbi5fX2ModSxsKSxsLnNvbWUoZnVuY3Rpb24odSl7dHJ5e2w9dS5fX2gsdS5fX2g9W10sbC5zb21lKGZ1bmN0aW9uKG4pe24uY2FsbCh1KX0pfWNhdGNoKGwpe24uX19lKGwsdS5fX3YpfX0pfWZ1bmN0aW9uICQobixsLHUsaSx0LG8scixjKXt2YXIgcyxhLHYsaCxwLGQ9dS5wcm9wcyx5PWwucHJvcHM7aWYodD1cInN2Z1wiPT09bC50eXBlfHx0LG51bGw9PW4mJm51bGwhPW8pZm9yKHM9MDtzPG8ubGVuZ3RoO3MrKylpZihudWxsIT0oYT1vW3NdKSYmKG51bGw9PT1sLnR5cGU/Mz09PWEubm9kZVR5cGU6YS5sb2NhbE5hbWU9PT1sLnR5cGUpKXtuPWEsb1tzXT1udWxsO2JyZWFrfWlmKG51bGw9PW4pe2lmKG51bGw9PT1sLnR5cGUpcmV0dXJuIGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHkpO249dD9kb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLGwudHlwZSk6ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChsLnR5cGUseS5pcyYme2lzOnkuaXN9KSxvPW51bGx9aWYobnVsbD09PWwudHlwZSludWxsIT1vJiYob1tvLmluZGV4T2YobildPW51bGwpLGQhPT15JiZuLmRhdGEhPXkmJihuLmRhdGE9eSk7ZWxzZSBpZihsIT09dSl7aWYobnVsbCE9byYmKG9bby5pbmRleE9mKG4pXT1udWxsLG89ZS5zbGljZS5jYWxsKG4uY2hpbGROb2RlcykpLHY9KGQ9dS5wcm9wc3x8ZikuZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwsaD15LmRhbmdlcm91c2x5U2V0SW5uZXJIVE1MLCFjKXtpZihkPT09Zilmb3IoZD17fSxwPTA7cDxuLmF0dHJpYnV0ZXMubGVuZ3RoO3ArKylkW24uYXR0cmlidXRlc1twXS5uYW1lXT1uLmF0dHJpYnV0ZXNbcF0udmFsdWU7KGh8fHYpJiYoaCYmdiYmaC5fX2h0bWw9PXYuX19odG1sfHwobi5pbm5lckhUTUw9aCYmaC5fX2h0bWx8fFwiXCIpKX14KG4seSxkLHQsYyksbC5fX2s9bC5wcm9wcy5jaGlsZHJlbixofHxfKG4sbCx1LGksXCJmb3JlaWduT2JqZWN0XCIhPT1sLnR5cGUmJnQsbyxyLGYsYyksY3x8KFwidmFsdWVcImluIHkmJnZvaWQgMCE9PXkudmFsdWUmJnkudmFsdWUhPT1uLnZhbHVlJiYobi52YWx1ZT1udWxsPT15LnZhbHVlP1wiXCI6eS52YWx1ZSksXCJjaGVja2VkXCJpbiB5JiZ2b2lkIDAhPT15LmNoZWNrZWQmJnkuY2hlY2tlZCE9PW4uY2hlY2tlZCYmKG4uY2hlY2tlZD15LmNoZWNrZWQpKX1yZXR1cm4gbn1mdW5jdGlvbiBqKGwsdSxpKXt0cnl7XCJmdW5jdGlvblwiPT10eXBlb2YgbD9sKHUpOmwuY3VycmVudD11fWNhdGNoKGwpe24uX19lKGwsaSl9fWZ1bmN0aW9uIEEobCx1LGkpe3ZhciB0LG8scjtpZihuLnVubW91bnQmJm4udW5tb3VudChsKSwodD1sLnJlZikmJih0LmN1cnJlbnQmJnQuY3VycmVudCE9PWwuX19lfHxqKHQsbnVsbCx1KSksaXx8XCJmdW5jdGlvblwiPT10eXBlb2YgbC50eXBlfHwoaT1udWxsIT0obz1sLl9fZSkpLGwuX19lPWwuX19kPXZvaWQgMCxudWxsIT0odD1sLl9fYykpe2lmKHQuY29tcG9uZW50V2lsbFVubW91bnQpdHJ5e3QuY29tcG9uZW50V2lsbFVubW91bnQoKX1jYXRjaChsKXtuLl9fZShsLHUpfXQuYmFzZT10Ll9fUD1udWxsfWlmKHQ9bC5fX2spZm9yKHI9MDtyPHQubGVuZ3RoO3IrKyl0W3JdJiZBKHRbcl0sdSxpKTtudWxsIT1vJiZhKG8pfWZ1bmN0aW9uIEQobixsLHUpe3JldHVybiB0aGlzLmNvbnN0cnVjdG9yKG4sdSl9ZnVuY3Rpb24gRShsLHUsaSl7dmFyIHQscixjO24uX18mJm4uX18obCx1KSxyPSh0PWk9PT1vKT9udWxsOmkmJmkuX19rfHx1Ll9fayxsPXYoZCxudWxsLFtsXSksYz1bXSx6KHUsKHQ/dTppfHx1KS5fX2s9bCxyfHxmLGYsdm9pZCAwIT09dS5vd25lclNWR0VsZW1lbnQsaSYmIXQ/W2ldOnI/bnVsbDplLnNsaWNlLmNhbGwodS5jaGlsZE5vZGVzKSxjLGl8fGYsdCksVChjLGwpfWZ1bmN0aW9uIEgobixsKXtFKG4sbCxvKX1mdW5jdGlvbiBJKG4sbCl7cmV0dXJuIGw9cyhzKHt9LG4ucHJvcHMpLGwpLGFyZ3VtZW50cy5sZW5ndGg+MiYmKGwuY2hpbGRyZW49ZS5zbGljZS5jYWxsKGFyZ3VtZW50cywyKSksaChuLnR5cGUsbCxsLmtleXx8bi5rZXksbC5yZWZ8fG4ucmVmKX1mdW5jdGlvbiBMKG4pe3ZhciBsPXt9LHU9e19fYzpcIl9fY0NcIityKyssX186bixDb25zdW1lcjpmdW5jdGlvbihuLGwpe3JldHVybiBuLmNoaWxkcmVuKGwpfSxQcm92aWRlcjpmdW5jdGlvbihuKXt2YXIgaSx0PXRoaXM7cmV0dXJuIHRoaXMuZ2V0Q2hpbGRDb250ZXh0fHwoaT1bXSx0aGlzLmdldENoaWxkQ29udGV4dD1mdW5jdGlvbigpe3JldHVybiBsW3UuX19jXT10LGx9LHRoaXMuc2hvdWxkQ29tcG9uZW50VXBkYXRlPWZ1bmN0aW9uKGwpe24udmFsdWUhPT1sLnZhbHVlJiZpLnNvbWUoZnVuY3Rpb24obil7bi5jb250ZXh0PWwudmFsdWUsZyhuKX0pfSx0aGlzLnN1Yj1mdW5jdGlvbihuKXtpLnB1c2gobik7dmFyIGw9bi5jb21wb25lbnRXaWxsVW5tb3VudDtuLmNvbXBvbmVudFdpbGxVbm1vdW50PWZ1bmN0aW9uKCl7aS5zcGxpY2UoaS5pbmRleE9mKG4pLDEpLGwmJmwuY2FsbChuKX19KSxuLmNoaWxkcmVufX07cmV0dXJuIHUuQ29uc3VtZXIuY29udGV4dFR5cGU9dSx1fW49e19fZTpmdW5jdGlvbihuLGwpe2Zvcih2YXIgdSxpO2w9bC5fXzspaWYoKHU9bC5fX2MpJiYhdS5fXyl0cnl7aWYodS5jb25zdHJ1Y3RvciYmbnVsbCE9dS5jb25zdHJ1Y3Rvci5nZXREZXJpdmVkU3RhdGVGcm9tRXJyb3ImJihpPSEwLHUuc2V0U3RhdGUodS5jb25zdHJ1Y3Rvci5nZXREZXJpdmVkU3RhdGVGcm9tRXJyb3IobikpKSxudWxsIT11LmNvbXBvbmVudERpZENhdGNoJiYoaT0hMCx1LmNvbXBvbmVudERpZENhdGNoKG4pKSxpKXJldHVybiBnKHUuX19FPXUpfWNhdGNoKGwpe249bH10aHJvdyBufX0sbD1mdW5jdGlvbihuKXtyZXR1cm4gbnVsbCE9biYmdm9pZCAwPT09bi5jb25zdHJ1Y3Rvcn0seS5wcm90b3R5cGUuc2V0U3RhdGU9ZnVuY3Rpb24obixsKXt2YXIgdTt1PXRoaXMuX19zIT09dGhpcy5zdGF0ZT90aGlzLl9fczp0aGlzLl9fcz1zKHt9LHRoaXMuc3RhdGUpLFwiZnVuY3Rpb25cIj09dHlwZW9mIG4mJihuPW4odSx0aGlzLnByb3BzKSksbiYmcyh1LG4pLG51bGwhPW4mJnRoaXMuX192JiYobCYmdGhpcy5fX2gucHVzaChsKSxnKHRoaXMpKX0seS5wcm90b3R5cGUuZm9yY2VVcGRhdGU9ZnVuY3Rpb24obil7dGhpcy5fX3YmJih0aGlzLl9fZT0hMCxuJiZ0aGlzLl9faC5wdXNoKG4pLGcodGhpcykpfSx5LnByb3RvdHlwZS5yZW5kZXI9ZCx1PVtdLGk9XCJmdW5jdGlvblwiPT10eXBlb2YgUHJvbWlzZT9Qcm9taXNlLnByb3RvdHlwZS50aGVuLmJpbmQoUHJvbWlzZS5yZXNvbHZlKCkpOnNldFRpbWVvdXQsbz1mLHI9MDtleHBvcnR7RSBhcyByZW5kZXIsSCBhcyBoeWRyYXRlLHYgYXMgY3JlYXRlRWxlbWVudCx2IGFzIGgsZCBhcyBGcmFnbWVudCxwIGFzIGNyZWF0ZVJlZixsIGFzIGlzVmFsaWRFbGVtZW50LHkgYXMgQ29tcG9uZW50LEkgYXMgY2xvbmVFbGVtZW50LEwgYXMgY3JlYXRlQ29udGV4dCxiIGFzIHRvQ2hpbGRBcnJheSxBIGFzIF91bm1vdW50LG4gYXMgb3B0aW9uc307XG4vLyMgc291cmNlTWFwcGluZ1VSTD1wcmVhY3QubW9kdWxlLmpzLm1hcFxuIiwiaW1wb3J0IHsgaCwgcmVuZGVyLCBDb21wb25lbnQgfSBmcm9tICdwcmVhY3QnO1xuaW1wb3J0IENhbnZhc0ZyYW1lIGZyb20gJy4vQ2FudmFzRnJhbWUnO1xuXG50eXBlIFByb3BzID0ge1xuICB3b3JkOiBzdHJpbmcsXG4gIGd1aWRlczogYm9vbGVhblxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYW52YXMgZXh0ZW5kcyBDb21wb25lbnQ8UHJvcHM+IHtcblxuICByZW5kZXIocHJvcHM6IFByb3BzLCBzdGF0ZTogYW55KSB7XG4gICAgbGV0IGZyYW1lczogcHJlYWN0LkpTWC5FbGVtZW50W10gPSBbXTtcbiAgICBmb3IobGV0IGUgb2YgcHJvcHMud29yZC5zcGxpdCgnJykpIHtcbiAgICAgIGZyYW1lcy5wdXNoKDxDYW52YXNGcmFtZSBjaGFyYWN0ZXIgPSB7IGUgfSBndWlkZXMgPSB7IHByb3BzLmd1aWRlcyB9IC8+KTtcbiAgICB9XG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwiY2FudmFzXCI+eyBmcmFtZXMgfTwvZGl2PjtcbiAgfVxufSIsImltcG9ydCB7IGgsIHJlbmRlciwgQ29tcG9uZW50LCBSZWZPYmplY3QgfSBmcm9tICdwcmVhY3QnO1xuaW1wb3J0IHsgY3JlYXRlUmVmIH0gZnJvbSAncHJlYWN0JztcblxudHlwZSBQcm9wcyA9IHtcbiAgY2hhcmFjdGVyOiBzdHJpbmcsXG4gIGd1aWRlczogYm9vbGVhblxufTtcblxudHlwZSBQb2ludCA9IHtcbiAgeDogbnVtYmVyLFxuICB5OiBudW1iZXJcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhbnZhc0ZyYW1lIGV4dGVuZHMgQ29tcG9uZW50PFByb3BzPiB7XG4gICAgcGVuRG93bjogYm9vbGVhbiA9IGZhbHNlO1xuICAgIC8vIG1vdXNlUG9zaXRpb25zIHdpbGwgYmUgdXNlZCBhcyBhIEZJRk8gcXVldWVcbiAgICBwZW5Qb3NpdGlvbnM6IFBvaW50W10gPSBBcnJheS5mcm9tKHtsZW5ndGg6IDN9LCAoKSA9PiB7IHJldHVybiB7eDogMCwgeTogMH19KTtcbiAgICBwb3NpdGlvbnNTaW5jZVBlbkRvd246IG51bWJlciA9IDA7XG4gICAgcGFnZU9mZnNldDogUG9pbnQ7XG4gICAgcmVmOiBSZWZPYmplY3Q8SFRNTERpdkVsZW1lbnQ+ID0gY3JlYXRlUmVmKCk7XG4gICAgY2FudmFzUmVmOiBSZWZPYmplY3Q8SFRNTENhbnZhc0VsZW1lbnQ+ID0gY3JlYXRlUmVmKCk7XG4gICAgcmVuZGVyaW5nQ29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5vbk1vdXNlRG93biA9IHRoaXMub25Nb3VzZURvd24uYmluZCh0aGlzKTtcbiAgICB0aGlzLm9uVG91Y2hTdGFydCA9IHRoaXMub25Ub3VjaFN0YXJ0LmJpbmQodGhpcyk7XG4gICAgdGhpcy5vbk1vdXNlTW92ZSA9IHRoaXMub25Nb3VzZU1vdmUuYmluZCh0aGlzKTtcbiAgICB0aGlzLm9uVG91Y2hNb3ZlID0gdGhpcy5vblRvdWNoTW92ZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMub25Nb3VzZVVwID0gdGhpcy5vbk1vdXNlVXAuYmluZCh0aGlzKTtcbiAgICB0aGlzLm9uVG91Y2hFbmQgPSB0aGlzLm9uVG91Y2hFbmQuYmluZCh0aGlzKTtcbiAgICB0aGlzLm9uTW91c2VMZWF2ZSA9IHRoaXMub25Nb3VzZUxlYXZlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5hZGp1c3RGb3JSZXNpemVBbmRJbml0ID0gdGhpcy5hZGp1c3RGb3JSZXNpemVBbmRJbml0LmJpbmQodGhpcyk7XG4gICAgdGhpcy5hZGp1c3RGb3JTY3JvbGwgPSB0aGlzLmFkanVzdEZvclNjcm9sbC5iaW5kKHRoaXMpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLmFkanVzdEZvclJlc2l6ZUFuZEluaXQpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLmFkanVzdEZvclNjcm9sbCk7XG4gICAgc2V0VGltZW91dCh0aGlzLmFkanVzdEZvclJlc2l6ZUFuZEluaXQpO1xuICB9XG5cbiAgcmVuZGVyKHByb3BzOiBQcm9wcywgc3RhdGU6IGFueSkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzPVwiY2FudmFzLWZyYW1lXCIgcmVmPXsgdGhpcy5yZWYgfT5cbiAgICAgICAgeyBwcm9wcy5ndWlkZXMgJiYgPGRpdj57IHByb3BzLmNoYXJhY3RlciB9PC9kaXY+IH1cbiAgICAgICAgPGNhbnZhcyB3aWR0aD1cIjFcIiBoZWlnaHQ9XCIxXCJcbiAgICAgICAgICBvbk1vdXNlRG93bj17IHRoaXMub25Nb3VzZURvd24gfSBvblRvdWNoU3RhcnQ9eyB0aGlzLm9uVG91Y2hTdGFydCB9XG4gICAgICAgICAgb25Nb3VzZU1vdmU9eyB0aGlzLm9uTW91c2VNb3ZlIH0gb25Ub3VjaE1vdmU9eyB0aGlzLm9uVG91Y2hNb3ZlIH1cbiAgICAgICAgICBvbk1vdXNlVXA9eyB0aGlzLm9uTW91c2VVcCB9IG9uVG91Y2hFbmQ9eyB0aGlzLm9uVG91Y2hFbmQgfVxuICAgICAgICAgIG9uTW91c2VMZWF2ZT17IHRoaXMub25Nb3VzZUxlYXZlIH0gcmVmPXsgdGhpcy5jYW52YXNSZWYgfT48L2NhbnZhcz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxuICAvKiBDdXJyZW50IGxpbWl0YXRpb246XG4gICAqIFJlc2l6aW5nIHRoZSB2aWV3cG9ydCBjbGVhcnMgY2FudmFzICovXG4gIGFkanVzdEZvclJlc2l6ZUFuZEluaXQoKSB7XG4gICAgY29uc29sZS5sb2coJ2FkanVzdEZvclJlc2l6ZSBjYWxsZWQnKTtcbiAgICB0aGlzLmFkanVzdEZvclNjcm9sbCgpO1xuICAgIHRoaXMuY2FudmFzUmVmLmN1cnJlbnQud2lkdGggPSB0aGlzLmNhbnZhc1JlZi5jdXJyZW50LmNsaWVudFdpZHRoO1xuICAgIHRoaXMuY2FudmFzUmVmLmN1cnJlbnQuaGVpZ2h0ID0gdGhpcy5jYW52YXNSZWYuY3VycmVudC5jbGllbnRIZWlnaHQ7XG4gICAgdGhpcy5yZW5kZXJpbmdDb250ZXh0ID0gdGhpcy5jYW52YXNSZWYuY3VycmVudC5nZXRDb250ZXh0KCcyZCcpO1xuICAgIHRoaXMucmVuZGVyaW5nQ29udGV4dC5maWxsU3R5bGUgPSAnIzU4NmU3NSc7IC8vIFNvbGFyaXplZCBMaWdodCBiYXNlMDFcbiAgICB0aGlzLnJlbmRlcmluZ0NvbnRleHQubGluZVdpZHRoID0gMTIwMCAvIHRoaXMucmVmLmN1cnJlbnQuY2xpZW50V2lkdGg7XG4gIH1cblxuICBhZGp1c3RGb3JTY3JvbGwoKSB7XG4gICAgY29uc29sZS5sb2coJ2FkanVzdEZvclNjcm9sbCBjYWxsZWQnKTtcbiAgICB0aGlzLnBhZ2VPZmZzZXQgPSB7XG4gICAgICB4OiB0aGlzLnJlZi5jdXJyZW50Lm9mZnNldExlZnQsXG4gICAgICB5OiB0aGlzLnJlZi5jdXJyZW50Lm9mZnNldFRvcFxuICAgIH1cbiAgfVxuXG4gIGRyYXdJZlBlbkRvd24ocG9zaXRpb246IFBvaW50KSB7XG4gICAgdGhpcy5wZW5Qb3NpdGlvbnMucHVzaChwb3NpdGlvbik7XG4gICAgdGhpcy5wZW5Qb3NpdGlvbnMuc2hpZnQoKTtcbiAgICBpZiAodGhpcy5wZW5Eb3duICYmIHRoaXMucG9zaXRpb25zU2luY2VQZW5Eb3duID4gMikge1xuICAgICAgdGhpcy5yZW5kZXJpbmdDb250ZXh0LmJlZ2luUGF0aCgpO1xuICAgICAgdGhpcy5yZW5kZXJpbmdDb250ZXh0Lm1vdmVUbyh0aGlzLnBlblBvc2l0aW9uc1swXS54IC0gdGhpcy5wYWdlT2Zmc2V0LngsIHRoaXMucGVuUG9zaXRpb25zWzBdLnkgLSB0aGlzLnBhZ2VPZmZzZXQueSk7XG4gICAgICBmb3IgKGxldCBpPTE7IGk8dGhpcy5wZW5Qb3NpdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdGhpcy5yZW5kZXJpbmdDb250ZXh0LmxpbmVUbyh0aGlzLnBlblBvc2l0aW9uc1tpXS54IC0gdGhpcy5wYWdlT2Zmc2V0LngsIHRoaXMucGVuUG9zaXRpb25zW2ldLnkgLSB0aGlzLnBhZ2VPZmZzZXQueSk7XG4gICAgICB9XG4gICAgICB0aGlzLnJlbmRlcmluZ0NvbnRleHQuc3Ryb2tlKCk7XG4gICAgICB0aGlzLnJlbmRlcmluZ0NvbnRleHQuY2xvc2VQYXRoKCk7XG4gICAgfVxuICB9XG5cbiAgb25Nb3VzZURvd24oZTogTW91c2VFdmVudCkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLnBlbkRvd24gPSB0cnVlO1xuICAgIHRoaXMucG9zaXRpb25zU2luY2VQZW5Eb3duID0gMDtcbiAgICB0aGlzLmRyYXdJZlBlbkRvd24oe1xuICAgICAgeDogZS5wYWdlWCxcbiAgICAgIHk6IGUucGFnZVlcbiAgICB9KTtcbiAgfVxuXG4gIG9uVG91Y2hTdGFydChlOiBUb3VjaEV2ZW50KSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMucGVuRG93biA9IHRydWU7XG4gICAgdGhpcy5wb3NpdGlvbnNTaW5jZVBlbkRvd24gPSAwO1xuICAgIHRoaXMuZHJhd0lmUGVuRG93bih7XG4gICAgICB4OiBlLmNoYW5nZWRUb3VjaGVzWzBdLnBhZ2VYLFxuICAgICAgeTogZS5jaGFuZ2VkVG91Y2hlc1swXS5wYWdlWVxuICAgIH0pO1xuICB9XG5cbiAgb25Nb3VzZU1vdmUoZTogTW91c2VFdmVudCkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLnBvc2l0aW9uc1NpbmNlUGVuRG93bisrO1xuICAgIHRoaXMuZHJhd0lmUGVuRG93bih7XG4gICAgICB4OiBlLnBhZ2VYLFxuICAgICAgeTogZS5wYWdlWVxuICAgIH0pO1xuICB9XG5cbiAgb25Ub3VjaE1vdmUoZTogVG91Y2hFdmVudCkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLnBvc2l0aW9uc1NpbmNlUGVuRG93bisrO1xuICAgIHRoaXMuZHJhd0lmUGVuRG93bih7XG4gICAgICB4OiBlLmNoYW5nZWRUb3VjaGVzWzBdLnBhZ2VYLFxuICAgICAgeTogZS5jaGFuZ2VkVG91Y2hlc1swXS5wYWdlWVxuICAgIH0pO1xuICB9XG5cbiAgb25Nb3VzZVVwKGU6IE1vdXNlRXZlbnQpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy5wZW5Eb3duID0gZmFsc2U7XG4gICAgdGhpcy5kcmF3SWZQZW5Eb3duKHtcbiAgICAgIHg6IGUucGFnZVgsXG4gICAgICB5OiBlLnBhZ2VZXG4gICAgfSk7XG4gIH1cblxuICBvblRvdWNoRW5kKGU6IFRvdWNoRXZlbnQpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy5wZW5Eb3duID0gZmFsc2U7XG4gICAgdGhpcy5kcmF3SWZQZW5Eb3duKHtcbiAgICAgIHg6IGUuY2hhbmdlZFRvdWNoZXNbMF0ucGFnZVgsXG4gICAgICB5OiBlLmNoYW5nZWRUb3VjaGVzWzBdLnBhZ2VZXG4gICAgfSk7XG4gIH1cblxuICBvbk1vdXNlTGVhdmUoZTogTW91c2VFdmVudCkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLnBlbkRvd24gPSBmYWxzZTtcbiAgICB0aGlzLmRyYXdJZlBlbkRvd24oe1xuICAgICAgeDogZS5wYWdlWCxcbiAgICAgIHk6IGUucGFnZVlcbiAgICB9KTtcbiAgfVxufSIsImltcG9ydCAnLi9hbmtpLXBlcnNpc3RlbmNlJztcblxuZXhwb3J0IGRlZmF1bHQge1xuXG4gIHNldEl0ZW0oaXRlbTogYW55KSB7XG4gICAgKCh3aW5kb3cgYXMgYW55KS5QZXJzaXN0ZW5jZSBhcyBhbnkpLnNldEl0ZW0oaXRlbSk7XG4gIH0sXG5cbiAgZ2V0SXRlbSgpOiBhbnkge1xuICAgIHJldHVybiAoKHdpbmRvdyBhcyBhbnkpLlBlcnNpc3RlbmNlIGFzIGFueSkuZ2V0SXRlbSgpO1xuICB9XG5cbn0iLCJpbXBvcnQgeyBoLCByZW5kZXIsIENvbXBvbmVudCwgUmVmT2JqZWN0LCBjcmVhdGVSZWYgfSBmcm9tICdwcmVhY3QnO1xuaW1wb3J0IHBlcnNpc3QgZnJvbSAnLi9QZXJzaXN0JztcbmltcG9ydCBDYW52YXMgZnJvbSAnLi9DYW52YXMnO1xuaW1wb3J0IFRyYW5zbGF0aW9uSmFwYW5lc2VGcm9udCBmcm9tICcuL1RyYW5zbGF0aW9uSmFwYW5lc2VGcm9udCc7XG5cbmxldCBjYXJkOiBIVE1MRGl2RWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2NhcmQnKVswXSBhcyBIVE1MRGl2RWxlbWVudDtcblxudHlwZSBTdGF0ZSA9IHtcbiAgaGludFZpc2libGU6IGJvb2xlYW4sXG4gIGRpY3Rpb25hcnlfZm9ybV9rYW5hOiBzdHJpbmcsXG4gIGNhbnZhc2VzOiBib29sZWFuW10sXG4gIGRpc3BsYXlGcm9udDogYm9vbGVhblxufTtcblxuY2xhc3MgVHJhbnNsYXRpb25KYXBhbmVzZUJhY2sgZXh0ZW5kcyBDb21wb25lbnQ8YW55LCBTdGF0ZT4ge1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5zdGF0ZSA9IHsgXG4gICAgICBoaW50VmlzaWJsZTogZmFsc2UsIFxuICAgICAgZGljdGlvbmFyeV9mb3JtX2thbmE6ICd7e2RpY3Rpb25hcnlfZm9ybV9rYW5hfX0nLFxuICAgICAgY2FudmFzZXM6IFtdLFxuICAgICAgZGlzcGxheUZyb250OiBwZXJzaXN0LmdldEl0ZW0oKSA9PT0gJ2Rpc3BsYXkgZnJvbnQnXG4gICAgfTtcbiAgICBwZXJzaXN0LnNldEl0ZW0oJ2Rpc3BsYXllZCBmcm9udCcpXG4gIH1cblxuICByZW5kZXIocHJvcHM6IGFueSwgc3RhdGU6IFN0YXRlKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIHN0YXRlLmRpc3BsYXlGcm9udCA/IFxuICAgICAgPHNwYW4+XG4gICAgICAgIDxUcmFuc2xhdGlvbkphcGFuZXNlRnJvbnQgLz4gXG4gICAgICAgIDxidXR0b24gb25DbGljaz17IHRoaXMuc2hvd0JhY2sgfT5TaG93IEJhY2s8L2J1dHRvbj5cbiAgICAgIDwvc3Bhbj5cbiAgICAgIDpcbiAgICAgIDxkaXY+XG4gICAgICAgIDxkaXY+eyd7e3RyYW5zbGF0aW9ufX0nfTwvZGl2PlxuICAgICAgICA8ZGl2Pnsne3tkaWN0aW9uYXJ5X2Zvcm19fSd9PC9kaXY+XG4gICAgICAgIHsgc3RhdGUuZGljdGlvbmFyeV9mb3JtX2thbmEgIT09ICcnICYmIDxkaXY+eyd7e2RpY3Rpb25hcnlfZm9ybV9rYW5hfX0nfTwvZGl2PiB9XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAge1xuICAgICAgICAgICAgc3RhdGUuY2FudmFzZXMubWFwKGRyYXdHdWlkZXMgPT4gXG4gICAgICAgICAgICAgIDxDYW52YXMgd29yZD1cInt7ZGljdGlvbmFyeV9mb3JtfX1cIiBndWlkZXM9e2RyYXdHdWlkZXN9IC8+XG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eyAoKSA9PiB0aGlzLmFkZENhbnZhc2VzKGZhbHNlKSB9PkVtcHR5IGJveGVzPC9idXR0b24+XG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsgKCkgPT4gdGhpcy5hZGRDYW52YXNlcyh0cnVlKSB9PkJveGVzIHdpdGggZ3VpZGVzPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+KTtcbiAgfVxuXG4gIGFkZENhbnZhc2VzID0gKGU6IGJvb2xlYW4pID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgY2FudmFzZXM6IHRoaXMuc3RhdGUuY2FudmFzZXMuY29uY2F0KGUpIH0pO1xuICB9XG5cbiAgc2hvd0JhY2sgPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGRpc3BsYXlGcm9udDogZmFsc2UgfSk7XG4gIH1cbn1cblxucmVuZGVyKDxUcmFuc2xhdGlvbkphcGFuZXNlQmFjayAvPiwgY2FyZCk7IiwiaW1wb3J0IHsgaCwgcmVuZGVyLCBDb21wb25lbnQgfSBmcm9tICdwcmVhY3QnO1xuaW1wb3J0IHBlcnNpc3QgZnJvbSAnLi9QZXJzaXN0JztcbmltcG9ydCBDYW52YXMgZnJvbSAnLi9DYW52YXMnO1xuXG5sZXQgY2FyZDogSFRNTERpdkVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdjYXJkJylbMF0gYXMgSFRNTERpdkVsZW1lbnQ7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRyYW5zbGF0aW9uSmFwYW5lc2VGcm9udCBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnN0YXRlID0geyBcbiAgICAgIGhpbnRWaXNpYmxlOiBmYWxzZSwgXG4gICAgICBkaWN0aW9uYXJ5X2Zvcm1fa2FuYTogJ3t7ZGljdGlvbmFyeV9mb3JtX2thbmF9fSdcbiAgICB9O1xuICAgIGlmIChwZXJzaXN0LmdldEl0ZW0oKSAhPT0gJ2Rpc3BsYXllZCBmcm9udCcpIHtcbiAgICAgIHBlcnNpc3Quc2V0SXRlbSgnZGlzcGxheSBmcm9udCcpO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlcihwcm9wczogYW55LCBzdGF0ZTogYW55KSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxkaXY+eyd7e3RyYW5zbGF0aW9ufX0nfTwvZGl2PlxuICAgICAgICA8Q2FudmFzIHdvcmQ9XCJ7e2RpY3Rpb25hcnlfZm9ybX19XCIgZ3VpZGVzPXtmYWxzZX0gLz5cbiAgICAgIDwvZGl2Pik7XG4gIH1cblxuICBzaG93SGludCA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgaGludFZpc2libGU6IHRydWUgfSk7XG4gIH1cbn1cblxucmVuZGVyKDxUcmFuc2xhdGlvbkphcGFuZXNlRnJvbnQgLz4sIGNhcmQpOyIsIi8vIGFua2ktcGVyc2lzdGVuY2Vcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9TaW1vbkxhbW1lci9hbmtpLXBlcnNpc3RlbmNlXG5cbmlmICh0eXBlb2Yod2luZG93LlBlcnNpc3RlbmNlKSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgdmFyIF9wZXJzaXN0ZW5jZUtleSA9ICdnaXRodWIuY29tL1NpbW9uTGFtbWVyL2Fua2ktcGVyc2lzdGVuY2UvJztcbiAgdmFyIF9kZWZhdWx0S2V5ID0gJ19kZWZhdWx0JztcbiAgd2luZG93LlBlcnNpc3RlbmNlX3Nlc3Npb25TdG9yYWdlID0gZnVuY3Rpb24oKSB7IC8vIHVzZWQgaW4gYW5kcm9pZCwgaU9TLCB3ZWJcbiAgICB2YXIgaXNBdmFpbGFibGUgPSBmYWxzZTtcbiAgICB0cnkge1xuICAgICAgaWYgKHR5cGVvZih3aW5kb3cuc2Vzc2lvblN0b3JhZ2UpID09PSAnb2JqZWN0Jykge1xuICAgICAgICBpc0F2YWlsYWJsZSA9IHRydWU7XG4gICAgICAgIHRoaXMuY2xlYXIgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNlc3Npb25TdG9yYWdlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgayA9IHNlc3Npb25TdG9yYWdlLmtleShpKTtcbiAgICAgICAgICAgIGlmIChrLmluZGV4T2YoX3BlcnNpc3RlbmNlS2V5KSA9PSAwKSB7XG4gICAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0oayk7XG4gICAgICAgICAgICAgIGktLTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9O1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLnNldEl0ZW0gPSBmdW5jdGlvbihrZXksIHZhbHVlKSB7XG4gICAgICAgICAgaWYgKHZhbHVlID09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdmFsdWUgPSBrZXk7XG4gICAgICAgICAgICBrZXkgPSBfZGVmYXVsdEtleTtcbiAgICAgICAgICB9XG4gICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShfcGVyc2lzdGVuY2VLZXkgKyBrZXksIEpTT04uc3RyaW5naWZ5KHZhbHVlKSk7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuZ2V0SXRlbSA9IGZ1bmN0aW9uKGtleSkge1xuICAgICAgICAgIGlmIChrZXkgPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBrZXkgPSBfZGVmYXVsdEtleTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIEpTT04ucGFyc2Uoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShfcGVyc2lzdGVuY2VLZXkgKyBrZXkpKTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5yZW1vdmVJdGVtID0gZnVuY3Rpb24oa2V5KSB7XG4gICAgICAgICAgaWYgKGtleSA9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGtleSA9IF9kZWZhdWx0S2V5O1xuICAgICAgICAgIH1cbiAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKF9wZXJzaXN0ZW5jZUtleSArIGtleSk7XG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfSBjYXRjaChlcnIpIHt9XG4gICAgdGhpcy5pc0F2YWlsYWJsZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIGlzQXZhaWxhYmxlO1xuICAgIH07XG4gIH07XG4gIHdpbmRvdy5QZXJzaXN0ZW5jZV93aW5kb3dLZXkgPSBmdW5jdGlvbihwZXJzaXN0ZW50S2V5KSB7IC8vIHVzZWQgaW4gd2luZG93cywgbGludXgsIG1hY1xuICAgIHZhciBvYmogPSB3aW5kb3dbcGVyc2lzdGVudEtleV07XG4gICAgdmFyIGlzQXZhaWxhYmxlID0gZmFsc2U7XG4gICAgaWYgKHR5cGVvZihvYmopID09PSAnb2JqZWN0Jykge1xuICAgICAgaXNBdmFpbGFibGUgPSB0cnVlO1xuICAgICAgdGhpcy5jbGVhciA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBvYmpbX3BlcnNpc3RlbmNlS2V5XSA9IHt9O1xuICAgICAgfTtcbiAgICAgIHRoaXMuc2V0SXRlbSA9IGZ1bmN0aW9uKGtleSwgdmFsdWUpIHtcbiAgICAgICAgaWYgKHZhbHVlID09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHZhbHVlID0ga2V5O1xuICAgICAgICAgIGtleSA9IF9kZWZhdWx0S2V5O1xuICAgICAgICB9XG4gICAgICAgIG9ialtfcGVyc2lzdGVuY2VLZXldW2tleV0gPSB2YWx1ZTtcbiAgICAgIH07XG4gICAgICB0aGlzLmdldEl0ZW0gPSBmdW5jdGlvbihrZXkpIHtcbiAgICAgICAgaWYgKGtleSA9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBrZXkgPSBfZGVmYXVsdEtleTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gb2JqW19wZXJzaXN0ZW5jZUtleV1ba2V5XSA9PSB1bmRlZmluZWQgPyBudWxsIDogb2JqW19wZXJzaXN0ZW5jZUtleV1ba2V5XTtcbiAgICAgIH07XG4gICAgICB0aGlzLnJlbW92ZUl0ZW0gPSBmdW5jdGlvbihrZXkpIHtcbiAgICAgICAgaWYgKGtleSA9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBrZXkgPSBfZGVmYXVsdEtleTtcbiAgICAgICAgfVxuICAgICAgICBkZWxldGUgb2JqW19wZXJzaXN0ZW5jZUtleV1ba2V5XTtcbiAgICAgIH07XG5cbiAgICAgIGlmIChvYmpbX3BlcnNpc3RlbmNlS2V5XSA9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhpcy5jbGVhcigpO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLmlzQXZhaWxhYmxlID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gaXNBdmFpbGFibGU7XG4gICAgfTtcbiAgfTtcbiAgLypcbiAgICogICBjbGllbnQgIHwgc2Vzc2lvblN0b3JhZ2UgfCBwZXJzaXN0ZW50S2V5IHwgdXNlZnVsIGxvY2F0aW9uIHxcbiAgICogLS0tLS0tLS0tLXwtLS0tLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tLS0tLS0tLXxcbiAgICogd2ViICAgICAgIHwgICAgICAgWUVTICAgICAgfCAgICAgICAtICAgICAgIHwgICAgICAgTk8gICAgICAgIHxcbiAgICogd2luZG93cyAgIHwgICAgICAgTk8gICAgICAgfCAgICAgICBweSAgICAgIHwgICAgICAgTk8gICAgICAgIHxcbiAgICogYW5kcm9pZCAgIHwgICAgICAgWUVTICAgICAgfCAgICAgICAtICAgICAgIHwgICAgICAgTk8gICAgICAgIHxcbiAgICogbGludXggMi4wIHwgICAgICAgTk8gICAgICAgfCAgICAgICBxdCAgICAgIHwgICAgICAgWUVTICAgICAgIHxcbiAgICogbGludXggMi4xIHwgICAgICAgTk8gICAgICAgfCAgICAgICBxdCAgICAgIHwgICAgICAgWUVTICAgICAgIHxcbiAgICogbWFjIDIuMCAgIHwgICAgICAgTk8gICAgICAgfCAgICAgICBweSAgICAgIHwgICAgICAgTk8gICAgICAgIHxcbiAgICogbWFjIDIuMSAgIHwgICAgICAgTk8gICAgICAgfCAgICAgICBxdCAgICAgIHwgICAgICAgWUVTICAgICAgIHxcbiAgICogaU9TICAgICAgIHwgICAgICAgWUVTICAgICAgfCAgICAgICAtICAgICAgIHwgICAgICAgTk8gICAgICAgIHxcbiAgICovXG4gIHdpbmRvdy5QZXJzaXN0ZW5jZSA9IG5ldyBQZXJzaXN0ZW5jZV9zZXNzaW9uU3RvcmFnZSgpOyAvLyBhbmRyb2lkLCBpT1MsIHdlYlxuICBpZiAoIVBlcnNpc3RlbmNlLmlzQXZhaWxhYmxlKCkpIHtcbiAgICB3aW5kb3cuUGVyc2lzdGVuY2UgPSBuZXcgUGVyc2lzdGVuY2Vfd2luZG93S2V5KFwicHlcIik7IC8vIHdpbmRvd3MsIG1hYyAoMi4wKVxuICB9XG4gIGlmICghUGVyc2lzdGVuY2UuaXNBdmFpbGFibGUoKSkge1xuICAgIHZhciB0aXRsZVN0YXJ0SW5kZXggPSB3aW5kb3cubG9jYXRpb24udG9TdHJpbmcoKS5pbmRleE9mKCd0aXRsZScpOyAvLyBpZiB0aXRsZVN0YXJ0SW5kZXggPiAwLCB3aW5kb3cubG9jYXRpb24gaXMgdXNlZnVsXG4gICAgdmFyIHRpdGxlQ29udGVudEluZGV4ID0gd2luZG93LmxvY2F0aW9uLnRvU3RyaW5nKCkuaW5kZXhPZignbWFpbicsIHRpdGxlU3RhcnRJbmRleCk7XG4gICAgaWYgKHRpdGxlU3RhcnRJbmRleCA+IDAgJiYgdGl0bGVDb250ZW50SW5kZXggPiAwICYmICh0aXRsZUNvbnRlbnRJbmRleCAtIHRpdGxlU3RhcnRJbmRleCkgPCAxMCkge1xuICAgICAgd2luZG93LlBlcnNpc3RlbmNlID0gbmV3IFBlcnNpc3RlbmNlX3dpbmRvd0tleShcInF0XCIpOyAvLyBsaW51eCwgbWFjICgyLjEpXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpbmRvdy5QZXJzaXN0ZW5jZTsiXSwic291cmNlUm9vdCI6IiJ9