import { Bone } from './Bone.js';
import { Matrix4 } from './../math/Matrix4.js';
import { DataTexture } from './../textures/DataTexture.js';

export class Skeleton {
    constructor(bones: Bone[], boneInverses?: Matrix4[]);

    uuid: string;
    bones: Bone[];
    boneInverses: Matrix4[];
    boneMatrices: Float32Array;
    boneTexture: null | DataTexture;
    boneTextureSize: number;
    frame: number;

    init(): void;
    calculateInverses(): void;
    computeBoneTexture(): this;
    pose(): void;
    update(): void;
    clone(): Skeleton;
    getBoneByName(name: string): undefined | Bone;
    dispose(): void;

    /**
     * @deprecated This property has been removed completely.
     */
    useVertexTexture: boolean;
}
