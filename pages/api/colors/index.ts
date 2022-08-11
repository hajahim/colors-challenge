// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Container } from 'inversify';
import type { NextApiRequest, NextApiResponse } from 'next';
import 'reflect-metadata';
import { IColor } from '../../../shared/models/color';
import { IColorGeneratorService } from '../../../shared/services/color-generator-service';
import { numberRandomFromRange } from '../../../shared/utils/random';
import { providers } from '../../../temp/colorRegisteredProvider';

const colorGeneratorContainer = new Container();

// register provider list for colors
Array.from(providers).forEach(([key, value]) => {
    colorGeneratorContainer.bind<IColorGeneratorService>(key).to(value);
});

function generateColor(): IColor<unknown> {
    const colorTypes = Array.from(providers.keys());
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
    res: NextApiResponse<Array<IColor<unknown>>>,
) {
    const colors: Array<IColor<unknown>> = [];
    const colorsLength = process.env.COLOR_TO_GENERATE ?? 5;
    // eslint-disable-next-line no-plusplus
    for (let iterator = 0; iterator < colorsLength; iterator++) {
        colors.push(generateColor());
    }
    res.status(200).json(colors);
}
