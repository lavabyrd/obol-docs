"use strict";(self.webpackChunkobol_docs=self.webpackChunkobol_docs||[]).push([[622],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),u=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(a),h=n,m=p["".concat(s,".").concat(h)]||p[h]||d[h]||o;return a?r.createElement(m,i(i({ref:t},c),{},{components:a})):r.createElement(m,i({ref:t},c))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:n,i[1]=l;for(var u=2;u<o;u++)i[u]=a[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},99456:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var r=a(87462),n=(a(67294),a(3905));const o={sidebar_position:2,description:"Run all nodes in a distributed validator cluster"},i="Run a cluster alone",l={unversionedId:"int/quickstart/quickstart-alone",id:"int/quickstart/quickstart-alone",title:"Run a cluster alone",description:"Run all nodes in a distributed validator cluster",source:"@site/docs/int/quickstart/quickstart-alone.md",sourceDirName:"int/quickstart",slug:"/int/quickstart/quickstart-alone",permalink:"/docs/next/int/quickstart/quickstart-alone",draft:!1,editUrl:"https://github.com/ObolNetwork/obol-docs/edit/main/docs/int/quickstart/quickstart-alone.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,description:"Run all nodes in a distributed validator cluster"},sidebar:"tutorialSidebar",previous:{title:"Operator Journey",permalink:"/docs/next/int/quickstart/group/quickstart-group-operator"},next:{title:"Run a cluster with MEV-Boost",permalink:"/docs/next/int/quickstart/quickstart-builder-api"}},s={},u=[{value:"Pre-requisites",id:"pre-requisites",level:2},{value:"Step 1. Download the components and set up the environment",id:"step-1-download-the-components-and-set-up-the-environment",level:2},{value:"Step 2. Create the artifacts needed to run a DV cluster",id:"step-2-create-the-artifacts-needed-to-run-a-dv-cluster",level:2},{value:"Distributed Validator Cluster",id:"distributed-validator-cluster",level:3},{value:"Step 3. Start the cluster",id:"step-3-start-the-cluster",level:2},{value:"Step 4. Activate the validator",id:"step-4-activate-the-validator",level:2},{value:"Step 5. Validator Voluntary Exit",id:"step-5-validator-voluntary-exit",level:2},{value:"Run Prysm VCs in a DV Cluster",id:"run-prysm-vcs-in-a-dv-cluster",level:2},{value:"Feedback",id:"feedback",level:2}],c={toc:u};function p(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"run-a-cluster-alone"},"Run a cluster alone"),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"Charon is in an early alpha state and is not ready to be run on mainnet")),(0,n.kt)("h2",{id:"pre-requisites"},"Pre-requisites"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Ensure you have ",(0,n.kt)("a",{parentName:"li",href:"https://docs.docker.com/engine/install/"},"docker")," installed."),(0,n.kt)("li",{parentName:"ul"},"Ensure you have ",(0,n.kt)("a",{parentName:"li",href:"https://git-scm.com/downloads"},"git")," installed. "),(0,n.kt)("li",{parentName:"ul"},"Make sure ",(0,n.kt)("inlineCode",{parentName:"li"},"docker")," is running before executing the commands below.")),(0,n.kt)("h2",{id:"step-1-download-the-components-and-set-up-the-environment"},"Step 1. Download the components and set up the environment"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Clone the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/ObolNetwork/charon-distributed-validator-cluster"},"charon-distributed-validator-cluster")," repo and ",(0,n.kt)("inlineCode",{parentName:"p"},"cd")," into the directory."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"# Clone the repo\ngit clone https://github.com/ObolNetwork/charon-distributed-validator-cluster.git\n\n# Change directory\ncd charon-distributed-validator-cluster/\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Prepare the environment variables"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"# Copy the sample environment variables\ncp .env.sample .env\n")),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},".env.sample")," is a sample environment file that allows overriding default configuration defined in ",(0,n.kt)("inlineCode",{parentName:"p"},"docker-compose.yml"),". Uncomment and set any variable to override its value."))),(0,n.kt)("h2",{id:"step-2-create-the-artifacts-needed-to-run-a-dv-cluster"},"Step 2. Create the artifacts needed to run a DV cluster"),(0,n.kt)("p",null,"Run the following command:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},'# Enter required validator addresses\nWITHDRAWAL_ADDR=<ENTER YOUR WITHDRAWAL ADDRESS HERE>\nFEE_RECIPIENT_ADDR=<ENTER YOUR FEE RECIPIENT ADDRESS HERE>\n\n# Create a distributed validator cluster\ndocker run --rm -v "$(pwd):/opt/charon" obolnetwork/charon:v0.14.0 create cluster --name="mycluster" --withdrawal-addresses="${WITHDRAWAL_ADDR}" --fee-recipient-addresses="${FEE_RECIPIENT_ADDR}" --nodes 6 --threshold 5\n')),(0,n.kt)("p",null,"This command will create a subdirectory ",(0,n.kt)("inlineCode",{parentName:"p"},".charon/cluster"),". In it are six folders, one for each charon node created. Each folder contains partial private keys that together make up the distributed validator described in ",(0,n.kt)("inlineCode",{parentName:"p"},".charon/cluster/cluster-lock.json"),". Note\nthat charon versions prior to ",(0,n.kt)("inlineCode",{parentName:"p"},"v0.14.0")," had a single ",(0,n.kt)("inlineCode",{parentName:"p"},"--withdrawal-address")," flag which was changed to the ",(0,n.kt)("inlineCode",{parentName:"p"},"--withdrawal-addresses")," flag in the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/ObolNetwork/charon/releases/tag/v0.14.0"},"v0.14.0 release"),"."),(0,n.kt)("p",null,"This guide will launch all six charon clients in separate containers along with an execution client and consensus client. To distribute your cluster physically, copy each directory with one (or several) private keys within it to the other machines you want to use. Consider using the single node ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/ObolNetwork/charon-distributed-validator-node"},"docker compose"),", the kubernetes ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/ObolNetwork/charon-k8s-distributed-validator-node"},"manifests"),", or the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/ObolNetwork/helm-charts"},"helm chart")," example repos to get your nodes up and connected."),(0,n.kt)("h3",{id:"distributed-validator-cluster"},"Distributed Validator Cluster"),(0,n.kt)("p",null,"The default cluster consists of:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/NethermindEth/nethermind"},"Nethermind"),", an execution layer client"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/sigp/lighthouse"},"Lighthouse"),", a consensus layer client"),(0,n.kt)("li",{parentName:"ul"},"Six ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/ObolNetwork/charon"},"charon")," nodes"),(0,n.kt)("li",{parentName:"ul"},"Mixture of validator clients:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"vc0: ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/sigp/lighthouse"},"Lighthouse")),(0,n.kt)("li",{parentName:"ul"},"vc1: ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/ConsenSys/teku"},"Teku")),(0,n.kt)("li",{parentName:"ul"},"vc2: ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/status-im/nimbus-eth2"},"Nimbus")),(0,n.kt)("li",{parentName:"ul"},"vc3: ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/sigp/lighthouse"},"Lighthouse")),(0,n.kt)("li",{parentName:"ul"},"vc4: ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/ConsenSys/teku"},"Teku")),(0,n.kt)("li",{parentName:"ul"},"vc5: ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/status-im/nimbus-eth2"},"Nimbus"))))),(0,n.kt)("p",null,"The intention is to support all validator clients. Read more about our client support ",(0,n.kt)("a",{parentName:"p",href:"https://dvt.obol.tech"},"here"),"."),(0,n.kt)("h2",{id:"step-3-start-the-cluster"},"Step 3. Start the cluster"),(0,n.kt)("p",null,"Run this command from each machine containing private keys to start your cluster containers"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"# Start the distributed validator cluster\ndocker compose up --build\n")),(0,n.kt)("p",null,"Check the monitoring dashboard and see if things look all right"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"# Open Grafana\nopen http://localhost:3000/d/laEp8vupp\n")),(0,n.kt)("h2",{id:"step-4-activate-the-validator"},"Step 4. Activate the validator"),(0,n.kt)("p",null,"If all the above went correctly, it's natural to see logs like:"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},'INFO sched      No active DVs for slot {"slot": 3288627}')),(0,n.kt)("p",null,"This is because you need to activate your freshly created distributed validator on the testnet with the ",(0,n.kt)("a",{parentName:"p",href:"https://goerli.launchpad.ethereum.org/en/"},"existing launchpad"),". The validator deposit data should be in ",(0,n.kt)("inlineCode",{parentName:"p"},".charon/cluster/deposit-data.json"),"."),(0,n.kt)("p",null,"This process can take a minimum of 16 hours, with the maximum time to activation being dictated by the length of the activation queue, which can be weeks. You can leave your distributed validator cluster offline until closer to the activation period if you would prefer. You can also use this time to improve and harden your monitoring and alerting for the cluster."),(0,n.kt)("h2",{id:"step-5-validator-voluntary-exit"},"Step 5. Validator Voluntary Exit"),(0,n.kt)("p",null,"Exiting your validator(s) can be useful in situations where you want to stop staking and withdraw your staked ETH."),(0,n.kt)("p",null,"\ud83d\udc49 Follow the exit guide ",(0,n.kt)("a",{parentName:"p",href:"/docs/next/int/quickstart/quickstart-exit"},"here")),(0,n.kt)("h2",{id:"run-prysm-vcs-in-a-dv-cluster"},"Run Prysm VCs in a DV Cluster"),(0,n.kt)("p",null,"We have provided experimental support of prysm validator client through ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/ObolNetwork/charon-distributed-validator-cluster/blob/main/compose-prysm.yml"},"compose-prysm.yml"),"\nwhich needs a prysm beacon node to work alongside a REST based beacon node. Here are the steps to test prysm in a DV Cluster:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Run the following command:",(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"cp docker-compose.override.yml.sample docker-compose.override.yml\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Disable")," the VCs in ",(0,n.kt)("inlineCode",{parentName:"li"},"docker-compose.override.yml")," that are to be replaced by corresponding prysm VCs by un-commenting profiles field\n(",(0,n.kt)("a",{parentName:"li",href:"https://docs.docker.com/compose/profiles/"},"more details on profiles"),"). Also disable the prysm VCs that are not required in the cluster in ",(0,n.kt)("inlineCode",{parentName:"li"},"docker-compose.override.yml"),"."),(0,n.kt)("li",{parentName:"ol"},"Run the following command:",(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"docker compose -f docker-compose.yml -f compose-prysm.yml -f docker-compose.override.yml up --build\n")))),(0,n.kt)("p",null,"Note: Support for prysm validator clients is in an experimental phase as prysm doesn't provide ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/prysmaticlabs/prysm/issues/11580"},"complete support"),"\nfor running their validator client on a beacon node REST API. "),(0,n.kt)("h2",{id:"feedback"},"Feedback"),(0,n.kt)("p",null,"If you have gotten this far through the process, and whether you succeeded or failed at running the distributed validator successfully, we would like to hear\nyour feedback on the process and where you encountered difficulties. Please let us know by joining and posting on our ",(0,n.kt)("a",{parentName:"p",href:"https://discord.gg/n6ebKsX46w"},"Discord"),".\nAlso, feel free to add issues to our ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/ObolNetwork"},"GitHub repos"),"."))}p.isMDXComponent=!0}}]);