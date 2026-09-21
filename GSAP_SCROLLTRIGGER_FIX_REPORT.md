# GSAP ScrollTrigger Lifecycle & Synchronization Fix Report

**Project:** SS STUDIO — Premium Digital Experiences, AI & Web Systems  
**Date:** September 21, 2026  
**Status:** COMPLETED & VERIFIED  

---

## 1. Executive Summary

A comprehensive architectural fix has been applied to resolve the GSAP ScrollTrigger lifecycle synchronization issue where downstream homepage sections (`#industries`, `#services`, `#systems`, `#process`, `#why-ss`) previously had elements physically present in the DOM but stuck at `opacity: 0`.

The fix eliminates the `gsap.from()` React StrictMode destination-capture trap, establishes `refreshPriority: 10` on Selected Works pinned triggers, migrates the GSAP context hook to `useIsomorphicLayoutEffect`, and integrates a single coordinated `ScrollTrigger.refresh()` after DOM layout and font stabilization.

---

## 2. Files Changed

1. **`src/hooks/use-gsap-context.ts`**
   - Replaced `useEffect` with `useIsomorphicLayoutEffect` (`useLayoutEffect` in browser environments, `useEffect` during SSR).
   - Guarantees that GSAP contexts, tweens, and ScrollTriggers are created before initial browser paint, preventing stale coordinate measurements.

2. **`src/components/work/selected-works.tsx`**
   - Added `refreshPriority: 10` to all 5 pinned `ScrollTrigger.create({ pin: true, pinSpacing: false })` instances, card scrubber animations, and project index tracking triggers.
   - Ensures GSAP prioritizes calculating `.pin-spacer` and stack offsets before downstream triggers calculate their start/end positions during refresh cycles.

3. **`src/animations/lenis-provider.tsx`**
   - Added a single coordinated `ScrollTrigger.refresh()` triggered once post-mount after layout and fonts stabilize.
   - Preserves ticker synchronization, smooth scrolling, and cleanup without repeated or unthrottled refresh calls.

4. **`src/components/sections/capabilities-section.tsx`** (`#services`)
   - Migrated `.service-pillar-card` animation from `gsap.from()` to deterministic `gsap.fromTo()`:
     - Start: `{ opacity: 0, y: 24 }`
     - End: `{ opacity: 1, y: 0, duration: 0.7, stagger: 0.08, ease: "power3.out" }`

5. **`src/components/sections/systems-section.tsx`** (`#systems`)
   - Migrated `.system-card` and `.system-bridge-card` animations from `gsap.from()` to deterministic `gsap.fromTo()`:
     - `.system-card`: `{ opacity: 0, y: 24 }` &rarr; `{ opacity: 1, y: 0, duration: 0.7, stagger: 0.08, ease: "power3.out" }`
     - `.system-bridge-card`: `{ opacity: 0, y: 20 }` &rarr; `{ opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }`

6. **`src/components/sections/industries-section.tsx`** (`#industries`)
   - Migrated `.industry-selector-item` animation from `gsap.from()` to deterministic `gsap.fromTo()`:
     - Start: `{ opacity: 0, y: 18 }`
     - End: `{ opacity: 1, y: 0, duration: 0.6, stagger: 0.05, ease: "power3.out" }`

7. **`src/components/sections/process-section.tsx`** (`#process`)
   - Migrated `.process-selector-btn` animation from `gsap.from()` to deterministic `gsap.fromTo()`:
     - Start: `{ opacity: 0, y: 16 }`
     - End: `{ opacity: 1, y: 0, duration: 0.6, stagger: 0.05, ease: "power3.out" }`

8. **`src/components/sections/why-ss-section.tsx`** (`#why-ss`)
   - Migrated `.why-ss-card` and `.why-ss-micro` animations from `gsap.from()` to deterministic `gsap.fromTo()`:
     - `.why-ss-card`: `{ opacity: 0, y: 24 }` &rarr; `{ opacity: 1, y: 0, duration: 0.7, stagger: 0.08, ease: "power3.out" }`
     - `.why-ss-micro`: `{ opacity: 0, y: 16 }` &rarr; `{ opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }`

9. **`src/components/sections/contact-section.tsx`** (`#contact`)
   - Migrated `.contact-reveal` animation from `gsap.from()` to deterministic `gsap.fromTo()`:
     - Start: `{ opacity: 0, y: 35 }`
     - End: `{ opacity: 1, y: 0, duration: 0.9, stagger: 0.1, ease: "power3.out" }`

