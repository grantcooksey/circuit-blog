(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{4019:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,n,r){return!1};("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7942:function(e,t,n){"use strict";var r=n(5696);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o,u=(o=n(7294))&&o.__esModule?o:{default:o},a=n(4957),l=n(7995),c=n(647),f=n(1992),i=n(639),s=n(4019),d=n(227);var p="undefined"!==typeof u.default.useTransition,v={};function y(e,t,n,r){if(e&&a.isLocalURL(t)){e.prefetch(t,n,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;v[t+"%"+n+(o?"%"+o:"")]=!0}}var b=u.default.forwardRef((function(e,t){var n,o=e.href,b=e.as,h=e.children,x=e.prefetch,j=e.passHref,m=e.replace,g=e.shallow,_=e.scroll,O=e.locale,C=e.onClick,M=e.onMouseEnter,w=e.legacyBehavior,E=void 0===w?!0!==Boolean(!1):w,P=function(e,t){if(null==e)return{};var n,r,o={},u=Object.keys(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","legacyBehavior"]);n=h,!E||"string"!==typeof n&&"number"!==typeof n||(n=u.default.createElement("a",null,n));var k=!1!==x,L=p?u.default.useTransition():[],N=r(L,2)[1],R=u.default.useContext(c.RouterContext),T=u.default.useContext(f.AppRouterContext);T&&(R=T);var A,D=u.default.useMemo((function(){var e=a.resolveHref(R,o,!0),t=r(e,2),n=t[0],u=t[1];return{href:n,as:b?a.resolveHref(R,b):u||n}}),[R,o,b]),I=D.href,U=D.as,B=u.default.useRef(I),H=u.default.useRef(U);E&&(A=u.default.Children.only(n));var K=E?A&&"object"===typeof A&&A.ref:t,S=i.useIntersection({rootMargin:"200px"}),F=r(S,3),G=F[0],X=F[1],q=F[2],z=u.default.useCallback((function(e){H.current===U&&B.current===I||(q(),H.current=U,B.current=I),G(e),K&&("function"===typeof K?K(e):"object"===typeof K&&(K.current=e))}),[U,K,I,q,G]);u.default.useEffect((function(){var e=X&&k&&a.isLocalURL(I),t="undefined"!==typeof O?O:R&&R.locale,n=v[I+"%"+U+(t?"%"+t:"")];e&&!n&&y(R,I,U,{locale:t})}),[U,I,X,O,k,R]);var J={ref:z,onClick:function(e){E||"function"!==typeof C||C(e),E&&A.props&&"function"===typeof A.props.onClick&&A.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,u,l,c,f){if("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&a.isLocalURL(n)){e.preventDefault();var i=function(){t[o?"replace":"push"](n,r,{shallow:u,locale:c,scroll:l})};f?f(i):i()}}(e,R,I,U,m,g,_,O,T?N:void 0)},onMouseEnter:function(e){E||"function"!==typeof M||M(e),E&&A.props&&"function"===typeof A.props.onMouseEnter&&A.props.onMouseEnter(e),a.isLocalURL(I)&&y(R,I,U,{priority:!0})}};if(!E||j||"a"===A.type&&!("href"in A.props)){var Q="undefined"!==typeof O?O:R&&R.locale,V=R&&R.isLocaleDomain&&s.getDomainLocale(U,Q,R.locales,R.domainLocales);J.href=V||d.addBasePath(l.addLocale(U,Q,R&&R.defaultLocale))}return E?u.default.cloneElement(A,J):u.default.createElement("a",Object.assign({},P,J),n)}));t.default=b,("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},639:function(e,t,n){"use strict";var r=n(5696);Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,n=e.rootMargin,f=e.disabled||!a,i=o.useRef(),s=o.useState(!1),d=r(s,2),p=d[0],v=d[1],y=o.useState(null),b=r(y,2),h=b[0],x=b[1];o.useEffect((function(){if(a){if(i.current&&(i.current(),i.current=void 0),f||p)return;return h&&h.tagName&&(i.current=function(e,t,n){var r=function(e){var t,n={root:e.root||null,margin:e.rootMargin||""},r=c.find((function(e){return e.root===n.root&&e.margin===n.margin}));if(r&&(t=l.get(r)))return t;var o=new Map,u=new IntersectionObserver((function(e){e.forEach((function(e){var t=o.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return t={id:n,observer:u,elements:o},c.push(n),l.set(n,t),t}(n),o=r.id,u=r.observer,a=r.elements;return a.set(e,t),u.observe(e),function(){if(a.delete(e),u.unobserve(e),0===a.size){u.disconnect(),l.delete(o);var t=c.findIndex((function(e){return e.root===o.root&&e.margin===o.margin}));t>-1&&c.splice(t,1)}}}(h,(function(e){return e&&v(e)}),{root:null==t?void 0:t.current,rootMargin:n})),function(){null==i.current||i.current(),i.current=void 0}}if(!p){var e=u.requestIdleCallback((function(){return v(!0)}));return function(){return u.cancelIdleCallback(e)}}}),[h,f,n,t,p]);var j=o.useCallback((function(){v(!1)}),[]);return[x,p,j]};var o=n(7294),u=n(6286),a="function"===typeof IntersectionObserver;var l=new Map,c=[];("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1992:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.FullAppTreeContext=t.AppTreeContext=t.AppRouterContext=void 0;var r,o=(r=n(7294))&&r.__esModule?r:{default:r};var u=o.default.createContext(null);t.AppRouterContext=u;var a=o.default.createContext(null);t.AppTreeContext=a;var l=o.default.createContext(null);t.FullAppTreeContext=l},3407:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.r(t),n.d(t,{default:function(){return i}});var o=n(1664),u=n.n(o),a=n(5893);function l(e){var t=e.children;return(0,a.jsxs)("div",{className:"flex flex-col min-h-screen",children:[(0,a.jsx)("header",{className:"bg-slate-800 mb-8 py-4",children:(0,a.jsx)("div",{className:"container mx-auto flex flex-col justify-center",children:(0,a.jsx)(u(),{href:"/",children:(0,a.jsx)("a",{className:"mx-auto text-4xl text-slate-200",children:"Grant's Current Events"})})})}),(0,a.jsx)("main",{className:"container mx-auto flex-1",children:t}),(0,a.jsx)("footer",{className:"bg-slate-800 mt-8 py-4",children:(0,a.jsx)("div",{className:"container mx-auto flex justify-center text-slate-300",children:"\xa9 2022 Grant Cooksey"})})]})}n(906);function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var i=function(e){var t=e.Component,n=e.pageProps;return(0,a.jsx)(l,{children:(0,a.jsx)(t,f({},n))})}},1118:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(3407)}])},906:function(){},1664:function(e,t,n){e.exports=n(7942)}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],(function(){return t(1118),t(9898)}));var n=e.O();_N_E=n}]);