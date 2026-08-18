// Shared hero data (no translation needed)
const idoCmsHero = {
  duration: "2021 - 2025",
  role: "Product Designer",
  company: "Impossible Finance",
}

export const idoCmsEn = {
  title: "IDO Platform & CMS Infrastructure",
  back: "Back",
  sections: {
    background: "Background",
    solution: "Solution",
    design: "Design",
    userResearch: "Prototype Validation",
    outcome: "Outcome",
  },
  hero: idoCmsHero,
  // Project Overview (顯示在 Hero 下方)
  projectOverview: {
    title: "Project Overview",
    overview: {
      title: "01 Overview",
      content: "Impossible Finance helps blockchain projects launch tokens. This case covers two things at once: how projects are browsed on the frontend, and an internal CMS built from scratch for listing them.",
    },
    timeline: {
      title: "02 Timeline",
      content: "Initial development took about 2–3 months. I mapped requirements and information architecture, broke the launch flow into clear steps, and drove the work from flows and UI through design QA.\nThe product continued to evolve through 2025 as fundraising and auction models changed.",
    },
    challenge: {
      title: "03 Challenge",
      content: "Listing information was scattered across several tools and every launch needed manual developer configuration. The hard part was letting non-technical teammates finish a launch on their own without simply moving the burden onto them.",
    },
    outcome: {
      title: "04 Outcome",
      content: "Launch setup went from days to hours, supporting 20+ token launches, and the product later extended into a white-label line.",
    },
  },
  // Background Section
  background: {
    title: "Background & Challenge",
    intro: "Impossible Finance is a Web3 launchpad that helps blockchain projects launch tokens. As the number of projects grew, both the frontend and the internal workflow stopped scaling well.",
    challengeIntro: "There were two connected problems to solve:",
    challenges: [
      {
        title: "Hard to Browse Projects",
        content: "A project could offer multiple sale types, each appearing as a separate entry on the homepage. This created duplicates and made projects harder to compare.",
      },
      {
        title: "Developer-Dependent Setup",
        content: "Launch information was spread across multiple websites, and internal teammates had to repeatedly confirm contract details. Each launch often took days and still required manual developer configuration.",
      },
    ],
    goal: "The goal was to reorganize sales around projects on the frontend and create a **CMS that non-technical teammates could use independently**.",
  },
  // Solution Section
  solution: {
    title: "Solution",
    content: "On the backend, settings that used to live across several tools were pulled into one flow, so a non-technical teammate could take a launch from start to finish in one place. On the frontend, Project became the container that holds a project's different sale types in one place. Before that they were spread across the listing, and it was hard to tell which one to open.",
  },
  // Design Section
  design: {
    title: "Design",
    content: "This case covers two connected changes: restructuring sales discovery around projects on the frontend, and turning a fragmented, developer-dependent setup process into a CMS.",
    landingPageCaption: "Impossible Finance landing page design",
    iaTitle: "IA Evolution: From Sale-Centric to Project-Centric",
    iaContent: "Originally each sale mode appeared as a standalone listing. Once projects started offering multiple sale types, the homepage filled with duplicate project entries and became harder to scan.",
    iaContent2: "This was not part of the original scope. I noticed it while using the product myself and raised it, then made Project the top-level container and placed different sale types within each project page:",
    iaPoints: [
      "**Reduced duplication**: The homepage shows one entry per project.",
      "**Progressive disclosure**: Users enter a project first, then choose the relevant sale type.",
      "**Clearer decision support**: Sale pages surface timelines and key data for comparison."
    ],
    subsections: [
      {
        title: "CMS Design Strategy: Engineering Collaboration & Efficiency",
        content: "I reviewed the existing, fragmented feature pages to identify recurring fields, components, and states. I then organized them into reusable UI patterns with Material UI, helping engineers implement screens more consistently.",
        image: "/IF-CMS.png",
      },
      {
        title: "CMS Workflow Planning: Layered Settings & Guided Completion",
        content: "I grouped shared settings at the start of the flow, then showed conditional settings only when they were needed for a specific sale type. Required fields had to be completed before users could continue, and in-context guidance showed where each setting would appear on the public sale page.",
        image: "/Sale-Dialog.png",
      },
      {
        title: "Frontend Sales Page: Responsive UX & Information Hierarchy",
        content: "Based on existing feedback, I refined the information hierarchy and mobile layout to prioritize the details users needed before joining a sale.",
        image: "/Sale-Card.png",
      },
    ],
  },
  // User Research Section
  userResearch: {
    title: "Prototype Validation",
    content: "The goal was to confirm whether first-time users understood the Token Sale creation flow and could complete the assigned task. In a remote setup, I shared an interactive prototype through Google Forms and collected comprehension answers and open-ended feedback. I used both to identify gaps in understanding, then refined the information architecture and setup steps.",
    videoCaption: "Interactive prototype used for remote validation",
  },
  // Outcome Section
  outcome: {
    title: "Outcome",
    items: [
      {
        title: "Operational Efficiency & Stability",
        content: "Turned a developer-dependent setup process into a CMS that internal teammates could use independently. Feedback from the prototype validation also led me to rework how information sat within each step of the listing flow, grouping the important settings onto the same page so operators did not have to stay on edge at every step. This reduced launch setup from days to hours and supported **20+ token launches**, creating a reusable, reliable workflow for the team.",
        image: "/Projects/Project_Sale Contract_Empty.png",
        imageCaption: "Sale setup: payment, price and supply, and the sale period completed on one page."
      },
      {
        title: "Extended into a White-label Product Line",
        content: "The product later expanded into a white-label offering. By keeping the core information architecture and interaction flows fixed while allowing logos, colors, and assets to change, a client-branded version could be prepared in one to two days.",
        images: ["/Node Sale-Moonveil.png", "/Node Sale-Alpha Goats Sale.png"],
        imageCaption: "The same architecture and flow, rebranded for two clients: Moonveil and Alpha Goats.",
      },
      {
        title: "Post-launch Improvement: First-visit Guidance",
        content: "Telegram referral links brought new users straight into the platform, but the links were not precise enough, so people often arrived without knowing where they were or what they could do. I ran into this while using the live product myself and proposed a fix: a first-visit popup that lays out the core functions, Explore, Manage and Vesting, so visitors coming from social channels know what the platform offers and where to go next.",
        image: "/IF-FirstVisit.png",
        imageCaption: "Auto-triggered on a first visit, so users quickly grasp what the platform is and what it offers.",
      },
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
    userResearch: "原型驗證",
    outcome: "成果",
  },
  hero: idoCmsHero,
  // Project Overview (顯示在 Hero 下方)
  projectOverview: {
    title: "專案概覽",
    overview: {
      title: "01 概覽",
      content: "Impossible Finance 是協助區塊鏈專案發行代幣的平台。這個案子同時處理兩件事：前台的項目瀏覽架構，以及內部從零建構的上架 CMS。",
    },
    timeline: {
      title: "02 時程",
      content: "初始開發約 2–3 個月。我梳理需求與資訊架構，將上架流程拆成清楚步驟，從流程、UI 到 Design QA 全程推進。\n後續持續因應不同募資與拍賣模式調整功能與設計。",
    },
    challenge: {
      title: "03 挑戰",
      content: "上架資訊分散在多個工具，每次都需要工程師手動設定。難的地方在於：要讓非技術同事能獨立完成上架，又不能只是把負擔轉嫁給他們。",
    },
    outcome: {
      title: "04 成果",
      content: "上架時間從數天縮短至數小時，累計支援 20+ 次代幣發行，後續並延伸為 white-label 產品線。",
    },
  },
  // Background Section
  background: {
    title: "背景與問題",
    intro: "Impossible Finance 是協助區塊鏈專案發行代幣的 Web3 Launchpad。隨著合作專案增加，前台與內部流程都開始難以擴展。",
    challengeIntro: "有兩個彼此相關的問題要解決：",
    challenges: [
      {
        title: "前台項目難以瀏覽",
        content: "同一個項目若有多種 Sale，首頁會各自出現入口，造成重複資訊，也讓使用者更難比較不同項目。",
      },
      {
        title: "上架流程仰賴工程師",
        content: "上架資訊分散在多個網站，內部同事也需反覆確認合約內容；每次上架往往耗時數天，且仍需工程師手動設定。",
      },
    ],
    goal: "目標有兩個：前台用 Project 收攏同一個項目的多種 Sale，後台建立**讓非技術同事可自行操作的 CMS**。",
  },
  // Solution Section
  solution: {
    title: "解決方案",
    content: "後台把原本散在多個工具的設定收進同一條流程，讓非技術同事能在一個地方從頭走到完成。前台則以 Project 當容器，把同一個項目的不同 Sale 收在一起。原本這些 Sale 分散在列表上，使用者不容易判斷該點哪一個。",
  },
  // Design Section
  design: {
    title: "設計",
    content: "本案包含兩個相連的調整：前台以 Project 為核心整理多種 Sale；後台則將原本分散、仰賴工程師的設定流程轉為 CMS。",
    landingPageCaption: "Impossible Finance 網站首頁設計",
    iaTitle: "資訊架構演進：從 Sale 導向轉為 Project 導向",
    iaContent: "原本每種 Sale 都是獨立的列表入口。當同一個項目開始有多種 Sale，首頁就堆滿重複的項目入口，使用者也更難快速掃視。",
    iaContent2: "這個問題原本不在需求範圍內，是我實際使用產品後發現並提出的。我將「Project」設為頂層容器，再將不同 Sale 收納在各自的項目頁中：",
    iaPoints: [
      "**減少重複**：首頁只保留一個項目入口。",
      "**分層呈現**：進入項目後，再選擇相關的 Sale 類型。",
      "**輔助判斷**：Sale 頁呈現時程與關鍵數據，方便比較。"
    ],
    subsections: [
      {
        title: "CMS 設計策略：工程協作與開發效率",
        content: "我先梳理既有分散的功能頁面，整理重複出現的欄位、元件與狀態，再以 Material UI 建立可重複使用的設計模式。這讓工程師更容易對照實作，也維持不同頁面的一致性。",
        image: "/IF-CMS.png",
      },
      {
        title: "CMS 上架流程規劃：分層設定與流程引導",
        content: "共通設定集中在前段，依 Sale 類型才需要的條件式設定留到後續步驟再出現。必填欄位沒填完不能進入下一步，並在欄位旁標示這筆資訊會顯示在前台的哪個位置。",
        image: "/Sale-Dialog.png",
      },
      {
        title: "銷售頁面優化：響應式體驗與資訊層級",
        content: "根據既有回饋，我重新整理資訊層級與行動版版面，優先呈現使用者在參與 Sale 前需要確認的資訊。",
        image: "/Sale-Card.png",
      },
    ],
  },
  // User Research Section
  userResearch: {
    title: "原型驗證",
    content: "測試目標是確認首次使用者是否理解建立 Token Sale 的流程，並能完成指定任務。我以 Google Form 提供互動 Prototype，蒐集理解題與開放式回覆；再從答題結果與回饋中找出理解落差，調整資訊架構與設定步驟。",
    videoCaption: "用於遠端驗證的互動原型錄影",
  },
  // Outcome Section
  outcome: {
    title: "成果",
    items: [
      {
        title: "營運效率與穩定性",
        content: "將原本仰賴工程師的設定流程，轉為內部同事可自行操作的 CMS。原型驗證的回饋也讓我重新調整上架流程中每個步驟的資訊配置，把重要設定盡量收在同一頁完成，讓操作者不必每一步都繃緊精神確認。上架時間從數天縮短至數小時，並支援**超過 20 次代幣發行**，成為團隊可持續使用的穩定流程。",
        image: "/Projects/Project_Sale Contract_Empty.png",
        imageCaption: "Sale 設定：付款方式、價格與供給、銷售期間收在同一頁完成。"
      },
      {
        title: "延伸為 White-label 產品線",
        content: "後續將產品延伸為 White-label。在保留核心資訊架構與互動流程下，透過可替換的 Logo、色彩與素材，讓不同客戶品牌的客製能在一至兩天內完成。",
        images: ["/Node Sale-Moonveil.png", "/Node Sale-Alpha Goats Sale.png"],
        imageCaption: "同一套架構與流程，換上不同客戶的品牌樣式：Moonveil 與 Alpha Goats。",
      },
      {
        title: "上線後的主動優化：首次造訪引導",
        content: "Telegram 的推薦連結會把新使用者直接帶進平台，但連結不夠精準，人進來之後常常不知道自己在哪、能做什麼。這是我上線後自己使用時遇到的，於是主動提案補上首次造訪的彈窗，把 Explore、Manage、Vesting 幾個核心功能一次說明清楚，讓從社群進來的人知道下一步可以去哪裡。",
        image: "/IF-FirstVisit.png",
        imageCaption: "首次造訪時自動出現，讓使用者快速理解這是什麼平台、提供哪些服務。",
      },
    ]
  },
}
