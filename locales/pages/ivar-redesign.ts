// Shared hero data (no translation needed)
const ivarRedesignHero = {
  duration: "2020",
  role: "UI / UX / Tool Research",
  company: "Gorilla Technology",
  platforms: "Web",
  deliverables: "Design and Interaction",
}

export const ivarRedesignEn = {
  title: "Surveillance Camera Management",
  subtitle: "I unified two overlapping surveillance products into a role-based web platform, helping guards stay focused on monitoring while administrators could understand device and system status from one place.",
  back: "Back",
  sections: {
    discovery: "Users & Problem",
    siteMap: "Site Map",
    systemStatus: "System Status",
    designSystem: "Design System",
    collaboration: "Collaboration & Delivery",
  },
  hero: ivarRedesignHero,
  projectOverview: {
    title: "Project Overview",
    overview: {
      title: "Project Goal",
      content: "Unify IVAR and IVARM into one role-based web platform for guards, system administrators, and operations staff.",
    },
    timeline: {
      title: "Core Challenge",
      content: "Functions and entry points were fragmented across two systems, permissions were complex, and live monitoring could not be interrupted by navigation or configuration tasks.",
    },
    coreTasks: {
      title: "My Role",
      content: "Usage-scenario synthesis, information architecture, task flows, interface design, MUI component specifications, and engineering handoff.",
    },
    painPoints: {
      title: "Outcome",
      content: "Guards could remain focused on live monitoring, while administrators gained one place to understand device, recording, and system status.",
    },
  },
  discovery: {
    title: "Users & Problem",
    comicCaptions: [
      "Work was split across two systems",
      "A coworker requests a new camera",
      "The operator had to guess which system to use",
    ],
    subsections: [
      {
        title: "Two systems made simple tasks ambiguous",
        content: "To manage a specific camera, operators first had to know which IVAR machine and domain it belonged to. When a coworker asked them to add a new camera channel, they had to switch between IVAR and IVARM and determine which system contained the relevant control.",
      },
    ],
  },
  siteMap: {
    title: "Site Map & User Flow",
    subsections: [
      {
        title: "Reorganizing Pages Around User Scenarios",
        content: "Instead of merging IVAR and IVARM page by page, we reorganized their features around each role's core scenario. This made the new architecture reflect how people actually work—not how the legacy systems were divided.",
        matrixLabels: {
          user: "User",
          scenario: "Core scenario",
          page: "Primary pages",
        },
        roleMatrix: [
          {
            user: "Guard",
            scenario: "Monitor live feeds and respond to incidents",
            pages: ["Live View"],
            source: "IVAR",
          },
          {
            user: "System administrator",
            scenario: "Understand recording, device, and system health",
            pages: ["Dashboard", "System Status"],
            source: "IVAR + IVARM",
          },
          {
            user: "Operations staff",
            scenario: "Add cameras and configure channels or devices",
            pages: ["Devices", "Channel Settings"],
            source: "IVAR + IVARM",
          },
        ],
        roleMappingTitle: "From the Feature Inventory to Role-based Workspaces",
        roleMappingIntro: "After inventorying the functions across IVAR and IVARM, we regrouped them around the core tasks of guards, system administrators, and operations staff. The table below shows each role's primary scenario and the pages that support it in the unified product.",
        roleScreensTitle: "Primary workspace by role",
        roleScreensIntro: "Switch roles to see the main screen each person uses to complete their core task.",
        roleScreens: [
          {
            role: "Guard",
            page: "Live View",
            outcome: "Stay in the monitoring workspace and respond to live incidents without unnecessary navigation.",
            image: "/portfolio/ivar/role-guard-live-view.png",
          },
          {
            role: "System administrator",
            page: "Dashboard",
            outcome: "Review device, recording, event, and system health from one overview.",
            image: "/portfolio/ivar/systemDashboard.png",
          },
          {
            role: "Operations staff",
            page: "IVAR List · Device Settings",
            outcome: "Manage IVAR devices and related settings from a unified workspace.",
            image: "/portfolio/ivar/top-banner-1.png",
          },
        ],
        pageGroupsTitle: "Four core modules in the unified product",
        pageGroups: [
          {
            title: "Dashboard",
            description: "A shared entry point for system health and operational status.",
            pages: ["System Dashboard", "IVA Dashboard", "Advanced Search"],
            users: ["Administrator", "Operations"],
          },
          {
            title: "Live View",
            description: "A persistent workspace for monitoring and handling live feeds.",
            pages: ["Layout", "Channel Overview", "Sequence", "E-map", "Bookmark", "Video Download"],
            users: ["Guard", "Operations"],
          },
          {
            title: "Events",
            description: "A single place to review analysis results and system incidents.",
            pages: ["IVA Events", "System Events", "Subscriptions"],
            users: ["Guard", "Administrator"],
          },
          {
            title: "Settings",
            description: "Centralized device, recording, account, and maintenance configuration.",
            pages: ["IVAR List", "Device List", "Recording Schedule", "Web Setup", "Audit Log", "Maintenance"],
            users: ["Administrator", "Operations"],
          },
        ],
        architectureTitle: "Complete system architecture",
        architectureHint: "Select the diagram to inspect every feature and its legacy-system source.",
        architectureImage: "/portfolio/ivar/IVAR2Flow.png",
      },
      {
        title: "Key Design Decision: Preserve the Monitoring View with Collapsible Navigation",
        content: "Most operators worked on 13–15-inch laptops, where the legacy top navigation compressed the 16:9 surveillance feeds. We moved navigation to a collapsible sidebar so guards could remain in Live View, reclaim vertical space, and accommodate deeper menus without obscuring the monitoring workspace.",
      },
      {
        title: "Guided Initialization (Onboarding)",
        content: "For security products with high-barrier setup processes, we designed an \"Initialization Wizard\" that breaks down complex configurations into four intuitive steps:",
        items: [
          { label: "Admin password setup", description: "Create the credentials used for subsequent administrator access." },
          { label: "Software licensing", description: "Enter the license information and activate the software." },
          { label: "IVAR device linking", description: "Connect the IVAR device and import its device information." },
          { label: "Storage configuration", description: "Select and configure the storage space used by the system." },
        ],
      },
    ],
  },
  systemStatus: {
    title: "System Status & Dashboard",
    subsections: [
      {
        title: "Status Bar Design: Real-time Risk Management",
        content: "Security systems prioritize \"zero downtime.\" We designed a persistent status bar integrating warning lights, remaining disk space, and real-time notifications, ensuring critical indicators remain visible at all times to minimize maintenance risks.",
      },
    ],
  },
  designSystem: {
    title: "Design System & Components",
    subtitle: "Material-UI Based Extension",
    intro: "To balance development efficiency with customization needs, I led the establishment of a MUI-based UI-Kit:",
    items: [
      {
        label: "Visual Hierarchy Enhancement",
        description: "Addressed the insufficient theme layers in original MUI by redefining color depth and information contrast based on surveillance requirements.",
      },
      {
        label: "Component Customization",
        description: "Created specialized components for security scenarios (e.g., multi-split surveillance views, device status labels), and maintained theme files and HTML tag specifications.",
      },
    ],
  },
  flowFile: {
    title: "Collaboration & Delivery",
    content: "Previously, delivering annotated specs alone often led to communication gaps. I shifted to collaborating with engineers through \"feature-oriented flow diagrams\" that detail interaction specifics and dynamic behaviors, significantly reducing back-and-forth between design and development.",
  },
}

