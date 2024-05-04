export function stringify(params: object): string {
    return JSON.stringify(params);
}

export function capitalize(string:string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}