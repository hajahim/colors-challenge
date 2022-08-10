import { RangedNumber } from '../models/ranged-number';

export function numberRandomFromRange(min: number, max: number): RangedNumber<number, number> {
    return Math.floor(Math.random() * (max - min + 1)) + min as RangedNumber<number, number>;
}
