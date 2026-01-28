// Shared hero data (no translation needed)
const dataVisualizationHero = {
  duration: "February 2019",
  role: "UI / UX / Tool Research",
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
  },
  hero: dataVisualizationHero,
  about: {
    title: "Core Objectives",
    content: "Developed a highly adaptable data visualization framework. The goal was to provide a consistent dashboard interface for various clients, enabling them to interpret data intuitively and find actionable insights quickly during reporting and decision-making.",
  },
  discovery: {
    title: "Discovery & Strategy",
    content: "To ensure technical feasibility, I began by researching Highcharts documentation. Based on the product's data types (e.g., behavior analytics, foot traffic), I parameterized chart styles and layouts to allow for efficient future selection. Key contributions include:",
    items: [
      "Standardized Highcharts configurations to manage colors, spacing, and styles globally.",
      "Implemented a JSON-based theme configuration to enable rapid visual updates, significantly reducing engineering time for custom styling.",
      "Mapped chart components to the full product feature list, using 'IVAR' as the primary implementation to create a dedicated dashboard."
    ],
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
  widgetsStatus: {
    title: "Widget States",
    content: "Data undergoes multiple processing layers (API, Database, Frontend) before visualization. To help users pinpoint issues, I collaborated with developers to design specific visual states for different data scenarios.",
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
  },
  hero: dataVisualizationHero,
  about: {
    title: "核心目標",
    content: "建立一套可快速調整的圖表框架。目的是讓不同類別的業主，都能透過一致的儀表板介面理解數據，並在報告提問階段快速找到答案做出改善。",
  },
  discovery: {
    title: "探索發現",
    content: "為了確認設計的可行性，我先研究了開發使用的 Highcharts 文件。接著根據產品會遇到的數據類型（如行為分析、人流等），預先將圖表樣式與佈局參數化，讓未來可以根據需求快速選擇。主要工作：",
    items: [
      "整理 Highcharts 配置，將顏色、間距等樣式統一管理。",
      "透過修改 JSON 檔案來快速更換儀表板主題，減少工程重複調整樣式的時間。",
      "根據公司產品所有的功能列表，規劃對應的圖表元件與配置，並以 IVAR 為例製作出專屬儀表板",
    ],
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
  widgetsStatus: {
    title: "元件狀態",
    content: "數據在顯示前會經過 API 與資料庫處理，為了讓使用者判斷問題點，我與開發人員討論後，針對不同數據狀態設計了對應的顯示樣式。",
    zeroData: "無數據 (Zero)：系統運行正常，但接收數據為 0。",
    nullData: "異常/讀取中 (Null)：區分數據為空值、系統載入中或回傳錯誤，方便快速排查問題",
  },
}
