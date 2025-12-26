"use client"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-12 md:py-16 lg:py-20 px-6 md:px-8 lg:px-12 bg-muted/50 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-8 md:mb-12">
          <div>
            <h4 className="font-semibold text-foreground mb-4">Navigate</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#work" className="hover:text-foreground transition-colors duration-300">
                  Work
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-foreground transition-colors duration-300">
                  About
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-foreground transition-colors duration-300">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Social</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground transition-colors duration-300">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors duration-300">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors duration-300">
                  GitHub
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Contact</h4>
            <p className="text-sm text-muted-foreground">
              <a href="mailto:hello@example.com" className="hover:text-foreground transition-colors duration-300">
                hello@example.com
              </a>
            </p>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between text-xs md:text-sm text-muted-foreground">
          <p>&copy; {currentYear} Alex Chen. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-foreground transition-colors duration-300">
              Privacy
            </a>
            <a href="#" className="hover:text-foreground transition-colors duration-300">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
