import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register core plugins safely
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);

  // Global cinematic easing & performance configuration
  gsap.defaults({
    ease: "power3.out",
    duration: 0.8,
  });

  // Lag smoothing prevents massive jumps on tab reactivation
  gsap.ticker.lagSmoothing(1000, 16);
}

export { gsap, ScrollTrigger };
