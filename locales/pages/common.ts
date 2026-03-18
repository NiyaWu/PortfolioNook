// Shared project data (no translation needed)
export const projectsData = [
  {
    id: "ido-cms",
    title: "IDO Platform & CMS Infrastructure",
    category: "Web3 Launchpad · Product Design · Management System",
    company: "Impossible Finance",
    year: "2022",
    image: "/IDO-Cover.png",
    href: "/ido-cms",
  },
  {
    id: "tgballers",
    title: "TGBALLERS",
    category: "Web3 · Telegram Game · Visual Design",
    company: "Impossible Finance",
    year: "2024",
    image: "/portfolio/tgballers/TGBall-Cover.png",
    href: "/tgballers",
  },
  {
    id: "ivar-redesign",
    title: "Surveillance Camera Management",
    category: "Product Design · Management System",
    company: "Gorilla Technology",
    year: "2020",
    image: "/Cover-SurveillanceCameraManagement.png",
    href: "/ivar-redesign",
  },
  {
    id: "face-library",
    title: "Face Library Management",
    category: "UI/UX Design",
    company: "Gorilla Technology",
    year: "2019",
    image: "/otherWork-FaceLibrary.png",
    href: "/face-library",
  },
  {
    id: "ido-workflow",
    title: "IDO Marketing Design Workflow Optimization",
    category: "Design System · Workflow Optimization",
    company: "Impossible Finance",
    year: "2023",
    image: "/otherWork-IDOWorkflow.png",
    href: "#",
  },
  {
    id: "panko-mascot",
    title: "Panko Mascot Design",
    category: "Character Design · Brand Identity",
    company: "Impossible Finance",
    year: "2023",
    image: "/otherWork-PankoMascotDesign.png",
    href: "#",
  },
  {
    id: "data-visualization",
    title: "Data Visualization System",
    category: "Dashboard Design",
    company: "Gorilla Technology",
    year: "2019",
    image: "/otherWork-DataVisualizationSystem.png",
    href: "/data-visualization",
  },
  {
    id: "video-analysis",
    title: "Video Analysis System Design Optimization",
    category: "Product Design · Management System",
    company: "Gorilla Technology",
    year: "2018",
    image: "/Cover-VideoAnalysisSystem.png",
    href: "/video-analysis",
  },
  {
    id: "vod-channel",
    title: "VOD Channel for Taiwan Mobile",
    category: "UX Design · Contact Person",
    company: "Taiwan Mobile",
    year: "2016",
    image: "/portfolio/VOD.png",
    href: "/vod-channel",
  },
  {
    id: "chromecast",
    title: "Chromecast Streaming Design",
    category: "UI Design ・ Feature Research",
    company: "Taiwan Mobile",
    year: "2014",
    image: "/otherWork-Chromecast.png",
    href: "/chromecast",
  },
]

// Project descriptions (need translation)
const projectDescriptionsEn: Record<string, string> = {
  "ido-cms": "Elevated IDO investment experience through brand-centric design and a custom modular CMS, streamlining token launches and operational workflows.",
  "tgballers": "A Telegram interactive game developed for TOKEN2049 Singapore. In just 72 hours, I synchronized cross-departmental requirements to finalize specifications, leveraging AI to integrate technology and design for high-quality delivery under a tight deadline.",
  "ivar-redesign": "Redesign of IVAR security camera management system",
  "face-library": "Face recognition and library management interface design",
  "data-visualization": "Real-time data visualization and monitoring dashboard",
  "video-analysis": "Video analysis and processing interface design",
  "vod-channel": "OTT streaming service channel redesign for myVideo",
  "chromecast": "Chromecast streaming feature flow design for OTT service",
}

const projectDescriptionsZh: Record<string, string> = {
  "ido-cms": "以品牌導向重構 IDO 投資體驗，並開發模組化 CMS 系統，有效加速代幣上架流程與開發效率。",
  "tgballers": "為 TOKEN2049 Singapore 打造的 Telegram 互動遊戲。在 72 小時內橫向收斂各部門需求並確立規格，運用 AI 深度整合技術與設計，確保在極短時程內達成高品質交付。",
  "ivar-redesign": "IVAR 安全監控攝影機管理系統重新設計",
  "face-library": "人臉辨識與資料庫管理介面設計",
  "data-visualization": "即時數據視覺化和監控儀表板",
  "video-analysis": "影片分析與處理介面設計",
  "vod-channel": "myVideo OTT 串流服務頻道重新設計",
  "chromecast": "OTT 服務的 Chromecast 串流功能流程設計",
}

// Helper function to merge project data with descriptions
const getProjectsWithDescriptions = (descriptions: Record<string, string>) =>
  projectsData.map((project) => ({
    ...project,
    description: descriptions[project.id] || "",
  }))

