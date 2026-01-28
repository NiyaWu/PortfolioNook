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
    title: "Chromecast Feature Design",
    category: "UX Design",
    company: "Taiwan Mobile",
    year: "2014",
    image: "/portfolio/chromecast-phone.png",
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
    moreProjects: "More Projects",
    projects: getProjectsWithDescriptions(projectDescriptionsEn),
  },
  // About
  about: {
    title: "About Me",
    emoji: "👋",
    intro: "Hello, I'm Niya (Ming Hshiang Wu). I'm a UI/UX Designer who enjoys creating useful flow and researching interfaces.",
    description: "I have extensive experience working with diverse stakeholders and scalable user experiences that support complex products and real-world operations.",
    experienceTitle: "Experience",
    experiences: [
      {
        company: "Impossible Finance",
        period: "2021 - Present",
        role: "Product Designer",
        location: "Remote",
        description: "Leading the design of Web3 products including IDO launchpad, token management CMS, and DeFi platforms. Collaborate with cross-functional teams to create intuitive user experiences for complex blockchain applications.",
      },
      {
        company: "Gorilla Technology",
        period: "June 2017 - May 2020",
        role: "UI / UX Designer",
        location: "Taipei, Taiwan",
        description: "The design role of the main product (IVAR) for our company, not only design new features flow, and interfaces but also written HTML and CSS co-work like a UX engineer with our FE developers. Support design works for projects from the government, like the e-learning system and smart airport. Design and improve the user-flow of the company's internal system tools.",
      },
      {
        company: "Taiwan Mobile Co., Ltd.",
        period: "October 2013 - June 2017",
        role: "UI / UX / Marketing Designer",
        location: "Taipei, Taiwan",
        description: "Organized the initial research of myVideo Set-Top box interfaces. Collaborated with Ogilvy One on usability research for myVideo, myBook and myMusic products. Design advanced product usability and make banner ads provide rich content for the myVideo team. Systematize the usual marketing website and weekly EDM. Assist the development team to design the user-flow for Chromecast features in myVideo products.",
      },
      {
        company: "Cracking Design",
        period: "January 2010 - December 2012",
        role: "Co-founder / Web Designer",
        location: "Taoyuan, Taiwan",
        description: "Planned the business owners' website and find what they want through deep communication. Design the website, and build HTML, CSS files to developers.",
      },
    ],
    contact: "Connect with me via email twmniya@gmail.com",
  },
  // CTA
  cta: {
    title: "Let's Work Together",
    description: "Have a project in mind? Let's create something amazing together.",
    button: "Get in Touch",
  },
  // Other Work
  otherWork: {
    title: "Other Work",
    subtitle: "Hello, I'm Niya. I'm a Product Designer with multi-industry experience across Web3, SaaS, and large-scale system platforms.",
    contact: "Connect with me on Linkedin or via email at twmniya@gmail.com",
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
    work: "作品",
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
    moreProjects: "更多專案",
    projects: getProjectsWithDescriptions(projectDescriptionsZh),
  },
  // About
  about: {
    title: "關於我",
    emoji: "👋",
    intro: "你好，我是 Niya（吳明祥）。我是一位 UI/UX 設計師，喜歡創造實用的流程和研究介面。",
    description: "我擁有豐富的經驗，與不同的利益相關者合作，並打造可擴展的使用者體驗，以支援複雜的產品和實際營運。",
    experienceTitle: "工作經歷",
    experiences: [
      {
        company: "Impossible Finance",
        period: "2021 - 現在",
        role: "產品設計師",
        location: "遠端",
        description: "主導 Web3 產品設計，包括 IDO 發行平台、代幣管理 CMS 和 DeFi 平台。與跨職能團隊合作，為複雜的區塊鏈應用程式創造直觀的使用者體驗。",
      },
      {
        company: "Gorilla Technology",
        period: "2017年6月 - 2020年5月",
        role: "UI / UX 設計師",
        location: "台北，台灣",
        description: "擔任公司主要產品（IVAR）的設計角色，不僅設計新功能流程和介面，還撰寫 HTML 和 CSS，像 UX 工程師一樣與前端開發人員合作。支援政府專案的設計工作，如電子學習系統和智慧機場。設計和改進公司內部系統工具的使用者流程。",
      },
      {
        company: "台灣大哥大",
        period: "2013年10月 - 2017年6月",
        role: "UI / UX / 行銷設計師",
        location: "台北，台灣",
        description: "組織 myVideo 機上盒介面的初步研究。與奧美合作進行 myVideo、myBook 和 myMusic 產品的可用性研究。設計進階產品可用性，並為 myVideo 團隊製作豐富內容的橫幅廣告。系統化常規行銷網站和每週電子報。協助開發團隊設計 myVideo 產品中 Chromecast 功能的使用者流程。",
      },
      {
        company: "Cracking Design",
        period: "2010年1月 - 2012年12月",
        role: "共同創辦人 / 網頁設計師",
        location: "桃園，台灣",
        description: "規劃企業主的網站，並透過深入溝通找出他們的需求。設計網站，並建立 HTML、CSS 檔案交給開發人員。",
      },
    ],
    contact: "透過電子郵件 twmniya@gmail.com 與我聯繫",
  },
  // CTA
  cta: {
    title: "讓我們一起合作",
    description: "有想法嗎？讓我們一起創造驚人的作品。",
    button: "聯絡我",
  },
  // Other Work
  otherWork: {
    title: "其他作品",
    subtitle: "你好，我是 Niya。我是一位產品設計師，擁有 Web3、SaaS 和大型系統平台等多產業的經驗。",
    contact: "在 Linkedin 上與我聯繫，或透過電子郵件 twmniya@gmail.com",
  },
  // Footer
  footer: {
    copyright: "© 2024 你的名字。保留所有權利。",
  },
}
