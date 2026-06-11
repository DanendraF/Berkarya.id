import { useEffect, useState } from "react";

const LINKS = [
  { label: "Program", href: "#about" },
  { label: "Karya", href: "#karya" },
  { label: "Alur", href: "#how-it-works" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <nav
        aria-label="Primary"
        className={`fixed left-1/2 top-3 z-[100] w-[min(1040px,94vw)] -translate-x-1/2 rounded-2xl transition-all duration-300 ${
          scrolled ? "glass shadow-lg" : "glass-dark"
        }`}
      >
        <div className="flex items-center justify-between px-4 py-2.5 sm:px-5">
          <a
            href="#hero"
            onClick={(e) => handleNav(e, "#hero")}
            className={`flex min-w-0 items-center gap-2 font-extrabold tracking-tight transition hover:opacity-90 ${
              scrolled ? "text-foreground" : "text-cream"
            }`}
          >
            <span
              className="inline-block h-2.5 w-2.5 shrink-0 rounded-full"
              style={{ background: "var(--gold)" }}
            />
            <span className="truncate">
              BERKARYA<span className="text-gradient-gold">.ID</span>
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-2">
            {LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNav(e, link.href)}
                className={`text-sm font-semibold px-4 py-1.5 rounded-full transition-all duration-300 ${
                  scrolled
                    ? "text-foreground/80 hover:text-maroon hover:bg-foreground/5"
                    : "text-cream/80 hover:text-gold hover:bg-cream/10"
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <a
              href="#cta"
              onClick={(e) => handleNav(e, "#cta")}
              className="inline-flex rounded-full px-5 py-1.5 text-sm font-bold text-cream shadow-md transition-all duration-300 hover:scale-[1.04] hover:shadow-[0_4px_15px_oklch(0.42_0.135_22/0.4)] active:scale-95"
              style={{ background: "var(--gradient-maroon)" }}
            >
              Mulai
            </a>

            {/* Mobile Hamburger menu */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`md:hidden flex h-8 w-8 items-center justify-center rounded-lg border transition ${
                scrolled
                  ? "border-foreground/10 text-foreground hover:bg-foreground/5"
                  : "border-cream/10 text-cream hover:bg-cream/5"
              }`}
              aria-label="Toggle Menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="currentColor"
                className="h-4 w-4"
              >
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu dropdown panel */}
        {mobileMenuOpen && (
          <div
            className={`md:hidden px-5 py-4 border-t transition-all ${
              scrolled ? "border-foreground/10" : "border-cream/10"
            }`}
          >
            <div className="flex flex-col gap-2">
              {LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    handleNav(e, link.href);
                    setMobileMenuOpen(false);
                  }}
                  className={`text-sm font-semibold px-4 py-2.5 rounded-xl transition ${
                    scrolled
                      ? "text-foreground/80 hover:text-maroon hover:bg-foreground/5"
                      : "text-cream/80 hover:text-gold hover:bg-cream/5"
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
