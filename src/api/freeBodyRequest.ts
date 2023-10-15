export function freeBodyRequest(url: string, method: string) {

    return fetch(process.env.REACT_APP_API_URL + url, {
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
