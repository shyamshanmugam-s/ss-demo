import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

/**
 * useGSAPContext: Safely wraps GSAP animations in a gsap.context()
 * with automatic scoping and memory cleanup on unmount.
 */
export function useGSAPContext(
  animationCallback: (context: gsap.Context) => void,
  scopeRef?: React.RefObject<HTMLElement | null>,
  deps: React.DependencyList = []
) {
  const ctxRef = useRef<gsap.Context | null>(null);

  useEffect(() => {
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
