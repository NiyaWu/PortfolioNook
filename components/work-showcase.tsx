"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import Lottie from "lottie-react"
import { useLanguage } from "@/contexts/language-context"

export function WorkShowcase() {
  const { t } = useLanguage()
  const [animationData, setAnimationData] = useState<Record<string, unknown>>({})

  // Exclude projects that should only appear in Other Work
  const excludedFromHomepage = ["data-visualization", "ido-workflow", "panko-mascot", "face-library"]

  const works = t.work.projects
    .filter((project) => !excludedFromHomepage.includes((project as { id: string }).id))
    .map((project) => ({
      ...project,
      href: (project as { href?: string }).href || "#",
      animation: (project as { animation?: string }).animation,
    }))

  useEffect(() => {
    works.forEach((work) => {
      if (work.animation && !animationData[work.animation]) {
        fetch(work.animation)
          .then((res) => res.json())
          .then((data) => {
            setAnimationData((prev) => ({ ...prev, [work.animation!]: data }))
          })
          .catch(console.error)
      }
    })
  }, [works])

  return (
    <>
      <section id="work" className="bg-white py-24 md:py-32 lg:py-40">
        <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="space-y-24 md:space-y-32 lg:space-y-40">
            {works.map((work, index) => {
              const isEven = index % 2 === 1

              return (
                <div key={work.id}>
                  {/* Desktop Layout - Contained grid */}
                  <div className={`hidden lg:grid lg:grid-cols-12 gap-8 xl:gap-12 items-center`}>
                    {/* Text Side - 5 columns */}
                    <Link
                      href={work.href}
                      className={`col-span-5 flex flex-col justify-center space-y-5 group ${isEven ? 'order-2' : 'order-1'}`}
                    >
                      <div>
                        <h3 className="text-3xl lg:text-4xl xl:text-5xl text-foreground leading-tight">
                          {work.title}
                        </h3>
                        <p className="text-sm mt-1" style={{ color: '#A9A9A9' }}>
                          {work.category}
                        </p>
                        <p className="text-sm lg:text-base text-muted-foreground leading-relaxed mt-4">{work.description}</p>
                      </div>

                      <div className="pt-4 flex items-center font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ color: '#0071e3' }}>
                        {t.work.viewProject}
                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </div>
                    </Link>

                    {/* Image Side - 7 columns */}
                    <div className={`col-span-7 ${isEven ? 'order-1' : 'order-2'} group`}>
                      <div className="relative w-full rounded-lg">
                        {work.animation && animationData[work.animation] ? (
                          <Lottie
                            animationData={animationData[work.animation]}
                            loop={true}
                            className="w-full h-auto transition-transform duration-300 group-hover:scale-105"
                          />
                        ) : (
                          <Image
                            src={work.image || "/placeholder.svg"}
                            alt={work.title}
                            width={1200}
                            height={800}
                            className="w-full h-auto transition-transform duration-300 group-hover:scale-105"
                          />
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Mobile Layout */}
                  <div className="lg:hidden flex flex-col space-y-6">
                    {/* Image */}
                    <div className="w-full rounded-lg group">
                      {work.animation && animationData[work.animation] ? (
                        <Lottie
                          animationData={animationData[work.animation]}
                          loop={true}
                          className="w-full h-auto transition-transform duration-300 group-hover:scale-105"
                        />
                      ) : (
                        <Image
                          src={work.image || "/placeholder.svg"}
                          alt={work.title}
                          width={1200}
                          height={800}
                          className="w-full h-auto transition-transform duration-300 group-hover:scale-105"
                        />
                      )}
                    </div>

                    {/* Text (clickable) */}
                    <Link href={work.href} className="flex flex-col space-y-4 group">
                      <div>
                        <h3 className="text-2xl md:text-3xl text-foreground leading-tight">
                          {work.title}
                        </h3>
                        <p className="text-sm mt-1" style={{ color: '#A9A9A9' }}>
                          {work.category}
                        </p>
                        <p className="text-sm text-muted-foreground leading-relaxed mt-3">{work.description}</p>
                      </div>

                      <div className="pt-2 flex items-center font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ color: '#0071e3' }}>
                        {t.work.viewProject}
                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </div>
                    </Link>
                  </div>
                </div>
              )
            })}
          </div>

          {/* More Projects Button */}
          <div className="flex items-center justify-center pt-24 md:pt-32 lg:pt-40">
            <Link
              href="/other-work"
              className="group relative inline-flex items-center justify-center px-8 py-3 md:px-10 md:py-4 text-white rounded-full transition-all duration-300 hover:opacity-90"
              style={{ backgroundColor: '#0071e3', fontSize: '17px', fontWeight: 400 }}
            >
              {t.work.moreProjects}
              <svg
                className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
