export interface Color<ColorComposition> {
    type: ColorType;
    composition: ColorComposition;
}

export enum ColorType {
    RGB = 'rgb',
    HSL = 'hsl',
}
