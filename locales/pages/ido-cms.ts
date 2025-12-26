export const idoCmsEn = {
  title: "IDO Platform & CMS Infrastructure",
  back: "Back",
  sections: {
    background: "Background",
    solution: "Solution",
    design: "Design",
    userResearch: "User Research",
    outcome: "Outcome",
  },
  hero: {
    duration: "2020 - 2020",
    role: "Product Designer",
    company: "Impossible Finance",
  },
  // Project Overview (顯示在 Hero 下方)
  projectOverview: {
    title: "Project Overview",
    overview: {
      title: "01 Overview",
      content: "Redesigned the IDO frontend and CMS to streamline Web3 token issuance and establish a high-efficiency launchpad ecosystem.",
    },
    timeline: {
      title: "02 Timeline",
      content: "3-6 months. Scope: Initial research, IA planning, and iterative design for the platform frontend and backend management system.",
    },
    challenge: {
      title: "03 Challenge",
      content: "Fragmented Launch Workflow: Reliance on multiple platforms led to disjointed issuance paths and hindered real-time error correction. \n Low Information Transparency: Scattered data on subscription pages made it hard for users to find key info, impacting investment decisions.",
    },
    outcome: {
      title: "04 Outcome",
      content: "Reduced setup time and errors. Successfully supported 20+ project launches with scalable potential for B2B expansion.",
    },
  },
  // Background Section
  background: {
    title: "Background & Challenge",
    intro: "Impossible Finance is a Launchpad service provider in the **decentralized Web3 space**. Our main work is to find promising blockchain startups and help them launch tokens (Initial DEX Offering, IDO) on our platform, or connect them with the right partners.",
    challengeIntro: "As more projects came to us each month, we faced two main problems:",
    challenges: [
      {
        title: "Hard to Browse Projects",
        content: "The current website made it hard for users to view many projects at once, which slowed down their search and decision making.",
      },
      {
        title: "Slow Backend Process",
        content: "Every token listing needed a developer to do it by hand. This took time away from product work and often broke the team's focus.",
      },
    ],
    goal: "So this project had two goals: build a **frontend that lets users browse many projects easily**, and create a **backend CMS that non-tech staff can use on their own**.",
  },
  // Solution Section
  solution: {
    title: "Solution",
    content: "Modular Workflow Design We streamlined the launch process by categorizing data into two core modules: Project Info and Sale Details. This established a clear hierarchy with real-time tracking and error-prevention, significantly reducing preparation time and improving team collaboration.",
  },
  // Design Section
  design: {
    title: "Design",
    content: "Visual Guidance & Dual-Theme Redesign The design transforms the brand LOGO into a central visual element, using upward light projections to create an intuitive guiding language throughout the platform. For the core sales experience, we restructured the information hierarchy based on user feedback to ensure all critical data is clear at a glance. Additionally, we introduced both Dark and Light modes, granting users full autonomy over their viewing environment.",
    landingPageCaption: "Impossible Finance landing page design",
    iaTitle: "IA Evolution: From Sale-Centric to Project-Centric",
    iaContent: "In the platform's early stages, the interface used a straightforward single-sale layout. However, as the business expanded, a single project often included multiple sale types (e.g., Standard, Unlimited, Whitelist), causing duplicate information on the homepage and increasing users' filtering difficulty and cognitive load.",
    iaContent2: "We restructured the product's Information Architecture, defining 'Project' as the top-level container and consolidating diverse sale modes into second-level inner pages:",
    iaPoints: [
      "**Data De-duplication**: The homepage list displays only unique project entries, significantly improving scanning efficiency.",
      "**Progressive Disclosure**: Users are guided to inner pages first, then select sale modes based on investment preferences.",
      "**Decision Efficiency**: V2 inner pages feature clear timeline progress bars and data comparisons, ensuring users intuitively grasp investment timing."
    ],
    subsections: [
      {
        title: "CMS Design Strategy: Engineering Collaboration & Efficiency",
        content: "To ensure rapid deployment, I proposed adopting the Material UI framework. By aligning with the JSON architecture and defining core components, I streamlined the development process, allowing engineers to focus on logic while I maintained visual consistency through custom styling.",
        image: "/IF-CMS.png",
      },
      {
        title: "CMS Workflow Planning: Logic & Error Prevention",
        content: "To manage complex data requirements, I implemented a pre-defined sales mode workflow. Requiring the mode to be selected at project creation eliminates input confusion and serves as an intuitive onboarding tool for new team members to understand business models.",
        image: "/Sale-Dialog.png",
      },
      {
        title: "Frontend Sales Page: Responsive UX & Information Optimization",
        content: "Refined the information hierarchy based on historical user feedback. By optimizing the mobile interface and prioritizing critical data metrics, I enhanced the scanning experience, allowing users to efficiently evaluate and participate in different sales.",
        image: "/Sale-Card.png",
      },
    ],
  },
  // User Research Section
  userResearch: {
    title: "User Research",
    content: "In a fully remote setup, we validated interface intuitiveness via Google Forms. Participants achieved a **high accuracy rate** in identifying CMS interface functions, proving the design's \"self-explanatory\" clarity and reducing cross-team communication overhead.",
  },
  // Outcome Section
  outcome: {
    title: "Outcome & Learnings",
    items: [
      {
        title: "Operational Efficiency & Stability",
        content: "Successfully automated the IDO listing process, transforming manual engineering tasks into a self-service workflow. This reduced deployment time from days to hours and reliably supported **20+ successful token launches.**"
      },
      {
        title: "Smart Onboarding for Social Traffic",
        content: "To address navigation confusion from imprecise Telegram referral links, I introduced a **First-Visit Detection** popup. This intelligent bridge ensures new users instantly recognize core functions—Explore, Manage, and Vesting—minimizing friction and ensuring a consistent brand experience from social media to the platform.",
        image: "/IF-FirstVisit.png"
      }
    ]
  },
}

