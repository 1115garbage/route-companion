var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t,t.exports),e=null),t.exports),s=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},c=(n,r,o)=>(o=n==null?{}:e(i(n)),s(r||!n||!n.__esModule||!a.call(n,`default`)?t(o,`default`,{value:n,enumerable:!0}):o,n)),l=(e=>typeof require<`u`?require:typeof Proxy<`u`?new Proxy(e,{get:(e,t)=>(typeof require<`u`?require:e)[t]}):e)(function(e){if(typeof require<`u`)return require.apply(this,arguments);throw Error('Calling `require` for "'+e+"\" in an environment that doesn't expose the `require` function. See https://rolldown.rs/in-depth/bundling-cjs#require-external-modules for more details.")});(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var u=o((e=>{function t(e,t){var n=e.length;e.push(t);a:for(;0<n;){var r=n-1>>>1,a=e[r];if(0<i(a,t))e[r]=t,e[n]=a,n=r;else break a}}function n(e){return e.length===0?null:e[0]}function r(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;a:for(var r=0,a=e.length,o=a>>>1;r<o;){var s=2*(r+1)-1,c=e[s],l=s+1,u=e[l];if(0>i(c,n))l<a&&0>i(u,c)?(e[r]=u,e[l]=n,r=l):(e[r]=c,e[s]=n,r=s);else if(l<a&&0>i(u,n))e[r]=u,e[l]=n,r=l;else break a}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return n===0?e.id-t.id:n}if(e.unstable_now=void 0,typeof performance==`object`&&typeof performance.now==`function`){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],l=[],u=1,d=null,f=3,p=!1,m=!1,h=!1,g=!1,_=typeof setTimeout==`function`?setTimeout:null,v=typeof clearTimeout==`function`?clearTimeout:null,y=typeof setImmediate<`u`?setImmediate:null;function b(e){for(var i=n(l);i!==null;){if(i.callback===null)r(l);else if(i.startTime<=e)r(l),i.sortIndex=i.expirationTime,t(c,i);else break;i=n(l)}}function x(e){if(h=!1,b(e),!m){if(n(c)!==null)m=!0,S||(S=!0,O());else{var t=n(l);t!==null&&j(x,t.startTime-e)}}}var S=!1,C=-1,w=5,T=-1;function E(){return g?!0:!(e.unstable_now()-T<w)}function D(){if(g=!1,S){var t=e.unstable_now();T=t;var i=!0;try{a:{m=!1,h&&(h=!1,v(C),C=-1),p=!0;var a=f;try{b:{for(b(t),d=n(c);d!==null&&!(d.expirationTime>t&&E());){var o=d.callback;if(typeof o==`function`){d.callback=null,f=d.priorityLevel;var s=o(d.expirationTime<=t);if(t=e.unstable_now(),typeof s==`function`){d.callback=s,b(t),i=!0;break b}d===n(c)&&r(c),b(t)}else r(c);d=n(c)}if(d!==null)i=!0;else{var u=n(l);u!==null&&j(x,u.startTime-t),i=!1}}break a}finally{d=null,f=a,p=!1}i=void 0}}finally{i?O():S=!1}}}var O;if(typeof y==`function`)O=function(){y(D)};else if(typeof MessageChannel<`u`){var k=new MessageChannel,A=k.port2;k.port1.onmessage=D,O=function(){A.postMessage(null)}}else O=function(){_(D,0)};function j(t,n){C=_(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`):w=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},e.unstable_requestPaint=function(){g=!0},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},e.unstable_scheduleCallback=function(r,i,a){var o=e.unstable_now();switch(typeof a==`object`&&a?(a=a.delay,a=typeof a==`number`&&0<a?o+a:o):a=o,r){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=a+s,r={id:u++,callback:i,priorityLevel:r,startTime:a,expirationTime:s,sortIndex:-1},a>o?(r.sortIndex=a,t(l,r),n(c)===null&&r===n(l)&&(h?(v(C),C=-1):h=!0,j(x,a-o))):(r.sortIndex=s,t(c,r),m||p||(m=!0,S||(S=!0,O()))),r},e.unstable_shouldYield=E,e.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}})),d=o(((e,t)=>{t.exports=u()})),f=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.consumer`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.for(`react.activity`),p=Symbol.for(`react.view_transition`),m=Symbol.iterator;function h(e){return typeof e!=`object`||!e?null:(e=m&&e[m]||e[`@@iterator`],typeof e==`function`?e:null)}var g={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},_=Object.assign,v={};function y(e,t,n){this.props=e,this.context=t,this.refs=v,this.updater=n||g}y.prototype.isReactComponent={},y.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function b(){}b.prototype=y.prototype;function x(e,t,n){this.props=e,this.context=t,this.refs=v,this.updater=n||g}var S=x.prototype=new b;S.constructor=x,_(S,y.prototype),S.isPureReactComponent=!0;var C=Array.isArray;function w(){}var T={H:null,A:null,T:null,S:null},E=Object.prototype.hasOwnProperty;function D(e,n,r){var i=r.ref;return{$$typeof:t,type:e,key:n,ref:i===void 0?null:i,props:r}}function O(e,t){return D(e.type,t,e.props)}function k(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function A(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var j=/\/+/g;function M(e,t){return typeof e==`object`&&e&&e.key!=null?A(``+e.key):t.toString(36)}function N(e){switch(e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason;default:switch(typeof e.status==`string`?e.then(w,w):(e.status=`pending`,e.then(function(t){e.status===`pending`&&(e.status=`fulfilled`,e.value=t)},function(t){e.status===`pending`&&(e.status=`rejected`,e.reason=t)})),e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason}}throw e}function P(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`bigint`:case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0;break;case d:return c=e._init,P(c(e._payload),r,i,a,o)}}if(c)return o=o(e),c=a===``?`.`+M(e,0):a,C(o)?(i=``,c!=null&&(i=c.replace(j,`$&/`)+`/`),P(o,r,i,``,function(e){return e})):o!=null&&(k(o)&&(o=O(o,i+(o.key==null||e&&e.key===o.key?``:(``+o.key).replace(j,`$&/`)+`/`)+c)),r.push(o)),1;c=0;var l=a===``?`.`:a+`:`;if(C(e))for(var u=0;u<e.length;u++)a=e[u],s=l+M(a,u),c+=P(a,r,i,s,o);else if(u=h(e),typeof u==`function`)for(e=u.call(e),u=0;!(a=e.next()).done;)a=a.value,s=l+M(a,u++),c+=P(a,r,i,s,o);else if(s===`object`){if(typeof e.then==`function`)return P(N(e),r,i,a,o);throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`)}return c}function F(e,t,n){if(e==null)return e;var r=[],i=0;return P(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function I(e){if(e._status===-1){var t=e._result,n=t();n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t,n.status===void 0&&(n.status=`fulfilled`,n.value=t))},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t,n.status===void 0&&(n.status=`rejected`,n.reason=t))}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var R=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)};function z(e){var t=T.T,n={};n.types=t===null?null:t.types,T.T=n;try{var r=e(),i=T.S;i!==null&&i(n,r),typeof r==`object`&&r&&typeof r.then==`function`&&r.then(w,R)}catch(e){R(e)}finally{t!==null&&n.types!==null&&(t.types=n.types),T.T=t}}function B(e){var t=T.T;if(t!==null){var n=t.types;n===null?t.types=[e]:n.indexOf(e)===-1&&n.push(e)}else z(B.bind(null,e))}var V={map:F,forEach:function(e,t,n){F(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return F(e,function(){t++}),t},toArray:function(e){return F(e,function(e){return e})||[]},only:function(e){if(!k(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}};e.Activity=f,e.Children=V,e.Component=y,e.Fragment=r,e.Profiler=a,e.PureComponent=x,e.StrictMode=i,e.Suspense=l,e.ViewTransition=p,e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=T,e.__COMPILER_RUNTIME={__proto__:null,c:function(e){return T.H.useMemoCache(e)}},e.addTransitionType=B,e.cache=function(e){return function(){return e.apply(null,arguments)}},e.cacheSignal=function(){return null},e.cloneElement=function(e,t,n){if(e==null)throw Error(`The argument must be a React element, but you passed `+e+`.`);var r=_({},e.props),i=e.key;if(t!=null)for(a in t.key!==void 0&&(i=``+t.key),t)!E.call(t,a)||a===`key`||a===`__self`||a===`__source`||a===`ref`&&t.ref===void 0||(r[a]=t[a]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var o=Array(a),s=0;s<a;s++)o[s]=arguments[s+2];r.children=o}return D(e.type,i,r)},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:o,_context:e},e},e.createElement=function(e,t,n){var r,i={},a=null;if(t!=null)for(r in t.key!==void 0&&(a=``+t.key),t)E.call(t,r)&&r!==`key`&&r!==`__self`&&r!==`__source`&&(i[r]=t[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var s=Array(o),c=0;c<o;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return D(e,a,i)},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=k,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:I}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=z,e.unstable_useCacheRefresh=function(){return T.H.useCacheRefresh()},e.use=function(e){return T.H.use(e)},e.useActionState=function(e,t,n){return T.H.useActionState(e,t,n)},e.useCallback=function(e,t){return T.H.useCallback(e,t)},e.useContext=function(e){return T.H.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e,t){return T.H.useDeferredValue(e,t)},e.useEffect=function(e,t){return T.H.useEffect(e,t)},e.useEffectEvent=function(e){return T.H.useEffectEvent(e)},e.useId=function(){return T.H.useId()},e.useImperativeHandle=function(e,t,n){return T.H.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return T.H.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return T.H.useLayoutEffect(e,t)},e.useMemo=function(e,t){return T.H.useMemo(e,t)},e.useOptimistic=function(e,t){return T.H.useOptimistic(e,t)},e.useReducer=function(e,t,n){return T.H.useReducer(e,t,n)},e.useRef=function(e){return T.H.useRef(e)},e.useState=function(e){return T.H.useState(e)},e.useSyncExternalStore=function(e,t,n){return T.H.useSyncExternalStore(e,t,n)},e.useTransition=function(){return T.H.useTransition()},e.version=`19.3.1`})),p=o(((e,t)=>{t.exports=f()})),m=o((e=>{var t=p();function n(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function r(){}var i={d:{f:r,r:function(){throw Error(n(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},a=Symbol.for(`react.portal`),o=Symbol.for(`react.recoverable`),s=Symbol.for(`react.optimistic_key`);function c(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:r==null?null:r===s?s:``+r,children:e,containerInfo:t,implementation:n}}var l=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function u(e,t){if(e===`font`)return``;if(typeof t==`string`)return t===`use-credentials`?t:``}e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,e.browser=function(e){return{$$typeof:o,_reason:e}},e.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(n(299));return c(e,t,null,r)},e.flushSync=function(e){var t=l.T,n=i.p;try{if(l.T=null,i.p=2,e)return e()}finally{l.T=t,i.p=n,i.d.f()}},e.preconnect=function(e,t){typeof e==`string`&&(t?(t=t.crossOrigin,t=typeof t==`string`?t===`use-credentials`?t:``:void 0):t=null,i.d.C(e,t))},e.prefetchDNS=function(e){typeof e==`string`&&i.d.D(e)},e.preinit=function(e,t){if(typeof e==`string`&&t&&typeof t.as==`string`){var n=t.as,r=u(n,t.crossOrigin),a=typeof t.integrity==`string`?t.integrity:void 0,o=typeof t.fetchPriority==`string`?t.fetchPriority:void 0;n===`style`?i.d.S(e,typeof t.precedence==`string`?t.precedence:void 0,{crossOrigin:r,integrity:a,fetchPriority:o}):n===`script`&&i.d.X(e,{crossOrigin:r,integrity:a,fetchPriority:o,nonce:typeof t.nonce==`string`?t.nonce:void 0})}},e.preinitModule=function(e,t){if(typeof e==`string`){if(typeof t==`object`&&t){if(t.as==null||t.as===`script`){var n=u(t.as,t.crossOrigin);i.d.M(e,{crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0})}}else t??i.d.M(e)}},e.preload=function(e,t){if(typeof e==`string`&&typeof t==`object`&&t&&typeof t.as==`string`){var n=t.as,r=u(n,t.crossOrigin);i.d.L(e,n,{crossOrigin:r,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,type:typeof t.type==`string`?t.type:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy==`string`?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet==`string`?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes==`string`?t.imageSizes:void 0,media:typeof t.media==`string`?t.media:void 0})}},e.preloadModule=function(e,t){if(typeof e==`string`){if(t){var n=u(t.as,t.crossOrigin);i.d.m(e,{as:typeof t.as==`string`&&t.as!==`script`?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0})}else i.d.m(e)}},e.requestFormReset=function(e){i.d.r(e)},e.unstable_batchedUpdates=function(e,t){return e(t)},e.useFormState=function(e,t,n){return l.H.useFormState(e,t,n)},e.useFormStatus=function(){return l.H.useHostTransitionStatus()},e.version=`19.3.1`})),h=o(((e,t)=>{function n(){if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE==`function`)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=m()})),g=o((e=>{var t=d(),n=p(),r=h();function i(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function a(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function o(e){for(var t=e,n=t;n&&!n.alternate;)t=n,t.flags&4098&&(e=t.return),n=t.return;for(;t.return;)t=t.return;return t.tag===3?e:null}function s(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function c(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function l(e){if(o(e)!==e)throw Error(i(188))}function u(e){var t=e.alternate;if(!t){if(t=o(e),t===null)throw Error(i(188));return t===e?e:null}for(var n=e,r=t;;){var a=n.return;if(a===null)break;var s=a.alternate;if(s===null){if(r=a.return,r!==null){n=r;continue}break}if(a.child===s.child){for(s=a.child;s;){if(s===n)return l(a),e;if(s===r)return l(a),t;s=s.sibling}throw Error(i(188))}if(n.return!==r.return)n=a,r=s;else{for(var c=!1,u=a.child;u;){if(u===n){c=!0,n=a,r=s;break}if(u===r){c=!0,r=a,n=s;break}u=u.sibling}if(!c){for(u=s.child;u;){if(u===n){c=!0,n=s,r=a;break}if(u===r){c=!0,r=s,n=a;break}u=u.sibling}if(!c)throw Error(i(189))}}if(n.alternate!==r)throw Error(i(190))}if(n.tag!==3)throw Error(i(188));return n.stateNode.current===n?e:t}function f(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=f(e),t!==null)return t;e=e.sibling}return null}function m(e,t,n,r,i,a){for(;e!==null;){if((e.tag===5||e.tag===27||e.tag===6)&&n(e,r,i,a)||(e.tag!==22||e.memoizedState===null)&&(t||e.tag!==5&&e.tag!==27)&&m(e.child,t,n,r,i,a))return!0;e=e.sibling}return!1}function g(e){for(e=e.return;e!==null;){if(e.tag===3||e.tag===5||e.tag===27)return e;e=e.return}return null}function _(e){var t=!1;for(e=e.return;e!==null&&(e.tag===4&&(t=!0),e.tag!==3&&e.tag!==5&&e.tag!==27);)e=e.return;return t}function v(e){var t=[null,null],n=g(e);return n===null||y(t,e,n.child,{foundSelf:!1}),t}function y(e,t,n,r){for(;n!==null;){if(n===t)r.foundSelf=!0;else if(n.tag===5||n.tag===27||n.tag===6){if(r.foundSelf)return e[1]=n,!0;e[0]=n}else if((n.tag!==22||n.memoizedState===null)&&y(e,t,n.child,r))return!0;n=n.sibling}return!1}function b(e){switch(e.tag){case 5:case 27:case 6:return e.stateNode;case 3:return e.stateNode.containerInfo;default:throw Error(i(559))}}var x=null,S=null;function C(e,t,n){return e===n||e===t&&(x=e,!0)}function w(e,t,n){return e===n?(S=e,!1):e===t&&(S!==null&&(x=e),!0)}function T(e){if(e===null)return null;do e=e===null?null:e.return;while(e&&e.tag!==5&&e.tag!==27&&e.tag!==3);return e||null}function E(e,t,n){for(var r=0,i=e;i;i=n(i))r++;i=0;for(var a=t;a;a=n(a))i++;for(;0<r-i;)e=n(e),r--;for(;0<i-r;)t=n(t),i--;for(;r--;){if(e===t||t!==null&&e===t.alternate)return e;e=n(e),t=n(t)}return null}var D=Object.assign,O=Symbol.for(`react.element`),k=Symbol.for(`react.transitional.element`),A=Symbol.for(`react.portal`),j=Symbol.for(`react.fragment`),M=Symbol.for(`react.strict_mode`),N=Symbol.for(`react.profiler`),P=Symbol.for(`react.consumer`),F=Symbol.for(`react.context`),I=Symbol.for(`react.forward_ref`),R=Symbol.for(`react.suspense`),z=Symbol.for(`react.suspense_list`),B=Symbol.for(`react.memo`),V=Symbol.for(`react.lazy`),ee=Symbol.for(`react.activity`),H=Symbol.for(`react.legacy_hidden`),te=Symbol.for(`react.memo_cache_sentinel`),ne=Symbol.for(`react.view_transition`),re=Symbol.for(`react.recoverable`),ie=Symbol.iterator;function ae(e){return typeof e!=`object`||!e?null:(e=ie&&e[ie]||e[`@@iterator`],typeof e==`function`?e:null)}var oe=Symbol.for(`react.client.reference`);function se(e){if(e==null)return null;if(typeof e==`function`)return e.$$typeof===oe?null:e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case j:return`Fragment`;case N:return`Profiler`;case M:return`StrictMode`;case R:return`Suspense`;case z:return`SuspenseList`;case ee:return`Activity`;case ne:return`ViewTransition`}if(typeof e==`object`)switch(e.$$typeof){case A:return`Portal`;case F:return e.displayName||`Context`;case P:return(e._context.displayName||`Context`)+`.Consumer`;case I:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case B:return t=e.displayName||null,t===null?se(e.type)||`Memo`:t;case V:t=e._payload,e=e._init;try{return se(e(t))}catch{}}return null}var ce=Array.isArray,U=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,W=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,le={pending:!1,data:null,method:null,action:null},ue=[],de=-1;function fe(e){return{current:e}}function pe(e){0>de||(e.current=ue[de],ue[de]=null,de--)}function G(e,t){de++,ue[de]=e.current,e.current=t}var me=fe(null),he=fe(null),ge=fe(null),_e=fe(null);function ve(e,t){switch(G(ge,t),G(he,e),G(me,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?dp(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=dp(t),e=fp(t,e);else switch(e){case`svg`:e=1;break;case`math`:e=2;break;default:e=0}}pe(me),G(me,e)}function K(){pe(me),pe(he),pe(ge)}function ye(e){var t=e.memoizedState;t!==null&&(ch._currentValue=t.memoizedState,G(_e,e)),t=me.current;var n=fp(t,e.type);t!==n&&(G(he,e),G(me,n))}function be(e){he.current===e&&(pe(me),pe(he)),_e.current===e&&(pe(_e),ch._currentValue=le)}var xe,Se;function Ce(e){if(xe===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);xe=t&&t[1]||``,Se=-1<e.stack.indexOf(`
    at`)?` (<anonymous>)`:-1<e.stack.indexOf(`@`)?`@unknown:0:0`:``}return`
`+xe+e+Se}var we=!1;function Te(e,t){if(!e||we)return``;we=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(n,[])}catch(e){var r=e}Reflect.construct(e,[],n)}else{try{n.call()}catch(e){r=e}n=!1;try{var i=Object.getOwnPropertyDescriptor(e.prototype,`props`);Object.defineProperty(e.prototype,"props",{configurable:!0,set:function(){throw Error()}}),n=!0,new e}finally{n&&(i===void 0?delete e.prototype.props:Object.defineProperty(e.prototype,"props",i))}}}else{try{throw Error()}catch(e){r=e}(n=e())&&typeof n.catch==`function`&&n.catch(function(){})}}catch(e){if(e&&r&&typeof e.stack==`string`)return[e.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName=`DetermineComponentFrameRoot`;var i=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,`name`);i&&i.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:`DetermineComponentFrameRoot`});var a=r.DetermineComponentFrameRoot(),o=a[0],s=a[1];if(o&&s){var c=o.split(`
`),l=s.split(`
`);for(i=r=0;r<c.length&&!c[r].includes(`DetermineComponentFrameRoot`);)r++;for(;i<l.length&&!l[i].includes(`DetermineComponentFrameRoot`);)i++;if(r===c.length||i===l.length)for(r=c.length-1,i=l.length-1;1<=r&&0<=i&&c[r]!==l[i];)i--;for(;1<=r&&0<=i;r--,i--)if(c[r]!==l[i]){if(r!==1||i!==1)do if(r--,i--,0>i||c[r]!==l[i]){var u=`
`+c[r].replace(` at new `,` at `);return e.displayName&&u.includes(`<anonymous>`)&&(u=u.replace(`<anonymous>`,e.displayName)),u}while(1<=r&&0<=i);break}}}finally{we=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:``)?Ce(n):``}function Ee(e,t){switch(e.tag){case 26:case 27:case 5:return Ce(e.type);case 16:return Ce(`Lazy`);case 13:return e.child!==t&&t!==null?Ce(`Suspense Fallback`):Ce(`Suspense`);case 19:return Ce(`SuspenseList`);case 0:case 15:return Te(e.type,!1);case 11:return Te(e.type.render,!1);case 1:return Te(e.type,!0);case 31:return Ce(`Activity`);case 30:return Ce(`ViewTransition`);default:return``}}function De(e){try{var t=``,n=null;do t+=Ee(e,n),n=e,e=e.return;while(e);return t}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}var Oe=Object.prototype.hasOwnProperty,ke=t.unstable_scheduleCallback,Ae=t.unstable_cancelCallback,je=t.unstable_shouldYield,Me=t.unstable_requestPaint,Ne=t.unstable_now,Pe=t.unstable_getCurrentPriorityLevel,Fe=t.unstable_ImmediatePriority,Ie=t.unstable_UserBlockingPriority,Le=t.unstable_NormalPriority,Re=t.unstable_LowPriority,ze=t.unstable_IdlePriority,Be=t.log,Ve=t.unstable_setDisableYieldValue,He=null,q=null;function Ue(e){if(typeof Be==`function`&&Ve(e),q&&typeof q.setStrictMode==`function`)try{q.setStrictMode(He,e)}catch{}}var We=Math.clz32?Math.clz32:qe,Ge=Math.log,Ke=Math.LN2;function qe(e){return e>>>=0,e===0?32:31-(Ge(e)/Ke|0)|0}var Je=256,Ye=262144,Xe=4194304;function Ze(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&-e;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Qe(e,t,n){var r=e.pendingLanes;if(r===0)return 0;var i=0,a=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var s=r&134217727;return s===0?(s=r&~a,s===0?o===0?n||(n=r&~e,n!==0&&(i=Ze(n))):i=Ze(o):i=Ze(s)):(r=s&~a,r===0?(o&=s,o===0?n||(n=s&~e,n!==0&&(i=Ze(n))):i=Ze(o)):i=Ze(r)),i===0?0:t!==0&&t!==i&&(t&a)===0&&(a=i&-i,n=t&-t,a>=n||a===32&&n&4194048)?t:i}function $e(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function et(e,t){t&8&&(t|=t&32);var n=e.entangledLanes;if(n!==0)for(e=e.entanglements,n&=t;0<n;){var r=31-We(n),i=1<<r;t|=e[r],n&=~i}return t}function tt(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function nt(){var e=Xe;return Xe<<=1,!(Xe&62914560)&&(Xe=4194304),e}function rt(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function it(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function at(e,t,n,r,i,a){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var s=e.entanglements,c=e.expirationTimes,l=e.hiddenUpdates;for(n=o&~n;0<n;){var u=31-We(n),d=1<<u;s[u]=0,c[u]=-1;var f=l[u];if(f!==null)for(l[u]=null,u=0;u<f.length;u++){var p=f[u];p!==null&&(p.lane&=-536870913)}n&=~d}r!==0&&ot(e,r,0),a!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=a&~(o&~t))}function ot(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-We(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|n&261930}function st(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-We(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}function ct(e,t){var n=t&-t;return n=n&42?1:lt(n),(n&(e.suspendedLanes|t))===0?n:0}function lt(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function J(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function ut(){var e=W.p;return e===0?(e=window.event,e===void 0?32:wh(e.type)):e}function dt(e,t){var n=W.p;try{return W.p=e,t()}finally{W.p=n}}var ft=Math.random().toString(36).slice(2),Y=`__reactFiber$`+ft,X=`__reactProps$`+ft,pt=`__reactContainer$`+ft,mt=`__reactEvents$`+ft,ht=`__reactListeners$`+ft,gt=`__reactHandles$`+ft,Z=`__reactResources$`+ft,_t=`__reactMarker$`+ft,vt=`__reactLoad$`+ft;function yt(e){delete e[Y],delete e[X],delete e[ht],delete e[gt]}function bt(e){var t;if(t=e[Y])return t;for(var n=e.parentNode;n;){if(t=n[pt]||n[Y]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=pm(e);e!==null;){if(n=e[Y])return n;e=pm(e)}return t}e=n,n=e.parentNode}return null}function xt(e){if(e=e[Y]||e[pt]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function St(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(i(33))}function Ct(e){var t=e[Z];return t||=e[Z]={hoistableStyles:new Map,hoistableScripts:new Map},t}function wt(e){e[_t]=!0}function Tt(e){e[vt]=void 0}var Et=new Set,Dt={};function Ot(e,t){kt(e,t),kt(e+`Capture`,t)}function kt(e,t){for(Dt[e]=t,e=0;e<t.length;e++)Et.add(t[e])}var At=RegExp(`^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`),jt={},Mt={};function Nt(e){return Oe.call(Mt,e)?!0:Oe.call(jt,e)?!1:At.test(e)?Mt[e]=!0:(jt[e]=!0,!1)}var Pt=!1;function Ft(){var e=Pt;return Pt=!1,e}function It(e,t,n){if(Nt(t)){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:e.removeAttribute(t);return;case`boolean`:var r=t.toLowerCase().slice(0,5);if(r!==`data-`&&r!==`aria-`){e.removeAttribute(t);return}}e.setAttribute(t,n)}}}function Lt(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(t);return}e.setAttribute(t,n)}}function Rt(e,t,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(n);return}e.setAttributeNS(t,n,r)}}function Q(e){switch(typeof e){case`bigint`:case`boolean`:case`number`:case`string`:case`undefined`:return e;case`object`:return e;default:return``}}function zt(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===`input`&&(t===`checkbox`||t===`radio`)}function Bt(e,t,n){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&r!==void 0&&typeof r.get==`function`&&typeof r.set==`function`){var i=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){n=``+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=``+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Vt(e){if(!e._valueTracker){var t=zt(e)?`checked`:`value`;e._valueTracker=Bt(e,t,``+e[t])}}function Ht(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r=``;return e&&(r=zt(e)?e.checked?`true`:`false`:e.value),e=r,e!==n&&(t.setValue(e),!0)}var Ut=/[\n"\\]/g;function Wt(e){return e.replace(Ut,function(e){return`\\`+e.charCodeAt(0).toString(16)+` `})}function Gt(e,t,n,r,i,a,o,s){e.name=``,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`?e.type=o:e.removeAttribute(`type`),t==null?o!==`submit`&&o!==`reset`||e.removeAttribute(`value`):o===`number`?(t===0&&e.value===``||e.value!=t)&&(e.value=``+Q(t)):e.value!==``+Q(t)&&(e.value=``+Q(t)),t==null?n==null?r!=null&&e.removeAttribute(`value`):qt(e,Q(n)):o===`number`&&e.value==t?qt(e,Q(e.value)):qt(e,Q(t)),i==null&&a!=null&&(e.defaultChecked=!!a),i!=null&&(e.checked=i&&typeof i!=`function`&&typeof i!=`symbol`),s!=null&&typeof s!=`function`&&typeof s!=`symbol`&&typeof s!=`boolean`?e.name=``+Q(s):e.removeAttribute(`name`)}function Kt(e,t,n,r,i,a,o,s){if(a!=null&&typeof a!=`function`&&typeof a!=`symbol`&&typeof a!=`boolean`&&(e.type=a),t!=null||n!=null){if(!(a!==`submit`&&a!==`reset`||t!=null)){Vt(e);return}n=n==null?``:``+Q(n),t=t==null?n:``+Q(t),s||t===e.value||(e.value=t),e.defaultValue=t}r??=i,r=typeof r!=`function`&&typeof r!=`symbol`&&!!r,e.checked=s?e.checked:!!r,e.defaultChecked=!!r,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`&&(e.name=o),Vt(e)}function qt(e,t){e.defaultValue!==``+t&&(e.defaultValue=``+t)}function Jt(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t[`$`+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty(`$`+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=``+Q(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Yt(e,t,n){t!=null&&(t=``+Q(t),t!==e.value&&(e.value=t),n==null)?e.defaultValue!==t&&(e.defaultValue=t):e.defaultValue=n==null?``:``+Q(n)}function Xt(e,t,n,r){if(t==null){if(r!=null){if(n!=null)throw Error(i(92));if(ce(r)){if(1<r.length)throw Error(i(93));r=r[0]}n=r}n??=``,t=n}n=Q(t),e.defaultValue=n,r=e.textContent,r===n&&r!==``&&r!==null&&(e.value=r),Vt(e)}function Zt(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Qt=new Set(`animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(` `));function $t(e,t,n){var r=t.indexOf(`--`)===0;n==null||typeof n==`boolean`||n===``?r?e.setProperty(t,``):t===`float`?e.cssFloat=``:e[t]=``:r?e.setProperty(t,n):typeof n!=`number`||n===0||Qt.has(t)?t===`float`?e.cssFloat=n:e[t]=(``+n).trim():e[t]=n+`px`}function en(e,t,n){if(t!=null&&typeof t!=`object`)throw Error(i(62));if(e=e.style,n!=null){for(var r in n)!n.hasOwnProperty(r)||t!=null&&t.hasOwnProperty(r)||(r.indexOf(`--`)===0?e.setProperty(r,``):r===`float`?e.cssFloat=``:e[r]=``,Pt=!0);for(var a in t)r=t[a],t.hasOwnProperty(a)&&n[a]!==r&&($t(e,a,r),Pt=!0)}else for(var o in t)t.hasOwnProperty(o)&&$t(e,o,t[o])}function tn(e){if(e.indexOf(`-`)===-1)return!1;switch(e){case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return!1;default:return!0}}var nn=new Map([[`acceptCharset`,`accept-charset`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`],[`crossOrigin`,`crossorigin`],[`accentHeight`,`accent-height`],[`alignmentBaseline`,`alignment-baseline`],[`arabicForm`,`arabic-form`],[`baselineShift`,`baseline-shift`],[`capHeight`,`cap-height`],[`clipPath`,`clip-path`],[`clipRule`,`clip-rule`],[`colorInterpolation`,`color-interpolation`],[`colorInterpolationFilters`,`color-interpolation-filters`],[`colorProfile`,`color-profile`],[`colorRendering`,`color-rendering`],[`dominantBaseline`,`dominant-baseline`],[`enableBackground`,`enable-background`],[`fillOpacity`,`fill-opacity`],[`fillRule`,`fill-rule`],[`floodColor`,`flood-color`],[`floodOpacity`,`flood-opacity`],[`fontFamily`,`font-family`],[`fontSize`,`font-size`],[`fontSizeAdjust`,`font-size-adjust`],[`fontStretch`,`font-stretch`],[`fontStyle`,`font-style`],[`fontVariant`,`font-variant`],[`fontWeight`,`font-weight`],[`glyphName`,`glyph-name`],[`glyphOrientationHorizontal`,`glyph-orientation-horizontal`],[`glyphOrientationVertical`,`glyph-orientation-vertical`],[`horizAdvX`,`horiz-adv-x`],[`horizOriginX`,`horiz-origin-x`],[`imageRendering`,`image-rendering`],[`letterSpacing`,`letter-spacing`],[`lightingColor`,`lighting-color`],[`markerEnd`,`marker-end`],[`markerMid`,`marker-mid`],[`markerStart`,`marker-start`],[`maskType`,`mask-type`],[`overlinePosition`,`overline-position`],[`overlineThickness`,`overline-thickness`],[`paintOrder`,`paint-order`],[`panose-1`,`panose-1`],[`pointerEvents`,`pointer-events`],[`renderingIntent`,`rendering-intent`],[`shapeRendering`,`shape-rendering`],[`stopColor`,`stop-color`],[`stopOpacity`,`stop-opacity`],[`strikethroughPosition`,`strikethrough-position`],[`strikethroughThickness`,`strikethrough-thickness`],[`strokeDasharray`,`stroke-dasharray`],[`strokeDashoffset`,`stroke-dashoffset`],[`strokeLinecap`,`stroke-linecap`],[`strokeLinejoin`,`stroke-linejoin`],[`strokeMiterlimit`,`stroke-miterlimit`],[`strokeOpacity`,`stroke-opacity`],[`strokeWidth`,`stroke-width`],[`textAnchor`,`text-anchor`],[`textDecoration`,`text-decoration`],[`textRendering`,`text-rendering`],[`transformOrigin`,`transform-origin`],[`underlinePosition`,`underline-position`],[`underlineThickness`,`underline-thickness`],[`unicodeBidi`,`unicode-bidi`],[`unicodeRange`,`unicode-range`],[`unitsPerEm`,`units-per-em`],[`vAlphabetic`,`v-alphabetic`],[`vHanging`,`v-hanging`],[`vIdeographic`,`v-ideographic`],[`vMathematical`,`v-mathematical`],[`vectorEffect`,`vector-effect`],[`vertAdvY`,`vert-adv-y`],[`vertOriginX`,`vert-origin-x`],[`vertOriginY`,`vert-origin-y`],[`wordSpacing`,`word-spacing`],[`writingMode`,`writing-mode`],[`xmlnsXlink`,`xmlns:xlink`],[`xHeight`,`x-height`]]),rn=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function an(e){return rn.test(``+e)?`javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`:e}function on(){}var sn=null;function cn(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ln=null,un=null;function dn(e){var t=xt(e);if(t&&(e=t.stateNode)){var n=e[X]||null;a:switch(e=t.stateNode,t.type){case`input`:if(Gt(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type===`radio`&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll(`input[name="`+Wt(``+t)+`"][type="radio"]`),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=r[X]||null;if(!a)throw Error(i(90));Gt(r,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)r=n[t],r.form===e.form&&Ht(r)}break a;case`textarea`:Yt(e,n.value,n.defaultValue);break a;case`select`:t=n.value,t!=null&&Jt(e,!!n.multiple,t,!1)}}}var fn=!1;function pn(e,t,n){if(fn)return e(t,n);fn=!0;try{return e(t)}finally{if(fn=!1,(ln!==null||un!==null)&&(Ld(),ln&&(t=ln,e=un,un=ln=null,dn(t),e)))for(t=0;t<e.length;t++)dn(e[t])}}function mn(e,t){var n=e.stateNode;if(n===null)return null;var r=n[X]||null;if(r===null)return null;n=r[t];a:switch(t){case`onClick`:case`onClickCapture`:case`onDoubleClick`:case`onDoubleClickCapture`:case`onMouseDown`:case`onMouseDownCapture`:case`onMouseMove`:case`onMouseMoveCapture`:case`onMouseUp`:case`onMouseUpCapture`:case`onMouseEnter`:(r=!r.disabled)||(e=e.type,r=e!==`button`&&e!==`input`&&e!==`select`&&e!==`textarea`),e=!r;break a;default:e=!1}if(e)return null;if(n&&typeof n!=`function`)throw Error(i(231,t,typeof n));return n}var hn=typeof window<`u`&&window.document!==void 0&&window.document.createElement!==void 0,gn=!1;if(hn)try{var _n={};Object.defineProperty(_n,"passive",{get:function(){gn=!0}}),window.addEventListener(`test`,_n,_n),window.removeEventListener(`test`,_n,_n)}catch{gn=!1}var vn=null,yn=null,bn=null;function xn(){if(bn)return bn;var e,t=yn,n=t.length,r,i=`value`in vn?vn.value:vn.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return bn=i.slice(e,1<r?1-r:void 0)}function Sn(e){var t=e.keyCode;return`charCode`in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Cn(){return!0}function wn(){return!1}function Tn(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented==null?!1===i.returnValue:i.defaultPrevented)?Cn:wn,this.isPropagationStopped=wn,this}return D(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=`unknown`&&(e.returnValue=!1),this.isDefaultPrevented=Cn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=`unknown`&&(e.cancelBubble=!0),this.isPropagationStopped=Cn)},persist:function(){},isPersistent:Cn}),t}var En={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Dn=Tn(En),On=D({},En,{view:0,detail:0}),kn=Tn(On),An,jn,Mn,Nn=D({},On,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Wn,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return`movementX`in e?e.movementX:(e!==Mn&&(Mn&&e.type===`mousemove`?(An=e.screenX-Mn.screenX,jn=e.screenY-Mn.screenY):jn=An=0,Mn=e),An)},movementY:function(e){return`movementY`in e?e.movementY:jn}}),Pn=Tn(Nn),Fn=Tn(D({},Nn,{dataTransfer:0})),In=Tn(D({},On,{relatedTarget:0})),Ln=Tn(D({},En,{animationName:0,elapsedTime:0,pseudoElement:0})),Rn=Tn(D({},En,{clipboardData:function(e){return`clipboardData`in e?e.clipboardData:window.clipboardData}})),zn=Tn(D({},En,{data:0})),Bn={Esc:`Escape`,Spacebar:` `,Left:`ArrowLeft`,Up:`ArrowUp`,Right:`ArrowRight`,Down:`ArrowDown`,Del:`Delete`,Win:`OS`,Menu:`ContextMenu`,Apps:`ContextMenu`,Scroll:`ScrollLock`,MozPrintableKey:`Unidentified`},Vn={8:`Backspace`,9:`Tab`,12:`Clear`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,19:`Pause`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,45:`Insert`,46:`Delete`,112:`F1`,113:`F2`,114:`F3`,115:`F4`,116:`F5`,117:`F6`,118:`F7`,119:`F8`,120:`F9`,121:`F10`,122:`F11`,123:`F12`,144:`NumLock`,145:`ScrollLock`,224:`Meta`},Hn={Alt:`altKey`,Control:`ctrlKey`,Meta:`metaKey`,Shift:`shiftKey`};function Un(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Hn[e])?!!t[e]:!1}function Wn(){return Un}var Gn=Tn(D({},On,{key:function(e){if(e.key){var t=Bn[e.key]||e.key;if(t!==`Unidentified`)return t}return e.type===`keypress`?(e=Sn(e),e===13?`Enter`:String.fromCharCode(e)):e.type===`keydown`||e.type===`keyup`?Vn[e.keyCode]||`Unidentified`:``},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Wn,charCode:function(e){return e.type===`keypress`?Sn(e):0},keyCode:function(e){return e.type===`keydown`||e.type===`keyup`?e.keyCode:0},which:function(e){return e.type===`keypress`?Sn(e):e.type===`keydown`||e.type===`keyup`?e.keyCode:0}})),Kn=Tn(D({},Nn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),qn=Tn(D({},En,{submitter:0})),Jn=Tn(D({},On,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Wn})),Yn=Tn(D({},En,{propertyName:0,elapsedTime:0,pseudoElement:0})),Xn=Tn(D({},Nn,{deltaX:function(e){return`deltaX`in e?e.deltaX:`wheelDeltaX`in e?-e.wheelDeltaX:0},deltaY:function(e){return`deltaY`in e?e.deltaY:`wheelDeltaY`in e?-e.wheelDeltaY:`wheelDelta`in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),Zn=Tn(D({},En,{newState:0,oldState:0,source:0})),Qn=[9,13,27,32],$n=hn&&`CompositionEvent`in window,er=null;hn&&`documentMode`in document&&(er=document.documentMode);var tr=hn&&`TextEvent`in window&&!er,nr=hn&&(!$n||er&&8<er&&11>=er),rr=` `,ir=!1;function ar(e,t){switch(e){case`keyup`:return Qn.indexOf(t.keyCode)!==-1;case`keydown`:return t.keyCode!==229;case`keypress`:case`mousedown`:case`focusout`:return!0;default:return!1}}function or(e){return e=e.detail,typeof e==`object`&&`data`in e?e.data:null}var sr=!1;function cr(e,t){switch(e){case`compositionend`:return or(t);case`keypress`:return t.which===32?(ir=!0,rr):null;case`textInput`:return e=t.data,e===rr&&ir?null:e;default:return null}}function lr(e,t){if(sr)return e===`compositionend`||!$n&&ar(e,t)?(e=xn(),bn=yn=vn=null,sr=!1,e):null;switch(e){case`paste`:return null;case`keypress`:if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case`compositionend`:return nr&&t.locale!==`ko`?null:t.data;default:return null}}var ur={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function dr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t===`input`?!!ur[e.type]:t===`textarea`}function fr(e,t,n,r){ln?un?un.push(r):un=[r]:ln=r,t=Jf(t,`onChange`),0<t.length&&(n=new Dn(`onChange`,`change`,null,n,r),e.push({event:n,listeners:t}))}var pr=null,mr=null;function hr(e){Bf(e,0)}function gr(e){if(Ht(St(e)))return e}function _r(e,t){if(e===`change`)return t}var vr=!1;if(hn){var yr;if(hn){var br=`oninput`in document;if(!br){var xr=document.createElement(`div`);xr.setAttribute(`oninput`,`return;`),br=typeof xr.oninput==`function`}yr=br}else yr=!1;vr=yr&&(!document.documentMode||9<document.documentMode)}function Sr(){pr&&(pr.detachEvent(`onpropertychange`,Cr),mr=pr=null)}function Cr(e){if(e.propertyName===`value`&&gr(mr)){var t=[];fr(t,mr,e,cn(e)),pn(hr,t)}}function wr(e,t,n){e===`focusin`?(Sr(),pr=t,mr=n,pr.attachEvent(`onpropertychange`,Cr)):e===`focusout`&&Sr()}function Tr(e){if(e===`selectionchange`||e===`keyup`||e===`keydown`)return gr(mr)}function Er(e,t){if(e===`click`)return gr(t)}function Dr(e,t){if(e===`input`||e===`change`)return gr(t)}function Or(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var kr=typeof Object.is==`function`?Object.is:Or;function Ar(e,t){if(kr(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Oe.call(t,i)||!kr(e[i],t[i]))return!1}return!0}function jr(e){if(e||=typeof document<`u`?document:void 0,e===void 0)return null;try{return e.activeElement||e.body}catch{return e.body}}function Mr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Nr(e,t){var n=Mr(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=Mr(n)}}function Pr(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Pr(e,t.parentNode):`contains`in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Fr(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=jr(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==`string`}catch{n=!1}if(n)e=t.contentWindow;else break;t=jr(e.document)}return t}function Ir(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t===`input`&&(e.type===`text`||e.type===`search`||e.type===`tel`||e.type===`url`||e.type===`password`)||t===`textarea`||e.contentEditable===`true`)}var Lr=hn&&`documentMode`in document&&11>=document.documentMode,Rr=null,zr=null,Br=null,Vr=!1;function Hr(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Vr||Rr==null||Rr!==jr(r)||(r=Rr,`selectionStart`in r&&Ir(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Br&&Ar(Br,r)||(Br=r,r=Jf(zr,`onSelect`),0<r.length&&(t=new Dn(`onSelect`,`select`,null,t,n),e.push({event:t,listeners:r}),t.target=Rr)))}function Ur(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n[`Webkit`+e]=`webkit`+t,n[`Moz`+e]=`moz`+t,n}var Wr={animationend:Ur(`Animation`,`AnimationEnd`),animationiteration:Ur(`Animation`,`AnimationIteration`),animationstart:Ur(`Animation`,`AnimationStart`),transitionrun:Ur(`Transition`,`TransitionRun`),transitionstart:Ur(`Transition`,`TransitionStart`),transitioncancel:Ur(`Transition`,`TransitionCancel`),transitionend:Ur(`Transition`,`TransitionEnd`)},Gr={},Kr={};hn&&(Kr=document.createElement(`div`).style,`AnimationEvent`in window||(delete Wr.animationend.animation,delete Wr.animationiteration.animation,delete Wr.animationstart.animation),`TransitionEvent`in window||delete Wr.transitionend.transition);function qr(e){if(Gr[e])return Gr[e];if(!Wr[e])return e;var t=Wr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Kr)return Gr[e]=t[n];return e}var Jr=qr(`animationend`),Yr=qr(`animationiteration`),Xr=qr(`animationstart`),Zr=qr(`transitionrun`),Qr=qr(`transitionstart`),$r=qr(`transitioncancel`),ei=qr(`transitionend`),ti=new Map,ni=`abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);ni.push(`scrollEnd`);function ri(e,t){ti.set(e,t),Ot(t,[e])}var ii=0;function ai(e,t){if(e.name!=null&&e.name!==`auto`)return e.name;if(t.autoName!==null)return t.autoName;e=vd.identifierPrefix;var n=ii++;return e=`_`+e+`t_`+n.toString(32)+`_`,t.autoName=e}function oi(e){if(e==null||typeof e==`string`)return e;var t=null,n=Ed;if(n!==null)for(var r=0;r<n.length;r++){var i=e[n[r]];if(i!=null){if(i===`none`)return`none`;t=t==null?i:t+(` `+i)}}return t??e.default}function si(e,t){return e=oi(e),t=oi(t),t==null?e===`auto`?null:e:t===`auto`?null:t}var ci=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},li=[],ui=0,di=0;function fi(){for(var e=ui,t=di=ui=0;t<e;){var n=li[t];li[t++]=null;var r=li[t];li[t++]=null;var i=li[t];li[t++]=null;var a=li[t];if(li[t++]=null,r!==null&&i!==null){var o=r.pending;o===null?i.next=i:(i.next=o.next,o.next=i),r.pending=i}a!==0&&gi(n,i,a)}}function pi(e,t,n,r){li[ui++]=e,li[ui++]=t,li[ui++]=n,li[ui++]=r,di|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function mi(e,t,n,r){return pi(e,t,n,r),_i(e)}function hi(e,t){return pi(e,null,null,t),_i(e)}function gi(e,t,n){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n);for(var i=!1,a=e.return;a!==null;)a.childLanes|=n,r=a.alternate,r!==null&&(r.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(i=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,i&&t!==null&&(i=31-We(n),e=a.hiddenUpdates,r=e[i],r===null?e[i]=[t]:r.push(t),t.lane=n|536870912),a):null}function _i(e){if(50<Dd)throw Dd=0,Od=null,Error(i(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var vi={};function yi(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function bi(e,t,n,r){return new yi(e,t,n,r)}function xi(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Si(e,t){var n=e.alternate;return n===null?(n=bi(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&1206910976,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function Ci(e,t){e.flags&=1206910978;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function wi(e,t,n,r,a,o){var s=0;if(r=e,typeof r==`function`)xi(r)&&(s=1);else if(typeof r==`string`)s=Jm(e,n,me.current)?26:e===`html`||e===`head`||e===`body`?27:5;else a:switch(r){case ee:return e=bi(31,n,t,a),e.elementType=ee,e.lanes=o,e;case j:return Ti(n.children,a,o,t);case M:s=8,a|=24;break;case N:return e=bi(12,n,t,a|2),e.elementType=N,e.lanes=o,e;case R:return e=bi(13,n,t,a),e.elementType=R,e.lanes=o,e;case z:return e=bi(19,n,t,a),e.elementType=z,e.lanes=o,e;case H:case ne:return e=a|32,e=bi(30,n,t,e),e.elementType=ne,e.lanes=o,e.stateNode={autoName:null,paired:null,clones:null,ref:null},e;default:if(typeof r==`object`&&r)switch(r.$$typeof){case F:s=10;break a;case P:s=9;break a;case I:s=11;break a;case B:s=14;break a;case V:s=16,r=null;break a}s=29,n=Error(i(130,e===null?`null`:typeof e,``)),r=null}return t=bi(s,n,t,a),t.elementType=e,t.type=r,t.lanes=o,t}function Ti(e,t,n,r){return e=bi(7,e,r,t),e.lanes=n,e}function Ei(e,t,n){return e=bi(6,e,null,t),e.lanes=n,e}function Di(e){var t=bi(18,null,null,0);return t.stateNode=e,t}function Oi(e,t,n){return t=bi(4,e.children===null?[]:e.children,e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var ki=new WeakMap;function Ai(e,t){if(typeof e==`object`&&e){var n=ki.get(e);return n===void 0?(t={value:e,source:t,stack:De(t)},ki.set(e,t),t):n}return{value:e,source:t,stack:De(t)}}var ji=[],Mi=0,Ni=null,Pi=0,Fi=[],Ii=0,Li=null,Ri=1,zi=``;function Bi(e,t){ji[Mi++]=Pi,ji[Mi++]=Ni,Ni=e,Pi=t}function Vi(e,t,n){Fi[Ii++]=Ri,Fi[Ii++]=zi,Fi[Ii++]=Li,Li=e;var r=Ri;e=zi;var i=32-We(r)-1;r&=~(1<<i),n+=1;var a=32-We(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Ri=1<<32-We(t)+i|n<<i|r,zi=a+e}else Ri=1<<a|n<<i|r,zi=e}function Hi(e){e.return!==null&&(Bi(e,1),Vi(e,1,0))}function Ui(e){for(;e===Ni;)Ni=ji[--Mi],ji[Mi]=null,Pi=ji[--Mi],ji[Mi]=null;for(;e===Li;)Li=Fi[--Ii],Fi[Ii]=null,zi=Fi[--Ii],Fi[Ii]=null,Ri=Fi[--Ii],Fi[Ii]=null}function Wi(e,t){Fi[Ii++]=Ri,Fi[Ii++]=zi,Fi[Ii++]=Li,Ri=t.id,zi=t.overflow,Li=e}var Gi=null,Ki=null,qi=!1,Ji=null,Yi=!1,Xi=Error(i(519));function Zi(e){throw ra(Ai(Error(i(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?`text`:`HTML`,``)),e)),Xi}function Qi(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[Y]=e,t[X]=r,n){case`dialog`:Vf(`cancel`,t),Vf(`close`,t);break;case`iframe`:case`object`:case`embed`:Vf(`load`,t);break;case`video`:case`audio`:for(n=0;n<Rf.length;n++)Vf(Rf[n],t);break;case`source`:Vf(`error`,t);break;case`img`:case`image`:case`link`:Vf(`error`,t),Vf(`load`,t);break;case`details`:Vf(`toggle`,t);break;case`input`:Vf(`invalid`,t),Kt(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case`select`:Vf(`invalid`,t);break;case`textarea`:Vf(`invalid`,t),Xt(t,r.value,r.defaultValue,r.children)}n=r.children,typeof n!=`string`&&typeof n!=`number`&&typeof n!=`bigint`||t.textContent===``+n||!0===r.suppressHydrationWarning||ep(t.textContent,n)?(r.popover!=null&&(Vf(`beforetoggle`,t),Vf(`toggle`,t)),r.onScroll!=null&&Vf(`scroll`,t),r.onScrollEnd!=null&&Vf(`scrollend`,t),r.onClick!=null&&(t.onclick=on),t=!0):t=!1,t||Zi(e,!0)}function $i(e){for(Gi=e.return;Gi;)switch(Gi.tag){case 5:case 31:case 13:Yi=!1;return;case 27:case 3:Yi=!0;return;default:Gi=Gi.return}}function ea(e){if(e!==Gi)return!1;if(!qi)return $i(e),qi=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=n===`form`||n===`button`||mp(e.type,e.memoizedProps)),n=!n),n&&Ki&&Zi(e),$i(e),t===13){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));Ki=fm(e)}else if(t===31){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));Ki=fm(e)}else t===27?(t=Ki,Cp(e.type)?(e=dm,dm=null,Ki=e):Ki=t):Ki=Gi?um(e.stateNode.nextSibling):null;return!0}function ta(){Ki=Gi=null,qi=!1}function na(){var e=Ji;return e!==null&&(ud===null?ud=e:ud.push.apply(ud,e),Ji=null),e}function ra(e){Ji===null?Ji=[e]:Ji.push(e)}var ia=fe(null),aa=null,oa=null;function sa(e,t,n){G(ia,t._currentValue),t._currentValue=n}function ca(e){e._currentValue=ia.current,pe(ia)}function la(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)===t?r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t):(e.childLanes|=t,r!==null&&(r.childLanes|=t)),e===n)break;e=e.return}}function ua(e,t,n,r){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var o=a.dependencies;if(o!==null){var s=a.child;o=o.firstContext;a:for(;o!==null;){var c=o;o=a;for(var l=0;l<t.length;l++)if(c.context===t[l]){o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),la(o.return,n,e),r||(s=null);break a}o=c.next}}else if(a.tag===18){if(s=a.return,s===null)throw Error(i(341));s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),la(s,n,e),s=null}else a.tag===13&&a.memoizedState!==null&&a.memoizedState.dehydrated===null?(a.lanes|=n,s=a.alternate,s!==null&&(s.lanes|=n),la(a.return,n,e),s=a.child,s=s===null?null:s.sibling):s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===e){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}}function da(e,t,n,r){e=null;for(var a=t,o=!1;a!==null;){if(!o){if(a.flags&524288)o=!0;else if(a.flags&262144)break}if(a.tag===10){var s=a.alternate;if(s===null)throw Error(i(387));if(s=s.memoizedProps,s!==null){var c=a.type;kr(a.pendingProps.value,s.value)||(e===null?e=[c]:e.push(c))}}else if(a===_e.current){if(s=a.alternate,s===null)throw Error(i(387));s.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e===null?e=[ch]:e.push(ch))}a=a.return}return e!==null&&ua(t,e,n,r),t.flags|=262144,e!==null}function fa(e){for(e=e.firstContext;e!==null;){if(!kr(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function pa(e){aa=e,oa=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function ma(e){return ga(aa,e)}function ha(e,t){return aa===null&&pa(e),ga(e,t)}function ga(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},oa===null){if(e===null)throw Error(i(308));oa=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else oa=oa.next=t;return n}var _a=typeof AbortController<`u`?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},va=t.unstable_scheduleCallback,ya=t.unstable_NormalPriority,ba={$$typeof:F,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function xa(){return{controller:new _a,data:new Map,refCount:0}}function Sa(e){e.refCount--,e.refCount===0&&va(ya,function(){e.controller.abort()})}function Ca(e,t){if(e.pendingLanes&4194048){var n=e.transitionTypes;for(n===null&&(n=e.transitionTypes=[]),e=0;e<t.length;e++){var r=t[e];n.indexOf(r)===-1&&n.push(r)}}}var wa=null;function Ta(e){var t=e.transitionTypes;return e.transitionTypes=null,t}var Ea=null,Da=0,Oa=0,ka=null;function Aa(e,t){if(Ea===null){var n=Ea=[];Da=0,Oa=Nf(),ka={status:`pending`,value:void 0,then:function(e){n.push(e)}}}return Da++,t.then(ja,ja),t}function ja(){if(--Da===0&&(wa=null,Ea!==null)){ka!==null&&(ka.status=`fulfilled`);var e=Ea;Ea=null,Oa=0,ka=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Ma(e,t){var n=[],r={status:`pending`,value:null,reason:null,then:function(e){n.push(e)}};return e.then(function(){r.status=`fulfilled`,r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)},function(e){for(r.status=`rejected`,r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)}),r}var Na=U.S;U.S=function(e,t){if(pd=Ne(),typeof t==`object`&&t&&typeof t.then==`function`&&Aa(e,t),wa!==null)for(var n=yf;n!==null;)Ca(n,wa),n=n.next;if(n=e.types,n!==null){for(var r=yf;r!==null;)Ca(r,n),r=r.next;if(Oa!==0){r=wa,r===null&&(r=wa=[]);for(var i=0;i<n.length;i++){var a=n[i];r.indexOf(a)===-1&&r.push(a)}}}Na!==null&&Na(e,t)};var Pa=fe(null);function Fa(){var e=Pa.current;return e===null?Ju.pooledCache:e}function Ia(e,t){t===null?G(Pa,Pa.current):G(Pa,t.pool)}function La(){var e=Fa();return e===null?null:{parent:ba._currentValue,pool:e}}var Ra=Error(i(460)),za=Error(i(474)),Ba=Error(i(542)),Va={then:function(){}};function Ha(e){return e=e.status,e===`fulfilled`||e===`rejected`}function Ua(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(on,on),t=n),t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,qa(e),e===void 0&&!(`reason`in t)?Error(i(600)):e;default:if(typeof t.status==`string`)t.then(on,on);else{if(e=Ju,e!==null&&100<e.shellSuspendCounter)throw Error(i(482));e=t,e.status=`pending`,e.then(function(e){if(t.status===`pending`){var n=t;n.status=`fulfilled`,n.value=e}},function(e){if(t.status===`pending`){var n=t;n.status=`rejected`,n.reason=e}})}switch(t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,qa(e),e}throw Ga=t,Ra}}function Wa(e){try{var t=e._init;return t(e._payload)}catch(e){throw typeof e==`object`&&e&&typeof e.then==`function`?(Ga=e,Ra):e}}var Ga=null;function Ka(){if(Ga===null)throw Error(i(459));var e=Ga;return Ga=null,e}function qa(e){if(e===Ra||e===Ba)throw Error(i(483))}var Ja=null,Ya=0;function Xa(e){var t=Ya;return Ya+=1,Ja===null&&(Ja=[]),Ua(Ja,e,t)}function Za(e,t){t=t.props.ref,e.ref=t===void 0?null:t}function Qa(e,t){throw t.$$typeof===O?Error(i(525)):(e=Object.prototype.toString.call(t),Error(i(31,e===`[object Object]`?`object with keys {`+Object.keys(t).join(`, `)+`}`:e)))}function $a(e){function t(t,n){if(e){var r=t.deletions;r===null?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;r!==null;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;e!==null;)e.key===null?t.set(e.index,e):t.set(e.key,e),e=e.sibling;return t}function a(e,t){return e=Si(e,t),e.index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?(r=t.alternate,r===null?(t.flags|=134217730,n):(r=r.index,r<n?(t.flags|=2,n):r)):(t.flags|=1048576,n)}function s(t){return e&&t.alternate===null&&(t.flags|=134217730),t}function c(e,t,n,r){return t===null||t.tag!==6?(t=Ei(n,e.mode,r),t.return=e,t):(t=a(t,n),t.return=e,t)}function l(e,t,n,r){var i=n.type;return i===j?(e=d(e,t,n.props.children,r,n.key),Za(e,n),e):t!==null&&(t.elementType===i||typeof i==`object`&&i&&i.$$typeof===V&&Wa(i)===t.type)?(t=a(t,n.props),Za(t,n),t.return=e,t):(t=wi(n.type,n.key,n.props,null,e.mode,r),Za(t,n),t.return=e,t)}function u(e,t,n,r){return t===null||t.tag!==4||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=Oi(n,e.mode,r),t.return=e,t):(t=a(t,n.children||[]),t.return=e,t)}function d(e,t,n,r,i){return t===null||t.tag!==7?(t=Ti(n,e.mode,r,i),t.return=e,t):(t=a(t,n),t.return=e,t)}function f(e,t,n){if(typeof t==`string`&&t!==``||typeof t==`number`||typeof t==`bigint`)return t=Ei(``+t,e.mode,n),t.return=e,t;if(typeof t==`object`&&t){switch(t.$$typeof){case k:return n=wi(t.type,t.key,t.props,null,e.mode,n),Za(n,t),n.return=e,n;case A:return t=Oi(t,e.mode,n),t.return=e,t;case V:return t=Wa(t),f(e,t,n)}if(ce(t)||ae(t))return t=Ti(t,e.mode,n,null),t.return=e,t;if(typeof t.then==`function`)return f(e,Xa(t),n);if(t.$$typeof===F)return f(e,ha(e,t),n);Qa(e,t)}return null}function p(e,t,n,r){var i=t===null?null:t.key;if(typeof n==`string`&&n!==``||typeof n==`number`||typeof n==`bigint`)return i===null?c(e,t,``+n,r):null;if(typeof n==`object`&&n){switch(n.$$typeof){case k:return n.key===i?l(e,t,n,r):null;case A:return n.key===i?u(e,t,n,r):null;case V:return n=Wa(n),p(e,t,n,r)}if(ce(n)||ae(n))return i===null?d(e,t,n,r,null):null;if(typeof n.then==`function`)return p(e,t,Xa(n),r);if(n.$$typeof===F)return p(e,t,ha(e,n),r);Qa(e,n)}return null}function m(e,t,n,r,i){if(typeof r==`string`&&r!==``||typeof r==`number`||typeof r==`bigint`)return e=e.get(n)||null,c(t,e,``+r,i);if(typeof r==`object`&&r){switch(r.$$typeof){case k:return e=e.get(r.key===null?n:r.key)||null,l(t,e,r,i);case A:return e=e.get(r.key===null?n:r.key)||null,u(t,e,r,i);case V:return r=Wa(r),m(e,t,n,r,i)}if(ce(r)||ae(r))return e=e.get(n)||null,d(t,e,r,i,null);if(typeof r.then==`function`)return m(e,t,n,Xa(r),i);if(r.$$typeof===F)return m(e,t,n,ha(t,r),i);Qa(t,r)}return null}function h(i,a,s,c){for(var l=null,u=null,d=a,h=a=0,g=null;d!==null&&h<s.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var _=p(i,d,s[h],c);if(_===null){d===null&&(d=g);break}e&&d&&_.alternate===null&&t(i,d),a=o(_,a,h),u===null?l=_:u.sibling=_,u=_,d=g}if(h===s.length)return n(i,d),qi&&Bi(i,h),l;if(d===null){for(;h<s.length;h++)d=f(i,s[h],c),d!==null&&(a=o(d,a,h),u===null?l=d:u.sibling=d,u=d);return qi&&Bi(i,h),l}for(d=r(d);h<s.length;h++)g=m(d,i,h,s[h],c),g!==null&&(e&&(_=g.alternate,_!==null&&d.delete(_.key===null?h:_.key)),a=o(g,a,h),u===null?l=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(i,e)}),qi&&Bi(i,h),l}function g(a,s,c,l){if(c==null)throw Error(i(151));for(var u=null,d=null,h=s,g=s=0,_=null,v=c.next();h!==null&&!v.done;g++,v=c.next()){h.index>g?(_=h,h=null):_=h.sibling;var y=p(a,h,v.value,l);if(y===null){h===null&&(h=_);break}e&&h&&y.alternate===null&&t(a,h),s=o(y,s,g),d===null?u=y:d.sibling=y,d=y,h=_}if(v.done)return n(a,h),qi&&Bi(a,g),u;if(h===null){for(;!v.done;g++,v=c.next())v=f(a,v.value,l),v!==null&&(s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return qi&&Bi(a,g),u}for(h=r(h);!v.done;g++,v=c.next())v=m(h,a,g,v.value,l),v!==null&&(e&&(_=v.alternate,_!==null&&h.delete(_.key===null?g:_.key)),s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return e&&h.forEach(function(e){return t(a,e)}),qi&&Bi(a,g),u}function _(e,r,o,c){if(typeof o==`object`&&o&&o.type===j&&o.key===null&&o.props.ref===void 0&&(o=o.props.children),typeof o==`object`&&o){switch(o.$$typeof){case k:a:{for(var l=o.key;r!==null;){if(r.key===l){if(l=o.type,l===j){if(r.tag===7){n(e,r.sibling),c=a(r,o.props.children),Za(c,o),c.return=e,e=c;break a}}else if(r.elementType===l||typeof l==`object`&&l&&l.$$typeof===V&&Wa(l)===r.type){n(e,r.sibling),c=a(r,o.props),Za(c,o),c.return=e,e=c;break a}n(e,r);break}t(e,r),r=r.sibling}o.type===j?(c=Ti(o.props.children,e.mode,c,o.key),Za(c,o),c.return=e,e=c):(c=wi(o.type,o.key,o.props,null,e.mode,c),Za(c,o),c.return=e,e=c)}return s(e);case A:a:{for(l=o.key;r!==null;){if(r.key===l){if(r.tag===4&&r.stateNode.containerInfo===o.containerInfo&&r.stateNode.implementation===o.implementation){n(e,r.sibling),c=a(r,o.children||[]),c.return=e,e=c;break a}n(e,r);break}t(e,r),r=r.sibling}c=Oi(o,e.mode,c),c.return=e,e=c}return s(e);case V:return o=Wa(o),_(e,r,o,c)}if(ce(o))return h(e,r,o,c);if(ae(o)){if(l=ae(o),typeof l!=`function`)throw Error(i(150));return o=l.call(o),g(e,r,o,c)}if(typeof o.then==`function`)return _(e,r,Xa(o),c);if(o.$$typeof===F)return _(e,r,ha(e,o),c);Qa(e,o)}return typeof o==`string`&&o!==``||typeof o==`number`||typeof o==`bigint`?(o=``+o,r!==null&&r.tag===6?(n(e,r.sibling),c=a(r,o),c.return=e,e=c):(n(e,r),c=Ei(o,e.mode,c),c.return=e,e=c),s(e)):n(e,r)}return function(e,t,n,r){try{Ya=0;var i=_(e,t,n,r);return Ja=null,i}catch(t){if(t===Ra||t===Ba)throw t;var a=bi(29,t,null,e.mode);return a.lanes=r,a.return=e,a}}}var eo=$a(!0),to=$a(!1),no=!1;function ro(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function io(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function ao(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function oo(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,qu&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,t=_i(e),gi(e,null,n),t}return pi(e,r,t,n),_i(e)}function so(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,n&4194048)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,st(e,n)}}function co(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,callbacks:r.callbacks},e.updateQueue=n}else e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var lo=!1;function uo(){if(lo){var e=ka;if(e!==null)throw e}}function fo(e,t,n,r){lo=!1;var i=e.updateQueue;no=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,l=c.next;c.next=null,o===null?a=l:o.next=l,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=c))}if(a!==null){var d=i.baseState;o=0,u=l=c=null,s=a;do{var f=s.lane&-536870913,p=f!==s.lane;if(p?(Xu&f)===f:(r&f)===f){f!==0&&f===Oa&&(lo=!0),u!==null&&(u=u.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});a:{var m=e,h=s;f=t;var g=n;switch(h.tag){case 1:if(m=h.payload,typeof m==`function`){d=m.call(g,d,f);break a}d=m;break a;case 3:m.flags=m.flags&-65537|128;case 0:if(m=h.payload,f=typeof m==`function`?m.call(g,d,f):m,f==null)break a;d=D({},d,f);break a;case 2:no=!0}}f=s.callback,f!==null&&(e.flags|=64,p&&(e.flags|=8192),p=i.callbacks,p===null?i.callbacks=[f]:p.push(f))}else p={lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(l=u=p,c=d):u=u.next=p,o|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;p=s,s=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);u===null&&(c=d),i.baseState=c,i.firstBaseUpdate=l,i.lastBaseUpdate=u,a===null&&(i.shared.lanes=0),id|=o,e.lanes=o,e.memoizedState=d}}function po(e,t){if(typeof e!=`function`)throw Error(i(191,e));e.call(t)}function mo(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)po(n[e],t)}var ho=fe(null),go=fe(0);function _o(e,t){e=nd,G(go,e),G(ho,t),nd=e|t.baseLanes}function vo(){G(go,nd),G(ho,ho.current)}function yo(){nd=go.current,pe(ho),pe(go)}var bo=fe(null),xo=null;function So(e){var t=e.alternate;G(Do,Do.current&1),G(bo,e),xo===null&&(t===null||ho.current!==null||t.memoizedState!==null)&&(xo=e)}function Co(e){G(Do,Do.current),G(bo,e),xo===null&&(xo=e)}function wo(e){e.tag===22?(G(Do,Do.current),G(bo,e),xo===null&&(xo=e)):To()}function To(){G(Do,Do.current),G(bo,bo.current)}function Eo(e){pe(bo),xo===e&&(xo=null),pe(Do)}var Do=fe(0);function Oo(e,t){G(bo,bo.current),G(Do,t)}function ko(e){pe(Do),pe(bo),xo===e&&(xo=null)}function Ao(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||sm(n)||cm(n)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==`independent`){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var jo=0,$=null,Mo=null,No=null,Po=!1,Fo=!1,Io=!1,Lo=0,Ro=0,zo=null,Bo=0;function Vo(){throw Error(i(321))}function Ho(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!kr(e[n],t[n]))return!1;return!0}function Uo(e,t,n,r,i,a){return jo=a,$=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,U.H=e===null||e.memoizedState===null?oc:sc,Io=!1,a=n(r,i),Io=!1,Fo&&(a=Go(t,n,r,i)),Wo(e),a}function Wo(e){U.H=ac;var t=Mo!==null&&Mo.next!==null;if(jo=0,No=Mo=$=null,Po=!1,Ro=0,zo=null,t)throw Error(i(300));e===null||wc||(e=e.dependencies,e!==null&&fa(e)&&(wc=!0))}function Go(e,t,n,r){$=e;var a=0;do{if(Fo&&(zo=null),Ro=0,Fo=!1,25<=a)throw Error(i(301));if(a+=1,No=Mo=null,e.updateQueue!=null){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}U.H=cc,o=t(n,r)}while(Fo);return o}function Ko(){var e=U.H,t=e.useState()[0];return t=typeof t.then==`function`?$o(t):t,e=e.useState()[0],(Mo===null?null:Mo.memoizedState)!==e&&($.flags|=1024),t}function qo(){var e=Lo!==0;return Lo=0,e}function Jo(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Yo(e){if(Po){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Po=!1}jo=0,No=Mo=$=null,Fo=!1,Ro=Lo=0,zo=null}function Xo(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return No===null?$.memoizedState=No=e:No=No.next=e,No}function Zo(){if(Mo===null){var e=$.alternate;e=e===null?null:e.memoizedState}else e=Mo.next;var t=No===null?$.memoizedState:No.next;if(t!==null)No=t,Mo=e;else{if(e===null)throw $.alternate===null?Error(i(467)):Error(i(310));Mo=e,e={memoizedState:Mo.memoizedState,baseState:Mo.baseState,baseQueue:Mo.baseQueue,queue:Mo.queue,next:null},No===null?$.memoizedState=No=e:No=No.next=e}return No}function Qo(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function $o(e){var t=Ro;return Ro+=1,zo===null&&(zo=[]),e=Ua(zo,e,t),t=$,(No===null?t.memoizedState:No.next)===null&&(t=t.alternate,U.H=t===null||t.memoizedState===null?oc:sc),e}function es(e){if(typeof e==`object`&&e){if(typeof e.then==`function`)return $o(e);if(e.$$typeof===re)return;if(e.$$typeof===F)return ma(e)}throw Error(i(438,String(e)))}function ts(e){var t=null,n=$.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var r=$.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(e){return e.slice()}),index:0})))}if(t??={data:[],index:0},n===null&&(n=Qo(),$.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=te;return t.index++,n}function ns(e,t){return typeof t==`function`?t(e):t}function rs(e){return is(Zo(),Mo,e)}function is(e,t,n){var r=e.queue;if(r===null)throw Error(i(311));r.lastRenderedReducer=n;var a=e.baseQueue,o=r.pending;if(o!==null){if(a!==null){var s=a.next;a.next=o.next,o.next=s}t.baseQueue=a=o,r.pending=null}if(o=e.baseState,a===null)e.memoizedState=o;else{t=a.next;var c=s=null,l=null,u=t,d=!1;do{var f=u.lane&-536870913;if(f===u.lane?(jo&f)===f:(Xu&f)===f){var p=u.revertLane;if(p===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),f===Oa&&(d=!0);else if((jo&p)===p){u=u.next,p===Oa&&(d=!0);continue}else f={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=f,s=o):l=l.next=f,$.lanes|=p,id|=p;f=u.action,Io&&n(o,f),o=u.hasEagerState?u.eagerState:n(o,f)}else p={lane:f,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=p,s=o):l=l.next=p,$.lanes|=f,id|=f;u=u.next}while(u!==null&&u!==t);if(l===null?s=o:l.next=c,!kr(o,e.memoizedState)&&(wc=!0,d&&(n=ka,n!==null)))throw n;e.memoizedState=o,e.baseState=s,e.baseQueue=l,r.lastRenderedState=o}return a===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function as(e){var t=Zo(),n=t.queue;if(n===null)throw Error(i(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,o=t.memoizedState;if(a!==null){n.pending=null;var s=a=a.next;do o=e(o,s.action),s=s.next;while(s!==a);kr(o,t.memoizedState)||(wc=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function os(e,t,n){var r=$,a=Zo(),o=qi;if(o){if(n===void 0)throw Error(i(407));n=n()}else n=t();var s=!kr((Mo||a).memoizedState,n);if(s&&(a.memoizedState=n,wc=!0),a=a.queue,js(ls.bind(null,r,a,e),[e]),e=a.getSnapshot!==t||s||No!==null&&!!(No.memoizedState.tag&1),Es(e?9:8,{destroy:void 0},cs.bind(null,r,a,n,t),null),e){if(r.flags|=2048,Ju===null)throw Error(i(349));o||jo&127||ss(r,t,n)}return n}function ss(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=$.updateQueue,t===null?(t=Qo(),$.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function cs(e,t,n,r){t.value=n,t.getSnapshot=r,us(t)&&ds(e)}function ls(e,t,n){return n(function(){us(t)&&ds(e)})}function us(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!kr(e,n)}catch{return!0}}function ds(e){var t=hi(e,2);t!==null&&Md(t,e,2)}function fs(e){var t=Xo();if(typeof e==`function`){var n=e;if(e=n(),Io){Ue(!0);try{n()}finally{Ue(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ns,lastRenderedState:e},t}function ps(e,t,n,r){return e.baseState=n,is(e,Mo,typeof r==`function`?r:ns)}function ms(e,t,n,r,a){if(nc(e))throw Error(i(485));if(e=t.action,e!==null){var o={payload:a,action:e,next:null,isTransition:!0,status:`pending`,value:null,reason:null,listeners:[],then:function(e){o.listeners.push(e)}};U.T===null?o.isTransition=!1:n(!0),r(o),n=t.pending,n===null?(o.next=t.pending=o,hs(t,o)):(o.next=n.next,t.pending=n.next=o)}}function hs(e,t){var n=t.action,r=t.payload,i=e.state;if(t.isTransition){var a=U.T,o={};o.types=a===null?null:a.types,U.T=o;try{var s=n(i,r),c=U.S;c!==null&&c(o,s),gs(e,t,s)}catch(n){vs(e,t,n)}finally{a!==null&&o.types!==null&&(a.types=o.types),U.T=a}}else try{a=n(i,r),gs(e,t,a)}catch(n){vs(e,t,n)}}function gs(e,t,n){typeof n==`object`&&n&&typeof n.then==`function`?n.then(function(n){_s(e,t,n)},function(n){return vs(e,t,n)}):_s(e,t,n)}function _s(e,t,n){t.status=`fulfilled`,t.value=n,ys(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,hs(e,n)))}function vs(e,t,n){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status=`rejected`,t.reason=n,ys(t),t=t.next;while(t!==r)}e.action=null}function ys(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function bs(e,t){return t}function xs(e,t){if(qi){var n=Ju.formState;if(n!==null){a:{var r=$;if(qi){if(Ki){b:{for(var i=Ki,a=Yi;i.nodeType!==8;)if(!a||(i=um(i.nextSibling),i===null)){i=null;break b}a=i.data,i=a===`F!`||a===`F`?i:null}if(i){Ki=um(i.nextSibling),r=i.data===`F!`;break a}}Zi(r)}r=!1}r&&(t=n[0])}}return n=Xo(),n.memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:bs,lastRenderedState:t},n.queue=r,n=$s.bind(null,$,r),r.dispatch=n,r=fs(!1),a=tc.bind(null,$,!1,r.queue),r=Xo(),i={state:t,dispatch:null,action:e,pending:null},r.queue=i,n=ms.bind(null,$,i,a,n),i.dispatch=n,r.memoizedState=e,[t,n,!1]}function Ss(e){return Cs(Zo(),Mo,e)}function Cs(e,t,n){if(t=is(e,t,bs)[0],e=rs(ns)[0],typeof t==`object`&&t&&typeof t.then==`function`)try{var r=$o(t)}catch(e){throw e===Ra?Ba:e}else r=t;t=Zo();var i=t.queue,a=i.dispatch;return n!==t.memoizedState&&($.flags|=2048,Es(9,{destroy:void 0},ws.bind(null,i,n),null)),[r,a,e]}function ws(e,t){e.action=t}function Ts(e){var t=Zo(),n=Mo;if(n!==null)return Cs(t,n,e);Zo(),t=t.memoizedState,n=Zo();var r=n.queue.dispatch;return n.memoizedState=e,[t,r,!1]}function Es(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},t=$.updateQueue,t===null&&(t=Qo(),$.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function Ds(){return Zo().memoizedState}function Os(e,t,n,r){var i=Xo();$.flags|=e,i.memoizedState=Es(1|t,{destroy:void 0},n,r===void 0?null:r)}function ks(e,t,n,r){var i=Zo();r=r===void 0?null:r;var a=i.memoizedState.inst;Mo!==null&&r!==null&&Ho(r,Mo.memoizedState.deps)?i.memoizedState=Es(t,a,n,r):($.flags|=e,i.memoizedState=Es(1|t,a,n,r))}function As(e,t){Os(8390656,8,e,t)}function js(e,t){ks(2048,8,e,t)}function Ms(e){$.flags|=4;var t=$.updateQueue;if(t===null)t=Qo(),$.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function Ns(e){var t=Zo().memoizedState;return Ms({ref:t,nextImpl:e}),function(){if(qu&2)throw Error(i(440));return t.impl.apply(void 0,arguments)}}function Ps(e,t){return ks(4,2,e,t)}function Fs(e,t){return ks(4,4,e,t)}function Is(e,t){if(typeof t==`function`){e=e();var n=t(e);return function(){typeof n==`function`?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Ls(e,t,n){n=n==null?null:n.concat([e]),ks(4,4,Is.bind(null,t,e),n)}function Rs(){}function zs(e,t){var n=Zo();t=t===void 0?null:t;var r=n.memoizedState;return t!==null&&Ho(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Bs(e,t){var n=Zo();t=t===void 0?null:t;var r=n.memoizedState;if(t!==null&&Ho(t,r[1]))return r[0];if(r=e(),Io){Ue(!0);try{e()}finally{Ue(!1)}}return n.memoizedState=[r,t],r}function Vs(e,t,n){return n===void 0||jo&1073741824&&!(Xu&261930)?e.memoizedState=t:(e.memoizedState=n,e=Ad(),$.lanes|=e,id|=e,n)}function Hs(e,t,n,r){return kr(n,t)?n:ho.current===null?!(jo&106)||jo&1073741824&&!(Xu&261930)?(wc=!0,e.memoizedState=n):(e=Ad(),$.lanes|=e,id|=e,t):(e=Vs(e,n,r),kr(e,t)||(wc=!0),e)}function Us(e,t,n,r,i){var a=W.p;W.p=a!==0&&8>a?a:8;var o=U.T,s={};s.types=o===null?null:o.types,U.T=s,tc(e,!1,t,n);try{var c=i(),l=U.S;l!==null&&l(s,c),typeof c==`object`&&c&&typeof c.then==`function`?ec(e,t,Ma(c,r),kd(e)):ec(e,t,r,kd(e))}catch(n){ec(e,t,{then:function(){},status:`rejected`,reason:n},kd())}finally{W.p=a,o!==null&&s.types!==null&&(o.types=s.types),U.T=o}}function Ws(){}function Gs(e,t,n,r){if(e.tag!==5)throw Error(i(476));var a=Ks(e).queue;Us(e,a,t,le,n===null?Ws:function(){return qs(e),n(r)})}function Ks(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:le,baseState:le,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ns,lastRenderedState:le},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ns,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function qs(e){var t=Ks(e);t.next===null&&(t=e.alternate.memoizedState),ec(e,t.next.queue,{},kd())}function Js(){return ma(ch)}function Ys(){return Zo().memoizedState}function Xs(){return Zo().memoizedState}function Zs(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=kd();e=ao(n);var r=oo(t,e,n);r!==null&&(Md(r,t,n),so(r,t,n)),t={cache:xa()},e.payload=t;return}t=t.return}}function Qs(e,t,n){var r=kd();n={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},nc(e)?rc(t,n):(n=mi(e,t,n,r),n!==null&&(Md(n,e,r),ic(n,t,r)))}function $s(e,t,n){ec(e,t,n,kd())}function ec(e,t,n,r){var i={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(nc(e))rc(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,kr(s,o))return pi(e,t,i,0),Ju===null&&fi(),!1}catch{}if(n=mi(e,t,i,r),n!==null)return Md(n,e,r),ic(n,t,r),!0}return!1}function tc(e,t,n,r){if(r={lane:2,revertLane:Nf(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},nc(e)){if(t)throw Error(i(479))}else t=mi(e,n,r,2),t!==null&&Md(t,e,2)}function nc(e){var t=e.alternate;return e===$||t!==null&&t===$}function rc(e,t){Fo=Po=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function ic(e,t,n){if(n&4194048){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,st(e,n)}}var ac={readContext:ma,use:es,useCallback:Vo,useContext:Vo,useEffect:Vo,useImperativeHandle:Vo,useLayoutEffect:Vo,useInsertionEffect:Vo,useMemo:Vo,useReducer:Vo,useRef:Vo,useState:Vo,useDebugValue:Vo,useDeferredValue:Vo,useTransition:Vo,useSyncExternalStore:Vo,useId:Vo,useHostTransitionStatus:Vo,useFormState:Vo,useActionState:Vo,useOptimistic:Vo,useMemoCache:Vo,useCacheRefresh:Vo,useEffectEvent:Vo},oc={readContext:ma,use:es,useCallback:function(e,t){return Xo().memoizedState=[e,t===void 0?null:t],e},useContext:ma,useEffect:As,useImperativeHandle:function(e,t,n){n=n==null?null:n.concat([e]),Os(4194308,4,Is.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Os(4194308,4,e,t)},useInsertionEffect:function(e,t){Os(4,2,e,t)},useMemo:function(e,t){var n=Xo();t=t===void 0?null:t;var r=e();if(Io){Ue(!0);try{e()}finally{Ue(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=Xo();if(n!==void 0){var i=n(t);if(Io){Ue(!0);try{n(t)}finally{Ue(!1)}}}else i=t;return r.memoizedState=r.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},r.queue=e,e=e.dispatch=Qs.bind(null,$,e),[r.memoizedState,e]},useRef:function(e){var t=Xo();return e={current:e},t.memoizedState=e},useState:function(e){e=fs(e);var t=e.queue,n=$s.bind(null,$,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:Rs,useDeferredValue:function(e,t){return Vs(Xo(),e,t)},useTransition:function(){var e=fs(!1);return e=Us.bind(null,$,e.queue,!0,!1),Xo().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=$,a=Xo();if(qi){if(n===void 0)throw Error(i(407));n=n()}else{if(n=t(),Ju===null)throw Error(i(349));Xu&127||ss(r,t,n)}a.memoizedState=n;var o={value:n,getSnapshot:t};return a.queue=o,As(ls.bind(null,r,o,e),[e]),r.flags|=2048,Es(9,{destroy:void 0},cs.bind(null,r,o,n,t),null),n},useId:function(){var e=Xo(),t=Ju.identifierPrefix;if(qi){var n=zi,r=Ri;n=(r&~(1<<32-We(r)-1)).toString(32)+n,t=`_`+t+`R_`+n,n=Lo++,0<n&&(t+=`H`+n.toString(32)),t+=`_`}else n=Bo++,t=`_`+t+`r_`+n.toString(32)+`_`;return e.memoizedState=t},useHostTransitionStatus:Js,useFormState:xs,useActionState:xs,useOptimistic:function(e){var t=Xo();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=tc.bind(null,$,!0,n),n.dispatch=t,[e,t]},useMemoCache:ts,useCacheRefresh:function(){return Xo().memoizedState=Zs.bind(null,$)},useEffectEvent:function(e){var t=Xo(),n={impl:e};return t.memoizedState=n,function(){if(qu&2)throw Error(i(440));return n.impl.apply(void 0,arguments)}}},sc={readContext:ma,use:es,useCallback:zs,useContext:ma,useEffect:js,useImperativeHandle:Ls,useInsertionEffect:Ps,useLayoutEffect:Fs,useMemo:Bs,useReducer:rs,useRef:Ds,useState:function(){return rs(ns)},useDebugValue:Rs,useDeferredValue:function(e,t){return Hs(Zo(),Mo.memoizedState,e,t)},useTransition:function(){var e=rs(ns)[0],t=Zo().memoizedState;return[typeof e==`boolean`?e:$o(e),t]},useSyncExternalStore:os,useId:Ys,useHostTransitionStatus:Js,useFormState:Ss,useActionState:Ss,useOptimistic:function(e,t){return ps(Zo(),Mo,e,t)},useMemoCache:ts,useCacheRefresh:Xs,useEffectEvent:Ns},cc={readContext:ma,use:es,useCallback:zs,useContext:ma,useEffect:js,useImperativeHandle:Ls,useInsertionEffect:Ps,useLayoutEffect:Fs,useMemo:Bs,useReducer:as,useRef:Ds,useState:function(){return as(ns)},useDebugValue:Rs,useDeferredValue:function(e,t){var n=Zo();return Mo===null?Vs(n,e,t):Hs(n,Mo.memoizedState,e,t)},useTransition:function(){var e=as(ns)[0],t=Zo().memoizedState;return[typeof e==`boolean`?e:$o(e),t]},useSyncExternalStore:os,useId:Ys,useHostTransitionStatus:Js,useFormState:Ts,useActionState:Ts,useOptimistic:function(e,t){var n=Zo();return Mo===null?(n.baseState=e,[e,n.queue.dispatch]):ps(n,Mo,e,t)},useMemoCache:ts,useCacheRefresh:Xs,useEffectEvent:Ns};function lc(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:D({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var uc={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=kd(),i=ao(r);i.payload=t,n!=null&&(i.callback=n),t=oo(e,i,r),t!==null&&(Md(t,e,r),so(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=kd(),i=ao(r);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=oo(e,i,r),t!==null&&(Md(t,e,r),so(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=kd(),r=ao(n);r.tag=2,t!=null&&(r.callback=t),t=oo(e,r,n),t!==null&&(Md(t,e,n),so(t,e,n))}};function dc(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate==`function`?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!Ar(n,r)||!Ar(i,a):!0}function fc(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps==`function`&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==`function`&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&uc.enqueueReplaceState(t,t.state,null)}function pc(e,t){var n=t;if(`ref`in t)for(var r in n={},t)r!==`ref`&&(n[r]=t[r]);if(e=e.defaultProps)for(var i in n===t&&(n=D({},n)),e)n[i]===void 0&&(n[i]=e[i]);return n}function mc(e){ci(e)}function hc(e){console.error(e)}function gc(e){ci(e)}function _c(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(e){setTimeout(function(){throw e})}}function vc(e,t,n){try{var r=e.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(e){setTimeout(function(){throw e})}}function yc(e,t,n){return n=ao(n),n.tag=3,n.payload={element:null},n.callback=function(){_c(e,t)},n}function bc(e){return e=ao(e),e.tag=3,e}function xc(e,t,n,r){var i=n.type.getDerivedStateFromError;if(typeof i==`function`){var a=r.value;e.payload=function(){return i(a)},e.callback=function(){vc(t,n,r)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch==`function`&&(e.callback=function(){vc(t,n,r),typeof i!=`function`&&(gd===null?gd=new Set([this]):gd.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:e===null?``:e})})}function Sc(e,t,n,r,a){if(n.flags|=32768,typeof r==`object`&&r&&typeof r.then==`function`){if(t=n.alternate,t!==null&&da(t,n,a,!0),n=bo.current,n!==null){switch(n.tag){case 31:case 13:case 19:return xo===null?Wd():n.alternate===null&&rd===0&&(rd=3),n.flags&=-257,n.flags|=65536,n.lanes=a,r===Va?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([r]):t.add(r),pf(e,r,a)),!1;case 22:return n.flags|=65536,r===Va?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([r]):n.add(r)),pf(e,r,a)),!1}throw Error(i(435,n.tag))}return pf(e,r,a),Wd(),!1}if(qi)return t=bo.current,t===null?(r!==Xi&&(t=Error(i(423),{cause:r}),ra(Ai(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,r=Ai(r,n),a=yc(e.stateNode,r,a),co(e,a),rd!==4&&(rd=2)):(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=a,r!==Xi&&(e=Error(i(422),{cause:r}),ra(Ai(e,n)))),!1;var o=Error(i(520),{cause:r});if(o=Ai(o,n),ld===null?ld=[o]:ld.push(o),rd!==4&&(rd=2),t===null)return!0;r=Ai(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=yc(n.stateNode,r,e),co(n,e),!1;case 1:if(t=n.type,o=n.stateNode,!(n.flags&128)&&(typeof t.getDerivedStateFromError==`function`||o!==null&&typeof o.componentDidCatch==`function`&&(gd===null||!gd.has(o))))return n.flags|=65536,a&=-a,n.lanes|=a,a=bc(a),xc(a,e,n,r),co(n,a),!1;break;case 22:if(n.memoizedState!==null)return n.flags|=65536,!1}n=n.return}while(n!==null);return!1}var Cc=Error(i(461)),wc=!1;function Tc(e,t,n,r){t.child=e===null?to(t,null,n,r):eo(t,e.child,n,r)}function Ec(e,t,n,r,i){n=n.render;var a=t.ref;if(`ref`in r){var o={};for(var s in r)s!==`ref`&&(o[s]=r[s])}else o=r;return pa(t),r=Uo(e,t,n,o,a,i),s=qo(),e!==null&&!wc?(Jo(e,t,i),el(e,t,i)):(qi&&s&&Hi(t),t.flags|=1,Tc(e,t,r,i),t.child)}function Dc(e,t,n,r,i){if(e===null){var a=n.type;return typeof a==`function`&&!xi(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,Oc(e,t,a,r,i)):(e=wi(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!tl(e,i)){var o=a.memoizedProps;if(n=n.compare,n=n===null?Ar:n,n(o,r)&&e.ref===t.ref)return el(e,t,i)}return t.flags|=1,e=Si(a,r),e.ref=t.ref,e.return=t,t.child=e}function Oc(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(Ar(a,r)&&e.ref===t.ref){if(wc=!1,t.pendingProps=r=a,tl(e,i))e.flags&131072&&(wc=!0);else return t.lanes=e.lanes,el(e,t,i)}}return Ic(e,t,n,r,i)}function kc(e,t,n,r){var i=r.children,a=e===null?null:e.memoizedState;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode===`hidden`){if(t.flags&128){if(a=a===null?n:a.baseLanes|n,e!==null){for(r=t.child=e.child,i=0;r!==null;)i=i|r.lanes|r.childLanes,r=r.sibling;r=i&~a}else r=0,t.child=null;return jc(e,t,a,n,r)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Ia(t,a===null?null:a.cachePool),a===null?vo():_o(t,a),wo(t);else return r=t.lanes=536870912,jc(e,t,a===null?n:a.baseLanes|n,n,r)}else a===null?(e!==null&&Ia(t,null),vo(),To()):(Ia(t,a.cachePool),_o(t,a),To(),t.memoizedState=null);return Tc(e,t,i,n),t.child}function Ac(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function jc(e,t,n,r,i){var a=Fa();return a=a===null?null:{parent:ba._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&Ia(t,null),vo(),wo(t),e!==null&&da(e,t,r,!0),t.childLanes=i,null}function Mc(e,t){return t=Gc({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function Nc(e,t,n){return eo(t,e.child,null,n),e=Mc(t,t.pendingProps),e.flags|=2,Eo(t),t.memoizedState=null,e}function Pc(e,t,n){var r=t.pendingProps,a=!!(t.flags&128);if(t.flags&=-129,e===null){if(qi){if(r.mode===`hidden`)return e=Mc(t,r),t.lanes=536870912,e.memoizedState={baseLanes:0,cachePool:null},Ac(null,e);if(Co(t),(e=Ki)?(e=om(e,Yi),e=e!==null&&e.data===`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Li===null?null:{id:Ri,overflow:zi},retryLane:536870912,hydrationErrors:null},n=Di(e),n.return=t,t.child=n,Gi=t,Ki=null)):e=null,e===null)throw Zi(t);return t.lanes=536870912,null}return Mc(t,r)}var o=e.memoizedState;if(o!==null){var s=o.dehydrated;if(Co(t),a){if(t.flags&256)t.flags&=-257,t=Nc(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(i(558))}else if(wc||da(e,t,n,!1),a=(n&e.childLanes)!==0,wc||a){if(ho.current===null){if(r=Ju,r!==null&&(s=ct(r,n),s!==0&&s!==o.retryLane))throw o.retryLane=s,hi(e,s),Md(r,e,s),Cc;Wd()}t=Nc(e,t,n)}else e=o.treeContext,Ki=um(s.nextSibling),Gi=t,qi=!0,Ji=null,Yi=!1,e!==null&&Wi(t,e),t=Mc(t,r),t.flags|=134221824;return t}return e=Si(e.child,{mode:r.mode,children:r.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Fc(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!=`function`&&typeof n!=`object`)throw Error(i(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function Ic(e,t,n,r,i){return pa(t),n=Uo(e,t,n,r,void 0,i),r=qo(),e!==null&&!wc?(Jo(e,t,i),el(e,t,i)):(qi&&r&&Hi(t),t.flags|=1,Tc(e,t,n,i),t.child)}function Lc(e,t,n,r,i,a){return pa(t),t.updateQueue=null,n=Go(t,r,n,i),Wo(e),r=qo(),e!==null&&!wc?(Jo(e,t,a),el(e,t,a)):(qi&&r&&Hi(t),t.flags|=1,Tc(e,t,n,a),t.child)}function Rc(e,t,n,r,i){if(pa(t),t.stateNode===null){var a=vi,o=n.contextType;typeof o==`object`&&o&&(a=ma(o)),a=new n(r,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=uc,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=r,a.state=t.memoizedState,a.refs={},ro(t),o=n.contextType,a.context=typeof o==`object`&&o?ma(o):vi,a.state=t.memoizedState,o=n.getDerivedStateFromProps,typeof o==`function`&&(lc(t,n,o,r),a.state=t.memoizedState),typeof n.getDerivedStateFromProps==`function`||typeof a.getSnapshotBeforeUpdate==`function`||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(o=a.state,typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount(),o!==a.state&&uc.enqueueReplaceState(a,a.state,null),fo(t,r,a,i),uo(),a.state=t.memoizedState),typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!0}else if(e===null){a=t.stateNode;var s=t.memoizedProps,c=pc(n,s);a.props=c;var l=a.context,u=n.contextType;o=vi,typeof u==`object`&&u&&(o=ma(u));var d=n.getDerivedStateFromProps;u=typeof d==`function`||typeof a.getSnapshotBeforeUpdate==`function`,s=t.pendingProps!==s,u||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(s||l!==o)&&fc(t,a,r,o),no=!1;var f=t.memoizedState;a.state=f,fo(t,r,a,i),uo(),l=t.memoizedState,s||f!==l||no?(typeof d==`function`&&(lc(t,n,d,r),l=t.memoizedState),(c=no||dc(t,n,c,r,f,l,o))?(u||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount==`function`&&(t.flags|=4194308)):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=o,r=c):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,io(e,t),o=t.memoizedProps,u=pc(n,o),a.props=u,d=t.pendingProps,f=a.context,l=n.contextType,c=vi,typeof l==`object`&&l&&(c=ma(l)),s=n.getDerivedStateFromProps,(l=typeof s==`function`||typeof a.getSnapshotBeforeUpdate==`function`)||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(o!==d||f!==c)&&fc(t,a,r,c),no=!1,f=t.memoizedState,a.state=f,fo(t,r,a,i),uo();var p=t.memoizedState;o!==d||f!==p||no||e!==null&&e.dependencies!==null&&fa(e.dependencies)?(typeof s==`function`&&(lc(t,n,s,r),p=t.memoizedState),(u=no||dc(t,n,u,r,f,p,c)||e!==null&&e.dependencies!==null&&fa(e.dependencies))?(l||typeof a.UNSAFE_componentWillUpdate!=`function`&&typeof a.componentWillUpdate!=`function`||(typeof a.componentWillUpdate==`function`&&a.componentWillUpdate(r,p,c),typeof a.UNSAFE_componentWillUpdate==`function`&&a.UNSAFE_componentWillUpdate(r,p,c)),typeof a.componentDidUpdate==`function`&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate==`function`&&(t.flags|=1024)):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),a.props=r,a.state=p,a.context=c,r=u):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return a=r,Fc(e,t),r=!!(t.flags&128),a||r?(a=t.stateNode,n=r&&typeof n.getDerivedStateFromError!=`function`?null:a.render(),t.flags|=1,e!==null&&r?(t.child=eo(t,e.child,null,i),t.child=eo(t,null,n,i)):Tc(e,t,n,i),t.memoizedState=a.state,e=t.child):e=el(e,t,i),e}function zc(e,t,n,r){return ta(),t.flags|=256,Tc(e,t,n,r),t.child}var Bc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Vc(e){return{baseLanes:e,cachePool:La()}}function Hc(e,t,n){return e=e===null?0:e.childLanes&~n,t&&(e|=sd),e}function Uc(e,t,n){var r=t.pendingProps,i=!1,a=!!(t.flags&128),o;if((o=a)||(o=e!==null&&e.memoizedState===null?!1:!!(Do.current&2)),o&&(i=!0,t.flags&=-129),o=!!(t.flags&32),t.flags&=-33,e===null){if(qi){if(i?So(t):To(),(e=Ki)?(e=om(e,Yi),e=e!==null&&e.data!==`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Li===null?null:{id:Ri,overflow:zi},retryLane:536870912,hydrationErrors:null},n=Di(e),n.return=t,t.child=n,Gi=t,Ki=null)):e=null,e===null)throw Zi(t);return t.lanes=cm(e)?32:536870912,null}return a=r.children,r=r.fallback,i?(To(),i=t.mode,a=Gc({mode:`hidden`,children:a},i),r=Ti(r,i,n,null),a.return=t,r.return=t,a.sibling=r,t.child=a,r=t.child,r.memoizedState=Vc(n),r.childLanes=Hc(e,o,n),t.memoizedState=Bc,Ac(null,r)):(So(t),Wc(t,a))}var s=e.memoizedState;if(s!==null){var c=s.dehydrated;if(c!==null)return qc(e,t,a,o,r,c,s,n)}return i?(To(),i=r.fallback,a=t.mode,s=e.child,c=s.sibling,r=Si(s,{mode:`hidden`,children:r.children}),r.subtreeFlags=s.subtreeFlags&1206910976,c===null?(i=Ti(i,a,n,null),i.flags|=2):i=Si(c,i),i.return=t,r.return=t,r.sibling=i,t.child=r,Ac(null,r),r=t.child,i=e.child.memoizedState,i===null?i=Vc(n):(a=i.cachePool,a===null?a=La():(s=ba._currentValue,a=a.parent===s?a:{parent:s,pool:s}),i={baseLanes:i.baseLanes|n,cachePool:a}),r.memoizedState=i,r.childLanes=Hc(e,o,n),t.memoizedState=Bc,Ac(e.child,r)):(So(t),n=e.child,e=n.sibling,n=Si(n,{mode:`visible`,children:r.children}),n.return=t,n.sibling=null,e!==null&&(o=t.deletions,o===null?(t.deletions=[e],t.flags|=16):o.push(e)),t.child=n,t.memoizedState=null,n)}function Wc(e,t){return t=Gc({mode:`visible`,children:t},e.mode),t.return=e,e.child=t}function Gc(e,t){return e=bi(22,e,null,t),e.lanes=0,e}function Kc(e,t,n){return eo(t,e.child,null,n),e=Wc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function qc(e,t,n,r,a,o,s,c){if(n)return t.flags&256?(So(t),t.flags&=-257,Kc(e,t,c)):t.memoizedState===null?(To(),o=a.fallback,s=t.mode,a=Gc({mode:`visible`,children:a.children},s),o=Ti(o,s,c,null),o.flags|=2,a.return=t,o.return=t,a.sibling=o,t.child=a,eo(t,e.child,null,c),a=t.child,a.memoizedState=Vc(c),a.childLanes=Hc(e,r,c),t.memoizedState=Bc,Ac(null,a)):(To(),t.child=e.child,t.flags|=128,null);if(So(t),cm(o)){if(r=o.nextSibling&&o.nextSibling.dataset,r)var l=r.dgst;return r=l,r!==``&&(a=Error(i(419)),a.stack=``,a.digest=r,ra({value:a,source:null,stack:null})),Kc(e,t,c)}if(wc||da(e,t,c,!1),r=(c&e.childLanes)!==0,wc||r){if(ho.current!==null)return Kc(e,t,c);if(r=Ju,r!==null&&(a=ct(r,c),a!==0&&a!==s.retryLane))throw s.retryLane=a,hi(e,a),Md(r,e,a),Cc;return sm(o)||Wd(),Kc(e,t,c)}return sm(o)?(t.flags|=192,t.child=e.child,null):(e=s.treeContext,Ki=um(o.nextSibling),Gi=t,qi=!0,Ji=null,Yi=!1,e!==null&&Wi(t,e),t=Wc(t,a.children),t.flags|=134221824,t)}function Jc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),la(e.return,t,n)}function Yc(e){for(var t=null;e!==null;){var n=e.alternate;n!==null&&Ao(n)===null&&(t=e),e=e.sibling}return t}function Xc(e,t,n,r,i,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,treeForkCount:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i,o.treeForkCount=a)}function Zc(e){var t=e.child;for(e.child=null;t!==null;){var n=t.sibling;t.sibling=e.child,e.child=t,t=n}}function Qc(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;r=r.children;var o=Do.current;if(t.flags&128)return Oo(t,o),null;var s=!!(o&2);if(s?(o=o&1|2,t.flags|=128):o&=1,Oo(t,o),i===`backwards`&&e!==null?(Zc(e),Tc(e,t,r,n),Zc(e)):Tc(e,t,r,n),r=qi?Pi:0,!s&&e!==null&&e.flags&128)a:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Jc(e,n,t);else if(e.tag===19)Jc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break a;for(;e.sibling===null;){if(e.return===null||e.return===t)break a;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case`backwards`:n=Yc(t.child),n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null,Zc(t)),Xc(t,!0,i,null,a,r);break;case`unstable_legacy-backwards`:for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Ao(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Xc(t,!0,n,null,a,r);break;case`together`:Xc(t,!1,null,null,void 0,r);break;case`independent`:t.memoizedState=null;break;default:n=Yc(t.child),n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Xc(t,!1,i,n,a,r)}return t.child}function $c(e,t,n){var r=t.pendingProps;return sa(t,t.type,r.value),Tc(e,t,r.children,n),t.child}function el(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),id|=t.lanes,(n&t.childLanes)===0){if(e!==null){if(da(e,t,n,!1),(n&t.childLanes)===0)return null}else return null}if(e!==null&&t.child!==e.child)throw Error(i(153));if(t.child!==null){for(e=t.child,n=Si(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Si(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function tl(e,t){return(e.lanes&t)!==0||(e=e.dependencies,!!(e!==null&&fa(e)))}function nl(e,t,n){switch(t.tag){case 3:ve(t,t.stateNode.containerInfo),sa(t,ba,e.memoizedState.cache),ta();break;case 27:case 5:ye(t);break;case 4:ve(t,t.stateNode.containerInfo);break;case 10:sa(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Co(t),null;break;case 13:var r=t.memoizedState;if(r!==null){if(r.dehydrated!==null)return So(t),t.flags|=128,null;r=da(e,t,n,!1);var i=t.child.childLanes;return r||(n&i)!==0?Uc(e,t,n):(So(t),e=el(e,t,n),e===null?null:e.sibling)}So(t);break;case 19:if(t.flags&128)return Qc(e,t,n);if(i=!!(e.flags&128),r=(n&t.childLanes)!==0,r||=(da(e,t,n,!1),(n&t.childLanes)!==0),i){if(r)return Qc(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Oo(t,Do.current),r)break;return null;case 22:return t.lanes=0,kc(e,t,n,t.pendingProps);case 24:sa(t,ba,e.memoizedState.cache)}return el(e,t,n)}function rl(e,t,n){if(e!==null){if(e.memoizedProps!==t.pendingProps)wc=!0;else{if(!tl(e,n)&&!(t.flags&128))return wc=!1,nl(e,t,n);wc=!!(e.flags&131072)}}else wc=!1,qi&&t.flags&1048576&&Vi(t,Pi,t.index);switch(t.lanes=0,t.tag){case 16:a:{var r=t.pendingProps;if(e=Wa(t.elementType),t.type=e,typeof e==`function`)xi(e)?(r=pc(e,r),t.tag=1,t=Rc(null,t,e,r,n)):(t.tag=0,t=Ic(null,t,e,r,n));else{if(e!=null){var a=e.$$typeof;if(a===I){t.tag=11,t=Ec(null,t,e,r,n);break a}if(a===B){t.tag=14,t=Dc(null,t,e,r,n);break a}if(a===F){t.tag=10,t.type=e,t=$c(null,t,n);break a}}throw t=se(e)||e,Error(i(306,t,``))}}return t;case 0:return Ic(e,t,t.type,t.pendingProps,n);case 1:return r=t.type,a=pc(r,t.pendingProps),Rc(e,t,r,a,n);case 3:a:{if(ve(t,t.stateNode.containerInfo),e===null)throw Error(i(387));r=t.pendingProps;var o=t.memoizedState;a=o.element,io(e,t),fo(t,r,null,n);var s=t.memoizedState;if(r=s.cache,sa(t,ba,r),r!==o.cache&&ua(t,[ba],n,!0),uo(),r=s.element,o.isDehydrated){if(o={element:r,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){t=zc(e,t,r,n);break a}if(r!==a){a=Ai(Error(i(424)),t),ra(a),t=zc(e,t,r,n);break a}switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName===`HTML`?e.ownerDocument.body:e}for(Ki=um(e.firstChild),Gi=t,qi=!0,Ji=null,Yi=!0,n=to(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|134221824,n=n.sibling}else{if(ta(),r===a){t=el(e,t,n);break a}Tc(e,t,r,n)}t=t.child}return t;case 26:return Fc(e,t),e===null?(n=Pm(t.type,null,t.pendingProps,null))?t.memoizedState=n:qi||(t.stateNode=pp(t.type,t.pendingProps,ge.current,t)):t.memoizedState=Pm(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return ye(t),e===null&&qi&&(r=t.stateNode=gm(t.type,t.pendingProps,ge.current),Gi=t,Yi=!0,a=Ki,Cp(t.type)?(dm=a,Ki=um(r.firstChild)):Ki=a),Tc(e,t,t.pendingProps.children,n),Fc(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&qi&&((a=r=Ki)&&(r=im(r,t.type,t.pendingProps,Yi),r===null?a=!1:(t.stateNode=r,Gi=t,Ki=um(r.firstChild),Yi=!1,a=!0)),a||Zi(t)),ye(t),a=t.type,o=t.pendingProps,s=e===null?null:e.memoizedProps,r=o.children,mp(a,o)?r=null:s!==null&&mp(a,s)&&(t.flags|=32),t.memoizedState!==null&&(a=Uo(e,t,Ko,null,null,n),ch._currentValue=a),Fc(e,t),Tc(e,t,r,n),t.child;case 6:return e===null&&qi&&((e=n=Ki)&&(n=am(n,t.pendingProps,Yi),n===null?e=!1:(t.stateNode=n,Gi=t,Ki=null,e=!0)),e||Zi(t)),null;case 13:return Uc(e,t,n);case 4:return ve(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=eo(t,null,r,n):Tc(e,t,r,n),t.child;case 11:return Ec(e,t,t.type,t.pendingProps,n);case 7:return r=t.pendingProps,Fc(e,t),Tc(e,t,r,n),t.child;case 8:return Tc(e,t,t.pendingProps.children,n),t.child;case 12:return Tc(e,t,t.pendingProps.children,n),t.child;case 10:return $c(e,t,n);case 9:return a=t.type._context,r=t.pendingProps.children,pa(t),a=ma(a),r=r(a),t.flags|=1,Tc(e,t,r,n),t.child;case 14:return Dc(e,t,t.type,t.pendingProps,n);case 15:return Oc(e,t,t.type,t.pendingProps,n);case 19:return Qc(e,t,n);case 31:return Pc(e,t,n);case 22:return kc(e,t,n,t.pendingProps);case 24:return pa(t),r=ma(ba),e===null?(a=Fa(),a===null&&(a=Ju,o=xa(),a.pooledCache=o,o.refCount++,o!==null&&(a.pooledCacheLanes|=n),a=o),t.memoizedState={parent:r,cache:a},ro(t),sa(t,ba,a)):((e.lanes&n)!==0&&(io(e,t),fo(t,null,null,n),uo()),a=e.memoizedState,o=t.memoizedState,a.parent===r?(r=o.cache,sa(t,ba,r),r!==a.cache&&ua(t,[ba],n,!0)):(a={parent:r,cache:r},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),sa(t,ba,r))),Tc(e,t,t.pendingProps.children,n),t.child;case 30:return t.stateNode===null&&(t.stateNode={autoName:null,paired:null,clones:null,ref:null}),r=t.pendingProps,r.name!=null&&r.name!==`auto`?t.flags|=e===null?18882560:18874368:qi&&Hi(t),e!==null&&e.memoizedProps.name!==r.name?t.flags|=4194816:Fc(e,t),Tc(e,t,r.children,n),t.child;case 29:throw t.pendingProps}throw Error(i(156,t.tag))}function il(e){e.flags|=4}function al(e,t,n,r,i){var a;if((a=!!(e.mode&32))&&(a=n===null?Ym(t,r):Ym(t,r)&&(r.src!==n.src||r.srcSet!==n.srcSet)),a){if(e.flags|=16777216,(i&335544128)===i){if(e.stateNode.complete)e.flags|=8192;else if(Vd())e.flags|=8192;else throw Ga=Va,za}}else e.flags&=-16777217}function ol(e,t){if(t.type!==`stylesheet`||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!Xm(t)){if(Vd())e.flags|=8192;else throw Ga=Va,za}}function sl(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag===22?536870912:nt(),e.lanes|=t,cd|=t)}function cl(e,t){if(!qi)switch(e.tailMode){case`visible`:break;case`collapsed`:for(var n=e.tail,r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null;break;default:for(t=e.tail,n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null}}function ll(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&1206910976,r|=i.flags&1206910976,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function ul(e,t,n){var r=t.pendingProps;switch(Ui(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ll(t),null;case 1:return ll(t),null;case 3:return n=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),ca(ba),K(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(ea(t)?il(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,na())),ll(t),null;case 26:var a=t.type,o=t.memoizedState;return e===null?(il(t),o===null?(ll(t),al(t,a,null,r,n)):(ll(t),ol(t,o))):o?o===e.memoizedState?(ll(t),t.flags&=-16777217):(il(t),ll(t),ol(t,o)):(e=e.memoizedProps,e!==r&&il(t),ll(t),al(t,a,e,r,n)),null;case 27:if(be(t),n=ge.current,a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&il(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return ll(t),t.subtreeFlags&=-33554433,null}e=me.current,ea(t)?Qi(t,e):(e=gm(a,r,n),t.stateNode=e,il(t))}return ll(t),t.subtreeFlags&=-33554433,null;case 5:if(be(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&il(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return ll(t),t.subtreeFlags&=-33554433,null}if(o=me.current,ea(t))Qi(t,o);else{var s=up(ge.current);switch(o){case 1:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case 2:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;default:switch(a){case`svg`:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case`math`:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;case`script`:o=s.createElement(`div`),o.innerHTML=`<script><\/script>`,o=o.removeChild(o.firstChild);break;case`select`:o=typeof r.is==`string`?s.createElement(`select`,{is:r.is}):s.createElement(`select`),r.multiple?o.multiple=!0:r.size&&(o.size=r.size);break;default:o=typeof r.is==`string`?s.createElement(a,{is:r.is}):s.createElement(a)}}o[Y]=t,o[X]=r;a:for(s=t.child;s!==null;){if(s.tag===5||s.tag===6)o.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break a;for(;s.sibling===null;){if(s.return===null||s.return===t)break a;s=s.return}s.sibling.return=s.return,s=s.sibling}t.stateNode=o;a:switch(rp(o,a,r),a){case`button`:case`input`:case`select`:case`textarea`:r=!!r.autoFocus;break a;case`img`:r=!0;break a;default:r=!1}r&&il(t)}}return ll(t),t.subtreeFlags&=-33554433,al(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&il(t);else{if(typeof r!=`string`&&t.stateNode===null)throw Error(i(166));if(e=ge.current,ea(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,a=Gi,a!==null)switch(a.tag){case 27:case 5:r=a.memoizedProps}e[Y]=t,e=!!(e.nodeValue===n||r!==null&&!0===r.suppressHydrationWarning||ep(e.nodeValue,n)),e||Zi(t,!0)}else e=up(e).createTextNode(r),e[Y]=t,t.stateNode=e}return ll(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(r=ea(t),n!==null){if(e===null){if(!r)throw Error(i(318));if(e=t.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(557));e[Y]=t}else ta(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ll(t),e=!1}else n=na(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(Eo(t),t):(Eo(t),null);if(t.flags&128)throw Error(i(558))}return ll(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=ea(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(i(318));if(a=t.memoizedState,a=a===null?null:a.dehydrated,!a)throw Error(i(317));a[Y]=t}else ta(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ll(t),a=!1}else a=na(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(Eo(t),t):(Eo(t),null)}return Eo(t),t.flags&128?(t.lanes=n,t):(n=r!==null,e=e!==null&&e.memoizedState!==null,n&&(r=t.child,a=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(a=r.alternate.memoizedState.cachePool.pool),o=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),o!==a&&(r.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),sl(t,t.updateQueue),ll(t),null);case 4:return K(),e===null&&Wf(t.stateNode.containerInfo),t.flags|=67108864,ll(t),null;case 10:return ca(t.type),ll(t),null;case 19:if(ko(t),r=t.memoizedState,r===null)return ll(t),null;if(a=!!(t.flags&128),o=r.rendering,o===null){if(a)cl(r,!1);else{if(rd!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=Ao(e),o!==null){for(t.flags|=128,cl(r,!1),e=o.updateQueue,t.updateQueue=e,sl(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)Ci(n,e),n=n.sibling;return Oo(t,Do.current&1|2),qi&&Bi(t,r.treeForkCount),t.child}e=e.sibling}r.tail!==null&&Ne()>md&&(t.flags|=128,a=!0,cl(r,!1),t.lanes=4194304)}}else{if(!a){if(e=Ao(o),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,sl(t,e),cl(r,!0),r.tail===null&&r.tailMode!==`collapsed`&&r.tailMode!==`visible`&&!o.alternate&&!qi)return ll(t),null}else 2*Ne()-r.renderingStartTime>md&&n!==536870912&&(t.flags|=128,a=!0,cl(r,!1),t.lanes=4194304)}r.isBackwards?(o.sibling=t.child,t.child=o):(e=r.last,e===null?t.child=o:e.sibling=o,r.last=o)}if(r.tail!==null){e=r.tail;a:{for(n=e;n!==null;){if(n.alternate!==null){n=!1;break a}n=n.sibling}n=!0}return r.rendering=e,r.tail=e.sibling,r.renderingStartTime=Ne(),e.sibling=null,o=Do.current,o=a?o&1|2:o&1,r.tailMode===`visible`||r.tailMode===`collapsed`||!n||qi?Oo(t,o):(n=o,G(bo,t),G(Do,n),xo===null&&(xo=t)),qi&&Bi(t,r.treeForkCount),e}return ll(t),null;case 22:case 23:return Eo(t),yo(),r=t.memoizedState!==null,e===null?r&&(t.flags|=8192):e.memoizedState!==null!==r&&(t.flags|=8192),r?n&536870912&&!(t.flags&128)&&(ll(t),t.subtreeFlags&6&&(t.flags|=8192)):ll(t),n=t.updateQueue,n!==null&&sl(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),e!==null&&pe(Pa),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),ca(ba),ll(t),null;case 25:return null;case 30:return t.flags|=33554432,ll(t),null}throw Error(i(156,t.tag))}function dl(e,t){switch(Ui(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ca(ba),K(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return be(t),null;case 31:if(t.memoizedState!==null){if(Eo(t),t.alternate===null)throw Error(i(340));ta()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Eo(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(i(340));ta()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ko(t),e=t.flags,e&65536?(t.flags=e&-65537|128,e=t.memoizedState,e!==null&&(e.rendering=null,e.tail=null),t.flags|=4,t):null;case 4:return K(),null;case 10:return ca(t.type),null;case 22:case 23:return Eo(t),yo(),e!==null&&pe(Pa),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return ca(ba),null;case 25:return null;default:return null}}function fl(e,t){switch(Ui(t),t.tag){case 3:ca(ba),K();break;case 26:case 27:case 5:be(t);break;case 4:K();break;case 31:t.memoizedState!==null&&Eo(t);break;case 13:Eo(t);break;case 19:ko(t);break;case 10:ca(t.type);break;case 22:case 23:Eo(t),yo(),e!==null&&pe(Pa);break;case 24:ca(ba)}}function pl(e,t){try{var n=t.updateQueue,r=n===null?null:n.lastEffect;if(r!==null){var i=r.next;n=i;do{if((n.tag&e)===e){r=void 0;var a=n.create,o=n.inst;r=a(),o.destroy=r}n=n.next}while(n!==i)}}catch(e){ff(t,t.return,e)}}function ml(e,t,n){try{var r=t.updateQueue,i=r===null?null:r.lastEffect;if(i!==null){var a=i.next;r=a;do{if((r.tag&e)===e){var o=r.inst,s=o.destroy;if(s!==void 0){o.destroy=void 0,i=t;var c=n,l=s;try{l()}catch(e){ff(i,c,e)}}}r=r.next}while(r!==a)}}catch(e){ff(t,t.return,e)}}function hl(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{mo(t,n)}catch(t){ff(e,e.return,t)}}}function gl(e,t,n){n.props=pc(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(n){ff(e,t,n)}}function _l(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:var i=e.stateNode,a=ai(e.memoizedProps,i);(i.ref===null||i.ref.name!==a)&&(i.ref=Fp(a)),r=i.ref;break;case 7:if(e.stateNode===null){var o=new Ip(e);m(e.child,!1,$p,o,void 0,void 0),e.stateNode=o}r=e.stateNode;break;default:r=e.stateNode}typeof n==`function`?e.refCleanup=n(r):n.current=r}}catch(n){ff(e,t,n)}}function vl(e,t){var n=e.ref,r=e.refCleanup;if(n!==null){if(typeof r==`function`)try{r()}catch(n){ff(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n==`function`)try{n(null)}catch(n){ff(e,t,n)}else n.current=null}}function yl(e,t){if((e.tag===5||e.tag===27||e.tag===6)&&e.alternate===null&&t!==null)for(var n=0;n<t.length;n++)tm(e.stateNode,t[n])}function bl(e){for(var t=e.return;t!==null&&(Cl(t)&&tm(e.stateNode,t.stateNode),!Sl(t));)t=t.return}function xl(e){for(var t=e.return;t!==null&&(Cl(t)&&nm(e.stateNode,t.stateNode),!Sl(t));)t=t.return}function Sl(e){return e.tag===5||e.tag===3||e.tag===27}function Cl(e){return e&&e.tag===7&&e.stateNode!==null}function wl(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{a:switch(t){case`button`:case`input`:case`select`:case`textarea`:n.autoFocus&&r.focus();break a;case`img`:n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(t){ff(e,e.return,t)}}function Tl(e,t,n){try{var r=e.stateNode;ap(r,e.type,n,t),r[X]=t}catch(t){ff(e,e.return,t)}}function El(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Cp(e.type)||e.tag===4}function Dl(e){a:for(;;){for(;e.sibling===null;){if(e.return===null||El(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Cp(e.type)||e.flags&2||e.child===null||e.tag===4)continue a;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ol(e,t,n,r){var i=e.tag;if(i===5||i===6)i=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n).insertBefore(i,t):(t=n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n,t.appendChild(i),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=on)),yl(e,r),Pt=!0;else if(i!==4&&(i===27&&(yl(e,r),r=null,Cp(e.type)&&(n=e.stateNode,t=null)),e=e.child,e!==null))for(Ol(e,t,n,r),e=e.sibling;e!==null;)Ol(e,t,n,r),e=e.sibling}function kl(e,t,n,r){var i=e.tag;if(i===5||i===6)i=e.stateNode,t?n.insertBefore(i,t):n.appendChild(i),yl(e,r),Pt=!0;else if(i!==4&&(i===27&&(yl(e,r),r=null,Cp(e.type)&&(n=e.stateNode)),e=e.child,e!==null))for(kl(e,t,n,r),e=e.sibling;e!==null;)kl(e,t,n,r),e=e.sibling}function Al(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);rp(t,r,n),t[Y]=e,t[X]=n}catch(t){ff(e,e.return,t)}}var jl=!1,Ml=null;function Nl(e){(e.tag===30||e.subtreeFlags&33554432)&&(jl=!0)}var Pl=null;function Fl(){var e=Pl;return Pl=null,e}var Il=0;function Ll(e,t,n,r,i){return Il=0,Rl(e.child,t,n,r,i)}function Rl(e,t,n,r,i){for(var a=!1;e!==null;){if(e.tag===5){var o=e.stateNode;if(r!==null){var s=kp(o);r.push(s),s.view&&(a=!0)}else a||kp(o).view&&(a=!0);jl=!0,Ep(o,Il===0?t:t+`_`+Il,n),Il++}else(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&i||Rl(e.child,t,n,r,i)&&(a=!0));e=e.sibling}return a}function zl(e,t){for(;e!==null;)e.tag===5?Dp(e.stateNode,e.memoizedProps):(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&t||zl(e.child,t)),e=e.sibling}function Bl(e){if(e.subtreeFlags&18874368)for(e=e.child;e!==null;){if((e.tag!==22||e.memoizedState===null)&&(Bl(e),e.tag===30&&e.flags&18874368&&e.stateNode.paired)){var t=e.memoizedProps;if(t.name==null||t.name===`auto`)throw Error(i(544));var n=t.name;t=si(t.default,t.share),t!==`none`&&(Ll(e,n,t,null,!1)||zl(e.child,!1))}e=e.sibling}}function Vl(e,t){if(e.tag===30){var n=e.stateNode,r=e.memoizedProps,i=ai(r,n),a=si(r.default,n.paired?r.share:r.enter);a===`none`?Bl(e):Ll(e,i,a,null,!1)?(Bl(e),n.paired||t||jd(e,r.onEnter)):zl(e.child,!1)}else if(e.subtreeFlags&33554432)for(e=e.child;e!==null;)Vl(e,t),e=e.sibling;else Bl(e)}function Hl(e){if(Ml!==null&&Ml.size!==0){var t=Ml;if(e.subtreeFlags&18874368)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&e.flags&18874368){var n=e.memoizedProps,r=n.name;if(r!=null&&r!==`auto`){var i=t.get(r);if(i!==void 0){var a=si(n.default,n.share);if(a!==`none`&&(Ll(e,r,a,null,!1)?(a=e.stateNode,i.paired=a,a.paired=i,jd(e,n.onShare)):zl(e.child,!1)),t.delete(r),t.size===0)break}}}Hl(e)}e=e.sibling}}}function Ul(e){if(e.tag===30){var t=e.memoizedProps,n=ai(t,e.stateNode),r=Ml===null?void 0:Ml.get(n),i=si(t.default,r===void 0?t.exit:t.share);i!==`none`&&(Ll(e,n,i,null,!1)?r===void 0?jd(e,t.onExit):(i=e.stateNode,r.paired=i,i.paired=r,Ml.delete(n),jd(e,t.onShare)):zl(e.child,!1)),Ml!==null&&Hl(e)}else if(e.subtreeFlags&33554432)for(e=e.child;e!==null;)Ul(e),e=e.sibling;else Ml!==null&&Hl(e)}function Wl(e){for(e=e.child;e!==null;){if(e.tag===30){var t=e.memoizedProps,n=ai(t,e.stateNode);t=si(t.default,t.update),e.flags&=-5,t!==`none`&&Ll(e,n,t,e.memoizedState=[],!1)}else e.subtreeFlags&33554432&&Wl(e);e=e.sibling}}function Gl(e){if(e.subtreeFlags&18874368)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&e.flags&18874368){var t=e.stateNode;t.paired!==null&&(t.paired=null,zl(e.child,!1))}Gl(e)}e=e.sibling}}function Kl(e){if(e.tag===30)e.stateNode.paired=null,zl(e.child,!1),Gl(e);else if(e.subtreeFlags&33554432)for(e=e.child;e!==null;)Kl(e),e=e.sibling;else Gl(e)}function ql(e){for(e=e.child;e!==null;)e.tag===30?zl(e.child,!1):e.subtreeFlags&33554432&&ql(e),e=e.sibling}function Jl(e,t,n,r,i,a,o){for(var s=!1;t!==null;){if(t.tag===5){var c=t.stateNode;if(a!==null&&Il<a.length){var l=a[Il],u=kp(c);(l.view||u.view)&&(s=!0);var d;if(d=!(e.flags&4)){if(u.clip)d=!0;else{d=l.rect;var f=u.rect;d=d.y!==f.y||d.x!==f.x||d.height!==f.height||d.width!==f.width}}d&&(e.flags|=4),u.abs?u=!l.abs:(l=l.rect,u=u.rect,u=l.height!==u.height||l.width!==u.width),u&&(e.flags|=32)}else e.flags|=32;e.flags&4&&Ep(c,Il===0?n:n+`_`+Il,i),s&&e.flags&4||(Pl===null&&(Pl=[]),Pl.push(c,Il===0?r:r+`_`+Il,t.memoizedProps)),Il++}else(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&o?e.flags|=t.flags&32:Jl(e,t.child,n,r,i,a,o)&&(s=!0));t=t.sibling}return s}function Yl(e,t){for(e=e.child;e!==null;){if(e.tag===30){var n=e.memoizedProps,r=e.stateNode,i=ai(n,r),a=si(n.default,n.update);if(t){r=r.clones;var o=r===null?null:r.map(Ap)}else o=e.memoizedState,e.memoizedState=null;r=e;var s=e.child;Il=0,i=Jl(r,s,i,i,a,o,!1),e.flags&4&&i&&(t||jd(e,n.onUpdate))}else e.subtreeFlags&33554432&&Yl(e,t);e=e.sibling}}var Xl=!1,Zl=!1,Ql=!1,$l=!1,eu=typeof WeakSet==`function`?WeakSet:Set,tu=null,nu=!1,ru=!1,iu=!1,au=!1;function ou(e,t,n){if(e=e.containerInfo,cp=_h,e=Fr(e),Ir(e)){if(`selectionStart`in e)var r={start:e.selectionStart,end:e.selectionEnd};else a:{r=(r=e.ownerDocument)&&r.defaultView||window;var i=r.getSelection&&r.getSelection();if(i&&i.rangeCount!==0){r=i.anchorNode;var a=i.anchorOffset,o=i.focusNode;i=i.focusOffset;try{r.nodeType,o.nodeType}catch{r=null;break a}var s=0,c=-1,l=-1,u=0,d=0,f=e,p=null;b:for(;;){for(var m;f!==r||a!==0&&f.nodeType!==3||(c=s+a),f!==o||i!==0&&f.nodeType!==3||(l=s+i),f.nodeType===3&&(s+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break b;if(p===r&&++u===a&&(c=s),p===o&&++d===i&&(l=s),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}r=c===-1||l===-1?null:{start:c,end:l}}else r=null}r||={start:0,end:0}}else r=null;for(lp={focusedElem:e,selectionRange:r},_h=!1,n=(n&335544064)===n,tu=t,t=n?9270:1024;tu!==null;){if(e=tu,n&&(r=e.deletions,r!==null))for(a=0;a<r.length;a++)n&&Ul(r[a]);if(e.alternate===null&&e.flags&2)n&&Nl(e),su(n);else{if(e.tag===22){if(r=e.alternate,e.memoizedState!==null){r!==null&&r.memoizedState===null&&n&&Ul(r),su(n);continue}if(r!==null&&r.memoizedState!==null){n&&Nl(e),su(n);continue}}r=e.child,(e.subtreeFlags&t)!==0&&r!==null?(r.return=e,tu=r):(n&&Wl(e),su(n))}}Ml=null}function su(e){for(;tu!==null;){var t=tu,n=e,r=t.alternate,a=t.flags;switch(t.tag){case 0:case 11:case 15:break;case 1:if(a&1024&&r!==null){n=void 0,a=r.memoizedProps,r=r.memoizedState;var o=t.stateNode;try{var s=pc(t.type,a);n=o.getSnapshotBeforeUpdate(s,r),o.__reactInternalSnapshotBeforeUpdate=n}catch(e){ff(t,t.return,e)}}break;case 3:if(a&1024){if(r=t.stateNode.containerInfo,n=r.nodeType,n===9)rm(r);else if(n===1)switch(r.nodeName){case`HEAD`:case`HTML`:case`BODY`:rm(r);break;default:r.textContent=``}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:n&&r!==null&&(n=ai(r.memoizedProps,r.stateNode),a=t.memoizedProps,a=si(a.default,a.update),a!==`none`&&Ll(r,n,a,r.memoizedState=[],!0));break;default:if(a&1024)throw Error(i(163))}if(r=t.sibling,r!==null){r.return=t.return,tu=r;break}tu=t.return}}function cu(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:Ou(e,n),r&4&&pl(5,n);break;case 1:if(Ou(e,n),r&4){if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(e){ff(n,n.return,e)}else{var i=pc(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(e){ff(n,n.return,e)}}}r&64&&hl(n),r&512&&_l(n,n.return);break;case 3:if(Ou(e,n),r&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{mo(e,t)}catch(e){ff(n,n.return,e)}}break;case 27:t===null&&r&4&&Al(n);case 26:case 5:Ou(e,n),t===null&&r&4&&wl(n),r&512&&_l(n,n.return);break;case 12:Ou(e,n);break;case 31:Ou(e,n),r&4&&_u(e,n);break;case 13:Ou(e,n),r&4&&vu(e,n),r&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=gf.bind(null,n),lm(e,n))));break;case 22:if(r=n.memoizedState!==null||Xl,!r){var a=t!==null&&t.memoizedState!==null||Zl;t=Xl,i=Zl,Xl=r,(Zl=a)&&!i?(r=2,n.subtreeFlags&8772&&(r|=1),Au(e,n,r)):Ou(e,n),Xl=t,Zl=i}break;case 30:Ou(e,n),r&512&&_l(n,n.return);break;case 7:r&512&&_l(n,n.return);default:Ou(e,n)}}function lu(e,t){for(e=e.child;e!==null;)uu(e,t),e=e.sibling}function uu(e,t){switch(e.tag){case 5:case 26:try{var n=e.stateNode;if(t){var r=n.style;typeof r.setProperty==`function`?r.setProperty(`display`,`none`,`important`):r.display=`none`}else{var i=e.stateNode,a=e.memoizedProps.style,o=a!=null&&a.hasOwnProperty(`display`)?a.display:null;i.style.display=o==null||typeof o==`boolean`?``:(``+o).trim()}}catch(t){ff(e,e.return,t)}du(e,t);break;case 6:try{e.stateNode.nodeValue=t?``:e.memoizedProps,Pt=!0}catch(t){ff(e,e.return,t)}break;case 18:try{var s=e.stateNode;t?Tp(s,!0):Tp(e.stateNode,!1)}catch(t){ff(e,e.return,t)}break;case 22:case 23:e.memoizedState===null&&lu(e,t);break;default:lu(e,t)}}function du(e,t){if(e.subtreeFlags&67108864)for(e=e.child;e!==null;){a:{var n=e,r=t;switch(n.tag){case 4:uu(n,r);break a;case 22:n.memoizedState===null&&du(n,r);break a;default:du(n,r)}}e=e.sibling}}function fu(e){var t=e.alternate;t!==null&&(e.alternate=null,fu(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&yt(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var pu=null,mu=!1;function hu(e,t,n){for(n=n.child;n!==null;)gu(e,t,n),n=n.sibling}function gu(e,t,n){if(q&&typeof q.onCommitFiberUnmount==`function`)try{q.onCommitFiberUnmount(He,n)}catch{}switch(n.tag){case 26:Zl||vl(n,t),hu(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&!Zl&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:Zl||vl(n,t),xl(n);var r=pu,i=mu;Cp(n.type)&&(pu=n.stateNode,mu=!1),hu(e,t,n),_m(n.stateNode,n.type,n.memoizedProps),pu=r,mu=i;break;case 5:Zl||vl(n,t),xl(n);case 6:if(n.tag===6&&xl(n),r=pu,i=mu,pu=null,hu(e,t,n),pu=r,mu=i,pu!==null){if(mu)try{(pu.nodeType===9?pu.body:pu.nodeName===`HTML`?pu.ownerDocument.body:pu).removeChild(n.stateNode),Pt=!0}catch(e){ff(n,t,e)}else try{pu.removeChild(n.stateNode),Pt=!0}catch(e){ff(n,t,e)}}break;case 18:pu!==null&&(mu?(e=pu,wp(e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,n.stateNode),Uh(e)):wp(pu,n.stateNode));break;case 4:r=pu,i=mu,pu=n.stateNode.containerInfo,mu=!0,hu(e,t,n),pu=r,mu=i;break;case 0:case 11:case 14:case 15:ml(2,n,t),Zl||ml(4,n,t),hu(e,t,n);break;case 1:Zl||(vl(n,t),r=n.stateNode,typeof r.componentWillUnmount==`function`&&gl(n,t,r)),hu(e,t,n);break;case 21:hu(e,t,n);break;case 22:Zl=(r=Zl)||n.memoizedState!==null,hu(e,t,n),Zl=r;break;case 30:vl(n,t),hu(e,t,n);break;case 7:Zl||vl(n,t),hu(e,t,n);break;default:hu(e,t,n)}}function _u(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Uh(e)}catch(e){ff(t,t.return,e)}}}function vu(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Uh(e)}catch(e){ff(t,t.return,e)}}function yu(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new eu),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new eu),t;default:throw Error(i(435,e.tag))}}function bu(e,t){var n=yu(e);t.forEach(function(t){if(!n.has(t)){n.add(t);var r=_f.bind(null,e,t);t.then(r,r)}})}function xu(e,t,n){var r=t.deletions;if(r!==null)for(var a=0;a<r.length;a++){var o=r[a],s=e,c=t,l=c;a:for(;l!==null;){switch(l.tag){case 27:if(Cp(l.type)){pu=l.stateNode,mu=!1;break a}break;case 5:pu=l.stateNode,mu=!1;break a;case 3:case 4:pu=l.stateNode.containerInfo,mu=!0;break a}l=l.return}if(pu===null)throw Error(i(160));gu(s,c,o),pu=null,mu=!1,s=o.alternate,s!==null&&(s.return=null),o.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Cu(t,e,n),t=t.sibling}var Su=null;function Cu(e,t,n){var r=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(a&4&&(r=e.updateQueue,r=r===null?null:r.events,r!==null))for(var o=0;o<r.length;o++){var s=r[o];s.ref.impl=s.nextImpl}xu(t,e,n),wu(e),a&4&&(ml(3,e,e.return),pl(3,e),ml(5,e,e.return));break;case 1:xu(t,e,n),wu(e),a&512&&(Zl||r===null||vl(r,r.return)),a&64&&Xl&&(e=e.updateQueue,e!==null&&(t=e.callbacks,t!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?t:n.concat(t))));break;case 26:if(o=Su,xu(t,e,n),wu(e),a&512&&(Zl||r===null||vl(r,r.return)),a&4){if(a=r===null?null:r.memoizedState,n=e.memoizedState,r===null){if(n===null){if(e.stateNode===null){if(Xl)e.stateNode=pp(e.type,e.memoizedProps,t.containerInfo,e);else{a:{t=e.type,n=e.memoizedProps,a=o.ownerDocument||o;b:switch(t){case`title`:r=a.getElementsByTagName(`title`)[0],(!r||r[_t]||r[Y]||r.namespaceURI===`http://www.w3.org/2000/svg`||r.hasAttribute(`itemprop`))&&(r=a.createElement(t),a.head.insertBefore(r,a.querySelector(`head > title`))),rp(r,t,n),r[Y]=e,wt(r),t=r;break a;case`link`:if(o=Km(`link`,`href`,a).get(t+(n.href||``))){for(s=0;s<o.length;s++)if(r=o[s],r.getAttribute(`href`)===(n.href==null||n.href===``?null:n.href)&&r.getAttribute(`rel`)===(n.rel==null?null:n.rel)&&r.getAttribute(`title`)===(n.title==null?null:n.title)&&r.getAttribute(`crossorigin`)===(n.crossOrigin==null?null:n.crossOrigin)){o.splice(s,1);break b}}r=a.createElement(t),rp(r,t,n),a.head.appendChild(r);break;case`meta`:if(o=Km(`meta`,`content`,a).get(t+(n.content||``))){for(s=0;s<o.length;s++)if(r=o[s],r.getAttribute(`content`)===(n.content==null?null:``+n.content)&&r.getAttribute(`name`)===(n.name==null?null:n.name)&&r.getAttribute(`property`)===(n.property==null?null:n.property)&&r.getAttribute(`http-equiv`)===(n.httpEquiv==null?null:n.httpEquiv)&&r.getAttribute(`charset`)===(n.charSet==null?null:n.charSet)){o.splice(s,1);break b}}r=a.createElement(t),rp(r,t,n),a.head.appendChild(r);break;default:throw Error(i(468,t))}r[Y]=e,wt(r),t=r}e.stateNode=t}}else Xl||qm(o,e.type,e.stateNode)}else e.stateNode=Vm(o,n,e.memoizedProps)}else a===n?n===null&&e.stateNode!==null&&Tl(e,e.memoizedProps,r.memoizedProps):(a===null?(t=r.stateNode,t===null||Zl||t.parentNode.removeChild(t)):a.count--,n===null?Xl||qm(o,e.type,e.stateNode):Vm(o,n,e.memoizedProps))}break;case 27:xu(t,e,n),wu(e),a&512&&(Zl||r===null||vl(r,r.return)),r!==null&&a&4&&Tl(e,e.memoizedProps,r.memoizedProps);break;case 5:if(o=Ql,Ql=!1,xu(t,e,n),Ql=o,wu(e),a&512&&(Zl||r===null||vl(r,r.return)),e.flags&32){t=e.stateNode;try{Zt(t,``),Pt=!0}catch(t){ff(e,e.return,t)}}a&4&&e.stateNode!=null&&(t=e.memoizedProps,Tl(e,t,r===null?t:r.memoizedProps)),a&1024&&($l=!0);break;case 6:if(xu(t,e,n),wu(e),a&4){if(e.stateNode===null)throw Error(i(162));t=e.memoizedProps,n=e.stateNode;try{n.nodeValue=t,Pt=!0}catch(t){ff(e,e.return,t)}}break;case 3:if(Pt=!1,Gm=null,o=Su,Su=xm(t.containerInfo),xu(t,e,n),Su=o,wu(e),a&4&&r!==null&&r.memoizedState.isDehydrated)try{Uh(t.containerInfo)}catch(t){ff(e,e.return,t)}$l&&($l=!1,Tu(e)),Pt=!1;break;case 4:a=Ql,Ql=Xl,r=Ft(),o=Su,Su=xm(e.stateNode.containerInfo),xu(t,e,n),wu(e),Su=o,Pt&&ru&&(iu=!0),Pt=r,Ql=a;break;case 12:xu(t,e,n),wu(e);break;case 31:xu(t,e,n),wu(e),a&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,bu(e,t)));break;case 13:xu(t,e,n),wu(e),e.child.flags&8192&&e.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(fd=Ne()),a&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,bu(e,t)));break;case 22:o=e.memoizedState!==null,s=r!==null&&r.memoizedState!==null;var c=Xl,l=Zl,u=Ql;Xl=c||o,Ql=u||o,Zl=l||s,xu(t,e,n),Zl=l,Ql=u,Xl=c,wu(e),a&8192&&(t=e.stateNode,t._visibility=o?t._visibility&-2:t._visibility|1,!o||r===null||s||Xl||Zl||(t=s||Zl,n=Xl,r=Zl,Xl=o||Xl,Zl=t,ku(e,2),Xl=n,Zl=r),!o&&Ql||lu(e,o)),a&4&&(t=e.updateQueue,t!==null&&(n=t.retryQueue,n!==null&&(t.retryQueue=null,bu(e,n))));break;case 19:xu(t,e,n),wu(e),a&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,bu(e,t)));break;case 30:a&512&&(Zl||r===null||vl(r,r.return)),a=Ft(),o=ru,s=(n&335544064)===n,c=e.memoizedProps,ru=s&&si(c.default,c.update)!==`none`,xu(t,e,n),wu(e),s&&r!==null&&Pt&&(e.flags|=4),ru=o,Pt=a;break;case 21:break;case 7:a&512&&(Zl||r===null||vl(r,r.return)),r&&r.stateNode!==null&&(r.stateNode._fragmentFiber=e);default:xu(t,e,n),wu(e)}}function wu(e){var t=e.flags;if(t&2){try{for(var n,r=e.return;r!==null;){if(El(r)){n=r;break}r=r.return}r=null;for(var a=e.return;a!==null;){if(Cl(a)){var o=a.stateNode;r===null?r=[o]:r.push(o)}if(Sl(a))break;a=a.return}var s=r;if(n==null)throw Error(i(160));switch(n.tag){case 27:var c=n.stateNode;kl(e,Dl(e),c,s);break;case 5:var l=n.stateNode;n.flags&32&&(Zt(l,``),n.flags&=-33),kl(e,Dl(e),l,s);break;case 3:case 4:var u=n.stateNode.containerInfo;Ol(e,Dl(e),u,s);break;default:throw Error(i(161))}}catch(t){ff(e,e.return,t)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Tu(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Tu(t),t.tag===5&&t.flags&1024&&(t=t.stateNode,_h=!0,t.reset(),_h=!1),e=e.sibling}}function Eu(e,t){if(t.subtreeFlags&9270)for(t=t.child;t!==null;)Du(t,e),t=t.sibling;else Yl(t,!1)}function Du(e,t){var n=e.alternate;if(n===null)Vl(e,!1);else switch(e.tag){case 3:if(au=nu=!1,Fl(),Eu(t,e),!nu&&!iu){if(e=Pl,e!==null)for(var r=0;r<e.length;r+=3){n=e[r];var i=e[r+1];Dp(n,e[r+2]),n=n.ownerDocument.documentElement,n!==null&&n.animate({opacity:[0,0],pointerEvents:[`none`,`none`]},{duration:0,fill:`forwards`,pseudoElement:`::view-transition-group(`+i+`)`})}e=t.containerInfo,e=e.nodeType===9?e.documentElement:e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName===``&&(e.style.viewTransitionName=`none`,e.animate({opacity:[0,0],pointerEvents:[`none`,`none`]},{duration:0,fill:`forwards`,pseudoElement:`::view-transition-group(root)`}),e.animate({width:[0,0],height:[0,0]},{duration:0,fill:`forwards`,pseudoElement:`::view-transition`})),au=!0}Pl=null;break;case 5:Eu(t,e);break;case 4:r=nu,nu=!1,Eu(t,e),nu&&(iu=!0),nu=r;break;case 22:e.memoizedState===null&&(n.memoizedState===null?Eu(t,e):Vl(e,!1));break;case 30:r=nu,i=Fl(),nu=!1,Eu(t,e),nu&&(e.flags|=4);var a=e.memoizedProps,o=e.stateNode;t=ai(a,o),o=ai(n.memoizedProps,o);var s=si(a.default,a.update);s===`none`?t=!1:(a=n.memoizedState,n.memoizedState=null,n=e.child,Il=0,t=Jl(e,n,t,o,s,a,!0),Il!==(a===null?0:a.length)&&(e.flags|=32)),e.flags&4&&t?(jd(e,e.memoizedProps.onUpdate),Pl=i):i!==null&&(i.push.apply(i,Pl),Pl=i),nu=e.flags&32?!0:r;break;default:Eu(t,e)}}function Ou(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)cu(e,t.alternate,t),t=t.sibling}function ku(e,t){for(e=e.child;e!==null;){var n=e,r=t;switch(n.tag){case 0:case 11:case 14:case 15:ml(4,n,n.return),ku(n,r);break;case 1:vl(n,n.return);var i=n.stateNode;typeof i.componentWillUnmount==`function`&&gl(n,n.return,i),ku(n,r);break;case 27:r&2&&_m(n.stateNode,n.type,n.memoizedProps);case 5:vl(n,n.return),n.tag!==5&&n.tag!==27||xl(n),ku(n,r);break;case 6:xl(n);break;case 26:vl(n,n.return),i=n.stateNode,n.memoizedState!==null||i===null||Zl||i.parentNode.removeChild(i),ku(n,r);break;case 22:n.memoizedState===null&&ku(n,r);break;case 30:vl(n,n.return),ku(n,r);break;case 7:vl(n,n.return);default:ku(n,r)}e=e.sibling}}function Au(e,t,n){for(n=t.subtreeFlags&8772?n:n&-2,t=t.child;t!==null;){var r=t.alternate,i=e,a=t,o=a.flags,s=!!(n&1);switch(a.tag){case 0:case 11:case 15:Au(i,a,n),pl(4,a);break;case 1:if(Au(i,a,n),r=a,i=r.stateNode,typeof i.componentDidMount==`function`)try{i.componentDidMount()}catch(e){ff(r,r.return,e)}if(r=a,i=r.updateQueue,i!==null){var c=r.stateNode;try{var l=i.shared.hiddenCallbacks;if(l!==null)for(i.shared.hiddenCallbacks=null,i=0;i<l.length;i++)po(l[i],c)}catch(e){ff(r,r.return,e)}}s&&o&64&&hl(a),_l(a,a.return);break;case 27:n&2&&Al(a);case 5:a.tag!==5&&a.tag!==27||bl(a),Au(i,a,n),s&&r===null&&o&4&&wl(a),_l(a,a.return);break;case 6:bl(a);break;case 26:c=a.stateNode,a.memoizedState!==null||c===null||Xl||qm(xm(c.ownerDocument),a.type,c),Au(i,a,n),s&&r===null&&o&4&&wl(a),_l(a,a.return);break;case 12:Au(i,a,n);break;case 31:Au(i,a,n),s&&o&4&&_u(i,a);break;case 13:Au(i,a,n),s&&o&4&&vu(i,a);break;case 22:a.memoizedState===null&&Au(i,a,n),_l(a,a.return);break;case 30:Au(i,a,n),_l(a,a.return);break;case 7:_l(a,a.return);default:Au(i,a,n)}t=t.sibling}}function ju(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&Sa(n))}function Mu(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Sa(e))}function Nu(e,t,n,r){var i=(n&335544064)===n;if(t.subtreeFlags&(i?10262:10256))for(t=t.child;t!==null;)Pu(e,t,n,r),t=t.sibling;else i&&ql(t)}function Pu(e,t,n,r){var i=(n&335544064)===n;i&&t.alternate===null&&t.return!==null&&t.return.alternate!==null&&Kl(t);var a=t.flags;switch(t.tag){case 0:case 11:case 15:Nu(e,t,n,r),a&2048&&pl(9,t);break;case 1:Nu(e,t,n,r);break;case 3:Nu(e,t,n,r),i&&au&&(e=e.containerInfo,e=e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,e.style.viewTransitionName===`root`&&(e.style.viewTransitionName=``),e=e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName===`none`&&(e.style.viewTransitionName=``)),a&2048&&(a=null,t.alternate!==null&&(a=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==a&&(t.refCount++,a!=null&&Sa(a)));break;case 12:if(a&2048){Nu(e,t,n,r),a=t.stateNode;try{var o=t.memoizedProps,s=o.id,c=o.onPostCommit;typeof c==`function`&&c(s,t.alternate===null?`mount`:`update`,a.passiveEffectDuration,-0)}catch(e){ff(t,t.return,e)}}else Nu(e,t,n,r);break;case 31:Nu(e,t,n,r);break;case 13:Nu(e,t,n,r);break;case 23:break;case 22:o=t.stateNode,s=t.alternate,t.memoizedState===null?(i&&s!==null&&s.memoizedState!==null&&Kl(t),o._visibility&2?Nu(e,t,n,r):(o._visibility|=2,Fu(e,t,n,r,!!(t.subtreeFlags&10256)||!1))):(i&&s!==null&&s.memoizedState===null&&Kl(s),o._visibility&2?Nu(e,t,n,r):Iu(e,t)),a&2048&&ju(s,t);break;case 24:Nu(e,t,n,r),a&2048&&Mu(t.alternate,t);break;case 30:i&&(a=t.alternate,a!==null&&(zl(a.child,!0),zl(t.child,!0))),Nu(e,t,n,r);break;default:Nu(e,t,n,r)}}function Fu(e,t,n,r,i){for(i&&=!!(t.subtreeFlags&10256)||!1,t=t.child;t!==null;){var a=e,o=t,s=n,c=r,l=o.flags;switch(o.tag){case 0:case 11:case 15:Fu(a,o,s,c,i),pl(8,o);break;case 23:break;case 22:var u=o.stateNode;o.memoizedState===null?(u._visibility|=2,Fu(a,o,s,c,i)):u._visibility&2?Fu(a,o,s,c,i):Iu(a,o),i&&l&2048&&ju(o.alternate,o);break;case 24:Fu(a,o,s,c,i),i&&l&2048&&Mu(o.alternate,o);break;default:Fu(a,o,s,c,i)}t=t.sibling}}function Iu(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,r=t,i=r.flags;switch(r.tag){case 22:Iu(n,r),i&2048&&ju(r.alternate,r);break;case 24:Iu(n,r),i&2048&&Mu(r.alternate,r);break;default:Iu(n,r)}t=t.sibling}}var Lu=8192;function Ru(e,t,n){if(e.subtreeFlags&Lu)for(e=e.child;e!==null;)zu(e,t,n),e=e.sibling}function zu(e,t,n){switch(e.tag){case 26:Ru(e,t,n),e.flags&Lu&&(e.memoizedState===null?(e=e.stateNode,(t&335544128)===t&&Qm(n,e)):$m(n,Su,e.memoizedState,e.memoizedProps));break;case 5:Ru(e,t,n),e.flags&Lu&&(e=e.stateNode,(t&335544128)===t&&Qm(n,e));break;case 3:case 4:var r=Su;Su=xm(e.stateNode.containerInfo),Ru(e,t,n),Su=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=Lu,Lu=16777216,Ru(e,t,n),Lu=r):Ru(e,t,n));break;case 30:if((e.flags&Lu)!==0&&(r=e.memoizedProps.name,r!=null&&r!==`auto`)){var i=e.stateNode;i.paired=null,Ml===null&&(Ml=new Map),Ml.set(r,i)}Ru(e,t,n);break;default:Ru(e,t,n)}}function Bu(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Vu(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];tu=r,Wu(r,e)}Bu(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Hu(e),e=e.sibling}function Hu(e){switch(e.tag){case 0:case 11:case 15:Vu(e),e.flags&2048&&ml(9,e,e.return);break;case 3:Vu(e);break;case 12:Vu(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Uu(e)):Vu(e);break;default:Vu(e)}}function Uu(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];tu=r,Wu(r,e)}Bu(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:ml(8,t,t.return),Uu(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Uu(t));break;default:Uu(t)}e=e.sibling}}function Wu(e,t){for(;tu!==null;){var n=tu;switch(n.tag){case 0:case 11:case 15:ml(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var r=n.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:Sa(n.memoizedState.cache)}if(r=n.child,r!==null)r.return=n,tu=r;else a:for(n=e;tu!==null;){r=tu;var i=r.sibling,a=r.return;if(fu(r),r===n){tu=null;break a}if(i!==null){i.return=a,tu=i;break a}tu=a}}}var Gu={getCacheForType:function(e){var t=ma(ba),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return ma(ba).controller.signal}},Ku=typeof WeakMap==`function`?WeakMap:Map,qu=0,Ju=null,Yu=null,Xu=0,Zu=0,Qu=null,$u=!1,ed=!1,td=!1,nd=0,rd=0,id=0,ad=0,od=0,sd=0,cd=0,ld=null,ud=null,dd=!1,fd=0,pd=0,md=1/0,hd=null,gd=null,_d=0,vd=null,yd=null,bd=0,xd=0,Sd=null,Cd=null,wd=null,Td=null,Ed=null,Dd=0,Od=null;function kd(){return qu&2&&Xu!==0?Xu&-Xu:U.T===null?ut():Nf()}function Ad(){if(sd===0){if(!(Xu&536870912)||qi){var e=Ye;Ye<<=1,!(Ye&3932160)&&(Ye=262144),sd=e}else sd=536870912}return e=bo.current,e!==null&&(e.flags|=32),sd}function jd(e,t){if(t!=null){var n=e.stateNode,r=n.ref;r===null&&(r=n.ref=Fp(ai(e.memoizedProps,n))),Td===null&&(Td=[]),Td.push(t.bind(null,r))}}function Md(e,t,n){(e===Ju&&(Zu===2||Zu===9)||e.cancelPendingCommit!==null)&&(zd(e,0),Id(e,Xu,sd,!1)),it(e,n),(!(qu&2)||e!==Ju)&&(e===Ju&&(!(qu&2)&&(ad|=n),rd===4&&Id(e,Xu,sd,!1)),Tf(e))}function Nd(e,t,n){if(qu&6)throw Error(i(327));var r=!n&&!(t&127)&&(t&e.expiredLanes)===0||$e(e,t),a=r?qd(e,t):Gd(e,t,!0),o=r;do{if(a===0){ed&&!r&&Id(e,t,0,!1);break}if(n=e.current.alternate,o&&!Fd(n))a=Gd(e,t,!1),o=!1;else{if(a===2){if(o=t,e.errorRecoveryDisabledLanes&o)var s=0;else s=e.pendingLanes&-536870913,s=s===0?s&536870912?536870912:0:s;if(s!==0){t=s;a:{var c=e;a=ld;var l=c.current.memoizedState.isDehydrated;if(l&&(zd(c,s).flags|=256),s=Gd(c,s,!1),s!==2&&s!==6){if(td&&!l){c.errorRecoveryDisabledLanes|=o,ad|=o,a=4;break a}o=ud,ud=a,o!==null&&(ud===null?ud=o:ud.push.apply(ud,o))}a=s}if(o=!1,a!==2)continue}}if(a===1){zd(e,0),Id(e,t,0,!0);break}a:{switch(r=e,o=a,o){case 0:case 1:throw Error(i(345));case 4:if((t&4194048)!==t&&(t&62914560)!==t)break;case 6:Id(r,t,sd,!$u);break a;case 2:ud=null;break;case 3:case 5:break;default:throw Error(i(329))}if((t&62914560)===t&&(a=fd+300-Ne(),10<a)){if(Id(r,t,sd,!$u),Qe(r,0,!0)!==0)break a;bd=t,r.timeoutHandle=_p(Pd.bind(null,r,n,ud,hd,dd,t,sd,ad,cd,$u,o,`Throttled`,-0,0),a);break a}Pd(r,n,ud,hd,dd,t,sd,ad,cd,$u,o,null,-0,0)}break}}while(1);Tf(e)}function Pd(e,t,n,r,i,a,o,s,c,l,u,d,f,p){e.timeoutHandle=-1;var m=t.subtreeFlags,h=(a&335544064)===a;d=null,(h||m&8192||(m&16785408)==16785408)&&(d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:on},Ml=null,zu(t,a,d),h&&(m=d,h=e.containerInfo,h=(h.nodeType===9?h:h.ownerDocument).__reactViewTransition,h!=null&&(m.count++,m.waitingForViewTransition=!0,m=rh.bind(m),h.finished.then(m,m))),m=(a&62914560)===a?fd-Ne():(a&4194048)===a?pd-Ne():0,m=th(d,m),m!==null)?(bd=a,e.cancelPendingCommit=m(ef.bind(null,e,t,a,n,r,i,o,s,c,l,u,d,null,f,p)),Id(e,a,o,!l)):ef(e,t,a,n,r,i,o,s,c,l,u,d)}function Fd(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!kr(a(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Id(e,t,n,r){t=et(e,t),t&=~od,t&=~ad,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var i=t;0<i;){var a=31-We(i),o=1<<a;r[a]=-1,i&=~o}n!==0&&ot(e,n,t)}function Ld(){return qu&6?!0:(Ef(0,!1),!1)}function Rd(){if(Yu!==null){if(Zu===0)var e=Yu.return;else e=Yu,oa=aa=null,Yo(e),Ja=null,Ya=0,e=Yu;for(;e!==null;)fl(e.alternate,e),e=e.return;Yu=null}}function zd(e,t){var n=e.timeoutHandle;return n!==-1&&(e.timeoutHandle=-1,vp(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),bd=0,Rd(),Ju=e,Yu=n=Si(e.current,null),Xu=t,Zu=0,Qu=null,$u=!1,ed=$e(e,t),td=!1,cd=sd=od=ad=id=rd=0,ud=ld=null,dd=!1,nd=et(e,t),fi(),n}function Bd(e,t){$=null,U.H=ac,t===Ra||t===Ba?(t=Ka(),Zu=3):t===za?(t=Ka(),Zu=4):Zu=t===Cc?8:typeof t==`object`&&t&&typeof t.then==`function`?6:1,Qu=t,Yu===null&&(rd=1,_c(e,Ai(t,e.current)))}function Vd(){var e=bo.current;return e===null?!0:(Xu&4194048)===Xu?xo===null:(Xu&62914560)===Xu||Xu&536870912?e===xo:!1}function Hd(){var e=U.H;return U.H=ac,e===null?ac:e}function Ud(){var e=U.A;return U.A=Gu,e}function Wd(){rd=4,$u||(Xu&4194048)!==Xu&&bo.current!==null||(ed=!0),!(id&134217727)&&!(ad&134217727)||Ju===null||Id(Ju,Xu,sd,!1)}function Gd(e,t,n){var r=qu;qu|=2;var i=Hd(),a=Ud();(Ju!==e||Xu!==t)&&(hd=null,zd(e,t)),t=!1;var o=rd;a:do try{if(Zu!==0&&Yu!==null){var s=Yu,c=Qu;switch(Zu){case 8:Rd(),o=6;break a;case 3:case 2:case 9:case 6:bo.current===null&&(t=!0);var l=Zu;if(Zu=0,Qu=null,Zd(e,s,c,l),n&&ed){o=0;break a}break;default:l=Zu,Zu=0,Qu=null,Zd(e,s,c,l)}}Kd(),o=rd;break}catch(t){Bd(e,t)}while(1);return t&&e.shellSuspendCounter++,oa=aa=null,qu=r,U.H=i,U.A=a,Yu===null&&(Ju=null,Xu=0,fi()),o}function Kd(){for(;Yu!==null;)Yd(Yu)}function qd(e,t){var n=qu;qu|=2;var r=Hd(),a=Ud();Ju!==e||Xu!==t?(hd=null,md=Ne()+500,zd(e,t)):ed=$e(e,t);a:do try{if(Zu!==0&&Yu!==null){t=Yu;var o=Qu;b:switch(Zu){case 1:Zu=0,Qu=null,Zd(e,t,o,1);break;case 2:case 9:if(Ha(o)){Zu=0,Qu=null,Xd(t);break}t=function(){Zu!==2&&Zu!==9||Ju!==e||(Zu=7),Tf(e)},o.then(t,t);break a;case 3:Zu=7;break a;case 4:Zu=5;break a;case 7:Ha(o)?(Zu=0,Qu=null,Xd(t)):(Zu=0,Qu=null,Zd(e,t,o,7));break;case 5:var s=null;switch(Yu.tag){case 26:s=Yu.memoizedState;case 5:case 27:var c=Yu;if(s?Xm(s):c.stateNode.complete){Zu=0,Qu=null;var l=c.sibling;if(l!==null)Yu=l;else{var u=c.return;u===null?Yu=null:(Yu=u,Qd(u))}break b}}Zu=0,Qu=null,Zd(e,t,o,5);break;case 6:Zu=0,Qu=null,Zd(e,t,o,6);break;case 8:Rd(),rd=6;break a;default:throw Error(i(462))}}Jd();break}catch(t){Bd(e,t)}while(1);return oa=aa=null,U.H=r,U.A=a,qu=n,Yu===null?(Ju=null,Xu=0,fi(),rd):0}function Jd(){for(;Yu!==null&&!je();)Yd(Yu)}function Yd(e){var t=rl(e.alternate,e,nd);e.memoizedProps=e.pendingProps,t===null?Qd(e):Yu=t}function Xd(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=Lc(n,t,t.pendingProps,t.type,void 0,Xu);break;case 11:t=Lc(n,t,t.pendingProps,t.type.render,t.ref,Xu);break;case 5:Yo(t);var r=t;r===Gi&&(qi?($i(r),r.tag===5&&r.stateNode!=null&&(Ki=r.stateNode)):($i(r),qi=!0));default:fl(n,t),t=Yu=Ci(t,nd),t=rl(n,t,nd)}e.memoizedProps=e.pendingProps,t===null?Qd(e):Yu=t}function Zd(e,t,n,r){oa=aa=null,Yo(t),Ja=null,Ya=0;var i=t.return;try{if(Sc(e,i,t,n,Xu)){rd=1,_c(e,Ai(n,e.current)),Yu=null;return}}catch(t){if(i!==null)throw Yu=i,t;rd=1,_c(e,Ai(n,e.current)),Yu=null;return}t.flags&32768?(qi||r===1?e=!0:ed||Xu&536870912?e=!1:($u=e=!0,(r===2||r===9||r===3||r===6)&&(r=bo.current,r!==null&&r.tag===13&&(r.flags|=16384))),$d(t,e)):Qd(t)}function Qd(e){var t=e;do{if(t.flags&32768){$d(t,$u);return}e=t.return;var n=ul(t.alternate,t,nd);if(n!==null){Yu=n;return}if(t=t.sibling,t!==null){Yu=t;return}Yu=t=e}while(t!==null);rd===0&&(rd=5)}function $d(e,t){do{var n=dl(e.alternate,e);if(n!==null){n.flags&=32767,Yu=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){Yu=e;return}Yu=e=n}while(e!==null);rd=6,Yu=null}function ef(e,t,n,r,a,o,s,c,l,u,d,f){e.cancelPendingCommit=null;do lf();while(_d!==0);if(qu&6)throw Error(i(327));if(t!==null){if(t===e.current)throw Error(i(177));e===Ju&&(Yu=Ju=null,Xu=0),yd=t,vd=e,bd=n,Sd=a,Cd=r,tf(e,t,n,s,c,l,f)}}function tf(e,t,n,r,i,a,o){var s=t.lanes|t.childLanes;if(xd=s,s|=di,at(e,n,s,r,i,a),Td=null,(n&335544064)===n?(Ed=Ta(e),r=10262):(Ed=null,r=10256),(t.subtreeFlags&r)!==0||(t.flags&r)!==0?(e.callbackNode=null,e.callbackPriority=0,vf(Le,function(){return uf(),null})):(e.callbackNode=null,e.callbackPriority=0),jl=!1,r=!!(t.flags&13878),t.subtreeFlags&13878||r){r=U.T,U.T=null,i=W.p,W.p=2,a=qu,qu|=4;try{ou(e,t,n)}finally{qu=a,W.p=i,U.T=r}}_d=1,jl?wd=Np(o,e.containerInfo,Ed,af,of,rf,sf,uf,nf,null,null):(af(),of(),sf())}function nf(e){if(_d!==0){var t=vd.onRecoverableError;t(e,{componentStack:null})}}function rf(){_d===3&&(_d=0,Du(yd,vd),_d=4)}function af(){if(_d===1){_d=0;var e=vd,t=yd,n=bd,r=!!(t.flags&13878);if(t.subtreeFlags&13878||r){r=U.T,U.T=null;var i=W.p;W.p=2;var a=qu;qu|=4;try{ru=iu=!1,Cu(t,e,n),n=lp;var o=Fr(e.containerInfo),s=n.focusedElem,c=n.selectionRange;if(o!==s&&s&&s.ownerDocument&&Pr(s.ownerDocument.documentElement,s)){if(c!==null&&Ir(s)){var l=c.start,u=c.end;if(u===void 0&&(u=l),`selectionStart`in s)s.selectionStart=l,s.selectionEnd=Math.min(u,s.value.length);else{var d=s.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var p=f.getSelection(),m=s.textContent.length,h=Math.min(c.start,m),g=c.end===void 0?h:Math.min(c.end,m);!p.extend&&h>g&&(o=g,g=h,h=o);var _=Nr(s,h),v=Nr(s,g);if(_&&v&&(p.rangeCount!==1||p.anchorNode!==_.node||p.anchorOffset!==_.offset||p.focusNode!==v.node||p.focusOffset!==v.offset)){var y=d.createRange();y.setStart(_.node,_.offset),p.removeAllRanges(),h>g?(p.addRange(y),p.extend(v.node,v.offset)):(y.setEnd(v.node,v.offset),p.addRange(y))}}}}for(d=[],p=s;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof s.focus==`function`&&s.focus(),s=0;s<d.length;s++){var b=d[s];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}_h=!!cp,lp=cp=null}finally{qu=a,W.p=i,U.T=r}}e.current=t,_d=2}}function of(){if(_d===2){_d=0;var e=vd,t=yd,n=!!(t.flags&8772);if(t.subtreeFlags&8772||n){n=U.T,U.T=null;var r=W.p;W.p=2;var i=qu;qu|=4;try{cu(e,t.alternate,t)}finally{qu=i,W.p=r,U.T=n}}_d=3}}function sf(){if(_d===4||_d===3){_d=0;var e=wd;wd=null,Me();var t=vd,n=yd,r=bd,i=Cd,a=(r&335544064)===r?10262:10256;if((n.subtreeFlags&a)!==0||(n.flags&a)!==0?_d=5:(_d=0,yd=vd=null,cf(t,t.pendingLanes)),a=t.pendingLanes,a===0&&(gd=null),J(r),n=n.stateNode,q&&typeof q.onCommitFiberRoot==`function`)try{q.onCommitFiberRoot(He,n,void 0,(n.current.flags&128)==128)}catch{}if(i!==null){n=U.T,a=W.p,W.p=2,U.T=null;try{for(var o=t.onRecoverableError,s=0;s<i.length;s++){var c=i[s];o(c.value,{componentStack:c.stack})}}finally{U.T=n,W.p=a}}if(i=Td,o=Ed,Ed=null,i!==null&&(Td=null,o===null&&(o=[]),e!==null))for(c=0;c<i.length;c++)n=(0,i[c])(o),n!==void 0&&e.finished.finally(n);bd&3&&lf(),Tf(t),a=t.pendingLanes,r&261930&&a&42?t===Od?Dd++:(Dd=0,Od=t):(Dd=0,Od=null),Ef(0,!1)}}function cf(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Sa(t)))}function lf(){return wd!==null&&(wd.skipTransition(),wd=null),af(),of(),sf(),uf()}function uf(){if(_d!==5)return!1;var e=vd,t=xd;xd=0;var n=J(bd),r=U.T,a=W.p;try{W.p=32>n?32:n,U.T=null,n=Sd,Sd=null;var o=vd,s=bd;if(_d=0,yd=vd=null,bd=0,qu&6)throw Error(i(331));var c=qu;if(qu|=4,Hu(o.current),Pu(o,o.current,s,n),qu=c,Ef(0,!1),q&&typeof q.onPostCommitFiberRoot==`function`)try{q.onPostCommitFiberRoot(He,o)}catch{}return!0}finally{W.p=a,U.T=r,cf(e,t)}}function df(e,t,n){t=Ai(n,t),t=yc(e.stateNode,t,2),e=oo(e,t,2),e!==null&&(it(e,2),Tf(e))}function ff(e,t,n){if(e.tag===3)df(e,e,n);else for(;t!==null;){if(t.tag===3){df(t,e,n);break}if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError==`function`||typeof r.componentDidCatch==`function`&&(gd===null||!gd.has(r))){e=Ai(n,e),n=bc(2),r=oo(t,n,2),r!==null&&(xc(n,r,t,e),it(r,2),Tf(r));break}}t=t.return}}function pf(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Ku;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(td=!0,i.add(n),e=mf.bind(null,e,t,n),t.then(e,e))}function mf(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,Ju===e&&(Xu&n)===n&&(rd===4||rd===3&&(Xu&62914560)===Xu&&300>Ne()-fd?qu&2?od|=n:zd(e,0):od|=n,cd===Xu&&(cd=0)),Tf(e)}function hf(e,t){t===0&&(t=nt()),e=hi(e,t),e!==null&&(it(e,t),Tf(e))}function gf(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),hf(e,n)}function _f(e,t){var n=0;switch(e.tag){case 31:case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(i(314))}r!==null&&r.delete(t),hf(e,n)}function vf(e,t){return ke(e,t)}var yf=null,bf=null,xf=!1,Sf=!1,Cf=!1,wf=0;function Tf(e){e!==bf&&e.next===null&&(bf===null?yf=bf=e:bf=bf.next=e),Sf=!0,xf||(xf=!0,Mf())}function Ef(e,t){if(!Cf&&Sf){Cf=!0;do for(var n=!1,r=yf;r!==null;){if(!t){if(e!==0){var i=r.pendingLanes;if(i===0)var a=0;else{var o=r.suspendedLanes,s=r.pingedLanes;a=(1<<31-We(42|e)+1)-1,a&=i&~(o&~s),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,jf(r,a))}else a=Xu,a=Qe(r,r===Ju?a:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),!(a&3)||$e(r,a)||(n=!0,jf(r,a))}r=r.next}while(n);Cf=!1}}function Df(){Of()}function Of(){Sf=xf=!1;var e=0;wf!==0&&gp()&&(e=wf);for(var t=Ne(),n=null,r=yf;r!==null;){var i=r.next,a=kf(r,t);a===0?(r.next=null,n===null?yf=i:n.next=i,i===null&&(bf=n)):(n=r,(e!==0||a&3)&&(Sf=!0)),r=i}_d!==0&&_d!==5||Ef(e,!1),wf!==0&&(wf=0)}function kf(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var o=31-We(a),s=1<<o,c=i[o];c===-1?((s&n)===0||(s&r)!==0)&&(i[o]=tt(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}if(t=Ju,n=Xu,n=Qe(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,n===0||e===t&&(Zu===2||Zu===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&Ae(r),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||$e(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(r!==null&&Ae(r),J(n)){case 2:case 8:n=Ie;break;case 32:n=Le;break;case 268435456:n=ze;break;default:n=Le}return r=Af.bind(null,e),n=ke(n,r),e.callbackPriority=t,e.callbackNode=n,t}return r!==null&&r!==null&&Ae(r),e.callbackPriority=2,e.callbackNode=null,2}function Af(e,t){if(_d!==0&&_d!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(lf()&&e.callbackNode!==n)return null;var r=Xu;return r=Qe(e,e===Ju?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(Nd(e,r,t),kf(e,Ne()),e.callbackNode!=null&&e.callbackNode===n?Af.bind(null,e):null)}function jf(e,t){if(lf())return null;Nd(e,t,!0)}function Mf(){xp(function(){qu&6?ke(Fe,Df):Of()})}function Nf(){if(wf===0){var e=Oa;e===0&&(e=Je,Je<<=1,!(Je&261888)&&(Je=256)),wf=e}return wf}function Pf(e){return e==null||typeof e==`symbol`||typeof e==`boolean`?null:typeof e==`function`?e:an(e)}function Ff(e,t,n,r,i){if(t===`submit`&&n&&n.stateNode===i){var a=Pf((i[X]||null).action),o=r.submitter;o&&(t=(t=o[X]||null)?Pf(t.formAction):o.getAttribute(`formAction`),t!==null&&(a=t,o=null));var s=new Dn(`action`,`action`,null,r,i);e.push({event:s,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(wf!==0){var e=new FormData(i,o);Gs(n,{pending:!0,data:e,method:i.method,action:a},null,e)}}else typeof a==`function`&&(s.preventDefault(),e=new FormData(i,o),Gs(n,{pending:!0,data:e,method:i.method,action:a},a,e))},currentTarget:i}]})}}for(var If=0;If<ni.length;If++){var Lf=ni[If];ri(Lf.toLowerCase(),`on`+(Lf[0].toUpperCase()+Lf.slice(1)))}ri(Jr,`onAnimationEnd`),ri(Yr,`onAnimationIteration`),ri(Xr,`onAnimationStart`),ri(`dblclick`,`onDoubleClick`),ri(`focusin`,`onFocus`),ri(`focusout`,`onBlur`),ri(Zr,`onTransitionRun`),ri(Qr,`onTransitionStart`),ri($r,`onTransitionCancel`),ri(ei,`onTransitionEnd`),kt(`onMouseEnter`,[`mouseout`,`mouseover`]),kt(`onMouseLeave`,[`mouseout`,`mouseover`]),kt(`onPointerEnter`,[`pointerout`,`pointerover`]),kt(`onPointerLeave`,[`pointerout`,`pointerover`]),Ot(`onChange`,`change click focusin focusout input keydown keyup selectionchange`.split(` `)),Ot(`onSelect`,`focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),Ot(`onBeforeInput`,[`compositionend`,`keypress`,`textInput`,`paste`]),Ot(`onCompositionEnd`,`compositionend focusout keydown keypress keyup mousedown`.split(` `)),Ot(`onCompositionStart`,`compositionstart focusout keydown keypress keyup mousedown`.split(` `)),Ot(`onCompositionUpdate`,`compositionupdate focusout keydown keypress keyup mousedown`.split(` `));var Rf=`abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),zf=new Set(`beforetoggle cancel close invalid load scroll scrollend toggle`.split(` `).concat(Rf));function Bf(e,t){t=!!(t&4);for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;a:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){ci(e)}i.currentTarget=null,a=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,l=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){ci(e)}i.currentTarget=null,a=c}}}}function Vf(e,t){var n=t[mt];n===void 0&&(n=t[mt]=new Set);var r=e+`__bubble`;n.has(r)||(Gf(t,e,2,!1),n.add(r))}function Hf(e,t,n){var r=0;t&&(r|=4),Gf(n,e,r,t)}var Uf=`_reactListening`+Math.random().toString(36).slice(2);function Wf(e){if(!e[Uf]){e[Uf]=!0,Et.forEach(function(t){t!==`selectionchange`&&(zf.has(t)||Hf(t,!1,e),Hf(t,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Uf]||(t[Uf]=!0,Hf(`selectionchange`,!1,t))}}function Gf(e,t,n,r){switch(wh(t)){case 2:var i=vh;break;case 8:i=yh;break;default:i=bh}n=i.bind(null,t,n,e),i=void 0,!gn||t!==`touchstart`&&t!==`touchmove`&&t!==`wheel`||(i=!0),r?i===void 0?e.addEventListener(t,n,!0):e.addEventListener(t,n,{capture:!0,passive:i}):i===void 0?e.addEventListener(t,n,!1):e.addEventListener(t,n,{passive:i})}function Kf(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)a:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var c=r.stateNode.containerInfo;if(c===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&s.stateNode.containerInfo===i)return;s=s.return}for(;c!==null;){if(s=bt(c),s===null)return;if(l=s.tag,l===5||l===6||l===26||l===27){r=a=s;continue a}c=c.parentNode}}r=r.return}pn(function(){var r=a,i=cn(n),s=[];a:{var c=ti.get(e);if(c!==void 0){var l=Dn,u=e;switch(e){case`keypress`:if(Sn(n)===0)break a;case`keydown`:case`keyup`:l=Gn;break;case`focusin`:u=`focus`,l=In;break;case`focusout`:u=`blur`,l=In;break;case`beforeblur`:case`afterblur`:l=In;break;case`click`:if(n.button===2)break a;case`auxclick`:case`dblclick`:case`mousedown`:case`mousemove`:case`mouseup`:case`mouseout`:case`mouseover`:case`contextmenu`:l=Pn;break;case`drag`:case`dragend`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`dragstart`:case`drop`:l=Fn;break;case`touchcancel`:case`touchend`:case`touchmove`:case`touchstart`:l=Jn;break;case Jr:case Yr:case Xr:l=Ln;break;case ei:l=Yn;break;case`scroll`:case`scrollend`:l=kn;break;case`wheel`:l=Xn;break;case`copy`:case`cut`:case`paste`:l=Rn;break;case`gotpointercapture`:case`lostpointercapture`:case`pointercancel`:case`pointerdown`:case`pointermove`:case`pointerout`:case`pointerover`:case`pointerup`:l=Kn;break;case`submit`:l=qn;break;case`toggle`:case`beforetoggle`:l=Zn}var d=!!(t&4),f=!d&&(e===`scroll`||e===`scrollend`),p=d?c===null?null:c+`Capture`:c;d=[];for(var m=r,h;m!==null;){var g=m;if(h=g.stateNode,g=g.tag,g!==5&&g!==26&&g!==27||h===null||p===null||(g=mn(m,p),g!=null&&d.push(qf(m,g,h))),f)break;m=m.return}0<d.length&&(c=new l(c,u,null,n,i),s.push({event:c,listeners:d}))}}if(!(t&7)){a:{if(l=e===`mouseover`||e===`pointerover`,c=e===`mouseout`||e===`pointerout`,l&&n!==sn&&(u=n.relatedTarget||n.fromElement)&&(bt(u)||u[pt]))break a;(c||l)&&(u=i.window===i?i:(l=i.ownerDocument)?l.defaultView||l.parentWindow:window,c?(l=n.relatedTarget||n.toElement,c=r,l=l?bt(l):null,l!==null&&(f=o(l),d=l.tag,l!==f||d!==5&&d!==27&&d!==6)&&(l=null)):(c=null,l=r),c!==l&&(d=Pn,g=`onMouseLeave`,p=`onMouseEnter`,m=`mouse`,(e===`pointerout`||e===`pointerover`)&&(d=Kn,g=`onPointerLeave`,p=`onPointerEnter`,m=`pointer`),f=c==null?u:St(c),h=l==null?u:St(l),u=new d(g,m+`leave`,c,n,i),u.target=f,u.relatedTarget=h,g=null,bt(i)===r&&(d=new d(p,m+`enter`,l,n,i),d.target=h,d.relatedTarget=f,g=d),f=g,d=c&&l?E(c,l,Yf):null,c!==null&&Xf(s,u,c,d,!1),l!==null&&f!==null&&Xf(s,f,l,d,!0)))}a:{if(c=r?St(r):window,l=c.nodeName&&c.nodeName.toLowerCase(),l===`select`||l===`input`&&c.type===`file`)var _=_r;else if(dr(c)){if(vr)_=Dr;else{_=Tr;var v=wr}}else l=c.nodeName,!l||l.toLowerCase()!==`input`||c.type!==`checkbox`&&c.type!==`radio`?r&&tn(r.elementType)&&(_=_r):_=Er;if(_&&=_(e,r)){fr(s,_,n,i);break a}v&&v(e,c,r)}switch(v=r?St(r):window,e){case`focusin`:(dr(v)||v.contentEditable===`true`)&&(Rr=v,zr=r,Br=null);break;case`focusout`:Br=zr=Rr=null;break;case`mousedown`:Vr=!0;break;case`contextmenu`:case`mouseup`:case`dragend`:Vr=!1,Hr(s,n,i);break;case`selectionchange`:if(Lr)break;case`keydown`:case`keyup`:Hr(s,n,i)}var y;if($n)b:{switch(e){case`compositionstart`:var b=`onCompositionStart`;break b;case`compositionend`:b=`onCompositionEnd`;break b;case`compositionupdate`:b=`onCompositionUpdate`;break b}b=void 0}else sr?ar(e,n)&&(b=`onCompositionEnd`):e===`keydown`&&n.keyCode===229&&(b=`onCompositionStart`);b&&(nr&&n.locale!==`ko`&&(sr||b!==`onCompositionStart`?b===`onCompositionEnd`&&sr&&(y=xn()):(vn=i,yn=`value`in vn?vn.value:vn.textContent,sr=!0)),v=Jf(r,b),0<v.length&&(b=new zn(b,e,null,n,i),s.push({event:b,listeners:v}),y?b.data=y:(y=or(n),y!==null&&(b.data=y)))),(y=tr?cr(e,n):lr(e,n))&&(b=Jf(r,`onBeforeInput`),0<b.length&&(v=new zn(`onBeforeInput`,`beforeinput`,null,n,i),s.push({event:v,listeners:b}),v.data=y)),Ff(s,e,r,n,i)}Bf(s,t)})}function qf(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Jf(e,t){for(var n=t+`Capture`,r=[];e!==null;){var i=e,a=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||a===null||(i=mn(e,n),i!=null&&r.unshift(qf(e,i,a)),i=mn(e,t),i!=null&&r.push(qf(e,i,a))),e.tag===3)return r;e=e.return}return[]}function Yf(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Xf(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(s=s.tag,c!==null&&c===r)break;s!==5&&s!==26&&s!==27||l===null||(c=l,i?(l=mn(n,a),l!=null&&o.unshift(qf(n,l,c))):i||(l=mn(n,a),l!=null&&o.push(qf(n,l,c)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var Zf=/\r\n?/g,Qf=/\u0000|\uFFFD/g;function $f(e){return(typeof e==`string`?e:``+e).replace(Zf,`
`).replace(Qf,``)}function ep(e,t){return t=$f(t),$f(e)===t}function tp(e,t,n,r,a,o){switch(n){case`children`:if(typeof r==`string`)t===`body`||t===`textarea`&&r===``||Zt(e,r);else if(typeof r==`number`||typeof r==`bigint`)t!==`body`&&Zt(e,``+r);else return;break;case`className`:Lt(e,`class`,r);break;case`tabIndex`:Lt(e,`tabindex`,r);break;case`dir`:case`role`:case`viewBox`:case`width`:case`height`:Lt(e,n,r);break;case`style`:en(e,r,o);return;case`data`:if(t!==`object`){Lt(e,`data`,r);break}case`src`:case`href`:if(r===``&&(t!==`a`||n!==`href`)||r==null||typeof r==`function`||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=an(r),e.setAttribute(n,r);break;case`action`:case`formAction`:if(typeof r==`function`){e.setAttribute(n,`javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`);break}if(typeof o==`function`&&(n===`formAction`?(t!==`input`&&tp(e,t,`name`,a.name,a,null),tp(e,t,`formEncType`,a.formEncType,a,null),tp(e,t,`formMethod`,a.formMethod,a,null),tp(e,t,`formTarget`,a.formTarget,a,null)):(tp(e,t,`encType`,a.encType,a,null),tp(e,t,`method`,a.method,a,null),tp(e,t,`target`,a.target,a,null))),r==null||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=an(r),e.setAttribute(n,r);break;case`onClick`:r!=null&&(e.onclick=on);return;case`onScroll`:r!=null&&Vf(`scroll`,e);return;case`onScrollEnd`:r!=null&&Vf(`scrollend`,e);return;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));o?.__html!==n&&(e.innerHTML=n)}}break;case`multiple`:e.multiple=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`muted`:e.muted=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`defaultValue`:case`defaultChecked`:case`innerHTML`:case`ref`:break;case`autoFocus`:break;case`xlinkHref`:if(r==null||typeof r==`function`||typeof r==`boolean`||typeof r==`symbol`){e.removeAttribute(`xlink:href`);break}n=an(r),e.setAttributeNS(`http://www.w3.org/1999/xlink`,`xlink:href`,n);break;case`contentEditable`:case`spellCheck`:case`draggable`:case`value`:case`autoReverse`:case`externalResourcesRequired`:case`focusable`:case`preserveAlpha`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`inert`:case`allowFullScreen`:case`async`:case`autoPlay`:case`controls`:case`credentialless`:case`default`:case`defer`:case`disabled`:case`disablePictureInPicture`:case`disableRemotePlayback`:case`formNoValidate`:case`hidden`:case`loop`:case`noModule`:case`noValidate`:case`open`:case`playsInline`:case`readOnly`:case`required`:case`reversed`:case`scoped`:case`seamless`:case`itemScope`:r&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``):e.removeAttribute(n);break;case`capture`:case`download`:!0===r?e.setAttribute(n,``):!1!==r&&r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`cols`:case`rows`:case`size`:case`span`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case`rowSpan`:case`start`:r==null||typeof r==`function`||typeof r==`symbol`||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case`popover`:Vf(`beforetoggle`,e),Vf(`toggle`,e),It(e,`popover`,r);break;case`xlinkActuate`:Rt(e,`http://www.w3.org/1999/xlink`,`xlink:actuate`,r);break;case`xlinkArcrole`:Rt(e,`http://www.w3.org/1999/xlink`,`xlink:arcrole`,r);break;case`xlinkRole`:Rt(e,`http://www.w3.org/1999/xlink`,`xlink:role`,r);break;case`xlinkShow`:Rt(e,`http://www.w3.org/1999/xlink`,`xlink:show`,r);break;case`xlinkTitle`:Rt(e,`http://www.w3.org/1999/xlink`,`xlink:title`,r);break;case`xlinkType`:Rt(e,`http://www.w3.org/1999/xlink`,`xlink:type`,r);break;case`xmlBase`:Rt(e,`http://www.w3.org/XML/1998/namespace`,`xml:base`,r);break;case`xmlLang`:Rt(e,`http://www.w3.org/XML/1998/namespace`,`xml:lang`,r);break;case`xmlSpace`:Rt(e,`http://www.w3.org/XML/1998/namespace`,`xml:space`,r);break;case`is`:It(e,`is`,r);break;case`innerText`:case`textContent`:return;default:if(!(2<n.length)||n[0]!==`o`&&n[0]!==`O`||n[1]!==`n`&&n[1]!==`N`)n=nn.get(n)||n,It(e,n,r);else return}Pt=!0}function np(e,t,n,r,a,o){switch(n){case`style`:en(e,r,o);return;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));o?.__html!==n&&(e.innerHTML=n)}}break;case`children`:if(typeof r==`string`)Zt(e,r);else if(typeof r==`number`||typeof r==`bigint`)Zt(e,``+r);else return;break;case`onScroll`:r!=null&&Vf(`scroll`,e);return;case`onScrollEnd`:r!=null&&Vf(`scrollend`,e);return;case`onClick`:r!=null&&(e.onclick=on);return;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`innerHTML`:case`ref`:return;case`innerText`:case`textContent`:return;default:if(!Dt.hasOwnProperty(n))a:{if(n[0]===`o`&&n[1]===`n`&&(a=n.endsWith(`Capture`),o=n.slice(2,a?n.length-7:void 0),t=e[X]||null,t=t==null?null:t[n],typeof t==`function`&&e.removeEventListener(o,t,a),typeof r==`function`)){typeof t!=`function`&&t!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(o,r,a);break a}Pt=!0,n in e?e[n]=r:!0===r?e.setAttribute(n,``):It(e,n,r)}return}Pt=!0}function rp(e,t,n){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`img`:Vf(`error`,e),Vf(`load`,e);var r=!1,a=!1,o;for(o in n)if(n.hasOwnProperty(o)){var s=n[o];if(s!=null)switch(o){case`src`:r=!0;break;case`srcSet`:a=!0;break;case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:tp(e,t,o,s,n,null)}}a&&tp(e,t,`srcSet`,n.srcSet,n,null),r&&tp(e,t,`src`,n.src,n,null);return;case`input`:Vf(`invalid`,e);var c=o=s=a=null,l=null,u=null;for(r in n)if(n.hasOwnProperty(r)){var d=n[r];if(d!=null)switch(r){case`name`:a=d;break;case`type`:s=d;break;case`checked`:l=d;break;case`defaultChecked`:u=d;break;case`value`:o=d;break;case`defaultValue`:c=d;break;case`children`:case`dangerouslySetInnerHTML`:if(d!=null)throw Error(i(137,t));break;default:tp(e,t,r,d,n,null)}}Kt(e,o,c,l,u,s,a,!1);return;case`select`:for(a in Vf(`invalid`,e),r=s=o=null,n)if(n.hasOwnProperty(a)&&(c=n[a],c!=null))switch(a){case`value`:o=c;break;case`defaultValue`:s=c;break;case`multiple`:r=c;default:tp(e,t,a,c,n,null)}t=o,n=s,e.multiple=!!r,t==null?n!=null&&Jt(e,!!r,n,!0):Jt(e,!!r,t,!1);return;case`textarea`:for(s in Vf(`invalid`,e),o=a=r=null,n)if(n.hasOwnProperty(s)&&(c=n[s],c!=null))switch(s){case`value`:r=c;break;case`defaultValue`:a=c;break;case`children`:o=c;break;case`dangerouslySetInnerHTML`:if(c!=null)throw Error(i(91));break;default:tp(e,t,s,c,n,null)}Xt(e,r,a,o);return;case`option`:for(l in n)if(n.hasOwnProperty(l)&&(r=n[l],r!=null))switch(l){case`selected`:e.selected=r&&typeof r!=`function`&&typeof r!=`symbol`;break;default:tp(e,t,l,r,n,null)}return;case`dialog`:Vf(`beforetoggle`,e),Vf(`toggle`,e),Vf(`cancel`,e),Vf(`close`,e);break;case`iframe`:case`object`:Vf(`load`,e);break;case`video`:case`audio`:for(r=0;r<Rf.length;r++)Vf(Rf[r],e);break;case`image`:Vf(`error`,e),Vf(`load`,e);break;case`details`:Vf(`toggle`,e);break;case`embed`:case`source`:case`link`:Vf(`error`,e),Vf(`load`,e);case`area`:case`base`:case`br`:case`col`:case`hr`:case`keygen`:case`meta`:case`param`:case`track`:case`wbr`:case`menuitem`:for(u in n)if(n.hasOwnProperty(u)&&(r=n[u],r!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:tp(e,t,u,r,n,null)}return;default:if(tn(t)){for(d in n)n.hasOwnProperty(d)&&(r=n[d],r!==void 0&&np(e,t,d,r,n,void 0));return}}for(c in n)n.hasOwnProperty(c)&&(r=n[c],r!=null&&tp(e,t,c,r,n,null))}var ip={};function ap(e,t,n,r){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`input`:var a=null,o=null,s=null,c=null,l=null,u=null,d=null;for(m in n){var f=n[m];if(n.hasOwnProperty(m)&&f!=null)switch(m){case`checked`:break;case`value`:break;case`defaultValue`:l=f;default:r.hasOwnProperty(m)||tp(e,t,m,null,r,f)}}for(var p in r){var m=r[p];if(f=n[p],r.hasOwnProperty(p)&&(m!=null||f!=null))switch(p){case`type`:m!==f&&(Pt=!0),o=m;break;case`name`:m!==f&&(Pt=!0),a=m;break;case`checked`:m!==f&&(Pt=!0),u=m;break;case`defaultChecked`:m!==f&&(Pt=!0),d=m;break;case`value`:m!==f&&(Pt=!0),s=m;break;case`defaultValue`:m!==f&&(Pt=!0),c=m;break;case`children`:case`dangerouslySetInnerHTML`:if(m!=null)throw Error(i(137,t));break;default:m!==f&&tp(e,t,p,m,r,f)}}Gt(e,s,c,l,u,d,o,a);return;case`select`:for(o in m=s=c=p=null,n)if(l=n[o],n.hasOwnProperty(o)&&l!=null)switch(o){case`value`:break;case`multiple`:m=l;default:r.hasOwnProperty(o)||tp(e,t,o,null,r,l)}for(a in r)if(o=r[a],l=n[a],r.hasOwnProperty(a)&&(o!=null||l!=null))switch(a){case`value`:o!==l&&(Pt=!0),p=o;break;case`defaultValue`:o!==l&&(Pt=!0),c=o;break;case`multiple`:o!==l&&(Pt=!0),s=o;default:o!==l&&tp(e,t,a,o,r,l)}t=c,n=s,r=m,p==null?!!r!=!!n&&(t==null?Jt(e,!!n,n?[]:``,!1):Jt(e,!!n,t,!0)):Jt(e,!!n,p,!1);return;case`textarea`:for(c in m=p=null,n)if(a=n[c],n.hasOwnProperty(c)&&a!=null&&!r.hasOwnProperty(c))switch(c){case`value`:break;case`children`:break;default:tp(e,t,c,null,r,a)}for(s in r)if(a=r[s],o=n[s],r.hasOwnProperty(s)&&(a!=null||o!=null))switch(s){case`value`:a!==o&&(Pt=!0),p=a;break;case`defaultValue`:a!==o&&(Pt=!0),m=a;break;case`children`:break;case`dangerouslySetInnerHTML`:if(a!=null)throw Error(i(91));break;default:a!==o&&tp(e,t,s,a,r,o)}Yt(e,p,m);return;case`option`:for(var h in n)if(p=n[h],n.hasOwnProperty(h)&&p!=null&&!r.hasOwnProperty(h))switch(h){case`selected`:e.selected=!1;break;default:tp(e,t,h,null,r,p)}for(l in r)if(p=r[l],m=n[l],r.hasOwnProperty(l)&&p!==m&&(p!=null||m!=null))switch(l){case`selected`:p!==m&&(Pt=!0),e.selected=p&&typeof p!=`function`&&typeof p!=`symbol`;break;default:tp(e,t,l,p,r,m)}return;case`img`:case`link`:case`area`:case`base`:case`br`:case`col`:case`embed`:case`hr`:case`keygen`:case`meta`:case`param`:case`source`:case`track`:case`wbr`:case`menuitem`:for(var g in n)p=n[g],n.hasOwnProperty(g)&&p!=null&&!r.hasOwnProperty(g)&&tp(e,t,g,null,r,p);for(u in r)if(p=r[u],m=n[u],r.hasOwnProperty(u)&&p!==m&&(p!=null||m!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:if(p!=null)throw Error(i(137,t));break;default:tp(e,t,u,p,r,m)}return;default:if(tn(t)){for(var _ in n)p=n[_],n.hasOwnProperty(_)&&p!==void 0&&!r.hasOwnProperty(_)&&np(e,t,_,void 0,r,p);for(d in r)p=r[d],m=n[d],!r.hasOwnProperty(d)||p===m||p===void 0&&m===void 0||np(e,t,d,p,r,m);return}}for(var v in n)p=n[v],n.hasOwnProperty(v)&&p!=null&&!r.hasOwnProperty(v)&&tp(e,t,v,null,r,p);for(f in r)p=r[f],m=n[f],!r.hasOwnProperty(f)||p===m||p==null&&m==null||tp(e,t,f,p,r,m)}function op(e){switch(e){case`css`:case`script`:case`font`:case`img`:case`image`:case`input`:case`link`:return!0;default:return!1}}function sp(){if(typeof performance.getEntriesByType==`function`){for(var e=0,t=0,n=performance.getEntriesByType(`resource`),r=0;r<n.length;r++){var i=n[r],a=i.transferSize,o=i.initiatorType,s=i.duration;if(a&&s&&op(o)){for(o=0,s=i.responseEnd,r+=1;r<n.length;r++){var c=n[r],l=c.startTime;if(l>s)break;var u=c.transferSize,d=c.initiatorType;u&&op(d)&&(c=c.responseEnd,o+=u*(c<s?1:(s-l)/(c-l)))}if(--r,t+=8*(a+o)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e==`number`)?e:5}var cp=null,lp=null;function up(e){return e.nodeType===9?e:e.ownerDocument}function dp(e){switch(e){case`http://www.w3.org/2000/svg`:return 1;case`http://www.w3.org/1998/Math/MathML`:return 2;default:return 0}}function fp(e,t){if(e===0)switch(t){case`svg`:return 1;case`math`:return 2;default:return 0}return e===1&&t===`foreignObject`?0:e}function pp(e,t,n,r){return n=up(n).createElement(e),n[Y]=r,n[X]=t,rp(n,e,t),wt(n),n}function mp(e,t){return e===`textarea`||e===`noscript`||typeof t.children==`string`||typeof t.children==`number`||typeof t.children==`bigint`||typeof t.dangerouslySetInnerHTML==`object`&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var hp=null;function gp(){var e=window.event;return e&&e.type===`popstate`?e!==hp&&(hp=e,!0):(hp=null,!1)}var _p=typeof setTimeout==`function`?setTimeout:void 0,vp=typeof clearTimeout==`function`?clearTimeout:void 0,yp=typeof Promise==`function`?Promise:void 0,bp=typeof requestAnimationFrame==`function`?requestAnimationFrame:_p,xp=typeof queueMicrotask==`function`?queueMicrotask:yp===void 0?_p:function(e){return yp.resolve(null).then(e).catch(Sp)};function Sp(e){setTimeout(function(){throw e})}function Cp(e){return e===`head`}function wp(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8){if(n=i.data,n===`/$`||n===`/&`){if(r===0){e.removeChild(i),Uh(t);return}r--}else if(n===`$`||n===`$?`||n===`$~`||n===`$!`||n===`&`)r++;else if(n===`html`)vm(e.ownerDocument.documentElement);else if(n===`head`){n=e.ownerDocument.head,vm(n);for(var a=n.firstChild;a;){var o=a.nextSibling,s=a.nodeName;a[_t]||s===`SCRIPT`||s===`STYLE`||s===`LINK`&&a.rel.toLowerCase()===`stylesheet`||n.removeChild(a),a=o}}else n===`body`&&vm(e.ownerDocument.body)}n=i}while(n);Uh(t)}function Tp(e,t){var n=e;e=0;do{var r=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display=`none`):(n.style.display=n._stashedDisplay||``,n.getAttribute(`style`)===``&&n.removeAttribute(`style`)):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=``):n.nodeValue=n._stashedText||``),r&&r.nodeType===8){if(n=r.data,n===`/$`){if(e===0)break;e--}else n!==`$`&&n!==`$?`&&n!==`$~`&&n!==`$!`||e++}n=r}while(n)}function Ep(e,t,n){if(t=CSS.escape(t)===t?t:`r-`+btoa(t).replace(/=/g,``),e.style.viewTransitionName=t,n!=null&&(e.style.viewTransitionClass=n),n=getComputedStyle(e),n.display===`inline`){if(t=e.getClientRects(),t.length===1)var r=1;else for(var i=r=0;i<t.length;i++){var a=t[i];0<a.width&&0<a.height&&r++}r===1&&(e=e.style,e.display=t.length===1?`inline-block`:`block`,e.marginTop=`-`+n.paddingTop,e.marginBottom=`-`+n.paddingBottom)}}function Dp(e,t){e=e.style,t=t.style;var n=t==null?null:t.hasOwnProperty(`viewTransitionName`)?t.viewTransitionName:t.hasOwnProperty(`view-transition-name`)?t[`view-transition-name`]:null;e.viewTransitionName=n==null||typeof n==`boolean`?``:(``+n).trim(),n=t==null?null:t.hasOwnProperty(`viewTransitionClass`)?t.viewTransitionClass:t.hasOwnProperty(`view-transition-class`)?t[`view-transition-class`]:null,e.viewTransitionClass=n==null||typeof n==`boolean`?``:(``+n).trim(),e.display===`inline-block`&&(t==null?e.display=e.margin=``:(n=t.display,e.display=n==null||typeof n==`boolean`?``:n,n=t.margin,n==null?(n=t.hasOwnProperty(`marginTop`)?t.marginTop:t[`margin-top`],e.marginTop=n==null||typeof n==`boolean`?``:n,t=t.hasOwnProperty(`marginBottom`)?t.marginBottom:t[`margin-bottom`],e.marginBottom=t==null||typeof t==`boolean`?``:t):e.margin=n))}function Op(e,t,n){return n=n.ownerDocument.defaultView,{rect:e,abs:t.position===`absolute`||t.position===`fixed`,clip:t.clipPath!==`none`||t.overflow!==`visible`||t.filter!==`none`||t.mask!==`none`||t.mask!==`none`||t.borderRadius!==`0px`,view:0<=e.bottom&&0<=e.right&&e.top<=n.innerHeight&&e.left<=n.innerWidth}}function kp(e){return Op(e.getBoundingClientRect(),getComputedStyle(e),e)}function Ap(e){var t=e.getBoundingClientRect();t=new DOMRect(t.x+2e4,t.y+2e4,t.width,t.height);var n=getComputedStyle(e);return Op(t,n,e)}function jp(e){return e.documentElement.clientHeight}function Mp(e){this.addEventListener(`load`,e),this.addEventListener(`error`,e)}function Np(e,t,n,r,i,a,o,s,c){var l=t.nodeType===9?t:t.ownerDocument;try{var u=l.startViewTransition({update:function(){var t=l.defaultView,n=t.navigation&&t.navigation.transition,o=l.fonts.status;r();var s=[];if(o===`loaded`&&(jp(l),l.fonts.status===`loading`&&s.push(l.fonts.ready)),o=s.length,e!==null)for(var c=e.suspenseyImages,u=0,d=0;d<c.length;d++){var f=c[d];if(!f.complete){var p=f.getBoundingClientRect();if(0<p.bottom&&0<p.right&&p.top<t.innerHeight&&p.left<t.innerWidth){if(u+=Zm(f),u>eh){s.length=o;break}f=new Promise(Mp.bind(f)),s.push(f)}}}if(0<s.length)return t=Promise.race([Promise.all(s),new Promise(function(e){return setTimeout(e,500)})]).then(i,i),(n?Promise.allSettled([n.finished,t]):t).then(a,a);if(i(),n)return n.finished.then(a,a);a()},types:n});l.__reactViewTransition=u;var d=[];return u.ready.then(function(){for(var e=l.documentElement.getAnimations({subtree:!0}),t=0;t<e.length;t++){var n=e[t],r=n.effect,i=r.pseudoElement;if(i!=null&&i.startsWith(`::view-transition`)){d.push(n),n=r.getKeyframes();for(var a=i=void 0,s=!0,c=0;c<n.length;c++){var u=n[c],f=u.width;if(i===void 0)i=f;else if(i!==f){s=!1;break}if(f=u.height,a===void 0)a=f;else if(a!==f){s=!1;break}delete u.width,delete u.height,u.transform===`none`&&delete u.transform}s&&i!==void 0&&a!==void 0&&(r.setKeyframes(n),s=getComputedStyle(r.target,r.pseudoElement),s.width!==i||s.height!==a)&&(s=n[0],s.width=i,s.height=a,s=n[n.length-1],s.width=i,s.height=a,r.setKeyframes(n))}}o()},function(e){l.__reactViewTransition===u&&(l.__reactViewTransition=null);try{if(typeof e==`object`&&e)switch(e.name){case`InvalidStateError`:(e.message===`View transition was skipped because document visibility state is hidden.`||e.message===`Skipping view transition because document visibility state has become hidden.`||e.message===`Skipping view transition because viewport size changed.`||e.message===`Transition was aborted because of invalid state`)&&(e=null)}e!==null&&c(e)}finally{r(),i(),o()}}),u.finished.finally(function(){for(var e=0;e<d.length;e++)d[e].cancel();l.__reactViewTransition===u&&(l.__reactViewTransition=null),s()}),u}catch{return r(),i(),o(),null}}function Pp(e,t){this._scope=document.documentElement,this._selector=`::view-transition-`+e+`(`+t+`)`}Pp.prototype.animate=function(e,t){return t=typeof t==`number`?{duration:t}:D({},t),t.pseudoElement=this._selector,this._scope.animate(e,t)},Pp.prototype.getAnimations=function(){for(var e=this._scope,t=this._selector,n=e.getAnimations({subtree:!0}),r=[],i=0;i<n.length;i++){var a=n[i].effect;a!==null&&a.target===e&&a.pseudoElement===t&&r.push(n[i])}return r},Pp.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function Fp(e){return{name:e,group:new Pp(`group`,e),imagePair:new Pp(`image-pair`,e),old:new Pp(`old`,e),new:new Pp(`new`,e)}}function Ip(e){this._fragmentFiber=e,this._observers=this._eventListeners=null}Ip.prototype.addEventListener=function(e,t,n){var r=null,i=null;if(!(n!=null&&typeof n!=`boolean`&&(r=n.signal||null,r!==null&&r.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var a=this._eventListeners;if(Vp(a,e,t,n)===-1){var o=this,s=t;n!=null&&typeof n!=`boolean`&&!0===n.once&&(s=function(r){o.removeEventListener(e,t,n),typeof t==`function`?t.call(this,r):t.handleEvent(r)}),r!==null&&(i=o.removeEventListener.bind(o,e,t,n),r.addEventListener(`abort`,i,{once:!0}),i=r.removeEventListener.bind(r,`abort`,i)),r=zp(n),a.push({type:e,listener:t,optionsOrUseCapture:n,attachedListener:s,cleanup:i}),m(this._fragmentFiber.child,!1,Lp,e,s,r)}this._eventListeners=a}};function Lp(e,t,n,r){return b(e).addEventListener(t,n,r),!1}Ip.prototype.removeEventListener=function(e,t,n){var r=this._eventListeners;if(r!==null&&(t=Vp(r,e,t,n),t!==-1)){var i=r[t];n=i.attachedListener;var a=i.cleanup;i=zp(i.optionsOrUseCapture),m(this._fragmentFiber.child,!1,Rp,e,n,i),r.splice(t,1),a!==null&&a()}};function Rp(e,t,n,r){return b(e).removeEventListener(t,n,r),!1}function zp(e){return e!=null&&typeof e!=`boolean`&&(!0===e.once||e.signal instanceof AbortSignal)?{capture:e.capture,passive:e.passive}:e}function Bp(e){return e==null?`c=0`:typeof e==`boolean`?`c=`+(e?`1`:`0`):`c=`+(e.capture?`1`:`0`)}function Vp(e,t,n,r){if(e.length===0)return-1;r=Bp(r);for(var i=0;i<e.length;i++){var a=e[i];if(a.type===t&&a.listener===n&&Bp(a.optionsOrUseCapture)===r)return i}return-1}Ip.prototype.dispatchEvent=function(e){var t=g(this._fragmentFiber);if(t===null)return!0;t=b(t);var n=this._eventListeners;if(n!==null&&0<n.length||!e.bubbles){var r=t.nodeType===9?t.createComment(``):document.createTextNode(``);if(n)for(var i=0;i<n.length;i++){var a=n[i];r.addEventListener(a.type,a.attachedListener,zp(a.optionsOrUseCapture))}if(t.appendChild(r),e=r.dispatchEvent(e),n)for(i=0;i<n.length;i++)a=n[i],r.removeEventListener(a.type,a.attachedListener,zp(a.optionsOrUseCapture));return t.removeChild(r),e}return t.dispatchEvent(e)},Ip.prototype.focus=function(e){m(this._fragmentFiber.child,!0,Hp,e,void 0,void 0)};function Hp(e,t){return e.tag!==6&&(e=b(e),mm(e,t))}Ip.prototype.focusLast=function(e){var t=[];m(this._fragmentFiber.child,!0,Up,t,void 0,void 0);for(var n=t.length-1;0<=n&&!Hp(t[n],e);n--);};function Up(e,t){return t.push(e),!1}Ip.prototype.blur=function(){var e=g(this._fragmentFiber);e!==null&&(e=b(e),e=up(e).activeElement,e!==null&&m(this._fragmentFiber.child,!1,Wp,e,void 0,void 0))};function Wp(e,t){return e.tag!==6&&(e=b(e),e===t||e.contains(t)?(t.blur(),!0):!1)}Ip.prototype.observeUsing=function(e){this._observers===null&&(this._observers=new Set),this._observers.add(e),m(this._fragmentFiber.child,!1,Gp,e,void 0,void 0)};function Gp(e,t){return e.tag===6||(e=b(e),t.observe(e)),!1}Ip.prototype.unobserveUsing=function(e){var t=this._observers;if(t!==null&&t.has(e)){t.delete(e),m(this._fragmentFiber.child,!1,Kp,e,void 0,void 0);for(var n=t=0;n<qp.length;n++){var r=qp[n];r.fragmentInstance===this&&r.observer===e?e.unobserve(r.instance):qp[t++]=r}qp.length=t}};function Kp(e,t){return e.tag===6||(e=b(e),t.unobserve(e)),!1}var qp=[],Jp=!1;function Yp(e,t,n){qp.push({fragmentInstance:e,observer:t,instance:n}),Jp||(Jp=!0,hm(function(){Jp=!1;var e=qp;qp=[];for(var t=0;t<e.length;t++){var n=e[t];n.observer.unobserve(n.instance)}}))}Ip.prototype.getClientRects=function(){var e=[];return m(this._fragmentFiber.child,!1,Xp,e,void 0,void 0),e};function Xp(e,t){if(e.tag===6){e=e.stateNode;var n=e.ownerDocument.createRange();n.selectNodeContents(e),t.push.apply(t,n.getClientRects())}else e=b(e),t.push.apply(t,e.getClientRects());return!1}Ip.prototype.getRootNode=function(e){var t=g(this._fragmentFiber);return t===null?this:b(t).getRootNode(e)},Ip.prototype.compareDocumentPosition=function(e){var t=g(this._fragmentFiber);if(t===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var n=[];m(this._fragmentFiber.child,!1,Up,n,void 0,void 0);var r=b(t);if(n.length===0){if(n=r,_(this._fragmentFiber)){a:{for(t=this._fragmentFiber.return;t!==null;){if(t.tag===4){t=t.stateNode.containerInfo;break a}if(t.tag===3||t.tag===5||t.tag===27)break;t=t.return}t=null}t!=null&&(n=t)}t=this._fragmentFiber;var i=r=n.compareDocumentPosition(e);return n===e?i=Node.DOCUMENT_POSITION_CONTAINS:r&Node.DOCUMENT_POSITION_CONTAINED_BY&&(n=v(t)[1],n===null?i=Node.DOCUMENT_POSITION_PRECEDING:(e=b(n).compareDocumentPosition(e),i=e===0||e&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),i|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}t=b(n[0]),i=b(n[n.length-1]);var a=_(this._fragmentFiber)?t.parentElement:r;if(a==null)return Node.DOCUMENT_POSITION_DISCONNECTED;r=a.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_CONTAINED_BY,a=a.compareDocumentPosition(i)&Node.DOCUMENT_POSITION_CONTAINED_BY;var o=t.compareDocumentPosition(e),s=i.compareDocumentPosition(e),c=o&Node.DOCUMENT_POSITION_CONTAINED_BY||s&Node.DOCUMENT_POSITION_CONTAINED_BY;return s=r&&a&&o&Node.DOCUMENT_POSITION_FOLLOWING&&s&Node.DOCUMENT_POSITION_PRECEDING,t=r&&t===e||a&&i===e||c||s?Node.DOCUMENT_POSITION_CONTAINED_BY:!r&&t===e||!a&&i===e?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:o,t&Node.DOCUMENT_POSITION_DISCONNECTED||t&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||Zp(t,this._fragmentFiber,n[0],n[n.length-1],e)?t:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function Zp(e,t,n,r,i){var a=bt(i);if(e&Node.DOCUMENT_POSITION_CONTAINED_BY){if(n=!!a)a:{for(;a!==null;){if(a.tag===7&&(a===t||a.alternate===t)){n=!0;break a}a=a.return}n=!1}return n}if(e&Node.DOCUMENT_POSITION_CONTAINS){if(a===null)return a=i.ownerDocument,i===a||i===a.documentElement||i===a.body;a:{for(a=t,t=g(t);a!==null;){if(!(a.tag!==5&&a.tag!==3&&a.tag!==27||a!==t&&a.alternate!==t)){a=!0;break a}a=a.return}a=!1}return a}return e&Node.DOCUMENT_POSITION_PRECEDING?((t=!!a)&&!(t=a===n)&&(t=E(n,a,T),t===null?t=!1:(m(t,!0,C,a,n),a=x,x=null,t=a!==null)),t):e&Node.DOCUMENT_POSITION_FOLLOWING?((t=!!a)&&!(t=a===r)&&(t=E(r,a,T),t===null?t=!1:(m(t,!0,w,a,r),a=x,S=x=null,t=a!==null)),t):!1}function Qp(e,t){var n=e.ownerDocument.createRange();n.selectNodeContents(e),e=n.getBoundingClientRect(),window.scrollTo(window.scrollX+e.left,t?window.scrollY+e.top:window.scrollY+e.bottom-window.innerHeight)}Ip.prototype.scrollIntoView=function(e){if(typeof e==`object`)throw Error(i(566));var t=[];m(this._fragmentFiber.child,!1,Up,t,void 0,void 0);var n=!1!==e;if(t.length===0){var r=v(this._fragmentFiber);if(r=n?r[1]||r[0]||g(this._fragmentFiber):r[0]||r[1],r===null)return;if(r.tag===6){e=b(r),Qp(e,n);return}if(r=b(r),r.nodeType!==9){if(r.nodeType===11){n=`host`in r?r.host:null,n!==null&&n.scrollIntoView(e);return}r.scrollIntoView(e)}}for(r=n?t.length-1:0;r!==(n?-1:t.length);){var a=t[r];a.tag===6?(a=b(a),Qp(a,n)):b(a).scrollIntoView(e),r+=n?-1:1}};function $p(e,t){return e=b(e),em(e,t),!1}function em(e,t){e.reactFragments??=new Set,e.reactFragments.add(t)}function tm(e,t){var n=t._eventListeners;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];e.addEventListener(i.type,i.attachedListener,zp(i.optionsOrUseCapture))}e.nodeType!==3&&(n=t._observers,n!==null&&n.forEach(function(n){for(var r=0,i=0;i<qp.length;i++){var a=qp[i];(a.fragmentInstance!==t||a.observer!==n||a.instance!==e)&&(qp[r++]=a)}qp.length=r,n.observe(e)}),em(e,t))}function nm(e,t){var n=t._eventListeners;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];e.removeEventListener(i.type,i.attachedListener,zp(i.optionsOrUseCapture))}e.nodeType!==3&&(n=t._observers,n!==null&&n.forEach(function(n){typeof n.rootMargin==`string`?Yp(t,n,e):n.unobserve(e)}),e.reactFragments!=null&&e.reactFragments.delete(t))}function rm(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case`HTML`:case`HEAD`:case`BODY`:rm(n),yt(n);continue;case`SCRIPT`:case`STYLE`:continue;case`LINK`:if(n.rel.toLowerCase()===`stylesheet`)continue}e.removeChild(n)}}function im(e,t,n,r){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!==`INPUT`||e.type!==`hidden`))break}else if(!r){if(t===`input`&&e.type===`hidden`){var a=i.name==null?null:``+i.name;if(i.type===`hidden`&&e.getAttribute(`name`)===a)return e}else return e}else if(!e[_t])switch(t){case`meta`:if(!e.hasAttribute(`itemprop`))break;return e;case`link`:if(a=e.getAttribute(`rel`),a===`stylesheet`&&e.hasAttribute(`data-precedence`)||a!==i.rel||e.getAttribute(`href`)!==(i.href==null||i.href===``?null:i.href)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute(`title`)!==(i.title==null?null:i.title))break;return e;case`style`:if(e.hasAttribute(`data-precedence`))break;return e;case`script`:if(a=e.getAttribute(`src`),(a!==(i.src==null?null:i.src)||e.getAttribute(`type`)!==(i.type==null?null:i.type)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin))&&a&&e.hasAttribute(`async`)&&!e.hasAttribute(`itemprop`))break;return e;default:return e}if(e=um(e.nextSibling),e===null)break}return null}function am(e,t,n){if(t===``)return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!n||(e=um(e.nextSibling),e===null))return null;return e}function om(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!t||(e=um(e.nextSibling),e===null))return null;return e}function sm(e){return e.data===`$?`||e.data===`$~`}function cm(e){return e.data===`$!`||e.data===`$?`&&e.ownerDocument.readyState!==`loading`}function lm(e,t){var n=e.ownerDocument;if(e.data===`$~`)e._reactRetry=t;else if(e.data!==`$?`||n.readyState!==`loading`)t();else{var r=function(){t(),n.removeEventListener(`DOMContentLoaded`,r)};n.addEventListener(`DOMContentLoaded`,r),e._reactRetry=r}}function um(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t===`$`||t===`$!`||t===`$?`||t===`$~`||t===`&`||t===`F!`||t===`F`)break;if(t===`/$`||t===`/&`)return null}}return e}var dm=null;function fm(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`/$`||n===`/&`){if(t===0)return um(e.nextSibling);t--}else n!==`$`&&n!==`$!`&&n!==`$?`&&n!==`$~`&&n!==`&`||t++}e=e.nextSibling}return null}function pm(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`$`||n===`$!`||n===`$?`||n===`$~`||n===`&`){if(t===0)return e;t--}else n!==`/$`&&n!==`/&`||t++}e=e.previousSibling}return null}function mm(e,t){function n(){r=!0}if(e.ownerDocument.activeElement===e)return!0;var r=!1;try{e.ownerDocument.addEventListener(`focus`,n,!0),(e.focus||HTMLElement.prototype.focus).call(e,t)}finally{e.ownerDocument.removeEventListener(`focus`,n,!0)}return r}function hm(e){bp(function(){bp(function(t){return e(t)})})}function gm(e,t,n){switch(t=up(n),e){case`html`:if(e=t.documentElement,!e)throw Error(i(452));return e;case`head`:if(e=t.head,!e)throw Error(i(453));return e;case`body`:if(e=t.body,!e)throw Error(i(454));return e;default:throw Error(i(451))}}function _m(e,t,n){for(var r in n){var i=n[r];n.hasOwnProperty(r)&&i!=null&&tp(e,t,r,null,ip,i)}n.dangerouslySetInnerHTML!=null&&(e.textContent=``),e.onclick===on&&(e.onclick=null),yt(e)}function vm(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);yt(e)}var ym=new Map,bm=new Set;function xm(e){if(typeof e.getRootNode==`function`){var t=e.getRootNode();if(t.nodeType===9||t.nodeType===11)return t}return e.nodeType===9?e:e.ownerDocument}var Sm=W.d;W.d={f:Cm,r:wm,D:Dm,C:Om,L:km,m:Am,X:Mm,S:jm,M:Nm};function Cm(){var e=Sm.f(),t=Ld();return e||t}function wm(e){var t=xt(e);t!==null&&t.tag===5&&t.type===`form`?qs(t):Sm.r(e)}var Tm=typeof document>`u`?null:document;function Em(e,t,n){var r=Tm;if(r&&typeof t==`string`&&t){var i=Wt(t);i=`link[rel="`+e+`"][href="`+i+`"]`,typeof n==`string`&&(i+=`[crossorigin="`+n+`"]`),bm.has(i)||(bm.add(i),e={rel:e,crossOrigin:n,href:t},r.querySelector(i)===null&&(t=r.createElement(`link`),rp(t,`link`,e),wt(t),r.head.appendChild(t)))}}function Dm(e){Sm.D(e),Em(`dns-prefetch`,e,null)}function Om(e,t){Sm.C(e,t),Em(`preconnect`,e,t)}function km(e,t,n){Sm.L(e,t,n);var r=Tm;if(r&&e&&t){var i=`link[rel="preload"][as="`+Wt(t)+`"]`;t===`image`&&n&&n.imageSrcSet?(i+=`[imagesrcset="`+Wt(n.imageSrcSet)+`"]`,typeof n.imageSizes==`string`&&(i+=`[imagesizes="`+Wt(n.imageSizes)+`"]`)):i+=`[href="`+Wt(e)+`"]`;var a=i;switch(t){case`style`:a=Fm(e);break;case`script`:a=zm(e)}if(!(ym.has(a)||(e=D({rel:`preload`,href:t===`image`&&n&&n.imageSrcSet?void 0:e,as:t},n),ym.set(a,e),r.querySelector(i)!==null||t===`style`&&r.querySelector(Im(a))||t===`script`&&r.querySelector(Bm(a))))){var o=r.createElement(`link`);rp(o,`link`,e),t===`style`&&(o[vt]=!0,o.onload=o.onerror=function(){Tt(o)}),wt(o),r.head.appendChild(o)}}}function Am(e,t){Sm.m(e,t);var n=Tm;if(n&&e){var r=t&&typeof t.as==`string`?t.as:`script`,i=`link[rel="modulepreload"][as="`+Wt(r)+`"][href="`+Wt(e)+`"]`,a=i;switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:a=zm(e)}if(!ym.has(a)&&(e=D({rel:`modulepreload`,href:e},t),ym.set(a,e),n.querySelector(i)===null)){switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:if(n.querySelector(Bm(a)))return}r=n.createElement(`link`),rp(r,`link`,e),wt(r),n.head.appendChild(r)}}}function jm(e,t,n){Sm.S(e,t,n);var r=Tm;if(r&&e){var i=Ct(r).hoistableStyles,a=Fm(e);t||=`default`;var o=i.get(a);if(!o){var s={loading:0,preload:null};if(o=r.querySelector(Im(a)))s.loading=5;else{e=D({rel:`stylesheet`,href:e,"data-precedence":t},n),(n=ym.get(a))&&Um(e,n);var c=o=r.createElement(`link`);wt(c),rp(c,`link`,e),c._p=new Promise(function(e,t){c.onload=e,c.onerror=t}),c.addEventListener(`load`,function(){s.loading|=1}),c.addEventListener(`error`,function(){s.loading|=2}),s.loading|=4,Hm(o,t,r)}o={type:`stylesheet`,instance:o,count:1,state:s},i.set(a,o)}}}function Mm(e,t){Sm.X(e,t);var n=Tm;if(n&&e){var r=Ct(n).hoistableScripts,i=zm(e),a=r.get(i);a||(a=n.querySelector(Bm(i)),a||(e=D({src:e,async:!0},t),(t=ym.get(i))&&Wm(e,t),a=n.createElement(`script`),wt(a),rp(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Nm(e,t){Sm.M(e,t);var n=Tm;if(n&&e){var r=Ct(n).hoistableScripts,i=zm(e),a=r.get(i);a||(a=n.querySelector(Bm(i)),a||(e=D({src:e,async:!0,type:`module`},t),(t=ym.get(i))&&Wm(e,t),a=n.createElement(`script`),wt(a),rp(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Pm(e,t,n,r){var a=(a=ge.current)?xm(a):null;if(!a)throw Error(i(446));switch(e){case`meta`:case`title`:return null;case`style`:return typeof n.precedence==`string`&&typeof n.href==`string`?(n=Fm(n.href),t=Ct(a).hoistableStyles,r=t.get(n),r||(r={type:`style`,instance:null,count:0,state:null},t.set(n,r)),r):{type:`void`,instance:null,count:0,state:null};case`link`:if(n.rel===`stylesheet`&&typeof n.href==`string`&&typeof n.precedence==`string`){e=Fm(n.href);var o=Ct(a).hoistableStyles,s=o.get(e);if(s||(a=a.ownerDocument||a,s={type:`stylesheet`,instance:null,count:0,state:{loading:0,preload:null}},o.set(e,s),(o=a.querySelector(Im(e)))?o._p||(s.instance=o,s.state.loading=5):(o=ym.get(e),o||(o={rel:`preload`,as:`style`,href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},ym.set(e,o)),Rm(a,e,o,s.state))),t&&r===null)throw Error(i(528,``));return s}if(t&&r!==null)throw Error(i(529,``));return null;case`script`:return t=n.async,n=n.src,typeof n==`string`&&t&&typeof t!=`function`&&typeof t!=`symbol`?(n=zm(n),t=Ct(a).hoistableScripts,r=t.get(n),r||(r={type:`script`,instance:null,count:0,state:null},t.set(n,r)),r):{type:`void`,instance:null,count:0,state:null};default:throw Error(i(444,e))}}function Fm(e){return`href="`+Wt(e)+`"`}function Im(e){return`link[rel="stylesheet"][`+e+`]`}function Lm(e){return D({},e,{"data-precedence":e.precedence,precedence:null})}function Rm(e,t,n,r){if(t=e.querySelector(`link[rel="preload"][as="style"][`+t+`]`)){if(!0!==t[vt]){r.loading=1;return}}else t=e.createElement(`link`),t[vt]=!0,t.onload=t.onerror=Tt.bind(null,t),rp(t,`link`,n),wt(t),e.head.appendChild(t);r.preload=t,t.addEventListener(`load`,function(){return r.loading|=1}),t.addEventListener(`error`,function(){return r.loading|=2})}function zm(e){return`[src="`+Wt(e)+`"]`}function Bm(e){return`script[async]`+e}function Vm(e,t,n){if(t.count++,t.instance===null)switch(t.type){case`style`:var r=e.querySelector(`style[data-href~="`+Wt(n.href)+`"]`);if(r)return t.instance=r,wt(r),r;var a=D({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement(`style`),wt(r),rp(r,`style`,a),Hm(r,n.precedence,e),t.instance=r;case`stylesheet`:a=Fm(n.href);var o=e.querySelector(Im(a));if(o)return t.state.loading|=4,t.instance=o,wt(o),o;r=Lm(n),(a=ym.get(a))&&Um(r,a),o=(e.ownerDocument||e).createElement(`link`),wt(o);var s=o;return s._p=new Promise(function(e,t){s.onload=e,s.onerror=t}),rp(o,`link`,r),t.state.loading|=4,Hm(o,n.precedence,e),t.instance=o;case`script`:return o=zm(n.src),(a=e.querySelector(Bm(o)))?(t.instance=a,wt(a),a):(r=n,(a=ym.get(o))&&(r=D({},n),Wm(r,a)),e=e.ownerDocument||e,a=e.createElement(`script`),wt(a),rp(a,`link`,r),e.head.appendChild(a),t.instance=a);case`void`:return null;default:throw Error(i(443,t.type))}else t.type===`stylesheet`&&!(t.state.loading&4)&&(r=t.instance,t.state.loading|=4,Hm(r,n.precedence,e));return t.instance}function Hm(e,t,n){for(var r=n.querySelectorAll(`link[rel="stylesheet"][data-precedence],style[data-precedence]`),i=r.length?r[r.length-1]:null,a=i,o=0;o<r.length;o++){var s=r[o];if(s.dataset.precedence===t)a=s;else if(a!==i)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Um(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.title??=t.title}function Wm(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.integrity??=t.integrity}var Gm=null;function Km(e,t,n){if(Gm===null){var r=new Map,i=Gm=new Map;i.set(n,r)}else i=Gm,r=i.get(n),r||(r=new Map,i.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var a=n[i];if(!(a[_t]||a[Y]||e===`link`&&a.getAttribute(`rel`)===`stylesheet`)&&a.namespaceURI!==`http://www.w3.org/2000/svg`){var o=a.getAttribute(t)||``;o=e+o;var s=r.get(o);s?s.push(a):r.set(o,[a])}}return r}function qm(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t===`title`?e.querySelector(`head > title`):null)}function Jm(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case`meta`:case`title`:return!0;case`style`:if(typeof t.precedence!=`string`||typeof t.href!=`string`||t.href===``)break;return!0;case`link`:if(typeof t.rel!=`string`||typeof t.href!=`string`||t.href===``||t.onLoad||t.onError)break;switch(t.rel){case`stylesheet`:return e=t.disabled,typeof t.precedence==`string`&&e==null;default:return!0}case`script`:if(t.async&&typeof t.async!=`function`&&typeof t.async!=`symbol`&&!t.onLoad&&!t.onError&&t.src&&typeof t.src==`string`)return!0}return!1}function Ym(e,t){return e===`img`&&t.src!=null&&t.src!==``&&t.onLoad==null&&t.loading!==`lazy`}function Xm(e){return!(e.type===`stylesheet`&&!(e.state.loading&3))}function Zm(e){return(e.width||100)*(e.height||100)*(typeof devicePixelRatio==`number`?devicePixelRatio:1)*.25}function Qm(e,t){typeof t.decode==`function`&&(e.imgCount++,t.complete||(e.imgBytes+=Zm(t),e.suspenseyImages.push(t)),e=ih.bind(e),t.decode().then(e,e))}function $m(e,t,n,r){if(n.type===`stylesheet`&&(typeof r.media!=`string`||!1!==matchMedia(r.media).matches)&&!(n.state.loading&4)){if(n.instance===null){var i=Fm(r.href),a=t.querySelector(Im(i));if(a){t=a._p,typeof t==`object`&&t&&typeof t.then==`function`&&(e.count++,e=rh.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,wt(a);return}a=t.ownerDocument||t,r=Lm(r),(i=ym.get(i))&&Um(r,i),a=a.createElement(`link`),wt(a);var o=a;o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),rp(a,`link`,r),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(e.count++,n=rh.bind(e),t.addEventListener(`load`,n),t.addEventListener(`error`,n))}}var eh=0;function th(e,t){return e.stylesheets&&e.count===0&&oh(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var r=setTimeout(function(){if(e.stylesheets&&oh(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}},6e4+t);0<e.imgBytes&&eh===0&&(eh=62500*sp());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&oh(e,e.stylesheets),e.unsuspend)){var t=e.unsuspend;e.unsuspend=null,t()}},(e.imgBytes>eh?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(i)}}:null}function nh(e){if(e.count===0&&(e.imgCount===0||!e.waitingForImages)){if(e.stylesheets)oh(e,e.stylesheets);else if(e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}}}function rh(){this.count--,nh(this)}function ih(){this.imgCount--,nh(this)}var ah=null;function oh(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,ah=new Map,t.forEach(sh,e),ah=null,rh.call(e))}function sh(e,t){if(!(t.state.loading&4)){var n=ah.get(e);if(n)var r=n.get(null);else{n=new Map,ah.set(e,n);for(var i=e.querySelectorAll(`link[data-precedence],style[data-precedence]`),a=0;a<i.length;a++){var o=i[a];(o.nodeName===`LINK`||o.getAttribute(`media`)!==`not all`)&&(n.set(o.dataset.precedence,o),r=o)}r&&n.set(null,r)}i=t.instance,o=i.getAttribute(`data-precedence`),a=n.get(o)||r,a===r&&n.set(null,i),n.set(o,i),this.count++,r=rh.bind(this),i.addEventListener(`load`,r),i.addEventListener(`error`,r),a?a.parentNode.insertBefore(i,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var ch={$$typeof:F,Provider:null,Consumer:null,_currentValue:le,_currentValue2:le,_threadCount:0};function lh(e,t,n,r,i,a,o,s,c){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=rt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=rt(0),this.hiddenUpdates=rt(null),this.identifierPrefix=r,this.onUncaughtError=i,this.onCaughtError=a,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.transitionTypes=null,this.incompleteTransitions=new Map}function uh(e,t,n,r,i,a,o,s,c,l,u,d){return e=new lh(e,t,n,o,c,l,u,d,s),t=1,!0===a&&(t|=24),a=bi(3,null,null,t),e.current=a,a.stateNode=e,t=xa(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:r,isDehydrated:n,cache:t},ro(a),e}function dh(e){return e?(e=vi,e):vi}function fh(e,t,n,r,i,a){i=dh(i),r.context===null?r.context=i:r.pendingContext=i,r=ao(t),r.payload={element:n},a=a===void 0?null:a,a!==null&&(r.callback=a),n=oo(e,r,t),n!==null&&(Md(n,e,t),so(n,e,t))}function ph(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function mh(e,t){ph(e,t),(e=e.alternate)&&ph(e,t)}function hh(e){if(e.tag===13||e.tag===31){var t=hi(e,67108864);t!==null&&Md(t,e,67108864),mh(e,67108864)}}function gh(e){if(e.tag===13||e.tag===31){var t=kd();t=lt(t);var n=hi(e,t);n!==null&&Md(n,e,t),mh(e,t)}}var _h=!0;function vh(e,t,n,r){var i=U.T;U.T=null;var a=W.p;try{W.p=2,bh(e,t,n,r)}finally{W.p=a,U.T=i}}function yh(e,t,n,r){var i=U.T;U.T=null;var a=W.p;try{W.p=8,bh(e,t,n,r)}finally{W.p=a,U.T=i}}function bh(e,t,n,r){if(_h){var i=xh(r);if(i===null)Kf(e,t,r,Sh,n),Nh(e,r);else if(Fh(i,e,t,n,r))r.stopPropagation();else if(Nh(e,r),t&4&&-1<Mh.indexOf(e)){for(;i!==null;){var a=xt(i);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var o=Ze(a.pendingLanes);if(o!==0){var s=a;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var c=1<<31-We(o);s.entanglements[1]|=c,o&=~c}Tf(a),!(qu&6)&&(md=Ne()+500,Ef(0,!1))}}break;case 31:case 13:s=hi(a,2),s!==null&&Md(s,a,2),Ld(),mh(a,2)}if(a=xh(r),a===null&&Kf(e,t,r,Sh,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else Kf(e,t,r,null,n)}}function xh(e){return e=cn(e),Ch(e)}var Sh=null;function Ch(e){if(Sh=null,e=bt(e),e!==null){var t=o(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=s(t),e!==null)return e;e=null}else if(n===31){if(e=c(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Sh=e,null}function wh(e){switch(e){case`beforetoggle`:case`cancel`:case`click`:case`close`:case`contextmenu`:case`copy`:case`cut`:case`auxclick`:case`dblclick`:case`dragend`:case`dragstart`:case`drop`:case`focusin`:case`focusout`:case`input`:case`invalid`:case`keydown`:case`keypress`:case`keyup`:case`mousedown`:case`mouseup`:case`paste`:case`pause`:case`play`:case`pointercancel`:case`pointerdown`:case`pointerup`:case`ratechange`:case`reset`:case`seeked`:case`submit`:case`toggle`:case`touchcancel`:case`touchend`:case`touchstart`:case`volumechange`:case`change`:case`selectionchange`:case`textInput`:case`compositionstart`:case`compositionend`:case`compositionupdate`:case`beforeblur`:case`afterblur`:case`beforeinput`:case`blur`:case`fullscreenchange`:case`fullscreenerror`:case`focus`:case`hashchange`:case`popstate`:case`select`:case`selectstart`:return 2;case`drag`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`mousemove`:case`mouseout`:case`mouseover`:case`pointermove`:case`pointerout`:case`pointerover`:case`resize`:case`scroll`:case`touchmove`:case`wheel`:case`mouseenter`:case`mouseleave`:case`pointerenter`:case`pointerleave`:return 8;case`message`:switch(Pe()){case Fe:return 2;case Ie:return 8;case Le:case Re:return 32;case ze:return 268435456;default:return 32}default:return 32}}var Th=!1,Eh=null,Dh=null,Oh=null,kh=new Map,Ah=new Map,jh=[],Mh=`mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(` `);function Nh(e,t){switch(e){case`focusin`:case`focusout`:Eh=null;break;case`dragenter`:case`dragleave`:Dh=null;break;case`mouseover`:case`mouseout`:Oh=null;break;case`pointerover`:case`pointerout`:kh.delete(t.pointerId);break;case`gotpointercapture`:case`lostpointercapture`:Ah.delete(t.pointerId)}}function Ph(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=xt(t),t!==null&&hh(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Fh(e,t,n,r,i){switch(t){case`focusin`:return Eh=Ph(Eh,e,t,n,r,i),!0;case`dragenter`:return Dh=Ph(Dh,e,t,n,r,i),!0;case`mouseover`:return Oh=Ph(Oh,e,t,n,r,i),!0;case`pointerover`:var a=i.pointerId;return kh.set(a,Ph(kh.get(a)||null,e,t,n,r,i)),!0;case`gotpointercapture`:return a=i.pointerId,Ah.set(a,Ph(Ah.get(a)||null,e,t,n,r,i)),!0}return!1}function Ih(e){var t=bt(e.target);if(t!==null){var n=o(t);if(n!==null){if(t=n.tag,t===13){if(t=s(n),t!==null){e.blockedOn=t,dt(e.priority,function(){gh(n)});return}}else if(t===31){if(t=c(n),t!==null){e.blockedOn=t,dt(e.priority,function(){gh(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Lh(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=xh(e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);sn=r,n.target.dispatchEvent(r),sn=null}else return t=xt(n),t!==null&&hh(t),e.blockedOn=n,!1;t.shift()}return!0}function Rh(e,t,n){Lh(e)&&n.delete(t)}function zh(){Th=!1,Eh!==null&&Lh(Eh)&&(Eh=null),Dh!==null&&Lh(Dh)&&(Dh=null),Oh!==null&&Lh(Oh)&&(Oh=null),kh.forEach(Rh),Ah.forEach(Rh)}function Bh(e,n){e.blockedOn===n&&(e.blockedOn=null,Th||(Th=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,zh)))}var Vh=null;function Hh(e){Vh!==e&&(Vh=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){Vh===e&&(Vh=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],i=e[t+2];if(typeof r!=`function`){if(Ch(r||n)===null)continue;break}var a=xt(n);a!==null&&(e.splice(t,3),t-=3,Gs(a,{pending:!0,data:i,method:n.method,action:r},r,i))}}))}function Uh(e){function t(t){return Bh(t,e)}Eh!==null&&Bh(Eh,e),Dh!==null&&Bh(Dh,e),Oh!==null&&Bh(Oh,e),kh.forEach(t),Ah.forEach(t);for(var n=0;n<jh.length;n++){var r=jh[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<jh.length&&(n=jh[0],n.blockedOn===null);)Ih(n),n.blockedOn===null&&jh.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var i=n[r],a=n[r+1],o=i[X]||null;if(typeof a==`function`)o||Hh(n);else if(o){var s=null;if(a&&a.hasAttribute(`formAction`)){if(i=a,o=a[X]||null)s=o.formAction;else if(Ch(i)!==null)continue}else s=o.action;typeof s==`function`?n[r+1]=s:(n.splice(r,3),r-=3),Hh(n)}}}function Wh(){function e(e){e.canIntercept&&e.info===`react-transition`&&e.intercept({handler:function(){return new Promise(function(e){return i=e})},focusReset:`manual`,scroll:`manual`})}function t(){i!==null&&(i(),i=null),r||setTimeout(n,20)}function n(){if(!r&&!navigation.transition){var e=navigation.currentEntry;e&&e.url!=null&&navigation.navigate(e.url,{state:e.getState(),info:`react-transition`,history:`replace`})}}if(typeof navigation==`object`){var r=!1,i=null;return navigation.addEventListener(`navigate`,e),navigation.addEventListener(`navigatesuccess`,t),navigation.addEventListener(`navigateerror`,t),setTimeout(n,100),function(){r=!0,navigation.removeEventListener(`navigate`,e),navigation.removeEventListener(`navigatesuccess`,t),navigation.removeEventListener(`navigateerror`,t),i!==null&&(i(),i=null)}}}function Gh(e){this._internalRoot=e}Kh.prototype.render=Gh.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(i(409));var n=t.current;fh(n,kd(),e,t,null,null)},Kh.prototype.unmount=Gh.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;fh(e.current,2,null,e,null,null),Ld(),t[pt]=null}};function Kh(e){this._internalRoot=e}Kh.prototype.unstable_scheduleHydration=function(e){if(e){var t=ut();e={blockedOn:null,target:e,priority:t};for(var n=0;n<jh.length&&t!==0&&t<jh[n].priority;n++);jh.splice(n,0,e),n===0&&Ih(e)}};var qh=n.version;if(qh!==`19.3.1`)throw Error(i(527,qh,`19.3.1`));W.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render==`function`?Error(i(188)):(e=Object.keys(e).join(`,`),Error(i(268,e)));return e=u(t),e=e===null?null:f(e),e=e===null?null:e.stateNode,e};var Jh={bundleType:0,version:`19.3.1`,rendererPackageName:`react-dom`,currentDispatcherRef:U,reconcilerVersion:`19.3.1`};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`){var Yh=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Yh.isDisabled&&Yh.supportsFiber)try{He=Yh.inject(Jh),q=Yh}catch{}}e.createRoot=function(e,t){if(!a(e))throw Error(i(299));var n=!1,r=``,o=mc,s=hc,c=gc;return t!=null&&(!0===t.unstable_strictMode&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(o=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(c=t.onRecoverableError)),t=uh(e,1,!1,null,null,n,r,null,o,s,c,Wh),e[pt]=t.current,Wf(e),new Gh(t)}})),_=o(((e,t)=>{function n(){if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE==`function`)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=g()})),v=c(p()),y=_();function b(e){if(!e)return{cleanAddress:``};let t=e.trim();if(!t)return{cleanAddress:``};let n,r;if(t.includes(`|`)||/(?:customer|address|addr|stop\s*#?\d+)\s*:/i.test(t)){let e=t.split(/\s*\|\s*/),i=``;for(let t of e){let e=t.trim();if(!e)continue;let a=e.match(/^stop\s*#?(\d+)/i);if(a){r=parseInt(a[1],10);continue}let o=e.match(/^(?:customer|name)\s*:\s*(.+)$/i);if(o){n=o[1].trim();continue}let s=e.match(/^(?:address|addr)\s*:\s*(.+)$/i);s?i=s[1].trim():!i&&/^\d+[A-Za-z]?(?:[-\/][A-Za-z0-9]+)?\s+[A-Za-z]/.test(e)&&(i=e)}if(i)return{cleanAddress:i,extractedName:n,stopSequence:r}}let i=t.match(/(?:^|[;\n])\s*(?:address|addr)\s*:\s*([^;\n|]+)/i);return i?{cleanAddress:i[1].trim(),extractedName:n,stopSequence:r}:(t=t.replace(/^(?:stop\s*#?\d+\s*[-:–—|]\s*|#?0+\d+\s*[-:–—|]\s*)/i,``).trim(),t=t.replace(/^(?:customer|name)\s*:\s*[^|;–-]+(?:[|;–-]\s*)/i,``).trim(),t=t.replace(/^(?:address|addr)\s*:\s*/i,``).trim(),{cleanAddress:t,extractedName:n,stopSequence:r})}function x(e){if(!e)return``;let t=(b(e).cleanAddress||e).trim();if(!t||/^location\s*\(?/i.test(t)||/^lat/i.test(t)||t.toLowerCase()===`location unavailable`)return``;t=t.replace(/^(?:stop\s*#?\d+\s*[-:–—|]\s*|#?0+\d+\s*[-:–—|]\s*)/i,``).trim();let n=t.match(/^(?:apt\.?|apartment|unit|suite|ste\.?|room|rm\.?)\s*#?[a-z0-9-]+\s*,\s*(.+)$/i);n&&(t=n[1].trim());let r=t.match(/^(?:#|no\.?\s*)?(\d+[A-Za-z]?(?:[-\/][A-Za-z0-9]+)?)\s+([A-Za-z0-9#])/i);if(r&&!/^0+\d+$/.test(r[1]))return r[1];let i=t.match(/(?:^|[,\s])(?:#|no\.?\s*)?(\d+[A-Za-z]?(?:[-\/][A-Za-z0-9]+)?)\s+(?:[NSEW]\.?\s+)?([A-Za-z0-9\s]+?\s+(?:st|street|rd|road|ave|avenue|ln|lane|dr|drive|blvd|boulevard|way|ct|court|cir|circle|pl|place|ter|terrace|pkwy|parkway|hwy|highway|route|rt|state\s*route))\b/i);if(i&&!/^0+\d+$/.test(i[1]))return i[1];let a=t.match(/^(?:#|no\.?\s*)?(\d+[A-Za-z]?(?:[-\/][A-Za-z0-9]+)?)\b/i);return a&&!/^0+\d+$/.test(a[1])?a[1]:``}function S(e,t){if(!e)return`—`;let n=[e.fullAddress,e.desc,e.cmt,e.streetName,e.notes];for(let r of n)if(r){let n=x(r);if(n){if(e.orderIndex&&n===String(e.orderIndex)||t!==void 0&&n===String(t+1)){let e=b(r);if(RegExp(`^${n}\\b`,`i`).test(e.cleanAddress)&&!/^stop\s*#?\d+/i.test(r))return n;continue}return n}}if(e.houseNumber&&e.houseNumber.trim()){let n=e.houseNumber.trim();if(!(/^0+\d+$/.test(n)||e.orderIndex&&n===String(e.orderIndex)||t!==void 0&&n===String(t+1)))return n}if(e.name){let n=x(e.name);if(n&&!(/^0+\d+$/.test(n)||e.orderIndex&&n===String(e.orderIndex)||t!==void 0&&n===String(t+1)))return n}return`—`}function C(e){let t=(e||``).trim();if(!t)return{houseNumber:``,streetName:``,fullAddress:``};if(/^location\s*\(?/i.test(t)||t.toLowerCase()===`location unavailable`)return{houseNumber:``,streetName:t,fullAddress:t};let n=b(t).cleanAddress||t;n=n.replace(/^(?:stop\s*#?\d+\s*[-:–—|]\s*|#?0+\d+\s*[-:–—|]\s*)/i,``).trim();let r=n.match(/^(?:apt\.?|apartment|unit|suite|ste\.?|room|rm\.?)\s*#?[a-z0-9-]+\s*,\s*(.+)$/i);r&&(n=r[1].trim());let i=x(n),a=n;if(i){let e=n.indexOf(i);if(e!==-1){let t=n.slice(e+i.length).trim(),r=t.indexOf(`,`);a=r===-1?t:t.slice(0,r).trim()}}return{houseNumber:i,streetName:a.replace(/,\s*(?:apt\.?|unit|ste\.?|suite|room|rm\.?)\s*#?[a-z0-9-]+$/i,``).trim()||a||n,fullAddress:n}}function w(e,t){return!isNaN(e)&&!isNaN(t)&&e>=-90&&e<=90&&t>=-180&&t<=180&&(e!==0||t!==0)}function T(e,t){if(!e||typeof e.getElementsByTagName!=`function`)return``;let n=e.getElementsByTagName(t)[0];if(n?.textContent&&n.textContent.trim())return n.textContent.trim();let r=e.children?Array.from(e.children):[];for(let e of r){if((e.localName===t||typeof e.nodeName==`string`&&e.nodeName.endsWith(`:${t}`))&&e.textContent?.trim())return e.textContent.trim();let n=e.children?Array.from(e.children):[];for(let e of n)if((e.localName===t||typeof e.nodeName==`string`&&e.nodeName.endsWith(`:${t}`))&&e.textContent?.trim())return e.textContent.trim()}return``}function E(e,t=`Imported Route`){let n=(e||``).replace(/^\uFEFF/,``).trim();if(!n)throw Error(`File content is empty.`);let r;if(typeof DOMParser<`u`)r=new DOMParser().parseFromString(n,`text/xml`);else throw Error(`DOMParser unavailable in current runtime`);if(r.getElementsByTagName(`parsererror`)[0])throw Error(`Invalid GPX/XML format. Please verify the file contains valid route/waypoint XML.`);let i=t,a=r.getElementsByTagName(`metadata`)[0],o=a?T(a,`name`):``,s=T(r.documentElement,`name`);o?i=o:s&&(i=s);let c=e=>{let t=Array.from(r.getElementsByTagName(e)),n=r.getElementsByTagNameNS?Array.from(r.getElementsByTagNameNS(`*`,e)):[],i=[...t];for(let e of n)i.includes(e)||i.push(e);return i},l=c(`wpt`),u=c(`rtept`),d=[];if(l.length>0||u.length>0){let e=[...l,...u];e.sort((e,t)=>{let n=e.compareDocumentPosition(t);return n&Node.DOCUMENT_POSITION_FOLLOWING?-1:n&Node.DOCUMENT_POSITION_PRECEDING?1:0}),d=e}else d=c(`trkpt`);if(d.length===0)throw Error(`No customer waypoints (<wpt> or <rtept>) found in this GPX file.`);let f=[];return d.forEach((e,t)=>{let n=e.getAttribute(`lat`),r=e.getAttribute(`lon`),i=n?parseFloat(n):NaN,a=r?parseFloat(r):NaN,o=w(i,a),s=o?i:0,c=o?a:0,l=T(e,`name`),u=T(e,`desc`),d=T(e,`cmt`),p=T(e,`address`),m=T(e,`housenumber`),h=T(e,`street`),g=l||`Customer #${t+1}`,_=p||u||d,v=``,y=b(u),x=b(l),S=b(d);if(y.extractedName&&(!l||l.includes(`|`)||/^(?:stop\s*#?\d+|customer)/i.test(l))?g=y.extractedName:x.extractedName&&(g=x.extractedName),y.cleanAddress&&/^\d+[A-Za-z]?\s+[A-Za-z]/.test(y.cleanAddress)?_=y.cleanAddress:x.cleanAddress&&/^\d+[A-Za-z]?\s+[A-Za-z]/.test(x.cleanAddress)?_=x.cleanAddress:S.cleanAddress&&/^\d+[A-Za-z]?\s+[A-Za-z]/.test(S.cleanAddress)&&(_=S.cleanAddress),l&&(l.includes(` - `)||l.includes(` – `))){let e=l.split(/\s*[-–]\s*/);e.length>=2&&(/^(?:stop\s*)?#?\d+$/i.test(e[0].trim())?(g=e.slice(1).join(` - `).trim(),/^\d+[A-Za-z]?\s+[A-Za-z]/.test(g)&&(v=g)):/^(?:stop\s*)?#?\d+$/i.test(e[e.length-1].trim())&&(g=e.slice(0,e.length-1).join(` - `).trim()))}else l&&/^#?0*\d+$/.test(l.trim())&&(g=`Customer #${parseInt(l.trim().replace(`#`,``),10)||t+1}`);!_&&v&&(_=v),_||=o?`Location (${s.toFixed(5)}, ${c.toFixed(5)})`:`Location unavailable`;let{houseNumber:E,streetName:D,fullAddress:O}=C(_),k=E;if(!k&&m&&!/^0+\d+$/.test(m.trim())&&(k=m.trim()),!k&&g){let e=C(g);e.houseNumber&&!/^0+\d+$/.test(e.houseNumber)&&(k=e.houseNumber)}let A=h||D||``;f.push({id:`stop-${t+1}-${Date.now().toString(36)}-${Math.random().toString(36).substring(2,6)}`,orderIndex:t+1,name:g,houseNumber:k,fullAddress:O,streetName:A,lat:s,lon:c,desc:u||void 0,cmt:d||void 0,status:`pending`})}),{stops:f,routeName:i}}function D(e,t=`Customer Route`){return`<?xml version="1.0" encoding="UTF-8"?>
<gpx version="1.1" creator="OsmAnd Route Companion" xmlns="http://www.topografix.com/GPX/1/1" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.topografix.com/GPX/1/1 http://www.topografix.com/GPX/1/1/gpx.xsd">
  <metadata>
    <name>${O(t)}</name>
    <desc>Customer route stops in sequential order</desc>
    <time>${new Date().toISOString()}</time>
  </metadata>
`+e.map(e=>`  <wpt lat="${e.lat}" lon="${e.lon}">
    <name>${O(e.name)}</name>
    <desc>${O(e.fullAddress)}</desc>
    <cmt>${O(`House #${e.houseNumber||`N/A`} - Status: ${e.status}`)}</cmt>
  </wpt>`).join(`
`)+`
</gpx>`}function O(e){return(e||``).replace(/[<>&'"]/g,e=>{switch(e){case`<`:return`&lt;`;case`>`:return`&gt;`;case`&`:return`&amp;`;case`'`:return`&apos;`;case`"`:return`&quot;`;default:return e}})}var k=[{id:`residential-route-springfield`,title:`North Springfield Residential Route (20 Stops)`,description:`Sequenced customer stops for residential service with distinct house numbers & notes`,stopCount:20,gpxXml:`<?xml version="1.0" encoding="UTF-8"?>
<gpx version="1.1" creator="OsmAnd Route Companion" xmlns="http://www.topografix.com/GPX/1/1">
  <metadata>
    <name>North Springfield Residential Route</name>
    <desc>Customer collection and service route in sequence</desc>
  </metadata>
  <wpt lat="39.7990" lon="-89.6438">
    <name>Eleanor &amp; Frank Davies</name>
    <desc>104 Maple Grove Ave, Springfield, IL 62702</desc>
    <cmt>Side gate accessible, watch for golden retriever</cmt>
  </wpt>
  <wpt lat="39.8005" lon="-89.6450">
    <name>Marcus Vance</name>
    <desc>112 Maple Grove Ave, Springfield, IL 62702</desc>
    <cmt>Bin beside garage, ring bell if blocked</cmt>
  </wpt>
  <wpt lat="39.8018" lon="-89.6462">
    <name>Sophia Ramirez</name>
    <desc>128 Maple Grove Ave, Springfield, IL 62702</desc>
    <cmt>Curbside pickup requested</cmt>
  </wpt>
  <wpt lat="39.8035" lon="-89.6480">
    <name>Dr. Arthur Pendelton</name>
    <desc>215 Willow Creek Rd, Springfield, IL 62702</desc>
    <cmt>Long gravel driveway, turn around at circle</cmt>
  </wpt>
  <wpt lat="39.8049" lon="-89.6495">
    <name>Elena Rostova</name>
    <desc>229 Willow Creek Rd, Springfield, IL 62702</desc>
    <cmt>House number on stone mailbox</cmt>
  </wpt>
  <wpt lat="39.8062" lon="-89.6512">
    <name>Jackson &amp; Maya Miller</name>
    <desc>241 Willow Creek Rd, Springfield, IL 62702</desc>
    <cmt>Yellow house on corner</cmt>
  </wpt>
  <wpt lat="39.8080" lon="-89.6530">
    <name>Robert K. Sterling</name>
    <desc>304 Sycamore Lane, Springfield, IL 62702</desc>
    <cmt>Back alley approach preferred</cmt>
  </wpt>
  <wpt lat="39.8095" lon="-89.6548">
    <name>Hannah &amp; Liam Chen</name>
    <desc>318 Sycamore Lane, Springfield, IL 62702</desc>
    <cmt>Ring doorbell after stop</cmt>
  </wpt>
  <wpt lat="39.8110" lon="-89.6565">
    <name>George Henderson</name>
    <desc>330 Sycamore Lane, Springfield, IL 62702</desc>
    <cmt>Code for gate #4421</cmt>
  </wpt>
  <wpt lat="39.8125" lon="-89.6582">
    <name>Patricia &amp; Carl Kowalski</name>
    <desc>402 Birchwood Court, Springfield, IL 62702</desc>
    <cmt>Cul-de-sac house at end on left</cmt>
  </wpt>
  <wpt lat="39.8138" lon="-89.6601">
    <name>Devon Washington</name>
    <desc>415 Birchwood Court, Springfield, IL 62702</desc>
    <cmt>Leave invoice in mailbox slot</cmt>
  </wpt>
  <wpt lat="39.8152" lon="-89.6618">
    <name>Chloe &amp; Noah Bennett</name>
    <desc>520 Cedar Crest Way, Springfield, IL 62702</desc>
    <cmt>Red brick house with circular portico</cmt>
  </wpt>
  <wpt lat="39.8168" lon="-89.6635">
    <name>Samuel Ortiz</name>
    <desc>534 Cedar Crest Way, Springfield, IL 62702</desc>
    <cmt>Customer works from home, quiet approach</cmt>
  </wpt>
  <wpt lat="39.8182" lon="-89.6652">
    <name>Miriam Goldstein</name>
    <desc>601 Pine Needle Drive, Springfield, IL 62702</desc>
    <cmt>Keycard box next to service door</cmt>
  </wpt>
  <wpt lat="39.8198" lon="-89.6670">
    <name>Thomas &amp; Valerie Reed</name>
    <desc>615 Pine Needle Drive, Springfield, IL 62702</desc>
    <cmt>House number illuminated on porch column</cmt>
  </wpt>
  <wpt lat="39.8215" lon="-89.6690">
    <name>Amina Al-Mansoor</name>
    <desc>722 Juniper Park Blvd, Springfield, IL 62702</desc>
    <cmt>Corner lot with white vinyl fence</cmt>
  </wpt>
  <wpt lat="39.8230" lon="-89.6708">
    <name>Kenneth O'Connor</name>
    <desc>736 Juniper Park Blvd, Springfield, IL 62702</desc>
    <cmt>Please close latch securely</cmt>
  </wpt>
  <wpt lat="39.8248" lon="-89.6725">
    <name>Zoe &amp; Lucas Taylor</name>
    <desc>802 Hawthorn Ridge, Springfield, IL 62702</desc>
    <cmt>Call before arrival if gate locked</cmt>
  </wpt>
  <wpt lat="39.8265" lon="-89.6742">
    <name>Geraldine Brooks</name>
    <desc>818 Hawthorn Ridge, Springfield, IL 62702</desc>
    <cmt>Elderly resident, curbside staging</cmt>
  </wpt>
  <wpt lat="39.8280" lon="-89.6760">
    <name>Victor &amp; Beatrice Moreno</name>
    <desc>834 Hawthorn Ridge, Springfield, IL 62702</desc>
    <cmt>Final customer on morning route block</cmt>
  </wpt>
</gpx>`},{id:`commercial-route-metro`,title:`Metro Commercial Route (10 Stops)`,description:`Commercial facilities, clinics, and businesses with suite numbers`,stopCount:10,gpxXml:`<?xml version="1.0" encoding="UTF-8"?>
<gpx version="1.1" creator="OsmAnd Route Companion" xmlns="http://www.topografix.com/GPX/1/1">
  <metadata>
    <name>Metro Commercial Route</name>
    <desc>Commercial client sequence</desc>
  </metadata>
  <wpt lat="39.7810" lon="-89.6500">
    <name>Apex Medical Labs - Suite 100</name>
    <desc>500 S 6th St, Springfield, IL 62701</desc>
    <cmt>Rear loading dock entrance, press buzzer B</cmt>
  </wpt>
  <wpt lat="39.7835" lon="-89.6520">
    <name>Capitol City Bakery</name>
    <desc>412 E Monroe St, Springfield, IL 62701</desc>
    <cmt>Service alley between 4th &amp; 5th</cmt>
  </wpt>
  <wpt lat="39.7860" lon="-89.6540">
    <name>Heritage Law Offices</name>
    <desc>620 E Adams St, Suite 300, Springfield, IL 62701</desc>
    <cmt>Elevator access to 3rd floor</cmt>
  </wpt>
  <wpt lat="39.7890" lon="-89.6570">
    <name>Lincoln Park Dental Clinic</name>
    <desc>805 N 9th St, Springfield, IL 62702</desc>
    <cmt>Staff entrance on north side</cmt>
  </wpt>
  <wpt lat="39.7920" lon="-89.6600">
    <name>Prairie State Veterinary</name>
    <desc>1120 N Walnut St, Springfield, IL 62702</desc>
    <cmt>Doorbell labeled Delivery/Service</cmt>
  </wpt>
  <wpt lat="39.7950" lon="-89.6630">
    <name>Oak Crest Senior Living</name>
    <desc>1400 W Washington St, Springfield, IL 62702</desc>
    <cmt>Check in at security desk Building A</cmt>
  </wpt>
  <wpt lat="39.7980" lon="-89.6660">
    <name>Green Valley Nursery</name>
    <desc>1850 W Jefferson St, Springfield, IL 62702</desc>
    <cmt>Drive through main gravel yard to warehouse</cmt>
  </wpt>
  <wpt lat="39.8010" lon="-89.6690">
    <name>Westside Auto Diagnostics</name>
    <desc>2204 W Monroe St, Springfield, IL 62704</desc>
    <cmt>Bay 3 entrance, ask for Sal</cmt>
  </wpt>
  <wpt lat="39.8040" lon="-89.6720">
    <name>Midwest Fitness Center</name>
    <desc>2600 S MacArthur Blvd, Springfield, IL 62704</desc>
    <cmt>South equipment dock</cmt>
  </wpt>
  <wpt lat="39.8070" lon="-89.6750">
    <name>Chatham Community Bank</name>
    <desc>3100 S 6th St, Springfield, IL 62703</desc>
    <cmt>Authorized personnel entry only</cmt>
  </wpt>
</gpx>`},{id:`fosterville-turnaround-route`,title:`Fosterville Rd Turnaround Route (8 Stops)`,description:`Fosterville Rd southward stops, turnaround to State Route 90, shared address at 6633 Laraway Rd`,stopCount:8,gpxXml:`<?xml version="1.0" encoding="UTF-8"?>
<gpx version="1.1" creator="OsmAnd Route Companion" xmlns="http://www.topografix.com/GPX/1/1">
  <metadata>
    <name>Fosterville Rd Turnaround Delivery Route</name>
    <desc>Includes Fosterville Rd dead-end turnaround and 6633 Laraway Rd multi-unit delivery</desc>
  </metadata>
  <wpt lat="42.9815" lon="-76.6520">
    <name>Marcus Vance</name>
    <desc>123 Fosterville Rd, Aurelius, NY 13166</desc>
    <cmt>Customer 1: Traveling south along Fosterville Rd</cmt>
  </wpt>
  <wpt lat="42.9770" lon="-76.6524">
    <name>Elena Rostova</name>
    <desc>195 Fosterville Rd, Aurelius, NY 13166</desc>
    <cmt>Customer 2: Furthest south on Fosterville Rd - turn around needed after stop</cmt>
  </wpt>
  <wpt lat="42.9860" lon="-76.6510">
    <name>Randi Hickman II</name>
    <desc>Stop 3 | Customer: Randi Hickman II | Address: 6589 State Route 90</desc>
    <cmt>Customer 3: North of Customer 2, reached by turning around</cmt>
  </wpt>
  <wpt lat="42.9890" lon="-76.6540">
    <name>Corey Skurpski</name>
    <desc>6633 Laraway Rd Apt A, Aurelius, NY 13166</desc>
    <cmt>Shared Address 1 of 2: Multi-unit building entrance A</cmt>
  </wpt>
  <wpt lat="42.9890" lon="-76.6540">
    <name>Mike Suarez</name>
    <desc>6633 Laraway Rd Apt B, Aurelius, NY 13166</desc>
    <cmt>Shared Address 2 of 2: Same coordinates as Apt A</cmt>
  </wpt>
  <wpt lat="42.9720" lon="-76.6380">
    <name>Cynthia Powers</name>
    <desc>556 Clark Street Rd, Aurelius, NY 13166</desc>
    <cmt>Customer 6: Curbside delivery</cmt>
  </wpt>
  <wpt lat="42.9680" lon="-76.6310">
    <name>Ryan Jennings</name>
    <desc>179 Clark Street Rd, Aurelius, NY 13166</desc>
    <cmt>Customer 7: 250 ft driveway setback</cmt>
  </wpt>
  <wpt lat="42.9640" lon="-76.6250">
    <name>Kevin Connelly</name>
    <desc>597 Turnpike Rd, Aurelius, NY 13166</desc>
    <cmt>Customer 8: Final stop on route</cmt>
  </wpt>
</gpx>`}];function A(e=`tap`){if(typeof window<`u`){try{let t=window.AndroidBridge;if(t&&typeof t.vibrate==`function`){t.vibrate(e);return}}catch{}if(`vibrate`in navigator)try{switch(e){case`skip`:navigator.vibrate([60,40,80]);break;case`next`:navigator.vibrate(45);break;case`undo`:navigator.vibrate([30,30,30]);break;case`complete`:navigator.vibrate([100,50,100,50,150]);break;default:navigator.vibrate(30)}}catch{}}}var j=new class{constructor(){this.queue=[],this.isSpeaking=!1,this.currentPriority=null,this.safetyTimer=null,this.activeUtterance=null,this.lastSpokenText=``,this.lastSpokenTime=0}speak(e){let t=Date.now();if(!(this.lastSpokenText===e.text&&t-this.lastSpokenTime<6e3)){if(e.priority===`high`)this.queue=this.queue.filter(e=>e.priority===`high`),this.isSpeaking&&this.currentPriority===`normal`&&this.stopCurrent(),this.queue.unshift(e);else{if(this.queue=this.queue.filter(e=>t-e.createdAt<e.maxAgeMs),this.queue.length>=2){let e=this.queue.findIndex(e=>e.priority===`normal`);e>=0&&this.queue.splice(e,1)}this.queue.push(e)}this.processQueue()}}cancelNormalPriority(){this.queue=this.queue.filter(e=>e.priority===`high`),this.isSpeaking&&this.currentPriority===`normal`&&this.stopCurrent()}stopCurrent(){if(this.safetyTimer&&=(clearTimeout(this.safetyTimer),null),this.isSpeaking=!1,this.currentPriority=null,this.activeUtterance=null,typeof window<`u`&&`speechSynthesis`in window)try{window.speechSynthesis.cancel()}catch{}}processQueue(){if(this.isSpeaking||this.queue.length===0)return;let e=Date.now();for(;this.queue.length>0&&e-this.queue[0].createdAt>this.queue[0].maxAgeMs;)this.queue.shift();if(this.queue.length===0)return;let t=this.queue.shift();this.executeSpeak(t)}executeSpeak(e){this.isSpeaking=!0,this.currentPriority=e.priority,this.lastSpokenText=e.text,this.lastSpokenTime=Date.now();try{let t=window.AndroidBridge;if(t&&typeof t.speak==`function`){t.speak(e.text);let n=e.text.split(/\s+/).length,r=Math.max(1200,n*360);this.safetyTimer=setTimeout(()=>{this.isSpeaking=!1,this.currentPriority=null,this.processQueue()},r);return}}catch{}if(typeof window>`u`||!(`speechSynthesis`in window))this.isSpeaking=!1,this.currentPriority=null;else try{window.speechSynthesis.cancel();let t=new SpeechSynthesisUtterance(e.text);t.rate=1.05,t.pitch=1,t.volume=1;let n=()=>{this.safetyTimer&&=(clearTimeout(this.safetyTimer),null),this.isSpeaking=!1,this.currentPriority=null,this.activeUtterance=null,setTimeout(()=>{this.processQueue()},200)};t.onend=n,t.onerror=n;let r=e.text.split(/\s+/).length,i=Math.max(2500,r*500);this.safetyTimer=setTimeout(n,i),this.activeUtterance=t,window.speechSynthesis.speak(t)}catch{this.isSpeaking=!1,this.currentPriority=null,this.activeUtterance=null}}};function M(e,t=500){if(!e)return``;let n=(e.modifier||``).toLowerCase().trim(),r=(e.type||``).toLowerCase().trim(),i=(e.streetName||``).trim(),a=i.length>0&&!i.toLowerCase().startsWith(`unnamed`)?i:``;if(n.includes(`uturn`)||n.includes(`turnaround`)||r===`turnaround`)return`Turn around as soon as possible.`;if(r===`roundabout`||r===`rotary`)return a?`Enter roundabout toward ${a} in ${t} feet.`:`Enter roundabout in ${t} feet.`;if(r===`fork`){let e=n.includes(`left`)?`left`:`right`;return a?`Keep ${e} at fork onto ${a} in ${t} feet.`:`Keep ${e} at fork in ${t} feet.`}if(r===`end of road`){let e=n.includes(`left`)?`left`:`right`;return a?`Turn ${e} at end of road onto ${a} in ${t} feet.`:`Turn ${e} at end of road in ${t} feet.`}if(r===`ramp`||r===`on ramp`||r===`off ramp`)return a?`Take ramp onto ${a} in ${t} feet.`:`Take ramp in ${t} feet.`;if(r===`merge`){let e=n.includes(`left`)?`left`:`right`;return a?`Merge ${e} onto ${a} in ${t} feet.`:`Merge ${e} in ${t} feet.`}switch(n){case`right`:return a?`Turn right onto ${a} in ${t} feet.`:`Turn right in ${t} feet.`;case`left`:return a?`Turn left onto ${a} in ${t} feet.`:`Turn left in ${t} feet.`;case`slight right`:return a?`Bear slightly right onto ${a} in ${t} feet.`:`Bear slightly right in ${t} feet.`;case`slight left`:return a?`Bear slightly left onto ${a} in ${t} feet.`:`Bear slightly left in ${t} feet.`;case`sharp right`:return a?`Make a sharp right onto ${a} in ${t} feet.`:`Make a sharp right in ${t} feet.`;case`sharp left`:return a?`Make a sharp left onto ${a} in ${t} feet.`:`Make a sharp left in ${t} feet.`;case`straight`:return a?`Continue straight on ${a} in ${t} feet.`:`Continue straight in ${t} feet.`;default:return r===`turn`?a?`Turn onto ${a} in ${t} feet.`:`Turn ahead in ${t} feet.`:``}}function N(e){if(!e)return``;let t=(e.modifier||``).toLowerCase().trim(),n=(e.type||``).toLowerCase().trim(),r=(e.streetName||``).trim(),i=r.length>0&&!r.toLowerCase().startsWith(`unnamed`)?r:``;if(t.includes(`uturn`)||t.includes(`turnaround`)||n===`turnaround`)return`Turn around as soon as possible.`;if(n===`roundabout`||n===`rotary`)return i?`Enter roundabout toward ${i}.`:`Enter roundabout.`;if(n===`fork`){let e=t.includes(`left`)?`left`:`right`;return i?`Keep ${e} at fork onto ${i}.`:`Keep ${e} at fork.`}if(n===`end of road`){let e=t.includes(`left`)?`left`:`right`;return i?`Turn ${e} at end of road onto ${i}.`:`Turn ${e} at end of road.`}if(n===`ramp`||n===`on ramp`||n===`off ramp`)return i?`Take ramp onto ${i}.`:`Take ramp.`;if(n===`merge`){let e=t.includes(`left`)?`left`:`right`;return i?`Merge ${e} onto ${i}.`:`Merge ${e}.`}switch(t){case`right`:return i?`Turn right onto ${i}.`:`Turn right.`;case`left`:return i?`Turn left onto ${i}.`:`Turn left.`;case`slight right`:return i?`Bear slightly right onto ${i}.`:`Bear slightly right.`;case`slight left`:return i?`Bear slightly left onto ${i}.`:`Bear slightly left.`;case`sharp right`:return i?`Make a sharp right onto ${i}.`:`Make a sharp right.`;case`sharp left`:return i?`Make a sharp left onto ${i}.`:`Make a sharp left.`;case`straight`:return i?`Continue straight on ${i}.`:`Continue straight.`;default:return n===`turn`?i?`Turn onto ${i}.`:`Turn.`:``}}function P(e){if(!e)return!1;let t=(e.type||``).toLowerCase(),n=(e.modifier||``).toLowerCase();return t===`arrive`||t===`depart`?!1:!!(n.includes(`left`)||n.includes(`right`)||n.includes(`uturn`)||n.includes(`turnaround`)||t===`turn`||t===`fork`||t===`roundabout`||t===`rotary`||t===`end of road`||t===`merge`||t===`ramp`)}var F={0:`zero`,1:`one`,2:`two`,3:`three`,4:`four`,5:`five`,6:`six`,7:`seven`,8:`eight`,9:`nine`};function I(e){if(!e)return``;let t=e.trim();if(!t||t===`—`||t.toLowerCase()===`n/a`)return``;let n=[];for(let e of t)F[e]?n.push(F[e]):/[a-zA-Z]/.test(e)&&n.push(e.toUpperCase());return n.join(` `)}function R(e,t,n){if(typeof window>`u`)return;let r=(e||``).trim();r=r.replace(/^(?:stop\s*#?\d+\s*[-:–—|]\s*|#?0+\d+\s*[-:–—|]\s*)/i,``).trim(),r=r.replace(/^(?:customer\s*#?\d+\s*[-:–—|:]\s*)/i,``).trim();let i=I(t),a=``;a=r&&i?`Next customer, ${r}, ${i}.`:r?`Next customer, ${r}.`:i?`Next customer, ${i}.`:`Next customer.`,j.speak({id:`stop_${Date.now()}`,text:a,priority:`high`,createdAt:Date.now(),maxAgeMs:15e3})}var z=0;function B(){if(typeof window>`u`)return;let e=Date.now();e-z<12e3||(z=e,j.speak({id:`turnaround_${e}`,text:`Turn around as soon as possible.`,priority:`high`,createdAt:e,maxAgeMs:8e3}))}function V(e,t=500){if(typeof window>`u`)return;let n=M(e,t);n&&j.speak({id:`turn_adv_${t}_${Date.now()}`,text:n,priority:`normal`,createdAt:Date.now(),maxAgeMs:6e3})}function ee(e){if(typeof window>`u`)return;let t=N(e);t&&j.speak({id:`turn_dir_${Date.now()}`,text:t,priority:`normal`,createdAt:Date.now(),maxAgeMs:4e3})}function H(){j.cancelNormalPriority()}var te=null;async function ne(){if(typeof window>`u`)return!1;if(window.AndroidBridge)return!0;if(!(`wakeLock`in navigator))return!1;try{return te=await navigator.wakeLock.request(`screen`),te.addEventListener(`release`,()=>{te=null}),!0}catch{return!1}}function re(){if(te){try{te.release()}catch{}te=null}}var ie=h();function ae(e,t,n,r){if(isNaN(e)||isNaN(t)||isNaN(n)||isNaN(r)||e===0&&t===0||n===0&&r===0)return 1/0;let i=(n-e)*(Math.PI/180),a=(r-t)*(Math.PI/180),o=Math.sin(i/2)*Math.sin(i/2)+Math.cos(Math.PI/180*e)*Math.cos(Math.PI/180*n)*Math.sin(a/2)*Math.sin(a/2);return 6371e3*(2*Math.atan2(Math.sqrt(o),Math.sqrt(1-o)))}function oe(e,t,n){if(!n||n.length<2)return 1/0;let r=111132.92,i=111412.84*Math.cos(e*Math.PI/180),a=1/0;for(let o=0;o<n.length-1;o++){let[s,c]=n[o],[l,u]=n[o+1],d=(t-s)*i,f=(e-c)*r,p=(l-s)*i,m=(u-c)*r,h=p*p+m*m,g;if(h===0)g=Math.sqrt(d*d+f*f);else{let e=Math.max(0,Math.min(1,(d*p+f*m)/h)),t=e*p,n=e*m,r=d-t,i=f-n;g=Math.sqrt(r*r+i*i)}g<a&&(a=g)}return a}function se(e,t,n,r=0){if(!n||n.length===0)return{remainingMeters:0,closestSegmentIndex:0};if(n.length===1)return{remainingMeters:ae(e,t,n[0][1],n[0][0]),closestSegmentIndex:0};let i=111132.92,a=111412.84*Math.cos(e*Math.PI/180),o=Math.max(0,Math.min(r,n.length-2)),s=1/0,c=0,l=Math.max(0,r-2);for(let r=l;r<n.length-1;r++){let[l,u]=n[r],[d,f]=n[r+1],p=(t-l)*a,m=(e-u)*i,h=(d-l)*a,g=(f-u)*i,_=h*h+g*g;if(_===0)continue;let v=Math.max(0,Math.min(1,(p*h+m*g)/_)),y=v*h,b=v*g,x=p-y,S=m-b,C=x*x+S*S;C<s&&(s=C,o=r,c=v)}let[u,d]=n[o],[f,p]=n[o+1],m=ae(d,u,p,f),h=Math.max(0,(1-c)*m);for(let e=o+1;e<n.length-1;e++)h+=ae(n[e][1],n[e][0],n[e+1][1],n[e+1][0]);return{remainingMeters:Math.max(0,Math.round(h)),closestSegmentIndex:o}}function ce(e,t,n,r){let i=Math.sin((r-t)*(Math.PI/180))*Math.cos(Math.PI/180*n),a=Math.cos(Math.PI/180*e)*Math.sin(Math.PI/180*n)-Math.sin(Math.PI/180*e)*Math.cos(Math.PI/180*n)*Math.cos((r-t)*(Math.PI/180));return(Math.atan2(i,a)*180/Math.PI+360)%360}function U(e,t=!1){if(isNaN(e)||e<0)return`0 ft`;if(t)return e<1e3?`${Math.round(e)} m`:`${(e/1e3).toFixed(1)} km`;let n=e*3.28084;if(n<1e3)return n>200?`${Math.round(n/50)*50} ft`:`${Math.max(10,Math.round(n/10)*10)} ft`;let r=n/5280;return r<10?`${r.toFixed(1)} mi`:`${Math.round(r)} mi`}function W(e,t,n,r){let i=n&&n.trim()?n.trim():``,a=(t||``).toLowerCase(),o=(e||``).toLowerCase();if(o===`arrive`)return r?`Arrive at ${r}`:`Arrive at destination`;if(o===`depart`)return i?`Head out onto ${i}`:`Head toward destination`;if(o===`merge`)return a.includes(`left`)?i?`Merge left onto ${i}`:`Merge left`:i?`Merge right onto ${i}`:`Merge right`;if(o===`on ramp`||o===`off ramp`||o===`ramp`)return i?`Take ramp onto ${i}`:`Take ramp`;if(o===`fork`)return a.includes(`left`)?i?`Keep left at fork onto ${i}`:`Keep left at fork`:i?`Keep right at fork onto ${i}`:`Keep right at fork`;if(o===`roundabout`||o===`rotary`)return i?`Enter roundabout toward ${i}`:`Enter roundabout`;if(o===`end of road`)return a.includes(`left`)?i?`Turn left at end onto ${i}`:`Turn left at end of road`:i?`Turn right at end onto ${i}`:`Turn right at end of road`;if(a.includes(`uturn`)||a===`uturn`||a.includes(`turnaround`)||a.includes(`turn around`)||o===`turnaround`)return`Turn around as soon as possible.`;switch(a){case`left`:return i?`Turn left onto ${i}`:`Turn left`;case`right`:return i?`Turn right onto ${i}`:`Turn right`;case`slight left`:return i?`Bear slightly left onto ${i}`:`Bear slightly left`;case`slight right`:return i?`Bear slightly right onto ${i}`:`Bear slightly right`;case`sharp left`:return i?`Make a sharp left onto ${i}`:`Sharp left`;case`sharp right`:return i?`Make a sharp right onto ${i}`:`Sharp right`;case`straight`:return i?`Continue straight on ${i}`:`Continue straight`;default:return o===`continue`||o===`new name`?i?`Continue onto ${i}`:`Continue straight`:i?`Proceed onto ${i}`:`Proceed along route`}}function le(e){return e?e.toLowerCase().replace(/\b(street|st\.?)\b/g,`st`).replace(/\b(road|rd\.?)\b/g,`rd`).replace(/\b(avenue|ave\.?)\b/g,`ave`).replace(/\b(lane|ln\.?)\b/g,`ln`).replace(/\b(drive|dr\.?)\b/g,`dr`).replace(/\b(court|ct\.?)\b/g,`ct`).replace(/\b(boulevard|blvd\.?)\b/g,`blvd`).replace(/\b(state\s*route|route|rt\.?)\b/g,`rt`).replace(/\b(place|pl\.?)\b/g,`pl`).replace(/\b(highway|hwy\.?)\b/g,`hwy`).replace(/[^a-z0-9]/g,` `).replace(/\s+/g,` `).trim():``}function ue(e,t){let n=le(e),r=le(t);return!n||!r?!1:n===r||n.includes(r)||r.includes(n)}async function de(e,t,n,r){let i=n||r;if(!i||!i.trim())return[t,e];try{let n=`https://router.project-osrm.org/nearest/v1/driving/${t},${e}?number=10`,a=new AbortController,o=setTimeout(()=>a.abort(),3500),s=await fetch(n,{signal:a.signal});if(clearTimeout(o),!s.ok)return[t,e];let c=await s.json();if(!c.waypoints||c.waypoints.length<2)return[t,e];let l=c.waypoints[0];if(l&&l.name&&ue(l.name,i))return[t,e];for(let e of c.waypoints)if(e.name&&e.location&&e.distance<350&&(ue(e.name,i)||r&&ue(e.name,r)))return e.location}catch{}return[t,e]}async function fe(e,t,n,r,i,a,o,s){if(isNaN(e)||isNaN(t)||isNaN(n)||isNaN(r)||e<-90||e>90||n<-90||n>90||t<-180||t>180||r<-180||r>180||e===0&&t===0||n===0&&r===0)throw Error(`Invalid coordinates for routing: start(${e}, ${t}), dest(${n}, ${r})`);let c=ae(e,t,n,r);if(c<5)return{maneuvers:[{type:`arrive`,instruction:i?`Arrive at ${i}`:`Arrive at destination`,streetName:``,distanceMeters:Math.round(c),location:[r,n]}],totalDistance:Math.round(c),totalDuration:0,coordinates:[[t,e],[r,n]],hasUturn:!1};let l=r,u=n;if(o||s){let e=await de(n,r,o,s);l=e[0],u=e[1]}let d=typeof a==`number`&&!isNaN(a)?Math.round((a%360+360)%360):null,f=`https://router.project-osrm.org/route/v1/driving/${t},${e};${l},${u}?steps=true&overview=full&geometries=geojson&continue_straight=false`,p=async e=>{let t=new AbortController,n=setTimeout(()=>t.abort(),7e3);try{let r=await fetch(e,{signal:t.signal});if(clearTimeout(n),!r.ok){let e=``;try{let t=await r.json();e=t.message||t.code||``}catch{try{e=await r.text()}catch{}}throw Error(`Routing server HTTP ${r.status}${e?`: ${e}`:``}`)}return await r.json()}catch(e){throw clearTimeout(n),e}},m=await p(f);if(m.code!==`Ok`||!m.routes||m.routes.length===0)throw Error(`No driving route found between coordinates`);let h=m,g=!1;if(d!==null){let e=m.routes[0],t=e.distance||0,n=e.geometry?.coordinates||[],r=(e.legs?.[0]?.steps||[]).some(e=>(e.maneuver?.modifier||``).toLowerCase().includes(`uturn`)||(e.maneuver?.type||``).toLowerCase()===`turnaround`),i=null,a=!1,o=1/0;try{let e=await p(`${f}&bearings=${d},60;`);e&&e.code===`Ok`&&e.routes&&e.routes.length>0&&(i=e,a=!0,o=e.routes[0].distance||1/0)}catch{}let s=0;if(n&&n.length>=2){let[e,t]=n[0],[r,i]=n[1],a=ce(t,e,i,r);s=Math.abs(d-a)%360,s>180&&(s=360-s)}let c=!a||o>t+500&&o>t*1.5;r||c&&s>=135?(g=!0,h=m):a?(g=!1,h=i):(g=!1,h=m)}let _=h.routes[0],v=_.legs?.[0]?.steps||[],y=_.geometry?.coordinates||[],b=!1,x=v.map(e=>{let t=e.maneuver?.type||`turn`,a=e.maneuver?.modifier,o=e.name||``,s=W(t,a,o,i),c=e.maneuver?.location||[r,n];return a&&a.toLowerCase().includes(`uturn`)&&(b=!0),{type:t,modifier:a,instruction:s,streetName:o,distanceMeters:e.distance||0,location:c}});if(g){let n=x[0];if(!(n&&((n.modifier||``).toLowerCase().includes(`uturn`)||(n.type||``).toLowerCase()===`turnaround`||n.instruction.includes(`Turn around as soon as possible.`)))){let r=n?.streetName||s||o||``;x.unshift({type:`turnaround`,modifier:`uturn`,instruction:`Turn around as soon as possible.`,streetName:r,distanceMeters:0,location:[t,e]}),b=!0}}return{maneuvers:x,totalDistance:_.distance||0,totalDuration:_.duration||0,coordinates:y,hasUturn:b}}var pe=e=>e.replace(/([a-z0-9])([A-Z])/g,`$1-$2`).toLowerCase(),G=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,n)=>n?n.toUpperCase():t.toLowerCase()),me=e=>{let t=G(e);return t.charAt(0).toUpperCase()+t.slice(1)},he=(...e)=>e.filter((e,t,n)=>!!e&&e.trim()!==``&&n.indexOf(e)===t).join(` `).trim(),ge=e=>{for(let t in e)if(t.startsWith(`aria-`)||t===`role`||t===`title`)return!0},_e={xmlns:`http://www.w3.org/2000/svg`,width:24,height:24,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:2,strokeLinecap:`round`,strokeLinejoin:`round`},ve=(0,v.forwardRef)(({color:e=`currentColor`,size:t=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:i=``,children:a,iconNode:o,...s},c)=>(0,v.createElement)(`svg`,{ref:c,..._e,width:t,height:t,stroke:e,strokeWidth:r?Number(n)*24/Number(t):n,className:he(`lucide`,i),...!a&&!ge(s)&&{"aria-hidden":`true`},...s},[...o.map(([e,t])=>(0,v.createElement)(e,t)),...Array.isArray(a)?a:[a]])),K=(e,t)=>{let n=(0,v.forwardRef)(({className:n,...r},i)=>(0,v.createElement)(ve,{ref:i,iconNode:t,className:he(`lucide-${pe(me(e))}`,`lucide-${e}`,n),...r}));return n.displayName=me(e),n},ye=K(`activity`,[[`path`,{d:`M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2`,key:`169zse`}]]),be=K(`arrow-left`,[[`path`,{d:`m12 19-7-7 7-7`,key:`1l729n`}],[`path`,{d:`M19 12H5`,key:`x3x0zl`}]]),xe=K(`arrow-up-left`,[[`path`,{d:`M7 17V7h10`,key:`11bw93`}],[`path`,{d:`M17 17 7 7`,key:`2786uv`}]]),Se=K(`arrow-up-right`,[[`path`,{d:`M7 7h10v10`,key:`1tivn9`}],[`path`,{d:`M7 17 17 7`,key:`1vkiza`}]]),Ce=K(`arrow-up`,[[`path`,{d:`m5 12 7-7 7 7`,key:`hav0vg`}],[`path`,{d:`M12 19V5`,key:`x0mq9r`}]]),we=K(`chevron-left`,[[`path`,{d:`m15 18-6-6 6-6`,key:`1wnfg3`}]]),Te=K(`circle-alert`,[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}],[`line`,{x1:`12`,x2:`12`,y1:`8`,y2:`12`,key:`1pkeuh`}],[`line`,{x1:`12`,x2:`12.01`,y1:`16`,y2:`16`,key:`4dfq90`}]]),Ee=K(`circle-check-big`,[[`path`,{d:`M21.801 10A10 10 0 1 1 17 3.335`,key:`yps3ct`}],[`path`,{d:`m9 11 3 3L22 4`,key:`1pflzl`}]]),De=K(`circle-check`,[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}],[`path`,{d:`m9 12 2 2 4-4`,key:`dzmm74`}]]),Oe=K(`circle-dot`,[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}],[`circle`,{cx:`12`,cy:`12`,r:`1`,key:`41hilf`}]]),ke=K(`clock`,[[`path`,{d:`M12 6v6l4 2`,key:`mmk7yg`}],[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}]]),Ae=K(`cloud-upload`,[[`path`,{d:`M12 13v8`,key:`1l5pq0`}],[`path`,{d:`M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242`,key:`1pljnt`}],[`path`,{d:`m8 17 4-4 4 4`,key:`1quai1`}]]),je=K(`compass`,[[`path`,{d:`m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z`,key:`9ktpf1`}],[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}]]),Me=K(`corner-up-left`,[[`path`,{d:`M20 20v-7a4 4 0 0 0-4-4H4`,key:`1nkjon`}],[`path`,{d:`M9 14 4 9l5-5`,key:`102s5s`}]]),Ne=K(`corner-up-right`,[[`path`,{d:`m15 14 5-5-5-5`,key:`12vg1m`}],[`path`,{d:`M4 20v-7a4 4 0 0 1 4-4h12`,key:`1lu4f8`}]]),Pe=K(`crosshair`,[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}],[`line`,{x1:`22`,x2:`18`,y1:`12`,y2:`12`,key:`l9bcsi`}],[`line`,{x1:`6`,x2:`2`,y1:`12`,y2:`12`,key:`13hhkx`}],[`line`,{x1:`12`,x2:`12`,y1:`6`,y2:`2`,key:`10w3f3`}],[`line`,{x1:`12`,x2:`12`,y1:`22`,y2:`18`,key:`15g9kq`}]]),Fe=K(`download`,[[`path`,{d:`M12 15V3`,key:`m9g1x1`}],[`path`,{d:`M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4`,key:`ih7n3h`}],[`path`,{d:`m7 10 5 5 5-5`,key:`brsn70`}]]),Ie=K(`eye`,[[`path`,{d:`M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0`,key:`1nclc0`}],[`circle`,{cx:`12`,cy:`12`,r:`3`,key:`1v7zrd`}]]),Le=K(`file-archive`,[[`path`,{d:`M10 12v-1`,key:`v7bkov`}],[`path`,{d:`M10 18v-2`,key:`1cjy8d`}],[`path`,{d:`M10 7V6`,key:`dljcrl`}],[`path`,{d:`M14 2v4a2 2 0 0 0 2 2h4`,key:`tnqrlb`}],[`path`,{d:`M15.5 22H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v16a2 2 0 0 0 .274 1.01`,key:`gkbcor`}],[`circle`,{cx:`10`,cy:`20`,r:`2`,key:`1xzdoj`}]]),Re=K(`file-code`,[[`path`,{d:`M10 12.5 8 15l2 2.5`,key:`1tg20x`}],[`path`,{d:`m14 12.5 2 2.5-2 2.5`,key:`yinavb`}],[`path`,{d:`M14 2v4a2 2 0 0 0 2 2h4`,key:`tnqrlb`}],[`path`,{d:`M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z`,key:`1mlx9k`}]]),ze=K(`flag`,[[`path`,{d:`M4 22V4a1 1 0 0 1 .4-.8A6 6 0 0 1 8 2c3 0 5 2 7.333 2q2 0 3.067-.8A1 1 0 0 1 20 4v10a1 1 0 0 1-.4.8A6 6 0 0 1 16 16c-3 0-5-2-8-2a6 6 0 0 0-4 1.528`,key:`1jaruq`}]]),Be=K(`folder-open`,[[`path`,{d:`m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2`,key:`usdka0`}]]),Ve=K(`git-fork`,[[`circle`,{cx:`12`,cy:`18`,r:`3`,key:`1mpf1b`}],[`circle`,{cx:`6`,cy:`6`,r:`3`,key:`1lh9wr`}],[`circle`,{cx:`18`,cy:`6`,r:`3`,key:`1h7g24`}],[`path`,{d:`M18 9v2c0 .6-.4 1-1 1H7c-.6 0-1-.4-1-1V9`,key:`1uq4wg`}],[`path`,{d:`M12 12v3`,key:`158kv8`}]]),He=K(`info`,[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}],[`path`,{d:`M12 16v-4`,key:`1dtifu`}],[`path`,{d:`M12 8h.01`,key:`e9boi3`}]]),q=K(`layers`,[[`path`,{d:`M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z`,key:`zw3jo`}],[`path`,{d:`M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12`,key:`1wduqc`}],[`path`,{d:`M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17`,key:`kqbvx6`}]]),Ue=K(`list`,[[`path`,{d:`M3 5h.01`,key:`18ugdj`}],[`path`,{d:`M3 12h.01`,key:`nlz23k`}],[`path`,{d:`M3 19h.01`,key:`noohij`}],[`path`,{d:`M8 5h13`,key:`1pao27`}],[`path`,{d:`M8 12h13`,key:`1za7za`}],[`path`,{d:`M8 19h13`,key:`m83p4d`}]]),We=K(`map-pin`,[[`path`,{d:`M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0`,key:`1r0f0z`}],[`circle`,{cx:`12`,cy:`10`,r:`3`,key:`ilqhr7`}]]),Ge=K(`map`,[[`path`,{d:`M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z`,key:`169xi5`}],[`path`,{d:`M15 5.764v15`,key:`1pn4in`}],[`path`,{d:`M9 3.236v15`,key:`1uimfh`}]]),Ke=K(`moon`,[[`path`,{d:`M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401`,key:`kfwtm`}]]),qe=K(`navigation`,[[`polygon`,{points:`3 11 22 2 13 21 11 13 3 11`,key:`1ltx0t`}]]),Je=K(`pause`,[[`rect`,{x:`14`,y:`3`,width:`5`,height:`18`,rx:`1`,key:`kaeet6`}],[`rect`,{x:`5`,y:`3`,width:`5`,height:`18`,rx:`1`,key:`1wsw3u`}]]),Ye=K(`play`,[[`path`,{d:`M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z`,key:`10ikf1`}]]),Xe=K(`rotate-ccw`,[[`path`,{d:`M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8`,key:`1357e3`}],[`path`,{d:`M3 3v5h5`,key:`1xhq8a`}]]),Ze=K(`search`,[[`path`,{d:`m21 21-4.34-4.34`,key:`14j7rj`}],[`circle`,{cx:`11`,cy:`11`,r:`8`,key:`4ej97u`}]]),Qe=K(`settings`,[[`path`,{d:`M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915`,key:`1i5ecw`}],[`circle`,{cx:`12`,cy:`12`,r:`3`,key:`1v7zrd`}]]),$e=K(`shield-check`,[[`path`,{d:`M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z`,key:`oel41y`}],[`path`,{d:`m9 12 2 2 4-4`,key:`dzmm74`}]]),et=K(`skip-forward`,[[`path`,{d:`M21 4v16`,key:`7j8fe9`}],[`path`,{d:`M6.029 4.285A2 2 0 0 0 3 6v12a2 2 0 0 0 3.029 1.715l9.997-5.998a2 2 0 0 0 .003-3.432z`,key:`zs4d6`}]]),tt=K(`smartphone`,[[`rect`,{width:`14`,height:`20`,x:`5`,y:`2`,rx:`2`,ry:`2`,key:`1yt0o3`}],[`path`,{d:`M12 18h.01`,key:`mhygvu`}]]),nt=K(`sparkles`,[[`path`,{d:`M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z`,key:`1s2grr`}],[`path`,{d:`M20 2v4`,key:`1rf3ol`}],[`path`,{d:`M22 4h-4`,key:`gwowj6`}],[`circle`,{cx:`4`,cy:`20`,r:`2`,key:`6kqj1y`}]]),rt=K(`square`,[[`rect`,{width:`18`,height:`18`,x:`3`,y:`3`,rx:`2`,key:`afitv7`}]]),it=K(`sun`,[[`circle`,{cx:`12`,cy:`12`,r:`4`,key:`4exip2`}],[`path`,{d:`M12 2v2`,key:`tus03m`}],[`path`,{d:`M12 20v2`,key:`1lh1kg`}],[`path`,{d:`m4.93 4.93 1.41 1.41`,key:`149t6j`}],[`path`,{d:`m17.66 17.66 1.41 1.41`,key:`ptbguv`}],[`path`,{d:`M2 12h2`,key:`1t8f8n`}],[`path`,{d:`M20 12h2`,key:`1q8mjw`}],[`path`,{d:`m6.34 17.66-1.41 1.41`,key:`1m8zz5`}],[`path`,{d:`m19.07 4.93-1.41 1.41`,key:`1shlcs`}]]),at=K(`trash-2`,[[`path`,{d:`M10 11v6`,key:`nco0om`}],[`path`,{d:`M14 11v6`,key:`outv1u`}],[`path`,{d:`M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6`,key:`miytrc`}],[`path`,{d:`M3 6h18`,key:`d0wm0j`}],[`path`,{d:`M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2`,key:`e791ji`}]]),ot=K(`upload`,[[`path`,{d:`M12 3v12`,key:`1x0j5s`}],[`path`,{d:`m17 8-5-5-5 5`,key:`7q97r8`}],[`path`,{d:`M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4`,key:`ih7n3h`}]]),st=K(`volume-2`,[[`path`,{d:`M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z`,key:`uqj9uw`}],[`path`,{d:`M16 9a5 5 0 0 1 0 6`,key:`1q6k2b`}],[`path`,{d:`M19.364 18.364a9 9 0 0 0 0-12.728`,key:`ijwkga`}]]),ct=K(`x`,[[`path`,{d:`M18 6 6 18`,key:`1bl5f8`}],[`path`,{d:`m6 6 12 12`,key:`d8bk6v`}]]),lt=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.fragment`);function r(e,n,r){var i=null;if(r!==void 0&&(i=``+r),n.key!==void 0&&(i=``+n.key),`key`in n)for(var a in r={},n)a!==`key`&&(r[a]=n[a]);else r=n;return n=r.ref,{$$typeof:t,type:e,key:i,ref:n===void 0?null:n,props:r}}e.Fragment=n,e.jsx=r,e.jsxs=r})),J=o(((e,t)=>{t.exports=lt()}))();function ut(e,t){return!isNaN(e)&&!isNaN(t)&&e>=-90&&e<=90&&t>=-180&&t<=180&&(e!==0||t!==0)}var dt=({type:e=`turn`,modifier:t=`straight`,className:n=`w-10 h-10`})=>{let r=(t||``).toLowerCase(),i=(e||``).toLowerCase();return i===`arrive`?(0,J.jsx)(ze,{className:n}):i===`roundabout`||i===`rotary`?(0,J.jsx)(Oe,{className:n}):i===`fork`?(0,J.jsx)(Ve,{className:n}):r.includes(`uturn`)||r===`uturn`||r.includes(`turnaround`)||r.includes(`turn around`)||i===`turnaround`?(0,J.jsxs)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2.75`,strokeLinecap:`round`,strokeLinejoin:`round`,className:n,children:[(0,J.jsx)(`path`,{d:`M9 19V9a5 5 0 0 1 10 0v7`}),(0,J.jsx)(`polyline`,{points:`6 16 9 19 12 16`})]}):r===`sharp right`?(0,J.jsxs)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2.75`,strokeLinecap:`round`,strokeLinejoin:`round`,className:n,children:[(0,J.jsx)(`path`,{d:`M12 21V11a4 4 0 0 1 4-4h5`}),(0,J.jsx)(`polyline`,{points:`18 4 21 7 18 10`})]}):r===`sharp left`?(0,J.jsxs)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2.75`,strokeLinecap:`round`,strokeLinejoin:`round`,className:n,children:[(0,J.jsx)(`path`,{d:`M12 21V11a4 4 0 0 0-4-4H3`}),(0,J.jsx)(`polyline`,{points:`6 4 3 7 6 10`})]}):r===`slight right`?(0,J.jsx)(Se,{className:n,strokeWidth:2.75}):r===`slight left`?(0,J.jsx)(xe,{className:n,strokeWidth:2.75}):r===`right`?(0,J.jsx)(Ne,{className:n,strokeWidth:2.75}):r===`left`?(0,J.jsx)(Me,{className:n,strokeWidth:2.75}):r===`straight`||i===`continue`||i===`depart`?(0,J.jsx)(Ce,{className:n,strokeWidth:2.75}):(0,J.jsx)(je,{className:n,strokeWidth:2.5})},ft=({currentStop:e,previousStop:t,nextStop:n,userLocation:r,distanceToCurrentFeet:i,isDark:a,arrivalRadiusMeters:o=152.4,isWithinGeofence:s=!1,isConfirmedArrival:c=!1,autoArrivalStatus:l,isPassedWithoutCompletion:u=!1,simulateApproachAndPass:d,simulateApproachAndArrive:f,simulateCurbsidePassThrough:p,isSimulatingGps:m=!1,isSimPaused:h=!1,simSpeedMultiplier:g=1,startFullRouteSimulation:_,pauseSimulation:y,resumeSimulation:b,setSimulationSpeed:x,restartSimulation:S,stopGpsSimulation:C,onRouteCoordinatesUpdate:w,onRoadRemainingUpdate:T,onSkipCustomer:E,voiceAnnouncement:D=!0,turnWarningDistancesFeet:O=[500,200],onOpenSettings:k,diagLogs:A=[]})=>{let[j,M]=(0,v.useState)(!1),[N,F]=(0,v.useState)(!1),[I,R]=(0,v.useState)(!1),[z,te]=(0,v.useState)(1),ne=(0,v.useRef)(0),[re,ie]=(0,v.useState)(null);(0,v.useEffect)(()=>(window.onOsmAndNavUpdate=(e,t,n)=>{ie({maneuver:e||`straight`,street:t||``,distanceMeters:typeof n==`number`?n:0,lastReceived:Date.now()})},()=>{delete window.onOsmAndNavUpdate}),[]);let W=!!(re&&Date.now()-re.lastReceived<2e4),[le,ue]=(0,v.useState)([]),[de,pe]=(0,v.useState)([]),[G,me]=(0,v.useState)(0),[he,ge]=(0,v.useState)(0),[_e,ve]=(0,v.useState)(0),[K,be]=(0,v.useState)(null),[xe,Se]=(0,v.useState)(0),[Ce,we]=(0,v.useState)(!1),[Te,Ee]=(0,v.useState)(null),[Oe,ke]=(0,v.useState)(null),Ae=(0,v.useRef)(0),je=(0,v.useRef)(null),Me=(0,v.useRef)(1/0),Ne=(0,v.useRef)(null),Pe=(0,v.useRef)(0),Fe=(0,v.useRef)(null),Ie=(0,v.useRef)(new Map),Le=(0,v.useRef)(null),Re=(0,v.useRef)(`route_0`);(0,v.useEffect)(()=>{r&&ut(r.lat,r.lon)&&(Fe.current={lat:r.lat,lon:r.lon})},[r]);let ze=(0,v.useCallback)(()=>{if(r&&ut(r.lat,r.lon)){let e=r.heading??null;return e===null&&Fe.current&&(e=ce(Fe.current.lat,Fe.current.lon,r.lat,r.lon)),{lat:r.lat,lon:r.lon,heading:e}}return t&&ut(t.lat,t.lon)?{lat:t.lat,lon:t.lon,heading:null}:e&&ut(e.lat,e.lon)?{lat:e.lat-.005,lon:e.lon-.004,heading:35}:null},[r,t,e]),Be=(0,v.useCallback)(async(t,n)=>{if(!e||!ut(e.lat,e.lon)){ue([]),pe([]),be(null);return}let r=t||ze();if(!r)return;let i=++ne.current,a=e.id;we(!0),Ee(null);try{let t=le[G]?.streetName||e.streetName,o=await fe(r.lat,r.lon,e.lat,e.lon,e.name,r.heading,e.streetName,t);if(i!==ne.current||Ne.current!==a)return;o.maneuvers.length>0&&(H(),Ie.current.clear(),Re.current=`route_${Date.now()}`,ue(o.maneuvers),pe(o.coordinates),w&&w(o.coordinates),me(0),Pe.current=0,ve(o.totalDistance),be(o.totalDistance),Se(o.totalDuration),ge(o.maneuvers[0]?.distanceMeters||0),Ae.current=Date.now(),je.current={lat:r.lat,lon:r.lon},n?(ke(n),setTimeout(()=>ke(null),5e3)):o.hasUturn&&(ke(`Turn Around Route Active`),setTimeout(()=>ke(null),5e3)))}catch(e){console.warn(`Road routing error:`,e),Ee(e.message||`Routing unavailable`)}finally{we(!1)}},[e,ze,w,le,G]);(0,v.useEffect)(()=>{let t=e?.id||null;t!==Ne.current&&(Ne.current=t,Le.current=null,H(),Ie.current.clear(),Re.current=`route_${Date.now()}`,me(0),Pe.current=0,be(null),Me.current=1/0,je.current=null,Ae.current=0,ke(null),pe([]),w?.([]),Be())},[e?.id,e?.lat,e?.lon,Be,w]),(0,v.useEffect)(()=>{if(!r||!ut(r.lat,r.lon)||!e||!ut(e.lat,e.lon))return;let t=Date.now(),n=ae(r.lat,r.lon,e.lat,e.lon);n<Me.current&&(Me.current=n);let a=t-Ae.current,o=je.current?ae(r.lat,r.lon,je.current.lat,je.current.lon):1/0,s=!!u,c=!1;if(de.length>1&&(c=oe(r.lat,r.lon,de)>45&&n>30),m&&(c=!1),(s||c)&&a>3500&&o>15&&!Ce){let e=s?`Passed Stop · Recalculating`:`Off-Route · Rerouting`;Me.current=n;let t=r.heading??null;t===null&&Fe.current&&(t=ce(Fe.current.lat,Fe.current.lon,r.lat,r.lon)),Be({lat:r.lat,lon:r.lon,heading:t},e)}else{if(de.length>1){let{remainingMeters:e,closestSegmentIndex:t}=se(r.lat,r.lon,de,Pe.current);Pe.current=t,be(e),T?.(e)}else if(i!==null){let e=Math.round(i/3.28084);be(e),T?.(e)}else{let e=Math.round(n);be(e),T?.(e)}if(le.length>0&&G<le.length){let e=le[G];if(e){let[t,n]=e.location,i=ae(r.lat,r.lon,n,t),a=Math.round(i*3.28084);if(i<25&&G<le.length-1){me(e=>e+1);let e=le[G+1];ge(e?e.distanceMeters:0)}else ge(Math.max(0,Math.round(i)));let o=!!(e.modifier?.toLowerCase().includes(`uturn`)||e.type?.toLowerCase()===`turnaround`);if(D&&P(e)&&!s&&!o){let r=`${Re.current}_m${G}_${t.toFixed(5)},${n.toFixed(5)}`;Ie.current.has(r)||Ie.current.set(r,new Set);let i=Ie.current.get(r),o=O&&O[0]||500;a<=o+60&&a>=o-60&&(i.has(`advance`)||(i.add(`advance`),V(e,o))),a<=160&&a>=60&&(i.has(`direct`)||(i.add(`direct`),ee(e)))}}}}},[r,e,le,G,de,u,Ce,Be,i,D,O]);let Ve=le[G]||null,q=le[G+1]||null,Ue=r&&ut(r.lat,r.lon)&&ut(e.lat,e.lon)?ae(r.lat,r.lon,e.lat,e.lon):1/0,We=!!u,Ge=!!(e&&(!n||e.streetName&&n.streetName&&e.streetName.toLowerCase().trim()!==n.streetName.toLowerCase().trim())),Ke=e=>{if(!e)return``;let t=e.trim();if(!t)return``;if(t.includes(`|`)||/(?:stop\s*#?\d+|customer|address|addr)\s*:/i.test(t)){let e=t.match(/(?:address|addr)\s*:\s*([^|;\n]+)/i);if(e)t=e[1].trim();else{let e=t.split(/\s*\|\s*/);t=e[e.length-1].trim().replace(/^(?:address|addr)\s*:\s*/i,``).trim()}}return t=t.replace(/^(?:stop\s*#?\d+\s*[-:–—|]\s*|#?0+\d+\s*[-:–—|]\s*)/i,``).trim(),t=t.replace(/^(?:#|no\.?\s*)?\d+[A-Za-z]?(?:[-\/][A-Za-z0-9]+)?\s+(?:[NSEW]\.?\s+)?/i,``).trim(),t=t.replace(/,\s*(?:apt\.?|unit|ste\.?|suite|room|rm\.?)\s*#?[a-z0-9-]+$/i,``).trim(),t=t.replace(/\s+(?:apt\.?|apartment|unit|suite|ste\.?)\s*#?[a-z0-9-]+$/i,``).trim(),t},Ze=!!c;le.some(e=>{let t=(e.modifier||``).toLowerCase(),n=(e.type||``).toLowerCase();return t.includes(`uturn`)||t.includes(`turnaround`)||t.includes(`turn around`)||n===`turnaround`});let $e=!(Ze||!Ve||!(Ve.modifier||``).toLowerCase().includes(`uturn`)&&(Ve.type||``).toLowerCase()!==`turnaround`&&!Ve.instruction.includes(`Turn around as soon as possible.`)),et=!!($e&&(he<=50||G===0&&(Ve?.distanceMeters||0)<=50));(0,v.useEffect)(()=>{if(et&&D&&e?.id&&!Ze){let e=`${Re.current}_m${G}_turnaround`;Ie.current.has(e)||Ie.current.set(e,new Set);let t=Ie.current.get(e);t.has(`immediate`)||(t.add(`immediate`),B())}},[et,D,e?.id,G,Ze]);let tt=Ke(W&&re?re.street:Ve?.streetName||e.streetName||e.fullAddress||``),it=W&&re?re.maneuver.includes(`roundabout`)?`roundabout`:re.maneuver.includes(`uturn`)||re.maneuver.includes(`turnaround`)?`turnaround`:`turn`:$e?`turnaround`:Ve?.type||`turn`,at=W&&re?re.maneuver:$e?`uturn`:Ve?.modifier||`straight`,ot=W&&re?re.maneuver.includes(`uturn`)||re.maneuver.includes(`turnaround`)?`Turn around as soon as possible.`:re.street?`Turn onto ${re.street}`:re.maneuver:$e?et?`Turn around as soon as possible.`:tt?`Turn around ahead on ${tt}`:`Turn around as soon as possible.`:Ve?.instruction||(tt?`Proceed along route to ${tt}`:`Proceed toward customer destination`),st=W&&re?U(re.distanceMeters):U(he)||`0 ft`,lt=ut(e.lat,e.lon);Math.round((o||152.4)*3.28084);let ft=i!==null&&lt?i/3.28084:Ue,Y=Ze?`0 ft`:ft<=(o||152.4)&&ft<1/0?U(ft):K===null?ft<1/0?U(ft):_e>0?U(_e):`0 ft`:U(K),X=!(!Ve||Ve.type===`arrive`)&&(G<le.length-1||he>15);return(0,J.jsxs)(J.Fragment,{children:[(0,J.jsxs)(`div`,{className:`w-full rounded-2xl border-2 transition-all shadow-xl relative mb-2 flex flex-col shrink-0 ${Ze?`bg-emerald-950/95 border-emerald-400 text-white shadow-emerald-950/90`:a?`bg-neutral-950 border-neutral-800 text-white shadow-neutral-950/95`:`bg-neutral-900 border-neutral-700 text-white shadow-neutral-500/40`}`,children:[(0,J.jsx)(`div`,{className:`w-full h-1 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-400 rounded-t-2xl`}),(0,J.jsxs)(`div`,{className:`px-2.5 py-1.5 flex items-center justify-between border-b border-neutral-800/80 gap-2`,children:[(0,J.jsxs)(`div`,{className:`flex items-center gap-2 shrink-0`,children:[(0,J.jsx)(`img`,{src:`/icon-192.png`,alt:`Garbage Route`,className:`w-7 h-7 rounded-lg border border-emerald-400/60 shadow-sm shrink-0 object-cover`}),(0,J.jsx)(`span`,{className:`font-black text-xs sm:text-sm tracking-tight text-white leading-none`,children:`Garbage Route`})]}),(0,J.jsxs)(`div`,{className:`flex items-center gap-1.5 min-w-0 justify-end`,children:[Oe&&(0,J.jsx)(`span`,{className:`font-mono font-bold uppercase tracking-wider text-[10px] text-amber-400 bg-amber-950/70 border border-amber-500/40 px-1.5 py-0.5 rounded shrink-0`,children:Oe}),m?(0,J.jsxs)(`div`,{className:`flex items-center gap-1 bg-neutral-900 border border-amber-500/50 rounded-lg p-0.5 shadow-lg`,children:[(0,J.jsx)(`button`,{onClick:()=>{h?b?.():y?.()},className:`flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-wider transition-all active:scale-95 ${h?`bg-amber-400 text-black hover:bg-amber-300`:`bg-neutral-800 text-amber-400 hover:bg-neutral-700`}`,title:h?`Resume Simulation`:`Pause Simulation`,children:h?(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)(Ye,{className:`w-2.5 h-2.5 fill-current`}),(0,J.jsx)(`span`,{children:`Resume`})]}):(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)(Je,{className:`w-2.5 h-2.5 fill-current`}),(0,J.jsx)(`span`,{children:`Pause`})]})}),(0,J.jsx)(`div`,{className:`flex items-center border-l border-neutral-700 pl-1`,children:[1,2,5].map(e=>(0,J.jsxs)(`button`,{onClick:()=>x?.(e),className:`px-1.5 py-0.5 text-[9px] font-black rounded font-mono transition-all ${g===e?`bg-amber-400 text-black shadow-sm`:`text-neutral-400 hover:text-white`}`,title:`Set Simulation Speed to ${e}x`,children:[e,`x`]},e))}),(0,J.jsx)(`button`,{onClick:()=>S?.(),className:`p-1 text-neutral-400 hover:text-white rounded hover:bg-neutral-800 transition-colors`,title:`Restart from Stop 1`,children:(0,J.jsx)(Xe,{className:`w-2.5 h-2.5`})}),(0,J.jsxs)(`button`,{onClick:()=>F(!0),className:`flex items-center gap-0.5 px-1.5 py-0.5 rounded text-[10px] font-mono font-bold uppercase tracking-wider bg-neutral-800 hover:bg-neutral-700 text-sky-400 border border-sky-500/40 transition-all active:scale-95`,title:`Open Test Drive Navigation Diagnostics`,children:[(0,J.jsx)(ye,{className:`w-2.5 h-2.5`}),(0,J.jsx)(`span`,{children:`Diag`})]}),(0,J.jsxs)(`button`,{onClick:()=>C?.(),className:`flex items-center gap-0.5 px-1.5 py-0.5 rounded text-[10px] font-black uppercase tracking-wider bg-red-600/80 hover:bg-red-600 text-white transition-all active:scale-95`,title:`Stop Test Drive & Exit Simulation`,children:[(0,J.jsx)(rt,{className:`w-2 h-2 fill-current`}),(0,J.jsx)(`span`,{children:`Exit`})]})]}):(0,J.jsxs)(`div`,{className:`relative`,children:[(0,J.jsxs)(`button`,{onClick:()=>R(e=>!e),className:`flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[10px] font-black uppercase tracking-wider bg-neutral-900 hover:bg-neutral-800 text-amber-400 border border-neutral-700 transition-all active:scale-95 shadow-sm`,title:`Open Test Drive simulation menu`,children:[(0,J.jsx)(Ye,{className:`w-2.5 h-2.5 fill-current text-amber-400`}),(0,J.jsx)(`span`,{children:`TEST DRIVE`})]}),I&&(0,J.jsxs)(`div`,{className:`absolute left-0 top-full mt-1.5 w-64 bg-neutral-900 border border-neutral-700 rounded-xl shadow-2xl p-2 z-40 space-y-2 animate-in fade-in zoom-in-95 duration-150`,children:[(0,J.jsxs)(`div`,{className:`flex items-center justify-between pb-1.5 border-b border-neutral-800 text-[10px] text-neutral-400 font-bold uppercase tracking-wider`,children:[(0,J.jsx)(`span`,{children:`Sim Speed:`}),(0,J.jsx)(`div`,{className:`flex items-center gap-1`,children:[1,2,5].map(e=>(0,J.jsxs)(`button`,{type:`button`,onClick:()=>te(e),className:`px-2 py-0.5 rounded font-mono text-[10px] font-bold ${z===e?`bg-amber-400 text-black`:`bg-neutral-800 text-neutral-300 hover:text-white`}`,children:[e,`x`]},e))})]}),(0,J.jsxs)(`div`,{className:`space-y-1`,children:[(0,J.jsxs)(`button`,{onClick:()=>{R(!1),_&&_(0,z)},className:`w-full text-left p-2 rounded-lg bg-amber-400/10 hover:bg-amber-400/20 border border-amber-500/30 text-white transition-all group`,children:[(0,J.jsxs)(`div`,{className:`flex items-center justify-between`,children:[(0,J.jsxs)(`div`,{className:`flex items-center gap-1.5 font-bold text-xs text-amber-300`,children:[(0,J.jsx)(Ye,{className:`w-3.5 h-3.5 fill-current text-amber-400 shrink-0`}),(0,J.jsx)(`span`,{children:`Start Drive from Stop 1`})]}),(0,J.jsx)(`span`,{className:`text-[9px] bg-amber-400 text-black px-1.5 py-0.2 rounded font-black uppercase font-mono`,children:`Full Route`})]}),(0,J.jsx)(`p`,{className:`text-[10px] text-neutral-400 mt-0.5 pl-5`,children:`Simulates complete route along roads to the last customer.`})]}),(0,J.jsx)(`button`,{onClick:()=>{R(!1),_&&_(void 0,z)},className:`w-full text-left px-2 py-1.5 rounded-lg text-xs font-bold text-neutral-200 hover:bg-neutral-800 flex items-center justify-between`,children:(0,J.jsxs)(`div`,{className:`flex items-center gap-1.5`,children:[(0,J.jsx)(qe,{className:`w-3.5 h-3.5 text-neutral-400 shrink-0`}),(0,J.jsx)(`span`,{children:`Continue from Current Stop`})]})})]}),(0,J.jsxs)(`div`,{className:`pt-1.5 border-t border-neutral-800 space-y-1`,children:[(0,J.jsx)(`div`,{className:`text-[9px] font-bold uppercase tracking-wider text-neutral-500 px-1`,children:`Single-Stop Quick Tests`}),(0,J.jsxs)(`button`,{onClick:()=>{R(!1),f?.()},className:`w-full text-left px-2 py-1 rounded-lg text-xs font-bold text-neutral-300 hover:bg-neutral-800 flex items-center justify-between`,children:[(0,J.jsxs)(`div`,{className:`flex items-center gap-1.5`,children:[(0,J.jsx)(De,{className:`w-3 h-3 text-emerald-400 shrink-0`}),(0,J.jsx)(`span`,{children:`Curbside Stop`})]}),(0,J.jsx)(`span`,{className:`text-[9px] text-neutral-500 font-mono`,children:`2 mph`})]}),(0,J.jsxs)(`button`,{onClick:()=>{R(!1),p?.()},className:`w-full text-left px-2 py-1 rounded-lg text-xs font-bold text-neutral-300 hover:bg-neutral-800 flex items-center justify-between`,children:[(0,J.jsxs)(`div`,{className:`flex items-center gap-1.5`,children:[(0,J.jsx)(De,{className:`w-3 h-3 text-cyan-400 shrink-0`}),(0,J.jsx)(`span`,{children:`Curbside Pass-Through`})]}),(0,J.jsx)(`span`,{className:`text-[9px] text-cyan-400 font-mono`,children:`10 mph`})]}),(0,J.jsxs)(`button`,{onClick:()=>{R(!1),d?.()},className:`w-full text-left px-2 py-1 rounded-lg text-xs font-bold text-neutral-300 hover:bg-neutral-800 flex items-center justify-between`,children:[(0,J.jsxs)(`div`,{className:`flex items-center gap-1.5`,children:[(0,J.jsx)(Xe,{className:`w-3 h-3 text-amber-400 shrink-0`}),(0,J.jsx)(`span`,{children:`Miss Stop & Reroute`})]}),(0,J.jsx)(`span`,{className:`text-[9px] text-amber-400 font-mono`,children:`28 mph`})]})]})]})]}),(0,J.jsxs)(`div`,{className:`flex items-center gap-1 shrink-0`,children:[(0,J.jsx)(`button`,{onClick:()=>M(!0),className:`p-1.5 text-neutral-400 hover:text-white rounded-lg hover:bg-neutral-800 transition-colors`,title:`Navigation details & instructions`,children:(0,J.jsx)(He,{className:`w-4 h-4`})}),k&&(0,J.jsx)(`button`,{onClick:k,className:`p-1.5 text-neutral-400 hover:text-white rounded-lg hover:bg-neutral-800 transition-colors`,title:`Settings & Route Options`,"aria-label":`Settings`,children:(0,J.jsx)(Qe,{className:`w-4 h-4`})})]})]})]}),(0,J.jsxs)(`div`,{className:`px-3 py-2 flex items-center justify-between gap-3 border-b border-neutral-800/60`,children:[(0,J.jsx)(`div`,{className:`w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center shrink-0 border-2 shadow-lg transition-all ${Ze?`bg-emerald-500 border-emerald-300 text-black shadow-emerald-500/50`:W?`bg-emerald-500/25 border-emerald-400 text-emerald-400`:`bg-amber-400 border-amber-300 text-black shadow-amber-400/20`}`,children:Ze?(0,J.jsx)(De,{className:`w-8 h-8 sm:w-9 sm:h-9 stroke-[3] text-black`}):(0,J.jsx)(dt,{type:it,modifier:at,className:`w-8 h-8 sm:w-9 sm:h-9 stroke-[2.75]`})}),(0,J.jsxs)(`div`,{className:`flex-1 text-right min-w-0`,children:[(0,J.jsx)(`div`,{className:`text-[9px] sm:text-[10px] font-black uppercase tracking-widest text-amber-400 font-mono mb-0.5`,children:Ze?`ARRIVED AT CUSTOMER`:`DISTANCE TO CUSTOMER`}),(0,J.jsx)(`div`,{className:`font-black text-3xl sm:text-4xl font-mono text-white tracking-tight leading-none drop-shadow`,children:Y}),!Ze&&(0,J.jsx)(`div`,{className:`mt-1 flex items-center justify-end gap-1.5 text-xs font-mono`,children:X?(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)(`span`,{className:`text-[9px] font-black uppercase tracking-wider text-black bg-amber-400 px-1.5 py-0.5 rounded shrink-0`,children:`NEXT TURN`}),(0,J.jsx)(`span`,{className:`text-white font-extrabold text-[11px] sm:text-xs`,children:st})]}):(0,J.jsxs)(`span`,{className:`text-[10px] font-bold text-emerald-400 flex items-center gap-1`,children:[(0,J.jsx)(`span`,{className:`w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block animate-pulse`}),(0,J.jsx)(`span`,{children:`Straight to Stop`})]})})]})]}),(0,J.jsxs)(`div`,{className:`px-3 py-1.5 space-y-1`,children:[(0,J.jsx)(`h2`,{className:`text-base sm:text-lg font-black text-amber-300 tracking-tight leading-snug whitespace-normal break-words`,children:ot}),tt&&(0,J.jsxs)(`div`,{className:`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-lg bg-neutral-900 border border-neutral-700/80 text-white font-bold text-xs max-w-full whitespace-normal break-words`,children:[(0,J.jsx)(`span`,{className:`w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0`}),(0,J.jsxs)(`span`,{className:`break-words`,children:[`Road: `,tt]})]})]}),We&&Ge&&!Ze&&(0,J.jsxs)(`div`,{className:`mx-3 my-1 px-3 py-1.5 rounded-xl bg-amber-500/15 border border-amber-400/40 text-amber-300 text-[11px] font-bold flex items-center justify-between gap-2`,children:[(0,J.jsx)(`span`,{children:`Customer is last stop on road · Turn around as soon as possible, or tap Skip to continue`}),E&&(0,J.jsx)(`button`,{onClick:E,className:`shrink-0 px-2 py-0.5 bg-amber-400 text-black rounded-lg text-[10px] font-black uppercase tracking-wider hover:bg-amber-300 active:scale-95 transition-all shadow`,children:`Skip`})]}),q&&!Ze&&(0,J.jsxs)(`div`,{className:`px-3 py-1 bg-neutral-900/95 border-t border-neutral-800 rounded-b-2xl flex items-center gap-2 text-xs font-semibold text-neutral-300 whitespace-normal break-words`,children:[(0,J.jsx)(`span`,{className:`text-[9px] font-black uppercase tracking-wider text-black bg-amber-400 px-1.5 py-0.5 rounded shrink-0`,children:`THEN`}),(0,J.jsx)(`div`,{className:`w-4 h-4 flex items-center justify-center shrink-0 text-amber-400`,children:(0,J.jsx)(dt,{type:q.type,modifier:q.modifier,className:`w-3.5 h-3.5 stroke-[2.5]`})}),(0,J.jsxs)(`div`,{className:`flex-1 min-w-0 whitespace-normal break-words text-neutral-200 text-xs`,children:[(0,J.jsxs)(`span`,{className:`font-mono text-amber-400 font-bold`,children:[`In `,U(q.distanceMeters),`:`]}),` `,(0,J.jsx)(`span`,{children:q.instruction})]})]}),Ze&&(0,J.jsxs)(`div`,{className:`p-2 bg-emerald-500 text-black font-black text-xs text-center tracking-wide uppercase rounded-b-2xl flex items-center justify-center gap-1.5`,children:[(0,J.jsx)(De,{className:`w-4 h-4 stroke-[3]`}),(0,J.jsx)(`span`,{children:`ARRIVED AT CUSTOMER ADDRESS`})]}),Te&&(0,J.jsxs)(`div`,{className:`px-4 py-2 bg-red-950/80 border-t border-red-900 text-xs text-red-300 flex items-center justify-between`,children:[(0,J.jsxs)(`span`,{children:[`Routing server: `,Te]}),(0,J.jsxs)(`button`,{onClick:()=>Be(),className:`underline text-red-200 flex items-center gap-1 font-bold`,children:[(0,J.jsx)(Xe,{className:`w-3.5 h-3.5`}),` Retry`]})]})]}),j&&(0,J.jsx)(`div`,{className:`fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-in fade-in duration-200`,children:(0,J.jsxs)(`div`,{className:`w-full max-w-md rounded-3xl border border-neutral-700 bg-neutral-900 text-white shadow-2xl p-6 max-h-[90vh] overflow-y-auto`,children:[(0,J.jsxs)(`div`,{className:`flex items-center justify-between mb-4`,children:[(0,J.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,J.jsx)(`img`,{src:`/icon-192.png`,alt:`Garbage Route`,className:`w-11 h-11 rounded-2xl border-2 border-emerald-400 shadow-md shrink-0 object-cover`}),(0,J.jsxs)(`div`,{children:[(0,J.jsx)(`h3`,{className:`font-black text-base`,children:`Garbage Route Navigation`}),(0,J.jsx)(`p`,{className:`text-xs text-neutral-400`,children:`Intelligent Rerouting & Legal Maneuvers`})]})]}),(0,J.jsx)(`button`,{onClick:()=>M(!1),className:`p-2 rounded-xl text-neutral-400 hover:text-white hover:bg-neutral-800`,children:(0,J.jsx)(ct,{className:`w-5 h-5`})})]}),(0,J.jsxs)(`div`,{className:`space-y-3.5 text-xs text-neutral-300`,children:[(0,J.jsxs)(`div`,{className:`p-3.5 rounded-2xl bg-neutral-950 border border-neutral-800 space-y-2`,children:[(0,J.jsxs)(`div`,{className:`font-bold text-amber-400 flex items-center gap-1.5`,children:[(0,J.jsx)(nt,{className:`w-4 h-4`}),(0,J.jsx)(`span`,{children:`Legal Maneuvers & Missed Destinations`})]}),(0,J.jsx)(`p`,{children:`Calculates genuine OpenStreetMap driving routes with exact road names, turn angles, and step distances.`}),(0,J.jsxs)(`ul`,{className:`list-disc pl-4 space-y-1 text-neutral-400`,children:[(0,J.jsxs)(`li`,{children:[(0,J.jsx)(`strong`,{children:`Turnaround Guidance:`}),` When turning around is the appropriate way to return to the customer, the app instructs "Turn around as soon as possible.".`]}),(0,J.jsxs)(`li`,{children:[(0,J.jsx)(`strong`,{children:`Around the Block:`}),` If a turnaround is restricted by road dividers or one-way rules, the app routes you around the block via legal side streets.`]}),(0,J.jsxs)(`li`,{children:[(0,J.jsx)(`strong`,{children:`Last Stop on Road:`}),` If the customer is the last stop on the road and you pass it, the app guides you to turn around while keeping the active customer until arrival or manual skip.`]}),(0,J.jsxs)(`li`,{children:[(0,J.jsx)(`strong`,{children:`No Accidental Advance:`}),` Passing an address without stopping does not mark the customer complete; it keeps the customer active and recalculates the return route.`]})]})]}),(0,J.jsxs)(`div`,{className:`p-3.5 rounded-2xl bg-neutral-950 border border-neutral-800 space-y-2`,children:[(0,J.jsx)(`div`,{className:`font-bold text-amber-300`,children:`How to Test on Android:`}),(0,J.jsxs)(`ol`,{className:`list-decimal pl-4 space-y-1.5 text-neutral-400`,children:[(0,J.jsxs)(`li`,{children:[`Tap `,(0,J.jsx)(`strong`,{children:`Test Drive`}),` in the navigation header.`]}),(0,J.jsxs)(`li`,{children:[`Select `,(0,J.jsx)(`strong`,{children:`Approach & Stop`}),` to verify confirmed arrival and automatic stop advancement.`]}),(0,J.jsxs)(`li`,{children:[`Select `,(0,J.jsx)(`strong`,{children:`Miss Stop & Reroute`}),` to simulate driving past without stopping. Watch the app keep the active customer and instantly recalculate a legal return route.`]}),(0,J.jsx)(`li`,{children:`While driving on the road, the app automatically tracks your real-time GPS position.`})]})]})]}),(0,J.jsx)(`button`,{onClick:()=>M(!1),className:`w-full mt-5 py-3 rounded-2xl bg-amber-500 hover:bg-amber-400 text-black font-extrabold text-sm transition-all`,children:`Close`})]})}),N&&(0,J.jsx)(`div`,{className:`fixed inset-0 z-50 flex items-center justify-center p-3 bg-black/80 backdrop-blur-sm`,children:(0,J.jsxs)(`div`,{className:`w-full max-w-lg bg-neutral-900 border border-neutral-700 rounded-2xl shadow-2xl flex flex-col max-h-[85vh] overflow-hidden text-neutral-200 text-xs`,children:[(0,J.jsxs)(`div`,{className:`flex items-center justify-between px-4 py-3 border-b border-neutral-800 bg-neutral-950`,children:[(0,J.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,J.jsx)(ye,{className:`w-4 h-4 text-sky-400`}),(0,J.jsx)(`h3`,{className:`font-bold text-sm text-white`,children:`Test Drive Navigation Diagnostics`})]}),(0,J.jsx)(`button`,{onClick:()=>F(!1),className:`p-1 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800`,children:(0,J.jsx)(ct,{className:`w-4 h-4`})})]}),(0,J.jsxs)(`div`,{className:`p-4 overflow-y-auto space-y-3 font-mono text-[11px]`,children:[(0,J.jsxs)(`div`,{className:`bg-neutral-950/80 p-3 rounded-xl border border-neutral-800 space-y-1.5`,children:[(0,J.jsxs)(`div`,{className:`flex justify-between border-b border-neutral-800/60 pb-1`,children:[(0,J.jsx)(`span`,{className:`text-neutral-400`,children:`Active Stop:`}),(0,J.jsxs)(`span`,{className:`font-bold text-amber-400`,children:[`#`,e.orderIndex||e.id,` - `,e.name]})]}),(0,J.jsxs)(`div`,{className:`flex justify-between border-b border-neutral-800/60 pb-1`,children:[(0,J.jsx)(`span`,{className:`text-neutral-400`,children:`Stop Target Coords:`}),(0,J.jsxs)(`span`,{className:`text-white`,children:[e.lat.toFixed(6),`, `,e.lon.toFixed(6)]})]}),(0,J.jsxs)(`div`,{className:`flex justify-between border-b border-neutral-800/60 pb-1`,children:[(0,J.jsx)(`span`,{className:`text-neutral-400`,children:`Simulated Vehicle Coords:`}),(0,J.jsx)(`span`,{className:`text-emerald-400`,children:r?`${r.lat.toFixed(6)}, ${r.lon.toFixed(6)}`:`N/A`})]}),(0,J.jsxs)(`div`,{className:`flex justify-between border-b border-neutral-800/60 pb-1`,children:[(0,J.jsx)(`span`,{className:`text-neutral-400`,children:`Speed / Heading:`}),(0,J.jsxs)(`span`,{className:`text-white`,children:[r?.speed??0,` mph | `,r?.heading!==null&&r?.heading!==void 0?`${Math.round(r.heading)}°`:`N/A`]})]}),(0,J.jsxs)(`div`,{className:`flex justify-between border-b border-neutral-800/60 pb-1`,children:[(0,J.jsx)(`span`,{className:`text-neutral-400`,children:`GPS Accuracy:`}),(0,J.jsx)(`span`,{className:`text-white`,children:r?.accuracy!==null&&r?.accuracy!==void 0?`${r.accuracy.toFixed(1)}m`:`N/A`})]}),(0,J.jsxs)(`div`,{className:`flex justify-between border-b border-neutral-800/60 pb-1`,children:[(0,J.jsx)(`span`,{className:`text-neutral-400`,children:`Direct Distance:`}),(0,J.jsx)(`span`,{className:`text-white`,children:i===null?`N/A`:`${i} ft`})]}),(0,J.jsxs)(`div`,{className:`flex justify-between border-b border-neutral-800/60 pb-1`,children:[(0,J.jsx)(`span`,{className:`text-neutral-400`,children:`Road Distance:`}),(0,J.jsx)(`span`,{className:`text-white`,children:K===null?`N/A`:`${Math.round(K*3.28084)} ft (${Math.round(K)}m)`})]}),(0,J.jsxs)(`div`,{className:`flex justify-between border-b border-neutral-800/60 pb-1`,children:[(0,J.jsx)(`span`,{className:`text-neutral-400`,children:`Current Maneuver:`}),(0,J.jsx)(`span`,{className:`text-amber-300 text-right max-w-[240px] truncate`,children:Ve?`${Ve.type} (${Ve.modifier||`none`}) [${U(he)}]`:`None / Arrive`})]}),(0,J.jsxs)(`div`,{className:`flex justify-between border-b border-neutral-800/60 pb-1`,children:[(0,J.jsx)(`span`,{className:`text-neutral-400`,children:`Turnaround Status:`}),(0,J.jsx)(`span`,{className:$e?`text-amber-400 font-bold`:`text-neutral-400`,children:$e?`ACTIVE (${et?`Immediate <=50m`:`Upcoming`})`:`No Turnaround (Forward)`})]}),(0,J.jsxs)(`div`,{className:`flex justify-between`,children:[(0,J.jsx)(`span`,{className:`text-neutral-400`,children:`Arrival State:`}),(0,J.jsx)(`span`,{className:`text-sky-300`,children:l||`Monitoring`})]})]}),(0,J.jsxs)(`div`,{className:`space-y-1`,children:[(0,J.jsxs)(`div`,{className:`text-xs font-semibold text-neutral-300 flex items-center justify-between`,children:[(0,J.jsxs)(`span`,{children:[`Recent Diagnostic Events (`,A.length,`)`]}),(0,J.jsx)(`span`,{className:`text-[10px] text-neutral-500`,children:`Auto-updating`})]}),(0,J.jsx)(`div`,{className:`h-44 overflow-y-auto bg-black p-2.5 rounded-xl border border-neutral-800 space-y-1 text-[10px] text-neutral-300 leading-relaxed font-mono`,children:A.length>0?A.map((e,t)=>(0,J.jsx)(`div`,{className:`border-b border-neutral-900 pb-0.5 last:border-0`,children:e},t)):(0,J.jsx)(`div`,{className:`text-neutral-600 italic`,children:`No events recorded yet. Simulator running along road route.`})})]})]}),(0,J.jsx)(`div`,{className:`px-4 py-2.5 bg-neutral-950 border-t border-neutral-800 flex justify-end`,children:(0,J.jsx)(`button`,{onClick:()=>F(!1),className:`px-3 py-1 bg-neutral-800 hover:bg-neutral-700 text-white rounded-lg text-xs font-bold transition-colors`,children:`Close`})})]})})]})},Y=c(o(((e,t,n)=>{(function(n,r){typeof e==`object`&&t!==void 0?r(e):typeof define==`function`&&define.amd?define([`exports`],r):(n=typeof globalThis<`u`?globalThis:n||self,r(n.leaflet={}))})(n,(function(e){var t=`1.9.4`;function n(e){for(var t,n=1,r=arguments.length,i;n<r;n++)for(t in i=arguments[n],i)e[t]=i[t];return e}var r=Object.create||(function(){function e(){}return function(t){return e.prototype=t,new e}})();function i(e,t){var n=Array.prototype.slice;if(e.bind)return e.bind.apply(e,n.call(arguments,1));var r=n.call(arguments,2);return function(){return e.apply(t,r.length?r.concat(n.call(arguments)):arguments)}}var a=0;function o(e){return`_leaflet_id`in e||(e._leaflet_id=++a),e._leaflet_id}function s(e,t,n){var r,i,a,o=function(){r=!1,i&&=(a.apply(n,i),!1)};return a=function(){r?i=arguments:(e.apply(n,arguments),setTimeout(o,t),r=!0)},a}function c(e,t,n){var r=t[1],i=t[0],a=r-i;return e===r&&n?e:((e-i)%a+a)%a+i}function l(){return!1}function u(e,t){if(t===!1)return e;var n=10**(t===void 0?6:t);return Math.round(e*n)/n}function d(e){return e.trim?e.trim():e.replace(/^\s+|\s+$/g,``)}function f(e){return d(e).split(/\s+/)}function p(e,t){for(var n in Object.prototype.hasOwnProperty.call(e,`options`)||(e.options=e.options?r(e.options):{}),t)e.options[n]=t[n];return e.options}function m(e,t,n){var r=[];for(var i in e)r.push(encodeURIComponent(n?i.toUpperCase():i)+`=`+encodeURIComponent(e[i]));return(!t||t.indexOf(`?`)===-1?`?`:`&`)+r.join(`&`)}var h=/\{ *([\w_ -]+) *\}/g;function g(e,t){return e.replace(h,function(e,n){var r=t[n];if(r===void 0)throw Error(`No value provided for variable `+e);return typeof r==`function`&&(r=r(t)),r})}var _=Array.isArray||function(e){return Object.prototype.toString.call(e)===`[object Array]`};function v(e,t){for(var n=0;n<e.length;n++)if(e[n]===t)return n;return-1}var y=`data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=`;function b(e){return window[`webkit`+e]||window[`moz`+e]||window[`ms`+e]}var x=0;function S(e){var t=+new Date,n=Math.max(0,16-(t-x));return x=t+n,window.setTimeout(e,n)}var C=window.requestAnimationFrame||b(`RequestAnimationFrame`)||S,w=window.cancelAnimationFrame||b(`CancelAnimationFrame`)||b(`CancelRequestAnimationFrame`)||function(e){window.clearTimeout(e)};function T(e,t,n){if(n&&C===S)e.call(t);else return C.call(window,i(e,t))}function E(e){e&&w.call(window,e)}var D={__proto__:null,extend:n,create:r,bind:i,get lastId(){return a},stamp:o,throttle:s,wrapNum:c,falseFn:l,formatNum:u,trim:d,splitWords:f,setOptions:p,getParamString:m,template:g,isArray:_,indexOf:v,emptyImageUrl:y,requestFn:C,cancelFn:w,requestAnimFrame:T,cancelAnimFrame:E};function O(){}O.extend=function(e){var t=function(){p(this),this.initialize&&this.initialize.apply(this,arguments),this.callInitHooks()},i=t.__super__=this.prototype,a=r(i);for(var o in a.constructor=t,t.prototype=a,this)Object.prototype.hasOwnProperty.call(this,o)&&o!==`prototype`&&o!==`__super__`&&(t[o]=this[o]);return e.statics&&n(t,e.statics),e.includes&&(k(e.includes),n.apply(null,[a].concat(e.includes))),n(a,e),delete a.statics,delete a.includes,a.options&&(a.options=i.options?r(i.options):{},n(a.options,e.options)),a._initHooks=[],a.callInitHooks=function(){if(!this._initHooksCalled){i.callInitHooks&&i.callInitHooks.call(this),this._initHooksCalled=!0;for(var e=0,t=a._initHooks.length;e<t;e++)a._initHooks[e].call(this)}},t},O.include=function(e){var t=this.prototype.options;return n(this.prototype,e),e.options&&(this.prototype.options=t,this.mergeOptions(e.options)),this},O.mergeOptions=function(e){return n(this.prototype.options,e),this},O.addInitHook=function(e){var t=Array.prototype.slice.call(arguments,1),n=typeof e==`function`?e:function(){this[e].apply(this,t)};return this.prototype._initHooks=this.prototype._initHooks||[],this.prototype._initHooks.push(n),this};function k(e){if(typeof L<`u`&&L&&L.Mixin){e=_(e)?e:[e];for(var t=0;t<e.length;t++)e[t]===L.Mixin.Events&&console.warn(`Deprecated include of L.Mixin.Events: this property will be removed in future releases, please inherit from L.Evented instead.`,Error().stack)}}var A={on:function(e,t,n){if(typeof e==`object`)for(var r in e)this._on(r,e[r],t);else{e=f(e);for(var i=0,a=e.length;i<a;i++)this._on(e[i],t,n)}return this},off:function(e,t,n){if(!arguments.length)delete this._events;else if(typeof e==`object`)for(var r in e)this._off(r,e[r],t);else{e=f(e);for(var i=arguments.length===1,a=0,o=e.length;a<o;a++)i?this._off(e[a]):this._off(e[a],t,n)}return this},_on:function(e,t,n,r){if(typeof t!=`function`)console.warn(`wrong listener type: `+typeof t);else if(this._listens(e,t,n)===!1){n===this&&(n=void 0);var i={fn:t,ctx:n};r&&(i.once=!0),this._events=this._events||{},this._events[e]=this._events[e]||[],this._events[e].push(i)}},_off:function(e,t,n){var r,i,a;if(this._events&&(r=this._events[e],r)){if(arguments.length===1){if(this._firingCount)for(i=0,a=r.length;i<a;i++)r[i].fn=l;delete this._events[e]}else if(typeof t!=`function`)console.warn(`wrong listener type: `+typeof t);else{var o=this._listens(e,t,n);if(o!==!1){var s=r[o];this._firingCount&&(s.fn=l,this._events[e]=r=r.slice()),r.splice(o,1)}}}},fire:function(e,t,r){if(!this.listens(e,r))return this;var i=n({},t,{type:e,target:this,sourceTarget:t&&t.sourceTarget||this});if(this._events){var a=this._events[e];if(a){this._firingCount=this._firingCount+1||1;for(var o=0,s=a.length;o<s;o++){var c=a[o],l=c.fn;c.once&&this.off(e,l,c.ctx),l.call(c.ctx||this,i)}this._firingCount--}}return r&&this._propagateEvent(i),this},listens:function(e,t,n,r){typeof e!=`string`&&console.warn(`"string" type argument expected`);var i=t;typeof t!=`function`&&(r=!!t,i=void 0,n=void 0);var a=this._events&&this._events[e];if(a&&a.length&&this._listens(e,i,n)!==!1)return!0;if(r){for(var o in this._eventParents)if(this._eventParents[o].listens(e,t,n,r))return!0}return!1},_listens:function(e,t,n){if(!this._events)return!1;var r=this._events[e]||[];if(!t)return!!r.length;n===this&&(n=void 0);for(var i=0,a=r.length;i<a;i++)if(r[i].fn===t&&r[i].ctx===n)return i;return!1},once:function(e,t,n){if(typeof e==`object`)for(var r in e)this._on(r,e[r],t,!0);else{e=f(e);for(var i=0,a=e.length;i<a;i++)this._on(e[i],t,n,!0)}return this},addEventParent:function(e){return this._eventParents=this._eventParents||{},this._eventParents[o(e)]=e,this},removeEventParent:function(e){return this._eventParents&&delete this._eventParents[o(e)],this},_propagateEvent:function(e){for(var t in this._eventParents)this._eventParents[t].fire(e.type,n({layer:e.target,propagatedFrom:e.target},e),!0)}};A.addEventListener=A.on,A.removeEventListener=A.clearAllEventListeners=A.off,A.addOneTimeEventListener=A.once,A.fireEvent=A.fire,A.hasEventListeners=A.listens;var j=O.extend(A);function M(e,t,n){this.x=n?Math.round(e):e,this.y=n?Math.round(t):t}var N=Math.trunc||function(e){return e>0?Math.floor(e):Math.ceil(e)};M.prototype={clone:function(){return new M(this.x,this.y)},add:function(e){return this.clone()._add(P(e))},_add:function(e){return this.x+=e.x,this.y+=e.y,this},subtract:function(e){return this.clone()._subtract(P(e))},_subtract:function(e){return this.x-=e.x,this.y-=e.y,this},divideBy:function(e){return this.clone()._divideBy(e)},_divideBy:function(e){return this.x/=e,this.y/=e,this},multiplyBy:function(e){return this.clone()._multiplyBy(e)},_multiplyBy:function(e){return this.x*=e,this.y*=e,this},scaleBy:function(e){return new M(this.x*e.x,this.y*e.y)},unscaleBy:function(e){return new M(this.x/e.x,this.y/e.y)},round:function(){return this.clone()._round()},_round:function(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this},floor:function(){return this.clone()._floor()},_floor:function(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this},ceil:function(){return this.clone()._ceil()},_ceil:function(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this},trunc:function(){return this.clone()._trunc()},_trunc:function(){return this.x=N(this.x),this.y=N(this.y),this},distanceTo:function(e){e=P(e);var t=e.x-this.x,n=e.y-this.y;return Math.sqrt(t*t+n*n)},equals:function(e){return e=P(e),e.x===this.x&&e.y===this.y},contains:function(e){return e=P(e),Math.abs(e.x)<=Math.abs(this.x)&&Math.abs(e.y)<=Math.abs(this.y)},toString:function(){return`Point(`+u(this.x)+`, `+u(this.y)+`)`}};function P(e,t,n){return e instanceof M?e:_(e)?new M(e[0],e[1]):e==null?e:typeof e==`object`&&`x`in e&&`y`in e?new M(e.x,e.y):new M(e,t,n)}function F(e,t){if(e)for(var n=t?[e,t]:e,r=0,i=n.length;r<i;r++)this.extend(n[r])}F.prototype={extend:function(e){var t,n;if(!e)return this;if(e instanceof M||typeof e[0]==`number`||`x`in e)t=n=P(e);else if(e=I(e),t=e.min,n=e.max,!t||!n)return this;return!this.min&&!this.max?(this.min=t.clone(),this.max=n.clone()):(this.min.x=Math.min(t.x,this.min.x),this.max.x=Math.max(n.x,this.max.x),this.min.y=Math.min(t.y,this.min.y),this.max.y=Math.max(n.y,this.max.y)),this},getCenter:function(e){return P((this.min.x+this.max.x)/2,(this.min.y+this.max.y)/2,e)},getBottomLeft:function(){return P(this.min.x,this.max.y)},getTopRight:function(){return P(this.max.x,this.min.y)},getTopLeft:function(){return this.min},getBottomRight:function(){return this.max},getSize:function(){return this.max.subtract(this.min)},contains:function(e){var t,n;return e=typeof e[0]==`number`||e instanceof M?P(e):I(e),e instanceof F?(t=e.min,n=e.max):t=n=e,t.x>=this.min.x&&n.x<=this.max.x&&t.y>=this.min.y&&n.y<=this.max.y},intersects:function(e){e=I(e);var t=this.min,n=this.max,r=e.min,i=e.max,a=i.x>=t.x&&r.x<=n.x,o=i.y>=t.y&&r.y<=n.y;return a&&o},overlaps:function(e){e=I(e);var t=this.min,n=this.max,r=e.min,i=e.max,a=i.x>t.x&&r.x<n.x,o=i.y>t.y&&r.y<n.y;return a&&o},isValid:function(){return!!(this.min&&this.max)},pad:function(e){var t=this.min,n=this.max,r=Math.abs(t.x-n.x)*e,i=Math.abs(t.y-n.y)*e;return I(P(t.x-r,t.y-i),P(n.x+r,n.y+i))},equals:function(e){return e?(e=I(e),this.min.equals(e.getTopLeft())&&this.max.equals(e.getBottomRight())):!1}};function I(e,t){return!e||e instanceof F?e:new F(e,t)}function R(e,t){if(e)for(var n=t?[e,t]:e,r=0,i=n.length;r<i;r++)this.extend(n[r])}R.prototype={extend:function(e){var t=this._southWest,n=this._northEast,r,i;if(e instanceof B)r=e,i=e;else if(e instanceof R){if(r=e._southWest,i=e._northEast,!r||!i)return this}else return e?this.extend(V(e)||z(e)):this;return!t&&!n?(this._southWest=new B(r.lat,r.lng),this._northEast=new B(i.lat,i.lng)):(t.lat=Math.min(r.lat,t.lat),t.lng=Math.min(r.lng,t.lng),n.lat=Math.max(i.lat,n.lat),n.lng=Math.max(i.lng,n.lng)),this},pad:function(e){var t=this._southWest,n=this._northEast,r=Math.abs(t.lat-n.lat)*e,i=Math.abs(t.lng-n.lng)*e;return new R(new B(t.lat-r,t.lng-i),new B(n.lat+r,n.lng+i))},getCenter:function(){return new B((this._southWest.lat+this._northEast.lat)/2,(this._southWest.lng+this._northEast.lng)/2)},getSouthWest:function(){return this._southWest},getNorthEast:function(){return this._northEast},getNorthWest:function(){return new B(this.getNorth(),this.getWest())},getSouthEast:function(){return new B(this.getSouth(),this.getEast())},getWest:function(){return this._southWest.lng},getSouth:function(){return this._southWest.lat},getEast:function(){return this._northEast.lng},getNorth:function(){return this._northEast.lat},contains:function(e){e=typeof e[0]==`number`||e instanceof B||`lat`in e?V(e):z(e);var t=this._southWest,n=this._northEast,r,i;return e instanceof R?(r=e.getSouthWest(),i=e.getNorthEast()):r=i=e,r.lat>=t.lat&&i.lat<=n.lat&&r.lng>=t.lng&&i.lng<=n.lng},intersects:function(e){e=z(e);var t=this._southWest,n=this._northEast,r=e.getSouthWest(),i=e.getNorthEast(),a=i.lat>=t.lat&&r.lat<=n.lat,o=i.lng>=t.lng&&r.lng<=n.lng;return a&&o},overlaps:function(e){e=z(e);var t=this._southWest,n=this._northEast,r=e.getSouthWest(),i=e.getNorthEast(),a=i.lat>t.lat&&r.lat<n.lat,o=i.lng>t.lng&&r.lng<n.lng;return a&&o},toBBoxString:function(){return[this.getWest(),this.getSouth(),this.getEast(),this.getNorth()].join(`,`)},equals:function(e,t){return e?(e=z(e),this._southWest.equals(e.getSouthWest(),t)&&this._northEast.equals(e.getNorthEast(),t)):!1},isValid:function(){return!!(this._southWest&&this._northEast)}};function z(e,t){return e instanceof R?e:new R(e,t)}function B(e,t,n){if(isNaN(e)||isNaN(t))throw Error(`Invalid LatLng object: (`+e+`, `+t+`)`);this.lat=+e,this.lng=+t,n!==void 0&&(this.alt=+n)}B.prototype={equals:function(e,t){return e?(e=V(e),Math.max(Math.abs(this.lat-e.lat),Math.abs(this.lng-e.lng))<=(t===void 0?1e-9:t)):!1},toString:function(e){return`LatLng(`+u(this.lat,e)+`, `+u(this.lng,e)+`)`},distanceTo:function(e){return H.distance(this,V(e))},wrap:function(){return H.wrapLatLng(this)},toBounds:function(e){var t=180*e/40075017,n=t/Math.cos(Math.PI/180*this.lat);return z([this.lat-t,this.lng-n],[this.lat+t,this.lng+n])},clone:function(){return new B(this.lat,this.lng,this.alt)}};function V(e,t,n){return e instanceof B?e:_(e)&&typeof e[0]!=`object`?e.length===3?new B(e[0],e[1],e[2]):e.length===2?new B(e[0],e[1]):null:e==null?e:typeof e==`object`&&`lat`in e?new B(e.lat,`lng`in e?e.lng:e.lon,e.alt):t===void 0?null:new B(e,t,n)}var ee={latLngToPoint:function(e,t){var n=this.projection.project(e),r=this.scale(t);return this.transformation._transform(n,r)},pointToLatLng:function(e,t){var n=this.scale(t),r=this.transformation.untransform(e,n);return this.projection.unproject(r)},project:function(e){return this.projection.project(e)},unproject:function(e){return this.projection.unproject(e)},scale:function(e){return 256*2**e},zoom:function(e){return Math.log(e/256)/Math.LN2},getProjectedBounds:function(e){if(this.infinite)return null;var t=this.projection.bounds,n=this.scale(e);return new F(this.transformation.transform(t.min,n),this.transformation.transform(t.max,n))},infinite:!1,wrapLatLng:function(e){var t=this.wrapLng?c(e.lng,this.wrapLng,!0):e.lng,n=this.wrapLat?c(e.lat,this.wrapLat,!0):e.lat,r=e.alt;return new B(n,t,r)},wrapLatLngBounds:function(e){var t=e.getCenter(),n=this.wrapLatLng(t),r=t.lat-n.lat,i=t.lng-n.lng;if(r===0&&i===0)return e;var a=e.getSouthWest(),o=e.getNorthEast();return new R(new B(a.lat-r,a.lng-i),new B(o.lat-r,o.lng-i))}},H=n({},ee,{wrapLng:[-180,180],R:6371e3,distance:function(e,t){var n=Math.PI/180,r=e.lat*n,i=t.lat*n,a=Math.sin((t.lat-e.lat)*n/2),o=Math.sin((t.lng-e.lng)*n/2),s=a*a+Math.cos(r)*Math.cos(i)*o*o,c=2*Math.atan2(Math.sqrt(s),Math.sqrt(1-s));return this.R*c}}),te=6378137,ne={R:te,MAX_LATITUDE:85.0511287798,project:function(e){var t=Math.PI/180,n=this.MAX_LATITUDE,r=Math.max(Math.min(n,e.lat),-n),i=Math.sin(r*t);return new M(this.R*e.lng*t,this.R*Math.log((1+i)/(1-i))/2)},unproject:function(e){var t=180/Math.PI;return new B((2*Math.atan(Math.exp(e.y/this.R))-Math.PI/2)*t,e.x*t/this.R)},bounds:(function(){var e=te*Math.PI;return new F([-e,-e],[e,e])})()};function re(e,t,n,r){_(e)?(this._a=e[0],this._b=e[1],this._c=e[2],this._d=e[3]):(this._a=e,this._b=t,this._c=n,this._d=r)}re.prototype={transform:function(e,t){return this._transform(e.clone(),t)},_transform:function(e,t){return t||=1,e.x=t*(this._a*e.x+this._b),e.y=t*(this._c*e.y+this._d),e},untransform:function(e,t){return t||=1,new M((e.x/t-this._b)/this._a,(e.y/t-this._d)/this._c)}};function ie(e,t,n,r){return new re(e,t,n,r)}var ae=n({},H,{code:`EPSG:3857`,projection:ne,transformation:function(){var e=.5/(Math.PI*ne.R);return ie(e,.5,-e,.5)}()}),oe=n({},ae,{code:`EPSG:900913`});function se(e){return document.createElementNS(`http://www.w3.org/2000/svg`,e)}function ce(e,t){for(var n=``,r=0,i,a=e.length,o,s,c;r<a;r++){for(s=e[r],i=0,o=s.length;i<o;i++)c=s[i],n+=(i?`L`:`M`)+c.x+` `+c.y;n+=t?q.svg?`z`:`x`:``}return n||`M0 0`}var U=document.documentElement.style,W=`ActiveXObject`in window,le=W&&!document.addEventListener,ue=`msLaunchUri`in navigator&&!(`documentMode`in document),de=He(`webkit`),fe=He(`android`),pe=He(`android 2`)||He(`android 3`),G=parseInt(/WebKit\/([0-9]+)|$/.exec(navigator.userAgent)[1],10),me=fe&&He(`Google`)&&G<537&&!(`AudioNode`in window),he=!!window.opera,ge=!ue&&He(`chrome`),_e=He(`gecko`)&&!de&&!he&&!W,ve=!ge&&He(`safari`),K=He(`phantom`),ye=`OTransition`in U,be=navigator.platform.indexOf(`Win`)===0,xe=W&&`transition`in U,Se=`WebKitCSSMatrix`in window&&`m11`in new window.WebKitCSSMatrix&&!pe,Ce=`MozPerspective`in U,we=!window.L_DISABLE_3D&&(xe||Se||Ce)&&!ye&&!K,Te=typeof orientation<`u`||He(`mobile`),Ee=Te&&de,De=Te&&Se,Oe=!window.PointerEvent&&window.MSPointerEvent,ke=!!(window.PointerEvent||Oe),Ae=`ontouchstart`in window||!!window.TouchEvent,je=!window.L_NO_TOUCH&&(Ae||ke),Me=Te&&he,Ne=Te&&_e,Pe=(window.devicePixelRatio||window.screen.deviceXDPI/window.screen.logicalXDPI)>1,Fe=function(){var e=!1;try{var t=Object.defineProperty({},"passive",{get:function(){e=!0}});window.addEventListener(`testPassiveEventSupport`,l,t),window.removeEventListener(`testPassiveEventSupport`,l,t)}catch{}return e}(),Ie=function(){return!!document.createElement(`canvas`).getContext}(),Le=!!(document.createElementNS&&se(`svg`).createSVGRect),Re=!!Le&&(function(){var e=document.createElement(`div`);return e.innerHTML=`<svg/>`,(e.firstChild&&e.firstChild.namespaceURI)===`http://www.w3.org/2000/svg`})(),ze=!Le&&function(){try{var e=document.createElement(`div`);e.innerHTML=`<v:shape adj="1"/>`;var t=e.firstChild;return t.style.behavior=`url(#default#VML)`,t&&typeof t.adj==`object`}catch{return!1}}(),Be=navigator.platform.indexOf(`Mac`)===0,Ve=navigator.platform.indexOf(`Linux`)===0;function He(e){return navigator.userAgent.toLowerCase().indexOf(e)>=0}var q={ie:W,ielt9:le,edge:ue,webkit:de,android:fe,android23:pe,androidStock:me,opera:he,chrome:ge,gecko:_e,safari:ve,phantom:K,opera12:ye,win:be,ie3d:xe,webkit3d:Se,gecko3d:Ce,any3d:we,mobile:Te,mobileWebkit:Ee,mobileWebkit3d:De,msPointer:Oe,pointer:ke,touch:je,touchNative:Ae,mobileOpera:Me,mobileGecko:Ne,retina:Pe,passiveEvents:Fe,canvas:Ie,svg:Le,vml:ze,inlineSvg:Re,mac:Be,linux:Ve},Ue=q.msPointer?`MSPointerDown`:`pointerdown`,We=q.msPointer?`MSPointerMove`:`pointermove`,Ge=q.msPointer?`MSPointerUp`:`pointerup`,Ke=q.msPointer?`MSPointerCancel`:`pointercancel`,qe={touchstart:Ue,touchmove:We,touchend:Ge,touchcancel:Ke},Je={touchstart:it,touchmove:rt,touchend:rt,touchcancel:rt},Ye={},Xe=!1;function Ze(e,t,n){return t===`touchstart`&&nt(),Je[t]?(n=Je[t].bind(this,n),e.addEventListener(qe[t],n,!1),n):(console.warn(`wrong event specified:`,t),l)}function Qe(e,t,n){qe[t]?e.removeEventListener(qe[t],n,!1):console.warn(`wrong event specified:`,t)}function $e(e){Ye[e.pointerId]=e}function et(e){Ye[e.pointerId]&&(Ye[e.pointerId]=e)}function tt(e){delete Ye[e.pointerId]}function nt(){Xe||=(document.addEventListener(Ue,$e,!0),document.addEventListener(We,et,!0),document.addEventListener(Ge,tt,!0),document.addEventListener(Ke,tt,!0),!0)}function rt(e,t){if(t.pointerType!==(t.MSPOINTER_TYPE_MOUSE||`mouse`)){for(var n in t.touches=[],Ye)t.touches.push(Ye[n]);t.changedTouches=[t],e(t)}}function it(e,t){t.MSPOINTER_TYPE_TOUCH&&t.pointerType===t.MSPOINTER_TYPE_TOUCH&&Jt(t),rt(e,t)}function at(e){var t={},n,r;for(r in e)n=e[r],t[r]=n&&n.bind?n.bind(e):n;return e=t,t.type=`dblclick`,t.detail=2,t.isTrusted=!1,t._simulated=!0,t}var ot=200;function st(e,t){e.addEventListener(`dblclick`,t);var n=0,r;function i(e){if(e.detail!==1)r=e.detail;else if(!(e.pointerType===`mouse`||e.sourceCapabilities&&!e.sourceCapabilities.firesTouchEvents)){var i=Xt(e);if(!i.some(function(e){return e instanceof HTMLLabelElement&&e.attributes.for})||i.some(function(e){return e instanceof HTMLInputElement||e instanceof HTMLSelectElement})){var a=Date.now();a-n<=ot?(r++,r===2&&t(at(e))):r=1,n=a}}}return e.addEventListener(`click`,i),{dblclick:t,simDblclick:i}}function ct(e,t){e.removeEventListener(`dblclick`,t.dblclick),e.removeEventListener(`click`,t.simDblclick)}var lt=St([`transform`,`webkitTransform`,`OTransform`,`MozTransform`,`msTransform`]),J=St([`webkitTransition`,`transition`,`OTransition`,`MozTransition`,`msTransition`]),ut=J===`webkitTransition`||J===`OTransition`?J+`End`:`transitionend`;function dt(e){return typeof e==`string`?document.getElementById(e):e}function ft(e,t){var n=e.style[t]||e.currentStyle&&e.currentStyle[t];if((!n||n===`auto`)&&document.defaultView){var r=document.defaultView.getComputedStyle(e,null);n=r?r[t]:null}return n===`auto`?null:n}function Y(e,t,n){var r=document.createElement(e);return r.className=t||``,n&&n.appendChild(r),r}function X(e){var t=e.parentNode;t&&t.removeChild(e)}function pt(e){for(;e.firstChild;)e.removeChild(e.firstChild)}function mt(e){var t=e.parentNode;t&&t.lastChild!==e&&t.appendChild(e)}function ht(e){var t=e.parentNode;t&&t.firstChild!==e&&t.insertBefore(e,t.firstChild)}function gt(e,t){if(e.classList!==void 0)return e.classList.contains(t);var n=yt(e);return n.length>0&&RegExp(`(^|\\s)`+t+`(\\s|$)`).test(n)}function Z(e,t){if(e.classList!==void 0)for(var n=f(t),r=0,i=n.length;r<i;r++)e.classList.add(n[r]);else if(!gt(e,t)){var a=yt(e);vt(e,(a?a+` `:``)+t)}}function _t(e,t){e.classList===void 0?vt(e,d((` `+yt(e)+` `).replace(` `+t+` `,` `))):e.classList.remove(t)}function vt(e,t){e.className.baseVal===void 0?e.className=t:e.className.baseVal=t}function yt(e){return e.correspondingElement&&(e=e.correspondingElement),e.className.baseVal===void 0?e.className:e.className.baseVal}function bt(e,t){`opacity`in e.style?e.style.opacity=t:`filter`in e.style&&xt(e,t)}function xt(e,t){var n=!1,r=`DXImageTransform.Microsoft.Alpha`;try{n=e.filters.item(r)}catch{if(t===1)return}t=Math.round(t*100),n?(n.Enabled=t!==100,n.Opacity=t):e.style.filter+=` progid:`+r+`(opacity=`+t+`)`}function St(e){for(var t=document.documentElement.style,n=0;n<e.length;n++)if(e[n]in t)return e[n];return!1}function Ct(e,t,n){var r=t||new M(0,0);e.style[lt]=(q.ie3d?`translate(`+r.x+`px,`+r.y+`px)`:`translate3d(`+r.x+`px,`+r.y+`px,0)`)+(n?` scale(`+n+`)`:``)}function wt(e,t){e._leaflet_pos=t,q.any3d?Ct(e,t):(e.style.left=t.x+`px`,e.style.top=t.y+`px`)}function Tt(e){return e._leaflet_pos||new M(0,0)}var Et,Dt,Ot;if(`onselectstart`in document)Et=function(){Q(window,`selectstart`,Jt)},Dt=function(){Bt(window,`selectstart`,Jt)};else{var kt=St([`userSelect`,`WebkitUserSelect`,`OUserSelect`,`MozUserSelect`,`msUserSelect`]);Et=function(){if(kt){var e=document.documentElement.style;Ot=e[kt],e[kt]=`none`}},Dt=function(){kt&&(document.documentElement.style[kt]=Ot,Ot=void 0)}}function At(){Q(window,`dragstart`,Jt)}function jt(){Bt(window,`dragstart`,Jt)}var Mt,Nt;function Pt(e){for(;e.tabIndex===-1;)e=e.parentNode;e.style&&(Ft(),Mt=e,Nt=e.style.outlineStyle,e.style.outlineStyle=`none`,Q(window,`keydown`,Ft))}function Ft(){Mt&&(Mt.style.outlineStyle=Nt,Mt=void 0,Nt=void 0,Bt(window,`keydown`,Ft))}function It(e){do e=e.parentNode;while((!e.offsetWidth||!e.offsetHeight)&&e!==document.body);return e}function Lt(e){var t=e.getBoundingClientRect();return{x:t.width/e.offsetWidth||1,y:t.height/e.offsetHeight||1,boundingClientRect:t}}var Rt={__proto__:null,TRANSFORM:lt,TRANSITION:J,TRANSITION_END:ut,get:dt,getStyle:ft,create:Y,remove:X,empty:pt,toFront:mt,toBack:ht,hasClass:gt,addClass:Z,removeClass:_t,setClass:vt,getClass:yt,setOpacity:bt,testProp:St,setTransform:Ct,setPosition:wt,getPosition:Tt,get disableTextSelection(){return Et},get enableTextSelection(){return Dt},disableImageDrag:At,enableImageDrag:jt,preventOutline:Pt,restoreOutline:Ft,getSizedParentNode:It,getScale:Lt};function Q(e,t,n,r){if(t&&typeof t==`object`)for(var i in t)Ut(e,i,t[i],n);else{t=f(t);for(var a=0,o=t.length;a<o;a++)Ut(e,t[a],n,r)}return this}var zt=`_leaflet_events`;function Bt(e,t,n,r){if(arguments.length===1)Vt(e),delete e[zt];else if(t&&typeof t==`object`)for(var i in t)Wt(e,i,t[i],n);else if(t=f(t),arguments.length===2)Vt(e,function(e){return v(t,e)!==-1});else for(var a=0,o=t.length;a<o;a++)Wt(e,t[a],n,r);return this}function Vt(e,t){for(var n in e[zt]){var r=n.split(/\d/)[0];(!t||t(r))&&Wt(e,r,null,null,n)}}var Ht={mouseenter:`mouseover`,mouseleave:`mouseout`,wheel:!(`onwheel`in window)&&`mousewheel`};function Ut(e,t,n,r){var i=t+o(n)+(r?`_`+o(r):``);if(e[zt]&&e[zt][i])return this;var a=function(t){return n.call(r||e,t||window.event)},s=a;!q.touchNative&&q.pointer&&t.indexOf(`touch`)===0?a=Ze(e,t,a):q.touch&&t===`dblclick`?a=st(e,a):`addEventListener`in e?t===`touchstart`||t===`touchmove`||t===`wheel`||t===`mousewheel`?e.addEventListener(Ht[t]||t,a,q.passiveEvents?{passive:!1}:!1):t===`mouseenter`||t===`mouseleave`?(a=function(t){t||=window.event,en(e,t)&&s(t)},e.addEventListener(Ht[t],a,!1)):e.addEventListener(t,s,!1):e.attachEvent(`on`+t,a),e[zt]=e[zt]||{},e[zt][i]=a}function Wt(e,t,n,r,i){i||=t+o(n)+(r?`_`+o(r):``);var a=e[zt]&&e[zt][i];if(!a)return this;!q.touchNative&&q.pointer&&t.indexOf(`touch`)===0?Qe(e,t,a):q.touch&&t===`dblclick`?ct(e,a):`removeEventListener`in e?e.removeEventListener(Ht[t]||t,a,!1):e.detachEvent(`on`+t,a),e[zt][i]=null}function Gt(e){return e.stopPropagation?e.stopPropagation():e.originalEvent?e.originalEvent._stopped=!0:e.cancelBubble=!0,this}function Kt(e){return Ut(e,`wheel`,Gt),this}function qt(e){return Q(e,`mousedown touchstart dblclick contextmenu`,Gt),e._leaflet_disable_click=!0,this}function Jt(e){return e.preventDefault?e.preventDefault():e.returnValue=!1,this}function Yt(e){return Jt(e),Gt(e),this}function Xt(e){if(e.composedPath)return e.composedPath();for(var t=[],n=e.target;n;)t.push(n),n=n.parentNode;return t}function Zt(e,t){if(!t)return new M(e.clientX,e.clientY);var n=Lt(t),r=n.boundingClientRect;return new M((e.clientX-r.left)/n.x-t.clientLeft,(e.clientY-r.top)/n.y-t.clientTop)}var Qt=q.linux&&q.chrome?window.devicePixelRatio:q.mac?window.devicePixelRatio*3:window.devicePixelRatio>0?2*window.devicePixelRatio:1;function $t(e){return q.edge?e.wheelDeltaY/2:e.deltaY&&e.deltaMode===0?-e.deltaY/Qt:e.deltaY&&e.deltaMode===1?-e.deltaY*20:e.deltaY&&e.deltaMode===2?-e.deltaY*60:e.deltaX||e.deltaZ?0:e.wheelDelta?(e.wheelDeltaY||e.wheelDelta)/2:e.detail&&Math.abs(e.detail)<32765?-e.detail*20:e.detail?e.detail/-32765*60:0}function en(e,t){var n=t.relatedTarget;if(!n)return!0;try{for(;n&&n!==e;)n=n.parentNode}catch{return!1}return n!==e}var tn={__proto__:null,on:Q,off:Bt,stopPropagation:Gt,disableScrollPropagation:Kt,disableClickPropagation:qt,preventDefault:Jt,stop:Yt,getPropagationPath:Xt,getMousePosition:Zt,getWheelDelta:$t,isExternalTarget:en,addListener:Q,removeListener:Bt},nn=j.extend({run:function(e,t,n,r){this.stop(),this._el=e,this._inProgress=!0,this._duration=n||.25,this._easeOutPower=1/Math.max(r||.5,.2),this._startPos=Tt(e),this._offset=t.subtract(this._startPos),this._startTime=+new Date,this.fire(`start`),this._animate()},stop:function(){this._inProgress&&(this._step(!0),this._complete())},_animate:function(){this._animId=T(this._animate,this),this._step()},_step:function(e){var t=+new Date-this._startTime,n=this._duration*1e3;t<n?this._runFrame(this._easeOut(t/n),e):(this._runFrame(1),this._complete())},_runFrame:function(e,t){var n=this._startPos.add(this._offset.multiplyBy(e));t&&n._round(),wt(this._el,n),this.fire(`step`)},_complete:function(){E(this._animId),this._inProgress=!1,this.fire(`end`)},_easeOut:function(e){return 1-(1-e)**this._easeOutPower}}),rn=j.extend({options:{crs:ae,center:void 0,zoom:void 0,minZoom:void 0,maxZoom:void 0,layers:[],maxBounds:void 0,renderer:void 0,zoomAnimation:!0,zoomAnimationThreshold:4,fadeAnimation:!0,markerZoomAnimation:!0,transform3DLimit:8388608,zoomSnap:1,zoomDelta:1,trackResize:!0},initialize:function(e,t){t=p(this,t),this._handlers=[],this._layers={},this._zoomBoundLayers={},this._sizeChanged=!0,this._initContainer(e),this._initLayout(),this._onResize=i(this._onResize,this),this._initEvents(),t.maxBounds&&this.setMaxBounds(t.maxBounds),t.zoom!==void 0&&(this._zoom=this._limitZoom(t.zoom)),t.center&&t.zoom!==void 0&&this.setView(V(t.center),t.zoom,{reset:!0}),this.callInitHooks(),this._zoomAnimated=J&&q.any3d&&!q.mobileOpera&&this.options.zoomAnimation,this._zoomAnimated&&(this._createAnimProxy(),Q(this._proxy,ut,this._catchTransitionEnd,this)),this._addLayers(this.options.layers)},setView:function(e,t,r){return t=t===void 0?this._zoom:this._limitZoom(t),e=this._limitCenter(V(e),t,this.options.maxBounds),r||={},this._stop(),this._loaded&&!r.reset&&r!==!0&&(r.animate!==void 0&&(r.zoom=n({animate:r.animate},r.zoom),r.pan=n({animate:r.animate,duration:r.duration},r.pan)),this._zoom===t?this._tryAnimatedPan(e,r.pan):this._tryAnimatedZoom&&this._tryAnimatedZoom(e,t,r.zoom))?(clearTimeout(this._sizeTimer),this):(this._resetView(e,t,r.pan&&r.pan.noMoveStart),this)},setZoom:function(e,t){return this._loaded?this.setView(this.getCenter(),e,{zoom:t}):(this._zoom=e,this)},zoomIn:function(e,t){return e||=q.any3d?this.options.zoomDelta:1,this.setZoom(this._zoom+e,t)},zoomOut:function(e,t){return e||=q.any3d?this.options.zoomDelta:1,this.setZoom(this._zoom-e,t)},setZoomAround:function(e,t,n){var r=this.getZoomScale(t),i=this.getSize().divideBy(2),a=(e instanceof M?e:this.latLngToContainerPoint(e)).subtract(i).multiplyBy(1-1/r),o=this.containerPointToLatLng(i.add(a));return this.setView(o,t,{zoom:n})},_getBoundsCenterZoom:function(e,t){t||={},e=e.getBounds?e.getBounds():z(e);var n=P(t.paddingTopLeft||t.padding||[0,0]),r=P(t.paddingBottomRight||t.padding||[0,0]),i=this.getBoundsZoom(e,!1,n.add(r));if(i=typeof t.maxZoom==`number`?Math.min(t.maxZoom,i):i,i===1/0)return{center:e.getCenter(),zoom:i};var a=r.subtract(n).divideBy(2),o=this.project(e.getSouthWest(),i),s=this.project(e.getNorthEast(),i);return{center:this.unproject(o.add(s).divideBy(2).add(a),i),zoom:i}},fitBounds:function(e,t){if(e=z(e),!e.isValid())throw Error(`Bounds are not valid.`);var n=this._getBoundsCenterZoom(e,t);return this.setView(n.center,n.zoom,t)},fitWorld:function(e){return this.fitBounds([[-90,-180],[90,180]],e)},panTo:function(e,t){return this.setView(e,this._zoom,{pan:t})},panBy:function(e,t){if(e=P(e).round(),t||={},!e.x&&!e.y)return this.fire(`moveend`);if(t.animate!==!0&&!this.getSize().contains(e))return this._resetView(this.unproject(this.project(this.getCenter()).add(e)),this.getZoom()),this;if(this._panAnim||(this._panAnim=new nn,this._panAnim.on({step:this._onPanTransitionStep,end:this._onPanTransitionEnd},this)),t.noMoveStart||this.fire(`movestart`),t.animate!==!1){Z(this._mapPane,`leaflet-pan-anim`);var n=this._getMapPanePos().subtract(e).round();this._panAnim.run(this._mapPane,n,t.duration||.25,t.easeLinearity)}else this._rawPanBy(e),this.fire(`move`).fire(`moveend`);return this},flyTo:function(e,t,n){if(n||={},n.animate===!1||!q.any3d)return this.setView(e,t,n);this._stop();var r=this.project(this.getCenter()),i=this.project(e),a=this.getSize(),o=this._zoom;e=V(e),t=t===void 0?o:t;var s=Math.max(a.x,a.y),c=s*this.getZoomScale(o,t),l=i.distanceTo(r)||1,u=1.42,d=u*u;function f(e){var t=e?-1:1,n=e?c:s,r=(c*c-s*s+t*d*d*l*l)/(2*n*d*l),i=Math.sqrt(r*r+1)-r;return i<1e-9?-18:Math.log(i)}function p(e){return(Math.exp(e)-Math.exp(-e))/2}function m(e){return(Math.exp(e)+Math.exp(-e))/2}function h(e){return p(e)/m(e)}var g=f(0);function _(e){return s*(m(g)/m(g+u*e))}function v(e){return s*(m(g)*h(g+u*e)-p(g))/d}function y(e){return 1-(1-e)**1.5}var b=Date.now(),x=(f(1)-g)/u,S=n.duration?1e3*n.duration:1e3*x*.8;function C(){var n=(Date.now()-b)/S,a=y(n)*x;n<=1?(this._flyToFrame=T(C,this),this._move(this.unproject(r.add(i.subtract(r).multiplyBy(v(a)/l)),o),this.getScaleZoom(s/_(a),o),{flyTo:!0})):this._move(e,t)._moveEnd(!0)}return this._moveStart(!0,n.noMoveStart),C.call(this),this},flyToBounds:function(e,t){var n=this._getBoundsCenterZoom(e,t);return this.flyTo(n.center,n.zoom,t)},setMaxBounds:function(e){return e=z(e),this.listens(`moveend`,this._panInsideMaxBounds)&&this.off(`moveend`,this._panInsideMaxBounds),e.isValid()?(this.options.maxBounds=e,this._loaded&&this._panInsideMaxBounds(),this.on(`moveend`,this._panInsideMaxBounds)):(this.options.maxBounds=null,this)},setMinZoom:function(e){var t=this.options.minZoom;return this.options.minZoom=e,this._loaded&&t!==e&&(this.fire(`zoomlevelschange`),this.getZoom()<this.options.minZoom)?this.setZoom(e):this},setMaxZoom:function(e){var t=this.options.maxZoom;return this.options.maxZoom=e,this._loaded&&t!==e&&(this.fire(`zoomlevelschange`),this.getZoom()>this.options.maxZoom)?this.setZoom(e):this},panInsideBounds:function(e,t){this._enforcingBounds=!0;var n=this.getCenter(),r=this._limitCenter(n,this._zoom,z(e));return n.equals(r)||this.panTo(r,t),this._enforcingBounds=!1,this},panInside:function(e,t){t||={};var n=P(t.paddingTopLeft||t.padding||[0,0]),r=P(t.paddingBottomRight||t.padding||[0,0]),i=this.project(this.getCenter()),a=this.project(e),o=this.getPixelBounds(),s=I([o.min.add(n),o.max.subtract(r)]),c=s.getSize();if(!s.contains(a)){this._enforcingBounds=!0;var l=a.subtract(s.getCenter()),u=s.extend(a).getSize().subtract(c);i.x+=l.x<0?-u.x:u.x,i.y+=l.y<0?-u.y:u.y,this.panTo(this.unproject(i),t),this._enforcingBounds=!1}return this},invalidateSize:function(e){if(!this._loaded)return this;e=n({animate:!1,pan:!0},e===!0?{animate:!0}:e);var t=this.getSize();this._sizeChanged=!0,this._lastCenter=null;var r=this.getSize(),a=t.divideBy(2).round(),o=r.divideBy(2).round(),s=a.subtract(o);return!s.x&&!s.y?this:(e.animate&&e.pan?this.panBy(s):(e.pan&&this._rawPanBy(s),this.fire(`move`),e.debounceMoveend?(clearTimeout(this._sizeTimer),this._sizeTimer=setTimeout(i(this.fire,this,`moveend`),200)):this.fire(`moveend`)),this.fire(`resize`,{oldSize:t,newSize:r}))},stop:function(){return this.setZoom(this._limitZoom(this._zoom)),this.options.zoomSnap||this.fire(`viewreset`),this._stop()},locate:function(e){if(e=this._locateOptions=n({timeout:1e4,watch:!1},e),!(`geolocation`in navigator))return this._handleGeolocationError({code:0,message:`Geolocation not supported.`}),this;var t=i(this._handleGeolocationResponse,this),r=i(this._handleGeolocationError,this);return e.watch?this._locationWatchId=navigator.geolocation.watchPosition(t,r,e):navigator.geolocation.getCurrentPosition(t,r,e),this},stopLocate:function(){return navigator.geolocation&&navigator.geolocation.clearWatch&&navigator.geolocation.clearWatch(this._locationWatchId),this._locateOptions&&(this._locateOptions.setView=!1),this},_handleGeolocationError:function(e){if(this._container._leaflet_id){var t=e.code,n=e.message||(t===1?`permission denied`:t===2?`position unavailable`:`timeout`);this._locateOptions.setView&&!this._loaded&&this.fitWorld(),this.fire(`locationerror`,{code:t,message:`Geolocation error: `+n+`.`})}},_handleGeolocationResponse:function(e){if(this._container._leaflet_id){var t=e.coords.latitude,n=e.coords.longitude,r=new B(t,n),i=r.toBounds(e.coords.accuracy*2),a=this._locateOptions;if(a.setView){var o=this.getBoundsZoom(i);this.setView(r,a.maxZoom?Math.min(o,a.maxZoom):o)}var s={latlng:r,bounds:i,timestamp:e.timestamp};for(var c in e.coords)typeof e.coords[c]==`number`&&(s[c]=e.coords[c]);this.fire(`locationfound`,s)}},addHandler:function(e,t){if(!t)return this;var n=this[e]=new t(this);return this._handlers.push(n),this.options[e]&&n.enable(),this},remove:function(){if(this._initEvents(!0),this.options.maxBounds&&this.off(`moveend`,this._panInsideMaxBounds),this._containerId!==this._container._leaflet_id)throw Error(`Map container is being reused by another instance`);try{delete this._container._leaflet_id,delete this._containerId}catch{this._container._leaflet_id=void 0,this._containerId=void 0}for(var e in this._locationWatchId!==void 0&&this.stopLocate(),this._stop(),X(this._mapPane),this._clearControlPos&&this._clearControlPos(),this._resizeRequest&&=(E(this._resizeRequest),null),this._clearHandlers(),this._loaded&&this.fire(`unload`),this._layers)this._layers[e].remove();for(e in this._panes)X(this._panes[e]);return this._layers=[],this._panes=[],delete this._mapPane,delete this._renderer,this},createPane:function(e,t){var n=Y(`div`,`leaflet-pane`+(e?` leaflet-`+e.replace(`Pane`,``)+`-pane`:``),t||this._mapPane);return e&&(this._panes[e]=n),n},getCenter:function(){return this._checkIfLoaded(),this._lastCenter&&!this._moved()?this._lastCenter.clone():this.layerPointToLatLng(this._getCenterLayerPoint())},getZoom:function(){return this._zoom},getBounds:function(){var e=this.getPixelBounds();return new R(this.unproject(e.getBottomLeft()),this.unproject(e.getTopRight()))},getMinZoom:function(){return this.options.minZoom===void 0?this._layersMinZoom||0:this.options.minZoom},getMaxZoom:function(){return this.options.maxZoom===void 0?this._layersMaxZoom===void 0?1/0:this._layersMaxZoom:this.options.maxZoom},getBoundsZoom:function(e,t,n){e=z(e),n=P(n||[0,0]);var r=this.getZoom()||0,i=this.getMinZoom(),a=this.getMaxZoom(),o=e.getNorthWest(),s=e.getSouthEast(),c=this.getSize().subtract(n),l=I(this.project(s,r),this.project(o,r)).getSize(),u=q.any3d?this.options.zoomSnap:1,d=c.x/l.x,f=c.y/l.y,p=t?Math.max(d,f):Math.min(d,f);return r=this.getScaleZoom(p,r),u&&(r=Math.round(r/(u/100))*(u/100),r=t?Math.ceil(r/u)*u:Math.floor(r/u)*u),Math.max(i,Math.min(a,r))},getSize:function(){return(!this._size||this._sizeChanged)&&(this._size=new M(this._container.clientWidth||0,this._container.clientHeight||0),this._sizeChanged=!1),this._size.clone()},getPixelBounds:function(e,t){var n=this._getTopLeftPoint(e,t);return new F(n,n.add(this.getSize()))},getPixelOrigin:function(){return this._checkIfLoaded(),this._pixelOrigin},getPixelWorldBounds:function(e){return this.options.crs.getProjectedBounds(e===void 0?this.getZoom():e)},getPane:function(e){return typeof e==`string`?this._panes[e]:e},getPanes:function(){return this._panes},getContainer:function(){return this._container},getZoomScale:function(e,t){var n=this.options.crs;return t=t===void 0?this._zoom:t,n.scale(e)/n.scale(t)},getScaleZoom:function(e,t){var n=this.options.crs;t=t===void 0?this._zoom:t;var r=n.zoom(e*n.scale(t));return isNaN(r)?1/0:r},project:function(e,t){return t=t===void 0?this._zoom:t,this.options.crs.latLngToPoint(V(e),t)},unproject:function(e,t){return t=t===void 0?this._zoom:t,this.options.crs.pointToLatLng(P(e),t)},layerPointToLatLng:function(e){var t=P(e).add(this.getPixelOrigin());return this.unproject(t)},latLngToLayerPoint:function(e){return this.project(V(e))._round()._subtract(this.getPixelOrigin())},wrapLatLng:function(e){return this.options.crs.wrapLatLng(V(e))},wrapLatLngBounds:function(e){return this.options.crs.wrapLatLngBounds(z(e))},distance:function(e,t){return this.options.crs.distance(V(e),V(t))},containerPointToLayerPoint:function(e){return P(e).subtract(this._getMapPanePos())},layerPointToContainerPoint:function(e){return P(e).add(this._getMapPanePos())},containerPointToLatLng:function(e){var t=this.containerPointToLayerPoint(P(e));return this.layerPointToLatLng(t)},latLngToContainerPoint:function(e){return this.layerPointToContainerPoint(this.latLngToLayerPoint(V(e)))},mouseEventToContainerPoint:function(e){return Zt(e,this._container)},mouseEventToLayerPoint:function(e){return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(e))},mouseEventToLatLng:function(e){return this.layerPointToLatLng(this.mouseEventToLayerPoint(e))},_initContainer:function(e){var t=this._container=dt(e);if(!t)throw Error(`Map container not found.`);if(t._leaflet_id)throw Error(`Map container is already initialized.`);Q(t,`scroll`,this._onScroll,this),this._containerId=o(t)},_initLayout:function(){var e=this._container;this._fadeAnimated=this.options.fadeAnimation&&q.any3d,Z(e,`leaflet-container`+(q.touch?` leaflet-touch`:``)+(q.retina?` leaflet-retina`:``)+(q.ielt9?` leaflet-oldie`:``)+(q.safari?` leaflet-safari`:``)+(this._fadeAnimated?` leaflet-fade-anim`:``));var t=ft(e,`position`);t!==`absolute`&&t!==`relative`&&t!==`fixed`&&t!==`sticky`&&(e.style.position=`relative`),this._initPanes(),this._initControlPos&&this._initControlPos()},_initPanes:function(){var e=this._panes={};this._paneRenderers={},this._mapPane=this.createPane(`mapPane`,this._container),wt(this._mapPane,new M(0,0)),this.createPane(`tilePane`),this.createPane(`overlayPane`),this.createPane(`shadowPane`),this.createPane(`markerPane`),this.createPane(`tooltipPane`),this.createPane(`popupPane`),this.options.markerZoomAnimation||(Z(e.markerPane,`leaflet-zoom-hide`),Z(e.shadowPane,`leaflet-zoom-hide`))},_resetView:function(e,t,n){wt(this._mapPane,new M(0,0));var r=!this._loaded;this._loaded=!0,t=this._limitZoom(t),this.fire(`viewprereset`);var i=this._zoom!==t;this._moveStart(i,n)._move(e,t)._moveEnd(i),this.fire(`viewreset`),r&&this.fire(`load`)},_moveStart:function(e,t){return e&&this.fire(`zoomstart`),t||this.fire(`movestart`),this},_move:function(e,t,n,r){t===void 0&&(t=this._zoom);var i=this._zoom!==t;return this._zoom=t,this._lastCenter=e,this._pixelOrigin=this._getNewPixelOrigin(e),r?n&&n.pinch&&this.fire(`zoom`,n):((i||n&&n.pinch)&&this.fire(`zoom`,n),this.fire(`move`,n)),this},_moveEnd:function(e){return e&&this.fire(`zoomend`),this.fire(`moveend`)},_stop:function(){return E(this._flyToFrame),this._panAnim&&this._panAnim.stop(),this},_rawPanBy:function(e){wt(this._mapPane,this._getMapPanePos().subtract(e))},_getZoomSpan:function(){return this.getMaxZoom()-this.getMinZoom()},_panInsideMaxBounds:function(){this._enforcingBounds||this.panInsideBounds(this.options.maxBounds)},_checkIfLoaded:function(){if(!this._loaded)throw Error(`Set map center and zoom first.`)},_initEvents:function(e){this._targets={},this._targets[o(this._container)]=this;var t=e?Bt:Q;t(this._container,`click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress keydown keyup`,this._handleDOMEvent,this),this.options.trackResize&&t(window,`resize`,this._onResize,this),q.any3d&&this.options.transform3DLimit&&(e?this.off:this.on).call(this,`moveend`,this._onMoveEnd)},_onResize:function(){E(this._resizeRequest),this._resizeRequest=T(function(){this.invalidateSize({debounceMoveend:!0})},this)},_onScroll:function(){this._container.scrollTop=0,this._container.scrollLeft=0},_onMoveEnd:function(){var e=this._getMapPanePos();Math.max(Math.abs(e.x),Math.abs(e.y))>=this.options.transform3DLimit&&this._resetView(this.getCenter(),this.getZoom())},_findEventTargets:function(e,t){for(var n=[],r,i=t===`mouseout`||t===`mouseover`,a=e.target||e.srcElement,s=!1;a;){if(r=this._targets[o(a)],r&&(t===`click`||t===`preclick`)&&this._draggableMoved(r)){s=!0;break}if(r&&r.listens(t,!0)&&(i&&!en(a,e)||(n.push(r),i))||a===this._container)break;a=a.parentNode}return!n.length&&!s&&!i&&this.listens(t,!0)&&(n=[this]),n},_isClickDisabled:function(e){for(;e&&e!==this._container;){if(e._leaflet_disable_click)return!0;e=e.parentNode}},_handleDOMEvent:function(e){var t=e.target||e.srcElement;if(!(!this._loaded||t._leaflet_disable_events||e.type===`click`&&this._isClickDisabled(t))){var n=e.type;n===`mousedown`&&Pt(t),this._fireDOMEvent(e,n)}},_mouseEvents:[`click`,`dblclick`,`mouseover`,`mouseout`,`contextmenu`],_fireDOMEvent:function(e,t,r){if(e.type===`click`){var i=n({},e);i.type=`preclick`,this._fireDOMEvent(i,i.type,r)}var a=this._findEventTargets(e,t);if(r){for(var o=[],s=0;s<r.length;s++)r[s].listens(t,!0)&&o.push(r[s]);a=o.concat(a)}if(a.length){t===`contextmenu`&&Jt(e);var c=a[0],l={originalEvent:e};if(e.type!==`keypress`&&e.type!==`keydown`&&e.type!==`keyup`){var u=c.getLatLng&&(!c._radius||c._radius<=10);l.containerPoint=u?this.latLngToContainerPoint(c.getLatLng()):this.mouseEventToContainerPoint(e),l.layerPoint=this.containerPointToLayerPoint(l.containerPoint),l.latlng=u?c.getLatLng():this.layerPointToLatLng(l.layerPoint)}for(s=0;s<a.length;s++)if(a[s].fire(t,l,!0),l.originalEvent._stopped||a[s].options.bubblingMouseEvents===!1&&v(this._mouseEvents,t)!==-1)return}},_draggableMoved:function(e){return e=e.dragging&&e.dragging.enabled()?e:this,e.dragging&&e.dragging.moved()||this.boxZoom&&this.boxZoom.moved()},_clearHandlers:function(){for(var e=0,t=this._handlers.length;e<t;e++)this._handlers[e].disable()},whenReady:function(e,t){return this._loaded?e.call(t||this,{target:this}):this.on(`load`,e,t),this},_getMapPanePos:function(){return Tt(this._mapPane)||new M(0,0)},_moved:function(){var e=this._getMapPanePos();return e&&!e.equals([0,0])},_getTopLeftPoint:function(e,t){return(e&&t!==void 0?this._getNewPixelOrigin(e,t):this.getPixelOrigin()).subtract(this._getMapPanePos())},_getNewPixelOrigin:function(e,t){var n=this.getSize()._divideBy(2);return this.project(e,t)._subtract(n)._add(this._getMapPanePos())._round()},_latLngToNewLayerPoint:function(e,t,n){var r=this._getNewPixelOrigin(n,t);return this.project(e,t)._subtract(r)},_latLngBoundsToNewLayerBounds:function(e,t,n){var r=this._getNewPixelOrigin(n,t);return I([this.project(e.getSouthWest(),t)._subtract(r),this.project(e.getNorthWest(),t)._subtract(r),this.project(e.getSouthEast(),t)._subtract(r),this.project(e.getNorthEast(),t)._subtract(r)])},_getCenterLayerPoint:function(){return this.containerPointToLayerPoint(this.getSize()._divideBy(2))},_getCenterOffset:function(e){return this.latLngToLayerPoint(e).subtract(this._getCenterLayerPoint())},_limitCenter:function(e,t,n){if(!n)return e;var r=this.project(e,t),i=this.getSize().divideBy(2),a=new F(r.subtract(i),r.add(i)),o=this._getBoundsOffset(a,n,t);return Math.abs(o.x)<=1&&Math.abs(o.y)<=1?e:this.unproject(r.add(o),t)},_limitOffset:function(e,t){if(!t)return e;var n=this.getPixelBounds(),r=new F(n.min.add(e),n.max.add(e));return e.add(this._getBoundsOffset(r,t))},_getBoundsOffset:function(e,t,n){var r=I(this.project(t.getNorthEast(),n),this.project(t.getSouthWest(),n)),i=r.min.subtract(e.min),a=r.max.subtract(e.max);return new M(this._rebound(i.x,-a.x),this._rebound(i.y,-a.y))},_rebound:function(e,t){return e+t>0?Math.round(e-t)/2:Math.max(0,Math.ceil(e))-Math.max(0,Math.floor(t))},_limitZoom:function(e){var t=this.getMinZoom(),n=this.getMaxZoom(),r=q.any3d?this.options.zoomSnap:1;return r&&(e=Math.round(e/r)*r),Math.max(t,Math.min(n,e))},_onPanTransitionStep:function(){this.fire(`move`)},_onPanTransitionEnd:function(){_t(this._mapPane,`leaflet-pan-anim`),this.fire(`moveend`)},_tryAnimatedPan:function(e,t){var n=this._getCenterOffset(e)._trunc();return(t&&t.animate)!==!0&&!this.getSize().contains(n)?!1:(this.panBy(n,t),!0)},_createAnimProxy:function(){var e=this._proxy=Y(`div`,`leaflet-proxy leaflet-zoom-animated`);this._panes.mapPane.appendChild(e),this.on(`zoomanim`,function(e){var t=lt,n=this._proxy.style[t];Ct(this._proxy,this.project(e.center,e.zoom),this.getZoomScale(e.zoom,1)),n===this._proxy.style[t]&&this._animatingZoom&&this._onZoomTransitionEnd()},this),this.on(`load moveend`,this._animMoveEnd,this),this._on(`unload`,this._destroyAnimProxy,this)},_destroyAnimProxy:function(){X(this._proxy),this.off(`load moveend`,this._animMoveEnd,this),delete this._proxy},_animMoveEnd:function(){var e=this.getCenter(),t=this.getZoom();Ct(this._proxy,this.project(e,t),this.getZoomScale(t,1))},_catchTransitionEnd:function(e){this._animatingZoom&&e.propertyName.indexOf(`transform`)>=0&&this._onZoomTransitionEnd()},_nothingToAnimate:function(){return!this._container.getElementsByClassName(`leaflet-zoom-animated`).length},_tryAnimatedZoom:function(e,t,n){if(this._animatingZoom)return!0;if(n||={},!this._zoomAnimated||n.animate===!1||this._nothingToAnimate()||Math.abs(t-this._zoom)>this.options.zoomAnimationThreshold)return!1;var r=this.getZoomScale(t),i=this._getCenterOffset(e)._divideBy(1-1/r);return n.animate!==!0&&!this.getSize().contains(i)?!1:(T(function(){this._moveStart(!0,n.noMoveStart||!1)._animateZoom(e,t,!0)},this),!0)},_animateZoom:function(e,t,n,r){this._mapPane&&(n&&(this._animatingZoom=!0,this._animateToCenter=e,this._animateToZoom=t,Z(this._mapPane,`leaflet-zoom-anim`)),this.fire(`zoomanim`,{center:e,zoom:t,noUpdate:r}),this._tempFireZoomEvent||=this._zoom!==this._animateToZoom,this._move(this._animateToCenter,this._animateToZoom,void 0,!0),setTimeout(i(this._onZoomTransitionEnd,this),250))},_onZoomTransitionEnd:function(){this._animatingZoom&&(this._mapPane&&_t(this._mapPane,`leaflet-zoom-anim`),this._animatingZoom=!1,this._move(this._animateToCenter,this._animateToZoom,void 0,!0),this._tempFireZoomEvent&&this.fire(`zoom`),delete this._tempFireZoomEvent,this.fire(`move`),this._moveEnd(!0))}});function an(e,t){return new rn(e,t)}var on=O.extend({options:{position:`topright`},initialize:function(e){p(this,e)},getPosition:function(){return this.options.position},setPosition:function(e){var t=this._map;return t&&t.removeControl(this),this.options.position=e,t&&t.addControl(this),this},getContainer:function(){return this._container},addTo:function(e){this.remove(),this._map=e;var t=this._container=this.onAdd(e),n=this.getPosition(),r=e._controlCorners[n];return Z(t,`leaflet-control`),n.indexOf(`bottom`)===-1?r.appendChild(t):r.insertBefore(t,r.firstChild),this._map.on(`unload`,this.remove,this),this},remove:function(){return this._map&&=(X(this._container),this.onRemove&&this.onRemove(this._map),this._map.off(`unload`,this.remove,this),null),this},_refocusOnMap:function(e){this._map&&e&&e.screenX>0&&e.screenY>0&&this._map.getContainer().focus()}}),sn=function(e){return new on(e)};rn.include({addControl:function(e){return e.addTo(this),this},removeControl:function(e){return e.remove(),this},_initControlPos:function(){var e=this._controlCorners={},t=`leaflet-`,n=this._controlContainer=Y(`div`,t+`control-container`,this._container);function r(r,i){var a=t+r+` `+t+i;e[r+i]=Y(`div`,a,n)}r(`top`,`left`),r(`top`,`right`),r(`bottom`,`left`),r(`bottom`,`right`)},_clearControlPos:function(){for(var e in this._controlCorners)X(this._controlCorners[e]);X(this._controlContainer),delete this._controlCorners,delete this._controlContainer}});var cn=on.extend({options:{collapsed:!0,position:`topright`,autoZIndex:!0,hideSingleBase:!1,sortLayers:!1,sortFunction:function(e,t,n,r){return n<r?-1:+(r<n)}},initialize:function(e,t,n){for(var r in p(this,n),this._layerControlInputs=[],this._layers=[],this._lastZIndex=0,this._handlingClick=!1,this._preventClick=!1,e)this._addLayer(e[r],r);for(r in t)this._addLayer(t[r],r,!0)},onAdd:function(e){this._initLayout(),this._update(),this._map=e,e.on(`zoomend`,this._checkDisabledLayers,this);for(var t=0;t<this._layers.length;t++)this._layers[t].layer.on(`add remove`,this._onLayerChange,this);return this._container},addTo:function(e){return on.prototype.addTo.call(this,e),this._expandIfNotCollapsed()},onRemove:function(){this._map.off(`zoomend`,this._checkDisabledLayers,this);for(var e=0;e<this._layers.length;e++)this._layers[e].layer.off(`add remove`,this._onLayerChange,this)},addBaseLayer:function(e,t){return this._addLayer(e,t),this._map?this._update():this},addOverlay:function(e,t){return this._addLayer(e,t,!0),this._map?this._update():this},removeLayer:function(e){e.off(`add remove`,this._onLayerChange,this);var t=this._getLayer(o(e));return t&&this._layers.splice(this._layers.indexOf(t),1),this._map?this._update():this},expand:function(){Z(this._container,`leaflet-control-layers-expanded`),this._section.style.height=null;var e=this._map.getSize().y-(this._container.offsetTop+50);return e<this._section.clientHeight?(Z(this._section,`leaflet-control-layers-scrollbar`),this._section.style.height=e+`px`):_t(this._section,`leaflet-control-layers-scrollbar`),this._checkDisabledLayers(),this},collapse:function(){return _t(this._container,`leaflet-control-layers-expanded`),this},_initLayout:function(){var e=`leaflet-control-layers`,t=this._container=Y(`div`,e),n=this.options.collapsed;t.setAttribute(`aria-haspopup`,!0),qt(t),Kt(t);var r=this._section=Y(`section`,e+`-list`);n&&(this._map.on(`click`,this.collapse,this),Q(t,{mouseenter:this._expandSafely,mouseleave:this.collapse},this));var i=this._layersLink=Y(`a`,e+`-toggle`,t);i.href=`#`,i.title=`Layers`,i.setAttribute(`role`,`button`),Q(i,{keydown:function(e){e.keyCode===13&&this._expandSafely()},click:function(e){Jt(e),this._expandSafely()}},this),n||this.expand(),this._baseLayersList=Y(`div`,e+`-base`,r),this._separator=Y(`div`,e+`-separator`,r),this._overlaysList=Y(`div`,e+`-overlays`,r),t.appendChild(r)},_getLayer:function(e){for(var t=0;t<this._layers.length;t++)if(this._layers[t]&&o(this._layers[t].layer)===e)return this._layers[t]},_addLayer:function(e,t,n){this._map&&e.on(`add remove`,this._onLayerChange,this),this._layers.push({layer:e,name:t,overlay:n}),this.options.sortLayers&&this._layers.sort(i(function(e,t){return this.options.sortFunction(e.layer,t.layer,e.name,t.name)},this)),this.options.autoZIndex&&e.setZIndex&&(this._lastZIndex++,e.setZIndex(this._lastZIndex)),this._expandIfNotCollapsed()},_update:function(){if(!this._container)return this;pt(this._baseLayersList),pt(this._overlaysList),this._layerControlInputs=[];var e,t,n,r,i=0;for(n=0;n<this._layers.length;n++)r=this._layers[n],this._addItem(r),t||=r.overlay,e||=!r.overlay,i+=+!r.overlay;return this.options.hideSingleBase&&(e&&=i>1,this._baseLayersList.style.display=e?``:`none`),this._separator.style.display=t&&e?``:`none`,this},_onLayerChange:function(e){this._handlingClick||this._update();var t=this._getLayer(o(e.target)),n=t.overlay?e.type===`add`?`overlayadd`:`overlayremove`:e.type===`add`?`baselayerchange`:null;n&&this._map.fire(n,t)},_createRadioElement:function(e,t){var n=`<input type="radio" class="leaflet-control-layers-selector" name="`+e+`"`+(t?` checked="checked"`:``)+`/>`,r=document.createElement(`div`);return r.innerHTML=n,r.firstChild},_addItem:function(e){var t=document.createElement(`label`),n=this._map.hasLayer(e.layer),r;e.overlay?(r=document.createElement(`input`),r.type=`checkbox`,r.className=`leaflet-control-layers-selector`,r.defaultChecked=n):r=this._createRadioElement(`leaflet-base-layers_`+o(this),n),this._layerControlInputs.push(r),r.layerId=o(e.layer),Q(r,`click`,this._onInputClick,this);var i=document.createElement(`span`);i.innerHTML=` `+e.name;var a=document.createElement(`span`);return t.appendChild(a),a.appendChild(r),a.appendChild(i),(e.overlay?this._overlaysList:this._baseLayersList).appendChild(t),this._checkDisabledLayers(),t},_onInputClick:function(){if(!this._preventClick){var e=this._layerControlInputs,t,n,r=[],i=[];this._handlingClick=!0;for(var a=e.length-1;a>=0;a--)t=e[a],n=this._getLayer(t.layerId).layer,t.checked?r.push(n):t.checked||i.push(n);for(a=0;a<i.length;a++)this._map.hasLayer(i[a])&&this._map.removeLayer(i[a]);for(a=0;a<r.length;a++)this._map.hasLayer(r[a])||this._map.addLayer(r[a]);this._handlingClick=!1,this._refocusOnMap()}},_checkDisabledLayers:function(){for(var e=this._layerControlInputs,t,n,r=this._map.getZoom(),i=e.length-1;i>=0;i--)t=e[i],n=this._getLayer(t.layerId).layer,t.disabled=n.options.minZoom!==void 0&&r<n.options.minZoom||n.options.maxZoom!==void 0&&r>n.options.maxZoom},_expandIfNotCollapsed:function(){return this._map&&!this.options.collapsed&&this.expand(),this},_expandSafely:function(){var e=this._section;this._preventClick=!0,Q(e,`click`,Jt),this.expand();var t=this;setTimeout(function(){Bt(e,`click`,Jt),t._preventClick=!1})}}),ln=function(e,t,n){return new cn(e,t,n)},un=on.extend({options:{position:`topleft`,zoomInText:`<span aria-hidden="true">+</span>`,zoomInTitle:`Zoom in`,zoomOutText:`<span aria-hidden="true">&#x2212;</span>`,zoomOutTitle:`Zoom out`},onAdd:function(e){var t=`leaflet-control-zoom`,n=Y(`div`,t+` leaflet-bar`),r=this.options;return this._zoomInButton=this._createButton(r.zoomInText,r.zoomInTitle,t+`-in`,n,this._zoomIn),this._zoomOutButton=this._createButton(r.zoomOutText,r.zoomOutTitle,t+`-out`,n,this._zoomOut),this._updateDisabled(),e.on(`zoomend zoomlevelschange`,this._updateDisabled,this),n},onRemove:function(e){e.off(`zoomend zoomlevelschange`,this._updateDisabled,this)},disable:function(){return this._disabled=!0,this._updateDisabled(),this},enable:function(){return this._disabled=!1,this._updateDisabled(),this},_zoomIn:function(e){!this._disabled&&this._map._zoom<this._map.getMaxZoom()&&this._map.zoomIn(this._map.options.zoomDelta*(e.shiftKey?3:1))},_zoomOut:function(e){!this._disabled&&this._map._zoom>this._map.getMinZoom()&&this._map.zoomOut(this._map.options.zoomDelta*(e.shiftKey?3:1))},_createButton:function(e,t,n,r,i){var a=Y(`a`,n,r);return a.innerHTML=e,a.href=`#`,a.title=t,a.setAttribute(`role`,`button`),a.setAttribute(`aria-label`,t),qt(a),Q(a,`click`,Yt),Q(a,`click`,i,this),Q(a,`click`,this._refocusOnMap,this),a},_updateDisabled:function(){var e=this._map,t=`leaflet-disabled`;_t(this._zoomInButton,t),_t(this._zoomOutButton,t),this._zoomInButton.setAttribute(`aria-disabled`,`false`),this._zoomOutButton.setAttribute(`aria-disabled`,`false`),(this._disabled||e._zoom===e.getMinZoom())&&(Z(this._zoomOutButton,t),this._zoomOutButton.setAttribute(`aria-disabled`,`true`)),(this._disabled||e._zoom===e.getMaxZoom())&&(Z(this._zoomInButton,t),this._zoomInButton.setAttribute(`aria-disabled`,`true`))}});rn.mergeOptions({zoomControl:!0}),rn.addInitHook(function(){this.options.zoomControl&&(this.zoomControl=new un,this.addControl(this.zoomControl))});var dn=function(e){return new un(e)},fn=on.extend({options:{position:`bottomleft`,maxWidth:100,metric:!0,imperial:!0},onAdd:function(e){var t=`leaflet-control-scale`,n=Y(`div`,t),r=this.options;return this._addScales(r,t+`-line`,n),e.on(r.updateWhenIdle?`moveend`:`move`,this._update,this),e.whenReady(this._update,this),n},onRemove:function(e){e.off(this.options.updateWhenIdle?`moveend`:`move`,this._update,this)},_addScales:function(e,t,n){e.metric&&(this._mScale=Y(`div`,t,n)),e.imperial&&(this._iScale=Y(`div`,t,n))},_update:function(){var e=this._map,t=e.getSize().y/2,n=e.distance(e.containerPointToLatLng([0,t]),e.containerPointToLatLng([this.options.maxWidth,t]));this._updateScales(n)},_updateScales:function(e){this.options.metric&&e&&this._updateMetric(e),this.options.imperial&&e&&this._updateImperial(e)},_updateMetric:function(e){var t=this._getRoundNum(e),n=t<1e3?t+` m`:t/1e3+` km`;this._updateScale(this._mScale,n,t/e)},_updateImperial:function(e){var t=e*3.2808399,n,r,i;t>5280?(n=t/5280,r=this._getRoundNum(n),this._updateScale(this._iScale,r+` mi`,r/n)):(i=this._getRoundNum(t),this._updateScale(this._iScale,i+` ft`,i/t))},_updateScale:function(e,t,n){e.style.width=Math.round(this.options.maxWidth*n)+`px`,e.innerHTML=t},_getRoundNum:function(e){var t=10**((Math.floor(e)+``).length-1),n=e/t;return n=n>=10?10:n>=5?5:n>=3?3:n>=2?2:1,t*n}}),pn=function(e){return new fn(e)},mn=on.extend({options:{position:`bottomright`,prefix:`<a href="https://leafletjs.com" title="A JavaScript library for interactive maps">`+(q.inlineSvg?`<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" class="leaflet-attribution-flag"><path fill="#4C7BE1" d="M0 0h12v4H0z"/><path fill="#FFD500" d="M0 4h12v3H0z"/><path fill="#E0BC00" d="M0 7h12v1H0z"/></svg> `:``)+`Leaflet</a>`},initialize:function(e){p(this,e),this._attributions={}},onAdd:function(e){for(var t in e.attributionControl=this,this._container=Y(`div`,`leaflet-control-attribution`),qt(this._container),e._layers)e._layers[t].getAttribution&&this.addAttribution(e._layers[t].getAttribution());return this._update(),e.on(`layeradd`,this._addAttribution,this),this._container},onRemove:function(e){e.off(`layeradd`,this._addAttribution,this)},_addAttribution:function(e){e.layer.getAttribution&&(this.addAttribution(e.layer.getAttribution()),e.layer.once(`remove`,function(){this.removeAttribution(e.layer.getAttribution())},this))},setPrefix:function(e){return this.options.prefix=e,this._update(),this},addAttribution:function(e){return e&&(this._attributions[e]||(this._attributions[e]=0),this._attributions[e]++,this._update()),this},removeAttribution:function(e){return e&&this._attributions[e]&&(this._attributions[e]--,this._update()),this},_update:function(){if(this._map){var e=[];for(var t in this._attributions)this._attributions[t]&&e.push(t);var n=[];this.options.prefix&&n.push(this.options.prefix),e.length&&n.push(e.join(`, `)),this._container.innerHTML=n.join(` <span aria-hidden="true">|</span> `)}}});rn.mergeOptions({attributionControl:!0}),rn.addInitHook(function(){this.options.attributionControl&&new mn().addTo(this)}),on.Layers=cn,on.Zoom=un,on.Scale=fn,on.Attribution=mn,sn.layers=ln,sn.zoom=dn,sn.scale=pn,sn.attribution=function(e){return new mn(e)};var hn=O.extend({initialize:function(e){this._map=e},enable:function(){return this._enabled||(this._enabled=!0,this.addHooks()),this},disable:function(){return this._enabled&&(this._enabled=!1,this.removeHooks()),this},enabled:function(){return!!this._enabled}});hn.addTo=function(e,t){return e.addHandler(t,this),this};var gn={Events:A},_n=q.touch?`touchstart mousedown`:`mousedown`,vn=j.extend({options:{clickTolerance:3},initialize:function(e,t,n,r){p(this,r),this._element=e,this._dragStartTarget=t||e,this._preventOutline=n},enable:function(){this._enabled||=(Q(this._dragStartTarget,_n,this._onDown,this),!0)},disable:function(){this._enabled&&(vn._dragging===this&&this.finishDrag(!0),Bt(this._dragStartTarget,_n,this._onDown,this),this._enabled=!1,this._moved=!1)},_onDown:function(e){if(this._enabled&&(this._moved=!1,!gt(this._element,`leaflet-zoom-anim`))){if(e.touches&&e.touches.length!==1)vn._dragging===this&&this.finishDrag();else if(!(vn._dragging||e.shiftKey||e.which!==1&&e.button!==1&&!e.touches)&&(vn._dragging=this,this._preventOutline&&Pt(this._element),At(),Et(),!this._moving)){this.fire(`down`);var t=e.touches?e.touches[0]:e,n=It(this._element);this._startPoint=new M(t.clientX,t.clientY),this._startPos=Tt(this._element),this._parentScale=Lt(n);var r=e.type===`mousedown`;Q(document,r?`mousemove`:`touchmove`,this._onMove,this),Q(document,r?`mouseup`:`touchend touchcancel`,this._onUp,this)}}},_onMove:function(e){if(this._enabled){if(e.touches&&e.touches.length>1)this._moved=!0;else{var t=e.touches&&e.touches.length===1?e.touches[0]:e,n=new M(t.clientX,t.clientY)._subtract(this._startPoint);(n.x||n.y)&&(Math.abs(n.x)+Math.abs(n.y)<this.options.clickTolerance||(n.x/=this._parentScale.x,n.y/=this._parentScale.y,Jt(e),this._moved||(this.fire(`dragstart`),this._moved=!0,Z(document.body,`leaflet-dragging`),this._lastTarget=e.target||e.srcElement,window.SVGElementInstance&&this._lastTarget instanceof window.SVGElementInstance&&(this._lastTarget=this._lastTarget.correspondingUseElement),Z(this._lastTarget,`leaflet-drag-target`)),this._newPos=this._startPos.add(n),this._moving=!0,this._lastEvent=e,this._updatePosition()))}}},_updatePosition:function(){var e={originalEvent:this._lastEvent};this.fire(`predrag`,e),wt(this._element,this._newPos),this.fire(`drag`,e)},_onUp:function(){this._enabled&&this.finishDrag()},finishDrag:function(e){_t(document.body,`leaflet-dragging`),this._lastTarget&&=(_t(this._lastTarget,`leaflet-drag-target`),null),Bt(document,`mousemove touchmove`,this._onMove,this),Bt(document,`mouseup touchend touchcancel`,this._onUp,this),jt(),Dt();var t=this._moved&&this._moving;this._moving=!1,vn._dragging=!1,t&&this.fire(`dragend`,{noInertia:e,distance:this._newPos.distanceTo(this._startPos)})}});function yn(e,t,n){for(var r,i=[1,4,2,8],a=0,o,s,c,l,u=e.length,d,f;a<u;a++)e[a]._code=Mn(e[a],t);for(s=0;s<4;s++){for(d=i[s],r=[],a=0,u=e.length,o=u-1;a<u;o=a++)c=e[a],l=e[o],c._code&d?l._code&d||(f=jn(l,c,d,t,n),f._code=Mn(f,t),r.push(f)):(l._code&d&&(f=jn(l,c,d,t,n),f._code=Mn(f,t),r.push(f)),r.push(c));e=r}return e}function bn(e,t){var n,r,i,a,o,s,c,l,u;if(!e||e.length===0)throw Error(`latlngs not passed`);Fn(e)||(console.warn(`latlngs are not flat! Only the first ring will be used`),e=e[0]);var d=V([0,0]),f=z(e);f.getNorthWest().distanceTo(f.getSouthWest())*f.getNorthEast().distanceTo(f.getNorthWest())<1700&&(d=xn(e));var p=e.length,m=[];for(n=0;n<p;n++){var h=V(e[n]);m.push(t.project(V([h.lat-d.lat,h.lng-d.lng])))}for(s=c=l=0,n=0,r=p-1;n<p;r=n++)i=m[n],a=m[r],o=i.y*a.x-a.y*i.x,c+=(i.x+a.x)*o,l+=(i.y+a.y)*o,s+=o*3;u=s===0?m[0]:[c/s,l/s];var g=t.unproject(P(u));return V([g.lat+d.lat,g.lng+d.lng])}function xn(e){for(var t=0,n=0,r=0,i=0;i<e.length;i++){var a=V(e[i]);t+=a.lat,n+=a.lng,r++}return V([t/r,n/r])}var Sn={__proto__:null,clipPolygon:yn,polygonCenter:bn,centroid:xn};function Cn(e,t){if(!t||!e.length)return e.slice();var n=t*t;return e=On(e,n),e=En(e,n),e}function wn(e,t,n){return Math.sqrt(Pn(e,t,n,!0))}function Tn(e,t,n){return Pn(e,t,n)}function En(e,t){var n=e.length,r=new(typeof Uint8Array<`u`?Uint8Array:Array)(n);r[0]=r[n-1]=1,Dn(e,r,t,0,n-1);var i,a=[];for(i=0;i<n;i++)r[i]&&a.push(e[i]);return a}function Dn(e,t,n,r,i){for(var a=0,o,s=r+1,c;s<=i-1;s++)c=Pn(e[s],e[r],e[i],!0),c>a&&(o=s,a=c);a>n&&(t[o]=1,Dn(e,t,n,r,o),Dn(e,t,n,o,i))}function On(e,t){for(var n=[e[0]],r=1,i=0,a=e.length;r<a;r++)Nn(e[r],e[i])>t&&(n.push(e[r]),i=r);return i<a-1&&n.push(e[a-1]),n}var kn;function An(e,t,n,r,i){var a=r?kn:Mn(e,n),o=Mn(t,n),s,c,l;for(kn=o;;){if(!(a|o))return[e,t];if(a&o)return!1;s=a||o,c=jn(e,t,s,n,i),l=Mn(c,n),s===a?(e=c,a=l):(t=c,o=l)}}function jn(e,t,n,r,i){var a=t.x-e.x,o=t.y-e.y,s=r.min,c=r.max,l,u;return n&8?(l=e.x+a*(c.y-e.y)/o,u=c.y):n&4?(l=e.x+a*(s.y-e.y)/o,u=s.y):n&2?(l=c.x,u=e.y+o*(c.x-e.x)/a):n&1&&(l=s.x,u=e.y+o*(s.x-e.x)/a),new M(l,u,i)}function Mn(e,t){var n=0;return e.x<t.min.x?n|=1:e.x>t.max.x&&(n|=2),e.y<t.min.y?n|=4:e.y>t.max.y&&(n|=8),n}function Nn(e,t){var n=t.x-e.x,r=t.y-e.y;return n*n+r*r}function Pn(e,t,n,r){var i=t.x,a=t.y,o=n.x-i,s=n.y-a,c=o*o+s*s,l;return c>0&&(l=((e.x-i)*o+(e.y-a)*s)/c,l>1?(i=n.x,a=n.y):l>0&&(i+=o*l,a+=s*l)),o=e.x-i,s=e.y-a,r?o*o+s*s:new M(i,a)}function Fn(e){return!_(e[0])||typeof e[0][0]!=`object`&&e[0][0]!==void 0}function In(e){return console.warn(`Deprecated use of _flat, please use L.LineUtil.isFlat instead.`),Fn(e)}function Ln(e,t){var n,r,i,a,o,s,c,l;if(!e||e.length===0)throw Error(`latlngs not passed`);Fn(e)||(console.warn(`latlngs are not flat! Only the first ring will be used`),e=e[0]);var u=V([0,0]),d=z(e);d.getNorthWest().distanceTo(d.getSouthWest())*d.getNorthEast().distanceTo(d.getNorthWest())<1700&&(u=xn(e));var f=e.length,p=[];for(n=0;n<f;n++){var m=V(e[n]);p.push(t.project(V([m.lat-u.lat,m.lng-u.lng])))}for(n=0,r=0;n<f-1;n++)r+=p[n].distanceTo(p[n+1])/2;if(r===0)l=p[0];else for(n=0,a=0;n<f-1;n++)if(o=p[n],s=p[n+1],i=o.distanceTo(s),a+=i,a>r){c=(a-r)/i,l=[s.x-c*(s.x-o.x),s.y-c*(s.y-o.y)];break}var h=t.unproject(P(l));return V([h.lat+u.lat,h.lng+u.lng])}var Rn={__proto__:null,simplify:Cn,pointToSegmentDistance:wn,closestPointOnSegment:Tn,clipSegment:An,_getEdgeIntersection:jn,_getBitCode:Mn,_sqClosestPointOnSegment:Pn,isFlat:Fn,_flat:In,polylineCenter:Ln},zn={project:function(e){return new M(e.lng,e.lat)},unproject:function(e){return new B(e.y,e.x)},bounds:new F([-180,-90],[180,90])},Bn={R:6378137,R_MINOR:6356752.314245179,bounds:new F([-20037508.34279,-15496570.73972],[20037508.34279,18764656.23138]),project:function(e){var t=Math.PI/180,n=this.R,r=e.lat*t,i=this.R_MINOR/n,a=Math.sqrt(1-i*i),o=a*Math.sin(r),s=Math.tan(Math.PI/4-r/2)/((1-o)/(1+o))**(a/2);return r=-n*Math.log(Math.max(s,1e-10)),new M(e.lng*t*n,r)},unproject:function(e){for(var t=180/Math.PI,n=this.R,r=this.R_MINOR/n,i=Math.sqrt(1-r*r),a=Math.exp(-e.y/n),o=Math.PI/2-2*Math.atan(a),s=0,c=.1,l;s<15&&Math.abs(c)>1e-7;s++)l=i*Math.sin(o),l=((1-l)/(1+l))**(i/2),c=Math.PI/2-2*Math.atan(a*l)-o,o+=c;return new B(o*t,e.x*t/n)}},Vn={__proto__:null,LonLat:zn,Mercator:Bn,SphericalMercator:ne},Hn=n({},H,{code:`EPSG:3395`,projection:Bn,transformation:function(){var e=.5/(Math.PI*Bn.R);return ie(e,.5,-e,.5)}()}),Un=n({},H,{code:`EPSG:4326`,projection:zn,transformation:ie(1/180,1,-1/180,.5)}),Wn=n({},ee,{projection:zn,transformation:ie(1,0,-1,0),scale:function(e){return 2**e},zoom:function(e){return Math.log(e)/Math.LN2},distance:function(e,t){var n=t.lng-e.lng,r=t.lat-e.lat;return Math.sqrt(n*n+r*r)},infinite:!0});ee.Earth=H,ee.EPSG3395=Hn,ee.EPSG3857=ae,ee.EPSG900913=oe,ee.EPSG4326=Un,ee.Simple=Wn;var Gn=j.extend({options:{pane:`overlayPane`,attribution:null,bubblingMouseEvents:!0},addTo:function(e){return e.addLayer(this),this},remove:function(){return this.removeFrom(this._map||this._mapToAdd)},removeFrom:function(e){return e&&e.removeLayer(this),this},getPane:function(e){return this._map.getPane(e?this.options[e]||e:this.options.pane)},addInteractiveTarget:function(e){return this._map._targets[o(e)]=this,this},removeInteractiveTarget:function(e){return delete this._map._targets[o(e)],this},getAttribution:function(){return this.options.attribution},_layerAdd:function(e){var t=e.target;if(t.hasLayer(this)){if(this._map=t,this._zoomAnimated=t._zoomAnimated,this.getEvents){var n=this.getEvents();t.on(n,this),this.once(`remove`,function(){t.off(n,this)},this)}this.onAdd(t),this.fire(`add`),t.fire(`layeradd`,{layer:this})}}});rn.include({addLayer:function(e){if(!e._layerAdd)throw Error(`The provided object is not a Layer.`);var t=o(e);return this._layers[t]||(this._layers[t]=e,e._mapToAdd=this,e.beforeAdd&&e.beforeAdd(this),this.whenReady(e._layerAdd,e)),this},removeLayer:function(e){var t=o(e);return this._layers[t]&&(this._loaded&&e.onRemove(this),delete this._layers[t],this._loaded&&(this.fire(`layerremove`,{layer:e}),e.fire(`remove`)),e._map=e._mapToAdd=null),this},hasLayer:function(e){return o(e)in this._layers},eachLayer:function(e,t){for(var n in this._layers)e.call(t,this._layers[n]);return this},_addLayers:function(e){e=e?_(e)?e:[e]:[];for(var t=0,n=e.length;t<n;t++)this.addLayer(e[t])},_addZoomLimit:function(e){(!isNaN(e.options.maxZoom)||!isNaN(e.options.minZoom))&&(this._zoomBoundLayers[o(e)]=e,this._updateZoomLevels())},_removeZoomLimit:function(e){var t=o(e);this._zoomBoundLayers[t]&&(delete this._zoomBoundLayers[t],this._updateZoomLevels())},_updateZoomLevels:function(){var e=1/0,t=-1/0,n=this._getZoomSpan();for(var r in this._zoomBoundLayers){var i=this._zoomBoundLayers[r].options;e=i.minZoom===void 0?e:Math.min(e,i.minZoom),t=i.maxZoom===void 0?t:Math.max(t,i.maxZoom)}this._layersMaxZoom=t===-1/0?void 0:t,this._layersMinZoom=e===1/0?void 0:e,n!==this._getZoomSpan()&&this.fire(`zoomlevelschange`),this.options.maxZoom===void 0&&this._layersMaxZoom&&this.getZoom()>this._layersMaxZoom&&this.setZoom(this._layersMaxZoom),this.options.minZoom===void 0&&this._layersMinZoom&&this.getZoom()<this._layersMinZoom&&this.setZoom(this._layersMinZoom)}});var Kn=Gn.extend({initialize:function(e,t){p(this,t),this._layers={};var n,r;if(e)for(n=0,r=e.length;n<r;n++)this.addLayer(e[n])},addLayer:function(e){var t=this.getLayerId(e);return this._layers[t]=e,this._map&&this._map.addLayer(e),this},removeLayer:function(e){var t=e in this._layers?e:this.getLayerId(e);return this._map&&this._layers[t]&&this._map.removeLayer(this._layers[t]),delete this._layers[t],this},hasLayer:function(e){return(typeof e==`number`?e:this.getLayerId(e))in this._layers},clearLayers:function(){return this.eachLayer(this.removeLayer,this)},invoke:function(e){var t=Array.prototype.slice.call(arguments,1),n,r;for(n in this._layers)r=this._layers[n],r[e]&&r[e].apply(r,t);return this},onAdd:function(e){this.eachLayer(e.addLayer,e)},onRemove:function(e){this.eachLayer(e.removeLayer,e)},eachLayer:function(e,t){for(var n in this._layers)e.call(t,this._layers[n]);return this},getLayer:function(e){return this._layers[e]},getLayers:function(){var e=[];return this.eachLayer(e.push,e),e},setZIndex:function(e){return this.invoke(`setZIndex`,e)},getLayerId:function(e){return o(e)}}),qn=function(e,t){return new Kn(e,t)},Jn=Kn.extend({addLayer:function(e){return this.hasLayer(e)?this:(e.addEventParent(this),Kn.prototype.addLayer.call(this,e),this.fire(`layeradd`,{layer:e}))},removeLayer:function(e){return this.hasLayer(e)?(e in this._layers&&(e=this._layers[e]),e.removeEventParent(this),Kn.prototype.removeLayer.call(this,e),this.fire(`layerremove`,{layer:e})):this},setStyle:function(e){return this.invoke(`setStyle`,e)},bringToFront:function(){return this.invoke(`bringToFront`)},bringToBack:function(){return this.invoke(`bringToBack`)},getBounds:function(){var e=new R;for(var t in this._layers){var n=this._layers[t];e.extend(n.getBounds?n.getBounds():n.getLatLng())}return e}}),Yn=function(e,t){return new Jn(e,t)},Xn=O.extend({options:{popupAnchor:[0,0],tooltipAnchor:[0,0],crossOrigin:!1},initialize:function(e){p(this,e)},createIcon:function(e){return this._createIcon(`icon`,e)},createShadow:function(e){return this._createIcon(`shadow`,e)},_createIcon:function(e,t){var n=this._getIconUrl(e);if(!n){if(e===`icon`)throw Error(`iconUrl not set in Icon options (see the docs).`);return null}var r=this._createImg(n,t&&t.tagName===`IMG`?t:null);return this._setIconStyles(r,e),(this.options.crossOrigin||this.options.crossOrigin===``)&&(r.crossOrigin=this.options.crossOrigin===!0?``:this.options.crossOrigin),r},_setIconStyles:function(e,t){var n=this.options,r=n[t+`Size`];typeof r==`number`&&(r=[r,r]);var i=P(r),a=P(t===`shadow`&&n.shadowAnchor||n.iconAnchor||i&&i.divideBy(2,!0));e.className=`leaflet-marker-`+t+` `+(n.className||``),a&&(e.style.marginLeft=-a.x+`px`,e.style.marginTop=-a.y+`px`),i&&(e.style.width=i.x+`px`,e.style.height=i.y+`px`)},_createImg:function(e,t){return t||=document.createElement(`img`),t.src=e,t},_getIconUrl:function(e){return q.retina&&this.options[e+`RetinaUrl`]||this.options[e+`Url`]}});function Zn(e){return new Xn(e)}var Qn=Xn.extend({options:{iconUrl:`marker-icon.png`,iconRetinaUrl:`marker-icon-2x.png`,shadowUrl:`marker-shadow.png`,iconSize:[25,41],iconAnchor:[12,41],popupAnchor:[1,-34],tooltipAnchor:[16,-28],shadowSize:[41,41]},_getIconUrl:function(e){return typeof Qn.imagePath!=`string`&&(Qn.imagePath=this._detectIconPath()),(this.options.imagePath||Qn.imagePath)+Xn.prototype._getIconUrl.call(this,e)},_stripUrl:function(e){var t=function(e,t,n){var r=t.exec(e);return r&&r[n]};return e=t(e,/^url\((['"])?(.+)\1\)$/,2),e&&t(e,/^(.*)marker-icon\.png$/,1)},_detectIconPath:function(){var e=Y(`div`,`leaflet-default-icon-path`,document.body),t=ft(e,`background-image`)||ft(e,`backgroundImage`);if(document.body.removeChild(e),t=this._stripUrl(t),t)return t;var n=document.querySelector(`link[href$="leaflet.css"]`);return n?n.href.substring(0,n.href.length-11-1):``}}),$n=hn.extend({initialize:function(e){this._marker=e},addHooks:function(){var e=this._marker._icon;this._draggable||=new vn(e,e,!0),this._draggable.on({dragstart:this._onDragStart,predrag:this._onPreDrag,drag:this._onDrag,dragend:this._onDragEnd},this).enable(),Z(e,`leaflet-marker-draggable`)},removeHooks:function(){this._draggable.off({dragstart:this._onDragStart,predrag:this._onPreDrag,drag:this._onDrag,dragend:this._onDragEnd},this).disable(),this._marker._icon&&_t(this._marker._icon,`leaflet-marker-draggable`)},moved:function(){return this._draggable&&this._draggable._moved},_adjustPan:function(e){var t=this._marker,n=t._map,r=this._marker.options.autoPanSpeed,i=this._marker.options.autoPanPadding,a=Tt(t._icon),o=n.getPixelBounds(),s=n.getPixelOrigin(),c=I(o.min._subtract(s).add(i),o.max._subtract(s).subtract(i));if(!c.contains(a)){var l=P((Math.max(c.max.x,a.x)-c.max.x)/(o.max.x-c.max.x)-(Math.min(c.min.x,a.x)-c.min.x)/(o.min.x-c.min.x),(Math.max(c.max.y,a.y)-c.max.y)/(o.max.y-c.max.y)-(Math.min(c.min.y,a.y)-c.min.y)/(o.min.y-c.min.y)).multiplyBy(r);n.panBy(l,{animate:!1}),this._draggable._newPos._add(l),this._draggable._startPos._add(l),wt(t._icon,this._draggable._newPos),this._onDrag(e),this._panRequest=T(this._adjustPan.bind(this,e))}},_onDragStart:function(){this._oldLatLng=this._marker.getLatLng(),this._marker.closePopup&&this._marker.closePopup(),this._marker.fire(`movestart`).fire(`dragstart`)},_onPreDrag:function(e){this._marker.options.autoPan&&(E(this._panRequest),this._panRequest=T(this._adjustPan.bind(this,e)))},_onDrag:function(e){var t=this._marker,n=t._shadow,r=Tt(t._icon),i=t._map.layerPointToLatLng(r);n&&wt(n,r),t._latlng=i,e.latlng=i,e.oldLatLng=this._oldLatLng,t.fire(`move`,e).fire(`drag`,e)},_onDragEnd:function(e){E(this._panRequest),delete this._oldLatLng,this._marker.fire(`moveend`).fire(`dragend`,e)}}),er=Gn.extend({options:{icon:new Qn,interactive:!0,keyboard:!0,title:``,alt:`Marker`,zIndexOffset:0,opacity:1,riseOnHover:!1,riseOffset:250,pane:`markerPane`,shadowPane:`shadowPane`,bubblingMouseEvents:!1,autoPanOnFocus:!0,draggable:!1,autoPan:!1,autoPanPadding:[50,50],autoPanSpeed:10},initialize:function(e,t){p(this,t),this._latlng=V(e)},onAdd:function(e){this._zoomAnimated=this._zoomAnimated&&e.options.markerZoomAnimation,this._zoomAnimated&&e.on(`zoomanim`,this._animateZoom,this),this._initIcon(),this.update()},onRemove:function(e){this.dragging&&this.dragging.enabled()&&(this.options.draggable=!0,this.dragging.removeHooks()),delete this.dragging,this._zoomAnimated&&e.off(`zoomanim`,this._animateZoom,this),this._removeIcon(),this._removeShadow()},getEvents:function(){return{zoom:this.update,viewreset:this.update}},getLatLng:function(){return this._latlng},setLatLng:function(e){var t=this._latlng;return this._latlng=V(e),this.update(),this.fire(`move`,{oldLatLng:t,latlng:this._latlng})},setZIndexOffset:function(e){return this.options.zIndexOffset=e,this.update()},getIcon:function(){return this.options.icon},setIcon:function(e){return this.options.icon=e,this._map&&(this._initIcon(),this.update()),this._popup&&this.bindPopup(this._popup,this._popup.options),this},getElement:function(){return this._icon},update:function(){if(this._icon&&this._map){var e=this._map.latLngToLayerPoint(this._latlng).round();this._setPos(e)}return this},_initIcon:function(){var e=this.options,t=`leaflet-zoom-`+(this._zoomAnimated?`animated`:`hide`),n=e.icon.createIcon(this._icon),r=!1;n!==this._icon&&(this._icon&&this._removeIcon(),r=!0,e.title&&(n.title=e.title),n.tagName===`IMG`&&(n.alt=e.alt||``)),Z(n,t),e.keyboard&&(n.tabIndex=`0`,n.setAttribute(`role`,`button`)),this._icon=n,e.riseOnHover&&this.on({mouseover:this._bringToFront,mouseout:this._resetZIndex}),this.options.autoPanOnFocus&&Q(n,`focus`,this._panOnFocus,this);var i=e.icon.createShadow(this._shadow),a=!1;i!==this._shadow&&(this._removeShadow(),a=!0),i&&(Z(i,t),i.alt=``),this._shadow=i,e.opacity<1&&this._updateOpacity(),r&&this.getPane().appendChild(this._icon),this._initInteraction(),i&&a&&this.getPane(e.shadowPane).appendChild(this._shadow)},_removeIcon:function(){this.options.riseOnHover&&this.off({mouseover:this._bringToFront,mouseout:this._resetZIndex}),this.options.autoPanOnFocus&&Bt(this._icon,`focus`,this._panOnFocus,this),X(this._icon),this.removeInteractiveTarget(this._icon),this._icon=null},_removeShadow:function(){this._shadow&&X(this._shadow),this._shadow=null},_setPos:function(e){this._icon&&wt(this._icon,e),this._shadow&&wt(this._shadow,e),this._zIndex=e.y+this.options.zIndexOffset,this._resetZIndex()},_updateZIndex:function(e){this._icon&&(this._icon.style.zIndex=this._zIndex+e)},_animateZoom:function(e){var t=this._map._latLngToNewLayerPoint(this._latlng,e.zoom,e.center).round();this._setPos(t)},_initInteraction:function(){if(this.options.interactive&&(Z(this._icon,`leaflet-interactive`),this.addInteractiveTarget(this._icon),$n)){var e=this.options.draggable;this.dragging&&(e=this.dragging.enabled(),this.dragging.disable()),this.dragging=new $n(this),e&&this.dragging.enable()}},setOpacity:function(e){return this.options.opacity=e,this._map&&this._updateOpacity(),this},_updateOpacity:function(){var e=this.options.opacity;this._icon&&bt(this._icon,e),this._shadow&&bt(this._shadow,e)},_bringToFront:function(){this._updateZIndex(this.options.riseOffset)},_resetZIndex:function(){this._updateZIndex(0)},_panOnFocus:function(){var e=this._map;if(e){var t=this.options.icon.options,n=t.iconSize?P(t.iconSize):P(0,0),r=t.iconAnchor?P(t.iconAnchor):P(0,0);e.panInside(this._latlng,{paddingTopLeft:r,paddingBottomRight:n.subtract(r)})}},_getPopupAnchor:function(){return this.options.icon.options.popupAnchor},_getTooltipAnchor:function(){return this.options.icon.options.tooltipAnchor}});function tr(e,t){return new er(e,t)}var nr=Gn.extend({options:{stroke:!0,color:`#3388ff`,weight:3,opacity:1,lineCap:`round`,lineJoin:`round`,dashArray:null,dashOffset:null,fill:!1,fillColor:null,fillOpacity:.2,fillRule:`evenodd`,interactive:!0,bubblingMouseEvents:!0},beforeAdd:function(e){this._renderer=e.getRenderer(this)},onAdd:function(){this._renderer._initPath(this),this._reset(),this._renderer._addPath(this)},onRemove:function(){this._renderer._removePath(this)},redraw:function(){return this._map&&this._renderer._updatePath(this),this},setStyle:function(e){return p(this,e),this._renderer&&(this._renderer._updateStyle(this),this.options.stroke&&e&&Object.prototype.hasOwnProperty.call(e,`weight`)&&this._updateBounds()),this},bringToFront:function(){return this._renderer&&this._renderer._bringToFront(this),this},bringToBack:function(){return this._renderer&&this._renderer._bringToBack(this),this},getElement:function(){return this._path},_reset:function(){this._project(),this._update()},_clickTolerance:function(){return(this.options.stroke?this.options.weight/2:0)+(this._renderer.options.tolerance||0)}}),rr=nr.extend({options:{fill:!0,radius:10},initialize:function(e,t){p(this,t),this._latlng=V(e),this._radius=this.options.radius},setLatLng:function(e){var t=this._latlng;return this._latlng=V(e),this.redraw(),this.fire(`move`,{oldLatLng:t,latlng:this._latlng})},getLatLng:function(){return this._latlng},setRadius:function(e){return this.options.radius=this._radius=e,this.redraw()},getRadius:function(){return this._radius},setStyle:function(e){var t=e&&e.radius||this._radius;return nr.prototype.setStyle.call(this,e),this.setRadius(t),this},_project:function(){this._point=this._map.latLngToLayerPoint(this._latlng),this._updateBounds()},_updateBounds:function(){var e=this._radius,t=this._radiusY||e,n=this._clickTolerance(),r=[e+n,t+n];this._pxBounds=new F(this._point.subtract(r),this._point.add(r))},_update:function(){this._map&&this._updatePath()},_updatePath:function(){this._renderer._updateCircle(this)},_empty:function(){return this._radius&&!this._renderer._bounds.intersects(this._pxBounds)},_containsPoint:function(e){return e.distanceTo(this._point)<=this._radius+this._clickTolerance()}});function ir(e,t){return new rr(e,t)}var ar=rr.extend({initialize:function(e,t,r){if(typeof t==`number`&&(t=n({},r,{radius:t})),p(this,t),this._latlng=V(e),isNaN(this.options.radius))throw Error(`Circle radius cannot be NaN`);this._mRadius=this.options.radius},setRadius:function(e){return this._mRadius=e,this.redraw()},getRadius:function(){return this._mRadius},getBounds:function(){var e=[this._radius,this._radiusY||this._radius];return new R(this._map.layerPointToLatLng(this._point.subtract(e)),this._map.layerPointToLatLng(this._point.add(e)))},setStyle:nr.prototype.setStyle,_project:function(){var e=this._latlng.lng,t=this._latlng.lat,n=this._map,r=n.options.crs;if(r.distance===H.distance){var i=Math.PI/180,a=this._mRadius/H.R/i,o=n.project([t+a,e]),s=n.project([t-a,e]),c=o.add(s).divideBy(2),l=n.unproject(c).lat,u=Math.acos((Math.cos(a*i)-Math.sin(t*i)*Math.sin(l*i))/(Math.cos(t*i)*Math.cos(l*i)))/i;(isNaN(u)||u===0)&&(u=a/Math.cos(Math.PI/180*t)),this._point=c.subtract(n.getPixelOrigin()),this._radius=isNaN(u)?0:c.x-n.project([l,e-u]).x,this._radiusY=c.y-o.y}else{var d=r.unproject(r.project(this._latlng).subtract([this._mRadius,0]));this._point=n.latLngToLayerPoint(this._latlng),this._radius=this._point.x-n.latLngToLayerPoint(d).x}this._updateBounds()}});function or(e,t,n){return new ar(e,t,n)}var sr=nr.extend({options:{smoothFactor:1,noClip:!1},initialize:function(e,t){p(this,t),this._setLatLngs(e)},getLatLngs:function(){return this._latlngs},setLatLngs:function(e){return this._setLatLngs(e),this.redraw()},isEmpty:function(){return!this._latlngs.length},closestLayerPoint:function(e){for(var t=1/0,n=null,r=Pn,i,a,o=0,s=this._parts.length;o<s;o++)for(var c=this._parts[o],l=1,u=c.length;l<u;l++){i=c[l-1],a=c[l];var d=r(e,i,a,!0);d<t&&(t=d,n=r(e,i,a))}return n&&(n.distance=Math.sqrt(t)),n},getCenter:function(){if(!this._map)throw Error(`Must add layer to map before using getCenter()`);return Ln(this._defaultShape(),this._map.options.crs)},getBounds:function(){return this._bounds},addLatLng:function(e,t){return t||=this._defaultShape(),e=V(e),t.push(e),this._bounds.extend(e),this.redraw()},_setLatLngs:function(e){this._bounds=new R,this._latlngs=this._convertLatLngs(e)},_defaultShape:function(){return Fn(this._latlngs)?this._latlngs:this._latlngs[0]},_convertLatLngs:function(e){for(var t=[],n=Fn(e),r=0,i=e.length;r<i;r++)n?(t[r]=V(e[r]),this._bounds.extend(t[r])):t[r]=this._convertLatLngs(e[r]);return t},_project:function(){var e=new F;this._rings=[],this._projectLatlngs(this._latlngs,this._rings,e),this._bounds.isValid()&&e.isValid()&&(this._rawPxBounds=e,this._updateBounds())},_updateBounds:function(){var e=this._clickTolerance(),t=new M(e,e);this._rawPxBounds&&(this._pxBounds=new F([this._rawPxBounds.min.subtract(t),this._rawPxBounds.max.add(t)]))},_projectLatlngs:function(e,t,n){var r=e[0]instanceof B,i=e.length,a,o;if(r){for(o=[],a=0;a<i;a++)o[a]=this._map.latLngToLayerPoint(e[a]),n.extend(o[a]);t.push(o)}else for(a=0;a<i;a++)this._projectLatlngs(e[a],t,n)},_clipPoints:function(){var e=this._renderer._bounds;if(this._parts=[],this._pxBounds&&this._pxBounds.intersects(e)){if(this.options.noClip)this._parts=this._rings;else for(var t=this._parts,n=0,r,i=0,a=this._rings.length,o,s,c;n<a;n++)for(c=this._rings[n],r=0,o=c.length;r<o-1;r++)s=An(c[r],c[r+1],e,r,!0),s&&(t[i]=t[i]||[],t[i].push(s[0]),(s[1]!==c[r+1]||r===o-2)&&(t[i].push(s[1]),i++))}},_simplifyPoints:function(){for(var e=this._parts,t=this.options.smoothFactor,n=0,r=e.length;n<r;n++)e[n]=Cn(e[n],t)},_update:function(){this._map&&(this._clipPoints(),this._simplifyPoints(),this._updatePath())},_updatePath:function(){this._renderer._updatePoly(this)},_containsPoint:function(e,t){var n,r,i,a,o,s,c=this._clickTolerance();if(!this._pxBounds||!this._pxBounds.contains(e))return!1;for(n=0,a=this._parts.length;n<a;n++)for(s=this._parts[n],r=0,o=s.length,i=o-1;r<o;i=r++)if((t||r!==0)&&wn(e,s[i],s[r])<=c)return!0;return!1}});function cr(e,t){return new sr(e,t)}sr._flat=In;var lr=sr.extend({options:{fill:!0},isEmpty:function(){return!this._latlngs.length||!this._latlngs[0].length},getCenter:function(){if(!this._map)throw Error(`Must add layer to map before using getCenter()`);return bn(this._defaultShape(),this._map.options.crs)},_convertLatLngs:function(e){var t=sr.prototype._convertLatLngs.call(this,e),n=t.length;return n>=2&&t[0]instanceof B&&t[0].equals(t[n-1])&&t.pop(),t},_setLatLngs:function(e){sr.prototype._setLatLngs.call(this,e),Fn(this._latlngs)&&(this._latlngs=[this._latlngs])},_defaultShape:function(){return Fn(this._latlngs[0])?this._latlngs[0]:this._latlngs[0][0]},_clipPoints:function(){var e=this._renderer._bounds,t=this.options.weight,n=new M(t,t);if(e=new F(e.min.subtract(n),e.max.add(n)),this._parts=[],this._pxBounds&&this._pxBounds.intersects(e)){if(this.options.noClip)this._parts=this._rings;else for(var r=0,i=this._rings.length,a;r<i;r++)a=yn(this._rings[r],e,!0),a.length&&this._parts.push(a)}},_updatePath:function(){this._renderer._updatePoly(this,!0)},_containsPoint:function(e){var t=!1,n,r,i,a,o,s,c,l;if(!this._pxBounds||!this._pxBounds.contains(e))return!1;for(a=0,c=this._parts.length;a<c;a++)for(n=this._parts[a],o=0,l=n.length,s=l-1;o<l;s=o++)r=n[o],i=n[s],r.y>e.y!=i.y>e.y&&e.x<(i.x-r.x)*(e.y-r.y)/(i.y-r.y)+r.x&&(t=!t);return t||sr.prototype._containsPoint.call(this,e,!0)}});function ur(e,t){return new lr(e,t)}var dr=Jn.extend({initialize:function(e,t){p(this,t),this._layers={},e&&this.addData(e)},addData:function(e){var t=_(e)?e:e.features,n,r,i;if(t){for(n=0,r=t.length;n<r;n++)i=t[n],(i.geometries||i.geometry||i.features||i.coordinates)&&this.addData(i);return this}var a=this.options;if(a.filter&&!a.filter(e))return this;var o=fr(e,a);return o?(o.feature=yr(e),o.defaultOptions=o.options,this.resetStyle(o),a.onEachFeature&&a.onEachFeature(e,o),this.addLayer(o)):this},resetStyle:function(e){return e===void 0?this.eachLayer(this.resetStyle,this):(e.options=n({},e.defaultOptions),this._setLayerStyle(e,this.options.style),this)},setStyle:function(e){return this.eachLayer(function(t){this._setLayerStyle(t,e)},this)},_setLayerStyle:function(e,t){e.setStyle&&(typeof t==`function`&&(t=t(e.feature)),e.setStyle(t))}});function fr(e,t){var n=e.type===`Feature`?e.geometry:e,r=n?n.coordinates:null,i=[],a=t&&t.pointToLayer,o=t&&t.coordsToLatLng||mr,s,c,l,u;if(!r&&!n)return null;switch(n.type){case`Point`:return s=o(r),pr(a,e,s,t);case`MultiPoint`:for(l=0,u=r.length;l<u;l++)s=o(r[l]),i.push(pr(a,e,s,t));return new Jn(i);case`LineString`:case`MultiLineString`:return c=hr(r,n.type===`LineString`?0:1,o),new sr(c,t);case`Polygon`:case`MultiPolygon`:return c=hr(r,n.type===`Polygon`?1:2,o),new lr(c,t);case`GeometryCollection`:for(l=0,u=n.geometries.length;l<u;l++){var d=fr({geometry:n.geometries[l],type:`Feature`,properties:e.properties},t);d&&i.push(d)}return new Jn(i);case`FeatureCollection`:for(l=0,u=n.features.length;l<u;l++){var f=fr(n.features[l],t);f&&i.push(f)}return new Jn(i);default:throw Error(`Invalid GeoJSON object.`)}}function pr(e,t,n,r){return e?e(t,n):new er(n,r&&r.markersInheritOptions&&r)}function mr(e){return new B(e[1],e[0],e[2])}function hr(e,t,n){for(var r=[],i=0,a=e.length,o;i<a;i++)o=t?hr(e[i],t-1,n):(n||mr)(e[i]),r.push(o);return r}function gr(e,t){return e=V(e),e.alt===void 0?[u(e.lng,t),u(e.lat,t)]:[u(e.lng,t),u(e.lat,t),u(e.alt,t)]}function _r(e,t,n,r){for(var i=[],a=0,o=e.length;a<o;a++)i.push(t?_r(e[a],Fn(e[a])?0:t-1,n,r):gr(e[a],r));return!t&&n&&i.length>0&&i.push(i[0].slice()),i}function vr(e,t){return e.feature?n({},e.feature,{geometry:t}):yr(t)}function yr(e){return e.type===`Feature`||e.type===`FeatureCollection`?e:{type:`Feature`,properties:{},geometry:e}}var br={toGeoJSON:function(e){return vr(this,{type:`Point`,coordinates:gr(this.getLatLng(),e)})}};er.include(br),ar.include(br),rr.include(br),sr.include({toGeoJSON:function(e){var t=!Fn(this._latlngs),n=_r(this._latlngs,+!!t,!1,e);return vr(this,{type:(t?`Multi`:``)+`LineString`,coordinates:n})}}),lr.include({toGeoJSON:function(e){var t=!Fn(this._latlngs),n=t&&!Fn(this._latlngs[0]),r=_r(this._latlngs,n?2:+!!t,!0,e);return t||(r=[r]),vr(this,{type:(n?`Multi`:``)+`Polygon`,coordinates:r})}}),Kn.include({toMultiPoint:function(e){var t=[];return this.eachLayer(function(n){t.push(n.toGeoJSON(e).geometry.coordinates)}),vr(this,{type:`MultiPoint`,coordinates:t})},toGeoJSON:function(e){var t=this.feature&&this.feature.geometry&&this.feature.geometry.type;if(t===`MultiPoint`)return this.toMultiPoint(e);var n=t===`GeometryCollection`,r=[];return this.eachLayer(function(t){if(t.toGeoJSON){var i=t.toGeoJSON(e);if(n)r.push(i.geometry);else{var a=yr(i);a.type===`FeatureCollection`?r.push.apply(r,a.features):r.push(a)}}}),n?vr(this,{geometries:r,type:`GeometryCollection`}):{type:`FeatureCollection`,features:r}}});function xr(e,t){return new dr(e,t)}var Sr=xr,Cr=Gn.extend({options:{opacity:1,alt:``,interactive:!1,crossOrigin:!1,errorOverlayUrl:``,zIndex:1,className:``},initialize:function(e,t,n){this._url=e,this._bounds=z(t),p(this,n)},onAdd:function(){this._image||(this._initImage(),this.options.opacity<1&&this._updateOpacity()),this.options.interactive&&(Z(this._image,`leaflet-interactive`),this.addInteractiveTarget(this._image)),this.getPane().appendChild(this._image),this._reset()},onRemove:function(){X(this._image),this.options.interactive&&this.removeInteractiveTarget(this._image)},setOpacity:function(e){return this.options.opacity=e,this._image&&this._updateOpacity(),this},setStyle:function(e){return e.opacity&&this.setOpacity(e.opacity),this},bringToFront:function(){return this._map&&mt(this._image),this},bringToBack:function(){return this._map&&ht(this._image),this},setUrl:function(e){return this._url=e,this._image&&(this._image.src=e),this},setBounds:function(e){return this._bounds=z(e),this._map&&this._reset(),this},getEvents:function(){var e={zoom:this._reset,viewreset:this._reset};return this._zoomAnimated&&(e.zoomanim=this._animateZoom),e},setZIndex:function(e){return this.options.zIndex=e,this._updateZIndex(),this},getBounds:function(){return this._bounds},getElement:function(){return this._image},_initImage:function(){var e=this._url.tagName===`IMG`,t=this._image=e?this._url:Y(`img`);Z(t,`leaflet-image-layer`),this._zoomAnimated&&Z(t,`leaflet-zoom-animated`),this.options.className&&Z(t,this.options.className),t.onselectstart=l,t.onmousemove=l,t.onload=i(this.fire,this,`load`),t.onerror=i(this._overlayOnError,this,`error`),(this.options.crossOrigin||this.options.crossOrigin===``)&&(t.crossOrigin=this.options.crossOrigin===!0?``:this.options.crossOrigin),this.options.zIndex&&this._updateZIndex(),e?this._url=t.src:(t.src=this._url,t.alt=this.options.alt)},_animateZoom:function(e){var t=this._map.getZoomScale(e.zoom),n=this._map._latLngBoundsToNewLayerBounds(this._bounds,e.zoom,e.center).min;Ct(this._image,n,t)},_reset:function(){var e=this._image,t=new F(this._map.latLngToLayerPoint(this._bounds.getNorthWest()),this._map.latLngToLayerPoint(this._bounds.getSouthEast())),n=t.getSize();wt(e,t.min),e.style.width=n.x+`px`,e.style.height=n.y+`px`},_updateOpacity:function(){bt(this._image,this.options.opacity)},_updateZIndex:function(){this._image&&this.options.zIndex!==void 0&&this.options.zIndex!==null&&(this._image.style.zIndex=this.options.zIndex)},_overlayOnError:function(){this.fire(`error`);var e=this.options.errorOverlayUrl;e&&this._url!==e&&(this._url=e,this._image.src=e)},getCenter:function(){return this._bounds.getCenter()}}),wr=function(e,t,n){return new Cr(e,t,n)},Tr=Cr.extend({options:{autoplay:!0,loop:!0,keepAspectRatio:!0,muted:!1,playsInline:!0},_initImage:function(){var e=this._url.tagName===`VIDEO`,t=this._image=e?this._url:Y(`video`);if(Z(t,`leaflet-image-layer`),this._zoomAnimated&&Z(t,`leaflet-zoom-animated`),this.options.className&&Z(t,this.options.className),t.onselectstart=l,t.onmousemove=l,t.onloadeddata=i(this.fire,this,`load`),e){for(var n=t.getElementsByTagName(`source`),r=[],a=0;a<n.length;a++)r.push(n[a].src);this._url=n.length>0?r:[t.src]}else{_(this._url)||(this._url=[this._url]),!this.options.keepAspectRatio&&Object.prototype.hasOwnProperty.call(t.style,`objectFit`)&&(t.style.objectFit=`fill`),t.autoplay=!!this.options.autoplay,t.loop=!!this.options.loop,t.muted=!!this.options.muted,t.playsInline=!!this.options.playsInline;for(var o=0;o<this._url.length;o++){var s=Y(`source`);s.src=this._url[o],t.appendChild(s)}}}});function Er(e,t,n){return new Tr(e,t,n)}var Dr=Cr.extend({_initImage:function(){var e=this._image=this._url;Z(e,`leaflet-image-layer`),this._zoomAnimated&&Z(e,`leaflet-zoom-animated`),this.options.className&&Z(e,this.options.className),e.onselectstart=l,e.onmousemove=l}});function Or(e,t,n){return new Dr(e,t,n)}var kr=Gn.extend({options:{interactive:!1,offset:[0,0],className:``,pane:void 0,content:``},initialize:function(e,t){e&&(e instanceof B||_(e))?(this._latlng=V(e),p(this,t)):(p(this,e),this._source=t),this.options.content&&(this._content=this.options.content)},openOn:function(e){return e=arguments.length?e:this._source._map,e.hasLayer(this)||e.addLayer(this),this},close:function(){return this._map&&this._map.removeLayer(this),this},toggle:function(e){return this._map?this.close():(arguments.length?this._source=e:e=this._source,this._prepareOpen(),this.openOn(e._map)),this},onAdd:function(e){this._zoomAnimated=e._zoomAnimated,this._container||this._initLayout(),e._fadeAnimated&&bt(this._container,0),clearTimeout(this._removeTimeout),this.getPane().appendChild(this._container),this.update(),e._fadeAnimated&&bt(this._container,1),this.bringToFront(),this.options.interactive&&(Z(this._container,`leaflet-interactive`),this.addInteractiveTarget(this._container))},onRemove:function(e){e._fadeAnimated?(bt(this._container,0),this._removeTimeout=setTimeout(i(X,void 0,this._container),200)):X(this._container),this.options.interactive&&(_t(this._container,`leaflet-interactive`),this.removeInteractiveTarget(this._container))},getLatLng:function(){return this._latlng},setLatLng:function(e){return this._latlng=V(e),this._map&&(this._updatePosition(),this._adjustPan()),this},getContent:function(){return this._content},setContent:function(e){return this._content=e,this.update(),this},getElement:function(){return this._container},update:function(){this._map&&(this._container.style.visibility=`hidden`,this._updateContent(),this._updateLayout(),this._updatePosition(),this._container.style.visibility=``,this._adjustPan())},getEvents:function(){var e={zoom:this._updatePosition,viewreset:this._updatePosition};return this._zoomAnimated&&(e.zoomanim=this._animateZoom),e},isOpen:function(){return!!this._map&&this._map.hasLayer(this)},bringToFront:function(){return this._map&&mt(this._container),this},bringToBack:function(){return this._map&&ht(this._container),this},_prepareOpen:function(e){var t=this._source;if(!t._map)return!1;if(t instanceof Jn){t=null;var n=this._source._layers;for(var r in n)if(n[r]._map){t=n[r];break}if(!t)return!1;this._source=t}if(!e){if(t.getCenter)e=t.getCenter();else if(t.getLatLng)e=t.getLatLng();else if(t.getBounds)e=t.getBounds().getCenter();else throw Error(`Unable to get source layer LatLng.`)}return this.setLatLng(e),this._map&&this.update(),!0},_updateContent:function(){if(this._content){var e=this._contentNode,t=typeof this._content==`function`?this._content(this._source||this):this._content;if(typeof t==`string`)e.innerHTML=t;else{for(;e.hasChildNodes();)e.removeChild(e.firstChild);e.appendChild(t)}this.fire(`contentupdate`)}},_updatePosition:function(){if(this._map){var e=this._map.latLngToLayerPoint(this._latlng),t=P(this.options.offset),n=this._getAnchor();this._zoomAnimated?wt(this._container,e.add(n)):t=t.add(e).add(n);var r=this._containerBottom=-t.y,i=this._containerLeft=-Math.round(this._containerWidth/2)+t.x;this._container.style.bottom=r+`px`,this._container.style.left=i+`px`}},_getAnchor:function(){return[0,0]}});rn.include({_initOverlay:function(e,t,n,r){var i=t;return i instanceof e||(i=new e(r).setContent(t)),n&&i.setLatLng(n),i}}),Gn.include({_initOverlay:function(e,t,n,r){var i=n;return i instanceof e?(p(i,r),i._source=this):(i=t&&!r?t:new e(r,this),i.setContent(n)),i}});var Ar=kr.extend({options:{pane:`popupPane`,offset:[0,7],maxWidth:300,minWidth:50,maxHeight:null,autoPan:!0,autoPanPaddingTopLeft:null,autoPanPaddingBottomRight:null,autoPanPadding:[5,5],keepInView:!1,closeButton:!0,autoClose:!0,closeOnEscapeKey:!0,className:``},openOn:function(e){return e=arguments.length?e:this._source._map,!e.hasLayer(this)&&e._popup&&e._popup.options.autoClose&&e.removeLayer(e._popup),e._popup=this,kr.prototype.openOn.call(this,e)},onAdd:function(e){kr.prototype.onAdd.call(this,e),e.fire(`popupopen`,{popup:this}),this._source&&(this._source.fire(`popupopen`,{popup:this},!0),this._source instanceof nr||this._source.on(`preclick`,Gt))},onRemove:function(e){kr.prototype.onRemove.call(this,e),e.fire(`popupclose`,{popup:this}),this._source&&(this._source.fire(`popupclose`,{popup:this},!0),this._source instanceof nr||this._source.off(`preclick`,Gt))},getEvents:function(){var e=kr.prototype.getEvents.call(this);return(this.options.closeOnClick===void 0?this._map.options.closePopupOnClick:this.options.closeOnClick)&&(e.preclick=this.close),this.options.keepInView&&(e.moveend=this._adjustPan),e},_initLayout:function(){var e=`leaflet-popup`,t=this._container=Y(`div`,e+` `+(this.options.className||``)+` leaflet-zoom-animated`),n=this._wrapper=Y(`div`,e+`-content-wrapper`,t);if(this._contentNode=Y(`div`,e+`-content`,n),qt(t),Kt(this._contentNode),Q(t,`contextmenu`,Gt),this._tipContainer=Y(`div`,e+`-tip-container`,t),this._tip=Y(`div`,e+`-tip`,this._tipContainer),this.options.closeButton){var r=this._closeButton=Y(`a`,e+`-close-button`,t);r.setAttribute(`role`,`button`),r.setAttribute(`aria-label`,`Close popup`),r.href=`#close`,r.innerHTML=`<span aria-hidden="true">&#215;</span>`,Q(r,`click`,function(e){Jt(e),this.close()},this)}},_updateLayout:function(){var e=this._contentNode,t=e.style;t.width=``,t.whiteSpace=`nowrap`;var n=e.offsetWidth;n=Math.min(n,this.options.maxWidth),n=Math.max(n,this.options.minWidth),t.width=n+1+`px`,t.whiteSpace=``,t.height=``;var r=e.offsetHeight,i=this.options.maxHeight,a=`leaflet-popup-scrolled`;i&&r>i?(t.height=i+`px`,Z(e,a)):_t(e,a),this._containerWidth=this._container.offsetWidth},_animateZoom:function(e){var t=this._map._latLngToNewLayerPoint(this._latlng,e.zoom,e.center),n=this._getAnchor();wt(this._container,t.add(n))},_adjustPan:function(){if(this.options.autoPan){if(this._map._panAnim&&this._map._panAnim.stop(),this._autopanning)this._autopanning=!1;else{var e=this._map,t=parseInt(ft(this._container,`marginBottom`),10)||0,n=this._container.offsetHeight+t,r=this._containerWidth,i=new M(this._containerLeft,-n-this._containerBottom);i._add(Tt(this._container));var a=e.layerPointToContainerPoint(i),o=P(this.options.autoPanPadding),s=P(this.options.autoPanPaddingTopLeft||o),c=P(this.options.autoPanPaddingBottomRight||o),l=e.getSize(),u=0,d=0;a.x+r+c.x>l.x&&(u=a.x+r-l.x+c.x),a.x-u-s.x<0&&(u=a.x-s.x),a.y+n+c.y>l.y&&(d=a.y+n-l.y+c.y),a.y-d-s.y<0&&(d=a.y-s.y),(u||d)&&(this.options.keepInView&&(this._autopanning=!0),e.fire(`autopanstart`).panBy([u,d]))}}},_getAnchor:function(){return P(this._source&&this._source._getPopupAnchor?this._source._getPopupAnchor():[0,0])}}),jr=function(e,t){return new Ar(e,t)};rn.mergeOptions({closePopupOnClick:!0}),rn.include({openPopup:function(e,t,n){return this._initOverlay(Ar,e,t,n).openOn(this),this},closePopup:function(e){return e=arguments.length?e:this._popup,e&&e.close(),this}}),Gn.include({bindPopup:function(e,t){return this._popup=this._initOverlay(Ar,this._popup,e,t),this._popupHandlersAdded||=(this.on({click:this._openPopup,keypress:this._onKeyPress,remove:this.closePopup,move:this._movePopup}),!0),this},unbindPopup:function(){return this._popup&&=(this.off({click:this._openPopup,keypress:this._onKeyPress,remove:this.closePopup,move:this._movePopup}),this._popupHandlersAdded=!1,null),this},openPopup:function(e){return this._popup&&(this instanceof Jn||(this._popup._source=this),this._popup._prepareOpen(e||this._latlng)&&this._popup.openOn(this._map)),this},closePopup:function(){return this._popup&&this._popup.close(),this},togglePopup:function(){return this._popup&&this._popup.toggle(this),this},isPopupOpen:function(){return this._popup?this._popup.isOpen():!1},setPopupContent:function(e){return this._popup&&this._popup.setContent(e),this},getPopup:function(){return this._popup},_openPopup:function(e){if(this._popup&&this._map){Yt(e);var t=e.layer||e.target;this._popup._source===t&&!(t instanceof nr)?this._map.hasLayer(this._popup)?this.closePopup():this.openPopup(e.latlng):(this._popup._source=t,this.openPopup(e.latlng))}},_movePopup:function(e){this._popup.setLatLng(e.latlng)},_onKeyPress:function(e){e.originalEvent.keyCode===13&&this._openPopup(e)}});var Mr=kr.extend({options:{pane:`tooltipPane`,offset:[0,0],direction:`auto`,permanent:!1,sticky:!1,opacity:.9},onAdd:function(e){kr.prototype.onAdd.call(this,e),this.setOpacity(this.options.opacity),e.fire(`tooltipopen`,{tooltip:this}),this._source&&(this.addEventParent(this._source),this._source.fire(`tooltipopen`,{tooltip:this},!0))},onRemove:function(e){kr.prototype.onRemove.call(this,e),e.fire(`tooltipclose`,{tooltip:this}),this._source&&(this.removeEventParent(this._source),this._source.fire(`tooltipclose`,{tooltip:this},!0))},getEvents:function(){var e=kr.prototype.getEvents.call(this);return this.options.permanent||(e.preclick=this.close),e},_initLayout:function(){var e=`leaflet-tooltip `+(this.options.className||``)+` leaflet-zoom-`+(this._zoomAnimated?`animated`:`hide`);this._contentNode=this._container=Y(`div`,e),this._container.setAttribute(`role`,`tooltip`),this._container.setAttribute(`id`,`leaflet-tooltip-`+o(this))},_updateLayout:function(){},_adjustPan:function(){},_setPosition:function(e){var t,n,r=this._map,i=this._container,a=r.latLngToContainerPoint(r.getCenter()),o=r.layerPointToContainerPoint(e),s=this.options.direction,c=i.offsetWidth,l=i.offsetHeight,u=P(this.options.offset),d=this._getAnchor();s===`top`?(t=c/2,n=l):s===`bottom`?(t=c/2,n=0):s===`center`?(t=c/2,n=l/2):s===`right`?(t=0,n=l/2):s===`left`?(t=c,n=l/2):o.x<a.x?(s=`right`,t=0,n=l/2):(s=`left`,t=c+(u.x+d.x)*2,n=l/2),e=e.subtract(P(t,n,!0)).add(u).add(d),_t(i,`leaflet-tooltip-right`),_t(i,`leaflet-tooltip-left`),_t(i,`leaflet-tooltip-top`),_t(i,`leaflet-tooltip-bottom`),Z(i,`leaflet-tooltip-`+s),wt(i,e)},_updatePosition:function(){var e=this._map.latLngToLayerPoint(this._latlng);this._setPosition(e)},setOpacity:function(e){this.options.opacity=e,this._container&&bt(this._container,e)},_animateZoom:function(e){var t=this._map._latLngToNewLayerPoint(this._latlng,e.zoom,e.center);this._setPosition(t)},_getAnchor:function(){return P(this._source&&this._source._getTooltipAnchor&&!this.options.sticky?this._source._getTooltipAnchor():[0,0])}}),Nr=function(e,t){return new Mr(e,t)};rn.include({openTooltip:function(e,t,n){return this._initOverlay(Mr,e,t,n).openOn(this),this},closeTooltip:function(e){return e.close(),this}}),Gn.include({bindTooltip:function(e,t){return this._tooltip&&this.isTooltipOpen()&&this.unbindTooltip(),this._tooltip=this._initOverlay(Mr,this._tooltip,e,t),this._initTooltipInteractions(),this._tooltip.options.permanent&&this._map&&this._map.hasLayer(this)&&this.openTooltip(),this},unbindTooltip:function(){return this._tooltip&&=(this._initTooltipInteractions(!0),this.closeTooltip(),null),this},_initTooltipInteractions:function(e){if(e||!this._tooltipHandlersAdded){var t=e?`off`:`on`,n={remove:this.closeTooltip,move:this._moveTooltip};this._tooltip.options.permanent?n.add=this._openTooltip:(n.mouseover=this._openTooltip,n.mouseout=this.closeTooltip,n.click=this._openTooltip,this._map?this._addFocusListeners():n.add=this._addFocusListeners),this._tooltip.options.sticky&&(n.mousemove=this._moveTooltip),this[t](n),this._tooltipHandlersAdded=!e}},openTooltip:function(e){return this._tooltip&&(this instanceof Jn||(this._tooltip._source=this),this._tooltip._prepareOpen(e)&&(this._tooltip.openOn(this._map),this.getElement?this._setAriaDescribedByOnLayer(this):this.eachLayer&&this.eachLayer(this._setAriaDescribedByOnLayer,this))),this},closeTooltip:function(){if(this._tooltip)return this._tooltip.close()},toggleTooltip:function(){return this._tooltip&&this._tooltip.toggle(this),this},isTooltipOpen:function(){return this._tooltip.isOpen()},setTooltipContent:function(e){return this._tooltip&&this._tooltip.setContent(e),this},getTooltip:function(){return this._tooltip},_addFocusListeners:function(){this.getElement?this._addFocusListenersOnLayer(this):this.eachLayer&&this.eachLayer(this._addFocusListenersOnLayer,this)},_addFocusListenersOnLayer:function(e){var t=typeof e.getElement==`function`&&e.getElement();t&&(Q(t,`focus`,function(){this._tooltip._source=e,this.openTooltip()},this),Q(t,`blur`,this.closeTooltip,this))},_setAriaDescribedByOnLayer:function(e){var t=typeof e.getElement==`function`&&e.getElement();t&&t.setAttribute(`aria-describedby`,this._tooltip._container.id)},_openTooltip:function(e){if(this._tooltip&&this._map){if(this._map.dragging&&this._map.dragging.moving()&&!this._openOnceFlag){this._openOnceFlag=!0;var t=this;this._map.once(`moveend`,function(){t._openOnceFlag=!1,t._openTooltip(e)})}else this._tooltip._source=e.layer||e.target,this.openTooltip(this._tooltip.options.sticky?e.latlng:void 0)}},_moveTooltip:function(e){var t=e.latlng,n,r;this._tooltip.options.sticky&&e.originalEvent&&(n=this._map.mouseEventToContainerPoint(e.originalEvent),r=this._map.containerPointToLayerPoint(n),t=this._map.layerPointToLatLng(r)),this._tooltip.setLatLng(t)}});var Pr=Xn.extend({options:{iconSize:[12,12],html:!1,bgPos:null,className:`leaflet-div-icon`},createIcon:function(e){var t=e&&e.tagName===`DIV`?e:document.createElement(`div`),n=this.options;if(n.html instanceof Element?(pt(t),t.appendChild(n.html)):t.innerHTML=n.html===!1?``:n.html,n.bgPos){var r=P(n.bgPos);t.style.backgroundPosition=-r.x+`px `+-r.y+`px`}return this._setIconStyles(t,`icon`),t},createShadow:function(){return null}});function Fr(e){return new Pr(e)}Xn.Default=Qn;var Ir=Gn.extend({options:{tileSize:256,opacity:1,updateWhenIdle:q.mobile,updateWhenZooming:!0,updateInterval:200,zIndex:1,bounds:null,minZoom:0,maxZoom:void 0,maxNativeZoom:void 0,minNativeZoom:void 0,noWrap:!1,pane:`tilePane`,className:``,keepBuffer:2},initialize:function(e){p(this,e)},onAdd:function(){this._initContainer(),this._levels={},this._tiles={},this._resetView()},beforeAdd:function(e){e._addZoomLimit(this)},onRemove:function(e){this._removeAllTiles(),X(this._container),e._removeZoomLimit(this),this._container=null,this._tileZoom=void 0},bringToFront:function(){return this._map&&(mt(this._container),this._setAutoZIndex(Math.max)),this},bringToBack:function(){return this._map&&(ht(this._container),this._setAutoZIndex(Math.min)),this},getContainer:function(){return this._container},setOpacity:function(e){return this.options.opacity=e,this._updateOpacity(),this},setZIndex:function(e){return this.options.zIndex=e,this._updateZIndex(),this},isLoading:function(){return this._loading},redraw:function(){if(this._map){this._removeAllTiles();var e=this._clampZoom(this._map.getZoom());e!==this._tileZoom&&(this._tileZoom=e,this._updateLevels()),this._update()}return this},getEvents:function(){var e={viewprereset:this._invalidateAll,viewreset:this._resetView,zoom:this._resetView,moveend:this._onMoveEnd};return this.options.updateWhenIdle||(this._onMove||=s(this._onMoveEnd,this.options.updateInterval,this),e.move=this._onMove),this._zoomAnimated&&(e.zoomanim=this._animateZoom),e},createTile:function(){return document.createElement(`div`)},getTileSize:function(){var e=this.options.tileSize;return e instanceof M?e:new M(e,e)},_updateZIndex:function(){this._container&&this.options.zIndex!==void 0&&this.options.zIndex!==null&&(this._container.style.zIndex=this.options.zIndex)},_setAutoZIndex:function(e){for(var t=this.getPane().children,n=-e(-1/0,1/0),r=0,i=t.length,a;r<i;r++)a=t[r].style.zIndex,t[r]!==this._container&&a&&(n=e(n,+a));isFinite(n)&&(this.options.zIndex=n+e(-1,1),this._updateZIndex())},_updateOpacity:function(){if(this._map&&!q.ielt9){bt(this._container,this.options.opacity);var e=+new Date,t=!1,n=!1;for(var r in this._tiles){var i=this._tiles[r];if(i.current&&i.loaded){var a=Math.min(1,(e-i.loaded)/200);bt(i.el,a),a<1?t=!0:(i.active?n=!0:this._onOpaqueTile(i),i.active=!0)}}n&&!this._noPrune&&this._pruneTiles(),t&&(E(this._fadeFrame),this._fadeFrame=T(this._updateOpacity,this))}},_onOpaqueTile:l,_initContainer:function(){this._container||(this._container=Y(`div`,`leaflet-layer `+(this.options.className||``)),this._updateZIndex(),this.options.opacity<1&&this._updateOpacity(),this.getPane().appendChild(this._container))},_updateLevels:function(){var e=this._tileZoom,t=this.options.maxZoom;if(e!==void 0){for(var n in this._levels)n=Number(n),this._levels[n].el.children.length||n===e?(this._levels[n].el.style.zIndex=t-Math.abs(e-n),this._onUpdateLevel(n)):(X(this._levels[n].el),this._removeTilesAtZoom(n),this._onRemoveLevel(n),delete this._levels[n]);var r=this._levels[e],i=this._map;return r||(r=this._levels[e]={},r.el=Y(`div`,`leaflet-tile-container leaflet-zoom-animated`,this._container),r.el.style.zIndex=t,r.origin=i.project(i.unproject(i.getPixelOrigin()),e).round(),r.zoom=e,this._setZoomTransform(r,i.getCenter(),i.getZoom()),r.el.offsetWidth,this._onCreateLevel(r)),this._level=r,r}},_onUpdateLevel:l,_onRemoveLevel:l,_onCreateLevel:l,_pruneTiles:function(){if(this._map){var e,t,n=this._map.getZoom();if(n>this.options.maxZoom||n<this.options.minZoom)this._removeAllTiles();else{for(e in this._tiles)t=this._tiles[e],t.retain=t.current;for(e in this._tiles)if(t=this._tiles[e],t.current&&!t.active){var r=t.coords;this._retainParent(r.x,r.y,r.z,r.z-5)||this._retainChildren(r.x,r.y,r.z,r.z+2)}for(e in this._tiles)this._tiles[e].retain||this._removeTile(e)}}},_removeTilesAtZoom:function(e){for(var t in this._tiles)this._tiles[t].coords.z===e&&this._removeTile(t)},_removeAllTiles:function(){for(var e in this._tiles)this._removeTile(e)},_invalidateAll:function(){for(var e in this._levels)X(this._levels[e].el),this._onRemoveLevel(Number(e)),delete this._levels[e];this._removeAllTiles(),this._tileZoom=void 0},_retainParent:function(e,t,n,r){var i=Math.floor(e/2),a=Math.floor(t/2),o=n-1,s=new M(+i,+a);s.z=+o;var c=this._tileCoordsToKey(s),l=this._tiles[c];return l&&l.active?(l.retain=!0,!0):(l&&l.loaded&&(l.retain=!0),o>r&&this._retainParent(i,a,o,r))},_retainChildren:function(e,t,n,r){for(var i=2*e;i<2*e+2;i++)for(var a=2*t;a<2*t+2;a++){var o=new M(i,a);o.z=n+1;var s=this._tileCoordsToKey(o),c=this._tiles[s];c&&c.active?c.retain=!0:(c&&c.loaded&&(c.retain=!0),n+1<r&&this._retainChildren(i,a,n+1,r))}},_resetView:function(e){var t=e&&(e.pinch||e.flyTo);this._setView(this._map.getCenter(),this._map.getZoom(),t,t)},_animateZoom:function(e){this._setView(e.center,e.zoom,!0,e.noUpdate)},_clampZoom:function(e){var t=this.options;return t.minNativeZoom!==void 0&&e<t.minNativeZoom?t.minNativeZoom:t.maxNativeZoom!==void 0&&t.maxNativeZoom<e?t.maxNativeZoom:e},_setView:function(e,t,n,r){var i=Math.round(t);i=this.options.maxZoom!==void 0&&i>this.options.maxZoom||this.options.minZoom!==void 0&&i<this.options.minZoom?void 0:this._clampZoom(i);var a=this.options.updateWhenZooming&&i!==this._tileZoom;(!r||a)&&(this._tileZoom=i,this._abortLoading&&this._abortLoading(),this._updateLevels(),this._resetGrid(),i!==void 0&&this._update(e),n||this._pruneTiles(),this._noPrune=!!n),this._setZoomTransforms(e,t)},_setZoomTransforms:function(e,t){for(var n in this._levels)this._setZoomTransform(this._levels[n],e,t)},_setZoomTransform:function(e,t,n){var r=this._map.getZoomScale(n,e.zoom),i=e.origin.multiplyBy(r).subtract(this._map._getNewPixelOrigin(t,n)).round();q.any3d?Ct(e.el,i,r):wt(e.el,i)},_resetGrid:function(){var e=this._map,t=e.options.crs,n=this._tileSize=this.getTileSize(),r=this._tileZoom,i=this._map.getPixelWorldBounds(this._tileZoom);i&&(this._globalTileRange=this._pxBoundsToTileRange(i)),this._wrapX=t.wrapLng&&!this.options.noWrap&&[Math.floor(e.project([0,t.wrapLng[0]],r).x/n.x),Math.ceil(e.project([0,t.wrapLng[1]],r).x/n.y)],this._wrapY=t.wrapLat&&!this.options.noWrap&&[Math.floor(e.project([t.wrapLat[0],0],r).y/n.x),Math.ceil(e.project([t.wrapLat[1],0],r).y/n.y)]},_onMoveEnd:function(){this._map&&!this._map._animatingZoom&&this._update()},_getTiledPixelBounds:function(e){var t=this._map,n=t._animatingZoom?Math.max(t._animateToZoom,t.getZoom()):t.getZoom(),r=t.getZoomScale(n,this._tileZoom),i=t.project(e,this._tileZoom).floor(),a=t.getSize().divideBy(r*2);return new F(i.subtract(a),i.add(a))},_update:function(e){var t=this._map;if(t){var n=this._clampZoom(t.getZoom());if(e===void 0&&(e=t.getCenter()),this._tileZoom!==void 0){var r=this._getTiledPixelBounds(e),i=this._pxBoundsToTileRange(r),a=i.getCenter(),o=[],s=this.options.keepBuffer,c=new F(i.getBottomLeft().subtract([s,-s]),i.getTopRight().add([s,-s]));if(!(isFinite(i.min.x)&&isFinite(i.min.y)&&isFinite(i.max.x)&&isFinite(i.max.y)))throw Error(`Attempted to load an infinite number of tiles`);for(var l in this._tiles){var u=this._tiles[l].coords;(u.z!==this._tileZoom||!c.contains(new M(u.x,u.y)))&&(this._tiles[l].current=!1)}if(Math.abs(n-this._tileZoom)>1)this._setView(e,n);else{for(var d=i.min.y;d<=i.max.y;d++)for(var f=i.min.x;f<=i.max.x;f++){var p=new M(f,d);if(p.z=this._tileZoom,this._isValidTile(p)){var m=this._tiles[this._tileCoordsToKey(p)];m?m.current=!0:o.push(p)}}if(o.sort(function(e,t){return e.distanceTo(a)-t.distanceTo(a)}),o.length!==0){this._loading||(this._loading=!0,this.fire(`loading`));var h=document.createDocumentFragment();for(f=0;f<o.length;f++)this._addTile(o[f],h);this._level.el.appendChild(h)}}}}},_isValidTile:function(e){var t=this._map.options.crs;if(!t.infinite){var n=this._globalTileRange;if(!t.wrapLng&&(e.x<n.min.x||e.x>n.max.x)||!t.wrapLat&&(e.y<n.min.y||e.y>n.max.y))return!1}if(!this.options.bounds)return!0;var r=this._tileCoordsToBounds(e);return z(this.options.bounds).overlaps(r)},_keyToBounds:function(e){return this._tileCoordsToBounds(this._keyToTileCoords(e))},_tileCoordsToNwSe:function(e){var t=this._map,n=this.getTileSize(),r=e.scaleBy(n),i=r.add(n);return[t.unproject(r,e.z),t.unproject(i,e.z)]},_tileCoordsToBounds:function(e){var t=this._tileCoordsToNwSe(e),n=new R(t[0],t[1]);return this.options.noWrap||(n=this._map.wrapLatLngBounds(n)),n},_tileCoordsToKey:function(e){return e.x+`:`+e.y+`:`+e.z},_keyToTileCoords:function(e){var t=e.split(`:`),n=new M(+t[0],+t[1]);return n.z=+t[2],n},_removeTile:function(e){var t=this._tiles[e];t&&(X(t.el),delete this._tiles[e],this.fire(`tileunload`,{tile:t.el,coords:this._keyToTileCoords(e)}))},_initTile:function(e){Z(e,`leaflet-tile`);var t=this.getTileSize();e.style.width=t.x+`px`,e.style.height=t.y+`px`,e.onselectstart=l,e.onmousemove=l,q.ielt9&&this.options.opacity<1&&bt(e,this.options.opacity)},_addTile:function(e,t){var n=this._getTilePos(e),r=this._tileCoordsToKey(e),a=this.createTile(this._wrapCoords(e),i(this._tileReady,this,e));this._initTile(a),this.createTile.length<2&&T(i(this._tileReady,this,e,null,a)),wt(a,n),this._tiles[r]={el:a,coords:e,current:!0},t.appendChild(a),this.fire(`tileloadstart`,{tile:a,coords:e})},_tileReady:function(e,t,n){t&&this.fire(`tileerror`,{error:t,tile:n,coords:e});var r=this._tileCoordsToKey(e);n=this._tiles[r],n&&(n.loaded=+new Date,this._map._fadeAnimated?(bt(n.el,0),E(this._fadeFrame),this._fadeFrame=T(this._updateOpacity,this)):(n.active=!0,this._pruneTiles()),t||(Z(n.el,`leaflet-tile-loaded`),this.fire(`tileload`,{tile:n.el,coords:e})),this._noTilesToLoad()&&(this._loading=!1,this.fire(`load`),q.ielt9||!this._map._fadeAnimated?T(this._pruneTiles,this):setTimeout(i(this._pruneTiles,this),250)))},_getTilePos:function(e){return e.scaleBy(this.getTileSize()).subtract(this._level.origin)},_wrapCoords:function(e){var t=new M(this._wrapX?c(e.x,this._wrapX):e.x,this._wrapY?c(e.y,this._wrapY):e.y);return t.z=e.z,t},_pxBoundsToTileRange:function(e){var t=this.getTileSize();return new F(e.min.unscaleBy(t).floor(),e.max.unscaleBy(t).ceil().subtract([1,1]))},_noTilesToLoad:function(){for(var e in this._tiles)if(!this._tiles[e].loaded)return!1;return!0}});function Lr(e){return new Ir(e)}var Rr=Ir.extend({options:{minZoom:0,maxZoom:18,subdomains:`abc`,errorTileUrl:``,zoomOffset:0,tms:!1,zoomReverse:!1,detectRetina:!1,crossOrigin:!1,referrerPolicy:!1},initialize:function(e,t){this._url=e,t=p(this,t),t.detectRetina&&q.retina&&t.maxZoom>0?(t.tileSize=Math.floor(t.tileSize/2),t.zoomReverse?(t.zoomOffset--,t.minZoom=Math.min(t.maxZoom,t.minZoom+1)):(t.zoomOffset++,t.maxZoom=Math.max(t.minZoom,t.maxZoom-1)),t.minZoom=Math.max(0,t.minZoom)):t.zoomReverse?t.minZoom=Math.min(t.maxZoom,t.minZoom):t.maxZoom=Math.max(t.minZoom,t.maxZoom),typeof t.subdomains==`string`&&(t.subdomains=t.subdomains.split(``)),this.on(`tileunload`,this._onTileRemove)},setUrl:function(e,t){return this._url===e&&t===void 0&&(t=!0),this._url=e,t||this.redraw(),this},createTile:function(e,t){var n=document.createElement(`img`);return Q(n,`load`,i(this._tileOnLoad,this,t,n)),Q(n,`error`,i(this._tileOnError,this,t,n)),(this.options.crossOrigin||this.options.crossOrigin===``)&&(n.crossOrigin=this.options.crossOrigin===!0?``:this.options.crossOrigin),typeof this.options.referrerPolicy==`string`&&(n.referrerPolicy=this.options.referrerPolicy),n.alt=``,n.src=this.getTileUrl(e),n},getTileUrl:function(e){var t={r:q.retina?`@2x`:``,s:this._getSubdomain(e),x:e.x,y:e.y,z:this._getZoomForUrl()};if(this._map&&!this._map.options.crs.infinite){var r=this._globalTileRange.max.y-e.y;this.options.tms&&(t.y=r),t[`-y`]=r}return g(this._url,n(t,this.options))},_tileOnLoad:function(e,t){q.ielt9?setTimeout(i(e,this,null,t),0):e(null,t)},_tileOnError:function(e,t,n){var r=this.options.errorTileUrl;r&&t.getAttribute(`src`)!==r&&(t.src=r),e(n,t)},_onTileRemove:function(e){e.tile.onload=null},_getZoomForUrl:function(){var e=this._tileZoom,t=this.options.maxZoom,n=this.options.zoomReverse,r=this.options.zoomOffset;return n&&(e=t-e),e+r},_getSubdomain:function(e){var t=Math.abs(e.x+e.y)%this.options.subdomains.length;return this.options.subdomains[t]},_abortLoading:function(){var e,t;for(e in this._tiles)if(this._tiles[e].coords.z!==this._tileZoom&&(t=this._tiles[e].el,t.onload=l,t.onerror=l,!t.complete)){t.src=y;var n=this._tiles[e].coords;X(t),delete this._tiles[e],this.fire(`tileabort`,{tile:t,coords:n})}},_removeTile:function(e){var t=this._tiles[e];if(t)return t.el.setAttribute(`src`,y),Ir.prototype._removeTile.call(this,e)},_tileReady:function(e,t,n){if(!(!this._map||n&&n.getAttribute(`src`)===y))return Ir.prototype._tileReady.call(this,e,t,n)}});function zr(e,t){return new Rr(e,t)}var Br=Rr.extend({defaultWmsParams:{service:`WMS`,request:`GetMap`,layers:``,styles:``,format:`image/jpeg`,transparent:!1,version:`1.1.1`},options:{crs:null,uppercase:!1},initialize:function(e,t){this._url=e;var r=n({},this.defaultWmsParams);for(var i in t)i in this.options||(r[i]=t[i]);t=p(this,t);var a=t.detectRetina&&q.retina?2:1,o=this.getTileSize();r.width=o.x*a,r.height=o.y*a,this.wmsParams=r},onAdd:function(e){this._crs=this.options.crs||e.options.crs,this._wmsVersion=parseFloat(this.wmsParams.version);var t=this._wmsVersion>=1.3?`crs`:`srs`;this.wmsParams[t]=this._crs.code,Rr.prototype.onAdd.call(this,e)},getTileUrl:function(e){var t=this._tileCoordsToNwSe(e),n=this._crs,r=I(n.project(t[0]),n.project(t[1])),i=r.min,a=r.max,o=(this._wmsVersion>=1.3&&this._crs===Un?[i.y,i.x,a.y,a.x]:[i.x,i.y,a.x,a.y]).join(`,`),s=Rr.prototype.getTileUrl.call(this,e);return s+m(this.wmsParams,s,this.options.uppercase)+(this.options.uppercase?`&BBOX=`:`&bbox=`)+o},setParams:function(e,t){return n(this.wmsParams,e),t||this.redraw(),this}});function Vr(e,t){return new Br(e,t)}Rr.WMS=Br,zr.wms=Vr;var Hr=Gn.extend({options:{padding:.1},initialize:function(e){p(this,e),o(this),this._layers=this._layers||{}},onAdd:function(){this._container||(this._initContainer(),Z(this._container,`leaflet-zoom-animated`)),this.getPane().appendChild(this._container),this._update(),this.on(`update`,this._updatePaths,this)},onRemove:function(){this.off(`update`,this._updatePaths,this),this._destroyContainer()},getEvents:function(){var e={viewreset:this._reset,zoom:this._onZoom,moveend:this._update,zoomend:this._onZoomEnd};return this._zoomAnimated&&(e.zoomanim=this._onAnimZoom),e},_onAnimZoom:function(e){this._updateTransform(e.center,e.zoom)},_onZoom:function(){this._updateTransform(this._map.getCenter(),this._map.getZoom())},_updateTransform:function(e,t){var n=this._map.getZoomScale(t,this._zoom),r=this._map.getSize().multiplyBy(.5+this.options.padding),i=this._map.project(this._center,t),a=r.multiplyBy(-n).add(i).subtract(this._map._getNewPixelOrigin(e,t));q.any3d?Ct(this._container,a,n):wt(this._container,a)},_reset:function(){for(var e in this._update(),this._updateTransform(this._center,this._zoom),this._layers)this._layers[e]._reset()},_onZoomEnd:function(){for(var e in this._layers)this._layers[e]._project()},_updatePaths:function(){for(var e in this._layers)this._layers[e]._update()},_update:function(){var e=this.options.padding,t=this._map.getSize(),n=this._map.containerPointToLayerPoint(t.multiplyBy(-e)).round();this._bounds=new F(n,n.add(t.multiplyBy(1+e*2)).round()),this._center=this._map.getCenter(),this._zoom=this._map.getZoom()}}),Ur=Hr.extend({options:{tolerance:0},getEvents:function(){var e=Hr.prototype.getEvents.call(this);return e.viewprereset=this._onViewPreReset,e},_onViewPreReset:function(){this._postponeUpdatePaths=!0},onAdd:function(){Hr.prototype.onAdd.call(this),this._draw()},_initContainer:function(){var e=this._container=document.createElement(`canvas`);Q(e,`mousemove`,this._onMouseMove,this),Q(e,`click dblclick mousedown mouseup contextmenu`,this._onClick,this),Q(e,`mouseout`,this._handleMouseOut,this),e._leaflet_disable_events=!0,this._ctx=e.getContext(`2d`)},_destroyContainer:function(){E(this._redrawRequest),delete this._ctx,X(this._container),Bt(this._container),delete this._container},_updatePaths:function(){if(!this._postponeUpdatePaths){var e;for(var t in this._redrawBounds=null,this._layers)e=this._layers[t],e._update();this._redraw()}},_update:function(){if(!(this._map._animatingZoom&&this._bounds)){Hr.prototype._update.call(this);var e=this._bounds,t=this._container,n=e.getSize(),r=q.retina?2:1;wt(t,e.min),t.width=r*n.x,t.height=r*n.y,t.style.width=n.x+`px`,t.style.height=n.y+`px`,q.retina&&this._ctx.scale(2,2),this._ctx.translate(-e.min.x,-e.min.y),this.fire(`update`)}},_reset:function(){Hr.prototype._reset.call(this),this._postponeUpdatePaths&&(this._postponeUpdatePaths=!1,this._updatePaths())},_initPath:function(e){this._updateDashArray(e),this._layers[o(e)]=e;var t=e._order={layer:e,prev:this._drawLast,next:null};this._drawLast&&(this._drawLast.next=t),this._drawLast=t,this._drawFirst=this._drawFirst||this._drawLast},_addPath:function(e){this._requestRedraw(e)},_removePath:function(e){var t=e._order,n=t.next,r=t.prev;n?n.prev=r:this._drawLast=r,r?r.next=n:this._drawFirst=n,delete e._order,delete this._layers[o(e)],this._requestRedraw(e)},_updatePath:function(e){this._extendRedrawBounds(e),e._project(),e._update(),this._requestRedraw(e)},_updateStyle:function(e){this._updateDashArray(e),this._requestRedraw(e)},_updateDashArray:function(e){if(typeof e.options.dashArray==`string`){for(var t=e.options.dashArray.split(/[, ]+/),n=[],r,i=0;i<t.length;i++){if(r=Number(t[i]),isNaN(r))return;n.push(r)}e.options._dashArray=n}else e.options._dashArray=e.options.dashArray},_requestRedraw:function(e){this._map&&(this._extendRedrawBounds(e),this._redrawRequest=this._redrawRequest||T(this._redraw,this))},_extendRedrawBounds:function(e){if(e._pxBounds){var t=(e.options.weight||0)+1;this._redrawBounds=this._redrawBounds||new F,this._redrawBounds.extend(e._pxBounds.min.subtract([t,t])),this._redrawBounds.extend(e._pxBounds.max.add([t,t]))}},_redraw:function(){this._redrawRequest=null,this._redrawBounds&&(this._redrawBounds.min._floor(),this._redrawBounds.max._ceil()),this._clear(),this._draw(),this._redrawBounds=null},_clear:function(){var e=this._redrawBounds;if(e){var t=e.getSize();this._ctx.clearRect(e.min.x,e.min.y,t.x,t.y)}else this._ctx.save(),this._ctx.setTransform(1,0,0,1,0,0),this._ctx.clearRect(0,0,this._container.width,this._container.height),this._ctx.restore()},_draw:function(){var e,t=this._redrawBounds;if(this._ctx.save(),t){var n=t.getSize();this._ctx.beginPath(),this._ctx.rect(t.min.x,t.min.y,n.x,n.y),this._ctx.clip()}this._drawing=!0;for(var r=this._drawFirst;r;r=r.next)e=r.layer,(!t||e._pxBounds&&e._pxBounds.intersects(t))&&e._updatePath();this._drawing=!1,this._ctx.restore()},_updatePoly:function(e,t){if(this._drawing){var n,r,i,a,o=e._parts,s=o.length,c=this._ctx;if(s){for(c.beginPath(),n=0;n<s;n++){for(r=0,i=o[n].length;r<i;r++)a=o[n][r],c[r?`lineTo`:`moveTo`](a.x,a.y);t&&c.closePath()}this._fillStroke(c,e)}}},_updateCircle:function(e){if(this._drawing&&!e._empty()){var t=e._point,n=this._ctx,r=Math.max(Math.round(e._radius),1),i=(Math.max(Math.round(e._radiusY),1)||r)/r;i!==1&&(n.save(),n.scale(1,i)),n.beginPath(),n.arc(t.x,t.y/i,r,0,Math.PI*2,!1),i!==1&&n.restore(),this._fillStroke(n,e)}},_fillStroke:function(e,t){var n=t.options;n.fill&&(e.globalAlpha=n.fillOpacity,e.fillStyle=n.fillColor||n.color,e.fill(n.fillRule||`evenodd`)),n.stroke&&n.weight!==0&&(e.setLineDash&&e.setLineDash(t.options&&t.options._dashArray||[]),e.globalAlpha=n.opacity,e.lineWidth=n.weight,e.strokeStyle=n.color,e.lineCap=n.lineCap,e.lineJoin=n.lineJoin,e.stroke())},_onClick:function(e){for(var t=this._map.mouseEventToLayerPoint(e),n,r,i=this._drawFirst;i;i=i.next)n=i.layer,n.options.interactive&&n._containsPoint(t)&&(e.type!==`click`&&e.type!==`preclick`||!this._map._draggableMoved(n))&&(r=n);this._fireEvent(r?[r]:!1,e)},_onMouseMove:function(e){if(!(!this._map||this._map.dragging.moving()||this._map._animatingZoom)){var t=this._map.mouseEventToLayerPoint(e);this._handleMouseHover(e,t)}},_handleMouseOut:function(e){var t=this._hoveredLayer;t&&(_t(this._container,`leaflet-interactive`),this._fireEvent([t],e,`mouseout`),this._hoveredLayer=null,this._mouseHoverThrottled=!1)},_handleMouseHover:function(e,t){if(!this._mouseHoverThrottled){for(var n,r,a=this._drawFirst;a;a=a.next)n=a.layer,n.options.interactive&&n._containsPoint(t)&&(r=n);r!==this._hoveredLayer&&(this._handleMouseOut(e),r&&(Z(this._container,`leaflet-interactive`),this._fireEvent([r],e,`mouseover`),this._hoveredLayer=r)),this._fireEvent(this._hoveredLayer?[this._hoveredLayer]:!1,e),this._mouseHoverThrottled=!0,setTimeout(i(function(){this._mouseHoverThrottled=!1},this),32)}},_fireEvent:function(e,t,n){this._map._fireDOMEvent(t,n||t.type,e)},_bringToFront:function(e){var t=e._order;if(t){var n=t.next,r=t.prev;if(n)n.prev=r;else return;r?r.next=n:n&&(this._drawFirst=n),t.prev=this._drawLast,this._drawLast.next=t,t.next=null,this._drawLast=t,this._requestRedraw(e)}},_bringToBack:function(e){var t=e._order;if(t){var n=t.next,r=t.prev;if(r)r.next=n;else return;n?n.prev=r:r&&(this._drawLast=r),t.prev=null,t.next=this._drawFirst,this._drawFirst.prev=t,this._drawFirst=t,this._requestRedraw(e)}}});function Wr(e){return q.canvas?new Ur(e):null}var Gr=(function(){try{return document.namespaces.add(`lvml`,`urn:schemas-microsoft-com:vml`),function(e){return document.createElement(`<lvml:`+e+` class="lvml">`)}}catch{}return function(e){return document.createElement(`<`+e+` xmlns="urn:schemas-microsoft.com:vml" class="lvml">`)}})(),Kr={_initContainer:function(){this._container=Y(`div`,`leaflet-vml-container`)},_update:function(){this._map._animatingZoom||(Hr.prototype._update.call(this),this.fire(`update`))},_initPath:function(e){var t=e._container=Gr(`shape`);Z(t,`leaflet-vml-shape `+(this.options.className||``)),t.coordsize=`1 1`,e._path=Gr(`path`),t.appendChild(e._path),this._updateStyle(e),this._layers[o(e)]=e},_addPath:function(e){var t=e._container;this._container.appendChild(t),e.options.interactive&&e.addInteractiveTarget(t)},_removePath:function(e){var t=e._container;X(t),e.removeInteractiveTarget(t),delete this._layers[o(e)]},_updateStyle:function(e){var t=e._stroke,n=e._fill,r=e.options,i=e._container;i.stroked=!!r.stroke,i.filled=!!r.fill,r.stroke?(t||=e._stroke=Gr(`stroke`),i.appendChild(t),t.weight=r.weight+`px`,t.color=r.color,t.opacity=r.opacity,r.dashArray?t.dashStyle=_(r.dashArray)?r.dashArray.join(` `):r.dashArray.replace(/( *, *)/g,` `):t.dashStyle=``,t.endcap=r.lineCap.replace(`butt`,`flat`),t.joinstyle=r.lineJoin):t&&(i.removeChild(t),e._stroke=null),r.fill?(n||=e._fill=Gr(`fill`),i.appendChild(n),n.color=r.fillColor||r.color,n.opacity=r.fillOpacity):n&&(i.removeChild(n),e._fill=null)},_updateCircle:function(e){var t=e._point.round(),n=Math.round(e._radius),r=Math.round(e._radiusY||n);this._setPath(e,e._empty()?`M0 0`:`AL `+t.x+`,`+t.y+` `+n+`,`+r+` 0,23592600`)},_setPath:function(e,t){e._path.v=t},_bringToFront:function(e){mt(e._container)},_bringToBack:function(e){ht(e._container)}},qr=q.vml?Gr:se,Jr=Hr.extend({_initContainer:function(){this._container=qr(`svg`),this._container.setAttribute(`pointer-events`,`none`),this._rootGroup=qr(`g`),this._container.appendChild(this._rootGroup)},_destroyContainer:function(){X(this._container),Bt(this._container),delete this._container,delete this._rootGroup,delete this._svgSize},_update:function(){if(!(this._map._animatingZoom&&this._bounds)){Hr.prototype._update.call(this);var e=this._bounds,t=e.getSize(),n=this._container;(!this._svgSize||!this._svgSize.equals(t))&&(this._svgSize=t,n.setAttribute(`width`,t.x),n.setAttribute(`height`,t.y)),wt(n,e.min),n.setAttribute(`viewBox`,[e.min.x,e.min.y,t.x,t.y].join(` `)),this.fire(`update`)}},_initPath:function(e){var t=e._path=qr(`path`);e.options.className&&Z(t,e.options.className),e.options.interactive&&Z(t,`leaflet-interactive`),this._updateStyle(e),this._layers[o(e)]=e},_addPath:function(e){this._rootGroup||this._initContainer(),this._rootGroup.appendChild(e._path),e.addInteractiveTarget(e._path)},_removePath:function(e){X(e._path),e.removeInteractiveTarget(e._path),delete this._layers[o(e)]},_updatePath:function(e){e._project(),e._update()},_updateStyle:function(e){var t=e._path,n=e.options;t&&(n.stroke?(t.setAttribute(`stroke`,n.color),t.setAttribute(`stroke-opacity`,n.opacity),t.setAttribute(`stroke-width`,n.weight),t.setAttribute(`stroke-linecap`,n.lineCap),t.setAttribute(`stroke-linejoin`,n.lineJoin),n.dashArray?t.setAttribute(`stroke-dasharray`,n.dashArray):t.removeAttribute(`stroke-dasharray`),n.dashOffset?t.setAttribute(`stroke-dashoffset`,n.dashOffset):t.removeAttribute(`stroke-dashoffset`)):t.setAttribute(`stroke`,`none`),n.fill?(t.setAttribute(`fill`,n.fillColor||n.color),t.setAttribute(`fill-opacity`,n.fillOpacity),t.setAttribute(`fill-rule`,n.fillRule||`evenodd`)):t.setAttribute(`fill`,`none`))},_updatePoly:function(e,t){this._setPath(e,ce(e._parts,t))},_updateCircle:function(e){var t=e._point,n=Math.max(Math.round(e._radius),1),r=Math.max(Math.round(e._radiusY),1)||n,i=`a`+n+`,`+r+` 0 1,0 `,a=e._empty()?`M0 0`:`M`+(t.x-n)+`,`+t.y+i+n*2+`,0 `+i+-n*2+`,0 `;this._setPath(e,a)},_setPath:function(e,t){e._path.setAttribute(`d`,t)},_bringToFront:function(e){mt(e._path)},_bringToBack:function(e){ht(e._path)}});q.vml&&Jr.include(Kr);function Yr(e){return q.svg||q.vml?new Jr(e):null}rn.include({getRenderer:function(e){var t=e.options.renderer||this._getPaneRenderer(e.options.pane)||this.options.renderer||this._renderer;return t||=this._renderer=this._createRenderer(),this.hasLayer(t)||this.addLayer(t),t},_getPaneRenderer:function(e){if(e===`overlayPane`||e===void 0)return!1;var t=this._paneRenderers[e];return t===void 0&&(t=this._createRenderer({pane:e}),this._paneRenderers[e]=t),t},_createRenderer:function(e){return this.options.preferCanvas&&Wr(e)||Yr(e)}});var Xr=lr.extend({initialize:function(e,t){lr.prototype.initialize.call(this,this._boundsToLatLngs(e),t)},setBounds:function(e){return this.setLatLngs(this._boundsToLatLngs(e))},_boundsToLatLngs:function(e){return e=z(e),[e.getSouthWest(),e.getNorthWest(),e.getNorthEast(),e.getSouthEast()]}});function Zr(e,t){return new Xr(e,t)}Jr.create=qr,Jr.pointsToPath=ce,dr.geometryToLayer=fr,dr.coordsToLatLng=mr,dr.coordsToLatLngs=hr,dr.latLngToCoords=gr,dr.latLngsToCoords=_r,dr.getFeature=vr,dr.asFeature=yr,rn.mergeOptions({boxZoom:!0});var Qr=hn.extend({initialize:function(e){this._map=e,this._container=e._container,this._pane=e._panes.overlayPane,this._resetStateTimeout=0,e.on(`unload`,this._destroy,this)},addHooks:function(){Q(this._container,`mousedown`,this._onMouseDown,this)},removeHooks:function(){Bt(this._container,`mousedown`,this._onMouseDown,this)},moved:function(){return this._moved},_destroy:function(){X(this._pane),delete this._pane},_resetState:function(){this._resetStateTimeout=0,this._moved=!1},_clearDeferredResetState:function(){this._resetStateTimeout!==0&&(clearTimeout(this._resetStateTimeout),this._resetStateTimeout=0)},_onMouseDown:function(e){if(!e.shiftKey||e.which!==1&&e.button!==1)return!1;this._clearDeferredResetState(),this._resetState(),Et(),At(),this._startPoint=this._map.mouseEventToContainerPoint(e),Q(document,{contextmenu:Yt,mousemove:this._onMouseMove,mouseup:this._onMouseUp,keydown:this._onKeyDown},this)},_onMouseMove:function(e){this._moved||(this._moved=!0,this._box=Y(`div`,`leaflet-zoom-box`,this._container),Z(this._container,`leaflet-crosshair`),this._map.fire(`boxzoomstart`)),this._point=this._map.mouseEventToContainerPoint(e);var t=new F(this._point,this._startPoint),n=t.getSize();wt(this._box,t.min),this._box.style.width=n.x+`px`,this._box.style.height=n.y+`px`},_finish:function(){this._moved&&(X(this._box),_t(this._container,`leaflet-crosshair`)),Dt(),jt(),Bt(document,{contextmenu:Yt,mousemove:this._onMouseMove,mouseup:this._onMouseUp,keydown:this._onKeyDown},this)},_onMouseUp:function(e){if((e.which===1||e.button===1)&&(this._finish(),this._moved)){this._clearDeferredResetState(),this._resetStateTimeout=setTimeout(i(this._resetState,this),0);var t=new R(this._map.containerPointToLatLng(this._startPoint),this._map.containerPointToLatLng(this._point));this._map.fitBounds(t).fire(`boxzoomend`,{boxZoomBounds:t})}},_onKeyDown:function(e){e.keyCode===27&&(this._finish(),this._clearDeferredResetState(),this._resetState())}});rn.addInitHook(`addHandler`,`boxZoom`,Qr),rn.mergeOptions({doubleClickZoom:!0});var $r=hn.extend({addHooks:function(){this._map.on(`dblclick`,this._onDoubleClick,this)},removeHooks:function(){this._map.off(`dblclick`,this._onDoubleClick,this)},_onDoubleClick:function(e){var t=this._map,n=t.getZoom(),r=t.options.zoomDelta,i=e.originalEvent.shiftKey?n-r:n+r;t.options.doubleClickZoom===`center`?t.setZoom(i):t.setZoomAround(e.containerPoint,i)}});rn.addInitHook(`addHandler`,`doubleClickZoom`,$r),rn.mergeOptions({dragging:!0,inertia:!0,inertiaDeceleration:3400,inertiaMaxSpeed:1/0,easeLinearity:.2,worldCopyJump:!1,maxBoundsViscosity:0});var ei=hn.extend({addHooks:function(){if(!this._draggable){var e=this._map;this._draggable=new vn(e._mapPane,e._container),this._draggable.on({dragstart:this._onDragStart,drag:this._onDrag,dragend:this._onDragEnd},this),this._draggable.on(`predrag`,this._onPreDragLimit,this),e.options.worldCopyJump&&(this._draggable.on(`predrag`,this._onPreDragWrap,this),e.on(`zoomend`,this._onZoomEnd,this),e.whenReady(this._onZoomEnd,this))}Z(this._map._container,`leaflet-grab leaflet-touch-drag`),this._draggable.enable(),this._positions=[],this._times=[]},removeHooks:function(){_t(this._map._container,`leaflet-grab`),_t(this._map._container,`leaflet-touch-drag`),this._draggable.disable()},moved:function(){return this._draggable&&this._draggable._moved},moving:function(){return this._draggable&&this._draggable._moving},_onDragStart:function(){var e=this._map;if(e._stop(),this._map.options.maxBounds&&this._map.options.maxBoundsViscosity){var t=z(this._map.options.maxBounds);this._offsetLimit=I(this._map.latLngToContainerPoint(t.getNorthWest()).multiplyBy(-1),this._map.latLngToContainerPoint(t.getSouthEast()).multiplyBy(-1).add(this._map.getSize())),this._viscosity=Math.min(1,Math.max(0,this._map.options.maxBoundsViscosity))}else this._offsetLimit=null;e.fire(`movestart`).fire(`dragstart`),e.options.inertia&&(this._positions=[],this._times=[])},_onDrag:function(e){if(this._map.options.inertia){var t=this._lastTime=+new Date,n=this._lastPos=this._draggable._absPos||this._draggable._newPos;this._positions.push(n),this._times.push(t),this._prunePositions(t)}this._map.fire(`move`,e).fire(`drag`,e)},_prunePositions:function(e){for(;this._positions.length>1&&e-this._times[0]>50;)this._positions.shift(),this._times.shift()},_onZoomEnd:function(){var e=this._map.getSize().divideBy(2),t=this._map.latLngToLayerPoint([0,0]);this._initialWorldOffset=t.subtract(e).x,this._worldWidth=this._map.getPixelWorldBounds().getSize().x},_viscousLimit:function(e,t){return e-(e-t)*this._viscosity},_onPreDragLimit:function(){if(this._viscosity&&this._offsetLimit){var e=this._draggable._newPos.subtract(this._draggable._startPos),t=this._offsetLimit;e.x<t.min.x&&(e.x=this._viscousLimit(e.x,t.min.x)),e.y<t.min.y&&(e.y=this._viscousLimit(e.y,t.min.y)),e.x>t.max.x&&(e.x=this._viscousLimit(e.x,t.max.x)),e.y>t.max.y&&(e.y=this._viscousLimit(e.y,t.max.y)),this._draggable._newPos=this._draggable._startPos.add(e)}},_onPreDragWrap:function(){var e=this._worldWidth,t=Math.round(e/2),n=this._initialWorldOffset,r=this._draggable._newPos.x,i=(r-t+n)%e+t-n,a=(r+t+n)%e-t-n,o=Math.abs(i+n)<Math.abs(a+n)?i:a;this._draggable._absPos=this._draggable._newPos.clone(),this._draggable._newPos.x=o},_onDragEnd:function(e){var t=this._map,n=t.options,r=!n.inertia||e.noInertia||this._times.length<2;if(t.fire(`dragend`,e),r)t.fire(`moveend`);else{this._prunePositions(+new Date);var i=this._lastPos.subtract(this._positions[0]),a=(this._lastTime-this._times[0])/1e3,o=n.easeLinearity,s=i.multiplyBy(o/a),c=s.distanceTo([0,0]),l=Math.min(n.inertiaMaxSpeed,c),u=s.multiplyBy(l/c),d=l/(n.inertiaDeceleration*o),f=u.multiplyBy(-d/2).round();!f.x&&!f.y?t.fire(`moveend`):(f=t._limitOffset(f,t.options.maxBounds),T(function(){t.panBy(f,{duration:d,easeLinearity:o,noMoveStart:!0,animate:!0})}))}}});rn.addInitHook(`addHandler`,`dragging`,ei),rn.mergeOptions({keyboard:!0,keyboardPanDelta:80});var ti=hn.extend({keyCodes:{left:[37],right:[39],down:[40],up:[38],zoomIn:[187,107,61,171],zoomOut:[189,109,54,173]},initialize:function(e){this._map=e,this._setPanDelta(e.options.keyboardPanDelta),this._setZoomDelta(e.options.zoomDelta)},addHooks:function(){var e=this._map._container;e.tabIndex<=0&&(e.tabIndex=`0`),Q(e,{focus:this._onFocus,blur:this._onBlur,mousedown:this._onMouseDown},this),this._map.on({focus:this._addHooks,blur:this._removeHooks},this)},removeHooks:function(){this._removeHooks(),Bt(this._map._container,{focus:this._onFocus,blur:this._onBlur,mousedown:this._onMouseDown},this),this._map.off({focus:this._addHooks,blur:this._removeHooks},this)},_onMouseDown:function(){if(!this._focused){var e=document.body,t=document.documentElement,n=e.scrollTop||t.scrollTop,r=e.scrollLeft||t.scrollLeft;this._map._container.focus(),window.scrollTo(r,n)}},_onFocus:function(){this._focused=!0,this._map.fire(`focus`)},_onBlur:function(){this._focused=!1,this._map.fire(`blur`)},_setPanDelta:function(e){for(var t=this._panKeys={},n=this.keyCodes,r=0,i=n.left.length;r<i;r++)t[n.left[r]]=[-1*e,0];for(r=0,i=n.right.length;r<i;r++)t[n.right[r]]=[e,0];for(r=0,i=n.down.length;r<i;r++)t[n.down[r]]=[0,e];for(r=0,i=n.up.length;r<i;r++)t[n.up[r]]=[0,-1*e]},_setZoomDelta:function(e){for(var t=this._zoomKeys={},n=this.keyCodes,r=0,i=n.zoomIn.length;r<i;r++)t[n.zoomIn[r]]=e;for(r=0,i=n.zoomOut.length;r<i;r++)t[n.zoomOut[r]]=-e},_addHooks:function(){Q(document,`keydown`,this._onKeyDown,this)},_removeHooks:function(){Bt(document,`keydown`,this._onKeyDown,this)},_onKeyDown:function(e){if(!(e.altKey||e.ctrlKey||e.metaKey)){var t=e.keyCode,n=this._map,r;if(t in this._panKeys){if(!n._panAnim||!n._panAnim._inProgress){if(r=this._panKeys[t],e.shiftKey&&(r=P(r).multiplyBy(3)),n.options.maxBounds&&(r=n._limitOffset(P(r),n.options.maxBounds)),n.options.worldCopyJump){var i=n.wrapLatLng(n.unproject(n.project(n.getCenter()).add(r)));n.panTo(i)}else n.panBy(r)}}else if(t in this._zoomKeys)n.setZoom(n.getZoom()+(e.shiftKey?3:1)*this._zoomKeys[t]);else if(t===27&&n._popup&&n._popup.options.closeOnEscapeKey)n.closePopup();else return;Yt(e)}}});rn.addInitHook(`addHandler`,`keyboard`,ti),rn.mergeOptions({scrollWheelZoom:!0,wheelDebounceTime:40,wheelPxPerZoomLevel:60});var ni=hn.extend({addHooks:function(){Q(this._map._container,`wheel`,this._onWheelScroll,this),this._delta=0},removeHooks:function(){Bt(this._map._container,`wheel`,this._onWheelScroll,this)},_onWheelScroll:function(e){var t=$t(e),n=this._map.options.wheelDebounceTime;this._delta+=t,this._lastMousePos=this._map.mouseEventToContainerPoint(e),this._startTime||=+new Date;var r=Math.max(n-(+new Date-this._startTime),0);clearTimeout(this._timer),this._timer=setTimeout(i(this._performZoom,this),r),Yt(e)},_performZoom:function(){var e=this._map,t=e.getZoom(),n=this._map.options.zoomSnap||0;e._stop();var r=this._delta/(this._map.options.wheelPxPerZoomLevel*4),i=4*Math.log(2/(1+Math.exp(-Math.abs(r))))/Math.LN2,a=n?Math.ceil(i/n)*n:i,o=e._limitZoom(t+(this._delta>0?a:-a))-t;this._delta=0,this._startTime=null,o&&(e.options.scrollWheelZoom===`center`?e.setZoom(t+o):e.setZoomAround(this._lastMousePos,t+o))}});rn.addInitHook(`addHandler`,`scrollWheelZoom`,ni);var ri=600;rn.mergeOptions({tapHold:q.touchNative&&q.safari&&q.mobile,tapTolerance:15});var ii=hn.extend({addHooks:function(){Q(this._map._container,`touchstart`,this._onDown,this)},removeHooks:function(){Bt(this._map._container,`touchstart`,this._onDown,this)},_onDown:function(e){if(clearTimeout(this._holdTimeout),e.touches.length===1){var t=e.touches[0];this._startPos=this._newPos=new M(t.clientX,t.clientY),this._holdTimeout=setTimeout(i(function(){this._cancel(),this._isTapValid()&&(Q(document,`touchend`,Jt),Q(document,`touchend touchcancel`,this._cancelClickPrevent),this._simulateEvent(`contextmenu`,t))},this),ri),Q(document,`touchend touchcancel contextmenu`,this._cancel,this),Q(document,`touchmove`,this._onMove,this)}},_cancelClickPrevent:function e(){Bt(document,`touchend`,Jt),Bt(document,`touchend touchcancel`,e)},_cancel:function(){clearTimeout(this._holdTimeout),Bt(document,`touchend touchcancel contextmenu`,this._cancel,this),Bt(document,`touchmove`,this._onMove,this)},_onMove:function(e){var t=e.touches[0];this._newPos=new M(t.clientX,t.clientY)},_isTapValid:function(){return this._newPos.distanceTo(this._startPos)<=this._map.options.tapTolerance},_simulateEvent:function(e,t){var n=new MouseEvent(e,{bubbles:!0,cancelable:!0,view:window,screenX:t.screenX,screenY:t.screenY,clientX:t.clientX,clientY:t.clientY});n._simulated=!0,t.target.dispatchEvent(n)}});rn.addInitHook(`addHandler`,`tapHold`,ii),rn.mergeOptions({touchZoom:q.touch,bounceAtZoomLimits:!0});var ai=hn.extend({addHooks:function(){Z(this._map._container,`leaflet-touch-zoom`),Q(this._map._container,`touchstart`,this._onTouchStart,this)},removeHooks:function(){_t(this._map._container,`leaflet-touch-zoom`),Bt(this._map._container,`touchstart`,this._onTouchStart,this)},_onTouchStart:function(e){var t=this._map;if(!(!e.touches||e.touches.length!==2||t._animatingZoom||this._zooming)){var n=t.mouseEventToContainerPoint(e.touches[0]),r=t.mouseEventToContainerPoint(e.touches[1]);this._centerPoint=t.getSize()._divideBy(2),this._startLatLng=t.containerPointToLatLng(this._centerPoint),t.options.touchZoom!==`center`&&(this._pinchStartLatLng=t.containerPointToLatLng(n.add(r)._divideBy(2))),this._startDist=n.distanceTo(r),this._startZoom=t.getZoom(),this._moved=!1,this._zooming=!0,t._stop(),Q(document,`touchmove`,this._onTouchMove,this),Q(document,`touchend touchcancel`,this._onTouchEnd,this),Jt(e)}},_onTouchMove:function(e){if(e.touches&&e.touches.length===2&&this._zooming){var t=this._map,n=t.mouseEventToContainerPoint(e.touches[0]),r=t.mouseEventToContainerPoint(e.touches[1]),a=n.distanceTo(r)/this._startDist;if(this._zoom=t.getScaleZoom(a,this._startZoom),!t.options.bounceAtZoomLimits&&(this._zoom<t.getMinZoom()&&a<1||this._zoom>t.getMaxZoom()&&a>1)&&(this._zoom=t._limitZoom(this._zoom)),t.options.touchZoom===`center`){if(this._center=this._startLatLng,a===1)return}else{var o=n._add(r)._divideBy(2)._subtract(this._centerPoint);if(a===1&&o.x===0&&o.y===0)return;this._center=t.unproject(t.project(this._pinchStartLatLng,this._zoom).subtract(o),this._zoom)}this._moved||=(t._moveStart(!0,!1),!0),E(this._animRequest);var s=i(t._move,t,this._center,this._zoom,{pinch:!0,round:!1},void 0);this._animRequest=T(s,this,!0),Jt(e)}},_onTouchEnd:function(){!this._moved||!this._zooming?this._zooming=!1:(this._zooming=!1,E(this._animRequest),Bt(document,`touchmove`,this._onTouchMove,this),Bt(document,`touchend touchcancel`,this._onTouchEnd,this),this._map.options.zoomAnimation?this._map._animateZoom(this._center,this._map._limitZoom(this._zoom),!0,this._map.options.zoomSnap):this._map._resetView(this._center,this._map._limitZoom(this._zoom)))}});rn.addInitHook(`addHandler`,`touchZoom`,ai),rn.BoxZoom=Qr,rn.DoubleClickZoom=$r,rn.Drag=ei,rn.Keyboard=ti,rn.ScrollWheelZoom=ni,rn.TapHold=ii,rn.TouchZoom=ai,e.Bounds=F,e.Browser=q,e.CRS=ee,e.Canvas=Ur,e.Circle=ar,e.CircleMarker=rr,e.Class=O,e.Control=on,e.DivIcon=Pr,e.DivOverlay=kr,e.DomEvent=tn,e.DomUtil=Rt,e.Draggable=vn,e.Evented=j,e.FeatureGroup=Jn,e.GeoJSON=dr,e.GridLayer=Ir,e.Handler=hn,e.Icon=Xn,e.ImageOverlay=Cr,e.LatLng=B,e.LatLngBounds=R,e.Layer=Gn,e.LayerGroup=Kn,e.LineUtil=Rn,e.Map=rn,e.Marker=er,e.Mixin=gn,e.Path=nr,e.Point=M,e.PolyUtil=Sn,e.Polygon=lr,e.Polyline=sr,e.Popup=Ar,e.PosAnimation=nn,e.Projection=Vn,e.Rectangle=Xr,e.Renderer=Hr,e.SVG=Jr,e.SVGOverlay=Dr,e.TileLayer=Rr,e.Tooltip=Mr,e.Transformation=re,e.Util=D,e.VideoOverlay=Tr,e.bind=i,e.bounds=I,e.canvas=Wr,e.circle=or,e.circleMarker=ir,e.control=sn,e.divIcon=Fr,e.extend=n,e.featureGroup=Yn,e.geoJSON=xr,e.geoJson=Sr,e.gridLayer=Lr,e.icon=Zn,e.imageOverlay=wr,e.latLng=V,e.latLngBounds=z,e.layerGroup=qn,e.map=an,e.marker=tr,e.point=P,e.polygon=ur,e.polyline=cr,e.popup=jr,e.rectangle=Zr,e.setOptions=p,e.stamp=o,e.svg=Yr,e.svgOverlay=Or,e.tileLayer=zr,e.tooltip=Nr,e.transformation=ie,e.version=t,e.videoOverlay=Er;var oi=window.L;e.noConflict=function(){return window.L=oi,this},window.L=e}))}))(),1),X=({userLocation:e,destination:t,activeStopIndex:n=0,allStops:r=[],onSelectStop:i,routeCoordinates:a=[],isDark:o=!0})=>{let s=(0,v.useRef)(null),c=(0,v.useRef)(null),l=(0,v.useRef)(null),u=(0,v.useRef)(null),d=(0,v.useRef)(null),f=(0,v.useRef)(!1),[p,m]=(0,v.useState)({total:0,completed:0,skipped:0,pending:0,missingCoords:0}),h=(0,v.useRef)(i);return(0,v.useEffect)(()=>{h.current=i},[i]),(0,v.useEffect)(()=>(window.__garbageRouteJumpToStop=e=>{h.current&&(h.current(e),c.current&&c.current.closePopup())},()=>{delete window.__garbageRouteJumpToStop}),[]),(0,v.useEffect)(()=>{if(!s.current||c.current)return;let n=e?.lat||t.lat||37.7749,r=e?.lon||t.lon||-122.4194,i=Y.default.map(s.current,{center:[n,r],zoom:15,zoomControl:!1,attributionControl:!1});Y.default.tileLayer(`https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png`,{maxZoom:19,subdomains:[`a`,`b`,`c`],className:o?`dark-map-tiles`:``}).addTo(i);let a=Y.default.layerGroup().addTo(i);d.current=a,c.current=i;let p=()=>{c.current&&c.current.invalidateSize()};setTimeout(p,50),setTimeout(p,200),setTimeout(p,500);let m=new ResizeObserver(()=>{p()});return s.current&&m.observe(s.current),()=>{m.disconnect(),i.remove(),c.current=null,l.current=null,u.current=null,d.current=null,f.current=!1}},[]),(0,v.useEffect)(()=>{let i=c.current,a=d.current;if(!i||!a)return;if(a.clearLayers(),!r||r.length===0){if(t&&!isNaN(t.lat)&&!isNaN(t.lon)){let e=`
          <div style="display:flex; flex-direction:column; align-items:center;">
            <div style="background:#fbbf24; color:#000; font-weight:900; font-family:monospace; font-size:12px; padding:3px 7px; border-radius:8px; border:2px solid #000; box-shadow:0 4px 8px rgba(0,0,0,0.5); white-space:nowrap;">
              ${t.houseNumber||`STOP`}
            </div>
            <div style="width:0; height:0; border-left:6px solid transparent; border-right:6px solid transparent; border-top:8px solid #fbbf24;"></div>
          </div>
        `,n=Y.default.divIcon({html:e,className:`custom-dest-pin`,iconSize:[40,40],iconAnchor:[20,36]});Y.default.marker([t.lat,t.lon],{icon:n}).addTo(a)}return}let o=0,s=0,l=0,u=0,p=new Map;r.forEach((e,t)=>{if(e.status===`completed`?o++:e.status===`skipped`?s++:l++,typeof e.lat!=`number`||typeof e.lon!=`number`||isNaN(e.lat)||isNaN(e.lon)||e.lat===0&&e.lon===0){u++;return}let r=`${e.lat.toFixed(5)},${e.lon.toFixed(5)}`,i=t===n;p.has(r)?p.get(r).stops.push({stop:e,originalIndex:t,isActive:i}):p.set(r,{lat:e.lat,lon:e.lon,stops:[{stop:e,originalIndex:t,isActive:i}]})}),m({total:r.length,completed:o,skipped:s,pending:l,missingCoords:u});let h=[];if(p.forEach(e=>{let{lat:t,lon:n,stops:r}=e;h.push([t,n]);let i=r.some(e=>e.isActive),o=r.length>1,s=r.every(e=>e.stop.status===`completed`),c=r.every(e=>e.stop.status===`skipped`),l=``,u=[32,32],d=[16,16],f=100;if(i){let e=r.find(e=>e.isActive);l=`
          <div style="display:flex; flex-direction:column; align-items:center; cursor:pointer;">
            <div style="
              background:#fbbf24; 
              color:#000; 
              font-weight:900; 
              font-family:monospace; 
              font-size:14px; 
              padding:3px 9px; 
              border-radius:10px; 
              border:2.5px solid #000; 
              box-shadow:0 0 0 3px rgba(251, 191, 36, 0.5), 0 6px 12px rgba(0,0,0,0.7); 
              white-space:nowrap;
              display:flex;
              align-items:center;
              justify-content:center;
            ">
              <span>${e.stop.houseNumber||`${e.originalIndex+1}`}</span>
              ${o?`<span style="font-size:9px; background:#000; color:#fbbf24; padding:1px 4px; border-radius:4px; margin-left:2px;">+${r.length-1}</span>`:``}
            </div>
            <div style="width:0; height:0; border-left:7px solid transparent; border-right:7px solid transparent; border-top:9px solid #fbbf24; margin-top:-1px;"></div>
          </div>
        `,u=[56,42],d=[28,40],f=2e3}else if(s){let e=r[0].stop.houseNumber||``;l=`
          <div style="
            min-width:24px; 
            height:22px; 
            padding:0 5px;
            border-radius:11px; 
            background:#052e16; 
            border:1.5px solid #22c55e; 
            color:#22c55e; 
            font-size:10px; 
            font-weight:800; 
            font-family:monospace;
            display:flex; 
            align-items:center; 
            justify-content:center; 
            box-shadow:0 2px 5px rgba(0,0,0,0.5); 
            opacity:0.85;
            cursor:pointer;
            white-space:nowrap;
          ">
            ${e?o?`${e} ✓+`:`${e} ✓`:`✓`}
          </div>
        `,u=[32,22],d=[16,11],f=50}else if(c){let e=r[0].stop.houseNumber||``;l=`
          <div style="
            min-width:22px; 
            height:20px; 
            padding:0 4px;
            border-radius:10px; 
            background:#1c1917; 
            border:1.5px solid #78716c; 
            color:#a8a29e; 
            font-size:9px; 
            font-weight:700; 
            font-family:monospace;
            display:flex; 
            align-items:center; 
            justify-content:center; 
            box-shadow:0 2px 4px rgba(0,0,0,0.5); 
            opacity:0.7;
            cursor:pointer;
            white-space:nowrap;
          ">
            ${e?`${e} ⤼`:`⤼`}
          </div>
        `,u=[30,20],d=[15,10],f=40}else{let e=r.find(e=>e.stop.status===`pending`)||r[0],t=e.stop.houseNumber||`${e.originalIndex+1}`;l=`
          <div style="display:flex; flex-direction:column; align-items:center; cursor:pointer;">
            <div style="
              background:#0f172a; 
              color:#f8fafc; 
              border:1.5px solid #38bdf8; 
              border-radius:6px; 
              padding:1.5px 6px; 
              font-size:11px; 
              font-weight:800; 
              font-family:monospace; 
              box-shadow:0 3px 6px rgba(0,0,0,0.6); 
              white-space:nowrap;
            ">
              ${o?`${t} (+${r.length-1})`:t}
            </div>
            <div style="width:0; height:0; border-left:4px solid transparent; border-right:4px solid transparent; border-top:5px solid #38bdf8; margin-top:-1px;"></div>
          </div>
        `,u=[46,28],d=[23,26],f=150}let p=Y.default.divIcon({html:l,className:`custom-customer-pin`,iconSize:u,iconAnchor:d}),m=`
        <div style="font-family:sans-serif; min-width:210px; max-width:280px; padding:4px 0;">
          <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:6px; padding-bottom:4px; border-bottom:1px solid #333;">
            <span style="font-size:11px; font-weight:800; color:#38bdf8; text-transform:uppercase; letter-spacing:0.5px;">
              ${o?`${r.length} Customers at Address`:`Customer Stop`}
            </span>
            <span style="font-size:10px; color:#94a3b8; font-family:monospace;">
              ${t.toFixed(5)}, ${n.toFixed(5)}
            </span>
          </div>
          <div style="display:flex; flex-direction:column; gap:8px; max-height:220px; overflow-y:auto;">
      `;r.forEach(({stop:e,originalIndex:t,isActive:n})=>{let r=n?`<span style="background:#fbbf24; color:#000; font-size:9px; font-weight:900; padding:1px 5px; border-radius:4px;">ACTIVE</span>`:e.status===`completed`?`<span style="background:#052e16; color:#22c55e; border:1px solid #22c55e; font-size:9px; font-weight:700; padding:1px 5px; border-radius:4px;">DONE</span>`:e.status===`skipped`?`<span style="background:#292524; color:#a8a29e; font-size:9px; font-weight:700; padding:1px 5px; border-radius:4px;">SKIPPED</span>`:`<span style="background:#0f172a; color:#38bdf8; border:1px solid #38bdf8; font-size:9px; font-weight:700; padding:1px 5px; border-radius:4px;">PENDING</span>`;m+=`
          <div style="background:${n?`rgba(251,191,36,0.1)`:`#1e293b`}; border:1px solid ${n?`#fbbf24`:`#334155`}; border-radius:8px; padding:6px 8px;">
            <div style="display:flex; align-items:center; justify-content:space-between; gap:6px; margin-bottom:2px;">
              <span style="font-weight:800; font-size:12px; color:#fff;">
                #${t+1} · ${e.name||`Customer`}
              </span>
              ${r}
            </div>
            ${e.houseNumber?`<div style="font-size:11px; font-weight:700; color:#fbbf24; font-family:monospace;">House: ${e.houseNumber}</div>`:``}
            ${e.fullAddress?`<div style="font-size:10px; color:#94a3b8; margin-top:1px; line-height:1.2;">${e.fullAddress}</div>`:``}
            ${n?``:`
              <button 
                onclick="window.__garbageRouteJumpToStop(${t})"
                style="margin-top:6px; width:100%; background:#2563eb; hover:background:#1d4ed8; color:#fff; border:none; border-radius:6px; padding:4px 6px; font-size:10px; font-weight:800; cursor:pointer;"
              >
                Navigate to Stop #${t+1}
              </button>
            `}
          </div>
        `}),m+=`
          </div>
        </div>
      `,Y.default.marker([t,n],{icon:p,zIndexOffset:f}).addTo(a).bindPopup(m,{closeButton:!0,className:`custom-dark-popup`})}),!f.current&&h.length>0)try{let t=[...h];e&&!isNaN(e.lat)&&!isNaN(e.lon)&&t.push([e.lat,e.lon]);let n=Y.default.latLngBounds(t);i.fitBounds(n,{padding:[35,35],maxZoom:16}),f.current=!0}catch{}},[r,n,t.lat,t.lon]),(0,v.useEffect)(()=>{let e=c.current;if(e&&(u.current&&=(e.removeLayer(u.current),null),a&&a.length>1)){let t=a.map(([e,t])=>[t,e]),n=Y.default.polyline(t,{color:`#f59e0b`,weight:5,opacity:.9,lineCap:`round`,lineJoin:`round`}).addTo(e);u.current=n}},[a]),(0,v.useEffect)(()=>{let t=c.current;if(t){if(e&&!isNaN(e.lat)&&!isNaN(e.lon)){let n=[e.lat,e.lon];if(l.current)l.current.setLatLng(n);else{let e=Y.default.divIcon({html:`
          <div style="position:relative; width:22px; height:22px; display:flex; align-items:center; justify-content:center;">
            <div style="position:absolute; width:100%; height:100%; border-radius:50%; background:#38bdf8; opacity:0.4; animation:ping 1.5s cubic-bezier(0,0,0.2,1) infinite;"></div>
            <div style="width:14px; height:14px; border-radius:50%; background:#0284c7; border:2.5px solid #ffffff; box-shadow:0 0 10px rgba(2,132,199,0.9);"></div>
          </div>
        `,className:`custom-user-dot`,iconSize:[22,22],iconAnchor:[11,11]});l.current=Y.default.marker(n,{icon:e,zIndexOffset:3e3}).addTo(t)}}else l.current&&=(t.removeLayer(l.current),null)}},[e?.lat,e?.lon]),(0,J.jsxs)(`div`,{className:`relative w-full h-full min-h-0 overflow-hidden bg-neutral-950`,children:[(0,J.jsx)(`div`,{ref:s,className:`w-full h-full`}),(0,J.jsxs)(`div`,{className:`absolute top-2 left-2 z-[1000] pointer-events-none flex flex-wrap items-center gap-1.5 max-w-[85%]`,children:[(0,J.jsxs)(`div`,{className:`px-2 py-0.5 rounded-md bg-neutral-900/90 border border-neutral-700/80 text-[10px] font-mono font-bold text-white shadow-md backdrop-blur-sm flex items-center gap-1.5`,children:[(0,J.jsx)(We,{className:`w-3 h-3 text-amber-400`}),(0,J.jsx)(`span`,{children:p.total>0?`${p.total} Stops`:`1 Destination`}),(0,J.jsx)(`span`,{className:`text-neutral-500`,children:`·`}),(0,J.jsxs)(`span`,{className:`text-emerald-400`,children:[p.completed,` Done`]}),(0,J.jsx)(`span`,{className:`text-neutral-500`,children:`·`}),(0,J.jsxs)(`span`,{className:`text-sky-400`,children:[p.pending,` Left`]}),p.skipped>0&&(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)(`span`,{className:`text-neutral-500`,children:`·`}),(0,J.jsxs)(`span`,{className:`text-neutral-400`,children:[p.skipped,` Skipped`]})]})]}),p.missingCoords>0&&(0,J.jsxs)(`div`,{className:`px-1.5 py-0.5 rounded-md bg-amber-950/80 border border-amber-600/60 text-[9px] font-mono font-bold text-amber-300`,children:[p.missingCoords,` missing GPS`]})]}),(0,J.jsxs)(`div`,{className:`absolute bottom-2.5 right-2.5 z-[1000] flex flex-col gap-1.5`,children:[(0,J.jsx)(`button`,{onClick:()=>{let t=c.current;if(!t||!r||r.length===0)return;let n=r.filter(e=>typeof e.lat==`number`&&typeof e.lon==`number`&&!isNaN(e.lat)&&!isNaN(e.lon)&&(e.lat!==0||e.lon!==0)).map(e=>[e.lat,e.lon]);if(e&&!isNaN(e.lat)&&!isNaN(e.lon)&&n.push([e.lat,e.lon]),n.length>0){let e=Y.default.latLngBounds(n);t.fitBounds(e,{padding:[35,35],maxZoom:16})}},className:`p-2 bg-neutral-900/90 hover:bg-neutral-800 text-sky-400 rounded-xl border border-neutral-700 shadow-lg backdrop-blur-sm transition-transform active:scale-90 flex items-center justify-center`,title:`Fit all customer stops on route`,children:(0,J.jsx)(q,{className:`w-4 h-4`})}),(0,J.jsx)(`button`,{onClick:()=>{let n=c.current;if(n){if(u.current)n.fitBounds(u.current.getBounds(),{padding:[30,30],maxZoom:17});else if(e&&t&&!isNaN(t.lat)){let r=Y.default.latLngBounds([e.lat,e.lon],[t.lat,t.lon]);n.fitBounds(r,{padding:[35,35],maxZoom:17})}}},className:`p-2 bg-neutral-900/90 hover:bg-neutral-800 text-amber-400 rounded-xl border border-neutral-700 shadow-lg backdrop-blur-sm transition-transform active:scale-90 flex items-center justify-center`,title:`Fit active route to next customer`,children:(0,J.jsx)(Pe,{className:`w-4 h-4`})}),(0,J.jsx)(`button`,{onClick:()=>{let n=c.current;n&&(e&&!isNaN(e.lat)&&!isNaN(e.lon)?n.setView([e.lat,e.lon],17,{animate:!0}):t&&!isNaN(t.lat)&&!isNaN(t.lon)&&n.setView([t.lat,t.lon],17,{animate:!0}))},className:`p-2 bg-neutral-900/90 hover:bg-neutral-800 text-emerald-400 rounded-xl border border-neutral-700 shadow-lg backdrop-blur-sm transition-transform active:scale-90 flex items-center justify-center`,title:`Center on current vehicle GPS position`,children:(0,J.jsx)(qe,{className:`w-4 h-4`})})]}),(0,J.jsx)(`div`,{className:`absolute bottom-1 left-2 z-[1000] pointer-events-none text-[9px] font-mono text-neutral-400/80 bg-black/60 px-1.5 py-0.5 rounded`,children:`© OpenStreetMap`})]})},pt=({stop:e,allStops:t=[],onSelectStop:n,previousStop:r,nextStop:i,userLocation:a,gpsStatus:o,gpsErrorMsg:s,distanceToCurrentFeet:c,isWithinGeofence:l,isConfirmedArrival:u=!1,autoArrivalStatus:d,currentIndex:f,totalStops:p,settings:m,onMarkPickedUp:h,onSkip:g,onPrevious:_,onJumpToStopList:y,arrivalRadiusMeters:b,arrivalConfirmFeet:x,isPassedWithoutCompletion:C,simulateApproachAndPass:w,simulateApproachAndArrive:T,simulateCurbsidePassThrough:E,isSimulatingGps:D,isSimPaused:O,simSpeedMultiplier:k,startFullRouteSimulation:A,pauseSimulation:j,resumeSimulation:M,setSimulationSpeed:N,restartSimulation:P,stopGpsSimulation:F,onRouteCoordinatesUpdate:I,onRoadRemainingUpdate:R,onOpenSettings:z,diagLogs:B})=>{let V=m.theme===`amoled-black`,[ee,H]=(0,v.useState)(!1),[te,ne]=(0,v.useState)([]),re=e=>{ne(e),I?.(e)},ae=S(e,f),oe=(0,v.useRef)(null),se=(()=>{if(!a||o===`denied`)return null;let e=a.speed;if(e==null||isNaN(e)||e<0||a.accuracy&&a.accuracy>35||e>95)return null;let t=a.timestamp||Date.now(),n=oe.current;if(n!==null){let r=Math.max(.5,(t-n.timestamp)/1e3),i=Math.abs(e-n.speed);if(r<3&&i>25*r&&e>30)return n.speed}return oe.current={speed:e,timestamp:t},e})(),ce=se===null?null:Math.round(se);return(0,J.jsxs)(`div`,{className:`flex flex-col h-full justify-between pb-safe select-none overflow-hidden`,children:[(0,J.jsx)(`div`,{className:`shrink-0`,children:(0,J.jsx)(ft,{currentStop:e,previousStop:r,nextStop:i,userLocation:a,gpsStatus:o,gpsErrorMsg:s,distanceToCurrentFeet:c,isDark:V,arrivalRadiusMeters:b||m.arrivalRadiusMeters||152.4,isWithinGeofence:l,isConfirmedArrival:u,autoArrivalStatus:d,isPassedWithoutCompletion:C,simulateApproachAndPass:w,simulateApproachAndArrive:T,simulateCurbsidePassThrough:E,isSimulatingGps:D,isSimPaused:O,simSpeedMultiplier:k,startFullRouteSimulation:A,pauseSimulation:j,resumeSimulation:M,setSimulationSpeed:N,restartSimulation:P,stopGpsSimulation:F,onRouteCoordinatesUpdate:re,onRoadRemainingUpdate:R,onSkipCustomer:g,voiceAnnouncement:m.voiceAnnouncement,turnWarningDistancesFeet:m.turnWarningDistancesFeet||[500,200],onOpenSettings:z,diagLogs:B})}),(0,J.jsxs)(`div`,{className:`shrink-0 flex items-center justify-between px-1 py-0.5 mb-1 gap-2`,children:[(0,J.jsxs)(`button`,{onClick:y,className:`flex items-center gap-1.5 text-xs font-mono font-bold text-neutral-400 hover:text-white transition-colors shrink-0`,title:`Open Stop List`,children:[(0,J.jsxs)(`span`,{className:`text-emerald-400`,children:[`STOP `,f+1,` OF `,p]}),(0,J.jsx)(Ue,{className:`w-3.5 h-3.5 text-neutral-500`})]}),(0,J.jsxs)(`div`,{className:`flex items-center gap-1.5 shrink-0`,children:[(0,J.jsxs)(`button`,{onClick:()=>H(e=>!e),className:`flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-black uppercase tracking-wider transition-all active:scale-95 border ${ee?`bg-amber-400 text-black border-amber-300 shadow-md shadow-amber-950/40`:`bg-neutral-900 hover:bg-neutral-800 text-amber-400 border-neutral-700`}`,title:ee?`Hide road map`:`Show road map`,children:[(0,J.jsx)(Ge,{className:`w-3.5 h-3.5`}),(0,J.jsx)(`span`,{children:ee?`Hide Map`:`Show Map`})]}),f>0&&(0,J.jsxs)(`button`,{onClick:_,className:`flex items-center gap-1 text-[11px] font-semibold text-neutral-400 hover:text-white px-2 py-1 rounded-lg bg-neutral-900 border border-neutral-800 transition-colors active:scale-95`,title:`Return to previous customer`,children:[(0,J.jsx)(we,{className:`w-3.5 h-3.5`}),(0,J.jsx)(`span`,{children:`Prev`})]})]})]}),(0,J.jsx)(`div`,{className:`shrink-0 px-1 mb-1.5 flex items-center justify-start`,children:(0,J.jsxs)(`div`,{className:`w-20 h-20 bg-white text-black rounded-2xl border-2 border-neutral-300 shadow-lg flex flex-col items-center justify-center font-mono shrink-0 select-none`,title:`Live vehicle speed from GPS updates`,children:[(0,J.jsx)(`span`,{className:`text-3xl sm:text-4xl font-black text-black leading-none tracking-tight`,children:ce===null?`--`:ce}),(0,J.jsx)(`span`,{className:`text-[10px] font-black text-neutral-900 uppercase tracking-widest leading-none mt-1`,children:`MPH`})]})}),(0,J.jsxs)(`div`,{className:`flex-1 flex flex-col items-center justify-center my-auto py-1 text-center shrink-0 min-h-fit`,children:[(0,J.jsx)(`h1`,{className:`text-2xl sm:text-3xl font-black tracking-tight leading-snug mb-2 sm:mb-3 px-2 max-w-md break-words text-center shrink-0 ${V?`text-white`:`text-neutral-900`}`,children:e.name||`Customer`}),(0,J.jsx)(`div`,{className:`bg-amber-400 text-black border-2 border-amber-300 rounded-2xl px-6 py-2.5 sm:py-3 flex items-center justify-center shadow-xl min-w-[160px] max-w-[260px] transition-transform active:scale-95 shrink-0`,children:(0,J.jsx)(`span`,{className:`text-5xl sm:text-6xl font-black font-mono tracking-tighter leading-none`,children:ae})})]}),ee&&typeof document<`u`&&(0,ie.createPortal)((0,J.jsxs)(`div`,{className:`fixed inset-0 z-[9999] flex flex-col bg-black w-screen h-screen overflow-hidden`,children:[(0,J.jsxs)(`div`,{className:`shrink-0 bg-neutral-950/95 border-b border-neutral-800 px-3 py-2.5 flex items-center justify-between gap-2 shadow-lg backdrop-blur-md pt-safe`,children:[(0,J.jsxs)(`button`,{onClick:()=>H(!1),className:`flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-white font-extrabold text-xs transition-all active:scale-95 border border-neutral-700 shadow`,children:[(0,J.jsx)(be,{className:`w-4 h-4 text-amber-400`}),(0,J.jsx)(`span`,{children:`Hide Map`})]}),(0,J.jsx)(`div`,{className:`flex-1 text-center font-mono font-bold text-xs text-neutral-400`,children:`MAP OVERVIEW`}),(0,J.jsx)(`button`,{onClick:()=>{H(!1),y()},className:`p-1.5 bg-neutral-800 hover:bg-neutral-700 text-neutral-300 rounded-xl border border-neutral-700 transition-colors`,title:`Stop list`,children:(0,J.jsx)(Ue,{className:`w-4 h-4`})})]}),(0,J.jsx)(`div`,{className:`flex-1 w-full h-full relative min-h-0`,children:(0,J.jsx)(X,{userLocation:a,destination:{lat:e.lat,lon:e.lon,name:e.name,houseNumber:ae,address:e.fullAddress},activeStopIndex:f,allStops:t,onSelectStop:n,routeCoordinates:te,isDark:V})}),(0,J.jsxs)(`div`,{className:`shrink-0 bg-neutral-950/95 border-t border-neutral-800 px-3 py-2.5 flex items-center justify-between gap-3 shadow-2xl backdrop-blur-md pb-safe`,children:[(0,J.jsxs)(`div`,{className:`flex items-center gap-1.5 px-3 py-1.5 bg-white text-black rounded-xl border-2 border-neutral-300 font-mono shadow shrink-0`,children:[(0,J.jsx)(`span`,{className:`text-xl font-black leading-none`,children:ce===null?`--`:ce}),(0,J.jsx)(`span`,{className:`text-[10px] font-black uppercase text-neutral-800`,children:`MPH`})]}),(0,J.jsxs)(`div`,{className:`flex items-center gap-2 flex-1 max-w-xs justify-end`,children:[(0,J.jsxs)(`button`,{onClick:g,className:`flex-1 py-2.5 px-3 rounded-xl bg-orange-600 hover:bg-orange-500 text-white font-black text-xs uppercase tracking-wider flex items-center justify-center gap-1 shadow active:scale-95 transition-all`,children:[(0,J.jsx)(et,{className:`w-3.5 h-3.5`}),(0,J.jsx)(`span`,{children:`Skip`})]}),(0,J.jsxs)(`button`,{onClick:h,className:`flex-1 py-2.5 px-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-black text-xs uppercase tracking-wider flex items-center justify-center gap-1 shadow active:scale-95 transition-all`,children:[(0,J.jsx)(De,{className:`w-3.5 h-3.5 stroke-[2.5]`}),(0,J.jsx)(`span`,{children:`Picked Up`})]})]})]})]}),document.body),(0,J.jsxs)(`div`,{className:`shrink-0 pt-1.5 space-y-2`,children:[(0,J.jsxs)(`button`,{onClick:h,className:`w-full h-12 sm:h-13 rounded-xl flex items-center justify-center gap-2 font-black text-base sm:text-lg tracking-wide uppercase bg-emerald-500 hover:bg-emerald-400 text-black border-2 border-emerald-300 shadow-lg shadow-emerald-950/40 transition-all active:scale-[0.98]`,children:[(0,J.jsx)(De,{className:`w-5 h-5 stroke-[3]`}),(0,J.jsx)(`span`,{children:`Mark Picked Up`})]}),(0,J.jsxs)(`button`,{onClick:g,className:`w-full h-12 sm:h-13 rounded-xl flex items-center justify-center gap-2 font-black text-base sm:text-lg tracking-wide uppercase bg-amber-500 hover:bg-amber-400 text-black border-2 border-amber-300 shadow-lg shadow-amber-950/40 transition-all active:scale-[0.98]`,children:[(0,J.jsx)(et,{className:`w-5 h-5 stroke-[3]`}),(0,J.jsx)(`span`,{children:`Skip Customer`})]})]})]})},mt=({isOpen:e,isDark:t,onClose:n,onImportSuccess:r})=>{let[i,a]=(0,v.useState)(`upload`),[o,s]=(0,v.useState)(``),[c,l]=(0,v.useState)(!1),[u,d]=(0,v.useState)(null),[f,p]=(0,v.useState)(null);if(!e)return null;let m=e=>{d(null);try{let t=new FileReader;t.onload=t=>{try{let n=t.target?.result;if(!n||typeof n!=`string`)throw Error(`File content is empty or unreadable.`);let r=E(n,e.name.replace(/\.[^/.]+$/,``));if(!r.stops||r.stops.length===0)throw Error(`No valid customer stops found in GPX file.`);p({stops:r.stops,routeName:r.routeName,filename:e.name})}catch(e){d(e.message||`Failed to parse GPX file.`)}},t.onerror=()=>{d(`Error reading file from disk.`)},t.readAsText(e)}catch(e){d(e.message||`Error processing file.`)}},h=e=>{e.preventDefault(),l(!1),e.dataTransfer.files&&e.dataTransfer.files[0]&&m(e.dataTransfer.files[0])},g=e=>{e.target.files&&e.target.files[0]&&m(e.target.files[0]),e.target&&(e.target.value=``)},_=()=>{d(null);try{if(!o.trim()){d(`Please paste GPX XML content.`);return}let e=E(o,`Pasted GPX Route`);p({stops:e.stops,routeName:e.routeName,filename:`pasted_route.gpx`})}catch(e){d(e.message||`Invalid GPX content.`)}},y=e=>{d(null);try{let t=E(e.gpxXml,e.title);p({stops:t.stops,routeName:t.routeName,filename:`${e.id}.gpx`})}catch(e){d(e.message)}},b=()=>{f&&(r(f.stops,f.routeName,f.filename),n())},x=e=>{let t=new Blob([e.gpxXml],{type:`application/gpx+xml`}),n=URL.createObjectURL(t),r=document.createElement(`a`);r.href=n,r.download=`${e.id}.gpx`,r.click(),URL.revokeObjectURL(n)};return(0,J.jsx)(`div`,{className:`fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-in fade-in duration-200`,children:(0,J.jsxs)(`div`,{className:`w-full max-w-lg rounded-3xl border shadow-2xl overflow-hidden flex flex-col max-h-[90vh] ${t?`bg-neutral-900 border-neutral-700 text-white`:`bg-white border-neutral-300 text-black`}`,children:[(0,J.jsxs)(`div`,{className:`flex items-center justify-between px-6 py-4 border-b border-neutral-800`,children:[(0,J.jsxs)(`div`,{children:[(0,J.jsx)(`h2`,{className:`text-lg font-black tracking-tight`,children:`Import Customer GPX Route`}),(0,J.jsx)(`p`,{className:`text-xs text-neutral-400 mt-0.5`,children:`Exact customer waypoint sequence will be preserved`})]}),(0,J.jsx)(`button`,{onClick:n,className:`p-2 rounded-xl text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors`,children:(0,J.jsx)(ct,{className:`w-5 h-5`})})]}),(0,J.jsxs)(`div`,{className:`flex border-b border-neutral-800 px-6 pt-3 gap-2 bg-neutral-950/40`,children:[(0,J.jsxs)(`button`,{onClick:()=>{a(`samples`),d(null)},className:`pb-2.5 px-3 text-xs font-bold border-b-2 transition-all flex items-center gap-1.5 ${i===`samples`?`border-emerald-400 text-emerald-400`:`border-transparent text-neutral-400 hover:text-neutral-200`}`,children:[(0,J.jsx)(nt,{className:`w-3.5 h-3.5`}),(0,J.jsx)(`span`,{children:`Sample Routes`})]}),(0,J.jsxs)(`button`,{onClick:()=>{a(`upload`),d(null)},className:`pb-2.5 px-3 text-xs font-bold border-b-2 transition-all flex items-center gap-1.5 ${i===`upload`?`border-emerald-400 text-emerald-400`:`border-transparent text-neutral-400 hover:text-neutral-200`}`,children:[(0,J.jsx)(Ae,{className:`w-3.5 h-3.5`}),(0,J.jsx)(`span`,{children:`Upload GPX File`})]}),(0,J.jsxs)(`button`,{onClick:()=>{a(`paste`),d(null)},className:`pb-2.5 px-3 text-xs font-bold border-b-2 transition-all flex items-center gap-1.5 ${i===`paste`?`border-emerald-400 text-emerald-400`:`border-transparent text-neutral-400 hover:text-neutral-200`}`,children:[(0,J.jsx)(Re,{className:`w-3.5 h-3.5`}),(0,J.jsx)(`span`,{children:`Paste XML`})]})]}),(0,J.jsxs)(`div`,{className:`p-6 overflow-y-auto flex-1 space-y-4`,children:[u&&(0,J.jsxs)(`div`,{className:`p-3 rounded-xl bg-red-950/80 border border-red-800 text-red-200 text-xs flex items-center gap-2`,children:[(0,J.jsx)(Te,{className:`w-4 h-4 shrink-0 text-red-400`}),(0,J.jsx)(`span`,{children:u})]}),i===`samples`&&(0,J.jsxs)(`div`,{className:`space-y-3`,children:[(0,J.jsx)(`p`,{className:`text-xs text-neutral-400`,children:`Instantly load ready-to-test customer routes, or download the GPX to import into OsmAnd:`}),k.map(e=>(0,J.jsxs)(`div`,{className:`p-4 rounded-2xl border transition-all ${f?.filename===`${e.id}.gpx`?`border-emerald-500 bg-emerald-950/20`:t?`border-neutral-800 bg-neutral-950 hover:border-neutral-700`:`border-neutral-200 bg-neutral-50 hover:border-neutral-300`}`,children:[(0,J.jsx)(`div`,{className:`flex items-start justify-between gap-3`,children:(0,J.jsxs)(`div`,{children:[(0,J.jsx)(`h3`,{className:`font-bold text-sm text-neutral-100`,children:e.title}),(0,J.jsx)(`p`,{className:`text-xs text-neutral-400 mt-1 leading-relaxed`,children:e.description}),(0,J.jsxs)(`span`,{className:`inline-block mt-2 text-[11px] font-mono font-bold px-2 py-0.5 rounded bg-neutral-800 text-emerald-400`,children:[e.stopCount,` Sequenced Stops`]})]})}),(0,J.jsxs)(`div`,{className:`mt-3 pt-3 border-t border-neutral-800/80 flex items-center justify-between gap-2`,children:[(0,J.jsx)(`button`,{onClick:()=>y(e),className:`px-3.5 py-1.5 text-xs font-bold rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white transition-colors`,children:`Select Route`}),(0,J.jsxs)(`button`,{onClick:()=>x(e),className:`flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg border border-neutral-700 text-neutral-300 hover:text-white hover:bg-neutral-800 transition-colors`,title:`Download .gpx file to load into OsmAnd`,children:[(0,J.jsx)(Fe,{className:`w-3.5 h-3.5`}),(0,J.jsx)(`span`,{children:`Download GPX`})]})]})]},e.id))]}),i===`upload`&&(0,J.jsxs)(`div`,{onDragOver:e=>{e.preventDefault(),l(!0)},onDragLeave:()=>l(!1),onDrop:h,className:`border-2 border-dashed rounded-2xl p-8 text-center flex flex-col items-center justify-center transition-all ${c?`border-emerald-400 bg-emerald-950/20`:t?`border-neutral-700 bg-neutral-950/60`:`border-neutral-300 bg-neutral-50`}`,children:[(0,J.jsx)(Ae,{className:`w-10 h-10 text-emerald-400 mb-3`}),(0,J.jsx)(`p`,{className:`font-bold text-sm mb-1`,children:`Drag and drop your GPX file here`}),(0,J.jsx)(`p`,{className:`text-xs text-neutral-400 mb-4`,children:`Supports OsmAnd waypoints, routepoints, and favorites (.gpx)`}),(0,J.jsxs)(`label`,{className:`cursor-pointer px-4 py-2 text-xs font-bold rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white transition-colors`,children:[`Browse Files`,(0,J.jsx)(`input`,{type:`file`,className:`hidden`,onChange:g})]}),(0,J.jsxs)(`p`,{className:`text-[11px] text-neutral-400 mt-3 max-w-xs`,children:[`💡 Tip: If Samsung shows "No files", tap `,(0,J.jsx)(`span`,{className:`font-semibold text-neutral-200`,children:`Recent files`}),` at the top, or switch to the `,(0,J.jsx)(`span`,{className:`font-semibold text-emerald-400`,children:`Paste GPX`}),` tab!`]})]}),i===`paste`&&(0,J.jsxs)(`div`,{className:`space-y-3`,children:[(0,J.jsx)(`label`,{className:`block text-xs font-bold uppercase text-neutral-400`,children:`Paste GPX XML Code`}),(0,J.jsx)(`textarea`,{value:o,onChange:e=>s(e.target.value),placeholder:`<?xml version='1.0' encoding='UTF-8'?>\\n<gpx version='1.1' ...>\\n  <wpt lat='...' lon='...'>\\n    <name>Customer Name</name>\\n    <desc>123 Main St</desc>\\n  </wpt>\\n</gpx>`,rows:7,className:`w-full rounded-xl p-3 text-xs font-mono bg-neutral-950 border border-neutral-700 text-neutral-200 focus:outline-none focus:border-emerald-400 resize-none`}),(0,J.jsx)(`button`,{onClick:_,className:`w-full py-2.5 text-xs font-bold rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white transition-colors`,children:`Parse GPX Text`})]}),f&&(0,J.jsxs)(`div`,{className:`p-4 rounded-2xl border border-emerald-500/50 bg-emerald-950/20 space-y-2`,children:[(0,J.jsxs)(`div`,{className:`flex items-center gap-2 text-emerald-400 font-bold text-sm`,children:[(0,J.jsx)(Ee,{className:`w-4 h-4`}),(0,J.jsxs)(`span`,{children:[`Ready to load: `,f.routeName]})]}),(0,J.jsxs)(`div`,{className:`text-xs text-neutral-300 space-y-1`,children:[(0,J.jsxs)(`p`,{children:[`Found `,(0,J.jsxs)(`strong`,{className:`text-emerald-300`,children:[f.stops.length,` stops`]}),` in exact GPX order.`]}),(0,J.jsxs)(`p`,{className:`text-[11px] text-neutral-400`,children:[`Stop #1: `,(0,J.jsx)(`strong`,{children:f.stops[0]?.name}),` (`,f.stops[0]?.houseNumber?`#${f.stops[0].houseNumber} `:``,f.stops[0]?.streetName,`)`]}),f.stops.length>1&&(0,J.jsxs)(`p`,{className:`text-[11px] text-neutral-400`,children:[`Final Stop #`,f.stops.length,`: `,(0,J.jsx)(`strong`,{children:f.stops[f.stops.length-1]?.name})]})]})]})]}),(0,J.jsxs)(`div`,{className:`px-6 py-4 border-t border-neutral-800 flex items-center justify-end gap-3 bg-neutral-950/40`,children:[(0,J.jsx)(`button`,{onClick:n,className:`px-4 py-2 text-xs font-semibold rounded-xl border border-neutral-700 text-neutral-300 hover:bg-neutral-800 transition-colors`,children:`Cancel`}),(0,J.jsxs)(`button`,{disabled:!f,onClick:b,className:`px-5 py-2.5 text-xs font-extrabold rounded-xl transition-all ${f?`bg-emerald-500 hover:bg-emerald-400 text-black shadow-lg shadow-emerald-950/50`:`opacity-40 cursor-not-allowed bg-neutral-800 text-neutral-500`}`,children:[`Start Route with `,f?.stops.length||0,` Stops`]})]})]})})},ht=({isOpen:e,isDark:t,stops:n,currentIndex:r,routeName:i,onClose:a,onSelectStop:o,onResetRoute:s})=>{let[c,l]=(0,v.useState)(``);if(!e)return null;let u=n.map((e,t)=>({stop:e,originalIndex:t})).filter(({stop:e,originalIndex:t})=>{let n=c.toLowerCase(),r=S(e,t);return e.name.toLowerCase().includes(n)||e.fullAddress.toLowerCase().includes(n)||r!==`—`&&r.toLowerCase().includes(n)||String(e.orderIndex).includes(n)});return(0,J.jsx)(`div`,{className:`fixed inset-0 z-50 flex justify-end bg-black/85 backdrop-blur-sm animate-in fade-in duration-200`,children:(0,J.jsxs)(`div`,{className:`w-full max-w-md h-full flex flex-col shadow-2xl border-l ${t?`bg-neutral-950 border-neutral-800 text-white`:`bg-white border-neutral-300 text-black`}`,children:[(0,J.jsxs)(`div`,{className:`p-4 border-b border-neutral-800 flex items-center justify-between`,children:[(0,J.jsxs)(`div`,{className:`flex items-center gap-2.5`,children:[(0,J.jsx)(`img`,{src:`/icon-192.png`,alt:`Garbage Route`,className:`w-8 h-8 rounded-lg border border-emerald-400/50 shadow-sm shrink-0 object-cover`}),(0,J.jsxs)(`div`,{children:[(0,J.jsx)(`h2`,{className:`font-black text-base tracking-tight`,children:`Garbage Route Sequence`}),(0,J.jsxs)(`p`,{className:`text-xs text-neutral-400`,children:[n.length,` Total Waypoints · Preserved Order`]})]})]}),(0,J.jsx)(`button`,{onClick:a,className:`p-2 rounded-xl text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors`,children:(0,J.jsx)(ct,{className:`w-5 h-5`})})]}),(0,J.jsx)(`div`,{className:`p-3 border-b border-neutral-800 bg-neutral-900/60`,children:(0,J.jsxs)(`div`,{className:`relative`,children:[(0,J.jsx)(Ze,{className:`w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400`}),(0,J.jsx)(`input`,{type:`text`,value:c,onChange:e=>l(e.target.value),placeholder:`Search customer, house #, or street...`,className:`w-full pl-9 pr-4 py-2 text-xs rounded-xl bg-neutral-950 border border-neutral-800 text-neutral-100 placeholder:text-neutral-500 focus:outline-none focus:border-emerald-400`}),c&&(0,J.jsx)(`button`,{onClick:()=>l(``),className:`absolute right-2.5 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-white text-xs`,children:`Clear`})]})}),(0,J.jsx)(`div`,{className:`flex-1 overflow-y-auto divide-y divide-neutral-800/60 p-2`,children:u.length===0?(0,J.jsxs)(`div`,{className:`text-center py-12 text-neutral-400 text-xs`,children:[`No customers found matching "`,c,`"`]}):u.map(({stop:e,originalIndex:n})=>{let i=n===r;return(0,J.jsxs)(`div`,{onClick:()=>{o(n),a()},className:`p-3 rounded-xl transition-all cursor-pointer flex items-center gap-3 my-1 ${i?`bg-emerald-950/40 border-2 border-emerald-500/80 shadow-md`:t?`hover:bg-neutral-900/80 border border-transparent`:`hover:bg-neutral-100 border border-transparent`}`,children:[(0,J.jsxs)(`div`,{className:`w-9 h-9 rounded-xl flex items-center justify-center font-mono font-bold text-xs shrink-0 ${i?`bg-emerald-500 text-black shadow-md`:e.status===`completed`?`bg-neutral-800 text-emerald-400 border border-emerald-800/50`:e.status===`skipped`?`bg-amber-950 text-amber-400 border border-amber-800/50`:`bg-neutral-900 text-neutral-300 border border-neutral-800`}`,children:[`#`,e.orderIndex]}),(0,J.jsxs)(`div`,{className:`flex-1 min-w-0`,children:[(0,J.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,J.jsx)(`span`,{className:`font-bold text-sm truncate ${i?`text-emerald-300`:`text-neutral-100`}`,children:e.name}),(()=>{let t=S(e,n);return t===`—`?null:(0,J.jsxs)(`span`,{className:`text-[10px] font-mono px-1.5 py-0.2 rounded bg-neutral-800 text-amber-300 border border-neutral-700`,children:[`#`,t]})})()]}),(0,J.jsx)(`p`,{className:`text-xs text-neutral-400 truncate mt-0.5`,children:e.fullAddress})]}),(0,J.jsxs)(`div`,{className:`shrink-0 flex items-center gap-1.5`,children:[e.status===`completed`&&(0,J.jsx)(`span`,{className:`flex items-center gap-1 text-[11px] font-semibold text-emerald-400`,children:(0,J.jsx)(Ee,{className:`w-4 h-4`})}),e.status===`skipped`&&(0,J.jsx)(`span`,{className:`flex items-center gap-1 text-[11px] font-semibold text-amber-400`,children:(0,J.jsx)(et,{className:`w-4 h-4`})}),e.status===`pending`&&!i&&(0,J.jsx)(`span`,{className:`text-[11px] text-neutral-500`,children:(0,J.jsx)(ke,{className:`w-3.5 h-3.5`})}),i&&(0,J.jsx)(`span`,{className:`px-2 py-0.5 rounded-full text-[10px] font-black uppercase bg-emerald-500 text-black tracking-wider`,children:`Active`})]})]},e.id)})}),(0,J.jsxs)(`div`,{className:`p-3 border-t border-neutral-800 bg-neutral-900/60 flex items-center justify-between gap-2`,children:[(0,J.jsxs)(`button`,{onClick:s,className:`flex items-center gap-1.5 px-3 py-2 text-xs font-semibold rounded-xl text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors`,children:[(0,J.jsx)(Xe,{className:`w-3.5 h-3.5`}),(0,J.jsx)(`span`,{children:`Reset to Stop 1`})]}),(0,J.jsxs)(`button`,{onClick:()=>{let e=D(n,i),t=new Blob([e],{type:`application/gpx+xml`}),r=URL.createObjectURL(t),a=document.createElement(`a`);a.href=r,a.download=`${i.replace(/\s+/g,`_`)}_updated.gpx`,a.click(),URL.revokeObjectURL(r)},className:`flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold rounded-xl bg-neutral-800 hover:bg-neutral-700 text-neutral-200 hover:text-white transition-colors`,children:[(0,J.jsx)(Fe,{className:`w-3.5 h-3.5 text-emerald-400`}),(0,J.jsx)(`span`,{children:`Export GPX`})]})]})]})})},gt=({isOpen:e,isDark:t,settings:n,onClose:r,onUpdateSettings:i,onOpenImport:a,onResetProgress:o,onClearRoute:s,onOpenExport:c})=>e?(0,J.jsx)(`div`,{className:`fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-in fade-in duration-200`,children:(0,J.jsxs)(`div`,{className:`w-full max-w-md rounded-3xl border shadow-2xl overflow-hidden flex flex-col max-h-[90vh] ${t?`bg-neutral-900 border-neutral-700 text-white`:`bg-white border-neutral-300 text-black`}`,children:[(0,J.jsxs)(`div`,{className:`flex items-center justify-between px-6 py-4 border-b border-neutral-800`,children:[(0,J.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,J.jsx)(`img`,{src:`/icon-192.png`,alt:`Garbage Route`,className:`w-10 h-10 rounded-xl border border-emerald-400/60 shadow shrink-0 object-cover`}),(0,J.jsxs)(`div`,{children:[(0,J.jsx)(`h2`,{className:`text-lg font-black tracking-tight`,children:`Garbage Route Settings`}),(0,J.jsx)(`p`,{className:`text-xs text-neutral-400 mt-0.5`,children:`Driver & Navigation Preferences`})]})]}),(0,J.jsx)(`button`,{onClick:r,className:`p-2 rounded-xl text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors`,children:(0,J.jsx)(ct,{className:`w-5 h-5`})})]}),(0,J.jsxs)(`div`,{className:`p-6 overflow-y-auto space-y-5`,children:[(0,J.jsxs)(`div`,{children:[(0,J.jsx)(`label`,{className:`text-xs font-bold uppercase tracking-wider text-neutral-400 block mb-2`,children:`Display Mode`}),(0,J.jsxs)(`div`,{className:`grid grid-cols-2 gap-3`,children:[(0,J.jsxs)(`button`,{onClick:()=>i({theme:`amoled-black`}),className:`p-3.5 rounded-2xl border flex flex-col items-center justify-center gap-2 transition-all ${n.theme===`amoled-black`?`border-emerald-400 bg-neutral-950 text-white ring-2 ring-emerald-500/30`:`border-neutral-800 bg-neutral-950/40 text-neutral-400 hover:text-neutral-200`}`,children:[(0,J.jsx)(Ke,{className:`w-5 h-5 text-emerald-400`}),(0,J.jsx)(`span`,{className:`text-xs font-bold`,children:`AMOLED Pitch Black`}),(0,J.jsx)(`span`,{className:`text-[10px] text-neutral-400`,children:`Saves battery & high OLED contrast`})]}),(0,J.jsxs)(`button`,{onClick:()=>i({theme:`high-contrast-day`}),className:`p-3.5 rounded-2xl border flex flex-col items-center justify-center gap-2 transition-all ${n.theme===`high-contrast-day`?`border-emerald-400 bg-neutral-100 text-black ring-2 ring-emerald-500/30`:`border-neutral-800 bg-neutral-950/40 text-neutral-400 hover:text-neutral-200`}`,children:[(0,J.jsx)(it,{className:`w-5 h-5 text-amber-500`}),(0,J.jsx)(`span`,{className:`text-xs font-bold`,children:`Daylight High Contrast`}),(0,J.jsx)(`span`,{className:`text-[10px] text-neutral-400`,children:`Direct sunlight in vehicle mount`})]})]})]}),(0,J.jsxs)(`div`,{className:`flex items-center justify-between p-3.5 rounded-2xl border border-neutral-800 bg-neutral-950/50`,children:[(0,J.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,J.jsx)(`div`,{className:`p-2 rounded-xl bg-neutral-900 border border-neutral-800 text-emerald-400`,children:(0,J.jsx)(tt,{className:`w-4 h-4`})}),(0,J.jsxs)(`div`,{children:[(0,J.jsx)(`h4`,{className:`text-xs font-bold text-neutral-100`,children:`Keep Screen Awake`}),(0,J.jsx)(`p`,{className:`text-[11px] text-neutral-400`,children:`Prevents phone display from sleeping while on route`})]})]}),(0,J.jsx)(`input`,{type:`checkbox`,checked:n.keepScreenAwake,onChange:e=>i({keepScreenAwake:e.target.checked}),className:`w-5 h-5 accent-emerald-500 rounded cursor-pointer`})]}),(0,J.jsxs)(`div`,{className:`p-3.5 rounded-2xl border border-neutral-800 bg-neutral-950/50 space-y-3`,children:[(0,J.jsxs)(`div`,{className:`flex items-center justify-between`,children:[(0,J.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,J.jsx)(`div`,{className:`p-2 rounded-xl bg-neutral-900 border border-neutral-800 text-emerald-400`,children:(0,J.jsx)(st,{className:`w-4 h-4`})}),(0,J.jsxs)(`div`,{children:[(0,J.jsx)(`h4`,{className:`text-xs font-bold text-neutral-100`,children:`Voice Guidance & Turn Warnings`}),(0,J.jsx)(`p`,{className:`text-[11px] text-neutral-400`,children:`Speaks next customer stops & upcoming turn maneuvers`})]})]}),(0,J.jsx)(`input`,{type:`checkbox`,checked:n.voiceAnnouncement,onChange:e=>i({voiceAnnouncement:e.target.checked}),className:`w-5 h-5 accent-emerald-500 rounded cursor-pointer`})]}),n.voiceAnnouncement&&(0,J.jsxs)(`div`,{className:`pt-2 border-t border-neutral-800/80 space-y-1.5`,children:[(0,J.jsxs)(`div`,{className:`flex items-center justify-between text-[11px]`,children:[(0,J.jsx)(`span`,{className:`font-semibold text-neutral-300`,children:`Early Turn Warning Distance`}),(0,J.jsxs)(`span`,{className:`font-mono text-emerald-400 font-bold`,children:[n.turnWarningDistancesFeet&&n.turnWarningDistancesFeet[0]||500,` ft`]})]}),(0,J.jsx)(`div`,{className:`grid grid-cols-3 gap-1.5 pt-0.5`,children:[{distances:[500],label:`500 ft`,sub:`Standard (Rec)`},{distances:[600],label:`600 ft`,sub:`Highway / Fast`},{distances:[400],label:`400 ft`,sub:`Dense City`}].map(e=>{let t=(n.turnWarningDistancesFeet&&n.turnWarningDistancesFeet[0]||500)===e.distances[0];return(0,J.jsxs)(`button`,{type:`button`,onClick:()=>i({turnWarningDistancesFeet:e.distances}),className:`py-1.5 px-1 rounded-xl border flex flex-col items-center justify-center transition-all ${t?`border-emerald-400 bg-emerald-400/15 text-emerald-300 font-bold ring-1 ring-emerald-400/50`:`border-neutral-800 bg-neutral-900/60 text-neutral-400 hover:text-white`}`,children:[(0,J.jsx)(`span`,{className:`text-xs`,children:e.label}),(0,J.jsx)(`span`,{className:`text-[9px] text-neutral-500`,children:e.sub})]},e.label)})}),(0,J.jsx)(`p`,{className:`text-[10px] text-neutral-500`,children:`Spoken voice announces the upcoming maneuver and distance in advance (e.g. “Turn left in 500 feet”), followed by a direct instruction at the turn point (e.g. “Turn left”).`})]})]}),(0,J.jsxs)(`div`,{className:`flex items-center justify-between p-3.5 rounded-2xl border border-neutral-800 bg-neutral-950/50`,children:[(0,J.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,J.jsx)(`div`,{className:`p-2 rounded-xl bg-neutral-900 border border-neutral-800 text-amber-400`,children:(0,J.jsx)(nt,{className:`w-4 h-4`})}),(0,J.jsxs)(`div`,{children:[(0,J.jsx)(`h4`,{className:`text-xs font-bold text-neutral-100`,children:`Haptic Vibration`}),(0,J.jsx)(`p`,{className:`text-[11px] text-neutral-400`,children:`Tactile vibration feedback on button press`})]})]}),(0,J.jsx)(`input`,{type:`checkbox`,checked:n.hapticFeedback,onChange:e=>i({hapticFeedback:e.target.checked}),className:`w-5 h-5 accent-emerald-500 rounded cursor-pointer`})]}),(0,J.jsxs)(`div`,{className:`flex items-center justify-between p-3.5 rounded-2xl border border-neutral-800 bg-neutral-950/50`,children:[(0,J.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,J.jsx)(`div`,{className:`p-2 rounded-xl bg-neutral-900 border border-neutral-800 text-blue-400`,children:(0,J.jsx)(Ie,{className:`w-4 h-4`})}),(0,J.jsxs)(`div`,{children:[(0,J.jsx)(`h4`,{className:`text-xs font-bold text-neutral-100`,children:`Extra Large Typography`}),(0,J.jsx)(`p`,{className:`text-[11px] text-neutral-400`,children:`Maximizes readability from distance on dash mount`})]})]}),(0,J.jsx)(`input`,{type:`checkbox`,checked:n.extraLargeText,onChange:e=>i({extraLargeText:e.target.checked}),className:`w-5 h-5 accent-emerald-500 rounded cursor-pointer`})]}),(0,J.jsxs)(`div`,{className:`p-4 rounded-2xl border border-neutral-800 bg-neutral-950/50 space-y-2.5`,children:[(0,J.jsxs)(`div`,{className:`flex items-center justify-between`,children:[(0,J.jsxs)(`div`,{className:`flex items-center gap-2.5`,children:[(0,J.jsx)(`div`,{className:`p-2 rounded-xl bg-neutral-900 border border-neutral-800 text-amber-400`,children:(0,J.jsx)(Xe,{className:`w-4 h-4`})}),(0,J.jsxs)(`div`,{children:[(0,J.jsx)(`h4`,{className:`text-xs font-bold text-neutral-100`,children:`Arrival Proximity Window`}),(0,J.jsx)(`p`,{className:`text-[11px] text-neutral-400`,children:`Distance window for evaluating approaching stops`})]})]}),(0,J.jsxs)(`span`,{className:`text-xs font-mono font-bold text-amber-400`,children:[Math.round((n.arrivalRadiusMeters||152.4)*3.28084),` ft (`,Math.round(n.arrivalRadiusMeters||152.4),`m)`]})]}),(0,J.jsx)(`div`,{className:`grid grid-cols-5 gap-1.5 pt-1`,children:[{meters:50,label:`50m`,sub:`164 ft`},{meters:75,label:`75m`,sub:`246 ft`},{meters:100,label:`100m`,sub:`328 ft`},{meters:152.4,label:`152m`,sub:`500 ft`,rec:!0},{meters:200,label:`200m`,sub:`656 ft`}].map(e=>{let t=Math.abs((n.arrivalRadiusMeters||152.4)-e.meters)<1;return(0,J.jsxs)(`button`,{type:`button`,onClick:()=>i({arrivalRadiusMeters:e.meters}),className:`py-2 px-1 rounded-xl border flex flex-col items-center justify-center transition-all ${t?`border-amber-400 bg-amber-400/15 text-amber-300 font-bold ring-1 ring-amber-400/50`:`border-neutral-800 bg-neutral-900/60 text-neutral-400 hover:text-white`}`,children:[(0,J.jsx)(`span`,{className:`text-xs`,children:e.label}),(0,J.jsx)(`span`,{className:`text-[9px] text-neutral-500`,children:e.sub}),e.rec&&(0,J.jsx)(`span`,{className:`text-[8px] text-emerald-400 font-mono mt-0.5`,children:`Rec`})]},e.meters)})}),(0,J.jsx)(`p`,{className:`text-[10px] text-neutral-500`,children:`500 ft (~152m) is the proximity window for evaluating an approaching customer. Arrival is confirmed when reaching the curbside or passing the address.`})]}),(0,J.jsxs)(`div`,{className:`p-4 rounded-2xl border border-neutral-800 bg-neutral-950/50 space-y-2.5`,children:[(0,J.jsxs)(`div`,{className:`flex items-center justify-between`,children:[(0,J.jsxs)(`div`,{className:`flex items-center gap-2.5`,children:[(0,J.jsx)(`div`,{className:`p-2 rounded-xl bg-neutral-900 border border-neutral-800 text-emerald-400`,children:(0,J.jsx)(De,{className:`w-4 h-4`})}),(0,J.jsxs)(`div`,{children:[(0,J.jsx)(`h4`,{className:`text-xs font-bold text-neutral-100`,children:`Arrival Confirmation Threshold`}),(0,J.jsx)(`p`,{className:`text-[11px] text-neutral-400`,children:`Curbside stop or pass-through threshold`})]})]}),(0,J.jsxs)(`span`,{className:`text-xs font-mono font-bold text-emerald-400`,children:[n.arrivalConfirmFeet||150,` ft (`,Math.round((n.arrivalConfirmFeet||150)*.3048),`m)`]})]}),(0,J.jsx)(`div`,{className:`grid grid-cols-5 gap-1.5 pt-1`,children:[{feet:100,label:`100 ft`,sub:`30m`},{feet:125,label:`125 ft`,sub:`38m`},{feet:150,label:`150 ft`,sub:`46m`,rec:!0},{feet:175,label:`175 ft`,sub:`53m`},{feet:200,label:`200 ft`,sub:`61m`}].map(e=>{let t=(n.arrivalConfirmFeet||150)===e.feet;return(0,J.jsxs)(`button`,{type:`button`,onClick:()=>i({arrivalConfirmFeet:e.feet}),className:`py-2 px-1 rounded-xl border flex flex-col items-center justify-center transition-all ${t?`border-emerald-400 bg-emerald-400/15 text-emerald-300 font-bold ring-1 ring-emerald-400/50`:`border-neutral-800 bg-neutral-900/60 text-neutral-400 hover:text-white`}`,children:[(0,J.jsx)(`span`,{className:`text-xs`,children:e.label}),(0,J.jsx)(`span`,{className:`text-[9px] text-neutral-500`,children:e.sub}),e.rec&&(0,J.jsx)(`span`,{className:`text-[8px] text-emerald-400 font-mono mt-0.5`,children:`Rec`})]},e.feet)})}),(0,J.jsx)(`p`,{className:`text-[10px] text-neutral-500`,children:`150 ft accounts for customer house/driveway setbacks from the street curb and GPS horizontal accuracy. Arrival confirms upon stopping or passing at delivery speed.`})]}),(0,J.jsxs)(`div`,{className:`pt-3 border-t border-neutral-800 space-y-2`,children:[(0,J.jsx)(`label`,{className:`text-xs font-bold uppercase tracking-wider text-neutral-400 block mb-2`,children:`Route Management`}),(0,J.jsxs)(`button`,{onClick:()=>{r(),c?.()},className:`w-full flex items-center justify-between p-3 rounded-xl border border-blue-800 hover:border-blue-700 bg-blue-950/40 text-xs font-bold text-blue-300 hover:text-white transition-colors`,children:[(0,J.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,J.jsx)(Be,{className:`w-4 h-4 text-blue-400`}),(0,J.jsx)(`span`,{children:`Export Project Source (.ZIP)`})]}),(0,J.jsx)(`span`,{className:`text-[10px] px-2 py-0.5 rounded bg-blue-900/60 text-blue-200 font-mono`,children:`Step 1`})]}),(0,J.jsxs)(`button`,{onClick:()=>{r(),a()},className:`w-full flex items-center justify-between p-3 rounded-xl border border-neutral-800 hover:border-neutral-700 bg-neutral-950/40 text-xs font-bold text-neutral-200 hover:text-white transition-colors`,children:[(0,J.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,J.jsx)(Be,{className:`w-4 h-4 text-neutral-400`}),(0,J.jsx)(`span`,{children:`Import Different GPX File`})]}),(0,J.jsx)(`span`,{className:`text-[10px] text-neutral-400`,children:`Browse...`})]}),(0,J.jsxs)(`button`,{onClick:()=>{o(),r()},className:`w-full flex items-center justify-between p-3 rounded-xl border border-neutral-800 hover:border-neutral-700 bg-neutral-950/40 text-xs font-bold text-neutral-200 hover:text-white transition-colors`,children:[(0,J.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,J.jsx)(Xe,{className:`w-4 h-4 text-amber-400`}),(0,J.jsx)(`span`,{children:`Reset Progress to Stop 1`})]}),(0,J.jsx)(`span`,{className:`text-[10px] text-neutral-400`,children:`Keep stops`})]}),(0,J.jsxs)(`button`,{onClick:()=>{confirm(`Clear current route and load fresh GPX?`)&&(s(),r())},className:`w-full flex items-center justify-between p-3 rounded-xl border border-red-900/60 hover:border-red-800 bg-red-950/20 text-xs font-bold text-red-300 hover:text-red-200 transition-colors`,children:[(0,J.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,J.jsx)(at,{className:`w-4 h-4 text-red-400`}),(0,J.jsx)(`span`,{children:`Clear Loaded Route`})]}),(0,J.jsx)(`span`,{className:`text-[10px] text-red-400/80`,children:`Delete`})]})]})]}),(0,J.jsx)(`div`,{className:`px-6 py-4 border-t border-neutral-800 flex justify-end bg-neutral-950/40`,children:(0,J.jsx)(`button`,{onClick:r,className:`px-5 py-2 text-xs font-bold rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black transition-colors`,children:`Done`})})]})}):null,Z=({stops:e,routeName:t,isDark:n,onRestart:r,onJumpToStop:i,onLoadNewRoute:a})=>{let o=e.filter(e=>e.status===`completed`).length,s=e.map((e,t)=>({stop:e,index:t})).filter(({stop:e})=>e.status===`skipped`);return(0,J.jsxs)(`div`,{className:`flex flex-col h-full justify-between p-4 max-w-lg mx-auto w-full text-center`,children:[(0,J.jsxs)(`div`,{className:`my-auto space-y-5`,children:[(0,J.jsx)(`div`,{className:`w-20 h-20 mx-auto rounded-3xl bg-emerald-500/20 border-2 border-emerald-500 flex items-center justify-center text-emerald-400 shadow-xl shadow-emerald-950/40`,children:(0,J.jsx)(De,{className:`w-10 h-10 stroke-[2.5]`})}),(0,J.jsxs)(`div`,{children:[(0,J.jsx)(`span`,{className:`text-xs font-bold tracking-widest uppercase text-emerald-400`,children:`Route Complete`}),(0,J.jsx)(`h1`,{className:`text-3xl font-black mt-1 text-white`,children:`All Customers Processed`}),(0,J.jsx)(`p`,{className:`text-xs text-neutral-400 mt-1`,children:t})]}),(0,J.jsxs)(`div`,{className:`grid grid-cols-2 gap-3 max-w-xs mx-auto`,children:[(0,J.jsxs)(`div`,{className:`p-3.5 rounded-2xl bg-neutral-900 border border-neutral-800 text-center`,children:[(0,J.jsx)(`span`,{className:`text-[11px] font-bold uppercase tracking-wider text-neutral-400 block`,children:`Completed`}),(0,J.jsx)(`span`,{className:`text-2xl font-black text-emerald-400 mt-0.5 block font-mono`,children:o})]}),(0,J.jsxs)(`div`,{className:`p-3.5 rounded-2xl bg-neutral-900 border border-neutral-800 text-center`,children:[(0,J.jsx)(`span`,{className:`text-[11px] font-bold uppercase tracking-wider text-neutral-400 block`,children:`Skipped`}),(0,J.jsx)(`span`,{className:`text-2xl font-black text-amber-400 mt-0.5 block font-mono`,children:s.length})]})]}),s.length>0?(0,J.jsxs)(`div`,{className:`text-left bg-neutral-950 rounded-2xl border border-neutral-800 p-4 max-h-56 overflow-y-auto space-y-2`,children:[(0,J.jsxs)(`div`,{className:`flex items-center justify-between text-xs font-bold text-amber-400 border-b border-neutral-800 pb-2`,children:[(0,J.jsxs)(`span`,{className:`flex items-center gap-1.5`,children:[(0,J.jsx)(et,{className:`w-3.5 h-3.5`}),`Skipped Customers (`,s.length,`)`]}),(0,J.jsx)(`span`,{className:`text-[10px] text-neutral-400`,children:`Tap to Revisit`})]}),s.map(({stop:e,index:t})=>(0,J.jsxs)(`div`,{onClick:()=>i(t),className:`p-2.5 rounded-xl bg-neutral-900 hover:bg-neutral-800 transition-colors cursor-pointer flex items-center justify-between text-xs`,children:[(0,J.jsxs)(`div`,{children:[(0,J.jsxs)(`span`,{className:`font-bold text-neutral-200`,children:[`#`,e.orderIndex,`. `,e.name]}),(0,J.jsx)(`p`,{className:`text-[11px] text-neutral-400 truncate max-w-[220px]`,children:e.fullAddress})]}),(0,J.jsx)(`span`,{className:`text-[10px] font-bold px-2 py-1 rounded bg-amber-950 text-amber-300 border border-amber-800`,children:`Re-visit`})]},e.id))]}):(0,J.jsx)(`div`,{className:`p-3 rounded-2xl bg-emerald-950/40 border border-emerald-800/60 text-xs text-emerald-300`,children:`★ Perfect run! Zero skipped customers.`})]}),(0,J.jsxs)(`div`,{className:`space-y-2.5 pt-4`,children:[(0,J.jsxs)(`button`,{onClick:()=>{let n=D(e,t),r=new Blob([n],{type:`application/gpx+xml`}),i=URL.createObjectURL(r),a=document.createElement(`a`);a.href=i,a.download=`${t.replace(/\s+/g,`_`)}_summary.gpx`,a.click(),URL.revokeObjectURL(i)},className:`w-full h-12 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-white font-bold text-xs flex items-center justify-center gap-2 border border-neutral-700 transition-colors`,children:[(0,J.jsx)(Fe,{className:`w-4 h-4 text-emerald-400`}),(0,J.jsx)(`span`,{children:`Export Final GPX Route`})]}),(0,J.jsxs)(`div`,{className:`grid grid-cols-2 gap-2`,children:[(0,J.jsxs)(`button`,{onClick:r,className:`h-12 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-neutral-200 font-bold text-xs flex items-center justify-center gap-2 border border-neutral-800 transition-colors`,children:[(0,J.jsx)(Xe,{className:`w-4 h-4 text-amber-400`}),(0,J.jsx)(`span`,{children:`Restart Route`})]}),(0,J.jsxs)(`button`,{onClick:a,className:`h-12 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-2 transition-colors`,children:[(0,J.jsx)(nt,{className:`w-4 h-4`}),(0,J.jsx)(`span`,{children:`Load New GPX`})]})]})]})]})},_t=`# Step-by-Step Guide: Build & Install on Samsung Galaxy S26

This guide walks you through building and installing your **Garbage Route** app as a native Android app (\`.apk\`) using only your Samsung S26 phone—with **no computer**, **no programming experience**, and **no paid subscriptions**.

---

## Step 1: Export Source Code from Google AI Studio

1. In Google AI Studio Build on your Samsung S26 browser:
2. Look at the top menu bar or top-right controls.
3. Tap the **Export / Download** button (or tap the \`⋮\` menu > **Download ZIP**).
4. Save the \`.zip\` archive to your Samsung **My Files > Downloads** folder.
5. In **My Files**, tap on the downloaded \`.zip\` and tap **Extract** to unpack it into a folder.

---

## Step 2: Set Up Free Cloud Build on GitHub (Using Only Your Phone)

Because an Android compiler requires high memory and CPU, we use GitHub's free cloud builder. You do not write any code—GitHub does it automatically in the cloud:

1. Open Samsung Internet or Chrome on your S26 and go to **[github.com](https://github.com)**.
2. Sign up for a free account (takes 1 minute).
3. Tap the **+** icon in the top right > **New repository**.
4. Name the repository: \`garbage-route\` and select **Private** (or Public). Tap **Create repository**.
5. On the next screen, tap **uploading an existing file**.
6. Select and upload the extracted files from your phone. Tap **Commit changes**.

---

## Step 3: Download Your APK

1. On your GitHub repository page on your phone, tap the **Actions** tab at the top.
2. You will see a workflow named **"Build Android APK"** running (indicated by a yellow spinning circle).
3. Wait approximately 2–3 minutes until it turns into a green checkmark (**Passed**).
4. Tap the completed run.
5. Scroll down to the **Artifacts** section at the bottom.
6. Tap **Garbage-Route-APK** to download the ZIP file (\`Garbage-Route-APK.zip\`) to your phone.

---

## Step 4: Install the APK on Samsung S26

### ⚠️ If you see "App not installed" even after clicking "Install anyway":
1. **Uninstall any previous version of the app first**:
   - Android **strictly blocks** installing an updated APK over an existing one if the build signing certificates differ (every cloud build on GitHub generates a fresh build certificate).
   - Find the old app icon on your phone's home screen or apps list.
   - **Long-press the icon and tap "Uninstall"**.
2. **Check Samsung Auto Blocker (Samsung Galaxy One UI 6+)**:
   - Open your phone's **Settings** > **Security and privacy** > **Auto Blocker**.
   - Make sure **Auto Blocker** is temporarily toggled **OFF** (Samsung Auto Blocker silently blocks sideloaded APK installations).
3. **Extract the ZIP before installing**:
   - GitHub downloads the artifact as a \`.zip\` archive.
   - Open **My Files** > **Downloads**.
   - Tap \`Garbage-Route-APK.zip\` and tap **Extract**.
   - Inside the extracted folder, tap \`app-debug.apk\`.

### Installation steps:
1. Open the **My Files** app on your Samsung S26.
2. Go to **Downloads** and tap \`app-debug.apk\` (inside the extracted folder).
3. If prompted with *"For your security, your phone is not allowed to install unknown apps from this source"*:
   - Tap **Settings** in the dialog.
   - Switch the toggle next to **My Files** to **ON**.
   - Tap Back.
4. If Google Play Protect shows *"Blocked by Play Protect / Unrecognized app"*:
   - Tap **More details** > **Install anyway**.
5. Once installed, tap **Open**.
6. When prompted, grant **Location Permission** (*"While using the app"*).

---

## Step 5: How OsmAnd Communicates with the Native App

1. Open **OsmAnd** on your phone.
2. Open **Garbage Route** in **Samsung Split-Screen Mode**:
   - Swipe up and hold to open Recent Apps.
   - Tap the Garbage Route app icon at the top of its card.
   - Tap **Open in split screen view**.
   - Select **OsmAnd** as the second app.
3. In Garbage Route, tap **Import GPX** and select your \`OsmAnd_Customer_Markers.gpx\`.
4. Tap **Open in OsmAnd** on customer #1.
5. Because the app is now running as a native Android app:
   - The native Kotlin component binds directly to OsmAnd's background service (\`net.osmand.aidl.OsmandAidlService\`).
   - Turn maneuver arrows, street names, and distances update directly in the top panel!
   - 50-ft automatic arrival advance marks the stop done as you arrive.
`,vt=`<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover" />
    <title>Garbage Route</title>
    <meta name="description" content="Garbage Route — High-contrast Android customer route assistant with sequential GPX stop guidance, address display, and one-tap stop skip." />
    <meta property="og:title" content="Garbage Route" />
    <meta property="og:description" content="Garbage Route — High-contrast Android customer route assistant with sequential GPX stop guidance, address display, and one-tap stop skip." />
    <meta property="og:type" content="website" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="theme-color" content="#000000" />
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
    <link rel="icon" href="/favicon.ico" />
    <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
    <link rel="manifest" href="/manifest.json" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&family=JetBrains+Mono:wght@500;700;800&display=swap" rel="stylesheet" />
  </head>
  <body class="bg-black text-white antialiased select-none">
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"><\/script>
  </body>
</html>
`,yt=`{
  "name": "react-example",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite --port=3000 --host=0.0.0.0",
    "build": "vite build && node scripts/package_zip.js",
    "package-zip": "node scripts/package_zip.js",
    "preview": "vite preview",
    "clean": "rm -rf dist server.js",
    "lint": "tsc --noEmit"
  },
  "dependencies": {
    "@google/genai": "^2.4.0",
    "@tailwindcss/vite": "^4.3.3",
    "@types/jszip": "^3.4.1",
    "@types/leaflet": "^1.9.22",
    "@vitejs/plugin-react": "^6.1.1",
    "dotenv": "^17.2.3",
    "express": "^4.21.2",
    "jszip": "^3.10.2",
    "leaflet": "^1.9.4",
    "lucide-react": "^0.546.0",
    "motion": "^12.23.24",
    "react": "^19.0.1",
    "react-dom": "^19.0.1",
    "vite": "^8.3.0"
  },
  "devDependencies": {
    "@types/node": "^22.14.0",
    "@types/react": "^19.3.0",
    "@types/react-dom": "^19.3.0",
    "autoprefixer": "^10.4.21",
    "esbuild": "^0.25.0",
    "tailwindcss": "^4.3.3",
    "tsx": "^4.21.0",
    "typescript": "^7.0.2",
    "@types/express": "^4.17.21"
  }
}
`,bt=`#!/bin/bash
set -e

SRC="public/assets/aistudio/6e7b8089fea9910a922c550128600ea0ae0655239faecd8111e524a6f4acf3c5_05fc168f.png"
if [ ! -f "$SRC" ]; then
  echo "Error: source image not found at $SRC"
  exit 1
fi

echo "Source image verified: $SRC"

# Densities and sizes:
# Density | ic_launcher.png (48dp) | ic_launcher_foreground.png (108dp canvas, ~80dp art centered)
# mdpi    | 48x48                 | 108x108 (art ~80x80)
# hdpi    | 72x72                 | 162x162 (art ~120x120)
# xhdpi   | 96x96                 | 216x216 (art ~160x160)
# xxhdpi  | 144x144               | 324x324 (art ~240x240)
# xxxhdpi | 192x192               | 432x432 (art ~320x320)

declare -A LEGACY_SIZES=( ["mdpi"]=48 ["hdpi"]=72 ["xhdpi"]=96 ["xxhdpi"]=144 ["xxxhdpi"]=192 )
declare -A ADAPTIVE_CANVAS=( ["mdpi"]=108 ["hdpi"]=162 ["xhdpi"]=216 ["xxhdpi"]=324 ["xxxhdpi"]=432 )
declare -A ADAPTIVE_ART=( ["mdpi"]=80 ["hdpi"]=120 ["xhdpi"]=160 ["xxhdpi"]=240 ["xxxhdpi"]=320 )

for DENSITY in mdpi hdpi xhdpi xxhdpi xxxhdpi; do
  TARGET_DIR="android/app/src/main/res/mipmap-$DENSITY"
  mkdir -p "$TARGET_DIR"
  
  LEGACY_SZ=\${LEGACY_SIZES[$DENSITY]}
  CANVAS_SZ=\${ADAPTIVE_CANVAS[$DENSITY]}
  ART_SZ=\${ADAPTIVE_ART[$DENSITY]}
  
  # Standard launcher icon
  convert "$SRC" -resize "\${LEGACY_SZ}x\${LEGACY_SZ}" "$TARGET_DIR/ic_launcher.png"
  convert "$SRC" -resize "\${LEGACY_SZ}x\${LEGACY_SZ}" "$TARGET_DIR/ic_launcher_round.png"
  
  # Adaptive foreground: resized art centered on transparent canvas of size CANVAS_SZ
  convert -size "\${CANVAS_SZ}x\${CANVAS_SZ}" xc:transparent \\
    \\( "$SRC" -resize "\${ART_SZ}x\${ART_SZ}" \\) -gravity center -composite \\
    "$TARGET_DIR/ic_launcher_foreground.png"
    
  echo "Generated $DENSITY icons: legacy=\${LEGACY_SZ}x\${LEGACY_SZ}, foreground=\${CANVAS_SZ}x\${CANVAS_SZ}"
done

# Also generate web & PWA icons
convert "$SRC" -resize 192x192 public/icon-192.png
convert "$SRC" -resize 512x512 public/icon-512.png
convert "$SRC" -resize 180x180 public/apple-touch-icon.png
convert "$SRC" -resize 32x32 public/favicon.png
convert "$SRC" -resize 32x32 public/favicon.ico

echo "All Android launcher icons and PWA icons generated successfully!"
`,xt=`import fs from 'fs';
import path from 'path';
import JSZip from 'jszip';

async function main() {
  console.log('Packaging lightweight, fast Garbage Route Source ZIP (strictly < 25MB)...');
  const zip = new JSZip();

  function addFile(filePath, zipPath) {
    if (fs.existsSync(filePath)) {
      const content = fs.readFileSync(filePath);
      zip.file(zipPath || filePath, content);
    }
  }

  function addDir(dir, prefix = '') {
    if (!fs.existsSync(dir)) return;
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
      if (
        entry.name === 'node_modules' ||
        entry.name === '.git' ||
        entry.name === '.aistudio' ||
        entry.name === 'build' ||
        entry.name.endsWith('.zip') ||
        entry.name.endsWith('.log') ||
        entry.name.startsWith('Screenshot_') ||
        entry.name === '.DS_Store'
      ) {
        continue;
      }
      const fullPath = path.join(dir, entry.name);
      const relPath = prefix ? \`\${prefix}/\${entry.name}\` : entry.name;
      if (entry.isDirectory()) {
        addDir(fullPath, relPath);
      } else {
        const content = fs.readFileSync(fullPath);
        zip.file(relPath, content);
      }
    }
  }

  // 1. Add all root config & doc files
  const rootFiles = [
    'index.html',
    'package.json',
    'tsconfig.json',
    'vite.config.ts',
    '.env.example',
    '.gitignore',
    'metadata.json',
    'README.md',
    'EXPORT_AND_BUILD_GUIDE.md',
  ];
  for (const f of rootFiles) {
    addFile(f, f);
  }

  // 2. Add complete src directory
  addDir('src', 'src');

  // 3. Add scripts directory
  addDir('scripts', 'scripts');

  // 3b. Add public directory assets (excluding zip files and old screenshots)
  addDir('public', 'public');

  // 4. Add clean GitHub Actions workflows
  addDir('.github', '.github');

  // 5. Clean and prepare fresh minimal Android web assets from dist
  const assetsDir = 'android/app/src/main/assets';
  const assetsDistDir = 'android/app/src/main/assets/dist';
  
  if (fs.existsSync(assetsDir)) {
    // Remove stale compiled bundles to eliminate APK bloat
    fs.rmSync(assetsDir, { recursive: true, force: true });
  }
  fs.mkdirSync(assetsDistDir, { recursive: true });

  if (fs.existsSync('dist')) {
    const distFiles = fs.readdirSync('dist');
    for (const file of distFiles) {
      if (file.endsWith('.zip')) continue;
      const srcPath = path.join('dist', file);
      const stat = fs.statSync(srcPath);
      if (stat.isFile()) {
        fs.copyFileSync(srcPath, path.join(assetsDir, file));
        fs.copyFileSync(srcPath, path.join(assetsDistDir, file));
      } else if (stat.isDirectory()) {
        fs.cpSync(srcPath, path.join(assetsDir, file), { recursive: true });
        fs.cpSync(srcPath, path.join(assetsDistDir, file), { recursive: true });
      }
    }
  }

  // 6. Add clean native Android wrapper with compiled assets
  addDir('android', 'android');

  // 7. Generate highly-compressed zip archive
  console.log('Generating ZIP binary with maximum compression...');
  const buffer = await zip.generateAsync({
    type: 'nodebuffer',
    compression: 'DEFLATE',
    compressionOptions: { level: 9 },
  });

  const sizeMb = (buffer.length / (1024 * 1024)).toFixed(2);
  console.log(\`ZIP Size: \${sizeMb} MB (Strictly below GitHub 25 MB limit!)\`);

  const destinations = [
    'Garbage_Route_Source.zip',
    'public/Garbage_Route_Source.zip',
    'dist/Garbage_Route_Source.zip',
  ];

  for (const dest of destinations) {
    const dir = path.dirname(dest);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(dest, buffer);
    console.log(\`Wrote \${buffer.length} bytes to \${dest}\`);
  }

  console.log('Successfully packaged lightweight Garbage Route Source ZIP!');
}

main().catch((err) => {
  console.error('Error packaging zip:', err);
  process.exit(1);
});
`,St=`/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { RouteData, RouteStop, AppSettings } from './types/route';
import { parseGPX, getStopHouseNumber } from './utils/gpxParser';
import { SAMPLE_GPX_ROUTES } from './utils/sampleRoutes';
import { triggerHaptic, announceStop, requestWakeLock, releaseWakeLock, cancelTurnAnnouncements } from './utils/voiceAndHaptics';
import { StopCard } from './components/StopCard';
import { GpxImportModal } from './components/GpxImportModal';
import { RouteListDrawer } from './components/RouteListDrawer';
import { SettingsModal } from './components/SettingsModal';
import { RouteCompletionView } from './components/RouteCompletionView';
import { ExportModal } from './components/ExportModal';
import { useGpsTracker } from './utils/useGpsTracker';
import { 
  Compass, 
  Upload, 
  RotateCcw,
  Sparkles,
  CheckCircle2
} from 'lucide-react';

const STORAGE_KEY = 'osmand_route_assistant_v1';
const SETTINGS_KEY = 'osmand_route_assistant_settings_v1';

const DEFAULT_SETTINGS: AppSettings = {
  theme: 'amoled-black',
  voiceAnnouncement: true,
  hapticFeedback: true,
  keepScreenAwake: true,
  extraLargeText: false,
  arrivalRadiusMeters: 152.4, // Configurable 500-foot proximity window default
  arrivalConfirmFeet: 150, // Configurable 150-foot arrival confirmation threshold default
  turnWarningDistancesFeet: [500], // Early advance turn warning distance in feet (followed by direct turn instruction at turn point)
};

export default function App() {
  // Load settings from localStorage
  const [settings, setSettings] = useState<AppSettings>(() => {
    try {
      const saved = localStorage.getItem(SETTINGS_KEY);
      if (saved) {
        return { ...DEFAULT_SETTINGS, ...JSON.parse(saved) };
      }
    } catch (e) {
      // fallback
    }
    return DEFAULT_SETTINGS;
  });

  // Load route data from localStorage or initialize with sample route
  const [routeData, setRouteData] = useState<RouteData | null>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed && Array.isArray(parsed.stops) && parsed.stops.length > 0) {
          // Sanitize/re-extract house numbers so any stale "002" stop sequence numbers
          // are restored to the genuine house number extracted from the customer's delivery address!
          const healedStops = parsed.stops.map((s: RouteStop, idx: number) => {
            const trueHouseNumber = getStopHouseNumber(s, idx);
            return {
              ...s,
              houseNumber: trueHouseNumber !== '—' ? trueHouseNumber : (s.houseNumber && !/^0+\\d+$/.test(s.houseNumber) ? s.houseNumber : ''),
            };
          });
          return {
            ...parsed,
            stops: healedStops,
          };
        }
      }
    } catch (e) {
      // fallback
    }

    // Default: initialize with first sample route so app is immediately usable
    try {
      const defaultPreset = SAMPLE_GPX_ROUTES[0];
      const parsed = parseGPX(defaultPreset.gpxXml, defaultPreset.title);
      return {
        id: defaultPreset.id,
        name: parsed.routeName,
        filename: \`\${defaultPreset.id}.gpx\`,
        stops: parsed.stops,
        currentIndex: 0,
        importedAt: Date.now(),
        lastUpdated: Date.now(),
      };
    } catch (e) {
      return null;
    }
  });

  // Modals & Drawers state
  const [isImportOpen, setIsImportOpen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isExportOpen, setIsExportOpen] = useState(false);
  const [skipToast, setSkipToast] = useState<{ message: string; previousIndex: number } | null>(null);
  const [arrivalToast, setArrivalToast] = useState<string | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);

  // Direct Android file picker import handler
  const handleDirectFileImport = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      const text = await file.text();
      const cleanFileName = file.name.replace(/\\.[^/.]+$/, '');
      const { stops, routeName } = parseGPX(text, cleanFileName);

      if (stops.length === 0) {
        throw new Error('No waypoints found in the selected GPX file.');
      }

      if (settings.hapticFeedback) triggerHaptic('complete');

      // Replace sample customers with the imported customers
      const newRoute: RouteData = {
        id: \`route-\${Date.now().toString(36)}\`,
        name: routeName || file.name,
        filename: file.name,
        stops: stops, // exact file order preserved
        currentIndex: 0,
        importedAt: Date.now(),
        lastUpdated: Date.now(),
      };

      setRouteData(newRoute);
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(newRoute));
      } catch (err) {
        console.error('Storage error', err);
      }

      setArrivalToast(\`Imported \${file.name} (\${stops.length} stops)\`);
      setTimeout(() => setArrivalToast(null), 4000);
    } catch (err: any) {
      setArrivalToast(err.message || 'Failed to read or parse GPX file.');
      setTimeout(() => setArrivalToast(null), 4000);
    } finally {
      if (e.target) {
        e.target.value = '';
      }
    }
  };

  // Sync route data to localStorage whenever it changes
  useEffect(() => {
    if (routeData) {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(routeData));
      } catch (e) {
        console.error('Failed to save route to localStorage', e);
      }
    } else {
      localStorage.removeItem(STORAGE_KEY);
    }
  }, [routeData]);

  // Sync settings to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
    } catch (e) {
      console.error('Failed to save settings', e);
    }
  }, [settings]);

  // Handle Screen WakeLock
  useEffect(() => {
    if (settings.keepScreenAwake) {
      requestWakeLock();
    } else {
      releaseWakeLock();
    }

    return () => {
      releaseWakeLock();
    };
  }, [settings.keepScreenAwake]);

  // Voice announcement on customer stop change
  const isFirstMount = useRef(true);
  useEffect(() => {
    if (isFirstMount.current) {
      isFirstMount.current = false;
      return;
    }
    if (settings.voiceAnnouncement && routeData && routeData.stops[routeData.currentIndex]) {
      const current = routeData.stops[routeData.currentIndex];
      const houseNumber = getStopHouseNumber(current, routeData.currentIndex);
      announceStop(current.name, houseNumber !== '—' ? houseNumber : '');
    }
  }, [routeData?.currentIndex, settings.voiceAnnouncement]);

  const isDark = settings.theme === 'amoled-black';

  // Automatic GPS Arrival Advance (within ~50 feet / 15m)
  const handleAutoArrive = () => {
    if (!routeData) return;
    if (settings.hapticFeedback) triggerHaptic('complete');

    const arrivedStop = routeData.stops[routeData.currentIndex];

    setRouteData((prev) => {
      if (!prev) return null;
      const nextIndex = prev.currentIndex + 1;
      const updatedStops = [...prev.stops];

      // Mark current stop as completed
      if (updatedStops[prev.currentIndex]) {
        updatedStops[prev.currentIndex] = {
          ...updatedStops[prev.currentIndex],
          status: 'completed',
          statusTimestamp: Date.now(),
        };
      }

      return {
        ...prev,
        stops: updatedStops,
        currentIndex: nextIndex,
        lastUpdated: Date.now(),
      };
    });

    if (arrivedStop) {
      setArrivalToast(\`Auto-Arrived: #\${arrivedStop.orderIndex} \${arrivedStop.name}\`);
      setTimeout(() => {
        setArrivalToast(null);
      }, 3500);
    }
  };

  // Mark Customer as Picked Up (Manual confirmation)
  const lastMarkPickedUpTimeRef = useRef<number>(0);
  const handleMarkPickedUp = () => {
    if (!routeData) return;
    const now = Date.now();
    // Guard against repeated rapid events or double clicks completing multiple customers
    if (now - lastMarkPickedUpTimeRef.current < 750) return;
    lastMarkPickedUpTimeRef.current = now;

    if (settings.hapticFeedback) triggerHaptic('complete');
    cancelTurnAnnouncements();

    const currentIdx = routeData.currentIndex;
    if (currentIdx >= routeData.stops.length) return;
    const pickedUpStop = routeData.stops[currentIdx];

    setRouteData((prev) => {
      if (!prev || prev.currentIndex >= prev.stops.length) return prev;
      const prevIdx = prev.currentIndex;
      const updatedStops = [...prev.stops];

      // 1. Mark current stop as completed
      if (updatedStops[prevIdx]) {
        updatedStops[prevIdx] = {
          ...updatedStops[prevIdx],
          status: 'completed',
          statusTimestamp: Date.now(),
        };
      }

      // 2. Advance to the next uncompleted customer in the existing route sequence
      let nextIndex = prevIdx + 1;
      while (nextIndex < updatedStops.length && updatedStops[nextIndex].status === 'completed') {
        nextIndex++;
      }

      return {
        ...prev,
        stops: updatedStops,
        currentIndex: nextIndex,
        lastUpdated: Date.now(),
      };
    });

    if (pickedUpStop) {
      setArrivalToast(\`Picked Up: #\${pickedUpStop.orderIndex} \${pickedUpStop.name}\`);
      setTimeout(() => {
        setArrivalToast(null);
      }, 3500);
    }
  };

  // Skip Customer Immediately
  const handleSkipCustomer = () => {
    if (!routeData) return;
    if (settings.hapticFeedback) triggerHaptic('skip');

    const skippedStop = routeData.stops[routeData.currentIndex];
    const prevIdx = routeData.currentIndex;

    setRouteData((prev) => {
      if (!prev) return null;
      const nextIndex = prev.currentIndex + 1;
      const updatedStops = [...prev.stops];

      if (updatedStops[prev.currentIndex]) {
        updatedStops[prev.currentIndex] = {
          ...updatedStops[prev.currentIndex],
          status: 'skipped',
          statusTimestamp: Date.now(),
        };
      }

      return {
        ...prev,
        stops: updatedStops,
        currentIndex: nextIndex,
        lastUpdated: Date.now(),
      };
    });

    // Show temporary Undo toast
    if (skippedStop) {
      setSkipToast({
        message: \`Skipped: #\${skippedStop.orderIndex} \${skippedStop.name}\`,
        previousIndex: prevIdx,
      });
      setTimeout(() => {
        setSkipToast(null);
      }, 4000);
    }
  };

  // Return to Previous Customer
  const handlePreviousCustomer = () => {
    if (!routeData || routeData.currentIndex <= 0) return;
    if (settings.hapticFeedback) triggerHaptic('undo');

    setRouteData((prev) => {
      if (!prev) return null;
      return {
        ...prev,
        currentIndex: prev.currentIndex - 1,
        lastUpdated: Date.now(),
      };
    });
  };

  // Undo accidental skip from toast
  const handleUndoSkip = () => {
    if (!skipToast || !routeData) return;
    if (settings.hapticFeedback) triggerHaptic('undo');

    const restoreIndex = skipToast.previousIndex;
    setRouteData((prev) => {
      if (!prev) return null;
      const updatedStops = [...prev.stops];
      if (updatedStops[restoreIndex]) {
        updatedStops[restoreIndex] = {
          ...updatedStops[restoreIndex],
          status: 'pending',
        };
      }
      return {
        ...prev,
        stops: updatedStops,
        currentIndex: restoreIndex,
        lastUpdated: Date.now(),
      };
    });
    setSkipToast(null);
  };

  // Jump to specific stop from list
  const handleJumpToStop = (index: number) => {
    if (!routeData) return;
    if (settings.hapticFeedback) triggerHaptic('tap');

    setRouteData((prev) => {
      if (!prev) return null;
      return {
        ...prev,
        currentIndex: Math.max(0, Math.min(index, prev.stops.length)),
        lastUpdated: Date.now(),
      };
    });
  };

  // Reset route progress to Stop 1
  const handleResetProgress = () => {
    if (!routeData) return;
    if (settings.hapticFeedback) triggerHaptic('tap');

    setRouteData((prev) => {
      if (!prev) return null;
      const resetStops = prev.stops.map((s) => ({
        ...s,
        status: 'pending' as const,
        statusTimestamp: undefined,
      }));
      return {
        ...prev,
        stops: resetStops,
        currentIndex: 0,
        lastUpdated: Date.now(),
      };
    });
  };

  // Handle successful import of new GPX
  const handleImportSuccess = (stops: RouteStop[], routeName: string, filename: string) => {
    if (settings.hapticFeedback) triggerHaptic('tap');
    const newRoute: RouteData = {
      id: \`route-\${Date.now().toString(36)}\`,
      name: routeName,
      filename,
      stops,
      currentIndex: 0,
      importedAt: Date.now(),
      lastUpdated: Date.now(),
    };
    setRouteData(newRoute);
  };

  // Clear current route
  const handleClearRoute = () => {
    setRouteData(null);
  };

  const currentStop = routeData && routeData.currentIndex < routeData.stops.length
    ? routeData.stops[routeData.currentIndex]
    : null;

  const previousStop = routeData && routeData.currentIndex > 0
    ? routeData.stops[routeData.currentIndex - 1]
    : null;

  const nextStop = routeData && routeData.currentIndex < routeData.stops.length - 1
    ? routeData.stops[routeData.currentIndex + 1]
    : null;

  // Route context for parallel road rejection and driving distance tracking
  const [routeCoordinates, setRouteCoordinates] = useState<[number, number][]>([]);
  const [roadRemainingMeters, setRoadRemainingMeters] = useState<number | null>(null);

  // Clear route context when active stop changes
  useEffect(() => {
    setRouteCoordinates([]);
    setRoadRemainingMeters(null);
  }, [currentStop?.id]);

  // Backup route data before simulation so exiting restores original state cleanly
  const backupRouteDataRef = useRef<RouteData | null>(null);

  const handleSimulationStart = useCallback(() => {
    if (routeData && !backupRouteDataRef.current) {
      backupRouteDataRef.current = JSON.parse(JSON.stringify(routeData));
    }
  }, [routeData]);

  const handleExitSimulation = useCallback(() => {
    if (backupRouteDataRef.current) {
      setRouteData(backupRouteDataRef.current);
      backupRouteDataRef.current = null;
    }
  }, []);

  // Real GPS hardware tracking & configurable arrival engine with full route simulation
  const {
    location: userLocation,
    gpsStatus,
    gpsErrorMsg,
    distanceToCurrentFeet,
    isWithinGeofence,
    isConfirmedArrival,
    isSharedLocationWithPrevious,
    isSharedLocationWithNext,
    autoArrivalStatus,
    arrivalRadiusMeters,
    arrivalConfirmFeet,
    isPassedWithoutCompletion,
    isSimulatingGps,
    isSimPaused,
    simSpeedMultiplier,
    startFullRouteSimulation,
    pauseSimulation,
    resumeSimulation,
    setSimulationSpeed,
    restartSimulation,
    stopGpsSimulation,
    simulateApproachAndPass,
    simulateApproachAndArrive,
    simulateCurbsidePassThrough,
    diagLogs,
  } = useGpsTracker(
    currentStop, 
    previousStop, 
    nextStop, 
    handleAutoArrive, 
    settings.arrivalRadiusMeters || 152.4,
    (settings.arrivalConfirmFeet ? settings.arrivalConfirmFeet * 0.3048 : 45.72),
    roadRemainingMeters,
    routeCoordinates,
    routeData?.stops,
    handleJumpToStop,
    handleResetProgress,
    handleSimulationStart,
    handleExitSimulation
  );

  const isRouteFinished = routeData && routeData.currentIndex >= routeData.stops.length;

  const completedCount = routeData ? routeData.stops.filter((s) => s.status === 'completed').length : 0;
  const skippedCount = routeData ? routeData.stops.filter((s) => s.status === 'skipped').length : 0;

  return (
    <div 
      className={\`h-dvh max-h-dvh w-full overflow-hidden flex flex-col font-sans transition-colors duration-150 \${
        isDark 
          ? 'bg-black text-white' 
          : 'bg-white text-black'
      }\`}
    >
      {/* Hidden File Picker Input for Android File Picker */}
      <input
        ref={fileInputRef}
        type="file"
        onChange={handleDirectFileImport}
        className="hidden"
      />

      {/* Main Screen Container - Fitted mobile viewport starting flush from top */}
      <main className="flex-1 w-full max-w-md mx-auto flex flex-col px-2.5 pt-1 pb-1 sm:px-3 sm:py-1.5 relative overflow-hidden">
        {/* Auto-Arrival Banner (Confirms automatic arrival without requiring manual input) */}
        {arrivalToast && (
          <div className="absolute top-4 left-4 right-4 z-30 animate-in slide-in-from-top duration-200">
            <div className="bg-emerald-500 text-black px-4 py-2.5 rounded-2xl shadow-2xl flex items-center gap-2 border-2 border-emerald-300">
              <CheckCircle2 className="w-4 h-4 stroke-[3] shrink-0" />
              <span className="text-xs font-black truncate">
                {arrivalToast}
              </span>
            </div>
          </div>
        )}

        {/* Undo Toast when a customer was skipped */}
        {skipToast && (
          <div className="absolute top-4 left-4 right-4 z-30 animate-in slide-in-from-top duration-200">
            <div className="bg-amber-400 text-black px-4 py-2.5 rounded-2xl shadow-2xl flex items-center justify-between border-2 border-amber-300">
              <span className="text-xs font-bold truncate max-w-[240px]">
                {skipToast.message}
              </span>
              <button
                onClick={handleUndoSkip}
                className="flex items-center gap-1 px-2.5 py-1 bg-black text-amber-300 rounded-lg text-xs font-black uppercase tracking-wider hover:bg-neutral-900 transition-colors"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Undo</span>
              </button>
            </div>
          </div>
        )}

        {/* Case 1: Route finished / all customers visited */}
        {isRouteFinished ? (
          <RouteCompletionView
            stops={routeData.stops}
            routeName={routeData.name}
            isDark={isDark}
            onRestart={handleResetProgress}
            onJumpToStop={handleJumpToStop}
            onLoadNewRoute={() => setIsImportOpen(true)}
          />
        ) : currentStop && routeData ? (
          /* Case 2: Active customer stop card */
          <StopCard
            stop={currentStop}
            allStops={routeData.stops}
            onSelectStop={handleJumpToStop}
            previousStop={previousStop || undefined}
            nextStop={nextStop || undefined}
            userLocation={userLocation}
            gpsStatus={gpsStatus}
            gpsErrorMsg={gpsErrorMsg}
            distanceToCurrentFeet={distanceToCurrentFeet}
            isWithinGeofence={isWithinGeofence}
            isConfirmedArrival={isConfirmedArrival}
            isSharedLocationWithPrevious={isSharedLocationWithPrevious}
            isSharedLocationWithNext={isSharedLocationWithNext}
            autoArrivalStatus={autoArrivalStatus}
            currentIndex={routeData.currentIndex}
            totalStops={routeData.stops.length}
            completedCount={completedCount}
            skippedCount={skippedCount}
            settings={settings}
            onMarkPickedUp={handleMarkPickedUp}
            onSkip={handleSkipCustomer}
            onPrevious={handlePreviousCustomer}
            onJumpToStopList={() => setIsDrawerOpen(true)}
            arrivalRadiusMeters={arrivalRadiusMeters}
            arrivalConfirmFeet={arrivalConfirmFeet}
            isPassedWithoutCompletion={isPassedWithoutCompletion}
            simulateApproachAndPass={simulateApproachAndPass}
            simulateApproachAndArrive={simulateApproachAndArrive}
            simulateCurbsidePassThrough={simulateCurbsidePassThrough}
            isSimulatingGps={isSimulatingGps}
            isSimPaused={isSimPaused}
            simSpeedMultiplier={simSpeedMultiplier}
            startFullRouteSimulation={startFullRouteSimulation}
            pauseSimulation={pauseSimulation}
            resumeSimulation={resumeSimulation}
            setSimulationSpeed={setSimulationSpeed}
            restartSimulation={restartSimulation}
            stopGpsSimulation={stopGpsSimulation}
            onRouteCoordinatesUpdate={setRouteCoordinates}
            onRoadRemainingUpdate={setRoadRemainingMeters}
            diagLogs={diagLogs}
            onOpenSettings={() => setIsSettingsOpen(true)}
          />
        ) : (
          /* Case 3: No route loaded */
          <div className="flex-1 flex flex-col items-center justify-center text-center p-6 space-y-4 my-auto">
            <img 
              src="/icon-192.png" 
              alt="Garbage Route" 
              className="w-20 h-20 rounded-3xl border-2 border-emerald-400/80 shadow-2xl object-cover" 
            />
            <div>
              <h2 className="text-2xl font-black text-white">Garbage Route</h2>
              <p className="text-xs text-neutral-400 mt-1 max-w-xs">
                Import a customer GPX file from OsmAnd or pick a built-in delivery route to begin.
              </p>
            </div>
            <div className="space-y-2 w-full max-w-xs">
              <button
                onClick={() => setIsImportOpen(true)}
                className="w-full py-3.5 px-4 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-black font-extrabold text-sm flex items-center justify-center gap-2 transition-all shadow-lg shadow-emerald-950/40"
              >
                <Upload className="w-4 h-4" />
                <span>Import GPX File</span>
              </button>
              <button
                onClick={() => {
                  const defaultPreset = SAMPLE_GPX_ROUTES[0];
                  const parsed = parseGPX(defaultPreset.gpxXml, defaultPreset.title);
                  handleImportSuccess(parsed.stops, parsed.routeName, \`\${defaultPreset.id}.gpx\`);
                }}
                className="w-full py-3 px-4 rounded-2xl bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-neutral-200 font-bold text-xs flex items-center justify-center gap-2 transition-all"
              >
                <Sparkles className="w-4 h-4 text-emerald-400" />
                <span>Load Sample Route (20 Stops)</span>
              </button>
            </div>
          </div>
        )}
      </main>

      {/* Import Modal */}
      <GpxImportModal
        isOpen={isImportOpen}
        isDark={isDark}
        onClose={() => setIsImportOpen(false)}
        onImportSuccess={handleImportSuccess}
      />

      {/* Route List Drawer */}
      {routeData && (
        <RouteListDrawer
          isOpen={isDrawerOpen}
          isDark={isDark}
          stops={routeData.stops}
          currentIndex={routeData.currentIndex}
          routeName={routeData.name}
          onClose={() => setIsDrawerOpen(false)}
          onSelectStop={handleJumpToStop}
          onResetRoute={handleResetProgress}
        />
      )}

      {/* Settings Modal */}
      <SettingsModal
        isOpen={isSettingsOpen}
        isDark={isDark}
        settings={settings}
        onClose={() => setIsSettingsOpen(false)}
        onUpdateSettings={(newSettings) => setSettings((s) => ({ ...s, ...newSettings }))}
        onOpenImport={() => setIsImportOpen(true)}
        onResetProgress={handleResetProgress}
        onClearRoute={handleClearRoute}
        onOpenExport={() => setIsExportOpen(true)}
      />

      {/* Export / APK Modal */}
      <ExportModal
        isOpen={isExportOpen}
        onClose={() => setIsExportOpen(false)}
        isDark={isDark}
      />
    </div>
  );
}
`,Ct=`import React, { useState } from 'react';
import { 
  X, 
  Download, 
  CheckCircle2, 
  Smartphone, 
  ExternalLink, 
  FileArchive, 
  Sparkles,
  ArrowRight,
  ShieldCheck,
  HelpCircle
} from 'lucide-react';
import { downloadProjectZip } from '../utils/projectExporter';
import { triggerHaptic } from '../utils/voiceAndHaptics';

interface ExportModalProps {
  isOpen: boolean;
  onClose: () => void;
  isDark: boolean;
}

export function ExportModal({ isOpen, onClose, isDark }: ExportModalProps) {
  const [downloading, setDownloading] = useState(false);
  const [downloaded, setDownloaded] = useState(false);

  if (!isOpen) return null;

  const handleDownload = async () => {
    triggerHaptic('tap');
    setDownloading(true);
    try {
      await downloadProjectZip();
      setDownloaded(true);
      triggerHaptic('complete');
    } catch (err) {
      console.error('Download failed', err);
    } finally {
      setDownloading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className={\`w-full max-w-lg rounded-t-3xl sm:rounded-3xl border shadow-2xl flex flex-col max-h-[92vh] overflow-hidden \${
          isDark 
            ? 'bg-neutral-950 border-neutral-800 text-white' 
            : 'bg-white border-neutral-200 text-black'
        }\`}
      >
        {/* Header */}
        <div className={\`p-4 border-b flex items-center justify-between shrink-0 \${
          isDark ? 'border-neutral-800 bg-neutral-900/60' : 'border-neutral-200 bg-neutral-50'
        }\`}>
          <div className="flex items-center gap-2.5">
            <img 
              src="/icon-192.png" 
              alt="Garbage Route" 
              className="w-10 h-10 rounded-xl border border-emerald-400/50 shadow-md shrink-0 object-cover" 
            />
            <div>
              <h2 className="text-base font-black tracking-tight">Garbage Route APK Builder</h2>
              <p className="text-xs text-neutral-400">Step 1: Download code to your Samsung S26</p>
            </div>
          </div>
          <button
            onClick={() => {
              triggerHaptic('tap');
              onClose();
            }}
            className={\`p-2 rounded-xl transition-colors \${
              isDark ? 'hover:bg-neutral-800 text-neutral-400' : 'hover:bg-neutral-100 text-neutral-600'
            }\`}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-4 sm:p-5 overflow-y-auto space-y-4">
          {/* Main Download Button */}
          <div className={\`p-4 rounded-2xl border \${
            isDark ? 'bg-neutral-900/90 border-blue-900/60' : 'bg-blue-50/70 border-blue-200'
          }\`}>
            <p className="text-xs font-semibold text-neutral-400 mb-2">
              Instant 1-Tap Download to your phone:
            </p>
            <button
              onClick={handleDownload}
              disabled={downloading}
              className={\`w-full py-4 px-4 rounded-2xl font-black text-sm uppercase tracking-wider flex items-center justify-center gap-2.5 shadow-lg active:scale-95 transition-all \${
                downloaded
                  ? 'bg-emerald-500 hover:bg-emerald-600 text-black'
                  : 'bg-blue-600 hover:bg-blue-500 text-white'
              }\`}
            >
              {downloading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  <span>Packaging Zip File...</span>
                </>
              ) : downloaded ? (
                <>
                  <CheckCircle2 className="w-5 h-5 stroke-[2.5]" />
                  <span>Downloaded! Tap to Download Again</span>
                </>
              ) : (
                <>
                  <Download className="w-5 h-5" />
                  <span>Download Complete Project (.ZIP)</span>
                </>
              )}
            </button>

            {downloaded && (
              <div className="mt-3 p-2.5 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-start gap-2 text-emerald-400 text-xs">
                <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5 text-emerald-400" />
                <span>
                  <strong>Saved to your phone:</strong> Check your Samsung <strong>My Files &gt; Downloads</strong> folder for <code className="bg-black/40 px-1 py-0.5 rounded font-mono">Garbage_Route_Source.zip</code>.
                </span>
              </div>
            )}
          </div>

          {/* Included Files info */}
          <div className={\`p-3.5 rounded-2xl border text-xs space-y-2 \${
            isDark ? 'bg-neutral-900 border-neutral-800' : 'bg-neutral-100 border-neutral-200'
          }\`}>
            <div className="flex items-center gap-2 font-bold text-neutral-300">
              <FileArchive className="w-4 h-4 text-blue-400" />
              <span>What is included in this .ZIP file:</span>
            </div>
            <ul className="space-y-1.5 text-neutral-400 pl-6 list-disc">
              <li><strong>Native Android Kotlin wrapper:</strong> Binds to OsmAnd AIDL background service</li>
              <li><strong>Full React App:</strong> Your customer cards, yellow house number, 500ft proximity & curbside arrival, and GPX parser</li>
              <li><strong>Automated Cloud Builder:</strong> Preconfigured GitHub Action to compile the APK free with zero setup</li>
            </ul>
          </div>

          {/* Next Steps: Step 2 & Step 3 */}
          <div className="space-y-3">
            <h3 className="text-xs font-black uppercase tracking-wider text-neutral-400">
              What to do next (Takes ~3 minutes on your phone):
            </h3>

            {/* Step 2 card */}
            <div className={\`p-3.5 rounded-2xl border flex items-start gap-3 \${
              isDark ? 'bg-neutral-900/50 border-neutral-800' : 'bg-neutral-50 border-neutral-200'
            }\`}>
              <div className="w-6 h-6 rounded-full bg-blue-600 text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                2
              </div>
              <div className="text-xs space-y-1">
                <p className="font-bold">Upload to GitHub (Free cloud builder)</p>
                <p className="text-neutral-400">
                  Open <a href="https://github.com" target="_blank" rel="noreferrer" className="text-blue-400 underline font-semibold">github.com</a> on your Samsung S26, tap <strong>New repository</strong>, name it <code className="bg-neutral-800 px-1 py-0.5 rounded text-neutral-200">route-companion</code>, and tap <strong>Upload files</strong> to upload the zip files.
                </p>
              </div>
            </div>

            {/* Step 3 card */}
            <div className={\`p-3.5 rounded-2xl border flex items-start gap-3 \${
              isDark ? 'bg-neutral-900/50 border-neutral-800' : 'bg-neutral-50 border-neutral-200'
            }\`}>
              <div className="w-6 h-6 rounded-full bg-emerald-600 text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                3
              </div>
              <div className="text-xs space-y-1">
                <p className="font-bold">Download and Install your APK</p>
                <p className="text-neutral-400">
                  Tap the <strong>Actions</strong> tab in your repository. In 2 minutes, tap the completed build and download <code className="bg-neutral-800 px-1 py-0.5 rounded text-neutral-200">app-debug.apk</code> to your Samsung S26 to install.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className={\`p-4 border-t flex items-center justify-between shrink-0 \${
          isDark ? 'border-neutral-800 bg-neutral-950' : 'border-neutral-200 bg-white'
        }\`}>
          <div className="flex items-center gap-1.5 text-xs text-neutral-400">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>100% Free · No computer needed</span>
          </div>
          <button
            onClick={() => {
              triggerHaptic('tap');
              onClose();
            }}
            className={\`px-4 py-2 rounded-xl text-xs font-bold \${
              isDark ? 'bg-neutral-800 hover:bg-neutral-700 text-neutral-200' : 'bg-neutral-200 hover:bg-neutral-300 text-black'
            }\`}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
`,wt=`import React, { useState } from 'react';
import { parseGPX } from '../utils/gpxParser';
import { SAMPLE_GPX_ROUTES } from '../utils/sampleRoutes';
import { RouteStop } from '../types/route';
import { UploadCloud, FileCode, CheckCircle, AlertCircle, X, Download, Sparkles } from 'lucide-react';

interface GpxImportModalProps {
  isOpen: boolean;
  isDark: boolean;
  onClose: () => void;
  onImportSuccess: (stops: RouteStop[], routeName: string, filename: string) => void;
}

export const GpxImportModal: React.FC<GpxImportModalProps> = ({
  isOpen,
  isDark,
  onClose,
  onImportSuccess,
}) => {
  const [activeTab, setActiveTab] = useState<'upload' | 'samples' | 'paste'>('upload');
  const [rawText, setRawText] = useState('');
  const [dragActive, setDragActive] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [previewStops, setPreviewStops] = useState<{ stops: RouteStop[]; routeName: string; filename: string } | null>(null);

  if (!isOpen) return null;

  const handleFileProcess = (file: File) => {
    setError(null);
    try {
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const text = e.target?.result as string;
          if (!text || typeof text !== 'string') {
            throw new Error('File content is empty or unreadable.');
          }
          const cleanName = file.name.replace(/\\.[^/.]+$/, '');
          const result = parseGPX(text, cleanName);
          if (!result.stops || result.stops.length === 0) {
            throw new Error('No valid customer stops found in GPX file.');
          }
          setPreviewStops({
            stops: result.stops,
            routeName: result.routeName,
            filename: file.name,
          });
        } catch (err: any) {
          setError(err.message || 'Failed to parse GPX file.');
        }
      };
      reader.onerror = () => {
        setError('Error reading file from disk.');
      };
      reader.readAsText(file);
    } catch (err: any) {
      setError(err.message || 'Error processing file.');
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileProcess(e.dataTransfer.files[0]);
    }
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      handleFileProcess(e.target.files[0]);
    }
    if (e.target) {
      e.target.value = '';
    }
  };

  const handleParsePaste = () => {
    setError(null);
    try {
      if (!rawText.trim()) {
        setError('Please paste GPX XML content.');
        return;
      }
      const result = parseGPX(rawText, 'Pasted GPX Route');
      setPreviewStops({
        stops: result.stops,
        routeName: result.routeName,
        filename: 'pasted_route.gpx',
      });
    } catch (err: any) {
      setError(err.message || 'Invalid GPX content.');
    }
  };

  const handleLoadPreset = (preset: typeof SAMPLE_GPX_ROUTES[0]) => {
    setError(null);
    try {
      const result = parseGPX(preset.gpxXml, preset.title);
      setPreviewStops({
        stops: result.stops,
        routeName: result.routeName,
        filename: \`\${preset.id}.gpx\`,
      });
    } catch (err: any) {
      setError(err.message);
    }
  };

  const handleConfirmImport = () => {
    if (previewStops) {
      onImportSuccess(previewStops.stops, previewStops.routeName, previewStops.filename);
      onClose();
    }
  };

  const downloadSampleGpx = (preset: typeof SAMPLE_GPX_ROUTES[0]) => {
    const blob = new Blob([preset.gpxXml], { type: 'application/gpx+xml' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = \`\${preset.id}.gpx\`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className={\`w-full max-w-lg rounded-3xl border shadow-2xl overflow-hidden flex flex-col max-h-[90vh] \${
          isDark ? 'bg-neutral-900 border-neutral-700 text-white' : 'bg-white border-neutral-300 text-black'
        }\`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-800">
          <div>
            <h2 className="text-lg font-black tracking-tight">Import Customer GPX Route</h2>
            <p className="text-xs text-neutral-400 mt-0.5">Exact customer waypoint sequence will be preserved</p>
          </div>
          <button 
            onClick={onClose}
            className="p-2 rounded-xl text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab switcher */}
        <div className="flex border-b border-neutral-800 px-6 pt-3 gap-2 bg-neutral-950/40">
          <button
            onClick={() => { setActiveTab('samples'); setError(null); }}
            className={\`pb-2.5 px-3 text-xs font-bold border-b-2 transition-all flex items-center gap-1.5 \${
              activeTab === 'samples'
                ? 'border-emerald-400 text-emerald-400'
                : 'border-transparent text-neutral-400 hover:text-neutral-200'
            }\`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Sample Routes</span>
          </button>
          <button
            onClick={() => { setActiveTab('upload'); setError(null); }}
            className={\`pb-2.5 px-3 text-xs font-bold border-b-2 transition-all flex items-center gap-1.5 \${
              activeTab === 'upload'
                ? 'border-emerald-400 text-emerald-400'
                : 'border-transparent text-neutral-400 hover:text-neutral-200'
            }\`}
          >
            <UploadCloud className="w-3.5 h-3.5" />
            <span>Upload GPX File</span>
          </button>
          <button
            onClick={() => { setActiveTab('paste'); setError(null); }}
            className={\`pb-2.5 px-3 text-xs font-bold border-b-2 transition-all flex items-center gap-1.5 \${
              activeTab === 'paste'
                ? 'border-emerald-400 text-emerald-400'
                : 'border-transparent text-neutral-400 hover:text-neutral-200'
            }\`}
          >
            <FileCode className="w-3.5 h-3.5" />
            <span>Paste XML</span>
          </button>
        </div>

        {/* Tab Body */}
        <div className="p-6 overflow-y-auto flex-1 space-y-4">
          {error && (
            <div className="p-3 rounded-xl bg-red-950/80 border border-red-800 text-red-200 text-xs flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0 text-red-400" />
              <span>{error}</span>
            </div>
          )}

          {activeTab === 'samples' && (
            <div className="space-y-3">
              <p className="text-xs text-neutral-400">
                Instantly load ready-to-test customer routes, or download the GPX to import into OsmAnd:
              </p>
              {SAMPLE_GPX_ROUTES.map((preset) => (
                <div 
                  key={preset.id}
                  className={\`p-4 rounded-2xl border transition-all \${
                    previewStops?.filename === \`\${preset.id}.gpx\`
                      ? 'border-emerald-500 bg-emerald-950/20'
                      : isDark ? 'border-neutral-800 bg-neutral-950 hover:border-neutral-700' : 'border-neutral-200 bg-neutral-50 hover:border-neutral-300'
                  }\`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="font-bold text-sm text-neutral-100">{preset.title}</h3>
                      <p className="text-xs text-neutral-400 mt-1 leading-relaxed">{preset.description}</p>
                      <span className="inline-block mt-2 text-[11px] font-mono font-bold px-2 py-0.5 rounded bg-neutral-800 text-emerald-400">
                        {preset.stopCount} Sequenced Stops
                      </span>
                    </div>
                  </div>

                  <div className="mt-3 pt-3 border-t border-neutral-800/80 flex items-center justify-between gap-2">
                    <button
                      onClick={() => handleLoadPreset(preset)}
                      className="px-3.5 py-1.5 text-xs font-bold rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white transition-colors"
                    >
                      Select Route
                    </button>
                    <button
                      onClick={() => downloadSampleGpx(preset)}
                      className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg border border-neutral-700 text-neutral-300 hover:text-white hover:bg-neutral-800 transition-colors"
                      title="Download .gpx file to load into OsmAnd"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Download GPX</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'upload' && (
            <div
              onDragOver={(e) => { e.preventDefault(); setDragActive(true); }}
              onDragLeave={() => setDragActive(false)}
              onDrop={handleDrop}
              className={\`border-2 border-dashed rounded-2xl p-8 text-center flex flex-col items-center justify-center transition-all \${
                dragActive 
                  ? 'border-emerald-400 bg-emerald-950/20' 
                  : isDark ? 'border-neutral-700 bg-neutral-950/60' : 'border-neutral-300 bg-neutral-50'
              }\`}
            >
              <UploadCloud className="w-10 h-10 text-emerald-400 mb-3" />
              <p className="font-bold text-sm mb-1">Drag and drop your GPX file here</p>
              <p className="text-xs text-neutral-400 mb-4">Supports OsmAnd waypoints, routepoints, and favorites (.gpx)</p>
              <label className="cursor-pointer px-4 py-2 text-xs font-bold rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white transition-colors">
                Browse Files
                <input 
                  type="file" 
                  className="hidden" 
                  onChange={handleFileInput}
                />
              </label>
              <p className="text-[11px] text-neutral-400 mt-3 max-w-xs">
                💡 Tip: If Samsung shows &quot;No files&quot;, tap <span className="font-semibold text-neutral-200">Recent files</span> at the top, or switch to the <span className="font-semibold text-emerald-400">Paste GPX</span> tab!
              </p>
            </div>
          )}

          {activeTab === 'paste' && (
            <div className="space-y-3">
              <label className="block text-xs font-bold uppercase text-neutral-400">
                Paste GPX XML Code
              </label>
              <textarea
                value={rawText}
                onChange={(e) => setRawText(e.target.value)}
                placeholder="<?xml version='1.0' encoding='UTF-8'?>\\n<gpx version='1.1' ...>\\n  <wpt lat='...' lon='...'>\\n    <name>Customer Name</name>\\n    <desc>123 Main St</desc>\\n  </wpt>\\n</gpx>"
                rows={7}
                className="w-full rounded-xl p-3 text-xs font-mono bg-neutral-950 border border-neutral-700 text-neutral-200 focus:outline-none focus:border-emerald-400 resize-none"
              />
              <button
                onClick={handleParsePaste}
                className="w-full py-2.5 text-xs font-bold rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white transition-colors"
              >
                Parse GPX Text
              </button>
            </div>
          )}

          {/* Preview of detected stops */}
          {previewStops && (
            <div className="p-4 rounded-2xl border border-emerald-500/50 bg-emerald-950/20 space-y-2">
              <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
                <CheckCircle className="w-4 h-4" />
                <span>Ready to load: {previewStops.routeName}</span>
              </div>
              <div className="text-xs text-neutral-300 space-y-1">
                <p>
                  Found <strong className="text-emerald-300">{previewStops.stops.length} stops</strong> in exact GPX order.
                </p>
                <p className="text-[11px] text-neutral-400">
                  Stop #1: <strong>{previewStops.stops[0]?.name}</strong> ({previewStops.stops[0]?.houseNumber ? \`#\${previewStops.stops[0].houseNumber} \` : ''}{previewStops.stops[0]?.streetName})
                </p>
                {previewStops.stops.length > 1 && (
                  <p className="text-[11px] text-neutral-400">
                    Final Stop #{previewStops.stops.length}: <strong>{previewStops.stops[previewStops.stops.length - 1]?.name}</strong>
                  </p>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="px-6 py-4 border-t border-neutral-800 flex items-center justify-end gap-3 bg-neutral-950/40">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold rounded-xl border border-neutral-700 text-neutral-300 hover:bg-neutral-800 transition-colors"
          >
            Cancel
          </button>
          <button
            disabled={!previewStops}
            onClick={handleConfirmImport}
            className={\`px-5 py-2.5 text-xs font-extrabold rounded-xl transition-all \${
              previewStops
                ? 'bg-emerald-500 hover:bg-emerald-400 text-black shadow-lg shadow-emerald-950/50'
                : 'opacity-40 cursor-not-allowed bg-neutral-800 text-neutral-500'
            }\`}
          >
            Start Route with {previewStops?.stops.length || 0} Stops
          </button>
        </div>
      </div>
    </div>
  );
};
`,Tt=`import React from 'react';
import { 
  CornerUpRight, 
  CornerUpLeft, 
  ArrowUp, 
  RotateCcw, 
  Flag, 
  GitFork, 
  Compass, 
  CircleDot,
  ArrowUpRight,
  ArrowUpLeft
} from 'lucide-react';

interface ManeuverIconProps {
  type?: string;
  modifier?: string;
  className?: string;
}

export const ManeuverIcon: React.FC<ManeuverIconProps> = ({ 
  type = 'turn', 
  modifier = 'straight',
  className = 'w-10 h-10' 
}) => {
  const mod = (modifier || '').toLowerCase();
  const t = (type || '').toLowerCase();

  if (t === 'arrive') {
    return <Flag className={className} />;
  }

  if (t === 'roundabout' || t === 'rotary') {
    return <CircleDot className={className} />;
  }

  if (t === 'fork') {
    return <GitFork className={className} />;
  }

  if (mod.includes('uturn') || mod.includes('turnaround') || mod.includes('turn around') || t === 'turnaround') {
    return <RotateCcw className={className} />;
  }

  if (mod === 'sharp right') {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M12 21V11a4 4 0 0 1 4-4h5" />
        <polyline points="18 4 21 7 18 10" />
      </svg>
    );
  }

  if (mod === 'sharp left') {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M12 21V11a4 4 0 0 0-4-4H3" />
        <polyline points="6 4 3 7 6 10" />
      </svg>
    );
  }

  if (mod === 'slight right') {
    return <ArrowUpRight className={className} strokeWidth={2.75} />;
  }

  if (mod === 'slight left') {
    return <ArrowUpLeft className={className} strokeWidth={2.75} />;
  }

  if (mod === 'right') {
    return <CornerUpRight className={className} strokeWidth={2.75} />;
  }

  if (mod === 'left') {
    return <CornerUpLeft className={className} strokeWidth={2.75} />;
  }

  if (mod === 'straight' || t === 'continue' || t === 'depart') {
    return <ArrowUp className={className} strokeWidth={2.75} />;
  }

  return <Compass className={className} strokeWidth={2.5} />;
};
`,Et=`import React, { useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { GpsLocation } from '../utils/useGpsTracker';
import { RouteStop } from '../types/route';
import { Crosshair, Navigation, Layers, MapPin } from 'lucide-react';

interface RoadMapViewProps {
  userLocation: GpsLocation | null;
  destination: {
    lat: number;
    lon: number;
    name: string;
    houseNumber?: string;
    address?: string;
  };
  activeStopIndex?: number;
  allStops?: RouteStop[];
  onSelectStop?: (index: number) => void;
  routeCoordinates?: [number, number][]; // [lon, lat][] from OSRM
  isDark?: boolean;
}

interface GroupedStopLocation {
  lat: number;
  lon: number;
  stops: {
    stop: RouteStop;
    originalIndex: number;
    isActive: boolean;
  }[];
}

export const RoadMapView: React.FC<RoadMapViewProps> = ({
  userLocation,
  destination,
  activeStopIndex = 0,
  allStops = [],
  onSelectStop,
  routeCoordinates = [],
  isDark = true,
}) => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);
  const userMarkerRef = useRef<L.Marker | null>(null);
  const routePolylineRef = useRef<L.Polyline | null>(null);
  const stopsLayerRef = useRef<L.LayerGroup | null>(null);
  const hasInitialFittedRef = useRef<boolean>(false);

  // Status counters for overlay
  const [stats, setStats] = useState({
    total: 0,
    completed: 0,
    skipped: 0,
    pending: 0,
    missingCoords: 0,
  });

  // Keep a stable ref to onSelectStop for marker popup clicks
  const onSelectStopRef = useRef(onSelectStop);
  useEffect(() => {
    onSelectStopRef.current = onSelectStop;
  }, [onSelectStop]);

  // Expose global click dispatcher for popup buttons
  useEffect(() => {
    (window as any).__garbageRouteJumpToStop = (index: number) => {
      if (onSelectStopRef.current) {
        onSelectStopRef.current(index);
        if (mapInstanceRef.current) {
          mapInstanceRef.current.closePopup();
        }
      }
    };
    return () => {
      delete (window as any).__garbageRouteJumpToStop;
    };
  }, []);

  // 1. Initialize Leaflet Map
  useEffect(() => {
    if (!mapContainerRef.current || mapInstanceRef.current) return;

    const initialLat = userLocation?.lat || destination.lat || 37.7749;
    const initialLon = userLocation?.lon || destination.lon || -122.4194;

    const map = L.map(mapContainerRef.current, {
      center: [initialLat, initialLon],
      zoom: 15,
      zoomControl: false,
      attributionControl: false,
    });

    // High performance OpenStreetMap standard tiles with multi-subdomain connection pooling
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      subdomains: ['a', 'b', 'c'],
      className: isDark ? 'dark-map-tiles' : '',
    }).addTo(map);

    // Group for all customer markers
    const stopsLayer = L.layerGroup().addTo(map);
    stopsLayerRef.current = stopsLayer;

    mapInstanceRef.current = map;

    // Invalidate size to ensure crisp full-screen rendering on mobile and Android WebView
    const invalidate = () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.invalidateSize();
      }
    };
    setTimeout(invalidate, 50);
    setTimeout(invalidate, 200);
    setTimeout(invalidate, 500);

    const resizeObserver = new ResizeObserver(() => {
      invalidate();
    });
    if (mapContainerRef.current) {
      resizeObserver.observe(mapContainerRef.current);
    }

    return () => {
      resizeObserver.disconnect();
      map.remove();
      mapInstanceRef.current = null;
      userMarkerRef.current = null;
      routePolylineRef.current = null;
      stopsLayerRef.current = null;
      hasInitialFittedRef.current = false;
    };
  }, []);

  // 2. Render All Customer Markers on the Map
  useEffect(() => {
    const map = mapInstanceRef.current;
    const stopsLayer = stopsLayerRef.current;
    if (!map || !stopsLayer) return;

    stopsLayer.clearLayers();

    if (!allStops || allStops.length === 0) {
      // Fallback: If no customer list provided, render just destination
      if (destination && !isNaN(destination.lat) && !isNaN(destination.lon)) {
        const destHtml = \`
          <div style="display:flex; flex-direction:column; align-items:center;">
            <div style="background:#fbbf24; color:#000; font-weight:900; font-family:monospace; font-size:12px; padding:3px 7px; border-radius:8px; border:2px solid #000; box-shadow:0 4px 8px rgba(0,0,0,0.5); white-space:nowrap;">
              \${destination.houseNumber || 'STOP'}
            </div>
            <div style="width:0; height:0; border-left:6px solid transparent; border-right:6px solid transparent; border-top:8px solid #fbbf24;"></div>
          </div>
        \`;
        const destIcon = L.divIcon({
          html: destHtml,
          className: 'custom-dest-pin',
          iconSize: [40, 40],
          iconAnchor: [20, 36],
        });
        L.marker([destination.lat, destination.lon], { icon: destIcon }).addTo(stopsLayer);
      }
      return;
    }

    let completed = 0;
    let skipped = 0;
    let pending = 0;
    let missingCoords = 0;

    // Group stops by coordinates (precision ~1 meter) to handle overlapping addresses
    const locationMap = new Map<string, GroupedStopLocation>();

    allStops.forEach((stop, index) => {
      if (stop.status === 'completed') completed++;
      else if (stop.status === 'skipped') skipped++;
      else pending++;

      const hasValidCoords =
        typeof stop.lat === 'number' &&
        typeof stop.lon === 'number' &&
        !isNaN(stop.lat) &&
        !isNaN(stop.lon) &&
        (stop.lat !== 0 || stop.lon !== 0);

      if (!hasValidCoords) {
        missingCoords++;
        return;
      }

      // Group key rounded to 5 decimal places (~1.1 meter precision)
      const key = \`\${stop.lat.toFixed(5)},\${stop.lon.toFixed(5)}\`;
      const isActive = index === activeStopIndex;

      if (!locationMap.has(key)) {
        locationMap.set(key, {
          lat: stop.lat,
          lon: stop.lon,
          stops: [{ stop, originalIndex: index, isActive }],
        });
      } else {
        locationMap.get(key)!.stops.push({ stop, originalIndex: index, isActive });
      }
    });

    setStats({
      total: allStops.length,
      completed,
      skipped,
      pending,
      missingCoords,
    });

    const allValidLatLngs: L.LatLngExpression[] = [];

    // Create markers for each unique customer location
    locationMap.forEach((group) => {
      const { lat, lon, stops } = group;
      allValidLatLngs.push([lat, lon]);

      const hasActive = stops.some((s) => s.isActive);
      const isMultiStop = stops.length > 1;
      const allDone = stops.every((s) => s.stop.status === 'completed');
      const allSkipped = stops.every((s) => s.stop.status === 'skipped');

      let iconHtml = '';
      let iconSize: [number, number] = [32, 32];
      let iconAnchor: [number, number] = [16, 16];
      let zIndexOffset = 100;

      if (hasActive) {
        // ACTIVE CUSTOMER PIN: Large glowing amber card with house number
        const activeItem = stops.find((s) => s.isActive)!;
        const houseNum = activeItem.stop.houseNumber || \`\${activeItem.originalIndex + 1}\`;
        const multiBadge = isMultiStop ? \`<span style="font-size:9px; background:#000; color:#fbbf24; padding:1px 4px; border-radius:4px; margin-left:2px;">+\${stops.length - 1}</span>\` : '';

        iconHtml = \`
          <div style="display:flex; flex-direction:column; align-items:center; cursor:pointer;">
            <div style="
              background:#fbbf24; 
              color:#000; 
              font-weight:900; 
              font-family:monospace; 
              font-size:14px; 
              padding:3px 9px; 
              border-radius:10px; 
              border:2.5px solid #000; 
              box-shadow:0 0 0 3px rgba(251, 191, 36, 0.5), 0 6px 12px rgba(0,0,0,0.7); 
              white-space:nowrap;
              display:flex;
              align-items:center;
              justify-content:center;
            ">
              <span>\${houseNum}</span>
              \${multiBadge}
            </div>
            <div style="width:0; height:0; border-left:7px solid transparent; border-right:7px solid transparent; border-top:9px solid #fbbf24; margin-top:-1px;"></div>
          </div>
        \`;
        iconSize = [56, 42];
        iconAnchor = [28, 40];
        zIndexOffset = 2000; // Always top
      } else if (allDone) {
        // COMPLETED STOPS: Subtle green checkmark badge with house number
        const houseNum = stops[0].stop.houseNumber || '';
        const label = houseNum ? (isMultiStop ? \`\${houseNum} ✓+\` : \`\${houseNum} ✓\`) : '✓';
        iconHtml = \`
          <div style="
            min-width:24px; 
            height:22px; 
            padding:0 5px;
            border-radius:11px; 
            background:#052e16; 
            border:1.5px solid #22c55e; 
            color:#22c55e; 
            font-size:10px; 
            font-weight:800; 
            font-family:monospace;
            display:flex; 
            align-items:center; 
            justify-content:center; 
            box-shadow:0 2px 5px rgba(0,0,0,0.5); 
            opacity:0.85;
            cursor:pointer;
            white-space:nowrap;
          ">
            \${label}
          </div>
        \`;
        iconSize = [32, 22];
        iconAnchor = [16, 11];
        zIndexOffset = 50;
      } else if (allSkipped) {
        // SKIPPED STOPS: Neutral muted gray badge with house number
        const houseNum = stops[0].stop.houseNumber || '';
        const label = houseNum ? (isMultiStop ? \`\${houseNum} ⤼\` : \`\${houseNum} ⤼\`) : '⤼';
        iconHtml = \`
          <div style="
            min-width:22px; 
            height:20px; 
            padding:0 4px;
            border-radius:10px; 
            background:#1c1917; 
            border:1.5px solid #78716c; 
            color:#a8a29e; 
            font-size:9px; 
            font-weight:700; 
            font-family:monospace;
            display:flex; 
            align-items:center; 
            justify-content:center; 
            box-shadow:0 2px 4px rgba(0,0,0,0.5); 
            opacity:0.7;
            cursor:pointer;
            white-space:nowrap;
          ">
            \${label}
          </div>
        \`;
        iconSize = [30, 20];
        iconAnchor = [15, 10];
        zIndexOffset = 40;
      } else {
        // UPCOMING PENDING CUSTOMERS: Crisp dark blue/slate badge with house number
        const firstPending = stops.find((s) => s.stop.status === 'pending') || stops[0];
        const houseNum = firstPending.stop.houseNumber || \`\${firstPending.originalIndex + 1}\`;
        const label = isMultiStop ? \`\${houseNum} (+\${stops.length - 1})\` : houseNum;

        iconHtml = \`
          <div style="display:flex; flex-direction:column; align-items:center; cursor:pointer;">
            <div style="
              background:#0f172a; 
              color:#f8fafc; 
              border:1.5px solid #38bdf8; 
              border-radius:6px; 
              padding:1.5px 6px; 
              font-size:11px; 
              font-weight:800; 
              font-family:monospace; 
              box-shadow:0 3px 6px rgba(0,0,0,0.6); 
              white-space:nowrap;
            ">
              \${label}
            </div>
            <div style="width:0; height:0; border-left:4px solid transparent; border-right:4px solid transparent; border-top:5px solid #38bdf8; margin-top:-1px;"></div>
          </div>
        \`;
        iconSize = [46, 28];
        iconAnchor = [23, 26];
        zIndexOffset = 150;
      }

      const customIcon = L.divIcon({
        html: iconHtml,
        className: 'custom-customer-pin',
        iconSize,
        iconAnchor,
      });

      // Interactive Popup for customer inspection & jumping
      let popupHtml = \`
        <div style="font-family:sans-serif; min-width:210px; max-width:280px; padding:4px 0;">
          <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:6px; padding-bottom:4px; border-bottom:1px solid #333;">
            <span style="font-size:11px; font-weight:800; color:#38bdf8; text-transform:uppercase; letter-spacing:0.5px;">
              \${isMultiStop ? \`\${stops.length} Customers at Address\` : 'Customer Stop'}
            </span>
            <span style="font-size:10px; color:#94a3b8; font-family:monospace;">
              \${lat.toFixed(5)}, \${lon.toFixed(5)}
            </span>
          </div>
          <div style="display:flex; flex-direction:column; gap:8px; max-height:220px; overflow-y:auto;">
      \`;

      stops.forEach(({ stop, originalIndex, isActive }) => {
        const statusBadge = isActive
          ? '<span style="background:#fbbf24; color:#000; font-size:9px; font-weight:900; padding:1px 5px; border-radius:4px;">ACTIVE</span>'
          : stop.status === 'completed'
          ? '<span style="background:#052e16; color:#22c55e; border:1px solid #22c55e; font-size:9px; font-weight:700; padding:1px 5px; border-radius:4px;">DONE</span>'
          : stop.status === 'skipped'
          ? '<span style="background:#292524; color:#a8a29e; font-size:9px; font-weight:700; padding:1px 5px; border-radius:4px;">SKIPPED</span>'
          : '<span style="background:#0f172a; color:#38bdf8; border:1px solid #38bdf8; font-size:9px; font-weight:700; padding:1px 5px; border-radius:4px;">PENDING</span>';

        popupHtml += \`
          <div style="background:\${isActive ? 'rgba(251,191,36,0.1)' : '#1e293b'}; border:1px solid \${isActive ? '#fbbf24' : '#334155'}; border-radius:8px; padding:6px 8px;">
            <div style="display:flex; align-items:center; justify-content:space-between; gap:6px; margin-bottom:2px;">
              <span style="font-weight:800; font-size:12px; color:#fff;">
                #\${originalIndex + 1} · \${stop.name || 'Customer'}
              </span>
              \${statusBadge}
            </div>
            \${
              stop.houseNumber
                ? \`<div style="font-size:11px; font-weight:700; color:#fbbf24; font-family:monospace;">House: \${stop.houseNumber}</div>\`
                : ''
            }
            \${
              stop.fullAddress
                ? \`<div style="font-size:10px; color:#94a3b8; margin-top:1px; line-height:1.2;">\${stop.fullAddress}</div>\`
                : ''
            }
            \${
              !isActive
                ? \`
              <button 
                onclick="window.__garbageRouteJumpToStop(\${originalIndex})"
                style="margin-top:6px; width:100%; background:#2563eb; hover:background:#1d4ed8; color:#fff; border:none; border-radius:6px; padding:4px 6px; font-size:10px; font-weight:800; cursor:pointer;"
              >
                Navigate to Stop #\${originalIndex + 1}
              </button>
            \`
                : ''
            }
          </div>
        \`;
      });

      popupHtml += \`
          </div>
        </div>
      \`;

      const marker = L.marker([lat, lon], {
        icon: customIcon,
        zIndexOffset,
      }).addTo(stopsLayer);

      marker.bindPopup(popupHtml, {
        closeButton: true,
        className: 'custom-dark-popup',
      });
    });

    // 3. Initial bounds auto-fit when map is first opened (Requirement 6)
    if (!hasInitialFittedRef.current && allValidLatLngs.length > 0) {
      try {
        const boundsPoints = [...allValidLatLngs];
        if (userLocation && !isNaN(userLocation.lat) && !isNaN(userLocation.lon)) {
          boundsPoints.push([userLocation.lat, userLocation.lon]);
        }
        const fullBounds = L.latLngBounds(boundsPoints);
        map.fitBounds(fullBounds, { padding: [35, 35], maxZoom: 16 });
        hasInitialFittedRef.current = true;
      } catch (e) {
        // Ignore bounds edge cases
      }
    }
  }, [allStops, activeStopIndex, destination.lat, destination.lon]);

  // 3. Update Route Polyline to Active Destination
  useEffect(() => {
    const map = mapInstanceRef.current;
    if (!map) return;

    if (routePolylineRef.current) {
      map.removeLayer(routePolylineRef.current);
      routePolylineRef.current = null;
    }

    if (routeCoordinates && routeCoordinates.length > 1) {
      // routeCoordinates from OSRM is GeoJSON [lon, lat][]. Convert to Leaflet [lat, lon][].
      const leafletCoords: L.LatLngExpression[] = routeCoordinates.map(([lon, lat]) => [lat, lon]);
      const polyline = L.polyline(leafletCoords, {
        color: '#f59e0b', // Amber road route
        weight: 5,
        opacity: 0.9,
        lineCap: 'round',
        lineJoin: 'round',
      }).addTo(map);

      routePolylineRef.current = polyline;
    }
  }, [routeCoordinates]);

  // 4. Update Driver / User Location Marker (Preserves real-time navigation)
  useEffect(() => {
    const map = mapInstanceRef.current;
    if (!map) return;

    if (userLocation && !isNaN(userLocation.lat) && !isNaN(userLocation.lon)) {
      const userLatLng: L.LatLngExpression = [userLocation.lat, userLocation.lon];

      if (userMarkerRef.current) {
        userMarkerRef.current.setLatLng(userLatLng);
      } else {
        const userHtml = \`
          <div style="position:relative; width:22px; height:22px; display:flex; align-items:center; justify-content:center;">
            <div style="position:absolute; width:100%; height:100%; border-radius:50%; background:#38bdf8; opacity:0.4; animation:ping 1.5s cubic-bezier(0,0,0.2,1) infinite;"></div>
            <div style="width:14px; height:14px; border-radius:50%; background:#0284c7; border:2.5px solid #ffffff; box-shadow:0 0 10px rgba(2,132,199,0.9);"></div>
          </div>
        \`;

        const userIcon = L.divIcon({
          html: userHtml,
          className: 'custom-user-dot',
          iconSize: [22, 22],
          iconAnchor: [11, 11],
        });

        userMarkerRef.current = L.marker(userLatLng, { icon: userIcon, zIndexOffset: 3000 }).addTo(map);
      }
    } else if (userMarkerRef.current) {
      map.removeLayer(userMarkerRef.current);
      userMarkerRef.current = null;
    }
  }, [userLocation?.lat, userLocation?.lon]);

  // 5. Button Actions: Recenter Driver, Fit Active Route, Fit All Stops
  const handleRecenterDriver = () => {
    const map = mapInstanceRef.current;
    if (!map) return;

    if (userLocation && !isNaN(userLocation.lat) && !isNaN(userLocation.lon)) {
      map.setView([userLocation.lat, userLocation.lon], 17, { animate: true });
    } else if (destination && !isNaN(destination.lat) && !isNaN(destination.lon)) {
      map.setView([destination.lat, destination.lon], 17, { animate: true });
    }
  };

  const handleFitActiveRoute = () => {
    const map = mapInstanceRef.current;
    if (!map) return;

    if (routePolylineRef.current) {
      map.fitBounds(routePolylineRef.current.getBounds(), { padding: [30, 30], maxZoom: 17 });
    } else if (userLocation && destination && !isNaN(destination.lat)) {
      const bounds = L.latLngBounds(
        [userLocation.lat, userLocation.lon],
        [destination.lat, destination.lon]
      );
      map.fitBounds(bounds, { padding: [35, 35], maxZoom: 17 });
    }
  };

  const handleFitAllStops = () => {
    const map = mapInstanceRef.current;
    if (!map || !allStops || allStops.length === 0) return;

    const validCoords: L.LatLngExpression[] = allStops
      .filter((s) => typeof s.lat === 'number' && typeof s.lon === 'number' && !isNaN(s.lat) && !isNaN(s.lon) && (s.lat !== 0 || s.lon !== 0))
      .map((s) => [s.lat, s.lon]);

    if (userLocation && !isNaN(userLocation.lat) && !isNaN(userLocation.lon)) {
      validCoords.push([userLocation.lat, userLocation.lon]);
    }

    if (validCoords.length > 0) {
      const fullBounds = L.latLngBounds(validCoords);
      map.fitBounds(fullBounds, { padding: [35, 35], maxZoom: 16 });
    }
  };

  return (
    <div className="relative w-full h-full min-h-0 overflow-hidden bg-neutral-950">
      <div ref={mapContainerRef} className="w-full h-full" />

      {/* Top Overlay: Customer List Stats & Coordinates Notice */}
      <div className="absolute top-2 left-2 z-[1000] pointer-events-none flex flex-wrap items-center gap-1.5 max-w-[85%]">
        <div className="px-2 py-0.5 rounded-md bg-neutral-900/90 border border-neutral-700/80 text-[10px] font-mono font-bold text-white shadow-md backdrop-blur-sm flex items-center gap-1.5">
          <MapPin className="w-3 h-3 text-amber-400" />
          <span>{stats.total > 0 ? \`\${stats.total} Stops\` : '1 Destination'}</span>
          <span className="text-neutral-500">·</span>
          <span className="text-emerald-400">{stats.completed} Done</span>
          <span className="text-neutral-500">·</span>
          <span className="text-sky-400">{stats.pending} Left</span>
          {stats.skipped > 0 && (
            <>
              <span className="text-neutral-500">·</span>
              <span className="text-neutral-400">{stats.skipped} Skipped</span>
            </>
          )}
        </div>
        {stats.missingCoords > 0 && (
          <div className="px-1.5 py-0.5 rounded-md bg-amber-950/80 border border-amber-600/60 text-[9px] font-mono font-bold text-amber-300">
            {stats.missingCoords} missing GPS
          </div>
        )}
      </div>

      {/* Floating Action Controls on Right Side (Requirements 6 & 7) */}
      <div className="absolute bottom-2.5 right-2.5 z-[1000] flex flex-col gap-1.5">
        <button
          onClick={handleFitAllStops}
          className="p-2 bg-neutral-900/90 hover:bg-neutral-800 text-sky-400 rounded-xl border border-neutral-700 shadow-lg backdrop-blur-sm transition-transform active:scale-90 flex items-center justify-center"
          title="Fit all customer stops on route"
        >
          <Layers className="w-4 h-4" />
        </button>
        <button
          onClick={handleFitActiveRoute}
          className="p-2 bg-neutral-900/90 hover:bg-neutral-800 text-amber-400 rounded-xl border border-neutral-700 shadow-lg backdrop-blur-sm transition-transform active:scale-90 flex items-center justify-center"
          title="Fit active route to next customer"
        >
          <Crosshair className="w-4 h-4" />
        </button>
        <button
          onClick={handleRecenterDriver}
          className="p-2 bg-neutral-900/90 hover:bg-neutral-800 text-emerald-400 rounded-xl border border-neutral-700 shadow-lg backdrop-blur-sm transition-transform active:scale-90 flex items-center justify-center"
          title="Center on current vehicle GPS position"
        >
          <Navigation className="w-4 h-4" />
        </button>
      </div>

      {/* Attribution overlay badge */}
      <div className="absolute bottom-1 left-2 z-[1000] pointer-events-none text-[9px] font-mono text-neutral-400/80 bg-black/60 px-1.5 py-0.5 rounded">
        © OpenStreetMap
      </div>
    </div>
  );
};
`,Dt=`import React from 'react';
import { RouteStop } from '../types/route';
import { CheckCircle2, SkipForward, RotateCcw, Download, Sparkles, Navigation } from 'lucide-react';
import { exportToGPX } from '../utils/gpxParser';

interface RouteCompletionViewProps {
  stops: RouteStop[];
  routeName: string;
  isDark: boolean;
  onRestart: () => void;
  onJumpToStop: (index: number) => void;
  onLoadNewRoute: () => void;
}

export const RouteCompletionView: React.FC<RouteCompletionViewProps> = ({
  stops,
  routeName,
  isDark,
  onRestart,
  onJumpToStop,
  onLoadNewRoute,
}) => {
  const completedCount = stops.filter((s) => s.status === 'completed').length;
  const skippedStops = stops
    .map((stop, index) => ({ stop, index }))
    .filter(({ stop }) => stop.status === 'skipped');

  const handleDownload = () => {
    const xml = exportToGPX(stops, routeName);
    const blob = new Blob([xml], { type: 'application/gpx+xml' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = \`\${routeName.replace(/\\s+/g, '_')}_summary.gpx\`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="flex flex-col h-full justify-between p-4 max-w-lg mx-auto w-full text-center">
      <div className="my-auto space-y-5">
        {/* Celebration Trophy / Ring */}
        <div className="w-20 h-20 mx-auto rounded-3xl bg-emerald-500/20 border-2 border-emerald-500 flex items-center justify-center text-emerald-400 shadow-xl shadow-emerald-950/40">
          <CheckCircle2 className="w-10 h-10 stroke-[2.5]" />
        </div>

        <div>
          <span className="text-xs font-bold tracking-widest uppercase text-emerald-400">
            Route Complete
          </span>
          <h1 className="text-3xl font-black mt-1 text-white">
            All Customers Processed
          </h1>
          <p className="text-xs text-neutral-400 mt-1">
            {routeName}
          </p>
        </div>

        {/* Metric Badges */}
        <div className="grid grid-cols-2 gap-3 max-w-xs mx-auto">
          <div className="p-3.5 rounded-2xl bg-neutral-900 border border-neutral-800 text-center">
            <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-400 block">
              Completed
            </span>
            <span className="text-2xl font-black text-emerald-400 mt-0.5 block font-mono">
              {completedCount}
            </span>
          </div>

          <div className="p-3.5 rounded-2xl bg-neutral-900 border border-neutral-800 text-center">
            <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-400 block">
              Skipped
            </span>
            <span className="text-2xl font-black text-amber-400 mt-0.5 block font-mono">
              {skippedStops.length}
            </span>
          </div>
        </div>

        {/* Skipped Stops Review List */}
        {skippedStops.length > 0 ? (
          <div className="text-left bg-neutral-950 rounded-2xl border border-neutral-800 p-4 max-h-56 overflow-y-auto space-y-2">
            <div className="flex items-center justify-between text-xs font-bold text-amber-400 border-b border-neutral-800 pb-2">
              <span className="flex items-center gap-1.5">
                <SkipForward className="w-3.5 h-3.5" />
                Skipped Customers ({skippedStops.length})
              </span>
              <span className="text-[10px] text-neutral-400">Tap to Revisit</span>
            </div>

            {skippedStops.map(({ stop, index }) => (
              <div
                key={stop.id}
                onClick={() => onJumpToStop(index)}
                className="p-2.5 rounded-xl bg-neutral-900 hover:bg-neutral-800 transition-colors cursor-pointer flex items-center justify-between text-xs"
              >
                <div>
                  <span className="font-bold text-neutral-200">
                    #{stop.orderIndex}. {stop.name}
                  </span>
                  <p className="text-[11px] text-neutral-400 truncate max-w-[220px]">
                    {stop.fullAddress}
                  </p>
                </div>
                <span className="text-[10px] font-bold px-2 py-1 rounded bg-amber-950 text-amber-300 border border-amber-800">
                  Re-visit
                </span>
              </div>
            ))}
          </div>
        ) : (
          <div className="p-3 rounded-2xl bg-emerald-950/40 border border-emerald-800/60 text-xs text-emerald-300">
            ★ Perfect run! Zero skipped customers.
          </div>
        )}
      </div>

      {/* Action Buttons */}
      <div className="space-y-2.5 pt-4">
        <button
          onClick={handleDownload}
          className="w-full h-12 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-white font-bold text-xs flex items-center justify-center gap-2 border border-neutral-700 transition-colors"
        >
          <Download className="w-4 h-4 text-emerald-400" />
          <span>Export Final GPX Route</span>
        </button>

        <div className="grid grid-cols-2 gap-2">
          <button
            onClick={onRestart}
            className="h-12 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-neutral-200 font-bold text-xs flex items-center justify-center gap-2 border border-neutral-800 transition-colors"
          >
            <RotateCcw className="w-4 h-4 text-amber-400" />
            <span>Restart Route</span>
          </button>

          <button
            onClick={onLoadNewRoute}
            className="h-12 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-2 transition-colors"
          >
            <Sparkles className="w-4 h-4" />
            <span>Load New GPX</span>
          </button>
        </div>
      </div>
    </div>
  );
};
`,Ot=`import React, { useState } from 'react';
import { RouteStop } from '../types/route';
import { exportToGPX, getStopHouseNumber } from '../utils/gpxParser';
import { 
  X, 
  Search, 
  CheckCircle, 
  SkipForward, 
  Clock, 
  Download, 
  Navigation,
  ArrowRight,
  RotateCcw
} from 'lucide-react';

interface RouteListDrawerProps {
  isOpen: boolean;
  isDark: boolean;
  stops: RouteStop[];
  currentIndex: number;
  routeName: string;
  onClose: () => void;
  onSelectStop: (index: number) => void;
  onResetRoute: () => void;
}

export const RouteListDrawer: React.FC<RouteListDrawerProps> = ({
  isOpen,
  isDark,
  stops,
  currentIndex,
  routeName,
  onClose,
  onSelectStop,
  onResetRoute,
}) => {
  const [searchTerm, setSearchTerm] = useState('');

  if (!isOpen) return null;

  const filteredStops = stops
    .map((stop, originalIndex) => ({ stop, originalIndex }))
    .filter(({ stop, originalIndex }) => {
      const q = searchTerm.toLowerCase();
      const hNum = getStopHouseNumber(stop, originalIndex);
      return (
        stop.name.toLowerCase().includes(q) ||
        stop.fullAddress.toLowerCase().includes(q) ||
        (hNum !== '—' && hNum.toLowerCase().includes(q)) ||
        String(stop.orderIndex).includes(q)
      );
    });

  const handleDownloadGpx = () => {
    const xml = exportToGPX(stops, routeName);
    const blob = new Blob([xml], { type: 'application/gpx+xml' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = \`\${routeName.replace(/\\s+/g, '_')}_updated.gpx\`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/85 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className={\`w-full max-w-md h-full flex flex-col shadow-2xl border-l \${
          isDark ? 'bg-neutral-950 border-neutral-800 text-white' : 'bg-white border-neutral-300 text-black'
        }\`}
      >
        {/* Header */}
        <div className="p-4 border-b border-neutral-800 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <img 
              src="/icon-192.png" 
              alt="Garbage Route" 
              className="w-8 h-8 rounded-lg border border-emerald-400/50 shadow-sm shrink-0 object-cover" 
            />
            <div>
              <h2 className="font-black text-base tracking-tight">Garbage Route Sequence</h2>
              <p className="text-xs text-neutral-400">
                {stops.length} Total Waypoints · Preserved Order
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search Bar */}
        <div className="p-3 border-b border-neutral-800 bg-neutral-900/60">
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search customer, house #, or street..."
              className="w-full pl-9 pr-4 py-2 text-xs rounded-xl bg-neutral-950 border border-neutral-800 text-neutral-100 placeholder:text-neutral-500 focus:outline-none focus:border-emerald-400"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-white text-xs"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Stop Items List */}
        <div className="flex-1 overflow-y-auto divide-y divide-neutral-800/60 p-2">
          {filteredStops.length === 0 ? (
            <div className="text-center py-12 text-neutral-400 text-xs">
              No customers found matching &quot;{searchTerm}&quot;
            </div>
          ) : (
            filteredStops.map(({ stop, originalIndex }) => {
              const isCurrent = originalIndex === currentIndex;
              return (
                <div
                  key={stop.id}
                  onClick={() => {
                    onSelectStop(originalIndex);
                    onClose();
                  }}
                  className={\`p-3 rounded-xl transition-all cursor-pointer flex items-center gap-3 my-1 \${
                    isCurrent
                      ? 'bg-emerald-950/40 border-2 border-emerald-500/80 shadow-md'
                      : isDark
                        ? 'hover:bg-neutral-900/80 border border-transparent'
                        : 'hover:bg-neutral-100 border border-transparent'
                  }\`}
                >
                  {/* Order Number Badge */}
                  <div 
                    className={\`w-9 h-9 rounded-xl flex items-center justify-center font-mono font-bold text-xs shrink-0 \${
                      isCurrent
                        ? 'bg-emerald-500 text-black shadow-md'
                        : stop.status === 'completed'
                          ? 'bg-neutral-800 text-emerald-400 border border-emerald-800/50'
                          : stop.status === 'skipped'
                            ? 'bg-amber-950 text-amber-400 border border-amber-800/50'
                            : 'bg-neutral-900 text-neutral-300 border border-neutral-800'
                    }\`}
                  >
                    #{stop.orderIndex}
                  </div>

                  {/* Stop Details */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className={\`font-bold text-sm truncate \${isCurrent ? 'text-emerald-300' : 'text-neutral-100'}\`}>
                        {stop.name}
                      </span>
                      {(() => {
                        const hNum = getStopHouseNumber(stop, originalIndex);
                        return hNum !== '—' ? (
                          <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-neutral-800 text-amber-300 border border-neutral-700">
                            #{hNum}
                          </span>
                        ) : null;
                      })()}
                    </div>
                    <p className="text-xs text-neutral-400 truncate mt-0.5">
                      {stop.fullAddress}
                    </p>
                  </div>

                  {/* Status Indicator Icon */}
                  <div className="shrink-0 flex items-center gap-1.5">
                    {stop.status === 'completed' && (
                      <span className="flex items-center gap-1 text-[11px] font-semibold text-emerald-400">
                        <CheckCircle className="w-4 h-4" />
                      </span>
                    )}
                    {stop.status === 'skipped' && (
                      <span className="flex items-center gap-1 text-[11px] font-semibold text-amber-400">
                        <SkipForward className="w-4 h-4" />
                      </span>
                    )}
                    {stop.status === 'pending' && !isCurrent && (
                      <span className="text-[11px] text-neutral-500">
                        <Clock className="w-3.5 h-3.5" />
                      </span>
                    )}
                    {isCurrent && (
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-black uppercase bg-emerald-500 text-black tracking-wider">
                        Active
                      </span>
                    )}
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Footer actions */}
        <div className="p-3 border-t border-neutral-800 bg-neutral-900/60 flex items-center justify-between gap-2">
          <button
            onClick={onResetRoute}
            className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold rounded-xl text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset to Stop 1</span>
          </button>

          <button
            onClick={handleDownloadGpx}
            className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold rounded-xl bg-neutral-800 hover:bg-neutral-700 text-neutral-200 hover:text-white transition-colors"
          >
            <Download className="w-3.5 h-3.5 text-emerald-400" />
            <span>Export GPX</span>
          </button>
        </div>
      </div>
    </div>
  );
};
`,kt=`import React from 'react';
import { AppSettings } from '../types/route';
import { X, Moon, Sun, Volume2, Smartphone, Eye, Sparkles, Trash2, RotateCcw, FolderOpen, CheckCircle2 } from 'lucide-react';

interface SettingsModalProps {
  isOpen: boolean;
  isDark: boolean;
  settings: AppSettings;
  onClose: () => void;
  onUpdateSettings: (newSettings: Partial<AppSettings>) => void;
  onOpenImport: () => void;
  onResetProgress: () => void;
  onClearRoute: () => void;
  onOpenExport?: () => void;
}

export const SettingsModal: React.FC<SettingsModalProps> = ({
  isOpen,
  isDark,
  settings,
  onClose,
  onUpdateSettings,
  onOpenImport,
  onResetProgress,
  onClearRoute,
  onOpenExport,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className={\`w-full max-w-md rounded-3xl border shadow-2xl overflow-hidden flex flex-col max-h-[90vh] \${
          isDark ? 'bg-neutral-900 border-neutral-700 text-white' : 'bg-white border-neutral-300 text-black'
        }\`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-800">
          <div className="flex items-center gap-3">
            <img 
              src="/icon-192.png" 
              alt="Garbage Route" 
              className="w-10 h-10 rounded-xl border border-emerald-400/60 shadow shrink-0 object-cover" 
            />
            <div>
              <h2 className="text-lg font-black tracking-tight">Garbage Route Settings</h2>
              <p className="text-xs text-neutral-400 mt-0.5">Driver & Navigation Preferences</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-2 rounded-xl text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Settings Body */}
        <div className="p-6 overflow-y-auto space-y-5">
          {/* Theme Mode: AMOLED Black vs High Contrast Day */}
          <div>
            <label className="text-xs font-bold uppercase tracking-wider text-neutral-400 block mb-2">
              Display Mode
            </label>
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => onUpdateSettings({ theme: 'amoled-black' })}
                className={\`p-3.5 rounded-2xl border flex flex-col items-center justify-center gap-2 transition-all \${
                  settings.theme === 'amoled-black'
                    ? 'border-emerald-400 bg-neutral-950 text-white ring-2 ring-emerald-500/30'
                    : 'border-neutral-800 bg-neutral-950/40 text-neutral-400 hover:text-neutral-200'
                }\`}
              >
                <Moon className="w-5 h-5 text-emerald-400" />
                <span className="text-xs font-bold">AMOLED Pitch Black</span>
                <span className="text-[10px] text-neutral-400">Saves battery & high OLED contrast</span>
              </button>

              <button
                onClick={() => onUpdateSettings({ theme: 'high-contrast-day' })}
                className={\`p-3.5 rounded-2xl border flex flex-col items-center justify-center gap-2 transition-all \${
                  settings.theme === 'high-contrast-day'
                    ? 'border-emerald-400 bg-neutral-100 text-black ring-2 ring-emerald-500/30'
                    : 'border-neutral-800 bg-neutral-950/40 text-neutral-400 hover:text-neutral-200'
                }\`}
              >
                <Sun className="w-5 h-5 text-amber-500" />
                <span className="text-xs font-bold">Daylight High Contrast</span>
                <span className="text-[10px] text-neutral-400">Direct sunlight in vehicle mount</span>
              </button>
            </div>
          </div>

          {/* Screen Wake Lock */}
          <div className="flex items-center justify-between p-3.5 rounded-2xl border border-neutral-800 bg-neutral-950/50">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-neutral-900 border border-neutral-800 text-emerald-400">
                <Smartphone className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-neutral-100">Keep Screen Awake</h4>
                <p className="text-[11px] text-neutral-400">Prevents phone display from sleeping while on route</p>
              </div>
            </div>
            <input
              type="checkbox"
              checked={settings.keepScreenAwake}
              onChange={(e) => onUpdateSettings({ keepScreenAwake: e.target.checked })}
              className="w-5 h-5 accent-emerald-500 rounded cursor-pointer"
            />
          </div>

          {/* Voice Announcements & Spoken Turn Warnings */}
          <div className="p-3.5 rounded-2xl border border-neutral-800 bg-neutral-950/50 space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-neutral-900 border border-neutral-800 text-emerald-400">
                  <Volume2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-neutral-100">Voice Guidance & Turn Warnings</h4>
                  <p className="text-[11px] text-neutral-400">Speaks next customer stops & upcoming turn maneuvers</p>
                </div>
              </div>
              <input
                type="checkbox"
                checked={settings.voiceAnnouncement}
                onChange={(e) => onUpdateSettings({ voiceAnnouncement: e.target.checked })}
                className="w-5 h-5 accent-emerald-500 rounded cursor-pointer"
              />
            </div>

            {settings.voiceAnnouncement && (
              <div className="pt-2 border-t border-neutral-800/80 space-y-1.5">
                <div className="flex items-center justify-between text-[11px]">
                  <span className="font-semibold text-neutral-300">Early Turn Warning Distance</span>
                  <span className="font-mono text-emerald-400 font-bold">
                    {(settings.turnWarningDistancesFeet && settings.turnWarningDistancesFeet[0]) || 500} ft
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-1.5 pt-0.5">
                  {[
                    { distances: [500], label: '500 ft', sub: 'Standard (Rec)' },
                    { distances: [600], label: '600 ft', sub: 'Highway / Fast' },
                    { distances: [400], label: '400 ft', sub: 'Dense City' },
                  ].map((preset) => {
                    const currentDist = (settings.turnWarningDistancesFeet && settings.turnWarningDistancesFeet[0]) || 500;
                    const isSelected = currentDist === preset.distances[0];
                    return (
                      <button
                        key={preset.label}
                        type="button"
                        onClick={() => onUpdateSettings({ turnWarningDistancesFeet: preset.distances })}
                        className={\`py-1.5 px-1 rounded-xl border flex flex-col items-center justify-center transition-all \${
                          isSelected
                            ? 'border-emerald-400 bg-emerald-400/15 text-emerald-300 font-bold ring-1 ring-emerald-400/50'
                            : 'border-neutral-800 bg-neutral-900/60 text-neutral-400 hover:text-white'
                        }\`}
                      >
                        <span className="text-xs">{preset.label}</span>
                        <span className="text-[9px] text-neutral-500">{preset.sub}</span>
                      </button>
                    );
                  })}
                </div>
                <p className="text-[10px] text-neutral-500">
                  Spoken voice announces the upcoming maneuver and distance in advance (e.g. &ldquo;Turn left in 500 feet&rdquo;), followed by a direct instruction at the turn point (e.g. &ldquo;Turn left&rdquo;).
                </p>
              </div>
            )}
          </div>

          {/* Haptic Vibration */}
          <div className="flex items-center justify-between p-3.5 rounded-2xl border border-neutral-800 bg-neutral-950/50">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-neutral-900 border border-neutral-800 text-amber-400">
                <Sparkles className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-neutral-100">Haptic Vibration</h4>
                <p className="text-[11px] text-neutral-400">Tactile vibration feedback on button press</p>
              </div>
            </div>
            <input
              type="checkbox"
              checked={settings.hapticFeedback}
              onChange={(e) => onUpdateSettings({ hapticFeedback: e.target.checked })}
              className="w-5 h-5 accent-emerald-500 rounded cursor-pointer"
            />
          </div>

          {/* Extra Large Font */}
          <div className="flex items-center justify-between p-3.5 rounded-2xl border border-neutral-800 bg-neutral-950/50">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-neutral-900 border border-neutral-800 text-blue-400">
                <Eye className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-neutral-100">Extra Large Typography</h4>
                <p className="text-[11px] text-neutral-400">Maximizes readability from distance on dash mount</p>
              </div>
            </div>
            <input
              type="checkbox"
              checked={settings.extraLargeText}
              onChange={(e) => onUpdateSettings({ extraLargeText: e.target.checked })}
              className="w-5 h-5 accent-emerald-500 rounded cursor-pointer"
            />
          </div>

          {/* Automatic Arrival Radius (Configurable 50m / ~164ft default) */}
          <div className="p-4 rounded-2xl border border-neutral-800 bg-neutral-950/50 space-y-2.5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-xl bg-neutral-900 border border-neutral-800 text-amber-400">
                  <RotateCcw className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-neutral-100">Arrival Proximity Window</h4>
                  <p className="text-[11px] text-neutral-400">Distance window for evaluating approaching stops</p>
                </div>
              </div>
              <span className="text-xs font-mono font-bold text-amber-400">
                {Math.round((settings.arrivalRadiusMeters || 152.4) * 3.28084)} ft ({Math.round(settings.arrivalRadiusMeters || 152.4)}m)
              </span>
            </div>

            <div className="grid grid-cols-5 gap-1.5 pt-1">
              {[
                { meters: 50, label: '50m', sub: '164 ft' },
                { meters: 75, label: '75m', sub: '246 ft' },
                { meters: 100, label: '100m', sub: '328 ft' },
                { meters: 152.4, label: '152m', sub: '500 ft', rec: true },
                { meters: 200, label: '200m', sub: '656 ft' },
              ].map((item) => {
                const isSelected = Math.abs((settings.arrivalRadiusMeters || 152.4) - item.meters) < 1;
                return (
                  <button
                    key={item.meters}
                    type="button"
                    onClick={() => onUpdateSettings({ arrivalRadiusMeters: item.meters })}
                    className={\`py-2 px-1 rounded-xl border flex flex-col items-center justify-center transition-all \${
                      isSelected
                        ? 'border-amber-400 bg-amber-400/15 text-amber-300 font-bold ring-1 ring-amber-400/50'
                        : 'border-neutral-800 bg-neutral-900/60 text-neutral-400 hover:text-white'
                    }\`}
                  >
                    <span className="text-xs">{item.label}</span>
                    <span className="text-[9px] text-neutral-500">{item.sub}</span>
                    {item.rec && (
                      <span className="text-[8px] text-emerald-400 font-mono mt-0.5">Rec</span>
                    )}
                  </button>
                );
              })}
            </div>
            <p className="text-[10px] text-neutral-500">
              500 ft (~152m) is the proximity window for evaluating an approaching customer. Arrival is confirmed when reaching the curbside or passing the address.
            </p>
          </div>

          {/* Configurable Arrival Confirmation Threshold (Default 150 ft / ~46m) */}
          <div className="p-4 rounded-2xl border border-neutral-800 bg-neutral-950/50 space-y-2.5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-xl bg-neutral-900 border border-neutral-800 text-emerald-400">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-neutral-100">Arrival Confirmation Threshold</h4>
                  <p className="text-[11px] text-neutral-400">Curbside stop or pass-through threshold</p>
                </div>
              </div>
              <span className="text-xs font-mono font-bold text-emerald-400">
                {settings.arrivalConfirmFeet || 150} ft ({Math.round((settings.arrivalConfirmFeet || 150) * 0.3048)}m)
              </span>
            </div>

            <div className="grid grid-cols-5 gap-1.5 pt-1">
              {[
                { feet: 100, label: '100 ft', sub: '30m' },
                { feet: 125, label: '125 ft', sub: '38m' },
                { feet: 150, label: '150 ft', sub: '46m', rec: true },
                { feet: 175, label: '175 ft', sub: '53m' },
                { feet: 200, label: '200 ft', sub: '61m' },
              ].map((item) => {
                const isSelected = (settings.arrivalConfirmFeet || 150) === item.feet;
                return (
                  <button
                    key={item.feet}
                    type="button"
                    onClick={() => onUpdateSettings({ arrivalConfirmFeet: item.feet })}
                    className={\`py-2 px-1 rounded-xl border flex flex-col items-center justify-center transition-all \${
                      isSelected
                        ? 'border-emerald-400 bg-emerald-400/15 text-emerald-300 font-bold ring-1 ring-emerald-400/50'
                        : 'border-neutral-800 bg-neutral-900/60 text-neutral-400 hover:text-white'
                    }\`}
                  >
                    <span className="text-xs">{item.label}</span>
                    <span className="text-[9px] text-neutral-500">{item.sub}</span>
                    {item.rec && (
                      <span className="text-[8px] text-emerald-400 font-mono mt-0.5">Rec</span>
                    )}
                  </button>
                );
              })}
            </div>
            <p className="text-[10px] text-neutral-500">
              150 ft accounts for customer house/driveway setbacks from the street curb and GPS horizontal accuracy. Arrival confirms upon stopping or passing at delivery speed.
            </p>
          </div>

          {/* Route Management Section */}
          <div className="pt-3 border-t border-neutral-800 space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-neutral-400 block mb-2">
              Route Management
            </label>

            <button
              onClick={() => {
                onClose();
                onOpenExport?.();
              }}
              className="w-full flex items-center justify-between p-3 rounded-xl border border-blue-800 hover:border-blue-700 bg-blue-950/40 text-xs font-bold text-blue-300 hover:text-white transition-colors"
            >
              <div className="flex items-center gap-2">
                <FolderOpen className="w-4 h-4 text-blue-400" />
                <span>Export Project Source (.ZIP)</span>
              </div>
              <span className="text-[10px] px-2 py-0.5 rounded bg-blue-900/60 text-blue-200 font-mono">Step 1</span>
            </button>

            <button
              onClick={() => {
                onClose();
                onOpenImport();
              }}
              className="w-full flex items-center justify-between p-3 rounded-xl border border-neutral-800 hover:border-neutral-700 bg-neutral-950/40 text-xs font-bold text-neutral-200 hover:text-white transition-colors"
            >
              <div className="flex items-center gap-2">
                <FolderOpen className="w-4 h-4 text-neutral-400" />
                <span>Import Different GPX File</span>
              </div>
              <span className="text-[10px] text-neutral-400">Browse...</span>
            </button>

            <button
              onClick={() => {
                onResetProgress();
                onClose();
              }}
              className="w-full flex items-center justify-between p-3 rounded-xl border border-neutral-800 hover:border-neutral-700 bg-neutral-950/40 text-xs font-bold text-neutral-200 hover:text-white transition-colors"
            >
              <div className="flex items-center gap-2">
                <RotateCcw className="w-4 h-4 text-amber-400" />
                <span>Reset Progress to Stop 1</span>
              </div>
              <span className="text-[10px] text-neutral-400">Keep stops</span>
            </button>

            <button
              onClick={() => {
                if (confirm('Clear current route and load fresh GPX?')) {
                  onClearRoute();
                  onClose();
                }
              }}
              className="w-full flex items-center justify-between p-3 rounded-xl border border-red-900/60 hover:border-red-800 bg-red-950/20 text-xs font-bold text-red-300 hover:text-red-200 transition-colors"
            >
              <div className="flex items-center gap-2">
                <Trash2 className="w-4 h-4 text-red-400" />
                <span>Clear Loaded Route</span>
              </div>
              <span className="text-[10px] text-red-400/80">Delete</span>
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-neutral-800 flex justify-end bg-neutral-950/40">
          <button
            onClick={onClose}
            className="px-5 py-2 text-xs font-bold rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black transition-colors"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};
`,At=`import React, { useState, useRef } from 'react';
import { createPortal } from 'react-dom';
import { RouteStop, AppSettings } from '../types/route';
import { TurnByTurnPanel } from './TurnByTurnPanel';
import { RoadMapView } from './RoadMapView';
import { GpsLocation } from '../utils/useGpsTracker';
import { getStopHouseNumber } from '../utils/gpxParser';
import { 
  ChevronLeft, 
  SkipForward, 
  CheckCircle2, 
  List, 
  Map,
  ArrowLeft
} from 'lucide-react';

interface StopCardProps {
  stop: RouteStop;
  allStops?: RouteStop[];
  onSelectStop?: (index: number) => void;
  previousStop?: RouteStop;
  nextStop?: RouteStop;
  userLocation: GpsLocation | null;
  gpsStatus: 'acquiring' | 'locked' | 'denied';
  gpsErrorMsg: string | null;
  distanceToCurrentFeet: number | null;
  isWithinGeofence: boolean;
  isConfirmedArrival?: boolean;
  isSharedLocationWithPrevious: boolean;
  isSharedLocationWithNext: boolean;
  autoArrivalStatus: string;
  currentIndex: number;
  totalStops: number;
  completedCount: number;
  skippedCount: number;
  settings: AppSettings;
  onMarkPickedUp: () => void;
  onSkip: () => void;
  onPrevious: () => void;
  onJumpToStopList: () => void;
  arrivalRadiusMeters?: number;
  arrivalConfirmFeet?: number;
  isPassedWithoutCompletion?: boolean;
  simulateApproachAndPass?: () => void;
  simulateApproachAndArrive?: () => void;
  simulateCurbsidePassThrough?: () => void;
  isSimulatingGps?: boolean;
  isSimPaused?: boolean;
  simSpeedMultiplier?: number;
  startFullRouteSimulation?: (startStopIndex?: number, speedMultiplier?: number) => void;
  pauseSimulation?: () => void;
  resumeSimulation?: () => void;
  setSimulationSpeed?: (multiplier: number) => void;
  restartSimulation?: () => void;
  stopGpsSimulation?: () => void;
  onRouteCoordinatesUpdate?: (coords: [number, number][]) => void;
  onRoadRemainingUpdate?: (meters: number | null) => void;
  onOpenSettings?: () => void;
  diagLogs?: string[];
}

export const StopCard: React.FC<StopCardProps> = ({
  stop,
  allStops = [],
  onSelectStop,
  previousStop,
  nextStop,
  userLocation,
  gpsStatus,
  gpsErrorMsg,
  distanceToCurrentFeet,
  isWithinGeofence,
  isConfirmedArrival = false,
  autoArrivalStatus,
  currentIndex,
  totalStops,
  settings,
  onMarkPickedUp,
  onSkip,
  onPrevious,
  onJumpToStopList,
  arrivalRadiusMeters,
  arrivalConfirmFeet,
  isPassedWithoutCompletion,
  simulateApproachAndPass,
  simulateApproachAndArrive,
  simulateCurbsidePassThrough,
  isSimulatingGps,
  isSimPaused,
  simSpeedMultiplier,
  startFullRouteSimulation,
  pauseSimulation,
  resumeSimulation,
  setSimulationSpeed,
  restartSimulation,
  stopGpsSimulation,
  onRouteCoordinatesUpdate,
  onRoadRemainingUpdate,
  onOpenSettings,
  diagLogs,
}) => {
  const isDark = settings.theme === 'amoled-black';

  // Toggle map view on/off (defaults to map-free large-text navigation)
  const [isMapOpen, setIsMapOpen] = useState(false);
  const [routeCoordinates, setRouteCoordinates] = useState<[number, number][]>([]);

  const handleRouteCoordinatesUpdate = (coords: [number, number][]) => {
    setRouteCoordinates(coords);
    onRouteCoordinatesUpdate?.(coords);
  };

  // Extract true house number from the customer's delivery address data (never stop sequence e.g. "002")
  const displayHouseNumber = getStopHouseNumber(stop, currentIndex);

  // Filter GPS speed reading to discard anomalies and spikes
  const lastSpeedRef = useRef<{ speed: number; timestamp: number } | null>(null);

  const getFilteredSpeed = (): number | null => {
    if (!userLocation || gpsStatus === 'denied') return null;
    const rawSpeed = userLocation.speed;
    if (rawSpeed === null || rawSpeed === undefined || isNaN(rawSpeed) || rawSpeed < 0) {
      return null;
    }
    // Filter poor GPS accuracy fixes (> 35m)
    if (userLocation.accuracy && userLocation.accuracy > 35) {
      return null;
    }
    // Filter physical impossibility for delivery route (> 95 mph)
    if (rawSpeed > 95) {
      return null;
    }

    const now = userLocation.timestamp || Date.now();
    const last = lastSpeedRef.current;
    if (last !== null) {
      const dt = Math.max(0.5, (now - last.timestamp) / 1000);
      const diff = Math.abs(rawSpeed - last.speed);
      // Realistic acceleration threshold: > 25 mph/s jump rejected if above 30 mph
      if (dt < 3 && diff > 25 * dt && rawSpeed > 30) {
        return last.speed;
      }
    }

    lastSpeedRef.current = { speed: rawSpeed, timestamp: now };
    return rawSpeed;
  };

  const currentSpeedMph = getFilteredSpeed();
  const displaySpeed = currentSpeedMph !== null ? Math.round(currentSpeedMph) : null;

  return (
    <div className="flex flex-col h-full justify-between pb-safe select-none overflow-hidden">
      {/* 1. Turn-by-Turn Navigation Panel at the very top (compacted for S26 viewport) */}
      <div className="shrink-0">
        <TurnByTurnPanel
          currentStop={stop}
          previousStop={previousStop}
          nextStop={nextStop}
          userLocation={userLocation}
          gpsStatus={gpsStatus}
          gpsErrorMsg={gpsErrorMsg}
          distanceToCurrentFeet={distanceToCurrentFeet}
          isDark={isDark}
          arrivalRadiusMeters={arrivalRadiusMeters || settings.arrivalRadiusMeters || 152.4}
          isWithinGeofence={isWithinGeofence}
          isConfirmedArrival={isConfirmedArrival}
          autoArrivalStatus={autoArrivalStatus}
          isPassedWithoutCompletion={isPassedWithoutCompletion}
          simulateApproachAndPass={simulateApproachAndPass}
          simulateApproachAndArrive={simulateApproachAndArrive}
          simulateCurbsidePassThrough={simulateCurbsidePassThrough}
          isSimulatingGps={isSimulatingGps}
          isSimPaused={isSimPaused}
          simSpeedMultiplier={simSpeedMultiplier}
          startFullRouteSimulation={startFullRouteSimulation}
          pauseSimulation={pauseSimulation}
          resumeSimulation={resumeSimulation}
          setSimulationSpeed={setSimulationSpeed}
          restartSimulation={restartSimulation}
          stopGpsSimulation={stopGpsSimulation}
          onRouteCoordinatesUpdate={handleRouteCoordinatesUpdate}
          onRoadRemainingUpdate={onRoadRemainingUpdate}
          onSkipCustomer={onSkip}
          voiceAnnouncement={settings.voiceAnnouncement}
          turnWarningDistancesFeet={settings.turnWarningDistancesFeet || [500, 200]}
          onOpenSettings={onOpenSettings}
          diagLogs={diagLogs}
        />
      </div>

      {/* 2A. Header Row 1: Stop Number (Left) + Show Map & Previous Customer (Right) on the same line */}
      <div className="shrink-0 flex items-center justify-between px-1 py-0.5 mb-1 gap-2">
        {/* Customer 1 of xxx on the left */}
        <button
          onClick={onJumpToStopList}
          className="flex items-center gap-1.5 text-xs font-mono font-bold text-neutral-400 hover:text-white transition-colors shrink-0"
          title="Open Stop List"
        >
          <span className="text-emerald-400">STOP {currentIndex + 1} OF {totalStops}</span>
          <List className="w-3.5 h-3.5 text-neutral-500" />
        </button>

        {/* Show Map and Previous Customer options on the same line */}
        <div className="flex items-center gap-1.5 shrink-0">
          <button
            onClick={() => setIsMapOpen((prev) => !prev)}
            className={\`flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-black uppercase tracking-wider transition-all active:scale-95 border \${
              isMapOpen
                ? 'bg-amber-400 text-black border-amber-300 shadow-md shadow-amber-950/40'
                : 'bg-neutral-900 hover:bg-neutral-800 text-amber-400 border-neutral-700'
            }\`}
            title={isMapOpen ? 'Hide road map' : 'Show road map'}
          >
            <Map className="w-3.5 h-3.5" />
            <span>{isMapOpen ? 'Hide Map' : 'Show Map'}</span>
          </button>

          {currentIndex > 0 && (
            <button
              onClick={onPrevious}
              className="flex items-center gap-1 text-[11px] font-semibold text-neutral-400 hover:text-white px-2 py-1 rounded-lg bg-neutral-900 border border-neutral-800 transition-colors active:scale-95"
              title="Return to previous customer"
            >
              <ChevronLeft className="w-3.5 h-3.5" />
              <span>Prev</span>
            </button>
          )}
        </div>
      </div>

      {/* 2B. Header Row 2: Speed Display on the left (Original width ~80px, 3x in vertical length / height) */}
      <div className="shrink-0 px-1 mb-1.5 flex items-center justify-start">
        <div 
          className="w-20 h-20 bg-white text-black rounded-2xl border-2 border-neutral-300 shadow-lg flex flex-col items-center justify-center font-mono shrink-0 select-none"
          title="Live vehicle speed from GPS updates"
        >
          <span className="text-3xl sm:text-4xl font-black text-black leading-none tracking-tight">
            {displaySpeed !== null ? displaySpeed : '--'}
          </span>
          <span className="text-[10px] font-black text-neutral-900 uppercase tracking-widest leading-none mt-1">
            MPH
          </span>
        </div>
      </div>

      {/* 3 & 4. Main Display Area: Large Customer Name + Large Yellow House-Number Block */}
      <div className="flex-1 flex flex-col items-center justify-center my-auto py-1 text-center shrink-0 min-h-fit">
        {/* Customer's Name in Large Text */}
        <h1 className={\`text-2xl sm:text-3xl font-black tracking-tight leading-snug mb-2 sm:mb-3 px-2 max-w-md break-words text-center shrink-0 \${isDark ? 'text-white' : 'text-neutral-900'}\`}>
          {stop.name || 'Customer'}
        </h1>

        {/* Yellow House-Number Block with Very Large Number */}
        <div 
          className="bg-amber-400 text-black border-2 border-amber-300 rounded-2xl px-6 py-2.5 sm:py-3 flex items-center justify-center shadow-xl min-w-[160px] max-w-[260px] transition-transform active:scale-95 shrink-0"
        >
          <span className="text-5xl sm:text-6xl font-black font-mono tracking-tighter leading-none">
            {displayHouseNumber}
          </span>
        </div>
      </div>

      {/* FULL SCREEN ROAD MAP OVERLAY (Takes up the entire screen view when Show Map is tapped) */}
      {isMapOpen && typeof document !== 'undefined' && createPortal(
        <div className="fixed inset-0 z-[9999] flex flex-col bg-black w-screen h-screen overflow-hidden">
          {/* Top Bar on Full Screen Map */}
          <div className="shrink-0 bg-neutral-950/95 border-b border-neutral-800 px-3 py-2.5 flex items-center justify-between gap-2 shadow-lg backdrop-blur-md pt-safe">
            <button
              onClick={() => setIsMapOpen(false)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-white font-extrabold text-xs transition-all active:scale-95 border border-neutral-700 shadow"
            >
              <ArrowLeft className="w-4 h-4 text-amber-400" />
              <span>Hide Map</span>
            </button>

            {/* Map View Header (No customer name or house number on display) */}
            <div className="flex-1 text-center font-mono font-bold text-xs text-neutral-400">
              MAP OVERVIEW
            </div>

            <button
              onClick={() => {
                setIsMapOpen(false);
                onJumpToStopList();
              }}
              className="p-1.5 bg-neutral-800 hover:bg-neutral-700 text-neutral-300 rounded-xl border border-neutral-700 transition-colors"
              title="Stop list"
            >
              <List className="w-4 h-4" />
            </button>
          </div>

          {/* Full Screen Map Body - Takes 100% of the screen */}
          <div className="flex-1 w-full h-full relative min-h-0">
            <RoadMapView
              userLocation={userLocation}
              destination={{
                lat: stop.lat,
                lon: stop.lon,
                name: stop.name,
                houseNumber: displayHouseNumber,
                address: stop.fullAddress,
              }}
              activeStopIndex={currentIndex}
              allStops={allStops}
              onSelectStop={onSelectStop}
              routeCoordinates={routeCoordinates}
              isDark={isDark}
            />
          </div>

          {/* Bottom Driving Control Bar on Full Screen Map */}
          <div className="shrink-0 bg-neutral-950/95 border-t border-neutral-800 px-3 py-2.5 flex items-center justify-between gap-3 shadow-2xl backdrop-blur-md pb-safe">
            {/* Speed Display */}
            <div className="flex items-center gap-1.5 px-3 py-1.5 bg-white text-black rounded-xl border-2 border-neutral-300 font-mono shadow shrink-0">
              <span className="text-xl font-black leading-none">{displaySpeed !== null ? displaySpeed : '--'}</span>
              <span className="text-[10px] font-black uppercase text-neutral-800">MPH</span>
            </div>

            {/* Quick Actions while in Full Screen Map */}
            <div className="flex items-center gap-2 flex-1 max-w-xs justify-end">
              <button
                onClick={onSkip}
                className="flex-1 py-2.5 px-3 rounded-xl bg-orange-600 hover:bg-orange-500 text-white font-black text-xs uppercase tracking-wider flex items-center justify-center gap-1 shadow active:scale-95 transition-all"
              >
                <SkipForward className="w-3.5 h-3.5" />
                <span>Skip</span>
              </button>
              <button
                onClick={onMarkPickedUp}
                className="flex-1 py-2.5 px-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-black text-xs uppercase tracking-wider flex items-center justify-center gap-1 shadow active:scale-95 transition-all"
              >
                <CheckCircle2 className="w-3.5 h-3.5 stroke-[2.5]" />
                <span>Picked Up</span>
              </button>
            </div>
          </div>
        </div>,
        document.body
      )}

      {/* 5. Bottom Action Buttons: Green MARK PICKED UP + Orange SKIP CUSTOMER */}
      <div className="shrink-0 pt-1.5 space-y-2">
        {/* Green MARK PICKED UP Button */}
        <button
          onClick={onMarkPickedUp}
          className="w-full h-12 sm:h-13 rounded-xl flex items-center justify-center gap-2 font-black text-base sm:text-lg tracking-wide uppercase bg-emerald-500 hover:bg-emerald-400 text-black border-2 border-emerald-300 shadow-lg shadow-emerald-950/40 transition-all active:scale-[0.98]"
        >
          <CheckCircle2 className="w-5 h-5 stroke-[3]" />
          <span>Mark Picked Up</span>
        </button>

        {/* Orange SKIP CUSTOMER Button */}
        <button
          onClick={onSkip}
          className="w-full h-12 sm:h-13 rounded-xl flex items-center justify-center gap-2 font-black text-base sm:text-lg tracking-wide uppercase bg-amber-500 hover:bg-amber-400 text-black border-2 border-amber-300 shadow-lg shadow-amber-950/40 transition-all active:scale-[0.98]"
        >
          <SkipForward className="w-5 h-5 stroke-[3]" />
          <span>Skip Customer</span>
        </button>
      </div>
    </div>
  );
};
`,jt=`import React, { useState, useEffect, useRef, useCallback } from 'react';
import { RouteStop } from '../types/route';
import { GpsLocation } from '../utils/useGpsTracker';
import { 
  NavManeuver, 
  fetchOsmRoute, 
  calculateDistanceMeters, 
  calculateDistanceToPolylineMeters, 
  calculateRemainingRouteDistanceMeters,
  calculateBearing,
  formatDistance, 
  formatDuration 
} from '../utils/navigationService';
import { 
  announceTurnaround, 
  announceTurn, 
  announceAdvanceTurn,
  announceDirectTurn,
  cancelTurnAnnouncements, 
  isTurnManeuver 
} from '../utils/voiceAndHaptics';
import { 
  Compass, 
  Play, 
  Pause,
  Square, 
  RotateCcw, 
  X, 
  Info, 
  CheckCircle2, 
  Sparkles,
  CornerUpRight, 
  CornerUpLeft, 
  ArrowUp, 
  ArrowUpRight, 
  ArrowUpLeft,
  CircleDot, 
  GitFork, 
  Flag,
  Navigation,
  Activity,
  Settings as SettingsIcon
} from 'lucide-react';

function isValidCoordinate(lat: number, lon: number): boolean {
  return (
    !isNaN(lat) &&
    !isNaN(lon) &&
    lat >= -90 &&
    lat <= 90 &&
    lon >= -180 &&
    lon <= 180 &&
    !(lat === 0 && lon === 0)
  );
}

// ==========================================
// 1. Maneuver Icon Component with Prominent U-Turn / Turnaround
// ==========================================
export const ManeuverIconComponent: React.FC<{ type?: string; modifier?: string; className?: string }> = ({ 
  type = 'turn', 
  modifier = 'straight',
  className = 'w-10 h-10' 
}) => {
  const mod = (modifier || '').toLowerCase();
  const t = (type || '').toLowerCase();

  if (t === 'arrive') return <Flag className={className} />;
  if (t === 'roundabout' || t === 'rotary') return <CircleDot className={className} />;
  if (t === 'fork') return <GitFork className={className} />;
  
  // Prominent driver-grade U-turn / Turn Around symbol
  if (
    mod.includes('uturn') ||
    mod === 'uturn' ||
    mod.includes('turnaround') ||
    mod.includes('turn around') ||
    t === 'turnaround'
  ) {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M9 19V9a5 5 0 0 1 10 0v7" />
        <polyline points="6 16 9 19 12 16" />
      </svg>
    );
  }
  
  if (mod === 'sharp right') {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M12 21V11a4 4 0 0 1 4-4h5" />
        <polyline points="18 4 21 7 18 10" />
      </svg>
    );
  }
  if (mod === 'sharp left') {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M12 21V11a4 4 0 0 0-4-4H3" />
        <polyline points="6 4 3 7 6 10" />
      </svg>
    );
  }
  if (mod === 'slight right') return <ArrowUpRight className={className} strokeWidth={2.75} />;
  if (mod === 'slight left') return <ArrowUpLeft className={className} strokeWidth={2.75} />;
  if (mod === 'right') return <CornerUpRight className={className} strokeWidth={2.75} />;
  if (mod === 'left') return <CornerUpLeft className={className} strokeWidth={2.75} />;
  if (mod === 'straight' || t === 'continue' || t === 'depart') {
    return <ArrowUp className={className} strokeWidth={2.75} />;
  }
  return <Compass className={className} strokeWidth={2.5} />;
};

// ==========================================
// 2. Complete Turn-by-Turn Panel Component
// ==========================================
export interface TurnByTurnPanelProps {
  currentStop: RouteStop;
  previousStop?: RouteStop;
  nextStop?: RouteStop;
  userLocation: GpsLocation | null;
  gpsStatus: 'acquiring' | 'locked' | 'denied';
  gpsErrorMsg: string | null;
  distanceToCurrentFeet: number | null;
  isDark: boolean;
  onOpenOsmAnd?: (e: React.MouseEvent) => void;
  arrivalRadiusMeters?: number;
  isWithinGeofence?: boolean;
  isConfirmedArrival?: boolean;
  autoArrivalStatus?: string;
  isPassedWithoutCompletion?: boolean;
  simulateApproachAndPass?: () => void;
  simulateApproachAndArrive?: () => void;
  simulateCurbsidePassThrough?: () => void;
  isSimulatingGps?: boolean;
  isSimPaused?: boolean;
  simSpeedMultiplier?: number;
  startFullRouteSimulation?: (startStopIndex?: number, speedMultiplier?: number) => void;
  pauseSimulation?: () => void;
  resumeSimulation?: () => void;
  setSimulationSpeed?: (multiplier: number) => void;
  restartSimulation?: () => void;
  stopGpsSimulation?: () => void;
  onRouteCoordinatesUpdate?: (coords: [number, number][]) => void;
  onRoadRemainingUpdate?: (meters: number | null) => void;
  onSkipCustomer?: () => void;
  voiceAnnouncement?: boolean;
  turnWarningDistancesFeet?: number[];
  onOpenSettings?: () => void;
  diagLogs?: string[];
}

export const TurnByTurnPanel: React.FC<TurnByTurnPanelProps> = ({
  currentStop,
  previousStop,
  nextStop,
  userLocation,
  distanceToCurrentFeet,
  isDark,
  arrivalRadiusMeters = 152.4,
  isWithinGeofence = false,
  isConfirmedArrival = false,
  autoArrivalStatus,
  isPassedWithoutCompletion = false,
  simulateApproachAndPass,
  simulateApproachAndArrive,
  simulateCurbsidePassThrough,
  isSimulatingGps = false,
  isSimPaused = false,
  simSpeedMultiplier = 1,
  startFullRouteSimulation,
  pauseSimulation,
  resumeSimulation,
  setSimulationSpeed,
  restartSimulation,
  stopGpsSimulation,
  onRouteCoordinatesUpdate,
  onRoadRemainingUpdate,
  onSkipCustomer,
  voiceAnnouncement = true,
  turnWarningDistancesFeet = [500, 200],
  onOpenSettings,
  diagLogs = [],
}) => {
  const [showStatusModal, setShowStatusModal] = useState(false);
  const [showDiagModal, setShowDiagModal] = useState(false);
  const [showTestMenu, setShowTestMenu] = useState(false);
  const [selectedSimSpeed, setSelectedSimSpeed] = useState<number>(1);
  const routeRequestIdRef = useRef<number>(0);

  // Live OsmAnd AIDL feed state (from Android Kotlin wrapper)
  const [aidlUpdate, setAidlUpdate] = useState<{
    maneuver: string;
    street: string;
    distanceMeters: number;
    lastReceived: number;
  } | null>(null);

  useEffect(() => {
    (window as any).onOsmAndNavUpdate = (maneuver: string, street: string, distMeters: number) => {
      setAidlUpdate({
        maneuver: maneuver || 'straight',
        street: street || '',
        distanceMeters: typeof distMeters === 'number' ? distMeters : 0,
        lastReceived: Date.now(),
      });
    };
    return () => {
      delete (window as any).onOsmAndNavUpdate;
    };
  }, []);

  const isAidlActive = Boolean(aidlUpdate && Date.now() - aidlUpdate.lastReceived < 20000);

  // Road navigation state
  const [maneuvers, setManeuvers] = useState<NavManeuver[]>([]);
  const [routeCoordinates, setRouteCoordinates] = useState<[number, number][]>([]);
  const [currentManeuverIndex, setCurrentManeuverIndex] = useState(0);
  const [distanceToTurnMeters, setDistanceToTurnMeters] = useState(0);
  const [totalDistanceMeters, setTotalDistanceMeters] = useState(0);
  const [remainingDistanceToCustomerMeters, setRemainingDistanceToCustomerMeters] = useState<number | null>(null);
  const [totalDurationSeconds, setTotalDurationSeconds] = useState(0);
  const [isRouting, setIsRouting] = useState(false);
  const [routingError, setRoutingError] = useState<string | null>(null);
  const [rerouteBadge, setRerouteBadge] = useState<string | null>(null);

  // Tracking and Debounce Refs for recalculations
  const lastRerouteTimeRef = useRef<number>(0);
  const lastReroutePosRef = useRef<{ lat: number; lon: number } | null>(null);
  const minDistanceToDestRef = useRef<number>(Infinity);
  const currentStopIdRef = useRef<string | null>(null);
  const lastSegmentIndexRef = useRef<number>(0);
  const prevGpsPosRef = useRef<{ lat: number; lon: number } | null>(null);

  // Spoken turn maneuver tracking refs (announces each warning threshold exactly once)
  const spokenManeuverWarningsRef = useRef<Map<string, Set<string | number>>>(new Map());
  const spokenTurnaroundStopIdRef = useRef<string | null>(null);
  const routeVersionRef = useRef<string>('route_0');

  // Track previous GPS position for heading estimation when hardware heading is null
  useEffect(() => {
    if (userLocation && isValidCoordinate(userLocation.lat, userLocation.lon)) {
      prevGpsPosRef.current = { lat: userLocation.lat, lon: userLocation.lon };
    }
  }, [userLocation]);

  // Determine starting point: live GPS if valid, else previous stop, else realistic approach offset
  const getStartPoint = useCallback((): { lat: number; lon: number; heading: number | null } | null => {
    if (userLocation && isValidCoordinate(userLocation.lat, userLocation.lon)) {
      let heading = userLocation.heading ?? null;
      if (heading === null && prevGpsPosRef.current) {
        heading = calculateBearing(prevGpsPosRef.current.lat, prevGpsPosRef.current.lon, userLocation.lat, userLocation.lon);
      }
      return { 
        lat: userLocation.lat, 
        lon: userLocation.lon, 
        heading 
      };
    }
    if (previousStop && isValidCoordinate(previousStop.lat, previousStop.lon)) {
      return { 
        lat: previousStop.lat, 
        lon: previousStop.lon, 
        heading: null 
      };
    }
    if (currentStop && isValidCoordinate(currentStop.lat, currentStop.lon)) {
      // 0.005 deg offset (~500m) approach vector
      return { 
        lat: currentStop.lat - 0.005, 
        lon: currentStop.lon - 0.004, 
        heading: 35 
      };
    }
    return null;
  }, [userLocation, previousStop, currentStop]);

  // Primary Road Route Fetcher
  const fetchRoute = useCallback(async (customStart?: { lat: number; lon: number; heading?: number | null }, reasonTag?: string) => {
    if (!currentStop || !isValidCoordinate(currentStop.lat, currentStop.lon)) {
      setManeuvers([]);
      setRouteCoordinates([]);
      setRemainingDistanceToCustomerMeters(null);
      return;
    }

    const start = customStart || getStartPoint();
    if (!start) return;

    const currentRequestId = ++routeRequestIdRef.current;
    const targetStopId = currentStop.id;

    setIsRouting(true);
    setRoutingError(null);

    try {
      const currentRoad = maneuvers[currentManeuverIndex]?.streetName || currentStop.streetName;
      const route = await fetchOsmRoute(
        start.lat,
        start.lon,
        currentStop.lat,
        currentStop.lon,
        currentStop.name,
        start.heading,
        currentStop.streetName,
        currentRoad
      );

      // Verify request is still authoritative for the current stop
      if (currentRequestId !== routeRequestIdRef.current || currentStopIdRef.current !== targetStopId) {
        return;
      }

      if (route.maneuvers.length > 0) {
        cancelTurnAnnouncements();
        spokenManeuverWarningsRef.current.clear();
        routeVersionRef.current = \`route_\${Date.now()}\`;

        setManeuvers(route.maneuvers);
        setRouteCoordinates(route.coordinates);
        if (onRouteCoordinatesUpdate) {
          onRouteCoordinatesUpdate(route.coordinates);
        }
        setCurrentManeuverIndex(0);
        lastSegmentIndexRef.current = 0;
        setTotalDistanceMeters(route.totalDistance);
        setRemainingDistanceToCustomerMeters(route.totalDistance);
        setTotalDurationSeconds(route.totalDuration);
        setDistanceToTurnMeters(route.maneuvers[0]?.distanceMeters || 0);

        lastRerouteTimeRef.current = Date.now();
        lastReroutePosRef.current = { lat: start.lat, lon: start.lon };

        if (reasonTag) {
          setRerouteBadge(reasonTag);
          setTimeout(() => setRerouteBadge(null), 5000);
        } else if (route.hasUturn) {
          setRerouteBadge('Turn Around Route Active');
          setTimeout(() => setRerouteBadge(null), 5000);
        }
      }
    } catch (err: any) {
      console.warn('Road routing error:', err);
      setRoutingError(err.message || 'Routing unavailable');
    } finally {
      setIsRouting(false);
    }
  }, [currentStop, getStartPoint, onRouteCoordinatesUpdate, maneuvers, currentManeuverIndex]);

  // Initial Route Fetch on active customer change
  useEffect(() => {
    const stopId = currentStop?.id || null;
    if (stopId !== currentStopIdRef.current) {
      currentStopIdRef.current = stopId;
      spokenTurnaroundStopIdRef.current = null;
      cancelTurnAnnouncements();
      spokenManeuverWarningsRef.current.clear();
      routeVersionRef.current = \`route_\${Date.now()}\`;
      setCurrentManeuverIndex(0);
      lastSegmentIndexRef.current = 0;
      setRemainingDistanceToCustomerMeters(null);
      minDistanceToDestRef.current = Infinity;
      lastReroutePosRef.current = null;
      lastRerouteTimeRef.current = 0;
      setRerouteBadge(null);
      // Clear previous coordinates so simulator does not re-use previous stop's polyline
      setRouteCoordinates([]);
      onRouteCoordinatesUpdate?.([]);
      fetchRoute();
    }
  }, [currentStop?.id, currentStop?.lat, currentStop?.lon, fetchRoute, onRouteCoordinatesUpdate]);

  // Real-time Vehicle Progress & Intelligent Recalculation Engine
  useEffect(() => {
    if (!userLocation || !isValidCoordinate(userLocation.lat, userLocation.lon)) return;
    if (!currentStop || !isValidCoordinate(currentStop.lat, currentStop.lon)) return;

    const now = Date.now();
    const distToDest = calculateDistanceMeters(userLocation.lat, userLocation.lon, currentStop.lat, currentStop.lon);

    // Track minimum distance seen for this destination
    if (distToDest < minDistanceToDestRef.current) {
      minDistanceToDestRef.current = distToDest;
    }

    // ========================================================
    // INTELLIGENT RECALCULATION TRIGGER
    // 1. Driver passed destination without completing stop (missed stop)
    // 2. OR driver deviated significantly (> 45m) off planned route polyline
    // ========================================================
    const timeSinceLastReroute = now - lastRerouteTimeRef.current;
    const distFromLastReroute = lastReroutePosRef.current
      ? calculateDistanceMeters(userLocation.lat, userLocation.lon, lastReroutePosRef.current.lat, lastReroutePosRef.current.lon)
      : Infinity;

    // Condition A: Missed destination (authoritatively validated by GPS tracker)
    const isPassedAddress = Boolean(isPassedWithoutCompletion);

    // Condition B: Off-route deviation from polyline (> 45 meters)
    let isOffRoute = false;
    if (routeCoordinates.length > 1) {
      const distToPolyline = calculateDistanceToPolylineMeters(userLocation.lat, userLocation.lon, routeCoordinates);
      isOffRoute = distToPolyline > 45 && distToDest > 30;
    }

    // In simulation mode, prevent false off-route triggers since simulator is following road polyline
    if (isSimulatingGps) {
      isOffRoute = false;
    }

    if ((isPassedAddress || isOffRoute) && timeSinceLastReroute > 3500 && distFromLastReroute > 15 && !isRouting) {
      const reason = isPassedAddress ? 'Passed Stop · Recalculating' : 'Off-Route · Rerouting';
      minDistanceToDestRef.current = distToDest;
      let heading = userLocation.heading ?? null;
      if (heading === null && prevGpsPosRef.current) {
        heading = calculateBearing(prevGpsPosRef.current.lat, prevGpsPosRef.current.lon, userLocation.lat, userLocation.lon);
      }
      fetchRoute(
        { lat: userLocation.lat, lon: userLocation.lon, heading },
        reason
      );
      return;
    }

    // ========================================================
    // DISTANCE TO CUSTOMER COUNTDOWN (Continuous along driving route)
    // ========================================================
    if (routeCoordinates.length > 1) {
      const { remainingMeters, closestSegmentIndex } = calculateRemainingRouteDistanceMeters(
        userLocation.lat,
        userLocation.lon,
        routeCoordinates,
        lastSegmentIndexRef.current
      );
      lastSegmentIndexRef.current = closestSegmentIndex;
      setRemainingDistanceToCustomerMeters(remainingMeters);
      onRoadRemainingUpdate?.(remainingMeters);
    } else if (distanceToCurrentFeet !== null) {
      const m = Math.round(distanceToCurrentFeet / 3.28084);
      setRemainingDistanceToCustomerMeters(m);
      onRoadRemainingUpdate?.(m);
    } else {
      const m = Math.round(distToDest);
      setRemainingDistanceToCustomerMeters(m);
      onRoadRemainingUpdate?.(m);
    }

    // ========================================================
    // MANEUVER PROGRESSION ALONG ACTIVE ROUTE
    // Advance to next turn as driver approaches maneuver waypoint
    // ========================================================
    if (maneuvers.length > 0 && currentManeuverIndex < maneuvers.length) {
      const currentM = maneuvers[currentManeuverIndex];
      if (currentM) {
        const [turnLon, turnLat] = currentM.location;
        const distToWaypoint = calculateDistanceMeters(userLocation.lat, userLocation.lon, turnLat, turnLon);
        const distToWaypointFeet = Math.round(distToWaypoint * 3.28084);

        if (distToWaypoint < 25 && currentManeuverIndex < maneuvers.length - 1) {
          setCurrentManeuverIndex((idx) => idx + 1);
          const nextM = maneuvers[currentManeuverIndex + 1];
          setDistanceToTurnMeters(nextM ? nextM.distanceMeters : 0);
        } else {
          setDistanceToTurnMeters(Math.max(0, Math.round(distToWaypoint)));
        }

        // ========================================================
        // SPOKEN TURN-BY-TURN ANNOUNCEMENTS
        // Early warning (e.g. 500 ft) & turn reminder (e.g. 200 ft)
        // ========================================================
        const isManeuverTurnaround = Boolean(
          currentM.modifier?.toLowerCase().includes('uturn') ||
          currentM.type?.toLowerCase() === 'turnaround'
        );

        if (voiceAnnouncement && isTurnManeuver(currentM) && !isPassedAddress && !isManeuverTurnaround) {
          const maneuverKey = \`\${routeVersionRef.current}_m\${currentManeuverIndex}_\${turnLon.toFixed(5)},\${turnLat.toFixed(5)}\`;
          if (!spokenManeuverWarningsRef.current.has(maneuverKey)) {
            spokenManeuverWarningsRef.current.set(maneuverKey, new Set<string | number>());
          }
          const spokenSet = spokenManeuverWarningsRef.current.get(maneuverKey)!;
          const advanceThreshold = (turnWarningDistancesFeet && turnWarningDistancesFeet[0]) || 500;

          // 1. Advance warning at approximately 500 feet: announces maneuver and distance (e.g. "Turn left in 500 feet")
          if (distToWaypointFeet <= advanceThreshold + 60 && distToWaypointFeet >= advanceThreshold - 60) {
            if (!spokenSet.has('advance')) {
              spokenSet.add('advance');
              announceAdvanceTurn(currentM, advanceThreshold);
            }
          }

          // 2. Direct maneuver instruction at the closer point (~60 - 160 ft): short command (e.g. "Turn left"), NO distance repeated
          if (distToWaypointFeet <= 160 && distToWaypointFeet >= 60) {
            if (!spokenSet.has('direct')) {
              spokenSet.add('direct');
              announceDirectTurn(currentM);
            }
          }
        }
      }
    }
  }, [userLocation, currentStop, maneuvers, currentManeuverIndex, routeCoordinates, isPassedWithoutCompletion, isRouting, fetchRoute, distanceToCurrentFeet, voiceAnnouncement, turnWarningDistancesFeet]);

  const currentManeuver = maneuvers[currentManeuverIndex] || null;
  const nextManeuver = maneuvers[currentManeuverIndex + 1] || null;

  // Check if active customer was passed without confirmed arrival
  const distToDest = userLocation && isValidCoordinate(userLocation.lat, userLocation.lon) && isValidCoordinate(currentStop.lat, currentStop.lon)
    ? calculateDistanceMeters(userLocation.lat, userLocation.lon, currentStop.lat, currentStop.lon)
    : Infinity;

  const isCustomerPassed = Boolean(isPassedWithoutCompletion);

  // Check if customer is the last stop on the current road
  const isLastStopOnRoad = Boolean(
    currentStop && (
      !nextStop ||
      (currentStop.streetName && nextStop.streetName && currentStop.streetName.toLowerCase().trim() !== nextStop.streetName.toLowerCase().trim())
    )
  );

  // Helper to ensure clean road/street name without metadata or house numbers
  const cleanRoadName = (raw: string | undefined | null): string => {
    if (!raw) return '';
    let s = raw.trim();
    if (!s) return '';

    // 1. If string contains structured pipes e.g. "Stop 38 | Customer: Randi Hickman II | Address: 6589 State Route 90"
    if (s.includes('|') || /(?:stop\\s*#?\\d+|customer|address|addr)\\s*:/i.test(s)) {
      const addrMatch = s.match(/(?:address|addr)\\s*:\\s*([^|;\\n]+)/i);
      if (addrMatch) {
        s = addrMatch[1].trim();
      } else {
        const parts = s.split(/\\s*\\|\\s*/);
        const last = parts[parts.length - 1].trim();
        s = last.replace(/^(?:address|addr)\\s*:\\s*/i, '').trim();
      }
    }

    // 2. Strip leading stop-sequence indicators
    s = s.replace(/^(?:stop\\s*#?\\d+\\s*[-:–—|]\\s*|#?0+\\d+\\s*[-:–—|]\\s*)/i, '').trim();

    // 3. Strip leading house number: e.g. "6589 State Route 90" -> "State Route 90"
    s = s.replace(/^(?:#|no\\.?\\s*)?\\d+[A-Za-z]?(?:[-\\/][A-Za-z0-9]+)?\\s+(?:[NSEW]\\.?\\s+)?/i, '').trim();

    // 4. Strip trailing unit/apt/suite: e.g. "Laraway Rd Apt A" -> "Laraway Rd"
    s = s.replace(/,\\s*(?:apt\\.?|unit|ste\\.?|suite|room|rm\\.?)\\s*#?[a-z0-9-]+$/i, '').trim();
    s = s.replace(/\\s+(?:apt\\.?|apartment|unit|suite|ste\\.?)\\s*#?[a-z0-9-]+$/i, '').trim();

    return s;
  };

  const isArrived = Boolean(isConfirmedArrival);
  const isNearDestination = distToDest <= (arrivalRadiusMeters || 152.4);

  // Check if route involves a turnaround / U-turn
  const hasTurnaroundManeuver = Boolean(
    maneuvers.some((m) => {
      const mod = (m.modifier || '').toLowerCase();
      const t = (m.type || '').toLowerCase();
      return mod.includes('uturn') || mod.includes('turnaround') || mod.includes('turn around') || t === 'turnaround';
    })
  );

  // A maneuver is a turnaround if OSRM routes a U-turn / turnaround maneuver
  const isCurrentManeuverTurnaround = Boolean(
    !isArrived &&
    currentManeuver &&
    (
      (currentManeuver.modifier || '').toLowerCase().includes('uturn') ||
      (currentManeuver.type || '').toLowerCase() === 'turnaround' ||
      currentManeuver.instruction.includes('Turn around as soon as possible.')
    )
  );

  // Turnaround is an immediate action instruction, NOT an advance warning:
  // Announce only when the vehicle has reached the point where the turnaround should begin (<= 164 ft / 50m)
  // or when the route starts at the turnaround maneuver (distance <= 50m).
  const isTurnaroundImmediate = Boolean(
    isCurrentManeuverTurnaround &&
    (distanceToTurnMeters <= 50 || (currentManeuverIndex === 0 && (currentManeuver?.distanceMeters || 0) <= 50))
  );

  // Spoken voice announcement for turnaround:
  // 1. Announce ONLY when immediately required at the turnaround point
  // 2. Announce at most once per turnaround maneuver key
  // 3. Do not announce miles in advance
  useEffect(() => {
    if (isTurnaroundImmediate && voiceAnnouncement && currentStop?.id && !isArrived) {
      const maneuverKey = \`\${routeVersionRef.current}_m\${currentManeuverIndex}_turnaround\`;
      if (!spokenManeuverWarningsRef.current.has(maneuverKey)) {
        spokenManeuverWarningsRef.current.set(maneuverKey, new Set<string | number>());
      }
      const spokenSet = spokenManeuverWarningsRef.current.get(maneuverKey)!;
      if (!spokenSet.has('immediate')) {
        spokenSet.add('immediate');
        announceTurnaround();
      }
    }
  }, [isTurnaroundImmediate, voiceAnnouncement, currentStop?.id, currentManeuverIndex, isArrived]);

  const rawStreetCandidate = isAidlActive && aidlUpdate
    ? aidlUpdate.street
    : currentManeuver?.streetName || currentStop.streetName || currentStop.fullAddress || '';
  const activeStreetName = cleanRoadName(rawStreetCandidate);

  const activeManeuverType = isAidlActive && aidlUpdate
    ? (aidlUpdate.maneuver.includes('roundabout') ? 'roundabout' : (aidlUpdate.maneuver.includes('uturn') || aidlUpdate.maneuver.includes('turnaround') ? 'turnaround' : 'turn'))
    : isCurrentManeuverTurnaround
      ? 'turnaround'
      : currentManeuver?.type || 'turn';

  const activeManeuverModifier = isAidlActive && aidlUpdate
    ? aidlUpdate.maneuver
    : isCurrentManeuverTurnaround
      ? 'uturn'
      : currentManeuver?.modifier || 'straight';

  const activeInstructionText = isAidlActive && aidlUpdate
    ? (aidlUpdate.maneuver.includes('uturn') || aidlUpdate.maneuver.includes('turnaround')
        ? 'Turn around as soon as possible.'
        : (aidlUpdate.street ? \`Turn onto \${aidlUpdate.street}\` : aidlUpdate.maneuver))
    : isCurrentManeuverTurnaround
      ? (isTurnaroundImmediate ? 'Turn around as soon as possible.' : (activeStreetName ? \`Turn around ahead on \${activeStreetName}\` : 'Turn around as soon as possible.'))
      : currentManeuver?.instruction || (activeStreetName ? \`Proceed along route to \${activeStreetName}\` : 'Proceed toward customer destination');

  const activeDistanceToNextTurn = isAidlActive && aidlUpdate
    ? formatDistance(aidlUpdate.distanceMeters)
    : formatDistance(distanceToTurnMeters) || '0 ft';

  const hasValidCoords = isValidCoordinate(currentStop.lat, currentStop.lon);

  const arrivalZoneFeet = Math.round((arrivalRadiusMeters || 152.4) * 3.28084);

  // Direct straight-line distance to verified customer coordinates
  const directDistanceMeters = distanceToCurrentFeet !== null && hasValidCoords
    ? distanceToCurrentFeet / 3.28084
    : distToDest;

  // Prioritize active customer's verified delivery address coordinates:
  // When further away on the road, use remaining road driving distance.
  // When approaching within the proximity window (<= 500 ft / 152.4m) or near the destination,
  // ensure the display counts down smoothly directly to verified customer coordinates (stop.lat, stop.lon),
  // preventing any premature 0ft jump or offset from OSRM road snapping points!
  const displayDistanceToCustomer = isArrived
    ? '0 ft'
    : directDistanceMeters <= (arrivalRadiusMeters || 152.4) && directDistanceMeters < Infinity
      ? formatDistance(directDistanceMeters)
      : remainingDistanceToCustomerMeters !== null
        ? formatDistance(remainingDistanceToCustomerMeters)
        : directDistanceMeters < Infinity
          ? formatDistance(directDistanceMeters)
          : totalDistanceMeters > 0
            ? formatDistance(totalDistanceMeters)
            : '0 ft';

  // Check whether an upcoming road maneuver/turn is relevant before reaching customer
  const isFinalArrivalManeuver = !currentManeuver || currentManeuver.type === 'arrive';
  const hasUpcomingTurn = !isFinalArrivalManeuver && (currentManeuverIndex < maneuvers.length - 1 || distanceToTurnMeters > 15);

  return (
    <>
      {/* 
        Substantially Taller, Full-Width Driver-Grade Turn-by-Turn Card
        - Zero text truncation (no truncate, no nowrap, no ellipses)
        - Multi-line wrap enabled for any street name length
        - High-contrast AMOLED black & amber/orange styling
        - Legal U-turn & block rerouting support
      */}
      <div 
        className={\`w-full rounded-2xl border-2 transition-all shadow-xl relative mb-2 flex flex-col shrink-0 \${
          isArrived
            ? 'bg-emerald-950/95 border-emerald-400 text-white shadow-emerald-950/90'
            : isDark 
              ? 'bg-neutral-950 border-neutral-800 text-white shadow-neutral-950/95' 
              : 'bg-neutral-900 border-neutral-700 text-white shadow-neutral-500/40'
        }\`}
      >
        {/* Amber accent top bar */}
        <div className="w-full h-1 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-400 rounded-t-2xl" />

        {/* 1. Compact Navigation Card Header: Garbage Route Branding & Controls */}
        <div className="px-2.5 py-1.5 flex items-center justify-between border-b border-neutral-800/80 gap-2">
          {/* Left: Garbage Route Branding (Icon + Title) */}
          <div className="flex items-center gap-2 shrink-0">
            <img 
              src="/icon-192.png" 
              alt="Garbage Route" 
              className="w-7 h-7 rounded-lg border border-emerald-400/60 shadow-sm shrink-0 object-cover" 
            />
            <span className="font-black text-xs sm:text-sm tracking-tight text-white leading-none">
              Garbage Route
            </span>
          </div>

          {/* Right: Simulation Controls or Test Drive Button & Settings */}
          <div className="flex items-center gap-1.5 min-w-0 justify-end">
            {rerouteBadge && (
              <span className="font-mono font-bold uppercase tracking-wider text-[10px] text-amber-400 bg-amber-950/70 border border-amber-500/40 px-1.5 py-0.5 rounded shrink-0">
                {rerouteBadge}
              </span>
            )}

            {isSimulatingGps ? (
              /* Simulation Active Control Bar */
              <div className="flex items-center gap-1 bg-neutral-900 border border-amber-500/50 rounded-lg p-0.5 shadow-lg">
                {/* Play / Pause Toggle */}
                <button
                  onClick={() => {
                    if (isSimPaused) {
                      resumeSimulation?.();
                    } else {
                      pauseSimulation?.();
                    }
                  }}
                  className={\`flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-wider transition-all active:scale-95 \${
                    isSimPaused
                      ? 'bg-amber-400 text-black hover:bg-amber-300'
                      : 'bg-neutral-800 text-amber-400 hover:bg-neutral-700'
                  }\`}
                  title={isSimPaused ? 'Resume Simulation' : 'Pause Simulation'}
                >
                  {isSimPaused ? (
                    <>
                      <Play className="w-2.5 h-2.5 fill-current" />
                      <span>Resume</span>
                    </>
                  ) : (
                    <>
                      <Pause className="w-2.5 h-2.5 fill-current" />
                      <span>Pause</span>
                    </>
                  )}
                </button>

                {/* Speed Multipliers */}
                <div className="flex items-center border-l border-neutral-700 pl-1">
                  {[1, 2, 5].map((spd) => (
                    <button
                      key={spd}
                      onClick={() => setSimulationSpeed?.(spd)}
                      className={\`px-1.5 py-0.5 text-[9px] font-black rounded font-mono transition-all \${
                        simSpeedMultiplier === spd
                          ? 'bg-amber-400 text-black shadow-sm'
                          : 'text-neutral-400 hover:text-white'
                      }\`}
                      title={\`Set Simulation Speed to \${spd}x\`}
                    >
                      {spd}x
                    </button>
                  ))}
                </div>

                {/* Restart from Stop 1 */}
                <button
                  onClick={() => restartSimulation?.()}
                  className="p-1 text-neutral-400 hover:text-white rounded hover:bg-neutral-800 transition-colors"
                  title="Restart from Stop 1"
                >
                  <RotateCcw className="w-2.5 h-2.5" />
                </button>

                {/* Diagnostics Modal Toggle */}
                <button
                  onClick={() => setShowDiagModal(true)}
                  className="flex items-center gap-0.5 px-1.5 py-0.5 rounded text-[10px] font-mono font-bold uppercase tracking-wider bg-neutral-800 hover:bg-neutral-700 text-sky-400 border border-sky-500/40 transition-all active:scale-95"
                  title="Open Test Drive Navigation Diagnostics"
                >
                  <Activity className="w-2.5 h-2.5" />
                  <span>Diag</span>
                </button>

                {/* Stop / Exit */}
                <button
                  onClick={() => stopGpsSimulation?.()}
                  className="flex items-center gap-0.5 px-1.5 py-0.5 rounded text-[10px] font-black uppercase tracking-wider bg-red-600/80 hover:bg-red-600 text-white transition-all active:scale-95"
                  title="Stop Test Drive & Exit Simulation"
                >
                  <Square className="w-2 h-2 fill-current" />
                  <span>Exit</span>
                </button>
              </div>
            ) : (
              <div className="relative">
                <button
                  onClick={() => setShowTestMenu((v) => !v)}
                  className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[10px] font-black uppercase tracking-wider bg-neutral-900 hover:bg-neutral-800 text-amber-400 border border-neutral-700 transition-all active:scale-95 shadow-sm"
                  title="Open Test Drive simulation menu"
                >
                  <Play className="w-2.5 h-2.5 fill-current text-amber-400" />
                  <span>TEST DRIVE</span>
                </button>

                {/* Test Drive Dropdown Menu */}
                {showTestMenu && (
                  <div className="absolute left-0 top-full mt-1.5 w-64 bg-neutral-900 border border-neutral-700 rounded-xl shadow-2xl p-2 z-40 space-y-2 animate-in fade-in zoom-in-95 duration-150">
                    {/* Speed Selection */}
                    <div className="flex items-center justify-between pb-1.5 border-b border-neutral-800 text-[10px] text-neutral-400 font-bold uppercase tracking-wider">
                      <span>Sim Speed:</span>
                      <div className="flex items-center gap-1">
                        {[1, 2, 5].map((spd) => (
                          <button
                            key={spd}
                            type="button"
                            onClick={() => setSelectedSimSpeed(spd)}
                            className={\`px-2 py-0.5 rounded font-mono text-[10px] font-bold \${
                              selectedSimSpeed === spd
                                ? 'bg-amber-400 text-black'
                                : 'bg-neutral-800 text-neutral-300 hover:text-white'
                            }\`}
                          >
                            {spd}x
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Full Route Simulation Options */}
                    <div className="space-y-1">
                      <button
                        onClick={() => {
                          setShowTestMenu(false);
                          if (startFullRouteSimulation) {
                            startFullRouteSimulation(0, selectedSimSpeed);
                          }
                        }}
                        className="w-full text-left p-2 rounded-lg bg-amber-400/10 hover:bg-amber-400/20 border border-amber-500/30 text-white transition-all group"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-1.5 font-bold text-xs text-amber-300">
                            <Play className="w-3.5 h-3.5 fill-current text-amber-400 shrink-0" />
                            <span>Start Drive from Stop 1</span>
                          </div>
                          <span className="text-[9px] bg-amber-400 text-black px-1.5 py-0.2 rounded font-black uppercase font-mono">
                            Full Route
                          </span>
                        </div>
                        <p className="text-[10px] text-neutral-400 mt-0.5 pl-5">
                          Simulates complete route along roads to the last customer.
                        </p>
                      </button>

                      <button
                        onClick={() => {
                          setShowTestMenu(false);
                          if (startFullRouteSimulation) {
                            startFullRouteSimulation(undefined, selectedSimSpeed);
                          }
                        }}
                        className="w-full text-left px-2 py-1.5 rounded-lg text-xs font-bold text-neutral-200 hover:bg-neutral-800 flex items-center justify-between"
                      >
                        <div className="flex items-center gap-1.5">
                          <Navigation className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
                          <span>Continue from Current Stop</span>
                        </div>
                      </button>
                    </div>

                    {/* Single Stop Quick Tests */}
                    <div className="pt-1.5 border-t border-neutral-800 space-y-1">
                      <div className="text-[9px] font-bold uppercase tracking-wider text-neutral-500 px-1">
                        Single-Stop Quick Tests
                      </div>

                      <button
                        onClick={() => {
                          setShowTestMenu(false);
                          simulateApproachAndArrive?.();
                        }}
                        className="w-full text-left px-2 py-1 rounded-lg text-xs font-bold text-neutral-300 hover:bg-neutral-800 flex items-center justify-between"
                      >
                        <div className="flex items-center gap-1.5">
                          <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />
                          <span>Curbside Stop</span>
                        </div>
                        <span className="text-[9px] text-neutral-500 font-mono">2 mph</span>
                      </button>

                      <button
                        onClick={() => {
                          setShowTestMenu(false);
                          simulateCurbsidePassThrough?.();
                        }}
                        className="w-full text-left px-2 py-1 rounded-lg text-xs font-bold text-neutral-300 hover:bg-neutral-800 flex items-center justify-between"
                      >
                        <div className="flex items-center gap-1.5">
                          <CheckCircle2 className="w-3 h-3 text-cyan-400 shrink-0" />
                          <span>Curbside Pass-Through</span>
                        </div>
                        <span className="text-[9px] text-cyan-400 font-mono">10 mph</span>
                      </button>

                      <button
                        onClick={() => {
                          setShowTestMenu(false);
                          simulateApproachAndPass?.();
                        }}
                        className="w-full text-left px-2 py-1 rounded-lg text-xs font-bold text-neutral-300 hover:bg-neutral-800 flex items-center justify-between"
                      >
                        <div className="flex items-center gap-1.5">
                          <RotateCcw className="w-3 h-3 text-amber-400 shrink-0" />
                          <span>Miss Stop & Reroute</span>
                        </div>
                        <span className="text-[9px] text-amber-400 font-mono">28 mph</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Info Modal Button & Settings Gear */}
            <div className="flex items-center gap-1 shrink-0">
              <button
                onClick={() => setShowStatusModal(true)}
                className="p-1.5 text-neutral-400 hover:text-white rounded-lg hover:bg-neutral-800 transition-colors"
                title="Navigation details & instructions"
              >
                <Info className="w-4 h-4" />
              </button>
              {onOpenSettings && (
                <button
                  onClick={onOpenSettings}
                  className="p-1.5 text-neutral-400 hover:text-white rounded-lg hover:bg-neutral-800 transition-colors"
                  title="Settings & Route Options"
                  aria-label="Settings"
                >
                  <SettingsIcon className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        </div>

        {/* 2. Primary Customer Guidance Section: Maneuver Arrow + Large DISTANCE TO CUSTOMER */}
        <div className="px-3 py-2 flex items-center justify-between gap-3 border-b border-neutral-800/60">
          {/* Maneuver Arrow Container */}
          <div 
            className={\`w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center shrink-0 border-2 shadow-lg transition-all \${
              isArrived
                ? 'bg-emerald-500 border-emerald-300 text-black shadow-emerald-500/50'
                : isAidlActive
                  ? 'bg-emerald-500/25 border-emerald-400 text-emerald-400'
                  : 'bg-amber-400 border-amber-300 text-black shadow-amber-400/20'
            }\`}
          >
            {isArrived ? (
              <CheckCircle2 className="w-8 h-8 sm:w-9 sm:h-9 stroke-[3] text-black" />
            ) : (
              <ManeuverIconComponent 
                type={activeManeuverType}
                modifier={activeManeuverModifier}
                className="w-8 h-8 sm:w-9 sm:h-9 stroke-[2.75]" 
              />
            )}
          </div>

          {/* Large Hero: DISTANCE TO CUSTOMER with secondary next turn indicator */}
          <div className="flex-1 text-right min-w-0">
            <div className="text-[9px] sm:text-[10px] font-black uppercase tracking-widest text-amber-400 font-mono mb-0.5">
              {isArrived ? 'ARRIVED AT CUSTOMER' : 'DISTANCE TO CUSTOMER'}
            </div>
            <div className="font-black text-3xl sm:text-4xl font-mono text-white tracking-tight leading-none drop-shadow">
              {displayDistanceToCustomer}
            </div>

            {/* Secondary Road Maneuver Instruction when turn is relevant */}
            {!isArrived && (
              <div className="mt-1 flex items-center justify-end gap-1.5 text-xs font-mono">
                {hasUpcomingTurn ? (
                  <>
                    <span className="text-[9px] font-black uppercase tracking-wider text-black bg-amber-400 px-1.5 py-0.5 rounded shrink-0">
                      NEXT TURN
                    </span>
                    <span className="text-white font-extrabold text-[11px] sm:text-xs">
                      {activeDistanceToNextTurn}
                    </span>
                  </>
                ) : (
                  <span className="text-[10px] font-bold text-emerald-400 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block animate-pulse" />
                    <span>Straight to Stop</span>
                  </span>
                )}
              </div>
            )}
          </div>
        </div>

        {/* 3. Full-Width Driving Instruction */}
        <div className="px-3 py-1.5 space-y-1">
          {/* Complete Turn Instruction Text - No truncate, wraps cleanly */}
          <h2 className="text-base sm:text-lg font-black text-amber-300 tracking-tight leading-snug whitespace-normal break-words">
            {activeInstructionText}
          </h2>

          {/* Road / Street Name Pill */}
          {activeStreetName && (
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-lg bg-neutral-900 border border-neutral-700/80 text-white font-bold text-xs max-w-full whitespace-normal break-words">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
              <span className="break-words">Road: {activeStreetName}</span>
            </div>
          )}
        </div>

        {/* Missed Last Stop Guidance Banner */}
        {isCustomerPassed && isLastStopOnRoad && !isArrived && (
          <div className="mx-3 my-1 px-3 py-1.5 rounded-xl bg-amber-500/15 border border-amber-400/40 text-amber-300 text-[11px] font-bold flex items-center justify-between gap-2">
            <span>Customer is last stop on road · Turn around as soon as possible, or tap Skip to continue</span>
            {onSkipCustomer && (
              <button 
                onClick={onSkipCustomer} 
                className="shrink-0 px-2 py-0.5 bg-amber-400 text-black rounded-lg text-[10px] font-black uppercase tracking-wider hover:bg-amber-300 active:scale-95 transition-all shadow"
              >
                Skip
              </button>
            )}
          </div>
        )}

        {/* 4. Upcoming Next Turn Preview Strip ("THEN" Maneuver) */}
        {nextManeuver && !isArrived && (
          <div className="px-3 py-1 bg-neutral-900/95 border-t border-neutral-800 rounded-b-2xl flex items-center gap-2 text-xs font-semibold text-neutral-300 whitespace-normal break-words">
            <span className="text-[9px] font-black uppercase tracking-wider text-black bg-amber-400 px-1.5 py-0.5 rounded shrink-0">
              THEN
            </span>
            <div className="w-4 h-4 flex items-center justify-center shrink-0 text-amber-400">
              <ManeuverIconComponent 
                type={nextManeuver.type}
                modifier={nextManeuver.modifier}
                className="w-3.5 h-3.5 stroke-[2.5]" 
              />
            </div>
            <div className="flex-1 min-w-0 whitespace-normal break-words text-neutral-200 text-xs">
              <span className="font-mono text-amber-400 font-bold">In {formatDistance(nextManeuver.distanceMeters)}:</span>{' '}
              <span>{nextManeuver.instruction}</span>
            </div>
          </div>
        )}

        {/* 5. Arrival Banner */}
        {isArrived && (
          <div className="p-2 bg-emerald-500 text-black font-black text-xs text-center tracking-wide uppercase rounded-b-2xl flex items-center justify-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 stroke-[3]" />
            <span>ARRIVED AT CUSTOMER ADDRESS</span>
          </div>
        )}

        {/* Routing Error Notice */}
        {routingError && (
          <div className="px-4 py-2 bg-red-950/80 border-t border-red-900 text-xs text-red-300 flex items-center justify-between">
            <span>Routing server: {routingError}</span>
            <button
              onClick={() => fetchRoute()}
              className="underline text-red-200 flex items-center gap-1 font-bold"
            >
              <RotateCcw className="w-3.5 h-3.5" /> Retry
            </button>
          </div>
        )}
      </div>

      {/* Navigation Architecture & In-Phone Testing Guide Modal */}
      {showStatusModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="w-full max-w-md rounded-3xl border border-neutral-700 bg-neutral-900 text-white shadow-2xl p-6 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <img 
                  src="/icon-192.png" 
                  alt="Garbage Route" 
                  className="w-11 h-11 rounded-2xl border-2 border-emerald-400 shadow-md shrink-0 object-cover" 
                />
                <div>
                  <h3 className="font-black text-base">Garbage Route Navigation</h3>
                  <p className="text-xs text-neutral-400">Intelligent Rerouting & Legal Maneuvers</p>
                </div>
              </div>
              <button
                onClick={() => setShowStatusModal(false)}
                className="p-2 rounded-xl text-neutral-400 hover:text-white hover:bg-neutral-800"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3.5 text-xs text-neutral-300">
              <div className="p-3.5 rounded-2xl bg-neutral-950 border border-neutral-800 space-y-2">
                <div className="font-bold text-amber-400 flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4" />
                  <span>Legal Maneuvers & Missed Destinations</span>
                </div>
                <p>
                  Calculates genuine OpenStreetMap driving routes with exact road names, turn angles, and step distances.
                </p>
                <ul className="list-disc pl-4 space-y-1 text-neutral-400">
                  <li><strong>Turnaround Guidance:</strong> When turning around is the appropriate way to return to the customer, the app instructs &quot;Turn around as soon as possible.&quot;.</li>
                  <li><strong>Around the Block:</strong> If a turnaround is restricted by road dividers or one-way rules, the app routes you around the block via legal side streets.</li>
                  <li><strong>Last Stop on Road:</strong> If the customer is the last stop on the road and you pass it, the app guides you to turn around while keeping the active customer until arrival or manual skip.</li>
                  <li><strong>No Accidental Advance:</strong> Passing an address without stopping does not mark the customer complete; it keeps the customer active and recalculates the return route.</li>
                </ul>
              </div>

              <div className="p-3.5 rounded-2xl bg-neutral-950 border border-neutral-800 space-y-2">
                <div className="font-bold text-amber-300">How to Test on Android:</div>
                <ol className="list-decimal pl-4 space-y-1.5 text-neutral-400">
                  <li>Tap <strong>Test Drive</strong> in the navigation header.</li>
                  <li>Select <strong>Approach & Stop</strong> to verify confirmed arrival and automatic stop advancement.</li>
                  <li>Select <strong>Miss Stop & Reroute</strong> to simulate driving past without stopping. Watch the app keep the active customer and instantly recalculate a legal return route.</li>
                  <li>While driving on the road, the app automatically tracks your real-time GPS position.</li>
                </ol>
              </div>
            </div>

            <button
              onClick={() => setShowStatusModal(false)}
              className="w-full mt-5 py-3 rounded-2xl bg-amber-500 hover:bg-amber-400 text-black font-extrabold text-sm transition-all"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* 
        Diagnostic Modal for Test Drive Simulation
        Kept completely separate from normal driving interface (opened via [Diag] button)
      */}
      {showDiagModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 bg-black/80 backdrop-blur-sm">
          <div className="w-full max-w-lg bg-neutral-900 border border-neutral-700 rounded-2xl shadow-2xl flex flex-col max-h-[85vh] overflow-hidden text-neutral-200 text-xs">
            {/* Modal Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-neutral-800 bg-neutral-950">
              <div className="flex items-center gap-2">
                <Activity className="w-4 h-4 text-sky-400" />
                <h3 className="font-bold text-sm text-white">Test Drive Navigation Diagnostics</h3>
              </div>
              <button
                onClick={() => setShowDiagModal(false)}
                className="p-1 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-4 overflow-y-auto space-y-3 font-mono text-[11px]">
              {/* Real-time State Table */}
              <div className="bg-neutral-950/80 p-3 rounded-xl border border-neutral-800 space-y-1.5">
                <div className="flex justify-between border-b border-neutral-800/60 pb-1">
                  <span className="text-neutral-400">Active Stop:</span>
                  <span className="font-bold text-amber-400">#{currentStop.orderIndex || currentStop.id} - {currentStop.name}</span>
                </div>
                <div className="flex justify-between border-b border-neutral-800/60 pb-1">
                  <span className="text-neutral-400">Stop Target Coords:</span>
                  <span className="text-white">{currentStop.lat.toFixed(6)}, {currentStop.lon.toFixed(6)}</span>
                </div>
                <div className="flex justify-between border-b border-neutral-800/60 pb-1">
                  <span className="text-neutral-400">Simulated Vehicle Coords:</span>
                  <span className="text-emerald-400">{userLocation ? \`\${userLocation.lat.toFixed(6)}, \${userLocation.lon.toFixed(6)}\` : 'N/A'}</span>
                </div>
                <div className="flex justify-between border-b border-neutral-800/60 pb-1">
                  <span className="text-neutral-400">Speed / Heading:</span>
                  <span className="text-white">{userLocation?.speed ?? 0} mph | {userLocation?.heading !== null && userLocation?.heading !== undefined ? \`\${Math.round(userLocation.heading)}°\` : 'N/A'}</span>
                </div>
                <div className="flex justify-between border-b border-neutral-800/60 pb-1">
                  <span className="text-neutral-400">GPS Accuracy:</span>
                  <span className="text-white">{userLocation?.accuracy !== null && userLocation?.accuracy !== undefined ? \`\${userLocation.accuracy.toFixed(1)}m\` : 'N/A'}</span>
                </div>
                <div className="flex justify-between border-b border-neutral-800/60 pb-1">
                  <span className="text-neutral-400">Direct Distance:</span>
                  <span className="text-white">{distanceToCurrentFeet !== null ? \`\${distanceToCurrentFeet} ft\` : 'N/A'}</span>
                </div>
                <div className="flex justify-between border-b border-neutral-800/60 pb-1">
                  <span className="text-neutral-400">Road Distance:</span>
                  <span className="text-white">{remainingDistanceToCustomerMeters !== null ? \`\${Math.round(remainingDistanceToCustomerMeters * 3.28084)} ft (\${Math.round(remainingDistanceToCustomerMeters)}m)\` : 'N/A'}</span>
                </div>
                <div className="flex justify-between border-b border-neutral-800/60 pb-1">
                  <span className="text-neutral-400">Current Maneuver:</span>
                  <span className="text-amber-300 text-right max-w-[240px] truncate">{currentManeuver ? \`\${currentManeuver.type} (\${currentManeuver.modifier || 'none'}) [\${formatDistance(distanceToTurnMeters)}]\` : 'None / Arrive'}</span>
                </div>
                <div className="flex justify-between border-b border-neutral-800/60 pb-1">
                  <span className="text-neutral-400">Turnaround Status:</span>
                  <span className={isCurrentManeuverTurnaround ? 'text-amber-400 font-bold' : 'text-neutral-400'}>
                    {isCurrentManeuverTurnaround ? \`ACTIVE (\${isTurnaroundImmediate ? 'Immediate <=50m' : 'Upcoming'})\` : 'No Turnaround (Forward)'}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-400">Arrival State:</span>
                  <span className="text-sky-300">{autoArrivalStatus || 'Monitoring'}</span>
                </div>
              </div>

              {/* Diagnostic Event Logs */}
              <div className="space-y-1">
                <div className="text-xs font-semibold text-neutral-300 flex items-center justify-between">
                  <span>Recent Diagnostic Events ({diagLogs.length})</span>
                  <span className="text-[10px] text-neutral-500">Auto-updating</span>
                </div>
                <div className="h-44 overflow-y-auto bg-black p-2.5 rounded-xl border border-neutral-800 space-y-1 text-[10px] text-neutral-300 leading-relaxed font-mono">
                  {diagLogs.length > 0 ? (
                    diagLogs.map((log, idx) => (
                      <div key={idx} className="border-b border-neutral-900 pb-0.5 last:border-0">
                        {log}
                      </div>
                    ))
                  ) : (
                    <div className="text-neutral-600 italic">No events recorded yet. Simulator running along road route.</div>
                  )}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="px-4 py-2.5 bg-neutral-950 border-t border-neutral-800 flex justify-end">
              <button
                onClick={() => setShowDiagModal(false)}
                className="px-3 py-1 bg-neutral-800 hover:bg-neutral-700 text-white rounded-lg text-xs font-bold transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
`,Mt=`@import "tailwindcss";

@layer utilities {
  .pb-safe {
    padding-bottom: max(0.75rem, env(safe-area-inset-bottom, 0.75rem));
  }
  .pt-safe {
    padding-top: max(0.5rem, env(safe-area-inset-top, 0.5rem));
  }
}

:root {
  color-scheme: dark;
  font-family: 'Plus Jakarta Sans', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* Prevent accidental pull-to-refresh on Android when swiping cards in truck mount */
body {
  overscroll-behavior-y: contain;
  touch-action: manipulation;
}

/* High-contrast AMOLED Dark styling for OpenStreetMap tiles */
.dark-map-tiles {
  filter: brightness(0.7) invert(0.92) contrast(1.4) hue-rotate(185deg) saturate(0.4);
}

/* Custom dark styling for Leaflet customer popups */
.custom-dark-popup .leaflet-popup-content-wrapper {
  background: #0f172a !important;
  color: #ffffff !important;
  border: 1px solid #334155 !important;
  border-radius: 12px !important;
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.8) !important;
  padding: 4px 8px !important;
}

.custom-dark-popup .leaflet-popup-tip {
  background: #0f172a !important;
  border: 1px solid #334155 !important;
}

.custom-dark-popup .leaflet-popup-content {
  margin: 6px 6px !important;
}

.custom-dark-popup .leaflet-popup-close-button {
  color: #94a3b8 !important;
  padding: 6px 8px !important;
}

`,Nt=`import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(<App />);
`,Pt=`export type StopStatus = 'pending' | 'completed' | 'skipped';

export interface RouteStop {
  id: string;
  orderIndex: number; // 1-based exact sequence from GPX
  name: string;
  houseNumber: string;
  fullAddress: string;
  streetName: string;
  lat: number;
  lon: number;
  desc?: string;
  cmt?: string;
  notes?: string;
  status: StopStatus;
  statusTimestamp?: number;
  skipReason?: string;
}

export interface RouteData {
  id: string;
  name: string;
  filename: string;
  stops: RouteStop[];
  currentIndex: number; // 0-based index into stops array
  importedAt: number;
  lastUpdated: number;
}

export interface AppSettings {
  theme: 'amoled-black' | 'high-contrast-day';
  voiceAnnouncement: boolean;
  hapticFeedback: boolean;
  keepScreenAwake: boolean;
  extraLargeText: boolean;
  arrivalRadiusMeters?: number; // Configurable proximity-detection window in meters (default 152.4m / 500ft)
  arrivalConfirmFeet?: number; // Configurable arrival-confirmation threshold in feet (default 150ft)
  turnWarningDistancesFeet?: number[]; // Configurable advance-warning distances in feet (default [500, 200])
}

`,Ft=`import { RouteStop } from '../types/route';

/**
 * Parses structured or pipe-separated waypoint metadata:
 * e.g., "Stop 38 | Customer: Randi Hickman II | Address: 6589 State Route 90"
 * Returns the cleaned delivery address, extracted customer name, and stop sequence if present.
 */
export function parseStructuredAddressText(rawText: string | undefined | null): {
  cleanAddress: string;
  extractedName?: string;
  stopSequence?: number;
} {
  if (!rawText) return { cleanAddress: '' };
  let text = rawText.trim();
  if (!text) return { cleanAddress: '' };

  let extractedName: string | undefined;
  let stopSequence: number | undefined;

  // 1. Check for pipe-separated or key-value metadata fields
  if (text.includes('|') || /(?:customer|address|addr|stop\\s*#?\\d+)\\s*:/i.test(text)) {
    const parts = text.split(/\\s*\\|\\s*/);
    let foundAddress = '';

    for (const part of parts) {
      const p = part.trim();
      if (!p) continue;

      const stopMatch = p.match(/^stop\\s*#?(\\d+)/i);
      if (stopMatch) {
        stopSequence = parseInt(stopMatch[1], 10);
        continue;
      }

      const custMatch = p.match(/^(?:customer|name)\\s*:\\s*(.+)$/i);
      if (custMatch) {
        extractedName = custMatch[1].trim();
        continue;
      }

      const addrMatch = p.match(/^(?:address|addr)\\s*:\\s*(.+)$/i);
      if (addrMatch) {
        foundAddress = addrMatch[1].trim();
        continue;
      }

      // If this part looks like a street address (e.g., starts with a house number)
      if (!foundAddress && /^\\d+[A-Za-z]?(?:[-\\/][A-Za-z0-9]+)?\\s+[A-Za-z]/.test(p)) {
        foundAddress = p;
      }
    }

    if (foundAddress) {
      return { cleanAddress: foundAddress, extractedName, stopSequence };
    }
  }

  // 2. Explicit "Address: ..." substring without pipes
  const inlineAddrMatch = text.match(/(?:^|[;\\n])\\s*(?:address|addr)\\s*:\\s*([^;\\n|]+)/i);
  if (inlineAddrMatch) {
    const clean = inlineAddrMatch[1].trim();
    return { cleanAddress: clean, extractedName, stopSequence };
  }

  // 3. Strip leading stop-sequence indicators: "Stop 38 | ", "Stop 38 - ", "Stop 38: ", "002 - "
  text = text.replace(/^(?:stop\\s*#?\\d+\\s*[-:–—|]\\s*|#?0+\\d+\\s*[-:–—|]\\s*)/i, '').trim();

  // 4. Strip "Customer: Name | " or "Customer: Name - "
  text = text.replace(/^(?:customer|name)\\s*:\\s*[^|;–-]+(?:[|;–-]\\s*)/i, '').trim();

  // 5. Strip "Address: "
  text = text.replace(/^(?:address|addr)\\s*:\\s*/i, '').trim();

  return { cleanAddress: text, extractedName, stopSequence };
}

/**
 * Cleanly extracts the house or building number from an address string.
 * Supports:
 * - Simple numbers: "123 Main St" -> "123", "6589 State Route 90" -> "6589"
 * - Letter suffixes: "123A Main St" -> "123A"
 * - Hyphenated / sub-numbers: "1402-B Willow Creek Rd", "45/2 Birchwood" -> "1402-B", "45/2"
 * - Structured pipe fields: "Stop 38 | Customer: Randi Hickman II | Address: 6589 State Route 90" -> "6589"
 * - Strips route/stop sequence prefixes like "002 - 123 Main St", "Stop 2: 123 Main St"
 * - Handles suite/unit before or after: "Suite 100, 500 S 6th St" -> "500", "6633 Laraway Rd Apt B" -> "6633"
 * Returns empty string if no valid house number is found.
 */
export function extractHouseNumber(addressText: string | undefined | null): string {
  if (!addressText) return '';
  const parsed = parseStructuredAddressText(addressText);
  let text = (parsed.cleanAddress || addressText).trim();
  if (!text) return '';

  // 1. Ignore coordinate-only or unavailable location placeholders
  if (/^location\\s*\\(?/i.test(text) || /^lat/i.test(text) || text.toLowerCase() === 'location unavailable') {
    return '';
  }

  // 2. Strip leading stop-sequence indicators like "002 - ", "Stop 002: ", "Stop 2 - ", "#002 - ", "Stop 38 | "
  text = text.replace(/^(?:stop\\s*#?\\d+\\s*[-:–—|]\\s*|#?0+\\d+\\s*[-:–—|]\\s*)/i, '').trim();

  // 3. Strip leading "Unit/Apt/Suite" if it precedes the street address:
  // e.g., "Apt 4B, 123 Foster ville Road" -> "123 Foster ville Road"
  const unitPrefixMatch = text.match(/^(?:apt\\.?|apartment|unit|suite|ste\\.?|room|rm\\.?)\\s*#?[a-z0-9-]+\\s*,\\s*(.+)$/i);
  if (unitPrefixMatch) {
    text = unitPrefixMatch[1].trim();
  }

  // 4. Primary: Match house number at the beginning of address (most common and reliable):
  // e.g. "6589 State Route 90", "123 Foster ville Road", "#123 Foster ville Road", "123A Main St", "1402-B Willow Creek Rd"
  const leadingMatch = text.match(/^(?:#|no\\.?\\s*)?(\\d+[A-Za-z]?(?:[-\\/][A-Za-z0-9]+)?)\\s+([A-Za-z0-9#])/i);
  if (leadingMatch) {
    // Verify it is not a zero-padded stop sequence that survived stripping (like "002")
    if (!/^0+\\d+$/.test(leadingMatch[1])) {
      return leadingMatch[1];
    }
  }

  // 5. Look for house number preceding street name / street suffix indicators:
  // e.g. "500 S 6th St", "Suite 100, 500 S 6th St", "6589 State Route 90"
  const streetWithNumMatch = text.match(/(?:^|[,\\s])(?:#|no\\.?\\s*)?(\\d+[A-Za-z]?(?:[-\\/][A-Za-z0-9]+)?)\\s+(?:[NSEW]\\.?\\s+)?([A-Za-z0-9\\s]+?\\s+(?:st|street|rd|road|ave|avenue|ln|lane|dr|drive|blvd|boulevard|way|ct|court|cir|circle|pl|place|ter|terrace|pkwy|parkway|hwy|highway|route|rt|state\\s*route))\\b/i);
  if (streetWithNumMatch) {
    if (!/^0+\\d+$/.test(streetWithNumMatch[1])) {
      return streetWithNumMatch[1];
    }
  }

  // 6. Generic pattern: any standalone number with optional letter suffix at start of string
  const startNumMatch = text.match(/^(?:#|no\\.?\\s*)?(\\d+[A-Za-z]?(?:[-\\/][A-Za-z0-9]+)?)\\b/i);
  if (startNumMatch && !/^0+\\d+$/.test(startNumMatch[1])) {
    return startNumMatch[1];
  }

  return '';
}

/**
 * Resolves the genuine house number for a RouteStop.
 * Prioritizes the customer's delivery address data (fullAddress, desc, cmt, address).
 * Explicitly rejects stop sequence numbers (such as "002" or orderIndex).
 * Returns '—' as a fallback if no valid house number is identifiable.
 */
export function getStopHouseNumber(stop: RouteStop | null | undefined, currentIndex?: number): string {
  if (!stop) return '—';

  // 1. Try extracting from delivery address sources first (the true source of truth)
  const addressSources = [
    stop.fullAddress,
    stop.desc,
    stop.cmt,
    stop.streetName,
    stop.notes,
  ];

  for (const source of addressSources) {
    if (source) {
      const extracted = extractHouseNumber(source);
      if (extracted) {
        // Double-check candidate is not simply the stop order index
        const isStopOrderIndex =
          (stop.orderIndex && extracted === String(stop.orderIndex)) ||
          (currentIndex !== undefined && extracted === String(currentIndex + 1));
        
        // If the candidate matches stop order index, verify if the source string actually contains a real address with that same number,
        // or if it was just "Stop X" that was picked up.
        if (isStopOrderIndex) {
          const parsed = parseStructuredAddressText(source);
          // If cleanAddress starts with this number (e.g. Stop 38 at "38 Main St"), it's legitimate
          const matchesRealAddress = new RegExp(\`^\${extracted}\\\\b\`, 'i').test(parsed.cleanAddress);
          if (matchesRealAddress && !/^stop\\s*#?\\d+/i.test(source)) {
            return extracted;
          }
          // Otherwise keep looking in other sources
          continue;
        }

        return extracted;
      }
    }
  }

  // 2. If stop.houseNumber was previously set, verify it isn't just a stop sequence number
  if (stop.houseNumber && stop.houseNumber.trim()) {
    const candidate = stop.houseNumber.trim();
    const isStopSequence = 
      /^0+\\d+$/.test(candidate) || // leading zeros e.g. "001", "002"
      (stop.orderIndex && candidate === String(stop.orderIndex)) ||
      (currentIndex !== undefined && candidate === String(currentIndex + 1));

    if (!isStopSequence) {
      return candidate;
    }
  }

  // 3. Check customer name only if it contains a street address pattern
  // e.g. "123 Foster ville Road"
  if (stop.name) {
    const extractedFromName = extractHouseNumber(stop.name);
    if (extractedFromName) {
      const isStopSequence = 
        /^0+\\d+$/.test(extractedFromName) ||
        (stop.orderIndex && extractedFromName === String(stop.orderIndex)) ||
        (currentIndex !== undefined && extractedFromName === String(currentIndex + 1));
      if (!isStopSequence) {
        return extractedFromName;
      }
    }
  }

  // 4. Fallback when address has no identifiable house number
  return '—';
}

/**
 * Extracts a house/building number and street from an address or text string
 */
export function extractAddressComponents(text: string): { houseNumber: string; streetName: string; fullAddress: string } {
  const clean = (text || '').trim();
  if (!clean) {
    return { houseNumber: '', streetName: '', fullAddress: '' };
  }

  // If this text is coordinate-only or location placeholder, return empty house number
  if (/^location\\s*\\(?/i.test(clean) || clean.toLowerCase() === 'location unavailable') {
    return { houseNumber: '', streetName: clean, fullAddress: clean };
  }

  // Parse structured / pipe metadata
  const parsed = parseStructuredAddressText(clean);
  let addressText = parsed.cleanAddress || clean;

  // Strip route/stop ordering prefix if present (e.g., "002 - ", "Stop 2: ", "#002 - ", "Stop 38 | ")
  addressText = addressText.replace(/^(?:stop\\s*#?\\d+\\s*[-:–—|]\\s*|#?0+\\d+\\s*[-:–—|]\\s*)/i, '').trim();

  // Strip leading Unit/Apt/Suite if it precedes the address:
  const unitPrefixMatch = addressText.match(/^(?:apt\\.?|apartment|unit|suite|ste\\.?|room|rm\\.?)\\s*#?[a-z0-9-]+\\s*,\\s*(.+)$/i);
  if (unitPrefixMatch) {
    addressText = unitPrefixMatch[1].trim();
  }

  const houseNumber = extractHouseNumber(addressText);

  let streetName = addressText;
  if (houseNumber) {
    const index = addressText.indexOf(houseNumber);
    if (index !== -1) {
      const afterHouse = addressText.slice(index + houseNumber.length).trim();
      const commaIndex = afterHouse.indexOf(',');
      if (commaIndex !== -1) {
        streetName = afterHouse.slice(0, commaIndex).trim();
      } else {
        streetName = afterHouse;
      }
    }
  }

  // Strip any trailing unit/apt from streetName (e.g. "Laraway Rd Apt A" -> "Laraway Rd")
  const cleanStreet = streetName.replace(/,\\s*(?:apt\\.?|unit|ste\\.?|suite|room|rm\\.?)\\s*#?[a-z0-9-]+$/i, '').trim();

  return {
    houseNumber,
    streetName: cleanStreet || streetName || addressText,
    fullAddress: addressText,
  };
}

/**
 * Validates latitude and longitude values
 */
export function isValidCoordinate(lat: number, lon: number): boolean {
  return (
    !isNaN(lat) &&
    !isNaN(lon) &&
    lat >= -90 &&
    lat <= 90 &&
    lon >= -180 &&
    lon <= 180 &&
    !(lat === 0 && lon === 0)
  );
}

/**
 * Helper to get text content of a tag or namespaced tag safely from XML element
 */
function getTagText(parent: Element | null | undefined, tagName: string): string {
  if (!parent || typeof parent.getElementsByTagName !== 'function') return '';
  // 1. Direct getElementsByTagName (e.g. 'name', 'desc', 'cmt')
  const el = parent.getElementsByTagName(tagName)[0];
  if (el?.textContent && el.textContent.trim()) {
    return el.textContent.trim();
  }

  // 2. Namespaced or child matches (e.g. 'osmand:housenumber', 'addr:housenumber')
  const children = parent.children ? Array.from(parent.children) : [];
  for (const child of children) {
    if (child.localName === tagName || (typeof child.nodeName === 'string' && child.nodeName.endsWith(\`:\${tagName}\`))) {
      if (child.textContent?.trim()) return child.textContent.trim();
    }
    // Inspect inside <extensions>
    const subChildren = child.children ? Array.from(child.children) : [];
    for (const sub of subChildren) {
      if (sub.localName === tagName || (typeof sub.nodeName === 'string' && sub.nodeName.endsWith(\`:\${tagName}\`))) {
        if (sub.textContent?.trim()) return sub.textContent.trim();
      }
    }
  }

  return '';
}

/**
 * Parses raw GPX XML and extracts customer stops in the exact order they appear in the file.
 * Safely handles OsmAnd marker extensions, custom namespaces, and distinguishes route sequence numbers from house numbers.
 */
export function parseGPX(gpxContent: string, routeNameDefault = 'Imported Route'): { stops: RouteStop[]; routeName: string } {
  const cleanedContent = (gpxContent || '').replace(/^\\uFEFF/, '').trim();
  if (!cleanedContent) {
    throw new Error('File content is empty.');
  }

  let xmlDoc: Document;
  if (typeof DOMParser !== 'undefined') {
    const parser = new DOMParser();
    xmlDoc = parser.parseFromString(cleanedContent, 'text/xml');
  } else {
    throw new Error('DOMParser unavailable in current runtime');
  }

  // Check for XML parsererror
  const parserError = xmlDoc.getElementsByTagName('parsererror')[0];
  if (parserError) {
    throw new Error('Invalid GPX/XML format. Please verify the file contains valid route/waypoint XML.');
  }

  // Extract route/metadata name if present
  let routeName = routeNameDefault;
  const metaEl = xmlDoc.getElementsByTagName('metadata')[0];
  const metaName = metaEl ? getTagText(metaEl, 'name') : '';
  const gpxName = getTagText(xmlDoc.documentElement, 'name');
  if (metaName) {
    routeName = metaName;
  } else if (gpxName) {
    routeName = gpxName;
  }

  // Collect points in exact document order across wpt and rtept elements
  // (Prevents omitting route points or namespaced elements when GPX contains both wpt and rtept)
  const getElements = (tag: string): Element[] => {
    const list1 = Array.from(xmlDoc.getElementsByTagName(tag));
    const list2 = xmlDoc.getElementsByTagNameNS ? Array.from(xmlDoc.getElementsByTagNameNS('*', tag)) : [];
    const combined = [...list1];
    for (const el of list2) {
      if (!combined.includes(el)) combined.push(el);
    }
    return combined;
  };

  const wpts = getElements('wpt');
  const rtepts = getElements('rtept');

  let pointElements: Element[] = [];
  if (wpts.length > 0 || rtepts.length > 0) {
    const combined = [...wpts, ...rtepts];
    // Sort in exact document order
    combined.sort((a, b) => {
      const pos = a.compareDocumentPosition(b);
      if (pos & Node.DOCUMENT_POSITION_FOLLOWING) return -1;
      if (pos & Node.DOCUMENT_POSITION_PRECEDING) return 1;
      return 0;
    });
    pointElements = combined;
  } else {
    pointElements = getElements('trkpt');
  }

  if (pointElements.length === 0) {
    throw new Error('No customer waypoints (<wpt> or <rtept>) found in this GPX file.');
  }

  const stops: RouteStop[] = [];

  pointElements.forEach((pt, index) => {
    // 1. Coordinates parsing & validation
    const latStr = pt.getAttribute('lat');
    const lonStr = pt.getAttribute('lon');
    const parsedLat = latStr ? parseFloat(latStr) : NaN;
    const parsedLon = lonStr ? parseFloat(lonStr) : NaN;

    const hasValidCoords = isValidCoordinate(parsedLat, parsedLon);
    const finalLat = hasValidCoords ? parsedLat : 0;
    const finalLon = hasValidCoords ? parsedLon : 0;

    // 2. Text fields parsing
    const rawName = getTagText(pt, 'name');
    const rawDesc = getTagText(pt, 'desc');
    const rawCmt = getTagText(pt, 'cmt');
    const rawAddress = getTagText(pt, 'address');
    const osmandHouseNum = getTagText(pt, 'housenumber');
    const osmandStreet = getTagText(pt, 'street');

    // 3. Disambiguate customer name, stop sequence, and delivery address:
    let customerName = rawName || \`Customer #\${index + 1}\`;
    let addressCandidate = rawAddress || rawDesc || rawCmt;
    let potentialAddressFromName = '';

    // Check if rawDesc, rawName, or rawCmt has structured metadata:
    // e.g. "Stop 38 | Customer: Randi Hickman II | Address: 6589 State Route 90"
    const structuredDesc = parseStructuredAddressText(rawDesc);
    const structuredName = parseStructuredAddressText(rawName);
    const structuredCmt = parseStructuredAddressText(rawCmt);

    if (structuredDesc.extractedName && (!rawName || rawName.includes('|') || /^(?:stop\\s*#?\\d+|customer)/i.test(rawName))) {
      customerName = structuredDesc.extractedName;
    } else if (structuredName.extractedName) {
      customerName = structuredName.extractedName;
    }

    if (structuredDesc.cleanAddress && /^\\d+[A-Za-z]?\\s+[A-Za-z]/.test(structuredDesc.cleanAddress)) {
      addressCandidate = structuredDesc.cleanAddress;
    } else if (structuredName.cleanAddress && /^\\d+[A-Za-z]?\\s+[A-Za-z]/.test(structuredName.cleanAddress)) {
      addressCandidate = structuredName.cleanAddress;
    } else if (structuredCmt.cleanAddress && /^\\d+[A-Za-z]?\\s+[A-Za-z]/.test(structuredCmt.cleanAddress)) {
      addressCandidate = structuredCmt.cleanAddress;
    }

    // If rawName has a sequence prefix like "002 - Marcus Vance" or "002 - 123 Foster ville Road":
    if (rawName && (rawName.includes(' - ') || rawName.includes(' – '))) {
      const parts = rawName.split(/\\s*[-–]\\s*/);
      if (parts.length >= 2) {
        // First part is a stop sequence (e.g. "001", "002", "Stop 1", "#2"):
        if (/^(?:stop\\s*)?#?\\d+$/i.test(parts[0].trim())) {
          customerName = parts.slice(1).join(' - ').trim();
          // If the remaining part is an address (e.g. "123 Foster ville Road")
          if (/^\\d+[A-Za-z]?\\s+[A-Za-z]/.test(customerName)) {
            potentialAddressFromName = customerName;
          }
        } else if (/^(?:stop\\s*)?#?\\d+$/i.test(parts[parts.length - 1].trim())) {
          // Trailing stop sequence e.g. "Marcus Vance - 002"
          customerName = parts.slice(0, parts.length - 1).join(' - ').trim();
        }
      }
    } else if (rawName && /^#?0*\\d+$/.test(rawName.trim())) {
      // Name is just a sequence number e.g. "002"
      const num = parseInt(rawName.trim().replace('#', ''), 10);
      customerName = \`Customer #\${num || (index + 1)}\`;
    }

    if (!addressCandidate && potentialAddressFromName) {
      addressCandidate = potentialAddressFromName;
    }

    // Fallback if no addressCandidate exists
    if (!addressCandidate) {
      addressCandidate = hasValidCoords
        ? \`Location (\${finalLat.toFixed(5)}, \${finalLon.toFixed(5)})\`
        : 'Location unavailable';
    }

    // 4. Extract genuine house number and street from the delivery address:
    const { houseNumber: parsedHouseNumber, streetName: parsedStreet, fullAddress } = extractAddressComponents(addressCandidate);
    
    // Explicit OsmAnd housenumber tag check (reject if it's a zero-padded stop sequence)
    let finalHouseNumber = parsedHouseNumber;
    if (!finalHouseNumber && osmandHouseNum && !/^0+\\d+$/.test(osmandHouseNum.trim())) {
      finalHouseNumber = osmandHouseNum.trim();
    }

    // If still not found and customerName has a street address pattern
    if (!finalHouseNumber && customerName) {
      const nameExtracted = extractAddressComponents(customerName);
      if (nameExtracted.houseNumber && !/^0+\\d+$/.test(nameExtracted.houseNumber)) {
        finalHouseNumber = nameExtracted.houseNumber;
      }
    }

    const finalStreetName = osmandStreet || parsedStreet || '';

    stops.push({
      id: \`stop-\${index + 1}-\${Date.now().toString(36)}-\${Math.random().toString(36).substring(2, 6)}\`,
      orderIndex: index + 1,
      name: customerName,
      houseNumber: finalHouseNumber,
      fullAddress: fullAddress,
      streetName: finalStreetName,
      lat: finalLat,
      lon: finalLon,
      desc: rawDesc || undefined,
      cmt: rawCmt || undefined,
      status: 'pending',
    });
  });

  return { stops, routeName };
}

/**
 * Generates valid GPX XML from RouteStop array (for export/OsmAnd companion download)
 */
export function exportToGPX(stops: RouteStop[], routeName = 'Customer Route'): string {
  const gpxHeader = \`<?xml version="1.0" encoding="UTF-8"?>
<gpx version="1.1" creator="OsmAnd Route Companion" xmlns="http://www.topografix.com/GPX/1/1" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.topografix.com/GPX/1/1 http://www.topografix.com/GPX/1/1/gpx.xsd">
  <metadata>
    <name>\${escapeXml(routeName)}</name>
    <desc>Customer route stops in sequential order</desc>
    <time>\${new Date().toISOString()}</time>
  </metadata>
\`;

  const waypoints = stops.map((stop) => {
    return \`  <wpt lat="\${stop.lat}" lon="\${stop.lon}">
    <name>\${escapeXml(stop.name)}</name>
    <desc>\${escapeXml(stop.fullAddress)}</desc>
    <cmt>\${escapeXml(\`House #\${stop.houseNumber || 'N/A'} - Status: \${stop.status}\`)}</cmt>
  </wpt>\`;
  }).join('\\n');

  const gpxFooter = \`\\n</gpx>\`;
  return gpxHeader + waypoints + gpxFooter;
}

function escapeXml(unsafe: string): string {
  return (unsafe || '').replace(/[<>&'"]/g, (c) => {
    switch (c) {
      case '<': return '&lt;';
      case '>': return '&gt;';
      case '&': return '&amp;';
      case '\\'': return '&apos;';
      case '"': return '&quot;';
      default: return c;
    }
  });
}
`,It=`/**
 * Turn-by-Turn Navigation & Real-time GPS Service
 * Uses device GPS hardware and OpenStreetMap (OSRM) routing engine
 * Supports legal maneuver restrictions, U-turns, block rerouting, and off-route polyline tracking.
 */

export interface NavManeuver {
  type: string; // 'turn', 'depart', 'arrive', 'continue', 'fork', 'roundabout', etc.
  modifier?: string; // 'left', 'right', 'slight left', 'slight right', 'sharp left', 'sharp right', 'straight', 'uturn'
  instruction: string; // "Turn right onto Maple Grove Ave" or "Turn around as soon as possible."
  streetName: string;
  distanceMeters: number;
  location: [number, number]; // [lon, lat]
}

export interface NavigationState {
  currentManeuver: NavManeuver | null;
  distanceToManeuverMeters: number;
  totalDistanceToDestinationMeters: number;
  estimatedTimeSeconds: number;
  gpsActive: boolean;
  gpsAccuracyMeters: number | null;
  currentSpeedMph: number | null;
  currentHeading: number | null;
  lastUpdated: number;
  source: 'osm-live' | 'gps-direct' | 'simulated';
  error: string | null;
}

/**
 * Calculates distance in meters between two lat/lon points using the Haversine formula
 */
export function calculateDistanceMeters(lat1: number, lon1: number, lat2: number, lon2: number): number {
  if (
    isNaN(lat1) || isNaN(lon1) || isNaN(lat2) || isNaN(lon2) ||
    (lat1 === 0 && lon1 === 0) || (lat2 === 0 && lon2 === 0)
  ) {
    return Infinity;
  }
  const R = 6371000; // Earth's radius in meters
  const dLat = (lat2 - lat1) * (Math.PI / 180);
  const dLon = (lon2 - lon1) * (Math.PI / 180);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * (Math.PI / 180)) *
      Math.cos(lat2 * (Math.PI / 180)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

/**
 * Calculates distance in meters from a point to the nearest line segment in a GeoJSON polyline [lon, lat][]
 * Used for detecting off-route deviations when a driver misses a turn or leaves the planned road.
 */
export function calculateDistanceToPolylineMeters(
  pointLat: number,
  pointLon: number,
  coordinates: [number, number][]
): number {
  if (!coordinates || coordinates.length < 2) return Infinity;

  const mPerDegLat = 111132.92;
  const mPerDegLon = 111412.84 * Math.cos((pointLat * Math.PI) / 180);

  let minDistance = Infinity;

  for (let i = 0; i < coordinates.length - 1; i++) {
    const [lon1, lat1] = coordinates[i];
    const [lon2, lat2] = coordinates[i + 1];

    const px = (pointLon - lon1) * mPerDegLon;
    const py = (pointLat - lat1) * mPerDegLat;
    const sx = (lon2 - lon1) * mPerDegLon;
    const sy = (lat2 - lat1) * mPerDegLat;
    const lenSq = sx * sx + sy * sy;

    let d: number;
    if (lenSq === 0) {
      d = Math.sqrt(px * px + py * py);
    } else {
      const t = Math.max(0, Math.min(1, (px * sx + py * sy) / lenSq));
      const projX = t * sx;
      const projY = t * sy;
      const dx = px - projX;
      const dy = py - projY;
      d = Math.sqrt(dx * dx + dy * dy);
    }

    if (d < minDistance) {
      minDistance = d;
    }
  }

  return minDistance;
}

/**
 * Calculates remaining driving route distance in meters from the user's current GPS position
 * to the destination along the planned route coordinates polyline.
 * Continuously counts down as the vehicle advances along each road segment.
 */
export function calculateRemainingRouteDistanceMeters(
  pointLat: number,
  pointLon: number,
  coordinates: [number, number][],
  minSegmentIndex = 0
): { remainingMeters: number; closestSegmentIndex: number } {
  if (!coordinates || coordinates.length === 0) {
    return { remainingMeters: 0, closestSegmentIndex: 0 };
  }
  if (coordinates.length === 1) {
    const dist = calculateDistanceMeters(pointLat, pointLon, coordinates[0][1], coordinates[0][0]);
    return { remainingMeters: dist, closestSegmentIndex: 0 };
  }

  const mPerDegLat = 111132.92;
  const mPerDegLon = 111412.84 * Math.cos((pointLat * Math.PI) / 180);

  let bestSegmentIndex = Math.max(0, Math.min(minSegmentIndex, coordinates.length - 2));
  let minPerpDistanceSq = Infinity;
  let bestT = 0;

  // Search forward from previous segment progress (with a small look-back window for GPS jitter)
  const startIndex = Math.max(0, minSegmentIndex - 2);
  for (let i = startIndex; i < coordinates.length - 1; i++) {
    const [lon1, lat1] = coordinates[i];
    const [lon2, lat2] = coordinates[i + 1];

    const px = (pointLon - lon1) * mPerDegLon;
    const py = (pointLat - lat1) * mPerDegLat;
    const sx = (lon2 - lon1) * mPerDegLon;
    const sy = (lat2 - lat1) * mPerDegLat;
    const lenSq = sx * sx + sy * sy;

    if (lenSq === 0) continue;

    const t = Math.max(0, Math.min(1, (px * sx + py * sy) / lenSq));
    const projX = t * sx;
    const projY = t * sy;
    const dx = px - projX;
    const dy = py - projY;
    const distSq = dx * dx + dy * dy;

    if (distSq < minPerpDistanceSq) {
      minPerpDistanceSq = distSq;
      bestSegmentIndex = i;
      bestT = t;
    }
  }

  // 1. Remaining length on current segment from projected vehicle position to segment end
  const [bLon1, bLat1] = coordinates[bestSegmentIndex];
  const [bLon2, bLat2] = coordinates[bestSegmentIndex + 1];
  const currentSegDist = calculateDistanceMeters(bLat1, bLon1, bLat2, bLon2);
  let remainingMeters = Math.max(0, (1 - bestT) * currentSegDist);

  // 2. Sum length of all subsequent segments along the route
  for (let j = bestSegmentIndex + 1; j < coordinates.length - 1; j++) {
    remainingMeters += calculateDistanceMeters(
      coordinates[j][1],
      coordinates[j][0],
      coordinates[j + 1][1],
      coordinates[j + 1][0]
    );
  }

  return {
    remainingMeters: Math.max(0, Math.round(remainingMeters)),
    closestSegmentIndex: bestSegmentIndex,
  };
}

/**
 * Calculates compass bearing from point 1 to point 2 (0 - 360 degrees)
 */
export function calculateBearing(lat1: number, lon1: number, lat2: number, lon2: number): number {
  const y = Math.sin((lon2 - lon1) * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180));
  const x =
    Math.cos(lat1 * (Math.PI / 180)) * Math.sin(lat2 * (Math.PI / 180)) -
    Math.sin(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) * Math.cos((lon2 - lon1) * (Math.PI / 180));
  const brng = (Math.atan2(y, x) * 180) / Math.PI;
  return (brng + 360) % 360;
}

/**
 * Convert bearing degrees to cardinal direction name
 */
export function bearingToDirection(bearing: number): string {
  const directions = ['North', 'Northeast', 'East', 'Southeast', 'South', 'Southwest', 'West', 'Northwest'];
  const index = Math.round(bearing / 45) % 8;
  return directions[index];
}

/**
 * Format distance in feet and miles (or meters/km) for rapid driver glanceability
 */
export function formatDistance(meters: number, useMetric = false): string {
  if (isNaN(meters) || meters < 0) return '0 ft';

  if (useMetric) {
    if (meters < 1000) {
      return \`\${Math.round(meters)} m\`;
    }
    return \`\${(meters / 1000).toFixed(1)} km\`;
  }

  // Imperial (US) standard for in-vehicle navigation
  const feet = meters * 3.28084;
  if (feet < 1000) {
    if (feet > 200) {
      return \`\${Math.round(feet / 50) * 50} ft\`;
    }
    return \`\${Math.max(10, Math.round(feet / 10) * 10)} ft\`;
  }

  const miles = feet / 5280;
  if (miles < 10) {
    return \`\${miles.toFixed(1)} mi\`;
  }
  return \`\${Math.round(miles)} mi\`;
}

/**
 * Format estimated travel duration in minutes and hours
 */
export function formatDuration(seconds: number): string {
  if (isNaN(seconds) || seconds <= 0) return '1 min';
  const mins = Math.round(seconds / 60);
  if (mins < 60) {
    return \`\${Math.max(1, mins)} min\`;
  }
  const hours = Math.floor(mins / 60);
  const remMins = mins % 60;
  return remMins > 0 ? \`\${hours}h \${remMins}m\` : \`\${hours}h\`;
}

/**
 * Generates natural driver maneuver instructions from OSRM step.
 * Accurately formats U-turn instructions without fabricating them.
 */
export function buildInstructionText(type: string, modifier: string | undefined, streetName: string, destinationName: string): string {
  const street = streetName && streetName.trim() ? streetName.trim() : '';
  const mod = (modifier || '').toLowerCase();
  const t = (type || '').toLowerCase();

  if (t === 'arrive') {
    return destinationName ? \`Arrive at \${destinationName}\` : 'Arrive at destination';
  }
  if (t === 'depart') {
    return street ? \`Head out onto \${street}\` : 'Head toward destination';
  }
  if (t === 'merge') {
    return mod.includes('left')
      ? (street ? \`Merge left onto \${street}\` : 'Merge left')
      : (street ? \`Merge right onto \${street}\` : 'Merge right');
  }
  if (t === 'on ramp' || t === 'off ramp' || t === 'ramp') {
    return street ? \`Take ramp onto \${street}\` : 'Take ramp';
  }
  if (t === 'fork') {
    return mod.includes('left')
      ? (street ? \`Keep left at fork onto \${street}\` : 'Keep left at fork')
      : (street ? \`Keep right at fork onto \${street}\` : 'Keep right at fork');
  }
  if (t === 'roundabout' || t === 'rotary') {
    return street ? \`Enter roundabout toward \${street}\` : 'Enter roundabout';
  }
  if (t === 'end of road') {
    return mod.includes('left')
      ? (street ? \`Turn left at end onto \${street}\` : 'Turn left at end of road')
      : (street ? \`Turn right at end onto \${street}\` : 'Turn right at end of road');
  }

  // Turnaround maneuvers evaluated by the routing engine
  // Preferred exact wording: "Turn around as soon as possible."
  if (
    mod.includes('uturn') ||
    mod === 'uturn' ||
    mod.includes('turnaround') ||
    mod.includes('turn around') ||
    t === 'turnaround'
  ) {
    return 'Turn around as soon as possible.';
  }

  switch (mod) {
    case 'left':
      return street ? \`Turn left onto \${street}\` : 'Turn left';
    case 'right':
      return street ? \`Turn right onto \${street}\` : 'Turn right';
    case 'slight left':
      return street ? \`Bear slightly left onto \${street}\` : 'Bear slightly left';
    case 'slight right':
      return street ? \`Bear slightly right onto \${street}\` : 'Bear slightly right';
    case 'sharp left':
      return street ? \`Make a sharp left onto \${street}\` : 'Sharp left';
    case 'sharp right':
      return street ? \`Make a sharp right onto \${street}\` : 'Sharp right';
    case 'straight':
      return street ? \`Continue straight on \${street}\` : 'Continue straight';
    default:
      if (t === 'continue' || t === 'new name') {
        return street ? \`Continue onto \${street}\` : 'Continue straight';
      }
      return street ? \`Proceed onto \${street}\` : 'Proceed along route';
  }
}

/**
 * Normalizes street names for reliable comparison (e.g., 'Turnpike Rd' vs 'Turnpike Road')
 */
export function normalizeStreetName(s: string | undefined | null): string {
  if (!s) return '';
  return s
    .toLowerCase()
    .replace(/\\b(street|st\\.?)\\b/g, 'st')
    .replace(/\\b(road|rd\\.?)\\b/g, 'rd')
    .replace(/\\b(avenue|ave\\.?)\\b/g, 'ave')
    .replace(/\\b(lane|ln\\.?)\\b/g, 'ln')
    .replace(/\\b(drive|dr\\.?)\\b/g, 'dr')
    .replace(/\\b(court|ct\\.?)\\b/g, 'ct')
    .replace(/\\b(boulevard|blvd\\.?)\\b/g, 'blvd')
    .replace(/\\b(state\\s*route|route|rt\\.?)\\b/g, 'rt')
    .replace(/\\b(place|pl\\.?)\\b/g, 'pl')
    .replace(/\\b(highway|hwy\\.?)\\b/g, 'hwy')
    .replace(/[^a-z0-9]/g, ' ')
    .replace(/\\s+/g, ' ')
    .trim();
}

/**
 * Checks whether two street name strings refer to the same road
 */
export function roadNamesMatch(name1: string | undefined | null, name2: string | undefined | null): boolean {
  const n1 = normalizeStreetName(name1);
  const n2 = normalizeStreetName(name2);
  if (!n1 || !n2) return false;
  return n1 === n2 || n1.includes(n2) || n2.includes(n1);
}

/**
 * Resolves the optimal curbside approach location when a property is near an intersection.
 * If the property can be served from the road currently being traveled or from the customer's
 * primary street address, prefers that road approach over turning onto a side street or track.
 */
export async function resolvePreferredApproach(
  destLat: number,
  destLon: number,
  preferredStreet?: string,
  currentTravelStreet?: string
): Promise<[number, number]> {
  const targetStreet = preferredStreet || currentTravelStreet;
  if (!targetStreet || !targetStreet.trim()) {
    return [destLon, destLat];
  }

  try {
    const nearestUrl = \`https://router.project-osrm.org/nearest/v1/driving/\${destLon},\${destLat}?number=10\`;
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 3500);
    const res = await fetch(nearestUrl, { signal: controller.signal });
    clearTimeout(timeoutId);
    if (!res.ok) return [destLon, destLat];

    const data = await res.json();
    if (!data.waypoints || data.waypoints.length < 2) {
      return [destLon, destLat];
    }

    const firstWaypoint = data.waypoints[0];
    // If the default closest snapped road already matches the target street, keep standard snapping
    if (firstWaypoint && firstWaypoint.name && roadNamesMatch(firstWaypoint.name, targetStreet)) {
      return [destLon, destLat];
    }

    // Look for a nearby segment that matches the current road or customer street.
    // Limit to candidates within a reasonable driveway/frontage setback (< 350m)
    for (const wp of data.waypoints) {
      if (wp.name && wp.location && wp.distance < 350) {
        if (roadNamesMatch(wp.name, targetStreet) || (currentTravelStreet && roadNamesMatch(wp.name, currentTravelStreet))) {
          if (import.meta.env?.DEV) {
            console.log(
              \`[Approach Selection] Preferring current/primary road '\${wp.name}' at [\${wp.location[0]}, \${wp.location[1]}] over side road '\${firstWaypoint?.name || 'unnamed'}' for \${targetStreet}\`
            );
          }
          return wp.location as [number, number];
        }
      }
    }
  } catch (e) {
    // Graceful fallback to raw coordinates
  }

  return [destLon, destLat];
}

/**
 * Fetches real turn-by-turn driving route steps from OpenStreetMap OSRM routing engine.
 * Supports start bearings for moving vehicle travel direction to ensure legal U-turns
 * vs routing around blocks.
 * Supports intersection approach preferences to keep vehicle on the current road for corner properties.
 */
export async function fetchOsmRoute(
  startLat: number,
  startLon: number,
  destLat: number,
  destLon: number,
  destName: string,
  startBearing?: number | null,
  destStreetName?: string,
  currentTravelStreetName?: string
): Promise<{
  maneuvers: NavManeuver[];
  totalDistance: number;
  totalDuration: number;
  coordinates: [number, number][];
  hasUturn: boolean;
}> {
  // Validate coordinates
  if (
    isNaN(startLat) || isNaN(startLon) || isNaN(destLat) || isNaN(destLon) ||
    startLat < -90 || startLat > 90 || destLat < -90 || destLat > 90 ||
    startLon < -180 || startLon > 180 || destLon < -180 || destLon > 180 ||
    (startLat === 0 && startLon === 0) || (destLat === 0 && destLon === 0)
  ) {
    throw new Error(\`Invalid coordinates for routing: start(\${startLat}, \${startLon}), dest(\${destLat}, \${destLon})\`);
  }

  // Handle immediate arrival for co-located points (< 5m apart, e.g. shared addresses like 6633 Laraway Rd Apt A & Apt B)
  const directDist = calculateDistanceMeters(startLat, startLon, destLat, destLon);
  if (directDist < 5) {
    return {
      maneuvers: [
        {
          type: 'arrive',
          instruction: destName ? \`Arrive at \${destName}\` : 'Arrive at destination',
          streetName: '',
          distanceMeters: Math.round(directDist),
          location: [destLon, destLat],
        },
      ],
      totalDistance: Math.round(directDist),
      totalDuration: 0,
      coordinates: [
        [startLon, startLat],
        [destLon, destLat],
      ],
      hasUturn: false,
    };
  }

  // For properties at or near intersections, prefer the approach from the road currently being traveled
  // or the customer's street address so the vehicle does not turn onto a side road unnecessarily.
  let effectiveDestLon = destLon;
  let effectiveDestLat = destLat;
  if (destStreetName || currentTravelStreetName) {
    const preferredLoc = await resolvePreferredApproach(
      destLat,
      destLon,
      destStreetName,
      currentTravelStreetName
    );
    effectiveDestLon = preferredLoc[0];
    effectiveDestLat = preferredLoc[1];
  }

  const sanitizedBearing =
    typeof startBearing === 'number' && !isNaN(startBearing)
      ? Math.round(((startBearing % 360) + 360) % 360)
      : null;

  // Base OSRM URL with turn steps, detailed geometries, and continue_straight=false for realistic turnaround maneuvers
  const baseUrl = \`https://router.project-osrm.org/route/v1/driving/\${startLon},\${startLat};\${effectiveDestLon},\${effectiveDestLat}?steps=true&overview=full&geometries=geojson&continue_straight=false\`;

  // Helper to fetch and parse with detailed error diagnostics
  const executeQuery = async (queryUrl: string) => {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 7000);
    try {
      const response = await fetch(queryUrl, { signal: controller.signal });
      clearTimeout(timeoutId);
      if (!response.ok) {
        let serverErrorMsg = '';
        try {
          const errorJson = await response.json();
          serverErrorMsg = errorJson.message || errorJson.code || '';
        } catch {
          try {
            serverErrorMsg = await response.text();
          } catch {}
        }

        if (import.meta.env?.DEV) {
          console.error(\`[OSRM Routing Error] HTTP \${response.status}: \${serverErrorMsg} (URL: \${queryUrl})\`);
        }

        throw new Error(\`Routing server HTTP \${response.status}\${serverErrorMsg ? \`: \${serverErrorMsg}\` : ''}\`);
      }
      const data = await response.json();
      return data;
    } catch (err: any) {
      clearTimeout(timeoutId);
      throw err;
    }
  };

  // 1. Fetch natural, unconstrained road-network route
  const unconstrainedData = await executeQuery(baseUrl);
  if (unconstrainedData.code !== 'Ok' || !unconstrainedData.routes || unconstrainedData.routes.length === 0) {
    throw new Error('No driving route found between coordinates');
  }

  let data = unconstrainedData;
  let isTurnaroundNeeded = false;

  // 2. Check road network and forward travel to determine if genuine turnaround is required
  if (sanitizedBearing !== null) {
    const uRoute = unconstrainedData.routes[0];
    const uDist = uRoute.distance || 0;
    const uCoords = uRoute.geometry?.coordinates || [];
    const uSteps = uRoute.legs?.[0]?.steps || [];

    // Check if unconstrained route already explicitly includes a U-turn step from OSRM
    const uHasExplicitUturn = uSteps.some((s: any) =>
      (s.maneuver?.modifier || '').toLowerCase().includes('uturn') ||
      (s.maneuver?.type || '').toLowerCase() === 'turnaround'
    );

    let bData: any = null;
    let bHasRoute = false;
    let bDist = Infinity;

    try {
      const bearingUrl = \`\${baseUrl}&bearings=\${sanitizedBearing},60;\`;
      const bearingResult = await executeQuery(bearingUrl);
      if (bearingResult && bearingResult.code === 'Ok' && bearingResult.routes && bearingResult.routes.length > 0) {
        bData = bearingResult;
        bHasRoute = true;
        bDist = bearingResult.routes[0].distance || Infinity;
      }
    } catch (err) {
      // Bearing route unavailable (e.g. one-way or dead end)
    }

    // Departure geometry from customer
    let angleDiff = 0;
    if (uCoords && uCoords.length >= 2) {
      const [lon0, lat0] = uCoords[0];
      const [lon1, lat1] = uCoords[1];
      const roadDepartHeading = calculateBearing(lat0, lon0, lat1, lon1);
      angleDiff = Math.abs(sanitizedBearing - roadDepartHeading) % 360;
      if (angleDiff > 180) angleDiff = 360 - angleDiff;
    }

    // A genuine turnaround is required if and only if:
    // 1. OSRM explicitly returns a U-turn step, OR
    // 2. Continuing forward along the road is impossible or forces a massive detour (> 500m AND > 50% longer than backtracking),
    //    AND the unconstrained road departure heads in the reciprocal direction along the road (angleDiff >= 135°).
    const isForwardDetourMassive = (!bHasRoute) || (bDist > uDist + 500 && bDist > uDist * 1.5);
    const isDepartReversing = angleDiff >= 135;

    if (uHasExplicitUturn || (isForwardDetourMassive && isDepartReversing)) {
      isTurnaroundNeeded = true;
      data = unconstrainedData;
    } else if (bHasRoute) {
      // Normal forward road travel: use bearing-constrained forward route
      isTurnaroundNeeded = false;
      data = bData;
    } else {
      isTurnaroundNeeded = false;
      data = unconstrainedData;
    }
  }

  const route = data.routes[0];
  const leg = route.legs?.[0];
  const steps = leg?.steps || [];
  const coordinates: [number, number][] = route.geometry?.coordinates || [];

  let hasUturn = false;

  const maneuvers: NavManeuver[] = steps.map((s: any) => {
    const type = s.maneuver?.type || 'turn';
    const modifier = s.maneuver?.modifier;
    const streetName = s.name || '';
    const instruction = buildInstructionText(type, modifier, streetName, destName);
    const location: [number, number] = s.maneuver?.location || [destLon, destLat];

    if (modifier && modifier.toLowerCase().includes('uturn')) {
      hasUturn = true;
    }

    return {
      type,
      modifier,
      instruction,
      streetName,
      distanceMeters: s.distance || 0,
      location,
    };
  });

  // If road geometry genuinely requires turning around on the current road to head in reverse direction,
  // insert a clean turnaround maneuver at the start of the route
  if (isTurnaroundNeeded) {
    const firstM = maneuvers[0];
    const isFirstTurnaround = firstM && (
      (firstM.modifier || '').toLowerCase().includes('uturn') ||
      (firstM.type || '').toLowerCase() === 'turnaround' ||
      firstM.instruction.includes('Turn around as soon as possible.')
    );

    if (!isFirstTurnaround) {
      const turnStreet = (firstM?.streetName) || currentTravelStreetName || destStreetName || '';
      maneuvers.unshift({
        type: 'turnaround',
        modifier: 'uturn',
        instruction: 'Turn around as soon as possible.',
        streetName: turnStreet,
        distanceMeters: 0,
        location: [startLon, startLat],
      });
      hasUturn = true;
    }
  }

  return {
    maneuvers,
    totalDistance: route.distance || 0,
    totalDuration: route.duration || 0,
    coordinates,
    hasUturn,
  };
}
`,Lt=`export interface SampleRoutePreset {
  id: string;
  title: string;
  description: string;
  stopCount: number;
  gpxXml: string;
}

export const SAMPLE_GPX_ROUTES: SampleRoutePreset[] = [
  {
    id: 'residential-route-springfield',
    title: 'North Springfield Residential Route (20 Stops)',
    description: 'Sequenced customer stops for residential service with distinct house numbers & notes',
    stopCount: 20,
    gpxXml: \`<?xml version="1.0" encoding="UTF-8"?>
<gpx version="1.1" creator="OsmAnd Route Companion" xmlns="http://www.topografix.com/GPX/1/1">
  <metadata>
    <name>North Springfield Residential Route</name>
    <desc>Customer collection and service route in sequence</desc>
  </metadata>
  <wpt lat="39.7990" lon="-89.6438">
    <name>Eleanor &amp; Frank Davies</name>
    <desc>104 Maple Grove Ave, Springfield, IL 62702</desc>
    <cmt>Side gate accessible, watch for golden retriever</cmt>
  </wpt>
  <wpt lat="39.8005" lon="-89.6450">
    <name>Marcus Vance</name>
    <desc>112 Maple Grove Ave, Springfield, IL 62702</desc>
    <cmt>Bin beside garage, ring bell if blocked</cmt>
  </wpt>
  <wpt lat="39.8018" lon="-89.6462">
    <name>Sophia Ramirez</name>
    <desc>128 Maple Grove Ave, Springfield, IL 62702</desc>
    <cmt>Curbside pickup requested</cmt>
  </wpt>
  <wpt lat="39.8035" lon="-89.6480">
    <name>Dr. Arthur Pendelton</name>
    <desc>215 Willow Creek Rd, Springfield, IL 62702</desc>
    <cmt>Long gravel driveway, turn around at circle</cmt>
  </wpt>
  <wpt lat="39.8049" lon="-89.6495">
    <name>Elena Rostova</name>
    <desc>229 Willow Creek Rd, Springfield, IL 62702</desc>
    <cmt>House number on stone mailbox</cmt>
  </wpt>
  <wpt lat="39.8062" lon="-89.6512">
    <name>Jackson &amp; Maya Miller</name>
    <desc>241 Willow Creek Rd, Springfield, IL 62702</desc>
    <cmt>Yellow house on corner</cmt>
  </wpt>
  <wpt lat="39.8080" lon="-89.6530">
    <name>Robert K. Sterling</name>
    <desc>304 Sycamore Lane, Springfield, IL 62702</desc>
    <cmt>Back alley approach preferred</cmt>
  </wpt>
  <wpt lat="39.8095" lon="-89.6548">
    <name>Hannah &amp; Liam Chen</name>
    <desc>318 Sycamore Lane, Springfield, IL 62702</desc>
    <cmt>Ring doorbell after stop</cmt>
  </wpt>
  <wpt lat="39.8110" lon="-89.6565">
    <name>George Henderson</name>
    <desc>330 Sycamore Lane, Springfield, IL 62702</desc>
    <cmt>Code for gate #4421</cmt>
  </wpt>
  <wpt lat="39.8125" lon="-89.6582">
    <name>Patricia &amp; Carl Kowalski</name>
    <desc>402 Birchwood Court, Springfield, IL 62702</desc>
    <cmt>Cul-de-sac house at end on left</cmt>
  </wpt>
  <wpt lat="39.8138" lon="-89.6601">
    <name>Devon Washington</name>
    <desc>415 Birchwood Court, Springfield, IL 62702</desc>
    <cmt>Leave invoice in mailbox slot</cmt>
  </wpt>
  <wpt lat="39.8152" lon="-89.6618">
    <name>Chloe &amp; Noah Bennett</name>
    <desc>520 Cedar Crest Way, Springfield, IL 62702</desc>
    <cmt>Red brick house with circular portico</cmt>
  </wpt>
  <wpt lat="39.8168" lon="-89.6635">
    <name>Samuel Ortiz</name>
    <desc>534 Cedar Crest Way, Springfield, IL 62702</desc>
    <cmt>Customer works from home, quiet approach</cmt>
  </wpt>
  <wpt lat="39.8182" lon="-89.6652">
    <name>Miriam Goldstein</name>
    <desc>601 Pine Needle Drive, Springfield, IL 62702</desc>
    <cmt>Keycard box next to service door</cmt>
  </wpt>
  <wpt lat="39.8198" lon="-89.6670">
    <name>Thomas &amp; Valerie Reed</name>
    <desc>615 Pine Needle Drive, Springfield, IL 62702</desc>
    <cmt>House number illuminated on porch column</cmt>
  </wpt>
  <wpt lat="39.8215" lon="-89.6690">
    <name>Amina Al-Mansoor</name>
    <desc>722 Juniper Park Blvd, Springfield, IL 62702</desc>
    <cmt>Corner lot with white vinyl fence</cmt>
  </wpt>
  <wpt lat="39.8230" lon="-89.6708">
    <name>Kenneth O'Connor</name>
    <desc>736 Juniper Park Blvd, Springfield, IL 62702</desc>
    <cmt>Please close latch securely</cmt>
  </wpt>
  <wpt lat="39.8248" lon="-89.6725">
    <name>Zoe &amp; Lucas Taylor</name>
    <desc>802 Hawthorn Ridge, Springfield, IL 62702</desc>
    <cmt>Call before arrival if gate locked</cmt>
  </wpt>
  <wpt lat="39.8265" lon="-89.6742">
    <name>Geraldine Brooks</name>
    <desc>818 Hawthorn Ridge, Springfield, IL 62702</desc>
    <cmt>Elderly resident, curbside staging</cmt>
  </wpt>
  <wpt lat="39.8280" lon="-89.6760">
    <name>Victor &amp; Beatrice Moreno</name>
    <desc>834 Hawthorn Ridge, Springfield, IL 62702</desc>
    <cmt>Final customer on morning route block</cmt>
  </wpt>
</gpx>\`,
  },
  {
    id: 'commercial-route-metro',
    title: 'Metro Commercial Route (10 Stops)',
    description: 'Commercial facilities, clinics, and businesses with suite numbers',
    stopCount: 10,
    gpxXml: \`<?xml version="1.0" encoding="UTF-8"?>
<gpx version="1.1" creator="OsmAnd Route Companion" xmlns="http://www.topografix.com/GPX/1/1">
  <metadata>
    <name>Metro Commercial Route</name>
    <desc>Commercial client sequence</desc>
  </metadata>
  <wpt lat="39.7810" lon="-89.6500">
    <name>Apex Medical Labs - Suite 100</name>
    <desc>500 S 6th St, Springfield, IL 62701</desc>
    <cmt>Rear loading dock entrance, press buzzer B</cmt>
  </wpt>
  <wpt lat="39.7835" lon="-89.6520">
    <name>Capitol City Bakery</name>
    <desc>412 E Monroe St, Springfield, IL 62701</desc>
    <cmt>Service alley between 4th &amp; 5th</cmt>
  </wpt>
  <wpt lat="39.7860" lon="-89.6540">
    <name>Heritage Law Offices</name>
    <desc>620 E Adams St, Suite 300, Springfield, IL 62701</desc>
    <cmt>Elevator access to 3rd floor</cmt>
  </wpt>
  <wpt lat="39.7890" lon="-89.6570">
    <name>Lincoln Park Dental Clinic</name>
    <desc>805 N 9th St, Springfield, IL 62702</desc>
    <cmt>Staff entrance on north side</cmt>
  </wpt>
  <wpt lat="39.7920" lon="-89.6600">
    <name>Prairie State Veterinary</name>
    <desc>1120 N Walnut St, Springfield, IL 62702</desc>
    <cmt>Doorbell labeled Delivery/Service</cmt>
  </wpt>
  <wpt lat="39.7950" lon="-89.6630">
    <name>Oak Crest Senior Living</name>
    <desc>1400 W Washington St, Springfield, IL 62702</desc>
    <cmt>Check in at security desk Building A</cmt>
  </wpt>
  <wpt lat="39.7980" lon="-89.6660">
    <name>Green Valley Nursery</name>
    <desc>1850 W Jefferson St, Springfield, IL 62702</desc>
    <cmt>Drive through main gravel yard to warehouse</cmt>
  </wpt>
  <wpt lat="39.8010" lon="-89.6690">
    <name>Westside Auto Diagnostics</name>
    <desc>2204 W Monroe St, Springfield, IL 62704</desc>
    <cmt>Bay 3 entrance, ask for Sal</cmt>
  </wpt>
  <wpt lat="39.8040" lon="-89.6720">
    <name>Midwest Fitness Center</name>
    <desc>2600 S MacArthur Blvd, Springfield, IL 62704</desc>
    <cmt>South equipment dock</cmt>
  </wpt>
  <wpt lat="39.8070" lon="-89.6750">
    <name>Chatham Community Bank</name>
    <desc>3100 S 6th St, Springfield, IL 62703</desc>
    <cmt>Authorized personnel entry only</cmt>
  </wpt>
</gpx>\`,
  },
  {
    id: 'fosterville-turnaround-route',
    title: 'Fosterville Rd Turnaround Route (8 Stops)',
    description: 'Fosterville Rd southward stops, turnaround to State Route 90, shared address at 6633 Laraway Rd',
    stopCount: 8,
    gpxXml: \`<?xml version="1.0" encoding="UTF-8"?>
<gpx version="1.1" creator="OsmAnd Route Companion" xmlns="http://www.topografix.com/GPX/1/1">
  <metadata>
    <name>Fosterville Rd Turnaround Delivery Route</name>
    <desc>Includes Fosterville Rd dead-end turnaround and 6633 Laraway Rd multi-unit delivery</desc>
  </metadata>
  <wpt lat="42.9815" lon="-76.6520">
    <name>Marcus Vance</name>
    <desc>123 Fosterville Rd, Aurelius, NY 13166</desc>
    <cmt>Customer 1: Traveling south along Fosterville Rd</cmt>
  </wpt>
  <wpt lat="42.9770" lon="-76.6524">
    <name>Elena Rostova</name>
    <desc>195 Fosterville Rd, Aurelius, NY 13166</desc>
    <cmt>Customer 2: Furthest south on Fosterville Rd - turn around needed after stop</cmt>
  </wpt>
  <wpt lat="42.9860" lon="-76.6510">
    <name>Randi Hickman II</name>
    <desc>Stop 3 | Customer: Randi Hickman II | Address: 6589 State Route 90</desc>
    <cmt>Customer 3: North of Customer 2, reached by turning around</cmt>
  </wpt>
  <wpt lat="42.9890" lon="-76.6540">
    <name>Corey Skurpski</name>
    <desc>6633 Laraway Rd Apt A, Aurelius, NY 13166</desc>
    <cmt>Shared Address 1 of 2: Multi-unit building entrance A</cmt>
  </wpt>
  <wpt lat="42.9890" lon="-76.6540">
    <name>Mike Suarez</name>
    <desc>6633 Laraway Rd Apt B, Aurelius, NY 13166</desc>
    <cmt>Shared Address 2 of 2: Same coordinates as Apt A</cmt>
  </wpt>
  <wpt lat="42.9720" lon="-76.6380">
    <name>Cynthia Powers</name>
    <desc>556 Clark Street Rd, Aurelius, NY 13166</desc>
    <cmt>Customer 6: Curbside delivery</cmt>
  </wpt>
  <wpt lat="42.9680" lon="-76.6310">
    <name>Ryan Jennings</name>
    <desc>179 Clark Street Rd, Aurelius, NY 13166</desc>
    <cmt>Customer 7: 250 ft driveway setback</cmt>
  </wpt>
  <wpt lat="42.9640" lon="-76.6250">
    <name>Kevin Connelly</name>
    <desc>597 Turnpike Rd, Aurelius, NY 13166</desc>
    <cmt>Customer 8: Final stop on route</cmt>
  </wpt>
</gpx>\`,
  },
];
`,Rt=`import { useState, useEffect, useRef, useCallback } from 'react';
import { RouteStop } from '../types/route';
import { calculateDistanceMeters, calculateBearing, calculateDistanceToPolylineMeters } from './navigationService';
import { triggerHaptic } from './voiceAndHaptics';

export interface GpsLocation {
  lat: number;
  lon: number;
  accuracy: number;
  speed: number | null; // mph
  heading: number | null;
  timestamp: number;
}

export interface UseGpsTrackerReturn {
  location: GpsLocation | null;
  gpsStatus: 'acquiring' | 'locked' | 'denied';
  gpsErrorMsg: string | null;
  distanceToCurrentMeters: number | null;
  distanceToCurrentFeet: number | null;
  isWithinGeofence: boolean;
  isWithinArrivalConfirmZone: boolean;
  isConfirmedArrival: boolean;
  isSharedLocationWithPrevious: boolean;
  isSharedLocationWithNext: boolean;
  autoArrivalStatus: string;
  arrivalRadiusMeters: number;
  arrivalConfirmFeet: number;
  arrivalConfirmMeters: number;
  isPassedWithoutCompletion: boolean;
  // Full Route Simulation Engine
  isSimulatingGps: boolean;
  isSimPaused: boolean;
  simSpeedMultiplier: number;
  startFullRouteSimulation: (startStopIndex?: number, speedMultiplier?: number) => void;
  pauseSimulation: () => void;
  resumeSimulation: () => void;
  setSimulationSpeed: (multiplier: number) => void;
  restartSimulation: () => void;
  stopGpsSimulation: () => void;
  // Legacy simulation helpers
  simulateApproachAndPass: () => void;
  simulateApproachAndArrive: () => void;
  simulateCurbsidePassThrough: () => void;
  diagLogs: string[];
}

// Configurable constants and safeguards
export const DEFAULT_ARRIVAL_RADIUS_METERS = 152.4; // 500 feet proximity evaluation window
export const DEFAULT_ARRIVAL_CONFIRM_METERS = 95.0; // 310 feet arrival confirmation threshold (~95m, accommodates 70-300ft setbacks)
const MAX_ACCURACY_THRESHOLD_METERS = 30.0; // Filter out inaccurate GPS drift (> 100 ft)
const COOLDOWN_MS = 5000; // Minimum time between auto-advances (5 seconds)
const PASSING_DISTANCE_INCREASE_METERS = 18.0; // Distance must expand by 18m (~60ft) from closest point to confirm vehicle passed

/**
 * Validate latitude and longitude coordinates
 */
export function isValidCoordinate(lat: number, lon: number): boolean {
  return (
    !isNaN(lat) &&
    !isNaN(lon) &&
    lat >= -90 &&
    lat <= 90 &&
    lon >= -180 &&
    lon <= 180 &&
    !(lat === 0 && lon === 0)
  );
}

/**
 * Calculates whether the straight line path between two consecutive GPS fixes
 * passed within radiusMeters of destination coordinates.
 */
export function checkSegmentPassesPoint(
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number,
  destLat: number,
  destLon: number,
  radiusMeters: number
): { passed: boolean; minDistance: number; t: number } {
  const latRad = (destLat * Math.PI) / 180;
  const cosLat = Math.cos(latRad);
  const mPerDegLat = 111132.92;
  const mPerDegLon = 111412.84 * cosLat;

  const x1 = (lon1 - destLon) * mPerDegLon;
  const y1 = (lat1 - destLat) * mPerDegLat;
  const x2 = (lon2 - destLon) * mPerDegLon;
  const y2 = (lat2 - destLat) * mPerDegLat;

  const dx = x2 - x1;
  const dy = y2 - y1;
  const lenSq = dx * dx + dy * dy;

  if (lenSq === 0) {
    const d = Math.sqrt(x1 * x1 + y1 * y1);
    return { passed: d <= radiusMeters, minDistance: d, t: 0 };
  }

  const t = -(x1 * dx + y1 * dy) / lenSq;

  if (t > 0 && t < 1) {
    const projX = x1 + t * dx;
    const projY = y1 + t * dy;
    const minDistance = Math.sqrt(projX * projX + projY * projY);
    return { passed: minDistance <= radiusMeters, minDistance, t };
  }

  const d1 = Math.sqrt(x1 * x1 + y1 * y1);
  const d2 = Math.sqrt(x2 * x2 + y2 * y2);
  const minDistance = Math.min(d1, d2);
  return { passed: minDistance <= radiusMeters, minDistance, t };
}

export function useGpsTracker(
  currentStop: RouteStop | null,
  previousStop: RouteStop | null,
  nextStop: RouteStop | null,
  onAutoAdvance: () => void,
  arrivalRadiusMeters: number = DEFAULT_ARRIVAL_RADIUS_METERS,
  arrivalConfirmMeters: number = DEFAULT_ARRIVAL_CONFIRM_METERS,
  roadRemainingMeters?: number | null,
  routeCoordinates?: [number, number][],
  allStops?: RouteStop[],
  onJumpToStop?: (index: number) => void,
  onResetProgress?: () => void,
  onSimulationStart?: () => void,
  onExitSimulation?: () => void
): UseGpsTrackerReturn {
  const [location, setLocation] = useState<GpsLocation | null>(null);
  const [gpsStatus, setGpsStatus] = useState<'acquiring' | 'locked' | 'denied'>('acquiring');
  const [gpsErrorMsg, setGpsErrorMsg] = useState<string | null>(null);
  const [arrivalStateDesc, setArrivalStateDesc] = useState<string>('Monitoring GPS');
  const [isPassedWithoutCompletion, setIsPassedWithoutCompletion] = useState<boolean>(false);

  const [isConfirmedArrival, setIsConfirmedArrival] = useState<boolean>(false);

  // Full Route Simulation state
  const [isSimulatingGps, setIsSimulatingGps] = useState(false);
  const [isSimPaused, setIsSimPaused] = useState(false);
  const [simSpeedMultiplier, setSimSpeedMultiplier] = useState(1);
  const simIntervalRef = useRef<number | null>(null);
  const isSimulatingGpsRef = useRef(false);
  const isSimPausedRef = useRef(false);
  const simSpeedMultiplierRef = useRef(1);
  const simPolylineIdxRef = useRef(0);
  const simSegProgressRef = useRef(0);
  const isDwellRef = useRef(false);
  const dwellRemainingMsRef = useRef(0);
  const lastSimTickTimeRef = useRef(Date.now());
  const simLocationRef = useRef<GpsLocation | null>(null);
  const lastSimStopIdRef = useRef<string | null>(null);

  // Safeguard & Tracking Refs
  const minDistanceSeenRef = useRef<number>(Infinity);
  const enteredArrivalZoneRef = useRef<boolean>(false);
  const consecutiveInsideCountRef = useRef<number>(0);
  const consecutiveCloseCountRef = useRef<number>(0);
  const consecutivePassCountRef = useRef<number>(0);
  const consecutiveMissedCountRef = useRef<number>(0);
  const lastLocationRef = useRef<GpsLocation | null>(null);
  const lastDistanceRef = useRef<number | null>(null);
  const lastAdvanceTimestampRef = useRef<number>(0);
  const lastAdvancedStopIdRef = useRef<string | null>(null);
  const isAdvancingRef = useRef<boolean>(false);
  const departurePendingRef = useRef<boolean>(false);
  const activeStopIdRef = useRef<string | null>(null);
  const advancedStopIdsSetRef = useRef<Set<string>>(new Set());

  // Test Drive Diagnostic Logs
  const [diagLogs, setDiagLogs] = useState<string[]>([]);
  const addDiagLog = useCallback((msg: string) => {
    const time = new Date().toLocaleTimeString();
    const entry = \`[\${time}] \${msg}\`;
    console.log(\`[TestDriveDiag] \${entry}\`);
    setDiagLogs((prev) => [entry, ...prev.slice(0, 49)]);
  }, []);

  // Keep stable refs to latest props to prevent watchPosition re-binding
  const currentStopRef = useRef(currentStop);
  currentStopRef.current = currentStop;

  const previousStopRef = useRef(previousStop);
  previousStopRef.current = previousStop;

  const nextStopRef = useRef(nextStop);
  nextStopRef.current = nextStop;

  const onAutoAdvanceRef = useRef(onAutoAdvance);
  onAutoAdvanceRef.current = onAutoAdvance;

  const arrivalRadiusRef = useRef(arrivalRadiusMeters);
  arrivalRadiusRef.current = arrivalRadiusMeters;

  const arrivalConfirmMetersRef = useRef(arrivalConfirmMeters);
  arrivalConfirmMetersRef.current = arrivalConfirmMeters;

  const roadRemainingMetersRef = useRef(roadRemainingMeters);
  roadRemainingMetersRef.current = roadRemainingMeters;

  const routeCoordinatesRef = useRef(routeCoordinates);
  const isAwaitingNewRouteRef = useRef(false);
  const routeWaitStartTimeRef = useRef(0);

  useEffect(() => {
    routeCoordinatesRef.current = routeCoordinates;
    if (routeCoordinates && routeCoordinates.length >= 2) {
      isAwaitingNewRouteRef.current = false;
      simPolylineIdxRef.current = 0;
      simSegProgressRef.current = 0;
    }
  }, [routeCoordinates]);

  const allStopsRef = useRef(allStops);
  allStopsRef.current = allStops;

  const onJumpToStopRef = useRef(onJumpToStop);
  onJumpToStopRef.current = onJumpToStop;

  const onResetProgressRef = useRef(onResetProgress);
  onResetProgressRef.current = onResetProgress;

  const onSimulationStartRef = useRef(onSimulationStart);
  onSimulationStartRef.current = onSimulationStart;

  const onExitSimulationRef = useRef(onExitSimulation);
  onExitSimulationRef.current = onExitSimulation;

  // Shared location check (within 25m of previous/next stop - handles multi-unit properties like 6633 Laraway Rd Apt A & Apt B)
  const isSharedLocationWithPrevious = Boolean(
    currentStop &&
    previousStop &&
    isValidCoordinate(currentStop.lat, currentStop.lon) &&
    isValidCoordinate(previousStop.lat, previousStop.lon) &&
    calculateDistanceMeters(currentStop.lat, currentStop.lon, previousStop.lat, previousStop.lon) < 25
  );

  const isSharedLocationWithNext = Boolean(
    currentStop &&
    nextStop &&
    isValidCoordinate(currentStop.lat, currentStop.lon) &&
    isValidCoordinate(nextStop.lat, nextStop.lon) &&
    calculateDistanceMeters(currentStop.lat, currentStop.lon, nextStop.lat, nextStop.lon) < 25
  );

  const isSharedLocationWithPreviousRef = useRef(isSharedLocationWithPrevious);
  isSharedLocationWithPreviousRef.current = isSharedLocationWithPrevious;

  // Reset tracking state whenever the active customer changes
  useEffect(() => {
    const newStopId = currentStop?.id || null;
    if (newStopId !== activeStopIdRef.current) {
      activeStopIdRef.current = newStopId;
      minDistanceSeenRef.current = Infinity;
      enteredArrivalZoneRef.current = false;
      consecutiveInsideCountRef.current = 0;
      consecutiveCloseCountRef.current = 0;
      consecutivePassCountRef.current = 0;
      consecutiveMissedCountRef.current = 0;
      lastDistanceRef.current = null;
      lastLocationRef.current = null;
      isAdvancingRef.current = false;
      setIsPassedWithoutCompletion(false);

      // Handle multiple customers at the same property/coordinates (e.g. Stop 21 & Stop 22):
      // The driver is already physically at this property from previous delivery!
      // Do NOT set departurePending, do NOT require driving away, and mark arrived immediately.
      if (isSharedLocationWithPreviousRef.current) {
        departurePendingRef.current = false;
        setIsConfirmedArrival(true);
        setArrivalStateDesc(\`At property · Shared Address: \${currentStop?.name || 'Customer'}\`);
        return;
      }

      setIsConfirmedArrival(false);

      // If driver is currently inside arrival radius of the NEW stop at activation (and not a shared address),
      // require departure/movement before allowing auto-advance.
      if (
        location &&
        currentStop &&
        isValidCoordinate(currentStop.lat, currentStop.lon)
      ) {
        const d = calculateDistanceMeters(location.lat, location.lon, currentStop.lat, currentStop.lon);
        if (d <= arrivalRadiusRef.current) {
          departurePendingRef.current = true;
        } else {
          departurePendingRef.current = false;
        }
      } else {
        departurePendingRef.current = false;
      }
    }
  }, [currentStop?.id]);

  /**
   * Core Arrival & Missed Stop Decision Engine
   * Evaluates current GPS location against verified coordinates of currentStop.
   * Separates 500-foot proximity window from confirmed arrival at the customer address.
   */
  const processLocationUpdate = useCallback((currentLoc: GpsLocation) => {
    const activeStop = currentStopRef.current;
    if (!activeStop) {
      setArrivalStateDesc('No Active Route');
      return;
    }

    // 1. Verify Destination Coordinates
    if (!isValidCoordinate(activeStop.lat, activeStop.lon)) {
      setArrivalStateDesc('Invalid Destination Coordinates (Manual Skip)');
      return;
    }

    // 2. Reject stale updates (> 4.5s old)
    if (Date.now() - currentLoc.timestamp > 4500) {
      return;
    }

    // 3. Filter out inaccurate GPS readings (> 30m error)
    if (currentLoc.accuracy > MAX_ACCURACY_THRESHOLD_METERS) {
      setArrivalStateDesc(\`GPS Accuracy ±\${Math.round(currentLoc.accuracy * 3.28084)} ft (Refining...)\`);
      return;
    }

    const proximityRadius = arrivalRadiusRef.current || DEFAULT_ARRIVAL_RADIUS_METERS; // 500 ft proximity window
    const baseConfirmRadius = arrivalConfirmMetersRef.current || DEFAULT_ARRIVAL_CONFIRM_METERS; // 95m / 310 ft
    const distToDestination = calculateDistanceMeters(
      currentLoc.lat,
      currentLoc.lon,
      activeStop.lat,
      activeStop.lon
    );
    const feetToDestination = Math.round(distToDestination * 3.28084);

    // Track minimum distance seen for this active stop
    if (distToDestination < minDistanceSeenRef.current) {
      minDistanceSeenRef.current = distToDestination;
    }

    const prevLoc = lastLocationRef.current;
    const prevDist = lastDistanceRef.current;
    const now = Date.now();

    // Check if path segment between prevLoc and currentLoc passed closer to verified customer coordinates
    // Strictly require that prevLoc and currentLoc are consecutive location updates (displacement < 75m)
    // to prevent any multi-mile segment from triggering false proximity
    if (prevLoc && isValidCoordinate(prevLoc.lat, prevLoc.lon)) {
      const displacement = calculateDistanceMeters(prevLoc.lat, prevLoc.lon, currentLoc.lat, currentLoc.lon);
      if (displacement < 75.0) {
        const segCheck = checkSegmentPassesPoint(
          prevLoc.lat,
          prevLoc.lon,
          currentLoc.lat,
          currentLoc.lon,
          activeStop.lat,
          activeStop.lon,
          baseConfirmRadius
        );
        if (segCheck.passed && segCheck.minDistance < minDistanceSeenRef.current) {
          minDistanceSeenRef.current = segCheck.minDistance;
        }
      }
    }

    // 4. Prevent immediate cascade / double advance
    if (isAdvancingRef.current) return;
    if (now - lastAdvanceTimestampRef.current < COOLDOWN_MS) return;
    if (lastAdvancedStopIdRef.current === activeStop.id) return;

    // 5. Shared Location Handling (Multi-unit building or shared entrance e.g. Stop 21 & Stop 22)
    if (isSharedLocationWithPreviousRef.current) {
      departurePendingRef.current = false;
      // Confirm arrival immediately for shared address delivery
      setIsConfirmedArrival(true);
      setArrivalStateDesc(\`At property · \${activeStop.name}\`);
      lastLocationRef.current = currentLoc;
      lastDistanceRef.current = distToDestination;
      return;
    }

    // 6. Departure Latch (if activated while already near the stop from a non-shared previous stop)
    if (departurePendingRef.current) {
      if (distToDestination > proximityRadius * 1.1) {
        departurePendingRef.current = false;
      } else if (now - lastAdvanceTimestampRef.current > 8000) {
        departurePendingRef.current = false;
      } else {
        setArrivalStateDesc('Departing Previous Stop...');
        return;
      }
    }

    // 7. Parallel Road Rejection (Avoid triggering arrival when driving on an adjacent parallel road)
    const roadDist = roadRemainingMetersRef.current;
    if (roadDist !== undefined && roadDist !== null && roadDist > Math.max(proximityRadius * 2.0, 150)) {
      setArrivalStateDesc(\`Parallel Road / Route Distance \${Math.round(roadDist * 3.28084)} ft\`);
      return;
    }

    if (routeCoordinatesRef.current && routeCoordinatesRef.current.length > 1) {
      const distToPolyline = calculateDistanceToPolylineMeters(currentLoc.lat, currentLoc.lon, routeCoordinatesRef.current);
      // If vehicle has drifted > 38m (~125 ft) from delivery street polyline while distToDestination > 35m:
      if (distToPolyline > 38.0 && distToDestination > 35.0) {
        setArrivalStateDesc(\`Parallel Road · \${feetToDestination} ft to customer\`);
        return;
      }
    }

    // Calculate inter-fix displacement and effective speed (in mph)
    const displacementMeters = (prevLoc && isValidCoordinate(prevLoc.lat, prevLoc.lon))
      ? calculateDistanceMeters(prevLoc.lat, prevLoc.lon, currentLoc.lat, currentLoc.lon)
      : null;
    const timeDeltaSec = prevLoc ? Math.max(0.4, (currentLoc.timestamp - prevLoc.timestamp) / 1000) : 1.0;
    const computedSpeedMph = displacementMeters !== null ? (displacementMeters / timeDeltaSec) * 2.23694 : null;
    const effectiveSpeedMph = currentLoc.speed !== null ? currentLoc.speed : computedSpeedMph;
    const isStationaryOrCrawl = effectiveSpeedMph === null || effectiveSpeedMph <= 15.0;

    // Dynamic Arrival Confirmation Threshold:
    // Accounts for rural and suburban property setbacks (70-300 ft / 21-91m).
    // Base is 95m (~310 ft). If vehicle is stopped (0 mph) or moving at delivery crawl (<= 15 mph),
    // expands up to 105m (~345 ft) to guarantee recognition at long setback driveways.
    const effectiveConfirmZone = isStationaryOrCrawl
      ? Math.max(baseConfirmRadius, 105.0)
      : Math.max(baseConfirmRadius, Math.min(baseConfirmRadius + 15.0, currentLoc.accuracy * 1.5));

    const isInsideConfirmZone = distToDestination <= effectiveConfirmZone;
    
    // Actively closing distance at high cruising road speed towards the house (> 20 mph):
    const isClosingDistanceAtSpeed = prevDist !== null
      && distToDestination < prevDist - 2.0
      && effectiveSpeedMph !== null
      && effectiveSpeedMph > 20.0;

    // Moving away from destination:
    const isMovingAway = prevDist !== null && distToDestination > prevDist + 1.5;

    let isReliablyArrived = false;
    let arrivalReason = '';

    // ========================================================
    // ARRIVAL DETECTION (Separated from 500-ft Proximity Window)
    // Does NOT require a complete stop (speed zero).
    // Recognizes curbside delivery, driveway stops, and rolling passes.
    // ========================================================

    // Case 1: Curbside / Driveway Presence (within effective confirmation zone)
    // Recognizes arrival whether vehicle is stopped (0 mph), crawling, or rolling past at normal delivery speed (<= 25 mph).
    if (isInsideConfirmZone) {
      if (isClosingDistanceAtSpeed && distToDestination > 30.0) {
        // Vehicle is still approaching at high cruising speed towards the house: wait until closest approach
        consecutiveCloseCountRef.current = 0;
        setArrivalStateDesc(\`Approaching customer: \${feetToDestination} ft\`);
      } else {
        // Vehicle is at address: stopped, crawling, or rolling past at delivery speed (<= 25 mph)
        consecutiveCloseCountRef.current += 1;
        // Require 2 consecutive reliable GPS fixes within confirmation threshold (does not require complete stop)
        if (consecutiveCloseCountRef.current >= 2) {
          isReliablyArrived = true;
          arrivalReason = \`At customer address (\${feetToDestination} ft)\`;
        } else {
          setArrivalStateDesc(\`At address (\${feetToDestination} ft, confirming...)\`);
        }
      }
    } else {
      consecutiveCloseCountRef.current = 0;
    }

    // Case 2: Pass-Through Arrival (Rolled past address within closest approach threshold at delivery pace <= 25 mph)
    // Vehicle came within closest approach threshold (minDistanceSeen <= effectiveConfirmZone)
    // and is now moving past the customer in the immediate vicinity (distToDestination <= 95m)
    if (!isReliablyArrived && minDistanceSeenRef.current <= effectiveConfirmZone && distToDestination <= 95.0) {
      const hasPassedMin = distToDestination >= minDistanceSeenRef.current + 4.0;
      const isDeliveryPace = effectiveSpeedMph === null || effectiveSpeedMph <= 25.0;

      // Heading or displacement check: destination is behind vehicle
      const bearingToDest = calculateBearing(currentLoc.lat, currentLoc.lon, activeStop.lat, activeStop.lon);
      let isBehindVehicle = true;
      if (currentLoc.heading !== null) {
        const diff = Math.abs(currentLoc.heading - bearingToDest);
        const normalizedDiff = diff > 180 ? 360 - diff : diff;
        isBehindVehicle = normalizedDiff > 65;
      } else if (prevDist !== null) {
        isBehindVehicle = distToDestination > prevDist;
      }

      if (hasPassedMin && isMovingAway && isBehindVehicle && isDeliveryPace) {
        consecutivePassCountRef.current += 1;
        if (consecutivePassCountRef.current >= 2) {
          isReliablyArrived = true;
          arrivalReason = \`Passed customer address (\${Math.round(minDistanceSeenRef.current * 3.28084)} ft min)\`;
        }
      } else {
        consecutivePassCountRef.current = 0;
      }
    } else {
      consecutivePassCountRef.current = 0;
    }

    // Absolute Distance Ceiling Safeguard:
    // Completing a turn, passing an intersection, recalculating a route, or reaching a nearby road
    // must NEVER count as arrival at that customer. Arrival can NEVER be declared if vehicle is > 120m (~400 ft) away!
    if (isReliablyArrived && distToDestination > 120.0) {
      isReliablyArrived = false;
      consecutiveCloseCountRef.current = 0;
      consecutivePassCountRef.current = 0;
    }

    // Case 3: Still Approaching the House within the 500-ft Proximity Window
    // If vehicle is approaching outside the confirmation zone, keep tracking
    if (!isReliablyArrived && distToDestination <= proximityRadius && !isInsideConfirmZone) {
      setArrivalStateDesc(\`Approaching customer: \${feetToDestination} ft\`);
    }

    // Case 4: Genuinely Missed Destination
    // Strict multi-condition check to prevent false turnaround triggers:
    // 1) Vehicle is NOT inside confirmation zone
    // 2) Vehicle was within proximity window (minDistanceSeenRef.current <= proximityRadius)
    // 3) Vehicle is now well past and outside the confirmation zone (> 120m / 400+ ft away)
    // 4) Distance has expanded substantially from closest approach (> 60m / 200+ ft expansion)
    // 5) Vehicle is moving at road cruising speed (> 15 mph) heading away from customer
    // 6) Inconclusive evidence -> continue tracking, NEVER declare missed prematurely!
    if (!isReliablyArrived && !isInsideConfirmZone && minDistanceSeenRef.current <= proximityRadius) {
      const isWellPastCustomer = distToDestination > 120.0; // > 400 ft away
      const isExpandingSignificantly = distToDestination >= minDistanceSeenRef.current + 60.0; // > 200 ft expansion
      const isCruisingSpeed = effectiveSpeedMph !== null && effectiveSpeedMph > 15.0;

      const bearingToDest = calculateBearing(currentLoc.lat, currentLoc.lon, activeStop.lat, activeStop.lon);
      let headingPointsAway = false;
      if (currentLoc.heading !== null) {
        const diff = Math.abs(currentLoc.heading - bearingToDest);
        const normalizedDiff = diff > 180 ? 360 - diff : diff;
        headingPointsAway = normalizedDiff > 75;
      } else if (prevDist !== null) {
        headingPointsAway = distToDestination > prevDist + 2.0;
      }

      if (isWellPastCustomer && isExpandingSignificantly && isCruisingSpeed && (isMovingAway || headingPointsAway)) {
        consecutiveMissedCountRef.current += 1;
        if (consecutiveMissedCountRef.current >= 4) {
          setIsPassedWithoutCompletion(true);
          setArrivalStateDesc(\`Missed stop (\${feetToDestination} ft) · Recalculating...\`);
          lastLocationRef.current = currentLoc;
          lastDistanceRef.current = distToDestination;
          return;
        }
      } else {
        consecutiveMissedCountRef.current = 0;
      }
    } else {
      consecutiveMissedCountRef.current = 0;
    }

    // ========================================================
    // EXECUTE CONFIRMED ARRIVAL
    // ========================================================
    if (isReliablyArrived) {
      if (isSimulatingGpsRef.current) {
        // In simulation mode, tickSimulation manages the arrival dwell and single authoritative advance
        return;
      }
      if (advancedStopIdsSetRef.current.has(activeStop.id)) {
        return;
      }
      advancedStopIdsSetRef.current.add(activeStop.id);
      addDiagLog(\`Live GPS Arrival: Stop \${activeStop.id} arrived via \${arrivalReason}\`);
      isAdvancingRef.current = true;
      lastAdvanceTimestampRef.current = now;
      lastAdvancedStopIdRef.current = activeStop.id;
      consecutiveCloseCountRef.current = 0;
      consecutivePassCountRef.current = 0;
      minDistanceSeenRef.current = Infinity;
      setIsPassedWithoutCompletion(false);
      setIsConfirmedArrival(true);

      setArrivalStateDesc(\`Arrived: \${arrivalReason}\`);
      triggerHaptic('complete');
      onAutoAdvanceRef.current();

      setTimeout(() => {
        setIsConfirmedArrival(false);
      }, 3000);
      return;
    }

    // General navigation tracking outside 500ft window
    if (distToDestination > proximityRadius) {
      setArrivalStateDesc(\`\${feetToDestination} ft to customer (Window: \${Math.round(proximityRadius * 3.28084)} ft)\`);
    }

    lastLocationRef.current = currentLoc;
    lastDistanceRef.current = distToDestination;
  }, []);

  // Mount native Android GPS watcher
  useEffect(() => {
    if (typeof window === 'undefined' || !('geolocation' in navigator)) {
      setGpsStatus('denied');
      setGpsErrorMsg('GPS hardware not supported by this browser.');
      return;
    }

    setGpsStatus('acquiring');

    const watchId = navigator.geolocation.watchPosition(
      (pos) => {
        if (isSimulatingGpsRef.current) return;

        const lat = pos.coords.latitude;
        const lon = pos.coords.longitude;
        const accuracy = pos.coords.accuracy || 8;
        const speed = pos.coords.speed !== null && pos.coords.speed >= 0
          ? Math.round(pos.coords.speed * 2.23694)
          : null;
        const heading = pos.coords.heading !== null && !isNaN(pos.coords.heading)
          ? pos.coords.heading
          : null;

        const currentLoc: GpsLocation = {
          lat,
          lon,
          accuracy,
          speed,
          heading,
          timestamp: pos.timestamp || Date.now(),
        };

        setLocation(currentLoc);
        setGpsStatus('locked');
        setGpsErrorMsg(null);

        processLocationUpdate(currentLoc);
      },
      (err) => {
        if (isSimulatingGpsRef.current) return;
        setGpsStatus('denied');
        setGpsErrorMsg(err.message || 'GPS hardware access denied.');
      },
      {
        enableHighAccuracy: true,
        maximumAge: 1000,
        timeout: 10000,
      }
    );

    return () => {
      try {
        navigator.geolocation.clearWatch(watchId);
      } catch (e) {}
    };
  }, [processLocationUpdate, isSimulatingGps]);

  // Clean up any running simulation on unmount
  useEffect(() => {
    return () => {
      if (simIntervalRef.current) {
        window.clearInterval(simIntervalRef.current);
      }
    };
  }, []);

  /**
   * Continuous Full Route Simulation Engine
   * Smoothly navigates the actual road polyline from stop to stop,
   * modulates speed (cruise vs curbside), tests turnarounds, dwells at customers,
   * and auto-advances until the complete delivery route is finished.
   */
  const tickSimulation = useCallback(() => {
    if (!isSimulatingGpsRef.current) return;

    const now = Date.now();
    const dt = Math.min(0.25, Math.max(0.04, (now - lastSimTickTimeRef.current) / 1000));
    lastSimTickTimeRef.current = now;

    if (isSimPausedRef.current) {
      return;
    }

    const activeStop = currentStopRef.current;
    if (!activeStop || !isValidCoordinate(activeStop.lat, activeStop.lon)) {
      if (simIntervalRef.current) {
        window.clearInterval(simIntervalRef.current);
        simIntervalRef.current = null;
      }
      setIsSimulatingGps(false);
      isSimulatingGpsRef.current = false;
      setArrivalStateDesc('Full Route Simulation Completed!');
      return;
    }

    // Detect customer stop transition
    if (activeStop.id !== lastSimStopIdRef.current) {
      lastSimStopIdRef.current = activeStop.id;
      isDwellRef.current = false;
      dwellRemainingMsRef.current = 0;
      isAwaitingNewRouteRef.current = true;
      routeWaitStartTimeRef.current = now;
      routeCoordinatesRef.current = [];
      simPolylineIdxRef.current = 0;
      simSegProgressRef.current = 0;
      setIsConfirmedArrival(false);
      setIsPassedWithoutCompletion(false);

      // Multi-unit property with identical coordinates (e.g. 6633 Laraway Rd Apt A & Apt B)
      if (isSharedLocationWithPreviousRef.current) {
        isAwaitingNewRouteRef.current = false;
        isDwellRef.current = true;
        dwellRemainingMsRef.current = 2400;
        const sharedLoc: GpsLocation = {
          lat: activeStop.lat,
          lon: activeStop.lon,
          accuracy: 2.5,
          speed: 0,
          heading: simLocationRef.current?.heading || 0,
          timestamp: now,
        };
        simLocationRef.current = sharedLoc;
        setLocation(sharedLoc);
        processLocationUpdate(sharedLoc);
        return;
      }
    }

    // Stop Dwell phase (vehicle pulled over at customer address)
    if (isDwellRef.current) {
      dwellRemainingMsRef.current -= (dt * 1000) * simSpeedMultiplierRef.current;

      if (dwellRemainingMsRef.current <= 0) {
        isDwellRef.current = false;

        // Check if this was the last stop on the route
        if (allStopsRef.current && allStopsRef.current.length > 0) {
          const currentIdx = allStopsRef.current.findIndex((s) => s.id === activeStop.id);
          if (currentIdx !== -1 && currentIdx >= allStopsRef.current.length - 1) {
            // Reached final customer of route
            if (simIntervalRef.current) {
              window.clearInterval(simIntervalRef.current);
              simIntervalRef.current = null;
            }
            setIsSimulatingGps(false);
            isSimulatingGpsRef.current = false;
            setArrivalStateDesc('Full Route Simulation Completed!');
            return;
          }
        }

        // Auto-advance to the next customer stop (strictly once per stop!)
        if (!advancedStopIdsSetRef.current.has(activeStop.id)) {
          advancedStopIdsSetRef.current.add(activeStop.id);
          addDiagLog(\`Sim Arrival: Stop \${activeStop.id} dwell completed -> advancing\`);
          onAutoAdvanceRef.current();
        }
      } else {
        // Emit 0 mph stopped location at customer
        if (simLocationRef.current) {
          const stoppedLoc: GpsLocation = {
            ...simLocationRef.current,
            speed: 0,
            timestamp: now,
          };
          setLocation(stoppedLoc);
          processLocationUpdate(stoppedLoc);
        }
      }
      return;
    }

    // Awaiting new route calculation from the vehicle's current position to the new stop
    if (isAwaitingNewRouteRef.current) {
      if (now - routeWaitStartTimeRef.current > 3500) {
        // Fallback safeguard if routing takes longer than 3.5s
        isAwaitingNewRouteRef.current = false;
      } else {
        if (simLocationRef.current) {
          const waitingLoc: GpsLocation = {
            ...simLocationRef.current,
            speed: 0,
            timestamp: now,
          };
          setLocation(waitingLoc);
          processLocationUpdate(waitingLoc);
        }
        return;
      }
    }

    // Active Driving phase along real road polyline
    const poly = routeCoordinatesRef.current;
    let curLat: number;
    let curLon: number;
    let curHeading = simLocationRef.current?.heading || 0;

    if (poly && poly.length >= 2) {
      let pIdx = simPolylineIdxRef.current;

      // Reached destination endpoint
      if (pIdx >= poly.length - 1) {
        const [destLon, destLat] = poly[poly.length - 1];
        curLat = destLat;
        curLon = destLon;
        const [prevLon, prevLat] = poly[Math.max(0, poly.length - 2)];
        curHeading = calculateBearing(prevLat, prevLon, curLat, curLon);

        const distToEndToDest = calculateDistanceMeters(curLat, curLon, activeStop.lat, activeStop.lon);
        const baseConfirmRadius = arrivalConfirmMetersRef.current || DEFAULT_ARRIVAL_CONFIRM_METERS;
        const effectiveConfirmZone = Math.max(baseConfirmRadius, 105.0);

        // ONLY initiate arrival if vehicle has reached within arrival confirmation zone of customer coordinates!
        // Completing a maneuver, passing an intersection, or reaching an intermediate polyline end must NEVER count as arrival if still miles/hundreds of feet away!
        if (distToEndToDest <= effectiveConfirmZone) {
          const arrivedLoc: GpsLocation = {
            lat: curLat,
            lon: curLon,
            accuracy: 2.5,
            speed: 0,
            heading: curHeading,
            timestamp: now,
          };
          simLocationRef.current = arrivedLoc;
          setLocation(arrivedLoc);
          processLocationUpdate(arrivedLoc);

          // Initiate arrival dwell
          isDwellRef.current = true;
          dwellRemainingMsRef.current = 2200;
          return;
        } else {
          // Intermediate route end reached while still away from customer (e.g. turnaround point or partial route):
          // Keep vehicle holding along current road, do NOT declare arrival or auto-advance!
          const intermediateLoc: GpsLocation = {
            lat: curLat,
            lon: curLon,
            accuracy: 2.5,
            speed: 0,
            heading: curHeading,
            timestamp: now,
          };
          simLocationRef.current = intermediateLoc;
          setLocation(intermediateLoc);
          processLocationUpdate(intermediateLoc);
          return;
        }
      }

      // Calculate target driving speed:
      // 32 mph cruise along road, slowing to 18 mph / 11 mph approaching customer curbside
      const [ptLon, ptLat] = poly[pIdx];
      const distToDest = calculateDistanceMeters(ptLat, ptLon, activeStop.lat, activeStop.lon);
      let targetSpeedMph = 32;
      if (distToDest < 35) {
        targetSpeedMph = 11;
      } else if (distToDest < 85) {
        targetSpeedMph = 18;
      }

      const speedMps = (targetSpeedMph * 0.44704) * simSpeedMultiplierRef.current;
      const distanceStep = speedMps * dt;
      let remainingStep = distanceStep;

      while (remainingStep > 0 && pIdx < poly.length - 1) {
        const [lon0, lat0] = poly[pIdx];
        const [lon1, lat1] = poly[pIdx + 1];
        const segDist = calculateDistanceMeters(lat0, lon0, lat1, lon1);
        const segDistLeft = segDist * (1 - simSegProgressRef.current);

        if (remainingStep < segDistLeft && segDist > 0.01) {
          simSegProgressRef.current += remainingStep / segDist;
          remainingStep = 0;
          curLat = lat0 + (lat1 - lat0) * simSegProgressRef.current;
          curLon = lon0 + (lon1 - lon0) * simSegProgressRef.current;
          curHeading = calculateBearing(lat0, lon0, lat1, lon1);
        } else {
          remainingStep -= segDistLeft;
          pIdx += 1;
          simPolylineIdxRef.current = pIdx;
          simSegProgressRef.current = 0;
          curLat = lat1;
          curLon = lon1;
          if (pIdx < poly.length - 1) {
            const [nextLon, nextLat] = poly[pIdx + 1];
            curHeading = calculateBearing(lat1, lon1, nextLat, nextLon);
          } else {
            curHeading = calculateBearing(lat0, lon0, lat1, lon1);
          }
        }
      }

      const simLoc: GpsLocation = {
        lat: curLat!,
        lon: curLon!,
        accuracy: 2.5,
        speed: targetSpeedMph,
        heading: curHeading,
        timestamp: now,
      };
      simLocationRef.current = simLoc;
      setLocation(simLoc);
      processLocationUpdate(simLoc);

    } else {
      // Polyline loading from OSRM:
      if (!simLocationRef.current) {
        // Initial simulation start: initialize near first stop approach
        const mPerDegLat = 111132.92;
        simLocationRef.current = {
          lat: activeStop.lat - (200 / mPerDegLat),
          lon: activeStop.lon,
          accuracy: 2.5,
          speed: 0,
          heading: 0,
          timestamp: now,
        };
      }
      const cur = simLocationRef.current;
      // Hold position on the road at speed 0 awaiting the road route from OSRM
      // Never straight-line interpolate across buildings or declare premature arrival!
      const holdLoc: GpsLocation = {
        ...cur,
        speed: 0,
        timestamp: now,
      };
      simLocationRef.current = holdLoc;
      setLocation(holdLoc);
      processLocationUpdate(holdLoc);
    }
  }, [processLocationUpdate]);

  /**
   * Start Full Route Simulation from specified stop (defaults to Stop 1 / index 0)
   * Places vehicle at an authentic road approach location, not right on the doorstep at 32 MPH.
   */
  const startFullRouteSimulation = useCallback((startStopIndex: number = 0, speedMultiplier: number = 1) => {
    if (simIntervalRef.current) {
      window.clearInterval(simIntervalRef.current);
      simIntervalRef.current = null;
    }

    onSimulationStartRef.current?.();

    const targetIdx = startStopIndex !== undefined ? startStopIndex : 0;
    if (startStopIndex !== undefined && onJumpToStopRef.current) {
      onJumpToStopRef.current(targetIdx);
    }

    const mult = speedMultiplier || 1;
    simSpeedMultiplierRef.current = mult;
    setSimSpeedMultiplier(mult);

    isSimulatingGpsRef.current = true;
    setIsSimulatingGps(true);
    isSimPausedRef.current = false;
    setIsSimPaused(false);

    setGpsStatus('locked');
    setGpsErrorMsg(null);
    setIsPassedWithoutCompletion(false);
    setIsConfirmedArrival(false);

    simPolylineIdxRef.current = 0;
    simSegProgressRef.current = 0;
    isDwellRef.current = false;
    dwellRemainingMsRef.current = 0;
    lastSimStopIdRef.current = null;
    lastSimTickTimeRef.current = Date.now();
    advancedStopIdsSetRef.current.clear();

    // Determine realistic starting vehicle position along the approach road
    const stopsList = allStopsRef.current || [];
    const targetStop = stopsList[targetIdx] || currentStopRef.current;

    if (targetStop && isValidCoordinate(targetStop.lat, targetStop.lon)) {
      let approachLat: number;
      let approachLon: number;
      let initialHeading: number;

      if (targetIdx > 0 && stopsList[targetIdx - 1]) {
        // Continue from previous customer's position
        const prevPt = stopsList[targetIdx - 1];
        approachLat = prevPt.lat;
        approachLon = prevPt.lon;
        initialHeading = calculateBearing(prevPt.lat, prevPt.lon, targetStop.lat, targetStop.lon);
      } else {
        // Starting Stop 1: calculate approach along road towards Stop 1
        const secondStop = stopsList[targetIdx + 1];
        if (secondStop && isValidCoordinate(secondStop.lat, secondStop.lon)) {
          const dLat = secondStop.lat - targetStop.lat;
          const dLon = secondStop.lon - targetStop.lon;
          const dist = calculateDistanceMeters(targetStop.lat, targetStop.lon, secondStop.lat, secondStop.lon);
          if (dist > 25) {
            // Approach vector ~350m back from opposite direction
            const mPerDegLat = 111132.92;
            const mPerDegLon = 111412.84 * Math.cos((targetStop.lat * Math.PI) / 180);
            approachLat = targetStop.lat - (dLat / dist) * (350 / mPerDegLat) * mPerDegLat;
            approachLon = targetStop.lon - (dLon / dist) * (350 / mPerDegLon) * mPerDegLon;
            initialHeading = calculateBearing(approachLat, approachLon, targetStop.lat, targetStop.lon);
          } else {
            approachLat = targetStop.lat + 0.0035;
            approachLon = targetStop.lon;
            initialHeading = 180;
          }
        } else {
          approachLat = targetStop.lat + 0.0035;
          approachLon = targetStop.lon;
          initialHeading = 180;
        }
      }

      const initialLoc: GpsLocation = {
        lat: approachLat,
        lon: approachLon,
        accuracy: 2.5,
        speed: 28,
        heading: initialHeading,
        timestamp: Date.now(),
      };
      simLocationRef.current = initialLoc;
      setLocation(initialLoc);
      processLocationUpdate(initialLoc);
    } else {
      simLocationRef.current = null;
    }

    simIntervalRef.current = window.setInterval(tickSimulation, 100);
  }, [tickSimulation, processLocationUpdate]);

  const pauseSimulation = useCallback(() => {
    isSimPausedRef.current = true;
    setIsSimPaused(true);
    if (simLocationRef.current) {
      const pausedLoc: GpsLocation = {
        ...simLocationRef.current,
        speed: 0,
        timestamp: Date.now(),
      };
      simLocationRef.current = pausedLoc;
      setLocation(pausedLoc);
    }
  }, []);

  const resumeSimulation = useCallback(() => {
    isSimPausedRef.current = false;
    setIsSimPaused(false);
    lastSimTickTimeRef.current = Date.now();
  }, []);

  const setSimulationSpeed = useCallback((multiplier: number) => {
    simSpeedMultiplierRef.current = multiplier;
    setSimSpeedMultiplier(multiplier);
  }, []);

  const restartSimulation = useCallback(() => {
    if (onJumpToStopRef.current) {
      onJumpToStopRef.current(0);
    } else if (onResetProgressRef.current) {
      onResetProgressRef.current();
    }
    simPolylineIdxRef.current = 0;
    simSegProgressRef.current = 0;
    isDwellRef.current = false;
    dwellRemainingMsRef.current = 0;
    lastSimStopIdRef.current = null;
    simLocationRef.current = null;
    lastSimTickTimeRef.current = Date.now();
    isSimPausedRef.current = false;
    setIsSimPaused(false);
    advancedStopIdsSetRef.current.clear();
  }, []);

  const stopGpsSimulation = useCallback(() => {
    if (simIntervalRef.current) {
      window.clearInterval(simIntervalRef.current);
      simIntervalRef.current = null;
    }
    isSimulatingGpsRef.current = false;
    setIsSimulatingGps(false);
    isSimPausedRef.current = false;
    setIsSimPaused(false);
    simLocationRef.current = null;
    lastSimStopIdRef.current = null;
    lastLocationRef.current = null;
    minDistanceSeenRef.current = Infinity;
    isAdvancingRef.current = false;
    onExitSimulationRef.current?.();
  }, []);

  /**
   * Interactive Simulator 1: Quick Curbside Stop single-step test
   */
  const simulateApproachAndArrive = useCallback(() => {
    const activeStop = currentStopRef.current;
    if (!activeStop || !isValidCoordinate(activeStop.lat, activeStop.lon)) return;

    if (simIntervalRef.current) {
      window.clearInterval(simIntervalRef.current);
      simIntervalRef.current = null;
    }

    setIsSimulatingGps(true);
    setGpsStatus('locked');
    setGpsErrorMsg(null);
    setIsPassedWithoutCompletion(false);
    setIsConfirmedArrival(false);

    const latMeters = 111132.92;
    const destLat = activeStop.lat;
    const destLon = activeStop.lon;

    const waypoints = [
      { offset: -130, speed: 25 },
      { offset: -75, speed: 20 },
      { offset: -36, speed: 12 },
      { offset: -23, speed: 2 },
      { offset: -23, speed: 0 },
    ];
    let step = 0;

    simIntervalRef.current = window.setInterval(() => {
      if (step >= waypoints.length) {
        if (simIntervalRef.current) {
          window.clearInterval(simIntervalRef.current);
          simIntervalRef.current = null;
        }
        setIsSimulatingGps(false);
        return;
      }

      const wp = waypoints[step];
      const simLat = destLat + (wp.offset / latMeters);
      const simLon = destLon;

      const simLoc: GpsLocation = {
        lat: simLat,
        lon: simLon,
        accuracy: 3,
        speed: wp.speed,
        heading: 0,
        timestamp: Date.now(),
      };

      setLocation(simLoc);
      processLocationUpdate(simLoc);

      step += 1;
    }, 1100);
  }, [processLocationUpdate]);

  /**
   * Interactive Simulator 2: Curbside Pass-Through Delivery (rolls past at ~10 mph)
   */
  const simulateCurbsidePassThrough = useCallback(() => {
    const activeStop = currentStopRef.current;
    if (!activeStop || !isValidCoordinate(activeStop.lat, activeStop.lon)) return;

    if (simIntervalRef.current) {
      window.clearInterval(simIntervalRef.current);
      simIntervalRef.current = null;
    }

    setIsSimulatingGps(true);
    setGpsStatus('locked');
    setGpsErrorMsg(null);
    setIsPassedWithoutCompletion(false);
    setIsConfirmedArrival(false);

    const latMeters = 111132.92;
    const destLat = activeStop.lat;
    const destLon = activeStop.lon;

    const waypoints = [
      { offset: -55, speed: 18 },
      { offset: -28, speed: 14 },
      { offset: 0, speed: 10 },
      { offset: 12, speed: 10 },
      { offset: 24, speed: 10 },
    ];
    let step = 0;

    simIntervalRef.current = window.setInterval(() => {
      if (step >= waypoints.length) {
        if (simIntervalRef.current) {
          window.clearInterval(simIntervalRef.current);
          simIntervalRef.current = null;
        }
        setIsSimulatingGps(false);
        return;
      }

      const wp = waypoints[step];
      const simLat = destLat + (wp.offset / latMeters);
      const simLon = destLon + (22 / (latMeters * Math.cos(destLat * Math.PI / 180)));

      const simLoc: GpsLocation = {
        lat: simLat,
        lon: simLon,
        accuracy: 3,
        speed: wp.speed,
        heading: 0,
        timestamp: Date.now(),
      };

      setLocation(simLoc);
      processLocationUpdate(simLoc);

      step += 1;
    }, 1100);
  }, [processLocationUpdate]);

  /**
   * Interactive Simulator 3: Drive Past at 28 mph -> triggers Turnaround
   */
  const simulateApproachAndPass = useCallback(() => {
    const activeStop = currentStopRef.current;
    if (!activeStop || !isValidCoordinate(activeStop.lat, activeStop.lon)) return;

    if (simIntervalRef.current) {
      window.clearInterval(simIntervalRef.current);
      simIntervalRef.current = null;
    }

    setIsSimulatingGps(true);
    setGpsStatus('locked');
    setGpsErrorMsg(null);

    const latMeters = 111132.92;
    const destLat = activeStop.lat;
    const destLon = activeStop.lon;

    const waypoints = [
      { offset: -100, speed: 28 },
      { offset: -45, speed: 28 },
      { offset: 0, speed: 28 },
      { offset: 70, speed: 28 },
      { offset: 125, speed: 28 },
      { offset: 160, speed: 28 },
    ];
    let step = 0;

    simIntervalRef.current = window.setInterval(() => {
      if (step >= waypoints.length) {
        if (simIntervalRef.current) {
          window.clearInterval(simIntervalRef.current);
          simIntervalRef.current = null;
        }
        setIsSimulatingGps(false);
        return;
      }

      const wp = waypoints[step];
      const simLat = destLat + (wp.offset / latMeters);
      const simLon = destLon + (12 / (latMeters * Math.cos(destLat * Math.PI / 180)));

      const simLoc: GpsLocation = {
        lat: simLat,
        lon: simLon,
        accuracy: 4,
        speed: wp.speed,
        heading: 0,
        timestamp: Date.now(),
      };

      setLocation(simLoc);
      processLocationUpdate(simLoc);

      step += 1;
    }, 1200);
  }, [processLocationUpdate]);

  // Calculated reactive metrics for UI display
  let distanceToCurrentMeters: number | null = null;
  let distanceToCurrentFeet: number | null = null;
  let isWithinGeofence = false;
  let isWithinArrivalConfirmZone = false;

  const currentConfirmRadius = arrivalConfirmMetersRef.current || DEFAULT_ARRIVAL_CONFIRM_METERS;

  if (location && currentStop && isValidCoordinate(currentStop.lat, currentStop.lon)) {
    distanceToCurrentMeters = calculateDistanceMeters(location.lat, location.lon, currentStop.lat, currentStop.lon);
    distanceToCurrentFeet = Math.round(distanceToCurrentMeters * 3.28084);
    isWithinGeofence = distanceToCurrentMeters <= arrivalRadiusMeters;
    isWithinArrivalConfirmZone = distanceToCurrentMeters <= currentConfirmRadius;
  }

  let finalArrivalStatus = arrivalStateDesc;
  if (gpsStatus === 'denied') {
    finalArrivalStatus = 'GPS Disabled';
  } else if (gpsStatus === 'acquiring') {
    finalArrivalStatus = 'Acquiring Satellites...';
  } else if (isConfirmedArrival) {
    finalArrivalStatus = \`Arrived at Stop (\${distanceToCurrentFeet} ft)\`;
  } else if (isPassedWithoutCompletion) {
    finalArrivalStatus = \`Passed stop (\${distanceToCurrentFeet} ft) · Recalculating...\`;
  } else if (isSimulatingGps) {
    finalArrivalStatus = \`Simulating Road Progress (\${distanceToCurrentFeet} ft)\`;
  } else if (isWithinArrivalConfirmZone) {
    finalArrivalStatus = \`In delivery zone (\${distanceToCurrentFeet} ft / \${Math.round(currentConfirmRadius * 3.28084)} ft)\`;
  } else if (isWithinGeofence) {
    finalArrivalStatus = isSharedLocationWithPrevious
      ? 'Shared Address · Tap Skip when done'
      : \`Customer nearby (\${distanceToCurrentFeet} ft / \${Math.round(arrivalRadiusMeters * 3.28084)} ft window)\`;
  }

  return {
    location,
    gpsStatus,
    gpsErrorMsg,
    distanceToCurrentMeters,
    distanceToCurrentFeet,
    isWithinGeofence,
    isWithinArrivalConfirmZone,
    isConfirmedArrival,
    isSharedLocationWithPrevious,
    isSharedLocationWithNext,
    autoArrivalStatus: finalArrivalStatus,
    arrivalRadiusMeters,
    arrivalConfirmFeet: Math.round(currentConfirmRadius * 3.28084),
    arrivalConfirmMeters: currentConfirmRadius,
    isPassedWithoutCompletion,
    isSimulatingGps,
    isSimPaused,
    simSpeedMultiplier,
    startFullRouteSimulation,
    pauseSimulation,
    resumeSimulation,
    setSimulationSpeed,
    restartSimulation,
    stopGpsSimulation,
    simulateApproachAndPass,
    simulateApproachAndArrive,
    simulateCurbsidePassThrough,
    diagLogs,
  };
}
`,Q=`import { useState, useEffect, useRef, useCallback } from 'react';
import { RouteStop } from '../types/route';
import { GpsLocation } from './useGpsTracker';
import { 
  NavManeuver, 
  fetchOsmRoute, 
  calculateDistanceMeters, 
  calculateDistanceToPolylineMeters,
  formatDistance, 
  formatDuration 
} from './navigationService';
import { isValidCoordinate } from './gpxParser';

export interface RoadNavigationState {
  currentManeuver: NavManeuver | null;
  nextManeuver: NavManeuver | null;
  maneuverIndex: number;
  totalManeuvers: number;
  distanceToTurnMeters: number;
  distanceToTurnFormatted: string;
  totalDistanceMeters: number;
  totalDistanceFormatted: string;
  totalDurationSeconds: number;
  totalDurationFormatted: string;
  isRouting: boolean;
  routingError: string | null;
  hasUturn: boolean;
  isSimulating: boolean;
  toggleSimulation: () => void;
  restartRoute: () => void;
  recalculate: () => void;
}

export function useRoadNavigation(
  currentStop: RouteStop | null,
  previousStop?: RouteStop,
  userLocation: GpsLocation | null = null,
  gpsStatus: 'acquiring' | 'locked' | 'denied' = 'acquiring'
): RoadNavigationState {
  const [maneuvers, setManeuvers] = useState<NavManeuver[]>([]);
  const [routeCoordinates, setRouteCoordinates] = useState<[number, number][]>([]);
  const [currentManeuverIndex, setCurrentManeuverIndex] = useState(0);
  const [distanceToTurnMeters, setDistanceToTurnMeters] = useState(0);
  const [totalDistanceMeters, setTotalDistanceMeters] = useState(0);
  const [totalDurationSeconds, setTotalDurationSeconds] = useState(0);
  const [isRouting, setIsRouting] = useState(false);
  const [routingError, setRoutingError] = useState<string | null>(null);
  const [hasUturn, setHasUturn] = useState<boolean>(false);

  // Simulation mode
  const [isSimulating, setIsSimulating] = useState(false);
  const simulationRef = useRef<number | null>(null);
  const simProgressRef = useRef(0);

  const lastRoutedCoords = useRef<{
    startLat: number;
    startLon: number;
    destLat: number;
    destLon: number;
  } | null>(null);

  const lastRerouteTimestamp = useRef<number>(0);

  // Determine starting point: live GPS if valid, else previous stop, else realistic offset
  const getStartPoint = useCallback((): { lat: number; lon: number; heading: number | null } | null => {
    if (userLocation && isValidCoordinate(userLocation.lat, userLocation.lon)) {
      return { 
        lat: userLocation.lat, 
        lon: userLocation.lon, 
        heading: userLocation.heading ?? null 
      };
    }
    if (previousStop && isValidCoordinate(previousStop.lat, previousStop.lon)) {
      return { 
        lat: previousStop.lat, 
        lon: previousStop.lon, 
        heading: null 
      };
    }
    if (currentStop && isValidCoordinate(currentStop.lat, currentStop.lon)) {
      return { 
        lat: currentStop.lat - 0.005, 
        lon: currentStop.lon - 0.004, 
        heading: 45 
      };
    }
    return null;
  }, [userLocation, previousStop, currentStop]);

  // Fetch actual OSRM road route
  const fetchRoute = useCallback(async (forced = false) => {
    if (!currentStop || !isValidCoordinate(currentStop.lat, currentStop.lon)) {
      setManeuvers([]);
      setRouteCoordinates([]);
      return;
    }

    const start = getStartPoint();
    if (!start) return;

    if (!forced && lastRoutedCoords.current) {
      const distStart = calculateDistanceMeters(
        start.lat, start.lon,
        lastRoutedCoords.current.startLat, lastRoutedCoords.current.startLon
      );
      const distDest = calculateDistanceMeters(
        currentStop.lat, currentStop.lon,
        lastRoutedCoords.current.destLat, lastRoutedCoords.current.destLon
      );
      if (distStart < 50 && distDest < 20 && maneuvers.length > 0) {
        return;
      }
    }

    setIsRouting(true);
    setRoutingError(null);

    try {
      const route = await fetchOsmRoute(
        start.lat,
        start.lon,
        currentStop.lat,
        currentStop.lon,
        currentStop.name,
        start.heading
      );

      if (route.maneuvers.length > 0) {
        setManeuvers(route.maneuvers);
        setRouteCoordinates(route.coordinates);
        setCurrentManeuverIndex(0);
        setTotalDistanceMeters(route.totalDistance);
        setTotalDurationSeconds(route.totalDuration);
        setDistanceToTurnMeters(route.maneuvers[0]?.distanceMeters || 0);
        setHasUturn(route.hasUturn);

        lastRoutedCoords.current = {
          startLat: start.lat,
          startLon: start.lon,
          destLat: currentStop.lat,
          destLon: currentStop.lon,
        };
        lastRerouteTimestamp.current = Date.now();
      }
    } catch (err: any) {
      console.warn('Road routing error:', err);
      setRoutingError(err.message || 'Routing unavailable');
    } finally {
      setIsRouting(false);
    }
  }, [currentStop, getStartPoint, maneuvers.length]);

  // Initial route fetch on stop change
  useEffect(() => {
    simProgressRef.current = 0;
    setCurrentManeuverIndex(0);
    lastRoutedCoords.current = null;
    fetchRoute();
  }, [currentStop?.id, currentStop?.lat, currentStop?.lon]);

  // Live vehicle progress update and off-route recalculation
  useEffect(() => {
    if (isSimulating || maneuvers.length === 0 || !userLocation) return;

    const currentM = maneuvers[currentManeuverIndex];
    if (!currentM) return;

    // Check if off-route from polyline (> 45m away)
    const now = Date.now();
    if (routeCoordinates.length > 1 && now - lastRerouteTimestamp.current > 4000) {
      const distToPolyline = calculateDistanceToPolylineMeters(userLocation.lat, userLocation.lon, routeCoordinates);
      if (distToPolyline > 45) {
        fetchRoute(true);
        return;
      }
    }

    // Calculate real distance to current maneuver waypoint
    const [turnLon, turnLat] = currentM.location;
    const distToManeuver = calculateDistanceMeters(userLocation.lat, userLocation.lon, turnLat, turnLon);

    // If within 25 meters (80 ft) of turn point, advance to next maneuver
    if (distToManeuver < 25 && currentManeuverIndex < maneuvers.length - 1) {
      setCurrentManeuverIndex((idx) => idx + 1);
      const nextM = maneuvers[currentManeuverIndex + 1];
      setDistanceToTurnMeters(nextM ? nextM.distanceMeters : 0);
    } else {
      setDistanceToTurnMeters(Math.max(0, Math.round(distToManeuver)));
    }
  }, [userLocation, maneuvers, currentManeuverIndex, isSimulating, routeCoordinates, fetchRoute]);

  // Simulation timer
  useEffect(() => {
    if (!isSimulating || maneuvers.length === 0) {
      if (simulationRef.current) {
        window.clearInterval(simulationRef.current);
        simulationRef.current = null;
      }
      return;
    }

    let currentDist = maneuvers[currentManeuverIndex]?.distanceMeters || 300;
    setDistanceToTurnMeters(currentDist);

    simulationRef.current = window.setInterval(() => {
      currentDist -= 20;
      if (currentDist <= 20) {
        setCurrentManeuverIndex((prev) => {
          if (prev >= maneuvers.length - 1) {
            setIsSimulating(false);
            return prev;
          }
          const nextIdx = prev + 1;
          currentDist = maneuvers[nextIdx]?.distanceMeters || 200;
          return nextIdx;
        });
      }
      setDistanceToTurnMeters(Math.max(10, currentDist));
      setTotalDistanceMeters((tot) => Math.max(0, tot - 20));
      setTotalDurationSeconds((dur) => Math.max(0, dur - 1.5));
    }, 800);

    return () => {
      if (simulationRef.current) {
        window.clearInterval(simulationRef.current);
      }
    };
  }, [isSimulating, maneuvers, currentManeuverIndex]);

  const toggleSimulation = useCallback(() => {
    setIsSimulating((s) => !s);
  }, []);

  const restartRoute = useCallback(() => {
    simProgressRef.current = 0;
    setCurrentManeuverIndex(0);
    if (maneuvers.length > 0) {
      setDistanceToTurnMeters(maneuvers[0].distanceMeters);
    }
  }, [maneuvers]);

  const recalculate = useCallback(() => {
    fetchRoute(true);
  }, [fetchRoute]);

  const currentM = maneuvers[currentManeuverIndex] || null;
  const nextM = maneuvers[currentManeuverIndex + 1] || null;

  return {
    currentManeuver: currentM,
    nextManeuver: nextM,
    maneuverIndex: currentManeuverIndex,
    totalManeuvers: maneuvers.length,
    distanceToTurnMeters,
    distanceToTurnFormatted: formatDistance(distanceToTurnMeters),
    totalDistanceMeters,
    totalDistanceFormatted: formatDistance(totalDistanceMeters),
    totalDurationSeconds,
    totalDurationFormatted: formatDuration(totalDurationSeconds),
    isRouting,
    routingError,
    hasUturn,
    isSimulating,
    toggleSimulation,
    restartRoute,
    recalculate,
  };
}
`,zt=`/**
 * Tactile haptic feedback for Samsung Android devices and browsers
 */
export function triggerHaptic(type: 'tap' | 'skip' | 'next' | 'undo' | 'complete' = 'tap') {
  if (typeof window === 'undefined') return;

  // 1. Prefer native Android Bridge if running inside Android APK wrapper
  try {
    const androidBridge = (window as any).AndroidBridge;
    if (androidBridge && typeof androidBridge.vibrate === 'function') {
      androidBridge.vibrate(type);
      return;
    }
  } catch (err) {
    // Non-blocking
  }

  // 2. Web browser fallback with navigator.vibrate
  if (!('vibrate' in navigator)) return;

  try {
    switch (type) {
      case 'skip':
        navigator.vibrate([60, 40, 80]);
        break;
      case 'next':
        navigator.vibrate(45);
        break;
      case 'undo':
        navigator.vibrate([30, 30, 30]);
        break;
      case 'complete':
        navigator.vibrate([100, 50, 100, 50, 150]);
        break;
      case 'tap':
      default:
        navigator.vibrate(30);
        break;
    }
  } catch (err) {
    // Graceful fallback
  }
}

import { NavManeuver } from './navigationService';

/**
 * Coordinated Speech Queue & Manager
 * Prevents overlapping speech, prevents turn warnings from cutting off
 * customer announcements, and drops obsolete instructions on reroute.
 */
interface SpeechItem {
  id: string;
  text: string;
  priority: 'high' | 'normal';
  createdAt: number;
  maxAgeMs: number;
}

class SpeechCoordinator {
  private queue: SpeechItem[] = [];
  private isSpeaking = false;
  private currentPriority: 'high' | 'normal' | null = null;
  private safetyTimer: any = null;
  private activeUtterance: SpeechSynthesisUtterance | null = null;
  private lastSpokenText = '';
  private lastSpokenTime = 0;

  public speak(item: SpeechItem) {
    const now = Date.now();

    // Prevent immediate duplicate speech within 6 seconds
    if (this.lastSpokenText === item.text && now - this.lastSpokenTime < 6000) {
      return;
    }

    if (item.priority === 'high') {
      // High priority (Customer arrival, next customer, turnaround)
      // Discard any queued lower-priority turn announcements so they don't delay customer info
      this.queue = this.queue.filter((q) => q.priority === 'high');

      // If currently speaking a normal priority turn, stop it immediately
      if (this.isSpeaking && this.currentPriority === 'normal') {
        this.stopCurrent();
      }

      // Add to front of queue
      this.queue.unshift(item);
    } else {
      // Normal priority (Upcoming turn warning)
      // Discard expired items
      this.queue = this.queue.filter((q) => now - q.createdAt < q.maxAgeMs);
      if (this.queue.length >= 2) {
        // Drop oldest normal priority item
        const normalIdx = this.queue.findIndex((q) => q.priority === 'normal');
        if (normalIdx >= 0) this.queue.splice(normalIdx, 1);
      }
      this.queue.push(item);
    }

    this.processQueue();
  }

  public cancelNormalPriority() {
    this.queue = this.queue.filter((item) => item.priority === 'high');
    if (this.isSpeaking && this.currentPriority === 'normal') {
      this.stopCurrent();
    }
  }

  private stopCurrent() {
    if (this.safetyTimer) {
      clearTimeout(this.safetyTimer);
      this.safetyTimer = null;
    }
    this.isSpeaking = false;
    this.currentPriority = null;
    this.activeUtterance = null;

    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      try {
        window.speechSynthesis.cancel();
      } catch (e) {}
    }
  }

  private processQueue() {
    if (this.isSpeaking) return;
    if (this.queue.length === 0) return;

    const now = Date.now();
    // Drop expired items
    while (this.queue.length > 0 && now - this.queue[0].createdAt > this.queue[0].maxAgeMs) {
      this.queue.shift();
    }
    if (this.queue.length === 0) return;

    const item = this.queue.shift()!;
    this.executeSpeak(item);
  }

  private executeSpeak(item: SpeechItem) {
    this.isSpeaking = true;
    this.currentPriority = item.priority;
    this.lastSpokenText = item.text;
    this.lastSpokenTime = Date.now();

    // 1. Android Bridge TTS (native wrapper)
    try {
      const androidBridge = (window as any).AndroidBridge;
      if (androidBridge && typeof androidBridge.speak === 'function') {
        androidBridge.speak(item.text);
        const wordCount = item.text.split(/\\s+/).length;
        const estimatedDurationMs = Math.max(1200, wordCount * 360);
        this.safetyTimer = setTimeout(() => {
          this.isSpeaking = false;
          this.currentPriority = null;
          this.processQueue();
        }, estimatedDurationMs);
        return;
      }
    } catch (e) {
      // Fall through to Web Speech API
    }

    // 2. Web browser fallback with SpeechSynthesis
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
      this.isSpeaking = false;
      this.currentPriority = null;
      return;
    }

    try {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(item.text);
      utterance.rate = 1.05;
      utterance.pitch = 1.0;
      utterance.volume = 1.0;

      const finish = () => {
        if (this.safetyTimer) {
          clearTimeout(this.safetyTimer);
          this.safetyTimer = null;
        }
        this.isSpeaking = false;
        this.currentPriority = null;
        this.activeUtterance = null;
        // Small 200ms pause between utterances
        setTimeout(() => {
          this.processQueue();
        }, 200);
      };

      utterance.onend = finish;
      utterance.onerror = finish;

      // Chrome safety timeout in case onend fails to fire
      const wordCount = item.text.split(/\\s+/).length;
      const maxDurationMs = Math.max(2500, wordCount * 500);
      this.safetyTimer = setTimeout(finish, maxDurationMs);

      this.activeUtterance = utterance;
      window.speechSynthesis.speak(utterance);
    } catch (err) {
      this.isSpeaking = false;
      this.currentPriority = null;
      this.activeUtterance = null;
    }
  }
}

const speechCoordinator = new SpeechCoordinator();

/**
 * Formats advance turn warning at distance (e.g. ~500 ft).
 * Examples:
 * - "Turn left in 500 feet."
 * - "Turn right in 500 feet."
 * - "Bear slightly left in 500 feet."
 * - "Make a sharp right in 500 feet."
 * - "Keep left at fork in 500 feet."
 * - "Enter roundabout in 500 feet."
 * - "Turn left at end of road in 500 feet."
 * - "Take ramp in 500 feet."
 * - "Merge left in 500 feet."
 * - "Continue straight in 500 feet."
 * - "Turn around as soon as possible."
 */
export function formatManeuverAdvanceWarning(maneuver: NavManeuver, distanceFeet: number = 500): string {
  if (!maneuver) return '';
  const mod = (maneuver.modifier || '').toLowerCase().trim();
  const type = (maneuver.type || '').toLowerCase().trim();
  const rawStreet = (maneuver.streetName || '').trim();
  const hasStreet = rawStreet.length > 0 && !rawStreet.toLowerCase().startsWith('unnamed');
  const street = hasStreet ? rawStreet : '';

  // Turnaround maneuver
  if (mod.includes('uturn') || mod.includes('turnaround') || type === 'turnaround') {
    return 'Turn around as soon as possible.';
  }

  // Roundabout / Rotary
  if (type === 'roundabout' || type === 'rotary') {
    return street
      ? \`Enter roundabout toward \${street} in \${distanceFeet} feet.\`
      : \`Enter roundabout in \${distanceFeet} feet.\`;
  }

  // Fork
  if (type === 'fork') {
    const side = mod.includes('left') ? 'left' : 'right';
    return street
      ? \`Keep \${side} at fork onto \${street} in \${distanceFeet} feet.\`
      : \`Keep \${side} at fork in \${distanceFeet} feet.\`;
  }

  // End of road
  if (type === 'end of road') {
    const side = mod.includes('left') ? 'left' : 'right';
    return street
      ? \`Turn \${side} at end of road onto \${street} in \${distanceFeet} feet.\`
      : \`Turn \${side} at end of road in \${distanceFeet} feet.\`;
  }

  // Ramp / Merge
  if (type === 'ramp' || type === 'on ramp' || type === 'off ramp') {
    return street
      ? \`Take ramp onto \${street} in \${distanceFeet} feet.\`
      : \`Take ramp in \${distanceFeet} feet.\`;
  }

  if (type === 'merge') {
    const side = mod.includes('left') ? 'left' : 'right';
    return street
      ? \`Merge \${side} onto \${street} in \${distanceFeet} feet.\`
      : \`Merge \${side} in \${distanceFeet} feet.\`;
  }

  // Standard turns based strictly on actual maneuver modifier
  switch (mod) {
    case 'right':
      return street
        ? \`Turn right onto \${street} in \${distanceFeet} feet.\`
        : \`Turn right in \${distanceFeet} feet.\`;
    case 'left':
      return street
        ? \`Turn left onto \${street} in \${distanceFeet} feet.\`
        : \`Turn left in \${distanceFeet} feet.\`;
    case 'slight right':
      return street
        ? \`Bear slightly right onto \${street} in \${distanceFeet} feet.\`
        : \`Bear slightly right in \${distanceFeet} feet.\`;
    case 'slight left':
      return street
        ? \`Bear slightly left onto \${street} in \${distanceFeet} feet.\`
        : \`Bear slightly left in \${distanceFeet} feet.\`;
    case 'sharp right':
      return street
        ? \`Make a sharp right onto \${street} in \${distanceFeet} feet.\`
        : \`Make a sharp right in \${distanceFeet} feet.\`;
    case 'sharp left':
      return street
        ? \`Make a sharp left onto \${street} in \${distanceFeet} feet.\`
        : \`Make a sharp left in \${distanceFeet} feet.\`;
    case 'straight':
      return street
        ? \`Continue straight on \${street} in \${distanceFeet} feet.\`
        : \`Continue straight in \${distanceFeet} feet.\`;
    default:
      if (type === 'turn') {
        return street
          ? \`Turn onto \${street} in \${distanceFeet} feet.\`
          : \`Turn ahead in \${distanceFeet} feet.\`;
      }
      return '';
  }
}

/**
 * Formats closer direct maneuver instruction (no distance spoken).
 * Examples:
 * - "Turn left."
 * - "Turn right."
 * - "Bear slightly left."
 * - "Make a sharp right."
 * - "Keep left at the fork."
 * - "Enter roundabout."
 * - "Turn left at the end of the road."
 * - "Take the ramp."
 * - "Merge left."
 * - "Continue straight."
 */
export function formatManeuverDirectInstruction(maneuver: NavManeuver): string {
  if (!maneuver) return '';
  const mod = (maneuver.modifier || '').toLowerCase().trim();
  const type = (maneuver.type || '').toLowerCase().trim();
  const rawStreet = (maneuver.streetName || '').trim();
  const hasStreet = rawStreet.length > 0 && !rawStreet.toLowerCase().startsWith('unnamed');
  const street = hasStreet ? rawStreet : '';

  // Turnaround maneuver
  if (mod.includes('uturn') || mod.includes('turnaround') || type === 'turnaround') {
    return 'Turn around as soon as possible.';
  }

  // Roundabout / Rotary
  if (type === 'roundabout' || type === 'rotary') {
    return street ? \`Enter roundabout toward \${street}.\` : 'Enter roundabout.';
  }

  // Fork
  if (type === 'fork') {
    const side = mod.includes('left') ? 'left' : 'right';
    return street ? \`Keep \${side} at fork onto \${street}.\` : \`Keep \${side} at fork.\`;
  }

  // End of road
  if (type === 'end of road') {
    const side = mod.includes('left') ? 'left' : 'right';
    return street ? \`Turn \${side} at end of road onto \${street}.\` : \`Turn \${side} at end of road.\`;
  }

  // Ramp / Merge
  if (type === 'ramp' || type === 'on ramp' || type === 'off ramp') {
    return street ? \`Take ramp onto \${street}.\` : 'Take ramp.';
  }

  if (type === 'merge') {
    const side = mod.includes('left') ? 'left' : 'right';
    return street ? \`Merge \${side} onto \${street}.\` : \`Merge \${side}.\`;
  }

  // Standard turns based strictly on actual maneuver modifier
  switch (mod) {
    case 'right':
      return street ? \`Turn right onto \${street}.\` : 'Turn right.';
    case 'left':
      return street ? \`Turn left onto \${street}.\` : 'Turn left.';
    case 'slight right':
      return street ? \`Bear slightly right onto \${street}.\` : 'Bear slightly right.';
    case 'slight left':
      return street ? \`Bear slightly left onto \${street}.\` : 'Bear slightly left.';
    case 'sharp right':
      return street ? \`Make a sharp right onto \${street}.\` : 'Make a sharp right.';
    case 'sharp left':
      return street ? \`Make a sharp left onto \${street}.\` : 'Make a sharp left.';
    case 'straight':
      return street ? \`Continue straight on \${street}.\` : 'Continue straight.';
    default:
      if (type === 'turn') {
        return street ? \`Turn onto \${street}.\` : 'Turn.';
      }
      return '';
  }
}

/**
 * Universal formatting function (preserves backwards compatibility)
 */
export function formatManeuverSpokenText(maneuver: NavManeuver, distanceFeet?: number): string {
  if (typeof distanceFeet === 'number' && distanceFeet > 180) {
    return formatManeuverAdvanceWarning(maneuver, distanceFeet);
  }
  return formatManeuverDirectInstruction(maneuver);
}

/**
 * Checks whether a NavManeuver is a spoken road turn
 */
export function isTurnManeuver(m: NavManeuver): boolean {
  if (!m) return false;
  const t = (m.type || '').toLowerCase();
  const mod = (m.modifier || '').toLowerCase();
  if (t === 'arrive' || t === 'depart') return false;
  if (mod.includes('left') || mod.includes('right') || mod.includes('uturn') || mod.includes('turnaround')) return true;
  if (t === 'turn' || t === 'fork' || t === 'roundabout' || t === 'rotary' || t === 'end of road' || t === 'merge' || t === 'ramp') return true;
  return false;
}

const DIGIT_WORDS: Record<string, string> = {
  '0': 'zero',
  '1': 'one',
  '2': 'two',
  '3': 'three',
  '4': 'four',
  '5': 'five',
  '6': 'six',
  '7': 'seven',
  '8': 'eight',
  '9': 'nine',
};

/**
 * Converts a house number into digit-by-digit spoken words.
 * Examples:
 * - "6921" -> "six nine two one"
 * - "6589" -> "six five eight nine"
 * - "179" -> "one seven nine"
 * - "6633" -> "six six three three"
 * - "007" -> "zero zero seven"
 * Preserves leading zeros and speaks letter suffixes (e.g. "1402-B" -> "one four zero two B").
 */
export function formatHouseNumberForSpeech(houseNumber: string | undefined | null): string {
  if (!houseNumber) return '';
  const trimmed = houseNumber.trim();
  if (!trimmed || trimmed === '—' || trimmed.toLowerCase() === 'n/a') return '';

  const words: string[] = [];
  for (const char of trimmed) {
    if (DIGIT_WORDS[char]) {
      words.push(DIGIT_WORDS[char]);
    } else if (/[a-zA-Z]/.test(char)) {
      words.push(char.toUpperCase());
    }
  }

  return words.join(' ');
}

/**
 * Text-to-speech announcement for hands-free driving
 * Concise customer-transition announcement: "Next customer, [Name], [digit-by-digit house number]."
 * Examples:
 * - "Next customer, John Smith, six nine two one."
 * - "Next customer, Randi Hickman II, six five eight nine."
 * If house number is unavailable: "Next customer, [Name]."
 * Does NOT announce stop numbers, customer indices, or full street addresses.
 */
export function announceStop(customerName: string, houseNumber?: string, _deprecatedStreetName?: string) {
  if (typeof window === 'undefined') return;

  // Clean customer name to ensure no stop sequence prefix (e.g. "002 - ", "Stop 24 | ", "Customer 24: ") is spoken
  let cleanName = (customerName || '').trim();
  cleanName = cleanName.replace(/^(?:stop\\s*#?\\d+\\s*[-:–—|]\\s*|#?0+\\d+\\s*[-:–—|]\\s*)/i, '').trim();
  cleanName = cleanName.replace(/^(?:customer\\s*#?\\d+\\s*[-:–—|:]\\s*)/i, '').trim();

  // Convert house number to individual digit-by-digit spoken words (e.g. "6589" -> "six five eight nine", "007" -> "zero zero seven")
  const spokenHouse = formatHouseNumberForSpeech(houseNumber);

  let text = '';
  if (cleanName && spokenHouse) {
    text = \`Next customer, \${cleanName}, \${spokenHouse}.\`;
  } else if (cleanName) {
    text = \`Next customer, \${cleanName}.\`;
  } else if (spokenHouse) {
    text = \`Next customer, \${spokenHouse}.\`;
  } else {
    text = 'Next customer.';
  }

  speechCoordinator.speak({
    id: \`stop_\${Date.now()}\`,
    text,
    priority: 'high',
    createdAt: Date.now(),
    maxAgeMs: 15000,
  });
}

/**
 * Voice guidance for missed stops and turnaround maneuvers (HIGH priority)
 * Preferred exact wording: "Turn around as soon as possible."
 */
let lastTurnaroundSpokenTime = 0;

export function announceTurnaround() {
  if (typeof window === 'undefined') return;

  const now = Date.now();
  // Prevent repeating more than once every 12 seconds
  if (now - lastTurnaroundSpokenTime < 12000) return;
  lastTurnaroundSpokenTime = now;

  const text = 'Turn around as soon as possible.';

  speechCoordinator.speak({
    id: \`turnaround_\${now}\`,
    text,
    priority: 'high',
    createdAt: now,
    maxAgeMs: 8000,
  });
}

/**
 * Spoken voice announcement for advance turn warning with distance (e.g. ~500 ft)
 */
export function announceAdvanceTurn(maneuver: NavManeuver, distanceFeet: number = 500) {
  if (typeof window === 'undefined') return;

  const text = formatManeuverAdvanceWarning(maneuver, distanceFeet);
  if (!text) return;

  speechCoordinator.speak({
    id: \`turn_adv_\${distanceFeet}_\${Date.now()}\`,
    text,
    priority: 'normal',
    createdAt: Date.now(),
    maxAgeMs: 6000,
  });
}

/**
 * Spoken voice announcement for closer direct maneuver instruction (NO distance repeated)
 */
export function announceDirectTurn(maneuver: NavManeuver) {
  if (typeof window === 'undefined') return;

  const text = formatManeuverDirectInstruction(maneuver);
  if (!text) return;

  speechCoordinator.speak({
    id: \`turn_dir_\${Date.now()}\`,
    text,
    priority: 'normal',
    createdAt: Date.now(),
    maxAgeMs: 4000,
  });
}

/**
 * Universal announceTurn wrapper (backwards compatible)
 */
export function announceTurn(maneuver: NavManeuver, distanceFeet?: number) {
  if (typeof distanceFeet === 'number' && distanceFeet > 180) {
    announceAdvanceTurn(maneuver, distanceFeet);
  } else {
    announceDirectTurn(maneuver);
  }
}

/**
 * Cancel and flush upcoming turn announcements (e.g. on route recalculation or customer advance)
 */
export function cancelTurnAnnouncements() {
  speechCoordinator.cancelNormalPriority();
}

/**
 * Screen WakeLock manager to prevent screen from dimming/sleeping on phone mount
 */
let wakeLockSentinel: any = null;

export async function requestWakeLock(): Promise<boolean> {
  if (typeof window === 'undefined') return false;

  // If in Android native app, FLAG_KEEP_SCREEN_ON is already set on the Window
  if ((window as any).AndroidBridge) {
    return true;
  }

  if (!('wakeLock' in navigator)) {
    return false;
  }
  try {
    wakeLockSentinel = await (navigator as any).wakeLock.request('screen');
    wakeLockSentinel.addEventListener('release', () => {
      wakeLockSentinel = null;
    });
    return true;
  } catch (err) {
    return false;
  }
}

export function releaseWakeLock() {
  if (wakeLockSentinel) {
    try {
      wakeLockSentinel.release();
    } catch (e) {
      // ignore
    }
    wakeLockSentinel = null;
  }
}

/**
 * Generate navigation URIs for OsmAnd and standard Android map handlers
 */
export function getNavigationLinks(lat: number, lon: number, label: string) {
  const encodedLabel = encodeURIComponent(label || 'Customer Stop');
  
  // Standard geo URI (will open OsmAnd or default Android map app)
  const geoUri = \`geo:\${lat},\${lon}?q=\${lat},\${lon}(\${encodedLabel})\`;
  
  // OsmAnd direct intent URI
  const osmandUri = \`osmand.navigation:q=\${lat},\${lon}\`;
  
  // Google Maps fallback web link
  const gmapsUrl = \`https://www.google.com/maps/dir/?api=1&destination=\${lat},\${lon}\`;

  return { geoUri, osmandUri, gmapsUrl };
}
`,Bt=`{
  "compilerOptions": {
    "target": "ES2022",
    "experimentalDecorators": true,
    "useDefineForClassFields": false,
    "module": "ESNext",
    "types": ["vite/client"],
    "lib": [
      "ES2022",
      "DOM",
      "DOM.Iterable"
    ],
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "isolatedModules": true,
    "moduleDetection": "force",
    "allowJs": true,
    "jsx": "react-jsx",
    "paths": {
      "@/*": [
        "./*"
      ]
    },
    "allowImportingTsExtensions": true,
    "noEmit": true
  }
}
`,Vt=`import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';

export default defineConfig(() => {
  return {
    base: './',
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
`,Ht=c(o(((e,t)=>{(function(n){typeof e==`object`&&t!==void 0?t.exports=n():typeof define==`function`&&define.amd?define([],n):(typeof window<`u`?window:typeof global<`u`?global:typeof self<`u`?self:this).JSZip=n()})(function(){return function e(t,n,r){function i(o,s){if(!n[o]){if(!t[o]){var c=typeof l==`function`&&l;if(!s&&c)return c(o,!0);if(a)return a(o,!0);var u=Error(`Cannot find module '`+o+`'`);throw u.code=`MODULE_NOT_FOUND`,u}var d=n[o]={exports:{}};t[o][0].call(d.exports,function(e){var n=t[o][1][e];return i(n||e)},d,d.exports,e,t,n,r)}return n[o].exports}for(var a=typeof l==`function`&&l,o=0;o<r.length;o++)i(r[o]);return i}({1:[function(e,t,n){var r=e(`./utils`),i=e(`./support`),a=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=`;n.encode=function(e){for(var t,n,i,o,s,c,l,u=[],d=0,f=e.length,p=f,m=r.getTypeOf(e)!==`string`;d<e.length;)p=f-d,i=m?(t=e[d++],n=d<f?e[d++]:0,d<f?e[d++]:0):(t=e.charCodeAt(d++),n=d<f?e.charCodeAt(d++):0,d<f?e.charCodeAt(d++):0),o=t>>2,s=(3&t)<<4|n>>4,c=1<p?(15&n)<<2|i>>6:64,l=2<p?63&i:64,u.push(a.charAt(o)+a.charAt(s)+a.charAt(c)+a.charAt(l));return u.join(``)},n.decode=function(e){var t,n,r,o,s,c,l=0,u=0,d=`data:`;if(e.substr(0,d.length)===d)throw Error(`Invalid base64 input, it looks like a data url.`);var f,p=3*(e=e.replace(/[^A-Za-z0-9+/=]/g,``)).length/4;if(e.charAt(e.length-1)===a.charAt(64)&&p--,e.charAt(e.length-2)===a.charAt(64)&&p--,p%1!=0)throw Error(`Invalid base64 input, bad content length.`);for(f=i.uint8array?new Uint8Array(0|p):Array(0|p);l<e.length;)t=a.indexOf(e.charAt(l++))<<2|(o=a.indexOf(e.charAt(l++)))>>4,n=(15&o)<<4|(s=a.indexOf(e.charAt(l++)))>>2,r=(3&s)<<6|(c=a.indexOf(e.charAt(l++))),f[u++]=t,s!==64&&(f[u++]=n),c!==64&&(f[u++]=r);return f}},{"./support":30,"./utils":32}],2:[function(e,t,n){var r=e(`./external`),i=e(`./stream/DataWorker`),a=e(`./stream/Crc32Probe`),o=e(`./stream/DataLengthProbe`);function s(e,t,n,r,i){this.compressedSize=e,this.uncompressedSize=t,this.crc32=n,this.compression=r,this.compressedContent=i}s.prototype={getContentWorker:function(){var e=new i(r.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new o(`data_length`)),t=this;return e.on(`end`,function(){if(this.streamInfo.data_length!==t.uncompressedSize)throw Error(`Bug : uncompressed data size mismatch`)}),e},getCompressedWorker:function(){return new i(r.Promise.resolve(this.compressedContent)).withStreamInfo(`compressedSize`,this.compressedSize).withStreamInfo(`uncompressedSize`,this.uncompressedSize).withStreamInfo(`crc32`,this.crc32).withStreamInfo(`compression`,this.compression)}},s.createWorkerFrom=function(e,t,n){return e.pipe(new a).pipe(new o(`uncompressedSize`)).pipe(t.compressWorker(n)).pipe(new o(`compressedSize`)).withStreamInfo(`compression`,t)},t.exports=s},{"./external":6,"./stream/Crc32Probe":25,"./stream/DataLengthProbe":26,"./stream/DataWorker":27}],3:[function(e,t,n){var r=e(`./stream/GenericWorker`);n.STORE={magic:`\0\0`,compressWorker:function(){return new r(`STORE compression`)},uncompressWorker:function(){return new r(`STORE decompression`)}},n.DEFLATE=e(`./flate`)},{"./flate":7,"./stream/GenericWorker":28}],4:[function(e,t,n){var r=e(`./utils`),i=function(){for(var e,t=[],n=0;n<256;n++){e=n;for(var r=0;r<8;r++)e=1&e?3988292384^e>>>1:e>>>1;t[n]=e}return t}();t.exports=function(e,t){return e!==void 0&&e.length?r.getTypeOf(e)===`string`?function(e,t,n,r){var a=i,o=r+n;e^=-1;for(var s=r;s<o;s++)e=e>>>8^a[255&(e^t.charCodeAt(s))];return-1^e}(0|t,e,e.length,0):function(e,t,n,r){var a=i,o=r+n;e^=-1;for(var s=r;s<o;s++)e=e>>>8^a[255&(e^t[s])];return-1^e}(0|t,e,e.length,0):0}},{"./utils":32}],5:[function(e,t,n){n.base64=!1,n.binary=!1,n.dir=!1,n.createFolders=!0,n.date=null,n.compression=null,n.compressionOptions=null,n.comment=null,n.unixPermissions=null,n.dosPermissions=null},{}],6:[function(e,t,n){var r=null;r=typeof Promise<`u`?Promise:e(`lie`),t.exports={Promise:r}},{lie:37}],7:[function(e,t,n){var r=typeof Uint8Array<`u`&&typeof Uint16Array<`u`&&typeof Uint32Array<`u`,i=e(`pako`),a=e(`./utils`),o=e(`./stream/GenericWorker`),s=r?`uint8array`:`array`;function c(e,t){o.call(this,`FlateWorker/`+e),this._pako=null,this._pakoAction=e,this._pakoOptions=t,this.meta={}}n.magic=`\b\0`,a.inherits(c,o),c.prototype.processChunk=function(e){this.meta=e.meta,this._pako===null&&this._createPako(),this._pako.push(a.transformTo(s,e.data),!1)},c.prototype.flush=function(){o.prototype.flush.call(this),this._pako===null&&this._createPako(),this._pako.push([],!0)},c.prototype.cleanUp=function(){o.prototype.cleanUp.call(this),this._pako=null},c.prototype._createPako=function(){this._pako=new i[this._pakoAction]({raw:!0,level:this._pakoOptions.level||-1});var e=this;this._pako.onData=function(t){e.push({data:t,meta:e.meta})}},n.compressWorker=function(e){return new c(`Deflate`,e)},n.uncompressWorker=function(){return new c(`Inflate`,{})}},{"./stream/GenericWorker":28,"./utils":32,pako:38}],8:[function(e,t,n){function r(e,t){var n,r=``;for(n=0;n<t;n++)r+=String.fromCharCode(255&e),e>>>=8;return r}function i(e,t,n,i,o,u){var d,f,p=e.file,m=e.compression,h=u!==s.utf8encode,g=a.transformTo(`string`,u(p.name)),_=a.transformTo(`string`,s.utf8encode(p.name)),v=p.comment,y=a.transformTo(`string`,u(v)),b=a.transformTo(`string`,s.utf8encode(v)),x=_.length!==p.name.length,S=b.length!==v.length,C=``,w=``,T=``,E=p.dir,D=p.date,O={crc32:0,compressedSize:0,uncompressedSize:0};t&&!n||(O.crc32=e.crc32,O.compressedSize=e.compressedSize,O.uncompressedSize=e.uncompressedSize);var k=0;t&&(k|=8),h||!x&&!S||(k|=2048);var A=0,j=0;E&&(A|=16),o===`UNIX`?(j=798,A|=function(e,t){var n=e;return e||(n=t?16893:33204),(65535&n)<<16}(p.unixPermissions,E)):(j=20,A|=function(e){return 63&(e||0)}(p.dosPermissions)),d=D.getUTCHours(),d<<=6,d|=D.getUTCMinutes(),d<<=5,d|=D.getUTCSeconds()/2,f=D.getUTCFullYear()-1980,f<<=4,f|=D.getUTCMonth()+1,f<<=5,f|=D.getUTCDate(),x&&(w=r(1,1)+r(c(g),4)+_,C+=`up`+r(w.length,2)+w),S&&(T=r(1,1)+r(c(y),4)+b,C+=`uc`+r(T.length,2)+T);var M=``;return M+=`
\0`,M+=r(k,2),M+=m.magic,M+=r(d,2),M+=r(f,2),M+=r(O.crc32,4),M+=r(O.compressedSize,4),M+=r(O.uncompressedSize,4),M+=r(g.length,2),M+=r(C.length,2),{fileRecord:l.LOCAL_FILE_HEADER+M+g+C,dirRecord:l.CENTRAL_FILE_HEADER+r(j,2)+M+r(y.length,2)+`\0\0\0\0`+r(A,4)+r(i,4)+g+C+y}}var a=e(`../utils`),o=e(`../stream/GenericWorker`),s=e(`../utf8`),c=e(`../crc32`),l=e(`../signature`);function u(e,t,n,r){o.call(this,`ZipFileWorker`),this.bytesWritten=0,this.zipComment=t,this.zipPlatform=n,this.encodeFileName=r,this.streamFiles=e,this.accumulate=!1,this.contentBuffer=[],this.dirRecords=[],this.currentSourceOffset=0,this.entriesCount=0,this.currentFile=null,this._sources=[]}a.inherits(u,o),u.prototype.push=function(e){var t=e.meta.percent||0,n=this.entriesCount,r=this._sources.length;this.accumulate?this.contentBuffer.push(e):(this.bytesWritten+=e.data.length,o.prototype.push.call(this,{data:e.data,meta:{currentFile:this.currentFile,percent:n?(t+100*(n-r-1))/n:100}}))},u.prototype.openedSource=function(e){this.currentSourceOffset=this.bytesWritten,this.currentFile=e.file.name;var t=this.streamFiles&&!e.file.dir;if(t){var n=i(e,t,!1,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);this.push({data:n.fileRecord,meta:{percent:0}})}else this.accumulate=!0},u.prototype.closedSource=function(e){this.accumulate=!1;var t=this.streamFiles&&!e.file.dir,n=i(e,t,!0,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);if(this.dirRecords.push(n.dirRecord),t)this.push({data:function(e){return l.DATA_DESCRIPTOR+r(e.crc32,4)+r(e.compressedSize,4)+r(e.uncompressedSize,4)}(e),meta:{percent:100}});else for(this.push({data:n.fileRecord,meta:{percent:0}});this.contentBuffer.length;)this.push(this.contentBuffer.shift());this.currentFile=null},u.prototype.flush=function(){for(var e=this.bytesWritten,t=0;t<this.dirRecords.length;t++)this.push({data:this.dirRecords[t],meta:{percent:100}});var n=this.bytesWritten-e,i=function(e,t,n,i,o){var s=a.transformTo(`string`,o(i));return l.CENTRAL_DIRECTORY_END+`\0\0\0\0`+r(e,2)+r(e,2)+r(t,4)+r(n,4)+r(s.length,2)+s}(this.dirRecords.length,n,e,this.zipComment,this.encodeFileName);this.push({data:i,meta:{percent:100}})},u.prototype.prepareNextSource=function(){this.previous=this._sources.shift(),this.openedSource(this.previous.streamInfo),this.isPaused?this.previous.pause():this.previous.resume()},u.prototype.registerPrevious=function(e){this._sources.push(e);var t=this;return e.on(`data`,function(e){t.processChunk(e)}),e.on(`end`,function(){t.closedSource(t.previous.streamInfo),t._sources.length?t.prepareNextSource():t.end()}),e.on(`error`,function(e){t.error(e)}),this},u.prototype.resume=function(){return!!o.prototype.resume.call(this)&&(!this.previous&&this._sources.length?(this.prepareNextSource(),!0):this.previous||this._sources.length||this.generatedError?void 0:(this.end(),!0))},u.prototype.error=function(e){var t=this._sources;if(!o.prototype.error.call(this,e))return!1;for(var n=0;n<t.length;n++)try{t[n].error(e)}catch{}return!0},u.prototype.lock=function(){o.prototype.lock.call(this);for(var e=this._sources,t=0;t<e.length;t++)e[t].lock()},t.exports=u},{"../crc32":4,"../signature":23,"../stream/GenericWorker":28,"../utf8":31,"../utils":32}],9:[function(e,t,n){var r=e(`../compressions`),i=e(`./ZipFileWorker`);n.generateWorker=function(e,t,n){var a=new i(t.streamFiles,n,t.platform,t.encodeFileName),o=0;try{e.forEach(function(e,n){o++;var i=function(e,t){var n=e||t,i=r[n];if(!i)throw Error(n+` is not a valid compression method !`);return i}(n.options.compression,t.compression),s=n.options.compressionOptions||t.compressionOptions||{},c=n.dir,l=n.date;n._compressWorker(i,s).withStreamInfo(`file`,{name:e,dir:c,date:l,comment:n.comment||``,unixPermissions:n.unixPermissions,dosPermissions:n.dosPermissions}).pipe(a)}),a.entriesCount=o}catch(e){a.error(e)}return a}},{"../compressions":3,"./ZipFileWorker":8}],10:[function(e,t,n){function r(){if(!(this instanceof r))return new r;if(arguments.length)throw Error(`The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.`);this.files=Object.create(null),this.comment=null,this.root=``,this.clone=function(){var e=new r;for(var t in this)typeof this[t]!=`function`&&(e[t]=this[t]);return e}}(r.prototype=e(`./object`)).loadAsync=e(`./load`),r.support=e(`./support`),r.defaults=e(`./defaults`),r.version=`3.10.2`,r.loadAsync=function(e,t){return new r().loadAsync(e,t)},r.external=e(`./external`),t.exports=r},{"./defaults":5,"./external":6,"./load":11,"./object":15,"./support":30}],11:[function(e,t,n){var r=e(`./utils`),i=e(`./external`),a=e(`./utf8`),o=e(`./zipEntries`),s=e(`./stream/Crc32Probe`),c=e(`./nodejsUtils`);function l(e){return new i.Promise(function(t,n){var r=e.decompressed.getContentWorker().pipe(new s);r.on(`error`,function(e){n(e)}).on(`end`,function(){r.streamInfo.crc32===e.decompressed.crc32?t():n(Error(`Corrupted zip : CRC32 mismatch`))}).resume()})}t.exports=function(e,t){var n=this;return t=r.extend(t||{},{base64:!1,checkCRC32:!1,optimizedBinaryString:!1,createFolders:!1,decodeFileName:a.utf8decode}),c.isNode&&c.isStream(e)?i.Promise.reject(Error(`JSZip can't accept a stream when loading a zip file.`)):r.prepareContent(`the loaded zip file`,e,!0,t.optimizedBinaryString,t.base64).then(function(e){var n=new o(t);return n.load(e),n}).then(function(e){var n=[i.Promise.resolve(e)],r=e.files;if(t.checkCRC32)for(var a=0;a<r.length;a++)n.push(l(r[a]));return i.Promise.all(n)}).then(function(e){for(var i=e.shift(),a=i.files,o=0;o<a.length;o++){var s=a[o],c=s.fileNameStr,l=r.resolve(s.fileNameStr);n.file(l,s.decompressed,{binary:!0,optimizedBinaryString:!0,date:s.date,dir:s.dir,comment:s.fileCommentStr.length?s.fileCommentStr:null,unixPermissions:s.unixPermissions,dosPermissions:s.dosPermissions,createFolders:t.createFolders}),s.dir||(n.file(l).unsafeOriginalName=c)}return i.zipComment.length&&(n.comment=i.zipComment),n})}},{"./external":6,"./nodejsUtils":14,"./stream/Crc32Probe":25,"./utf8":31,"./utils":32,"./zipEntries":33}],12:[function(e,t,n){var r=e(`../utils`),i=e(`../stream/GenericWorker`);function a(e,t){i.call(this,`Nodejs stream input adapter for `+e),this._upstreamEnded=!1,this._bindStream(t)}r.inherits(a,i),a.prototype._bindStream=function(e){var t=this;(this._stream=e).pause(),e.on(`data`,function(e){t.push({data:e,meta:{percent:0}})}).on(`error`,function(e){t.isPaused?this.generatedError=e:t.error(e)}).on(`end`,function(){t.isPaused?t._upstreamEnded=!0:t.end()})},a.prototype.pause=function(){return!!i.prototype.pause.call(this)&&(this._stream.pause(),!0)},a.prototype.resume=function(){return!!i.prototype.resume.call(this)&&(this._upstreamEnded?this.end():this._stream.resume(),!0)},t.exports=a},{"../stream/GenericWorker":28,"../utils":32}],13:[function(e,t,n){var r=e(`readable-stream`).Readable;function i(e,t,n){r.call(this,t),this._helper=e;var i=this;e.on(`data`,function(e,t){i.push(e)||i._helper.pause(),n&&n(t)}).on(`error`,function(e){i.emit(`error`,e)}).on(`end`,function(){i.push(null)})}e(`../utils`).inherits(i,r),i.prototype._read=function(){this._helper.resume()},t.exports=i},{"../utils":32,"readable-stream":16}],14:[function(e,t,n){t.exports={isNode:typeof Buffer<`u`,newBufferFrom:function(e,t){if(Buffer.from&&Buffer.from!==Uint8Array.from)return Buffer.from(e,t);if(typeof e==`number`)throw Error(`The "data" argument must not be a number`);return new Buffer(e,t)},allocBuffer:function(e){if(Buffer.alloc)return Buffer.alloc(e);var t=new Buffer(e);return t.fill(0),t},isBuffer:function(e){return Buffer.isBuffer(e)},isStream:function(e){return e&&typeof e.on==`function`&&typeof e.pause==`function`&&typeof e.resume==`function`}}},{}],15:[function(e,t,n){function r(e,t,n){var r,i=a.getTypeOf(t),s=a.extend(n||{},c);s.date=s.date||new Date,s.compression!==null&&(s.compression=s.compression.toUpperCase()),typeof s.unixPermissions==`string`&&(s.unixPermissions=parseInt(s.unixPermissions,8)),s.unixPermissions&&16384&s.unixPermissions&&(s.dir=!0),s.dosPermissions&&16&s.dosPermissions&&(s.dir=!0),s.dir&&(e=h(e)),s.createFolders&&(r=m(e))&&g.call(this,r,!0);var d=i===`string`&&!1===s.binary&&!1===s.base64;n&&n.binary!==void 0||(s.binary=!d),(t instanceof l&&t.uncompressedSize===0||s.dir||!t||t.length===0)&&(s.base64=!1,s.binary=!0,t=``,s.compression=`STORE`,i=`string`);var _=null;_=t instanceof l||t instanceof o?t:f.isNode&&f.isStream(t)?new p(e,t):a.prepareContent(e,t,s.binary,s.optimizedBinaryString,s.base64);var v=new u(e,_,s);this.files[e]=v}var i=e(`./utf8`),a=e(`./utils`),o=e(`./stream/GenericWorker`),s=e(`./stream/StreamHelper`),c=e(`./defaults`),l=e(`./compressedObject`),u=e(`./zipObject`),d=e(`./generate`),f=e(`./nodejsUtils`),p=e(`./nodejs/NodejsStreamInputAdapter`),m=function(e){e.slice(-1)===`/`&&(e=e.substring(0,e.length-1));var t=e.lastIndexOf(`/`);return 0<t?e.substring(0,t):``},h=function(e){return e.slice(-1)!==`/`&&(e+=`/`),e},g=function(e,t){return t=t===void 0?c.createFolders:t,e=h(e),this.files[e]||r.call(this,e,null,{dir:!0,createFolders:t}),this.files[e]};function _(e){return Object.prototype.toString.call(e)===`[object RegExp]`}t.exports={load:function(){throw Error(`This method has been removed in JSZip 3.0, please check the upgrade guide.`)},forEach:function(e){var t,n,r;for(t in this.files)r=this.files[t],(n=t.slice(this.root.length,t.length))&&t.slice(0,this.root.length)===this.root&&e(n,r)},filter:function(e){var t=[];return this.forEach(function(n,r){e(n,r)&&t.push(r)}),t},file:function(e,t,n){if(arguments.length!==1)return e=this.root+e,r.call(this,e,t,n),this;if(_(e)){var i=e;return this.filter(function(e,t){return!t.dir&&i.test(e)})}var a=this.files[this.root+e];return a&&!a.dir?a:null},folder:function(e){if(!e)return this;if(_(e))return this.filter(function(t,n){return n.dir&&e.test(t)});var t=this.root+e,n=g.call(this,t),r=this.clone();return r.root=n.name,r},remove:function(e){e=this.root+e;var t=this.files[e];if(t||=(e.slice(-1)!==`/`&&(e+=`/`),this.files[e]),t&&!t.dir)delete this.files[e];else for(var n=this.filter(function(t,n){return n.name.slice(0,e.length)===e}),r=0;r<n.length;r++)delete this.files[n[r].name];return this},generate:function(){throw Error(`This method has been removed in JSZip 3.0, please check the upgrade guide.`)},generateInternalStream:function(e){var t,n={};try{if((n=a.extend(e||{},{streamFiles:!1,compression:`STORE`,compressionOptions:null,type:``,platform:`DOS`,comment:null,mimeType:`application/zip`,encodeFileName:i.utf8encode})).type=n.type.toLowerCase(),n.compression=n.compression.toUpperCase(),n.type===`binarystring`&&(n.type=`string`),!n.type)throw Error(`No output type specified.`);a.checkSupport(n.type),n.platform!==`darwin`&&n.platform!==`freebsd`&&n.platform!==`linux`&&n.platform!==`sunos`||(n.platform=`UNIX`),n.platform===`win32`&&(n.platform=`DOS`);var r=n.comment||this.comment||``;t=d.generateWorker(this,n,r)}catch(e){(t=new o(`error`)).error(e)}return new s(t,n.type||`string`,n.mimeType)},generateAsync:function(e,t){return this.generateInternalStream(e).accumulate(t)},generateNodeStream:function(e,t){return(e||={}).type||(e.type=`nodebuffer`),this.generateInternalStream(e).toNodejsStream(t)}}},{"./compressedObject":2,"./defaults":5,"./generate":9,"./nodejs/NodejsStreamInputAdapter":12,"./nodejsUtils":14,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31,"./utils":32,"./zipObject":35}],16:[function(e,t,n){t.exports=e(`stream`)},{stream:void 0}],17:[function(e,t,n){var r=e(`./DataReader`);function i(e){r.call(this,e);for(var t=0;t<this.data.length;t++)e[t]=255&e[t]}e(`../utils`).inherits(i,r),i.prototype.byteAt=function(e){return this.data[this.zero+e]},i.prototype.lastIndexOfSignature=function(e){for(var t=e.charCodeAt(0),n=e.charCodeAt(1),r=e.charCodeAt(2),i=e.charCodeAt(3),a=this.length-4;0<=a;--a)if(this.data[a]===t&&this.data[a+1]===n&&this.data[a+2]===r&&this.data[a+3]===i)return a-this.zero;return-1},i.prototype.readAndCheckSignature=function(e){var t=e.charCodeAt(0),n=e.charCodeAt(1),r=e.charCodeAt(2),i=e.charCodeAt(3),a=this.readData(4);return t===a[0]&&n===a[1]&&r===a[2]&&i===a[3]},i.prototype.readData=function(e){if(this.checkOffset(e),e===0)return[];var t=this.data.slice(this.zero+this.index,this.zero+this.index+e);return this.index+=e,t},t.exports=i},{"../utils":32,"./DataReader":18}],18:[function(e,t,n){var r=e(`../utils`);function i(e){this.data=e,this.length=e.length,this.index=0,this.zero=0}i.prototype={checkOffset:function(e){this.checkIndex(this.index+e)},checkIndex:function(e){if(this.length<this.zero+e||e<0)throw Error(`End of data reached (data length = `+this.length+`, asked index = `+e+`). Corrupted zip ?`)},setIndex:function(e){this.checkIndex(e),this.index=e},skip:function(e){this.setIndex(this.index+e)},byteAt:function(){},readInt:function(e){var t,n=0;for(this.checkOffset(e),t=this.index+e-1;t>=this.index;t--)n=(n<<8)+this.byteAt(t);return this.index+=e,n},readString:function(e){return r.transformTo(`string`,this.readData(e))},readData:function(){},lastIndexOfSignature:function(){},readAndCheckSignature:function(){},readDate:function(){var e=this.readInt(4);return new Date(Date.UTC(1980+(e>>25&127),(e>>21&15)-1,e>>16&31,e>>11&31,e>>5&63,(31&e)<<1))}},t.exports=i},{"../utils":32}],19:[function(e,t,n){var r=e(`./Uint8ArrayReader`);function i(e){r.call(this,e)}e(`../utils`).inherits(i,r),i.prototype.readData=function(e){this.checkOffset(e);var t=this.data.slice(this.zero+this.index,this.zero+this.index+e);return this.index+=e,t},t.exports=i},{"../utils":32,"./Uint8ArrayReader":21}],20:[function(e,t,n){var r=e(`./DataReader`);function i(e){r.call(this,e)}e(`../utils`).inherits(i,r),i.prototype.byteAt=function(e){return this.data.charCodeAt(this.zero+e)},i.prototype.lastIndexOfSignature=function(e){return this.data.lastIndexOf(e)-this.zero},i.prototype.readAndCheckSignature=function(e){return e===this.readData(4)},i.prototype.readData=function(e){this.checkOffset(e);var t=this.data.slice(this.zero+this.index,this.zero+this.index+e);return this.index+=e,t},t.exports=i},{"../utils":32,"./DataReader":18}],21:[function(e,t,n){var r=e(`./ArrayReader`);function i(e){r.call(this,e)}e(`../utils`).inherits(i,r),i.prototype.readData=function(e){if(this.checkOffset(e),e===0)return new Uint8Array;var t=this.data.subarray(this.zero+this.index,this.zero+this.index+e);return this.index+=e,t},t.exports=i},{"../utils":32,"./ArrayReader":17}],22:[function(e,t,n){var r=e(`../utils`),i=e(`../support`),a=e(`./ArrayReader`),o=e(`./StringReader`),s=e(`./NodeBufferReader`),c=e(`./Uint8ArrayReader`);t.exports=function(e){var t=r.getTypeOf(e);return r.checkSupport(t),t!==`string`||i.uint8array?t===`nodebuffer`?new s(e):i.uint8array?new c(r.transformTo(`uint8array`,e)):new a(r.transformTo(`array`,e)):new o(e)}},{"../support":30,"../utils":32,"./ArrayReader":17,"./NodeBufferReader":19,"./StringReader":20,"./Uint8ArrayReader":21}],23:[function(e,t,n){n.LOCAL_FILE_HEADER=`PK`,n.CENTRAL_FILE_HEADER=`PK`,n.CENTRAL_DIRECTORY_END=`PK`,n.ZIP64_CENTRAL_DIRECTORY_LOCATOR=`PK\x07`,n.ZIP64_CENTRAL_DIRECTORY_END=`PK`,n.DATA_DESCRIPTOR=`PK\x07\b`},{}],24:[function(e,t,n){var r=e(`./GenericWorker`),i=e(`../utils`);function a(e){r.call(this,`ConvertWorker to `+e),this.destType=e}i.inherits(a,r),a.prototype.processChunk=function(e){this.push({data:i.transformTo(this.destType,e.data),meta:e.meta})},t.exports=a},{"../utils":32,"./GenericWorker":28}],25:[function(e,t,n){var r=e(`./GenericWorker`),i=e(`../crc32`);function a(){r.call(this,`Crc32Probe`),this.withStreamInfo(`crc32`,0)}e(`../utils`).inherits(a,r),a.prototype.processChunk=function(e){this.streamInfo.crc32=i(e.data,this.streamInfo.crc32||0),this.push(e)},t.exports=a},{"../crc32":4,"../utils":32,"./GenericWorker":28}],26:[function(e,t,n){var r=e(`../utils`),i=e(`./GenericWorker`);function a(e){i.call(this,`DataLengthProbe for `+e),this.propName=e,this.withStreamInfo(e,0)}r.inherits(a,i),a.prototype.processChunk=function(e){if(e){var t=this.streamInfo[this.propName]||0;this.streamInfo[this.propName]=t+e.data.length}i.prototype.processChunk.call(this,e)},t.exports=a},{"../utils":32,"./GenericWorker":28}],27:[function(e,t,n){var r=e(`../utils`),i=e(`./GenericWorker`);function a(e){i.call(this,`DataWorker`);var t=this;this.dataIsReady=!1,this.index=0,this.max=0,this.data=null,this.type=``,this._tickScheduled=!1,e.then(function(e){t.dataIsReady=!0,t.data=e,t.max=e&&e.length||0,t.type=r.getTypeOf(e),t.isPaused||t._tickAndRepeat()},function(e){t.error(e)})}r.inherits(a,i),a.prototype.cleanUp=function(){i.prototype.cleanUp.call(this),this.data=null},a.prototype.resume=function(){return!!i.prototype.resume.call(this)&&(!this._tickScheduled&&this.dataIsReady&&(this._tickScheduled=!0,r.delay(this._tickAndRepeat,[],this)),!0)},a.prototype._tickAndRepeat=function(){this._tickScheduled=!1,this.isPaused||this.isFinished||(this._tick(),this.isFinished||(r.delay(this._tickAndRepeat,[],this),this._tickScheduled=!0))},a.prototype._tick=function(){if(this.isPaused||this.isFinished)return!1;var e=null,t=Math.min(this.max,this.index+16384);if(this.index>=this.max)return this.end();switch(this.type){case`string`:e=this.data.substring(this.index,t);break;case`uint8array`:e=this.data.subarray(this.index,t);break;case`array`:case`nodebuffer`:e=this.data.slice(this.index,t)}return this.index=t,this.push({data:e,meta:{percent:this.max?this.index/this.max*100:0}})},t.exports=a},{"../utils":32,"./GenericWorker":28}],28:[function(e,t,n){function r(e){this.name=e||`default`,this.streamInfo={},this.generatedError=null,this.extraStreamInfo={},this.isPaused=!0,this.isFinished=!1,this.isLocked=!1,this._listeners={data:[],end:[],error:[]},this.previous=null}r.prototype={push:function(e){this.emit(`data`,e)},end:function(){if(this.isFinished)return!1;this.flush();try{this.emit(`end`),this.cleanUp(),this.isFinished=!0}catch(e){this.emit(`error`,e)}return!0},error:function(e){return!this.isFinished&&(this.isPaused?this.generatedError=e:(this.isFinished=!0,this.emit(`error`,e),this.previous&&this.previous.error(e),this.cleanUp()),!0)},on:function(e,t){return this._listeners[e].push(t),this},cleanUp:function(){this.streamInfo=this.generatedError=this.extraStreamInfo=null,this._listeners=[]},emit:function(e,t){if(this._listeners[e])for(var n=0;n<this._listeners[e].length;n++)this._listeners[e][n].call(this,t)},pipe:function(e){return e.registerPrevious(this)},registerPrevious:function(e){if(this.isLocked)throw Error(`The stream '`+this+`' has already been used.`);this.streamInfo=e.streamInfo,this.mergeStreamInfo(),this.previous=e;var t=this;return e.on(`data`,function(e){t.processChunk(e)}),e.on(`end`,function(){t.end()}),e.on(`error`,function(e){t.error(e)}),this},pause:function(){return!this.isPaused&&!this.isFinished&&(this.isPaused=!0,this.previous&&this.previous.pause(),!0)},resume:function(){if(!this.isPaused||this.isFinished)return!1;var e=this.isPaused=!1;return this.generatedError&&(this.error(this.generatedError),e=!0),this.previous&&this.previous.resume(),!e},flush:function(){},processChunk:function(e){this.push(e)},withStreamInfo:function(e,t){return this.extraStreamInfo[e]=t,this.mergeStreamInfo(),this},mergeStreamInfo:function(){for(var e in this.extraStreamInfo)Object.prototype.hasOwnProperty.call(this.extraStreamInfo,e)&&(this.streamInfo[e]=this.extraStreamInfo[e])},lock:function(){if(this.isLocked)throw Error(`The stream '`+this+`' has already been used.`);this.isLocked=!0,this.previous&&this.previous.lock()},toString:function(){var e=`Worker `+this.name;return this.previous?this.previous+` -> `+e:e}},t.exports=r},{}],29:[function(e,t,n){var r=e(`../utils`),i=e(`./ConvertWorker`),a=e(`./GenericWorker`),o=e(`../base64`),s=e(`../support`),c=e(`../external`),l=null;if(s.nodestream)try{l=e(`../nodejs/NodejsStreamOutputAdapter`)}catch{}function u(e,t){return new c.Promise(function(n,i){var a=[],s=e._internalType,c=e._outputType,l=e._mimeType;e.on(`data`,function(e,n){a.push(e),t&&t(n)}).on(`error`,function(e){a=[],i(e)}).on(`end`,function(){try{n(function(e,t,n){switch(e){case`blob`:return r.newBlob(r.transformTo(`arraybuffer`,t),n);case`base64`:return o.encode(t);default:return r.transformTo(e,t)}}(c,function(e,t){var n,r=0,i=null,a=0;for(n=0;n<t.length;n++)a+=t[n].length;switch(e){case`string`:return t.join(``);case`array`:return Array.prototype.concat.apply([],t);case`uint8array`:for(i=new Uint8Array(a),n=0;n<t.length;n++)i.set(t[n],r),r+=t[n].length;return i;case`nodebuffer`:return Buffer.concat(t);default:throw Error(`concat : unsupported type '`+e+`'`)}}(s,a),l))}catch(e){i(e)}a=[]}).resume()})}function d(e,t,n){var o=t;switch(t){case`blob`:case`arraybuffer`:o=`uint8array`;break;case`base64`:o=`string`}try{this._internalType=o,this._outputType=t,this._mimeType=n,r.checkSupport(o),this._worker=e.pipe(new i(o)),e.lock()}catch(e){this._worker=new a(`error`),this._worker.error(e)}}d.prototype={accumulate:function(e){return u(this,e)},on:function(e,t){var n=this;return e===`data`?this._worker.on(e,function(e){t.call(n,e.data,e.meta)}):this._worker.on(e,function(){r.delay(t,arguments,n)}),this},resume:function(){return r.delay(this._worker.resume,[],this._worker),this},pause:function(){return this._worker.pause(),this},toNodejsStream:function(e){if(r.checkSupport(`nodestream`),this._outputType!==`nodebuffer`)throw Error(this._outputType+` is not supported by this method`);return new l(this,{objectMode:this._outputType!==`nodebuffer`},e)}},t.exports=d},{"../base64":1,"../external":6,"../nodejs/NodejsStreamOutputAdapter":13,"../support":30,"../utils":32,"./ConvertWorker":24,"./GenericWorker":28}],30:[function(e,t,n){if(n.base64=!0,n.array=!0,n.string=!0,n.arraybuffer=typeof ArrayBuffer<`u`&&typeof Uint8Array<`u`,n.nodebuffer=typeof Buffer<`u`,n.uint8array=typeof Uint8Array<`u`,typeof ArrayBuffer>`u`)n.blob=!1;else{var r=new ArrayBuffer(0);try{n.blob=new Blob([r],{type:`application/zip`}).size===0}catch{try{var i=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);i.append(r),n.blob=i.getBlob(`application/zip`).size===0}catch{n.blob=!1}}}try{n.nodestream=!!e(`readable-stream`).Readable}catch{n.nodestream=!1}},{"readable-stream":16}],31:[function(e,t,n){for(var r=e(`./utils`),i=e(`./support`),a=e(`./nodejsUtils`),o=e(`./stream/GenericWorker`),s=Array(256),c=0;c<256;c++)s[c]=252<=c?6:248<=c?5:240<=c?4:224<=c?3:192<=c?2:1;s[254]=s[254]=1;function l(){o.call(this,`utf-8 decode`),this.leftOver=null}function u(){o.call(this,`utf-8 encode`)}n.utf8encode=function(e){return i.nodebuffer?a.newBufferFrom(e,`utf-8`):function(e){var t,n,r,a,o,s=e.length,c=0;for(a=0;a<s;a++)(64512&(n=e.charCodeAt(a)))==55296&&a+1<s&&(64512&(r=e.charCodeAt(a+1)))==56320&&(n=65536+(n-55296<<10)+(r-56320),a++),c+=n<128?1:n<2048?2:n<65536?3:4;for(t=i.uint8array?new Uint8Array(c):Array(c),a=o=0;o<c;a++)(64512&(n=e.charCodeAt(a)))==55296&&a+1<s&&(64512&(r=e.charCodeAt(a+1)))==56320&&(n=65536+(n-55296<<10)+(r-56320),a++),n<128?t[o++]=n:(n<2048?t[o++]=192|n>>>6:(n<65536?t[o++]=224|n>>>12:(t[o++]=240|n>>>18,t[o++]=128|n>>>12&63),t[o++]=128|n>>>6&63),t[o++]=128|63&n);return t}(e)},n.utf8decode=function(e){return i.nodebuffer?r.transformTo(`nodebuffer`,e).toString(`utf-8`):function(e){var t,n,i,a,o=e.length,c=Array(2*o);for(t=n=0;t<o;)if((i=e[t++])<128)c[n++]=i;else if(4<(a=s[i]))c[n++]=65533,t+=a-1;else{for(i&=a===2?31:a===3?15:7;1<a&&t<o;)i=i<<6|63&e[t++],a--;1<a?c[n++]=65533:i<65536?c[n++]=i:(i-=65536,c[n++]=55296|i>>10&1023,c[n++]=56320|1023&i)}return c.length!==n&&(c.subarray?c=c.subarray(0,n):c.length=n),r.applyFromCharCode(c)}(e=r.transformTo(i.uint8array?`uint8array`:`array`,e))},r.inherits(l,o),l.prototype.processChunk=function(e){var t=r.transformTo(i.uint8array?`uint8array`:`array`,e.data);if(this.leftOver&&this.leftOver.length){if(i.uint8array){var a=t;(t=new Uint8Array(a.length+this.leftOver.length)).set(this.leftOver,0),t.set(a,this.leftOver.length)}else t=this.leftOver.concat(t);this.leftOver=null}var o=function(e,t){var n;for((t||=e.length)>e.length&&(t=e.length),n=t-1;0<=n&&(192&e[n])==128;)n--;return n<0||n===0?t:n+s[e[n]]>t?n:t}(t),c=t;o!==t.length&&(i.uint8array?(c=t.subarray(0,o),this.leftOver=t.subarray(o,t.length)):(c=t.slice(0,o),this.leftOver=t.slice(o,t.length))),this.push({data:n.utf8decode(c),meta:e.meta})},l.prototype.flush=function(){this.leftOver&&this.leftOver.length&&(this.push({data:n.utf8decode(this.leftOver),meta:{}}),this.leftOver=null)},n.Utf8DecodeWorker=l,r.inherits(u,o),u.prototype.processChunk=function(e){this.push({data:n.utf8encode(e.data),meta:e.meta})},n.Utf8EncodeWorker=u},{"./nodejsUtils":14,"./stream/GenericWorker":28,"./support":30,"./utils":32}],32:[function(e,t,n){var r=e(`./support`),i=e(`./base64`),a=e(`./nodejsUtils`),o=e(`./external`);function s(e){return e}function c(e,t){for(var n=0;n<e.length;++n)t[n]=255&e.charCodeAt(n);return t}e(`setimmediate`),n.newBlob=function(e,t){n.checkSupport(`blob`);try{return new Blob([e],{type:t})}catch{try{var r=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);return r.append(e),r.getBlob(t)}catch{throw Error(`Bug : can't construct the Blob.`)}}};var l={stringifyByChunk:function(e,t,n){var r=[],i=0,a=e.length;if(a<=n)return String.fromCharCode.apply(null,e);for(;i<a;)t===`array`||t===`nodebuffer`?r.push(String.fromCharCode.apply(null,e.slice(i,Math.min(i+n,a)))):r.push(String.fromCharCode.apply(null,e.subarray(i,Math.min(i+n,a)))),i+=n;return r.join(``)},stringifyByChar:function(e){for(var t=``,n=0;n<e.length;n++)t+=String.fromCharCode(e[n]);return t},applyCanBeUsed:{uint8array:function(){try{return r.uint8array&&String.fromCharCode.apply(null,new Uint8Array(1)).length===1}catch{return!1}}(),nodebuffer:function(){try{return r.nodebuffer&&String.fromCharCode.apply(null,a.allocBuffer(1)).length===1}catch{return!1}}()}};function u(e){var t=65536,r=n.getTypeOf(e),i=!0;if(r===`uint8array`?i=l.applyCanBeUsed.uint8array:r===`nodebuffer`&&(i=l.applyCanBeUsed.nodebuffer),i)for(;1<t;)try{return l.stringifyByChunk(e,r,t)}catch{t=Math.floor(t/2)}return l.stringifyByChar(e)}function d(e,t){for(var n=0;n<e.length;n++)t[n]=e[n];return t}n.applyFromCharCode=u;var f={};f.string={string:s,array:function(e){return c(e,Array(e.length))},arraybuffer:function(e){return f.string.uint8array(e).buffer},uint8array:function(e){return c(e,new Uint8Array(e.length))},nodebuffer:function(e){return c(e,a.allocBuffer(e.length))}},f.array={string:u,array:s,arraybuffer:function(e){return new Uint8Array(e).buffer},uint8array:function(e){return new Uint8Array(e)},nodebuffer:function(e){return a.newBufferFrom(e)}},f.arraybuffer={string:function(e){return u(new Uint8Array(e))},array:function(e){return d(new Uint8Array(e),Array(e.byteLength))},arraybuffer:s,uint8array:function(e){return new Uint8Array(e)},nodebuffer:function(e){return a.newBufferFrom(new Uint8Array(e))}},f.uint8array={string:u,array:function(e){return d(e,Array(e.length))},arraybuffer:function(e){return e.buffer},uint8array:s,nodebuffer:function(e){return a.newBufferFrom(e)}},f.nodebuffer={string:u,array:function(e){return d(e,Array(e.length))},arraybuffer:function(e){return f.nodebuffer.uint8array(e).buffer},uint8array:function(e){return d(e,new Uint8Array(e.length))},nodebuffer:s},n.transformTo=function(e,t){return t||=``,e?(n.checkSupport(e),f[n.getTypeOf(t)][e](t)):t},n.resolve=function(e){for(var t=e.split(`/`),n=[],r=0;r<t.length;r++){var i=t[r];i===`.`||i===``&&r!==0&&r!==t.length-1||(i===`..`?n.pop():n.push(i))}return n.join(`/`)},n.getTypeOf=function(e){if(typeof e==`string`)return`string`;var t=Object.prototype.toString.call(e);return t===`[object Array]`?`array`:r.nodebuffer&&a.isBuffer(e)?`nodebuffer`:r.uint8array&&t===`[object Uint8Array]`?`uint8array`:r.arraybuffer&&t===`[object ArrayBuffer]`?`arraybuffer`:void 0},n.checkSupport=function(e){if(!r[e.toLowerCase()])throw Error(e+` is not supported by this platform`)},n.MAX_VALUE_16BITS=65535,n.MAX_VALUE_32BITS=-1,n.pretty=function(e){var t,n,r=``;for(n=0;n<(e||``).length;n++)r+=`\\x`+((t=e.charCodeAt(n))<16?`0`:``)+t.toString(16).toUpperCase();return r},n.delay=function(e,t,n){setImmediate(function(){e.apply(n||null,t||[])})},n.inherits=function(e,t){function n(){}n.prototype=t.prototype,e.prototype=new n},n.extend=function(){var e,t,n={};for(e=0;e<arguments.length;e++)for(t in arguments[e])Object.prototype.hasOwnProperty.call(arguments[e],t)&&n[t]===void 0&&(n[t]=arguments[e][t]);return n},n.prepareContent=function(e,t,a,s,l){return o.Promise.resolve(t).then(function(t){return r.blob&&(t instanceof Blob||[`[object File]`,`[object Blob]`].indexOf(Object.prototype.toString.call(t))!==-1)?Blob.prototype.arrayBuffer===void 0?typeof FileReader<`u`?new o.Promise(function(e,n){var r=new FileReader;r.onload=function(t){e(t.target.result)},r.onerror=function(e){n(e.target.error)},r.readAsArrayBuffer(t)}):o.Promise.reject(Error(e+` is a Blob, but we have no way of reading it.`)):t.arrayBuffer():t}).then(function(t){var u=n.getTypeOf(t);return u?(u===`arraybuffer`?t=n.transformTo(`uint8array`,t):u===`string`&&(l?t=i.decode(t):a&&!0!==s&&(t=function(e){return c(e,r.uint8array?new Uint8Array(e.length):Array(e.length))}(t))),t):o.Promise.reject(Error(`Can't read the data of '`+e+`'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?`))})}},{"./base64":1,"./external":6,"./nodejsUtils":14,"./support":30,setimmediate:54}],33:[function(e,t,n){var r=e(`./reader/readerFor`),i=e(`./utils`),a=e(`./signature`),o=e(`./zipEntry`),s=e(`./support`);function c(e){this.files=[],this.loadOptions=e}c.prototype={checkSignature:function(e){if(!this.reader.readAndCheckSignature(e)){this.reader.index-=4;var t=this.reader.readString(4);throw Error(`Corrupted zip or bug: unexpected signature (`+i.pretty(t)+`, expected `+i.pretty(e)+`)`)}},isSignature:function(e,t){var n=this.reader.index;this.reader.setIndex(e);var r=this.reader.readString(4)===t;return this.reader.setIndex(n),r},readBlockEndOfCentral:function(){this.diskNumber=this.reader.readInt(2),this.diskWithCentralDirStart=this.reader.readInt(2),this.centralDirRecordsOnThisDisk=this.reader.readInt(2),this.centralDirRecords=this.reader.readInt(2),this.centralDirSize=this.reader.readInt(4),this.centralDirOffset=this.reader.readInt(4),this.zipCommentLength=this.reader.readInt(2);var e=this.reader.readData(this.zipCommentLength),t=s.uint8array?`uint8array`:`array`,n=i.transformTo(t,e);this.zipComment=this.loadOptions.decodeFileName(n)},readBlockZip64EndOfCentral:function(){this.zip64EndOfCentralSize=this.reader.readInt(8),this.reader.skip(4),this.diskNumber=this.reader.readInt(4),this.diskWithCentralDirStart=this.reader.readInt(4),this.centralDirRecordsOnThisDisk=this.reader.readInt(8),this.centralDirRecords=this.reader.readInt(8),this.centralDirSize=this.reader.readInt(8),this.centralDirOffset=this.reader.readInt(8),this.zip64ExtensibleData={};for(var e,t,n,r=this.zip64EndOfCentralSize-44;0<r;)e=this.reader.readInt(2),t=this.reader.readInt(4),n=this.reader.readData(t),this.zip64ExtensibleData[e]={id:e,length:t,value:n}},readBlockZip64EndOfCentralLocator:function(){if(this.diskWithZip64CentralDirStart=this.reader.readInt(4),this.relativeOffsetEndOfZip64CentralDir=this.reader.readInt(8),this.disksCount=this.reader.readInt(4),1<this.disksCount)throw Error(`Multi-volumes zip are not supported`)},readLocalFiles:function(){for(var e=0,t;e<this.files.length;e++)t=this.files[e],this.reader.setIndex(t.localHeaderOffset),this.checkSignature(a.LOCAL_FILE_HEADER),t.readLocalPart(this.reader),t.handleUTF8(),t.processAttributes()},readCentralDir:function(){var e;for(this.reader.setIndex(this.centralDirOffset);this.reader.readAndCheckSignature(a.CENTRAL_FILE_HEADER);)(e=new o({zip64:this.zip64},this.loadOptions)).readCentralPart(this.reader),this.files.push(e);if(this.centralDirRecords!==this.files.length&&this.centralDirRecords!==0&&this.files.length===0)throw Error(`Corrupted zip or bug: expected `+this.centralDirRecords+` records in central dir, got `+this.files.length)},readEndOfCentral:function(){var e=this.reader.lastIndexOfSignature(a.CENTRAL_DIRECTORY_END);if(e<0)throw this.isSignature(0,a.LOCAL_FILE_HEADER)?Error(`Corrupted zip: can't find end of central directory`):Error(`Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html`);this.reader.setIndex(e);var t=e;if(this.checkSignature(a.CENTRAL_DIRECTORY_END),this.readBlockEndOfCentral(),this.diskNumber===i.MAX_VALUE_16BITS||this.diskWithCentralDirStart===i.MAX_VALUE_16BITS||this.centralDirRecordsOnThisDisk===i.MAX_VALUE_16BITS||this.centralDirRecords===i.MAX_VALUE_16BITS||this.centralDirSize===i.MAX_VALUE_32BITS||this.centralDirOffset===i.MAX_VALUE_32BITS){if(this.zip64=!0,(e=this.reader.lastIndexOfSignature(a.ZIP64_CENTRAL_DIRECTORY_LOCATOR))<0)throw Error(`Corrupted zip: can't find the ZIP64 end of central directory locator`);if(this.reader.setIndex(e),this.checkSignature(a.ZIP64_CENTRAL_DIRECTORY_LOCATOR),this.readBlockZip64EndOfCentralLocator(),!this.isSignature(this.relativeOffsetEndOfZip64CentralDir,a.ZIP64_CENTRAL_DIRECTORY_END)&&(this.relativeOffsetEndOfZip64CentralDir=this.reader.lastIndexOfSignature(a.ZIP64_CENTRAL_DIRECTORY_END),this.relativeOffsetEndOfZip64CentralDir<0))throw Error(`Corrupted zip: can't find the ZIP64 end of central directory`);this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir),this.checkSignature(a.ZIP64_CENTRAL_DIRECTORY_END),this.readBlockZip64EndOfCentral()}var n=this.centralDirOffset+this.centralDirSize;this.zip64&&(n+=20,n+=12+this.zip64EndOfCentralSize);var r=t-n;if(0<r)this.isSignature(t,a.CENTRAL_FILE_HEADER)||(this.reader.zero=r);else if(r<0)throw Error(`Corrupted zip: missing `+Math.abs(r)+` bytes.`)},prepareReader:function(e){this.reader=r(e)},load:function(e){this.prepareReader(e),this.readEndOfCentral(),this.readCentralDir(),this.readLocalFiles()}},t.exports=c},{"./reader/readerFor":22,"./signature":23,"./support":30,"./utils":32,"./zipEntry":34}],34:[function(e,t,n){var r=e(`./reader/readerFor`),i=e(`./utils`),a=e(`./compressedObject`),o=e(`./crc32`),s=e(`./utf8`),c=e(`./compressions`),l=e(`./support`);function u(e,t){this.options=e,this.loadOptions=t}u.prototype={isEncrypted:function(){return(1&this.bitFlag)==1},useUTF8:function(){return(2048&this.bitFlag)==2048},readLocalPart:function(e){var t,n;if(e.skip(22),this.fileNameLength=e.readInt(2),n=e.readInt(2),this.fileName=e.readData(this.fileNameLength),e.skip(n),this.compressedSize===-1||this.uncompressedSize===-1)throw Error(`Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)`);if((t=function(e){for(var t in c)if(Object.prototype.hasOwnProperty.call(c,t)&&c[t].magic===e)return c[t];return null}(this.compressionMethod))===null)throw Error(`Corrupted zip : compression `+i.pretty(this.compressionMethod)+` unknown (inner file : `+i.transformTo(`string`,this.fileName)+`)`);this.decompressed=new a(this.compressedSize,this.uncompressedSize,this.crc32,t,e.readData(this.compressedSize))},readCentralPart:function(e){this.versionMadeBy=e.readInt(2),e.skip(2),this.bitFlag=e.readInt(2),this.compressionMethod=e.readString(2),this.date=e.readDate(),this.crc32=e.readInt(4),this.compressedSize=e.readInt(4),this.uncompressedSize=e.readInt(4);var t=e.readInt(2);if(this.extraFieldsLength=e.readInt(2),this.fileCommentLength=e.readInt(2),this.diskNumberStart=e.readInt(2),this.internalFileAttributes=e.readInt(2),this.externalFileAttributes=e.readInt(4),this.localHeaderOffset=e.readInt(4),this.isEncrypted())throw Error(`Encrypted zip are not supported`);e.skip(t),this.readExtraFields(e),this.parseZIP64ExtraField(e),this.fileComment=e.readData(this.fileCommentLength)},processAttributes:function(){this.unixPermissions=null,this.dosPermissions=null;var e=this.versionMadeBy>>8;this.dir=!!(16&this.externalFileAttributes),e==0&&(this.dosPermissions=63&this.externalFileAttributes),e==3&&(this.unixPermissions=this.externalFileAttributes>>16&65535),this.dir||this.fileNameStr.slice(-1)!==`/`||(this.dir=!0)},parseZIP64ExtraField:function(){if(this.extraFields[1]){var e=r(this.extraFields[1].value);this.uncompressedSize===i.MAX_VALUE_32BITS&&(this.uncompressedSize=e.readInt(8)),this.compressedSize===i.MAX_VALUE_32BITS&&(this.compressedSize=e.readInt(8)),this.localHeaderOffset===i.MAX_VALUE_32BITS&&(this.localHeaderOffset=e.readInt(8)),this.diskNumberStart===i.MAX_VALUE_32BITS&&(this.diskNumberStart=e.readInt(4))}},readExtraFields:function(e){var t,n,r,i=e.index+this.extraFieldsLength;for(this.extraFields||={};e.index+4<i;)t=e.readInt(2),n=e.readInt(2),r=e.readData(n),this.extraFields[t]={id:t,length:n,value:r};e.setIndex(i)},handleUTF8:function(){var e=l.uint8array?`uint8array`:`array`;if(this.useUTF8())this.fileNameStr=s.utf8decode(this.fileName),this.fileCommentStr=s.utf8decode(this.fileComment);else{var t=this.findExtraFieldUnicodePath();if(t!==null)this.fileNameStr=t;else{var n=i.transformTo(e,this.fileName);this.fileNameStr=this.loadOptions.decodeFileName(n)}var r=this.findExtraFieldUnicodeComment();if(r!==null)this.fileCommentStr=r;else{var a=i.transformTo(e,this.fileComment);this.fileCommentStr=this.loadOptions.decodeFileName(a)}}},findExtraFieldUnicodePath:function(){var e=this.extraFields[28789];if(e){var t=r(e.value);return t.readInt(1)===1&&o(this.fileName)===t.readInt(4)?s.utf8decode(t.readData(e.length-5)):null}return null},findExtraFieldUnicodeComment:function(){var e=this.extraFields[25461];if(e){var t=r(e.value);return t.readInt(1)===1&&o(this.fileComment)===t.readInt(4)?s.utf8decode(t.readData(e.length-5)):null}return null}},t.exports=u},{"./compressedObject":2,"./compressions":3,"./crc32":4,"./reader/readerFor":22,"./support":30,"./utf8":31,"./utils":32}],35:[function(e,t,n){function r(e,t,n){this.name=e,this.dir=n.dir,this.date=n.date,this.comment=n.comment,this.unixPermissions=n.unixPermissions,this.dosPermissions=n.dosPermissions,this._data=t,this._dataBinary=n.binary,this.options={compression:n.compression,compressionOptions:n.compressionOptions}}var i=e(`./stream/StreamHelper`),a=e(`./stream/DataWorker`),o=e(`./utf8`),s=e(`./compressedObject`),c=e(`./stream/GenericWorker`);r.prototype={internalStream:function(e){var t=null,n=`string`;try{if(!e)throw Error(`No output type specified.`);var r=(n=e.toLowerCase())===`string`||n===`text`;n!==`binarystring`&&n!==`text`||(n=`string`),t=this._decompressWorker();var a=!this._dataBinary;a&&!r&&(t=t.pipe(new o.Utf8EncodeWorker)),!a&&r&&(t=t.pipe(new o.Utf8DecodeWorker))}catch(e){(t=new c(`error`)).error(e)}return new i(t,n,``)},async:function(e,t){return this.internalStream(e).accumulate(t)},nodeStream:function(e,t){return this.internalStream(e||`nodebuffer`).toNodejsStream(t)},_compressWorker:function(e,t){if(this._data instanceof s&&this._data.compression.magic===e.magic)return this._data.getCompressedWorker();var n=this._decompressWorker();return this._dataBinary||(n=n.pipe(new o.Utf8EncodeWorker)),s.createWorkerFrom(n,e,t)},_decompressWorker:function(){return this._data instanceof s?this._data.getContentWorker():this._data instanceof c?this._data:new a(this._data)}};for(var l=[`asText`,`asBinary`,`asNodeBuffer`,`asUint8Array`,`asArrayBuffer`],u=function(){throw Error(`This method has been removed in JSZip 3.0, please check the upgrade guide.`)},d=0;d<l.length;d++)r.prototype[l[d]]=u;t.exports=r},{"./compressedObject":2,"./stream/DataWorker":27,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31}],36:[function(e,t,n){(function(e){var n,r,i=e.MutationObserver||e.WebKitMutationObserver;if(i){var a=0,o=new i(u),s=e.document.createTextNode(``);o.observe(s,{characterData:!0}),n=function(){s.data=a=++a%2}}else if(e.setImmediate||e.MessageChannel===void 0)n=`document`in e&&`onreadystatechange`in e.document.createElement(`script`)?function(){var t=e.document.createElement(`script`);t.onreadystatechange=function(){u(),t.onreadystatechange=null,t.parentNode.removeChild(t),t=null},e.document.documentElement.appendChild(t)}:function(){setTimeout(u,0)};else{var c=new e.MessageChannel;c.port1.onmessage=u,n=function(){c.port2.postMessage(0)}}var l=[];function u(){var e,t;r=!0;for(var n=l.length;n;){for(t=l,l=[],e=-1;++e<n;)t[e]();n=l.length}r=!1}t.exports=function(e){l.push(e)!==1||r||n()}}).call(this,typeof global<`u`?global:typeof self<`u`?self:typeof window<`u`?window:{})},{}],37:[function(e,t,n){var r=e(`immediate`);function i(){}var a={},o=[`REJECTED`],s=[`FULFILLED`],c=[`PENDING`];function l(e){if(typeof e!=`function`)throw TypeError(`resolver must be a function`);this.state=c,this.queue=[],this.outcome=void 0,e!==i&&p(this,e)}function u(e,t,n){this.promise=e,typeof t==`function`&&(this.onFulfilled=t,this.callFulfilled=this.otherCallFulfilled),typeof n==`function`&&(this.onRejected=n,this.callRejected=this.otherCallRejected)}function d(e,t,n){r(function(){var r;try{r=t(n)}catch(t){return a.reject(e,t)}r===e?a.reject(e,TypeError(`Cannot resolve promise with itself`)):a.resolve(e,r)})}function f(e){var t=e&&e.then;if(e&&(typeof e==`object`||typeof e==`function`)&&typeof t==`function`)return function(){t.apply(e,arguments)}}function p(e,t){var n=!1;function r(t){n||(n=!0,a.reject(e,t))}function i(t){n||(n=!0,a.resolve(e,t))}var o=m(function(){t(i,r)});o.status===`error`&&r(o.value)}function m(e,t){var n={};try{n.value=e(t),n.status=`success`}catch(e){n.status=`error`,n.value=e}return n}(t.exports=l).prototype.finally=function(e){if(typeof e!=`function`)return this;var t=this.constructor;return this.then(function(n){return t.resolve(e()).then(function(){return n})},function(n){return t.resolve(e()).then(function(){throw n})})},l.prototype.catch=function(e){return this.then(null,e)},l.prototype.then=function(e,t){if(typeof e!=`function`&&this.state===s||typeof t!=`function`&&this.state===o)return this;var n=new this.constructor(i);return this.state===c?this.queue.push(new u(n,e,t)):d(n,this.state===s?e:t,this.outcome),n},u.prototype.callFulfilled=function(e){a.resolve(this.promise,e)},u.prototype.otherCallFulfilled=function(e){d(this.promise,this.onFulfilled,e)},u.prototype.callRejected=function(e){a.reject(this.promise,e)},u.prototype.otherCallRejected=function(e){d(this.promise,this.onRejected,e)},a.resolve=function(e,t){var n=m(f,t);if(n.status===`error`)return a.reject(e,n.value);var r=n.value;if(r)p(e,r);else{e.state=s,e.outcome=t;for(var i=-1,o=e.queue.length;++i<o;)e.queue[i].callFulfilled(t)}return e},a.reject=function(e,t){e.state=o,e.outcome=t;for(var n=-1,r=e.queue.length;++n<r;)e.queue[n].callRejected(t);return e},l.resolve=function(e){return e instanceof this?e:a.resolve(new this(i),e)},l.reject=function(e){var t=new this(i);return a.reject(t,e)},l.all=function(e){var t=this;if(Object.prototype.toString.call(e)!==`[object Array]`)return this.reject(TypeError(`must be an array`));var n=e.length,r=!1;if(!n)return this.resolve([]);for(var o=Array(n),s=0,c=-1,l=new this(i);++c<n;)u(e[c],c);return l;function u(e,i){t.resolve(e).then(function(e){o[i]=e,++s!==n||r||(r=!0,a.resolve(l,o))},function(e){r||(r=!0,a.reject(l,e))})}},l.race=function(e){var t=this;if(Object.prototype.toString.call(e)!==`[object Array]`)return this.reject(TypeError(`must be an array`));var n=e.length,r=!1;if(!n)return this.resolve([]);for(var o=-1,s=new this(i);++o<n;)c=e[o],t.resolve(c).then(function(e){r||(r=!0,a.resolve(s,e))},function(e){r||(r=!0,a.reject(s,e))});var c;return s}},{immediate:36}],38:[function(e,t,n){var r={};(0,e(`./lib/utils/common`).assign)(r,e(`./lib/deflate`),e(`./lib/inflate`),e(`./lib/zlib/constants`)),t.exports=r},{"./lib/deflate":39,"./lib/inflate":40,"./lib/utils/common":41,"./lib/zlib/constants":44}],39:[function(e,t,n){var r=e(`./zlib/deflate`),i=e(`./utils/common`),a=e(`./utils/strings`),o=e(`./zlib/messages`),s=e(`./zlib/zstream`),c=Object.prototype.toString,l=0,u=-1,d=0,f=8;function p(e){if(!(this instanceof p))return new p(e);this.options=i.assign({level:u,method:f,chunkSize:16384,windowBits:15,memLevel:8,strategy:d,to:``},e||{});var t=this.options;t.raw&&0<t.windowBits?t.windowBits=-t.windowBits:t.gzip&&0<t.windowBits&&t.windowBits<16&&(t.windowBits+=16),this.err=0,this.msg=``,this.ended=!1,this.chunks=[],this.strm=new s,this.strm.avail_out=0;var n=r.deflateInit2(this.strm,t.level,t.method,t.windowBits,t.memLevel,t.strategy);if(n!==l)throw Error(o[n]);if(t.header&&r.deflateSetHeader(this.strm,t.header),t.dictionary){var m=typeof t.dictionary==`string`?a.string2buf(t.dictionary):c.call(t.dictionary)===`[object ArrayBuffer]`?new Uint8Array(t.dictionary):t.dictionary;if((n=r.deflateSetDictionary(this.strm,m))!==l)throw Error(o[n]);this._dict_set=!0}}function m(e,t){var n=new p(t);if(n.push(e,!0),n.err)throw n.msg||o[n.err];return n.result}p.prototype.push=function(e,t){var n,o,s=this.strm,u=this.options.chunkSize;if(this.ended)return!1;o=t===~~t?t:!0===t?4:0,s.input=typeof e==`string`?a.string2buf(e):c.call(e)===`[object ArrayBuffer]`?new Uint8Array(e):e,s.next_in=0,s.avail_in=s.input.length;do{if(s.avail_out===0&&(s.output=new i.Buf8(u),s.next_out=0,s.avail_out=u),(n=r.deflate(s,o))!==1&&n!==l)return this.onEnd(n),!(this.ended=!0);s.avail_out!==0&&(s.avail_in!==0||o!==4&&o!==2)||(this.options.to===`string`?this.onData(a.buf2binstring(i.shrinkBuf(s.output,s.next_out))):this.onData(i.shrinkBuf(s.output,s.next_out)))}while((0<s.avail_in||s.avail_out===0)&&n!==1);return o===4?(n=r.deflateEnd(this.strm),this.onEnd(n),this.ended=!0,n===l):o!==2||(this.onEnd(l),!(s.avail_out=0))},p.prototype.onData=function(e){this.chunks.push(e)},p.prototype.onEnd=function(e){e===l&&(this.result=this.options.to===`string`?this.chunks.join(``):i.flattenChunks(this.chunks)),this.chunks=[],this.err=e,this.msg=this.strm.msg},n.Deflate=p,n.deflate=m,n.deflateRaw=function(e,t){return(t||={}).raw=!0,m(e,t)},n.gzip=function(e,t){return(t||={}).gzip=!0,m(e,t)}},{"./utils/common":41,"./utils/strings":42,"./zlib/deflate":46,"./zlib/messages":51,"./zlib/zstream":53}],40:[function(e,t,n){var r=e(`./zlib/inflate`),i=e(`./utils/common`),a=e(`./utils/strings`),o=e(`./zlib/constants`),s=e(`./zlib/messages`),c=e(`./zlib/zstream`),l=e(`./zlib/gzheader`),u=Object.prototype.toString;function d(e){if(!(this instanceof d))return new d(e);this.options=i.assign({chunkSize:16384,windowBits:0,to:``},e||{});var t=this.options;t.raw&&0<=t.windowBits&&t.windowBits<16&&(t.windowBits=-t.windowBits,t.windowBits===0&&(t.windowBits=-15)),!(0<=t.windowBits&&t.windowBits<16)||e&&e.windowBits||(t.windowBits+=32),15<t.windowBits&&t.windowBits<48&&!(15&t.windowBits)&&(t.windowBits|=15),this.err=0,this.msg=``,this.ended=!1,this.chunks=[],this.strm=new c,this.strm.avail_out=0;var n=r.inflateInit2(this.strm,t.windowBits);if(n!==o.Z_OK)throw Error(s[n]);this.header=new l,r.inflateGetHeader(this.strm,this.header)}function f(e,t){var n=new d(t);if(n.push(e,!0),n.err)throw n.msg||s[n.err];return n.result}d.prototype.push=function(e,t){var n,s,c,l,d,f,p=this.strm,m=this.options.chunkSize,h=this.options.dictionary,g=!1;if(this.ended)return!1;s=t===~~t?t:!0===t?o.Z_FINISH:o.Z_NO_FLUSH,p.input=typeof e==`string`?a.binstring2buf(e):u.call(e)===`[object ArrayBuffer]`?new Uint8Array(e):e,p.next_in=0,p.avail_in=p.input.length;do{if(p.avail_out===0&&(p.output=new i.Buf8(m),p.next_out=0,p.avail_out=m),(n=r.inflate(p,o.Z_NO_FLUSH))===o.Z_NEED_DICT&&h&&(f=typeof h==`string`?a.string2buf(h):u.call(h)===`[object ArrayBuffer]`?new Uint8Array(h):h,n=r.inflateSetDictionary(this.strm,f)),n===o.Z_BUF_ERROR&&!0===g&&(n=o.Z_OK,g=!1),n!==o.Z_STREAM_END&&n!==o.Z_OK)return this.onEnd(n),!(this.ended=!0);p.next_out&&(p.avail_out!==0&&n!==o.Z_STREAM_END&&(p.avail_in!==0||s!==o.Z_FINISH&&s!==o.Z_SYNC_FLUSH)||(this.options.to===`string`?(c=a.utf8border(p.output,p.next_out),l=p.next_out-c,d=a.buf2string(p.output,c),p.next_out=l,p.avail_out=m-l,l&&i.arraySet(p.output,p.output,c,l,0),this.onData(d)):this.onData(i.shrinkBuf(p.output,p.next_out)))),p.avail_in===0&&p.avail_out===0&&(g=!0)}while((0<p.avail_in||p.avail_out===0)&&n!==o.Z_STREAM_END);return n===o.Z_STREAM_END&&(s=o.Z_FINISH),s===o.Z_FINISH?(n=r.inflateEnd(this.strm),this.onEnd(n),this.ended=!0,n===o.Z_OK):s!==o.Z_SYNC_FLUSH||(this.onEnd(o.Z_OK),!(p.avail_out=0))},d.prototype.onData=function(e){this.chunks.push(e)},d.prototype.onEnd=function(e){e===o.Z_OK&&(this.result=this.options.to===`string`?this.chunks.join(``):i.flattenChunks(this.chunks)),this.chunks=[],this.err=e,this.msg=this.strm.msg},n.Inflate=d,n.inflate=f,n.inflateRaw=function(e,t){return(t||={}).raw=!0,f(e,t)},n.ungzip=f},{"./utils/common":41,"./utils/strings":42,"./zlib/constants":44,"./zlib/gzheader":47,"./zlib/inflate":49,"./zlib/messages":51,"./zlib/zstream":53}],41:[function(e,t,n){var r=typeof Uint8Array<`u`&&typeof Uint16Array<`u`&&typeof Int32Array<`u`;n.assign=function(e){for(var t=Array.prototype.slice.call(arguments,1);t.length;){var n=t.shift();if(n){if(typeof n!=`object`)throw TypeError(n+`must be non-object`);for(var r in n)n.hasOwnProperty(r)&&(e[r]=n[r])}}return e},n.shrinkBuf=function(e,t){return e.length===t?e:e.subarray?e.subarray(0,t):(e.length=t,e)};var i={arraySet:function(e,t,n,r,i){if(t.subarray&&e.subarray)e.set(t.subarray(n,n+r),i);else for(var a=0;a<r;a++)e[i+a]=t[n+a]},flattenChunks:function(e){for(var t=r=0,n=e.length,r,i,a,o;t<n;t++)r+=e[t].length;for(o=new Uint8Array(r),t=i=0,n=e.length;t<n;t++)a=e[t],o.set(a,i),i+=a.length;return o}},a={arraySet:function(e,t,n,r,i){for(var a=0;a<r;a++)e[i+a]=t[n+a]},flattenChunks:function(e){return[].concat.apply([],e)}};n.setTyped=function(e){e?(n.Buf8=Uint8Array,n.Buf16=Uint16Array,n.Buf32=Int32Array,n.assign(n,i)):(n.Buf8=Array,n.Buf16=Array,n.Buf32=Array,n.assign(n,a))},n.setTyped(r)},{}],42:[function(e,t,n){var r=e(`./common`),i=!0,a=!0;try{String.fromCharCode.apply(null,[0])}catch{i=!1}try{String.fromCharCode.apply(null,new Uint8Array(1))}catch{a=!1}for(var o=new r.Buf8(256),s=0;s<256;s++)o[s]=252<=s?6:248<=s?5:240<=s?4:224<=s?3:192<=s?2:1;function c(e,t){if(t<65537&&(e.subarray&&a||!e.subarray&&i))return String.fromCharCode.apply(null,r.shrinkBuf(e,t));for(var n=``,o=0;o<t;o++)n+=String.fromCharCode(e[o]);return n}o[254]=o[254]=1,n.string2buf=function(e){var t,n,i,a,o,s=e.length,c=0;for(a=0;a<s;a++)(64512&(n=e.charCodeAt(a)))==55296&&a+1<s&&(64512&(i=e.charCodeAt(a+1)))==56320&&(n=65536+(n-55296<<10)+(i-56320),a++),c+=n<128?1:n<2048?2:n<65536?3:4;for(t=new r.Buf8(c),a=o=0;o<c;a++)(64512&(n=e.charCodeAt(a)))==55296&&a+1<s&&(64512&(i=e.charCodeAt(a+1)))==56320&&(n=65536+(n-55296<<10)+(i-56320),a++),n<128?t[o++]=n:(n<2048?t[o++]=192|n>>>6:(n<65536?t[o++]=224|n>>>12:(t[o++]=240|n>>>18,t[o++]=128|n>>>12&63),t[o++]=128|n>>>6&63),t[o++]=128|63&n);return t},n.buf2binstring=function(e){return c(e,e.length)},n.binstring2buf=function(e){for(var t=new r.Buf8(e.length),n=0,i=t.length;n<i;n++)t[n]=e.charCodeAt(n);return t},n.buf2string=function(e,t){var n,r,i,a,s=t||e.length,l=Array(2*s);for(n=r=0;n<s;)if((i=e[n++])<128)l[r++]=i;else if(4<(a=o[i]))l[r++]=65533,n+=a-1;else{for(i&=a===2?31:a===3?15:7;1<a&&n<s;)i=i<<6|63&e[n++],a--;1<a?l[r++]=65533:i<65536?l[r++]=i:(i-=65536,l[r++]=55296|i>>10&1023,l[r++]=56320|1023&i)}return c(l,r)},n.utf8border=function(e,t){var n;for((t||=e.length)>e.length&&(t=e.length),n=t-1;0<=n&&(192&e[n])==128;)n--;return n<0||n===0?t:n+o[e[n]]>t?n:t}},{"./common":41}],43:[function(e,t,n){t.exports=function(e,t,n,r){for(var i=65535&e,a=e>>>16&65535,o=0;n!==0;){for(n-=o=2e3<n?2e3:n;a=a+(i=i+t[r++]|0)|0,--o;);i%=65521,a%=65521}return i|a<<16}},{}],44:[function(e,t,n){t.exports={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8}},{}],45:[function(e,t,n){var r=function(){for(var e,t=[],n=0;n<256;n++){e=n;for(var r=0;r<8;r++)e=1&e?3988292384^e>>>1:e>>>1;t[n]=e}return t}();t.exports=function(e,t,n,i){var a=r,o=i+n;e^=-1;for(var s=i;s<o;s++)e=e>>>8^a[255&(e^t[s])];return-1^e}},{}],46:[function(e,t,n){var r,i=e(`../utils/common`),a=e(`./trees`),o=e(`./adler32`),s=e(`./crc32`),c=e(`./messages`),l=0,u=4,d=0,f=-2,p=-1,m=4,h=2,g=8,_=9,v=286,y=30,b=19,x=2*v+1,S=15,C=3,w=258,T=w+C+1,E=42,D=113,O=1,k=2,A=3,j=4;function M(e,t){return e.msg=c[t],t}function N(e){return(e<<1)-(4<e?9:0)}function P(e){for(var t=e.length;0<=--t;)e[t]=0}function F(e){var t=e.state,n=t.pending;n>e.avail_out&&(n=e.avail_out),n!==0&&(i.arraySet(e.output,t.pending_buf,t.pending_out,n,e.next_out),e.next_out+=n,t.pending_out+=n,e.total_out+=n,e.avail_out-=n,t.pending-=n,t.pending===0&&(t.pending_out=0))}function I(e,t){a._tr_flush_block(e,0<=e.block_start?e.block_start:-1,e.strstart-e.block_start,t),e.block_start=e.strstart,F(e.strm)}function R(e,t){e.pending_buf[e.pending++]=t}function z(e,t){e.pending_buf[e.pending++]=t>>>8&255,e.pending_buf[e.pending++]=255&t}function B(e,t){var n,r,i=e.max_chain_length,a=e.strstart,o=e.prev_length,s=e.nice_match,c=e.strstart>e.w_size-T?e.strstart-(e.w_size-T):0,l=e.window,u=e.w_mask,d=e.prev,f=e.strstart+w,p=l[a+o-1],m=l[a+o];e.prev_length>=e.good_match&&(i>>=2),s>e.lookahead&&(s=e.lookahead);do if(l[(n=t)+o]===m&&l[n+o-1]===p&&l[n]===l[a]&&l[++n]===l[a+1]){a+=2,n++;do;while(l[++a]===l[++n]&&l[++a]===l[++n]&&l[++a]===l[++n]&&l[++a]===l[++n]&&l[++a]===l[++n]&&l[++a]===l[++n]&&l[++a]===l[++n]&&l[++a]===l[++n]&&a<f);if(r=w-(f-a),a=f-w,o<r){if(e.match_start=t,s<=(o=r))break;p=l[a+o-1],m=l[a+o]}}while((t=d[t&u])>c&&--i!=0);return o<=e.lookahead?o:e.lookahead}function V(e){var t,n,r,a,c,l,u,d,f,p,m=e.w_size;do{if(a=e.window_size-e.lookahead-e.strstart,e.strstart>=m+(m-T)){for(i.arraySet(e.window,e.window,m,m,0),e.match_start-=m,e.strstart-=m,e.block_start-=m,t=n=e.hash_size;r=e.head[--t],e.head[t]=m<=r?r-m:0,--n;);for(t=n=m;r=e.prev[--t],e.prev[t]=m<=r?r-m:0,--n;);a+=m}if(e.strm.avail_in===0)break;if(l=e.strm,u=e.window,d=e.strstart+e.lookahead,f=a,p=void 0,p=l.avail_in,f<p&&(p=f),n=p===0?0:(l.avail_in-=p,i.arraySet(u,l.input,l.next_in,p,d),l.state.wrap===1?l.adler=o(l.adler,u,p,d):l.state.wrap===2&&(l.adler=s(l.adler,u,p,d)),l.next_in+=p,l.total_in+=p,p),e.lookahead+=n,e.lookahead+e.insert>=C)for(c=e.strstart-e.insert,e.ins_h=e.window[c],e.ins_h=(e.ins_h<<e.hash_shift^e.window[c+1])&e.hash_mask;e.insert&&(e.ins_h=(e.ins_h<<e.hash_shift^e.window[c+C-1])&e.hash_mask,e.prev[c&e.w_mask]=e.head[e.ins_h],e.head[e.ins_h]=c,c++,e.insert--,!(e.lookahead+e.insert<C)););}while(e.lookahead<T&&e.strm.avail_in!==0)}function ee(e,t){for(var n,r;;){if(e.lookahead<T){if(V(e),e.lookahead<T&&t===l)return O;if(e.lookahead===0)break}if(n=0,e.lookahead>=C&&(e.ins_h=(e.ins_h<<e.hash_shift^e.window[e.strstart+C-1])&e.hash_mask,n=e.prev[e.strstart&e.w_mask]=e.head[e.ins_h],e.head[e.ins_h]=e.strstart),n!==0&&e.strstart-n<=e.w_size-T&&(e.match_length=B(e,n)),e.match_length>=C){if(r=a._tr_tally(e,e.strstart-e.match_start,e.match_length-C),e.lookahead-=e.match_length,e.match_length<=e.max_lazy_match&&e.lookahead>=C){for(e.match_length--;e.strstart++,e.ins_h=(e.ins_h<<e.hash_shift^e.window[e.strstart+C-1])&e.hash_mask,n=e.prev[e.strstart&e.w_mask]=e.head[e.ins_h],e.head[e.ins_h]=e.strstart,--e.match_length!=0;);e.strstart++}else e.strstart+=e.match_length,e.match_length=0,e.ins_h=e.window[e.strstart],e.ins_h=(e.ins_h<<e.hash_shift^e.window[e.strstart+1])&e.hash_mask}else r=a._tr_tally(e,0,e.window[e.strstart]),e.lookahead--,e.strstart++;if(r&&(I(e,!1),e.strm.avail_out===0))return O}return e.insert=e.strstart<C-1?e.strstart:C-1,t===u?(I(e,!0),e.strm.avail_out===0?A:j):e.last_lit&&(I(e,!1),e.strm.avail_out===0)?O:k}function H(e,t){for(var n,r,i;;){if(e.lookahead<T){if(V(e),e.lookahead<T&&t===l)return O;if(e.lookahead===0)break}if(n=0,e.lookahead>=C&&(e.ins_h=(e.ins_h<<e.hash_shift^e.window[e.strstart+C-1])&e.hash_mask,n=e.prev[e.strstart&e.w_mask]=e.head[e.ins_h],e.head[e.ins_h]=e.strstart),e.prev_length=e.match_length,e.prev_match=e.match_start,e.match_length=C-1,n!==0&&e.prev_length<e.max_lazy_match&&e.strstart-n<=e.w_size-T&&(e.match_length=B(e,n),e.match_length<=5&&(e.strategy===1||e.match_length===C&&4096<e.strstart-e.match_start)&&(e.match_length=C-1)),e.prev_length>=C&&e.match_length<=e.prev_length){for(i=e.strstart+e.lookahead-C,r=a._tr_tally(e,e.strstart-1-e.prev_match,e.prev_length-C),e.lookahead-=e.prev_length-1,e.prev_length-=2;++e.strstart<=i&&(e.ins_h=(e.ins_h<<e.hash_shift^e.window[e.strstart+C-1])&e.hash_mask,n=e.prev[e.strstart&e.w_mask]=e.head[e.ins_h],e.head[e.ins_h]=e.strstart),--e.prev_length!=0;);if(e.match_available=0,e.match_length=C-1,e.strstart++,r&&(I(e,!1),e.strm.avail_out===0))return O}else if(e.match_available){if((r=a._tr_tally(e,0,e.window[e.strstart-1]))&&I(e,!1),e.strstart++,e.lookahead--,e.strm.avail_out===0)return O}else e.match_available=1,e.strstart++,e.lookahead--}return e.match_available&&=(r=a._tr_tally(e,0,e.window[e.strstart-1]),0),e.insert=e.strstart<C-1?e.strstart:C-1,t===u?(I(e,!0),e.strm.avail_out===0?A:j):e.last_lit&&(I(e,!1),e.strm.avail_out===0)?O:k}function te(e,t,n,r,i){this.good_length=e,this.max_lazy=t,this.nice_length=n,this.max_chain=r,this.func=i}function ne(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=g,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new i.Buf16(2*x),this.dyn_dtree=new i.Buf16(2*(2*y+1)),this.bl_tree=new i.Buf16(2*(2*b+1)),P(this.dyn_ltree),P(this.dyn_dtree),P(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new i.Buf16(S+1),this.heap=new i.Buf16(2*v+1),P(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new i.Buf16(2*v+1),P(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}function re(e){var t;return e&&e.state?(e.total_in=e.total_out=0,e.data_type=h,(t=e.state).pending=0,t.pending_out=0,t.wrap<0&&(t.wrap=-t.wrap),t.status=t.wrap?E:D,e.adler=t.wrap===2?0:1,t.last_flush=l,a._tr_init(t),d):M(e,f)}function ie(e){var t=re(e);return t===d&&function(e){e.window_size=2*e.w_size,P(e.head),e.max_lazy_match=r[e.level].max_lazy,e.good_match=r[e.level].good_length,e.nice_match=r[e.level].nice_length,e.max_chain_length=r[e.level].max_chain,e.strstart=0,e.block_start=0,e.lookahead=0,e.insert=0,e.match_length=e.prev_length=C-1,e.match_available=0,e.ins_h=0}(e.state),t}function ae(e,t,n,r,a,o){if(!e)return f;var s=1;if(t===p&&(t=6),r<0?(s=0,r=-r):15<r&&(s=2,r-=16),a<1||_<a||n!==g||r<8||15<r||t<0||9<t||o<0||m<o)return M(e,f);r===8&&(r=9);var c=new ne;return(e.state=c).strm=e,c.wrap=s,c.gzhead=null,c.w_bits=r,c.w_size=1<<c.w_bits,c.w_mask=c.w_size-1,c.hash_bits=a+7,c.hash_size=1<<c.hash_bits,c.hash_mask=c.hash_size-1,c.hash_shift=~~((c.hash_bits+C-1)/C),c.window=new i.Buf8(2*c.w_size),c.head=new i.Buf16(c.hash_size),c.prev=new i.Buf16(c.w_size),c.lit_bufsize=1<<a+6,c.pending_buf_size=4*c.lit_bufsize,c.pending_buf=new i.Buf8(c.pending_buf_size),c.d_buf=1*c.lit_bufsize,c.l_buf=3*c.lit_bufsize,c.level=t,c.strategy=o,c.method=n,ie(e)}r=[new te(0,0,0,0,function(e,t){var n=65535;for(n>e.pending_buf_size-5&&(n=e.pending_buf_size-5);;){if(e.lookahead<=1){if(V(e),e.lookahead===0&&t===l)return O;if(e.lookahead===0)break}e.strstart+=e.lookahead,e.lookahead=0;var r=e.block_start+n;if((e.strstart===0||e.strstart>=r)&&(e.lookahead=e.strstart-r,e.strstart=r,I(e,!1),e.strm.avail_out===0)||e.strstart-e.block_start>=e.w_size-T&&(I(e,!1),e.strm.avail_out===0))return O}return e.insert=0,t===u?(I(e,!0),e.strm.avail_out===0?A:j):(e.strstart>e.block_start&&(I(e,!1),e.strm.avail_out),O)}),new te(4,4,8,4,ee),new te(4,5,16,8,ee),new te(4,6,32,32,ee),new te(4,4,16,16,H),new te(8,16,32,32,H),new te(8,16,128,128,H),new te(8,32,128,256,H),new te(32,128,258,1024,H),new te(32,258,258,4096,H)],n.deflateInit=function(e,t){return ae(e,t,g,15,8,0)},n.deflateInit2=ae,n.deflateReset=ie,n.deflateResetKeep=re,n.deflateSetHeader=function(e,t){return e&&e.state&&e.state.wrap===2?(e.state.gzhead=t,d):f},n.deflate=function(e,t){var n,i,o,c;if(!e||!e.state||5<t||t<0)return e?M(e,f):f;if(i=e.state,!e.output||!e.input&&e.avail_in!==0||i.status===666&&t!==u)return M(e,e.avail_out===0?-5:f);if(i.strm=e,n=i.last_flush,i.last_flush=t,i.status===E){if(i.wrap===2)e.adler=0,R(i,31),R(i,139),R(i,8),i.gzhead?(R(i,+!!i.gzhead.text+(i.gzhead.hcrc?2:0)+(i.gzhead.extra?4:0)+(i.gzhead.name?8:0)+(i.gzhead.comment?16:0)),R(i,255&i.gzhead.time),R(i,i.gzhead.time>>8&255),R(i,i.gzhead.time>>16&255),R(i,i.gzhead.time>>24&255),R(i,i.level===9?2:2<=i.strategy||i.level<2?4:0),R(i,255&i.gzhead.os),i.gzhead.extra&&i.gzhead.extra.length&&(R(i,255&i.gzhead.extra.length),R(i,i.gzhead.extra.length>>8&255)),i.gzhead.hcrc&&(e.adler=s(e.adler,i.pending_buf,i.pending,0)),i.gzindex=0,i.status=69):(R(i,0),R(i,0),R(i,0),R(i,0),R(i,0),R(i,i.level===9?2:2<=i.strategy||i.level<2?4:0),R(i,3),i.status=D);else{var p=g+(i.w_bits-8<<4)<<8;p|=(2<=i.strategy||i.level<2?0:i.level<6?1:i.level===6?2:3)<<6,i.strstart!==0&&(p|=32),p+=31-p%31,i.status=D,z(i,p),i.strstart!==0&&(z(i,e.adler>>>16),z(i,65535&e.adler)),e.adler=1}}if(i.status===69){if(i.gzhead.extra){for(o=i.pending;i.gzindex<(65535&i.gzhead.extra.length)&&(i.pending!==i.pending_buf_size||(i.gzhead.hcrc&&i.pending>o&&(e.adler=s(e.adler,i.pending_buf,i.pending-o,o)),F(e),o=i.pending,i.pending!==i.pending_buf_size));)R(i,255&i.gzhead.extra[i.gzindex]),i.gzindex++;i.gzhead.hcrc&&i.pending>o&&(e.adler=s(e.adler,i.pending_buf,i.pending-o,o)),i.gzindex===i.gzhead.extra.length&&(i.gzindex=0,i.status=73)}else i.status=73}if(i.status===73){if(i.gzhead.name){o=i.pending;do{if(i.pending===i.pending_buf_size&&(i.gzhead.hcrc&&i.pending>o&&(e.adler=s(e.adler,i.pending_buf,i.pending-o,o)),F(e),o=i.pending,i.pending===i.pending_buf_size)){c=1;break}c=i.gzindex<i.gzhead.name.length?255&i.gzhead.name.charCodeAt(i.gzindex++):0,R(i,c)}while(c!==0);i.gzhead.hcrc&&i.pending>o&&(e.adler=s(e.adler,i.pending_buf,i.pending-o,o)),c===0&&(i.gzindex=0,i.status=91)}else i.status=91}if(i.status===91){if(i.gzhead.comment){o=i.pending;do{if(i.pending===i.pending_buf_size&&(i.gzhead.hcrc&&i.pending>o&&(e.adler=s(e.adler,i.pending_buf,i.pending-o,o)),F(e),o=i.pending,i.pending===i.pending_buf_size)){c=1;break}c=i.gzindex<i.gzhead.comment.length?255&i.gzhead.comment.charCodeAt(i.gzindex++):0,R(i,c)}while(c!==0);i.gzhead.hcrc&&i.pending>o&&(e.adler=s(e.adler,i.pending_buf,i.pending-o,o)),c===0&&(i.status=103)}else i.status=103}if(i.status===103&&(i.gzhead.hcrc?(i.pending+2>i.pending_buf_size&&F(e),i.pending+2<=i.pending_buf_size&&(R(i,255&e.adler),R(i,e.adler>>8&255),e.adler=0,i.status=D)):i.status=D),i.pending!==0){if(F(e),e.avail_out===0)return i.last_flush=-1,d}else if(e.avail_in===0&&N(t)<=N(n)&&t!==u)return M(e,-5);if(i.status===666&&e.avail_in!==0)return M(e,-5);if(e.avail_in!==0||i.lookahead!==0||t!==l&&i.status!==666){var m=i.strategy===2?function(e,t){for(var n;;){if(e.lookahead===0&&(V(e),e.lookahead===0)){if(t===l)return O;break}if(e.match_length=0,n=a._tr_tally(e,0,e.window[e.strstart]),e.lookahead--,e.strstart++,n&&(I(e,!1),e.strm.avail_out===0))return O}return e.insert=0,t===u?(I(e,!0),e.strm.avail_out===0?A:j):e.last_lit&&(I(e,!1),e.strm.avail_out===0)?O:k}(i,t):i.strategy===3?function(e,t){for(var n,r,i,o,s=e.window;;){if(e.lookahead<=w){if(V(e),e.lookahead<=w&&t===l)return O;if(e.lookahead===0)break}if(e.match_length=0,e.lookahead>=C&&0<e.strstart&&(r=s[i=e.strstart-1])===s[++i]&&r===s[++i]&&r===s[++i]){o=e.strstart+w;do;while(r===s[++i]&&r===s[++i]&&r===s[++i]&&r===s[++i]&&r===s[++i]&&r===s[++i]&&r===s[++i]&&r===s[++i]&&i<o);e.match_length=w-(o-i),e.match_length>e.lookahead&&(e.match_length=e.lookahead)}if(e.match_length>=C?(n=a._tr_tally(e,1,e.match_length-C),e.lookahead-=e.match_length,e.strstart+=e.match_length,e.match_length=0):(n=a._tr_tally(e,0,e.window[e.strstart]),e.lookahead--,e.strstart++),n&&(I(e,!1),e.strm.avail_out===0))return O}return e.insert=0,t===u?(I(e,!0),e.strm.avail_out===0?A:j):e.last_lit&&(I(e,!1),e.strm.avail_out===0)?O:k}(i,t):r[i.level].func(i,t);if(m!==A&&m!==j||(i.status=666),m===O||m===A)return e.avail_out===0&&(i.last_flush=-1),d;if(m===k&&(t===1?a._tr_align(i):t!==5&&(a._tr_stored_block(i,0,0,!1),t===3&&(P(i.head),i.lookahead===0&&(i.strstart=0,i.block_start=0,i.insert=0))),F(e),e.avail_out===0))return i.last_flush=-1,d}return t===u?i.wrap<=0?1:(i.wrap===2?(R(i,255&e.adler),R(i,e.adler>>8&255),R(i,e.adler>>16&255),R(i,e.adler>>24&255),R(i,255&e.total_in),R(i,e.total_in>>8&255),R(i,e.total_in>>16&255),R(i,e.total_in>>24&255)):(z(i,e.adler>>>16),z(i,65535&e.adler)),F(e),0<i.wrap&&(i.wrap=-i.wrap),i.pending===0?1:d):d},n.deflateEnd=function(e){var t;return e&&e.state?(t=e.state.status)!==E&&t!==69&&t!==73&&t!==91&&t!==103&&t!==D&&t!==666?M(e,f):(e.state=null,t===D?M(e,-3):d):f},n.deflateSetDictionary=function(e,t){var n,r,a,s,c,l,u,p,m=t.length;if(!e||!e.state||(s=(n=e.state).wrap)===2||s===1&&n.status!==E||n.lookahead)return f;for(s===1&&(e.adler=o(e.adler,t,m,0)),n.wrap=0,m>=n.w_size&&(s===0&&(P(n.head),n.strstart=0,n.block_start=0,n.insert=0),p=new i.Buf8(n.w_size),i.arraySet(p,t,m-n.w_size,n.w_size,0),t=p,m=n.w_size),c=e.avail_in,l=e.next_in,u=e.input,e.avail_in=m,e.next_in=0,e.input=t,V(n);n.lookahead>=C;){for(r=n.strstart,a=n.lookahead-(C-1);n.ins_h=(n.ins_h<<n.hash_shift^n.window[r+C-1])&n.hash_mask,n.prev[r&n.w_mask]=n.head[n.ins_h],n.head[n.ins_h]=r,r++,--a;);n.strstart=r,n.lookahead=C-1,V(n)}return n.strstart+=n.lookahead,n.block_start=n.strstart,n.insert=n.lookahead,n.lookahead=0,n.match_length=n.prev_length=C-1,n.match_available=0,e.next_in=l,e.input=u,e.avail_in=c,n.wrap=s,d},n.deflateInfo=`pako deflate (from Nodeca project)`},{"../utils/common":41,"./adler32":43,"./crc32":45,"./messages":51,"./trees":52}],47:[function(e,t,n){t.exports=function(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name=``,this.comment=``,this.hcrc=0,this.done=!1}},{}],48:[function(e,t,n){t.exports=function(e,t){var n=e.state,r=e.next_in,i,a,o,s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T=e.input,E;i=r+(e.avail_in-5),a=e.next_out,E=e.output,o=a-(t-e.avail_out),s=a+(e.avail_out-257),c=n.dmax,l=n.wsize,u=n.whave,d=n.wnext,f=n.window,p=n.hold,m=n.bits,h=n.lencode,g=n.distcode,_=(1<<n.lenbits)-1,v=(1<<n.distbits)-1;e:do{m<15&&(p+=T[r++]<<m,m+=8,p+=T[r++]<<m,m+=8),y=h[p&_];t:for(;;){if(p>>>=b=y>>>24,m-=b,(b=y>>>16&255)==0)E[a++]=65535&y;else{if(!(16&b)){if(!(64&b)){y=h[(65535&y)+(p&(1<<b)-1)];continue t}if(32&b){n.mode=12;break e}e.msg=`invalid literal/length code`,n.mode=30;break e}x=65535&y,(b&=15)&&(m<b&&(p+=T[r++]<<m,m+=8),x+=p&(1<<b)-1,p>>>=b,m-=b),m<15&&(p+=T[r++]<<m,m+=8,p+=T[r++]<<m,m+=8),y=g[p&v];r:for(;;){if(p>>>=b=y>>>24,m-=b,!(16&(b=y>>>16&255))){if(!(64&b)){y=g[(65535&y)+(p&(1<<b)-1)];continue r}e.msg=`invalid distance code`,n.mode=30;break e}if(S=65535&y,m<(b&=15)&&(p+=T[r++]<<m,(m+=8)<b&&(p+=T[r++]<<m,m+=8)),c<(S+=p&(1<<b)-1)){e.msg=`invalid distance too far back`,n.mode=30;break e}if(p>>>=b,m-=b,(b=a-o)<S){if(u<(b=S-b)&&n.sane){e.msg=`invalid distance too far back`,n.mode=30;break e}if(w=f,(C=0)===d){if(C+=l-b,b<x){for(x-=b;E[a++]=f[C++],--b;);C=a-S,w=E}}else if(d<b){if(C+=l+d-b,(b-=d)<x){for(x-=b;E[a++]=f[C++],--b;);if(C=0,d<x){for(x-=b=d;E[a++]=f[C++],--b;);C=a-S,w=E}}}else if(C+=d-b,b<x){for(x-=b;E[a++]=f[C++],--b;);C=a-S,w=E}for(;2<x;)E[a++]=w[C++],E[a++]=w[C++],E[a++]=w[C++],x-=3;x&&(E[a++]=w[C++],1<x&&(E[a++]=w[C++]))}else{for(C=a-S;E[a++]=E[C++],E[a++]=E[C++],E[a++]=E[C++],2<(x-=3););x&&(E[a++]=E[C++],1<x&&(E[a++]=E[C++]))}break}}break}}while(r<i&&a<s);r-=x=m>>3,p&=(1<<(m-=x<<3))-1,e.next_in=r,e.next_out=a,e.avail_in=r<i?i-r+5:5-(r-i),e.avail_out=a<s?s-a+257:257-(a-s),n.hold=p,n.bits=m}},{}],49:[function(e,t,n){var r=e(`../utils/common`),i=e(`./adler32`),a=e(`./crc32`),o=e(`./inffast`),s=e(`./inftrees`),c=1,l=2,u=0,d=-2,f=1,p=852,m=592;function h(e){return(e>>>24&255)+(e>>>8&65280)+((65280&e)<<8)+((255&e)<<24)}function g(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new r.Buf16(320),this.work=new r.Buf16(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}function _(e){var t;return e&&e.state?(t=e.state,e.total_in=e.total_out=t.total=0,e.msg=``,t.wrap&&(e.adler=1&t.wrap),t.mode=f,t.last=0,t.havedict=0,t.dmax=32768,t.head=null,t.hold=0,t.bits=0,t.lencode=t.lendyn=new r.Buf32(p),t.distcode=t.distdyn=new r.Buf32(m),t.sane=1,t.back=-1,u):d}function v(e){var t;return e&&e.state?((t=e.state).wsize=0,t.whave=0,t.wnext=0,_(e)):d}function y(e,t){var n,r;return e&&e.state?(r=e.state,t<0?(n=0,t=-t):(n=1+(t>>4),t<48&&(t&=15)),t&&(t<8||15<t)?d:(r.window!==null&&r.wbits!==t&&(r.window=null),r.wrap=n,r.wbits=t,v(e))):d}function b(e,t){var n,r;return e?(r=new g,(e.state=r).window=null,(n=y(e,t))!==u&&(e.state=null),n):d}var x,S,C=!0;function w(e){if(C){var t;for(x=new r.Buf32(512),S=new r.Buf32(32),t=0;t<144;)e.lens[t++]=8;for(;t<256;)e.lens[t++]=9;for(;t<280;)e.lens[t++]=7;for(;t<288;)e.lens[t++]=8;for(s(c,e.lens,0,288,x,0,e.work,{bits:9}),t=0;t<32;)e.lens[t++]=5;s(l,e.lens,0,32,S,0,e.work,{bits:5}),C=!1}e.lencode=x,e.lenbits=9,e.distcode=S,e.distbits=5}function T(e,t,n,i){var a,o=e.state;return o.window===null&&(o.wsize=1<<o.wbits,o.wnext=0,o.whave=0,o.window=new r.Buf8(o.wsize)),i>=o.wsize?(r.arraySet(o.window,t,n-o.wsize,o.wsize,0),o.wnext=0,o.whave=o.wsize):(i<(a=o.wsize-o.wnext)&&(a=i),r.arraySet(o.window,t,n-i,a,o.wnext),(i-=a)?(r.arraySet(o.window,t,n-i,i,0),o.wnext=i,o.whave=o.wsize):(o.wnext+=a,o.wnext===o.wsize&&(o.wnext=0),o.whave<o.wsize&&(o.whave+=a))),0}n.inflateReset=v,n.inflateReset2=y,n.inflateResetKeep=_,n.inflateInit=function(e){return b(e,15)},n.inflateInit2=b,n.inflate=function(e,t){var n,p,m,g,_,v,y,b,x,S,C,E,D,O,k,A,j,M,N,P,F,I,R,z,B=0,V=new r.Buf8(4),ee=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];if(!e||!e.state||!e.output||!e.input&&e.avail_in!==0)return d;(n=e.state).mode===12&&(n.mode=13),_=e.next_out,m=e.output,y=e.avail_out,g=e.next_in,p=e.input,v=e.avail_in,b=n.hold,x=n.bits,S=v,C=y,I=u;e:for(;;)switch(n.mode){case f:if(n.wrap===0){n.mode=13;break}for(;x<16;){if(v===0)break e;v--,b+=p[g++]<<x,x+=8}if(2&n.wrap&&b===35615){V[n.check=0]=255&b,V[1]=b>>>8&255,n.check=a(n.check,V,2,0),x=b=0,n.mode=2;break}if(n.flags=0,n.head&&(n.head.done=!1),!(1&n.wrap)||(((255&b)<<8)+(b>>8))%31){e.msg=`incorrect header check`,n.mode=30;break}if((15&b)!=8){e.msg=`unknown compression method`,n.mode=30;break}if(x-=4,F=8+(15&(b>>>=4)),n.wbits===0)n.wbits=F;else if(F>n.wbits){e.msg=`invalid window size`,n.mode=30;break}n.dmax=1<<F,e.adler=n.check=1,n.mode=512&b?10:12,x=b=0;break;case 2:for(;x<16;){if(v===0)break e;v--,b+=p[g++]<<x,x+=8}if(n.flags=b,(255&n.flags)!=8){e.msg=`unknown compression method`,n.mode=30;break}if(57344&n.flags){e.msg=`unknown header flags set`,n.mode=30;break}n.head&&(n.head.text=b>>8&1),512&n.flags&&(V[0]=255&b,V[1]=b>>>8&255,n.check=a(n.check,V,2,0)),x=b=0,n.mode=3;case 3:for(;x<32;){if(v===0)break e;v--,b+=p[g++]<<x,x+=8}n.head&&(n.head.time=b),512&n.flags&&(V[0]=255&b,V[1]=b>>>8&255,V[2]=b>>>16&255,V[3]=b>>>24&255,n.check=a(n.check,V,4,0)),x=b=0,n.mode=4;case 4:for(;x<16;){if(v===0)break e;v--,b+=p[g++]<<x,x+=8}n.head&&(n.head.xflags=255&b,n.head.os=b>>8),512&n.flags&&(V[0]=255&b,V[1]=b>>>8&255,n.check=a(n.check,V,2,0)),x=b=0,n.mode=5;case 5:if(1024&n.flags){for(;x<16;){if(v===0)break e;v--,b+=p[g++]<<x,x+=8}n.length=b,n.head&&(n.head.extra_len=b),512&n.flags&&(V[0]=255&b,V[1]=b>>>8&255,n.check=a(n.check,V,2,0)),x=b=0}else n.head&&(n.head.extra=null);n.mode=6;case 6:if(1024&n.flags&&(v<(E=n.length)&&(E=v),E&&(n.head&&(F=n.head.extra_len-n.length,n.head.extra||(n.head.extra=Array(n.head.extra_len)),r.arraySet(n.head.extra,p,g,E,F)),512&n.flags&&(n.check=a(n.check,p,E,g)),v-=E,g+=E,n.length-=E),n.length))break e;n.length=0,n.mode=7;case 7:if(2048&n.flags){if(v===0)break e;for(E=0;F=p[g+E++],n.head&&F&&n.length<65536&&(n.head.name+=String.fromCharCode(F)),F&&E<v;);if(512&n.flags&&(n.check=a(n.check,p,E,g)),v-=E,g+=E,F)break e}else n.head&&(n.head.name=null);n.length=0,n.mode=8;case 8:if(4096&n.flags){if(v===0)break e;for(E=0;F=p[g+E++],n.head&&F&&n.length<65536&&(n.head.comment+=String.fromCharCode(F)),F&&E<v;);if(512&n.flags&&(n.check=a(n.check,p,E,g)),v-=E,g+=E,F)break e}else n.head&&(n.head.comment=null);n.mode=9;case 9:if(512&n.flags){for(;x<16;){if(v===0)break e;v--,b+=p[g++]<<x,x+=8}if(b!==(65535&n.check)){e.msg=`header crc mismatch`,n.mode=30;break}x=b=0}n.head&&(n.head.hcrc=n.flags>>9&1,n.head.done=!0),e.adler=n.check=0,n.mode=12;break;case 10:for(;x<32;){if(v===0)break e;v--,b+=p[g++]<<x,x+=8}e.adler=n.check=h(b),x=b=0,n.mode=11;case 11:if(n.havedict===0)return e.next_out=_,e.avail_out=y,e.next_in=g,e.avail_in=v,n.hold=b,n.bits=x,2;e.adler=n.check=1,n.mode=12;case 12:if(t===5||t===6)break e;case 13:if(n.last){b>>>=7&x,x-=7&x,n.mode=27;break}for(;x<3;){if(v===0)break e;v--,b+=p[g++]<<x,x+=8}switch(n.last=1&b,--x,3&(b>>>=1)){case 0:n.mode=14;break;case 1:if(w(n),n.mode=20,t!==6)break;b>>>=2,x-=2;break e;case 2:n.mode=17;break;case 3:e.msg=`invalid block type`,n.mode=30}b>>>=2,x-=2;break;case 14:for(b>>>=7&x,x-=7&x;x<32;){if(v===0)break e;v--,b+=p[g++]<<x,x+=8}if((65535&b)!=(b>>>16^65535)){e.msg=`invalid stored block lengths`,n.mode=30;break}if(n.length=65535&b,x=b=0,n.mode=15,t===6)break e;case 15:n.mode=16;case 16:if(E=n.length){if(v<E&&(E=v),y<E&&(E=y),E===0)break e;r.arraySet(m,p,g,E,_),v-=E,g+=E,y-=E,_+=E,n.length-=E;break}n.mode=12;break;case 17:for(;x<14;){if(v===0)break e;v--,b+=p[g++]<<x,x+=8}if(n.nlen=257+(31&b),b>>>=5,x-=5,n.ndist=1+(31&b),b>>>=5,x-=5,n.ncode=4+(15&b),b>>>=4,x-=4,286<n.nlen||30<n.ndist){e.msg=`too many length or distance symbols`,n.mode=30;break}n.have=0,n.mode=18;case 18:for(;n.have<n.ncode;){for(;x<3;){if(v===0)break e;v--,b+=p[g++]<<x,x+=8}n.lens[ee[n.have++]]=7&b,b>>>=3,x-=3}for(;n.have<19;)n.lens[ee[n.have++]]=0;if(n.lencode=n.lendyn,n.lenbits=7,R={bits:n.lenbits},I=s(0,n.lens,0,19,n.lencode,0,n.work,R),n.lenbits=R.bits,I){e.msg=`invalid code lengths set`,n.mode=30;break}n.have=0,n.mode=19;case 19:for(;n.have<n.nlen+n.ndist;){for(;A=(B=n.lencode[b&(1<<n.lenbits)-1])>>>16&255,j=65535&B,!((k=B>>>24)<=x);){if(v===0)break e;v--,b+=p[g++]<<x,x+=8}if(j<16)b>>>=k,x-=k,n.lens[n.have++]=j;else{if(j===16){for(z=k+2;x<z;){if(v===0)break e;v--,b+=p[g++]<<x,x+=8}if(b>>>=k,x-=k,n.have===0){e.msg=`invalid bit length repeat`,n.mode=30;break}F=n.lens[n.have-1],E=3+(3&b),b>>>=2,x-=2}else if(j===17){for(z=k+3;x<z;){if(v===0)break e;v--,b+=p[g++]<<x,x+=8}x-=k,F=0,E=3+(7&(b>>>=k)),b>>>=3,x-=3}else{for(z=k+7;x<z;){if(v===0)break e;v--,b+=p[g++]<<x,x+=8}x-=k,F=0,E=11+(127&(b>>>=k)),b>>>=7,x-=7}if(n.have+E>n.nlen+n.ndist){e.msg=`invalid bit length repeat`,n.mode=30;break}for(;E--;)n.lens[n.have++]=F}}if(n.mode===30)break;if(n.lens[256]===0){e.msg=`invalid code -- missing end-of-block`,n.mode=30;break}if(n.lenbits=9,R={bits:n.lenbits},I=s(c,n.lens,0,n.nlen,n.lencode,0,n.work,R),n.lenbits=R.bits,I){e.msg=`invalid literal/lengths set`,n.mode=30;break}if(n.distbits=6,n.distcode=n.distdyn,R={bits:n.distbits},I=s(l,n.lens,n.nlen,n.ndist,n.distcode,0,n.work,R),n.distbits=R.bits,I){e.msg=`invalid distances set`,n.mode=30;break}if(n.mode=20,t===6)break e;case 20:n.mode=21;case 21:if(6<=v&&258<=y){e.next_out=_,e.avail_out=y,e.next_in=g,e.avail_in=v,n.hold=b,n.bits=x,o(e,C),_=e.next_out,m=e.output,y=e.avail_out,g=e.next_in,p=e.input,v=e.avail_in,b=n.hold,x=n.bits,n.mode===12&&(n.back=-1);break}for(n.back=0;A=(B=n.lencode[b&(1<<n.lenbits)-1])>>>16&255,j=65535&B,!((k=B>>>24)<=x);){if(v===0)break e;v--,b+=p[g++]<<x,x+=8}if(A&&!(240&A)){for(M=k,N=A,P=j;A=(B=n.lencode[P+((b&(1<<M+N)-1)>>M)])>>>16&255,j=65535&B,!(M+(k=B>>>24)<=x);){if(v===0)break e;v--,b+=p[g++]<<x,x+=8}b>>>=M,x-=M,n.back+=M}if(b>>>=k,x-=k,n.back+=k,n.length=j,A===0){n.mode=26;break}if(32&A){n.back=-1,n.mode=12;break}if(64&A){e.msg=`invalid literal/length code`,n.mode=30;break}n.extra=15&A,n.mode=22;case 22:if(n.extra){for(z=n.extra;x<z;){if(v===0)break e;v--,b+=p[g++]<<x,x+=8}n.length+=b&(1<<n.extra)-1,b>>>=n.extra,x-=n.extra,n.back+=n.extra}n.was=n.length,n.mode=23;case 23:for(;A=(B=n.distcode[b&(1<<n.distbits)-1])>>>16&255,j=65535&B,!((k=B>>>24)<=x);){if(v===0)break e;v--,b+=p[g++]<<x,x+=8}if(!(240&A)){for(M=k,N=A,P=j;A=(B=n.distcode[P+((b&(1<<M+N)-1)>>M)])>>>16&255,j=65535&B,!(M+(k=B>>>24)<=x);){if(v===0)break e;v--,b+=p[g++]<<x,x+=8}b>>>=M,x-=M,n.back+=M}if(b>>>=k,x-=k,n.back+=k,64&A){e.msg=`invalid distance code`,n.mode=30;break}n.offset=j,n.extra=15&A,n.mode=24;case 24:if(n.extra){for(z=n.extra;x<z;){if(v===0)break e;v--,b+=p[g++]<<x,x+=8}n.offset+=b&(1<<n.extra)-1,b>>>=n.extra,x-=n.extra,n.back+=n.extra}if(n.offset>n.dmax){e.msg=`invalid distance too far back`,n.mode=30;break}n.mode=25;case 25:if(y===0)break e;if(E=C-y,n.offset>E){if((E=n.offset-E)>n.whave&&n.sane){e.msg=`invalid distance too far back`,n.mode=30;break}D=E>n.wnext?(E-=n.wnext,n.wsize-E):n.wnext-E,E>n.length&&(E=n.length),O=n.window}else O=m,D=_-n.offset,E=n.length;for(y<E&&(E=y),y-=E,n.length-=E;m[_++]=O[D++],--E;);n.length===0&&(n.mode=21);break;case 26:if(y===0)break e;m[_++]=n.length,y--,n.mode=21;break;case 27:if(n.wrap){for(;x<32;){if(v===0)break e;v--,b|=p[g++]<<x,x+=8}if(C-=y,e.total_out+=C,n.total+=C,C&&(e.adler=n.check=n.flags?a(n.check,m,C,_-C):i(n.check,m,C,_-C)),C=y,(n.flags?b:h(b))!==n.check){e.msg=`incorrect data check`,n.mode=30;break}x=b=0}n.mode=28;case 28:if(n.wrap&&n.flags){for(;x<32;){if(v===0)break e;v--,b+=p[g++]<<x,x+=8}if(b!==(0|n.total)){e.msg=`incorrect length check`,n.mode=30;break}x=b=0}n.mode=29;case 29:I=1;break e;case 30:I=-3;break e;case 31:return-4;default:return d}return e.next_out=_,e.avail_out=y,e.next_in=g,e.avail_in=v,n.hold=b,n.bits=x,(n.wsize||C!==e.avail_out&&n.mode<30&&(n.mode<27||t!==4))&&T(e,e.output,e.next_out,C-e.avail_out)?(n.mode=31,-4):(S-=e.avail_in,C-=e.avail_out,e.total_in+=S,e.total_out+=C,n.total+=C,n.wrap&&C&&(e.adler=n.check=n.flags?a(n.check,m,C,e.next_out-C):i(n.check,m,C,e.next_out-C)),e.data_type=n.bits+(n.last?64:0)+(n.mode===12?128:0)+(n.mode===20||n.mode===15?256:0),(S==0&&C===0||t===4)&&I===u&&(I=-5),I)},n.inflateEnd=function(e){if(!e||!e.state)return d;var t=e.state;return t.window&&=null,e.state=null,u},n.inflateGetHeader=function(e,t){var n;return e&&e.state&&2&(n=e.state).wrap?((n.head=t).done=!1,u):d},n.inflateSetDictionary=function(e,t){var n,r=t.length;return e&&e.state?(n=e.state).wrap!==0&&n.mode!==11?d:n.mode===11&&i(1,t,r,0)!==n.check?-3:T(e,t,r,r)?(n.mode=31,-4):(n.havedict=1,u):d},n.inflateInfo=`pako inflate (from Nodeca project)`},{"../utils/common":41,"./adler32":43,"./crc32":45,"./inffast":48,"./inftrees":50}],50:[function(e,t,n){var r=e(`../utils/common`),i=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],a=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],o=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],s=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64];t.exports=function(e,t,n,c,l,u,d,f){var p,m,h,g,_,v,y,b,x,S=f.bits,C=0,w=0,T=0,E=0,D=0,O=0,k=0,A=0,j=0,M=0,N=null,P=0,F=new r.Buf16(16),I=new r.Buf16(16),R=null,z=0;for(C=0;C<=15;C++)F[C]=0;for(w=0;w<c;w++)F[t[n+w]]++;for(D=S,E=15;1<=E&&F[E]===0;E--);if(E<D&&(D=E),E===0)return l[u++]=20971520,l[u++]=20971520,f.bits=1,0;for(T=1;T<E&&F[T]===0;T++);for(D<T&&(D=T),C=A=1;C<=15;C++)if(A<<=1,(A-=F[C])<0)return-1;if(0<A&&(e===0||E!==1))return-1;for(I[1]=0,C=1;C<15;C++)I[C+1]=I[C]+F[C];for(w=0;w<c;w++)t[n+w]!==0&&(d[I[t[n+w]]++]=w);if(v=e===0?(N=R=d,19):e===1?(N=i,P-=257,R=a,z-=257,256):(N=o,R=s,-1),C=T,_=u,k=w=M=0,h=-1,g=(j=1<<(O=D))-1,e===1&&852<j||e===2&&592<j)return 1;for(;;){for(y=C-k,x=d[w]<v?(b=0,d[w]):d[w]>v?(b=R[z+d[w]],N[P+d[w]]):(b=96,0),p=1<<C-k,T=m=1<<O;l[_+(M>>k)+(m-=p)]=y<<24|b<<16|x,m!==0;);for(p=1<<C-1;M&p;)p>>=1;if(p===0?M=0:(M&=p-1,M+=p),w++,--F[C]==0){if(C===E)break;C=t[n+d[w]]}if(D<C&&(M&g)!==h){for(k===0&&(k=D),_+=T,A=1<<(O=C-k);O+k<E&&!((A-=F[O+k])<=0);)O++,A<<=1;if(j+=1<<O,e===1&&852<j||e===2&&592<j)return 1;l[h=M&g]=D<<24|O<<16|_-u}}return M!==0&&(l[_+M]=C-k<<24|4194304),f.bits=D,0}},{"../utils/common":41}],51:[function(e,t,n){t.exports={2:`need dictionary`,1:`stream end`,0:``,"-1":`file error`,"-2":`stream error`,"-3":`data error`,"-4":`insufficient memory`,"-5":`buffer error`,"-6":`incompatible version`}},{}],52:[function(e,t,n){var r=e(`../utils/common`),i=0,a=1;function o(e){for(var t=e.length;0<=--t;)e[t]=0}var s=0,c=29,l=256,u=l+1+c,d=30,f=19,p=2*u+1,m=15,h=16,g=7,_=256,v=16,y=17,b=18,x=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],S=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],C=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],w=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],T=Array(2*(u+2));o(T);var E=Array(2*d);o(E);var D=Array(512);o(D);var O=Array(256);o(O);var k=Array(c);o(k);var A,j,M,N=Array(d);function P(e,t,n,r,i){this.static_tree=e,this.extra_bits=t,this.extra_base=n,this.elems=r,this.max_length=i,this.has_stree=e&&e.length}function F(e,t){this.dyn_tree=e,this.max_code=0,this.stat_desc=t}function I(e){return e<256?D[e]:D[256+(e>>>7)]}function R(e,t){e.pending_buf[e.pending++]=255&t,e.pending_buf[e.pending++]=t>>>8&255}function z(e,t,n){e.bi_valid>h-n?(e.bi_buf|=t<<e.bi_valid&65535,R(e,e.bi_buf),e.bi_buf=t>>h-e.bi_valid,e.bi_valid+=n-h):(e.bi_buf|=t<<e.bi_valid&65535,e.bi_valid+=n)}function B(e,t,n){z(e,n[2*t],n[2*t+1])}function V(e,t){for(var n=0;n|=1&e,e>>>=1,n<<=1,0<--t;);return n>>>1}function ee(e,t,n){var r,i,a=Array(m+1),o=0;for(r=1;r<=m;r++)a[r]=o=o+n[r-1]<<1;for(i=0;i<=t;i++){var s=e[2*i+1];s!==0&&(e[2*i]=V(a[s]++,s))}}function H(e){for(var t=0;t<u;t++)e.dyn_ltree[2*t]=0;for(t=0;t<d;t++)e.dyn_dtree[2*t]=0;for(t=0;t<f;t++)e.bl_tree[2*t]=0;e.dyn_ltree[2*_]=1,e.opt_len=e.static_len=0,e.last_lit=e.matches=0}function te(e){8<e.bi_valid?R(e,e.bi_buf):0<e.bi_valid&&(e.pending_buf[e.pending++]=e.bi_buf),e.bi_buf=0,e.bi_valid=0}function ne(e,t,n,r){var i=2*t,a=2*n;return e[i]<e[a]||e[i]===e[a]&&r[t]<=r[n]}function re(e,t,n){for(var r=e.heap[n],i=n<<1;i<=e.heap_len&&(i<e.heap_len&&ne(t,e.heap[i+1],e.heap[i],e.depth)&&i++,!ne(t,r,e.heap[i],e.depth));)e.heap[n]=e.heap[i],n=i,i<<=1;e.heap[n]=r}function ie(e,t,n){var r,i,a,o,s=0;if(e.last_lit!==0)for(;r=e.pending_buf[e.d_buf+2*s]<<8|e.pending_buf[e.d_buf+2*s+1],i=e.pending_buf[e.l_buf+s],s++,r===0?B(e,i,t):(B(e,(a=O[i])+l+1,t),(o=x[a])!==0&&z(e,i-=k[a],o),B(e,a=I(--r),n),(o=S[a])!==0&&z(e,r-=N[a],o)),s<e.last_lit;);B(e,_,t)}function ae(e,t){var n,r,i,a=t.dyn_tree,o=t.stat_desc.static_tree,s=t.stat_desc.has_stree,c=t.stat_desc.elems,l=-1;for(e.heap_len=0,e.heap_max=p,n=0;n<c;n++)a[2*n]===0?a[2*n+1]=0:(e.heap[++e.heap_len]=l=n,e.depth[n]=0);for(;e.heap_len<2;)a[2*(i=e.heap[++e.heap_len]=l<2?++l:0)]=1,e.depth[i]=0,e.opt_len--,s&&(e.static_len-=o[2*i+1]);for(t.max_code=l,n=e.heap_len>>1;1<=n;n--)re(e,a,n);for(i=c;n=e.heap[1],e.heap[1]=e.heap[e.heap_len--],re(e,a,1),r=e.heap[1],e.heap[--e.heap_max]=n,e.heap[--e.heap_max]=r,a[2*i]=a[2*n]+a[2*r],e.depth[i]=(e.depth[n]>=e.depth[r]?e.depth[n]:e.depth[r])+1,a[2*n+1]=a[2*r+1]=i,e.heap[1]=i++,re(e,a,1),2<=e.heap_len;);e.heap[--e.heap_max]=e.heap[1],function(e,t){var n,r,i,a,o,s,c=t.dyn_tree,l=t.max_code,u=t.stat_desc.static_tree,d=t.stat_desc.has_stree,f=t.stat_desc.extra_bits,h=t.stat_desc.extra_base,g=t.stat_desc.max_length,_=0;for(a=0;a<=m;a++)e.bl_count[a]=0;for(c[2*e.heap[e.heap_max]+1]=0,n=e.heap_max+1;n<p;n++)g<(a=c[2*c[2*(r=e.heap[n])+1]+1]+1)&&(a=g,_++),c[2*r+1]=a,l<r||(e.bl_count[a]++,o=0,h<=r&&(o=f[r-h]),s=c[2*r],e.opt_len+=s*(a+o),d&&(e.static_len+=s*(u[2*r+1]+o)));if(_!==0){do{for(a=g-1;e.bl_count[a]===0;)a--;e.bl_count[a]--,e.bl_count[a+1]+=2,e.bl_count[g]--,_-=2}while(0<_);for(a=g;a!==0;a--)for(r=e.bl_count[a];r!==0;)l<(i=e.heap[--n])||(c[2*i+1]!==a&&(e.opt_len+=(a-c[2*i+1])*c[2*i],c[2*i+1]=a),r--)}}(e,t),ee(a,l,e.bl_count)}function oe(e,t,n){var r,i,a=-1,o=t[1],s=0,c=7,l=4;for(o===0&&(c=138,l=3),t[2*(n+1)+1]=65535,r=0;r<=n;r++)i=o,o=t[2*(r+1)+1],++s<c&&i===o||(s<l?e.bl_tree[2*i]+=s:i===0?s<=10?e.bl_tree[2*y]++:e.bl_tree[2*b]++:(i!==a&&e.bl_tree[2*i]++,e.bl_tree[2*v]++),a=i,l=(s=0)===o?(c=138,3):i===o?(c=6,3):(c=7,4))}function se(e,t,n){var r,i,a=-1,o=t[1],s=0,c=7,l=4;for(o===0&&(c=138,l=3),r=0;r<=n;r++)if(i=o,o=t[2*(r+1)+1],!(++s<c&&i===o)){if(s<l)for(;B(e,i,e.bl_tree),--s!=0;);else i===0?s<=10?(B(e,y,e.bl_tree),z(e,s-3,3)):(B(e,b,e.bl_tree),z(e,s-11,7)):(i!==a&&(B(e,i,e.bl_tree),s--),B(e,v,e.bl_tree),z(e,s-3,2));a=i,l=(s=0)===o?(c=138,3):i===o?(c=6,3):(c=7,4)}}o(N);var ce=!1;function U(e,t,n,i){z(e,(s<<1)+ +!!i,3),function(e,t,n,i){te(e),R(e,n),R(e,~n),r.arraySet(e.pending_buf,e.window,t,n,e.pending),e.pending+=n}(e,t,n,!0)}n._tr_init=function(e){ce||=(function(){var e,t,n,r,i,a=Array(m+1);for(r=n=0;r<c-1;r++)for(k[r]=n,e=0;e<1<<x[r];e++)O[n++]=r;for(O[n-1]=r,r=i=0;r<16;r++)for(N[r]=i,e=0;e<1<<S[r];e++)D[i++]=r;for(i>>=7;r<d;r++)for(N[r]=i<<7,e=0;e<1<<S[r]-7;e++)D[256+i++]=r;for(t=0;t<=m;t++)a[t]=0;for(e=0;e<=143;)T[2*e+1]=8,e++,a[8]++;for(;e<=255;)T[2*e+1]=9,e++,a[9]++;for(;e<=279;)T[2*e+1]=7,e++,a[7]++;for(;e<=287;)T[2*e+1]=8,e++,a[8]++;for(ee(T,u+1,a),e=0;e<d;e++)E[2*e+1]=5,E[2*e]=V(e,5);A=new P(T,x,l+1,u,m),j=new P(E,S,0,d,m),M=new P([],C,0,f,g)}(),!0),e.l_desc=new F(e.dyn_ltree,A),e.d_desc=new F(e.dyn_dtree,j),e.bl_desc=new F(e.bl_tree,M),e.bi_buf=0,e.bi_valid=0,H(e)},n._tr_stored_block=U,n._tr_flush_block=function(e,t,n,r){var o,s,c=0;0<e.level?(e.strm.data_type===2&&(e.strm.data_type=function(e){var t,n=4093624447;for(t=0;t<=31;t++,n>>>=1)if(1&n&&e.dyn_ltree[2*t]!==0)return i;if(e.dyn_ltree[18]!==0||e.dyn_ltree[20]!==0||e.dyn_ltree[26]!==0)return a;for(t=32;t<l;t++)if(e.dyn_ltree[2*t]!==0)return a;return i}(e)),ae(e,e.l_desc),ae(e,e.d_desc),c=function(e){var t;for(oe(e,e.dyn_ltree,e.l_desc.max_code),oe(e,e.dyn_dtree,e.d_desc.max_code),ae(e,e.bl_desc),t=f-1;3<=t&&e.bl_tree[2*w[t]+1]===0;t--);return e.opt_len+=3*(t+1)+5+5+4,t}(e),o=e.opt_len+3+7>>>3,(s=e.static_len+3+7>>>3)<=o&&(o=s)):o=s=n+5,n+4<=o&&t!==-1?U(e,t,n,r):e.strategy===4||s===o?(z(e,2+ +!!r,3),ie(e,T,E)):(z(e,4+ +!!r,3),function(e,t,n,r){var i;for(z(e,t-257,5),z(e,n-1,5),z(e,r-4,4),i=0;i<r;i++)z(e,e.bl_tree[2*w[i]+1],3);se(e,e.dyn_ltree,t-1),se(e,e.dyn_dtree,n-1)}(e,e.l_desc.max_code+1,e.d_desc.max_code+1,c+1),ie(e,e.dyn_ltree,e.dyn_dtree)),H(e),r&&te(e)},n._tr_tally=function(e,t,n){return e.pending_buf[e.d_buf+2*e.last_lit]=t>>>8&255,e.pending_buf[e.d_buf+2*e.last_lit+1]=255&t,e.pending_buf[e.l_buf+e.last_lit]=255&n,e.last_lit++,t===0?e.dyn_ltree[2*n]++:(e.matches++,t--,e.dyn_ltree[2*(O[n]+l+1)]++,e.dyn_dtree[2*I(t)]++),e.last_lit===e.lit_bufsize-1},n._tr_align=function(e){z(e,2,3),B(e,_,T),function(e){e.bi_valid===16?(R(e,e.bi_buf),e.bi_buf=0,e.bi_valid=0):8<=e.bi_valid&&(e.pending_buf[e.pending++]=255&e.bi_buf,e.bi_buf>>=8,e.bi_valid-=8)}(e)}},{"../utils/common":41}],53:[function(e,t,n){t.exports=function(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg=``,this.state=null,this.data_type=2,this.adler=0}},{}],54:[function(e,t,n){(function(e){(function(e,t){if(!e.setImmediate){var n,r,i,a,o=1,s={},c=!1,l=e.document,u=Object.getPrototypeOf&&Object.getPrototypeOf(e);u=u&&u.setTimeout?u:e,n={}.toString.call(e.process)===`[object process]`?function(e){process.nextTick(function(){f(e)})}:function(){if(e.postMessage&&!e.importScripts){var t=!0,n=e.onmessage;return e.onmessage=function(){t=!1},e.postMessage(``,`*`),e.onmessage=n,t}}()?(a=`setImmediate$`+Math.random()+`$`,e.addEventListener?e.addEventListener(`message`,p,!1):e.attachEvent(`onmessage`,p),function(t){e.postMessage(a+t,`*`)}):e.MessageChannel?((i=new MessageChannel).port1.onmessage=function(e){f(e.data)},function(e){i.port2.postMessage(e)}):l&&`onreadystatechange`in l.createElement(`script`)?(r=l.documentElement,function(e){var t=l.createElement(`script`);t.onreadystatechange=function(){f(e),t.onreadystatechange=null,r.removeChild(t),t=null},r.appendChild(t)}):function(e){setTimeout(f,0,e)},u.setImmediate=function(e){typeof e!=`function`&&(e=Function(``+e));for(var t=Array(arguments.length-1),r=0;r<t.length;r++)t[r]=arguments[r+1];return s[o]={callback:e,args:t},n(o),o++},u.clearImmediate=d}function d(e){delete s[e]}function f(e){if(c)setTimeout(f,0,e);else{var n=s[e];if(n){c=!0;try{(function(e){var n=e.callback,r=e.args;switch(r.length){case 0:n();break;case 1:n(r[0]);break;case 2:n(r[0],r[1]);break;case 3:n(r[0],r[1],r[2]);break;default:n.apply(t,r)}})(n)}finally{d(e),c=!1}}}}function p(t){t.source===e&&typeof t.data==`string`&&t.data.indexOf(a)===0&&f(+t.data.slice(a.length))}})(typeof self>`u`?e===void 0?this:e:self)}).call(this,typeof global<`u`?global:typeof self<`u`?self:typeof window<`u`?window:{})},{}]},{},[10])(10)})}))(),1),Ut=`pluginManagement {
    repositories {
        google()
        mavenCentral()
        gradlePluginPortal()
    }
}
dependencyResolutionManagement {
    repositoriesMode.set(RepositoriesMode.PREFER_SETTINGS)
    repositories {
        google()
        mavenCentral()
        gradlePluginPortal()
    }
}

rootProject.name = "GarbageRoute"
include(":app")
`,Wt=`plugins {
    id("com.android.application") version "8.2.2" apply false
    id("org.jetbrains.kotlin.android") version "1.9.22" apply false
}
`,Gt=`plugins {
    id("com.android.application")
    id("org.jetbrains.kotlin.android")
}

android {
    namespace = "com.routecompanion.app"
    compileSdk = 34

    defaultConfig {
        applicationId = "com.garbageroute.app"
        minSdk = 24
        targetSdk = 34
        versionCode = 5
        versionName = "1.0.4"
    }


    buildTypes {
        release {
            isMinifyEnabled = false
            proguardFiles(getDefaultProguardFile("proguard-android-optimize.txt"), "proguard-rules.pro")
        }
    }

    compileOptions {
        sourceCompatibility = JavaVersion.VERSION_17
        targetCompatibility = JavaVersion.VERSION_17
    }

    kotlinOptions {
        jvmTarget = "17"
    }
}

dependencies {
    implementation("androidx.core:core-ktx:1.12.0")
    implementation("androidx.appcompat:appcompat:1.6.1")
    implementation("com.google.android.material:material:1.11.0")
    implementation("androidx.webkit:webkit:1.10.0")
}
`,Kt=`<?xml version="1.0" encoding="utf-8"?>
<manifest xmlns:android="http://schemas.android.com/apk/res/android">

    <uses-permission android:name="android.permission.INTERNET" />
    <uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />
    <uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION" />
    <uses-permission android:name="android.permission.WAKE_LOCK" />
    <uses-permission android:name="android.permission.VIBRATE" />

    <!-- Android 11+ package visibility to query and bind to OsmAnd services -->
    <queries>
        <package android:name="net.osmand" />
        <package android:name="net.osmand.plus" />
        <intent>
            <action android:name="android.intent.action.VIEW" />
            <data android:scheme="osmand.navigation" />
        </intent>
        <intent>
            <action android:name="android.intent.action.VIEW" />
            <data android:scheme="geo" />
        </intent>
    </queries>

    <application
        android:allowBackup="true"
        android:icon="@mipmap/ic_launcher"
        android:label="Garbage Route"
        android:roundIcon="@mipmap/ic_launcher_round"
        android:supportsRtl="true"
        android:theme="@style/Theme.AppCompat.NoActionBar">

        <activity
            android:name=".MainActivity"
            android:exported="true"
            android:label="Garbage Route"
            android:icon="@mipmap/ic_launcher"
            android:roundIcon="@mipmap/ic_launcher_round"
            android:configChanges="orientation|screenSize|screenLayout|keyboardHidden"
            android:windowSoftInputMode="adjustResize">
            <intent-filter>
                <action android:name="android.intent.action.MAIN" />
                <category android:name="android.intent.category.LAUNCHER" />
            </intent-filter>
        </activity>
    </application>

</manifest>
`,qt=`<?xml version="1.0" encoding="utf-8"?>
<resources>
    <string name="app_name">Garbage Route</string>
</resources>
`,Jt=`# Proguard rules for Garbage Route
-keepattributes JavascriptInterface
-keepclassmembers class * {
    @android.webkit.JavascriptInterface <methods>;
}
`,Yt=`android.useAndroidX=true
android.nonTransitiveRClass=true
org.gradle.jvmargs=-Xmx2048m -Dfile.encoding=UTF-8
`,Xt=`package com.routecompanion.app

import android.Manifest
import android.app.Activity
import android.content.Context
import android.content.Intent
import android.content.pm.PackageManager
import android.net.Uri
import android.os.Build
import android.os.Bundle
import android.os.VibrationEffect
import android.os.Vibrator
import android.os.VibratorManager
import android.speech.tts.TextToSpeech
import android.util.Log
import android.view.WindowManager
import android.webkit.GeolocationPermissions
import android.webkit.JavascriptInterface
import android.webkit.ValueCallback
import android.webkit.WebChromeClient
import android.webkit.WebResourceRequest
import android.webkit.WebResourceResponse
import android.webkit.WebSettings
import android.webkit.WebView
import android.webkit.WebViewClient
import androidx.activity.result.contract.ActivityResultContracts
import androidx.appcompat.app.AppCompatActivity
import androidx.core.app.ActivityCompat
import androidx.core.content.ContextCompat
import androidx.webkit.WebViewAssetLoader
import java.util.Locale

class MainActivity : AppCompatActivity(), TextToSpeech.OnInitListener {
    private lateinit var webView: WebView
    private lateinit var osmandBridge: OsmAndNavigationBridge
    private var tts: TextToSpeech? = null
    private var isTtsReady = false
    private var fileUploadCallback: ValueCallback<Array<Uri>>? = null

    private val filePickerLauncher = registerForActivityResult(
        ActivityResultContracts.StartActivityForResult()
    ) { result ->
        try {
            val uris = WebChromeClient.FileChooserParams.parseResult(result.resultCode, result.data)
            fileUploadCallback?.onReceiveValue(uris)
        } catch (e: Exception) {
            Log.e(TAG, "Error in file picker result", e)
            fileUploadCallback?.onReceiveValue(null)
        } finally {
            fileUploadCallback = null
        }
    }

    companion object {
        private const val LOCATION_PERMISSION_REQUEST = 1001
        private const val TAG = "RouteCompanion"
    }

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        window.addFlags(WindowManager.LayoutParams.FLAG_KEEP_SCREEN_ON)

        try {
            tts = TextToSpeech(this, this)
        } catch (e: Exception) {
            Log.w(TAG, "TTS init error", e)
        }

        val assetLoader = WebViewAssetLoader.Builder()
            .addPathHandler("/assets/", WebViewAssetLoader.AssetsPathHandler(this))
            .build()

        WebView.setWebContentsDebuggingEnabled(true)

        webView = WebView(this).apply {
            settings.apply {
                javaScriptEnabled = true
                domStorageEnabled = true
                databaseEnabled = true
                setGeolocationEnabled(true)
                allowFileAccess = true
                allowContentAccess = true
                allowFileAccessFromFileURLs = true
                allowUniversalAccessFromFileURLs = true
                cacheMode = WebSettings.LOAD_DEFAULT
                mixedContentMode = WebSettings.MIXED_CONTENT_ALWAYS_ALLOW
            }

            webChromeClient = object : WebChromeClient() {
                override fun onGeolocationPermissionsShowPrompt(
                    origin: String?,
                    callback: GeolocationPermissions.Callback?
                ) {
                    callback?.invoke(origin, true, true)
                }

                override fun onShowFileChooser(
                    webView: WebView?,
                    filePathCallback: ValueCallback<Array<Uri>>?,
                    fileChooserParams: FileChooserParams?
                ): Boolean {
                    fileUploadCallback?.onReceiveValue(null)
                    fileUploadCallback = filePathCallback

                    val intent = Intent(Intent.ACTION_GET_CONTENT).apply {
                        addCategory(Intent.CATEGORY_OPENABLE)
                        type = "*/*"
                    }

                    try {
                        filePickerLauncher.launch(Intent.createChooser(intent, "Select GPX File"))
                        return true
                    } catch (e: Exception) {
                        Log.e(TAG, "Cannot launch file picker", e)
                        fileUploadCallback?.onReceiveValue(null)
                        fileUploadCallback = null
                        return false
                    }
                }
            }

            webViewClient = object : WebViewClient() {
                override fun shouldInterceptRequest(
                    view: WebView,
                    request: WebResourceRequest
                ): WebResourceResponse? {
                    val res = assetLoader.shouldInterceptRequest(request.url)
                    return res ?: super.shouldInterceptRequest(view, request)
                }

                override fun shouldOverrideUrlLoading(
                    view: WebView,
                    request: WebResourceRequest
                ): Boolean {
                    val url = request.url.toString()
                    if (url.startsWith("https://appassets.androidplatform.net/")) {
                        return false
                    }
                    try {
                        val intent = Intent(Intent.ACTION_VIEW, request.url).apply {
                            addFlags(Intent.FLAG_ACTIVITY_NEW_TASK)
                        }
                        startActivity(intent)
                    } catch (e: Exception) {
                        Log.w(TAG, "Cannot open external intent: $url", e)
                    }
                    return true
                }
            }

            addJavascriptInterface(AndroidBridge(), "AndroidBridge")
        }

        setContentView(webView)
        checkLocationPermission()

        osmandBridge = OsmAndNavigationBridge(this) { maneuver, street, distanceMeters ->
            runOnUiThread {
                val safeManeuver = maneuver.replace("'", "\\\\'")
                val safeStreet = street.replace("'", "\\\\'")
                val js = "window.onOsmAndNavUpdate && window.onOsmAndNavUpdate('$safeManeuver', '$safeStreet', $distanceMeters);"
                webView.evaluateJavascript(js, null)
            }
        }
        osmandBridge.start()

        webView.loadUrl("https://appassets.androidplatform.net/assets/dist/index.html")
    }

    override fun onInit(status: Int) {
        if (status == TextToSpeech.SUCCESS) {
            tts?.language = Locale.US
            isTtsReady = true
        }
    }

    inner class AndroidBridge {
        @JavascriptInterface
        fun isAndroidApp(): Boolean = true

        @JavascriptInterface
        fun vibrate(type: String) {
            try {
                val vibrator = if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.S) {
                    val manager = getSystemService(Context.VIBRATOR_MANAGER_SERVICE) as VibratorManager
                    manager.defaultVibrator
                } else {
                    @Suppress("DEPRECATION")
                    getSystemService(Context.VIBRATOR_SERVICE) as Vibrator
                }

                if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
                    val effect = when (type) {
                        "skip" -> VibrationEffect.createWaveform(longArrayOf(0, 50, 40, 70), -1)
                        "complete" -> VibrationEffect.createWaveform(longArrayOf(0, 80, 50, 100), -1)
                        "undo" -> VibrationEffect.createOneShot(40, VibrationEffect.DEFAULT_AMPLITUDE)
                        else -> VibrationEffect.createOneShot(30, VibrationEffect.DEFAULT_AMPLITUDE)
                    }
                    vibrator.vibrate(effect)
                } else {
                    @Suppress("DEPRECATION")
                    vibrator.vibrate(40)
                }
            } catch (e: Exception) {
                Log.w(TAG, "Vibrate error", e)
            }
        }

        @JavascriptInterface
        fun speak(text: String) {
            if (isTtsReady && tts != null) {
                try {
                    tts?.speak(text, TextToSpeech.QUEUE_FLUSH, null, "route_tts")
                } catch (e: Exception) {
                    Log.w(TAG, "TTS speak error", e)
                }
            }
        }

        @JavascriptInterface
        fun openOsmAnd(lat: Double, lon: Double) {
            runOnUiThread {
                try {
                    val osmandIntent = Intent(Intent.ACTION_VIEW, Uri.parse("osmand.navigation:q=$lat,$lon")).apply {
                        addFlags(Intent.FLAG_ACTIVITY_NEW_TASK)
                    }
                    startActivity(osmandIntent)
                } catch (e: Exception) {
                    try {
                        val geoIntent = Intent(Intent.ACTION_VIEW, Uri.parse("geo:$lat,$lon?q=$lat,$lon(Customer)")).apply {
                            addFlags(Intent.FLAG_ACTIVITY_NEW_TASK)
                        }
                        startActivity(geoIntent)
                    } catch (err: Exception) {
                        Log.w(TAG, "Cannot launch navigation intent", err)
                    }
                }
            }
        }
    }

    private fun checkLocationPermission() {
        val permissions = arrayOf(
            Manifest.permission.ACCESS_FINE_LOCATION,
            Manifest.permission.ACCESS_COARSE_LOCATION
        )
        val needed = permissions.filter {
            ContextCompat.checkSelfPermission(this, it) != PackageManager.PERMISSION_GRANTED
        }
        if (needed.isNotEmpty()) {
            ActivityCompat.requestPermissions(this, needed.toTypedArray(), LOCATION_PERMISSION_REQUEST)
        }
    }

    override fun onDestroy() {
        super.onDestroy()
        osmandBridge.stop()
        try {
            tts?.stop()
            tts?.shutdown()
        } catch (e: Exception) {}
    }
}
`,Zt=`package com.routecompanion.app

import android.content.BroadcastReceiver
import android.content.Context
import android.content.Intent
import android.content.IntentFilter
import android.util.Log
import androidx.core.content.ContextCompat

/**
 * Listens for OsmAnd turn-by-turn navigation broadcasts and relays them to WebView
 */
class OsmAndNavigationBridge(
    private val context: Context,
    private val onUpdate: (maneuver: String, street: String, distanceMeters: Int) -> Unit
) {
    private val navBroadcastReceiver = object : BroadcastReceiver() {
        override fun onReceive(ctx: Context?, intent: Intent?) {
            if (intent?.action == "net.osmand.NAVIGATION_INFO") {
                val maneuver = intent.getStringExtra("NEXT_MANEUVER_TYPE") ?: "straight"
                val street = intent.getStringExtra("NEXT_STREET_NAME") ?: ""
                val dist = intent.getIntExtra("DISTANCE_TO_NEXT", 0)
                onUpdate(maneuver, street, dist)
            }
        }
    }

    fun start() {
        val filter = IntentFilter("net.osmand.NAVIGATION_INFO")
        try {
            ContextCompat.registerReceiver(
                context,
                navBroadcastReceiver,
                filter,
                ContextCompat.RECEIVER_EXPORTED
            )
        } catch (e: Exception) {
            try {
                context.registerReceiver(navBroadcastReceiver, filter)
            } catch (err: Exception) {
                Log.w("OsmAndBridge", "Could not register receiver", err)
            }
        }
    }

    fun stop() {
        try {
            context.unregisterReceiver(navBroadcastReceiver)
        } catch (e: Exception) {
            Log.w("OsmAndBridge", "Error unregistering receiver", e)
        }
    }
}
`,Qt=`name: Build Android APK

on:
  push:
    branches: [ "main", "master" ]
  workflow_dispatch:

jobs:
  build:
    name: Build & Package APK
    runs-on: ubuntu-latest

    steps:
      - name: Checkout Code
        uses: actions/checkout@v4

      - name: Extract Project ZIP (if unextracted)
        run: |
          if [ ! -d "src" ]; then
            LATEST_ZIP=$(ls -t *.zip 2>/dev/null | head -n 1)
            if [ -n "$LATEST_ZIP" ] && [ -f "$LATEST_ZIP" ]; then
              echo "Extracting latest archive: $LATEST_ZIP"
              unzip -o "$LATEST_ZIP"
              echo "Source unzipped successfully!"
            fi
          fi

      - name: Set up Java JDK 17
        uses: actions/setup-java@v4
        with:
          java-version: '17'
          distribution: 'temurin'

      - name: Set up Node.js 20
        uses: actions/setup-node@v4
        with:
          node-version: '20'

      - name: Force All-Files Picker
        run: |
          sed -i 's/accept="[^"]*"/accept=""/g' src/components/GpxImportModal.tsx 2>/dev/null || true
          sed -i 's/accept="[^"]*"/accept=""/g' src/App.tsx 2>/dev/null || true
          sed -i 's/fileChooserParams?.createIntent()/null/g' android/app/src/main/java/com/routecompanion/app/MainActivity.kt 2>/dev/null || true

      - name: Build Web Application
        run: |
          npm install --legacy-peer-deps
          npm run build
          mkdir -p android/app/src/main/assets/dist
          cp -r dist/* android/app/src/main/assets/
          cp -r dist/* android/app/src/main/assets/dist/

      - name: Ensure Android Structure & Config
        run: |
          mkdir -p android/app/src/main/res/values
          touch android/app/proguard-rules.pro
          printf '<?xml version="1.0" encoding="utf-8"?>\\n<resources>\\n    <string name="app_name">Garbage Route</string>\\n</resources>\\n' > android/app/src/main/res/values/strings.xml
          echo "sdk.dir=$ANDROID_HOME" > android/local.properties

      - name: Setup Gradle
        uses: gradle/actions/setup-gradle@v3
        with:
          gradle-version: 8.5
          cache-disabled: true

      - name: Build Android APK
        working-directory: ./android
        run: |
          set +e
          gradle assembleDebug -x lint -x test --no-daemon --stacktrace 2>&1 | tee build.log
          STATUS=\${PIPESTATUS[0]}
          if [ $STATUS -ne 0 ]; then
            echo "### ❌ Build Failed Log Summary" >> $GITHUB_STEP_SUMMARY
            echo '\`\`\`text' >> $GITHUB_STEP_SUMMARY
            tail -n 100 build.log >> $GITHUB_STEP_SUMMARY
            echo '\`\`\`' >> $GITHUB_STEP_SUMMARY
            exit $STATUS
          else
            echo "### ✅ Android APK Built Successfully!" >> $GITHUB_STEP_SUMMARY
          fi

      - name: Upload Build Log Artifact
        if: always()
        uses: actions/upload-artifact@v4
        with:
          name: gradle-build-log
          path: android/build.log

      - name: Upload Ready-to-Install APK
        if: success()
        uses: actions/upload-artifact@v4
        with:
          name: Garbage-Route-APK
          path: android/app/build/outputs/apk/debug/*.apk
          retention-days: 14
`,$t=`# Garbage Route (Android APK Source)

This package contains the complete source code and native Android wrapper for **Garbage Route**.

## How to Build the APK on your Samsung Galaxy S26:

1. In your GitHub repository (\`garbage-route\`), ensure \`.github/workflows/build.yml\` is present.
2. The GitHub Action will automatically run and compile the APK in ~2 minutes!
3. Go to the **Actions** tab on your GitHub repository.
4. Tap the workflow run, scroll down to **Artifacts**, and download **Garbage-Route-APK**.
5. In Samsung **My Files > Downloads**, tap \`app-debug.apk\` to install.
`,en=Object.assign({"/EXPORT_AND_BUILD_GUIDE.md":_t,"/index.html":vt,"/package.json":yt,"/scripts/generate_android_icons.sh":bt,"/scripts/package_zip.js":xt,"/src/App.tsx":St,"/src/components/ExportModal.tsx":Ct,"/src/components/GpxImportModal.tsx":wt,"/src/components/ManeuverIcon.tsx":Tt,"/src/components/RoadMapView.tsx":Et,"/src/components/RouteCompletionView.tsx":Dt,"/src/components/RouteListDrawer.tsx":Ot,"/src/components/SettingsModal.tsx":kt,"/src/components/StopCard.tsx":At,"/src/components/TurnByTurnPanel.tsx":jt,"/src/index.css":Mt,"/src/main.tsx":Nt,"/src/types/route.ts":Pt,"/src/utils/gpxParser.ts":Ft,"/src/utils/navigationService.ts":It,"/src/utils/sampleRoutes.ts":Lt,"/src/utils/useGpsTracker.ts":Rt,"/src/utils/useRoadNavigation.ts":Q,"/src/utils/voiceAndHaptics.ts":zt,"/tsconfig.json":Bt,"/vite.config.ts":Vt});async function tn(){try{let e=await fetch(`/Garbage_Route_Source.zip?v=${Date.now()}`);if(e.ok||(e=await fetch(`/OsmAnd_Route_Companion_Source.zip?v=${Date.now()}`)),e.ok){let t=await e.blob();if(t.size>1e5){let e=URL.createObjectURL(t),n=document.createElement(`a`);n.href=e,n.download=`Garbage_Route_Source.zip`,document.body.appendChild(n),n.click(),setTimeout(()=>{document.body.removeChild(n),URL.revokeObjectURL(e)},2e3);return}}}catch(e){console.warn(`Prebuilt zip fetch failed, generating dynamically in-browser:`,e)}let e=new Ht.default;for(let[t,n]of Object.entries(en)){let r=t.startsWith(`/`)?t.slice(1):t;typeof n==`string`&&e.file(r,n)}e.file(`android/settings.gradle.kts`,Ut),e.file(`android/build.gradle.kts`,Wt),e.file(`android/app/build.gradle.kts`,Gt),e.file(`android/gradle.properties`,Yt),e.file(`android/app/proguard-rules.pro`,Jt),e.file(`android/app/src/main/AndroidManifest.xml`,Kt),e.file(`android/app/src/main/res/values/strings.xml`,qt),e.file(`android/app/src/main/res/values/colors.xml`,`<?xml version="1.0" encoding="utf-8"?>
<resources>
    <color name="ic_launcher_background">#051d08</color>
</resources>
`),e.file(`android/app/src/main/res/mipmap-anydpi-v26/ic_launcher.xml`,`<?xml version="1.0" encoding="utf-8"?>
<adaptive-icon xmlns:android="http://schemas.android.com/apk/res/android">
    <background android:drawable="@color/ic_launcher_background" />
    <foreground android:drawable="@mipmap/ic_launcher_foreground" />
</adaptive-icon>
`),e.file(`android/app/src/main/res/mipmap-anydpi-v26/ic_launcher_round.xml`,`<?xml version="1.0" encoding="utf-8"?>
<adaptive-icon xmlns:android="http://schemas.android.com/apk/res/android">
    <background android:drawable="@color/ic_launcher_background" />
    <foreground android:drawable="@mipmap/ic_launcher_foreground" />
</adaptive-icon>
`),e.file(`android/app/src/main/java/com/routecompanion/app/MainActivity.kt`,Xt),e.file(`android/app/src/main/java/com/routecompanion/app/OsmAndNavigationBridge.kt`,Zt),e.file(`.github/workflows/build.yml`,Qt),e.file(`.github/workflows/build-apk.yml`,Qt),e.file(`README.md`,$t);let t=await e.generateAsync({type:`blob`,compression:`DEFLATE`,compressionOptions:{level:6}}),n=URL.createObjectURL(t),r=document.createElement(`a`);r.href=n,r.download=`Garbage_Route_Source.zip`,document.body.appendChild(r),r.click(),setTimeout(()=>{document.body.removeChild(r),URL.revokeObjectURL(n)},2e3)}function nn({isOpen:e,onClose:t,isDark:n}){let[r,i]=(0,v.useState)(!1),[a,o]=(0,v.useState)(!1);return e?(0,J.jsx)(`div`,{className:`fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200`,children:(0,J.jsxs)(`div`,{className:`w-full max-w-lg rounded-t-3xl sm:rounded-3xl border shadow-2xl flex flex-col max-h-[92vh] overflow-hidden ${n?`bg-neutral-950 border-neutral-800 text-white`:`bg-white border-neutral-200 text-black`}`,children:[(0,J.jsxs)(`div`,{className:`p-4 border-b flex items-center justify-between shrink-0 ${n?`border-neutral-800 bg-neutral-900/60`:`border-neutral-200 bg-neutral-50`}`,children:[(0,J.jsxs)(`div`,{className:`flex items-center gap-2.5`,children:[(0,J.jsx)(`img`,{src:`/icon-192.png`,alt:`Garbage Route`,className:`w-10 h-10 rounded-xl border border-emerald-400/50 shadow-md shrink-0 object-cover`}),(0,J.jsxs)(`div`,{children:[(0,J.jsx)(`h2`,{className:`text-base font-black tracking-tight`,children:`Garbage Route APK Builder`}),(0,J.jsx)(`p`,{className:`text-xs text-neutral-400`,children:`Step 1: Download code to your Samsung S26`})]})]}),(0,J.jsx)(`button`,{onClick:()=>{A(`tap`),t()},className:`p-2 rounded-xl transition-colors ${n?`hover:bg-neutral-800 text-neutral-400`:`hover:bg-neutral-100 text-neutral-600`}`,children:(0,J.jsx)(ct,{className:`w-5 h-5`})})]}),(0,J.jsxs)(`div`,{className:`p-4 sm:p-5 overflow-y-auto space-y-4`,children:[(0,J.jsxs)(`div`,{className:`p-4 rounded-2xl border ${n?`bg-neutral-900/90 border-blue-900/60`:`bg-blue-50/70 border-blue-200`}`,children:[(0,J.jsx)(`p`,{className:`text-xs font-semibold text-neutral-400 mb-2`,children:`Instant 1-Tap Download to your phone:`}),(0,J.jsx)(`button`,{onClick:async()=>{A(`tap`),i(!0);try{await tn(),o(!0),A(`complete`)}catch(e){console.error(`Download failed`,e)}finally{i(!1)}},disabled:r,className:`w-full py-4 px-4 rounded-2xl font-black text-sm uppercase tracking-wider flex items-center justify-center gap-2.5 shadow-lg active:scale-95 transition-all ${a?`bg-emerald-500 hover:bg-emerald-600 text-black`:`bg-blue-600 hover:bg-blue-500 text-white`}`,children:r?(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)(`div`,{className:`w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin`}),(0,J.jsx)(`span`,{children:`Packaging Zip File...`})]}):a?(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)(De,{className:`w-5 h-5 stroke-[2.5]`}),(0,J.jsx)(`span`,{children:`Downloaded! Tap to Download Again`})]}):(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)(Fe,{className:`w-5 h-5`}),(0,J.jsx)(`span`,{children:`Download Complete Project (.ZIP)`})]})}),a&&(0,J.jsxs)(`div`,{className:`mt-3 p-2.5 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-start gap-2 text-emerald-400 text-xs`,children:[(0,J.jsx)(De,{className:`w-4 h-4 shrink-0 mt-0.5 text-emerald-400`}),(0,J.jsxs)(`span`,{children:[(0,J.jsx)(`strong`,{children:`Saved to your phone:`}),` Check your Samsung `,(0,J.jsx)(`strong`,{children:`My Files > Downloads`}),` folder for `,(0,J.jsx)(`code`,{className:`bg-black/40 px-1 py-0.5 rounded font-mono`,children:`Garbage_Route_Source.zip`}),`.`]})]})]}),(0,J.jsxs)(`div`,{className:`p-3.5 rounded-2xl border text-xs space-y-2 ${n?`bg-neutral-900 border-neutral-800`:`bg-neutral-100 border-neutral-200`}`,children:[(0,J.jsxs)(`div`,{className:`flex items-center gap-2 font-bold text-neutral-300`,children:[(0,J.jsx)(Le,{className:`w-4 h-4 text-blue-400`}),(0,J.jsx)(`span`,{children:`What is included in this .ZIP file:`})]}),(0,J.jsxs)(`ul`,{className:`space-y-1.5 text-neutral-400 pl-6 list-disc`,children:[(0,J.jsxs)(`li`,{children:[(0,J.jsx)(`strong`,{children:`Native Android Kotlin wrapper:`}),` Binds to OsmAnd AIDL background service`]}),(0,J.jsxs)(`li`,{children:[(0,J.jsx)(`strong`,{children:`Full React App:`}),` Your customer cards, yellow house number, 500ft proximity & curbside arrival, and GPX parser`]}),(0,J.jsxs)(`li`,{children:[(0,J.jsx)(`strong`,{children:`Automated Cloud Builder:`}),` Preconfigured GitHub Action to compile the APK free with zero setup`]})]})]}),(0,J.jsxs)(`div`,{className:`space-y-3`,children:[(0,J.jsx)(`h3`,{className:`text-xs font-black uppercase tracking-wider text-neutral-400`,children:`What to do next (Takes ~3 minutes on your phone):`}),(0,J.jsxs)(`div`,{className:`p-3.5 rounded-2xl border flex items-start gap-3 ${n?`bg-neutral-900/50 border-neutral-800`:`bg-neutral-50 border-neutral-200`}`,children:[(0,J.jsx)(`div`,{className:`w-6 h-6 rounded-full bg-blue-600 text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5`,children:`2`}),(0,J.jsxs)(`div`,{className:`text-xs space-y-1`,children:[(0,J.jsx)(`p`,{className:`font-bold`,children:`Upload to GitHub (Free cloud builder)`}),(0,J.jsxs)(`p`,{className:`text-neutral-400`,children:[`Open `,(0,J.jsx)(`a`,{href:`https://github.com`,target:`_blank`,rel:`noreferrer`,className:`text-blue-400 underline font-semibold`,children:`github.com`}),` on your Samsung S26, tap `,(0,J.jsx)(`strong`,{children:`New repository`}),`, name it `,(0,J.jsx)(`code`,{className:`bg-neutral-800 px-1 py-0.5 rounded text-neutral-200`,children:`route-companion`}),`, and tap `,(0,J.jsx)(`strong`,{children:`Upload files`}),` to upload the zip files.`]})]})]}),(0,J.jsxs)(`div`,{className:`p-3.5 rounded-2xl border flex items-start gap-3 ${n?`bg-neutral-900/50 border-neutral-800`:`bg-neutral-50 border-neutral-200`}`,children:[(0,J.jsx)(`div`,{className:`w-6 h-6 rounded-full bg-emerald-600 text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5`,children:`3`}),(0,J.jsxs)(`div`,{className:`text-xs space-y-1`,children:[(0,J.jsx)(`p`,{className:`font-bold`,children:`Download and Install your APK`}),(0,J.jsxs)(`p`,{className:`text-neutral-400`,children:[`Tap the `,(0,J.jsx)(`strong`,{children:`Actions`}),` tab in your repository. In 2 minutes, tap the completed build and download `,(0,J.jsx)(`code`,{className:`bg-neutral-800 px-1 py-0.5 rounded text-neutral-200`,children:`app-debug.apk`}),` to your Samsung S26 to install.`]})]})]})]})]}),(0,J.jsxs)(`div`,{className:`p-4 border-t flex items-center justify-between shrink-0 ${n?`border-neutral-800 bg-neutral-950`:`border-neutral-200 bg-white`}`,children:[(0,J.jsxs)(`div`,{className:`flex items-center gap-1.5 text-xs text-neutral-400`,children:[(0,J.jsx)($e,{className:`w-4 h-4 text-emerald-400`}),(0,J.jsx)(`span`,{children:`100% Free · No computer needed`})]}),(0,J.jsx)(`button`,{onClick:()=>{A(`tap`),t()},className:`px-4 py-2 rounded-xl text-xs font-bold ${n?`bg-neutral-800 hover:bg-neutral-700 text-neutral-200`:`bg-neutral-200 hover:bg-neutral-300 text-black`}`,children:`Close`})]})]})}):null}var rn=152.4,an=30,on=5e3;function sn(e,t){return!isNaN(e)&&!isNaN(t)&&e>=-90&&e<=90&&t>=-180&&t<=180&&(e!==0||t!==0)}function cn(e,t,n,r,i,a,o){let s=i*Math.PI/180,c=Math.cos(s),l=111132.92,u=111412.84*c,d=(t-a)*u,f=(e-i)*l,p=(r-a)*u,m=(n-i)*l,h=p-d,g=m-f,_=h*h+g*g;if(_===0){let e=Math.sqrt(d*d+f*f);return{passed:e<=o,minDistance:e,t:0}}let v=-(d*h+f*g)/_;if(v>0&&v<1){let e=d+v*h,t=f+v*g,n=Math.sqrt(e*e+t*t);return{passed:n<=o,minDistance:n,t:v}}let y=Math.sqrt(d*d+f*f),b=Math.sqrt(p*p+m*m),x=Math.min(y,b);return{passed:x<=o,minDistance:x,t:v}}function ln(e,t,n,r,i=rn,a=95,o,s,c,l,u,d,f){let[p,m]=(0,v.useState)(null),[h,g]=(0,v.useState)(`acquiring`),[_,y]=(0,v.useState)(null),[b,x]=(0,v.useState)(`Monitoring GPS`),[S,C]=(0,v.useState)(!1),[w,T]=(0,v.useState)(!1),[E,D]=(0,v.useState)(!1),[O,k]=(0,v.useState)(!1),[j,M]=(0,v.useState)(1),N=(0,v.useRef)(null),P=(0,v.useRef)(!1),F=(0,v.useRef)(!1),I=(0,v.useRef)(1),R=(0,v.useRef)(0),z=(0,v.useRef)(0),B=(0,v.useRef)(!1),V=(0,v.useRef)(0),ee=(0,v.useRef)(Date.now()),H=(0,v.useRef)(null),te=(0,v.useRef)(null),ne=(0,v.useRef)(1/0),re=(0,v.useRef)(!1),ie=(0,v.useRef)(0),se=(0,v.useRef)(0),U=(0,v.useRef)(0),W=(0,v.useRef)(0),le=(0,v.useRef)(null),ue=(0,v.useRef)(null),de=(0,v.useRef)(0),fe=(0,v.useRef)(null),pe=(0,v.useRef)(!1),G=(0,v.useRef)(!1),me=(0,v.useRef)(null),he=(0,v.useRef)(new Set),[ge,_e]=(0,v.useState)([]),ve=(0,v.useCallback)(e=>{let t=`[${new Date().toLocaleTimeString()}] ${e}`;console.log(`[TestDriveDiag] ${t}`),_e(e=>[t,...e.slice(0,49)])},[]),K=(0,v.useRef)(e);K.current=e;let ye=(0,v.useRef)(t);ye.current=t;let be=(0,v.useRef)(n);be.current=n;let xe=(0,v.useRef)(r);xe.current=r;let Se=(0,v.useRef)(i);Se.current=i;let Ce=(0,v.useRef)(a);Ce.current=a;let we=(0,v.useRef)(o);we.current=o;let Te=(0,v.useRef)(s),Ee=(0,v.useRef)(!1),De=(0,v.useRef)(0);(0,v.useEffect)(()=>{Te.current=s,s&&s.length>=2&&(Ee.current=!1,R.current=0,z.current=0)},[s]);let Oe=(0,v.useRef)(c);Oe.current=c;let ke=(0,v.useRef)(l);ke.current=l;let Ae=(0,v.useRef)(u);Ae.current=u;let je=(0,v.useRef)(d);je.current=d;let Me=(0,v.useRef)(f);Me.current=f;let Ne=!!(e&&t&&sn(e.lat,e.lon)&&sn(t.lat,t.lon)&&ae(e.lat,e.lon,t.lat,t.lon)<25),Pe=!!(e&&n&&sn(e.lat,e.lon)&&sn(n.lat,n.lon)&&ae(e.lat,e.lon,n.lat,n.lon)<25),Fe=(0,v.useRef)(Ne);Fe.current=Ne,(0,v.useEffect)(()=>{let t=e?.id||null;if(t!==me.current){if(me.current=t,ne.current=1/0,re.current=!1,ie.current=0,se.current=0,U.current=0,W.current=0,ue.current=null,le.current=null,pe.current=!1,C(!1),Fe.current){G.current=!1,T(!0),x(`At property · Shared Address: ${e?.name||`Customer`}`);return}T(!1),p&&e&&sn(e.lat,e.lon)&&ae(p.lat,p.lon,e.lat,e.lon)<=Se.current?G.current=!0:G.current=!1}},[e?.id]);let Ie=(0,v.useCallback)(e=>{let t=K.current;if(!t){x(`No Active Route`);return}if(!sn(t.lat,t.lon)){x(`Invalid Destination Coordinates (Manual Skip)`);return}if(Date.now()-e.timestamp>4500)return;if(e.accuracy>an){x(`GPS Accuracy ±${Math.round(e.accuracy*3.28084)} ft (Refining...)`);return}let n=Se.current||152.4,r=Ce.current||95,i=ae(e.lat,e.lon,t.lat,t.lon),a=Math.round(i*3.28084);i<ne.current&&(ne.current=i);let o=le.current,s=ue.current,c=Date.now();if(o&&sn(o.lat,o.lon)&&ae(o.lat,o.lon,e.lat,e.lon)<75){let n=cn(o.lat,o.lon,e.lat,e.lon,t.lat,t.lon,r);n.passed&&n.minDistance<ne.current&&(ne.current=n.minDistance)}if(pe.current||c-de.current<on||fe.current===t.id)return;if(Fe.current){G.current=!1,T(!0),x(`At property · ${t.name}`),le.current=e,ue.current=i;return}if(G.current){if(i>n*1.1)G.current=!1;else if(c-de.current>8e3)G.current=!1;else{x(`Departing Previous Stop...`);return}}let l=we.current;if(l!=null&&l>Math.max(n*2,150)){x(`Parallel Road / Route Distance ${Math.round(l*3.28084)} ft`);return}if(Te.current&&Te.current.length>1&&oe(e.lat,e.lon,Te.current)>38&&i>35){x(`Parallel Road · ${a} ft to customer`);return}let u=o&&sn(o.lat,o.lon)?ae(o.lat,o.lon,e.lat,e.lon):null,d=o?Math.max(.4,(e.timestamp-o.timestamp)/1e3):1,f=u===null?null:u/d*2.23694,p=e.speed===null?f:e.speed,m=p===null||p<=15?Math.max(r,105):Math.max(r,Math.min(r+15,e.accuracy*1.5)),h=i<=m,g=s!==null&&i<s-2&&p!==null&&p>20,_=s!==null&&i>s+1.5,v=!1,y=``;if(h?g&&i>30?(se.current=0,x(`Approaching customer: ${a} ft`)):(se.current+=1,se.current>=2?(v=!0,y=`At customer address (${a} ft)`):x(`At address (${a} ft, confirming...)`)):se.current=0,!v&&ne.current<=m&&i<=95){let n=i>=ne.current+4,r=p===null||p<=25,a=ce(e.lat,e.lon,t.lat,t.lon),o=!0;if(e.heading!==null){let t=Math.abs(e.heading-a);o=(t>180?360-t:t)>65}else s!==null&&(o=i>s);n&&_&&o&&r?(U.current+=1,U.current>=2&&(v=!0,y=`Passed customer address (${Math.round(ne.current*3.28084)} ft min)`)):U.current=0}else U.current=0;if(v&&i>120&&(v=!1,se.current=0,U.current=0),!v&&i<=n&&!h&&x(`Approaching customer: ${a} ft`),!v&&!h&&ne.current<=n){let n=i>120,r=i>=ne.current+60,o=p!==null&&p>15,c=ce(e.lat,e.lon,t.lat,t.lon),l=!1;if(e.heading!==null){let t=Math.abs(e.heading-c);l=(t>180?360-t:t)>75}else s!==null&&(l=i>s+2);if(n&&r&&o&&(_||l)){if(W.current+=1,W.current>=4){C(!0),x(`Missed stop (${a} ft) · Recalculating...`),le.current=e,ue.current=i;return}}else W.current=0}else W.current=0;if(v){if(P.current||he.current.has(t.id))return;he.current.add(t.id),ve(`Live GPS Arrival: Stop ${t.id} arrived via ${y}`),pe.current=!0,de.current=c,fe.current=t.id,se.current=0,U.current=0,ne.current=1/0,C(!1),T(!0),x(`Arrived: ${y}`),A(`complete`),xe.current(),setTimeout(()=>{T(!1)},3e3)}else i>n&&x(`${a} ft to customer (Window: ${Math.round(n*3.28084)} ft)`),le.current=e,ue.current=i},[]);(0,v.useEffect)(()=>{if(typeof window>`u`||!(`geolocation`in navigator)){g(`denied`),y(`GPS hardware not supported by this browser.`);return}g(`acquiring`);let e=navigator.geolocation.watchPosition(e=>{if(P.current)return;let t={lat:e.coords.latitude,lon:e.coords.longitude,accuracy:e.coords.accuracy||8,speed:e.coords.speed!==null&&e.coords.speed>=0?Math.round(e.coords.speed*2.23694):null,heading:e.coords.heading!==null&&!isNaN(e.coords.heading)?e.coords.heading:null,timestamp:e.timestamp||Date.now()};m(t),g(`locked`),y(null),Ie(t)},e=>{P.current||(g(`denied`),y(e.message||`GPS hardware access denied.`))},{enableHighAccuracy:!0,maximumAge:1e3,timeout:1e4});return()=>{try{navigator.geolocation.clearWatch(e)}catch{}}},[Ie,E]),(0,v.useEffect)(()=>()=>{N.current&&window.clearInterval(N.current)},[]);let Le=(0,v.useCallback)(()=>{if(!P.current)return;let e=Date.now(),t=Math.min(.25,Math.max(.04,(e-ee.current)/1e3));if(ee.current=e,F.current)return;let n=K.current;if(!n||!sn(n.lat,n.lon)){N.current&&=(window.clearInterval(N.current),null),D(!1),P.current=!1,x(`Full Route Simulation Completed!`);return}if(n.id!==te.current&&(te.current=n.id,B.current=!1,V.current=0,Ee.current=!0,De.current=e,Te.current=[],R.current=0,z.current=0,T(!1),C(!1),Fe.current)){Ee.current=!1,B.current=!0,V.current=2400;let t={lat:n.lat,lon:n.lon,accuracy:2.5,speed:0,heading:H.current?.heading||0,timestamp:e};H.current=t,m(t),Ie(t);return}if(B.current){if(V.current-=t*1e3*I.current,V.current<=0){if(B.current=!1,Oe.current&&Oe.current.length>0){let e=Oe.current.findIndex(e=>e.id===n.id);if(e!==-1&&e>=Oe.current.length-1){N.current&&=(window.clearInterval(N.current),null),D(!1),P.current=!1,x(`Full Route Simulation Completed!`);return}}he.current.has(n.id)||(he.current.add(n.id),ve(`Sim Arrival: Stop ${n.id} dwell completed -> advancing`),xe.current())}else if(H.current){let t={...H.current,speed:0,timestamp:e};m(t),Ie(t)}return}if(Ee.current){if(e-De.current>3500)Ee.current=!1;else{if(H.current){let t={...H.current,speed:0,timestamp:e};m(t),Ie(t)}return}}let r=Te.current,i,a,o=H.current?.heading||0;if(r&&r.length>=2){let s=R.current;if(s>=r.length-1){let[t,s]=r[r.length-1];i=s,a=t;let[c,l]=r[Math.max(0,r.length-2)];o=ce(l,c,i,a);let u=ae(i,a,n.lat,n.lon),d=Ce.current||95;if(u<=Math.max(d,105)){let t={lat:i,lon:a,accuracy:2.5,speed:0,heading:o,timestamp:e};H.current=t,m(t),Ie(t),B.current=!0,V.current=2200;return}{let t={lat:i,lon:a,accuracy:2.5,speed:0,heading:o,timestamp:e};H.current=t,m(t),Ie(t);return}}let[c,l]=r[s],u=ae(l,c,n.lat,n.lon),d=32;u<35?d=11:u<85&&(d=18);let f=d*.44704*I.current*t;for(;f>0&&s<r.length-1;){let[e,t]=r[s],[n,c]=r[s+1],l=ae(t,e,c,n),u=l*(1-z.current);if(f<u&&l>.01)z.current+=f/l,f=0,i=t+(c-t)*z.current,a=e+(n-e)*z.current,o=ce(t,e,c,n);else if(f-=u,s+=1,R.current=s,z.current=0,i=c,a=n,s<r.length-1){let[e,t]=r[s+1];o=ce(c,n,t,e)}else o=ce(t,e,c,n)}let p={lat:i,lon:a,accuracy:2.5,speed:d,heading:o,timestamp:e};H.current=p,m(p),Ie(p)}else{H.current||={lat:n.lat-200/111132.92,lon:n.lon,accuracy:2.5,speed:0,heading:0,timestamp:e};let t={...H.current,speed:0,timestamp:e};H.current=t,m(t),Ie(t)}},[Ie]),Re=(0,v.useCallback)((e=0,t=1)=>{N.current&&=(window.clearInterval(N.current),null),je.current?.();let n=e===void 0?0:e;e!==void 0&&ke.current&&ke.current(n);let r=t||1;I.current=r,M(r),P.current=!0,D(!0),F.current=!1,k(!1),g(`locked`),y(null),C(!1),T(!1),R.current=0,z.current=0,B.current=!1,V.current=0,te.current=null,ee.current=Date.now(),he.current.clear();let i=Oe.current||[],a=i[n]||K.current;if(a&&sn(a.lat,a.lon)){let e,t,r;if(n>0&&i[n-1]){let o=i[n-1];e=o.lat,t=o.lon,r=ce(o.lat,o.lon,a.lat,a.lon)}else{let o=i[n+1];if(o&&sn(o.lat,o.lon)){let n=o.lat-a.lat,i=o.lon-a.lon,s=ae(a.lat,a.lon,o.lat,o.lon);if(s>25){let o=111132.92,c=111412.84*Math.cos(a.lat*Math.PI/180);e=a.lat-n/s*(350/o)*o,t=a.lon-i/s*(350/c)*c,r=ce(e,t,a.lat,a.lon)}else e=a.lat+.0035,t=a.lon,r=180}else e=a.lat+.0035,t=a.lon,r=180}let o={lat:e,lon:t,accuracy:2.5,speed:28,heading:r,timestamp:Date.now()};H.current=o,m(o),Ie(o)}else H.current=null;N.current=window.setInterval(Le,100)},[Le,Ie]),ze=(0,v.useCallback)(()=>{if(F.current=!0,k(!0),H.current){let e={...H.current,speed:0,timestamp:Date.now()};H.current=e,m(e)}},[]),Be=(0,v.useCallback)(()=>{F.current=!1,k(!1),ee.current=Date.now()},[]),Ve=(0,v.useCallback)(e=>{I.current=e,M(e)},[]),He=(0,v.useCallback)(()=>{ke.current?ke.current(0):Ae.current&&Ae.current(),R.current=0,z.current=0,B.current=!1,V.current=0,te.current=null,H.current=null,ee.current=Date.now(),F.current=!1,k(!1),he.current.clear()},[]),q=(0,v.useCallback)(()=>{N.current&&=(window.clearInterval(N.current),null),P.current=!1,D(!1),F.current=!1,k(!1),H.current=null,te.current=null,le.current=null,ne.current=1/0,pe.current=!1,Me.current?.()},[]),Ue=(0,v.useCallback)(()=>{let e=K.current;if(!e||!sn(e.lat,e.lon))return;N.current&&=(window.clearInterval(N.current),null),D(!0),g(`locked`),y(null),C(!1),T(!1);let t=e.lat,n=e.lon,r=[{offset:-130,speed:25},{offset:-75,speed:20},{offset:-36,speed:12},{offset:-23,speed:2},{offset:-23,speed:0}],i=0;N.current=window.setInterval(()=>{if(i>=r.length){N.current&&=(window.clearInterval(N.current),null),D(!1);return}let e=r[i],a={lat:t+e.offset/111132.92,lon:n,accuracy:3,speed:e.speed,heading:0,timestamp:Date.now()};m(a),Ie(a),i+=1},1100)},[Ie]),We=(0,v.useCallback)(()=>{let e=K.current;if(!e||!sn(e.lat,e.lon))return;N.current&&=(window.clearInterval(N.current),null),D(!0),g(`locked`),y(null),C(!1),T(!1);let t=111132.92,n=e.lat,r=e.lon,i=[{offset:-55,speed:18},{offset:-28,speed:14},{offset:0,speed:10},{offset:12,speed:10},{offset:24,speed:10}],a=0;N.current=window.setInterval(()=>{if(a>=i.length){N.current&&=(window.clearInterval(N.current),null),D(!1);return}let e=i[a],o={lat:n+e.offset/t,lon:r+22/(t*Math.cos(n*Math.PI/180)),accuracy:3,speed:e.speed,heading:0,timestamp:Date.now()};m(o),Ie(o),a+=1},1100)},[Ie]),Ge=(0,v.useCallback)(()=>{let e=K.current;if(!e||!sn(e.lat,e.lon))return;N.current&&=(window.clearInterval(N.current),null),D(!0),g(`locked`),y(null);let t=111132.92,n=e.lat,r=e.lon,i=[{offset:-100,speed:28},{offset:-45,speed:28},{offset:0,speed:28},{offset:70,speed:28},{offset:125,speed:28},{offset:160,speed:28}],a=0;N.current=window.setInterval(()=>{if(a>=i.length){N.current&&=(window.clearInterval(N.current),null),D(!1);return}let e=i[a],o={lat:n+e.offset/t,lon:r+12/(t*Math.cos(n*Math.PI/180)),accuracy:4,speed:e.speed,heading:0,timestamp:Date.now()};m(o),Ie(o),a+=1},1200)},[Ie]),Ke=null,qe=null,Je=!1,Ye=!1,Xe=Ce.current||95;p&&e&&sn(e.lat,e.lon)&&(Ke=ae(p.lat,p.lon,e.lat,e.lon),qe=Math.round(Ke*3.28084),Je=Ke<=i,Ye=Ke<=Xe);let Ze=b;return h===`denied`?Ze=`GPS Disabled`:h===`acquiring`?Ze=`Acquiring Satellites...`:w?Ze=`Arrived at Stop (${qe} ft)`:S?Ze=`Passed stop (${qe} ft) · Recalculating...`:E?Ze=`Simulating Road Progress (${qe} ft)`:Ye?Ze=`In delivery zone (${qe} ft / ${Math.round(Xe*3.28084)} ft)`:Je&&(Ze=Ne?`Shared Address · Tap Skip when done`:`Customer nearby (${qe} ft / ${Math.round(i*3.28084)} ft window)`),{location:p,gpsStatus:h,gpsErrorMsg:_,distanceToCurrentMeters:Ke,distanceToCurrentFeet:qe,isWithinGeofence:Je,isWithinArrivalConfirmZone:Ye,isConfirmedArrival:w,isSharedLocationWithPrevious:Ne,isSharedLocationWithNext:Pe,autoArrivalStatus:Ze,arrivalRadiusMeters:i,arrivalConfirmFeet:Math.round(Xe*3.28084),arrivalConfirmMeters:Xe,isPassedWithoutCompletion:S,isSimulatingGps:E,isSimPaused:O,simSpeedMultiplier:j,startFullRouteSimulation:Re,pauseSimulation:ze,resumeSimulation:Be,setSimulationSpeed:Ve,restartSimulation:He,stopGpsSimulation:q,simulateApproachAndPass:Ge,simulateApproachAndArrive:Ue,simulateCurbsidePassThrough:We,diagLogs:ge}}var un=`osmand_route_assistant_v1`,dn=`osmand_route_assistant_settings_v1`,fn={theme:`amoled-black`,voiceAnnouncement:!0,hapticFeedback:!0,keepScreenAwake:!0,extraLargeText:!1,arrivalRadiusMeters:152.4,arrivalConfirmFeet:150,turnWarningDistancesFeet:[500]};function pn(){let[e,t]=(0,v.useState)(()=>{try{let e=localStorage.getItem(dn);if(e)return{...fn,...JSON.parse(e)}}catch{}return fn}),[n,r]=(0,v.useState)(()=>{try{let e=localStorage.getItem(un);if(e){let t=JSON.parse(e);if(t&&Array.isArray(t.stops)&&t.stops.length>0){let e=t.stops.map((e,t)=>{let n=S(e,t);return{...e,houseNumber:n===`—`?e.houseNumber&&!/^0+\d+$/.test(e.houseNumber)?e.houseNumber:``:n}});return{...t,stops:e}}}}catch{}try{let e=k[0],t=E(e.gpxXml,e.title);return{id:e.id,name:t.routeName,filename:`${e.id}.gpx`,stops:t.stops,currentIndex:0,importedAt:Date.now(),lastUpdated:Date.now()}}catch{return null}}),[i,a]=(0,v.useState)(!1),[o,s]=(0,v.useState)(!1),[c,l]=(0,v.useState)(!1),[u,d]=(0,v.useState)(!1),[f,p]=(0,v.useState)(null),[m,h]=(0,v.useState)(null),g=(0,v.useRef)(null),_=async t=>{let n=t.target.files?.[0];if(n)try{let{stops:t,routeName:i}=E(await n.text(),n.name.replace(/\.[^/.]+$/,``));if(t.length===0)throw Error(`No waypoints found in the selected GPX file.`);e.hapticFeedback&&A(`complete`);let a={id:`route-${Date.now().toString(36)}`,name:i||n.name,filename:n.name,stops:t,currentIndex:0,importedAt:Date.now(),lastUpdated:Date.now()};r(a);try{localStorage.setItem(un,JSON.stringify(a))}catch(e){console.error(`Storage error`,e)}h(`Imported ${n.name} (${t.length} stops)`),setTimeout(()=>h(null),4e3)}catch(e){h(e.message||`Failed to read or parse GPX file.`),setTimeout(()=>h(null),4e3)}finally{t.target&&(t.target.value=``)}};(0,v.useEffect)(()=>{if(n)try{localStorage.setItem(un,JSON.stringify(n))}catch(e){console.error(`Failed to save route to localStorage`,e)}else localStorage.removeItem(un)},[n]),(0,v.useEffect)(()=>{try{localStorage.setItem(dn,JSON.stringify(e))}catch(e){console.error(`Failed to save settings`,e)}},[e]),(0,v.useEffect)(()=>(e.keepScreenAwake?ne():re(),()=>{re()}),[e.keepScreenAwake]);let y=(0,v.useRef)(!0);(0,v.useEffect)(()=>{if(y.current)y.current=!1;else if(e.voiceAnnouncement&&n&&n.stops[n.currentIndex]){let e=n.stops[n.currentIndex],t=S(e,n.currentIndex);R(e.name,t===`—`?``:t)}},[n?.currentIndex,e.voiceAnnouncement]);let b=e.theme===`amoled-black`,x=()=>{if(!n)return;e.hapticFeedback&&A(`complete`);let t=n.stops[n.currentIndex];r(e=>{if(!e)return null;let t=e.currentIndex+1,n=[...e.stops];return n[e.currentIndex]&&(n[e.currentIndex]={...n[e.currentIndex],status:`completed`,statusTimestamp:Date.now()}),{...e,stops:n,currentIndex:t,lastUpdated:Date.now()}}),t&&(h(`Auto-Arrived: #${t.orderIndex} ${t.name}`),setTimeout(()=>{h(null)},3500))},C=(0,v.useRef)(0),w=()=>{if(!n)return;let t=Date.now();if(t-C.current<750)return;C.current=t,e.hapticFeedback&&A(`complete`),H();let i=n.currentIndex;if(i>=n.stops.length)return;let a=n.stops[i];r(e=>{if(!e||e.currentIndex>=e.stops.length)return e;let t=e.currentIndex,n=[...e.stops];n[t]&&(n[t]={...n[t],status:`completed`,statusTimestamp:Date.now()});let r=t+1;for(;r<n.length&&n[r].status===`completed`;)r++;return{...e,stops:n,currentIndex:r,lastUpdated:Date.now()}}),a&&(h(`Picked Up: #${a.orderIndex} ${a.name}`),setTimeout(()=>{h(null)},3500))},T=()=>{if(!n)return;e.hapticFeedback&&A(`skip`);let t=n.stops[n.currentIndex],i=n.currentIndex;r(e=>{if(!e)return null;let t=e.currentIndex+1,n=[...e.stops];return n[e.currentIndex]&&(n[e.currentIndex]={...n[e.currentIndex],status:`skipped`,statusTimestamp:Date.now()}),{...e,stops:n,currentIndex:t,lastUpdated:Date.now()}}),t&&(p({message:`Skipped: #${t.orderIndex} ${t.name}`,previousIndex:i}),setTimeout(()=>{p(null)},4e3))},D=()=>{!n||n.currentIndex<=0||(e.hapticFeedback&&A(`undo`),r(e=>e?{...e,currentIndex:e.currentIndex-1,lastUpdated:Date.now()}:null))},O=()=>{if(!f||!n)return;e.hapticFeedback&&A(`undo`);let t=f.previousIndex;r(e=>{if(!e)return null;let n=[...e.stops];return n[t]&&(n[t]={...n[t],status:`pending`}),{...e,stops:n,currentIndex:t,lastUpdated:Date.now()}}),p(null)},j=t=>{n&&(e.hapticFeedback&&A(`tap`),r(e=>e?{...e,currentIndex:Math.max(0,Math.min(t,e.stops.length)),lastUpdated:Date.now()}:null))},M=()=>{n&&(e.hapticFeedback&&A(`tap`),r(e=>{if(!e)return null;let t=e.stops.map(e=>({...e,status:`pending`,statusTimestamp:void 0}));return{...e,stops:t,currentIndex:0,lastUpdated:Date.now()}}))},N=(t,n,i)=>{e.hapticFeedback&&A(`tap`);let a={id:`route-${Date.now().toString(36)}`,name:n,filename:i,stops:t,currentIndex:0,importedAt:Date.now(),lastUpdated:Date.now()};r(a)},P=()=>{r(null)},F=n&&n.currentIndex<n.stops.length?n.stops[n.currentIndex]:null,I=n&&n.currentIndex>0?n.stops[n.currentIndex-1]:null,z=n&&n.currentIndex<n.stops.length-1?n.stops[n.currentIndex+1]:null,[B,V]=(0,v.useState)([]),[ee,te]=(0,v.useState)(null);(0,v.useEffect)(()=>{V([]),te(null)},[F?.id]);let ie=(0,v.useRef)(null),ae=(0,v.useCallback)(()=>{n&&!ie.current&&(ie.current=JSON.parse(JSON.stringify(n)))},[n]),oe=(0,v.useCallback)(()=>{ie.current&&=(r(ie.current),null)},[]),{location:se,gpsStatus:ce,gpsErrorMsg:U,distanceToCurrentFeet:W,isWithinGeofence:le,isConfirmedArrival:ue,isSharedLocationWithPrevious:de,isSharedLocationWithNext:fe,autoArrivalStatus:pe,arrivalRadiusMeters:G,arrivalConfirmFeet:me,isPassedWithoutCompletion:he,isSimulatingGps:ge,isSimPaused:_e,simSpeedMultiplier:ve,startFullRouteSimulation:K,pauseSimulation:ye,resumeSimulation:be,setSimulationSpeed:xe,restartSimulation:Se,stopGpsSimulation:Ce,simulateApproachAndPass:we,simulateApproachAndArrive:Te,simulateCurbsidePassThrough:Ee,diagLogs:Oe}=ln(F,I,z,x,e.arrivalRadiusMeters||152.4,e.arrivalConfirmFeet?e.arrivalConfirmFeet*.3048:45.72,ee,B,n?.stops,j,M,ae,oe),ke=n&&n.currentIndex>=n.stops.length,Ae=n?n.stops.filter(e=>e.status===`completed`).length:0,je=n?n.stops.filter(e=>e.status===`skipped`).length:0;return(0,J.jsxs)(`div`,{className:`h-dvh max-h-dvh w-full overflow-hidden flex flex-col font-sans transition-colors duration-150 ${b?`bg-black text-white`:`bg-white text-black`}`,children:[(0,J.jsx)(`input`,{ref:g,type:`file`,onChange:_,className:`hidden`}),(0,J.jsxs)(`main`,{className:`flex-1 w-full max-w-md mx-auto flex flex-col px-2.5 pt-1 pb-1 sm:px-3 sm:py-1.5 relative overflow-hidden`,children:[m&&(0,J.jsx)(`div`,{className:`absolute top-4 left-4 right-4 z-30 animate-in slide-in-from-top duration-200`,children:(0,J.jsxs)(`div`,{className:`bg-emerald-500 text-black px-4 py-2.5 rounded-2xl shadow-2xl flex items-center gap-2 border-2 border-emerald-300`,children:[(0,J.jsx)(De,{className:`w-4 h-4 stroke-[3] shrink-0`}),(0,J.jsx)(`span`,{className:`text-xs font-black truncate`,children:m})]})}),f&&(0,J.jsx)(`div`,{className:`absolute top-4 left-4 right-4 z-30 animate-in slide-in-from-top duration-200`,children:(0,J.jsxs)(`div`,{className:`bg-amber-400 text-black px-4 py-2.5 rounded-2xl shadow-2xl flex items-center justify-between border-2 border-amber-300`,children:[(0,J.jsx)(`span`,{className:`text-xs font-bold truncate max-w-[240px]`,children:f.message}),(0,J.jsxs)(`button`,{onClick:O,className:`flex items-center gap-1 px-2.5 py-1 bg-black text-amber-300 rounded-lg text-xs font-black uppercase tracking-wider hover:bg-neutral-900 transition-colors`,children:[(0,J.jsx)(Xe,{className:`w-3.5 h-3.5`}),(0,J.jsx)(`span`,{children:`Undo`})]})]})}),ke?(0,J.jsx)(Z,{stops:n.stops,routeName:n.name,isDark:b,onRestart:M,onJumpToStop:j,onLoadNewRoute:()=>a(!0)}):F&&n?(0,J.jsx)(pt,{stop:F,allStops:n.stops,onSelectStop:j,previousStop:I||void 0,nextStop:z||void 0,userLocation:se,gpsStatus:ce,gpsErrorMsg:U,distanceToCurrentFeet:W,isWithinGeofence:le,isConfirmedArrival:ue,isSharedLocationWithPrevious:de,isSharedLocationWithNext:fe,autoArrivalStatus:pe,currentIndex:n.currentIndex,totalStops:n.stops.length,completedCount:Ae,skippedCount:je,settings:e,onMarkPickedUp:w,onSkip:T,onPrevious:D,onJumpToStopList:()=>s(!0),arrivalRadiusMeters:G,arrivalConfirmFeet:me,isPassedWithoutCompletion:he,simulateApproachAndPass:we,simulateApproachAndArrive:Te,simulateCurbsidePassThrough:Ee,isSimulatingGps:ge,isSimPaused:_e,simSpeedMultiplier:ve,startFullRouteSimulation:K,pauseSimulation:ye,resumeSimulation:be,setSimulationSpeed:xe,restartSimulation:Se,stopGpsSimulation:Ce,onRouteCoordinatesUpdate:V,onRoadRemainingUpdate:te,diagLogs:Oe,onOpenSettings:()=>l(!0)}):(0,J.jsxs)(`div`,{className:`flex-1 flex flex-col items-center justify-center text-center p-6 space-y-4 my-auto`,children:[(0,J.jsx)(`img`,{src:`/icon-192.png`,alt:`Garbage Route`,className:`w-20 h-20 rounded-3xl border-2 border-emerald-400/80 shadow-2xl object-cover`}),(0,J.jsxs)(`div`,{children:[(0,J.jsx)(`h2`,{className:`text-2xl font-black text-white`,children:`Garbage Route`}),(0,J.jsx)(`p`,{className:`text-xs text-neutral-400 mt-1 max-w-xs`,children:`Import a customer GPX file from OsmAnd or pick a built-in delivery route to begin.`})]}),(0,J.jsxs)(`div`,{className:`space-y-2 w-full max-w-xs`,children:[(0,J.jsxs)(`button`,{onClick:()=>a(!0),className:`w-full py-3.5 px-4 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-black font-extrabold text-sm flex items-center justify-center gap-2 transition-all shadow-lg shadow-emerald-950/40`,children:[(0,J.jsx)(ot,{className:`w-4 h-4`}),(0,J.jsx)(`span`,{children:`Import GPX File`})]}),(0,J.jsxs)(`button`,{onClick:()=>{let e=k[0],t=E(e.gpxXml,e.title);N(t.stops,t.routeName,`${e.id}.gpx`)},className:`w-full py-3 px-4 rounded-2xl bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-neutral-200 font-bold text-xs flex items-center justify-center gap-2 transition-all`,children:[(0,J.jsx)(nt,{className:`w-4 h-4 text-emerald-400`}),(0,J.jsx)(`span`,{children:`Load Sample Route (20 Stops)`})]})]})]})]}),(0,J.jsx)(mt,{isOpen:i,isDark:b,onClose:()=>a(!1),onImportSuccess:N}),n&&(0,J.jsx)(ht,{isOpen:o,isDark:b,stops:n.stops,currentIndex:n.currentIndex,routeName:n.name,onClose:()=>s(!1),onSelectStop:j,onResetRoute:M}),(0,J.jsx)(gt,{isOpen:c,isDark:b,settings:e,onClose:()=>l(!1),onUpdateSettings:e=>t(t=>({...t,...e})),onOpenImport:()=>a(!0),onResetProgress:M,onClearRoute:P,onOpenExport:()=>d(!0)}),(0,J.jsx)(nn,{isOpen:u,onClose:()=>d(!1),isDark:b})]})}(0,y.createRoot)(document.getElementById(`root`)).render((0,J.jsx)(pn,{}));