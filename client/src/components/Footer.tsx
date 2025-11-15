import { SiLinkedin, SiX, SiInstagram } from 'react-icons/si';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="border-t border-border py-16 px-8 relative" style={{ zIndex: 1 }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="font-heading font-bold text-2xl text-primary mb-4" data-testid="text-footer-brand">
              Sirens
            </h3>
            <p className="text-muted-foreground">
              Your one-stop marketing agency for comprehensive brand solutions.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Services', 'Portfolio', 'About', 'Contact'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="text-muted-foreground hover:text-primary transition-colors hover-elevate active-elevate-2 px-2 py-1 rounded-md"
                    data-testid={`link-footer-${item.toLowerCase()}`}
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Services</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>Brand Strategy</li>
              <li>Digital Marketing</li>
              <li>Content Creation</li>
              <li>Web Development</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Connect</h4>
            <div className="flex gap-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-md hover-elevate active-elevate-2 transition-colors"
                aria-label="LinkedIn"
                data-testid="link-linkedin"
              >
                <SiLinkedin className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-md hover-elevate active-elevate-2 transition-colors"
                aria-label="X (Twitter)"
                data-testid="link-x"
              >
                <SiX className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-md hover-elevate active-elevate-2 transition-colors"
                aria-label="Instagram"
                data-testid="link-instagram"
              >
                <SiInstagram className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>&copy; {currentYear} Sirens Marketing Agency. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
