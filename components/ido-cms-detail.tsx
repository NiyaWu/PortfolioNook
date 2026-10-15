"use client"

import { Fragment, useEffect, useState } from "react"
import Image from "next/image"
import Lottie from "lottie-react"
import { useLanguage } from "@/contexts/language-context"
import { Header } from "@/components/header"
import { ProjectOverview } from "@/components/project-overview"
import { RichText } from "@/components/rich-text"
import salePageAnimation from "@/public/Sale-Page.json"

export function IdoCmsDetail() {
  const { t } = useLanguage()
  const [showSidebar, setShowSidebar] = useState(false)
  const [activeSection, setActiveSection] = useState("background")
  const [comparisonPosition, setComparisonPosition] = useState(50)
  const [activeChallenge, setActiveChallenge] = useState<number | null>(null)

  const linkedJourneySteps = [
    { laneIndex: 0, stepIndexes: [0] },
    { laneIndex: 0, stepIndexes: [1] },
    { laneIndex: 1, stepIndexes: [0] },
    { laneIndex: 1, stepIndexes: [1, 2] },
    { laneIndex: 1, stepIndexes: [1, 2, 3, 4] },
  ]

  const isJourneyStepActive = (laneIndex: number, stepIndex: number) => {
    if (activeChallenge === null) return false

    const link = linkedJourneySteps[activeChallenge]
    return link.laneIndex === laneIndex && link.stepIndexes.includes(stepIndex)
  }

  const sections = [
    { id: "background", label: t.idoCms.sections.background },
    { id: "solution", label: t.idoCms.sections.solution },
    { id: "design", label: t.idoCms.sections.design },
    { id: "userResearch", label: t.idoCms.sections.userResearch },
    { id: "outcome", label: t.idoCms.sections.outcome },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setShowSidebar(window.scrollY > 300)

      // Update active section based on scroll position
      const sectionElements = sections.map((section) =>
        document.getElementById(section.id)
      )

      const currentSection = sectionElements.find((element) => {
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 150 && rect.bottom >= 150
        }
        return false
      })

      if (currentSection) {
        setActiveSection(currentSection.id)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [sections])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offset = 100
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <div className="pt-20 md:pt-28 pb-8 md:pb-12 flex items-center justify-center px-6 md:px-8 lg:px-12">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold text-foreground mb-4 md:mb-6 leading-tight">
            {t.idoCms.title}
          </h1>

          <p className="mx-auto mb-6 max-w-3xl text-xs leading-relaxed text-muted-foreground md:text-sm">
            {t.idoCms.impactStatement}
          </p>

          <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 md:gap-x-8 md:gap-y-1 text-xs md:text-sm text-muted-foreground leading-tight mb-6 md:mb-10">
            <div>
              <span className="font-medium">Duration: </span>
              {t.idoCms.hero.duration}
            </div>
            <div>
              <span className="font-medium">Role: </span>
              {t.idoCms.hero.role}
            </div>
            <div>
              <span className="font-medium">Company: </span>
              {t.idoCms.hero.company}
            </div>
          </div>

          {/* Hero Image */}
          <div className="w-full rounded-lg overflow-hidden shadow-lg">
            <Lottie
              animationData={salePageAnimation}
              loop={true}
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 py-12 md:py-20 lg:py-24">
        <div className="flex gap-12 lg:gap-16">
          {/* Left Sidebar Navigation - Only shows after scrolling past hero */}
          <aside className={`hidden lg:block w-32 flex-shrink-0 transition-opacity duration-300 ${
            showSidebar ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}>
            <div className="sticky top-32">
              <nav className="space-y-1">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={`block w-full text-left text-xs py-1.5 px-2 transition-colors ${
                      activeSection === section.id
                        ? "text-foreground font-medium"
                        : "text-muted-foreground/60 hover:text-muted-foreground"
                    }`}
                  >
                    {section.label}
                  </button>
                ))}
              </nav>
            </div>
          </aside>

          {/* Main Content Area */}
          <main className="flex-1 max-w-[840px]">
            <ProjectOverview
              title={t.idoCms.projectOverview.title}
              items={[
                t.idoCms.projectOverview.overview,
                t.idoCms.projectOverview.timeline,
                t.idoCms.projectOverview.challenge,
                t.idoCms.projectOverview.outcome,
              ]}
            />

            {/* Content Sections */}
            <div className="space-y-16 md:space-y-24 lg:space-y-32">
              {/* Background & Problem */}
              <section id="background">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4 md:mb-6">
                  {t.idoCms.background.title}
                </h2>
                <RichText className="text-sm md:text-base text-muted-foreground leading-relaxed mb-6">
                  {t.idoCms.background.intro}
                </RichText>
                <div className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-2">
                  {t.idoCms.background.audiences.map((audience: { label: string; title: string; content: string }) => (
                    <div key={audience.label} className="rounded-xl border border-border p-5 md:p-6">
                      <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-primary">
                        {audience.label}
                      </p>
                      <h3 className="mb-2 text-base font-semibold text-foreground md:text-lg">
                        {audience.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        {audience.content}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="mb-10">
                  <div className="mb-4">
                    <h3 className="text-base font-semibold text-foreground md:text-lg">
                      {t.idoCms.background.journey.title}
                    </h3>
                  </div>
                  <div>
                    <div className="flex flex-col gap-3">
                      {t.idoCms.background.journey.lanes.map((lane: { label: string; audience: string; steps: string[] }, laneIndex: number) => (
                        <Fragment key={lane.label}>
                          {laneIndex === 1 && (
                            <div className="flex h-8 items-center justify-center">
                              <span className="text-2xl text-primary">↓</span>
                            </div>
                          )}
                          <div className={`flex-1 rounded-xl border p-4 ${laneIndex === 0 ? "border-[#cfc7ff] bg-[#e9e5ff]" : "border-[#b9e2eb] bg-[#def3f7]"}`}>
                            <div className="flex items-baseline justify-between gap-3">
                              <p className={`text-xs font-semibold uppercase tracking-wider ${laneIndex === 0 ? "text-[#514a9b]" : "text-[#197487]"}`}>
                                {lane.label}
                              </p>
                              <p className="text-[10px] text-muted-foreground">{lane.audience}</p>
                            </div>
                            <ol className="mt-4 flex items-center gap-2">
                              {lane.steps.map((step, stepIndex) => {
                                const isActive = isJourneyStepActive(laneIndex, stepIndex)
                                const activeColor = laneIndex === 0 ? "border-[#655bb4] bg-[#655bb4]" : "border-[#197487] bg-[#197487]"

                                return (
                                  <Fragment key={step}>
                                    {stepIndex > 0 && <span className="shrink-0 text-muted-foreground/50">→</span>}
                                    <li className={`flex min-h-16 flex-1 flex-col justify-center rounded-lg border px-3 py-2 shadow-sm transition-colors duration-200 ${isActive ? activeColor : "border-white/90 bg-white/80"}`}>
                                      <span className={`text-[10px] font-semibold ${isActive ? "text-white/80" : laneIndex === 0 ? "text-[#655bb4]" : "text-[#197487]"}`}>
                                        0{stepIndex + 1}
                                      </span>
                                      <span className={`mt-1 whitespace-pre-line text-xs leading-snug ${isActive ? "text-white" : "text-foreground/80"}`}>{step}</span>
                                    </li>
                                  </Fragment>
                                )
                              })}
                            </ol>
                            <div className="mt-4 border-t border-white/80 pt-4">
                              <p className={`mb-3 text-[10px] font-semibold uppercase tracking-wider ${laneIndex === 0 ? "text-[#514a9b]" : "text-[#197487]"}`}>
                                {t.idoCms.background.journey.challengeLabel}
                              </p>
                              <div className={`grid gap-3 ${laneIndex === 0 ? "md:grid-cols-2" : "md:grid-cols-3"}`}>
                                {t.idoCms.background.challenges
                                  .slice(laneIndex === 0 ? 0 : 2, laneIndex === 0 ? 2 : undefined)
                                  .map((challenge: { title: string; content: string }, challengeIndex: number) => {
                                    const index = laneIndex * 2 + challengeIndex

                                    return (
                                      <div
                                        key={challenge.title}
                                        className="rounded-lg border border-white/80 bg-white/60 p-4 outline-none transition-colors duration-200 hover:bg-white/90 focus-visible:ring-2 focus-visible:ring-primary/40"
                                        tabIndex={0}
                                        onMouseEnter={() => setActiveChallenge(index)}
                                        onMouseLeave={(event) => {
                                          if (document.activeElement !== event.currentTarget) {
                                            setActiveChallenge(null)
                                          }
                                        }}
                                        onFocus={() => setActiveChallenge(index)}
                                        onBlur={() => setActiveChallenge(null)}
                                      >
                                        <p className={`mb-2 text-[10px] font-semibold ${laneIndex === 0 ? "text-[#655bb4]" : "text-[#197487]"}`}>
                                          {t.idoCms.background.journey.challengeItemLabel} {String.fromCharCode(65 + index)}
                                        </p>
                                        <RichText as="h4" className="mb-1 text-sm font-semibold text-foreground">
                                          {challenge.title}
                                        </RichText>
                                        <RichText className="text-xs leading-relaxed text-muted-foreground md:text-sm">
                                          {challenge.content}
                                        </RichText>
                                      </div>
                                    )
                                  })}
                              </div>
                            </div>
                          </div>
                        </Fragment>
                      ))}
                    </div>
                  </div>
                </div>
                <RichText className="border-l-2 border-primary pl-5 text-sm md:text-base text-muted-foreground leading-relaxed">
                  {t.idoCms.background.goal}
                </RichText>
              </section>

              {/* Solution */}
              <section id="solution">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4 md:mb-6">
                  {t.idoCms.solution.title}
                </h2>
                <p className="mb-8 text-sm leading-relaxed text-muted-foreground md:text-base">
                  {t.idoCms.solution.content}
                </p>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                  {t.idoCms.solution.principles.map((principle: { title: string; content: string }, index: number) => (
                    <div key={principle.title} className="rounded-lg border border-border p-5">
                      <span className="mb-4 flex h-7 w-7 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary">
                        {index + 1}
                      </span>
                      <h3 className="mb-2 text-base font-semibold text-foreground">{principle.title}</h3>
                      <p className="text-sm leading-relaxed text-muted-foreground">{principle.content}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Design */}
              <section id="design">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4 md:mb-6">
                  {t.idoCms.design.title}
                </h2>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-8 md:mb-12">
                  {t.idoCms.design.content}
                </p>
                <div className="space-y-16 md:space-y-24">
                  {t.idoCms.design.decisions.map((decision: { title: string; problem: string; decision: string; userChange: string; image?: string; imageCaption: string }, index: number) => (
                    <article key={decision.title}>
                      <h3 className="mb-7 text-xl font-semibold text-foreground md:text-2xl">
                        {decision.title}
                      </h3>
                      <div className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-3">
                        <div className="rounded-lg bg-muted/40 p-5">
                          <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">{t.idoCms.design.labels.problem}</p>
                          <p className="text-sm leading-relaxed text-foreground/80">{decision.problem}</p>
                        </div>
                        <div className="rounded-lg bg-muted/40 p-5">
                          <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">{t.idoCms.design.labels.decision}</p>
                          <p className="text-sm leading-relaxed text-foreground/80">{decision.decision}</p>
                        </div>
                        <div className="rounded-lg bg-primary/10 p-5">
                          <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-primary">{t.idoCms.design.labels.userChange}</p>
                          <p className="text-sm leading-relaxed text-foreground/80">{decision.userChange}</p>
                        </div>
                      </div>

                      {index === 2 ? (
                        <div>
                          <div className="group relative aspect-[16/9] overflow-hidden rounded-lg border border-border bg-muted select-none">
                            <Image src="/IDO-Project-Sales.png" alt="Project-centric page containing multiple sale pools" fill className="object-cover object-[center_32%]" />
                            <div className="absolute inset-0 overflow-hidden" style={{ clipPath: `inset(0 ${100 - comparisonPosition}% 0 0)` }}>
                              <Image src="https://image.blocktempo.com/2021/08/1phk9iopHgXQhXfJbzYX8gw.png" alt="Sale-centric page layout" fill className="object-cover object-top" />
                            </div>
                            <div className="absolute inset-y-0 w-0.5 bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.15)] pointer-events-none" style={{ left: `${comparisonPosition}%` }}>
                              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background text-xs text-foreground shadow-sm">↔</div>
                            </div>
                            <span className="absolute left-3 top-3 rounded bg-foreground/90 px-2 py-1 text-[10px] font-medium text-background">V1 · Sale-centric</span>
                            <span className="absolute right-3 top-3 rounded bg-foreground/90 px-2 py-1 text-[10px] font-medium text-background">V2 · Project-centric</span>
                            <input type="range" min="0" max="100" value={comparisonPosition} onChange={(event) => setComparisonPosition(Number(event.target.value))} aria-label="Compare sale-centric and project-centric layouts" className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0" />
                          </div>
                          <p className="text-[10px] md:text-xs text-muted-foreground/70 text-center mt-3">{decision.imageCaption}</p>
                        </div>
                      ) : decision.image ? (
                        <div>
                          <Image src={decision.image} alt={decision.title} width={1200} height={800} className="w-full h-auto rounded-lg" />
                          <p className="text-[10px] md:text-xs text-muted-foreground/70 text-center mt-3">{decision.imageCaption}</p>
                        </div>
                      ) : null}
                    </article>
                  ))}
                </div>
              </section>

              {/* User Research */}
              <section id="userResearch">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-8 md:mb-10">
                  {t.idoCms.userResearch.title}
                </h2>
                <div className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-3">
                  {t.idoCms.userResearch.details.map((detail: { title: string; content: string }, index: number) => (
                    <div key={detail.title} className={`rounded-lg p-5 ${index === 2 ? "bg-primary/10" : "bg-muted/40"}`}>
                      <h3 className={`mb-2 text-xs font-semibold uppercase tracking-wider ${index === 2 ? "text-primary" : "text-muted-foreground"}`}>
                        {detail.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-foreground/80">
                        {detail.content}
                      </p>
                    </div>
                  ))}
                </div>
                <div>
                  <div className="overflow-hidden rounded-lg border border-border bg-muted">
                    <video
                      controls
                      playsInline
                      preload="metadata"
                      className="block h-auto w-full"
                    >
                      <source src="/CMS-Prototype.mp4" type="video/mp4" />
                      Your browser does not support embedded video.
                    </video>
                  </div>
                  <p className="mt-3 text-center text-[10px] text-muted-foreground/70 md:text-xs">
                    {t.idoCms.userResearch.videoCaption}
                  </p>
                </div>
              </section>

              {/* Outcome */}
              <section id="outcome">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4 md:mb-6">
                  {t.idoCms.outcome.title}
                </h2>
                <div className="space-y-8">
                  {t.idoCms.outcome.items?.map((item: { title: string; content: string; image?: string; images?: string[]; imageCaption?: string }, index: number) => (
                    <div key={index} className={item.image || item.images ? "grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center" : ""}>
                      <div>
                        <h3 className="text-lg md:text-xl font-semibold text-foreground mb-3">
                          {item.title}
                        </h3>
                        <RichText className="text-sm md:text-base text-muted-foreground leading-relaxed">
                          {item.content}
                        </RichText>
                      </div>
                      {item.image && (
                        <div className="w-full">
                          <Image
                            src={item.image}
                            alt={item.title}
                            width={800}
                            height={600}
                            className="w-full h-auto rounded-lg"
                          />
                          {item.imageCaption && (
                            <p className="text-[10px] md:text-xs text-muted-foreground/70 text-center mt-3">
                              {item.imageCaption}
                            </p>
                          )}
                        </div>
                      )}
                      {item.images && (
                        <div className="w-full">
                        <div className="relative aspect-[4/3] w-full" aria-label={item.title}>
                          <div className="absolute left-0 top-0 w-[72%] overflow-hidden rounded-lg border border-border bg-muted shadow-sm">
                            <Image
                              src={item.images[0]}
                              alt={`${item.title} — Moonveil`}
                              width={1440}
                              height={2105}
                              className="aspect-[4/3] w-full object-cover object-top"
                            />
                          </div>
                          <div className="absolute bottom-0 right-0 w-[72%] overflow-hidden rounded-lg border border-border bg-muted shadow-md">
                            <Image
                              src={item.images[1]}
                              alt={`${item.title} — Alpha Goats`}
                              width={1440}
                              height={2125}
                              className="aspect-[4/3] w-full object-cover object-top"
                            />
                          </div>
                        </div>
                        {item.imageCaption && (
                          <p className="text-[10px] md:text-xs text-muted-foreground/70 text-center mt-3">
                            {item.imageCaption}
                          </p>
                        )}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}
