import { type FC } from "react";

export const Marquee: FC = () => {
  const items = [
    "DESIGN",
    "DEVELOPMENT",
    "INTERACTION",
    "AI",
    "DIGITAL EXPERIENCES",
    "CUSTOM WEB ARCHITECTURE",
    "THREE.JS & GSAP",
    "SS STUDIO",
  ];

  return (
    <div
      className="relative z-10 py-6 sm:py-8 bg-[#050608] border-y border-white/[0.06] overflow-hidden select-none"
      aria-hidden="true"
    >
      <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
        {/* Double row for seamless loop */}
        {[...items, ...items].map((item, idx) => (
          <div key={idx} className="flex items-center gap-6 sm:gap-10 mx-3 sm:mx-5">
            <span className="font-display font-extrabold text-lg sm:text-2xl md:text-3xl tracking-tight text-white/40 hover:text-accent-cyan transition-colors">
              {item}
            </span>
            <span className="text-accent-cyan/60 font-mono text-sm sm:text-base">&times;</span>
          </div>
        ))}
      </div>
    </div>
  );
};
