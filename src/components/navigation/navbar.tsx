import { useState, useEffect, useRef, type FC } from "react";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { attachMagneticPhysics } from "@/animations/motion-primitives";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Menu, X } from "lucide-react";

interface NavbarProps {
  onOpenCommission: () => void;
}

export const Navbar: FC<NavbarProps> = ({ onOpenCommission }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const ctaBtnRef = useRef<HTMLButtonElement>(null);
  const prefersReducedMotion = useReducedMotion();

  // Scroll detection for backdrop styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Magnetic interaction on desktop CTA button
  useEffect(() => {
    if (prefersReducedMotion || !ctaBtnRef.current) return;
    const cleanup = attachMagneticPhysics(ctaBtnRef.current, { strength: 0.25 });
    return cleanup;
  }, [prefersReducedMotion]);

  // Lock body scroll and listen for Escape when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          setMobileMenuOpen(false);
        }
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflow = "";
        window.removeEventListener("keydown", handleKeyDown);
      };
    } else {
      document.body.style.overflow = "";
    }
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: "WORK", href: "#work" },
    { label: "INDUSTRIES", href: "#industries" },
    { label: "SERVICES", href: "#services" },
    { label: "SYSTEMS", href: "#systems" },
    { label: "PROCESS", href: "#process" },
    { label: "WHY SS", href: "#why-ss" },
    { label: "CONTACT", href: "#contact" },
  ];

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Pinned Architectural Minimal Sticky Navbar */}
      <header
        ref={navRef}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 px-4 sm:px-8 ${
          isScrolled ? "py-2 sm:py-2.5" : "py-3.5 sm:py-4.5"
        }`}
        role="banner"
      >
        <div
          className={`max-w-7xl mx-auto flex items-center justify-between transition-all duration-300 rounded-full px-4 sm:px-5 py-2 ${
            isScrolled
              ? "bg-[#0a0c10]/85 backdrop-blur-xl border border-white/[0.1] shadow-[0_12px_40px_rgba(0,0,0,0.6)]"
              : "bg-[#0a0c10]/40 backdrop-blur-sm border border-white/[0.05]"
          }`}
        >
          {/* Brand Monogram & Studio Title */}
          <a
            href="#"
            className="flex items-center gap-2.5 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan rounded-md"
            aria-label="SS STUDIO - Digital Studio"
          >
            <span className="w-7 h-7 rounded-lg bg-surface-elevated border border-white/15 flex items-center justify-center font-black text-xs tracking-tighter text-foreground group-hover:border-accent-cyan/50 group-hover:text-accent-cyan transition-colors">
              SS
            </span>
            <div className="flex flex-col">
              <span className="font-display font-extrabold text-xs tracking-wider text-foreground group-hover:text-accent-cyan transition-colors">
                SS STUDIO
              </span>
              <span className="hidden sm:inline font-mono text-[9px] tracking-widest text-muted-foreground">
                DIGITAL STUDIO
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav
            className="hidden lg:flex items-center gap-6 xl:gap-7"
            role="navigation"
            aria-label="Primary navigation"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                className="text-[11px] xl:text-[12px] font-mono tracking-widest text-muted-foreground hover:text-foreground transition-colors duration-200 relative py-1 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent-cyan rounded"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Header Action & Availability Status */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Availability Status Indicator */}
            <div
              className="hidden xl:flex items-center gap-2 px-3 py-1 rounded-full bg-surface-elevated/70 border border-white/[0.07] text-[10px] font-mono tracking-wider text-muted-foreground select-none"
              title="Studio booking availability"
            >
              <span
                className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"
                aria-hidden="true"
              />
              <span className="text-foreground/90 font-medium">
                AVAILABLE FOR NEW PROJECTS
              </span>
            </div>

            {/* Magnetic Start Project CTA */}
            <div className="hidden sm:block">
              <Button
                ref={ctaBtnRef}
                onClick={onOpenCommission}
                variant="default"
                size="sm"
                className="font-mono text-xs tracking-wider font-semibold gap-1.5 bg-accent-cyan hover:bg-accent-cyan/90 text-void font-bold shadow-[0_0_20px_rgba(0,242,254,0.2)] h-9 px-4"
              >
                <span>START A PROJECT</span>
                <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
              </Button>
            </div>

            {/* Mobile Menu Hamburger */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden flex items-center justify-center w-9 h-9 rounded-full bg-surface-elevated border border-white/10 text-foreground hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan transition-colors cursor-pointer"
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? "Close menu" : "Open navigation menu"}
              data-cursor="MENU"
            >
              {mobileMenuOpen ? (
                <X className="w-4 h-4" />
              ) : (
                <Menu className="w-4 h-4" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Full-Screen Navigation Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-50 bg-[#050608]/95 backdrop-blur-2xl lg:hidden flex flex-col justify-between p-8 pt-24 animate-in fade-in-0 duration-300"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation Menu"
        >
          {/* Top Bar with Close Button */}
          <div className="flex items-center justify-between pb-6 border-b border-white/10">
            <span className="font-display font-extrabold text-sm tracking-wider text-foreground">
              SS STUDIO
            </span>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="w-9 h-9 rounded-full bg-surface-elevated border border-white/10 flex items-center justify-center text-foreground hover:bg-white/10"
              aria-label="Close menu"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Staggered Mobile Links */}
          <nav className="flex flex-col gap-3 my-auto py-4 overflow-y-auto" role="navigation">
            {navLinks.map((link, i) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground hover:text-accent-cyan transition-colors flex items-center justify-between py-2 border-b border-white/5 font-display"
              >
                <span>{link.label}</span>
                <span className="text-xs font-mono text-muted-foreground">
                  0{i + 1}
                </span>
              </a>
            ))}
          </nav>

          {/* Mobile Footer & CTA */}
          <div className="space-y-4 pt-6 border-t border-white/10">
            <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>AVAILABLE FOR NEW PROJECTS</span>
            </div>

            <Button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCommission();
              }}
              variant="default"
              size="lg"
              className="w-full font-mono text-sm tracking-wider font-semibold justify-between h-12 bg-accent-cyan text-void"
            >
              <span>START A PROJECT</span>
              <ArrowUpRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      )}
    </>
  );
};
