import { models } from '../../temp/colorRegistered';
import { IColor } from '../models/color';

export const colorAdapter = (color: IColor<unknown>) => {
    const TypeToCast = models.get(color.type);
    return Object.assign(new TypeToCast(), color);
};
