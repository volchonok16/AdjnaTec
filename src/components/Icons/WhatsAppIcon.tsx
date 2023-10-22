import {FC} from 'react';
import {IIconProps} from './types';

export const WhatsAppIcon: FC<IIconProps> = ({
                                                 width = 69,
                                                 height = 67,
                                                 className = '',
                                             }) => {
    return (
        <a href={''} target="_blank" rel="noreferrer">
            <svg
                width={width}
                height={height}
                viewBox="0 0 69 67"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={className}>
                <path id="Vector"
                      d="M33.4807 0.0501887C16.6685 0.964737 3.11184 14.6874 2.45941 31.4342C2.20643 37.9443 3.85747 44.0457 6.91099 49.2414C7.5612 50.3481 7.64331 51.6935 7.11072 52.862L0.655273 67L15.0907 60.9251C16.3689 60.3861 17.8202 60.4943 19.0252 61.1814C24.2247 64.1437 30.3073 65.7298 36.7827 65.4514C53.5816 64.7313 67.2958 51.2119 68.1723 34.496C69.1931 15.0055 53.0712 -1.01458 33.4807 0.0501887ZM53.5771 43.0229C52.5652 48.1126 47.7031 48.9542 44.6518 48.9653C43.196 48.9697 41.7669 48.6295 40.4665 47.9778C35.145 45.3049 18.9076 36.303 18.6302 25.7967C18.4172 17.7558 22.0144 15.6704 24.633 15.2131C26.0688 14.9613 27.4801 15.7698 27.9927 17.1284L30.3206 23.2917C30.5914 24.0096 30.4737 24.8181 30.0099 25.43L28.7473 27.0934C28.3167 27.659 28.157 28.3901 28.3234 29.0816C29.9234 35.7772 35.884 38.987 39.0507 40.2483C40.2179 40.7145 41.5472 40.4383 42.4371 39.5547L44.2501 37.7499C45.0135 36.99 46.1896 36.8287 47.1283 37.3567C48.6285 38.2028 50.8631 39.4597 52.3167 40.2771C53.2886 40.8249 53.7924 41.9316 53.5771 43.0229Z"
                />
            </svg>
        </a>
    );
};
