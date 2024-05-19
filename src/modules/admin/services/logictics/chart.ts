import type { TInputFormat, TOutputFormat } from "../../models/type";

export const transformData = (input: TInputFormat): TOutputFormat => {
    const lastData = Object.values(input.last);
    const currentData = Object.values(input.current);
    const labels = Object.keys(input.last);

    return {
        series: [
            {
                name: 'Last Period',
                data: lastData
            },
            {
                name: 'Current Period',
                data: currentData
            }
        ],
        labels: labels
    };
};