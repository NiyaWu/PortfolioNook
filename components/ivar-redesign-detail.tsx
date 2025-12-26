"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { useLanguage } from "@/contexts/language-context"
import { Header } from "@/components/header"

export function IvarRedesignDetail() {
  const { t } = useLanguage()
  const [showSidebar, setShowSidebar] = useState(false)
  const [activeSection, setActiveSection] = useState("about")

  const sections = [
    { id: "about", label: t.ivarRedesign.sections.about },
    { id: "discovery", label: t.ivarRedesign.sections.discovery },
    { id: "tasks", label: t.ivarRedesign.sections.tasks },
    { id: "siteMap", label: t.ivarRedesign.sections.siteMap },
    { id: "initialization", label: t.ivarRedesign.sections.initialization },
    { id: "systemStatus", label: t.ivarRedesign.sections.systemStatus },
    { id: "themes", label: t.ivarRedesign.sections.themes },
    { id: "components", label: t.ivarRedesign.sections.components },
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
      <div className="pt-24 md:pt-32 pb-12 md:pb-16 flex flex-col items-center justify-center px-4 md:px-8 lg:px-12">
        <div className="max-w-5xl mx-auto text-center mb-8 md:mb-12">
          <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold text-foreground mb-6 md:mb-8 leading-tight">
            {t.ivarRedesign.title}
          </h1>

          <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-xs md:text-sm text-muted-foreground">
            <div>
              <span className="font-medium">Year: </span>
              {t.ivarRedesign.hero.duration}
            </div>
            <div>
              <span className="font-medium">Role: </span>
              {t.ivarRedesign.hero.role}
            </div>
            <div>
              <span className="font-medium">Company: </span>
              {t.ivarRedesign.hero.company}
            </div>
            <div>
              <span className="font-medium">Platforms: </span>
              {t.ivarRedesign.hero.platforms}
            </div>
          </div>
        </div>

        {/* Hero Images - Overlapping with Animation */}
        <div className="relative w-full max-w-6xl mx-auto h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]">
          {/* Main Device Image */}
          <div className="relative w-[95%] sm:w-[85%] md:w-[80%] max-w-[900px] mx-auto mt-8 z-10">
            <Image
              src="/portfolio/ivar/top-banner-1.png"
              alt="IVAR Main Interface"
              width={900}
              height={560}
              className="w-full h-auto object-contain rounded-lg shadow-2xl"
            />
          </div>

          {/* Floating Image 2 - Top Right with animation */}
          <div className="hidden md:block absolute right-[5%] lg:right-[50px] xl:right-[100px] top-0 lg:top-0 w-[150px] lg:w-[200px] z-20 animate-float-slow">
            <Image
              src="/portfolio/ivar/top-banner-2.png"
              alt="IVAR Detail 1"
              width={200}
              height={150}
              className="w-full h-auto object-contain shadow-xl"
            />
          </div>

          {/* Floating Image 3 - Bottom Left with animation */}
          <div className="hidden sm:block absolute left-0 md:left-[20px] lg:left-[50px] bottom-[-30px] sm:bottom-0 w-[30%] min-w-[150px] md:w-[250px] lg:w-[300px] z-30 animate-float">
            <Image
              src="/portfolio/ivar/top-banner-3.png"
              alt="IVAR Detail 2"
              width={300}
              height={200}
              className="w-full h-auto object-contain rounded-lg shadow-2xl"
            />
          </div>

          {/* Floating Image 4 - Right Side (GIF) */}
          <div className="hidden lg:block absolute right-0 xl:right-[20px] top-[30%] w-[140px] xl:w-[220px] z-20">
            <Image
              src="/portfolio/ivar/top-banner-4.gif"
              alt="IVAR Animation"
              width={220}
              height={150}
              className="w-full h-auto object-contain rounded-lg shadow-2xl"
              unoptimized
            />
          </div>
        </div>
      </div>

      {/* CSS Animation Styles */}
      <style jsx global>{`
        @keyframes float {
          0% { transform: translate3d(0px, 0px, 0px); }
          50% { transform: translate3d(0px, -30px, 0px); }
          100% { transform: translate3d(0px, 0px, 0px); }
        }
        @keyframes float-slow {
          0% { transform: translate3d(0px, 0px, 0px); }
          50% { transform: translate3d(0px, 10px, 0px); }
          100% { transform: translate3d(0px, 0px, 0px); }
        }
        .animate-float {
          animation: float 10s ease-in-out infinite;
          transform-style: preserve-3d;
          will-change: transform;
        }
        .animate-float-slow {
          animation: float-slow 10s ease-in-out infinite;
          transform-style: preserve-3d;
          will-change: transform;
        }
      `}</style>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-12 md:py-20 lg:py-24">
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
                Project Overview
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <div className="border border-border rounded-lg p-4 md:p-6">
                  <h3 className="text-base md:text-lg font-bold text-foreground mb-2 md:mb-3">01 Role</h3>
                  <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                    {t.ivarRedesign.hero.role}
                  </p>
                </div>
                <div className="border border-border rounded-lg p-4 md:p-6">
                  <h3 className="text-base md:text-lg font-bold text-foreground mb-2 md:mb-3">02 Platforms</h3>
                  <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                    {t.ivarRedesign.hero.platforms}
                  </p>
                </div>
                <div className="border border-border rounded-lg p-4 md:p-6">
                  <h3 className="text-base md:text-lg font-bold text-foreground mb-2 md:mb-3">03 Deliverables</h3>
                  <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                    {t.ivarRedesign.hero.deliverables}
                  </p>
                </div>
                <div className="border border-border rounded-lg p-4 md:p-6">
                  <h3 className="text-base md:text-lg font-bold text-foreground mb-2 md:mb-3">04 Year</h3>
                  <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                    {t.ivarRedesign.hero.duration}
                  </p>
                </div>
              </div>
            </div>

            {/* Content Sections */}
            <div className="space-y-16 md:space-y-24 lg:space-y-32">
              {/* About */}
              <section id="about">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4 md:mb-6 lg:mb-8">
                  {t.ivarRedesign.about.title}
                </h2>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  {t.ivarRedesign.about.content}
                </p>
              </section>

              {/* Discovery */}
              <section id="discovery">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center">
                  <div>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4 md:mb-6 lg:mb-8">
                      {t.ivarRedesign.discovery.title}
                    </h2>
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                      {t.ivarRedesign.discovery.content}
                    </p>
                  </div>
                  <div className="w-full rounded-lg overflow-hidden">
                    <Image
                      src="/portfolio/ivar/backgroundStory1.png"
                      alt="Discovery"
                      width={600}
                      height={400}
                      className="w-full h-auto object-contain"
                    />
                  </div>
                </div>
              </section>

              {/* Tasks */}
              <section id="tasks">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4 md:mb-6 lg:mb-8">
                  {t.ivarRedesign.tasks.title}
                </h2>
                <ol className="list-decimal list-inside space-y-3 text-sm md:text-base text-muted-foreground leading-relaxed">
                  {t.ivarRedesign.tasks.items.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ol>
              </section>

              {/* Content Area Size */}
              <section>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center">
                  <div>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4 md:mb-6 lg:mb-8">
                      {t.ivarRedesign.contentArea.title}
                    </h2>
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                      {t.ivarRedesign.contentArea.content}
                    </p>
                  </div>
                  <div className="w-full space-y-4">
                    <Image
                      src="/portfolio/ivar/sideMenu1.png"
                      alt="Side Menu Before"
                      width={600}
                      height={300}
                      className="w-full h-auto object-contain rounded-lg"
                    />
                    <Image
                      src="/portfolio/ivar/sideMenu2.png"
                      alt="Side Menu After"
                      width={600}
                      height={300}
                      className="w-full h-auto object-contain rounded-lg"
                    />
                  </div>
                </div>
              </section>

              {/* Site Map */}
              <section id="siteMap">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4 md:mb-6 lg:mb-8">
                  {t.ivarRedesign.siteMap.title}
                </h2>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-8">
                  {t.ivarRedesign.siteMap.content}
                </p>
                <div className="w-full bg-muted/10 rounded-lg p-4 overflow-hidden">
                  <Image
                    src="/portfolio/ivar/IVAR2Flow.png"
                    alt="Site Map Flow"
                    width={1200}
                    height={600}
                    className="w-full h-auto object-contain"
                  />
                </div>
              </section>

              {/* Initialization */}
              <section id="initialization">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center">
                  <div>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4 md:mb-6 lg:mb-8">
                      {t.ivarRedesign.initialization.title}
                    </h2>
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-4">
                      {t.ivarRedesign.initialization.content}
                    </p>
                    <ol className="list-decimal list-inside space-y-2 text-sm md:text-base text-muted-foreground">
                      {t.ivarRedesign.initialization.items.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ol>
                  </div>
                  <div className="w-full rounded-lg overflow-hidden">
                    <Image
                      src="/portfolio/ivar/top-banner-4.gif"
                      alt="Initialization"
                      width={600}
                      height={400}
                      className="w-full h-auto object-contain"
                      unoptimized
                    />
                  </div>
                </div>
              </section>

              {/* System Status */}
              <section id="systemStatus">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center mb-16">
                  <div>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4 md:mb-6 lg:mb-8">
                      {t.ivarRedesign.systemDashboard.title}
                    </h2>
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                      {t.ivarRedesign.systemDashboard.content}
                    </p>
                  </div>
                  <div className="w-full rounded-lg overflow-hidden shadow-lg">
                    <Image
                      src="/portfolio/ivar/systemDashboard.png"
                      alt="System Dashboard"
                      width={600}
                      height={400}
                      className="w-full h-auto object-contain"
                    />
                  </div>
                </div>

                <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-foreground mb-4 md:mb-6">
                  {t.ivarRedesign.systemStatusBar.title}
                </h3>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-6">
                  {t.ivarRedesign.systemStatusBar.content}
                </p>
                <div className="w-full rounded-lg overflow-hidden">
                  <Image
                    src="/portfolio/ivar/systemDashboard2.png"
                    alt="System Status Bar"
                    width={1200}
                    height={200}
                    className="w-full h-auto object-contain"
                  />
                </div>
              </section>

              {/* Themes */}
              <section id="themes">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4 md:mb-6 lg:mb-8">
                  {t.ivarRedesign.themes.title}
                </h2>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-8">
                  {t.ivarRedesign.themes.content}
                </p>
                <div className="w-full bg-muted/10 rounded-lg p-4 space-y-4">
                  <Image
                    src="/portfolio/ivar/themePic.png"
                    alt="Theme Design"
                    width={1200}
                    height={600}
                    className="w-full h-auto object-contain"
                  />
                  <Image
                    src="/portfolio/ivar/mix.png"
                    alt="Theme Mix Mockup"
                    width={1200}
                    height={600}
                    className="w-full h-auto object-contain"
                  />
                </div>
              </section>

              {/* Components */}
              <section id="components">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4 md:mb-6 lg:mb-8">
                  {t.ivarRedesign.components.title}
                </h2>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-8">
                  {t.ivarRedesign.components.content}
                </p>
                <div className="w-full bg-muted/5 rounded-lg p-4">
                  <Image
                    src="/portfolio/ivar/componentPic.png"
                    alt="Component Design"
                    width={1200}
                    height={600}
                    className="w-full h-auto object-contain"
                  />
                </div>
              </section>

              {/* Flow File */}
              <section>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4 md:mb-6 lg:mb-8">
                  {t.ivarRedesign.flowFile.title}
                </h2>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-8">
                  {t.ivarRedesign.flowFile.content}
                </p>
                <div className="w-full bg-muted/10 rounded-lg p-4">
                  <Image
                    src="/portfolio/ivar/Flow.png"
                    alt="Flow Design"
                    width={1200}
                    height={600}
                    className="w-full h-auto object-contain"
                  />
                </div>
              </section>

              {/* Next Project */}
              <section className="pt-16 border-t border-border">
                <div className="text-center">
                  <p className="text-sm text-muted-foreground mb-4">Next Project</p>
                  <Link
                    href="/"
                    className="inline-flex items-center justify-center px-8 py-3 bg-accent text-white font-semibold rounded-lg hover:bg-accent/90 transition-colors"
                  >
                    View All Projects
                  </Link>
                </div>
              </section>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}
