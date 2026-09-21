/**
 * SS — CASE STUDY DRAWER & PROJECT INQUIRY MODAL
 * Manages the slide-over blueprint dossier and streamlined contact modal
 */

class DrawerAndModal {
  constructor() {
    this.caseStudies = {
      'aether': {
        title: 'AETHER AI',
        subtitle: 'Conceptual Enterprise Neural HUD',
        category: 'SPECULATIVE SHOWCASE // AI INTERFACE',
        year: '2026',
        image: 'assets/images/aether-ai.jpg',
        overview: 'A conceptual enterprise interface engineered to explore real-time telemetry rendering, GPU-driven synaptic node networks, and high-contrast obsidian glassmorphism.',
        stack: ['WebGL / Three.js', 'Custom Node Shaders', 'Canvas 2D', 'Modular CSS', 'Vanilla JavaScript'],
        deliverables: ['Spatial UI Design System', 'Neural Network Graph Shader', 'Live Telemetry HUD Layout', 'GPU Compositor Pipeline'],
        challenge: 'Demonstrating how complex dense data visualization can maintain aesthetic elegance and 60FPS fluidity on dark luxury interfaces.',
        solution: 'Used instanced buffer geometry for node connections with GLSL vertex shaders, ensuring zero main-thread layout recalculations.'
      },
      'kronos': {
        title: 'KRONOS HOROLOGY',
        subtitle: 'Conceptual Haute Horlogerie 3D Boutique',
        category: 'SPECULATIVE SHOWCASE // LUXURY COMMERCE',
        year: '2026',
        image: 'assets/images/kronos-watch.jpg',
        overview: 'A conceptual 3D luxury timepiece boutique demonstrating real-time openwork mechanical tourbillon manipulation with realistic titanium reflections and micro-mechanical exploded view.',
        stack: ['Three.js PBR', 'GLSL Materials', 'Post-Processing', 'Lenis Smooth Scroll', 'CSS Custom Properties'],
        deliverables: ['Interactive 3D Watch Configurator', 'Exploded Mechanical View Prototype', 'Custom Ambient Lighting Pipeline', 'Touch-Safe Mobile Controls'],
        challenge: 'Achieving photorealistic metallic reflections and depth without prohibitive texture download footprints.',
        solution: 'Implemented procedural environment maps with custom roughness/metalness shader calculations.'
      },
      'neura': {
        title: 'NEURA SPATIAL',
        subtitle: 'Conceptual Spatial Computing & BCI Interface',
        category: 'SPECULATIVE SHOWCASE // SPATIAL WEB',
        year: '2026',
        image: 'assets/images/neura-spatial.jpg',
        overview: 'A speculative spatial computing OS concept exploring how brain-computer interface telemetry, biometric waveforms, and holographic window management can live inside modern browsers.',
        stack: ['Three.js', 'CSS 3D Transforms', 'Biometric Waveform Canvas', 'Vanilla ES6+'],
        deliverables: ['Volumetric Window Manager Prototype', 'Waveform Synthesizer UI', 'Spatial Gesture Simulation', 'Dark Atmospheric Layout'],
        challenge: 'Simulating translucent floating holographic depth without degrading mobile battery efficiency.',
        solution: 'Combined hardware-accelerated CSS 3D perspective transforms with lightweight WebGL background refraction layers.'
      },
      'valence': {
        title: 'VALENCE ATELIER',
        subtitle: 'Conceptual Monolithic Architectural Monograph',
        category: 'SPECULATIVE SHOWCASE // EDITORIAL FLAGSHIP',
        year: '2026',
        image: 'assets/images/valence-arch.jpg',
        overview: 'An editorial monograph prototype exploring brutalist form, raw materiality, and spatial silence with asymmetrical grid layouts, multi-axis scroll parallax, and masked image transitions.',
        stack: ['IntersectionObserver', 'Modern CSS Grid', 'Custom Easing Curves', 'Semantic HTML5'],
        deliverables: ['Editorial Grid System', 'Parallax Image Reveal Masks', 'Monolithic Typography Scale', 'High-Efficiency Asset Loading'],
        challenge: 'Delivering full-bleed imagery and magazine-grade typographic choreography with zero layout shifts.',
        solution: 'Enforced strict CSS aspect-ratio containment and progressive intersection observers.'
      }
    };

    this.initCaseStudyDrawer();
    this.initContactModal();
    this.initEmailCopy();
  }

