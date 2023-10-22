import {FC} from 'react';
import {IIconProps} from './types';

export const BurgerCrossIcon: FC<IIconProps> = ({
                                                    width = 17,
                                                    height = 17,
                                                    className = '',
                                                    onClick
                                                }) => {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 17 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            onClick={onClick}>
            <g id="&#208;&#186;&#209;&#128;&#208;&#181;&#209;&#129;&#209;&#130;">
                <path id="Vector 67" d="M16.0002 16L1.00025 1" strokeLinecap="round"
                      strokeLinejoin="round"/>
                <path id="Vector 68" d="M1 16L16 1" strokeLinecap="round"
                      strokeLinejoin="round"/>
            </g>
        </svg>
    );
};
