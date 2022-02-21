"use strict";(self.webpackChunkobol_docs=self.webpackChunkobol_docs||[]).push([[734],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return f}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),p=c(r),f=a,h=p["".concat(u,".").concat(f)]||p[f]||l[f]||o;return r?n.createElement(h,i(i({ref:t},s),{},{components:r})):n.createElement(h,i({ref:t},s))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=p;var d={};for(var u in t)hasOwnProperty.call(t,u)&&(d[u]=t[u]);d.originalType=e,d.mdxType="string"==typeof e?e:a,i[1]=d;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},695:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return d},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return s},default:function(){return p}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=["components"],d={Description:"A dapp to securely create Distributed Validator keys alone or with a group."},u="Distributed Validator Launchpad",c={unversionedId:"dvk/distributed_validator_launchpad",id:"dvk/distributed_validator_launchpad",isDocsHomePage:!1,title:"Distributed Validator Launchpad",description:"To activate an Ethereum validator you need to deposit 32 ether into the official deposit contract. The vast majority of users that created validators to date have used the ~~Eth2~~ Staking Launchpad, a public good open source website built by the Ethereum Foundation and participants that later went on to found Obol. This tool has been wildly successful in the safe and educational creation of a significant number of validators on Mainnet.",source:"@site/docs/dvk/02_distributed_validator_launchpad.md",sourceDirName:"dvk",slug:"/dvk/distributed_validator_launchpad",permalink:"/docs/dvk/distributed_validator_launchpad",editUrl:"https://github.com/obolnetwork/obol-docs/edit/main/website/docs/dvk/02_distributed_validator_launchpad.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{Description:"A dapp to securely create Distributed Validator keys alone or with a group."},sidebar:"tutorialSidebar",previous:{title:"Distributed Validator Keys",permalink:"/docs/dvk/distributed-validator-keys"},next:{title:"DKG CLI Reference",permalink:"/docs/dvk/dkg_cli_reference"}},s=[],l={toc:s};function p(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"distributed-validator-launchpad"},"Distributed Validator Launchpad"),(0,o.kt)("p",null,"To activate an Ethereum validator you need to deposit 32 ether into the official deposit contract. The vast majority of users that created validators to date have used the ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://launchpad.ethereum.org/"},(0,o.kt)("del",{parentName:"a"},"Eth2")," Staking Launchpad")),", a public good open source website built by the Ethereum Foundation and participants that later went on to found Obol. This tool has been wildly successful in the safe and educational creation of a significant number of validators on Mainnet."),(0,o.kt)("p",null,"To facilitate the generation of distributed validator keys amongst remote users with high trust, the Obol Network intends to develop and maintain a website that enables a group of users to come together and create these threshold keys. "),(0,o.kt)("p",null,"The DV Launchpad is being developed over a number of phases, coordinated by our ",(0,o.kt)("a",{parentName:"p",href:"/docs/dvk/distributed-validator-keys#working-group-formation"},"DV launchpad working group"),", more to come soon on partipation in the later stages of the working group's phases."))}p.isMDXComponent=!0}}]);