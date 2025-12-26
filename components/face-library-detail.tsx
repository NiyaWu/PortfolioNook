"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { useLanguage } from "@/contexts/language-context"
import { Header } from "@/components/header"

export function FaceLibraryDetail() {
  const { t } = useLanguage()
  const [showSidebar, setShowSidebar] = useState(false)
  const [activeSection, setActiveSection] = useState("about")

  const sections = [
    { id: "about", label: t.faceLibrary.sections.about },
    { id: "flowMap", label: t.faceLibrary.sections.flowMap },
    { id: "eventPage", label: t.faceLibrary.sections.eventPage },
    { id: "faceManagement", label: t.faceLibrary.sections.faceManagement },
    { id: "mockupFlow", label: t.faceLibrary.sections.mockupFlow },
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
            {t.faceLibrary.title}
          </h1>

          <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-xs md:text-sm text-muted-foreground">
            <div>
              <span className="font-medium">Year: </span>
              {t.faceLibrary.hero.duration}
            </div>
            <div>
              <span className="font-medium">Role: </span>
              {t.faceLibrary.hero.role}
            </div>
            <div>
              <span className="font-medium">Company: </span>
              {t.faceLibrary.hero.company}
            </div>
            <div>
              <span className="font-medium">Platforms: </span>
              {t.faceLibrary.hero.platforms}
            </div>
          </div>
        </div>

        {/* Hero Images - Overlapping with Animation */}
        <div className="relative w-full max-w-6xl mx-auto h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]">
          {/* Main Device Image */}
          <div className="relative w-[95%] sm:w-[85%] md:w-[80%] max-w-[900px] mx-auto mt-8 z-10">
            <Image
              src="/portfolio/face-library/SnapshotPopup.png"
              alt="Face Library Main Interface"
              width={900}
              height={560}
              className="w-full h-auto object-contain shadow-2xl"
            />
          </div>

          {/* Floating Image 2 - Top Right with animation */}
          <div className="hidden md:block absolute right-[5%] lg:right-[50px] xl:right-[100px] top-0 lg:top-0 w-[120px] lg:w-[160px] z-20 animate-float-slow">
            <Image
              src="/portfolio/face-library/ErrorPopup.png"
              alt="Error Popup"
              width={160}
              height={120}
              className="w-full h-auto object-contain shadow-xl"
            />
          </div>

          {/* Floating Image 3 - Bottom Left with animation */}
          <div className="hidden sm:block absolute left-0 md:left-[20px] lg:left-[50px] bottom-[-30px] sm:bottom-0 w-[25%] min-w-[120px] md:w-[200px] lg:w-[250px] z-30 animate-float">
            <Image
              src="/portfolio/face-library/SnapshotAlert.png"
              alt="Snapshot Alert"
              width={250}
              height={180}
              className="w-full h-auto object-contain shadow-2xl"
            />
          </div>

          {/* Floating Image 4 - Right Side */}
          <div className="hidden lg:block absolute right-0 xl:right-[20px] top-[35%] w-[80px] xl:w-[100px] z-20 animate-float-slow">
            <Image
              src="/portfolio/face-library/SystemPopup.png"
              alt="System Popup"
              width={100}
              height={80}
              className="w-full h-auto object-contain shadow-xl"
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
                    {t.faceLibrary.hero.role}
                  </p>
                </div>
                <div className="border border-border rounded-lg p-4 md:p-6">
                  <h3 className="text-base md:text-lg font-bold text-foreground mb-2 md:mb-3">02 Platforms</h3>
                  <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                    {t.faceLibrary.hero.platforms}
                  </p>
                </div>
                <div className="border border-border rounded-lg p-4 md:p-6">
                  <h3 className="text-base md:text-lg font-bold text-foreground mb-2 md:mb-3">03 Deliverables</h3>
                  <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                    {t.faceLibrary.hero.deliverables}
                  </p>
                </div>
                <div className="border border-border rounded-lg p-4 md:p-6">
                  <h3 className="text-base md:text-lg font-bold text-foreground mb-2 md:mb-3">04 Year</h3>
                  <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                    {t.faceLibrary.hero.duration}
                  </p>
                </div>
              </div>
            </div>

            {/* Content Sections */}
            <div className="space-y-16 md:space-y-24 lg:space-y-32">
              {/* About */}
              <section id="about">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center">
                  <div>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4 md:mb-6 lg:mb-8">
                      {t.faceLibrary.about.title}
                    </h2>
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                      {t.faceLibrary.about.content}
                    </p>
                  </div>
                  <div className="w-full rounded-lg overflow-hidden">
                    <Image
                      src="/portfolio/face-library/backgroundStory.png"
                      alt="Background Story"
                      width={600}
                      height={400}
                      className="w-full h-auto object-contain"
                    />
                  </div>
                </div>
              </section>

              {/* Flow Map */}
              <section id="flowMap">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4 md:mb-6 lg:mb-8">
                  {t.faceLibrary.flowMap.title}
                </h2>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-8">
                  {t.faceLibrary.flowMap.content}
                </p>
                <div className="w-full bg-white rounded-lg p-4 overflow-hidden">
                  <Image
                    src="/portfolio/face-library/BAPFlow.png"
                    alt="Flow Map"
                    width={1200}
                    height={600}
                    className="w-full h-auto object-contain"
                  />
                </div>
              </section>

              {/* Event Page */}
              <section id="eventPage">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center">
                  <div>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4 md:mb-6 lg:mb-8">
                      {t.faceLibrary.eventPage.title}
                    </h2>
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                      {t.faceLibrary.eventPage.content}
                    </p>
                  </div>
                  <div className="w-full rounded-lg overflow-hidden">
                    <Image
                      src="/portfolio/face-library/EventFilter.png"
                      alt="Event Filter"
                      width={600}
                      height={400}
                      className="w-full h-auto object-contain"
                    />
                  </div>
                </div>
              </section>

              {/* Face Management */}
              <section id="faceManagement">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center">
                  <div className="lg:order-2">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4 md:mb-6 lg:mb-8">
                      {t.faceLibrary.faceManagement.title}
                    </h2>
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                      {t.faceLibrary.faceManagement.content}
                    </p>
                  </div>
                  <div className="lg:order-1 w-full relative h-[350px] md:h-[400px]">
                    <Image
                      src="/portfolio/face-library/FaceA.png"
                      alt="Face Add"
                      width={400}
                      height={300}
                      className="absolute right-0 top-0 w-[80%] h-auto object-contain shadow-lg"
                    />
                    <Image
                      src="/portfolio/face-library/FaceB.png"
                      alt="Face Report"
                      width={350}
                      height={250}
                      className="absolute left-0 bottom-0 w-[75%] h-auto object-contain shadow-xl z-10"
                    />
                  </div>
                </div>
              </section>

              {/* Mockup Flow */}
              <section id="mockupFlow">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4 md:mb-6 lg:mb-8">
                  {t.faceLibrary.mockupFlow.title}
                </h2>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-8">
                  {t.faceLibrary.mockupFlow.content}
                </p>
                <div className="w-full bg-white rounded-lg p-4 overflow-hidden">
                  <Image
                    src="/portfolio/face-library/Mockupflow.png"
                    alt="Mockup Flow"
                    width={1200}
                    height={800}
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
