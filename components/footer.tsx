"use client"

import { useLanguage } from "@/contexts/language-context"

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="pt-8 md:pt-12 pb-20 md:pb-24 text-center border-t border-gray-200">
      <p className="text-sm text-muted-foreground">
        {t.otherWork.contact}
      </p>
    </footer>
  )
}
