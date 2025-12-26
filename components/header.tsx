"use client"
import Link from "next/link"
import { useLanguage } from "@/contexts/language-context"

export function Header() {
  const { t } = useLanguage()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 py-4 md:py-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="group">
            <h1 className="text-xl md:text-2xl font-bold text-foreground tracking-tight hover:text-accent transition-colors duration-300">
              {t.hero.name}
            </h1>
          </Link>

          <nav className="hidden md:flex items-center gap-8 lg:gap-12">
            <Link
              href="/#work"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              {t.nav.work}
            </Link>
            <Link
              href="/about"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              {t.nav.about}
            </Link>
            <Link
              href="#contact"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              {t.nav.contact}
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}
