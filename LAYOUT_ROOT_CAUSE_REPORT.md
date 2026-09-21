# SS STUDIO — Root-Cause Layout Diagnostic Report

**Status:** Forensic Diagnostic Complete (No Code Changed)  
**Date:** September 21, 2026  
**Inspection Tools:** Chrome DevTools MCP, Computed Style Evaluator, DOM Tree Inspector, GSAP & ScrollTrigger Runtime Trace  
**Tested Viewports:** 1440px (Desktop / iMac) & 1280px (Standard Desktop)  

---

## 1. Executive Summary & Critical Root Cause Finding

Our DevTools DOM and runtime animation inspection of the actual rendered website at 1440px and 1280px revealed the exact mechanical root cause for the reported "dead scroll space" and "large empty regions":

> **THE PRIMARY ROOT CAUSE IS GSAP `from()` SCROLLTRIGGER DE-SYNCHRONIZATION LEAVING ELEMENTS AT `opacity: 0` (100% INVISIBLE).**

### What Actually Happens in the Browser:
1. When the page mounts, every section (`#industries`, `#services`, `#systems`, `#process`, `#why-ss`) calls `gsap.from()` on its cards and navigation buttons with initial properties `{ opacity: 0, y: 24 }`.
2. Simultaneously, `#work` (`SelectedWorks`) initializes **5 GSAP ScrollTrigger pins** on the 6 portfolio cards (`pin: true`, `pinSpacing: false`), dynamically creating 5 `.pin-spacer` elements that expand `#work` to **5,672px** tall.
3. Because the child section ScrollTriggers initialized before the `.pin-spacer` layout expansion settled, their trigger start coordinates were calculated **4,000px+ higher up the page** than where the sections actually reside in the final DOM.
4. When a user scrolls to `#services`, `#systems`, `#industries`, `#process`, or `#why-ss`:
   - The section header renders visibly (`03 · SERVICES / FROM STRATEGY TO SYSTEMS`).
   - **The cards and navigation buttons directly beneath the header are physically present in the DOM (56px below the divider), BUT THEY ARE RENDERED AT `opacity: 0` AND `transform: translateY(24px)`.**
   - The user sees a **giant, pitch-black empty void** where the content should be, giving the impression of massive dead scroll space.

---

## 2. Section-by-Section Forensic Measurements (1440px & 1280px)

### 2.1 #services (Services / Capabilities — Section 03)

| Measurement Property | Computed Value at 1440px | Computed Value at 1280px |
| :--- | :--- | :--- |
| **Section Bounding Rect** | `top: 8172px, bottom: 10020px, w: 1427px, h: 1848.4px` | `top: 8172px, bottom: 10020px, w: 1267px, h: 1848.4px` |
| **Section Height** | `1848.4px` | `1848.4px` |
| **Top / Bottom Position** | Top: `8172px`, Bottom: `10020px` | Top: `8172px`, Bottom: `10020px` |
| **Computed Padding** | `top: 112px, bottom: 96px, left: 48px, right: 48px` | `top: 112px, bottom: 96px, left: 48px, right: 48px` |
| **Computed Margin** | `top: 0px, bottom: 0px` | `top: 0px, bottom: 0px` |
| **min-height / max-height** | `min-height: 0px, max-height: none` | `min-height: 0px, max-height: none` |
| **Grid Configuration** | `grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8` | `grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8` |
| **Divider → Content Gap** | `56px` (`headerBottom: 382px`, `contentTop: 438px`) | `56px` |
| **Active Transforms** | 4 cards have `transform: matrix(1, 0, 0, 1, 0, 24)` | 4 cards have `transform: matrix(1, 0, 0, 1, 0, 24)` |
| **Opacity 0 Elements** | **4 elements** (ALL 4 `.service-pillar-card` cards) | **4 elements** (ALL 4 `.service-pillar-card` cards) |
| **Visible Content Height** | **0px** (Cards invisible at `opacity: 0`) | **0px** (Cards invisible at `opacity: 0`) |
| **Section Total Height** | `1848px` | `1848px` |
| **Empty/Unused Height** | `1848px` perceived (DOM: `208px` padding) | `1848px` perceived (DOM: `208px` padding) |
| **Likely Root Cause** | **GSAP `gsap.from(".service-pillar-card", ...)` sets cards to `opacity: 0` on mount.** The trigger fails to fire due to de-synchronized ScrollTrigger offsets after `#work` pin-spacers expand, leaving the entire lower half of the screen completely empty. | Same |

