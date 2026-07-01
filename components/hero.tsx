"use client"

import { Fragment, useEffect, useRef, useState, type ReactNode } from "react"
import { Send, Loader2, RotateCcw, Sparkles, ArrowDown, X, Check } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { PillButton } from "@/components/pill-button"

type Msg = { role: "user" | "assistant"; content: string }

// If a visitor types an email, we notify Niya in the background (in-chat booking).
const EMAIL_RE = /[^\s@]+@[^\s@]+\.[^\s@]+/

// Lightweight, dependency-free renderer: turns **bold** into <strong> and
// leading -/* markers into proper bullets, so stray Markdown never shows raw.
function renderRich(text: string): ReactNode {
  const lines = text.split("\n")
  return lines.map((line, i) => {
    const bullet = line.match(/^\s*[-*]\s+(.*)$/)
    const body = bullet ? bullet[1] : line
    const segments = body.split(/(\*\*[^*]+\*\*)/g).map((seg, j) => {
      const m = seg.match(/^\*\*([^*]+)\*\*$/)
      return m ? <strong key={j}>{m[1]}</strong> : <Fragment key={j}>{seg}</Fragment>
    })
    return (
      <p key={i} className={bullet ? "flex gap-1.5" : i > 0 ? "mt-1.5" : ""}>
        {bullet && <span className="select-none text-gray-400">•</span>}
        <span>{segments}</span>
      </p>
    )
  })
}

const CHAT_COPY = {
  en: {
    placeholder: "Ask me anything about Niya…",
    greeting: "Hi! I'm Niya's assistant. Ask me anything about her work, projects, or skills.",
    suggestions: ["What are her design strengths?", "Tell me about Otterly", "How does she use AI in her work?"],
    error: "Sorry, something went wrong. Please try again.",
    send: "Send",
    restart: "Start over",
    tryLabel: "Try asking",
    scroll: "See selected work",
    contactHint: "Want to talk to Niya? Just leave your email in the chat and she'll follow up.",
    eyebrow: "Product Designer",
    headlinePre: "I make ",
    headlineAccent: "complex systems",
    headlinePost: " simple.",
    subline: "These days, I build with AI tools too.",
    strengths: [
      "End-to-end product design, from research to high-fidelity prototypes",
      "Design systems built to scale, dark/light and white-label",
      "AI tools in my daily work, from prototyping to UI and motion",
    ],
    openChat: "Ask my AI assistant",
    chatTitle: "Ask about Niya",
  },
  zh: {
    placeholder: "關於 Niya，什麼都可以問我…",
    greeting: "嗨！我是 Niya 的小助理，關於她的經歷、專案、能力都可以問我。",
    suggestions: ["她的設計強項是什麼？", "介紹一下 Otterly", "她怎麼把 AI 用在工作裡？"],
    error: "抱歉，出了點問題，請再試一次。",
    send: "送出",
    restart: "重新開始",
    tryLabel: "可以這樣問",
    scroll: "往下看作品",
    contactHint: "想預約面試？在對話裡留下你的 email，Niya 會主動跟你聯絡。",
    eyebrow: "Niya · 產品設計師",
    headlinePre: "把",
    headlineAccent: "複雜的系統",
    headlinePost: "變簡單。",
    subline: "這陣子，我也用 AI 工具一起做。",
    strengths: [
      "完整的產品設計流程，從研究到高擬真原型",
      "可規模化的設計系統，涵蓋深色／淺色與白標",
      "每天用 AI 工具，從原型到介面與動態",
    ],
    openChat: "問問我的 AI 助理",
    chatTitle: "問問關於 Niya",
  },
}

