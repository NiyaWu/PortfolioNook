// Shared hero data (no translation needed)
const otterlyHero = {
  duration: "2026",
  role: "Product Designer (End-to-End)",
  company: "Personal Project",
}

export const otterlyEn = {
  title: "Otterly - Breaking Ice on TON",
  hero: otterlyHero,
  intro: "Otterly is a social Mini App built for Web3 offline events. It helps attendees find each other through professional interests, staying anonymous within a 72-hour window until both sides agree to exchange Telegram IDs.",
  section1: {
    title: "Why I Built This",
    intro: "At the Web3 offline events I've been to, I noticed two recurring social frustrations on the ground. These observations are where Otterly started:",
    items: [
      {
        label: "Social Barriers & Isolation:",
        content: "On-site networking heavily relies on existing connections. Without prior networks, attendees often end up grabbing food and leaving, unable to proactively build meaningful connections with strangers.",
      },
      {
        label: "Unconscious Bias in First Impressions:",
        content: "Traditional networking is easily constrained by appearance, ethnicity, or nationality biases, causing people with shared professional goals to miss connection opportunities due to instinctive psychological barriers.",
      },
    ],
  },
  section2: {
    title: "Product Flow: From Event Entry to Professional Connection",
    intro: "I broke the social flow into four friction-reducing steps. Each step hands the \"should I continue?\" decision back to the user:",
    items: [
      {
        label: "1. Pick an event:",
        content: "After signing in, users see ongoing or upcoming events and pick one to join. Each event is its own social context, so conversations don't get tangled across events.",
      },
      {
        label: "2. Build an anonymous identity:",
        content: "30 seconds to pick an avatar (otter or upload your own), add interest tags, and write a one-line bio. A nickname stands in for the real name.",
      },
      {
        label: "3. Swipe to match:",
        content: "8 free swipes per day. A successful match triggers a cute animation and opens a 72-hour chat window.",
      },
      {
        label: "4. Progressive reveal:",
        content: "Users can chat anonymously for up to 72 hours. Telegram IDs only get exchanged when both sides tap Reveal.",
      },
    ],
  },
  section3: {
    title: "Key Product Decisions",
    intro: "Every mechanism comes with a tradeoff. Here are the key design choices and the reasoning behind each:",
    items: [
      {
        label: "Why an otter mascot:",
        content: "Otterly was originally conceived for Token2049 Singapore. I had lived in Singapore, where two wild otter families (the Bishan family and the Marina family) swap territories each year, migrating and mingling across each other's grounds. That image maps onto the nature of Web3 events: people from around the world gather briefly, meet, then disperse. So the otter is both a piece of place-based memory and a reflection of what the product is about. On execution, 20 expressive otter faces let users project personality and lower social pressure without exposing how they look, keeping the anonymity boundary intact.",
      },
      {
        label: "Why 72-hour chats:",
        content: "Unlimited chats turn into a graveyard of \"matched but never said hi.\" 72 hours covers a full event cycle and creates urgency. People who want to talk meet at the venue; people who don't, naturally drift apart.",
      },
      {
        label: "Why two-way reveal:",
        content: "One-way reveal recreates the imbalance of traditional dating apps. Mutual opt-in makes trust gradual and prevents harassment.",
      },
      {
        label: "Why a shell economy:",
        content: "A daily free quota covers the basic experience. Shells unlock extended chats and extra swipes, forming a natural paid path. Every \"I want to do more\" action costs shells, so paid features won't break the free experience.",
      },
    ],
  },
  section4: {
    title: "AI Workflow: Chaining New Tools End-to-End",
    intro: "Otterly was a chance to try a new AI workflow on my own, taking a concept all the way from mechanism to a near-finished product.",
    items: [
      {
        label: "Prototyping with Claude AI:",
        content: "I described the core mechanism (time limits, anonymity, data deletion, two-way reveal) to Claude AI to generate a working prototype. The project moved from \"concept\" to \"playable\" in one step.",
      },
      {
        label: "UI redesign with Google Stitch:",
        content: "After validating the interaction, I rebuilt the UI in Google Stitch (newly released), adding visual detail to bring the project closer to ship-ready.",
      },
      {
        label: "Character workflow, from sketch to animation:",
        content: "I drew the otter myself first to lock in personality and pose. ChatGPT then unified the style, preserved the original character, and expanded the action set. An online tool converted the result to SVG, which I refined before Jitter handled the final animations.",
      },
    ],
  },
  section5: {
    title: "Looking Ahead",
    content: "Plans include a daily mission system, so users keep accumulating shells between events through actions like sign-ins, hitting swipe targets, and starting conversations with matches. Chat data clears at the end of each event, but missions and shells accumulate across events, turning the gap between events into a habit of returning. Over time, those engagement metrics also become real usage data Otterly can bring to event organizers when pitching partnerships. Beyond that, the platform can open ad slots and introduce brand-sponsored missions, connecting user engagement directly to a business model.",
  },
}

