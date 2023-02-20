import { Color } from './../math/Color.js';
import { Vector3 } from '../math/Vector3.js';
import { Light } from './Light.js';
import { ColorRepresentation } from '../utils.js';

export class HemisphereLight extends Light {
    /**
     * @param skyColor
     * @param groundColor
     * @param [intensity=1]
     */
    constructor(skyColor?: ColorRepresentation, groundColor?: ColorRepresentation, intensity?: number);

    /**
     * @default 'HemisphereLight'
     */
    type: string;

    /**
     * This is set equal to {@link Object3D.DEFAULT_UP} (0, 1, 0), so that the light shines from the top down.
     *
     * @default {@link Object3D.DEFAULT_UP}
     */
    position: Vector3;

    groundColor: Color;

    readonly isHemisphereLight: true;
}
