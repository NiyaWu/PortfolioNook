"use client"

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react"
import Image from "next/image"
import { useLanguage } from "@/contexts/language-context"
import { Header } from "@/components/header"
import { RichText } from "@/components/rich-text"

type Piece = { src: string; name: string; stage?: string; group?: string; controls?: boolean }

const ZoomContext = createContext<(p: Piece) => void>(() => {})

function Media({ piece, className }: { piece: Piece; className?: string }) {
  if (piece.src.endsWith(".mp4")) {
    // Short loops behave like the GIFs beside them; long-form video gets controls.
    return piece.controls ? (
      <video src={piece.src} controls playsInline preload="metadata" className={className} />
    ) : (
      <video
        src={piece.src}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-label={piece.name}
        className={className}
      />
    )
  }
  return (
    <Image
      src={piece.src}
      alt={piece.name}
      width={1600}
      height={1200}
      unoptimized={piece.src.endsWith(".gif")}
      className={className}
    />
  )
}

// Groups whose pieces already share a ratio keep their natural height.
function Tile({ piece }: { piece: Piece }) {
  const zoom = useContext(ZoomContext)
  return (
    <figure className="m-0 group">
      <button
        type="button"
        onClick={() => zoom(piece)}
        aria-label={`${piece.name} — enlarge`}
        className="block w-full cursor-zoom-in overflow-hidden rounded-lg bg-muted focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground"
      >
        <div className="relative overflow-hidden">
          <Media
            piece={piece}
            className="block h-auto w-full transition-transform duration-500 ease-out motion-safe:group-hover:scale-[1.04]"
          />
          <span className="pointer-events-none absolute inset-0 transition-colors duration-300 group-hover:bg-foreground/[0.06]" />
        </div>
      </button>
      <Caption piece={piece} />
    </figure>
  )
}

// Mixed-ratio groups get one shared 3:2 window, cropped to fill, so rows line up.
function CropTile({ piece }: { piece: Piece }) {
  const zoom = useContext(ZoomContext)
  return (
    <figure className="m-0 group">
      <button
        type="button"
        onClick={() => zoom(piece)}
        aria-label={`${piece.name} — enlarge`}
        className="block w-full cursor-zoom-in overflow-hidden rounded-lg bg-muted focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground"
      >
        <div className="relative aspect-[3/2] w-full overflow-hidden">
          <Media
            piece={piece}
            className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-500 ease-out motion-safe:group-hover:scale-[1.04]"
          />
          <span className="pointer-events-none absolute inset-0 transition-colors duration-300 group-hover:bg-foreground/[0.06]" />
        </div>
      </button>
      <Caption piece={piece} />
    </figure>
  )
}

// Mixed-ratio pieces that need to be seen whole: one shared window with a soft
// mat behind them, each piece scaled to fit inside it.
function FitTile({ piece }: { piece: Piece }) {
  const zoom = useContext(ZoomContext)
  return (
    <figure className="m-0 group">
      <button
        type="button"
        onClick={() => zoom(piece)}
        aria-label={`${piece.name} — enlarge`}
        className="block w-full cursor-zoom-in rounded-lg bg-foreground/[0.04] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground"
      >
        <div className="flex aspect-[3/2] w-full items-center justify-center p-4 md:p-6">
          <Media
            piece={piece}
            className="max-h-full w-auto max-w-full object-contain transition-transform duration-500 ease-out motion-safe:group-hover:scale-[1.04]"
          />
        </div>
      </button>
      <Caption piece={piece} />
    </figure>
  )
}

function Caption({ piece }: { piece: Piece }) {
  return (
    <figcaption className="mt-2.5 flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
      {piece.stage && (
        <span className="font-mono text-[11px] tracking-wider text-primary">{piece.stage}</span>
      )}
      <span className="text-[13px] md:text-sm font-medium text-foreground transition-colors group-hover:text-primary">
        {piece.name}
      </span>
    </figcaption>
  )
}

