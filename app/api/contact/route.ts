// Interview / contact requests from the portfolio chat.
// Forwards to the Google Apps Script webhook, which logs to a Sheet and emails Niya.

const EMAIL_RE = /^[^@\s]+@[^@\s]+\.[^@\s]+$/

// Lightweight per-instance rate limit to keep the inbox safe from spam.
const hits = new Map<string, { count: number; resetAt: number }>()
const WINDOW_MS = 60_000
const MAX_PER_WINDOW = 5

function rateLimited(ip: string) {
  const now = Date.now()
  const entry = hits.get(ip)
  if (!entry || now > entry.resetAt) {
    hits.set(ip, { count: 1, resetAt: now + WINDOW_MS })
    return false
  }
  entry.count += 1
  return entry.count > MAX_PER_WINDOW
}

export async function POST(req: Request) {
  const webhook = process.env.SHEET_WEBHOOK_URL
  if (!webhook) {
    return Response.json({ error: "Contact is not configured yet." }, { status: 500 })
  }

  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown"
  if (rateLimited(ip)) {
    return Response.json(
      { error: "Too many requests right now. Please try again in a minute." },
      { status: 429 },
    )
  }

  let body: { email?: string; message?: string }
  try {
    body = await req.json()
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 })
  }

  const email = String(body?.email || "").trim().slice(0, 200)
  const message = String(body?.message || "").trim().slice(0, 2000)

  if (!EMAIL_RE.test(email)) {
    return Response.json({ error: "Please enter a valid email." }, { status: 400 })
  }

  try {
    const res = await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ type: "interview", email, message }),
    })
    if (!res.ok) throw new Error(`webhook ${res.status}`)
    return Response.json({ ok: true })
  } catch (err) {
    console.error("Contact route error:", err)
    return Response.json(
      { error: "Could not send right now. Please email twmniya@gmail.com directly." },
      { status: 502 },
    )
  }
}
