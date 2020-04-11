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

/***/ "./src/TranslationJapaneseBack.tsx":
/*!*****************************************!*\
  !*** ./src/TranslationJapaneseBack.tsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const preact_1 = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
const Canvas_1 = __webpack_require__(/*! ./Canvas */ "./src/Canvas.tsx");
let card = document.getElementsByClassName('card')[0];
class TranslationJapaneseBack extends preact_1.Component {
    constructor() {
        super();
        this.addCanvases = (e) => {
            this.setState({ canvases: this.state.canvases.concat(e) });
        };
        this.state = {
            hintVisible: false,
            dictionary_form_kana: '{{dictionary_form_kana}}',
            canvases: []
        };
    }
    render(props, state) {
        return (preact_1.h("div", null,
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


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ByZWFjdC9kaXN0L3ByZWFjdC5tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NhbnZhcy50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL0NhbnZhc0ZyYW1lLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvVHJhbnNsYXRpb25KYXBhbmVzZUJhY2sudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUFzQixzRUFBc0UsZ0JBQWdCLHlCQUF5QixTQUFTLGNBQWMsbUJBQW1CLG9CQUFvQixrQkFBa0IsdUJBQXVCLDZDQUE2QyxvQ0FBb0MsbUJBQW1CLGlCQUFpQixzSUFBc0ksZ0NBQWdDLG9CQUFvQixPQUFPLG1HQUFtRyw2QkFBNkIsYUFBYSxTQUFTLGNBQWMsa0JBQWtCLGdCQUFnQiw0QkFBNEIsZ0JBQWdCLDBEQUEwRCxVQUFVLGVBQWUsb0RBQW9ELDBDQUEwQyxjQUFjLFFBQVEsZ0NBQWdDLDhCQUE4QixlQUFlLHdDQUF3Qyx1QkFBdUIsTUFBTSxhQUFhLGNBQWMsOEZBQThGLGFBQWEsa0JBQWtCLHlCQUF5QiwyQkFBMkIsRUFBRSxVQUFVLDRFQUE0RSxnRkFBZ0YsOEJBQThCLDJDQUEyQyxzRUFBc0UsWUFBWSxzRkFBc0YsYUFBYSxJQUFJLEtBQUssNENBQTRDLFlBQVksTUFBTSxPQUFPLDBIQUEwSCxNQUFNLHNEQUFzRCx3Q0FBd0MsdURBQXVELEtBQUssWUFBWSx1QkFBdUIscUJBQXFCLHdCQUF3QiwrQkFBK0IsbUVBQW1FLGFBQWEsNERBQTRELElBQUkscUJBQXFCLFFBQVEsSUFBSSwwQkFBMEIsYUFBYSxXQUFXLDBCQUEwQixrQkFBa0IsbUVBQW1FLHFDQUFxQyxXQUFXLGdCQUFnQix1SUFBdUksU0FBUyxzQkFBc0IsTUFBTSxzQ0FBc0MsbUdBQW1HLGtCQUFrQiwwRkFBMEYsc0JBQXNCLGNBQWMsMEZBQTBGLGdFQUFnRSxLQUFLLCtFQUErRSw0Q0FBNEMsc0pBQXNKLDJhQUEyYSxjQUFjLHFDQUFxQyw4QkFBOEIsaUNBQWlDLHNDQUFzQyxnQkFBZ0IsSUFBSSwyQkFBMkIseVBBQXlQLHNJQUFzSSw2TkFBNk4sS0FBSyxnTUFBZ00saUdBQWlHLGVBQWUsOEJBQThCLFFBQVEsZ0hBQWdILDRCQUE0QixFQUFFLDhNQUE4TSx5TEFBeUwsa0NBQWtDLG1CQUFtQixTQUFTLGFBQWEsYUFBYSxnQkFBZ0IscUNBQXFDLElBQUksb0NBQW9DLFVBQVUsRUFBRSxTQUFTLGdCQUFnQixFQUFFLDRCQUE0QixrQ0FBa0MsZ0RBQWdELFdBQVcsNEVBQTRFLGNBQWMsTUFBTSxZQUFZLG1EQUFtRCx1R0FBdUcsUUFBUSxTQUFTLDhFQUE4RSxlQUFlLHlJQUF5SSxpQkFBaUIsS0FBSyxzQkFBc0Isa0RBQWtELGtFQUFrRSxnUUFBZ1EsU0FBUyxrQkFBa0IsSUFBSSxzQ0FBc0MsU0FBUyxZQUFZLGtCQUFrQixVQUFVLHdLQUF3Syw4QkFBOEIseUJBQXlCLFNBQVMsV0FBVyxrQkFBa0IsbUJBQW1CLFdBQVcsc0JBQXNCLGNBQWMsa0JBQWtCLDZCQUE2QixrQkFBa0IsVUFBVSwwTEFBMEwsZ0JBQWdCLFNBQVMsZ0JBQWdCLGVBQWUsOEdBQThHLGNBQWMsUUFBUSxJQUFJLDJDQUEyQyxxQkFBcUIsc0JBQXNCLGFBQWEsbUVBQW1FLG9CQUFvQix3Q0FBd0Msc0NBQXNDLHVCQUF1QixFQUFFLHNCQUFzQixVQUFVLDZCQUE2QixrQ0FBa0MsdUNBQXVDLGVBQWUsa0NBQWtDLEdBQUcsa0JBQWtCLFlBQVksT0FBTyx5QkFBeUIsME1BQTBNLFNBQVMsSUFBSSxTQUFTLGVBQWUsdUNBQXVDLG9DQUFvQyxNQUFNLDhDQUE4QyxrSEFBa0gscUNBQXFDLG9EQUFvRCwwSEFBdVU7QUFDeGdTOzs7Ozs7Ozs7Ozs7Ozs7QUNEQSxrR0FBOEM7QUFDOUMsd0ZBQXdDO0FBT3hDLE1BQXFCLE1BQU8sU0FBUSxrQkFBZ0I7SUFFbEQsTUFBTSxDQUFDLEtBQVksRUFBRSxLQUFVO1FBQzdCLElBQUksTUFBTSxHQUF5QixFQUFFLENBQUM7UUFDdEMsS0FBSSxJQUFJLENBQUMsSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsRUFBRTtZQUNqQyxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQUMscUJBQVcsSUFBQyxTQUFTLEVBQUssQ0FBQyxFQUFHLE1BQU0sRUFBSyxLQUFLLENBQUMsTUFBTSxHQUFLLENBQUMsQ0FBQztTQUMxRTtRQUNELE9BQU8sb0JBQUssU0FBUyxFQUFDLFFBQVEsSUFBRyxNQUFNLENBQVEsQ0FBQztJQUNsRCxDQUFDO0NBQ0Y7QUFURCx5QkFTQzs7Ozs7Ozs7Ozs7Ozs7O0FDakJELGtHQUF5RDtBQUN6RCxrR0FBbUM7QUFZbkMsTUFBcUIsV0FBWSxTQUFRLGtCQUFnQjtJQVV2RDtRQUNFLEtBQUssRUFBRSxDQUFDO1FBVlIsWUFBTyxHQUFZLEtBQUssQ0FBQztRQUN6Qiw4Q0FBOEM7UUFDOUMsaUJBQVksR0FBWSxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUMsTUFBTSxFQUFFLENBQUMsRUFBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLE9BQU8sRUFBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUMsR0FBQyxDQUFDLENBQUM7UUFDOUUsMEJBQXFCLEdBQVcsQ0FBQyxDQUFDO1FBRWxDLFFBQUcsR0FBOEIsa0JBQVMsRUFBRSxDQUFDO1FBQzdDLGNBQVMsR0FBaUMsa0JBQVMsRUFBRSxDQUFDO1FBS3RELElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDL0MsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNqRCxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQy9DLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDL0MsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMzQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzdDLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDakQsSUFBSSxDQUFDLHNCQUFzQixHQUFHLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDckUsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN2RCxNQUFNLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1FBQy9ELE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQ3hELFVBQVUsQ0FBQyxJQUFJLENBQUMsc0JBQXNCLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBRUQsTUFBTSxDQUFDLEtBQVksRUFBRSxLQUFVO1FBQzdCLE9BQU8sQ0FDTCxvQkFBSyxLQUFLLEVBQUMsY0FBYyxFQUFDLEdBQUcsRUFBRyxJQUFJLENBQUMsR0FBRztZQUNwQyxLQUFLLENBQUMsTUFBTSxJQUFJLHdCQUFPLEtBQUssQ0FBQyxTQUFTLENBQVE7WUFDaEQsdUJBQVEsS0FBSyxFQUFDLEdBQUcsRUFBQyxNQUFNLEVBQUMsR0FBRyxFQUMxQixXQUFXLEVBQUcsSUFBSSxDQUFDLFdBQVcsRUFBRyxZQUFZLEVBQUcsSUFBSSxDQUFDLFlBQVksRUFDakUsV0FBVyxFQUFHLElBQUksQ0FBQyxXQUFXLEVBQUcsV0FBVyxFQUFHLElBQUksQ0FBQyxXQUFXLEVBQy9ELFNBQVMsRUFBRyxJQUFJLENBQUMsU0FBUyxFQUFHLFVBQVUsRUFBRyxJQUFJLENBQUMsVUFBVSxFQUN6RCxZQUFZLEVBQUcsSUFBSSxDQUFDLFlBQVksRUFBRyxHQUFHLEVBQUcsSUFBSSxDQUFDLFNBQVMsR0FBWSxDQUNqRSxDQUNQLENBQUM7SUFDSixDQUFDO0lBRUQ7NkNBQ3lDO0lBQ3pDLHNCQUFzQjtRQUNwQixPQUFPLENBQUMsR0FBRyxDQUFDLHdCQUF3QixDQUFDLENBQUM7UUFDdEMsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUM7UUFDbEUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQztRQUNwRSxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2hFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDLENBQUMseUJBQXlCO1FBQ3RFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLEdBQUcsSUFBSSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQztJQUN4RSxDQUFDO0lBRUQsZUFBZTtRQUNiLE9BQU8sQ0FBQyxHQUFHLENBQUMsd0JBQXdCLENBQUMsQ0FBQztRQUN0QyxJQUFJLENBQUMsVUFBVSxHQUFHO1lBQ2hCLENBQUMsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxVQUFVO1lBQzlCLENBQUMsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxTQUFTO1NBQzlCO0lBQ0gsQ0FBQztJQUVELGFBQWEsQ0FBQyxRQUFlO1FBQzNCLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDMUIsSUFBSSxJQUFJLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxxQkFBcUIsR0FBRyxDQUFDLEVBQUU7WUFDbEQsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsRUFBRSxDQUFDO1lBQ2xDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNySCxLQUFLLElBQUksQ0FBQyxHQUFDLENBQUMsRUFBRSxDQUFDLEdBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQzdDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUN0SDtZQUNELElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUMvQixJQUFJLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxFQUFFLENBQUM7U0FDbkM7SUFDSCxDQUFDO0lBRUQsV0FBVyxDQUFDLENBQWE7UUFDdkIsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ25CLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxxQkFBcUIsR0FBRyxDQUFDLENBQUM7UUFDL0IsSUFBSSxDQUFDLGFBQWEsQ0FBQztZQUNqQixDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUs7WUFDVixDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUs7U0FDWCxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsWUFBWSxDQUFDLENBQWE7UUFDeEIsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ25CLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxxQkFBcUIsR0FBRyxDQUFDLENBQUM7UUFDL0IsSUFBSSxDQUFDLGFBQWEsQ0FBQztZQUNqQixDQUFDLEVBQUUsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLO1lBQzVCLENBQUMsRUFBRSxDQUFDLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUs7U0FDN0IsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELFdBQVcsQ0FBQyxDQUFhO1FBQ3ZCLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUNuQixJQUFJLENBQUMscUJBQXFCLEVBQUUsQ0FBQztRQUM3QixJQUFJLENBQUMsYUFBYSxDQUFDO1lBQ2pCLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSztZQUNWLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSztTQUNYLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxXQUFXLENBQUMsQ0FBYTtRQUN2QixDQUFDLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLHFCQUFxQixFQUFFLENBQUM7UUFDN0IsSUFBSSxDQUFDLGFBQWEsQ0FBQztZQUNqQixDQUFDLEVBQUUsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLO1lBQzVCLENBQUMsRUFBRSxDQUFDLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUs7U0FDN0IsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELFNBQVMsQ0FBQyxDQUFhO1FBQ3JCLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUNuQixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztRQUNyQixJQUFJLENBQUMsYUFBYSxDQUFDO1lBQ2pCLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSztZQUNWLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSztTQUNYLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxVQUFVLENBQUMsQ0FBYTtRQUN0QixDQUFDLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFDckIsSUFBSSxDQUFDLGFBQWEsQ0FBQztZQUNqQixDQUFDLEVBQUUsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLO1lBQzVCLENBQUMsRUFBRSxDQUFDLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUs7U0FDN0IsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELFlBQVksQ0FBQyxDQUFhO1FBQ3hCLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUNuQixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztRQUNyQixJQUFJLENBQUMsYUFBYSxDQUFDO1lBQ2pCLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSztZQUNWLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSztTQUNYLENBQUMsQ0FBQztJQUNMLENBQUM7Q0FDRjtBQXpJRCw4QkF5SUM7Ozs7Ozs7Ozs7Ozs7OztBQ3RKRCxrR0FBb0U7QUFDcEUseUVBQThCO0FBRTlCLElBQUksSUFBSSxHQUFtQixRQUFRLENBQUMsc0JBQXNCLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFtQixDQUFDO0FBUXhGLE1BQU0sdUJBQXdCLFNBQVEsa0JBQXFCO0lBRXpEO1FBQ0UsS0FBSyxFQUFFLENBQUM7UUE0QlYsZ0JBQVcsR0FBRyxDQUFDLENBQVUsRUFBRSxFQUFFO1lBQzNCLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUM3RCxDQUFDO1FBN0JDLElBQUksQ0FBQyxLQUFLLEdBQUc7WUFDWCxXQUFXLEVBQUUsS0FBSztZQUNsQixvQkFBb0IsRUFBRSwwQkFBMEI7WUFDaEQsUUFBUSxFQUFFLEVBQUU7U0FDYixDQUFDO0lBQ0osQ0FBQztJQUVELE1BQU0sQ0FBQyxLQUFVLEVBQUUsS0FBWTtRQUM3QixPQUFPLENBQ0w7WUFDRSx3QkFBTSxpQkFBaUIsQ0FBTztZQUM5Qix3QkFBTSxxQkFBcUIsQ0FBTztZQUNoQyxLQUFLLENBQUMsb0JBQW9CLEtBQUssRUFBRSxJQUFJLHdCQUFNLDBCQUEwQixDQUFPO1lBQzlFLHdCQUVJLEtBQUssQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQzlCLFdBQUMsZ0JBQU0sSUFBQyxJQUFJLEVBQUMscUJBQXFCLEVBQUMsTUFBTSxFQUFFLFVBQVUsR0FBSSxDQUMxRCxDQUVDO1lBQ047Z0JBQ0UsdUJBQVEsT0FBTyxFQUFHLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLGtCQUF1QjtnQkFDdEUsdUJBQVEsT0FBTyxFQUFHLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLHdCQUE2QixDQUN2RSxDQUNGLENBQUMsQ0FBQztJQUNaLENBQUM7Q0FLRjtBQUVELGVBQU0sQ0FBQyxXQUFDLHVCQUF1QixPQUFHLEVBQUUsSUFBSSxDQUFDLENBQUMiLCJmaWxlIjoiVHJhbnNsYXRpb25KYXBhbmVzZUJhY2suanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9UcmFuc2xhdGlvbkphcGFuZXNlQmFjay50c3hcIik7XG4iLCJ2YXIgbixsLHUsaSx0LG8scixmPXt9LGU9W10sYz0vYWNpdHxleCg/OnN8Z3xufHB8JCl8cnBofGdyaWR8b3dzfG1uY3xudHd8aW5lW2NoXXx6b298Xm9yZC9pO2Z1bmN0aW9uIHMobixsKXtmb3IodmFyIHUgaW4gbCluW3VdPWxbdV07cmV0dXJuIG59ZnVuY3Rpb24gYShuKXt2YXIgbD1uLnBhcmVudE5vZGU7bCYmbC5yZW1vdmVDaGlsZChuKX1mdW5jdGlvbiB2KG4sbCx1KXt2YXIgaSx0PWFyZ3VtZW50cyxvPXt9O2ZvcihpIGluIGwpXCJrZXlcIiE9PWkmJlwicmVmXCIhPT1pJiYob1tpXT1sW2ldKTtpZihhcmd1bWVudHMubGVuZ3RoPjMpZm9yKHU9W3VdLGk9MztpPGFyZ3VtZW50cy5sZW5ndGg7aSsrKXUucHVzaCh0W2ldKTtpZihudWxsIT11JiYoby5jaGlsZHJlbj11KSxcImZ1bmN0aW9uXCI9PXR5cGVvZiBuJiZudWxsIT1uLmRlZmF1bHRQcm9wcylmb3IoaSBpbiBuLmRlZmF1bHRQcm9wcyl2b2lkIDA9PT1vW2ldJiYob1tpXT1uLmRlZmF1bHRQcm9wc1tpXSk7cmV0dXJuIGgobixvLGwmJmwua2V5LGwmJmwucmVmKX1mdW5jdGlvbiBoKGwsdSxpLHQpe3ZhciBvPXt0eXBlOmwscHJvcHM6dSxrZXk6aSxyZWY6dCxfX2s6bnVsbCxfXzpudWxsLF9fYjowLF9fZTpudWxsLF9fZDp2b2lkIDAsX19jOm51bGwsY29uc3RydWN0b3I6dm9pZCAwfTtyZXR1cm4gbi52bm9kZSYmbi52bm9kZShvKSxvfWZ1bmN0aW9uIHAoKXtyZXR1cm57fX1mdW5jdGlvbiBkKG4pe3JldHVybiBuLmNoaWxkcmVufWZ1bmN0aW9uIHkobixsKXt0aGlzLnByb3BzPW4sdGhpcy5jb250ZXh0PWx9ZnVuY3Rpb24gbShuLGwpe2lmKG51bGw9PWwpcmV0dXJuIG4uX18/bShuLl9fLG4uX18uX19rLmluZGV4T2YobikrMSk6bnVsbDtmb3IodmFyIHU7bDxuLl9fay5sZW5ndGg7bCsrKWlmKG51bGwhPSh1PW4uX19rW2xdKSYmbnVsbCE9dS5fX2UpcmV0dXJuIHUuX19lO3JldHVyblwiZnVuY3Rpb25cIj09dHlwZW9mIG4udHlwZT9tKG4pOm51bGx9ZnVuY3Rpb24gdyhuKXt2YXIgbCx1O2lmKG51bGwhPShuPW4uX18pJiZudWxsIT1uLl9fYyl7Zm9yKG4uX19lPW4uX19jLmJhc2U9bnVsbCxsPTA7bDxuLl9fay5sZW5ndGg7bCsrKWlmKG51bGwhPSh1PW4uX19rW2xdKSYmbnVsbCE9dS5fX2Upe24uX19lPW4uX19jLmJhc2U9dS5fX2U7YnJlYWt9cmV0dXJuIHcobil9fWZ1bmN0aW9uIGcobCl7KCFsLl9fZCYmKGwuX19kPSEwKSYmMT09PXUucHVzaChsKXx8dCE9PW4uZGVib3VuY2VSZW5kZXJpbmcpJiYoKHQ9bi5kZWJvdW5jZVJlbmRlcmluZyl8fGkpKGspfWZ1bmN0aW9uIGsoKXt2YXIgbixsLGksdCxvLHIsZjtmb3IodS5zb3J0KGZ1bmN0aW9uKG4sbCl7cmV0dXJuIGwuX192Ll9fYi1uLl9fdi5fX2J9KTtuPXUucG9wKCk7KW4uX19kJiYoaT12b2lkIDAsdD12b2lkIDAscj0obz0obD1uKS5fX3YpLl9fZSwoZj1sLl9fUCkmJihpPVtdLHQ9eihmLG8scyh7fSxvKSxsLl9fbix2b2lkIDAhPT1mLm93bmVyU1ZHRWxlbWVudCxudWxsLGksbnVsbD09cj9tKG8pOnIpLFQoaSxvKSx0IT1yJiZ3KG8pKSl9ZnVuY3Rpb24gXyhuLGwsdSxpLHQsbyxyLGMscyl7dmFyIHYsaCxwLGQseSx3LGcsaz11JiZ1Ll9fa3x8ZSxfPWsubGVuZ3RoO2lmKGM9PWYmJihjPW51bGwhPW8/b1swXTpfP20odSwwKTpudWxsKSx2PTAsbC5fX2s9YihsLl9fayxmdW5jdGlvbih1KXtpZihudWxsIT11KXtpZih1Ll9fPWwsdS5fX2I9bC5fX2IrMSxudWxsPT09KHA9a1t2XSl8fHAmJnUua2V5PT1wLmtleSYmdS50eXBlPT09cC50eXBlKWtbdl09dm9pZCAwO2Vsc2UgZm9yKGg9MDtoPF87aCsrKXtpZigocD1rW2hdKSYmdS5rZXk9PXAua2V5JiZ1LnR5cGU9PT1wLnR5cGUpe2tbaF09dm9pZCAwO2JyZWFrfXA9bnVsbH1pZihkPXoobix1LHA9cHx8ZixpLHQsbyxyLGMscyksKGg9dS5yZWYpJiZwLnJlZiE9aCYmKGd8fChnPVtdKSxwLnJlZiYmZy5wdXNoKHAucmVmLG51bGwsdSksZy5wdXNoKGgsdS5fX2N8fGQsdSkpLG51bGwhPWQpe3ZhciBlO2lmKG51bGw9PXcmJih3PWQpLHZvaWQgMCE9PXUuX19kKWU9dS5fX2QsdS5fX2Q9dm9pZCAwO2Vsc2UgaWYobz09cHx8ZCE9Y3x8bnVsbD09ZC5wYXJlbnROb2RlKXtuOmlmKG51bGw9PWN8fGMucGFyZW50Tm9kZSE9PW4pbi5hcHBlbmRDaGlsZChkKSxlPW51bGw7ZWxzZXtmb3IoeT1jLGg9MDsoeT15Lm5leHRTaWJsaW5nKSYmaDxfO2grPTIpaWYoeT09ZClicmVhayBuO24uaW5zZXJ0QmVmb3JlKGQsYyksZT1jfVwib3B0aW9uXCI9PWwudHlwZSYmKG4udmFsdWU9XCJcIil9Yz12b2lkIDAhPT1lP2U6ZC5uZXh0U2libGluZyxcImZ1bmN0aW9uXCI9PXR5cGVvZiBsLnR5cGUmJihsLl9fZD1jKX19cmV0dXJuIHYrKyx1fSksbC5fX2U9dyxudWxsIT1vJiZcImZ1bmN0aW9uXCIhPXR5cGVvZiBsLnR5cGUpZm9yKHY9by5sZW5ndGg7di0tOyludWxsIT1vW3ZdJiZhKG9bdl0pO2Zvcih2PV87di0tOyludWxsIT1rW3ZdJiZBKGtbdl0sa1t2XSk7aWYoZylmb3Iodj0wO3Y8Zy5sZW5ndGg7disrKWooZ1t2XSxnWysrdl0sZ1srK3ZdKX1mdW5jdGlvbiBiKG4sbCx1KXtpZihudWxsPT11JiYodT1bXSksbnVsbD09bnx8XCJib29sZWFuXCI9PXR5cGVvZiBuKWwmJnUucHVzaChsKG51bGwpKTtlbHNlIGlmKEFycmF5LmlzQXJyYXkobikpZm9yKHZhciBpPTA7aTxuLmxlbmd0aDtpKyspYihuW2ldLGwsdSk7ZWxzZSB1LnB1c2gobD9sKFwic3RyaW5nXCI9PXR5cGVvZiBufHxcIm51bWJlclwiPT10eXBlb2Ygbj9oKG51bGwsbixudWxsLG51bGwpOm51bGwhPW4uX19lfHxudWxsIT1uLl9fYz9oKG4udHlwZSxuLnByb3BzLG4ua2V5LG51bGwpOm4pOm4pO3JldHVybiB1fWZ1bmN0aW9uIHgobixsLHUsaSx0KXt2YXIgbztmb3IobyBpbiB1KW8gaW4gbHx8QyhuLG8sbnVsbCx1W29dLGkpO2ZvcihvIGluIGwpdCYmXCJmdW5jdGlvblwiIT10eXBlb2YgbFtvXXx8XCJ2YWx1ZVwiPT09b3x8XCJjaGVja2VkXCI9PT1vfHx1W29dPT09bFtvXXx8QyhuLG8sbFtvXSx1W29dLGkpfWZ1bmN0aW9uIFAobixsLHUpe1wiLVwiPT09bFswXT9uLnNldFByb3BlcnR5KGwsdSk6bltsXT1cIm51bWJlclwiPT10eXBlb2YgdSYmITE9PT1jLnRlc3QobCk/dStcInB4XCI6bnVsbD09dT9cIlwiOnV9ZnVuY3Rpb24gQyhuLGwsdSxpLHQpe3ZhciBvLHIsZixlLGM7aWYodD9cImNsYXNzTmFtZVwiPT09bCYmKGw9XCJjbGFzc1wiKTpcImNsYXNzXCI9PT1sJiYobD1cImNsYXNzTmFtZVwiKSxcImtleVwiPT09bHx8XCJjaGlsZHJlblwiPT09bCk7ZWxzZSBpZihcInN0eWxlXCI9PT1sKWlmKG89bi5zdHlsZSxcInN0cmluZ1wiPT10eXBlb2YgdSlvLmNzc1RleHQ9dTtlbHNle2lmKFwic3RyaW5nXCI9PXR5cGVvZiBpJiYoby5jc3NUZXh0PVwiXCIsaT1udWxsKSxpKWZvcihyIGluIGkpdSYmciBpbiB1fHxQKG8scixcIlwiKTtpZih1KWZvcihmIGluIHUpaSYmdVtmXT09PWlbZl18fFAobyxmLHVbZl0pfWVsc2VcIm9cIj09PWxbMF0mJlwiblwiPT09bFsxXT8oZT1sIT09KGw9bC5yZXBsYWNlKC9DYXB0dXJlJC8sXCJcIikpLGM9bC50b0xvd2VyQ2FzZSgpLGw9KGMgaW4gbj9jOmwpLnNsaWNlKDIpLHU/KGl8fG4uYWRkRXZlbnRMaXN0ZW5lcihsLE4sZSksKG4ubHx8KG4ubD17fSkpW2xdPXUpOm4ucmVtb3ZlRXZlbnRMaXN0ZW5lcihsLE4sZSkpOlwibGlzdFwiIT09bCYmXCJ0YWdOYW1lXCIhPT1sJiZcImZvcm1cIiE9PWwmJlwidHlwZVwiIT09bCYmXCJzaXplXCIhPT1sJiYhdCYmbCBpbiBuP25bbF09bnVsbD09dT9cIlwiOnU6XCJmdW5jdGlvblwiIT10eXBlb2YgdSYmXCJkYW5nZXJvdXNseVNldElubmVySFRNTFwiIT09bCYmKGwhPT0obD1sLnJlcGxhY2UoL154bGluazo/LyxcIlwiKSk/bnVsbD09dXx8ITE9PT11P24ucmVtb3ZlQXR0cmlidXRlTlMoXCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCIsbC50b0xvd2VyQ2FzZSgpKTpuLnNldEF0dHJpYnV0ZU5TKFwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiLGwudG9Mb3dlckNhc2UoKSx1KTpudWxsPT11fHwhMT09PXU/bi5yZW1vdmVBdHRyaWJ1dGUobCk6bi5zZXRBdHRyaWJ1dGUobCx1KSl9ZnVuY3Rpb24gTihsKXt0aGlzLmxbbC50eXBlXShuLmV2ZW50P24uZXZlbnQobCk6bCl9ZnVuY3Rpb24geihsLHUsaSx0LG8scixmLGUsYyl7dmFyIGEsdixoLHAsbSx3LGcsayxiLHgsUD11LnR5cGU7aWYodm9pZCAwIT09dS5jb25zdHJ1Y3RvcilyZXR1cm4gbnVsbDsoYT1uLl9fYikmJmEodSk7dHJ5e246aWYoXCJmdW5jdGlvblwiPT10eXBlb2YgUCl7aWYoaz11LnByb3BzLGI9KGE9UC5jb250ZXh0VHlwZSkmJnRbYS5fX2NdLHg9YT9iP2IucHJvcHMudmFsdWU6YS5fXzp0LGkuX19jP2c9KHY9dS5fX2M9aS5fX2MpLl9fPXYuX19FOihcInByb3RvdHlwZVwiaW4gUCYmUC5wcm90b3R5cGUucmVuZGVyP3UuX19jPXY9bmV3IFAoayx4KToodS5fX2M9dj1uZXcgeShrLHgpLHYuY29uc3RydWN0b3I9UCx2LnJlbmRlcj1EKSxiJiZiLnN1Yih2KSx2LnByb3BzPWssdi5zdGF0ZXx8KHYuc3RhdGU9e30pLHYuY29udGV4dD14LHYuX19uPXQsaD12Ll9fZD0hMCx2Ll9faD1bXSksbnVsbD09di5fX3MmJih2Ll9fcz12LnN0YXRlKSxudWxsIT1QLmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyYmKHYuX19zPT12LnN0YXRlJiYodi5fX3M9cyh7fSx2Ll9fcykpLHModi5fX3MsUC5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMoayx2Ll9fcykpKSxwPXYucHJvcHMsbT12LnN0YXRlLGgpbnVsbD09UC5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMmJm51bGwhPXYuY29tcG9uZW50V2lsbE1vdW50JiZ2LmNvbXBvbmVudFdpbGxNb3VudCgpLG51bGwhPXYuY29tcG9uZW50RGlkTW91bnQmJnYuX19oLnB1c2godi5jb21wb25lbnREaWRNb3VudCk7ZWxzZXtpZihudWxsPT1QLmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyYmayE9PXAmJm51bGwhPXYuY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyYmdi5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKGsseCksIXYuX19lJiZudWxsIT12LnNob3VsZENvbXBvbmVudFVwZGF0ZSYmITE9PT12LnNob3VsZENvbXBvbmVudFVwZGF0ZShrLHYuX19zLHgpKXtmb3Iodi5wcm9wcz1rLHYuc3RhdGU9di5fX3Msdi5fX2Q9ITEsdi5fX3Y9dSx1Ll9fZT1pLl9fZSx1Ll9faz1pLl9fayx2Ll9faC5sZW5ndGgmJmYucHVzaCh2KSxhPTA7YTx1Ll9fay5sZW5ndGg7YSsrKXUuX19rW2FdJiYodS5fX2tbYV0uX189dSk7YnJlYWsgbn1udWxsIT12LmNvbXBvbmVudFdpbGxVcGRhdGUmJnYuY29tcG9uZW50V2lsbFVwZGF0ZShrLHYuX19zLHgpLG51bGwhPXYuY29tcG9uZW50RGlkVXBkYXRlJiZ2Ll9faC5wdXNoKGZ1bmN0aW9uKCl7di5jb21wb25lbnREaWRVcGRhdGUocCxtLHcpfSl9di5jb250ZXh0PXgsdi5wcm9wcz1rLHYuc3RhdGU9di5fX3MsKGE9bi5fX3IpJiZhKHUpLHYuX19kPSExLHYuX192PXUsdi5fX1A9bCxhPXYucmVuZGVyKHYucHJvcHMsdi5zdGF0ZSx2LmNvbnRleHQpLHUuX19rPW51bGwhPWEmJmEudHlwZT09ZCYmbnVsbD09YS5rZXk/YS5wcm9wcy5jaGlsZHJlbjphLG51bGwhPXYuZ2V0Q2hpbGRDb250ZXh0JiYodD1zKHMoe30sdCksdi5nZXRDaGlsZENvbnRleHQoKSkpLGh8fG51bGw9PXYuZ2V0U25hcHNob3RCZWZvcmVVcGRhdGV8fCh3PXYuZ2V0U25hcHNob3RCZWZvcmVVcGRhdGUocCxtKSksXyhsLHUsaSx0LG8scixmLGUsYyksdi5iYXNlPXUuX19lLHYuX19oLmxlbmd0aCYmZi5wdXNoKHYpLGcmJih2Ll9fRT12Ll9fPW51bGwpLHYuX19lPSExfWVsc2UgdS5fX2U9JChpLl9fZSx1LGksdCxvLHIsZixjKTsoYT1uLmRpZmZlZCkmJmEodSl9Y2F0Y2gobCl7bi5fX2UobCx1LGkpfXJldHVybiB1Ll9fZX1mdW5jdGlvbiBUKGwsdSl7bi5fX2MmJm4uX19jKHUsbCksbC5zb21lKGZ1bmN0aW9uKHUpe3RyeXtsPXUuX19oLHUuX19oPVtdLGwuc29tZShmdW5jdGlvbihuKXtuLmNhbGwodSl9KX1jYXRjaChsKXtuLl9fZShsLHUuX192KX19KX1mdW5jdGlvbiAkKG4sbCx1LGksdCxvLHIsYyl7dmFyIHMsYSx2LGgscCxkPXUucHJvcHMseT1sLnByb3BzO2lmKHQ9XCJzdmdcIj09PWwudHlwZXx8dCxudWxsPT1uJiZudWxsIT1vKWZvcihzPTA7czxvLmxlbmd0aDtzKyspaWYobnVsbCE9KGE9b1tzXSkmJihudWxsPT09bC50eXBlPzM9PT1hLm5vZGVUeXBlOmEubG9jYWxOYW1lPT09bC50eXBlKSl7bj1hLG9bc109bnVsbDticmVha31pZihudWxsPT1uKXtpZihudWxsPT09bC50eXBlKXJldHVybiBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh5KTtuPXQ/ZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIixsLnR5cGUpOmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQobC50eXBlLHkuaXMmJntpczp5LmlzfSksbz1udWxsfWlmKG51bGw9PT1sLnR5cGUpbnVsbCE9byYmKG9bby5pbmRleE9mKG4pXT1udWxsKSxkIT09eSYmbi5kYXRhIT15JiYobi5kYXRhPXkpO2Vsc2UgaWYobCE9PXUpe2lmKG51bGwhPW8mJihvW28uaW5kZXhPZihuKV09bnVsbCxvPWUuc2xpY2UuY2FsbChuLmNoaWxkTm9kZXMpKSx2PShkPXUucHJvcHN8fGYpLmRhbmdlcm91c2x5U2V0SW5uZXJIVE1MLGg9eS5kYW5nZXJvdXNseVNldElubmVySFRNTCwhYyl7aWYoZD09PWYpZm9yKGQ9e30scD0wO3A8bi5hdHRyaWJ1dGVzLmxlbmd0aDtwKyspZFtuLmF0dHJpYnV0ZXNbcF0ubmFtZV09bi5hdHRyaWJ1dGVzW3BdLnZhbHVlOyhofHx2KSYmKGgmJnYmJmguX19odG1sPT12Ll9faHRtbHx8KG4uaW5uZXJIVE1MPWgmJmguX19odG1sfHxcIlwiKSl9eChuLHksZCx0LGMpLGwuX19rPWwucHJvcHMuY2hpbGRyZW4saHx8XyhuLGwsdSxpLFwiZm9yZWlnbk9iamVjdFwiIT09bC50eXBlJiZ0LG8scixmLGMpLGN8fChcInZhbHVlXCJpbiB5JiZ2b2lkIDAhPT15LnZhbHVlJiZ5LnZhbHVlIT09bi52YWx1ZSYmKG4udmFsdWU9bnVsbD09eS52YWx1ZT9cIlwiOnkudmFsdWUpLFwiY2hlY2tlZFwiaW4geSYmdm9pZCAwIT09eS5jaGVja2VkJiZ5LmNoZWNrZWQhPT1uLmNoZWNrZWQmJihuLmNoZWNrZWQ9eS5jaGVja2VkKSl9cmV0dXJuIG59ZnVuY3Rpb24gaihsLHUsaSl7dHJ5e1wiZnVuY3Rpb25cIj09dHlwZW9mIGw/bCh1KTpsLmN1cnJlbnQ9dX1jYXRjaChsKXtuLl9fZShsLGkpfX1mdW5jdGlvbiBBKGwsdSxpKXt2YXIgdCxvLHI7aWYobi51bm1vdW50JiZuLnVubW91bnQobCksKHQ9bC5yZWYpJiYodC5jdXJyZW50JiZ0LmN1cnJlbnQhPT1sLl9fZXx8aih0LG51bGwsdSkpLGl8fFwiZnVuY3Rpb25cIj09dHlwZW9mIGwudHlwZXx8KGk9bnVsbCE9KG89bC5fX2UpKSxsLl9fZT1sLl9fZD12b2lkIDAsbnVsbCE9KHQ9bC5fX2MpKXtpZih0LmNvbXBvbmVudFdpbGxVbm1vdW50KXRyeXt0LmNvbXBvbmVudFdpbGxVbm1vdW50KCl9Y2F0Y2gobCl7bi5fX2UobCx1KX10LmJhc2U9dC5fX1A9bnVsbH1pZih0PWwuX19rKWZvcihyPTA7cjx0Lmxlbmd0aDtyKyspdFtyXSYmQSh0W3JdLHUsaSk7bnVsbCE9byYmYShvKX1mdW5jdGlvbiBEKG4sbCx1KXtyZXR1cm4gdGhpcy5jb25zdHJ1Y3RvcihuLHUpfWZ1bmN0aW9uIEUobCx1LGkpe3ZhciB0LHIsYztuLl9fJiZuLl9fKGwsdSkscj0odD1pPT09byk/bnVsbDppJiZpLl9fa3x8dS5fX2ssbD12KGQsbnVsbCxbbF0pLGM9W10seih1LCh0P3U6aXx8dSkuX19rPWwscnx8ZixmLHZvaWQgMCE9PXUub3duZXJTVkdFbGVtZW50LGkmJiF0P1tpXTpyP251bGw6ZS5zbGljZS5jYWxsKHUuY2hpbGROb2RlcyksYyxpfHxmLHQpLFQoYyxsKX1mdW5jdGlvbiBIKG4sbCl7RShuLGwsbyl9ZnVuY3Rpb24gSShuLGwpe3JldHVybiBsPXMocyh7fSxuLnByb3BzKSxsKSxhcmd1bWVudHMubGVuZ3RoPjImJihsLmNoaWxkcmVuPWUuc2xpY2UuY2FsbChhcmd1bWVudHMsMikpLGgobi50eXBlLGwsbC5rZXl8fG4ua2V5LGwucmVmfHxuLnJlZil9ZnVuY3Rpb24gTChuKXt2YXIgbD17fSx1PXtfX2M6XCJfX2NDXCIrcisrLF9fOm4sQ29uc3VtZXI6ZnVuY3Rpb24obixsKXtyZXR1cm4gbi5jaGlsZHJlbihsKX0sUHJvdmlkZXI6ZnVuY3Rpb24obil7dmFyIGksdD10aGlzO3JldHVybiB0aGlzLmdldENoaWxkQ29udGV4dHx8KGk9W10sdGhpcy5nZXRDaGlsZENvbnRleHQ9ZnVuY3Rpb24oKXtyZXR1cm4gbFt1Ll9fY109dCxsfSx0aGlzLnNob3VsZENvbXBvbmVudFVwZGF0ZT1mdW5jdGlvbihsKXtuLnZhbHVlIT09bC52YWx1ZSYmaS5zb21lKGZ1bmN0aW9uKG4pe24uY29udGV4dD1sLnZhbHVlLGcobil9KX0sdGhpcy5zdWI9ZnVuY3Rpb24obil7aS5wdXNoKG4pO3ZhciBsPW4uY29tcG9uZW50V2lsbFVubW91bnQ7bi5jb21wb25lbnRXaWxsVW5tb3VudD1mdW5jdGlvbigpe2kuc3BsaWNlKGkuaW5kZXhPZihuKSwxKSxsJiZsLmNhbGwobil9fSksbi5jaGlsZHJlbn19O3JldHVybiB1LkNvbnN1bWVyLmNvbnRleHRUeXBlPXUsdX1uPXtfX2U6ZnVuY3Rpb24obixsKXtmb3IodmFyIHUsaTtsPWwuX187KWlmKCh1PWwuX19jKSYmIXUuX18pdHJ5e2lmKHUuY29uc3RydWN0b3ImJm51bGwhPXUuY29uc3RydWN0b3IuZ2V0RGVyaXZlZFN0YXRlRnJvbUVycm9yJiYoaT0hMCx1LnNldFN0YXRlKHUuY29uc3RydWN0b3IuZ2V0RGVyaXZlZFN0YXRlRnJvbUVycm9yKG4pKSksbnVsbCE9dS5jb21wb25lbnREaWRDYXRjaCYmKGk9ITAsdS5jb21wb25lbnREaWRDYXRjaChuKSksaSlyZXR1cm4gZyh1Ll9fRT11KX1jYXRjaChsKXtuPWx9dGhyb3cgbn19LGw9ZnVuY3Rpb24obil7cmV0dXJuIG51bGwhPW4mJnZvaWQgMD09PW4uY29uc3RydWN0b3J9LHkucHJvdG90eXBlLnNldFN0YXRlPWZ1bmN0aW9uKG4sbCl7dmFyIHU7dT10aGlzLl9fcyE9PXRoaXMuc3RhdGU/dGhpcy5fX3M6dGhpcy5fX3M9cyh7fSx0aGlzLnN0YXRlKSxcImZ1bmN0aW9uXCI9PXR5cGVvZiBuJiYobj1uKHUsdGhpcy5wcm9wcykpLG4mJnModSxuKSxudWxsIT1uJiZ0aGlzLl9fdiYmKGwmJnRoaXMuX19oLnB1c2gobCksZyh0aGlzKSl9LHkucHJvdG90eXBlLmZvcmNlVXBkYXRlPWZ1bmN0aW9uKG4pe3RoaXMuX192JiYodGhpcy5fX2U9ITAsbiYmdGhpcy5fX2gucHVzaChuKSxnKHRoaXMpKX0seS5wcm90b3R5cGUucmVuZGVyPWQsdT1bXSxpPVwiZnVuY3Rpb25cIj09dHlwZW9mIFByb21pc2U/UHJvbWlzZS5wcm90b3R5cGUudGhlbi5iaW5kKFByb21pc2UucmVzb2x2ZSgpKTpzZXRUaW1lb3V0LG89ZixyPTA7ZXhwb3J0e0UgYXMgcmVuZGVyLEggYXMgaHlkcmF0ZSx2IGFzIGNyZWF0ZUVsZW1lbnQsdiBhcyBoLGQgYXMgRnJhZ21lbnQscCBhcyBjcmVhdGVSZWYsbCBhcyBpc1ZhbGlkRWxlbWVudCx5IGFzIENvbXBvbmVudCxJIGFzIGNsb25lRWxlbWVudCxMIGFzIGNyZWF0ZUNvbnRleHQsYiBhcyB0b0NoaWxkQXJyYXksQSBhcyBfdW5tb3VudCxuIGFzIG9wdGlvbnN9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cHJlYWN0Lm1vZHVsZS5qcy5tYXBcbiIsImltcG9ydCB7IGgsIHJlbmRlciwgQ29tcG9uZW50IH0gZnJvbSAncHJlYWN0JztcbmltcG9ydCBDYW52YXNGcmFtZSBmcm9tICcuL0NhbnZhc0ZyYW1lJztcblxudHlwZSBQcm9wcyA9IHtcbiAgd29yZDogc3RyaW5nLFxuICBndWlkZXM6IGJvb2xlYW5cbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FudmFzIGV4dGVuZHMgQ29tcG9uZW50PFByb3BzPiB7XG5cbiAgcmVuZGVyKHByb3BzOiBQcm9wcywgc3RhdGU6IGFueSkge1xuICAgIGxldCBmcmFtZXM6IHByZWFjdC5KU1guRWxlbWVudFtdID0gW107XG4gICAgZm9yKGxldCBlIG9mIHByb3BzLndvcmQuc3BsaXQoJycpKSB7XG4gICAgICBmcmFtZXMucHVzaCg8Q2FudmFzRnJhbWUgY2hhcmFjdGVyID0geyBlIH0gZ3VpZGVzID0geyBwcm9wcy5ndWlkZXMgfSAvPik7XG4gICAgfVxuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cImNhbnZhc1wiPnsgZnJhbWVzIH08L2Rpdj47XG4gIH1cbn0iLCJpbXBvcnQgeyBoLCByZW5kZXIsIENvbXBvbmVudCwgUmVmT2JqZWN0IH0gZnJvbSAncHJlYWN0JztcbmltcG9ydCB7IGNyZWF0ZVJlZiB9IGZyb20gJ3ByZWFjdCc7XG5cbnR5cGUgUHJvcHMgPSB7XG4gIGNoYXJhY3Rlcjogc3RyaW5nLFxuICBndWlkZXM6IGJvb2xlYW5cbn07XG5cbnR5cGUgUG9pbnQgPSB7XG4gIHg6IG51bWJlcixcbiAgeTogbnVtYmVyXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYW52YXNGcmFtZSBleHRlbmRzIENvbXBvbmVudDxQcm9wcz4ge1xuICAgIHBlbkRvd246IGJvb2xlYW4gPSBmYWxzZTtcbiAgICAvLyBtb3VzZVBvc2l0aW9ucyB3aWxsIGJlIHVzZWQgYXMgYSBGSUZPIHF1ZXVlXG4gICAgcGVuUG9zaXRpb25zOiBQb2ludFtdID0gQXJyYXkuZnJvbSh7bGVuZ3RoOiAzfSwgKCkgPT4geyByZXR1cm4ge3g6IDAsIHk6IDB9fSk7XG4gICAgcG9zaXRpb25zU2luY2VQZW5Eb3duOiBudW1iZXIgPSAwO1xuICAgIHBhZ2VPZmZzZXQ6IFBvaW50O1xuICAgIHJlZjogUmVmT2JqZWN0PEhUTUxEaXZFbGVtZW50PiA9IGNyZWF0ZVJlZigpO1xuICAgIGNhbnZhc1JlZjogUmVmT2JqZWN0PEhUTUxDYW52YXNFbGVtZW50PiA9IGNyZWF0ZVJlZigpO1xuICAgIHJlbmRlcmluZ0NvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRDtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMub25Nb3VzZURvd24gPSB0aGlzLm9uTW91c2VEb3duLmJpbmQodGhpcyk7XG4gICAgdGhpcy5vblRvdWNoU3RhcnQgPSB0aGlzLm9uVG91Y2hTdGFydC5iaW5kKHRoaXMpO1xuICAgIHRoaXMub25Nb3VzZU1vdmUgPSB0aGlzLm9uTW91c2VNb3ZlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5vblRvdWNoTW92ZSA9IHRoaXMub25Ub3VjaE1vdmUuYmluZCh0aGlzKTtcbiAgICB0aGlzLm9uTW91c2VVcCA9IHRoaXMub25Nb3VzZVVwLmJpbmQodGhpcyk7XG4gICAgdGhpcy5vblRvdWNoRW5kID0gdGhpcy5vblRvdWNoRW5kLmJpbmQodGhpcyk7XG4gICAgdGhpcy5vbk1vdXNlTGVhdmUgPSB0aGlzLm9uTW91c2VMZWF2ZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuYWRqdXN0Rm9yUmVzaXplQW5kSW5pdCA9IHRoaXMuYWRqdXN0Rm9yUmVzaXplQW5kSW5pdC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuYWRqdXN0Rm9yU2Nyb2xsID0gdGhpcy5hZGp1c3RGb3JTY3JvbGwuYmluZCh0aGlzKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5hZGp1c3RGb3JSZXNpemVBbmRJbml0KTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5hZGp1c3RGb3JTY3JvbGwpO1xuICAgIHNldFRpbWVvdXQodGhpcy5hZGp1c3RGb3JSZXNpemVBbmRJbml0KTtcbiAgfVxuXG4gIHJlbmRlcihwcm9wczogUHJvcHMsIHN0YXRlOiBhbnkpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzcz1cImNhbnZhcy1mcmFtZVwiIHJlZj17IHRoaXMucmVmIH0+XG4gICAgICAgIHsgcHJvcHMuZ3VpZGVzICYmIDxkaXY+eyBwcm9wcy5jaGFyYWN0ZXIgfTwvZGl2PiB9XG4gICAgICAgIDxjYW52YXMgd2lkdGg9XCIxXCIgaGVpZ2h0PVwiMVwiXG4gICAgICAgICAgb25Nb3VzZURvd249eyB0aGlzLm9uTW91c2VEb3duIH0gb25Ub3VjaFN0YXJ0PXsgdGhpcy5vblRvdWNoU3RhcnQgfVxuICAgICAgICAgIG9uTW91c2VNb3ZlPXsgdGhpcy5vbk1vdXNlTW92ZSB9IG9uVG91Y2hNb3ZlPXsgdGhpcy5vblRvdWNoTW92ZSB9XG4gICAgICAgICAgb25Nb3VzZVVwPXsgdGhpcy5vbk1vdXNlVXAgfSBvblRvdWNoRW5kPXsgdGhpcy5vblRvdWNoRW5kIH1cbiAgICAgICAgICBvbk1vdXNlTGVhdmU9eyB0aGlzLm9uTW91c2VMZWF2ZSB9IHJlZj17IHRoaXMuY2FudmFzUmVmIH0+PC9jYW52YXM+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbiAgLyogQ3VycmVudCBsaW1pdGF0aW9uOlxuICAgKiBSZXNpemluZyB0aGUgdmlld3BvcnQgY2xlYXJzIGNhbnZhcyAqL1xuICBhZGp1c3RGb3JSZXNpemVBbmRJbml0KCkge1xuICAgIGNvbnNvbGUubG9nKCdhZGp1c3RGb3JSZXNpemUgY2FsbGVkJyk7XG4gICAgdGhpcy5hZGp1c3RGb3JTY3JvbGwoKTtcbiAgICB0aGlzLmNhbnZhc1JlZi5jdXJyZW50LndpZHRoID0gdGhpcy5jYW52YXNSZWYuY3VycmVudC5jbGllbnRXaWR0aDtcbiAgICB0aGlzLmNhbnZhc1JlZi5jdXJyZW50LmhlaWdodCA9IHRoaXMuY2FudmFzUmVmLmN1cnJlbnQuY2xpZW50SGVpZ2h0O1xuICAgIHRoaXMucmVuZGVyaW5nQ29udGV4dCA9IHRoaXMuY2FudmFzUmVmLmN1cnJlbnQuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICB0aGlzLnJlbmRlcmluZ0NvbnRleHQuZmlsbFN0eWxlID0gJyM1ODZlNzUnOyAvLyBTb2xhcml6ZWQgTGlnaHQgYmFzZTAxXG4gICAgdGhpcy5yZW5kZXJpbmdDb250ZXh0LmxpbmVXaWR0aCA9IDEyMDAgLyB0aGlzLnJlZi5jdXJyZW50LmNsaWVudFdpZHRoO1xuICB9XG5cbiAgYWRqdXN0Rm9yU2Nyb2xsKCkge1xuICAgIGNvbnNvbGUubG9nKCdhZGp1c3RGb3JTY3JvbGwgY2FsbGVkJyk7XG4gICAgdGhpcy5wYWdlT2Zmc2V0ID0ge1xuICAgICAgeDogdGhpcy5yZWYuY3VycmVudC5vZmZzZXRMZWZ0LFxuICAgICAgeTogdGhpcy5yZWYuY3VycmVudC5vZmZzZXRUb3BcbiAgICB9XG4gIH1cblxuICBkcmF3SWZQZW5Eb3duKHBvc2l0aW9uOiBQb2ludCkge1xuICAgIHRoaXMucGVuUG9zaXRpb25zLnB1c2gocG9zaXRpb24pO1xuICAgIHRoaXMucGVuUG9zaXRpb25zLnNoaWZ0KCk7XG4gICAgaWYgKHRoaXMucGVuRG93biAmJiB0aGlzLnBvc2l0aW9uc1NpbmNlUGVuRG93biA+IDIpIHtcbiAgICAgIHRoaXMucmVuZGVyaW5nQ29udGV4dC5iZWdpblBhdGgoKTtcbiAgICAgIHRoaXMucmVuZGVyaW5nQ29udGV4dC5tb3ZlVG8odGhpcy5wZW5Qb3NpdGlvbnNbMF0ueCAtIHRoaXMucGFnZU9mZnNldC54LCB0aGlzLnBlblBvc2l0aW9uc1swXS55IC0gdGhpcy5wYWdlT2Zmc2V0LnkpO1xuICAgICAgZm9yIChsZXQgaT0xOyBpPHRoaXMucGVuUG9zaXRpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHRoaXMucmVuZGVyaW5nQ29udGV4dC5saW5lVG8odGhpcy5wZW5Qb3NpdGlvbnNbaV0ueCAtIHRoaXMucGFnZU9mZnNldC54LCB0aGlzLnBlblBvc2l0aW9uc1tpXS55IC0gdGhpcy5wYWdlT2Zmc2V0LnkpO1xuICAgICAgfVxuICAgICAgdGhpcy5yZW5kZXJpbmdDb250ZXh0LnN0cm9rZSgpO1xuICAgICAgdGhpcy5yZW5kZXJpbmdDb250ZXh0LmNsb3NlUGF0aCgpO1xuICAgIH1cbiAgfVxuXG4gIG9uTW91c2VEb3duKGU6IE1vdXNlRXZlbnQpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy5wZW5Eb3duID0gdHJ1ZTtcbiAgICB0aGlzLnBvc2l0aW9uc1NpbmNlUGVuRG93biA9IDA7XG4gICAgdGhpcy5kcmF3SWZQZW5Eb3duKHtcbiAgICAgIHg6IGUucGFnZVgsXG4gICAgICB5OiBlLnBhZ2VZXG4gICAgfSk7XG4gIH1cblxuICBvblRvdWNoU3RhcnQoZTogVG91Y2hFdmVudCkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLnBlbkRvd24gPSB0cnVlO1xuICAgIHRoaXMucG9zaXRpb25zU2luY2VQZW5Eb3duID0gMDtcbiAgICB0aGlzLmRyYXdJZlBlbkRvd24oe1xuICAgICAgeDogZS5jaGFuZ2VkVG91Y2hlc1swXS5wYWdlWCxcbiAgICAgIHk6IGUuY2hhbmdlZFRvdWNoZXNbMF0ucGFnZVlcbiAgICB9KTtcbiAgfVxuXG4gIG9uTW91c2VNb3ZlKGU6IE1vdXNlRXZlbnQpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy5wb3NpdGlvbnNTaW5jZVBlbkRvd24rKztcbiAgICB0aGlzLmRyYXdJZlBlbkRvd24oe1xuICAgICAgeDogZS5wYWdlWCxcbiAgICAgIHk6IGUucGFnZVlcbiAgICB9KTtcbiAgfVxuXG4gIG9uVG91Y2hNb3ZlKGU6IFRvdWNoRXZlbnQpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy5wb3NpdGlvbnNTaW5jZVBlbkRvd24rKztcbiAgICB0aGlzLmRyYXdJZlBlbkRvd24oe1xuICAgICAgeDogZS5jaGFuZ2VkVG91Y2hlc1swXS5wYWdlWCxcbiAgICAgIHk6IGUuY2hhbmdlZFRvdWNoZXNbMF0ucGFnZVlcbiAgICB9KTtcbiAgfVxuXG4gIG9uTW91c2VVcChlOiBNb3VzZUV2ZW50KSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMucGVuRG93biA9IGZhbHNlO1xuICAgIHRoaXMuZHJhd0lmUGVuRG93bih7XG4gICAgICB4OiBlLnBhZ2VYLFxuICAgICAgeTogZS5wYWdlWVxuICAgIH0pO1xuICB9XG5cbiAgb25Ub3VjaEVuZChlOiBUb3VjaEV2ZW50KSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMucGVuRG93biA9IGZhbHNlO1xuICAgIHRoaXMuZHJhd0lmUGVuRG93bih7XG4gICAgICB4OiBlLmNoYW5nZWRUb3VjaGVzWzBdLnBhZ2VYLFxuICAgICAgeTogZS5jaGFuZ2VkVG91Y2hlc1swXS5wYWdlWVxuICAgIH0pO1xuICB9XG5cbiAgb25Nb3VzZUxlYXZlKGU6IE1vdXNlRXZlbnQpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy5wZW5Eb3duID0gZmFsc2U7XG4gICAgdGhpcy5kcmF3SWZQZW5Eb3duKHtcbiAgICAgIHg6IGUucGFnZVgsXG4gICAgICB5OiBlLnBhZ2VZXG4gICAgfSk7XG4gIH1cbn0iLCJpbXBvcnQgeyBoLCByZW5kZXIsIENvbXBvbmVudCwgUmVmT2JqZWN0LCBjcmVhdGVSZWYgfSBmcm9tICdwcmVhY3QnO1xuaW1wb3J0IENhbnZhcyBmcm9tICcuL0NhbnZhcyc7XG5cbmxldCBjYXJkOiBIVE1MRGl2RWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2NhcmQnKVswXSBhcyBIVE1MRGl2RWxlbWVudDtcblxudHlwZSBTdGF0ZSA9IHtcbiAgaGludFZpc2libGU6IGJvb2xlYW4sXG4gIGRpY3Rpb25hcnlfZm9ybV9rYW5hOiBzdHJpbmcsXG4gIGNhbnZhc2VzOiBib29sZWFuW11cbn07XG5cbmNsYXNzIFRyYW5zbGF0aW9uSmFwYW5lc2VCYWNrIGV4dGVuZHMgQ29tcG9uZW50PGFueSwgU3RhdGU+IHtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuc3RhdGUgPSB7IFxuICAgICAgaGludFZpc2libGU6IGZhbHNlLCBcbiAgICAgIGRpY3Rpb25hcnlfZm9ybV9rYW5hOiAne3tkaWN0aW9uYXJ5X2Zvcm1fa2FuYX19JyxcbiAgICAgIGNhbnZhc2VzOiBbXVxuICAgIH07XG4gIH1cblxuICByZW5kZXIocHJvcHM6IGFueSwgc3RhdGU6IFN0YXRlKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxkaXY+eyd7e3RyYW5zbGF0aW9ufX0nfTwvZGl2PlxuICAgICAgICA8ZGl2Pnsne3tkaWN0aW9uYXJ5X2Zvcm19fSd9PC9kaXY+XG4gICAgICAgIHsgc3RhdGUuZGljdGlvbmFyeV9mb3JtX2thbmEgIT09ICcnICYmIDxkaXY+eyd7e2RpY3Rpb25hcnlfZm9ybV9rYW5hfX0nfTwvZGl2PiB9XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAge1xuICAgICAgICAgICAgc3RhdGUuY2FudmFzZXMubWFwKGRyYXdHdWlkZXMgPT4gXG4gICAgICAgICAgICAgIDxDYW52YXMgd29yZD1cInt7ZGljdGlvbmFyeV9mb3JtfX1cIiBndWlkZXM9e2RyYXdHdWlkZXN9IC8+XG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eyAoKSA9PiB0aGlzLmFkZENhbnZhc2VzKGZhbHNlKSB9PkVtcHR5IGJveGVzPC9idXR0b24+XG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsgKCkgPT4gdGhpcy5hZGRDYW52YXNlcyh0cnVlKSB9PkJveGVzIHdpdGggZ3VpZGVzPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+KTtcbiAgfVxuXG4gIGFkZENhbnZhc2VzID0gKGU6IGJvb2xlYW4pID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgY2FudmFzZXM6IHRoaXMuc3RhdGUuY2FudmFzZXMuY29uY2F0KGUpIH0pO1xuICB9XG59XG5cbnJlbmRlcig8VHJhbnNsYXRpb25KYXBhbmVzZUJhY2sgLz4sIGNhcmQpOyJdLCJzb3VyY2VSb290IjoiIn0=