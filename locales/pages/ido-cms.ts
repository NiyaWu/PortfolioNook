const idoCmsHeroBase = {
  duration: "2021 - 2025",
  company: "Impossible Finance",
}

export const idoCmsEn = {
  title: "IDO Launch & Participation Redesign",
  back: "Back",
  metaLabels: { period: "Period", role: "Role", company: "Company" },
  sections: {
    background: "Users & Problem",
    solution: "Design Goal",
    design: "Key Decisions",
    userResearch: "Validation & Iteration",
    outcome: "Impact",
  },
  hero: { ...idoCmsHeroBase, role: "Product Designer" },
  impactStatement: "I redesigned both sides of token launches: consolidating a fragmented, developer-dependent setup process into a CMS that internal operators could use independently—and that could later support project-team self-service—while reorganizing the IDO frontend around projects so customers could understand offerings, compare sale conditions, and participate with greater clarity.",
  projectOverview: {
    title: "Project Overview",
    overview: {
      title: "Project Goal",
      content: "Create one connected launch experience across the CMS used by operators and project teams, and the IDO frontend used by customers evaluating and joining token sales.",
    },
    timeline: {
      title: "Core Challenge",
      content: "Translate complex sale rules and token flows into accurate setup steps for operators and an understandable participation path for customers.",
    },
    challenge: {
      title: "My Role",
      content: "Requirements mapping, information architecture, launch flow, interaction and UI design, prototype validation, and design QA.",
    },
    outcome: {
      title: "Outcome",
      content: "Operators gained a guided setup workflow, while customers received a clearer project-first path for understanding and joining a sale.",
    },
  },
  background: {
    title: "Two Sides of the Launch Experience",
    intro: "Impossible Finance is a Web3 launchpad. Every launch connects the people configuring a sale with the customers evaluating and joining it, so the CMS and IDO frontend had to be designed as two sides of the same product.",
    audiences: [
      {
        label: "CMS",
        title: "Internal operators → future project teams",
        content: "Internal teammates currently configure projects and sales. The longer-term direction is to let project teams manage their own launches, so the workflow must reduce technical dependence rather than assume internal knowledge.",
      },
      {
        label: "IDO frontend",
        title: "General customers",
        content: "Customers browse projects, compare sale conditions, decide whether to participate, and later return to manage their allocation or vesting.",
      },
    ],
    journey: {
      title: "From Setup to Participation",
      challengeLabel: "Main breakdowns",
      challengeItemLabel: "Breakdown",
      lanes: [
        {
          label: "CMS",
          audience: "Internal operators / future project teams",
          steps: ["Organize project details\nCreate project", "Define participation rules\nCreate sale", "Review frontend content\nPreview & publish"],
        },
        {
          label: "IDO frontend",
          audience: "Customers",
          steps: ["Explore and compare\nprojects", "Stake\nvesting tokens", "Purchase\nsale tokens", "Withdraw\nvesting tokens", "Claim allocation\nsale tokens"],
        },
      ],
    },
    challengeIntro: "Across these two experiences, the journey broke down in five places:",
    challenges: [
      {
        title: "Information was fragmented",
        content: "Project content, contract details, sale rules, and page settings lived across different websites and conversations. Operators had to reconstruct the full picture for every launch.",
      },
      {
        title: "Sale logic was difficult to translate",
        content: "Different fundraising models required different fields and dependencies. Showing every setting at once would only move technical complexity onto non-technical teammates.",
      },
      {
        title: "Customers saw sales, not complete projects",
        content: "A project with multiple sale types appeared as repeated entries, making the frontend harder to scan and forcing customers to guess which sale to open.",
      },
      {
        title: "Participation details lacked hierarchy",
        content: "On smaller screens, timing and eligibility competed with supporting content, making it harder for customers to confirm the conditions before joining a sale.",
      },
      {
        title: "Stage information was difficult to track",
        content: "Staking, purchase, withdrawal, and claim status and timing were not clearly organized in the existing frontend. Customers struggled to tell what stage they were in, when to return, and what to do next.",
      },
    ],
    goal: "The CMS and frontend therefore needed separate user flows but a shared information model: launch teams define the project and sale once, while customers receive that information in a structure designed for participation decisions.",
  },
  solution: {
    title: "Design Goal",
    content: "Create one connected launch system: enable internal operators—and eventually project teams—to configure a sale without routine engineering support, then translate those settings into a frontend that helps customers understand and participate.",
    principles: [
      { title: "One guided path", content: "Bring scattered settings into a clear sequence with visible completion rules." },
      { title: "Complexity only when relevant", content: "Reveal sale-specific fields only when the selected model requires them." },
      { title: "Connect both experiences", content: "Make CMS inputs map clearly to the information customers see and use on the frontend." },
    ],
  },
  design: {
    title: "Key Design Decisions",
    content: "Each decision connects a specific user obstacle to a design response and a change in what the user could do.",
    comparison: {
      before: "V1 · Sale-first",
      after: "V2 · Project-first",
      beforeAlt: "Sale-first page layout",
      afterAlt: "Project-first page containing multiple sale pools",
      ariaLabel: "Compare the sale-first and project-first layouts",
    },
    labels: {
      problem: "User obstacle",
      decision: "Design decision",
      userChange: "What changed for the user",
    },
    decisions: [
      {
        title: "01 — Turn scattered setup into a guided flow",
        problem: "Operators collected information from several sources and repeatedly asked which fields applied to the current sale type.",
        decision: "I placed shared settings first, then revealed conditional fields only when the selected sale model required them. Required-field checks and in-context guidance connected CMS inputs to the public output.",
        userChange: "Operators could focus on the current decision and continue without holding the whole technical model in their heads.",
        image: "/Sale-Dialog.png",
        imageCaption: "Relevant settings appear progressively, with completion requirements made visible.",
      },
      {
        title: "02 — Make recurring operations predictable",
        problem: "Similar tasks used inconsistent fields, states, and interactions across separate pages.",
        decision: "I audited recurring fields and states, then organized them into reusable Material UI-based patterns with consistent interaction rules.",
        userChange: "Once operators learned one pattern, they could reuse the same mental model elsewhere; engineers also received clearer specifications.",
        image: "/IF-CMS.png",
        imageCaption: "Reusable patterns keep comparable setup tasks consistent across the CMS.",
      },
      {
        title: "03 — Organize the public experience around projects",
        problem: "A project with multiple sale types appeared repeatedly in the listing, forcing investors to guess which entry to open.",
        decision: "I made Project the top-level container and placed its sale types inside the project page, with key sale information surfaced at the point of decision.",
        userChange: "Investors could understand one project first, then choose the relevant sale instead of comparing duplicate cards.",
        imageCaption: "Drag to compare the original sale-centric listing with the project-centric structure.",
      },
      {
        title: "04 — Prioritize decision-critical information on mobile",
        problem: "Key sale details competed for limited space, making timing and participation requirements difficult to confirm.",
        decision: "I reorganized the responsive hierarchy around the information investors needed before joining a sale.",
        userChange: "Investors could confirm essential conditions earlier without searching through a dense page.",
        image: "/Sale-Card.png",
        imageCaption: "The responsive hierarchy brings decision-critical sale information forward.",
      },
    ],
  },
  userResearch: {
    title: "Validation & Iteration",
    details: [
      { title: "Validation question", content: "Could someone seeing the Token Sale flow for the first time understand the steps and complete the assigned setup task?" },
      { title: "Method", content: "I shared an interactive prototype through Google Forms and collected comprehension answers and open-ended feedback." },
      { title: "Design iteration", content: "I regrouped related settings on the same page and clarified the step order, reducing the need to stop and re-check earlier decisions." },
    ],
    videoCaption: "Interactive prototype used to validate the launch-setup flow",
  },
  outcome: {
    title: "Impact",
    items: [
      {
        title: "For CMS users: an independent, repeatable workflow",
        content: "The CMS replaced a developer-dependent setup process with a workflow internal teammates could operate themselves. Launch setup fell from days to hours and supported **more than 20 token launches**. Its guided structure also established the foundation for future project-team self-service; that external use remains a product direction rather than a measured outcome.",
        image: "/Projects/Project_Sale Contract_Empty.png",
        imageCaption: "Payment, pricing, supply, and sale period are completed in one structured setup page.",
      },
      {
        title: "For the business: a reusable white-label foundation",
        content: "By keeping the core information architecture and interaction flow stable while making brand assets replaceable, a client-branded version could be prepared in one to two days.",
        images: ["/Node Sale-Moonveil.png", "/Node Sale-Alpha Goats Sale.png"],
        imageCaption: "The same product structure adapted for Moonveil and Alpha Goats.",
      },
      {
        title: "For new investors: clearer first-visit orientation",
        content: "After observing that Telegram referrals could drop people into the product without context, I proposed a first-visit guide to explain Explore, Manage, and Vesting and give them a clear next step.",
        image: "/IF-FirstVisit.png",
        imageCaption: "First-visit guidance gives social referrals immediate context.",
      },
    ],
  },
}

