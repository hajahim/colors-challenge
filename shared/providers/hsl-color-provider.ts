import { injectable } from 'inversify';
import { HSLColor } from '../models/hsl-color';
import { IColorGeneratorService } from '../services/color-generator-service';

@injectable()
export class HslColorProvider implements IColorGeneratorService {
    generateColor(): HSLColor {
        return new HSLColor();
    }
}
