"use client"

import { useLanguage } from "@/contexts/language-context"

export function LanguageToggle() {
  const { locale, setLocale } = useLanguage()

  const toggleLanguage = () => {
    setLocale(locale === "en" ? "zh" : "en")
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={toggleLanguage}
        className="relative inline-flex items-center bg-background/95 backdrop-blur-sm border-2 border-border rounded-full p-1 shadow-lg hover:shadow-xl transition-all duration-300"
        aria-label="Toggle language"
      >
        {/* Sliding Background */}
        <div
          className={`absolute inset-1 w-[calc(50%-4px)] bg-accent rounded-full transition-transform duration-300 ease-in-out ${
            locale === "zh" ? "translate-x-full" : "translate-x-0"
          }`}
        />

        {/* Switch Container */}
        <div className="relative flex items-center">
          {/* EN Option */}
          <div
            className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors duration-300 z-10 ${
              locale === "en"
                ? "text-accent-foreground"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            EN
          </div>

          {/* ZH Option */}
          <div
            className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors duration-300 z-10 ${
              locale === "zh"
                ? "text-accent-foreground"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            中文
          </div>
        </div>
      </button>
    </div>
  )
}
