// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Container, LazyServiceIdentifer } from 'inversify';
import type { NextApiRequest, NextApiResponse } from 'next';
import 'reflect-metadata';
import { Color, ColorType } from '../../../shared/models/color';
import { HSLColorProvider } from '../../../shared/providers/hsl-color-provider';
import { RGBColorProvider } from '../../../shared/providers/rgb-color-provider';
import { IColorGeneratorService } from '../../../shared/services/color-generator-service';
import { numberRandomFromRange } from '../../../shared/utils/random';

interface ProviderItem {
    symbol: string;
    instance: any;
}

interface ProviderItemRecord {
    [key: string]: ProviderItem
}

const colorGeneratorContainer = new Container();

// suscribe color provider here
const COLOR_PROVIDERS: ProviderItemRecord = {
    [ColorType.HSL]: {
        symbol: ColorType.HSL,
        instance: HSLColorProvider,
    },
    [ColorType.RGB]: {
        symbol: ColorType.RGB,
        instance: RGBColorProvider,
    },
};

for (const providerIndex in COLOR_PROVIDERS) {
    const provider: ProviderItem = COLOR_PROVIDERS[providerIndex];
    colorGeneratorContainer.bind<IColorGeneratorService>(provider.symbol).to(provider.instance);
}

function generateColor(): Color<unknown> {
    const colorTypes = Object.values(ColorType);
    const randomIndex = numberRandomFromRange(0, colorTypes.length - 1);
    const colorGeneratorService = colorGeneratorContainer.get<IColorGeneratorService>(colorTypes[randomIndex]);
    return colorGeneratorService.generateColor();
}

/**
 * @swagger
 * /api/colors:
 *   get:
 *     description: Returns colors swatch randomly
 *     tags:
 *       - colors
 *     responses:
 *       200:
 *         description: operation suceed
 */
export default function handler(
    _req: NextApiRequest,
    res: NextApiResponse<Array<Color<unknown>>>,
) {
    const colors: Array<Color<unknown>> = [];
    const colorsLength = process.env.COLOR_TO_GENERATE ?? 5;
    // eslint-disable-next-line no-plusplus
    for (let iterator = 0; iterator < colorsLength; iterator++) {
        colors.push(generateColor());
    }
    res.status(200).json(colors);
}
