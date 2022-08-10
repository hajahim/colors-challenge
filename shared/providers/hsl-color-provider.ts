import { Color } from '../models/color';
import { HSLColor } from '../models/hsl-color';
import { IColorGeneratorService } from '../services/color-generator-service';

export class HSLColorProvider implements IColorGeneratorService {
    generateColor(): Color<HSLColor> {
        throw new Error('Method not implemented.');
    }
}
