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
    title: "About",
    content: "Dashboards can make people easier to understand data meanings or quickly operation. In this time we want to make a dashboard about analytics, that can be applied to various environments.",
  },
  discovery: {
    title: "Discovery",
    content: "We list all of the event types according to the analysis types. According to the list and the data type, we design widgets with different types of chart for users can choose by themself.",
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
    title: "Widgets Status",
    content: "To show the widget, data needs to pass-through several layers like API, DB, and frontend, etc. We got a request to demonstrate all the different errors in different ways on our widget. After discussions with developers, I came up with this design.",
    zeroData: "System received data is 0",
    nullData: "System received data is NULL, Dashboard loading, System received data is [ ]",
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
    title: "關於",
    content: "儀表板可以讓人們更容易理解數據含義或快速操作。這次我們想製作一個關於分析的儀表板，可以應用於各種環境。",
  },
  discovery: {
    title: "探索發現",
    content: "我們根據分析類型列出所有事件類型。根據列表和數據類型，我們設計了不同類型圖表的元件，讓使用者可以自行選擇。",
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
    content: "要顯示元件，數據需要經過 API、資料庫和前端等多層處理。我們收到了一個需求，要以不同方式在元件上展示所有不同的錯誤。經過與開發人員的討論，我提出了這個設計。",
    zeroData: "系統接收數據為 0",
    nullData: "系統接收數據為 NULL、儀表板載入中、系統接收數據為 [ ]",
  },
}
