import { gsap } from "@/lib/gsap";

/**
 * Universal helper to check if reduced motion is requested
 */
export function isReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/**
 * Staggered Entrance Reveal using GSAP ScrollTrigger
 */
export function createStaggerReveal(
  elements: gsap.DOMTarget,
  triggerElement: gsap.DOMTarget,
  options: {
    y?: number;
    stagger?: number;
    duration?: number;
    delay?: number;
    start?: string;
  } = {}
) {
  if (isReducedMotion()) {
    gsap.set(elements, { opacity: 1, y: 0 });
    return null;
  }

  const {
    y = 30,
    stagger = 0.08,
    duration = 0.8,
    delay = 0,
    start = "top 85%",
  } = options;

  return gsap.fromTo(
    elements,
    { opacity: 0, y },
    {
      opacity: 1,
      y: 0,
      duration,
      stagger,
      delay,
      ease: "power3.out",
      scrollTrigger: {
        trigger: triggerElement,
        start,
        once: true,
      },
    }
  );
}

/**
 * Magnetic element physics helper for premium buttons/interactive elements
 */
export function attachMagneticPhysics(
  element: HTMLElement,
  options: { strength?: number; textElement?: HTMLElement } = {}
) {
  if (isReducedMotion() || !element) return () => {};

  const { strength = 0.3, textElement } = options;

  const handleMouseMove = (e: MouseEvent) => {
    const rect = element.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);

    gsap.to(element, {
      x: x * strength,
      y: y * strength,
      duration: 0.4,
      ease: "power2.out",
    });

    if (textElement) {
      gsap.to(textElement, {
        x: x * (strength * 0.5),
        y: y * (strength * 0.5),
        duration: 0.4,
        ease: "power2.out",
      });
    }
  };

  const handleMouseLeave = () => {
    gsap.to(element, {
      x: 0,
      y: 0,
      duration: 0.7,
      ease: "elastic.out(1, 0.3)",
    });

    if (textElement) {
      gsap.to(textElement, {
        x: 0,
        y: 0,
        duration: 0.7,
        ease: "elastic.out(1, 0.3)",
      });
    }
  };

  element.addEventListener("mousemove", handleMouseMove);
  element.addEventListener("mouseleave", handleMouseLeave);

  return () => {
    element.removeEventListener("mousemove", handleMouseMove);
    element.removeEventListener("mouseleave", handleMouseLeave);
  };
}

/**
 * Horizontal scroll / pin section orchestrator
 */
export function createHorizontalPinSection(
  wrapper: HTMLElement,
  track: HTMLElement,
  options: { scrub?: number | boolean; pinSpacing?: boolean } = {}
) {
  if (isReducedMotion() || !wrapper || !track) return null;

  const distance = () => track.scrollWidth - window.innerWidth;

  return gsap.to(track, {
    x: () => -distance(),
    ease: "none",
    scrollTrigger: {
      trigger: wrapper,
      start: "top top",
      end: () => `+=${distance()}`,
      pin: true,
      pinSpacing: options.pinSpacing ?? true,
      scrub: options.scrub ?? 1,
      invalidateOnRefresh: true,
    },
  });
}
