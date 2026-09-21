# Gym / Fitness Website Project Inventory

**Project:** VANTA PERFORMANCE  
**Source Directory:** `C:\Users\shyam\Desktop\gym fitness demo`  
**Git Remote:** `https://github.com/shyamshanmugam-s/vanta-performance.git`  
**Inventory Date:** September 21, 2026  
**Auditor:** Antigravity IDE (Independent Quality & Portfolio Audit)  

---

## 1. Project Name
- **Primary Name:** `VANTA PERFORMANCE`
- **Package Name:** `vanta-performance` (v0.0.0, private)
- **Tagline / Sub-Heading:** `Fitness · Performance · Recovery`
- **Studio Concept Marker:** `EST. 2026` / `Project 07 Portfolio Demo`

---

## 2. Industry
- **Primary Industry:** Fitness & Athletic Performance
- **Secondary Domain:** Health, Wellness & Physical Recovery

---

## 3. Sub-Industry
- **Sub-Industry:** High-Performance Athletic Training Studio & Contrast Recovery Sanctuary
- **Focus Areas:** Compound Strength, Biomechanical Movement Quality, Anaerobic Conditioning, and Parasympathetic Restoration (Contrast Hydrotherapy / Infrared Sauna)

---

## 4. Project Type
- **Classification:** Conceptual Digital Experience / Portfolio Showcase Demo
- **Project Role:** Independent industry demonstration designed to showcase modern web architecture, spatial storytelling, interactive program exploration, editorial journal reading, and consultation inquiry funnels for the premium fitness/wellness sector.

---

## 5. Current Live URL
- **Repository Remote:** `https://github.com/shyamshanmugam-s/vanta-performance.git`
- **Live Deployment URL:** Fictional portfolio project demo (deployed on Vercel / local preview via `http://localhost:5173/` or `npm run dev`). *Note: Live Vercel deployment link can be integrated into the SS Studio project data once published.*

---

## 6. Local Project Structure

```text
C:\Users\shyam\Desktop\gym fitness demo/
├── dist/                               # Production build output
├── public/
│   ├── favicon.svg                     # Diamond-rotated titanium glyph
│   ├── icons.svg                       # SVG sprite definitions
│   └── assets/images/                  # 20 high-resolution editorial photography assets
│       ├── hero_vanta_training.jpg     # 290 KB — Athletic training silhouette
│       ├── vanta_training_floor.jpg    # 305 KB — Monolithic training floor
│       ├── vanta_weights.jpg           # 458 KB — Free-weight sector & dumbbells
│       ├── vanta_functional.jpg        # 634 KB — 30m turf sprint corridor
│       ├── vanta_recovery_space.jpg    # 410 KB — Subterranean thermal contrast suite
│       ├── vanta_lounge.jpg            # 316 KB — Smoked timber members lounge
│       ├── vanta_studio_architecture.jpg # 441 KB — 21:9 monolithic architecture
│       ├── vanta_exterior.jpg          # 779 KB — Architectural facade at dusk
│       ├── vanta_material_detail.jpg   # 181 KB — Tactile concrete & steel detail
│       ├── vanta_coaching.jpg          # 191 KB — 1:1 biomechanics review
│       ├── vanta_coach_01.jpg          # 381 KB — Aaron Vale portrait
│       ├── vanta_coach_02.jpg          # 570 KB — Maya Sen portrait
│       ├── vanta_coach_03.jpg          # 867 KB — Leon Park portrait
│       ├── vanta_strength.jpg          # 182 KB — Strength training discipline
│       ├── vanta_performance.jpg       # 444 KB — Athletic power discipline
│       ├── vanta_movement.jpg          # 196 KB — Joint workspace & gymnastics
│       ├── vanta_recovery.jpg          # 146 KB — Contrast hydrotherapy
│       ├── vanta_journal_strength.jpg  # 506 KB — Architecture of Strength essay
│       ├── vanta_journal_recovery.jpg  # 1,012 KB — Recovery & physiology essay
│       └── vanta_journal_movement.jpg  # 198 KB — Movement before intensity essay
├── src/
│   ├── assets/                         # Static icons & hero placeholder
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx              # Sticky glassmorphism header & mobile drawer
│   │   │   ├── Footer.tsx              # Brand manifesto, links, privacy trigger
│   │   │   └── BackToTop.tsx           # Floating smooth scroll-to-top trigger
│   │   ├── sections/
│   │   │   ├── Hero.tsx                # Cinematic hero with dual CTAs & metadata
│   │   │   ├── Philosophy.tsx          # 5 core studio principles & 1:1 stats
│   │   │   ├── Training.tsx            # 4 interactive discipline cards & details
│   │   │   ├── Space.tsx               # 5-zone architectural space explorer
│   │   │   ├── Method.tsx              # 4-stage systematic athletic methodology
│   │   │   ├── Coaching.tsx            # 3-coach roster & philosophies
│   │   │   ├── Recovery.tsx            # Restorative transition & 4 protocols
│   │   │   ├── Journal.tsx             # 3 deep-dive editorial essays
│   │   │   ├── Studio.tsx              # Physical architecture & materials
│   │   │   └── Contact.tsx             # Validated consultation enquiry form
│   │   └── ui/
│   │       ├── ArticleModal.tsx        # Full-screen deep-dive article reader
│   │       ├── PrivacyModal.tsx        # Accessible portfolio privacy notice
│   │       └── RevealImage.tsx         # GSAP ScrollTrigger image reveal wrapper
│   ├── data/
│   │   ├── trainingData.ts             # 4 disciplines & attribute points
│   │   ├── spaceData.ts                # 5 space amenities & dimension specs
│   │   ├── methodData.ts               # 4 method steps & execution points
│   │   ├── coachingData.ts             # 3 coach profiles & focus lists
│   │   ├── journalData.ts              # 3 complete long-form essays & takeaways
│   │   └── studioData.ts               # 4 architectural feature blocks
│   ├── hooks/
│   │   └── useScrollReveal.ts          # GSAP ScrollTrigger reveal hook
│   ├── types/
│   │   └── index.ts                    # TypeScript data models & form interfaces
│   ├── App.css                         # Custom typography & animations
│   ├── App.tsx                         # Main SPA coordinator & modal states
│   ├── index.css                       # Tailwind v4 theme & obsidian styling
│   └── main.tsx                        # React 19 root mount
├── package.json                        # Dependency declarations
├── index.html                          # SEO meta tags & font imports
├── README.md                           # Project overview & disclaimer
├── tsconfig.json                       # TypeScript compiler configuration
└── vite.config.ts                      # Vite 8 build pipeline
```

