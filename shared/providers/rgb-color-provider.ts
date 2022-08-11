import { injectable } from 'inversify';
import { RGBColor } from '../models/rgb-color';
import { IColorGeneratorService } from '../services/color-generator-service';

@injectable()
export class RgbColorProvider implements IColorGeneratorService {
    generateColor(): RGBColor {
        return new RGBColor();
    }
}
