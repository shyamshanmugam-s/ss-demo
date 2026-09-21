/**
 * SS DIGITAL ATELIER — LUXURY MAGNETIC CURSOR ENGINE
 * Smooth dual-ring cursor with magnetic physics, lens expansion, and state morphing
 */

class LuxuryCursor {
  constructor() {
    this.cursor = document.querySelector('.custom-cursor');
    if (!this.cursor) return;

    this.dot = this.cursor.querySelector('.cursor-dot');
    this.ring = this.cursor.querySelector('.cursor-ring');
    this.text = this.cursor.querySelector('.cursor-text');

    this.pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    this.mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    this.ringPos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };

    this.isHovering = false;
    this.isMagnetic = false;
    this.magneticTarget = null;
    this.magneticBounds = null;

    this.init();
  }

  init() {
    // Touch detection
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
      this.cursor.style.display = 'none';
      return;
    }

    window.addEventListener('mousemove', (e) => {
      this.mouse.x = e.clientX;
      this.mouse.y = e.clientY;
      this.cursor.style.opacity = '1';
    }, { passive: true });

    document.addEventListener('mouseleave', () => {
      this.cursor.style.opacity = '0';
    });

    document.addEventListener('mouseenter', () => {
      this.cursor.style.opacity = '1';
    });

    this.bindHoverTargets();
    this.animate();
  }

  bindHoverTargets() {
    // Interactive clickable elements
    const standardHoverTargets = document.querySelectorAll(
      'a, button, input, label, select, textarea, .mode-btn, .service-row, .synth-key'
    );

    standardHoverTargets.forEach(el => {
      el.addEventListener('mouseenter', () => {
        this.cursor.classList.add('cursor-hover');
      });
      el.addEventListener('mouseleave', () => {
        this.cursor.classList.remove('cursor-hover');
      });
    });

    // Magnetic elements
    const magneticTargets = document.querySelectorAll('[data-magnetic], .btn-primary, .brand-mark');
    magneticTargets.forEach(el => {
      el.addEventListener('mouseenter', () => {
        this.isMagnetic = true;
        this.magneticTarget = el;
        this.magneticBounds = el.getBoundingClientRect();
      });
      el.addEventListener('mousemove', (e) => {
        if (!this.isMagnetic || !this.magneticTarget) return;
        const rect = this.magneticTarget.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const deltaX = (e.clientX - centerX) * 0.35;
        const deltaY = (e.clientY - centerY) * 0.35;
        this.magneticTarget.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
      });
      el.addEventListener('mouseleave', () => {
        this.isMagnetic = false;
        if (this.magneticTarget) {
          this.magneticTarget.style.transform = '';
          this.magneticTarget = null;
        }
      });
    });

    // Custom lens modes (Case study cards, sandbox)
    const customLensTargets = document.querySelectorAll('[data-cursor]');
    customLensTargets.forEach(el => {
      el.addEventListener('mouseenter', () => {
        const mode = el.getAttribute('data-cursor');
        const customText = el.getAttribute('data-cursor-text') || 'VIEW';
        if (this.text) this.text.textContent = customText;
        this.cursor.classList.add(`cursor-${mode}`);
      });
      el.addEventListener('mouseleave', () => {
        const mode = el.getAttribute('data-cursor');
        this.cursor.classList.remove(`cursor-${mode}`);
      });
    });
  }

  animate() {
    requestAnimationFrame(() => this.animate());

    // Dot tracks instant mouse position
    this.dot.style.transform = `translate3d(${this.mouse.x}px, ${this.mouse.y}px, 0)`;

    // Ring smoothly lerps behind mouse
    this.ringPos.x += (this.mouse.x - this.ringPos.x) * 0.15;
    this.ringPos.y += (this.mouse.y - this.ringPos.y) * 0.15;
    this.ring.style.transform = `translate3d(${this.ringPos.x}px, ${this.ringPos.y}px, 0)`;
  }
}

window.LuxuryCursor = LuxuryCursor;
