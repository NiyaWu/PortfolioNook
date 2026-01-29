"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { useLanguage } from "@/contexts/language-context"
import { Header } from "@/components/header"

export function VodChannelDetail() {
  const { t } = useLanguage()
  const [showSidebar, setShowSidebar] = useState(false)
  const [activeSection, setActiveSection] = useState("discovery")

  const sections = [
    { id: "discovery", label: t.vodChannel.sections.discovery },
    { id: "researchGoals", label: t.vodChannel.sections.researchGoals },
    { id: "usabilityTesting", label: t.vodChannel.sections.usabilityTesting },
    { id: "abTesting", label: t.vodChannel.sections.abTesting },
    { id: "mockup", label: t.vodChannel.sections.mockup },
    { id: "uiKit", label: t.vodChannel.sections.uiKit },
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
                  {t.vodChannel.hero.role}
                </p>
              </div>
              <div>
                <h3 className="text-base md:text-lg font-bold text-foreground mb-2 md:mb-3">Platforms</h3>
                <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                  {t.vodChannel.hero.platforms}
                </p>
              </div>
              <div>
                <h3 className="text-base md:text-lg font-bold text-foreground mb-2 md:mb-3">Deliverables</h3>
                <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                  {t.vodChannel.hero.deliverables}
                </p>
              </div>
              <div>
                <h3 className="text-base md:text-lg font-bold text-foreground mb-2 md:mb-3">Year</h3>
                <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                  {t.vodChannel.hero.duration}
                </p>
              </div>
            </div>

            {/* Content Sections */}
            <div className="space-y-16 md:space-y-24 lg:space-y-32">
              {/* Discovery */}
              <section id="discovery">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center">
                  <div className="order-2 lg:order-1">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4 md:mb-6 lg:mb-8">
                      {t.vodChannel.discovery.title}
                    </h2>
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                      {t.vodChannel.discovery.content}
                    </p>
                  </div>
                  <div className="w-full order-1 lg:order-2">
                    <Image
                      src="/portfolio/vod-channel/userMessage01.png"
                      alt="User Messages"
                      width={500}
                      height={350}
                      className="w-[80%] mx-auto h-auto object-contain"
                    />
                  </div>
                </div>
              </section>

              {/* Research Goals */}
              <section id="researchGoals">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4 md:mb-6 lg:mb-8">
                  {t.vodChannel.researchGoals.title}
                </h2>
                <ul className="space-y-2">
                  {t.vodChannel.researchGoals.items.map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-sm md:text-base text-muted-foreground">
                      <span className="w-1 h-1 rounded-full bg-muted-foreground mt-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </section>

              {/* Usability Testing */}
              <section id="usabilityTesting">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4 md:mb-6 lg:mb-8">
                  {t.vodChannel.usabilityTesting.title}
                </h2>

                {/* Wireframes */}
                <div className="mb-8">
                  <div className="flex flex-wrap gap-2 mb-4 justify-center">
                    {[7, 8, 9, 10, 1, 2, 3, 4, 5, 6].map((num) => (
                      <Image
                        key={num}
                        src={`/portfolio/vod-channel/phone-w${num}.jpg`}
                        alt={`Wireframe ${num}`}
                        width={100}
                        height={180}
                        className="w-[80px] md:w-[100px] h-auto object-contain"
                      />
                    ))}
                  </div>
                  <p className="text-xs text-muted-foreground text-center">{t.vodChannel.usabilityTesting.wireframes}</p>
                </div>

                <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-8">
                  {t.vodChannel.usabilityTesting.content}
                </p>

                {/* Participants */}
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                  {t.vodChannel.participants.title}
                </h3>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-8">
                  {t.vodChannel.participants.content}
                </p>

                {/* Test Objectives */}
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                  {t.vodChannel.testObjectives.title}
                </h3>
                <ul className="space-y-2">
                  {t.vodChannel.testObjectives.items.map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-sm md:text-base text-muted-foreground">
                      <span className="w-1 h-1 rounded-full bg-muted-foreground mt-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </section>

              {/* AB Testing */}
              <section id="abTesting">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4 md:mb-6 lg:mb-8">
                  {t.vodChannel.abTesting.title}
                </h2>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-8">
                  {t.vodChannel.abTesting.content}
                </p>
                <Image
                  src="/portfolio/vod-channel/test-1.png"
                  alt="AB Testing"
                  width={1000}
                  height={600}
                  className="w-full h-auto object-contain mb-12"
                />

                {/* Result 1 */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center mb-16">
                  <div className="order-2 lg:order-1">
                    <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                      {t.vodChannel.result1.title}
                    </h3>
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-2">
                      {t.vodChannel.result1.content1}
                    </p>
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                      {t.vodChannel.result1.content2}
                    </p>
                  </div>
                  <div className="w-full flex justify-center order-1 lg:order-2">
                    <Image
                      src="/portfolio/vod-channel/testB.gif"
                      alt="Result Animation"
                      width={300}
                      height={500}
                      className="w-[60%] h-auto object-contain"
                    />
                  </div>
                </div>

                {/* Login Test */}
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                  {t.vodChannel.loginTest.title}
                </h3>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-2">
                  {t.vodChannel.loginTest.content}
                </p>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-8">
                  {t.vodChannel.loginTest.content2}
                </p>
                <Image
                  src="/portfolio/vod-channel/test-2.png"
                  alt="Login Test"
                  width={1000}
                  height={600}
                  className="w-full h-auto object-contain mb-12"
                />

                {/* Result 2 */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center mb-16">
                  <div className="order-2 lg:order-1">
                    <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                      {t.vodChannel.result2.title}
                    </h3>
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                      {t.vodChannel.result2.content}
                    </p>
                  </div>
                  <div className="w-full flex justify-center gap-4 order-1 lg:order-2">
                    <Image
                      src="/portfolio/vod-channel/testC.png"
                      alt="Result C"
                      width={200}
                      height={350}
                      className="w-[45%] h-auto object-contain"
                    />
                    <Image
                      src="/portfolio/vod-channel/testD.png"
                      alt="Result D"
                      width={200}
                      height={350}
                      className="w-[45%] h-auto object-contain"
                    />
                  </div>
                </div>

                {/* Video Type Test */}
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                  {t.vodChannel.videoTypeTest.title}
                </h3>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-8">
                  {t.vodChannel.videoTypeTest.content}
                </p>
                <Image
                  src="/portfolio/vod-channel/test-3.png"
                  alt="Video Type Test"
                  width={1000}
                  height={600}
                  className="w-full h-auto object-contain mb-12"
                />

                {/* Result 3 */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center mb-16">
                  <div className="order-2 lg:order-1">
                    <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                      {t.vodChannel.result3.title}
                    </h3>
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-2">
                      {t.vodChannel.result3.content1}
                    </p>
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                      {t.vodChannel.result3.content2}
                    </p>
                  </div>
                  <div className="w-full flex justify-center gap-4 order-1 lg:order-2">
                    <Image
                      src="/portfolio/vod-channel/testE.png"
                      alt="Result E"
                      width={200}
                      height={350}
                      className="w-[45%] h-auto object-contain"
                    />
                    <Image
                      src="/portfolio/vod-channel/testF.png"
                      alt="Result F"
                      width={200}
                      height={350}
                      className="w-[45%] h-auto object-contain"
                    />
                  </div>
                </div>

                {/* Payment Test */}
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                  {t.vodChannel.paymentTest.title}
                </h3>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-8">
                  {t.vodChannel.paymentTest.content}
                </p>
                <Image
                  src="/portfolio/vod-channel/test-4.png"
                  alt="Payment Test"
                  width={1000}
                  height={600}
                  className="w-full h-auto object-contain mb-12"
                />

                {/* Result 4 */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center mb-16">
                  <div className="order-2 lg:order-1">
                    <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                      {t.vodChannel.result4.title}
                    </h3>
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-2">
                      {t.vodChannel.result4.content1}
                    </p>
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                      {t.vodChannel.result4.content2}
                    </p>
                  </div>
                  <div className="w-full flex justify-center gap-4 order-1 lg:order-2">
                    <Image
                      src="/portfolio/vod-channel/testG.png"
                      alt="Result G"
                      width={200}
                      height={350}
                      className="w-[45%] h-auto object-contain"
                    />
                    <Image
                      src="/portfolio/vod-channel/testH.png"
                      alt="Result H"
                      width={200}
                      height={350}
                      className="w-[45%] h-auto object-contain"
                    />
                  </div>
                </div>

                {/* Live Video Test */}
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                  {t.vodChannel.liveVideoTest.title}
                </h3>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-8">
                  {t.vodChannel.liveVideoTest.content}
                </p>
                <Image
                  src="/portfolio/vod-channel/test-5.png"
                  alt="Live Video Test"
                  width={1000}
                  height={600}
                  className="w-full h-auto object-contain mb-8"
                />

                {/* Result 5 */}
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                  {t.vodChannel.result5.title}
                </h3>
                <ul className="space-y-2">
                  {t.vodChannel.result5.items.map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-sm md:text-base text-muted-foreground">
                      <span className="w-1 h-1 rounded-full bg-muted-foreground mt-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </section>

              {/* Mockup */}
              <section id="mockup">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4 md:mb-6 lg:mb-8">
                  {t.vodChannel.mockup.title}
                </h2>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-8">
                  {t.vodChannel.mockup.content}
                </p>
                <Image
                  src="/portfolio/vod-channel/VOD-mockup.jpg"
                  alt="VOD Mockup"
                  width={1200}
                  height={700}
                  className="w-full h-auto object-contain"
                />
              </section>

              {/* UI Kit */}
              <section id="uiKit">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4 md:mb-6 lg:mb-8">
                  {t.vodChannel.uiKit.title}
                </h2>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-8">
                  {t.vodChannel.uiKit.content}
                </p>
                <Image
                  src="/portfolio/vod-channel/themePic.png"
                  alt="UI Kit"
                  width={1200}
                  height={600}
                  className="w-full h-auto object-contain"
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
