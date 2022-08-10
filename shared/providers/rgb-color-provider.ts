import { Color } from '../models/color';
import { RGBColor } from '../models/rgb-color';
import { IColorGeneratorService } from '../services/color-generator-service';

export class RGBColorProvider implements IColorGeneratorService {
    generateColor(): Color<RGBColor> {
        throw new Error('Method not implemented.');
    }
}
