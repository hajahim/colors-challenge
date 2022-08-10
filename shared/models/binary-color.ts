export class BinaryColor {
    private _value: number = 0;

    constructor(value: number) {
        this._value = value;
    }

    set(value: number) {
        let safeValue = 0;
        if (value < 0) safeValue = 0;
        if (value > 255) safeValue = 255;
        this._value = safeValue;
    }

    get(): number {
        return this._value;
    }
}
