// Shared hero data (no translation needed)
const videoAnalysisHero = {
  duration: "2018 ~ 2020",
  role: "UI / UX",
  company: "Gorilla Technology",
  platforms: "Web",
  deliverables: "Design and Interaction",
}

export const videoAnalysisEn = {
  title: "Video Analysis System Design Optimization",
  back: "Back",
  sections: {
    designThinking: "Design Thinking",
    analysisSettings: "Analysis Settings",
    scheduleSettings: "Schedule Settings",
    graphicalTool: "Graphical Tool",
    tvWall: "TV Wall Design",
    uiKit: "UI Kit",
    outcome: "Outcomes & Learnings",
  },
  hero: videoAnalysisHero,
  projectOverview: {
    title: "Project Overview",
    overviewLabel: "01 Overview",
    timelineLabel: "02 Timeline",
    challengeLabel: "03 Challenge",
    outcomeLabel: "04 Outcome",
  },
  about: {
    title: "Overview",
    overview: "IVAR is a video recognition system designed to assist human video identification, providing early warnings to reduce incidents. However, due to its complex functionality, this interface optimization was conducted to prevent users from losing focus.",
    timeline: "The first optimization took two weeks, with subsequent additions of new analysis features.",
    challenge: "Enable users monitoring the surveillance wall to quickly understand the status of each screen for subsequent troubleshooting; video analysis involves high-density parameter settings—how to prevent users from losing focus in complex forms.",
    outcome: "The new interface for analysis settings better shows which settings are more relevant to the video; established multi-level operation guidelines and UI Kit to accelerate design delivery for subsequent new feature development.",
  },
  designThinking: {
    title: "Design Thinking",
    content: "Configuring different analysis types is a crucial feature in IVAR. Some analysis types require setting many items, not only general form settings but also graphical settings. We aim to design an interface that helps users understand how to configure settings and why they need to do so, enabling users to comprehend the entire analysis workflow.",
  },
  analysisSettings: {
    title: "Multiple Image Analysis Settings",
    content: "For camera analysis configuration, we want cameras to perform different analyses at different times. For example, a camera at a supermarket entrance can be set for people counting during business hours and intrusion detection after closing. On the settings page, multiple analysis configurations can be placed under each camera, allowing users to schedule when to use which analysis.",
    content2: "The interface design adopts a \"segmented progressive guidance\" approach. When users select \"Intrusion Detection\", the interface automatically hides \"People Counting\" parameters, showing only the necessary settings for that scenario.",
  },
  scheduleSettings: {
    title: "Analysis Schedule Settings",
    content: "For schedule design, we use a chart-based approach where users can select desired time segments by drawing, enabling quick and intuitive configuration.",
    content2: "The analyzable channels vary based on the user's purchased plan. Using a table format resolves conflicts in multi-task overlapping configurations.",
  },
  graphicalTool: {
    title: "New Graphical Tool Design - Double Cross Line",
    content: "To solve the detection challenge of 'illegal motorcycle left turns' in the Kaohsiung Smart City project, we designed the Double Cross Line configuration tool.",
    content2: "Users set the trigger sequence and directionality of two line segments, abstracting complex violation behaviors into simple geometric logic.",
  },
  tvWall: {
    title: "TV Wall Design",
    content: "Based on analysis items and information users may need, we organized the information display on the TV wall.",
    content2: "The event list on the right was designed based on the 2020 pandemic situation, featuring mask detection and body temperature monitoring.",
  },
  uiKit: {
    title: "UI Kit",
    content: "The company had a basic UI kit for some products, but it wasn't sufficient for the entire product line. Especially for multi-level operation menus, we established the operation logic and component fundamentals together in this project.",
  },
  outcome: {
    title: "Outcomes & Learnings",
    content: "At a stage where video recognition technology still requires extensive manual parameter calibration, I realized that design's value lies in lowering technical barriers and improving configuration accuracy. By restructuring IVAR's information architecture, I transformed complex algorithm parameters into intuitive interface semantics, effectively reducing users' learning curve while ensuring system accuracy across different professional scenarios (such as traffic recognition and pandemic detection).",
  },
}

