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
        className="relative inline-flex items-center bg-gray-200 rounded-full p-1 shadow-lg hover:shadow-xl transition-all duration-300"
        aria-label="Toggle language"
      >
        {/* Sliding Background */}
        <div
          className={`absolute inset-1 w-[calc(50%-4px)] bg-white rounded-full transition-transform duration-300 ease-in-out shadow-sm ${
            locale === "zh" ? "translate-x-full" : "translate-x-0"
          }`}
        />

        {/* Switch Container */}
        <div className="relative flex items-center">
          {/* EN Option */}
          <div
            className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors duration-300 z-10 ${
              locale === "en"
                ? "text-[#0071e3]"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            EN
          </div>

          {/* ZH Option */}
          <div
            className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors duration-300 z-10 ${
              locale === "zh"
                ? "text-[#0071e3]"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            中文
          </div>
        </div>
      </button>
    </div>
  )
}
