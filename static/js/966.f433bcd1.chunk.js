(self.webpackChunkwebprofile_react=self.webpackChunkwebprofile_react||[]).push([[966],{888:function(e,t,n){"use strict";var r=n(9047);function o(){}function i(){}i.resetWarningCache=o,e.exports=function(){function e(e,t,n,o,i,a){if(a!==r){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:o};return n.PropTypes=n,n}},2007:function(e,t,n){e.exports=n(888)()},9047:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},966:function(e,t,n){"use strict";function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}t.Z=void 0;var o,i=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!==typeof e)return{default:e};var n=l(t);if(n&&n.has(e))return n.get(e);var o={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var c=i?Object.getOwnPropertyDescriptor(e,a):null;c&&(c.get||c.set)?Object.defineProperty(o,a,c):o[a]=e[a]}o.default=e,n&&n.set(e,o);return o}(n(2791)),a=n(2007),c=(o=n(5146))&&o.__esModule?o:{default:o};function l(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(l=function(e){return e?n:t})(e)}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function s(e,t){return s=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},s(e,t)}function p(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=y(e);if(t){var o=y(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return f(this,n)}}function f(e,t){if(t&&("object"===r(t)||"function"===typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return d(e)}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function y(e){return y=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},y(e)}function h(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n(8135);var m=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&s(e,t)}(a,e);var t,n,r,o=p(a);function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),h(d(t=o.call(this,e)),"_isMounted",!1),h(d(t),"handleTruncate",(function(e){t._isMounted&&e!==t.state.truncated&&(t.setState({truncated:e}),e&&t.truncateRef.onResize(),t.props.onTruncate&&t.props.onTruncate())})),h(d(t),"toggleLines",(function(e){e.preventDefault();var n=d(t);n.props.expandByClick?t._isMounted&&t.setState({expanded:!t.state.expanded},(function(){n.props.onClick&&n.props.onClick(n.state.expanded,e)})):n.props.onClick&&n.props.onClick(n.state.expanded,e)})),t.state={expanded:!1,truncated:!1},t}return t=a,(n=[{key:"componentDidMount",value:function(){this._isMounted=!0,this._isMounted&&this.setState({expanded:this.props.expanded})}},{key:"componentWillUnmount",value:function(){this._isMounted=!1}},{key:"render",value:function(){var e=this,t=this.props,n=t.children,r=t.more,o=t.less,a=t.lines,l=t.anchorClass,u=t.className,s=t.width,p=t.keepNewLines,f=t.truncatedEndingComponent,d=(t.onTruncate,this.state),y=d.expanded,h=d.truncated;return i.default.createElement("div",{className:u},i.default.createElement(c.default,{width:s,lines:!y&&a,ellipsis:i.default.createElement("span",null,f,i.default.createElement("span",{className:l,onClick:this.toggleLines},r)),onTruncate:this.handleTruncate,ref:function(t){return e.truncateRef=t}},p?n.split("\n").map((function(e,t,n){return e=i.default.createElement("span",{key:t},e),t===n.length-1?e:[e,i.default.createElement("br",{key:t+"br"})]})):n),!h&&y&&i.default.createElement("span",null," ",i.default.createElement("span",{className:l,onClick:this.toggleLines},o)))}}])&&u(t.prototype,n),r&&u(t,r),Object.defineProperty(t,"prototype",{writable:!1}),a}(i.Component);h(m,"defaultProps",{lines:3,more:"Show more",less:"Show less",anchorClass:"show-more-less-clickable",onClick:void 0,expanded:!1,width:0,keepNewLines:!1,truncatedEndingComponent:"... ",expandByClick:!0,onTruncate:void 0}),h(m,"propTypes",{children:a.PropTypes.node,lines:a.PropTypes.number,more:a.PropTypes.node,less:a.PropTypes.node,anchorClass:a.PropTypes.string,className:a.PropTypes.string,onClick:a.PropTypes.func,expanded:a.PropTypes.bool,width:a.PropTypes.number,keepNewLines:a.PropTypes.bool,truncatedEndingComponent:a.PropTypes.node,expandByClick:a.PropTypes.bool,onTruncate:a.PropTypes.func});var b=m;t.Z=b},5146:function(e,t,n){"use strict";function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=c(n(2791)),i=c(n(2007)),a=["children","ellipsis","lines"];function c(e){return e&&e.__esModule?e:{default:e}}function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l.apply(this,arguments)}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e,t){return f=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},f(e,t)}function d(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=m(e);if(t){var o=m(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return y(this,n)}}function y(e,t){if(t&&("object"===r(t)||"function"===typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return h(e)}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function m(e){return m=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},m(e)}function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var v=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&f(e,t)}(c,e);var t,n,r,i=d(c);function c(){for(var e,t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return s(this,c),b(h(e=i.call.apply(i,[this].concat(n))),"state",{}),b(h(e),"extractReplaceLinksKeys",(function(t){var n=h(e),r=0;return e.replacedLinks=[],t.replace(/(<a[\s]+([^>]+)>((?:.(?!\<\/a\>))*.)<\/a>)/g,(function(){var e=Array.prototype.slice.call(arguments,1,4);e.key="["+"@".repeat(e[2].length-1)+"="+r+++"]",n.replacedLinks.push(e),t=t.replace(e[0],e.key)})),t})),b(h(e),"restoreReplacedLinks",(function(t){return e.replacedLinks.forEach((function(e){t=t.replace(e.key,e[0])})),e.createMarkup(t)})),b(h(e),"innerText",(function(t){var n=document.createElement("div"),r="innerText"in window.HTMLElement.prototype?"innerText":"textContent",o=t.innerHTML.replace(/\r\n|\r|\n/g," ");n.innerHTML=e.extractReplaceLinksKeys(o);var i=n[r],a=document.createElement("div");return a.innerHTML="foo<br/>bar","foo\nbar"!==a[r].replace(/\r\n|\r/g,"\n")&&(n.innerHTML=n.innerHTML.replace(/<br.*?[\/]?>/gi,"\n"),i=n[r]),i})),b(h(e),"onResize",(function(){e.calcTargetWidth()})),b(h(e),"onTruncate",(function(t){var n=e.props.onTruncate;"function"===typeof n&&(e.timeout=window.requestAnimationFrame((function(){n(t)})))})),b(h(e),"calcTargetWidth",(function(t){var n=h(e),r=n.elements.target,o=n.calcTargetWidth,i=n.canvasContext,a=n.props.width;if(r){var c=a||Math.floor(r.parentNode.getBoundingClientRect().width);if(!c)return window.requestAnimationFrame((function(){return o(t)}));var l=window.getComputedStyle(r),u=[l["font-weight"],l["font-style"],l["font-size"],l["font-family"]].join(" ");i.font=u,e.setState({targetWidth:c},t)}})),b(h(e),"measureWidth",(function(t){return e.canvasContext.measureText(t).width})),b(h(e),"ellipsisWidth",(function(e){return e.offsetWidth})),b(h(e),"trimRight",(function(e){return e.replace(/\s+$/,"")})),b(h(e),"createMarkup",(function(e){return o.default.createElement("span",{dangerouslySetInnerHTML:{__html:e}})})),b(h(e),"getLines",(function(){for(var t=h(e),n=t.elements,r=t.props,i=r.lines,a=r.ellipsis,c=r.trimWhitespace,l=t.state.targetWidth,u=t.innerText,s=t.measureWidth,p=t.onTruncate,f=t.trimRight,d=t.renderLine,y=t.restoreReplacedLinks,m=[],b=u(n.text).split("\n").map((function(e){return e.split(" ")})),v=!0,g=e.ellipsisWidth(e.elements.ellipsis),w=1;w<=i;w++){var O=b[0];if(0!==O.length){var T=O.join(" ");if(s(T)<=l&&1===b.length){v=!1,T=y(T),m.push(T);break}if(w===i){for(var k=O.join(" "),P=0,j=k.length-1;P<=j;){var _=Math.floor((P+j)/2);s(k.slice(0,_+1))+g<=l?P=_+1:j=_-1}var E=k.slice(0,P);if(c)for(E=f(E);!E.length&&m.length;){E=f(m.pop())}"]["===E.substr(E.length-2)&&(E=E.substring(0,E.length-1)),E=y(E=E.replace(/\[@+$/,"")),T=o.default.createElement("span",null,E,a)}else{for(var x=0,C=O.length-1;x<=C;){var R=Math.floor((x+C)/2);s(O.slice(0,R+1).join(" "))<=l?x=R+1:C=R-1}if(0===x){w=i-1;continue}T=y(T=O.slice(0,x).join(" ")),b[0].splice(0,x)}m.push(T)}else m.push(),b.shift(),w--}return p(v),m.map(d)})),b(h(e),"renderLine",(function(e,t,n){if(t===n.length-1)return o.default.createElement("span",{key:t},e);var r=o.default.createElement("br",{key:t+"br"});return e?[o.default.createElement("span",{key:t},e),r]:r})),b(h(e),"styles",{ellipsis:{position:"fixed",visibility:"hidden",top:0,left:0}}),e.elements={},e.replacedLinks=[],e}return t=c,(n=[{key:"componentDidMount",value:function(){var e=this.elements.text,t=this.calcTargetWidth,n=this.onResize,r=document.createElement("canvas");this.canvasContext=r.getContext("2d"),t((function(){e&&e.parentNode&&e.parentNode.removeChild(e)})),window.addEventListener("resize",n)}},{key:"componentDidUpdate",value:function(e){this.props.children!==e.children&&this.forceUpdate(),this.props.width!==e.width&&this.calcTargetWidth()}},{key:"componentWillUnmount",value:function(){var e=this.elements.ellipsis,t=this.onResize,n=this.timeout;e.parentNode&&e.parentNode.removeChild(e),window.removeEventListener("resize",t),window.cancelAnimationFrame(n)}},{key:"render",value:function(){var e,t=this,n=this.elements.target,r=this.props,i=r.children,c=r.ellipsis,s=r.lines,p=u(r,a),f=this.state.targetWidth,d=this.getLines,y=this.onTruncate;return"undefined"!==typeof window&&!(!n||!f)&&(s>0?e=d():(e=i,y(!1))),delete p.onTruncate,delete p.trimWhitespace,o.default.createElement("span",l({},p,{ref:function(e){t.elements.target=e}}),o.default.createElement("span",null,e),o.default.createElement("span",{ref:function(e){t.elements.text=e}},i),o.default.createElement("span",{ref:function(e){t.elements.ellipsis=e},style:this.styles.ellipsis},c))}}])&&p(t.prototype,n),r&&p(t,r),Object.defineProperty(t,"prototype",{writable:!1}),c}(o.default.Component);t.default=v,b(v,"propTypes",{children:i.default.node,ellipsis:i.default.node,lines:i.default.oneOfType([i.default.oneOf([!1]),i.default.number]),trimWhitespace:i.default.bool,width:i.default.number,onTruncate:i.default.func}),b(v,"defaultProps",{children:"",ellipsis:"\u2026",lines:1,trimWhitespace:!1,width:0})},8135:function(e,t,n){"use strict";n.r(t),t.default={}}}]);
//# sourceMappingURL=966.f433bcd1.chunk.js.map