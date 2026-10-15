"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { useLanguage } from "@/contexts/language-context"
import { Header } from "@/components/header"
import { ProjectOverview } from "@/components/project-overview"
import { RichText } from "@/components/rich-text"
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

type SiteMapSubsection = {
  title: string
  content: string
  image?: string
  imageCaption?: string
  items?: { label: string; description: string }[]
  matrixLabels?: {
    user: string
    scenario: string
    page: string
  }
  roleMatrix?: {
    user: string
    scenario: string
    pages: string[]
    source: string
  }[]
  roleMappingTitle?: string
  roleMappingIntro?: string
  architectureTitle?: string
  architectureHint?: string
  architectureImage?: string
  pageGroupsTitle?: string
  pageGroups?: {
    title: string
    description: string
    pages: string[]
    users: string[]
  }[]
  roleScreensTitle?: string
  roleScreensIntro?: string
  roleScreens?: {
    role: string
    page: string
    outcome: string
    image?: string
    placeholder?: string
  }[]
}

const roleIllustrations = [
  {
    default: "/portfolio/ivar/role-guard.png",
    active: "/portfolio/ivar/role-guard-active.png",
  },
  {
    default: "/portfolio/ivar/role-admin.png",
    active: "/portfolio/ivar/role-admin-active.png",
  },
  {
    default: "/portfolio/ivar/role-operations.png",
    active: "/portfolio/ivar/role-operations-active.png",
  },
]

const roleToneTokens = [
  {
    badge: "bg-sky-100 text-sky-700 dark:bg-sky-950/40 dark:text-sky-300",
    accent: "bg-sky-300",
    text: "text-sky-700 dark:text-sky-300",
  },
  {
    badge: "bg-violet-100 text-violet-700 dark:bg-violet-950/40 dark:text-violet-300",
    accent: "bg-violet-300",
    text: "text-violet-700 dark:text-violet-300",
  },
  {
    badge: "bg-emerald-100 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300",
    accent: "bg-emerald-300",
    text: "text-emerald-700 dark:text-emerald-300",
  },
]

function getRoleToneIndex(role: string) {
  const normalizedRole = role.toLowerCase()

  if (normalizedRole.includes("guard") || role.includes("警衛")) return 0
  if (normalizedRole.includes("administrator") || role.includes("系統管理員")) return 1
  return 2
}

