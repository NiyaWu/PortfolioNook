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
  subtitle: "I reorganized analysis configuration, scheduling, and monitoring information to make algorithm-heavy workflows easier to understand and operate.",
  back: "Back",
  sections: {
    problem: "Problem & Approach",
    analysisSettings: "Configuration Flow",
    monitoring: "Monitoring & Events",
    uiKit: "Interaction Standards",
    outcome: "Outcome",
  },
  hero: videoAnalysisHero,
  projectOverview: {
    title: "Project Overview",
    overviewLabel: "Project Goal",
    timelineLabel: "Core Challenge",
    challengeLabel: "My Role",
    outcomeLabel: "Outcome",
    roleContent: "I studied the engineers' configuration structure and dependencies, translated them into a user-facing setup flow, and established reusable interaction guidelines and UI components.",
  },
  about: {
    title: "Overview",
    overview: "Optimize IVAR's analysis setup, scheduling, and monitoring experience so operators can configure complex video-recognition rules without losing track of the overall workflow.",
    timeline: "The initial optimization took two weeks, followed by ongoing iterations as new analysis features were added.",
    challenge: "The original interface exposed an engineer-oriented configuration structure directly. Users saw technical fields and multiple analysis parameters without knowing where to begin or what order to follow.",
    outcome: "The new flow surfaces only the settings relevant to the selected analysis, makes schedule conflicts and image regions directly visible, and provides reusable interaction rules and UI components for later features.",
  },
  problem: {
    title: "Problem & Approach",
    intro: "The original interface mirrored the system's engineering logic, leaving operators unsure where to begin. I translated that structure into a task-based flow through three concrete design moves.",
    items: [
      { title: "Map configuration dependencies", content: "I audited shared and analysis-specific fields, then reorganized backend relationships into the order operators actually need." },
      { title: "Create a clear starting point", content: "I defined a three-step path—choose an analysis, schedule it, then configure how the image should be interpreted." },
      { title: "Reveal settings by task", content: "The interface now displays only parameters relevant to the selected analysis and hides unrelated technical fields." },
    ],
  },
  analysisSettings: {
    title: "Configuration Flow",
    content: "After clarifying the dependencies behind each analysis, I translated the engineering structure into three user-facing steps: choose an analysis, decide when it runs, and define how the image should be interpreted.",
    progressiveTitle: "Show Only the Settings Needed for the Selected Analysis",
    content2: "The interface adopts a \"segmented progressive guidance\" approach. When a user selects \"Intrusion Detection,\" the interface automatically hides \"People Counting\" parameters, displaying only the settings relevant to that scenario.",
    flowHint: "Select the flow diagram to inspect each step.",
  },
  scheduleSettings: {
    title: "Use a Timeline to Make Overlapping Schedules Visible",
    content: "A camera can run people counting during business hours and switch to intrusion detection after closing. Users select time segments directly on the timeline instead of translating schedules into repeated form fields.",
    content2: "The table keeps channels and analysis tasks visible together, helping users identify conflicts when multiple schedules overlap.",
  },
  graphicalTool: {
    title: "Extending the Structure with Cross-line Analysis",
    content: "Cross-line analysis was added after the original setup flow had been redesigned. The new analysis could reuse the same structure for selecting an analysis, arranging its schedule, and exposing only the relevant parameters—demonstrating that the system could expand without rebuilding the workflow.",
    content2: "I also designed its graphical configuration method. Users draw lines directly on the image and define their trigger order and direction, translating behaviors such as illegal motorcycle turns into operable geometric rules.",
  },
  tvWall: {
    title: "Recognize Anomalous Events at a Glance",
    content: "I reorganized the TV wall around the information operators need to assess an event: the live source, detected object or behavior, analysis type, and event time.",
    content2: "The event list could also accommodate new scenarios, including mask and body-temperature detection introduced during the 2020 pandemic.",
  },
  uiKit: {
    title: "Interaction Standards",
    content: "The existing UI Kit did not cover the product line's multi-level menus and analysis-specific controls. I documented their interaction logic and component foundations so later analysis features could reuse the same patterns.",
  },
  outcome: {
    title: "Outcome",
    content: "The redesigned flow turned scattered algorithm parameters into a staged configuration experience. Operators could see only the settings relevant to the selected analysis and identify schedule conflicts before applying them. Later, cross-line analysis reused the same structure while introducing a new graphical configuration method, demonstrating that the interaction framework could support continued feature expansion.",
  },
}

