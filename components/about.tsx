"use client"

import { useLanguage } from "@/contexts/language-context"

export function About() {
  const { t } = useLanguage()

  return (
    <section id="about">
      {/* About Me Header - Grey Background */}
      <div className="bg-muted/20 py-20 md:py-24 lg:py-32 px-6 md:px-12 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 flex items-center gap-3">
            {t.about.title}
            <span className="text-4xl md:text-5xl">{t.about.emoji}</span>
          </h1>

          <div className="space-y-4 text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl">
            <p>{t.about.intro}</p>
            {t.about.description.map((item, i) => (
              <p key={i}>{item}</p>
            ))}
          </div>
        </div>
      </div>

      {/* Experience Timeline - White Background */}
      <div className="bg-background min-h-screen py-20 md:py-24 lg:py-32 px-6 md:px-12 lg:px-16">
        <div className="max-w-4xl mx-auto">
        {(() => {
          // Flatten experiences: multi-role entries become separate timeline items
          // Only show company name on the first role
          const flatItems: any[] = []
          t.about.experiences.forEach((exp: any) => {
            if (exp.roles) {
              exp.roles.forEach((roleItem: any, roleIndex: number) => {
                flatItems.push({
                  company: roleIndex === 0 ? exp.company : "",
                  period: roleItem.period,
                  role: roleItem.role,
                  location: roleIndex === 0 ? exp.location : undefined,
                  description: roleItem.description,
                })
              })
            } else {
              flatItems.push(exp)
            }
          })

          return (
            <div className="relative">
              {/* Continuous timeline line - desktop only */}
              <div className="hidden md:block absolute top-[1.25rem] bottom-0 w-px" style={{ left: 'calc(50% + 0.1rem - 8px)', background: 'linear-gradient(to bottom, var(--border) 0%, var(--border) 85%, transparent 100%)' }} />

              <div className="space-y-14 md:space-y-20">
                {flatItems.map((item: any, index: number) => (
                  <div key={index} className="relative md:grid md:grid-cols-[1fr_1fr] md:gap-0">
                    {/* Left: Title + Dot together */}
                    <div className="mb-4 md:mb-0">
                      <div className="md:sticky md:top-32 md:flex md:items-start md:justify-end md:gap-6">
                        <div className="md:text-right bg-background">
                          {item.company && (
                            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                              {item.company}
                            </h2>
                          )}
                          <p className={`text-sm md:text-base text-muted-foreground ${item.company ? 'mt-2' : ''}`}>
                            {item.period}
                          </p>
                          {item.location && (
                            <p className="text-sm md:text-base text-muted-foreground">
                              {item.location}
                            </p>
                          )}
                          {item.role && (
                            <p className="text-sm md:text-base text-muted-foreground">
                              {item.role}
                            </p>
                          )}
                        </div>
                        {/* Dot */}
                        <div className="hidden md:flex items-center" style={{ height: item.company ? '2.5rem' : '1.5rem' }}>
                          <div className="w-3 h-3 rounded-full bg-gray-300 z-10" />
                        </div>
                      </div>
                    </div>

                    {/* Right: Description */}
                    <div className="md:pl-12 md:pt-2">
                      <div className="text-sm md:text-base text-muted-foreground leading-relaxed border-l border-border pl-6 md:border-l-0 md:pl-0">
                        <ul className="space-y-2">
                          {(Array.isArray(item.description) ? item.description : item.description.split('. ').filter((d: string) => d.trim())).map((desc: string, i: number) => (
                            <li key={i} className="flex items-baseline gap-3">
                              <span className="w-1 h-1 rounded-full bg-muted-foreground flex-shrink-0 relative top-[-0.15em]"></span>
                              <span>{desc.endsWith('.') ? desc : `${desc}.`}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )
        })()}

        </div>
      </div>
    </section>
  )
}