export function IvarRedesignDetail() {
  const { t } = useLanguage()
  const [showSidebar, setShowSidebar] = useState(false)
  const [activeSection, setActiveSection] = useState("discovery")
  const [activeRoleScreen, setActiveRoleScreen] = useState(0)

  const sections = [
    { id: "discovery", label: t.ivarRedesign.sections.discovery },
    { id: "siteMap", label: t.ivarRedesign.sections.siteMap },
    { id: "systemStatus", label: t.ivarRedesign.sections.systemStatus },
    { id: "designSystem", label: t.ivarRedesign.sections.designSystem },
    { id: "collaboration", label: t.ivarRedesign.sections.collaboration },
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
      <div className="flex items-center justify-center px-4 pb-4 pt-20 md:px-8 md:pb-12 md:pt-28 lg:px-12">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="mb-4 text-[28px] font-bold leading-tight text-foreground md:mb-6 md:text-5xl lg:text-7xl">
            {t.ivarRedesign.title}
          </h1>

          <p className="mx-auto mb-6 max-w-3xl text-xs leading-relaxed text-muted-foreground md:text-sm">
            {t.ivarRedesign.subtitle}
          </p>

          <div className="mb-6 grid grid-cols-2 gap-x-4 gap-y-2 text-left text-xs leading-tight text-muted-foreground md:mb-10 md:flex md:flex-wrap md:justify-center md:gap-x-8 md:gap-y-1 md:text-sm">
            <div>
              <span className="font-medium">{t.ivarRedesign.metaLabels.year}: </span>
              {t.ivarRedesign.hero.duration}
            </div>
            <div>
              <span className="font-medium">{t.ivarRedesign.metaLabels.role}: </span>
              {t.ivarRedesign.hero.role}
            </div>
            <div>
              <span className="font-medium">{t.ivarRedesign.metaLabels.company}: </span>
              {t.ivarRedesign.hero.company}
            </div>
            <div>
              <span className="font-medium">{t.ivarRedesign.metaLabels.platforms}: </span>
              {t.ivarRedesign.hero.platforms}
            </div>
          </div>
          <div className="w-full rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/portfolio/ivar/top-banner-1.png"
              alt="IVAR Main Interface"
              width={1200}
              height={750}
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-4 py-8 md:px-8 md:py-20 lg:px-12 lg:py-24">
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
          <main className="min-w-0 flex-1 max-w-[840px]">
            <ProjectOverview
              title={t.ivarRedesign.projectOverview.title}
              items={[
                t.ivarRedesign.projectOverview.overview,
                t.ivarRedesign.projectOverview.timeline,
                t.ivarRedesign.projectOverview.coreTasks,
                t.ivarRedesign.projectOverview.painPoints,
              ]}
            />

            {/* Content Sections */}
            <div className="space-y-16 md:space-y-24 lg:space-y-32">
              {/* Discovery */}
              <section id="discovery">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4 md:mb-6">
                  {t.ivarRedesign.discovery.title}
                </h2>
                <div className="space-y-12">
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold text-foreground mb-3 md:mb-4">
                      {t.ivarRedesign.discovery.subsections[0].title}
                    </h3>
                    <RichText className="text-sm md:text-base text-muted-foreground leading-relaxed mb-6">
                      {t.ivarRedesign.discovery.subsections[0].content}
                    </RichText>
                    <div className="overflow-hidden">
                      <Image
                        src="/portfolio/ivar/background-story-final.png"
                        alt={t.ivarRedesign.discovery.subsections[0].title}
                        width={2630}
                        height={906}
                        className="w-full h-auto object-contain"
                      />
                    </div>
                    <div className="mt-3 grid grid-cols-3 gap-3 text-center">
                      {t.ivarRedesign.discovery.comicCaptions.map((caption: string, index: number) => (
                        <p key={caption} className="text-[10px] leading-relaxed text-muted-foreground/70 md:text-xs">
                          <span className="mr-1 font-semibold text-primary">0{index + 1}</span>
                          {caption}
                        </p>
                      ))}
                    </div>
                  </div>

                </div>
              </section>

              {/* Site Map & User Flow */}
              <section id="siteMap">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-6 md:mb-8">
                  {t.ivarRedesign.siteMap.title}
                </h2>
                <div className="space-y-12">
                  {[
                    t.ivarRedesign.siteMap.subsections[0],
                    t.ivarRedesign.siteMap.subsections[1],
                    t.ivarRedesign.siteMap.subsections[2],
                  ].map((subsection: SiteMapSubsection, index: number) => (
                    <div key={index}>
                      {subsection.roleMatrix && subsection.matrixLabels ? (
                        <div>
                          <h3 className="text-lg md:text-xl font-semibold text-foreground mb-3 md:mb-4">
                            {subsection.title}
                          </h3>
                          <p className="max-w-4xl text-sm md:text-base text-muted-foreground leading-relaxed mb-6">
                            {subsection.content}
                          </p>

                          {subsection.architectureImage && subsection.architectureTitle && subsection.architectureHint && (
                            <div className="mb-8">
                              <h4 className="mb-3 text-base font-semibold text-foreground">
                                {subsection.architectureTitle}
                              </h4>

                              <Dialog>
                                <DialogTrigger asChild>
                                  <button
                                    type="button"
                                    suppressHydrationWarning
                                    className="group block w-full cursor-zoom-in overflow-hidden rounded-xl bg-[#f0f1f1] text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                                    aria-label={subsection.architectureHint}
                                  >
                                    <Image
                                      src={subsection.architectureImage}
                                      alt={subsection.architectureTitle}
                                      width={3762}
                                      height={1606}
                                      className="h-auto w-full transition-transform duration-300 group-hover:scale-[1.01]"
                                    />
                                  </button>
                                </DialogTrigger>
                                <DialogContent className="w-[1400px] max-w-[96vw] overflow-hidden p-3 sm:max-w-[96vw]">
                                  <DialogTitle className="sr-only">
                                    {subsection.architectureTitle}
                                  </DialogTitle>
                                  <DialogDescription className="sr-only">
                                    {subsection.architectureHint}
                                  </DialogDescription>
                                  <div className="flex w-full max-h-[86vh] items-start overflow-auto rounded-md bg-[#f0f1f1]">
                                    <div className="w-full min-w-[1400px] shrink-0">
                                      <Image
                                        src={subsection.architectureImage}
                                        alt={subsection.architectureTitle}
                                        width={3762}
                                        height={1606}
                                        className="h-auto w-full max-w-none"
                                      />
                                    </div>
                                  </div>
                                </DialogContent>
                              </Dialog>
                              <p className="mt-3 text-center text-[10px] text-muted-foreground/70 md:text-xs">
                                {subsection.architectureHint}
                              </p>
                            </div>
                          )}

                          {subsection.roleMappingTitle && subsection.roleMappingIntro && (
                            <div className="mb-4 max-w-4xl">
                              <h4 className="mb-1.5 text-base font-semibold text-foreground">
                                {subsection.roleMappingTitle}
                              </h4>
                              <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
                                {subsection.roleMappingIntro}
                              </p>
                            </div>
                          )}

                          <div className="overflow-hidden rounded-xl border border-border/70 bg-white">
                            <div className="hidden sm:grid sm:grid-cols-[0.72fr_2.9fr] gap-4 bg-muted/55 px-4 py-2.5 text-[11px] font-medium text-muted-foreground">
                              <span>{subsection.matrixLabels.user}</span>
                              <span>{subsection.matrixLabels.scenario} · {subsection.matrixLabels.page}</span>
                            </div>

                            <div className="divide-y divide-border/70">
                              {subsection.roleMatrix.map((row) => {
                                const roleTone = roleToneTokens[getRoleToneIndex(row.user)]

                                return (
                                  <div
                                    key={row.user}
                                    className="grid grid-cols-1 gap-3 px-4 py-4 sm:grid-cols-[0.72fr_2.9fr] sm:items-start sm:gap-4"
                                  >
                                    <div>
                                      <span className={`inline-flex rounded-full px-2.5 py-1 text-xs font-semibold ${roleTone.badge}`}>
                                        {row.user}
                                      </span>
                                    </div>

                                    <div>
                                      <p className="text-sm leading-snug text-foreground/80">
                                        {row.scenario}
                                      </p>
                                      <div className="mt-2 flex flex-wrap items-center gap-1.5">
                                        {row.pages.map((page) => (
                                          <span key={page} className="rounded border border-border bg-muted/35 px-2 py-0.5 text-[11px] font-medium text-foreground">
                                            {page}
                                          </span>
                                        ))}
                                        <span className="text-[10px] text-muted-foreground/65">
                                          {row.source}
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                )
                              })}
                            </div>
                          </div>

                          <div className="flex flex-col">
                          {subsection.roleScreens && subsection.roleScreensTitle && subsection.roleScreensIntro && (
                            <div className="order-2 mt-8">
                              <h4 className="text-base font-semibold text-foreground">
                                {subsection.roleScreensTitle}
                              </h4>
                              <p className="mt-1 text-xs leading-relaxed text-muted-foreground md:text-sm">
                                {subsection.roleScreensIntro}
                              </p>

                              <div
                                className="mt-5 grid w-full min-w-0 grid-cols-3 border-b border-border/70 md:hidden"
                                role="tablist"
                                aria-label={subsection.roleScreensTitle}
                              >
                                {subsection.roleScreens.map((screen, screenIndex) => (
                                  <button
                                    key={screen.role}
                                    type="button"
                                    role="tab"
                                    aria-selected={activeRoleScreen === screenIndex}
                                    onClick={() => setActiveRoleScreen(screenIndex)}
                                    className={`relative min-w-0 rounded-t-lg border border-b-0 px-2 py-2.5 text-left text-xs font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${
                                      activeRoleScreen === screenIndex
                                        ? "z-10 border-border/70 bg-white text-foreground"
                                        : "border-border/40 bg-muted/30 text-muted-foreground hover:bg-muted/60 hover:text-foreground"
                                    }`}
                                  >
                                    <span className={`absolute inset-x-0 top-0 h-1 rounded-t-lg ${roleToneTokens[screenIndex].accent}`} aria-hidden="true" />
                                    <span className="block truncate">{screen.role}</span>
                                    <span className="mt-1 block truncate text-[10px] font-normal text-muted-foreground">
                                      {screen.page}
                                    </span>
                                  </button>
                                ))}
                              </div>

                              <div className="w-full min-w-0 md:mt-5">
                                <div className="hidden items-end gap-1 md:flex" role="tablist" aria-label={subsection.roleScreensTitle}>
                                  {subsection.roleScreens.map((screen, screenIndex) => (
                                    <button
                                      key={screen.role}
                                      type="button"
                                      role="tab"
                                      aria-selected={activeRoleScreen === screenIndex}
                                      onClick={() => setActiveRoleScreen(screenIndex)}
                                      className={`relative min-w-0 flex-1 rounded-t-xl border border-b-0 px-5 pb-3 pt-4 text-left transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${
                                        activeRoleScreen === screenIndex
                                          ? "z-10 border-border/70 bg-white text-foreground"
                                          : "border-border/40 bg-muted/30 text-muted-foreground hover:bg-muted/60 hover:text-foreground"
                                      }`}
                                    >
                                      <span
                                        className={`absolute inset-x-0 top-0 h-1 rounded-t-xl ${roleToneTokens[screenIndex].accent}`}
                                        aria-hidden="true"
                                      />
                                      <p className="text-xs font-semibold">{screen.role}</p>
                                      <p className="mt-1 truncate text-[11px] leading-snug text-muted-foreground">{screen.page}</p>
                                      {activeRoleScreen === screenIndex && (
                                        <span className="absolute inset-x-0 -bottom-1 h-2 bg-white" aria-hidden="true" />
                                      )}
                                    </button>
                                  ))}
                                </div>

                                <div className="relative -mt-px min-w-0 overflow-hidden rounded-b-xl border border-t-0 border-border/70 bg-white p-3 md:rounded-b-2xl md:rounded-tr-2xl md:border md:border-border/70 md:p-4">
                                  {subsection.roleScreens.map((screen, screenIndex) => (
                                    activeRoleScreen === screenIndex && (
                                      <article key={screen.role} role="tabpanel">
                                      <div className="md:grid md:grid-cols-[180px_minmax(0,1fr)] md:items-start md:gap-5">
                                        <div className="hidden md:block">
                                          <div className="relative h-36 w-full bg-white px-2 pt-2">
                                            <Image
                                              src={roleIllustrations[screenIndex].active}
                                              alt=""
                                              fill
                                              className="object-contain object-center"
                                              sizes="180px"
                                            />
                                          </div>
                                          <div className="px-3 pb-3 pt-4">
                                            <p className="text-base font-semibold text-foreground">{screen.role}</p>
                                            <p className={`mt-1 text-xs font-medium ${roleToneTokens[screenIndex].text}`}>{screen.page}</p>
                                            <p className="mt-3 text-xs leading-relaxed text-muted-foreground">{screen.outcome}</p>
                                          </div>
                                        </div>

                                        <div>
                                          <div className="mb-3 flex flex-col gap-1.5 sm:flex-row sm:items-end sm:justify-between md:hidden">
                                            <p className="text-sm font-semibold text-foreground">{screen.page}</p>
                                            <p className="max-w-xl text-xs leading-relaxed text-muted-foreground sm:text-right">
                                              {screen.outcome}
                                            </p>
                                          </div>

                                          <div className="relative mx-auto aspect-[1577/1107] w-full overflow-hidden bg-muted/30">
                                            {screen.image ? (
                                              <Image
                                                src={screen.image}
                                                alt={`${screen.role} — ${screen.page}`}
                                                fill
                                                className="object-contain"
                                                sizes="(max-width: 767px) 100vw, 760px"
                                              />
                                            ) : (
                                              <div className="absolute inset-0 flex items-center justify-center border border-dashed border-border text-center">
                                                <div className="px-6">
                                                  <p className="text-sm font-medium text-foreground/70">{screen.page}</p>
                                                  <p className="mt-1 text-xs text-muted-foreground">{screen.placeholder}</p>
                                                </div>
                                              </div>
                                            )}
                                          </div>
                                        </div>
                                      </div>
                                      </article>
                                    )
                                  ))}
                                </div>
                              </div>
                            </div>
                          )}

                          {subsection.pageGroups && subsection.pageGroupsTitle && (
                            <div className="order-1 mt-7 md:mt-8">
                              <h4 className="mb-3 text-base font-semibold text-foreground md:mb-4">
                                {subsection.pageGroupsTitle}
                              </h4>
                              <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                                {subsection.pageGroups.map((group) => {
                                  return (
                                    <div
                                      key={group.title}
                                      className="rounded-xl border border-border/70 bg-white p-4"
                                    >
                                      <div className="min-w-0">
                                        <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
                                          <h5 className="text-sm font-semibold text-foreground">
                                            {group.title}
                                          </h5>
                                          <div className="flex flex-wrap gap-1">
                                            {group.users.map((user) => {
                                              const roleTone = roleToneTokens[getRoleToneIndex(user)]

                                              return (
                                                <span key={user} className={`rounded-full px-2 py-0.5 text-[10px] font-medium ${roleTone.badge}`}>
                                                  {user}
                                                </span>
                                              )
                                            })}
                                          </div>
                                        </div>
                                        <p className="mb-2 text-xs leading-relaxed text-muted-foreground lg:mb-3 lg:text-sm">
                                          {group.description}
                                        </p>
                                        <p className="text-[10px] leading-relaxed text-foreground/65 lg:hidden">
                                          {group.pages.join(" · ")}
                                        </p>
                                        <div className="hidden flex-wrap gap-1.5 lg:flex">
                                          {group.pages.map((page) => (
                                            <span key={page} className="rounded border border-border/70 bg-background/75 px-2 py-1 text-[10px] font-medium text-foreground/80">
                                              {page}
                                            </span>
                                          ))}
                                        </div>
                                      </div>
                                    </div>
                                  )
                                })}
                              </div>
                            </div>
                          )}
                          </div>

                        </div>
                      ) : subsection.image ? (
                        // First subsection with full-width image below
                        <div>
                          <h3 className="text-lg md:text-xl font-semibold text-foreground mb-3 md:mb-4">
                            {subsection.title}
                          </h3>
                          <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-6">
                            {subsection.content}
                          </p>
                          <div className="w-full rounded-lg p-4 overflow-hidden" style={{ backgroundColor: '#f0f1f1' }}>
                            <Image
                              src={subsection.image}
                              alt={subsection.title}
                              width={1200}
                              height={600}
                              className="w-full h-auto object-contain"
                            />
                          </div>
                          {subsection.imageCaption && (
                            <p className="text-[10px] md:text-xs text-muted-foreground/70 text-center mt-3">
                              {subsection.imageCaption}
                            </p>
                          )}
                        </div>
                      ) : subsection.items ? (
                        <div>
                          <h3 className="text-lg md:text-xl font-semibold text-foreground mb-3 md:mb-4">
                            {subsection.title}
                          </h3>
                          <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-6">
                            {subsection.content}
                          </p>
                          <div className="w-full overflow-hidden rounded-lg">
                            <Image
                              src="/portfolio/ivar/IVAR-in.gif"
                              alt="Initialization"
                              width={1200}
                              height={800}
                              className="h-auto w-full object-contain"
                              unoptimized
                            />
                          </div>
                          <div className="mt-3 grid grid-cols-2 gap-2 md:grid-cols-4">
                            {subsection.items.map((item, itemIndex) => (
                              <div key={item.label} className="px-1 py-2 text-left">
                                <p className="mb-1 text-[10px] font-semibold text-primary">0{itemIndex + 1}</p>
                                <p className="text-xs font-medium leading-snug text-foreground">{item.label}</p>
                                {item.description && (
                                  <p className="mt-1 text-[10px] leading-relaxed text-muted-foreground md:text-[11px]">
                                    {item.description}
                                  </p>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>
                      ) : (
                        // Other subsections with side-by-side layout
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-center">
                          <div>
                            <h3 className="text-lg md:text-xl font-semibold text-foreground mb-3 md:mb-4">
                              {subsection.title}
                            </h3>
                            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                              {subsection.content}
                            </p>
                          </div>
                          <div className="w-full rounded-lg overflow-hidden">
                            <Image
                              src="/portfolio/ivar/sideMenu1.png"
                              alt="Side Menu"
                              width={600}
                              height={300}
                              className="w-full h-auto object-contain rounded-lg"
                            />
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </section>

              {/* System Status */}
              <section id="systemStatus">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-6 md:mb-8">
                  {t.ivarRedesign.systemStatus.title}
                </h2>
                <div>
                  <h3 className="text-lg md:text-xl font-semibold text-foreground mb-3 md:mb-4">
                    {t.ivarRedesign.systemStatus.subsections[0].title}
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-6">
                    {t.ivarRedesign.systemStatus.subsections[0].content}
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
                </div>
              </section>

              {/* Design System */}
              <section id="designSystem">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-6 md:mb-8">
                  {t.ivarRedesign.designSystem.title}
                </h2>
                <div className="mb-8">
                  <h3 className="text-lg md:text-xl font-semibold text-foreground mb-3 md:mb-4">
                    {t.ivarRedesign.designSystem.subtitle}
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-4">
                    {t.ivarRedesign.designSystem.intro}
                  </p>
                  <ul className="space-y-3">
                    {t.ivarRedesign.designSystem.items?.map((item: { label: string; description: string }, index: number) => (
                      <li key={index} className="text-sm md:text-base text-muted-foreground leading-relaxed pl-4">
                        <span className="font-medium text-foreground">{item.label}：</span>
                        {item.description}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="w-full rounded-lg p-4 space-y-4" style={{ backgroundColor: '#f0f1f1' }}>
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
              <section id="collaboration">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4 md:mb-6 lg:mb-8">
                  {t.ivarRedesign.flowFile.title}
                </h2>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-8">
                  {t.ivarRedesign.flowFile.content}
                </p>
                <div className="w-full rounded-lg overflow-hidden">
                  <Image
                    src="/portfolio/ivar/Flow.png"
                    alt="Flow Design"
                    width={1200}
                    height={600}
                    className="w-full h-auto object-contain"
                  />
                </div>
              </section>

            </div>
          </main>
        </div>
      </div>
    </div>
  )
}
