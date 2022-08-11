import { numberRandomFromRange } from '../utils/random';
import { IColor, ColorType } from './color';
import { RangedNumber } from './ranged-number';

interface HSLColorProperty {
    hue: RangedNumber<0, 360>;
    saturation: RangedNumber<0, 100>;
    lightness: RangedNumber<0, 100>;
}

export class HSLColor implements IColor<HSLColorProperty> {
    type: ColorType = ColorType.HSL;
    composition: HSLColorProperty = {
        hue: numberRandomFromRange(0, 360),
        saturation: numberRandomFromRange(0, 100),
        lightness: numberRandomFromRange(0, 100),
    };

    asString(): string {
        return `hsl(${this.composition.hue}, ${this.composition.saturation}%, ${this.composition.lightness}%)`;
    }
}
