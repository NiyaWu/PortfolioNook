// Shared hero data (no translation needed)
const idoWorkflowHero = {
  duration: "2023",
  role: "Design System / Workflow Design",
  company: "Impossible Finance",
}

export const idoWorkflowEn = {
  title: "IDO Marketing Design Workflow Optimization",
  hero: idoWorkflowHero,
  problem: {
    title: "The Problem",
    intro: "In the original workflow, we faced two substantial pain points:",
    items: [
      {
        label: "Low Modification Efficiency",
        content: "Previously using Adobe Illustrator, dozens of artboard sizes were independent of each other. Once core visuals (such as IDO key visuals) changed, each artboard had to be manually clicked and assets replaced one by one—extremely time-consuming and prone to omissions.",
      },
      {
        label: "Timezone Communication Gap",
        content: "IDO sale times often changed at the last minute. Previously, marketing personnel couldn't operate AI files and had to wait for designers (12-hour time difference) to make changes. This not only delayed progress but also trapped designers in low-value tasks like \"text editing\".",
      },
    ],
  },
  phase1: {
    title: "Phase 1: Asset Migration & Systematic Management",
    description: "I moved the design battlefield from Illustrator to Figma, establishing a \"modify once, sync everywhere\" structure.",
    approach: "Approach:",
    approachContent: "Defined frequently replaced visual elements as \"Components\".",
    value: "Value:",
    valueContent: "Now only need to replace the image once in the parent component, and all Banner sizes will automatically inherit the update. This elevated the workflow logic from \"editing artboards one by one\" to \"systematic management\".",
  },
  phase2: {
    title: "Phase 2: Empowering Marketing Team & Decentralized Collaboration",
    description: "Leveraging Figma's ease of use to redefine cross-team work boundaries.",
    approach: "Approach:",
    approachContent: "After setting up templates, marketing personnel can directly enter Figma to modify sale dates and copy.",
    value: "Value:",
    valueContent: "Completely eliminated the 12-hour timezone wait. The marketing team can export required assets in real-time, while designers are freed from frequent text adjustments.",
  },
  phase3: {
    title: "Phase 3: Introducing Highly Flexible Dynamic Templates",
    description: "To address marketing's need for \"subtle motion\", I researched and introduced Jitter, which integrates seamlessly with Figma.",
    approach: "Approach:",
    approachContent: "Import Figma visuals into Jitter to create dynamic templates.",
    value: "Value:",
    valueContent: "Jitter allows marketing personnel, even without animation background, to independently adjust text and export dynamic visuals as easily as operating PowerPoint, ensuring both flexibility and quality.",
  },
  impact: {
    title: "Outcomes & Learnings",
    content: "By systematically managing design assets, I successfully elevated the design logic from \"single editing\" to \"global synchronization\", significantly reducing human errors in multi-specification production. This workflow also redefined cross-team collaboration boundaries, enabling marketing to independently fine-tune copy and completely eliminating the 12+ hour timezone waiting bottleneck. This experience taught me profoundly that a designer's value lies not only in visual output, but also in solving organizational-level productivity pain points through Toolchain Optimization.",
  },
}

export const idoWorkflowZh = {
  title: "IDO 行銷設計工作流優化",
  hero: idoWorkflowHero,
  problem: {
    title: "核心問題與挑戰",
    intro: "在原有的工作流中，我們面臨兩個實質痛點：",
    items: [
      {
        label: "修改效率低下",
        content: "過去使用 Adobe Illustrator，數十個尺寸的畫板彼此獨立。一旦核心視覺（如 IDO 主視覺）更動，必須逐一手動點擊每個畫板更換素材，極耗時且容易遺漏。",
      },
      {
        label: "時區溝通斷層",
        content: "IDO 銷售時間常有臨時變動。過去行銷人員無法操作 AI 檔案，必須等待設計師（12 小時時差）修改。這不僅耽誤進度，也讓設計師被困在「改字」這種低價值的任務中。",
      },
    ],
  },
  phase1: {
    title: "第一階段：資產遷移與系統化管理",
    description: "我將設計戰場從 Illustrator 轉移至 Figma，建立「一處修改，全域同步」的結構。",
    approach: "做法：",
    approachContent: "將需要頻繁替換的視覺元素定義為「組件 (Components)」。",
    value: "價值：",
    valueContent: "現在只需在母組件中更換一次圖像，所有尺寸的 Banner 會自動繼承更新。這將工作邏輯從「逐一編輯畫板」提升到了「系統化管理」。",
  },
  phase2: {
    title: "第二階段：賦能行銷團隊與去中心化協作",
    description: "利用 Figma 的易用性，重新定義跨團隊的工作邊界。",
    approach: "做法：",
    approachContent: "設定好模板後，由行銷人員直接進入 Figma 修改銷售日期與文案。",
    value: "價值：",
    valueContent: "徹底消除了 12 小時的時區等待。行銷團隊能即時導出所需圖檔，設計師則從頻繁的文字微調中解放。",
  },
  phase3: {
    title: "第三階段：導入高彈性的動態模板",
    description: "針對行銷端對「微動態」的需求，我研究並導入了與 Figma 高度整合的 Jitter。",
    approach: "做法：",
    approachContent: "將 Figma 視覺匯入 Jitter 製作成動態模板。",
    value: "價值：",
    valueContent: "Jitter 讓行銷人員即使不具備動畫背景，也能像操作 PPT 一樣自主調整文字並導出動態視覺，確保靈活度與品質並存。",
  },
  impact: {
    title: "成效與學習",
    content: "透過將設計資產系統化管理，我成功將設計邏輯從「單一編輯」提升至「全域同步」，大幅降低了多規格製作的人為疏失。此流程更重新定義了跨團隊協作邊界，讓行銷端能自主微調文案，徹底消除 12 小時以上的時區等待瓶頸。這讓我深刻體會到，設計師的價值不僅在於視覺產出，更在於能透過工具鏈的優化（Toolchain Optimization）解決組織層級的生產力痛點。",
  },
}
