"use strict";(self.webpackChunkobol_docs=self.webpackChunkobol_docs||[]).push([[301],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return v}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),d=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=d(r),v=o,f=p["".concat(l,".").concat(v)]||p[v]||c[v]||i;return r?n.createElement(f,a(a({ref:t},u),{},{components:r})):n.createElement(f,a({ref:t},u))}));function v(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var d=2;d<i;d++)a[d]=r[d];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},76315:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return v},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return c}});var n=r(83117),o=r(80102),i=(r(67294),r(3905)),a=["components"],s={sidebar_position:10,description:"Frequently asked questions"},l="Frequently asked questions",d={unversionedId:"int/faq",id:"version-v0.3.0/int/faq",title:"Frequently asked questions",description:"Frequently asked questions",source:"@site/versioned_docs/version-v0.3.0/int/faq.md",sourceDirName:"int",slug:"/int/faq",permalink:"/docs/v0.3.0/int/faq",draft:!1,editUrl:"https://github.com/ObolNetwork/obol-docs/edit/main/versioned_docs/version-v0.3.0/int/faq.md",tags:[],version:"v0.3.0",sidebarPosition:10,frontMatter:{sidebar_position:10,description:"Frequently asked questions"},sidebar:"version-v0.3.0/tutorialSidebar",previous:{title:"Working groups",permalink:"/docs/v0.3.0/int/working-groups"},next:{title:"Introducing Charon",permalink:"/docs/v0.3.0/dv/introducing-charon"}},u={},c=[{value:"Does Obol have a token?",id:"does-obol-have-a-token",level:3},{value:"Can I keep my existing validator client?",id:"can-i-keep-my-existing-validator-client",level:3},{value:"Can I migrate my existing validator into a distributed validator?",id:"can-i-migrate-my-existing-validator-into-a-distributed-validator",level:3},{value:"Where can I learn more about Distributed Validators?",id:"where-can-i-learn-more-about-distributed-validators",level:3}],p={toc:c};function v(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"frequently-asked-questions"},"Frequently asked questions"),(0,i.kt)("h3",{id:"does-obol-have-a-token"},"Does Obol have a token?"),(0,i.kt)("p",null,"No. Distributed validators use only ether."),(0,i.kt)("h3",{id:"can-i-keep-my-existing-validator-client"},"Can I keep my existing validator client?"),(0,i.kt)("p",null,"Yes. Charon sits as a middleware between a validator client and it's beacon node. All validators that implement the standard REST API will be supported, along with all popular client delivery software such as DAppNode ",(0,i.kt)("a",{parentName:"p",href:"https://dappnode.github.io/explorer/#/"},"packages"),", Rocket Pool's ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/rocket-pool/smartnode"},"smart node"),", StakeHouse's ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/stake-house/wagyu"},"wagyu"),", and Stereum's ",(0,i.kt)("a",{parentName:"p",href:"https://stereum.net/development/#roadmap"},"node launcher"),"."),(0,i.kt)("h3",{id:"can-i-migrate-my-existing-validator-into-a-distributed-validator"},"Can I migrate my existing validator into a distributed validator?"),(0,i.kt)("p",null,"It will be possible to split an existing validator keystore into a set of key shares suitable for a distributed validator, but it is a trusted distribution process, and if the old staking system is not safely shut down, it could pose a risk of double signing alongside the new distributed validator."),(0,i.kt)("p",null,"In an ideal scenario, a distributed validator's private key should never exist in full in a single location."),(0,i.kt)("h3",{id:"where-can-i-learn-more-about-distributed-validators"},"Where can I learn more about Distributed Validators?"),(0,i.kt)("p",null,"Have you checked out our ",(0,i.kt)("a",{parentName:"p",href:"https://blog.obol.tech"},"blog site")," and ",(0,i.kt)("a",{parentName:"p",href:"https://twitter.com/ObolNetwork"},"twitter")," yet? Maybe join our ",(0,i.kt)("a",{parentName:"p",href:"https://discord.gg/obol"},"discord")," too."))}v.isMDXComponent=!0}}]);