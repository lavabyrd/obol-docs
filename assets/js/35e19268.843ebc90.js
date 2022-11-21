"use strict";(self.webpackChunkobol_docs=self.webpackChunkobol_docs||[]).push([[6286],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(n),h=o,f=p["".concat(s,".").concat(h)]||p[h]||d[h]||a;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},82787:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return d}});var r=n(83117),o=n(80102),a=(n(67294),n(3905)),i=["components"],c={description:"Charon -  The Distributed Validator Client"},s="Introducing Charon",l={unversionedId:"dv/introducing-charon",id:"version-v0.7.0/dv/introducing-charon",title:"Introducing Charon",description:"Charon -  The Distributed Validator Client",source:"@site/versioned_docs/version-v0.7.0/dv/01_introducing-charon.md",sourceDirName:"dv",slug:"/dv/introducing-charon",permalink:"/docs/v0.7.0/dv/introducing-charon",draft:!1,editUrl:"https://github.com/ObolNetwork/obol-docs/edit/main/versioned_docs/version-v0.7.0/dv/01_introducing-charon.md",tags:[],version:"v0.7.0",sidebarPosition:1,frontMatter:{description:"Charon -  The Distributed Validator Client"},sidebar:"tutorialSidebar",previous:{title:"Frequently asked questions",permalink:"/docs/v0.7.0/int/faq"},next:{title:"Distributed validator creation",permalink:"/docs/v0.7.0/dv/validator-creation"}},u={},d=[{value:"What is Charon?",id:"what-is-charon",level:3},{value:"Charon architecture",id:"charon-architecture",level:3},{value:"Get started",id:"get-started",level:3}],p={toc:d};function h(e){var t=e.components,c=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},p,c,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"introducing-charon"},"Introducing Charon"),(0,a.kt)("p",null,"This section introduces and outlines the Charon middleware. For additional context regarding distributed validator technology, see ",(0,a.kt)("a",{parentName:"p",href:"../int/key-concepts#distributed-validator"},"this section")," of the key concept page."),(0,a.kt)("h3",{id:"what-is-charon"},"What is Charon?"),(0,a.kt)("p",null,"Charon is a GoLang-based, HTTP middleware built by Obol to enable any existing Ethereum validator clients to operate together as part of a distributed validator."),(0,a.kt)("p",null,"Charon sits as a middleware between a normal validating client and it's connected beacon node, intercepting and proxying API traffic. Multiple Charon clients are configured to communicate together to come to consensus on validator duties and behave as a single unified proof-of-stake validator together. The nodes form a cluster that is ",(0,a.kt)("em",{parentName:"p"},"byzantine-fault tolerant")," and continues to progress assuming a supermajority of working/honest nodes is met."),(0,a.kt)("h3",{id:"charon-architecture"},"Charon architecture"),(0,a.kt)("p",null,"The below graphic visually outlines the internal functionalies of Charon."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Charon Internals Slide",src:n(79816).Z,width:"960",height:"540"})),(0,a.kt)("h3",{id:"get-started"},"Get started"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"charon")," client is in an early alpha state, and is not ready for mainnet, see ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/ObolNetwork/charon#supported-consensus-layer-clients"},"here")," for the latest on charon's readiness."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"docker run ghcr.io/obolnetwork/charon:v0.7.0 --help\n")),(0,a.kt)("p",null,"For more information on running charon, take a look at our ",(0,a.kt)("a",{parentName:"p",href:"/docs/v0.7.0/int/quickstart/"},"quickstart guide"),"."))}h.isMDXComponent=!0},79816:function(e,t,n){t.Z=n.p+"assets/images/CharonInternals-8cab9fd64594cf16a86f3b7c10f10a88.png"}}]);