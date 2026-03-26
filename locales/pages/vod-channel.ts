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
      "Understand the people feeling when using the new login flow.",
      "What kind of homepage and search layout do people like.",
      "What kind of payment layout the people can understand how to buy/rent a video.",
      "What kind of functions have to do in the live video page.",
    ],
  },
  usabilityTesting: {
    title: "User Testing",
    content: "We print the wireframes and stink on a wall. Only show the wireframes we want the users to watch, after the user watches two wireframes, we will ask the user's feelings. In the AB testing, we will start the testing use the wireframe which is the user's like.",
    wireframes: "WIREFRAMES",
  },
  participants: {
    title: "Participants",
    content: "In this re-design, we want myVideo product managers can agree with the new APP. We invite 9 myVideo PM to be subjects. They are from myVideo content team, marketing team, and product team.",
  },
  testObjectives: {
    title: "Test Objectives",
    items: [
      "Determine the ease at which users after login the popup information to understand the interface means.",
      "Ask user feelings about preferences setup function. When is a good moment to popup the setup is well?",
      "Observe how users searched for and payment.",
      "Test the video information pages' ease of use of navigating the APP.",
      "Observe any frustrations or obstacles users may have that may impede their ability to complete their tasks.",
    ],
  },
  abTesting: {
    title: "AB Testing - Homepage Layout",
    content: "We want to users know the app has lots of video types. We cover the dotted yellow area, and ask the subject \"which layout you like? \" The test starts from the subject's choice wireframe, we will take notes and recorded the responses of the subjects.",
  },
  result1: {
    title: "Result",
    content1: "We mix the two ideas, add an icon button on the video type menu.",
    content2: "When people want to see more video types, they can press the button, slide on the top menu, or slide the whole screen.",
  },
  loginTest: {
    title: "Usability Test - Login Flow",
    content: "Login flow test, myVideo has some rules on people using devices. One account only can log in one device at the same time, and the user should register the device before watch videos. One account can register three devices, if users want to change the device, they should waiting 30 days.",
    content2: "According to the above, we want to know the user's feelings when they should register after login.",
  },
  result2: {
    title: "Result",
    content: "People confuse the new information when people finish the competition login/registered. People didn't watch any content and the app lets people have to do other things. We persuade product managers to move the flow, we suggest putting the flow before people want to watch videos, and if people have enough devices the device will be auto-register.",
  },
  videoTypeTest: {
    title: "Usability Test - Category Layout",
    content: "Provide accurate content to users is a very important thing. The video types in myVideo is 2 levels. When users select a funny type that means user select movie and funny type, not including animate and funny. That's a big question. We should design an interface to make sure users understand.",
  },
  result3: {
    title: "Result",
    content1: "Use posters to represent video type.",
    content2: "If people don't like those movies, they can press the button under the screen to change other movies.",
  },
  paymentTest: {
    title: "Usability Test - Purchase Layout",
    content: "When users what to watch a movie they should pay, in the APP have too much method.",
  },
  result4: {
    title: "Result",
    content1: "Three types of payment button: month rent, buy and rent.",
    content2: "Product manager wants to promote month payment so we change to use 3 buttons which people will know how to pay according to their status.",
  },
  liveVideoTest: {
    title: "Usability Test",
    content: "Live videos usually have some blank times and we want users to stay in the page. We should make sure new features will add to this page are useful.",
  },
  result5: {
    title: "Result",
    items: [
      "People will confuse the tab buttons wording meaning.",
      "Messages order on the board, the new message always under the bottom.",
      "People consider private problems when they leave the message.",
      "Increase the relevance of ratings and reviews.",
      "When watching the live video want to full screen if people use full-screen mode the feature only leaves \"sent heart\" and \"number of messages\".",
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
