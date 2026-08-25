// Shared hero data (no translation needed)
const dataVisualizationHero = {
  duration: "February 2019",
  role: "UI, UX, Tool Research",
  company: "Gorilla Technology",
  platforms: "Web",
  deliverables: "Design and Interaction",
}

export const dataVisualizationEn = {
  title: "Data Visualization System",
  back: "Back",
  sections: {
    about: "About",
    discovery: "Discovery",
    widgets: "Widgets Status",
    outcome: "Outcome",
  },
  hero: dataVisualizationHero,
  projectOverview: {
    title: "Project Overview",
    overview: {
      title: "01 Overview",
      content: "A company-wide chart and data component library. I researched how Highcharts' JSON theme configuration could be customised, checked how each product feature mapped onto a chart type, and implemented the result in IVAR.",
    },
    timeline: {
      title: "02 Timeline",
      content: "Started February 2019. I researched the charting library and its theme configuration, worked with my manager on which components the product line needed, tested with the engineer who owned the components, and built out IVAR's dashboard as the first implementation.",
    },
    challenge: {
      title: "03 Challenge",
      content: "One set of components had to serve behaviour analytics, business intelligence, people, vehicle and security features at once, without any single product being locked to choices made for another.",
    },
    outcome: {
      title: "04 Outcome",
      content: "IVAR shipped with a complete dashboard, every feature checked against the chart type that suited it, and changing colours no longer needed an engineer: a designer hands over a JSON file and the whole look follows.",
    },
  },
  about: {
    title: "Core Objectives",
    content: "The goal was a shared chart and data component library the whole product line could draw on, so different products would present data through the same dashboard language. My manager and I worked through which components the product line would need; my own part was researching the theme configuration, checking how each feature mapped onto a chart type, testing with the engineer who owned the components, and building out IVAR as the first implementation to prove the approach worked.",
  },
  discovery: {
    title: "Discovery & Strategy",
    content: "To ensure technical feasibility, I began by researching Highcharts documentation. Based on the product's data types (e.g., behavior analytics, foot traffic), I parameterized chart styles and layouts to allow for efficient future selection. Key contributions include:",
    items: [
      "Standardized Highcharts configurations to manage colors, spacing, and styles globally.",
      "Worked out how to use the library's JSON theme configuration so a designer can deliver the theme file directly, without engineering having to adjust styling for each project.",
      "Checked how the product feature list mapped onto chart types, tested with the engineer who owned the components, and applied the result to IVAR as the first full dashboard."
    ],
    tradeoff: "Building a shared library means settling styles and parameters up front, so no single product gets a version tailored purely to it, and a request outside those parameters means changing the framework rather than editing that one product. I took that cost because the value of the library only shows up once the other product lines plug into it.",
  },
  behaviorAnalytics: {
    title: "Behavior Analytics",
    items: ["Intrusion Detection", "Loitering Detection", "Tripwire Detection", "Crowd Detection", "Fight Detection", "Camera Tampering Detection", "Direction Detection"],
  },
  businessIntelligence: {
    title: "Business Intelligence",
    items: ["People Occupancy", "People Counting (Entrance)", "Path Analysis", "Dwell Time", "Queue Detection", "Heat Maps"],
  },
  peopleAnalytics: {
    title: "People Analytics",
    items: ["Face Detection", "Face Recognition", "Head-Shoulder Detection", "Pedestrian Detection", "Face Similarity Search", "Face Attributes (Gender / Age)", "Clothing Attributes", "Cross Camera Tracking"],
  },
  vehicleAnalytics: {
    title: "Vehicle Analytics",
    items: ["License Plate Detection", "License Plate Recognition", "Vehicle Detection", "Vehicle Type Classification", "Vehicle Attribute", "Cross Camera Tracking"],
  },
  honeypot: {
    title: "System Security - Honeypot",
    items: ["Capture Hacker Attacks", "Capture The Location Of The Hacker Attack", "Malware Detection"],
  },
  outcome: {
    title: "Outcome",
    content: "IVAR's dashboard was built out in full as the library's first implementation, with each feature checked against the chart type that suited it and tested alongside the engineer who owned the components. The theme setup meant changing colours no longer went through engineering: a designer could hand over a JSON file and the whole look would follow, instead of styling being edited chart by chart on every project.",
  },
  widgetsStatus: {
    title: "Widget States",
    content: "Data passes through multiple processing layers (API, database, frontend) before visualization. To help users pinpoint issues at each stage, I collaborated with developers to design distinct visual states for different data scenarios.",
    zeroData: "Zero Data: The system is functioning normally, but the received value is 0.",
    nullData: "Null/Error States: Differentiates between null values, loading states, and system errors to facilitate rapid troubleshooting.",
  },
}

