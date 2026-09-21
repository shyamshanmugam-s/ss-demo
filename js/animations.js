/**
 * SS DIGITAL ATELIER — CINEMATIC ANIMATIONS & SCROLL CHOREOGRAPHY
 * Handles preloader countdown, split-text kinematics, and scroll illumination
 */

class StudioAnimations {
  constructor() {
    this.initPreloader();
    this.initHeaderScroll();
    this.initManifestoIllumination();
    this.initScrollObservers();
    this.initSmoothNavScroll();
  }

  /* ------------------------------------------------------------------------
     1. CINEMATIC PRELOADER
     ------------------------------------------------------------------------ */
  initPreloader() {
    const preloader = document.getElementById('preloader');
    const counterNum = document.getElementById('preloader-num');
    const progressBar = document.getElementById('preloader-bar');
    const hero = document.getElementById('hero');

    if (!preloader) {
      if (hero) hero.classList.add('hero-ready');
      return;
    }

    let progress = 0;
    const interval = setInterval(() => {
      progress += Math.floor(Math.random() * 8) + 4;
      if (progress >= 100) {
        progress = 100;
        clearInterval(interval);

        if (counterNum) counterNum.textContent = '100';
        if (progressBar) progressBar.style.width = '100%';

        setTimeout(() => {
          preloader.classList.add('loaded');
          if (hero) {
            setTimeout(() => {
              hero.classList.add('hero-ready');
            }, 300);
          }
        }, 350);
      } else {
        if (counterNum) counterNum.textContent = progress < 10 ? `0${progress}` : `${progress}`;
        if (progressBar) progressBar.style.width = `${progress}%`;
      }
    }, 45);
  }

  /* ------------------------------------------------------------------------
     2. HEADER SCROLL STATE
     ------------------------------------------------------------------------ */
  initHeaderScroll() {
    const header = document.querySelector('.site-header');
    if (!header) return;

    window.addEventListener('scroll', () => {
      if (window.scrollY > 40) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }, { passive: true });
  }

  /* ------------------------------------------------------------------------
     3. MANIFESTO WORD-BY-WORD ILLUMINATION
     ------------------------------------------------------------------------ */
  initManifestoIllumination() {
    const manifestoContainer = document.querySelector('.manifesto-statement');
    if (!manifestoContainer) return;

    const words = manifestoContainer.querySelectorAll('.manifesto-word');
    if (!words.length) return;

    window.addEventListener('scroll', () => {
      const rect = manifestoContainer.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (rect.top < windowHeight * 0.85 && rect.bottom > 0) {
        const totalDist = windowHeight * 0.7;
        const currentDist = windowHeight * 0.85 - rect.top;
        const progress = Math.min(Math.max(currentDist / totalDist, 0), 1);

        const illuminatedCount = Math.floor(progress * words.length);
        words.forEach((word, idx) => {
          if (idx <= illuminatedCount) {
            word.classList.add('illuminated');
          } else {
            word.classList.remove('illuminated');
          }
        });
      }
    }, { passive: true });
  }

  /* ------------------------------------------------------------------------
     4. SCROLL INTERSECTION OBSERVERS
     ------------------------------------------------------------------------ */
  initScrollObservers() {
    const observedElements = document.querySelectorAll(
      '.work-card, .playground-card, .vault-card, .process-step, .service-row, .cta-box'
    );

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = entry.target.classList.contains('work-card') && entry.target.matches(':nth-child(even)') 
            ? 'translateY(2rem)' 
            : 'translateY(0)';
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    observedElements.forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(30px)';
      el.style.transition = 'opacity 0.8s var(--ease-cinematic), transform 0.8s var(--ease-cinematic)';
      observer.observe(el);
    });
  }

  /* ------------------------------------------------------------------------
     5. SMOOTH NAV & ANCHOR SCROLL
     ------------------------------------------------------------------------ */
  initSmoothNavScroll() {
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        const href = anchor.getAttribute('href');
        if (href === '#' || href === '') return;
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          const headerOffset = 80;
          const elementPosition = target.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      });
    });

    const backToTopBtn = document.querySelector('.back-to-top-btn');
    if (backToTopBtn) {
      backToTopBtn.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      });
    }
  }
}

window.StudioAnimations = StudioAnimations;
