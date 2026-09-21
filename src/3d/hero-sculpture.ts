import * as THREE from "three";
import { BaseSceneManager } from "./scene-manager";

/**
 * HeroSculpture: Bespoke architectural monolithic geometric core in Three.js
 * Represents SS STUDIO creative engineering, digital systems, and web craftsmanship.
 */
export class HeroSculpture extends BaseSceneManager {
  private group: THREE.Group | null = null;
  private outerMonolith: THREE.Mesh | null = null;
  private innerLattice: THREE.LineSegments | null = null;
  private coreCrystal: THREE.Mesh | null = null;
  private orbitalRings: THREE.Group | null = null;
  private targetPointerX = 0;
  private targetPointerY = 0;
  private scrollProgress = 0;
  private basePosX = 1.35;
  private basePosY = 0;

  init(
    scene: THREE.Scene,
    camera: THREE.PerspectiveCamera | THREE.OrthographicCamera,
    renderer: THREE.WebGLRenderer
  ) {
    super.init(scene, camera, renderer);

    this.group = new THREE.Group();
    scene.add(this.group);

    const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
    this.basePosX = isMobile ? 0 : 1.35;
    this.basePosY = isMobile ? -0.2 : 0;

    // 1. Primary Monolithic Faceted Geometry (Obsidian Titanium Architectural Shell)
    const outerGeo = this.trackDisposable(
      new THREE.IcosahedronGeometry(isMobile ? 1.35 : 1.85, 0)
    );

    const outerMat = this.trackDisposable(
      new THREE.MeshPhysicalMaterial({
        color: 0x0c1017,
        metalness: 0.94,
        roughness: 0.18,
        flatShading: true,
        transparent: true,
        opacity: 0.95,
        clearcoat: 0.45,
        clearcoatRoughness: 0.08,
        reflectivity: 0.85,
      })
    );

    this.outerMonolith = new THREE.Mesh(outerGeo, outerMat);
    this.group.add(this.outerMonolith);

    // 2. Precision Architectural Hairline Wireframe Lattice
    const wireframeGeo = this.trackDisposable(
      new THREE.WireframeGeometry(outerGeo)
    );
    const wireframeMat = this.trackDisposable(
      new THREE.LineBasicMaterial({
        color: 0x00f2fe,
        transparent: true,
        opacity: 0.3,
      })
    );

    this.innerLattice = new THREE.LineSegments(wireframeGeo, wireframeMat);
    this.innerLattice.scale.setScalar(1.002);
    this.group.add(this.innerLattice);

    // 3. Floating Inner Prismatic Core (Obsidian Crystal with subtle Cyan refraction)
    const coreGeo = this.trackDisposable(
      new THREE.OctahedronGeometry(isMobile ? 0.6 : 0.78, 0)
    );
    const coreMat = this.trackDisposable(
      new THREE.MeshStandardMaterial({
        color: 0x060f17,
        emissive: 0x002c38,
        emissiveIntensity: 0.35,
        roughness: 0.18,
        metalness: 0.88,
        flatShading: true,
      })
    );

    this.coreCrystal = new THREE.Mesh(coreGeo, coreMat);
    this.group.add(this.coreCrystal);

    // 4. Architectural Meridian Rings
    this.orbitalRings = new THREE.Group();
    const ringGeo1 = this.trackDisposable(
      new THREE.TorusGeometry(isMobile ? 2.05 : 2.55, 0.006, 16, 120)
    );
    const ringMat1 = this.trackDisposable(
      new THREE.MeshBasicMaterial({
        color: 0xf8fafc,
        transparent: true,
        opacity: 0.09,
      })
    );
    const ringMesh1 = new THREE.Mesh(ringGeo1, ringMat1);
    ringMesh1.rotation.x = Math.PI / 3;
    this.orbitalRings.add(ringMesh1);

    const ringGeo2 = this.trackDisposable(
      new THREE.TorusGeometry(isMobile ? 2.25 : 2.8, 0.005, 16, 120)
    );
    const ringMat2 = this.trackDisposable(
      new THREE.MeshBasicMaterial({
        color: 0x00f2fe,
        transparent: true,
        opacity: 0.14,
      })
    );
    const ringMesh2 = new THREE.Mesh(ringGeo2, ringMat2);
    ringMesh2.rotation.y = Math.PI / 4;
    ringMesh2.rotation.x = -Math.PI / 6;
    this.orbitalRings.add(ringMesh2);

    this.group.add(this.orbitalRings);

    // 5. Studio Key, Fill & Controlled Cyan Rim Lighting
    const keyLight = new THREE.DirectionalLight(0xffffff, 3.8);
    keyLight.position.set(6, 8, 8);
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0x94a3b8, 1.6);
    fillLight.position.set(-6, 4, 4);
    scene.add(fillLight);

    const cyanRimLight = new THREE.DirectionalLight(0x00f2fe, 1.4);
    cyanRimLight.position.set(-5, -6, -4);
    scene.add(cyanRimLight);

    const ambientLight = new THREE.AmbientLight(0x070a0e, 1.4);
    scene.add(ambientLight);

    // Initial position
    this.group.position.set(this.basePosX, this.basePosY, 0);
  }

  onPointerMove(x: number, y: number) {
    this.targetPointerX = x * 0.35;
    this.targetPointerY = -y * 0.35;
  }

  public setScrollProgress(progress: number) {
    this.scrollProgress = progress;
  }

  resize(width: number, _height: number) {
    if (!this.group) return;
    const isMobile = width < 768;
    this.basePosX = isMobile ? 0 : 1.35;
    this.basePosY = isMobile ? -0.2 : 0;
    this.group.scale.setScalar(isMobile ? 0.82 : 1.0);
  }

  update(_time: number, delta: number) {
    if (!this.group || !this.outerMonolith || !this.coreCrystal) return;

    // Scroll-driven orientation & spatial evolution
    const scrollRotX = this.scrollProgress * Math.PI * 0.65;
    const scrollRotY = this.scrollProgress * Math.PI * 1.1;
    const scrollShiftZ = -this.scrollProgress * 1.2;
    const scrollShiftY = this.basePosY - this.scrollProgress * 0.7;

    // Lerp group rotation combining pointer influence and scroll progress
    const targetRotX = scrollRotX + this.targetPointerY;
    const targetRotY = scrollRotY + this.targetPointerX;

    this.group.rotation.x += (targetRotX - this.group.rotation.x) * (delta * 3.0);
    this.group.rotation.y += (targetRotY - this.group.rotation.y) * (delta * 3.0);

    // Lerp position
    const targetPosX = this.basePosX + this.targetPointerX * 0.2;
    const targetPosY = scrollShiftY + this.targetPointerY * 0.2;

    this.group.position.x += (targetPosX - this.group.position.x) * (delta * 2.5);
    this.group.position.y += (targetPosY - this.group.position.y) * (delta * 2.5);
    this.group.position.z += (scrollShiftZ - this.group.position.z) * (delta * 2.5);

    // Restrained autonomous micro-rotation
    this.outerMonolith.rotation.y += delta * 0.035;
    this.outerMonolith.rotation.z += delta * 0.012;

    this.coreCrystal.rotation.y -= delta * 0.08;
    this.coreCrystal.rotation.x += delta * 0.04;

    if (this.orbitalRings) {
      this.orbitalRings.rotation.z += delta * 0.02;
    }
  }
}
