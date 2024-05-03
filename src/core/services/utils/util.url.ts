export function urlBuilder(path: string, params?: object): string {

    let queryString: string = import.meta.env.VITE_API_DOMAIN + ':' + import.meta.env.VITE_API_HOST + path;

    if (params) {
        const query = Object.entries(params)
            .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
            .join('&');
        queryString += `?${query}`;
    }

    return queryString;
}

export function getPath(path: string, pathObject: any = ""): string {
    const keys = path.split('.');

    return keys.reduce((acc, key) => {
        return acc && acc[key] ? acc[key] : undefined;
    }, pathObject);
}
