import {FC} from 'react';
import {IIconProps} from './types';

export const BurgerIcon: FC<IIconProps> = ({
                                               width = 22,
                                               height = 22,
                                               className = '',
                                               onClick
                                           }) => {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            onClick={onClick}>
            <g id="&#208;&#177;&#209;&#131;&#209;&#128;&#208;&#179;&#208;&#181;&#209;&#128;">
                <path id="Line 18" d="M6 7L16.0001 7.0548" strokeLinecap="round"/>
                <path id="Line 19" d="M6 10.9883L16.0001 11.0431" strokeLinecap="round"/>
                <path id="Line 20" d="M6 14.9883L16.0001 15.0431" strokeLinecap="round"/>
                <circle id="Ellipse 163" cx="11" cy="11" r="10.5"/>
            </g>
        </svg>
    );
};
