import { useEffect, useLayoutEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

/**
 * useGSAPContext: Safely wraps GSAP animations in a gsap.context()
 * with automatic scoping and memory cleanup on unmount.
 * Uses useIsomorphicLayoutEffect so triggers and styles are registered
 * before browser paint.
 */
export function useGSAPContext(
  animationCallback: (context: gsap.Context) => void,
  scopeRef?: React.RefObject<HTMLElement | null>,
  deps: React.DependencyList = []
) {
  const ctxRef = useRef<gsap.Context | null>(null);

  useIsomorphicLayoutEffect(() => {
    const scope = scopeRef?.current || undefined;
    const ctx = gsap.context((self) => {
      animationCallback(self);
    }, scope);

    ctxRef.current = ctx;

    return () => {
      ctx.revert();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return ctxRef;
}

