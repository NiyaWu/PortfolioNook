import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { WorkShowcase } from "@/components/work-showcase"
import { CTA } from "@/components/cta"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="bg-background">
      <Header />
      <Hero />
      <WorkShowcase />
      <CTA />
      <Footer />
    </main>
  )
}
