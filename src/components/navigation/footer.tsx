import { type FC } from "react";
import { ArrowUp } from "lucide-react";

interface FooterProps {
  onOpenCommission: () => void;
}

export const Footer: FC<FooterProps> = ({ onOpenCommission: _onOpenCommission }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { label: "WORK", href: "#work" },
    { label: "ABOUT", href: "#about" },
    { label: "CAPABILITIES", href: "#capabilities" },
    { label: "EXPERTISE", href: "#expertise" },
    { label: "PROCESS", href: "#process" },
    { label: "BACKGROUND", href: "#background" },
    { label: "CONTACT", href: "#contact" },
  ];

  return (
    <footer
      className="relative z-10 py-16 sm:py-20 px-4 sm:px-8 lg:px-12 bg-[#030406] text-foreground border-t border-white/[0.08]"
      role="contentinfo"
    >
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Top Row: Brand & Quick Links */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10 border-b border-white/[0.06]">
          {/* Brand Monolith */}
          <div className="space-y-2">
            <div className="flex items-center gap-2.5">
              <span className="w-8 h-8 rounded-lg bg-surface-elevated border border-white/15 flex items-center justify-center font-black text-sm tracking-tighter text-foreground">
                SS
              </span>
              <span className="font-display font-extrabold text-lg tracking-wider text-foreground">
                SS STUDIO
              </span>
            </div>
            <div className="text-xs font-mono text-muted-foreground">
              SHYAM SHANMUGAM &middot; CREATIVE DEVELOPER &middot; DIGITAL EXPERIENCES
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap items-center gap-6 sm:gap-8" aria-label="Footer navigation">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs font-mono tracking-widest text-muted-foreground hover:text-accent-cyan transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Bottom Row: Copyright & Back to Top */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-mono text-muted-foreground/60">
          <div>
            &copy; 2026 SS STUDIO &middot; All Rights Reserved &middot; Built with React, Three.js &amp; GSAP
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-2 text-muted-foreground hover:text-accent-cyan transition-colors group cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent-cyan rounded p-1"
            aria-label="Back to top of page"
          >
            <span className="text-[11px] tracking-widest uppercase">BACK TO TOP</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
};
