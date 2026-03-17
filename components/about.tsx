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
            <ul className="list-disc list-inside space-y-1">
              {t.about.description.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Experience Timeline - White Background */}
      <div className="bg-background min-h-screen py-20 md:py-24 lg:py-32 px-6 md:px-12 lg:px-16">
        <div className="max-w-4xl mx-auto">
        <div className="space-y-10">
          {t.about.experiences.map((experience: any, index: number) => (
            <div key={index}>
              {experience.roles ? (
                /* Multi-role experience (e.g. Taiwan Mobile) */
                <div>
                  {/* Company header */}
                  <div className="mb-8 bg-background relative z-10">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                      {experience.company}
                    </h2>
                    <p className="text-sm md:text-base text-muted-foreground font-medium mt-2">
                      {experience.period}
                    </p>
                    <p className="text-sm md:text-base text-muted-foreground">
                      {experience.location}
                    </p>
                  </div>

                  {/* Sub-roles */}
                  <div className="space-y-10">
                    {experience.roles.map((roleItem: any, roleIndex: number) => (
                      <div key={roleIndex} className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-12">
                        {/* Left: Role + Period + Vertical line */}
                        <div className="flex flex-col">
                          <div className="space-y-1 bg-background relative z-10">
                            <h3 className="text-sm md:text-base text-muted-foreground">
                              {roleItem.role}
                            </h3>
                            <p className="text-sm text-muted-foreground">
                              {roleItem.period}
                            </p>
                          </div>
                          {roleIndex < experience.roles.length - 1 && (
                            <div className="w-px flex-1 min-h-[3rem] bg-border mt-3" />
                          )}
                        </div>

                        {/* Right: Description */}
                        <div className="text-sm md:text-base text-muted-foreground leading-relaxed">
                          <ul className="space-y-2">
                            {roleItem.description.map((item: string, i: number) => (
                              <li key={i} className="flex items-baseline gap-3">
                                <span className="w-1 h-1 rounded-full bg-muted-foreground flex-shrink-0 relative top-[-0.15em]"></span>
                                <span>{item.endsWith('.') ? item : `${item}.`}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                /* Single-role experience */
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
                  {/* Left: Title, Date, Role + Vertical line */}
                  <div className="flex flex-col">
                    <div className="space-y-2 bg-background relative z-10">
                      <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                        {experience.company}
                      </h2>
                      <p className="text-sm md:text-base text-muted-foreground font-medium">
                        {experience.period}
                      </p>
                      <p className="text-sm md:text-base text-muted-foreground">
                        {experience.role}
                      </p>
                    </div>
                    {index < t.about.experiences.length - 1 && (
                      <div className="w-px flex-1 min-h-[3rem] bg-border mt-3" />
                    )}
                  </div>

                  {/* Right: Description with bullet points */}
                  <div className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    <ul className="space-y-2">
                      {(Array.isArray(experience.description) ? experience.description : experience.description.split('. ').filter((item: string) => item.trim())).map((item: string, i: number) => (
                        <li key={i} className="flex items-baseline gap-3">
                          <span className="w-1 h-1 rounded-full bg-muted-foreground flex-shrink-0 relative top-[-0.15em]"></span>
                          <span>{item.endsWith('.') ? item : `${item}.`}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        </div>
      </div>
    </section>
  )
}
