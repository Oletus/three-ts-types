import { ShaderMaterial } from '../../../src/Three.js';

import { Pass, FullScreenQuad } from './Pass.js';

export class FilmPass extends Pass {
    constructor(noiseIntensity?: number, scanlinesIntensity?: number, scanlinesCount?: number, grayscale?: number);
    uniforms: object;
    material: ShaderMaterial;
    fsQuad: FullScreenQuad;
}