export const commonEn = {
  // Header
  nav: {
    home: "Home",
    work: "Work",
    practices: "Practices",
    about: "About",
    contact: "Contact",
  },
  // Hero
  hero: {
    name: "Niya",
    description: "I'm a Product Designer with multi-industry experience across Web3, SaaS, and large-scale system platforms.",
  },
  // Work Showcase
  work: {
    title: "Featured Work",
    description: "A selection of projects I've worked on",
    viewProject: "View project",
    moreProjects: "View Practices",
    projects: getProjectsWithDescriptions(projectDescriptionsEn),
  },
  // About
  about: {
    title: "About Me",
    emoji: "👋",
    intro: "Hello, I'm Niya (Ming Hshiang Wu). I'm a UI/UX Designer who enjoys creating useful flow and researching interfaces.",
    description: [
      "I have extensive experience working with diverse stakeholders and scalable user experiences that support complex products and real-world operations.",
    ],
    experienceTitle: "Experience",
    experiences: [
      {
        company: "Impossible Finance",
        period: "September 2021 - July 2025",
        role: "Product Designer",
        location: "Remote",
        description: [
          "Led the core product design of the IDO platform, optimizing user participation flows for token launches and asset staking.",
          "Provided design support for external partnership projects, including Node Sale and Token Minting flow planning, translating diverse business requirements into intuitive interfaces.",
          "Flexibly supported marketing and promotional needs, producing community visual assets and assisting with promotional video editing as needed.",
          "Maintained and iterated on a cross-project design system, ensuring consistency across core products and external partnerships in a multi-chain environment.",
          "Collaborated closely with the engineering team to ensure high-fidelity implementation of designs, providing front-end styling support during development phases.",
        ],
      },
      {
        company: "Gorilla Technology",
        period: "June 2017 - May 2020",
        role: "UI / UX Designer",
        location: "Taipei, Taiwan",
        description: [
          "Responsible for the interface and feature flow design of the company's core product, IVAR.",
          "Assisted in writing HTML and CSS, optimizing front-end interface fidelity and development collaboration efficiency from a designer's perspective.",
          "Contributed design support for government contract projects, including e-learning systems and smart airport large-scale projects.",
          "Self-learned and introduced Material-UI and Highcharts libraries, helping to improve the design team's production standards.",
          "Planned and optimized user flows for internal company system tools.",
        ],
      },
      {
        company: "Taiwan Mobile Co., Ltd.",
        period: "October 2013 - June 2017",
        roles: [
          {
            role: "Digital Multimedia Div. UX Team - Product Designer",
            period: "2015 - June 2017",
            description: [
              "Organized and executed initial research and prototype design for myVideo set-top box interfaces.",
              "Collaborated with Ogilvy on usability research for myVideo, myBook, and myMusic products, and compiled design optimization recommendations.",
              "Assisted the development team in designing user flows and interface planning for Chromecast cross-device casting features in myVideo products.",
              "Co-developed campaign web pages and marketing materials, ensuring product experience consistency.",
            ],
          },
          {
            role: "myVideo - Marketing Designer / Product Designer",
            period: "2014 - 2015",
            description: [
              "Established systematized components for marketing web pages and weekly EDMs, effectively improving production efficiency and optimizing visual standards.",
              "Responsible for product feature interface iterations and producing banner ads and digital assets aligned with brand guidelines.",
              "Supported in-store video trailer editing and campaign material design, maintaining brand market image consistency.",
            ],
          },
          {
            role: "myVideo - Product Designer",
            period: "October 2013 - 2014",
            description: [
              "Responsible for visual maintenance and iterative optimization of myVideo multi-platform interfaces, ensuring design deliverables met development specifications.",
              "Handled communication of design details with external vendors, strictly inspecting and managing the quality of delivered assets.",
              "Supported various design needs during early product development phases, ensuring interface logic aligned with existing product lines.",
            ],
          },
        ],
      },
      // {
      //   company: "Cracking Design",
      //   period: "January 2010 - December 2012",
      //   role: "Co-founder / Web Designer",
      //   location: "Taoyuan, Taiwan",
      //   description: "Planned the business owners' website and find what they want through deep communication. Design the website, and build HTML, CSS files to developers.",
      // },
    ],
    contact: "Connect with me via email twmniya@gmail.com",
    contactLine1: "Connect with me via email",
  },
  // CTA
  cta: {
    title: "Let's Work Together",
    description: "Have a project in mind? Let's create something amazing together.",
    button: "Get in Touch",
  },
  // Practices (Other Work)
  otherWork: {
    title: "Practices",
    subtitle: "Diverse design practices beyond core products",
    contact: "Connect with me on Linkedin or via email at twmniya@gmail.com",
    contactLine1: "Connect with me on Linkedin or via email at",
    closeButton: "Close",
    nextProject: "Next",
    backProject: "Back",
  },
  // Footer
  footer: {
    copyright: "© 2024 Your Name. All rights reserved.",
  },
}