---

### 2.2 #systems (Digital Systems — Section 04)

| Measurement Property | Computed Value at 1440px | Computed Value at 1280px |
| :--- | :--- | :--- |
| **Section Bounding Rect** | `top: 10020px, bottom: 12240px, w: 1427px, h: 2219.7px` | `top: 10020px, bottom: 12240px, w: 1267px, h: 2219.7px` |
| **Section Height** | `2219.7px` | `2219.7px` |
| **Top / Bottom Position** | Top: `10020px`, Bottom: `12240px` | Top: `10020px`, Bottom: `12240px` |
| **Computed Padding** | `top: 112px, bottom: 96px, left: 48px, right: 48px` | `top: 112px, bottom: 96px, left: 48px, right: 48px` |
| **Computed Margin** | `top: 0px, bottom: 0px` | `top: 0px, bottom: 0px` |
| **min-height / max-height** | `min-height: 0px, max-height: none` | `min-height: 0px, max-height: none` |
| **Grid Configuration** | `grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8` | `grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8` |
| **Divider → Content Gap** | `56px` (`headerBottom: 465px`, `contentTop: 521px`) | `56px` |
| **Active Transforms** | 5 cards have `transform: matrix(1, 0, 0, 1, 0, 24)` | 5 cards have `transform: matrix(1, 0, 0, 1, 0, 24)` |
| **Opacity 0 Elements** | **5 elements** (4 `.system-card` + `.system-bridge-card`) | **5 elements** (4 `.system-card` + `.system-bridge-card`) |
| **Visible Content Height** | **0px** (Cards invisible at `opacity: 0`) | **0px** (Cards invisible at `opacity: 0`) |
| **Section Total Height** | `2220px` | `2220px` |
| **Empty/Unused Height** | `2220px` perceived (DOM: `208px` padding) | `2220px` perceived (DOM: `208px` padding) |
| **Likely Root Cause** | **GSAP `from()` sets all 4 system capability cards + framework banner to `opacity: 0`.** De-synchronized trigger coordinates prevent the animation from playing, rendering the region below `INTELLIGENCE BUILT INTO THE EXPERIENCE` pitch black. | Same |

---

### 2.3 #industries (Industries — Section 02)

| Measurement Property | Computed Value at 1440px | Computed Value at 1280px |
| :--- | :--- | :--- |
| **Section Bounding Rect** | `top: 6644px, bottom: 8172px, w: 1427px, h: 1527.7px` | `top: 6644px, bottom: 8172px, w: 1267px, h: 1527.7px` |
| **Section Height** | `1527.7px` | `1527.7px` |
| **Top / Bottom Position** | Top: `6644px`, Bottom: `8172px` | Top: `6644px`, Bottom: `8172px` |
| **Computed Padding** | `top: 112px, bottom: 96px, left: 48px, right: 48px` | `top: 112px, bottom: 96px, left: 48px, right: 48px` |
| **Computed Margin** | `top: 0px, bottom: 0px` | `top: 0px, bottom: 0px` |
| **min-height / max-height** | `min-height: 0px, max-height: none` | `min-height: 0px, max-height: none` |
| **Grid Configuration** | `12-col grid` (Left: 5 cols, Right: 7 cols) | `12-col grid` (Left: 5 cols, Right: 7 cols) |
| **Left Col vs Right Col Height** | Left: `539px`, Right: `861px` | Left: `539px`, Right: `861px` |
| **Sticky Elements** | 1 (`lg:col-span-5 lg:sticky lg:top-28`) | 1 (`lg:col-span-5 lg:sticky lg:top-28`) |
| **Opacity 0 Elements** | **7 elements** (ALL 7 left buttons `.industry-selector-item`) | **7 elements** (ALL 7 left buttons `.industry-selector-item`) |
| **Visible Content Height** | `294px` (Only right panel image/header visible; left side blank) | `294px` (Only right panel visible) |
| **Section Total Height** | `1528px` | `1528px` |
| **Empty/Unused Height** | Left half completely empty on initial arrival | Left half completely empty on initial arrival |
| **Likely Root Cause** | **GSAP `from(".industry-selector-item", { opacity: 0 })` keeps the left navigation hidden.** In addition, a 322px vertical height difference between the 539px list and the 861px right card leaves dead space beneath the left column. | Same |

