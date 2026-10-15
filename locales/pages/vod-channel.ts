// Shared hero data (no translation needed)
const vodChannelHeroBase = {
  duration: "June 2016",
  company: "Taiwan Mobile",
  platforms: "Phone, Pad, PC web",
  deliverables: "User Research Result",
}

export const vodChannelEn = {
  title: "myVideo Experience Redesign",
  subtitle: "Through user research and internal prototype validation, we reworked content discovery, device registration, payment, and live-viewing flows while moving the redesign toward delivery.",
  zoomHint: "Select the image to inspect the details.",
  back: "Back",
  metaLabels: { date: "Date", role: "Role", company: "Company", platforms: "Platforms" },
  sections: {
    discovery: "Context & Evidence",
    usabilityTesting: "Research & Alignment",
    decisions: "Design Decisions",
    delivery: "Collaboration & Delivery",
  },
  hero: { ...vodChannelHeroBase, role: "UX Research / Project Liaison" },
  projectOverview: {
    title: "Project Overview",
    overview: { title: "Project Goal", content: "Redesign the myVideo experience so users could explore content more easily, understand device and payment rules, and receive a consistent viewing experience across phone, tablet, and web." },
    timeline: { title: "Core Challenge", content: "Turn user evidence into design decisions that product managers could align on, while adapting the plan when the external delivery schedule slipped." },
    challenge: { title: "My Role", content: "I primarily consolidated research evidence, collaborated on the research prototype, and conducted internal validation. During delivery, I also helped coordinate the schedule, responsibilities, and acceptance review." },
    outcome: { title: "Outcome", content: "We clarified key flows across content discovery, device registration, categories, payment, and live viewing. Prototype validation also helped PMs align on the design direction, while review and acceptance criteria supported delivery quality." },
  },
  discovery: {
    title: "Context & Evidence",
    intro: "At the project's outset, we analyzed the preliminary research report provided by the vendor, focusing on two key areas:",
    items: [
      "User Feedback Analysis: We consolidated negative reviews (two stars and below) from the App Store and Google Play to identify users' most immediate complaints and pain points.",
      "Data Trend Observation: We referenced backend GA data to gain initial insights into user behavior patterns and churn within the app.",
    ],
    conclusion: "These sources revealed recurring user problems. We then used prototype sessions with internal PMs to validate design directions and turn the evidence into shared product decisions.",
  },
  researchGoals: {
    title: "Validation Focus",
    items: [
      "Review the proposed login flow against the research evidence.",
      "Compare homepage and search directions.",
      "Clarify how buy and rent options should be distinguished.",
      "Prioritize essential features for the live-video page.",
    ],
  },
  usabilityTesting: {
    title: "Research & Alignment",
    content: "App reviews, GA patterns, and the vendor's research provided user evidence. Nine internal PMs then compared prototype directions, surfaced cross-team concerns, and aligned on the redesign.",
  },
  participants: {
    title: "Internal Validation Group",
    content: "Nine myVideo PMs from content, marketing, and product reviewed the prototypes, raised concerns from their teams, and confirmed the redesign direction together.",
  },
  abTesting: {
    title: "Make Content Categories Easier to Explore",
    content: "We wanted users to discover the app's diverse content categories. We masked the dashed area and asked participants, \"Which layout do you prefer?\" Each test session started from the participant's preferred wireframe, and we documented all responses.",
  },
  result1: {
    title: "Combine Two Exploration Patterns",
    content1: "We merged the two concepts and added an icon button to the video category menu.",
    content2: "When users want to explore more video categories, they can tap the button, swipe the top menu, or scroll the entire screen.",
  },
  loginTest: {
    title: "Move Device Registration to the Moment of Need",
    content: "myVideo enforces strict device management rules: one account can only be logged in on one device at a time, and users must register a device before watching videos. Each account supports up to three registered devices, and switching requires a 30-day waiting period.",
    content2: "Given these constraints, we wanted to understand how users feel about the mandatory device registration step immediately after login.",
  },
  result2: {
    title: "Register Only Before Playback",
    content: "The research evidence showed that a registration prompt immediately after login introduced another task before viewing had begun. We persuaded product managers to defer the flow until playback; if a device slot was available, registration would happen automatically.",
  },
  videoTypeTest: {
    title: "Make the Two-level Category Logic Visible",
    content: "Delivering accurate content to users is critical. myVideo uses a two-level category system — for example, selecting \"Comedy\" under \"Movies\" only surfaces movie comedies, not animated comedies. This hierarchy was confusing to users, so we needed to design an interface that made the filtering logic transparent.",
  },
  result3: {
    title: "Use Content Posters to Explain Categories",
    content1: "Used poster thumbnails to visually represent each video category.",
    content2: "If users aren't interested in the displayed titles, they can tap the button below the screen to browse alternative selections.",
  },
  paymentTest: {
    title: "Reduce Payment Decision Overload",
    content: "When users want to watch a paid movie, the app presented too many payment options, creating decision fatigue and confusion.",
  },
  result4: {
    title: "Clarify Three Payment Paths",
    content1: "Simplified to three clear payment actions: Monthly Subscription, Buy, and Rent.",
    content2: "Since the product manager wanted to promote the monthly plan, we restructured the layout with three distinct buttons so users could immediately identify the option that fits their needs.",
  },
  liveVideoTest: {
    title: "Prioritize Essential Live-video Interactions",
    content: "Live videos often have idle periods between segments. We wanted to keep users engaged on the page and needed to validate that any new features added would genuinely serve their needs.",
  },
  result5: {
    title: "Simplify the Live Viewing State",
    items: [
      "Tab button labels were ambiguous — users struggled to understand their meaning.",
      "Message board ordering placed newest messages at the bottom, making them hard to find.",
      "Users expressed privacy concerns when posting public messages.",
      "Ratings and reviews needed stronger contextual relevance to the content.",
      "In full-screen mode, users expected a minimal UI — only the \"Send Heart\" button and message count should remain visible.",
    ],
  },
  decisionSection: {
    title: "Design Decisions",
    intro: "Combining user evidence with internal prototype feedback, we refined how people explore content, understand device and category rules, choose a payment method, and use live-viewing features.",
    decisionLabel: "Design decision",
  },
  delivery: {
    title: "Collaboration & Delivery",
    content: "My primary focus was research and validation. I also connected the external partner, product managers, and internal support team so decisions from the prototype could move into delivery and acceptance.",
    items: [
      { title: "Stakeholder alignment", content: "First, I used prototype validation results to discuss the design direction and help the product team build agreement." },
      { title: "Partner coordination", content: "I collaborated with the external partner during the research-prototype stage. When the delivery they originally owned in full was delayed, I joined negotiations to reset the schedule and responsibilities." },
      { title: "Delivery review", content: "Part of the work was later supported by the internal team, followed by a review of the design specifications and contract deliverables against the acceptance criteria." },
    ],
  },
  uiKit: {
    title: "UI Kit",
    content: "A shared card and component system kept the experience consistent across phone, tablet, and web while allowing different content types to remain flexible.",
  },
}