export const videoAnalysisZh = {
  title: "影像分析系統設計優化",
  subtitle: "重新整理分析設定、排程與監看資訊，降低操作人員理解演算法參數與完成配置的門檻。",
  back: "返回",
  sections: {
    problem: "問題與重整方法",
    analysisSettings: "分析設定流程",
    monitoring: "監看與事件",
    uiKit: "互動規範",
    outcome: "成果",
  },
  hero: videoAnalysisHero,
  projectOverview: {
    title: "專案概覽",
    overviewLabel: "專案目標",
    timelineLabel: "核心挑戰",
    challengeLabel: "我的角色",
    outcomeLabel: "成果",
    roleContent: "研究工程端的設定結構與欄位依賴，將技術邏輯轉譯成使用者能理解的操作流程，並建立可延續的互動規範與 UI 元件。",
  },
  about: {
    title: "概覽",
    overview: "優化 IVAR 的分析設定、排程與監看體驗，讓操作人員在配置複雜的影像辨識規則時，仍能掌握完整流程。",
    timeline: "第一次優化為兩週，後續陸續新增新的分析功能。",
    challenge: "原始介面直接呈現工程端的設定結構，使用者面對技術欄位與多種分析參數，卻不知道該從哪裡開始、應依照什麼順序完成設定。",
    outcome: "新流程只呈現當前分析需要的設定，讓排程衝突與影像區域能直接被確認，並建立可供後續功能沿用的互動規則與 UI 元件。",
  },
  problem: {
    title: "問題與重整方法",
    intro: "原始介面直接呈現工程端邏輯，使用者不知道該從哪裡開始。我將技術結構轉譯成任務流程，並透過三個設計動作重新組織設定體驗。",
    items: [
      { title: "釐清設定依賴", content: "盤點共用與分析專屬欄位，將後端關係整理成使用者實際操作所需的順序。" },
      { title: "建立明確起點", content: "把設定拆成選擇分析、安排執行時間、定義影像判讀方式三個步驟。" },
      { title: "依任務顯示設定", content: "選定分析後只呈現相關參數，隱藏與當前任務無關的技術欄位。" },
    ],
  },
  analysisSettings: {
    title: "分析設定流程",
    content: "釐清每種分析背後的設定依賴後，我將工程結構轉譯成三個使用者步驟：選擇分析、決定執行時間，再定義影像應如何被判讀。",
    progressiveTitle: "只顯示當前分析需要的設定",
    content2: "介面設計上採用「分段式漸進引導」。使用者選定「入侵偵測」時，介面自動隱藏「人流計數」的參數，僅呈現該場景必要的設定項。",
    flowHint: "點擊流程圖放大，查看每個設定步驟。",
  },
  scheduleSettings: {
    title: "用時間軸看見多任務排程衝突",
    content: "同一支攝影機可以在營業時間執行人流計數，閉店後改為入侵偵測。使用者直接在時間軸選取區段，不必將排程拆成重複表單。",
    content2: "表格同時保留頻道與分析任務，讓多個排程重疊時的衝突能被直接辨識。",
  },
  graphicalTool: {
    title: "以跨線分析驗證架構的擴充性",
    content: "跨線分析是在原始設定流程完成後新增的功能。它能直接沿用選擇分析、安排排程與顯示相關參數的既有結構，不必重新建立一套操作流程，也驗證了整體架構能持續擴充。",
    content2: "跨線的圖像化設定方式也由我設計。使用者直接在影像上畫線，設定觸發順序與方向，將機車違規轉向等行為轉換成可操作的幾何規則。",
  },
  tvWall: {
    title: "監看中快速辨識異常事件",
    content: "我依監看人員判斷事件時需要的資訊，重新整理即時畫面、偵測物件或行為、分析類型與事件時間的呈現層級。",
    content2: "右側事件列表也能容納後續新增的使用情境，例如 2020 年疫情期間的口罩與體溫偵測。",
  },
  uiKit: {
    title: "互動規範",
    content: "既有 UI 元件庫尚未涵蓋產品線中的多層級選單與分析專用控制項。我整理操作邏輯與元件基礎，讓後續新增的分析功能可以沿用相同模式。",
  },
  outcome: {
    title: "成果",
    content: "新流程將分散的演算法參數整理成分段式設定，讓操作人員只看見當前分析相關的項目，並在套用前確認排程衝突。後續新增的跨線分析沿用相同結構，再加入新的圖像化設定方式，也驗證這套互動架構能支援功能持續擴充。",
  },
}
