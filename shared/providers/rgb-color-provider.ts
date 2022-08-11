import { injectable } from 'inversify';
import { RgbColor } from '../models/rgb-color';
import { IColorGeneratorService } from '../services/color-generator-service';

@injectable()
export class RgbColorProvider implements IColorGeneratorService {
    generateColor(): RgbColor {
        return new RgbColor();
    }
}
