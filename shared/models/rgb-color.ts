import { RangedNumber } from './ranged-number';
import { IColor, ColorType } from './color';
import { numberRandomFromRange } from '../utils/random';

interface RGBColorProperty {
    red: RangedNumber<0, 255>;
    green: RangedNumber<0, 255>;
    blue: RangedNumber<0, 255>;
}

export class RGBColor implements IColor<RGBColorProperty> {
    type: ColorType = ColorType.RGB;
    composition: RGBColorProperty = {
        red: numberRandomFromRange(0, 255),
        green: numberRandomFromRange(0, 255),
        blue: numberRandomFromRange(0, 255),
    };

    asString(): string {
        return `rgb(${this.composition.red}, ${this.composition.green}, ${this.composition.blue})`;
    }
}
