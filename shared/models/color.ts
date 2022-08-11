export interface IColor<ColorComposition> {
    type: ColorType;
    composition: ColorComposition;
    asString(): string;
}

export enum ColorType {
    RGB = 'rgb',
    HSL = 'hsl',
    HEX = 'hex',
}
