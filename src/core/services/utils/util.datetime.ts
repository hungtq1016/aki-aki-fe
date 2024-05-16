export function datetimeToTimeJSON(datetime: string | number | Date = new Date()) {
    const today = new Date(datetime);
    return {
        hours: today.getHours(),
        minutes: today.getMinutes(),
        seconds: today.getSeconds()
    };
}