export const ivarRedesignZh = {
  title: "監控攝影機管理系統",
  subtitle: "將功能重疊的 IVAR 與 IVARM 整合為角色導向的 Web 管理平台，讓警衛專注監看，管理員也能從單一入口掌握設備與系統狀態。",
  back: "返回",
  sections: {
    discovery: "使用者與問題",
    siteMap: "架構重構",
    systemStatus: "系統狀態",
    designSystem: "設計系統",
    collaboration: "協作與交付",
  },
  hero: ivarRedesignHero,
  projectOverview: {
    title: "專案概覽",
    overview: {
      title: "專案目標",
      content: "將功能重疊的 IVAR 與 IVARM 整合為單一角色導向的 Web 管理平台，服務警衛、系統管理員與維運人員。",
    },
    timeline: {
      title: "核心挑戰",
      content: "兩套系統的功能與入口分散、角色權限複雜，同時監看工作又不能因導覽或設定流程而中斷。",
    },
    coreTasks: {
      title: "我的角色",
      content: "使用情境整理、資訊架構、操作流程、介面設計、MUI 元件規格與工程交付。",
    },
    painPoints: {
      title: "成果",
      content: "警衛能留在監看頁面；管理員能從單一入口掌握設備、錄影與系統狀態。",
    },
  },
  discovery: {
    title: "使用者與問題",
    comicCaptions: [
      "工作分散在兩套系統",
      "同事交辦新增攝影機",
      "操作人員無法判斷該使用哪套系統",
    ],
    subsections: [
      {
        title: "兩套系統讓簡單任務產生歧義",
        content: "使用者若要管理特定攝影機，必須先知道它屬於哪台 IVAR 主機與哪個網址。當同事交辦新增攝影機頻道等任務時，還要在 IVAR 與 IVARM 之間切換，並判斷功能究竟位於哪套系統。",
      },
    ],
  },
  siteMap: {
    title: "架構重構",
    subsections: [
      {
        title: "依使用情境重組頁面架構",
        content: "我們沒有直接照搬 IVAR 與 IVARM 的既有頁面，而是依照不同角色的核心任務重新分配功能，讓整合後的架構反映實際工作方式，而不是舊系統的切分方式。",
        matrixLabels: {
          user: "使用者",
          scenario: "核心使用情境",
          page: "主要頁面",
        },
        roleMatrix: [
          {
            user: "警衛",
            scenario: "持續監看現場，並在異常發生時立即處理",
            pages: ["Live View"],
            source: "原 IVAR",
          },
          {
            user: "系統管理員",
            scenario: "掌握錄影、設備與整體系統狀態",
            pages: ["Dashboard", "System Status"],
            source: "整合 IVAR + IVARM",
          },
          {
            user: "維運人員",
            scenario: "新增攝影機，並設定頻道與相關設備",
            pages: ["Devices", "Channel Settings"],
            source: "整合 IVAR + IVARM",
          },
        ],
        roleMappingTitle: "從功能架構到角色工作區",
        roleMappingIntro: "先盤點 IVAR 與 IVARM 的全部功能，再依警衛、系統管理員與維運人員的核心任務重新分組。下表呈現每個角色最常使用的情境，以及整合後對應的主要頁面。",
        roleScreensTitle: "不同角色的主要工作畫面",
        roleScreensIntro: "切換角色，查看每位使用者完成核心任務時使用的主要畫面。",
        roleScreens: [
          {
            role: "警衛",
            page: "Live View",
            outcome: "留在監看工作區處理即時狀況，不必在不同頁面之間來回切換。",
            image: "/portfolio/ivar/role-guard-live-view.png",
          },
          {
            role: "系統管理員",
            page: "Dashboard",
            outcome: "從單一總覽掌握設備、錄影、事件與系統健康狀態。",
            image: "/portfolio/ivar/systemDashboard.png",
          },
          {
            role: "維運人員",
            page: "IVAR List · Device Settings",
            outcome: "在統一工作區管理 IVAR 裝置與相關設定。",
            image: "/portfolio/ivar/top-banner-1.png",
          },
        ],
        pageGroupsTitle: "整合後的四個核心模組",
        pageGroups: [
          {
            title: "Dashboard",
            description: "集中呈現系統健康度與營運狀態，作為登入後的共同入口。",
            pages: ["System Dashboard", "IVA Dashboard", "Advanced Search"],
            users: ["系統管理員", "維運人員"],
          },
          {
            title: "Live View",
            description: "提供持續監看與處理即時影像的主要工作區。",
            pages: ["Layout", "Channel Overview", "Sequence", "E-map", "Bookmark", "Video Download"],
            users: ["警衛", "維運人員"],
          },
          {
            title: "Events",
            description: "集中查看影像分析結果與系統異常事件。",
            pages: ["IVA Events", "System Events", "Subscriptions"],
            users: ["警衛", "系統管理員"],
          },
          {
            title: "Settings",
            description: "整合設備、錄影、帳號與維護相關設定。",
            pages: ["IVAR List", "Device List", "Recording Schedule", "Web Setup", "Audit Log", "Maintenance"],
            users: ["系統管理員", "維運人員"],
          },
        ],
        architectureTitle: "完整功能架構",
        architectureHint: "點擊圖表放大，查看所有功能與原系統來源。",
        architectureImage: "/portfolio/ivar/IVAR2Flow.png",
      },
      {
        title: "關鍵設計決策：以收納式側欄保留監控視野",
        content: "多數操作人員使用 13–15 吋筆記型電腦，原有頂部選單會壓縮 16:9 監控畫面。我們將導覽移至可收合的側欄，讓警衛能常駐 Live View、釋放垂直空間，也能容納後續增加的多層級功能。",
      },
      {
        title: "引導式初始化 (Onboarding)",
        content: "針對安全性產品高門檻的設定流程，我們設計了「初始化精靈」，將複雜的設定拆解為四個直覺步驟：",
        items: [
          { label: "管理員密碼設定", description: "建立後續管理員登入所使用的帳號資訊。" },
          { label: "軟體授權", description: "輸入授權資訊並完成軟體啟用。" },
          { label: "IVAR 裝置連結", description: "連結 IVAR 裝置並帶入設備資訊。" },
          { label: "儲存空間配置", description: "選擇並配置系統使用的儲存空間。" },
        ],
      },
    ],
  },
  systemStatus: {
    title: "系統反饋與狀態",
    subsections: [
      {
        title: "狀態列設計：即時風險控管",
        content: "安控系統最重視「系統不中斷」。我們設計了常駐的狀態列（System Status Bar），整合了警示燈號、磁碟剩餘空間與即時通知，確保關鍵指標隨時處於可見狀態，降低維護風險。",
      },
    ],
  },
  designSystem: {
    title: "設計系統建構",
    subtitle: "基於 Material-UI 的擴展",
    intro: "為了兼顧開發效率與客製化需求，我主導建立了基於 MUI 的 UI-Kit：",
    items: [
      {
        label: "視覺層級強化",
        description: "彌補 MUI 原始主題層級不足的問題，根據監控需求重新定義顏色深度與資訊對比。",
      },
      {
        label: "元件客製化",
        description: "針對安控場景製作了專屬元件（如：多分割監控畫面、裝置狀態標籤），並負責維護主題檔案與 HTML 標籤規格。",
      },
    ],
  },
  flowFile: {
    title: "協作與交付",
    content: "過去單純交付標註稿常導致溝通斷層。我改用「功能導向的流程圖」與工程團隊協作，流程圖引導開發，在圖中詳述互動細節與動態效果，減少了設計與開發來回確認時間。",
  },
}
