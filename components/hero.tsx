"use client"

import { useEffect, useState } from "react"
import { useLanguage } from "@/contexts/language-context"

export function Hero() {
  const [isVisible, setIsVisible] = useState(false)
  const { t } = useLanguage()

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 md:px-8 lg:px-12 overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="ripple-effect absolute" />
        <div className="ripple-effect absolute" />
        <div className="ripple-effect absolute" />
        <div className="ripple-effect absolute" />
        <div className="ripple-effect absolute" />
      </div>

      <div
        className={`w-full max-w-3xl text-center transition-all duration-1000 relative z-10 ${isVisible ? "opacity-100" : "opacity-0"}`}
      >
        {/* Title */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-8 md:mb-12 leading-tight tracking-tight">
          {t.hero.name}
        </h1>

        {/* Description */}
        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-12 md:mb-16">
          {t.hero.description}
        </p>

        {/* Scroll indicator */}
        <div className="animate-bounce">
          <svg className="w-6 h-6 text-muted-foreground mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  )
}
