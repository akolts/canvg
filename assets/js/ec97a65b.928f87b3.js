"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4037],{9613:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return f}});var n=r(9496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=l(r),f=a,d=m["".concat(s,".").concat(f)]||m[f]||u[f]||o;return r?n.createElement(d,i(i({ref:t},p),{},{components:r})):n.createElement(d,i({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},1869:function(e,t,r){r.d(t,{Z:function(){return o}});var n=r(566),a=r(7602);function o(e){var t=e.children,r=(0,n.Z)(),o=(0,a.Z)().isDarkTheme;return t({branch:r.siteConfig.customFields.branch,theme:o?"dark":"light"})}},1984:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return u},default:function(){return f}});var n=r(9624),a=r(42),o=(r(9496),r(9613)),i=r(1869),c=["components"],s={description:"Example of basic Canvg usage."},l="Basic",p={unversionedId:"examples/basic",id:"examples/basic",title:"Basic",description:"Example of basic Canvg usage.",source:"@site/docs/examples/basic.mdx",sourceDirName:"examples",slug:"/examples/basic",permalink:"/examples/basic",editUrl:"https://github.com/canvg/canvg/edit/master/website/docs/examples/basic.mdx",tags:[],version:"current",frontMatter:{description:"Example of basic Canvg usage."},sidebar:"examplesSidebar",previous:{title:"Examples",permalink:"/examples"},next:{title:"Browser",permalink:"/examples/browser"}},u=[],m={toc:u};function f(e){var t=e.components,r=(0,a.Z)(e,c);return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"basic"},"Basic"),(0,o.kt)("p",null,"Example of basic Canvg usage."),(0,o.kt)(i.Z,{mdxType:"ContextProvider"},(function(e){var t=e.branch,r=e.theme;return(0,o.kt)("iframe",{src:"https://codesandbox.io/embed/github/canvg/canvg/tree/"+t+"/sandboxes/basic?fontsize=14&hidenavigation=1&module=%2Findex.js&theme="+r,style:{width:"100%",height:"500px",border:0,borderRadius:"4px",overflow:"hidden"},title:"canvg/canvg usage example",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"})})))}f.isMDXComponent=!0}}]);