export function Hero() {
  const { t, locale } = useLanguage()
  const c = CHAT_COPY[locale]

  const [isVisible, setIsVisible] = useState(false)
  const [messages, setMessages] = useState<Msg[]>([])
  const [input, setInput] = useState("")
  const [loading, setLoading] = useState(false)
  // Follow-up suggestions returned by the model; falls back to the defaults.
  const [dynamicSuggestions, setDynamicSuggestions] = useState<string[] | null>(null)
  // Mobile only: open the chat as a full-screen overlay.
  const [open, setOpen] = useState(false)
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return
    document.body.style.overflow = "hidden"
    document.body.classList.add("chat-open")
    return () => {
      document.body.style.overflow = ""
      document.body.classList.remove("chat-open")
    }
  }, [open])

  const started = messages.length > 0
  const suggestions = dynamicSuggestions ?? c.suggestions

  useEffect(() => {
    setIsVisible(true)
  }, [])

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" })
  }, [messages, loading])

  async function send(text: string) {
    const trimmed = text.trim()
    if (!trimmed || loading) return

    const next: Msg[] = [...messages, { role: "user", content: trimmed }]
    setMessages(next)
    setInput("")
    setLoading(true)

    // In-chat booking: if the visitor leaves an email, notify Niya in the
    // background with recent context. Best-effort; never blocks the chat.
    const emailMatch = trimmed.match(EMAIL_RE)
    if (emailMatch) {
      const transcript = next.slice(-6).map((m) => `${m.role}: ${m.content}`).join("\n")
      fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: emailMatch[0], message: transcript }),
      }).catch(() => {})
    }

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: next, locale }),
      })
      const data = await res.json()
      const reply = res.ok && data.reply ? data.reply : data.error || c.error
      setMessages([...next, { role: "assistant", content: reply }])
      if (res.ok && Array.isArray(data.suggestions) && data.suggestions.length > 0) {
        setDynamicSuggestions(data.suggestions)
      }
    } catch {
      setMessages([...next, { role: "assistant", content: c.error }])
    } finally {
      setLoading(false)
    }
  }

  function reset() {
    setMessages([])
    setInput("")
    setLoading(false)
    setDynamicSuggestions(null)
  }

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 py-20 md:px-8 md:py-0 lg:px-12">
      {/* Bottom gradient fade to white */}
      <div className="absolute bottom-0 left-0 right-0 h-32 md:h-48 bg-gradient-to-b from-transparent to-white pointer-events-none z-20" />

      <div className="pointer-events-none absolute inset-0 flex items-center justify-center isolate">
        <div className="ripple-effect absolute" />
        <div className="ripple-effect absolute" />
        <div className="ripple-effect absolute" />
        <div className="ripple-effect absolute" />
        <div className="ripple-effect absolute" />
      </div>

      <div
        className={`relative grid w-full max-w-6xl grid-cols-1 items-center gap-10 transition-all duration-1000 md:grid-cols-2 lg:gap-16 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        {/* Left: intro */}
        <div className="text-center md:text-left">
          <h1 className="text-6xl font-bold leading-none text-foreground md:text-7xl lg:text-[5rem]">
            {t.hero.name}
          </h1>
          <p className="mt-4 text-xl font-medium leading-snug text-gray-600 md:text-2xl">
            {c.headlinePre}
            <span className="bg-gradient-to-r from-[#0071e3] to-[#06b6d4] bg-clip-text text-transparent">
              {c.headlineAccent}
            </span>
            {c.headlinePost}
          </p>
          <ul className="mx-auto mt-6 w-fit space-y-2.5 text-left md:mx-0">
            {c.strengths.map((s) => (
              <li key={s} className="flex items-start gap-3 text-sm text-gray-700 md:text-base">
                <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#0071e3]/10 text-[#0071e3]">
                  <Check className="h-3 w-3" strokeWidth={3} />
                </span>
                <span>{s}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-col items-stretch gap-3 md:flex-row md:items-center md:justify-start">
            <PillButton
              onClick={() => document.getElementById("work")?.scrollIntoView({ behavior: "smooth" })}
              className="w-full md:w-auto"
            >
              {c.scroll}
              <ArrowDown className="h-4 w-4" />
            </PillButton>
            {/* Mobile only: open the chat (desktop has the inline panel) */}
            <PillButton
              variant="outline"
              onClick={() => setOpen(true)}
              className="w-full md:hidden"
            >
              <Sparkles className="h-4 w-4" />
              {c.openChat}
            </PillButton>
          </div>
        </div>

        {/* Right: chat panel — inline card on desktop; full-screen overlay on
            mobile (opened from the secondary button) */}
        <div className="w-full">
          <div
            className={`${
              open ? "fixed inset-0 z-[60] flex h-full w-full flex-col bg-white" : "hidden"
            } overflow-hidden md:static md:z-auto md:flex md:h-[32rem] md:w-full md:flex-col md:rounded-2xl md:border md:border-gray-200 md:bg-white md:shadow-[0_10px_40px_rgba(0,0,0,0.06)]`}
          >
            {/* Mobile header with close */}
            <div className="flex items-center justify-between border-b border-gray-200 px-4 py-3 md:hidden">
              <span className="text-sm font-semibold text-gray-900">{c.chatTitle}</span>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close"
                className="rounded-full p-1.5 text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-700"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Conversation thread */}
            <div
              ref={scrollRef}
              className="flex-1 space-y-2.5 overflow-y-auto p-5 text-left"
            >
              {/* Greeting (assistant, left) */}
              <div className="mr-auto w-fit max-w-[88%] rounded-2xl rounded-tl-sm bg-gray-100 px-3.5 py-2 text-sm leading-relaxed text-gray-700">
                {c.greeting}
              </div>

              {/* Conversation */}
              {messages.map((m, i) => (
                <div
                  key={i}
                  className={
                    m.role === "user"
                      ? "ml-auto w-fit max-w-[88%] rounded-2xl rounded-tr-sm bg-[#0071e3] px-3.5 py-2 text-sm leading-relaxed text-white"
                      : "mr-auto w-fit max-w-[88%] rounded-2xl rounded-tl-sm bg-gray-100 px-3.5 py-2 text-sm leading-relaxed text-gray-700"
                  }
                >
                  {m.role === "assistant" ? renderRich(m.content) : m.content}
                </div>
              ))}

              {loading && (
                <div className="mr-auto flex w-fit items-center gap-2 rounded-2xl rounded-tl-sm bg-gray-100 px-3.5 py-2 text-sm text-gray-500">
                  <Loader2 className="h-4 w-4 animate-spin" />
                </div>
              )}

              {/* Suggested questions as tappable bubbles (right side, like quick replies) */}
              {!loading &&
                suggestions.map((s) => (
                  <button
                    key={s}
                    onClick={() => send(s)}
                    className="ml-auto block w-fit max-w-[88%] rounded-2xl rounded-tr-sm border border-[#0071e3] bg-white px-3.5 py-2 text-sm leading-relaxed text-[#0071e3] transition-colors hover:bg-[#0071e3] hover:text-white"
                  >
                    {s}
                  </button>
                ))}
            </div>

            {/* Input (white field floating on the gray panel) */}
            <form
              onSubmit={(e) => {
                e.preventDefault()
                send(input)
              }}
              className="p-3"
            >
              <div className="flex items-center gap-2 rounded-full border border-gray-200 bg-white py-1.5 pl-3 pr-1.5 shadow-sm transition-shadow focus-within:shadow-md">
                {started ? (
                  <button
                    type="button"
                    onClick={reset}
                    aria-label={c.restart}
                    title={c.restart}
                    className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-700"
                  >
                    <RotateCcw className="h-4 w-4" />
                  </button>
                ) : (
                  <Sparkles className="h-5 w-5 shrink-0 text-[#0071e3]" />
                )}
                <textarea
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => {
                    // Skip while an IME is composing (e.g. Chinese input) so the
                    // Enter that confirms characters doesn't also submit.
                    if (e.key === "Enter" && !e.shiftKey && !e.nativeEvent.isComposing) {
                      e.preventDefault()
                      send(input)
                    }
                  }}
                  placeholder={c.placeholder}
                  maxLength={1000}
                  rows={1}
                  aria-label={c.placeholder}
                  className="flex-1 resize-none self-center bg-transparent text-base text-gray-900 outline-none placeholder:text-gray-400"
                />
                <button
                  type="submit"
                  disabled={loading || !input.trim()}
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#0071e3] text-white transition-opacity hover:opacity-90 disabled:opacity-40"
                  aria-label={c.send}
                >
                  {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
                </button>
              </div>
            </form>

            {/* Footer: interview hint */}
            <div className="px-4 pb-3 pt-0.5 text-center">
              <p className="px-1 text-xs text-gray-400">{c.contactHint}</p>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}
