import { BASE_URL } from "./baseUrl";

export function freeBodyRequest(url: string, method: string) {

    return fetch(BASE_URL + url, {
        method,
        credentials: "same-origin",
        headers: {
            "Content-Type": "application/json",
        },
    }).then((response: Response) => {
        const { status } = response;
        return Promise.resolve(response.json()).then((json) => {
            return { json, status };
        });
    });
}