export const idoCmsZh = {
  title: "IDO 平台與 CMS 管理系統重構",
  back: "返回",
  sections: {
    background: "背景",
    solution: "解決方案",
    design: "設計",
    userResearch: "使用者研究",
    outcome: "成果",
  },
  hero: {
    duration: "2020 - 2020",
    role: "產品設計師",
    company: "Impossible Finance",
  },
  // Project Overview (顯示在 Hero 下方)
  projectOverview: {
    title: "專案概覽",
    overview: {
      title: "01 概覽",
      content: "重構 IDO 前端與 CMS 管理平台，優化 Web3 代幣發行流程，打造高效的代幣啟動生態。",
    },
    timeline: {
      title: "02 時程",
      content: "歷時 2~3 個月，涵蓋前期研究、資訊架構規劃，以及前端頁面與 CMS 系統的設計迭代與上線。",
    },
    challenge: {
      title: "03 挑戰",
      content: "上架流程碎片化： 過去需跨多個平台操作，導致發行路徑斷裂且難以即時糾錯。\n資訊透明度不足： 申購頁關鍵資訊散亂，導致用戶難以查找並影響投資決策。",
    },
    outcome: {
      title: "04 成果",
      content: "大幅降低發行門檻與操作失誤；穩定支撐 20+ 場代幣發行，具備開放給外部合作夥伴的擴充潛力。",
    },
  },
  // Background Section
  background: {
    title: "背景與問題",
    intro: "Impossible Finance 是一家深耕**去中心化 Web3 領域**的 Launchpad 服務商。公司核心業務是持續在市場中識別具有潛力的區塊鏈新創項目，並提供全方位的發行服務：協助這些項目透過平台成功發行代幣 (Initial DEX Offering, IDO)，或將其推薦給合適的生態系合作夥伴。",
    challengeIntro: "面對每月市場上持續增加的眾多潛力項目，產品與營運流程面臨以下雙重挑戰：",
    challenges: [
      {
        title: "前端資訊承載限制",
        content: "現有網站介面設計難以有效地讓使用者一次性瀏覽大量項目資訊，影響了用戶的探索與決策效率。",
      },
      {
        title: "後端流程效率瓶頸",
        content: "每次的代幣上架作業皆須仰賴程式開發人員手動執行。此營運模式不僅會壓縮產品開發排程，也經常打斷核心開發團隊的工作進度。",
      },
    ],
    goal: "因此，本專案旨在透過優化，達成兩大目標：設計一個**能高效閱讀多個項目的前端介面**，以及開發一個**能讓非技術職員簡易操作的後臺 CMS 系統**。",
  },
  // Solution Section
  solution: {
    title: "解決方案",
    content: "模組化流程設計 重新梳理上架所需資訊，將流程拆解為「項目方資訊」與「銷售資訊」兩大核心模組，建立清晰的資訊層次。系統整合了即時狀態追蹤與防錯機制，大幅縮短發行準備時間，並顯著提升團隊協作效率。",
  },
  // Design Section
  design: {
    title: "設計",
    content: "視覺引導與雙色體驗重構 本次設計轉化品牌 LOGO 為視覺核心，透過向上投射的光影語彙建立直覺的視覺引導，並將此品牌感貫穿全站段落。針對銷售核心體驗，我們基於用戶反饋重新優化資訊排版，以達到「一目瞭然」的視覺效果，並首度導入深淺色模式切換，讓用戶能根據使用偏好自由選擇瀏覽環境。",
    landingPageCaption: "Impossible Finance landing page design",
    iaTitle: "銷售頁面資訊架構演進：從「單一銷售導向」轉向「項目核心導向」",
    iaContent: "在平台發展初期，介面採取「單一銷售模式」的直覺排版。然而，隨著業務擴張，單一項目常包含多種銷售模式（如：Standard, Unlimited, Whitelist），導致首頁列表出現重複資訊，增加了用戶的篩選難度與認知負荷。",
    iaContent2: "我們重新梳理了產品的資訊架構，將「項目」定義為頂層容器，並將多元的銷售模式整合至第二層內頁：",
    iaPoints: [
      "**資訊降噪**：首頁列表僅顯示唯一項目入口，大幅提升掃視效率。",
      "**分層揭露**：引導用戶進入內頁後，再根據投資偏好選擇銷售模式。",
      "**優化決策流**：在 V2 內頁導入清晰的時程進度條與數據對比，確保用戶直觀掌握投資時效。"
    ],
    subsections: [
      {
        title: "CMS 設計策略：工程協作與開發效率",
        content: "為確保功能快速迭代，主導採用 Material UI 框架。透過研究 JSON 架構 並定義核心組件，在省去繁瑣視覺開發的同時，確保色彩系統與品牌一致，使工程師能專注於邏輯開發，顯著加速開發進程。",
        image: "/IF-CMS.png",
      },
      {
        title: "CMS 上架流程規劃：資訊邏輯與防錯機制",
        content: "針對多樣的銷售模式，設計了「預先定義模式」的流程。在新增專案時即鎖定模式以防止資訊混淆，不僅降低了填寫出錯率，更將此系統轉化為內部新進人員快速理解公司銷售業務的工具。",
        image: "/Sale-Dialog.png",
      },
      {
        title: "銷售頁面優化：響應式體驗與資訊降噪",
        content: "基於舊版數據反饋，重新梳理資訊層級並全面優化行動端介面。透過精簡非核心資訊並強化關鍵數據指標，提升用戶在不同設備上的瀏覽效率，確保申購過程流暢且直覺。",
        image: "/Sale-Card.png",
      },
    ],
  },
  // User Research Section
  userResearch: {
    title: "使用者研究",
    content: "因應全遠端協作需求，透過 Google 表單進行內部原型測試。結果顯示受測者對CMS介面功能佈局的**理解正確率極高**，驗證了介面具備強大的「自解釋能力」，有效降低溝通成本並提升產品信心。",
  },
  // Outcome Section
  outcome: {
    title: "成果與學習",
    items: [
      {
        title: "營運效率與穩定性",
        content: "成功自動化 IDO 上架流程，將工程師手動配置轉化為自助式工作流程。這將部署時間從數天縮短至數小時，並穩定支援**超過 20 場成功的代幣發行。**"
      },
      {
        title: "社群流量的智慧引導",
        content: "為解決 Telegram 推薦連結導致的導航困惑，我導入了**首訪偵測彈窗**。這個智慧橋樑確保新用戶能立即識別核心功能——Explore、Manage 和 Vesting——最小化摩擦並確保從社群媒體到平台的一致品牌體驗。",
        image: "/IF-FirstVisit.png"
      }
    ]
  },
}
