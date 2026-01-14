"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { useLanguage } from "@/contexts/language-context"
import { Header } from "@/components/header"

export function TgballersDetail() {
  const { t } = useLanguage()
  const [showSidebar, setShowSidebar] = useState(false)
  const [activeSection, setActiveSection] = useState("requirements")

  const sections = [
    { id: "requirements", label: t.tgballers.sections.requirements },
    { id: "technical", label: t.tgballers.sections.technical },
    { id: "aiCollaboration", label: t.tgballers.sections.aiCollaboration },
    { id: "impact", label: t.tgballers.sections.impact },
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
      <div className="pt-20 md:pt-28 pb-8 md:pb-12 flex items-center justify-center px-6 md:px-8 lg:px-12">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold text-foreground mb-4 md:mb-6 leading-tight">
            {t.tgballers.title}
          </h1>

          <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 md:gap-x-8 md:gap-y-1 text-xs md:text-sm text-muted-foreground leading-tight mb-6 md:mb-10">
            <div>
              <span className="font-medium">Year: </span>
              {t.tgballers.hero.duration}
            </div>
            <div>
              <span className="font-medium">Role: </span>
              {t.tgballers.hero.role}
            </div>
            <div>
              <span className="font-medium">Company: </span>
              {t.tgballers.hero.company}
            </div>
            <div>
              <span className="font-medium">Platforms: </span>
              {t.tgballers.hero.platforms}
            </div>
          </div>

          {/* Hero Image */}
          <div className="w-full max-w-3xl mx-auto">
            <Image
              src="/portfolio/tgballers/TGBall-Hero.png"
              alt={t.tgballers.title}
              width={960}
              height={540}
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 py-12 md:py-20 lg:py-24">
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
          <main className="flex-1 max-w-[840px]">
            {/* Project Overview Grid */}
            <div className="mb-16 md:mb-24">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-8 md:mb-12 text-center">
                {t.tgballers.projectOverview.title}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <div className="border border-border rounded-lg p-4 md:p-6">
                  <h3 className="text-base md:text-lg font-bold text-foreground mb-2 md:mb-3">{t.tgballers.projectOverview.overview.title}</h3>
                  <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                    {t.tgballers.projectOverview.overview.content}
                  </p>
                </div>
                <div className="border border-border rounded-lg p-4 md:p-6">
                  <h3 className="text-base md:text-lg font-bold text-foreground mb-2 md:mb-3">{t.tgballers.projectOverview.timeline.title}</h3>
                  <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                    {t.tgballers.projectOverview.timeline.content}
                  </p>
                </div>
                <div className="border border-border rounded-lg p-4 md:p-6">
                  <h3 className="text-base md:text-lg font-bold text-foreground mb-2 md:mb-3">{t.tgballers.projectOverview.coreTasks.title}</h3>
                  <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                    {t.tgballers.projectOverview.coreTasks.content}
                  </p>
                </div>
                <div className="border border-border rounded-lg p-4 md:p-6">
                  <h3 className="text-base md:text-lg font-bold text-foreground mb-2 md:mb-3">{t.tgballers.projectOverview.painPoints.title}</h3>
                  <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                    {t.tgballers.projectOverview.painPoints.content}
                  </p>
                </div>
              </div>
            </div>

            {/* Content Sections */}
            <div className="space-y-16 md:space-y-24 lg:space-y-32">
              {t.tgballers.contentSections?.map((section: { id: string; title: string; content: string; image?: string; imagePosition?: string }) => (
                <section key={section.id} id={section.id}>
                  {section.image && section.imagePosition === "bottom" ? (
                    // Image below text
                    <>
                      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-6 md:mb-8">
                        {section.title}
                      </h2>
                      <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-8 whitespace-pre-line">
                        {section.content}
                      </p>
                      <div className="w-full overflow-hidden">
                        <Image
                          src={section.image}
                          alt={section.title}
                          width={1200}
                          height={600}
                          className="w-full h-auto object-contain"
                        />
                      </div>
                    </>
                  ) : section.image ? (
                    // Text on the left, image on the right
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-center">
                      <div>
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-6 md:mb-8">
                          {section.title}
                        </h2>
                        <p className="text-sm md:text-base text-muted-foreground leading-relaxed whitespace-pre-line">
                          {section.content}
                        </p>
                      </div>
                      <div className="w-full overflow-hidden">
                        <Image
                          src={section.image}
                          alt={section.title}
                          width={600}
                          height={400}
                          className="w-full h-auto object-contain"
                        />
                      </div>
                    </div>
                  ) : (
                    // No image
                    <>
                      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-6 md:mb-8">
                        {section.title}
                      </h2>
                      <p className="text-sm md:text-base text-muted-foreground leading-relaxed whitespace-pre-line">
                        {section.content}
                      </p>
                    </>
                  )}
                </section>
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}
