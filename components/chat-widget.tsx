"use client"

import { useEffect, useRef, useState } from "react"
import { MessageCircle, X, Send, Loader2 } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

type Msg = { role: "user" | "assistant"; content: string }

const COPY = {
  en: {
    title: "Ask about Niya",
    open: "Chat",
    placeholder: "Ask me anything about Niya...",
    greeting: "Hi! Ask me anything about Niya's work, projects, or skills.",
    suggestions: ["What are her strengths?", "Tell me about Otterly", "Her AI experience?"],
    error: "Sorry, something went wrong. Please try again.",
    send: "Send",
  },
  zh: {
    title: "問問關於 Niya",
    open: "聊聊",
    placeholder: "關於 Niya，什麼都可以問我…",
    greeting: "嗨！關於 Niya 的經歷、專案、能力，什麼都可以問我。",
    suggestions: ["她的設計強項是什麼？", "介紹一下 Otterly", "她的 AI 經驗？"],
    error: "抱歉，出了點問題，請再試一次。",
    send: "送出",
  },
}

export function ChatWidget() {
  const { locale } = useLanguage()
  const t = COPY[locale]

  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<Msg[]>([])
  const [input, setInput] = useState("")
  const [loading, setLoading] = useState(false)
  const scrollRef = useRef<HTMLDivElement>(null)

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

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: next }),
      })
      const data = await res.json()
      const reply = res.ok && data.reply ? data.reply : data.error || t.error
      setMessages([...next, { role: "assistant", content: reply }])
    } catch {
      setMessages([...next, { role: "assistant", content: t.error }])
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="fixed bottom-6 left-6 z-50">
      {open ? (
        <div className="flex h-[28rem] w-[22rem] max-w-[calc(100vw-3rem)] flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-2xl">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-gray-100 px-4 py-3">
            <span className="text-sm font-semibold text-gray-900">{t.title}</span>
            <button
              onClick={() => setOpen(false)}
              className="rounded-full p-1 text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-700"
              aria-label="Close chat"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
            <div className="max-w-[85%] rounded-2xl rounded-tl-sm bg-gray-100 px-3 py-2 text-sm text-gray-800">
              {t.greeting}
            </div>

            {messages.length === 0 && (
              <div className="flex flex-wrap gap-2 pt-1">
                {t.suggestions.map((s) => (
                  <button
                    key={s}
                    onClick={() => send(s)}
                    className="rounded-full border border-gray-200 px-3 py-1 text-xs text-gray-600 transition-colors hover:border-[#0071e3] hover:text-[#0071e3]"
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}

            {messages.map((m, i) => (
              <div
                key={i}
                className={
                  m.role === "user"
                    ? "ml-auto max-w-[85%] rounded-2xl rounded-tr-sm bg-[#0071e3] px-3 py-2 text-sm text-white"
                    : "max-w-[85%] whitespace-pre-wrap rounded-2xl rounded-tl-sm bg-gray-100 px-3 py-2 text-sm text-gray-800"
                }
              >
                {m.content}
              </div>
            ))}

            {loading && (
              <div className="flex max-w-[85%] items-center gap-2 rounded-2xl rounded-tl-sm bg-gray-100 px-3 py-2 text-sm text-gray-500">
                <Loader2 className="h-4 w-4 animate-spin" />
              </div>
            )}
          </div>

          {/* Input */}
          <form
            onSubmit={(e) => {
              e.preventDefault()
              send(input)
            }}
            className="flex items-center gap-2 border-t border-gray-100 px-3 py-3"
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={t.placeholder}
              maxLength={1000}
              className="flex-1 rounded-full bg-gray-100 px-4 py-2 text-sm text-gray-900 outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-[#0071e3]/30"
            />
            <button
              type="submit"
              disabled={loading || !input.trim()}
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#0071e3] text-white transition-opacity hover:opacity-90 disabled:opacity-40"
              aria-label={t.send}
            >
              <Send className="h-4 w-4" />
            </button>
          </form>
        </div>
      ) : (
        <button
          onClick={() => setOpen(true)}
          className="flex items-center gap-2 rounded-full bg-[#0071e3] px-4 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:shadow-xl"
          aria-label={t.open}
        >
          <MessageCircle className="h-5 w-5" />
          <span>{t.open}</span>
        </button>
      )}
    </div>
  )
}
