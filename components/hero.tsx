"use client"

import { Fragment, useEffect, useRef, useState, type ReactNode } from "react"
import { Send, Loader2, RotateCcw, Sparkles } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

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
  },
}

export function Hero() {
  const { t, locale } = useLanguage()
  const c = CHAT_COPY[locale]

  const [isVisible, setIsVisible] = useState(false)
  const [messages, setMessages] = useState<Msg[]>([])
  const [input, setInput] = useState("")
  const [loading, setLoading] = useState(false)
  const scrollRef = useRef<HTMLDivElement>(null)

  const started = messages.length > 0

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
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 md:px-8 lg:px-12 overflow-hidden">
      {/* Bottom gradient fade to white */}
      <div className="absolute bottom-0 left-0 right-0 h-32 md:h-48 bg-gradient-to-b from-transparent to-white pointer-events-none z-20" />

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="ripple-effect absolute" />
        <div className="ripple-effect absolute" />
        <div className="ripple-effect absolute" />
        <div className="ripple-effect absolute" />
        <div className="ripple-effect absolute" />
      </div>

      <div
        className={`relative z-10 flex w-full max-w-3xl flex-col items-center gap-8 transition-all duration-1000 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        {/* Top: intro */}
        <div className="text-center">
          <h1 className="mb-5 text-5xl font-bold leading-tight tracking-tight text-foreground md:text-6xl lg:text-7xl">
            {t.hero.name}
          </h1>
          <p className="mx-auto max-w-md text-lg leading-relaxed text-muted-foreground md:text-xl">
            {t.hero.description}
          </p>
        </div>

        {/* Bottom: chat area (solid surfaces so it reads as one complete block) */}
        <div className="w-full space-y-4">
          {/* Chat panel — conversation + input live in one box */}
          <div className="flex w-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-[0_10px_40px_rgba(0,0,0,0.06)] transition-shadow focus-within:shadow-[0_10px_40px_rgba(0,0,0,0.10)]">
            {/* Conversation thread (appears once a message is sent) */}
            {started && (
              <div
                ref={scrollRef}
                className="max-h-[40vh] space-y-2.5 overflow-y-auto border-b border-gray-100 p-5 text-left"
              >
                <div className="mr-auto w-fit max-w-[88%] rounded-2xl rounded-tl-sm bg-gray-100 px-3.5 py-2 text-sm leading-relaxed text-gray-700">
                  {c.greeting}
                </div>

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
              </div>
            )}

            {/* Input */}
            <form
              onSubmit={(e) => {
                e.preventDefault()
                send(input)
              }}
              className="flex flex-col gap-3 px-5 py-4"
            >
              <div className="flex items-start gap-3">
                <Sparkles className="mt-1.5 h-5 w-5 shrink-0 text-[#0071e3]" />
                <textarea
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey) {
                      e.preventDefault()
                      send(input)
                    }
                  }}
                  placeholder={c.placeholder}
                  maxLength={1000}
                  rows={3}
                  aria-label={c.placeholder}
                  className="flex-1 resize-none bg-transparent text-base leading-relaxed text-gray-900 outline-none placeholder:text-gray-400"
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="submit"
                  disabled={loading || !input.trim()}
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#0071e3] text-white transition-opacity hover:opacity-90 disabled:opacity-40"
                  aria-label={c.send}
                >
                  {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
                </button>
              </div>
            </form>
          </div>

          {/* Example cards (always visible — click to fill the input) */}
          <div className="pt-1 text-left">
            <div className="mb-3 flex items-center justify-between px-1">
              <p className="text-xs font-medium uppercase tracking-wider text-gray-400">
                {c.tryLabel}
              </p>
              {started && (
                <button
                  onClick={reset}
                  className="inline-flex items-center gap-1.5 text-xs text-gray-400 transition-colors hover:text-gray-600"
                >
                  <RotateCcw className="h-3.5 w-3.5" />
                  {c.restart}
                </button>
              )}
            </div>
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
              {c.suggestions.map((s) => (
                <button
                  key={s}
                  onClick={() => send(s)}
                  className="rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-left text-xs leading-relaxed text-gray-600 transition-colors hover:border-[#0071e3]/40 hover:bg-white hover:text-gray-900"
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* Interview booking happens in the chat: leaving an email notifies Niya */}
          <p className="px-1 text-center text-xs text-gray-400">{c.contactHint}</p>
        </div>
      </div>

      {/* Scroll cue (idle only) — gives a reason to scroll: her work is below */}
      {!started && (
        <a
          href="#work"
          className="group absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-2 text-gray-400 transition-colors hover:text-gray-700"
        >
          <span className="text-[11px] font-medium uppercase tracking-[0.15em]">{c.scroll}</span>
          <svg className="h-5 w-5 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      )}
    </section>
  )
}
