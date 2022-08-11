import { randomHexNumber } from '../utils/random';
import { IColor, ColorType } from './color';

interface HexColorProperty {
    red: string;
    green: string;
    blue: string;
}

export class HexColor implements IColor<HexColorProperty> {
    type: ColorType = ColorType.HEX;
    composition: HexColorProperty = {
        red: randomHexNumber(),
        green: randomHexNumber(),
        blue: randomHexNumber(),
    };

    asString(): string {
        return `#${this.composition.red}${this.composition.green}${this.composition.blue}`;
    }
}