  /* ------------------------------------------------------------------------
     1. CASE STUDY SLIDE-OVER DRAWER
     ------------------------------------------------------------------------ */
  initCaseStudyDrawer() {
    const drawerBackdrop = document.getElementById('case-study-drawer');
    const closeBtn = document.getElementById('drawer-close-btn');
    const workCards = document.querySelectorAll('[data-case-study]');

    if (!drawerBackdrop) return;

    const openDrawer = (slug) => {
      const data = this.caseStudies[slug];
      if (!data) return;

      const titleEl = document.getElementById('drawer-title');
      const catEl = document.getElementById('drawer-category');
      const descEl = document.getElementById('drawer-desc');
      const imgEl = document.getElementById('drawer-image');
      const stackEl = document.getElementById('drawer-stack');
      const challengeEl = document.getElementById('drawer-challenge');
      const solutionEl = document.getElementById('drawer-solution');
      const deliverablesEl = document.getElementById('drawer-deliverables');

      if (titleEl) titleEl.textContent = data.title;
      if (catEl) catEl.textContent = `${data.category} // ${data.year}`;
      if (descEl) descEl.textContent = data.overview;
      if (imgEl) {
        imgEl.src = data.image;
        imgEl.alt = `${data.title} Visual Showcase`;
      }
      if (challengeEl) challengeEl.textContent = data.challenge;
      if (solutionEl) solutionEl.textContent = data.solution;

      if (stackEl) {
        stackEl.innerHTML = data.stack.map(s => `<span class="tech-badge">${s}</span>`).join('');
      }

      if (deliverablesEl) {
        deliverablesEl.innerHTML = data.deliverables.map(d => `<li style="display:flex;align-items:center;gap:0.5rem;margin-bottom:0.4rem;font-size:var(--text-sm);"><span style="color:var(--accent-cyan)">◆</span> ${d}</li>`).join('');
      }

      drawerBackdrop.classList.add('active');
      document.body.style.overflow = 'hidden';
    };

    const closeDrawer = () => {
      drawerBackdrop.classList.remove('active');
      document.body.style.overflow = '';
    };

    workCards.forEach(card => {
      card.addEventListener('click', () => {
        const slug = card.getAttribute('data-case-study');
        openDrawer(slug);
      });
    });

    if (closeBtn) closeBtn.addEventListener('click', closeDrawer);

    drawerBackdrop.addEventListener('click', (e) => {
      if (e.target === drawerBackdrop) closeDrawer();
    });

    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && drawerBackdrop.classList.contains('active')) {
        closeDrawer();
      }
    });
  }

  /* ------------------------------------------------------------------------
     2. STREAMLINED CONTACT MODAL
     ------------------------------------------------------------------------ */
  initContactModal() {
    const modalBackdrop = document.getElementById('contact-modal');
    const closeBtn = document.getElementById('modal-close-btn');
    const openBtns = document.querySelectorAll('[data-open-modal="contact"]');
    const form = document.getElementById('project-inquiry-form');

    if (!modalBackdrop) return;

    const openModal = () => {
      modalBackdrop.classList.add('active');
      document.body.style.overflow = 'hidden';
      const firstInput = document.getElementById('inquiry-name');
      if (firstInput) setTimeout(() => firstInput.focus(), 100);
    };

    const closeModal = () => {
      modalBackdrop.classList.remove('active');
      document.body.style.overflow = '';
    };

    openBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        openModal();
      });
    });

    if (closeBtn) closeBtn.addEventListener('click', closeModal);

    modalBackdrop.addEventListener('click', (e) => {
      if (e.target === modalBackdrop) closeModal();
    });

    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modalBackdrop.classList.contains('active')) {
        closeModal();
      }
    });

    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const submitBtn = form.querySelector('button[type="submit"]');
        if (submitBtn) {
          submitBtn.innerHTML = `<span>TRANSMITTING INQUIRY...</span>`;
          submitBtn.disabled = true;
          
          setTimeout(() => {
            form.innerHTML = `
              <div style="text-align:center;padding:2rem 1rem;">
                <div style="width:52px;height:52px;border-radius:50%;background:rgba(0,242,254,0.1);border:1px solid var(--accent-cyan);display:flex;align-items:center;justify-content:center;margin:0 auto 1.25rem;color:var(--accent-cyan);font-size:1.5rem;">✓</div>
                <h3 style="font-size:var(--text-xl);margin-bottom:0.5rem;">INQUIRY TRANSMITTED</h3>
                <p style="font-size:var(--text-sm);color:var(--text-secondary);max-width:380px;margin:0 auto 1.5rem;">
                  Thank you for reaching out to SS. We review all incoming project inquiries and respond directly.
                </p>
                <button type="button" class="btn btn-glass" onclick="document.getElementById('contact-modal').classList.remove('active');document.body.style.overflow=''">CLOSE WINDOW</button>
              </div>
            `;
          }, 700);
        }
      });
    }
  }

  /* ------------------------------------------------------------------------
     3. DIRECT EMAIL COPY
     ------------------------------------------------------------------------ */
  initEmailCopy() {
    const copyBtns = document.querySelectorAll('.copy-email-btn');
    copyBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const email = 'studio@ss-atelier.digital';
        navigator.clipboard.writeText(email).then(() => {
          const originalHTML = btn.innerHTML;
          btn.innerHTML = `<span style="color:#10b981;">COPIED TO CLIPBOARD ✓</span>`;
          setTimeout(() => {
            btn.innerHTML = originalHTML;
          }, 2200);
        });
      });
    });
  }
}

window.DrawerAndModal = DrawerAndModal;
