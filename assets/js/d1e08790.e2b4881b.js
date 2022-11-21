"use strict";(self.webpackChunkobol_docs=self.webpackChunkobol_docs||[]).push([[4330],{3905:function(e,t,i){i.d(t,{Zo:function(){return c},kt:function(){return h}});var n=i(67294);function o(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function a(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){o(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,n,o=function(e,t){if(null==e)return{};var i,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||(o[i]=e[i]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(o[i]=e[i])}return o}var l=n.createContext({}),u=function(e){var t=n.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):a(a({},t),e)),i},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var i=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(i),h=o,v=p["".concat(l,".").concat(h)]||p[h]||d[h]||r;return i?n.createElement(v,a(a({ref:t},c),{},{components:i})):n.createElement(v,a({ref:t},c))}));function h(e,t){var i=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=i.length,a=new Array(r);a[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var u=2;u<r;u++)a[u]=i[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,i)}p.displayName="MDXCreateElement"},4317:function(e,t,i){i.r(t),i.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return d}});var n=i(83117),o=i(80102),r=(i(67294),i(3905)),a=["components"],s={sidebar_position:2,description:"An overview of the Obol network"},l=void 0,u={unversionedId:"int/Overview",id:"version-v0.8.0/int/Overview",title:"Overview",description:"An overview of the Obol network",source:"@site/versioned_docs/version-v0.8.0/int/Overview.md",sourceDirName:"int",slug:"/int/Overview",permalink:"/docs/v0.8.0/int/Overview",draft:!1,editUrl:"https://github.com/ObolNetwork/obol-docs/edit/main/versioned_docs/version-v0.8.0/int/Overview.md",tags:[],version:"v0.8.0",sidebarPosition:2,frontMatter:{sidebar_position:2,description:"An overview of the Obol network"},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/docs/v0.8.0/intro"},next:{title:"Key concepts",permalink:"/docs/v0.8.0/int/key-concepts"}},c={},d=[{value:"The Network",id:"the-network",level:2},{value:"Sustainable Public Goods",id:"sustainable-public-goods",level:3},{value:"The Vision",id:"the-vision",level:2},{value:"V1 - Trusted Distributed Validators",id:"v1---trusted-distributed-validators",level:3},{value:"V2 - Trustless Distributed Validators",id:"v2---trustless-distributed-validators",level:3}],p={toc:d};function h(e){var t=e.components,s=(0,o.Z)(e,a);return(0,r.kt)("wrapper",(0,n.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"the-network"},"The Network"),(0,r.kt)("p",null,"The network can be best visualized as a work layer that sits directly on top of base layer consensus. This work layer is designed to provide the base layer with more resiliency and promote decentralization as it scales. As the current chapter of Ethereum matures over the coming years, the community will move onto the next great scaling challenge, which is stake centralization. To effectively mititgate these risks, community building and credible neutrality must be used as a primary design principles."),(0,r.kt)("p",null,"Obol as a layer is focused on scaling consensus by providing permissionless access to Distributed Validators (DV's). We believe that DV's will and should make up a large portion of mainnet validator configurations. In preparation for the first wave of adoption the network currently utilizes a middleware implementation of Distributed Validator Technology (DVT), to enable the operation of distributed validator clusters that can preserve validators current client and remote signing configurations."),(0,r.kt)("p",null,"Similar to how roll up technology laid the foundation for L2 scaling implementations, we believe DVT will do the same for scaling consensus while preserving decentralization. Staking infrastructure is entering its protocol phase of evolution, which must include trust-minimized staking networks that can be plugged into at scale. Layers like Obol are critical to the long term viability and resiliency of public networks, especially networks like Ethereum. We believe DVT will evolve into a widely used primitive and will ensure the security, resiliency, and decentralization of the public blockchain networks that adopt it."),(0,r.kt)("p",null,"The Obol Network consists of four core public goods:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("a",{parentName:"li",href:"/docs/v0.8.0/dvk/distributed-validator-keys"},"Distributed Validator Launchpad"),", a CLI tool and dApp for bootstrapping Distributed Validators"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/v0.8.0/dv/introducing-charon"},"Charon"),", a middleware client that enables validators to run in a fault-tolerant, distributed manner"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/v0.8.0/sc/introducing-obol-managers"},"Obol Managers"),", a set of solidity smart contracts for the formation of Distributed Validators"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/v0.8.0/testnet"},"Obol Testnets"),", a set of on-going public incentivised testnets that enable any sized operator to test their deployment before serving for the mainnet Obol Network")),(0,r.kt)("h3",{id:"sustainable-public-goods"},"Sustainable Public Goods"),(0,r.kt)("p",null,"The Obol Ecosystem is inspired by previous work on Ethereum public goods and experimenting with circular economics. We believe that to unlock innovation in staking use cases, a credibly neutral layer must exist for innovation to flow and evolve vertically. Without this layer highly available uptime will continue to be a moat and stake will accumulate amongst a few products."),(0,r.kt)("p",null,"The Obol Network will become an open, community governed, self-sustaining project over the coming months and years. Together we will incentivize, build, and maintain distributed validator technology that makes public networks a more secure and resilient foundation to build on top of."),(0,r.kt)("p",null,(0,r.kt)("img",{src:i(98008).Z,width:"1001",height:"565"})),(0,r.kt)("h2",{id:"the-vision"},"The Vision"),(0,r.kt)("p",null,"The road to decentralising stake is a long one. At Obol we have divided our vision into two key versions of distributed validators."),(0,r.kt)("h3",{id:"v1---trusted-distributed-validators"},"V1 - Trusted Distributed Validators"),(0,r.kt)("p",null,"The first version of distibuted validators will have dispute resolution out of band. Meaning you need to know and communicate with your counterparty operators if there is an issue with your shared cluster."),(0,r.kt)("p",null,"A DV without in-band dispute resolution/incentivisation is still extremely valuable. Individuals and staking as a service providers can deploy DVs on their own to make their validators fault tolerant. Groups can run DVs together, but need to bring their own dispute resolution to the table, whether that be a smart contract of their own, a traditional legal service agreement, or simply high trust between the group."),(0,r.kt)("p",null,"Obol V1 will utilize retroactive public goods principles to lay the foundation of its economic ecosystem. The Obol Community will responsibly allocate the collected ETH as grants to projects in the staking ecosystem for the entirety of V1."),(0,r.kt)("h3",{id:"v2---trustless-distributed-validators"},"V2 - Trustless Distributed Validators"),(0,r.kt)("p",null,"V1 of charon serves a small by count, large by stake-weight group of individuals. The long tail of home and small stakers also deserve to have access to fault tolerant validation, but they may not know enough other operators personally to a sufficient level of trust to run a DV cluster together."),(0,r.kt)("p",null,"Version 2 of charon will layer in an incentivisation scheme to ensure any operator not online and taking part in validation is not earning any rewards. Further incentivisation alignment can be achieved with operator bonding requirements that can be slashed for unacceptable performance."),(0,r.kt)("p",null,"To add an un-gameable incentivisation layer to threshold validation requires complex interactive cryptography schemes, secure off-chain dispute resolution, and EVM support for proofs of the consensus layer state, as a result, this will be a longer and more complex undertaking than V1, hence the deliniation between the two."))}h.isMDXComponent=!0},98008:function(e,t,i){t.Z=i.p+"assets/images/DVT4-293fe7544cd15e65e3f8c17bde106d45.png"}}]);