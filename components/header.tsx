"use client"
import { useState, useEffect } from "react"
import Link from "next/link"
import { useLanguage } from "@/contexts/language-context"

export function Header() {
  const { t } = useLanguage()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isMobileMenuOpen])

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled || isMobileMenuOpen
            ? "bg-white/70 backdrop-blur-xl shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 py-4 md:py-6">
          <div className="flex items-center justify-between">
            <Link href="/" className="group" onClick={closeMobileMenu}>
              <h1 className="text-xl md:text-2xl font-bold text-foreground tracking-tight hover:text-accent transition-colors duration-300">
                {t.hero.name}
              </h1>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8 lg:gap-12">
              <Link
                href="/#work"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                {t.nav.work}
              </Link>
              <Link
                href="/practices"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                {t.nav.practices}
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

            {/* Mobile Menu Button */}
            <button
              className="md:hidden flex flex-col justify-center items-center w-8 h-8"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <span
                className={`block w-5 h-0.5 bg-foreground transition-all duration-300 ${
                  isMobileMenuOpen ? "rotate-45 translate-y-[7px]" : ""
                }`}
              />
              <span
                className={`block w-5 h-0.5 bg-foreground mt-1.5 transition-all duration-300 ${
                  isMobileMenuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block w-5 h-0.5 bg-foreground mt-1.5 transition-all duration-300 ${
                  isMobileMenuOpen ? "-rotate-45 -translate-y-[7px]" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-white/95 backdrop-blur-xl transition-all duration-300 md:hidden ${
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <nav className="flex flex-col items-center justify-center h-full gap-8">
          <Link
            href="/#work"
            className="text-2xl text-foreground hover:text-accent transition-colors duration-300"
            onClick={closeMobileMenu}
          >
            {t.nav.work}
          </Link>
          <Link
            href="/practices"
            className="text-2xl text-foreground hover:text-accent transition-colors duration-300"
            onClick={closeMobileMenu}
          >
            {t.nav.practices}
          </Link>
          <Link
            href="/about"
            className="text-2xl text-foreground hover:text-accent transition-colors duration-300"
            onClick={closeMobileMenu}
          >
            {t.nav.about}
          </Link>
          <Link
            href="#contact"
            className="text-2xl text-foreground hover:text-accent transition-colors duration-300"
            onClick={closeMobileMenu}
          >
            {t.nav.contact}
          </Link>
        </nav>
      </div>
    </>
  )
}
