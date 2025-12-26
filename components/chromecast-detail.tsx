"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { useLanguage } from "@/contexts/language-context"
import { Header } from "@/components/header"

export function ChromecastDetail() {
  const { t } = useLanguage()
  const [showSidebar, setShowSidebar] = useState(false)
  const [activeSection, setActiveSection] = useState("about")

  const sections = [
    { id: "about", label: t.chromecast.sections.about },
    { id: "discovery", label: t.chromecast.sections.discovery },
    { id: "phaseTwo", label: t.chromecast.sections.phaseTwo },
    { id: "newFeature", label: t.chromecast.sections.newFeature },
    { id: "interfaceDesign", label: t.chromecast.sections.interfaceDesign },
    { id: "testVideo", label: t.chromecast.sections.testVideo },
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
            {t.chromecast.title}
          </h1>

          <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-xs md:text-sm text-muted-foreground">
            <div>
              <span className="font-medium">Year: </span>
              {t.chromecast.hero.duration}
            </div>
            <div>
              <span className="font-medium">Role: </span>
              {t.chromecast.hero.role}
            </div>
            <div>
              <span className="font-medium">Company: </span>
              {t.chromecast.hero.company}
            </div>
            <div>
              <span className="font-medium">Platforms: </span>
              {t.chromecast.hero.platforms}
            </div>
          </div>
        </div>

        {/* Hero Image - Title and Phone */}
        <div className="relative w-full max-w-4xl mx-auto">
          <div className="relative w-[80%] max-w-[700px] mx-auto">
            <Image
              src="/portfolio/chromecast/myVideo-Chromecat-Title.png"
              alt="Chromecast Title"
              width={700}
              height={300}
              className="w-full h-auto object-contain"
            />
          </div>
          <div className="absolute right-[5%] bottom-0 w-[18%] max-w-[150px]">
            <Image
              src="/portfolio/chromecast/phone.png"
              alt="Chromecast Phone"
              width={150}
              height={300}
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>

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
            {/* Project Info Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-12 md:mb-16">
              <div>
                <h3 className="text-base md:text-lg font-bold text-foreground mb-2 md:mb-3">Role</h3>
                <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                  {t.chromecast.hero.role}
                </p>
              </div>
              <div>
                <h3 className="text-base md:text-lg font-bold text-foreground mb-2 md:mb-3">Platforms</h3>
                <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                  {t.chromecast.hero.platforms}
                </p>
              </div>
              <div>
                <h3 className="text-base md:text-lg font-bold text-foreground mb-2 md:mb-3">Deliverables</h3>
                <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                  {t.chromecast.hero.deliverables}
                </p>
              </div>
              <div>
                <h3 className="text-base md:text-lg font-bold text-foreground mb-2 md:mb-3">Year</h3>
                <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                  {t.chromecast.hero.duration}
                </p>
              </div>
            </div>

            {/* Content Sections */}
            <div className="space-y-16 md:space-y-24 lg:space-y-32">
              {/* About */}
              <section id="about">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4 md:mb-6 lg:mb-8">
                  {t.chromecast.about.title}
                </h2>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  {t.chromecast.about.content}
                </p>
              </section>

              {/* Discovery */}
              <section id="discovery">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center mb-8">
                  <div>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4 md:mb-6 lg:mb-8">
                      {t.chromecast.discovery.title}
                    </h2>
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                      {t.chromecast.discovery.content}
                    </p>
                  </div>
                  <div className="w-full">
                    <Image
                      src="/portfolio/chromecast/discovery.png"
                      alt="Discovery Flow"
                      width={500}
                      height={350}
                      className="w-full h-auto object-contain"
                    />
                  </div>
                </div>
                {/* Flow Diagram */}
                <div>
                  <Image
                    src="/portfolio/chromecast/chromecast-flow.png"
                    alt="Chromecast Flow"
                    width={1200}
                    height={600}
                    className="w-full h-auto object-contain"
                  />
                </div>
              </section>

              {/* Phase Two */}
              <section id="phaseTwo">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4 md:mb-6 lg:mb-8">
                  {t.chromecast.phaseTwo.title}
                </h2>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-8">
                  {t.chromecast.phaseTwo.content}
                </p>
                <div>
                  <Image
                    src="/portfolio/chromecast/chromecast-flow-phaseTwo_01.jpg"
                    alt="Phase Two Design"
                    width={1200}
                    height={600}
                    className="w-full h-auto object-contain"
                  />
                </div>
              </section>

              {/* New Feature In Player */}
              <section id="newFeature">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4 md:mb-6 lg:mb-8">
                  {t.chromecast.newFeature.title}
                </h2>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-8">
                  {t.chromecast.newFeature.content}
                </p>
                <div>
                  <Image
                    src="/portfolio/chromecast/chromecast-flow-phaseTwo_02.jpg"
                    alt="New Feature in Player"
                    width={1200}
                    height={600}
                    className="w-full h-auto object-contain"
                  />
                </div>
              </section>

              {/* Interface Design In Difference OS */}
              <section id="interfaceDesign">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4 md:mb-6 lg:mb-8">
                  {t.chromecast.interfaceDesign.title}
                </h2>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-8">
                  {t.chromecast.interfaceDesign.content}
                </p>
                <div>
                  <Image
                    src="/portfolio/chromecast/chromecast-flow-phaseTwo_03.jpg"
                    alt="Interface Design in Different OS"
                    width={1200}
                    height={600}
                    className="w-full h-auto object-contain"
                  />
                </div>
              </section>

              {/* Feature Test Video */}
              <section id="testVideo">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center">
                  <div>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4 md:mb-6 lg:mb-8">
                      {t.chromecast.testVideo.title}
                    </h2>
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                      {t.chromecast.testVideo.content}
                    </p>
                  </div>
                  <div className="w-full">
                    <video
                      loop
                      muted
                      controls
                      className="w-full h-auto rounded-lg"
                    >
                      <source src="/portfolio/chromecast/test.mp4" type="video/mp4" />
                    </video>
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
