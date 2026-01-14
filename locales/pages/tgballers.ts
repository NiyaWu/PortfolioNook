// Shared hero data (no translation needed)
const tgballersHero = {
  duration: "2024",
  role: "Visual Design · Technical Research · AI Integration",
  company: "Impossible Finance",
  platforms: "Telegram",
}

export const tgballersEn = {
  title: "TGBALLERS",
  back: "Back",
  sections: {
    requirements: "Requirements",
    technical: "Technical",
    aiCollaboration: "AI Collaboration",
    impact: "Impact",
  },
  hero: tgballersHero,
  projectOverview: {
    title: "Project Overview",
    overview: {
      title: "01 Overview",
      content: "To showcase the company's development capabilities at TOKEN2049 Singapore, we needed to deploy a project on the TON blockchain within a tight timeframe. This interactive game served as a promotional medium to demonstrate our development agility and technical flexibility.",
    },
    timeline: {
      title: "02 Timeline",
      content: "The project required a launch within one week. To save time for backend development, I utilized the first 3 days to finalize functional logic and visual interfaces, ensuring a precise scope to minimize subsequent revisions.",
    },
    coreTasks: {
      title: "03 Core Tasks",
      content: "I integrated design, technology, and AI resources: utilizing flowcharts to synchronize development, researching source code to overcome rendering limitations, and implementing a visual iteration workflow through AI tools.",
    },
    painPoints: {
      title: "04 Pain Points Solved",
      content: "I overcame the limitation where the original engine only supported flat color rendering. By proactively modifying the rendering code and integrating AI-generated assets, I enhanced the visual presentation under resource constraints.",
    },
  },
  contentSections: [
    {
      id: "requirements",
      title: "Requirement Convergence & Flow Definition",
      content: "At the onset of the TOKEN2049 project, our sole PM was dedicated to the main product line, leaving this project to proceed without PM assistance amidst a fully remote team. Facing fragmented discussions within Telegram channels, I proactively took on the role of requirement integrator, transforming scattered functional ideas into a comprehensive flowchart with defined data fields and logic states. This document served as the \"single source of truth,\" ensuring the team finalized specifications within the first 3 days and minimizing subsequent revisions.",
      image: "/portfolio/tgballers/TGBall-FlowChart.png",
      imagePosition: "bottom",
    },
    {
      id: "technical",
      title: "Technical Intervention & Rendering Breakthrough",
      content: "The original game engine was limited to basic color-code rendering, severely restricting visual expression. As engineers were preoccupied with on-chain development, I proactively researched the source code and collaborated with ChatGPT to modify the rendering logic, successfully implementing texture mapping support. This technical intervention broke through the underlying constraints, enabling the use of high-quality assets and elevating the product from a simple tool to an event-grade visual experience.",
      image: "/portfolio/tgballers/ChangeBg.png",
    },
    {
      id: "aiCollaboration",
      title: "AI Collaboration & Texture Logic Application",
      content: "Under extreme time and resource constraints, I established an AI-driven design workflow using Midjourney and Freepik to rapidly produce diverse visual options. Leveraging my understanding of 3D texture mapping, I used checkerboard patterns to infer the object's UV layout, ensuring that AI-generated assets were precisely mapped onto the models for enhanced detail and depth. This workflow enabled high-frequency visual iterations within a tight timeframe, successfully delivering visuals that exceeded expectations without increasing the development workload.",
      image: "/portfolio/tgballers/3D.png",
      imagePosition: "bottom",
    },
    {
      id: "impact",
      title: "Practicing Autonomous Management and Technical Empowerment",
      content: "I successfully completed the majority of the UI implementation within 72 hours, significantly reducing potential adjustment costs during the subsequent development phases. This experience strengthened my autonomous project management skills in an environment without PM support and characterized by fragmented communication. It further proved that by understanding technical logic and collaborating with AI tools, designers can effectively break through development bottlenecks and enhance output quality under extreme resource constraints.\n\nReflecting on this project, I initially attempted to challenge myself with a completely original design style. However, under extreme time pressure, I realized that the margin for error was slim and the cost of revisions was too high, making it difficult to perform major adjustments to visual details in the later stages. In future ultra-short-term challenges, I will be better equipped to evaluate the balance between technical feasibility and design style, prioritizing strategies that offer both visual appeal and developmental safety.",
    },
  ],
}

