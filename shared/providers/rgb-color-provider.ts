import { injectable } from 'inversify';
import { RGBColor } from '../models/rgb-color';
import { IColorGeneratorService } from '../services/color-generator-service';
import { numberRandomFromRange } from '../utils/random';

@injectable()
export class RgbColorProvider implements IColorGeneratorService {
    generateColor(): RGBColor {
        const rgbColor = new RGBColor();
        rgbColor.composition.red = numberRandomFromRange(0, 255);
        rgbColor.composition.green = numberRandomFromRange(0, 255);
        rgbColor.composition.blue = numberRandomFromRange(0, 255);
        return rgbColor;
    }
}
