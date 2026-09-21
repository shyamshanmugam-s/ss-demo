import { useEffect, useRef, useState, type FC, type ReactNode } from "react";
import * as THREE from "three";
import { SceneLifecycle } from "./scene-manager";

interface ThreeCanvasWrapperProps {
  sceneManager?: SceneLifecycle;
  className?: string;
  cameraFov?: number;
  transparent?: boolean;
  alpha?: boolean;
  powerPreference?: WebGLPowerPreference;
  fallbackContent?: ReactNode;
}

export const ThreeCanvasWrapper: FC<ThreeCanvasWrapperProps> = ({
  sceneManager,
  className = "w-full h-full absolute inset-0 pointer-events-none",
  cameraFov = 45,
  alpha = true,
  powerPreference = "high-performance",
  fallbackContent,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [webGLSupported, setWebGLSupported] = useState(true);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    // Check reduced motion preference
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Safe dimension calculation
    const clientW = container.clientWidth || (typeof window !== "undefined" ? window.innerWidth : 800);
    const clientH = container.clientHeight || (typeof window !== "undefined" ? window.innerHeight : 600);
    const width = Math.max(clientW, 100);
    const height = Math.max(clientH, 100);
    const aspect = width / height;

    // Scene & Camera setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      cameraFov,
      !isNaN(aspect) && aspect > 0 ? aspect : 16 / 9,
      0.1,
      1000
    );
    camera.position.z = 5;

    let renderer: THREE.WebGLRenderer | null = null;

    try {
      renderer = new THREE.WebGLRenderer({
        canvas,
        alpha,
        antialias: typeof window !== "undefined" && (window.devicePixelRatio || 1) <= 1,
        powerPreference,
        preserveDrawingBuffer: false,
      });

      const dpr = Math.min(typeof window !== "undefined" ? window.devicePixelRatio || 1 : 1, 2);
      renderer.setPixelRatio(dpr);
      renderer.setSize(width, height);
      renderer.outputColorSpace = THREE.SRGBColorSpace;
    } catch (e) {
      console.warn("WebGL initialization failed:", e);
      setWebGLSupported(false);
      return;
    }

    if (sceneManager) {
      try {
        sceneManager.init(scene, camera, renderer);
        sceneManager.resize(width, height);
      } catch (err) {
        console.warn("SceneManager init warning:", err);
      }
    }

    let isVisible = true;
    let animationFrameId: number;
    let lastTime = performance.now();

    // Render loop
    const animate = (currentTime: number) => {
      if (!renderer) return;

      if (isVisible) {
        const delta = Math.min((currentTime - lastTime) / 1000, 0.1);
        lastTime = currentTime;

        if (sceneManager && !prefersReducedMotion) {
          try {
            sceneManager.update(currentTime / 1000, delta);
          } catch (e) {
            console.warn("Scene update error:", e);
          }
        }

        try {
          renderer.render(scene, camera);
        } catch (e) {
          console.warn("Render error:", e);
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    // Pause rendering when offscreen
    let observer: IntersectionObserver | null = null;
    if (typeof IntersectionObserver !== "undefined") {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            isVisible = entry.isIntersecting;
          });
        },
        { threshold: 0.05 }
      );
      observer.observe(container);
    }

    // Responsive resize handler
    const handleResize = () => {
      if (!container || !renderer) return;
      const newW = Math.max(container.clientWidth || window.innerWidth || 800, 100);
      const newH = Math.max(container.clientHeight || window.innerHeight || 600, 100);
      const newAspect = newW / newH;

      if (!isNaN(newAspect) && newAspect > 0) {
        camera.aspect = newAspect;
        camera.updateProjectionMatrix();
      }
      renderer.setSize(newW, newH);

      if (sceneManager) {
        sceneManager.resize(newW, newH);
      }
    };

    let resizeObserver: ResizeObserver | null = null;
    if (typeof ResizeObserver !== "undefined") {
      resizeObserver = new ResizeObserver(handleResize);
      resizeObserver.observe(container);
    }

    // Mouse move handler for interactive parallax
    const handlePointerMove = (e: MouseEvent) => {
      if (!sceneManager?.onPointerMove || prefersReducedMotion) return;
      const x = (e.clientX / (window.innerWidth || 1)) * 2 - 1;
      const y = -(e.clientY / (window.innerHeight || 1)) * 2 + 1;
      sceneManager.onPointerMove(x, y);
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });

    // Safe Cleanup: Do NOT remove canvas element from DOM
    return () => {
      cancelAnimationFrame(animationFrameId);
      if (observer) observer.disconnect();
      if (resizeObserver) resizeObserver.disconnect();
      window.removeEventListener("pointermove", handlePointerMove);

      if (sceneManager) {
        try {
          sceneManager.destroy();
        } catch (e) {
          console.warn("Error destroying sceneManager:", e);
        }
      }

      if (renderer) {
        try {
          renderer.dispose();
        } catch (e) {
          console.warn("Error disposing renderer:", e);
        }
        renderer = null;
      }

      // Dispose all scene objects safely
      scene.traverse((obj) => {
        if (obj instanceof THREE.Mesh) {
          obj.geometry?.dispose();
          if (Array.isArray(obj.material)) {
            obj.material.forEach((m) => m.dispose());
          } else if (obj.material) {
            obj.material.dispose();
          }
        }
      });
      scene.clear();
    };
  }, [sceneManager, cameraFov, alpha, powerPreference]);

  if (!webGLSupported) {
    return (
      <div className={className}>
        {fallbackContent || (
          <div className="w-full h-full bg-void opacity-40 flex items-center justify-center text-xs text-muted-foreground">
            SS Architectural Core Active
          </div>
        )}
      </div>
    );
  }

  return (
    <div ref={containerRef} className={className} aria-hidden="true">
      <canvas ref={canvasRef} className="w-full h-full block" />
    </div>
  );
};
