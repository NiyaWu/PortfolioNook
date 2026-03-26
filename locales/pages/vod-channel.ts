// Shared hero data (no translation needed)
const vodChannelHero = {
  duration: "June 2016",
  role: "UX / Contact Person",
  company: "Taiwan Mobile",
  platforms: "Phone, Pad, PC web",
  deliverables: "User Research Result",
}

export const vodChannelEn = {
  title: "myVideo UX Redesign & Partner Collaboration",
  back: "Back",
  sections: {
    discovery: "Discovery",
    researchGoals: "Research Goals",
    usabilityTesting: "User Testing",
    abTesting: "AB Testing - Homepage Layout",
    loginTest: "Usability Test - Login Flow",
    videoTypeTest: "Usability Test - Category Layout",
    paymentTest: "Usability Test - Purchase Layout",
    mockup: "Final Design",
    uiKit: "UI Kit",
  },
  hero: vodChannelHero,
  projectOverview: {
    title: "Project Overview",
    overview: { title: "Overview", content: "This project was a multimedia platform redesign in collaboration between Taiwan Mobile's UX team and Ogilvy. I served as the key liaison between the myVideo project and external vendors, coordinating and integrating design resources to ensure consistency and high-quality delivery of the product experience." },
    timeline: { title: "Timeline", content: "The project kicked off in June 2016 with an estimated 6-month timeline. The process involved cross-departmental stakeholder communication, agency progress management, user testing validation, and final delivery of design specifications and contract acceptance." },
    challenge: { title: "Challenge", content: "In the past, product managers (PMs) were often skeptical of UX team proposals, creating significant communication barriers. For this redesign, we changed our approach by inviting PMs to directly participate in user testing — transforming them from skeptical observers into active participants who could experience user pain points firsthand, bridging the long-standing perception gap." },
    outcome: { title: "Outcome", content: "By involving PMs in testing, we successfully helped them deeply understand the necessity of UI optimization and reach consensus, significantly improving subsequent collaboration efficiency. Additionally, when the external vendor's resources fell short, I rigorously managed contract deliverable quality and deducted fees for deficiencies, safeguarding company interests and ensuring smooth project delivery." },
  },
  discovery: {
    title: "Discovery",
    intro: "At the project's outset, we analyzed the preliminary research report provided by the vendor, focusing on two key areas:",
    items: [
      "User Feedback Analysis: We consolidated negative reviews (two stars and below) from the App Store and Google Play to identify users' most immediate complaints and pain points.",
      "Data Trend Observation: We referenced backend GA data to gain initial insights into user behavior patterns and churn within the app.",
    ],
    conclusion: "While this information revealed symptoms of the problems, we decided to introduce more compelling user testing to further validate these pain points and convince the PMs.",
  },
  researchGoals: {
    title: "Research Goals",
    items: [
      "Evaluate user sentiment and friction points within the new login flow.",
      "Identify preferred homepage and search layout patterns.",
      "Determine which payment layout best communicates buy/rent options to users.",
      "Define essential features for the live video page experience.",
    ],
  },
  usabilityTesting: {
    title: "User Testing",
    content: "We printed wireframes and mounted them on a wall, selectively revealing only the screens we wanted participants to evaluate. After viewing two wireframes, we asked for their feedback. In the A/B test, we began each session with the layout the participant preferred.",
    wireframes: "WIREFRAMES",
  },
  participants: {
    title: "Participants",
    content: "For this redesign, our goal was to gain buy-in from myVideo product managers on the new app direction. We recruited 9 PMs as test participants, representing the content, marketing, and product teams.",
  },
  testObjectives: {
    title: "Test Objectives",
    items: [
      "Assess how easily users comprehend the post-login popup and its interface elements.",
      "Gauge user reactions to the preference setup feature and identify the optimal moment to trigger it.",
      "Observe how users navigate search and complete payment flows.",
      "Evaluate the usability of video information pages within the app's navigation structure.",
      "Identify frustrations or obstacles that impede users' ability to complete key tasks.",
    ],
  },
  abTesting: {
    title: "A/B Testing - Homepage Layout",
    content: "We wanted users to discover the app's diverse content categories. We masked the dotted yellow area and asked participants, \"Which layout do you prefer?\" Each test session started from the participant's preferred wireframe, and we documented all responses.",
  },
  result1: {
    title: "Result",
    content1: "We merged the two concepts and added an icon button to the video category menu.",
    content2: "When users want to explore more video categories, they can tap the button, swipe the top menu, or scroll the entire screen.",
  },
  loginTest: {
    title: "Usability Test - Login Flow",
    content: "myVideo enforces strict device management rules: one account can only be logged in on one device at a time, and users must register a device before watching videos. Each account supports up to three registered devices, and switching requires a 30-day waiting period.",
    content2: "Given these constraints, we wanted to understand how users feel about the mandatory device registration step immediately after login.",
  },
  result2: {
    title: "Result",
    content: "Users felt confused by the registration prompt right after login — they hadn't consumed any content yet, but the app was already asking them to complete another task. We persuaded product managers to defer the flow, recommending it appear only when users attempt to watch a video. Additionally, if a device slot is available, registration would happen automatically.",
  },
  videoTypeTest: {
    title: "Usability Test - Category Layout",
    content: "Delivering accurate content to users is critical. myVideo uses a two-level category system — for example, selecting \"Comedy\" under \"Movies\" only surfaces movie comedies, not animated comedies. This hierarchy was confusing to users, so we needed to design an interface that made the filtering logic transparent.",
  },
  result3: {
    title: "Result",
    content1: "Used poster thumbnails to visually represent each video category.",
    content2: "If users aren't interested in the displayed titles, they can tap the button below the screen to browse alternative selections.",
  },
  paymentTest: {
    title: "Usability Test - Purchase Layout",
    content: "When users want to watch a paid movie, the app presented too many payment options, creating decision fatigue and confusion.",
  },
  result4: {
    title: "Result",
    content1: "Simplified to three clear payment actions: Monthly Subscription, Buy, and Rent.",
    content2: "Since the product manager wanted to promote the monthly plan, we restructured the layout with three distinct buttons so users could immediately identify the option that fits their needs.",
  },
  liveVideoTest: {
    title: "Usability Test",
    content: "Live videos often have idle periods between segments. We wanted to keep users engaged on the page and needed to validate that any new features added would genuinely serve their needs.",
  },
  result5: {
    title: "Result",
    items: [
      "Tab button labels were ambiguous — users struggled to understand their meaning.",
      "Message board ordering placed newest messages at the bottom, making them hard to find.",
      "Users expressed privacy concerns when posting public messages.",
      "Ratings and reviews needed stronger contextual relevance to the content.",
      "In full-screen mode, users expected a minimal UI — only the \"Send Heart\" button and message count should remain visible.",
    ],
  },
  mockup: {
    title: "Final Design",
    content: "",
  },
  uiKit: {
    title: "UI Kit",
    content: "This redesign primarily adopts a card-based design approach, which allows us to deliver personalized content tailored to different users' preferences. This ensures the overall browsing experience across sections remains engaging and varied. Below are component examples.",
  },
}

