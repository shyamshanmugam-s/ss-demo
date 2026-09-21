import * as THREE from "three";

export interface SceneLifecycle {
  init(scene: THREE.Scene, camera: THREE.PerspectiveCamera | THREE.OrthographicCamera, renderer: THREE.WebGLRenderer): void;
  update(time: number, delta: number): void;
  resize(width: number, height: number): void;
  destroy(): void;
  onPointerMove?(x: number, y: number): void;
}

/**
 * Base abstract class for high-performance, disposable Three.js scenes
 */
export class BaseSceneManager implements SceneLifecycle {
  protected scene: THREE.Scene | null = null;
  protected camera: THREE.PerspectiveCamera | THREE.OrthographicCamera | null = null;
  protected renderer: THREE.WebGLRenderer | null = null;
  protected disposables: Array<{ dispose: () => void }> = [];

  init(scene: THREE.Scene, camera: THREE.PerspectiveCamera | THREE.OrthographicCamera, renderer: THREE.WebGLRenderer) {
    this.scene = scene;
    this.camera = camera;
    this.renderer = renderer;
  }

  update(_time: number, _delta: number) {
    // Override in subclasses
  }

  resize(_width: number, _height: number) {
    // Override in subclasses
  }

  onPointerMove(_x: number, _y: number) {
    // Override in subclasses
  }

  trackDisposable<T extends { dispose: () => void }>(disposable: T): T {
    this.disposables.push(disposable);
    return disposable;
  }

  destroy() {
    this.disposables.forEach((item) => {
      try {
        item.dispose();
      } catch (e) {
        console.warn("Error disposing Three.js resource:", e);
      }
    });
    this.disposables = [];
    this.scene = null;
    this.camera = null;
    this.renderer = null;
  }
}
