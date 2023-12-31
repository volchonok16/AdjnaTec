import {FC} from 'react';
import {IIconProps} from './types';
import {RedirectURL} from '../../enum';

export const YouTubeIcon: FC<IIconProps> = ({
                                                width = 99,
                                                height = 67,
                                                className = '',
                                            }) => {
    return (
        <a href={RedirectURL.YOUTUBE} target="_blank" rel="noreferrer">
            <svg
                width={width}
                height={height}
                viewBox="0 0 99 67"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={className}>
                <path id="Vector"
                      d="M78.4406 0H20.3823C9.40292 0 0.503906 8.84481 0.503906 19.7574V47.2426C0.503906 58.1552 9.40292 67 20.3823 67H78.4406C89.42 67 98.319 58.1552 98.319 47.2426V19.7574C98.319 8.84481 89.42 0 78.4406 0ZM64.8416 34.5683L43.2764 46.9439C41.8736 47.7501 40.1176 46.7423 40.1176 45.1322V20.381C40.1176 18.7709 41.8712 17.7631 43.2764 18.5694L64.8416 30.945C66.2444 31.7512 66.2444 33.7644 64.8416 34.5683Z"
                />
            </svg>
        </a>
    );
};
