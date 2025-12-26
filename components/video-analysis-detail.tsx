"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { useLanguage } from "@/contexts/language-context"
import { Header } from "@/components/header"

export function VideoAnalysisDetail() {
  const { t } = useLanguage()
  const [showSidebar, setShowSidebar] = useState(false)
  const [activeSection, setActiveSection] = useState("about")

  const sections = [
    { id: "about", label: t.videoAnalysis.sections.about },
    { id: "discovery", label: t.videoAnalysis.sections.discovery },
    { id: "eventPanel", label: t.videoAnalysis.sections.eventPanel },
    { id: "analysisSettings", label: t.videoAnalysis.sections.analysisSettings },
    { id: "graphicalTool", label: t.videoAnalysis.sections.graphicalTool },
    { id: "uiKit", label: t.videoAnalysis.sections.uiKit },
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
            {t.videoAnalysis.title}
          </h1>

          <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-xs md:text-sm text-muted-foreground">
            <div>
              <span className="font-medium">Year: </span>
              {t.videoAnalysis.hero.duration}
            </div>
            <div>
              <span className="font-medium">Role: </span>
              {t.videoAnalysis.hero.role}
            </div>
            <div>
              <span className="font-medium">Company: </span>
              {t.videoAnalysis.hero.company}
            </div>
            <div>
              <span className="font-medium">Platforms: </span>
              {t.videoAnalysis.hero.platforms}
            </div>
          </div>
        </div>

        {/* Hero Image - TV Wall with animated text */}
        <div className="relative w-full max-w-4xl mx-auto">
          {/* TV Wall Image - centered */}
          <div className="relative w-[70%] sm:w-[65%] md:w-[70%] max-w-[750px] mx-auto">
            <Image
              src="/portfolio/video-analysis/TVwallTop.png"
              alt="Video Analysis TV Wall"
              width={700}
              height={430}
              className="w-full h-auto object-contain"
            />
          </div>

          {/* VIDEO - left side of image */}
          <div className="animate-video absolute top-[40%] left-[0%] font-medium italic text-muted-foreground/70">
            <span className="relative z-10 text-xl sm:text-2xl md:text-3xl lg:text-4xl px-2 md:px-3">VIDEO</span>
            <div className="animate-greenBox2 absolute border-2 md:border-[3px] border-green-500 -inset-1 md:-inset-2" />
          </div>

          {/* Animated Text Box - right side */}
          <div className="absolute top-0 left-[60%] sm:left-[58%] md:left-[60%] w-[40%] sm:w-[42%] md:w-[40%] h-full font-medium italic text-muted-foreground/70">
            {/* NVR - top right */}
            <div className="animate-nvr absolute top-[20%] right-[5%]">
              <span className="relative z-10 text-xl sm:text-2xl md:text-3xl lg:text-4xl px-2 md:px-3">NVR</span>
              <div className="animate-greenBox1 absolute border-2 md:border-[3px] border-green-500 -inset-1 md:-inset-2" />
            </div>

            {/* Analysis - bottom right */}
            <div className="animate-analysis absolute top-[70%] right-[-15%]">
              <span className="relative z-10 text-xl sm:text-2xl md:text-3xl lg:text-4xl px-2 md:px-3">Analysis</span>
              <div className="animate-greenBox3 absolute border-2 md:border-[3px] border-green-500 -inset-1 md:-inset-2" />
            </div>
          </div>
        </div>
      </div>

      {/* CSS Animation Styles */}
      <style jsx global>{`
        @keyframes nvr {
          0%   { transform: scale(0.5); opacity: 0; }
          15%  { transform: scale(1);   opacity: 1; }
          25%  { transform: scale(1);   opacity: 1; }
          90%  { transform: scale(1);   opacity: 1; }
          100% { opacity: 0; }
        }
        @keyframes video {
          0%   { transform: scale(0.5); opacity: 0; }
          20%  { transform: scale(0.5); opacity: 0; }
          25%  { transform: scale(1);   opacity: 1; }
          90%  { transform: scale(1);   opacity: 1; }
          100% { opacity: 0; }
        }
        @keyframes analysis {
          0%   { transform: scale(0.5); opacity: 0; }
          30%  { transform: scale(0.5); opacity: 0; }
          35%  { transform: scale(1);   opacity: 1; }
          90%  { transform: scale(1);   opacity: 1; }
          100% { opacity: 0; }
        }
        @keyframes greenBox1 {
          0%   { opacity: 0; }
          15%  { opacity: 0; transform: scale(1.5); }
          20%  { opacity: 1; transform: scale(1); }
          90%  { opacity: 1; }
          91%  { opacity: 0; }
          100% { opacity: 0; }
        }
        @keyframes greenBox2 {
          0%   { opacity: 0; }
          25%  { opacity: 0; transform: scale(1.5); }
          30%  { opacity: 1; transform: scale(1); }
          90%  { opacity: 1; }
          91%  { opacity: 0; }
          100% { opacity: 0; }
        }
        @keyframes greenBox3 {
          0%   { opacity: 0; }
          35%  { opacity: 0; transform: scale(1.5); }
          40%  { opacity: 1; transform: scale(1); }
          90%  { opacity: 1; }
          91%  { opacity: 0; }
          100% { opacity: 0; }
        }
        .animate-nvr {
          animation: nvr 10s ease-in-out infinite;
        }
        .animate-video {
          animation: video 10s ease-in-out infinite;
        }
        .animate-analysis {
          animation: analysis 10s ease-in-out infinite;
        }
        .animate-greenBox1 {
          animation: greenBox1 10s infinite;
        }
        .animate-greenBox2 {
          animation: greenBox2 10s infinite;
        }
        .animate-greenBox3 {
          animation: greenBox3 10s infinite;
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
                    {t.videoAnalysis.hero.role}
                  </p>
                </div>
                <div className="border border-border rounded-lg p-4 md:p-6">
                  <h3 className="text-base md:text-lg font-bold text-foreground mb-2 md:mb-3">02 Platforms</h3>
                  <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                    {t.videoAnalysis.hero.platforms}
                  </p>
                </div>
                <div className="border border-border rounded-lg p-4 md:p-6">
                  <h3 className="text-base md:text-lg font-bold text-foreground mb-2 md:mb-3">03 Deliverables</h3>
                  <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                    {t.videoAnalysis.hero.deliverables}
                  </p>
                </div>
                <div className="border border-border rounded-lg p-4 md:p-6">
                  <h3 className="text-base md:text-lg font-bold text-foreground mb-2 md:mb-3">04 Year</h3>
                  <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                    {t.videoAnalysis.hero.duration}
                  </p>
                </div>
              </div>
            </div>

            {/* Content Sections */}
            <div className="space-y-16 md:space-y-24 lg:space-y-32">
              {/* About */}
              <section id="about">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4 md:mb-6 lg:mb-8">
                  {t.videoAnalysis.about.title}
                </h2>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  {t.videoAnalysis.about.content}
                </p>
              </section>

              {/* Discovery */}
              <section id="discovery">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4 md:mb-6 lg:mb-8">
                  {t.videoAnalysis.discovery.title}
                </h2>

                {/* Early Explorations */}
                <div className="mb-8">
                  <p className="text-xs text-muted-foreground mb-4 text-center">
                    {t.videoAnalysis.discovery.earlyExplorations}
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
                    <Image
                      src="/portfolio/video-analysis/tv-wall01.png"
                      alt="TV Wall Exploration 1"
                      width={200}
                      height={150}
                      className="w-full h-auto object-contain"
                    />
                    <Image
                      src="/portfolio/video-analysis/tv-wall02.png"
                      alt="TV Wall Exploration 2"
                      width={200}
                      height={150}
                      className="w-full h-auto object-contain"
                    />
                    <Image
                      src="/portfolio/video-analysis/tv-wall03.png"
                      alt="TV Wall Exploration 3"
                      width={200}
                      height={150}
                      className="w-full h-auto object-contain"
                    />
                    <Image
                      src="/portfolio/video-analysis/tv-wall04.png"
                      alt="TV Wall Exploration 4"
                      width={200}
                      height={150}
                      className="w-full h-auto object-contain"
                    />
                    <Image
                      src="/portfolio/video-analysis/tv-wall05.png"
                      alt="TV Wall Exploration 5"
                      width={200}
                      height={150}
                      className="w-full h-auto object-contain"
                    />
                  </div>
                </div>

                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  {t.videoAnalysis.discovery.content}
                </p>
              </section>

              {/* Event Panel */}
              <section id="eventPanel">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4 md:mb-6 lg:mb-8">
                  {t.videoAnalysis.eventPanel.title}
                </h2>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-8">
                  {t.videoAnalysis.eventPanel.content}
                </p>
                <div className="relative w-full">
                  <Image
                    src="/portfolio/video-analysis/alertListBg.png"
                    alt="Alert List Background"
                    width={700}
                    height={450}
                    className="w-[85%] h-auto object-contain"
                  />
                  <Image
                    src="/portfolio/video-analysis/alertList.png"
                    alt="Alert List"
                    width={200}
                    height={400}
                    className="absolute right-0 top-[10%] w-[22%] h-auto object-contain shadow-xl"
                  />
                </div>
              </section>

              {/* Analysis Settings */}
              <section id="analysisSettings">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4 md:mb-6 lg:mb-8">
                  {t.videoAnalysis.analysisSettings.title}
                </h2>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-4">
                  {t.videoAnalysis.analysisSettings.content1}
                </p>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-8">
                  {t.videoAnalysis.analysisSettings.content2}
                </p>

                {/* Analysis Images - mobile: stacked, desktop: overlapping */}
                {/* Mobile layout */}
                <div className="md:hidden space-y-4">
                  <Image
                    src="/portfolio/video-analysis/analysis1.png"
                    alt="Analysis Settings - Main Screen"
                    width={800}
                    height={500}
                    className="w-full h-auto object-contain"
                  />
                  <Image
                    src="/portfolio/video-analysis/analysis2.png"
                    alt="Intrusion Detection"
                    width={500}
                    height={350}
                    className="w-full h-auto object-contain"
                  />
                  <Image
                    src="/portfolio/video-analysis/analysis3.png"
                    alt="Schedule Settings"
                    width={500}
                    height={350}
                    className="w-full h-auto object-contain"
                  />
                </div>
                {/* Desktop overlapping layout */}
                <div className="hidden md:block relative w-full h-[550px] lg:h-[650px]">
                  {/* Main iMac image - background, smaller */}
                  <Image
                    src="/portfolio/video-analysis/analysis1.png"
                    alt="Analysis Settings - Main Screen"
                    width={800}
                    height={500}
                    className="absolute right-0 bottom-0 w-[60%] h-auto object-contain z-10"
                  />
                  {/* Intrusion Detection dialog - front left top */}
                  <Image
                    src="/portfolio/video-analysis/analysis2.png"
                    alt="Intrusion Detection"
                    width={500}
                    height={350}
                    className="absolute left-0 top-0 w-[55%] h-auto object-contain z-20 shadow-lg"
                  />
                  {/* Schedule Settings - front left bottom */}
                  <Image
                    src="/portfolio/video-analysis/analysis3.png"
                    alt="Schedule Settings"
                    width={500}
                    height={350}
                    className="absolute left-[5%] top-[40%] w-[55%] h-auto object-contain z-30 shadow-lg"
                  />
                </div>
              </section>

              {/* Graphical Tool */}
              <section id="graphicalTool">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4 md:mb-6 lg:mb-8">
                  {t.videoAnalysis.graphicalTool.title}
                </h2>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-8">
                  {t.videoAnalysis.graphicalTool.content}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  <Image
                    src="/portfolio/video-analysis/turnLeftRole.png"
                    alt="Turn Left Role"
                    width={500}
                    height={300}
                    className="w-full h-auto object-contain"
                  />
                  <Image
                    src="/portfolio/video-analysis/AnalyzingTool.png"
                    alt="Analyzing Tool"
                    width={500}
                    height={300}
                    className="w-full h-auto object-contain"
                  />
                </div>
              </section>

              {/* UI Kit */}
              <section id="uiKit">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4 md:mb-6 lg:mb-8">
                  {t.videoAnalysis.uiKit.title}
                </h2>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-8">
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

              {/* Final Showcase */}
              <section>
                <Image
                  src="/portfolio/video-analysis/vd-01.png"
                  alt="Video Analysis Final"
                  width={1200}
                  height={700}
                  className="w-full h-auto"
                />
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
