import { RangedNumber } from './ranged-number';
import { IColor, ColorType } from './color';

interface RGBColorProperty {
    red: RangedNumber<0, 255>;
    green: RangedNumber<0, 255>;
    blue: RangedNumber<0, 255>;
}

export class RGBColor implements IColor<RGBColorProperty> {
    type: ColorType = ColorType.RGB;
    composition: RGBColorProperty = {
        red: 0,
        green: 0,
        blue: 0,
    };

    asString(): string {
        return `rgb(${this.composition.red}, ${this.composition.green}, ${this.composition.blue})`;
    }
}
