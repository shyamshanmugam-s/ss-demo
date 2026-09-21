/**
 * SS — WEBGL HERO 3D PARTICLE ENGINE
 * Focused, high-performance particle universe with fluid mouse inertia and 2D fallback
 */

class WebGLHero {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;

    this.container = this.canvas.parentElement;
    this.isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    this.isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    
    this.mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
    this.particleCount = this.isTouch ? 1800 : 4200;
    this.isRunning = true;

    this.init();
  }

  init() {
    if (typeof THREE === 'undefined') {
      this.init2DFallback();
      return;
    }

    try {
      this.scene = new THREE.Scene();
      this.camera = new THREE.PerspectiveCamera(
        60,
        this.container.clientWidth / this.container.clientHeight,
        0.1,
        1000
      );
      this.camera.position.z = 22;

      this.renderer = new THREE.WebGLRenderer({
        canvas: this.canvas,
        alpha: true,
        antialias: true,
        powerPreference: 'high-performance'
      });

      this.renderer.setSize(this.container.clientWidth, this.container.clientHeight);
      this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

      this.buildParticles();
      this.bindEvents();
      this.animate();
    } catch (e) {
      console.warn('WebGL initialization failed, falling back to 2D canvas:', e);
      this.init2DFallback();
    }
  }

  buildParticles() {
    this.particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(this.particleCount * 3);
    const colors = new Float32Array(this.particleCount * 3);
    const originalPositions = new Float32Array(this.particleCount * 3);

    const cyan = new THREE.Color(0x00f2fe);
    const violet = new THREE.Color(0x7928ca);
    const white = new THREE.Color(0xffffff);

    for (let i = 0; i < this.particleCount; i++) {
      const i3 = i * 3;
      // Spherical distribution with density concentration
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      const r = Math.cbrt(Math.random()) * 10 + 2.5;

      const sinPhi = Math.sin(phi);
      const x = r * sinPhi * Math.cos(theta);
      const y = r * sinPhi * Math.sin(theta);
      const z = r * Math.cos(phi);

      positions[i3] = x;
      positions[i3 + 1] = y;
      positions[i3 + 2] = z;

      originalPositions[i3] = x;
      originalPositions[i3 + 1] = y;
      originalPositions[i3 + 2] = z;

      let mixedColor = white.clone();
      const mixRatio = Math.random();
      if (mixRatio > 0.65) {
        mixedColor.lerp(cyan, Math.random() * 0.9);
      } else if (mixRatio > 0.35) {
        mixedColor.lerp(violet, Math.random() * 0.85);
      }

      colors[i3] = mixedColor.r;
      colors[i3 + 1] = mixedColor.g;
      colors[i3 + 2] = mixedColor.b;
    }

    this.particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    this.particleGeo.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    this.originalPositions = originalPositions;

    const particleTexture = this.createParticleTexture();

    this.particleMat = new THREE.PointsMaterial({
      size: this.isTouch ? 0.32 : 0.24,
      map: particleTexture,
      transparent: true,
      vertexColors: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });

    this.particles = new THREE.Points(this.particleGeo, this.particleMat);
    this.scene.add(this.particles);
  }

  createParticleTexture() {
    const canvas = document.createElement('canvas');
    canvas.width = 64;
    canvas.height = 64;
    const ctx = canvas.getContext('2d');

    const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
    gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
    gradient.addColorStop(0.25, 'rgba(0, 242, 254, 0.8)');
    gradient.addColorStop(0.6, 'rgba(121, 40, 202, 0.25)');
    gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 64, 64);

    return new THREE.CanvasTexture(canvas);
  }

  bindEvents() {
    window.addEventListener('resize', () => this.onResize(), { passive: true });

    window.addEventListener('mousemove', (e) => {
      this.mouse.targetX = (e.clientX / window.innerWidth) * 2 - 1;
      this.mouse.targetY = -(e.clientY / window.innerHeight) * 2 + 1;
    }, { passive: true });

    // Touch support without scroll interruption
    window.addEventListener('touchmove', (e) => {
      if (e.touches.length > 0) {
        this.mouse.targetX = (e.touches[0].clientX / window.innerWidth) * 2 - 1;
        this.mouse.targetY = -(e.touches[0].clientY / window.innerHeight) * 2 + 1;
      }
    }, { passive: true });

    document.addEventListener('visibilitychange', () => {
      this.isRunning = document.visibilityState === 'visible';
    });
  }

  onResize() {
    if (!this.renderer || !this.camera) return;
    const width = this.container.clientWidth;
    const height = this.container.clientHeight;

    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(width, height);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  }

  animate(time = 0) {
    if (!this.isRunning) {
      requestAnimationFrame((t) => this.animate(t));
      return;
    }

    requestAnimationFrame((t) => this.animate(t));

    this.mouse.x += (this.mouse.targetX - this.mouse.x) * 0.04;
    this.mouse.y += (this.mouse.targetY - this.mouse.y) * 0.04;

    const t = time * 0.001;

    if (this.particles) {
      this.particles.rotation.y = t * 0.07 + this.mouse.x * 0.35;
      this.particles.rotation.x = Math.sin(t * 0.04) * 0.1 - this.mouse.y * 0.25;

      if (!this.isReducedMotion) {
        const positions = this.particleGeo.attributes.position.array;
        const orig = this.originalPositions;
        for (let i = 0; i < this.particleCount; i += 3) {
          const i3 = i * 3;
          const wave = Math.sin(t * 1.4 + orig[i3] * 0.35) * 0.12;
          positions[i3] = orig[i3] * (1 + wave);
          positions[i3 + 1] = orig[i3 + 1] * (1 + wave);
          positions[i3 + 2] = orig[i3 + 2] * (1 + wave);
        }
        this.particleGeo.attributes.position.needsUpdate = true;
      }
    }

    this.renderer.render(this.scene, this.camera);
  }

  init2DFallback() {
    const ctx = this.canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      this.canvas.width = this.container.clientWidth;
      this.canvas.height = this.container.clientHeight;
    };
    resize();
    window.addEventListener('resize', resize, { passive: true });

    const stars = Array.from({ length: 90 }, () => ({
      x: Math.random() * this.canvas.width,
      y: Math.random() * this.canvas.height,
      radius: Math.random() * 1.5 + 0.5,
      alpha: Math.random() * 0.8 + 0.2,
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.25
    }));

    const render = () => {
      ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

      const grad = ctx.createRadialGradient(
        this.canvas.width * 0.5,
        this.canvas.height * 0.45,
        0,
        this.canvas.width * 0.5,
        this.canvas.height * 0.45,
        this.canvas.width * 0.55
      );
      grad.addColorStop(0, 'rgba(0, 242, 254, 0.08)');
      grad.addColorStop(0.5, 'rgba(121, 40, 202, 0.04)');
      grad.addColorStop(1, 'transparent');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

      stars.forEach(s => {
        s.x += s.vx;
        s.y += s.vy;
        if (s.x < 0) s.x = this.canvas.width;
        if (s.x > this.canvas.width) s.x = 0;
        if (s.y < 0) s.y = this.canvas.height;
        if (s.y > this.canvas.height) s.y = 0;

        ctx.beginPath();
        ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 242, 254, ${s.alpha})`;
        ctx.fill();
      });

      requestAnimationFrame(render);
    };
    render();
  }
}

window.WebGLHero = WebGLHero;