export const commonZh = {
  // Header
  nav: {
    home: "首頁",
    work: "主要專案",
    practices: "設計實踐",
    about: "關於我",
    contact: "聯絡",
  },
  // Hero
  hero: {
    name: "Niya",
    description: "我是一位產品設計師，擁有 Web3、SaaS 和大型系統平台等多產業的經驗。",
  },
  // Work Showcase
  work: {
    title: "精選作品",
    description: "我參與過的精選專案",
    viewProject: "查看專案",
    moreProjects: "探索更多",
    projects: getProjectsWithDescriptions(projectDescriptionsZh),
  },
  // About
  about: {
    title: "關於我",
    emoji: "👋",
    intro: "你好，我是 Niya 。我是一位 UI/UX 設計師，喜歡創造實用的流程和研究介面。",
    description: [
      "我擁有豐富的經驗，與不同的利益相關者合作，並打造可擴展的使用者體驗，以支援複雜的產品和實際營運。",
    ],
    experienceTitle: "工作經歷",
    experiences: [
      {
        company: "Impossible Finance",
        period: "2021年9月 - 2025年7月",
        role: "產品設計師",
        location: "遠端",
        description: [
          "負責 IDO 平台核心產品設計，優化代幣發行與資產質押的用戶參與流程。",
          "針對外部合作專案提供設計支援，包含 Node Sale 與 Token Minting 流程規劃，將多元商業需求轉化為直覺介面。",
          "彈性支援行銷與市場推廣需求，負責社群視覺素材製作，並視專案需要協助宣傳影片剪輯。",
          "維護與迭代設計跨專案設計系統，確保核心產品與外部合作項目在多鏈環境下的一致性。",
          "與技術團隊緊密協作，確保設計稿的高精度還原，並在專案開發階段提供前端樣式調整支援。"
        ],
      },
      {
        company: "Gorilla Technology",
        period: "2017年6月 - 2020年5月",
        role: "UI / UX 設計師",
        location: "台北，台灣",
        description: [
          "負責公司核心產品 IVAR 的介面與功能流程設計。",
          "協助編寫 HTML 與 CSS，以設計師視角優化前端介面的還原度與開發協作效率。",
          "參與政府標案之設計支援，包含電子學習系統與智慧機場等大型專案。",
          "自主學習並導入 Material-UI 與 Highcharts 函式庫，協助提升設計團隊的產製規範。",
          "規劃並優化公司內部系統工具的使用者流程。"
        ]
      },
      {
        company: "台灣大哥大",
        period: "2013年10月 - 2017年6月",
        roles: [
          {
            role: "數位多媒體處 UX團隊 - 產品設計師",
            period: "2015年 - 2017年6月",
            description: [
              "組織並執行 myVideo 機上盒介面的初步研究與原型設計。",
              "與奧美合作進行 myVideo、myBook 和 myMusic 產品的可用性研究，並整理設計優化建議。",
              "協助開發團隊設計 myVideo 產品中 Chromecast 跨裝置投放功能的使用者流程與介面規劃。",
              "協作開發活動網頁及行銷素材，確保產品體驗一致性。",
            ],
          },
          {
            role: "myVideo - 行銷設計師/產品設計師",
            period: "2014年 - 2015年",
            description: [
              "建立行銷網頁與每週 EDM 系統化組件，有效提升產製效率並優化視覺規範。",
              "負責產品功能之介面迭代，並產出符合品牌規範的橫幅廣告與數位素材。",
              "支援門市影片預告片剪輯與活動素材設計，維持品牌市場形象的一致性。"
            ],
          },
          {
            role: "myVideo - 產品設計師",
            period: "2013年10月 - 2014年",
            description: [
              "負責myVideo多平台介面的視覺維護與迭代優化，並確保設計稿件符合開發規範。",
              "負責與外部廠商溝通設計細節，並嚴格檢查與管控交付素材的品質。",
              "支援產品早期開發階段的各類設計需求，確保介面邏輯符合既有產品線。",
            ],
          },
        ],
      },
      // {
      //   company: "Cracking Design",
      //   period: "2010年1月 - 2012年12月",
      //   role: "共同創辦人 / 網頁設計師",
      //   location: "桃園，台灣",
      //   description: "規劃企業主的網站，並透過深入溝通找出他們的需求。設計網站，並建立 HTML、CSS 檔案交給開發人員。",
      // },
    ],
    contact: "透過電子郵件 twmniya@gmail.com 與我聯繫",
    contactLine1: "透過電子郵件與我聯繫",
  },
  // CTA
  cta: {
    title: "讓我們一起合作",
    description: "有想法嗎？讓我們一起創造驚人的作品。",
    button: "聯絡我",
  },
  // Practices (Other Work)
  otherWork: {
    title: "設計實踐",
    subtitle: "核心產品之外的多元設計實踐",
    contact: "在 Linkedin 上與我聯繫，或透過電子郵件 twmniya@gmail.com",
    contactLine1: "在 Linkedin 上與我聯繫，或透過電子郵件",
    closeButton: "Close",
    nextProject: "Next",
    backProject: "Back",
  },
  // Footer
  footer: {
    copyright: "© 2024 你的名字。保留所有權利。",
  },
}