export const videoAnalysisZh = {
  title: "影像分析系統設計優化",
  back: "返回",
  sections: {
    designThinking: "設計發想",
    analysisSettings: "分析設定",
    scheduleSettings: "排程設定",
    graphicalTool: "圖形工具",
    tvWall: "電視牆設計",
    uiKit: "UI 元件庫",
    outcome: "成果與學習",
  },
  hero: videoAnalysisHero,
  projectOverview: {
    title: "專案概覽",
    overviewLabel: "01 概覽",
    timelineLabel: "02 時程",
    challengeLabel: "03 挑戰",
    outcomeLabel: "04 成果",
  },
  about: {
    title: "概覽",
    overview: "IVAR是影像辨識系統，主要功能為幫助人類影像辨識，能夠提早警示人們，降低憾事的發生。但由於功能較於複雜，為了避免使用者失焦，因此進行了此次的介面優化。",
    timeline: "第一次優化為兩週，後續陸續新增新的分析功能。",
    challenge: "讓觀看監視牆的使用者能夠快速的了解每一個畫面的狀態，以便後續的問題排除；影像分析涉及高密度的參數設定，如何避免使用者在複雜表單中失焦。",
    outcome: "在分析設定上新介面更能看出哪些設定與影像更有關聯性；建立多層級操作規範與 UI Kit，使後續新功能開發的設計交付速度提升。",
  },
  designThinking: {
    title: "設計發想",
    content: "不同分析類型的設定是 IVAR 中的重要功能。某些分析類型需要設定許多項目，不僅是一般表單設定，還包括圖形設定。我們希望設計介面，讓使用者在使用時知道如何設定以及為什麼需要這樣做，使用者可以明白整個分析的運作。",
  },
  analysisSettings: {
    title: "多元影像分析設定",
    content: "在設定攝影機分析項目上，我們希望攝影機會根據不同時間點進行不同的分析，例如，超市門口有一個攝影機。使用者可以在商店營業時設定人流計數，在商店關門後設定入侵偵測。在頁面設定上，攝影機下可以放置多個分析設定，使用者可以自行排定什麼時候要使用什麼分析。",
    content2: "介面設計上採用「分段式漸進引導」。使用者選定「入侵偵測」時，介面自動隱藏「人流計數」的參數，僅呈現該場景必要的設定項。",
  },
  scheduleSettings: {
    title: "分析排程設定",
    content: "在排程設計上，使用圖表的方式，框選出想要的段落時間，意圖讓使用者能夠快速直觀的設定。",
    content2: "可分析的頻道會根據使用者購買的方案有所增減，使用表格的方式，解決了多任務重疊配置的衝突問題。",
  },
  graphicalTool: {
    title: "新圖形設定工具設計 - 雙交叉線",
    content: "為了解決高雄智慧城市專案中『機車違規左轉』的偵測難題，設計了雙交叉線設定工具。",
    content2: "使用者透過設定兩條線段的觸發順序與方向性，將複雜的違規行為抽象化為簡單的幾何邏輯。",
  },
  tvWall: {
    title: "電視牆設計",
    content: "根據分析的項目，以及使用者可能用到的資訊在電視牆上做了資訊的整理。",
    content2: "右方的事件列表根據2020年的疫情狀況，做了偵測是否戴口罩與人的體溫偵測。",
  },
  uiKit: {
    title: "UI 元件庫",
    content: "公司有基本的 UI 元件庫用於部分產品，但對於整個產品線來說還不夠，尤其是多層級的操作選單，在此專案一起定下操作的邏輯以及元件的基調。",
  },
  outcome: {
    title: "成果與學習",
    content: "在影像辨識技術仍需高度手動校正參數的階段，我體認到設計的價值在於如何降低技術門檻並提升配置的精準度。透過重新梳理 IVAR 的資訊架構，我將繁瑣的演算法參數轉化為直觀的介面語意，不僅有效降低了使用者的理解成本，也確保了系統在不同專業場景（如交通辨識、防疫偵測）下的準確性。",
  },
}
