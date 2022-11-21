"use strict";(self.webpackChunkobol_docs=self.webpackChunkobol_docs||[]).push([[1931],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),d=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=d(e.components);return r.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=d(n),h=a,m=u["".concat(c,".").concat(h)]||u[h]||l[h]||i;return n?r.createElement(m,o(o({ref:t},p),{},{components:n})):r.createElement(m,o({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var d=2;d<i;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},85818:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return l}});var r=n(83117),a=n(80102),i=(n(67294),n(3905)),o=["components"],s={Description:"A rust-based CLI client for hosting and participating in Distributed Validator key generation ceremonies."},c="DKG CLI reference",d={unversionedId:"dvk/dkg_cli_reference",id:"version-v0.4.0/dvk/dkg_cli_reference",title:"DKG CLI reference",description:"The dkg-poc client is a prototype implementation for generating Distributed Validator Keys. Keys generated with this tool will not work with Charon, and they are not suitable for use.",source:"@site/versioned_docs/version-v0.4.0/dvk/03_dkg_cli_reference.md",sourceDirName:"dvk",slug:"/dvk/dkg_cli_reference",permalink:"/docs/v0.4.0/dvk/dkg_cli_reference",draft:!1,editUrl:"https://github.com/ObolNetwork/obol-docs/edit/main/versioned_docs/version-v0.4.0/dvk/03_dkg_cli_reference.md",tags:[],version:"v0.4.0",sidebarPosition:3,frontMatter:{Description:"A rust-based CLI client for hosting and participating in Distributed Validator key generation ceremonies."},sidebar:"tutorialSidebar",previous:{title:"Distributed Validator launchpad",permalink:"/docs/v0.4.0/dvk/distributed_validator_launchpad"},next:{title:"Obol Manager Contracts",permalink:"/docs/v0.4.0/sc/introducing-obol-managers"}},p={},l=[],u={toc:l};function h(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"dkg-cli-reference"},"DKG CLI reference"),(0,i.kt)("admonition",{type:"warning"},(0,i.kt)("p",{parentName:"admonition"},"The ",(0,i.kt)("inlineCode",{parentName:"p"},"dkg-poc")," client is a prototype implementation for generating Distributed Validator Keys. Keys generated with this tool will not work with Charon, and they are not suitable for use.")),(0,i.kt)("p",null,"The following is a reference for ",(0,i.kt)("inlineCode",{parentName:"p"},"dkg-poc")," at commit ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ObolNetwork/dkg-poc/commit/6181feaab2f60bdaaec954f11c04ef49c0b3366a"},(0,i.kt)("inlineCode",{parentName:"a"},"6181fea")),". Find the latest release on our ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ObolNetwork/dkg-poc"},"Github"),"."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"dkg-poc")," is implemented as a rust-based webserver for performing a distributed key generation ceremony. This deployment model ended up raising many user experience and security concerns, for example it is both hard and likely insecure to setup a TLS protected webserver at home if you are not a specialist in this area. Further, the PoC is based on an ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/kobigurk/aggregatable-dkg"},"Aggregatable DKG")," library which is built on sharing a group element rather than a field element, which makes the threshold signing scheme more complex as a result. These factors resulted in a deprecation of this approach, with many valuable insights gained from this client. Currently a DV launchpad and charon based DKG flow serves as the intended ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ObolNetwork/charon/blob/main/docs/dkg.md"},"DKG architecture")," for creating Distributed Validator Clusters. "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ dkg-poc --help \n\ndkg-poc 0.1.0\nA Distributed Validator Key Generation client for the Obol Network.\n\nUSAGE:\n    dkg-poc <SUBCOMMAND>\n\nFLAGS:\n    -h, --help       Prints help information\n    -V, --version    Prints version information\n\nSUBCOMMANDS:\n    help           Prints this message or the help of the given subcommand(s)\n    lead           Lead a new DKG ceremony\n    participate    Participate in a DKG ceremony\n\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ dkg-poc lead --help\n\ndkg-poc-lead 0.1.0\nLead a new DKG ceremony\n\nUSAGE:\n    dkg-poc lead [OPTIONS] --num-participants <num-participants> --threshold <threshold>\n\nFLAGS:\n    -h, --help       Prints help information\n    -V, --version    Prints version information\n\nOPTIONS:\n    -a, --address <addr>\n            The address to bind this client to, to participate in the DKG ceremony (Default: 127.0.0.1:8081)\n\n    -e, --enr <enr>\n            Provide existing charon ENR for this participant instead of generating a new private key to import\n\n    -n, --num-participants <num-participants>    The number of participants taking part in the DKG ceremony\n    -p, --password <password>\n            Password to join the ceremony (Default is to randomly generate a password)\n\n    -t, --threshold <threshold>\n            Sets the threshold at which point a group of shareholders can create valid signatures\n\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ dkg-poc participate --help\n\ndkg-poc-participate 0.1.0\nParticipate in a DKG ceremony\n\nUSAGE:\n    dkg-poc participate [OPTIONS] --leader-address <leader-addr>\n\nFLAGS:\n    -h, --help       Prints help information\n    -V, --version    Prints version information\n\nOPTIONS:\n    -a, --address <addr>                  The address to bind this client to, to participate in the DKG ceremony\n                                          (Default: 127.0.0.1:8081)\n    -e, --enr <enr>                       Provide existing charon ENR for this participant instead of generating a new\n                                          private key to import\n    -l, --leader-address <leader-addr>    The address of the webserver leading the DKG ceremony\n    -p, --password <password>             Password to join the ceremony (Default is to randomly generate a password)\n")))}h.isMDXComponent=!0}}]);