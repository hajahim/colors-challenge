import { useColors } from '../../shared/hooks/use-colors';
import { IColor } from '../../shared/models/color';
import { ColorItem } from './color-item';
import classes from './color-swatch.module.css';

export const ColorSwatch = () => {
    const [colors, generateColors] = useColors();
    const ColorsList = colors.map((color: IColor<unknown>, index: number) => <ColorItem color={color} key={index} />);
    return <div className={classes.ColorSwatch}>
        <h1> Colors generator </h1>
        {ColorsList}
        <button onClick={generateColors} className={classes.Button}> Generate color </button>
    </div>;
};