export const vodChannelZh = {
  title: "myVideo 體驗重塑與夥伴協作",
  back: "返回",
  sections: {
    discovery: "探索",
    researchGoals: "研究目標",
    usabilityTesting: "使用者測試",
    abTesting: "AB測試 - 首頁佈局",
    loginTest: "可用性測試 - 登入流程",
    videoTypeTest: "可用性測試 - 分類佈局",
    paymentTest: "可用性測試 - 購買佈局",
    mockup: "最後成果",
    uiKit: "UI 元件庫",
  },
  hero: vodChannelHero,
  projectOverview: {
    title: "專案概覽",
    overview: { title: "概述", content: "本專案為台灣大哥大 UX 團隊與奧美（Ogilvy）合作的多媒體平台重塑計畫。我擔任 myVideo 專案與外部廠商溝通的關鍵窗口，負責協調整合各方設計資源，確保產品體驗的一致性與高品質落地。" },
    timeline: { title: "時程", content: "專案於 2016 年 6 月啟動，預計 6 個月完成。執行過程中包含跨部門利害關係人溝通、代理商進度控管、使用者測試驗證，以及最終的設計規範交付與合約驗收。" },
    challenge: { title: "挑戰", content: "過去產品經理（PM）對 UX 團隊的調整方案常持質疑態度，導致溝通阻力大。本次改版我們決定改變策略，邀請 PM 直接加入使用者測試，讓他們從旁觀者轉為參與者，親身體驗用戶痛點以化解長期的認知隔閡。" },
    outcome: { title: "成果", content: "透過讓 PM 參與測試，成功使其深刻體會 UI 優化的必要性並達成共識，大幅提升後續協作效率。同時，在外部廠商資源不足的情況下，我嚴謹控管合約交付品質並根據缺失項扣除費用，確保公司權益與專案順利落地。" },
  },
  discovery: {
    title: "探索發現",
    intro: "在專案初期，我們分析了廠商提供的初步研究報告，主要聚焦於兩大面向：",
    items: [
      "用戶回饋分析：歸納 App Store 與 Google Play 上兩顆星以下的負面評論，識別出使用者最直觀的抱怨與痛點。",
      "數據趨勢觀察：參考後台 GA 數據，初步掌握用戶在 App 上的行為軌跡與流失狀況。",
    ],
    conclusion: "這些資訊雖然提供了問題的徵兆，但為了進一步驗證這些痛點並說服 PM，我們後續決定引入更具說服力的使用者測試。",
  },
  researchGoals: {
    title: "研究目標",
    items: [
      "了解使用者在使用新登入流程時的感受。",
      "使用者喜歡什麼樣的首頁和搜尋版面配置。",
      "使用者能理解什麼樣的付款版面配置來購買/租借影片。",
      "直播影片頁面需要哪些功能。",
    ],
  },
  usabilityTesting: {
    title: "使用者測試",
    content: "我們將線框圖列印出來貼在牆上。只展示我們希望使用者觀看的線框圖，在使用者觀看兩個線框圖後，我們會詢問使用者的感受。在 AB 測試中，我們會從使用者喜歡的線框圖開始測試。",
    wireframes: "線框圖",
  },
  participants: {
    title: "參與者",
    content: "在這次重新設計中，我們希望 myVideo 產品經理能認同新的 APP。我們邀請了 9 位 myVideo PM 作為受測者，他們分別來自 myVideo 內容團隊、行銷團隊和產品團隊。",
  },
  testObjectives: {
    title: "測試目標",
    items: [
      "確定使用者登入後彈出資訊的介面易理解程度。",
      "詢問使用者對偏好設定功能的感受。什麼時機彈出設定是好的？",
      "觀察使用者如何搜尋和付款。",
      "測試影片資訊頁面在 APP 導覽中的易用性。",
      "觀察使用者可能遇到的任何挫折或障礙，這些可能會影響他們完成任務的能力。",
    ],
  },
  abTesting: {
    title: "AB測試 - 首頁佈局",
    content: "我們希望使用者知道這個 APP 有很多影片類型。我們遮蓋黃色虛線區域，並詢問受測者「你喜歡哪種版面配置？」測試從受測者選擇的線框圖開始，我們會記錄受測者的回應。",
  },
  result1: {
    title: "結果",
    content1: "我們混合了兩個想法，在影片類型選單上增加了一個圖示按鈕。",
    content2: "當人們想查看更多影片類型時，可以按下按鈕、滑動頂部選單，或滑動整個畫面。",
  },
  loginTest: {
    title: "可用性測試 - 登入流程",
    content: "登入流程測試，myVideo 對使用者使用裝置有一些規則。一個帳號同時只能登入一個裝置，使用者在觀看影片前應該先註冊裝置。一個帳號可以註冊三個裝置，如果使用者想更換裝置，需要等待 30 天。",
    content2: "根據以上規則，我們想知道使用者在登入後需要註冊時的感受。",
  },
  result2: {
    title: "結果",
    content: "當人們完成登入/註冊後，會對新資訊感到困惑。人們還沒有觀看任何內容，APP 就讓人們必須做其他事情。我們說服產品經理移動流程，建議將流程放在人們想觀看影片之前，如果人們有足夠的裝置，裝置會自動註冊。",
  },
  videoTypeTest: {
    title: "可用性測試 - 分類佈局",
    content: "向使用者提供準確的內容是非常重要的事情。myVideo 的影片類型是兩層的。當使用者選擇搞笑類型時，表示使用者選擇了電影和搞笑類型，不包括動畫和搞笑。這是一個大問題。我們應該設計一個介面來確保使用者理解。",
  },
  result3: {
    title: "結果",
    content1: "使用海報來代表影片類型。",
    content2: "如果人們不喜歡那些電影，可以按畫面下方的按鈕換成其他電影。",
  },
  paymentTest: {
    title: "可用性測試 - 購買佈局",
    content: "當使用者想觀看電影時需要付款，在 APP 中有太多方法。",
  },
  result4: {
    title: "結果",
    content1: "三種付款按鈕：月租、購買和租借。",
    content2: "產品經理想推廣月付方案，所以我們改用 3 個按鈕，讓人們根據自己的狀態知道如何付款。",
  },
  liveVideoTest: {
    title: "可用性測試",
    content: "直播影片通常會有一些空白時間，我們希望使用者留在頁面上。我們應該確保新增到此頁面的新功能是有用的。",
  },
  result5: {
    title: "結果",
    items: [
      "人們會對標籤按鈕的文字含義感到困惑。",
      "留言板上的訊息順序，新訊息總是在底部。",
      "人們在留言時會考慮隱私問題。",
      "增加評分和評論的相關性。",
      "觀看直播影片時想要全螢幕，如果人們使用全螢幕模式，功能只保留「送愛心」和「訊息數量」。",
    ],
  },
  mockup: {
    title: "最後成果",
    content: "",
  },
  uiKit: {
    title: "UI 元件庫",
    content: "這次的改版主要是使用卡片式的設計方式，這樣的方式可以根據不同的用戶提供給該用戶喜愛的內容，讓整個板塊的內容瀏覽下來不會太過於單調，以下是元件範例。",
  },
}
