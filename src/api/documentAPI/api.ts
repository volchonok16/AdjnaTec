import {freeBodyRequest} from '../freeBodyRequest';
import {DOWNLOAD_DOCUMENT, LOOK_DOCUMENT} from '../constantAPI';

export type ParamsType = 'functional' | 'staff_card' | 'benefit' | 'instructions'

export const lookDocument = (params: ParamsType) => {
    return freeBodyRequest(`${LOOK_DOCUMENT}?document=${params}`, 'GET')
}

export const downloadDocument = (params: ParamsType) => {
    return fetch(process.env.REACT_APP_API_URL + `${DOWNLOAD_DOCUMENT}?document=${params}`, {
        method: 'GET',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/pdf',
        },
    }).then((response: Response) => {
        const {status, headers} = response;
        return Promise.resolve(response.blob()).then((blob) => {
            return {blob, status, headers};
        });
    });
}