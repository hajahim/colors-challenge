import { injectable } from 'inversify';
import { HslColor } from '../models/hsl-color';
import { IColorGeneratorService } from '../services/color-generator-service';

@injectable()
export class HslColorProvider implements IColorGeneratorService {
    generateColor(): HslColor {
        return new HslColor();
    }
}
