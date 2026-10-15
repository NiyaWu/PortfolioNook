"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { useLanguage } from "@/contexts/language-context"
import { Header } from "@/components/header"
import { ProjectOverview } from "@/components/project-overview"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

function ZoomableTestDiagram({
  src,
  alt,
  width,
  height,
  hint,
}: {
  src: string
  alt: string
  width: number
  height: number
  hint: string
}) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          type="button"
          className="block w-full cursor-zoom-in text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          aria-label={hint}
        >
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            className="h-auto w-full object-contain"
          />
        </button>
      </DialogTrigger>
      <p className="mt-3 text-center text-xs text-muted-foreground/70">
        {hint}
      </p>
      <DialogContent className="w-[1600px] max-w-[96vw] overflow-hidden p-3 sm:max-w-[96vw]">
        <DialogTitle className="sr-only">{alt}</DialogTitle>
        <DialogDescription className="sr-only">{hint}</DialogDescription>
        <div className="w-full max-h-[86vh] overflow-auto">
          <div className="w-full min-w-[1600px] max-w-none">
            <Image
              src={src}
              alt={alt}
              width={width}
              height={height}
              className="h-auto w-full max-w-none"
            />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export function VodChannelDetail() {
  const { t } = useLanguage()
  const [showSidebar, setShowSidebar] = useState(false)
  const [activeSection, setActiveSection] = useState("discovery")

  const sectionTitleClass =
    "mb-4 max-w-3xl text-2xl font-bold leading-tight text-foreground md:mb-6 md:text-3xl lg:mb-8"
  const featureTitleClass =
    "mb-3 text-lg font-semibold leading-snug text-foreground md:text-xl"
  const bodyClass = "text-sm leading-relaxed text-muted-foreground md:text-base"

  const sections = [
    { id: "discovery", label: t.vodChannel.sections.discovery },
    { id: "usabilityTesting", label: t.vodChannel.sections.usabilityTesting },
    { id: "decisions", label: t.vodChannel.sections.decisions },
    { id: "delivery", label: t.vodChannel.sections.delivery },
  ]

  const decisionCases = [
    {
      id: "homepage",
      title: t.vodChannel.abTesting.title,
      problem: [t.vodChannel.abTesting.content],
      researchImage: "/portfolio/vod-channel/test-1.png",
      researchImageWidth: 2000,
      researchImageHeight: 1581,
      decisionTitle: t.vodChannel.result1.title,
      decision: [t.vodChannel.result1.content1, t.vodChannel.result1.content2],
      resultImages: ["/portfolio/vod-channel/testB.gif"],
    },
    {
      id: "login",
      title: t.vodChannel.loginTest.title,
      problem: [t.vodChannel.loginTest.content, t.vodChannel.loginTest.content2],
      researchImage: "/portfolio/vod-channel/test-2.png",
      researchImageWidth: 2000,
      researchImageHeight: 979,
      decisionTitle: t.vodChannel.result2.title,
      decision: [t.vodChannel.result2.content],
      resultImages: [
        "/portfolio/vod-channel/testC.png",
        "/portfolio/vod-channel/testD.png",
      ],
    },
    {
      id: "category",
      title: t.vodChannel.videoTypeTest.title,
      problem: [t.vodChannel.videoTypeTest.content],
      researchImage: "/portfolio/vod-channel/test-3.png",
      researchImageWidth: 2000,
      researchImageHeight: 669,
      decisionTitle: t.vodChannel.result3.title,
      decision: [t.vodChannel.result3.content1, t.vodChannel.result3.content2],
      resultImages: [
        "/portfolio/vod-channel/testE.png",
        "/portfolio/vod-channel/testF.png",
      ],
    },
    {
      id: "payment",
      title: t.vodChannel.paymentTest.title,
      problem: [t.vodChannel.paymentTest.content],
      researchImage: "/portfolio/vod-channel/test-4.png",
      researchImageWidth: 2000,
      researchImageHeight: 739,
      decisionTitle: t.vodChannel.result4.title,
      decision: [t.vodChannel.result4.content1, t.vodChannel.result4.content2],
      resultImages: [
        "/portfolio/vod-channel/testG.png",
        "/portfolio/vod-channel/testH.png",
      ],
    },
    {
      id: "live",
      title: t.vodChannel.liveVideoTest.title,
      problem: [t.vodChannel.liveVideoTest.content],
      researchImage: "/portfolio/vod-channel/test-5.png",
      researchImageWidth: 2000,
      researchImageHeight: 791,
      decisionTitle: t.vodChannel.result5.title,
      decision: t.vodChannel.result5.items,
      resultImages: [],
    },
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
            {t.vodChannel.title}
          </h1>

          <p className="mx-auto mb-6 max-w-3xl text-sm leading-relaxed text-muted-foreground md:text-base">
            {t.vodChannel.subtitle}
          </p>

          <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 md:gap-x-8 md:gap-y-1 text-xs md:text-sm text-muted-foreground leading-tight">
            <div>
              <span className="font-medium">Year: </span>
              {t.vodChannel.hero.duration}
            </div>
            <div>
              <span className="font-medium">Role: </span>
              {t.vodChannel.hero.role}
            </div>
            <div>
              <span className="font-medium">Company: </span>
              {t.vodChannel.hero.company}
            </div>
            <div>
              <span className="font-medium">Platforms: </span>
              {t.vodChannel.hero.platforms}
            </div>
          </div>
        </div>

        {/* Hero Image - Pad and Phone */}
        <div className="relative w-full max-w-4xl mx-auto">
          <div className="relative w-[80%] max-w-[700px] mx-auto">
            <Image
              src="/portfolio/vod-channel/bannerPad.png"
              alt="VOD Channel Pad"
              width={700}
              height={500}
              className="w-full h-auto object-contain"
            />
          </div>
          <div className="absolute right-[5%] bottom-0 w-[30%] max-w-[200px]">
            <Image
              src="/portfolio/vod-channel/bannerPhone.png"
              alt="VOD Channel Phone"
              width={200}
              height={400}
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 py-12 md:py-20 lg:py-24">
        <div className="flex gap-12 lg:gap-16">
          {/* Left Sidebar Navigation */}
          <aside className={`hidden lg:block w-48 flex-shrink-0 transition-opacity duration-300 ${
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
              title={t.vodChannel.projectOverview.title}
              items={[
                t.vodChannel.projectOverview.overview,
                t.vodChannel.projectOverview.timeline,
                t.vodChannel.projectOverview.challenge,
                t.vodChannel.projectOverview.outcome,
              ]}
            />

            {/* Content Sections */}
            <div className="space-y-16 md:space-y-24 lg:space-y-32">
              <section id="discovery">
                <h2 className={sectionTitleClass}>{t.vodChannel.discovery.title}</h2>
                <div className="grid grid-cols-1 items-start gap-x-8 gap-y-5 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-x-12">
                  <p className={`${bodyClass} md:col-start-2`}>
                    {t.vodChannel.discovery.intro}
                  </p>
                  <Image
                    src="/portfolio/vod-channel/userMessage01.png"
                    alt="User feedback collected from app stores"
                    width={700}
                    height={408}
                    className="h-auto w-full object-contain md:col-start-1 md:row-start-1 md:row-span-3"
                  />
                  <div className="md:col-start-2">
                    <ul className="space-y-4">
                      {t.vodChannel.discovery.items.map((item: string, index: number) => (
                        <li key={index} className={`${bodyClass} flex items-start gap-3`}>
                          <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-foreground/40" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <p className={`${bodyClass} border-t border-border/70 pt-4 md:col-start-2`}>
                    {t.vodChannel.discovery.conclusion}
                  </p>
                </div>
              </section>

              <section id="usabilityTesting">
                <h2 className={sectionTitleClass}>{t.vodChannel.usabilityTesting.title}</h2>
                <p className={`${bodyClass} mb-8 max-w-3xl`}>
                  {t.vodChannel.usabilityTesting.content}
                </p>

                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <article className="rounded-xl border border-border/70 bg-white p-5 md:p-6">
                    <h3 className={featureTitleClass}>{t.vodChannel.participants.title}</h3>
                    <p className={bodyClass}>{t.vodChannel.participants.content}</p>
                  </article>
                  <article className="rounded-xl border border-border/70 bg-white p-5 md:p-6">
                    <h3 className={featureTitleClass}>{t.vodChannel.researchGoals.title}</h3>
                    <ul className="space-y-2">
                      {t.vodChannel.researchGoals.items.map((item, index) => (
                        <li key={index} className={`${bodyClass} flex items-start gap-3`}>
                          <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-foreground/40" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </article>
                </div>
              </section>

              <section id="decisions">
                <h2 className={sectionTitleClass}>{t.vodChannel.decisionSection.title}</h2>
                <p className={`${bodyClass} mb-10 max-w-3xl`}>
                  {t.vodChannel.decisionSection.intro}
                </p>

                <div className="space-y-16 md:space-y-20">
                  {decisionCases.map((item, index) => (
                    <article key={item.id} className="border-t border-border/70 pt-8 first:border-t-0 first:pt-0">
                      <div className="mb-6 flex items-start gap-4">
                        <span className="mt-0.5 text-xs font-medium tabular-nums text-muted-foreground/60">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <div>
                          <h3 className={featureTitleClass}>{item.title}</h3>
                          <div className="space-y-3">
                            {item.problem.map((paragraph) => (
                              <p key={paragraph} className={bodyClass}>{paragraph}</p>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="mb-8">
                        <ZoomableTestDiagram
                          src={item.researchImage}
                          alt={item.title}
                          width={item.researchImageWidth}
                          height={item.researchImageHeight}
                          hint={t.vodChannel.zoomHint}
                        />
                      </div>

                      <div className={`grid grid-cols-1 items-center gap-6 rounded-xl border border-border/70 bg-white p-5 md:p-6 ${item.resultImages.length > 0 ? "md:grid-cols-2" : ""}`}>
                        <div>
                          <p className="mb-2 text-xs font-medium uppercase tracking-[0.12em] text-muted-foreground/60">
                            {t.vodChannel.decisionSection.decisionLabel}
                          </p>
                          <h4 className="mb-3 text-base font-semibold text-foreground md:text-lg">
                            {item.decisionTitle}
                          </h4>
                          <ul className="space-y-2">
                            {item.decision.map((paragraph) => (
                              <li key={paragraph} className={`${bodyClass} flex items-start gap-3`}>
                                <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-foreground/40" />
                                {paragraph}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {item.resultImages.length > 0 && (
                          <div className="flex min-w-0 items-center justify-center gap-3">
                            {item.resultImages.map((src) => (
                              <Image
                                key={src}
                                src={src}
                                alt={item.decisionTitle}
                                width={420}
                                height={600}
                                className={`${item.resultImages.length === 1 ? "max-h-[360px] max-w-full" : "max-h-[420px] w-[46%]"} h-auto object-contain`}
                              />
                            ))}
                          </div>
                        )}
                      </div>
                    </article>
                  ))}
                </div>
              </section>

              <section id="delivery">
                <h2 className={sectionTitleClass}>{t.vodChannel.delivery.title}</h2>
                <p className={`${bodyClass} mb-8 max-w-3xl`}>{t.vodChannel.delivery.content}</p>
                <div className="mb-10 grid grid-cols-1 gap-4 md:grid-cols-3">
                  {t.vodChannel.delivery.items.map((item: { title: string; content: string }) => (
                    <article key={item.title} className="rounded-xl border border-border/70 bg-white p-5">
                      <h3 className="mb-2 text-base font-semibold text-foreground">{item.title}</h3>
                      <p className={bodyClass}>{item.content}</p>
                    </article>
                  ))}
                </div>
                <h3 className={featureTitleClass}>{t.vodChannel.uiKit.title}</h3>
                <p className={`${bodyClass} mb-8`}>{t.vodChannel.uiKit.content}</p>
                <Image
                  src="/portfolio/vod-channel/themePic.png"
                  alt="myVideo UI Kit"
                  width={1200}
                  height={1008}
                  className="h-auto w-full object-contain"
                />
                <Image
                  src="/portfolio/vod-channel/VOD-mockup.jpg"
                  alt="myVideo final design"
                  width={1440}
                  height={600}
                  className="mt-12 h-auto w-full object-contain md:mt-16"
                />
              </section>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}
