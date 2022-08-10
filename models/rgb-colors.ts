import { BinaryColor } from './binary-color';
import { Color, ColorType } from './color';

interface RGBColorProperty<ValueType> {
    red: ValueType;
    green: ValueType;
    blue: ValueType;
}

export class RGBColor implements Color<RGBColorProperty<BinaryColor>> {
    type: ColorType = ColorType.RBG;
    composition: RGBColorProperty<BinaryColor> = {
        red: new BinaryColor(0),
        green: new BinaryColor(0),
        blue: new BinaryColor(0),
    };
}
