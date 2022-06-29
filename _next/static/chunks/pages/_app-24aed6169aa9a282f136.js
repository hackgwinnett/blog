(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{2167:function(e,t,n){"use strict";var r=n(3038),o=n(862);t.default=void 0;var a=o(n(7294)),c=n(9414),i=n(4651),u=n(7426),s={};function l(e,t,n,r){if(e&&(0,c.isLocalURL)(t)){e.prefetch(t,n,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;s[t+"%"+n+(o?"%"+o:"")]=!0}}var f=function(e){var t,n=!1!==e.prefetch,o=(0,i.useRouter)(),f=a.default.useMemo((function(){var t=(0,c.resolveHref)(o,e.href,!0),n=r(t,2),a=n[0],i=n[1];return{href:a,as:e.as?(0,c.resolveHref)(o,e.as):i||a}}),[o,e.href,e.as]),d=f.href,p=f.as,v=e.children,h=e.replace,m=e.shallow,b=e.scroll,y=e.locale;"string"===typeof v&&(v=a.default.createElement("a",null,v));var g=(t=a.Children.only(v))&&"object"===typeof t&&t.ref,x=(0,u.useIntersection)({rootMargin:"200px"}),j=r(x,2),O=j[0],w=j[1],E=a.default.useCallback((function(e){O(e),g&&("function"===typeof g?g(e):"object"===typeof g&&(g.current=e))}),[g,O]);(0,a.useEffect)((function(){var e=w&&n&&(0,c.isLocalURL)(d),t="undefined"!==typeof y?y:o&&o.locale,r=s[d+"%"+p+(t?"%"+t:"")];e&&!r&&l(o,d,p,{locale:t})}),[p,d,w,y,n,o]);var k={ref:E,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,a,i,u){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,c.isLocalURL)(n))&&(e.preventDefault(),null==i&&r.indexOf("#")>=0&&(i=!1),t[o?"replace":"push"](n,r,{shallow:a,locale:u,scroll:i}))}(e,o,d,p,h,m,b,y)},onMouseEnter:function(e){(0,c.isLocalURL)(d)&&(t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),l(o,d,p,{priority:!0}))}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var _="undefined"!==typeof y?y:o&&o.locale,L=o&&o.isLocaleDomain&&(0,c.getDomainLocale)(p,_,o&&o.locales,o&&o.domainLocales);k.href=L||(0,c.addBasePath)((0,c.addLocale)(p,_,o&&o.defaultLocale))}return a.default.cloneElement(t,k)};t.default=f},7426:function(e,t,n){"use strict";var r=n(3038);t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!c,u=(0,o.useRef)(),s=(0,o.useState)(!1),l=r(s,2),f=l[0],d=l[1],p=(0,o.useCallback)((function(e){u.current&&(u.current(),u.current=void 0),n||f||e&&e.tagName&&(u.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=i.get(t);if(n)return n;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return i.set(t,n={id:t,observer:o,elements:r}),n}(n),o=r.id,a=r.observer,c=r.elements;return c.set(e,t),a.observe(e),function(){c.delete(e),a.unobserve(e),0===c.size&&(a.disconnect(),i.delete(o))}}(e,(function(e){return e&&d(e)}),{rootMargin:t}))}),[n,t,f]);return(0,o.useEffect)((function(){if(!c&&!f){var e=(0,a.requestIdleCallback)((function(){return d(!0)}));return function(){return(0,a.cancelIdleCallback)(e)}}}),[f]),[p,f]};var o=n(7294),a=n(3447),c="undefined"!==typeof IntersectionObserver;var i=new Map},3543:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return f}});var r=n(5893);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var a=n(1664),c=n(7294);function i(){var e=(0,c.useState)(!1),t=e[0],n=e[1];return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("label",{className:"text-neutral-content pr-2 text-xs md:text-base",children:"Dark Theme"}),(0,r.jsx)("input",{type:"checkbox",className:"toggle",checked:t,onChange:function(){t?(document.documentElement.dataset.theme="garden",document.body.classList.remove("dark")):(document.documentElement.dataset.theme="forest",document.body.classList.add("dark")),n(!t)}})]})}function u(){return(0,r.jsx)("header",{children:(0,r.jsxs)("div",{className:"bg-primary p-4 mb-8 flex justify-center items-center",children:[(0,r.jsx)(a.default,{href:"/",passHref:!0,children:(0,r.jsx)("h1",{className:"font-bold text-neutral-content text-lg sm:text-xl md:text-3xl pr-8 hover:opacity-80 transition-opacity",children:"HackGwinnett Blog"})}),(0,r.jsx)(i,{})]})})}n(2702),n(7658);function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var f=function(e){var t=e.Component,n=e.pageProps;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(u,{}),(0,r.jsx)("main",{className:"container max-w-max mx-auto px-2",children:(0,r.jsx)(t,l({},n))})]})}},1780:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(3543)}])},7658:function(){},2702:function(){},1664:function(e,t,n){e.exports=n(2167)}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],(function(){return t(1780),t(4651)}));var n=e.O();_N_E=n}]);