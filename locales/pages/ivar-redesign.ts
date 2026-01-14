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
  back: "Back",
  sections: {
    discovery: "Discovery",
    siteMap: "Site Map",
    systemStatus: "System Status",
    designSystem: "Design System",
  },
  hero: ivarRedesignHero,
  projectOverview: {
    title: "Project Overview",
    overview: {
      title: "01 Overview",
      content: "This project aimed to deeply integrate the standalone surveillance software (IVAR) with the remote management system (IVARM) into a unified, web-based management platform.",
    },
    timeline: {
      title: "02 Timeline",
      content: "3-6 months. Scope included user research, information architecture restructuring, and UI/UX design implementation.",
    },
    coreTasks: {
      title: "03 Core Tasks",
      content: "Integrate dual-system experience, restructure navigation architecture, and establish a Material-UI based design system.",
    },
    painPoints: {
      title: "04 Pain Points Solved",
      content: "Reduced cognitive load from multi-system switching and optimized visual space utilization on laptop screens.",
    },
  },
  discovery: {
    title: "Discovery & Insights",
    subsections: [
      {
        title: "Dual System Integration Challenge",
        content: "Previously, IVAR and IVARM had overlapping features with confusing switching logic. Through user research, we defined four default roles, shifting the product logic from \"system-oriented\" to \"Role-Based Access Control (RBAC)\", ensuring users at different levels (e.g., guards, system administrators) only need to focus on features relevant to their responsibilities.",
      },
      {
        title: "Optimizing Layout to Enhance Surveillance View",
        content: "Observation showed that stakeholders primarily operate on 13-15\" laptops, where the legacy top navigation excessively compressed the 16:9 surveillance feeds. We transitioned to a **collapsible side navigation**, which not only reclaimed critical vertical screen real estate for live monitoring but also provided superior scalability for multi-level menus, ensuring a focused and extensible user experience.",
      },
    ],
  },
  siteMap: {
    title: "Site Map & User Flow",
    subsections: [
      {
        title: "Feature Mapping & Integration Evolution",
        content: "To optimize user experience, we conducted a comprehensive feature review of IVARM and IVAR V1.9. Through modular mapping—such as consolidating \"Channel Overview\" into a unified \"Dashboard\" and streamlining system settings paths—we established a leaner, more intuitive architecture for IVAR V2.0, significantly reducing operational complexity.",
        image: "/portfolio/ivar/IVAR2Flow.png",
        imageCaption: "Feature Evolution Matrix: From Multi-System Parallel to Unified Architecture",
      },
      {
        title: "Reduce Navigation, Optimize Surveillance Path",
        content: "Based on empathy maps and engineering recommendations, we restructured the site map. Taking the \"Guard\" role as an example, we simplified their workflow to ensure they can stay on the viewing page after login, significantly reducing unnecessary page switches.",
      },
      {
        title: "Guided Initialization (Onboarding)",
        content: "For security products with high-barrier setup processes, we designed an \"Initialization Wizard\" that breaks down complex configurations into four intuitive steps:",
        items: [
          { label: "Security Hardening", description: "Admin password setup" },
          { label: "Compliance Verification", description: "Software licensing" },
          { label: "Information Sync", description: "IVAR device information linking" },
          { label: "Hardware Check", description: "Storage space configuration" },
        ],
      },
    ],
  },
  systemStatus: {
    title: "System Status & Dashboard",
    subsections: [
      {
        title: "Dashboard Design: Key to Management Decisions",
        content: "We designed a comprehensive dashboard for administrators, enabling them to assess system health and recording status at a glance upon login.",
      },
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
    content: "In the past, simply delivering annotated specs often led to communication gaps. I switched to collaborating with the engineering team using \"feature-oriented flow diagrams.\" These diagrams guide development by detailing interaction specifics and dynamic effects, significantly reducing back-and-forth between design and development.",
  },
}

export const ivarRedesignZh = {
  title: "監控攝影機管理系統",
  back: "返回",
  sections: {
    discovery: "探索與洞察",
    siteMap: "架構重構",
    systemStatus: "系統狀態",
    designSystem: "設計系統",
  },
  hero: ivarRedesignHero,
  projectOverview: {
    title: "專案概覽",
    overview: {
      title: "01 概覽",
      content: "本專案目標是將原本獨立運作的單機監控軟體 (IVAR) 與遠端管理系統 (IVARM) 進行深度整合，打造一站式 Web 化管理平台。",
    },
    timeline: {
      title: "02 時程",
      content: "3~6個月。範圍包含使用者研究、資訊架構重構、工具研究，以及 UI/UX 設計實作。",
    },
    coreTasks: {
      title: "03 核心任務",
      content: "整合雙系統體驗、重構導覽架構、建立基於 Material-UI 的設計系統。",
    },
    painPoints: {
      title: "04 解決痛點",
      content: "降低使用者在多系統切換間的認知負荷，並優化在筆記型電腦上的視覺空間利用率。",
    },
  },
  discovery: {
    title: "探索與洞察",
    subsections: [
      {
        title: "雙系統整合的挑戰",
        content: "過去 IVAR 與 IVARM 兩者功能重疊且切換邏輯混亂。我們透過使用者研究定義了四種預設角色，將產品邏輯從「系統導向」轉為「角色權限導向 (RBAC)」，確保不同階層的使用者（如：警衛、系統管理員）只需專注於其職責相關的功能。",
      },
      {
        title: "優化佈局以提升監控視野",
        content: "我們觀察到業主多使用 13-15 吋筆記型電腦操作，原有的頂部選單嚴重壓迫了 16:9 的監控視窗。因此，我們改採**左側收納式導覽**，在釋放垂直視覺空間、提升監控專注度的同時，也優化了多層級選單的擴充性，解決了功能增加時的排版困境。",
      },
    ],
  },
  siteMap: {
    title: "架構重構",
    subsections: [
      {
        title: "功能映射與整合演進",
        content: "為了優化使用者體驗，我們針對 IVARM 與 IVAR V1.9 進行了全面的功能審查。透過模組化映射——例如將「頻道總覽」整合為統一的「儀表板」，並精簡系統設定路徑——我們為 IVAR V2.0 建立了更精簡、直覺的架構，從而大幅降低操作複雜度。",
        image: "/portfolio/ivar/IVAR2Flow.png",
        imageCaption: "功能演進矩陣：從多系統併行到單一整合架構",
      },
      {
        title: "減少跳轉，優化監控路徑",
        content: "根據同理心地圖與工程開發建議，我們重構了網站地圖。以「警衛」角色為例，我們將其流程簡化，確保其登入後能常駐於檢視頁面，大幅減少不必要的頁面切換。",
      },
      {
        title: "引導式初始化 (Onboarding)",
        content: "針對安全性產品高門檻的設定流程，我們設計了「初始化精靈」，將複雜的設定拆解為四個直覺步驟：",
        items: [
          { label: "安全強化", description: "管理員密碼設定" },
          { label: "合規驗證", description: "軟體授權" },
          { label: "資訊同步", description: "IVAR 裝置資訊連結" },
          { label: "硬體檢查", description: "儲存空間配置" },
        ],
      },
    ],
  },
  systemStatus: {
    title: "系統反饋與狀態",
    subsections: [
      {
        title: "儀表板設計：管理決策的關鍵",
        content: "我們為管理員設計了全方位的儀表板（Dashboard），讓其在登入首頁時即可一眼判別系統健康度與錄影狀態。",
      },
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
