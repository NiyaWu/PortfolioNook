"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { useLanguage } from "@/contexts/language-context"
import { Header } from "@/components/header"
import { ProjectOverview } from "@/components/project-overview"
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

export function VideoAnalysisDetail() {
  const { t } = useLanguage()
  const [showSidebar, setShowSidebar] = useState(false)
  const [activeSection, setActiveSection] = useState("problem")

  const sectionTitleClass =
    "mb-4 text-2xl font-bold leading-tight text-foreground md:mb-6 md:text-3xl lg:mb-8 lg:text-4xl"
  const featureTitleClass =
    "mb-3 text-lg font-semibold leading-snug text-foreground md:text-xl"
  const bodyClass =
    "text-sm leading-relaxed text-muted-foreground md:text-base"

  const sections = [
    { id: "problem", label: t.videoAnalysis.sections.problem },
    { id: "analysisSettings", label: t.videoAnalysis.sections.analysisSettings },
    { id: "tvWall", label: t.videoAnalysis.sections.monitoring },
    { id: "uiKit", label: t.videoAnalysis.sections.uiKit },
    { id: "outcome", label: t.videoAnalysis.sections.outcome },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setShowSidebar(window.scrollY > 300)

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
      <div className="pt-24 md:pt-32 pb-12 md:pb-16 flex flex-col items-center justify-center px-6 md:px-8 lg:px-12">
        <div className="max-w-5xl mx-auto text-center mb-8 md:mb-12">
          <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold text-foreground mb-6 md:mb-8 leading-tight">
            {t.videoAnalysis.title}
          </h1>

          <p className="mx-auto mb-6 max-w-3xl text-sm leading-relaxed text-muted-foreground md:text-base lg:text-lg">
            {t.videoAnalysis.subtitle}
          </p>

          <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 md:gap-x-8 md:gap-y-1 text-xs md:text-sm text-muted-foreground leading-tight">
            <div>
              <span className="font-medium">{t.videoAnalysis.metaLabels.period}: </span>
              {t.videoAnalysis.hero.duration}
            </div>
            <div>
              <span className="font-medium">{t.videoAnalysis.metaLabels.role}: </span>
              {t.videoAnalysis.hero.role}
            </div>
            <div>
              <span className="font-medium">{t.videoAnalysis.metaLabels.company}: </span>
              {t.videoAnalysis.hero.company}
            </div>
            <div>
              <span className="font-medium">{t.videoAnalysis.metaLabels.platforms}: </span>
              {t.videoAnalysis.hero.platforms}
            </div>
          </div>
        </div>

        <div className="w-full max-w-4xl mx-auto">
          <Image
            src="/portfolio/video-analysis/TVwallTop.png"
            alt="Video Analysis TV Wall"
            width={1200}
            height={736}
            className="w-full h-auto object-contain"
            priority
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl 2xl:max-w-[1400px] mx-auto px-6 md:px-8 lg:px-12 2xl:px-16 py-12 md:py-20 lg:py-24 2xl:py-32">
        <div className="flex gap-12 lg:gap-16">
          {/* Left Sidebar Navigation */}
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
          <main className="flex-1 max-w-[840px] 2xl:max-w-[960px]">
            <ProjectOverview
              title={t.videoAnalysis.projectOverview.title}
              items={[
                { title: t.videoAnalysis.projectOverview.overviewLabel, content: t.videoAnalysis.about.overview },
                { title: t.videoAnalysis.projectOverview.timelineLabel, content: t.videoAnalysis.about.challenge },
                { title: t.videoAnalysis.projectOverview.challengeLabel, content: t.videoAnalysis.projectOverview.roleContent },
                { title: t.videoAnalysis.projectOverview.outcomeLabel, content: t.videoAnalysis.about.outcome },
              ]}
            />

            {/* Content Sections */}
            <div className="space-y-16 md:space-y-24 lg:space-y-32 2xl:space-y-40">
              {/* Problem */}
              <section id="problem">
                <h2 className={sectionTitleClass}>
                  {t.videoAnalysis.problem.title}
                </h2>
                <p className={`${bodyClass} mb-6 max-w-3xl`}>
                  {t.videoAnalysis.problem.intro}
                </p>
                <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
                  {t.videoAnalysis.problem.items.map((item: { title: string; content: string }) => (
                    <article key={item.title} className="rounded-xl border border-border/70 bg-white p-4 md:p-5">
                      <h3 className="mb-2 text-sm font-semibold text-foreground md:text-base">
                        {item.title}
                      </h3>
                      <p className="text-xs leading-relaxed text-muted-foreground md:text-sm">
                        {item.content}
                      </p>
                    </article>
                  ))}
                </div>
              </section>

              {/* Analysis Settings */}
              <section id="analysisSettings">
                <h2 className={sectionTitleClass}>
                  {t.videoAnalysis.analysisSettings.title}
                </h2>
                <p className={`${bodyClass} mb-10 max-w-3xl`}>
                  {t.videoAnalysis.analysisSettings.content}
                </p>

                <div className="space-y-12 md:space-y-16">
                  <article>
                    <h3 className={featureTitleClass}>
                      {t.videoAnalysis.analysisSettings.progressiveTitle}
                    </h3>
                    <p className={`${bodyClass} mb-5`}>
                      {t.videoAnalysis.analysisSettings.content2}
                    </p>
                    <Dialog>
                      <DialogTrigger asChild>
                        <button
                          type="button"
                          className="block w-full cursor-zoom-in text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                          aria-label={t.videoAnalysis.analysisSettings.flowHint}
                        >
                          <Image
                            src="/portfolio/video-analysis/AnalyticFlow.png"
                            alt="Analytic Flow"
                            width={3006}
                            height={434}
                            className="h-auto w-full"
                          />
                        </button>
                      </DialogTrigger>
                      <DialogContent className="w-[1800px] max-w-[96vw] overflow-hidden p-3 sm:max-w-[96vw]">
                        <DialogTitle className="sr-only">
                          {t.videoAnalysis.analysisSettings.progressiveTitle}
                        </DialogTitle>
                        <DialogDescription className="sr-only">
                          {t.videoAnalysis.analysisSettings.flowHint}
                        </DialogDescription>
                        <div className="w-full max-h-[86vh] overflow-auto">
                          <div className="w-full min-w-[1800px] shrink-0">
                            <Image
                              src="/portfolio/video-analysis/AnalyticFlow.png"
                              alt="Analytic Flow"
                              width={3006}
                              height={434}
                              className="h-auto w-full max-w-none"
                            />
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                    <p className="mt-3 text-center text-[10px] text-muted-foreground/70 md:text-xs">
                      {t.videoAnalysis.analysisSettings.flowHint}
                    </p>
                  </article>

                  <article className="grid grid-cols-1 items-center gap-6 md:grid-cols-2 md:gap-8 lg:gap-12">
                    <div>
                      <h3 className={featureTitleClass}>
                        {t.videoAnalysis.scheduleSettings.title}
                      </h3>
                      <p className={`${bodyClass} mb-3`}>
                        {t.videoAnalysis.scheduleSettings.content}
                      </p>
                      <p className={bodyClass}>
                        {t.videoAnalysis.scheduleSettings.content2}
                      </p>
                    </div>
                    <Image
                      src="/portfolio/video-analysis/analysis3.png"
                      alt="Schedule Settings"
                      width={1000}
                      height={840}
                      className="h-auto w-full object-contain"
                    />
                  </article>

                  <article className="grid grid-cols-1 items-center gap-6 md:grid-cols-2 md:gap-8 lg:gap-12">
                    <div>
                      <h3 className={featureTitleClass}>
                        {t.videoAnalysis.graphicalTool.title}
                      </h3>
                      <p className={`${bodyClass} mb-3`}>
                        {t.videoAnalysis.graphicalTool.content}
                      </p>
                      <p className={bodyClass}>
                        {t.videoAnalysis.graphicalTool.content2}
                      </p>
                    </div>
                    <Image
                      src="/portfolio/video-analysis/01.jpg"
                      alt="Double Cross Line Tool"
                      width={1200}
                      height={800}
                      className="h-auto w-full object-contain"
                    />
                  </article>
                </div>
              </section>

              {/* TV Wall */}
              <section id="tvWall">
                <h2 className={sectionTitleClass}>
                  {t.videoAnalysis.sections.monitoring}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center">
                  <div>
                    <h3 className={featureTitleClass}>
                      {t.videoAnalysis.tvWall.title}
                    </h3>
                    <p className={`${bodyClass} mb-4`}>
                      {t.videoAnalysis.tvWall.content}
                    </p>
                    <p className={bodyClass}>
                      {t.videoAnalysis.tvWall.content2}
                    </p>
                  </div>
                  <div className="w-full rounded-lg overflow-hidden">
                    <Image
                      src="/portfolio/video-analysis/alertListBg.png"
                      alt="TV Wall Design"
                      width={600}
                      height={400}
                      className="w-full h-auto object-contain"
                    />
                  </div>
                </div>
              </section>

              {/* UI Kit */}
              <section id="uiKit">
                <h2 className={sectionTitleClass}>
                  {t.videoAnalysis.uiKit.title}
                </h2>
                <p className={`${bodyClass} mb-8`}>
                  {t.videoAnalysis.uiKit.content}
                </p>
                <Image
                  src="/portfolio/video-analysis/ui-kit.png"
                  alt="UI Kit"
                  width={1200}
                  height={600}
                  className="w-full h-auto object-contain"
                />
              </section>

              {/* Outcome */}
              <section id="outcome">
                <h2 className={sectionTitleClass}>
                  {t.videoAnalysis.outcome.title}
                </h2>
                <p className={bodyClass}>
                  {t.videoAnalysis.outcome.content}
                </p>
              </section>

            </div>
          </main>
        </div>
      </div>
    </div>
  )
}
