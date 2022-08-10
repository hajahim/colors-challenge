import { Color } from '../models/color';

export abstract class IColorGeneratorService {
    abstract generateColor(): Color<unknown>;
}
