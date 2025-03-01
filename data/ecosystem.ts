import type { Network } from "../src/models/company";

import type { Tag } from "./tag";

export interface Project {
  name: string;
  short_name: string;
  description: string;
  tags: string[];
  logo: string;
  network: Network;
  isLive: boolean;
  isTestnetLive: boolean;
}

export interface ProjectItf extends Project {
  tagsRef: Tag[];
}

export const allProjects: Array<Project> = [
    {
    name: "Verilog Solutions",
    short_name: "Verilog",
    description:
      "Founded by a group of cryptography researchers and smart contract engineers in North America, Verilog Solutions elevates the security standard for Web3 ecosystems by being a full-stack Web3 security firm covering smart contract security, consensus security, and operational security for Web3 projects. Verilog Solutions team works closely with major ecosystems and Web3 projects and applies a quality above quantity approach with a continuous security model. Verilog Solutions onboards the best and most innovative projects and provides the best-in-class advisory service on security needs, including on-chain and off-chain components.",
    tags: ["infrastructure"],
    logo: "verilog.png",
    network: {
      website: "https://www.verilog.solutions/",
      github: "",
      twitter: "https://twitter.com/verilog_audit",
      medium: "",
      discord: "",
      telegram: "",
    },
    isLive: true,
    isTestnetLive: true,
  },
  {
    name: "SithSwap",
    short_name: "SithSwap",
    description:
      "SithSwap is a next-gen AMM on StarkNet featuring stable + volatile swaps, ultra-low fees & slippage, gauged (3,3) rewards & bribes governed by veNFTs",
    tags: ["defi"],
    logo: "sithswap.png",
    network: {
      website: "https://sithswap.com/",
      github: "https://github.com/SithSwap",
      twitter: "https://twitter.com/SithSwap",
      medium: "https://mirror.xyz/sithswap.eth",
      discord: "https://discord.gg/gAD2wuzeNf",
      telegram: "https://t.me/SithWars",
    },
    isLive: false,
    isTestnetLive: false,
  },
  {
    name: "Giza",
    short_name: "giza",
    description:
      "Giza is a Machine Learning platform built on StarkNet focused on fully on-chain model deployment scaling.",
    tags: ["infrastructure"],
    logo: "giza.png",
    network: {
      website: "https://gizatech.xyz/",
      github: "",
      twitter: "https://twitter.com/gizatechxyz",
      medium: "https://mirror.xyz/gizatech.eth",
      discord: "",
      telegram: "",
    },
    isLive: false,
    isTestnetLive: false,
  },
  {
    name: "Chainstack",
    short_name: "chainstack",
    description:
      "Chainstack is a managed node provider for the StarkNet mainnet and testnet.",
    tags: ["infrastructure"],
    logo: "chainstack.png",
    network: {
      website: "https://chainstack.com/build-better-with-starknet/",
      github: "https://github.com/chainstack/",
      twitter: "https://twitter.com/chainstackhq",
      medium: "https://chainstack.com/blog",
      discord: "https://discord.gg/Cymtg2f7pX",
      telegram: "https://t.me/chainstack",
    },
    isLive: false,
    isTestnetLive: false,
  },
  {
    name: "Stark Defi",
    short_name: "StarkDefi",
    description:
      "StarkDefi is a permissionless and trustless hub of comprehensive Defi solutions built to leverage the Decentralized ZK-Rollup on StarkNet's L2 Network over Ethereum. Starting with a highly intuitive Automated Market Maker (AMM), StarkDefi will strategically release other planned defi solutions to cement its position as the ultimate one-stop platform for all defi solutions on StarkNet.",
    tags: ["starkex", "defi"],
    logo: "starkdefi.png",
    network: {
      website: "https://starkdefi.com/",
      github: "https://github.com/Starkdefi",
      twitter: "https://twitter.com/StarkDefi",
      medium: "https://starkdefi.medium.com/",
      discord: "",
      telegram: "https://t.me/starkdefi_ann",
    },
    isLive: false,
    isTestnetLive: false,
  },
  {
    name: "DeversiFi",
    short_name: "DeversiFi",
    description:
      "Our decentralised exchange is the easiest way to access DeFi opportunities on Ethereum: invest, trade, and send tokens without paying gas fees. What’s not to love?",
    tags: ["starkex"],
    logo: "deversifi.png",
    network: {
      website: "https://deversifi.com/",
      github: "",
      twitter: "https://twitter.com/deversifi",
      medium: "",
      discord: "",
      telegram: "",
    },
    isLive: true,
    isTestnetLive: true,
  },
  {
    name: "Sorare",
    short_name: "Sorare",
    description:
      "Show your passion and collect limited edition digital cards on the football NFT platform.",
    tags: ["starkex"],
    logo: "sorare.png",
    network: {
      website: "https://sorare.com/",
      github: "",
      twitter: "https://twitter.com/Sorare",
      medium: "",
      discord: "",
      telegram: "",
    },
    isLive: true,
    isTestnetLive: true,
  },
  {
    name: "dYdX",
    short_name: "dYdX",
    description:
      "Perpetuals, decentralized. Trade Perpetual Contracts with low fees, deep liquidity, and up to 20× more Buying Power.",
    tags: ["starkex"],
    logo: "dydx.svg",
    network: {
      website: "https://dydx.exchange/",
      github: "https://github.com/dydxprotocol",
      twitter: "https://twitter.com/dydx",
      medium: "",
      discord: "https://discord.com/invite/Tuze6tY",
      telegram: "",
    },
    isLive: true,
    isTestnetLive: true,
  },
  {
    name: "Topology",
    short_name: "Topology",
    description:
      "Building Fountain engine, solve2mint framework, svg/html/midi libraries and other infrastructure for onchain gaming, art, and decentralized innovation protocol",
    tags: ["infrastructure"],
    logo: "",
    network: {
      website: "https://www.topology.gg/",
      github: "https://github.com/topology-gg",
      twitter: "https://twitter.com/topology_gg",
      medium: "",
      discord: "",
      telegram: "",
    },
    isLive: false,
    isTestnetLive: true,
  },
  {
    name: "Orbiter Finance",
    short_name: "Oribter",
    description:
      "A decentralized optimistic cross-rollup bridge for transferring the Ethereumnative assets, which is the infrastructure of Layer 2.",
    tags: ["bridge", "infrastructure"],
    logo: "orbiter.svg",
    network: {
      website: "https://www.orbiter.finance/",
      github: "https://github.com/OrbiterCross",
      twitter: "https://twitter.com/Orbiter_Finance",
      medium: "https://orbiter-finance.medium.com/",
      discord: "https://discord.gg/orbiter-finance",
      telegram: "",
    },
    isLive: true,
    isTestnetLive: true,
  },
  {
    name: "Musicvers",
    short_name: "Musicvers",
    description: "Musicvers brings the future of music on Starknet.\n",
    tags: ["nft"],
    logo: "musicvers.png",
    network: {
      website: "https://www.musicvers.com",
      github: "https://www.github.com/Musicvers",
      twitter: "https://twitter.com/Musicvers_",
      medium: "",
      discord: "",
      telegram: "",
    },
    isLive: false,
    isTestnetLive: false,
  },
  {
    name: "Alpha Road",
    short_name: "Alpha Road",
    description:
      "Pioneer in DeFi L2 solution — Alpha Road aim at maximizing user investment returns by providing next gen DeFi experience and bespoke financial products.\n",
    tags: ["defi", "nft"],
    logo: "alpharoad.png",
    network: {
      website: "https://alpharoad.fi",
      github: "",
      twitter: "https://twitter.com/alpharoad_fi",
      medium: "https://alpharoad.medium.com/",
      discord: "https://discord.gg/Bhfa3B2Gnq",
      telegram: "https://t.me/alpharoad_fi",
    },
    isLive: false,
    isTestnetLive: false,
  },
  {
    name: "Banxa",
    short_name: "Banxa",
    description: "Payments",
    tags: ["defi", "payments"],
    logo: "banxa.svg",
    network: {
      website: "https://banxa.com/",
      github: "",
      twitter: "https://twitter.com/BanxaOfficial",
      medium: "",
      discord: "",
      telegram: "",
    },
    isLive: false,
    isTestnetLive: false,
  },
  {
    name: "CurveZero",
    short_name: "CurveZero",
    description:
      "CurveZero is a protocol for Fixed rate USD loans. It does this by solving for the USD term structure i.e. what are rates for 6/12/24 months etc.",
    tags: ["defi", "payments"],
    logo: "",
    network: {
      website:
        "https://docs.google.com/document/d/1rrYC32w63FzzV61rJWqqYomEMgfZ3cRR1jOlJmnnxeY/edit",
      github: "",
      twitter: "",
      medium: "",
      discord: "",
      telegram: "",
    },
    isLive: false,
    isTestnetLive: false,
  },
  {
    name: "FujiDAO",
    short_name: "FujiDAO",
    description: "A cross-chain borrowing aggregator.",
    tags: ["defi"],
    logo: "fujidao.svg",
    network: {
      website: "https://www.fujidao.org/#/",
      github: "https://github.com/Fujicracy/fuji-protocol",
      twitter: "https://twitter.com/FujiFinance",
      medium: "",
      discord: "",
      telegram: "",
    },
    isLive: false,
    isTestnetLive: false,
  },
  {
    name: "JediSwap",
    short_name: "JediSwap",
    description:
      "JediSwap is a fully permissionless and composable AMM on StarkNet. Users can swap assets instantaneously with 0 gas fees while relying on Ethereum security. Anyone can add a pair on Jediswap, and builders can build more advanced applications using JediSwap open sourced contracts",
    tags: ["defi"],
    logo: "jediswap.svg",
    network: {
      website: "https://jediswap.xyz/",
      github: "",
      twitter: "https://twitter.com/jediswap",
      medium: "",
      discord: "",
      telegram: "",
    },
    isLive: false,
    isTestnetLive: true,
  },
  {
    name: "Magnety",
    short_name: "Magnety",
    description:
      "Magnety is an asset management protocol allowing anyone to build, scale and monetize investment strategies using DeFi protocols included in the platform",
    tags: ["defi"],
    logo: "magnety.png",
    network: {
      website: "https://magnety.finance",
      github: "",
      twitter: "https://twitter.com/magnetyfi",
      medium: "https://medium.com/@magnety.finance",
      discord: "http://discord.gg/magnety",
      telegram: "",
    },
    isLive: false,
    isTestnetLive: false,
  },
  {
    name: "StarkGuild",
    short_name: "StarkGuild",
    description:
      "StarkGuild provides you with the best toolbox to build the perfect gaming guild on Starknet. Create your team and manage your assets with your own DAO. \n",
    tags: ["dao", "gamefi", "nft", "tools", "governance"],
    logo: "",
    network: {
      website: "",
      github: "https://github.com/StarkGuild/",
      twitter: "",
      medium: "",
      discord: "",
      telegram: "",
    },
    isLive: false,
    isTestnetLive: true,
  },
  {
    name: "Maker",
    short_name: "Maker",
    description: "Import Maker protocol",
    tags: ["defi"],
    logo: "makerdao.png",
    network: {
      website: "https://makerdao.com/en/",
      github: "https://github.com/makerdao/starknet-dai-bridge",
      twitter: "https://twitter.com/MakerDAO",
      medium: "",
      discord: "",
      telegram: "https://t.me/makerdaoOfficial",
    },
    isLive: false,
    isTestnetLive: false,
  },
  {
    name: "Myswap",
    short_name: "Myswap",
    description: "AMM",
    tags: ["defi"],
    logo: "myswap.png",
    network: {
      website: "https://www.myswap.xyz/#/",
      github: "",
      twitter: "",
      medium: "",
      discord: "",
      telegram: "",
    },
    isLive: false,
    isTestnetLive: true,
  },
  {
    name: "Sandclock",
    short_name: "Sandclock",
    description:
      "Unlocking the programmability of principal and yield with automation.",
    tags: ["defi"],
    logo: "",
    network: {
      website: "https://www.sandclock.org/",
      github: "https://github.com/sandclock-org/proof-of-competence",
      twitter: "",
      medium: "",
      discord: "",
      telegram: "",
    },
    isLive: false,
    isTestnetLive: false,
  },
  {
    name: "Serity",
    short_name: "Serity",
    description:
      "Serity is a PCV-based protocol for the minting and trading of yield-backed synthetic assets.",
    tags: ["defi"],
    logo: "serity.png",
    network: {
      website: "https://serity.finance/",
      github: "https://github.com/Serity-Finance",
      twitter: "https://twitter.com/SerityFinance",
      medium: "",
      discord: "",
      telegram: "",
    },
    isLive: false,
    isTestnetLive: false,
  },
  {
    name: "Suez",
    short_name: "Suez",
    description: "Bridge and DeFi pooling",
    tags: ["defi", "bridge"],
    logo: "",
    network: {
      website: "https://suez.dev/",
      github: "https://github.com/agolajko/suez",
      twitter: "https://twitter.com/SuezBridge",
      medium: "",
      discord: "",
      telegram: "",
    },
    isLive: true,
    isTestnetLive: true,
  },
  {
    name: "StarkSwap",
    short_name: "StarkSwap",
    description:
      "Building the next generation of DeFi on StarkNet. First offering is an AMM, with other DeFi products to follow.",
    tags: ["defi"],
    logo: "starkswap.png",
    network: {
      website: "https://www.starkswap.co/",
      github: "https://github.com/Starkswap",
      twitter: "https://twitter.com/starkswap",
      medium: "",
      discord: "",
      telegram: "",
    },
    isLive: false,
    isTestnetLive: false,
  },
  {
    name: "xBank",
    short_name: "xBank",
    description:
      "xBank is a decentralized non-custodial liquidity market protocol. xBank manages deposits for the lenders and facilitates lending of the deposited asset for the borrowers while performing appropriate risk management to protect the lenders from risks of illiquidity and insolvency.",
    tags: ["defi"],
    logo: "xbank.jpeg",
    network: {
      website: "https://www.xbank.finance/",
      github: "https://github.com/xbank-lab",
      twitter: "https://twitter.com/xBankFinance",
      medium: "",
      discord: "https://discord.com/invite/Ywh9hJg6xv",
      telegram: "",
    },
    isLive: false,
    isTestnetLive: false,
  },
  {
    name: "ZigZag",
    short_name: "ZigZag",
    description: "Order-book based exchange",
    tags: ["defi"],
    logo: "zigzag.png",
    network: {
      website: "https://trade.zigzag.exchange/",
      github: "https://github.com/ZigZagExchange/",
      twitter: "https://twitter.com/ZigZagExchange",
      medium: "",
      discord: "",
      telegram: "",
    },
    isLive: false,
    isTestnetLive: false,
  },
  {
    name: "zkLend",
    short_name: "zkLend",
    description:
      "zkLend is an L2 money-market protocol built on StarkNet, combining zk-rollup scalability, superior transaction speed, and cost-savings with Ethereum’s security. The protocol offers a dual solution: a permissioned and compliance-focused solution for institutional clients, and a permissionless service for DeFi users - all without sacrificing decentralisation.",
    tags: ["defi"],
    logo: "zklend.svg",
    network: {
      website: "https://zklend.com/",
      github: "",
      twitter: "https://twitter.com/zkLend",
      medium: "",
      discord: "",
      telegram: "",
    },
    isLive: false,
    isTestnetLive: false,
  },
  {
    name: "ZkPad",
    short_name: "ZkPad",
    description:
      "Building a secure launchpad to help Starknet-based projects raise funds.",
    tags: ["defi"],
    logo: "zkpad.png",
    network: {
      website: "https://zkpad.io/",
      github: "",
      twitter: "https://twitter.com/ZKPadfi",
      medium: "",
      discord: "https://discord.gg/zkpad",
      telegram: "https://t.me/zkpad",
    },
    isLive: false,
    isTestnetLive: false,
  },
  {
    name: "ZKX",
    short_name: "ZKX",
    description:
      "ZKX is a permissionless protocol for derivatives built on Starknet, with a decentralized order book and a unique way to offer complex financial instruments as swaps.",
    tags: ["defi", "dao"],
    logo: "ZKX.png",
    network: {
      website: "http://zkx.fi/",
      github: "https://github.com/zkxteam",
      twitter: "https://twitter.com/zkxprotocol",
      medium: "https://medium.com/@zkxprotocol",
      discord: "https://discord.gg/7YrNHdwNyu",
      telegram: "https://t.me/zkxcommunity",
    },
    isLive: false,
    isTestnetLive: false,
  },
  {
    name: "Bitmap Box",
    short_name: "Bitmap Box",
    description:
      "Bitmap Box is an on-chain block-building game. Assemble and disassemble your creations, create new games on top of its open protocol.",
    tags: ["nft"],
    logo: "bitmapbox.jpeg",
    network: {
      website: "https://www.bitmapbox.xyz/",
      github: "https://github.com/bitmap-box",
      twitter: "https://twitter.com/bitmapbox",
      medium: "",
      discord: "https://discord.com/invite/EBn3Vu9cu2",
      telegram: "",
    },
    isLive: false,
    isTestnetLive: true,
  },
  {
    name: "Briq",
    short_name: "Briq",
    description:
      "NFT building and composition protocol. Get some briqs and build the dream.",
    tags: ["nft"],
    logo: "briq.png",
    network: {
      website: "https://briq.construction/",
      github: "",
      twitter: "https://twitter.com/briqNFT",
      medium: "",
      discord: "https://discord.com/invite/kpvbDCw5pr",
      telegram: "",
    },
    isLive: false,
    isTestnetLive: true,
  },
  {
    name: "Dope Wars",
    short_name: "Dope Wars",
    description:
      "Modular and extendable game system inspired by calculator game nostalgia.",
    tags: ["nft", "gamefi", "dao"],
    logo: "dopewars.jpeg",
    network: {
      website: "https://dopewars.gg/",
      github: "",
      twitter: "https://twitter.com/TheDopeWars",
      medium: "",
      discord: "https://discord.com/invite/uVxuZjK6Mb",
      telegram: "",
    },
    isLive: false,
    isTestnetLive: true,
  },
  {
    name: "Eykar",
    short_name: "Eykar",
    description:
      "A decentralized game of conquest powered by StarkNet. An almost infinite territory that can be conquered through alliances and wars",
    tags: ["nft", "gamefi"],
    logo: "eykar.png",
    network: {
      website: "https://eykar.org/",
      github: "",
      twitter: "https://twitter.com/AgeOfEykar",
      medium: "",
      discord: "https://discord.com/invite/rpksM5uCk5",
      telegram: "",
    },
    isLive: false,
    isTestnetLive: false,
  },
  {
    name: "GoL2",
    short_name: "GoL2",
    description:
      "Conway's Game of Life on StarkNet! Come and progress to a new generation, or create your own life.",
    tags: ["gamefi"],
    logo: "",
    network: {
      website: "https://github.com/perama-v/GoL2",
      github: "",
      twitter: "",
      medium: "",
      discord: "",
      telegram: "",
    },
    isLive: false,
    isTestnetLive: false,
  },
  {
    name: "IBetYou",
    short_name: "IBetYou",
    description:
      "IBY is a permissionless blockchain protocol that allows you to bet any amount of tokens with anyone on anything. It uses the basic principles of betting and kicks it up a notch with crypto wizardry.",
    tags: ["gamefi"],
    logo: "ibetyou.svg",
    network: {
      website: "https://starknet.ibetyou.xyz/",
      github: "",
      twitter: "https://twitter.com/shard_labs",
      medium: "",
      discord: "",
      telegram: "",
    },
    isLive: false,
    isTestnetLive: true,
  },
  {
    name: "ImmutableX",
    short_name: "ImmutableX",
    description:
      "Immutable X is a decentralized liquidity layer for NFTs on StarkNet.",
    tags: ["starkex"],
    logo: "immutablex.png",
    network: {
      website: "https://www.immutable.com/",
      github: "",
      twitter: "https://twitter.com/Immutable",
      medium: "",
      discord: "https://discord.com/invite/6GjgPkp464",
      telegram: "",
    },
    isLive: true,
    isTestnetLive: true,
  },
  {
    name: "Influence",
    short_name: "Influence",
    description:
      "Influence is a crypto-native space strategy game set in a realistic asteroid belt with real-time orbital dynamics.",
    tags: ["gamefi", "nft"],
    logo: "influence.svg",
    network: {
      website: "https://www.influenceth.io/",
      github: "",
      twitter: "https://twitter.com/influenceth",
      medium: "",
      discord: "https://discord.com/invite/6GjgPkp464",
      telegram: "",
    },
    isLive: false,
    isTestnetLive: true,
  },
  {
    name: "Kubri",
    short_name: "Kubri",
    description: "L2 -> L1 Bridge for the ERC1155",
    tags: ["bridge", "defi"],
    logo: "",
    network: {
      website: "https://kubribridge.vercel.app/",
      github: "",
      twitter: "",
      medium: "",
      discord: "",
      telegram: "",
    },
    isLive: false,
    isTestnetLive: true,
  },
  {
    name: "Loot Realms",
    short_name: "Loot Realms",
    description:
      "open source MMOCCG (Massively Multiplayer On-Chain Composable Game) of economics and Chivalry",
    tags: ["gamefi", "nft"],
    logo: "loot.jpeg",
    network: {
      website: "https://bibliothecadao.xyz/",
      github: "",
      twitter: "https://twitter.com/LootRealms",
      medium: "",
      discord: "https://discord.com/invite/HvqzqE3Mfu",
      telegram: "",
    },
    isLive: true,
    isTestnetLive: true,
  },
  {
    name: "Mint Square",
    short_name: "Mint Square",
    description: "NFT Platform on Ethereum Layer 2 ZK Rollup",
    tags: ["nft"],
    logo: "mintsquare.png",
    network: {
      website: "https://mintsquare.io/",
      github: "",
      twitter: "https://twitter.com/MintSquareNFT",
      medium: "",
      discord: "discord.gg/EDm8vm4MgY",
      telegram: "",
    },
    isLive: false,
    isTestnetLive: true,
  },
  {
    name: "The Ninth",
    short_name: "The Ninth",
    description:
      "The Ninth is a metaverse world built with Starkware technology. The world is truly owned by users, and land owners can generate various in-game elements and have various gameplay. Various elements such as multi-epoch iterations, trading markets, DAOs, game guilds, and virtual buildings constitute this metaverse with a grand worldview",
    tags: ["gamefi"],
    logo: "theninth.png",
    network: {
      website: "https://ninth.gg/",
      github: "",
      twitter: "https://twitter.com/ninth_gg",
      medium: "",
      discord: "https://discord.com/invite/8aehWQPFyE",
      telegram: "",
    },
    isLive: true,
    isTestnetLive: true,
  },
  {
    name: "Phi",
    short_name: "Phi",
    description:
      "Phi（Φ） is a decentralized metaverse on Starknet, with lands generated from ENS and buildings from On-Chain Activity Data.",
    tags: ["gamefi"],
    logo: "phi.jpeg",
    network: {
      website:
        "https://phi-xyz.notion.site/phi-xyz/532af6de66e64c7c883d552d301b8020",
      github: "",
      twitter: "https://twitter.com/phi_xyz",
      medium: "",
      discord: "",
      telegram: "",
    },
    isLive: false,
    isTestnetLive: false,
  },
  {
    name: "Aspect",
    short_name: "aspect",
    description:
      "Aspect is an NFT marketplace powered by StarkNet, a ZK rollup L2 on ETH. Buy, Sell, and Create in the meta economy.",
    tags: ["nft"],
    logo: "aspect.png",
    network: {
      website: "https://testnet.aspect.co/",
      github: "https://github.com/playoasis",
      twitter: "https://twitter.com/aspectdotco",
      medium: "",
      discord: "https://discord.com/invite/aR2U7KtbgD",
      telegram: "https://t.me/aspectco",
    },
    isLive: false,
    isTestnetLive: true,
  },
  {
    name: "StarkNet Fractals",
    short_name: "StarkNet Fractals",
    description:
      "Generating the Mandelbrot Set on Starknet and storing the data to required to reconstruct the plot on-chain. Was created as a proof of concept for leveraging L2s to create fully on chain NFTs.",
    tags: ["nft"],
    logo: "",
    network: {
      website: "",
      github: "https://github.com/Orland0x/StarknetFractals",
      twitter: "",
      medium: "",
      discord: "",
      telegram: "",
    },
    isLive: false,
    isTestnetLive: false,
  },
  {
    name: "Snapshot X",
    short_name: "Snapshot X",
    description: "Decentralized Trusted voting",
    tags: ["dao", "governance"],
    logo: "snapshotx.jpeg",
    network: {
      website: "https://snapshot.org/#/",
      github: "",
      twitter: "https://twitter.com/SnapshotLabs",
      medium: "",
      discord: "https://discord.gg/snapshot",
      telegram: "",
    },
    isLive: false,
    isTestnetLive: true,
  },
  {
    name: "Storage Proofs",
    short_name: "Storage Proofs",
    description: "Verifying Storage Proofs from Ethereum",
    tags: ["infrastructure"],
    logo: "",
    network: {
      website: "",
      github:
        "https://github.com/OilerNetwork/fossil/tree/master/contracts/starknet",
      twitter: "",
      medium: "",
      discord: "",
      telegram: "",
    },
    isLive: false,
    isTestnetLive: false,
  },
  {
    name: "Yagi Finance",
    short_name: "Yagi Finance",
    description:
      "Yagi is a network of keepers on StarkNet L2 that automate protocol actions.",
    tags: ["infrastructure", "defi"],
    logo: "yagi.svg",
    network: {
      website: "https://yagi.fi/",
      github:
        "https://github.com/OilerNetwork/fossil/tree/master/contracts/starknet",
      twitter: "https://twitter.com/yagi_fi",
      medium: "",
      discord: "",
      telegram: "",
    },
    isLive: false,
    isTestnetLive: true,
  },
  {
    name: "Zorro",
    short_name: "Zorro",
    description:
      "Proof of personhood protocol for democratic DAO voting, quadratic funding, etc. Runs on the Ethereum L2 StarkNet.",
    tags: ["dao", "governance"],
    logo: "zorro.svg",
    network: {
      website: "https://zorro.xyz/",
      github: "",
      twitter: "https://twitter.com/ZorroProtocol",
      medium: "",
      discord: "",
      telegram: "",
    },
    isLive: false,
    isTestnetLive: false,
  },
  {
    name: "Argent X",
    short_name: "Argent X",
    description: "StarkNet wallet to interact with tokens and dApps",
    tags: ["wallet"],
    logo: "argent-x.svg",
    network: {
      website: "https://www.argent.xyz/argent-x/",
      github: "https://github.com/argentlabs/argent-x",
      twitter: "https://twitter.com/argentHQ",
      medium: "",
      discord: "",
      telegram: "",
    },
    isLive: true,
    isTestnetLive: true,
  },
  {
    name: "Braavos",
    short_name: "Braavos",
    description: "All in one assets management - DeFi and NFTs",
    tags: ["wallet", "defi", "nft"],
    logo: "braavos.svg",
    network: {
      website: "https://braavos.app/",
      github: "https://github.com/myBraavos",
      twitter: "https://twitter.com/myBraavos",
      medium: "",
      discord: "https://discord.gg/ZrtCHK3t",
      telegram: "",
    },
    isLive: true,
    isTestnetLive: true,
  },
  {
    name: "Hardhat Plugin",
    short_name: "Hardhat Plugin",
    description: "Hardhat Plugin",
    tags: ["tools"],
    logo: "",
    network: {
      website: "",
      github: "https://github.com/Shard-Labs/starknet-hardhat-plugin",
      twitter: "https://twitter.com/shard_labs",
      medium: "",
      discord: "",
      telegram: "",
    },
    isLive: true,
    isTestnetLive: true,
  },
  {
    name: "hardhat-starknet-compile",
    short_name: "hardhat-starknet-compile",
    description:
      "Hardhat Plugin for intelligently compiling StarkNet contracts in a Hardhat project.",
    tags: ["tools"],
    logo: "hardhat-starknet-compile.png",
    network: {
      website: "",
      github: "https://github.com/playmint/hardhat-starknet-compile",
      twitter: "https://twitter.com/playmint",
      medium: "",
      discord: "",
      telegram: "",
    },
    isLive: true,
    isTestnetLive: true,
  },
  {
    name: "hardhat-starknetjs",
    short_name: "hardhat-starknetjs",
    description: "Hardhat Plugin integrating StarkNet.js.",
    tags: ["tools"],
    logo: "hardhat-starknetjs.png",
    network: {
      website: "",
      github: "https://github.com/playmint/hardhat-starknetjs",
      twitter: "https://twitter.com/playmint",
      medium: "",
      discord: "",
      telegram: "",
    },
    isLive: true,
    isTestnetLive: true,
  },
  {
    name: "Zem",
    short_name: "zem",
    description: "Deployment system for Hardhat supporting EVM and StarkNet contracts.",
    tags: ["tools"],
    logo: "zem.png",
    network: {
      website: "",
      github: "https://github.com/anders-torbjornsen/zem",
      twitter: "https://twitter.com/0x80_eth",
      medium: "",
      discord: "",
      telegram: "",
    },
    isLive: true,
    isTestnetLive: true,
  },
  {
    name: "Nile",
    short_name: "Nile",
    description: "CLI tool to develop StarkNet projects written in Cairo",
    tags: ["tools"],
    logo: "",
    network: {
      website: "",
      github: "https://github.com/OpenZeppelin/nile",
      twitter: "",
      medium: "",
      discord: "",
      telegram: "",
    },
    isLive: true,
    isTestnetLive: true,
  },
  {
    name: "Starknet Devnet",
    short_name: "Starknet Devnet",
    description:
      "A Flask wrapper of Starknet state. Similar in purpose to Ganache. Aims to mimic Starknet's Alpha testnet, but with simplified functionality.",
    tags: ["tools"],
    logo: "",
    network: {
      website: "",
      github: "https://github.com/Shard-Labs/starknet-devnet",
      twitter: "https://twitter.com/shard_labs",
      medium: "",
      discord: "",
      telegram: "",
    },
    isLive: true,
    isTestnetLive: true,
  },
  {
    name: "StarkNet.js",
    short_name: "StarkNet.js",
    description: "Javascript library for StarkNet",
    tags: ["tools"],
    logo: "",
    network: {
      website: "https://www.starknetjs.com/",
      github: "https://github.com/0xs34n/starknet.js",
      twitter: "",
      medium: "",
      discord: "",
      telegram: "",
    },
    isLive: true,
    isTestnetLive: true,
  },
  {
    name: "StarkNet React",
    short_name: "StarkNet React",
    description: "A collection of React hooks for StarkNet",
    tags: ["tools"],
    logo: "",
    network: {
      website: "https://github.com/auclantis/starknet-react/",
      github: "https://github.com/auclantis/starknet-react/",
      twitter: "",
      medium: "",
      discord: "",
      telegram: "",
    },
    isLive: true,
    isTestnetLive: true,
  },
  {
    name: "StarkNet.py",
    short_name: "StarkNet.py",
    description: "Python SDK for StarkNet",
    tags: ["tools"],
    logo: "",
    network: {
      website: "https://starknetpy.readthedocs.io/en/latest/",
      github: "https://github.com/software-mansion/starknet.py",
      twitter: "",
      medium: "",
      discord: "",
      telegram: "",
    },
    isLive: true,
    isTestnetLive: true,
  },
  {
    name: "StarkNet.php",
    short_name: "StarkNet.php",
    description: "A PHP package for interacting with StarkNet",
    tags: ["tools"],
    logo: "",
    network: {
      website: "",
      github: "https://github.com/Starknet-php/starknet.php",
      twitter: "",
      medium: "",
      discord: "",
      telegram: "",
    },
    isLive: true,
    isTestnetLive: true,
  },
  {
    name: "StarkNet-rs",
    short_name: "StarkNet-rs",
    description: "StarkNet client library in Rust",
    tags: ["tools"],
    logo: "starknet-rs.png",
    network: {
      website: "https://crates.io/crates/starknet",
      github: "https://github.com/xJonathanLEI/starknet-rs",
      twitter: "",
      medium: "",
      discord: "",
      telegram: "",
    },
    isLive: true,
    isTestnetLive: true,
  },
  {
    name: "Warp",
    short_name: "Warp",
    description: "Warp is a Solidity to Cairo transpiler.",
    tags: ["tools"],
    logo: "",
    network: {
      website: "https://github.com/NethermindEth/warp",
      github: "https://github.com/NethermindEth/warp",
      twitter: "",
      medium: "",
      discord: "",
      telegram: "",
    },
    isLive: true,
    isTestnetLive: true,
  },
  {
    name: "Pathfinder",
    short_name: "Pathfinder",
    description: "Starknet full state node written in Rust",
    tags: ["tools", "infrastructure"],
    logo: "",
    network: {
      website: "",
      github: "https://github.com/eqlabs/pathfinder",
      twitter: "https://twitter.com/equilibrium_co",
      medium: "",
      discord: "",
      telegram: "",
    },
    isLive: true,
    isTestnetLive: true,
  },
  {
    name: "Multisig",
    short_name: "Multisig",
    description: "Multi-signature functionality for Starknet",
    tags: ["infrastructure", "governance"],
    logo: "",
    network: {
      website: "",
      github: "https://github.com/eqlabs/starknet-multisig",
      twitter: "https://twitter.com/equilibrium_co",
      medium: "",
      discord: "",
      telegram: "",
    },
    isLive: false,
    isTestnetLive: false,
  },
  {
    name: "StarkTx",
    short_name: "StarkTx",
    description: "StarkNet transactions analysis tool",
    tags: ["tools"],
    logo: "",
    network: {
      website: "https://starktx.info/",
      github: "",
      twitter: "",
      medium: "",
      discord: "",
      telegram: "",
    },
    isLive: true,
    isTestnetLive: true,
  },
  {
    name: "Voyager",
    short_name: "Voyager",
    description:
      "Voyager is a block explorer for StarkNet ecosystem, providing all the capabilities needed in navigating through this ecosystem. It includes not only read-only data but also supports interaction with Starknet contracts.",
    tags: ["tools"],
    logo: "voyager.svg",
    network: {
      website: "https://voyager.online/",
      github: "",
      twitter: "https://twitter.com/nethermindeth",
      medium: "",
      discord:
        "https://discord.com/channels/793094838509764618/912410047236149298",
      telegram: "",
    },
    isLive: true,
    isTestnetLive: true,
  },
  {
    name: "Venus investment protocol",
    short_name: "vip",
    description:
      "vip is an automatic investment tool of StarkNet ecosystem, providing decentralized automatic swap token plan for most non professional financial users, .ie. you want to buy eth token via usdt periodically， you can schedule a plan for it then unattended execution!",
    tags: ["defi"],
    logo: "vip.png",
    network: {
      website: "http://www.venus.town/",
      github: "https://github.com/VenusOrg",
      twitter: "https://twitter.com/ProtocolVenus",
      medium: "",
      discord:
        "https://discord.com/channels/892753619424796724/929023725293174855",
      telegram: "",
    },
    isLive: false,
    isTestnetLive: false,
  },
  {
    name: "Stork Oracle Network",
    short_name: "Stork",
    description:
      "Stork is an oracle network for StarkEx and StarkNet, optimized for DeFi and providing low latency off-chain price quotes from trusted sources.",
    tags: ["defi"],
    logo: "stork.png",
    network: {
      website: "https://stork.network",
      github: "",
      twitter: "",
      medium: "https://medium.com/@stork-oracle",
      discord: "",
      telegram: "",
    },
    isLive: false,
    isTestnetLive: false,
  },
  {
    name: "Redline",
    short_name: "Redline",
    description:
      "Giant robot NFT racing and engineering on StarkNet and UE5.Deep Strategy and Drama Game.",
    tags: ["gamefi"],
    logo: "redline.jpeg",
    network: {
      website: "http://redline.game/",
      github: "",
      twitter: "https://twitter.com/PlayRedline",
      medium: "",
      discord: "https://discord.com/invite/UKmSwPrKjw",
      telegram: "",
    },
    isLive: false,
    isTestnetLive: false,
  },
  {
    name: "ZKStarter",
    short_name: "ZKStarter",
    description:
      "Decentralized Launchpad shaping the future for projects on StarkNet.",
    tags: ["defi"],
    logo: "zkstarter.jpg",
    network: {
      website: "http://www.zkstarter.io/",
      github: "",
      twitter: "https://twitter.com/zkstarter",
      medium: "",
      discord: "",
      telegram: "http://t.me/zkstarter",
    },
    isLive: false,
    isTestnetLive: false,
  },
  {
    name: "Starcombo",
    short_name: "Starcombo",
    description:
      "Starcombo is a tool allowing users to build their DeFi strategy on Starknet simply by drag&drop.",
    tags: ["defi"],
    logo: "starcombo.jpg",
    network: {
      website: "https://testnet.starcombo.xyz/",
      github: "",
      twitter: "https://twitter.com/Starcombo_xyz",
      medium: "",
      discord: "https://discord.com/invite/uVCkRDUV",
      telegram: "",
    },
    isLive: false,
    isTestnetLive: true,
  },
  {
    name: "Arcticium",
    short_name: "Arcticium",
    description:
      "We are building ecosystem and community for NFTs on StarkNet by StarkWareLtd.",
    tags: ["nft"],
    logo: "arcticium.jpg",
    network: {
      website: "http://arcticium.com/",
      github: "",
      twitter: "https://twitter.com/arcticiumm",
      medium: "",
      discord: "",
      telegram: "",
    },
    isLive: false,
    isTestnetLive: false,
  },
  {
    name: "MetaMaterial",
    short_name: "MetaMaterial",
    description:
      "The first protocol for resource sharing across all blockchain games.",
    tags: ["nft"],
    logo: "metamaterial.webp",
    network: {
      website: "https://goerli.metamaterial.app/",
      github: "",
      twitter: "https://twitter.com/material_meta",
      medium:
        "https://mirror.xyz/starknet-metamaterial.eth/G8TLixABSyEL_tZ40iS4hAsOy_fxHdDA-Bw6x1aYCbs",
      discord: "",
      telegram: "",
    },
    isLive: false,
    isTestnetLive: true,
  },
  {
    name: "ZKasino",
    short_name: "zKasino",
    description:
      "zKasino is a decentralized casino built on Layer 2 ZK-Rollups technology.",
    tags: ["gamefi"],
    logo: "zkasino.png",
    network: {
      website: "https://zkasino.io/",
      github: "",
      twitter: "https://twitter.com/ZKasino_io",
      medium: "https://zkasino.medium.com/",
      discord: "https://discord.com/invite/zkasino",
      telegram: "",
    },
    isLive: false,
    isTestnetLive: false,
  },
  {
    name: "Almanac NFT",
    short_name: "almanac",
    description:
      "AlmanacNFT is a collection of 10.000 customizable unique days in crypto markets.",
    tags: ["nft"],
    logo: "almanac.png",
    network: {
      website: "https://almanacNFT.xyz/",
      github: "",
      twitter: "https://twitter.com/almanacNFT",
      medium: "",
      discord: "",
      telegram: "",
    },
    isLive: false,
    isTestnetLive: true,
  },
];
