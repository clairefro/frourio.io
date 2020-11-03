(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{100:function(e,t,n){"use strict";function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.a=function(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}},101:function(e,t,n){"use strict";var r=n(0),a=n(102);t.a=function(){var e=Object(r.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},102:function(e,t,n){"use strict";var r=n(0),a=Object(r.createContext)(void 0);t.a=a},103:function(e,t,n){"use strict";var r=n(0),a=n.n(r),s=n(101),i=n(100),o=n(47),l=n.n(o),c=37,p=39;t.a=function(e){var t=e.block,n=e.children,o=e.defaultValue,u=e.values,m=e.groupId,b=e.className,d=Object(s.a)(),f=d.tabGroupChoices,y=d.setTabGroupChoices,O=Object(r.useState)(o),v=O[0],g=O[1],j=Object(r.useState)(!1),k=j[0],h=j[1];if(null!=m){var x=f[m];null!=x&&x!==v&&u.some((function(e){return e.value===x}))&&g(x)}var w=function(e){g(e),null!=m&&y(m,e)},T=[],N=function(e){e.metaKey||e.altKey||e.ctrlKey||h(!0)},C=function(){h(!1)};return Object(r.useEffect)((function(){return window.addEventListener("keydown",N),window.addEventListener("mousedown",C),function(){window.removeEventListener("keydown",N),window.removeEventListener("mousedown",C)}}),[]),a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":t},b)},u.map((function(e){var t=e.value,n=e.label;return a.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":v===t,className:Object(i.a)("tabs__item",l.a.tabItem,{"tabs__item--active":v===t}),style:k?{}:{outline:"none"},key:t,ref:function(e){return T.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case p:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case c:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(T,e.target,e),N(e)},onFocus:function(){return w(t)},onClick:function(){w(t),h(!1)},onPointerDown:function(){return h(!1)}},n)}))),a.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},r.Children.toArray(n).filter((function(e){return e.props.value===v}))[0]))}},104:function(e,t,n){"use strict";var r=n(0),a=n.n(r);t.a=function(e){return a.a.createElement("div",null,e.children)}},73:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return m}));var r=n(2),a=n(6),s=(n(0),n(99)),i=n(103),o=n(104),l={id:"get-tasks",title:"GET - /tasks?limit={number}"},c={unversionedId:"Controller/get-tasks",id:"Controller/get-tasks",isDocsHomePage:!1,title:"GET - /tasks?limit={number}",description:'`ts title="server/types/index.ts"',source:"@site/docs/Controller/get-tasks.mdx",slug:"/Controller/get-tasks",permalink:"/docs/Controller/get-tasks",editUrl:"https://github.com/frouriojs/frourio.io/edit/master/docs/Controller/get-tasks.mdx",version:"current",sidebar:"someSidebar",previous:{title:"Entrypoint of server",permalink:"/docs/Entrypoint/server"},next:{title:"GET - /tasks/{taskId}",permalink:"/docs/Controller/get-task-by-id"}},p=[],u={rightToc:p};function m(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(s.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(s.b)("br",null),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts",metastring:'title="server/types/index.ts"',title:'"server/types/index.ts"'}),"export type Task = {\n  id: number\n  label: string\n  done: boolean\n}\n")),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts",metastring:'title="server/api/tasks/index.ts"',title:'"server/api/tasks/index.ts"'}),"import { Task } from '$/types' // path alias $ -> server\n\nexport type Methods = {\n  get: {\n    query?: {\n      limit: number\n    }\n\n    resBody: Task[]\n  }\n}\n")),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts",metastring:'title="server/api/tasks/controller.ts"',title:'"server/api/tasks/controller.ts"'}),"import { defineController } from './$relay' // '$relay.ts' is automatically generated by frourio\nimport { getTasks } from '$/service/tasks'\n\nexport default defineController(() => ({\n  get: async ({ query }) => ({\n    status: 200,\n    body: (await getTasks()).slice(0, query?.limit)\n  })\n}))\n")),Object(s.b)(i.a,{defaultValue:"prisma",values:[{label:"Prisma",value:"prisma"},{label:"TypeORM",value:"typeorm"},{label:"None",value:"none"}],mdxType:"Tabs"},Object(s.b)(o.a,{value:"prisma",mdxType:"TabItem"},Object(s.b)("p",null,Object(s.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-schema"}),"Prisma schema")),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-text",metastring:'title="server/prisma/schema.prisma"',title:'"server/prisma/schema.prisma"'}),"model Task {\n  id    Int     @id @default(autoincrement())\n  label String\n  done  Boolean @default(false)\n}\n")),Object(s.b)("p",null,Object(s.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/crud#findmany"}),"Prisma#findMany")),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts",metastring:'title="server/service/tasks.ts"',title:'"server/service/tasks.ts"'}),"import { PrismaClient } from '@prisma/client'\nimport { Task } from '$prisma/client' // path alias $prisma -> ./node_modules/.prisma/*\n\nconst prisma = new PrismaClient()\n\nexport const getTasks = async (limit?: number) =>\n  (await prisma.task.findMany()).slice(0, limit)\n"))),Object(s.b)(o.a,{value:"typeorm",mdxType:"TabItem"},Object(s.b)("p",null,Object(s.b)("a",Object(r.a)({parentName:"p"},{href:"https://typeorm.io/#/entities"}),"TypeORM entities")),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts",metastring:'title="server/entity/Task.ts"',title:'"server/entity/Task.ts"'}),"import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'\n\n@Entity()\nexport class Task {\n  @PrimaryGeneratedColumn()\n  id: number\n\n  @Column({ length: 100 })\n  label: string\n\n  @Column({ default: false })\n  done: boolean\n}\n")),Object(s.b)("p",null,Object(s.b)("a",Object(r.a)({parentName:"p"},{href:"https://typeorm.io/#/find-options"}),"TypeORM#find")),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts",metastring:'title="server/service/tasks.ts"',title:'"server/service/tasks.ts"'}),"import { getRepository } from 'typeorm'\nimport { Task } from '$/entity/Task'\n\nconst taskRepository = () => getRepository(Task)\n\nexport const getTasks = async (limit?: number) =>\n  (await taskRepository().find()).slice(0, limit)\n"))),Object(s.b)(o.a,{value:"none",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts",metastring:'title="server/service/tasks.ts"',title:'"server/service/tasks.ts"'}),"import fs from 'fs'\nimport { Task } from '$/types'\n\ntype DB = {\n  nextId: number\n  tasks: Task[]\n}\n\nconst dbPath = 'database.json'\n\nconst readDB = async (): Promise<DB> =>\n  JSON.parse(await fs.promises.readFile(dbPath, 'utf8'))\n\nif (!fs.existsSync(dbPath)) {\n  fs.writeFileSync(dbPath, JSON.stringify({ nextId: 0, tasks: [] }), 'utf8')\n}\n\nexport const getTasks = async (limit?: number) => (await readDB()).tasks.slice(0, limit)\n")))),Object(s.b)(i.a,{defaultValue:"next",values:[{label:"Next.js",value:"next"},{label:"Nuxt.js",value:"nuxt"}],mdxType:"Tabs"},Object(s.b)(o.a,{value:"next",mdxType:"TabItem"},Object(s.b)("p",null,"Use ",Object(s.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/aspida/aspida"}),"aspida")," and ",Object(s.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/aspida/aspida/tree/master/packages/aspida-swr"}),"@aspida/swr")," for the frontend HTTP client.",Object(s.b)("br",{parentName:"p"}),"\n","(Frourio and aspida are maintained by the same developer)"),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts",metastring:'title="pages/index.tsx"',title:'"pages/index.tsx"'}),"import useAspidaSWR from '@aspida/swr'\nimport { apiClient } from '~/utils/apiClient'\n\nconst { data, error, mutate } = useAspidaSWR(apiClient.tasks, { query: { limit: 10 } })\n"))),Object(s.b)(o.a,{value:"nuxt",mdxType:"TabItem"},Object(s.b)("p",null,"Use ",Object(s.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/aspida/aspida"}),"aspida")," for the frontend HTTP client.",Object(s.b)("br",{parentName:"p"}),"\n","(Frourio and aspida are maintained by the same developer)"),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts",metastring:'title="pages/index.vue"',title:'"pages/index.vue"'}),"import Vue from 'vue'\n\nexport default Vue.extend({\n  async fetch() {\n    this.tasks = await this.$api.tasks.$get({ query: { limit: 10 } })\n  },\n})\n")))))}m.isMDXComponent=!0},99:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),p=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),b=r,d=u["".concat(i,".").concat(b)]||u[b]||m[b]||s;return n?a.a.createElement(d,o(o({ref:t},c),{},{components:n})):a.a.createElement(d,o({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,i=new Array(s);i[0]=b;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var c=2;c<s;c++)i[c]=n[c];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);