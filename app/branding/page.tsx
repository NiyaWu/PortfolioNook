import type { Metadata } from "next"
import { BrandingDetail } from "@/components/branding-detail"
import { Footer } from "@/components/footer"

// Kept out of search engines: this page is shared by link, not browsed to.
export const metadata: Metadata = {
  title: "Branding & Graphic Design",
  robots: { index: false, follow: false },
}

export default function BrandingPage() {
  return (
    <main className="bg-background">
      <BrandingDetail />
      <Footer />
    </main>
  )
}
