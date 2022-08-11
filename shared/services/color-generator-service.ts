import { IColor } from '../models/color';

export abstract class IColorGeneratorService {
    abstract generateColor(): IColor<unknown>;
}
