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
      content: "As token launches increased, projects became harder to browse and each listing still required developer support. The project therefore restructured the frontend and CMS together.",
    },
    timeline: {
      title: "02 Timeline",
      content: "Initial development took about 2–3 months. I mapped requirements and information architecture, broke the launch flow into clear steps, and drove the work from flows and UI through design QA.\nThe product continued to evolve through 2025 as fundraising and auction models changed.",
    },
    challenge: {
      title: "03 Challenge",
      content: "Setup required switching between several tools and manual developer configuration. I restructured the flow, validated it remotely with an interactive prototype, then refined the information architecture and setup steps based on the results.",
    },
    outcome: {
      title: "04 Outcome",
      content: "Created a self-service CMS that reduced launch setup from days to hours and supported 20+ token launches.",
    },
  },
  // Background Section
  background: {
    title: "Background & Challenge",
    intro: "Impossible Finance is a Web3 launchpad that helps blockchain projects launch tokens. As the number of projects grew, both the frontend and the internal workflow stopped scaling well.",
    challengeIntro: "We needed to solve two connected problems:",
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
    content: "I restructured the setup flow around two core modules — Project Info and Sale Details. Shared, required information appears first; settings that change by sale type are deferred to later steps. This reduced context switching and made the workflow easier for non-technical teammates to follow.",
  },
  // Design Section
  design: {
    title: "Design",
    content: "This case covers two connected changes: restructuring sales discovery around projects on the frontend, and turning a fragmented, developer-dependent setup process into a CMS.",
    landingPageCaption: "Impossible Finance landing page design",
    iaTitle: "IA Evolution: From Sale-Centric to Project-Centric",
    iaContent: "Originally, each sale mode appeared as a standalone listing. As projects introduced multiple sale types, the homepage filled with duplicate project entries and became harder to scan.",
    iaContent2: "I made Project the top-level container, then placed different sale types within each project page:",
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
        content: "Turned a developer-dependent setup process into a CMS that internal teammates could use independently. This reduced launch setup from days to hours and supported **20+ token launches**, creating a reusable, reliable workflow for the team."
      },
      {
        title: "Extended into a White-label Product Line",
        content: "The product later expanded into a white-label offering. By keeping the core information architecture and interaction flows fixed while allowing logos, colors, and assets to change, a client-branded version could be prepared in one to two days.",
        images: ["/Node Sale-Moonveil.png", "/Node Sale-Alpha Goats Sale.png"],
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
      content: "隨著代幣發行專案增加，使用者更難瀏覽不同項目，內部上架也仍仰賴工程師手動處理。因此，我們同步重整前台資訊架構與 CMS。",
    },
    timeline: {
      title: "02 時程",
      content: "初始開發約 2–3 個月。我梳理需求與資訊架構，將上架流程拆成清楚步驟，從流程、UI 到 Design QA 全程推進。\n後續持續因應不同募資與拍賣模式調整功能與設計。",
    },
    challenge: {
      title: "03 挑戰",
      content: "原先上架需在多個工具間切換，且仰賴工程師手動設定。我重整流程，並以互動 Prototype 進行遠端驗證；再根據結果調整資訊架構與設定步驟。",
    },
    outcome: {
      title: "04 成果",
      content: "建立可由內部同事自行操作的 CMS，將上架時間從數天縮短至數小時，並支援 20+ 次代幣發行。",
    },
  },
  // Background Section
  background: {
    title: "背景與問題",
    intro: "Impossible Finance 是協助區塊鏈專案發行代幣的 Web3 Launchpad。隨著合作專案增加，前台與內部流程都開始難以擴展。",
    challengeIntro: "我們需要解決兩個彼此相關的問題：",
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
    goal: "專案目標是：以前台的 Project 架構整理不同 Sale，並建立**讓非技術同事可自行操作的 CMS**。",
  },
  // Solution Section
  solution: {
    title: "解決方案",
    content: "我將上架流程重整為「項目方資訊」與「銷售資訊」兩個核心模組。共通且必填的資訊先完成；會依不同 Sale 改變的設定則延後至下一步，降低切換脈絡的負擔，也讓非技術同事更容易理解整個流程。",
  },
  // Design Section
  design: {
    title: "設計",
    content: "本案包含兩個相連的調整：前台以 Project 為核心整理多種 Sale；後台則將原本分散、仰賴工程師的設定流程轉為 CMS。",
    landingPageCaption: "Impossible Finance landing page design",
    iaTitle: "銷售頁面資訊架構演進：從「單一銷售導向」轉向「項目核心導向」",
    iaContent: "原本每種 Sale 都是獨立的列表入口。當同一項目有多種 Sale 時，首頁便出現重複項目，使用者也更難快速掃視。",
    iaContent2: "我將「Project」設為頂層容器，再將不同 Sale 收納在各自的項目頁中：",
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
        content: "將共通設定集中在前段；依 Sale 類型才需要的條件式設定，於後續步驟再顯示。必填欄位未完成時無法進入下一步，並提供提示說明該資訊會呈現在前台的哪個位置。",
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
        content: "將原本仰賴工程師的設定流程，轉為內部同事可自行操作的 CMS。上架時間從數天縮短至數小時，並支援**超過 20 次代幣發行**，成為團隊可持續使用的穩定流程。"
      },
      {
        title: "延伸為 White-label 產品線",
        content: "後續將產品延伸為 White-label。在保留核心資訊架構與互動流程下，透過可替換的 Logo、色彩與素材，讓不同客戶品牌的客製能在一至兩天內完成。",
        images: ["/Node Sale-Moonveil.png", "/Node Sale-Alpha Goats Sale.png"],
      },
    ]
  },
}