---

## 7. Main Pages / Routes
- **Architecture:** Single-Page Application (SPA) with deep-linking anchor navigation and headless overlay modals.
- **Anchor Routes:**
  1. `#philosophy` &rarr; Studio Philosophy & Principles
  2. `#training` &rarr; Four Core Training Disciplines
  3. `#performance` &rarr; Performance Space & Architectural Zones
  4. `#method` &rarr; The Systematic Athletic Method
  5. `#coaching` &rarr; Coaching Collective Roster
  6. `#recovery` &rarr; Recovery Sanctuary & Protocols
  7. `#journal` &rarr; Editorial Essays & Research
  8. `#studio` &rarr; Physical Architecture & Material Taxonomy
  9. `#contact` &rarr; Consultation Request & Inquiry Funnel
- **Interactive Modals:**
  1. `ArticleModal`: Full-screen reading overlay with hero image, pull quote, structured subsections, takeaways, and ESC/backdrop dismissals.
  2. `PrivacyModal`: Accessible modal detailing portfolio disclosure and privacy posture.

---

## 8. Homepage Sections Breakdown

| Section # | Component | Title / Headline | Core Content & Purpose |
| :--- | :--- | :--- | :--- |
| **01** | `Hero.tsx` | **TRAIN WITH INTENT.** | Large monumental typography, dual CTAs (*Explore Training*, *Visit Studio*), background image with vignette, discipline metadata strip (*Strength & Power*, *Energy Systems*, *Contrast Therapy*, *Measured Progression*). |
| **02** | `Philosophy.tsx` | **PERFORMANCE IS BUILT IN THE DETAILS.** | 5 core principles (Movement Quality, Foundational Strength, Consistency Over Novelty, Intentional Recovery, Measured Progression), 1:1 coaching intent callouts, and coaching imagery. |
| **03** | `Training.tsx` | **THE TRAINING SYSTEM.** | 4 interactive discipline cards: `01 STRENGTH`, `02 PERFORMANCE`, `03 MOVEMENT`, `04 RECOVERY`. Clicking any card dynamically updates a large detail spotlight with specific program focus attributes. |
| **04** | `Space.tsx` | **ARCHITECTURAL ENVIRONMENT.** | Interactive 5-zone space explorer: *The Main Training Floor (420 SQM)*, *Free Weights & Mechanics (180 SQM)*, *Functional & Sprint Corridor (30M)*, *Recovery & Contrast Suite (220 SQM)*, *Members Lounge & Refuel (140 SQM)*, plus 3 material gallery cards. |
| **05** | `Method.tsx` | **THE SYSTEMATIC METHOD.** | 4 progressive development stages: `01 ASSESS`, `02 BUILD`, `03 PROGRESS`, `04 RECOVER`, with specific motor skill and physiological milestones. |
| **06** | `Coaching.tsx` | **COACHING WITH PRECISION.** | 3 coach profile cards featuring Aaron Vale (*Performance Coach*), Maya Sen (*Movement Coach*), and Leon Park (*Strength Coach*), with portraits, philosophies, and focus areas. |
| **07** | `Recovery.tsx` | **THE RESTORATION SANCTUARY.** | Contrast hydrotherapy highlight, quote banner, and 4 protocol cards: *Thermal Contrast Cycles*, *Parasympathetic Breathwork*, *Soft Tissue Decompression*, *Cellular Sleep Protocols*. |
| **08** | `Journal.tsx` | **EDITORIAL & RESEARCH.** | 3 deep editorial essays: *The Architecture of Strength*, *Why Recovery Changes Training*, *Movement Before Intensity*, with read times and interactive article modal triggers. |
| **09** | `Studio.tsx` | **A SPACE DESIGNED FOR MOVEMENT.** | 21:9 monolithic concrete panorama, 4 architectural features (*Circadian Lighting*, *Tactile Raw Materials*, *Open Training Zones*, *Quiet Recovery Sanctuary*), and dusk facade image. |
| **10** | `Contact.tsx` | **BEGIN THE DIALOGUE.** | Client-side validated consultation request form, operating hours, direct email/phone contact information, and success state. |
| **11** | `Footer.tsx` | **VANTA PERFORMANCE.** | Brand manifesto, category definition, navigation columns, portfolio disclaimer link, copyright, and smooth back-to-top button. |

