import { Color, ColorType } from './color';
import { RangedNumber } from './ranged-number';

interface HSLColorProperty {
    hue: RangedNumber<0, 360>;
    saturation: RangedNumber<0, 100>;
    lightness: RangedNumber<0, 100>;
}

export class HSLColor implements Color<HSLColorProperty> {
    type: ColorType = ColorType.HSL;
    composition: HSLColorProperty = {
        hue: 0,
        saturation: 0,
        lightness: 0,
    };
}