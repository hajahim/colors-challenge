
import type { FC } from 'react';
import { IColor } from '../../shared/models/color';
import classes from './color-item.module.css';

interface ColorItemProps {
    color: IColor<unknown>;
}

export const ColorItem: FC<ColorItemProps> = (props: ColorItemProps) => <div className={classes.ColorItem}>
    <div className={classes.Viewer} style={{ background: props.color.asString() }}></div>
    <div className={classes.Type}> Type: {props.color.type} </div>
</div>;
