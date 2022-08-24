"use strict";(self.webpackChunkobol_docs=self.webpackChunkobol_docs||[]).push([[7387],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return p}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var d=r.createContext({}),c=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,d=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),f=c(n),p=i,h=f["".concat(d,".").concat(p)]||f[p]||u[p]||a;return n?r.createElement(h,o(o({ref:t},l),{},{components:n})):r.createElement(h,o({ref:t},l))}));function p(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=f;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},8375:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return d},default:function(){return p},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u}});var r=n(3117),i=n(102),a=(n(7294),n(3905)),o=["components"],s={description:"Documenting a Distributed Validator Cluster in a standardised file format"},d="Cluster Configuration",c={unversionedId:"dv/distributed-validator-cluster-manifest",id:"version-v0.9.0/dv/distributed-validator-cluster-manifest",title:"Cluster Configuration",description:"Documenting a Distributed Validator Cluster in a standardised file format",source:"@site/versioned_docs/version-v0.9.0/dv/08_distributed-validator-cluster-manifest.md",sourceDirName:"dv",slug:"/dv/distributed-validator-cluster-manifest",permalink:"/docs/dv/distributed-validator-cluster-manifest",draft:!1,editUrl:"https://github.com/ObolNetwork/obol-docs/edit/main/versioned_docs/version-v0.9.0/dv/08_distributed-validator-cluster-manifest.md",tags:[],version:"v0.9.0",sidebarPosition:8,frontMatter:{description:"Documenting a Distributed Validator Cluster in a standardised file format"},sidebar:"tutorialSidebar",previous:{title:"P2P interface",permalink:"/docs/dv/p2p-interface"},next:{title:"Charon CLI reference",permalink:"/docs/dv/charon_cli_reference"}},l={},u=[{value:"Cluster Configuration Files",id:"cluster-configuration-files",level:2}],f={toc:u};function p(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"cluster-configuration"},"Cluster Configuration"),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"These cluster definition and cluster lock files are a work in progress. The intention is for the files to be standardised for operating distributed validators via the ",(0,a.kt)("a",{parentName:"p",href:"https://eips.ethereum.org/"},"EIP process")," when appropriate.")),(0,a.kt)("p",null,"This document describes the configuration options for running a charon client (or cluster) locally or in production."),(0,a.kt)("h2",{id:"cluster-configuration-files"},"Cluster Configuration Files"),(0,a.kt)("p",null,"A charon cluster is configured in two steps:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"cluster-definition.json")," which defines the intended cluster configuration before keys have been created in a distributed key generation ceremony."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"cluster-lock.json")," which includes and extends ",(0,a.kt)("inlineCode",{parentName:"li"},"cluster-definition.json")," with distributed validator BLS public key shares.")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"charon create dkg")," command is used to create ",(0,a.kt)("inlineCode",{parentName:"p"},"cluster-definition.json")," file which is used as input to ",(0,a.kt)("inlineCode",{parentName:"p"},"charon dkg"),"."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"charon create cluster")," command combines both steps into one and just outputs the final ",(0,a.kt)("inlineCode",{parentName:"p"},"cluster-lock.json")," without a DKG step."),(0,a.kt)("p",null,"The schema of the ",(0,a.kt)("inlineCode",{parentName:"p"},"cluster-definition.json")," is defined as:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "best cluster",                       // Optional cosmetic identifier\n  "operators": [\n    {\n      "address": "0x123..abfc",                 // ETH1 address of the operator\n      "enr": "enr://abcdef...12345",            // Charon node ENR\n      "nonce": 1,                               // Nonce (incremented each time the ENR is added/signed)\n      "config_signature": "123456...abcdef",    // EIP712 Signature of config_hash by ETH1 address priv key\n      "enr_signature": "123654...abcedf"        // EIP712 Signature of ENR by ETH1 address priv key\n    }\n  ],\n  "uuid": "1234-abcdef-1234-abcdef",            // Random unique identifier.\n  "version": "v1.0.0",                          // Schema version\n  "num_validators": 100,                        // Number of distributed validators to be created in cluster.lock\n  "threshold": 3,                               // Optional threshold required for signature reconstruction\n  "fee_recipient_address":"0x123..abfc",        // ETH1 fee_recipient address\n  "withdrawal_address": "0x123..abfc",          // ETH1 withdrawal address\n  "dkg_algorithm": "foo_dkg_v1" ,               // Optional DKG algorithm for key generation\n  "fork_version": "0x00112233",                 // Chain/Network identifier\n  "config_hash": "abcfde...acbfed",             // Hash of the static (non-changing) fields\n  "definition_hash": "abcdef...abcedef"         // Final Hash of all fields\n}\n')),(0,a.kt)("p",null,"The above ",(0,a.kt)("inlineCode",{parentName:"p"},"cluster-definition.json")," is provided as input to the DKG which generates keys and the ",(0,a.kt)("inlineCode",{parentName:"p"},"cluster-lock.json")," file."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"cluster-lock.json")," has the following schema:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "cluster_definition": {...},                              // Cluster definiition json, identical schema to above,\n  "distributed_validators": [                               // Length equaled to num_validators.\n    {\n      "distributed_public_key":  "0x123..abfc",             // DV root pubkey\n      "public_shares": [ "oA8Z...2XyT", "g1q...icu"],       // Public Key Shares\n      "fee_recipient": "0x123..abfc"                        // Defaults to withdrawal address if not set, can be edited manually\n    }\n  ],\n  "lock_hash": "abcdef...abcedef",                          // Config_hash plus distributed_validators\n  "signature_aggregate": "abcdef...abcedef"                 // BLS aggregate signature of the lock hash signed by each DV pubkey.\n}\n')))}p.isMDXComponent=!0}}]);