export const dataVisualizationZh = {
  title: "數據視覺化系統",
  back: "返回",
  sections: {
    about: "關於",
    discovery: "探索",
    widgets: "元件狀態",
    outcome: "成果",
  },
  hero: dataVisualizationHero,
  projectOverview: {
    title: "專案概覽",
    overview: {
      title: "01 概覽",
      content: "一套全公司通用的圖形資料元件庫。我研究 Highcharts 的 JSON 主題設定可以如何客製，確認各項功能適合套用哪種圖表，並實際套用到 IVAR 上。",
    },
    timeline: {
      title: "02 時程",
      content: "2019 年 2 月開始。先研究圖表套件與主題設定的能力，與主管一起確認產品線需要哪些元件，再與負責元件的工程師協作測試，最後以 IVAR 作為第一個實作把儀表板做出來。",
    },
    challenge: {
      title: "03 挑戰",
      content: "同一套元件要同時服務行為分析、商業智慧、人員、車輛與系統安全等功能，又不能讓某個產品被別的產品的決定綁死。",
    },
    outcome: {
      title: "04 成果",
      content: "IVAR 的儀表板完整交付，每項功能都確認過適合套用哪種圖表；改顏色不再需要工程師介入，設計師直接提供 JSON 檔案就能換掉整套視覺。",
    },
  },
  about: {
    title: "核心目標",
    content: "目標是做一套公司通用的圖形與資料元件庫，讓不同產品線都能接上同一套圖表規則，用一致的方式呈現數據。元件與配置的規劃由我和主管一起進行；我負責的部分是研究主題設定、確認各項功能適合套用哪種圖表、與負責元件的工程師協作測試，並以 IVAR 作為第一個實作把整套儀表板做出來驗證可行。",
  },
  discovery: {
    title: "探索發現",
    content: "為了確認設計的可行性，我先研究了開發使用的 Highcharts 文件。接著根據產品會遇到的數據類型（如行為分析、人流等），預先將圖表樣式與佈局參數化，讓未來可以根據需求快速選擇。主要工作：",
    items: [
      "整理 Highcharts 配置，將顏色、間距等樣式統一管理。",
      "整理出用套件本身的 JSON 主題設定換掉整體視覺的做法，讓設計端可以直接交付主題檔案，不必每個案子都請工程調樣式。",
      "對照公司產品的功能列表確認各功能適合套用哪種圖表，與負責元件的工程師協作測試，並套用到 IVAR 做出第一個完整的儀表板。",
    ],
    tradeoff: "做通用元件庫要先把樣式與參數收斂，代價是單一產品拿到的不會是為它量身訂做的版本；規格外的需求得回頭改框架，而不是在那個產品裡改掉。我選擇這樣做，是因為這套元件的價值要等其他產品線接上時才會出現。",
  },
  behaviorAnalytics: {
    title: "行為分析",
    items: ["入侵偵測", "徘徊偵測", "絆線偵測", "人群偵測", "打架偵測", "攝影機竄改偵測", "方向偵測"],
  },
  businessIntelligence: {
    title: "商業智慧",
    items: ["人員佔用", "人流計數（入口）", "路徑分析", "停留時間", "排隊偵測", "熱力圖"],
  },
  peopleAnalytics: {
    title: "人員分析",
    items: ["人臉偵測", "人臉辨識", "頭肩偵測", "行人偵測", "人臉相似度搜尋", "人臉屬性（性別/年齡）", "服裝屬性", "跨攝影機追蹤"],
  },
  vehicleAnalytics: {
    title: "車輛分析",
    items: ["車牌偵測", "車牌辨識", "車輛偵測", "車輛類型分類", "車輛屬性", "跨攝影機追蹤"],
  },
  honeypot: {
    title: "系統安全 - 蜜罐",
    items: ["捕獲駭客攻擊", "捕獲駭客攻擊位置", "惡意軟體偵測"],
  },
  outcome: {
    title: "成果",
    content: "IVAR 的儀表板完整做出來，作為這套元件庫的第一個實作；每項功能都確認過適合套用哪種圖表，並與負責元件的工程師一起測試過。主題設定整理好之後，改顏色不再需要工程師介入，設計師直接交付一份 JSON 檔案就能換掉整套視覺，不必在每個案子裡逐個圖表調樣式。",
  },
  widgetsStatus: {
    title: "元件狀態",
    content: "數據在顯示前會經過 API 與資料庫處理，為了讓使用者判斷問題點，我與開發人員討論後，針對不同數據狀態設計了對應的顯示樣式。",
    zeroData: "無數據 (Zero)：系統運行正常，但接收數據為 0。",
    nullData: "異常/讀取中 (Null)：區分數據為空值、系統載入中或回傳錯誤，方便快速排查問題",
  },
}
