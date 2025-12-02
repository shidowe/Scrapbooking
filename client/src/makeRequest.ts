export function makeRequest(
    url: string,
    method: string,
    body: any,
    onSuccess: (response: any) => void = () => {},
    onFailure: (message: string) => void = () => {},
    parse: boolean = false,
    responseType: XMLHttpRequestResponseType = "text"): void {
    const request = new XMLHttpRequest();
    request.responseType = responseType;

    request.onreadystatechange = _ => {
        if (request.readyState !== 4) return;
        if (request.status < 200 || request.status >= 300) {
            onFailure(request.response);
            return;
        }
        if (parse) {
            try {
                onSuccess(typeof request.response === "string"
                    ? JSON.parse(request.response)
                    : JSON.parse(new TextDecoder().decode(request.response)));
            } catch (err) {
                onFailure("Failed to parse JSON: " + err.message);
            }
        } else onSuccess(request.response);
    }

    request.open(method, url, true);
    if (!(body instanceof FormData)) {
        request.setRequestHeader("Content-Type", "application/json");
        body = JSON.stringify(body);
    }

    request.send(body);
}