export const idoCmsZh = {
  title: "IDO 發行與參與體驗重構",
  back: "返回",
  metaLabels: { period: "期間", role: "角色", company: "公司" },
  sections: {
    background: "使用者與問題",
    solution: "設計目標",
    design: "關鍵設計決策",
    userResearch: "驗證與迭代",
    outcome: "影響與成果",
  },
  hero: { ...idoCmsHeroBase, role: "產品設計師" },
  impactStatement: "我重新設計代幣發行的兩端體驗：將原本分散、仰賴工程師的設定流程整合成 CMS，讓內部營運人員能獨立完成上架，也為未來專案方自行管理發行建立基礎；前台則改以 Project 組織不同 Sale，幫助一般客戶更清楚地理解項目、比較條件並完成參與。",
  projectOverview: {
    title: "專案概覽",
    overview: {
      title: "專案目標",
      content: "串連營運人員與專案方使用的 CMS，以及一般客戶評估並參與 Token Sale 的 IDO 前台，形成一致的發行體驗。",
    },
    timeline: {
      title: "核心挑戰",
      content: "將複雜的 Sale 規則與 Token 流程，轉化為營運端能正確設定、客戶端也能理解並完成參與的操作路徑。",
    },
    challenge: {
      title: "我的角色",
      content: "負責需求梳理、資訊架構、上架流程、互動與 UI 設計、原型驗證，以及 Design QA。",
    },
    outcome: {
      title: "成果",
      content: "營運人員獲得引導式上架流程；一般客戶則能從項目出發，更清楚地理解並選擇 Sale。",
    },
  },
  background: {
    title: "發行體驗的兩個端點",
    intro: "Impossible Finance 是 Web3 Launchpad。每次發行都同時連結設定 Sale 的發行端，以及評估並參與 Sale 的一般客戶，因此 CMS 與 IDO 前台是同一產品的兩條使用者體驗。",
    audiences: [
      {
        label: "CMS",
        title: "內部營運人員 → 未來專案方",
        content: "目前由內部人員設定項目與 Sale；長期方向則是讓專案方自行管理發行，因此流程不能依賴內部經驗，而要真正降低技術門檻。",
      },
      {
        label: "IDO 前台",
        title: "一般客戶",
        content: "客戶瀏覽項目、比較 Sale 條件、判斷是否參與，之後再回到平台管理購買額度或 Vesting。",
      },
    ],
    journey: {
      title: "從設定到參與",
      challengeLabel: "主要斷點",
      challengeItemLabel: "斷點",
      lanes: [
        {
          label: "CMS",
          audience: "內部營運人員／未來專案方",
          steps: ["整理項目資料\n建立 Project", "設定參與規則\n建立 Sale", "確認前台內容\n預覽並發布"],
        },
        {
          label: "IDO 前台",
          audience: "一般客戶",
          steps: ["探索並比較\n項目", "投入\nVest Token", "依規則購買\nSale Token", "期滿取回\nVest Token", "查看額度並 Claim\nSale Token"],
        },
      ],
    },
    challengeIntro: "兩條體驗中共有五個主要斷點：",
    challenges: [
      {
        title: "資訊分散",
        content: "專案內容、合約資料、Sale 規則與頁面設定分散在不同網站與對話中。營運同事每次上架都必須重新拼湊完整資訊。",
      },
      {
        title: "發行邏輯難以轉換",
        content: "不同募資模式需要不同欄位與條件。若一次顯示所有設定，只是把技術複雜度轉嫁給非技術同事。",
      },
      {
        title: "一般客戶看到 Sale，卻看不清完整項目",
        content: "同一項目若有多種 Sale，前台會重複出現多個入口，客戶不易快速瀏覽，也必須猜測該進入哪一個。",
      },
      {
        title: "參與前的關鍵資訊缺乏層級",
        content: "在小螢幕上，時程、資格等必要資訊與次要內容互相競爭，客戶不容易在參與 Sale 前快速確認條件。",
      },
      {
        title: "各階段資訊難以追蹤",
        content: "現有前台未清楚整理投入、購買、取回與 Claim 的狀態和時間。客戶不容易判斷目前階段、何時需要回來，以及下一步該做什麼。",
      },
    ],
    goal: "CMS 與前台需要各自服務不同任務，但共享同一套資訊模型：發行端只需正確定義一次項目與 Sale，客戶端則以適合參與決策的方式接收這些資訊。",
  },
  solution: {
    title: "設計目標",
    content: "建立一套相互連動的發行系統：讓內部人員，以及未來的專案方，不需例行工程協助即可設定 Sale；再將設定結果轉換成一般客戶容易理解與參與的前台體驗。",
    principles: [
      { title: "一條清楚的引導路徑", content: "把分散設定收進有進度、有完成條件的連續流程。" },
      { title: "只在需要時顯示複雜度", content: "依照選擇的 Sale 模式呈現相關專屬設定。" },
      { title: "串連兩端體驗", content: "讓 CMS 輸入清楚對應到一般客戶在前台看見並用來判斷的資訊。" },
    ],
  },
  design: {
    title: "關鍵設計決策",
    content: "每項決策都從具體的使用者阻礙出發，說明設計回應，以及使用者因此能做到什麼。",
    comparison: {
      before: "V1 · 以 Sale 為主",
      after: "V2 · 以項目為主",
      beforeAlt: "以 Sale 為主的舊版頁面",
      afterAlt: "整合多個 Sale 的項目頁面",
      ariaLabel: "比較以 Sale 與以項目為主的兩種版面",
    },
    labels: {
      problem: "使用者阻礙",
      decision: "設計決策",
      userChange: "使用者因此能做到什麼",
    },
    decisions: [
      {
        title: "01 — 將分散設定整理成引導式流程",
        problem: "營運同事必須從多個來源蒐集資訊，也要反覆確認目前的 Sale 類型適用哪些欄位。",
        decision: "我先放置所有 Sale 共用的設定，再依選擇的模式逐步顯示條件式欄位；透過必填檢查與脈絡提示，連結 CMS 輸入和前台結果。",
        userChange: "操作者每次只需處理當下相關的決定，不必把整套技術邏輯記在腦中。",
        image: "/Sale-Dialog.png",
        imageCaption: "依情境逐步顯示設定，並清楚呈現完成條件。",
      },
      {
        title: "02 — 讓重複操作具有一致規則",
        problem: "相似任務散落在不同頁面，欄位、狀態與操作方式不一致。",
        decision: "我盤點重複欄位與狀態，再以 Material UI 為基礎整理成可重複使用的設計模式與互動規則。",
        userChange: "營運同事學會一種操作後，可沿用相同理解完成其他設定；工程師也能依循更一致的規格實作。",
        image: "/IF-CMS.png",
        imageCaption: "以重複使用的模式維持不同 CMS 設定任務的一致性。",
      },
      {
        title: "03 — 前台改以 Project 組織不同 Sale",
        problem: "同一項目若有多種 Sale，首頁會重複出現多張入口，投資人必須猜測該進入哪一個。",
        decision: "我將 Project 設為頂層容器，再把不同 Sale 收納在項目頁內，並在決策位置呈現關鍵 Sale 資訊。",
        userChange: "投資人能先從一個入口理解項目，再選擇相關 Sale，不必比較多張重複卡片。",
        imageCaption: "拖曳比較原本以 Sale 為單位的列表，以及改以 Project 為核心的架構。",
      },
      {
        title: "04 — 在行動版優先呈現決策資訊",
        problem: "重要 Sale 資料與次要內容競爭有限空間，投資人不容易快速確認時程與參與條件。",
        decision: "我依照投資人參與前需要確認的資訊，重新安排響應式頁面的內容層級。",
        userChange: "投資人能更早確認必要條件，不必在高密度頁面中反覆尋找。",
        image: "/Sale-Card.png",
        imageCaption: "行動版優先呈現會影響參與決策的 Sale 資訊。",
      },
    ],
  },
  userResearch: {
    title: "驗證與迭代",
    details: [
      { title: "驗證問題", content: "首次接觸 Token Sale 建立流程的人，能否理解步驟並完成指定設定？" },
      { title: "方法", content: "我透過 Google Form 遠端提供互動 Prototype，同時蒐集理解題答案與開放式回覆。" },
      { title: "設計調整", content: "我將相關設定收在同一頁，並重新安排步驟順序，減少操作者反覆回頭確認的負擔。" },
    ],
    videoCaption: "用於驗證上架設定流程的互動原型",
  },
  outcome: {
    title: "影響與成果",
    items: [
      {
        title: "對 CMS 使用者：建立可獨立、重複執行的流程",
        content: "CMS 將原本仰賴工程師的設定流程，轉為內部營運同事可自行操作的工作。上架時間從數天縮短至數小時，並支援**超過 20 次代幣發行**。引導式架構也為未來專案方自行操作建立基礎；這仍是產品方向，不列為已驗證成果。",
        image: "/Projects/Project_Sale Contract_Empty.png",
        imageCaption: "付款方式、價格與供給、銷售期間集中在同一個設定頁完成。",
      },
      {
        title: "對業務：成為可重複使用的 White-label 基礎",
        content: "核心資訊架構與互動流程維持一致，品牌素材則可替換，因此客戶品牌版本能在一至兩天內準備完成。",
        images: ["/Node Sale-Moonveil.png", "/Node Sale-Alpha Goats Sale.png"],
        imageCaption: "同一套產品架構分別套用於 Moonveil 與 Alpha Goats。",
      },
      {
        title: "對新投資人：補足首次造訪脈絡",
        content: "我觀察到 Telegram 推薦連結可能讓使用者在缺乏脈絡的情況下直接進入產品，因此主動提案加入首次造訪引導，說明 Explore、Manage 與 Vesting，並提供清楚的下一步。",
        image: "/IF-FirstVisit.png",
        imageCaption: "首次造訪引導讓社群導入的使用者立即理解產品。",
      },
    ],
  },
}
