import { Material } from './../materials/Material.js';
import { Raycaster } from './../core/Raycaster.js';
import { Object3D } from './../core/Object3D.js';
import { BufferGeometry } from '../core/BufferGeometry.js';
import { Intersection } from '../core/Raycaster.js';
import { Vector3 } from '../math/Vector3.js';

export class Mesh<
    TGeometry extends BufferGeometry = BufferGeometry,
    TMaterial extends Material | Material[] = Material | Material[],
> extends Object3D {
    constructor(geometry?: TGeometry, material?: TMaterial);

    geometry: TGeometry;
    material: TMaterial;
    morphTargetInfluences?: number[] | undefined;
    morphTargetDictionary?: { [key: string]: number } | undefined;
    readonly isMesh: true;
    type: string;

    updateMorphTargets(): void;

    /**
     * Get the local-space position of the vertex at the given index,
     * taking into account the current animation state of both morph targets and skinning.
     */
    getVertexPosition(index: number, target: Vector3): Vector3;

    raycast(raycaster: Raycaster, intersects: Intersection[]): void;
}
