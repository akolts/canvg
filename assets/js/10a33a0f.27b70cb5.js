"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8024],{9613:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return g}});var n=r(9496);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=p(r),g=o,v=m["".concat(l,".").concat(g)]||m[g]||s[g]||i;return r?n.createElement(v,a(a({ref:t},u),{},{components:r})):n.createElement(v,a({ref:t},u))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var p=2;p<i;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8925:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return u},default:function(){return m}});var n=r(9624),o=r(42),i=(r(9496),r(9613)),a=["components"],c={slug:"/docs/migration-to-v4",description:"canvg migration guide to v4"},l="Migration to v4",p={unversionedId:"migration-to-v4",id:"migration-to-v4",title:"Migration to v4",description:"canvg migration guide to v4",source:"@site/docs/migration-to-v4.md",sourceDirName:".",slug:"/docs/migration-to-v4",permalink:"/docs/migration-to-v4",editUrl:"https://github.com/canvg/canvg/edit/master/website/docs/migration-to-v4.md",tags:[],version:"current",frontMatter:{slug:"/docs/migration-to-v4",description:"canvg migration guide to v4"},sidebar:"docsSidebar",previous:{title:"canvg",permalink:"/"}},u=[{value:"New exports",id:"new-exports",children:[],level:2},{value:"TypeScript 4",id:"typescript-4",children:[],level:2}],s={toc:u};function m(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"migration-to-v4"},"Migration to v4"),(0,i.kt)("p",null,"With v4, this library introduces a few small but breaking changes, so migration from v3 should be deadly easy."),(0,i.kt)("h2",{id:"new-exports"},"New exports"),(0,i.kt)("p",null,"Default export was renamed to ",(0,i.kt)("inlineCode",{parentName:"p"},"Canvg")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="v3"',title:'"v3"'},"import Canvg, { presets } from 'canvg';\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="v4"',title:'"v4"'},"import { Canvg, presets } from 'canvg';\n")),(0,i.kt)("h2",{id:"typescript-4"},"TypeScript 4"),(0,i.kt)("p",null,"Starting from canvg v4, you should use TypeScript 4."))}m.isMDXComponent=!0}}]);