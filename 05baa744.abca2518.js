(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{100:function(e,t,a){"use strict";function n(e){var t,a,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(r&&(r+=" "),r+=a);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,a=0,r="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(r&&(r+=" "),r+=t);return r}},101:function(e,t,a){"use strict";var n=a(0),r=a(102);t.a=function(){var e=Object(n.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},102:function(e,t,a){"use strict";var n=a(0),r=Object(n.createContext)(void 0);t.a=r},103:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(101),b=a(100),c=a(47),i=a.n(c),o=37,u=39;t.a=function(e){var t=e.block,a=e.children,c=e.defaultValue,m=e.values,O=e.groupId,p=e.className,j=Object(l.a)(),s=j.tabGroupChoices,d=j.setTabGroupChoices,g=Object(n.useState)(c),N=g[0],f=g[1],y=Object(n.useState)(!1),v=y[0],w=y[1];if(null!=O){var h=s[O];null!=h&&h!==N&&m.some((function(e){return e.value===h}))&&f(h)}var x=function(e){f(e),null!=O&&d(O,e)},E=[],T=function(e){e.metaKey||e.altKey||e.ctrlKey||w(!0)},D=function(){w(!1)};return Object(n.useEffect)((function(){return window.addEventListener("keydown",T),window.addEventListener("mousedown",D),function(){window.removeEventListener("keydown",T),window.removeEventListener("mousedown",D)}}),[]),r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(b.a)("tabs",{"tabs--block":t},p)},m.map((function(e){var t=e.value,a=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":N===t,className:Object(b.a)("tabs__item",i.a.tabItem,{"tabs__item--active":N===t}),style:v?{}:{outline:"none"},key:t,ref:function(e){return E.push(e)},onKeyDown:function(e){!function(e,t,a){switch(a.keyCode){case u:!function(e,t){var a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()}(e,t);break;case o:!function(e,t){var a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()}(e,t)}}(E,e.target,e),T(e)},onFocus:function(){return x(t)},onClick:function(){x(t),w(!1)},onPointerDown:function(){return w(!1)}},a)}))),r.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},n.Children.toArray(a).filter((function(e){return e.props.value===N}))[0]))}},104:function(e,t,a){"use strict";var n=a(0),r=a.n(n);t.a=function(e){return r.a.createElement("div",null,e.children)}},118:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(49),b=a.n(l);t.a=function(e){var t=e.children,a=e.minHeight,n=e.maxHeight,l=e.url;return r.a.createElement("div",{className:b.a.browserWindow,style:{minHeight:a}},r.a.createElement("div",{className:b.a.browserWindowHeader},r.a.createElement("div",{className:b.a.buttons},r.a.createElement("span",{className:b.a.dot,style:{background:"#f25f58"}}),r.a.createElement("span",{className:b.a.dot,style:{background:"#fbbe3c"}}),r.a.createElement("span",{className:b.a.dot,style:{background:"#58cb42"}})),r.a.createElement("div",{className:b.a.browserWindowAddressBar},l),r.a.createElement("div",{className:b.a.browserWindowMenuIcon},r.a.createElement("div",null,r.a.createElement("span",{className:b.a.bar}),r.a.createElement("span",{className:b.a.bar}),r.a.createElement("span",{className:b.a.bar})))),r.a.createElement("div",{className:b.a.browserWindowBody,style:{maxHeight:n}},t))}},63:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return u})),a.d(t,"rightToc",(function(){return m})),a.d(t,"default",(function(){return p}));var n=a(2),r=a(6),l=(a(0),a(99)),b=a(103),c=a(104),i=a(118),o={id:"cui",title:"Setup with CUI"},u={unversionedId:"Installation/cui",id:"Installation/cui",isDocsHomePage:!1,title:"Setup with CUI",description:"<Tabs",source:"@site/docs/Installation/cui.mdx",slug:"/Installation/cui",permalink:"/docs/Installation/cui",editUrl:"https://github.com/frouriojs/frourio.io/edit/master/docs/Installation/cui.mdx",version:"current",sidebar:"someSidebar",previous:{title:"Setup with GUI",permalink:"/docs/Installation/gui"},next:{title:"Entrypoint of server",permalink:"/docs/Entrypoint/server"}},m=[],O={rightToc:m};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},O,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)(b.a,{defaultValue:"npx",values:[{label:"npx",value:"npx"},{label:"npm",value:"npm"},{label:"yarn",value:"yarn"}],mdxType:"Tabs"},Object(l.b)(c.a,{value:"npx",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),'npx create-frourio-app --answers \'{"dir":"my-project"}\'\n'))),Object(l.b)(c.a,{value:"npm",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),'npm init frourio-app --answers \'{"dir":"my-project"}\'\n'))),Object(l.b)(c.a,{value:"yarn",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),'yarn create frourio-app --answers \'{"dir":"my-project"}\'\n')))),Object(l.b)("br",null),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"answers JSON parameters")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"When"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"dir"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Directory name (create new)"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"server"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),'"fastify" ',"|",' "express"'),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),'"fastify"'),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Core framework of frourio"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"front"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),'"next" ',"|",' "nuxt"'),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),'"next"'),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Frontend framework"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"building"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),'"basic" ',"|",' "static"'),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),'"basic"'),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Building mode"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),'front === "next"')),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"mode"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),'"universal" ',"|",' "spa"'),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),'"universal"'),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Rendering mode"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),'front === "nuxt"')),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"target"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),'"server" ',"|",' "static"'),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),'"server"'),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Deployment target"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),'front === "nuxt"')),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"aspida"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),'"axios" ',"|",' "fetch"'),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),'"axios"'),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"HTTP client of aspida"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"pm"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),'"yarn" ',"|",' "npm"'),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),'"yarn"'),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Package manager"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"daemon"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),'"none" ',"|",' "pm2"'),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),'"none"'),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Daemon process manager"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"orm"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),'"prisma" ',"|",' "typeorm" ',"|",' "none"'),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),'"prisma"'),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"O/R mapping tool"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"prismaDB"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),'"mysql" ',"|",' "postgresql" ',"|",' "sqlite"'),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),'"mysql"'),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"DB type of Prisma"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),'orm === "prisma"')),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"typeormDB"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),'"mysql" ',"|",' "postgres" ',"|",' "mongodb" ',"|",' "mssql" ',"|",' "mariadb" ',"|",' "cockroachdb"'),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),'"mysql"'),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"DB type of TypeORM"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),'orm === "typeorm"')),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"dbHost"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),'"localhost"'),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"HOST of DB"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),'orm !== "none" && prismaDB !== "sqlite"')),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"dbPort"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"number"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Default port of DB type"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"PORT of DB"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),'orm !== "none" && prismaDB !== "sqlite"')),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"dbUser"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"USER of DB"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),'orm !== "none" && prismaDB !== "sqlite"')),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"dbPass"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"PASS of DB"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),'orm !== "none" && prismaDB !== "sqlite"')),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"dbName"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"NAME of DB"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),'orm !== "none" && prismaDB !== "sqlite"')),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"dbFile"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),'"./dev.db"'),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"DB file path of SQLite"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),'orm === "prisma" && prismaDB === "sqlite"')),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"testing"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),'"none" ',"|",' "jest"'),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),'"none"'),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Testing framework"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}))))),Object(l.b)("br",null),Object(l.b)("p",null,"Once the above command is installed, the browser will automatically open at ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"http://localhost:3000"}),"http://localhost:3000")),Object(l.b)(b.a,{defaultValue:"next",values:[{label:"Next.js",value:"next"},{label:"Nuxt.js",value:"nuxt"}],mdxType:"Tabs"},Object(l.b)(c.a,{value:"next",mdxType:"TabItem"},Object(l.b)(i.a,{url:"http://localhost:3000",mdxType:"BrowserWindow"},Object(l.b)("img",{src:"/img/nextjs.png"}))),Object(l.b)(c.a,{value:"nuxt",mdxType:"TabItem"},Object(l.b)(i.a,{url:"http://localhost:3000",mdxType:"BrowserWindow"},Object(l.b)("img",{src:"/img/nuxtjs.png"})))))}p.isMDXComponent=!0},99:function(e,t,a){"use strict";a.d(t,"a",(function(){return m})),a.d(t,"b",(function(){return j}));var n=a(0),r=a.n(n);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=r.a.createContext({}),u=function(e){var t=r.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},m=function(e){var t=u(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,b=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),m=u(a),p=n,j=m["".concat(b,".").concat(p)]||m[p]||O[p]||l;return a?r.a.createElement(j,c(c({ref:t},o),{},{components:a})):r.a.createElement(j,c({ref:t},o))}));function j(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,b=new Array(l);b[0]=p;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:n,b[1]=c;for(var o=2;o<l;o++)b[o]=a[o];return r.a.createElement.apply(null,b)}return r.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"}}]);