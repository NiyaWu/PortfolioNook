"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import Lottie from "lottie-react"
import { useLanguage } from "@/contexts/language-context"
import { Header } from "@/components/header"
import { RichText } from "@/components/rich-text"
import salePageAnimation from "@/public/Sale-Page.json"

export function IdoCmsDetail() {
  const { t } = useLanguage()
  const [showSidebar, setShowSidebar] = useState(false)
  const [activeSection, setActiveSection] = useState("background")

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
      <div className="pt-24 md:pt-32 pb-12 md:pb-16 flex items-center justify-center px-4 md:px-8 lg:px-12">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold text-foreground mb-6 md:mb-8 leading-tight">
            {t.idoCms.title}
          </h1>

          <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-xs md:text-sm text-muted-foreground mb-8 md:mb-16">
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
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-12 md:py-20 lg:py-24">
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
            {/* Project Overview Grid */}
            <div className="mb-16 md:mb-24">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-8 md:mb-12 text-center">
                {t.idoCms.projectOverview.title}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <div className="border border-border rounded-lg p-4 md:p-6">
                  <h3 className="text-base md:text-lg font-bold text-foreground mb-2 md:mb-3">{t.idoCms.projectOverview.overview.title}</h3>
                  <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                    {t.idoCms.projectOverview.overview.content}
                  </p>
                </div>
                <div className="border border-border rounded-lg p-4 md:p-6">
                  <h3 className="text-base md:text-lg font-bold text-foreground mb-2 md:mb-3">{t.idoCms.projectOverview.timeline.title}</h3>
                  <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                    {t.idoCms.projectOverview.timeline.content}
                  </p>
                </div>
                <div className="border border-border rounded-lg p-4 md:p-6">
                  <h3 className="text-base md:text-lg font-bold text-foreground mb-2 md:mb-3">{t.idoCms.projectOverview.challenge.title}</h3>
                  <p className="text-xs md:text-sm text-muted-foreground leading-relaxed whitespace-pre-line">
                    {t.idoCms.projectOverview.challenge.content}
                  </p>
                </div>
                <div className="border border-border rounded-lg p-4 md:p-6">
                  <h3 className="text-base md:text-lg font-bold text-foreground mb-2 md:mb-3">{t.idoCms.projectOverview.outcome.title}</h3>
                  <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                    {t.idoCms.projectOverview.outcome.content}
                  </p>
                </div>
              </div>
            </div>

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
                <RichText className="text-sm md:text-base text-muted-foreground leading-relaxed mb-4">
                  {t.idoCms.background.challengeIntro}
                </RichText>
                <div className="space-y-4 mb-6">
                  {t.idoCms.background.challenges.map((challenge: { title: string; content: string }, index: number) => (
                    <div key={index} className="pl-8">
                      <RichText as="h4" className="text-sm md:text-base font-semibold text-foreground mb-1">
                        {`${index + 1}. ${challenge.title}`}
                      </RichText>
                      <RichText className="text-sm md:text-base text-muted-foreground leading-relaxed">
                        {challenge.content}
                      </RichText>
                    </div>
                  ))}
                </div>
                <RichText className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  {t.idoCms.background.goal}
                </RichText>
              </section>

              {/* Solution */}
              <section id="solution">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4 md:mb-6">
                  {t.idoCms.solution.title}
                </h2>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  {t.idoCms.solution.content}
                </p>
              </section>

              {/* Design */}
              <section id="design">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4 md:mb-6">
                  {t.idoCms.design.title}
                </h2>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-8 md:mb-12">
                  {t.idoCms.design.content}
                </p>

                {/* Landing Page Image */}
                <div className="mb-12 md:mb-16">
                  <Image
                    src="/IF-landing page.png"
                    alt="IF Landing Page Design"
                    width={1920}
                    height={1080}
                    className="w-full h-auto rounded-lg"
                  />
                  <p className="text-[10px] md:text-xs text-muted-foreground/70 text-center mt-3">
                    {t.idoCms.design.landingPageCaption}
                  </p>
                </div>

                {/* Design Subsections */}
                <div className="space-y-12 md:space-y-16">
                  {/* IA Evolution - First subsection */}
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold text-foreground mb-3 md:mb-4">
                      {t.idoCms.design.iaTitle}
                    </h3>
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-4">
                      {t.idoCms.design.iaContent}
                    </p>
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-4">
                      {t.idoCms.design.iaContent2}
                    </p>
                    <ul className="space-y-2 mb-8">
                      {t.idoCms.design.iaPoints?.map((point: string, index: number) => (
                        <li key={index} className="text-sm md:text-base text-muted-foreground leading-relaxed pl-8">
                          <RichText>{point}</RichText>
                        </li>
                      ))}
                    </ul>
                    {/* IA Comparison Images */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <div className="aspect-[16/9] relative overflow-hidden rounded-lg">
                          <Image
                            src="https://image.blocktempo.com/2021/08/1phk9iopHgXQhXfJbzYX8gw.png"
                            alt="Original Sale Page V1"
                            fill
                            className="object-cover object-top"
                          />
                        </div>
                        <p className="text-[10px] md:text-xs text-muted-foreground/70 text-center mt-2">
                          V1: Sale-Centric Layout
                        </p>
                      </div>
                      <div>
                        <div className="aspect-[16/9] relative overflow-hidden rounded-lg">
                          <Image
                            src="/Desktop-Standard Pool.png"
                            alt="Desktop Standard Pool V2"
                            fill
                            className="object-cover object-top"
                          />
                        </div>
                        <p className="text-[10px] md:text-xs text-muted-foreground/70 text-center mt-2">
                          V2: Project-Centric Layout
                        </p>
                      </div>
                    </div>
                  </div>
                  {t.idoCms.design.subsections?.map((subsection: { title: string; content: string; image?: string }, index: number) => (
                    <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
                      <div>
                        <h3 className="text-lg md:text-xl font-semibold text-foreground mb-3 md:mb-4">
                          {subsection.title}
                        </h3>
                        <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                          {subsection.content}
                        </p>
                      </div>
                      {subsection.image ? (
                        <div className="w-full">
                          <Image
                            src={subsection.image}
                            alt={subsection.title}
                            width={800}
                            height={600}
                            className="w-full h-auto rounded-lg"
                          />
                        </div>
                      ) : (
                        <div className="w-full h-[200px] md:h-[280px] bg-muted/20 rounded-lg flex items-center justify-center">
                          <p className="text-muted-foreground text-sm">Image {index + 1}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </section>

              {/* User Research */}
              <section id="userResearch">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4 md:mb-6">
                  {t.idoCms.userResearch.title}
                </h2>
                <RichText className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  {t.idoCms.userResearch.content}
                </RichText>
              </section>

              {/* Outcome */}
              <section id="outcome">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4 md:mb-6">
                  {t.idoCms.outcome.title}
                </h2>
                <div className="space-y-8">
                  {t.idoCms.outcome.items?.map((item: { title: string; content: string; image?: string; imageCaption?: string }, index: number) => (
                    <div key={index} className={item.image ? "grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center" : ""}>
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
