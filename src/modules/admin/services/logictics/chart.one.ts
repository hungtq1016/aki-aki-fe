
import { ref } from "vue";
import type { TInputFormat, TOutputFormat } from "../../models/type";
import { watch } from "vue";
import { get } from '@/core/services/helpers/request.helper';
import { transformData } from "./chart";

export const state = ref<TOutputFormat>({
    series: [],
    labels: []
} as TOutputFormat);

export const timeperiod = ref('week');

export const fetch = async () => {
    await get<TInputFormat>('/api/invoices/compare-count', { timeperiod: timeperiod.value }).then(response => {
        if (response?.data) {
            state.value = transformData(response.data)
        }
    });
};


export const apexOptions = ref({
    legend: {
        show: false,
        position: 'top',
        horizontalAlign: 'left'
    },
    colors: ['#3C50E0', '#80CAEE'],
    chart: {
        fontFamily: 'Satoshi, sans-serif',
        height: 335,
        type: 'area',
        dropShadow: {
            enabled: true,
            color: '#623CEA14',
            top: 10,
            blur: 4,
            left: 0,
            opacity: 0.1
        },
        toolbar: {
            show: false
        }
    },
    responsive: [
        {
            breakpoint: 1024,
            options: {
                chart: {
                    height: 300
                }
            }
        },
        {
            breakpoint: 1366,
            options: {
                chart: {
                    height: 350
                }
            }
        }
    ],
    stroke: {
        width: [2, 2],
        curve: 'straight'
    },
    labels: {
        show: false,
        position: 'top'
    },
    grid: {
        xaxis: {
            lines: {
                show: true
            }
        },
        yaxis: {
            lines: {
                show: true
            }
        }
    },
    dataLabels: {
        enabled: false
    },
    markers: {
        size: 4,
        colors: '#fff',
        strokeColors: ['#3056D3', '#80CAEE'],
        strokeWidth: 3,
        strokeOpacity: 0.9,
        strokeDashArray: 0,
        fillOpacity: 1,
        discrete: [],
        hover: {
            size: undefined,
            sizeOffset: 50
        }
    },
    xaxis: {
        type: 'category',
        categories: state.value.labels,
        axisBorder: {
            show: false
        },
        axisTicks: {
            show: false
        }
    },
    yaxis: {
        title: {
            style: {
                fontSize: '0px'
            }
        },
        min: 0,
        max: 25
    }
});

watch(timeperiod, async () => {
    await fetch()
}, { deep: true });

