import { Color, ColorType } from './color';

interface HSLColorProperty {
    hue: number;
    saturation: number;
    lightness: number;
}

export class HSLColor implements Color<HSLColorProperty> {
    type: ColorType = ColorType.HSL;
    composition: HSLColorProperty = {
        hue: 0,
        saturation: 0,
        lightness: 0,
    };
}
