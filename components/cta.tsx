"use client"

export function CTA() {
  return (
    <section className="py-20 md:py-32 lg:py-40 px-6 md:px-8 lg:px-12 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 md:mb-8 leading-tight">
          Let's create something amazing
        </h3>

        <p className="text-lg md:text-xl text-muted-foreground mb-10 md:mb-12 leading-relaxed max-w-2xl mx-auto">
          Whether you have a specific project in mind or want to explore possibilities, I'd love to hear from you. Let's
          build something extraordinary together.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center">
          <a
            href="mailto:hello@example.com"
            className="inline-flex items-center justify-center px-8 md:px-10 py-3 md:py-4 rounded-lg font-semibold text-background bg-accent hover:bg-primary transition-all duration-300 hover:shadow-lg hover:scale-105"
          >
            Get in Touch
          </a>

          <a
            href="#portfolio"
            className="inline-flex items-center justify-center px-8 md:px-10 py-3 md:py-4 rounded-lg font-semibold text-foreground border-2 border-foreground hover:bg-foreground/5 transition-all duration-300"
          >
            View Full Portfolio
          </a>
        </div>

        <div className="mt-12 md:mt-16 pt-12 md:pt-16 border-t border-border">
          <p className="text-sm md:text-base text-muted-foreground">
            Or connect with me on{" "}
            <a href="#" className="text-accent hover:text-primary transition-colors duration-300 font-medium">
              LinkedIn
            </a>{" "}
            and{" "}
            <a href="#" className="text-accent hover:text-primary transition-colors duration-300 font-medium">
              Twitter
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