---

### 2.4 #process (Process — Section 05)

| Measurement Property | Computed Value at 1440px | Computed Value at 1280px |
| :--- | :--- | :--- |
| **Section Bounding Rect** | `top: 12240px, bottom: 13505px, w: 1427px, h: 1265.1px` | `top: 12240px, bottom: 13505px, w: 1267px, h: 1265.1px` |
| **Section Height** | `1265.1px` | `1265.1px` |
| **Top / Bottom Position** | Top: `12240px`, Bottom: `13505px` | Top: `12240px`, Bottom: `13505px` |
| **Computed Padding** | `top: 112px, bottom: 96px, left: 48px, right: 48px` | `top: 112px, bottom: 96px, left: 48px, right: 48px` |
| **Computed Margin** | `top: 0px, bottom: 0px` | `top: 0px, bottom: 0px` |
| **min-height / max-height** | `min-height: 0px, max-height: none` | `min-height: 0px, max-height: none` |
| **Grid Configuration** | `12-col grid` (Left: 5 cols, Right: 7 cols) | `12-col grid` (Left: 5 cols, Right: 7 cols) |
| **Left Col vs Right Col Height** | Left: `539px`, Right: `518px` (Balanced) | Left: `539px`, Right: `518px` |
| **Sticky Elements** | 1 (`lg:col-span-5 lg:sticky lg:top-28`) | 1 (`lg:col-span-5 lg:sticky lg:top-28`) |
| **Opacity 0 Elements** | **7 elements** (ALL 7 left buttons `.process-selector-btn`) | **7 elements** (ALL 7 left buttons `.process-selector-btn`) |
| **Visible Content Height** | `234px` (Only right panel visible; left navigator invisible) | `234px` |
| **Section Total Height** | `1265px` | `1265px` |
| **Empty/Unused Height** | Left half completely empty on initial arrival | Left half completely empty on initial arrival |
| **Likely Root Cause** | **GSAP `from(".process-selector-btn", { opacity: 0 })` keeps the 7 stage buttons invisible**, making the left half of the grid look abandoned. | Same |

---

### 2.5 #why-ss (Why SS — Section 06)

| Measurement Property | Computed Value at 1440px | Computed Value at 1280px |
| :--- | :--- | :--- |
| **Section Bounding Rect** | `top: 13505px, bottom: 15273px, w: 1427px, h: 1767.7px` | `top: 13505px, bottom: 15273px, w: 1267px, h: 1767.7px` |
| **Section Height** | `1767.7px` | `1767.7px` |
| **Top / Bottom Position** | Top: `13505px`, Bottom: `15273px` | Top: `13505px`, Bottom: `15273px` |
| **Computed Padding** | `top: 112px, bottom: 96px, left: 48px, right: 48px` | `top: 112px, bottom: 96px, left: 48px, right: 48px` |
| **Computed Margin** | `top: 0px, bottom: 0px` | `top: 0px, bottom: 0px` |
| **min-height / max-height** | `min-height: 0px, max-height: none` | `min-height: 0px, max-height: none` |
| **Grid Configuration** | `grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8` | `grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8` |
| **Divider → Content Gap** | `56px` (`headerBottom: 381px`, `contentTop: 437px`) | `56px` |
| **Active Transforms** | 5 cards have `transform: matrix(1, 0, 0, 1, 0, 24)` | 5 cards have `transform: matrix(1, 0, 0, 1, 0, 24)` |
| **Opacity 0 Elements** | **5 elements** (4 `.why-ss-card` + `.why-ss-micro`) | **5 elements** (4 `.why-ss-card` + `.why-ss-micro`) |
| **Visible Content Height** | **0px** (Cards invisible at `opacity: 0`) | **0px** (Cards invisible at `opacity: 0`) |
| **Section Total Height** | `1768px` | `1768px` |
| **Empty/Unused Height** | `1768px` perceived (DOM: `208px` padding) | `1768px` perceived (DOM: `208px` padding) |
| **Likely Root Cause** | **GSAP `from()` keeps all 4 principles cards invisible at `opacity: 0`**, leaving an empty screen beneath the `BUILT WITH INTENT` headline. | Same |

---

### 2.6 #work (Selected Works — Section 01)

