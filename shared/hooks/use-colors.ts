import { useEffect, useState } from 'react';
import { colorAdapter } from '../adapter/color-adapter';
import { IColor } from '../models/color';

export const useColors = (): [Array<IColor<unknown>>, () => void] => {
    const [colors, setColors] = useState<Array<IColor<unknown>>>([]);

    const fetchColors = () => fetch(`${process.env.NEXT_PUBLIC_API_URL}/colors`)
        .then((res) => res.json())
        .then((colorsResults: Array<IColor<unknown>>) => setColors(colorsResults.map((color) => colorAdapter(color))));

    const generateColors = () => fetchColors();

    useEffect(() => {
        fetchColors();
    }, []);

    return [colors, generateColors];
};