---

## 9. Main UX Features
1. **Interactive Training Discipline Selector:** Allows instant switching between Strength, Performance, Movement, and Recovery with immediate UI updates.
2. **5-Zone Space Explorer:** Interactive list on the right controls a high-resolution preview and specification panel on the left.
3. **Immersive Article Modal Reader:** Opens long-form essays without page reloads, preserving scroll position and providing a clean editorial typography layout.
4. **Sticky Glassmorphism Header:** Adapts background opacity upon scrolling, featuring an accessible mobile drawer with ESC key support.
5. **Dynamic Form Feedback:** Real-time field error clearance, interactive training interest pills, simulated network dispatch animation, and confirmation screen.
6. **Smooth Scroll-to-Top:** Unobtrusive floating button that smoothly navigates to the top of the page.

---

## 10. Booking / Enquiry Functionality
- **Implementation:** Custom consultation inquiry component in `src/components/sections/Contact.tsx`.
- **Form Fields:**
  1. `contact-name` (Text input, required, minimum 2 characters)
  2. `contact-email` (Email input, required, RFC-compliant regex validation)
  3. `interest` (Grouped button selector: *Strength*, *Performance*, *Movement*, *Recovery*, *General enquiry*)
  4. `contact-message` (Textarea, required, minimum 10 characters)
- **Behavior:**
  - Client-side validation with instant inline error messages.
  - Simulated async submission with spinning state (`1.2s delay`).
  - Full-screen replacement with styled success confirmation card and reset button.
  - No backend CRM is attached in the demo (frontend simulation).

---

## 11. Membership Functionality
- **Model:** Framed as an exclusive, consultation-first private membership and 1-on-1 coaching collective.
- **E-Commerce / Payment Gate:** None present in code. Intentionally designed around private consultation and personalized assessment before onboarding.

---

## 12. Forms Present
- **Total Forms:** 1 (`Contact.tsx` Consultation & Dialogue Form).
- **Validation Rules:**
  - Name: Must not be empty.
  - Email: Must match `/^[^\s@]+@[^\s@]+\.[^\s@]+$/`.
  - Interest: Must select one of 5 valid categories.
  - Message: Must not be empty.

---

## 13. Animations & Motion Architecture
- **Engine:** GSAP 3.15 + ScrollTrigger (`src/hooks/useScrollReveal.ts`).
- **Scroll Triggers:** Attached to image cards via `<RevealImage />` with `y: 18px`, `scale: 1.05 -> 1`, and `opacity: 0 -> 1`.
- **Reduced Motion Support:** Automatic bypass via `window.matchMedia('(prefers-reduced-motion: reduce)')` applying static `gsap.set(el, { opacity: 1, scale: 1, y: 0 })`.
- **CSS Transitions:** Micro-interactions on buttons, hover borders, mobile drawer slide-out, and modal fade/zoom.

