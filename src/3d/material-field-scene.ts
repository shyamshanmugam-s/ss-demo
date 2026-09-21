import * as THREE from "three";
import { BaseSceneManager } from "./scene-manager";

/**
 * MaterialFieldScene: Bespoke interactive architectural material field in Three.js
 * An interactive study in material, light, and spatial response for Digital Lab.
 */
export class MaterialFieldScene extends BaseSceneManager {
  private group: THREE.Group | null = null;
  private surfaceMesh: THREE.Mesh | null = null;
  private wireframeLattice: THREE.LineSegments | null = null;
  private customMaterial: THREE.ShaderMaterial | null = null;

  // Interaction tracking state
  private targetPointerX = 0;
  private targetPointerY = 0;
  private currentPointerX = 0;
  private currentPointerY = 0;
  private pointerSpeed = 0;
  private lastPointerX = 0;
  private lastPointerY = 0;

  // Parallax tilt state
  private targetTiltX = 0;
  private targetTiltY = 0;
  private currentTiltX = 0;
  private currentTiltY = 0;

  // Interaction activity
  private hasInteracted = false;
  private onInteractionCallback?: () => void;

  setOnInteraction(cb: () => void) {
    this.onInteractionCallback = cb;
  }

  init(
    scene: THREE.Scene,
    camera: THREE.PerspectiveCamera | THREE.OrthographicCamera,
    renderer: THREE.WebGLRenderer
  ) {
    super.init(scene, camera, renderer);

    this.group = new THREE.Group();
    scene.add(this.group);

    const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

    // 1. High-Density Subdivided Architectural Plane (64x64)
    const planeGeo = this.trackDisposable(
      new THREE.PlaneGeometry(
        isMobile ? 3.4 : 4.6,
        isMobile ? 2.4 : 3.0,
        isMobile ? 56 : 72,
        isMobile ? 56 : 72
      )
    );

    // 2. Custom GLSL Shader for Tactile Physical Deformation & Obsidian Titanium Materiality
    const vertexShader = `
      uniform float uTime;
      uniform vec2 uPointer;
      uniform float uPointerSpeed;
      uniform float uReducedMotion;

      varying vec3 vNormal;
      varying vec3 vWorldPosition;
      varying vec3 vViewPosition;
      varying vec2 vUv;
      varying float vDisplacement;

      // Noise and smooth wave helper
      float calculateDisplacement(vec2 pos, vec2 ptr, float speed, float time) {
        if (uReducedMotion > 0.5) return 0.0;

        // Distance from current pointer
        float d = length(pos - ptr);
        
        // 1. Gaussian cursor wave deformation with ~25% boosted physical presence
        float cursorWave = exp(-d * d * 4.2) * (0.46 + speed * 0.48);
        
        // 2. Secondary fluid resonance ripple
        float ripple = sin(d * 12.0 - time * 3.6) * exp(-d * 2.8) * 0.11 * (0.6 + speed * 0.7);

        // 3. Resting architectural tectonic striations (visible even at rest)
        float tectonic = (sin(pos.x * 2.4 + pos.y * 1.6 + time * 0.7) * 0.08) +
                         (cos(pos.x * 1.8 - pos.y * 2.0 + time * 0.5) * 0.05);

        return cursorWave + ripple + tectonic;
      }

      void main() {
        vUv = uv;
        
        // Map uv to local coordinate space [-1.5, 1.5]
        vec2 localPos = (uv - 0.5) * vec2(3.0, 2.0);
        vec2 targetPtr = uPointer * vec2(1.5, 1.0);

        float disp = calculateDisplacement(localPos, targetPtr, uPointerSpeed, uTime);
        vDisplacement = disp;

        // Finite differences with tight epsilon for sharp, crisp surface normals
        float eps = 0.015;
        float dispX = calculateDisplacement(localPos + vec2(eps, 0.0), targetPtr, uPointerSpeed, uTime);
        float dispY = calculateDisplacement(localPos + vec2(0.0, eps), targetPtr, uPointerSpeed, uTime);

        vec3 normalVec = normalize(vec3(
          -(dispX - disp) / eps,
          -(dispY - disp) / eps,
          1.0
        ));

        vec3 newPosition = position + vec3(0.0, 0.0, disp);
        vec4 worldPos = modelMatrix * vec4(newPosition, 1.0);
        vWorldPosition = worldPos.xyz;

        vNormal = normalize(normalMatrix * normalVec);
        vec4 mvPosition = viewMatrix * worldPos;
        vViewPosition = -mvPosition.xyz;

        gl_Position = projectionMatrix * mvPosition;
      }
    `;

    const fragmentShader = `
      uniform vec3 uKeyLightPos;
      uniform vec3 uFillLightPos;
      uniform float uTime;

      varying vec3 vNormal;
      varying vec3 vWorldPosition;
      varying vec3 vViewPosition;
      varying vec2 vUv;
      varying float vDisplacement;

      void main() {
        vec3 N = normalize(vNormal);
        vec3 V = normalize(vViewPosition);

        // Dynamic Studio Key Light (moves with pointer with physical inertia)
        vec3 L_key = normalize(uKeyLightPos - vWorldPosition);
        float NdotL_key = max(dot(N, L_key), 0.0);

        // Studio Cool Metallic Fill Light
        vec3 L_fill = normalize(uFillLightPos - vWorldPosition);
        float NdotL_fill = max(dot(N, L_fill), 0.0);

        // Top Studio Rim Light for crisp architectural ridge definition
        vec3 L_rim = normalize(vec3(0.0, 6.0, 2.5) - vWorldPosition);
        float NdotL_rim = max(dot(N, L_rim), 0.0);

        // Obsidian Titanium Base Palette (High contrast chiaroscuro)
        vec3 creviceObsidian = vec3(0.045, 0.055, 0.08);
        vec3 titaniumSurface = vec3(0.16, 0.20, 0.29);
        vec3 surfaceColor = mix(creviceObsidian, titaniumSurface, pow(NdotL_key, 1.2));

        // Dual-Lobe Anisotropic Specular Highlights
        vec3 H_key = normalize(L_key + V);
        float NdotH_key = max(dot(N, H_key), 0.0);
        
        // Broad metallic sheen
        float specBroad = pow(NdotH_key, 28.0) * 0.55;
        // Crisp precision pinpoint
        float specPinpoint = pow(NdotH_key, 96.0) * 0.75;
        vec3 specularColor = vec3(0.92, 0.96, 1.0) * (specBroad + specPinpoint);

        // Fill Light Soft Contribution
        vec3 fillContrib = vec3(0.55, 0.62, 0.75) * NdotL_fill * 0.25;

        // Architectural Top Rim Sheen
        vec3 H_rim = normalize(L_rim + V);
        float specRim = pow(max(dot(N, H_rim), 0.0), 32.0) * 0.35;
        vec3 rimContrib = vec3(0.8, 0.88, 1.0) * (NdotL_rim * 0.15 + specRim);

        // Sharp Edge Fresnel Reflection
        float fresnel = pow(1.0 - max(dot(N, V), 0.0), 3.2) * 0.55;
        vec3 fresnelColor = vec3(0.88, 0.94, 1.0) * fresnel;

        // Restrained Cyan Internal Energy Highlight
        // Localized strictly to active wave crests under key light
        float cyanActivation = smoothstep(0.06, 0.32, vDisplacement);
        vec3 cyanHighlight = vec3(0.0, 0.95, 1.0) * cyanActivation * NdotL_key * 0.24;

        // Subtle perimeter architectural falloff
        float edgeDamping = smoothstep(0.0, 0.03, vUv.x) * smoothstep(1.0, 0.97, vUv.x) *
                            smoothstep(0.0, 0.03, vUv.y) * smoothstep(1.0, 0.97, vUv.y);

        vec3 finalColor = (surfaceColor + specularColor + fillContrib + rimContrib + fresnelColor + cyanHighlight) * edgeDamping;

        gl_FragColor = vec4(finalColor, 0.98);
      }
    `;

    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    this.customMaterial = this.trackDisposable(
      new THREE.ShaderMaterial({
        vertexShader,
        fragmentShader,
        uniforms: {
          uTime: { value: 0 },
          uPointer: { value: new THREE.Vector2(0, 0) },
          uPointerSpeed: { value: 0 },
          uReducedMotion: { value: prefersReducedMotion ? 1.0 : 0.0 },
          uKeyLightPos: { value: new THREE.Vector3(3.0, 4.0, 4.5) },
          uFillLightPos: { value: new THREE.Vector3(-4.5, -2.5, 3.5) },
        },
        side: THREE.DoubleSide,
        transparent: true,
      })
    );

    this.surfaceMesh = new THREE.Mesh(planeGeo, this.customMaterial);
    this.group.add(this.surfaceMesh);

    // 3. Subtle Architectural Wireframe Perimeter Lattice
    const wireframeGeo = this.trackDisposable(new THREE.WireframeGeometry(planeGeo));
    const wireframeMat = this.trackDisposable(
      new THREE.LineBasicMaterial({
        color: 0xffffff,
        transparent: true,
        opacity: 0.05,
      })
    );
    this.wireframeLattice = new THREE.LineSegments(wireframeGeo, wireframeMat);
    this.wireframeLattice.position.z = -0.01;
    this.group.add(this.wireframeLattice);

    // Initial architectural perspective tilt
    this.group.rotation.x = -Math.PI / 3.9;
    this.group.rotation.y = 0.0;
    this.group.rotation.z = Math.PI / 32;
    this.group.position.set(0, 0, 0);

    // Camera framing
    if (this.camera instanceof THREE.PerspectiveCamera) {
      this.camera.position.set(0, -0.45, 4.0);
      this.camera.lookAt(0, 0, 0);
    }
  }

