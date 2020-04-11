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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/TranslationJapaneseFront.tsx");
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

/***/ "./src/TranslationJapaneseFront.tsx":
/*!******************************************!*\
  !*** ./src/TranslationJapaneseFront.tsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const preact_1 = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
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
    }
    render(props, state) {
        return (preact_1.h("div", null,
            preact_1.h("div", null, '{{translation}}'),
            preact_1.h(Canvas_1.default, { word: "{{dictionary_form}}", guides: false })));
    }
}
preact_1.render(preact_1.h(TranslationJapaneseFront, null), card);


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ByZWFjdC9kaXN0L3ByZWFjdC5tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NhbnZhcy50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL0NhbnZhc0ZyYW1lLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvVHJhbnNsYXRpb25KYXBhbmVzZUZyb250LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFBc0Isc0VBQXNFLGdCQUFnQix5QkFBeUIsU0FBUyxjQUFjLG1CQUFtQixvQkFBb0Isa0JBQWtCLHVCQUF1Qiw2Q0FBNkMsb0NBQW9DLG1CQUFt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LyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9UcmFuc2xhdGlvbkphcGFuZXNlRnJvbnQudHN4XCIpO1xuIiwidmFyIG4sbCx1LGksdCxvLHIsZj17fSxlPVtdLGM9L2FjaXR8ZXgoPzpzfGd8bnxwfCQpfHJwaHxncmlkfG93c3xtbmN8bnR3fGluZVtjaF18em9vfF5vcmQvaTtmdW5jdGlvbiBzKG4sbCl7Zm9yKHZhciB1IGluIGwpblt1XT1sW3VdO3JldHVybiBufWZ1bmN0aW9uIGEobil7dmFyIGw9bi5wYXJlbnROb2RlO2wmJmwucmVtb3ZlQ2hpbGQobil9ZnVuY3Rpb24gdihuLGwsdSl7dmFyIGksdD1hcmd1bWVudHMsbz17fTtmb3IoaSBpbiBsKVwia2V5XCIhPT1pJiZcInJlZlwiIT09aSYmKG9baV09bFtpXSk7aWYoYXJndW1lbnRzLmxlbmd0aD4zKWZvcih1PVt1XSxpPTM7aTxhcmd1bWVudHMubGVuZ3RoO2krKyl1LnB1c2godFtpXSk7aWYobnVsbCE9dSYmKG8uY2hpbGRyZW49dSksXCJmdW5jdGlvblwiPT10eXBlb2YgbiYmbnVsbCE9bi5kZWZhdWx0UHJvcHMpZm9yKGkgaW4gbi5kZWZhdWx0UHJvcHMpdm9pZCAwPT09b1tpXSYmKG9baV09bi5kZWZhdWx0UHJvcHNbaV0pO3JldHVybiBoKG4sbyxsJiZsLmtleSxsJiZsLnJlZil9ZnVuY3Rpb24gaChsLHUsaSx0KXt2YXIgbz17dHlwZTpsLHByb3BzOnUsa2V5OmkscmVmOnQsX19rOm51bGwsX186bnVsbCxfX2I6MCxfX2U6bnVsbCxfX2Q6dm9pZCAwLF9fYzpudWxsLGNvbnN0cnVjdG9yOnZvaWQgMH07cmV0dXJuIG4udm5vZGUmJm4udm5vZGUobyksb31mdW5jdGlvbiBwKCl7cmV0dXJue319ZnVuY3Rpb24gZChuKXtyZXR1cm4gbi5jaGlsZHJlbn1mdW5jdGlvbiB5KG4sbCl7dGhpcy5wcm9wcz1uLHRoaXMuY29udGV4dD1sfWZ1bmN0aW9uIG0obixsKXtpZihudWxsPT1sKXJldHVybiBuLl9fP20obi5fXyxuLl9fLl9fay5pbmRleE9mKG4pKzEpOm51bGw7Zm9yKHZhciB1O2w8bi5fX2subGVuZ3RoO2wrKylpZihudWxsIT0odT1uLl9fa1tsXSkmJm51bGwhPXUuX19lKXJldHVybiB1Ll9fZTtyZXR1cm5cImZ1bmN0aW9uXCI9PXR5cGVvZiBuLnR5cGU/bShuKTpudWxsfWZ1bmN0aW9uIHcobil7dmFyIGwsdTtpZihudWxsIT0obj1uLl9fKSYmbnVsbCE9bi5fX2Mpe2ZvcihuLl9fZT1uLl9fYy5iYXNlPW51bGwsbD0wO2w8bi5fX2subGVuZ3RoO2wrKylpZihudWxsIT0odT1uLl9fa1tsXSkmJm51bGwhPXUuX19lKXtuLl9fZT1uLl9fYy5iYXNlPXUuX19lO2JyZWFrfXJldHVybiB3KG4pfX1mdW5jdGlvbiBnKGwpeyghbC5fX2QmJihsLl9fZD0hMCkmJjE9PT11LnB1c2gobCl8fHQhPT1uLmRlYm91bmNlUmVuZGVyaW5nKSYmKCh0PW4uZGVib3VuY2VSZW5kZXJpbmcpfHxpKShrKX1mdW5jdGlvbiBrKCl7dmFyIG4sbCxpLHQsbyxyLGY7Zm9yKHUuc29ydChmdW5jdGlvbihuLGwpe3JldHVybiBsLl9fdi5fX2Itbi5fX3YuX19ifSk7bj11LnBvcCgpOyluLl9fZCYmKGk9dm9pZCAwLHQ9dm9pZCAwLHI9KG89KGw9bikuX192KS5fX2UsKGY9bC5fX1ApJiYoaT1bXSx0PXooZixvLHMoe30sbyksbC5fX24sdm9pZCAwIT09Zi5vd25lclNWR0VsZW1lbnQsbnVsbCxpLG51bGw9PXI/bShvKTpyKSxUKGksbyksdCE9ciYmdyhvKSkpfWZ1bmN0aW9uIF8obixsLHUsaSx0LG8scixjLHMpe3ZhciB2LGgscCxkLHksdyxnLGs9dSYmdS5fX2t8fGUsXz1rLmxlbmd0aDtpZihjPT1mJiYoYz1udWxsIT1vP29bMF06Xz9tKHUsMCk6bnVsbCksdj0wLGwuX19rPWIobC5fX2ssZnVuY3Rpb24odSl7aWYobnVsbCE9dSl7aWYodS5fXz1sLHUuX19iPWwuX19iKzEsbnVsbD09PShwPWtbdl0pfHxwJiZ1LmtleT09cC5rZXkmJnUudHlwZT09PXAudHlwZSlrW3ZdPXZvaWQgMDtlbHNlIGZvcihoPTA7aDxfO2grKyl7aWYoKHA9a1toXSkmJnUua2V5PT1wLmtleSYmdS50eXBlPT09cC50eXBlKXtrW2hdPXZvaWQgMDticmVha31wPW51bGx9aWYoZD16KG4sdSxwPXB8fGYsaSx0LG8scixjLHMpLChoPXUucmVmKSYmcC5yZWYhPWgmJihnfHwoZz1bXSkscC5yZWYmJmcucHVzaChwLnJlZixudWxsLHUpLGcucHVzaChoLHUuX19jfHxkLHUpKSxudWxsIT1kKXt2YXIgZTtpZihudWxsPT13JiYodz1kKSx2b2lkIDAhPT11Ll9fZCllPXUuX19kLHUuX19kPXZvaWQgMDtlbHNlIGlmKG89PXB8fGQhPWN8fG51bGw9PWQucGFyZW50Tm9kZSl7bjppZihudWxsPT1jfHxjLnBhcmVudE5vZGUhPT1uKW4uYXBwZW5kQ2hpbGQoZCksZT1udWxsO2Vsc2V7Zm9yKHk9YyxoPTA7KHk9eS5uZXh0U2libGluZykmJmg8XztoKz0yKWlmKHk9PWQpYnJlYWsgbjtuLmluc2VydEJlZm9yZShkLGMpLGU9Y31cIm9wdGlvblwiPT1sLnR5cGUmJihuLnZhbHVlPVwiXCIpfWM9dm9pZCAwIT09ZT9lOmQubmV4dFNpYmxpbmcsXCJmdW5jdGlvblwiPT10eXBlb2YgbC50eXBlJiYobC5fX2Q9Yyl9fXJldHVybiB2KyssdX0pLGwuX19lPXcsbnVsbCE9byYmXCJmdW5jdGlvblwiIT10eXBlb2YgbC50eXBlKWZvcih2PW8ubGVuZ3RoO3YtLTspbnVsbCE9b1t2XSYmYShvW3ZdKTtmb3Iodj1fO3YtLTspbnVsbCE9a1t2XSYmQShrW3ZdLGtbdl0pO2lmKGcpZm9yKHY9MDt2PGcubGVuZ3RoO3YrKylqKGdbdl0sZ1srK3ZdLGdbKyt2XSl9ZnVuY3Rpb24gYihuLGwsdSl7aWYobnVsbD09dSYmKHU9W10pLG51bGw9PW58fFwiYm9vbGVhblwiPT10eXBlb2YgbilsJiZ1LnB1c2gobChudWxsKSk7ZWxzZSBpZihBcnJheS5pc0FycmF5KG4pKWZvcih2YXIgaT0wO2k8bi5sZW5ndGg7aSsrKWIobltpXSxsLHUpO2Vsc2UgdS5wdXNoKGw/bChcInN0cmluZ1wiPT10eXBlb2Ygbnx8XCJudW1iZXJcIj09dHlwZW9mIG4/aChudWxsLG4sbnVsbCxudWxsKTpudWxsIT1uLl9fZXx8bnVsbCE9bi5fX2M/aChuLnR5cGUsbi5wcm9wcyxuLmtleSxudWxsKTpuKTpuKTtyZXR1cm4gdX1mdW5jdGlvbiB4KG4sbCx1LGksdCl7dmFyIG87Zm9yKG8gaW4gdSlvIGluIGx8fEMobixvLG51bGwsdVtvXSxpKTtmb3IobyBpbiBsKXQmJlwiZnVuY3Rpb25cIiE9dHlwZW9mIGxbb118fFwidmFsdWVcIj09PW98fFwiY2hlY2tlZFwiPT09b3x8dVtvXT09PWxbb118fEMobixvLGxbb10sdVtvXSxpKX1mdW5jdGlvbiBQKG4sbCx1KXtcIi1cIj09PWxbMF0/bi5zZXRQcm9wZXJ0eShsLHUpOm5bbF09XCJudW1iZXJcIj09dHlwZW9mIHUmJiExPT09Yy50ZXN0KGwpP3UrXCJweFwiOm51bGw9PXU/XCJcIjp1fWZ1bmN0aW9uIEMobixsLHUsaSx0KXt2YXIgbyxyLGYsZSxjO2lmKHQ/XCJjbGFzc05hbWVcIj09PWwmJihsPVwiY2xhc3NcIik6XCJjbGFzc1wiPT09bCYmKGw9XCJjbGFzc05hbWVcIiksXCJrZXlcIj09PWx8fFwiY2hpbGRyZW5cIj09PWwpO2Vsc2UgaWYoXCJzdHlsZVwiPT09bClpZihvPW4uc3R5bGUsXCJzdHJpbmdcIj09dHlwZW9mIHUpby5jc3NUZXh0PXU7ZWxzZXtpZihcInN0cmluZ1wiPT10eXBlb2YgaSYmKG8uY3NzVGV4dD1cIlwiLGk9bnVsbCksaSlmb3IociBpbiBpKXUmJnIgaW4gdXx8UChvLHIsXCJcIik7aWYodSlmb3IoZiBpbiB1KWkmJnVbZl09PT1pW2ZdfHxQKG8sZix1W2ZdKX1lbHNlXCJvXCI9PT1sWzBdJiZcIm5cIj09PWxbMV0/KGU9bCE9PShsPWwucmVwbGFjZSgvQ2FwdHVyZSQvLFwiXCIpKSxjPWwudG9Mb3dlckNhc2UoKSxsPShjIGluIG4/YzpsKS5zbGljZSgyKSx1PyhpfHxuLmFkZEV2ZW50TGlzdGVuZXIobCxOLGUpLChuLmx8fChuLmw9e30pKVtsXT11KTpuLnJlbW92ZUV2ZW50TGlzdGVuZXIobCxOLGUpKTpcImxpc3RcIiE9PWwmJlwidGFnTmFtZVwiIT09bCYmXCJmb3JtXCIhPT1sJiZcInR5cGVcIiE9PWwmJlwic2l6ZVwiIT09bCYmIXQmJmwgaW4gbj9uW2xdPW51bGw9PXU/XCJcIjp1OlwiZnVuY3Rpb25cIiE9dHlwZW9mIHUmJlwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUxcIiE9PWwmJihsIT09KGw9bC5yZXBsYWNlKC9eeGxpbms6Py8sXCJcIikpP251bGw9PXV8fCExPT09dT9uLnJlbW92ZUF0dHJpYnV0ZU5TKFwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiLGwudG9Mb3dlckNhc2UoKSk6bi5zZXRBdHRyaWJ1dGVOUyhcImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIixsLnRvTG93ZXJDYXNlKCksdSk6bnVsbD09dXx8ITE9PT11P24ucmVtb3ZlQXR0cmlidXRlKGwpOm4uc2V0QXR0cmlidXRlKGwsdSkpfWZ1bmN0aW9uIE4obCl7dGhpcy5sW2wudHlwZV0obi5ldmVudD9uLmV2ZW50KGwpOmwpfWZ1bmN0aW9uIHoobCx1LGksdCxvLHIsZixlLGMpe3ZhciBhLHYsaCxwLG0sdyxnLGssYix4LFA9dS50eXBlO2lmKHZvaWQgMCE9PXUuY29uc3RydWN0b3IpcmV0dXJuIG51bGw7KGE9bi5fX2IpJiZhKHUpO3RyeXtuOmlmKFwiZnVuY3Rpb25cIj09dHlwZW9mIFApe2lmKGs9dS5wcm9wcyxiPShhPVAuY29udGV4dFR5cGUpJiZ0W2EuX19jXSx4PWE/Yj9iLnByb3BzLnZhbHVlOmEuX186dCxpLl9fYz9nPSh2PXUuX19jPWkuX19jKS5fXz12Ll9fRTooXCJwcm90b3R5cGVcImluIFAmJlAucHJvdG90eXBlLnJlbmRlcj91Ll9fYz12PW5ldyBQKGsseCk6KHUuX19jPXY9bmV3IHkoayx4KSx2LmNvbnN0cnVjdG9yPVAsdi5yZW5kZXI9RCksYiYmYi5zdWIodiksdi5wcm9wcz1rLHYuc3RhdGV8fCh2LnN0YXRlPXt9KSx2LmNvbnRleHQ9eCx2Ll9fbj10LGg9di5fX2Q9ITAsdi5fX2g9W10pLG51bGw9PXYuX19zJiYodi5fX3M9di5zdGF0ZSksbnVsbCE9UC5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMmJih2Ll9fcz09di5zdGF0ZSYmKHYuX19zPXMoe30sdi5fX3MpKSxzKHYuX19zLFAuZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzKGssdi5fX3MpKSkscD12LnByb3BzLG09di5zdGF0ZSxoKW51bGw9PVAuZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzJiZudWxsIT12LmNvbXBvbmVudFdpbGxNb3VudCYmdi5jb21wb25lbnRXaWxsTW91bnQoKSxudWxsIT12LmNvbXBvbmVudERpZE1vdW50JiZ2Ll9faC5wdXNoKHYuY29tcG9uZW50RGlkTW91bnQpO2Vsc2V7aWYobnVsbD09UC5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMmJmshPT1wJiZudWxsIT12LmNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMmJnYuY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhrLHgpLCF2Ll9fZSYmbnVsbCE9di5zaG91bGRDb21wb25lbnRVcGRhdGUmJiExPT09di5zaG91bGRDb21wb25lbnRVcGRhdGUoayx2Ll9fcyx4KSl7Zm9yKHYucHJvcHM9ayx2LnN0YXRlPXYuX19zLHYuX19kPSExLHYuX192PXUsdS5fX2U9aS5fX2UsdS5fX2s9aS5fX2ssdi5fX2gubGVuZ3RoJiZmLnB1c2godiksYT0wO2E8dS5fX2subGVuZ3RoO2ErKyl1Ll9fa1thXSYmKHUuX19rW2FdLl9fPXUpO2JyZWFrIG59bnVsbCE9di5jb21wb25lbnRXaWxsVXBkYXRlJiZ2LmNvbXBvbmVudFdpbGxVcGRhdGUoayx2Ll9fcyx4KSxudWxsIT12LmNvbXBvbmVudERpZFVwZGF0ZSYmdi5fX2gucHVzaChmdW5jdGlvbigpe3YuY29tcG9uZW50RGlkVXBkYXRlKHAsbSx3KX0pfXYuY29udGV4dD14LHYucHJvcHM9ayx2LnN0YXRlPXYuX19zLChhPW4uX19yKSYmYSh1KSx2Ll9fZD0hMSx2Ll9fdj11LHYuX19QPWwsYT12LnJlbmRlcih2LnByb3BzLHYuc3RhdGUsdi5jb250ZXh0KSx1Ll9faz1udWxsIT1hJiZhLnR5cGU9PWQmJm51bGw9PWEua2V5P2EucHJvcHMuY2hpbGRyZW46YSxudWxsIT12LmdldENoaWxkQ29udGV4dCYmKHQ9cyhzKHt9LHQpLHYuZ2V0Q2hpbGRDb250ZXh0KCkpKSxofHxudWxsPT12LmdldFNuYXBzaG90QmVmb3JlVXBkYXRlfHwodz12LmdldFNuYXBzaG90QmVmb3JlVXBkYXRlKHAsbSkpLF8obCx1LGksdCxvLHIsZixlLGMpLHYuYmFzZT11Ll9fZSx2Ll9faC5sZW5ndGgmJmYucHVzaCh2KSxnJiYodi5fX0U9di5fXz1udWxsKSx2Ll9fZT0hMX1lbHNlIHUuX19lPSQoaS5fX2UsdSxpLHQsbyxyLGYsYyk7KGE9bi5kaWZmZWQpJiZhKHUpfWNhdGNoKGwpe24uX19lKGwsdSxpKX1yZXR1cm4gdS5fX2V9ZnVuY3Rpb24gVChsLHUpe24uX19jJiZuLl9fYyh1LGwpLGwuc29tZShmdW5jdGlvbih1KXt0cnl7bD11Ll9faCx1Ll9faD1bXSxsLnNvbWUoZnVuY3Rpb24obil7bi5jYWxsKHUpfSl9Y2F0Y2gobCl7bi5fX2UobCx1Ll9fdil9fSl9ZnVuY3Rpb24gJChuLGwsdSxpLHQsbyxyLGMpe3ZhciBzLGEsdixoLHAsZD11LnByb3BzLHk9bC5wcm9wcztpZih0PVwic3ZnXCI9PT1sLnR5cGV8fHQsbnVsbD09biYmbnVsbCE9bylmb3Iocz0wO3M8by5sZW5ndGg7cysrKWlmKG51bGwhPShhPW9bc10pJiYobnVsbD09PWwudHlwZT8zPT09YS5ub2RlVHlwZTphLmxvY2FsTmFtZT09PWwudHlwZSkpe249YSxvW3NdPW51bGw7YnJlYWt9aWYobnVsbD09bil7aWYobnVsbD09PWwudHlwZSlyZXR1cm4gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoeSk7bj10P2RvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsbC50eXBlKTpkb2N1bWVudC5jcmVhdGVFbGVtZW50KGwudHlwZSx5LmlzJiZ7aXM6eS5pc30pLG89bnVsbH1pZihudWxsPT09bC50eXBlKW51bGwhPW8mJihvW28uaW5kZXhPZihuKV09bnVsbCksZCE9PXkmJm4uZGF0YSE9eSYmKG4uZGF0YT15KTtlbHNlIGlmKGwhPT11KXtpZihudWxsIT1vJiYob1tvLmluZGV4T2YobildPW51bGwsbz1lLnNsaWNlLmNhbGwobi5jaGlsZE5vZGVzKSksdj0oZD11LnByb3BzfHxmKS5kYW5nZXJvdXNseVNldElubmVySFRNTCxoPXkuZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwsIWMpe2lmKGQ9PT1mKWZvcihkPXt9LHA9MDtwPG4uYXR0cmlidXRlcy5sZW5ndGg7cCsrKWRbbi5hdHRyaWJ1dGVzW3BdLm5hbWVdPW4uYXR0cmlidXRlc1twXS52YWx1ZTsoaHx8dikmJihoJiZ2JiZoLl9faHRtbD09di5fX2h0bWx8fChuLmlubmVySFRNTD1oJiZoLl9faHRtbHx8XCJcIikpfXgobix5LGQsdCxjKSxsLl9faz1sLnByb3BzLmNoaWxkcmVuLGh8fF8obixsLHUsaSxcImZvcmVpZ25PYmplY3RcIiE9PWwudHlwZSYmdCxvLHIsZixjKSxjfHwoXCJ2YWx1ZVwiaW4geSYmdm9pZCAwIT09eS52YWx1ZSYmeS52YWx1ZSE9PW4udmFsdWUmJihuLnZhbHVlPW51bGw9PXkudmFsdWU/XCJcIjp5LnZhbHVlKSxcImNoZWNrZWRcImluIHkmJnZvaWQgMCE9PXkuY2hlY2tlZCYmeS5jaGVja2VkIT09bi5jaGVja2VkJiYobi5jaGVja2VkPXkuY2hlY2tlZCkpfXJldHVybiBufWZ1bmN0aW9uIGoobCx1LGkpe3RyeXtcImZ1bmN0aW9uXCI9PXR5cGVvZiBsP2wodSk6bC5jdXJyZW50PXV9Y2F0Y2gobCl7bi5fX2UobCxpKX19ZnVuY3Rpb24gQShsLHUsaSl7dmFyIHQsbyxyO2lmKG4udW5tb3VudCYmbi51bm1vdW50KGwpLCh0PWwucmVmKSYmKHQuY3VycmVudCYmdC5jdXJyZW50IT09bC5fX2V8fGoodCxudWxsLHUpKSxpfHxcImZ1bmN0aW9uXCI9PXR5cGVvZiBsLnR5cGV8fChpPW51bGwhPShvPWwuX19lKSksbC5fX2U9bC5fX2Q9dm9pZCAwLG51bGwhPSh0PWwuX19jKSl7aWYodC5jb21wb25lbnRXaWxsVW5tb3VudCl0cnl7dC5jb21wb25lbnRXaWxsVW5tb3VudCgpfWNhdGNoKGwpe24uX19lKGwsdSl9dC5iYXNlPXQuX19QPW51bGx9aWYodD1sLl9faylmb3Iocj0wO3I8dC5sZW5ndGg7cisrKXRbcl0mJkEodFtyXSx1LGkpO251bGwhPW8mJmEobyl9ZnVuY3Rpb24gRChuLGwsdSl7cmV0dXJuIHRoaXMuY29uc3RydWN0b3Iobix1KX1mdW5jdGlvbiBFKGwsdSxpKXt2YXIgdCxyLGM7bi5fXyYmbi5fXyhsLHUpLHI9KHQ9aT09PW8pP251bGw6aSYmaS5fX2t8fHUuX19rLGw9dihkLG51bGwsW2xdKSxjPVtdLHoodSwodD91Oml8fHUpLl9faz1sLHJ8fGYsZix2b2lkIDAhPT11Lm93bmVyU1ZHRWxlbWVudCxpJiYhdD9baV06cj9udWxsOmUuc2xpY2UuY2FsbCh1LmNoaWxkTm9kZXMpLGMsaXx8Zix0KSxUKGMsbCl9ZnVuY3Rpb24gSChuLGwpe0UobixsLG8pfWZ1bmN0aW9uIEkobixsKXtyZXR1cm4gbD1zKHMoe30sbi5wcm9wcyksbCksYXJndW1lbnRzLmxlbmd0aD4yJiYobC5jaGlsZHJlbj1lLnNsaWNlLmNhbGwoYXJndW1lbnRzLDIpKSxoKG4udHlwZSxsLGwua2V5fHxuLmtleSxsLnJlZnx8bi5yZWYpfWZ1bmN0aW9uIEwobil7dmFyIGw9e30sdT17X19jOlwiX19jQ1wiK3IrKyxfXzpuLENvbnN1bWVyOmZ1bmN0aW9uKG4sbCl7cmV0dXJuIG4uY2hpbGRyZW4obCl9LFByb3ZpZGVyOmZ1bmN0aW9uKG4pe3ZhciBpLHQ9dGhpcztyZXR1cm4gdGhpcy5nZXRDaGlsZENvbnRleHR8fChpPVtdLHRoaXMuZ2V0Q2hpbGRDb250ZXh0PWZ1bmN0aW9uKCl7cmV0dXJuIGxbdS5fX2NdPXQsbH0sdGhpcy5zaG91bGRDb21wb25lbnRVcGRhdGU9ZnVuY3Rpb24obCl7bi52YWx1ZSE9PWwudmFsdWUmJmkuc29tZShmdW5jdGlvbihuKXtuLmNvbnRleHQ9bC52YWx1ZSxnKG4pfSl9LHRoaXMuc3ViPWZ1bmN0aW9uKG4pe2kucHVzaChuKTt2YXIgbD1uLmNvbXBvbmVudFdpbGxVbm1vdW50O24uY29tcG9uZW50V2lsbFVubW91bnQ9ZnVuY3Rpb24oKXtpLnNwbGljZShpLmluZGV4T2YobiksMSksbCYmbC5jYWxsKG4pfX0pLG4uY2hpbGRyZW59fTtyZXR1cm4gdS5Db25zdW1lci5jb250ZXh0VHlwZT11LHV9bj17X19lOmZ1bmN0aW9uKG4sbCl7Zm9yKHZhciB1LGk7bD1sLl9fOylpZigodT1sLl9fYykmJiF1Ll9fKXRyeXtpZih1LmNvbnN0cnVjdG9yJiZudWxsIT11LmNvbnN0cnVjdG9yLmdldERlcml2ZWRTdGF0ZUZyb21FcnJvciYmKGk9ITAsdS5zZXRTdGF0ZSh1LmNvbnN0cnVjdG9yLmdldERlcml2ZWRTdGF0ZUZyb21FcnJvcihuKSkpLG51bGwhPXUuY29tcG9uZW50RGlkQ2F0Y2gmJihpPSEwLHUuY29tcG9uZW50RGlkQ2F0Y2gobikpLGkpcmV0dXJuIGcodS5fX0U9dSl9Y2F0Y2gobCl7bj1sfXRocm93IG59fSxsPWZ1bmN0aW9uKG4pe3JldHVybiBudWxsIT1uJiZ2b2lkIDA9PT1uLmNvbnN0cnVjdG9yfSx5LnByb3RvdHlwZS5zZXRTdGF0ZT1mdW5jdGlvbihuLGwpe3ZhciB1O3U9dGhpcy5fX3MhPT10aGlzLnN0YXRlP3RoaXMuX19zOnRoaXMuX19zPXMoe30sdGhpcy5zdGF0ZSksXCJmdW5jdGlvblwiPT10eXBlb2YgbiYmKG49bih1LHRoaXMucHJvcHMpKSxuJiZzKHUsbiksbnVsbCE9biYmdGhpcy5fX3YmJihsJiZ0aGlzLl9faC5wdXNoKGwpLGcodGhpcykpfSx5LnByb3RvdHlwZS5mb3JjZVVwZGF0ZT1mdW5jdGlvbihuKXt0aGlzLl9fdiYmKHRoaXMuX19lPSEwLG4mJnRoaXMuX19oLnB1c2gobiksZyh0aGlzKSl9LHkucHJvdG90eXBlLnJlbmRlcj1kLHU9W10saT1cImZ1bmN0aW9uXCI9PXR5cGVvZiBQcm9taXNlP1Byb21pc2UucHJvdG90eXBlLnRoZW4uYmluZChQcm9taXNlLnJlc29sdmUoKSk6c2V0VGltZW91dCxvPWYscj0wO2V4cG9ydHtFIGFzIHJlbmRlcixIIGFzIGh5ZHJhdGUsdiBhcyBjcmVhdGVFbGVtZW50LHYgYXMgaCxkIGFzIEZyYWdtZW50LHAgYXMgY3JlYXRlUmVmLGwgYXMgaXNWYWxpZEVsZW1lbnQseSBhcyBDb21wb25lbnQsSSBhcyBjbG9uZUVsZW1lbnQsTCBhcyBjcmVhdGVDb250ZXh0LGIgYXMgdG9DaGlsZEFycmF5LEEgYXMgX3VubW91bnQsbiBhcyBvcHRpb25zfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXByZWFjdC5tb2R1bGUuanMubWFwXG4iLCJpbXBvcnQgeyBoLCByZW5kZXIsIENvbXBvbmVudCB9IGZyb20gJ3ByZWFjdCc7XG5pbXBvcnQgQ2FudmFzRnJhbWUgZnJvbSAnLi9DYW52YXNGcmFtZSc7XG5cbnR5cGUgUHJvcHMgPSB7XG4gIHdvcmQ6IHN0cmluZyxcbiAgZ3VpZGVzOiBib29sZWFuXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhbnZhcyBleHRlbmRzIENvbXBvbmVudDxQcm9wcz4ge1xuXG4gIHJlbmRlcihwcm9wczogUHJvcHMsIHN0YXRlOiBhbnkpIHtcbiAgICBsZXQgZnJhbWVzOiBwcmVhY3QuSlNYLkVsZW1lbnRbXSA9IFtdO1xuICAgIGZvcihsZXQgZSBvZiBwcm9wcy53b3JkLnNwbGl0KCcnKSkge1xuICAgICAgZnJhbWVzLnB1c2goPENhbnZhc0ZyYW1lIGNoYXJhY3RlciA9IHsgZSB9IGd1aWRlcyA9IHsgcHJvcHMuZ3VpZGVzIH0gLz4pO1xuICAgIH1cbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJjYW52YXNcIj57IGZyYW1lcyB9PC9kaXY+O1xuICB9XG59IiwiaW1wb3J0IHsgaCwgcmVuZGVyLCBDb21wb25lbnQsIFJlZk9iamVjdCB9IGZyb20gJ3ByZWFjdCc7XG5pbXBvcnQgeyBjcmVhdGVSZWYgfSBmcm9tICdwcmVhY3QnO1xuXG50eXBlIFByb3BzID0ge1xuICBjaGFyYWN0ZXI6IHN0cmluZyxcbiAgZ3VpZGVzOiBib29sZWFuXG59O1xuXG50eXBlIFBvaW50ID0ge1xuICB4OiBudW1iZXIsXG4gIHk6IG51bWJlclxufTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FudmFzRnJhbWUgZXh0ZW5kcyBDb21wb25lbnQ8UHJvcHM+IHtcbiAgICBwZW5Eb3duOiBib29sZWFuID0gZmFsc2U7XG4gICAgLy8gbW91c2VQb3NpdGlvbnMgd2lsbCBiZSB1c2VkIGFzIGEgRklGTyBxdWV1ZVxuICAgIHBlblBvc2l0aW9uczogUG9pbnRbXSA9IEFycmF5LmZyb20oe2xlbmd0aDogM30sICgpID0+IHsgcmV0dXJuIHt4OiAwLCB5OiAwfX0pO1xuICAgIHBvc2l0aW9uc1NpbmNlUGVuRG93bjogbnVtYmVyID0gMDtcbiAgICBwYWdlT2Zmc2V0OiBQb2ludDtcbiAgICByZWY6IFJlZk9iamVjdDxIVE1MRGl2RWxlbWVudD4gPSBjcmVhdGVSZWYoKTtcbiAgICBjYW52YXNSZWY6IFJlZk9iamVjdDxIVE1MQ2FudmFzRWxlbWVudD4gPSBjcmVhdGVSZWYoKTtcbiAgICByZW5kZXJpbmdDb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQ7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLm9uTW91c2VEb3duID0gdGhpcy5vbk1vdXNlRG93bi5iaW5kKHRoaXMpO1xuICAgIHRoaXMub25Ub3VjaFN0YXJ0ID0gdGhpcy5vblRvdWNoU3RhcnQuYmluZCh0aGlzKTtcbiAgICB0aGlzLm9uTW91c2VNb3ZlID0gdGhpcy5vbk1vdXNlTW92ZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMub25Ub3VjaE1vdmUgPSB0aGlzLm9uVG91Y2hNb3ZlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5vbk1vdXNlVXAgPSB0aGlzLm9uTW91c2VVcC5iaW5kKHRoaXMpO1xuICAgIHRoaXMub25Ub3VjaEVuZCA9IHRoaXMub25Ub3VjaEVuZC5iaW5kKHRoaXMpO1xuICAgIHRoaXMub25Nb3VzZUxlYXZlID0gdGhpcy5vbk1vdXNlTGVhdmUuYmluZCh0aGlzKTtcbiAgICB0aGlzLmFkanVzdEZvclJlc2l6ZUFuZEluaXQgPSB0aGlzLmFkanVzdEZvclJlc2l6ZUFuZEluaXQuYmluZCh0aGlzKTtcbiAgICB0aGlzLmFkanVzdEZvclNjcm9sbCA9IHRoaXMuYWRqdXN0Rm9yU2Nyb2xsLmJpbmQodGhpcyk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMuYWRqdXN0Rm9yUmVzaXplQW5kSW5pdCk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMuYWRqdXN0Rm9yU2Nyb2xsKTtcbiAgICBzZXRUaW1lb3V0KHRoaXMuYWRqdXN0Rm9yUmVzaXplQW5kSW5pdCk7XG4gIH1cblxuICByZW5kZXIocHJvcHM6IFByb3BzLCBzdGF0ZTogYW55KSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3M9XCJjYW52YXMtZnJhbWVcIiByZWY9eyB0aGlzLnJlZiB9PlxuICAgICAgICB7IHByb3BzLmd1aWRlcyAmJiA8ZGl2PnsgcHJvcHMuY2hhcmFjdGVyIH08L2Rpdj4gfVxuICAgICAgICA8Y2FudmFzIHdpZHRoPVwiMVwiIGhlaWdodD1cIjFcIlxuICAgICAgICAgIG9uTW91c2VEb3duPXsgdGhpcy5vbk1vdXNlRG93biB9IG9uVG91Y2hTdGFydD17IHRoaXMub25Ub3VjaFN0YXJ0IH1cbiAgICAgICAgICBvbk1vdXNlTW92ZT17IHRoaXMub25Nb3VzZU1vdmUgfSBvblRvdWNoTW92ZT17IHRoaXMub25Ub3VjaE1vdmUgfVxuICAgICAgICAgIG9uTW91c2VVcD17IHRoaXMub25Nb3VzZVVwIH0gb25Ub3VjaEVuZD17IHRoaXMub25Ub3VjaEVuZCB9XG4gICAgICAgICAgb25Nb3VzZUxlYXZlPXsgdGhpcy5vbk1vdXNlTGVhdmUgfSByZWY9eyB0aGlzLmNhbnZhc1JlZiB9PjwvY2FudmFzPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG4gIC8qIEN1cnJlbnQgbGltaXRhdGlvbjpcbiAgICogUmVzaXppbmcgdGhlIHZpZXdwb3J0IGNsZWFycyBjYW52YXMgKi9cbiAgYWRqdXN0Rm9yUmVzaXplQW5kSW5pdCgpIHtcbiAgICBjb25zb2xlLmxvZygnYWRqdXN0Rm9yUmVzaXplIGNhbGxlZCcpO1xuICAgIHRoaXMuYWRqdXN0Rm9yU2Nyb2xsKCk7XG4gICAgdGhpcy5jYW52YXNSZWYuY3VycmVudC53aWR0aCA9IHRoaXMuY2FudmFzUmVmLmN1cnJlbnQuY2xpZW50V2lkdGg7XG4gICAgdGhpcy5jYW52YXNSZWYuY3VycmVudC5oZWlnaHQgPSB0aGlzLmNhbnZhc1JlZi5jdXJyZW50LmNsaWVudEhlaWdodDtcbiAgICB0aGlzLnJlbmRlcmluZ0NvbnRleHQgPSB0aGlzLmNhbnZhc1JlZi5jdXJyZW50LmdldENvbnRleHQoJzJkJyk7XG4gICAgdGhpcy5yZW5kZXJpbmdDb250ZXh0LmZpbGxTdHlsZSA9ICcjNTg2ZTc1JzsgLy8gU29sYXJpemVkIExpZ2h0IGJhc2UwMVxuICAgIHRoaXMucmVuZGVyaW5nQ29udGV4dC5saW5lV2lkdGggPSAxMjAwIC8gdGhpcy5yZWYuY3VycmVudC5jbGllbnRXaWR0aDtcbiAgfVxuXG4gIGFkanVzdEZvclNjcm9sbCgpIHtcbiAgICBjb25zb2xlLmxvZygnYWRqdXN0Rm9yU2Nyb2xsIGNhbGxlZCcpO1xuICAgIHRoaXMucGFnZU9mZnNldCA9IHtcbiAgICAgIHg6IHRoaXMucmVmLmN1cnJlbnQub2Zmc2V0TGVmdCxcbiAgICAgIHk6IHRoaXMucmVmLmN1cnJlbnQub2Zmc2V0VG9wXG4gICAgfVxuICB9XG5cbiAgZHJhd0lmUGVuRG93bihwb3NpdGlvbjogUG9pbnQpIHtcbiAgICB0aGlzLnBlblBvc2l0aW9ucy5wdXNoKHBvc2l0aW9uKTtcbiAgICB0aGlzLnBlblBvc2l0aW9ucy5zaGlmdCgpO1xuICAgIGlmICh0aGlzLnBlbkRvd24gJiYgdGhpcy5wb3NpdGlvbnNTaW5jZVBlbkRvd24gPiAyKSB7XG4gICAgICB0aGlzLnJlbmRlcmluZ0NvbnRleHQuYmVnaW5QYXRoKCk7XG4gICAgICB0aGlzLnJlbmRlcmluZ0NvbnRleHQubW92ZVRvKHRoaXMucGVuUG9zaXRpb25zWzBdLnggLSB0aGlzLnBhZ2VPZmZzZXQueCwgdGhpcy5wZW5Qb3NpdGlvbnNbMF0ueSAtIHRoaXMucGFnZU9mZnNldC55KTtcbiAgICAgIGZvciAobGV0IGk9MTsgaTx0aGlzLnBlblBvc2l0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICB0aGlzLnJlbmRlcmluZ0NvbnRleHQubGluZVRvKHRoaXMucGVuUG9zaXRpb25zW2ldLnggLSB0aGlzLnBhZ2VPZmZzZXQueCwgdGhpcy5wZW5Qb3NpdGlvbnNbaV0ueSAtIHRoaXMucGFnZU9mZnNldC55KTtcbiAgICAgIH1cbiAgICAgIHRoaXMucmVuZGVyaW5nQ29udGV4dC5zdHJva2UoKTtcbiAgICAgIHRoaXMucmVuZGVyaW5nQ29udGV4dC5jbG9zZVBhdGgoKTtcbiAgICB9XG4gIH1cblxuICBvbk1vdXNlRG93bihlOiBNb3VzZUV2ZW50KSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMucGVuRG93biA9IHRydWU7XG4gICAgdGhpcy5wb3NpdGlvbnNTaW5jZVBlbkRvd24gPSAwO1xuICAgIHRoaXMuZHJhd0lmUGVuRG93bih7XG4gICAgICB4OiBlLnBhZ2VYLFxuICAgICAgeTogZS5wYWdlWVxuICAgIH0pO1xuICB9XG5cbiAgb25Ub3VjaFN0YXJ0KGU6IFRvdWNoRXZlbnQpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy5wZW5Eb3duID0gdHJ1ZTtcbiAgICB0aGlzLnBvc2l0aW9uc1NpbmNlUGVuRG93biA9IDA7XG4gICAgdGhpcy5kcmF3SWZQZW5Eb3duKHtcbiAgICAgIHg6IGUuY2hhbmdlZFRvdWNoZXNbMF0ucGFnZVgsXG4gICAgICB5OiBlLmNoYW5nZWRUb3VjaGVzWzBdLnBhZ2VZXG4gICAgfSk7XG4gIH1cblxuICBvbk1vdXNlTW92ZShlOiBNb3VzZUV2ZW50KSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMucG9zaXRpb25zU2luY2VQZW5Eb3duKys7XG4gICAgdGhpcy5kcmF3SWZQZW5Eb3duKHtcbiAgICAgIHg6IGUucGFnZVgsXG4gICAgICB5OiBlLnBhZ2VZXG4gICAgfSk7XG4gIH1cblxuICBvblRvdWNoTW92ZShlOiBUb3VjaEV2ZW50KSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMucG9zaXRpb25zU2luY2VQZW5Eb3duKys7XG4gICAgdGhpcy5kcmF3SWZQZW5Eb3duKHtcbiAgICAgIHg6IGUuY2hhbmdlZFRvdWNoZXNbMF0ucGFnZVgsXG4gICAgICB5OiBlLmNoYW5nZWRUb3VjaGVzWzBdLnBhZ2VZXG4gICAgfSk7XG4gIH1cblxuICBvbk1vdXNlVXAoZTogTW91c2VFdmVudCkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLnBlbkRvd24gPSBmYWxzZTtcbiAgICB0aGlzLmRyYXdJZlBlbkRvd24oe1xuICAgICAgeDogZS5wYWdlWCxcbiAgICAgIHk6IGUucGFnZVlcbiAgICB9KTtcbiAgfVxuXG4gIG9uVG91Y2hFbmQoZTogVG91Y2hFdmVudCkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLnBlbkRvd24gPSBmYWxzZTtcbiAgICB0aGlzLmRyYXdJZlBlbkRvd24oe1xuICAgICAgeDogZS5jaGFuZ2VkVG91Y2hlc1swXS5wYWdlWCxcbiAgICAgIHk6IGUuY2hhbmdlZFRvdWNoZXNbMF0ucGFnZVlcbiAgICB9KTtcbiAgfVxuXG4gIG9uTW91c2VMZWF2ZShlOiBNb3VzZUV2ZW50KSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMucGVuRG93biA9IGZhbHNlO1xuICAgIHRoaXMuZHJhd0lmUGVuRG93bih7XG4gICAgICB4OiBlLnBhZ2VYLFxuICAgICAgeTogZS5wYWdlWVxuICAgIH0pO1xuICB9XG59IiwiaW1wb3J0IHsgaCwgcmVuZGVyLCBDb21wb25lbnQgfSBmcm9tICdwcmVhY3QnO1xuaW1wb3J0IENhbnZhcyBmcm9tICcuL0NhbnZhcyc7XG5cbmxldCBjYXJkOiBIVE1MRGl2RWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2NhcmQnKVswXSBhcyBIVE1MRGl2RWxlbWVudDtcblxuY2xhc3MgVHJhbnNsYXRpb25KYXBhbmVzZUZyb250IGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuc3RhdGUgPSB7IFxuICAgICAgaGludFZpc2libGU6IGZhbHNlLCBcbiAgICAgIGRpY3Rpb25hcnlfZm9ybV9rYW5hOiAne3tkaWN0aW9uYXJ5X2Zvcm1fa2FuYX19J1xuICAgIH07XG4gIH1cblxuICByZW5kZXIocHJvcHM6IGFueSwgc3RhdGU6IGFueSkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8ZGl2Pnsne3t0cmFuc2xhdGlvbn19J308L2Rpdj5cbiAgICAgICAgPENhbnZhcyB3b3JkPVwie3tkaWN0aW9uYXJ5X2Zvcm19fVwiIGd1aWRlcz17ZmFsc2V9IC8+XG4gICAgICA8L2Rpdj4pO1xuICB9XG5cbiAgc2hvd0hpbnQgPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGhpbnRWaXNpYmxlOiB0cnVlIH0pO1xuICB9XG59XG5cbnJlbmRlcig8VHJhbnNsYXRpb25KYXBhbmVzZUZyb250IC8+LCBjYXJkKTsiXSwic291cmNlUm9vdCI6IiJ9