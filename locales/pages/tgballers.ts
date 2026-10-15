// Shared hero data (no translation needed)
const tgballersHeroBase = {
  duration: "2024",
  company: "Impossible Finance",
  platforms: "Telegram",
}

export const tgballersEn = {
  title: "TGBALLERS",
  subtitle: "Under a one-week deadline and limited resources, I aligned fragmented requirements, removed rendering constraints, and drove a Telegram game to launch.",
  flowchartHint: "Select the flowchart to inspect details.",
  back: "Back",
  metaLabels: { year: "Year", role: "Role", company: "Company", platforms: "Platform" },
  sections: {
    requirements: "Requirements Alignment",
    technical: "Technical Intervention",
    aiCollaboration: "AI Collaboration",
    impact: "Impact & Learnings",
  },
  hero: { ...tgballersHeroBase, role: "Visual Design · Technical Research · AI Integration" },
  projectOverview: {
    title: "Project Overview",
    overview: {
      title: "Project Goal",
      content: "Build and launch a TON-based Telegram game for TOKEN2049 Singapore within one week, demonstrating the team's development speed and technical flexibility.",
    },
    timeline: {
      title: "Core Challenge",
      content: "There was no dedicated PM, discussions were fragmented across a remote team, engineering focused on on-chain work, and the original engine only supported flat-color rendering.",
    },
    coreTasks: {
      title: "My Role",
      content: "I consolidated requirements into a shared flowchart, locked the functional scope, researched the source code, and established a fast asset and texture workflow.",
    },
    painPoints: {
      title: "Outcome",
      content: "The team aligned on specifications in the first 3 days, image textures became available in the game, and most UI implementation was completed within 72 hours for the one-week launch.",
    },
  },
  contentSections: [
    {
      id: "requirements",
      title: "Requirements Alignment",
      headline: "Turning Fragmented Discussions into a Buildable Flow",
      content: "At the onset of the TOKEN2049 project, our sole PM was dedicated to the main product line, leaving this project to proceed without PM assistance amidst a fully remote team. Facing fragmented discussions within Telegram channels, I took on requirement integration and transformed scattered functional ideas into a flowchart with defined data fields and logic states. This became the team's shared implementation reference and reduced ambiguity between design and backend work.",
      image: "/portfolio/tgballers/TGBall-FlowChart.png",
      imagePosition: "bottom",
    },
    {
      id: "technical",
      title: "Technical Intervention",
      headline: "Removing the Engine's Rendering Constraint",
      content: "The original game engine was limited to basic color-code rendering, restricting the visual options. As engineers were focused on on-chain development, I researched the source code and used ChatGPT to help interpret and modify the rendering logic. This added image-texture support so the game could use complete visual assets without waiting for additional engineering resources.",
      image: "/portfolio/tgballers/ChangeBg.png",
    },
    {
      id: "aiCollaboration",
      title: "AI Collaboration",
      headline: "Building a Fast Visual Production Workflow",
      content: "Under tight time and resource constraints, I used Midjourney and Freepik to explore visual options quickly. Drawing on my understanding of 3D texture mapping, I used checkerboard patterns to infer each object's UV layout so the generated assets could map correctly onto the models. This supported rapid iteration without increasing the engineering workload.",
      image: "/portfolio/tgballers/3D.png",
      imagePosition: "bottom",
    },
    {
      id: "impact",
      title: "Impact & Learnings",
      headline: "Turning Constraints into a Shippable Product",
      content: "Without a dedicated PM and with limited engineering resources, I consolidated requirements, investigated the rendering technology, and established a rapid visual workflow. Together, these changes enabled image-texture support and helped the team deliver the event version within one week. The project also expanded my responsibility across requirement alignment, technical communication, and delivery.\n\nIt clarified an important tradeoff: a fully original visual direction can be distinctive, but under an extreme deadline it increases validation and revision costs. In future short-cycle projects, I will assess design ambition, technical feasibility, and delivery risk earlier, choosing a direction that can ship reliably without losing its identity.",
    },
  ],
}

export const tgballersZh = {
  title: "TGBALLERS",
  subtitle: "在一週時程與有限資源下，主動整合需求、突破渲染限制，推進 Telegram 遊戲如期交付。",
  flowchartHint: "點擊流程圖放大查看細節",
  back: "返回",
  metaLabels: { year: "年份", role: "角色", company: "公司", platforms: "平台" },
  sections: {
    requirements: "需求收斂",
    technical: "技術介入",
    aiCollaboration: "AI 協作",
    impact: "成果與學習",
  },
  hero: { ...tgballersHeroBase, role: "視覺設計 · 技術研究 · AI 整合" },
  projectOverview: {
    title: "專案概覽",
    overview: {
      title: "專案目標",
      content: "在一週內完成 TON 鏈 Telegram 遊戲並上架，作為 TOKEN2049 Singapore 展示團隊開發速度與技術彈性的活動專案。",
    },
    timeline: {
      title: "核心挑戰",
      content: "沒有專責 PM、遠端討論零散、工程資源集中於鏈上功能，加上原始遊戲引擎僅支援單色渲染。",
    },
    coreTasks: {
      title: "我的角色",
      content: "我將需求整理成共用流程圖、鎖定功能範圍，並研究原始碼與建立快速素材、貼圖工作流程。",
    },
    painPoints: {
      title: "成果",
      content: "團隊在前 3 天對齊規格，遊戲成功支援圖片貼圖，並於 72 小時內完成主要 UI，推進一週內上架。",
    },
  },
  contentSections: [
    {
      id: "requirements",
      title: "需求收斂",
      headline: "把零散討論整理成可執行流程",
      content: "專案沒有 PM 協助，團隊又採遠端作業，需求散落在 Telegram 對話中。我主動整合聊天記錄，將功能構想轉化為包含資料欄位與邏輯狀態的流程圖，作為團隊共用的開發準則，減少設計與後端之間的理解落差。",
      image: "/portfolio/tgballers/TGBall-FlowChart.png",
      imagePosition: "bottom",
    },
    {
      id: "technical",
      title: "技術介入",
      headline: "解除遊戲引擎的渲染限制",
      content: "原始遊戲引擎僅支援基礎色碼渲染，工程師則集中處理鏈上功能。我主動研究原始碼，搭配 ChatGPT 協助理解與修改渲染邏輯，成功加入圖片貼圖功能，讓遊戲能使用完整的視覺素材，而不必等待額外工程資源。",
      image: "/portfolio/tgballers/ChangeBg.png",
    },
    {
      id: "aiCollaboration",
      title: "AI 協作",
      headline: "建立快速的視覺產出流程",
      content: "為了在短時間內完成視覺，我使用 Midjourney 與 Freepik 快速探索方案，再以黑白網格推測物件的 UV 佈局，讓產出的素材能正確對應模型。這套流程支援快速迭代，同時避免增加工程端的實作負擔。",
      image: "/portfolio/tgballers/3D.png",
      imagePosition: "bottom",
    },
    {
      id: "impact",
      title: "成果與學習",
      headline: "把限制轉化為可交付的方案",
      content: "在沒有專責 PM、工程資源有限的情況下，我整合需求、研究渲染技術並建立快速視覺流程，讓遊戲加入圖片貼圖支援，並於一週內交付活動版本。這段過程也讓我的責任延伸到需求對齊、技術溝通與交付推進。\n\n我也重新理解短期專案中的設計取捨：完全原創的視覺方向雖具辨識度，但在時程緊迫時會增加驗證與修改成本。未來我會更早評估設計企圖、技術可行性與交付風險，選擇能穩定落地且保有特色的方向。",
    },
  ],
}
