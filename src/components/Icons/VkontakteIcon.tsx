import {FC} from 'react';
import {IIconProps} from './types';
import {RedirectURL} from '../../enum';

export const VkontakteIcon: FC<IIconProps> = ({
                                                  width = 102,
                                                  height = 63,
                                                  className = '',
                                              }) => {
    return (
        <a href={RedirectURL.TELEGRAM} target="_blank" rel="noreferrer">
            <svg
                width={width}
                height={height}
                viewBox="0 0 102 63"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={className}>
                <path id="Vector"
                      d="M101.702 62.9542H84.2754C79.2224 54.5156 71.4774 47.8431 62.2326 44.0755V62.9542C28.3936 62.9542 0.861328 35.6514 0.861328 2.0944H16.5066C16.5066 21.0516 28.2559 37.3101 44.9147 44.0581V0H62.2326V18.8962C71.4774 15.1256 79.2224 8.43864 84.2754 0H101.702C96.0218 13.7139 85.4178 24.9296 72.0867 31.4771C85.4178 38.0392 96.0218 49.2404 101.702 62.9542Z"
                />
            </svg>
        </a>
    );
};
