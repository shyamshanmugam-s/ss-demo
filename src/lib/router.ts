import { useState, useEffect, useCallback } from "react";

export interface RouteState {
  path: string;
  slug: string | null;
  isCaseStudy: boolean;
}

export function parseRoute(pathname: string = window.location.pathname): RouteState {
  // Normalize pathname
  const cleanPath = pathname.replace(/\/$/, "") || "/";

  // Check for /work/[slug] or /projects/[slug]
  const workMatch = cleanPath.match(/^\/(?:work|projects)\/([a-zA-Z0-9_-]+)/);
  if (workMatch) {
    return {
      path: cleanPath,
      slug: workMatch[1],
      isCaseStudy: true,
    };
  }

  // Check hash fallback e.g. #/work/forge-flow or #work/forge-flow
  if (typeof window !== "undefined" && window.location.hash) {
    const hashMatch = window.location.hash.match(/^#\/?(?:work|projects)\/([a-zA-Z0-9_-]+)/);
    if (hashMatch) {
      return {
        path: `/${hashMatch[0].replace(/^#\/?/, "")}`,
        slug: hashMatch[1],
        isCaseStudy: true,
      };
    }
  }

  return {
    path: "/",
    slug: null,
    isCaseStudy: false,
  };
}

export function useRouter() {
  const [route, setRoute] = useState<RouteState>(() => {
    if (typeof window === "undefined") return { path: "/", slug: null, isCaseStudy: false };
    return parseRoute(window.location.pathname);
  });

  useEffect(() => {
    const handlePopState = () => {
      setRoute(parseRoute(window.location.pathname));
      window.scrollTo({ top: 0, behavior: "instant" });
    };

    const handleHashChange = () => {
      const parsed = parseRoute(window.location.pathname);
      if (parsed.isCaseStudy) {
        setRoute(parsed);
      }
    };

    window.addEventListener("popstate", handlePopState);
    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("popstate", handlePopState);
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  const navigate = useCallback((path: string) => {
    if (typeof window === "undefined") return;

    if (window.location.pathname !== path) {
      window.history.pushState({}, "", path);
      setRoute(parseRoute(path));
      window.scrollTo({ top: 0, behavior: "instant" });
    }
  }, []);

  return {
    ...route,
    navigate,
  };
}
