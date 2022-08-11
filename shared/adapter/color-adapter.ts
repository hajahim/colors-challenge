import { ColorType, IColor } from '../models/color';
import { HSLColor } from '../models/hsl-color';
import { RGBColor } from '../models/rgb-color';

export const colorAdapter = (color: IColor<unknown>) => {
    switch (color.type) {
        case ColorType.HSL: {
            const colorHsl: HSLColor = new HSLColor();
            const property = color as HSLColor;
            colorHsl.composition.hue = property.composition.hue;
            colorHsl.composition.lightness = property.composition.lightness;
            colorHsl.composition.saturation = property.composition.saturation;
            return colorHsl;
        }
        case ColorType.RGB: {
            const colorRgb: RGBColor = new RGBColor();
            const property = color as RGBColor;
            colorRgb.composition.blue = property.composition.blue;
            colorRgb.composition.green = property.composition.green;
            colorRgb.composition.red = property.composition.red;
            return colorRgb;
        }
        default: {
            throw new Error('Unrecognized Color Format');
        }
    }
};