function Gallery({
  pieces,
  variant = "natural",
}: {
  pieces: Piece[]
  variant?: "natural" | "crop" | "fit"
}) {
  const Item = variant === "crop" ? CropTile : variant === "fit" ? FitTile : Tile
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 items-start">
      {pieces.map((p) => (
        <Item key={p.src} piece={p} />
      ))}
    </div>
  )
}

// SHUI's long overview beside a stack of its shorter pieces, so the two columns
// end up close in height.
function Split({ tall, stack }: { tall: Piece; stack: Piece[] }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[55fr_45fr] gap-5 md:gap-6 items-start">
      <Tile piece={tall} />
      <div className="flex flex-col gap-5 md:gap-6">
        {stack.map((p) => (
          <Tile key={p.src} piece={p} />
        ))}
      </div>
    </div>
  )
}

function SectionHead({ tag, title, desc }: { tag: string; title: string; desc: string }) {
  return (
    <>
      <p className="font-mono text-[11px] uppercase tracking-wider text-primary mb-3">{tag}</p>
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-2">{title}</h2>
      <p className="max-w-[62ch] text-sm md:text-base text-muted-foreground leading-relaxed mb-8 md:mb-10">
        {desc}
      </p>
    </>
  )
}

function SubHead({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mt-10 mb-4 pb-2 border-b border-border">
      {children}
    </p>
  )
}

