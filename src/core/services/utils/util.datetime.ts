import { format } from "date-fns";

export function datetimeToTimeJSON(datetime: string | number | Date = new Date()) {
    const today = new Date(datetime);
    return {
        hours: today.getHours(),
        minutes: today.getMinutes(),
        seconds: today.getSeconds()
    };
}

export const formattedTime = (time: any, defaultTime = { hours: 0, minutes: 0, seconds: 0 }) => format(
    new Date().setHours(
        (time && time.hours) || defaultTime.hours,
        (time && time.minutes) || defaultTime.minutes,
        (time && time.seconds) || defaultTime.seconds
    ),
    'HH:mm:ss'
);