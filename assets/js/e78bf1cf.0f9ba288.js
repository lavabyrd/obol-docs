"use strict";(self.webpackChunkobol_docs=self.webpackChunkobol_docs||[]).push([[5393],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var d=r.createContext({}),l=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(d.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,d=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(n),p=i,h=u["".concat(d,".").concat(p)]||u[p]||f[p]||a;return n?r.createElement(h,o(o({ref:t},c),{},{components:n})):r.createElement(h,o({ref:t},c))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=p;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s[u]="string"==typeof e?e:i,o[1]=s;for(var l=2;l<a;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},62023:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var r=n(87462),i=(n(67294),n(3905));const a={description:"Documenting a Distributed Validator Cluster in a standardised file format"},o="Cluster Configuration",s={unversionedId:"dv/distributed-validator-cluster-manifest",id:"version-v0.8.1/dv/distributed-validator-cluster-manifest",title:"Cluster Configuration",description:"Documenting a Distributed Validator Cluster in a standardised file format",source:"@site/versioned_docs/version-v0.8.1/dv/08_distributed-validator-cluster-manifest.md",sourceDirName:"dv",slug:"/dv/distributed-validator-cluster-manifest",permalink:"/docs/v0.8.1/dv/distributed-validator-cluster-manifest",draft:!1,editUrl:"https://github.com/ObolNetwork/obol-docs/edit/main/versioned_docs/version-v0.8.1/dv/08_distributed-validator-cluster-manifest.md",tags:[],version:"v0.8.1",sidebarPosition:8,frontMatter:{description:"Documenting a Distributed Validator Cluster in a standardised file format"},sidebar:"tutorialSidebar",previous:{title:"P2P interface",permalink:"/docs/v0.8.1/dv/p2p-interface"},next:{title:"Charon CLI reference",permalink:"/docs/v0.8.1/dv/charon_cli_reference"}},d={},l=[{value:"Cluster Configuration Files",id:"cluster-configuration-files",level:2}],c={toc:l};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"cluster-configuration"},"Cluster Configuration"),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"These cluster definition and cluster lock files are a work in progress. The intention is for the files to be standardised for operating distributed validators via the ",(0,i.kt)("a",{parentName:"p",href:"https://eips.ethereum.org/"},"EIP process")," when appropriate.")),(0,i.kt)("p",null,"This document describes the configuration options for running a charon client (or cluster) locally or in production."),(0,i.kt)("h2",{id:"cluster-configuration-files"},"Cluster Configuration Files"),(0,i.kt)("p",null,"A charon cluster is configured in two steps:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"cluster-definition.json")," which defines the intended cluster configuration before keys have been created in a distributed key generation ceremony."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"cluster-lock.json")," which includes and extends ",(0,i.kt)("inlineCode",{parentName:"li"},"cluster-definition.json")," with distributed validator BLS public key shares.")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"charon create dkg")," command is used to create ",(0,i.kt)("inlineCode",{parentName:"p"},"cluster-definition.json")," file which is used as input to ",(0,i.kt)("inlineCode",{parentName:"p"},"charon dkg"),"."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"charon create cluster")," command combines both steps into one and just outputs the final ",(0,i.kt)("inlineCode",{parentName:"p"},"cluster-lock.json")," without a DKG step."),(0,i.kt)("p",null,"The schema of the ",(0,i.kt)("inlineCode",{parentName:"p"},"cluster-definition.json")," is defined as:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "best cluster",                       // Optional cosmetic identifier\n  "operators": [\n    {\n      "address": "0x123..abfc",                 // ETH1 address of the operator\n      "enr": "enr://abcdef...12345",            // Charon node ENR\n      "nonce": 1,                               // Nonce (incremented each time the ENR is added/signed)\n      "config_signature": "123456...abcdef",    // EIP712 Signature of config_hash by ETH1 address priv key\n      "enr_signature": "123654...abcedf"        // EIP712 Signature of ENR by ETH1 address priv key\n    }\n  ],\n  "uuid": "1234-abcdef-1234-abcdef",            // Random unique identifier.\n  "version": "v1.0.0",                          // Schema version\n  "num_validators": 100,                        // Number of distributed validators to be created in cluster.lock\n  "threshold": 3,                               // Optional threshold required for signature reconstruction\n  "fee_recipient_address":"0x123..abfc",        // ETH1 fee_recipient address\n  "withdrawal_address": "0x123..abfc",          // ETH1 withdrawal address\n  "dkg_algorithm": "foo_dkg_v1" ,               // Optional DKG algorithm for key generation\n  "fork_version": "0x00112233",                 // Chain/Network identifier\n  "config_hash": "abcfde...acbfed",             // Hash of the static (non-changing) fields\n  "definition_hash": "abcdef...abcedef"         // Final Hash of all fields\n}\n')),(0,i.kt)("p",null,"The above ",(0,i.kt)("inlineCode",{parentName:"p"},"cluster-definition.json")," is provided as input to the DKG which generates keys and the ",(0,i.kt)("inlineCode",{parentName:"p"},"cluster-lock.json")," file."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"cluster-lock.json")," has the following schema:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "cluster_definition": {...},                              // Cluster definiition json, identical schema to above,\n  "distributed_validators": [                               // Length equaled to num_validators.\n    {\n      "distributed_public_key":  "0x123..abfc",             // DV root pubkey\n      "public_shares": [ "oA8Z...2XyT", "g1q...icu"],       // Public Key Shares\n      "fee_recipient": "0x123..abfc"                        // Defaults to withdrawal address if not set, can be edited manually\n    }\n  ],\n  "lock_hash": "abcdef...abcedef",                          // Config_hash plus distributed_validators\n  "signature_aggregate": "abcdef...abcedef"                 // BLS aggregate signature of the lock hash signed by each DV pubkey.\n}\n')))}u.isMDXComponent=!0}}]);