export const vodChannelZh = {
  title: "myVideo 體驗重塑",
  subtitle: "透過使用者研究與內部原型驗證，重新整理內容探索、裝置註冊、付款與直播觀看流程，並推動改版落地。",
  zoomHint: "點擊放大看細節",
  back: "返回",
  metaLabels: { date: "日期", role: "角色", company: "公司", platforms: "平台" },
  sections: {
    discovery: "情境與證據",
    usabilityTesting: "研究與共識",
    decisions: "設計決策",
    delivery: "協作與交付",
  },
  hero: { ...vodChannelHeroBase, role: "UX 研究／專案窗口" },
  projectOverview: {
    title: "專案概覽",
    overview: { title: "專案目標", content: "重塑 myVideo 使用體驗，讓使用者更容易探索內容、理解裝置與付款規則，並在手機、平板與網頁上獲得一致的觀看體驗。" },
    timeline: { title: "核心挑戰", content: "將使用者證據轉化為產品經理能共同確認的設計決策，並在外部交付時程延後時調整推進方式。" },
    challenge: { title: "我的角色", content: "主要負責整理研究資料、協作研究原型並進行內部驗證；進入交付階段後，也協助協調時程、分工與驗收。" },
    outcome: { title: "成果", content: "完成內容探索、裝置註冊、影片分類、付款與直播觀看等關鍵流程的調整，讓資訊與操作方式更清楚；同時透過原型驗證協助 PM 對齊設計方向，並依驗收標準控管交付品質。" },
  },
  discovery: {
    title: "情境與證據",
    intro: "在專案初期，我們分析了廠商提供的初步研究報告，主要聚焦於兩大面向：",
    items: [
      "使用者回饋：整理 App Store 與 Google Play 上兩顆星以下的評論，歸納使用者反覆提到的問題。",
      "數據趨勢：參考後台 GA 數據，初步了解使用者在 App 內的行為與流失情況。",
    ],
    conclusion: "這些資料讓我們看見反覆出現的使用者問題。接著透過內部 PM 的原型驗證，比較設計方向並釐清假設，逐步形成共同的產品決策。",
  },
  researchGoals: {
    title: "驗證焦點",
    items: [
      "依研究證據檢視新的登入流程。",
      "比較首頁與搜尋的設計方向。",
      "釐清購買與租借選項應如何區分。",
      "確認直播頁面必要功能的優先順序。",
    ],
  },
  usabilityTesting: {
    title: "研究與共識",
    content: "商店評論、GA 行為資料與廠商研究提供使用者證據；9 位內部 PM 再透過原型驗證比較方案、釐清各部門考量，並建立改版共識。",
  },
  participants: {
    title: "內部驗證成員",
    content: "9 位 myVideo PM 來自內容、行銷與產品團隊，透過原型操作提出各部門考量，並共同確認改版方向。",
  },
  abTesting: {
    title: "讓首頁內容分類更容易探索",
    content: "我們希望使用者能看見 App 提供的多種影片類型。測試時，我們遮住虛線區域，請受測者比較兩種版面並說明偏好，再從他們選擇的線框圖開始後續測試。",
  },
  result1: {
    title: "合併兩種內容探索方式",
    content1: "我們整合兩種提案，在影片類型選單上增加圖示按鈕。",
    content2: "使用者可以點擊按鈕、滑動頂部選單，或滑動畫面查看更多影片類型。",
  },
  loginTest: {
    title: "將裝置綁定移到真正需要的時機",
    content: "myVideo 有明確的裝置限制：一個帳號同時只能登入一個裝置，觀看影片前必須先註冊裝置；每個帳號最多可註冊三個裝置，更換裝置則需要等待 30 天。",
    content2: "因此，我們想了解使用者在登入後立即被要求註冊裝置時的感受。",
  },
  result2: {
    title: "只在播放影片前完成裝置註冊",
    content: "研究證據顯示，登入後立即出現裝置註冊，會讓使用者在尚未開始觀看前就多出一項任務。因此，我們建議將這個步驟移到播放影片前；若帳號仍有可用名額，則自動完成裝置註冊。",
  },
  videoTypeTest: {
    title: "讓兩層影片分類邏輯可以被理解",
    content: "myVideo 採用兩層影片分類。例如，使用者在「電影」下選擇「搞笑」，只會看到搞笑電影，不包含搞笑動畫。為了避免誤解，介面需要清楚呈現這層分類關係。",
  },
  result3: {
    title: "用內容海報協助理解分類",
    content1: "以內容海報呈現不同影片類型。",
    content2: "若使用者對目前顯示的影片沒有興趣，可以點擊畫面下方的按鈕查看其他內容。",
  },
  paymentTest: {
    title: "降低付款選項造成的決策負擔",
    content: "使用者想觀看付費電影時，App 提供的付款方式太多，不容易判斷該如何選擇。",
  },
  result4: {
    title: "收斂成三條清楚的付款路徑",
    content1: "將付款方式整理為月租、購買與租借三個按鈕。",
    content2: "配合產品經理推廣月租方案的需求，讓使用者可以依照自己的狀態選擇付款方式。",
  },
  liveVideoTest: {
    title: "整理直播頁的必要互動",
    content: "直播影片之間常有空檔。我們希望使用者留在頁面上，因此需要確認新增的功能是否符合觀看需求。",
  },
  result5: {
    title: "簡化直播觀看狀態",
    items: [
      "標籤按鈕的文字不容易理解。",
      "留言板將最新訊息放在底部，不容易閱讀。",
      "使用者在留言時會顧慮隱私。",
      "評分與評論需要符合直播觀看情境。",
      "使用者進入全螢幕觀看時，只保留「送愛心」與「訊息數量」兩項功能。",
    ],
  },
  decisionSection: {
    title: "設計決策",
    intro: "我們結合使用者證據與內部原型回饋，重新整理內容探索、裝置與分類規則、付款方式及直播功能。",
    decisionLabel: "設計決策",
  },
  delivery: {
    title: "協作與交付",
    content: "我的主要工作集中在研究與驗證，並串聯外部夥伴、產品經理與內部支援團隊，讓原型階段形成的決策能繼續推進到交付與驗收。",
    items: [
      { title: "利害關係人對齊", content: "先以原型驗證結果討論設計方向，協助產品團隊建立共識。" },
      { title: "外部夥伴協調", content: "研究原型階段與外部夥伴協作；當原定由對方完整負責的交付延遲時，我參與重新協商時程與分工。" },
      { title: "交付品質審查", content: "部分工作後來改由內部團隊支援，並依驗收標準審核設計規範與合約內容。" },
    ],
  },
  uiKit: {
    title: "UI 元件庫",
    content: "以共用卡片與元件維持手機、平板與網頁的一致性，並因應不同內容類型調整呈現方式。",
  },
}
