/**
 * SS — MASTER ORCHESTRATION & LIFECYCLE
 * Initializes all core modules, live world clocks, and keyboard accessibility
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Initialize Luxury Magnetic Cursor (Desktop Only)
  if (window.LuxuryCursor) {
    new window.LuxuryCursor();
  }

  // 2. Initialize Focused 3D WebGL Hero
  if (window.WebGLHero) {
    new window.WebGLHero('webgl-hero-canvas');
  }

  // 3. Initialize Interactive Digital Lab
  if (window.DigitalLab) {
    new window.DigitalLab('digital-lab-canvas');
  }

  // 4. Initialize Case Study Drawer & Contact Modal
  if (window.DrawerAndModal) {
    new window.DrawerAndModal();
  }

  // 5. Initialize Cinematic Animations & Scroll Triggers
  if (window.StudioAnimations) {
    new window.StudioAnimations();
  }

  // 6. World Clocks in Footer
  const updateWorldClocks = () => {
    const timeOptions = { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false };
    
    const nyTimeEl = document.getElementById('clock-ny');
    const lonTimeEl = document.getElementById('clock-lon');
    const tyoTimeEl = document.getElementById('clock-tyo');

    const now = new Date();

    if (nyTimeEl) {
      nyTimeEl.textContent = new Intl.DateTimeFormat('en-US', { ...timeOptions, timeZone: 'America/New_York' }).format(now);
    }
    if (lonTimeEl) {
      lonTimeEl.textContent = new Intl.DateTimeFormat('en-GB', { ...timeOptions, timeZone: 'Europe/London' }).format(now);
    }
    if (tyoTimeEl) {
      tyoTimeEl.textContent = new Intl.DateTimeFormat('ja-JP', { ...timeOptions, timeZone: 'Asia/Tokyo' }).format(now);
    }
  };

  updateWorldClocks();
  setInterval(updateWorldClocks, 1000);

  // 7. Brand Console Signature
  console.log(
    `%c SS %c Creative Frontend Engineering & Digital Flagships %c`,
    'background:#00f2fe; color:#050608; font-weight:bold; padding:4px 8px; border-radius:4px 0 0 4px;',
    'background:#12151d; color:#f8fafc; padding:4px 8px; border-radius:0 4px 4px 0;',
    'background:transparent;'
  );
});
