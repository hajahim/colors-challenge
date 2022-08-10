export interface Color<ColorComposition> {
    type: string;
    composition: ColorComposition;
}

export enum ColorType {
    RBG = 'rgb',
    HSL = 'hsl',
}
