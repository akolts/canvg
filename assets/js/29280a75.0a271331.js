"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[959],{9613:function(e,r,t){t.d(r,{Zo:function(){return u},kt:function(){return f}});var n=t(9496);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=n.createContext({}),l=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},u=function(e){var r=l(e.components);return n.createElement(s.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=l(t),f=o,d=m["".concat(s,".").concat(f)]||m[f]||p[f]||a;return t?n.createElement(d,i(i({ref:r},u),{},{components:t})):n.createElement(d,i({ref:r},u))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=m;var c={};for(var s in r)hasOwnProperty.call(r,s)&&(c[s]=r[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=t[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},1869:function(e,r,t){t.d(r,{Z:function(){return a}});var n=t(566),o=t(7602);function a(e){var r=e.children,t=(0,n.Z)(),a=(0,o.Z)().isDarkTheme;return r({branch:t.siteConfig.customFields.branch,theme:a?"dark":"light"})}},9713:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return p},default:function(){return f}});var n=t(9624),o=t(42),a=(t(9496),t(9613)),i=t(1869),c=["components"],s={description:"Example of Canvg usage in browser without a bundler."},l="Browser",u={unversionedId:"examples/browser",id:"examples/browser",title:"Browser",description:"Example of Canvg usage in browser without a bundler.",source:"@site/docs/examples/browser.mdx",sourceDirName:"examples",slug:"/examples/browser",permalink:"/examples/browser",editUrl:"https://github.com/canvg/canvg/edit/master/website/docs/examples/browser.mdx",tags:[],version:"current",frontMatter:{description:"Example of Canvg usage in browser without a bundler."},sidebar:"examplesSidebar",previous:{title:"Basic",permalink:"/examples/basic"},next:{title:"NodeJS",permalink:"/examples/nodejs"}},p=[],m={toc:p};function f(e){var r=e.components,t=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,n.Z)({},m,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"browser"},"Browser"),(0,a.kt)("p",null,"Example of Canvg usage in browser without a bundler."),(0,a.kt)(i.Z,{mdxType:"ContextProvider"},(function(e){var r=e.branch,t=e.theme;return(0,a.kt)("iframe",{src:"https://codesandbox.io/embed/github/canvg/canvg/tree/"+r+"/sandboxes/browser?fontsize=14&hidenavigation=1&module=%2Findex.html&theme="+t,style:{width:"100%",height:"500px",border:0,borderRadius:"4px",overflow:"hidden"},title:"canvg/canvg usage example",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"})})))}f.isMDXComponent=!0}}]);