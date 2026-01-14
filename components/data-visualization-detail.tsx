"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { useLanguage } from "@/contexts/language-context"
import { Header } from "@/components/header"

export function DataVisualizationDetail() {
  const { t } = useLanguage()
  const [showSidebar, setShowSidebar] = useState(false)
  const [activeSection, setActiveSection] = useState("about")

  const sections = [
    { id: "about", label: t.dataVisualization.sections.about },
    { id: "discovery", label: t.dataVisualization.sections.discovery },
    { id: "widgets", label: t.dataVisualization.sections.widgets },
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
            {t.dataVisualization.title}
          </h1>

          <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 md:gap-x-8 md:gap-y-1 text-xs md:text-sm text-muted-foreground leading-tight">
            <div>
              <span className="font-medium">Year: </span>
              {t.dataVisualization.hero.duration}
            </div>
            <div>
              <span className="font-medium">Role: </span>
              {t.dataVisualization.hero.role}
            </div>
            <div>
              <span className="font-medium">Company: </span>
              {t.dataVisualization.hero.company}
            </div>
            <div>
              <span className="font-medium">Platforms: </span>
              {t.dataVisualization.hero.platforms}
            </div>
          </div>
        </div>

        {/* Hero Images - Tablet with floating widget cards */}
        <div className="relative w-full max-w-6xl mx-auto h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px]">
          {/* Floating Widget Card - Top Right (behind tablet) */}
          <div className="hidden md:block absolute right-[8%] lg:right-[12%] xl:right-[15%] top-[8%] w-[180px] lg:w-[220px] z-10 animate-float">
            <Image
              src="/portfolio/dashboard/dashboard1.png"
              alt="Direction Violation Widget"
              width={220}
              height={160}
              className="w-full h-auto object-contain shadow-2xl"
            />
          </div>

          {/* Floating Widget Card - Left (behind tablet) */}
          <div className="hidden sm:block absolute left-[8%] md:left-[12%] lg:left-[15%] top-[35%] md:top-[30%] w-[180px] lg:w-[220px] z-10 animate-float-reverse">
            <Image
              src="/portfolio/dashboard/Status-0-4.png"
              alt="Face Attribute Widget"
              width={220}
              height={160}
              className="w-full h-auto object-contain shadow-2xl"
            />
          </div>

          {/* Main Device Image - Tablet mockup (left aligned and larger, on top) */}
          <div className="relative w-[90%] sm:w-[80%] md:w-[75%] max-w-[850px] ml-[5%] md:ml-[8%] lg:ml-[10%] z-20 animate-float-slow">
            <Image
              src="/portfolio/dashboard/title2.png"
              alt="Data Visualization Dashboard"
              width={850}
              height={950}
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>

      {/* CSS Animation Styles */}
      <style jsx global>{`
        @keyframes float {
          0% { transform: translate3d(0px, 0px, 0px); }
          50% { transform: translate3d(0px, -20px, 0px); }
          100% { transform: translate3d(0px, 0px, 0px); }
        }
        @keyframes float-slow {
          0% { transform: translate3d(0px, 0px, 0px); }
          50% { transform: translate3d(0px, 10px, 0px); }
          100% { transform: translate3d(0px, 0px, 0px); }
        }
        @keyframes float-reverse {
          0% { transform: translate3d(0px, 0px, 0px); }
          50% { transform: translate3d(0px, 15px, 0px); }
          100% { transform: translate3d(0px, 0px, 0px); }
        }
        .animate-float {
          animation: float 8s ease-in-out infinite;
          transform-style: preserve-3d;
          will-change: transform;
        }
        .animate-float-slow {
          animation: float-slow 10s ease-in-out infinite;
          transform-style: preserve-3d;
          will-change: transform;
        }
        .animate-float-reverse {
          animation: float-reverse 9s ease-in-out infinite;
          transform-style: preserve-3d;
          will-change: transform;
        }
      `}</style>

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
                Project Overview
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <div className="border border-border rounded-lg p-4 md:p-6">
                  <h3 className="text-base md:text-lg font-bold text-foreground mb-2 md:mb-3">01 Role</h3>
                  <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                    {t.dataVisualization.hero.role}
                  </p>
                </div>
                <div className="border border-border rounded-lg p-4 md:p-6">
                  <h3 className="text-base md:text-lg font-bold text-foreground mb-2 md:mb-3">02 Platforms</h3>
                  <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                    {t.dataVisualization.hero.platforms}
                  </p>
                </div>
                <div className="border border-border rounded-lg p-4 md:p-6">
                  <h3 className="text-base md:text-lg font-bold text-foreground mb-2 md:mb-3">03 Deliverables</h3>
                  <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                    {t.dataVisualization.hero.deliverables}
                  </p>
                </div>
                <div className="border border-border rounded-lg p-4 md:p-6">
                  <h3 className="text-base md:text-lg font-bold text-foreground mb-2 md:mb-3">04 Year</h3>
                  <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                    {t.dataVisualization.hero.duration}
                  </p>
                </div>
              </div>
            </div>

            {/* Content Sections */}
            <div className="space-y-16 md:space-y-24 lg:space-y-32">
              {/* About */}
              <section id="about">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4 md:mb-6 lg:mb-8">
                  {t.dataVisualization.about.title}
                </h2>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-8">
                  {t.dataVisualization.about.content}
                </p>
              </section>

              {/* Discovery */}
              <section id="discovery">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4 md:mb-6 lg:mb-8">
                  {t.dataVisualization.discovery.title}
                </h2>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-12">
                  {t.dataVisualization.discovery.content}
                </p>

                {/* Analytics Categories */}
                <div className="space-y-12">
                  {/* Behavior Analytics */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center">
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                        {t.dataVisualization.behaviorAnalytics.title}
                      </h3>
                      <ul className="space-y-2 text-sm md:text-base text-muted-foreground">
                        {t.dataVisualization.behaviorAnalytics.items.map((item, index) => (
                          <li key={index} className="flex items-center gap-3">
                            <span className="w-1 h-1 rounded-full bg-muted-foreground flex-shrink-0"></span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="w-full">
                      <Image
                        src="/portfolio/dashboard/Dashboard-BehaviorAnalytics.png"
                        alt="Behavior Analytics"
                        width={600}
                        height={400}
                        className="w-full h-auto object-contain"
                      />
                    </div>
                  </div>

                  {/* Business Intelligence */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center">
                    <div className="lg:order-2">
                      <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                        {t.dataVisualization.businessIntelligence.title}
                      </h3>
                      <ul className="space-y-2 text-sm md:text-base text-muted-foreground">
                        {t.dataVisualization.businessIntelligence.items.map((item, index) => (
                          <li key={index} className="flex items-center gap-3">
                            <span className="w-1 h-1 rounded-full bg-muted-foreground flex-shrink-0"></span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="lg:order-1 w-full">
                      <Image
                        src="/portfolio/dashboard/Dashboard-BusinessIntelligence.png"
                        alt="Business Intelligence"
                        width={600}
                        height={400}
                        className="w-full h-auto object-contain"
                      />
                    </div>
                  </div>

                  {/* People Analytics */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center">
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                        {t.dataVisualization.peopleAnalytics.title}
                      </h3>
                      <ul className="space-y-2 text-sm md:text-base text-muted-foreground">
                        {t.dataVisualization.peopleAnalytics.items.map((item, index) => (
                          <li key={index} className="flex items-center gap-3">
                            <span className="w-1 h-1 rounded-full bg-muted-foreground flex-shrink-0"></span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="w-full">
                      <Image
                        src="/portfolio/dashboard/Dashboard-PeopleAnalytics.png"
                        alt="People Analytics"
                        width={600}
                        height={400}
                        className="w-full h-auto object-contain"
                      />
                    </div>
                  </div>

                  {/* Vehicle Analytics */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center">
                    <div className="lg:order-2">
                      <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                        {t.dataVisualization.vehicleAnalytics.title}
                      </h3>
                      <ul className="space-y-2 text-sm md:text-base text-muted-foreground">
                        {t.dataVisualization.vehicleAnalytics.items.map((item, index) => (
                          <li key={index} className="flex items-center gap-3">
                            <span className="w-1 h-1 rounded-full bg-muted-foreground flex-shrink-0"></span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="lg:order-1 w-full">
                      <Image
                        src="/portfolio/dashboard/Dashboard-VehicleAnalytics.png"
                        alt="Vehicle Analytics"
                        width={600}
                        height={400}
                        className="w-full h-auto object-contain"
                      />
                    </div>
                  </div>

                  {/* Honeypot */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center">
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                        {t.dataVisualization.honeypot.title}
                      </h3>
                      <ul className="space-y-2 text-sm md:text-base text-muted-foreground">
                        {t.dataVisualization.honeypot.items.map((item, index) => (
                          <li key={index} className="flex items-center gap-3">
                            <span className="w-1 h-1 rounded-full bg-muted-foreground flex-shrink-0"></span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="w-full">
                      <Image
                        src="/portfolio/dashboard/Dashboard-Honeypot.png"
                        alt="Honeypot Security"
                        width={600}
                        height={400}
                        className="w-full h-auto object-contain"
                      />
                    </div>
                  </div>
                </div>
              </section>

              {/* Widgets Status */}
              <section id="widgets">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4 md:mb-6 lg:mb-8">
                  {t.dataVisualization.widgetsStatus.title}
                </h2>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-8">
                  {t.dataVisualization.widgetsStatus.content}
                </p>

                {/* Status Images */}
                <div className="space-y-8">
                  {/* Zero Data Status */}
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold text-foreground mb-4">
                      {t.dataVisualization.widgetsStatus.zeroData}
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <Image
                        src="/portfolio/dashboard/Status-0-1.png"
                        alt="Zero Data Status 1"
                        width={200}
                        height={150}
                        className="w-full h-auto object-contain"
                      />
                      <Image
                        src="/portfolio/dashboard/Status-0-2.png"
                        alt="Zero Data Status 2"
                        width={200}
                        height={150}
                        className="w-full h-auto object-contain"
                      />
                      <Image
                        src="/portfolio/dashboard/Status-0-3.png"
                        alt="Zero Data Status 3"
                        width={200}
                        height={150}
                        className="w-full h-auto object-contain"
                      />
                      <Image
                        src="/portfolio/dashboard/Status-0-4.png"
                        alt="Zero Data Status 4"
                        width={200}
                        height={150}
                        className="w-full h-auto object-contain"
                      />
                    </div>
                  </div>

                  {/* Null Data Status */}
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold text-foreground mb-4">
                      {t.dataVisualization.widgetsStatus.nullData}
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <Image
                        src="/portfolio/dashboard/Status-n-1.png"
                        alt="Null Data Status 1"
                        width={200}
                        height={150}
                        className="w-full h-auto object-contain"
                      />
                      <Image
                        src="/portfolio/dashboard/Status-n-2.png"
                        alt="Null Data Status 2"
                        width={200}
                        height={150}
                        className="w-full h-auto object-contain"
                      />
                      <Image
                        src="/portfolio/dashboard/Status-n-3.png"
                        alt="Null Data Status 3"
                        width={200}
                        height={150}
                        className="w-full h-auto object-contain"
                      />
                      <Image
                        src="/portfolio/dashboard/Status-n-4.png"
                        alt="Null Data Status 4"
                        width={200}
                        height={150}
                        className="w-full h-auto object-contain"
                      />
                    </div>
                  </div>
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
