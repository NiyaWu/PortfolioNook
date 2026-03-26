"use client"

import { useLanguage } from "@/contexts/language-context"

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="pt-8 md:pt-12 pb-20 md:pb-24 text-center border-t border-gray-200 px-6">
      <p className="text-sm text-muted-foreground leading-loose">
        {t.otherWork.contactLine1Before}
        <a href="https://www.linkedin.com/in/niya-wu-097976182/" target="_blank" rel="noopener noreferrer" className="underline">{t.otherWork.contactLine1Link}</a>
        {t.otherWork.contactLine1After}
        <br className="md:hidden" />
        {" "}
        <a href="mailto:twmniya@gmail.com" className="underline">twmniya@gmail.com</a>
      </p>
    </footer>
  )
}