export function BrandingDetail() {
  const { t } = useLanguage()
  const [active, setActive] = useState(0)
  const [showSidebar, setShowSidebar] = useState(false)
  const [activeSection, setActiveSection] = useState("campaigns")
  const [zoomIdx, setZoomIdx] = useState<number | null>(null)

  const b = t.branding
  const m = b.media
  const s = b.sections
  const c = s.campaigns

  const campaignPieces: Piece[] = useMemo(() => {
    const proj = c.projects[active]
    const runs = [m.hemi, m.maquina, m.aethir]
    return (runs[active] ?? []).map(
      (q: { src: string; stage?: string; controls?: boolean }, i: number) => ({
        src: q.src,
        stage: q.stage,
        controls: q.controls,
        name: proj.names[i],
      }),
    )
  }, [active, c, m])

  const supportingPieces: Piece[] = useMemo(() => {
    const proj = c.projects[active]
    const sets = [m.hemiSupporting, [], m.aethirSupporting]
    const set = sets[active] ?? []
    return set.map((q: { src: string; controls?: boolean }, i: number) => ({
      src: q.src,
      controls: q.controls,
      name: proj.supportingNames?.[i] ?? "",
    }))
  }, [active, c, m])

  const backdrops: Piece[] = m.backdrops.map((src: string, i: number) => ({
    src,
    name: `${s.solana.backdropName} 0${i + 1}`,
  }))
  const printSocial: Piece[] = [
    { src: m.standee, name: s.solana.standee.name },
    { src: m.lumaCover, name: s.solana.lumaCover.name },
    { src: m.twitterBanner, name: s.solana.twitterBanner.name },
  ]
  const onsite: Piece[] = [...m.eventPortrait, ...m.eventLandscape].map(
    (src: string, i: number) => ({ src, name: `${s.solana.eventPhoto} 0${i + 1}` }),
  )
  const shuiMain: Piece[] = [
    { src: m.shuiOnePage, name: s.shui.onePage.name },
    ...m.shuiSide.map((src: string, i: number) => ({ src, name: s.shui.names[i] })),
  ]
  const shuiMore: Piece[] = m.shuiMore.map((src: string, i: number) => ({
    src,
    name: s.shui.moreNames[i],
  }))
  const bladeWide: Piece[] = m.bladeWide.map((src: string, i: number) => ({
    src,
    name: s.blade.wideNames[i],
  }))
  const bladeOther: Piece[] = m.bladeOther.map((src: string, i: number) => ({
    src,
    name: s.blade.otherNames[i],
  }))

  // Everything on screen in reading order, so the lightbox can page through it.
  const allPieces: Piece[] = useMemo(() => {
    const tag = (arr: Piece[], group: string) => arr.map((p) => ({ ...p, group }))
    return [
      ...tag([...campaignPieces, ...supportingPieces], c.title),
      ...tag([...backdrops, ...printSocial, ...onsite], s.solana.title),
      ...tag([...shuiMain, ...shuiMore], s.shui.title),
      ...tag([...bladeWide, ...bladeOther], s.blade.title),
    ]
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [campaignPieces, supportingPieces, s, c.title])

  const groupStarts = useMemo(() => {
    const out: { label: string; index: number }[] = []
    allPieces.forEach((p, i) => {
      if (p.group && out[out.length - 1]?.label !== p.group) out.push({ label: p.group, index: i })
    })
    return out
  }, [allPieces])

  const openZoom = useCallback(
    (piece: Piece) => {
      const i = allPieces.findIndex((x) => x.src === piece.src)
      setZoomIdx(i >= 0 ? i : null)
    },
    [allPieces],
  )
  const step = useCallback(
    (dir: number) =>
      setZoomIdx((i) => (i === null ? i : (i + dir + allPieces.length) % allPieces.length)),
    [allPieces.length],
  )

  const navItems = [
    { id: "campaigns", label: b.nav.campaigns },
    { id: "solana", label: b.nav.solana },
    { id: "shui", label: b.nav.shui },
    { id: "blade", label: b.nav.blade },
  ]

  useEffect(() => {
    const onScroll = () => {
      setShowSidebar(window.scrollY > 300)
      const current = navItems
        .map((n) => document.getElementById(n.id))
        .find((el) => {
          if (!el) return false
          const r = el.getBoundingClientRect()
          return r.top <= 150 && r.bottom >= 150
        })
      if (current) setActiveSection(current.id)
    }
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (zoomIdx === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setZoomIdx(null)
      if (e.key === "ArrowRight") step(1)
      if (e.key === "ArrowLeft") step(-1)
    }
    document.addEventListener("keydown", onKey)
    document.body.style.overflow = "hidden"
    return () => {
      document.removeEventListener("keydown", onKey)
      document.body.style.overflow = ""
    }
  }, [zoomIdx, step])

  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (!el) return
    window.scrollTo({
      top: el.getBoundingClientRect().top + window.pageYOffset - 100,
      behavior: "smooth",
    })
  }

  return (
    <ZoomContext.Provider value={openZoom}>
      <div className="min-h-screen bg-background">
        <Header />

        {/* Hero */}
        <div className="pt-20 md:pt-28 pb-10 md:pb-14 px-6 md:px-8 lg:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 md:mb-6 leading-tight">
              {b.title}
            </h1>
            <RichText className="mx-auto max-w-[38rem] text-left text-sm md:text-base text-muted-foreground leading-relaxed">
              {b.intro}
            </RichText>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 pb-20 md:pb-28">
          <div className="flex gap-12 lg:gap-16">
            <aside
              className={`hidden lg:block w-32 flex-shrink-0 transition-opacity duration-300 ${
                showSidebar ? "opacity-100" : "opacity-0 pointer-events-none"
              }`}
            >
              <div className="sticky top-32">
                <nav className="space-y-1">
                  {navItems.map((n) => (
                    <button
                      key={n.id}
                      onClick={() => scrollTo(n.id)}
                      className={`block w-full text-left text-xs py-1.5 px-2 transition-colors ${
                        activeSection === n.id
                          ? "text-foreground font-medium"
                          : "text-muted-foreground/60 hover:text-muted-foreground"
                      }`}
                    >
                      {n.label}
                    </button>
                  ))}
                </nav>
              </div>
            </aside>

            <main className="flex-1 min-w-0 space-y-20 md:space-y-28">
              {/* IDO / INO campaign assets, switchable by project */}
              <section id="campaigns">
                <SectionHead tag={c.tag} title={c.title} desc={c.desc} />
                <div className="flex flex-wrap items-center gap-2 mb-6 md:mb-8">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mr-1">
                    {c.switchLabel}
                  </span>
                  {c.projects.map((proj: { label: string; full: string }, i: number) => (
                    <button
                      key={proj.label}
                      type="button"
                      onClick={() => setActive(i)}
                      aria-pressed={active === i}
                      className={`rounded-full border px-3.5 py-1.5 text-xs md:text-[13px] transition-colors ${
                        active === i
                          ? "border-foreground bg-foreground text-background font-medium"
                          : "border-border text-muted-foreground hover:text-foreground hover:border-foreground/40"
                      }`}
                    >
                      {proj.label}
                    </button>
                  ))}
                </div>
                <p className="text-xs md:text-sm text-muted-foreground mb-5 md:mb-6">
                  {c.projects[active].full}
                </p>
                <Gallery pieces={campaignPieces} />
                {supportingPieces.length > 0 && (
                  <>
                    <SubHead>{c.supportingLabel}</SubHead>
                    <Gallery pieces={supportingPieces} />
                  </>
                )}
              </section>

              {/* Solana Consumer Day */}
              <section id="solana">
                <SectionHead tag={s.solana.tag} title={s.solana.title} desc={s.solana.desc} />
                <SubHead>{s.solana.subBackdrops}</SubHead>
                <Gallery pieces={backdrops} />
                <SubHead>{s.solana.subPrint}</SubHead>
                <Gallery pieces={printSocial} variant="fit" />
                <SubHead>{s.solana.subOnsite}</SubHead>
                <Gallery pieces={onsite} variant="crop" />
              </section>

              {/* SHUI */}
              <section id="shui">
                <SectionHead tag={s.shui.tag} title={s.shui.title} desc={s.shui.desc} />
                <Split
                  tall={{ src: m.shuiOnePage, name: s.shui.onePage.name }}
                  stack={m.shuiSide.map((src: string, i: number) => ({
                    src,
                    name: s.shui.names[i],
                  }))}
                />
                <SubHead>{s.shui.subMore}</SubHead>
                <Gallery pieces={shuiMore} />
              </section>

              {/* BLADE */}
              <section id="blade">
                <SectionHead tag={s.blade.tag} title={s.blade.title} desc={s.blade.desc} />
                <Gallery pieces={bladeWide} />
                <SubHead>{s.blade.subOther}</SubHead>
                <Gallery pieces={bladeOther} variant="crop" />
              </section>
            </main>
          </div>
        </div>

        {zoomIdx !== null && (
          <div
            role="dialog"
            aria-modal="true"
            aria-label={allPieces[zoomIdx].name}
            onClick={() => setZoomIdx(null)}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center gap-3 bg-background/95 p-4 md:p-8 backdrop-blur-sm"
          >
            <div
              className="flex flex-wrap items-center justify-center gap-1.5 md:gap-2"
              onClick={(e) => e.stopPropagation()}
            >
              {groupStarts.map((grp) => (
                <button
                  key={grp.label}
                  type="button"
                  onClick={() => setZoomIdx(grp.index)}
                  aria-pressed={allPieces[zoomIdx].group === grp.label}
                  className={`rounded-full border px-3 py-1 text-[11px] md:text-xs transition-colors ${
                    allPieces[zoomIdx].group === grp.label
                      ? "border-foreground bg-foreground text-background font-medium"
                      : "border-border text-muted-foreground hover:border-foreground/40 hover:text-foreground"
                  }`}
                >
                  {grp.label}
                </button>
              ))}
            </div>
            <div
              className="flex w-full items-center justify-center gap-3 md:gap-6"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => step(-1)}
                aria-label="Previous"
                className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-foreground/40 hover:text-foreground"
              >
                ←
              </button>
              <Media
                piece={allPieces[zoomIdx]}
                className="max-h-[78vh] w-auto max-w-full rounded-lg object-contain"
              />
              <button
                type="button"
                onClick={() => step(1)}
                aria-label="Next"
                className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-foreground/40 hover:text-foreground"
              >
                →
              </button>
            </div>
            <p
              className="text-xs md:text-sm text-muted-foreground"
              onClick={(e) => e.stopPropagation()}
            >
              <span className="font-mono mr-2 opacity-60 tabular-nums">
                {zoomIdx + 1} / {allPieces.length}
              </span>
              {allPieces[zoomIdx].name}
              <span className="ml-3 opacity-60">← → 切換　Esc 關閉</span>
            </p>
          </div>
        )}
      </div>
    </ZoomContext.Provider>
  )
}
