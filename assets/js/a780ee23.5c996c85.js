"use strict";(self.webpackChunkobol_docs=self.webpackChunkobol_docs||[]).push([[6887],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return f}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),d=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=d(e.components);return r.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=d(t),f=a,h=u["".concat(l,".").concat(f)]||u[f]||p[f]||o;return t?r.createElement(h,i(i({ref:n},c),{},{components:t})):r.createElement(h,i({ref:n},c))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=u;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var d=2;d<o;d++)i[d]=t[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},1636:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return p}});var r=t(3117),a=t(102),o=(t(7294),t(3905)),i=["components"],s={description:"A go-based middleware client for taking part in Distributed Validator clusters."},l="Charon CLI reference",d={unversionedId:"dv/charon_cli_reference",id:"version-v0.5.0/dv/charon_cli_reference",title:"Charon CLI reference",description:"A go-based middleware client for taking part in Distributed Validator clusters.",source:"@site/versioned_docs/version-v0.5.0/dv/09_charon_cli_reference.md",sourceDirName:"dv",slug:"/dv/charon_cli_reference",permalink:"/docs/v0.5.0/dv/charon_cli_reference",draft:!1,editUrl:"https://github.com/ObolNetwork/obol-docs/edit/main/versioned_docs/version-v0.5.0/dv/09_charon_cli_reference.md",tags:[],version:"v0.5.0",sidebarPosition:9,frontMatter:{description:"A go-based middleware client for taking part in Distributed Validator clusters."},sidebar:"tutorialSidebar",previous:{title:"Cluster Configuration",permalink:"/docs/v0.5.0/dv/distributed-validator-cluster-manifest"},next:{title:"Distributed Validator Key Generation",permalink:"/docs/v0.5.0/dvk/distributed-validator-keys"}},c={},p=[{value:"Available Commands",id:"available-commands",level:3},{value:"<code>create</code> subcommand",id:"create-subcommand",level:3},{value:"Creating an ENR for charon",id:"creating-an-enr-for-charon",level:4},{value:"Create a full cluster locally",id:"create-a-full-cluster-locally",level:4},{value:"Creating the configuration for a DKG Ceremony",id:"creating-the-configuration-for-a-dkg-ceremony",level:4},{value:"Performing a DKG Ceremony",id:"performing-a-dkg-ceremony",level:3},{value:"Run the Charon middleware",id:"run-the-charon-middleware",level:3}],u={toc:p};function f(e){var n=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"charon-cli-reference"},"Charon CLI reference"),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"The ",(0,o.kt)("inlineCode",{parentName:"p"},"charon")," client is under heavy development, interfaces are subject to change until a first major version is published. ")),(0,o.kt)("p",null,"The following is a reference for charon version ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ObolNetwork/charon/releases/tag/v0.4.0"},(0,o.kt)("inlineCode",{parentName:"a"},"v0.4.0")),". Find the latest release on ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ObolNetwork/charon/releases"},"our Github"),"."),(0,o.kt)("h3",{id:"available-commands"},"Available Commands"),(0,o.kt)("p",null,"The following are the top-level commands available to use. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-markdown"},'charon help\nCharon enables the operation of Ethereum validators in a fault tolerant manner by splitting the validating keys across a group of trusted parties using threshold cryptography.\n\nUsage:\n  charon [command]\n\nAvailable Commands:\n  bootnode       Start a discv5 bootnode server\n  completion     Generate the autocompletion script for the specified shell\n  create         Create artifacts for a distributed validator cluster\n  dkg            Participate in a Distributed Key Generation ceremony\n  enr            Print this client\'s Ethereum Node Record\n  help           Help about any command\n  run            Run the charon middleware client\n  version        Print version and exit\n\nFlags:\n  -h, --help   Help for charon\n\nUse "charon [command] --help" for more information about a command.\n')),(0,o.kt)("h3",{id:"create-subcommand"},(0,o.kt)("inlineCode",{parentName:"h3"},"create")," subcommand"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"create")," subcommand handles the creation of artifacts needed by charon to operate."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-markdown"},'charon create --help\nCreate artifacts for a distributed validator cluster. These commands can be used to facilitate the creation of a distributed validator cluster between a group of operators by performing a distributed key generation ceremony, or they can be used to create a local cluster for single operator use cases.\n\nUsage:\n  charon create [command]\n\nAvailable Commands:\n  cluster     Create private keys and configuration files needed to run a distributed validator cluster locally\n  dkg         Create the configuration for a new Distributed Key Generation ceremony using charon dkg\n  enr         Create an Ethereum Node Record (ENR) private key to identify this charon client\n\nFlags:\n  -h, --help   Help for create\n\nUse "charon create [command] --help" for more information about a command.\n\n')),(0,o.kt)("h4",{id:"creating-an-enr-for-charon"},"Creating an ENR for charon"),(0,o.kt)("p",null,"An ",(0,o.kt)("inlineCode",{parentName:"p"},"enr")," is an Ethereum Node Record. It is used to identify this charon client to its other counterparty charon clients across the internet. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-markdown"},'charon create enr --help\nCreate an Ethereum Node Record (ENR) private key to identify this charon client\n\nUsage:\n  charon create enr [flags]\n\nFlags:\n      --data-dir string                The directory where charon will store all its internal data (default ".charon/data")\n  -h, --help                           Help for enr\n      --p2p-allowlist string           Comma-separated list of CIDR subnets for allowing only certain peer connections. Example: 192.168.0.0/16 would permit connections to peers on your local network only. The default is to accept all connections.\n      --p2p-bootmanifest               Enables using manifest ENRs as discv5 bootnodes. Allows skipping explicit bootnodes if key generation ceremony included correct IPs.\n      --p2p-bootnode-relay             Enables using bootnodes as libp2p circuit relays. Useful if some charon nodes are not have publicly accessible.\n      --p2p-bootnodes strings          Comma-separated list of discv5 bootnode URLs or ENRs. Example: enode://<hex node id>@10.3.58.6:30303?discport=30301.\n      --p2p-denylist string            Comma-separated list of CIDR subnets for disallowing certain peer connections. Example: 192.168.0.0/16 would disallow connections to peers on your local network. The default is to accept all connections.\n      --p2p-external-hostname string   The DNS hostname advertised by libp2p. This may be used to advertise an external DNS.\n      --p2p-external-ip string         The IP address advertised by libp2p. This may be used to advertise an external IP.\n      --p2p-peerdb string              Path to store a discv5 peer database. Empty default results in in-memory database.\n      --p2p-tcp-address strings        Comma-separated list of listening TCP addresses (ip and port) for libP2P traffic. (default [127.0.0.1:16003])\n      --p2p-udp-address string         Listening UDP address (ip and port) for discv5 discovery. (default "127.0.0.1:16004")\n')),(0,o.kt)("h4",{id:"create-a-full-cluster-locally"},"Create a full cluster locally"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"charon create cluster")," creates a set of distributed validators locally, including the private keys, a ",(0,o.kt)("inlineCode",{parentName:"p"},"cluster.lock")," file, and deposit and exit data. However, this command should only be used for solo use of distributed validators. To run a Distributed Validator with a group of operators, it is preferable to create these artifacts using the ",(0,o.kt)("inlineCode",{parentName:"p"},"charon dkg")," command. That way, no single operator custodies all of the private keys to a distributed validator."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-markdown"},'charon create cluster --help\nCreates a local charon cluster configuration including validator keys, charon p2p keys, and a cluster manifest. See flags for supported features.\n\nUsage:\n  charon create cluster [flags]\n\nFlags:\n      --clean                   Delete the cluster directory before generating it.\n      --cluster-dir string      The target folder to create the cluster in. (default ".charon/cluster")\n      --config                  Enables creation of local non-docker config files.\n      --config-binary string    Path of the charon binary to use in the config files. Defaults to this binary if empty. Requires --config.\n      --config-port-start int   Starting port number used in config files. Requires --config. (default 16000)\n      --config-simnet           Configures a simulated network cluster with mock beacon node and mock validator clients. It showcases a running charon in isolation. Requires --config. (default true)\n  -h, --help                    Help for cluster\n  -n, --nodes int               The number of charon nodes in the cluster. (default 4)\n      --split-existing-keys     Enables splitting of existing non-dvt validator keys into distributed threshold private shares (instead of creating new random keys).\n      --split-keys-dir string   Directory containing keys to split. Expects keys in keystore-*.json and passwords in keystore-*.txt. Requires --split-validator-keys.\n  -t, --threshold int           The threshold required for signature reconstruction. Minimum is n-(ceil(n/3)-1). (default 3)\n')),(0,o.kt)("h4",{id:"creating-the-configuration-for-a-dkg-ceremony"},"Creating the configuration for a DKG Ceremony"),(0,o.kt)("p",null,"This ",(0,o.kt)("inlineCode",{parentName:"p"},"charon create dkg")," command creates a cluster_definition file used for the ",(0,o.kt)("inlineCode",{parentName:"p"},"charon dkg")," command. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-markdown"},'charon create dkg --help\nCreate a cluster definition file that will be used by all participants of a DKG.\n\nUsage:\n  charon create dkg [flags]\n\nFlags:\n      --fee_recipient_address string   Optional Ethereum address of the fee recipient\n      --fork_version string            Optional hex fork version identifying the target network/chain\n  -h, --help                           Help for dkg\n      --name string                    Optional cosmetic cluster name\n      --num-validators int             The number of distributed validators the cluster will manage (32ETH staked for each). (default 1)\n      --operator_enrs strings          Comma-separated list of each operator\'s Charon ENR address\n      --output-dir string              The folder to write the output cluster_definition.json file to. (default ".")\n  -t, --threshold int                  The threshold required for signature reconstruction. Minimum is n-(ceil(n/3)-1). (default 3)\n      --withdrawal_address string      Withdrawal Ethereum address\n')),(0,o.kt)("h3",{id:"performing-a-dkg-ceremony"},"Performing a DKG Ceremony"),(0,o.kt)("p",null,"Th ",(0,o.kt)("inlineCode",{parentName:"p"},"charon dkg")," command takes a ",(0,o.kt)("inlineCode",{parentName:"p"},"cluster_definition.json")," file that instructs charon on the terms of a new distributed validator cluster to be created. Charon establishes communication with the other nodes identified in the file, performs a distributed key generation ceremony to create the required threshold private keys, and signs deposit and exit data for each new distributed validator. The command outputs the ",(0,o.kt)("inlineCode",{parentName:"p"},"cluster.lock")," file and key shares for each Distributed Validator created. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-markdown"},'charon dkg --help\nParticipate in a distributed key generation ceremony for a specific cluster definition that creates\ndistributed validator key shares and a final cluster lock configuration. Note that all other cluster operators should run\nthis command at the same time.\n\nUsage:\n  charon dkg [flags]\n\nFlags:\n      --data-dir string                The directory where charon will store all its internal data (default ".charon/data")\n      --definition-file string         The path to the cluster definition file. (default ".charon/cluster_definition.json")\n  -h, --help                           Help for dkg\n      --log-format string              Log format; console, logfmt or json (default "console")\n      --log-level string               Log level; debug, info, warn or error (default "info")\n      --p2p-allowlist string           Comma-separated list of CIDR subnets for allowing only certain peer connections. Example: 192.168.0.0/16 would permit connections to peers on your local network only. The default is to accept all connections.\n      --p2p-bootmanifest               Enables using manifest ENRs as discv5 bootnodes. Allows skipping explicit bootnodes if key generation ceremony included correct IPs.\n      --p2p-bootnode-relay             Enables using bootnodes as libp2p circuit relays. Useful if some charon nodes are not have publicly accessible.\n      --p2p-bootnodes strings          Comma-separated list of discv5 bootnode URLs or ENRs. Example: enode://<hex node id>@10.3.58.6:30303?discport=30301.\n      --p2p-denylist string            Comma-separated list of CIDR subnets for disallowing certain peer connections. Example: 192.168.0.0/16 would disallow connections to peers on your local network. The default is to accept all connections.\n      --p2p-external-hostname string   The DNS hostname advertised by libp2p. This may be used to advertise an external DNS.\n      --p2p-external-ip string         The IP address advertised by libp2p. This may be used to advertise an external IP.\n      --p2p-peerdb string              Path to store a discv5 peer database. Empty default results in in-memory database.\n      --p2p-tcp-address strings        Comma-separated list of listening TCP addresses (ip and port) for libP2P traffic. (default [127.0.0.1:16003])\n      --p2p-udp-address string         Listening UDP address (ip and port) for discv5 discovery. (default "127.0.0.1:16004")\n')),(0,o.kt)("h3",{id:"run-the-charon-middleware"},"Run the Charon middleware"),(0,o.kt)("p",null,"This ",(0,o.kt)("inlineCode",{parentName:"p"},"run")," command accepts a ",(0,o.kt)("inlineCode",{parentName:"p"},"cluster.lock")," file that was created either via a ",(0,o.kt)("inlineCode",{parentName:"p"},"charon create cluster")," command or ",(0,o.kt)("inlineCode",{parentName:"p"},"charon dkg"),". This lock file outlines the nodes in the cluster and the distributed validators they operate on behalf of. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-markdown"},'charon run --help\nStarts the long-running Charon middleware process to perform distributed validator duties.\n\nUsage:\n  charon run [flags]\n\nFlags:\n      --beacon-node-endpoint string    Beacon node endpoint URL (default "http://localhost/")\n      --data-dir string                The directory where charon will store all its internal data (default "./charon/data")\n  -h, --help                           Help for run\n      --jaeger-address string          Listening address for jaeger tracing\n      --jaeger-service string          Service name used for jaeger tracing (default "charon")\n      --log-format string              Log format; console, logfmt or json (default "console")\n      --log-level string               Log level; debug, info, warn or error (default "info")\n      --manifest-file string           The path to the manifest file defining distributed validator cluster (default "./charon/manifest.json")\n      --monitoring-address string      Listening address (ip and port) for the monitoring API (prometheus, pprof) (default "127.0.0.1:16001")\n      --p2p-allowlist string           Comma-separated list of CIDR subnets for allowing only certain peer connections. Example: 192.168.0.0/16 would permit connections to peers on your local network only. The default is to accept all connections.\n      --p2p-bootmanifest               Enables using manifest ENRs as discv5 bootnodes. Allows skipping explicit bootnodes if key generation ceremony included correct IPs.\n      --p2p-bootnode-relay             Enables using bootnodes as libp2p circuit relays. Useful if some charon nodes are not have publicly accessible.\n      --p2p-bootnodes strings          Comma-separated list of discv5 bootnode URLs or ENRs. Example: enode://<hex node id>@10.3.58.6:30303?discport=30301.\n      --p2p-denylist string            Comma-separated list of CIDR subnets for disallowing certain peer connections. Example: 192.168.0.0/16 would disallow connections to peers on your local network. The default is to accept all connections.\n      --p2p-external-hostname string   The DNS hostname advertised by libp2p. This may be used to advertise an external DNS.\n      --p2p-external-ip string         The IP address advertised by libp2p. This may be used to advertise an external IP.\n      --p2p-peerdb string              Path to store a discv5 peer database. Empty default results in in-memory database.\n      --p2p-tcp-address strings        Comma-separated list of listening TCP addresses (ip and port) for libP2P traffic. (default [127.0.0.1:16003])\n      --p2p-udp-address string         Listening UDP address (ip and port) for discv5 discovery. (default "127.0.0.1:16004")\n      --simnet-beacon-mock             Enables an internal mock beacon node for running a simnet.\n      --simnet-validator-mock          Enables an internal mock validator client when running a simnet. Requires simnet-beacon-mock.\n      --validator-api-address string   Listening address (ip and port) for validator-facing traffic proxying the beacon-node API (default "127.0.0.1:16002")\n')))}f.isMDXComponent=!0}}]);