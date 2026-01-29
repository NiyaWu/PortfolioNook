"use client"

import { useLanguage } from "@/contexts/language-context"

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="py-8 md:py-12 text-center border-t border-gray-200">
      <p className="text-sm text-muted-foreground">
        {t.otherWork.contact}
      </p>
    </footer>
  )
}
