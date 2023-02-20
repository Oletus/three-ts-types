import { Object3D, Vector3, WebGLRenderer } from '../../../src/Three.js';
import { Octree } from '../math/Octree.js';

export class ViewHelper extends Object3D {
    animating: boolean;
    center: Vector3;

    readonly isViewHelper: true;

    constructor(camera: Octree, domElement: HTMLElement);

    render(renderer: WebGLRenderer): void;
    handleClick(event: PointerEvent): boolean;
    update(delta: number): void;
    dispose(): void;
}
