import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { WorkShowcase } from "@/components/work-showcase"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="bg-white">
      <Header />
      <Hero />
      <WorkShowcase />
      <Footer />
    </main>
  )
}
