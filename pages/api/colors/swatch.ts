// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
    name: string
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
    req: NextApiRequest,
    res: NextApiResponse<Data>,
) {
    res.status(200).json({ name: 'John Doe' });
}
