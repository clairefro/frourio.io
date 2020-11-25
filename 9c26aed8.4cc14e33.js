(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{111:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return d}));var r=t(0),o=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=o.a.createContext({}),s=function(e){var n=o.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},u=function(e){var n=s(e.components);return o.a.createElement(p.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},b=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(t),b=r,d=u["".concat(a,".").concat(b)]||u[b]||f[b]||i;return t?o.a.createElement(d,c(c({ref:n},p),{},{components:t})):o.a.createElement(d,c({ref:n},p))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=b;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var p=2;p<i;p++)a[p]=t[p];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},85:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return a})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return l})),t.d(n,"default",(function(){return s}));var r=t(2),o=t(6),i=(t(0),t(111)),a={id:"lifecycle",title:"Hooks types and lifecycle"},c={unversionedId:"hooks/lifecycle",id:"hooks/lifecycle",isDocsHomePage:!1,title:"Hooks types and lifecycle",description:"Fastify-like Hooks are redefined in frourio for both Fastify and Express.",source:"@site/docs/hooks/lifecycle.md",slug:"/hooks/lifecycle",permalink:"/docs/hooks/lifecycle",editUrl:"https://github.com/frouriojs/frourio.io/edit/master/docs/hooks/lifecycle.md",version:"current",sidebar:"someSidebar",previous:{title:"Posting FormData",permalink:"/docs/controller/posting-formdata"},next:{title:"Minimum Hooks",permalink:"/docs/hooks/minimum-hooks"}},l=[],p={rightToc:l};function s(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Fastify-like Hooks are redefined in frourio for both Fastify and Express."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"onRequest")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"preParsing")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"preValidation")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"preHandler"))),Object(i.b)("p",null,"They will be hooked along the following lifecycle."),Object(i.b)("p",null,"Proceed by calling ",Object(i.b)("inlineCode",{parentName:"p"},"done")," (Fastify) / ",Object(i.b)("inlineCode",{parentName:"p"},"next")," (Express), which can be taken as the third argument.",Object(i.b)("br",{parentName:"p"}),"\n","*"," Except Fastify when using async / await"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-text"}),"Incoming Request\n  \u2502\n  \u2514\u2500\u25b6 Routing\n        \u2502\n  404 \u25c0\u2500\u2534\u2500\u25b6 onRequest Hook\n              \u2502\n    4**/5** \u25c0\u2500\u2534\u2500\u25b6 preParsing Hook\n                    \u2502\n          4**/5** \u25c0\u2500\u2534\u2500\u25b6 Parsing\n                          \u2502\n                4**/5** \u25c0\u2500\u2534\u2500\u25b6 preValidation Hook\n                                \u2502\n                      4**/5** \u25c0\u2500\u2534\u2500\u25b6 Validation\n                                      \u2502\n                                400 \u25c0\u2500\u2534\u2500\u25b6 preHandler Hook\n                                            \u2502\n                                  4**/5** \u25c0\u2500\u2534\u2500\u25b6 User Handler\n                                                  \u2502\n                                        4**/5** \u25c0\u2500\u2534\u2500\u25b6 Outgoing Response\n")))}s.isMDXComponent=!0}}]);