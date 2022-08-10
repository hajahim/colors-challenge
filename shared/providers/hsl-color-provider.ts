import { injectable } from 'inversify';
import { HSLColor } from '../models/hsl-color';
import { IColorGeneratorService } from '../services/color-generator-service';
import { numberRandomFromRange } from '../utils/random';

@injectable()
export class HSLColorProvider implements IColorGeneratorService {
    generateColor(): HSLColor {
        const hslColor = new HSLColor();
        hslColor.composition.hue = numberRandomFromRange(0, 360);
        hslColor.composition.lightness = numberRandomFromRange(0, 100);
        hslColor.composition.saturation = numberRandomFromRange(0, 100);
        return hslColor;
    }
}
