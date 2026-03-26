"use client"
import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { useLanguage } from "@/contexts/language-context"

export function Header() {
  const { t } = useLanguage()
  const pathname = usePathname()
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
              <Image
                src="/logo.svg"
                alt={t.hero.name}
                width={40}
                height={40}
                className="w-8 h-8 md:w-10 md:h-10 hover:opacity-70 transition-opacity duration-300"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8 lg:gap-12">
              <Link
                href="/#work"
                className={`text-sm transition-colors duration-300 ${
                  pathname === "/" ? "text-foreground underline underline-offset-4 decoration-foreground" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {t.nav.work}
              </Link>
              <Link
                href="/practices"
                className={`text-sm transition-colors duration-300 ${
                  pathname === "/practices" ? "text-foreground underline underline-offset-4 decoration-foreground" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {t.nav.practices}
              </Link>
              <Link
                href="/about"
                className={`text-sm transition-colors duration-300 ${
                  pathname === "/about" ? "text-foreground underline underline-offset-4 decoration-foreground" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {t.nav.about}
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
                  isMobileMenuOpen ? "rotate-45 translate-y-[8px]" : ""
                }`}
              />
              <span
                className={`block w-5 h-0.5 bg-foreground mt-1.5 transition-all duration-300 ${
                  isMobileMenuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block w-5 h-0.5 bg-foreground mt-1.5 transition-all duration-300 ${
                  isMobileMenuOpen ? "-rotate-45 -translate-y-[8px]" : ""
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
        <nav className="flex flex-col items-center justify-center h-full gap-12">
          <Link
            href="/#work"
            className={`text-2xl px-12 py-3 transition-colors duration-300 ${
              pathname === "/" ? "text-foreground" : "text-muted-foreground hover:text-foreground"
            }`}
            onClick={closeMobileMenu}
          >
            {t.nav.work}
          </Link>
          <Link
            href="/practices"
            className={`text-2xl px-12 py-3 transition-colors duration-300 ${
              pathname === "/practices" ? "text-foreground" : "text-muted-foreground hover:text-foreground"
            }`}
            onClick={closeMobileMenu}
          >
            {t.nav.practices}
          </Link>
          <Link
            href="/about"
            className={`text-2xl px-12 py-3 transition-colors duration-300 ${
              pathname === "/about" ? "text-foreground" : "text-muted-foreground hover:text-foreground"
            }`}
            onClick={closeMobileMenu}
          >
            {t.nav.about}
          </Link>
        </nav>
      </div>
    </>
  )
}