  onPointerMove(x: number, y: number) {
    if (!this.hasInteracted) {
      this.hasInteracted = true;
      this.onInteractionCallback?.();
    }

    // Normalized coordinates [-1, 1]
    this.targetPointerX = x;
    this.targetPointerY = y;

    // Subtle parallax tilt
    this.targetTiltY = x * 0.22;
    this.targetTiltX = -y * 0.18;
  }

  resize(width: number, _height: number) {
    if (!this.group) return;
    const isMobile = width < 768;
    this.group.scale.setScalar(isMobile ? 0.75 : 1.0);
  }

  update(time: number, delta: number) {
    if (!this.customMaterial || !this.group) return;

    // Smooth pointer coordinate interpolation (heavy physical weight)
    const lerpFactor = Math.min(delta * 4.5, 0.2);
    this.currentPointerX += (this.targetPointerX - this.currentPointerX) * lerpFactor;
    this.currentPointerY += (this.targetPointerY - this.currentPointerY) * lerpFactor;

    // Velocity calculation with smooth decay
    const dx = this.currentPointerX - this.lastPointerX;
    const dy = this.currentPointerY - this.lastPointerY;
    const instantSpeed = Math.sqrt(dx * dx + dy * dy) * 12.0;
    this.pointerSpeed += (instantSpeed - this.pointerSpeed) * (delta * 6.0);
    this.lastPointerX = this.currentPointerX;
    this.lastPointerY = this.currentPointerY;

    // Smooth tilt parallax interpolation
    this.currentTiltX += (this.targetTiltX - this.currentTiltX) * lerpFactor;
    this.currentTiltY += (this.targetTiltY - this.currentTiltY) * lerpFactor;

    this.group.rotation.x = -Math.PI / 4.2 + this.currentTiltX;
    this.group.rotation.y = this.currentTiltY;

    // Update shader uniforms
    this.customMaterial.uniforms.uTime.value = time;
    this.customMaterial.uniforms.uPointer.value.set(
      this.currentPointerX,
      this.currentPointerY
    );
    this.customMaterial.uniforms.uPointerSpeed.value = Math.min(this.pointerSpeed, 1.5);

    // Dynamic key light follows mouse position with physical inertia
    this.customMaterial.uniforms.uKeyLightPos.value.set(
      2.5 + this.currentPointerX * 3.0,
      3.5 + this.currentPointerY * 2.5,
      4.0
    );
  }
}
