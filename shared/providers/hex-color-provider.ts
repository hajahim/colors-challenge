import { injectable } from 'inversify';
import { HexColor } from '../models/hex-color';
import { IColorGeneratorService } from '../services/color-generator-service';

@injectable()
export class HexColorProvider implements IColorGeneratorService {
    generateColor(): HexColor {
        return new HexColor();
    }
}