---

## 14. 3D / WebGL Features
- **Present in Project:** **None.**
- **Visual Strategy:** Relies entirely on high-contrast architectural photography, dark obsidian canvases, 1px hairline borders, subtle grid overlays, and GSAP scroll motion.

---

## 15. Technology Stack

| Layer | Technology | Version |
| :--- | :--- | :--- |
| **Framework** | React | `19.2.8` |
| **Language** | TypeScript | `~6.0.2` |
| **Bundler** | Vite | `8.3.0` |
| **Styling** | Tailwind CSS (Vite plugin) | `4.3.3` |
| **Motion** | GSAP + ScrollTrigger | `3.15.0` |
| **Icons** | Lucide React | `1.47.0` |
| **Class Utilities** | `clsx` + `tailwind-merge` | `2.1.1` / `3.7.0` |
| **Linter** | Oxlint | `1.81.0` |
| **Typography** | Google Fonts (*Syne*, *Plus Jakarta Sans*, *JetBrains Mono*) | Web Font CDN |

---

## 16. Important Reusable Screenshots & Assets

All assets are located in `public/assets/images/`:

1. **`hero_vanta_training.jpg`** (290 KB) — Atmospheric silhouette on the training floor.
2. **`vanta_training_floor.jpg`** (305 KB) — Main open-span basalt arena with Olympic power racks.
3. **`vanta_weights.jpg`** (458 KB) — Precision dumbbells and dual-cable column towers.
4. **`vanta_functional.jpg`** (634 KB) — 30-meter high-friction turf sprint corridor and gymnastics rings.
5. **`vanta_recovery_space.jpg`** (410 KB) — Subterranean contrast thermal suite, sauna, and plunge pools.
6. **`vanta_lounge.jpg`** (316 KB) — Smoked timber members lounge & espresso bar.
7. **`vanta_studio_architecture.jpg`** (441 KB) — 21:9 monolithic concrete architecture & indirect lighting.
8. **`vanta_exterior.jpg`** (779 KB) — Architectural urban facade at dusk.
9. **`vanta_material_detail.jpg`** (181 KB) — Board-formed concrete & blackened steel macro texture.
10. **`vanta_coaching.jpg`** (191 KB) — Movement mechanics & 1:1 coaching session.
11. **`vanta_coach_01.jpg`** (381 KB) — Aaron Vale portrait (Performance Coach).
12. **`vanta_coach_02.jpg`** (570 KB) — Maya Sen portrait (Movement Coach).
13. **`vanta_coach_03.jpg`** (867 KB) — Leon Park portrait (Strength Coach).
14. **`vanta_strength.jpg`** (182 KB) — Compound barbell force generation.
15. **`vanta_performance.jpg`** (444 KB) — Athletic conditioning & power mechanics.
16. **`vanta_movement.jpg`** (196 KB) — Active mobility & gymnastic ring discipline.
17. **`vanta_recovery.jpg`** (146 KB) — Contrast hydrotherapy & cold water immersion.
18. **`vanta_journal_strength.jpg`** (506 KB) — Kinetic chain force transfer illustration.
19. **`vanta_journal_recovery.jpg`** (1,012 KB) — Parasympathetic down-regulation illustration.
20. **`vanta_journal_movement.jpg`** (198 KB) — Joint workspace & mobility routine illustration.

---

## 17. Best Hero Image for Portfolio
- **Primary Recommendation:** `public/assets/images/hero_vanta_training.jpg` (or `vanta_studio_architecture.jpg`)
- **Visual Rationale:** High-contrast athletic atmosphere, cinematic lighting, and clear representation of the studio's spatial gravity.

---

## 18. Best Project Thumbnail
- **Primary Recommendation:** `public/assets/images/vanta-performance.jpg` (or `vanta_training_floor.jpg`)
- **Visual Rationale:** Immediately communicates athletic rigor, architectural discipline, and premium aesthetic.

---

## 19. 3–5 Additional Screenshots Suitable for a Case Study
1. **`vanta_studio_architecture.jpg`** &rarr; Monolithic concrete architecture & diffused circadian illumination.
2. **`vanta_training_floor.jpg`** &rarr; Main Olympic lifting platforms, acoustic concrete, and modular racks.
3. **`vanta_recovery_space.jpg`** &rarr; Subterranean contrast hydrotherapy suite and cedar Finnish sauna.
4. **`vanta_functional.jpg`** &rarr; 30-meter high-traction athletic turf sprint track and suspension rings.
5. **`vanta_lounge.jpg`** &rarr; Smoked Nordic timber members lounge, consultation nooks, and refuel bar.

