"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { useLanguage } from "@/contexts/language-context"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { projectsData } from "@/locales/pages/common"

export function OtherWork() {
  const { t } = useLanguage()
  const [activePopup, setActivePopup] = useState<string | null>(null)
  const [isScrolled, setIsScrolled] = useState(false)
  const popupContentRef = useRef<HTMLDivElement>(null)

  // Lock body scroll when popup is open
  useEffect(() => {
    if (activePopup) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [activePopup])

  useEffect(() => {
    const handleScroll = () => {
      if (popupContentRef.current) {
        setIsScrolled(popupContentRef.current.scrollTop > 20)
      }
    }

    const popupContent = popupContentRef.current
    if (popupContent) {
      popupContent.addEventListener("scroll", handleScroll)
      return () => popupContent.removeEventListener("scroll", handleScroll)
    }
  }, [activePopup])

  // Filter out projects shown on homepage and excluded projects
  const excludedIds = ["vod-channel", "chromecast", "video-analysis"]
  const otherProjects = projectsData
    .slice(3)
    .filter((project) => !excludedIds.includes(project.id))
    .sort((a, b) => parseInt(b.year) - parseInt(a.year))

  const handleProjectClick = (projectId: string, e: React.MouseEvent) => {
    e.preventDefault()
    setActivePopup(projectId)
  }

  const closePopup = () => {
    setActivePopup(null)
    setIsScrolled(false)
  }

  // Get projects that have popups
  const popupProjects = otherProjects.filter(p =>
    ["data-visualization", "ido-workflow", "panko-mascot", "face-library"].includes(p.id)
  )

  const goToNextProject = () => {
    if (!activePopup) return
    const currentIndex = popupProjects.findIndex(p => p.id === activePopup)
    if (currentIndex >= popupProjects.length - 1) return
    setActivePopup(popupProjects[currentIndex + 1].id)
    setIsScrolled(false)
    if (popupContentRef.current) {
      popupContentRef.current.scrollTop = 0
    }
  }

  const goToPrevProject = () => {
    if (!activePopup) return
    const currentIndex = popupProjects.findIndex(p => p.id === activePopup)
    if (currentIndex <= 0) return
    setActivePopup(popupProjects[currentIndex - 1].id)
    setIsScrolled(false)
    if (popupContentRef.current) {
      popupContentRef.current.scrollTop = 0
    }
  }

  const isFirstProject = activePopup === popupProjects[0]?.id
  const isLastProject = activePopup === popupProjects[popupProjects.length - 1]?.id

  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      <Header />

      {/* Hero Section */}
      <div className="pt-24 md:pt-32 2xl:pt-40 pb-12 md:pb-16 2xl:pb-20 px-6 md:px-8 lg:px-12 2xl:px-16">
        <div className="max-w-4xl 2xl:max-w-5xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 md:mb-6">
            {t.otherWork.title}
          </h1>
          <p className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            {t.otherWork.subtitle}
          </p>
        </div>
      </div>

      {/* Projects Grid - Apple style 2 columns */}
      <div className="px-6 md:px-8 lg:px-12 2xl:px-16 pb-24 md:pb-32 2xl:pb-40">
        <div className="max-w-6xl 2xl:max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 2xl:gap-6">
            {otherProjects.map((project) => (
              <button
                key={project.id}
                onClick={(e) => handleProjectClick(project.id, e)}
                className="group relative overflow-hidden transition-all duration-300 text-left"
              >
                {/* Image fills entire area - fixed height for consistency */}
                <div className="h-[280px] md:h-[360px] lg:h-[420px] 2xl:h-[480px] relative overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Text overlay at top center */}
                  <div className="absolute top-0 left-0 right-0 p-5 pt-8 md:p-6 md:pt-10 lg:p-8 lg:pt-14 text-center">
                    <h3 className="text-lg md:text-xl lg:text-2xl font-semibold text-black mb-1 lg:mb-2">
                      {project.title}
                    </h3>
                    <p className="text-sm lg:text-base text-black/70">
                      {project.category}
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />

      {/* Data Visualization Popup */}
      {activePopup === "data-visualization" && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center"
          onClick={closePopup}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

          {/* Popup Content */}
          <div
            ref={popupContentRef}
            className="relative bg-white w-full h-full md:max-w-5xl md:max-h-[90vh] md:rounded-lg md:shadow-2xl overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Popup Header - Sticky */}
            <div className={`sticky top-0 z-10 bg-white text-center border-b border-gray-100 transition-all duration-300 ${isScrolled ? "p-3 px-14 md:p-4 md:px-16" : "p-4 px-14 md:p-10 md:px-16"}`}>
              <button
                onClick={closePopup}
                className="absolute top-3 right-3 md:top-4 md:right-4 w-10 h-10 flex items-center justify-center rounded-full hover:bg-black/10 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <h2 className={`font-bold text-foreground transition-all duration-300 ${isScrolled ? "text-lg md:text-xl mb-1" : "text-2xl md:text-3xl lg:text-4xl mb-2"}`}>
                {t.dataVisualization.title}
              </h2>
              <div className={`flex flex-wrap justify-center gap-x-4 gap-y-1 text-muted-foreground transition-all duration-300 ${isScrolled ? "text-xs" : "text-xs md:text-sm"}`}>
                <span>Year: {t.dataVisualization.hero.duration}</span>
                <span>Role: {t.dataVisualization.hero.role}</span>
                <span>Company: {t.dataVisualization.hero.company}</span>
              </div>
            </div>

            {/* Popup Body */}
            <div className="p-6 md:p-10">
              <div className="max-w-[680px] mx-auto space-y-10">
              {/* Hero Image */}
              <div className="relative w-full">
                <Image
                  src="/portfolio/dashboard/title2.png"
                  alt="Data Visualization Dashboard"
                  width={850}
                  height={550}
                  className="w-full h-auto object-contain"
                />
              </div>

              {/* About Section */}
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                  {t.dataVisualization.about.title}
                </h3>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  {t.dataVisualization.about.content}
                </p>
              </div>

              {/* Discovery Section */}
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                  {t.dataVisualization.discovery.title}
                </h3>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-4">
                  {t.dataVisualization.discovery.content}
                </p>
                <ul className="text-sm md:text-base text-muted-foreground leading-relaxed mb-8 list-disc list-inside space-y-2">
                  {t.dataVisualization.discovery.items.map((item: string, index: number) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>

                {/* Analytics Categories Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Image
                      src="/portfolio/dashboard/Dashboard-BehaviorAnalytics.png"
                      alt="Behavior Analytics"
                      width={400}
                      height={300}
                      className="w-full h-auto object-contain rounded-lg"
                    />
                    <p className="text-[10px] md:text-xs text-muted-foreground/70 text-center mt-3">
                      {t.dataVisualization.behaviorAnalytics.title}
                    </p>
                  </div>
                  <div>
                    <Image
                      src="/portfolio/dashboard/Dashboard-BusinessIntelligence.png"
                      alt="Business Intelligence"
                      width={400}
                      height={300}
                      className="w-full h-auto object-contain rounded-lg"
                    />
                    <p className="text-[10px] md:text-xs text-muted-foreground/70 text-center mt-3">
                      {t.dataVisualization.businessIntelligence.title}
                    </p>
                  </div>
                  <div>
                    <Image
                      src="/portfolio/dashboard/Dashboard-PeopleAnalytics.png"
                      alt="People Analytics"
                      width={400}
                      height={300}
                      className="w-full h-auto object-contain rounded-lg"
                    />
                    <p className="text-[10px] md:text-xs text-muted-foreground/70 text-center mt-3">
                      {t.dataVisualization.peopleAnalytics.title}
                    </p>
                  </div>
                  <div>
                    <Image
                      src="/portfolio/dashboard/Dashboard-VehicleAnalytics.png"
                      alt="Vehicle Analytics"
                      width={400}
                      height={300}
                      className="w-full h-auto object-contain rounded-lg"
                    />
                    <p className="text-[10px] md:text-xs text-muted-foreground/70 text-center mt-3">
                      {t.dataVisualization.vehicleAnalytics.title}
                    </p>
                  </div>
                </div>
              </div>

              {/* Widget Status Section */}
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                  {t.dataVisualization.widgetsStatus.title}
                </h3>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-6">
                  {t.dataVisualization.widgetsStatus.content}
                </p>
                {/* Zero Data Status */}
                <div className="mb-6">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <Image src="/portfolio/dashboard/Status-0-1.png" alt="Widget Status 0-1" width={200} height={150} className="w-full h-auto object-contain" />
                    <Image src="/portfolio/dashboard/Status-0-2.png" alt="Widget Status 0-2" width={200} height={150} className="w-full h-auto object-contain" />
                    <Image src="/portfolio/dashboard/Status-0-3.png" alt="Widget Status 0-3" width={200} height={150} className="w-full h-auto object-contain" />
                    <Image src="/portfolio/dashboard/Status-0-4.png" alt="Widget Status 0-4" width={200} height={150} className="w-full h-auto object-contain" />
                  </div>
                  <p className="text-[10px] md:text-xs text-muted-foreground/70 text-center mt-3">
                    {t.dataVisualization.widgetsStatus.zeroData}
                  </p>
                </div>
                {/* Null Data Status */}
                <div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <Image src="/portfolio/dashboard/Status-n-1.png" alt="Widget Status n-1" width={200} height={150} className="w-full h-auto object-contain" />
                    <Image src="/portfolio/dashboard/Status-n-2.png" alt="Widget Status n-2" width={200} height={150} className="w-full h-auto object-contain" />
                    <Image src="/portfolio/dashboard/Status-n-3.png" alt="Widget Status n-3" width={200} height={150} className="w-full h-auto object-contain" />
                    <Image src="/portfolio/dashboard/Status-n-4.png" alt="Widget Status n-4" width={200} height={150} className="w-full h-auto object-contain" />
                  </div>
                  <p className="text-[10px] md:text-xs text-muted-foreground/70 text-center mt-3">
                    {t.dataVisualization.widgetsStatus.nullData}
                  </p>
                </div>
              </div>

              </div>
            </div>

            {/* Footer Navigation */}
            <div className="md:sticky md:bottom-0 bg-white border-t border-gray-200 px-6 md:px-10 pt-4 pb-20 md:pb-4">
              <div className="max-w-[680px] mx-auto flex justify-between items-center">
                <button
                  onClick={closePopup}
                  className="px-3 py-2 text-sm font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-all"
                >
                  Close
                </button>
                <div className="flex items-center gap-6">
                  <button
                    onClick={goToPrevProject}
                    disabled={isFirstProject}
                    className={`group inline-flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-all ${
                      isFirstProject
                        ? "text-gray-300 cursor-not-allowed"
                        : "text-gray-500 hover:text-gray-900 hover:bg-gray-100"
                    }`}
                  >
                    <svg className={`w-4 h-4 mr-1.5 transition-transform ${!isFirstProject ? "group-hover:-translate-x-1" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    Back
                  </button>
                  <button
                    onClick={goToNextProject}
                    disabled={isLastProject}
                    className={`group inline-flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-all ${
                      isLastProject
                        ? "text-gray-300 cursor-not-allowed"
                        : "text-[#0071e3] hover:bg-blue-50"
                    }`}
                  >
                    Next
                    <svg className={`w-4 h-4 ml-1.5 transition-transform ${!isLastProject ? "group-hover:translate-x-1" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* IDO Workflow Popup */}
      {activePopup === "ido-workflow" && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center"
          onClick={closePopup}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

          {/* Popup Content */}
          <div
            ref={popupContentRef}
            className="relative bg-white w-full h-full md:max-w-5xl md:max-h-[90vh] md:rounded-lg md:shadow-2xl overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Popup Header - Sticky */}
            <div className={`sticky top-0 z-10 bg-white text-center border-b border-gray-100 transition-all duration-300 ${isScrolled ? "p-3 px-14 md:p-4 md:px-16" : "p-4 px-14 md:p-10 md:px-16"}`}>
              <button
                onClick={closePopup}
                className="absolute top-3 right-3 md:top-4 md:right-4 w-10 h-10 flex items-center justify-center rounded-full hover:bg-black/10 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <h2 className={`font-bold text-foreground transition-all duration-300 ${isScrolled ? "text-lg md:text-xl mb-1" : "text-2xl md:text-3xl lg:text-4xl mb-2"}`}>
                {t.idoWorkflow.title}
              </h2>
              <div className={`flex flex-wrap justify-center gap-x-4 gap-y-1 text-muted-foreground transition-all duration-300 ${isScrolled ? "text-xs" : "text-xs md:text-sm"}`}>
                <span>Year: {t.idoWorkflow.hero.duration}</span>
                <span>Role: {t.idoWorkflow.hero.role}</span>
                <span>Company: {t.idoWorkflow.hero.company}</span>
              </div>
            </div>

            {/* Popup Body */}
            <div className="p-6 md:p-10">
              <div className="max-w-[680px] mx-auto space-y-10">
              {/* Problem Section */}
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                  {t.idoWorkflow.problem.title}
                </h3>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-4">
                  {t.idoWorkflow.problem.intro}
                </p>
                <ul className="space-y-4">
                  {t.idoWorkflow.problem.items.map((item: { label: string; content: string }, index: number) => (
                    <li key={index} className="text-sm md:text-base text-muted-foreground leading-relaxed">
                      <span className="font-medium text-foreground">{item.label}：</span>
                      {item.content}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Phase 1 */}
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                  {t.idoWorkflow.phase1.title}
                </h3>
                {/* Banner Image */}
                <div className="relative w-full mb-6">
                  <Image
                    src="/otherWork-idoWorkflow(top).png"
                    alt="IDO Workflow"
                    width={850}
                    height={550}
                    className="w-full h-auto object-contain rounded-lg"
                  />
                  <p className="text-[10px] md:text-xs text-muted-foreground/70 text-center mt-3">
                    Figma Component System Overview
                  </p>
                </div>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-4">
                  {t.idoWorkflow.phase1.description}
                </p>
                <div className="space-y-3 text-sm md:text-base text-muted-foreground leading-relaxed">
                  <p><span className="font-medium text-foreground">{t.idoWorkflow.phase1.approach}</span> {t.idoWorkflow.phase1.approachContent}</p>
                  <p><span className="font-medium text-foreground">{t.idoWorkflow.phase1.value}</span> {t.idoWorkflow.phase1.valueContent}</p>
                </div>
              </div>

              {/* Phase 2 */}
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                  {t.idoWorkflow.phase2.title}
                </h3>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-4">
                  {t.idoWorkflow.phase2.description}
                </p>
                <div className="space-y-3 text-sm md:text-base text-muted-foreground leading-relaxed">
                  <p><span className="font-medium text-foreground">{t.idoWorkflow.phase2.approach}</span> {t.idoWorkflow.phase2.approachContent}</p>
                  <p><span className="font-medium text-foreground">{t.idoWorkflow.phase2.value}</span> {t.idoWorkflow.phase2.valueContent}</p>
                </div>
              </div>

              {/* Phase 3 */}
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                  {t.idoWorkflow.phase3.title}
                </h3>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-4">
                  {t.idoWorkflow.phase3.description}
                </p>
                <div className="space-y-3 text-sm md:text-base text-muted-foreground leading-relaxed">
                  <p><span className="font-medium text-foreground">{t.idoWorkflow.phase3.approach}</span> {t.idoWorkflow.phase3.approachContent}</p>
                  <p><span className="font-medium text-foreground">{t.idoWorkflow.phase3.value}</span> {t.idoWorkflow.phase3.valueContent}</p>
                </div>
              </div>

              {/* Impact Section */}
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                  {t.idoWorkflow.impact.title}
                </h3>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  {t.idoWorkflow.impact.content}
                </p>
              </div>

              </div>
            </div>

            {/* Footer Navigation */}
            <div className="md:sticky md:bottom-0 bg-white border-t border-gray-200 px-6 md:px-10 pt-4 pb-20 md:pb-4">
              <div className="max-w-[680px] mx-auto flex justify-between items-center">
                <button
                  onClick={closePopup}
                  className="px-3 py-2 text-sm font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-all"
                >
                  Close
                </button>
                <div className="flex items-center gap-6">
                  <button
                    onClick={goToPrevProject}
                    disabled={isFirstProject}
                    className={`group inline-flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-all ${
                      isFirstProject
                        ? "text-gray-300 cursor-not-allowed"
                        : "text-gray-500 hover:text-gray-900 hover:bg-gray-100"
                    }`}
                  >
                    <svg className={`w-4 h-4 mr-1.5 transition-transform ${!isFirstProject ? "group-hover:-translate-x-1" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    Back
                  </button>
                  <button
                    onClick={goToNextProject}
                    disabled={isLastProject}
                    className={`group inline-flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-all ${
                      isLastProject
                        ? "text-gray-300 cursor-not-allowed"
                        : "text-[#0071e3] hover:bg-blue-50"
                    }`}
                  >
                    Next
                    <svg className={`w-4 h-4 ml-1.5 transition-transform ${!isLastProject ? "group-hover:translate-x-1" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Panko Mascot Popup */}
      {activePopup === "panko-mascot" && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center"
          onClick={closePopup}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

          {/* Popup Content */}
          <div
            ref={popupContentRef}
            className="relative bg-white w-full h-full md:max-w-5xl md:max-h-[90vh] md:rounded-lg md:shadow-2xl overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Popup Header - Sticky */}
            <div className={`sticky top-0 z-10 bg-white text-center border-b border-gray-100 transition-all duration-300 ${isScrolled ? "p-3 px-14 md:p-4 md:px-16" : "p-4 px-14 md:p-10 md:px-16"}`}>
              <button
                onClick={closePopup}
                className="absolute top-3 right-3 md:top-4 md:right-4 w-10 h-10 flex items-center justify-center rounded-full hover:bg-black/10 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <h2 className={`font-bold text-foreground transition-all duration-300 ${isScrolled ? "text-lg md:text-xl mb-1" : "text-2xl md:text-3xl lg:text-4xl mb-2"}`}>
                {t.pankoMascot.title}
              </h2>
              <div className={`flex flex-wrap justify-center gap-x-4 gap-y-1 text-muted-foreground transition-all duration-300 ${isScrolled ? "text-xs" : "text-xs md:text-sm"}`}>
                <span>Year: {t.pankoMascot.hero.duration}</span>
                <span>Role: {t.pankoMascot.hero.role}</span>
                <span>Company: {t.pankoMascot.hero.company}</span>
              </div>
            </div>

            {/* Popup Body */}
            <div className="p-6 md:p-10">
              <div className="max-w-[680px] mx-auto space-y-10">
              {/* Hero Image */}
              <div className="relative w-full">
                <Image
                  src="/otherWork-Panko(top).png"
                  alt="Panko Mascot"
                  width={850}
                  height={550}
                  className="w-full h-auto object-contain rounded-lg"
                />
              </div>

              {/* Overview Section */}
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                  {t.pankoMascot.overview.title}
                </h3>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  {t.pankoMascot.overview.content}
                </p>
              </div>

              {/* Evolution Section */}
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                  {t.pankoMascot.evolution.title}
                </h3>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-4">
                  {t.pankoMascot.evolution.content}
                </p>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-6">
                  {t.pankoMascot.evolution.content2}
                </p>
                <Image
                  src="/otherWork-Panko(Mascot).png"
                  alt="Panko Character Evolution"
                  width={680}
                  height={400}
                  className="w-full h-auto object-contain rounded-lg"
                />
                <p className="text-[10px] md:text-xs text-muted-foreground/70 text-center mt-3">
                  {t.pankoMascot.evolution.caption}
                </p>
              </div>

              {/* Connection Section */}
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                  {t.pankoMascot.connection.title}
                </h3>
                <Image
                  src="/otherWork-Panko(MascotUseCases).png"
                  alt="Panko Mascot Use Cases"
                  width={680}
                  height={400}
                  className="w-full h-auto object-contain rounded-lg"
                />
                <p className="text-[10px] md:text-xs text-muted-foreground/70 text-center mt-3 mb-6">
                Sketches : Swap, Yield Farming, Incentives
                </p>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  {t.pankoMascot.connection.content}
                </p>
              </div>

              </div>
            </div>

            {/* Footer Navigation */}
            <div className="md:sticky md:bottom-0 bg-white border-t border-gray-200 px-6 md:px-10 pt-4 pb-20 md:pb-4">
              <div className="max-w-[680px] mx-auto flex justify-between items-center">
                <button
                  onClick={closePopup}
                  className="px-3 py-2 text-sm font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-all"
                >
                  Close
                </button>
                <div className="flex items-center gap-6">
                  <button
                    onClick={goToPrevProject}
                    disabled={isFirstProject}
                    className={`group inline-flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-all ${
                      isFirstProject
                        ? "text-gray-300 cursor-not-allowed"
                        : "text-gray-500 hover:text-gray-900 hover:bg-gray-100"
                    }`}
                  >
                    <svg className={`w-4 h-4 mr-1.5 transition-transform ${!isFirstProject ? "group-hover:-translate-x-1" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    Back
                  </button>
                  <button
                    onClick={goToNextProject}
                    disabled={isLastProject}
                    className={`group inline-flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-all ${
                      isLastProject
                        ? "text-gray-300 cursor-not-allowed"
                        : "text-[#0071e3] hover:bg-blue-50"
                    }`}
                  >
                    Next
                    <svg className={`w-4 h-4 ml-1.5 transition-transform ${!isLastProject ? "group-hover:translate-x-1" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Face Library Popup */}
      {activePopup === "face-library" && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center"
          onClick={closePopup}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

          {/* Popup Content */}
          <div
            ref={popupContentRef}
            className="relative bg-white w-full h-full md:max-w-5xl md:max-h-[90vh] md:rounded-lg md:shadow-2xl overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Popup Header - Sticky */}
            <div className={`sticky top-0 z-10 bg-white text-center border-b border-gray-100 transition-all duration-300 ${isScrolled ? "p-3 px-14 md:p-4 md:px-16" : "p-4 px-14 md:p-10 md:px-16"}`}>
              <button
                onClick={closePopup}
                className="absolute top-3 right-3 md:top-4 md:right-4 w-10 h-10 flex items-center justify-center rounded-full hover:bg-black/10 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <h2 className={`font-bold text-foreground transition-all duration-300 ${isScrolled ? "text-lg md:text-xl mb-1" : "text-2xl md:text-3xl lg:text-4xl mb-2"}`}>
                {t.faceLibrary.title}
              </h2>
              <div className={`flex flex-wrap justify-center gap-x-4 gap-y-1 text-muted-foreground transition-all duration-300 ${isScrolled ? "text-xs" : "text-xs md:text-sm"}`}>
                <span>Year: {t.faceLibrary.hero.duration}</span>
                <span>Role: {t.faceLibrary.hero.role}</span>
                <span>Company: {t.faceLibrary.hero.company}</span>
                <span>Platforms: {t.faceLibrary.hero.platforms}</span>
              </div>
            </div>

            {/* Popup Body */}
            <div className="p-6 md:p-10">
              <div className="max-w-[680px] mx-auto space-y-10">
                {/* Hero Images - Overlapping */}
                <div className="relative w-full h-[250px] sm:h-[300px] md:h-[400px] mb-10">
                  {/* Main Device Image */}
                  <div className="relative w-[90%] max-w-[700px] mx-auto z-10">
                    <Image
                      src="/portfolio/face-library/SnapshotPopup.png"
                      alt="Face Library Main Interface"
                      width={900}
                      height={560}
                      className="w-full h-auto object-contain shadow-2xl"
                    />
                  </div>
                  {/* Floating Image - Top Right */}
                  <div className="hidden md:block absolute right-[5%] top-0 w-[100px] lg:w-[130px] z-20">
                    <Image
                      src="/portfolio/face-library/ErrorPopup.png"
                      alt="Error Popup"
                      width={160}
                      height={120}
                      className="w-full h-auto object-contain shadow-xl"
                    />
                  </div>
                  {/* Floating Image - Bottom Left */}
                  <div className="hidden sm:block absolute left-0 bottom-0 w-[140px] md:w-[180px] z-30">
                    <Image
                      src="/portfolio/face-library/SnapshotAlert.png"
                      alt="Snapshot Alert"
                      width={250}
                      height={180}
                      className="w-full h-auto object-contain shadow-2xl"
                    />
                  </div>
                  {/* Floating Image - Right Side */}
                  <div className="hidden lg:block absolute right-0 top-[35%] w-[70px] z-20">
                    <Image
                      src="/portfolio/face-library/SystemPopup.png"
                      alt="System Popup"
                      width={100}
                      height={80}
                      className="w-full h-auto object-contain shadow-xl"
                    />
                  </div>
                </div>

                {/* Content Sections */}
                <div className="space-y-12 md:space-y-16">
                  {/* About */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                        {t.faceLibrary.about.title}
                      </h3>
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

                  {/* Flow Map */}
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                      {t.faceLibrary.flowMap.title}
                    </h3>
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-6">
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
                  </div>

                  {/* Event Page */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                        {t.faceLibrary.eventPage.title}
                      </h3>
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

                  {/* Face Management */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
                    <div className="md:order-2">
                      <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                        {t.faceLibrary.faceManagement.title}
                      </h3>
                      <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                        {t.faceLibrary.faceManagement.content}
                      </p>
                    </div>
                    <div className="md:order-1 w-full relative h-[280px] md:h-[320px]">
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

                  {/* Mockup Flow */}
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                      {t.faceLibrary.mockupFlow.title}
                    </h3>
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-6">
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
                  </div>

                </div>
              </div>
            </div>

            {/* Footer Navigation */}
            <div className="md:sticky md:bottom-0 bg-white border-t border-gray-200 px-6 md:px-10 pt-4 pb-20 md:pb-4">
              <div className="max-w-[680px] mx-auto flex justify-between items-center">
                <button
                  onClick={closePopup}
                  className="px-3 py-2 text-sm font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-all"
                >
                  Close
                </button>
                <div className="flex items-center gap-6">
                  <button
                    onClick={goToPrevProject}
                    disabled={isFirstProject}
                    className={`group inline-flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-all ${
                      isFirstProject
                        ? "text-gray-300 cursor-not-allowed"
                        : "text-gray-500 hover:text-gray-900 hover:bg-gray-100"
                    }`}
                  >
                    <svg className={`w-4 h-4 mr-1.5 transition-transform ${!isFirstProject ? "group-hover:-translate-x-1" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    Back
                  </button>
                  <button
                    onClick={goToNextProject}
                    disabled={isLastProject}
                    className={`group inline-flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-all ${
                      isLastProject
                        ? "text-gray-300 cursor-not-allowed"
                        : "text-[#0071e3] hover:bg-blue-50"
                    }`}
                  >
                    Next
                    <svg className={`w-4 h-4 ml-1.5 transition-transform ${!isLastProject ? "group-hover:translate-x-1" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
