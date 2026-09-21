/**
 * SS — INTERACTIVE DIGITAL LAB
 * Single unified 3D showcase demonstrating design, motion, and creative frontend engineering
 */

class DigitalLab {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;

    this.container = this.canvas.parentElement;
    this.isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    this.isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

    this.isDragging = false;
    this.previousMousePos = { x: 0, y: 0 };
    this.rotationVelocity = { x: 0.005, y: 0.008 };
    this.mouse = { x: 0, y: 0 };
    this.isRunning = true;

    this.init();
  }

  init() {
    if (typeof THREE === 'undefined') {
      this.initFallback();
      return;
    }

    try {
      this.scene = new THREE.Scene();
      this.camera = new THREE.PerspectiveCamera(
        45,
        this.container.clientWidth / this.container.clientHeight,
        0.1,
        100
      );
      this.camera.position.z = 14;

      this.renderer = new THREE.WebGLRenderer({
        canvas: this.canvas,
        alpha: true,
        antialias: true,
        powerPreference: 'high-performance'
      });

      this.renderer.setSize(this.container.clientWidth, this.container.clientHeight);
      this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

      this.buildArtifact();
      this.buildLighting();
      this.bindEvents();
      this.animate();
    } catch (e) {
      console.warn('Digital Lab WebGL init failed:', e);
      this.initFallback();
    }
  }

  buildArtifact() {
    this.group = new THREE.Group();

    // 1. Inner Solid Faceted Geometry
    const innerGeo = new THREE.IcosahedronGeometry(3.6, 1);
    const innerMat = new THREE.MeshPhysicalMaterial({
      color: 0x0a0c10,
      metalness: 0.9,
      roughness: 0.1,
      reflectivity: 0.9,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1,
      wireframe: false
    });
    this.innerMesh = new THREE.Mesh(innerGeo, innerMat);
    this.group.add(this.innerMesh);

    // 2. Outer Luminous Wireframe Shell
    const outerGeo = new THREE.IcosahedronGeometry(4.4, 1);
    const wireframeGeo = new THREE.WireframeGeometry(outerGeo);
    const wireMat = new THREE.LineBasicMaterial({
      color: 0x00f2fe,
      transparent: true,
      opacity: 0.45,
      blending: THREE.AdditiveBlending
    });
    this.outerWireframe = new THREE.LineSegments(wireframeGeo, wireMat);
    this.group.add(this.outerWireframe);

    // 3. Orbital Particle Aura
    const auraCount = this.isTouch ? 400 : 900;
    const auraGeo = new THREE.BufferGeometry();
    const auraPos = new Float32Array(auraCount * 3);
    const auraColors = new Float32Array(auraCount * 3);

    const cyan = new THREE.Color(0x00f2fe);
    const violet = new THREE.Color(0x7928ca);

    for (let i = 0; i < auraCount; i++) {
      const i3 = i * 3;
      const r = 5.2 + Math.random() * 2.8;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);

      auraPos[i3] = r * Math.sin(phi) * Math.cos(theta);
      auraPos[i3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      auraPos[i3 + 2] = r * Math.cos(phi);

      const color = Math.random() > 0.5 ? cyan : violet;
      auraColors[i3] = color.r;
      auraColors[i3 + 1] = color.g;
      auraColors[i3 + 2] = color.b;
    }

    auraGeo.setAttribute('position', new THREE.BufferAttribute(auraPos, 3));
    auraGeo.setAttribute('color', new THREE.BufferAttribute(auraColors, 3));

    const auraMat = new THREE.PointsMaterial({
      size: 0.12,
      vertexColors: true,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending
    });

    this.aura = new THREE.Points(auraGeo, auraMat);
    this.group.add(this.aura);

    this.scene.add(this.group);
  }

  buildLighting() {
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    this.scene.add(ambientLight);

    this.pointLight1 = new THREE.PointLight(0x00f2fe, 3.5, 30);
    this.pointLight1.position.set(8, 8, 8);
    this.scene.add(this.pointLight1);

    this.pointLight2 = new THREE.PointLight(0x7928ca, 3.0, 30);
    this.pointLight2.position.set(-8, -8, 6);
    this.scene.add(this.pointLight2);
  }

  bindEvents() {
    window.addEventListener('resize', () => this.onResize(), { passive: true });

    // Desktop Mouse Drag Rotation
    this.canvas.addEventListener('mousedown', (e) => {
      this.isDragging = true;
      this.previousMousePos = { x: e.clientX, y: e.clientY };
    });

    window.addEventListener('mousemove', (e) => {
      // Light tracking
      const rect = this.canvas.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        this.mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
        this.mouse.y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      }

      if (!this.isDragging) return;

      const deltaX = e.clientX - this.previousMousePos.x;
      const deltaY = e.clientY - this.previousMousePos.y;

      this.rotationVelocity.y = deltaX * 0.005;
      this.rotationVelocity.x = deltaY * 0.005;

      this.group.rotation.y += this.rotationVelocity.y;
      this.group.rotation.x += this.rotationVelocity.x;

      this.previousMousePos = { x: e.clientX, y: e.clientY };
    });

    window.addEventListener('mouseup', () => {
      this.isDragging = false;
    });

    // Touch Support with horizontal rotation without trapping vertical scroll
    this.canvas.addEventListener('touchstart', (e) => {
      if (e.touches.length === 1) {
        this.isDragging = true;
        this.previousMousePos = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      }
    }, { passive: true });

    this.canvas.addEventListener('touchmove', (e) => {
      if (!this.isDragging || e.touches.length !== 1) return;

      const deltaX = e.touches[0].clientX - this.previousMousePos.x;
      const deltaY = e.touches[0].clientY - this.previousMousePos.y;

      // Only damp rotation if gesture is predominantly horizontal
      if (Math.abs(deltaX) > Math.abs(deltaY)) {
        this.rotationVelocity.y = deltaX * 0.006;
        this.group.rotation.y += this.rotationVelocity.y;
      }

      this.previousMousePos = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    }, { passive: true });

    this.canvas.addEventListener('touchend', () => {
      this.isDragging = false;
    });

    // Pause when offscreen
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        this.isRunning = entry.isIntersecting;
      });
    }, { threshold: 0.1 });
    observer.observe(this.canvas);
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

    const t = time * 0.001;

    if (this.group) {
      // Natural idle momentum with damping when released
      if (!this.isDragging) {
        this.rotationVelocity.x *= 0.96;
        this.rotationVelocity.y *= 0.96;

        this.group.rotation.y += 0.006 + this.rotationVelocity.y;
        this.group.rotation.x += 0.003 + this.rotationVelocity.x;
      }

      if (this.outerWireframe) {
        this.outerWireframe.rotation.y = -t * 0.15;
        this.outerWireframe.rotation.z = Math.sin(t * 0.2) * 0.2;
      }

      if (this.aura) {
        this.aura.rotation.y = t * 0.08;
      }

      // Dynamic light movement tracking pointer
      if (this.pointLight1) {
        this.pointLight1.position.x = 8 + this.mouse.x * 6;
        this.pointLight1.position.y = 8 + this.mouse.y * 6;
      }
    }

    this.renderer.render(this.scene, this.camera);
  }

  initFallback() {
    const ctx = this.canvas.getContext('2d');
    if (!ctx) return;
    ctx.fillStyle = '#0a0c10';
    ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
  }
}

window.DigitalLab = DigitalLab;
