"use strict";(self.webpackChunkobol_docs=self.webpackChunkobol_docs||[]).push([[5206],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,k=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return n?o.createElement(k,r(r({ref:t},p),{},{components:n})):o.createElement(k,r({ref:t},p))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,r[1]=l;for(var c=2;c<i;c++)r[c]=n[c];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},63582:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var o=n(87462),a=(n(67294),n(3905));const i={sidebar_position:8,description:"Run a cluster on mainnet"},r="Run a cluster on mainnet",l={unversionedId:"int/quickstart/quickstart-mainnet",id:"int/quickstart/quickstart-mainnet",title:"Run a cluster on mainnet",description:"Run a cluster on mainnet",source:"@site/docs/int/quickstart/quickstart-mainnet.md",sourceDirName:"int/quickstart",slug:"/int/quickstart/quickstart-mainnet",permalink:"/docs/next/int/quickstart/quickstart-mainnet",draft:!1,editUrl:"https://github.com/ObolNetwork/obol-docs/edit/main/docs/int/quickstart/quickstart-mainnet.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8,description:"Run a cluster on mainnet"},sidebar:"tutorialSidebar",previous:{title:"Exit a validator",permalink:"/docs/next/int/quickstart/quickstart-exit"},next:{title:"Frequently asked questions",permalink:"/docs/next/int/faq/general"}},s={},c=[{value:"Remote mainnet beacon node",id:"remote-mainnet-beacon-node",level:4},{value:"Mainnet node with mev-boost",id:"mainnet-node-with-mev-boost",level:4},{value:"Exit a mainnet distributed validator",id:"exit-a-mainnet-distributed-validator",level:4}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"run-a-cluster-on-mainnet"},"Run a cluster on mainnet"),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"Note that you should proceed only if you accept the risk and have tested this on goerli testnet."),(0,a.kt)("p",{parentName:"admonition"},"DKG keys created for goerli cannot be used on mainnet and vice versa.")),(0,a.kt)("p",null,"This section is intended for users who wish to run their distributed validator on Ethereum mainnet."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"First make sure that your DV stack is ",(0,a.kt)("a",{parentName:"li",href:"./quickstart-alone#updating-dv-stack"},"up-to-date"),"."),(0,a.kt)("li",{parentName:"ol"},"Then, copy the ",(0,a.kt)("inlineCode",{parentName:"li"},".env.sample")," file to ",(0,a.kt)("inlineCode",{parentName:"li"},".env"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"cp -n .env.sample .env\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"In your ",(0,a.kt)("inlineCode",{parentName:"li"},".env")," file, uncomment and set values for ",(0,a.kt)("inlineCode",{parentName:"li"},"NETWORK")," & ",(0,a.kt)("inlineCode",{parentName:"li"},"LIGHTHOUSE_CHECKPOINT_SYNC_URL"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"...\n# Overrides network for all the relevant services.\nNETWORK=mainnet\n...\n# Checkpoint sync url used by lighthouse to fast sync.\nLIGHTHOUSE_CHECKPOINT_SYNC_URL=https://mainnet.checkpoint.sigp.io/https://eth-clients.github.io/checkpoint-sync-endpoints/#mainnet\n...\n")),(0,a.kt)("p",null,"Note that you can choose any checkpoint sync url from ",(0,a.kt)("a",{parentName:"p",href:"https://eth-clients.github.io/checkpoint-sync-endpoints/#mainnet"},"https://eth-clients.github.io/checkpoint-sync-endpoints/#mainnet"),"."),(0,a.kt)("p",null,"Your DV stack is now mainnet ready \ud83c\udf89"),(0,a.kt)("h4",{id:"remote-mainnet-beacon-node"},"Remote mainnet beacon node"),(0,a.kt)("p",null,"If you already have a mainnet beacon node running somewhere and you want to use that instead of running EL (",(0,a.kt)("inlineCode",{parentName:"p"},"geth"),") & CL (",(0,a.kt)("inlineCode",{parentName:"p"},"lighthouse"),") as part\nof the repo, you can disable these images. To do so, follow these steps:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Copy the ",(0,a.kt)("inlineCode",{parentName:"li"},"docker-compose.override.yml.sample")," file")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"cp -n docker-compose.override.yml.sample docker-compose.override.yml\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Uncomment the ",(0,a.kt)("inlineCode",{parentName:"li"},"profiles: [disable]")," section for both ",(0,a.kt)("inlineCode",{parentName:"li"},"geth")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"lighthouse"),". The override file should now look like this")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"services:\n  geth:\n    # Disable geth\n    profiles: [disable]\n    # Bind geth internal ports to host ports\n    #ports:\n      #- 8545:8545 # JSON-RPC\n      #- 8551:8551 # AUTH-RPC\n      #- 6060:6060 # Metrics\n\n  lighthouse:\n    # Disable lighthouse\n    profiles: [disable]\n    # Bind lighthouse internal ports to host ports\n    #ports:\n      #- 5052:5052 # HTTP\n      #- 5054:5054 # Metrics\n...\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Then, uncomment and set the ",(0,a.kt)("inlineCode",{parentName:"li"},"CHARON_BEACON_NODE_ENDPOINTS")," variable in the ",(0,a.kt)("inlineCode",{parentName:"li"},".env")," file to your mainnet beacon node's URL")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"...\n# Connect to one or more external beacon nodes. Use a comma separated list excluding spaces.\nCHARON_BEACON_NODE_ENDPOINTS=<YOUR_REMOTE_MAINNET_BEACON_NODE_URL>\n...\n")),(0,a.kt)("h4",{id:"mainnet-node-with-mev-boost"},"Mainnet node with mev-boost"),(0,a.kt)("p",null,"If you are running your mainnet DV node with ",(0,a.kt)("inlineCode",{parentName:"p"},"mev-boost"),", you need to uncomment and set the ",(0,a.kt)("inlineCode",{parentName:"p"},"MEVBOOST_RELAYS")," variable in the ",(0,a.kt)("inlineCode",{parentName:"p"},".env")," file"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"...\n# MEV-Boost docker container image version, e.g. `latest` or `v1.4.0`.\n#MEVBOOST_VERSION=\nMEVBOOST_RELAYS=https://0x9000009807ed12c1f08bf4e81c6da3ba8e3fc3d953898ce0102433094e5f22f21102ec057841fcb81978ed1ea0fa8246@builder-relay-mainnet.blocknative.com\n...\n")),(0,a.kt)("p",null,"You can also use the ",(0,a.kt)("a",{parentName:"p",href:"https://boost-relay.flashbots.net/"},"flashbots relay"),"."),(0,a.kt)("h4",{id:"exit-a-mainnet-distributed-validator"},"Exit a mainnet distributed validator"),(0,a.kt)("p",null,"If you want to exit your mainnet validator, you need to uncomment and set the ",(0,a.kt)("inlineCode",{parentName:"p"},"EXIT_EPOCH")," variable in the ",(0,a.kt)("inlineCode",{parentName:"p"},".env")," file"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"...\n# Cluster wide consistent exit epoch. Set to latest for fork version, see `curl $BEACON_NODE/eth/v1/config/fork_schedule`\n# Currently, the latest fork is bellatrix (epoch: 144896)\nEXIT_EPOCH=144896\n...\n")),(0,a.kt)("p",null,"Note that ",(0,a.kt)("inlineCode",{parentName:"p"},"EXIT_EPOCH")," should be ",(0,a.kt)("inlineCode",{parentName:"p"},"194048")," after the ",(0,a.kt)("a",{parentName:"p",href:"https://blog.ethereum.org/2023/03/28/shapella-mainnet-announcement"},"shapella fork"),"."))}u.isMDXComponent=!0}}]);