export const otterlyZh = {
  title: "Otterly - Breaking Ice on TON",
  hero: otterlyHero,
  intro: "Otterly 是為 Web3 線下活動設計的社交 Mini App，讓參與者透過「專業興趣」找到彼此。整段流程匿名、72 小時時效，雙方同意才交換 Telegram ID。",
  section1: {
    title: "為什麼做這個產品",
    intro: "在參加過的 Web3 線下活動裡，看見兩個讓人挫折的社交困境，這也是 Otterly 出發的起點：",
    items: [
      {
        label: "社交門檻與孤島感：",
        content: "現場社交高度依賴熟人引薦。若缺乏既有人脈，參與者往往只能「吃吃東西就離開」，難以主動與陌生人建立高品質連結。",
      },
      {
        label: "第一印象的潛在偏見：",
        content: "傳統社交容易受限於外貌、人種或國籍等「無意識偏見」，導致具備共同專業目標的人，可能因為直覺的心理隔閡而錯失交流機會。",
      },
    ],
  },
  section2: {
    title: "產品流程：從活動入場到專業連結",
    intro: "我把整個社交流程拆成四個降低摩擦的步驟，每一步都把「決定要不要繼續」的權力交回使用者手上：",
    items: [
      {
        label: "1. 選擇活動：",
        content: "登入後看見正在進行或即將開始的活動，選一場進入。每場活動是獨立社交場域，避免訊息混雜。",
      },
      {
        label: "2. 建立匿名身份：",
        content: "30 秒內選頭像（水獺或自上傳）、加興趣標籤、寫一句簡介。以暱稱代替真名。",
      },
      {
        label: "3. 滑卡配對：",
        content: "每日 8 次免費滑卡額度。配對成功後跳出可愛動畫並開啟 72 小時聊天視窗。",
      },
      {
        label: "4. 漸進揭露：",
        content: "72 小時內可匿名聊天。雙方都點下 Reveal 才會交換 Telegram ID。",
      },
    ],
  },
  section3: {
    title: "關鍵產品決策",
    intro: "每個機制背後都有取捨。以下是幾個關鍵的設計選擇與理由：",
    items: [
      {
        label: "為什麼是水獺角色：",
        content: "這個產品最初是為 Token2049 新加坡構思的。我曾在新加坡生活，當地有兩個野生水獺家族（碧山家族與濱海家族），每年會交換棲息地、在彼此的領域中遷徙與交流。這個畫面剛好對應 Web3 活動的本質：來自世界各地的人短暫聚集、認識彼此、再各自離開。所以選水獺作為吉祥物，既是地緣記憶，也呼應產品的核心精神。執行上，20 款表情各異的水獺讓使用者能投射個性、降低社交壓力，又不暴露真實外貌，保留匿名邊界。",
      },
      {
        label: "為什麼是 72 小時聊天：",
        content: "無時限聊天會變成「滑到但永遠不開口」的死訊息墳場。72 小時夠完整一場活動週期，又製造急迫感，想聊的雙方會在會場相見，不想聊的自然消散。",
      },
      {
        label: "為什麼要雙向 Reveal：",
        content: "單向揭露會回到傳統社交軟體的不對等。雙向同意才交換 ID 確保信任感是漸進建立的，也避免騷擾。",
      },
      {
        label: "為什麼設計貝殼經濟：",
        content: "每日免費額度建立基本體驗，貝殼解鎖延長聊天或額外滑卡形成自然的付費路徑。所有「想做更多」的動作都消耗貝殼，未來付費功能不會破壞免費體驗。",
      },
    ],
  },
  section4: {
    title: "AI 開發流程：把新工具串成工作流",
    intro: "Otterly 是我獨自試 AI 工具、把工作流串起來的一次練習。",
    items: [
      {
        label: "用 Claude AI 做原型：",
        content: "我把核心機制（時效、匿名、資料刪除、雙方 Reveal）描述給 Claude AI 生成原型，讓專案直接從「機制」走到「能玩」。",
      },
      {
        label: "用 Google Stitch 重做 UI：",
        content: "互動驗證後用剛推出的 Google Stitch 重做 UI、補上視覺細節，把產品完成度推到接近 ship 的狀態。",
      },
      {
        label: "從手繪到動畫的角色工作流：",
        content: "先自己畫稿，定下人格與姿勢。再用 ChatGPT 統一風格、保留原稿特色、擴增動作。線上工具轉成 SVG 後再手動調整檔案，最後用 Jitter 做動畫。",
      },
    ],
  },
  section5: {
    title: "未來規劃",
    content: "計畫導入每日任務系統，讓使用者在會場以外的日子也能持續累積貝殼，例如簽到、滑卡達標、與配對對象開啟對話等行為。聊天資料會在活動結束後清空，但任務與貝殼是跨活動累積的，把單次使用的斷點接成回訪習慣。長期下來，這些活躍指標也成為 Otterly 跟活動主辦方談合作時的真實數據。再延伸下去，可以開放廣告版位、引入廠商贊助任務，讓使用者活躍度直接接到商業模式。",
  },
}
