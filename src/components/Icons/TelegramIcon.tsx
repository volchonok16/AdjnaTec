import {FC} from 'react';
import {IIconProps} from './types';
import {RedirectURL} from '../../enum';

export const TelegramIcon: FC<IIconProps> = ({
                                                 width = 71,
                                                 height = 68,
                                                 className = '',
                                             }) => {
    return (
        <a href={RedirectURL.TELEGRAM} target="_blank" rel="noreferrer">
            <svg
                width={width}
                height={height}
                viewBox="0 0 71 68"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={className}>
                <g id="&#209;&#132;&#208;&#190;&#209;&#128;&#208;&#188;&#208;&#176;">
                    <path id="Vector"
                          d="M21.4332 48.9631L21.7836 48.6444L57.8297 15.9472L33.2826 53.44L65.4474 66.0295L70.525 0L0.554688 40.8482L21.4332 48.9631Z"
                    />
                    <path id="Vector_2" d="M33.2832 53.4402L33.566 67.089L44.4414 57.8068"
                    />
                </g>
            </svg>
        </a>
    );
};
