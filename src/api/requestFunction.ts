import { BASE_URL } from "./baseUrl";

export function requestWithBody(
    url: string,
    method: string,
    body: string | number | object | undefined
) {

    return fetch(BASE_URL + url, {
        method,
        body: JSON.stringify(body),
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
    }).then((response: Response) => {
        const {status} = response;
        return Promise.resolve(response.json()).then((json) => {
            return {json, status};
        });
    });
}
