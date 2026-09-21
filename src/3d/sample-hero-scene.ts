import * as THREE from "three";
import { BaseSceneManager } from "./scene-manager";

export class SampleHeroScene extends BaseSceneManager {
  private particles: THREE.Points | null = null;
  private targetMouseX = 0;
  private targetMouseY = 0;
  private currentMouseX = 0;
  private currentMouseY = 0;

  init(
    scene: THREE.Scene,
    camera: THREE.PerspectiveCamera | THREE.OrthographicCamera,
    renderer: THREE.WebGLRenderer
  ) {
    super.init(scene, camera, renderer);

    // Create subtle particles
    const particleCount = 120;
    const geometry = this.trackDisposable(new THREE.BufferGeometry());
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const color1 = new THREE.Color(0x00f2fe);
    const color2 = new THREE.Color(0x7928ca);

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 6;

      const mixed = color1.clone().lerp(color2, Math.random());
      colors[i * 3] = mixed.r;
      colors[i * 3 + 1] = mixed.g;
      colors[i * 3 + 2] = mixed.b;
    }

    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    const material = this.trackDisposable(
      new THREE.PointsMaterial({
        size: 0.04,
        vertexColors: true,
        transparent: true,
        opacity: 0.6,
        blending: THREE.AdditiveBlending,
      })
    );

    this.particles = new THREE.Points(geometry, material);
    scene.add(this.particles);
  }

  onPointerMove(x: number, y: number) {
    this.targetMouseX = x * 0.5;
    this.targetMouseY = y * 0.5;
  }

  update(_time: number, delta: number) {
    if (!this.particles || !this.camera) return;

    // Smooth camera mouse parallax
    this.currentMouseX += (this.targetMouseX - this.currentMouseX) * (delta * 2);
    this.currentMouseY += (this.targetMouseY - this.currentMouseY) * (delta * 2);

    this.camera.position.x = this.currentMouseX;
    this.camera.position.y = this.currentMouseY;
    this.camera.lookAt(0, 0, 0);

    // Subtle idle rotation
    this.particles.rotation.y += delta * 0.03;
    this.particles.rotation.x += delta * 0.015;
  }
}
