"use strict";(self.webpackChunkobol_docs=self.webpackChunkobol_docs||[]).push([[5712],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),u=l(r),h=o,f=u["".concat(s,".").concat(h)]||u[h]||p[h]||a;return r?n.createElement(f,i(i({ref:t},d),{},{components:r})):n.createElement(f,i({ref:t},d))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=h;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[u]="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},4227:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var n=r(87462),o=(r(67294),r(3905));const a={description:"Charon -  The Distributed Validator Client"},i="Introducing Charon",c={unversionedId:"dv/introducing-charon",id:"version-v0.5.0/dv/introducing-charon",title:"Introducing Charon",description:"Charon -  The Distributed Validator Client",source:"@site/versioned_docs/version-v0.5.0/dv/01_introducing-charon.md",sourceDirName:"dv",slug:"/dv/introducing-charon",permalink:"/docs/v0.5.0/dv/introducing-charon",draft:!1,editUrl:"https://github.com/ObolNetwork/obol-docs/edit/main/versioned_docs/version-v0.5.0/dv/01_introducing-charon.md",tags:[],version:"v0.5.0",sidebarPosition:1,frontMatter:{description:"Charon -  The Distributed Validator Client"},sidebar:"tutorialSidebar",previous:{title:"Frequently asked questions",permalink:"/docs/v0.5.0/int/faq"},next:{title:"Distributed validator creation",permalink:"/docs/v0.5.0/dv/validator-creation"}},s={},l=[{value:"What is Charon?",id:"what-is-charon",level:3},{value:"Charon architecture",id:"charon-architecture",level:3},{value:"Get started",id:"get-started",level:3}],d={toc:l};function u(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"introducing-charon"},"Introducing Charon"),(0,o.kt)("p",null,"This section introduces and outlines the Charon middleware. For additional context regarding distributed validator technology, see ",(0,o.kt)("a",{parentName:"p",href:"../int/key-concepts#distributed-validator"},"this section")," of the key concept page."),(0,o.kt)("h3",{id:"what-is-charon"},"What is Charon?"),(0,o.kt)("p",null,"Charon is a GoLang-based, HTTP middleware built by Obol to enable any existing Ethereum validator clients to operate together as part of a distributed validator."),(0,o.kt)("p",null,"Charon sits as a middleware between a normal validating client and it's connected beacon node, intercepting and proxying API traffic. Multiple Charon clients are configured to communicate together to come to consensus on validator duties and behave as a single unified proof-of-stake validator together. The nodes form a cluster that is ",(0,o.kt)("em",{parentName:"p"},"byzantine-fault tolerant")," and continues to progress assuming a supermajority of working/honest nodes is met."),(0,o.kt)("h3",{id:"charon-architecture"},"Charon architecture"),(0,o.kt)("p",null,"The below graphic visually outlines the internal functionalies of Charon."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Charon Internals Slide",src:r(79816).Z,width:"960",height:"540"})),(0,o.kt)("h3",{id:"get-started"},"Get started"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"charon")," client is in an early alpha state, and is not ready for mainnet, see ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ObolNetwork/charon#supported-consensus-layer-clients"},"here")," for the latest on charon's readiness."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"docker run ghcr.io/obolnetwork/charon:v0.4.0 --help\n")),(0,o.kt)("p",null,"For more information on running charon, take a look at our ",(0,o.kt)("a",{parentName:"p",href:"/docs/v0.5.0/int/quickstart"},"quickstart guide"),"."))}u.isMDXComponent=!0},79816:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/CharonInternals-8cab9fd64594cf16a86f3b7c10f10a88.png"}}]);