export const tgballersZh = {
  title: "TGBALLERS",
  back: "返回",
  sections: {
    requirements: "需求收斂",
    technical: "技術介入",
    aiCollaboration: "AI 協作",
    impact: "成果與學習",
  },
  hero: tgballersHero,
  projectOverview: {
    title: "專案概覽",
    overview: {
      title: "01 專案概覽",
      content: "公司為在 TOKEN2049 Singapore 活動中展示開發實力，需在極短時間內於 TON 鏈產出專案。本計畫透過開發這款互動遊戲，作為呈現公司開發動能與技術靈活性的宣傳媒介。",
    },
    timeline: {
      title: "02 時程",
      content: "專案需在一週內完成上架。為了替後端開發爭取時間，我把握前 3 天確立功能邏輯與視覺介面，力求精準定案以降低後續調整幅度。",
    },
    coreTasks: {
      title: "03 核心任務",
      content: "整合設計、技術與 AI 資源：利用流程圖同步開發進度、研究原始碼突破渲染限制，並透過 AI 工具實現視覺迭代。",
    },
    painPoints: {
      title: "04 解決痛點",
      content: "解決原始引擎僅支援「單色渲染」的限制。我主動修改渲染代碼並導入 AI 素材，在資源限制下提升產品的視覺表現。",
    },
  },
  contentSections: [
    {
      id: "requirements",
      title: "背景與問題 - 需求收斂",
      content: "在 TOKEN2049 專案啟動初期，由於唯一一名 PM 需專注於主產品線，本計畫在無 PM 協助且全員遠端作業的情況下進行。面對 Telegram 頻道中極度發散且零碎的對話資訊，我主動承擔需求整合角色，將聊天記錄中的功能構想轉化為具備資料欄位與邏輯狀態的流程圖。這份文件成為團隊開發的唯一準則，確保設計與後端能在首 3 天鎖定規格，極小化後續的修改幅度。",
      image: "/portfolio/tgballers/TGBall-FlowChart.png",
      imagePosition: "bottom",
    },
    {
      id: "technical",
      title: "解決方案 - 技術介入與渲染突破",
      content: "面對原始遊戲引擎僅支援基礎色碼渲染（Color Code）的限制，視覺表現力受到技術框架的極大束縛。在工程師忙於鏈上開發而無暇優化前端的困境下，我主動研究原始碼並利用 ChatGPT 協作修改渲染邏輯，成功導入圖片貼圖功能。此舉從底層突破了技術瓶頸，讓高品質素材的導入成為可能，將產品從簡易工具提升至活動展示級別的視覺體驗。",
      image: "/portfolio/tgballers/ChangeBg.png",
    },
    {
      id: "aiCollaboration",
      title: "設計實作 - AI 協作與貼圖邏輯應用",
      content: "在極短時程與資源限制下，我整合 Midjourney 與 Freepik 建立 AI 驅動的設計工作流，快速產出多樣化的視覺方案。憑藉對 3D 物件貼圖邏輯的理解，我利用黑白網格（Checkerboard Pattern）推測物件的 UV 佈局，藉此確保 AI 生成的素材能精準對應至模型中，實現更具層次感的細節表現。這種工作模式讓我在有限時間內實現了高頻率的視覺迭代，在不增加開發負擔的前提下，成功交付了超出預期的視覺畫面。",
      image: "/portfolio/tgballers/3D.png",
      imagePosition: "bottom",
    },
    {
      id: "impact",
      title: "成果與學習 - 自主管理與技術賦能的實踐",
      content: "最終在 72 小時內完成了絕大部分的 UI 實作，極大化地減少了後續開發期的調整成本。這次經驗強化了我在無 PM 與發散溝通環境下的自主專案管理能力，並證明設計師透過理解技術邏輯與 AI 工具協作，能有效打破開發瓶頸，在極限資源下提升產出品質。\n\n反思本次專案，最初曾嘗試挑戰完全原創的設計風格，但在極端的時間壓力下，發現該風格的容錯率與修改成本過高，導致後期難以針對視覺細節進行大幅度調整。未來面對類似的超短時程挑戰，我將能更準確地評估技術與設計風格之間的平衡點，優先選擇兼具視覺吸引力與開發安全性的策略。",
    },
  ],
}
