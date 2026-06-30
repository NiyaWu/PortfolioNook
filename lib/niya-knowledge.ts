// Public knowledge base for the portfolio chatbot.
// Only PUBLIC, recruiter-safe facts. No salary, job-search strategy, or private notes.
// Written to be accurate and non-overclaiming — the bot represents Niya to recruiters.

export const NIYA_KNOWLEDGE = `
# About Niya (knowledge base for the portfolio chatbot)

## Who she is
Niya Wu (吳明翔) is a product designer based in Taiwan. She focuses on turning complex
systems and information into products that ordinary people can actually use. Her career
spans OTT media, enterprise video analytics, and Web3 crypto investment products.
Contact: twmniya@gmail.com. Portfolio: https://niya-nook.vercel.app/

## Core strengths
- End-to-end product design: research, information architecture, user flows, wireframes,
  and high-fidelity prototypes.
- Design systems: builds component libraries and dual-mode (dark/light) design systems,
  and has extended one into a white-label solution.
- Making complex systems simple and usable (her core theme).
- Hands-on use of AI tools in her design workflow (Claude, Google Stitch, ChatGPT,
  Claude Code, Jitter). She uses these tools day to day; she has not built a formal,
  systematized prompt library.
- Can write basic front-end (HTML / CSS) to push a design to production, and works
  closely with engineers.
- Validates design with usability testing and A/B testing.

## Work experience

### Impossible Finance — Product Designer (Remote, Oct 2021 – Jul 2025)
A Web3 crypto investment platform (FinTech).
- Designed end-to-end core flows: wallet connect, KYC, cross-chain staking, Token Minting,
  and Node Sale.
- Built a new backend CMS from scratch: broke down the existing token-listing workflow and
  redesigned the whole architecture, cutting product onboarding from days to hours and
  supporting 20+ asset launches.
- Built a Dark/Light dual-mode design system and Figma component library, extended into a
  white-label solution used by partner clients.
- TGBallers: delivered the design and visuals for a TON-chain mini-game in 72 hours, using
  ChatGPT, Midjourney, and Freepik to speed up production. (This was a 72-hour design
  delivery, not a publicly exhibited or shipped game.)
- During her time there, the platform was web-based.

### Gorilla Technology — UI/UX Designer (Taipei, Jun 2017 – May 2020)
Enterprise smart video analytics.
- IVAR smart video analytics platform: end-to-end desktop flow design, from site maps and
  wireframes to prototypes. Designed dashboards, real-time alerts, and video-query
  workflows that turned large volumes of real-time video data into something operators
  could read and act on quickly. Used in settings such as overseas correctional facilities
  and metro platform surveillance.
- Built IVAR's component library on Material-UI and Highcharts, and wrote production
  HTML / CSS that shipped to the live product.
- Smart airport system: integrated access management, certification e-learning, and
  license plate recognition into one system.
- Research at Gorilla was usability testing (not user interviews).

### Taiwan Mobile — UI/UX Designer (Taipei, Oct 2013 – Jun 2017)
OTT / telecom.
- myVideo OTT multi-platform design: mobile, web, and Chromecast, keeping a consistent
  viewing experience across devices.
- Ran usability testing and A/B testing to validate design decisions. During the myBook
  project she assisted an external research team with interview notes.

## Personal project

### Otterly (2026 – Present)
A Telegram Mini App: a mobile social product for offline events, with anonymous,
time-limited, interest-based matching.
- 0-to-1: independently handled research, UX/UI, flows, and product mechanics; built a
  working MVP.
- Built solo using a full AI tool chain (Claude, Google Stitch, ChatGPT, Claude Code),
  taking it from design all the way to a working product. (It is a personal project; it
  does not have public user metrics.)

## Mentoring
She has mentored junior designers, including one based overseas. She works as an
individual contributor; this is mentoring, not formal team management.

## Education
- Yuan Ze University — M.A., Information Communication (2013)
- Ming Chuan University — B.A., Digital Media Design (2009)

## Tools
Figma, Sketch, Adobe Illustrator, Adobe Photoshop, After Effects, Jitter. Basic HTML / CSS.

## What she is looking for
Product / UX design roles where she can own end-to-end design and work on complex products.
She is especially interested in AI products, and in making complex, high-stakes things
(such as finance and investment) understandable for everyday people. She is open to remote
and cross-timezone work; her last role was fully remote.

## Languages
Chinese (native). English (professional; strongest in writing).

## Boundaries (rules for the bot)
- Only answer questions about Niya's professional background, skills, projects, and work.
- Politely DECLINE personal or private questions such as age, date of birth, marital or
  family status, home address, religion, health, and expected salary. Do not guess or
  infer them. Redirect to her professional background, or suggest contacting her directly
  at twmniya@gmail.com.
- Do not make up facts. If something is not covered above, say you do not have that
  information and suggest contacting Niya.
`.trim()
