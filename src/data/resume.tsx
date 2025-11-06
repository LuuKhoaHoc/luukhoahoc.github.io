import { BriefcaseIcon, HomeIcon, NotebookIcon } from "lucide-react";

import { Icons } from "@/components/Icons";

export const DATA = {
  name: "Luu Khoa Hoc",
  englishName: "Leo",
  initials: "KhoaHoc",
  url: "https://luukhoahoc.me",
  location: "Can Giuoc, Viet Nam",
  locationLink:
    "https://www.google.com/maps/place/Cần+Giuộc,+Long+An,+Việt+Nam/",
  description:
    "Software developer with frontend-focused experience building scalable, testable web experiences with Next.js and TypeScript.",
  summary:
    "Software Developer with 1.5 years of frontend-focused experience in React/Next.js, TypeScript, and TailwindCSS. Adept at starting and launching new projects end-to-end, delivering scalable features, collaborating with backend and cross-functional teams; familiar with DeFi/Fintech and Web3 integrations (wagmi/@web3-react).",
  avatarUrl: "/me.png",
  avatarLightUrl: "/me-light.png",
  skills: [
    "Next.js",
    "React",
    "TypeScript",
    "JavaScript (ES6+)",
    "Motion",
    "HTML5",
    "CSS3",
    "TailwindCSS",
    "Sass/SCSS",
    "TanStack Query",
    "Zustand",
    "Redux Toolkit",
    "RESTful APIs",
    "@web3-react",
    "Wagmi",
    "GraphQL",
    "Jest",
    "React Testing Library",
    "Docker",
    "Git",
    "GitHub Actions",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/work/", icon: BriefcaseIcon, label: "Work" },
    // { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "luukhoahoc.work@gmail.com",
    tel: "+84 778 978 382",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/LuuKhoaHoc",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/luukhoahoc",
        icon: Icons.linkedin,
        navbar: true,
      },
      // X: {
      //   name: "X",
      //   url: "https://x.com/luukhoahoc",
      //   icon: Icons.x,
      //   navbar: true,
      // },
      email: {
        name: "Send Email",
        url: "mailto:luukhoahoc.work@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
    },
  },
  work: [
    {
      company: "GreenSoftware Asia",
      href: "https://greensoftware.asia",
      badges: [],
      location: "Ho Chi Minh City, Viet Nam",
      title: "Front-end Developer",
      logoUrl: "/greensoftware-asia.svg",
      start: "May 2024",
      end: "Sep 2025",
      description:
        "Led frontend architecture and implementation for new platforms in E-commerce and DeFi, applying scalable design with React, Next.js, and TypeScript. Delivered end-to-end product features from scratch: collaborating directly with backend teams to define data contracts (REST/GraphQL), handling API integration, error management, and state synchronization for production-ready releases. Integrated Web3 features using wagmi and @web3-react, enabling wallet connections and smart contract calls for decentralized application modules. Researched and configured secure third-party integrations (Shopify & Printify API); configured custom admin dashboards to support business operations. Provided mentoring to junior engineers, enforced code review process, and contributed to collective improvement of engineering standards in a cross-functional Agile environment.",
    },
  ],
  education: [
    {
      school: "VTC Academy",
      href: "https://vtc.edu.vn",
      degree: "Full-stack Web Development",
      logoUrl: "/vtc-academy.png",
      start: "Sep 2021",
      end: "May 2024",
    },
  ],
  projects: [
    {
      title: "Podbrick E-commerce Builder",
      href: "https://podbrick.com",
      dates: "2025",
      active: true,
      description:
        "Led the front-end architecture and UI for a customizable merch builder, allowing users to design Lego characters for printing on favorite products like t-shirts, with live product previews and streamlined order flows for Podbrick partners.",
      technologies: [
        "React",
        "Next.js",
        "TypeScript",
        "Redux / Redux Toolkit",
        "TailwindCSS",
        "Shadcn UI",
        "Framer Motion",
        "REST APIs",
        "Shopify",
        "Printify",
        "Alibaba Cloud",
      ],
      links: [
        {
          icon: <Icons.globe className="size-3" />,
          type: "Website",
          href: "https://podbrick.com",
        },
      ],
      image: "/projects/podbrick (2).png",
      video: "",
    },
    {
      title: "Vinachain Swap",
      href: "https://swap.vinachain.io",
      dates: "2024 - 2025",
      active: true,
      description:
        "Developed a platform enabling users to purchase packages for daily interest payments, paid in USDT and received in VPC or USDV based on customer preferences, enhancing user engagement and financial flexibility.",
      technologies: [
        "React",
        "Next.js",
        "TypeScript",
        "Redux / Redux Toolkit",
        "Wagmi",
        "TailwindCSS",
        "Shadcn UI",
        "Framer Motion",
        "REST APIs",
        "Alibaba Cloud",
      ],
      links: [
        {
          icon: <Icons.globe className="size-3" />,
          type: "Website",
          href: "https://swap.vinachain.io",
        },
      ],
      image: "/projects/swap-vinachain (1).png",
      video: "",
    },
    {
      title: "Weex & AEX24 Operations Portal",
      href: "https://weex.info",
      dates: "2024 - 2025",
      active: true,
      description:
        "Developed a centralized exchange (CEX) platform where users log in and link wallets to trade VPC and USDV tokens, featuring full professional CEX capabilities including order management, real-time trading, and secure transactions.",
      technologies: [
        "React",
        "Next.js",
        "TypeScript",
        "Redux / Redux Toolkit",
        "@web3-react",
        "TailwindCSS",
        "Shadcn UI",
        "REST APIs",
        "Alibaba Cloud",
      ],
      links: [
        {
          icon: <Icons.globe className="size-3" />,
          type: "Website",
          href: "https://weex.info",
        },
      ],
      image: "/projects/weex (1).png",
      video: "",
    },
    {
      title: "Đại Việt Sử Ký",
      href: "https://daivietsuky.com",
      dates: "2024 - 2025",
      active: true,
      description:
        "Developed a comprehensive GameFi portal connecting to a mobile game via wallet addresses, enabling users to buy in-game items with tokens, top up the game using tokens through a VPC-to-Ruby swap gateway, and purchase NFTs with VPC tokens to enhance community engagement and drive user growth.",
      technologies: [
        "React",
        "Next.js",
        "TypeScript",
        "Redux / Redux Toolkit",
        "@web3-react",
        "TailwindCSS",
        "Shadcn UI",
        "REST APIs",
        "Alibaba Cloud",
      ],
      links: [
        {
          icon: <Icons.globe className="size-3" />,
          type: "Website",
          href: "https://daivietsuky.com",
        },
      ],
      image: "/projects/dvsk (3).png",
      video: "",
    },
  ],
  hackathons: [],
} as const;