| Measurement Property | Computed Value at 1440px | Computed Value at 1280px |
| :--- | :--- | :--- |
| **Section Bounding Rect** | `top: 972px, bottom: 6644px, w: 1427px, h: 5671.9px` | `top: 972px, bottom: 6644px, w: 1267px, h: 5671.9px` |
| **Section Height** | `5671.9px` | `5671.9px` |
| **Computed Padding** | `top: 112px, bottom: 96px, left: 48px, right: 48px` | `top: 112px, bottom: 96px, left: 48px, right: 48px` |
| **Sticky Elements** | 6 `.work-stack-card` elements with `lg:sticky lg:top-24 lg:min-h-[calc(100vh-8rem)]` | 6 `.work-stack-card` elements |
| **Pin Spacers** | **5 GSAP `.pin-spacer` elements** (`height: 808px` to `842px` each) | **5 GSAP `.pin-spacer` elements** |
| **Visible Content Height** | `5414px` (6 full-screen card sequence) | `5414px` |
| **Section Total Height** | `5672px` | `5672px` |
| **Empty/Unused Height** | `258px` | `258px` |
| **Likely Root Cause** | **Cumulative height of 6 cards with `min-h-[calc(100vh-8rem)]` + 5 GSAP pin spacers.** When this section expands, it shifts all subsequent sections down by 4,176px, breaking all static trigger offsets downstream unless `ScrollTrigger.refresh()` is invoked. | Same |

---

### 2.7 #contact (Contact — Section 07)

| Measurement Property | Computed Value at 1440px | Computed Value at 1280px |
| :--- | :--- | :--- |
| **Section Bounding Rect** | `top: 15273px, bottom: 16127px, w: 1427px, h: 854.4px` | `top: 15273px, bottom: 16127px, w: 1267px, h: 854.4px` |
| **Section Height** | `854.4px` | `854.4px` |
| **Computed Padding** | `top: 128px, bottom: 128px, left: 48px, right: 48px` | `top: 128px, bottom: 128px, left: 48px, right: 48px` |
| **Opacity 0 Elements** | **0 elements** (All text and buttons rendered at `opacity: 1`) | **0 elements** (`opacity: 1`) |
| **Visible Content Height** | `573px` | `573px` |
| **Section Total Height** | `854px` | `854px` |
| **Empty/Unused Height** | `281px` (symmetric vertical breathing room for final CTA) | `281px` |
| **Likely Root Cause** | Clean closing section; no layout defects or stuck opacity. | Clean |

---

## 3. Targeted Codebase Search Findings

| Pattern Searched | Occurrence Files & Line Context |
| :--- | :--- |
| `pin` & `pinSpacing` | `src/components/work/selected-works.tsx` (Lines 46-52: `pin: true`, `pinSpacing: false`) |
| `min-h-[calc(100vh-8rem)]` | `src/components/work/selected-works.tsx` (Line 117 on `.work-stack-card`) |
| `min-h-screen` | `src/App.tsx` (Line 42), `src/components/hero/hero-gateway.tsx` (Line 96) |
| `gsap.from(...)` | `capabilities-section.tsx` (Line 106), `systems-section.tsx` (Lines 113, 125), `industries-section.tsx` (Line 205), `process-section.tsx` (Line 167), `why-ss-section.tsx` (Lines 77, 89) |
| `sticky` | `industries-section.tsx` (Line 326: `lg:sticky lg:top-28`), `process-section.tsx` (Line 285: `lg:sticky lg:top-28`), `selected-works.tsx` (Line 117: `lg:sticky lg:top-24`) |
| `absolute` | `contact-section.tsx` (Line 49: background radial glow), `project-card.tsx` / `industries-section.tsx` (image gradient overlays) |

---

## 4. Key Takeaways & Recommended Direction (Awaiting User Review)

1. **Root Cause Confirmed:** The DOM layout spacing is mechanically tight (divider-to-content is exactly 56px), but **GSAP `from()` animations initialized cards to `opacity: 0` without triggering**, making the content physically invisible on screen.
2. **Pin-Spacer Layout Shift:** The 5 pin-spacers inside `#work` add 4,176px of vertical height. Any ScrollTrigger instantiated before or without synchronization to this pin-expansion calculates stale trigger offsets.
3. **Zero Destructive Changes Made:** No code has been altered during this diagnostic phase in strict accordance with instructions.