10. **`src/components/sections/about-section.tsx`**, **`src/components/sections/background-section.tsx`**, **`src/components/lab/digital-lab.tsx`**
    - Proactively modernized remaining secondary section components to `gsap.fromTo()` to eliminate any lingering `gsap.from()` traps.

---

## 3. Detailed Verification Results

### A. ScrollTrigger & DOM Architecture
- **Total Registered ScrollTriggers:** 26 (0 duplicate / orphaned triggers).
- **Selected Works Pinned Spacers:** 5 `.pin-spacer` containers intact, providing the signature sticky-stack interaction for 6 cards.
- **Refresh Priority:** Selected Works triggers configured with `refreshPriority: 10`.
- **Horizontal Overflow:** `0px` (`scrollWidth === window.innerWidth` across all viewports).

### B. Opacity & Transform Verification (Live Browser via Chrome DevTools MCP)

| Section | Target Elements | Initial State | Final State (On Scroll) | Status |
| :--- | :--- | :--- | :--- | :--- |
| **#industries** | 7 &times; `.industry-selector-item` | `opacity: 0, y: 18px` | `opacity: 1, transform: matrix(1, 0, 0, 1, 0, 0)` | **VERIFIED** |
| **#services** | 4 &times; `.service-pillar-card` | `opacity: 0, y: 24px` | `opacity: 1, transform: matrix(1, 0, 0, 1, 0, 0)` | **VERIFIED** |
| **#systems** | 4 &times; `.system-card`<br>1 &times; `.system-bridge-card` | `opacity: 0, y: 24px`<br>`opacity: 0, y: 20px` | `opacity: 1, transform: matrix(1, 0, 0, 1, 0, 0)` | **VERIFIED** |
| **#process** | 7 &times; `.process-selector-btn` | `opacity: 0, y: 16px` | `opacity: 1, transform: matrix(1, 0, 0, 1, 0, 0)` | **VERIFIED** |
| **#why-ss** | 4 &times; `.why-ss-card`<br>1 &times; `.why-ss-micro` | `opacity: 0, y: 24px`<br>`opacity: 0, y: 16px` | `opacity: 1, transform: matrix(1, 0, 0, 1, 0, 0)` | **VERIFIED** |
| **#contact** | 4 &times; `.contact-reveal` | `opacity: 0, y: 35px` | `opacity: 1, transform: matrix(1, 0, 0, 1, 0, 0)` | **VERIFIED** |

### C. Multi-Viewport Cross-Device Testing

- **1440px (Desktop Large):** `allVisible: true`, 5 pin-spacers active, zero overflow.
- **1280px (Desktop Standard):** `allVisible: true`, 5 pin-spacers active, zero overflow.
- **768px (Tablet):** `allVisible: true`, clean stack layout, zero overflow.
- **414px (Mobile Large):** `allVisible: true`, horizontal tab chip navigation active, zero overflow.
- **390px (Mobile Standard):** `allVisible: true`, responsive chips & cards rendered, zero overflow.
- **360px (Mobile Compact):** `allVisible: true`, responsive chips & cards rendered, zero overflow.

---

## 4. Build & Lint Verification

- **TypeScript Typecheck (`npm run lint` / `tsc --noEmit`):**
  ```text
  > ss-premium-demo@1.0.0 lint
  > tsc --noEmit
  Exit code: 0
  ```
- **Production Build (`npm run build` / `vite build`):**
  ```text
  > ss-premium-demo@1.0.0 build
  > tsc && vite build

  vite v6.4.3 building for production...
  ✓ 1990 modules transformed.
  dist/index.html                   3.59 kB │ gzip:   1.25 kB
  dist/assets/index-Ch_c2rSI.css   60.11 kB │ gzip:  10.49 kB
  dist/assets/gsap-BtPP5_sQ.js     89.20 kB │ gzip:  33.05 kB
  dist/assets/vendor-D3F3s8fL.js  141.72 kB │ gzip:  45.48 kB
  dist/assets/index-BXOpufLE.js   394.71 kB │ gzip: 104.90 kB
  dist/assets/three-BoQY2l10.js   477.28 kB │ gzip: 119.23 kB
  ✓ built in 6.00s
  Exit code: 0
  ```

---

## 5. Remaining Issues

- **None.** All downstream section elements reliably reveal with their designed easing, timing, and staggers upon entering the viewport. The Selected Works sticky sequence functions without interference, and no CSS hacks or forced overrides were used.