---

## 20. Responsive Behavior
- **Desktop (1440px+):** 12-column split layouts, 2x2 / 4-column cards, side-by-side space explorer, horizontal hero metadata.
- **Tablet (768px – 1024px):** 2-column card layouts, stacked space preview and selector list.
- **Mobile (360px – 430px):** Single-column vertical flow, slide-out drawer navigation, 44px+ touch targets, responsive font scales.
- **Horizontal Overflow:** Zero horizontal page overflow (`overflow-x-hidden` on body container).

---

## 21. Accessibility (a11y) Features
- **Semantic Tags:** `<header>`, `<main>`, `<section>`, `<article>`, `<nav>`, `<footer>`, `<fieldset>`, `<legend>`, `<label>`.
- **ARIA Patterns:** `role="dialog"`, `aria-modal="true"`, `aria-labelledby`, `aria-label`, `aria-pressed`, `aria-controls`.
- **Keyboard Navigation:** Full tab order, ESC key listeners on mobile drawer and modals, focus ring states.
- **Body Scroll-Lock:** Prevents background page scrolling while modals are open.
- **Contrast Ratios:** High-contrast white/titanium text on deep obsidian (`#080808` / `#0e0e13`).
- **Motion Accessibility:** `prefers-reduced-motion` detection in GSAP hooks.

---

## 22. SEO Features
- **Title Tag:** `VANTA PERFORMANCE — Fitness · Performance · Recovery`
- **Meta Description:** Clear summary emphasizing strength, movement, recovery, and long-term athletic progression.
- **Open Graph:** `og:type`, `og:title`, `og:description`, `og:image` pointing to `hero_vanta_training.jpg`.
- **Image Optimization:** Explicit `alt` tags and aspect-ratio CSS to prevent layout shift.
- **Headings:** Single `<h1>` in Hero, hierarchical `<h2>` and `<h3>` tags across all sections.

---

## 23. Verified Factual Elements (Present in Codebase)
- Modern React 19 + TypeScript + Vite 8 frontend codebase.
- Tailwind CSS v4 styling architecture with custom titanium and obsidian tokens.
- 10 distinct, functional UI sections.
- 20 high-resolution photography assets with verified dimensions and filenames.
- Client-side validated consultation inquiry form with error feedback and success state.
- Interactive modal essay reader with complete multi-section text.
- Full Git history authored by Shyam Shanmugam (`https://github.com/shyamshanmugam-s/vanta-performance.git`).

---

## 24. Conceptual / Speculative Elements (Design Narrative)
- **Brand Identity:** "VANTA PERFORMANCE" is a conceptual brand concept created for design demonstration.
- **Physical Facility:** "420 SQM Main Training Floor", "180 SQM Free Weights", "220 SQM Recovery Suite", and "140 SQM Lounge" are conceptual architectural layout specifications.
- **Coaching Personnel:** Aaron Vale, Maya Sen, and Leon Park are fictional coach personas.
- **Founding Date & Stats:** "EST. 2026", "1:1 Coaching Intent", "100% Individualized System" are brand positioning copy.
- **Research Essays:** The 3 journal articles represent conceptual thought-leadership content written to showcase digital editorial publishing.

---

## 25. Recommended Portfolio Labeling

### Recommended Label: **`CONCEPT · LIVE`** (or **`CONCEPT`**)

- **Category Description:** `Fitness & Athletic Performance — Concept Experience`
- **Project Type:** `CONCEPT`
- **Status:** `LIVE` (or `DEMO`)
- **Portfolio Tag:** `CONCEPT · LIVE`
- **Honesty Disclosure Statement:**
  > *"Note: This case study presents SS STUDIO's conceptual digital experience and interface architecture created for the high-performance fitness and athletic recovery domain. Studio amenities, training methodologies, and coach profiles reflect conceptual design research."*

---

## 26. Summary & Readiness for SS STUDIO Portfolio

The VANTA PERFORMANCE project is technically complete, aesthetically refined, fully responsive, and immediately suitable for integration into the SS STUDIO portfolio as Project 07 (or an expanded case study). It shares the same high design standards, obsidian color palette, and architectural rigor as the existing SS STUDIO showcase projects.
